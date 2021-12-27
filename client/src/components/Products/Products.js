import React from 'react'

import "../../css/Products/Produc.css"
function Products(props) {
    console.log(props)
    return (
        <div className='products row'>
            {props.product.map(prod => {
                return (
                    <div key={prod.id} className='items col-md-3'>
                        <div> <img className='pro-img' src={prod.imageurl} alt={prod.title} /></div>
                        <div className='pro-desc my-3'>
                            <p>{prod.title}</p>
                            <span>{prod.price}</span>
                        </div>
                        <div className='d-flex justify-content-center'> 
                            <button className='btn btn-primary'>Add To Cart</button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Products;