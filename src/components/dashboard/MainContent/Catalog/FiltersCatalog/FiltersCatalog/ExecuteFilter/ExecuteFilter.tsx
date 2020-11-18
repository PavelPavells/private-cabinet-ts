import React from 'react';

const ExecuteFilter = () => {
    return (
        <>
            <div className="checkboxes block--superinside">
                <input type="checkbox" id="str" className="checkbox" />
                <label htmlFor="str">Серия STR</label>
            </div>
            <div className="checkboxes block--superinside">
                <input type="checkbox" id="stx" className="checkbox" />
                <label htmlFor="stx">Серия STX</label>
            </div>
            <div className="checkboxes block--superinside">
                <input type="checkbox" id="compact" className="checkbox" />
                <label htmlFor="compact">Компактные</label>
            </div>
            <div className="checkboxes block--superinside">
                <input type="checkbox" id="thumb" className="checkbox" />
                <label htmlFor="thumb">Тумбовые</label>
            </div>
        </>
    );
};

export default ExecuteFilter;
