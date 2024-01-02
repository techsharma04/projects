import '../styles/Products.css';
import React, { useState, useEffect } from "react";
import axios from "axios";
import Endpoints from '../api/EndPoints';
import ProductPage from '../pages/ProductPage';
import { useParams } from "react-router-dom";
import Navbar from './Navbar';
import Header from "../pages/HeaderPage";
import FooterPage from '../pages/FooterPage';

const CatBasedProducts = (props) => {

    const { category } = useParams();
    const [product, setProduct] = useState([])

    const fetchData = () => {
        axios.get(Endpoints.CATEGORY_BASED_PRODUCTS + category)
            .then(response => setProduct(response.data))
            .catch(error => console.log(error))
    }

    let proItems = [];

    if (product) {
        proItems = Object.values(product);
    }

    useEffect(() => {
        fetchData()
    }, [category])

    return (
        <div className="homepage">
            <Header />
            <hr />
            <Navbar />
            <hr />
            <div className="pro_area">
                {
                    proItems.map((items) => < ProductPage data={items} />)
                }
            </div>
            <hr />
            <FooterPage />
            <hr />
        </div>
    )
}

export default CatBasedProducts;