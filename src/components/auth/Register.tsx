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
  readonly errors: any
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
            <h1 className='auth__heading'>Регистрация</h1>
            <div className='auth__necessary'>Поля, отмеченные знаком «*», обязательны для заполнения</div>
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
                    ? <div className="aith__field field">
                        <input onChange={this.onChange} onKeyDown={this.onKeyPress} value={inn} id="inn" type="text" className="auth__input warning" autoCorrect="off" required />
                        <label className="auth__label">ИНН *</label>  
                      </div>  
                    :
                      <div className="aith__field field">
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
            <div className="right__logo logo"><div className="image"></div></div>
            <div className='right__text'>Личный кабинет партнера</div>
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
