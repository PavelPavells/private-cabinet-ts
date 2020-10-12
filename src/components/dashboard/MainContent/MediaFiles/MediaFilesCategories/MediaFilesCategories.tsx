/**
 * import dependencies from npm
 */
import React, { useState } from 'react';

/**
 * import images
 */
import Plus from '../../../../../images/Media/plus.svg';
import Minus from '../../../../../images/Media/minus.svg';

/**
 * import styles
 */
import './MediaFilesCategories.scss';

const MediaFilesCategories = () => {
    const [openFirst, setOpenFirst] = useState(false);
    const [openSecond, setOpenSecond] = useState(false);
    const [openThird, setOpenThird] = useState(false);

    const handleChangeToggleOpenFirst = () => {
        setOpenFirst(!openFirst);
    };

    const handleChangeToggleOpenSecond = () => {
        setOpenSecond(!openSecond);
    };

    const handleChangeToggleOpenThird = () => {
        setOpenThird(!openThird);
    };

    return (
        <div className="categories">
            <div onClick={handleChangeToggleOpenFirst} className="categories__item">
                <input type="checkbox" name="first__categories" className="item__checkbox" checked={openFirst} readOnly />
                <label htmlFor="first__categories" className="item__text">
                    Турникеты
                </label>
                <img src={openFirst ? Minus : Plus} className="item__icon" alt="" />
            </div>
            <div onClick={handleChangeToggleOpenSecond} className="categories__item">
                <input type="checkbox" name="first__categories" className="item__checkbox" checked={openSecond} readOnly />
                <label htmlFor="first__categories" className="item__text">
                    Шлагбаумы
                </label>
                <img src={openSecond ? Minus : Plus} className="item__icon" alt="" />
            </div>
            <div onClick={handleChangeToggleOpenThird} className="categories__item">
                <input type="checkbox" name="first__categories" className="item__checkbox" checked={openThird} readOnly />
                <label htmlFor="first__categories" className="item__text">
                    Контроллеры
                </label>
                <img src={openThird ? Minus : Plus} className="item__icon" alt="" />
            </div>
        </div>
    );
};

export default MediaFilesCategories;
