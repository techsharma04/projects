import Header from "../pages/HeaderPage";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import FooterPage from "./FooterPage";

const HomePage = () => {
    return (
        <div className="homepage">
            <Header />
            <hr />
            <Navbar />
            <hr />
            <Products />
            <hr />
            <FooterPage />
            <hr />
        </div>
    )
}

export default HomePage;