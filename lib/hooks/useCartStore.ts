import {create} from 'zustand'
import { round2 } from '../utils'
import {OrderItem} from '../models/OrderModel'
import { persist } from 'zustand/middleware'

type Cart= {
    items:OrderItem[]
    itemsPrice:number
    shippingPrice:number
    totalPrice:number
}

const initialState: Cart={
    items:[],
    itemsPrice:0,
    shippingPrice:0,
    totalPrice:0,
}

export const cartStore = create<Cart>()(
    persist(()=>initialState,{
        name:'cartStore',
    })
)

export default function useCartService(){
    const{
        items,itemsPrice,shippingPrice,totalPrice,
    }=cartStore()
    return{
        items,
        itemsPrice,
        shippingPrice,
        totalPrice,
        increase:(item:OrderItem)=>{
            const exist = items.find((x)=>x.slug === item.slug)
            const updatedCartItems = exist
            ? items.map((x)=>
            x.slug === item.slug?{...exist,qty:exist.qty +1}:x
            ):[...items,{...item,qty:1}]
            const {itemsPrice,shippingPrice,totalPrice}=
            calcPrice(updatedCartItems)
            cartStore.setState({
                items:updatedCartItems,
                itemsPrice,
                shippingPrice,
                totalPrice,
            })
        },
        decrease:(item:OrderItem)=>{
            const exist = items.find(
                (x)=>x.slug === item.slug
            )
            if(!exist) return
            const updatedCartItems =
            exist.qty === 1 ?
            items.filter((x:OrderItem)=>x.slug!==item.slug)
            : items.map((x)=>item.slug?{...exist,qty:exist.qty-1}:x)
            const {itemsPrice,shippingPrice,totalPrice}=
            calcPrice(updatedCartItems)
            cartStore.setState({
                items:updatedCartItems,
                itemsPrice,
                shippingPrice,
                totalPrice,
            })
        }
    }
}

const calcPrice = (items:OrderItem[])=>{
    const itemsPrice = round2(
        items.reduce((acc,item)=>acc+item.price*item.qty,0)
    ),
    shippingPrice = round2(itemsPrice>8000? 0 : 100),
    totalPrice = round2(itemsPrice+shippingPrice)
    return{itemsPrice,shippingPrice,totalPrice}
}