import React from 'react';

const FiltersCatalog: React.FC<any> = (): any => {
    return (
        <div className="filters">
            <div className="filters__checkboxes">
                <label htmlFor="name">Filter</label>
                <input type="checkbox" id="name" className="checkbox" />
            </div>
        </div>
    );
};

export default FiltersCatalog;
