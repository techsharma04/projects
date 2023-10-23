

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="discount">
                <ul>
                    <li><a className="anchor" href="#">New Accessories -30% off. More</a></li>
                </ul>
            </div>
            <div className="main-menu">
                <ul>
                    <li><a className="anchor" href="#">Warcraft</a></li>
                    <li><a className="anchor" href="#">Gaming PC's</a></li>
                    <li><a className="anchor" href="#">Online Games</a></li>
                    <li><a className="anchor" href="#">Accessories</a></li>
                    <li><a className="anchor" href="#">Gaming Chairs</a></li>
                    <li><a className="anchor" href="#">Consoles</a></li>
                </ul>
            </div>
            <div className="collection">
                <ul>
                    <li><a className="anchor" href="#">New Collections</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;