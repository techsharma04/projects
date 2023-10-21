import { Link } from "react-router-dom";
import Constants from "../api/Constants";

const Product = (props) => {
  const { _id, productName, image, mrp, price, unit } = props.data;

  return (
    <div className="col-sm-6">
      <div className="card mb-3" style={{width: `450px`, height: `225px`}}>
        <div className="row g-0" style={{padding: `20px`}}>
          <div className="col-sm-4 center">
            <img src={Constants.IMAGE_URL + image} className="img-fluid rounded-start image-size-small" alt="..."/>
          </div>
          <div className="col-sm-6">
            <div className="card-body">
              <h6 className="card-title font-15">{productName}</h6>
              <p className="card-text">{unit}</p>
              <h2><span>&#8377;</span>{price}
                <span style={{ fontSize: "22px", marginLeft: "10px", color: "#888", }}>
                  <del><span>&#8377;</span>{mrp}</del>
                </span>
              </h2>
              <Link to={'/products/detail/' + _id} className="btn btn-primary btn-block">
                Show Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Product;
