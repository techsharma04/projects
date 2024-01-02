import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteFromCart } from "../reduxx/reducer/cartSlice";


const HeaderPage = () => {

    // Fetching cart data from cart reducer....
    const cart = useSelector((state) => state.cart.cartItems)
    let totalCartQty = 0;
    cart.map((items) => (totalCartQty += items.itemQuantity));

    let totalAmount = 0;
    for (let i of cart) {
        totalAmount += i.price * i.itemQuantity;
    }

    // fetching wishlist data from wishlist reducer....
    const wishlist = useSelector((state) => state.wishlist);
    let totalQty = wishlist.wishListItems.length;


    // Checking and setting login state....
    const [loginState, setLoginState] = useState(false);
    useEffect(() => {
        let token = localStorage.getItem('token');
        if (!token) {
            setLoginState(false);
        } else {
            setLoginState(true);
        }
    }, [loginState]);


    // Forwarding page to home on logout
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const onLogoutHandler = () => {
        localStorage.clear();
        setLoginState(false);
        navigate("/");
    };


    const handleSubmit = (e) => {
        const search = e.target.searchInp.value;
        console.log(search);
        // navigate("/products/"+search);
    }

    const checkoutHandle = () => {
        for (let i of cart) {
            dispatch(deleteFromCart(i));
        }
        navigate("/checkout");
    };

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
                <Link to="/wishlist">
                    <div className="wishlist">
                        <span className="position-absolute top-0 start-100 translate-middle badge bg-danger cart-count">
                            {loginState ? (totalQty) : ("0")}
                        </span>
                    </div></Link>
                <div className="full-cart">
                    <div className="cart-total">
                        <div className="mycart"><small className="small-text">My Cart</small></div>
                        <div className="total"><small className="small-text">$ {totalAmount.toFixed(2)}</small></div>
                    </div>
                    <div className="cart-items dropdown-center">
                        {totalCartQty ? (
                            <ul className="dropdown-menu">
                                <li>
                                    <div className="inside-cart cart-drop">
                                        <div className="cart-pro-title">
                                            <table className="table">
                                                <tbody>
                                                    <tr className="wishHeading">
                                                        {/* <th></th> */}
                                                        <th className="align-center">Title</th>
                                                        <th className="align-center">Price</th>
                                                        <th className="align-center">Qty</th>
                                                        <th className="align-center">Total</th>
                                                    </tr>
                                                    {cart.map((items) => (
                                                        <tr className="wishRow" key={items.id}>
                                                            <td><small>{items.title.substring(0, 22)+"..."}</small></td>
                                                            <td><small>$ {items.price}</small></td>
                                                            <td className="align-center"><small>{items.itemQuantity}</small></td>
                                                            <td className="align-center"><small>$ {items.price * items.itemQuantity}</small></td>
                                                        </tr>
                                                    ))}
                                                    <tr>
                                                        <td colSpan={2} className="cart-btn1">
                                                            <Link to="/shoppingcart"><button className="btn btn-dark">View Cart</button></Link>
                                                        </td>
                                                        <td colSpan={2} className="cart-btn2">
                                                        {loginState ? (
                                                            <Link to="/checkout"><button className="btn btn-dark" onClick={checkoutHandle}>Checkout</button></Link>
                                                        ): (
                                                            <Link to="/login"><button className="btn btn-dark" onClick={checkoutHandle}>Checkout</button></Link>
                                                        )
                                                        }
                                                        </td>
                                                    </tr>
                                                </tbody>

                                            </table>
                                        </div>
                                    </div>
                                </li>
                            </ul>

                        ) : (
                            <ul className="dropdown-menu">
                                <li><div className="inside-cart">Your cart is empty right now...</div></li>
                            </ul>
                        )}

                        <div className="cart" data-bs-toggle="dropdown"  >

                            <div>
                                <span className="position-absolute top-0 start-100 translate-middle badge bg-danger cart-count">
                                    {totalCartQty}
                                </span>
                            </div>
                        </div>


                    </div>

                </div>
            </div>
        </div>
    )
}
export default HeaderPage;
