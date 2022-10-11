import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSelector } from "react-redux";

// Import icons
import { FaRegUserCircle, FaSearch, FaChevronDown, FaChevronRight } from "react-icons/fa";

// Import images
import bars from "../../static/images/header/i_menubar.png";
import bag from "../../static/images/header/bag.png";
// import logo from "../../static/images/logo.png";
import HeaderCartList from "../header-cart-list/HeaderCartList";
import { useRouter } from "next/router";

const Header = ({ setTitle, paths, logo, title }) => {
    const router = useRouter();
    const [searchValue, setSearchValue] = useState("");
    const [open, setOpen] = useState({
        bars: false,
        products: false,
        otherProducts: false,
    });

    // console.log(router);

    const pathname = router.asPath.split("/")[1] ? router.asPath.split("/")[1] : "/";
    const indexPathname = paths.findIndex((path) => path.url.includes(pathname));

    const list = useSelector((state) => state.cartItems.value);
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const title = indexPathname !== -1 ? paths[indexPathname].name : "Delta Fruits";
        if (setTitle) setTitle(title);
        document.title = title;
        setCartItems([...list]);
    }, [indexPathname, paths, setTitle, list]);

    const handleOpen = (key) => {
        setOpen((prev) => {
            let temp = { ...prev };
            temp[key] = !temp[key];
            return temp;
        });
    };

    // console.log(cartItems);

    return (
        <>
            {/* -------------------------- */}
            <div onClick={() => handleOpen("bars")} className={open.bars ? "hidden-lg opacity_menu open_opacity" : "hidden-lg opacity_menu"}></div>

            {/* <!-- Main content --> */}
            <div className="htop section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 hidden-sm hidden-xs detop">
                            <p>{title}</p>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <div className="accoutlink a-right">
                                <div className="searchbox">
                                    <form className="input-group search-bar">
                                        <input
                                            type="text"
                                            name="query"
                                            value={searchValue}
                                            required=""
                                            autoComplete="off"
                                            placeholder="Gõ tìm kiếm..."
                                            className="input-group-field auto-search"
                                            onChange={(e) => setSearchValue(e.target.value)}
                                        />
                                        <div className="input-group-btn">
                                            <button type="submit" className="btn icon-fallback-text">
                                                <i className="fa-solid fa-magnifying-glass">
                                                    <FaSearch />
                                                </i>
                                            </button>
                                        </div>
                                    </form>
                                </div>
                                <div className="title_log">
                                    <span>
                                        <i className="fa-regular fa-circle-user">
                                            <FaRegUserCircle />
                                        </i>
                                        &nbsp;Tài khoản
                                    </span>
                                    <div className="achover">
                                        <Link state={{ name: "Đăng nhập" }} href="/login">
                                            <a className="btns">Đăng nhập</a>
                                        </Link>
                                        <Link state={{ name: "Đăng ký" }} href="/register">
                                            <a>Đăng ký</a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* -- Header ----- */}
            <header className="header">
                <div className="mid-header wid_100">
                    <div className="container">
                        <div className="row">
                            <div className="content_header">
                                <div className="header-main">
                                    <div className="menu-bar-h nav-mobile-button hidden-lg" onClick={() => handleOpen("bars")}>
                                        <Link href="#">
                                            <a>
                                                <Image className="lazyload" src={bars} alt="icon menu" />
                                            </a>
                                        </Link>
                                    </div>
                                    <div className="col-lg-3 logo-main">
                                        <div className="logo">
                                            <Link href="/">
                                                <a className="logo-wrapper">
                                                    <Image className="lazyload loaded" src={logo} alt="logo Delta Fruits" height={80} width={170} />
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col-lg-7 col-md-7 hidden-xs hidden-sm hidden-md padding-0">
                                        <div className="header-left">
                                            <div className="bg-header-nav hidden-xs hidden-sm">
                                                <div>
                                                    <div className="row row-noGutter-2">
                                                        <nav className="header-nav">
                                                            <ul className="item_big">
                                                                {paths.map((path, index) => {
                                                                    return (
                                                                        <li
                                                                            key={index}
                                                                            className={indexPathname + 1 === path.id ? "nav-item active" : "nav-item"}
                                                                        >
                                                                            <Link
                                                                                className="a-Image"
                                                                                href={path.url}
                                                                                state={{
                                                                                    id: path.id,
                                                                                    name: path.name,
                                                                                }}
                                                                            >
                                                                                <a>
                                                                                    <span>{path.name}</span>
                                                                                    {path.children.length ? <FaChevronDown /> : ""}
                                                                                </a>
                                                                            </Link>
                                                                            {path.children.length ? (
                                                                                <ul className="item_small hidden-sm hidden-xs">
                                                                                    {path.children.map((pathLv1, id) => {
                                                                                        return (
                                                                                            <li key={id}>
                                                                                                <Link
                                                                                                    state={{
                                                                                                        id: pathLv1.id,
                                                                                                        name: pathLv1.name,
                                                                                                    }}
                                                                                                    href={pathLv1.url}
                                                                                                    title={pathLv1.name}
                                                                                                >
                                                                                                    <a>
                                                                                                        {pathLv1.name}
                                                                                                        {pathLv1.children.length ? (
                                                                                                            <i className="fa-solid fa-angle-right">
                                                                                                                <FaChevronRight />
                                                                                                            </i>
                                                                                                        ) : (
                                                                                                            ""
                                                                                                        )}
                                                                                                    </a>
                                                                                                </Link>
                                                                                                {pathLv1.children.length ? (
                                                                                                    <ul>
                                                                                                        {pathLv1.children.map((pathLv2, idx) => {
                                                                                                            return (
                                                                                                                <li key={idx}>
                                                                                                                    <Link
                                                                                                                        state={{
                                                                                                                            id: pathLv2.id,
                                                                                                                            name: pathLv2.name,
                                                                                                                        }}
                                                                                                                        href={pathLv2.url}
                                                                                                                        title=""
                                                                                                                    >
                                                                                                                        <a>{pathLv2.name}</a>
                                                                                                                    </Link>
                                                                                                                </li>
                                                                                                            );
                                                                                                        })}
                                                                                                    </ul>
                                                                                                ) : (
                                                                                                    ""
                                                                                                )}
                                                                                            </li>
                                                                                        );
                                                                                    })}
                                                                                </ul>
                                                                            ) : (
                                                                                ""
                                                                            )}
                                                                        </li>
                                                                    );
                                                                })}
                                                            </ul>
                                                        </nav>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-md-3 col-xs-12 no-padding-left cartright">
                                        <div className="header-right">
                                            <div className="top-cart-contain f-right">
                                                <div className="mini-cart text-xs-center">
                                                    <div className="heading-cart cart_header">
                                                        <Link
                                                            state={{
                                                                id: "cart",
                                                                name: "Giỏ hàng",
                                                            }}
                                                            className="img_hover_cart"
                                                            href="/cart"
                                                            title="Giỏ hàng"
                                                        >
                                                            <div className="icon_hotline">
                                                                <Image
                                                                    className="lazyload loaded"
                                                                    src={bag}
                                                                    alt="Delta Fruits"
                                                                    width="40"
                                                                    height="38.75"
                                                                ></Image>
                                                            </div>
                                                        </Link>
                                                        <div className="content_cart_header hidden-xs">
                                                            <Link
                                                                state={{
                                                                    id: "cart",
                                                                    name: "Giỏ hàng",
                                                                }}
                                                                href="/cart"
                                                                title="Giỏ hàng"
                                                            >
                                                                <a className="bg_cart">
                                                                    <span className="text-giohang">Giỏ hàng:</span>
                                                                    <strong>
                                                                        (<span className="count_item count_item_pr">{cartItems.length}</span>)
                                                                    </strong>{" "}
                                                                    Sản phẩm
                                                                </a>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    <div className="top-cart-content">
                                                        {cartItems.length === 0 ? (
                                                            <ul id="cart-sidebar" className="mini-products-list count_li">
                                                                <div className="no-item">
                                                                    <p>Không có sản phẩm nào.</p>
                                                                </div>
                                                            </ul>
                                                        ) : (
                                                            <HeaderCartList />
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="top-cart-contain f-right hidden">
                                                <div className="mini-cart text-xs-center">
                                                    <div className="heading-cart">
                                                        <Link className="bg_cart" href="/cart" title="Giỏ hàng">
                                                            <a>
                                                                <i className="ion-android-cart"></i>
                                                                <span className="count_item count_item_pr">1</span>
                                                            </a>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* <!-- Menu mobile --> */}
            <div
                className={open.bars ? "menu_mobile sidenav max_991 hidden-lg open_sidebar_menu" : "menu_mobile sidenav max_991 hidden-lg"}
                id="mySidenav"
            >
                <ul className="ul_collections">
                    <li className="special">
                        <Link href="/products">
                            <a>Tất cả danh mục</a>
                        </Link>
                    </li>
                    {paths.map((path, index) => (
                        <li
                            key={index}
                            className={open.products && path.children.length ? "level0 level-top parent current" : "level0 level-top parent"}
                        >
                            <Link href={path.url}>{path.name}</Link>
                            {path.children.length ? (
                                <>
                                    <i className="fa-solid fa-angle-down" onClick={() => handleOpen("products")}>
                                        <FaChevronDown />
                                    </i>
                                    <ul className="level0" style={open.products ? { display: "block" } : { display: "none" }}>
                                        {path.children.map((pathLv1, id) => (
                                            <li key={id} className={open.otherProducts && pathLv1.children.length ? "level1 current" : "level1"}>
                                                <Link href={pathLv1.url}>
                                                    <a>
                                                        <span>{pathLv1.name}</span>
                                                    </a>
                                                </Link>

                                                {pathLv1.children.length ? (
                                                    <>
                                                        <i className="fa-solid fa-angle-down" onClick={() => handleOpen("otherProducts")}>
                                                            <FaChevronDown />
                                                        </i>
                                                        <ul
                                                            className="level1"
                                                            style={
                                                                open.otherProducts
                                                                    ? {
                                                                          display: "block",
                                                                      }
                                                                    : {
                                                                          display: "none",
                                                                      }
                                                            }
                                                        >
                                                            {pathLv1.children.map((pathLv2, id) => (
                                                                <li key={id} className="level2">
                                                                    <Link href={pathLv2.url}>
                                                                        <a>
                                                                            <span>{pathLv2.name}</span>
                                                                        </a>
                                                                    </Link>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </>
                                                ) : (
                                                    ""
                                                )}
                                            </li>
                                        ))}
                                    </ul>
                                </>
                            ) : (
                                ""
                            )}
                        </li>
                    ))}
                </ul>
            </div>
            {/* <!-- End --> */}
        </>
    );
};

export default Header;
