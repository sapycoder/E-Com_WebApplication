import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <div className="footer">
            <div className="footer_container">
                <div className="row">
                    <div className="col1">
                        {/*COLUMN 1 */}
                        <h3>Get to Know Us</h3>
                        <ul className="list-unstyled"> 
                            <li className="li"><a href='https://www.aboutamazon.in/?utm_source=gateway&utm_medium=footer'>About Us</a></li>
                            <li className="li"><a href='https://amazon.jobs/en/'>Careers</a></li>
                            <li className="li"><a href='https://press.aboutamazon.in/?utm_source=gateway&utm_medium=footer'>Press Releases</a></li>
                            <li className="li"><a href='https://www.amazon.in/gp/browse.html?node=8872558031&ref_=footer_cares'>Amazon Cares</a></li>
                            <li className="li"><a href='https://www.amazon.in/gp/browse.html?node=4594605031&ref_=footer_smile'>Gift a Smile</a></li>
                        </ul>
                    </div>

                    <div className="col1">
                        {/*COLUMN 2 */}
                        <h3>Connect with Us</h3>
                        <ul className="list-unstyled"> 
                            <li className="li"><a href='https://www.facebook.com'>Facebook</a></li>
                            <li className="li"><a href='https://www.twitter.com'>Twitter</a></li>
                            <li className="li"><a href='https://www.instagram.com'>Instagram</a></li>
                            <li className="li"><a href='https://www.gmail.com'>Gmail</a></li>
                            <li className="li"><a href='https://www.linkedin.com'>Linkedin</a></li>
                        </ul>
                    </div>

                    <div className="col1">
                        {/*COLUMN 3 */}
                        <h3>Address</h3>
                        <ul className="list-unstyled"> 
                            <li>GG - 42</li>
                            <li>Hindalco Colony </li>
                            <li>Renukoot, Sonebhdra</li>
                            <li>Uttar Pradesh</li>
                            <li>India</li>
                        </ul>
                    </div>

                </div>
                {/*footer Bottom */}
                <div className="footer_bottom">
                    <p>&copy; Copyright to<a href='https://www.linkedin.com/mwlite/in/shrutika-pandey-01ba361b1'> @Shrutika_Pandey</a>  |  All Rights Reserved  |  Terms Of Service | Privacy</p>
                </div>
            </div>

        </div>
    )
}

export default Footer
