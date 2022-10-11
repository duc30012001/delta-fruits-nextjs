import Link from "next/link";

import { FaFacebook, FaInstagram, FaTwitter, FaGoogle, FaYoutube } from "react-icons/fa";

const SocialIcon = (name) => {
    if (name === "Facebook") return <FaFacebook />;
    if (name === "Instagram") return <FaInstagram />;
    if (name === "Twitter") return <FaTwitter />;
    if (name === "Google") return <FaGoogle />;
    if (name === "Youtube") return <FaYoutube />;
};

const SocialOptions = ({ social }) => {
    return (
        <ul className="follow_option">
            {social.map((item, index) => (
                <li key={index}>
                    <Link href={item.url} title="Theo dõi Facebook Delta Fruits">
                        <a>
                            <i className="fa-solid ">{SocialIcon(item.name)}</i>
                        </a>
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default SocialOptions;
