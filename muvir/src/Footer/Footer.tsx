import { Link } from "react-router-dom";
import style from "./Footer.module.scss";
import { ReactComponent as VKSVG } from "../svg/vk.svg"
import { ReactComponent as PhoneSVG } from "../svg/phone.svg"
import { ReactComponent as MapSVG } from "../svg/map.svg"
import { ReactComponent as PersonSVG } from "../svg/person.svg"

const Footer = () => {
    return (
        <div className={style.Footer}>
            <div className={style.content}>
                <div className={style.links}>
                    <Link to="/">МУВЫР</Link>
                    <ul>
                        <li><Link to="/news">Новости</Link></li>
                        <li><Link to="/events">Мероприятия</Link></li>
                        <li><Link to="/rest">Отдых</Link></li>
                        <li><Link to="/products">Продукция</Link></li>
                        <li><Link to="/invest">Инвесторам</Link></li>
                    </ul>
                </div>
                <div className={style.contacts}>
                    <ul>
                        <li>
                            <a href="https://vk.com/weekendvmywer" target="_blank" rel="noreferrer"><VKSVG /></a>
                            <a href="tel:+79018658755"><PhoneSVG /></a>
                            <p>+7 (901) 865-87-55</p>
                        </li>
                        <li>
                            <a href="https://yandex.ru/maps/-/CDaa5P-z" target="_blank" rel="noreferrer"><MapSVG /></a>
                            <p>Игринский район, Удмуртская Республика</p>
                        </li>
                        <li>
                            <PersonSVG />
                            <p>ИП Корепанов А.Г.</p>
                        </li>
                    </ul>
                    <div style={{ position: "relative", overflow: "hidden" }}><a href="https://yandex.ru/maps?utm_medium=mapframe&utm_source=maps" style={{ color: "#eee", fontSize: "12px", position: "absolute", top: "0px" }}>Яндекс Карты</a><a href="https://yandex.ru/maps/geo/derevnya_muvyr/1499045771/?ll=53.317074%2C57.628147&utm_medium=mapframe&utm_source=maps&z=15.61" style={{ color: "#eee", fontSize: "12px", position: "absolute", top: "14px" }}>Деревня Мувыр — Яндекс Карты</a><iframe title="GG" src="https://yandex.ru/map-widget/v1/?ll=53.317074%2C57.628147&mode=poi&poi%5Bpoint%5D=53.319122%2C57.629542&poi%5Buri%5D=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgoxNDk5MDQ1NzcxEnHQoNC-0YHRgdC40Y8sINCj0LTQvNGD0YDRgtGB0LrQsNGPINCg0LXRgdC_0YPQsdC70LjQutCwLCDQmNCz0YDQuNC90YHQutC40Lkg0YDQsNC50L7QvSwg0LTQtdGA0LXQstC90Y8g0JzRg9Cy0YvRgCIKDchGVUIVp4RmQg%2C%2C&z=15.61" width="300" height="150" allowFullScreen style={{ position: "relative" }}></iframe></div>
                </div>
            </div >
        </div >
    );
}

export default Footer;