/** ********** IMPORT LIBRARIES ********** */
import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

/** ********** IMPORT ACTIONS ********** */
import {
  currentDiscount,
  volumePurchase,
  ordersTable,
  newsData
} from "./data.json";
import { fetchDataMain } from "../../../../actions/mainActions";

/** ********** IMPORT LOADER from __UTILS__ ********** */
//import Loader from "../../../../__utils__/Spinner";

/** ********** IMPORT STYLES ********** */
import "./Main.scss";

class Main extends Component {
  //constructor() {
  //  super();
    state = {
      main: []
    };
  //}

  /** ********** FETCH DATA ACCOUNT ********** */
  componentDidMount() {
    //this.props.fetchDataMain();
  }
  render() {
    //const { main } = this.props;
    //console.log(main);
    //if(main.data.length === 0 || main.isFetching) {
    //  return <Loader />
    //}
    return (
      <div className="main-content">
        <div className="main">
          <div className="main__info info">
            <p className="info__paragraph">Данные о компании:</p>
            <p className="info__name">ООО "Название компании"</p>
            <p className="info__registration">Зарегистрирована: 01-06-2019</p>
            <p className="info__taxes">Налоговый учет: с НДС 20%</p>
            <p className="info__status">Статус:</p>
            <p className="info__partner">Зарегистрированный торговый партнер</p>
            <div className="info__accumulator accumulator">
              <div className="accumulator__text amount-percent">Текущая накопительная скидка на продукцию Карддекс:
                <p className="amount-percent__percent">22%</p>
              </div>
            </div>
            <div className="info__purchase purchase">
              <p className="purchase__text">Объем учтенных закупок для расчета скидки:</p>
              <p className="purchase__sum">351 000 руб.</p>
            </div>
            <div className="info__table table">
              <div className="table__left table-left">
                <div className="table-left__one">Объем закупок, в руб.</div>
                <div className="table-left__two two">
                  <div className="two__left">От</div>
                  <div className="two__right">До</div>
                </div>
                <div className="table-left__two two">
                  <div className="two__left">
                    <strong className="numbers">300000</strong>
                  </div>
                  <div className="two__right">
                    <div className="numbers">1000000</div>
                  </div>
                </div>
                <div className="table-left__two two">
                  <div className="two__left">
                    <div className="numbers">1000001</div>
                  </div>
                  <div className="two__right">
                    <div className="numbers">3000000</div>
                  </div>
                </div>
                <div className="table-left__two two">
                  <div className="two__left">
                    <div className="numbers">3000001</div>
                  </div>
                  <div className="table-block__right"></div>
                </div>
              </div>
              <div className="table__center table-center">
                <div className="table-center__one">Скидка</div>
                <div className="table-center__two">
                  <div className="numbers">22%</div>
                </div>
                <div className="table-center__three">
                  <div className="numbers">28%</div>
                </div>
                <div className="table-center__four">
                  <div className="numbers">23%</div>
                </div>
              </div>
              <div className="table__right table-right">
                <div className="table-right__one">
                  Условия получения скидки
                </div>
                {ordersTable.map((index, key) => (
                  <div key={index.id} className="table-right__two">
                    {index.conditions || "Закупка от 349 001 руб."}
                  </div>
                ))}
                {ordersTable.map((index, key) => (
                  <div key={index.id} className="table-right__three">
                    {index.conditions || "Закупка от 649 001 руб."}
                  </div>
                ))}
                {ordersTable.map((index, key) => (
                  <div key={index.id} className="table-right__four">
                    {index.conditions || "Закупка от 2 649 001 руб."}
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/*
          <div className="wrapper-main-news">
            <div className="wrapper-news__header">
              <div>
                <strong>
                  Оповещения, новости
                  <br />и персональные предложения:
                </strong>
              </div>
            </div>
            <div className="wrapper-news__articles">
              {newsData.map((index, key) => (
                <div key={index.id} className="articles">
                  <div className="wrapper-article__header">
                    <div className="articles-logo__mail"></div>
                    <p key={index.id}>
                      {index.date_now} {index.theme}
                    </p>
                  </div>
                  <p
                  // @ts-ignore 
                    key={key.id} 
                    className="news-text">
                    {index.main_info}
                  </p>
                  <div className="wrapper-more__info">
                    <a 
                      href="/https://yandex.ru" 
                      // @ts-ignore
                      alt="">
                      Подробнее...
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
            */}
        </div>
      </div>
    );
  }
}
// @ts-ignore
Main.propTypes = {
  data: PropTypes.object.isRequired,
  fetchDataMain: PropTypes.func.isRequired
};
// @ts-ignore
const mapStateToProps = state => ({
  data: state.main
});
export default connect(
  mapStateToProps,
  { fetchDataMain }
)(Main);