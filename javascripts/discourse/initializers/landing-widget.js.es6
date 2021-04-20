

import { withPluginApi } from "discourse/lib/plugin-api";

export default {
    name: "landing-widget",

    initialize() {
        withPluginApi("0.8", (api) => {
            api.decorateWidget('landing-widget:after', helper => {
                helper.widget.appEvents.on('page:changed', () => {
                    helper.widget.scheduleRerender();
                });
            });
        });
    },
};