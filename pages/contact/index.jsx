import { useSelector } from "react-redux";

import DefaultLayout from "../../layout/DefaultLayout";
import SocialOptions from "../../components/social-options/SocialOptions";

const Contact = () => {
    const information = useSelector((state) => state.information.value);

    return (
        <DefaultLayout>
            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 col-lg-push-8 col-md-push-8">
                <div className="select_maps section">
                    <div className="aa mid-footer padding-0">
                        <div className="page_cotact">
                            <h1 className="title-head-contact">
                                <span>Thông tin liên hệ</span>
                            </h1>
                            <p className="text_des">{information.contact.description}</p>
                        </div>

                        <div className="social_footer">
                            <SocialOptions social={information.contact.social} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12 col-lg-pull-4 col-md-pull-4">
                <div className="section right_contact">
                    <div className="page-login page_cotact">
                        <h2 className="title-head-contact a-left">
                            <span>Liên hệ với chúng tôi</span>
                        </h2>
                        <p className="text_des" style={{ marginBottom: "40px" }}>
                            Để liên hệ và nhận các thông in khuyến mại sớm nhất, xin vui lòng điền đầy đủ thông tin của bạn vào form dưới đây. Chúng
                            tôi sẽ liên lạc lại với bạn trong thời gian sớm nhất
                        </p>
                        <div id="pagelogin">
                            <form acceptCharset="utf-8" action="/contact" id="contact" method="post">
                                <input name="FormType" type="hidden" defaultValue="contact" />
                                <input name="utf8" type="hidden" defaultValue="true" />
                                <input type="hidden" id="Token-033fa73f309f49f8bf083a0cc84abe25" name="Token" />

                                <div className="form-signup clearfix">
                                    <div className="row group_contact">
                                        <fieldset className="form-group col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                            <input
                                                placeholder="Họ và tên"
                                                type="text"
                                                className="form-control form-control-lg"
                                                required=""
                                                defaultValue=""
                                                name="contact[Name]"
                                            />
                                        </fieldset>
                                        <fieldset className="form-group col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                            <input
                                                placeholder="Số điện thoại"
                                                type="number"
                                                pattern="\d+"
                                                className="form-control form-control-comment form-control-lg"
                                                name="Phone"
                                                required=""
                                            />
                                        </fieldset>
                                        <fieldset className="form-group col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            <input
                                                placeholder="Email"
                                                type="email"
                                                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                                                required=""
                                                id="email1"
                                                className="form-control form-control-lg"
                                                defaultValue=""
                                                name="contact[email]"
                                            />
                                        </fieldset>
                                        <fieldset className="form-group col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            <textarea
                                                placeholder="Nội dung"
                                                name="contact[body]"
                                                id="comment"
                                                className="form-control content-area form-control-lg"
                                                rows="5"
                                                required=""
                                            ></textarea>
                                        </fieldset>
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 margin-top-10">
                                            <button onClick={(e) => e.preventDefault()} type="submit" className="btn btn-primary btn-lienhe">
                                                Gửi liên hệ
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </DefaultLayout>
    );
};

export default Contact;
