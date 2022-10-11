import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Link from "next/link";

// Import components
import CheckoutForm from "../../components/checkout-form/CheckoutForm";
import CheckoutSidebar from "../../components/checkout-sidebar/CheckoutSidebar";

// Import icons
import { FaAngleDown } from "react-icons/fa";

// Import helper
import numberWithCommas from "../../helper/numberWithCommas";
import { handleGetCart } from "../../helper/handleCart";
import { useRouter } from "next/router";

const Checkout = () => {
    const products = useSelector((state) => state.products.value);
    const listItems = useSelector((state) => state.cartItems.value);

    const [cart, setCart] = useState({
        total: 0,
        cartItems: [],
    });

    useEffect(() => {
        const { total, cartItems } = handleGetCart(listItems, products);
        setCart({ total, cartItems });
    }, [listItems, products]);

    // Go to top
    const router = useRouter();
    useEffect(() => {
        window.scroll({ top: 0 });
    }, [router.pathname]);

    return (
        <div id="checkout">
            <header className="banner">
                <div className="wrap">
                    <div className="logo logo--left ">
                        <h1 className="shop__name">
                            <Link href="/">Delta Fruits</Link>
                        </h1>
                    </div>
                </div>
            </header>
            <aside>
                <button className="order-summary-toggle toggled">
                    <span className="wrap">
                        <span className="order-summary-toggle__inner">
                            <span className="order-summary-toggle__text expandable">
                                Đơn hàng ({cart.cartItems.length} sản phẩm) <FaAngleDown />
                            </span>
                            <span className="order-summary-toggle__total-recap">{numberWithCommas(cart.total)}₫</span>
                        </span>
                    </span>
                </button>
            </aside>
            <div id="checkout" className="content">
                <form id="checkoutForm">
                    <input type="hidden" name="_method" value="patch" onChange={(e) => e} />
                    <div className="wrap">
                        <CheckoutForm />
                        <CheckoutSidebar total={cart.total} products={cart.cartItems} />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Checkout;
