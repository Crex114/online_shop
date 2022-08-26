import React, { useState } from 'react';
import CreateBrand from "../../components/modals/CreateBrand";
import CreateDevice from "../../components/modals/CreateDevice";
import CreateType from "../../components/modals/CreateType";
import './admin.scss'

const Admin = () => {
    const [brandVisible, setBrandVisible] = useState(false)
    const [typeVisible, setTypeVisible] = useState(false)
    const [deviceVisible, setDeviceVisible] = useState(false)

    return (
        <div className="container">
            <div className="admin">
                <div onClick={() => setTypeVisible(true)}>Добавить тип</div>
                <div onClick={() => setBrandVisible(true)}>Добавить бренд</div>
                <div onClick={() => setDeviceVisible(true)}>Добавить устройство</div>

                <CreateType show={typeVisible} onHide={() => setTypeVisible(false)} />
                <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)} />
                <CreateDevice show={deviceVisible} onHide={() => setDeviceVisible(false)} />
            </div>
        </div>
    );
};

export default Admin;
