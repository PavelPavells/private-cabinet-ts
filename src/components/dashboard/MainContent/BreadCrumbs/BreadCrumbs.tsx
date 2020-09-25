import React from 'react';
import { Link, Route } from 'react-router-dom';
import './BreadCrumbs.scss';

const BreadCrumbs = ({ match }: any) => (
    <span>
        <Link to={match.url || ''} className={match.isExact ? 'breadcrumb active' : 'breadcrumb'}>
            {match.url.substr(match.url.lastIndexOf('/') + 1, match.url.length)}
        </Link>
        <Route path={`${match.url}/:path`} component={BreadCrumbs} />
    </span>
);

export default BreadCrumbs;
