import Banner from "./Banner/Banner";
import ExploreAll from "./ExploreAll/ExploreAll";
import Footer from "./Footer/Footer";
import NavBar from "./NavBar/NavBar";



const Home = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Banner></Banner>
            <ExploreAll></ExploreAll>
            <Footer></Footer>
        </div>
    );
};

export default Home;