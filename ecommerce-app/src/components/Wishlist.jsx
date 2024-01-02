

import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import AccountSidebar from '../pages/AccountSidebar'
import Header from "../pages/HeaderPage";
import Categories from "./Navbar";
import FooterPage from "../pages/FooterPage";
import AccountWishList from "../pages/AccountWishlist";
import { useNavigate } from "react-router-dom";


const WishListAccount = (props) => {

    const items = props.products;

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

    const wishlist = useSelector((state) => state.wishlist.wishListItems);
    

    return (
        <div className="homepage">
            <Header />
            <hr />
            <Categories />
            <hr />
            <div className="account_area">
                <div className="account-page-full">
                    <div className="account-tabs">
                        <legend>Account Details</legend>
                    </div>
                    <div className="sidebar-account">
                        <AccountSidebar />
                        <AccountWishList items={wishlist} />
                    </div>
                </div>
            </div>
            <hr />
            <FooterPage />
            <hr />
        </div>

    );
}

export default WishListAccount;
