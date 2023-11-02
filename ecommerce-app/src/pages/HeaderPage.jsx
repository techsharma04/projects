import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';


const HeaderPage = () => {

    const navigate = useNavigate();
    const [loginState, setLoginState] = useState(false);
    const { numberCart } = useSelector((state) => state)


    useEffect(() => {
        let token = localStorage.getItem('token');
        if (!token) {
            setLoginState(false);
        } else {
            setLoginState(true);
        }
    }, [loginState]);

    const onLogoutHandler = () => {
        localStorage.clear();
        setLoginState(false);
        navigate("/login");
    };


    const handleSubmit = (e) => {
        const search = e.target.searchInp.value;
        console.log(search);
        // navigate("/products/"+search);
    }

    return (
        <div className="header">
            <div className="search-bar">
                <form onSubmit={handleSubmit} className="search-form" method="get">
                    <input type="text" className="search" placeholder="Search Product" name="searchInp" />
                    <button className="btn btn-dark search-btn" type="submit"><i className="fa fa-search"></i></button>
                </form>
            </div>
            <div className="logo">
                <Link to="/" className="link_text"><span>Soul Selections</span></Link>
            </div>
            <div className="login-cart dropstart">
                {loginState ? (
                    <ul className="dropdown-menu">
                        <li><Link to="/myaccount" className="login-click"><button className="dropdown-item">My Account</button></Link></li>
                        <li><Link to="/login" className="login-click"><button className="dropdown-item" onClick={onLogoutHandler}>Logout</button></Link></li>
                    </ul>
                ) : (
                    <ul className="dropdown-menu">
                        <li><Link to="/register" className="login-click"><button className="dropdown-item">Register</button></Link></li>
                        <li><Link to="/login" className="login-click"><button className="dropdown-item">Login</button></Link></li>
                    </ul>
                )}

                <a className="user" data-bs-toggle="dropdown" ></a>
                <div className="wishlist">
                    <span className="position-absolute top-0 start-100 translate-middle badge bg-danger cart-count">
                        0
                    </span>
                </div>
                <div className="full-cart">
                    <div className="cart-total">
                        <div className="mycart"><small className="small-text">My Cart</small></div>
                        <div className="total"><small className="small-text">$0.00</small></div>
                    </div>
                    <div className="cart-items dropdown-center">
                        {numberCart ? (
                            <ul className="dropdown-menu">
                                <li>
                                    <div className="inside-cart">
                                        <div className="cart-pro-title">
                                            <legend>Hello</legend>
                                        </div>
                                    </div>
                                </li>
                            </ul>

                        ) : (
                            <ul className="dropdown-menu">
                                <li><div className="inside-cart">Your cart is empty right now...</div></li>
                            </ul>
                        )}
                        <div className="cart" data-bs-toggle="dropdown" >
                            <span className="position-absolute top-0 start-100 translate-middle badge bg-danger cart-count">
                                {numberCart}
                            </span>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}
export default HeaderPage;
