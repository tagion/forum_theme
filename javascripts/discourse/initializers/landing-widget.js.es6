

import { withPluginApi } from "discourse/lib/plugin-api";
import toggleMainOutlet from '../../lib/toggle-main-outlet';

export default {
    name: "landing-widget",

    initialize() {
        withPluginApi("0.8", (api) => {
            // api.addNavigationBarItem({
            //     name: 'categories-new',
            //     displayName: 'Home',
            //     title: 'Home',
            //     before: 'latest',
            //     customHref: (category, args, router) => {
            //         return "/categories"
            //     },
            //     forceActive: (category, args, router) => {
            //         return router.currentURL === "/categories" || router.currentURL === "/"
            //     }
            // });

            // api.addNavigationBarItem({
            //     name: 'home',
            //     displayName: 'Home',
            //     title: 'Home',
            //     before: 'categories-new',
            //     customHref: (category, args, router) => {
            //         return "/t/tagion-home/282";
            //     },
            //     forceActive: (category, args, router) => {
            //         return router.currentURL === "/t/tagion-home/282"
            //     }
            // });

            api.decorateWidget('landing-widget:after', helper => {
                helper.widget.appEvents.on('page:changed', () => {
                    helper.widget.scheduleRerender();
                    toggleMainOutlet();
                });
            });
        });
    },
};