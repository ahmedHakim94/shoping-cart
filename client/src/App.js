import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { words } from './words';
import Products from './components/Products/Products';
import data from "./data.json"
import { useState } from 'react';
import Filter from './components/Filter/Filter';




function App() {
  const [product, setProduct] = useState(data)
  const [size, setSize] = useState("")
  const [order, SetOrder] = useState("")

  const handelFilterBySize = (e) => {

    setSize(e.target.value)

    if (e.target.value === "all") {
      setProduct(data);
    }
    else {
      
      const cloneProduct = [...product]
      const newProduct = cloneProduct.filter(p => p.sizes.indexOf(e.target.value) != -1);
      setProduct(newProduct);
    }
  }
  const handelFilterByOrder = (e) =>{
    const target = e.target.value
    SetOrder(target)
    const cloneProduct = [...product]
    let newProduct = cloneProduct.sort(function (a,b){
      if (target==="lower"){
        return a.price - b.price
      }
      else if (target==="height"){
        return b.price - a.price

      }
      else{
        return a.id < b.id ? 1 : -1
      }
    })
    setProduct(newProduct);
  }
  return (
    <div className="layout">
      <Header />
      {/* <main>{words.content}</main> */}
      <div className='content container'>
        <Products product={product} />
        <Filter 
        handelFilterBySize={handelFilterBySize}
        handelFilterByOrder ={handelFilterByOrder}
        order={order}
         size={size} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
