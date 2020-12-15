import React, { useState, useEffect, ChangeEvent, SyntheticEvent } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
// @ts-ignore
import NumberFormat from 'react-number-format';
// @ts-ignore
import CreatableSelect from 'react-select/creatable';
import { Link } from 'react-router-dom';
import Logo from '../../images/Auth/carddex_logo.svg';
import { PersonalCabinet } from '../../store/store';
import { registerUser, getAccessRegister } from '../../actions/authActions/authActions';

import './Auth.scss';

import SuccessRegister from './successRegister/successRegister';
import Loader from '../../__utils__/Spinner';

const Register = () => {
    const [invitecode, setInviteCode] = useState('');
    const [appUuid] = useState('124124124124');
    const [login, setLogin] = useState('');
    const [pass, setPass] = useState('');
    const [repeatpass, setRepeatpass] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [secondname, setSecondname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [company, setCompany] = useState('');
    const [inn, setInn] = useState('');
    const [address, setAddress] = useState('');
    const [website, setWebsite] = useState('');
    const [business, setBusiness] = useState('Торговая компания');
    const [agreement, setAgreement] = useState(0);

    const { invitePayload, errorRegisterResult, businessTypes, isFetching } = useSelector(
        (state: PersonalCabinet) => state.auth,
        shallowEqual
    );

    const dispatch = useDispatch();

    useEffect(() => {
        window.addEventListener('load', function cb() {
            const elem = document.getElementsByClassName('auth__label');
            // eslint-disable-next-line no-plusplus
            for (let i = 0; i < elem.length; i++) {
                // @ts-ignore
                elem[i].classList.add('active');
            }
        });

        if (window.location.search) {
            getAccessRegister(window.location.search.split('=')[1]);
        }
    }, []);

    useEffect(() => {
        setEmail(invitePayload.regEmail);
        setLogin(invitePayload.regEmail);
        setInviteCode(invitePayload.inviteCode);
    }, [invitePayload]);

    const showOrHidePassword = () => {
        const password: HTMLElement | any = document.getElementById('pass');
        const access: HTMLElement | any = document.getElementsByClassName('inaccess')[0];
        access.classList.toggle('access');
        if (password.type === 'password') {
            password.type = 'text';
        } else {
            password.type = 'password';
        }
    };

    const showOrHidePasswordRepeat = () => {
        const password: HTMLElement | any = document.getElementById('repeatpass');
        const access: HTMLElement | any = document.getElementsByClassName('inaccess')[1];
        access.classList.toggle('access');
        if (password.type === 'password') {
            password.type = 'text';
        } else {
            password.type = 'password';
        }
    };

    const onSubmit = (event: SyntheticEvent) => {
        event.preventDefault();
        const newUser = {
            invitecode,
            appUuid,
            login,
            pass,
            firstname,
            lastname,
            secondname,
            email,
            phone,
            company,
            inn,
            address,
            website,
            business,
            agreement
        };
        if (agreement && pass === repeatpass) {
            dispatch(registerUser(newUser));
        }
    };

    const handleClickCheckbox = () => {
        setAgreement(+!agreement);
    };

    const handleChangeSelect = (value: any) => {
        setBusiness(value.partnerBusinessTypeName);
    };

    if (errorRegisterResult.code === 0) {
        return <SuccessRegister />;
    }

    if (!isFetching && businessTypes) {
        return (
            <div className="auth">
                <div className="auth__left left">
                    <div className="auth__logo">
                        <img src={Logo} alt="" />
                        <div className="auth__text">Личный кабинет партнера</div>
                    </div>
                    <div className="auth__heading">
                        <h1>Регистрация</h1>
                        <div className="auth__necessary">Поля, отмеченные знаком «*», обязательны для заполнения</div>
                    </div>
                    <form className="auth__forms forms scroll" onSubmit={onSubmit}>
                        <div className="auth__group">
                            <label>
                                {errorRegisterResult.code === 6 || errorRegisterResult.code === 4 ? (
                                    <div className="auth__field">
                                        <input
                                            onChange={(event: ChangeEvent<HTMLInputElement>) => setLogin(event.target.value)}
                                            value={login}
                                            id="login"
                                            type="text"
                                            className="auth__input warning"
                                            minLength={1}
                                            maxLength={255}
                                            required
                                        />
                                        <label className={login ? 'auth__label active' : 'auth__label'}>Придумайте логин *</label>
                                    </div>
                                ) : (
                                    <div className="auth__field">
                                        <input
                                            onChange={(event: ChangeEvent<HTMLInputElement>) => setLogin(event.target.value)}
                                            value={login}
                                            id="login"
                                            type="text"
                                            className="auth__input"
                                            minLength={1}
                                            maxLength={255}
                                            required
                                        />
                                        <label className={login ? 'auth__label active' : 'auth__label'}>Придумайте логин *</label>
                                    </div>
                                )}
                            </label>
                        </div>
                        <div className="auth__group" style={{ height: '60px' }}>
                            <label>
                                {pass !== repeatpass ? (
                                    <>
                                        <div className="auth__field field">
                                            <input
                                                onChange={(event: ChangeEvent<HTMLInputElement>) => setPass(event.target.value)}
                                                value={pass}
                                                id="pass"
                                                type="password"
                                                className="auth__input warning"
                                                autoCorrect="off"
                                                minLength={8}
                                                maxLength={255}
                                                pattern="^(?=.*[A-Za-zА-Яа-я])(?=.*\d)[A-Za-zА-Яа-я\d]{8,}$"
                                                title="Поле должно содержать минимум 8 знаков, цифры и буквы"
                                                required
                                            />
                                            <label className="auth__label">Придумайте пароль *</label>
                                            <div onClick={showOrHidePassword} className="inaccess" />
                                        </div>
                                        <div style={{ color: 'grey', fontSize: '12px' }}>
                                            Поле должно содержать минимум 8 знаков, цифры и буквы *
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div className="auth__field field">
                                            <input
                                                onChange={(event: ChangeEvent<HTMLInputElement>) => setPass(event.target.value)}
                                                value={pass}
                                                id="pass"
                                                type="password"
                                                className="auth__input"
                                                autoCorrect="off"
                                                minLength={8}
                                                maxLength={255}
                                                pattern="^(?=.*[A-Za-zА-Яа-я])(?=.*\d)[A-Za-zА-Яа-я\d]{8,}$"
                                                title="Поле должно содержать минимум 8 знаков, цифры и буквы"
                                                required
                                            />
                                            <label className="auth__label">Придумайте пароль *</label>
                                            <div onClick={showOrHidePassword} className="inaccess" />
                                        </div>
                                        <div style={{ color: 'grey', fontSize: '12px' }}>
                                            Поле должно содержать минимум 8 знаков, цифры и буквы *
                                        </div>
                                    </>
                                )}
                            </label>
                        </div>
                        <div className="auth__group" style={{ height: '60px' }}>
                            <label>
                                {pass !== repeatpass ? (
                                    <>
                                        <div className="auth__field field">
                                            <input
                                                onChange={(event: ChangeEvent<HTMLInputElement>) => setRepeatpass(event.target.value)}
                                                value={repeatpass}
                                                id="repeatpass"
                                                type="password"
                                                className="auth__input warning"
                                                autoCorrect="off"
                                                minLength={8}
                                                maxLength={255}
                                                pattern="^(?=.*[A-Za-zА-Яа-я])(?=.*\d)[A-Za-zА-Яа-я\d]{8,}$"
                                                title="Поле должно содержать минимум 8 знаков, цифры и буквы"
                                                required
                                            />
                                            <label className="auth__label">Повторите пароль *</label>
                                            <div onClick={showOrHidePasswordRepeat} className="inaccess" />
                                        </div>
                                        <div style={{ color: 'grey', fontSize: '12px' }}>
                                            Поле должно содержать минимум 8 знаков, цифры и буквы *
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div className="auth__field field">
                                            <input
                                                onChange={(event: ChangeEvent<HTMLInputElement>) => setRepeatpass(event.target.value)}
                                                value={repeatpass}
                                                id="repeatpass"
                                                type="password"
                                                className="auth__input"
                                                autoCorrect="off"
                                                minLength={8}
                                                maxLength={255}
                                                pattern="^(?=.*[A-Za-zА-Яа-я])(?=.*\d)[A-Za-zА-Яа-я\d]{8,}$"
                                                title="Поле должно содержать минимум 8 знаков, цифры и буквы"
                                                required
                                            />
                                            <label className="auth__label">Повторите пароль *</label>
                                            <div onClick={showOrHidePasswordRepeat} className="inaccess" />
                                        </div>
                                        <div style={{ color: 'grey', fontSize: '12px' }}>
                                            Поле должно содержать минимум 8 знаков, цифры и буквы *
                                        </div>
                                    </>
                                )}
                            </label>
                        </div>
                        <div className="auth__group">
                            <label>
                                {errorRegisterResult.code === 4 ? (
                                    <div className="auth__field field">
                                        <input
                                            onChange={(event: ChangeEvent<HTMLInputElement>) => setLastname(event.target.value)}
                                            value={lastname}
                                            id="lastname"
                                            type="text"
                                            className="auth__input warning"
                                            autoCorrect="off"
                                            minLength={1}
                                            maxLength={255}
                                            // pattern="^[?!,.A-Za-zА-Яа-яёЁ\s\-]+$"
                                            // title="Поле должно содержать только латинские и кириллические символы в любом регистре"
                                            required
                                        />
                                        <label className="auth__label">Фамилия *</label>
                                    </div>
                                ) : (
                                    <div className="auth__field field">
                                        <input
                                            onChange={(event: ChangeEvent<HTMLInputElement>) => setLastname(event.target.value)}
                                            value={lastname}
                                            id="lastname"
                                            type="text"
                                            className="auth__input"
                                            autoCorrect="off"
                                            minLength={1}
                                            maxLength={255}
                                            // pattern="^[?!,.A-Za-zА-Яа-яёЁ\s\-]+$"
                                            // title="Поле должно содержать только латинские и кириллические символы в любом регистре"
                                            required
                                        />
                                        <label className="auth__label">Фамилия *</label>
                                    </div>
                                )}
                            </label>
                        </div>
                        <div className="auth__group">
                            <label>
                                {errorRegisterResult.code === 4 ? (
                                    <div className="auth__field field">
                                        <input
                                            onChange={(event: ChangeEvent<HTMLInputElement>) => setFirstname(event.target.value)}
                                            value={firstname}
                                            id="firstname"
                                            type="text"
                                            className="auth__input warning"
                                            autoCorrect="off"
                                            minLength={1}
                                            maxLength={255}
                                            // pattern="^[?!,.A-Za-zА-Яа-яёЁ\s\-]+$"
                                            // title="Поле должно содержать только латинские и кириллические символы в любом регистре"
                                            required
                                        />
                                        <label className="auth__label">Имя *</label>
                                    </div>
                                ) : (
                                    <div className="auth__field field">
                                        <input
                                            onChange={(event: ChangeEvent<HTMLInputElement>) => setFirstname(event.target.value)}
                                            value={firstname}
                                            id="firstname"
                                            type="text"
                                            className="auth__input"
                                            autoCorrect="off"
                                            minLength={1}
                                            maxLength={255}
                                            // pattern="^[?!,.A-Za-zА-Яа-яёЁ\s\-]+$"
                                            // title="Поле должно содержать только латинские и кириллические символы в любом регистре"
                                            required
                                        />
                                        <label className="auth__label">Имя *</label>
                                    </div>
                                )}
                            </label>
                        </div>
                        <div className="auth__group">
                            <label>
                                <div className="auth__field field">
                                    <input
                                        onChange={(event: ChangeEvent<HTMLInputElement>) => setSecondname(event.target.value)}
                                        value={secondname}
                                        id="secondname"
                                        type="text"
                                        className="auth__input"
                                        minLength={1}
                                        maxLength={255}
                                        autoCorrect="off"
                                        // pattern="^[?!,.A-Za-zА-Яа-яёЁ\s\-]+$"
                                        // title="Поле должно содержать только латинские и кириллические символы в любом регистре"
                                    />
                                    <label className="auth__label">Отчество</label>
                                </div>
                            </label>
                        </div>
                        <div className="auth__group">
                            <label>
                                {errorRegisterResult.code === 5 || errorRegisterResult.code === 4 ? (
                                    <div className="auth__field field">
                                        <input
                                            onChange={(event: ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)}
                                            value={email}
                                            id="contactEmail"
                                            type="text"
                                            className="auth__input warning"
                                            autoCorrect="off"
                                            minLength={1}
                                            maxLength={255}
                                            pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
                                            title="Ваш E-mail должен содержать @ и минимум одну точку"
                                            required
                                        />
                                        <label className={email ? 'auth__label active' : 'auth__label'}>Контактный email *</label>
                                    </div>
                                ) : (
                                    <div className="auth__field field">
                                        <input
                                            onChange={(event: ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)}
                                            value={email}
                                            id="contactEmail"
                                            type="text"
                                            className="auth__input"
                                            autoCorrect="off"
                                            minLength={1}
                                            maxLength={255}
                                            pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
                                            title="Ваш E-mail должен содержать @ и минимум одну точку"
                                            required
                                        />
                                        <label className={email ? 'auth__label active' : 'auth__label'}>Контактный email *</label>
                                    </div>
                                )}
                            </label>
                        </div>
                        <div className="auth__group">
                            <label>
                                {errorRegisterResult.code === 4 && phone.length < 7 ? (
                                    <div className="auth__field field">
                                        <NumberFormat
                                            onChange={(event: ChangeEvent<HTMLInputElement>) => setPhone(event.target.value)}
                                            value={phone}
                                            id="phone"
                                            type="tel"
                                            className="auth__input warning"
                                            format="+7(###)###-##-##"
                                            minLength={7}
                                            pattern="^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$"
                                            title="Поле заполнено неверно"
                                            mask="_"
                                            required
                                        />
                                        <label className={phone ? 'auth__label active' : 'auth__label'}>Контактный телефон *</label>
                                    </div>
                                ) : (
                                    <div className="auth__field field">
                                        <NumberFormat
                                            onChange={(event: ChangeEvent<HTMLInputElement>) => setPhone(event.target.value)}
                                            value={phone}
                                            id="phone"
                                            type="tel"
                                            className="auth__input"
                                            format="+7(###)###-##-##"
                                            minLength={7}
                                            pattern="^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$"
                                            title="Поле заполнено неверно"
                                            mask="_"
                                            required
                                        />
                                        <label className={phone ? 'auth__label active' : 'auth__label'}>Контактный телефон *</label>
                                    </div>
                                )}
                            </label>
                        </div>
                        <div className="auth__group">
                            <label>
                                {errorRegisterResult.code === 4 ? (
                                    <div className="auth__field field">
                                        <input
                                            onChange={(event: ChangeEvent<HTMLInputElement>) => setCompany(event.target.value)}
                                            value={company}
                                            id="companyName"
                                            type="text"
                                            className="auth__input warning"
                                            autoCorrect="off"
                                            minLength={1}
                                            maxLength={255}
                                            // pattern='^[?!,.\"A-Za-zА-Яа-яёЁ0-9\s]+$'
                                            // title="Поле должно содержать только латинские и кириллические символы в любом регистре"
                                            required
                                        />
                                        <label className="auth__label">Полное наименование компании *</label>
                                    </div>
                                ) : (
                                    <div className="auth__field field">
                                        <input
                                            onChange={(event: ChangeEvent<HTMLInputElement>) => setCompany(event.target.value)}
                                            value={company}
                                            id="companyName"
                                            type="text"
                                            className="auth__input"
                                            autoCorrect="off"
                                            minLength={1}
                                            maxLength={255}
                                            // pattern='^[?!,.\"A-Za-zА-Яа-яёЁ0-9\s]+$'
                                            // title="Поле должно содержать только латинские и кириллические символы в любом регистре"
                                            required
                                        />
                                        <label className="auth__label">Полное наименование компании *</label>
                                    </div>
                                )}
                            </label>
                        </div>
                        <div className="auth__group">
                            <label>
                                {errorRegisterResult.code === 4 ? (
                                    <div className="auth__field field">
                                        <input
                                            onChange={(event: ChangeEvent<HTMLInputElement>) => setInn(event.target.value)}
                                            value={inn}
                                            id="inn"
                                            type="text"
                                            className="auth__input warning"
                                            autoCorrect="off"
                                            minLength={10}
                                            maxLength={12}
                                            pattern="[0-9]{10,12}"
                                            title="Поле должно содержать минимум 10 символов"
                                            required
                                        />
                                        <label className="auth__label">ИНН *</label>
                                    </div>
                                ) : (
                                    <div className="auth__field field">
                                        <input
                                            onChange={(event: ChangeEvent<HTMLInputElement>) => setInn(event.target.value)}
                                            value={inn}
                                            id="inn"
                                            type="text"
                                            className="auth__input"
                                            autoCorrect="off"
                                            minLength={10}
                                            maxLength={12}
                                            pattern="[0-9]{10,12}"
                                            title="Поле должно содержать минимум 10 цифр"
                                            required
                                        />
                                        <label className="auth__label">ИНН *</label>
                                    </div>
                                )}
                            </label>
                        </div>
                        <div className="auth__group">
                            <label>
                                {errorRegisterResult.code === 4 ? (
                                    <div className="auth__field field">
                                        <input
                                            onChange={(event: ChangeEvent<HTMLInputElement>) => setAddress(event.target.value)}
                                            value={address}
                                            id="legalAdress"
                                            type="text"
                                            className="auth__input warning"
                                            autoCorrect="off"
                                            minLength={1}
                                            maxLength={255}
                                            // pattern="^[?!,.A-Za-zА-Яа-яёЁ0-9\s\-]+$"
                                            // title="Поле должно содержать только латинские и кириллические символы в любом регистре"
                                            required
                                        />
                                        <label className="auth__label">Юридический адрес *</label>
                                    </div>
                                ) : (
                                    <div className="auth__field field">
                                        <input
                                            onChange={(event: ChangeEvent<HTMLInputElement>) => setAddress(event.target.value)}
                                            value={address}
                                            id="legalAdress"
                                            type="text"
                                            className="auth__input"
                                            autoCorrect="off"
                                            minLength={1}
                                            maxLength={255}
                                            // pattern="^[?!,.A-Za-zА-Яа-яёЁ0-9\s\-]+$"
                                            // title="Поле должно содержать только латинские и кириллические символы в любом регистре"
                                            required
                                        />
                                        <label className="auth__label">Юридический адрес *</label>
                                    </div>
                                )}
                            </label>
                        </div>
                        <div className="auth__group">
                            <label>
                                <div className="auth__field field">
                                    <input
                                        onChange={(event: ChangeEvent<HTMLInputElement>) => setWebsite(event.target.value)}
                                        value={website}
                                        id="webSite"
                                        type="text"
                                        className="auth__input"
                                        autoCorrect="off"
                                    />
                                    <label className="auth__label">Адрес web-сайта</label>
                                </div>
                            </label>
                        </div>
                        <div className="auth__group">
                            <label>
                                <CreatableSelect
                                    isClearable
                                    onChange={handleChangeSelect}
                                    value={business}
                                    options={businessTypes}
                                    getOptionLabel={(label: any) => label.partnerBusinessTypeName}
                                    // @ts-ignore
                                    isOptionSelected={(option: any) => business.partnerBusinessTypeName === option.partnerBusinessTypeName}
                                    placeholder={business}
                                    className="auth__options"
                                />
                            </label>
                        </div>
                        <div className="auth__password-ask ask__register">
                            <label>
                                <input type="checkbox" onChange={handleClickCheckbox} value={agreement} />
                            </label>
                            <span>
                                Нажимая на кнопку &quot;Зарегистрироваться&quot;, я выражаю
                                <br />
                                {/* <a> */}
                                <a
                                    href="https://resources.carddex.ru/public/team_carddex/conf_policy_team_carddex.pdf"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    согласие с &quot;Политикой конфиденциальности&quot;
                                </a>
                                {/* </a> */}
                            </span>
                        </div>
                        {login &&
                        pass &&
                        repeatpass &&
                        firstname &&
                        lastname &&
                        email &&
                        phone &&
                        company &&
                        inn &&
                        address &&
                        business &&
                        agreement &&
                        pass === repeatpass ? (
                            <div>
                                <div>
                                    <button type="submit" className="auth__button">
                                        Зарегистрироваться
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <div>
                                <button type="submit" className="auth__button inaccessible">
                                    Зарегистрироваться
                                </button>
                            </div>
                        )}
                        <div className="auth__error">
                            <div className="unsuccess">{errorRegisterResult.code === 4 ? errorRegisterResult.message : null}</div>
                            <div className="unsuccess">{errorRegisterResult.code === 5 ? errorRegisterResult.message : null}</div>
                            <div className="unsuccess">{errorRegisterResult.code === 6 ? errorRegisterResult.message : null}</div>
                        </div>
                    </form>
                    <div className="auth__registration registration">
                        <div className="registration__no-login">Уже зарегистрированы?</div>
                        <div className="registration__link">
                            <Link to="/">Авторизуйтесь</Link>
                            {/* &nbsp;&nbsp;или войдите с помощью соцсетей */}
                        </div>
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
    }
    return <Loader />;
};

export default Register;
