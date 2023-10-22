import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';

function Navbar() {
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
                        <li className="nav-item nav-link bg-black">
                            {loginState ? (
                                <Link className="nav-link" onClick={onLogoutHandler}>Logout</Link>
                            ) : (
                                <Link className="nav-link" to="/login">Login</Link>
                            )}
                        </li>
                        <li className="nav-item nav-link shop-img"><span className="badge badge-dark">{ numberCart }</span></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;