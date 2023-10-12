import { FormEvent } from "react";
import style from "./EventsPage.module.scss";
import { Link } from "react-router-dom";
import { useGetEventsQuery } from "../store/API/muvir.api";

const EventsPage = () => {

    const { data: events, isSuccess, isLoading } = useGetEventsQuery({ e: 0, c: 100, t: "event" });

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    }

    return (
        <>
            <div className={style.content}>
                <h1>Мероприятия</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" className={style.search} placeholder="Поиск" />
                </form>
                <div className={style.news}>
                    {
                        isSuccess
                            ? events.map(element =>
                                <Link key={element.event_id} to={element.event_id.toString()} className="article-card">
                                    <div className="content">
                                        <p className="date">{[new Date(element.timestamp * 1000).getDate(), new Date(element.timestamp * 1000).getMonth(), new Date(element.timestamp * 1000).getFullYear()].join("/")}, {[new Date(element.timestamp * 1000).getHours(), new Date(element.timestamp * 1000).toTimeString().slice(3, 5)].join(":")}</p>
                                        <p className="title">{element.title}</p>
                                    </div>
                                    <img src={element.images[0].toString()} />
                                </Link>
                            )
                            : null
                    }
                </div>
            </div>
        </>
    );
}

export default EventsPage;