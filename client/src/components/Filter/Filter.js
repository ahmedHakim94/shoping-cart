import React from 'react'
import '../../css/Filter/Filter.css'
import Bounce from 'react-reveal/Bounce'
import { connect } from 'react-redux'
import { filterdSize, filterdOrder } from '../../store/reducers/productsReducer'


function Filter(props) {
    console.log(props.sort)
    return (
        <Bounce right>
           {props.filterProduct && <div className='filter'>
                <h2>filter</h2>
                <p>Number Of Product : {props.filterProduct.length}</p>
                <div className='filter-by-size'>
                    <span>Size</span>
                    <select onChange={(e) => props.filterdSize(props.products, e.target.value)} value={props.size} className="form-control">
                        <option value="all">all</option>
                        <option value="m">m</option>
                        <option value="l">l</option>
                        <option value="xl">xl</option>
                        <option value="xxl">xxl</option>
                    </select>
                </div>

                <div className='filter-by-order'>
                    <span>Order</span>
                    <select onChange={(e) => props.filterdOrder(props.filterProduct, e.target.value)} value={props.sort} className="form-control">
                        <option value="latest">latest</option>
                        <option value="lower">lower</option>
                        <option value="height">height</option>

                    </select>
                </div>
            </div>}
        </Bounce>
    )
}
const mapDispatchToProps = { filterdSize, filterdOrder }

function mapStateToProps(state) {
    return {
        sort: state.products.sort,
        size: state.products.size,
        products : state.products.products,
        filterSortProducts: state.products.filterSortProducts,
        filterProduct: state.products.filterProduct
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Filter);