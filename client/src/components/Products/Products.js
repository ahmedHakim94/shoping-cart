import React, { Profiler, useState } from 'react'

import Modal from 'react-modal'
import "../../css/Products/Produc.css"
import ProductModal from './ProductModal'


function Products(props) {
    const [product, setProduct] = useState("")
    const[open,setOpen] = useState(false)
    

    const openModal = (product) => {
        setProduct(product)
        setOpen(true)
    }

    const closeModal =()=>{
        setProduct("")
        setOpen(false)
    }

    return (
        <div className='products row'>
            {props.product.map(prod => {
                return (
                    <div key={prod.id} className='items col-md-3'>
                        <div>
                            <a href='#' onClick={() => openModal(prod)}><img className='pro-img' src={prod.imageurl} alt={prod.title} /></a>
                        </div>
                        <div className='pro-desc my-3'>
                            <p className='p-title'>{prod.title}</p>
                            <span>${prod.price}</span>
                        </div>
                        <div className='d-flex justify-content-center'>
                            <button className='btn btn-primary'>Add To Cart</button>
                        </div>
                    </div>
                )
            })}
            <ProductModal closeModal={closeModal} product={product} open={open}/>
            

        </div>
    )
}

export default Products;