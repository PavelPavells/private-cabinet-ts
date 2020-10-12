/**
 * import dependencies from npm
 */
import React from 'react';

/**
 * import styles
 */
import './MediaFilesFields.scss';

const MediaFilesFields = () => {
    return (
        <div className="fields">
            <div className="fields__checkboxes">
                {/*
                <div className="checkboxes__item">
                    <input type="checkbox" id="first__field" className="item__checkbox" />
                    <label htmlFor="first__field" className="item__text">
                        Наименование
                    </label>
                </div>
                */}
                <div className="checkboxes__item">
                    <input type="checkbox" id="second__field" className="item__checkbox" />
                    <label htmlFor="second__field" className="item__text">
                        Описание
                    </label>
                </div>
                <div className="checkboxes__item">
                    <input type="checkbox" id="third__field" className="item__checkbox" />
                    <label htmlFor="third__field" className="item__text">
                        Характеристики
                    </label>
                </div>
                <div className="checkboxes__item">
                    <input type="checkbox" id="fourth__field" className="item__checkbox" />
                    <label htmlFor="fourth__field" className="item__text">
                        Стоимость
                    </label>
                </div>
                <div className="checkboxes__item">
                    <input type="checkbox" id="fifth__field" className="item__checkbox" />
                    <label htmlFor="fifth__field" className="item__text">
                        Фото
                    </label>
                </div>
                <div className="checkboxes__item">
                    <input type="checkbox" id="sixth__field" className="item__checkbox" />
                    <label htmlFor="sixth__field" className="item__text">
                        Чертеж
                    </label>
                </div>
                <div className="checkboxes__item">
                    <input type="checkbox" id="seventh__field" className="item__checkbox" />
                    <label htmlFor="seventh__field" className="item__text">
                        Документы
                    </label>
                </div>
            </div>
            <div className="fields__checkboxes">
                <div className="checkboxes__item">
                    <input type="checkbox" id="eighth__field" className="item__checkbox" />
                    <label htmlFor="eighth__field" className="item__text">
                        Прайс лист xls файл
                    </label>
                </div>
                <div className="checkboxes__item">
                    <input type="checkbox" id="ningth__field" className="item__checkbox" />
                    <label htmlFor="ningth__field" className="item__text">
                        Прайс лист pdf файл
                    </label>
                </div>
                <div className="checkboxes__item">
                    <input type="checkbox" id="tenth__field" className="item__checkbox" />
                    <label htmlFor="tenth__field" className="item__text">
                        Нужен xls файл для MS Excel
                    </label>
                </div>
            </div>
            <div className="fields__button">Сформировать файлы</div>
        </div>
    );
};

export default MediaFilesFields;
