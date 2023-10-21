import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className='header'>
            <div className="full-bg">
                <div className='nav-bar'>
                    <h2>Grocery Store</h2>
                    <ul className='nav-items'>
                        <li className="nav-item nav-link"><Link className="nav-link" to="/">Home</Link></li>
                        <li className="nav-item nav-link"><Link className="nav-link" to="/about">About</Link></li>
                        <li className="nav-item nav-link"><Link className="nav-link" to="/categories">Products</Link></li>
                        <li className="nav-item nav-link"><Link className="nav-link" to="/contact">Contact</Link></li>
                        <li className="nav-item nav-link bg-black"><Link className="nav-link" to="/login">Login</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;