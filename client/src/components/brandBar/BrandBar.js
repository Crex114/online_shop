import React, { useContext } from 'react';
import { observer } from "mobx-react-lite";
import { Context } from "../../index";
import './brandBar.scss'

const BrandBar = observer(() => {
    const { device } = useContext(Context)

    return (
        <div className="row">
            <div className="brand-bar">
                {device.brands.map(brand =>
                    <div className='brand-bar__item'
                        key={brand.id}
                        onClick={() => device.setSelectedBrand(brand)}
                        border={brand.id === device.selectedBrand.id ? '#ffda33' : '#d8d8d8'}>
                        {brand.name}
                    </div>
                )}
            </div>
        </div>

    );
});

export default BrandBar;
