import Categories from "../components/Categories";
import Header from "../pages/HeaderPage";
import FooterPage from "./FooterPage";
import "../styles/MyAccount.css"
import { Link } from "react-router-dom";

const MyAccount = () => {

    const fullname = localStorage.getItem('fname')+" "+localStorage.getItem('lname');
    const fname = localStorage.getItem('fname');
    const lname = localStorage.getItem('lname');
    const email = localStorage.getItem('email');


    return (
        <div className="homepage">
            <Header />
            <hr />
            <Categories />
            <hr />
            <div className="account_area">
                <div className="account-page-full">
                    <div className="account-tabs">
                        <legend>Account Details</legend>
                    </div>
                    <div className="sidebar-account">
                        <div className="account-sidebar">
                            <legend>MY ORDERS</legend>
                            <Link to="" className="login-click decoration-remove"><small>Order History</small></Link>
                            <Link to="" className="login-click decoration-remove"><small>Downloads</small></Link>
                            <Link to="" className="login-click decoration-remove"><small>Returns</small></Link>
                            <Link to="" className="login-click decoration-remove"><small>Transactions</small></Link>
                            <Link to="" className="login-click decoration-remove"><small>Change Password</small></Link>
                            <hr />
                            <legend>MY STUFF</legend>
                            <Link to="" className="login-click decoration-remove"><small>Wish List</small></Link>
                            <Link to="" className="login-click decoration-remove"><small>Reward Points</small></Link>
                            <Link to="" className="login-click decoration-remove"><small>Newsletter</small></Link>
                        </div>
                        <div className="account-details">
                            <legend>{fullname}'s Profile</legend>
                            <table className="table">
                                <tbody>
                                    <tr>
                                        <th scope="row"><small>First Name</small></th>
                                        <td><small>{fname}</small></td>
                                    </tr>
                                    <tr>
                                        <th scope="row"><small>Last Name</small></th>
                                        <td><small>{lname}</small></td>
                                    </tr>
                                    <tr>
                                        <th scope="row"><small>Email Address</small></th>
                                        <td><small>{email}</small></td>
                                    </tr>
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

export default MyAccount;