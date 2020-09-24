/**
 * ********** Импорт основных библиотек из NPM **********
 * */
import React, { useState, SyntheticEvent, ChangeEvent, useLayoutEffect } from 'react';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';

/**
 * ********** Импорт экшенов **********
 * */
// import { addMessage, ChatRequestData } from '../../../../actions/chatActions/chatActions';

/**
 * ********** Импорт комопнентов **********
 */
// import Message from './Message/Message';

/**
 * ********** Импорт типов **********
 * */
import { PersonalCabinet } from '../../../../store/store';

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
    return <div className="files">FILES</div>;
};

export default MediaFiles;
