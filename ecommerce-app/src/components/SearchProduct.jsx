import '../styles/Products.css';
import React, { useState, useEffect } from "react";
import axios from "axios";
import Endpoints from '../api/EndPoints';
import ProductPage from '../pages/ProductPage';
import { useParams } from "react-router-dom";
import Navbar from './Navbar';
import Header from "../pages/HeaderPage";
import FooterPage from '../pages/FooterPage';

const SearchProducts = () => {

    const { search } = useParams();
    const [searchItem, setSearchItem] = useState([])

    

    const fetchData = () => {
        axios.get(Endpoints.PRODUCT_ALL)
            .then(response => setSearchItem(response.data))
            .catch(error => console.log(error))
    }

    let proItems = [];

    if (searchItem) {
        proItems = Object.values(searchItem);
    }

    useEffect(() => {
        fetchData()
    }, [search])

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

export default SearchProducts;