/**
 * ********** Импорт зависимостей **********
 */
import React, { useState, ChangeEvent } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';

/**
 * ********** Импорт экшенов **********
 */
import { changeProfilePassword } from '../../../../../actions/profielActions/profileActions';

/**
 * ********** Импорт стилей **********
 */
import './ChangeRegisterPassword.scss';
import { PersonalCabinet } from '../../../../../store/store';

const ChangeRegisterPassword = () => {
    const [pass, setPass] = useState('');
    const [newPass, setNewPass] = useState('');
    const [repeatPass, setRepeatPass] = useState('');

    /**
     * ********** Импорт состояния из Redux **********
     * */
    // const { user, isAuthenticated } = useSelector((state: PersonalCabinet) => state.auth, shallowEqual);
    const { errorMessage } = useSelector((state: PersonalCabinet) => state.profile, shallowEqual);

    /**
     * Отправка действий для изменения на сервере
     * */
    const dispatch = useDispatch();

    /**
     *
     */
    const showOrHidePasswordOld = () => {
        const password: HTMLElement | any = document.getElementById('passOld');
        const access: HTMLElement | any = document.getElementsByClassName('inaccess')[0];
        access.classList.toggle('access');
        if (password.type === 'password') {
            password.type = 'text';
        } else {
            password.type = 'password';
        }
    };

    const showOrHidePasswordNew = () => {
        const password: HTMLElement | any = document.getElementById('passNew');
        const access: HTMLElement | any = document.getElementsByClassName('inaccess')[1];
        access.classList.toggle('access');
        if (password.type === 'password') {
            password.type = 'text';
        } else {
            password.type = 'password';
        }
    };

    const showOrHidePasswordRepeat = () => {
        const password: HTMLElement | any = document.getElementById('passRepeat');
        const access: HTMLElement | any = document.getElementsByClassName('inaccess')[2];
        access.classList.toggle('access');
        if (password.type === 'password') {
            password.type = 'text';
        } else {
            password.type = 'password';
        }
    };

    /** ********** RESPONSE DATA FOR LOGIN ACCOUNT ********** */
    // @ts-ignore
    const onSubmit = () => {
        // eslint-disable-next-line no-shadow
        const user: string | null = localStorage.getItem('userUuid');
        // @ts-ignore
        const userUuid = user.replace(/['"«»]/g, '');
        const dataProfile = {
            userUuid,
            pass,
            newPass,
            repeatPass
        };
        if (repeatPass === newPass) {
            dispatch(changeProfilePassword(dataProfile));
        }
    };

    return (
        <div className="main__inputs">
            <div className="inputs__forms">
                <div className="forms__wrapper">
                    {
                        // @ts-ignore
                        errorMessage.code === 9 ? (
                            <>
                                <div className="forms__field">
                                    <label className={pass ? 'field__label active' : 'field__label'}>Введите текущий пароль</label>
                                    <input
                                        onChange={(event: ChangeEvent<HTMLInputElement>) => setPass(event.target.value)}
                                        type="password"
                                        id="passOld"
                                        name="pass"
                                        value={pass}
                                        className="field__input warning"
                                        minLength={8}
                                        maxLength={255}
                                        pattern="^(?=.*[A-Za-zА-Яа-я])(?=.*\d)[A-Za-zА-Яа-я\d]{8,}$"
                                        title="Поле должно содержать минимум 8 знаков, цифры и буквы"
                                        required
                                    />
                                    <div onClick={showOrHidePasswordOld} className="inaccess" />
                                </div>
                                {
                                    // @ts-ignore
                                    errorMessage && errorMessage.code === 9 ? (
                                        <div className="forms__unsuccess">
                                            {
                                                // @ts-ignore
                                                errorMessage.message
                                            }
                                        </div>
                                    ) : null
                                }
                            </>
                        ) : (
                            <div className="forms__field">
                                <label className={pass ? 'field__label active' : 'field__label'}>Введите текущий пароль</label>
                                <input
                                    onChange={(event: ChangeEvent<HTMLInputElement>) => setPass(event.target.value)}
                                    type="password"
                                    id="passOld"
                                    name="pass"
                                    value={pass}
                                    className="field__input"
                                    minLength={8}
                                    maxLength={255}
                                    pattern="^(?=.*[A-Za-zА-Яа-я])(?=.*\d)[A-Za-zА-Яа-я\d]{8,}$"
                                    title="Поле должно содержать минимум 8 знаков, цифры и буквы"
                                    required
                                />
                                <div onClick={showOrHidePasswordOld} className="inaccess" />
                            </div>
                        )
                    }
                </div>
                <div className="forms__wrapper">
                    {newPass !== repeatPass ? (
                        <>
                            <div className="forms__field">
                                <label className={newPass ? 'field__label active' : 'field__label'}>Введите новый пароль</label>
                                <input
                                    onChange={(event: ChangeEvent<HTMLInputElement>) => setNewPass(event.target.value)}
                                    type="password"
                                    id="passNew"
                                    name="newPass"
                                    value={newPass}
                                    className="field__input warning"
                                    minLength={8}
                                    maxLength={255}
                                    pattern="^(?=.*[A-Za-zА-Яа-я])(?=.*\d)[A-Za-zА-Яа-я\d]{8,}$"
                                    title="Поле должно содержать минимум 8 знаков, цифры и буквы"
                                    required
                                />
                                <div onClick={showOrHidePasswordNew} className="inaccess" />
                            </div>
                            {newPass !== repeatPass ? <div className="forms__unsuccess">Введеные пароли не совпадают</div> : null}
                        </>
                    ) : (
                        <div className="forms__field">
                            <label className={newPass ? 'field__label active' : 'field__label'}>Введите новый пароль</label>
                            <input
                                onChange={(event: ChangeEvent<HTMLInputElement>) => setNewPass(event.target.value)}
                                type="password"
                                id="passNew"
                                name="newPass"
                                value={newPass}
                                className="field__input"
                                minLength={8}
                                maxLength={255}
                                pattern="^(?=.*[A-Za-zА-Яа-я])(?=.*\d)[A-Za-zА-Яа-я\d]{8,}$"
                                title="Поле должно содержать минимум 8 знаков, цифры и буквы"
                                required
                            />
                            <div onClick={showOrHidePasswordNew} className="inaccess" />
                        </div>
                    )}
                    {repeatPass !== newPass ? (
                        <>
                            <div className="forms__field">
                                <label className={repeatPass ? 'field__label active' : 'field__label'}>Повторите новый пароль</label>
                                <input
                                    onChange={(event: ChangeEvent<HTMLInputElement>) => setRepeatPass(event.target.value)}
                                    value={repeatPass}
                                    id="passRepeat"
                                    name="repeatPass"
                                    type="password"
                                    className="field__input warning"
                                    minLength={8}
                                    maxLength={255}
                                    pattern="^(?=.*[A-Za-zА-Яа-я])(?=.*\d)[A-Za-zА-Яа-я\d]{8,}$"
                                    title="Поле должно содержать минимум 8 знаков, цифры и буквы"
                                    required
                                />
                                <div onClick={showOrHidePasswordRepeat} className="inaccess" />
                            </div>
                            {repeatPass !== newPass ? <div className="forms__unsuccess">Введеные пароли не совпадают</div> : null}
                        </>
                    ) : (
                        <div className="forms__field">
                            <label className={repeatPass ? 'field__label active' : 'field__label'}>Повторите новый пароль</label>
                            <input
                                onChange={(event: ChangeEvent<HTMLInputElement>) => setRepeatPass(event.target.value)}
                                value={repeatPass}
                                id="passRepeat"
                                name="repeatPass"
                                type="password"
                                className="field__input"
                                minLength={8}
                                maxLength={255}
                                pattern="^(?=.*[A-Za-zА-Яа-я])(?=.*\d)[A-Za-zА-Яа-я\d]{8,}$"
                                title="Поле должно содержать минимум 8 знаков, цифры и буквы"
                                required
                            />
                            <div onClick={showOrHidePasswordRepeat} className="inaccess" />
                        </div>
                    )}
                </div>
                {
                    // @ts-ignore
                    errorMessage.code === 0 ? <div className="forms__success">Пароль успешно изменен</div> : null
                }
                <div onClick={onSubmit} className="forms__button">
                    <div className="button">Сохранить</div>
                </div>
            </div>
        </div>
    );
};

export default ChangeRegisterPassword;
