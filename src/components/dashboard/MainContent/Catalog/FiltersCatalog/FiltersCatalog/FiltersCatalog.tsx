import React from 'react';
import ResetButton from '../ResetButton/ResetButton';

interface FilterCatalog {
    value: number;
}
const FiltersCatalog: React.FC<FilterCatalog> = ({ value }: FilterCatalog) => {
    return (
        <div className="filters">
            <div className="filters__checkboxes">
                <label htmlFor="name">Filter</label>
                <input type="checkbox" id="name" className="checkbox" />
            </div>
            <div className="filter__button">
                <ResetButton value={value} />
            </div>
        </div>
    );
};

export default FiltersCatalog;
