import React, { useContext } from 'react';
import { observer } from "mobx-react-lite";
import { Context } from "../../index";
import './typeBar.scss'

const TypeBar = observer(() => {
    const { device } = useContext(Context)
    return (
        <>
            {device.types.map(type =>
                <div className='collection-item'
                    active={type.id === device.selectedType.id ? 1 : 0}
                    onClick={() => device.setSelectedType(type)}
                    key={type.id}
                >
                    <div className="collection-title">{type.name}</div>
                </div>
            )}
        </>
    );
});

export default TypeBar;
