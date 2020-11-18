import React from 'react';

const InterfacesFilter = () => {
    return (
        <>
            <div className="checkboxes block--superinside">
                <input type="checkbox" id="rs" className="checkbox" />
                <label htmlFor="rs">RS-485</label>
            </div>
            <div className="checkboxes block--superinside">
                <input type="checkbox" id="ethernet" className="checkbox" />
                <label htmlFor="ethernet">Ethernet</label>
            </div>
            <div className="checkboxes block--superinside">
                <input type="checkbox" id="bluetooth" className="checkbox" />
                <label htmlFor="bluetooth">Bluetooth</label>
            </div>
            <div className="checkboxes block--superinside">
                <input type="checkbox" id="wifi" className="checkbox" />
                <label htmlFor="wifi">WiFi</label>
            </div>
        </>
    );
};

export default InterfacesFilter;
