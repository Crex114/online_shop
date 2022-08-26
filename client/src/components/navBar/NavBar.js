import React, { useContext } from 'react';
import { Context } from "../../index";
import { ADMIN_ROUTE, BASKET_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from "../../utils/consts";
import { observer } from "mobx-react-lite";
import { useHistory, Link } from 'react-router-dom'

import './navBar.scss';
import Logo from '../../assets/logo/Logo.svg'

const NavBar = observer(() => {
    const { user } = useContext(Context)
    const history = useHistory()

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
        user.setIsAdmin(false)
    }

    return (
        <div className="container">
            <div className='header'>
                <div className='header__logo'>
                    <Link to={SHOP_ROUTE}>
                        <span>
                            <img src={Logo} alt="Интернет-магазин GRAND" />
                        </span>
                    </Link>
                </div>
                <div className="header__catalog">
                    <span className='header__catalog__icon'></span>
                    <span>Каталог</span>
                </div>
                <div className="header__search">
                    <form action="">
                        <input type="text" placeholder='Поиск'/>
                        <button type='submit'></button>
                    </form>
                </div>

                {user.isAuth ?
                    <div className="header__controls">
                        <div className='button mr-2' onClick={() => history.push(BASKET_ROUTE)} >
                            Корзина
                        </div>
                        {user.isAdmin ?
                            <div className="button" onClick={() => history.push(ADMIN_ROUTE)}>
                                Админ панель
                            </div>
                            :
                            <div></div>
                        }
                        <div className="button" onClick={() => logOut()} >
                            Выйти
                        </div>
                    </div>
                    :
                    <div className="header__controls">
                        <div className='button' onClick={() => history.push(LOGIN_ROUTE)}>Авторизация</div>
                    </div>
                }
            </div>
        </div>
    );
});

export default NavBar;
