import Slider from "react-slick";
import style from "./MainPage.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const MainPage = () => {
    return (
        <>
            <Slider className={style.slider}
                dots
                arrows={false}
                infinite
                autoplay
                autoplaySpeed={3500}
            >
                <div className={style.fullScreenItem}>
                    <div style={{ backgroundImage: "url('/1.png')" }}>
                        {/* <img src="/logo.png" alt="логотип" /> */}
                        <p>Добро пожаловать!</p>
                        <p style={{ fontSize: "32px" }}></p>
                    </div>
                </div>
                <div className={style.fullScreenItem}>
                    <div style={{ backgroundImage: "url('/2.png')" }}></div>
                </div>
                <div className={style.fullScreenItem}>
                    <div style={{ backgroundImage: "url('/3.png')" }}></div>
                </div>
                <div className={style.fullScreenItem}>
                    <div style={{ backgroundImage: "url('/4.png')" }}></div>
                </div>
            </Slider>
            <div className={style.content}>
                <h1>Наша история</h1>
            </div>
        </>
    );
}

export default MainPage;