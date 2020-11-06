import React, { useEffect, Suspense, lazy, memo } from 'react';
import { useDispatch } from 'react-redux';
import { IsOpenSideMenu } from '../../../actions/topNavActions/topNavActions';
import Loader from '../../../__utils__/Spinner';

import './SideNav.scss';

const SideNavMainPart = lazy(() => import('./SideNavMainPart/SideNavMainPart/SideNavMainPart'));
const SideNavHistoryPart = lazy(() => import('./SideNavHistoryPart/SideNavHistroryPart/SideNavHistoryPart'));
const SideNavSettingsPart = lazy(() => import('./SideNavSettingsPart/SideNavSettingsPart/SideNavSettingsPart'));
const SideNavConfiguratorPart = lazy(() => import('./SideNavConfiguratorPart/SideNavConfiguratorPart'));

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
        <Suspense fallback={Loader}>
            <nav className="side">
                <ul className="side__top">
                    <SideNavMainPart />
                    <SideNavHistoryPart />
                    <SideNavSettingsPart />
                    <SideNavConfiguratorPart />
                </ul>
            </nav>
        </Suspense>
    );
};

export default memo(SideNav);
