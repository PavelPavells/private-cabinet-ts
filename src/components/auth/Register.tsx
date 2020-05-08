/**
 * ********** Импорт зависимостей **********
 */
import React from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { PersonalCabinet } from '../../store/store';

/**
 * ********** Импорт экшенов **********
 */
import { registerUser } from "../../actions/authActions";

/**
 * ********** Импорт стилей **********
 */
import "./Auth.scss";

/**
 * ********** Интерфейс пропсов компонента Login **********
 */
interface LoginProps {
  readonly registerUser: () => void,
  readonly data: any,
  readonly errors: any
}

/**
 * ********** Интерфейс локального стейта компонента Login **********
 */
interface LoginState {
  readonly login: string,
  readonly pass: string,
  readonly email: string,
  readonly surname: string,
  readonly name: string,
  readonly patronymic: string,
  readonly errors: any
}

class Register extends React.PureComponent<LoginProps, LoginState> {
  
    state: LoginState = {
      login: "",
      pass: "",
      email: "",
      surname: "",
      name: "",
      patronymic: " ",
      errors: {}
    }

  /** ********** FETCH DATA ACCOUNT ********** */
  //public componentDidMount() {
    // @ts-ignore
  //  if (this.props.auth.isAuthenticated) {
      // @ts-ignore
  //    this.props.history.push('/dashboard');
  //  }
  //}
  // @ts-ignore
  //public UNSAFE_componentWillReceiveProps(nextProps) {
  //  if (nextProps.errors) {
  //    this.setState({ errors: nextProps.errors });
  //  }
  //}

  /** ********** CHANGE DATA FROM INPUT ********** */
  private onChange = (event: { target: { id: any; value: any; }; }) => {
    // @ts-ignore
    this.setState({ [event.target.id]: event.target.value });
  };

  /** ********** REGISTER NEW USER ********** */
  onSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    const newUser = {
      login: this.state.login,
      pass: this.state.pass,
      email: this.state.email,
      surname: this.state.surname,
      name: this.state.name,
      patronymic: this.state.patronymic
    };
    // @ts-ignore
    this.props.registerUser(newUser, this.props.history);
  };

  /**
   * ********** Отправка формы кнопкой Enter **********
   */
  private onKeyPress = (event: { key: string; preventDefault: () => void; stopPropagation: () => void; }) => {
    if(event.key === 'Enter') {
      event.preventDefault();
      event.stopPropagation();
      // @ts-ignore
      this.onSubmit()
    }
  }
  render() {
    const { errors } = this.state;
    return (
      <div className='auth'>
          <div className='auth-left'>
            <div className="logo">
              <img src="../../img/carddex_logo.png" alt="" />
            </div>
            <h1 className='heading'>Авторизация</h1>
            <div className="auth-forms">
              <div className="auth-forms__header">
                <Link to="/" className="link-login">
                  Вход
                </Link>
                <Link to="/register" className="link-register active">
                  Регистрация
                </Link>
              </div>

              <div className="auth-group">
                <label>
                  <div className="auth-label">Логин</div>
                  <input
                    onChange={this.onChange}
                    onKeyDown={this.onKeyPress}
                    value={this.state.login}
                    // @ts-ignore
                    error={errors.email}
                    id="login"
                    type="email"
                    className="auth-input"
                  />
                  <div className="auth-error">
                    {errors.email}
                    {errors.emailnotfound}
                  </div>
                </label>
              </div>
              <div className="auth-group">
                <label>
                  <div className="auth-label">Пароль</div>
                  <input
                    onChange={this.onChange}
                    onKeyDown={this.onKeyPress}
                    value={this.state.pass}
                    // @ts-ignore
                    error={errors.pass}
                    id="pass"
                    type="password"
                    className="auth-input"
                  />
                  <div className="auth-error">
                    {/*{err}*/}
                    {errors.passwordincorrect}
                  </div>
                </label>
              </div>
              <div className="auth-group">
                <label>
                  <div className="auth-label">Подтветдите пароль</div>
                  <input
                    onChange={this.onChange}
                    onKeyDown={this.onKeyPress}
                    value={this.state.pass}
                    // @ts-ignore
                    error={errors.pass}
                    id="pass"
                    type="password"
                    className="auth-input"
                  />
                  <div className="auth-error">
                    {/*{err}*/}
                    {errors.passwordincorrect}
                  </div>
                </label>
              </div>
              <div className="auth-group">
                <label>
                  <div className="auth-label">Email</div>
                  <input
                    onChange={this.onChange}
                    onKeyDown={this.onKeyPress}
                    value={this.state.email}
                    // @ts-ignore
                    error={errors.pass}
                    id="email"
                    type="text"
                    className="auth-input"
                  />
                  <div className="auth-error">
                    {/*{err}*/}
                    {errors.passwordincorrect}
                  </div>
                </label>
              </div>
              <div className="auth-group">
                <label>
                  <div className="auth-label">Фамилия</div>
                  <input
                    onChange={this.onChange}
                    onKeyDown={this.onKeyPress}
                    value={this.state.surname}
                    // @ts-ignore
                    error={errors.pass}
                    id="surname"
                    type="text"
                    className="auth-input"
                  />
                  <div className="auth-error">
                    {/*{err}*/}
                    {errors.passwordincorrect}
                  </div>
                </label>
              </div>
              <div className="auth-group">
                <label>
                  <div className="auth-label">Имя</div>
                  <input
                    onChange={this.onChange}
                    onKeyDown={this.onKeyPress}
                    value={this.state.name}
                    // @ts-ignore
                    error={errors.pass}
                    id="name"
                    type="text"
                    className="auth-input"
                  />
                  <div className="auth-error">
                    {/*{err}*/}
                    {errors.passwordincorrect}
                  </div>
                </label>
              </div>
              <div className="auth-group">
                <label>
                  <div className="auth-label">Отчетсво</div>
                  <input
                    onChange={this.onChange}
                    onKeyDown={this.onKeyPress}
                    value={this.state.patronymic}
                    // @ts-ignore
                    error={errors.pass}
                    id="patronymic"
                    type="text"
                    className="auth-input"
                  />
                  <div className="auth-error">
                    {/*{err}*/}
                    {errors.passwordincorrect}
                  </div>
                </label>
              </div>
              <div className="auth-password__ask">
                <label>
                  <input type="checkbox" /> Запомнить меня
                </label>
                <a
                  href="https://yandex.ru"
                  className="auth-group__ask-password"
                >
                  Забыли пароль?
                </a>
              </div>
              <div className="auth-condition">
                <span>Нажимая кнопку "Войти", вы принимаете</span>
                <a
                  href="https://yandex.ru"
                  className="auth-conditon__confidiency"
                >
                  Условия "Политики Конфиденциальности"
                </a>
              </div>
              <div>
                <Link to="/">
                  <button
                    onClick={this.onSubmit}
                    type="submit"
                    className="auth-button"
                  >
                    Регистрация
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className='auth-right'>
            <div className='image' />
          </div>
        </div>
    );
  }
}

const mapStateToProps = (state: PersonalCabinet) => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  null //{ registerUser }
  // @ts-ignore
)(withRouter(Register));
