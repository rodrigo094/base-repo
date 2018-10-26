import CacheSelectors from './__cache-selectors.js';
import SidebarMenu from './../../../../common/js/utils/sidebar-menu.js';


export default {
    init() {
        this.setMenuActions();
    },

    setMenuActions() {
        const El = CacheSelectors.institutional.menu;
        SidebarMenu.activeMenu(El);

        if ( isMobile.any ) {
            SidebarMenu.mobileArccordion(El, 'institutional');
        }
    },    
};
