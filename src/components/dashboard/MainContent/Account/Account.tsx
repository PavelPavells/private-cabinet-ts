/** ********** IMPORT LIBRARIES ********** */
import React, { Component } from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

/** ********** IMPORT ACTIONS ********** */
import { fetchDataAccount } from "../../../../actions/accountActions";

/** ********** IMPORT LOADER from __UTILS__ ********** */
//import Loader from "../../../../__utils__/Spinner";

/** ********** IMPORT STYLES ********** */
import "./Account.scss";

class Account extends Component {
  //constructor(props) {
  //  super(props);
    state = {
      company_name: "",
      company_inn: "",
      name: "",
      pass: "",
      email: "",
      contact_person: "",
      company_phone: "",
      errors: {}
    };
    //console.log(props);
  //}

  /** ********** FETCH DATA ACCOUNT ********** */
  componentDidMount() {
    //this.props.fetchDataAccount();
  }

  /** ********** CHANGE DATA FOR REIGSTER ACCOUNT ********** */
  // @ts-ignore
  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  /** ********** RESPONSE DATA FOR LOGIN ACCOUNT ********** */
  // @ts-ignore
  onSubmit = e => {
    e.preventDefault();
    const userData = {
      company_name: this.state.company_name,
      company_inn: this.state.company_inn,
      name: this.state.name,
      pass: this.state.pass,
      email: this.state.email,
      contact_person: this.state.contact_person,
      company_phone: this.state.company_phone,
      errors: {}
    };
    // @ts-ignore
    this.props.fetchDataAccount(userData);
  };
  render() {
    //const { account } = this.props;
    //console.log(account);
    //if(account.data.length === 0 || account.isFetching) {
    //  return <Loader />
    //}
    console.log(this.props)
    return (
      <div className="main-content">

        {/**-------------------------- НАСТРОЙКА УЧЕТНОЙ ЗАПИСИ ------------------------------ */}
        
          <h3>Основные настройки</h3>
          <div className="account-form">
            <p>Информация о Вашем профиле</p>
            <form
              className="account-form__form"
              onSubmit={this.onSubmit}
            >
              <label>
                <div className="account-form__form-name">Изменить имя компании Вы можете здесь.</div>
                <input
                  value={this.state.company_name}
                  onChange={this.onChange}
                  id="company_name"
                  type="company_name"
                  className="account-form__form-input"
                />
              </label>
              <label>
                <div className="account-form__form-name">Изменить ИНН компании Вы можете здесь.</div>
                <input
                  value={this.state.company_inn}
                  onChange={this.onChange}
                  id="company_inn"
                  type="company_inn"
                  className="account-form__form-input"
                />
              </label>
              <label>
                <div className="account-form__form-name">Изменить имя пользователя Вы можете здесь.</div>
                <input
                  value={this.state.name}
                  onChange={this.onChange}
                  id="name"
                  type="name"
                  className="account-form__form-input"
                />
              </label>
              <label>
                <div className="account-form__form-name">Изменить пароль Вы можете здесь.</div>
                <input
                  value={this.state.pass}
                  onChange={this.onChange}
                  id="pass"
                  type="password"
                  className="account-form__form-input"
                />
              </label>
              <label>
                <div className="account-form__form-name">Изменить Email Вы можете здесь.</div>
                <input
                  value={this.state.email}
                  onChange={this.onChange}
                  id="email"
                  type="email"
                  className="account-form__form-input"
                />
              </label>
              <label>
                <div className="account-form__form-name">Изменить контактное лицо Вы можете здесь.</div>
                <input
                  value={this.state.contact_person}
                  onChange={this.onChange}
                  id="contact_person"
                  type="contact-person"
                  className="account-form__form-input"
                />
              </label>
              <label>
                <div className="account-form__form-name">Изменить телефон Вы можете здесь.</div>
                <input
                  value={this.state.company_phone}
                  onChange={this.onChange}
                  id="company_phone"
                  type="company_phone"
                  className="account-form__form-input"
                />
              </label>
              <button type="submit" className="account-form__form-button">
                Изменить настройки
              </button>
            </form>
          </div>
        
        {/**-------------------------- НАСТРОЙКА АВАТАРА ------------------------------ */}

          {/*<h2>Изменить Аватар</h2>*/}
          <div className="account-photo">
            <div className="account-photo__text">
              <h3>Здесь Вы можете поменять Ваш Аватар</h3>
              <p>
                Вы можете загрузить фото <br /> с Вашего компютера или выбрать
                на сайте
                <br />
                <a
                  href="https://gravatar.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  gravatar.com
                </a>
              </p>
            </div>
            <div className="account-photo__photo">
              <input type="file" name="file" id="file" className="account-photo__inputfile" />
              {/*<label htmlFor="file" className='account-photo__image'>Выбрать фото</label>
              <p className='account-photo__file'>Максимальный размер 200Кб.</p>*/}
            </div>
          </div>
        {/**---------------------- СЕКЦИЯ ДОПОЛНИТЕЛЬНЫХ НАСТРОЕК ------------------- */}
        <div className="account-more">
          <div className="settings-more"></div>
        </div>
      </div>
    );
  }
}
// @ts-ignore
Account.propTypes = {
    data: PropTypes.object.isRequired,
    fetchDataAccount: PropTypes.func.isRequired
}
// @ts-ignore
const mapStateToProps = state => ({
    data: state.account
});
export default withRouter(
  connect(
    mapStateToProps,
    { fetchDataAccount }
  )(Account)
);