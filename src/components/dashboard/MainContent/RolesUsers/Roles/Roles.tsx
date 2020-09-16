/**
 * ********** Импорт основных библиотек из NPM **********
 * */
import React, { useState, useEffect, ChangeEvent } from 'react';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

/**
 * ********** Импорт экшенов **********
 * */
// import { fetchDataRolesUsers } from '../../../../actions/rolesUsersActions';

/**
 * ********** Импорт типов **********
 * */
import { PersonalCabinet } from '../../../../../store/store';
// import { RolesUserReq } from '../../../../constants/RolesUsersTypes';

/**
 * Импорт компонентов
 * */
// import Roles from './Roles/Roles';
// import Users from './Users/Users';

/**
 * ********** Импорт LOADER из __UTILS__ **********
 * */
import Loader from '../../../../../__utils__/Spinner';

/**
 * ********** Импорт файлов стилей **********
 * */

import './Roles.scss';

const Roles = () => {
    /**
     * ********** Импорт состояния из Redux **********
     * */
    const { user, isAuthenticated } = useSelector((state: PersonalCabinet) => state.auth, shallowEqual);
    // const { isFetching, users } = useSelector((state: PersonalCabinet) => state.profile, shallowEqual);

    /**
     * Отправка действий для изменения на сервере
     * */
    const dispatch = useDispatch();

    // useEffect(() => {
    //     const useruuid: string | null = localStorage.getItem('userUuid');
    //     // @ts-ignore
    //     const userUuid = useruuid.replace(/['"«»]/g, '');
    //     // @ts-ignore
    //     dispatch(fetchDataRolesUsers({ uuid: userUuid }));
    // }, []);

    if (isAuthenticated && user) {
        return (
            <section className="main__role">
                <header className="role__header">
                    <div className="header__input">
                        <input type="text" className="input" placeholder="Поиск по ролям пользователей" />
                    </div>
                    <div className="header__button">
                        <button type="button" className="button">
                            <Link to="/add-role" className="button__text">
                                Добавить роль
                            </Link>
                            <div className="button__icon" />
                        </button>
                    </div>
                </header>
                <main className="role__employments">
                    <div className="employments__block">
                        <div className="block__left">
                            <div className="left__photo" />
                            <div className="left__info">
                                <div className="info__name">Администратор</div>
                                <div className="info__email">Открыт доступ ко всем возможностям личного кабинета</div>
                            </div>
                        </div>
                        <div className="block__right">
                            <div className="right__options">
                                <Link to="/edit-role" className="change" />
                                <div className="close" />
                            </div>
                        </div>
                    </div>
                    {/** DELETE BELOW */}
                    <div className="employments__block">
                        <div className="block__left">
                            <div className="left__photo" />
                            <div className="left__info">
                                <div className="info__name">Менеджер по продажам</div>
                                <div className="info__email">Открыт доступ к конфигуратору, истории</div>
                            </div>
                        </div>
                        <div className="block__right">
                            <div className="right__options">
                                <Link to="/edit-role" className="change" />
                                <div className="close" />
                            </div>
                        </div>
                    </div>
                    {/** DELETE BELOW */}
                    <div className="employments__block">
                        <div className="block__left">
                            <div className="left__photo" />
                            <div className="left__info">
                                <div className="info__name">Администратор</div>
                                <div className="info__email">Открыт доступ к конфигуратору, истории</div>
                            </div>
                        </div>
                        <div className="block__right">
                            <div className="right__options">
                                <Link to="/edit-role" className="change" />
                                <div className="close" />
                            </div>
                        </div>
                    </div>
                    {/** END DELETE */}
                </main>
            </section>
        );
    }
    return <Loader />;
};

export default Roles;
