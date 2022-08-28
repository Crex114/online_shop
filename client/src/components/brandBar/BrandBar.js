import React, { useContext } from 'react';
import { observer } from "mobx-react-lite";
import { Context } from "../../index";
import { border } from '../../utils/consts';
import './brandBar.scss'

const BrandBar = observer(() => {
    const { device } = useContext(Context)
    return (
        <div className="row">
            <div className="brand-bar" >
                {device.brands.map(brand =>
                    <div className='brand-bar__item'
                        style={brand.id === device.selectedBrand.id ? border.active : border.notActive}
                        key={brand.id}
                        onClick={() => device.setSelectedBrand(brand)}>
                        {brand.name}
                    </div>
                )}
            </div>
        </div>

    );
});

export default BrandBar;