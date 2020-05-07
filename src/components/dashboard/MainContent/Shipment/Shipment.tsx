/** ********** IMPORT LIBRARIES ********** */
import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "react-dates/initialize";
// @ts-ignore
import { DateRangePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";

/** ********** IMPORT LOADER from __UTILS__ ********** */
import Loader from "../../../../__utils__/Spinner";

/** ********** IMPORT ACTIONS ********** */
import { 
  fetchDataShipment, 
  fetchDataLastPageShipment 
} from "../../../../actions/shipmentActions";

/** ********** IMPORT STYLES ********** */
import "./Shipment.scss";

class Shipment extends Component {

  state = {
    login: "",
    startDate: null,
    endDate: null,
    offset: 0,
    page: 0,
    optionFilter: 15,
    toggleMoreShipment: false
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
    this.props.fetchDataShipment(data);
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
      this.props.fetchDataShipment(data);
    });
  };

  /** ********** FIRST PAGE SHIPMENT PAGINATION ********** */
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
    this.props.fetchDataShipment(data);
  };

  /** ********** PREVIOUS PAGE SHIPMENT PAGINATION ********** */
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
        this.props.fetchDataShipment(data);
      }
    );
  };

  /** ********** NEXT PAGE SHIPMENT PAGINATION ********** */
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
      this.props.fetchDataShipment(data);
      }
    );
  };

  /** ********** LAST PAGE SHIPMENT PAGINATION ********** */
  getLastPage = () => {
    return console.log('No PAGE FIELD');
    //const { payload } = this.props.pricelist.data;
    //this.setState({ page: payload.page });
      //let data = {
      //  offset: this.state.offset,
      //  size: this.state.optionFilter,
      //  login: this.props.data,
      //  startDate: this.state.startDate ? this.state.startDate._d.toISOString().replace(/([^T]+)T([^\.]+).*/g, "$1 $2") : null, // eslint-disable-line
      //  endDate: this.state.endDate ? this.state.endDate._d.toISOString().replace(/([^T]+)T([^\.]+).*/g, "$1 $2") : null // eslint-disable-line
      //}
      //this.props.fetchDataLastPageShipment(data);
  };

  /** ********** REFRESH DATA FOR SHIPMENT TABLE ********** */
  handleRefreshData = () => {
    let data = {
      offset: this.state.page,
      size: this.state.optionFilter,
      // @ts-ignore
      login: this.props.data,
    }
    // @ts-ignore
    this.props.fetchDataShipment(data);
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
        this.props.fetchDataShipment(data);
      }
    );
  };
  // @ts-ignore
  toggleElectronicControl = event => {
    event.preventDefault();
    // @ts-ignore
    this.setState({ openElectronicControl: !this.state.openElectronicControl });
  };
  // @ts-ignore
  toggleDoorControl = event => {
    event.preventDefault();
    // @ts-ignore
    this.setState({ openDoorControl: !this.state.openDoorControl });
  };
  // @ts-ignore
  toggleMoreShipment = event => {
    event.stopPropagation();
    this.setState({ toggleMoreShipment: this.state.toggleMoreShipment }); //!
  };
  render() {
    // @ts-ignore
    const { shipment } = this.props;
    //console.log(shipment);
    if(shipment.data.length === 0) {
      return <Loader />
    }
    return (
      <main className="main-content">
        {/** ========================== HEADER TABLE ============================== */}
        <header className="wrapper-table__header">
          <section className="table__header-left"></section>
          <section className="table__header-right">
            <form>
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

        <section className="wrapper-table__main-shipment">
          <section className="wrapper-table__header-shipment">
            {shipment.data.payload.recordDisplayRules.map(
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
            <div className="wrapper-itype__name">
              {shipment.data.payload.recordSet.map(
                // @ts-ignore
                (index, key) => (
                <div key={index.pshipment_uuid} className="wrapper-column">
                  <div className="toggle-itype-name-shipment">
                    <div className="toggle-itype-name__inside">
                      {/*
                        <div onClick={this.toggleMoreShipment} className="toggle-itype-name__inside-photo">
                            {toggleMoreShipment ? (
                              <div>HELLO!!!!!!!!!!!!!!!!!!!!!!!!</div>
                            ) : null} 
                        </div>
                      */}
                      {index.pshipment_id}
                    </div>
                  </div>
                  <div className="toggle-itype-name-shipment">
                    <div className="numbers">
                      {index.create_date ? index.create_date.replace(/([^T]+)T([^\.]+).*/g, "$1 $2") : index.create_date} {/* eslint-disable-line */}
                    </div>{" "}
                  </div>
                  <div className="toggle-itype-name-shipment">
                    <div>{index.currency_name}</div>
                  </div>
                  <div className="toggle-itype-name-shipment">
                    <div className="numbers">
                      {index.pshipment_sum}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
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
              {this.state.optionFilter} из {shipment.data.payload.countUUID}
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
Shipment.propTypes = {
  shipment: PropTypes.object.isRequired,
  fetchDataShipment: PropTypes.func.isRequired
};
// @ts-ignore
const mapStateToProps = state => ({
  shipment: state.shipment
})
export default connect(
  mapStateToProps,
  { fetchDataShipment, fetchDataLastPageShipment }
)(Shipment);
