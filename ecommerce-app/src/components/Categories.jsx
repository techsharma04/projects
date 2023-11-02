import React, { useState, useEffect } from "react";
import axios from "axios";
import Endpoints from '../api/EndPoints';
import NavbarPage from "../pages/NavbarPage";

const Categories = () => {

    const [categories, setCategories] = useState(null)

    const fetchData = () => {
        axios.get(Endpoints.CATEGORY_ALL_URL)
            .then(response => setCategories(response.data))
            .catch(error => console.log(error))
    }

    let category = [];

    if (categories) {
        category = Object.values(categories);
    }

    useEffect(() => {
        fetchData()
    }, []);


    return (
        <>
            <NavbarPage data={category} />
        </>
    )
}

export default Categories;