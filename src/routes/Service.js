import Image from "../images/3.png"
import Hero from '../components/Hero';
import Navbar from "../components/Navbar";
import ServiceContent from "./ServiceContent";
import Footer from "../components/Footer";
import Trip from "../components/Trip";

function Service(props){
    return(
        <>
            <Navbar />
            <Hero 
                cName="hero-about"
                HeroImag={Image}
                title="Service"
            />
            <ServiceContent />
            <Trip/>
            <Footer />
        </>
    )
}

export default Service;