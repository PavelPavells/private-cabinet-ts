/** ********** IMPORT LIBRARIES ********** */
import React from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

/** ********** IMPORT ACTIONS ********** */
import { registerUser } from "../../actions/authActions";

/** ********** IMPORT STYLES ********** */
import "./Auth.scss";

class Register extends React.PureComponent {
  constructor() {
    // @ts-ignore
    super();
    this.state = {
      company_name: "",
      company_inn: "",
      name: "",
      pass: "",
      email: "",
      contact_person: "",
      company_phone: "",
      errors: {}
    };
  }

  /** ********** FETCH DATA ACCOUNT ********** */
  componentDidMount() {
    // @ts-ignore
    if (this.props.auth.isAuthenticated) {
      // @ts-ignore
      this.props.history.push('/dashboard');
    }
  }
  // @ts-ignore
  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  /** ********** CHANGE DATA FROM INPUT ********** */
  // @ts-ignore
  onChange = event => {
    this.setState({ [event.target.id]: event.target.value });
  };

  /** ********** REGISTER NEW USER ********** */
  // @ts-ignore
  onSubmit = event => {
    event.preventDefault();
    const newUser = {
      // @ts-ignore
      name: this.state.name,
      // @ts-ignore
      email: this.state.email,
      // @ts-ignore
      company_name: this.state.company_name,
      // @ts-ignore
      company_inn: this.state.company_inn,
      // @ts-ignore
      contact_person: this.state.contact_person,
      // @ts-ignore
      company_phone: this.state.company_phone,
      // @ts-ignore
      pass: this.state.pass
    };
    // @ts-ignore
    this.props.createNewUser(newUser, this.props.history);
  };
  render() {
    // @ts-ignore
    const { errors } = this.state;
    return (
      <div className="wrapper">
        <div className="header-logo">
          <img src="../../img/carddex_logo.png" alt="" />
        </div>
        <div className="base-wrapper">
          <div className="main-paragraph">
            <h1>Личный кабинет Карддекс</h1>
            <h3>Личный кабинет партнеров и дилеров Карддекс</h3>
            <p>
              Войдите или зарегистрируйтесь для получения всей доступной
              информации по продуктам Карддекс, вашим заказам, скидкам и
              предложениям.
            </p>
          </div>
          <div className="wrapper-separator"></div>
          <div className="wrapper-auth">
            <div className="wrapper-auth__header">
              <Link to="/" className="link-login">
                Регистрация                                   {/** ВХОД */}
              </Link>
              {/*
              <Link to="/register" className="link-register active">
                Регистрация
              </Link>
              */}
            </div>
            <form className="auth-form" noValidate onSubmit={this.onSubmit}>
              <div className="auth-group">
                <label>
                  <div className="auth-label">Наименование компании</div>
                  <input
                    onChange={this.onChange}
                    // @ts-ignore
                    value={this.state.company_name}
                    // @ts-ignore
                    error={errors.company_name}
                    id="company_name"
                    type="company_name"
                    className="auth-input"
                  />
                  <div className="auth-error">{errors.company_name}</div>
                </label>
              </div>
              <div className="auth-group">
                <label>
                  <div className="auth-label">ИНН</div>
                  <input
                    onChange={this.onChange}
                    // @ts-ignore
                    value={this.state.company_inn}
                    // @ts-ignore
                    error={errors.company_inn}
                    id="company_inn"
                    type="company_name"
                    className="auth-input"
                  />
                  <div className="auth-error">{errors.company_inn}</div>
                </label>
              </div>
              <div className="auth-group">
                <div className="bottom-group">
                  <label>
                    <div className="auth-label">Имя пользователя</div>
                    <input
                      onChange={this.onChange}
                      // @ts-ignore
                      value={this.state.name}
                      // @ts-ignore
                      error={errors.name}
                      id="name"
                      type="text"
                      className="auth-input"
                    />
                    <div className="auth-error">{errors.name}</div>
                  </label>
                </div>
                <div className="auth-group">
                  <label>
                    <div className="auth-label">Пароль</div>
                    <input
                      onChange={this.onChange}
                      // @ts-ignore
                      value={this.state.pass}
                      // @ts-ignore
                      error={errors.pass}
                      id="pass"
                      type="password"
                      className="auth-input"
                    />
                    <div className="auth-error">{errors.pass}</div>
                  </label>
                </div>
                <div className="auth-group">
                  <label>
                    <div className="auth-label">Email</div>
                    <input
                      onChange={this.onChange}
                      // @ts-ignore
                      value={this.state.email}
                      // @ts-ignore
                      error={errors.email}
                      id="email"
                      type="email"
                      className="auth-input"
                    />
                    <div className="auth-error">{errors.email}</div>
                  </label>
                </div>
                <div className="auth-group">
                  <label>
                    <div className="auth-label">Контактное лицо</div>
                    <input
                      onChange={this.onChange}
                      // @ts-ignore
                      value={this.state.contact_person}
                      // @ts-ignore
                      error={errors.contact_person}
                      id="contact_person"
                      type="contact_person"
                      className="auth-input"
                    />
                  </label>
                </div>
                <div className="auth-group">
                  <label>
                    <div className="auth-label">Телефон</div>
                    <input
                      onChange={this.onChange}
                      // @ts-ignore
                      value={this.state.company_phone}
                      // @ts-ignore
                      error={errors.company_phone}
                      id="company_phone"
                      type="company_name"
                      className="auth-input"
                    />
                  </label>
                </div>
                <div>
                  <div className="auth-password__ask">
                    <label>
                      <input type="checkbox" />
                      Запомнить меня
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
                  <button type="submit" className="auth-button">
                    Зарегестрироваться
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="footer">
          <div className="footer-copy">
            <h1>Copyright 2019 &copy; CARDDEX</h1>
            <p>Информация на сайте не является публичной офертой</p>
          </div>
        </div>
      </div>
    );
  }
}

// @ts-ignore
Register.propTypes = {
  registerUser: PropTypes.func,
  auth: PropTypes.object,
  errors: PropTypes.object.isRequired
};

// @ts-ignore
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  null //{ registerUser }
  // @ts-ignore
)(withRouter(Register));
