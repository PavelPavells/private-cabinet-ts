/** ********** IMPORT LIBRARIES ********** */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

/** ********** IMPORT ACTIONS ********** */
import { fetchDataAccount } from '../../../../actions/accountActions';

/** ********** IMPORT LOADER from __UTILS__ ********** */
// import Loader from "../../../../__utils__/Spinner";

/** ********** IMPORT STYLES ********** */
import './Account.scss';

class Account extends Component {
    // constructor(props) {
    //  super(props);
    state = {
        company_name: '',
        company_inn: '',
        name: '',
        pass: '',
        email: '',
        contact_person: '',
        company_phone: ''
    };
    // console.log(props);
    // }

    /** ********** FETCH DATA ACCOUNT ********** */
    componentDidMount() {
        // this.props.fetchDataAccount();
    }

    /** ********** CHANGE DATA FOR REIGSTER ACCOUNT ********** */
    // @ts-ignore
    onChange = (e) => {
        this.setState({ [e.target.id]: e.target.value });
    };

    /** ********** RESPONSE DATA FOR LOGIN ACCOUNT ********** */
    // @ts-ignore
    onSubmit = () => {
        // e.preventDefault();
        // const userData = {
        //     company_name: this.state.company_name,
        //     company_inn: this.state.company_inn,
        //     name: this.state.name,
        //     pass: this.state.pass,
        //     email: this.state.email,
        //     contact_person: this.state.contact_person,
        //     company_phone: this.state.company_phone,
        //     errors: {}
        // };
        // // @ts-ignore
        // this.props.fetchDataAccount(userData);
    };

    render() {
        // const { account } = this.props;
        // console.log(account);
        // if(account.data.length === 0 || account.isFetching) {
        //  return <Loader />
        // }
        // console.log(this.props)
        return (
            <div className="main-content">
                <div className="account-form">
                    <p className="form__paragraph">Информация о Вашем профиле</p>
                    <form className="account-form__form" onSubmit={this.onSubmit}>
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
            </div>
        );
    }
}
// @ts-ignore
// Account.propTypes = {
//     data: PropTypes.object.isRequired,
//     fetchDataAccount: PropTypes.func.isRequired
// };
// @ts-ignore
const mapStateToProps = (state) => ({
    data: state.account
});

export default withRouter(
    // @ts-ignore
    connect(mapStateToProps, { fetchDataAccount })(Account)
);
