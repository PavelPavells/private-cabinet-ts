/**
 * Импорт зависимостей
 */
import React, { Component, JSXElementConstructor, ClassAttributes } from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { PersonalCabinet } from '../../store/store';

/**
 * Интерфейс компонента SecuredRoute
 */
interface SecuredRouteProps {
  auth: {
    isAuthenticated: boolean,
    user: string
  },
  component: React.ComponentType<any>
}

const SecuredRoute: React.SFC<SecuredRouteProps> = ({ component: Component, auth, ...rest }: SecuredRouteProps) => (
  <Route
    {...rest}
    render={props =>
      auth.isAuthenticated === true ? (
        <Component {...props} />
      ) : (
        <Redirect to="/" />
      )
    }
  />
);

const mapStateToProps = (state: PersonalCabinet) => ({
  auth: state.auth
});

export default connect(mapStateToProps)(SecuredRoute);
