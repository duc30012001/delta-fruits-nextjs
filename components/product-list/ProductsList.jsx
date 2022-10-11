import ReactPaginate from "react-paginate";
import { useEffect, useRef, useState } from "react";

import ProductCard from "../product-card/ProductCard";

import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const ProductsList = ({ products, colXs, colSm, colMd, colLg, query, perPage }) => {
    const listRef = useRef();
    // console.log(listRef.current.offsetTop);

    // Handle Pagination
    const [currentPage, setCurrentPage] = useState(0);
    const [pageCount, setPageCount] = useState(0);
    const [productsData, setProductsData] = useState([]);

    const handlePageClick = (e) => {
        setCurrentPage(e.selected);
        window.scroll({ top: listRef.current.offsetTop - 100 });
    };

    useEffect(() => {
        setPageCount(Math.ceil(products.length / perPage));
        const temp = products.slice(perPage * currentPage, perPage * (currentPage + 1));
        setProductsData([...temp]);
    }, [currentPage, perPage, products]);

    return (
        <>
            <section className="products-view products-view-grid collection_reponsive list_hover_pro">
                <div ref={listRef} className="row">
                    {productsData.map((product, index) => (
                        <div key={index} className={`col-xs-${colXs} col-sm-${colSm} col-md-${colMd} col-lg-${colLg} product-col`}>
                            <div className="item_product_main margin-bottom-20 item_product_main_relative">
                                <ProductCard query={query} product={product} />
                            </div>
                        </div>
                    ))}
                </div>
                <div className="row">
                    <div className="col-xs-12 text-center">
                        <ReactPaginate
                            previousLabel={<FaAngleLeft />}
                            nextLabel={<FaAngleRight />}
                            breakLabel={"..."}
                            breakClassName={"break-me"}
                            pageCount={pageCount}
                            marginPagesDisplayed={perPage}
                            pageRangeDisplayed={1}
                            onPageChange={handlePageClick}
                            containerClassName={"pagination"}
                            subContainerClassName={"pages pagination"}
                            activeClassName={"active-page"}
                        />
                    </div>
                </div>
            </section>
        </>
    );
};

export default ProductsList;
