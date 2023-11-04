import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { addToCart, deleteFromCart, removeFromCart } from "../reduxx/reducer/cartSlice";
import { useNavigate } from "react-router-dom";
import Endpoints from "../api/EndPoints";
import React, { useState } from "react";

const ShoppingCart = (props) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const itemsArray = props.items;

    const shoppingcart = useSelector((state) => state.cart.cartItems);

    let totalAmount = 0;
    let shippingCharges = 0;
    const token = localStorage.getItem("token");


    for (let i of shoppingcart) {
        totalAmount += i.price * i.itemQuantity;
    }
    if (totalAmount < 150) {
        shippingCharges = 20;
    }
    let checkoutPrice = totalAmount + shippingCharges;

    const checkoutHandle = () => {
        for (let product of shoppingcart) {
            axios.post(Endpoints.CART_URL, {token: token, product})
                .then(response => {
                    console.log(response.data);

                })
                .catch((error) => {
                    console.log(error);
                });
            dispatch(deleteFromCart(product));
        }
        navigate("/checkout");
    };




    return (
        <div className="account-details">
            <legend> Items you have added</legend>
            <table className="table">
                <tbody>
                    <tr className="wishHeading">
                        <th className="align-center">Image</th>
                        <th className="align-center">Title</th>
                        <th className="align-center">Price</th>
                        <th className="align-center">Qty</th>
                        <th className="align-center">Total</th>
                        <th></th>
                    </tr>
                    {itemsArray.map((items) => (
                        <tr className="wishRow">

                            <td className="align-center"><small><img src={items.image} alt={items.title} width={50} /></small></td>
                            <td><small>{items.title}</small></td>
                            <td className="align-center"><small>$ {items.price}</small></td>
                            <td className="qty-btns align-center">

                                <button className="btn btn-dark" onClick={() => dispatch(removeFromCart(items))}> - </button>
                                <small>{items.itemQuantity} </small>
                                <button className="btn btn-dark" onClick={() => dispatch(addToCart(items))}> + </button>

                            </td>
                            <td className="align-center"><small>$ {items.price * items.itemQuantity}</small></td>
                            <td className="align-center"><button className="btn btn-danger" onClick={() => dispatch(deleteFromCart(items))}><i className="fa fa-trash" aria-hidden="true"></i></button></td>
                        </tr>
                    ))}
                    <tr className="wishRow">
                        <td colSpan={3} align="center"></td>
                        <td align="left"><small>Subtotal:</small></td>
                        <td colSpan={2} align="center"><small>$ {totalAmount.toFixed(2)}</small></td>
                    </tr>
                    <tr className="wishRow">
                        <td colSpan={3} align="left"> <small>Free shipping on order above $150</small></td>
                        <td align="left"><small>Shipping Charges:</small></td>
                        <td colSpan={2} align="center"><small>$ {shippingCharges.toFixed(2)}</small></td>
                    </tr>
                    <tr className="wishRow">
                        <td colSpan={3} align="center"></td>
                        <td align="left"><small>Total Amount:</small></td>
                        <td colSpan={2} align="center"><small>$ {checkoutPrice.toFixed(2)}</small></td>
                    </tr>
                    <tr className="wishRow">
                        <td colSpan={6} align="right"><button className="btn btn-outline-dark" onClick={checkoutHandle}>Proceed to Checkout</button></td>
                    </tr>
                </tbody>

            </table>

        </div>
    )
}

export default ShoppingCart;