
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Header from "../pages/HeaderPage";
import Categories from "./Navbar";
import FooterPage from "../pages/FooterPage";
import ShoppingCart from "../pages/ShoppingCart";


const Cart = () => {

    const [loginState, setLoginState] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        let token = localStorage.getItem('token');
        if (!token) {
            setLoginState(false);
            navigate("/login");
        } else {
            setLoginState(true);
        }
    }, [loginState]);

    const shoppingcart = useSelector((state) => state.cart.cartItems);

    return (
        <div className="homepage">
            <Header />
            <hr />
            <Categories />
            <hr />
            <div className="account_area">
                <div className="account-page-full">
                    <div className="account-tabs">
                        <legend>Shopping Cart</legend>
                    </div>
                    <div className="sidebar-account">
                        <ShoppingCart items={shoppingcart} />
                    </div>
                </div>
            </div>
            <hr />
            <FooterPage />
            <hr />
        </div>

    );
}

export default Cart;
