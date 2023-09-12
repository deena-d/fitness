var _bsa = {
    _client: "monetization.js",
    _version: "20230607",
    _clientConfig: function(options) {
        const configParts = Object.assign({}, options);
        const configString = Object.keys(configParts).reduce((function(strParts, key) {
            const configValue = configParts[key];
            if (configValue) {
                return strParts.concat([`${key}:${encodeURIComponent(configValue)}`])
            }
            return strParts
        }), []).join(";");
        return "(" + configString + ")"
    },
    _loadJson: function(url, callback, options) {
        const req = fetch(url, {
            headers: {
                "x-origin": window.location.toString(),
                "x-client": this._client + "/" + this._version + " " + this._clientConfig(options)
            }
        });
        req.then((function(response) {
            return response.json()
        })).then((function(json) {
            return callback(json)
        })).catch((function(err) {
            console.log("BSA ad connectivity issue!", url, "due to", err)
        }))
    },
    init: function(format, zoneKey, segment, options) {
        var options = typeof options !== "undefined" ? options : {};
        if (!this.isset(window["_bsa_queue"])) {
            window["_bsa_queue"] = []
        }
        var forceUrlPreview = this.getURLVar("_bsa_url_preview", window.location.href);
        if (forceUrlPreview) {
            var previewData = JSON.parse(decodeURIComponent(forceUrlPreview));
            options.testMode = true;
            options.testData = {
                ads: [Object.assign({}, previewData, {
                    zonekey: zoneKey,
                    statlink: previewData.link
                }), {}]
            }
        }
        if (!this.isset(options.target)) options.target = "body";
        if (this.isset(options) && this.isset(options.target) && document.querySelectorAll(options.target).length > 0) {
            var pretendSrv = document.createElement("div");
            pretendSrv.id = "_bsa_srv-" + zoneKey + "_" + window["_bsa_queue"].length;
            options.script_id = pretendSrv.id;
            if (options && !this.isset(options.platforms) || !this.isset(options)) options.platforms = ["desktop", "mobile"];
            if (_bsa[format].readyToInit != false || options && options.testMode || !_bsa.objExists(zoneKey)) window["_bsa_queue"].push([format, zoneKey, segment, options]);
            if (options.forceReload) this.removeElement(document.getElementById(options.script_id));
            if (_bsa[format].readyToInit != false && !options.testMode) {
                var jsonSrc = this._buildSrvUrl(options && options.path ? options.path : "//" + _bsa.srv() + "/ads/" + zoneKey + ".json", segment, options);
                if (_bsa.objExists(zoneKey) && !_bsa.exists(document.getElementById(options.script_id))) {
                    document.getElementsByTagName("head")[0].appendChild(pretendSrv);
                    this._loadJson(jsonSrc, _bsa_go, options)
                }
            } else if (options && options.testMode || !_bsa.objExists(zoneKey)) _bsa_go(options.testData ? options.testData : _bsa[format].testData);
            else _bsa[format](zoneKey, segment, options)
        }
    },
    initBatch: function(format, zoneKey, segment, options) {
        if (!this.isset(window["_bsa_queue"])) {
            window["_bsa_queue"] = []
        }
        window["_bsa_queue"].push([format, zoneKey, segment, options])
    },
    loadBatch: function() {
        var zoneKeys = window["_bsa_queue"].map((init => init[1]));
        var jsonSrc = this._buildSrvUrl("https://" + _bsa.srv() + "/ads/get/ids/" + zoneKeys.join(";") + ".json");
        this._loadJson(jsonSrc, (function(json) {
            zoneKeys.forEach((zoneKey => {
                if (json.ads[zoneKey]) {
                    _bsa_go(json.ads[zoneKey])
                }
            }))
        }))
    },
    srv: function() {
        if (_bsa.SRV_OVERRIDE) {
            return _bsa.SRV_OVERRIDE
        }
        return "srv.buysellads.com"
    },
    _buildSrvUrl(base, segment, options, overrideUrlForcebanner) {
        var forcebanner = overrideUrlForcebanner ? overrideUrlForcebanner : this.getURLVar("bsaforcebanner", window.location.href),
            ignore = this.getURLVar("bsaignore", window.location.href),
            forwardedip = this.getURLVar("bsaforwardedip", window.location.href),
            ignoretargeting = this.getURLVar("bsaignoretargeting", window.location.href);
        if (segment) base = this.appendQueryString(base, "segment", segment);
        if (options && this.isset(options.ip)) base = this.appendQueryString(base, "forwardedip", options.ip);
        if (options && this.isset(options.country)) base = this.appendQueryString(base, "country", options.country);
        if (options && this.isset(options.number_of_ads)) base = this.appendQueryString(base, "forcenads", options.number_of_ads);
        if (forcebanner) base = this.appendQueryString(base, "forcebanner", forcebanner);
        if (ignore) base = this.appendQueryString(base, "ignore", ignore);
        if (ignoretargeting) base = this.appendQueryString(base, "ignoretargeting", ignoretargeting);
        if (forwardedip) base = this.appendQueryString(base, "forwardedip", forwardedip);
        base += this.frequencyCap();
        return base
    },
    frequencyCap: function() {
        var day = _bsa.getCookie("_bsap_daycap"),
            life = _bsa.getCookie("_bsap_lifecap"),
            day = this.isset(day) ? day.split(";")[0].split(",") : [],
            life = this.isset(life) ? life.split(";")[0].split(",") : [];
        if (day.length || life.length) {
            var freqcap = [];
            for (var i = 0; i < day.length; i++) {
                var adspot = day[i];
                for (var found = -1, find = 0; find < freqcap.length && found == -1; find++)
                    if (freqcap[find][0] == adspot) found = find;
                if (found == -1) freqcap.push([adspot, 1, 0]);
                else freqcap[found][1]++
            }
            for (var i = 0; i < life.length; i++) {
                var adspot = day[i];
                for (var found = -1, find = 0; find < freqcap.length && found == -1; find++)
                    if (freqcap[find][0] == adspot) found = find;
                if (found == -1) freqcap.push([adspot, 0, 1]);
                else freqcap[found][2]++
            }
            for (var i = 0; i < freqcap.length; i++) freqcap[i] = freqcap[i][0] + ":" + freqcap[i][1] + "," + freqcap[i][2]
        }
        if (freqcap && freqcap.length) return "&freqcap=" + encodeURIComponent(freqcap.join(";"));
        else return ""
    },
    appendQueryString: function(url, name, value) {
        var re = new RegExp("([?&]" + name + "=)[^&]+", "");

        function add(sep) {
            url += sep + name + "=" + encodeURI(value)
        }

        function change() {
            url = url.replace(re, "$1" + encodeURI(value))
        }
        if (url.indexOf("?") === -1) {
            add("?")
        } else {
            if (re.test(url)) {
                change()
            } else {
                add("&")
            }
        }
        return url
    },
    clearQueue: function(index) {
        window["_bsa_queue"].splice(index, 1)
    },
    link: function(link, segment, domain, timestamp, clicktag) {
        var l = link.split("?encredirect="),
            fulllink;
        if (typeof l[1] != "undefined") fulllink = l[0] + "?segment=" + segment + ";&encredirect=" + encodeURIComponent(l[1]);
        else if (l[0].search(_bsa.srv()) > 0) fulllink = l[0] + "?segment=" + segment + ";";
        else fulllink = l[0];
        fulllink = fulllink.replace("[placement]", segment);
        fulllink = fulllink.replace("[timestamp]", timestamp);
        if (domain) fulllink = fulllink.replace(new RegExp(_bsa.srv(), "g"), domain);
        return (_bsa.isset(clicktag) ? clicktag + "https:" : "") + fulllink
    },
    pixel: function(p, timestamp) {
        var c = "";
        if (_bsa.isset(p)) {
            var pixels = p.split("||");
            for (var j = 0; j < pixels.length; j++) c += '<img src="' + pixels[j].replace("[timestamp]", timestamp) + '" style="display:none;" height="0" width="0" />'
        }
        return c
    },
    findInQueue: function(key) {
        for (var i = 0; i < window["_bsa_queue"].length; i++)
            if (window["_bsa_queue"][i][1] == key) return i
    },
    drop: function(output, target, elType, idName, attributes) {
        var div = document.createElement(elType);
        div.id = idName;
        div.innerHTML = output;
        if (attributes) div.setAttribute("data-attributes", JSON.stringify(attributes));
        var b = document.body.firstChild;
        if (target.indexOf("::clone::") >= 0) {
            target = target.replace("::clone::", "");
            document.querySelector(target).insertAdjacentHTML("beforebegin", output);
            return
        }
        for (var i = 0; i < document.querySelectorAll(target).length; i++)
            if (target == "body") b.parentNode.insertBefore(div, b);
            else {
                if (attributes.options.clear_contents == true) document.querySelectorAll(target)[i].innerHTML = "";
                document.querySelectorAll(target)[i].appendChild(div)
            }
    },
    callback: function(a) {
        typeof BSANativeCallback === "function" ? BSANativeCallback(a) : function() {}
    },
    hide: function(e) {
        if (document.getElementById(e)) {
            this.removeClass(document.getElementById(e), "_bsa_show");
            this.addClass(document.getElementById(e), "_bsa_hide")
        }
    },
    show: function(e) {
        if (document.getElementById(e)) {
            this.removeClass(document.getElementById(e), "_bsa_hide");
            this.addClass(document.getElementById(e), "_bsa_show")
        }
    },
    close: function(e, t) {
        this.hide(e);
        if (this.isset(_bsa.setCookie)) _bsa.setCookie(e, "hide", this.isset(t) ? t : 1e3 * 60 * 60 * 6)
    },
    hasClass: function(el, name) {
        return new RegExp("(\\s|^)" + name + "(\\s|$)").test(el.className)
    },
    addClass: function(el, name) {
        if (!this.hasClass(el, name)) el.className += (el.className ? " " : "") + name
    },
    removeClass: function(el, name) {
        if (this.hasClass(el, name)) el.className = el.className.replace(new RegExp("(\\s|^)" + name + "(\\s|$)"), " ").replace(/^\s+|\s+$/g, "")
    },
    removeElement: function(el) {
        if (typeof el !== "undefined" && el != null) el.parentNode.removeChild(el)
    },
    emptyElement: function(el) {
        while (el.firstChild) el.removeChild(el.firstChild)
    },
    reload: function(e) {
        var el = document.querySelector(e);
        if (typeof el !== "undefined" && el != null) {
            if (_bsa.isset(el.firstChild.getAttribute("data-attributes"))) {
                var attributes = JSON.parse(el.firstChild.getAttribute("data-attributes"));
                this.removeElement(document.getElementById(attributes.options.script_id));
                this.emptyElement(el)
            } else {
                var attributes = JSON.parse(el.getAttribute("data-attributes"));
                this.removeElement(document.getElementById(attributes.options.script_id));
                this.removeElement(el)
            }
            this.init(attributes.type, attributes.key, attributes.segment, attributes.options)
        }
    },
    isHex: function(c) {
        return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(c)
    },
    isMobile: function() {
        var check = false;
        (function(a) {
            if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true
        })(navigator.userAgent || navigator.vendor || window.opera);
        return check
    },
    extend: function(target) {
        for (var i = 1; i < arguments.length; ++i) {
            var from = arguments[i];
            if (typeof from !== "object") continue;
            for (var j in from) {
                if (from.hasOwnProperty(j)) {
                    target[j] = typeof from[j] === "object" ? this.extend({}, target[j], from[j]) : from[j]
                }
            }
        }
        return target
    },
    isset: function(v) {
        return typeof v !== "undefined" && v != null
    },
    exists: function(el) {
        if (el === null) return false;
        return true
    },
    objExists: function(obj) {
        var hasOwnProperty = Object.prototype.hasOwnProperty;
        if (obj == null) return false;
        if (obj.length > 0) return true;
        if (obj.length === 0) return false;
        for (var key in obj)
            if (hasOwnProperty.call(obj, key)) return true;
        return false
    },
    getAttr: function(v, id) {
        return document.getElementById(id).getAttribute("data-" + v)
    },
    getURLVar: function(name, url) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regexS = "[\\?&]" + name + "=([^&#]*)",
            regex = new RegExp(regexS),
            results = regex.exec(url);
        if (results == null) return "";
        else return results[1]
    },
    htmlEncode: function(v) {
        if (typeof v === "undefined") v = "";
        return v.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\//g, "&#x2F;")
    }
};
var _bsa_go = function(json) {
    var queue_index = _bsa.findInQueue(json["ads"][0].zonekey);
    if (window["_bsa_queue"][queue_index]) {
        if (window["_bsa_queue"][queue_index][3] && window["_bsa_queue"][queue_index][3].platforms && window["_bsa_queue"][queue_index][3].platforms.indexOf("mobile") > -1 && _bsa.isMobile() || window["_bsa_queue"][queue_index][3] && window["_bsa_queue"][queue_index][3].platforms && window["_bsa_queue"][queue_index][3].platforms.indexOf("desktop") > -1 && !_bsa.isMobile() || window["_bsa_queue"][queue_index][3] && !window["_bsa_queue"][queue_index][3].platforms) {
            if (_bsa.isset(json))
                for (var i = json["ads"].length - 1; i >= 0; i--)
                    if (!_bsa.isset(json["ads"][i].statlink) && !_bsa.isset(json["ads"][i].snippet)) {
                        var attributes = {
                            type: window["_bsa_queue"][queue_index][0],
                            key: json["ads"][0].zonekey,
                            segment: window["_bsa_queue"][queue_index][2],
                            options: window["_bsa_queue"][queue_index][3],
                            fallback: json["ads"][0].fallbackZoneKey,
                            ads: []
                        };
                        json["ads"].splice(i, 1)
                    }
            if (_bsa.isset(json) && _bsa.isset(json["ads"]) && json["ads"].length > 0 && (_bsa.isset(json["ads"][0].statlink) || _bsa.isset(json["ads"][0].snippet))) {
                for (var i = 0; i < json["ads"].length; i++) _bsa_serving_callback(json["ads"][i].bannerid, json["ads"][i].zonekey, json["ads"][i].freqcap);
                _bsa[window["_bsa_queue"][queue_index][0]](window["_bsa_queue"][queue_index][1], window["_bsa_queue"][queue_index][2], window["_bsa_queue"][queue_index][3], json["ads"])
            } else if (_bsa.isset(attributes.fallback)) {
                _bsa.clearQueue(_bsa.findInQueue(attributes.key));
                _bsa.init(attributes.format, attributes.fallback, attributes.segment, attributes.options)
            } else if (_bsa.isset(attributes.options.carbonfallback)) {
                _bsa.carbonbackfill(attributes)
            } else {
                _bsa.callback(attributes)
            }
        }
    }
};
_bsa.testData = {
    ads: [{
        backgroundColor: "#ff6347",
        backgroundHoverColor: "#416ae2",
        ctaTextColor: "#2e8b57",
        ctaTextColorHover: "#67cdaa",
        callToAction: "Learn More",
        company: "{ Company Name }",
        ctaBackgroundColor: "#ff8051",
        ctaBackgroundHoverColor: "#9a32cc",
        description: "{ Campaign Description }",
        image: "https://cdn4.buysellads.net/uu/1/18/1504373058-32397.png",
        logo: "https://cdn4.buysellads.net/uu/1/18/1504373139-azure-1.png",
        statlink: "//www.buysellads.com/",
        textColor: "#ffffff",
        textColorHover: "#ffffff",
        timestamp: "1508185654",
        title: "The best widgets"
    }]
};
_bsa.srvConv = function(reqHash, typeName = "unknown") {
    var types = {
        unknown: 0,
        landing: 1,
        secondary: 2
    };
    var type = types[typeName];
    var url = "https://" + _bsa.srv() + "/ads/convert/x/" + reqHash + "/t/" + type;
    fetch(url, {
        headers: {
            "x-origin": window.location.toString()
        }
    });
    window["OK"] = 0
};
_bsa.trackConv = function() {
    var reqHash = this.getURLVar("_bsa_req", window.location.href);
    if (reqHash) {
        _bsa.setCookie("_bsap_landed", reqHash, 1e3 * 60 * 60 * 24 * 14);
        _bsa.srvConv(reqHash, "landing")
    } else {
        var landed = _bsa.getCookie("_bsap_landed");
        if (landed) {
            _bsa.srvConv(landed, "secondary")
        }
    }
};
_bsa.getCookie = function(name) {
    var nameEQ = name + "=",
        ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == " ") c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length)
    }
    return null
};
_bsa.setCookie = function(name, value, seconds) {
    if (seconds) {
        var date = new Date;
        date.setTime(date.getTime() + seconds);
        var expires = "; expires=" + date.toGMTString()
    } else var expires = "";
    document.cookie = name + "=" + value + expires + "; SameSite=Lax; path=/"
};
_bsa.removeCookie = function(name) {
    this.setCookie(name, "", -1)
};
window["_bsa_serving_callback"] = function(banner, zone, freqcap) {
    var append = function(w, data, days) {
        var c = document.cookie,
            i = c.indexOf(w + "="),
            existing = i >= 0 ? c.substring(i + w.length + 1).split(";")[0] + "," : "",
            d = new Date;
        d.setTime(days * 36e5 + d);
        data = existing + data;
        data = data.substring(0, 2048);
        document.cookie = w + "=" + data + "; expires=" + d.toGMTString() + "; SameSite=Lax; path=/"
    };
    if (freqcap) {
        append("_bsap_daycap", banner, 1);
        append("_bsap_lifecap", banner, 365)
    }
};
_bsa.default = function(zoneKey, segment, options, ads) {
    var disable_css = _bsa.isset(options) && _bsa.isset(options.disable_css) ? options.disable_css : false;
    var custom_domain = _bsa.isset(options) && _bsa.isset(options.custom_domain) ? options.custom_domain : false;
    var image_type = _bsa.isset(options) && _bsa.isset(options.image) ? options.image : false;
    _bsa.default.attributes = {
        type: "default",
        key: zoneKey,
        segment: segment,
        options: options,
        ads: ads
    };
    _bsa.default.elID = function(options) {
        return options && options.id ? options.id : "_default_"
    };
    _bsa.default.align = function(options) {
        return options && options.align ? options.align : "vertical"
    };

    function css(colors) {
        var c = '<style type="text/css">',
            id = _bsa.default.elID(options);
        if (_bsa.default.align(options) == "vertical") c += "#" + id + "{flex-direction:column}#" + id + " ._default_{margin-bottom:10px;}";
        else c += "#" + id + "{flex-direction:row}#" + id + " a._default_{width:49%;}";
        c += "#" + id + "{position:relative;display:flex}#" + id + " a._default_{position:relative;display:flex;margin:5px;text-decoration:none}#" + id + " a._default_:hover .default-title{text-decoration:underline}#" + id + " .default-ad{position:absolute;top:0;right:0;padding:2px 3px;border-radius:2px;background:#e1e1e1;color:#9a9a9a;font-weight:600;font-size:12.5px}#" + id + " a._default_ .default-image{line-height:0;margin-right:10px}#" + id + " .default-image img{float:left;height:40px;border-radius:4px;padding:10px;margin:0}#" + id + " .default-text{line-height:1.35}#" + id + " .default-title{display:block;margin:4px 0 0 0;padding:0 0 4px;font-weight:600;font-size:16px}#" + id + " .default-description{display:block;margin-right:5%;color:#414141;font-size:14px}#" + id + " a:hover .default-description{color:#111}";
        if (_bsa.isset(ads[0].custom_css)) c += ads[0].custom_css;
        c += "</style>";
        return c
    }

    function template(ads) {
        var c = '<span class="default-ad">' + (_bsa.isset(options) && _bsa.isset(options.default_text) ? options.default_text : "ad") + "</span>";
        for (var i = 0; i < ads.length; i++) {
            c += '<a href="' + _bsa.link(ads[i].statlink, segment, custom_domain, ads[i].timestamp) + '" target="_blank" rel="noopener sponsored" class="_default_"><span class="default-image"><img src="' + (_bsa.isset(ads[i].base64) ? ads[i].base64 : image_type == "logo" ? ads[i].logo : _bsa.isset(ads[i].image) ? ads[i].image : ads[i].logo) + '" style="background: ' + ads[i].backgroundColor + ';"/></span><div class="default-text"><span class="default-title">' + _bsa.htmlEncode(ads[i].company) + '</span><span class="default-description">' + _bsa.htmlEncode(ads[i].description) + "</span></div></a>";
            c += _bsa.pixel(ads[i].pixel, ads[i].timestamp)
        }
        return c
    }
    if (ads) {
        _bsa.drop((disable_css ? "" : css(ads)) + template(ads), options.target, "div", _bsa.default.elID(options), _bsa.default.attributes);
        _bsa.clearQueue(_bsa.findInQueue(zoneKey))
    }
    _bsa.callback(_bsa.default.attributes)
};
_bsa.default.readyToInit = true;
_bsa.defaultcta = function(zoneKey, segment, options, ads) {
    var disable_css = _bsa.isset(options) && _bsa.isset(options.disable_css) ? options.disable_css : false;
    var custom_domain = _bsa.isset(options) && _bsa.isset(options.custom_domain) ? options.custom_domain : false;
    var image_type = _bsa.isset(options) && _bsa.isset(options.image) ? options.image : false;
    _bsa.defaultcta.attributes = {
        type: "default",
        key: zoneKey,
        segment: segment,
        options: options,
        ads: ads
    };
    _bsa.defaultcta.elID = function(options) {
        return options && options.id ? options.id : "_defaultcta_"
    };
    _bsa.defaultcta.align = function(options) {
        return options && options.align ? options.align : "vertical"
    };

    function css(colors) {
        var c = '<style type="text/css">',
            id = _bsa.defaultcta.elID(options);
        if (_bsa.defaultcta.align(options) == "vertical") c += "#" + id + "{flex-direction:column}#" + id + " ._default_{margin-bottom:10px;}";
        else c += "#" + id + "{flex-direction:row}#" + id + " a._default_{width:49%;}";
        c += "#" + id + "{position:relative;display:flex;box-shadow:0 0 10px #ccc;margin:0 0 40px;}#" + id + " a._defaultcta_{display:block;position:relative;text-decoration:none;padding:20px 20px 15px;}#" + id + " a._defaultcta_:nth-child(n+2){border-top:1px solid #f1f1f1;}#" + id + " a._default_ .default-title:hover{text-decoration:underline;}#" + id + " .default-ad{background:" + (_bsa.isset(options) && _bsa.isset(options.heading_background) ? options.heading_background : "#000000") + ";color:" + (_bsa.isset(options) && _bsa.isset(options.heading_text) ? options.heading_text : "#000000") + ";padding:10px;font-size:12.5px;font-weight:600;}#" + id + " a._defaultcta_ .default-image img{float:left;margin:0 20px 15px 0;height:60px;width:60px;}#" + id + " a._defaultcta_ .default-title{display:block;margin:4px 0 0 0;font-size:16px;font-weight:600;padding:0 0 4px;}#" + id + " a._defaultcta_ .default-description{display:block;font-size:14px;color:#414141;margin-right:5%;}#" + id + " a._defaultcta_ .default-cta{float:right;display:block;width:150px;padding:10px 10px;margin:10px 0 0 30px;border-radius:2px;text-align:center;background:" + (_bsa.isset(options) && _bsa.isset(options.cta_background) ? options.cta_background : "#000000") + ";color:" + (_bsa.isset(options) && _bsa.isset(options.cta_text) ? options.cta_text : "#000000") + ";}#" + id + ' a[href^="//srv.buysellads.com/"]{display:block !important;}';
        c += "</style>";
        return c
    }

    function template(ads) {
        var c = '<span class="default-ad">' + (_bsa.isset(options) && _bsa.isset(options.default_text) ? options.default_text : "ad") + "</span>";
        for (var i = 0; i < ads.length; i++) {
            c += '<a href="' + _bsa.link(ads[i].statlink, segment, custom_domain, ads[i].timestamp) + '" target="_blank" rel="nofollow noopener" class="_defaultcta_"><span class="default-image"><img src="' + (_bsa.isset(ads[i].base64) ? ads[i].base64 : image_type == "logo" ? ads[i].logo : ads[i].image) + '" /></span><span class="default-cta">' + _bsa.htmlEncode(ads[i].callToAction) + '</span><span class="default-title">' + _bsa.htmlEncode(ads[i].company) + '</span><span class="default-description">' + _bsa.htmlEncode(ads[i].description) + "</span></a>";
            c += _bsa.pixel(ads[i].pixel, ads[i].timestamp)
        }
        return c
    }
    if (ads) {
        _bsa.drop((disable_css ? "" : css(ads)) + template(ads), options.target, "div", _bsa.defaultcta.elID(options), _bsa.defaultcta.attributes);
        _bsa.clearQueue(_bsa.findInQueue(zoneKey))
    }
    _bsa.callback(_bsa.defaultcta.attributes)
};
_bsa.defaultcta.readyToInit = true;
_bsa.imageonly = function(zoneKey, segment, options, ads) {
    var disable_css = _bsa.isset(options) && _bsa.isset(options.disable_css) ? options.disable_css : false;
    var custom_domain = _bsa.isset(options) && _bsa.isset(options.custom_domain) ? options.custom_domain : false;
    var image_type = _bsa.isset(options) && _bsa.isset(options.image) ? options.image : false;
    _bsa.imageonly.attributes = {
        type: "imageonly",
        key: zoneKey,
        segment: segment,
        options: options,
        ads: ads
    };
    _bsa.imageonly.elID = function(options) {
        return options && options.id ? options.id : "_imageonly_" + zoneKey
    };
    _bsa.imageonly.align = function(options) {
        return options && options.align ? options.align : "vertical"
    };

    function css(ads) {
        var c = '<style type="text/css">',
            id = _bsa.imageonly.elID(options);
        if (_bsa.imageonly.align(options) == "vertical") c += "#" + id + "{flex-direction:column}#" + id + " ._imageonly_{margin-bottom:10px;}";
        else c += "#" + id + "{flex-direction:row}#" + id + " a._imageonly_{width:49%;}";
        if (ads.length <= 1) c += "#" + id + "{height:" + ads[0].height + "px;width:" + ads[0].width + "px;}#" + id + " .imageonly-ad{position:absolute;right:0;bottom:0;z-index:2;background:rgba(255,255,255,.6);color:#4e4e4e;padding:2px 5px 1px 9px;font-family:arial;text-decoration:none;letter-spacing:1px;font-size:10px;text-transform:uppercase;border-radius:15px 0 0 0px;font-weight:600;}";
        else c += "#" + id + " .imageonly-ad{background:rgba(255,255,255,.6);border:1px solid #eaeaea;color:#4e4e4e;width:100%;text-align:center;margin:15px 0 0 0;padding:5px 12px;font-family:arial;text-decoration:none;letter-spacing:1px;font-size:12px;text-transform:capitalize;border-radius:3px;font-weight:500;}";
        c += "#" + id + "{position:relative;display:flex;flex-wrap:wrap;}#" + id + " a._imageonly_{display:block;position:relative;margin:0;padding:0;text-decoration:none;height:" + ads[0].height + "px;width:" + ads[0].width + "px;}#" + id + " a._imageonly_ .imageonly-image img{margin:0;padding:0;}";
        if (_bsa.isset(ads[0].custom_css)) c += ads[0].custom_css;
        c += "</style>";
        return c
    }

    function template(ads) {
        var c = "";
        if (ads.length <= 1) c += '<a href="' + ads[0].ad_via_link + '" target="_blank" class="imageonly-ad">' + (_bsa.isset(options) && _bsa.isset(options.default_text) ? options.default_text : "ad") + "</a>";
        for (var i = 0; i < ads.length; i++) {
            if (_bsa.isset(ads[i].snippet)) c += '<span class="_imageonly_ ad' + i + " " + ((i + 1) % 2 ? "odd" : "even") + '">' + ads[i].snippet + "</span>";
            else c += '<a href="' + _bsa.link(ads[i].statlink, segment, custom_domain, ads[i].timestamp) + '" target="_blank" rel="noopener sponsored" class="_imageonly_ ad' + i + " " + ((i + 1) % 2 ? "odd" : "even") + '"><img src="' + (_bsa.isset(ads[i].base64) ? ads[i].base64 : ads[i].image) + '" alt="' + _bsa.htmlEncode(ads[i].alt) + '" width="' + ads[i].width + '" height="' + ads[i].height + '" /></a>';
            c += _bsa.pixel(ads[i].pixel, ads[i].timestamp)
        }
        if (ads.length > 1) c += '<a href="' + ads[0].ad_via_link + '" target="_blank" class="imageonly-ad">' + (_bsa.isset(options) && _bsa.isset(options.default_text) ? options.default_text : "advertise here") + "</a>";
        return c
    }
    if (ads) {
        _bsa.drop((disable_css ? "" : css(ads)) + template(ads), options.target, "div", _bsa.imageonly.elID(options), _bsa.imageonly.attributes);
        _bsa.clearQueue(_bsa.findInQueue(zoneKey))
    }
    _bsa.callback(_bsa.imageonly.attributes)
};
_bsa.imageonly.readyToInit = true;
_bsa.fancybar = function(zoneKey, segment, options, ads) {
    var disable_css = _bsa.isset(options) && _bsa.isset(options.disable_css) ? options.disable_css : false;
    var custom_domain = _bsa.isset(options) && _bsa.isset(options.custom_domain) ? options.custom_domain : false;
    _bsa.fancybar.attributes = {
        type: "fancybar",
        key: zoneKey,
        segment: segment,
        options: options,
        ads: ads
    };

    function temp_zonekey(segment) {
        var reroute = new Array;
        reroute["placement:coingecko"] = "CKYDKKQE";
        reroute["placement:bitcoincom"] = "CKYDKKQJ";
        reroute["placement:worldcoinindex"] = "CKYDKKQL";
        reroute["placement:bitinfocharts"] = "CKYDKKQI";
        reroute["placement:newsbtc"] = "CKYDKKQW";
        reroute["placement:bitcoinforecast"] = "CKYDKKQM";
        reroute["placement:coinmarketcal"] = "CKYDKKQN";
        reroute["placement:advfn"] = "CKYDKKQU";
        reroute["placement:coincodex"] = "CKYDKKQY";
        reroute["placement:thebitcoinpub"] = "CKYDKKQ7";
        reroute["placement:cryptoid"] = "CKYDKKJE";
        reroute["placement:99bitcoins"] = "CKYDKKJJ";
        reroute["placement:cryptocoinsnews"] = "CKYDKKJL";
        reroute["placement:weekinethereum"] = "CKYDKKJI";
        reroute["placement:flippeningwatch"] = "CKYDKKJW";
        reroute["placement:bitinfocharts"] = "CKYDKKQI";
        reroute["placement:geeksforgeeks"] = "CKYDL2JJ";
        reroute["placement:pastebin"] = "CKYDL2JL";
        reroute["placement:danstools"] = "CKYDL27W";
        reroute["placement:programiz"] = "CKYDL27L";
        reroute["placement:seeklogo"] = "CKYDL27J";
        reroute["placement:howtoforge"] = "CKYDL27E";
        reroute["placement:unixdotcom"] = "CKYDL2J7";
        reroute["placement:speckyboy"] = "CKYDL2JY";
        reroute["placement:jsonlint"] = "CKYDL2JU";
        reroute["placement:w3layouts"] = "CKYDL2JN";
        reroute["placement:graphicdesignjunction"] = "CKYDL53E";
        reroute["placement:htmlcom"] = "CKYDL2JW";
        reroute["placement:freevector"] = "CKYDL2JI";
        reroute["placement:java2novice"] = "CKYDL277";
        reroute["placement:coursetro"] = "CKYDL27Y";
        reroute["placement:1stwebdesigner"] = "CKYDL27U";
        reroute["placement:tinypaste"] = "CKYDL53J";
        reroute["placement:entityframeworktutorial"] = "CKYDL27N";
        reroute["placement:vandelaydesign"] = "CKYDL27M";
        reroute["placement:photoshoptutorials"] = "CKYDL2JM";
        reroute["placement:noobslab"] = "CKYDL5QM";
        reroute["placement:osboxes"] = "CKYDL5QW";
        reroute["placement:texblogorg"] = "CKYDL5QI";
        reroute["placement:vector4free"] = "CKYDL5QJ";
        reroute["placement:onlygfx"] = "CKYDL5QE";
        reroute["placement:developerdrive"] = "CKYDL537";
        reroute["placement:weandthecolor"] = "CKYDL53Y";
        reroute["placement:html5doctor"] = "CKYDL53U";
        reroute["placement:vectips"] = "CKYDL53N";
        reroute["placement:pydev"] = "CKYDL53M";
        reroute["placement:icons8com"] = "CKYITKQ7";
        reroute["placement:networktools"] = "CKYDL53I";
        reroute["placement:carlcheo"] = "CKYDL53L";
        reroute["placement:faqforge"] = "CKYITKQY";
        reroute["placement:digitalcom"] = "CKYITKQU";
        reroute["placement:designerdaily"] = "CKYITKQM";
        reroute["placement:creativenerds"] = "CKYITKJE";
        reroute["placement:inserthtml"] = "CKYITKQW";
        reroute["placement:go4expert"] = "CKYITKQI";
        reroute["placement:sanwebe"] = "CKYITKQL";
        reroute["placement:java4s"] = "CKYITKQJ";
        reroute["placement:spyrestudios"] = "CKYITKQE";
        reroute["placement:randomkeygen"] = "CKYITK37";
        reroute["placement:freewebtemplates"] = "CKYITK3Y";
        reroute["placement:photoshoplady"] = "CKYITK3U";
        reroute["placement:dreamcss"] = "CKYITK3N";
        reroute["placement:mygrafico"] = "CKYITK3M";
        reroute["placement:fromdev"] = "CKYITK3W";
        reroute["placement:queness"] = "CKYITK3I";
        reroute["placement:w3bin"] = "CKYITK3L";
        reroute["placement:psddd"] = "CKYITK3J";
        reroute["placement:webappers"] = "CKYITK3E";
        reroute["placement:icondeposit"] = "CKYDL5Q7";
        reroute["placement:cssplay"] = "CKYDL5QY";
        reroute["placement:snapmunk"] = "CKYDL5QU";
        reroute["placement:vecto2000"] = "CKYDL5QN";
        reroute["placement:cssmania"] = "CKYDL53W";
        reroute["placement:ctrlq"] = "CKYITKJJ";
        if (_bsa.isset(reroute[segment])) return reroute[segment];
        return zoneKey
    }
    if (zoneKey == "CKYDV2QM" || zoneKey == "C6ADVKE") zoneKey = temp_zonekey(segment);
    _bsa.fancybar.elID = function(options) {
        return options && options.id ? options.id : "_fbn_"
    };

    function css(colors) {
        var c = colors[0],
            backgroundColor = _bsa.isset(c.backgroundColor) ? c.backgroundColor : _bsa.testData.ads[0].backgroundColor,
            backgroundHoverColor = _bsa.isset(c.backgroundHoverColor) ? c.backgroundHoverColor : _bsa.testData.ads[0].backgroundHoverColor,
            callToActionTextColor = _bsa.isset(c.ctaTextColor) ? c.ctaTextColor : _bsa.testData.ads[0].ctaTextColor,
            callToActionTextColorHover = _bsa.isset(c.ctaTextColorHover) ? c.ctaTextColorHover : _bsa.testData.ads[0].ctaTextColorHover,
            ctaBackgroundColor = _bsa.isset(c.ctaBackgroundColor) ? c.ctaBackgroundColor : _bsa.testData.ads[0].ctaBackgroundColor,
            ctaBackgroundHoverColor = _bsa.isset(c.ctaBackgroundHoverColor) ? c.ctaBackgroundHoverColor : _bsa.testData.ads[0].ctaBackgroundHoverColor,
            textColor = _bsa.isset(c.textColor) ? c.textColor : _bsa.testData.ads[0].textColor,
            textColorHover = _bsa.isset(c.textColorHover) ? c.textColorHover : _bsa.testData.ads[0].textColorHover,
            id = _bsa.fancybar.elID(options);
        var style = '<style type="text/css">';
        style += "#_fbn_._bsa_hide ._bsa_fancybar{top:-50%}#_fbn_._bsa_show ._bsa_fancybar{top:0}#_fbn_{font-size:14px}#_fbn_ *{margin:initial;padding:initial;line-height:initial}#_fbn_ ._bsa_fancybar{z-index:100001;position:fixed;top:-50%;right:0;left:0;margin:0 auto;padding:0 2ch;-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-box-shadow:0 1px 5px hsla(0, 0%, 0%, 0.15),0 1px 10px hsla(0, 0%, 0%, 0.3);box-shadow:0 1px 5px hsla(0, 0%, 0%, 0.15),0 1px 10px hsla(0, 0%, 0%, 0.3);font-family:system-ui,sans-serif;-webkit-transition:inset 500ms ease-in-out;-o-transition:inset 500ms ease-in-out;transition:inset 500ms ease-in-out}#_fbn_ .fancybar-center{display:-webkit-box;display:-ms-flexbox;display:flex;position:relative;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;max-inline-size:1440px;margin:0 auto}#_fbn_ .fancybar-wrap{-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;-ms-flex-preferred-size:1440px;flex-basis:1440px;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;margin-block:2ex;gap:1ch 3ch;text-align:left;text-decoration:none}#_fbn_ .fancybar-left{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-column-gap:2ch;-moz-column-gap:2ch;column-gap:2ch;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;-ms-flex-preferred-size:500px;flex-basis:500px;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-ms-flex-align:center;align-items:center}#_fbn_ a .fancybar-cta{-webkit-box-sizing:border-box;box-sizing:border-box;padding:1.5ex 2ch;border-radius:4px;font-weight:600;font-size:0.85em;line-height:1;text-transform:uppercase;white-space:nowrap}#_fbn_ .fancybar-logo{width:125px;height:50px;background-color:transparent}#_fbn_ .fancybar-text{display:-webkit-box;display:-ms-flexbox;display:flex;row-gap:0.5ex;-ms-flex-preferred-size:80ch;flex-basis:80ch;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:wrap;flex-wrap:wrap}#_fbn_ .fancybar-tagline{font-weight:600}#_fbn_ .fancybar-desc{line-height:1.4}#_fbn_ .fancybar-disclaimer{font-style:italic;font-size:0.85em;line-height:1.5;letter-spacing:0.5px}#_fbn_ .fancybar-footer{position:absolute;right:0;bottom:0;margin-top:1ex;font-weight:600;font-size:0.55em;line-height:1;letter-spacing:0.15ch;text-align:right;text-decoration:none;text-transform:uppercase}#_fbn_ .fancybar-footer > *{display:inline-block;padding:1ex 1ch;border-top-right-radius:3px;border-top-left-radius:3px;background-color:transparent;-webkit-transition:all 0.2s ease-in-out;-o-transition:all 0.2s ease-in-out;transition:all 0.2s ease-in-out}#_fbn_ .fancybar-close{cursor:pointer}#_fbn_ .fancybar-via{text-decoration:none}";
        style += "#_fbn_ .fancybar-footer > *:hover {background-color:" + textColor + "; color: " + backgroundColor + " !important}";
        if (_bsa.isset(ads[0].custom_css)) style += ads[0].custom_css;
        style += "</style>";
        return style
    }

    function template(ads) {
        var a = ads[0],
            adViaLink = _bsa.isset(a.ad_via_link) ? _bsa.htmlEncode(a.ad_via_link) : "https://buysellads.com/",
            callToAction = _bsa.isset(a.callToAction) ? a.callToAction : _bsa.testData.ads[0].callToAction,
            company = _bsa.isset(a.heading) ? a.heading : a.company,
            description = _bsa.isset(a.description) ? a.description : _bsa.testData.ads[0].description,
            logo = _bsa.isset(a.base64) ? a.base64 : _bsa.isset(a.logo) ? a.logo : _bsa.isset(a.transparentLogo) ? a.transparentLogo : a.image,
            statlink = _bsa.link(a.statlink, segment, custom_domain, a.timestamp),
            timestamp = a.timestamp,
            pixel = a.pixel,
            tagline = _bsa.isset(a.companyTagline) ? a.companyTagline : "",
            c = "";
        c += '<div class="_bsa_fancybar" style="background-color:' + a.backgroundColor + ";color: " + a.textColor + '">' + '<div class="fancybar-center">' + '<a href="' + statlink + '" class="fancybar-wrap" style="color:' + a.textColor + '" target="_blank" rel="noopener sponsored">' + '<div class="fancybar-left">' + '<img class="fancybar-logo" src="' + logo + '" />' + '<div class="fancybar-text">' + '<div class="fancybar-tagline">' + _bsa.htmlEncode(tagline) + "</div>" + '<div class="fancybar-desc">' + _bsa.htmlEncode(description) + "</div>" + "</div>" + "</div>" + '<div class="fancybar-cta" style="background-color:' + a.ctaBackgroundColor + ";color:" + a.ctaTextColor + '">' + _bsa.htmlEncode(callToAction) + "</div>" + "</a>" + '<div class="fancybar-footer" style="color:' + a.textColor + '">' + '<span class="fancybar-close" onclick="_bsa.close(\'' + _bsa.fancybar.elID(options) + "')\">Hide Ad</span>" + '<a class="fancybar-via" style="color:' + a.textColor + '" href="' + adViaLink + '">Ad via BuySellAds</a>' + "</div>" + "</div>";
        c += _bsa.pixel(pixel, timestamp);
        c += "</div>";
        return c
    }
    if (!_bsa.getCookie(_bsa.fancybar.elID(options))) {
        var _fancybar_didScroll;
        var _fancybar_didDrop = false;
        window.onscroll = function() {
            _fancybar_didScroll = true
        };
        var _fancybar_scrollInterval = setInterval((function() {
            if (_fancybar_didScroll && !_bsa.getCookie(_bsa.fancybar.elID(options))) {
                _fancybar_didScroll = false;
                var scrollTop = window.pageYOffset !== undefined ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
                if (scrollTop >= 100 && !document.getElementById(options.script_id)) {
                    _bsa.fancybar.readyToInit = true;
                    _bsa.init("fancybar", zoneKey, segment, options)
                } else if (scrollTop >= 100) {
                    _bsa.show(_bsa.fancybar.elID(options))
                }
                if (scrollTop < 100) {
                    _bsa.hide(_bsa.fancybar.elID(options))
                }
            }
        }), 500)
    }
    if (ads) {
        _bsa.drop((disable_css ? "" : css(ads)) + template(ads), "body", "div", _bsa.fancybar.elID(options), _bsa.fancybar.attributes);
        _bsa.clearQueue(_bsa.findInQueue(zoneKey))
    }
    _bsa.callback(_bsa.fancybar.attributes)
};
_bsa.fancybar.readyToInit = false;
_bsa.flexbar = function(zoneKey, segment, options, ads) {
    var disable_css = _bsa.isset(options) && _bsa.isset(options.disable_css) ? options.disable_css : false;
    var custom_domain = _bsa.isset(options) && _bsa.isset(options.custom_domain) ? options.custom_domain : false;
    _bsa.flexbar.elID = function(options) {
        return options && options.id ? options.id : "_flexbar_"
    };
    _bsa.flexbar.attributes = {
        type: "flexbar",
        key: zoneKey,
        segment: segment,
        options: options,
        ads: ads
    };

    function css(colors) {
        var c = colors[0],
            backgroundColor = _bsa.isset(c) && _bsa.isHex(c.barcolor) ? c.barcolor : _bsa.isset(c.backgroundColor) ? c.backgroundColor : _bsa.testData.ads[0].backgroundColor,
            backgroundHoverColor = _bsa.isset(c) && _bsa.isHex(c.barcolorHover) ? c.barcolorHover : _bsa.isset(c.backgroundHoverColor) ? c.backgroundHoverColor : _bsa.isset(c.backgroundHoverColor) ? c.backgroundHoverColor : _bsa.testData.ads[0].backgroundHoverColor,
            callToActionTextColor = _bsa.isset(c) && _bsa.isHex(c.callToActionTextColor) ? c.callToActionTextColor : _bsa.isset(c.ctaTextColor) ? c.ctaTextColor : _bsa.testData.ads[0].callToActionTextColor,
            callToActionTextColorHover = _bsa.isset(c) && _bsa.isHex(c.callToActionTextColorHover) ? c.callToActionTextColorHover : _bsa.isset(c.ctaTextColorHover) ? c.ctaTextColorHover : _bsa.testData.ads[0].callToActionTextColorHover,
            ctaBackgroundColor = _bsa.isset(c) && _bsa.isHex(c.callToActionColor) ? c.callToActionColor : _bsa.isset(c.callToActionBackgroundColor) ? c.callToActionBackgroundColor : _bsa.isset(c.ctaBackgroundColor) ? c.ctaBackgroundColor : _bsa.testData.ads[0].ctaBackgroundColor,
            ctaBackgroundHoverColor = _bsa.isset(c) && _bsa.isHex(c.callToActionColorHover) ? c.callToActionColorHover : _bsa.isset(c.ctaBackgroundHoverColor) ? c.ctaBackgroundHoverColor : _bsa.testData.ads[0].ctaBackgroundHoverColor,
            textColor = _bsa.isset(c) && _bsa.isHex(c.textcolor) ? c.textcolor : _bsa.isset(c.textColor) ? c.textColor : _bsa.testData.ads[0].textColor,
            textColorHover = _bsa.isset(c) && _bsa.isHex(c.textcolorHover) ? c.textcolorHover : _bsa.testData.ads[0].textColorHover,
            id = _bsa.flexbar.elID(options);
        var style = "<style>";
        style += "#_flexbar_._bsa_hide ._bsa_flexbar{display:none}#_flexbar_._bsa_show ._bsa_flexbar{display:block}#_flexbar_{display:block;min-height:90px;font-size:14px;line-height:initial}#_flexbar_ *{margin:initial;padding:initial}#_flexbar_._bsa_hide{min-height:initial;margin-bottom:0}#_flexbar_ ._bsa_flexbar{display:-webkit-box;display:-ms-flexbox;display:flex;z-index:999999;position:relative;width:100%;min-height:90px;background-color:" + backgroundColor + ";font-family:system-ui,Verdana,sans-serif;text-align:left}#_flexbar_ .flexbar-center{position:relative;width:100%;max-inline-size:1440px;margin:0 auto;padding:3ex 1rem}#_flexbar_ .flexbar-text{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;-ms-flex-preferred-size:50ch;flex-basis:50ch;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;gap:1ex 2ch}#_flexbar_ .flexbar-wrap{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:start;gap:2ex 3ch;text-decoration:none}#_flexbar_ .flexbar-left{-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;-ms-flex-negative:1;flex-shrink:1;-ms-flex-preferred-size:70ch;flex-basis:70ch}#_flexbar_ .flexbar-heading{color:" + textColor + ";font-weight:600;font-size:.85em;letter-spacing:1px;text-transform:uppercase}#_flexbar_ .flexbar-sponsor{font-weight:400;letter-spacing:1px;opacity:.8}#_flexbar_ .flexbar-desc{margin-top:.5ex;color:" + textColor + ";font-weight:400;font-size:1.2em;line-height:1.3;letter-spacing:1px}#_flexbar_ .flexbar-logo{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;-ms-flex-negative:1;flex-shrink:1;-ms-flex-preferred-size:125px;flex-basis:125px;line-height:0}#_flexbar_ .flexbar-logo img{width:125px;max-width:125px}#_flexbar_ .flexbar-cta{-ms-flex-preferred-size:fit-content;flex-basis:fit-content;padding:10px 14px;border:0;border-radius:3px;background:" + ctaBackgroundColor + ";color:" + callToActionTextColor + ";font-weight:600;font-size:1em;line-height:1;letter-spacing:.1ex;text-decoration:none;text-transform:uppercase;white-space:nowrap}#_flexbar_ .flexbar-footer{display:-webkit-box;display:-ms-flexbox;display:flex;position:absolute;right:1rem;bottom:0;-webkit-column-gap:1ch;-moz-column-gap:1ch;column-gap:1ch;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-weight:600;font-size:.55em;line-height:1;letter-spacing:.2ex;text-decoration:none;text-transform:uppercase}#_flexbar_ .flexbar-footer>*{display:inline-block;padding:2ex 1.5ch;background-color:transparent;color:" + textColor + ";text-decoration:none;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out}#_flexbar_ .flexbar-footer>*:hover{border-top-left-radius:2px;border-top-right-radius:2px;background-color:" + textColor + ";color:" + backgroundColor + ";cursor:pointer}";
        if (_bsa.isset(ads[0].custom_css)) style += ads[0].custom_css;
        style += "</style>";
        return style
    }

    function template(ads) {
        var a = ads[0],
            adViaLink = _bsa.isset(a.ad_via_link) ? _bsa.htmlEncode(a.ad_via_link) : "https://buysellads.com/",
            callToAction = _bsa.isset(a.callToAction) ? a.callToAction : _bsa.testData.ads[0].callToAction,
            company = _bsa.isset(a.company) ? a.company : _bsa.testData.ads[0].company,
            description = _bsa.isset(a.description) ? a.description : _bsa.testData.ads[0].description,
            logo = _bsa.isset(a.base64) ? a.base64 : _bsa.isset(a.logo) ? a.logo : _bsa.isset(a.transparentLogo) ? a.transparentLogo : a.image,
            statlink = _bsa.link(a.statlink, segment, custom_domain, a.timestamp),
            timestamp = a.timestamp,
            pixel = a.pixel,
            c = "";
        c += '<div class="_bsa_flexbar"><div class="flexbar-center"><a href="' + statlink + '" class="flexbar-wrap" target="_blank" rel="noopener sponsored"><span class="flexbar-logo"><img src="' + logo + '" /></span><span class="flexbar-text"><div class="flexbar-left"><div class="flexbar-heading"><span class="flexbar-sponsor">Sponsored by</span> ' + _bsa.htmlEncode(company) + '</div><div class="flexbar-desc">' + _bsa.htmlEncode(description) + '</div></div><span class="flexbar-cta">' + _bsa.htmlEncode(callToAction) + '</span></span></a><div class="flexbar-footer"><span class="flexbar-close" onclick="_bsa.close(\'' + _bsa.flexbar.elID(options) + '\')">Hide Ad</span> <a class="flexbar-via" href="' + adViaLink + '">Ad via BuySellAds</a></div></div>';
        c += _bsa.pixel(pixel, timestamp);
        c += "</div>";
        return c
    }
    if (!_bsa.getCookie(_bsa.flexbar.elID(options))) {
        var _flexbar_delay = setInterval((function() {
            if (!_bsa.getCookie(_bsa.flexbar.elID(options))) {
                if (!document.getElementById(options.script_id)) {
                    _bsa.flexbar.readyToInit = true;
                    _bsa.init("flexbar", zoneKey, segment, options);
                    clearInterval(_flexbar_delay)
                }
            }
        }), 100);
        if (ads) {
            _bsa.drop((disable_css ? "" : css(ads)) + template(ads), "body", "div", _bsa.flexbar.elID(options), _bsa.flexbar.attributes);
            _bsa.clearQueue(_bsa.findInQueue(zoneKey));
            clearInterval(_flexbar_delay)
        }
        _bsa.callback(_bsa.flexbar.attributes)
    }
};
_bsa.flexbar.readyToInit = true;
_bsa.hellobar = function(zoneKey, segment, options, ads) {
    var disable_css = _bsa.isset(options) && _bsa.isset(options.disable_css) ? options.disable_css : false;
    var custom_domain = _bsa.isset(options) && _bsa.isset(options.custom_domain) ? options.custom_domain : false;
    _bsa.hellobar.attributes = {
        type: "hellobar",
        key: zoneKey,
        segment: segment,
        options: options,
        ads: ads
    };
    _bsa.hellobar.elID = function(options) {
        return options && options.id ? options.id : "_hellobar_"
    };

    function css() {
        id = _bsa.hellobar.elID(options);
        var style = '<style type="text/css">';
        style += "#" + id + '{z-index:100;position:fixed;bottom:2em;left:50%;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;font-size:12px;transition:transform .5s ease-in-out,opacity .2s ease-in-out}#' + id + ",#" + id + "._bsa_hide{transform:translate3d(-50%,20vh,0);opacity:0}#" + id + "._bsa_show{transform:translate3d(-50%,0,0);opacity:1}#" + id + " section{border-radius:.25rem;box-shadow:0 1px 4px 1px hsla(0,0%,0%,0.05)}#" + id + " a{display:flex;justify-content:center;align-items:center;padding:1ex 2ch;max-width:600px;text-decoration:none}#" + id + " img{margin-right:2ch}#" + id + " .hello-desc{margin-top:.1ex;font-size:1em;font-weight:600;line-height:1.4}#" + id + " .hello-hide{position:absolute;padding:1ex 1ch;font-size:.5em;font-weight:600;cursor:pointer;letter-spacing:.05ch;text-transform:uppercase;border-top-right-radius:.2rem;border-bottom-left-radius:.2rem;inset:0 0 auto auto}@media only screen and (min-width:320px) and (max-width:759px){#" + id + "{bottom:0;left:0;font-size:11px}#" + id + ",#" + id + "._bsa_hide{transform:translate3d(0,20vh,0)}#" + id + "._bsa_show{transform:translate3d(0,0,0)}#" + id + " section{width:100vw}#" + id + " a{max-width:inherit}}";
        if (_bsa.isset(ads[0].custom_css)) style += ads[0].custom_css;
        style += "</style>";
        return style
    }

    function template(ads) {
        ad = ads[0];
        c = "";
        c += '<section style="background-color: ' + ad.backgroundColor + '">';
        c += '<a style="color: ' + ad.textColor + '" href="' + ad.statlink + '" rel="sponsored noopener" target="_blank">';
        c += '<img width=100 height=40 src="' + ad.logo + '">';
        c += '<div class="hello-desc">Supported by ' + ad.company + " — " + ad.description + "</div>";
        c += "</a>";
        c += '<span class="hello-hide" style="background-color: ' + ad.ctaBackgroundColor + "; color: " + ad.ctaTextColor + '" onclick="_bsa.close(\'' + _bsa.hellobar.elID(options) + "', 1000 * 60 * 60)\">Hide</span>";
        c += "</section>";
        c += _bsa.pixel(ad.pixel, ad.timestamp);
        return c
    }
    if (!_bsa.getCookie(_bsa.hellobar.elID(options))) {
        var _hellobar_didScroll;
        var _hellobar_didDrop = false;
        window.onscroll = function() {
            _hellobar_didScroll = true
        };
        var _hellobar_scrollInterval = setInterval((function() {
            if (_hellobar_didScroll && !_bsa.getCookie(_bsa.hellobar.elID(options))) {
                _hellobar_didScroll = false;
                var scrollTop = window.pageYOffset !== undefined ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
                if (scrollTop >= 100 && !document.getElementById(options.script_id)) {
                    _bsa.hellobar.readyToInit = true;
                    _bsa.init("hellobar", zoneKey, segment, options)
                } else if (scrollTop >= 100) {
                    _bsa.show(_bsa.hellobar.elID(options))
                }
                if (scrollTop < 100) {
                    _bsa.hide(_bsa.hellobar.elID(options))
                }
            }
        }), 500)
    }
    if (ads) {
        _bsa.drop((disable_css ? "" : css(ads)) + template(ads), "body", "div", _bsa.hellobar.elID(options), _bsa.hellobar.attributes);
        _bsa.clearQueue(_bsa.findInQueue(zoneKey))
    }
    _bsa.callback(_bsa.hellobar.attributes)
};
_bsa.hellobar.readyToInit = false;
_bsa.recommended = function(zoneKey, segment, options, ads) {
    var custom_domain = _bsa.isset(options) && _bsa.isset(options.custom_domain) ? options.custom_domain : false,
        single = [],
        c = [];
    _bsa.recommended.attributes = {
        type: "recommended",
        key: zoneKey,
        segment: segment,
        options: options,
        ads: ads
    };
    _bsa.recommended.elID = function(options) {
        return options && options.id ? options.id : "_recommended_"
    };
    if (!options.template) return false;
    if (ads) {
        for (var i = 0; i < ads.length; i++) {
            single[i] = options.template, c[i] = "";
            c[i] += single[i].replace(new RegExp("##link##", "g"), _bsa.link(ads[i].statlink, segment, custom_domain, ads[i].timestamp)).replace(new RegExp("##title##", "g"), (function() {
                return _bsa.htmlEncode(ads[i].companyTagline)
            })).replace(new RegExp("##smallImage##", "g"), ads[i].smallImage).replace(new RegExp("##company##", "g"), (function() {
                return _bsa.htmlEncode(ads[i].company)
            }));
            c[i] += _bsa.pixel(ads[i].pixel, ads[i].timestamp);
            _bsa.drop(c[i], "::clone::" + options.target, "div", _bsa.recommended.elID(options) + i, _bsa.recommended.attributes);
            if (options.removeExtras) {
                var to_remove = document.querySelector(options.target + ":last-child");
                to_remove.parentNode.removeChild(to_remove)
            }
        }
        _bsa.clearQueue(_bsa.findInQueue(zoneKey))
    }
    _bsa.callback(_bsa.recommended.attributes)
};
_bsa.recommended.readyToInit = true;
_bsa.list = function(zoneKey, segment, options, ads) {
    var custom_domain = _bsa.isset(options) && _bsa.isset(options.custom_domain) ? options.custom_domain : false,
        single = [],
        c = [];
    _bsa.list.attributes = {
        type: "list",
        key: zoneKey,
        segment: segment,
        options: options,
        ads: ads
    };
    _bsa.list.elID = function(options) {
        return options && options.id ? options.id : "_list_"
    };
    if (!options.template) return false;
    if (ads) {
        for (var i = 0; i < ads.length; i++) {
            single[i] = options.template, c[i] = "";
            c[i] += single[i].replace(new RegExp("##link##", "g"), _bsa.link(ads[i].statlink, segment, custom_domain, ads[i].timestamp)).replace(new RegExp("##smallImage##", "g"), ads[i].smallImage).replace(new RegExp("##image##", "g"), ads[i].image).replace(new RegExp("##logo##", "g"), ads[i].logo).replace(new RegExp("##transparentLogo##", "g"), ads[i].transparentLogo).replace(new RegExp("##backgroundColor##", "g"), _bsa.htmlEncode(ads[i].backgroundColor)).replace(new RegExp("##backgroundHoverColor##", "g"), _bsa.htmlEncode(ads[i].backgroundHoverColor)).replace(new RegExp("##ctaBackgroundColor##", "g"), _bsa.htmlEncode(ads[i].ctaBackgroundColor)).replace(new RegExp("##ctaBackgroundHoverColor##", "g"), _bsa.htmlEncode(ads[i].ctaBackgroundHoverColor)).replace(new RegExp("##ctaTextColor##", "g"), _bsa.htmlEncode(ads[i].ctaTextColor)).replace(new RegExp("##ctaTextColorHover##", "g"), _bsa.htmlEncode(ads[i].ctaTextColorHover)).replace(new RegExp("##textColor##", "g"), _bsa.htmlEncode(ads[i].textColor)).replace(new RegExp("##textColorHover##", "g"), _bsa.htmlEncode(ads[i].textColorHover)).replace(new RegExp("##timestamp##", "g"), _bsa.htmlEncode(ads[i].timestamp)).replace(new RegExp("##callToAction##", "g"), _bsa.htmlEncode(ads[i].callToAction)).replace(new RegExp("##description##", "g"), _bsa.htmlEncode(ads[i].description)).replace(new RegExp("##tagline##", "g"), _bsa.htmlEncode(ads[i].companyTagline)).replace(new RegExp("##company##", "g"), _bsa.htmlEncode(ads[i].company)).replace(new RegExp("##title##", "g"), _bsa.htmlEncode(ads[i].title)).replace(new RegExp("##adViaLink##", "g"), _bsa.htmlEncode(ads[i].ad_via_link));
            c[i] += _bsa.pixel(ads[i].pixel, ads[i].timestamp);
            _bsa.drop(c[i], "::clone::" + options.target, "div", _bsa.list.elID(options) + i, _bsa.list.attributes);
            if (options.removeExtras) {
                var to_remove = document.querySelector(options.target + ":last-child");
                to_remove.parentNode.removeChild(to_remove)
            }
        }
        _bsa.clearQueue(_bsa.findInQueue(zoneKey))
    }
    _bsa.callback(_bsa.recommended.attributes)
};
_bsa.recommended.readyToInit = true;
_bsa.stickybox = function(zoneKey, segment, options, ads) {
    var disable_css = _bsa.isset(options) && _bsa.isset(options.disable_css) ? options.disable_css : false;
    var custom_domain = _bsa.isset(options) && _bsa.isset(options.custom_domain) ? options.custom_domain : false;
    _bsa.stickybox.elID = function(options) {
        return options && options.id ? options.id : "_stickybox_"
    };
    _bsa.stickybox.attributes = {
        type: "stickybox",
        key: zoneKey,
        segment: segment,
        options: options,
        ads: ads
    };

    function css(colors) {
        var c = "<style>";
        var id = _bsa.stickybox.elID(options);
        c += "#_stickybox_{z-index:1000}#_stickybox_ *{margin:initial;padding:initial}#_stickybox_ .stickybox-outer{font-family:system-ui,Verdana,sans-serif;font-size:12px;max-width:400px;-webkit-box-shadow:inset 0 0 0 1px hsla(0, 0%, 100%, 0.15);box-shadow:inset 0 0 0 1px hsla(0, 0%, 100%, 0.15);position:fixed;bottom:20px;right:20px;z-index:1000}#_stickybox_ .stickybox-inner{display:-webkit-box;display:-ms-flexbox;display:flex;background-color:#121212;padding:0.8em;border-radius:4px;text-decoration:none}#_stickybox_ .stickybox-banner{position:relative;display:-ms-grid;display:grid;place-content:center center;padding:1.75em;margin-right:1em;border-radius:4px}#_stickybox_ .stickybox-logo{width:auto;height:50px;max-width:none}#_stickybox_ .stickybox-description{margin-bottom:0.5em;font-size:14px;line-height:1.35;color:hsl(0, 0%, 95%);text-align:left}#_stickybox_ .stickybox-company{font-weight:600;text-transform:uppercase;font-size:10px;color:hsl(0, 0%, 60%);letter-spacing:0.4px}#_stickybox_ .stickybox-cta{position:absolute;bottom:0;right:0;padding:4px;border-top-left-radius:4px;border-bottom-right-radius:4px;text-align:right;line-height:1;font-size:9px;letter-spacing:0.3px;font-weight:600;text-transform:uppercase}#_stickybox_._bsa_hide{display:none}#_stickybox_ .native-hide{cursor:pointer;position:absolute;translate:35% -35%;height:24px;width:24px;display:-ms-grid;display:grid;place-content:center center;inset:0 0 auto auto;border-radius:50%}@media only screen and (max-width: 667px){#_stickybox_ .stickybox-outer{max-width:initial}#_stickybox_ .stickybox-logo{height:20px}#_stickybox_ .stickybox-outer{font-size:10px;left:1em;right:1em;bottom:1em}#_stickybox_ .stickybox-cta{display:none}}";
        if (_bsa.isset(ads[0].custom_css)) c += ads[0].custom_css;
        c += "</style>";
        return c
    }

    function template(ads) {
        var c = "";
        var companyTagline = _bsa.isset(ads[0].companyTagline) ? ads[0].companyTagline : _bsa.isset(ads[0].company) ? ads[0].company : "";
        var statlink = _bsa.link(ads[0].statlink, segment, custom_domain, ads[0].timestamp);
        var logo = _bsa.isset(ads[0].base64) ? ads[0].base64 : ads[0].logo;
        var backgroundColor = ads[0].backgroundColor;
        var textColor = ads[0].textColor;
        var company = _bsa.htmlEncode(ads[0].company);
        var description = _bsa.htmlEncode(ads[0].description);
        var callToAction = _bsa.htmlEncode(ads[0].callToAction);
        var ctaBackgroundColor = ads[0].ctaBackgroundColor;
        var ctaTextColor = ads[0].ctaTextColor;
        var id = _bsa.stickybox.elID(options);
        var pixel = _bsa.pixel(ads[0].pixel, ads[0].timestamp);
        c += '<div class="stickybox-outer">';
        c += '<a class="stickybox-inner" href="' + statlink + '" rel="sponsored noopener" target="_blank" title="' + company + " — " + companyTagline + '">';
        c += '<div class="stickybox-banner" style="background-color: ' + backgroundColor + '">';
        c += '<img height="50" width="125" class="stickybox-logo" src="' + logo + '">';
        c += '<div class="stickybox-cta" style="background-color: ' + ctaBackgroundColor + "; color: " + ctaTextColor + ';">' + callToAction + "</div>";
        c += "</div>";
        c += '<div class="stickybox-text">';
        c += '<div class="stickybox-description">' + description + "</div>";
        c += '<div class="stickybox-company">Sponsored by ' + company + "</div>";
        c += "</div>";
        c += "</a>";
        c += '<div class="native-hide" style="background-color: ' + textColor + "; color: " + backgroundColor + "; border: solid 2px " + backgroundColor + ';" onclick="_bsa.close(\'' + id + '\')"><svg fill="' + backgroundColor + '" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="16" height="16"><path d="M7 4a.995.995 0 0 0-.707.293l-2 2a.999.999 0 0 0 0 1.414L11.586 15l-7.293 7.293a.999.999 0 0 0 0 1.414l2 2a.999.999 0 0 0 1.414 0L15 18.414l7.293 7.293a.999.999 0 0 0 1.414 0l2-2a.999.999 0 0 0 0-1.414L18.414 15l7.293-7.293a.999.999 0 0 0 0-1.414l-2-2a.999.999 0 0 0-1.414 0L15 11.586 7.707 4.293A.996.996 0 0 0 7 4z"/></svg></div>';
        c += "<div>";
        c += pixel;
        return c
    }
    if (!_bsa.getCookie(_bsa.stickybox.elID(options)))
        if (ads) {
            _bsa.drop((disable_css ? "" : css(ads)) + template(ads), options.target, "div", _bsa.stickybox.elID(options), _bsa.stickybox.attributes);
            _bsa.clearQueue(_bsa.findInQueue(zoneKey))
        }
    _bsa.callback(_bsa.stickybox.attributes)
};
_bsa.stickybox.readyToInit = true;
_bsa.custom = function(zoneKey, segment, options, ads) {
    var custom_domain = _bsa.isset(options) && _bsa.isset(options.custom_domain) ? options.custom_domain : false,
        single = [];
    _bsa.custom.attributes = {
        type: "custom",
        key: zoneKey,
        segment: segment,
        options: options,
        ads: ads
    };
    _bsa.custom.elID = function(options) {
        return options && options.id ? options.id : "_custom_"
    };

    function template(ads) {
        var c = "";
        if (_bsa.isset(ads[0].custom_css)) {
            c += "<style>";
            c += ads[0].custom_css;
            c += "</style>"
        }
        for (var i = 0; i < ads.length; i++) {
            single[i] = options.template;
            Object.keys(ads[i]).map((function(key, index) {
                var value = ads[i][key];
                if (key === "statlink") single[i] = single[i].replace(new RegExp("##" + key + "##", "g"), _bsa.link(ads[i][key], segment, custom_domain, ads[i].timestamp));
                else single[i] = single[i].replace(new RegExp("##" + key + "##", "g"), (function() {
                    return _bsa.htmlEncode(value)
                }))
            }));
            single[i] = single[i].replace(new RegExp("##link##", "g"), _bsa.link(ads[i].statlink, segment, custom_domain, ads[i].timestamp)).replace(new RegExp("##adViaLink##", "g"), _bsa.htmlEncode(ads[i].ad_via_link)).replace(new RegExp("##tagline##", "g"), (function() {
                return _bsa.htmlEncode(ads[i].companyTagline)
            })).replace(new RegExp("##.*##", "g"), (function() {
                return ""
            }));
            c += single[i];
            c += _bsa.pixel(ads[i].pixel, ads[i].timestamp)
        }
        return c
    }
    if (!options.template) return false;
    if (!_bsa.getCookie(_bsa.custom.elID(options)))
        if (ads) {
            _bsa.drop(template(ads), options.target, "div", _bsa.custom.elID(options), _bsa.custom.attributes);
            _bsa.clearQueue(_bsa.findInQueue(zoneKey))
        }
    _bsa.callback(_bsa.custom.attributes)
};
_bsa.custom.readyToInit = true;
_bsa.hovercard = function(zoneKey, segment, options, ads) {
    var disable_css = _bsa.isset(options) && _bsa.isset(options.disable_css) ? options.disable_css : false;
    var custom_domain = _bsa.isset(options) && _bsa.isset(options.custom_domain) ? options.custom_domain : false;
    var image_type = _bsa.isset(options) && _bsa.isset(options.image) ? options.image : false;
    _bsa.hovercard.attributes = {
        type: "hovercard",
        key: zoneKey,
        segment: segment,
        options: options,
        ads: ads
    };
    _bsa.hovercard.elID = function(options) {
        return options && options.id ? options.id : "_hovercard_"
    };

    function css(colors) {
        var c = '<style type="text/css">',
            id = _bsa.hovercard.elID(options);
        c += "@-webkit-keyframes hover-swing{20%{-webkit-transform:rotate3d(0,0,1,10deg);transform:rotate3d(0,0,1,10deg)}40%{-webkit-transform:rotate3d(0,0,1,-7deg);transform:rotate3d(0,0,1,-7deg)}60%{-webkit-transform:rotate3d(0,0,1,5deg);transform:rotate3d(0,0,1,5deg)}80%{-webkit-transform:rotate3d(0,0,1,-5deg);transform:rotate3d(0,0,1,-5deg)}to{-webkit-transform:rotate3d(0,0,1,0);transform:rotate3d(0,0,1,0)}}@keyframes hover-swing{20%{-webkit-transform:rotate3d(0,0,1,10deg);transform:rotate3d(0,0,1,10deg)}40%{-webkit-transform:rotate3d(0,0,1,-7deg);transform:rotate3d(0,0,1,-7deg)}60%{-webkit-transform:rotate3d(0,0,1,5deg);transform:rotate3d(0,0,1,5deg)}80%{-webkit-transform:rotate3d(0,0,1,-5deg);transform:rotate3d(0,0,1,-5deg)}to{-webkit-transform:rotate3d(0,0,1,0);transform:rotate3d(0,0,1,0)}}#" + id + '{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif}#' + id + " .hover-section{position:relative;left:14px}#" + id + " .hover-banner,#" + id + " .hover-subset{position:relative;top:14px;left:-14px}#" + id + " .hover-section{display:flex;flex-direction:column;max-width:250px;border-radius:8px;background-color:#201b2a;text-decoration:none}#" + id + " .hover-banner:before{transition:all .2s ease-in-out}#" + id + ' .hover-banner:before{position:absolute;bottom:0;left:0;width:0;height:0;border-width:0;border-top-right-radius:0;background-color:hsla(0,0%,100%,0);content:""}#' + id + " .hover-banner:hover{-webkit-transform-origin:top center;transform-origin:top center;-webkit-animation-name:hover-swing;animation-name:hover-swing;-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-fill-mode:both;animation-fill-mode:both}#" + id + " .hover-banner:hover:before{width:100%;height:100%;border-width:60px;border-top-right-radius:100%;background-color:hsla(0,0%,100%,.08)}#" + id + " .hover-ad{position:absolute;top:0;right:0;padding:3px 8px;border-top-right-radius:8px;border-bottom-left-radius:8px;text-transform:uppercase;font-weight:600;font-size:9px}#" + id + " .hover-banner{display:flex;margin-bottom:14px;height:140px;border-radius:8px;box-shadow:inset 0 0 0 1px hsla(0,0%,0%,.1);justify-content:center;align-items:center}#" + id + " .hover-logo{width:125px;height:50px}#" + id + " .hover-subset{display:flex}#" + id + " .hover-icon{box-sizing:content-box;margin-right:10px;padding:4px;height:20px;border:solid 5px #201b2a;border-radius:50%;min-width:auto}#" + id + " .hover-description{margin-bottom:30px;color:#ddd;font-size:14px;line-height:1.4;text-align:left}";
        if (_bsa.isset(ads[0].custom_css)) c += ads[0].custom_css;
        c += "</style>";
        return c
    }

    function template(ads) {
        var c = "";
        for (var i = 0; i < ads.length; i++) {
            ads[i].companyTagline = ads[i].companyTagline ? ads[i].companyTagline : ads[i].company;
            c += '<a href="' + ads[i].statlink + '" class="hover-section" target="_blank" rel="noopener sponsored">';
            c += '<div class="hover-banner" style="background-color: ' + ads[i].backgroundColor + '">';
            c += '<span style="color: ' + ads[i].backgroundColor + "; background-color: " + ads[i].textColor + 'CC" class="hover-ad">Sponsored</span>';
            c += '<img class="hover-logo" src="' + ads[i].logo + '">';
            c += "</div>";
            c += '<div class="hover-subset">';
            c += '<img class="hover-icon" style="background-color: ' + ads[i].backgroundColor + '" src="' + ads[i].image + '">';
            c += '<div class="hover-description"><strong>' + ads[i].company + "</strong> " + ads[i].description + "</div>";
            c += "</div>";
            c += "</a>";
            c += _bsa.pixel(ads[i].pixel, ads[i].timestamp)
        }
        return c
    }
    if (ads) {
        _bsa.drop((disable_css ? "" : css(ads)) + template(ads), options.target, "div", _bsa.hovercard.elID(options), _bsa.hovercard.attributes);
        _bsa.clearQueue(_bsa.findInQueue(zoneKey))
    }
    _bsa.callback(_bsa.hovercard.attributes)
};
_bsa.hovercard.readyToInit = true;
_bsa.iab = function(zoneKey, segment, options, ads) {
    var disable_css = _bsa.isset(options) && _bsa.isset(options.disable_css) ? options.disable_css : false;
    var custom_domain = _bsa.isset(options) && _bsa.isset(options.custom_domain) ? options.custom_domain : false;
    _bsa.iab.elID = function(options) {
        return options && options.id ? options.id : "_iab_"
    };
    _bsa.iab.iabformat = function(options) {
        return options && options.iabformat ? options.iabformat : "leaderboard"
    };
    _bsa.iab.attributes = {
        type: "iab",
        key: zoneKey,
        segment: segment,
        options: options,
        ads: ads
    };

    function css(colors) {
        var c = colors[0],
            backgroundColor = _bsa.isset(c) && _bsa.isHex(c.barcolor) ? c.barcolor : _bsa.isset(c.backgroundColor) ? c.backgroundColor : _bsa.testData.ads[0].backgroundColor,
            backgroundHoverColor = _bsa.isset(c) && _bsa.isHex(c.barcolorHover) ? c.barcolorHover : _bsa.isset(c.backgroundHoverColor) ? c.backgroundHoverColor : _bsa.isset(c.backgroundHoverColor) ? c.backgroundHoverColor : _bsa.testData.ads[0].backgroundHoverColor,
            callToActionTextColor = _bsa.isset(c) && _bsa.isHex(c.callToActionTextColor) ? c.callToActionTextColor : _bsa.isset(c.ctaTextColor) ? c.ctaTextColor : _bsa.testData.ads[0].callToActionTextColor,
            callToActionTextColorHover = _bsa.isset(c) && _bsa.isHex(c.callToActionTextColorHover) ? c.callToActionTextColorHover : _bsa.isset(c.ctaTextColorHover) ? c.ctaTextColorHover : _bsa.testData.ads[0].callToActionTextColorHover,
            ctaBackgroundColor = _bsa.isset(c) && _bsa.isHex(c.callToActionColor) ? c.callToActionColor : _bsa.isset(c.callToActionBackgroundColor) ? c.callToActionBackgroundColor : _bsa.isset(c.ctaBackgroundColor) ? c.ctaBackgroundColor : _bsa.testData.ads[0].ctaBackgroundColor,
            ctaBackgroundHoverColor = _bsa.isset(c) && _bsa.isHex(c.callToActionColorHover) ? c.callToActionColorHover : _bsa.isset(c.ctaBackgroundHoverColor) ? c.ctaBackgroundHoverColor : _bsa.testData.ads[0].ctaBackgroundHoverColor,
            textColor = _bsa.isset(c) && _bsa.isHex(c.textcolor) ? c.textcolor : _bsa.isset(c.textColor) ? c.textColor : _bsa.testData.ads[0].textColor,
            textColorHover = _bsa.isset(c) && _bsa.isHex(c.textcolorHover) ? c.textcolorHover : _bsa.isset(c.textColorHover) ? c.textColorHover : _bsa.testData.ads[0].textColorHover,
            id = _bsa.iab.elID(options);
        var style = '<style type="text/css">';
        style += "#" + id + " .z_" + zoneKey + ' ._bsa_iab{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;text-decoration:none;box-sizing:border-box;display:flex;position:relative;background-color:' + backgroundColor + ";border:solid 1px hsla(0,0%,0%,.2)}#" + id + " .z_" + zoneKey + " .iab-image{max-height:50px}#" + id + " .z_" + zoneKey + " .iab-details{color:" + textColor + "}#" + id + " .z_" + zoneKey + " .iab-company{text-transform:uppercase;letter-spacing:1px;font-size:11px}#" + id + " .z_" + zoneKey + " .iab-desc{letter-spacing:1px;font-weight:300;font-size:14px;line-height:1.4}#" + id + " .z_" + zoneKey + " .iab-cta{padding:10px 14px;border-radius:3px;text-transform:uppercase;letter-spacing:1px;font-weight:400;font-size:12px;color:" + callToActionTextColor + ";background-color:" + ctaBackgroundColor + "}#" + id + " .z_" + zoneKey + " .size-300x250,#" + id + " .z_" + zoneKey + " .size-rectangle{width:300px;height:250px;flex-direction:column;align-items:start;padding:1em;justify-content:center}#" + id + " .z_" + zoneKey + " .size-300x250 .iab-company,#" + id + " .z_" + zoneKey + " .size-rectangle .iab-company{position:absolute;bottom:1.2em}#" + id + " .z_" + zoneKey + " .size-300x250 .iab-cta,#" + id + " .z_" + zoneKey + " .size-rectangle .iab-cta{margin-bottom:2em}#" + id + " .z_" + zoneKey + " .size-300x250>*+*,#" + id + " .z_" + zoneKey + " .size-rectangle>*+*{margin-top:1em}#" + id + " .z_" + zoneKey + " .size-728x90,#" + id + " .z_" + zoneKey + " .size-leaderboard{justify-content:start;align-items:center;padding:1em;width:728px;height:90px}#" + id + " .z_" + zoneKey + " .size-728x90 .iab-cta,#" + id + " .z_" + zoneKey + " .size-leaderboard .iab-cta{white-space:nowrap}#" + id + " .z_" + zoneKey + " .size-728x90>*+*,#" + id + " .z_" + zoneKey + " .size-leaderboard>*+*{margin-left:1em}#" + id + " .z_" + zoneKey + " .size-160x600{flex-direction:column;align-items:start;justify-content:center;width:160px;height:600px;padding:10px}#" + id + " .z_" + zoneKey + " .size-160x600 .iab-company{position:absolute;line-height:1.4;bottom:1em}#" + id + " .z_" + zoneKey + " .size-160x600 .iab-desc{margin-top:1em}#" + id + " .z_" + zoneKey + " .size-160x600>*+*{margin-top:1em}";
        if (_bsa.isset(ads[0].custom_css)) style += ads[0].custom_css;
        style += "</style>";
        return style
    }

    function template(ads) {
        var c = "";
        for (var i = 0; i < 1; i++) {
            c += '<div class="z_' + zoneKey + '"><a href="' + _bsa.link(ads[i].statlink, segment, custom_domain, ads[i].timestamp, options.clicktag) + '" target="_blank" rel="noopener sponsored" class="_bsa_iab size-' + _bsa.iab.iabformat(options) + '"><img class="iab-image" height="50" width="125" src="' + (_bsa.iab.iabformat(options) == "rectangle" ? ads[i].logo : ads[i].logo) + '" /><span class="iab-details"><div class="iab-company">Sponsored by <strong>' + _bsa.htmlEncode(ads[i].company) + '</strong></div><div class="iab-desc">' + _bsa.htmlEncode(ads[i].description) + '</div></span><span class="iab-cta">' + _bsa.htmlEncode(ads[i].callToAction) + "</span></a></div>";
            c += _bsa.pixel(ads[i].pixel, ads[i].timestamp)
        }
        return c
    }
    if (ads) {
        _bsa.drop((disable_css ? "" : css(ads)) + template(ads), options.target, "div", _bsa.iab.elID(options), _bsa.iab.attributes);
        _bsa.clearQueue(_bsa.findInQueue(zoneKey))
    }
    _bsa.callback(_bsa.iab.attributes)
};
_bsa.iab.readyToInit = true;
_bsa.carbonbackfill = function(a) {
    var carbon = document.createElement("script");
    carbon.type = "text/javascript";
    carbon.src = _bsa.carbonsrv() + "?_is_in_fallback=true&serve=" + a.options.carbonfallback + _bsa.carbonsrvextra();
    carbon.id = "_carbonads_js";
    if (!_bsa.isset(a.options.disable_css) || a.options.disable_css == false) {
        var carbonstyle = document.createElement("style"),
            carbon_leaderboard = '#carbonads{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",Helvetica,Arial,sans-serif}#carbonads{position:relative;display:block;overflow:hidden;box-sizing:border-box;width:728px;height:90px;background-color:#fcfcfc;border:1px solid #cacaca}#carbonads>span{position:relative;display:block}#carbonads a{color:inherit;text-decoration:none}#carbonads a:hover{color:inherit}.carbon-wrap{display:flex;align-items:center}.carbon-img{display:block;margin:0;line-height:1}.carbon-img img{display:block;width:auto;height:90px}.carbon-text{position:relative;display:flex;margin-bottom:12px;padding:8px 1em;max-width:600px;text-align:left;font-size:18px;line-height:1.35;align-items:center}.carbon-text:after{display:table;margin-left:20px;padding:12px 16px;border-radius:3px;background-color:#333;color:#fff;content:"Sign Up";white-space:nowrap;font-weight:600;font-size:14px;line-height:1}.carbon-poweredby{position:absolute;bottom:4px;left:134px;color:#999!important;text-transform:uppercase;white-space:nowrap;letter-spacing:.5px;font-weight:600;font-size:8px}',
            carbon_rectangle = '#carbonads{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",Helvetica,Arial,sans-serif}#carbonads{position:relative;display:block;overflow:hidden;box-sizing:border-box;width:300px;height:250px;background-color:#fcfcfc;border:1px solid #cacaca;padding:12px 14px;text-align:center;}#carbonads>span{position:relative;display:block;height:100%;}#carbonads a{color:inherit;text-decoration:none}#carbonads a:hover{color:inherit}.carbon-wrap{align-items:center}.carbon-img{display:block;margin:0;line-height:1}.carbon-img img{display:block;width:auto;margin:0 auto;height:90px}.carbon-text{position:relative;display:block;text-align:center;margin-bottom:12px;padding:8px 1em;max-width:600px;font-size:16px;line-height:1.35;align-items:center}.carbon-text:after{display:table;margin:10px auto 0;padding:10px 14px;border-radius:3px;background-color:#333;color:#fff;content:"Sign Up";white-space:nowrap;font-weight:600;font-size:14px;line-height:1}.carbon-poweredby{position:absolute;bottom:-4px;left:0;color:#999!important;text-transform:uppercase;white-space:nowrap;width:100%;display:block;letter-spacing:.5px;font-weight:600;font-size:8px}';
        carbonstyle.innerHTML = _bsa.isset(a.options.iabformat) && a.options.iabformat == "rectangle" ? carbon_rectangle : carbon_leaderboard;
        carbon.appendChild(carbonstyle)
    }
    document.getElementById(a.options.target.substring(1)).appendChild(carbon)
};
_bsa.carbonsrv = function() {
    if (_bsa.CARBONSRV_OVERRIDE) {
        return _bsa.CARBONSRV_OVERRIDE
    }
    return "https://cdn.carbonads.com/carbon.js"
};
_bsa.carbonsrvextra = function() {
    if (_bsa.SRV_OVERRIDE) {
        return "&cd=" + _bsa.SRV_OVERRIDE
    }
    return ""
};