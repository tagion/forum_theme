import { h } from "virtual-dom";
import { createWidget } from "discourse/widgets/widget";
import { iconNode } from "discourse-common/lib/icon-library";
import { getOwner } from "discourse-common/lib/get-owner";
import Category from "discourse/models/category";

export default createWidget("custom-nav-widget", {
    tagName: "div.custom-nav-widget",

    html() {

        return [h('div.lw-wrapper', "Hello")]

    }
})