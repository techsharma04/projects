import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Endpoints from "../api/EndPoints";
import Constants from "../api/Constants";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/actions/cart-actions";

const ProductDetailPage = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});  
    const dispatch = useDispatch()

    const fetchData = () => {
        axios
            .get(Endpoints.PRODUCT_BY_ID + id)
            .then((response) => setProduct(response.data.data))
            .catch((error) => console.log(error));
    };

    useEffect(() => {
        fetchData();
    }, []);

    const onAddToCartHandler = () => {
        dispatch(addToCart(product))
    }

    return (
        <>
            <Navbar />
            <div className="container-full">
                <div className="container-inside">
                    <div className="row arrange-flex">
                        <div className="col-md-6">
                            <img src={Constants.IMAGE_URL + product.image} alt="" className="img-fluid image-size-large padding" />
                        </div>
                        <div className="col-md-6">
                            <h3>{product.productName}</h3>
                            <p>{product.unit}</p>
                            <p>{product.description}</p>
                            <h2>
                                <span>&#8377;</span>
                                {product.price}
                                <span
                                    style={{
                                        fontSize: "22px",
                                        marginLeft: "10px",
                                        color: "#888",
                                    }}
                                >
                                    <del>
                                        <span>&#8377;</span>
                                        {product.mrp}
                                    </del>
                                </span>
                            </h2>
                            <br />
                            <button className="btn btn-primary" onClick={onAddToCartHandler}>Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default ProductDetailPage;
