/**
 * ********** Импорт основных библиотек из NPM **********
 * */
import React from 'react';
// import { shallowEqual, useSelector, useDispatch } from 'react-redux';

/**
 * ********** Импорт экшенов **********
 * */
// import { addMessage, ChatRequestData } from '../../../../actions/chatActions/chatActions';

/**
 * ********** Импорт комопнентов **********
 */
import MediaFilesCategories from './MediaFilesCategories/MediaFilesCategories';
import MediaFilesFields from './MediaFilesFields/MediaFilesFields';

/**
 * ********** Импорт типов **********
 * */
// import { PersonalCabinet } from '../../../../store/store';

/**
 * ********** Импорт LOADER из __UTILS__ **********
 * */
// import Loader from '../../../../__utils__/Spinner';
// import Fade from '../../../../__utils__/Fade/Fade';

/**
 * ********** Импорт файлов стилей **********
 * */

import './MediaFiles.scss';

const MediaFiles = () => {
    return (
        <div className="main-content">
            <section className="files">
                <h1 className="files__header">Mедиа-материалы</h1>
                <h2 className="files__subheader">Выберите категорию:</h2>
                <main className="files__main">
                    <div className="main__categories">
                        <MediaFilesCategories />
                    </div>
                    <div className="main__fields">
                        <MediaFilesFields />
                    </div>
                </main>
            </section>
        </div>
    );
};

export default MediaFiles;
