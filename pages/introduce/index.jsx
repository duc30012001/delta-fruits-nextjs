import Link from "next/link";
import DefaultLayout from "../../layout/DefaultLayout";

import { useSelector } from "react-redux";

const Introduce = () => {
    const information = useSelector((state) => state.information.value);
    const value = information.introduce.content;
    const content = {
        __html: value,
    };

    return (
        <>
            <DefaultLayout>
                <div className="col-xs-12 col-sm-12 col-md-12">
                    <div className="page-title category-title">
                        <h1 className="title-head">
                            <Link href="">
                                <a>Giới thiệu</a>
                            </Link>
                        </h1>
                    </div>
                    <div dangerouslySetInnerHTML={content} className="content-page rte"></div>
                </div>
            </DefaultLayout>
        </>
    );
};

export default Introduce;
