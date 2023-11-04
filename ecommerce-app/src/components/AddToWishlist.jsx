import React, { useState, useEffect } from "react";
import { addToWishlist } from "../reduxx/reducer/wishlistSlice";
import { useDispatch, useSelector } from "react-redux";

const AddToWishlist = (props) => {

    const items = props.products;

    const [wish, setWish] = useState({});
    const [color, setColor] = useState({});
    const dispatch = useDispatch();
    const wishlist = useSelector((state) => state.wishlist.wishListItems);
    let isAvailable = wishlist.find((item) => item.id === items.id);

    const wishListHandler = (items) => {
        const token = localStorage.getItem("token");
        if (!token) {
            alert("Login is required to use this feature")
        } else {
            setWish((prev) => ({
                ...prev,
                [items.id]: !prev[items.id],
            }));

            dispatch(addToWishlist(items));
        }
    }

    return (

        <i className="fa fa-heart wishlisticon" aria-hidden="true" style={{ color: isAvailable ? "red" : "white", }} onClick={() => wishListHandler(items)}></i>

    )
}

export default AddToWishlist;