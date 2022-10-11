import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import ReactPaginate from "react-paginate";

import Link from "next/link";
import Image from "next/image";

// Import icon
import { FaComment } from "react-icons/fa";

// Import components
import DefaultLayout from "../../layout/DefaultLayout";
import NewsSidebar from "../../components/news-sidebar/NewsSidebar";

const News = () => {
    // Get data from redux
    const dataMenu = useSelector((state) => state.dataMenu.value);
    const news = useSelector((state) => state.news.value);

    const newsRef = useRef();
    console.log(newsRef);

    // Pagination
    const [data, setData] = useState([...news.articles]);
    const [perPage, setPerPage] = useState(2);
    const [currentPage, setCurrentPage] = useState(0);
    const [pageCount, setPageCount] = useState(0);
    const [postData, setPostData] = useState([]);

    const handlePageClick = (e) => {
        setCurrentPage(e.selected);
        window.scroll({ top: 350 });
    };

    useEffect(() => {
        // setData([...news.articles])
        setPageCount(Math.ceil(data.length / perPage));
        const temp = data.slice(perPage * currentPage, perPage * (currentPage + 1));
        setPostData([...temp]);
        // console.log("hello", currentPage);
    }, [currentPage, data, perPage]);

    return (
        <>
            <DefaultLayout>
                <div className="content_all f-left w_100 margin-top-20">
                    <div className="right-content margin-bottom-fix margin-bottom-50-article col-lg-9 col-md-9 col-sm-12 col-xs-12 col-lg-push-3 col-md-push-3">
                        <div className="list-blogs blog-main">
                            <div ref={newsRef} className="row">
                                {postData.map((item, index) => (
                                    <div key={index} className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                        <div className="myblog">
                                            <div className="blog_item">
                                                <div className="left_item">
                                                    <div className="image-blog-left">
                                                        <Link href={item.path}>
                                                            <a>
                                                                <Image className="lazyload loaded" src={item.image} alt={item.title} />
                                                            </a>
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="right_item">
                                                    <div className="content_blog">
                                                        <div className="content_right">
                                                            <span className="time_post">
                                                                Đăng bởi:
                                                                <span className="name_">{item.author}</span>
                                                                &nbsp; | &nbsp;
                                                                <span>
                                                                    <i className="fa-solid fa-comment">
                                                                        <FaComment />
                                                                    </i>
                                                                    &nbsp;1
                                                                </span>
                                                            </span>
                                                            <h3>
                                                                <Link href={item.path} title={item.title}>
                                                                    <a>{item.title}</a>
                                                                </Link>
                                                            </h3>
                                                        </div>
                                                        <div className="summary_item_blog">
                                                            <p>{item.des}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="row">
                                <div className="col-xs-12 text-center">
                                    <ReactPaginate
                                        previousLabel={"<"}
                                        nextLabel={">"}
                                        breakLabel={"..."}
                                        breakClassName={"break-me"}
                                        pageCount={pageCount}
                                        marginPagesDisplayed={perPage}
                                        pageRangeDisplayed={2}
                                        onPageChange={handlePageClick}
                                        containerClassName={"pagination"}
                                        subContainerClassName={"pages pagination"}
                                        activeClassName={"active-page"}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <NewsSidebar paths={dataMenu} news={news.articles.slice(0, 4)} />
                </div>
            </DefaultLayout>
        </>
    );
};

export default News;
