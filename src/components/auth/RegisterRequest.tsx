import React, { useState, useEffect, ChangeEvent, SyntheticEvent } from 'react';
import { useSelector, shallowEqual } from 'react-redux';
// @ts-ignore
import NumberFormat from 'react-number-format';
// @ts-ignore
import CreatableSelect from 'react-select/creatable';
import { Link } from 'react-router-dom';
import { PersonalCabinet } from '../../store/store';
import Logo from '../../images/Auth/carddex_logo.svg';

import './Auth.scss';

import SuccessRegister from './successRegister/successRegister';
import Loader from '../../__utils__/Spinner';

const RegisterRequest = () => {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [secondname, setSecondname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [company, setCompany] = useState('');
    const [inn, setInn] = useState('');
    const [business, setBusiness] = useState('Торговая компания');
    const [agreement, setAgreement] = useState(0);

    const { errorRegisterResult, isFetching } = useSelector((state: PersonalCabinet) => state.auth, shallowEqual);

    const businessTypes: any[] = [
        {
            partnerBusinessTypeUuid: '7944362c-d5ca-4eb2-8a2a-14caf429b6f1',
            partnerBusinessTypeName: 'Торговая компания'
        },
        {
            partnerBusinessTypeUuid: '5733ecbf-daae-4680-b24d-c748e21fd79d',
            partnerBusinessTypeName: 'Компания-проектировщик'
        },
        {
            partnerBusinessTypeUuid: '084a8db9-753d-4b59-a839-75f43affdc7b',
            partnerBusinessTypeName: 'Инсталлятор СКУД'
        },
        {
            partnerBusinessTypeUuid: 'f41141b0-4386-4a4f-91a6-741126ea066f',
            partnerBusinessTypeName: 'Пользователь системы СКУД'
        }
    ];
    // const dispatch = useDispatch();

    useEffect(() => {
        window.addEventListener('load', function cb() {
            const elem = document.getElementsByClassName('auth__label');
            // eslint-disable-next-line no-plusplus
            for (let i = 0; i < elem.length; i++) {
                // @ts-ignore
                elem[i].classList.add('active');
            }
        });

        // if (window.location.search) {
        // getAccessRegister(window.location.search.split('=')[1]);
        // }
    }, []);

    // useEffect(() => {
    //     setEmail(invitePayload.regEmail);
    //     setLogin(invitePayload.regEmail);
    //     setInviteCode(invitePayload.inviteCode);
    // }, [invitePayload]);

    const onSubmit = (event: SyntheticEvent) => {
        event.preventDefault();
        const newUser = {
            firstname,
            lastname,
            secondname,
            email,
            phone,
            company,
            inn,
            business,
            agreement
        };
        // dispatch(registerUser(newUser));
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
                        <h1>Заявка на регистрацию</h1>
                        <div className="auth__necessary">Поля, отмеченные знаком «*», обязательны для заполнения</div>
                    </div>
                    <form className="auth__forms forms scroll" onSubmit={onSubmit}>
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
                                Нажимая на кнопку &quot;Отправить заявку&quot;, я выражаю
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
                        {firstname && lastname && email && phone && company && inn && business && agreement ? (
                            <div className="auth__button">
                                <button type="submit" className="button">
                                    Отправить заявку
                                </button>
                            </div>
                        ) : (
                            <div className="auth__button">
                                <button type="submit" className="button inaccessible">
                                    Отправить заявку
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

export default RegisterRequest;
