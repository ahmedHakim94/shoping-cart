import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { words } from './words';
import Products from './components/Products/Products';
import data from "./data.json"
import { useState } from 'react';
 


function App() {
  const[product,setProduct]=useState(data)
  return (
    <div className="layout">
      <Header/>
      {/* <main>{words.content}</main> */}
      <div className='content container'>
        <Products product={product}/>
        <div className='filter'>filter</div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
