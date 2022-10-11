import Link from "next/link";
import Image from "next/image";

const NewDetailContent = ({ newItem, comments }) => {
    const commentList = comments.filter((item) => item.newsId === newItem?.id);

    return (
        <>
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="article-details">
                    <h1 className="article-title">
                        <Link href="">
                            <a>{newItem?.title}</a>
                        </Link>
                    </h1>
                    <div className="date">
                        <i className="fa-solid fa-calendar-o"></i>
                        <div className="news_home_content_short_time">{newItem?.date}</div>
                        <div className="post-time">
                            <i className="fa-solid fa-user" aria-hidden="true"></i>
                            Đăng bởi: <span>{newItem?.author}</span>
                        </div>
                    </div>

                    <div className="article-content">
                        <div dangerouslySetInnerHTML={{ __html: newItem?.content }} className="rte"></div>
                    </div>
                </div>
            </div>
            {/* ======================= TAGS =========================== */}
            <div className="col-xs-12 col-md-12 col-sm-12 col-xs-12">
                <div className="row row-noGutter tag-share">
                    <div className="col-xs-12 col-sm-6 tag_article">
                        <b>Tags: </b>
                        {newItem?.tags.map((tag, index) => (
                            <Link key={index} href={tag.url}>
                                <a>{tag.name}</a>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            {/* ================================ COMMENTS =================================== */}
            <div className="col-xs-12">
                <div id="article-comments">
                    <h5 className="title-form-coment margin-bottom-15">Bình luận:</h5>
                    <div className="hidden">{commentList.length} bình luận</div>

                    <div className="article-comment clearfix">
                        {commentList.map((comment, index) => (
                            <div key={index}>
                                <figure className="article-comment-user-image">
                                    <Image src={comment.ava} alt="binh-luan" className="block" />
                                </figure>

                                <div className="article-comment-user-comment">
                                    <p className="user-name-comment">
                                        <strong>{comment.name}</strong>
                                        <Link href="">
                                            <a className="btn-link pull-xs-right hidden">Trả lời</a>
                                        </Link>
                                    </p>
                                    <span className="article-comment-date-bull">{comment.date}</span>
                                    <p>{comment.content}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="text-center"></div>

                <form
                    // accept-charset="utf-8"
                    // action="https://delta-fruits.mysapo.net/posts/meo-chon-dua-hau-ngon-tram-qua-nhu-mot/comments"
                    id="article_comments"
                    // method="post"
                >
                    <input name="FormType" type="hidden" value="article_comments" />
                    <input name="utf8" type="hidden" value="true" />

                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="form-coment">
                            <div className="row">
                                <div className="margin-top-0 margin-bottom-30">
                                    <h5 className="title-form-coment">Viết bình luận của bạn:</h5>
                                </div>
                                <div className="">
                                    <div className="row">
                                        <div className="col-xs-12 col-sm-12 col-md-6">
                                            <fieldset className="form-group">
                                                <input
                                                    placeholder="Họ và tên"
                                                    type="text"
                                                    className="form-control form-control-lg"
                                                    // value=""
                                                    id="full-name"
                                                    name="Author"
                                                    required=""
                                                />
                                            </fieldset>
                                        </div>
                                        <div className="col-xs-12 col-sm-12 col-md-6">
                                            <fieldset className="form-group">
                                                <input
                                                    placeholder="Email"
                                                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,63}$"
                                                    type="email"
                                                    className="form-control form-control-lg"
                                                    // value=""
                                                    name="Email"
                                                    required=""
                                                />
                                            </fieldset>
                                        </div>
                                    </div>
                                </div>
                                <fieldset className="form-group col-xs-12 col-sm-12 col-md-12">
                                    <textarea
                                        placeholder="Viết bình luận"
                                        className="form-control form-control-lg"
                                        id="comment"
                                        name="Body"
                                        rows="6"
                                        required=""
                                    ></textarea>
                                </fieldset>
                                <div className="margin-bottom-fix margin-bottom-50-article clearfix">
                                    <button onClick={(e) => e.preventDefault()} className="btn btn-primary">
                                        Gửi bình luận
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* <!-- End form mail --> */}
                    </div>
                </form>
            </div>
        </>
    );
};

export default NewDetailContent;
