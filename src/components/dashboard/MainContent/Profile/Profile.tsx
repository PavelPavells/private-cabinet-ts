/**
 * ********** Импорт зависимостей **********
 */
import React, { useState, useEffect, ChangeEvent, SyntheticEvent } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';

/**
 * ********** Импорт экшенов **********
 */
import { fetchDataAccount } from '../../../../actions/profileActions';

/**
 * Импорт Лоадера из утилит
 * */
import Loader from '../../../../__utils__/Spinner';

/**
 * ********** Импорт стилей **********
 */
import './Profile.scss';
import { PersonalCabinet } from '../../../../store/store';

const Profile = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [repeatpass, setRepeatpass] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [secondname, setSecondname] = useState('');
    const [phone, setPhone] = useState('');
    const [agreement, setAgreement] = useState(0);
    const [changeAvatar, setChangeAvatar] = useState(false);

    /**
     * ********** Импорт состояния из Redux **********
     * */
    const { user, isAuthenticated } = useSelector((state: PersonalCabinet) => state.auth, shallowEqual);
    // const { profile } = useSelector((state: PersonalCabinet) => state.profile, shallowEqual);

    /**
     * Отправка действий для изменения на сервере
     * */
    // const dispatch = useDispatch();

    useEffect(() => {
        // if (window.location.search) {
        //     getAccessRegister(window.location.search.split('=')[1]);
        // }
    }, []);

    /** ********** CHANGE DATA FOR REIGSTER ACCOUNT ********** */
    // @ts-ignore
    // onChange = (e) => {
    //     this.setState({ [e.target.id]: e.target.value });
    // };

    /** ********** RESPONSE DATA FOR LOGIN ACCOUNT ********** */
    // @ts-ignore
    // onSubmit = () => {

    // };
    if (user && isAuthenticated) {
        return (
            <div className="main-content width">
                <div className="profile">
                    <div className="profile__header">
                        <span>Профиль</span>
                    </div>
                    <div className="profile__main">
                        <div className="main__user">
                            <div onClick={() => setChangeAvatar(!changeAvatar)} className="user__photo" />
                            {changeAvatar ? (
                                <div className="photo__change">
                                    <ul className="change__list">
                                        <li>Загрузить фото</li>
                                        <li>Посмотреть фото</li>
                                        <li>Удалить фото</li>
                                    </ul>
                                </div>
                            ) : null}
                            <div className="user__info">
                                <div className="info__status">Пользователь</div>
                                <div className="info__name">Харитоновская Инга Ивановна</div>
                                <div className="info__data">Дата регистрации: 20.08.2020</div>
                            </div>
                        </div>
                        <div className="main__inputs">
                            <form className="inputs__forms">
                                <div className="forms__wrapper">
                                    <div className="forms__field">
                                        <label className="field__label">Ваше ФИО</label>
                                        <input className="field__input" />
                                    </div>
                                    <div className="forms__field">
                                        <label className="field__label">Телефон</label>
                                        <input className="field__input" />
                                    </div>
                                </div>
                                <div className="forms__wrapper">
                                    <div className="forms__field">
                                        <label className="field__label">E-mail</label>
                                        <input className="field__input" />
                                    </div>
                                    <div className="forms__field">
                                        <label className="field__label">Должность</label>
                                        <input className="field__input" />
                                    </div>
                                </div>
                                <div className="forms__wrapper">
                                    <div className="forms__field">
                                        <label className="field__label">Пароль</label>
                                        <input className="field__input" />
                                    </div>
                                </div>
                                <div className="forms__wrapper">
                                    <div className="forms__field">
                                        <label className="field__label">Новый пароль</label>
                                        <input className="field__input" />
                                    </div>
                                    <div className="forms__field">
                                        <label className="field__label">Подтвердите пароль</label>
                                        <input className="field__input" />
                                    </div>
                                </div>
                                <div className="forms__notifications">
                                    <div className="notifications__wrapper">
                                        <input type="checkbox" id="offer_news" className="wrapper__news" />
                                        <label htmlFor="offer_news">Отправлять уведомления о новостях</label>
                                    </div>
                                    <div className="notifications__wrapper">
                                        <input type="checkbox" id="personal_offer" className="wrapper__offer" />
                                        <label htmlFor="personal_offer">Отправлять уведомления о персональных предложения</label>
                                    </div>
                                    <div className="notifications__wrapper">
                                        <input type="checkbox" id="private_cabinet" className="wrapper__updates" />
                                        <label htmlFor="private_cabinet">Отправлять важную информацию об обновлениях Кабинета</label>
                                    </div>
                                </div>
                                <div className="forms__button">
                                    <button type="submit" className="button">
                                        Сохранить
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    return <Loader />;
};

export default Profile;
