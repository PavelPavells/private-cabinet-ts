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
  readonly pass: string,
  readonly repeatpass: string,
  readonly errors: any,
  readonly data: any,
  readonly success: boolean,
  readonly loadingData: boolean
}

class NewPassword extends React.PureComponent<NewPasswordProps, Partial<NewPasswordState>> {

  state: NewPasswordState = {
      pass: "",
      repeatpass: "",
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
   * ********** Скрыть/Отобразить Пароль **********
   */
  private showOrHidePassword = () => {
    let password: HTMLElement | any = document.getElementById('pass');
    let access: HTMLElement | any = document.getElementsByClassName('inaccess')[0];
    access.classList.toggle('access');
    console.log(password)
    console.log(access)
    if (password.type === 'password') {
      password.type = 'text';
    } else {
      password.type = 'password';
    }
  }

  /**
   * ********** Скрыть/Отобразить Пароль **********
   */
  private showOrHidePasswordRepeat = () => {
    let password: HTMLElement | any = document.getElementById('repeatpass');
    let access: HTMLElement | any = document.getElementsByClassName('inaccess')[1];
    access.classList.toggle('access');
    console.log(password)
    console.log(access)
    if (password.type === 'password') {
      password.type = 'text';
    } else {
      password.type = 'password';
    }
  }

  /**
   * ********** Отпрака формы NewPassword **********
   */
  private clickForm = () => {
    const { pass } = this.state;
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
    const { pass, repeatpass } = this.state;
    const { err } = this.props.data;
    
    let uuid = localStorage.getItem('uuid')
      if(this.props.data.length === 0 
        || this.props.data.success === "false" 
        || pass === "" 
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
                <div className="auth__group">
                    <label>
                        <div className="auth__label">Введите новый пароль</div>
                        {err
                          ? <div className="auth__field field">
                              <input onChange={this.onChange} onKeyDown={this.onKeyPress} value={pass} id="pass" type="password" className="auth__input warning" placeholder="Введите пароль" />
                              <div onClick={this.showOrHidePassword} className='inaccess'></div>
                            </div>  
                          : <div className="auth__field field">
                              <input onChange={this.onChange} onKeyDown={this.onKeyPress} value={pass} id="pass" type="password" className="auth__input" placeholder="Введите пароль" />
                              <div onClick={this.showOrHidePassword} className='inaccess'></div>  
                            </div>
                        }
                    </label>
                </div>
                <div className="auth__group">
                    <label>
                        <div className="auth__label">Повторите пароль</div>
                        {err
                          ? <div className="auth__field field">
                              <input onChange={this.onChange} onKeyDown={this.onKeyPress} value={repeatpass} id="repeatpass" type="password" className="auth__input warning" placeholder="Введите пароль" />
                              <div onClick={this.showOrHidePasswordRepeat} className='inaccess'></div>
                            </div>  
                          : <div className="auth__field field">
                              <input onChange={this.onChange} onKeyDown={this.onKeyPress} value={repeatpass} id="repeatpass" type="password" className="auth__input" placeholder="Введите пароль" />
                              <div onClick={this.showOrHidePasswordRepeat} className='inaccess'></div>  
                            </div>
                        }
                    </label>
                </div>
                {pass && repeatpass
                    ? 
                    <div>
                      <Link to="/">
                        <button
                          onClick={this.clickForm}
                          type="submit"
                          className="auth__button"
                        >
                          Войти
                        </button>
                      </Link>
                    </div>
                    :
                    <div>
                        <button
                          type="submit"
                          className="auth__button inaccessible"
                        >
                          Войти
                        </button>
                    </div>
                }
              <div className="auth__error">
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
          <div className="base-wrapper">
            <div className="wrapper-auth">
                <div className="auth__group">
                    <label>
                        <div className="auth__label">Введите новый пароль</div>
                        <input
                            onChange={this.onChange}
                            onKeyDown={this.onKeyPress}
                            value={pass}
                            id="pass"
                            type="password"
                            className="auth__input"
                            placeholder="Введите новый пароль"
                        />
                    </label>
                </div>
                <div className="auth__group">
                    <label>
                        <div className="auth-label">Повторите пароль</div>
                        <input
                            onChange={this.onChange}
                            onKeyDown={this.onKeyPress}
                            value={repeatpass}
                            id="repeatpass"
                            type="password"
                            className="auth__input"
                            placeholder="Повторите пароль"
                        />
                    </label>
                </div>
              <div>
                <Link to="/new-password">
                  <button
                    type="submit"
                    className="auth__button"
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