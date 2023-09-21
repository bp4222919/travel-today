import "./AboutCanStyle.css";
import Image1 from "../images/23.png"
import Image2 from "../images/team1.jpg"
import Image3 from "../images/team2.jpg"
import Image4 from "../images/team3.jpg"

function AboutCantainer() {
    return (
        <div className="about">
            <h1>What You Get</h1>
            <p>Sed a dui at sapien porttitor placer
                pendssee rutrumo efficitur nibh
                condiment aci Nam lorem.</p>

            <div className="about-container">
                <div className="box">
                    <h3>Our Benefits</h3>
                    <h4>Memories & Friendship</h4>
                    <p><li>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Delectus enim, quam cum fuga odit praesentium aliquam nesciunt
                        facere. Sapiente, ipsam.</li></p>


                    <h4>Building Self-Esteem</h4>
                    <p><li>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Delectus enim, quam cum fuga odit praesentium aliquam nesciunt
                        facere. Sapiente, ipsam.</li></p>


                    <h4>Healthy Aerobic Exercise</h4>
                    <p><li>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Delectus enim, quam cum fuga odit praesentium aliquam nesciunt
                        facere. Sapiente, ipsam.</li></p>
                </div>
                <div className="box">
                    <center>
                    <img src={Image1} alt="" />
                    </center>
                </div>
            </div>

            <h1>Tour Guides​</h1>
            <p>Our highly trained​</p>

            <div className="tour-guides">
                <div className="tour-guides-box">
                    <div className="tour-image">
                        <img src={Image2} alt="" />
                    </div>
                    <h3>Martin Doe</h3>
                    <p>Tourism Expert</p>
                </div>
                <div className="tour-guides-box">
                <div className="tour-image">
                        <img src={Image3} alt="" />
                    </div>
                    <h3>Jennifer Doe</h3>
                    <p>Adventure Guide</p>
                </div>
                <div className="tour-guides-box">
                <div className="tour-image">
                        <img src={Image4} alt="" />
                    </div>
                    <h3>Alex Doe</h3>
                    <p>Tourism Expert</p>
                </div>
            </div>
        </div>
    )
}

export default AboutCantainer;