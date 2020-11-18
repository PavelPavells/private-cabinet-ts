import React from 'react';

const ExtraFilter = () => {
    return (
        <>
            <div className="checkboxes block--superinside">
                <input type="checkbox" id="radio" className="checkbox" />
                <label htmlFor="radio">Приемник радиопультов</label>
            </div>
            <div className="checkboxes block--superinside">
                <input type="checkbox" id="antipanicmech" className="checkbox" />
                <label htmlFor="antipanicmech">Информационный LCD-дисплей</label>
            </div>
            <div className="checkboxes block--superinside">
                <input type="checkbox" id="antipanicauto" className="checkbox" />
                <label htmlFor="antipanicauto">Встроенный картоприемник</label>
            </div>
            <div className="checkboxes block--superinside">
                <input type="checkbox" id="standard" className="checkbox" />
                <label htmlFor="standard">Кожуха из нержавеющей стали</label>
            </div>
            <div className="checkboxes block--superinside">
                <input type="checkbox" id="antipanicmech" className="checkbox" />
                <label htmlFor="antipanicmech">Сетевой сервер "EP-2000"</label>
            </div>
            <div className="checkboxes block--superinside">
                <input type="checkbox" id="antipanicauto" className="checkbox" />
                <label htmlFor="antipanicauto">Сетевой контроллер "CBU-280"</label>
            </div>
        </>
    );
};

export default ExtraFilter;
