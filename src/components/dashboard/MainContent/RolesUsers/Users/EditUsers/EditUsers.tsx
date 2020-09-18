/**
 * ********** Импорт основных библиотек из NPM **********
 * */
import React, { useEffect, SyntheticEvent, useState, ChangeEvent } from 'react';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
// import { Link } from 'react-router-dom';

/**
 * ********** Импорт экшенов **********
 * */
import { fetchDataEditUser } from '../../../../../../actions/userActions/editUserActions';

/**
 * ********** Импорт типов **********
 * */
import { PersonalCabinet } from '../../../../../../store/store';
import { EditUserReq } from '../../../../../../constants/userTypes/editUser';

/**
 * ********** Импорт LOADER из __UTILS__ **********
 * */
import Loader from '../../../../../../__utils__/Spinner';

/**
 * ********** Импорт файлов стилей **********
 * */
import '../../../../../../styles/input-checkbox.scss';
import './EditUsers.scss';

// eslint-disable-next-line import/order
import NumberFormat from 'react-number-format';

// @ts-ignore
// eslint-disable-next-line react/prop-types
const EditUsers = ({ editUser, setEditUser }) => {
    const [fullName, setFullName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [post, setPost] = useState('');
    const [pass, setPass] = useState('');
    const [repeatPass, setRepeatPass] = useState('');
    const [checkboxOne, setCheckboxOne] = useState(false);
    const [checkboxTwo, setCheckboxTwo] = useState(false);
    /**
     * ********** Импорт состояния из Redux **********
     * */
    const { user, isAuthenticated } = useSelector((state: PersonalCabinet) => state.auth, shallowEqual);
    // const { isFetching, users } = useSelector((state: PersonalCabinet) => state.editUser, shallowEqual);

    /**
     * Отправка действий для изменения на сервере
     * */
    const dispatch = useDispatch();

    useEffect(() => {});

    const handleSubmitAddRoles = (event: SyntheticEvent) => {
        event.preventDefault();
        const editUserRequest: EditUserReq = {
            fullName,
            phone,
            email,
            post,
            pass,
            repeatPass,
            checkboxOne,
            checkboxTwo
        };
        dispatch(fetchDataEditUser(editUserRequest));
    };

    const showOrHidePasswordNew = () => {
        const password: HTMLElement | any = document.getElementById('passNew');
        const access: HTMLElement | any = document.getElementsByClassName('inaccess')[0];
        access.classList.toggle('access');
        if (password.type === 'password') {
            password.type = 'text';
        } else {
            password.type = 'password';
        }
    };

    const showOrHidePasswordRepeat = () => {
        const password: HTMLElement | any = document.getElementById('passRepeat');
        const access: HTMLElement | any = document.getElementsByClassName('inaccess')[1];
        access.classList.toggle('access');
        if (password.type === 'password') {
            password.type = 'text';
        } else {
            password.type = 'password';
        }
    };

    const handleChangeCloseWindow = () => {
        setEditUser(false);
    };

    if (isAuthenticated && user) {
        return (
            <>
                {editUser ? (
                    <div className="edit__users">
                        <div className="forms__header">
                            <span>Редактировать пользователя</span>
                            <div onClick={handleChangeCloseWindow} className="header__icon">
                                <div className="icon" />
                            </div>
                        </div>
                        <div className="inputs__forms">
                            <div className="forms__wrapper">
                                <div className="forms__field">
                                    <input
                                        onChange={(event: ChangeEvent<HTMLInputElement>) => setFullName(event.target.value)}
                                        type="text"
                                        name="login"
                                        value={fullName}
                                        className="field__input"
                                        required
                                    />
                                    <label className="field__label">ФИО</label>
                                </div>
                                <div className="forms__field">
                                    <label className="field__label">Телефон</label>
                                    <NumberFormat
                                        onChange={(event: ChangeEvent<HTMLInputElement>) => setPhone(event.target.value)}
                                        value={phone}
                                        id="phone"
                                        type="tel"
                                        className="field__input"
                                        format="+7(###)###-##-##"
                                        minLength={7}
                                        pattern="^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$"
                                        title="Поле заполнено неверно"
                                        mask="_"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="forms__wrapper">
                                <div className="forms__field">
                                    <label className="field__label">E-mail</label>
                                    <input
                                        onChange={(event: ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)}
                                        type="text"
                                        name="email"
                                        value={email}
                                        className="field__input"
                                        pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
                                        title="Ваш E-mail должен содержать @ и минимум одну точку"
                                        required
                                    />
                                </div>
                                <div className="forms__field">
                                    <label className="field__label">Должность</label>
                                    <input
                                        onChange={(event: ChangeEvent<HTMLInputElement>) => setPost(event.target.value)}
                                        type="text"
                                        name="lastName"
                                        value={post}
                                        className="field__input"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="forms__wrapper">
                                <div className="forms__field">
                                    <label className="field__label">Пароль</label>
                                    <input
                                        onChange={(event: ChangeEvent<HTMLInputElement>) => setPass(event.target.value)}
                                        type="password"
                                        id="passNew"
                                        name="newPass"
                                        value={pass}
                                        className="field__input"
                                        minLength={8}
                                        maxLength={255}
                                        pattern="^(?=.*[A-Za-zА-Яа-я])(?=.*\d)[A-Za-zА-Яа-я\d]{8,}$"
                                        title="Поле должно содержать минимум 8 знаков, цифры и буквы"
                                        required
                                    />
                                    <div onClick={showOrHidePasswordNew} className="inaccess" />
                                </div>
                                <div className="forms__field">
                                    <label className="field__label">Подтвердите новый пароль</label>
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
                            </div>
                            <div className="forms__notifications">
                                <div className="notifications__wrapper">
                                    <input
                                        name="checkboxOne"
                                        type="checkbox"
                                        id="checkboxOne"
                                        onChange={() => setCheckboxOne(!checkboxOne)}
                                        checked={checkboxOne}
                                        className="wrapper__news switch--red"
                                    />
                                    <label htmlFor="checkboxOne">Заблокировать пользователя</label>
                                </div>
                            </div>
                            <div className="forms__button">
                                <div className="edit">Удалить пользователя</div>
                                <div className="button">Добавить</div>
                            </div>
                        </div>
                    </div>
                ) : null}
            </>
        );
    }
    return <Loader />;
};

export default EditUsers;
