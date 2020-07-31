/**
 * ********** Импорт основных библиотек из NPM **********
<<<<<<< HEAD
 * */
import React from 'react';
import { connect } from 'react-redux';

/**
 * ********** Импорт экшенов **********
 * */
import { ordersTable } from './data.json';
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
                    <div className="main__info info">
                        <p className="info__paragraph">Данные о компании:</p>
                        <p className="info__name">ООО &quot;Название компании&quot;</p>
                        <p className="info__registration">Зарегистрирована: 01-06-2019</p>
                        <p className="info__taxes">Налоговый учет: с НДС 20%</p>
                        <p className="info__status">Статус:</p>
                        <p className="info__partner">Зарегистрированный торговый партнер</p>
                        <div className="info__accumulator accumulator">
                            <div className="accumulator__text amount-percent">
                                Текущая накопительная скидка на продукцию Карддекс:
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
                                    <div className="table-block__right" />
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
                                <div className="table-right__one">Условия получения скидки</div>
                                {ordersTable.map((index) => (
                                    <div key={index.id} className="table-right__two">
                                        {index.conditions || 'Закупка от 349 001 руб.'}
                                    </div>
                                ))}
                                {ordersTable.map((index) => (
                                    <div key={index.id} className="table-right__three">
                                        {index.conditions || 'Закупка от 649 001 руб.'}
                                    </div>
                                ))}
                                {ordersTable.map((index) => (
                                    <div key={index.id} className="table-right__four">
                                        {index.conditions || 'Закупка от 2 649 001 руб.'}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="main__alert alert">
                            <div className="alert__text alert-text">
                                <div className="alert-text__icon">!</div>
                                Важная информация и персональные предложения:
                            </div>
                        </div>
                        <div className="main__offers offers">
                            <div className="offers__block offer-block">
                                <div className="offer-block__header">07.11.2020 Внимание!</div>
                                <div className="offer-block__text">Срок действия вашего персонального предложения подходит к концу</div>
                                <div className="offer-block__more arrow-more">
                                    Подробнее
                                    <span className="arrow-more__arrow" />
                                </div>
                            </div>
                            <div className="offers__block offer-block">
                                <div className="offer-block__header">07.11.2020 Внимание!</div>
                                <div className="offer-block__text">Срок действия вашего персонального предложения подходит к концу</div>
                                <div className="offer-block__more arrow-more">
                                    Подробнее
                                    <span className="arrow-more__arrow" />
                                </div>
                            </div>
                            <div className="offers__block offer-block">
                                <div className="offer-block__header">07.11.2020 Внимание!</div>
                                <div className="offer-block__text">Срок действия вашего персонального предложения подходит к концу</div>
                                <div className="offer-block__more arrow-more">
                                    Подробнее
                                    <span className="arrow-more__arrow" />
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
