import { Link } from "react-router-dom";

function Header() {
    return(
        <section className="banner_main container-full">
                    <div className="container" style={{width: `1170px`}}>
                        <div className="banner_po">
                            <div className="row">
                                <div className="col-md-7">
                                    <div className="text_box">
                                        <span>Now Started</span>
                                        <h1> <strong>Fruit And </strong> <br /> Vegetables </h1>
                                        <Link to={"/categories"} className="read_more" role="button">Start Shopping</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
    )
    
}

export default Header;