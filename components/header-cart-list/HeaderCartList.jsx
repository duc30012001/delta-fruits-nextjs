import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import numberWithCommas from "../../helper/numberWithCommas";
import Link from "next/link";
import Image from "next/image";
import { handleAddToCart, handleGetCart } from "../../helper/handleCart";

import { FaTrash } from "react-icons/fa";

const HeaderCartList = () => {
    const listItems = useSelector((state) => state.cartItems.value);
    const [cart, setCart] = useState({
        total: 0,
        cartItems: [],
    });

    const products = useSelector((state) => state.products.value);

    useEffect(() => {
        const { total, cartItems } = handleGetCart(listItems, products);
        setCart({ total, cartItems });
    }, [listItems, products]);
    // console.log(cartItems);

    const dispatch = useDispatch();

    const handleCart = (action, product) => {
        // console.log(action, product);
        handleAddToCart(action, product.id, dispatch, 1);
    };

    let totalPrice = cart.total;
    return (
        <ul id="cart-sidebar" className="mini-products-list count_li">
            <ul className="list-item-cart">
                {cart.cartItems?.map((product, index) => {
                    return (
                        <li className="item productid-20924464" key={index}>
                            <div className="border_list">
                                <Link href={product.url} title={product.name}>
                                    <a className="product-image">
                                        {product.image ? <Image alt={product.name} src={product.image} width="100" height="100" /> : null}
                                    </a>
                                </Link>
                                <div className="detail-item">
                                    <div className="product-details">
                                        <p className="product-name">
                                            <Link href={product.url} title={product.name}>
                                                <a className="text2line">{product.name}</a>
                                            </Link>
                                        </p>
                                    </div>
                                    <div className="product-details-bottom">
                                        <span className="price">{numberWithCommas(product.price)}₫</span>
                                        <button
                                            onClick={() => handleCart("remove-item", product)}
                                            title="Xóa"
                                            className="remove-item-cart fa-solid fa-trash"
                                        >
                                            <FaTrash />
                                        </button>
                                        <div className="quantity-select qty_drop_cart">
                                            <input className="variantID" type="hidden" name="variantId" value="20924464" />
                                            <button
                                                onClick={() => handleCart("decrease", product)}
                                                className="btn_reduced reduced items-count btn-minus"
                                                disabled=""
                                                type="button"
                                            >
                                                –
                                            </button>

                                            <input
                                                type="text"
                                                onChange={() => console.log("")}
                                                readOnly=""
                                                className="input-text number-sidebar"
                                                name="Lines"
                                                value={product.quantity}
                                            />
                                            <button
                                                onClick={() => handleCart("increase", product)}
                                                className="btn_increase increase items-count btn-plus"
                                                type="button"
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    );
                })}
            </ul>
            <div className="pd">
                <div className="top-subtotal">
                    Tổng tiền:
                    <span className="price price_big">{numberWithCommas(totalPrice)}₫</span>
                </div>
            </div>
            <div className="pd right_ct">
                <Link href="/checkout">
                    <a className="btn btn-primary">
                        <span>Tiến hành thanh toán</span>
                    </a>
                </Link>
                <Link href="/cart">
                    <a className="btn btn-white hidden">
                        {" "}
                        <span>Đi đến giỏ hàng</span>
                    </a>
                </Link>
            </div>
        </ul>
    );
};

export default HeaderCartList;
