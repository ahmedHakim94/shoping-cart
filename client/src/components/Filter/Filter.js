import React from 'react'
import '../../css/Filter/Filter.css'
function Filter() {
    return (
        <div className='filter'>
            <h2>filter</h2>
            <p>Number Of Product : 4</p>
            <div className='filter-by-size'>
                <span>Size</span>
                <select class="form-control">
                    <option value="all">All</option>
                    <option value="m">M</option>
                    <option value="l">L</option>
                    <option value="xl">Xl</option>
                    <option value="xxl">XXl</option>
                </select>
            </div>

            <div className='filter-by-order'>
                <span>Order</span>
                <select class="form-control">
                    <option value="latest">Latest</option>
                    <option value="lower">Lower</option>
                    <option value="height">Height</option>

                </select>
            </div>
        </div>
    )
}
export default Filter;