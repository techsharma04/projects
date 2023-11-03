
import { useDispatch, useSelector } from "react-redux";

const ShoppingCart = (props) => {

    const items = props.items;

    const cart = useSelector((state) => state.cart);
    const products = cart.cartItems.filter((eachProduct) => eachProduct.id === items.id);

     // const dispatch = useDispatch();

    return (
        <div className="account-details">
            <legend> Items you have added</legend>
            <table className="table">
                <tbody>
                    <tr className="wishHeading">
                        <th></th>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Qty</th>
                        <th>Price</th>
                    </tr>
                    {items.map((items) => (
                        <tr className="wishRow">
                            <td><button className="btn btn-dark"><i className="fa fa-trash" aria-hidden="true"></i></button></td>
                            <td><small><img src={items.items.image} alt={items.items.title} width={50} /></small></td>
                            <td><small>{items.items.title}</small></td>
                            <td><small>{products[0].itemQuantity}</small></td>
                            <td><small>$ {items.items.price}</small></td>
                        </tr>
                    ))}

                </tbody>

            </table>

        </div>
    )
}

export default ShoppingCart;