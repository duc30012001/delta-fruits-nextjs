import { useEffect } from "react";
// import { Link, useLocation } from "react-router-dom";
import Link from "next/link";
import Image from "next/image";

import { useDispatch, useSelector } from "react-redux";
import { setQuickView } from "../redux/quickViewSlice";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";

import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import AddToCart from "../components/add-to-cart/AddToCart";
import QuickView from "../components/quick-view/QuickView";

import { information, dataFooter, dataMenu, news } from "../data/data";
import { useRouter } from "next/router";

const HomeLayout = (props) => {
    const dispatch = useDispatch();
    const quickView = useSelector((state) => state.quickView.value);

    // const location = useLocation();
    const router = useRouter();
    // console.log(router);
    useEffect(() => {
        window.scroll({ top: 0 });
        dispatch(
            setQuickView({
                product: {
                    id: 0,
                    name: "",
                    type: "",
                    status: "",
                    price: 0,
                    oldPrice: 0,
                    images: [],
                    url: "",
                },
                openQuickView: false,
                openModal: false,
            }),
        );
    }, [router.pathname]);

    const album = news.relation;

    const advertisements = useSelector((state) => state.advertisements.value);

    const topAds = advertisements.filter((item) => item.name === "top-ads")[0];
    // console.log(topAds);

    return (
        <>
            <Header title={information.title} logo={information.logo} paths={dataMenu} />
            <div className="home__slider">
                <Link href={topAds.detail[0].url}>
                    <a>
                        <Image src={topAds.detail[0].image} alt="" />
                    </a>
                </Link>
            </div>
            <div className="container">
                <div className="row">{props.children}</div>
            </div>
            <section className="awe-section-7">
                <section className="section section_album">
                    <Swiper slidesPerView={6} navigation={true} modules={[Navigation]}>
                        {album.images.map((img, index) => (
                            <SwiperSlide key={index}>
                                <Image className="home__al" src={img} alt="" />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </section>
            </section>
            <Footer logo={information.logo} information={information.contact} dataFooter={dataFooter} />

            <QuickView openQuickView={quickView.openQuickView} product={quickView.product} />
            <AddToCart openModal={quickView.openModal} product={quickView.product} />
        </>
    );
};

export default HomeLayout;
