import { Link } from "react-router-dom";


const AccountSidebar = () => {
    return (
        <div className="account-sidebar">
            <legend>MY ORDERS</legend>
            <Link to="/myaccount" className="login-click decoration-remove"><small>Profile</small></Link>
            <Link to="/orderhistory" className="login-click decoration-remove"><small>Order History</small></Link>
            <Link to="" className="login-click decoration-remove"><small>Downloads</small></Link>
            <Link to="" className="login-click decoration-remove"><small>Returns</small></Link>
            <Link to="" className="login-click decoration-remove"><small>Transactions</small></Link>
            <Link to="" className="login-click decoration-remove"><small>Change Password</small></Link>
            <hr />
            <legend>MY STUFF</legend>
            <Link to="/wishlist" className="login-click decoration-remove"><small>Wish List</small></Link>
            <Link to="" className="login-click decoration-remove"><small>Reward Points</small></Link>
            <Link to="" className="login-click decoration-remove"><small>Newsletter</small></Link>
        </div>
    );
};

export default AccountSidebar;
