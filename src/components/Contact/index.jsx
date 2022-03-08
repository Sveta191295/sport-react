import "./styles.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationDot, faPhone, } from '@fortawesome/free-solid-svg-icons'

const Contact = () => {
    return (
        <div className="contact-section">
            <div className="container">
                <div className="contact-box">
                    <h2> Contact Us </h2>
                    <div className="contact-info-box">
                        <div className="info-box">
                            <div>
                                <FontAwesomeIcon icon={faLocationDot} />
                            </div>
                            <div>
                                <p className="text-dec"> sportshop.am </p>
                                <p> Armenia, Yerevan </p>
                                <p> Working mode : 24 hours </p>
                            </div>
                        </div>
                        <div className="info-box">
                            <div>
                                <FontAwesomeIcon icon={faEnvelope} />
                            </div>
                            <div>
                                <p className="text-dec"> Customer Support </p>
                                <p> info@sportshop.am </p>
                            </div>
                        </div>
                        <div className="info-box">
                            <div>
                                <FontAwesomeIcon icon={faPhone} />
                            </div>
                            <div>
                                <p className="text-dec"> Phone </p>
                                <p> + 374 77 777 777 </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Contact;