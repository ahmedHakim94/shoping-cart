import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { words } from './words';
import Products from './components/Products/Products';
import Filter from './components/Filter/Filter';
import Cart from './components/Cart/Cart';
import store from './store/store';
import { Provider } from 'react-redux';
import { BrowserRouter, NavLink, Route, Router, Routes } from "react-router-dom";
import Home from './pages/Home';
import Orders from './pages/Orders';





function App() {
  // const [product, setProduct] = useState(data)
  // const [size, setSize] = useState("")
  // const [order, SetOrder] = useState("")
  // const [cartitems, setCartItems] = useState(JSON.parse(localStorage.getItem("cartItems")) || [])
  //
  //
  // const handelFilterBySize = (e) => {
  //
  //   setSize(e.target.value)
  //
  //   if (e.target.value === "all") {
  //     setProduct(data);
  //   }
  //   else {
  //
  //     const cloneProduct = [...product]
  //     const newProduct = cloneProduct.filter(p => p.sizes.indexOf(e.target.value) != -1);
  //     setProduct(newProduct);
  //   }
  // }
  // const handelFilterByOrder = (e) => {
  //   const target = e.target.value
  //   SetOrder(target)
  //   const cloneProduct = [...product]
  //   let newProduct = cloneProduct.sort(function (a, b) {
  //     if (target === "lower") {
  //       return a.price - b.price
  //     }
  //     else if (target === "height") {
  //       return b.price - a.price
  //
  //     }
  //     else {
  //       return a.id < b.id ? 1 : -1
  //     }
  //   })
  //   setProduct(newProduct);
  // }
  //
  // const addToCart = (item) => {
  //
  //
  //   const cartItemClone = [...cartitems];
  //   console.log("item ",item)
  //   console.log("cartItemClone ",cartItemClone)
  //
  //   let isItemExist = false;
  //
  //   cartItemClone.forEach(p => {
  //     if (p.id === item.id) {
  //       p.qty++;
  //       isItemExist = true
  //     }
  //   })
  //   if (!isItemExist) {
  //     cartItemClone.push({ ...item, qty: 1 })
  //   }
  //   setCartItems(cartItemClone)
  // }
  //
  // const removeItem = (item) => {
  //   const cartitemclone = [...cartitems];
  //   setCartItems(cartitemclone.filter(p => p.id !== item.id))
  // }
  // useEffect(() => {
  //   localStorage.setItem("cartItems", JSON.stringify(cartitems))
  // }, [cartitems])

  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="layout">
          <Header />
          {/* <main>{words.content}</main> */}
          <div>
            <div className="nav">
              <ul>
                <li><NavLink to="/">Home</NavLink> </li>
                <li><NavLink to="/orders">Orders</NavLink></li>
              </ul>
            </div>

            <Routes>
              <Route path="/" exact element={<Home/>}/>
              <Route path="/orders" exact element={<Orders/>}/>
            </Routes>

            

          </div>

          <Footer />
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
