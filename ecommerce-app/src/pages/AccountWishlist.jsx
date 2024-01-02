
import { clearWishlist } from "../reduxx/reducer/wishlistSlice";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteFromCart } from "../reduxx/reducer/cartSlice";

const AccountWishList = (props) => {

    const items = props.items
    const dispatch = useDispatch();
    
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
                            <td><small><img src={items.image} alt={items.title} width={50} /></small></td>
                            <td><small>{items.title}</small></td>
                            <td><small>$ {items.price}</small></td>
                            <td><small><button className="btn btn-dark" onClick={() => {dispatch(addToCart(items)); dispatch(clearWishlist(items)) }}>Move to cart</button></small></td>
                        </tr>
                    ))}

                </tbody>

            </table>

        </div>
    )
}

export default AccountWishList;