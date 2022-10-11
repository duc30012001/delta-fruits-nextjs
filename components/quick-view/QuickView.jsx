import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { FaTimes } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { setQuickView } from "../../redux/quickViewSlice";
import { handleAddToCart } from "../../helper/handleCart";

import numberWithCommas from "../../helper/numberWithCommas";

const QuickView = ({ product, openQuickView }) => {
    const [thumb, setThumb] = useState(0);

    const dispatch = useDispatch();
    const handleClose = () => {
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
    };

    const [quantity, setQuantity] = useState(1);
    // console.log(product);

    const handleAdd = (product) => {
        if (product.status !== "Hết hàng") {
            handleAddToCart("add-item", product.id, dispatch, quantity);
            dispatch(
                setQuickView({
                    product: product,
                    openQuickView: false,
                    openModal: true,
                }),
            );
        }
    };
    return (
        // <!-- ======================= Quick View ========================== -->
        <div
            id="quick-view-product"
            className="quickview-product in"
            style={openQuickView ? { display: "block", paddingLeft: "0px" } : { display: "none" }}
        >
            <div onClick={handleClose} className="quickview-overlay fancybox-overlay fancybox-overlay-fixed"></div>
            <div className="quick-view-product">
                <div className="block-quickview primary_block row">
                    <div className="product-left-column col-xs-12 col-sm-5 col-md-5 col-lg-5">
                        <div className="clearfix image-block">
                            <span className="view_full_size">
                                <Link title="" href="">
                                    <a className="img-product">
                                        {product.images.length ? (
                                            <Image
                                                id="product-featured-image-quickview"
                                                className="img-responsive product-featured-image-quickview"
                                                src={product.images[thumb]}
                                                alt="quickview"
                                            />
                                        ) : (
                                            ""
                                        )}
                                    </a>
                                </Link>
                            </span>
                        </div>
                        <div className="more-view-wrapper clearfix">
                            <div className="thumbs_quickview thumbs_list_quickview" id="thumbs_list_quickview">
                                <ul className="quickview__thumbs" id="thumblist_quickview" style={{ visibility: "visible" }}>
                                    {product.images.map((image, index) => (
                                        <li key={index} onClick={() => setThumb(index)} className={thumb === index ? "active-thumb" : ""}>
                                            <Image src={image} alt="" />
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="product-center-column product-info product-item col-xs-5 col-sm-7 col-md-7 col-lg-7" id="product-12806126">
                        <div className="head-qv">
                            <h3 className="qwp-name">
                                <Link href={product?.url} title={product.name}>
                                    <a className="text2line">{product?.name}</a>
                                </Link>
                            </h3>
                            <div className="vend-qv">
                                <div className="left_vend">
                                    <span className="vendor_">
                                        <span>Loại: </span>
                                        {product?.type}
                                    </span>
                                    <span className="line">|</span>
                                    Tình trạng: <span className="soluong">{product?.status}</span>
                                </div>
                            </div>
                        </div>
                        <div className="quickview-info">
                            <div className="reviews_qv">
                                <div className="bizweb-product-reviews-badge" data-id="12806126"></div>
                            </div>

                            <span className="prices">
                                <span className="price">{numberWithCommas(product.price)} ₫</span>
                                <del className="old-price"></del>
                            </span>
                        </div>
                        <div className="product-description">
                            <div className="rte">
                                <p>{product.description}</p>
                            </div>
                        </div>
                        <form
                            // method="post"
                            className="quick_option variants form-ajaxtocart"
                        >
                            <span className="price-product-detail hidden" style={openQuickView ? { opacity: 1 } : { opacity: 0 }}>
                                <span className=""></span>
                            </span>

                            <div className="quantity_wanted_p">
                                <div className="input_qty_qv" style={product.status === "Hết hàng" ? { display: "none" } : { display: "block" }}>
                                    <div
                                        className="btn_num num_1 button button_qty"
                                        onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
                                    >
                                        -
                                    </div>
                                    <input
                                        type="text"
                                        id="quantity-detail"
                                        name="quantity"
                                        pattern="[0-9]*"
                                        value={quantity}
                                        className="form-control prd_quantity"
                                        onChange={(e) => setQuantity((prev) => (e.target.validity.valid ? e.target.value - 0 : prev))}
                                    />
                                    <div className="btn_num num_2 button button_qty" onClick={() => setQuantity(quantity + 1)}>
                                        +
                                    </div>
                                </div>

                                <div className="button_actions clearfix">
                                    <button
                                        disabled={product.status === "Hết hàng"}
                                        style={product.status === "Hết hàng" ? { cursor: "not-allowed" } : {}}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handleAdd(product);
                                        }}
                                        className="btn btn_base fix_add_to_cart ajax_addtocart btn_add_cart btn-cart add_to_cart add_to_cart_detail"
                                    >
                                        <span className="text_1">{product.status === "Hết hàng" ? "Hết hàng" : "Cho vào giỏ hàng"}</span>
                                    </button>
                                </div>
                            </div>
                        </form>

                        <div className="call_phone_buy f-left w_100">
                            <div>
                                Gọi ngay:
                                <a href="tel:19006750">19006750</a> để đặt hàng số lượng lớn
                            </div>
                        </div>
                    </div>
                </div>

                <a className="quickview-close close-window" title="Close">
                    <i className="fa fa-times" onClick={handleClose}>
                        <FaTimes />
                    </i>
                </a>
            </div>
        </div>
    );
};

export default QuickView;
