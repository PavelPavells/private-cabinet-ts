/**
 * ********** Импорт основных библиотек из NPM **********
 * */
import React, { useState } from 'react';
import { shallowEqual, useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';

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
import AddRoles from './AddRoles/AddRoles';
import EditRoles from './EditRoles/EditRoles';

/**
 * ********** Импорт LOADER из __UTILS__ **********
 * */
import Loader from '../../../../../__utils__/Spinner';

/**
 * ********** Импорт файлов стилей **********
 * */

import './Roles.scss';

const Roles = () => {
    const [addRole, setAddRole] = useState(false);
    const [editRole, setEditRole] = useState(false);
    const [closeAddRole, setCloseAddRole] = useState(false);
    const [closeEditRole, setCloseEditRole] = useState(false);

    /**
     * ********** Импорт состояния из Redux **********
     * */
    const { user, isAuthenticated } = useSelector((state: PersonalCabinet) => state.auth, shallowEqual);
    // const { isFetching, role } = useSelector((state: PersonalCabinet) => state.role, shallowEqual);

    /**
     * Отправка действий для изменения на сервере
     * */
    // const dispatch = useDispatch();

    const handleChangeAddRole = () => {
        setAddRole(!addRole);
        setCloseAddRole(!closeAddRole);
    };

    const handleChangeEditRole = () => {
        setEditRole(!editRole);
        setCloseEditRole(!closeEditRole);
    };

    if (isAuthenticated && user) {
        return (
            <section className="main__role">
                <header className="role__header">
                    <div className="header__input">
                        <input type="text" className="input" placeholder="Поиск по ролям пользователей" />
                    </div>
                    <div className="header__button">
                        <button onClick={handleChangeAddRole} type="button" className="button">
                            <div className="button__text">Добавить роль</div>
                            <div className="button__icon" />
                        </button>
                    </div>
                </header>
                {addRole ? <AddRoles addRoles={addRole} setAddRole={setAddRole} /> : null}
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
                                <div onClick={handleChangeEditRole} className="change" />
                                <div className="close" />
                            </div>
                        </div>
                    </div>
                    {editRole ? <EditRoles editRoles={editRole} setEditRoles={setEditRole} /> : null}
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
                                <div onClick={handleChangeEditRole} className="change" />
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
                                <div onClick={handleChangeEditRole} className="change" />
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
