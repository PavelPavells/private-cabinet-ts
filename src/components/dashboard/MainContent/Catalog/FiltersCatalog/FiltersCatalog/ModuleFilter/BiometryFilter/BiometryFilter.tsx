import React from 'react';

const BiometryFilter = () => {
    return (
        <>
            <div className="checkboxes block--superinside">
                <input type="checkbox" id="fingerprint" className="checkbox" />
                <label htmlFor="fingerprint">Отпечатки пальцев</label>
            </div>
            <div className="checkboxes block--superinside">
                <input type="checkbox" id="faceid" className="checkbox" />
                <label htmlFor="faceid">Распознование лиц</label>
            </div>
        </>
    );
};

export default BiometryFilter;
