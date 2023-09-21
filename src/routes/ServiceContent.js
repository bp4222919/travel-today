import "./ServiceConStyle.css";

function ServiceContent() {
    return (
        <div className="service-content">
            <h1>Our Services</h1>
            <p>Just Right For Your Vacation</p>

            <div className="service-cantainer">
                <div className="service-box">
                    <div className="heading">
                        <h1>South Africa</h1>
                    </div>
                </div>
                <div className="service-box">
                    <div className="heading">
                        <h1>Maldives</h1>
                    </div>
                </div>
                <div className="service-box">
                    <div className="heading">
                        <h1>Egypt</h1>
                    </div>
                </div>
                <div className="service-box">
                    <div className="heading">
                        <h1>London</h1>
                    </div>
                </div>
                <div className="service-box">
                    <div className="heading">
                        <h1>Antarctica</h1>
                    </div>
                </div>
                <div className="service-box">
                    <div className="heading">
                        <h1>Nepal</h1>
                    </div>
                </div>
            </div>            
        </div>
    )
}

export default ServiceContent;