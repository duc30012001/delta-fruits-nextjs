import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { useSelector } from "react-redux";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";

// Import components
import HomeLayout from "../layout/HomeLayout";
import Section from "../components/section/Section";
import SwiperGrid from "../components/swiper-grid/SwiperGrid";
import Banners, { Banner } from "../components/banners/Banners";
import ProductsListSwiper from "../components/product-list-swiper/ProductsListSwiper";
import SliderGrid from "../components/slider-grid/SliderGrid";
import Feedback from "../components/feedback/Feedback";

const Home = () => {
    // Get data from redux
    const catalogues = useSelector((state) => state.catalogues.value);
    const news = useSelector((state) => state.news.value);
    const advertisements = useSelector((state) => state.advertisements.value);
    const products = useSelector((state) => state.products.value);

    // Responsive swiper
    const defaultWidth = typeof window !== "undefined" ? window.innerWidth : 0;
    let defaultColNews = 0;
    let defaultColPr = 0;
    let defaultColBs = 0;
    let defaultColFb = 0;
    if (defaultWidth < 600) {
        defaultColNews = 1;
        defaultColPr = 1;
        defaultColFb = 1;
        defaultColBs = 1;
    } else if (defaultWidth < 992) {
        defaultColNews = 2;
        defaultColPr = 3;
        defaultColFb = 2;
        defaultColBs = 2;
    } else if (defaultWidth < 1200) {
        defaultColNews = 2;
        defaultColPr = 4;
        defaultColFb = 1;
        defaultColBs = 2;
    } else {
        defaultColNews = 3;
        defaultColPr = 5;
        defaultColFb = 1;
        defaultColBs = 2;
    }

    const [colNews, setColNews] = useState(defaultColNews);
    const [colPr, setColPr] = useState(defaultColPr);
    const [colFb, setColFb] = useState(defaultColFb);
    const [colBs, setColBs] = useState(defaultColBs);

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            if (width < 600) {
                setColNews(1);
                setColPr(1);
                setColFb(1);
                setColBs(1);
            } else if (width < 992) {
                setColNews(2);
                setColPr(3);
                setColFb(2);
                setColBs(2);
            } else if (width < 1200) {
                // setColNews(2);
                setColPr(4);
                setColFb(1);
                setColBs(2);
            } else {
                setColNews(3);
                setColPr(5);
                setColFb(1);
                setColBs(2);
            }
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Gia tot moi ngay, San pham ban chay
    let bestPriceId = [];
    let bestSaleId = [];
    let bestPrice = [];
    let bestSale = [];
    catalogues.forEach((catalogue) => {
        switch (catalogue.name) {
            case "Giá tốt mỗi ngày":
                bestPriceId = [...catalogue.products];
                break;
            case "Sản phẩm bán chạy":
                bestSaleId = [...catalogue.products];
                break;
            default:
                break;
        }
    });

    products.forEach((product) => {
        // Gia tot moi ngay
        if (bestPriceId.includes(product.id)) bestPrice.push(product);

        // San pham ban chay
        if (bestSaleId.includes(product.id)) bestSale.push(product);
    });

    // Deal, Banners
    let deals = {};
    let banners = {};
    let banner = {};
    advertisements.forEach((item) => {
        switch (item.name) {
            case "deals":
                deals = { ...item };
                break;
            case "center-ads-2":
                banners = { ...item };
                break;
            case "center-ads":
                banner = { ...item };
                break;
            default:
                break;
        }
    });

    return (
        <>
            <HomeLayout>
                {/* ================ SECTION 2 ================== */}
                <Section
                    className={"section_deal_bestsale"}
                    childLeft={
                        <ProductsListSwiper title={"Giá tốt mỗi ngày"} products={bestPrice} col={colFb} row={1} border={"solid 2px #ffaf00"} />
                    }
                    childRight={
                        <>
                            <SwiperGrid products={bestSale} title={"Sản phẩm bán chạy"} col={colBs} row={2} spaceBetween={15} />
                            <Banner banner={banner.detail[0]} />
                        </>
                    }
                />

                {/* ================ SECTION 3 ================== */}
                <Section
                    className={"section_product_news"}
                    childLeft={<Banners banners={banners.detail} />}
                    childRight={<ProductsListSwiper title={"Sản phẩm mới về"} products={products} col={colNews} row={2} />}
                />

                {/* ================ SECTION 4 ================== */}
                <section className="awe-section-4">
                    <section className="section section_suggested">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <ProductsListSwiper title={"Gợi ý cho bạn"} products={products} col={colPr} />
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 margin-top-15">
                                    <div className="row">
                                        {deals.detail.map((deal, index) => (
                                            <div key={index} className="col-lg-6 col-md-6 col-sm-12 col-xs-12 itembannerhover">
                                                <div className="row">
                                                    <div className="col-lg-6 col-md-6 col-sm-5 hidden-xs">
                                                        <div className="imgbanner getheight_banner">
                                                            <Link href={deal.url}>
                                                                <a>
                                                                    <Image className="lazyload" src={deal.image} alt="banner" />
                                                                </a>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 col-md-6 col-sm-7 col-xs-12">
                                                        <div className={`contentbanner contentb${index + 1}`}>
                                                            <div dangerouslySetInnerHTML={{ __html: deal.content }}></div>
                                                            <Link href={deal.url} title="mua ngay">
                                                                <a className="button">Mua ngay</a>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>

                {/* ================ SECTION 5 ================== */}
                <section className="awe-section-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12 margin-bottom-35">
                                <SliderGrid
                                    title={"Loại quả nổi bật"}
                                    products={products}
                                    col={1}
                                    row={3}
                                    border={"solid 1px #ebebeb"}
                                    spaceBetween={15}
                                    padding={"15px"}
                                />
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12 margin-bottom-35">
                                <SliderGrid
                                    title={"Hoa quả ưa chuộng"}
                                    products={products}
                                    col={1}
                                    row={3}
                                    border={"solid 1px #ebebeb"}
                                    spaceBetween={15}
                                    padding={"15px"}
                                />
                            </div>
                            <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12 margin-bottom-35">
                                <div className="owldanhgia owl-carousel owl-loaded owl-drag">
                                    <Feedback title={"Phản hồi của khách"} feedbacks={news.feedback} col={1} row={3} spaceBetween={15} />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ================ SECTION 6 ================== */}
                <section className="awe-section-6">
                    <section className="section_blog_and_brand">
                        <div className="container">
                            <div className="wrap_bgd">
                                <div className="row">
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        <div className="section title_blog_module">
                                            <h2>
                                                <Link href="/news" title="Xu hướng mới">
                                                    <a>Xu hướng mới</a>
                                                </Link>
                                            </h2>
                                            <p>Cùng xem tin tức thị trường hôm này có gì ?</p>
                                        </div>

                                        <div className="section blog_owlrap">
                                            <div className="owl-carousel owl-theme brand_content not-nav2 owl-loaded owl-drag">
                                                <Swiper spaceBetween={30} slidesPerView={colNews}>
                                                    {news.articles.map((newItem, index) => (
                                                        <SwiperSlide key={index}>
                                                            <div className="itemblog">
                                                                <div className="blog_index">
                                                                    <div className="myblog">
                                                                        <div className="image-blog-left">
                                                                            <Link href={newItem.path}>
                                                                                <a>
                                                                                    <Image
                                                                                        className="lazyload"
                                                                                        src={newItem.image}
                                                                                        title={newItem.title}
                                                                                        alt={newItem.title}
                                                                                    />
                                                                                </a>
                                                                            </Link>
                                                                        </div>
                                                                        <div className="content_blog">
                                                                            <span className="time_post">
                                                                                Đăng bởi:
                                                                                <span className="name_">{newItem.author}</span>
                                                                                &nbsp; | &nbsp;
                                                                                <span>
                                                                                    <i className="fa-solid fa-comment"></i>
                                                                                    &nbsp;1
                                                                                </span>
                                                                            </span>
                                                                            <h3 className="h3">
                                                                                <Link href={newItem.path} title={newItem.title}>
                                                                                    <a>{newItem.title}</a>
                                                                                </Link>
                                                                            </h3>

                                                                            <div className="summary_item_blog">
                                                                                <p>{newItem.des}</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </SwiperSlide>
                                                    ))}
                                                </Swiper>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>
            </HomeLayout>
        </>
    );
};

export default Home;
