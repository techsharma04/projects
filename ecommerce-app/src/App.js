import CatBasedProducts from "./components/CatBasedProducts";
import SingleProduct from "./components/SingleProduct";
import SearchProducts from "./components/SearchProduct";
import HomePage from "./pages/HomePage";
import MyAccount from "./pages/MyAccount";
import Login from "./pages/Login";
import Wishlist from "./components/Wishlist";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from "./components/Cart";
import Checkout from "./pages/Checkout";
import OrderHistory from "./components/OrderHistory";

function App() {

  return (
    <BrowserRouter basename='/SoulSelections'>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products/category/:category" element={<CatBasedProducts />} />
        <Route path="/products/" element={<HomePage />} />
        <Route path="/products/undefined" element={<HomePage />} />
        <Route path="/products/:id" element={<SingleProduct />} />
        <Route path="/products/:search" element={<SearchProducts />} />
        <Route path="/myaccount" element={<MyAccount />} />
        <Route path="/register" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/shoppingcart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/orderhistory" element={<OrderHistory />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
