import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { setQuickView } from "../../redux/quickViewSlice";

import numberWithCommas from "../../helper/numberWithCommas";
import { handleGetCart } from "../../helper/handleCart";
import Image from "next/image";

const AddToCart = ({ product, openModal }) => {
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

    const listItems = useSelector((state) => state.cartItems.value);
    const products = useSelector((state) => state.products.value);

    const [cart, setCart] = useState({
        total: 0,
        cartItems: [],
    });
    useEffect(() => {
        const list = handleGetCart(listItems, products);
        setCart({
            total: list.total,
            cartItems: list.cartItems,
        });
    }, [listItems, products]);

    return (
        <>
            <div
                id="popupCartModal"
                className="modal fade in"
                role="dialog"
                style={openModal ? { display: "block", paddingRight: "17px" } : { display: "none", paddinRight: "17px" }}
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            data-backdrop="false"
                            aria-label="Close"
                            style={{ position: "relative", zIndex: 9 }}
                            onClick={handleClose}
                        >
                            <span aria-hidden="true">×</span>
                        </button>
                        <div className="row row-noGutter">
                            <div className="modal-left col-sm-6 col-lg-6 col-md-6">
                                <h3 className="title">
                                    <i className="fa fa-check"></i>
                                    Sản phẩm vừa được thêm
                                </h3>
                                <div className="modal-body">
                                    <div className="media">
                                        <div className="media-left">
                                            <div className="thumb-1x1">
                                                {product.images.length ? <Image src={product.images[0]} alt={product.name} /> : ""}
                                            </div>
                                        </div>
                                        <div className="media-body">
                                            <div className="product-title">{product.name}</div>
                                            <div className="product-new-price">
                                                <span>{numberWithCommas(product.price)}đ</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-right col-sm-6 col-lg-6 col-md-6">
                                <h3 className="title right_title">
                                    <Link href="/cart">
                                        <a>
                                            <i className="fa fa-shopping-bag"></i> Giỏ hàng{" "}
                                            <i>
                                                (<b className="cart-popup-count">{cart.cartItems.length}</b>)
                                            </i>{" "}
                                        </a>
                                    </Link>
                                </h3>
                                <div className="total_price">
                                    <span>Tổng tiền: </span> <span className="">{numberWithCommas(cart.total)}đ</span>
                                </div>
                                <Link href="/checkout">
                                    <a className="btn btn-primary checkout_button btn-full">Thanh toán</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="popup_overlay" onClick={handleClose}></div>
            </div>
        </>
    );
};

export default AddToCart;
