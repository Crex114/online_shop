import React, { useContext } from 'react';
import { observer } from "mobx-react-lite";
import { Context } from "../../index";
import './numberPage.scss'

const NumberPage = observer(() => {
    const { device } = useContext(Context)
    const pageCount = Math.ceil(device.totalCount / device.limit)
    const pages = []

    for (let i = 0; i < pageCount; i++) {
        pages.push(i + 1)
    }

    return (
        <div className="row">
            <div className="number-page">
                {pages.map(page =>
                    <button className='number-page__item'
                        key={page}
                        active={device.page === page ? 1 : 0}
                        onClick={() => device.setPage(page)}
                    >
                        {page}
                    </button>
                )}
            </div>
        </div>

    );
});

export default NumberPage;
