import { FormEvent } from "react";
import style from "./Login.module.scss";

const Login = () => {

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    }

    return (
        <div className={style.cont}>
            <form onSubmit={handleSubmit} className={style.InputContainer}>
                <div className={style.logo}>
                    <img src="https://imgur.com/r0D2PyZ.png" height="100px" width="100px" />
                </div>

                <div className={style.Input}>
                    <input type="text" id="input" className={style.InputText} placeholder="admin" />
                    <label htmlFor="input" className={style.InputLabel}>Логин</label>
                </div>
                <div className={style.Input}>
                    <input type="text" id="input" className={style.InputText} placeholder="********" />
                    <label htmlFor="input" className={style.InputLabel}>Пароль</label>
                </div>
                <div className={style.container}>
                    <button id="button"></button>
                </div>
            </form>
        </div>
    );
}

export default Login;