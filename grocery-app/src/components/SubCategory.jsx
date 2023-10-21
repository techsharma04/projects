import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SubCategory = () => {
    const catId = 3;
    const [subCategories, setSubCategories] = useState([])

    const fetchData = () => {
        axios.get('https://orca-app-jhg4l.ondigitalocean.app/api/subcategory/' + catId)
            .then(response => setSubCategories(response.data.data))
            .catch(error => console.log(error))
    }

    useEffect(() => {
        fetchData()
    }, [catId])

    return (
        <div>
            <h2 className="text-center padding-top-bottom">Sub-Category</h2>
            <ul className="list-group">
                {
                    subCategories.map((item) => <li className="list-group-item">{item.subName}</li>)
                }
            </ul>
        </div>
    )
}
export default SubCategory; 