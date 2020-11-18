import React from 'react';

const MaterialFilter = () => {
    return (
        <>
            <div className="checkboxes block--superinside">
                <input type="checkbox" id="standard" className="checkbox" />
                <label htmlFor="standard">Анодированный алюминий</label>
            </div>
            <div className="checkboxes block--superinside">
                <input type="checkbox" id="antipanicmech" className="checkbox" />
                <label htmlFor="antipanicmech">Шлифованный аллюминий</label>
            </div>
        </>
    );
};

export default MaterialFilter;
