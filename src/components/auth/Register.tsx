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
      direction: "Торговая компания",
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
      { value: 'Пользователь системы СКУД', label: 'Пользователь сиситемы СКУД' }
    ]

    return (
      /**
       * Компонента Регистрация
       */
      <div className='auth'>
          <div className='auth__left left'>
            <h1 className='auth__heading'>Регистрация</h1>
            <div className='auth__necessary'>Поля, отмеченные знаком «*», обязательны для заполнения</div>
            <div className="auth__forms forms">
              <div className="auth-group">
                <label>
                  <div className="auth-label">Ваш e-mail</div>
                  <input
                    onChange={this.onChange}
                    onKeyDown={this.onKeyPress}
                    value={email}
                    id="email"
                    type="email"
                    className="auth-input"
                    placeholder="ivanov@gmail.com"
                  />
                </label>
              </div>
              <div className="auth-group">
                <label>
                  <div className="auth-label">Придумайте пароль *</div>
                  <input
                    onChange={this.onChange}
                    onKeyDown={this.onKeyPress}
                    value={pass}
                    id="pass"
                    type="password"
                    className="auth-input"
                    placeholder="sbjn654btr"
                  />
                </label>
              </div>
              <div className="auth-group">
                <label>
                  <div className="auth-label">Повторите пароль *</div>
                  <input
                    onChange={this.onChange}
                    onKeyDown={this.onKeyPress}
                    value={repeatpass}
                    id="pass-repeat"
                    type="password"
                    className="auth-input"
                    placeholder="sbjn654btr"
                  />
                </label>
              </div>
              <div className="auth-group">
                <label>
                  <div className="auth-label">Имя *</div>
                  <input
                    onChange={this.onChange}
                    onKeyDown={this.onKeyPress}
                    value={name}
                    id="name"
                    type="text"
                    className="auth-input"
                    placeholder="Иван"
                  />
                </label>
              </div>
              <div className="auth-group">
                <label>
                  <div className="auth-label">Фамилия *</div>
                  <input
                    onChange={this.onChange}
                    onKeyDown={this.onKeyPress}
                    value={surname}
                    id="surname"
                    type="text"
                    className="auth-input"
                    placeholder="Иванов"
                  />
                </label>
              </div>
              <div className="auth-group">
                <label>
                  <div className="auth-label">Отчетсво</div>
                  <input
                    onChange={this.onChange}
                    onKeyDown={this.onKeyPress}
                    value={patronymic}
                    id="patronymic"
                    type="text"
                    className="auth-input"
                    placeholder="Иванович"
                  />
                </label>
              </div>
              <div className="auth-group">
                <label>
                  <div className="auth-label">Контактный телефон *</div>
                  <input
                    onChange={this.onChange}
                    onKeyDown={this.onKeyPress}
                    value={phone}
                    id="contact-phone"
                    type="text"
                    className="auth-input"
                    placeholder="8 (123) 456 78 90"
                  />
                </label>
              </div>
              <div className="auth-group">
                <label>
                  <div className="auth-label">Полное наименование компании *</div>
                  <input
                    onChange={this.onChange}
                    onKeyDown={this.onKeyPress}
                    value={companyName}
                    id="company-name"
                    type="text"
                    className="auth-input"
                    placeholder="Иванов и Ко"
                  />
                </label>
              </div>
              <div className="auth-group">
                <label>
                  <div className="auth-label">ИНН *</div>
                  <input
                    onChange={this.onChange}
                    onKeyDown={this.onKeyPress}
                    value={inn}
                    id="inn"
                    type="text"
                    className="auth-input"
                    placeholder="Введите Ваш ИНН"
                  />
                </label>
              </div>
              <div className="auth-group">
                <label>
                  <div className="auth-label">Юридический адрес *</div>
                  <input
                    onChange={this.onChange}
                    onKeyDown={this.onKeyPress}
                    value={legalAdress}
                    id="legal-adress"
                    type="text"
                    className="auth-input"
                    placeholder="Введите Ваш юридический адрес"
                  />
                </label>
              </div>
              <div className="auth-group">
                <label>
                  <div className="auth-label">Адрес web-сайта</div>
                  <input
                    onChange={this.onChange}
                    onKeyDown={this.onKeyPress}
                    value={webSite}
                    id="web-site"
                    type="text"
                    className="auth-input"
                    placeholder="Адрес Вашего сайта"
                  />
                </label>
              </div>
              <div className="auth-group">
                <label>
                  <div className="auth-label">Направление деятельности</div>
                  <CreatableSelect
                    isClearable
                    onChange={this.handleChange}
                    //onInputChange={this.handleInputChange}
                    value={direction}
                    options={options}
                    placeholder={direction}
                  />
                </label>
              </div>
              <div className="auth-password__ask">
                <label>
                  <input type="checkbox" />
                </label>
                <span>Нажимая на кнопку "Зарегистрироваться", я даю<br /><a>согласие на обработку персональных данных</a></span>
              </div>
              <div>
                <Link to="/">
                  <button
                    onClick={this.onSubmit}
                    type="submit"
                    className="auth-button"
                  >
                    Зарегистрироваться
                  </button>
                </Link>
              </div>
              <div className="auth-error">
                {err}
              </div>
            </div>
            <div className='auth__registration registration'>
              <div className='registration__no-login'>Уже зарегестрированы?</div>
              <div className='registration__link'><Link to='/'>Авторизуйтесь</Link>&nbsp;или войдите с помощью соцсетей</div>
            </div>
          </div>
          <div className='auth__right right'>
            <div className="right__logo logo"></div>
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
