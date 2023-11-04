import StarRating from '../pages/StarRating';
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector} from "react-redux";
import Wishlist from "../components/AddToWishlist";
import { addToCart, removeFromCart } from "../reduxx/reducer/cartSlice";

const SingleProductPage = (props) => {

    const product = props.product;

    const dispatch = useDispatch();
    const navigate = useNavigate();
    

    const shoppingcart = useSelector((state) => state.cart.cartItems);
    let isAvailable = shoppingcart.find((item) => item.id === product.id);

    const onAddToCartHandler = () => {
        dispatch(addToCart(product))
    }


    return (
        <div className="spro_main">
            <div className="spro_banner" key={product.id}>
                <div className="spro_section">
                    <div className="pro_rating_wishlist">
                        <StarRating rating={product.rating} />
                        <Wishlist products={product}/>
                    </div>
                    <div className="spro_heading">
                        <h1>{product.title}</h1>
                    </div>
                    <hr />
                    <div className='spro_size'>
                        <h5>Available Options :</h5>
                        {product.category === "men's clothing" || product.category === "women's clothing" ?
                            <select className='spro_select'>
                                <option disabled selected>--- Please Select ---</option>
                                <option>XS</option>
                                <option>S</option>
                                <option>M</option>
                                <option>L</option>
                                <option>XL</option>
                                <option>XXL</option>
                            </select>
                            :
                            <select className='spro_select'>
                                <option disabled selected>--- Please Select ---</option>
                            </select>
                        }
                    </div>
                    <div className="spro_price_btn">
                        <h3>Price: $ {product.price}</h3>
                        <div className="qty_cart_btn">
                            
                            <div className="cart_btn">
                                {isAvailable ? (
                                    <button className='spro_cart_btn' onClick={() => navigate("/shoppingcart")}>View Cart</button>
                                ) : (
                                    <button className='spro_cart_btn' onClick={onAddToCartHandler}>Add to Cart</button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="spro_image">
                    <img src={product.image} alt='Keyboard' />
                </div>
            </div>
            <div className="spro_desc">
                <div className="spro_heading_desc">
                    <h1 className='spro_headings'>Description</h1>
                    <p className='spro_description'>{product.description}</p>
                </div>
                <div className="spro_heading_details">
                    <h1 className='spro_headings'>Product details</h1>
                    <p>Category: {product.category}</p>
                    <p>Availability: In Stock</p>
                </div>
            </div>
        </div>
    )
}

export default SingleProductPage;