/** ********** IMPORT LIBRARIES ********** */
import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

/** ********** IMPORT ACTIONS ********** */
import { fetchDataControl } from "../../../../actions/controlActions";

/** ********** IMPORT LOADER from __UTILS__ ********** */
//import Loader from "../../../../__utils__/Spinner";

/** ********** IMPORT STYLES ********** */
import "./Control.scss";

class Control extends Component {
  //constructor() {
  //  super();
    state = {
        name: "",
        email: "",
        contact_person: "",
        pass: "",
        isCheckedAdmin: false,
        isCheckedManager: false
    };
  //}

  /** ********** FETCH DATA FOR CONTROL ********** */
  componentDidMount() {
    //this.props.fetchDataControl();
  }
  
  isCheckedAdmin = () => {
    this.setState({ isCheckedAdmin: !this.state.isCheckedAdmin })
  }
  isCheckedManager = () => {
    this.setState({ isCheckedManager: !this.state.isCheckedManager })
  }

  /** ********** CHANGE DATA FOR REIGSTER ACCOUNT ********** */
  // @ts-ignore
  onChange = e => {
    this.setState({ [e.target.id]: e.target.value })
  }

  /** ********** RESPONSE DATA FOR REIGSTER ACCOUNT ********** */
  // @ts-ignore
  onSubmit = e => {
    e.preventdefault();
    let changeUserData = {
        name: this.state.name,
        email: this.state.email,
        contact_person: this.state.contact_person,
        pass: this.state.pass,
        //isChecked: this.state.changeFlag
    }
    // @ts-ignore
    this.props.fetchDataControl(changeUserData);
  }
  render() {
    //const { control } = this.props;
    //console.log(control);
    //if(control.data.length === 0 || control.isFetching) {
    //  return <Loader />
    //}
    return (
      <div className="main-content">

        {/**-------------------------- SECTION FOR CHANGE PERSON DATA ------------------------------ */}

       {/* <h1>Регистрация пользователя</h1> */}
        
          <h3>Добавить нового пользователя</h3>
          <div className="main-content__main-settings-wrapper">
            <p>Добавить нового пользователя Вы можете здесь</p>
            <form
              className="main-content__main-settings-form-control"
              onSubmit={this.onSubmit}
            >
              <label>
                <div className="auth-label">Имя пользователя</div>
                <input
                  value={this.state.name}
                  onChange={this.onChange}
                  id="name"
                  type="name"
                  className="auth-input main-content__forms"
                />
                <div className="auth-label__description">
                  Изменить имя пользователя Вы можете здесь.
                </div>
              </label>
              <label>
                <div className="auth-label">Контактное лицо</div>
                <input
                  value={this.state.contact_person}
                  onChange={this.onChange}
                  id="contact_person"
                  type="contact-person"
                  className="auth-input"
                />
                <div className="auth-label__description">
                  Изменить контактное лицо Вы можете здесь.
                </div>
              </label>
              <label>
                <div className="auth-label">Пароль</div>
                <input
                  value={this.state.pass}
                  onChange={this.onChange}
                  id="pass"
                  type="pass"
                  className="auth-input main-content__forms"
                />
                <div className="auth-label__description">
                  Изменить пароль Вы можете здесь.
                </div>
              </label>
              <label>
                <div className="auth-label">Email</div>
                <input
                  value={this.state.email}
                  onChange={this.onChange}
                  id="email"
                  type="email"
                  className="auth-input main-content__forms"
                />
                <div className="auth-label__description">
                  Изменить Email Вы можете здесь.
                </div>
              </label>

              <label>
              <div className="auth-label">Администратор</div>
              <input
              // @ts-ignore
                value={this.state.isCheckedAdmin}  
                type="checkbox"
                className="main-content__forms-control"
                //onClick={this.changeFlag}
              />
              <div className="auth-label__description">
                Добавить привелегии Админа Вы можете здесь.
              </div>
            </label>
            <label>
              <div className="auth-label">Менеджер</div>
              <input
              // @ts-ignore
                value={this.state.isCheckedManager}
                type="checkbox"
                className="main-content__forms-control"
                //onClick={this.changeFlag}
              />
              <div className="auth-label__description">
                Добавить привелегии Менеджера Вы можете здесь.
              </div>
            </label>

              <button type="submit" className="auth-button">
                Добавить нового пользователя
              </button>
            </form>
          </div>
      </div>
    );
  }
}
// @ts-ignore
Control.propTypes = {
  data: PropTypes.object.isRequired,
  fetchDataControl: PropTypes.func.isRequired
};
// @ts-ignore
const mapStateToProps = state => ({
   data: state.control
});
export default connect(
  mapStateToProps,
  { fetchDataControl }
)(Control);