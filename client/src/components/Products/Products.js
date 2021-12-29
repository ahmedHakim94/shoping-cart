import React, { Profiler, useEffect, useState } from 'react'
import { connect } from 'react-redux';


import Modal from 'react-modal'
import "../../css/Products/Produc.css"
import ProductModal from './ProductModal'

import Bounce from 'react-reveal/Bounce'
import { fetchProducts } from '../../store/reducers/productsReducer';

function Products(props) {
    const [product, setProduct] = useState("")
    const [open, setOpen] = useState(false);

    useEffect(() => {
        props.fetchProducts()
    }, []);


    const openModal = (product) => {
        setProduct(product)
        setOpen(true)
    }

    const closeModal = () => {
        setProduct("")
        setOpen(false)
    }

    useEffect(() => {
        if (props.updateProducts) {
            console.log(props.updateProducts);
            console.log(props.products)
        }
    }, [props.updateProducts , props.products])

    return (
        <Bounce left cascade>
            <div className='products row'>
                {props.products.map(prod => {
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
                                <button onClick={() => props.addToCart(prod)} className='btn btn-primary'>Add To Cart</button>
                            </div>
                        </div>
                    )
                }) }
                <ProductModal closeModal={closeModal} product={product} open={open} />

            </div>
        </Bounce>
    )
}

const mapDispatchToProps = { fetchProducts }

function mapStateToProps(state) {
    return {
        products: state.products.products,
        updateProducts: state.products.updateProducts
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);