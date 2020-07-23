/**
 * ********** Глобальные переменные для асинхронных запросов авторизации **********
 */
export const GET_ERRORS = 'GET_ERRORS';
export const USER_LOADING = 'USER_LOADING';
export const SET_CURRENT_USER = 'SET_CURRENT_USER';
export const RESET_CURRENT_USER = 'RESET_CURRENT_USER';
export const NEW_PASSWORD = 'NEW_PASSWORD';

/**
 * ********** Глобальные переменные для асинхронных запросов на сервер **********
 */
export const DATA_LOADING_REQUEST = 'DATA_LOADING_REQUEST';
export const DATA_LOADING_SUCCESS = 'DATA_LOADING_SUCCESS';
export const DATA_LOADING_FAILURE = 'DATA_LOADING_FAILURE';

/**
 * *********** Интерфейсы стейта Авторизации/Регистрации **********
 */

export interface userDataLogin {
    email: string;
    password: string;
}

export interface userResetPassword {
    type: typeof RESET_CURRENT_USER;
    payload: any;
}

export interface userNewPassword {
    type: typeof NEW_PASSWORD;
    payload: any;
}

export interface userDataRegister {
    name: string;
    email: string;
    companyName: string;
    companyInn: string;
    contactPerson: string;
    companyPhone: string | number;
}

export interface AuthState {
    isAuthenticated: boolean;
    user: any;
    loading: boolean;
}

interface registerUser {
    type: typeof GET_ERRORS;
    payload: any;
}

interface loginUser {
    type: typeof GET_ERRORS;
    payload: any;
}

interface setCurrentUser {
    type: typeof SET_CURRENT_USER;
    payload: any;
}

interface setUserLoading {
    type: typeof USER_LOADING;
}

interface logoutUser {
    type: typeof GET_ERRORS;
    history: any;
}

export type AuthActions = registerUser | loginUser | setCurrentUser | setUserLoading | logoutUser | userResetPassword | userNewPassword;
/**
 * *********** Интерфейсы стейта Компонента Account **********
 */
export interface AccountState {
    isFetching: boolean;
    errorMessage: string;
    data: any;
}

interface AccountRequest {
    type: typeof DATA_LOADING_REQUEST;
}

interface AccountSuccess {
    type: typeof DATA_LOADING_SUCCESS;
    payload: AccountState[];
}

interface AccountFailure {
    type: typeof DATA_LOADING_FAILURE;
    payload: any;
}

export type AccountActions = AccountRequest | AccountSuccess | AccountFailure;

/**
 * *********** Интерфейсы стейта Компонента Control **********
 */
export interface ControlState {
    isFetching: boolean;
    errorMessage: string;
    data: any;
}

interface ControlRequest {
    type: typeof DATA_LOADING_REQUEST;
}

interface ControlSuccess {
    type: typeof DATA_LOADING_SUCCESS;
    payload: ControlState[];
}

interface ControlFailure {
    type: typeof DATA_LOADING_FAILURE;
    payload: any;
}

export type ControlActions = ControlRequest | ControlSuccess | ControlFailure;

/**
 * *********** Интерфейсы стейта Компонента Main **********
 */
export interface MainState {
    isFetching: boolean;
    errorMessage: string;
    data: any;
}

interface MainRequest {
    type: typeof DATA_LOADING_REQUEST;
}

interface MainSuccess {
    type: typeof DATA_LOADING_SUCCESS;
    payload: MainState[];
}

interface MainFailure {
    type: typeof DATA_LOADING_FAILURE;
    payload: any;
}

export type MainActions = MainRequest | MainSuccess | MainFailure;

/**
 * *********** Интерфейсы стейта Компонента News **********
 */
export interface NewsState {
    isFetching: boolean;
    errorMessage: string;
    data: any;
}

interface NewsRequest {
    type: typeof DATA_LOADING_REQUEST;
}

interface NewsSuccess {
    type: typeof DATA_LOADING_SUCCESS;
    payload: NewsState[];
}

interface NewsFailure {
    type: typeof DATA_LOADING_FAILURE;
    payload: any;
}

export type NewsActions = NewsRequest | NewsSuccess | NewsFailure;

/**
 * *********** Интерфейсы стейта Компонента Payment **********
 */
export interface PaymentState {
    isFetching: boolean;
    errorMessage: string;
    data: any;
}

interface PaymentRequest {
    type: typeof DATA_LOADING_REQUEST;
}

interface PaymentSuccess {
    type: typeof DATA_LOADING_SUCCESS;
    payload: PaymentState[];
}

interface PaymentFailure {
    type: typeof DATA_LOADING_FAILURE;
    payload: any;
}

export type PaymentActions = PaymentRequest | PaymentSuccess | PaymentFailure;

/**
 * *********** Интерфейсы стейта Компонента PriceList **********
 */
export interface PriceListState {
    isFetching: boolean;
    errorMessage: string;
    data: any;
}

interface PriceListRequest {
    type: typeof DATA_LOADING_REQUEST;
}

interface PriceListSuccess {
    type: typeof DATA_LOADING_SUCCESS;
    payload: PriceListState[];
}

interface PriceListFailure {
    type: typeof DATA_LOADING_FAILURE;
    payload: any;
}

export type PriceListActions = PriceListRequest | PriceListSuccess | PriceListFailure;

/**
 * *********** Интерфейсы стейта Компонента SalePartners **********
 */
export interface SalePartnersState {
    isFetching: boolean;
    errorMessage: string;
    data: any;
}

interface SalePartnersRequest {
    type: typeof DATA_LOADING_REQUEST;
}

interface SalePartnersSuccess {
    type: typeof DATA_LOADING_SUCCESS;
    payload: SalePartnersState[];
}

interface SalePartnersFailure {
    type: typeof DATA_LOADING_FAILURE;
    payload: any;
}

export type SalePartnersActions = SalePartnersRequest | SalePartnersSuccess | SalePartnersFailure;

/**
 * *********** Интерфейсы стейта Компонента Shipment **********
 */
export interface ShipmentState {
    isFetching: boolean;
    errorMessage: string;
    data: any;
}

interface ShipmentRequest {
    type: typeof DATA_LOADING_REQUEST;
}

interface ShipmentSuccess {
    type: typeof DATA_LOADING_SUCCESS;
    payload: ShipmentState[];
}

interface ShipmentFailure {
    type: typeof DATA_LOADING_FAILURE;
    payload: any;
}

export type ShipmentActions = ShipmentRequest | ShipmentSuccess | ShipmentFailure;

/**
 * *********** Интерфейсы стейта Компонента SideNav **********
 */
export interface SideNavState {
    isFetching: boolean;
    errorMessage: string;
    data: any;
}

interface SideNavRequest {
    type: typeof DATA_LOADING_REQUEST;
}

interface SideNavSuccess {
    type: typeof DATA_LOADING_SUCCESS;
    payload: SideNavState[];
}

interface SideNavFailure {
    type: typeof DATA_LOADING_FAILURE;
    payload: any;
}

export type SideNavActions = SideNavRequest | SideNavSuccess | SideNavFailure;

/**
 * *********** Интерфейсы стейта Компонента TopNav **********
 */
export interface TopNavState {
    isFetching: boolean;
    errorMessage: string;
    data: any;
}

interface TopNavRequest {
    type: typeof DATA_LOADING_REQUEST;
}

interface TopNavSuccess {
    type: typeof DATA_LOADING_SUCCESS;
    payload: TopNavState[];
}

interface TopNavFailure {
    type: typeof DATA_LOADING_FAILURE;
    payload: any;
}

export type TopNavActions = TopNavRequest | TopNavSuccess | TopNavFailure;

/**
 * *********** Интерфейсы стейта Компонента WebApp **********
 */
export interface WebAppState {
    isFetching: boolean;
    errorMessage: string;
    data: any;
}

interface WebAppRequest {
    type: typeof DATA_LOADING_REQUEST;
}

interface WebAppSuccess {
    type: typeof DATA_LOADING_SUCCESS;
    payload: WebAppState[];
}

interface WebAppFailure {
    type: typeof DATA_LOADING_FAILURE;
    payload: any;
}

export type WebAppActions = WebAppRequest | WebAppSuccess | WebAppFailure;
