import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { addToBasket, fetchOneDevice } from "../../http/deviceAPI";

import './devicePage.scss'

const DevicePage = () => {
    const [device, setDevice] = useState({ info: [] })
    const { id } = useParams()
    useEffect(() => {
        fetchOneDevice(id).then(data => setDevice(data))
    }, [])

    const add = () => {
        const formData = new FormData()
        formData.append('deviceId', id)
        addToBasket(formData).then(response => alert(`Товар ` + device.name + ` был добавлен в вашу корзину!`))
    }

    return (
        <div className="container">
            <div className='row'>
                <div className='col-md-6 device-page__img'>
                    <img src={process.env.REACT_APP_API_URL + device.img} />
                </div>
                <div className='col-md-6 device-page__descr'>

                    <div className="device-page__descr__title">
                        <h1>{device.name}</h1>
                    </div>

                    <div className="device-page__descr__price">
                        <span>{device.price} руб</span>
                    </div>
                    <div className='device-page__descr__btn'>
                        <button onClick={add} >В корзину</button>
                    </div>
                </div>
            </div>
            <div className="d-flex flex-column row">
                <div className='device-page__info-title'>
                    <span>Характеристики</span>
                </div>

                {device.info.map((info, index) =>
                    <div className='device-page__info' key={info.id}>
                        <div className='device-page__info__title'>
                            {info.title}
                        </div>
                        <div className='device-page__info__descr'>
                            {info.description}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
export default DevicePage;
