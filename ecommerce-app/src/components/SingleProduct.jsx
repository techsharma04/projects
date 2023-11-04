import '../styles/Products.css';
import React, { useState, useEffect } from "react";
import axios from "axios";
import Endpoints from '../api/EndPoints';
import { useParams } from "react-router-dom";
import SingleProductPage from "../pages/SingleProductPage"
import Header from "../pages/HeaderPage";
import Navbar from './Navbar';
import FooterPage from '../pages/FooterPage';

const SingleProducts = () => {

    const { id } = useParams();
    const [product, setProduct] = useState([])

    const fetchData = () => {
        axios.get(Endpoints.SINGLE_PRODUCT + id)
            .then(response => setProduct(response.data))
            .catch(error => console.log(error))
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div className="homepage">
            <Header />
            <hr />
            <Navbar />
            <hr />
            <div className="pro_area">
                {

                    <SingleProductPage product={product} />
                }
            </div>
            <hr />
            <FooterPage />
            <hr />
        </div>
    )
}

export default SingleProducts;