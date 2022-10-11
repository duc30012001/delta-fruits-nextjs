import React from "react";
import Link from "next/link";

const CheckoutForm = () => {
    return (
        <>
            <main className="main">
                <header className="main__header">
                    <div className="logo logo--left ">
                        <h1 className="shop__name">
                            <Link href="/">
                                <a>Delta Fruits</a>
                            </Link>
                        </h1>
                    </div>
                </header>
                <div className="main__content">
                    <article className="animate-floating-labels row">
                        <div className="col col--two">
                            <section className="section">
                                <div className="section__header">
                                    <div className="layout-flex">
                                        <h2 className="section__title layout-flex__item layout-flex__item--stretch">
                                            <i className="fa fa-id-card-o fa-lg section__title--icon hide-on-desktop"></i>
                                            Thông tin nhận hàng
                                        </h2>

                                        <Link href="/login">
                                            <a>
                                                <i className="fa fa-user-circle-o fa-lg"></i>
                                                <span>Đăng nhập </span>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                                <div className="section__content">
                                    <div className="fieldset">
                                        <div className="field ">
                                            <div className="field__input-wrapper">
                                                <label htmlFor="email" className="field__label">
                                                    Email
                                                </label>
                                                <input name="email" id="email" type="email" className="field__input" value="" onChange={(e) => e} />
                                            </div>
                                        </div>

                                        <div className="field ">
                                            <div className="field__input-wrapper">
                                                <label htmlFor="billingName" className="field__label">
                                                    Họ và tên
                                                </label>
                                                <input
                                                    name="billingName"
                                                    id="billingName"
                                                    type="text"
                                                    className="field__input"
                                                    value=""
                                                    onChange={(e) => e}
                                                />
                                            </div>
                                        </div>

                                        <div className="field ">
                                            <div className="field__input-wrapper">
                                                <label htmlFor="billingPhone" className="field__label">
                                                    Số điện thoại (tùy chọn)
                                                </label>
                                                <input
                                                    name="billingPhone"
                                                    id="billingPhone"
                                                    type="tel"
                                                    className="field__input"
                                                    value=""
                                                    onChange={(e) => e}
                                                />
                                            </div>
                                        </div>

                                        <div className="field ">
                                            <div className="field__input-wrapper">
                                                <label htmlFor="billingAddress" className="field__label">
                                                    Địa chỉ (tùy chọn)
                                                </label>
                                                <input
                                                    name="billingAddress"
                                                    id="billingAddress"
                                                    type="text"
                                                    className="field__input"
                                                    value=""
                                                    onChange={(e) => e}
                                                />
                                            </div>
                                        </div>

                                        <div className="field field--show-floating-label ">
                                            <div className="field__input-wrapper field__input-wrapper--select2">
                                                <label htmlFor="billingProvince" className="field__label">
                                                    Tỉnh thành
                                                </label>
                                                <select
                                                    name="billingProvince"
                                                    id="billingProvince"
                                                    size="1"
                                                    type="text"
                                                    className="field__input field__input--select select2-hidden-accessible"
                                                >
                                                    <option value="" hidden="" data-select2-id="select2-data-3-qcjj">
                                                        ---
                                                    </option>
                                                    <option value="1">Hà Nội</option>
                                                    <option value="2">TP Hồ Chí Minh</option>
                                                    <option value="3">An Giang</option>
                                                    <option value="4">Bà Rịa-Vũng Tàu</option>
                                                    <option value="5">Bắc Giang</option>
                                                    <option value="6">Bắc Kạn</option>
                                                    <option value="7">Bạc Liêu</option>
                                                    <option value="8">Bắc Ninh</option>
                                                    <option value="9">Bến Tre</option>
                                                    <option value="10">Bình Dương</option>
                                                    <option value="11">Bình Định</option>
                                                    <option value="12">Bình Phước</option>
                                                    <option value="13">Bình Thuận</option>
                                                    <option value="14">Cà Mau</option>
                                                    <option value="15">Cao Bằng</option>
                                                    <option value="16">Cần Thơ</option>
                                                    <option value="17">Đà Nẵng</option>
                                                    <option value="18">Đắk Lắk</option>
                                                    <option value="19">Đắk Nông</option>
                                                    <option value="20">Điện Biên</option>
                                                    <option value="21">Đồng Nai</option>
                                                    <option value="22">Đồng Tháp</option>
                                                    <option value="23">Gia Lai</option>
                                                    <option value="24">Hà Giang</option>
                                                    <option value="25">Hà Nam</option>
                                                    <option value="26">Hà Tĩnh</option>
                                                    <option value="27">Hải Dương</option>
                                                    <option value="28">Hải Phòng</option>
                                                    <option value="29">Hậu Giang</option>
                                                    <option value="30">Hòa Bình</option>
                                                    <option value="31">Hưng Yên</option>
                                                    <option value="32">Khánh Hòa</option>
                                                    <option value="33">Kiên Giang</option>
                                                    <option value="34">Kon Tum</option>
                                                    <option value="35">Lai Châu</option>
                                                    <option value="36">Lâm Đồng</option>
                                                    <option value="37">Lạng Sơn</option>
                                                    <option value="38">Lào Cai</option>
                                                    <option value="39">Long An</option>
                                                    <option value="40">Nam Định</option>
                                                    <option value="41">Nghệ An</option>
                                                    <option value="42">Ninh Bình</option>
                                                    <option value="43">Ninh Thuận</option>
                                                    <option value="44">Phú Thọ</option>
                                                    <option value="45">Phú Yên</option>
                                                    <option value="46">Quảng Bình</option>
                                                    <option value="47">Quảng Nam</option>
                                                    <option value="48">Quảng Ngãi</option>
                                                    <option value="49">Quảng Ninh</option>
                                                    <option value="50">Quảng Trị</option>
                                                    <option value="51">Sóc Trăng</option>
                                                    <option value="52">Sơn La</option>
                                                    <option value="53">Tây Ninh</option>
                                                    <option value="54">Thái Bình</option>
                                                    <option value="55">Thái Nguyên</option>
                                                    <option value="56">Thanh Hóa</option>
                                                    <option value="57">Thừa Thiên Huế</option>
                                                    <option value="58">Tiền Giang</option>
                                                    <option value="59">Trà Vinh</option>
                                                    <option value="60">Tuyên Quang</option>
                                                    <option value="61">Vĩnh Long</option>
                                                    <option value="62">Vĩnh Phúc</option>
                                                    <option value="63">Yên Bái</option>
                                                </select>
                                                <span
                                                    className="select2 select2-container select2-container--default"
                                                    dir="ltr"
                                                    data-select2-id="select2-data-1-30z7"
                                                    style={{
                                                        width: "100%",
                                                    }}
                                                >
                                                    <span className="selection">
                                                        <span className="select2-selection select2-selection--single">
                                                            <span
                                                                className="select2-selection__rendered"
                                                                id="select2-billingProvince-container"
                                                                title="---"
                                                            >
                                                                ---
                                                            </span>
                                                            <span className="select2-selection__arrow" role="presentation">
                                                                <b role="presentation"></b>
                                                            </span>
                                                        </span>
                                                    </span>
                                                    <span className="dropdown-wrapper" aria-hidden="true"></span>
                                                </span>
                                                <span
                                                    className="select2 select2-container select2-container--default"
                                                    dir="ltr"
                                                    data-select2-id="select2-data-1-o8rx"
                                                    style={{
                                                        width: "100%",
                                                    }}
                                                >
                                                    <span className="selection">
                                                        <span className="select2-selection select2-selection--single">
                                                            <span
                                                                className="select2-selection__rendered"
                                                                id="select2-billingProvince-container"
                                                                title="---"
                                                            >
                                                                ---
                                                            </span>
                                                            <span className="select2-selection__arrow" role="presentation">
                                                                <b></b>
                                                            </span>
                                                        </span>
                                                    </span>
                                                    <span className="dropdown-wrapper" aria-hidden="true"></span>
                                                </span>
                                            </div>
                                        </div>

                                        <div className="field field--show-floating-label ">
                                            <div className="field__input-wrapper field__input-wrapper--select2">
                                                <label htmlFor="billingDistrict" className="field__label">
                                                    Quận huyện (tùy chọn)
                                                </label>
                                                <select
                                                    name="billingDistrict"
                                                    id="billingDistrict"
                                                    size="1"
                                                    type="text"
                                                    className="field__input field__input--select select2-hidden-accessible"
                                                    value=""
                                                    disabled=""
                                                    onChange={(e) => e}
                                                ></select>
                                                <span
                                                    className="select2 select2-container select2-container--default select2-container--disabled select2-container--focus"
                                                    dir="ltr"
                                                    data-select2-id="select2-data-2-euq0"
                                                    style={{
                                                        width: "100%",
                                                    }}
                                                >
                                                    <span className="selection">
                                                        <span
                                                            className="select2-selection select2-selection--single"
                                                            role="combobox"
                                                            aria-haspopup="true"
                                                            aria-expanded="false"
                                                            tabIndex="-1"
                                                            aria-disabled="true"
                                                            aria-labelledby="select2-billingDistrict-container"
                                                        >
                                                            <span
                                                                className="select2-selection__rendered"
                                                                id="select2-billingDistrict-container"
                                                                role="textbox"
                                                                aria-readonly="true"
                                                            ></span>
                                                            <span className="select2-selection__arrow" role="presentation">
                                                                <b role="presentation"></b>
                                                            </span>
                                                        </span>
                                                    </span>
                                                    <span className="dropdown-wrapper" aria-hidden="true"></span>
                                                </span>
                                                <span
                                                    className="select2 select2-container select2-container--default select2-container--disabled"
                                                    dir="ltr"
                                                    data-select2-id="select2-data-2-j0sc"
                                                    style={{
                                                        width: "100%",
                                                    }}
                                                >
                                                    <span className="selection">
                                                        <span
                                                            className="select2-selection select2-selection--single"
                                                            role="combobox"
                                                            aria-haspopup="true"
                                                            aria-expanded="false"
                                                            tabIndex="-1"
                                                            aria-disabled="true"
                                                            aria-labelledby="select2-billingDistrict-container"
                                                        >
                                                            <span
                                                                className="select2-selection__rendered"
                                                                id="select2-billingDistrict-container"
                                                                role="textbox"
                                                                aria-readonly="true"
                                                            ></span>
                                                            <span className="select2-selection__arrow" role="presentation">
                                                                <b role="presentation"></b>
                                                            </span>
                                                        </span>
                                                    </span>
                                                    <span className="dropdown-wrapper" aria-hidden="true"></span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <div className="fieldset">
                                <h3 className="visually-hidden">Ghi chú</h3>
                                <div className="field ">
                                    <div className="field__input-wrapper">
                                        <label htmlFor="note" className="field__label">
                                            Ghi chú (tùy chọn)
                                        </label>
                                        <textarea name="note" id="note" type="text" className="field__input" data-bind="note"></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col col--two">
                            <section className="section" data-define="{shippingMethod: ''}">
                                <div className="section__header">
                                    <div className="layout-flex">
                                        <h2 className="section__title layout-flex__item layout-flex__item--stretch">
                                            <i className="fa fa-truck fa-lg section__title--icon hide-on-desktop"></i>
                                            Vận chuyển
                                        </h2>
                                    </div>
                                </div>
                                <div
                                    className="section__content"
                                    data-tg-refresh="refreshShipping"
                                    id="shippingMethodList"
                                    data-define="{isAddressSelecting: true, shippingMethods: []}"
                                >
                                    <div className="alert alert--loader spinner spinner--active hide">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="spinner-loader">
                                            <use href="#spinner"></use>
                                        </svg>
                                    </div>

                                    <div className="alert alert-retry alert--danger hide">
                                        <span data-bind="loadingShippingErrorMessage">Không thể load phí vận chuyển. Vui lòng thử lại</span>{" "}
                                        <i className="fa fa-refresh"></i>
                                    </div>

                                    <div className="alert alert--info">Vui lòng nhập thông tin giao hàng</div>
                                </div>
                            </section>

                            <section className="section">
                                <div className="section__header">
                                    <div className="layout-flex">
                                        <h2 className="section__title layout-flex__item layout-flex__item--stretch">
                                            <i className="fa fa-credit-card fa-lg section__title--icon hide-on-desktop"></i>
                                            Thanh toán
                                        </h2>
                                    </div>
                                </div>
                                <div className="section__content">
                                    <div className="content-box" data-define="{paymentMethod: undefined}">
                                        <div className="content-box__row">
                                            <div className="radio-wrapper">
                                                <div className="radio__input">
                                                    <input name="paymentMethod" id="paymentMethod-396549" type="radio" className="input-radio" />
                                                </div>
                                                <label htmlFor="paymentMethod-396549" className="radio__label">
                                                    <span className="radio__label__primary">Thanh toán khi giao hàng (COD)</span>
                                                    <span className="radio__label__accessory">
                                                        <span className="radio__label__icon">
                                                            <i className="payment-icon payment-icon--4"></i>
                                                        </span>
                                                    </span>
                                                </label>
                                            </div>

                                            <div className="content-box__row__desc hide">
                                                <p>Bạn chỉ phải thanh toán khi nhận được hàng</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </article>
                    <div className="field__input-btn-wrapper field__input-btn-wrapper--vertical hide-on-desktop">
                        <button type="submit" className="btn btn-checkout spinner">
                            <span className="spinner-label">ĐẶT HÀNG</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="spinner-loader">
                                <use href="#spinner"></use>
                            </svg>
                        </button>

                        <Link href="/cart">
                            <a className="previous-link">
                                <i className="previous-link__arrow">❮</i>
                                <span className="previous-link__content">Quay về giỏ hàng</span>
                            </a>
                        </Link>
                    </div>

                    <div id="common-alert" data-tg-refresh="refreshError">
                        <div className="alert alert--danger hide-on-desktop hide">Có lỗi xảy ra khi xử lý. Vui lòng thử lại</div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default CheckoutForm;
