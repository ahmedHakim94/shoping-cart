import React from 'react'
import Modal from 'react-modal'

function CartModal(props) {
    const {order , setorder , cartitems } = props
    return (
        <Modal isOpen={order} onRequestClose = {()=> setorder(false)} >
        <div className='modalCartItem'> 
        <span className='close-modal-checkout' onClick={()=> setorder(false)}>X</span>
            <p className='modalTitle'>Order Done Sucess</p>
            <table >
                <tr>
                    <td>Name : </td>
                    <td>{order.name}</td>
                </tr>
                <tr>
                    <td>Email : </td>
                    <td>{order.email}</td>
                </tr>
                <tr>
                    <td>Total Salary : </td>
                    <td>$ {props.cartitems.reduce((acc , p) => {
                        return  acc + (p.qty * p.price) 
                    }, 0 )}</td>
                </tr>
                <tr>
                    <td>Selected Items : </td>
                    <td>{props.cartitems.map(item => (
                        <>
                        <p>product Title : {item.title} <img src= {item.imageurl} alt={item.title} /></p>
                        <p>Quantity : {item.qty}</p>
                        <hr/>
                        </>
                    ))}</td>
                </tr>
            </table>

        </div>

    </Modal>
    )
}
export default CartModal