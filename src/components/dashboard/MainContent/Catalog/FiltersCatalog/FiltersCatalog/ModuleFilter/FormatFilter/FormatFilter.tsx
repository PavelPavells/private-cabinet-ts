import React from 'react';

const FormatFilter = () => {
    return (
        <>
            <div className="checkboxes block--superinside">
                <input type="checkbox" id="emmarine" className="checkbox" />
                <label htmlFor="emmarine">Em-Marine</label>
            </div>
            <div className="checkboxes block--superinside">
                <input type="checkbox" id="mifire" className="checkbox" />
                <label htmlFor="mifire">Mifire</label>
            </div>
            <div className="checkboxes block--superinside">
                <input type="checkbox" id="qr" className="checkbox" />
                <label htmlFor="qr">QR-code</label>
            </div>
            <div className="checkboxes block--superinside">
                <input type="checkbox" id="bluetooth" className="checkbox" />
                <label htmlFor="bluetooth">Bluetooth</label>
            </div>
        </>
    );
};

export default FormatFilter;
