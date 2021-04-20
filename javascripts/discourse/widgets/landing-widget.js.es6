import { h } from "virtual-dom";
import { createWidget } from "discourse/widgets/widget";
import { withPluginApi } from "discourse/lib/plugin-api";
import { getOwner } from "discourse-common/lib/get-owner";

export default createWidget("landing-widget", {
    tagName: "div.landing-widget",

    html() {
        let currentUser = null;

        withPluginApi("0.8", (api) => {
            currentUser = api.getCurrentUser();
        });

        let localStorageState = localStorage.getItem('landing-widget-hidden');
        if (localStorageState == undefined) localStorageState = false;
        else localStorageState = localStorageState == 'true';

        let widgetVisible = !localStorageState;


        if (currentUser) widgetVisible = false;

        const router = getOwner(this).lookup("router:main");
        const route = router.currentRoute;

        if (route && route.name.indexOf('discovery.categories') !== -1) {
            return [h('div.lw-wrapper#tg-landing', { className: widgetVisible ? '' : 'hidden' }, [
                h('div.wrap', [

                    h('h2.lw-header', [
                        h('span', 'Welcome the '),
                        h('span.strong', 'Evolution '),
                        h('span', 'of Money...'),
                        h('br'),
                        h('span.accent', 'Tagion'),
                    ]),
                    h('div.lw-description', [
                        h('p', [
                            h('span', 'Open, '),
                            h('span.accent', 'non-political'),
                            h('span', ' monetary system '),
                            h('span.accent', 'governed as a common'),
                            h('span', '. It is a foundation for economic freedom, privacy, and efficient markets across any borders.')
                        ]),
                    ]),
                    h('div.lw-bullet-list', [
                        h('div.lw-bullet-item', [
                            h('div.lw-bullet-header', [
                                h('img', { src: 'https://static.wixstatic.com/media/2de191_8ee594d74d114bc2afbf006cb87a20ae~mv2.png/v1/fill/w_134,h_132,al_c,q_85,usm_0.66_1.00_0.01/Tagion%20www%20icons%20big%20scalable.webp' })
                            ]),
                            h('div.lw-bullet-content', [
                                h('h4.lw-bullet-headline', 'Scalable Core Technology'),
                                // h('p.lw-bullet-description', 'A real alternative to conventional payment systems.'),
                                h('p.lw-bullet-description', 'The main modules comprise the distributed database (DART), WebAssembly VM, Tagion-Graph, and a gossip mechanism.'),
                            ]),

                        ]),
                        h('div.lw-bullet-item', [
                            h('div.lw-bullet-header', [
                                h('img', { src: 'https://static.wixstatic.com/media/2de191_a204d36d4f08471d80cc403658905455~mv2.png/v1/fill/w_134,h_132,al_c,q_85,usm_0.66_1.00_0.01/Tagion%20www%20icons%20big%20governance.webp' })
                            ]),
                            h('div.lw-bullet-content', [
                                h('h4.lw-bullet-headline', 'Inclusive Governance'),
                                // h('p.lw-bullet-description', 'A secure and open governance with privacy and transparency.'),
                                h('p.lw-bullet-description', 'Everyone has an equal right to participate, and effort is rewarded. Governance is a mix of Proof-of-Community and Proof-of-Burn.'),
                            ]),

                        ]),
                        h('div.lw-bullet-item', [
                            h('div.lw-bullet-header', [
                                h('img', { src: 'https://static.wixstatic.com/media/2de191_2e50f0307d8347ee87c61087ac9fa1d7~mv2.png/v1/fill/w_134,h_132,al_c,q_85,usm_0.66_1.00_0.01/Tagion%20www%20icons%20big%20elastic.webp' })
                            ]),
                            h('div.lw-bullet-content', [
                                h('h4.lw-bullet-headline', 'Independent Elastic Money Supply'),
                                // h('p.lw-bullet-description', 'Stable pricing of goods and services.'),
                                h('p.lw-bullet-description', 'Tagion is independent, which means that it is not pegged to any other currency or asset pool. Tagion features an elastic money supply controlled by algorithms taking only internal inputs.'),
                            ]),

                        ]),
                        h('div.lw-bullet-item', [
                            h('div.lw-bullet-header', [
                                h('img', { src: 'https://static.wixstatic.com/media/2de191_701e38ca169a4a048f1ef24011b37bf6~mv2.png/v1/fill/w_134,h_132,al_c,q_85,usm_0.66_1.00_0.01/Tagion%20www%20icons%20big%20exchange%20copy.webp' })
                            ]),
                            h('div.lw-bullet-content', [
                                h('h4.lw-bullet-headline', 'Decentralized Exchange'),
                                // h('p.lw-bullet-description', 'Seamless exchange of digital tokens.'),
                                h('p.lw-bullet-description', 'Tagion’s DEX is an open protocol that enables a trustless exchange with price-matching of any digital currency that supports Hash Time Locked Contract.'),
                            ]),

                        ]),
                    ]),
                ])
            ]),
            h('div.wrap', [
                h('div.lw-toggle', [
                    h('a.btn#tg-landing-toggle', {
                        onclick: function (event) {
                            widgetVisible = !widgetVisible;

                            if (widgetVisible) {
                                localStorage.setItem('landing-widget-hidden', false);
                                $('#tg-landing').removeClass('hidden');
                            } else {
                                localStorage.setItem('landing-widget-hidden', true);
                                $('#tg-landing').addClass('hidden');
                            }

                            event.target.innerHTML = widgetVisible ? 'Hide Intro ☝' : 'Show Intro';
                        }
                    }, widgetVisible ? 'Hide Intro ☝' : 'Show Intro')
                ])
            ])
            ]
        }
    }
})