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
                    Турникеты и электронные проходные
                </label>
                <img src={openFirst ? Minus : Plus} className="item__icon" alt="" />
            </div>
            {openFirst ? (
                <>
                    <div onClick={handleChangeToggleOpenSecond} className="categories__item">
                        <input type="checkbox" name="second__categories" className="item__checkbox" checked={openSecond} readOnly />
                        <label htmlFor="second__categories" className="item__text">
                            Турникеты
                        </label>
                        <img src={openSecond ? Minus : Plus} className="item__icon" alt="" />
                    </div>
                    {openSecond ? (
                        <>
                            <div className="categories__item">
                                <input type="checkbox" name="third__categories" className="item__checkbox" />
                                <label htmlFor="third__categories" className="item__text">
                                    Компактные
                                </label>
                                <img src={Plus} className="item__icon" alt="" />
                            </div>
                            <div className="categories__item">
                                <input type="checkbox" name="fourth__categories" className="item__checkbox" />
                                <label htmlFor="fourth__categories" className="item__text">
                                    Тумбовые
                                </label>
                                <img src={Plus} className="item__icon" alt="" />
                            </div>
                        </>
                    ) : null}
                    <div onClick={handleChangeToggleOpenThird} className="categories__item">
                        <input type="checkbox" name="fifth__categories" className="item__checkbox" checked={openThird} readOnly />
                        <label htmlFor="fifth__categories" className="item__text">
                            Электронные проходные
                        </label>
                        <img src={openThird ? Minus : Plus} className="item__icon" alt="" />
                    </div>
                    {openThird ? (
                        <>
                            <div className="categories__item">
                                <input type="checkbox" name="sixth__categories" className="item__checkbox" />
                                <label htmlFor="sixth__categories" className="item__text">
                                    Компактные
                                </label>
                                <img src={Plus} className="item__icon" alt="" />
                            </div>
                            <div className="categories__item">
                                <input type="checkbox" name="seventh__categories" className="item__checkbox" />
                                <label htmlFor="seventh__categories" className="item__text">
                                    Тумбовые
                                </label>
                                <img src={Plus} className="item__icon" alt="" />
                            </div>
                            <div className="categories__item">
                                <input type="checkbox" name="eighth__categories" className="item__checkbox" />
                                <label htmlFor="eighth__categories" className="item__text">
                                    Шлагбаумы
                                </label>
                                <img src={Plus} className="item__icon" alt="" />
                            </div>
                            <div className="categories__item">
                                <input type="checkbox" name="nineth__categories" className="item__checkbox" />
                                <label htmlFor="nineth__categories" className="item__text">
                                    Сопутствующая продукция
                                </label>
                                <img src={Plus} className="item__icon" alt="" />
                            </div>
                        </>
                    ) : null}
                </>
            ) : null}
        </div>
    );
};

export default MediaFilesCategories;
