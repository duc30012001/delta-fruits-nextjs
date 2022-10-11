import React, { useState } from "react";
import Link from "next/link";

// import icons
import { FaAngleRight } from "react-icons/fa";

const Catalog = ({ paths, title }) => {
    const [openMenu, setOpenMenu] = useState(false);

    const handleOpen = () => {
        setOpenMenu(!openMenu);
    };

    const productCatalog = paths.filter((item) => item.name === "Sản phẩm")[0];
    // console.log(productCatalog);

    return (
        <div>
            <aside className="aside-item sidebar-category collection-category">
                <div className="aside-title">
                    <h2 className="title-head margin-top-0 margin-bottom-10">
                        <span>{title}</span>
                    </h2>
                </div>
                <div className="aside-content">
                    <nav className="nav-category navbar-toggleable-md">
                        <ul className="nav navbar-pills">
                            <li className="nav-item lv1">
                                <Link href={productCatalog.url}>
                                    <a className="nav-link">{productCatalog.name}</a>
                                </Link>
                            </li>
                            {productCatalog.children.map((path, index) => (
                                <li key={index} className={`nav-item lv1 ${path.children.length && openMenu ? "active" : ""}`}>
                                    <Link href={path.url}>
                                        <a className="nav-link">{path.name}</a>
                                    </Link>
                                    {path.children.length ? (
                                        <>
                                            <i onClick={handleOpen} className="fa-solid fa-angle-right">
                                                <FaAngleRight />
                                            </i>
                                            <ul className="dropdown-menu">
                                                {path.children.map((pathLv1, idx) => (
                                                    <li key={idx} className={`dropdown-submenu nav-item lv2 `}>
                                                        <Link href={pathLv1.url}>
                                                            <a className="nav-link">{pathLv1.name}</a>
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
                    </nav>
                </div>
            </aside>
        </div>
    );
};

export default Catalog;
