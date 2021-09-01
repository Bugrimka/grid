import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAt} from "@fortawesome/free-solid-svg-icons";
import {faFacebookF, faGooglePlusG, faTwitter, faPinterestP} from "@fortawesome/free-brands-svg-icons";

const media = [
    {
        icon: faFacebookF,
        onAction: () => alert("faFacebookF")
    },
    {
        icon: faGooglePlusG,
        onAction: () => alert("faGooglePlusG")
    },
    {
        icon: faTwitter,
        onAction: () => alert("faTwitter")
    },
    {
        icon: faPinterestP,
        onAction: () => alert("faPinterestP")
    },
    {
        icon: faAt,
        onAction: () => alert("faAt")
    },
]
export const SocialMediaButton = () => {
    return <div className="socialMedia">
        {media.map((item, index) => {
            return <button className="socialButton" onClick={item.onAction} key={index}>
                <FontAwesomeIcon icon={item.icon}/>
            </button>
        })}
    </div>
}