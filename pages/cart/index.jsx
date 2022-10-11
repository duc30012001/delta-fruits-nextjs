import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Link from "next/link";
import Image from "next/image";

import { handleAddToCart, handleGetCart } from "../../helper/handleCart";
import numberWithCommas from "../../helper/numberWithCommas";

import DefaultLayout from "../../layout/DefaultLayout";

const CartList = ({ products, total }) => {
    const dispatch = useDispatch();
    const handle = (e, action, product) => {
        e.preventDefault();
        handleAddToCart(action, product.id, dispatch, 1);
    };

    return (
        <>
            <div className="col-main cart_desktop_page cart-page">
                <div className="cart page_cart cart_des_page hidden-xs-down">
                    <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12 pd-right cart_desktop">
                        <form action="/cart" method="post">
                            <div className="bg-scroll">
                                <div className="cart-thead">
                                    <div className="text-left" style={{ width: "43%" }}>
                                        <span>
                                            Sản phẩm<span></span>
                                        </span>
                                    </div>
                                    <div style={{ width: "19%" }} className="a-center">
                                        <span className="nobr">Giá</span>
                                    </div>
                                    <div style={{ width: "13%" }} className="a-center">
                                        Số lượng
                                    </div>
                                    <div style={{ width: "25%" }} className="a-center">
                                        Thành tiền
                                    </div>
                                </div>
                                <div className="cart-tbody">
                                    {products.map((product, index) => {
                                        return (
                                            <div key={index} className="item-cart productid-20924464">
                                                <div className="content_ content_s" style={{ width: "15%" }}>
                                                    <Link title={product.name} href={product.url}>
                                                        <a className="product-image">
                                                            <Image width="75" height={75} alt={product.name} src={product.image} />
                                                        </a>
                                                    </Link>
                                                </div>
                                                <div className="content_ content_s" style={{ width: "28%" }}>
                                                    <h3 className="product-name">
                                                        <Link href={product.url} title={product.name}>
                                                            <a className="text2line">{product.name}</a>
                                                        </Link>
                                                    </h3>
                                                    {/* <span className="variant-title" style="display: none;">Default Title</span> */}
                                                    <a
                                                        className="button remove-item remove-item-cart"
                                                        title="Xoá sản phẩm"
                                                        onClick={(e) => handle(e, "remove-item", product)}
                                                    >
                                                        <i className="fa fa-trash" aria-hidden="true"></i>
                                                        Xóa sản phẩm
                                                    </a>
                                                </div>
                                                <div style={{ width: "20%" }} className="a-center">
                                                    <span className="item-price">
                                                        <span className="price bold-price">{numberWithCommas(product.price)}₫</span>
                                                    </span>
                                                </div>
                                                <div style={{ width: "15%" }} className="a-center">
                                                    <div className="input_qty_pr">
                                                        <input className="variantID" type="hidden" name="variantId" value="20924464" />
                                                        <button
                                                            className="reduced_pop items-count btn-minus"
                                                            type="button"
                                                            onClick={(e) => handle(e, "decrease", product)}
                                                        >
                                                            –
                                                        </button>
                                                        <input
                                                            type="text"
                                                            className="input-text number-sidebar input_pop input_pop qtyItem20924464"
                                                            id="qtyItem20924464"
                                                            name="Lines"
                                                            size="4"
                                                            value={product.quantity}
                                                            onChange={(e) => e}
                                                        />
                                                        <button
                                                            className="increase_pop items-count btn-plus"
                                                            type="button"
                                                            onClick={(e) => handle(e, "increase", product)}
                                                        >
                                                            +
                                                        </button>
                                                    </div>
                                                </div>
                                                <div style={{ width: "22%" }} className="a-center">
                                                    <span className="item-price cart-price">
                                                        <span className="price pink">{numberWithCommas(product.price * product.quantity)}₫</span>
                                                    </span>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                                <div className="btn_bottom">
                                    <Link href="/products" title="Tiếp tục mua hàng">
                                        <a className="button btn-continue">
                                            <span>
                                                <span>Tiếp tục mua hàng</span>
                                            </span>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 cart-collaterals cart_submit row margin-top-15">
                        <div className="totals">
                            <div className="totals">
                                <div className="inner">
                                    <div className="wrap_checkprice">
                                        <div className="li_table shopping-cart-table-total hidden">
                                            <span className="li-left">Tạm tính:</span>
                                            <span className="li-right totals_price price pink">{numberWithCommas(total)}₫</span>
                                        </div>
                                        <div className="li_table shopping-cart-table-total">
                                            <span className="li-left li_text">Thành tiền:</span>
                                            <span className="li-right totals_price price">{numberWithCommas(total)}₫</span>
                                        </div>
                                    </div>
                                    <div className="wrap_btn">
                                        <Link title="Tiến hành thanh toán" href="/checkout">
                                            <a className="button btn-proceed-checkout">
                                                <span>Tiến hành thanh toán</span>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

const Cart = () => {
    const dispatch = useDispatch();

    // const { total, cartItems } = handleGetCart(listItems);
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
    // console.log(cartItems);

    const handle = (e, action, product) => {
        e.preventDefault();
        handleAddToCart(action, product.id, dispatch, 1);
    };
    return (
        <DefaultLayout>
            <section className="main-cart-page main-container col1-layout">
                <div className="main container hidden-xs">
                    <div className="wrap_background_aside padding-top-15 margin-bottom-40">
                        <div className="header-cart">
                            <h1 className="title_cart">
                                <Link href="">
                                    <a>
                                        Giỏ hàng của bạn
                                        <span>
                                            (<span className="cart-popup-count">{cart.cartItems.length}</span>
                                            sản phẩm)
                                        </span>
                                    </a>
                                </Link>
                            </h1>
                            {cart.cartItems.length === 0 ? <p>Không có sản phẩm nào. Quay lại cửa hàng để tiếp tục mua sắm.</p> : ""}
                            <div className="header-cart title_cart_pc hidden-sm hidden-xs"></div>
                        </div>
                        {cart.cartItems.length === 0 ? "" : <CartList products={cart.cartItems} total={cart.total} />}
                    </div>
                </div>
                {cart.cartItems.length === 0 ? (
                    ""
                ) : (
                    <div className="wrap_background_aside padding-top-15 margin-bottom-40 padding-left-0 padding-right-0 hidden-md hidden-lg hidden-sm">
                        <div className="cart-mobile">
                            <form className="margin-bottom-0">
                                <div className="header-cart">
                                    <div className="title-cart title_cart_mobile">
                                        <h3>Giỏ hàng của bạn</h3>
                                    </div>
                                </div>

                                <div className="header-cart-content" style={{ background: "#fff" }}>
                                    <div className="cart_page_mobile content-product-list">
                                        {cart.cartItems.map((product, index) => {
                                            {
                                                /* console.log(product); */
                                            }
                                            return (
                                                <div key={index} className="item-product item productid-20924464">
                                                    <div className="item-product-cart-mobile">
                                                        {/* <Link> </Link> */}
                                                        <Link href={product.url} className="product-images1" title={product.name}>
                                                            <a>
                                                                <Image width={80} height={80} src={product.image} alt={product.name} />
                                                            </a>
                                                        </Link>
                                                    </div>
                                                    <div className="title-product-cart-mobile">
                                                        <h3>
                                                            <Link href={product.url} title={product.name}>
                                                                <a>{product.name}</a>
                                                            </Link>
                                                        </h3>
                                                        <p>
                                                            Giá: <span>{numberWithCommas(product.price)}₫</span>
                                                        </p>
                                                    </div>
                                                    <div className="select-item-qty-mobile">
                                                        <div className="txt_center">
                                                            <input
                                                                className="variantID"
                                                                type="hidden"
                                                                name="variantId"
                                                                value="20924464"
                                                                onChange={(e) => e}
                                                            />
                                                            <button
                                                                onClick={(e) => handle(e, "decrease", product)}
                                                                className="reduced items-count btn-minus"
                                                                type="button"
                                                            >
                                                                –
                                                            </button>
                                                            <input
                                                                className="input-text number-sidebar qtyMobile20924464"
                                                                name="Lines"
                                                                size="4"
                                                                value={product.quantity}
                                                                onChange={(e) => e}
                                                            />
                                                            <button
                                                                onClick={(e) => handle(e, "increase", product)}
                                                                className="increase items-count btn-plus"
                                                                type="button"
                                                            >
                                                                +
                                                            </button>
                                                        </div>
                                                        <a
                                                            className="button remove-item remove-item-cart"
                                                            onClick={(e) => handle(e, "remove-item", product)}
                                                        >
                                                            Xoá
                                                        </a>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                    <div className="header-cart-price">
                                        <div className="title-cart">
                                            <h3 className="text-xs-left">Tổng tiền</h3>
                                            <Link href="">
                                                <a className="text-xs-right pull-right totals_price_mobile">{numberWithCommas(cart.total)}₫</a>
                                            </Link>
                                        </div>
                                        <div className="checkout">
                                            <Link title="Tiến hành thanh toán" type="button" href="/checkout">
                                                <a className="btn-proceed-checkout-mobile">
                                                    <span>Tiến hành thanh toán</span>
                                                </a>
                                            </Link>
                                            <Link title="Tiếp tục mua hàng" type="button" href="/products">
                                                <a className="btn btn-white f-left">
                                                    <span>Tiếp tục mua hàng</span>
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
            </section>
        </DefaultLayout>
    );
};

export default Cart;
