/**
 * ********** Импорт основных библиотек из NPM **********
 */
import React, { useState, ChangeEvent, SyntheticEvent } from 'react';

/**
 * ********** Импорт файлов стилей **********
 */
import './WindowPushAlert.scss';

const WindowAlertPush = () => {
    const [alert, setAlerts] = useState({
        checkboxOne: false,
        checkboxTwo: false,
        checkboxThree: false
    });
    const [close, setClose] = useState(true);

    /**
     * Деструктуризация локального стейта
     */
    const { checkboxOne, checkboxTwo, checkboxThree } = alert;

    /**
     * Обработчик инпутов
     */
    const handleChangeInputs = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = event.target;
        setAlerts({ ...alert, [name]: checked });
    };

    /**
     * Обработчик закрытия / открытия окна
     */
    const handleChangeCloseWindow = () => {
        setClose(!close);
    };

    return (
        <>
            {close ? (
                <div className="wrapper-push">
                    <div className="push">
                        <section className="push__header">
                            <div onClick={handleChangeCloseWindow} className="header__close" />
                            <p className="header__text">
                                Выберите варианты получения уведомлений
                                <br />
                                об обновлениях и важных новостях
                            </p>
                        </section>
                        <section className="push__main">
                            <div className="main__form">
                                <div className="form__input">
                                    <input
                                        type="checkbox"
                                        id="checkboxOne"
                                        name="checkboxOne"
                                        checked={checkboxOne}
                                        onChange={handleChangeInputs}
                                        className="form__checkbox"
                                    />
                                    <p className="input__text">Не отправлять уведомления о новостях</p>
                                </div>
                                <div className="form__input">
                                    <input
                                        type="checkbox"
                                        id="checkboxTwo"
                                        name="checkboxTwo"
                                        checked={checkboxTwo}
                                        onChange={handleChangeInputs}
                                        className="form__checkbox"
                                    />
                                    <p className="input__text">Не отправлять уведомления о персональных предложения</p>
                                </div>
                                <div className="form__input">
                                    <input
                                        type="checkbox"
                                        id="checkboxThree"
                                        name="checkboxThree"
                                        checked={checkboxThree}
                                        onChange={handleChangeInputs}
                                        className="form__checkbox"
                                    />
                                    <p className="input__text">Не отправлять важную информацию об обновлениях Кабинета</p>
                                </div>
                                <button className="form__button">
                                    <div className="button__text">Принять</div>
                                    {/* <div className="button__icon" /> */}
                                </button>
                            </div>
                        </section>
                        <section className="push__footer">Вы всегда сможете изменить эти настройки в меню &rdquo;Профиль&rdquo;</section>
                    </div>
                </div>
            ) : null}
        </>
    );
};

export default WindowAlertPush;
