import { h } from "virtual-dom";
import { createWidget } from "discourse/widgets/widget";
import { withPluginApi } from "discourse/lib/plugin-api";
import { iconNode } from "discourse-common/lib/icon-library";
import { getOwner } from "discourse-common/lib/get-owner";
import Category from "discourse/models/category";

export default createWidget("landing-widget", {
    tagName: "div.landing-widget",

    html() {
        let currentUser = null;

        withPluginApi("0.8", (api) => {
            currentUser = api.getCurrentUser();
        });

        let externalLinkIcon = iconNode('external-link-alt');
        let downloadIcon = iconNode('download');
        let questionIcon = iconNode('question');

        let localStorageState = localStorage.getItem('landing-widget-hidden');
        console.log(localStorageState, 4);
        if (localStorageState == undefined) localStorageState = false;
        else localStorageState = localStorageState == 'true';

        let widgetVisible = !localStorageState;


        if (currentUser) widgetVisible = false;

        const router = getOwner(this).lookup("router:main");
        const route = router.currentRoute;

        const isCategories = route.name.indexOf('categories') !== -1;

        // if (!isCategories) {
        //     widgetVisible = false;
        // } else {
        //     localStorage.setItem('landing-widget-hidden', widgetVisible);
        // }

        if (route.name.indexOf('discovery') !== -1) {
            return [h('div.lw-wrapper#tg-landing', { className: widgetVisible ? '' : 'hidden' }, [
                h('div.wrap', [

                    h('h2.lw-header', 'Welcome to The Evolution of Money'),
                    h('div.lw-description', [
                        h('p.strong', 'Tagion is an open, non-political monetary system governed as a common.'),
                        h('p', 'Tagion is a scalable monetary and transaction system that provides an algorithmically stable currency, close-to-zero transfer fees, a DEX (Decentralized Exchange) layer, and smart contract applications for banking.'),
                        h('p', 'It allows for a functioning capital market with positive interest rates, competitive and transparent transactions, and financial instruments to everyone everywhere. It is a foundation for economic freedom, privacy, and efficient markets across any borders.')
                    ]),
                    h('div.lw-button-list', [
                        // h('a.btn.btn-primary.btn-large.btn-icon', { href: "/categories" }, 'Discussion'),
                        h('a.btn.btn-default.btn-large.btn-icon-text', { href: "https://t.me/tagionChat", target: '_blank' }, [
                            externalLinkIcon,
                            'Telegram Group'
                        ]),
                        // h('a.btn.btn-default.btn-large.btn-icon', { href: "/categories" }, [
                        //     downloadIcon,
                        //     'Whitepaper'
                        // ]),
                        h('a.btn.btn-default.btn-large.btn-icon', { href: "/t/tagion-faq/81" }, [
                            questionIcon,
                            'FAQ'
                        ]),
                    ]),
                    h('div.lw-bullet-list', [
                        h('div.lw-bullet-item', [
                            h('div.lw-bullet-header', [
                                h('img', { src: 'https://static.wixstatic.com/media/2de191_8ee594d74d114bc2afbf006cb87a20ae~mv2.png/v1/fill/w_134,h_132,al_c,q_85,usm_0.66_1.00_0.01/Tagion%20www%20icons%20big%20scalable.webp' })
                            ]),
                            h('div.lw-bullet-content', [
                                h('h4.lw-bullet-headline', 'Scalable Core Technology'),
                                h('p.lw-bullet-description', 'A real, viable alternative to conventional payment systems.'),
                                h('p.lw-bullet-description', 'Tagion builds on a modular and scalable core, using next-generation DLT (Distributed Ledger Technology). The main modules comprise the distributed database (DART), WebAssembly VM, Tagion-Graph, and a gossip mechanism.'),
                            ]),

                        ]),
                        h('div.lw-bullet-item', [
                            h('div.lw-bullet-header', [
                                h('img', { src: 'https://static.wixstatic.com/media/2de191_a204d36d4f08471d80cc403658905455~mv2.png/v1/fill/w_134,h_132,al_c,q_85,usm_0.66_1.00_0.01/Tagion%20www%20icons%20big%20governance.webp' })
                            ]),
                            h('div.lw-bullet-content', [
                                h('h4.lw-bullet-headline', 'Inclusive Governance'),
                                h('p.lw-bullet-description', 'A secure and open governance with privacy and transparency.'),
                                h('p.lw-bullet-description', 'Tagion and its resources are governed as a Common. Everyone has an equal right to participate, and effort is rewarded. Governance is a mix of Proof-of-Community and Proof-of-Burn.'),
                            ]),

                        ]),
                        h('div.lw-bullet-item', [
                            h('div.lw-bullet-header', [
                                h('img', { src: 'https://static.wixstatic.com/media/2de191_2e50f0307d8347ee87c61087ac9fa1d7~mv2.png/v1/fill/w_134,h_132,al_c,q_85,usm_0.66_1.00_0.01/Tagion%20www%20icons%20big%20elastic.webp' })
                            ]),
                            h('div.lw-bullet-content', [
                                h('h4.lw-bullet-headline', 'Independent Elastic Money Supply'),
                                h('p.lw-bullet-description', 'Providing trusted money used for the stable pricing of goods and services.'),
                                h('p.lw-bullet-description', 'To gain trust in the system, stabilized pricing is needed. Tagion is independent, which means that it is not pegged to any other currency or asset pools and does not have external parties controlling the supply. The supply should match the demand to support an economy efficiently. To that end, Tagion features an elastic money supply controlled by algorithms taking only internal inputs.'),
                            ]),

                        ]),
                        h('div.lw-bullet-item', [
                            h('div.lw-bullet-header', [
                                h('img', { src: 'https://static.wixstatic.com/media/2de191_701e38ca169a4a048f1ef24011b37bf6~mv2.png/v1/fill/w_134,h_132,al_c,q_85,usm_0.66_1.00_0.01/Tagion%20www%20icons%20big%20exchange%20copy.webp' })
                            ]),
                            h('div.lw-bullet-content', [
                                h('h4.lw-bullet-headline', 'Decentralized Exchange'),
                                h('p.lw-bullet-description', 'Making it simple, inclusive and seamless to exchange your digital tokens.'),
                                h('p.lw-bullet-description', 'Pay with anything anywhere. Tagion’s DEX is an open protocol that enables a trustless exchange of any digital currency that supports HTLC (Hash Time Locked Contract), meaning that e.g. Bitcoin and Ethereum can be exchanged directly with Tagions and vice versa.'),
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

                            event.target.innerHTML = widgetVisible ? 'Hide Summary' : 'Show Summary';
                        }
                    }, widgetVisible ? 'Hide Summary' : 'Show Summary')
                ])
            ])
            ]
        }
    }
})