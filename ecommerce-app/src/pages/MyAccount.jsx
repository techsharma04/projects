import Navbar from "../components/Navbar";
import Header from "../pages/HeaderPage";
import FooterPage from "./FooterPage";
import "../styles/MyAccount.css"
import AccountSidebar from "./AccountSidebar";

const MyAccount = () => {

    const fullname = localStorage.getItem('fname')+" "+localStorage.getItem('lname');
    const fname = localStorage.getItem('fname');
    const lname = localStorage.getItem('lname');
    const email = localStorage.getItem('email');


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