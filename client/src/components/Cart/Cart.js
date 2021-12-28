import React, { useState } from 'react'
import "../../css/Cart/Cart.css"
import CheckoutForm from '../CheckoutForm/CheckoutForm'

import Slide  from 'react-reveal/Slide'



function Cart(props) {

    const [checkoutForm, setCheckoutForm] = useState(false)

    const [value, setValue] = useState("")

    const handelForm = (e) => {
        e.preventDefault();
        const order = {
            name: value.name,
            email: value.email
        }
        console.log(order)

    }
    const handelinput = (e) => {
        setValue((prevstate) => ({ ...prevstate, [e.target.name]: e.target.value }))
    }

    return (
        
        <div className='cart'>
            <div className='cart-title'>{props.cartitems.length === 0 ? <span>Empty Cart</span> : <p>
                there is {props.cartitems.length} product in cart
            </p>
            }
            </div>
            {props.cartitems.map(item => {
                return (
                    <Slide right >
                    <div key={item.id} className='cart-items'>
                        <img src={item.imageurl} />
                        <div className='item-desc'>
                            <div className='item-info'>
                                <p>Title :{item.title}</p>
                                <p>quantity :{item.qty}</p>
                                <p>Price :${item.qty * item.price}</p>
                            </div>
                            <button onClick={() => props.removeItem(item)} className='btn btn-primary'>Remove</button>
                        </div>


                    </div>
                    </Slide>
                )
            })}
            {props.cartitems.length !== 0 &&
                <div className='cart-footer'>
                    <div className='total'>Total : ${props.cartitems.reduce((acc, p) => {
                        return acc + (p.qty * p.price)
                    }, 0)}</div>
                    <button onClick={() => setCheckoutForm(true)} className='btn btn-primary'>Select Product</button>
                </div>
            }

            <CheckoutForm handelinput={handelinput} handelForm={handelForm} checkoutForm={checkoutForm} setCheckoutForm={setCheckoutForm} />


        </div>
    )
}
export default Cart;