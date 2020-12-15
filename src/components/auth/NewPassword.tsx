import React, { useState, ChangeEvent } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, /* useDispatch, */ shallowEqual } from 'react-redux';
import { PersonalCabinet } from '../../store/store';
// import { newPassword } from '../../actions/authActions';
import Logo from '../../images/Auth/carddex_logo.svg';

import './Auth.scss';

const NewPassword = () => {
    const [newPass, setNewPass] = useState('');
    const [repeatNewPass, setRepeatNewPass] = useState('');

    const { error } = useSelector((state: PersonalCabinet) => state.auth, shallowEqual);

    // const dispatch = useDispatch();

    const onSubmit = () => {
        // const passwords = { newPass, repeatNewPass };
        // dispatch(newPassword(passwords));
    };

    const showOrHidePassword = () => {
        const password: HTMLElement | any = document.getElementById('newPass');
        const access: HTMLElement | any = document.getElementsByClassName('inaccess')[0];
        access.classList.toggle('access');
        if (password.type === 'password') {
            password.type = 'text';
        } else {
            password.type = 'password';
        }
    };

    const showOrHidePasswordRepeat = () => {
        const password: HTMLElement | any = document.getElementById('repeatNewPass');
        const access: HTMLElement | any = document.getElementsByClassName('inaccess')[1];
        access.classList.toggle('access');
        if (password.type === 'password') {
            password.type = 'text';
        } else {
            password.type = 'password';
        }
    };

    return (
        <div className="auth">
            <div className="auth__left left">
                <div
                    className="auth__logo 
                        autofocus"
                >
                    <img src={Logo} alt="" />
                    <div className="auth__text">Личный кабинет партнера</div>
                </div>
                <h1 className="auth__heading">
                    <h1>Создать новый пароль</h1>
                </h1>
                <form className="auth__forms forms" onSubmit={onSubmit} style={{ overflow: 'hidden' }}>
                    <div className="auth__group">
                        <label>
                            {error ? (
                                <div className="auth__field field">
                                    <input
                                        onChange={(event: ChangeEvent<HTMLInputElement>) => setNewPass(event.target.value)}
                                        value={newPass}
                                        id="newPass"
                                        type="password"
                                        className="auth__input warning"
                                        autoFocus
                                        required
                                    />
                                    <label className="auth__label">Введите новый пароль</label>
                                    <div onClick={showOrHidePassword} className="inaccess" />
                                </div>
                            ) : (
                                <div className="auth__field field">
                                    <input
                                        onChange={(event: ChangeEvent<HTMLInputElement>) => setNewPass(event.target.value)}
                                        value={newPass}
                                        id="newPass"
                                        type="password"
                                        className="auth__input"
                                        autoFocus
                                        required
                                    />
                                    <label className="auth__label">Введите новый пароль</label>
                                    <div onClick={showOrHidePassword} className="inaccess" />
                                </div>
                            )}
                        </label>
                    </div>
                    <div className="auth__group">
                        <label>
                            {error ? (
                                <div className="auth__field field">
                                    <input
                                        onChange={(event: ChangeEvent<HTMLInputElement>) => setRepeatNewPass(event.target.value)}
                                        value={repeatNewPass}
                                        id="repeatNewPass"
                                        type="password"
                                        className="auth__input warning"
                                        required
                                    />
                                    <label className="auth__label">Повторите пароль</label>
                                    <div onClick={showOrHidePasswordRepeat} className="inaccess" />
                                </div>
                            ) : (
                                <div className="auth__field field">
                                    <input
                                        onChange={(event: ChangeEvent<HTMLInputElement>) => setRepeatNewPass(event.target.value)}
                                        value={repeatNewPass}
                                        id="repeatNewPass"
                                        type="password"
                                        className="auth__input"
                                        required
                                    />
                                    <label className="auth__label">Повторите пароль</label>
                                    <div onClick={showOrHidePasswordRepeat} className="inaccess" />
                                </div>
                            )}
                        </label>
                    </div>
                    {newPass && repeatNewPass ? (
                        <div onClick={onSubmit} className="auth__button">
                            <button type="submit" className="button">
                                Изменить пароль
                            </button>
                        </div>
                    ) : (
                        <div onClick={onSubmit} className="auth__button">
                            <button type="submit" className="button inaccessible">
                                Изменить пароль
                            </button>
                        </div>
                    )}
                    <div className="auth__error">{error}</div>
                    <Link className="auth__back back" to="/">
                        <div className="back__arrow" />
                        Вернуться к авторизации
                    </Link>
                </form>
            </div>
            <div className="auth__right right">
                <div className="right__image image">
                    <img src={Logo} alt="carddex" className="auth__logo" />
                    <div className="image__photo">
                        <div className="photo" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewPassword;
