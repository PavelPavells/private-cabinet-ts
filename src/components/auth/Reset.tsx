/**
 * ********** Импорт зависимостей **********
 */
import React, { SyntheticEvent, FormEvent } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { PersonalCabinet } from '../../store/store';

/**
 * ********** Импорт экшенов **********
 */
//import { resetPassword } from '../../actions/authActions';

/** 
 * ********** Импорт компонентов **********
 */
import Layout from "../dashboard/Layout"

/**
 * ********** Импорт стилей **********
 */
import "./Auth.scss";

/**
 * ********** Интерфейс пропсов компонента Reset **********
 */
interface ResetProps {
  readonly resetPassword: (email: string) => void,
  readonly data: any,
  readonly errors: any
}

/**
 * ********** Интерфейс локального стейта компонента Reset **********
 */
interface ResetState {
  readonly email: string,
  readonly errors: any,
  readonly data: any,
  readonly success: boolean,
  readonly loadingData: boolean
}

class Reset extends React.PureComponent<ResetProps, Partial<ResetState>> {

  state: ResetState = {
      email: "",
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
  private onChange = (event: FormEvent<HTMLInputElement>) => {
    const { id, value } = event.currentTarget;
    this.setState({ [id]: value });
  };

  /**
   * ********** Отпрака формы Reset **********
   */
  private clickForm = () => {
    const { email } = this.state;
    //this.props.resetPassword(email, pass);
  };

  /**
   * ********** Отправка формы кнопкой Enter **********
   */
  private onKeyPress = (event: SyntheticEvent) => {
    //@ts-ignore
    if(event.key === 'Enter') {
      event.preventDefault();
      event.stopPropagation();
      this.clickForm();
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
    /**
     * Деструтктуризация данных из локального и глобального стейта
     */
    const { email } = this.state;
    const { err } = this.props.data;
    
    let uuid = localStorage.getItem('uuid')
      if(this.props.data.length === 0 
        || this.props.data.success === "false" 
        //|| pass === "" 
        || email === ""
      ) {
      return (
        /**
         * Компонент Reset
         */
        <div className='auth'>
          <div className='auth__left left'>
            <h1 className='auth__heading'>Восстановить пароль</h1>
            <div className='auth__necessary'>Введите ваш e-mail и мы пришлем ссылку для восстановления пароля</div>
            <div className="auth__forms forms">
              <div className="auth-group">
                <label>
                  <div className="auth-label">Введите e-mail</div>
                  <input
                    onChange={this.onChange}
                    onKeyDown={this.onKeyPress}
                    value={email}
                    id="email"
                    type="email"
                    className="auth-input"
                    placeholder="Введите e-mail"
                  />
                </label>
              </div>
              <div>
                <Link to="/new-password">
                  <button
                    onClick={this.clickForm}
                    type="submit"
                    className="auth-button"
                  >
                    Готово
                  </button>
                </Link>
              </div>
              <div className="auth-error">
                {err}
              </div>
            </div>
            <Link className="auth__back back" to='/'><div className="back__arrow"></div>Вернуться к авторизации</Link>
          </div>
          <div className='auth__right right'>
            <div className="right__logo logo"></div>
            <div className='right__text'>Личный кабинет партнера</div>
            <div className='right__image image'>
              <div className='image__photo'></div>
            </div>
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
                </label>
              </div>
              <div>
                <Link to="/new-password">
                  <button
                    type="submit"
                    className="auth-button"
                  >
                    Готово
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
  null//{ resetPassword }
)(Reset);