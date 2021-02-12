

import { withPluginApi } from "discourse/lib/plugin-api";
import toggleMainOutlet from '../../lib/toggle-main-outlet';

export default {
    name: "landing-widget",

    initialize() {
        withPluginApi("0.8", (api) => {
            api.decorateWidget('landing-widget:after', helper => {
                helper.widget.appEvents.on('page:changed', () => {
                    toggleMainOutlet();
                    helper.widget.scheduleRerender();
                });
            });
        });
    },
};