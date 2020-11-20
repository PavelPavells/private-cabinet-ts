import React, { useState, Suspense, lazy } from 'react';
import ResetButton from '../ResetButton/ResetButton';
import Loader from '../../../../../../__utils__/Spinner';
import Plus from '../../../../../../images/Catalog/Items/plus.svg';
import Minus from '../../../../../../images/Catalog/Items/minus.svg';
import './FiltersCatalog.scss';

const ExecuteFilter = lazy(() => import('./ExecuteFilter/ExecuteFilter'));
const ModuleFilter = lazy(() => import('./ModuleFilter/ModuleFilter'));
const RelatedFilter = lazy(() => import('./RelatedFilter/RelatedFilter'));

interface FilterCatalog {
    value: number;
}

const FiltersCatalog: React.FC<FilterCatalog> = ({ value }: FilterCatalog) => {
    const [openTurnstile, setOpenTurnstile] = useState(false);
    const [openExecute, setOpenExecute] = useState(false);
    const [openModule, setOpenModule] = useState(false);
    const [openRelated, setOpenRelated] = useState(false);
    const [openBiometry, setOpenBiometry] = useState(false);
    const [openExtra, setOpenExtra] = useState(false);
    const [openFormat, setOpenFormat] = useState(false);
    const [openInterfaces, setOpenInterfaces] = useState(false);
    const [openMaterial, setOpenMaterial] = useState(false);
    const [openPlank, setOpenPlank] = useState(false);
    const [openSensors, setOpenSensors] = useState(false);

    const state: any = {
        openBiometry,
        openExtra,
        openFormat,
        openInterfaces,
        openMaterial,
        openPlank,
        openSensors
    };

    const handleChangeOpenTurnstile = () => {
        setOpenTurnstile(!openTurnstile);
    };

    const handleChangeOpenInsideBlocks = (string: string) => {
        switch (string) {
            case 'EXECUTE':
                return setOpenExecute(!openExecute);
            case 'MODULE':
                return setOpenModule(!openModule);
            case 'RELATED':
                return setOpenRelated(!openRelated);
            case 'BIOMETRY':
                return setOpenBiometry(!openBiometry);
            case 'EXTRA':
                return setOpenExtra(!openExtra);
            case 'FORMAT':
                return setOpenFormat(!openFormat);
            case 'INTERFACES':
                return setOpenInterfaces(!openInterfaces);
            case 'MATERIAL':
                return setOpenMaterial(!openMaterial);
            case 'PLANK':
                return setOpenPlank(!openPlank);
            case 'SENSORS':
                return setOpenSensors(!openSensors);
            default:
                return 0;
        }
    };

    return (
        <>
            <section className="filters">
                <div className="filters__block">
                    <div onClick={handleChangeOpenTurnstile} className="block__turnstile block--outside">
                        <span>Турникеты</span>
                        <img src={openTurnstile ? Minus : Plus} alt="turnstile" />
                    </div>
                    {openTurnstile ? (
                        <>
                            <div className="turnstule__blocks block--inside">
                                <div onClick={() => handleChangeOpenInsideBlocks('EXECUTE')} className="blocks__execution">
                                    <span>Исполнение корпуса</span>
                                    <img src={openExecute ? Minus : Plus} alt="imageExecute" />
                                </div>
                                <Suspense fallback={<Loader />}>{openExecute ? <ExecuteFilter /> : null}</Suspense>
                            </div>
                            <div className="turnstule__blocks block--inside">
                                <div onClick={() => handleChangeOpenInsideBlocks('MODULE')} className="blocks__execution">
                                    <span>Модули</span>
                                    <img src={openModule ? Minus : Plus} alt="imageModule" />
                                </div>
                                <Suspense fallback={<Loader />}>
                                    {openModule ? (
                                        <ModuleFilter state={state} handleChangeOpenInsideBlocks={handleChangeOpenInsideBlocks} />
                                    ) : null}
                                </Suspense>
                            </div>
                            <div className="turnstule__blocks block--inside">
                                <div onClick={() => handleChangeOpenInsideBlocks('RELATED')} className="blocks__execution">
                                    <span>Сопутствующая продукция</span>
                                    <img src={openRelated ? Minus : Plus} alt="imageRelated" />
                                </div>
                                <Suspense fallback={<Loader />}>{openRelated ? <RelatedFilter /> : null}</Suspense>
                            </div>
                        </>
                    ) : null}
                </div>
                <div className="filter__button">
                    <ResetButton value={value} />
                </div>
            </section>
        </>
    );
};

export default FiltersCatalog;
