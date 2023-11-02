import React, { useState, useEffect } from "react";

const StarRating = (props) => {
    

    const [rate, setRate] = useState(0);
    const [count, setCount] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setRate((rate) => props.rating.rate);
            setCount((count) => props.rating.count);
        }, 1000);
    });
    return (
        <div className="pro_rating">
            {rate > 4 ?
            <div>
                <span className="fa fa-star checked" />
                <span className="fa fa-star checked" />
                <span className="fa fa-star checked" />
                <span className="fa fa-star checked" />
                <span className="fa fa-star checked" />    
            </div>
            : rate > 3 ?
            <div>
                <span className="fa fa-star checked" />
                <span className="fa fa-star checked" />
                <span className="fa fa-star checked" />
                <span className="fa fa-star checked" />
                <span className="fa fa-star" />
            </div>
            : rate > 2 ?
            <div>
                <span className="fa fa-star checked" />
                <span className="fa fa-star checked" />
                <span className="fa fa-star checked" />
                <span className="fa fa-star" />
                <span className="fa fa-star" />
            </div>
            : rate > 1 ?
            <div>
                <span className="fa fa-star checked" />
                <span className="fa fa-star checked" />
                <span className="fa fa-star" />
                <span className="fa fa-star" />
                <span className="fa fa-star" />
            </div>
            :
            <div>
                <span className="fa fa-star checked" />
                <span className="fa fa-star" />
                <span className="fa fa-star" />
                <span className="fa fa-star" />
                <span className="fa fa-star" />
            </div>
        }
            <span className='pro_star_count'>({count} Reviews)</span>
        </div>
    );
};

export default StarRating;
