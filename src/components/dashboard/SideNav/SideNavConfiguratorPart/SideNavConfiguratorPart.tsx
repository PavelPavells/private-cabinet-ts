import React from 'react';
import { NavLink } from 'react-router-dom';

const SideNavConfiguratorPart = () => {
    return (
        <section className="nav-link">
            <NavLink activeClassName="active-page" to="/configurator" className="font">
                <div className="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22">
                        <path
                            className="cls-1"
                            d="M5,12.36H17a4.94,4.94,0,0,1,5,4.82A4.94,4.94,0,0,1,17,22H5a4.94,4.94,0,0,1-5-4.82A4.94,4.94,0,0,1,5,12.36ZM17,20.68a3.51,3.51,0,1,0,0-7H5a3.51,3.51,0,1,0,0,7Z"
                        />
                        <path
                            className="cls-1"
                            d="M17.18,15A2.16,2.16,0,1,1,15,17.18,2.16,2.16,0,0,1,17.18,15Zm0,3a.86.86,0,1,0-.86-.86A.86.86,0,0,0,17.18,18Z"
                        />
                        <path
                            className="cls-1"
                            d="M17,9.64H5A4.94,4.94,0,0,1,0,4.82,4.94,4.94,0,0,1,5,0H17a4.94,4.94,0,0,1,5,4.82A4.94,4.94,0,0,1,17,9.64ZM5,1.32A3.59,3.59,0,0,0,1.38,4.82,3.59,3.59,0,0,0,5,8.33H17a3.59,3.59,0,0,0,3.67-3.51A3.59,3.59,0,0,0,17,1.32Z"
                        />
                        <path
                            className="cls-1"
                            d="M4.82,7A2.16,2.16,0,1,1,7,4.82,2.16,2.16,0,0,1,4.82,7Zm0-3a.86.86,0,1,0,.86.86A.86.86,0,0,0,4.82,4Z"
                        />
                    </svg>
                </div>
                <div className="list-name">Конфигуратор</div>
                <div className="font-block-hover">
                    <NavLink activeClassName="active-page" to="/configurator" className="hover__block">
                        <div className="hover__block--icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22">
                                <path
                                    className="cls-1"
                                    d="M5,12.36H17a4.94,4.94,0,0,1,5,4.82A4.94,4.94,0,0,1,17,22H5a4.94,4.94,0,0,1-5-4.82A4.94,4.94,0,0,1,5,12.36ZM17,20.68a3.51,3.51,0,1,0,0-7H5a3.51,3.51,0,1,0,0,7Z"
                                />
                                <path
                                    className="cls-1"
                                    d="M17.18,15A2.16,2.16,0,1,1,15,17.18,2.16,2.16,0,0,1,17.18,15Zm0,3a.86.86,0,1,0-.86-.86A.86.86,0,0,0,17.18,18Z"
                                />
                                <path
                                    className="cls-1"
                                    d="M17,9.64H5A4.94,4.94,0,0,1,0,4.82,4.94,4.94,0,0,1,5,0H17a4.94,4.94,0,0,1,5,4.82A4.94,4.94,0,0,1,17,9.64ZM5,1.32A3.59,3.59,0,0,0,1.38,4.82,3.59,3.59,0,0,0,5,8.33H17a3.59,3.59,0,0,0,3.67-3.51A3.59,3.59,0,0,0,17,1.32Z"
                                />
                                <path
                                    className="cls-1"
                                    d="M4.82,7A2.16,2.16,0,1,1,7,4.82,2.16,2.16,0,0,1,4.82,7Zm0-3a.86.86,0,1,0,.86.86A.86.86,0,0,0,4.82,4Z"
                                />
                            </svg>
                        </div>
                        <div className="hover__block--text">Конфигуратор</div>
                    </NavLink>
                </div>
            </NavLink>
        </section>
    );
};

export default SideNavConfiguratorPart;
