import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Header from "../pages/HeaderPage";
import FooterPage from "./FooterPage";
import AccountSidebar from "./AccountSidebar";

const OrderHistoryPage = (props) => {

    const items = props.data;

    return (
        <div className="homepage">
            <Header />
            <hr />
            <Navbar />
            <hr />
            <div className="account_area">
                <div className="account-page-full">
                    <div className="account-tabs">
                        <legend>Account Details</legend>
                    </div>
                    <div className="sidebar-account">
                        <AccountSidebar />
                        <div className="account-details">
                            <legend>Order History</legend>
                            <table className="table">
                                <tbody>
                                    <tr className="wishHeading">
                                        <th className="align-center">Image</th>
                                        <th className="align-center">Title</th>
                                        <th className="align-center">Price</th>
                                        <th className="align-center">Qty</th>
                                        <th className="align-center">Total</th>
                                    </tr>
                                    {
                                        items.map((item) => (
                                            <tr className="wishRow"> 
                                                <td className="align-center"><small><img src={item.product.image} alt={items.title} width={50} /></small></td>
                                                <td><small>{item.product.title}</small></td>
                                                <td className="align-center"><small>$ {item.product.price}</small></td>
                                                <td className="qty-btns align-center"><small>{item.product.itemQuantity} </small></td>
                                                <td className="align-center"><small>$ {item.product.price * item.product.itemQuantity}</small></td>
                                            </tr>
                                        ))
                                    }
                                </tbody>

                            </table>

                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <FooterPage />
            <hr />
        </div>
    )
}

export default OrderHistoryPage;