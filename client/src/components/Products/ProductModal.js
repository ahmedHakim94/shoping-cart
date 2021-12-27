import React from 'react'
import Modal from 'react-modal'

function ProductModal(props) {
    const {open,product,closeModal} = props
    return (
        <Modal isOpen={open ===true} ariaHideApp={false}  onRequestClose= {closeModal}>
                <div className='product-modal'>

                    <button onClick={closeModal} className='text-danger btn close-modal'>X</button>
                    <img className='modal-img' src={product.imageurl} />
                    <p className='p-2 text'>Title: <span className='text-primary'>{product.title}</span></p>
                    <p className='p-2'>Descriptions: <span className='text-primary'>{product.desc}</span></p>
                    <p className='p-2'>Price: <span className='text-primary'>${product.price}</span></p>
                    
                </div>

        </Modal>

    )
}
export default ProductModal;
