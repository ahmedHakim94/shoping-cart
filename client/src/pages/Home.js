import React from "react";
import Products from "../components/Products/Products";
import Filter from "../components/Filter/Filter";
import Cart from "../components/Cart/Cart";

export default  function Home (){
    return(
        <>
            <div className='content container'>


                <Products   />
                <Filter
                />

            </div>
            <Cart  />
        </>
    )
}