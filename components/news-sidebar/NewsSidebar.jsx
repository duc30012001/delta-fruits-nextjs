import Link from "next/link";
import Image from "next/image";

import Catalog from "../catalog/Catalog";

const NewsSidebar = ({ news, paths }) => {
    return (
        <>
            <aside className="left left-content col-md-3 col-lg-3 col-sm-12 col-xs-12 col-lg-pull-9 col-md-pull-9">
                <Catalog paths={paths} title={"Danh mục tin tức"} />

                <div className="blog-aside aside-item blog-aside-article">
                    <div>
                        <div className="aside-title-article">
                            <h2 className="title-head">
                                <span>
                                    <Link href="/news">
                                        <a>Tin liên quan</a>
                                    </Link>
                                </span>
                            </h2>
                        </div>
                        <div className="aside-content-article aside-content">
                            <div className="blog-list blog-image-list">
                                {news.map((item, index) => (
                                    <div key={index} className="loop-blog">
                                        <div className="thumb-left">
                                            <Link href={item.path}>
                                                <a>
                                                    <Image
                                                        className="lazyload"
                                                        src={item.image}
                                                        style={{
                                                            maxWidth: "100%",
                                                        }}
                                                        title={item.title}
                                                        alt={item.title}
                                                    />
                                                </a>
                                            </Link>
                                        </div>
                                        <div className="name-right">
                                            <h3>
                                                <Link href={item.path} title="">
                                                    <a>{item.title}</a>
                                                </Link>
                                            </h3>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </aside>
        </>
    );
};

export default NewsSidebar;
