window.TastyPins = window.TastyPins || {};
window.TastyPins.savepin = {
    init() {
        const pinImages = document.querySelectorAll('img[data-pin-url]');
        if (pinImages.length <= 0) {
            return;
        }
        for (const pinImage of pinImages) {
            pinImage.dataset.pinUrl = this._generate_pin_image_url(pinImage);
        }
    },
    _generate_pin_image_url(image) {
        let url = new URL(image.dataset.pinUrl);
        let title = image.dataset.pinTitle;
        if (title) {
            url.searchParams.set("pin_title", btoa(title));
        }
        let description = image.dataset.pinDescription;
        if (description) {
            url.searchParams.set("pin_description", btoa(description));
        }
        url.search = url.searchParams.toString();
        return url.toString();
    }
};
(function(callback) {
    if (document.readyState !== "loading") {
        callback();
    } else {
        document.addEventListener("DOMContentLoaded", callback);
    }
})(() => {
    window.TastyPins.savepin.init();
});