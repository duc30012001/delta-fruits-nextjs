import Image from "next/image";
import Link from "next/link";
import numberWithCommas from "../../helper/numberWithCommas";

const CheckoutSidebar = ({ products, total }) => {
    return (
        <>
            <aside className="sidebar">
                <div className="sidebar__header">
                    <h2 className="sidebar__title">Đơn hàng ({products.length} sản phẩm)</h2>
                </div>
                <div className="sidebar__content">
                    <div id="order-summary" className="order-summary order-summary--is-collapsed">
                        <div className="order-summary__sections">
                            <div className="order-summary__section order-summary__section--product-list order-summary__section--is-scrollable order-summary--collapse-element">
                                <table className="product-table">
                                    <caption className="visually-hidden">Chi tiết đơn hàng</caption>
                                    <thead className="product-table__header">
                                        <tr>
                                            <th>
                                                <span className="visually-hidden">Ảnh sản phẩm</span>
                                            </th>
                                            <th>
                                                <span className="visually-hidden">Mô tả</span>
                                            </th>
                                            <th>
                                                <span className="visually-hidden">Sổ lượng</span>
                                            </th>
                                            <th>
                                                <span className="visually-hidden">Đơn giá</span>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {products.map((product, index) => (
                                            <tr key={index} className="product">
                                                <td className="product__image">
                                                    <div className="product-thumbnail">
                                                        <div className="product-thumbnail__wrapper">
                                                            <Image src={product.image} alt="" className="product-thumbnail__image" />
                                                        </div>
                                                        <span className="product-thumbnail__quantity">{product.quantity}</span>
                                                    </div>
                                                </td>
                                                <th className="product__description">
                                                    <span className="product__description__name">{product.name}</span>
                                                </th>
                                                <td className="product__quantity visually-hidden">
                                                    <em>Số lượng:</em> {product.quantity}
                                                </td>
                                                <td className="product__price">{numberWithCommas(product.price * product.quantity)}₫</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <div className="order-summary__section order-summary__section--discount-code" id="discountCode">
                                <h3 className="visually-hidden">Mã khuyến mại</h3>
                                <div className="edit_checkout animate-floating-labels">
                                    <div className="fieldset">
                                        <div className="field  ">
                                            <div className="field__input-btn-wrapper">
                                                <div className="field__input-wrapper">
                                                    <label htmlFor="reductionCode" className="field__label">
                                                        Nhập mã giảm giá
                                                    </label>
                                                    <input name="reductionCode" id="reductionCode" type="text" className="field__input" />
                                                </div>
                                                <button className="field__input-btn btn spinner btn--disabled" type="button" disabled="">
                                                    <span className="spinner-label">Áp dụng</span>
                                                </button>
                                            </div>

                                            <p className="field__message field__message--error field__message--error-always-show hide">
                                                Có lỗi xảy ra khi áp dụng khuyến mãi. Vui lòng thử lại
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="order-summary__section order-summary__section--total-lines order-summary--collapse-element"
                                id="orderSummary"
                            >
                                <table className="total-line-table">
                                    <caption className="visually-hidden">Tổng giá trị</caption>
                                    <thead>
                                        <tr>
                                            <td>
                                                <span className="visually-hidden">Mô tả</span>
                                            </td>
                                            <td>
                                                <span className="visually-hidden">Giá tiền</span>
                                            </td>
                                        </tr>
                                    </thead>
                                    <tbody className="total-line-table__tbody">
                                        <tr className="total-line total-line--subtotal">
                                            <th className="total-line__name">Tạm tính</th>
                                            <td className="total-line__price">{numberWithCommas(total)}₫</td>
                                        </tr>

                                        <tr className="total-line total-line--shipping-fee">
                                            <th className="total-line__name">Phí vận chuyển</th>
                                            <td className="total-line__price">-</td>
                                        </tr>
                                    </tbody>
                                    <tfoot className="total-line-table__footer">
                                        <tr className="total-line payment-due">
                                            <th className="total-line__name">
                                                <span className="payment-due__label-total">Tổng cộng</span>
                                            </th>
                                            <td className="total-line__price">
                                                <span className="payment-due__price">{numberWithCommas(total)}₫</span>
                                            </td>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                            <div className="order-summary__nav field__input-btn-wrapper hide-on-mobile layout-flex--row-reverse">
                                <button type="submit" className="btn btn-checkout spinner">
                                    <span className="spinner-label">ĐẶT HÀNG</span>
                                </button>

                                <Link href="/cart">
                                    <a className="previous-link">
                                        <i className="previous-link__arrow">{"< "}</i>
                                        <span className="previous-link__content">Quay về giỏ hàng</span>
                                    </a>
                                </Link>
                            </div>
                            <div id="common-alert-sidebar">
                                <div className="alert alert--danger hide-on-mobile hide">Có lỗi xảy ra khi xử lý. Vui lòng thử lại</div>
                            </div>
                        </div>
                    </div>
                </div>
            </aside>
        </>
    );
};

export default CheckoutSidebar;
