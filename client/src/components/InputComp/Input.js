import React from 'react'

function Input(props) {
    return (
        <>
            <div >
                <label>{props.label}</label>
                <input 
                type={props.type} 
                onChange={props.onChange} 
                name={props.name} 
                required 
                className='form-control' />
            </div>

        </>
    )
}
export default Input;