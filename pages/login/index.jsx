import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import DefaultLayout from "../../layout/DefaultLayout";

import fbBtn from "../../static/images/login/fb-btn.svg";
import gpBtn from "../../static/images/login/gp-btn.svg";

const Login = () => {
    const [email, setEmail] = useState("");
    const [emailForgot, setEmailForgot] = useState("");
    const [password, setPassword] = useState("");
    return (
        <DefaultLayout>
            <div className="col-xs-12 padding-top-15 margin-bottom-40">
                <h1 className="title-head">
                    <span>Đăng nhập tài khoản</span>
                </h1>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="page-login">
                            <div id="login">
                                <span>Nếu bạn đã có tài khoản, đăng nhập tại đây.</span>
                                <form
                                    // accept-charset="utf-8"
                                    // action="https://delta-fruits.mysapo.net/account/login"
                                    id="customer_login"
                                    // method="post"
                                >
                                    {/* <input
                                        name="FormType"
                                        type="hidden"
                                        value="customer_login"
                                    />
                                    <input
                                        name="utf8"
                                        type="hidden"
                                        value="true"
                                    /> */}
                                    <div className="form-signup"></div>
                                    <div className="form-signup clearfix">
                                        <fieldset className="form-group">
                                            <label>
                                                Email
                                                <span className="required">*</span>
                                            </label>
                                            <input
                                                type="email"
                                                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,63}$"
                                                className="form-control form-control-lg"
                                                value={email}
                                                name="email"
                                                id="customer_email"
                                                placeholder="Email"
                                                required=""
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                        </fieldset>
                                        <fieldset className="form-group">
                                            <label>
                                                Mật khẩu
                                                <span className="required">*</span>
                                            </label>
                                            <input
                                                type="password"
                                                className="form-control form-control-lg"
                                                value={password}
                                                name="password"
                                                id="customer_password"
                                                placeholder="Mật khẩu"
                                                required=""
                                                onChange={(e) => setPassword(e.target.value)}
                                            />
                                        </fieldset>

                                        <div className="pull-xs-left" style={{ marginTop: "25px" }}>
                                            <input
                                                onClick={(e) => e.preventDefault()}
                                                className="btn btn-style btn-primary"
                                                type="submit"
                                                value="Đăng nhập"
                                                onChange={(e) => e}
                                            />
                                            <Link href="/register">
                                                <a
                                                    className="btn-link-style btn-register"
                                                    style={{
                                                        marginLeft: "20px",
                                                        textDecoration: "underline",
                                                    }}
                                                >
                                                    Đăng ký
                                                </a>
                                            </Link>
                                            <div className="block social-login--facebooks">
                                                <p className="a-center">Hoặc đăng nhập bằng</p>

                                                <Link href="">
                                                    <a className="social-login--facebook">
                                                        <Image width="129px" height="37px" alt="facebook-login-button" src={fbBtn} />
                                                    </a>
                                                </Link>
                                                <Link href="">
                                                    <a className="social-login--google">
                                                        <Image width="129px" height="37px" alt="google-login-button" src={gpBtn} />
                                                    </a>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 h_recover">
                        <div id="recover-password" className="form-signup page-login">
                            <span>Bạn quên mật khẩu? Nhập địa chỉ email để lấy lại mật khẩu qua email.</span>
                            <form
                                // accept-charset="utf-8"
                                // action="https://delta-fruits.mysapo.net/account/recover"
                                id="recover_customer_password"
                                // method="post"
                            >
                                <input name="FormType" type="hidden" value="recover_customer_password" />
                                <input name="utf8" type="hidden" value="true" />
                                <div className="form-signup" style={{ color: "red" }}></div>
                                <div className="form-signup clearfix">
                                    <fieldset className="form-group">
                                        <label>
                                            Email
                                            <span className="required">*</span>
                                        </label>
                                        <input
                                            type="email"
                                            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,63}$"
                                            className="form-control form-control-lg"
                                            value={emailForgot}
                                            name="Email"
                                            id="recover-email"
                                            placeholder="Email"
                                            required=""
                                            onChange={(e) => setEmailForgot(e.target.value)}
                                        />
                                    </fieldset>
                                </div>
                                <div className="action_bottom">
                                    <input
                                        onClick={(e) => e.preventDefault()}
                                        className="btn btn-style btn-primary"
                                        style={{ marginTop: "28px" }}
                                        type="submit"
                                        value="Lấy lại mật khẩu"
                                        onChange={(e) => e}
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </DefaultLayout>
    );
};

export default Login;
