import './App.css';
import Home from './Components/Home/Home';
import Shop from './Components/Shop/Shop';
import Contact from './Components/Contact/Contact';
import { Route, Router, Routes } from 'react-router';
import Blog from './Components/Blog/Blog';
import ProductDetails from './Components/Shop/ProductDetails';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} ></Route>
        <Route path='shop' element={<Shop />} ></Route>
        <Route path='/shop/productdetails' element={<ProductDetails />} />
        <Route path='contact' element={<Contact />} ></Route>
        <Route path='blog' element={<Blog />} ></Route>
      </Routes>
    </>
  );
}

export default App;
