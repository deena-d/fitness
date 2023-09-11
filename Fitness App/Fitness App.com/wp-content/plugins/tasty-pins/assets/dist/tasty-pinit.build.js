(() => {
    "use strict";
    var t = null,
        e = null,
        n = null,
        o = !1,
        i = function() {
            return window.tastyPinitSettings
        },
        a = function() {
            null !== e && (e.parentNode.removeChild(e), e = null), null !== n && (n.parentNode.removeChild(n), n = null)
        },
        r = function(t) {
            return void 0 === t.dataset.pinNopin && null === t.getAttribute("nopin") && -1 === t.src.indexOf(".svg")
        },
        d = function(d) {
            if (!o && r(d)) {
                a(), t = d;
                var s, u = {
                    top: (s = d).getBoundingClientRect().top + window.scrollY,
                    left: s.getBoundingClientRect().left + window.scrollX
                };
                if ("yes" === i().image_overlay_enabled) {
                    (n = document.createElement("div")).setAttribute("class", "tasty-pinit-overlay");
                    var c = [];
                    c.push("top: " + u.top + "px"), c.push("left: " + u.left + "px"), c.push("height: " + d.getBoundingClientRect().height + "px"), c.push("width: " + d.getBoundingClientRect().width + "px"), n.setAttribute("style", c.join(";")), document.body.appendChild(n)
                }
                if ((e = document.createElement("a")).setAttribute("href", function(t) {
                        var e = [];
                        if (void 0 !== t.dataset.pinId && t.dataset.pinId.length) return "https://www.pinterest.com/pin/" + t.dataset.pinId + "/repin/x/";
                        var n = window.location.href;
                        void 0 !== t.dataset.pinUrl && (n = t.dataset.pinUrl), e.push("url=" + encodeURIComponent(n));
                        var o = t.getAttribute("src");
                        if (void 0 !== t.dataset.pinMedia && (o = t.dataset.pinMedia), e.push("media=" + encodeURIComponent(o)), void 0 !== t.dataset.pinDescription || void 0 !== t.dataset.pinTitle) {
                            var i = t.dataset.pinDescription || t.dataset.pinTitle;
                            i.length > 500 && (i = i.substring(0, 500)), e.push("description=" + encodeURIComponent(i))
                        }
                        return "https://www.pinterest.com/pin/create/button/?" + e.join("&")
                    }(d)), e.setAttribute("class", function(t) {
                        var e = "tasty-pinit-button";
                        return t.hover_button_shape && (e += " tasty-pinit-" + t.hover_button_shape), e
                    }(i())), e.innerHTML = '<?xml version="1.0" encoding="utf-8"?>\n<svg class="tasty-pinit-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 499.1">\n  <path d="M204,6.5C101.4,6.5,0,74.9,0,185.6,0,256,39.6,296,63.6,296c9.9,0,15.6-27.6,15.6-35.4,0-9.3-23.7-29.1-23.7-67.8,0-80.4,61.2-137.4,140.4-137.4,68.1,0,118.5,38.7,118.5,109.8,0,53.1-21.3,152.7-90.3,152.7-24.9,0-46.2-18-46.2-43.8,0-37.8,26.4-74.4,26.4-113.4,0-66.2-93.9-54.2-93.9,25.8,0,16.8,2.1,35.4,9.6,50.7-13.8,59.4-42,147.9-42,209.1,0,18.9,2.7,37.5,4.5,56.4,3.4,3.8,1.7,3.4,6.9,1.5,50.4-69,48.6-82.5,71.4-172.8,12.3,23.4,44.1,36,69.3,36C336.3,367.4,384,263.9,384,170.6,384,71.3,298.2,6.5,204,6.5Z" transform="translate(0 -6.5)" style="fill: #fff"/>\n</svg>\n', "yes" === i().custom_button_label_enabled && i().custom_button_label_text) {
                    var l = document.createElement("span");
                    l.setAttribute("class", "tasty-pinit-label"), l.innerText = i().custom_button_label_text, e.appendChild(l)
                }
                document.body.appendChild(e);
                var p = [],
                    h = function(t, n, o) {
                        var i = t.top,
                            a = t.left,
                            r = e.getBoundingClientRect().width || 0,
                            d = e.getBoundingClientRect().height || 0;
                        switch (o.hover_button_position) {
                            case "top-left":
                                i += 10, a += 10;
                                break;
                            case "top-right":
                                i += 10, a = a + n.getBoundingClientRect().width - r - 10;
                                break;
                            case "center":
                                i += n.getBoundingClientRect().height / 2, a += n.getBoundingClientRect().width / 2;
                                break;
                            case "bottom-left":
                                i = i + n.getBoundingClientRect().height - d - 10, a += 10;
                                break;
                            case "bottom-right":
                                i = i + n.getBoundingClientRect().height - d - 10, a = a + n.getBoundingClientRect().width - r - 10
                        }
                        return {
                            top: i,
                            left: a
                        }
                    }(u, d, i());
                p.push("top: " + h.top + "px"), p.push("left: " + h.left + "px"), "center" === i().hover_button_position && p.push("transform: translate(-50%, -50%)");
                var g = i();
                g.hover_button_color && p.push("background-color: " + g.hover_button_color + " !important"), e.setAttribute("style", p.join(";")), e.addEventListener("mouseenter", (function() {
                    o = !0
                })), e.addEventListener("mouseout", (function() {
                    o = !1
                }));
                var m = e.getAttribute("href");
                e.addEventListener("click", (function(t) {
                    t.preventDefault();
                    var e = document.createEvent("Event");
                    e.initEvent("tasty-pinit-button-click", !0, !0), document.dispatchEvent(e), window.open(m, "tastypin" + (new Date).getTime(), "status=no,resizable=yes,scrollbars=yes,personalbar=no,directories=no,location=no,toolbar=no,menubar=no,width=800,height=900,left=0,top=0")
                }))
            }
        },
        s = function() {
            o || (a(), t = null)
        },
        u = function() {
            (document.querySelectorAll("img").forEach((function(t) {
                r(t) && ("ontouchstart" in document.documentElement ? t.addEventListener("touchstart", (function() {
                    t.closest("a") || d(t)
                }), {
                    passive: !0
                }) : (t.addEventListener("mouseenter", (function() {
                    d(t)
                })), t.addEventListener("mouseout", (function() {
                    setTimeout((function() {
                        s()
                    }), 10)
                }))))
            })), "ontouchstart" in document.documentElement && window.addEventListener("click", (function(e) {
                t && t !== e.target && s()
            })), "undefined" != typeof MutationObserver) && new MutationObserver((function() {
                var t, e;
                for (t in document.body.children) "SPAN" === (e = document.body.children[t]).tagName && (parseInt(e.style.zIndex) < 1e4 || ("12px" === e.style.borderRadius && "rgba(0, 0, 0, 0.4)" === e.style.backgroundColor && -1 !== e.style.backgroundImage.indexOf("data:image/svg+xml") && document.body.removeChild(e), "3px" === e.style.borderRadius && "rgb(230, 0, 35)" === e.style.backgroundColor && -1 !== e.style.backgroundImage.indexOf("data:image/svg+xml") && document.body.removeChild(e)))
            })).observe(document, {
                attributes: !1,
                childList: !0,
                characterData: !1,
                subtree: !0
            })
        };
    /comp|inter/.test(document.readyState) ? u() : "addEventListener" in document ? document.addEventListener("DOMContentLoaded", (function() {
        u()
    })) : document.attachEvent("onreadystatechange", (function() {
        "complete" === document.readyState && u()
    }))
})();