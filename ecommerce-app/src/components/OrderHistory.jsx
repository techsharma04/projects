import React, { useState, useEffect } from "react";
import axios from "axios";
import Endpoints from '../api/EndPoints';
import OrderHistoryPage from "../pages/OrderHistoryPage";

const OrderHistory = () => {

    const [fetchHistory, setFetchHistory] = useState(null)
    const token = localStorage.getItem("token");

    const fetchData = () => {
        axios.get(`${Endpoints.CART_URL}?token=${token}`)
            .then(response => setFetchHistory(response.data))
            .catch(error => console.log(error))
    }

    let items = [];

    if (fetchHistory) {
        items = Object.values(fetchHistory);
    }

    useEffect(() => {
        fetchData()
    }, []);


    return (
        <>
            <OrderHistoryPage data={items} />
        </>
    )
}

export default OrderHistory;