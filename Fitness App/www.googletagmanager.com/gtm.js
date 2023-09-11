// Copyright 2012 Google Inc. All rights reserved.

(function() {

    var data = {
        "resource": {
            "version": "7",

            "macros": [{
                "function": "__e"
            }, {
                "function": "__c",
                "vtp_value": "wellnesse.com, myshopify.com, wellnessmama.com"
            }, {
                "function": "__c",
                "vtp_value": "UA-32598817-1"
            }, {
                "function": "__v",
                "vtp_name": "gtm.elementUrl",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.triggers",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": ""
            }, {
                "function": "__gas",
                "vtp_cookieDomain": "auto",
                "vtp_doubleClick": true,
                "vtp_setTrackerName": false,
                "vtp_useDebugVersion": false,
                "vtp_useHashAutoLink": false,
                "vtp_decorateFormsAutoLink": false,
                "vtp_enableLinkId": false,
                "vtp_enableEcommerce": false,
                "vtp_trackingId": ["macro", 2],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableTransportUrl": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false
            }, {
                "function": "__aev",
                "vtp_varType": "TEXT"
            }, {
                "function": "__u",
                "vtp_component": "URL",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__u",
                "vtp_component": "HOST",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__u",
                "vtp_component": "PATH",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__f",
                "vtp_component": "URL"
            }, {
                "function": "__e"
            }, {
                "function": "__v",
                "vtp_name": "gtm.element",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.elementClasses",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.elementId",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.elementTarget",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.element",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.elementClasses",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.elementId",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.elementTarget",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.elementUrl",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__aev",
                "vtp_varType": "TEXT"
            }],
            "tags": [{
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_overrideGaSettings": true,
                "vtp_doubleClick": true,
                "vtp_setTrackerName": false,
                "vtp_useDebugVersion": false,
                "vtp_fieldsToSet": ["list", ["map", "fieldName", "cookieDomain", "value", "auto"],
                    ["map", "fieldName", "allowLinker", "value", "true"]
                ],
                "vtp_useHashAutoLink": false,
                "vtp_trackType": "TRACK_PAGEVIEW",
                "vtp_autoLinkDomains": ["macro", 1],
                "vtp_decorateFormsAutoLink": false,
                "vtp_enableLinkId": false,
                "vtp_enableEcommerce": false,
                "vtp_trackingId": ["macro", 2],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableTransportUrl": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "tag_id": 1
            }, {
                "function": "__ua",
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "Affiliate click",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 5],
                "vtp_eventAction": ["template", "clicked on: ", ["macro", 3]],
                "vtp_eventLabel": ["template", "text: ", ["macro", 6]],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableTransportUrl": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "tag_id": 2
            }, {
                "function": "__gclidw",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_enableCrossDomain": true,
                "vtp_acceptIncoming": true,
                "vtp_linkerDomains": ["macro", 1],
                "vtp_formDecoration": false,
                "vtp_urlPosition": "query",
                "vtp_enableCookieOverrides": false,
                "vtp_enableCrossDomainFeature": true,
                "vtp_enableCookieUpdateFeature": false,
                "vtp_enableCookieFlagsFeature": false,
                "vtp_enableUrlPassthroughFeature": false,
                "tag_id": 14
            }, {
                "function": "__lcl",
                "vtp_waitForTags": false,
                "vtp_checkValidation": false,
                "vtp_waitForTagsTimeout": "2000",
                "vtp_uniqueTriggerId": "6810969_7",
                "tag_id": 15
            }, {
                "function": "__html",
                "once_per_event": true,
                "vtp_html": "\n\u003Cscript type=\"text\/gtmscript\"\u003E_atrk_opts={atrk_acct:\"j3Rpr1O7kI20L7\",domain:\"wellnessmama.com\",dynamic:!0};(function(){var a=document.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=\"https:\/\/certify-js.alexametrics.com\/atrk.js\";var b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg src=\"https:\/\/certify.alexametrics.com\/atrk.gif?account=j3Rpr1O7kI20L7\" style=\"display:none\" height=\"1\" width=\"1\" alt=\"\"\u003E\u003C\/noscript\u003E\n  ",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 3
            }, {
                "function": "__html",
                "vtp_html": "\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"146814262393949\");fbq(\"set\",\"agent\",\"tmgoogletagmanager\",\"146814262393949\");fbq(\"track\",\"PageView\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=146814262393949\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 4
            }],
            "predicates": [{
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "gtm.js"
            }, {
                "function": "_re",
                "arg0": ["macro", 3],
                "arg1": "amazon.com|\/go\/|isrefer.com|thrivemarket.com|shareasale.com|e-junkie.com|mountainroseherbs.com|linksynergy.com|thrv.me|radiantlifecatalog.com"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "gtm.linkClick"
            }, {
                "function": "_re",
                "arg0": ["macro", 4],
                "arg1": "(^$|((^|,)6810969_7($|,)))"
            }],
            "rules": [
                [
                    ["if", 0],
                    ["add", 0, 2, 4, 5, 3]
                ],
                [
                    ["if", 1, 2, 3],
                    ["add", 1]
                ]
            ]
        },
        "runtime": []









    };


    var ca, da = function(a) {
            var b = 0;
            return function() {
                return b < a.length ? {
                    done: !1,
                    value: a[b++]
                } : {
                    done: !0
                }
            }
        },
        ea = function(a) {
            return a.raw = a
        },
        fa = function(a, b) {
            a.raw = b;
            return a
        },
        ha = function(a) {
            var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
            if (b) return b.call(a);
            if ("number" == typeof a.length) return {
                next: da(a)
            };
            throw Error(String(a) + " is not an iterable or ArrayLike");
        },
        ia = "function" == typeof Object.create ? Object.create : function(a) {
            var b = function() {};
            b.prototype = a;
            return new b
        },
        ja;
    if ("function" == typeof Object.setPrototypeOf) ja = Object.setPrototypeOf;
    else {
        var ka;
        a: {
            var la = {
                    a: !0
                },
                na = {};
            try {
                na.__proto__ = la;
                ka = na.a;
                break a
            } catch (a) {}
            ka = !1
        }
        ja = ka ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var oa = ja,
        pa = function(a, b) {
            a.prototype = ia(b.prototype);
            a.prototype.constructor = a;
            if (oa) oa(a, b);
            else
                for (var c in b)
                    if ("prototype" != c)
                        if (Object.defineProperties) {
                            var d = Object.getOwnPropertyDescriptor(b, c);
                            d && Object.defineProperty(a, c, d)
                        } else a[c] = b[c];
            a.xm = b.prototype
        };
    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    var qa = this || self,
        ra = function(a) {
            return a
        };
    var sa = function() {},
        ta = function(a) {
            return "function" === typeof a
        },
        g = function(a) {
            return "string" === typeof a
        },
        ua = function(a) {
            return "number" === typeof a && !isNaN(a)
        },
        va = Array.isArray,
        xa = function(a, b) {
            if (a && va(a))
                for (var c = 0; c < a.length; c++)
                    if (a[c] && b(a[c])) return a[c]
        },
        ya = function(a, b) {
            if (!ua(a) || !ua(b) || a > b) a = 0, b = 2147483647;
            return Math.floor(Math.random() * (b - a + 1) + a)
        },
        Ba = function(a, b) {
            for (var c = new Aa, d = 0; d < a.length; d++) c.set(a[d], !0);
            for (var e = 0; e < b.length; e++)
                if (c.get(b[e])) return !0;
            return !1
        },
        k = function(a,
            b) {
            for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c])
        },
        Ca = function(a) {
            return !!a && ("[object Arguments]" === Object.prototype.toString.call(a) || Object.prototype.hasOwnProperty.call(a, "callee"))
        },
        Da = function(a) {
            return Math.round(Number(a)) || 0
        },
        Ea = function(a) {
            return "false" === String(a).toLowerCase() ? !1 : !!a
        },
        Fa = function(a) {
            var b = [];
            if (va(a))
                for (var c = 0; c < a.length; c++) b.push(String(a[c]));
            return b
        },
        Ga = function(a) {
            return a ? a.replace(/^\s+|\s+$/g, "") : ""
        },
        Ia = function() {
            return new Date(Date.now())
        },
        Ja = function() {
            return Ia().getTime()
        },
        Aa = function() {
            this.prefix = "gtm.";
            this.values = {}
        };
    Aa.prototype.set = function(a, b) {
        this.values[this.prefix + a] = b
    };
    Aa.prototype.get = function(a) {
        return this.values[this.prefix + a]
    };
    var Ka = function(a, b, c) {
            return a && a.hasOwnProperty(b) ? a[b] : c
        },
        La = function(a) {
            var b = a;
            return function() {
                if (b) {
                    var c = b;
                    b = void 0;
                    try {
                        c()
                    } catch (d) {}
                }
            }
        },
        Ma = function(a, b) {
            for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
        },
        Oa = function(a) {
            for (var b in a)
                if (a.hasOwnProperty(b)) return !0;
            return !1
        },
        Pa = function(a, b) {
            for (var c = [], d = 0; d < a.length; d++) c.push(a[d]), c.push.apply(c, b[a[d]] || []);
            return c
        },
        Qa = function(a, b) {
            for (var c = {}, d = c, e = a.split("."), f = 0; f < e.length - 1; f++) d = d[e[f]] = {};
            d[e[e.length - 1]] = b;
            return c
        },
        Ra = /^\w{1,9}$/,
        Sa = function(a, b) {
            a = a || {};
            b = b || ",";
            var c = [];
            k(a, function(d, e) {
                Ra.test(d) && e && c.push(d)
            });
            return c.join(b)
        },
        Ta = function(a, b) {
            function c() {
                ++d === b && (e(), e = null, c.done = !0)
            }
            var d = 0,
                e = a;
            c.done = !1;
            return c
        };
    /*
     jQuery (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
    var Ua = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
        Va = function(a) {
            if (null == a) return String(a);
            var b = Ua.exec(Object.prototype.toString.call(Object(a)));
            return b ? b[1].toLowerCase() : "object"
        },
        Wa = function(a, b) {
            return Object.prototype.hasOwnProperty.call(Object(a), b)
        },
        Xa = function(a) {
            if (!a || "object" != Va(a) || a.nodeType || a == a.window) return !1;
            try {
                if (a.constructor && !Wa(a, "constructor") && !Wa(a.constructor.prototype, "isPrototypeOf")) return !1
            } catch (c) {
                return !1
            }
            for (var b in a);
            return void 0 ===
                b || Wa(a, b)
        },
        z = function(a, b) {
            var c = b || ("array" == Va(a) ? [] : {}),
                d;
            for (d in a)
                if (Wa(a, d)) {
                    var e = a[d];
                    "array" == Va(e) ? ("array" != Va(c[d]) && (c[d] = []), c[d] = z(e, c[d])) : Xa(e) ? (Xa(c[d]) || (c[d] = {}), c[d] = z(e, c[d])) : c[d] = e
                }
            return c
        };
    var Ya = function(a) {
        if (void 0 == a || va(a) || Xa(a)) return !0;
        switch (typeof a) {
            case "boolean":
            case "number":
            case "string":
            case "function":
                return !0
        }
        return !1
    };

    function Za() {
        for (var a = $a, b = {}, c = 0; c < a.length; ++c) b[a[c]] = c;
        return b
    }

    function ab() {
        var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        a += a.toLowerCase() + "0123456789-_";
        return a + "."
    }
    var $a, bb;

    function cb(a) {
        $a = $a || ab();
        bb = bb || Za();
        for (var b = [], c = 0; c < a.length; c += 3) {
            var d = c + 1 < a.length,
                e = c + 2 < a.length,
                f = a.charCodeAt(c),
                h = d ? a.charCodeAt(c + 1) : 0,
                l = e ? a.charCodeAt(c + 2) : 0,
                m = f >> 2,
                n = (f & 3) << 4 | h >> 4,
                p = (h & 15) << 2 | l >> 6,
                q = l & 63;
            e || (q = 64, d || (p = 64));
            b.push($a[m], $a[n], $a[p], $a[q])
        }
        return b.join("")
    }

    function db(a) {
        function b(m) {
            for (; d < a.length;) {
                var n = a.charAt(d++),
                    p = bb[n];
                if (null != p) return p;
                if (!/^[\s\xa0]*$/.test(n)) throw Error("Unknown base64 encoding at char: " + n);
            }
            return m
        }
        $a = $a || ab();
        bb = bb || Za();
        for (var c = "", d = 0;;) {
            var e = b(-1),
                f = b(0),
                h = b(64),
                l = b(64);
            if (64 === l && -1 === e) return c;
            c += String.fromCharCode(e << 2 | f >> 4);
            64 != h && (c += String.fromCharCode(f << 4 & 240 | h >> 2), 64 != l && (c += String.fromCharCode(h << 6 & 192 | l)))
        }
    };
    var eb = {},
        fb = function(a, b) {
            eb[a] = eb[a] || [];
            eb[a][b] = !0
        },
        gb = function() {
            delete eb.GA4_EVENT
        },
        hb = function(a) {
            var b = eb[a];
            if (!b || 0 === b.length) return "";
            for (var c = [], d = 0, e = 0; e < b.length; e++) 0 === e % 8 && 0 < e && (c.push(String.fromCharCode(d)), d = 0), b[e] && (d |= 1 << e % 8);
            0 < d && c.push(String.fromCharCode(d));
            return cb(c.join("")).replace(/\.+$/, "")
        };
    var ib = Array.prototype.indexOf ? function(a, b) {
        return Array.prototype.indexOf.call(a, b, void 0)
    } : function(a, b) {
        if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
        for (var c = 0; c < a.length; c++)
            if (c in a && a[c] === b) return c;
        return -1
    };
    var jb, kb = function() {
        if (void 0 === jb) {
            var a = null,
                b = qa.trustedTypes;
            if (b && b.createPolicy) {
                try {
                    a = b.createPolicy("goog#html", {
                        createHTML: ra,
                        createScript: ra,
                        createScriptURL: ra
                    })
                } catch (c) {
                    qa.console && qa.console.error(c.message)
                }
                jb = a
            } else jb = a
        }
        return jb
    };
    var lb = function(a) {
        this.h = a
    };
    lb.prototype.toString = function() {
        return this.h + ""
    };
    var mb = {};
    var nb = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
    var ob, pb;
    a: {
        for (var qb = ["CLOSURE_FLAGS"], rb = qa, sb = 0; sb < qb.length; sb++)
            if (rb = rb[qb[sb]], null == rb) {
                pb = null;
                break a
            }
        pb = rb
    }
    var tb = pb && pb[610401301];
    ob = null != tb ? tb : !1;

    function ub() {
        var a = qa.navigator;
        if (a) {
            var b = a.userAgent;
            if (b) return b
        }
        return ""
    }
    var vb, wb = qa.navigator;
    vb = wb ? wb.userAgentData || null : null;

    function xb(a) {
        return ob ? vb ? vb.brands.some(function(b) {
            var c = b.brand;
            return c && -1 != c.indexOf(a)
        }) : !1 : !1
    }

    function yb(a) {
        return -1 != ub().indexOf(a)
    };

    function zb() {
        return ob ? !!vb && 0 < vb.brands.length : !1
    }

    function Ab() {
        return zb() ? !1 : yb("Opera")
    }

    function Bb() {
        return yb("Firefox") || yb("FxiOS")
    }

    function Cb() {
        return zb() ? xb("Chromium") : (yb("Chrome") || yb("CriOS")) && !(zb() ? 0 : yb("Edge")) || yb("Silk")
    };
    var Db = {},
        Eb = function(a) {
            this.h = a
        };
    Eb.prototype.toString = function() {
        return this.h.toString()
    };
    var Fb = function(a) {
        return a instanceof Eb && a.constructor === Eb ? a.h : "type_error:SafeHtml"
    };
    /*

     SPDX-License-Identifier: Apache-2.0
    */
    function Gb(a) {
        var b = a.tagName;
        if ("SCRIPT" === b || "STYLE" === b) throw Error("");
    };
    var Hb = ea([""]),
        Ib = fa(["\x00"], ["\\0"]),
        Jb = fa(["\n"], ["\\n"]),
        Kb = fa(["\x00"], ["\\u0000"]);

    function Lb(a) {
        return -1 === a.toString().indexOf("`")
    }
    Lb(function(a) {
        return a(Hb)
    }) || Lb(function(a) {
        return a(Ib)
    }) || Lb(function(a) {
        return a(Jb)
    }) || Lb(function(a) {
        return a(Kb)
    });
    var Mb = "title aria-atomic aria-autocomplete aria-busy aria-checked aria-current aria-disabled aria-dropeffect aria-expanded aria-haspopup aria-hidden aria-invalid aria-label aria-level aria-live aria-multiline aria-multiselectable aria-orientation aria-posinset aria-pressed aria-readonly aria-relevant aria-required aria-selected aria-setsize aria-sort aria-valuemax aria-valuemin aria-valuenow aria-valuetext alt align autocapitalize autocomplete autocorrect autofocus autoplay bgcolor border cellpadding cellspacing checked color cols colspan controls datetime disabled download draggable enctype face formenctype frameborder height hreflang hidden ismap label lang loop max maxlength media minlength min multiple muted nonce open placeholder preload rel required reversed role rows rowspan selected shape size sizes slot span spellcheck start step summary translate type valign value width wrap itemscope itemtype itemid itemprop itemref".split(" "),
        Nb = [
            ["dir", {
                Rb: 3,
                conditions: new Map([
                    ["dir", new Set(["auto", "ltr", "rtl"])]
                ])
            }],
            ["async", {
                Rb: 3,
                conditions: new Map([
                    ["async", new Set(["async"])]
                ])
            }],
            ["cite", {
                Rb: 2
            }],
            ["loading", {
                Rb: 3,
                conditions: new Map([
                    ["loading", new Set(["eager", "lazy"])]
                ])
            }],
            ["poster", {
                Rb: 2
            }],
            ["target", {
                Rb: 3,
                conditions: new Map([
                    ["target", new Set(["_self", "_blank"])]
                ])
            }]
        ];
    Mb.concat(["class", "id"]);
    Nb.concat([
        ["style", {
            Rb: 4
        }]
    ]);
    "ARTICLE SECTION NAV ASIDE H1 H2 H3 H4 H5 H6 HEADER FOOTER ADDRESS P HR PRE BLOCKQUOTE OL UL LH LI DL DT DD FIGURE FIGCAPTION MAIN DIV EM STRONG SMALL S CITE Q DFN ABBR RUBY RB RT RTC RP DATA TIME CODE VAR SAMP KBD SUB SUP I B U MARK BDI BDO SPAN BR WBR INS DEL PICTURE PARAM TRACK MAP TABLE CAPTION COLGROUP COL TBODY THEAD TFOOT TR TD TH SELECT DATALIST OPTGROUP OPTION OUTPUT PROGRESS METER FIELDSET LEGEND DETAILS SUMMARY MENU DIALOG SLOT CANVAS FONT CENTER".split(" ").concat("STYLE TITLE INPUT TEXTAREA BUTTON LABEL".split(" "));
    Mb.concat(["class", "id", "tabindex", "contenteditable", "name"]);
    Nb.concat([
        ["style", {
            Rb: 4
        }]
    ]);

    function Ob(a) {
        var b = a = Pb(a),
            c = kb(),
            d = c ? c.createHTML(b) : b;
        return new Eb(d, Db)
    }

    function Pb(a) {
        return null === a ? "null" : void 0 === a ? "undefined" : a
    };
    var C = window,
        E = document,
        Qb = navigator,
        Rb = E.currentScript && E.currentScript.src,
        Sb = function(a, b) {
            var c = C[a];
            C[a] = void 0 === c ? b : c;
            return C[a]
        },
        Tb = function(a, b) {
            b && (a.addEventListener ? a.onload = b : a.onreadystatechange = function() {
                a.readyState in {
                    loaded: 1,
                    complete: 1
                } && (a.onreadystatechange = null, b())
            })
        },
        Ub = {
            nonce: 1,
            onerror: 1,
            onload: 1,
            src: 1,
            type: 1
        },
        Vb = {
            onload: 1,
            src: 1,
            width: 1,
            height: 1,
            style: 1
        };

    function Wb(a, b, c) {
        b && k(b, function(d, e) {
            d = d.toLowerCase();
            c.hasOwnProperty(d) || a.setAttribute(d, e)
        })
    }
    var Xb = function(a, b, c, d, e) {
            var f = E.createElement("script");
            void 0 === d && (d = {});
            void 0 === d.async && (d.async = !0);
            Wb(f, d, Ub);
            f.type = "text/javascript";
            var h, l = Pb(a),
                m = kb(),
                n = m ? m.createScriptURL(l) : l;
            h = new lb(n, mb);
            f.src = h instanceof lb && h.constructor === lb ? h.h : "type_error:TrustedResourceUrl";
            var p, q, r, t = null == (r = (q = (f.ownerDocument && f.ownerDocument.defaultView || window).document).querySelector) ? void 0 : r.call(q, "script[nonce]");
            (p = t ? t.nonce || t.getAttribute("nonce") || "" : "") && f.setAttribute("nonce", p);
            Tb(f,
                b);
            c && (f.onerror = c);
            if (e) e.appendChild(f);
            else {
                var u = E.getElementsByTagName("script")[0] || E.body || E.head;
                u.parentNode.insertBefore(f, u)
            }
            return f
        },
        Yb = function() {
            if (Rb) {
                var a = Rb.toLowerCase();
                if (0 === a.indexOf("https://")) return 2;
                if (0 === a.indexOf("http://")) return 3
            }
            return 1
        },
        Zb = function(a, b, c, d, e) {
            var f;
            f = void 0 === f ? !0 : f;
            var h = e,
                l = !1;
            h || (h = E.createElement("iframe"), l = !0);
            Wb(h, c, Vb);
            d && k(d, function(n, p) {
                h.dataset[n] = p
            });
            f && (h.height = "0", h.width = "0", h.style.display = "none", h.style.visibility = "hidden");
            if (l) {
                var m = E.body && E.body.lastChild || E.body || E.head;
                m.parentNode.insertBefore(h, m)
            }
            Tb(h, b);
            void 0 !== a && (h.src = a);
            return h
        },
        $b = function(a, b, c, d) {
            var e = new Image(1, 1);
            Wb(e, d, {});
            e.onload = function() {
                e.onload = null;
                b && b()
            };
            e.onerror = function() {
                e.onerror = null;
                c && c()
            };
            e.src = a
        },
        ac = function(a, b, c, d) {
            a.addEventListener ? a.addEventListener(b, c, !!d) : a.attachEvent && a.attachEvent("on" + b, c)
        },
        bc = function(a, b, c) {
            a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent && a.detachEvent("on" + b, c)
        },
        H = function(a) {
            C.setTimeout(a,
                0)
        },
        cc = function(a, b) {
            return a && b && a.attributes && a.attributes[b] ? a.attributes[b].value : null
        },
        dc = function(a) {
            var b = a.innerText || a.textContent || "";
            b && " " != b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""));
            b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
            return b
        },
        ec = function(a) {
            var b = E.createElement("div"),
                c = b,
                d = Ob("A<div>" + a + "</div>");
            1 === c.nodeType && Gb(c);
            c.innerHTML = Fb(d);
            b = b.lastChild;
            for (var e = []; b.firstChild;) e.push(b.removeChild(b.firstChild));
            return e
        },
        fc = function(a, b, c) {
            c = c || 100;
            for (var d = {}, e = 0; e <
                b.length; e++) d[b[e]] = !0;
            for (var f = a, h = 0; f && h <= c; h++) {
                if (d[String(f.tagName).toLowerCase()]) return f;
                f = f.parentElement
            }
            return null
        },
        hc = function(a) {
            var b;
            try {
                b = Qb.sendBeacon && Qb.sendBeacon(a)
            } catch (c) {
                fb("TAGGING", 15)
            }
            b || $b(a)
        },
        ic = function(a, b) {
            var c = a[b];
            c && "string" === typeof c.animVal && (c = c.animVal);
            return c
        },
        jc = function(a) {
            var b = {
                headers: {
                    "Attribution-Reporting-Eligible": "trigger"
                },
                keepalive: !0,
                attributionReporting: {
                    eventSourceEligible: !0,
                    triggerEligible: !0
                }
            };
            try {
                C.fetch(a, b)
            } catch (c) {}
        },
        kc = function() {
            var a =
                C.performance;
            if (a && ta(a.now)) return a.now()
        },
        lc = function() {
            return C.performance || void 0
        };

    function mc(a) {
        switch (a) {
            case 1:
                return "1";
            case 2:
            case 4:
                return "0";
            default:
                return "-"
        }
    }

    function nc(a) {
        switch (a) {
            case 1:
                return "G";
            case 3:
                return "g";
            case 2:
                return "D";
            case 4:
                return "d";
            case 0:
                return "g";
            default:
                return "g"
        }
    }

    function oc(a, b) {
        var c = a[1] || 0,
            d = a[2] || 0;
        switch (b) {
            case 0:
                return "G1" + mc(c) + mc(d);
            case 1:
                return "G2" + nc(c) + nc(d);
            default:
                return "g1--"
        }
    };
    var pc = function() {
        var a = function(b) {
            return {
                toString: function() {
                    return b
                }
            }
        };
        return {
            Gi: a("consent"),
            vg: a("convert_case_to"),
            wg: a("convert_false_to"),
            xg: a("convert_null_to"),
            yg: a("convert_true_to"),
            zg: a("convert_undefined_to"),
            Ul: a("debug_mode_metadata"),
            ia: a("function"),
            Df: a("instance_name"),
            Mj: a("live_only"),
            Nj: a("malware_disabled"),
            Oj: a("metadata"),
            Rj: a("original_activity_id"),
            dm: a("original_vendor_template_id"),
            bm: a("once_on_load"),
            Qj: a("once_per_event"),
            Ch: a("once_per_load"),
            im: a("priority_override"),
            jm: a("respected_consent_types"),
            Gh: a("setup_tags"),
            rd: a("tag_id"),
            Lh: a("teardown_tags")
        }
    }();
    var Nc = [],
        Oc = function(a) {
            return void 0 == Nc[a] ? !1 : Nc[a]
        };
    var Pc;
    var Qc = [],
        Rc = [],
        Sc = [],
        Tc = [],
        Uc = [],
        Vc = {},
        Wc, Xc, Yc = function(a) {
            Xc = Xc || a
        },
        Zc = function(a) {},
        $c, ad = [],
        bd = function(a, b) {
            var c = a[pc.ia],
                d = b && b.event;
            if (!c) throw Error("Error: No function name given for function call.");
            var e = Vc[c],
                f = b && 2 === b.type && d.kg && e && -1 !== ad.indexOf(c),
                h = {},
                l = {},
                m;
            for (m in a) a.hasOwnProperty(m) && 0 === m.indexOf("vtp_") && (e && d && d.Qh && d.Qh(a[m]), e && (h[m] = a[m]), !e || f) && (l[m.substr(4)] = a[m]);
            e && d && d.Ph && (h.vtp_gtmCachedValues = d.Ph);
            if (b) {
                if (null == b.name) {
                    var n;
                    a: {
                        var p = b.index;
                        if (null == p) n = "";
                        else {
                            var q;
                            switch (b.type) {
                                case 2:
                                    q = Qc[p];
                                    break;
                                case 1:
                                    q = Tc[p];
                                    break;
                                default:
                                    n = "";
                                    break a
                            }
                            var r = q && q[pc.Df];
                            n = r ? String(r) : ""
                        }
                    }
                    b.name = n
                }
                e && (h.vtp_gtmEntityIndex = b.index, h.vtp_gtmEntityName = b.name)
            }
            var t, u;
            e &&
                (t = e(h));
            if (!e || f) u = Pc(c, l, b);
            f && d && (Ya(t) ? typeof t !== typeof u && d.kg(d.id, c) : t !== u && d.kg(d.id, c));
            return e ? t : u
        },
        dd = function(a, b, c) {
            c = c || [];
            var d = {},
                e;
            for (e in a) a.hasOwnProperty(e) && (d[e] = cd(a[e], b, c));
            return d
        },
        cd = function(a, b, c) {
            if (va(a)) {
                var d;
                switch (a[0]) {
                    case "function_id":
                        return a[1];
                    case "list":
                        d = [];
                        for (var e = 1; e < a.length; e++) d.push(cd(a[e], b, c));
                        return d;
                    case "macro":
                        var f = a[1];
                        if (c[f]) return;
                        var h = Qc[f];
                        if (!h || b.Uf(h)) return;
                        c[f] = !0;
                        var l = String(h[pc.Df]);
                        try {
                            var m = dd(h, b, c);
                            m.vtp_gtmEventId =
                                b.id;
                            b.priorityId && (m.vtp_gtmPriorityId = b.priorityId);
                            d = bd(m, {
                                event: b,
                                index: f,
                                type: 2,
                                name: l
                            });
                            $c && (d = $c.hk(d, m))
                        } catch (y) {
                            b.bi && b.bi(y, Number(f), l), d = !1
                        }
                        c[f] = !1;
                        return d;
                    case "map":
                        d = {};
                        for (var n = 1; n < a.length; n += 2) d[cd(a[n], b, c)] = cd(a[n + 1], b, c);
                        return d;
                    case "template":
                        d = [];
                        for (var p = !1, q = 1; q < a.length; q++) {
                            var r = cd(a[q], b, c);
                            Xc && (p = p || Xc.Sk(r));
                            d.push(r)
                        }
                        return Xc && p ? Xc.kk(d) : d.join("");
                    case "escape":
                        d = cd(a[1], b, c);
                        if (Xc && va(a[1]) && "macro" === a[1][0] && Xc.Tk(a)) return Xc.vl(d);
                        d = String(d);
                        for (var t =
                                2; t < a.length; t++) qc[a[t]] && (d = qc[a[t]](d));
                        return d;
                    case "tag":
                        var u = a[1];
                        if (!Tc[u]) throw Error("Unable to resolve tag reference " + u + ".");
                        return d = {
                            Uh: a[2],
                            index: u
                        };
                    case "zb":
                        var v = {
                            arg0: a[2],
                            arg1: a[3],
                            ignore_case: a[5]
                        };
                        v[pc.ia] = a[1];
                        var w = ed(v, b, c),
                            x = !!a[4];
                        return x || 2 !== w ? x !== (1 === w) : null;
                    default:
                        throw Error("Attempting to expand unknown Value type: " + a[0] + ".");
                }
            }
            return a
        },
        ed = function(a, b, c) {
            try {
                return Wc(dd(a, b, c))
            } catch (d) {
                JSON.stringify(a)
            }
            return 2
        },
        fd = function(a) {
            var b = a[pc.ia];
            if (!b) throw Error("Error: No function name given for function call.");
            return !!Vc[b]
        };
    var jd = function(a) {
            function b(r) {
                for (var t = 0; t < r.length; t++) d[r[t]] = !0
            }
            for (var c = [], d = [], e = hd(a), f = 0; f < Rc.length; f++) {
                var h = Rc[f],
                    l = id(h, e);
                if (l) {
                    for (var m = h.add || [], n = 0; n < m.length; n++) c[m[n]] = !0;
                    b(h.block || [])
                } else null === l && b(h.block || []);
            }
            for (var p = [], q = 0; q < Tc.length; q++) c[q] && !d[q] && (p[q] = !0);
            return p
        },
        id = function(a, b) {
            for (var c = a["if"] || [], d = 0; d < c.length; d++) {
                var e = b(c[d]);
                if (0 === e) return !1;
                if (2 === e) return null
            }
            for (var f =
                    a.unless || [], h = 0; h < f.length; h++) {
                var l = b(f[h]);
                if (2 === l) return null;
                if (1 === l) return !1
            }
            return !0
        },
        hd = function(a) {
            var b = [];
            return function(c) {
                void 0 === b[c] && (b[c] = ed(Sc[c], a));
                return b[c]
            }
        };
    var kd = {
        hk: function(a, b) {
            b[pc.vg] && "string" === typeof a && (a = 1 == b[pc.vg] ? a.toLowerCase() : a.toUpperCase());
            b.hasOwnProperty(pc.xg) && null === a && (a = b[pc.xg]);
            b.hasOwnProperty(pc.zg) && void 0 === a && (a = b[pc.zg]);
            b.hasOwnProperty(pc.yg) && !0 === a && (a = b[pc.yg]);
            b.hasOwnProperty(pc.wg) && !1 === a && (a = b[pc.wg]);
            return a
        }
    };
    var yd = ["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"],
        zd = new Aa;
    var Gd = /^[1-9a-zA-Z_-][1-9a-c][1-9a-v]\d$/;

    function Hd(a, b) {
        return "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [a << 2 | b]
    };
    var Jd = function(a) {
            return Id ? E.querySelectorAll(a) : null
        },
        Kd = function(a, b) {
            if (!Id) return null;
            if (Element.prototype.closest) try {
                return a.closest(b)
            } catch (e) {
                return null
            }
            var c = Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector,
                d = a;
            if (!E.documentElement.contains(d)) return null;
            do {
                try {
                    if (c.call(d, b)) return d
                } catch (e) {
                    break
                }
                d = d.parentElement || d.parentNode
            } while (null !== d && 1 === d.nodeType);
            return null
        },
        Ld = !1;
    if (E.querySelectorAll) try {
        var Md = E.querySelectorAll(":root");
        Md && 1 == Md.length && Md[0] == E.documentElement && (Ld = !0)
    } catch (a) {}
    var Id = Ld;
    var J = function(a) {
        fb("GTM", a)
    };
    var K = {
            g: {
                Ta: "ad_personalization",
                F: "ad_storage",
                J: "ad_user_data",
                N: "analytics_storage",
                Wb: "region",
                Rd: "consent_updated",
                Xe: "wait_for_update",
                Ki: "ads",
                Tl: "all",
                Li: "android",
                Mi: "chrome",
                Ni: "playstore",
                Oi: "search",
                Pi: "shopping",
                Qi: "youtube",
                Ri: "app_remove",
                Si: "app_store_refund",
                Ti: "app_store_subscription_cancel",
                Ui: "app_store_subscription_convert",
                Vi: "app_store_subscription_renew",
                Ag: "add_payment_info",
                Bg: "add_shipping_info",
                Xb: "add_to_cart",
                Yb: "remove_from_cart",
                Cg: "view_cart",
                Eb: "begin_checkout",
                Zb: "select_item",
                Ua: "view_item_list",
                hb: "select_promotion",
                Va: "view_promotion",
                ka: "purchase",
                ac: "refund",
                xa: "view_item",
                Dg: "add_to_wishlist",
                Wi: "exception",
                Xi: "first_open",
                Yi: "first_visit",
                la: "gtag.config",
                Ha: "gtag.get",
                Zi: "in_app_purchase",
                bc: "page_view",
                aj: "screen_view",
                bj: "session_start",
                cj: "timing_complete",
                dj: "track_social",
                Td: "user_engagement",
                ib: "gclid",
                ma: "ads_data_redaction",
                Z: "allow_ad_personalization_signals",
                cf: "allow_custom_scripts",
                df: "allow_display_features",
                Ud: "allow_enhanced_conversions",
                jb: "allow_google_signals",
                Ba: "allow_interest_groups",
                ej: "app_id",
                fj: "app_installer_id",
                gj: "app_name",
                ij: "app_version",
                fc: "auid",
                jj: "auto_detection_enabled",
                Fb: "aw_remarketing",
                ef: "aw_remarketing_only",
                Vd: "discount",
                Wd: "aw_feed_country",
                Xd: "aw_feed_language",
                T: "items",
                Yd: "aw_merchant_id",
                Eg: "aw_basket_type",
                Bc: "campaign_content",
                Cc: "campaign_id",
                Dc: "campaign_medium",
                Ec: "campaign_name",
                Fc: "campaign",
                Gc: "campaign_source",
                Hc: "campaign_term",
                Wa: "client_id",
                kj: "content_group",
                lj: "content_type",
                Ia: "conversion_cookie_prefix",
                Ic: "conversion_id",
                ya: "conversion_linker",
                Gb: "conversion_api",
                Oa: "cookie_domain",
                Ca: "cookie_expires",
                Pa: "cookie_flags",
                hc: "cookie_name",
                Jc: "cookie_path",
                Ja: "cookie_prefix",
                kb: "cookie_update",
                ic: "country",
                na: "currency",
                Zd: "customer_lifetime_value",
                Kc: "custom_map",
                Fg: "gcldc",
                mj: "debug_mode",
                W: "developer_id",
                nj: "disable_merchant_reported_purchases",
                Lc: "dc_custom_params",
                oj: "dc_natural_search",
                Gg: "dynamic_event_settings",
                Hg: "affiliation",
                ae: "checkout_option",
                ff: "checkout_step",
                Ig: "coupon",
                Mc: "item_list_name",
                hf: "list_name",
                pj: "promotions",
                Nc: "shipping",
                jf: "tax",
                be: "engagement_time_msec",
                Oc: "enhanced_client_id",
                ce: "enhanced_conversions",
                Jg: "enhanced_conversions_automatic_settings",
                de: "estimated_delivery_date",
                kf: "euid_logged_in_state",
                Pc: "event_callback",
                qj: "event_category",
                lb: "event_developer_id_string",
                rj: "event_label",
                Kg: "event",
                ee: "event_settings",
                fe: "event_timeout",
                sj: "description",
                tj: "fatal",
                uj: "experiments",
                lf: "firebase_id",
                he: "first_party_collection",
                ie: "_x_20",
                Hb: "_x_19",
                Lg: "fledge",
                Mg: "flight_error_code",
                Ng: "flight_error_message",
                Og: "fl_activity_category",
                Pg: "fl_activity_group",
                nf: "fl_advertiser_id",
                Qg: "fl_ar_dedupe",
                Rg: "fl_random_number",
                Sg: "tran",
                Tg: "u",
                je: "gac_gclid",
                jc: "gac_wbraid",
                Ug: "gac_wbraid_multiple_conversions",
                Vg: "ga_restrict_domain",
                pf: "ga_temp_client_id",
                ke: "gdpr_applies",
                Wg: "geo_granularity",
                nb: "value_callback",
                Ya: "value_key",
                Wl: "google_ono",
                Za: "google_signals",
                Xg: "google_tld",
                me: "groups",
                Yg: "gsa_experiment_id",
                Zg: "iframe_state",
                Qc: "ignore_referrer",
                qf: "internal_traffic_results",
                pb: "is_legacy_converted",
                qb: "is_legacy_loaded",
                ne: "is_passthrough",
                ah: "_lps",
                Da: "language",
                rf: "legacy_developer_id_string",
                za: "linker",
                kc: "accept_incoming",
                rb: "decorate_forms",
                O: "domains",
                Ib: "url_position",
                bh: "method",
                vj: "name",
                Rc: "new_customer",
                eh: "non_interaction",
                wj: "optimize_id",
                xj: "page_hostname",
                Sc: "page_path",
                Aa: "page_referrer",
                sb: "page_title",
                fh: "passengers",
                gh: "phone_conversion_callback",
                yj: "phone_conversion_country_code",
                hh: "phone_conversion_css_class",
                zj: "phone_conversion_ids",
                ih: "phone_conversion_number",
                jh: "phone_conversion_options",
                Tc: "quantity",
                Uc: "redact_device_info",
                tf: "redact_enhanced_user_id",
                Aj: "redact_ga_client_id",
                Bj: "redact_user_id",
                oe: "referral_exclusion_definition",
                Jb: "restricted_data_processing",
                Cj: "retoken",
                Dj: "sample_rate",
                uf: "screen_name",
                tb: "screen_resolution",
                Ej: "search_term",
                Ka: "send_page_view",
                Kb: "send_to",
                Vc: "server_container_url",
                Wc: "session_duration",
                pe: "session_engaged",
                vf: "session_engaged_time",
                ub: "session_id",
                qe: "session_number",
                Xc: "delivery_postal_code",
                kh: "temporary_client_id",
                wf: "topmost_url",
                Fj: "tracking_id",
                xf: "traffic_type",
                qa: "transaction_id",
                Lb: "transport_url",
                lh: "trip_type",
                Mb: "update",
                vb: "url_passthrough",
                Yc: "_user_agent_architecture",
                Zc: "_user_agent_bitness",
                ad: "_user_agent_full_version_list",
                bd: "_user_agent_mobile",
                dd: "_user_agent_model",
                ed: "_user_agent_platform",
                fd: "_user_agent_platform_version",
                gd: "_user_agent_wow64",
                ra: "user_data",
                mh: "user_data_auto_latency",
                nh: "user_data_auto_meta",
                oh: "user_data_auto_multi",
                ph: "user_data_auto_selectors",
                qh: "user_data_auto_status",
                yf: "user_data_mode",
                te: "user_data_settings",
                wa: "user_id",
                La: "user_properties",
                rh: "_user_region",
                sh: "us_privacy_string",
                aa: "value",
                mc: "wbraid",
                th: "wbraid_multiple_conversions",
                zh: "_host_name",
                Ah: "_in_page_command",
                Bh: "_is_passthrough_cid",
                md: "non_personalized_ads",
                qd: "_sst_parameters",
                Xa: "conversion_label",
                oa: "page_location",
                ob: "global_developer_id_string",
                se: "tc_privacy_string"
            }
        },
        je = {},
        ke = Object.freeze((je[K.g.Z] = 1, je[K.g.df] = 1, je[K.g.Ud] = 1, je[K.g.jb] = 1, je[K.g.T] = 1, je[K.g.Oa] = 1, je[K.g.Ca] = 1, je[K.g.Pa] = 1, je[K.g.hc] = 1, je[K.g.Jc] = 1, je[K.g.Ja] =
            1, je[K.g.kb] = 1, je[K.g.Kc] = 1, je[K.g.W] = 1, je[K.g.Gg] = 1, je[K.g.Pc] = 1, je[K.g.ee] = 1, je[K.g.fe] = 1, je[K.g.he] = 1, je[K.g.Vg] = 1, je[K.g.Za] = 1, je[K.g.Xg] = 1, je[K.g.me] = 1, je[K.g.qf] = 1, je[K.g.pb] = 1, je[K.g.qb] = 1, je[K.g.za] = 1, je[K.g.tf] = 1, je[K.g.oe] = 1, je[K.g.Jb] = 1, je[K.g.Ka] = 1, je[K.g.Kb] = 1, je[K.g.Vc] = 1, je[K.g.Wc] = 1, je[K.g.vf] = 1, je[K.g.Xc] = 1, je[K.g.Lb] = 1, je[K.g.Mb] = 1, je[K.g.te] = 1, je[K.g.La] = 1, je[K.g.qd] = 1, je));
    Object.freeze([K.g.oa, K.g.Aa, K.g.sb, K.g.Da, K.g.uf, K.g.wa, K.g.lf, K.g.kj]);
    var le = {},
        me = Object.freeze((le[K.g.Ri] = 1, le[K.g.Si] = 1, le[K.g.Ti] = 1, le[K.g.Ui] = 1, le[K.g.Vi] = 1, le[K.g.Xi] = 1, le[K.g.Yi] = 1, le[K.g.Zi] = 1, le[K.g.bj] = 1, le[K.g.Td] = 1, le)),
        ne = {},
        oe = Object.freeze((ne[K.g.Ag] = 1, ne[K.g.Bg] = 1, ne[K.g.Xb] = 1, ne[K.g.Yb] = 1, ne[K.g.Cg] = 1, ne[K.g.Eb] = 1, ne[K.g.Zb] = 1, ne[K.g.Ua] = 1, ne[K.g.hb] = 1, ne[K.g.Va] = 1, ne[K.g.ka] = 1, ne[K.g.ac] = 1, ne[K.g.xa] = 1, ne[K.g.Dg] = 1, ne)),
        qe = Object.freeze([K.g.Z, K.g.jb, K.g.kb, K.g.Qc, K.g.Mb]),
        re = Object.freeze([].concat(qe)),
        se = Object.freeze([K.g.Ca, K.g.fe, K.g.Wc, K.g.vf,
            K.g.be
        ]),
        te = Object.freeze([].concat(se)),
        ue = {},
        ve = (ue[K.g.F] = "1", ue[K.g.N] = "2", ue[K.g.J] = "3", ue[K.g.Ta] = "4", ue),
        we = {},
        xe = Object.freeze((we[K.g.Z] = 1, we[K.g.Ud] = 1, we[K.g.Ba] = 1, we[K.g.Fb] = 1, we[K.g.ef] = 1, we[K.g.Vd] = 1, we[K.g.Wd] = 1, we[K.g.Xd] = 1, we[K.g.T] = 1, we[K.g.Yd] = 1, we[K.g.Ia] = 1, we[K.g.ya] = 1, we[K.g.Oa] = 1, we[K.g.Ca] = 1, we[K.g.Pa] = 1, we[K.g.Ja] = 1, we[K.g.na] = 1, we[K.g.Zd] = 1, we[K.g.W] = 1, we[K.g.nj] = 1, we[K.g.ce] = 1, we[K.g.de] = 1, we[K.g.lf] = 1, we[K.g.he] = 1, we[K.g.pb] = 1, we[K.g.qb] = 1, we[K.g.Da] = 1, we[K.g.Rc] = 1, we[K.g.oa] =
            1, we[K.g.Aa] = 1, we[K.g.gh] = 1, we[K.g.hh] = 1, we[K.g.ih] = 1, we[K.g.jh] = 1, we[K.g.Jb] = 1, we[K.g.Ka] = 1, we[K.g.Kb] = 1, we[K.g.Vc] = 1, we[K.g.Xc] = 1, we[K.g.qa] = 1, we[K.g.Lb] = 1, we[K.g.Mb] = 1, we[K.g.vb] = 1, we[K.g.ra] = 1, we[K.g.wa] = 1, we[K.g.aa] = 1, we)),
        ye = {},
        ze = Object.freeze((ye[K.g.Oi] = "s", ye[K.g.Qi] = "y", ye[K.g.Li] = "n", ye[K.g.Mi] = "c", ye[K.g.Ni] = "p", ye[K.g.Pi] = "h", ye[K.g.Ki] = "a", ye));
    Object.freeze(K.g);
    var Ae = {},
        Be = C.google_tag_manager = C.google_tag_manager || {},
        Ce = Math.random();
    Ae.Ef = "3960";
    Ae.pd = Number("0") || 0;
    Ae.da = "dataLayer";
    Ae.Ii = "ChAI8NL1pwYQ6Nme3+i34PJlEiQA6lLgmfHMormKpOnMFg/HCohsLT9UO59ap036aJcn2GJgMUcaAiUZ";
    var De = {
            __cl: 1,
            __ecl: 1,
            __ehl: 1,
            __evl: 1,
            __fal: 1,
            __fil: 1,
            __fsl: 1,
            __hl: 1,
            __jel: 1,
            __lcl: 1,
            __sdl: 1,
            __tl: 1,
            __ytl: 1
        },
        Ee = {
            __paused: 1,
            __tg: 1
        },
        Fe;
    for (Fe in De) De.hasOwnProperty(Fe) && (Ee[Fe] = 1);
    var Ge = Ea(""),
        He, Ie = !1;
    He = Ie;
    var Je, Ke = !1;
    Je = Ke;
    var Le, Me = !1;
    Le = Me;
    var Ne, Oe = !1;
    Ne = Oe;
    Ae.Sd = "www.googletagmanager.com";
    var Pe = "" + Ae.Sd + (He ? "/gtag/js" : "/gtm.js"),
        Qe = null,
        Re = null,
        Se = {},
        Te = {},
        Ue = {},
        Ve = function() {
            var a = Be.sequence || 1;
            Be.sequence = a + 1;
            return a
        };
    Ae.Hi = "";
    var We = "";
    Ae.xe = We;
    var Xe = new Aa,
        Ye = {},
        Ze = {},
        bf = {
            name: Ae.da,
            set: function(a, b) {
                z(Qa(a, b), Ye);
                $e()
            },
            get: function(a) {
                return af(a, 2)
            },
            reset: function() {
                Xe = new Aa;
                Ye = {};
                $e()
            }
        },
        af = function(a, b) {
            return 2 != b ? Xe.get(a) : cf(a)
        },
        cf = function(a) {
            var b, c = a.split(".");
            b = b || [];
            for (var d = Ye, e = 0; e < c.length; e++) {
                if (null === d) return !1;
                if (void 0 === d) break;
                d = d[c[e]];
                if (-1 !== b.indexOf(d)) return
            }
            return d
        },
        df = function(a, b) {
            Ze.hasOwnProperty(a) || (Xe.set(a, b), z(Qa(a, b), Ye), $e())
        },
        $e = function(a) {
            k(Ze, function(b, c) {
                Xe.set(b, c);
                z(Qa(b), Ye);
                z(Qa(b,
                    c), Ye);
                a && delete Ze[b]
            })
        },
        ef = function(a, b) {
            var c, d = 1 !== (void 0 === b ? 2 : b) ? cf(a) : Xe.get(a);
            "array" === Va(d) || "object" === Va(d) ? c = z(d) : c = d;
            return c
        };
    var M = [];
    M[5] = !0;
    M[6] = !0;
    M[11] = !0;
    M[7] = !0;
    M[8] = !0;
    M[21] = !0;
    M[9] = !0;
    M[10] = !0;
    M[13] = !0;
    M[14] = !0;
    M[15] = !0;
    M[17] = !0;
    M[23] = !0;
    M[24] = !0;
    M[25] = !0;
    M[27] = !0;
    M[19] = !0;
    M[28] = !0;
    M[31] = !0;
    M[32] = !0;
    M[33] = !0;
    M[34] = !0;
    M[36] = !0;
    M[37] = !0;
    M[39] = !0;
    M[41] = !0;
    M[42] = !0;
    M[43] = !0;
    M[44] = !0;


    M[55] = !0;
    M[56] = !0;
    M[57] = !0;
    M[58] = !0;
    M[60] = !0;
    M[61] = !0;
    M[66] = !0;
    M[69] = !0;
    M[72] = !0;
    a: {
        for (var mf = void 0, nf = void 0, of = 0; mf === nf;)
            if (mf = Math.floor(2 * Math.random()), nf = Math.floor(2 * Math.random()), of ++, 20 < of ) break a;mf ? M[75] = !0 : M[76] = !0
    }
    P(76) ? Nc[6] = !0 : P(75) && (Nc[5] = !0);
    M[79] = !0;
    M[85] = !0;
    M[86] = !0;
    M[89] = !0;
    M[92] = !0;
    M[95] = !0;
    M[97] = !0;

    function P(a) {
        return !!M[a]
    }
    var pf = function(a) {
        fb("HEALTH", a)
    };
    var qf;
    try {
        qf = JSON.parse(db("eyIwIjoiSU4iLCIxIjoiSU4tVE4iLCIyIjpmYWxzZSwiMyI6Imdvb2dsZS5jby5pbiIsIjQiOiIiLCI1Ijp0cnVlLCI2IjpmYWxzZSwiNyI6ImFkX3N0b3JhZ2V8YW5hbHl0aWNzX3N0b3JhZ2V8YWRfdXNlcl9kYXRhfGFkX3BlcnNvbmFsaXphdGlvbiJ9"))
    } catch (a) {
        J(123), pf(2), qf = {}
    }
    var rf = function() {
            return qf["0"] || ""
        },
        sf = function() {
            var a = !1;
            return a
        },
        tf = function() {
            var a = "";
            return a
        },
        uf = function() {
            var a = !1;
            return a
        },
        yf = function() {
            var a = "";
            return a
        };
    var zf = new function(a, b) {
        this.h = a;
        this.defaultValue = void 0 === b ? !1 : b
    }(1933);
    var Af = function(a) {
        Af[" "](a);
        return a
    };
    Af[" "] = function() {};
    var Cf = function() {
        var a = Bf,
            b = "Sf";
        if (a.Sf && a.hasOwnProperty(b)) return a.Sf;
        var c = new a;
        return a.Sf = c
    };
    var Bf = function() {
        var a = {};
        this.h = function() {
            var b = zf.h,
                c = zf.defaultValue;
            return null != a[b] ? a[b] : c
        };
        this.B = function() {
            a[zf.h] = !0
        }
    };
    var Df = !1,
        Ef = !1,
        Ff = {},
        Gf = {
            ad_storage: !1,
            ad_user_data: !1,
            ad_personalization: !1
        };

    function Hf() {
        var a = Sb("google_tag_data", {});
        return a.ics = a.ics || new If
    }
    var If = function() {
        this.entries = {};
        this.cps = {};
        this.wasSetLate = this.accessedAny = this.accessedDefault = this.usedSetCps = this.usedImplicit = this.usedUpdate = this.usedDefault = this.usedDeclare = this.active = !1;
        this.h = []
    };
    If.prototype.default = function(a, b, c, d, e, f) {
        this.usedDefault || !this.accessedDefault && !this.accessedAny || (this.wasSetLate = !0);
        this.usedDefault = this.active = !0;
        fb("TAGGING", 19);
        void 0 == b ? fb("TAGGING", 18) : Jf(this, a, "granted" === b, c, d, e, f)
    };
    If.prototype.waitForUpdate = function(a, b) {
        for (var c = 0; c < a.length; c++) Jf(this, a[c], void 0, void 0, "", "", b)
    };
    var Jf = function(a, b, c, d, e, f, h) {
        var l = a.entries,
            m = l[b] || {},
            n = m.region,
            p = d && g(d) ? d.toUpperCase() : void 0;
        e = e.toUpperCase();
        f = f.toUpperCase();
        if (Kf(p, n, e, f)) {
            var q = !!(h && 0 < h && void 0 === m.update),
                r = {
                    region: p,
                    declare_region: m.declare_region,
                    implicit: m.implicit,
                    default: void 0 !== c ? c : m.default,
                    declare: m.declare,
                    update: m.update,
                    quiet: q
                };
            if ("" !== e || !1 !== m.default) l[b] = r;
            q && C.setTimeout(function() {
                if (l[b] === r && r.quiet) {
                    r.quiet = !1;
                    var t = [b];
                    if (Oc(4))
                        for (var u in Ff) Ff.hasOwnProperty(u) && Ff[u] === b && t.push(u);
                    for (var v =
                            0; v < t.length; v++) Lf(a, t[v]);
                    a.notifyListeners();
                    fb("TAGGING", 2)
                }
            }, h)
        }
    };
    ca = If.prototype;
    ca.update = function(a, b) {
        this.usedDefault || this.usedUpdate || !this.accessedAny || (this.wasSetLate = !0);
        this.usedUpdate = this.active = !0;
        if (void 0 != b) {
            var c = this.getConsentState(a),
                d = this.entries,
                e = d[a] = d[a] || {};
            e.update = "granted" === b;
            var f = this.getConsentState(a),
                h = [a];
            if (Oc(4))
                for (var l in Ff) Ff.hasOwnProperty(l) && Ff[l] === a && h.push(l);
            if (e.quiet) {
                e.quiet = !1;
                for (var m = 0; m < h.length; m++) Lf(this, h[m])
            } else if (f !== c)
                for (var n = 0; n < h.length; n++) Lf(this, h[n])
        }
    };
    ca.declare = function(a, b, c, d, e) {
        this.usedDeclare = this.active = !0;
        var f = this.entries,
            h = f[a] || {},
            l = h.declare_region,
            m = c && g(c) ? c.toUpperCase() : void 0;
        d = d.toUpperCase();
        e = e.toUpperCase();
        if (Kf(m, l, d, e)) {
            var n = {
                region: h.region,
                declare_region: m,
                declare: "granted" === b,
                implicit: h.implicit,
                default: h.default,
                update: h.update,
                quiet: h.quiet
            };
            if ("" !== d || !1 !== h.declare) f[a] = n
        }
    };
    ca.implicit = function(a, b) {
        this.usedImplicit = !0;
        var c = this.entries,
            d = c[a] = c[a] || {};
        !1 !== d.implicit && (d.implicit = "granted" === b)
    };
    ca.getConsentState = function(a) {
        var b = this.entries,
            c = b[a] || {},
            d = c.update;
        if (void 0 !== d) return d ? 1 : 2;
        d = c.default;
        if (void 0 !== d) return d ? 1 : 2;
        if (Oc(4) && Ff.hasOwnProperty(a)) {
            var e = b[Ff[a]] || {};
            d = e.update;
            if (void 0 !== d) return d ? 1 : 2;
            d = e.default;
            if (void 0 !== d) return d ? 1 : 2
        }
        d = c.declare;
        if (void 0 !== d) return d ? 1 : 2;
        if (Oc(3)) {
            d = c.implicit;
            if (void 0 !== d) return d ? 3 : 4;
            if (Gf.hasOwnProperty(a)) return Gf[a] ? 3 : 4
        }
        return 0
    };
    ca.setCps = function(a, b, c, d, e) {
        var f;
        a: {
            var h = this.cps,
                l, m = h[a] || {},
                n = m.region,
                p = c && g(c) ? c.toUpperCase() : void 0;l = d.toUpperCase();
            if (Kf(p, n, l, e.toUpperCase())) {
                var q = {
                    enabled: "granted" === b,
                    region: p
                };
                if ("" !== l || !1 !== m.enabled) {
                    h[a] = q;
                    f = !0;
                    break a
                }
            }
            f = !1
        }
        f && (this.usedSetCps = !0)
    };
    ca.addListener = function(a, b) {
        this.h.push({
            consentTypes: a,
            sk: b
        })
    };
    var Lf = function(a, b) {
        for (var c = 0; c < a.h.length; ++c) {
            var d = a.h[c];
            va(d.consentTypes) && -1 !== d.consentTypes.indexOf(b) && (d.ii = !0)
        }
    };
    If.prototype.notifyListeners = function(a, b) {
        for (var c = 0; c < this.h.length; ++c) {
            var d = this.h[c];
            if (d.ii) {
                d.ii = !1;
                try {
                    d.sk({
                        consentEventId: a,
                        consentPriorityId: b
                    })
                } catch (e) {}
            }
        }
    };

    function Kf(a, b, c, d) {
        return "" === c || a === d ? !0 : a === c ? b !== d : !a && !b
    }
    var Mf = function(a) {
            var b = Hf();
            b.accessedAny = !0;
            switch (b.getConsentState(a)) {
                case 1:
                case 3:
                    return !0;
                case 2:
                case 4:
                    return !1;
                default:
                    return !0
            }
        },
        Nf = function(a) {
            var b = Hf();
            b.accessedAny = !0;
            return !(b.entries[a] || {}).quiet
        },
        Of = function() {
            if (!Cf().h()) return !1;
            var a = Hf();
            a.accessedAny = !0;
            return a.active
        },
        Pf = function() {
            var a = Hf();
            a.accessedDefault = !0;
            return a.usedDefault
        },
        Qf = function(a, b) {
            Hf().addListener(a, b)
        },
        Rf = function(a, b) {
            Hf().notifyListeners(a, b)
        },
        Sf = function(a, b) {
            function c() {
                for (var e = 0; e < b.length; e++)
                    if (!Nf(b[e])) return !0;
                return !1
            }
            if (c()) {
                var d = !1;
                Qf(b, function(e) {
                    d || c() || (d = !0, a(e))
                })
            } else a({})
        },
        Tf = function(a, b) {
            function c() {
                for (var f = [], h = 0; h < d.length; h++) {
                    var l = d[h];
                    Mf(l) && !e[l] && (f.push(l), e[l] = !0)
                }
                return f
            }
            var d = g(b) ? [b] : b,
                e = {};
            c().length !== d.length && Qf(d, function(f) {
                var h = c();
                0 < h.length && (f.consentTypes = h, a(f))
            })
        };

    function Uf() {}

    function Vf() {};
    var Wf = [K.g.F, K.g.N, K.g.J, K.g.Ta],
        Xf = function(a) {
            for (var b = a[K.g.Wb], c = Array.isArray(b) ? b : [b], d = {
                    Bd: 0
                }; d.Bd < c.length; d = {
                    Bd: d.Bd
                }, ++d.Bd) k(a, function(e) {
                return function(f, h) {
                    if (f !== K.g.Wb) {
                        var l = c[e.Bd],
                            m = rf(),
                            n = qf["1"] || "";
                        Ef = !0;
                        Df && fb("TAGGING", 20);
                        Hf().declare(f, h, l, m, n)
                    }
                }
            }(d))
        },
        Yf = function(a) {
            var b = a[K.g.Wb];
            b && J(40);
            var c = a[K.g.Xe];
            c && J(41);
            for (var d = va(b) ? b : [b], e = {
                    Cd: 0
                }; e.Cd < d.length; e = {
                    Cd: e.Cd
                }, ++e.Cd) k(a, function(f) {
                return function(h, l) {
                    if (h !== K.g.Wb && h !== K.g.Xe) {
                        var m = d[f.Cd],
                            n = Number(c),
                            p = rf(),
                            q = qf["1"] || "";
                        Df = !0;
                        Ef && fb("TAGGING", 20);
                        Hf().default(h, l, m, p, q, n)
                    }
                }
            }(e))
        },
        Zf = function(a, b) {
            k(a, function(c, d) {
                Df = !0;
                Ef && fb("TAGGING", 20);
                Hf().update(c, d)
            });
            Rf(b.eventId, b.priorityId)
        },
        $f = function(a) {
            for (var b = a[K.g.Wb], c = Array.isArray(b) ? b : [b], d = {
                    Dd: 0
                }; d.Dd < c.length; d = {
                    Dd: d.Dd
                }, ++d.Dd) k(a, function(e) {
                return function(f, h) {
                    if (f !== K.g.Wb) {
                        var l = c[e.Dd],
                            m = rf(),
                            n = qf["1"] || "";
                        Hf().setCps(f, h, l, m, n)
                    }
                }
            }(d))
        },
        Q = function(a) {
            Array.isArray(a) || (a = [a]);
            return a.every(function(b) {
                return Mf(b)
            })
        },
        ag = function(a,
            b) {
            Tf(a, b)
        },
        bg = function(a, b) {
            Sf(a, b)
        },
        cg = function(a) {
            Hf().waitForUpdate(a, 500)
        };
    var dg = function(a) {
            var b = String(a[pc.ia] || "").replace(/_/g, "");
            0 === b.indexOf("cvt") && (b = "cvt");
            return b
        },
        eg = 0 <= C.location.search.indexOf("?gtm_latency=") || 0 <= C.location.search.indexOf("&gtm_latency=");
    var gg = function(a) {
            var b = fg();
            b.pending || (b.pending = []);
            xa(b.pending, function(c) {
                return c.target.ctid === a.ctid && c.target.isDestination === a.isDestination
            }) || b.pending.push({
                target: a,
                onLoad: void 0
            })
        },
        hg = function() {
            this.container = {};
            this.destination = {};
            this.canonical = {};
            this.pending = [];
            this.siloed = []
        },
        fg = function() {
            var a = Sb("google_tag_data", {}),
                b = a.tidr;
            b || (b = new hg, a.tidr = b);
            return b
        };
    var ig = {},
        jg = !1,
        kg = {
            ctid: "GTM-MWVR38S",
            If: "",
            gi: "GTM-MWVR38S",
            hi: "GTM-MWVR38S"
        };
    ig.ld = Ea("");
    var ng = function() {
            var a = lg();
            return jg ? a.map(mg) : a
        },
        pg = function() {
            var a = og();
            return jg ? a.map(mg) : a
        },
        rg = function() {
            return qg(kg.ctid)
        },
        sg = function() {
            return qg(kg.If || "_" + kg.ctid)
        },
        lg = function() {
            return kg.gi ? kg.gi.split("|") : [kg.ctid]
        },
        og = function() {
            return kg.hi ? kg.hi.split("|") : []
        },
        tg = function(a) {
            var b = fg();
            return a.isDestination ? b.destination[a.ctid] : b.container[a.ctid]
        },
        qg = function(a) {
            return jg ? mg(a) : a
        },
        mg = function(a) {
            return "siloed_" + a
        },
        ug = function(a) {
            a = String(a);
            return jg && 0 === a.indexOf("siloed_") ?
                a.substring(7) : a
        },
        vg = function() {
            var a = !1;
            if (a) {
                var b = fg();
                if (b.siloed) {
                    for (var c = [], d = lg(), e = og(), f = {}, h = 0; h < b.siloed.length; f = {
                            vd: f.vd
                        }, h++) f.vd = b.siloed[h], !jg && xa(f.vd.isDestination ? e : d, function(l) {
                        return function(m) {
                            return m === l.vd.ctid
                        }
                    }(f)) ? jg = !0 : c.push(f.vd);
                    b.siloed = c
                }
            }
        };

    function wg() {
        var a = fg();
        if (a.pending) {
            for (var b, c = [], d = !1, e = ng(), f = pg(), h = {}, l = 0; l < a.pending.length; h = {
                    wc: h.wc
                }, l++) h.wc = a.pending[l], xa(h.wc.target.isDestination ? f : e, function(m) {
                return function(n) {
                    return n === m.wc.target.ctid
                }
            }(h)) ? d || (b = h.wc.onLoad, d = !0) : c.push(h.wc);
            a.pending = c;
            if (b) try {
                b(sg())
            } catch (m) {}
        }
    }
    var xg = function() {
            for (var a = fg(), b = ng(), c = 0; c < b.length; c++) {
                var d = a.container[b[c]];
                d ? (d.state = 2, d.containers = ng(), d.destinations = pg()) : a.container[b[c]] = {
                    state: 2,
                    containers: ng(),
                    destinations: pg()
                }
            }
            for (var e = pg(), f = 0; f < e.length; f++) {
                var h = a.destination[e[f]];
                h && 0 === h.state && J(93);
                h ? (h.state = 2, h.containers = ng(), h.destinations = pg()) : a.destination[e[f]] = {
                    state: 2,
                    containers: ng(),
                    destinations: pg()
                }
            }
            a.canonical[sg()] = {};
            wg()
        },
        yg = function(a) {
            return !!fg().container[a]
        },
        zg = function() {
            return {
                ctid: rg(),
                isDestination: ig.ld
            }
        };

    function Ag(a) {
        var b = fg();
        (b.siloed = b.siloed || []).push(a)
    }
    var Bg = function() {
            var a = fg().container,
                b;
            for (b in a)
                if (a.hasOwnProperty(b) && 1 === a[b].state) return !0;
            return !1
        },
        Cg = function() {
            var a = {};
            k(fg().destination, function(b, c) {
                0 === c.state && (a[b] = c)
            });
            return a
        },
        Dg = function(a) {
            return !!(a && a.parent && a.context && 1 === a.context.source && 0 !== a.parent.ctid.indexOf("GTM-"))
        };
    var Eg = {
            sampleRate: "0.005000",
            Di: "",
            Ci: Number("5"),
            ym: Number("")
        },
        Fg = [];

    function Gg(a) {
        Fg.push(a)
    }
    var Hg = !1,
        Ig;
    if (!(Ig = eg)) {
        var Jg = Math.random(),
            Kg = Eg.sampleRate;
        Ig = Jg < Number(Kg)
    }
    var Lg = Ig,
        Mg = "https://www.googletagmanager.com/a?id=" + kg.ctid,
        Ng = void 0,
        Og = {},
        Pg = void 0,
        Qg = new function() {
            var a = 5;
            0 < Eg.Ci && (a = Eg.Ci);
            this.h = 0;
            this.C = [];
            this.B = a
        },
        Rg = 1E3;

    function Sg(a, b) {
        var c = Ng;
        if (void 0 === c)
            if (b) c = Ve();
            else return "";
        for (var d = [Mg], e = 0; e < Fg.length; e++) {
            var f = Fg[e]({
                eventId: c,
                Cb: !!a,
                ri: function() {
                    Hg = !0
                }
            });
            "&" === f[0] && d.push(f)
        }
        d.push("&z=0");
        return d.join("")
    }

    function Tg() {
        Pg && (C.clearTimeout(Pg), Pg = void 0);
        if (void 0 !== Ng && Ug) {
            var a;
            (a = Og[Ng]) || (a = Qg.h < Qg.B ? !1 : 1E3 > Ja() - Qg.C[Qg.h % Qg.B]);
            if (a || 0 >= Rg--) J(1), Og[Ng] = !0;
            else {
                var b = Qg.h++ % Qg.B;
                Qg.C[b] = Ja();
                var c = Sg(!0);
                $b(c);
                if (Hg) {
                    var d = c.replace("/a?", "/td?");
                    $b(d)
                }
                Ug = Hg = !1
            }
        }
    }
    var Ug = !1;

    function Vg(a) {
        Og[a] || (a !== Ng && (Tg(), Ng = a), Ug = !0, Pg || (Pg = C.setTimeout(Tg, 500)), 2022 <= Sg().length && Tg())
    }
    var Wg = ya();

    function Xg() {
        Wg = ya()
    }

    function Yg() {
        return ["&v=3&t=t", "&pid=" + Wg].join("")
    };
    var Zg = function(a, b, c, d, e, f, h, l, m, n, p, q) {
            this.eventId = a;
            this.priorityId = b;
            this.h = c;
            this.M = d;
            this.C = e;
            this.I = f;
            this.U = h;
            this.B = l;
            this.eventMetadata = m;
            this.onSuccess = n;
            this.onFailure = p;
            this.isGtmEvent = q
        },
        T = function(a, b, c) {
            if (void 0 !== a.h[b]) return a.h[b];
            if (void 0 !== a.M[b]) return a.M[b];
            if (void 0 !== a.C[b]) return a.C[b];
            Lg && $g(a, a.I[b], a.U[b]) && (J(71), J(79));
            return void 0 !== a.I[b] ? a.I[b] : void 0 !== a.B[b] ? a.B[b] : c
        },
        ah = function(a) {
            function b(h) {
                for (var l = Object.keys(h), m = 0; m < l.length; ++m) c[l[m]] = 1
            }
            var c = {};
            b(a.h);
            b(a.M);
            b(a.C);
            b(a.I);
            if (Lg)
                for (var d = Object.keys(a.U), e = 0; e < d.length; e++) {
                    var f = d[e];
                    if ("event" !== f && "gtm" !== f && "tagTypeBlacklist" !== f && !c.hasOwnProperty(f)) {
                        J(71);
                        J(80);
                        break
                    }
                }
            return Object.keys(c)
        },
        bh = function(a, b, c) {
            function d(m) {
                Xa(m) && k(m, function(n, p) {
                    f = !0;
                    e[n] = p
                })
            }
            var e = {},
                f = !1;
            c && 1 !== c || (d(a.B[b]), d(a.I[b]), d(a.C[b]), d(a.M[b]));
            c && 2 !== c || d(a.h[b]);
            if (Lg) {
                var h = f,
                    l = e;
                e = {};
                f = !1;
                c && 1 !== c || (d(a.B[b]), d(a.U[b]), d(a.C[b]), d(a.M[b]));
                c && 2 !== c || d(a.h[b]);
                if (f !== h || $g(a, e, l)) J(71), J(81);
                f = h;
                e = l
            }
            return f ? e : void 0
        },
        jh = function(a) {
            var b = [K.g.Fc, K.g.Bc, K.g.Cc, K.g.Dc, K.g.Ec, K.g.Gc, K.g.Hc],
                c = {},
                d = !1,
                e = function(l) {
                    for (var m = 0; m < b.length; m++) void 0 !== l[b[m]] && (c[b[m]] = l[b[m]], d = !0);
                    return d
                };
            if (e(a.h) || e(a.M) || e(a.C)) return c;
            e(a.I);
            if (Lg) {
                var f = c,
                    h = d;
                c = {};
                d = !1;
                e(a.U);
                $g(a, c, f) && (J(71), J(82));
                c = f;
                d = h
            }
            if (d) return c;
            e(a.B);
            return c
        },
        $g = function(a, b, c) {
            if (!Lg) return !1;
            try {
                if (b === c) return !1;
                var d = Va(b);
                if (d !== Va(c) || !(Xa(b) && Xa(c) || "array" === d)) return !0;
                if ("array" === d) {
                    if (b.length !== c.length) return !0;
                    for (var e = 0; e < b.length; e++)
                        if ($g(a, b[e], c[e])) return !0
                } else {
                    for (var f in c)
                        if (!b.hasOwnProperty(f)) return !0;
                    for (var h in b)
                        if (!c.hasOwnProperty(h) || $g(a, b[h], c[h])) return !0
                }
            } catch (l) {
                J(72)
            }
            return !1
        },
        kh = function(a, b) {
            this.Bf = a;
            this.Ij = b;
            this.I = {};
            this.kd = {};
            this.h = {};
            this.M = {};
            this.B = {};
            this.jd = {};
            this.C = {};
            this.Ac = function() {};
            this.Db = function() {};
            this.U = !1
        },
        lh = function(a, b) {
            a.I = b;
            return a
        },
        mh = function(a, b) {
            a.kd = b;
            return a
        },
        nh = function(a, b) {
            a.h = b;
            return a
        },
        oh = function(a, b) {
            a.M = b;
            return a
        },
        ph = function(a,
            b) {
            a.B = b;
            return a
        },
        qh = function(a, b) {
            a.jd = b;
            return a
        },
        rh = function(a, b) {
            a.C = b || {};
            return a
        },
        sh = function(a, b) {
            a.Ac = b;
            return a
        },
        th = function(a, b) {
            a.Db = b;
            return a
        },
        uh = function(a, b) {
            a.U = b;
            return a
        },
        vh = function(a) {
            return new Zg(a.Bf, a.Ij, a.I, a.kd, a.h, a.M, a.B, a.jd, a.C, a.Ac, a.Db, a.U)
        };

    function wh(a, b) {
        if ("" === a) return b;
        var c = Number(a);
        return isNaN(c) ? b : c
    };
    var xh = function(a, b) {
            var c = function() {};
            c.prototype = a.prototype;
            var d = new c;
            a.apply(d, Array.prototype.slice.call(arguments, 1));
            return d
        },
        yh = function(a) {
            var b = a;
            return function() {
                if (b) {
                    var c = b;
                    b = null;
                    c()
                }
            }
        };
    var zh = function(a, b, c) {
        a.addEventListener && a.addEventListener(b, c, !1)
    };

    function Ah() {
        return ob ? !!vb && !!vb.platform : !1
    }

    function Bh() {
        return yb("iPhone") && !yb("iPod") && !yb("iPad")
    }

    function Ch() {
        Bh() || yb("iPad") || yb("iPod")
    };
    Ab();
    zb() || yb("Trident") || yb("MSIE");
    yb("Edge");
    !yb("Gecko") || -1 != ub().toLowerCase().indexOf("webkit") && !yb("Edge") || yb("Trident") || yb("MSIE") || yb("Edge"); - 1 != ub().toLowerCase().indexOf("webkit") && !yb("Edge") && yb("Mobile");
    Ah() || yb("Macintosh");
    Ah() || yb("Windows");
    (Ah() ? "Linux" === vb.platform : yb("Linux")) || Ah() || yb("CrOS");
    var Dh = qa.navigator || null;
    Dh && (Dh.appVersion || "").indexOf("X11");
    Ah() || yb("Android");
    Bh();
    yb("iPad");
    yb("iPod");
    Ch();
    ub().toLowerCase().indexOf("kaios");
    var Eh = function(a, b, c, d) {
            for (var e = b, f = c.length; 0 <= (e = a.indexOf(c, e)) && e < d;) {
                var h = a.charCodeAt(e - 1);
                if (38 == h || 63 == h) {
                    var l = a.charCodeAt(e + f);
                    if (!l || 61 == l || 38 == l || 35 == l) return e
                }
                e += f + 1
            }
            return -1
        },
        Fh = /#|$/,
        Gh = function(a, b) {
            var c = a.search(Fh),
                d = Eh(a, 0, b, c);
            if (0 > d) return null;
            var e = a.indexOf("&", d);
            if (0 > e || e > c) e = c;
            d += b.length + 1;
            return decodeURIComponent(a.slice(d, -1 !== e ? e : 0).replace(/\+/g, " "))
        },
        Hh = /[?&]($|#)/,
        Ih = function(a, b, c) {
            for (var d, e = a.search(Fh), f = 0, h, l = []; 0 <= (h = Eh(a, f, b, e));) l.push(a.substring(f,
                h)), f = Math.min(a.indexOf("&", h) + 1 || e, e);
            l.push(a.slice(f));
            d = l.join("").replace(Hh, "$1");
            var m, n = null != c ? "=" + encodeURIComponent(String(c)) : "";
            var p = b + n;
            if (p) {
                var q, r = d.indexOf("#");
                0 > r && (r = d.length);
                var t = d.indexOf("?"),
                    u;
                0 > t || t > r ? (t = r, u = "") : u = d.substring(t + 1, r);
                q = [d.slice(0, t), u, d.slice(r)];
                var v = q[1];
                q[1] = p ? v ? v + "&" + p : p : v;
                m = q[0] + (q[1] ? "?" + q[1] : "") + q[2]
            } else m = d;
            return m
        };
    var Jh = function(a) {
            try {
                var b;
                if (b = !!a && null != a.location.href) a: {
                    try {
                        Af(a.foo);
                        b = !0;
                        break a
                    } catch (c) {}
                    b = !1
                }
                return b
            } catch (c) {
                return !1
            }
        },
        Kh = function(a, b) {
            if (a)
                for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
        };

    function Lh(a) {
        if (!a || !E.head) return null;
        var b = Mh("META");
        E.head.appendChild(b);
        b.httpEquiv = "origin-trial";
        b.content = a;
        return b
    }
    var Nh = function() {
            if (C.top == C) return 0;
            var a = C.location.ancestorOrigins;
            return a ? a[a.length - 1] == C.location.origin ? 1 : 2 : Jh(C.top) ? 1 : 2
        },
        Mh = function(a, b) {
            b = void 0 === b ? document : b;
            return b.createElement(String(a).toLowerCase())
        };

    function Oh(a, b, c, d) {
        d = void 0 === d ? !1 : d;
        a.google_image_requests || (a.google_image_requests = []);
        var e = Mh("IMG", a.document);
        if (c) {
            var f = function() {
                if (c) {
                    var h = a.google_image_requests,
                        l = ib(h, e);
                    0 <= l && Array.prototype.splice.call(h, l, 1)
                }
                e.removeEventListener && e.removeEventListener("load", f, !1);
                e.removeEventListener && e.removeEventListener("error", f, !1)
            };
            zh(e, "load", f);
            zh(e, "error", f)
        }
        d && (e.attributionSrc = "");
        e.src = b;
        a.google_image_requests.push(e)
    }
    var Qh = function(a) {
            var b;
            b = void 0 === b ? !1 : b;
            var c = "https://pagead2.googlesyndication.com/pagead/gen_204?id=tcfe";
            Kh(a, function(d, e) {
                if (d || 0 === d) c += "&" + e + "=" + encodeURIComponent("" + d)
            });
            Ph(c, b)
        },
        Ph = function(a, b) {
            var c = window,
                d;
            b = void 0 === b ? !1 : b;
            d = void 0 === d ? !1 : d;
            if (c.fetch) {
                var e = {
                    keepalive: !0,
                    credentials: "include",
                    redirect: "follow",
                    method: "get",
                    mode: "no-cors"
                };
                d && (e.mode = "cors", "setAttributionReporting" in XMLHttpRequest.prototype ? e.attributionReporting = {
                        eventSourceEligible: "true",
                        triggerEligible: "false"
                    } :
                    e.headers = {
                        "Attribution-Reporting-Eligible": "event-source"
                    });
                c.fetch(a, e)
            } else Oh(c, a, void 0 === b ? !1 : b, void 0 === d ? !1 : d)
        };
    var Rh = function() {};
    var Sh = function(a) {
            void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = void 0);
            void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = void 0);
            return void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.listenerId && "number" !== typeof a.listenerId ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3
        },
        Th = function(a, b) {
            b = void 0 === b ? {} : b;
            this.B = a;
            this.h = null;
            this.M = {};
            this.Db = 0;
            var c;
            this.U = null != (c = b.Ml) ? c : 500;
            var d;
            this.I = null != (d = b.lm) ? d : !1;
            this.C = null
        };
    pa(Th, Rh);
    var Vh = function(a) {
        return "function" === typeof a.B.__tcfapi || null != Uh(a)
    };
    Th.prototype.addEventListener = function(a) {
        var b = this,
            c = {
                internalBlockOnErrors: this.I
            },
            d = yh(function() {
                return a(c)
            }),
            e = 0; - 1 !== this.U && (e = setTimeout(function() {
            c.tcString = "tcunavailable";
            c.internalErrorState = 1;
            d()
        }, this.U));
        var f = function(h, l) {
            clearTimeout(e);
            h ? (c = h, c.internalErrorState = Sh(c), c.internalBlockOnErrors = b.I, l && 0 === c.internalErrorState || (c.tcString = "tcunavailable", l || (c.internalErrorState = 3))) : (c.tcString = "tcunavailable", c.internalErrorState = 3);
            a(c)
        };
        try {
            Wh(this, "addEventListener", f)
        } catch (h) {
            c.tcString =
                "tcunavailable", c.internalErrorState = 3, e && (clearTimeout(e), e = 0), d()
        }
    };
    Th.prototype.removeEventListener = function(a) {
        a && a.listenerId && Wh(this, "removeEventListener", null, a.listenerId)
    };
    var Yh = function(a, b, c) {
            var d;
            d = void 0 === d ? "755" : d;
            var e;
            a: {
                if (a.publisher && a.publisher.restrictions) {
                    var f = a.publisher.restrictions[b];
                    if (void 0 !== f) {
                        e = f[void 0 === d ? "755" : d];
                        break a
                    }
                }
                e = void 0
            }
            var h = e;
            if (0 === h) return !1;
            var l = c;
            2 === c ? (l = 0, 2 === h && (l = 1)) : 3 === c && (l = 1, 1 === h && (l = 0));
            var m;
            if (0 === l)
                if (a.purpose && a.vendor) {
                    var n = Xh(a.vendor.consents, void 0 === d ? "755" : d);
                    m = n && "1" === b && a.purposeOneTreatment && "CH" === a.publisherCC ? !0 : n && Xh(a.purpose.consents, b)
                } else m = !0;
            else m = 1 === l ? a.purpose && a.vendor ? Xh(a.purpose.legitimateInterests,
                b) && Xh(a.vendor.legitimateInterests, void 0 === d ? "755" : d) : !0 : !0;
            return m
        },
        Xh = function(a, b) {
            return !(!a || !a[b])
        },
        Wh = function(a, b, c, d) {
            c || (c = function() {});
            if ("function" === typeof a.B.__tcfapi) {
                var e = a.B.__tcfapi;
                e(b, 2, c, d)
            } else if (Uh(a)) {
                Zh(a);
                var f = ++a.Db;
                a.M[f] = c;
                if (a.h) {
                    var h = {};
                    a.h.postMessage((h.__tcfapiCall = {
                        command: b,
                        version: 2,
                        callId: f,
                        parameter: d
                    }, h), "*")
                }
            } else c({}, !1)
        },
        Uh = function(a) {
            if (a.h) return a.h;
            var b;
            a: {
                for (var c = a.B, d = 0; 50 > d; ++d) {
                    var e;
                    try {
                        e = !(!c.frames || !c.frames.__tcfapiLocator)
                    } catch (l) {
                        e = !1
                    }
                    if (e) {
                        b = c;
                        break a
                    }
                    var f;
                    b: {
                        try {
                            var h = c.parent;
                            if (h && h != c) {
                                f = h;
                                break b
                            }
                        } catch (l) {}
                        f = null
                    }
                    if (!(c = f)) break
                }
                b = null
            }
            a.h = b;
            return a.h
        },
        Zh = function(a) {
            a.C || (a.C = function(b) {
                try {
                    var c;
                    c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
                    a.M[c.callId](c.returnValue, c.success)
                } catch (d) {}
            }, zh(a.B, "message", a.C))
        },
        $h = function(a) {
            if (!1 === a.gdprApplies) return !0;
            void 0 === a.internalErrorState && (a.internalErrorState = Sh(a));
            return "error" === a.cmpStatus || 0 !== a.internalErrorState ? a.internalBlockOnErrors ?
                (Qh({
                    e: String(a.internalErrorState)
                }), !1) : !0 : "loaded" !== a.cmpStatus || "tcloaded" !== a.eventStatus && "useractioncomplete" !== a.eventStatus ? !1 : !0
        };
    var ai = {
            1: 0,
            3: 0,
            4: 0,
            7: 3,
            9: 3,
            10: 3
        },
        bi = wh('', 500);

    function ci() {
        var a = Be.tcf || {};
        return Be.tcf = a
    }
    var di = function() {
            return new Th(C, {
                Ml: -1
            })
        },
        ji = function() {
            var a = ci(),
                b = di();
            Vh(b) && ei() && J(124);
            if ((fi() || P(82)) && !a.active && Vh(b)) {
                a.active = !0;
                fi() ? (a.Bb = {}, a.cmpId = 0, a.tcfPolicyVersion = 0, gi(), P(82) && cg([K.g.J]), a.tcString = "tcunavailable") : P(82) && cg([K.g.F, K.g.Ta, K.g.J]);
                try {
                    b.addEventListener(function(c) {
                        if (0 !== c.internalErrorState) hi(a), ii(a);
                        else {
                            a.gdprApplies = c.gdprApplies;
                            if (P(82)) {
                                a.cmpId = c.cmpId;
                                a.enableAdvertiserConsentMode = c.enableAdvertiserConsentMode;
                                if (ei()) return;
                                a.tcfPolicyVersion =
                                    c.tcfPolicyVersion
                            }
                            var d;
                            if (!1 === c.gdprApplies) {
                                var e = {},
                                    f;
                                for (f in ai) ai.hasOwnProperty(f) && (e[f] = !0);
                                d = e;
                                b.removeEventListener(c)
                            } else if ("tcloaded" === c.eventStatus || "useractioncomplete" === c.eventStatus || "cmpuishown" === c.eventStatus) {
                                var h = {},
                                    l;
                                for (l in ai)
                                    if (ai.hasOwnProperty(l))
                                        if ("1" === l) {
                                            var m, n = c,
                                                p = !0;
                                            p = void 0 === p ? !1 : p;
                                            m = $h(n) ? !1 === n.gdprApplies || "tcunavailable" === n.tcString || void 0 === n.gdprApplies && !p || "string" !== typeof n.tcString || !n.tcString.length ? !0 : Yh(n, "1", 0) : !1;
                                            h["1"] = m
                                        } else h[l] = Yh(c,
                                            l, ai[l]);
                                d = h
                            }
                            d && (a.tcString = c.tcString || "tcempty", a.Bb = d, ii(a))
                        }
                    })
                } catch (c) {
                    hi(a), ii(a)
                }
            }
        };

    function hi(a) {
        a.type = "e";
        a.tcString = "tcunavailable"
    }

    function gi() {
        var a = {},
            b = (a[K.g.F] = "denied", a[K.g.Xe] = bi, a);
        P(82) && (b[K.g.Ta] = "denied");
        Yf(b)
    }
    var fi = function() {
            return !0 === C.gtag_enable_tcf_support
        },
        ei = function() {
            var a = fi();
            if (P(82)) {
                var b = ci().enableAdvertiserConsentMode;
                return !a && !b
            }
            return !a
        };

    function ii(a) {
        var b = {},
            c = (b[K.g.F] = a.Bb["1"] ? "granted" : "denied", b);
        P(82) && (c[K.g.Ta] = a.Bb["3"] && a.Bb["4"] ? "granted" : "denied", "number" === typeof a.tcfPolicyVersion && 4 <= a.tcfPolicyVersion && (c[K.g.J] = a.Bb["1"] && a.Bb["7"] ? "granted" : "denied"));
        Zf(c, {
            eventId: 0
        }, {
            gdprApplies: a ? a.gdprApplies : void 0,
            tcString: ki() || ""
        })
    }
    var ki = function() {
            var a = ci();
            if (a.active) return a.tcString
        },
        li = function() {
            var a = ci();
            if (a.active && void 0 !== a.gdprApplies) return a.gdprApplies ? "1" : "0"
        },
        mi = function(a) {
            if (!ai.hasOwnProperty(String(a))) return !0;
            var b = ci();
            return b.active && b.Bb ? !!b.Bb[String(a)] : !0
        };
    var ni = [K.g.F, K.g.N],
        oi = [K.g.F, K.g.N, K.g.J, K.g.Ta],
        pi = {},
        qi = (pi[K.g.F] = 1, pi[K.g.N] = 2, pi);

    function ri(a) {
        switch (T(a, K.g.Z)) {
            case void 0:
                return 1;
            case !1:
                return 3;
            default:
                return 2
        }
    }
    var si = function(a) {
            var b = 3 !== ri(a);
            P(68) && (b = b && Mf(K.g.Ta));
            return b
        },
        ti = function() {
            var a = {},
                b;
            for (b in qi)
                if (qi.hasOwnProperty(b)) {
                    var c = qi[b],
                        d, e = Hf();
                    e.accessedAny = !0;
                    d = e.getConsentState(b);
                    a[c] = d
                }
            var f = P(52) && ni.every(Mf),
                h = P(47);
            return f || h ? oc(a, 1) : oc(a, 0)
        },
        ui = {},
        vi = (ui[K.g.F] = 0, ui[K.g.N] = 1, ui[K.g.J] = 2, ui[K.g.Ta] = 3, ui);

    function wi(a) {
        switch (a) {
            case void 0:
                return 1;
            case !0:
                return 3;
            case !1:
                return 2;
            default:
                return 0
        }
    }
    var xi = function(a) {
            if (P(49)) {
                for (var b = "1", c = 0; c < oi.length; c++) {
                    var d = b,
                        e, f = oi[c],
                        h = Ff[f];
                    e = void 0 === h ? 0 : vi.hasOwnProperty(h) ? 12 | vi[h] : 8;
                    var l = Hf();
                    l.accessedAny = !0;
                    var m = l.entries[f] || {};
                    e = e << 2 | wi(m.implicit);
                    b = d + ("" + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [e] + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [wi(m.declare) << 4 | wi(m.default) << 2 | wi(m.update)])
                }
                void 0 !== a && (b += ri(a));
                return b
            }
            for (var n = "G1", p = 0; p < ni.length; p++) {
                var q;
                a: {
                    var r = ni[p],
                        t = Hf();t.accessedDefault = !0;
                    switch ((t.entries[r] || {}).default) {
                        case !0:
                            q = 3;
                            break a;
                        case !1:
                            q = 2;
                            break a;
                        default:
                            q = 1
                    }
                }
                switch (q) {
                    case 3:
                        n += "1";
                        break;
                    case 2:
                        n += "0";
                        break;
                    case 1:
                        n += "-"
                }
            }
            return n
        },
        yi = function() {
            if (!Mf(K.g.J)) return "-";
            var a = [],
                b = Hf().cps,
                c;
            for (c in b) b.hasOwnProperty(c) && b[c].enabled && a.push(c);
            for (var d = "", e = 0; e < a.length; e++) {
                var f = ze[a[e]];
                f && (d += f)
            }
            return "" === d ? "-" : d
        };

    function zi() {
        var a = !!qf["6"],
            b = !1;
        P(82) && (b = !ei() && "1" === li());
        return a || b
    }
    var Ai = function() {
            return zi() ? "1" : "0"
        },
        Bi = function() {
            return zi() || Hf().usedSetCps || !Q(K.g.J)
        },
        Ci = function() {
            var a = "0",
                b = "0",
                c;
            var d = ci();
            c = d.active && P(82) ? d.cmpId : void 0;
            "number" === typeof c && 0 <= c && 4095 >= c && (a = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [c >> 6 & 63], b = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [c & 63]);
            var e = "0",
                f;
            var h = ci();
            f = h.active && P(82) ? h.tcfPolicyVersion : void 0;
            "number" === typeof f && 0 <= f && 63 >= f && (e = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [f]);
            var l = 0;
            qf["6"] && (l |= 1);
            "1" === li() && (l |= 2);
            fi() && (l |= 4);
            var m;
            var n = ci();
            m = n.active && void 0 !== n.enableAdvertiserConsentMode ? n.enableAdvertiserConsentMode ? "1" : "0" : void 0;
            "1" === m && (l |= 8);
            return "1" + a + b + e + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [l]
        };
    var Di = function(a) {
        var b = 1,
            c, d, e;
        if (a)
            for (b = 0, d = a.length - 1; 0 <= d; d--) e = a.charCodeAt(d), b = (b << 6 & 268435455) + e + (e << 14), c = b & 266338304, b = 0 !== c ? b ^ c >> 21 : b;
        return b
    };
    var Ei = function(a, b, c) {
        for (var d = [], e = b.split(";"), f = 0; f < e.length; f++) {
            var h = e[f].split("="),
                l = h[0].replace(/^\s*|\s*$/g, "");
            if (l && l == a) {
                var m = h.slice(1).join("=").replace(/^\s*|\s*$/g, "");
                m && c && (m = decodeURIComponent(m));
                d.push(m)
            }
        }
        return d
    };

    function Fi(a) {
        return "null" !== a.origin
    };
    var Ii = function(a, b, c, d) {
            return Gi(d) ? Ei(a, String(b || Hi()), c) : []
        },
        Li = function(a, b, c, d, e) {
            if (Gi(e)) {
                var f = Ji(a, d, e);
                if (1 === f.length) return f[0].id;
                if (0 !== f.length) {
                    f = Ki(f, function(h) {
                        return h.Ce
                    }, b);
                    if (1 === f.length) return f[0].id;
                    f = Ki(f, function(h) {
                        return h.Md
                    }, c);
                    return f[0] ? f[0].id : void 0
                }
            }
        };

    function Mi(a, b, c, d) {
        var e = Hi(),
            f = window;
        Fi(f) && (f.document.cookie = a);
        var h = Hi();
        return e != h || void 0 != c && 0 <= Ii(b, h, !1, d).indexOf(c)
    }
    var Qi = function(a, b, c) {
            function d(t, u, v) {
                if (null == v) return delete h[u], t;
                h[u] = v;
                return t + "; " + u + "=" + v
            }

            function e(t, u) {
                if (null == u) return delete h[u], t;
                h[u] = !0;
                return t + "; " + u
            }
            if (!Gi(c.fb)) return 2;
            var f;
            void 0 == b ? f = a + "=deleted; expires=" + (new Date(0)).toUTCString() : (c.encode && (b = encodeURIComponent(b)), b = Ni(b), f = a + "=" + b);
            var h = {};
            f = d(f, "path", c.path);
            var l;
            c.expires instanceof Date ? l = c.expires.toUTCString() : null != c.expires && (l = "" + c.expires);
            f = d(f, "expires", l);
            f = d(f, "max-age", c.sm);
            f = d(f, "samesite",
                c.vm);
            c.wm && (f = e(f, "secure"));
            var m = c.domain;
            if (m && "auto" === m.toLowerCase()) {
                for (var n = Oi(), p = 0; p < n.length; ++p) {
                    var q = "none" !== n[p] ? n[p] : void 0,
                        r = d(f, "domain", q);
                    r = e(r, c.flags);
                    if (!Pi(q, c.path) && Mi(r, a, b, c.fb)) return 0
                }
                return 1
            }
            m && "none" !== m.toLowerCase() && (f = d(f, "domain", m));
            f = e(f, c.flags);
            return Pi(m, c.path) ? 1 : Mi(f, a, b, c.fb) ? 0 : 1
        },
        Ri = function(a, b, c) {
            null == c.path && (c.path = "/");
            c.domain || (c.domain = "auto");
            return Qi(a, b, c)
        };

    function Ki(a, b, c) {
        for (var d = [], e = [], f, h = 0; h < a.length; h++) {
            var l = a[h],
                m = b(l);
            m === c ? d.push(l) : void 0 === f || m < f ? (e = [l], f = m) : m === f && e.push(l)
        }
        return 0 < d.length ? d : e
    }

    function Ji(a, b, c) {
        for (var d = [], e = Ii(a, void 0, void 0, c), f = 0; f < e.length; f++) {
            var h = e[f].split("."),
                l = h.shift();
            if (!b || -1 !== b.indexOf(l)) {
                var m = h.shift();
                m && (m = m.split("-"), d.push({
                    id: h.join("."),
                    Ce: 1 * m[0] || 1,
                    Md: 1 * m[1] || 1
                }))
            }
        }
        return d
    }
    var Ni = function(a) {
            a && 1200 < a.length && (a = a.substring(0, 1200));
            return a
        },
        Si = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
        Ti = /(^|\.)doubleclick\.net$/i,
        Pi = function(a, b) {
            return Ti.test(window.document.location.hostname) || "/" === b && Si.test(a)
        },
        Hi = function() {
            return Fi(window) ? window.document.cookie : ""
        },
        Oi = function() {
            var a = [],
                b = window.document.location.hostname.split(".");
            if (4 === b.length) {
                var c = b[b.length - 1];
                if (parseInt(c, 10).toString() === c) return ["none"]
            }
            for (var d = b.length - 2; 0 <= d; d--) a.push(b.slice(d).join("."));
            var e = window.document.location.hostname;
            Ti.test(e) || Si.test(e) || a.push("none");
            return a
        },
        Gi = function(a) {
            return a && Cf().h() ? Nf(a) ? Mf(a) : !1 : !0
        };
    var Ui = function(a) {
            var b = Math.round(2147483647 * Math.random());
            return a ? String(b ^ Di(a) & 2147483647) : String(b)
        },
        Vi = function(a) {
            return [Ui(a), Math.round(Ja() / 1E3)].join(".")
        },
        Yi = function(a, b, c, d, e) {
            var f = Wi(b);
            return Li(a, f, Xi(c), d, e)
        },
        Zi = function(a, b, c, d) {
            var e = "" + Wi(c),
                f = Xi(d);
            1 < f && (e += "-" + f);
            return [b, e, a].join(".")
        },
        Wi = function(a) {
            if (!a) return 1;
            a = 0 === a.indexOf(".") ? a.substr(1) : a;
            return a.split(".").length
        },
        Xi = function(a) {
            if (!a || "/" === a) return 1;
            "/" !== a[0] && (a = "/" + a);
            "/" !== a[a.length - 1] && (a += "/");
            return a.split("/").length -
                1
        };
    var $i = function() {
        Be.dedupe_gclid || (Be.dedupe_gclid = "" + Vi());
        return Be.dedupe_gclid
    };
    var aj = function() {
        var a = !1;
        return a
    };
    var bj = {
            UA: 1,
            AW: 2,
            DC: 3,
            G: 4,
            GF: 5,
            GT: 12,
            GTM: 14,
            HA: 6,
            MC: 7
        },
        cj = function(a) {
            var b = kg.ctid.split("-")[0].toUpperCase(),
                c = {};
            c.ctid = kg.ctid;
            c.Cl = Ae.pd;
            c.Fl = Ae.Ef;
            c.fl = ig.ld ? 2 : 1;
            He ? (c.Qe = bj[b], c.Qe || (c.Qe = 0)) : c.Qe = Ne ? 13 : 10;
            Le ? c.dg = 1 : aj() ? c.dg = 2 : c.dg = 3;
            var d;
            var e = c.Qe,
                f = c.dg;
            void 0 === e ? d = "" : (f || (f = 0), d = "" + Hd(1, 1) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [e << 2 | f]);
            var h = c.km,
                l = 4 + d + (h ? "" + Hd(2, 1) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [h] : ""),
                m, n = c.Fl;
            m = n &&
                Gd.test(n) ? "" + Hd(3, 2) + n : "";
            var p, q = c.Cl;
            p = q ? "" + Hd(4, 1) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [q] : "";
            var r;
            var t = c.ctid;
            if (t && a) {
                var u = t.split("-"),
                    v = u[0].toUpperCase();
                if ("GTM" !== v && "OPT" !== v) r = "";
                else {
                    var w = u[1];
                    r = "" + Hd(5, 3) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [1 + w.length] + (c.fl || 0) + w
                }
            } else r = "";
            return l + m + p + r
        };
    var dj = void 0;

    function ej(a) {
        var b = "";
        return b
    };
    Bb();
    Bh() || yb("iPod");
    yb("iPad");
    !yb("Android") || Cb() || Bb() || Ab() || yb("Silk");
    Cb();
    !yb("Safari") || Cb() || (zb() ? 0 : yb("Coast")) || Ab() || (zb() ? 0 : yb("Edge")) || (zb() ? xb("Microsoft Edge") : yb("Edg/")) || (zb() ? xb("Opera") : yb("OPR")) || Bb() || yb("Silk") || yb("Android") || Ch();
    var fj = {},
        gj = null,
        hj = function(a) {
            for (var b = [], c = 0, d = 0; d < a.length; d++) {
                var e = a.charCodeAt(d);
                255 < e && (b[c++] = e & 255, e >>= 8);
                b[c++] = e
            }
            var f = 4;
            void 0 === f && (f = 0);
            if (!gj) {
                gj = {};
                for (var h = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), l = ["+/=", "+/", "-_=", "-_.", "-_"], m = 0; 5 > m; m++) {
                    var n = h.concat(l[m].split(""));
                    fj[m] = n;
                    for (var p = 0; p < n.length; p++) {
                        var q = n[p];
                        void 0 === gj[q] && (gj[q] = p)
                    }
                }
            }
            for (var r = fj[f], t = Array(Math.floor(b.length / 3)), u = r[64] || "", v = 0, w = 0; v < b.length - 2; v += 3) {
                var x = b[v],
                    y = b[v + 1],
                    A = b[v + 2],
                    B = r[x >> 2],
                    D = r[(x & 3) << 4 | y >> 4],
                    I = r[(y & 15) << 2 | A >> 6],
                    F = r[A & 63];
                t[w++] = "" + B + D + I + F
            }
            var G = 0,
                L = u;
            switch (b.length - v) {
                case 2:
                    G = b[v + 1], L = r[(G & 15) << 2] || u;
                case 1:
                    var N = b[v];
                    t[w] = "" + r[N >> 2] + r[(N & 3) << 4 | G >> 4] + L + u
            }
            return t.join("")
        };
    var ij = "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");

    function jj() {
        var a;
        return null != (a = C.google_tag_data) ? a : C.google_tag_data = {}
    }

    function kj() {
        var a = C.google_tag_data,
            b;
        if (null != a && a.uach) {
            var c = a.uach,
                d = Object.assign({}, c);
            c.fullVersionList && (d.fullVersionList = c.fullVersionList.slice(0));
            b = d
        } else b = null;
        return b
    }

    function lj() {
        var a, b;
        return null != (b = null == (a = C.google_tag_data) ? void 0 : a.uach_promise) ? b : null
    }

    function mj() {
        var a, b;
        return "function" === typeof(null == (a = C.navigator) ? void 0 : null == (b = a.userAgentData) ? void 0 : b.getHighEntropyValues)
    }

    function nj() {
        if (!mj()) return null;
        var a = jj();
        if (a.uach_promise) return a.uach_promise;
        var b = C.navigator.userAgentData.getHighEntropyValues(ij).then(function(c) {
            null != a.uach || (a.uach = c);
            return c
        });
        return a.uach_promise = b
    };
    var tj = /:[0-9]+$/,
        uj = /^\d+\.fls\.doubleclick\.net$/,
        vj = function(a, b, c) {
            for (var d = a.split("&"), e = 0; e < d.length; e++) {
                var f = d[e].split("=");
                if (decodeURIComponent(f[0]).replace(/\+/g, " ") === b) {
                    var h = f.slice(1).join("=");
                    return c ? h : decodeURIComponent(h).replace(/\+/g, " ")
                }
            }
        },
        yj = function(a, b, c, d, e) {
            b && (b = String(b).toLowerCase());
            if ("protocol" === b || "port" === b) a.protocol = wj(a.protocol) || wj(C.location.protocol);
            "port" === b ? a.port = String(Number(a.hostname ? a.port : C.location.port) || ("http" === a.protocol ? 80 : "https" ===
                a.protocol ? 443 : "")) : "host" === b && (a.hostname = (a.hostname || C.location.hostname).replace(tj, "").toLowerCase());
            return xj(a, b, c, d, e)
        },
        xj = function(a, b, c, d, e) {
            var f, h = wj(a.protocol);
            b && (b = String(b).toLowerCase());
            switch (b) {
                case "url_no_fragment":
                    f = zj(a);
                    break;
                case "protocol":
                    f = h;
                    break;
                case "host":
                    f = a.hostname.replace(tj, "").toLowerCase();
                    if (c) {
                        var l = /^www\d*\./.exec(f);
                        l && l[0] && (f = f.substr(l[0].length))
                    }
                    break;
                case "port":
                    f = String(Number(a.port) || ("http" === h ? 80 : "https" === h ? 443 : ""));
                    break;
                case "path":
                    a.pathname ||
                        a.hostname || fb("TAGGING", 1);
                    f = "/" === a.pathname.substr(0, 1) ? a.pathname : "/" + a.pathname;
                    var m = f.split("/");
                    0 <= (d || []).indexOf(m[m.length - 1]) && (m[m.length - 1] = "");
                    f = m.join("/");
                    break;
                case "query":
                    f = a.search.replace("?", "");
                    e && (f = vj(f, e));
                    break;
                case "extension":
                    var n = a.pathname.split(".");
                    f = 1 < n.length ? n[n.length - 1] : "";
                    f = f.split("/")[0];
                    break;
                case "fragment":
                    f = a.hash.replace("#", "");
                    break;
                default:
                    f = a && a.href
            }
            return f
        },
        wj = function(a) {
            return a ? a.replace(":", "").toLowerCase() : ""
        },
        zj = function(a) {
            var b = "";
            if (a &&
                a.href) {
                var c = a.href.indexOf("#");
                b = 0 > c ? a.href : a.href.substr(0, c)
            }
            return b
        },
        Aj = function(a) {
            var b = E.createElement("a");
            a && (b.href = a);
            var c = b.pathname;
            "/" !== c[0] && (a || fb("TAGGING", 1), c = "/" + c);
            var d = b.hostname.replace(tj, "");
            return {
                href: b.href,
                protocol: b.protocol,
                host: b.host,
                hostname: d,
                pathname: c,
                search: b.search,
                hash: b.hash,
                port: b.port
            }
        },
        Bj = function(a) {
            function b(n) {
                var p = n.split("=")[0];
                return 0 > d.indexOf(p) ? n : p + "=0"
            }

            function c(n) {
                return n.split("&").map(b).filter(function(p) {
                    return void 0 !== p
                }).join("&")
            }
            var d = "gclid dclid gbraid wbraid gclaw gcldc gclha gclgf gclgb _gl".split(" "),
                e = Aj(a),
                f = a.split(/[?#]/)[0],
                h = e.search,
                l = e.hash;
            "?" === h[0] && (h = h.substring(1));
            "#" === l[0] && (l = l.substring(1));
            h = c(h);
            l = c(l);
            "" !== h && (h = "?" + h);
            "" !== l && (l = "#" + l);
            var m = "" + f + h + l;
            "/" === m[m.length - 1] && (m = m.substring(0, m.length - 1));
            return m
        },
        Cj = function(a) {
            var b = Aj(C.location.href),
                c = yj(b, "host", !1);
            if (c && c.match(uj)) {
                var d = yj(b, "path").split(a + "=");
                if (1 < d.length) return d[1].split(";")[0].split("?")[0]
            }
        };

    function Dj(a, b, c, d) {
        var e, f = Number(null != a.yb ? a.yb : void 0);
        0 !== f && (e = new Date((b || Ja()) + 1E3 * (f || 7776E3)));
        return {
            path: a.path,
            domain: a.domain,
            flags: a.flags,
            encode: !!c,
            expires: e,
            fb: d
        }
    };
    var Ej;
    var Ij = function() {
            var a = Fj,
                b = Gj,
                c = Hj(),
                d = function(h) {
                    a(h.target || h.srcElement || {})
                },
                e = function(h) {
                    b(h.target || h.srcElement || {})
                };
            if (!c.init) {
                ac(E, "mousedown", d);
                ac(E, "keyup", d);
                ac(E, "submit", e);
                var f = HTMLFormElement.prototype.submit;
                HTMLFormElement.prototype.submit = function() {
                    b(this);
                    f.call(this)
                };
                c.init = !0
            }
        },
        Jj = function(a, b, c, d, e) {
            var f = {
                callback: a,
                domains: b,
                fragment: 2 === c,
                placement: c,
                forms: d,
                sameHost: e
            };
            Hj().decorators.push(f)
        },
        Kj = function(a, b, c) {
            for (var d = Hj().decorators, e = {}, f = 0; f < d.length; ++f) {
                var h =
                    d[f],
                    l;
                if (l = !c || h.forms) a: {
                    var m = h.domains,
                        n = a,
                        p = !!h.sameHost;
                    if (m && (p || n !== E.location.hostname))
                        for (var q = 0; q < m.length; q++)
                            if (m[q] instanceof RegExp) {
                                if (m[q].test(n)) {
                                    l = !0;
                                    break a
                                }
                            } else if (0 <= n.indexOf(m[q]) || p && 0 <= m[q].indexOf(n)) {
                        l = !0;
                        break a
                    }
                    l = !1
                }
                if (l) {
                    var r = h.placement;
                    void 0 == r && (r = h.fragment ? 2 : 1);
                    r === b && Ma(e, h.callback())
                }
            }
            return e
        };

    function Hj() {
        var a = Sb("google_tag_data", {}),
            b = a.gl;
        b && b.decorators || (b = {
            decorators: []
        }, a.gl = b);
        return b
    };
    var Lj = /(.*?)\*(.*?)\*(.*)/,
        Mj = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,
        Nj = /^(?:www\.|m\.|amp\.)+/,
        Oj = /([^?#]+)(\?[^#]*)?(#.*)?/;

    function Pj(a) {
        return new RegExp("(.*?)(^|&)" + a + "=([^&]*)&?(.*)")
    }
    var Rj = function(a) {
        var b = [],
            c;
        for (c in a)
            if (a.hasOwnProperty(c)) {
                var d = a[c];
                void 0 !== d && d === d && null !== d && "[object Object]" !== d.toString() && (b.push(c), b.push(cb(String(d))))
            }
        var e = b.join("*");
        return ["1", Qj(e), e].join("*")
    };

    function Qj(a, b) {
        var c = [Qb.userAgent, (new Date).getTimezoneOffset(), Qb.userLanguage || Qb.language, Math.floor(Ja() / 60 / 1E3) - (void 0 === b ? 0 : b), a].join("*"),
            d;
        if (!(d = Ej)) {
            for (var e = Array(256), f = 0; 256 > f; f++) {
                for (var h = f, l = 0; 8 > l; l++) h = h & 1 ? h >>> 1 ^ 3988292384 : h >>> 1;
                e[f] = h
            }
            d = e
        }
        Ej = d;
        for (var m = 4294967295, n = 0; n < c.length; n++) m = m >>> 8 ^ Ej[(m ^ c.charCodeAt(n)) & 255];
        return ((m ^ -1) >>> 0).toString(36)
    }

    function Sj() {
        return function(a) {
            var b = Aj(C.location.href),
                c = b.search.replace("?", ""),
                d = vj(c, "_gl", !0) || "";
            a.query = Tj(d) || {};
            var e = yj(b, "fragment").match(Pj("_gl"));
            a.fragment = Tj(e && e[3] || "") || {}
        }
    }

    function Uj(a, b) {
        var c = Pj(a).exec(b),
            d = b;
        if (c) {
            var e = c[2],
                f = c[4];
            d = c[1];
            f && (d = d + e + f)
        }
        return d
    }
    var Vj = function(a, b) {
            b || (b = "_gl");
            var c = Oj.exec(a);
            if (!c) return "";
            var d = c[1],
                e = Uj(b, (c[2] || "").slice(1)),
                f = Uj(b, (c[3] || "").slice(1));
            e.length && (e = "?" + e);
            f.length && (f = "#" + f);
            return "" + d + e + f
        },
        Wj = function(a) {
            var b = Sj(),
                c = Hj();
            c.data || (c.data = {
                query: {},
                fragment: {}
            }, b(c.data));
            var d = {},
                e = c.data;
            e && (Ma(d, e.query), a && Ma(d, e.fragment));
            return d
        },
        Tj = function(a) {
            try {
                var b = Xj(a, 3);
                if (void 0 !== b) {
                    for (var c = {}, d = b ? b.split("*") : [], e = 0; e + 1 < d.length; e += 2) {
                        var f = d[e],
                            h = db(d[e + 1]);
                        c[f] = h
                    }
                    fb("TAGGING", 6);
                    return c
                }
            } catch (l) {
                fb("TAGGING",
                    8)
            }
        };

    function Xj(a, b) {
        if (a) {
            var c;
            a: {
                for (var d = a, e = 0; 3 > e; ++e) {
                    var f = Lj.exec(d);
                    if (f) {
                        c = f;
                        break a
                    }
                    d = decodeURIComponent(d)
                }
                c = void 0
            }
            var h = c;
            if (h && "1" === h[1]) {
                var l = h[3],
                    m;
                a: {
                    for (var n = h[2], p = 0; p < b; ++p)
                        if (n === Qj(l, p)) {
                            m = !0;
                            break a
                        }
                    m = !1
                }
                if (m) return l;
                fb("TAGGING", 7)
            }
        }
    }

    function Yj(a, b, c, d) {
        function e(p) {
            p = Uj(a, p);
            var q = p.charAt(p.length - 1);
            p && "&" !== q && (p += "&");
            return p + n
        }
        d = void 0 === d ? !1 : d;
        var f = Oj.exec(c);
        if (!f) return "";
        var h = f[1],
            l = f[2] || "",
            m = f[3] || "",
            n = a + "=" + b;
        d ? m = "#" + e(m.substring(1)) : l = "?" + e(l.substring(1));
        return "" + h + l + m
    }

    function Zj(a, b) {
        var c = "FORM" === (a.tagName || "").toUpperCase(),
            d = Kj(b, 1, c),
            e = Kj(b, 2, c),
            f = Kj(b, 3, c);
        if (Oa(d)) {
            var h = Rj(d);
            c ? ak("_gl", h, a) : bk("_gl", h, a, !1)
        }
        if (!c && Oa(e)) {
            var l = Rj(e);
            bk("_gl", l, a, !0)
        }
        for (var m in f)
            if (f.hasOwnProperty(m)) a: {
                var n = m,
                    p = f[m],
                    q = a;
                if (q.tagName) {
                    if ("a" === q.tagName.toLowerCase()) {
                        bk(n, p, q);
                        break a
                    }
                    if ("form" === q.tagName.toLowerCase()) {
                        ak(n, p, q);
                        break a
                    }
                }
                "string" == typeof q && Yj(n, p, q)
            }
    }

    function bk(a, b, c, d) {
        if (c.href) {
            var e = Yj(a, b, c.href, void 0 === d ? !1 : d);
            nb.test(e) && (c.href = e)
        }
    }

    function ak(a, b, c) {
        if (c && c.action) {
            var d = (c.method || "").toLowerCase();
            if ("get" === d) {
                for (var e = c.childNodes || [], f = !1, h = 0; h < e.length; h++) {
                    var l = e[h];
                    if (l.name === a) {
                        l.setAttribute("value", b);
                        f = !0;
                        break
                    }
                }
                if (!f) {
                    var m = E.createElement("input");
                    m.setAttribute("type", "hidden");
                    m.setAttribute("name", a);
                    m.setAttribute("value", b);
                    c.appendChild(m)
                }
            } else if ("post" === d) {
                var n = Yj(a, b, c.action);
                nb.test(n) && (c.action = n)
            }
        }
    }

    function Fj(a) {
        try {
            var b;
            a: {
                for (var c = a, d = 100; c && 0 < d;) {
                    if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) {
                        b = c;
                        break a
                    }
                    c = c.parentNode;
                    d--
                }
                b = null
            }
            var e = b;
            if (e) {
                var f = e.protocol;
                "http:" !== f && "https:" !== f || Zj(e, e.hostname)
            }
        } catch (h) {}
    }

    function Gj(a) {
        try {
            if (a.action) {
                var b = yj(Aj(a.action), "host");
                Zj(a, b)
            }
        } catch (c) {}
    }
    var ck = function(a, b, c, d) {
            Ij();
            Jj(a, b, "fragment" === c ? 2 : 1, !!d, !1)
        },
        dk = function(a, b) {
            Ij();
            Jj(a, [xj(C.location, "host", !0)], b, !0, !0)
        },
        ek = function() {
            var a = E.location.hostname,
                b = Mj.exec(E.referrer);
            if (!b) return !1;
            var c = b[2],
                d = b[1],
                e = "";
            if (c) {
                var f = c.split("/"),
                    h = f[1];
                e = "s" === h ? decodeURIComponent(f[2]) : decodeURIComponent(h)
            } else if (d) {
                if (0 === d.indexOf("xn--")) return !1;
                e = d.replace(/-/g, ".").replace(/\.\./g, "-")
            }
            var l = a.replace(Nj, ""),
                m = e.replace(Nj, ""),
                n;
            if (!(n = l === m)) {
                var p = "." + m;
                n = l.substring(l.length - p.length,
                    l.length) === p
            }
            return n
        },
        fk = function(a, b) {
            return !1 === a ? !1 : a || b || ek()
        };
    var gk = ["1"],
        hk = {},
        ik = {},
        nk = function(a, b) {
            b = void 0 === b ? !0 : b;
            var c = jk(a.prefix);
            if (!hk[c])
                if (kk(c, a.path, a.domain)) {
                    var d = ik[jk(a.prefix)];
                    lk(a, d ? d.id : void 0, d ? d.ag : void 0)
                } else {
                    var e = Cj("auiddc");
                    if (e) fb("TAGGING", 17), hk[c] = e;
                    else if (b) {
                        var f = jk(a.prefix),
                            h = Vi();
                        if (0 === mk(f, h, a)) {
                            var l = Sb("google_tag_data", {});
                            l._gcl_au || (l._gcl_au = h)
                        }
                        kk(c, a.path, a.domain)
                    }
                }
        };

    function lk(a, b, c) {
        var d = jk(a.prefix),
            e = hk[d];
        if (e) {
            var f = e.split(".");
            if (2 === f.length) {
                var h = Number(f[1]) || 0;
                if (h) {
                    var l = e;
                    b && (l = e + "." + b + "." + (c ? c : Math.floor(Ja() / 1E3)));
                    mk(d, l, a, 1E3 * h)
                }
            }
        }
    }

    function mk(a, b, c, d) {
        var e = Zi(b, "1", c.domain, c.path),
            f = Dj(c, d);
        f.fb = "ad_storage";
        return Ri(a, e, f)
    }

    function kk(a, b, c) {
        var d = Yi(a, b, c, gk, "ad_storage");
        if (!d) return !1;
        ok(a, d);
        return !0
    }

    function ok(a, b) {
        var c = b.split(".");
        5 === c.length ? (hk[a] = c.slice(0, 2).join("."), ik[a] = {
            id: c.slice(2, 4).join("."),
            ag: Number(c[4]) || 0
        }) : 3 === c.length ? ik[a] = {
            id: c.slice(0, 2).join("."),
            ag: Number(c[2]) || 0
        } : hk[a] = b
    }

    function jk(a) {
        return (a || "_gcl") + "_au"
    }

    function pk(a) {
        Cf().h() ? Sf(function() {
            Mf("ad_storage") ? a() : Tf(a, "ad_storage")
        }, ["ad_storage"]) : a()
    }

    function qk(a) {
        var b = Wj(!0),
            c = jk(a.prefix);
        pk(function() {
            var d = b[c];
            if (d) {
                ok(c, d);
                var e = 1E3 * Number(hk[c].split(".")[1]);
                if (e) {
                    fb("TAGGING", 16);
                    var f = Dj(a, e);
                    f.fb = "ad_storage";
                    var h = Zi(d, "1", a.domain, a.path);
                    Ri(c, h, f)
                }
            }
        })
    }

    function rk(a, b, c, d, e) {
        e = e || {};
        var f = function() {
            var h = {},
                l = Yi(a, e.path, e.domain, gk, "ad_storage");
            l && (h[a] = l);
            return h
        };
        pk(function() {
            ck(f, b, c, d)
        })
    };
    var sk = function(a) {
        for (var b = [], c = E.cookie.split(";"), d = new RegExp("^\\s*" + (a || "_gac") + "_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$"), e = 0; e < c.length; e++) {
            var f = c[e].match(d);
            f && b.push({
                og: f[1],
                value: f[2],
                timestamp: Number(f[2].split(".")[1]) || 0
            })
        }
        b.sort(function(h, l) {
            return l.timestamp - h.timestamp
        });
        return b
    };

    function tk(a, b) {
        var c = sk(a),
            d = {};
        if (!c || !c.length) return d;
        for (var e = 0; e < c.length; e++) {
            var f = c[e].value.split(".");
            if (!("1" !== f[0] || b && 3 > f.length || !b && 3 !== f.length) && Number(f[1])) {
                d[c[e].og] || (d[c[e].og] = []);
                var h = {
                    version: f[0],
                    timestamp: 1E3 * Number(f[1]),
                    R: f[2]
                };
                b && 3 < f.length && (h.labels = f.slice(3));
                d[c[e].og].push(h)
            }
        }
        return d
    };
    var Fk = /^\w+$/,
        Gk = /^[\w-]+$/,
        Hk = {
            aw: "_aw",
            dc: "_dc",
            gf: "_gf",
            ha: "_ha",
            gp: "_gp",
            gb: "_gb"
        },
        Ik = function() {
            return Cf().h() ? Mf("ad_storage") : !0
        },
        Jk = function(a, b) {
            Nf("ad_storage") ? Ik() ? a() : Tf(a, "ad_storage") : b ? fb("TAGGING", 3) : Sf(function() {
                Jk(a, !0)
            }, ["ad_storage"])
        },
        Lk = function(a) {
            return Kk(a).map(function(b) {
                return b.R
            })
        },
        Kk = function(a) {
            var b = [];
            if (!Fi(C) || !E.cookie) return b;
            var c = Ii(a, E.cookie, void 0, "ad_storage");
            if (!c || 0 == c.length) return b;
            for (var d = {}, e = 0; e < c.length; d = {
                    R: d.R
                }, e++) {
                var f = Mk(c[e]);
                if (null !=
                    f) {
                    var h = f,
                        l = h.version;
                    d.R = h.R;
                    var m = h.timestamp,
                        n = h.labels,
                        p = xa(b, function(q) {
                            return function(r) {
                                return r.R === q.R
                            }
                        }(d));
                    p ? (p.timestamp = Math.max(p.timestamp, m), p.labels = Nk(p.labels, n || [])) : b.push({
                        version: l,
                        R: d.R,
                        timestamp: m,
                        labels: n
                    })
                }
            }
            b.sort(function(q, r) {
                return r.timestamp - q.timestamp
            });
            return Ok(b)
        };

    function Nk(a, b) {
        for (var c = {}, d = [], e = 0; e < a.length; e++) c[a[e]] = !0, d.push(a[e]);
        for (var f = 0; f < b.length; f++) c[b[f]] || d.push(b[f]);
        return d
    }

    function Pk(a) {
        return a && "string" == typeof a && a.match(Fk) ? a : "_gcl"
    }
    var Rk = function() {
            var a = Aj(C.location.href),
                b = yj(a, "query", !1, void 0, "gclid"),
                c = yj(a, "query", !1, void 0, "gclsrc"),
                d = yj(a, "query", !1, void 0, "wbraid"),
                e = yj(a, "query", !1, void 0, "dclid");
            if (!b || !c || !d) {
                var f = a.hash.replace("#", "");
                b = b || vj(f, "gclid");
                c = c || vj(f, "gclsrc");
                d = d || vj(f, "wbraid")
            }
            return Qk(b, c, e, d)
        },
        Qk = function(a, b, c, d) {
            var e = {},
                f = function(h, l) {
                    e[l] || (e[l] = []);
                    e[l].push(h)
                };
            e.gclid = a;
            e.gclsrc = b;
            e.dclid = c;
            void 0 !== d && Gk.test(d) && (e.gbraid = d, f(d, "gb"));
            if (void 0 !== a && a.match(Gk)) switch (b) {
                case void 0:
                    f(a,
                        "aw");
                    break;
                case "aw.ds":
                    f(a, "aw");
                    f(a, "dc");
                    break;
                case "ds":
                    f(a, "dc");
                    break;
                case "3p.ds":
                    f(a, "dc");
                    break;
                case "gf":
                    f(a, "gf");
                    break;
                case "ha":
                    f(a, "ha")
            }
            c && f(c, "dc");
            return e
        },
        Tk = function(a) {
            var b = Rk();
            Jk(function() {
                Sk(b, !1, a)
            })
        };

    function Sk(a, b, c, d, e) {
        function f(w, x) {
            var y = Uk(w, h);
            y && (Ri(y, x, l), m = !0)
        }
        c = c || {};
        e = e || [];
        var h = Pk(c.prefix);
        d = d || Ja();
        var l = Dj(c, d, !0);
        l.fb = "ad_storage";
        var m = !1,
            n = Math.round(d / 1E3),
            p = function(w) {
                var x = ["GCL", n, w];
                0 < e.length && x.push(e.join("."));
                return x.join(".")
            };
        a.aw && f("aw", p(a.aw[0]));
        a.dc && f("dc", p(a.dc[0]));
        a.gf && f("gf", p(a.gf[0]));
        a.ha && f("ha", p(a.ha[0]));
        a.gp && f("gp", p(a.gp[0]));
        if (!m && a.gb) {
            var q = a.gb[0],
                r = Uk("gb", h),
                t = !1;
            if (!b)
                for (var u = Kk(r), v = 0; v < u.length; v++) u[v].R === q && u[v].labels &&
                    0 < u[v].labels.length && (t = !0);
            t || f("gb", p(q))
        }
    }
    var Wk = function(a, b) {
            var c = Wj(!0);
            Jk(function() {
                for (var d = Pk(b.prefix), e = 0; e < a.length; ++e) {
                    var f = a[e];
                    if (void 0 !== Hk[f]) {
                        var h = Uk(f, d),
                            l = c[h];
                        if (l) {
                            var m = Math.min(Vk(l), Ja()),
                                n;
                            b: {
                                var p = m;
                                if (Fi(C))
                                    for (var q = Ii(h, E.cookie, void 0, "ad_storage"), r = 0; r < q.length; ++r)
                                        if (Vk(q[r]) > p) {
                                            n = !0;
                                            break b
                                        }
                                n = !1
                            }
                            if (!n) {
                                var t = Dj(b, m, !0);
                                t.fb = "ad_storage";
                                Ri(h, l, t)
                            }
                        }
                    }
                }
                Sk(Qk(c.gclid, c.gclsrc), !1, b)
            })
        },
        Uk = function(a, b) {
            var c = Hk[a];
            if (void 0 !== c) return b + c
        },
        Vk = function(a) {
            return 0 !== Xk(a.split(".")).length ? 1E3 * (Number(a.split(".")[1]) ||
                0) : 0
        };

    function Mk(a) {
        var b = Xk(a.split("."));
        return 0 === b.length ? null : {
            version: b[0],
            R: b[2],
            timestamp: 1E3 * (Number(b[1]) || 0),
            labels: b.slice(3)
        }
    }

    function Xk(a) {
        return 3 > a.length || "GCL" !== a[0] && "1" !== a[0] || !/^\d+$/.test(a[1]) || !Gk.test(a[2]) ? [] : a
    }
    var Yk = function(a, b, c, d, e) {
            if (va(b) && Fi(C)) {
                var f = Pk(e),
                    h = function() {
                        for (var l = {}, m = 0; m < a.length; ++m) {
                            var n = Uk(a[m], f);
                            if (n) {
                                var p = Ii(n, E.cookie, void 0, "ad_storage");
                                p.length && (l[n] = p.sort()[p.length - 1])
                            }
                        }
                        return l
                    };
                Jk(function() {
                    ck(h, b, c, d)
                })
            }
        },
        Ok = function(a) {
            return a.filter(function(b) {
                return Gk.test(b.R)
            })
        },
        Zk = function(a, b) {
            if (Fi(C)) {
                for (var c = Pk(b.prefix), d = {}, e = 0; e < a.length; e++) Hk[a[e]] && (d[a[e]] = Hk[a[e]]);
                Jk(function() {
                    k(d, function(f, h) {
                        var l = Ii(c + h, E.cookie, void 0, "ad_storage");
                        l.sort(function(t,
                            u) {
                            return Vk(u) - Vk(t)
                        });
                        if (l.length) {
                            var m = l[0],
                                n = Vk(m),
                                p = 0 !== Xk(m.split(".")).length ? m.split(".").slice(3) : [],
                                q = {},
                                r;
                            r = 0 !== Xk(m.split(".")).length ? m.split(".")[2] : void 0;
                            q[f] = [r];
                            Sk(q, !0, b, n, p)
                        }
                    })
                })
            }
        };

    function $k(a, b) {
        for (var c = 0; c < b.length; ++c)
            if (a[b[c]]) return !0;
        return !1
    }
    var al = function(a) {
            function b(e, f, h) {
                h && (e[f] = h)
            }
            if (Of()) {
                var c = Rk();
                if ($k(c, a)) {
                    var d = {};
                    b(d, "gclid", c.gclid);
                    b(d, "dclid", c.dclid);
                    b(d, "gclsrc", c.gclsrc);
                    b(d, "wbraid", c.gbraid);
                    dk(function() {
                        return d
                    }, 3);
                    dk(function() {
                        var e = {};
                        return e._up = "1", e
                    }, 1)
                }
            }
        },
        bl = function(a, b, c, d) {
            var e = [];
            c = c || {};
            if (!Ik()) return e;
            var f = Kk(a);
            if (!f.length) return e;
            for (var h = 0; h < f.length; h++) - 1 === (f[h].labels || []).indexOf(b) ? e.push(0) : e.push(1);
            if (d) return e;
            if (1 !== e[0]) {
                var l = f[0],
                    m = f[0].timestamp,
                    n = [l.version, Math.round(m /
                        1E3), l.R].concat(l.labels || [], [b]).join("."),
                    p = Dj(c, m, !0);
                p.fb = "ad_storage";
                Ri(a, n, p)
            }
            return e
        };

    function cl(a, b) {
        var c = Pk(b),
            d = Uk(a, c);
        if (!d) return 0;
        for (var e = Kk(d), f = 0, h = 0; h < e.length; h++) f = Math.max(f, e[h].timestamp);
        return f
    }

    function dl(a) {
        var b = 0,
            c;
        for (c in a)
            for (var d = a[c], e = 0; e < d.length; e++) b = Math.max(b, Number(d[e].timestamp));
        return b
    }
    var el = function(a) {
        var b = Math.max(cl("aw", a), dl(Ik() ? tk() : {}));
        return Math.max(cl("gb", a), dl(Ik() ? tk("_gac_gb", !0) : {})) > b
    };
    var fl = function(a, b) {
            var c = !(P(80) ? Q(K.g.J) : 1) || a && !Q(K.g.F);
            return b && c ? "0" : b
        },
        il = function(a) {
            function b(w) {
                var x = P(80) ? Q(K.g.J) : !0,
                    y = l;
                P(80) && !Q(K.g.J) && (y = !1);
                var A;
                Be.reported_gclid || (Be.reported_gclid = {});
                A = Be.reported_gclid;
                var B = function() {
                    var Y = h.prefix || "_gcl";
                    return P(80) ? (y ? Y : "") + "." + (Q(K.g.F) ? 1 : 0) + "." + (Q(K.g.J) ? 1 : 0) : l && Q(K.g.F) ? n + "." + Y + (w ? "gcu" : "gcs") : n + (w ? "gcu" : "gcs")
                }();
                if (!A[B]) {
                    A[B] = !0;
                    var D = [],
                        I = {},
                        F = function(Y, ba) {
                            ba && (D.push(Y + "=" + encodeURIComponent(ba)), I[Y] = !0)
                        },
                        G = "https://www.google.com";
                    if (Of() || P(45)) {
                        var L = Q(K.g.F);
                        F("gcs", ti());
                        w && F("gcu", "1");
                        (P(49) || Pf()) && F("gcd", xi(f));
                        F("rnd", $i());
                        if ((!n || p && "aw.ds" !== p) && Q(K.g.F) && x) {
                            var N = Lk("_gcl_aw");
                            F("gclaw", N.join("."))
                        }
                        F("url", String(C.location).split(/[?#]/)[0]);
                        F("dclid", fl(d, q));
                        L || (G = "https://pagead2.googlesyndication.com")
                    }
                    P(51) && (Bi() && F("dma_cps", yi()), F("dma", Ai()));
                    P(82) && Vh(di()) && F("tcfd", Ci());
                    F("gdpr_consent",
                        ki() || "");
                    F("gdpr", li() || "");
                    "1" === Wj(!1)._up && F("gtm_up", "1");
                    F("gclid", fl(d, n));
                    F("gclsrc", p);
                    if (!(I.gclid || I.dclid || I.gclaw) && (F("gbraid", fl(d, r)), !I.gbraid && (Of() || P(45)) && Q(K.g.F))) {
                        var R = Lk("_gcl_gb");
                        0 < R.length && F("gclgb", R.join("."))
                    }
                    F("gtm", cj(!e));
                    l && Q(K.g.F) && (nk(h || {}), y && F("auid", hk[jk(h.prefix)] || ""));
                    hl || a.Sh && F("did", a.Sh);
                    a.Pf && F("gdid", a.Pf);
                    a.Lf && F("edid", a.Lf);
                    var Z = P(26) ? kj() : null;
                    if (Z) {
                        var S = function(Y, ba) {
                            D.push(Y + "=" + encodeURIComponent(ba));
                            I[Y] = !0
                        };
                        S("uaa", Z.architecture);
                        S("uab", Z.bitness);
                        Z.fullVersionList && S("uafvl", Z.fullVersionList.map(function(Y) {
                            return encodeURIComponent(Y.brand || "") + ";" + encodeURIComponent(Y.version || "")
                        }).join("|"));
                        S("uam", Z.model);
                        S("uap", Z.platform);
                        S("uapv", Z.platformVersion);
                        S("uaw", Z.wow64 ? "1" : "0")
                    }
                    var O = G + "/pagead/landing?" + D.join("&");
                    hc(O)
                }
            }
            var c = !!a.Jf,
                d = !!a.Pe,
                e = a.wi,
                f = a.s,
                h = void 0 === a.qc ? {} : a.qc,
                l = void 0 === a.Je ? !0 : a.Je,
                m = Rk(),
                n = m.gclid || "",
                p = m.gclsrc,
                q = m.dclid || "",
                r = m.gbraid || "",
                t = !c && ((!n || p && "aw.ds" !== p ? !1 : !0) || r),
                u = Of();
            if (t ||
                u)
                if (u) {
                    var v = P(80) ? [K.g.F, K.g.J, K.g.Ta] : [K.g.F];
                    bg(function() {
                        b();
                        Q(v) || ag(function(w) {
                            return b(!0, w.consentEventId, w.consentPriorityId)
                        }, v)
                    }, v)
                } else b()
        },
        gl = function(a) {
            var b = String(C.location).split(/[?#]/)[0],
                c = Ae.Ii || C._CONSENT_MODE_SALT;
            return a ? c ? String(Di(b + a + c)) : "0" : ""
        },
        hl = !1;
    var jl = /[A-Z]+/,
        kl = /\s/,
        ll = function(a, b) {
            if (g(a)) {
                a = Ga(a);
                var c = a.indexOf("-");
                if (!(0 > c)) {
                    var d = a.substring(0, c);
                    if (jl.test(d)) {
                        var e = a.substring(c + 1),
                            f;
                        if (b) {
                            var h = function(n) {
                                var p = n.indexOf("/");
                                return 0 > p ? [n] : [n.substring(0, p), n.substring(p + 1)]
                            };
                            f = h(e);
                            if ("DC" === d && 2 === f.length) {
                                var l = h(f[1]);
                                2 === l.length && (f[1] = l[0], f.push(l[1]))
                            }
                        } else {
                            f = e.split("/");
                            for (var m = 0; m < f.length; m++)
                                if (!f[m] || kl.test(f[m]) && ("AW" !== d || 1 !== m)) return
                        }
                        return {
                            id: a,
                            prefix: d,
                            X: d + "-" + f[0],
                            K: f
                        }
                    }
                }
            }
        },
        nl = function(a, b) {
            for (var c = {}, d = 0; d < a.length; ++d) {
                var e = ll(a[d], b);
                e && (c[e.id] = e)
            }
            ml(c);
            var f = [];
            k(c, function(h, l) {
                f.push(l)
            });
            return f
        };

    function ml(a) {
        var b = [],
            c;
        for (c in a)
            if (a.hasOwnProperty(c)) {
                var d = a[c];
                "AW" === d.prefix && d.K[1] && b.push(d.X)
            }
        for (var e = 0; e < b.length; ++e) delete a[b[e]]
    };
    var ol = function(a, b, c, d) {
        var e = Yb(),
            f;
        if (1 === e) a: {
            var h = Pe;h = h.toLowerCase();
            for (var l = "https://" + h, m = "http://" + h, n = 1, p = E.getElementsByTagName("script"), q = 0; q < p.length && 100 > q; q++) {
                var r = p[q].src;
                if (r) {
                    r = r.toLowerCase();
                    if (0 === r.indexOf(m)) {
                        f = 3;
                        break a
                    }
                    1 === n && 0 === r.indexOf(l) && (n = 2)
                }
            }
            f = n
        }
        else f = e;
        return (2 === f || d || "http:" != C.location.protocol ? a : b) + c
    };
    var ql = function(a, b, c) {
            if (C[a.functionName]) return b.fg && H(b.fg), C[a.functionName];
            var d = pl();
            C[a.functionName] = d;
            if (a.ze)
                for (var e = 0; e < a.ze.length; e++) C[a.ze[e]] = C[a.ze[e]] || pl();
            a.Ie && void 0 === C[a.Ie] && (C[a.Ie] = c);
            Xb(ol("https://", "http://", a.ng), b.fg, b.ml);
            return d
        },
        pl = function() {
            var a = function() {
                a.q = a.q || [];
                a.q.push(arguments)
            };
            return a
        },
        rl = {
            functionName: "_googWcmImpl",
            Ie: "_googWcmAk",
            ng: "www.gstatic.com/wcm/loader.js"
        },
        sl = {
            functionName: "_gaPhoneImpl",
            Ie: "ga_wpid",
            ng: "www.gstatic.com/gaphone/loader.js"
        },
        tl = {
            Fi: "",
            Tj: "5"
        },
        ul = {
            functionName: "_googCallTrackingImpl",
            ze: [sl.functionName, rl.functionName],
            ng: "www.gstatic.com/call-tracking/call-tracking_" + (tl.Fi || tl.Tj) + ".js"
        },
        vl = {},
        wl = function(a, b, c, d) {
            J(22);
            if (c) {
                d = d || {};
                var e = ql(rl, d, a),
                    f = {
                        ak: a,
                        cl: b
                    };
                void 0 === d.eb && (f.autoreplace = c);
                e(2, d.eb, f, c, 0, Ia(), d.options)
            }
        },
        xl = function(a, b, c, d) {
            J(21);
            if (b && c) {
                d = d || {};
                for (var e = {
                        countryNameCode: c,
                        destinationNumber: b,
                        retrievalTime: Ia()
                    }, f = 0; f < a.length; f++) {
                    var h = a[f];
                    vl[h.id] ||
                        (h && "AW" === h.prefix && !e.adData && 2 <= h.K.length ? (e.adData = {
                            ak: h.K[0],
                            cl: h.K[1]
                        }, vl[h.id] = !0) : h && "UA" === h.prefix && !e.gaData && (e.gaData = {
                            gaWpid: h.X
                        }, vl[h.id] = !0))
                }(e.gaData || e.adData) && ql(ul, d)(d.eb, e, d.options)
            }
        },
        yl = function() {
            var a = !1;
            return a
        },
        zl = function(a, b) {
            if (a)
                if (aj()) {} else {
                    if (g(a)) {
                        var c =
                            ll(a);
                        if (!c) return;
                        a = c
                    }
                    var d = void 0,
                        e = !1,
                        f = T(b, K.g.zj);
                    if (f && va(f)) {
                        d = [];
                        for (var h = 0; h < f.length; h++) {
                            var l = ll(f[h]);
                            l && (d.push(l), (a.id === l.id || a.id === a.X && a.X === l.X) && (e = !0))
                        }
                    }
                    if (!d || e) {
                        var m = T(b, K.g.ih),
                            n;
                        if (m) {
                            va(m) ? n = m : n = [m];
                            var p = T(b, K.g.gh),
                                q = T(b, K.g.hh),
                                r = T(b, K.g.jh),
                                t = T(b, K.g.yj),
                                u = p || q,
                                v = 1;
                            "UA" !== a.prefix || d || (v = 5);
                            for (var w = 0; w < n.length; w++)
                                if (w < v)
                                    if (d) xl(d, n[w], t, {
                                        eb: u,
                                        options: r
                                    });
                                    else if ("AW" === a.prefix && a.K[1]) yl() ? xl([a], n[w], t || "US", {
                                eb: u,
                                options: r
                            }) : wl(a.K[0], a.K[1], n[w], {
                                eb: u,
                                options: r
                            });
                            else if ("UA" === a.prefix)
                                if (yl()) xl([a], n[w], t || "US", {
                                    eb: u
                                });
                                else {
                                    var x = a.X,
                                        y = n[w],
                                        A = {
                                            eb: u
                                        };
                                    J(23);
                                    if (y) {
                                        A = A || {};
                                        var B = ql(sl, A, x),
                                            D = {};
                                        void 0 !== A.eb ? D.receiver = A.eb : D.replace = y;
                                        D.ga_wpid = x;
                                        D.destination = y;
                                        B(2, Ia(), D)
                                    }
                                }
                        }
                    }
                }
        };
    var Al, Bl = !1,
        Cl = function(a) {
            if (!Bl) {
                Bl = !0;
                Al = Al || {}
            }
            return Al[a]
        };
    var Dl = function(a, b, c) {
        this.target = a;
        this.eventName = b;
        this.s = c;
        this.h = {};
        this.metadata = z(c.eventMetadata || {});
        this.isAborted = !1
    };
    Dl.prototype.copyToHitData = function(a, b) {
        var c = T(this.s, a);
        void 0 !== c ? this.h[a] = c : void 0 !== b && (this.h[a] = b)
    };
    var El = function(a, b, c) {
        var d = Cl(a.target.X);
        return d && d.hasOwnProperty(b) ? d[b] : c
    };

    function Fl(a) {
        return {
            getDestinationId: function() {
                return a.target.X
            },
            getEventName: function() {
                return a.eventName
            },
            setEventName: function(b) {
                a.eventName = b
            },
            getHitData: function(b) {
                return a.h[b]
            },
            setHitData: function(b, c) {
                a.h[b] = c
            },
            setHitDataIfNotDefined: function(b, c) {
                void 0 === a.h[b] && (a.h[b] = c)
            },
            copyToHitData: function(b, c) {
                a.copyToHitData(b, c)
            },
            getMetadata: function(b) {
                return a.metadata[b]
            },
            setMetadata: function(b, c) {
                a.metadata[b] = c
            },
            isAborted: function() {
                return a.isAborted
            },
            abort: function() {
                a.isAborted = !0
            },
            getFromEventContext: function(b) {
                return T(a.s, b)
            },
            qm: function() {
                return a
            },
            getHitKeys: function() {
                return Object.keys(a.h)
            }
        }
    };
    var Ll = function(a, b, c) {
            var d = Be.joined_auid = Be.joined_auid || {},
                e = (c ? a || "_gcl" : "") + "." + b;
            if (d[e]) return !0;
            d[e] = !0;
            return !1
        },
        Ml = function() {
            var a = Aj(C.location.href).search.replace("?", "");
            return "1" === vj(a, "gad", !0)
        },
        Nl = function(a) {
            var b = [];
            k(a, function(c, d) {
                d = Ok(d);
                for (var e = [], f = 0; f < d.length; f++) e.push(d[f].R);
                e.length && b.push(c + ":" + e.join(","))
            });
            return b.join(";")
        },
        Ol = function(a, b, c) {
            if ("aw" === a || "dc" === a || "gb" === a) {
                var d = Cj("gcl" + a);
                if (d) return d.split(".")
            }
            var e = !P(80) || Q(K.g.J),
                f = Pk(b);
            if ("_gcl" ==
                f) {
                c = void 0 === c ? !0 : c;
                var h = !e || !Q(K.g.F) && c,
                    l;
                l = Rk()[a] || [];
                if (0 < l.length) return h ? ["0"] : l
            }
            if (!e) return [];
            var m = Uk(a, f);
            return m ? Lk(m) : []
        },
        Pl = function(a) {
            var b = P(80) ? [K.g.F, K.g.J] : [K.g.F];
            bg(function() {
                a();
                Q(b) || Tf(a, b)
            }, b)
        },
        Ql = /^(www\.)?google(\.com?)?(\.[a-z]{2}t?)?$/,
        Rl = /^www.googleadservices.com$/,
        Sl = function(a, b) {
            return Ol("aw", a, b)
        },
        Tl = function(a, b) {
            return Ol("dc", a, b)
        },
        Ul = function(a) {
            var b = !P(80) || Q(K.g.J),
                c = Cj("gac");
            return c ? !b || !Q(K.g.F) && a ? "0" : decodeURIComponent(c) : b ? Nl(Ik() ? tk() : {}) : ""
        },
        Vl = function(a) {
            var b = !P(80) || Q(K.g.J),
                c = Cj("gacgb");
            return c ? !b || !Q(K.g.F) && a ? "0" : decodeURIComponent(c) : b ? Nl(Ik() ? tk("_gac_gb", !0) : {}) : ""
        },
        Wl = function(a) {
            var b = Rk(),
                c = [],
                d = b.gclid,
                e = b.dclid,
                f = b.gclsrc || "aw",
                h = P(42) && Ml();
            !d || "aw.ds" !== f && "aw" !== f && "ds" !== f || c.push({
                R: d,
                yd: f
            });
            e && c.push({
                R: e,
                yd: "ds"
            });
            0 === c.length && b.gbraid && c.push({
                R: b.gbraid,
                yd: "gb"
            });
            P(34) && 0 === c.length && "aw.ds" === f && c.push({
                R: "",
                yd: "aw.ds"
            });
            Pl(function() {
                if (P(80) && P(87) || Q(K.g.F)) {
                    var l = !P(80) || Q(K.g.J);
                    nk(a);
                    var m;
                    if (l && (m = hk[jk(a.prefix)],
                            void 0 === m && !P(80))) return;
                    var n = l ? c : [],
                        p = [];
                    m && p.push("auid=" + m);
                    if (P(9)) {
                        var q = E.referrer ? yj(Aj(E.referrer), "host") : "";
                        0 === n.length && (P(39) ? Ql.test(q) || Rl.test(q) : Ql.test(q)) && n.push({
                            R: "",
                            yd: ""
                        });
                        if (0 === n.length && !h) return;
                        q && p.push("ref=" + encodeURIComponent(q));
                        var r = 1 === Nh() ? C.top.location.href : C.location.href;
                        r = r.replace(/[\?#].*$/, "");
                        p.push("url=" + encodeURIComponent(r));
                        p.push("tft=" + Ja());
                        var t = kc();
                        void 0 !== t && p.push("tfd=" + Math.round(t));
                        if (P(33)) {
                            var u = Nh();
                            p.push("frm=" + u)
                        }
                        h && p.push("gad=1")
                    }
                    var v =
                        Q(K.g.F) ? 'https://adservice.google.com/pagead/regclk' : "https://adservice.googlesyndication.com/pagead/regclk";
                    if (0 < n.length)
                        for (var w = 0; w < n.length; w++) {
                            var x = n[w],
                                y = x.R,
                                A = x.yd;
                            if (!Ll(a.prefix, A + "." + y, void 0 !== m)) {
                                var B = v + "?" + p.join("&");
                                "" !== y ? B = "gb" === A ? B + "&wbraid=" + y : B + "&gclid=" + y + "&gclsrc=" + A : "aw.ds" === A && (B += "&gclsrc=aw.ds");
                                hc(B)
                            }
                        } else if (h && !Ll(a.prefix, "gad", void 0 !== m)) {
                            var D = v + "?" + p.join("&");
                            hc(D)
                        }
                }
            })
        },
        Xl = function(a) {
            return Cj("gclaw") || Cj("gac") || 0 < (Rk().aw || []).length ? !1 : 0 < (Rk().gb || []).length ?
                !0 : el(a)
        };

    function am(a) {
        var b = T(a.s, K.g.qb),
            c = T(a.s, K.g.pb);
        b && !c ? (a.eventName !== K.g.la && a.eventName !== K.g.Td && J(131), a.isAborted = !0) : !b && c && (J(132), a.isAborted = !0)
    };
    var cm = function() {
            var a = C.screen;
            return {
                width: a ? a.width : 0,
                height: a ? a.height : 0
            }
        },
        dm = function(a) {
            if (E.hidden) return !0;
            var b = a.getBoundingClientRect();
            if (b.top == b.bottom || b.left == b.right || !C.getComputedStyle) return !0;
            var c = C.getComputedStyle(a, null);
            if ("hidden" === c.visibility) return !0;
            for (var d = a, e = c; d;) {
                if ("none" === e.display) return !0;
                var f = e.opacity,
                    h = e.filter;
                if (h) {
                    var l = h.indexOf("opacity(");
                    0 <= l && (h = h.substring(l + 8, h.indexOf(")", l)), "%" == h.charAt(h.length - 1) && (h = h.substring(0, h.length - 1)), f = Math.min(h,
                        f))
                }
                if (void 0 !== f && 0 >= f) return !0;
                (d = d.parentElement) && (e = C.getComputedStyle(d, null))
            }
            return !1
        };

    function Zm() {
        return "attribution-reporting"
    }

    function $m(a) {
        var b;
        b = void 0 === b ? document : b;
        var c;
        return !(null == (c = b.featurePolicy) || !c.allowedFeatures().includes(a))
    };
    var an = !1;

    function bn() {
        if ($m("join-ad-interest-group") && ta(Qb.joinAdInterestGroup)) return !0;
        an || (Lh('AymqwRC7u88Y4JPvfIF2F37QKylC04248hLCdJAsh8xgOfe/dVJPV3XS3wLFca1ZMVOtnBfVjaCMTVudWM//5g4AAAB7eyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjk1MTY3OTk5LCJpc1RoaXJkUGFydHkiOnRydWV9'), an = !0);
        return $m("join-ad-interest-group") && ta(Qb.joinAdInterestGroup)
    }

    function cn(a, b) {
        var c = void 0;
        try {
            c = E.querySelector('iframe[data-tagging-id="' + b + '"]')
        } catch (e) {}
        if (c) {
            var d = Number(c.dataset.loadTime);
            if (d && 6E4 > Ja() - d) {
                fb("TAGGING", 9);
                return
            }
        } else try {
            if (50 <= E.querySelectorAll('iframe[allow="join-ad-interest-group"][data-tagging-id*="-"]').length) {
                fb("TAGGING", 10);
                return
            }
        } catch (e) {}
        Zb(a, void 0, {
            allow: "join-ad-interest-group"
        }, {
            taggingId: b,
            loadTime: Ja()
        }, c)
    }

    function dn() {
        return "https://td.doubleclick.net"
    };
    var en = RegExp("^UA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*(?:%3BUA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*)*$"),
        fn = /^~?[\w-]+(?:\.~?[\w-]+)*$/,
        gn = /^\d+\.fls\.doubleclick\.net$/,
        hn = /;gac=([^;?]+)/,
        jn = /;gacgb=([^;?]+)/,
        kn = /;gclaw=([^;?]+)/,
        ln = /;gclgb=([^;?]+)/;

    function mn(a, b) {
        if (gn.test(E.location.host)) {
            var c = E.location.href.match(b);
            return c && 2 == c.length && c[1].match(en) ? decodeURIComponent(c[1]) : ""
        }
        var d = [],
            e;
        for (e in a) {
            for (var f = [], h = a[e], l = 0; l < h.length; l++) f.push(h[l].R);
            d.push(e + ":" + f.join(","))
        }
        return 0 < d.length ? d.join(";") : ""
    }
    var nn = function(a, b, c) {
        var d = Ik() ? tk("_gac_gb", !0) : {},
            e = [],
            f = !1,
            h;
        for (h in d) {
            var l = bl("_gac_gb_" + h, a, b, c);
            f = f || 0 !== l.length && l.some(function(m) {
                return 1 === m
            });
            e.push(h + ":" + l.join(","))
        }
        return {
            vk: f ? e.join(";") : "",
            uk: mn(d, jn)
        }
    };

    function on(a, b, c) {
        if (gn.test(E.location.host)) {
            var d = E.location.href.match(c);
            if (d && 2 == d.length && d[1].match(fn)) return [{
                R: d[1]
            }]
        } else return Kk((a || "_gcl") + b);
        return []
    }
    var pn = function(a) {
            return on(a, "_aw", kn).map(function(b) {
                return b.R
            }).join(".")
        },
        qn = function(a) {
            return on(a, "_gb", ln).map(function(b) {
                return b.R
            }).join(".")
        },
        rn = function(a, b) {
            var c = bl((b && b.prefix || "_gcl") + "_gb", a, b);
            return 0 === c.length || c.every(function(d) {
                return 0 === d
            }) ? "" : c.join(".")
        };
    var sn = function() {
        if (ta(C.__uspapi)) {
            var a = "";
            try {
                C.__uspapi("getUSPData", 1, function(b, c) {
                    if (c && b) {
                        var d = b.uspString;
                        d && RegExp("^[\\da-zA-Z-]{1,20}$").test(d) && (a = d)
                    }
                })
            } catch (b) {}
            return a
        }
    };
    var eo = {
        D: {
            qg: "ads_conversion_hit",
            Ye: "container_execute_start",
            sg: "container_setup_end",
            Ze: "container_setup_start",
            rg: "container_execute_end",
            ug: "container_yield_end",
            af: "container_yield_start",
            vh: "event_execute_end",
            uh: "event_evaluation_end",
            zf: "event_evaluation_start",
            wh: "event_setup_end",
            hd: "event_setup_start",
            xh: "ga4_conversion_hit",
            nd: "page_load",
            fm: "pageview",
            wb: "snippet_load",
            Hh: "tag_callback_error",
            Ih: "tag_callback_failure",
            Jh: "tag_callback_success",
            Kh: "tag_execute_end",
            oc: "tag_execute_start"
        }
    };

    function fo() {
        function a(c, d) {
            var e = hb(d);
            e && b.push(c + "=" + e)
        }
        var b = [];
        a("&u", "GTM");
        a("&ut", "TAGGING");
        a("&h", "HEALTH");
        return b.join("")
    };
    var go = !1,
        ho = "L S Y E EC TC HTC".split(" "),
        io = ["S", "V", "E"],
        jo = ["TS", "TI", "TE"];
    var Mo = function(a) {},
        No = function(a) {},
        Oo = function() {},
        Po = function(a, b) {},
        Qo = function(a, b) {},
        Ro = function(a, b) {},
        So = function(a, b) {},
        ko = function(a, b, c, d, e, f) {
            var h;
            h = void 0 === h ? !1 : h;
            var l = {};
            return l
        },
        lo = function(a) {
            var b = !1;
            return b
        },
        mo = function(a, b) {},
        To = function() {
            var a = {};
            return a
        },
        Fo = function(a) {
            a = void 0 === a ? !0 : a;
            var b = {};
            return b
        },
        Uo = function() {},
        Vo = function(a, b) {},
        Wo = function(a, b, c) {};
    var Xo = function(a, b) {
        var c, d = C.GooglebQhCsO;
        d || (d = {}, C.GooglebQhCsO = d);
        c = d;
        if (c[a]) return !1;
        c[a] = [];
        c[a][0] = b;
        return !0
    };
    var Yo = function(a, b, c) {
        var d = Gh(a, "fmt");
        if (b) {
            var e = Gh(a, "random"),
                f = Gh(a, "label") || "";
            if (!e) return !1;
            var h = hj(decodeURIComponent(f.replace(/\+/g, " ")) + ":" + decodeURIComponent(e.replace(/\+/g, " ")));
            if (!Xo(h, b)) return !1
        }
        d && 4 != d && (a = Ih(a, "rfmt", d));
        var l = Ih(a, "fmt", 4);
        Xb(l, function() {
            C.google_noFurtherRedirects && b && b.call && (C.google_noFurtherRedirects = null, b())
        }, void 0, c, E.getElementsByTagName("script")[0].parentElement || void 0);
        return !0
    };
    var np = function() {
            this.h = {}
        },
        op = function(a, b, c) {
            null != c && (a.h[b] = c)
        },
        pp = function(a) {
            return Object.keys(a.h).map(function(b) {
                return encodeURIComponent(b) + "=" + encodeURIComponent(a.h[b])
            }).join("&")
        },
        rp = function(a, b, c, d) {};

    function tp(a, b) {
        if (data.entities && data.entities[a]) return data.entities[a][b]
    };
    var vp = function(a) {
            var b = sg();
            up(b).event && up(b).event.push(a)
        },
        wp = function() {
            var a = up(sg());
            return a.event ? a.event : []
        };

    function up(a) {
        var b, c = Be.r;
        c || (c = {
            container: {}
        }, Be.r = c);
        b = c;
        var d = b.container[a];
        d || (d = {
            entity: [],
            event: []
        }, b.container[a] = d);
        return d
    };
    var xp = new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),
        yp = {
            cl: ["ecl"],
            customPixels: ["nonGooglePixels"],
            ecl: ["cl"],
            ehl: ["hl"],
            hl: ["ehl"],
            html: ["customScripts", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
            customScripts: ["html", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
            nonGooglePixels: [],
            nonGoogleScripts: ["nonGooglePixels"],
            nonGoogleIframes: ["nonGooglePixels"]
        },
        zp = {
            cl: ["ecl"],
            customPixels: ["customScripts", "html"],
            ecl: ["cl"],
            ehl: ["hl"],
            hl: ["ehl"],
            html: ["customScripts"],
            customScripts: ["html"],
            nonGooglePixels: ["customPixels", "customScripts", "html", "nonGoogleScripts", "nonGoogleIframes"],
            nonGoogleScripts: ["customScripts", "html"],
            nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"]
        },
        Ap = "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" "),
        Dp = function(a) {
            var b = af("gtm.allowlist") || af("gtm.whitelist");
            b && J(9);
            He && (b = ["google", "gtagfl", "lcl", "zone"]);
            Bp() && (He ?
                J(116) : J(117), Cp && (b = [], window.console && window.console.log && window.console.log("GTM blocked. See go/13687728.")));
            var c = b && Pa(Fa(b), yp),
                d = af("gtm.blocklist") || af("gtm.blacklist");
            d || (d = af("tagTypeBlacklist")) && J(3);
            d ? J(8) : d = [];
            Bp() && (d = Fa(d), d.push("nonGooglePixels", "nonGoogleScripts", "sandboxedScripts"));
            0 <= Fa(d).indexOf("google") && J(2);
            var e = d && Pa(Fa(d), zp),
                f = {};
            return function(h) {
                var l = h && h[pc.ia];
                if (!l || "string" != typeof l) return !0;
                l = l.replace(/^_*/, "");
                if (void 0 !== f[l]) return f[l];
                var m = Te[l] || [],
                    n = a(l, m),
                    p;
                p = up(sg()).entity;
                for (var q = 0; q < p.length; q++) try {
                    n = n && p[q](l, m)
                } catch (y) {
                    n = !1
                }
                if (b) {
                    var r;
                    if (r = n) a: {
                        if (0 > c.indexOf(l))
                            if (m && 0 < m.length)
                                for (var t = 0; t < m.length; t++) {
                                    if (0 > c.indexOf(m[t])) {
                                        J(11);
                                        r = !1;
                                        break a
                                    }
                                } else {
                                    r = !1;
                                    break a
                                }
                        r = !0
                    }
                    n = r
                }
                var u = !1;
                if (d) {
                    var v = 0 <= e.indexOf(l);
                    if (v) u = v;
                    else {
                        var w = Ba(e, m || []);
                        w && J(10);
                        u = w
                    }
                }
                var x = !n || u;
                x || !(0 <= m.indexOf("sandboxedScripts")) || c && -1 !== c.indexOf("sandboxedScripts") || (x = Ba(e, Ap));
                return f[l] = x
            }
        },
        Cp = !1;
    var Bp = function() {
            return xp.test(C.location && C.location.hostname)
        },
        Ep = function() {
            jg && up(sg()).entity.push(function(a) {
                var b = {};
                b[pc.ia] = "__" + a;
                for (var c in void 0)(void 0).hasOwnProperty(c) && (b["vtp_" + c] = (void 0)[c]);
                var d;
                if (fd(b)) {
                    var e = b[pc.ia];
                    if (!e) throw "Error: No function name given for function call.";
                    var f = Vc[e];
                    d = !!f && !!f.runInSiloedMode
                } else d = !!tp(b[pc.ia], 4);
                return d
            })
        };

    function Fp(a, b) {
        if (a) {
            var c = "" + a;
            0 !== c.indexOf("http://") && 0 !== c.indexOf("https://") && (c = "https://" + c);
            "/" === c[c.length - 1] && (c = c.substring(0, c.length - 1));
            return Aj("" + c + b).href
        }
    }

    function Gp() {
        return !!Ae.xe && "SGTM_TOKEN" !== Ae.xe.split("@@").join("")
    }

    function Hp(a) {
        for (var b = ha([K.g.Vc, K.g.Lb]), c = b.next(); !c.done; c = b.next()) {
            var d = T(a, c.value);
            if (d) return d
        }
    };
    var Jp = function(a, b, c, d) {
            if (!Ip() && !yg(a)) {
                var e = "?id=" + encodeURIComponent(a) + "&l=" + Ae.da,
                    f = 0 === a.indexOf("GTM-");
                f || (e += "&cx=c");
                P(67) && (e += "&gtm=" + cj());
                var h = Gp();
                h && (e += "&sign=" + Ae.xe);
                var l = c ? "/gtag/js" : "/gtm.js",
                    m = Je || Le ? Fp(b, l + e) : void 0;
                if (!m) {
                    var n = Ae.Sd + l;
                    h && Rb && f && (n = Rb.replace(/^(?:https?:\/\/)?/i, "").split(/[?#]/)[0]);
                    m = ol("https://", "http://", n + e)
                }
                var p = a;
                d.siloed && (Ag({
                    ctid: p,
                    isDestination: !1
                }), p = mg(p));
                var q = p,
                    r = zg();
                fg().container[q] = {
                    state: 1,
                    context: d,
                    parent: r
                };
                gg({
                    ctid: q,
                    isDestination: !1
                });
                Xb(m)
            }
        },
        Kp = function(a, b, c) {
            var d;
            if (d = !Ip()) {
                var e = fg().destination[a];
                d = !(e && e.state)
            }
            if (d)
                if (Bg()) fg().destination[a] = {
                    state: 0,
                    transportUrl: b,
                    context: c,
                    parent: zg()
                }, gg({
                    ctid: a,
                    isDestination: !0
                }), J(91);
                else {
                    var f = "/gtag/destination?id=" + encodeURIComponent(a) + "&l=" + Ae.da + "&cx=c";
                    P(67) && (f += "&gtm=" + cj());
                    Gp() && (f += "&sign=" + Ae.xe);
                    var h = Je || Le ? Fp(b, f) : void 0;
                    h || (h = ol("https://", "http://", Ae.Sd + f));
                    var l = a;
                    c.siloed && (Ag({
                        ctid: l,
                        isDestination: !0
                    }), l = mg(l));
                    fg().destination[l] = {
                        state: 1,
                        context: c,
                        parent: zg()
                    };
                    gg({
                        ctid: l,
                        isDestination: !0
                    });
                    Xb(h)
                }
        };

    function Ip() {
        if (aj()) {
            return !0
        }
        return !1
    };
    var Lp = "",
        Mp = [];

    function Np(a) {
        var b = "";
        Lp && (b = "&dl=" + encodeURIComponent(Lp));
        0 < Mp.length && (b += "&tdp=" + Mp.join("."));
        a.Cb && (Lp = "", Mp.length = 0, b && a.ri());
        return b
    };
    var Op = [];

    function Pp(a) {
        if (!Op.length) return "";
        var b = "&tdc=" + Op.join("!");
        a.Cb && (a.ri(), Op.length = 0);
        return b
    };
    var Qp = {
            initialized: 11,
            complete: 12,
            interactive: 13
        },
        Rp = {},
        Sp = Object.freeze((Rp[K.g.Ka] = !0, Rp)),
        Tp = 0 <= E.location.search.indexOf("?gtm_diagnostics=") || 0 <= E.location.search.indexOf("&gtm_diagnostics="),
        Vp = function(a, b, c) {
            if (Lg && "config" === a && !(1 < ll(b).K.length)) {
                var d, e = Sb("google_tag_data", {});
                e.td || (e.td = {});
                d = e.td;
                var f = z(c.I);
                z(c.h, f);
                var h = [],
                    l;
                for (l in d) {
                    var m = Up(d[l], f);
                    m.length && (Tp && console.log(m), h.push(l))
                }
                h.length && (h.length && Lg && Op.push(b + "*" + h.join(".")), fb("TAGGING", Qp[E.readyState] ||
                    14));
                d[b] = f
            }
        };

    function Wp(a, b) {
        var c = {},
            d;
        for (d in b) b.hasOwnProperty(d) && (c[d] = !0);
        for (var e in a) a.hasOwnProperty(e) && (c[e] = !0);
        return c
    }

    function Up(a, b, c, d) {
        c = void 0 === c ? {} : c;
        d = void 0 === d ? "" : d;
        if (a === b) return [];
        var e = function(q, r) {
                var t = r[q];
                return void 0 === t ? Sp[q] : t
            },
            f;
        for (f in Wp(a, b)) {
            var h = (d ? d + "." : "") + f,
                l = e(f, a),
                m = e(f, b),
                n = "object" === Va(l) || "array" === Va(l),
                p = "object" === Va(m) || "array" === Va(m);
            if (n && p) Up(l, m, c, h);
            else if (n || p || l !== m) c[h] = !0
        }
        return Object.keys(c)
    };
    var Xp = !1,
        Yp = 0,
        Zp = [];

    function $p(a) {
        if (!Xp) {
            var b = E.createEventObject,
                c = "complete" == E.readyState,
                d = "interactive" == E.readyState;
            if (!a || "readystatechange" != a.type || c || !b && d) {
                Xp = !0;
                for (var e = 0; e < Zp.length; e++) H(Zp[e])
            }
            Zp.push = function() {
                for (var f = 0; f < arguments.length; f++) H(arguments[f]);
                return 0
            }
        }
    }

    function aq() {
        if (!Xp && 140 > Yp) {
            Yp++;
            try {
                E.documentElement.doScroll("left"), $p()
            } catch (a) {
                C.setTimeout(aq, 50)
            }
        }
    }
    var bq = function(a) {
        Xp ? a() : Zp.push(a)
    };
    var cq = function(a, b) {
        return {
            entityType: 1,
            indexInOriginContainer: a,
            nameInOriginContainer: b,
            originContainerId: rg()
        }
    };
    var eq = function(a, b) {
            this.h = !1;
            this.I = [];
            this.M = {
                tags: []
            };
            this.U = !1;
            this.B = this.C = 0;
            dq(this, a, b)
        },
        fq = function(a, b, c, d) {
            if (Ee.hasOwnProperty(b) || "__zone" === b) return -1;
            var e = {};
            Xa(d) && (e = z(d, e));
            e.id = c;
            e.status = "timeout";
            return a.M.tags.push(e) - 1
        },
        gq = function(a, b, c, d) {
            var e = a.M.tags[b];
            e && (e.status = c, e.executionTime = d)
        },
        hq = function(a) {
            if (!a.h) {
                for (var b = a.I, c = 0; c < b.length; c++) b[c]();
                a.h = !0;
                a.I.length = 0
            }
        },
        dq = function(a, b, c) {
            void 0 !== b && iq(a, b);
            c && C.setTimeout(function() {
                return hq(a)
            }, Number(c))
        },
        iq =
        function(a, b) {
            var c = La(function() {
                return H(function() {
                    b(rg(), a.M)
                })
            });
            a.h ? c() : a.I.push(c)
        },
        jq = function(a) {
            a.C++;
            return La(function() {
                a.B++;
                a.U && a.B >= a.C && hq(a)
            })
        },
        kq = function(a) {
            a.U = !0;
            a.B >= a.C && hq(a)
        };
    var lq = {},
        nq = function() {
            return C[mq()]
        },
        oq = !1;
    var pq = function(a) {
            C.GoogleAnalyticsObject || (C.GoogleAnalyticsObject = a || "ga");
            var b = C.GoogleAnalyticsObject;
            if (C[b]) C.hasOwnProperty(b);
            else {
                var c = function() {
                    c.q = c.q || [];
                    c.q.push(arguments)
                };
                c.l = Number(Ia());
                C[b] = c
            }
            return C[b]
        },
        qq = function(a) {
            if (Of()) {
                var b = nq();
                b(a + "require", "linker");
                b(a + "linker:passthrough", !0)
            }
        };

    function mq() {
        return C.GoogleAnalyticsObject || "ga"
    }
    var rq = function(a) {},
        sq = function(a, b) {
            return function() {
                var c = nq(),
                    d = c && c.getByName && c.getByName(a);
                if (d) {
                    var e = d.get("sendHitTask");
                    d.set("sendHitTask", function(f) {
                        var h = f.get("hitPayload"),
                            l = f.get("hitCallback"),
                            m = 0 > h.indexOf("&tid=" + b);
                        m && (f.set("hitPayload", h.replace(/&tid=UA-[0-9]+-[0-9]+/, "&tid=" + b), !0), f.set("hitCallback", void 0, !0));
                        e(f);
                        m && (f.set("hitPayload",
                            h, !0), f.set("hitCallback", l, !0), f.set("_x_19", void 0, !0), e(f))
                    })
                }
            }
        };
    var Xq = {},
        Yq = {};

    function Zq(a, b) {
        if (Lg) {
            var c;
            c = b.match(/^(gtm|gtag)\./) ? encodeURIComponent(b) : "*";
            Xq[a] = "&e=" + c + "&eid=" + a;
            Vg(a)
        }
    }

    function $q(a) {
        var b = a.eventId,
            c = a.Cb;
        if (!Xq[b]) return "";
        var d = Yq[b] ? "" : "&es=1";
        d += Xq[b];
        c && (Yq[b] = !0);
        return d
    };
    var ar = {};

    function br(a, b) {
        Lg && (ar[a] = ar[a] || {}, ar[a][b] = (ar[a][b] || 0) + 1)
    }

    function cr(a) {
        var b = a.eventId,
            c = a.Cb,
            d = ar[b] || {},
            e = [],
            f;
        for (f in d) d.hasOwnProperty(f) && e.push("" + f + d[f]);
        c && delete ar[b];
        return e.length ? "&md=" + e.join(".") : ""
    };
    var dr = {},
        er = {
            aev: "1",
            c: "2",
            jsm: "3",
            v: "4",
            j: "5",
            smm: "6",
            rmm: "7",
            input: "8"
        };

    function fr(a, b, c) {
        if (Lg) {
            dr[a] = dr[a] || [];
            var d = er[b] || "0",
                e;
            e = c instanceof C.Element ? "1" : c instanceof C.Event ? "2" : c instanceof C.RegExp ? "3" : c === C ? "4" : c === E ? "5" : c instanceof C.Promise ? "6" : c instanceof C.Storage ? "7" : c instanceof C.Date ? "8" : c instanceof C.History ? "9" : c instanceof C.Performance ? "a" : c === C.crypto ? "b" : c instanceof C.Location ? "c" : c instanceof C.Navigator ? "d" : "object" !== typeof c || Xa(c) ? "0" : "e";
            dr[a].push("" + d + e)
        }
    }

    function gr(a) {
        var b = a.eventId,
            c = dr[b] || [];
        if (!c.length) return "";
        a.Cb && delete dr[b];
        return "&pcr=" + c.join(".")
    };
    var hr = {},
        ir = {};

    function jr(a, b, c) {
        if (Lg && b) {
            var d = dg(b);
            hr[a] = hr[a] || [];
            hr[a].push(c + d);
            var e = (fd(b) ? "1" : "2") + d;
            ir[a] = ir[a] || [];
            ir[a].push(e);
            Vg(a)
        }
    }

    function kr(a) {
        var b = a.eventId,
            c = a.Cb,
            d = "",
            e = hr[b] || [];
        e.length && (d += "&tr=" + e.join("."));
        var f = ir[b] || [];
        f.length && (d += "&ti=" + f.join("."));
        c && (delete hr[b], delete ir[b]);
        return d
    };

    function lr(a, b, c, d) {
        var e = Tc[a],
            f = mr(a, b, c, d);
        if (!f) return null;
        var h = cd(e[pc.Gh], c, []);
        if (h && h.length) {
            var l = h[0];
            f = lr(l.index, {
                onSuccess: f,
                onFailure: 1 === l.Uh ? b.terminate : f,
                terminate: b.terminate
            }, c, d)
        }
        return f
    }

    function mr(a, b, c, d) {
        function e() {
            if (f[pc.Nj]) l();
            else {
                var w = dd(f, c, []),
                    x = w[pc.Gi];
                if (null != x)
                    for (var y = 0; y < x.length; y++)
                        if (!Q(x[y])) {
                            l();
                            return
                        }
                var A = fq(c.Nb, String(f[pc.ia]), Number(f[pc.rd]), w[pc.Oj]),
                    B = !1;
                w.vtp_gtmOnSuccess = function() {
                    if (!B) {
                        B = !0;
                        var F = Ja() - I;
                        jr(c.id, Tc[a], "5");
                        gq(c.Nb, A, "success", F);
                        P(29) && Wo(c, f, eo.D.Jh);
                        h()
                    }
                };
                w.vtp_gtmOnFailure = function() {
                    if (!B) {
                        B = !0;
                        var F = Ja() - I;
                        jr(c.id, Tc[a], "6");
                        gq(c.Nb, A, "failure", F);
                        P(29) && Wo(c, f, eo.D.Ih);
                        l()
                    }
                };
                w.vtp_gtmTagId = f.tag_id;
                w.vtp_gtmEventId =
                    c.id;
                c.priorityId && (w.vtp_gtmPriorityId = c.priorityId);
                jr(c.id, f, "1");
                var D = function() {
                    pf(3);
                    var F = Ja() - I;
                    jr(c.id, f, "7");
                    gq(c.Nb, A, "exception", F);
                    P(29) && Wo(c, f, eo.D.Hh);
                    B || (B = !0, l())
                };
                P(29) && Vo(c, f);
                var I = Ja();
                try {
                    bd(w, {
                        event: c,
                        index: a,
                        type: 1
                    })
                } catch (F) {
                    D(F)
                }
                P(29) && Wo(c, f, eo.D.Kh)
            }
        }
        var f = Tc[a],
            h = b.onSuccess,
            l = b.onFailure,
            m = b.terminate;
        if (c.Uf(f)) return null;
        var n = cd(f[pc.Lh], c, []);
        if (n && n.length) {
            var p = n[0],
                q = lr(p.index, {
                    onSuccess: h,
                    onFailure: l,
                    terminate: m
                }, c, d);
            if (!q) return null;
            h = q;
            l = 2 === p.Uh ? m :
                q
        }
        if (f[pc.Ch] || f[pc.Qj]) {
            var r = f[pc.Ch] ? Uc : c.Kl,
                t = h,
                u = l;
            if (!r[a]) {
                e = La(e);
                var v = nr(a, r, e);
                h = v.onSuccess;
                l = v.onFailure
            }
            return function() {
                r[a](t, u)
            }
        }
        return e
    }

    function nr(a, b, c) {
        var d = [],
            e = [];
        b[a] = or(d, e, c);
        return {
            onSuccess: function() {
                b[a] = pr;
                for (var f = 0; f < d.length; f++) d[f]()
            },
            onFailure: function() {
                b[a] = qr;
                for (var f = 0; f < e.length; f++) e[f]()
            }
        }
    }

    function or(a, b, c) {
        return function(d, e) {
            a.push(d);
            b.push(e);
            c()
        }
    }

    function pr(a) {
        a()
    }

    function qr(a, b) {
        b()
    };
    var sr = function(a, b) {
            return 1 === arguments.length ? rr("config", a) : rr("config", a, b)
        },
        tr = function(a, b, c) {
            c = c || {};
            c[K.g.Kb] = a;
            return rr("event", b, c)
        };

    function rr(a) {
        return arguments
    }
    var ur = function() {
        this.h = [];
        this.B = []
    };
    ur.prototype.enqueue = function(a, b, c) {
        var d = this.h.length + 1;
        a["gtm.uniqueEventId"] = b;
        a["gtm.priorityId"] = d;
        c.eventId = b;
        c.fromContainerExecution = !0;
        c.priorityId = d;
        var e = {
            message: a,
            notBeforeEventId: b,
            priorityId: d,
            messageContext: c
        };
        this.h.push(e);
        for (var f = 0; f < this.B.length; f++) try {
            this.B[f](e)
        } catch (h) {}
    };
    ur.prototype.listen = function(a) {
        this.B.push(a)
    };
    ur.prototype.get = function() {
        for (var a = {}, b = 0; b < this.h.length; b++) {
            var c = this.h[b],
                d = a[c.notBeforeEventId];
            d || (d = [], a[c.notBeforeEventId] = d);
            d.push(c)
        }
        return a
    };
    ur.prototype.prune = function(a) {
        for (var b = [], c = [], d = 0; d < this.h.length; d++) {
            var e = this.h[d];
            e.notBeforeEventId === a ? b.push(e) : c.push(e)
        }
        this.h = c;
        return b
    };
    var wr = function(a, b, c) {
            vr().enqueue(a, b, c)
        },
        yr = function() {
            var a = xr;
            vr().listen(a)
        };

    function vr() {
        var a = Be.mb;
        a || (a = new ur, Be.mb = a);
        return a
    }
    var Gr = function(a) {
            var b = Be.zones;
            return b ? b.getIsAllowedFn(ng(), a) : function() {
                return !0
            }
        },
        Hr = function() {
            vp(function(a, b) {
                var c = Be.zones;
                return c ? c.isActive(ng(), b) : !0
            })
        };
    var Kr = function(a, b) {
        for (var c = [], d = 0; d < Tc.length; d++)
            if (a[d]) {
                var e = Tc[d];
                var f = jq(b.Nb);
                try {
                    var h = lr(d, {
                        onSuccess: f,
                        onFailure: f,
                        terminate: f
                    }, b, d);
                    if (h) {
                        var l = e[pc.ia];
                        if (!l) throw "Error: No function name given for function call.";
                        var m = Vc[l];
                        c.push({
                            vi: d,
                            ji: (m ? m.priorityOverride || 0 : 0) || tp(e[pc.ia], 1) || 0,
                            execute: h
                        })
                    } else Ir(d, b), f()
                } catch (p) {
                    f()
                }
            }
        c.sort(Jr);
        for (var n = 0; n < c.length; n++) c[n].execute();
        return 0 < c.length
    };

    function Jr(a, b) {
        var c, d = b.ji,
            e = a.ji;
        c = d > e ? 1 : d < e ? -1 : 0;
        var f;
        if (0 !== c) f = c;
        else {
            var h = a.vi,
                l = b.vi;
            f = h > l ? 1 : h < l ? -1 : 0
        }
        return f
    }

    function Ir(a, b) {
        if (Lg) {
            var c = function(d) {
                var e = b.Uf(Tc[d]) ? "3" : "4",
                    f = cd(Tc[d][pc.Gh], b, []);
                f && f.length && c(f[0].index);
                jr(b.id, Tc[d], e);
                var h = cd(Tc[d][pc.Lh], b, []);
                h && h.length && c(h[0].index)
            };
            c(a)
        }
    }
    var Nr = !1,
        Lr;
    var Sr = function(a) {
        var b = a["gtm.uniqueEventId"],
            c = a["gtm.priorityId"],
            d = a.event;
        P(29) && Po(b, d);
        if ("gtm.js" === d) {
            if (Nr) return !1;
            Nr = !0
        }
        var e, f = !1;
        if (wp().every(function(r) {
                return r(d, b)
            })) e = Gr(b);
        else {
            if ("gtm.js" !== d && "gtm.init" !== d && "gtm.init_consent" !== d) return !1;
            f = !0;
            e = Gr(Number.MAX_SAFE_INTEGER)
        }
        Zq(b, d);
        var h = a.eventCallback,
            l = a.eventTimeout,
            m = {
                id: b,
                priorityId: c,
                name: d,
                Uf: Dp(e),
                Kl: [],
                bi: function() {
                    J(6);
                    pf(0)
                },
                Ph: Or(),
                Qh: Pr(b),
                Nb: new eq(function() {
                    if (P(29)) {}
                    h && h.apply(h, [].slice.call(arguments, 0))
                }, l)
            };
        P(57) && (m.kg = br);
        P(29) && Ro(m.id, m.name);
        var n = jd(m);
        P(29) && So(m.id, m.name);
        f && (n = Qr(n));
        P(29) && Qo(b, d);
        var p = Kr(n, m),
            q = !1;
        kq(m.Nb);
        "gtm.js" !== d && "gtm.sync" !== d || rq(rg());
        return Rr(n, p) || q
    };

    function Pr(a) {
        return function(b) {
            Ya(b) || fr(a, "input", b)
        }
    }

    function Or() {
        var a = {};
        a.event = ef("event", 1);
        a.ecommerce = ef("ecommerce", 1);
        a.gtm = ef("gtm");
        a.eventModel = ef("eventModel");
        return a
    }

    function Qr(a) {
        for (var b = [], c = 0; c < a.length; c++)
            if (a[c]) {
                var d = String(Tc[c][pc.ia]);
                if (De[d] || void 0 !== Tc[c][pc.Rj] || Ue[d] || tp(d, 2)) b[c] = !0
            }
        return b
    }

    function Rr(a, b) {
        if (!b) return b;
        for (var c = 0; c < a.length; c++)
            if (a[c] && Tc[c] && !Ee[String(Tc[c][pc.ia])]) return !0;
        return !1
    }
    var Tr = {};

    function Ur(a, b, c) {
        Lg && void 0 !== a && (Tr[a] = Tr[a] || [], Tr[a].push(c + b), Vg(a))
    }

    function Vr(a) {
        var b = a.eventId,
            c = a.Cb,
            d = "",
            e = Tr[b] || [];
        e.length && (d += "&epr=" + e.join("."));
        c && delete Tr[b];
        return d
    };
    var Xr = function(a, b, c, d) {
            var e = ll(c, d.isGtmEvent);
            e && Wr.push("event", [b, a], e, d)
        },
        Yr = function(a, b, c, d) {
            var e = ll(c, d.isGtmEvent);
            e && Wr.push("get", [a, b], e, d)
        },
        Zr = function() {
            this.status = 1;
            this.I = {};
            this.h = {};
            this.M = {};
            this.U = null;
            this.C = {};
            this.B = !1
        },
        $r = function(a, b, c, d) {
            var e = Ja();
            this.type = a;
            this.C = e;
            this.h = b;
            this.B = c;
            this.messageContext = d
        },
        as = function() {
            this.B = {};
            this.C = {};
            this.h = []
        },
        bs = function(a, b) {
            var c = b.X;
            return a.B[c] = a.B[c] || new Zr
        },
        cs = function(a, b, c, d) {
            if (d.h) {
                var e = bs(a, d.h),
                    f = e.U;
                if (f) {
                    var h =
                        z(c),
                        l = z(e.I[d.h.id]),
                        m = z(e.C),
                        n = z(e.h),
                        p = z(a.C),
                        q = {};
                    if (Lg) try {
                        q = z(Ye)
                    } catch (v) {
                        J(72)
                    }
                    var r = d.h.prefix,
                        t = function(v) {
                            Ur(d.messageContext.eventId, r, v)
                        },
                        u = vh(uh(th(sh(rh(ph(oh(qh(nh(mh(lh(new kh(d.messageContext.eventId, d.messageContext.priorityId), h), l), m), n), p), q), d.messageContext.eventMetadata), function() {
                            if (t) {
                                var v = t;
                                t = void 0;
                                v("2");
                                if (d.messageContext.onSuccess) d.messageContext.onSuccess()
                            }
                        }), function() {
                            if (t) {
                                var v = t;
                                t = void 0;
                                v("3");
                                if (d.messageContext.onFailure) d.messageContext.onFailure()
                            }
                        }), !!d.messageContext.isGtmEvent));
                    try {
                        Ur(d.messageContext.eventId, r, "1"), Vp(d.type, d.h.id, u), f(d.h.id, b, d.C, u)
                    } catch (v) {
                        Ur(d.messageContext.eventId, r, "4")
                    }
                }
            }
        };
    as.prototype.register = function(a, b, c) {
        var d = bs(this, a);
        3 !== d.status && (d.U = b, d.status = 3, c && (z(d.h, c), d.h = c), this.flush())
    };
    as.prototype.push = function(a, b, c, d) {
        void 0 !== c && (1 === bs(this, c).status && (bs(this, c).status = 2, this.push("require", [{}], c, {})), bs(this, c).B && (d.deferrable = !1));
        this.h.push(new $r(a, c, b, d));
        d.deferrable || this.flush()
    };
    as.prototype.flush = function(a) {
        for (var b = this, c = [], d = !1, e = {}; this.h.length;) {
            e = {
                xb: e.xb,
                De: e.De
            };
            var f = this.h[0],
                h = f.h;
            if (f.messageContext.deferrable) !h || bs(this, h).B ? (f.messageContext.deferrable = !1, this.h.push(f)) : c.push(f), this.h.shift();
            else {
                switch (f.type) {
                    case "require":
                        if (3 !== bs(this, h).status && !a) {
                            this.h.push.apply(this.h, c);
                            return
                        }
                        break;
                    case "set":
                        k(f.B[0], function(r, t) {
                            z(Qa(r, t), b.C)
                        });
                        break;
                    case "config":
                        var l = bs(this, h);
                        e.xb = {};
                        k(f.B[0], function(r) {
                            return function(t, u) {
                                z(Qa(t, u), r.xb)
                            }
                        }(e));
                        var m = !!e.xb[K.g.Mb];
                        delete e.xb[K.g.Mb];
                        var n = h.X === h.id;
                        m || (n ? l.C = {} : l.I[h.id] = {});
                        l.B && m || cs(this, K.g.la, e.xb, f);
                        l.B = !0;
                        n ? z(e.xb, l.C) : (z(e.xb, l.I[h.id]), J(70));
                        d = !0;
                        break;
                    case "event":
                        e.De = {};
                        k(f.B[0], function(r) {
                            return function(t, u) {
                                z(Qa(t, u), r.De)
                            }
                        }(e));
                        cs(this, f.B[1], e.De, f);
                        break;
                    case "get":
                        var p = {},
                            q = (p[K.g.Ya] = f.B[0], p[K.g.nb] = f.B[1], p);
                        cs(this, K.g.Ha, q, f)
                }
                this.h.shift();
                ds(this, f)
            }
        }
        this.h.push.apply(this.h, c);
        d && this.flush()
    };
    var ds = function(a, b) {
            if ("require" !== b.type)
                if (b.h)
                    for (var c = bs(a, b.h).M[b.type] || [], d = 0; d < c.length; d++) c[d]();
                else
                    for (var e in a.B)
                        if (a.B.hasOwnProperty(e)) {
                            var f = a.B[e];
                            if (f && f.M)
                                for (var h = f.M[b.type] || [], l = 0; l < h.length; l++) h[l]()
                        }
        },
        es = function(a, b) {
            var c = Wr,
                d = z(b);
            z(bs(c, a).h, d);
            bs(c, a).h = d
        },
        Wr = new as;
    var fs = {},
        gs = {},
        hs = function(a, b) {
            for (var c = [], d = [], e = {}, f = 0; f < a.length; e = {
                    Me: e.Me,
                    He: e.He
                }, f++) {
                var h = a[f];
                if (0 <= h.indexOf("-")) {
                    if (e.Me = ll(h, b), e.Me) {
                        var l = pg();
                        xa(l, function(r) {
                            return function(t) {
                                return r.Me.X === t
                            }
                        }(e)) ? c.push(h) : d.push(h)
                    }
                } else {
                    var m = fs[h] || [];
                    e.He = {};
                    m.forEach(function(r) {
                        return function(t) {
                            return r.He[t] = !0
                        }
                    }(e));
                    for (var n = ng(), p = 0; p < n.length; p++)
                        if (e.He[n[p]]) {
                            c = c.concat(pg());
                            break
                        }
                    var q = gs[h] || [];
                    q.length && (c = c.concat(q))
                }
            }
            return {
                jl: c,
                kl: d
            }
        },
        is = function(a) {
            k(fs, function(b,
                c) {
                var d = c.indexOf(a);
                0 <= d && c.splice(d, 1)
            })
        },
        js = function(a) {
            k(gs, function(b, c) {
                var d = c.indexOf(a);
                0 <= d && c.splice(d, 1)
            })
        };
    var ks = "HA GF G UA AW DC MC".split(" "),
        ls = !1,
        ms = !1;

    function ns(a, b) {
        a.hasOwnProperty("gtm.uniqueEventId") || Object.defineProperty(a, "gtm.uniqueEventId", {
            value: Ve()
        });
        b.eventId = a["gtm.uniqueEventId"];
        b.priorityId = a["gtm.priorityId"];
        return {
            eventId: b.eventId,
            priorityId: b.priorityId
        }
    }
    var os = void 0,
        ps = void 0;

    function qs(a, b, c) {
        var d = z(a);
        d.eventId = void 0;
        d.inheritParentConfig = void 0;
        Object.keys(b).some(function(f) {
            return void 0 !== b[f]
        }) && J(136);
        var e = z(b);
        z(c, e);
        wr(sr(ng()[0], e), a.eventId, d)
    }

    function rs(a) {
        for (var b = ha([K.g.Vc, K.g.Lb]), c = b.next(); !c.done; c = b.next()) {
            var d = c.value,
                e = a && a[d] || Wr.C[d];
            if (e) return e
        }
    }
    var ss = {
            config: function(a, b) {
                var c = P(58),
                    d = ns(a, b);
                if (!(2 > a.length) && g(a[1])) {
                    var e = {};
                    if (2 < a.length) {
                        if (void 0 != a[2] && !Xa(a[2]) || 3 < a.length) return;
                        e = a[2]
                    }
                    var f = ll(a[1], b.isGtmEvent);
                    if (f) {
                        var h, l, m;
                        a: {
                            if (!ig.ld) {
                                var n = tg(zg());
                                if (Dg(n)) {
                                    var p = n.parent,
                                        q = p.isDestination;
                                    m = {
                                        nl: tg(p),
                                        il: q
                                    };
                                    break a
                                }
                            }
                            m = void 0
                        }
                        var r = m;
                        r && (h = r.nl, l = r.il);
                        Zq(d.eventId, "gtag.config");
                        var t = f.X,
                            u = f.id !== t;
                        if (u ? -1 === pg().indexOf(t) : -1 === ng().indexOf(t)) {
                            if (!(c && b.inheritParentConfig || P(25) && e[K.g.qb])) {
                                var v = rs(e);
                                if (u) Kp(t,
                                    v, {
                                        source: 2,
                                        fromContainerExecution: b.fromContainerExecution
                                    });
                                else if (c && void 0 !== h && -1 !== h.containers.indexOf(t)) {
                                    var w = e;
                                    os ? qs(b, w, os) : ps || (ps = z(w))
                                } else Jp(t, v, !0, {
                                    source: 2,
                                    fromContainerExecution: b.fromContainerExecution
                                })
                            }
                        } else {
                            if (h && (J(128), l && J(130), c && b.inheritParentConfig)) {
                                var x = e;
                                ps ? qs(b, ps, x) : !x[K.g.Mb] && Ge && os || (os = z(x));
                                return
                            }
                            if (Ge && !u && !e[K.g.Mb]) {
                                var y = ms;
                                ms = !0;
                                if (y) return
                            }
                            ls || J(43);
                            if (!b.noTargetGroup)
                                if (u) {
                                    js(f.id);
                                    var A = f.id,
                                        B = e[K.g.me] || "default";
                                    B = String(B).split(",");
                                    for (var D =
                                            0; D < B.length; D++) {
                                        var I = gs[B[D]] || [];
                                        gs[B[D]] = I;
                                        0 > I.indexOf(A) && I.push(A)
                                    }
                                } else {
                                    is(f.id);
                                    var F = f.id,
                                        G = e[K.g.me] || "default";
                                    G = G.toString().split(",");
                                    for (var L = 0; L < G.length; L++) {
                                        var N = fs[G[L]] || [];
                                        fs[G[L]] = N;
                                        0 > N.indexOf(F) && N.push(F)
                                    }
                                }
                            delete e[K.g.me];
                            var R = b.eventMetadata || {};
                            R.hasOwnProperty("is_external_event") || (R.is_external_event = !b.fromContainerExecution);
                            b.eventMetadata = R;
                            delete e[K.g.Pc];
                            for (var Z = u ? [f.id] : pg(), S = 0; S < Z.length; S++) {
                                var O = e,
                                    Y = z(b),
                                    ba = ll(Z[S], Y.isGtmEvent);
                                ba && Wr.push("config", [O], ba, Y)
                            }
                        }
                    }
                }
            },
            consent: function(a, b) {
                if (3 === a.length) {
                    J(39);
                    var c = ns(a, b),
                        d = a[1];
                    "default" === d ? Yf(a[2]) : "update" === d ? Zf(a[2], c) : "declare" === d ? b.fromContainerExecution && Xf(a[2]) : "core_platform_services" === d && $f(a[2])
                }
            },
            event: function(a, b) {
                var c = a[1];
                if (!(2 > a.length) && g(c)) {
                    var d;
                    if (2 < a.length) {
                        if (!Xa(a[2]) && void 0 != a[2] || 3 < a.length) return;
                        d = a[2]
                    }
                    var e = d,
                        f = {},
                        h = (f.event = c, f);
                    e && (h.eventModel = z(e), e[K.g.Pc] && (h.eventCallback = e[K.g.Pc]), e[K.g.fe] && (h.eventTimeout = e[K.g.fe]));
                    var l = ns(a, b),
                        m = l.eventId,
                        n = l.priorityId;
                    h["gtm.uniqueEventId"] = m;
                    n && (h["gtm.priorityId"] = n);
                    if ("optimize.callback" === c) return h.eventModel = h.eventModel || {}, h;
                    var p;
                    var q = d,
                        r = q && q[K.g.Kb];
                    void 0 === r && (r = af(K.g.Kb, 2), void 0 === r && (r = "default"));
                    if (g(r) || va(r)) {
                        var t;
                        b.isGtmEvent ? t = g(r) ? [r] : r : t = r.toString().replace(/\s+/g, "").split(",");
                        var u = hs(t, b.isGtmEvent),
                            v = u.jl,
                            w = u.kl;
                        if (w.length)
                            for (var x = rs(q), y = 0; y < w.length; y++) {
                                var A = ll(w[y], b.isGtmEvent);
                                A && Kp(A.X, x, {
                                    source: 3,
                                    fromContainerExecution: b.fromContainerExecution
                                })
                            }
                        p = nl(v,
                            b.isGtmEvent)
                    } else p = void 0;
                    var B = p;
                    if (B) {
                        Zq(m, c);
                        for (var D = [], I = 0; I < B.length; I++) {
                            var F = B[I],
                                G = z(b);
                            if (-1 !== ks.indexOf(ug(F.prefix))) {
                                var L = z(d),
                                    N = G.eventMetadata || {};
                                N.hasOwnProperty("is_external_event") || (N.is_external_event = !G.fromContainerExecution);
                                G.eventMetadata = N;
                                delete L[K.g.Pc];
                                Xr(c, L, F.id, G)
                            }
                            D.push(F.id)
                        }
                        h.eventModel = h.eventModel || {};
                        0 < B.length ? h.eventModel[K.g.Kb] = D.join() : delete h.eventModel[K.g.Kb];
                        ls || J(43);
                        void 0 === b.noGtmEvent && b.eventMetadata && b.eventMetadata.syn_or_mod && (b.noGtmEvent = !0);
                        h.eventModel[K.g.pb] && (b.noGtmEvent = !0);
                        return b.noGtmEvent ? void 0 : h
                    }
                }
            },
            get: function(a, b) {
                J(53);
                if (4 === a.length && g(a[1]) && g(a[2]) && ta(a[3])) {
                    var c = ll(a[1], b.isGtmEvent),
                        d = String(a[2]),
                        e = a[3];
                    if (c) {
                        ls || J(43);
                        var f = rs();
                        if (!xa(pg(), function(l) {
                                return c.X === l
                            })) Kp(c.X, f, {
                            source: 4,
                            fromContainerExecution: b.fromContainerExecution
                        });
                        else if (-1 !== ks.indexOf(ug(c.prefix))) {
                            ns(a, b);
                            var h = {};
                            Uf(z((h[K.g.Ya] = d, h[K.g.nb] = e, h)));
                            Yr(d, function(l) {
                                H(function() {
                                    return e(l)
                                })
                            }, c.id, b)
                        }
                    }
                }
            },
            js: function(a, b) {
                if (2 ==
                    a.length && a[1].getTime) {
                    ls = !0;
                    var c = ns(a, b),
                        d = c.eventId,
                        e = c.priorityId,
                        f = {};
                    return f.event = "gtm.js", f["gtm.start"] = a[1].getTime(), f["gtm.uniqueEventId"] = d, f["gtm.priorityId"] = e, f
                }
            },
            policy: function() {},
            set: function(a, b) {
                var c;
                2 == a.length && Xa(a[1]) ? c = z(a[1]) : 3 == a.length && g(a[1]) && (c = {}, Xa(a[2]) || va(a[2]) ? c[a[1]] = z(a[2]) : c[a[1]] = a[2]);
                if (c) {
                    var d = ns(a, b),
                        e = d.eventId,
                        f = d.priorityId;
                    z(c);
                    var h = z(c);
                    Wr.push("set", [h], void 0, b);
                    c["gtm.uniqueEventId"] = e;
                    f && (c["gtm.priorityId"] = f);
                    P(13) && delete c.event;
                    b.overwriteModelFields = !0;
                    return c
                }
            }
        },
        ts = {
            policy: !0
        };
    var us = function(a) {
            var b = C[Ae.da].hide;
            if (b && void 0 !== b[a] && b.end) {
                b[a] = !1;
                var c = !0,
                    d;
                for (d in b)
                    if (b.hasOwnProperty(d) && !0 === b[d]) {
                        c = !1;
                        break
                    }
                c && (b.end(), b.end = null)
            }
        },
        vs = function(a) {
            var b = C[Ae.da],
                c = b && b.hide;
            c && c.end && (c[a] = !0)
        };
    var ws = !1,
        xs = [];

    function ys() {
        if (!ws) {
            ws = !0;
            for (var a = 0; a < xs.length; a++) H(xs[a])
        }
    }
    var zs = function(a) {
        ws ? H(a) : xs.push(a)
    };
    var Qs = function(a) {
        if (Ps(a)) return a;
        this.h = a
    };
    Qs.prototype.getUntrustedMessageValue = function() {
        return this.h
    };
    var Ps = function(a) {
        return !a || "object" !== Va(a) || Xa(a) ? !1 : "getUntrustedMessageValue" in a
    };
    Qs.prototype.getUntrustedMessageValue = Qs.prototype.getUntrustedMessageValue;
    var Rs = 0,
        Ss = {},
        Ts = [],
        Us = [],
        Vs = !1,
        Ws = !1;

    function Xs(a, b) {
        return a.messageContext.eventId - b.messageContext.eventId || a.messageContext.priorityId - b.messageContext.priorityId
    }
    var Ys = function(a) {
            return C[Ae.da].push(a)
        },
        Zs = function(a, b) {
            if (!ua(b) || 0 > b) b = 0;
            var c = Be[Ae.da],
                d = 0,
                e = !1,
                f = void 0;
            f = C.setTimeout(function() {
                e || (e = !0, a());
                f = void 0
            }, b);
            return function() {
                var h = c ? c.subscribers : 1;
                ++d === h && (f && (C.clearTimeout(f), f = void 0), e || (a(), e = !0))
            }
        };

    function $s(a, b) {
        var c = a._clear || b.overwriteModelFields;
        k(a, function(e, f) {
            "_clear" !== e && (c && df(e), df(e, f))
        });
        Qe || (Qe = a["gtm.start"]);
        var d = a["gtm.uniqueEventId"];
        if (!a.event) return !1;
        "number" !== typeof d && (d = Ve(), a["gtm.uniqueEventId"] = d, df("gtm.uniqueEventId", d));
        return Sr(a)
    }

    function at(a) {
        if (null == a || "object" !== typeof a) return !1;
        if (a.event) return !0;
        if (Ca(a)) {
            var b = a[0];
            if ("config" === b || "event" === b || "js" === b || "get" === b) return !0
        }
        return !1
    }

    function bt() {
        var a;
        if (Us.length) a = Us.shift();
        else if (Ts.length) a = Ts.shift();
        else return;
        var b;
        var c = a;
        if (Vs || !at(c.message)) b = c;
        else {
            Vs = !0;
            var d = c.message["gtm.uniqueEventId"];
            "number" !== typeof d && (d = c.message["gtm.uniqueEventId"] = Ve());
            var e = {},
                f = {
                    message: (e.event = "gtm.init_consent", e["gtm.uniqueEventId"] = d - 2, e),
                    messageContext: {
                        eventId: d - 2
                    }
                },
                h = {},
                l = {
                    message: (h.event = "gtm.init", h["gtm.uniqueEventId"] = d - 1, h),
                    messageContext: {
                        eventId: d - 1
                    }
                };
            Ts.unshift(l, c);
            if (Lg) {
                var m = kg.ctid;
                if (m) {
                    var n, p = tg(zg());
                    n = p && p.context;
                    var q, r = Aj(C.location.href);
                    q = r.hostname + r.pathname;
                    var t = n && n.fromContainerExecution,
                        u = n && n.source,
                        v = kg.If,
                        w = ig.ld;
                    Lg && (Lp || (Lp = q), Mp.push(m + ";" + v + ";" + (t ? 1 : 0) + ";" + (u || 0) + ";" + (w ? 1 : 0)))
                }
            }
            b = f
        }
        return b
    }

    function ct() {
        for (var a = !1, b; !Ws && (b = bt());) {
            Ws = !0;
            delete Ye.eventModel;
            $e();
            var c = b,
                d = c.message,
                e = c.messageContext;
            if (null == d) Ws = !1;
            else {
                if (e.fromContainerExecution)
                    for (var f = ["gtm.allowlist", "gtm.blocklist", "gtm.whitelist", "gtm.blacklist", "tagTypeBlacklist"], h = 0; h < f.length; h++) {
                        var l = f[h],
                            m = af(l, 1);
                        if (va(m) || Xa(m)) m = z(m);
                        Ze[l] = m
                    }
                try {
                    if (ta(d)) try {
                        d.call(bf)
                    } catch (D) {} else if (va(d)) {
                        var n = d;
                        if (g(n[0])) {
                            var p = n[0].split("."),
                                q = p.pop(),
                                r = n.slice(1),
                                t = af(p.join("."), 2);
                            if (null != t) try {
                                t[q].apply(t, r)
                            } catch (D) {}
                        }
                    } else {
                        var u =
                            void 0,
                            v = !1;
                        if (Ca(d)) {
                            a: {
                                if (d.length && g(d[0])) {
                                    var w = ss[d[0]];
                                    if (w && (!e.fromContainerExecution || !ts[d[0]])) {
                                        u = w(d, e);
                                        break a
                                    }
                                }
                                u = void 0
                            }(v = u && "set" === d[0] && !!u.event) && J(101)
                        }
                        else u = d;
                        if (u) {
                            var x = $s(u, e);
                            a = x || a;
                            v && x && J(113)
                        }
                    }
                } finally {
                    e.fromContainerExecution && $e(!0);
                    var y = d["gtm.uniqueEventId"];
                    if ("number" === typeof y) {
                        for (var A = Ss[String(y)] || [], B = 0; B < A.length; B++) Us.push(dt(A[B]));
                        A.length && Us.sort(Xs);
                        delete Ss[String(y)];
                        y > Rs && (Rs = y)
                    }
                    Ws = !1
                }
            }
        }
        return !a
    }

    function et() {
        if (P(29)) {
            var a = ft();
        }
        var e = ct();
        try {
            us(rg())
        } catch (f) {}
        return e
    }

    function xr(a) {
        if (Rs < a.notBeforeEventId) {
            var b = String(a.notBeforeEventId);
            Ss[b] = Ss[b] || [];
            Ss[b].push(a)
        } else Us.push(dt(a)), Us.sort(Xs), H(function() {
            Ws || ct()
        })
    }

    function dt(a) {
        return {
            message: a.message,
            messageContext: a.messageContext
        }
    }
    var gt = function() {
            function a(f) {
                var h = {};
                if (Ps(f)) {
                    var l = f;
                    f = Ps(l) ? l.getUntrustedMessageValue() : void 0;
                    h.fromContainerExecution = !0
                }
                return {
                    message: f,
                    messageContext: h
                }
            }
            var b = Sb(Ae.da, []),
                c = Be[Ae.da] = Be[Ae.da] || {};
            !0 === c.pruned && J(83);
            Ss = vr().get();
            yr();
            bq(function() {
                if (!c.gtmDom) {
                    c.gtmDom = !0;
                    var f = {};
                    b.push((f.event = "gtm.dom", f))
                }
            });
            zs(function() {
                if (!c.gtmLoad) {
                    c.gtmLoad = !0;
                    var f = {};
                    b.push((f.event = "gtm.load", f))
                }
            });
            c.subscribers = (c.subscribers || 0) + 1;
            var d = b.push;
            b.push = function() {
                var f;
                if (0 < Be.SANDBOXED_JS_SEMAPHORE) {
                    f = [];
                    for (var h = 0; h < arguments.length; h++) f[h] = new Qs(arguments[h])
                } else f = [].slice.call(arguments, 0);
                var l = f.map(function(q) {
                    return a(q)
                });
                Ts.push.apply(Ts, l);
                var m = d.apply(b, f),
                    n = Math.max(100, Number("1000") || 300);
                if (this.length > n)
                    for (J(4), c.pruned = !0; this.length > n;) this.shift();
                var p = "boolean" !== typeof m || m;
                return ct() && p
            };
            var e = b.slice(0).map(function(f) {
                return a(f)
            });
            Ts.push.apply(Ts, e);
            ft() && (P(29) && Oo(), H(et))
        },
        ft = function() {
            var a = !0;
            return a
        };

    function ht(a) {
        if (null == a || 0 === a.length) return !1;
        var b = Number(a),
            c = Ja();
        return b < c + 3E5 && b > c - 9E5
    }

    function it(a) {
        return a && 0 === a.indexOf("pending:") ? ht(a.substr(8)) : !1
    };
    var Et = function() {};
    var Ft = new String("undefined"),
        Gt = function() {};
    Gt.prototype.toString = function() {
        return "undefined"
    };
    var Ht = new Gt;
    var Jt = function() {
            (Be.rm = Be.rm || {})[sg()] = function(a) {
                if (It.hasOwnProperty(a)) return It[a]
            }
        },
        Mt = function(a, b, c) {
            if (a instanceof Kt) {
                var d = a,
                    e = d.h,
                    f = b,
                    h = Ve();
                Lt[h] = [f, c];
                a = e.call(d, h);
                b = sa
            }
            return {
                Mk: a,
                onSuccess: b
            }
        },
        Nt = function(a) {
            var b = a ? 0 : 1;
            return function(c) {
                J(a ? 134 : 135);
                var d = Lt[c];
                if (d && "function" === typeof d[b]) d[b]();
                Lt[c] = void 0
            }
        },
        Ot = function(a) {
            var b = a === Ft;
            P(91) && (b = b || a === Ht);
            return b
        },
        Kt = function(a) {
            this.h = function(b) {
                for (var c = [], d = 0; d < a.length; d++) c.push(Ot(a[d]) ? b : a[d]);
                return c.join("")
            }
        };
    Kt.prototype.toString = function() {
        return this.h("undefined")
    };
    Kt.prototype.valueOf = Kt.prototype.toString;
    var It = {},
        Lt = {};
    var Pt = function(a, b, c) {
            var d = {
                event: b,
                "gtm.element": a,
                "gtm.elementClasses": ic(a, "className"),
                "gtm.elementId": a["for"] || cc(a, "id") || "",
                "gtm.elementTarget": a.formTarget || ic(a, "target") || ""
            };
            c && (d["gtm.triggers"] = c.join(","));
            d["gtm.elementUrl"] = (a.attributes && a.attributes.formaction ? a.formAction : "") || a.action || ic(a, "href") || a.src || a.code || a.codebase || "";
            return d
        },
        Qt = function(a) {
            Be.hasOwnProperty("autoEventsSettings") || (Be.autoEventsSettings = {});
            var b = Be.autoEventsSettings;
            b.hasOwnProperty(a) || (b[a] = {});
            return b[a]
        },
        Rt = function(a, b, c) {
            Qt(a)[b] = c
        },
        St = function(a, b, c, d) {
            var e = Qt(a),
                f = Ka(e, b, d);
            e[b] = c(f)
        },
        Tt = function(a, b, c) {
            var d = Qt(a);
            return Ka(d, b, c)
        };
    var mu = C.clearTimeout,
        nu = C.setTimeout,
        U = function(a, b, c, d) {
            if (aj()) {
                b && H(b)
            } else return Xb(a, b, c, d)
        },
        ou = function() {
            return new Date
        },
        pu = function() {
            return C.location.href
        },
        qu = function(a) {
            return yj(Aj(a), "fragment")
        },
        ru = function(a) {
            return zj(Aj(a))
        },
        su = function(a, b) {
            return af(a, b || 2)
        },
        tu = function(a, b, c) {
            var d;
            b ? (a.eventCallback = b, c && (a.eventTimeout = c), d = Ys(a)) : d = Ys(a);
            return d
        },
        uu = function(a, b) {
            C[a] = b
        },
        V = function(a, b, c) {
            b &&
                (void 0 === C[a] || c && !C[a]) && (C[a] = b);
            return C[a]
        },
        vu = function(a, b, c) {
            return Ii(a, b, void 0 === c ? !0 : !!c)
        },
        wu = function(a, b, c) {
            return 0 === Ri(a, b, c)
        },
        xu = function(a, b) {
            if (aj()) {
                b && H(b)
            } else Zb(a, b)
        },
        yu = function(a) {
            return !!Tt(a, "init", !1)
        },
        zu = function(a) {
            Rt(a, "init", !0)
        },
        Au = function(a, b, c) {
            Ya(a) || fr(c, b, a)
        };

    function Xu(a, b) {
        function c(h) {
            var l = Aj(h),
                m = yj(l, "protocol"),
                n = yj(l, "host", !0),
                p = yj(l, "port"),
                q = yj(l, "path").toLowerCase().replace(/\/$/, "");
            if (void 0 === m || "http" === m && "80" === p || "https" === m && "443" === p) m = "web", p = "default";
            return [m, n, p, q]
        }
        for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++)
            if (d[f] !== e[f]) return !1;
        return !0
    }

    function Yu(a) {
        return Zu(a) ? 1 : 0
    }

    function Zu(a) {
        var b = a.arg0,
            c = a.arg1;
        if (a.any_of && Array.isArray(c)) {
            for (var d = 0; d < c.length; d++) {
                var e = z(a, {});
                z({
                    arg1: c[d],
                    any_of: void 0
                }, e);
                if (Yu(e)) return !0
            }
            return !1
        }
        switch (a["function"]) {
            case "_cn":
                return 0 <= String(b).indexOf(String(c));
            case "_css":
                var f;
                a: {
                    if (b) try {
                        for (var h = 0; h < yd.length; h++) {
                            var l = yd[h];
                            if (b[l]) {
                                f = b[l](c);
                                break a
                            }
                        }
                    } catch (v) {}
                    f = !1
                }
                return f;
            case "_ew":
                var m, n;
                m = String(b);
                n = String(c);
                var p = m.length - n.length;
                return 0 <= p && m.indexOf(n, p) === p;
            case "_eq":
                return String(b) === String(c);
            case "_ge":
                return Number(b) >= Number(c);
            case "_gt":
                return Number(b) > Number(c);
            case "_lc":
                return 0 <= String(b).split(",").indexOf(String(c));
            case "_le":
                return Number(b) <= Number(c);
            case "_lt":
                return Number(b) < Number(c);
            case "_re":
                var q;
                var r = a.ignore_case ? "i" : void 0;
                try {
                    var t = String(c) + r,
                        u = zd.get(t);
                    u || (u = new RegExp(c, r), zd.set(t, u));
                    q = u.test(b)
                } catch (v) {
                    q = !1
                }
                return q;
            case "_sw":
                return 0 === String(b).indexOf(String(c));
            case "_um":
                return Xu(b, c)
        }
        return !1
    };

    function $u() {
        var a = ["&cv=7", "&rv=" + Ae.Ef, "&tc=" + Tc.filter(function(b) {
            return b
        }).length];
        Ae.pd && a.push("&x=" + Ae.pd);
        return a.join("")
    };
    var Dv = function() {
            var a = !0;
            mi(7) && mi(9) && mi(10) || (a = !1);
            return a
        },
        Ev = function() {
            var a = !0;
            mi(3) && mi(4) || (a = !1);
            return a
        };
    var Iv = function(a, b) {
            if (!b.isGtmEvent) {
                var c = T(b, K.g.Ya),
                    d = T(b, K.g.nb),
                    e = T(b, c);
                if (void 0 === e) {
                    var f = void 0;
                    Fv.hasOwnProperty(c) ? f = Fv[c] : Gv.hasOwnProperty(c) && (f = Gv[c]);
                    1 === f && (f = Hv(c));
                    g(f) ? nq()(function() {
                        var h = nq().getByName(a).get(f);
                        d(h)
                    }) : d(void 0)
                } else d(e)
            }
        },
        Jv = function(a, b) {
            var c = a[K.g.Ib],
                d = b + ".",
                e = a[K.g.O] || "",
                f = void 0 === c ? !!a.use_anchor : "fragment" === c,
                h = !!a[K.g.rb];
            e = String(e).replace(/\s+/g, "").split(",");
            var l = nq();
            l(d + "require", "linker");
            l(d + "linker:autoLink", e, f, h)
        },
        Nv = function(a,
            b, c) {
            if (Of() || P(45))
                if (!c.isGtmEvent || !Kv[a]) {
                    var d = !Q(K.g.N),
                        e = function(f) {
                            var h, l, m = nq(),
                                n = Lv(b, "", c),
                                p, q = n.createOnlyFields._useUp;
                            if (c.isGtmEvent || Mv(b, n.createOnlyFields)) {
                                c.isGtmEvent && (h = "gtm" + Ve(), l = n.createOnlyFields, n.gtmTrackerName && (l.name = h));
                                m(function() {
                                    var t = m.getByName(b);
                                    t && (p = t.get("clientId"));
                                    c.isGtmEvent || m.remove(b)
                                });
                                m("create", a, c.isGtmEvent ? l : n.createOnlyFields);
                                d && Q(K.g.N) && (d = !1, m(function() {
                                    var t = nq().getByName(c.isGtmEvent ? h : b);
                                    !t || t.get("clientId") == p && q || (c.isGtmEvent ? (n.fieldsToSet["&gcu"] = "1", n.fieldsToSet["&sst.gcut"] = ve[f]) : (n.fieldsToSend["&gcu"] = "1", n.fieldsToSend["&sst.gcut"] = ve[f]), t.set(n.fieldsToSet), c.isGtmEvent ? t.send("pageview") : t.send("pageview", n.fieldsToSend))
                                }));
                                c.isGtmEvent && m(function() {
                                    m.remove(h)
                                })
                            }
                        };
                    ag(function() {
                        return e(K.g.N)
                    }, K.g.N);
                    ag(function() {
                            return e(K.g.F)
                        },
                        K.g.F);
                    c.isGtmEvent && (Kv[a] = !0)
                }
        },
        Ov = function(a, b) {
            Gp() && b && (a[K.g.Hb] = b)
        },
        Xv = function(a, b, c) {
            function d() {
                var G = T(c, K.g.Kc);
                l(function() {
                    if (!c.isGtmEvent && Xa(G)) {
                        var L = u.fieldsToSend,
                            N = m().getByName(n),
                            R;
                        for (R in G)
                            if (G.hasOwnProperty(R) && /^(dimension|metric)\d+$/.test(R) && void 0 != G[R]) {
                                var Z = N.get(Hv(G[R]));
                                Pv(L, R, Z)
                            }
                    }
                })
            }

            function e() {
                if (u.displayfeatures) {
                    var G = "_dc_gtm_" + f.replace(/[^A-Za-z0-9-]/g, "");
                    p("require", "displayfeatures", void 0, {
                        cookieName: G
                    })
                }
            }
            var f = a,
                h = "https://www.google-analytics.com/analytics.js",
                l = c.isGtmEvent ? pq(T(c, "gaFunctionName")) : pq();
            if (ta(l)) {
                var m = nq,
                    n;
                c.isGtmEvent ? n = T(c, "name") || T(c, "gtmTrackerName") : n = "gtag_" + f.split("-").join("_");
                var p = function(G) {
                        var L = [].slice.call(arguments, 0);
                        L[0] = n ? n + "." + L[0] : "" + L[0];
                        l.apply(window, L)
                    },
                    q = function(G) {
                        var L = function(Y, ba) {
                                for (var aa = 0; ba && aa < ba.length; aa++) p(Y, ba[aa])
                            },
                            N = c.isGtmEvent,
                            R = N ? Qv(u) : Rv(b, c);
                        if (R) {
                            var Z = {};
                            Ov(Z, G);
                            p("require", "ec", "ec.js", Z);
                            N && R.Kf && p("set", "&cu", R.Kf);
                            var S = R.action;
                            if (N || "impressions" === S)
                                if (L("ec:addImpression",
                                        R.Zh), !N) return;
                            if ("promo_click" === S || "promo_view" === S || N && R.Nd) {
                                var O = R.Nd;
                                L("ec:addPromo", O);
                                if (O && 0 < O.length && "promo_click" === S) {
                                    N ? p("ec:setAction", S, R.Qa) : p("ec:setAction", S);
                                    return
                                }
                                if (!N) return
                            }
                            "promo_view" !== S && "impressions" !== S && (L("ec:addProduct", R.Sb), p("ec:setAction", S, R.Qa))
                        }
                    },
                    r = function(G) {
                        if (G) {
                            var L = {};
                            if (Xa(G))
                                for (var N in Sv) Sv.hasOwnProperty(N) && Tv(Sv[N], N, G[N], L);
                            Ov(L, x);
                            p("require", "linkid", L)
                        }
                    },
                    t = function() {
                        if (aj()) {} else {
                            var G =
                                T(c, K.g.wj);
                            G && (p("require", G, {
                                dataLayer: Ae.da
                            }), p("require", "render"))
                        }
                    },
                    u = Lv(n, b, c),
                    v = function(G, L, N) {
                        N && (L = "" + L);
                        u.fieldsToSend[G] = L
                    };
                !c.isGtmEvent && Mv(n, u.createOnlyFields) && (l(function() {
                    m() && m().remove(n)
                }), Uv[n] = !1);
                l("create", f, u.createOnlyFields);
                if (u.createOnlyFields[K.g.Hb] && !c.isGtmEvent) {
                    var w = Je || Le ? Fp(u.createOnlyFields[K.g.Hb], "/analytics.js") : void 0;
                    w && (h = w)
                }
                var x = c.isGtmEvent ? u.fieldsToSet[K.g.Hb] : u.createOnlyFields[K.g.Hb];
                if (x) {
                    var y = c.isGtmEvent ? u.fieldsToSet[K.g.ie] : u.createOnlyFields[K.g.ie];
                    y && !Uv[n] && (Uv[n] = !0, l(sq(n, y)))
                }
                c.isGtmEvent ? u.enableRecaptcha && p("require", "recaptcha", "recaptcha.js") : (d(), r(u.linkAttribution));
                var A = u[K.g.za];
                A && A[K.g.O] && Jv(A, n);
                p("set", u.fieldsToSet);
                if (c.isGtmEvent) {
                    if (u.enableLinkId) {
                        var B = {};
                        Ov(B, x);
                        p("require", "linkid", "linkid.js", B)
                    }
                    Nv(f, n, c)
                }
                if (b === K.g.bc)
                    if (c.isGtmEvent) {
                        e();
                        if (u.remarketingLists) {
                            var D = "_dc_gtm_" + f.replace(/[^A-Za-z0-9-]/g, "");
                            p("require", "adfeatures", {
                                cookieName: D
                            })
                        }
                        q(x);
                        p("send", "pageview");
                        u.createOnlyFields._useUp && qq(n + ".")
                    } else t(),
                        p("send", "pageview", u.fieldsToSend);
                else b === K.g.la ? (t(), zl(f, c), T(c, K.g.vb) && (al(["aw", "dc"]), qq(n + ".")), 0 != u.sendPageView && p("send", "pageview", u.fieldsToSend), Nv(f, n, c)) : b === K.g.Ha ? Iv(n, c) : "screen_view" === b ? p("send", "screenview", u.fieldsToSend) : "timing_complete" === b ? (u.fieldsToSend.hitType = "timing", v("timingCategory", u.eventCategory, !0), c.isGtmEvent ? v("timingVar", u.timingVar, !0) : v("timingVar", u.name, !0), v("timingValue", Da(u.value)), void 0 !== u.eventLabel && v("timingLabel", u.eventLabel, !0), p("send",
                    u.fieldsToSend)) : "exception" === b ? p("send", "exception", u.fieldsToSend) : "" === b && c.isGtmEvent || ("track_social" === b && c.isGtmEvent ? (u.fieldsToSend.hitType = "social", v("socialNetwork", u.socialNetwork, !0), v("socialAction", u.socialAction, !0), v("socialTarget", u.socialTarget, !0)) : ((c.isGtmEvent || Vv[b]) && q(x), c.isGtmEvent && e(), u.fieldsToSend.hitType = "event", v("eventCategory", u.eventCategory, !0), v("eventAction", u.eventAction || b, !0), void 0 !== u.eventLabel && v("eventLabel", u.eventLabel, !0), void 0 !== u.value && v("eventValue",
                    Da(u.value))), p("send", u.fieldsToSend));
                if (!Wv && !c.isGtmEvent) {
                    Wv = !0;
                    var I = function() {
                            c.onFailure()
                        },
                        F = function() {
                            m().loaded || I()
                        };
                    aj() ? H(F) : Xb(h, F, I)
                }
            } else H(c.onFailure)
        },
        Yv = function(a, b, c, d) {
            bg(function() {
                Xv(a, b, d)
            }, [K.g.N, K.g.F])
        },
        $v = function(a) {
            function b(e) {
                function f(l, m) {
                    for (var n = 0; n < m.length; n++) {
                        var p = m[n];
                        if (e[p]) {
                            h[l] = e[p];
                            break
                        }
                    }
                }
                var h = z(e);
                f("id", ["id", "item_id", "promotion_id"]);
                f("name", ["name", "item_name", "promotion_name"]);
                f("brand", ["brand", "item_brand"]);
                f("variant", ["variant",
                    "item_variant"
                ]);
                f("list", ["list_name", "item_list_name"]);
                f("position", ["list_position", "creative_slot", "index"]);
                (function() {
                    if (e.category) h.category = e.category;
                    else {
                        for (var l = "", m = 0; m < Zv.length; m++) void 0 !== e[Zv[m]] && (l && (l += "/"), l += e[Zv[m]]);
                        l && (h.category = l)
                    }
                })();
                f("listPosition", ["list_position"]);
                f("creative", ["creative_name"]);
                f("list", ["list_name"]);
                f("position", ["list_position", "creative_slot"]);
                return h
            }
            for (var c = [], d = 0; a && d < a.length; d++) a[d] && Xa(a[d]) && c.push(b(a[d]));
            return c.length ? c :
                void 0
        },
        aw = function(a) {
            return Q(a)
        },
        bw = !1;
    var Wv, Uv = {},
        Kv = {},
        cw = {},
        dw = Object.freeze((cw.page_hostname = 1, cw[K.g.Z] = 1, cw[K.g.jb] = 1, cw[K.g.Oa] = 1, cw[K.g.Ca] = 1, cw[K.g.Pa] = 1, cw[K.g.hc] = 1, cw[K.g.Jc] = 1, cw[K.g.Ja] = 1, cw[K.g.kb] = 1, cw[K.g.oa] = 1, cw[K.g.Sc] = 1, cw[K.g.Aa] = 1, cw[K.g.sb] = 1, cw)),
        ew = {},
        Fv = Object.freeze((ew.client_storage = "storage", ew.sample_rate = 1, ew.site_speed_sample_rate = 1, ew.store_gac = 1, ew.use_amp_client_id =
            1, ew[K.g.Wa] = 1, ew[K.g.ya] = "storeGac", ew[K.g.Oa] = 1, ew[K.g.Ca] = 1, ew[K.g.Pa] = 1, ew[K.g.hc] = 1, ew[K.g.Jc] = 1, ew[K.g.kb] = 1, ew)),
        fw = {},
        gw = Object.freeze((fw._cs = 1, fw._useUp = 1, fw.allowAnchor = 1, fw.allowLinker = 1, fw.alwaysSendReferrer = 1, fw.clientId = 1, fw.cookieDomain = 1, fw.cookieExpires = 1, fw.cookieFlags = 1, fw.cookieName = 1, fw.cookiePath = 1, fw.cookieUpdate = 1, fw.legacyCookieDomain = 1, fw.legacyHistoryImport = 1, fw.name = 1, fw.sampleRate = 1, fw.siteSpeedSampleRate = 1, fw.storage = 1, fw.storeGac = 1, fw.useAmpClientId = 1, fw._cd2l = 1, fw)),
        hw = Object.freeze({
            anonymize_ip: 1
        }),
        iw = {},
        Gv = Object.freeze((iw.campaign = {
                content: "campaignContent",
                id: "campaignId",
                medium: "campaignMedium",
                name: "campaignName",
                source: "campaignSource",
                term: "campaignKeyword"
            }, iw.app_id = 1, iw.app_installer_id = 1, iw.app_name = 1, iw.app_version = 1, iw.description = "exDescription", iw.fatal = "exFatal", iw.language = 1, iw.page_hostname = "hostname", iw.transport_type = "transport", iw[K.g.na] = "currencyCode", iw[K.g.eh] = 1, iw[K.g.oa] = "location", iw[K.g.Sc] = "page", iw[K.g.Aa] = "referrer", iw[K.g.sb] =
            "title", iw[K.g.uf] = 1, iw[K.g.wa] = 1, iw)),
        jw = {},
        kw = Object.freeze((jw.content_id = 1, jw.event_action = 1, jw.event_category = 1, jw.event_label = 1, jw.link_attribution = 1, jw.name = 1, jw[K.g.za] = 1, jw[K.g.bh] = 1, jw[K.g.Ka] = 1, jw[K.g.aa] = 1, jw)),
        lw = Object.freeze({
            displayfeatures: 1,
            enableLinkId: 1,
            enableRecaptcha: 1,
            eventAction: 1,
            eventCategory: 1,
            eventLabel: 1,
            gaFunctionName: 1,
            gtmEcommerceData: 1,
            gtmTrackerName: 1,
            linker: 1,
            remarketingLists: 1,
            socialAction: 1,
            socialNetwork: 1,
            socialTarget: 1,
            timingVar: 1,
            value: 1
        }),
        Zv = Object.freeze(["item_category",
            "item_category2", "item_category3", "item_category4", "item_category5"
        ]),
        mw = {},
        Sv = Object.freeze((mw.levels = 1, mw[K.g.Ca] = "duration", mw[K.g.hc] = 1, mw)),
        nw = {},
        ow = Object.freeze((nw.anonymize_ip = 1, nw.fatal = 1, nw.send_page_view = 1, nw.store_gac = 1, nw.use_amp_client_id = 1, nw[K.g.ya] = 1, nw[K.g.eh] = 1, nw)),
        Tv = function(a, b, c, d) {
            if (void 0 !== c)
                if (ow[b] && (c = Ea(c)), "anonymize_ip" !== b || c || (c = void 0), 1 === a) d[Hv(b)] = c;
                else if (g(a)) d[a] = c;
            else
                for (var e in a) a.hasOwnProperty(e) && void 0 !== c[e] && (d[a[e]] = c[e])
        },
        Hv = function(a) {
            return a &&
                g(a) ? a.replace(/(_[a-z])/g, function(b) {
                    return b[1].toUpperCase()
                }) : a
        },
        pw = {},
        Vv = Object.freeze((pw.checkout_progress = 1, pw.select_content = 1, pw.set_checkout_option = 1, pw[K.g.Xb] = 1, pw[K.g.Yb] = 1, pw[K.g.Eb] = 1, pw[K.g.Zb] = 1, pw[K.g.Ua] = 1, pw[K.g.hb] = 1, pw[K.g.Va] = 1, pw[K.g.ka] = 1, pw[K.g.ac] = 1, pw[K.g.xa] = 1, pw)),
        qw = {},
        rw = Object.freeze((qw.checkout_progress = 1, qw.set_checkout_option = 1, qw[K.g.Ag] = 1, qw[K.g.Bg] = 1, qw[K.g.Xb] = 1, qw[K.g.Yb] = 1, qw[K.g.Cg] = 1, qw[K.g.Eb] = 1, qw[K.g.ka] = 1, qw[K.g.ac] = 1, qw[K.g.Dg] = 1, qw)),
        sw = {},
        tw = Object.freeze((sw.generate_lead =
            1, sw.login = 1, sw.search = 1, sw.select_content = 1, sw.share = 1, sw.sign_up = 1, sw.view_search_results = 1, sw[K.g.Zb] = 1, sw[K.g.Ua] = 1, sw[K.g.hb] = 1, sw[K.g.Va] = 1, sw[K.g.xa] = 1, sw)),
        uw = function(a) {
            var b = "general";
            rw[a] ? b = "ecommerce" : tw[a] ? b = "engagement" : "exception" === a && (b = "error");
            return b
        },
        vw = {},
        ww = Object.freeze((vw.view_search_results = 1, vw[K.g.Ua] = 1, vw[K.g.Va] = 1, vw[K.g.xa] = 1, vw)),
        Pv = function(a, b, c) {
            a.hasOwnProperty(b) || (a[b] = c)
        },
        xw = function(a) {
            if (va(a)) {
                for (var b = [], c = 0; c < a.length; c++) {
                    var d = a[c];
                    if (void 0 != d) {
                        var e =
                            d.id,
                            f = d.variant;
                        void 0 != e && void 0 != f && b.push(String(e) + "." + String(f))
                    }
                }
                return 0 < b.length ? b.join("!") : void 0
            }
        },
        Lv = function(a, b, c) {
            var d = function(N) {
                    return T(c, N)
                },
                e = {},
                f = {},
                h = {},
                l = {},
                m = xw(d(K.g.uj));
            !c.isGtmEvent && m && Pv(f, "exp", m);
            h["&gtm"] = cj(!0);
            c.isGtmEvent || (h._no_slc = !0);
            if (Of() || P(45)) l._cs = aw;
            var n = d(K.g.Kc);
            if (!c.isGtmEvent && Xa(n))
                for (var p in n)
                    if (n.hasOwnProperty(p) && /^(dimension|metric)\d+$/.test(p) && void 0 != n[p]) {
                        var q = d(String(n[p]));
                        void 0 !== q && Pv(f, p, q)
                    }
            for (var r = !c.isGtmEvent, t = ah(c),
                    u = 0; u < t.length; ++u) {
                var v = t[u];
                if (c.isGtmEvent) {
                    var w = d(v);
                    lw.hasOwnProperty(v) ? e[v] = w : gw.hasOwnProperty(v) ? l[v] = w : h[v] = w
                } else {
                    var x = void 0;
                    x = v !== K.g.W ? d(v) : bh(c, v);
                    if (kw.hasOwnProperty(v)) Tv(kw[v], v, x, e);
                    else if (hw.hasOwnProperty(v)) Tv(hw[v], v, x, h);
                    else if (Gv.hasOwnProperty(v)) Tv(Gv[v], v, x, f);
                    else if (Fv.hasOwnProperty(v)) Tv(Fv[v], v, x, l);
                    else if (/^(dimension|metric|content_group)\d+$/.test(v)) Tv(1, v, x, f);
                    else if (v === K.g.W) {
                        if (!bw) {
                            var y = Sa(x);
                            y && (f["&did"] = y)
                        }
                        var A = void 0,
                            B = void 0;
                        b === K.g.la ? A = Sa(bh(c,
                            v), ".") : (A = Sa(bh(c, v, 1), "."), B = Sa(bh(c, v, 2), "."));
                        A && (f["&gdid"] = A);
                        B && (f["&edid"] = B)
                    } else v === K.g.Ja && 0 > t.indexOf(K.g.hc) && (l.cookieName = x + "_ga");
                    P(43) && dw[v] && (c.C.hasOwnProperty(v) || b === K.g.la && c.h.hasOwnProperty(v)) && (r = !1)
                }
            }
            P(43) && r && (f["&jsscut"] = "1");
            !1 !== d(K.g.df) && !1 !== d(K.g.jb) && Dv() || (h.allowAdFeatures = !1);
            si(c) && (P(82) || Ev()) ? P(53) && (h.allowAdPersonalizationSignals = !0) : h.allowAdPersonalizationSignals = !1;
            !c.isGtmEvent && d(K.g.vb) && (l._useUp = !0);
            if (c.isGtmEvent) {
                l.name = l.name || e.gtmTrackerName;
                var D = h.hitCallback;
                h.hitCallback = function() {
                    ta(D) && D();
                    c.onSuccess()
                }
            } else {
                Pv(l, "cookieDomain", "auto");
                Pv(h, "forceSSL", !0);
                Pv(e, "eventCategory", uw(b));
                ww[b] && Pv(f, "nonInteraction", !0);
                "login" === b || "sign_up" === b || "share" === b ? Pv(e, "eventLabel", d(K.g.bh)) : "search" === b || "view_search_results" === b ? Pv(e, "eventLabel", d(K.g.Ej)) : "select_content" === b && Pv(e, "eventLabel", d(K.g.lj));
                var I = e[K.g.za] || {},
                    F = I[K.g.kc];
                F || 0 != F && I[K.g.O] ? l.allowLinker = !0 : !1 === F && Pv(l, "useAmpClientId", !1);
                f.hitCallback = c.onSuccess;
                l.name = a
            }
            if (Of() || P(45)) h["&gcs"] = ti(), P(49) && (h["&gcd"] = xi(c)), Q(K.g.N) || (l.storage = "none"), Q(K.g.F) || (h.allowAdFeatures = !1, l.storeGac = !1);
            P(51) && (Bi() && (h["&dma_cps"] = yi()), h["&dma"] = Ai());
            P(82) && Vh(di()) && (h["&tcfd"] = Ci());
            var G = Hp(c) || d(K.g.Hb),
                L = d(K.g.ie);
            G && (c.isGtmEvent || (l[K.g.Hb] = G), l._cd2l = !0);
            L && !c.isGtmEvent && (l[K.g.ie] = L);
            e.fieldsToSend = f;
            e.fieldsToSet = h;
            e.createOnlyFields = l;
            return e
        },
        Qv = function(a) {
            var b = a.gtmEcommerceData;
            if (!b) return null;
            var c = {};
            b.currencyCode && (c.Kf = b.currencyCode);
            if (b.impressions) {
                c.action = "impressions";
                var d = b.impressions;
                c.Zh = "impressions" === b.translateIfKeyEquals ? $v(d) : d
            }
            if (b.promoView) {
                c.action = "promo_view";
                var e = b.promoView.promotions;
                c.Nd = "promoView" === b.translateIfKeyEquals ? $v(e) : e
            }
            if (b.promoClick) {
                c.action = "promo_click";
                var f = b.promoClick.promotions;
                c.Nd = "promoClick" === b.translateIfKeyEquals ? $v(f) : f;
                c.Qa = b.promoClick.actionField;
                return c
            }
            for (var h in b)
                if (b.hasOwnProperty(h) && "translateIfKeyEquals" !== h && "impressions" !== h && "promoView" !== h && "promoClick" !==
                    h && "currencyCode" !== h) {
                    c.action = h;
                    var l = b[h].products;
                    c.Sb = "products" === b.translateIfKeyEquals ? $v(l) : l;
                    c.Qa = b[h].actionField;
                    break
                }
            return Object.keys(c).length ? c : null
        },
        Rv = function(a, b) {
            function c(u) {
                return {
                    id: d(K.g.qa),
                    affiliation: d(K.g.Hg),
                    revenue: d(K.g.aa),
                    tax: d(K.g.jf),
                    shipping: d(K.g.Nc),
                    coupon: d(K.g.Ig),
                    list: d(K.g.hf) || d(K.g.Mc) || u
                }
            }
            for (var d = function(u) {
                    return T(b, u)
                }, e = d(K.g.T), f, h = 0; e && h < e.length && !(f = e[h][K.g.hf] || e[h][K.g.Mc]); h++);
            var l = d(K.g.Kc);
            if (Xa(l))
                for (var m = 0; e && m < e.length; ++m) {
                    var n =
                        e[m],
                        p;
                    for (p in l) l.hasOwnProperty(p) && /^(dimension|metric)\d+$/.test(p) && void 0 != l[p] && Pv(n, p, n[l[p]])
                }
            var q = null,
                r = d(K.g.pj);
            if (a === K.g.ka || a === K.g.ac) q = {
                action: a,
                Qa: c(),
                Sb: $v(e)
            };
            else if (a === K.g.Xb) q = {
                action: "add",
                Qa: c(),
                Sb: $v(e)
            };
            else if (a === K.g.Yb) q = {
                action: "remove",
                Qa: c(),
                Sb: $v(e)
            };
            else if (a === K.g.xa) q = {
                action: "detail",
                Qa: c(f),
                Sb: $v(e)
            };
            else if (a === K.g.Ua) q = {
                action: "impressions",
                Zh: $v(e)
            };
            else if (a === K.g.Va) q = {
                action: "promo_view",
                Nd: $v(r) || $v(e)
            };
            else if ("select_content" === a && r && 0 < r.length ||
                a === K.g.hb) q = {
                action: "promo_click",
                Nd: $v(r) || $v(e)
            };
            else if ("select_content" === a || a === K.g.Zb) q = {
                action: "click",
                Qa: {
                    list: d(K.g.hf) || d(K.g.Mc) || f
                },
                Sb: $v(e)
            };
            else if (a === K.g.Eb || "checkout_progress" === a) {
                var t = {
                    step: a === K.g.Eb ? 1 : d(K.g.ff),
                    option: d(K.g.ae)
                };
                q = {
                    action: "checkout",
                    Sb: $v(e),
                    Qa: z(c(), t)
                }
            } else "set_checkout_option" === a && (q = {
                action: "checkout_option",
                Qa: {
                    step: d(K.g.ff),
                    option: d(K.g.ae)
                }
            });
            q && (q.Kf = d(K.g.na));
            return q
        },
        yw = {},
        Mv = function(a, b) {
            var c = yw[a];
            yw[a] = z(b);
            if (!c) return !1;
            for (var d in b)
                if (b.hasOwnProperty(d) &&
                    b[d] !== c[d]) return !0;
            for (var e in c)
                if (c.hasOwnProperty(e) && c[e] !== b[e]) return !0;
            return !1
        };
    uf();

    function Jw() {
        return C.gaGlobal = C.gaGlobal || {}
    }
    var Kw = function() {
            var a = Jw();
            a.hid = a.hid || ya();
            return a.hid
        },
        Lw = function(a, b) {
            var c = Jw();
            if (void 0 == c.vid || b && !c.from_cookie) c.vid = a, c.from_cookie = b
        };
    var Hx = /^(www\.)?google(\.com?)?(\.[a-z]{2}t?)?$/,
        Ix = /^www.googleadservices.com$/;
    var Jx = window,
        Kx = document,
        Lx = function(a) {
            var b = Jx._gaUserPrefs;
            if (b && b.ioo && b.ioo() || Kx.documentElement.hasAttribute("data-google-analytics-opt-out") || a && !0 === Jx["ga-disable-" + a]) return !0;
            try {
                var c = Jx.external;
                if (c && c._gaUserPrefs && "oo" == c._gaUserPrefs) return !0
            } catch (f) {}
            for (var d = Ei("AMP_TOKEN", String(Kx.cookie), !0), e = 0; e < d.length; e++)
                if ("$OPT_OUT" == d[e]) return !0;
            return Kx.getElementById("__gaOptOutExtension") ? !0 : !1
        };

    function Tx(a) {
        k(a, function(c) {
            "_" === c.charAt(0) && delete a[c]
        });
        var b = a[K.g.La] || {};
        k(b, function(c) {
            "_" === c.charAt(0) && delete b[c]
        })
    };
    var by = function(a, b) {};

    function ay(a, b) {
        var c = function() {};
        return c
    }

    function cy(a, b, c) {};
    var dy = ay;
    Object.freeze({
        dl: 1,
        id: 1
    });
    Object.freeze(["config", "event", "get", "set"]);
    var fy = encodeURI,
        W = encodeURIComponent,
        gy = function(a, b, c) {
            $b(a, b, c)
        },
        hy = function(a, b) {
            if (!a) return !1;
            var c = yj(Aj(a), "host");
            if (!c) return !1;
            for (var d = 0; b && d < b.length; d++) {
                var e = b[d] && b[d].toLowerCase();
                if (e) {
                    var f = c.length -
                        e.length;
                    0 < f && "." != e.charAt(0) && (f--, e = "." + e);
                    if (0 <= f && c.indexOf(e, f) == f) return !0
                }
            }
            return !1
        },
        iy = function(a, b, c) {
            for (var d = {}, e = !1, f = 0; a && f < a.length; f++) a[f] && a[f].hasOwnProperty(b) && a[f].hasOwnProperty(c) && (d[a[f][b]] = a[f][c], e = !0);
            return e ? d : null
        };
    var X = {
        m: {}
    };
    X.m.c = ["google"],
        function() {
            (function(a) {
                X.__c = a;
                X.__c.o = "c";
                X.__c.isVendorTemplate = !0;
                X.__c.priorityOverride = 0;
                X.__c.isInfrastructure = !1;
                X.__c.runInSiloedMode = !0
            })(function(a) {
                Au(a.vtp_value, "c", a.vtp_gtmEventId);
                return a.vtp_value
            })
        }();
    X.m.e = ["google"],
        function() {
            (function(a) {
                X.__e = a;
                X.__e.o = "e";
                X.__e.isVendorTemplate = !0;
                X.__e.priorityOverride = 0;
                X.__e.isInfrastructure = !1;
                X.__e.runInSiloedMode = !0
            })(function(a) {
                return String(a.vtp_gtmCachedValues.event)
            })
        }();
    X.m.f = ["google"],
        function() {
            (function(a) {
                X.__f = a;
                X.__f.o = "f";
                X.__f.isVendorTemplate = !0;
                X.__f.priorityOverride = 0;
                X.__f.isInfrastructure = !1;
                X.__f.runInSiloedMode = !1
            })(function(a) {
                var b = su("gtm.referrer", 1) || E.referrer;
                return b ? a.vtp_component && "URL" != a.vtp_component ? yj(Aj(String(b)), a.vtp_component, a.vtp_stripWww, a.vtp_defaultPages, a.vtp_queryKey) : ru(String(b)) : String(b)
            })
        }();
    X.m.u = ["google"],
        function() {
            var a = function(b) {
                return {
                    toString: function() {
                        return b
                    }
                }
            };
            (function(b) {
                X.__u = b;
                X.__u.o = "u";
                X.__u.isVendorTemplate = !0;
                X.__u.priorityOverride = 0;
                X.__u.isInfrastructure = !1;
                X.__u.runInSiloedMode = !1
            })(function(b) {
                var c;
                c = (c = b.vtp_customUrlSource ? b.vtp_customUrlSource : su("gtm.url", 1)) || pu();
                var d = b[a("vtp_component")];
                if (!d || "URL" == d) return ru(String(c));
                var e = Aj(String(c)),
                    f;
                if ("QUERY" === d) a: {
                    var h = b[a("vtp_multiQueryKeys").toString()],
                        l = b[a("vtp_queryKey").toString()] || "",
                        m =
                        b[a("vtp_ignoreEmptyQueryParam").toString()],
                        n;h ? va(l) ? n = l : n = String(l).replace(/\s+/g, "").split(",") : n = [String(l)];
                    for (var p = 0; p < n.length; p++) {
                        var q = yj(e, "QUERY", void 0, void 0, n[p]);
                        if (void 0 != q && (!m || "" !== q)) {
                            f = q;
                            break a
                        }
                    }
                    f = void 0
                }
                else f = yj(e, d, "HOST" == d ? b[a("vtp_stripWww")] : void 0, "PATH" == d ? b[a("vtp_defaultPages")] : void 0);
                return f
            })
        }();
    X.m.v = ["google"],
        function() {
            (function(a) {
                X.__v = a;
                X.__v.o = "v";
                X.__v.isVendorTemplate = !0;
                X.__v.priorityOverride = 0;
                X.__v.isInfrastructure = !1;
                X.__v.runInSiloedMode = !1
            })(function(a) {
                var b = a.vtp_name;
                if (!b || !b.replace) return !1;
                var c = su(b.replace(/\\\./g, "."), a.vtp_dataLayerVersion || 1),
                    d = void 0 !== c ? c : a.vtp_defaultValue;
                Au(d, "v", a.vtp_gtmEventId);
                return d
            })
        }();





    X.m.gclidw = ["google"],
        function() {
            var a = ["aw", "dc", "gf", "ha", "gb"];
            (function(b) {
                X.__gclidw = b;
                X.__gclidw.o = "gclidw";
                X.__gclidw.isVendorTemplate = !0;
                X.__gclidw.priorityOverride = 100;
                X.__gclidw.isInfrastructure = !1;
                X.__gclidw.runInSiloedMode = !1
            })(function(b) {
                H(b.vtp_gtmOnSuccess);
                var c, d, e, f;
                b.vtp_enableCookieOverrides && (e = b.vtp_cookiePrefix, c = b.vtp_path, d = b.vtp_domain, f = b.vtp_cookieFlags);
                var h = {
                    prefix: e,
                    path: c,
                    domain: d,
                    flags: f
                };
                !b.vtp_enableCrossDomainFeature || b.vtp_enableCrossDomain && !1 === b.vtp_acceptIncoming ||
                    !b.vtp_enableCrossDomain && !ek() || (Wk(a, h), qk(h));
                Tk(h);
                Zk(["aw", "dc"], h);
                Wl(h);
                if (b.vtp_enableCrossDomainFeature && b.vtp_enableCrossDomain && b.vtp_linkerDomains) {
                    var l = b.vtp_linkerDomains.toString().replace(/\s+/g, "").split(",");
                    Yk(a, l, b.vtp_urlPosition, !!b.vtp_formDecoration, h.prefix);
                    rk(jk(h.prefix), l, b.vtp_urlPosition, !!b.vtp_formDecoration, h);
                    rk("FPAU", l, b.vtp_urlPosition, !!b.vtp_formDecoration, h)
                }
                var m = su(K.g.ma);
                il({
                    s: vh(new kh(b.vtp_gtmEventId, b.vtp_gtmPriorityId)),
                    Jf: !1,
                    Pe: void 0 != m && !1 !== m,
                    qc: h,
                    Je: !0
                });
                b.vtp_enableUrlPassthrough && al(["aw", "dc", "gb"])
            })
        }();

    X.m.aev = ["google"],
        function() {
            function a(r, t, u, v, w) {
                w || (w = "element");
                var x = t + "." + u,
                    y;
                if (n.hasOwnProperty(x)) y = n[x];
                else {
                    var A = r[w];
                    if (A && (y = v(A), n[x] = y, p.push(x), 35 < p.length)) {
                        var B = p.shift();
                        delete n[B]
                    }
                }
                return y
            }

            function b(r, t, u) {
                var v = r[q[t]];
                return void 0 !== v ? v : u
            }

            function c(r, t) {
                if (!r) return !1;
                var u = d(pu());
                va(t) || (t = String(t || "").replace(/\s+/g, "").split(","));
                for (var v = [u], w = 0; w < t.length; w++) {
                    var x = t[w];
                    if (x.hasOwnProperty("is_regex"))
                        if (x.is_regex) try {
                            x = new RegExp(x.domain)
                        } catch (B) {
                            continue
                        } else x =
                            x.domain;
                    var y = d(r);
                    if (x instanceof RegExp) {
                        if (x.test(y)) return !1
                    } else {
                        var A = x;
                        if (0 != A.length) {
                            if (0 <= y.indexOf(A)) return !1;
                            v.push(d(A))
                        }
                    }
                }
                return !hy(r, v)
            }

            function d(r) {
                m.test(r) || (r = "http://" + r);
                return yj(Aj(r), "HOST", !0)
            }

            function e(r, t, u, v) {
                switch (r) {
                    case "SUBMIT_TEXT":
                        return a(t, u, "FORM." + r, f, "formSubmitElement") || v;
                    case "LENGTH":
                        var w = a(t, u, "FORM." + r, h);
                        return void 0 === w ? v : w;
                    case "INTERACTED_FIELD_ID":
                        return l(t, "id", v);
                    case "INTERACTED_FIELD_NAME":
                        return l(t, "name", v);
                    case "INTERACTED_FIELD_TYPE":
                        return l(t,
                            "type", v);
                    case "INTERACTED_FIELD_POSITION":
                        var x = t.interactedFormFieldPosition;
                        return void 0 === x ? v : x;
                    case "INTERACT_SEQUENCE_NUMBER":
                        var y = t.interactSequenceNumber;
                        return void 0 === y ? v : y;
                    default:
                        return v
                }
            }

            function f(r) {
                switch (r.tagName.toLowerCase()) {
                    case "input":
                        return cc(r, "value");
                    case "button":
                        return dc(r);
                    default:
                        return null
                }
            }

            function h(r) {
                if ("form" === r.tagName.toLowerCase() && r.elements) {
                    for (var t = 0, u = 0; u < r.elements.length; u++) Wt(r.elements[u]) && t++;
                    return t
                }
            }

            function l(r, t, u) {
                var v = r.interactedFormField;
                return v && cc(v, t) || u
            }
            var m = /^https?:\/\//i,
                n = {},
                p = [],
                q = {
                    ATTRIBUTE: "elementAttribute",
                    CLASSES: "elementClasses",
                    ELEMENT: "element",
                    ID: "elementId",
                    HISTORY_CHANGE_SOURCE: "historyChangeSource",
                    HISTORY_NEW_STATE: "newHistoryState",
                    HISTORY_NEW_URL_FRAGMENT: "newUrlFragment",
                    HISTORY_OLD_STATE: "oldHistoryState",
                    HISTORY_OLD_URL_FRAGMENT: "oldUrlFragment",
                    TARGET: "elementTarget"
                };
            (function(r) {
                X.__aev = r;
                X.__aev.o = "aev";
                X.__aev.isVendorTemplate = !0;
                X.__aev.priorityOverride = 0;
                X.__aev.isInfrastructure = !1;
                X.__aev.runInSiloedMode = !1
            })(function(r) {
                var t = r.vtp_gtmEventId,
                    u = r.vtp_defaultValue,
                    v = r.vtp_varType,
                    w = r.vtp_gtmCachedValues.gtm;
                switch (v) {
                    case "TAG_NAME":
                        var x = w.element;
                        return x && x.tagName || u;
                    case "TEXT":
                        return a(w, t, v, dc) || u;
                    case "URL":
                        var y;
                        a: {
                            var A = String(w.elementUrl || u || ""),
                                B = Aj(A),
                                D = String(r.vtp_component || "URL");
                            switch (D) {
                                case "URL":
                                    y = A;
                                    break a;
                                case "IS_OUTBOUND":
                                    y = c(A, r.vtp_affiliatedDomains);
                                    break a;
                                default:
                                    y = yj(B, D, r.vtp_stripWww, r.vtp_defaultPages, r.vtp_queryKey)
                            }
                        }
                        return y;
                    case "ATTRIBUTE":
                        var I;
                        if (void 0 ===
                            r.vtp_attribute) I = b(w, v, u);
                        else {
                            var F = w.element;
                            I = F && cc(F, r.vtp_attribute) || u || ""
                        }
                        return I;
                    case "MD":
                        var G = r.vtp_mdValue,
                            L = a(w, t, "MD", hu);
                        return G && L ? ku(L, G) || u : L || u;
                    case "FORM":
                        return e(String(r.vtp_component || "SUBMIT_TEXT"), w, t, u);
                    default:
                        var N = b(w, v, u);
                        Au(N, "aev", r.vtp_gtmEventId);
                        return N
                }
            })
        }();



    X.m.lcl = [],
        function() {
            function a() {
                var c = V("document"),
                    d = 0,
                    e = function(f) {
                        var h = f.target;
                        if (h && 3 !== f.which && !(f.Rk || f.timeStamp && f.timeStamp === d)) {
                            d = f.timeStamp;
                            h = fc(h, ["a", "area"], 100);
                            if (!h) return f.returnValue;
                            var l = f.defaultPrevented || !1 === f.returnValue,
                                m = Tt("lcl", l ? "nv.mwt" : "mwt", 0),
                                n;
                            n = l ? Tt("lcl", "nv.ids", []) : Tt("lcl", "ids", []);
                            if (n.length) {
                                var p = Pt(h, "gtm.linkClick", n);
                                if (b(f, h, c) && !l && m && h.href) {
                                    var q = !!xa(String(ic(h, "rel") || "").split(" "), function(v) {
                                            return "noreferrer" === v.toLowerCase()
                                        }),
                                        r = V((ic(h, "target") || "_self").substring(1)),
                                        t = !0,
                                        u = Zs(function() {
                                            var v;
                                            if (v = t && r) {
                                                var w;
                                                a: if (q) {
                                                    var x;
                                                    try {
                                                        x = new MouseEvent(f.type, {
                                                            bubbles: !0
                                                        })
                                                    } catch (y) {
                                                        if (!c.createEvent) {
                                                            w = !1;
                                                            break a
                                                        }
                                                        x = c.createEvent("MouseEvents");
                                                        x.initEvent(f.type, !0, !0)
                                                    }
                                                    x.Rk = !0;
                                                    f.target.dispatchEvent(x);
                                                    w = !0
                                                } else w = !1;
                                                v = !w
                                            }
                                            v && (r.location.href = ic(h, "href"))
                                        }, m);
                                    if (tu(p, u, m)) t = !1;
                                    else return f.preventDefault && f.preventDefault(), f.returnValue = !1
                                } else tu(p, function() {}, m || 2E3);
                                return !0
                            }
                        }
                    };
                ac(c, "click", e, !1);
                ac(c, "auxclick", e, !1)
            }

            function b(c, d, e) {
                if (2 === c.which || c.ctrlKey || c.shiftKey || c.altKey || c.metaKey) return !1;
                var f = ic(d, "href"),
                    h = f.indexOf("#"),
                    l = ic(d, "target");
                if (l && "_self" !== l && "_parent" !== l && "_top" !== l || 0 === h) return !1;
                if (0 < h) {
                    var m = ru(f),
                        n = ru(e.location);
                    return m !== n
                }
                return !0
            }(function(c) {
                X.__lcl = c;
                X.__lcl.o = "lcl";
                X.__lcl.isVendorTemplate = !0;
                X.__lcl.priorityOverride = 0;
                X.__lcl.isInfrastructure = !1;
                X.__lcl.runInSiloedMode = !1
            })(function(c) {
                var d = void 0 === c.vtp_waitForTags ? !0 : c.vtp_waitForTags,
                    e = void 0 === c.vtp_checkValidation ?
                    !0 : c.vtp_checkValidation,
                    f = Number(c.vtp_waitForTagsTimeout);
                if (!f || 0 >= f) f = 2E3;
                var h = c.vtp_uniqueTriggerId || "0";
                if (d) {
                    var l = function(n) {
                        return Math.max(f, n)
                    };
                    St("lcl", "mwt", l, 0);
                    e || St("lcl", "nv.mwt", l, 0)
                }
                var m = function(n) {
                    n.push(h);
                    return n
                };
                St("lcl", "ids", m, []);
                e || St("lcl", "nv.ids", m, []);
                yu("lcl") || (a(), zu("lcl"));
                H(c.vtp_gtmOnSuccess)
            })
        }();




    X.m.ua = ["google"],
        function() {
            function a(m, n) {
                for (var p in m)
                    if (!l[p] && m.hasOwnProperty(p)) {
                        var q = h[p] ? Ea(m[p]) : m[p];
                        "anonymizeIp" != p || q || (q = void 0);
                        n[p] = q
                    }
            }

            function b(m) {
                var n = {};
                m.vtp_gaSettings && z(iy(m.vtp_gaSettings.vtp_fieldsToSet, "fieldName", "value"), n);
                z(iy(m.vtp_fieldsToSet, "fieldName", "value"), n);
                Ea(n.urlPassthrough) && (n._useUp = !0);
                m.vtp_transportUrl && (n._x_19 = m.vtp_transportUrl);
                return n
            }

            function c(m, n) {
                return void 0 === n ? n : m(n)
            }

            function d(m, n, p) {}

            function e(m, n) {
                if (!f) {
                    var p = m.vtp_useDebugVersion ? "u/analytics_debug.js" : "analytics.js";
                    m.vtp_useInternalVersion && !m.vtp_useDebugVersion && (p = "internal/" + p);
                    f = !0;
                    var q = m.vtp_gtmOnFailure,
                        r = Je || Le ? Fp(n._x_19, "/analytics.js") : void 0,
                        t = ol("https:", "http:", "//www.google-analytics.com/" + p, n && !!n.forceSSL);
                    U("analytics.js" === p && r ? r : t, function() {
                        var u = nq();
                        u && u.loaded || q();
                    }, q)
                }
            }
            var f, h = {
                    allowAnchor: !0,
                    allowLinker: !0,
                    alwaysSendReferrer: !0,
                    anonymizeIp: !0,
                    cookieUpdate: !0,
                    exFatal: !0,
                    forceSSL: !0,
                    javaEnabled: !0,
                    legacyHistoryImport: !0,
                    nonInteraction: !0,
                    useAmpClientId: !0,
                    useBeacon: !0,
                    storeGac: !0,
                    allowAdFeatures: !0,
                    allowAdPersonalizationSignals: !0,
                    _cd2l: !0
                },
                l = {
                    urlPassthrough: !0
                };
            (function(m) {
                X.__ua = m;
                X.__ua.o = "ua";
                X.__ua.isVendorTemplate = !0;
                X.__ua.priorityOverride = 0;
                X.__ua.isInfrastructure = !1;
                X.__ua.runInSiloedMode = !1
            })(function(m) {
                function n() {
                    if (m.vtp_doubleClick || "DISPLAY_FEATURES" ==
                        m.vtp_advertisingFeaturesType) v.displayfeatures = !0
                }
                var p = {},
                    q = {},
                    r = {};
                if (m.vtp_gaSettings) {
                    var t = m.vtp_gaSettings;
                    z(iy(t.vtp_contentGroup, "index", "group"), p);
                    z(iy(t.vtp_dimension, "index", "dimension"), q);
                    z(iy(t.vtp_metric, "index", "metric"), r);
                    var u = z(t);
                    u.vtp_fieldsToSet = void 0;
                    u.vtp_contentGroup = void 0;
                    u.vtp_dimension = void 0;
                    u.vtp_metric = void 0;
                    m = z(m, u)
                }
                z(iy(m.vtp_contentGroup, "index", "group"), p);
                z(iy(m.vtp_dimension, "index", "dimension"), q);
                z(iy(m.vtp_metric, "index", "metric"), r);
                var v = b(m),
                    w = String(m.vtp_trackingId ||
                        ""),
                    x = "",
                    y = "",
                    A = "";
                m.vtp_setTrackerName && "string" == typeof m.vtp_trackerName ? "" !== m.vtp_trackerName && (A = m.vtp_trackerName, y = A + ".") : (A = "gtm" + Ve(), y = A + ".");
                var B = function(ba, aa) {
                    for (var za in aa) aa.hasOwnProperty(za) && (v[ba + za] = aa[za])
                };
                B("contentGroup", p);
                B("dimension", q);
                B("metric", r);
                m.vtp_enableEcommerce && (x = m.vtp_gtmCachedValues.event, v.gtmEcommerceData = d(m, v, x));
                if ("TRACK_EVENT" === m.vtp_trackType) x = "track_event", n(), v.eventCategory = String(m.vtp_eventCategory), v.eventAction = String(m.vtp_eventAction),
                    v.eventLabel = c(String, m.vtp_eventLabel), v.value = c(Da, m.vtp_eventValue);
                else if ("TRACK_PAGEVIEW" == m.vtp_trackType) {
                    if (x = K.g.bc, n(), "DISPLAY_FEATURES_WITH_REMARKETING_LISTS" == m.vtp_advertisingFeaturesType && (v.remarketingLists = !0), m.vtp_autoLinkDomains) {
                        var D = {};
                        D[K.g.O] = m.vtp_autoLinkDomains;
                        D.use_anchor = m.vtp_useHashAutoLink;
                        D[K.g.rb] = m.vtp_decorateFormsAutoLink;
                        v[K.g.za] = D
                    }
                } else "TRACK_SOCIAL" === m.vtp_trackType ? (x = "track_social", v.socialNetwork = String(m.vtp_socialNetwork), v.socialAction = String(m.vtp_socialAction),
                    v.socialTarget = String(m.vtp_socialActionTarget)) : "TRACK_TIMING" == m.vtp_trackType && (x = "timing_complete", v.eventCategory = String(m.vtp_timingCategory), v.timingVar = String(m.vtp_timingVar), v.value = Da(m.vtp_timingValue), v.eventLabel = c(String, m.vtp_timingLabel));
                m.vtp_enableRecaptcha && (v.enableRecaptcha = !0);
                m.vtp_enableLinkId && (v.enableLinkId = !0);
                var I = {};
                a(v, I);
                v.name || (I.gtmTrackerName = A);
                I.gaFunctionName = m.vtp_functionName;
                void 0 !== m.vtp_nonInteraction && (I.nonInteraction = m.vtp_nonInteraction);
                var F = vh(uh(th(sh(lh(new kh(m.vtp_gtmEventId,
                    m.vtp_gtmPriorityId), I), m.vtp_gtmOnSuccess), m.vtp_gtmOnFailure), !0));
                Yv(w, x, Date.now(), F);
                var G = pq(m.vtp_functionName);
                if (ta(G)) {
                    var L = function(ba) {
                        var aa = [].slice.call(arguments, 0);
                        aa[0] = y + aa[0];
                        G.apply(window, aa)
                    };
                    if ("TRACK_TRANSACTION" == m.vtp_trackType) {} else if ("DECORATE_LINK" == m.vtp_trackType) {} else if ("DECORATE_FORM" == m.vtp_trackType) {} else if ("TRACK_DATA" == m.vtp_trackType) {}
                    e(m, v)
                } else H(m.vtp_gtmOnFailure)
            })
        }();


    X.m.gas = ["google"],
        function() {
            (function(a) {
                X.__gas = a;
                X.__gas.o = "gas";
                X.__gas.isVendorTemplate = !0;
                X.__gas.priorityOverride = 0;
                X.__gas.isInfrastructure = !1;
                X.__gas.runInSiloedMode = !1
            })(function(a) {
                var b = z(a),
                    c = b;
                c[pc.ia] = null;
                c[pc.Df] = null;
                var d = b = c;
                d.vtp_fieldsToSet = d.vtp_fieldsToSet || [];
                var e = d.vtp_cookieDomain;
                void 0 !== e && (d.vtp_fieldsToSet.push({
                    fieldName: "cookieDomain",
                    value: e
                }), delete d.vtp_cookieDomain);
                return b
            })
        }();





    X.m.html = ["customScripts"],
        function() {
            function a(d, e, f, h) {
                return function() {
                    try {
                        if (0 < e.length) {
                            var l = e.shift(),
                                m = a(d, e, f, h);
                            if ("SCRIPT" == String(l.nodeName).toUpperCase() && "text/gtmscript" == l.type) {
                                var n = E.createElement("script");
                                n.async = !1;
                                n.type = "text/javascript";
                                n.id = l.id;
                                n.text = l.text || l.textContent || l.innerHTML || "";
                                l.charset && (n.charset = l.charset);
                                var p = l.getAttribute("data-gtmsrc");
                                p && (n.src = p, Tb(n, m));
                                d.insertBefore(n, null);
                                p || m()
                            } else if (l.innerHTML && 0 <= l.innerHTML.toLowerCase().indexOf("<script")) {
                                for (var q = []; l.firstChild;) q.push(l.removeChild(l.firstChild));
                                d.insertBefore(l, null);
                                a(l, q, m, h)()
                            } else d.insertBefore(l, null), m()
                        } else f()
                    } catch (r) {
                        H(h)
                    }
                }
            }

            function b(d) {
                if (E.body) {
                    var e = d.vtp_gtmOnFailure,
                        f = Mt(d.vtp_html, d.vtp_gtmOnSuccess, e),
                        h = f.Mk,
                        l = f.onSuccess;
                    if (d.vtp_useIframe) {} else d.vtp_supportDocumentWrite ? c(h, l, e) : a(E.body, ec(h), l, e)()
                } else nu(function() {
                    b(d)
                }, 200)
            }
            X.__html = b;
            X.__html.o =
                "html";
            X.__html.isVendorTemplate = !0;
            X.__html.priorityOverride = 0;
            X.__html.isInfrastructure = !1;
            X.__html.runInSiloedMode = !1
        }();


    var Ez = {};
    Ez.onHtmlSuccess = Nt(!0), Ez.onHtmlFailure = Nt(!1);
    Ez.dataLayer = bf;
    Ez.callback = function(a) {
        Se.hasOwnProperty(a) && ta(Se[a]) && Se[a]();
        delete Se[a]
    };
    Ez.bootstrap = 0;
    Ez._spx = !1;

    function Fz() {
        Be[rg()] = Be[rg()] || Ez;
        xg();
        Bg() || k(Cg(), function(a, b) {
            Kp(a, b.transportUrl, b.context);
            J(92)
        });
        Ma(Te, X.m);
        P(93) && tg(zg());
        Jt(), Yc({
            Sk: function(a) {
                return Ot(a)
            },
            kk: function(a) {
                return new Kt(a)
            },
            Tk: function(a) {
                for (var b = !1, c = !1, d = 2; d < a.length; d++) b = b || 8 === a[d], c = c || 16 === a[d];
                return b && c
            },
            vl: function(a) {
                var b;
                if (Ot(a)) b = a;
                else {
                    var c = Ve();
                    It[c] = a;
                    b = 'google_tag_manager["rm"]["' + sg() + '"](' + c + ")"
                }
                return b
            }
        });
        $c = kd
    }
    (function(a) {
        function b() {
            m = E.documentElement.getAttribute("data-tag-assistant-present");
            ht(m) && (l = h.Gj)
        }
        if (!C["__TAGGY_INSTALLED"]) {
            var c = !1;
            if (E.referrer) {
                var d = Aj(E.referrer);
                c = "cct.google" === xj(d, "host")
            }
            if (!c) {
                var e = Ii("googTaggyReferrer");
                c = e.length && e[0].length
            }
            c && (C["__TAGGY_INSTALLED"] = !0, Xb("https://cct.google/taggy/agent.js"))
        }
        if (Ne) a();
        else {
            var f = function(u) {
                    var v = "GTM",
                        w = "GTM";
                    He ? (v = "OGT", w = "GTAG") : Ne && (w = v = "OPT");
                    var x = C["google.tagmanager.debugui2.queue"];
                    x || (x = [],
                        C["google.tagmanager.debugui2.queue"] = x, Xb("https://" + Ae.Sd + "/debug/bootstrap?id=" + kg.ctid + "&src=" + w + "&cond=" + u + "&gtm=" + cj()));
                    var y = {
                        messageType: "CONTAINER_STARTING",
                        data: {
                            scriptSource: Rb,
                            containerProduct: v,
                            debug: !1,
                            id: kg.ctid,
                            targetRef: {
                                ctid: kg.ctid,
                                isDestination: ig.ld
                            },
                            aliases: lg(),
                            destinations: og()
                        }
                    };
                    y.data.resume = function() {
                        a()
                    };
                    Ae.Hi && (y.data.initialPublish = !0);
                    x.push(y)
                },
                h = {
                    Yl: 1,
                    Hj: 2,
                    Sj: 3,
                    Ji: 4,
                    Gj: 5
                },
                l = void 0,
                m = void 0,
                n = yj(C.location, "query", !1, void 0, "gtm_debug");
            ht(n) && (l = h.Hj);
            if (!l && E.referrer) {
                var p = Aj(E.referrer);
                "tagassistant.google.com" === xj(p, "host") && (l = h.Sj)
            }
            if (!l) {
                var q = Ii("__TAG_ASSISTANT");
                q.length && q[0].length && (l = h.Ji)
            }
            l || b();
            if (!l && it(m)) {
                var r = function() {
                        if (t) return !0;
                        t = !0;
                        b();
                        l && Rb ? f(l) : a()
                    },
                    t = !1;
                ac(E, "TADebugSignal", function() {
                    r()
                }, !1);
                C.setTimeout(function() {
                    r()
                }, 200)
            } else l && Rb ? f(l) : a()
        }
    })(function() {
        try {
            vg();
            if (P(29)) {}
            Cf().B();
            ji();
            var b = sg();
            if (fg().canonical[b]) {
                var c = Be.zones;
                c && c.unregisterChild(ng());
            } else {
                Ep();
                for (var d = data.resource || {}, e = d.macros || [], f = 0; f < e.length; f++) Qc.push(e[f]);
                for (var h = d.tags || [], l = 0; l < h.length; l++) Tc.push(h[l]);
                for (var m = d.predicates || [], n = 0; n < m.length; n++) Sc.push(m[n]);
                for (var p = d.rules || [], q = 0; q < p.length; q++) {
                    for (var r =
                            p[q], t = {}, u = 0; u < r.length; u++) {
                        var v = r[u][0];
                        t[v] = Array.prototype.slice.call(r[u], 1);
                        Oc(5) || Oc(7) ? ("if" !== v && "unless" !== v || Zc(t[v]), fb("TAGGING", 22)) : Oc(6) && fb("TAGGING", 23)
                    }
                    Rc.push(t)
                }
                Vc = X;
                Wc = Yu;
                Fz();
                if (P(45)) {
                    for (var w = qf["7"], x = w ? w.split("|") : [], y = {}, A = 0; A < x.length; A++) y[x[A]] = !0;
                    for (var B = 0; B < Wf.length; B++) {
                        var D = Wf[B],
                            I = y[D] ? "granted" : "denied";
                        Hf().implicit(D, I)
                    }
                }
                gt();
                Xp = !1;
                Yp = 0;
                if ("interactive" == E.readyState && !E.createEventObject || "complete" == E.readyState) $p();
                else {
                    ac(E, "DOMContentLoaded", $p);
                    ac(E, "readystatechange", $p);
                    if (E.createEventObject && E.documentElement.doScroll) {
                        var F = !0;
                        try {
                            F = !C.frameElement
                        } catch (O) {}
                        F && aq()
                    }
                    ac(C, "load", $p)
                }
                ws = !1;
                "complete" === E.readyState ? ys() : ac(C, "load", ys);
                Lg && (Gg(Yg), C.setInterval(Xg, 864E5));
                Gg($u);
                Gg($q);
                Gg(fo);
                Gg(Vr);
                Gg(kr);
                Gg(Pp);
                Gg(ej);
                Gg(Np);
                Gg(gr);
                P(57) && Gg(cr);
                Et();
                pf(1);
                Hr();
                Re = Ja();
                Ez.bootstrap = Re;
                if (P(29)) {}
            }
        } catch (O) {
            if (pf(4), Lg) {
                var S = Sg(!0, !0);
                $b(S)
            }
        }
    });

})()