/**
 * ********** Импорт основных библиотек из NPM **********
 * */
import React from 'react';
import 'react-dates/initialize';
// @ts-ignore
// import { DateRangePicker } from 'react-dates';
// import 'react-dates/lib/css/_datepicker.css';
import 'moment/locale/ru';

/**
 * ********** Импорт экшенов **********
 * */
// import { fetchDataShipment } from '../../../../actions/shipmentActions';

/**
 * ********** Импорт типов **********
 * */
// import { PersonalCabinet } from '../../../../store/store';
// import { ShipmentListReq } from '../../../../constants/shipmentTypes';

/**
 * ********** Импорт файлов стилей **********
 * */
import './Configurator.scss';

const Configurator = () => {
    return (
        <div className="main-content">
            <div className="configurator">
                <iframe
                    className="configurator__iframe"
                    src="https://test.carddex.master-conf.online/configurator/#/turnstile"
                    frameBorder={0}
                    title="configurator"
                />
            </div>
        </div>
    );
};

export default Configurator;
