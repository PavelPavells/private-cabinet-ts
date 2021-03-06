import React, { useState } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { fetchDataMain } from '../../../../../actions/mainActions/mainActions';
import { MainListReq } from '../../../../../constants/mainTypes/mainTypes';
import { PersonalCabinet } from '../../../../../store/store';
import ReadOffer from './ReadOffer/ReadOffer';
import Participant from '../../../../../images/personalOffer/participant.svg';
import OfferPhoto from '../../../../../images/news/news.png';
import Loader from '../../../../../__utils__/Spinner';

import './PersonalOffer.scss';

const PersonalOffer = () => {
    const [openOffer, setOpenOffer] = useState(false);
    const [offerId, setOfferId] = useState(0);

    const { isFetching, offers } = useSelector((state: PersonalCabinet) => state.main, shallowEqual);
    const { user } = useSelector((state: PersonalCabinet) => state.auth, shallowEqual);

    const dispatch = useDispatch();

    const handleOpenReadOffer = (id?: any) => {
        setOpenOffer(true);
        setOfferId(id);
    };

    const handleCloseReadOffer = () => {
        setOpenOffer(false);
        const request: MainListReq = { uuid: user };
        dispatch(fetchDataMain(request));
    };

    if (!isFetching && offers && user) {
        return (
            <>
                {offers.length ? (
                    <div className="main__block seggestions">
                        <div className="block-title block-title__important">
                            <span>Персональные предложения</span>
                        </div>
                        <div className="block-container">
                            {offers.map((index) => {
                                return (
                                    // eslint-disable-next-line react/no-array-index-key
                                    <div
                                        key={index.id}
                                        onClick={() => handleOpenReadOffer(index.id)}
                                        className="block-element personal-offer"
                                    >
                                        <div className="block-element__info">
                                            <div className="block-element__title">
                                                <span className="offer">Перс. предложения</span>
                                                <span className="date">{index.offerDate}</span>
                                                {/* <span className="text">ВЫ УЧАСТВУЕТЕ</span> */}
                                                <img src={Participant} alt="" className="icon" />
                                            </div>
                                            <img src={OfferPhoto} alt="" className="offer__image" />
                                            <div className="block-element__subtitle--offer">
                                                <span>{index.offerTopic}</span>
                                            </div>
                                            <div className="block-element__description">
                                                <span>{index.offerBody}</span>
                                            </div>
                                            <div className="block-wrapper">
                                                <div className="wrapper__left">
                                                    <div className="wrapper__more">Подробнее</div>
                                                    <div className="block-element__button">
                                                        <svg width="57" height="25" xmlns="http://www.w3.org/2000/svg">
                                                            <line y1="12" x2="48.6111" y2="12" />
                                                            <circle cx="44.4446" cy="12.5" r="12" />
                                                            <path d="M41.3936 4.86133L48.7592 12.227L41.3936 19.5927" />
                                                        </svg>
                                                    </div>
                                                </div>
                                                <div className="block-element__button">
                                                    <svg
                                                        width="40"
                                                        height="40"
                                                        viewBox="0 0 40 40"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <circle cx="20" cy="20" r="19.7778" stroke="#1D68D9" strokeWidth="0.444444" />
                                                        <path
                                                            d="M12.519 28L25.3119 10.5778H26.6559L13.863 28H12.519ZM24.615 28.1991C23.5033 28.1991 22.5907 27.7677 21.8773 26.9049C21.1638 26.0255 20.807 24.9719 20.807 23.744C20.807 22.5327 21.1638 21.4874 21.8773 20.608C22.6073 19.7286 23.5365 19.2889 24.6648 19.2889C25.7765 19.2889 26.6891 19.7286 27.4026 20.608C28.1161 21.4874 28.4728 22.5327 28.4728 23.744C28.4728 24.9553 28.1078 26.0006 27.3777 26.88C26.6642 27.7594 25.7433 28.1991 24.615 28.1991ZM24.6648 27.1289C25.3949 27.1289 25.9922 26.8053 26.4568 26.1582C26.938 25.5111 27.1786 24.7064 27.1786 23.744C27.1786 22.7816 26.9297 21.9769 26.4319 21.3298C25.9341 20.6827 25.3285 20.3591 24.615 20.3591C23.885 20.3591 23.2793 20.691 22.7981 21.3547C22.3335 22.0018 22.1013 22.7982 22.1013 23.744C22.1013 24.7064 22.3501 25.5111 22.8479 26.1582C23.3457 26.8053 23.9513 27.1289 24.6648 27.1289ZM14.5101 19.2889C13.3984 19.2889 12.4858 18.8575 11.7724 17.9947C11.0589 17.1153 10.7021 16.0616 10.7021 14.8338C10.7021 13.6225 11.0589 12.5772 11.7724 11.6978C12.5024 10.8184 13.4316 10.3787 14.5599 10.3787C15.6716 10.3787 16.5842 10.8184 17.2977 11.6978C18.0112 12.5772 18.3679 13.6225 18.3679 14.8338C18.3679 16.045 18.0029 17.0904 17.2728 17.9698C16.5593 18.8492 15.6384 19.2889 14.5101 19.2889ZM14.5599 18.2187C15.29 18.2187 15.8873 17.8951 16.3519 17.248C16.8331 16.6009 17.0737 15.7961 17.0737 14.8338C17.0737 13.8714 16.8248 13.0667 16.327 12.4196C15.8293 11.7724 15.2236 11.4489 14.5101 11.4489C13.7801 11.4489 13.1744 11.7807 12.6933 12.4444C12.2287 13.0916 11.9964 13.888 11.9964 14.8338C11.9964 15.7961 12.2453 16.6009 12.743 17.248C13.2408 17.8951 13.8464 18.2187 14.5599 18.2187Z"
                                                            fill="#1D68D9"
                                                        />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                            {openOffer ? <ReadOffer offer={offers} offerId={offerId} handleCloseReadOffer={handleCloseReadOffer} /> : null}
                        </div>
                        {/* <div className="more__offers">Все предложения</div> */}
                    </div>
                ) : (
                    <div className="main__block seggestions">
                        <div className="block-title block-title__important">
                            <span>На данный момент персональные предложения отсутствуют</span>
                        </div>
                    </div>
                )}
            </>
        );
    }
    return <Loader />;
};

export default PersonalOffer;
