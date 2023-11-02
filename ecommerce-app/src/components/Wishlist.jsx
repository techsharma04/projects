
const wishListHandler = () => {
    const token = localStorage.getItem("token");
    if(!token){

    } else {
        
    }
    // dispatch(addToCart(items.id))
}

const Wishlist = () => {
    return(
        <button className='pro_wishlist wishlist' onClick={wishListHandler}></button>
    )
}

export default Wishlist;