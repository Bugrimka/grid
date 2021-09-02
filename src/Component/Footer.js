import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebookF, faGooglePlusG, faTwitter, faPinterestP} from "@fortawesome/free-brands-svg-icons";

export const Footer = () => (
    <div className="wrapperFooter">
        <div className="bigBlockFooter">
            <div className="footerName">
                <div className="footerHeadName">Kim Ellis</div>
                <div className="footerUnderName">blog theme</div>
            </div>
            <div className="footerMenu">
                <ul>
                    <li>insider</li>
                    <li>fashion week</li>
                    <li>lifestyle</li>
                    <li>looks</li>
                    <li>shopping</li>
                </ul>
            </div>
            <div className="footerMenu">
                <ul>
                    <li>home</li>
                    <li>pages</li>
                    <li>about me</li>
                    <li>typography</li>
                    <li>contact</li>
                </ul>
            </div>
            <div className="follow">
                <span>follow us</span>
                <ul>
                    <li><FontAwesomeIcon icon={faFacebookF}/> Facebook</li>
                    <li><FontAwesomeIcon icon={faGooglePlusG}/> Google +</li>
                    <li><FontAwesomeIcon icon={faTwitter}/> Twitter</li>
                    <li><FontAwesomeIcon icon={faPinterestP}/> Pinterest</li>
                </ul>
            </div>
            <div className="subscribe">
                <div className="subscribeName">subscribe</div>
                <div className="subscribePromotion">Never miss our latest news and information about fashion</div>
                <div className="email">
                    <form action="#">
                        <input type="email"/>
                        <button type="submit">subscribe</button>
                    </form>
                </div>
            </div>
        </div>
        <div className="runningTitleFooter">
            © 2016 Kim Ellis . Trademarks and brands are the property of their respective owners.
        </div>
    </div>
)
