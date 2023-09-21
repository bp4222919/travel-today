import "./FooterStyle.css"

function Footer() {
    return (
        <div className="footer">
            <div className="row-first">
                <div className="col">
                    <h1>TravelToday</h1>
                    <p>Choose your favourite Destinations.</p>
                </div>
                <div className="col">
                    <i className="fa-brands fa-facebook-f"></i>
                    <i className="fa-brands fa-instagram"></i>
                    <i className="fa-brands fa-twitter"></i>
                    <i className="fa-brands fa-linkedin-in"></i>
                    <i className="fa-regular fa-image"></i>
                </div>
            </div>
            <div className="row-second">
                <div className="col">
                    <h2>Our Services</h2>
                    <ul>
                        <li>Pool Access</li>
                        <li>Conference Room</li>
                        <li>Snowboard Rent</li>
                        <li>Game Zone</li>
                        <li>Restaurant & Bar</li>
                        <li>Free Wi-Fi</li>
                    </ul>
                </div>
                <div className="col">
                    <h2>Camp Activities</h2>
                    <ul>
                        <li>Team & Individual Sports</li>
                        <li>Performing & Creative Art</li>
                        <li>Waterfront Activities</li>
                        <li>Special Events & Treaps</li>
                        <li>Sunbathing</li>
                        <li>Summer Fire</li>
                    </ul>
                </div>
                <div className="col">
                    <h2>Contact Info</h2>
                    <p>Street 238,52 tempor<br />
                        Donec ultricies mattis nulla<br />
                        risus tristique ut.</p>

                    <ul>
                        <li>Phone:   +01 23 456 7890</li>
                        <li>E-mail:  support@sitename.com</li>
                        <li>Website: https://sktthemes.org</li>
                    </ul>
                </div>
            </div>
            <div className="row-third">
                <p>© Copyright 2023 TravelToday. All Rights Reserved</p>
                <h6>Design by Balvinder Kumar</h6>
            </div>
        </div>
    )
}

export default Footer;