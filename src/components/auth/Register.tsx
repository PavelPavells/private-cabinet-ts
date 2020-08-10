/**
 * ********** Импорт зависимостей **********
 */
import React, { SyntheticEvent, FormEvent } from "react";
//@ts-ignore
import CreatableSelect from 'react-select/creatable';
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
interface RegisterProps {
  readonly registerUser: () => void,
  readonly data: any,
  readonly errors: any
}

/**
 * ********** Интерфейс локального стейта компонента Login **********
 */
interface RegisterState {
  readonly email: string,
  readonly pass: string,
  readonly repeatpass: string,
  readonly name: string,
  readonly surname: string,
  readonly patronymic: string,
  readonly phone: string | number,
  readonly companyName: string,
  readonly inn: string,
  readonly legalAdress: string,
  readonly webSite: string,
  readonly direction: string,
  readonly errors:   any
}

class Register extends React.PureComponent<RegisterProps, Partial<RegisterState>> {
  
    state: RegisterState = {
      email: "",
      pass: "",
      repeatpass: "",
      name: "",
      surname: "",
      patronymic: "",
      phone: "",
      companyName: "",
      inn: "",
      legalAdress: "",
      webSite: "",
      direction: "Направление деятельности",
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

  /**
   * ********** Запись данных в стейт из инпутов **********
   */
  private onChange = (event: FormEvent<HTMLInputElement>) => {
    const { id, value } = event.currentTarget;
    //@ts-ignore
    this.setState({ [id]: value });
  };

  /**
   * ********** Скрыть/Отобразить Пароль **********
   */
  private showOrHidePassword = () => {
    let password: HTMLElement | any = document.getElementById('pass');
    let access: HTMLElement | any = document.getElementsByClassName('inaccess')[0];
    access.classList.toggle('access');
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
    if (password.type === 'password') {
      password.type = 'text';
    } else {
      password.type = 'password';
    }
  }

  /**
   * ********** Запись данных в стейт из множественного выбора(Options Tag) **********
   */
  private handleChange = (newValue: any) => {
   this.setState({ direction: newValue })
  };

  /**
   * ********** Отпрака формы Регистрации **********
   */
  onSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    const newUser = {
      email: this.state.email,
      pass: this.state.pass,
      repeatpass: this.state.repeatpass,
      name: this.state.name,
      surname: this.state.surname,
      patronymic: this.state.patronymic,
      phone: this.state.phone,
      companyName: this.state.companyName,
      inn: this.state.inn,
      legalAdress: this.state.legalAdress,
      webSite: this.state.webSite,
      direction: this.state.direction
    };
    // @ts-ignore
    //this.props.registerUser(newUser, this.props.history);
  };

  /**
   * ********** Отправка формы кнопкой Enter **********
   */
  private onKeyPress = (event: SyntheticEvent) => {
    //@ts-ignore
    if(event.key === 'Enter') {
      event.preventDefault();
      event.stopPropagation();
      this.onSubmit(event);
    }
  }
  render() {
    /**
     * Деструтктуризация данных из локального и глобального стейта
     */
    const { email, pass, repeatpass, name, surname, patronymic, phone, companyName, inn, legalAdress, webSite, direction } = this.state;
    const { err } = this.props.data;
    
    /**
     * Для выбора направления деятельности регистрирующейся компании
     */
    const options = [
      { value: 'Торговая компания', label: 'Торговая компания' },
      { value: 'Компания-проектировщик', label: 'Компания-проектировщик' },
      { value: 'Инсталлятор СКУД', label: 'Инсталлятор СКУД' },
      { value: 'Пользователь системы СКУД', label: 'Пользователь системы СКУД' }
    ]

    return (
      /**
       * Компонента Регистрация
       */
      <div className='auth'>
          <div className='auth__left left'>
                    <div className="auth__logo">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320.6 31">
                            <path
                                fill="#2b2a29"
                                d="M60.88,31H47a18.7,18.7,0,0,1-6.82-1,6.27,6.27,0,0,1-3.5-3.34,16.31,16.31,0,0,1-1-6.5V11.41a17.3,17.3,0,0,1,1.16-6.88,6.24,6.24,0,0,1,3.65-3.35,21.66,21.66,0,0,1,7.28-1H60a21.33,21.33,0,0,1,6.63.88,7.44,7.44,0,0,1,4.07,3.2,12.09,12.09,0,0,1,1.45,6.45H64.38a4,4,0,0,0-1.31-3.42,7.29,7.29,0,0,0-4.35-1H49.14a15.59,15.59,0,0,0-3.89.35,2.48,2.48,0,0,0-1.71,1.44,9.74,9.74,0,0,0-.47,3.55v7.6a8,8,0,0,0,.61,3.5,3.14,3.14,0,0,0,1.87,1.63,11.44,11.44,0,0,0,3.55.44h9.58a13.21,13.21,0,0,0,3.44-.35,2.82,2.82,0,0,0,1.76-1.32,5.83,5.83,0,0,0,.56-2.84h7.74a18.25,18.25,0,0,1-.94,6.47A5.65,5.65,0,0,1,67.91,30,20.15,20.15,0,0,1,60.88,31Zm18.86,0H71L87.57.32H98.63L115,31h-8.76l-4-7.74H83.79ZM86.8,17.47H99.26L93.32,6.07H93Zm37.72-11v9.37h15.6a4.22,4.22,0,0,0,3.3-1.08,5.61,5.61,0,0,0,1-3.61,5.56,5.56,0,0,0-.92-3.6c-.61-.72-1.73-1.08-3.35-1.08ZM152.43,31h-7.51V26.23a3.88,3.88,0,0,0-1.37-3.32,7.73,7.73,0,0,0-4.55-1H124.56V31h-7.51V.32h23.69a19.45,19.45,0,0,1,4.6.49,8.67,8.67,0,0,1,3.45,1.68A7.69,7.69,0,0,1,151,5.79a15.07,15.07,0,0,1,.8,5.32,8.73,8.73,0,0,1-1.22,5,10,10,0,0,1-3.32,3c1.34.51,2.31.91,2.88,1.19a4.25,4.25,0,0,1,1.56,1.47,5.17,5.17,0,0,1,.69,2.86Zm15.28-6.1h13.43a12.77,12.77,0,0,0,4.23-.54,3.4,3.4,0,0,0,2-1.64,7,7,0,0,0,.54-3v-8a4.94,4.94,0,0,0-1.45-4q-1.44-1.24-5.35-1.24H167.71ZM160.25.32h24.09a17.47,17.47,0,0,1,5,.62,7.93,7.93,0,0,1,3.41,2,8.18,8.18,0,0,1,2,3.44,18,18,0,0,1,.69,5.18v8.13a16.66,16.66,0,0,1-1.08,6.51,7,7,0,0,1-3.51,3.67A14.77,14.77,0,0,1,184.38,31H160.25ZM208.93,24.9h13.43a12.77,12.77,0,0,0,4.23-.54,3.39,3.39,0,0,0,2-1.64,7,7,0,0,0,.54-3v-8a4.94,4.94,0,0,0-1.45-4q-1.44-1.24-5.35-1.24H208.93ZM201.47.32h24.09a17.49,17.49,0,0,1,5,.62,7.91,7.91,0,0,1,3.41,2,8.18,8.18,0,0,1,2,3.44,18,18,0,0,1,.69,5.18v8.13a16.66,16.66,0,0,1-1.08,6.51A7,7,0,0,1,232,29.82,14.77,14.77,0,0,1,225.61,31H201.47ZM242.11,31V.32H274V6.11H249.58v6.72h23.64v5.35H249.58v7H274V31ZM288.41.32H278.3l14.38,14.91L276.55,31h11l11.07-12.11L309.64,31h11L304.47,15.23,318.85.32H308.74L298.58,11.5Z"
                            />
                            <path
                                fill="#af272f"
                                d="M3.14,0H28.31a3.13,3.13,0,0,1,3.14,3.09V27.84a3.13,3.13,0,0,1-3.14,3.09H3.14A3.13,3.13,0,0,1,0,27.84V3.09A3.13,3.13,0,0,1,3.14,0Z"
                            />
                            <path
                                fill="#fff"
                                d="M28.94,12.16c-3.56,0-5.79,0-6.46,0A2.48,2.48,0,0,1,19.94,10a1.32,1.32,0,0,1,0-.27c0-4.15,0-6.57,0-7.26s.5-.81,1-.83,1.14.2,1.14.81V8.21a1.65,1.65,0,0,0,1.4,1.69l.28,0H29c.6,0,.87.54.87,1.09A1,1,0,0,1,28.94,12.16Z"
                            />
                            <path
                                fill="#fff"
                                d="M25,8.45H25a1.76,1.76,0,0,1-1.64-2v-1c0-1.06,0-1.72,0-2.14V3.3h0a2.28,2.28,0,0,1,0-.3c0-.36,0-.4,0-.48a1.07,1.07,0,0,1,2.12.16c0,1.42,0,2.17,0,2.17s0,.12,0,.24a1.18,1.18,0,0,0,.7,1.18,3.24,3.24,0,0,0,1.16.11H28.6a1.86,1.86,0,0,1,.75.08,1,1,0,0,1,.55.8c.07.65-.26,1.2-.87,1.2H25Z"
                            />
                            <path
                                fill="#fff"
                                d="M17.76,15.47a3.09,3.09,0,0,1-.89-.77A3.72,3.72,0,0,1,16,12.3l0-9.81c0-.59.67-.85,1.19-.85.74,0,1.2.35,1.2.92v8.21a2.77,2.77,0,0,0,2.5,2.89c5.12,0,7.68,0,8.15,0a.94.94,0,0,1,.77.78,1.13,1.13,0,0,1,.06.42,1.5,1.5,0,0,1,0,.34,1,1,0,0,1-.89.86h-9A4,4,0,0,1,17.76,15.47Z"
                            />
                            <path
                                fill="#fff"
                                d="M2.43,18.84c3.56,0,5.79,0,6.46,0A2.48,2.48,0,0,1,11.43,21a1.31,1.31,0,0,1,0,.27c0,4.15,0,6.57,0,7.26s-.49.81-1,.83-1.14-.2-1.14-.82V22.79a1.65,1.65,0,0,0-1.4-1.69l-.28,0H2.35c-.6,0-.87-.54-.87-1.09A1,1,0,0,1,2.43,18.84Z"
                            />
                            <path
                                fill="#fff"
                                d="M6.36,22.55h.05a1.76,1.76,0,0,1,1.64,2v1c0,1.06,0,1.72,0,2.14v.05H8A2.27,2.27,0,0,1,8,28c0,.36,0,.4,0,.48a1.07,1.07,0,0,1-2.12-.16c0-1.42,0-2.17,0-2.17s0-.12,0-.24a1.19,1.19,0,0,0-.7-1.18A3.27,3.27,0,0,0,4,24.63H2.78A1.87,1.87,0,0,1,2,24.55a1,1,0,0,1-.55-.8c-.07-.65.26-1.2.87-1.21h4Z"
                            />
                            <path
                                fill="#fff"
                                d="M13.61,15.52a3.08,3.08,0,0,1,.89.77,3.71,3.71,0,0,1,.87,2.41l0,9.81c0,.59-.67.85-1.19.85-.74,0-1.2-.35-1.2-.92V20.23a2.77,2.77,0,0,0-2.5-2.89c-5.12,0-7.68,0-8.15,0a.94.94,0,0,1-.77-.78,1.2,1.2,0,0,1-.05-.42,1.51,1.51,0,0,1,0-.34,1,1,0,0,1,.89-.86h9A4,4,0,0,1,13.61,15.52Z"
                            />
                        </svg>
                        <div className="auth__text">Личный кабинет партнера</div>
                    </div>
            <div className='auth__heading'>
              <h1>Регистрация</h1>
               <div className='auth__necessary'>Поля, отмеченные знаком «*», обязательны для заполнения</div>
            </div>
            <div className="auth__forms forms scroll"> {/** Инлайн стиль убирающий прокрутку */}
              <div className="auth__group">
                <label>
                  <div className="auth__field">
                    <input onChange={this.onChange} onKeyDown={this.onKeyPress} value={email} id="email" type="text" className="auth__input" required />
                    <label className="auth__label">Введите логин</label>  
                  </div>
                </label>
              </div>
              <div className="auth__group">
                <label>
                  {err
                    ? <div className="auth__field field">
                        <input onChange={this.onChange} onKeyDown={this.onKeyPress} value={pass} id="pass" type="password" className="auth__input warning" autoCorrect="off" required />
                        <label className="auth__label">Придумайте пароль *</label>
                        <div onClick={this.showOrHidePassword} className='inaccess'></div>
                      </div>  
                    : <div className="auth__field field">
                        <input onChange={this.onChange} onKeyDown={this.onKeyPress} value={pass} id="pass" type="password" className="auth__input" autoCorrect="off" required />
                        <label className="auth__label">Придумайте пароль *</label>
                        <div onClick={this.showOrHidePassword} className='inaccess'></div>  
                      </div>
                  }
                </label>
              </div>
              <div className="auth__group">
                <label>
                  {err
                    ? <div className="auth__field field">
                        <input onChange={this.onChange} onKeyDown={this.onKeyPress} value={repeatpass} id="repeatpass" type="password" className="auth__input warning" autoCorrect="off" required />
                        <label className="auth__label">Повторите пароль *</label>
                        <div onClick={this.showOrHidePasswordRepeat} className='inaccess'></div>
                      </div>  
                    : <div className="auth__field field">
                        <input onChange={this.onChange} onKeyDown={this.onKeyPress} value={repeatpass} id="repeatpass" type="password" className="auth__input" autoCorrect="off" required />
                        <label className="auth__label">Повторите пароль *</label>
                        <div onClick={this.showOrHidePasswordRepeat} className='inaccess'></div>  
                      </div>
                  }
                </label>
              </div>
              <div className="auth__group">
                <label>
                  {err
                    ? 
                      <div className="auth__field field">
                        <input onChange={this.onChange} onKeyDown={this.onKeyPress} value={name} id="name" type="text" className="auth__input warning" autoCorrect="off" required />
                        <label className="auth__label">Имя *</label>
                      </div>
                      : 
                      <div className="auth__field field">
                        <input onChange={this.onChange} onKeyDown={this.onKeyPress} value={name} id="name" type="text" className="auth__input" autoCorrect="off" required />
                        <label className="auth__label">Имя *</label>
                      </div>
                  }
                </label>
              </div>
              <div className="auth__group">
                <label>
                  {err
                    ?  
                      <div className="auth__field field">
                        <input onChange={this.onChange} onKeyDown={this.onKeyPress} value={surname} id="surname" type="text" className="auth__input warning" autoCorrect="off" required />
                        <label className="auth__label">Фамилия *</label>
                      </div>    
                    : 
                    <div className="auth__field field">
                      <input onChange={this.onChange} onKeyDown={this.onKeyPress} value={surname} id="surname" type="text" className="auth__input" autoCorrect="off" required />
                      <label className="auth__label">Фамилия *</label>
                    </div>
                  }
                </label>
              </div>
              <div className="auth__group">
                <label>
                  <div className="auth__field field">
                    <input onChange={this.onChange} onKeyDown={this.onKeyPress} value={patronymic} id="patronymic" type="text" className="auth__input" autoCorrect="off" required />
                    <label className="auth__label">Отчество</label> 
                  </div>
                </label>
              </div>
              <div className="auth__group">
                <label>
                  {err
                    ? 
                      <div className="auth__field field">
                        <input onChange={this.onChange} onKeyDown={this.onKeyPress} value={phone} id="phone" type="text" className="auth__input warning" autoCorrect="off" required />
                        <label className="auth__label">Контактный телефон *</label>  
                      </div>      
                    :
                      <div className="auth__field field">
                        <input onChange={this.onChange} onKeyDown={this.onKeyPress} value={phone} id="phone" type="text" className="auth__input" autoCorrect="off" required />
                        <label className="auth__label">Контактный телефон *</label>  
                      </div>
                  }
                </label>
              </div>
              <div className="auth__group">
                <label>
                  {err
                    ? <div className="auth__field field">
                        <input onChange={this.onChange} onKeyDown={this.onKeyPress} value={companyName} id="companyName" type="text" className="auth__input warning" autoCorrect="off" required />
                        <label className="auth__label">Полное наименование компании *</label>  
                      </div>  
                    :
                      <div className="auth__field field">
                        <input onChange={this.onChange} onKeyDown={this.onKeyPress} value={companyName} id="companyName" type="text" className="auth__input" autoCorrect="off" required />
                        <label className="auth__label">Полное наименование компании *</label>  
                      </div> 
                  }
                </label>
              </div>
              <div className="auth__group">
                <label>
                  {err
                    ? <div className="auth__field field">
                        <input onChange={this.onChange} onKeyDown={this.onKeyPress} value={inn} id="inn" type="text" className="auth__input warning" autoCorrect="off" required />
                        <label className="auth__label">ИНН *</label>  
                      </div>  
                    :
                      <div className="auth__field field">
                        <input onChange={this.onChange} onKeyDown={this.onKeyPress} value={inn} id="inn" type="text" className="auth__input" autoCorrect="off" required />
                        <label className="auth__label">ИНН *</label>  
                      </div>
                  }
                </label>
              </div>
              <div className="auth__group">
                <label>
                  {err
                    ? 
                      <div className="auth__field field">
                        <input onChange={this.onChange} onKeyDown={this.onKeyPress} value={legalAdress} id="legalAdress" type="text" className="auth__input warning" autoCorrect="off" required />
                        <label className="auth__label">Юридический адрес *</label>
                      </div>  
                    :
                      <div className="auth__field field">
                        <input onChange={this.onChange} onKeyDown={this.onKeyPress} value={legalAdress} id="legalAdress" type="text" className="auth__input" autoCorrect="off" required />
                        <label className="auth__label">Юридический адрес *</label>
                      </div>
                  }
                </label>
              </div>
              <div className="auth__group">
                <label>
                  <div className="auth__field field">
                    <input onChange={this.onChange} onKeyDown={this.onKeyPress} value={webSite} id="webSite" type="text" className="auth__input" autoCorrect="off" required />
                    <label className="auth__label">Адрес web-сайта</label>  
                  </div>
                </label>
              </div>
              <div className="auth__group">
                <label>
                  <CreatableSelect
                    isClearable
                    onChange={this.handleChange}
                    //onInputChange={this.handleInputChange}
                    value={direction}
                    options={options}
                    placeholder={direction}
                    className="auth__options"
                    styles={{color: 'red'}}
                  />
                </label>
              </div>
              <div className="auth__password-ask ask__register">
                <label>
                  <input type="checkbox" />
                </label>
                <span>Нажимая на кнопку "Зарегистрироваться", я даю<br />{/*<a>*/}согласие на обработку персональных данных{/*</a>*/}</span> {/** Добавить тег <a> */}
              </div>
              {email && pass && repeatpass && name && surname && phone && companyName && inn && legalAdress && direction
                ? 
                <div>
                  <Link to="/">
                    <button
                      onClick={this.onSubmit}
                      type="submit"
                      className="auth__button"
                    >
                      Зарегистрироваться
                    </button>
                  </Link>
                </div>
                :
                <div>
                    <button
                      type="submit"
                      className="auth__button inaccessible"
                    >
                      Зарегистрироваться
                    </button>
                </div>
              }
              <div className="auth__error">
                {err}
              </div>
            </div>
            <div className='auth__registration registration'>
              <div className='registration__no-login'>Уже зарегистрированы?</div>
              <div className='registration__link'><Link to='/'>Авторизуйтесь</Link>&nbsp;или войдите с помощью соцсетей</div>
            </div>
          </div>
          <div className='auth__right right'>
           <div className='right__image image'>
              <div className='image__photo'></div>
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

export default connect(
  mapStateToProps,
  null //{ registerUser }
  // @ts-ignore
)(withRouter(Register));
