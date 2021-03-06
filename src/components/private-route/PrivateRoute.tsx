import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { shallowEqual, useSelector } from 'react-redux';
import { PersonalCabinet } from '../../store/store';

interface SecuredRouteProps {
    auth: {
        isAuthenticated: boolean;
        user: Object;
    };
    component: React.ComponentType<any>;
}

const SecuredRoute: React.SFC<SecuredRouteProps> = ({ component: Component, ...rest }: SecuredRouteProps) => {
    const { isAuthenticated } = useSelector((state: PersonalCabinet) => state.auth, shallowEqual);
    return <Route {...rest} render={(props: Object) => (isAuthenticated === true ? <Component {...props} /> : <Redirect to="/" />)} />;
};

export default SecuredRoute;
