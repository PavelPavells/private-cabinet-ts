/**
 * ********** Импорт основных библиотек из NPM **********
 * */
import React, { useEffect, useState } from 'react';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { CircularProgressbar } from 'react-circular-progressbar';

/**
 * ********** Импорт экшенов **********
 * */
// import { ordersTable } from './data.json';
import { fetchDataMain } from '../../../../actions/mainActions';
import { MainListReq } from '../../../../constants/mainTypes';

/**
 * ********** Импорт типа store **********
 * */
import { PersonalCabinet } from '../../../../store/store';

/**
 * ********** Импорт файлов стилей **********
 * */
import './Main.scss';
import 'react-circular-progressbar/dist/styles.css';

/**
 * ********** Импорт LOADER из __UTILS__ **********
 * */
import Loader from '../../../../__utils__/Spinner';

const MainComponent = () => {
    const [personalSuggestion] = useState(false);
    /**
     * ********** Импорт состояния pricelist из Redux **********
     * */
    const { main, table, isFetching } = useSelector((state: PersonalCabinet) => state.main, shallowEqual);
    const { user } = useSelector((state: PersonalCabinet) => state.auth, shallowEqual);

    /**
     * Отправка действий для изменения на сервере
     * */
    const dispatch = useDispatch();

    /**
     * Отправка UUID при запросе данных
     * */
    // const uuid = localStorage.getItem('userUuid');

    /**
     * запрос данных с сервера
     * */
    useEffect(() => {
        // @ts-ignore
        const request: MainListReq = { uuid: user };
        dispatch(fetchDataMain(request));
    }, []);

    if (!isFetching && main && table) {
        // eslint-disable-next-line no-lone-blocks
        {
            // eslint-disable-next-line no-unused-expressions
            main ? typeof main.currentDiscount : null;
        }
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
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 46 46">
                                        <path d="M27.7599 10.2988H30.9898C31.1828 10.2988 31.3397 10.142 31.3397 9.94891V6.72686C31.3397 6.53329 31.1828 6.37695 30.9898 6.37695H27.7599C27.5663 6.37695 27.4094 6.53381 27.4094 6.72686V9.94891C27.4094 10.142 27.5658 10.2988 27.7599 10.2988ZM28.1098 7.07729H30.6393V9.59848H28.1098V7.07729Z" />
                                        <path d="M37.3658 29.6612H40.5868C40.7799 29.6612 40.9372 29.5044 40.9372 29.3108V26.0809C40.9372 25.8878 40.7799 25.7305 40.5868 25.7305H37.3658C37.1728 25.7305 37.0154 25.8878 37.0154 26.0809V29.3108C37.0154 29.5044 37.1728 29.6612 37.3658 29.6612ZM37.7162 26.4313H40.2364V28.9604H37.7162V26.4313Z" />
                                        <path d="M43.8167 12.9045H34.5702V3.89982C35.4872 3.73405 36.1849 2.92985 36.1849 1.96565C36.1849 0.881838 35.303 0 34.2197 0H11.636C10.5527 0 9.67087 0.881838 9.67087 1.96565C9.67087 2.92985 10.3686 3.73405 11.2856 3.89982V12.9045H1.96513C0.881842 12.9045 0 13.7863 0 14.8696C0 15.8333 0.697711 16.6375 1.6147 16.8032V38.9925C1.6147 39.1861 1.77155 39.3429 1.96513 39.3429H11.6381C11.6381 39.3429 11.6386 39.3429 11.6391 39.3429H15.892C16.0751 43.045 19.144 46 22.8906 46C26.6373 46 29.7061 43.0445 29.8892 39.3429H34.1243C34.1306 39.3429 34.1363 39.3434 34.1432 39.3434H43.8156C44.0092 39.3434 44.166 39.1861 44.166 38.993V16.8032C45.083 16.6375 45.7802 15.8333 45.7802 14.8696C45.7812 13.7863 44.8999 12.9045 43.8167 12.9045ZM1.96513 16.1339C1.26794 16.1339 0.700856 15.5668 0.700856 14.8696C0.700856 14.1724 1.26794 13.6053 1.96513 13.6053H11.2856V16.1339H1.96513C1.96565 16.1339 1.96565 16.1339 1.96513 16.1339ZM2.31556 16.8342H11.2856V38.6421H2.31556V16.8342ZM22.8912 45.3002C19.4136 45.3002 16.5845 42.4705 16.5845 38.993C16.5845 35.5155 19.4136 32.6864 22.8912 32.6864C26.3687 32.6864 29.1983 35.516 29.1983 38.993C29.1983 42.4705 26.3687 45.3002 22.8912 45.3002ZM33.8698 13.2465C33.8693 13.2491 33.8693 13.2517 33.8693 13.2549C33.8693 13.2575 33.8693 13.2601 33.8698 13.2633V16.4759C33.8693 16.4785 33.8693 16.4817 33.8693 16.4843C33.8693 16.4869 33.8693 16.4901 33.8698 16.4927V38.6426H29.8898C29.7061 34.9411 26.6373 31.986 22.8912 31.986C19.1445 31.986 16.0756 34.9416 15.8926 38.6426H11.9864V3.9313H33.8698V13.2465ZM34.2103 3.23097H11.636C10.9383 3.23097 10.3712 2.66336 10.3712 1.96618C10.3712 1.26899 10.9383 0.701376 11.636 0.701376H34.2197C34.9054 0.701376 35.4845 1.28053 35.4845 1.96618C35.4845 2.6492 34.9096 3.22625 34.2276 3.23097C34.2224 3.23044 34.2161 3.23044 34.2103 3.23097ZM43.4662 38.6426H34.5702V16.8342H43.4662V38.6426ZM43.8167 16.1339H34.5702V13.6053H43.8167C44.5138 13.6053 45.0809 14.1724 45.0809 14.8696C45.0809 15.5668 44.5138 16.1339 43.8167 16.1339Z" />
                                        <path d="M27.7599 16.7594H30.9898C31.1828 16.7594 31.3397 16.6025 31.3397 16.4095V13.1795C31.3397 12.986 31.1828 12.8291 30.9898 12.8291H27.7599C27.5663 12.8291 27.4094 12.986 27.4094 13.1795V16.4095C27.4094 16.6025 27.5658 16.7594 27.7599 16.7594ZM28.1098 13.5294H30.6393V16.059H28.1098V13.5294Z" />
                                        <path d="M37.3658 36.1128H40.5868C40.7799 36.1128 40.9372 35.956 40.9372 35.7629V32.5409C40.9372 32.3478 40.7799 32.1904 40.5868 32.1904H37.3658C37.1728 32.1904 37.0154 32.3478 37.0154 32.5409V35.7629C37.0154 35.956 37.1728 36.1128 37.3658 36.1128ZM37.7162 32.8913H40.2364V35.4125H37.7162V32.8913Z" />
                                        <path d="M14.857 10.2988H18.0869C18.2805 10.2988 18.4368 10.142 18.4368 9.94891V6.72686C18.4368 6.53329 18.28 6.37695 18.0869 6.37695H14.857C14.6634 6.37695 14.5071 6.53381 14.5071 6.72686V9.94891C14.5066 10.142 14.6634 10.2988 14.857 10.2988ZM15.2069 7.07729H17.7365V9.59848H15.2069V7.07729Z" />
                                        <path d="M21.3167 29.6612H24.5387C24.7318 29.6612 24.8887 29.5044 24.8887 29.3108V26.0809C24.8887 25.8878 24.7318 25.7305 24.5387 25.7305H21.3167C21.1231 25.7305 20.9668 25.8878 20.9668 26.0809V29.3108C20.9668 29.5044 21.1236 29.6612 21.3167 29.6612ZM21.6671 26.4313H24.1883V28.9604H21.6671V26.4313Z" />
                                        <path d="M21.3167 23.2086H24.5387C24.7318 23.2086 24.8887 23.0517 24.8887 22.8581V19.6282C24.8887 19.4346 24.7318 19.2783 24.5387 19.2783H21.3167C21.1231 19.2783 20.9668 19.4352 20.9668 19.6282V22.8581C20.9668 23.0517 21.1236 23.2086 21.3167 23.2086ZM21.6671 19.9786H24.1883V22.5082H21.6671V19.9786Z" />
                                        <path d="M14.857 29.6612H18.0869C18.2805 29.6612 18.4368 29.5044 18.4368 29.3108V26.0809C18.4368 25.8878 18.28 25.7305 18.0869 25.7305H14.857C14.6634 25.7305 14.5071 25.8878 14.5071 26.0809V29.3108C14.5066 29.5044 14.6634 29.6612 14.857 29.6612ZM15.2069 26.4313H17.7365V28.9604H15.2069V26.4313Z" />
                                        <path d="M14.857 23.2086H18.0869C18.2805 23.2086 18.4368 23.0517 18.4368 22.8581V19.6282C18.4368 19.4346 18.28 19.2783 18.0869 19.2783H14.857C14.6634 19.2783 14.5071 19.4352 14.5071 19.6282V22.8581C14.5066 23.0517 14.6634 23.2086 14.857 23.2086ZM15.2069 19.9786H17.7365V22.5082H15.2069V19.9786Z" />
                                        <path d="M14.857 16.7594H18.0869C18.2805 16.7594 18.4368 16.6025 18.4368 16.4095V13.1795C18.4368 12.986 18.28 12.8291 18.0869 12.8291H14.857C14.6634 12.8291 14.5071 12.986 14.5071 13.1795V16.4095C14.5066 16.6025 14.6634 16.7594 14.857 16.7594ZM15.2069 13.5294H17.7365V16.059H15.2069V13.5294Z" />
                                        <path d="M21.3167 10.2988H24.5387C24.7318 10.2988 24.8887 10.142 24.8887 9.94891V6.72686C24.8887 6.53329 24.7318 6.37695 24.5387 6.37695H21.3167C21.1231 6.37695 20.9668 6.53381 20.9668 6.72686V9.94891C20.9668 10.142 21.1236 10.2988 21.3167 10.2988ZM21.6671 7.07729H24.1883V9.59848H21.6671V7.07729Z" />
                                        <path d="M37.3658 23.2086H40.5868C40.7799 23.2086 40.9372 23.0517 40.9372 22.8581V19.6282C40.9372 19.4346 40.7799 19.2783 40.5868 19.2783H37.3658C37.1728 19.2783 37.0154 19.4352 37.0154 19.6282V22.8581C37.0154 23.0517 37.1728 23.2086 37.3658 23.2086ZM37.7162 19.9786H40.2364V22.5082H37.7162V19.9786Z" />
                                        <path d="M21.3167 16.7594H24.5387C24.7318 16.7594 24.8887 16.6025 24.8887 16.4095V13.1795C24.8887 12.986 24.7318 12.8291 24.5387 12.8291H21.3167C21.1231 12.8291 20.9668 12.986 20.9668 13.1795V16.4095C20.9668 16.6025 21.1236 16.7594 21.3167 16.7594ZM21.6671 13.5294H24.1883V16.059H21.6671V13.5294Z" />
                                        <path d="M27.7599 29.6612H30.9898C31.1828 29.6612 31.3397 29.5044 31.3397 29.3108V26.0809C31.3397 25.8878 31.1828 25.7305 30.9898 25.7305H27.7599C27.5663 25.7305 27.4094 25.8878 27.4094 26.0809V29.3108C27.4094 29.5044 27.5658 29.6612 27.7599 29.6612ZM28.1098 26.4313H30.6393V28.9604H28.1098V26.4313Z" />
                                        <path d="M27.7599 23.2086H30.9898C31.1828 23.2086 31.3397 23.0517 31.3397 22.8581V19.6282C31.3397 19.4346 31.1828 19.2783 30.9898 19.2783H27.7599C27.5663 19.2783 27.4094 19.4352 27.4094 19.6282V22.8581C27.4094 23.0517 27.5658 23.2086 27.7599 23.2086ZM28.1098 19.9786H30.6393V22.5082H28.1098V19.9786Z" />
                                        <path d="M8.41612 32.1904H5.19564C5.00207 32.1904 4.84521 32.3478 4.84521 32.5409V35.7629C4.84521 35.956 5.00207 36.1128 5.19564 36.1128H8.41612C8.60969 36.1128 8.76654 35.956 8.76654 35.7629V32.5409C8.76654 32.3478 8.60969 32.1904 8.41612 32.1904ZM8.06622 35.4125H5.54607V32.8913H8.06622V35.4125Z" />
                                        <path d="M8.41612 19.2783H5.19564C5.00207 19.2783 4.84521 19.4352 4.84521 19.6282V22.8581C4.84521 23.0517 5.00207 23.2086 5.19564 23.2086H8.41612C8.60969 23.2086 8.76654 23.0517 8.76654 22.8581V19.6282C8.76654 19.4352 8.60969 19.2783 8.41612 19.2783ZM8.06622 22.5082H5.54607V19.9786H8.06622V22.5082Z" />
                                        <path d="M8.41612 25.7305H5.19564C5.00207 25.7305 4.84521 25.8878 4.84521 26.0809V29.3108C4.84521 29.5044 5.00207 29.6612 5.19564 29.6612H8.41612C8.60969 29.6612 8.76654 29.5044 8.76654 29.3108V26.0809C8.76654 25.8878 8.60969 25.7305 8.41612 25.7305ZM8.06622 28.9604H5.54607V26.4313H8.06622V28.9604Z" />
                                    </svg>
                                </div>
                                <div className="block-element__info">
                                    <div className="block-element__title">
                                        <span>Наименование компании</span>
                                    </div>
                                    <div className="block-element__subtitle">
                                        <span>{main.companyName}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="block-element">
                                <div className="block-element__icon">
                                    <svg viewBox="0 0 45 46" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22.3798 20.9186C23.4117 20.9186 24.2514 20.0789 24.2514 19.047C24.2514 18.0152 23.4117 17.1758 22.3798 17.1758C21.348 17.1758 20.5083 18.0152 20.5083 19.047C20.5083 20.0789 21.348 20.9186 22.3798 20.9186ZM22.3798 18.3401C22.7698 18.3401 23.0871 18.6573 23.0871 19.047C23.0871 19.437 22.7698 19.7543 22.3798 19.7543C21.9898 19.7543 21.6726 19.437 21.6726 19.047C21.6726 18.6573 21.9898 18.3401 22.3798 18.3401Z" />
                                        <path d="M0.12624 39.2003C0.236531 39.3393 0.404526 39.4206 0.582186 39.4206H13.6728C14.7557 43.2128 18.245 46 22.3798 46C26.5146 46 30.0039 43.2128 31.0867 39.4206H44.1774C44.355 39.4206 44.523 39.3393 44.6333 39.2003C44.7439 39.061 44.7848 38.8791 44.7442 38.706L38.9945 14.1014H41.042C41.3635 14.1014 41.6242 13.8407 41.6242 13.5192V10.2849C41.6242 9.96345 41.3635 9.70279 41.042 9.70279H26.5458V4.16605C26.5458 1.86898 24.6769 0 22.3798 0C20.0827 0 18.2137 1.86898 18.2137 4.16605V9.70279H3.71753C3.39604 9.70279 3.13537 9.96345 3.13537 10.2849V13.5192C3.13537 13.8407 3.39604 14.1014 3.71753 14.1014H5.76502L0.0153799 38.706C-0.0252686 38.8791 0.0156642 39.061 0.12624 39.2003ZM22.3798 44.8357C18.0256 44.8357 14.4832 41.293 14.4832 36.9388C14.4832 32.5845 18.0256 29.0421 22.3798 29.0421C26.734 29.0421 30.2764 32.5845 30.2764 36.9388C30.2764 41.293 26.734 44.8357 22.3798 44.8357ZM26.5458 10.8671H40.4599V12.9371H38.2606H26.5458V10.8671ZM19.378 10.2878C19.378 10.2868 19.3786 10.2859 19.3786 10.2849C19.3786 10.284 19.378 10.2831 19.378 10.2821V4.16605C19.378 2.51083 20.7246 1.16431 22.3798 1.16431C24.035 1.16431 25.3815 2.51083 25.3815 4.16605V19.3755C25.3815 21.0307 24.035 22.3772 22.3798 22.3772C20.7246 22.3772 19.378 21.0307 19.378 19.3755V10.2878ZM4.29969 12.9371V10.8671H18.2137V12.9371H6.49897H4.29969ZM6.96071 14.1014H18.2137V19.3755C18.2137 21.6725 20.0827 23.5415 22.3798 23.5415C24.6769 23.5415 26.5458 21.6725 26.5458 19.3755V14.1014H37.7989L43.4434 38.2563H31.3338C31.3971 37.825 31.4407 37.3874 31.4407 36.9388C31.4407 31.9427 27.3759 27.8778 22.3798 27.8778C17.3837 27.8778 13.3188 31.9427 13.3188 36.9388C13.3188 37.3874 13.3625 37.825 13.4258 38.2563H1.31614L6.96071 14.1014Z" />
                                        <path d="M26.6118 35.1778L24.4759 34.8674C24.3588 34.8506 24.1587 34.7051 24.1066 34.5993L23.1515 32.6641C22.9841 32.3253 22.703 32.1309 22.3798 32.1309C22.0566 32.1309 21.7755 32.3253 21.608 32.6641L20.6529 34.5993C20.6009 34.7051 20.4008 34.8506 20.2837 34.8674L18.1478 35.1778C17.774 35.2324 17.5022 35.4396 17.4025 35.7469C17.3027 36.0544 17.4005 36.3819 17.6711 36.6457L19.2169 38.1523C19.3013 38.2344 19.3775 38.4698 19.3576 38.586L18.9926 40.7134C18.9289 41.0858 19.0423 41.4084 19.3038 41.5983C19.44 41.6972 19.5978 41.7467 19.7652 41.7467C19.919 41.7467 20.081 41.7046 20.2413 41.6205L22.1515 40.6162C22.2558 40.561 22.5031 40.561 22.608 40.6162L24.5182 41.6205C24.8531 41.7961 25.1945 41.7887 25.4557 41.5983C25.7172 41.4084 25.8306 41.0858 25.767 40.7134L25.402 38.586C25.3821 38.4698 25.4583 38.2344 25.543 38.1523L27.0882 36.6457C27.3588 36.3819 27.4569 36.0544 27.3571 35.7472C27.2573 35.4399 26.9856 35.2324 26.6118 35.1778ZM24.7303 37.3182C24.3693 37.6699 24.1692 38.2859 24.2542 38.7827L24.5151 40.3032L23.1498 39.5855C22.9267 39.4684 22.6532 39.4095 22.3798 39.4095C22.1063 39.4095 21.8329 39.4684 21.6097 39.5855L20.2444 40.3032L20.5054 38.7827C20.5904 38.2859 20.3903 37.6699 20.0296 37.3182L18.9249 36.2415L20.4514 36.0198C20.9503 35.9473 21.4741 35.5664 21.6973 35.1144L22.3798 33.7315L23.0623 35.1144C23.2854 35.5664 23.8093 35.9473 24.3082 36.0198L25.8346 36.2415L24.7303 37.3182ZM26.2761 35.8123C26.2772 35.8106 26.2783 35.8091 26.2795 35.8077L26.682 36.2287L26.2761 35.8123Z" />
                                    </svg>
                                </div>
                                <div className="block-element__info">
                                    <div className="block-element__title">
                                        <span>Зарегистрированный торговый партнер</span>
                                    </div>
                                    <div className="block-element__subtitle">
                                        <span>{main.registrationDate}</span>
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
                            <div className="block-element">
                                <div className="block-element__icon">
                                    <svg viewBox="0 0 35 45" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.425217 0C0.185356 0.0457849 -0.00423092 0.27924 7.18112e-05 0.523512V39.7874C9.90205e-05 40.0615 0.249359 40.3109 0.523328 40.3109H13.9154C14.1919 40.3161 14.4461 40.064 14.4461 39.7874C14.4461 39.5108 14.1919 39.26 13.9154 39.2639H1.04658V1.04702H33.4885V39.2639H32.4583C32.1819 39.2587 31.9276 39.5108 31.9276 39.7874C31.9276 40.064 32.1819 40.3148 32.4583 40.3109H34.0117C34.2857 40.3109 34.535 40.0615 34.535 39.7874V0.523512C34.535 0.249404 34.2857 2.61628e-05 34.0117 0C22.8184 0 11.6114 0 0.425217 0ZM5.65778 4.71167C5.3838 4.73736 5.15789 5.01016 5.18358 5.28427C5.20927 5.55838 5.48191 5.78439 5.75589 5.75869H28.7792C29.0556 5.76288 29.3099 5.51179 29.3099 5.23518C29.3099 4.95857 29.0556 4.70776 28.7792 4.71167C21.0744 4.71167 13.3554 4.71167 5.65778 4.71167ZM5.65778 9.94685C5.3838 9.97254 5.15789 10.2453 5.18358 10.5195C5.20927 10.7936 5.48191 11.0196 5.75589 10.9939H24.0699C24.3463 10.9975 24.6006 10.747 24.6006 10.4704C24.6006 10.1938 24.3463 9.94294 24.0699 9.94685C17.935 9.94685 11.7854 9.94685 5.65778 9.94685ZM5.65778 15.182C5.3838 15.2077 5.15789 15.4805 5.18358 15.7546C5.20927 16.0287 5.48191 16.2548 5.75589 16.2291H28.2723C28.5487 16.2332 28.803 15.9822 28.803 15.7055C28.803 15.4289 28.5487 15.1781 28.2723 15.182C20.7364 15.182 13.1864 15.182 5.65778 15.182ZM5.65778 20.4172C5.3838 20.4429 5.15789 20.7157 5.18358 20.9898C5.20927 21.2639 5.48191 21.4899 5.75589 21.4642H15.6978C15.9742 21.4695 16.2285 21.2173 16.2285 20.9407C16.2285 20.6641 15.9742 20.4133 15.6978 20.4172C12.3541 20.4172 8.9939 20.4172 5.65778 20.4172ZM23.0233 21.4642C18.9837 21.4642 15.6978 24.7519 15.6978 28.7935C15.6978 32.8351 18.9837 36.1228 23.0233 36.1228C27.063 36.1228 30.3489 32.8351 30.3489 28.7935C30.3489 24.7519 27.063 21.4642 23.0233 21.4642ZM23.0233 22.5113C26.4974 22.5113 29.3024 25.3177 29.3024 28.7935C29.3024 32.2693 26.4974 35.0757 23.0233 35.0757C19.5493 35.0757 16.7443 32.2693 16.7443 28.7935C16.7443 25.3177 19.5493 22.5113 23.0233 22.5113ZM25.5906 26.6831C25.4566 26.7009 25.3305 26.7729 25.2472 26.8794L21.9605 30.6422L20.2599 28.9407C20.0677 28.7418 19.7114 28.7369 19.5137 28.9303C19.3161 29.1237 19.3132 29.4802 19.5077 29.6768L21.6171 31.7709C21.8168 31.9782 22.1949 31.9701 22.3856 31.7547L26.0321 27.5665C26.3309 27.2573 26.0171 26.6294 25.5906 26.6831V26.6831ZM17.7254 37.1534C17.4683 37.1859 17.2575 37.4343 17.2675 37.6934V44.4991C17.2729 44.8749 17.7745 45.1358 18.0851 44.9244L23.0233 41.4888L27.9616 44.9244C28.2722 45.1358 28.7738 44.8747 28.7792 44.4991V37.6934C28.7831 37.4168 28.5324 37.1624 28.2559 37.1624C27.9794 37.1624 27.7287 37.4168 27.7327 37.6934V43.4848L23.3177 40.4418C23.1454 40.3245 22.9013 40.3245 22.729 40.4418L18.314 43.4848V37.6934C18.3259 37.3907 18.0258 37.1154 17.7254 37.1534Z" />
                                    </svg>
                                </div>
                                <div className="block-element__info">
                                    <div className="block-element__title">
                                        <span>Персональный менеджер</span>
                                    </div>
                                    <div className="block-element__subtitle">
                                        <span className="subtitle__item">{main.leadManagerName}</span>
                                        <span className="subtitle__item">
                                            Тел.:&nbsp; &nbsp;
                                            {main.leadManagerPhone}
                                        </span>
                                        <span className="subtitle__item">
                                            E-mail:&nbsp; &nbsp;
                                            {main.leadManagerEmail}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="block-element">
                                <div className="block-element__icon">
                                    <svg viewBox="0 0 39 45" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M33.9921 16.2H4.08444C3.87674 16.2 3.73828 16.0616 3.73828 15.8539V3.91158C3.73828 3.70389 3.87674 3.56543 4.08444 3.56543H33.9921C34.1998 3.56543 34.3383 3.70389 34.3383 3.91158V15.8539C34.3383 16.027 34.1998 16.2 33.9921 16.2ZM4.43059 15.5077H33.646V4.25774H4.43059V15.5077Z" />
                                        <path d="M32.2617 14.4697H19.4194V13.7773H31.9156V7.02734H32.6079V14.1235C32.6079 14.2966 32.4694 14.4697 32.2617 14.4697Z" />
                                        <path d="M34.9615 45H3.11538C1.38462 45 0 43.6154 0 41.8846V3.11538C0 1.38462 1.38462 0 3.11538 0H34.9615C36.6923 0 38.0769 1.38462 38.0769 3.11538V41.8846C38.0769 43.6154 36.6923 45 34.9615 45ZM3.11538 0.692308C1.76538 0.692308 0.692308 1.76538 0.692308 3.11538V41.8846C0.692308 43.2346 1.76538 44.3077 3.11538 44.3077H34.9615C36.3115 44.3077 37.3846 43.2346 37.3846 41.8846V3.11538C37.3846 1.76538 36.3115 0.692308 34.9615 0.692308H3.11538Z" />
                                        <path d="M14.8844 29.3543H5.8152C4.6729 29.3543 3.73828 28.4197 3.73828 27.2773V20.3543C3.73828 19.212 4.6729 18.2773 5.8152 18.2773H14.8844C16.0267 18.2773 16.9614 19.212 16.9614 20.3543V27.2773C16.9614 28.4197 16.0614 29.3543 14.8844 29.3543ZM5.8152 18.9697C5.05367 18.9697 4.43059 19.5927 4.43059 20.3543V27.2773C4.43059 28.0389 5.05367 28.662 5.8152 28.662H14.8844C15.646 28.662 16.269 28.0389 16.269 27.2773V20.3543C16.269 19.5927 15.646 18.9697 14.8844 18.9697H5.8152Z" />
                                        <path d="M32.2614 29.3543H23.1922C22.0498 29.3543 21.1152 28.4197 21.1152 27.2773V20.3543C21.1152 19.212 22.0498 18.2773 23.1922 18.2773H32.296C33.4383 18.2773 34.3729 19.212 34.3729 20.3543V27.2773C34.3383 28.4197 33.4037 29.3543 32.2614 29.3543ZM23.1922 18.9697C22.4306 18.9697 21.8075 19.5927 21.8075 20.3543V27.2773C21.8075 28.0389 22.4306 28.662 23.1922 28.662H32.296C33.0575 28.662 33.6806 28.0389 33.6806 27.2773V20.3543C33.6806 19.5927 33.0575 18.9697 32.296 18.9697H23.1922Z" />
                                        <path d="M14.8844 42.1619H5.8152C4.6729 42.1619 3.73828 41.2273 3.73828 40.085V33.1619C3.73828 32.0196 4.6729 31.085 5.8152 31.085H14.8844C16.0267 31.085 16.9614 32.0196 16.9614 33.1619V40.085C16.9614 41.2273 16.0614 42.1619 14.8844 42.1619ZM5.8152 31.7427C5.05367 31.7427 4.43059 32.3657 4.43059 33.1273V40.0503C4.43059 40.8119 5.05367 41.435 5.8152 41.435H14.8844C15.646 41.435 16.269 40.8119 16.269 40.0503V33.1273C16.269 32.3657 15.646 31.7427 14.8844 31.7427H5.8152Z" />
                                        <path d="M32.2614 42.1619H23.1922C22.0498 42.1619 21.1152 41.2273 21.1152 40.085V33.1619C21.1152 32.0196 22.0498 31.085 23.1922 31.085H32.296C33.4383 31.085 34.3729 32.0196 34.3729 33.1619V40.085C34.3383 41.2273 33.4037 42.1619 32.2614 42.1619ZM23.1922 31.7427C22.4306 31.7427 21.8075 32.3657 21.8075 33.1273V40.0503C21.8075 40.8119 22.4306 41.435 23.1922 41.435H32.296C33.0575 41.435 33.6806 40.8119 33.6806 40.0503V33.1273C33.6806 32.3657 33.0575 31.7427 32.296 31.7427H23.1922Z" />
                                        <path d="M12.7784 7.0484L7.61377 12.2129L8.10331 12.7024L13.2679 7.53793L12.7784 7.0484Z" />
                                        <path d="M8.06519 9.24268C7.61519 9.24268 7.16519 9.06961 6.81904 8.72345C6.47288 8.41191 6.2998 7.96191 6.2998 7.4773C6.2998 7.0273 6.47288 6.5773 6.81904 6.23114C7.13057 5.88499 7.58057 5.71191 8.06519 5.71191C8.51519 5.71191 8.96519 5.88499 9.31134 6.23114C10.0037 6.92345 10.0037 7.99653 9.31134 8.68884C8.96519 9.06961 8.51519 9.24268 8.06519 9.24268ZM8.06519 6.43884C7.78827 6.43884 7.51134 6.54268 7.33827 6.75038C7.16519 6.95807 7.02673 7.20038 7.02673 7.4773C7.02673 7.75422 7.13057 8.03115 7.33827 8.20422C7.75365 8.61961 8.41134 8.61961 8.82673 8.20422C9.24211 7.78884 9.24211 7.13114 8.82673 6.71576C8.61904 6.54268 8.37673 6.43884 8.06519 6.43884Z" />
                                        <path d="M12.8074 13.9844C12.3574 13.9844 11.9074 13.8114 11.5612 13.4652C10.8689 12.7729 10.8689 11.6998 11.5612 11.0075C12.2535 10.3152 13.3612 10.3152 14.0189 11.0075C14.3651 11.3191 14.5381 11.7691 14.5381 12.2537C14.5381 12.7383 14.3651 13.1537 14.0189 13.4998C13.7074 13.8114 13.292 13.9844 12.8074 13.9844ZM12.8074 11.1806C12.5305 11.1806 12.2881 11.2844 12.0805 11.4921C11.6651 11.9075 11.6651 12.5652 12.0805 12.9806C12.4612 13.3614 13.1535 13.3614 13.5689 12.9806C13.7766 12.7729 13.8805 12.5306 13.8805 12.2537C13.8805 11.9767 13.7766 11.6998 13.5689 11.5267C13.3612 11.2844 13.0843 11.1806 12.8074 11.1806Z" />
                                        <path d="M13.1522 20.5372L7.08203 26.6074L7.57156 27.097L13.6417 21.0268L13.1522 20.5372Z" />
                                        <path d="M7.57156 20.5368L7.08203 21.0264L13.1522 27.0966L13.6417 26.607L7.57156 20.5368Z" />
                                        <path d="M14.6422 36.2422H6.05762V36.9345H14.6422V36.2422Z" />
                                        <path d="M32.0192 34.9619H23.4346V35.6542H32.0192V34.9619Z" />
                                        <path d="M32.0192 37.5576H23.4346V38.2499H32.0192V37.5576Z" />
                                        <path d="M28.0732 20.0771H27.3809V27.5195H28.0732V20.0771Z" />
                                        <path d="M31.4306 23.4688H23.9883V24.1611H31.4306V23.4688Z" />
                                    </svg>
                                </div>
                                <div className="block-element__info">
                                    <div className="block-element__title">
                                        <span>Объем учетных закупок для расчета скидки</span>
                                    </div>
                                    <div className="block-element__subtitle">
                                        <span className="currency-unit-rub">{main.currentCash}</span>
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
                                {table.map((index) => {
                                    return (
                                        <div key={index.rowNum} className="block-table__row">
                                            <div className="block-table__element">
                                                <span className="currency-unit-rub">{index.volume}</span>
                                            </div>
                                            <div className="block-table__element">
                                                <span>{index.discountSum}</span>
                                            </div>
                                            <div className="block-table__element">
                                                {index.conditions === 0 ? (
                                                    <div className="sale-conditions">
                                                        <span>Выполнено</span>
                                                        <div className="performed">
                                                            <svg viewBox="0 0 14 10">
                                                                <path
                                                                    d="M12.885 0a.951.951 0 00-.654.29C9.87 2.658 7.343 5.369 4.984 7.76L1.617 4.988A.951.951 0 10.413 6.452l4.043 3.33a.951.951 0 001.279-.06c2.556-2.562 5.33-5.563 7.848-8.086A.951.951 0 0012.885 0z"
                                                                    fill="#20CD32"
                                                                />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                ) : (
                                                    <div className="sale-conditions">
                                                        <span>Не выполнено</span>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                            <div className="block-element discount">
                                <div className="block-element__chart">
                                    <CircularProgressbar
                                        minValue={15}
                                        maxValue={33}
                                        value={Number(main.currentDiscount)}
                                        text={`${main.currentDiscount}%`}
                                    />
                                </div>
                                <div className="block-element__info">
                                    <div className="block-element__title">
                                        <span>Текущая скидка от CARDDEX</span>
                                    </div>
                                    <div className="block-element__subtitle">
                                        <span className="currency-unit-rub">Размер скидки партнера может отличаться</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {personalSuggestion ? (
                        <div className="main__block seggestions">
                            <div className="block-title block-title__important">
                                <span>Важная информация и персональные предложения</span>
                            </div>
                            <div className="block-container">
                                <div className="block-element">
                                    <div className="block-element__info">
                                        <div className="block-element__title">
                                            <span>10 Августа 2020</span>
                                        </div>
                                        <div className="block-element__subtitle">
                                            <span>Персональное предложение для постоянных партнеров</span>
                                        </div>
                                        <div className="block-element__description">
                                            <span>Срок действия вашего персонального предложения подходит к концу</span>
                                        </div>
                                        <div className="block-wrapper">
                                            <div className="block-element__button">
                                                <span>Подробнее</span>
                                                <svg xmlns="http://www.w3.org/2000/svg">
                                                    <line y1="12" x2="48.6111" y2="12" />
                                                    <circle cx="44.4446" cy="12.5" r="12" />
                                                    <path d="M41.3936 4.86133L48.7592 12.227L41.3936 19.5927" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="block-element">
                                    <div className="block-element__info">
                                        <div className="block-element__title">
                                            <span>10 Августа 2020</span>
                                        </div>
                                        <div className="block-element__subtitle">
                                            <span>Персональное предложение для постоянных партнеров</span>
                                        </div>
                                        <div className="block-element__description">
                                            <span>Срок действия вашего персонального предложения подходит к концу</span>
                                        </div>
                                        <div className="block-wrapper">
                                            <div className="block-element__button">
                                                <span>Подробнее</span>
                                                <svg xmlns="http://www.w3.org/2000/svg">
                                                    <line y1="12" x2="48.6111" y2="12" />
                                                    <circle cx="44.4446" cy="12.5" r="12" />
                                                    <path d="M41.3936 4.86133L48.7592 12.227L41.3936 19.5927" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="block-element">
                                    <div className="block-element__info">
                                        <div className="block-element__title">
                                            <span>10 Августа 2020</span>
                                        </div>
                                        <div className="block-element__subtitle">
                                            <span>Персональное предложение для постоянных партнеров</span>
                                        </div>
                                        <div className="block-element__description">
                                            <span>Срок действия вашего персонального предложения подходит к концу</span>
                                        </div>
                                        <div className="block-wrapper">
                                            <div className="block-element__button">
                                                <span>Подробнее</span>
                                                <svg xmlns="http://www.w3.org/2000/svg">
                                                    <line y1="12" x2="48.6111" y2="12" />
                                                    <circle cx="44.4446" cy="12.5" r="12" />
                                                    <path d="M41.3936 4.86133L48.7592 12.227L41.3936 19.5927" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="main__block seggestions">
                            <div className="block-title block-title__important">
                                <span>На данный момент персональные предложения отсутствуют</span>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        );
    }
    return <Loader />;
};

export default MainComponent;
