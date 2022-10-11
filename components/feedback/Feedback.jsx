import { useCallback, useRef } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/grid";

// import required modules
import { Grid, Navigation } from "swiper";

// import icons
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import Image from "next/image";

const Feedback = ({ title, feedbacks, col, row, spaceBetween }) => {
    // Handle navigation
    const sliderRef = useRef(null);

    const handlePrev = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slidePrev();
    }, []);

    const handleNext = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slideNext();
    }, []);

    return (
        <div className="section_best_sale aside-filter">
            <div className="aside-item aside-mini-list-product">
                <div>
                    <div className="left-content">
                        <div className="aside-title">
                            <h2 className="title-head margin-top-0">
                                <Link href="/products">
                                    <a>{title}</a>
                                </Link>
                            </h2>
                        </div>
                    </div>
                    <div className="related-products">
                        <Swiper
                            slidesPerView={col}
                            grid={{
                                rows: row,
                                fill: "row",
                            }}
                            ref={sliderRef}
                            modules={[Grid, Navigation]}
                            spaceBetween={spaceBetween}
                        >
                            {feedbacks.map((feedback, index) => (
                                <SwiperSlide key={index}>
                                    <div className="item_danhgia">
                                        <div className="image_left">
                                            <Image className="lazyload loaded" src={feedback.image} alt={feedback.name} />
                                        </div>
                                        <div className="content_dg">
                                            <p>
                                                {feedback.name}&nbsp;<span>{feedback.job}</span>
                                            </p>
                                            <span className="section cmt">{feedback.content}</span>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        {/* Button */}
                        <div className="control-swiper">
                            <button className="control-swiper__prev" onClick={handlePrev}>
                                <FaAngleLeft />
                            </button>
                            <button className="control-swiper__next" onClick={handleNext}>
                                <FaAngleRight />
                            </button>
                        </div>
                        <div className="product-mini-lists owl-carousel owl-loaded owl-drag">
                            <div className="owl-stage-outer">
                                <div className="owl-stage"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Feedback;
