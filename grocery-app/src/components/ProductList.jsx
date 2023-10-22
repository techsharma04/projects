import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Product from './Product';
import Endpoints from '../api/EndPoints';
import { useParams } from 'react-router-dom';

const ProductList = () => {
    const {catId} = useParams()
    const [products, setProducts] = useState([])

    const fetchData = () => {
        axios.get(Endpoints.PRODUCT_BY_CAT_ID_URL+ catId)
            .then(response => setProducts(response.data.data))
            .catch(error => console.log(error))
    }

    useEffect(() => {
        fetchData()
    }, [catId])

    return (
        <div>
            <h2 className="text-center padding-top-bottom">Product List</h2>
            <div className="row">
                {
                    products.map((product) => <Product data={product} />)
                }
            </div>
        </div>


    )
}
export default ProductList;