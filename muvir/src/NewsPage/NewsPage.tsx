import { FormEvent } from "react";
import style from "./NewsPage.module.scss";
import { Link } from "react-router-dom";

const NewsPage = () => {
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    }

    return (
        <>
            <div className={style.content}>
                <h1>Наши новости</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" className={style.search} placeholder="Поиск" />
                </form>
                <div className={style.news}>
                    <Link to="1" className="card">
                        <div className="card__header">
                            <img src="https://source.unsplash.com/600x400/?computer" alt="card__image" className="card__image" width="600" />
                        </div>
                        <div className="card__body">
                            <h4>Мы запустили сайт!</h4>
                            <p>Теперь он доступен на <strong>мувыр.рф</strong></p>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default NewsPage;