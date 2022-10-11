import Image from "next/image";
import Link from "next/link";

export const Banner = ({ banner }) => {
    return (
        <figure className="img_effect">
            <Link href={banner.url} title="Mua ngay giá tốt quá trời">
                <a className="banner-wide">
                    <Image className="img-responsive center-base lazyload" src={banner.image} alt="" />
                </a>
            </Link>
        </figure>
    );
};

const Banners = ({ banners }) => {
    return (
        <>
            <div className="row">
                {banners.map((banner, index) => {
                    return (
                        <div key={index} className="col-lg-12 col-md-12 col-sm-4 col-xs-12 itembaner">
                            <Banner banner={banner} />
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default Banners;
