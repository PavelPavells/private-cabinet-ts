import React from 'react';

interface ResetButton {
    value: number;
}

const ResetButton: React.FC<ResetButton> = ({ value }: ResetButton) => {
    return (
        <>
            <div className="item__value">
                Найдено товаров:
                <span>{value}</span>
            </div>
            <button type="button" className="reset">
                Сбросить фильтр
            </button>
        </>
    );
};

export default ResetButton;
