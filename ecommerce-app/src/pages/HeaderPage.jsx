import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";


const HeaderPage = () => {

    // Fetching cart data from cart reducer....
    const cart = useSelector((state) => state.cart.cartItems)
    let totalCartQty = 0;
    cart.map((items) => (totalCartQty += items.itemQuantity));

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
                        <div className="total"><small className="small-text">$0.00</small></div>
                    </div>
                    <div className="cart-items dropdown-center">
                        {totalCartQty ? (
                            <ul className="dropdown-menu">
                                <li>
                                    <div className="inside-cart">
                                        <div className="cart-pro-title">
                                            <table className="table">
                                                <tbody>
                                                    <tr className="wishHeading">
                                                        {/* <th></th> */}
                                                        <th>Title</th>
                                                        <th>Price</th>
                                                        {/* <th></th> */}
                                                    </tr>
                                                    {   cart.map((items) => (
                                                        <tr className="wishRow" key={items.id}>
                                                            {/* <td><button className="btn btn-dark"><i class="fa fa-trash" aria-hidden="true" onClick={() => dispatch(clearWishlist(items))}></i></button></td> */}
                                                            <td><small>{items.title}</small></td>
                                                            <td><small>$ {items.price}</small></td>
                                                            {/* <td><small><button id={items.id} className="btn btn-dark" onClick={moveRemove}>{selectedItems ? "Remove from Cart" : "Move to Cart"}</button></small></td> */}
                                                        </tr>
                                                    ))}

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
                        <Link to="/shoppingcart">
                            <div className="cart" 
                            // data-bs-toggle="dropdown" 
                            >
                                <span className="position-absolute top-0 start-100 translate-middle badge bg-danger cart-count">
                                    {totalCartQty}
                                </span>
                            </div>
                        </Link>

                    </div>

                </div>
            </div>
        </div>
    )
}
export default HeaderPage;
