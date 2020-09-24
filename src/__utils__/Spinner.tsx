import React from 'react';
import spinner from '../images/loader.svg';
import './Spinner.scss';

const Spinner: React.FC = () => {
    return (
        <div className="spinner">
            <img className="indicator" src={spinner} alt="Loading..." />
        </div>
    );
};
export default Spinner;
