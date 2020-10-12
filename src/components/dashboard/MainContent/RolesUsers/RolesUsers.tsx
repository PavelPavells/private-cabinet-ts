/**
 * ********** Импорт основных библиотек из NPM **********
 * */
import React, { useState, useEffect, ChangeEvent } from 'react';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';

/**
 * ********** Импорт экшенов **********
 * */
// import { fetchDataRolesUsers } from '../../../../actions/rolesUsersActions';
import { fetchDataNotifications } from '../../../../actions/notificationsActions/notificationsActions';

/**
 * ********** Импорт типов **********
 * */
import { PersonalCabinet } from '../../../../store/store';
// import { RolesUserReq } from '../../../../constants/RolesUsersTypes';

/**
 * Импорт компонентов
 * */
import Roles from './Roles/Roles';
import Users from './Users/Users';

/**
 * ********** Импорт LOADER из __UTILS__ **********
 * */
import Loader from '../../../../__utils__/Spinner';

/**
 * ********** Импорт файлов стилей **********
 * */

import './RolesUsers.scss';

const RolesUsers = () => {
    const [tabOne, setTabOne] = useState(true);
    const [tabTwo, setTabTwo] = useState(false);

    /**
     * ********** Импорт состояния из Redux **********
     * */
    const { user, isAuthenticated } = useSelector((state: PersonalCabinet) => state.auth, shallowEqual);
    // const { isFetching, users } = useSelector((state: PersonalCabinet) => state.profile, shallowEqual);

    /**
     * Отправка действий для изменения на сервере
     * */
    const dispatch = useDispatch();

    useEffect(() => {
        // const useruuid: string | null = localStorage.getItem('userUuid');
        // // @ts-ignore
        // const userUuid = useruuid.replace(/['"«»]/g, '');
        // // @ts-ignore
        // dispatch(fetchDataRolesUsers({ uuid: userUuid }));
        dispatch(fetchDataNotifications());
    }, []);

    const handleChangeTabsOne = () => {
        const elemTabOne = document.getElementsByClassName('tab__users')[0];
        elemTabOne.classList.add('choosing__tabs');
        const elemTabTwo = document.getElementsByClassName('tab__roles')[0];
        elemTabTwo.classList.remove('choosing__tabs');
        setTabOne(true);
        setTabTwo(false);
    };

    const handleChangeTabsTwo = () => {
        const elemTabTwo = document.getElementsByClassName('tab__roles')[0];
        elemTabTwo.classList.add('choosing__tabs');
        const elemTabOne = document.getElementsByClassName('tab__users')[0];
        elemTabOne.classList.remove('choosing__tabs');
        setTabOne(false);
        setTabTwo(true);
    };
    return (
        <section className="users">
            <header className="users__tab">
                <div className="tab__users choosing__tabs" onClick={handleChangeTabsOne}>
                    Пользователи
                </div>
                <div className="tab__roles" onClick={handleChangeTabsTwo}>
                    Роли
                </div>
            </header>
            {tabOne ? <Users /> : <Roles />}
        </section>
    );
};

export default RolesUsers;
