import { useRouter } from "next/router";
import { useSelector } from "react-redux";

// Import components
import DefaultLayout from "../../layout/DefaultLayout";
import NewDetailContent from "../../components/new-detail-content/NewDetailContent";
import NewsSidebar from "../../components/news-sidebar/NewsSidebar";

const NewDetail = () => {
    // Get data from redux
    const dataMenu = useSelector((state) => state.dataMenu.value);
    const news = useSelector((state) => state.news.value);

    const router = useRouter();
    console.log(router);
    const newItem = news.articles.filter((item) => item.path.includes(router.query.newDetail))[0];

    return (
        <DefaultLayout>
            <div className="container article-wraper">
                <div className="wrap_background_aside padding-top-15 margin-bottom-10">
                    <div className="row">
                        <section className="right-content col-lg-9 col-md-9 col-sm-12 col-xs-12 col-lg-push-3 col-md-push-3">
                            <div className="box-heading relative"></div>
                            <article className="article-main">
                                <div className="row">
                                    <NewDetailContent newItem={newItem} comments={news.comments} />
                                </div>
                            </article>
                        </section>

                        <NewsSidebar paths={dataMenu} news={news.articles} />
                    </div>
                </div>
            </div>
        </DefaultLayout>
    );
};

export default NewDetail;
