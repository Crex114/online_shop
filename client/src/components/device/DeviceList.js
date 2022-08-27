import React, { useContext } from 'react';
import { observer } from "mobx-react-lite";
import { Context } from "../../index";
import { ContextFilteredDevices } from '../../App';
import DeviceItem from "./DeviceItem";

import './deviceItem.scss'

const DeviceList = observer(() => {
    const { device } = useContext(Context)
    const { value } = useContext(ContextFilteredDevices)

    const filteredDevices = device.devices.filter(device => {
        return device.name.toLowerCase().includes(value.toLowerCase())
    })

    return (
        <div className="row">
            <div className="device-list">
                {filteredDevices.map(device =>
                    <DeviceItem key={device.id} device={device} />
                )}
            </div>
        </div>
    );
});

export default DeviceList;
