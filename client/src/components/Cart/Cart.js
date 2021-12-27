import React from 'react'
import "../../css/Cart/Cart.css"
function Cart(props) {
    return (
        <div className='cart'>
            <div className='cart-title'>{props.cartitems.length ===0 ? <span>Empty Cart</span> : <p>
               there is {props.cartitems.length} product in cart
                </p>
                }
                </div>
            {props.cartitems.map(item => {
                return (
                    <div key={item.id} className='cart-items'>
                        <img src={item.imageurl} />
                        <div className='item-desc'>
                            <div className='item-info'>
                                <p>{item.title}</p>
                                <p>qty{item.qty}</p>
                                <p>{item.price}</p>
                            </div>
                            <button onClick={() =>props.removeItem(item)} className='btn btn-primary'>Remove</button>
                        </div>


                    </div>
                )
            })}


        </div>
    )
}
export default Cart;