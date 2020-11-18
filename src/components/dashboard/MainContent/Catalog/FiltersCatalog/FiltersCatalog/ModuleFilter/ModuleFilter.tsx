import React, { Suspense, lazy } from 'react';
import Loader from '../../../../../../../__utils__/Spinner';

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
        <Suspense fallback={<Loader />}>
            <div className="turnstule__blocks block--inside">
                <div onClick={() => handleChangeOpenInsideBlocks('INTERFACES')} className="blocks__execution">
                    Интерфейсы подключения
                </div>
                {state.openInterfaces ? <InterfacesFilter /> : null}
            </div>
            <div className="turnstule__blocks block--inside">
                <div onClick={() => handleChangeOpenInsideBlocks('FORMAT')} className="blocks__execution">
                    Формат идентификаторов
                </div>
                {state.openFormat ? <FormatFilter /> : null}
            </div>
            <div className="turnstule__blocks block--inside">
                <div onClick={() => handleChangeOpenInsideBlocks('BIOMETRY')} className="blocks__execution">
                    Биометрия
                </div>
                {state.openBiometry ? <BiometryFilter /> : null}
            </div>
            <div className="turnstule__blocks block--inside">
                <div onClick={() => handleChangeOpenInsideBlocks('PLANK')} className="blocks__execution">
                    Тип преграждающих планок
                </div>
                {state.openPlank ? <PlankFilter /> : null}
            </div>
            <div className="turnstule__blocks block--inside">
                <div onClick={() => handleChangeOpenInsideBlocks('MATERIAL')} className="blocks__execution">
                    Материал планок
                </div>
                {state.openMaterial ? <MaterialFilter /> : null}
            </div>
            <div className="turnstule__blocks block--inside">
                <div onClick={() => handleChangeOpenInsideBlocks('SENSORS')} className="blocks__execution">
                    Датчики несанкционированного прохода
                </div>
                {state.openSensors ? <SensorFilter /> : null}
            </div>
            <div onClick={() => handleChangeOpenInsideBlocks('EXTRA')} className="turnstule__blocks block--inside">
                <div className="blocks__execution">Дополнительно</div>
                {state.openExtra ? <ExtraFilter /> : null}
            </div>
        </Suspense>
    );
};

export default ModuleFilter;
