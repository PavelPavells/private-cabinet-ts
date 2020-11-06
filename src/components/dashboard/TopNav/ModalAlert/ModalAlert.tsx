/* eslint-disable react/jsx-one-expression-per-line */
import React, { useEffect } from 'react';
// import { shallowEqual, useDispatch, useSelector } from 'react-redux';
// import { fetchDataNotifications } from '../../../../actions/notificationsActions/notificationsActions';
// import { PersonalCabinet } from '../../../../store/store';
import One from '../../../../images/ModalAlert/1.svg';
import Two from '../../../../images/ModalAlert/2.svg';
import Three from '../../../../images/ModalAlert/3.svg';

/**
 * ********** Импорт файлов стилей **********
 * */
import './ModalAlert.scss';

interface Notifications {
    isOpen: boolean;
    setIsOpen: any;
}

const data: any = [
    {
        id: 0,
        text: 'Автоматический шлагбаум «RBA» по выгодной цене',
        date: '24.10.2020'
    },
    {
        id: 1,
        text: 'Автоматический шлагбаум «RBA» по выгодной цене',
        date: '24.10.2020'
    },
    {
        id: 2,
        text: 'Автоматический шлагбаум «RBA» по выгодной цене',
        date: '24.10.2020'
    },
    {
        id: 3,
        text: 'Автоматический шлагбаум «RBA» по выгодной цене',
        date: '24.10.2020'
    },
    {
        id: 4,
        text: 'Автоматический шлагбаум «RBA» по выгодной цене',
        date: '24.10.2020'
    }
];

// eslint-disable-next-line react/prop-types
const ModalAlert: React.FC<any> = ({ isOpen, setIsOpen }): any => {
    const handleClickOutside = (e: any) => {
        const checkingElement = document.getElementsByClassName('alert__notifications')[0];
        if (!e.path.includes(checkingElement)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, false);
        return () => {
            document.removeEventListener('click', handleClickOutside, false);
        };
    }, [isOpen]);

    return (
        <div className="alert__notifications">
            {/* <div className="alert__header">
                    Последние уведомления
                    <span>({notifications.notifications})</span>
                </div>
                */}
            <ul className="alert__list">
                {data.map((index: any) => {
                    return (
                        <li key={index.id}>
                            <div className="list__icon">
                                {index.id === 0 ? <img src={One} alt="" /> : null}
                                {index.id === 1 ? <img src={Three} alt="" /> : null}
                                {index.id === 2 ? <img src={Two} alt="" /> : null}
                                {index.id === 3 ? <img src={Two} alt="" /> : null}
                                {index.id === 4 ? <img src={Three} alt="" /> : null}
                            </div>
                            <div className="text">
                                <span>{index.text}</span>
                                <span>{index.date}</span>
                            </div>
                        </li>
                    );
                })}
            </ul>
            {/* <div className="alert__more">
                <span>Показать еще</span>
                <div className="more__arrow" />
            </div> */}
        </div>
    );
};

export default ModalAlert;
