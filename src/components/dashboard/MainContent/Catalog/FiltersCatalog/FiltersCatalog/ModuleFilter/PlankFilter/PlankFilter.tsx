import React from 'react';

const PlankFilter = () => {
    return (
        <>
            <div className="checkboxes block--superinside">
                <input type="checkbox" id="standardplank" className="checkbox" />
                <label htmlFor="standardplank">Стандартные</label>
            </div>
            <div className="checkboxes block--superinside">
                <input type="checkbox" id="antipanicmechplank" className="checkbox" />
                <label htmlFor="antipanicmechplank">Механическая "Антипаника"</label>
            </div>
            <div className="checkboxes block--superinside">
                <input type="checkbox" id="antipanicauto" className="checkbox" />
                <label htmlFor="antipanicauto">Механическая "Антипаника"</label>
            </div>
        </>
    );
};

export default PlankFilter;
