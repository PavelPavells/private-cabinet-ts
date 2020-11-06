import React from 'react';
// import { shallowEqual, useSelector, useDispatch } from 'react-redux';
// import { addMessage, ChatRequestData } from '../../../../actions/chatActions/chatActions';
import MediaFilesCategories from './MediaFilesCategories/MediaFilesCategories';
import MediaFilesFields from './MediaFilesFields/MediaFilesFields';
// import { PersonalCabinet } from '../../../../store/store';
// import Loader from '../../../../__utils__/Spinner';
// import Fade from '../../../../__utils__/Fade/Fade';

import './MediaFiles.scss';

const MediaFiles = () => {
    return (
        <div className="main-content">
            <section className="files">
                <h1 className="files__header">Mедиа-материалы</h1>
                <main className="files__main">
                    <div className="main__categories">
                        <p className="heading">Выберите категорию:</p>
                        <MediaFilesCategories />
                    </div>
                    <div className="main__fields">
                        <p className="heading">Выберите нужные поля:</p>
                        <MediaFilesFields />
                    </div>
                </main>
            </section>
        </div>
    );
};

export default MediaFiles;
