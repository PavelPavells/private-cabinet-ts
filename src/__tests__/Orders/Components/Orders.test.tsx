import React from 'react';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';
import store from '../../../store/store';
import Orders from '../../../components/dashboard/MainContent/Orders/Orders';

// const setUp = (props = {}) => {
//     const myComponent = shallow(<Orders {...props} />);
//     return myComponent;
// };

// const findByTestAttr = (component, attr) => {
//     const wrapper = component.find();
//     return wrapper;
// };

describe('TESTING <Orders /> Component', () => {
    // let component: any;
    // beforeEach(() => {
    //     // eslint-disable-next-line @typescript-eslint/no-unused-vars
    //     component = setUp();
    // });
    const props: any = {
        isFetching: false,
        errorMessage: '',
        ordersHeaders: [],
        ordersTable: []
    };

    // @ts-ignore
    const myComponent: any = shallow(
        <Provider store={store}>
            <Orders {...props} />
        </Provider>
    );

    it('TESTING First Rendering Orders Component', () => {
        expect(myComponent.find('main')).toHaveLength(0);
        expect(myComponent.find('Loader')).toHaveLength(0);
    });

    it('TESTING Rendering Orders Component if not data', () => {
        expect(myComponent.find('Loader')).toHaveLength(0);
    });

    describe('TESTING <Orders /> component after success rendering', () => {
        const nextProps: any = {
            ...props,
            ordersHeaders: {
                ...props.ordersHeaders
            },
            ordersTable: {
                ...props.ordersTable
            },
            isFetching: true
        };

        const OrdersContainer = shallow(
            <Provider store={store}>
                <Orders {...nextProps} />
            </Provider>
        );

        it('TESTING render preloader before get data', () => {
            expect(OrdersContainer.find('Loader')).toHaveLength(0);
            console.log(OrdersContainer.children);
        });

        // it('render only one <p>', () => {
        //     expect(OrdersContainer.find('p')).toHaveLength(1);
        // });

        // it('not render <NewsList />', () => {
        //     expect(OrdersContainer.find('NewsList')).toHaveLength(0);
        // });
    });
});
