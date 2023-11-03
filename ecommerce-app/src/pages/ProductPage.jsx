import { Link } from "react-router-dom";
import StarRating from '../pages/StarRating';
import { useDispatch, useSelector } from "react-redux";
import Wishlist from "../components/AddToWishlist";
import { addToCart } from "../reduxx/reducer/cartSlice";


const ProductPage = (props) => {

    const items = props.data;
    const dispatch = useDispatch()
    const cart = useSelector((state) => state.cart);
    const product = cart.cartItems.find((eachProduct) => eachProduct.id === items.id);

    console.log(product);
    const onAddToCartHandler = () => {
        dispatch(addToCart({
            items
        }))
    }

    
    return (
        <div className="pro_banner" key={items.id}>
            <div className="pro_banner_background">
                <div className="pro_rating_wishlist"> 
                    <StarRating rating={items.rating} />
                    <Wishlist products={items}/>
                </div>
                <div className="pro_heading">
                    <Link to={'/products/'+ items.id} className="link_text">
                        <h2>{items.title.substring(0, 45)} ...</h2>
                    </Link>
                </div> 
                <div className="pro_image">
                    <img src={items.image} alt='Keyboard' />
                </div>
                <div className='pro_size'>
                    {items.category === "men's clothing" || items.category === "women's clothing" ?
                        <select className='pro_select'>
                            <option disabled selected>--- Please Select ---</option>
                            <option>XS</option>
                            <option>S</option>
                            <option>M</option>
                            <option>L</option>
                            <option>XL</option>
                            <option>XXL</option>
                        </select>
                        :
                        <select className='pro_select'>
                            <option disabled selected>--- Please Select ---</option>
                        </select>
                    }
                </div>
                <div className="pro_price_btn">
                    <h3>$ {items.price}</h3>
                    <button className='pro_cart_btn' onClick={onAddToCartHandler}>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}
export default ProductPage;