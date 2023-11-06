import './App.css';
import Home from './Components/Home/Home';
import Shop from './Components/Shop/Shop';
import Contact from './Components/Contact/Contact';
import { Route, Router, Routes } from 'react-router';
import ProductDetails from './Components/Shop/ProductDetails';
import Cart from './Components/cart/Cart';
import Blog from './Components/blog/Blog'
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} ></Route>
        <Route path='shop' element={<Shop />} ></Route>
        <Route path='shop/productdetails/:id' element={<ProductDetails />} />
        <Route path='contact' element={<Contact />} ></Route>
        <Route path='blog' element={<Blog />} ></Route>
        <Route path='cart' element={<Cart />} ></Route>
      </Routes>
    </>
  );
}

export default App;
