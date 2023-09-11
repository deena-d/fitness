/* Copyright (c) 2008-2023, Quantcast Corp. https://www.quantcast.com/legal/license */ ! function() {
    "use strict";
    var e = function(e) {
        var t, n, r, o, a = !1,
            i = !1,
            c = !1;
        this.then = function(e) {
            return t = e, !c && a && (t(r), c = !0), this
        }, this.catch = function(e) {
            return n = e, !c && i && (n(o), c = !0), this
        }, e((function(e) {
            a = !0, r = e, "function" != typeof t || c || (t(e), c = !0)
        }), (function(e) {
            i = !0, o = e, "function" != typeof n || c || (n(e), c = !0)
        }))
    };
    e.resolve = function(t) {
        return new e((function(e) {
            e(t)
        }))
    }, e.reject = function(t) {
        return new e((function(e, n) {
            n(t)
        }))
    }, e.all = function(t) {
        return new e((function(e, n) {
            var r = 0,
                o = [];

            function a(n, a) {
                o[a] = n, r += 1, t.length === r && e(o)
            }
            if (0 !== t.length)
                for (var i = 0; i < t.length; i += 1) t[i].then((function(e) {
                    a(e, i)
                })).catch((function(e) {
                    n(e)
                }));
            else e(t)
        }))
    };
    var t = e,
        n = window.Promise || t,
        r = "qcSes";

    function o() {
        var e = i();
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (function(t) {
            var n = (e + 16 * Math.random()) % 16 | 0;
            return e = Math.floor(e / 16), ("x" === t ? n : 3 & n | 8).toString(16)
        }))
    }
    var a = function() {
        try {
            if (!window.sessionStorage) return o()
        } catch (e) {
            return o()
        }
        var e;
        try {
            if (e = window.sessionStorage.getItem(r)) return e
        } catch (e) {
            return o()
        }
        e = o();
        try {
            window.sessionStorage.setItem(r, e)
        } catch (e) {}
        return e
    }();

    function i() {
        return (new Date).getTime()
    }

    function c() {
        return new Date
    }

    function u(e) {
        var t = new Date(2e3, e, 1, 0, 0, 0, 0),
            n = t.toUTCString(),
            r = new Date(n.substring(0, n.lastIndexOf(" ") - 1));
        return t.getTime() - r.getTime()
    }

    function s() {
        return Math.round(2147483647 * Math.random())
    }
    /qcdbgc=1$/.test(window.location.toString());

    function f(e, t) {
        "undefined" != typeof console && console.log.apply(console, [e + " " + c().toString()].concat([].slice.call(t)))
    }
    var l = function() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        f("ERROR", e)
    };

    function p(e, t, n) {
        n = n || {};
        var r = {
            url: window.location.href,
            version: "44310d19-20230908150619",
            time: i(),
            browser: navigator.userAgent,
            sessionId: a
        };
        t && "string" == typeof t && (r.label = t), e && (e.message && "string" == typeof e.message ? r.msg = e.message : "string" == typeof e && (r.msg = e), e.stack && "string" == typeof e.stack && (r.stack = e.stack)), n.pcode && "string" == typeof n.pcode && (r.pcode = n.pcode);
        var o = new XMLHttpRequest;
        o.open("POST", "https://pixel.quantcount.com/tag/error", !0), o.send(JSON.stringify(r))
    }
    var d = "_dlt=",
        v = function(e, t) {
            if (void 0 === e) throw new Error("window many not be undefined");
            if (void 0 === t) throw new Error("top may not be undefined");
            t = t ? t.self : null, this.depth = 0;
            var n = e.self;
            for (this.top = n; n !== t;) {
                n = n.parent.self;
                try {
                    n.location.href && (this.url = n.location.href, this.top = n)
                } catch (e) {}
                this.depth++
            }
            this.locate = function(n) {
                for (var r = e;;) {
                    try {
                        if (n in r.frames) return r
                    } catch (e) {}
                    if (r === t) break;
                    r = r.parent.self
                }
            }
        },
        h = !1,
        g = [];

    function m() {
        for (h = !0; g.length > 0;) {
            var e = g.shift();
            e && e()
        }
    }

    function y(e) {
        h ? e() : g.push(e)
    }
    document.readyState in {
        complete: !0,
        interactive: !0
    } && (h = !0), document.addEventListener ? (document.addEventListener("DOMContentLoaded", m, !1), window.addEventListener("load", m, !1)) : document.attachEvent && window.attachEvent && (document.attachEvent("onreadystatechange", m), window.attachEvent("onload", m));
    var w = function(e, t) {
        var r = null,
            o = [];
        y((function() {
            r = t.head || t.getElementsByTagName("head")[0]
        }));
        var a = function(e) {
            var t = new Image;
            return t.src = e, t
        };
        return {
            image: function(e) {
                return new n((function(t, n) {
                    var r = a(e);
                    o.push(r), r.onload = function() {
                        t(r), o.shift(), delete r.onload, delete r.onerror
                    }, r.onerror = n
                }))
            },
            beacon: function(t) {
                var n = e.navigator;
                n && n.sendBeacon ? n.sendBeacon(t) : a(t)
            },
            script: function(e) {
                return new n((function(n, o) {
                    y((function() {
                        var a = function(e, n, r) {
                            var o = t.createElement("script");
                            o.type = "text/javascript", o.src = e;
                            var a = function() {
                                n(o), o.onreadystatechange = null, o.onload = null, o.onerror = null
                            };
                            return o.onload = a, o.onreadystatechange = function() {
                                o.readyState in {
                                    loaded: 1,
                                    complete: 1
                                } && a()
                            }, o.onerror = r, o
                        }(e, n, o);
                        r && (r.firstChild ? r.insertBefore(a, r.firstChild) : r.appendChild(a))
                    }))
                }))
            }
        }
    };

    function _(e, t, n) {
        e.addEventListener ? e.addEventListener(t, n) : "function" == typeof jQuery ? jQuery(e).on(t, n) : e.attachEvent && e.attachEvent("on" + t, n)
    }
    var q, b, x = function(e, t, r, o, a, c, u, s) {
            var f, l = function(e) {
                var t = e.source[0];
                return "p" + e.consent[0] + ("a" == t ? "e" : "i")
            };
            f = "object" == typeof o && "function" == typeof o.callApi ? function(e, t, r, i) {
                var c = o.callApi(t, i, s, a, r);
                return e.cm = l(c), n.resolve(!0)
            } : function(o, c, u, f) {
                return e.depth > 0 && (_(t, "message", (function(e) {
                    var t = e.data;
                    if ("string" == typeof t && t.indexOf("PrivacyManagerAPI") > 0) try {
                        t = JSON.parse(t)
                    } catch (e) {
                        return
                    } else if (void 0 !== t.PrivacyManagerAPI) {
                        var n = t.PrivacyManagerAPI;
                        o.cm = l(n)
                    }
                })), r.postMessage(JSON.stringify({
                    PrivacyManagerAPI: {
                        timestamp: i(),
                        action: c,
                        self: f,
                        domain: s,
                        authority: a,
                        type: u
                    }
                }), "*")), n.resolve(!0)
            }, this.consent = function(e) {
                return f(e, "getConsent", c, u)
            }, this.parameters = {}
        },
        S = function(e, t, r) {
            var o;
            if ("function" == typeof t.__uspapi) {
                var a = t.__uspapi;
                o = function() {
                    return new n((function(e, t) {
                        a("getUSPData", 1, (function(n) {
                            n && "string" == typeof n.uspString ? e(n) : t(n)
                        }))
                    })).catch((function(e) {
                        return l("uspapi: unsuccessful", e), p(e, "uspapi: unsuccessful"), !0
                    }))
                }
            } else {
                e.locate(r);
                var c = {};
                _(t, "message", (function(e) {
                    var t = e.data;
                    if (null != t) {
                        if ("string" == typeof t && "{" == t[0]) try {
                            t = JSON.parse(t)
                        } catch (e) {
                            return
                        }
                        if (Object.prototype.hasOwnProperty.call(t, "__uspapiReturn")) {
                            var n = t.__uspapiReturn,
                                r = n.callId,
                                o = c[r];
                            if (void 0 === o) return;
                            n.success ? o[0](n.returnValue) : o[1](n.returnValue)
                        }
                    }
                })), o = function() {
                    var t = e.locate(r);
                    if (!t) return n.resolve(void 0);
                    var o = i();
                    return new n((function(e, n) {
                        c[o] = [e, n], t.postMessage({
                            __uspapiCall: {
                                command: "getUSPData",
                                version: 1,
                                callId: o
                            }
                        }, "*")
                    }))
                }
            }
            this.consent = function(e) {
                return o().then((function(t) {
                    if (t && "string" == typeof t.uspString) {
                        var n = t.uspString;
                        return e.us_privacy = n, "Y" != n[2]
                    }
                    return !0
                }))
            }
        },
        I = function(e) {
            var t, r = {},
                o = function(o) {
                    return void 0 === t && (t = n.all(e.map((function(e) {
                        return e.consent(r)
                    }))).then((function(e) {
                        return e.reduce((function(e, t) {
                            return e && t
                        }), !0)
                    }))), t.then((function(e) {
                        if (e) return o()
                    }))
                };
            this.consent = o, this.wrap = function(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return o((function() {
                        return e.apply(t, n)
                    }))
                }
            }, this.parameters = r
        };
    ! function(e) {
        e.getTCData = "getTCData", e.ping = "ping", e.addEventListener = "addEventListener", e.removeEventListener = "removeEventListener"
    }(q || (q = {})),
    function(e) {
        e.getInAppTCData = "getInAppTCData", e.getVendorList = "getVendorList"
    }(b || (b = {}));
    var O = "tcf2",
        C = [1, 3, 7, 8, 9, 10],
        E = [1, 3],
        j = [1, 3],
        A = "__tcfapiReturn";

    function P(e, t) {
        var n = t.gdprApplies,
            r = t.purpose,
            o = t.vendor,
            a = o && o.consents && o.consents[11],
            i = o && o.legitimateInterests && o.legitimateInterests[11],
            c = t.publisher ? t.publisher.restrictions : {};
        return !n || e.map((function(e) {
            var t = !!r.consents && r.consents[e],
                n = !!r.legitimateInterests && r.legitimateInterests[e],
                o = c && c[e] ? c[e][11] : null;
            return !(0 === o || (!a || !t || 2 === o || -1 == E.indexOf(e) && 1 !== o) && (1 === o || !i || !n || -1 != j.indexOf(e) || -1 != E.indexOf(e) && 2 !== o))
        })).reduce((function(e, t) {
            return e && t
        }), !0)
    }
    var D = function(e, t, r) {
        var o;
        this.consent = function(a) {
            var c, u;
            return void 0 === o && ("function" == typeof t.__tcfapi ? (u = t.__tcfapi, c = new n((function(e, t) {
                u(q.addEventListener, 2, (function(n, r) {
                    if (r) {
                        var o = n.eventStatus;
                        n.gdprApplies && "useractioncomplete" !== o && "tcloaded" !== o || e(n)
                    } else t(n)
                }))
            }))) : c = function() {
                var o = {},
                    a = {};
                _(t, "message", (function(e) {
                    var t = e.data;
                    if (void 0 === t) return l(O + ": Recieved undefined message"), void p("Recieved undefined message", O);
                    if ("string" == typeof t && "{" == t[0]) try {
                        t = JSON.parse(t)
                    } catch (e) {
                        return
                    }
                    if (Object.prototype.hasOwnProperty.call(t, A)) {
                        var n = t[A],
                            r = n.callId,
                            i = o[r];
                        if (void 0 === i) return;
                        var c = n.returnValue;
                        n.success ? "addEventListener" === a[r] && c.gdprApplies && "useractioncomplete" !== c.eventStatus && "tcloaded" !== c.eventStatus || i[0](c) : i[1](c)
                    }
                }));
                var c = e.locate(r);
                if (!c) return n.resolve({
                    gdprApplies: !1
                });
                var u = i();
                return new n((function(e, t) {
                    var n;
                    o[u] = [e, t], a[u] = q.addEventListener;
                    var r = ((n = {}).__tcfapiCall = {
                        command: q.addEventListener,
                        version: 2,
                        callId: u
                    }, n);
                    c.postMessage(JSON.stringify(r), "*")
                }))
            }(), o = c.then((function(e) {
                var t = !1;
                return "boolean" == typeof e.gdprApplies ? t = e.gdprApplies : "string" == typeof e.gdprApplies && (t = "false" != e.gdprApplies), t ? (a.gdpr = 1, a.gdpr_consent = e.tcString) : a.gdpr = a.gdpr || 0, P(C, e)
            })).catch((function(e) {
                return l(O + ": unsuccessful", e), p(e, O + ": unsuccessful"), a.gdpr = a.gdpr || 0, !0
            }))), o
        }
    };
    D.resolveConsent = P;
    var R = D;

    function T(e, t) {
        return t >>> e | t << 32 - e
    }

    function L(e) {
        return T(2, e) ^ T(13, e) ^ T(22, e)
    }

    function M(e) {
        return T(6, e) ^ T(11, e) ^ T(25, e)
    }

    function k(e) {
        return T(7, e) ^ T(18, e) ^ e >>> 3
    }

    function U(e, t, n) {
        return e & t ^ ~e & n
    }

    function z(e, t, n) {
        return e & t ^ e & n ^ t & n
    }
    var N = function(e, t) {
        var n;
        for (n = 0; n < t.length; n++) e ^= t.charCodeAt(n), e += (e << 1) + (e << 4) + (e << 7) + (e << 8) + (e << 24);
        return e
    };

    function J(e) {
        for (var t = unescape(encodeURIComponent(e)), n = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298], r = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225], o = (t += String.fromCharCode(128)).length / 4 + 2, a = Math.ceil(o / 16), i = new Array(a), c = 0; c < a; c++) {
            i[c] = new Array(16);
            for (var u = 0; u < 16; u++) i[c][u] = t.charCodeAt(64 * c + 4 * u + 0) << 24 | t.charCodeAt(64 * c + 4 * u + 1) << 16 | t.charCodeAt(64 * c + 4 * u + 2) << 8 | t.charCodeAt(64 * c + 4 * u + 3) << 0
        }
        var s, f = 8 * (t.length - 1) / Math.pow(2, 32),
            l = 8 * (t.length - 1) >>> 0;
        for (i[a - 1][14] = Math.floor(f), i[a - 1][15] = l, c = 0; c < a; c++) {
            for (var p = new Array(64), d = 0; d < 16; d++) p[d] = i[c][d];
            for (d = 16; d < 64; d++) p[d] = (T(17, s = p[d - 2]) ^ T(19, s) ^ s >>> 10) + p[d - 7] + k(p[d - 15]) + p[d - 16] >>> 0;
            var v = r[0],
                h = r[1],
                g = r[2],
                m = r[3],
                y = r[4],
                w = r[5],
                _ = r[6],
                q = r[7];
            for (d = 0; d < 64; d++) {
                var b = q + M(y) + U(y, w, _) + n[d] + p[d],
                    x = L(v) + z(v, h, g);
                q = _, _ = w, w = y, y = m + b >>> 0, m = g, g = h, h = v, v = b + x >>> 0
            }
            r[0] = r[0] + v >>> 0, r[1] = r[1] + h >>> 0, r[2] = r[2] + g >>> 0, r[3] = r[3] + m >>> 0, r[4] = r[4] + y >>> 0, r[5] = r[5] + w >>> 0, r[6] = r[6] + _ >>> 0, r[7] = r[7] + q >>> 0
        }
        var S = [];
        for (q = 0; q < r.length; q++) S[q] = ("00000000" + r[q].toString(16)).slice(-8);
        return S.join("")
    }
    var V = function(e) {
            var t = typeof e;
            return "string" == t && e.length > 0 || "number" == t || "boolean" == t
        },
        B = 338688e5,
        F = "__qca",
        Q = ["4dcfa7079941", "127fdf7967f31", "588ab9292a3f", "32f92b0727e5", "22f9aa38dfd3", "a4abfe8f3e04", "18b66bc1325c", "958e70ea2f28", "bdbf0cb4bbb", "65118a0d557", "40a1d9db1864", "18ae3d985046", "3b26460f55d"],
        H = function(e, t) {
            var n, r, o, a = null;
            return e ? (r = (n = e.indexOf(t + "=")) + t.length + 1, n > -1 && ((o = e.indexOf(";", r)) < 0 && (o = e.length), a = e.substring(r, o)), a) : a
        };

    function $(e, t, r) {
        var o, f, h, g, m, y, _, q, b, O, C, E, j, A, P, D, T, L, M, k, U, z, $, G, X, Y, Z, K, W, ee, te, ne, re, oe, ae, ie, ce, ue, se, fe, le = "quantserve.com",
            pe = function(e) {
                for (var t = e.domain || "", n = new Date(0).toUTCString(), r = new Date(i() + 864e5).toUTCString(), o = t.split("."), a = "", c = 2; c <= o.length; c++) {
                    a = o.slice(-c).join(".");
                    var u = d + "1; path=/; domain=" + a + "; expires=" + r;
                    if (e.cookie = u, /_dlt=1\b/.test(e.cookie)) return e.cookie = d + "; path=/; domain=" + a + "; expires=" + n, a
                }
                return e.cookie = d + "; path=/; domain=" + a + "; expires=" + n, t
            }(t),
            de = new v(e, e.top),
            ve = new w(e, t),
            he = function() {
                var e;
                if (!(null === (e = null === navigator || void 0 === navigator ? void 0 : navigator.userAgentData) || void 0 === e ? void 0 : e.getHighEntropyValues)) return n.resolve("");
                try {
                    return navigator.userAgentData.getHighEntropyValues(["model"]).then((function(e) {
                        return encodeURIComponent(e.model)
                    })).catch((function() {
                        return ""
                    }))
                } catch (e) {
                    return n.resolve("")
                }
            }(),
            ge = new I([new x(de, e, e.top, e.PrivacyManagerAPI, "truste.com", "advertising", le, pe), new S(de, e, "__uspapiLocator"), new R(de, e, "__tcfapiLocator")]),
            me = function(e, t, n) {
                var r = 0,
                    o = H(t.cookie, F) || function(e, t) {
                        var n = null;
                        try {
                            n = e.localStorage.getItem(t)
                        } catch (e) {}
                        if (!n) return null;
                        var r = JSON.parse(n);
                        if (c().getTime() > r.expiry) {
                            try {
                                e.localStorage.removeItem(t)
                            } catch (e) {}
                            return null
                        }
                        return r.value
                    }(e, F),
                    a = function(e) {
                        for (var t, n, r, o = (n = N(2166136261, t = e), r = N(3386659096, t), Math.round(Math.abs(n * r) / 65536).toString(16)), a = 0; a < Q.length; a++)
                            if (Q[a] === o) return !0;
                        return !1
                    }(n);
                return o || (r = 1, o = "P0-" + s() + "-" + c().getTime()), {
                    SD: Q,
                    persistIdentifier: function() {
                        1 !== r || a || (t.cookie = [F, "=", o, "; expires=", new Date(c().getTime() + B).toUTCString(), "; path=/; domain=", n].join(""), function(e, t, n, r) {
                            var o = {
                                value: n,
                                expiry: c().getTime() + r
                            };
                            try {
                                e.localStorage.setItem(t, JSON.stringify(o))
                            } catch (e) {}
                        }(e, F, o, B))
                    },
                    removeIdentifier: function() {
                        t.cookie = F + "=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
                        try {
                            e.localStorage.removeItem(F)
                        } catch (e) {}
                    },
                    getFirstPartyIDString: function(e) {
                        return a || 1 === e ? ";fpan=u;fpa=" : ";fpan=" + r + ";fpa=" + o
                    },
                    getExternalIDString: function(e) {
                        if (a || 1 === e) return "";
                        var n = H(t.cookie, "_pubcid") || H(t.cookie, "_sharedID"),
                            r = H(t.cookie, "_pubcid_optout");
                        return !H(t.cookie, "_pbjs_id_optout") && "1" !== r && n ? ";pbc=" + n : ";pbc="
                    }
                }
            }(e, t, pe),
            ye = ["a", "ce", "cm", "dst", "enc", "fpa", "fpan", "je", "ns", "ogl", "rf", "tzo", "sr", "ses"],
            we = "rule",
            _e = "webpage",
            qe = "ad",
            be = "load",
            xe = "engagement",
            Se = !1,
            Ie = !1,
            Oe = 0,
            Ce = [],
            Ee = [],
            je = [],
            Ae = [],
            Pe = {},
            De = 0,
            Re = null,
            Te = {},
            Le = {},
            Me = [].slice;
        fe = t.createElement("script"), o = "async" in fe ? 1 : fe.readyState ? 2 : 3, fe = null;
        var ke = function(e) {
            try {
                return {
                    init: g,
                    clean: Ue,
                    hash: J,
                    push: m,
                    rules: G,
                    require: function() {
                        p("deprecated api.require fn called", "api", {
                            pcode: Ae[0]
                        })
                    },
                    hasRules: Y,
                    defaults: ee,
                    __qc: function() {
                        return !0
                    }
                }[e].apply(null, Me.call(arguments, 1))
            } catch (e) {
                return l(e), p(e, "api", {
                    pcode: Ae[0]
                }), !1
            }
        };
        ke.evts = 0, ke.v = 2, ke.SD = me.SD, ke.qpixelsent = [], $ = function(e) {
            var t, n = e && e.length || 0;
            for (t = 0; t < n; t++)
                if (!e[t]) return !1;
            return !0
        }, W = function(t) {
            (t = t || e._qacct) && (D(Ae, t) || Ae.push(t))
        }, D = function(e, t) {
            var n, r = e.length;
            for (n = 0; n < r; n++)
                if (e[n] === t) return !0;
            return !1
        }, M = function(e) {
            return {}.toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
        }, k = function(e) {
            var t, n, r;
            if ("array" === (n = M(e))) return e.slice(0);
            if ("object" === n) {
                for (r in t = {}, e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                return t
            }
            return "string" === n ? "" + e : e
        }, m = function(e, t) {
            y(e, t)
        }, Y = function(e) {
            return D(je, e)
        }, ee = function(e, t) {
            var n;
            e && ((n = Te[e]) && (t = A(t, n)), t && t.qacct && delete t.qacct, Te[e] = t)
        }, te = function(t) {
            var n, r, o, a, i, c;
            if (h(t))
                for (a in i = t) {
                    if ("string" == typeof i[a]) {
                        n = t.event || be, r = t.media || _e, n !== we && n !== be || r !== _e && r !== qe ? y(t) : (c = t.qacct || e._qacct, t.qacct = c, o = (o = Le[c]) ? A(o, t) : t, Le[c] = o), W(t.qacct);
                        break
                    }
                    "object" == typeof i[a] && null != i[a] && te(i[a])
                }
        }, A = function(e, t) {
            var n = {};
            return n.qacct = e.qacct || t.qacct, e.event === be || t.event === be ? n.event = be : e.event && t.event ? n.event = e.event || t.event : n.event = null, n.media = null, e.media === _e || t.media === _e ? n.media = _e : e.media === qe || t.media === qe ? n.media = qe : n.media = e.media || t.media, P(n, e, t), P(n, t, e), n.event || delete n.event, n.media || delete n.media, n
        }, P = function(e, t, n) {
            var r, o, a, i, c, u;
            for (r in t) Object.prototype.hasOwnProperty.call(t, r) && !Object.prototype.hasOwnProperty.call(e, r) && (o = t[r], i = "", u = !!(a = n[r]) && "string" == typeof a, (c = !!o && "string" == typeof o) && (i = o), c && u && (i += ","), u && (i += a), e[r] = i)
        }, ne = function() {
            var e, t, n = [];
            if (!(De > 0)) {
                for (e in L(), Le) Object.prototype.hasOwnProperty.call(Le, e) && Le[e] && (t = Le[e], n.push(t), delete Le[e]);
                1 == n.length && y(n[0]), n.length > 1 && y(n)
            }
        }, re = function() {
            var e, t, n, r = [];
            for (n = Ae.slice(0), e = 0; e < n.length; e++) t = n[e], Y(t) || r.push(t);
            if (0 === r.length) ne();
            else
                for (e = 0; e < r.length; e++) t = r[e], je.push(t), E(t)
        }, j = function(n, r, a, i) {
            var c;
            n = e.location.protocol + "//" + n;
            var u = (Re = t.scripts && t.scripts[0] || null) && Re.parentNode || t.head || t;
            if (c = t.createElement("script"), 1 === o) c.src = n, c.async = !0, c.onload = r, a && (c.onerror = function(e) {
                c.onerror = null, a(e)
            }), u.insertBefore(c, Re);
            else if (2 === o) {
                var s = !1;
                c.onload = c.onreadystatechange = function() {
                    s || "loaded" != c.readyState && "complete" != c.readyState || (s = !0, c.onreadystatechange = null, r())
                }, c.src = n, u.insertBefore(c, Re)
            } else i && i()
        }, E = function(e) {
            De++, j("rules.quantcount.com/rules-" + e + ".js", (function() {
                Pe[e] = 2 === o ? 2 : 0, oe()
            }), (function(t) {
                Pe[e] = 1, p(t, "ruleFetch", {
                    pcode: e
                }), oe()
            }), (function() {
                Pe[e] = 4, oe()
            }))
        }, oe = function() {
            De -= De > 0 ? 1 : 0, ne()
        }, G = function() {
            var e, t, n, r = !0,
                o = !1;
            if (arguments.length) {
                for (n = function(e) {
                        r ? te(e) : y(e, !0), o = !0
                    }, e = 0; e < arguments.length; e++)(t = Me.call(arguments[e], 0)).splice(1, 0, n), X.apply(null, t);
                r = !1, Se && ne()
            }
            return o
        }, X = function(e, t) {
            var n, r, o, a, i, c, u, s = [],
                f = [],
                l = t || y;
            if ((r = Me.call(arguments, 2)) && r.length) {
                for (o = r[0] || $, a = r[1], n = (i = r[2]).length, c = 0; c < n; c++) s.push(!1), f.push(null);
                u = {
                    p: e,
                    f: s,
                    r: o,
                    c: i,
                    a: a,
                    v: f
                }, Y(e) || je.push(e), Ee.push(u), Z(u, l)
            } else je.push(e), Pe[e] = 6
        }, Z = function(e, t) {
            var n, r = e && e.c ? e.c.length : 0;
            for (n = 0; n < r; n++) ! function(n) {
                var r, o;
                try {
                    r = e.c[n][0], (o = e.c[n].slice(1)).splice(0, 0, (function(r) {
                        e.f[n] = !0, e.v[n] = r, K(e, t)
                    })), r.apply(null, o)
                } catch (r) {
                    p(r, "processRule", {
                        pcode: e.p
                    }), e.f[n] = !0, e.v[n] = !1, K(e, t)
                }
            }(n)
        }, K = function(e, t) {
            var n, r, o, a, i, c, u, s = e.a,
                f = e.f,
                l = e.v,
                d = e.r || $;
            if ((n = $(f)) && (n = n && d(l)), n)
                for (i = 0; i < s.length; i++) try {
                    for (u in r = s[i][0], o = (o = s[i].length > 1 ? s[i].slice(1) : []).concat(e.v), a = r.apply(null, o), c = {
                            qacct: e.p,
                            event: we
                        }, a) Object.prototype.hasOwnProperty.call(a, u) && "qacct" !== u && (c[u] = a[u]);
                    t(c)
                } catch (t) {
                    p(t, "evalRule", {
                        pcode: e.p
                    });
                    continue
                }
        }, f = function(e) {
            return e.replace(/\./g, "%2E").replace(/,/g, "%2C")
        }, h = function(e) {
            return void 0 !== e && null != e
        }, z = function(e) {
            var t, n;
            if (e && "object" === M(e))
                for (n = 0; n < ye.length; n++) t = ye[n], Object.prototype.hasOwnProperty.call(e, t) && e[t] && delete e[t]
        }, O = function(t, n, r) {
            var o, a, i;
            return n && "string" == typeof n.qacct ? o = n.qacct : "string" == typeof e._qacct && (o = e._qacct), o && 0 !== o.length ? (n = U(o, n), delete Le[o], i = Te[o], a = Pe[o], h(a) || (a = 3), se(n, i, r, o) ? null : function(e, t, n, r, o) {
                var a, i = {},
                    c = null,
                    u = /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    s = /^[A-Fa-f0-9]{64}$/,
                    f = 2;
                for (a in t) Object.prototype.hasOwnProperty.call(t, a) && V(t[a]) && ("uid" !== a && "uh" !== a ? "qacct" !== a && (i[a + e] = encodeURIComponent(t[a])) : (t[a].match(s) ? (f = 1, c = t[a].toLowerCase()) : (t[a].match(u) && (f = 0, t[a] = t[a].toLowerCase()), "" !== t[a] && (c = J(t[a]))), delete t[a]));
                for (a in n) Object.prototype.hasOwnProperty.call(n, a) && V(n[a]) && !i[a + e] && (i[a + e] = encodeURIComponent(n[a]));
                return i["rf" + e] = "" + o, "string" == typeof c && (t.uh = c, i["uh" + e] = encodeURIComponent(c)), i["uht" + e] = "" + f, i["a" + e] = r, i
            }(t, n, i, o, a)) : null
        }, b = function(e) {
            var t, n = [],
                r = [],
                o = [];
            for (t in e) e[t] && Object.prototype.hasOwnProperty.call(e, t) && ("uh" === t || "uht" === t ? r.push(";" + t + "=" + e[t]) : n.push(t + "=" + e[t]));
            return o.push(n.join(";")), o.push(r.join("")), o
        }, C = function() {
            var e, n, r, o, a, i = t.getElementsByTagName("meta"),
                c = "";
            for (e = 0; e < i.length; e++) {
                if (a = i[e], c.length >= 1e3) return encodeURIComponent(c);
                h(a) && h(a.attributes) && h(a.attributes.property) && h(a.attributes.property.value) && h(a.content) && (n = a.attributes.property.value, r = a.content, n.length > 3 && "og:" === n.substring(0, 3) && (c.length > 0 && (c += ","), o = r.length > 80 ? 80 : r.length, c += f(n.substring(3, n.length)) + "." + f(r.substring(0, o))))
            }
            return encodeURIComponent(c)
        }, y = function(n, o) {
            var i, f, l, p, d, v, g, m, y, w, _, x = s(),
                S = "",
                I = "",
                E = "",
                j = "",
                P = "1",
                D = [];
            if (Oe = 0, h(ke.qpixelsent) || (ke.qpixelsent = []), h(n)) {
                if ("object" === (w = M(n))) l = O("", n, o);
                else if ("array" === w)
                    for (d = 0; d < n.length; d++) _ = O("." + (d + 1), n[d], o), l = 0 === d ? _ : A(l, _)
            } else "string" == typeof _qacct && (l = O("", null, o));
            if (l) {
                i = r.cookieEnabled ? "1" : "0", h(e._qmeta) && (S = ";m=" + encodeURIComponent(e._qmeta), e._qmeta = null), v = c(), g = u(0) !== u(6) ? 1 : 0, m = me.getFirstPartyIDString(Oe), y = me.getExternalIDString(Oe), e.location && e.location.href && (I = encodeURIComponent(e.location.href)), t && t.referrer && (j = encodeURIComponent(t.referrer)), e.self === e.top && (P = "0"), l.url ? E = I : l.url = I, l.ref || (l.ref = j || ""), f = C(), p = b(l);
                var R = ue(l.event),
                    T = l.event === xe ? "/engagement" : "/pixel";
                D.push(T + R + "r=" + x + ";" + p[0]), D.push(p[1]), D.push(m + y), D.push(";ns=" + P + ";ce=" + i + ";qjs=1;qv=44310d19-20230908150619"), D.push((l.ref ? "" : ";ref=") + ";d=" + pe + ";dst=" + g + ";et=" + v.getTime() + ";tzo=" + v.getTimezoneOffset() + (E ? ";ourl=" + E : "") + S + ";ogl=" + f + ";ses=" + a), Ce.push({
                    pixel: D,
                    pCode: l.a
                }), q()
            }
        }, ue = function(e) {
            return e === xe ? "?" : ";"
        }, _ = function(t) {
            var n = t.pixel,
                r = {};
            ge.consent((function() {
                return !0
            })).then((function(e) {
                e || me.removeIdentifier(), r.target = e ? le : "quantcount.com"
            })).then((function() {
                return he
            })).then((function(t) {
                var o, a = r.target,
                    i = ge.parameters,
                    c = [navigator && "Apple Computer, Inc." === navigator.vendor ? "https://prreqcroab.icu" : "https://pixel." + a, n[0], a === le ? [n[1], n[2]].join("") : ";uh=u;uht=u", n[3], ";cm=", i.cm, 1 === i.gdpr ? ";gdpr=1;gdpr_consent=" + i.gdpr_consent : ";gdpr=0", i.us_privacy ? ";us_privacy=" + i.us_privacy : "", n[4], ";mdl=" + t].join("");
                return "function" != typeof CustomEvent ? (o = document.createEvent("CustomEvent")).initCustomEvent("q_pixel_fire", !1, !1, {
                    url: c
                }) : o = new CustomEvent("q_pixel_fire", {
                    detail: {
                        url: c
                    }
                }), e.dispatchEvent(o), ve.image(c).catch((function() {
                    return null
                })).then((function(e) {
                    e && "number" == typeof e.width && 3 === e.width ? me.removeIdentifier() : a === le && me.persistIdentifier()
                }))
            })).catch((function(e) {
                p(e, "fire")
            }))
        }, q = function() {
            for (; Ce.length;) _(Ce.shift())
        }, ae = function() {
            var e, t = arguments;
            for (T([].slice.call(t)), e = 0; e < t.length; e++) y(t[e]);
            Ae.length ? re() : ne()
        }, T = function(t) {
            var n, r = M(t);
            if ("array" === r)
                for (n = 0; n < t.length; n++) T(t[n]);
            else "object" === r && W(t.qacct || e._qacct)
        }, L = function() {
            var t;
            if (Ie || e._qevents.length || e.ezt.length || "undefined" == typeof _qacct || (y({
                    qacct: e._qacct
                }), Ie = !0), !ke.evts) {
                for (t in e._qevents) e._qevents[t] !== e._qevents.push && Object.prototype.hasOwnProperty.call(e._qevents, t) && y(e._qevents[t]);
                for (t in e.ezt) e.ezt[t] !== e.ezt.push && Object.prototype.hasOwnProperty.call(e.ezt, t) && y(e.ezt[t]);
                e._qevents = {
                    push: ae
                }, e.ezt.push = function() {
                    var t, n = arguments;
                    if (h(e.queueManager))
                        for (t = 0; t < n.length; t++) e.queueManager.push(n[t]);
                    else ae.apply(this, arguments)
                }, ke.evts = 1
            }
        }, ce = function(t) {
            var n;
            t && (n = k(t), T(t), e._qevents.push(n), t = null)
        }, ie = function(e) {
            e.push = function() {
                return T([].slice.call(arguments)), re(), [].push.apply(e, arguments)
            }
        }, se = function(e, t, n, r) {
            t = t || {};
            var o = (e ? e.media : t.media) || _e,
                a = (e ? e.event : t.event) || be;
            if (o === qe && (Oe = 1), o === _e && a === be) {
                for (var i = 0; i < ke.qpixelsent.length; i++)
                    if (ke.qpixelsent[i] === r && !n) return !0;
                ke.qpixelsent.push(r)
            }
            return !1
        }, U = function(e, t) {
            var n = Le[e];
            return t ? n && (t = A(t, n)) : t = n, z(t), t
        }, g = function() {
            try {
                h(e._qevents) || (e._qevents = []), h(e.ezt) || (e.ezt = []), ce(e._qoptions), ce(e.qcdata), ce(e.smarttagdata), ke.evts || (ie(e._qevents), ie(e.ezt)), T(e.ezt), T(e._qevents), T({
                    qacct: e._qacct
                }), e._qoptions = null, Ae.length ? re() : ne(), Se = !0
            } catch (e) {
                return p(e, "init"), e
            }
        };
        var Ue = function() {
            e._qevents = null, e.ezt = null, e.quantserve = null
        };
        return e.quantserve = e.quantserve || g, ke.quantserve = g, ke
    }
    void 0 === window.__qc && (window.__qc = new function(e, t, n) {
        try {
            return new $(e, t, n)
        } catch (e) {
            return p(e, "construct"), e
        }
    }(window, window.document, window.navigator)), window.__qc("init"), window.__qc
}();
//# sourceMappingURL=quant.min.js.map