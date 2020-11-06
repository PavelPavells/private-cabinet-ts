import React, { useState, useEffect, ChangeEvent } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { changeProfilePassword } from '../../../../../actions/profielActions/profileActions';
import './ChangeRegisterData.scss';
import { PersonalCabinet } from '../../../../../store/store';
// eslint-disable-next-line import/order
import NumberFormat from 'react-number-format';

const ChangeRegisterData = () => {
    const [login, setLogin] = useState('');
    const [lastName, setLastName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [secondName, setSecondName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [position, setPosition] = useState('');
    const [checkboxOne, setCheckboxOne] = useState(false);
    const [checkboxTwo, setCheckboxTwo] = useState(false);
    const [checkboxThree, setCheckboxThree] = useState(false);

    const { profile } = useSelector((state: PersonalCabinet) => state.profile, shallowEqual);

    const dispatch = useDispatch();

    useEffect(() => {
        // @ts-ignore
        setLogin(profile.accountLogin ? profile.accountLogin : '');
        // @ts-ignore
        setLastName(profile.lastName ? profile.lastName : '');
        // @ts-ignore
        setEmail(profile.email ? profile.email : '');
        // @ts-ignore
        setFirstName(profile.firstName ? profile.firstName : '');
        // @ts-ignore
        setSecondName(profile.secondName ? profile.secondName : '');
        // @ts-ignore
        setPosition(profile.position ? profile.position : '');
        // @ts-ignore
        setPhone(profile.phone ? profile.phone : '');
    }, [profile]);

    // @ts-ignore
    const onSubmit = () => {
        // eslint-disable-next-line no-shadow
        const user: string | null = localStorage.getItem('userUuid');
        // @ts-ignore
        const userUuid = user.replace(/['"«»]/g, '');
        const dataProfile = {
            userUuid
        };
        dispatch(changeProfilePassword(dataProfile));
    };

    return (
        <div className="main__inputs">
            <div className="inputs__forms">
                <div className="forms__wrapper">
                    <div className="forms__field">
                        <input
                            onChange={(event: ChangeEvent<HTMLInputElement>) => setLogin(event.target.value)}
                            type="text"
                            name="login"
                            value={login}
                            className="field__input"
                            required
                        />
                        <label className={login ? 'field__label active' : 'field__label'}>Логин</label>
                    </div>
                    <div className="forms__field">
                        <label className={email ? 'field__label active' : 'field__label'}>E-mail</label>
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
                </div>
                <div className="forms__wrapper">
                    <div className="forms__field">
                        <label className={lastName ? 'field__label active' : 'field__label'}>Фамилия</label>
                        <input
                            onChange={(event: ChangeEvent<HTMLInputElement>) => setLastName(event.target.value)}
                            type="text"
                            name="lastName"
                            value={lastName}
                            className="field__input"
                            required
                        />
                    </div>
                    <div className="forms__field">
                        <label className={firstName ? 'field__label active' : 'field__label'}>Имя</label>
                        <input
                            onChange={(event: ChangeEvent<HTMLInputElement>) => setFirstName(event.target.value)}
                            type="text"
                            name="firstName"
                            value={firstName}
                            className="field__input"
                            required
                        />
                    </div>
                </div>
                <div className="forms__wrapper">
                    <div className="forms__field">
                        <label className={secondName ? 'field__label active' : 'field__label'}>Отчеcтво</label>
                        <input
                            onChange={(event: ChangeEvent<HTMLInputElement>) => setSecondName(event.target.value)}
                            type="text"
                            name="secondName"
                            value={secondName}
                            className="field__input"
                            required
                        />
                    </div>
                </div>
                <div className="forms__wrapper">
                    <div className="forms__field">
                        <label className={position ? 'field__label active' : 'field__label'}>Должность</label>
                        <input
                            onChange={(event: ChangeEvent<HTMLInputElement>) => setPosition(event.target.value)}
                            type="text"
                            name="position"
                            value={position}
                            className="field__input"
                        />
                    </div>
                    <div className="forms__field">
                        <label className={phone ? 'field__label active' : 'field__label'}>Телефон</label>
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
                <div className="forms__notifications">
                    <div className="notifications__wrapper">
                        <input
                            name="checkboxOne"
                            type="checkbox"
                            id="checkboxOne"
                            onChange={() => setCheckboxOne(!checkboxOne)}
                            checked={checkboxOne}
                            className="wrapper__news"
                        />
                        <label htmlFor="checkboxOne">Отправлять уведомления о новостях</label>
                    </div>
                    <div className="notifications__wrapper">
                        <input
                            name="checkboxTwo"
                            type="checkbox"
                            id="checkboxTwo"
                            onChange={() => setCheckboxTwo(!checkboxTwo)}
                            checked={checkboxTwo}
                            className="wrapper__offer"
                        />
                        <label htmlFor="checkboxTwo">Отправлять уведомления о персональных предложения</label>
                    </div>
                    <div className="notifications__wrapper">
                        <input
                            name="checkboxThree"
                            type="checkbox"
                            id="checkboxThree"
                            onChange={() => setCheckboxThree(!checkboxThree)}
                            checked={checkboxThree}
                            className="wrapper__updates"
                        />
                        <label htmlFor="checkboxThree">Отправлять важную информацию об обновлениях Кабинета</label>
                    </div>
                </div>
                <div className="forms__button">
                    <div className="button">Добавить</div>
                </div>
            </div>
        </div>
    );
};

export default ChangeRegisterData;
