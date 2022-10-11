import React, { useState, useEffect } from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import BreadCrumb from "../components/bread-crumb/BreadCrumb";

import { useSelector, useDispatch } from "react-redux";
import { setQuickView } from "../redux/quickViewSlice";

import { information, dataMenu, dataFooter } from "../data/data.js";

import AddToCart from "../components/add-to-cart/AddToCart";
import QuickView from "../components/quick-view/QuickView";
// import { useLocation } from "react-router-dom";
import { useRouter } from "next/router";

const DefaultLayout = (props) => {
    const dispatch = useDispatch();
    const quickView = useSelector((state) => state.quickView.value);
    // console.log(quickView);

    const [title, setTitle] = useState("");
    const handleTitle = (content) => {
        setTitle(content);
    };

    const router = useRouter();
    // console.log(router);

    useEffect(() => {
        window.scroll({ top: 0 });
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
    }, [router.asPath]);

    return (
        <>
            <Header title={information.title} logo={information.logo} setTitle={handleTitle} paths={dataMenu} />
            <BreadCrumb title={title} />

            <div className="container">
                <div className="row">{props.children}</div>
            </div>
            <Footer logo={information.logo} information={information.contact} dataFooter={dataFooter} />

            <QuickView openQuickView={quickView.openQuickView} product={quickView.product} />
            <AddToCart openModal={quickView.openModal} product={quickView.product} />
        </>
    );
};

export default DefaultLayout;
