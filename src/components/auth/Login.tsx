/**
 * ********** Импорт зависимостей **********
 */
import React, { SyntheticEvent, FormEvent } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { PersonalCabinet } from '../../store/store';

/**
 * ********** Импорт экшенов **********
 */
// import { loginUser } from '../../actions/authActions';

/**
 * ********** Импорт стилей **********
 */
import './Auth.scss';
import '../../fonts/fonts.scss';

/**
 * ********** Интерфейс пропсов компонента Login **********
 */
interface LoginProps {
    readonly loginUser: (email: string, password: string) => void;
    readonly data: any;
    readonly errors: any;
}

/**
 * ********** Интерфейс локального стейта компонента Login **********
 */
interface LoginState {
    readonly email: string;
    readonly pass: string;
    // readonly errors: any;
    // readonly data: any;
    // readonly success: boolean;
    // readonly loadingData: boolean;
}

class Login extends React.PureComponent<LoginProps, Partial<LoginState>> {
    state: LoginState = {
        email: '',
        pass: ''
        // errors: {},
        // data: [],
        // success: this.props.data.success,
        // loadingData: false
    };

    /**
     * ********** Запрос данных **********
     */
    // public componentDidMount() {
    // if(localStorage.getItem('uuid') !== null ) {
    //   window.location.pathname = "/dashboard";
    //   // @ts-ignore
    //   window.history.back("/dashboard");
    //   // @ts-ignore
    //   window.history.go("/dashboard");
    //   // @ts-ignore
    //   this.props.history.pushState("/dashboard", Layout)
    // }
    // }

    /**
     * ********** Запись данных в стейт из инпутов **********
     */
    private onChange = (event: FormEvent<HTMLInputElement>) => {
        const { id, value } = event.currentTarget;
        this.setState({ [id]: value });
    };

    /**
     * ********** Скрыть/Отобразить Пароль **********
     */
    private showOrHidePassword = () => {
        const password: HTMLElement | any = document.getElementById('pass');
        const access: HTMLElement | any = document.getElementsByClassName('inaccess')[0];
        access.classList.toggle('access');
        if (password.type === 'password') {
            password.type = 'text';
        } else {
            password.type = 'password';
        }
    };

    /**
     * ********** Отпрака формы Логина **********
     */
    private clickForm = () => {
        const { email, pass } = this.state;
        this.props.loginUser(email, pass);
    };

    /**
     * ********** Отправка формы кнопкой Enter **********
     */
    private onKeyPress = (event: SyntheticEvent) => {
        // @ts-ignore
        if (event.key === 'Enter') {
            event.preventDefault();
            event.stopPropagation();
            this.clickForm();
        }
    };

    // public componentDidMount() {
    //   // If logged in and user navigates to Login page, should redirect them to dashboard
    //   if (this.props.auth.isAuthenticated) {
    //     this.props.history.push("/dashboard");
    //   }
    // }

    // public componentWillReceiveProps(nextProps) {
    //   if (nextProps.auth.isAuthenticated) {
    //     this.props.history.push("/dashboard");
    //   }

    //   if (nextProps.errors) {
    //     this.setState({
    //       errors: nextProps.errors
    //     });
    //   }
    // }
    // private onSubmit = event => {
    //   event.preventDefault()
    //   const LoginRequest = {
    //     email: this.state.email,
    //     pass: this.state.pass
    //   }
    //   this.props.login(LoginRequest)
    // }
    // private onChange = event => {
    //   this.setState({ [event.target.id]: event.target.value })
    // }

    public render() {
        /**
         * Деструтктуризация данных из локального и глобального стейта
         */
        const { email, pass } = this.state;
        const { err } = this.props.data;

        // const uuid = localStorage.getItem('uuid');
        if (this.props.data.length === 0 || this.props.data.success === 'false' || pass === '' || email === '') {
            return (
                /**
                 * Компонента Логин
                 */
                <div className="auth">
                    <div className="auth__left left">
                        <h1 className="auth__heading">Вход</h1>
                        <div className="auth__forms forms remove__scrollbar">
                            <div className="auth__group">
                                {err ? (
                                    <div className="auth__field">
                                        <input
                                            onChange={this.onChange}
                                            onKeyDown={this.onKeyPress}
                                            value={email}
                                            type="text"
                                            className="auth__input warning"
                                            autoCorrect="off"
                                            required
                                        />
                                        <label className="auth__label">Введите логин</label>
                                    </div>
                                ) : (
                                    <div className="auth__field">
                                        <input
                                            onChange={this.onChange}
                                            onKeyDown={this.onKeyPress}
                                            value={email}
                                            id="email"
                                            type="text"
                                            className="auth__input"
                                            autoCorrect="off"
                                            required
                                        />
                                        <label className="auth__label">Введите логин</label>
                                    </div>
                                )}
                            </div>
                            <div className="auth__group">
                                <label>
                                    {err ? (
                                        <div className="auth__field field">
                                            <input
                                                onChange={this.onChange}
                                                onKeyDown={this.onKeyPress}
                                                value={pass}
                                                id="pass"
                                                type="password"
                                                className="auth__input warning"
                                                autoCorrect="off"
                                                required
                                            />
                                            <label className="auth__label">Введите пароль</label>
                                            <div onClick={this.showOrHidePassword} className="inaccess" />
                                        </div>
                                    ) : (
                                        <div className="auth__field field">
                                            <input
                                                onChange={this.onChange}
                                                onKeyDown={this.onKeyPress}
                                                value={pass}
                                                id="pass"
                                                type="password"
                                                className="auth__input"
                                                autoCorrect="off"
                                                required
                                            />
                                            <label className="auth__label">Введите пароль</label>
                                            <div onClick={this.showOrHidePassword} className="inaccess" />
                                        </div>
                                    )}
                                </label>
                            </div>
                            <div className="auth__password-ask ask">
                                <a href="/reset" className="ask__password">
                                    Не помню пароль
                                </a>
                            </div>
                            {email && pass ? (
                                <div>
                                    <Link to="/">
                                        <button onClick={this.clickForm} type="submit" className="auth__button">
                                            Войти
                                        </button>
                                    </Link>
                                </div>
                            ) : (
                                <div>
                                    <button type="submit" className="auth__button inaccessible">
                                        Войти
                                    </button>
                                </div>
                            )}
                            <div className="auth__error">{err}</div>
                        </div>
                        <div className="auth__registration registration">
                            <div className="registration__no-login">Нет логина?</div>
                            <div className="registration__link">
                                <Link to="/register">Зарегистрируйтесь</Link>
                                &nbsp;или войдите с помощью соцсетей
                            </div>
                        </div>
                    </div>
                    <div className="auth__right right">
                        <div className="right__logo logo">
                            <div className="image" />
                        </div>
                        <div className="right__text">Личный кабинет партнера</div>
                        <div className="right__image image">
                            <div className="image__photo" />
                        </div>
                    </div>
                </div>
            );
        }
        return <Redirect to="/dashboard" />;
    }
}

const mapStateToProps = (state: PersonalCabinet) => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(
    mapStateToProps,
    null // { loginUser }
)(Login);
