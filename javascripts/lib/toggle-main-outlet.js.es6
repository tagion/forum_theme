export default function toggleMainOutlet() {
    let path = location.pathname;
    let isHomepage = path === "/";
    let mainOutlet = $('#main-outlet');
    if (isHomepage) {
        mainOutlet.addClass('hidden');
    } else if (mainOutlet.hasClass('hidden')) {
        mainOutlet.removeClass('hidden');
    }
}