// import Image from "../images/"
import ContentContent from '../components/ContantCon';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Navbar from "../components/Navbar";
import Image from "../images/slider2.jpg"

function Contact(Props){
    return(
        <>
            <Navbar />
            <Hero 
                cName="hero-about"
                HeroImag={Image}
                title="Contact"
            />
            <ContentContent/>
            <Footer/>
        </>
    )
}

export default Contact;