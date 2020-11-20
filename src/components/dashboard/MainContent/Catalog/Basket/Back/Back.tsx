import React from 'react';
import { Link } from 'react-router-dom';
import BackArrow from '../../../../../../images/Catalog/Basket/back.svg';
import './Back.scss';

const Back = () => {
    return (
        <section className="back">
            <Link to="/catalog">
                <img src={BackArrow} alt="" className="back__arrow" />
                <span className="back__text">Вернуться назад</span>
            </Link>
        </section>
    );
};

export default Back;
