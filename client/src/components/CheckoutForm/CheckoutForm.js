import React from 'react'
import Input from '../InputComp/Input';
import "../../css/CheckoutForm/CheckoutForm.css"
import Zoom from 'react-reveal/Zoom'


function CheckoutForm(props) {

    return (
        <>
            {props.checkoutForm &&
                <div className='checkform'>
                    <span className='close-form' onClick={() => props.setCheckoutForm(false)}>&times;</span>
                    <Zoom right>

                        <form onSubmit={props.handelForm}>
                            <Input label="name" type="name" onChange={props.handelinput} name='name' />
                            <Input label="Email" type="email" onChange={props.handelinput} name='email' />
                            <div>
                                <button className='btn btn-primary'>Checkout</button>
                            </div>
                        </form>

                    </Zoom>
                </div>}
        </>
    )
}
export default CheckoutForm;