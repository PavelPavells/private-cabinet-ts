/**
 * импорт зависимостей из Npm
 */
import React, { useState } from 'react';

/**
 * импорт лого, фото
 */
import Calendar from '../../../../../../images/Read/calendar.svg';
import Warning from '../../../../../../images/Read/warning.svg';
import Stock from '../../../../../../images/Read/stock.svg';

/**
 * импорт стилей
 */
import './ReadOffer.scss';

/**
 * интерфейс пропсов
 */
interface ReadOffer {
    offer: any;
    offerId: number;
    handleOpenReadOffer: () => void;
    handleCloseReadOffer: () => void;
}

const ReadOffer: React.FC<ReadOffer> = ({ offer, offerId, handleOpenReadOffer, handleCloseReadOffer }: ReadOffer) => {
    const [participate, setParticipate] = useState(false);

    const handleChangeParticipate = () => {
        setTimeout(() => {
            setParticipate(!participate);
        }, 1000);
    };

    return (
        <section className="wrap__read">
            <div className="read__offer">
                <div className="read__header">
                    <div className="left">
                        <div className="left__text">АКЦИЯ</div>
                        <img src={Stock} alt="" className="photo" />
                    </div>
                    <div onClick={handleCloseReadOffer} className="image" />
                </div>
                <div className="read__photo">
                    <div className="photo" />
                </div>
                <div className="read__article">
                    <div className="article__header">{offer[offerId - 1] ? offer[offerId - 1].offerTopic : null}</div>
                    <div className="article__text">{offer[offerId - 1] ? offer[offerId - 1].offerBody : 'Данной новости нет'}</div>
                </div>
                <div className="read__date">
                    <img src={Calendar} alt="" className="date__calendar" />
                    <div className="date__text">
                        <span>Предложение действует в период</span>
                        <br />
                        <span>с 13 по 31 октября.</span>
                    </div>
                </div>
                <div className="read__attention">
                    <div className="attention__left">
                        <div className="left__header">
                            <img src={Warning} alt="" className="icon" />
                            <div className="left__heading">Обратите внимание</div>
                        </div>
                        <div className="left__text">
                            <div className="text">Депозит не распространяется для оплаты моделей серии автоматических шлагбаумов «RBA»</div>
                        </div>
                    </div>
                    <div className="attention__right">
                        <div className="photo" />
                    </div>
                </div>
                <div className="read__button" onClick={handleChangeParticipate}>
                    {participate ? (
                        <div className="text">Теперь вы являетесь участником акции!</div>
                    ) : (
                        <button type="submit" className="button__offer">
                            Подтвердить участие
                        </button>
                    )}
                </div>
            </div>
        </section>
    );
};

export default ReadOffer;
