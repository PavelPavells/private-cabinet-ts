/**
 * ********** Импорт основных библиотек из NPM **********
 * */
import React, { useEffect, SyntheticEvent, useState, ChangeEvent } from 'react';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
// import { Link } from 'react-router-dom';

/**
 * ********** Импорт экшенов **********
 * */
import { fetchDataAddRole } from '../../../../../../actions/roleActions/addRoleActions';

/**
 * ********** Импорт типов **********
 * */
import { PersonalCabinet } from '../../../../../../store/store';
import { AddRoleReq } from '../../../../../../constants/roleTypes/addRole';

/**
 * ********** Импорт LOADER из __UTILS__ **********
 * */
import Loader from '../../../../../../__utils__/Spinner';

/**
 * ********** Импорт файлов стилей **********
 * */
import '../../../../../../styles/input-checkbox.scss';
import './AddRoles.scss';

// @ts-ignore
// eslint-disable-next-line react/prop-types
const AddRoles = ({ addRoles, setAddRole }) => {
    const [role, setRole] = useState('');
    const [id, setId] = useState('');
    const [description, setDescription] = useState('');
    const [checkboxOne, setCheckboxOne] = useState(false);
    const [checkboxTwo, setCheckboxTwo] = useState(false);
    const [checkboxThree, setCheckboxThree] = useState(false);
    const [checkboxFour, setCheckboxFour] = useState(false);

    /**
     * ********** Импорт состояния из Redux **********
     * */
    const { user, isAuthenticated } = useSelector((state: PersonalCabinet) => state.auth, shallowEqual);
    // const { isFetching, users } = useSelector((state: PersonalCabinet) => state.addRole, shallowEqual);

    /**
     * Отправка действий для изменения на сервере
     * */
    const dispatch = useDispatch();

    useEffect(() => {});

    const handleSubmitAddRoles = (event: SyntheticEvent) => {
        event.preventDefault();
        const addRolesRequest: AddRoleReq = {
            role,
            id,
            description,
            checkboxOne,
            checkboxTwo,
            checkboxThree,
            checkboxFour
        };
        dispatch(fetchDataAddRole(addRolesRequest));
    };

    const handleChangeCloseWindow = () => {
        setAddRole(false);
    };

    if (isAuthenticated && user) {
        return (
            <>
                {addRoles ? (
                    <div className="add__inputs">
                        <div onClick={handleChangeCloseWindow} className="forms__header">
                            <span>Добавить роль</span>
                            <div className="header__icon">
                                <div className="icon" />
                            </div>
                        </div>
                        <div className="inputs__forms">
                            <div className="forms__subheader" style={{ marginTop: '40px' }}>
                                Информация
                            </div>
                            <div className="forms__wrapper">
                                <div className="forms__field">
                                    <input
                                        onChange={(event: ChangeEvent<HTMLInputElement>) => setRole(event.target.value)}
                                        type="text"
                                        name="login"
                                        value={role}
                                        className="field__input"
                                        required
                                    />
                                    <label className="field__label">Название роли</label>
                                </div>
                                <div className="forms__field">
                                    <label className="field__label">Роль ID</label>
                                    <input
                                        onChange={(event: ChangeEvent<HTMLInputElement>) => setId(event.target.value)}
                                        type="text"
                                        name="email"
                                        value={id}
                                        className="field__input"
                                        pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
                                        title="Ваш E-mail должен содержать @ и минимум одну точку"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="forms__wrapper" style={{ width: '100%', marginBottom: '40px' }}>
                                <div className="forms__field" style={{ width: '100%' }}>
                                    <label className="field__label">Описание роли</label>
                                    <input
                                        onChange={(event: ChangeEvent<HTMLInputElement>) => setDescription(event.target.value)}
                                        type="text"
                                        name="lastName"
                                        value={description}
                                        className="field__input"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="forms__subheader">Привелегии и права</div>
                            <div className="forms__notifications">
                                <div className="notifications__wrapper">
                                    <input
                                        name="checkboxOne"
                                        type="checkbox"
                                        id="checkboxOne"
                                        onChange={() => setCheckboxOne(!checkboxOne)}
                                        checked={checkboxOne}
                                        className="wrapper__news switch"
                                    />
                                    <label htmlFor="checkboxOne">Разрешить использовать конфигуратор</label>
                                </div>
                                <div className="notifications__wrapper">
                                    <input
                                        name="checkboxTwo"
                                        type="checkbox"
                                        id="checkboxTwo"
                                        onChange={() => setCheckboxTwo(!checkboxTwo)}
                                        checked={checkboxTwo}
                                        className="wrapper__offer switch"
                                    />
                                    <label htmlFor="checkboxTwo">Разрешить редактировать профиль</label>
                                </div>
                                <div className="notifications__wrapper">
                                    <input
                                        name="checkboxThree"
                                        type="checkbox"
                                        id="checkboxThree"
                                        onChange={() => setCheckboxThree(!checkboxThree)}
                                        checked={checkboxThree}
                                        className="wrapper__updates switch"
                                    />
                                    <label htmlFor="checkboxThree">Разрешить экспортировать продукцию Carddex</label>
                                </div>
                                <div className="notifications__wrapper">
                                    <input
                                        name="checkboxFour"
                                        type="checkbox"
                                        id="checkboxFour"
                                        onChange={() => setCheckboxFour(!checkboxFour)}
                                        checked={checkboxFour}
                                        className="wrapper__updates switch"
                                    />
                                    <label htmlFor="checkboxFour">Разрешить просматривать историю компании</label>
                                </div>
                            </div>
                            <div className="forms__button">
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

export default AddRoles;
