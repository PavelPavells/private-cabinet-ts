/**
 * ********** Импорт глобальных переменных **********
 */
import { TopNavActions, IS_OPEN_SIDE_MENU } from '../../constants/topNavTypes/topNavTypes';

/**
 * ********** Экшен для инициализации запроса **********
 */
// eslint-disable-next-line import/prefer-default-export
export const IsOpenSideMenu = (isOpenSideMenu: boolean): TopNavActions => ({
    type: IS_OPEN_SIDE_MENU,
    payload: isOpenSideMenu
});
