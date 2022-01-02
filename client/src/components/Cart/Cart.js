import React, { useState } from 'react'
import "../../css/Cart/Cart.css"
import CheckoutForm from '../CheckoutForm/CheckoutForm'
import { connect } from 'react-redux';
import {  removeCart } from '../../store/reducers/cartsReducer';
import Slide from 'react-reveal/Slide'
import Modal from 'react-modal';
import CartModal from './CartModal';


function Cart(props) {

    const [checkoutForm, setCheckoutForm] = useState(false)
    const [value, setValue] = useState("")
    const [order,setorder] = useState(false)

    const handelForm = (e) => {
        e.preventDefault();
        const order = {
            name: value.name,
            email: value.email
        }
        setorder(order);
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
            {props.cartitems.map(item => (
                <div key={item.id} className='cart-items'>
                    <Slide right >
                        <img src={item.imageurl} />
                        <div className='item-desc'>
                            <div className='item-info'>
                                <p>Title :{item.title}</p>
                                <p>quantity :{item.qty}</p>
                                <p>Price :${item.qty * item.price}</p>
                            </div>
                            <button onClick={() => props.removeCart(item)} className='btn btn-primary'>Remove</button>
                        </div>
                    </Slide>
                </div>
            ))}

           <CartModal order={order} setorder={setorder} cartitems={props.cartitems}/>

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

const mapDispatchToProps = { removeCart }

function mapStateToProps(state) {
    return {

        cartitems: state.carts.cartItems

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);