/**
 * ********** Импорт зависимостей **********
 */
import React, { useState, useEffect, ChangeEvent } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';

/**
 * ********** Импорт экшенов **********
 */
import { fetchDataAccount, changeProfilePassword } from '../../../../actions/profielActions/profileActions';
import { fetchDataNotifications } from '../../../../actions/notificationsActions/notificationsActions';

/**
 * Импорт Компонентов
 * */
import ChangeRegisterData from './ChangeRegisterData/ChangeRegisterData';
import ChangeRegisterPassword from './ChangeRegisterPassword/ChangeRegisterPassword';

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
    const [changeAvatar, setChangeAvatar] = useState(false);

    const [tabOne, setTabOne] = useState(true);
    const [tabTwo, setTabTwo] = useState(false);

    const [tabOpen, setTabOpen] = useState(true);

    /**
     * ********** Импорт состояния из Redux **********
     * */
    const { user, isAuthenticated } = useSelector((state: PersonalCabinet) => state.auth, shallowEqual);
    const { isFetching, profile } = useSelector((state: PersonalCabinet) => state.profile, shallowEqual);

    /**
     * Отправка действий для изменения на сервере
     * */
    const dispatch = useDispatch();

    useEffect(() => {
        const useruuid: string | null = localStorage.getItem('userUuid');
        // @ts-ignore
        const userUuid = useruuid.replace(/['"«»]/g, '');
        // @ts-ignore
        dispatch(fetchDataAccount({ uuid: userUuid }));
        dispatch(fetchDataNotifications());
    }, []);

    const handleOpenChangePhotoMenu = () => {
        setChangeAvatar(!changeAvatar);
    };

    const handleChangeTabsOne = () => {
        const elemTabOne = document.getElementsByClassName('nav__data')[0];
        elemTabOne.classList.add('choosing__tabs');
        const elemTabTwo = document.getElementsByClassName('nav__password')[0];
        elemTabTwo.classList.remove('choosing__tabs');
        setTabOne(true);
        setTabTwo(false);
    };

    const handleChangeTabsTwo = () => {
        const elemTabTwo = document.getElementsByClassName('nav__password')[0];
        elemTabTwo.classList.add('choosing__tabs');
        const elemTabOne = document.getElementsByClassName('nav__data')[0];
        elemTabOne.classList.remove('choosing__tabs');
        setTabOne(false);
        setTabTwo(true);
    };

    // console.log(profile);
    if (user && isAuthenticated && profile && !isFetching) {
        return (
            <section className="main-content width">
                <div className="profile">
                    <div className="profile__header">
                        <span>Профиль</span>
                    </div>
                    <div className="profile__main">
                        <div className="main__user">
                            <div className="user__photo">
                                <div className="photo__pencil" onClick={handleOpenChangePhotoMenu} />
                            </div>
                            {changeAvatar ? (
                                <div className="photo__change">
                                    <ul className="change__list">
                                        <li>Загрузить</li>
                                        <li>Просмотреть</li>
                                        <li>Удалить</li>
                                    </ul>
                                </div>
                            ) : null}
                            <div className="user__info">
                                <div className="info__status">Пользователь</div>
                                <div className="info__name">
                                    {
                                        // @ts-ignore
                                        profile.fullName
                                    }
                                </div>
                                <div className="info__data">
                                    Дата регистрации:
                                    {
                                        // @ts-ignore
                                        profile.registerDate
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="main__nav">
                            <div className="nav__data choosing__tabs" onClick={handleChangeTabsOne}>
                                Данные
                            </div>
                            <div className="nav__password" onClick={handleChangeTabsTwo}>
                                Сменить пароль
                            </div>
                        </div>
                        {tabOne ? <ChangeRegisterData /> : <ChangeRegisterPassword />}
                    </div>
                </div>
            </section>
        );
    }
    return <Loader />;
};

export default Profile;
