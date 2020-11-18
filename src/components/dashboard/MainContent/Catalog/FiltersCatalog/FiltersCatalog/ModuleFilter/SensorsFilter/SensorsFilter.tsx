import React from 'react';

const SensorsFilter = () => {
    return (
        <>
            <div className="checkboxes block--superinside">
                <input type="checkbox" id="siren" className="checkbox" />
                <label htmlFor="siren">С Сиреной</label>
            </div>
            <div className="checkboxes block--superinside">
                <input type="checkbox" id="flasher" className="checkbox" />
                <label htmlFor="flasher">С сиреной и мигалкой</label>
            </div>
        </>
    );
};

export default SensorsFilter;
