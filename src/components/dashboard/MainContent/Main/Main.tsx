/**
 * ********** Импорт основных библиотек из NPM **********
 * */
import React from 'react';
import { connect } from 'react-redux';

/**
 * ********** Импорт экшенов **********
 * */
// import { ordersTable } from './data.json';
import { fetchDataMain } from '../../../../actions/mainActions';

/**
 * ********** Импорт типа store **********
 * */
import { PersonalCabinet } from '../../../../store/store';

/**
 * ********** Импорт файлов стилей **********
 * */
import './Main.scss';

/**
 * ********** IMPORT LOADER from __UTILS__ **********
 * */
// import Loader from "../../../../__utils__/Spinner";

/**
 * ********** Интерфейс локального стейта компонента Main **********
 * */
interface MainState {
    main: any;
}

/**
 * ********** Интерфейс пропсов компонента Main **********
 */
interface MainProps {
    readonly fetchDataMain: (data: any) => void;
    readonly data: any;
}

class Main extends React.PureComponent<MainProps, MainState> {
    /**
     * ********** Запрос данных для компонента Main **********
     */
    public componentDidMount() {
        // this.props.fetchDataMain();
    }

    public render() {
        // const { main } = this.props;
        // console.log(main);
        // if(main.data.length === 0 || main.isFetching) {
        //  return <Loader />
        // }
        return (
            <div className="main-content">
                <div className="main">
                    <div className="main__block data">
                        <div className="block-title">
                            <span>Данные о компании</span>
                        </div>
                        <div className="block-container">
                            <div className="block-element">
                                <div className="block-element__icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                                        <path d="M28,36v6H18V36H28m4-4H14V46H32V32Z" />
                                        <path d="M28,54v6H18V54H28m4-4H14V64H32V50Z" />
                                        <path d="M28,72v6H18V72H28m4-4H14V82H32V68Z" />
                                        <path d="M82,36v6H72V36H82m4-4H68V46H86V32Z" />
                                        <path d="M82,54v6H72V54H82m4-4H68V64H86V50Z" />
                                        <path d="M82,72v6H72V72H82m4-4H68V82H86V68Z" />
                                        <path d="M56,36v6H44V36H56m4-4H40V46H60V32Z" />
                                        <path d="M56,54v6H44V54H56m4-4H40V64H60V50Z" />
                                        <path d="M50,3.46,6,26.52V92H94V26.53ZM44,88V72H56V88ZM90,88H60V68H40V88H10V29L50,8,90,29Z" />
                                    </svg>
                                </div>
                                <div className="block-element__info">
                                    <div className="block-element__title">
                                        <span>Наименование компании</span>
                                    </div>
                                    <div className="block-element__subtitle">
                                        <span>ООО «Название компании»</span>
                                    </div>
                                </div>
                            </div>

                            <div className="block-element">
                                <div className="block-element__icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                                        <path d="M80,38H20V84H80ZM34,80H24V70H34Zm0-14H24V56H34Zm0-14H24V42H34ZM48,80H38V70H48Zm0-14H38V56H48Zm0-14H38V42H48ZM62,80H52V70H62Zm0-14H52V56H62Zm0-14H52V42H62ZM76,80H66V70H76Zm0-14H66V56H76Zm0-14H66V42H76Z" />
                                        <path d="M92.39,8H80V2.92A2.87,2.87,0,0,0,77.13,0H70.89A2.87,2.87,0,0,0,68,2.92V8H32V2.87A2.87,2.87,0,0,0,29.12,0H22.88A2.87,2.87,0,0,0,20,2.87V8H7.61A3.61,3.61,0,0,0,4,11.61V92.36A3.61,3.61,0,0,0,7.61,96H92.39A3.61,3.61,0,0,0,96,92.36V11.61A3.61,3.61,0,0,0,92.39,8ZM72,4h4V16H72ZM24,4h4V16H24ZM92,92H8V30H92Zm0-66H8V12H20v5.13A2.87,2.87,0,0,0,22.88,20h6.24A2.87,2.87,0,0,0,32,17.13V12H68v5.18A2.87,2.87,0,0,0,70.89,20h6.24A2.87,2.87,0,0,0,80,17.17V12H92Z" />
                                    </svg>
                                </div>
                                <div className="block-element__info">
                                    <div className="block-element__title">
                                        <span>Зарегистрирована</span>
                                    </div>
                                    <div className="block-element__subtitle">
                                        <span>10 августа 2020</span>
                                    </div>
                                </div>
                            </div>

                            <div className="block-element">
                                <div className="block-element__icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                                        <path d="M12,4V96H88V4ZM84,92H16V8H84Z" />
                                        <rect x="26" y="22" width="48" height="4" />
                                        <rect x="26" y="50" width="27.98" height="4" />
                                        <rect x="26" y="62" width="27.98" height="4" />
                                        <rect x="26" y="74" width="27.98" height="4" />
                                        <rect x="64" y="50" width="10" height="4" />
                                        <rect x="64" y="62" width="10" height="4" />
                                        <rect x="64" y="74" width="10" height="4" />
                                    </svg>
                                </div>
                                <div className="block-element__info">
                                    <div className="block-element__title">
                                        <span>Налоговый учет</span>
                                    </div>
                                    <div className="block-element__subtitle">
                                        <span>с НДС 20%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="main__block status">
                        <div className="block-title">
                            <span>Статус</span>
                        </div>
                        <div className="block-container">
                            <div className="block-subcontainer">
                                <div className="block-element">
                                    <div className="block-element__icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                                            <path d="M55.21,64H44.78a.78.78,0,0,1-.78-.78V56.78a.78.78,0,0,1,.78-.78H55.21a.78.78,0,0,1,.78.78v6.45A.78.78,0,0,1,55.21,64ZM52,4H48A16,16,0,0,0,32.53,16H4a4,4,0,0,0-4,4V92a4,4,0,0,0,4,4H96a4,4,0,0,0,4-4V20a4,4,0,0,0-4-4H67.47A16,16,0,0,0,52,4ZM63.31,16H36.69A12,12,0,0,1,48,8h4a12,12,0,0,1,11.31,8ZM4,58V21.54A1.54,1.54,0,0,1,5.54,20H94.46A1.54,1.54,0,0,1,96,21.54V58H60V56a4,4,0,0,0-4-4H44a4,4,0,0,0-4,4v2Zm56,6V62H96V90.46A1.54,1.54,0,0,1,94.46,92H5.54A1.54,1.54,0,0,1,4,90.46V62H40v2a4,4,0,0,0,4,4H56A4,4,0,0,0,60,64Z" />
                                        </svg>
                                    </div>
                                    <div className="block-element__info">
                                        <div className="block-element__title">
                                            <span>Зарегистрированный торговый партнер</span>
                                        </div>
                                        <div className="block-element__subtitle">
                                            <span>с 11 августа 2020</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="block-element">
                                    <div className="block-element__icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                                            <path d="M55.21,64H44.78a.78.78,0,0,1-.78-.78V56.78a.78.78,0,0,1,.78-.78H55.21a.78.78,0,0,1,.78.78v6.45A.78.78,0,0,1,55.21,64ZM52,4H48A16,16,0,0,0,32.53,16H4a4,4,0,0,0-4,4V92a4,4,0,0,0,4,4H96a4,4,0,0,0,4-4V20a4,4,0,0,0-4-4H67.47A16,16,0,0,0,52,4ZM63.31,16H36.69A12,12,0,0,1,48,8h4a12,12,0,0,1,11.31,8ZM4,58V21.54A1.54,1.54,0,0,1,5.54,20H94.46A1.54,1.54,0,0,1,96,21.54V58H60V56a4,4,0,0,0-4-4H44a4,4,0,0,0-4,4v2Zm56,6V62H96V90.46A1.54,1.54,0,0,1,94.46,92H5.54A1.54,1.54,0,0,1,4,90.46V62H40v2a4,4,0,0,0,4,4H56A4,4,0,0,0,60,64Z" />
                                        </svg>
                                    </div>
                                    <div className="block-element__info">
                                        <div className="block-element__title">
                                            <span>Текущая скидка на продукцию CARDDEX</span>
                                        </div>
                                        <div className="block-element__subtitle">
                                            <span>22%</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="block-element">
                                    <div className="block-element__icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                                            <rect y="76" width="4" height="24" />
                                            <rect x="11.96" y="68" width="4" height="32" />
                                            <rect x="24" y="56" width="4" height="44" />
                                            <rect x="36" y="59.96" width="4" height="40.04" />
                                            <rect x="48" y="47.96" width="4" height="52.04" />
                                            <rect x="60" y="40" width="4" height="60" />
                                            <rect x="72" y="40" width="4" height="60" />
                                            <rect x="83.96" y="28" width="4" height="72" />
                                            <rect x="96" y="29.94" width="4" height="70.06" />
                                            <polygon points="96 0 78 0 78 3.99 92.85 3.99 67.92 28.92 60.04 21.05 35.83 45.25 27.85 37.27 0.36 64.25 3.17 67.11 27.82 42.9 35.83 50.91 60.04 26.7 67.92 34.58 69.33 33.16 96 6.49 96 22 100 22 100 3.99 100 0 96 0" />
                                        </svg>
                                    </div>
                                    <div className="block-element__info">
                                        <div className="block-element__title">
                                            <span>Объем учетных закупок для расчета скидки</span>
                                        </div>
                                        <div className="block-element__subtitle">
                                            <span className="currency-unit-rub">351 000</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="block-table">
                                <div className="block-table__row header">
                                    <div className="block-table__element">
                                        <span className="currency-unit-rub">Объем закупок,</span>
                                    </div>
                                    <div className="block-table__element">
                                        <span>Скидка</span>
                                    </div>
                                    <div className="block-table__element">
                                        <span>Условия получения скидки</span>
                                    </div>
                                </div>
                                <div className="block-table__row">
                                    <div className="block-table__element">
                                        <span>300 000 — 1 000 000</span>
                                    </div>
                                    <div className="block-table__element">
                                        <span>22%</span>
                                    </div>
                                    <div className="block-table__element">
                                        <span>Выполнено</span>
                                    </div>
                                </div>
                                <div className="block-table__row">
                                    <div className="block-table__element">
                                        <span>1 300 000 — 1 500 000</span>
                                    </div>
                                    <div className="block-table__element">
                                        <span>28%</span>
                                    </div>
                                    <div className="block-table__element">
                                        <span className="currency-unit-rub">Закупка от 649 001</span>
                                    </div>
                                </div>
                                <div className="block-table__row">
                                    <div className="block-table__element">
                                        <span />
                                    </div>
                                    <div className="block-table__element">
                                        <span>36%</span>
                                    </div>
                                    <div className="block-table__element">
                                        <span className="currency-unit-rub">Закупка от 2 649 001</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="main__block seggestions">
                        <div className="block-title block-title--important">
                            <span>Важная информация и персональные предложения</span>
                        </div>
                        <div className="block-container">
                            <div className="block-element">
                                <div className="block-element__info">
                                    <div className="block-element__title">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                                            <path d="M80,38H20V84H80ZM34,80H24V70H34Zm0-14H24V56H34Zm0-14H24V42H34ZM48,80H38V70H48Zm0-14H38V56H48Zm0-14H38V42H48ZM62,80H52V70H62Zm0-14H52V56H62Zm0-14H52V42H62ZM76,80H66V70H76Zm0-14H66V56H76Zm0-14H66V42H76Z" />
                                            <path d="M92.39,8H80V2.92A2.87,2.87,0,0,0,77.13,0H70.89A2.87,2.87,0,0,0,68,2.92V8H32V2.87A2.87,2.87,0,0,0,29.12,0H22.88A2.87,2.87,0,0,0,20,2.87V8H7.61A3.61,3.61,0,0,0,4,11.61V92.36A3.61,3.61,0,0,0,7.61,96H92.39A3.61,3.61,0,0,0,96,92.36V11.61A3.61,3.61,0,0,0,92.39,8ZM72,4h4V16H72ZM24,4h4V16H24ZM92,92H8V30H92Zm0-66H8V12H20v5.13A2.87,2.87,0,0,0,22.88,20h6.24A2.87,2.87,0,0,0,32,17.13V12H68v5.18A2.87,2.87,0,0,0,70.89,20h6.24A2.87,2.87,0,0,0,80,17.17V12H92Z" />
                                        </svg>
                                        <span>10 Августа 2020</span>
                                    </div>
                                    <div className="block-element__subtitle">
                                        <span>Персональное предложение для постоянных партнеров</span>
                                    </div>
                                    <div className="block-element__description">
                                        <span>Срок действия вашего персонального предложения подходит к концу</span>
                                    </div>
                                    <div className="block-element__button">
                                        <span>Ознакомиться с предложением</span>
                                    </div>
                                </div>
                            </div>
                            <div className="block-element">
                                <div className="block-element__info">
                                    <div className="block-element__title">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                                            <path d="M80,38H20V84H80ZM34,80H24V70H34Zm0-14H24V56H34Zm0-14H24V42H34ZM48,80H38V70H48Zm0-14H38V56H48Zm0-14H38V42H48ZM62,80H52V70H62Zm0-14H52V56H62Zm0-14H52V42H62ZM76,80H66V70H76Zm0-14H66V56H76Zm0-14H66V42H76Z" />
                                            <path d="M92.39,8H80V2.92A2.87,2.87,0,0,0,77.13,0H70.89A2.87,2.87,0,0,0,68,2.92V8H32V2.87A2.87,2.87,0,0,0,29.12,0H22.88A2.87,2.87,0,0,0,20,2.87V8H7.61A3.61,3.61,0,0,0,4,11.61V92.36A3.61,3.61,0,0,0,7.61,96H92.39A3.61,3.61,0,0,0,96,92.36V11.61A3.61,3.61,0,0,0,92.39,8ZM72,4h4V16H72ZM24,4h4V16H24ZM92,92H8V30H92Zm0-66H8V12H20v5.13A2.87,2.87,0,0,0,22.88,20h6.24A2.87,2.87,0,0,0,32,17.13V12H68v5.18A2.87,2.87,0,0,0,70.89,20h6.24A2.87,2.87,0,0,0,80,17.17V12H92Z" />
                                        </svg>
                                        <span>10 Августа 2020</span>
                                    </div>
                                    <div className="block-element__subtitle">
                                        <span>Персональное предложение для постоянных партнеров</span>
                                    </div>
                                    <div className="block-element__description">
                                        <span>Срок действия вашего персонального предложения подходит к концу</span>
                                    </div>
                                    <div className="block-element__button">
                                        <span>Ознакомиться с предложением</span>
                                    </div>
                                </div>
                            </div>
                            <div className="block-element">
                                <div className="block-element__info">
                                    <div className="block-element__title">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                                            <path d="M80,38H20V84H80ZM34,80H24V70H34Zm0-14H24V56H34Zm0-14H24V42H34ZM48,80H38V70H48Zm0-14H38V56H48Zm0-14H38V42H48ZM62,80H52V70H62Zm0-14H52V56H62Zm0-14H52V42H62ZM76,80H66V70H76Zm0-14H66V56H76Zm0-14H66V42H76Z" />
                                            <path d="M92.39,8H80V2.92A2.87,2.87,0,0,0,77.13,0H70.89A2.87,2.87,0,0,0,68,2.92V8H32V2.87A2.87,2.87,0,0,0,29.12,0H22.88A2.87,2.87,0,0,0,20,2.87V8H7.61A3.61,3.61,0,0,0,4,11.61V92.36A3.61,3.61,0,0,0,7.61,96H92.39A3.61,3.61,0,0,0,96,92.36V11.61A3.61,3.61,0,0,0,92.39,8ZM72,4h4V16H72ZM24,4h4V16H24ZM92,92H8V30H92Zm0-66H8V12H20v5.13A2.87,2.87,0,0,0,22.88,20h6.24A2.87,2.87,0,0,0,32,17.13V12H68v5.18A2.87,2.87,0,0,0,70.89,20h6.24A2.87,2.87,0,0,0,80,17.17V12H92Z" />
                                        </svg>
                                        <span>10 Августа 2020</span>
                                    </div>
                                    <div className="block-element__subtitle">
                                        <span>Персональное предложение для постоянных партнеров</span>
                                    </div>
                                    <div className="block-element__description">
                                        <span>Срок действия вашего персонального предложения подходит к концу</span>
                                    </div>
                                    <div className="block-element__button">
                                        <span>Ознакомиться с предложением</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: PersonalCabinet) => ({
    main: state.main
});

export default connect(mapStateToProps, { fetchDataMain })(Main);
