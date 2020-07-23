/**
 * ********** Импорт зависимостей **********
 */
import React, { SyntheticEvent, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { PersonalCabinet } from '../../store/store';

/**
 * ********** Импорт экшенов **********
 */
import { resetPassword } from '../../actions/authActions';

/**
 * ********** Импорт компонентов **********
 */
// import Layout from '../dashboard/Layout';

/**
 * ********** Импорт стилей **********
 */
import './Auth.scss';

/**
 * ********** Интерфейс пропсов компонента Reset **********
 */
interface ResetProps {
    readonly resetPassword: (email: string) => void;
    readonly data: any;
}

/**
 * ********** Интерфейс локального стейта компонента Reset **********
 */
interface ResetState {
    readonly email: string;
}

class Reset extends React.PureComponent<ResetProps, Partial<ResetState>> {
    state: ResetState = {
        email: ''
    };

    /**
     * ********** Запрос данных **********
     */
    // public componentDidMount(){
    // if(localStorage.getItem('uuid') !== null ) {
    //  window.location.pathname = "/dashboard";
    // @ts-ignore
    //  window.history.back("/dashboard");
    // @ts-ignore
    //  window.history.go("/dashboard");
    // @ts-ignore
    //  this.props.history.pushState("/dashboard", Layout)
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
     * ********** Отпрака формы Reset **********
     */
    private clickForm = () => {
        const { email } = this.state;
        this.props.resetPassword(email);
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
    //   const email = {
    //     email: this.state.email
    //   }
    //   this.props.resetPassword(email);
    // }
    // private onChange = event => {
    //   this.setState({ [event.target.id]: event.target.value })
    // }

    public render() {
        /**
         * Деструтктуризация данных из локального и глобального стейта
         */
        const { email } = this.state;
        const { err } = this.props.data;

        // const uuid = localStorage.getItem('uuid');

        return (
            /**
             * Компонент Reset
             */
            <div className="auth">
                <div className="auth__left left">
                    <h1 className="auth__heading">Восстановить пароль</h1>
                    <div className="auth__necessary">Введите ваш e-mail и мы пришлем ссылку для восстановления пароля</div>
                    <div className="auth__forms forms" style={{ overflow: 'hidden' }}>
                        <div className="auth__group">
                            <label>
                                <div className="auth__field field">
                                    <input
                                        onChange={this.onChange}
                                        onKeyDown={this.onKeyPress}
                                        value={email}
                                        id="email"
                                        type="text"
                                        className="auth__input"
                                        required
                                    />
                                    <label className="auth__label">Введите e-mail</label>
                                </div>
                            </label>
                        </div>
                        {email ? (
                            <div>
                                <Link to="/new-password">
                                    <button type="submit" className="auth__button">
                                        {' '}
                                        {/** onClick={this.clickForm}  */}
                                        Сбросить
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
                        <Link className="auth__back back" to="/">
                            <div className="back__arrow" />
                            Вернуться к авторизации
                        </Link>
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
}

const mapStateToProps = (state: PersonalCabinet) => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(mapStateToProps, { resetPassword })(Reset);
