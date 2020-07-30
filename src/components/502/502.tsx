import React from 'react';
import { Link } from 'react-router-dom';
import './502.scss';

const badGateaway: React.FC = () => {
    return (
        <div className="bad-gateaway">
            <Link to="/">
                <b>500</b>
            </Link>
            <p>Проблемы с прокси на стороне клиента</p>
            <p>Либо вы указали неверный URL, у вас нет доступа привилегии для страницы, или страница, которую вы ищете, была удален.</p>
        </div>
    );
};
export default badGateaway;
