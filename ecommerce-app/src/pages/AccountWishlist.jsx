
import { clearWishlist } from "../reduxx/reducer/wishlistSlice";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteFromCart } from "../reduxx/reducer/cartSlice";

const AccountWishList = (props) => {

    const items = props.products

    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart.cartItems);
    let selectedItems = cart.find((item) => item.id === items.id);

    // alert(selectedItems.items.title);

    const moveRemove = (event) => {
        const btnId = event.target.id;
        if (selectedItems) {
          dispatch(addToCart(props.data));
        } else {
          dispatch(deleteFromCart(props.data));
        }
      };

    return (
        <div className="account-details">
            <legend> Items in Wishlist</legend>
            <table className="table">
                <tbody>
                    <tr className="wishHeading">
                        <th></th>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th></th>
                    </tr>
                    {items.map((items) => (
                        <tr className="wishRow" key={items.id}>
                            <td><button className="btn btn-dark"><i class="fa fa-trash" aria-hidden="true" onClick={() => dispatch(clearWishlist(items))}></i></button></td>
                            <td><small><img src={items.image} alt="{items.title}" width={50} /></small></td>
                            <td><small>{items.title}</small></td>
                            <td><small>$ {items.price}</small></td>
                            <td><small><button id={items.id} className="btn btn-dark" onClick={moveRemove}>{selectedItems ? "Remove from Cart" : "Move to Cart"}</button></small></td>
                        </tr>
                    ))}

                </tbody>

            </table>

        </div>
    )
}

export default AccountWishList;