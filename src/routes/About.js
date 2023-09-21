import Image from '../images/2.jpg'
import Hero from '../components/Hero';
import Navbar from "../components/Navbar";
import AboutCantainer from '../components/AboutCantainer';
import Footer from '../components/Footer';


function About(props){
    return(
        <>
           <Navbar />
            <Hero 
                cName="hero-about"
                HeroImag={Image}
                title="About"
            />
            <AboutCantainer />
            <Footer/>
        </>
    )
}

export default About;