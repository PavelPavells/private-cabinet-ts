import React, { lazy } from 'react';
import Plus from '../../../../../../../images/Catalog/Items/plus.svg';
import Minus from '../../../../../../../images/Catalog/Items/minus.svg';

const BiometryFilter = lazy(() => import('./BiometryFilter/BiometryFilter'));
const ExtraFilter = lazy(() => import('./ExtraFilter/ExtraFilter'));
const FormatFilter = lazy(() => import('./FormatFilter/FormatFilter'));
const InterfacesFilter = lazy(() => import('./InterfacesFilter/InterfacesFilter'));
const MaterialFilter = lazy(() => import('./MaterialFilter/MaterialFilter'));
const PlankFilter = lazy(() => import('./PlankFilter/PlankFilter'));
const SensorFilter = lazy(() => import('./SensorsFilter/SensorsFilter'));

interface ModuleFilter {
    state: any;
    handleChangeOpenInsideBlocks: any;
}

const ModuleFilter: React.FC<ModuleFilter> = ({ state, handleChangeOpenInsideBlocks }: ModuleFilter) => {
    return (
        <>
            <div className="turnstule__blocks block--superinside">
                <div onClick={() => handleChangeOpenInsideBlocks('INTERFACES')} className="blocks__execution">
                    <span>Интерфейсы подключения</span>
                    <img src={state.openInterfaces ? Minus : Plus} alt="interfaceLogo" />
                </div>
                {state.openInterfaces ? <InterfacesFilter /> : null}
            </div>
            <div className="turnstule__blocks block--superinside">
                <div onClick={() => handleChangeOpenInsideBlocks('FORMAT')} className="blocks__execution">
                    <span>Формат идентификаторов</span>
                    <img src={state.openFormat ? Minus : Plus} alt="formatLogo" />
                </div>
                {state.openFormat ? <FormatFilter /> : null}
            </div>
            <div className="turnstule__blocks block--superinside">
                <div onClick={() => handleChangeOpenInsideBlocks('BIOMETRY')} className="blocks__execution">
                    <span>Биометрия</span>
                    <img src={state.openBiometry ? Minus : Plus} alt="biometryLogo" />
                </div>
                {state.openBiometry ? <BiometryFilter /> : null}
            </div>
            <div className="turnstule__blocks block--superinside">
                <div onClick={() => handleChangeOpenInsideBlocks('PLANK')} className="blocks__execution">
                    <span>Тип преграждающих планок</span>
                    <img src={state.openPlank ? Minus : Plus} alt="plankLogo" />
                </div>
                {state.openPlank ? <PlankFilter /> : null}
            </div>
            <div className="turnstule__blocks block--superinside">
                <div onClick={() => handleChangeOpenInsideBlocks('MATERIAL')} className="blocks__execution">
                    <span>Материал планок</span>
                    <img src={state.openMaterial ? Minus : Plus} alt="materialLogo" />
                </div>
                {state.openMaterial ? <MaterialFilter /> : null}
            </div>
            <div className="turnstule__blocks block--superinside">
                <div onClick={() => handleChangeOpenInsideBlocks('SENSORS')} className="blocks__execution">
                    <span>Датчики несанкционированного прохода</span>
                    <img src={state.openSensors ? Minus : Plus} alt="sensorsLogo" />
                </div>
                {state.openSensors ? <SensorFilter /> : null}
            </div>
            <div onClick={() => handleChangeOpenInsideBlocks('EXTRA')} className="turnstule__blocks block--superinside">
                <div className="blocks__execution">
                    <span>Дополнительно</span>
                    <img src={state.openExtra ? Minus : Plus} alt="extraLogo" />
                </div>
                {state.openExtra ? <ExtraFilter /> : null}
            </div>
        </>
    );
};

export default ModuleFilter;
