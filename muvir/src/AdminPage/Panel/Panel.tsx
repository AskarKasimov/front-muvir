import style from "./Panel.module.scss";

const Panel = () => {
    return (
        <div className={style.cont}>

            <div className={style.faq__holder}>
                <h1 className={style.faq__heading}>Админ панель</h1>

                <details className={style.faq__detail}>
                    <summary className={style.faq__summary}><span className={style.faq__question}>Главная страница</span></summary>
                    <div className={style.admin_buttons}>
                        <div className={style.btn12}>Добавить</div>
                        <div className={style.btn12}>Изменить</div>
                        <div className={style.btn12}>Удалить</div>
                    </div>

                </details>

                <details className={style.faq__detail}>
                    <summary className={style.faq__summary}><span className={style.faq__question}>Новости</span></summary>
                    <div className={style.admin_buttons}>
                        <div className={style.btn12}>Добавить</div>
                        <div className={style.btn12}>Изменить</div>
                        <div className={style.btn12}>Удалить</div>
                    </div>
                </details>

                <details className={style.faq__detail}>
                    <summary className={style.faq__summary}><span className={style.faq__question}>Мероприятия</span></summary>
                    <div className={style.admin_buttons}>
                        <div className={style.btn12}>Добавить</div>
                        <div className={style.btn12}>Изменить</div>
                        <div className={style.btn12}>Удалить</div>
                    </div>
                </details>

                <details className={style.faq__detail}>
                    <summary className={style.faq__summary}><span className={style.faq__question}>Отдых</span></summary>
                    <div className={style.admin_buttons}>
                        <div className={style.btn12}>Добавить</div>
                        <div className={style.btn12}>Изменить</div>
                        <div className={style.btn12}>Удалить</div>
                    </div>
                </details>

                <details className={style.faq__detail}>
                    <summary className={style.faq__summary}><span className={style.faq__question}>Продукция</span></summary>
                    <div className={style.admin_buttons}>
                        <div className={style.btn12}>Добавить</div>
                        <div className={style.btn12}>Изменить</div>
                        <div className={style.btn12}>Удалить</div>
                    </div>
                </details>

                <details className={style.faq__detail}>
                    <summary className={style.faq__summary}><span className={style.faq__question}>Инвесторам</span></summary>
                    <div className={style.admin_buttons}>
                        <div className={style.btn12}>Добавить</div>
                        <div className={style.btn12}>Изменить</div>
                        <div className={style.btn12}>Удалить</div>
                    </div>
                </details>
            </div>
        </div>
    );
}

export default Panel;