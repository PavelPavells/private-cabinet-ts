import React, { useState, ChangeEvent } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { PersonalCabinet } from '../../store/store';
import { resetPassword } from '../../actions/authActions/authActions';
import Logo from '../../images/Auth/carddex_logo.svg';

import './Auth.scss';

const Reset = () => {
    const [email, setEmail] = useState('');

    const { error } = useSelector((state: PersonalCabinet) => state.auth, shallowEqual);

    const dispatch = useDispatch();

    const onSubmit = () => {
        dispatch(resetPassword(email));
    };

    return (
        <div className="auth">
            <div className="auth__left left">
                <div className="auth__logo">
                    <img src={Logo} alt="" />
                    <div className="auth__text">Личный кабинет партнера</div>
                </div>
                <div className="auth__heading">
                    <h1>Восстановить пароль</h1>
                </div>
                <div className="auth__necessary">Введите ваш e-mail и мы пришлем ссылку для восстановления пароля</div>
                <div className="auth__forms forms">
                    <div className="auth__group">
                        <label>
                            <div className="auth__field field">
                                <input
                                    onChange={(event: ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)}
                                    value={email}
                                    id="email"
                                    type="text"
                                    className="auth__input"
                                    // pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
                                    title="Ваш E-mail должен содержать @ и минимум одну точку"
                                    autoFocus
                                    required
                                />
                                <label className="auth__label">Введите e-mail</label>
                            </div>
                        </label>
                    </div>
                    {email ? (
                        <div onClick={onSubmit} className="auth__button">
                            <button type="submit" className="button">
                                Восстановить
                            </button>
                        </div>
                    ) : (
                        <div onClick={onSubmit} className="auth__button">
                            <button type="submit" className="button inaccessible">
                                Восстановить
                            </button>
                        </div>
                    )}
                    <div className="auth__error">{error}</div>
                    <Link className="auth__back back" to="/">
                        <div className="back__arrow" />
                        Вернуться к авторизации
                    </Link>
                </div>
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

export default Reset;
