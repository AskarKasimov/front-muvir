import { FormEvent } from "react";
import style from "./RestPage.module.scss";
import { Link } from "react-router-dom";

const RestPage = () => {
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    }

    return (
        <>
            <div className={style.content}>
                <h1>Отдых</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" className={style.search} placeholder="Поиск" />
                </form>
                <div className={style.news}>
                    <article className="card">
                        <Link to="1" className="card-image">
                            <img src="https://images.unsplash.com/photo-1494253109108-2e30c049369b?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYyNDcwMTUwOQ&ixlib=rb-1.2.1&q=85" alt="An orange painted blue, cut in half laying on a blue background" />
                        </Link>
                        <div className="card-header">
                            <Link to="1">Аренда домика</Link>
                        </div>
                        <div className="card-footer">
                            <div className="card-meta card-meta--date">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" display="block" id="Calendar">
                                    <rect x="2" y="4" width="20" height="18" rx="4" />
                                    <path d="M8 2v4" />
                                    <path d="M16 2v4" />
                                    <path d="M2 10h20" />
                                </svg>
                                Сентябрь 2023
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </>
    );
}

export default RestPage;