import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import Header from "./Header/Header";
import style from "./App.module.scss";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./Footer/Footer";
import { useEffect } from "react";

function App() {
    const path = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [path.pathname]);
    return (
        <>
            <div className={style.App}>
                <Header />
                <Outlet />
                <Footer />

            </div>
            <ToastContainer
                position="bottom-right"
                autoClose={3000}
                hideProgressBar={false}
                closeOnClick
                rtl={false}
                draggable
                pauseOnHover
                theme="light" />
        </>
    );
}

export default App;
