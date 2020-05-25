/** ********** IMPORT LIBRARIES ********** */
import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

/** ********** IMPORT LOADER from __UTILS__ ********** */
import Loader from "../../../../__utils__/Spinner";

/** ********** IMPORT ACTIONS ********** */
import { fetchDataPriceList, fetchDataLastPagePriceList } from "../../../../actions/priceListActions";

/** ********** IMPORT STYLES ********** */
import "./PriceList.scss";

class PriceList extends Component {

  state = {
    search: "",
    login: "",
    offset: 0,
    page: 0,
    optionFilter: 15,
    groupByCategories: true,
    openElectronicControl: false,
    openDoorControl: true,
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
    this.props.fetchDataPriceList(data);
  }

  /** ********** CHANGE TEXT FOR SEARCH ********** */
  // @ts-ignore
  updateSearch = event => {
    this.setState({ search: event.target.value })
  };

  /** ********** SEND TEXT FOR SEARCH ********** */
  handleSendSearch = () => {
      let data = {
        offset: this.state.page,
        size: this.state.optionFilter,
        value: this.state.search,
        // @ts-ignore
        login: this.props.data,
        search: this.state.search
      }
      // @ts-ignore
    this.props.fetchDataPriceList(data);
  }

  /** ********** CHANGE TEXT FOR SEARCH ********** */
  // @ts-ignore
  onChange = event => {
    this.setState({ [event.target.class]: event.target.value });
  };

  /** ********** GROUP CATEGORY FOR PRICE LIST ********** */
  groupByCategory = () => {
    let groupCategoryDoor = document.querySelector(".wrapper-table__header-door-controllers");
    // @ts-ignore
      groupCategoryDoor.classList.toggle("visible-block");
    let groupCategoryControllers = document.querySelector(".wrapper-table__header__checkpoint");
    // @ts-ignore
      groupCategoryControllers.classList.toggle("visible-block");
    this.setState({
      groupByCategories: !this.state.groupByCategories
    });
  };

  /** ********** FIRST PAGE PRICE LIST PAGINATION ********** */
  getFirstPage = () => {
    this.setState({ page: 0 });
    let data = {
      offset: 0,
      size: this.state.optionFilter,
      value: this.state.search,
      // @ts-ignore
      login: this.props.data
    }
    // @ts-ignore
    this.props.fetchDataPriceList(data);
  }

  /** ********** PREVIOUS PAGE PRICE LIST PAGINATION ********** */
  getPreviousPage = () => {
    this.setState(prevState => {
      // @ts-ignore
      return prevState.page > 0 ? ({ page: prevState.page - 1 }) : null;
    }, () => {
      let data = {
        offset: this.state.page,
        size: this.state.optionFilter,
        value: this.state.search,
        // @ts-ignore
        login: this.props.data
      }
      // @ts-ignore
      this.props.fetchDataPriceList(data);
    })
  }

  /** ********** NEXT PAGE PRICE LIST PAGINATION ********** */
  getNextPage = () => {
    // @ts-ignore
    const { payload } = this.props.pricelist.data;
    this.setState(prevState => {
      // @ts-ignore
      return prevState.page >= 0 && prevState.page < payload.page ? ({ page: prevState.page + 1 }) : null;
    }, () => {
      let data = {
        offset: this.state.page,
        size: this.state.optionFilter,
        value: this.state.search,
        // @ts-ignore
        login: this.props.data
      }
      // @ts-ignore
      this.props.fetchDataPriceList(data);
    })
  }

  /** ********** LAST PAGE PRICE LIST PAGINATION ********** */
  getLastPage = () => {
    // @ts-ignore
    const { payload } = this.props.pricelist.data;
    this.setState({ page: payload.page });
    let data = {
      offset: this.state.offset,
      size: this.state.optionFilter,
      // @ts-ignore
      login: this.props.data,
      value: this.state.search
    }
    // @ts-ignore
    this.props.fetchDataLastPagePriceList(data);
  }

  /** ********** REFRESH DATA FOR PRICE LIST TABLE ********** */
  handleRefreshData = () => {
      let data = {
        offset: this.state.page,
        size: this.state.optionFilter,
        // @ts-ignore
        login: this.props.data
      }
      // @ts-ignore
    this.props.fetchDataPriceList(data);
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
          value: this.state.search,
          // @ts-ignore
          login: this.props.data
        }
        // @ts-ignore
      this.props.fetchDataPriceList(data);
    });
  };
  //toggleElectronicControl = event => {
  //  event.preventDefault();
  //  this.setState({ openElectronicControl: !this.state.openElectronicControl });
  //};
  //toggleDoorControl = event => {
  //  event.preventDefault();
  //  this.setState({ openDoorControl: !this.state.openDoorControl })
  //}
  render() {
    const { openElectronicControl, groupByCategories, page } = this.state;
    // @ts-ignore
    const { pricelist } = this.props;
    console.log(pricelist.data.payload);
    //console.log(page);
    if(pricelist.data.length === 0) {
      return <Loader />
    }
    return (
      <main className="main-content">
        {/** ========================== HEADER TABLE ============================== */}

        <header style={{height: '7vh'}} className="wrapper-table__header">
          <section className="header-left">
            <div className="table__header-left-up">
              <div className="onoffswitch">
                <input
                  type="checkbox"
                  name="onoffswitch"
                  className="onoffswitch-checkbox"
                  id="header-checkbox"
                  onClick={this.groupByCategory}
                />
                <label
                  className="onoffswitch-label"
                  htmlFor="header-checkbox"
                >
                  <span className="onoffswitch-inner"></span>
                  <span className="onoffswitch-switch"></span>
                </label>
              </div>
              <div>Сгруппировать по категориям</div>
            </div>
          </section>
          <section className="table__header-right">
            <form>
              <input
                className="table__header-right-input"
                type="text"
                placeholder="Введите данные для поиска или фильтра"
                value={this.state.search}
                onChange={this.updateSearch}
              />
            </form>
            <div onClick={this.handleSendSearch} className="header_search"></div>
          </section>
        </header>

        {/** ========================== HEADER MAIN TABLE ============================== */}

        <section className="wrapper-table__main">
          <section className="wrapper-table__header">
              {pricelist.data.payload.recordDisplayRules.map(
                // @ts-ignore
                (index, key) => { //add .pricelist
                if(index.visible === 1) {
                  return (
                  <div key={index.field_name} className="name-of-product">
                    <div className="table-header__text">
                      <strong>{index.display_name}</strong>
                    </div>
                  </div>
                )
                } else {
                  return null;
                }
              })}
          </section>

          {/** ========================== DOOR  TABLE ============================== */}

          <section className="wrapper-table__main-categories">
            <div className="wrapper-table__header-door-controllers visible-block">
              <div className="name-of-product__door-contollers">
                <div className="toggle-down">
                  <div
                  // @ts-ignore
                    onClick={this.toggleDoorControl}
                    className="name-of-product__img"
                  ></div>
                </div>
                <div
                // @ts-ignore
                  onClick={this.toggleDoorControl}
                  className="table-header__text"
                >
                  <strong>Дверные контроллеры</strong>
                </div>
              </div>
            </div>
            {groupByCategories ? (
              <div
                className="wrapper-itype__name"
              >
                {pricelist.data.payload.recordSet.map(
                  // @ts-ignore
                  (index, key) => ( //add .pricelist
                  <div key={index.item_uuid} className="wrapper-column">
                    <div className="toggle-itype-name" key={key.id}>
                      <div style={{textAlign: 'left', width: '90%'}}>{index.parent_itype_name}</div>
                    </div>
                    <div className="toggle-itype-name" key={key.id}>
                      <div style={{textAlign: 'left', width: '90%'}}>{index.itype_name}</div>
                    </div>
                    <div className="toggle-itype-name" key={key.id}>
                      <div>{index.item_article}</div>
                    </div>
                    <div className="toggle-itype-name" key={key.id}>
                      <div style={{textAlign: 'left', width: '90%'}}>{index.item_work_name}</div>
                    </div>
                    <div className="toggle-itype-name" key={key.id}>
                      <div>{index.price_type}</div>
                    </div>
                    <div className="toggle-itype-name" key={key.id}>
                      <div className="numbers">{index.price}</div>
                    </div>
                    <div className="toggle-itype-name" key={key.id}>
                      <div className="numbers">{index.discount_price}</div>
                    </div>
                    <div className="toggle-itype-name" key={key.id}>
                      <div>{index.currency_desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            ) : null}
          </section>

          {/** ========================== ELECTRONIC CONTROL  TABLE ============================== */}

          <section className="wrapper-table__main-categories">
            <div className="wrapper-table__header__checkpoint visible-block">
              <div className="name-of-product__checkpoint">
                <div
                  // @ts-ignore 
                  onClick={this.rotateArrow} 
                  className="toggle-down">
                  <div
                  // @ts-ignore
                    onClick={this.toggleElectronicControl}
                    className="name-of-product__img-checkpoint"
                  ></div>
                </div>
                <div
                // @ts-ignore
                  onClick={this.toggleElectronicControl}
                  className="table-header__text"
                >
                  <strong>Турникеты и электронные проходные</strong>
                </div>
              </div>
            </div>
          </section>
          {openElectronicControl ? (
            <div
              className="wrapper-itype__name"
            >
              {pricelist.data.payload.recordSet.map(
                // @ts-ignore
                (index, key) => ( //add .pricelist
                <div key={index.item_uuid} className="wrapper-column">
                  <div className="toggle-itype-name" key={key.id}>
                    {index.item_work_name}
                  </div>
                  <div className="toggle-item-article" key={key.id}>
                    {index.item_article}
                  </div>
                  <div className="toggle-price" key={key.id}>
                    {index.price}
                  </div>
                  <div className="toggle-retail-price" key={key.id}>
                    {index.retail_price}
                  </div>
                  <div className="toggle-discount-price" key={key.id}>
                    {index.discount_price}
                  </div>
                  {/*<div className="toggle-future-price" key={key.id}>{index.future_price}</div>*/}
                  <div className="toggle-product-card" key={key.id}>
                    {index.currency_desc}
                  </div>
                  <div className="toggle-product-card" key={key.id}>
                    {index.price_type}
                  </div>
                  <div className="toggle-product-card" key={key.id}>
                    {index.parent_itype_name}
                  </div>
                  <div className="toggle-product-card" key={key.id}>
                    {index.itype_name}
                  </div>
                </div>
              ))}
            </div>
          ) : null}
        </section>

        {/** ========================== FOOTER TABLE ============================== */}

        <footer className="wrapper-table__footer">
          <section className="wrapper-table__footer-left">
            <div onClick={this.getFirstPage} className="footer-table__first-page"></div>
            <div onClick={this.getPreviousPage} className="footer-table__prev-page"></div>
            <div onClick={this.getNextPage} className="footer-table__next-page"></div>
            <div onClick={this.getLastPage} className="footer-table__last-page"></div>
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
              {this.state.optionFilter} из {pricelist.data.payload.countUUID} {/*//add .pricelist*/}
            </div>
            {<Loader /> && <div onClick={this.handleRefreshData} className="footer-table__refresh-data"></div>}
          </section>
        </footer>
      </main>
    );
  }
}
// @ts-ignore
PriceList.propTypes = {
    pricelist: PropTypes.object.isRequired,
    fetchDataPriceList: PropTypes.func.isRequired
};
// @ts-ignore
const mapStateToProps = state => ({
    pricelist: state.pricelist
});
export default connect(
  mapStateToProps, 
  { fetchDataPriceList, fetchDataLastPagePriceList }
)(PriceList);