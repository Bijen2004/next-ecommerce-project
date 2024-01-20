import ProductItem from '@/components/ProductItem'
import data from '@/lib/data'
import productService from '@/lib/services/ProductService'
import { convertDocToObj } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'
import {MdOutlineKeyboardDoubleArrowRight,MdOutlineKeyboardDoubleArrowLeft} from 'react-icons/md'

const Homepage = async () => {

  const featuredProducts = await productService.getFeatured()
  const latestProducts = await productService.getLatest()

  return (
    <>
    <div className='w-full carousel rounded-box mt-4 max-h-[300px]'>
      {featuredProducts.map((product,index)=>(
        <div key={product._id as React.Key}
        id={`slide-${index}`}
        className='carousel-item relative w-full flex items-center justify-center'>
            <Link href={`/product/${product.slug}`}>
              <img src={product.banner} className='w-full max-h-[300px]' alt={product.name}/>
            </Link>
          <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
            <a href={`#slide-${index === 0 ? featuredProducts.length - 1 :index -1}`} className='btn btn-circle text-2xl bg-black/30 text-white border-none'><MdOutlineKeyboardDoubleArrowLeft/></a>
            <a href={`#slide-${index === featuredProducts.length -1 ? 0:index +1}`} className='btn btn-circle text-2xl bg-black/30 text-white border-none'><MdOutlineKeyboardDoubleArrowRight/></a>
          </div>
        </div>
      ))}
    </div>
    <h2 className='text-2xl font-semibold'>Latest Products</h2>
    <div className='grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4'>
      {
        latestProducts.map((product)=>(
        <ProductItem key={product.slug} product={convertDocToObj(product)}/>
        ))
      }
    </div>
    </>
  )
}

export default Homepage