import { Link } from "react-router-dom";

const NavbarPage = (props) => {

    const categories = props.data;

    return (
        <div className="navbar">
            <div className="discount">
                <ul>
                    <li><a className="anchor blink">New Accessories -30% off. More</a></li>
                </ul>
            </div>
            <div className="main-menu">
                <ul>
                    <li>
                        <Link to='/' className="link_text">All</Link> 
                    </li>
                    {
                        categories.map((category) => (<li><Link to={'/products/category/' + category} className="link_text">{category}</Link></li>))
                    }
                </ul>
            </div>
            <div className="collection">
                <ul>
                    <li><a className="anchor blink">New Collections</a></li>
                </ul>
            </div>
        </div>
    )
}

export default NavbarPage;