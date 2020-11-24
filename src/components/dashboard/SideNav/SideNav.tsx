import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { IsOpenSideMenu } from '../../../actions/topNavActions/topNavActions';
import SideNavMainPart from './SideNavMainPart/SideNavMainPart/SideNavMainPart';
import SideNavHistoryPart from './SideNavHistoryPart/SideNavHistroryPart/SideNavHistoryPart';
import SideNavSettingsPart from './SideNavSettingsPart/SideNavSettingsPart/SideNavSettingsPart';
import SideNavCatalogPart from './SideNavCatalogPart/SideNavCatalogPart';
import SideNavConfiguratorPart from './SideNavConfiguratorPart/SideNavConfiguratorPart';

import './SideNav.scss';

const SideNav = () => {
    const dispatch = useDispatch();
    // const addShadowToActiveSubMenu = () => {
    //     const elemenForAddingShadow: HTMLElement | null = document.getElementsByClassName('active-page')[0].parentElement!.parentElement;
    //     elemenForAddingShadow!.classList.add('nav--active');
    // };

    // const removeShadowToActiveSubMenu = () => {
    //     const elementForRemoveShadow = document.getElementsByClassName('nav--active')[0];
    //     elementForRemoveShadow.classList.remove('nav--active');
    // };

    // const { isOpenMenu } = useSelector((state: PersonalCabinet) => state.topnav, shallowEqual);

    useEffect(() => {
        const isOpenSide = localStorage.getItem('isOpenSide');
        const isOpen = isOpenSide === 'true';
        dispatch(IsOpenSideMenu(isOpen));
    });

    return (
        <nav className="side">
            <ul className="side__top">
                <>
                    <SideNavMainPart />
                    <SideNavCatalogPart />
                    <SideNavHistoryPart />
                    <SideNavSettingsPart />
                    <SideNavConfiguratorPart />
                </>
            </ul>
        </nav>
    );
};

export default SideNav;
