import { Link } from "react-router-dom";
import Constants from "../api/Constants";

const Category = (props) => {
    const { catId, catName, catImage } = props.data
    return (
        
            <div className="col-lg-3 col-md-6 col-sm-6">
                <div id="ho_bo" className="our_products">
                    <div className="product">
                        <figure><img src={Constants.IMAGE_URL + catImage} className="card-img-top" alt="..." /></figure>
                    </div>
                    <h3>{catName}</h3>
                    <div className="d-grid gap-2">
                        <Link to={"/products/" + catId} className="btn btn-danger">Select</Link>
                    </div>
                </div>
            </div>
    )
}
export default Category;