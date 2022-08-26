import React, { useContext, useState } from 'react';
import { NavLink, useLocation, useHistory } from "react-router-dom";
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from "../../utils/consts";
import { login, registration } from "../../http/userAPI";
import { observer } from "mobx-react-lite";
import { Context } from "../../index";

import './auth.scss'

const Auth = observer(() => {
    const { user } = useContext(Context)
    const location = useLocation()
    const history = useHistory()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const click = async () => {
        try {
            let data;
            if (isLogin) {
                data = await login(email, password);
            } else {
                data = await registration(email, password);
            }
            user.setUser(data)
            user.setIsAuth(true)
            if (email === "admin@mail.ru") {
                user.setIsAdmin(true)
            }
            history.push(SHOP_ROUTE)
        } catch (e) {
            alert(e.response.data.message)
        }

    }

    return (
        <div className="container">
            <div className="auth">
                <div className="auth-content">
                    <h1>{isLogin ? 'Авторизация' : "Регистрация"}</h1>
                    <form className="auth-content__form">
                        <input
                            placeholder="Введите email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                        <input
                            placeholder="Введите пароль"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            type="password"
                        />
                        <div className="d-flex justify-content-between mt-3 pl-3 pr-3 row">
                            {isLogin ?
                                <div>
                                    Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Регистрация</NavLink>
                                </div>
                                :
                                <div>
                                    Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войти</NavLink>
                                </div>
                            }
                            <button
                                variant={"outline-success"}
                                onClick={click}
                            >
                                {isLogin ? 'Войти' : 'Регистрация'}
                            </button>
                        </div>

                    </form>
                </div>
            </div>

        </div>
    );
});

export default Auth;
