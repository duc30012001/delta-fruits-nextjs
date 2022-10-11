// import CSS
import "../styles/plugin.css";
import "../styles/style.css";
import "../styles/responsive.css";
import "../styles/base.css";
import "../styles/module.css";
import "../styles/custom.css";

// Import css
import "../styles/checkout-custom.css";
import "../styles/checkout-base.css";

import { Provider } from "react-redux";
import store from "../redux/store";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Provider store={store}>
                <Component {...pageProps} />
            </Provider>
        </>
    );
}

export default MyApp;
