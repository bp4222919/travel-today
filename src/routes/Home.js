import Image from "../images/1.jpg"
import Destination from '../components/Destination';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Navbar from "../components/Navbar";
import Trip from '../components/Trip';


function Home(){
    return(
        <>
            <Navbar />
            <Hero 
                cName="hero"
                HeroImag={Image}
                title="Your Journey Your Story"
                text="Choose your favourite Destinations."
                url="/"
                btnClass="show"
                buttonText="Travel Plane"
            />
            <Destination />
            <Trip /> 
            <Footer />
        </>
    )
}

export default Home;
