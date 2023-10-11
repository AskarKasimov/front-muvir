import { Link, useLocation } from "react-router-dom";
import style from "./Header.module.scss";
import { useState, useEffect } from "react";

const Header = () => {
    const location = useLocation();
    const [scrollTop, setScrollTop] = useState<boolean>(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 99) setScrollTop(true);
            else setScrollTop(false);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div className={style.Header} style={location.pathname === "/" ? !scrollTop ? { backgroundColor: "transparent", position: "fixed" } : { backgroundColor: "#91D609", position: "fixed" } : { backgroundColor: "#91D609", position: "sticky" }}>
            <div className={style.content}>
                <nav className="navbar">
                    <div className="navbar-container container">
                        <Link className={style.navigate} to="/">МУВЫР</Link>
                        <input type="checkbox" name="" id="" />
                        <div className="hamburger-lines">
                            <span className="line line1"></span>
                            <span className="line line2"></span>
                            <span className="line line3"></span>
                        </div>
                        <ul className="menu-items">
                            <li><Link to="/news">Новости</Link></li>
                            <li><Link to="/events">Мероприятия</Link></li>
                            <li><Link to="/rest">Отдых</Link></li>
                            <li><Link to="/products">Продукция</Link></li>
                            <li><Link to="/invest">Инвесторам</Link></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default Header;