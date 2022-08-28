import React from 'react';
import '../typeBar/typeBar.scss'

const AllDevices = ({ reload }) => {

    return (
        <div className='collection-item' onClick={reload}>
            <div className='collection-item-icon'></div>
            <div className='collection-title'>Все товары</div>
        </div>
    );
};

export default AllDevices;