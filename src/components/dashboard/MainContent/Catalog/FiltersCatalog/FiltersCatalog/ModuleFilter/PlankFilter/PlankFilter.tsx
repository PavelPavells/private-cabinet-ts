import React from 'react';

const PlankFilter = () => {
    return (
        <>
            <div className="checkboxes block--superinside">
                <input type="checkbox" id="standard" className="checkbox" />
                <label htmlFor="standard">Стандартные</label>
            </div>
            <div className="checkboxes block--superinside">
                <input type="checkbox" id="antipanicmech" className="checkbox" />
                <label htmlFor="antipanicmech">Механическая "Антипаника"</label>
            </div>
            <div className="checkboxes block--superinside">
                <input type="checkbox" id="antipanicauto" className="checkbox" />
                <label htmlFor="antipanicauto">Механическая "Антипаника"</label>
            </div>
        </>
    );
};

export default PlankFilter;
