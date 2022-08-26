import React, { useEffect } from 'react';
import { useContext } from 'react';
import { Context } from '../..';
import { getBasket } from '../../http/deviceAPI';
import { observer } from 'mobx-react-lite';

import './basket.scss'

const Basket = observer(() => {
    const { device } = useContext(Context)

    useEffect(() => {
        getBasket().then(data => device.setBaskets(data))
    }, [])

    let prices = 0;
    device.basket.map(price =>
        prices += Number(price.device.price)
    )

    let arr = []
    device.basket.map(product => {
        arr.push(product.device.name)
    })

    return (
        <div className="container basket flex-sm-column mt-3">
            <h1 className="basket__title">Корзина</h1>

            {device.basket.map(product =>
                <div className="basket__area-items" key={product.id}>
                    <div className="basket__area-items__name">
                        <img src={process.env.REACT_APP_API_URL + product.device.img} />
                        <span>{product.device.name}</span>
                    </div>
                    <div className="d-flex align-items-center">
                        <span className="font-weight-light">{product.device.price} руб/шт</span>
                    </div>
                </div>
            )}

            <div className="basket-total col align-self-end">
                <div>
                    <span className="basket-total__title">Товары ({arr.length})</span>
                    <span className="basket-total__title">{prices} руб</span>
                </div>
                <div>
                    <span className="basket-total__title">Итого:</span>
                    <span className="basket-total__price">{prices} руб</span>
                </div>
                <button>Оформить заказ</button>
            </div>
        </div>
    );
});

export default Basket;
