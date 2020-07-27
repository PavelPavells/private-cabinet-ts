/**
 * ********** Импорт основных библиотек из NPM **********
 * */
import React, { useState, useEffect } from 'react';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';

/**
 * ********** Импорт экшенов **********
 * */
import { fetchDataPriceList, fetchDataLastPagePriceList } from '../../../../actions/priceListActions';

/**
 * ********** Импорт типа store **********
 * */
import { PersonalCabinet } from '../../../../store/store';

/**
 * ********** IMPORT LOADER from __UTILS__ **********
 * */
import Loader from '../../../../__utils__/Spinner';
import Search from '../../../../images/search.svg';

/**
 * ********** Импорт файлов стилей **********
 * */
import './PriceList.scss';

// @ts-ignore
// eslint-disable-next-line react/prop-types
const PriceList = ({ uuid }) => {
    const [offset] = useState(0);
    const [size] = useState(30);
    const [exportModal, setExportModal] = useState(false);

    /**
     * ********** Импорт состояния pricelist из Redux **********
     * */
    const { data } = useSelector((state: PersonalCabinet) => state.pricelist, shallowEqual);

    /**
     * Отправка действий для изменения на сервере
     * */
    const dispatch = useDispatch();
    /**
     * запрос данных с сервера
     * */
    useEffect(() => {
        const request = { offset, size, login: uuid };
        // @ts-ignore
        dispatch(fetchDataPriceList(request));
    }, [dispatch]);

    /**
     * запрос данных с сервера
     * */
    const handleExportModal = () => {
        setExportModal(!exportModal);
        // const element = document.getElementsByClassName('buttons__export');
        // if (event.target !== element) {
        //    setExportModal(false);
        // }
    };

    /** ********** SEND TEXT FOR SEARCH ********** */
    // const handleSendSearch = () => {
    //     const data = {
    //         offset: page,
    //         size: optionFilter,
    //         value: search,
    //         // @ts-ignore
    //         // login: data,
    //         search
    //     };
    //     // @ts-ignore
    //     fetchDataPriceList(data);
    // };

    /** ********** FIRST PAGE PRICE LIST PAGINATION ********** */
    // const getFirstPage = () => {
    //     setPage(0);
    //     const data = {
    //         offset: 0,
    //         size: optionFilter,
    //         value: search
    //         // @ts-ignore
    //         // login: this.props.data
    //     };
    //     // @ts-ignore
    //     fetchDataPriceList(data);
    // };

    /** ********** PREVIOUS PAGE PRICE LIST PAGINATION ********** */
    // const getPreviousPage = () => {
    //     this.setState(
    //         (prevState) => {
    //             // @ts-ignore
    //             return prevState.page > 0 ? { page: prevState.page - 1 } : null;
    //         },
    //         () => {
    //             const data = {
    //                 offset: this.state.page,
    //                 size: this.state.optionFilter,
    //                 value: this.state.search,
    //                 // @ts-ignore
    //                 login: this.props.data
    //             };
    //             // @ts-ignore
    //             this.props.fetchDataPriceList(data);
    //         }
    //     );
    // };

    /** ********** NEXT PAGE PRICE LIST PAGINATION ********** */
    // getNextPage = () => {
    //     // @ts-ignore
    //     const { payload } = this.props.pricelist.data;
    //     this.setState(
    //         (prevState) => {
    //             // @ts-ignore
    //             return prevState.page >= 0 && prevState.page < payload.page ? { page: prevState.page + 1 } : null;
    //         },
    //         () => {
    //             const data = {
    //                 offset: this.state.page,
    //                 size: this.state.optionFilter,
    //                 value: this.state.search,
    //                 // @ts-ignore
    //                 login: this.props.data
    //             };
    //             // @ts-ignore
    //             this.props.fetchDataPriceList(data);
    //         }
    //     );
    // };

    /** ********** LAST PAGE PRICE LIST PAGINATION ********** */
    // getLastPage = () => {
    //     // @ts-ignore
    //     const { payload } = this.props.pricelist.data;
    //     this.setState({ page: payload.page });
    //     const data = {
    //         offset: this.state.offset,
    //         size: this.state.optionFilter,
    //         // @ts-ignore
    //         login: this.props.data,
    //         value: this.state.search
    //     };
    //     // @ts-ignore
    //     this.props.fetchDataLastPagePriceList(data);
    // };

    /** ********** REFRESH DATA FOR PRICE LIST TABLE ********** */
    // handleRefreshData = () => {
    //     const data = {
    //         offset: this.state.page,
    //         size: this.state.optionFilter,
    //         // @ts-ignore
    //         login: this.props.data
    //     };
    //     // @ts-ignore
    //     this.props.fetchDataPriceList(data);
    // };

    /** ********** FILTER FOR VISION DATA IN TABLE ********** */
    // @ts-ignore
    // handleOptionFilter = (event) => {
    //     const elem = event.target.value;
    //     this.setState(
    //         {
    //             optionFilter: elem
    //         },
    //         () => {
    //             const data = {
    //                 offset: this.state.page,
    //                 size: this.state.optionFilter,
    //                 value: this.state.search,
    //                 // @ts-ignore
    //                 login: this.props.data
    //             };
    //             // @ts-ignore
    //             this.props.fetchDataPriceList(data);
    //         }
    //     );
    // };

    if (data.length === 0) {
        return <Loader />;
    }
    // eslint-disable-next-line no-console
    console.log(data.payload.recordDisplayRules);
    // eslint-disable-next-line no-console
    console.log(data.payload.recordSet);
    // console.log(exportModal);

    return (
        <main className="main-content">
            <div className="pricelist">
                <header className="pricelist__heading heading">
                    <div className="heading__text">Прайс-лист продукции CARDDEX</div>
                    <div className="heading__buttons buttons">
                        <div className="buttons__filter">Быстрый фильтр</div>
                        <div className="buttons__export export">
                            <div className="export__text" onClick={handleExportModal}>
                                Экспортировать документ
                            </div>
                        </div>
                        {/* {exportModal ? <div className="export__modal">HELLO</div> : null} */}
                    </div>
                </header>
                <main className="pricelist__main pricelist-main">
                    <div className="pricelist-main__frame frame">
                        <div className="frame__caption frame-caption">
                            {data.payload.recordDisplayRules.map((header: any, key: any) => {
                                if (header.visible === 1) {
                                    return (
                                        <div key={key.index} className="frame-caption__wrap wrap">
                                            <div key={key.index} className="wrap__index index">
                                                <div className="index__text">{header.display_name}</div>
                                                <div className="index__icon" />
                                            </div>
                                            <input type="text" className="wrap__input" />
                                            <img src={Search} alt="" className="wrap__icon"/>
                                        </div>
                                    );
                                }
                                return '';
                            })}
                        </div>
                        <div className="frame__table frame-table">
                            {data.payload.recordDisplayRules.map((header: any) => {
                                if (header.visible) {
                                    return (
                                        <div className="frame-table__column column">
                                            {data.payload.recordSet.map((index: any) => {
                                                return <div className="column__item">{index[header.field_name]}</div>;
                                            })}
                                        </div>
                                    );
                                }
                                return '';
                            })}
                        </div>
                    </div>
                </main>
            </div>
        </main>
    );
};

export default PriceList;

/**

    <header style={{ height: '7vh' }} className="wrapper-table__header">
                    <section className="header-left" />
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
                        <div onClick={this.handleSendSearch} className="header_search" />
                    </section>
                </header>

                {/** ========================== HEADER MAIN TABLE ============================== 

                <section className="wrapper-table__main">
                    <section className="wrapper-table__header1">
                        {pricelist.data.payload.recordDisplayRules.map(
                            // @ts-ignore
                            (index, key) => {
                                // add .pricelist
                                if (index.visible === 1) {
                                    return (
                                        <div key={key.field_name} className="name-of-product">
                                            <div className="table-header__text">
                                                <strong>{index.display_name}</strong>
                                            </div>
                                        </div>
                                    );
                                }
                                return null;
                            }
                        )}
                    </section>

                    {/** ========================== DOOR  TABLE ============================== *

                    <section className="wrapper-table__main-categories">
                        <div className="wrapper-table__header-door-controllers visible-block">
                            <div className="name-of-product__door-contollers">
                                <div className="toggle-down">
                                    <div
                                        // @ts-ignore
                                        onClick={this.toggleDoorControl}
                                        className="name-of-product__img"
                                    />
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
                            <div className="wrapper-itype__name">
                                {pricelist.data.payload.recordSet.map((index, key) => (
                                  <div key={key.item_uuid} className="wrapper-column">
                                      <div className="toggle-itype-name" key={key.id}>
                                          <div style={{ textAlign: 'left', width: '90%' }}>{index.parent_itype_name}</div>
                                      </div>
                                      <div className="toggle-itype-name" key={key.id}>
                                          <div style={{ textAlign: 'left', width: '90%' }}>{index.itype_name}</div>
                                      </div>
                                      <div className="toggle-itype-name" key={key.id}>
                                          <div>{index.item_article}</div>
                                      </div>
                                      <div className="toggle-itype-name" key={key.id}>
                                          <div style={{ textAlign: 'left', width: '90%' }}>{index.item_work_name}</div>
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
                                )}
                            </div>
                        ) : null}
                    </section>

                    {/** ========================== ELECTRONIC CONTROL  TABLE ============================== *

                    <section className="wrapper-table__main-categories">
                        <div className="wrapper-table__header__checkpoint visible-block">
                            <div className="name-of-product__checkpoint">
                                <div
                                    // @ts-ignore
                                    onClick={this.rotateArrow}
                                    className="toggle-down"
                                >
                                    <div
                                        // @ts-ignore
                                        onClick={this.toggleElectronicControl}
                                        className="name-of-product__img-checkpoint"
                                    />
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
                        <div className="wrapper-itype__name">
                            {pricelist.data.payload.recordSet.map(
                                // @ts-ignore
                                (
                                    index,
                                    key // add .pricelist
                                ) => (
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
                                        {/* <div className="toggle-future-price" key={key.id}>{index.future_price}</div> *
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
                                )
                            )}
                        </div>
                    ) : null}
                </section>

                {/** ========================== FOOTER TABLE ============================== *

                <footer className="wrapper-table__footer">
                    <section className="wrapper-table__footer-left">
                        <div onClick={this.getFirstPage} className="footer-table__first-page" />
                        <div onClick={this.getPreviousPage} className="footer-table__prev-page" />
                        <div onClick={this.getNextPage} className="footer-table__next-page" />
                        <div onClick={this.getLastPage} className="footer-table__last-page" />
                        <div className="footer-table__options">
                            <label>
                                <select value={this.state.optionFilter} onChange={this.handleOptionFilter}>
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
                            {this.state.optionFilter} из{pricelist.data.payload.countUUID} {/* //add .pricelist 
                        </div>
                        {<Loader /> && <div onClick={this.handleRefreshData} className="footer-table__refresh-data" />}
                    </section>
                </footer>
*/
