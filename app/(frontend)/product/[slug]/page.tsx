import AddToCart from "@/components/AddToCart"
import { convertDocToObj } from "@/lib/utils"
import productService from "@/lib/services/ProductService"
import Image from "next/image"
import Link from "next/link"

export async function generateMetadata({
    params,
}:{
    params:{slug:string}
}){
    const product = await productService.getBySlug(params.slug)
    if(!product){
        return{title:'Product not found'}
    }
    return{
        title:product.name
    }
}

const ProductDetails = async ({params}:{params:{slug:string}}) => {
    const product = await productService.getBySlug(params.slug)
    if(!product){
        return <><div>Product not found. 
        <Link href='/'> Go to <span className="font-semibold underline">homepage</span></Link>
        </div></>
    }
  return (
    <div>
    
    <div className="my-2">
        <Link href='/'>back to products</Link>
    </div>
    <div className="grid md:gap-3 md:grid-cols-4">
        <div className="md:col-span-2">
            <Image
            src={product.image}
            alt={product.name}
            width={640}
            height={640}
            sizes="100vw"
            style={{
                width:'100%',
                height:'auto',
            }}
            className="max-h-[400px] md:max-h-[550px] w-full object-contain"></Image>
        </div>
        <div>
            <ul className="space-y-4">
                <li>
                    <h1 className="text-xl">{product.name}</h1>
                </li>
                <li>
                    {product.rating} of {product.numReviews} reviews
                </li>
                <li>
                    {product.brand}
                </li>
                <li>
                    <div className="divider"></div>
                </li>
                <li>
                    Description: <p>{product.description}</p>
                </li>
            </ul>
        </div>
        <div>
            <div className="card bg-white/10 shadow-xl mt-3 md:mt-0">
                <div className="card-body">
                    <div className="mb-2 flex justify-between">
                    <div>
                        Price
                    </div>
                    <div>
                        Rs{product.price}
                    </div>
                    </div>
                <div className="mb-2 flex justify-between">
                    <div>Status</div>
                    <div>
                        {product.countInStock>0?'In stock':'Sold'}
                    </div>
                </div>
                {product.countInStock !==0 && (
                    <div>
                        <AddToCart item={{...convertDocToObj(product),qty:0,size:''}}/>
                    </div>
                )}
                </div>
            </div>
        </div>
    </div>
    
    </div>
  )
}

export default ProductDetails