window.googletag = window.googletag || {
    cmd: []
};
googletag.cmd.push(function() {
    var REFRESH_KEY = 'refresh';
    var REFRESH_VALUE = 'true';
    var SECONDS_TO_WAIT_AFTER_VIEWABILITY = 30;
    var headerAll = [
        [970, 250],
        [970, 90],
        [728, 90],
        [468, 60],
        [320, 50]
    ];
    var headerDesktop = [
        [970, 250],
        [970, 90],
        [728, 90]
    ];
    var headerTablet = [
        [468, 60],
        [320, 50]
    ];
    var headerMobile = [
        [320, 50]
    ];
    var headerSizeMap = googletag.sizeMapping().addSize([1024, 768], headerDesktop).addSize([640, 480], headerTablet).addSize([0, 0], headerMobile).build();
    var footerAll = [
        [970, 90],
        [728, 90],
        [468, 60],
        [320, 50]
    ];
    var footerDesktop = [
        [970, 90],
        [728, 90]
    ];
    var footerTablet = [
        [468, 60],
        [320, 50]
    ];
    var footerMobile = [
        [320, 50]
    ];
    var footerSizeMap = googletag.sizeMapping().addSize([1024, 768], footerDesktop).addSize([640, 480], footerTablet).addSize([0, 0], footerMobile).build();
    var incontentAll = [
        [970, 250],
        [970, 66],
        [750, 300],
        [750, 200],
        [750, 100],
        [336, 280],
        [300, 250],
        [300, 100]
    ];
    var incontentDesktop = [
        [970, 250],
        [970, 66],
        [750, 300],
        [750, 200],
        [750, 100]
    ];
    var incontentTablet = [
        [336, 280],
        [300, 250],
        [300, 100]
    ];
    var incontentMobile = [
        [300, 250],
        [300, 100]
    ];
    var incontentSizeMap = googletag.sizeMapping().addSize([1024, 768], incontentDesktop).addSize([640, 480], incontentTablet).addSize([0, 0], incontentMobile).build();
    var infeedAll = [
        [300, 600],
        [300, 250],
        [240, 400]
    ];
    var infeedDesktop = [
        [300, 600],
        [300, 250]
    ];
    var infeedTablet = [
        [300, 250],
        [240, 400]
    ];
    var infeedMobile = [
        [300, 250],
        [240, 400]
    ];
    var infeedSizeMap = googletag.sizeMapping().addSize([1024, 768], infeedDesktop).addSize([640, 480], infeedTablet).addSize([0, 0], infeedMobile).build();
    googletag.pubads().setForceSafeFrame(true);
    googletag.pubads().setCentering(true);
    var header = googletag.defineSlot('/22487526518/wellnessmama.com/header', headerAll, 'div-mai-ad-header').setTargeting(REFRESH_KEY, REFRESH_VALUE).addService(googletag.pubads());
    var incontent1 = googletag.defineSlot('/22487526518/wellnessmama.com/incontent', incontentAll, 'div-mai-post-incontent-1').setTargeting(REFRESH_KEY, REFRESH_VALUE).addService(googletag.pubads());
    var incontent2 = googletag.defineSlot('/22487526518/wellnessmama.com/infeed', infeedAll, 'div-mai-post-incontent-2').setTargeting(REFRESH_KEY, REFRESH_VALUE).addService(googletag.pubads());
    var incontent3 = googletag.defineSlot('/22487526518/wellnessmama.com/incontent', incontentAll, 'div-mai-post-incontent-3').setTargeting(REFRESH_KEY, REFRESH_VALUE).addService(googletag.pubads());
    var footer = googletag.defineSlot('/22487526518/wellnessmama.com/footer', footerAll, 'div-mai-ad-footer').setTargeting(REFRESH_KEY, REFRESH_VALUE).addService(googletag.pubads());
    header.defineSizeMapping(headerSizeMap);
    incontent1.defineSizeMapping(incontentSizeMap);
    incontent2.defineSizeMapping(infeedSizeMap);
    incontent3.defineSizeMapping(incontentSizeMap);
    footer.defineSizeMapping(footerSizeMap);
    googletag.pubads().addEventListener('impressionViewable', function(event) {
        var slot = event.slot;
        if (slot.getTargeting(REFRESH_KEY).indexOf(REFRESH_VALUE) > -1) {
            setTimeout(function() {
                googletag.pubads().refresh([slot]);
            }, SECONDS_TO_WAIT_AFTER_VIEWABILITY * 1000);
        }
    });
    googletag.pubads().enableSingleRequest();
    googletag.enableServices();
});