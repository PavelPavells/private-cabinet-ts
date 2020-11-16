import React from 'react';

interface CatalogItems {
    items: any;
}

const CatalogItems: React.FC<CatalogItems> = ({ items }: CatalogItems) => {
    return (
        <ul className="items">
            {items.map((index: any) => {
                console.log(index);
                return (
                    <li className="item">
                        <div className="item__photo">PHOTO</div>
                        <div className="item__photo">NAME</div>
                        <div className="item__photo">VALUE</div>
                        <div className="item__photo">SALE</div>
                        <div className="item__photo">PRICE</div>
                        <div className="item__photo">ICON</div>
                    </li>
                );
            })}
        </ul>
    );
};

export default CatalogItems;
