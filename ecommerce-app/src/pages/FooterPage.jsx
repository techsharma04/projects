import { Link } from "react-router-dom";

const FooterPage = () => {
    return (
        <div className="footer">
            <div className="logo">
                <Link to="/" className="link_text"><span>E-selling Zone</span></Link>
            </div>
            <div className="footer_text">
                <h6>Copyright © 2023 TechSharma</h6>
            </div>
        </div>
    )
}

export default FooterPage;