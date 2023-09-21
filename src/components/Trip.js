import TripData from "./TripData";
import "./TripStyle.css";
import Image1 from "../images/21.jpg"
import Image2 from "../images/22.jpg"
import Image3 from "../images/20.jpg"


function Trip() {
    return (
        <div className="trip">
            <h1>Recent Trips</h1>
            <p>You can discover unique descrtions
                using Google Maps.</p>
            <div className="tripcantainer">
                <div className="tripcard">
                <TripData
                    image={Image1}
                    heading="Experience the great holiday on beach"
                    text="Laoreet, voluptatum nihil dolor esse quaerat mattis 
                explicabo maiores, est aliquet porttitor! Eaque, cras, aspernatur."
                />
                </div>
                <div className="tripcard">
                    <TripData
                    image={Image2}
                    heading="Summer holiday to the oxolotan river"
                    text="Laoreet, voluptatum nihil dolor esse quaerat mattis 
                explicabo maiores, est aliquet porttitor! Eaque, cras, aspernatur."
                />
                </div>
                <div className="tripcard">
                    <TripData
                    image={Image3}
                    heading="Santorini island's weekend vacation"
                    text="Laoreet, voluptatum nihil dolor esse quaerat mattis 
                explicabo maiores, est aliquet porttitor! Eaque, cras, aspernatur."
                />
                </div>
            </div>
        </div>
    )
}
export default Trip;