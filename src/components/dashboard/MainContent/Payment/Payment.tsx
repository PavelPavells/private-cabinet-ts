/** ********** IMPORT LIBRARIES ********** */
import React, { Component } from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import "react-dates/initialize";
// @ts-ignore
import { DateRangePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";
import "moment/locale/ru";

/** ********** IMPORT ACTIONS ********** */
import { 
  fetchDataPayment,
  fetchDataLastPagePayment
} from "../../../../actions/paymentActions";

/** ********** IMPORT LOADER from __UTILS__ ********** */
import Loader from "../../../../__utils__/Spinner";

/** ********** IMPORT STYLES ********** */
import "./Payment.scss";

class Payment extends Component {

  state = {
    startDate: null,
    endDate: null,
    login: '',
    offset: 0,
    page: 0,
    optionFilter: 15
  };

  /** ********** FETCH DATA ACCOUNT ********** */
  componentDidMount() {
    let data = {
        offset: this.state.offset,
        size: this.state.optionFilter,
        // @ts-ignore
        login: this.props.data
    }
    // @ts-ignore
    this.props.fetchDataPayment(data);
  }

  /** ********** CHANGE DATES FOR SEARCH ********** */
  // @ts-ignore
  onDatesChange = ({ startDate, endDate }) => {
    this.setState({ startDate, endDate }, () => {
      let data = {
        offset: this.state.offset,
        size: this.state.optionFilter,
        // @ts-ignore
        startDate: this.state.startDate ? this.state.startDate._d.toISOString().replace(/([^T]+)T([^\.]+).*/g, "$1 $2") : null, // eslint-disable-line
        // @ts-ignore
        endDate: this.state.endDate ? this.state.endDate._d.toISOString().replace(/([^T]+)T([^\.]+).*/g, "$1 $2") : null, // eslint-disable-line
        // @ts-ignore
        login: this.props.data
      }
      // @ts-ignore
      this.props.fetchDataPayment(data);
    });
  };

  /** ********** FIRST PAGE PAYMENT PAGINATION ********** */
  getFirstPage = () => {
    this.setState({ page: 0 });
    let data = {
      offset: 0,
      size: this.state.optionFilter,
      // @ts-ignore
      login: this.props.data,
      // @ts-ignore
      startDate: this.state.startDate ? this.state.startDate._d.toISOString().replace(/([^T]+)T([^\.]+).*/g, "$1 $2") : null, // eslint-disable-line
      // @ts-ignore
      endDate: this.state.endDate ? this.state.endDate._d.toISOString().replace(/([^T]+)T([^\.]+).*/g, "$1 $2") : null // eslint-disable-line
    }
    // @ts-ignore
    this.props.fetchDataPayment(data);
  };

  /** ********** PREVIOUS PAGE PAYMENT PAGINATION ********** */
  getPreviousPage = () => {
    this.setState(prevState => {
      // @ts-ignore
        return prevState.page > 0 ? ({ page: prevState.page - 1 }) : null;
      }, () => {
        let data = {
          offset: this.state.page,
          size: this.state.optionFilter,
          // @ts-ignore
          login: this.props.data,
          // @ts-ignore
          startDate: this.state.startDate ? this.state.startDate._d.toISOString().replace(/([^T]+)T([^\.]+).*/g, "$1 $2") : null, // eslint-disable-line
          // @ts-ignore
          endDate: this.state.endDate ? this.state.endDate._d.toISOString().replace(/([^T]+)T([^\.]+).*/g, "$1 $2") : null // eslint-disable-line
        }
        // @ts-ignore
        this.props.fetchDataPayment(data);
      }
    );
  };

  /** ********** NEXT PAGE PAYMENT PAGINATION ********** */
  getNextPage = () => {
    //const { payload } = this.props.pricelist.data;
    this.setState(prevState => {
        //return prevState.page >= 0 && prevState.page < payload.page ? ({ page: prevState.page + 1 }) : null;
        // @ts-ignore
        return prevState.page >= 0 ? ({ page: prevState.page + 1 }) : null;
      }, () => {
        let data = {
          offset: this.state.page,
          size: this.state.optionFilter,
          // @ts-ignore
          login: this.props.data,
          // @ts-ignore
          startDate: this.state.startDate ? this.state.startDate._d.toISOString().replace(/([^T]+)T([^\.]+).*/g, "$1 $2") : null, // eslint-disable-line
          // @ts-ignore
          endDate: this.state.endDate ? this.state.endDate._d.toISOString().replace(/([^T]+)T([^\.]+).*/g, "$1 $2") : null // eslint-disable-line
        }
        // @ts-ignore
        this.props.fetchDataPayment(data);
      }
    );
  };

  /** ********** LAST PAGE PAYMENT PAGINATION ********** */
  getLastPage = () => {
    console.log('NOT PAGE FIELD')
    //const { payload } = this.props.pricelist.data;
    //this.setState({ page: payload.page });
    //let data =  {
    //    offset: this.state.offset,
    //    size: this.state.optionFilter,
    //    login: this.props.data,
    //    startDate: this.state.startDate ? this.state.startDate._d.toISOString().replace(/([^T]+)T([^\.]+).*/g, "$1 $2") : null, // eslint-disable-line
    //    endDate: this.state.endDate ? this.state.endDate._d.toISOString().replace(/([^T]+)T([^\.]+).*/g, "$1 $2") : null // eslint-disable-line
    //  }
    //  this.props.fetchDataLastPagePayment(data);
  };

  /** ********** REFRESH DATA FOR PAYMENT TABLE ********** */
  handleRefreshData = () => {
      let data = {
        offset: this.state.page,
        size: this.state.optionFilter,
        // @ts-ignore
        login: this.props.data,
      }
      // @ts-ignore
      this.props.fetchDataPayment(data);
  };

  /** ********** FILTER FOR VISION DATA IN TABLE ********** */
  // @ts-ignore
  handleOptionFilter = event => {
    let elem = event.target.value;
    this.setState({
        optionFilter: elem
      }, () => {
        let data = {
          offset: this.state.page,
          size: this.state.optionFilter,
          // @ts-ignore
          login: this.props.data,
          // @ts-ignore
          startDate: this.state.startDate ? this.state.startDate._d.toISOString().replace(/([^T]+)T([^\.]+).*/g, "$1 $2") : null, // eslint-disable-line
          // @ts-ignore
          endDate: this.state.endDate ? this.state.endDate._d.toISOString().replace(/([^T]+)T([^\.]+).*/g, "$1 $2") : null // eslint-disable-line
        }
        // @ts-ignore
        this.props.fetchDataPayment(data);
      }
    );
  };
  render() {
    // @ts-ignore
    const { payment } = this.props;
    console.log(payment);
    if(payment.data.length === 0) {
      return <Loader />
    }
    return (
      <main className="main-content">
        {/** ========================== HEADER TABLE ============================== */}

        <header className="wrapper-table__header">
          <section className="table__header-left">
            <div className="table__header-left-up"></div>
          </section>
          <section className="table__header-right">
          
            <form 
              // @ts-ignore
              onChange={this.handleSendSearch}>
              <DateRangePicker
                anchorDirection="left"
                block={false}
                customArrowIcon={null}
                customCloseIcon={null}
                customInputIcon={null}
                disabled={false}
                displayFormat={function noRefCheck() {}}
                enableOutsideDays={false}
                horizontalMargin={0}
                initialVisibleMonth={null}
                isDayBlocked={function noRefCheck() {}}
                isDayHighlighted={function noRefCheck() {}}
                isOutsideRange={function noRefCheck() {}}
                startDate={this.state.startDate} // momentPropTypes.momentObj or null,
                startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
                endDate={this.state.endDate} // momentPropTypes.momentObj or null,
                endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
                onDatesChange={this.onDatesChange} // PropTypes.func.isRequired,
                // @ts-ignore
                focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                // @ts-ignore
                onFocusChange={focusedInput =>
                  this.setState({ focusedInput })
                } // PropTypes.func.isRequired,
                startDatePlaceholderText="Дата начала"
                endDatePlaceholderText="Дата конца"
                showClearDates
                navNext={null}
                navPosition="navPositionTop"
                navPrev={null}
                onNextMonthClick={function noRefCheck() {}}
                onPrevMonthClick={function noRefCheck() {}}
              />
            </form>
          </section>
        </header>

        {/** ========================== HEADER MAIN TABLE ============================== */}

        <section className="wrapper-table__main-pay">
          <section className="wrapper-table__header-pay">
            {payment.data.payload.recordDisplayRules.map(
              // @ts-ignore
              (index, key) => {
              if (index.visible === 1) {
                return (
                  <div key={index.field_name} className="name-of-product">
                    <div
                      className="table-header__text"
                      style={{ textAlign: "center" }}
                    >
                      <strong>{index.display_name}</strong>
                    </div>
                  </div>
                );
              } else {
                return null;
              }
            })}
          </section>

          {/** ========================== DOOR  TABLE ============================== */}

          <section className="wrapper-table__main-categories">
            <div
              className="wrapper-itype__name"
            >
              {payment.data.payload.recordSet.map(
                // @ts-ignore
                (index, key) => (
                <div key={key} className="wrapper-column">
                  <div className="toggle-itype-name-pay" key={key.id}>
                    <div>{index.partner_name}</div>
                  </div>
                  <div className="toggle-itype-name-pay" key={key.id}>
                    <div className="numbers">
                      {index.cash_date ? index.cash_date.replace(/([^T]+)T([^\.]+).*/g, "$1 $2") : index.cash_date} {/* eslint-disable-line */}
                    </div>
                  </div>
                  <div className="toggle-itype-name-pay" key={key.id}>
                    <div className="numbers">{index.cash_sum}</div>
                  </div>
                  <div className="toggle-itype-name-pay" key={key.id}>
                    <div className="numbers">{index.cash_sum_acum}</div>
                  </div>
                  <div className="toggle-itype-name-pay" key={key.id}>
                    <div>{index.currency_str}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/** ========================== ELECTRONIC CONTROL  TABLE ============================== */}
        </section>

        {/** ========================== FOOTER TABLE ============================== */}

        <footer className="wrapper-table__footer">
          <section className="wrapper-table__footer-left">
            <div
              onClick={this.getFirstPage}
              className="footer-table__first-page"
            ></div>
            <div
              onClick={this.getPreviousPage}
              className="footer-table__prev-page"
            ></div>
            <div
              onClick={this.getNextPage}
              className="footer-table__next-page"
            ></div>
            <div
              onClick={this.getLastPage}
              className="footer-table__last-page"
            ></div>
            <div className="footer-table__options">
              <label>
                <select
                  value={this.state.optionFilter}
                  onChange={this.handleOptionFilter}
                >
                  <option value={15}>15</option>
                  <option value={30}>30</option>
                  <option value={50}>50</option>
                </select>
              </label>
            </div>
            <div className="footer-table__text">Позиций на странице</div>
          </section>
          <section className="wrapper-table__footer-right">
            <div className="footer-table__pages">
              {this.state.optionFilter} из {payment.data.payload.countUUID}
            </div>
            {<Loader /> && (
              <div
                onClick={this.handleRefreshData}
                className="footer-table__refresh-data"
              ></div>
            )}
          </section>
        </footer>
      </main>
    );
  }
}
// @ts-ignore
Payment.propTypes = {
   payment: PropTypes.object.isRequired,
   fetchDataPayment: PropTypes.func.isRequired
}

// @ts-ignore
const mapStateToProps = state => ({
   payment: state.payment
})
export default connect(
   mapStateToProps,
   { fetchDataPayment, fetchDataLastPagePayment }
)(Payment)