import React from 'react'
import Input from '../InputComp/Input';
import "../../css/CheckoutForm/CheckoutForm.css"


function CheckoutForm(props) {
    return (
        <>
        {props.checkoutForm &&
            <div className='checkform'>
                <span onClick={ () =>props.setCheckoutForm(false)}>&times;</span>
                <form onSubmit={props.handelForm}>

                    <Input label="name" type ="name" onChange ={props.handelinput} name='name'  />

                    <Input label="Email" type ="email" onChange ={props.handelinput} name='email'  />

                    <div>
                        <button className='btn btn-primary'>Checkout</button>
                    </div>
                </form>
            </div>}
            
        </>
    )
}
export default CheckoutForm;