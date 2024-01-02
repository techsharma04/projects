import Navbar from "../components/Navbar";
import Header from "./HeaderPage";
import FooterPage from "./FooterPage";
import "../styles/MyAccount.css"
import { Link} from "react-router-dom";

const Checkout = () => {

    return (
        <div className="homepage">
            <Header />
            <hr />
            <Navbar />
            <hr />
            <div className="account_area">
                <div className="account-page-full">
                    <div className="account-tabs">
                        <legend>Checkout</legend>
                    </div>
                    <div className="sidebar-account">
                        <h4>Your order had placed successfully...</h4>
                        <Link to="/orderHistory"><span>Click here to see your order history...</span></Link>
                    </div>
                </div>
            </div>
            <hr />
            <FooterPage />
            <hr />
        </div>
    )
}

export default Checkout;