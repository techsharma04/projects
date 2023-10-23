

const Header = () => {
    return (
        <div className="header">
            <div className="search-bar">
                <input type="text" className="search" placeholder="Search Product"></input>
            </div>
            <div className="logo">
                <h2>Gaming Zone</h2>
            </div>
            <div className="login-cart dropstart">
                <ul class="dropdown-menu">
                    <li><button className="dropdown-item">Register</button></li>
                    <li><button className="dropdown-item">Login</button></li>
                </ul>
                <a className="user" data-bs-toggle="dropdown" ></a>
                <div className="wishlist">
                    <span class="position-absolute top-0 start-100 translate-middle badge bg-danger cart-count">
                        0
                    </span>
                </div>
                <div className="full-cart">
                    <div className="cart-total">
                        <div className="mycart"><small className="small-text">My Cart</small></div>
                        <div className="total"><small className="small-text">$0.00</small></div>
                    </div>
                    <div className="cart-items dropdown-center">
                        <ul class="dropdown-menu">
                            <li><div className="inside-cart">Your cart is empty right now...</div></li>
                        </ul>
                        <div className="cart" data-bs-toggle="dropdown" >
                            <span class="position-absolute top-0 start-100 translate-middle badge bg-danger cart-count">
                                0
                            </span>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}
export default Header;
