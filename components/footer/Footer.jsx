import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// Import icons
import { FaPlus, FaMinus, FaAngleUp } from "react-icons/fa";

import headphone from "../../static/images/footer/headphone.png";
import place from "../../static/images/footer/place.png";
import email from "../../static/images/footer/email.png";
import payment from "../../static/images/footer/payment.png";

import SocialOptions from "../social-options/SocialOptions";

const Footer = ({ logo, information, dataFooter }) => {
    const [collapsed, setCollapsed] = useState({
        1: false,
        2: false,
        3: false,
        4: false,
    });

    const handleCollapse = (key) => {
        setCollapsed((prev) => {
            let coll = { ...prev };
            coll[key] = !coll[key];
            return coll;
        });
    };

    const [show, setShow] = useState(false);

    if (typeof window !== "undefined") {
        window.addEventListener("scroll", () => {
            window.pageYOffset > 200 ? setShow(true) : setShow(false);
        });
    }

    return (
        <>
            <footer className="footer border_top">
                <div className="site-footer">
                    <div className="mid-footer">
                        <div className="container">
                            <div className="row">
                                <div className="col-xs-12 col-sm-12 col-md-5 col-lg-3">
                                    <div className="widget-ft last social_footer">
                                        <div className="blocklogo">
                                            <Link href="/">
                                                <a className="logofooter">
                                                    <Image className="lazyload" src={logo} alt="logo Delta Fruits" />
                                                </a>
                                            </Link>
                                        </div>
                                        <div className="contactfooter">
                                            <div className="flop">
                                                <span className="icon">
                                                    <Image className="lazyload" src={headphone} alt="liên hệ ngay" />
                                                </span>
                                                <div className="fright">
                                                    <p>Bạn cần tư vấn ?</p>
                                                    <a className="fone" href="tel:19006750">
                                                        {information.phone}
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="flop mt ">
                                                <p>Thông tin địa chỉ</p>
                                                <div className="section flex contactfooter__address">
                                                    <span className="icon">
                                                        <Image className="lazyload" src={place} alt="Địa chỉ" />
                                                    </span>
                                                    <div className="fright">
                                                        <span>{information.address}</span>
                                                    </div>
                                                </div>
                                                <div className="section flex">
                                                    <span className="icon">
                                                        <Image className="lazyload" src={email} alt="Địa chỉ" />
                                                    </span>
                                                    <div className="fright">
                                                        <a href={`mailto:${information.email}`}>{information.email}</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="social_footer">
                                            <SocialOptions social={information.social} />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-9 col-md-7 col-sm-12 col-xsm-12">
                                    <div className="row rowsfooter">
                                        {dataFooter.map((footer, index) => (
                                            <div key={index} className="col-xs-12 col-sm-6 col-md-6 col-lg-3">
                                                <div className="widget-ft first">
                                                    <h4 className="title-menu">
                                                        <Link href="#" role="button">
                                                            <a className="collapsed">
                                                                {footer.title}
                                                                <i className="fa-solid fa-plus" onClick={() => handleCollapse(index)}>
                                                                    {collapsed[index] ? <FaMinus /> : <FaPlus />}
                                                                </i>
                                                            </a>
                                                        </Link>
                                                    </h4>
                                                    <div className={collapsed[index] ? "collapse in" : "collapse"} id="collapseListMenu01">
                                                        <ul className="list-menu">
                                                            {footer.list.map((item, idx) => (
                                                                <li key={idx} className="li_menu">
                                                                    <Link href={item.url}>
                                                                        <a>{item.name}</a>
                                                                    </Link>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="payment_e">
                        <div className="container a-center">
                            <div className="iigpay">
                                <Image className="lazyload" src={payment} alt="Các hình thức thành toán" />
                            </div>
                        </div>
                    </div>

                    <div className="bg-footer-bottom copyright clearfix">
                        <div className="container">
                            <div className="inner clearfix">
                                <div className="row tablet">
                                    <div id="copyright" className="col-lg-12 col-md-12 col-sm-12 col-xs-12 a-center fot_copyright">
                                        <span className="wsp">
                                            <span className="mobile">
                                                © Bản quyền thuộc về
                                                <b>
                                                    <Link
                                                        href="#"
                                                        title="Delta Web"
                                                        // target="_blank"
                                                    >
                                                        <a>Delta Web</a>
                                                    </Link>
                                                </b>
                                                <span className="hidden-xs"> | </span>
                                            </span>
                                            <span className="opacity1">Cung cấp bởi</span>
                                            <Link
                                                href="#"
                                                rel="nofollow"
                                                title="Sapo"
                                                // target="_blank"
                                            >
                                                <a>VGA</a>
                                            </Link>
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div title="Lên đầu trang">
                                <a
                                    id="back-to-top"
                                    className={show ? "backtop show" : "backtop"}
                                    onClick={() => window.scroll({ top: 0, behavior: "smooth" })}
                                >
                                    <i className="fa-solid fa-angle-up">
                                        <FaAngleUp />
                                    </i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
