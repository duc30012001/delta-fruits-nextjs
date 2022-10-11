import Link from "next/link";
import Image from "next/image";
import { useDispatch } from "react-redux";

import { FaEye, FaShoppingBasket } from "react-icons/fa";
import numberWithCommas from "../../helper/numberWithCommas";

import { setQuickView } from "../../redux/quickViewSlice";

import { handleAddToCart } from "../../helper/handleCart";

const ProductCard = ({ product, query }) => {
    const dispatch = useDispatch();

    const handleOpenQuickView = () => {
        dispatch(
            setQuickView({
                openQuickView: true,
                product: product,
                openModal: false,
            }),
        );
    };

    const handleOpenModal = (product) => {
        if (product.status !== "Hết hàng") {
            dispatch(
                setQuickView({
                    openModal: true,
                    product: product,
                    openQuickView: false,
                }),
            );
            handleAddToCart("add-item", product.id, dispatch, 1);
        }
    };

    return (
        <>
            <div className="product-box product-item-main">
                <div className="product-thumbnail">
                    <Link href={product?.url} title={product?.name}>
                        <a className="image_thumb thumb_cls p_img">
                            <Image className="lazyload" src={product?.images[0]} alt={product?.name} />
                        </a>
                    </Link>

                    {/* <a  data-toggle="tooltip" title="" data-original-title="Xem nhanh"> */}
                    <div onClick={handleOpenQuickView} className="xem_nhanh btn-circle btn_view btn right-to quick-view hidden-xs hidden-sm">
                        <i className="fa fa-eye">
                            <FaEye />
                        </i>
                    </div>
                    {/* </a> */}

                    {product?.price !== product?.oldPrice ? (
                        <div className="saleright">
                            <span>{Math.floor(((product.oldPrice - product?.price) / product?.oldPrice) * 100)}%</span>
                        </div>
                    ) : (
                        ""
                    )}

                    <div className="product-action clearfix">
                        <form className="variants form-nut-grid">
                            <div className="group_action">
                                {product.status === "Hết hàng" ? (
                                    <Link href={product.url}>
                                        <a
                                            onClick={() => {
                                                handleOpenModal(product);
                                            }}
                                            className="btn-buy firstb btn-cart button_35 left-to muangay add_to_cart"
                                        >
                                            <i className="fa fa-shopping-basket">
                                                <FaShoppingBasket />
                                            </i>
                                            Hết hàng
                                        </a>
                                    </Link>
                                ) : (
                                    <a
                                        onClick={() => {
                                            handleOpenModal(product);
                                        }}
                                        className="btn-buy firstb btn-cart button_35 left-to muangay add_to_cart"
                                    >
                                        <i className="fa fa-shopping-basket">
                                            <FaShoppingBasket />
                                        </i>
                                        Thêm vào giỏ
                                    </a>
                                )}
                            </div>
                        </form>
                    </div>
                </div>
                <div className="product-info product-bottom mh">
                    <h3 className="product-name a-center">
                        <Link href={product?.url} title={product?.name}>
                            <a>{product?.name}</a>
                        </Link>
                    </h3>

                    <div className="reviews_item_product active a-center">
                        <div className="bizweb-product-reviews-badge a-center"></div>
                    </div>

                    <div className="section">
                        <div className="blockprice">
                            <div className="product-item-price price-box">
                                <span className="special-price">
                                    <span className="price product-price">{numberWithCommas(product?.price)}₫</span>
                                </span>

                                {product?.price !== product?.oldPrice ? (
                                    <span className="product-item-price-sale old-price">
                                        <span className="compare-price price product-price-old">{numberWithCommas(product?.oldPrice)}₫</span>
                                    </span>
                                ) : (
                                    ""
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductCard;
