import React, { useState } from 'react';
import { shallowEqual, useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
// import { fetchDataRolesUsers } from '../../../../actions/rolesUsersActions';
import { PersonalCabinet } from '../../../../../store/store';
// import { RolesUserReq } from '../../../../constants/RolesUsersTypes';
import AddUsers from './AddUsers/AddUsers';
import EditUsers from './EditUsers/EditUsers';
import Loader from '../../../../../__utils__/Spinner';

import './Users.scss';

const Users = () => {
    const [addUser, setAddUser] = useState(false);
    const [editUser, setEditUser] = useState(false);
    const [closeAddUser, setCloseAddUser] = useState(false);
    const [closeEditUser, setCloseEditUser] = useState(false);

    const { user, isAuthenticated } = useSelector((state: PersonalCabinet) => state.auth, shallowEqual);

    // const dispatch = useDispatch();

    const handleChangeAddUser = () => {
        setAddUser(!addUser);
        setCloseAddUser(!closeAddUser);
    };

    const handleChangeEditUser = () => {
        setEditUser(!editUser);
        setCloseEditUser(!closeEditUser);
    };

    if (isAuthenticated && user) {
        return (
            <section className="main__utilizer">
                <header className="utilizer__header">
                    <div className="header__input">
                        <input type="text" className="input" placeholder="Поиск по пользователям" />
                    </div>
                    <div className="header__button">
                        <button onClick={handleChangeAddUser} type="button" className="button">
                            <div className="button__text">Новый пользователь</div>
                            {/* <div className="button__icon" /> */}
                        </button>
                    </div>
                </header>
                {addUser ? <AddUsers addUser={addUser} setAddUser={setAddUser} /> : null}
                <main className="utilizer__employments">
                    <header className="employments__header">
                        <div className="header__text">
                            <span>Пользователь</span>
                        </div>
                        <div className="header__text">Роль</div>
                    </header>
                    <div className="employments__block">
                        <div className="block__left">
                            <div className="left__photo" />
                            <div className="left__info">
                                <div className="info__name">Харитоновская И. И.</div>
                                <div className="info__email">charitonovskay@carddex.ru</div>
                            </div>
                        </div>
                        <div className="block__right">
                            <div className="right__post">
                                <div className="post">Менеджер по продажам</div>
                                <div className="post">Менеджер снабжения</div>
                            </div>
                            <div className="right__options">
                                <div onClick={handleChangeEditUser} className="change" />
                                <div className="close" />
                            </div>
                        </div>
                    </div>
                    {editUser ? <EditUsers editUser={editUser} setEditUser={setEditUser} /> : null}
                    {/** DELETE */}
                    <div className="employments__block">
                        <div className="block__left">
                            <div className="left__photo" />
                            <div className="left__info">
                                <div className="info__name">Харитоновская И. И.</div>
                                <div className="info__email">charitonovskay@carddex.ru</div>
                            </div>
                        </div>
                        <div className="block__right">
                            <div className="right__post">
                                <div className="post">Менеджер по продажам</div>
                            </div>
                            <div className="right__options">
                                <div onClick={handleChangeEditUser} className="change" />
                                <div className="close" />
                            </div>
                        </div>
                    </div>
                    {/** DELETE */}
                    <div className="employments__block">
                        <div className="block__left">
                            <div className="left__photo" />
                            <div className="left__info">
                                <div className="info__name">Харитоновская И. И.</div>
                                <div className="info__email">charitonovskay@carddex.ru</div>
                            </div>
                        </div>
                        <div className="block__right">
                            <div className="right__post">
                                <div className="post">Администратор</div>
                            </div>
                            <div className="right__options">
                                <div onClick={handleChangeEditUser} className="change" />
                                <div className="close" />
                            </div>
                        </div>
                    </div>
                    {/** DELETE */}
                    <div className="employments__block">
                        <div className="block__left">
                            <div className="left__photo" />
                            <div className="left__info">
                                <div className="info__name">Харитоновская И. И.</div>
                                <div className="info__email">charitonovskay@carddex.ru</div>
                            </div>
                        </div>
                        <div className="block__right">
                            <div className="right__post">
                                <div className="post">Менеджер снабжения</div>
                            </div>
                            <div className="right__options">
                                <div onClick={handleChangeEditUser} className="change" />
                                <div className="close" />
                            </div>
                        </div>
                    </div>
                    {/** DELETE */}
                    <div className="employments__block">
                        <div className="block__left">
                            <div className="left__photo" />
                            <div className="left__info">
                                <div className="info__name">Харитоновская И. И.</div>
                                <div className="info__email">charitonovskay@carddex.ru</div>
                            </div>
                        </div>
                        <div className="block__right">
                            <div className="right__post">
                                <div className="post">Менеджер по продажам</div>
                            </div>
                            <div className="right__options">
                                <div onClick={handleChangeEditUser} className="change" />
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

export default Users;
