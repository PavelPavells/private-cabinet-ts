import React from 'react';
import 'react-dates/initialize';
// @ts-ignore
// import { DateRangePicker } from 'react-dates';
// import 'react-dates/lib/css/_datepicker.css';
import 'moment/locale/ru';
// import { fetchDataShipment } from '../../../../actions/shipmentActions';
// import { PersonalCabinet } from '../../../../store/store';
// import { ShipmentListReq } from '../../../../constants/shipmentTypes';

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
