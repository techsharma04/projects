import '../styles/Products.css';
import React, { useState, useEffect } from "react";
import axios from "axios";
import Endpoints from '../api/EndPoints';
import ProductPage from '../pages/ProductPage';
import Navbar from './Navbar';
import Header from "../pages/HeaderPage";

const Products = () => {

    const [product, setProduct] = useState([])

    const fetchData = () => {
        axios.get(Endpoints.PRODUCT_ALL)
            .then(response => setProduct(response.data))
            .catch(error => console.log(error))
    }

    useEffect(() => {
        fetchData()
    }, [])

    let proItems = [];

    if (product) {
        proItems = Object.values(product);
    }

    


    return (
        <div className="homepage">

            <div className="pro_area">

                {
                    proItems.map((items) => < ProductPage data={items} />)
                }
            </div>
        </div>
    )
}

export default Products;