import React, { useContext, useEffect } from 'react';
import TypeBar from "../../components/typeBar/TypeBar";
import BrandBar from "../../components/brandBar/BrandBar";
import DeviceList from "../../components/device/DeviceList";
import AllDevices from '../../components/allDevices/AllDevices';
import { observer } from "mobx-react-lite";
import { Context } from "../../index";
import { fetchBrands, fetchDevices, fetchTypes } from "../../http/deviceAPI";
import NumberPage from "../../components/numberPage/NumberPage";

const Shop = observer(() => {
    const { device } = useContext(Context)

    const fetch = () => {
        fetchTypes().then(data => device.setTypes(data))
        fetchBrands().then(data => device.setBrands(data))
        fetchDevices(null, null, 1, 8).then(data => {
            device.setDevices(data.rows)
            device.setTotalCount(data.count)
        })
    }

    useEffect(fetch, [])

    useEffect(() => {
        fetchDevices(device.selectedType.id, device.selectedBrand.id, device.page, 2).then(data => {
            device.setDevices(data.rows)
            device.setTotalCount(data.count)
        })
    }, [device.selectedType, device.selectedBrand, device.page])


    return (
        <div className='container'>
            <div className="row">
                <div className='col-md-3'>
                    <AllDevices reload={fetch}/>
                    <TypeBar />
                </div>
                <div className='col-md-9'>
                    <BrandBar />
                    <DeviceList/>
                    <NumberPage />
                </div>
            </div>
        </div>
    );
});

export default Shop;
