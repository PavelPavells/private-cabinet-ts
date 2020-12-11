import React, { FormEvent, SyntheticEvent } from 'react';
import { connect } from 'react-redux';
import { PersonalCabinet } from '../../store/store';
import RegistrationApplication from './RegistrationApplication/RegistrationApplication';
import Logo from '../../images/Auth/carddex_logo.svg';
// import Button from '@atlaskit/button';
// import Form, { CheckboxField, ErrorMessage, Field, FormFooter } from '@atlaskit/form';
// import TextField from '@atlaskit/textfield';

import { loginUser } from '../../actions/authActions/authActions';
// import Layout from '../dashboard/Layout';

import './Auth.scss';
import '../../fonts/fonts.scss';

interface LoginState {
    login: string;
    passHash: string;
    errors: any;
    isOpenRegistrationApplication: boolean;
}

class Login extends React.PureComponent<Partial<LoginState>> {
    state: LoginState = {
        login: '',
        passHash: '',
        isOpenRegistrationApplication: false,
        // eslint-disable-next-line react/no-unused-state
        errors: null
    };

    public componentDidMount() {
        // If logged in and user navigates to Login page, should redirect them to dashboard
        // @ts-ignore
        if (this.props.auth.isAuthenticated) {
            // @ts-ignore
            this.props.history.push('/dashboard');
        }
    }

    public UNSAFE_componentWillReceiveProps(nextProps: any) {
        if (nextProps.auth.isAuthenticated) {
            // @ts-ignore
            this.props.history.push('/dashboard');
        }

        if (nextProps.errors) {
            this.setState({
                // @ts-ignore
                // eslint-disable-next-line react/no-unused-state
                errors: nextProps.errors
            });
        }
    }

    private onSubmit = (event: SyntheticEvent) => {
        event.preventDefault();
        const LoginRequest = {
            login: this.state.login,
            passHash: this.state.passHash
        };
        // @ts-ignore
        this.props.loginUser(LoginRequest);
    };

    private onChange = (event: FormEvent<HTMLInputElement>) => {
        const { id, value } = event.currentTarget;
        this.setState({ [id]: value });
    };

    private showOrHidePassword = () => {
        const password: HTMLElement | any = document.getElementById('passHash');
        const access: HTMLElement | any = document.getElementsByClassName('inaccess')[0];
        access.classList.toggle('access');
        if (password.type === 'password') {
            password.type = 'text';
        } else {
            password.type = 'password';
        }
    };

    public handleChangeIsOpenRegistrationApplication = () => {
        const { isOpenRegistrationApplication } = this.state;
        this.setState({ isOpenRegistrationApplication: !isOpenRegistrationApplication });
    };

    public render() {
        const { login, passHash, isOpenRegistrationApplication } = this.state;
        // @ts-ignore
        const { error } = this.props.auth;

        return (
            <section className="auth">
                <div className="auth__left left">
                    <div
                        className="auth__logo 
                        autofocus"
                    >
                        <img src={Logo} alt="" />
                    </div>
                    <div className="auth__text">
                        <div>WEB-приложение «Личный кабинет партнеров CARDDEX» </div>
                        <div>Это оперативное получение информации, простое управление закупками и продажами оборудования CARDDEX.</div>
                        <div>
                            <span>Подробности об использовании WEB-приложения по телефону</span>
                            <a href="tel:88003339336">8(800)333-93-36</a>
                            <span>или</span>
                            <a href="mailto:sales@carddex.ru">sales@carddex.ru</a>
                        </div>
                    </div>
                    <div className="auth__heading">
                        <h1>Вход</h1>
                    </div>
                    <form className="auth__forms forms remove__scrollbar" onSubmit={this.onSubmit}>
                        <div className="auth__group">
                            {error !== '' ? (
                                <div className="auth__field">
                                    <input
                                        onChange={this.onChange}
                                        value={login}
                                        id="login"
                                        type="text"
                                        className="auth__input warning"
                                        autoCorrect="off"
                                        minLength={1}
                                        maxLength={255}
                                        required
                                    />
                                    <label className={login ? 'auth__label active' : 'auth__label'}>Введите логин</label>
                                </div>
                            ) : (
                                <div className="auth__field">
                                    <input
                                        onChange={this.onChange}
                                        value={login}
                                        id="login"
                                        type="text"
                                        className="auth__input"
                                        autoCorrect="off"
                                        minLength={1}
                                        maxLength={255}
                                        autoFocus
                                        required
                                    />
                                    <label className={login ? 'auth__label active' : 'auth__label'}>Введите логин</label>
                                </div>
                            )}
                        </div>
                        <div className="auth__group">
                            <label>
                                {error !== '' ? (
                                    <div className="auth__field field">
                                        <input
                                            onChange={this.onChange}
                                            value={passHash}
                                            id="passHash"
                                            type="password"
                                            className="auth__input warning"
                                            autoCorrect="off"
                                            minLength={8}
                                            maxLength={255}
                                            // pattern="^(?=.*[A-Za-zА-Яа-я])(?=.*\d)[A-Za-zА-Яа-я\d]{8,}$"
                                            // title="Поле должно содержать минимум 8 знаков, цифры и буквы"
                                            required
                                        />
                                        <label className={passHash ? 'auth__label active' : 'auth__label'}>Введите пароль</label>
                                        <div onClick={this.showOrHidePassword} className="inaccess" />
                                    </div>
                                ) : (
                                    <div className="auth__field field">
                                        <input
                                            onChange={this.onChange}
                                            value={passHash}
                                            id="passHash"
                                            type="password"
                                            className="auth__input"
                                            autoCorrect="off"
                                            minLength={8}
                                            maxLength={255}
                                            // pattern="^(?=.*[A-Za-zА-Яа-я])(?=.*\d)[A-Za-zА-Яа-я\d]{8,}$"
                                            // title="Поле должно содержать минимум 8 знаков, цифры и буквы"
                                            required
                                        />
                                        <label className={passHash ? 'auth__label active' : 'auth__label'}>Введите пароль</label>
                                        <div onClick={this.showOrHidePassword} className="inaccess" />
                                    </div>
                                )}
                            </label>
                        </div>
                        <div className="auth__password-ask ask">
                            <span onClick={this.handleChangeIsOpenRegistrationApplication} className="ask__password">
                                Заявка на регистрацию
                            </span>
                            <a href="/reset" className="ask__password">
                                Не помню пароль
                            </a>
                        </div>
                        {isOpenRegistrationApplication ? (
                            <RegistrationApplication
                                handleChangeIsOpenRegistrationApplication={this.handleChangeIsOpenRegistrationApplication}
                            />
                        ) : null}
                        {login && passHash ? (
                            <div className="auth__button">
                                <button type="submit" className="button">
                                    Войти
                                </button>
                            </div>
                        ) : (
                            <div className="auth__button">
                                <button type="submit" className="button inaccessible">
                                    Войти
                                </button>
                            </div>
                        )}
                        {error !== '' ? <div className="auth__error unsuccess">{error}</div> : null}
                    </form>
                    {/*
                        <div className="auth__registration registration">
                            <div className="registration__no-login">Нет логина?</div>
                            <div className="registration__link">
                                <Link to="/register">Зарегистрируйтесь</Link>
                                &nbsp;или войдите с помощью соцсетей
                            </div>
                        </div>
                        */}

                    <div className="auth__password-ask">
                        <a
                            href="https://resources.carddex.ru/public/team_carddex/conf_policy_team_carddex.pdf"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Политика конфиденциальности
                        </a>
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
            </section>
        );
    }
}

const mapStateToProps = (state: PersonalCabinet) => ({
    auth: state.auth
});

export default connect(mapStateToProps, { loginUser })(Login);
