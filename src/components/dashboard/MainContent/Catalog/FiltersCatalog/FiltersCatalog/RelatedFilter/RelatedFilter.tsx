import React from 'react';

const RelatedFilter = () => {
    return (
        <>
            <div className="checkboxes block--superinside">
                <input type="checkbox" id="remote" className="checkbox" />
                <label htmlFor="remote">Пульты управления</label>
            </div>
            <div className="checkboxes block--superinside">
                <input type="checkbox" id="fences" className="checkbox" />
                <label htmlFor="fences">Ограждения прохода</label>
            </div>
            <div className="checkboxes block--superinside">
                <input type="checkbox" id="antipanic" className="checkbox" />
                <label htmlFor="antipanic">Секции Антипаника</label>
            </div>
            <div className="checkboxes block--superinside">
                <input type="checkbox" id="power" className="checkbox" />
                <label htmlFor="power">Блоки питания</label>
            </div>
            <div className="checkboxes block--superinside">
                <input type="checkbox" id="readers" className="checkbox" />
                <label htmlFor="readers">Настольные считыватели</label>
            </div>
            <div className="checkboxes block--superinside">
                <input type="checkbox" id="identifier" className="checkbox" />
                <label htmlFor="identifier">Идентификаторы</label>
            </div>
            <div className="checkboxes block--superinside">
                <input type="checkbox" id="card" className="checkbox" />
                <label htmlFor="card">Картоприемники отдельностоящие</label>
            </div>
            <div className="checkboxes block--superinside">
                <input type="checkbox" id="converter" className="checkbox" />
                <label htmlFor="converter">Конвертер интерфейсов RS-485 - Ethernet</label>
            </div>
            <div className="checkboxes block--superinside">
                <input type="checkbox" id="breathalyzer" className="checkbox" />
                <label htmlFor="breathalyzer">Алкотестеры</label>
            </div>
        </>
    );
};

export default RelatedFilter;
