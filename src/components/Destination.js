import "./DestinationStyle.css"
import Image1 from "../images/6.jpg"
import Image2 from "../images/7.jpg"
import Image3 from "../images/15.jpg"
import Image4 from "../images/9.jpg"

const Destination = () => {
    return (
        <div className="destination">
            <h1>Popular Destinatins</h1>
            <p>Whether you're looking for a romantic getaway, a family-friendly adventure, or a
                solo journey to explore the world, a travel agency can provide you with a
                custom-tailored itinerary that exceeds your expectations.</p>

            {/* === Block Cantainer Start */}
            <div className="block-container">
                <div className="block-box">
                    <h2>Snow Mountain City</h2>
                    <h4>Province / Snow Mountain</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed scelerisque, purus sit amet elementum blandit, sem arcu egestas quam,
                        eget malesuada sem libero eu ante. Duis nec ultricies enim. Sed cursus
                        volutpat finibus. Morbi at ornare purus. Vivamus congue suscipit dui nec
                        fringilla. Nam auctor velit nec nisi molestie, ut maximus libero euismod.
                        Nam dolor nunc, consequat nec sollicitudin vel, commodo vitae ex.</p>

                        <button className="btn">Know More</button>
                </div>
                <div className="block-box images">
                    <img src={Image3} alt="" />
                    <img src={Image4} alt="" />
                </div>
                <div className="block-box images">
                    <img src={Image1} alt="" />
                    <img src={Image2} alt="" />
                </div>
                <div className="block-box">
                <h2>Blue Sky City</h2>
                    <h4>Province / Blue Sky</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed scelerisque, purus sit amet elementum blandit, sem arcu egestas quam,
                        eget malesuada sem libero eu ante. Duis nec ultricies enim. Sed cursus
                        volutpat finibus. Morbi at ornare purus. Vivamus congue suscipit dui nec
                        fringilla. Nam auctor velit nec nisi molestie, ut maximus libero euismod.
                        Nam dolor nunc, consequat nec sollicitudin vel, commodo vitae ex.</p>

                        <button className="btn">Know More</button></div>
            </div>
        </div>
    )
}

export default Destination;