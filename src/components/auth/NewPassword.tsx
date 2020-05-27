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
 * ********** Интерфейс пропсов компонента NewPassword **********
 */
interface NewPasswordProps {
  readonly newPassword: (pass: string, repeatPass: string) => void,
  readonly data: any,
  readonly errors: any
}

/**
 * ********** Интерфейс локального стейта компонента NewPassword **********
 */
interface NewPasswordState {
  readonly password: string,
  readonly errors: any,
  readonly data: any,
  readonly success: boolean,
  readonly loadingData: boolean
}

class NewPassword extends React.PureComponent<NewPasswordProps, Partial<NewPasswordState>> {

  state: NewPasswordState = {
      password: "",
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
   * ********** Отпрака формы NewPassword **********
   */
  private clickForm = () => {
    const { password } = this.state;
    //this.props.newPassword(pass, repeatPass);
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
    const { password } = this.state;
    const { err } = this.props.data;
    
    let uuid = localStorage.getItem('uuid')
      if(this.props.data.length === 0 
        || this.props.data.success === "false" 
        || password === "" 
        //|| email === ""
      ) {
      return (
        /**
         * Компонент NewPassword
         */
        <div className='auth'>
          <div className='auth__left left'>
            <h1 className='auth__heading'>Новый пароль</h1>
            <div className="auth__forms forms">
              <div className="auth-group">
                <label>
                  <div className="auth-label">Введите новый пароль</div>
                  <input
                    onChange={this.onChange}
                    onKeyDown={this.onKeyPress}
                    value={password}
                    id="pass"
                    type="pass"
                    className="auth-input"
                    placeholder="Введите новый пароль"
                  />
                </label>
              </div>
              <div className="auth-group">
                <label>
                  <div className="auth-label">Повторите пароль</div>
                  <input
                    onChange={this.onChange}
                    onKeyDown={this.onKeyPress}
                    value={password}
                    id="repeat-pass"
                    type="pass"
                    className="auth-input"
                    placeholder="Повторите пароль"
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
                <div className="auth-group">
                    <label>
                        <div className="auth-label">Введите новый пароль</div>
                        <input
                            onChange={this.onChange}
                            onKeyDown={this.onKeyPress}
                            value={password}
                            id="pass"
                            type="pass"
                            className="auth-input"
                            placeholder="Введите новый пароль"
                        />
                    </label>
                </div>
                <div className="auth-group">
                    <label>
                        <div className="auth-label">Повторите пароль</div>
                        <input
                            onChange={this.onChange}
                            onKeyDown={this.onKeyPress}
                            value={password}
                            id="repeat-pass"
                            type="pass"
                            className="auth-input"
                            placeholder="Повторите пароль"
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
  null//{ newPassword }
)(NewPassword);