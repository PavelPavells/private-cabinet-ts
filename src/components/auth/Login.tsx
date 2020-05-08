/**
 * ********** Импорт зависимостей **********
 */
import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { PersonalCabinet } from '../../store/store';

/**
 * ********** Импорт экшенов **********
 */
import { loginUser } from '../../actions/authActions';

/** 
 * ********** Импорт компонентов **********
 */
import Layout from "../dashboard/Layout"

/**
 * ********** Импорт стилей **********
 */
import "./Auth.scss";

/**
 * ********** Интерфейс пропсов компонента Login **********
 */
interface LoginProps {
  readonly loginUser: (email: string, password: string) => void,
  readonly data: any,
  readonly errors: any
}

/**
 * ********** Интерфейс локального стейта компонента Login **********
 */
interface LoginState {
  readonly email: string,
  readonly pass: string,
  readonly errors: any,
  readonly data: any,
  readonly success: any,
  readonly loadingData: boolean
}

class Login extends React.PureComponent<LoginProps, LoginState> {

  state: LoginState = {
      email: "",
      pass: "",
      errors: {},
      data: [],
      success: this.props.data.success,
      loadingData: false
  };
  
  /**
   * ********** Запрос данных **********
   */
  public componentDidMount(){
    if(localStorage.getItem('uuid') !== null ) {
      window.location.pathname = "/dashboard";
      // @ts-ignore
      window.history.back("/dashboard");
      // @ts-ignore
      window.history.go("/dashboard");
      // @ts-ignore
      this.props.history.pushState("/dashboard", Layout)
    } 
  }

  /**
   * ********** Запись данных в стейт из инпутов **********
   */
  private onChange = (e: { target: { id: any; value: any; }; }) => {
    // @ts-ignore
    this.setState({ [e.target.id]: e.target.value });
  };

  /**
   * ********** Отпрака формы **********
   */
  private clickForm = () => {
    const { email, pass } = this.state;
    this.props.loginUser(email, pass);
  };

  /**
   * ********** Отправка формы кнопкой Enter **********
   */
  private onKeyPress = (event: { key: string; preventDefault: () => void; stopPropagation: () => void; }) => {
    if(event.key === 'Enter') {
      event.preventDefault()
      event.stopPropagation()
      this.clickForm()
    }
  }

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
    const { errors, email, pass } = this.state;
    const { err } = this.props.data;
    
    let uuid = localStorage.getItem('uuid')
      if(this.props.data.length === 0 
        || this.props.data.success === "false" 
        || pass === "" 
        || email === ""
      ) {
      return (
        <div className='auth'>
          <div className='auth-left'>
            <div className="logo">
              <img src="../../img/carddex_logo.png" alt="" />
            </div>
            <h1 className='heading'>Авторизация</h1>
            <div className="auth-forms">
              <div className="auth-forms__header">
                <Link to="/" className="link-login active">
                  Вход
                </Link>
                <Link to="/register" className="link-register">
                  Регистрация
                </Link>
              </div>

              <div className="auth-group">
                <label>
                  <div className="auth-label">Логин</div>
                  <input
                    onChange={this.onChange}
                    onKeyDown={this.onKeyPress}
                    value={this.state.email}
                    // @ts-ignore
                    error={errors.email}
                    id="email"
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
                    type="password" //passowrd
                    className="auth-input"
                  />
                  <div className="auth-error">
                    {err}
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
                    onClick={this.clickForm}
                    type="submit"
                    className="auth-button"
                  >
                    Войти
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className='auth-right'>
            <div className='image' />
          </div>
        </div>
      )
    } else if(this.props.data.success === "true" && uuid !== null) {
      return <Redirect to="/dashboard" />
    } else {
      return (
        <div className="wrapper">
          <div className="header-logo">
            <img src="../../img/carddex_logo.png" alt="" />
          </div>
          <div className="base-wrapper">
            <div className="wrapper-auth">
              <div className="wrapper-auth__header">
                <Link to="/" className="link-login active">
                  Вход
                </Link>
                {/*
                <Link to="/register" className="link-register">
                  Регистрация
                </Link>
                */}
              </div>

              <div className="auth-group">
                <label>
                  <div className="auth-label">Email</div>
                  <input
                    onChange={this.onChange}
                    value={this.state.email}
                    // @ts-ignore
                    error={errors.email}
                    onKeyDown={this.onKeyPress}
                    id="email"
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
                    value={this.state.pass}
                    // @ts-ignore
                    error={errors.pass}
                    onKeyDown={this.onKeyPress}
                    id="pass"
                    type="password"
                    className="auth-input"
                  />
                  <div className="auth-error">
                    {errors.pass}
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
                <Link to="/dashboard">
                  <button
                    type="submit"
                    className="auth-button"
                  >
                    Войти
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = (state: PersonalCabinet) => ({
 auth: state.auth,
 errors: state.errors
});

export default connect(
  mapStateToProps,
  null//{ loginUser }
)(Login);