import React from 'react';

const Pagination: React.FC<any> = (): any => {
    return (
        <>
            <div className="pagination__shevron" />
            <div className="pagination__shevron" />
            <div className="pagination__pages">
                <div className="page">1</div>
                <div className="page">2</div>
                <div className="page">3</div>
                <div className="page">4</div>
                <div className="page">5</div>
            </div>
            <div className="pagination__shevron" />
            <div className="pagination__shevron" />
        </>
    );
};

export default Pagination;
