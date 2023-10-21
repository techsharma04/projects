import React, { useState, useEffect } from "react";
import axios from "axios";
import Category from './Category';
import Endpoints from '../api/EndPoints';

const CategoryList = () => {

    const [categories, setCategories] = useState([])

    const fetchData = () => {
        axios.get(Endpoints.CATEGORY_URL)
            .then(response => setCategories(response.data.data))
            .catch(error => console.log(error))
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        
        <div className="products container-full" id="categories">
            <div className="container container-inside">
                <div className="row">
                    <div className="col-md-12">
                        <div className="titlepage">
                            <h2>Select the category you want to shop</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                {
                    categories.map((category) => <Category data={category} />)
                }
                </div>
            </div>
        </div>

    )
}

export default CategoryList;