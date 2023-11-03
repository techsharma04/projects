

import { useSelector, useDispatch } from "react-redux";
import Header from "../pages/HeaderPage";
import Categories from "./Categories";
import FooterPage from "../pages/FooterPage";
import ShoppingCart from "../pages/ShoppingCart";


const Cart = () => {

    const shoppingcart = useSelector((state) => state.cart.cartItems);
    let totalAmount = 0;
    let shippingCharges = 20;
    // const dispatch = useDispatch();
    // const navigate = useNavigate();

    for (let eachItem of shoppingcart) {
        totalAmount += eachItem.price * eachItem.itemQuantity;
    }

    let checkoutPrice = totalAmount + shippingCharges;

    return (
        <div className="homepage">
            <Header />
            <hr />
            <Categories />
            <hr />
            <div className="account_area">
                <div className="account-page-full">
                    <div className="account-tabs">
                        <legend>Shopping Cart</legend>
                    </div>
                    <div className="sidebar-account">
                        <ShoppingCart items={shoppingcart} />
                    </div>
                </div>
            </div>
            <hr />
            <FooterPage />
            <hr />
        </div>

    );
}

export default Cart;
