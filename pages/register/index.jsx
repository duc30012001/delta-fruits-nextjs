import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

import DefaultLayout from "../../layout/DefaultLayout";

import fbBtn from "../../static/images/login/fb-btn.svg";
import gpBtn from "../../static/images/login/gp-btn.svg";

const Register = () => {
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (
        <DefaultLayout>
            <div className="col-xs-12 padding-top-15 margin-bottom-40">
                <h1 className="title-head">
                    <Link href="">
                        <a>Đăng ký tài khoản</a>
                    </Link>
                </h1>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="page-login">
                            <div id="login">
                                <span>Nếu chưa có tài khoản vui lòng đăng ký tại đây</span>
                                <form
                                    // accept-charset="utf-8"
                                    // action="https://delta-fruits.mysapo.net/account/register"
                                    id="customer_register"
                                    // method="post"
                                >
                                    <div className="form-signup"></div>
                                    <div className="form-signup clearfix">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <fieldset className="form-group">
                                                    <label>
                                                        Họ
                                                        <span className="required">*</span>
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="form-control form-control-lg"
                                                        value={surname}
                                                        name="lastName"
                                                        id="lastName"
                                                        placeholder=""
                                                        required=""
                                                        onChange={(e) => setSurname(e.target.value)}
                                                    />
                                                </fieldset>
                                            </div>
                                            <div className="col-md-6">
                                                <fieldset className="form-group">
                                                    <label>
                                                        Tên
                                                        <span className="required">*</span>
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="form-control form-control-lg"
                                                        value={name}
                                                        onChange={(e) => setName(e.target.value)}
                                                        name="firstName"
                                                        id="firstName"
                                                        placeholder=""
                                                        required=""
                                                    />
                                                </fieldset>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
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
                                                        onChange={(e) => setEmail(e.target.value)}
                                                        name="email"
                                                        id="email"
                                                        placeholder=""
                                                        required=""
                                                    />
                                                </fieldset>
                                            </div>
                                            <div className="col-md-6">
                                                <fieldset className="form-group">
                                                    <label>
                                                        Mật khẩu
                                                        <span className="required">*</span>
                                                    </label>
                                                    <input
                                                        type="password"
                                                        className="form-control form-control-lg"
                                                        value={password}
                                                        onChange={(e) => setPassword(e.target.value)}
                                                        name="password"
                                                        id="password"
                                                        placeholder=""
                                                        required=""
                                                    />
                                                </fieldset>
                                            </div>
                                        </div>

                                        <div
                                            className="col-xs-12 text-xs-left"
                                            style={{
                                                marginTop: "30px",
                                                padding: "0",
                                            }}
                                        >
                                            <button
                                                onClick={(e) => e.preventDefault()}
                                                type="summit"
                                                value="Đăng ký"
                                                className="btn btn-style btn-primary"
                                            >
                                                Đăng ký
                                            </button>
                                            <Link href="/login">
                                                <a
                                                    className="btn-link-style btn-register"
                                                    style={{
                                                        marginLeft: "20px",
                                                        textDecoration: "underline",
                                                    }}
                                                >
                                                    Đăng nhập
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
                </div>
            </div>
        </DefaultLayout>
    );
};

export default Register;
