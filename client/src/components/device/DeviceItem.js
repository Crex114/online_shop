import React  from 'react';
import { useHistory } from "react-router-dom"
import { DEVICE_ROUTE } from "../../utils/consts";

import './deviceItem.scss'

const DeviceItem = ({ device }) => {
    const history = useHistory()
    
    return (
        <div className='device-item'
            onClick={() => history.push(DEVICE_ROUTE + '/' + device.id)}>
            <div className='device-item__img'>
                <img alt={device.name} src={process.env.REACT_APP_API_URL + device.img} />
            </div>
            <div className='device-item__name'>{device.name}</div>
            <div className="device-item__price">{device.price} руб</div>
        </div>

    );
};

export default DeviceItem;
