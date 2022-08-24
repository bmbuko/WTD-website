//<Global site tag (gtag.js) - Google Analytics
window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }
gtag('js', new Date());

gtag('config', 'UA-219154743-1');

// Facebook Pixel Code 
!function (f, b, e, v, n, t, s) {
    if (f.fbq) return; n = f.fbq = function () { n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments) };
    if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = '2.0'; n.queue = []; t = b.createElement(e); t.async = !0; t.src = v; s = b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t, s)
}(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js'); fbq('init', '216212936198176');
fbq('track', 'PageView');
// End Facebook Pixel Code 

// google manager  tag

// var obj, pageName;

// var pageTitle = document.title

// obj = {"page":pageTitle};

// pageName = obj.page;

gtag('event', 'conversion',
    {
        'allow_custom_scripts': true, 'u1': '[Login Status]', 'u3': '[Page Name]', 'send_to':
            'DC-9990641/globa0/stand0+standard'
    });

// window.location.href for the current Url/address of the thank-you page.

var page_url = window.location.href


// Event snippet for Form_Complete conversion page 
if (page_url === 'https://academy.wt-data.com/busiswa/thank-you.html#') {
    gtag('event', 'conversion', {
        'send_to': 'AW-666399903/4AZgCJHcy8kBENym370C'
    });
};

