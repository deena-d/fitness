(function(_) {
    /* 
     
     Copyright The Closure Library Authors. 
     SPDX-License-Identifier: Apache-2.0 
    */
    /* 
     
     SPDX-License-Identifier: Apache-2.0 
    */
    var ca, fa, ia, ja, ka, oa, qa, sa, wa, va, ya, za, Aa, Ba, Ca, Fa, Ga, La, Ma, Na, Oa, Wa, Ya, $a, bb, db, kb, mb, rb, ub, zb, Ab, Eb, Gb, Kb, Mb, Tb, Ub, Nb, Wb, Zb, $b, bc, cc, fc, gc, hc, ic, lc, oc, pc, rc, uc, vc, xc, yc, zc, Ac, Bc, Cc, Dc, Fc, Jc, Kc, Lc, Oc, Pc, Sc, Rc, Uc, Vc, $c, ad, dd, ed, fd, hd, gd, ld, nd, md, pd, od, qd, bd, ud, Ad, Bd, Cd, Dd, Gd, Hd, Id, Jd, Md, Nd, Od, Pd, Qd, Ud, Vd, Wd, Sd, be, Td, ce, ie, ke, me, oe, pe, qe, re, ue, xe, ze, Ae, Be, Ce, De, Fe, Ge, He, Ie, Ne, Qe, Se, Ue, Ve, We, af, bf, df, gf, jf, mf, of , rf, vf, xf, Bf, zf, Ff, Gf, Hf, Df, Ef, Lf, Of, Pf, Vf, Wf, cg, gg, jg, lg, ng, og, ug, yg, J, zg, Gg, Eg, ch, gh, ih, jh, oh, rh, vh, yh, Ah, zh, Hh, Ih, Jh, Kh, Bh, Lh, Ch, Nh, Oh, Qh, Rh, Th, Sh, Vh, ai, Zh, bi, ji, mi, ei, fi, ri, Mi, Oi, Ri, Si, Ti, Yi, Zi, jj, pj, nj, oj, uj, yj, Aj, Bj, Cj, Ej, Ij, Rj, Lj, Fj, ak, Yj, Zj, ck, ek, hk, P, jk, kk, lk, nk, pk, qk, xk, yk, Ak, Bk, Hk, Jk, Kk, Ok, Sk, Tk, Uk, Wk, $k, el, gl, hl, jl, kl, ol, pl, ql, ul, nl, wl, xl, yl, Al, Dl, Fl, Gl, Hl, Il, fm, gm, im, km, lm, jm, pm, qm, rm, tm, Bm, Dm, Fm, Im, Hm, Gm, Qm, Tm, Um, Vm, Wm, Ym, Zm, $m, cn, fn, en, jn, kn, mn, sn, tn, vn, Fn, Dn, In, Kn, wn, Tn, Un, Xn, Wn, $n, bo, eo, fo, ho, io, jo, ko, oo, po, qo, ro, so, to, uo, vo, wo, yo, zo, Ao, Eo, Go, Jo, No, Oo, Ro, Uo, So, To, ep, Yo, gp, jp, lp, up, mp, tp, op, ip, Bp, Dp, Ep, Gp, Np, Qp, Sp, Tp, Zp, aq, cq, fq, dq, ra, gq, hq, jq, iq, kq, lq, pq, rq, tq, vq, wq, xq, Eq, Fq, Gq, Hq, Iq, Jq, Kq, Lq, Nq, Pq, Tq, Qq, Uq, ar, er, gr, hr, ir, lr, Cr, cs, ds, es, Ps, Ss, $s, Vs, Xs, ct, bt, et, nt, pt, st, vt, xt, yt, zt, Bt, Ct, Dt, Et, Gt, Ht, It, Pt, Qt, Rt, qb, Tt, Wt, Ut, Vt, Xt, Yt, tc, cu, du, eu, fu;
    ca = function(a) {
        return function() {
            return _.ba[a].apply(this, arguments)
        }
    };
    fa = function(a) {
        return a ? a.passive && ea() ? a : a.capture || !1 : !1
    };
    ia = function(a, b) {
        b = _.ha(a, b);
        var c;
        (c = 0 <= b) && Array.prototype.splice.call(a, b, 1);
        return c
    };
    ja = function(a) {
        var b = a.length;
        if (0 < b) {
            for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
            return c
        }
        return []
    };
    ka = function(a, b, c) {
        return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c)
    };
    oa = function(a) {
        for (var b = 0, c = 0, d = {}; c < a.length;) {
            var e = a[c++],
                f = _.la(e) ? "o" + _.na(e) : (typeof e).charAt(0) + e;
            Object.prototype.hasOwnProperty.call(d, f) || (d[f] = !0, a[b++] = e)
        }
        a.length = b
    };
    qa = function(a, b) {
        a.sort(b || _.pa)
    };
    sa = function(a) {
        for (var b = ra, c = Array(a.length), d = 0; d < a.length; d++) c[d] = {
            index: d,
            value: a[d]
        };
        var e = b || _.pa;
        qa(c, function(f, g) {
            return e(f.value, g.value) || f.index - g.index
        });
        for (b = 0; b < a.length; b++) a[b] = c[b].value
    };
    wa = function(a, b) {
        if (!_.ua(a) || !_.ua(b) || a.length != b.length) return !1;
        for (var c = a.length, d = va, e = 0; e < c; e++)
            if (!d(a[e], b[e])) return !1;
        return !0
    };
    _.pa = function(a, b) {
        return a > b ? 1 : a < b ? -1 : 0
    };
    va = function(a, b) {
        return a === b
    };
    ya = function(a, b) {
        for (var c = {}, d = 0; d < a.length; d++) {
            var e = a[d],
                f = b.call(void 0, e, d, a);
            void 0 !== f && (c[f] || (c[f] = [])).push(e)
        }
        return c
    };
    za = function(a) {
        for (var b = [], c = 0; c < arguments.length; c++) {
            var d = arguments[c];
            if (Array.isArray(d))
                for (var e = 0; e < d.length; e += 8192)
                    for (var f = za.apply(null, ka(d, e, e + 8192)), g = 0; g < f.length; g++) b.push(f[g]);
            else b.push(d)
        }
        return b
    };
    Aa = function(a, b) {
        for (var c in a) b.call(void 0, a[c], c, a)
    };
    Ba = function(a) {
        var b = [],
            c = 0,
            d;
        for (d in a) b[c++] = a[d];
        return b
    };
    Ca = function(a, b) {
        for (var c in a)
            if (b.call(void 0, a[c], c, a)) return c
    };
    Fa = function(a, b) {
        for (var c, d, e = 1; e < arguments.length; e++) {
            d = arguments[e];
            for (c in d) a[c] = d[c];
            for (var f = 0; f < Ea.length; f++) c = Ea[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
        }
    };
    Ga = function() {
        var a = _.r.navigator;
        return a && (a = a.userAgent) ? a : ""
    };
    La = function(a) {
        return Ha ? Ja ? Ja.brands.some(function(b) {
            return (b = b.brand) && _.Ka(b, a)
        }) : !1 : !1
    };
    Ma = function(a) {
        return _.Ka(Ga(), a)
    };
    Na = function() {
        return Ha ? !!Ja && 0 < Ja.brands.length : !1
    };
    Oa = function() {
        return Na() ? La("Chromium") : (Ma("Chrome") || Ma("CriOS")) && !(Na() ? 0 : Ma("Edge")) || Ma("Silk")
    };
    _.Qa = function(a) {
        a: if (Pa) {
            try {
                var b = new URL(a)
            } catch (c) {
                b = "https:";
                break a
            }
            b = b.protocol
        } else b: {
            b = document.createElement("a");
            try {
                b.href = a
            } catch (c) {
                b = void 0;
                break b
            }
            b = b.protocol;b = ":" === b || "" === b ? "https:" : b
        }
        if ("javascript:" !== b) return a
    };
    _.Ua = function(a) {
        return a instanceof _.Ra ? _.Sa(a) : _.Qa(a)
    };
    _.Va = function(a) {
        throw Error("unexpected value " + a + "!");
    };
    Wa = function(a) {
        var b, c, d = null == (c = (b = (a.ownerDocument && a.ownerDocument.defaultView || window).document).querySelector) ? void 0 : c.call(b, "script[nonce]");
        (b = d ? d.nonce || d.getAttribute("nonce") || "" : "") && a.setAttribute("nonce", b)
    };
    Ya = function(a, b) {
        a.textContent = _.Xa(b);
        Wa(a)
    };
    $a = function(a, b) {
        a.src = _.Za(b);
        Wa(a)
    };
    bb = function(a, b) {
        a.write(_.ab(b))
    };
    db = function(a) {
        return new cb(function(b) {
            return b.substr(0, a.length + 1).toLowerCase() === a + ":"
        })
    };
    _.ib = function(a) {
        var b = void 0 === b ? eb : b;
        a: {
            b = void 0 === b ? eb : b;
            for (var c = 0; c < b.length; ++c) {
                var d = b[c];
                if (d instanceof cb && d.Mj(a)) {
                    a = fb(a);
                    break a
                }
            }
            a = void 0
        }
        return a || _.hb
    };
    kb = function(a) {
        for (var b = _.jb.apply(1, arguments), c = [a[0]], d = 0; d < b.length; d++) c.push(String(b[d])), c.push(a[d + 1]);
        return fb(c.join(""))
    };
    mb = function(a) {
        var b = window,
            c = !0;
        c = void 0 === c ? !1 : c;
        new _.w.Promise(function(d, e) {
            function f() {
                g.onload = null;
                g.onerror = null;
                var h;
                null == (h = g.parentElement) || h.removeChild(g)
            }
            var g = b.document.createElement("script");
            g.onload = function() {
                f();
                d()
            };
            g.onerror = function() {
                f();
                e(void 0)
            };
            g.type = "text/javascript";
            $a(g, a);
            c && "complete" !== b.document.readyState ? _.lb(b, "load", function() {
                b.document.body.appendChild(g)
            }) : b.document.body.appendChild(g)
        })
    };
    rb = function(a) {
        var b, c, d, e, f, g;
        return _.nb(function(h) {
            switch (h.j) {
                case 1:
                    return b = "https://pagead2.googlesyndication.com/getconfig/sodar?sv=200&tid=" + a.j + ("&tv=" + a.A + "&st=") + a.Lc, c = void 0, h.o = 2, _.ob(h, pb(b), 4);
                case 4:
                    c = h.A;
                    h.j = 3;
                    h.o = 0;
                    break;
                case 2:
                    qb(h);
                case 3:
                    if (!c) return h.return(void 0);
                    d = a.jd || c.sodar_query_id;
                    e = void 0 !== c.rc_enable && a.o ? c.rc_enable : "n";
                    f = void 0 === c.bg_snapshot_delay_ms ? "0" : c.bg_snapshot_delay_ms;
                    g = void 0 === c.is_gen_204 ? "1" : c.is_gen_204;
                    return d && c.bg_hash_basename && c.bg_binary ? h.return({
                        context: a.C,
                        Ii: c.bg_hash_basename,
                        Hi: c.bg_binary,
                        Sj: a.j + "_" + a.A,
                        jd: d,
                        Lc: a.Lc,
                        se: e,
                        Ne: f,
                        qe: g
                    }) : h.return(void 0)
            }
        })
    };
    ub = function(a) {
        var b;
        return _.nb(function(c) {
            if (1 == c.j) return _.ob(c, rb(a), 2);
            if (b = c.A) {
                var d = "sodar2";
                d = void 0 === d ? "sodar2" : d;
                var e = window,
                    f = e.GoogleGcLKhOms;
                f && "function" === typeof f.push || (f = e.GoogleGcLKhOms = []);
                var g = {};
                f.push((g._ctx_ = b.context, g._bgv_ = b.Ii, g._bgp_ = b.Hi, g._li_ = b.Sj, g._jk_ = b.jd, g._st_ = b.Lc, g._rc_ = b.se, g._dl_ = b.Ne, g._g2_ = b.qe, g));
                if (f = e.GoogleDX5YKUSk) e.GoogleDX5YKUSk = void 0, f[1]();
                d = _.sb(tb, {
                    basename: d
                });
                mb(d)
            }
            return c.return(b)
        })
    };
    zb = function(a) {
        var b = !1;
        b = void 0 === b ? !1 : b;
        if (xb) {
            if (b && /(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])/.test(a)) throw Error("Found an unpaired surrogate");
            a = (yb || (yb = new TextEncoder)).encode(a)
        } else {
            for (var c = 0, d = new Uint8Array(3 * a.length), e = 0; e < a.length; e++) {
                var f = a.charCodeAt(e);
                if (128 > f) d[c++] = f;
                else {
                    if (2048 > f) d[c++] = f >> 6 | 192;
                    else {
                        if (55296 <= f && 57343 >= f) {
                            if (56319 >= f && e < a.length) {
                                var g = a.charCodeAt(++e);
                                if (56320 <= g && 57343 >= g) {
                                    f = 1024 * (f - 55296) + g - 56320 + 65536;
                                    d[c++] = f >> 18 | 240;
                                    d[c++] = f >> 12 & 63 | 128;
                                    d[c++] = f >> 6 & 63 | 128;
                                    d[c++] = f & 63 | 128;
                                    continue
                                } else e--
                            }
                            if (b) throw Error("Found an unpaired surrogate");
                            f = 65533
                        }
                        d[c++] = f >> 12 | 224;
                        d[c++] = f >> 6 & 63 | 128
                    }
                    d[c++] = f & 63 | 128
                }
            }
            a = c === d.length ? d : d.subarray(0, c)
        }
        return a
    };
    Ab = function() {
        var a = Error();
        _.r.setTimeout(function() {
            throw a;
        }, 0)
    };
    Eb = function(a) {
        if (!Cb) return Db(a);
        for (var b = "", c = 0, d = a.length - 10240; c < d;) b += String.fromCharCode.apply(null, a.subarray(c, c += 10240));
        b += String.fromCharCode.apply(null, c ? a.subarray(c) : a);
        return btoa(b)
    };
    Gb = function(a) {
        return Fb[a] || ""
    };
    Kb = function(a) {
        return Hb && null != a && a instanceof Uint8Array
    };
    Mb = function(a) {
        if (a !== Lb) throw Error("illegal external caller");
    };
    Tb = function(a) {
        var b = 0 > a;
        a = Math.abs(a);
        var c = a >>> 0;
        a = Math.floor((a - c) / 4294967296);
        b && (c = _.y(Nb(c, a)), b = c.next().value, a = c.next().value, c = b);
        Ob = c >>> 0;
        Pb = a >>> 0
    };
    Ub = function(a) {
        if (16 > a.length) Tb(Number(a));
        else if ("function" === typeof BigInt) a = BigInt(a), Ob = Number(a & BigInt(4294967295)) >>> 0, Pb = Number(a >> BigInt(32) & BigInt(4294967295));
        else {
            var b = +("-" === a[0]);
            Pb = Ob = 0;
            for (var c = a.length, d = b, e = (c - b) % 6 + b; e <= c; d = e, e += 6) d = Number(a.slice(d, e)), Pb *= 1E6, Ob = 1E6 * Ob + d, 4294967296 <= Ob && (Pb += _.z(Math, "trunc").call(Math, Ob / 4294967296), Pb >>>= 0, Ob >>>= 0);
            b && (b = _.y(Nb(Ob, Pb)), a = b.next().value, b = b.next().value, Ob = a, Pb = b)
        }
    };
    Nb = function(a, b) {
        b = ~b;
        a ? a = ~a + 1 : b += 1;
        return [a, b]
    };
    Wb = function(a) {
        return Array.prototype.slice.call(a)
    };
    Zb = function(a) {
        var b = Xb(a);
        1 !== (b & 1) && (Object.isFrozen(a) && (a = Wb(a)), Yb(a, b | 1))
    };
    $b = function(a, b) {
        Object.isFrozen(a) && (a = Wb(a));
        Yb(a, b);
        return a
    };
    bc = function(a) {
        ac(a, 1);
        return a
    };
    cc = function(a) {
        ac(a, 34);
        return a
    };
    fc = function(a) {
        ac(a, 32);
        return a
    };
    gc = function(a, b) {
        Yb(b, (a | 0) & -255)
    };
    hc = function(a, b) {
        Yb(b, (a | 34) & -221)
    };
    ic = function(a) {
        a = a >> 11 & 1023;
        return 0 === a ? 536870912 : a
    };
    lc = function(a) {
        return null !== a && "object" === typeof a && !Array.isArray(a) && a.constructor === Object
    };
    oc = function(a, b, c) {
        if (null != a)
            if ("string" === typeof a) a = a ? new mc(a, Lb) : nc();
            else if (a.constructor !== mc)
            if (Kb(a)) {
                var d;
                c ? d = 0 == a.length ? nc() : new mc(a, Lb) : d = a.length ? new mc(new Uint8Array(a), Lb) : nc();
                a = d
            } else {
                if (!b) throw Error();
                a = void 0
            }
        return a
    };
    pc = function(a) {
        if (a & 2) throw Error();
    };
    _.qc = function(a) {
        if (null != a && "number" !== typeof a) throw Error("Value of float/double field must be a number, found " + typeof a + ": " + a);
        return a
    };
    rc = function(a) {
        if (null == a) return a;
        if ("number" === typeof a || "NaN" === a || "Infinity" === a || "-Infinity" === a) return Number(a)
    };
    uc = function(a) {
        if ("boolean" !== typeof a) throw Error("Expected boolean but got " + tc(a) + ": " + a);
        return !!a
    };
    vc = function(a) {
        if (null == a) return a;
        if ("boolean" === typeof a || "number" === typeof a) return !!a
    };
    xc = function(a) {
        var b = typeof a;
        return "number" === b ? _.z(Number, "isFinite").call(Number, a) : "string" !== b ? !1 : wc.test(a)
    };
    yc = function(a) {
        return "number" === typeof a && _.z(Number, "isFinite").call(Number, a) || !!a && "string" === typeof a && isFinite(a)
    };
    zc = function(a) {
        _.z(Number, "isFinite").call(Number, a) || Ab();
        return a
    };
    Ac = function(a) {
        return a
    };
    Bc = function(a) {
        if ("number" !== typeof a) throw Error();
        _.z(Number, "isFinite").call(Number, a);
        return a
    };
    Cc = function(a) {
        if (null == a) return a;
        if ("string" === typeof a) {
            if (!a) return;
            a = +a
        }
        if ("number" === typeof a) return a
    };
    Dc = function(a) {
        if ("number" !== typeof a) throw Error();
        _.z(Number, "isFinite").call(Number, a);
        return a
    };
    _.Ec = function(a) {
        return null == a ? a : Dc(a)
    };
    Fc = function(a) {
        if (null == a) return a;
        if ("string" === typeof a) {
            if (!a) return;
            a = +a
        }
        if ("number" === typeof a) return a
    };
    _.Ic = function(a) {
        if (!yc(a)) throw Error();
        xc(a) || Ab();
        return "string" === typeof a ? a : a
    };
    Jc = function(a) {
        if (null == a) return a;
        if (yc(a)) {
            var b;
            "number" === typeof a ? b = a : b = a;
            return b
        }
    };
    Kc = function(a) {
        if (null == a) return a;
        if (yc(a)) {
            var b;
            "string" === typeof a ? b = a : b = a;
            return b
        }
    };
    Lc = function(a) {
        if (!yc(a)) throw Error();
        xc(a) || Ab();
        return "string" === typeof a ? a : a
    };
    _.Nc = function(a) {
        if ("string" !== typeof a) throw Error();
        return a
    };
    Oc = function(a) {
        if (null != a && "string" !== typeof a) throw Error();
        return a
    };
    Pc = function(a) {
        return null == a || "string" === typeof a ? a : void 0
    };
    Sc = function(a, b, c, d) {
        var e = !1;
        if (null != a && "object" === typeof a && !(e = Array.isArray(a)) && a.Mf === Qc) return a;
        if (!e) return c ? d & 2 ? Rc(b) : new b : void 0;
        e = c = Xb(a);
        0 === e && (e |= d & 32);
        e |= d & 2;
        e !== c && Yb(a, e);
        return new b(a)
    };
    Rc = function(a) {
        var b = a[Tc];
        if (b) return b;
        b = new a;
        cc(b.H);
        return a[Tc] = b
    };
    Uc = function(a) {
        return a
    };
    Vc = function(a, b, c) {
        return "string" === typeof a ? a : c ? "" : void 0
    };
    _.Xc = function(a, b) {
        Wc = b;
        a = new a(b);
        Wc = void 0;
        return a
    };
    $c = function(a) {
        switch (typeof a) {
            case "number":
                return 0 < a ? void 0 : 0 === a ? Zc || (Zc = [0, void 0]) : [-a, void 0];
            case "string":
                return [0, a];
            case "object":
                return a
        }
    };
    _.A = function(a, b, c) {
        null == a && (a = Wc);
        Wc = void 0;
        if (null == a) {
            var d = 96;
            c ? (a = [c], d |= 512) : a = [];
            b && (d = d & -2095105 | (b & 1023) << 11)
        } else {
            if (!Array.isArray(a)) throw Error();
            d = Xb(a);
            if (d & 64) return a;
            d |= 64;
            if (c && (d |= 512, c !== a[0])) throw Error();
            a: {
                c = a;
                var e = c.length;
                if (e) {
                    var f = e - 1,
                        g = c[f];
                    if (lc(g)) {
                        d |= 256;
                        b = +!!(d & 512) - 1;
                        e = f - b;
                        1024 <= e && (ad(c, b, g), e = 1023);
                        d = d & -2095105 | (e & 1023) << 11;
                        break a
                    }
                }
                b && (g = +!!(d & 512) - 1, b = Math.max(b, e - g), 1024 < b && (ad(c, g, {}), d |= 256, b = 1023), d = d & -2095105 | (b & 1023) << 11)
            }
        }
        Yb(a, d);
        return a
    };
    ad = function(a, b, c) {
        for (var d = 1023 + b, e = a.length, f = d; f < e; f++) {
            var g = a[f];
            null != g && g !== c && (c[f - b] = g)
        }
        a.length = d + 1;
        a[d] = c
    };
    dd = function(a, b, c, d, e, f) {
        a = Sc(a, d, c, f);
        e && (a = bd(a));
        return a
    };
    ed = function(a) {
        return a
    };
    fd = function(a) {
        return [a, this.get(a)]
    };
    hd = function(a, b) {
        return gd(b)
    };
    gd = function(a) {
        switch (typeof a) {
            case "number":
                return isFinite(a) ? a : String(a);
            case "boolean":
                return a ? 1 : 0;
            case "object":
                if (a && !Array.isArray(a)) {
                    if (Kb(a)) return Eb(a);
                    if (a instanceof mc) return id(a);
                    if (a instanceof jd) return kd(a)
                }
        }
        return a
    };
    ld = function(a, b, c) {
        a = Wb(a);
        var d = a.length,
            e = b & 256 ? a[d - 1] : void 0;
        d += e ? -1 : 0;
        for (b = b & 512 ? 1 : 0; b < d; b++) a[b] = c(a[b]);
        if (e) {
            b = a[b] = {};
            for (var f in e) Object.prototype.hasOwnProperty.call(e, f) && (b[f] = c(e[f]))
        }
        return a
    };
    nd = function(a, b, c, d, e, f) {
        if (null != a) {
            if (Array.isArray(a)) a = e && 0 == a.length && Xb(a) & 1 ? void 0 : f && Xb(a) & 2 ? a : md(a, b, c, void 0 !== d, e, f);
            else if (lc(a)) {
                var g = {},
                    h;
                for (h in a) Object.prototype.hasOwnProperty.call(a, h) && (g[h] = nd(a[h], b, c, d, e, f));
                a = g
            } else a = b(a, d);
            return a
        }
    };
    md = function(a, b, c, d, e, f) {
        var g = d || c ? Xb(a) : 0;
        d = d ? !!(g & 32) : void 0;
        a = Wb(a);
        for (var h = 0; h < a.length; h++) a[h] = nd(a[h], b, c, d, e, f);
        c && c(g, a);
        return a
    };
    pd = function(a) {
        return nd(a, od, void 0, void 0, !1, !1)
    };
    od = function(a) {
        return a.Mf === Qc ? a.toJSON() : a instanceof jd ? kd(a, pd) : gd(a)
    };
    qd = function(a, b, c) {
        c = void 0 === c ? hc : c;
        if (null != a) {
            if (Hb && a instanceof Uint8Array) return b ? a : new Uint8Array(a);
            if (Array.isArray(a)) {
                var d = Xb(a);
                return d & 2 ? a : !b || d & 68 || !(d & 32 || 0 === d) ? md(a, qd, d & 4 ? hc : c, !0, !1, !0) : (Yb(a, d | 34), a)
            }
            a.Mf === Qc ? (b = a.H, c = (0, _.rd)(b), a = c & 2 ? a : _.Xc(a.constructor, _.sd(b, c, !0))) : a instanceof jd && (b = cc(td(a, qd)), a = new jd(b, a.o, a.j, a.C));
            return a
        }
    };
    _.sd = function(a, b, c) {
        var d = c || b & 2 ? hc : gc,
            e = !!(b & 32);
        a = ld(a, b, function(f) {
            return qd(f, e, d)
        });
        ac(a, 32 | (c ? 2 : 0));
        return a
    };
    bd = function(a) {
        var b = a.H,
            c = (0, _.rd)(b);
        return c & 2 ? _.Xc(a.constructor, _.sd(b, c, !1)) : a
    };
    ud = function(a, b, c, d, e) {
        var f = ic(b);
        if (c >= f || e) {
            e = b;
            if (b & 256) f = a[a.length - 1];
            else {
                if (null == d) return;
                f = a[f + (+!!(b & 512) - 1)] = {};
                e |= 256
            }
            f[c] = d;
            e !== b && Yb(a, e)
        } else a[c + (+!!(b & 512) - 1)] = d, b & 256 && (a = a[a.length - 1], c in a && delete a[c])
    };
    Ad = function(a, b, c, d, e) {
        var f = b & 2,
            g = xd(a, b, c, e);
        Array.isArray(g) || (g = yd);
        var h = Xb(g);
        h & 1 || bc(g);
        if (f) h & 2 || cc(g), d & 1 || Object.freeze(g);
        else {
            f = !(d & 2);
            var k = h & 2;
            d & 1 || !k ? f && h & 32 && !k && zd(g, 32) : (g = bc(Wb(g)), ud(a, b, c, g, e))
        }
        return g
    };
    Bd = function(a, b, c, d, e) {
        a = a.H;
        var f = (0, _.rd)(a),
            g = f & 2,
            h = Ad(a, f, b, null != e ? e : 1, d),
            k = Xb(h);
        if (!(k & 4)) {
            Object.isFrozen(h) && (k = 0, h = Wb(h), ud(a, f, b, h, d));
            for (var l = 0, m = 0; l < h.length; l++) {
                var n = c(h[l]);
                null != n && (h[m++] = n)
            }
            m < l && (h.length = m);
            k |= 5;
            g && (k |= 34);
            Yb(h, k);
            k & 2 && Object.freeze(h)
        }
        if (2 === e) return h;
        !g && (k & 2 || Object.isFrozen(h)) && (h = Wb(h), ac(h, 5), ud(a, f, b, h, d));
        return h
    };
    Cd = function(a) {
        return oc(a, !0, !0)
    };
    Dd = function(a) {
        return oc(a, !0, !1)
    };
    Gd = function() {
        var a;
        return null != (a = Ed) ? a : Ed = new jd(cc([]), void 0, void 0, void 0, Fd)
    };
    Hd = function(a, b, c, d, e, f) {
        var g = b & 2;
        a: {
            var h = c,
                k = b & 2;c = !1;
            if (null == h) {
                if (k) {
                    a = Gd();
                    break a
                }
                h = []
            } else if (h.constructor === jd) {
                if (0 == (h.A & 2) || k) {
                    a = h;
                    break a
                }
                h = td(h)
            } else Array.isArray(h) ? c = !!(Xb(h) & 2) : h = [];
            if (k) {
                if (!h.length) {
                    a = Gd();
                    break a
                }
                c || (c = !0, cc(h))
            } else if (c) {
                c = !1;
                k = Wb(h);
                for (h = 0; h < k.length; h++) {
                    var l = k[h] = Wb(k[h]);
                    Array.isArray(l[1]) && (l[1] = cc(l[1]))
                }
                h = k
            }
            c || (Xb(h) & 64 ? zd(h, 32) : 32 & b && fc(h));f = new jd(h, e, Vc, f);ud(a, b, d, f, !1);a = f
        }
        if (null == a) return a;
        !g && e && (a.K = !0);
        return a
    };
    Id = function(a, b) {
        a = a.H;
        var c = (0, _.rd)(a);
        return Hd(a, c, xd(a, c, b), b, void 0, Vc)
    };
    Jd = function(a, b, c) {
        a = a.H;
        var d = (0, _.rd)(a);
        return Hd(a, d, xd(a, d, b), b, c)
    };
    _.Kd = function(a, b, c, d) {
        var e = a.H,
            f = (0, _.rd)(e);
        pc(f);
        if (null == c) return ud(e, f, b), a;
        if (!(Xb(c) & 4)) {
            Object.isFrozen(c) && (c = Wb(c));
            for (var g = 0; g < c.length; g++) c[g] = d(c[g]);
            Yb(c, 5)
        }
        ud(e, f, b, c);
        return a
    };
    _.Ld = function(a, b, c, d) {
        var e = a.H,
            f = (0, _.rd)(e);
        pc(f);
        ud(e, f, b, ("0" === d ? 0 === Number(c) : c === d) ? void 0 : c);
        return a
    };
    Md = function(a, b, c) {
        for (var d = 0, e = 0; e < c.length; e++) {
            var f = c[e];
            null != xd(a, b, f) && (0 !== d && ud(a, b, d), d = f)
        }
        return d
    };
    Nd = function(a, b, c, d, e) {
        var f = !!(b & 2),
            g = Ad(a, b, d, 1);
        if (g === yd || !(Xb(g) & 4)) {
            var h = g;
            g = !!(b & 2);
            var k = !!(Xb(h) & 2);
            f = h;
            !g && k && (h = Wb(h));
            var l = b | (k ? 2 : 0);
            k = k || void 0;
            for (var m = 0, n = 0; m < h.length; m++) {
                var p = Sc(h[m], c, !1, l);
                void 0 !== p && (k = k || (0, _.rd)(p.H) & 2, h[n++] = p)
            }
            n < m && (h.length = n);
            c = h;
            h = Xb(c);
            l = h | 5;
            k = k ? l & -9 : l | 8;
            h != k && (c = $b(c, k));
            h = c;
            f !== h && ud(a, b, d, h);
            (g && 2 !== e || 1 === e) && Object.freeze(h);
            return h
        }
        if (3 === e) return g;
        f ? 2 === e && (e = Xb(g), g = Wb(g), Yb(g, e), ud(a, b, d, g)) : (f = Object.isFrozen(g), 1 === e ? f || Object.freeze(g) : (e = Xb(g), c = e & -35, f && (g = Wb(g), e = 0, ud(a, b, d, g)), e !== c && Yb(g, c)));
        return g
    };
    Od = function(a, b) {
        return null != a ? a : b
    };
    Pd = function(a, b, c) {
        var d = a.constructor.ia,
            e = ic((0, _.rd)(c ? a.H : b)),
            f = !1;
        if (d) {
            if (!c) {
                b = Wb(b);
                var g;
                if (b.length && lc(g = b[b.length - 1]))
                    for (f = 0; f < d.length; f++)
                        if (d[f] >= e) {
                            _.z(Object, "assign").call(Object, b[b.length - 1] = {}, g);
                            break
                        }
                f = !0
            }
            e = b;
            c = !c;
            g = (0, _.rd)(a.H);
            a = ic(g);
            g = +!!(g & 512) - 1;
            for (var h, k, l = 0; l < d.length; l++)
                if (k = d[l], k < a) {
                    k += g;
                    var m = e[k];
                    null == m ? e[k] = c ? yd : bc([]) : c && m !== yd && Zb(m)
                } else h || (m = void 0, e.length && lc(m = e[e.length - 1]) ? h = m : e.push(h = {})), m = h[k], null == h[k] ? h[k] = c ? yd : bc([]) : c && m !== yd && Zb(m)
        }
        d = b.length;
        if (!d) return b;
        var n;
        if (lc(h = b[d - 1])) {
            a: {
                var p = h;e = {};c = !1;
                for (var t in p) Object.prototype.hasOwnProperty.call(p, t) && (a = p[t], Array.isArray(a) && a != a && (c = !0), null != a ? e[t] = a : c = !0);
                if (c) {
                    for (var u in e) {
                        p = e;
                        break a
                    }
                    p = null
                }
            }
            p != h && (n = !0);d--
        }
        for (; 0 < d; d--) {
            h = b[d - 1];
            if (null != h) break;
            var v = !0
        }
        if (!n && !v) return b;
        var x;
        f ? x = b : x = Array.prototype.slice.call(b, 0, d);
        b = x;
        f && (b.length = d);
        p && b.push(p);
        return b
    };
    Qd = function(a, b) {
        if (null == b) return new a;
        if (!Array.isArray(b)) throw Error("must be an array");
        if (Object.isFrozen(b) || Object.isSealed(b) || !Object.isExtensible(b)) throw Error("arrays passed to jspb constructors must be mutable");
        ac(b, 128);
        return _.Xc(a, fc(b))
    };
    Ud = function(a) {
        var b = a[Rd];
        if (!b) {
            var c = Sd(a);
            b = function(d, e) {
                return Td(d, e, c)
            };
            a[Rd] = b
        }
        return b
    };
    Vd = function(a) {
        return a.j
    };
    Wd = function(a, b) {
        var c, d, e = a.j;
        return function(f, g, h) {
            return e(f, g, h, d || (d = Sd(b).A), c || (c = Ud(b)))
        }
    };
    Sd = function(a) {
        var b = a[Xd];
        if (b) return b;
        a: {
            b = a[Xd] = {};
            var c = Vd,
                d = Wd;b.A = $c(a[0]);
            var e = 1;
            if (a.length > e && !(a[e] instanceof Yd)) {
                var f = a[e++];
                if (Array.isArray(f)) {
                    b.C = f[0];
                    b.j = f[1];
                    break a
                }
                b.j = f
            }
            for (f = 0; e < a.length;) {
                var g = a[e++],
                    h = a[e];
                "number" === typeof h ? (e++, f += h) : f++;
                g.A && (h = b.o, h || (b.o = h = []), h.push(f));
                for (h = e; h < a.length && !(a[h] instanceof Yd);) h++;
                if (h -= e) {
                    var k = a,
                        l = e,
                        m = k[l];
                    "function" == typeof m && (m = m(), k[l] = m);
                    if ((k = Array.isArray(m)) && !(k = ae in m || Xd in m) && (k = 0 < m.length)) {
                        k = m;
                        l = k[0];
                        var n = $c(l);
                        null != n && n !== l && (k[0] = n);
                        k = null != n
                    }(m = k ? m : void 0) ? (e++, b[f] = 1 === h ? d(g, m) : d(g, m, a[e++])) : b[f] = c(g, a[e++])
                } else b[f] = c(g)
            }
        }
        ae in a && Xd in a && (a.length = 0);
        return b
    };
    be = function(a, b) {
        var c = a[b];
        if (c) return c;
        if (c = a.j)
            if (c = c[b]) {
                var d = c.lm,
                    e = c.tm.j;
                if (d) {
                    var f = Ud(d),
                        g = Sd(d).A;
                    c = function(h, k, l) {
                        return e(h, k, l, g, f)
                    }
                } else c = e;
                return a[b] = c
            }
    };
    Td = function(a, b, c) {
        for (var d = (0, _.rd)(a), e = +!!(d & 512) - 1, f = a.length, g = f + (d & 256 ? -1 : 0), h = d & 512 ? 1 : 0; h < g; h++) {
            var k = a[h];
            if (null != k) {
                var l = h - e,
                    m = be(c, l);
                m && m(b, k, l)
            }
        }
        if (d & 256) {
            a = a[f - 1];
            for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (d = +n, _.z(Number, "isNaN").call(Number, d) || (e = a[n], null != e && (f = be(c, d)) && f(b, e, d)))
        }
    };
    ce = function(a) {
        return new Yd(a, !1)
    };
    ie = function(a, b, c) {
        a: if (null != b) {
            if (yc(b)) {
                if ("string" === typeof b) break a;
                if ("number" === typeof b) break a
            }
            b = void 0
        }null != b && ("string" === typeof b && de(b), null != b && (ee(a.j, 8 * c), "number" === typeof b ? (a = a.j, Tb(b), he(a, Ob, Pb)) : (c = de(b), he(a.j, c.A, c.j))))
    };
    ke = function(a, b, c, d, e) {
        b = b instanceof _.C ? b.H : Array.isArray(b) ? _.A(b, d[0], d[1]) : void 0;
        if (null != b) {
            ee(a.j, 8 * c + 2);
            c = a.j.end();
            je(a, c);
            c.push(a.A);
            e(b, a);
            e = c.pop();
            for (e = a.A + a.j.length() - e; 127 < e;) c.push(e & 127 | 128), e >>>= 7, a.A++;
            c.push(e);
            a.A++
        }
    };
    me = function(a) {
        var b = le;
        le = void 0;
        if (!a) throw Error(b && b() || String(a));
    };
    oe = function(a) {
        return function() {
            var b = new ne;
            Td(this.H, b, Sd(a));
            je(b, b.j.end());
            for (var c = new Uint8Array(b.A), d = b.o, e = d.length, f = 0, g = 0; g < e; g++) {
                var h = d[g];
                c.set(h, f);
                f += h.length
            }
            b.o = [c];
            return c
        }
    };
    pe = function(a) {
        return function(b) {
            if (null == b || "" == b) b = new a;
            else {
                b = JSON.parse(b);
                if (!Array.isArray(b)) throw Error(void 0);
                b = _.Xc(a, fc(b))
            }
            return b
        }
    };
    qe = function(a) {
        switch (a) {
            case 1:
                return "gda";
            case 2:
                return "gpt";
            case 3:
                return "ima";
            case 4:
                return "pal";
            case 5:
                return "xfad";
            case 6:
                return "dv3n";
            case 7:
                return "spa";
            default:
                return "unk"
        }
    };
    re = function(a) {
        a = void 0 === a ? _.r : a;
        var b = a.context || a.AMP_CONTEXT_DATA;
        if (!b) try {
            b = a.parent.context || a.parent.AMP_CONTEXT_DATA
        } catch (e) {}
        var c, d;
        return (null == (c = b) ? 0 : c.pageViewId) && (null == (d = b) ? 0 : d.canonicalUrl) ? b : null
    };
    _.te = function(a) {
        var b = _.jb.apply(1, arguments);
        if (0 === b.length) return _.se(a[0]);
        for (var c = a[0], d = 0; d < b.length; d++) c += encodeURIComponent(b[d]) + a[d + 1];
        return _.se(c)
    };
    ue = function(a, b) {
        var c = _.Za(a).toString();
        if (/#/.test(c)) throw Error("");
        var d = /\?/.test(c) ? "&" : "?";
        b.forEach(function(e, f) {
            e = e instanceof Array ? e : [e];
            for (var g = 0; g < e.length; g++) {
                var h = e[g];
                null !== h && void 0 !== h && (c += d + encodeURIComponent(f) + "=" + encodeURIComponent(String(h)), d = "&")
            }
        });
        return _.se(c)
    };
    xe = function(a) {
        return new _.ve(JSON.stringify(a).replace(/</g, "\\u003C"), we)
    };
    ze = function(a) {
        return ye(2 > (a.length + 3) % 4 ? a + "A" : a).map(function(b) {
            return (_.E = b.toString(2), _.z(_.E, "padStart")).call(_.E, 8, "0")
        }).join("")
    };
    Ae = function(a) {
        if (!/^[0-1]+$/.test(a)) throw Error("Invalid input [" + a + "] not a bit string.");
        return parseInt(a, 2)
    };
    Be = function(a) {
        if (!/^[0-1]+$/.test(a)) throw Error("Invalid input [" + a + "] not a bit string.");
        for (var b = [1, 2, 3, 5], c = 0, d = 0; d < a.length - 1; d++) b.length <= d && b.push(b[d - 1] + b[d - 2]), c += parseInt(a[d], 2) * b[d];
        return c
    };
    Ce = function(a, b) {
        var c = a.indexOf("11");
        if (-1 === c) throw Error("Expected section bitstring but not found in [" + a + "] part of [" + b + "]");
        return a.slice(0, c + 2)
    };
    De = function(a, b) {
        return JSON.stringify([a.map(function(c) {
            var d = {};
            return [(d[c.pg] = c.Lf, d)]
        }), b ? b.toJSON() : null])
    };
    Fe = function(a) {
        a.kg.apply(a, _.Ee(_.jb.apply(1, arguments).map(function(b) {
            return {
                pg: 2,
                Lf: b.toJSON()
            }
        })))
    };
    Ge = function(a) {
        a.kg.apply(a, _.Ee(_.jb.apply(1, arguments).map(function(b) {
            return {
                pg: 5,
                Lf: b.toJSON()
            }
        })))
    };
    He = function(a) {
        a && "function" == typeof a.wa && a.wa()
    };
    Ie = function(a) {
        return a[_.z(_.w.Symbol, "iterator")]()
    };
    Ne = function(a) {
        a = Je(a.data.__fciReturn);
        return {
            payload: a,
            Zf: _.Me(a, 1)
        }
    };
    Qe = function(a, b, c, d, e) {
        e = void 0 === e ? !1 : e;
        a.google_image_requests || (a.google_image_requests = []);
        var f = _.Oe("IMG", a.document);
        if (c || d) {
            var g = function(h) {
                c && c(h);
                d && ia(a.google_image_requests, f);
                _.Pe(f, "load", g);
                _.Pe(f, "error", g)
            };
            _.lb(f, "load", g);
            _.lb(f, "error", g)
        }
        e && (f.attributionSrc = "");
        f.src = b;
        a.google_image_requests.push(f)
    };
    Se = function() {
        var a = Re;
        return function(b) {
            for (var c in a)
                if (b === a[c] && !/^[0-9]+$/.test(c)) return !0;
            return !1
        }
    };
    Ue = function() {
        var a = Te;
        return function(b) {
            return b instanceof a
        }
    };
    Ve = function(a) {
        var b = {};
        "string" === typeof a.data ? b = JSON.parse(a.data) : b = a.data;
        return {
            payload: b,
            Zf: b.__uspapiReturn.callId
        }
    };
    We = function(a) {
        var b = {};
        "string" === typeof a.data ? b = JSON.parse(a.data) : b = a.data;
        return {
            payload: b,
            Zf: b.__gppReturn.callId
        }
    };
    af = function(a, b) {
        b = void 0 === b ? window : b;
        if (_.G(a, 5)) try {
            return b.localStorage
        } catch (c) {}
        return null
    };
    bf = function(a) {
        return "null" !== a.origin
    };
    df = function(a, b, c) {
        b = _.G(b, 5) && bf(c) ? c.document.cookie : null;
        return null === b ? null : (new cf({
            cookie: b
        })).get(a) || ""
    };
    _.ef = function(a) {
        a = void 0 === a ? _.r : a;
        return (a = a.performance) && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : Date.now()
    };
    _.ff = function(a) {
        a = void 0 === a ? _.r : a;
        return (a = a.performance) && a.now ? a.now() : null
    };
    gf = function(a, b) {
        b = void 0 === b ? _.r : b;
        var c, d;
        return (null == (c = b.performance) ? void 0 : null == (d = c.timing) ? void 0 : d[a]) || 0
    };
    _.hf = function(a) {
        a = void 0 === a ? _.r : a;
        var b = Math.min(gf("domLoading", a) || Infinity, gf("domInteractive", a) || Infinity);
        return Infinity === b ? Math.max(gf("responseEnd", a), gf("navigationStart", a)) : b
    };
    jf = function(a, b, c) {
        return b[a] || c
    };
    mf = function(a) {
        _.kf(lf).o(a)
    };
    _.nf = function() {
        return _.kf(lf).C()
    }; of = function(a, b) {
        b = void 0 === b ? document : b;
        var c;
        return !(null == (c = b.featurePolicy) || !(_.E = c.allowedFeatures(), _.z(_.E, "includes")).call(_.E, a))
    };
    rf = function(a) {
        a = void 0 === a ? _.pf() : a;
        return function(b) {
            return _.qf(b + " + " + a) % 1E3
        }
    };
    _.H = function(a) {
        return _.kf(sf).A(a.j, a.defaultValue)
    };
    _.tf = function(a) {
        return _.kf(sf).o(a.j, a.defaultValue)
    };
    _.uf = function(a) {
        return _.kf(sf).C(a.j, a.defaultValue)
    };
    vf = function(a) {
        return _.kf(sf).K(a.j, a.defaultValue)
    };
    xf = function(a) {
        _.kf(wf).j(a)
    };
    Bf = function() {
        if (void 0 === b) {
            var a = void 0 === a ? _.r : a;
            var b = a.ggeac || (a.ggeac = {})
        }
        a = b;
        yf(_.kf(lf), a);
        zf(b);
        Af(_.kf(wf), b);
        _.kf(sf).j()
    };
    zf = function(a) {
        var b = _.kf(sf);
        b.A = function(c, d) {
            return jf(5, a, function() {
                return !1
            })(c, d, 2)
        };
        b.o = function(c, d) {
            return jf(6, a, function() {
                return 0
            })(c, d, 2)
        };
        b.C = function(c, d) {
            return jf(7, a, function() {
                return ""
            })(c, d, 2)
        };
        b.K = function(c, d) {
            return jf(8, a, function() {
                return []
            })(c, d, 2)
        };
        b.j = function() {
            jf(15, a, function() {})(2)
        }
    };
    Ff = function(a, b, c, d) {
        var e = new _.Cf,
            f = "",
            g = function(k) {
                try {
                    var l = "object" === typeof k.data ? k.data : JSON.parse(k.data);
                    f === l.paw_id && (_.Pe(a, "message", g), l.error ? e.reject(Error(l.error)) : e.resolve(d(l)))
                } catch (m) {}
            },
            h = Df(a);
        return h ? (_.lb(a, "message", g), f = c(h), e.promise) : (c = Ef(a)) ? (f = String(Math.floor(2147483647 * _.pf())), _.lb(a, "message", g), b(c, f), e.promise) : null
    };
    Gf = function(a) {
        return Ff(a, function(b, c) {
            var d, e;
            return void(null == (d = null != (e = b.getGmaQueryInfo) ? e : b.getGmaSig) ? void 0 : d.postMessage(c))
        }, function(b) {
            return b.getQueryInfo()
        }, function(b) {
            return b.signal
        })
    };
    Hf = function(a) {
        return !!Df(a) || !!Ef(a)
    };
    Df = function(a) {
        var b;
        if ("function" === typeof(null == (b = a.gmaSdk) ? void 0 : b.getQueryInfo)) return a.gmaSdk
    };
    Ef = function(a) {
        var b, c, d, e, f, g;
        if ("function" === typeof(null == (b = a.webkit) ? void 0 : null == (c = b.messageHandlers) ? void 0 : null == (d = c.getGmaQueryInfo) ? void 0 : d.postMessage) || "function" === typeof(null == (e = a.webkit) ? void 0 : null == (f = e.messageHandlers) ? void 0 : null == (g = f.getGmaSig) ? void 0 : g.postMessage)) return a.webkit.messageHandlers
    };
    Lf = function(a) {
        var b, c;
        return null != (c = (_.E = ["pbjs"].concat(null != (b = a._pbjsGlobals) ? b : []).map(function(d) {
            return a[d]
        }), _.z(_.E, "find")).call(_.E, function(d) {
            return Array.isArray(null == d ? void 0 : d.que)
        })) ? c : null
    };
    Of = function(a, b, c) {
        var d, e, f, g, h;
        return _.nb(function(k) {
            if (1 == k.j) return d = c ? a.filter(function(l) {
                return !l.Yb
            }) : a, _.ob(k, _.w.Promise.all(d.map(function(l) {
                return l.Ab.promise
            })), 2);
            if (a.length === d.length) return k.return();
            e = a.filter(function(l) {
                return l.Yb
            });
            if (_.H(Mf)) {
                f = _.y(b);
                for (g = f.next(); !g.done; g = f.next()) h = g.value, Nf(h);
                return _.ob(k, _.w.Promise.all(e.map(function(l) {
                    return l.Ab.promise
                })), 0)
            }
            return _.ob(k, _.w.Promise.race([_.w.Promise.all(e.map(function(l) {
                return l.Ab.promise
            })), new _.w.Promise(function(l) {
                return void setTimeout(l, c)
            })]), 0)
        })
    };
    Pf = function(a, b, c, d) {
        try {
            if (a.setAttribute("data-google-query-id", c), !d) {
                null != b.googletag || (b.googletag = {
                    cmd: []
                });
                var e;
                b.googletag.queryIds = null != (e = b.googletag.queryIds) ? e : [];
                b.googletag.queryIds.push(c);
                500 < b.googletag.queryIds.length && b.googletag.queryIds.shift()
            }
        } catch (f) {}
    };
    _.Qf = function(a) {
        return a.innerHeight >= a.innerWidth
    };
    _.Sf = function(a) {
        var b = _.Rf(a).clientWidth;
        a = a.innerWidth;
        return b && a ? b / a : 0
    };
    Vf = function(a, b) {
        return (a = _.Rf(a).clientWidth) ? a > (void 0 === b ? 420 : b) ? 32768 : 320 > a ? 65536 : 0 : 16384
    };
    Wf = function(a) {
        return (a = _.Sf(a)) ? 1.05 < a ? 262144 : .95 > a ? 524288 : 0 : 131072
    };
    _.Rf = function(a) {
        a = a.document;
        var b = {};
        a && (b = "CSS1Compat" == a.compatMode ? a.documentElement : a.body);
        return b || {}
    };
    _.Xf = function(a) {
        return _.Rf(a).clientHeight
    };
    _.Yf = function(a, b) {
        var c = _.Rf(a);
        return b ? c.scrollHeight === _.Xf(a) ? c.offsetHeight : c.scrollHeight : c.offsetHeight
    };
    _.Zf = function(a) {
        return void 0 === a.pageYOffset ? (a.document.documentElement || a.document.body.parentNode || a.document.body).scrollTop : a.pageYOffset
    };
    _.$f = function(a) {
        var b = a.Oe,
            c = a.ee,
            d = a.ye,
            e = a.Pe,
            f = a.fe;
        a = a.ze;
        for (var g = [], h = 0; h < a; h++)
            for (var k = 0; k < d; k++) {
                var l = d - 1,
                    m = a - 1;
                g.push({
                    x: b + (0 === l ? 0 : k / l) * (c - b),
                    y: e + (0 === m ? 0 : h / m) * (f - e)
                })
            }
        return g
    };
    _.eg = function(a) {
        var b = a.Ca,
            c = a.Of,
            d = a.ue,
            e = a.Dg,
            f = a.Ha;
        a = a.Oi;
        var g = 0;
        try {
            g |= b !== b.top ? 512 : 0;
            var h = Math.min(b.screen.width || 0, b.screen.height || 0);
            g |= h ? 320 > h ? 8192 : 0 : 2048;
            var k;
            if (k = b.navigator) {
                var l = b.navigator.userAgent;
                k = /Android 2/.test(l) || /iPhone OS [34]_/.test(l) || /Windows Phone (?:OS )?[67]/.test(l) || /MSIE.*Windows NT/.test(l) || /Windows NT.*Trident/.test(l)
            }
            g |= k ? 1048576 : 0;
            g = c ? g | (b.innerHeight >= c ? 0 : 1024) : g | (_.Qf(b) ? 0 : 8);
            g |= Vf(b, d);
            g |= Wf(b)
        } catch (m) {
            g |= 32
        }
        switch (e) {
            case 2:
                c = f;
                c = void 0 === c ? null : c;
                d = _.$f({
                    Oe: 0,
                    ee: b.innerWidth,
                    ye: 3,
                    Pe: 0,
                    fe: Math.min(Math.round(b.innerWidth / 320 * 50), ag) + 15,
                    ze: 3
                });
                null != bg(cg(b, c), d) && (g |= 16777216);
                break;
            case 1:
                c = f, c = void 0 === c ? null : c, d = b.innerWidth, e = b.innerHeight, h = Math.min(Math.round(b.innerWidth / 320 * 50), ag) + 15, k = _.$f({
                    Oe: 0,
                    ee: d,
                    ye: 3,
                    Pe: e - h,
                    fe: e,
                    ze: 3
                }), 25 < h && k.push({
                    x: d - 25,
                    y: e - 25
                }), null != bg(cg(b, c), k) && (g |= 16777216)
        }
        a && null != _.dg(b, void 0 === f ? null : f) && (g |= 16777216);
        return g
    };
    _.dg = function(a, b) {
        b = void 0 === b ? null : b;
        var c = a.innerHeight;
        c = _.$f({
            Oe: 0,
            ee: a.innerWidth,
            ye: 10,
            Pe: c - 66,
            fe: c,
            ze: 10
        });
        return bg(cg(a, b), c)
    };
    cg = function(a, b) {
        return new _.fg(a, {
            Wg: gg(a, void 0 === b ? null : b)
        })
    };
    gg = function(a, b) {
        if (b = void 0 === b ? null : b) {
            var c = b;
            return function(d, e, f) {
                var g, h;
                _.hg(c, "ach_evt", {
                    tn: d.tagName,
                    id: null != (g = d.getAttribute("id")) ? g : "",
                    cls: null != (h = d.getAttribute("class")) ? h : "",
                    ign: String(f),
                    pw: a.innerWidth,
                    ph: a.innerHeight,
                    x: e.x,
                    y: e.y
                }, !0, 1)
            }
        }
    };
    jg = function(a, b) {
        b = void 0 === b ? [] : b;
        var c = Date.now();
        return _.ig(b, function(d) {
            return c - d < 1E3 * a
        })
    };
    lg = function(a, b) {
        try {
            var c = a.getItem("__lsv__");
            if (!c) return [];
            try {
                var d = JSON.parse(c)
            } catch (e) {}
            if (!Array.isArray(d) || _.kg(d, function(e) {
                    return !_.z(Number, "isInteger").call(Number, e)
                })) return a.removeItem("__lsv__"), [];
            d = jg(b, d);
            d.length || null == a || a.removeItem("__lsv__");
            return d
        } catch (e) {
            return null
        }
    };
    ng = function(a, b) {
        .001 > _.pf() && mg({
            c: a,
            s: b
        }, "gpt_whirs")
    };
    og = function(a) {
        var b = a.split("/");
        return "/" === a.charAt(0) && 2 <= b.length ? b[1] : "/" !== a.charAt(0) && 1 <= b.length ? b[0] : ""
    };
    ug = function(a) {
        var b = new pg;
        b = _.qg(b, 1, Date.now());
        b = _.qg(b, 2, a.pvsid);
        b = _.rg(b, 3, a.xb || a.vb);
        var c = _.nf();
        b = _.Kd(b, 4, c, Bc);
        b = _.qg(b, 5, a.Rj);
        a = _.rg(b, 12, a.bj);
        var d;
        if (b = null == (d = _.w.globalThis.performance) ? void 0 : d.memory) {
            d = new sg;
            try {
                _.qg(d, 1, b.jsHeapSizeLimit)
            } catch (e) {}
            try {
                _.qg(d, 2, b.totalJSHeapSize)
            } catch (e) {}
            try {
                _.qg(d, 3, b.usedJSHeapSize)
            } catch (e) {}
        } else d = void 0;
        d && _.tg(a, 10, d);
        return a
    };
    yg = function(a) {
        var b = _.hf();
        if (a.Kd) {
            var c = a.Sb;
            a = ug(a);
            var d = new vg;
            b = _.qg(d, 2, b);
            b = _.wg(a, 6, xg, b);
            Ge(c, b)
        }
    };
    J = function(a, b, c) {
        var d = void 0 === d ? !1 : d;
        return function() {
            var e = _.jb.apply(0, arguments),
                f = zg(a, b, c, d).apply(this, e);
            try {
                var g = e.length;
                if (a.Kd && a.xk) {
                    var h = a.Sb,
                        k = ug(a);
                    var l = _.qg(k, 5, a.Qj);
                    var m = new Ag;
                    var n = _.I(m, 1, b);
                    var p = _.Bg(n, 2, g);
                    var t = _.wg(l, 9, xg, p);
                    Ge(h, t)
                }
            } catch (u) {}
            return f
        }
    };
    zg = function(a, b, c, d) {
        d = void 0 === d ? !1 : d;
        return function() {
            var e = _.jb.apply(0, arguments),
                f = void 0,
                g = !1,
                h = null,
                k = _.kf(Cg);
            try {
                var l = _.H(Dg);
                l && k && (h = k.start(b.toString(), 3));
                f = c.apply(this, e);
                g = !0;
                l && k && k.end(h)
            } catch (m) {
                try {
                    if (g) Eg.call(this, a, 110, m);
                    else if (Eg.call(this, a, b, m), !d) throw m;
                } catch (n) {
                    if (_.Fg(h), !g && !d) throw m;
                }
            }
            return f
        }
    };
    Gg = function(a, b, c, d) {
        return zg(a, b, c, void 0 === d ? !1 : d)()
    };
    Eg = function(a, b, c) {
        if (a.Qh) {
            var d;
            c = _.Hg(c) ? c.error : c;
            var e = new Ig,
                f = new Jg;
            try {
                var g = _.Kg(window);
                _.qg(f, 1, g)
            } catch (m) {}
            try {
                var h = _.nf();
                _.Kd(f, 2, h, Bc)
            } catch (m) {}
            try {
                _.rg(f, 3, window.document.URL)
            } catch (m) {}
            g = _.tg(e, 2, f);
            h = new Lg;
            b = _.I(h, 1, b);
            try {
                _.rg(b, 2, "string" === typeof(null == c ? void 0 : c.name) ? c.name : "Unknown error")
            } catch (m) {}
            try {
                _.rg(b, 3, "string" === typeof(null == c ? void 0 : c.message) ? c.message : "Caught " + c)
            } catch (m) {}
            try {
                (d = "string" === typeof(null == c ? void 0 : c.stack) ? c.stack : Error().stack) && _.Kd(b, 4, d.split(/\n\s*/), _.Nc)
            } catch (m) {}
            d = _.tg(g, 1, b);
            b = new Vg;
            try {
                _.rg(b, 1, a.xb || a.vb)
            } catch (m) {}
            try {
                var k = Wg();
                _.Bg(b, 2, k)
            } catch (m) {}
            try {
                var l = [].concat(_.Ee(_.z(Xg, "keys").call(Xg)));
                _.Kd(b, 3, l, _.Nc)
            } catch (m) {}
            _.wg(d, 4, Yg, b);
            _.qg(d, 5, a.Tg);
            Fe(a.Sb, d)
        }
    };
    ch = function(a, b) {
        var c, d;
        return null != (d = null == (c = _.z(a, "find").call(a, function(e) {
            e = _.Zg(e, $g, 1);
            return ah(e, 1) <= ah(b, 1) && ah(e, 2) <= ah(b, 2)
        })) ? void 0 : bh(c, $g, 2)) ? d : null
    };
    gh = function(a, b, c) {
        return "number" === typeof b && "number" === typeof c && bh(a, dh, 6).length ? ch(bh(a, dh, 6), eh(fh(new $g, b), c)) : bh(a, $g, 5)
    };
    ih = function(a) {
        var b = void 0 === b ? window : b;
        var c = null;
        b.top === b && (b = hh(!1, b), c = gh(a, b.width, b.height));
        null != c || (c = gh(a));
        return null == c ? [] : c.map(function(d) {
            return _.G(d, 3) ? "fluid" : [ah(d, 1), ah(d, 2)]
        })
    };
    jh = function(a) {
        var b = [],
            c = !1;
        a = _.y(ih(a));
        for (var d = a.next(); !d.done; d = a.next()) d = d.value, Array.isArray(d) ? b.push(d.join("x")) : "fluid" === d ? c = !0 : b.push(d);
        c && b.unshift("320x50");
        return b.join("|")
    };
    _.mh = function(a) {
        _.kf(kh).j = !0;
        return lh[a]
    };
    oh = function(a) {
        var b = a.document;
        return nh(a) ? b.URL : b.referrer
    };
    rh = function(a) {
        try {
            return ph(a, window.top)
        } catch (b) {
            return new _.qh(-12245933, -12245933)
        }
    };
    vh = function(a) {
        if (!a) return null;
        var b, c;
        a.getBoundingClientRect ? (a = _.sh(th, a), a = new _.uh(a.right - a.left, a.bottom - a.top)) : a = null;
        return null != (c = null == (b = a) ? void 0 : b.floor()) ? c : null
    };
    yh = function(a, b) {
        for (var c = {}, d = _.y(_.z(Object, "keys").call(Object, b)), e = d.next(); !e.done; e = d.next()) {
            e = e.value;
            var f = b[e].clone(),
                g = _.kf(wh),
                h = g.j.get(e);
            null == h ? h = ++_.kf(Cg).o : g.j.delete(e);
            _.xh(f, 20, _.Ec(h));
            c[e] = f
        }
        return {
            fa: a.clone(),
            aa: c
        }
    };
    Ah = function() {
        for (var a = "", b = _.y(zh()), c = b.next(); !c.done; c = b.next()) c = c.value, 15 >= c && (a += "0"), a += c.toString(16);
        return a
    };
    zh = function() {
        var a;
        if ("function" === typeof(null == (a = window.crypto) ? void 0 : a.getRandomValues)) return a = new Uint8Array(16), window.crypto.getRandomValues(a), a;
        a = window;
        var b;
        if ("function" === typeof(null == (b = a.msCrypto) ? void 0 : b.getRandomValues)) return b = new Uint8Array(16), a.msCrypto.getRandomValues(b), b;
        a = Array(16);
        for (b = 0; b < a.length; b++) a[b] = Math.floor(255 * Math.random());
        return a
    };
    Hh = function(a, b, c, d) {
        var e = Bh(b, a) || Ch(b, a);
        if (!e) return null;
        var f = rh(e),
            g = e === Ch(b, a),
            h = Dh(function() {
                var p = g ? Ch(b, a) : e;
                return p && Eh(p, window)
            }),
            k = function(p) {
                var t;
                return null == (t = h()) ? void 0 : t.getPropertyValue(p)
            };
        c = ih(c)[0];
        var l = !1;
        Array.isArray(c) && (l = d ? g : 0 === f.x && "center" === k("text-align"));
        l && (f.x += Math.round(Math.max(0, (g ? e.clientWidth : e.parentElement.clientWidth) - Number(c[0])) / 2));
        if (g) {
            var m;
            f.y += Math.round(Math.min(null != (m = Fh(k("padding-top"))) ? m : 0, e.clientHeight));
            if (!l) {
                d = e.clientWidth;
                var n;
                f.x += Math.round(Math.min(null != (n = Fh(k("padding-left"))) ? n : 0, d))
            }
        }
        return f && Gh(e) ? f : new _.qh(-12245933, -12245933)
    };
    Ih = function(a, b, c, d) {
        var e = Ch(a, c),
            f = "none" === (null == e ? void 0 : e.style.display);
        f && (e.style.display = "block");
        a = Hh(c, a, b, d);
        f && (e.style.display = "none");
        return a
    };
    Jh = function(a) {
        return "google_ads_iframe_" + a.toString()
    };
    Kh = function(a) {
        return Jh(a) + "__container__"
    };
    Bh = function(a, b) {
        var c;
        return (null == (c = Ch(a, b)) ? void 0 : c.querySelector('[id="' + Kh(a) + '"]')) || null
    };
    Lh = function(a, b) {
        var c, d;
        return null != (d = null == (c = Bh(a, b)) ? void 0 : c.querySelector('iframe[id="' + Jh(a) + '"]')) ? d : null
    };
    Ch = function(a, b) {
        b = void 0 === b ? document : b;
        return Mh().o.get(a) || b.getElementById(a.getDomId())
    };
    Nh = function(a) {
        return Math.round(Number(Fh(a)))
    };
    Oh = function(a) {
        var b = a.parentElement;
        return !b || 1 >= b.children.length ? !1 : _.z(Array, "from").call(Array, b.children).some(function(c) {
            return c !== a && !(_.E = ["script", "style"], _.z(_.E, "includes")).call(_.E, c.tagName.toLowerCase())
        })
    };
    Qh = function(a, b, c) {
        for (var d = 100; a && a !== b && --d;) _.Ph(a, c), a = a.parentElement
    };
    Rh = function(a, b, c, d, e) {
        _.Ph(a, {
            "margin-left": "0px",
            "margin-right": "0px"
        });
        var f = {},
            g = "rtl" === d.direction,
            h = ((e && -12245933 !== e.width ? e.width : b.innerWidth) - c) / 2;
        d = function() {
            var k = a.getBoundingClientRect().left;
            return g ? h - k : k - h
        };
        b = d();
        return 0 !== b ? (c = function(k) {
            g ? f["margin-right"] = k + "px" : f["margin-left"] = k + "px"
        }, c(-b), _.Ph(a, f), d = d(), 0 !== d && b !== d && (c(b / (d - b) * b), _.Ph(a, f)), !0) : !1
    };
    Th = function(a, b, c, d, e, f, g, h, k, l) {
        window.setTimeout(function() {
            var m = jh(d);
            if (window.IntersectionObserver) {
                var n, p = null != (n = Lh(c, b)) ? n : Ch(c, b);
                m = Sh(a, b, c, e, f, g, m, h, k, l, p);
                (new window.IntersectionObserver(m, {
                    threshold: .98
                })).observe(p)
            }
        }, 500)
    };
    Sh = function(a, b, c, d, e, f, g, h, k, l, m) {
        var n = window.location && "#flexibleAdSlotTest" === window.location.hash ? 1 : _.tf(Uh);
        return zg(a, 459, function(p, t) {
            (p = null == p ? void 0 : p[0]) && Vh(a, b, c, d, e, f, g, h, k, l, t, m, p, n)
        })
    };
    Vh = function(a, b, c, d, e, f, g, h, k, l, m, n, p, t) {
        var u = p.boundingClientRect,
            v = p.intersectionRatio,
            x = window.innerWidth,
            F = u.left,
            D = u.right,
            M = 0 > F + 2,
            B = 0 < D - (x + 2);
        (.98 <= v || M || B) && Wh(k, function(K) {
            m.unobserve(n);
            var V = M || B;
            var O = new Yh;
            Zh(n, V) && O.set(10);
            if (void 0 !== h && Oh(n)) {
                var aa, ma = null == (aa = Ch(c, b)) ? void 0 : aa.parentElement,
                    ta;
                aa = ma ? null == (ta = Eh(ma, window)) ? void 0 : ta.width : void 0;
                h !== aa && O.set(16)
            }
            V ? (O.set(8), V = $h(O)) : V = ai(b, c, v, O);
            ta = bi(c, n, f);
            O = ta.Ij;
            ta = ta.Lj;
            ci(K, a);
            L(K, "qid", l);
            L(K, "iu", c.getAdUnitPath());
            L(K, "e", String(V));
            M && L(K, "ofl", String(F));
            B && L(K, "ofr", String(D - x));
            L(K, "ret", e + "x" + f);
            L(K, "req", g);
            L(K, "bm", String(d));
            L(K, "efh", Number(O));
            L(K, "stk", Number(ta));
            L(K, "ifi", di(window))
        }, t)
    };
    ai = function(a, b, c, d) {
        var e = Lh(b, a) || Ch(b, a);
        try {
            var f = e.getBoundingClientRect(),
                g = f.left,
                h = f.top,
                k = f.width,
                l = f.height,
                m = Ch(b, a),
                n = Eh(m, window);
            if ("hidden" === n.visibility || "none" === n.display) return $h(d);
            var p = Nh(n.getPropertyValue("border-top-width") || 0) + 1;
            b = g + k;
            f = h + l;
            c = (1 - c) * l;
            var t = a.elementsFromPoint(g + p + 2, h + c + p);
            var u = a.elementsFromPoint(b - p - 2, h + c + p);
            var v = a.elementsFromPoint(b - p - 2, f - c - p);
            var x = a.elementsFromPoint(g + p + 2, f - c - p);
            var F = a.elementsFromPoint(b / 2, f - c - p)
        } catch (M) {
            return d.set(1), $h(d)
        }
        if (!(t && t.length && u && u.length && v && v.length && x && x.length && F && F.length)) return d.set(7), $h(d);
        a = function(M, B) {
            for (var K = !1, V = 0; V < M.length; V++) {
                var O = M[V];
                if (K) {
                    var aa = Eh(O, window);
                    if ("hidden" !== aa.visibility && !ei(O) && !D(e, O)) {
                        d.set(B);
                        "absolute" === aa.position && d.set(11);
                        break
                    }
                } else e === O && (K = !0)
            }
        };
        fi(e) && d.set(9);
        var D = function(M, B) {
            return gi(M, B) || gi(B, M)
        };
        g = t[0];
        e === g || D(e, g) || ei(g) || d.set(2);
        g = u[0];
        e === g || D(e, g) || ei(g) || d.set(3);
        g = v[0];
        e === g || D(e, g) || ei(g) || d.set(4);
        g = x[0];
        e === g || D(e, g) || ei(g) || d.set(5);
        if (ei(e)) return $h(d);
        a(t, 12);
        a(u, 13);
        a(v, 14);
        a(x, 15);
        a(F, 6);
        return $h(d)
    };
    Zh = function(a, b) {
        var c = !1,
            d = !1;
        return hi(a, function(e, f) {
            d = d || "scroll" === e.overflowX || "auto" === e.overflowX;
            c = c || "flex" === e.display;
            return b && c && d || "listbox" === f.role
        })
    };
    bi = function(a, b, c) {
        var d = (a = Ch(a)) && Eh(a, window),
            e = d ? "absolute" !== d.position : !0,
            f = !1,
            g = a && a.parentElement,
            h = !1;
        ii(b, function(k) {
            var l = k.style;
            if (e)
                if (h || (h = k === g)) e = ji(k, _.r, -1, -1);
                else {
                    l = l && l.height;
                    var m = (l && _.z(l, "endsWith").call(l, "px") ? Nh(l) : 0) >= c;
                    !l || m || "string" === typeof l && _.z(ki, "includes").call(ki, l) || (e = !1)
                }
            f || (k = Eh(k, _.r), "sticky" !== k.position && "fixed" !== k.position) || (f = !0);
            return !(f && !e)
        }, 100);
        return {
            Ij: e,
            Lj: f
        }
    };
    ji = function(a, b, c, d) {
        var e = a.style;
        return (null == e ? 0 : e.height) && !_.z(ki, "includes").call(ki, e.height) || (null == e ? 0 : e.maxHeight) && !_.z(li, "includes").call(li, e.maxHeight) || mi(a, b.document, function(f) {
            var g = f.style.height;
            f = f.style.getPropertyValue("max-height");
            return !!g && !_.z(ki, "includes").call(ki, g) || !!f && !_.z(li, "includes").call(li, f)
        }, c, d) ? !1 : !0
    };
    mi = function(a, b, c, d, e) {
        b = b.styleSheets;
        if (!b) return !1;
        var f = a.matches || a.msMatchesSelector;
        d = -1 === d ? Infinity : d;
        e = -1 === e ? Infinity : e;
        for (var g = 0; g < Math.min(b.length, d); ++g) {
            var h = null;
            try {
                var k = b[g],
                    l = null;
                try {
                    l = k.cssRules || k.rules
                } catch (M) {
                    if (15 == M.code) throw M.styleSheet = k, M;
                }
                h = l
            } catch (M) {
                continue
            }
            l = void 0;
            if (null != (l = h) && l.length)
                for (l = 0; l < Math.min(h.length, e); ++l) try {
                    var m = h[l],
                        n, p = c;
                    if (!(n = f.call(a, m.selectorText) && p(m))) a: {
                        var t = void 0;p = a;
                        var u = c,
                            v = e,
                            x = null != (t = m.cssRules) ? t : [];
                        for (t = 0; t < Math.min(x.length, v); t++) {
                            var F = x[t],
                                D = u;
                            if (f.call(p, F.selectorText) && D(F)) {
                                n = !0;
                                break a
                            }
                        }
                        n = !1
                    }
                    if (n) return !0
                } catch (M) {}
        }
        return !1
    };
    ei = function(a) {
        return hi(a, function(b) {
            return "fixed" === b.position || "sticky" === b.position
        })
    };
    fi = function(a) {
        return hi(a, function(b) {
            var c;
            return (_.E = ["left", "right"], _.z(_.E, "includes")).call(_.E, null != (c = b["float"]) ? c : b.cssFloat)
        })
    };
    ri = function(a) {
        var b = void 0 === b ? ni : b;
        var c = _.z(Object, "assign").call(Object, {}, a),
            d = a.id,
            e = a.style;
        a = a.data;
        c = (delete c.id, delete c.style, delete c.data, c);
        if (_.z(Object, "keys").call(Object, c).length) throw Error("Invalid attribute(s): " + _.z(Object, "keys").call(Object, c));
        d = {
            id: d,
            style: e ? e : void 0
        };
        if (a)
            for (e = _.y(_.z(a, "entries").call(a)), a = e.next(); !a.done; a = e.next()) c = _.y(a.value), a = c.next().value, c = c.next().value, me(oi.test(a)), d[a] = c;
        _.pi("div");
        return _.qi("div", d, b)
    };
    Mi = function(a) {
        return "number" === typeof a || "string" === typeof a
    };
    Oi = function(a, b, c, d) {
        c = void 0 === c ? null : c;
        d = void 0 === d ? {} : d;
        var e = Ni.j();
        0 === e.j && (e.j = .001 > Math.random() ? 2 : 1);
        2 === e.j && (e = {}, mg(_.z(Object, "assign").call(Object, {}, (e.c = String(a), e.pc = String(_.Kg(window)), e.em = c, e.lid = b, e.eids = _.nf().join(), e), d), "esp"))
    };
    Ri = function(a, b) {
        return bh(a, Pi, 2).some(function(c) {
            return _.Qi(c, 1) === b && null != _.Qi(c, 2)
        })
    };
    Si = function() {
        var a = window;
        var b = void 0 === b ? function() {} : b;
        return new _.w.Promise(function(c) {
            var d = function() {
                c(b());
                _.Pe(a, "load", d)
            };
            _.lb(a, "load", d)
        })
    };
    Ti = function(a) {
        var b = [],
            c = RegExp("^_GESPSK-(.+)$");
        try {
            for (var d = 0; d < a.length; d++) {
                var e = (c.exec(a.key(d)) || [])[1];
                e && b.push(e)
            }
        } catch (f) {}
        return b
    };
    Yi = function(a, b, c, d) {
        if (b)
            for (var e = _.y(Ti(b)), f = e.next(), g = {}; !f.done; g = {
                    Ac: g.Ac
                }, f = e.next())
                if (g.Ac = f.value, f = Ui().get(g.Ac, b).oc) {
                    var h = Vi(f);
                    if (2 !== h && 3 !== h) {
                        h = !1;
                        if (c) {
                            var k = /^(\d+)$/.exec(g.Ac);
                            if (k && !(h = _.z(c.split(","), "includes").call(c.split(","), k[1]))) continue;
                            if (!h && !c.split(",").some(function(l) {
                                    return function(m) {
                                        var n;
                                        return null == d ? void 0 : null == (n = d.get(m)) ? void 0 : n.has(l.Ac)
                                    }
                                }(g))) continue
                        }
                        _.Wi(f, 9, h);
                        h = _.Qi(f, 2);
                        Xi(a, 2, Pi, f);
                        f = {};
                        Oi(19, g.Ac, null, (f.hs = h ? "1" : "0", f))
                    }
                }
    };
    Zi = function(a) {
        return "string" === typeof a ? a : a instanceof Error ? a.message : null
    };
    jj = function(a, b, c, d, e) {
        var f, g, h, k, l, m, n, p, t, u, v, x, F;
        return _.nb(function(D) {
            return 1 == D.j ? (f = new $i, g = new aj(a, c, e), N(f, g), N(f, new bj(g.B, void 0, d, e)), h = new cj(g.m, e), N(f, h), k = new dj(h.m, e), N(f, k), l = new ej(b, k.m, e), N(f, l), N(f, new bj(l.B, void 0, d, e)), m = new fj(l.m, l.I, 300, 1E3, e), N(f, m), N(f, new bj(m.m, void 0, d, e)), n = new gj(e), N(f, n), p = new hj(n.output, k.B, e), N(f, p), t = new ej(b, p.m, e), N(f, t), u = new bj(t.m, void 0, d, e), N(f, u), ij(f), F = a, _.ob(D, m.m.promise, 2)) : D.return({
                id: F,
                collectorGeneratedData: null != (x = null == (v = D.A) ? void 0 : _.Qi(v, 2)) ? x : null
            })
        })
    };
    pj = function(a, b, c, d) {
        var e = {};
        e = void 0 === e ? kj : e;
        lj() !== mj(window) ? Oi(16, "") : nj(a, "encryptedSignalProviders", c) && nj(a, "secureSignalProviders", c) || (Oi(38, ""), oj(a, "encryptedSignalProviders", b, e, c, d), oj(a, "secureSignalProviders", b, e, c, function() {}))
    };
    nj = function(a, b, c) {
        if (void 0 === a[b] || a[b] instanceof Array) return !1;
        a[b].addErrorHandler(c);
        return !0
    };
    oj = function(a, b, c, d, e, f) {
        var g, h = new qj(null != (g = a[b]) ? g : [], c, "secureSignalProviders" === b, f, d);
        a[b] = new rj(h);
        h.addErrorHandler(e)
    };
    uj = function(a, b) {
        var c = new $i,
            d = new gj(b);
        a = new sj(d.output, a, b);
        tj(c, [d, a]);
        ij(c)
    };
    yj = function(a, b, c, d, e) {
        var f = b.toString();
        if (vj.has(f)) return null;
        vj.add(f);
        f = new $i;
        a = new aj(a, c, e);
        var g = new bj(a.B, c, d, e),
            h = new wj(a.m, e),
            k = new cj(h.m, e);
        b = new xj(k.m, b, e);
        c = new bj(b.m, c, d, e);
        tj(f, [a, g, h, k, b, c]);
        ij(f);
        return f
    };
    Aj = function(a, b, c) {
        c = void 0 === c ? zj : c;
        a.goog_sdr_l || (Object.defineProperty(a, "goog_sdr_l", {
            value: !0
        }), "complete" === a.document.readyState ? c(a, b) : _.lb(a, "load", function() {
            return void c(a, b)
        }))
    };
    Bj = function(a) {
        try {
            var b, c;
            return (null != (c = null == (b = a.top) ? void 0 : b.frames) ? c : {}).google_ads_top_frame
        } catch (d) {}
        return null
    };
    Cj = function(a) {
        var b = RegExp("^https?://[^/#?]+/?$");
        return !!a && !b.test(a)
    };
    Ej = function(a) {
        if (a === a.top || _.Dj(a.top)) return _.w.Promise.resolve({
            status: 4
        });
        var b = Bj(a);
        if (!b) return _.w.Promise.resolve({
            status: 2
        });
        if (a.parent === a.top && Cj(a.document.referrer)) return _.w.Promise.resolve({
            status: 3
        });
        var c = new _.Cf;
        a = new MessageChannel;
        a.port1.onmessage = function(d) {
            "__goog_top_url_resp" === d.data.msgType && c.resolve({
                de: d.data.topUrl,
                status: d.data.topUrl ? 0 : 1
            })
        };
        b.postMessage({
            msgType: "__goog_top_url_req"
        }, "*", [a.port2]);
        return c.promise
    };
    Ij = function(a, b) {
        var c = Fj(a);
        return c.messageChannelSendRequestFn ? _.w.Promise.resolve(c.messageChannelSendRequestFn) : new _.w.Promise(function(d) {
            function e(k) {
                return h.j(k).then(function(l) {
                    return l.data
                })
            }
            var f = _.Oe("IFRAME");
            f.style.display = "none";
            f.name = "goog_topics_frame";
            b && (f.credentialless = !0);
            f.src = _.Za(Gj).toString();
            var g = (new URL(Gj.toString())).origin,
                h = Hj({
                    destination: a,
                    lb: f,
                    origin: g,
                    tb: "goog:gRpYw:doubleclick"
                });
            h.j("goog:topics:frame:handshake:ack").then(function(k) {
                "goog:topics:frame:handshake:ack" === k.data && d(e)
            });
            c.messageChannelSendRequestFn = e;
            a.document.documentElement.appendChild(f)
        })
    };
    Rj = function(a, b, c, d) {
        var e = {
            skipTopicsObservation: _.H(Jj),
            includeBuyerTopics: _.H(Kj)
        };
        e = void 0 === e ? {} : e;
        var f = Lj(d),
            g = f.Wd,
            h = f.Vd;
        b = Fj(b);
        b.getTopicsPromise || (a = a({
            message: "goog:topics:frame:get:topics",
            skipTopicsObservation: e.skipTopicsObservation,
            includeBuyerTopics: e.includeBuyerTopics,
            sendPingToRCS: !1
        }).then(function(k) {
            var l = h;
            if (k instanceof Uint8Array) l || (l = !(g instanceof Uint8Array && wa(k, g)));
            else if (Se()(k)) l || (l = k !== g);
            else return c.rb(989, Error(JSON.stringify(k))), 7;
            if (l && d) try {
                var m = new Mj;
                var n = _.Nj(m, 2, _.ef());
                k instanceof Uint8Array ? Oj(n, 1, Pj, oc(k, !1, !1)) : Oj(n, 3, Pj, null == k ? k : zc(k));
                d.setItem("goog:cached:topics", Qj(n))
            } catch (p) {}
            return k
        }), b.getTopicsPromise = a);
        return g && !h ? _.w.Promise.resolve(g) : b.getTopicsPromise
    };
    Lj = function(a) {
        if (!a) return {
            Wd: null,
            Vd: !0
        };
        try {
            var b = a.getItem("goog:cached:topics");
            if (!b) return {
                Wd: null,
                Vd: !0
            };
            var c = Sj(b),
                d = Tj(c, Pj);
            switch (d) {
                case 0:
                    var e = null;
                    break;
                case 1:
                    e = Uj(Vj(c, Wj(c, Pj, 1)));
                    break;
                case 3:
                    e = _.Xj(c, Wj(c, Pj, 3), 0);
                    break;
                default:
                    _.Va(d)
            }
            var f = _.Me(c, 2) + 6048E5 < _.ef();
            return {
                Wd: e,
                Vd: f
            }
        } catch (g) {
            return {
                Wd: null,
                Vd: !0
            }
        }
    };
    Fj = function(a) {
        var b;
        return null != (b = a.google_tag_topics_state) ? b : a.google_tag_topics_state = {}
    };
    ak = function(a) {
        if (Oa()) {
            var b = a.document.documentElement.lang;
            Yj(a) ? Zj(_.Kg(a), !0, "", b) : (new MutationObserver(function(c, d) {
                Yj(a) && (Zj(_.Kg(a), !1, b, a.document.documentElement.lang), d.disconnect())
            })).observe(a.document.documentElement, {
                attributeFilter: ["class"]
            })
        }
    };
    Yj = function(a) {
        var b, c;
        a = null == (b = a.document) ? void 0 : null == (c = b.documentElement) ? void 0 : c.classList;
        return !!((null == a ? 0 : a.contains("translated-rtl")) || (null == a ? 0 : a.contains("translated-ltr")))
    };
    Zj = function(a, b, c, d) {
        mg({
            ptt: "17",
            pvsid: "" + a,
            ibatl: String(b),
            pl: c,
            nl: d
        }, "translate-event")
    };
    ck = function(a) {
        var b = "";
        bk(function(c) {
            if (c === c.top) return !0;
            var d;
            if (null == (d = c.document) ? 0 : d.referrer) b = c.document.referrer;
            return !1
        }, !1, !1, a);
        return b
    };
    ek = function(a) {
        var b = dk(a, 500, 300);
        var c = a.navigator;
        var d = c.userAgent;
        var e = c.platform;
        c = c.product;
        !/Win|Mac|Linux|iPad|iPod|iPhone/.test(e) && /^Opera/.test(d) ? d = !1 : /Win/.test(e) && /Trident/.test(d) && 11 <= a.document.documentMode ? d = !0 : (a = (/WebKit\/(\d+)/.exec(d) || [0, 0])[1], e = (/rv:(\d+\.\d+)/.exec(d) || [0, 0])[1], d = !a && "Gecko" === c && 27 <= e && !/ rv: 1\.8([^.] |\.0) /.test(d) || 536 <= a ? !0 : !1);
        return d && !b
    };
    hk = function(a, b) {
        var c = fk.get(a);
        c || (b = c = b(), gk.set(b, a), fk.set(a, b));
        return c
    };
    P = function(a) {
        return function() {
            return new ik(a, [].concat(_.Ee(_.jb.apply(0, arguments))))
        }
    };
    jk = function(a) {
        return "[" + a.map(function(b) {
            return "string" === typeof b ? "'" + b + "'" : Array.isArray(b) ? jk(b) : String(b)
        }).join(", ") + "]"
    };
    kk = function(a, b) {
        b = jk(b);
        b = b.substring(1, b.length - 1);
        return new ik(96, [a, b])
    };
    lk = function(a) {
        return (_.E = "rewardedSlotReady rewardedSlotGranted rewardedSlotClosed slotAdded slotRequested slotResponseReceived slotRenderEnded slotOnload slotVisibilityChanged impressionViewable gameManualInterstitialSlotReady gameManualInterstitialSlotClosed".split(" "), _.z(_.E, "includes")).call(_.E, a) ? a : null
    };
    nk = function(a, b, c) {
        return hk(c, function() {
            return new mk(a, b, c)
        })
    };
    pk = function(a, b, c) {
        return hk(c, function() {
            return new ok(a, b, c)
        })
    };
    qk = function(a, b, c, d) {
        "string" === typeof a ? b.setClickUrl(a) : Q(d, kk("Slot.setClickUrl", [a]), c)
    };
    xk = function(a, b, c, d, e) {
        if ("string" !== typeof a || rk(a)) Q(e, kk("Slot.setTargeting", [a, b]), c);
        else {
            var f = [];
            Array.isArray(b) ? f = b : _.ua(b) ? f = _.z(Array, "from").call(Array, b) : b && (f = [b]);
            f = f.map(String);
            (b = (_.E = sk(d), _.z(_.E, "find")).call(_.E, function(g) {
                return _.Qi(g, 1) === a
            })) ? tk(b, f): (b = tk(uk(new vk, a), f), Xi(d, 9, vk, b));
            e.info(wk(a, f.join(), d.getAdUnitPath()), c)
        }
    };
    yk = function(a, b, c, d) {
        if (null != a && "object" === typeof a)
            for (var e = _.y(_.z(Object, "keys").call(Object, a)), f = e.next(); !f.done; f = e.next()) f = f.value, xk(f, a[f], b, c, d);
        else d.error(kk("Slot.updateTargetingFromMap", [a]), b)
    };
    Ak = function(a, b, c, d) {
        return "string" !== typeof a ? (Q(d, kk("Slot.getTargeting", [a]), b), []) : (b = (_.E = sk(c), _.z(_.E, "find")).call(_.E, function(e) {
            return _.Qi(e, 1) === a
        })) ? _.zk(b, 2).slice() : []
    };
    Bk = function(a) {
        return sk(a).map(function(b) {
            return _.R(b, 1)
        })
    };
    Hk = function(a, b, c, d) {
        if (void 0 === a) Ck(c, 9), d.info(Dk(b.getAdUnitPath()), b);
        else {
            var e = sk(c),
                f = _.z(e, "findIndex").call(e, function(g) {
                    return _.Qi(g, 1) === a
                });
            0 > f ? Q(d, Ek(a, b.getAdUnitPath()), b) : (e.splice(f, 1), _.Fk(c, 9, e), d.info(Gk(a, b.getAdUnitPath()), b))
        }
    };
    Jk = function(a, b, c) {
        return hk(c, function() {
            return new Ik(a, b, c, c.j)
        })
    };
    Kk = function(a) {
        return _.z(Object, "assign").call(Object, {}, a, _.z(Object, "fromEntries").call(Object, _.z(Object, "entries").call(Object, a).map(function(b) {
            b = _.y(b);
            var c = b.next().value;
            return [b.next().value, c]
        })))
    };
    Ok = function() {
        var a = {},
            b = Kk(Lk);
        a.OutOfPageFormat = b;
        b = Kk(Mk);
        a.TrafficSource = b;
        b = Kk(Nk);
        a.Taxonomy = b;
        return a
    };
    Sk = function(a, b, c, d, e) {
        if ("string" === typeof a && a.length && void 0 !== Pk()[a] && "string" === typeof b) {
            var f = (_.E = c.Ia(), _.z(_.E, "find")).call(_.E, function(g) {
                return _.Qi(g, 1) === a
            });
            f ? tk(f, [b]) : (f = Qk(uk(new vk, a), b), Xi(c, 14, vk, f));
            e.info(Rk(a, String(b), d))
        } else Q(e, kk("PubAdsService.set", [a, b]))
    };
    Tk = function(a, b, c) {
        return "string" !== typeof a ? (Q(c, kk("PubAdsService.get", [a])), null) : (b = (b = (_.E = b.Ia(), _.z(_.E, "find")).call(_.E, function(d) {
            return _.Qi(d, 1) === a
        })) && _.zk(b, 2)) ? b[0] : null
    };
    Uk = function(a) {
        return a.Ia().map(function(b) {
            return _.R(b, 1)
        })
    };
    Wk = function() {
        for (var a = _.uf(Vk) || "0-0-0", b = a.split("-").map(function(e) {
                return Number(e)
            }), c = ["1", "0", "40"].map(function(e) {
                return Number(e)
            }), d = 0; d < b.length; d++) {
            if (b[d] > c[d]) return a;
            if (b[d] < c[d]) break
        }
        return "1-0-40"
    };
    $k = function() {
        if (Xk) return Xk;
        for (var a = vf(Yk), b = [], c = 0; c < a.length; c += 2) Zk(a[c], a[c + 1], b);
        return Xk = b.join("&")
    };
    el = function(a, b) {
        if (!b || !_.la(b)) return null;
        var c = !1,
            d = new al;
        _.bl(b, function(e, f) {
            var g = !1;
            switch (f) {
                case "allowOverlayExpansion":
                    "boolean" === typeof e ? _.Wi(d, 1, b.allowOverlayExpansion) : c = g = !0;
                    break;
                case "allowPushExpansion":
                    "boolean" === typeof e ? _.Wi(d, 2, b.allowPushExpansion) : c = g = !0;
                    break;
                case "sandbox":
                    !0 === e ? _.Wi(d, 3, b.sandbox) : c = g = !0;
                    break;
                default:
                    g = !0
            }
            g && a.error(cl("setSafeFrameConfig", dl(b), f, dl(e)))
        });
        return c ? null : d
    };
    gl = function(a) {
        var b = new al;
        a = _.y(a);
        for (var c = a.next(); !c.done; c = a.next())
            if (c = c.value) null != fl(c, 1) && _.Wi(b, 1, _.G(c, 1)), null != fl(c, 2) && _.Wi(b, 2, _.G(c, 2)), null != fl(c, 3) && _.Wi(b, 3, _.G(c, 3));
        return b
    };
    hl = function(a, b) {
        var c = {};
        b = (c[0] = rf(b.pvsid), c);
        return _.kf(lf).A(a, b)
    };
    jl = function(a, b) {
        var c;
        return null == (c = _.il(a, "__gads", b)) ? void 0 : _.z(c.split(":"), "find").call(c.split(":"), function(d) {
            return 0 === d.indexOf("ID=")
        })
    };
    kl = function(a, b, c, d) {
        (c = jl(c, d)) ? (d = {}, b = (d[0] = rf(b.pvsid), d[1] = rf(c), d), _.kf(lf).A(a, b)) : hl(a, b)
    };
    ol = function(a) {
        var b = a.key,
            c = a.value,
            d = a.ya,
            e = a.serviceName,
            f = a.zk,
            g = a.Wa,
            h = a.X;
        a = a.context;
        var k = null;
        "string" === typeof c ? k = [c] : Array.isArray(c) ? k = c : _.ua(c) && (k = _.z(Array, "from").call(Array, c));
        var l = "string" === typeof b && !rk(b);
        k = k && za(k);
        var m, n = null != (m = null == k ? void 0 : k.every(function(p) {
            return "string" === typeof p
        })) ? m : !1;
        if (l && n) {
            c = k;
            m = (_.E = bh(d, vk, 2), _.z(_.E, "find")).call(_.E, function(p) {
                return _.Qi(p, 1) === b
            });
            if ("gpt-beta" === b) {
                if (f) {
                    Q(h, ll(c.join()));
                    return
                }
                if (m) {
                    Q(h, ml(c.join()));
                    return
                }
                c = nl(c, g, a)
            }
            m ? tk(m, c) : (f = tk(uk(new vk, b), c), Xi(d, 2, vk, f));
            h.info(wk(b, c.join(), e))
        } else Q(h, kk("PubAdsService.setTargeting", [b, c]))
    };
    pl = function(a, b, c) {
        return "string" !== typeof a ? (Q(c, kk("PubAdsService.getTargeting", [a])), []) : (b = (_.E = bh(b, vk, 2), _.z(_.E, "find")).call(_.E, function(d) {
            return _.Qi(d, 1) === a
        })) ? _.zk(b, 2).slice() : []
    };
    ql = function(a) {
        return bh(a, vk, 2).map(function(b) {
            return _.R(b, 1)
        })
    };
    ul = function(a, b, c, d) {
        if (void 0 === a) Ck(b, 2), d.info(rl(c));
        else if ("gpt-beta" === a) Q(d, sl(a));
        else {
            var e = bh(b, vk, 2),
                f = _.z(e, "findIndex").call(e, function(g) {
                    return _.Qi(g, 1) === a
                });
            0 > f ? Q(d, Ek(a, c)) : (e.splice(f, 1), _.Fk(b, 2, e), d.info(tl(a, c)))
        }
    };
    nl = function(a, b, c) {
        var d = [];
        a = _.y(a);
        for (var e = a.next(); !e.done; e = a.next()) {
            e = e.value;
            b.o = e;
            var f = hl(9, c);
            1 === f.length && (d.push(e), d.push(e + "-" + f[0]))
        }
        return d
    };
    wl = function() {
        var a, b, c;
        return "pagead2.googlesyndication.com" === (null != (c = vl.exec(null != (b = null == (a = _.mh(172)) ? void 0 : a.src) ? b : "")) ? c : [])[1]
    };
    xl = function(a) {
        return a + 'Correlator has been deprecated. Please see the Google Ad Manager help page on "Pageviews in GPT" for more information: https://support.google.com/admanager/answer/183281?hl=en'
    };
    yl = function(a, b) {
        var c = b.j;
        return a.map(function(d) {
            return _.z(c, "find").call(c, function(e) {
                return e.j === d
            })
        }).filter(Ue())
    };
    Al = function() {
        Object.defineProperty(window, "google_DisableInitialLoad", {
            get: function() {
                zl();
                return !0
            },
            set: function() {
                zl()
            },
            configurable: !0
        })
    };
    Dl = function(a, b, c, d, e, f) {
        var g = Bl(f, a, b, d, e, void 0, !0);
        f = g.slotId;
        g = g.ya;
        if (!f || !g) return Q(b, kk("PubAdsService.definePassback", [d, e])), null;
        _.Wi(g, 17, !0);
        c.slotAdded(f, g);
        return {
            Ch: Jk(a, b, new Cl(a, f, c)),
            ya: g
        }
    };
    Fl = function(a, b, c, d, e) {
        return hk(c, function() {
            return new El(a, b, c, d, e)
        })
    };
    Gl = function(a, b, c, d, e) {
        "string" !== typeof a || "string" !== typeof b || void 0 === Pk()[a] ? Q(e, kk("Slot.set", [a, b]), c) : (c = (_.E = d.Ia(), _.z(_.E, "find")).call(_.E, function(f) {
            return _.Qi(f, 1) === a
        })) ? tk(c, [b]) : (b = Qk(uk(new vk, a), b), Xi(d, 3, vk, b))
    };
    Hl = function(a, b, c, d) {
        return "string" !== typeof a ? (Q(d, kk("Slot.get", [a]), b), null) : (b = (b = (_.E = c.Ia(), _.z(_.E, "find")).call(_.E, function(e) {
            return _.Qi(e, 1) === a
        })) && _.zk(b, 2)) ? b[0] : null
    };
    Il = function(a) {
        return a.Ia().map(function(b) {
            return _.R(b, 1)
        })
    };
    fm = function(a) {
        return Array.isArray(a) && 2 === a.length ? a.every(Jl) : "fluid" === a
    };
    gm = function(a) {
        return Array.isArray(a) && 2 === a.length && Jl(a[0]) && Jl(a[1])
    };
    im = function(a) {
        return Array.isArray(a) ? eh(fh(new $g, a[0]), a[1]) : hm()
    };
    km = function(a) {
        var b = [];
        if (jm(a)) b.push(im(a));
        else if (Array.isArray(a)) {
            a = _.y(a);
            for (var c = a.next(); !c.done; c = a.next()) c = c.value, jm(c) ? b.push(im(c)) : wa(c, ["fluid"]) && b.push(hm())
        }
        return b
    };
    lm = function(a) {
        var b = void 0 === b ? window : b;
        if (!a) return [];
        if (!a.length) {
            var c, d;
            null == (c = b.console) || null == (d = c.warn) || d.call(c, "Invalid GPT fixed size specification: " + JSON.stringify(a))
        }
        return km(a)
    };
    jm = function(a) {
        return _.H(mm) ? Array.isArray(a) && 2 === a.length ? a.every(nm) : "fluid" === a : Array.isArray(a) && 1 < a.length ? "number" === typeof a[0] && "number" === typeof a[1] : "fluid" === a
    };
    pm = function(a) {
        if (!Array.isArray(a) || 2 !== a.length) throw new om("Each mapping entry must be an array of size 2");
        var b = a[0];
        if (!gm(b)) throw new om("Size must be an array of two non-negative integers");
        b = eh(fh(new $g, b[0]), b[1]);
        if (Array.isArray(a[1]) && 0 === a[1].length) a = [];
        else if (a = km(a[1]), 0 === a.length) throw new om("At least one slot size must be present");
        var c = new dh;
        b = _.tg(c, 1, b);
        return _.Fk(b, 2, a)
    };
    qm = function() {
        var a;
        return null != (a = _.r.googletag) ? a : _.r.googletag = {
            cmd: []
        }
    };
    rm = function(a, b) {
        if (!b) return [];
        var c = [];
        b = _.y((_.E = Id(b, 26), _.z(_.E, "values")).call(_.E));
        for (var d = b.next(); !d.done; d = b.next()) {
            d = d.value;
            try {
                c.push(JSON.parse(d))
            } catch (e) {
                Eg(a, 1023, e)
            }
        }
        return c
    };
    tm = function(a, b, c) {
        return hk(c, function() {
            return new sm(a, b, c)
        })
    };
    Bm = function(a, b, c, d, e, f, g) {
        var h = new $i,
            k = new um(a, g);
        N(h, k);
        e = new vm(a, d, e);
        N(h, e);
        e = new wm(a, b, d, f, k.fb);
        N(h, e);
        g = new xm(a, b, c, d, g, f, k.fb);
        N(h, g);
        if (_.H(ym)) {
            b = new zm(a, b, c, d, f, k.fb);
            N(h, b);
            var l = b.m
        }
        a = new Am(a, k.fb, g.m, e.m, l);
        N(h, a);
        ij(h);
        return {
            fb: a.output,
            Ja: h
        }
    };
    Dm = function(a, b) {
        return hk(b, function() {
            return new Cm(a, b)
        })
    };
    Fm = function(a, b, c) {
        var d = zg(a, 77, function() {
            var e = b.cmd;
            if (!e || Array.isArray(e)) {
                var f = new Em(c);
                b.cmd = Dm(a, f);
                null != e && e.length && f.push.apply(f, e)
            }
        });
        b.fifWin && "complete" !== document.readyState ? _.lb(window, "load", function() {
            return window.setTimeout(d, 0)
        }) : d()
    };
    Im = function(a) {
        var b = window;
        "complete" === _.r.document.readyState ? Gg(a, 94, function() {
            qm()._pubconsole_disable_ || null !== Gm(b) && Hm(a, b)
        }) : _.lb(_.r, "load", zg(a, 94, function() {
            qm()._pubconsole_disable_ || null !== Gm(b) && Hm(a, b)
        }))
    };
    Hm = function(a, b) {
        b = void 0 === b ? _.r : b;
        if (!Jm) {
            var c = new Km("gpt_pubconsole_loaded");
            ci(c, a);
            L(c, "param", String(Gm(b)));
            L(c, "api", String(Lm));
            Mm(c);
            _.Nm(b.document, Om);
            Jm = !0
        }
    };
    Gm = function(a) {
        var b = oh(a),
            c;
        return null != (c = (_.E = ["google_debug", "dfpdeb", "google_console", "google_force_console", "googfc"], _.z(_.E, "find")).call(_.E, function(d) {
            return null !== Pm(b, d)
        })) ? c : null
    };
    Qm = function() {
        qm()._pubconsole_disable_ = !0
    };
    Tm = function() {
        Rm && (qm().console.openConsole(Sm), Sm = void 0, Rm = !1)
    };
    Um = function(a) {
        switch (Number(a)) {
            case 0:
                return "";
            case 1:
                return "Out-of-page creative";
            case 2:
            case 3:
                return "Anchor";
            case 5:
                return "Interstitial";
            case 6:
                return "Shoppit";
            case 7:
                return "Game Manual Interstitial";
            case 4:
                return "Rewarded";
            default:
                return ""
        }
    };
    Vm = function(a, b) {
        b = void 0 === b ? null : b;
        var c = [];
        a && (c.push(_.Qi(a, 1)), c.push(jh(a)), c.push(_.Qi(a, 2)));
        if (b) {
            a = [];
            for (var d = 0; b && 25 > d; b = b.parentNode, ++d) 9 === b.nodeType ? a.push("") : a.push(b.id);
            (b = a.join()) && c.push(b)
        }
        return c.length ? _.qf(c.join(":")).toString() : "0"
    };
    Wm = function(a) {
        if (!_.Dj(a)) return -1;
        a = a.pageYOffset;
        return 0 > a ? -1 : a
    };
    Ym = function(a) {
        a = (_.Dj(a.top) ? a.top : a).AMP;
        return "object" === typeof a && !!Xm(a, function(b, c) {
            return !/^inabox/i.test(c)
        })
    };
    Zm = function(a, b, c, d) {
        var e = _.Oe("DIV");
        e.id = b;
        e.name = b;
        b = e.style;
        b.border = "0pt none";
        c && (b.margin = "auto", b.textAlign = "center");
        d && (c = Array.isArray(d), b.width = c ? d[0] + "px" : "100%", b.height = c ? d[1] + "px" : "0%");
        a.appendChild(e);
        return e
    };
    $m = function(a) {
        return "sticky" === (null == a ? void 0 : a.position) || "fixed" === (null == a ? void 0 : a.position)
    };
    cn = function(a, b, c) {
        var d = new _.w.Map;
        a = _.y(a);
        for (var e = a.next(); !e.done; e = a.next()) {
            e = e.value;
            var f = b[e.getDomId()];
            f = an(f, bn, 28) ? _.Zg(f, bn, 28) : _.Zg(c, bn, 34);
            var g = void 0;
            d.set(e, (null == (g = f) ? 0 : null != fl(g, 1)) ? _.G(f, 1) ? 2 : 1 : 0)
        }
        return d
    };
    fn = function(a, b, c) {
        var d, e, f = [],
            g = [];
        a = _.y(a);
        for (d = a.next(); !d.done; d = a.next())
            if (d = d.value, 1 === b.get(d)) f.push(null), g.push(null);
            else {
                var h = c,
                    k = Ch(d);
                d = dn((null == k ? void 0 : k.parentElement) && Eh(k.parentElement, h) || null);
                if (!d || 1 === d[0] && 1 === d[3]) {
                    var l = e = d = void 0,
                        m = null != (l = null == k ? void 0 : k.parentElement) ? l : null;
                    l = null != (e = vh(m)) ? e : new _.uh(0, 0);
                    en(l, m, h, 100);
                    e = null != (d = vh(k)) ? d : new _.uh(0, 0);
                    en(e, k, h, 1); - 1 === l.height && (e.height = -1);
                    d = l;
                    d = d.width + "x" + d.height;
                    e = e.width + "x" + e.height
                } else e = d = "-1x-1";
                f.push(d);
                g.push(e)
            }
        return {
            Yj: f,
            Ck: g
        }
    };
    en = function(a, b, c, d) {
        try {
            var e;
            if (!(e = !b)) {
                var f;
                if (!(f = !gn(b, c, d))) {
                    a: {
                        do {
                            var g = Eh(b, c);
                            if (g && "fixed" == g.position) {
                                var h = !1;
                                break a
                            }
                        } while (b = b.parentElement);h = !0
                    }
                    f = !h
                }
                e = f
            }
            e && (a.height = -1)
        } catch (k) {
            a.width = -1, a.height = -1
        }
    };
    jn = function(a, b, c) {
        var d = 0 !== (0, _.hn)(),
            e = hh(!0, c, d).width,
            f = [],
            g = [],
            h = [];
        if (null !== c && c != c.top) {
            var k = hh(!1, c).width;
            (-12245933 === e || -12245933 === k || k < e) && h.push(8)
        } - 12245933 !== e && (1.5 * e < c.document.documentElement.scrollWidth ? h.push(10) : d && 1.5 * c.outerWidth < e && h.push(10));
        a = _.y(a);
        for (d = a.next(); !d.done; d = a.next())
            if (k = d.value, 1 === b.get(k)) f.push(null), g.push(null);
            else {
                d = new Yh;
                var l = Ch(k);
                k = 0;
                var m = !1,
                    n = !1,
                    p = !1;
                if (l) {
                    for (var t = 0, u = l; u && 100 > t; t++, u = u.parentElement) {
                        var v = Eh(u, c);
                        if (v) {
                            var x = v,
                                F = x.display,
                                D = x.overflowX;
                            if ("visible" !== x.overflowY && (d.set(2), (x = vh(u)) && (k = k ? Math.min(k, x.width) : x.width), d.get(9))) break;
                            $m(v) && d.set(9);
                            "none" === F && d.set(7);
                            "IFRAME" === u.nodeName && (v = parseInt(v.width, 10), v < e && (d.set(8), k = k ? Math.min(v, k) : v));
                            n || (n = "scroll" === D || "auto" === D);
                            m || (m = "flex" === F);
                            p || (p = "listbox" === u.role)
                        } else d.set(3)
                    }
                    if (!p) {
                        if (m = n && m) l = l.getBoundingClientRect().left, m = l > e || 0 > l;
                        p = m
                    }
                    p && d.set(11)
                } else d.set(1);
                l = _.y(h);
                for (m = l.next(); !m.done; m = l.next()) d.set(m.value);
                f.push($h(d));
                g.push(k)
            }
        return {
            oj: f,
            Xj: g
        }
    };
    kn = function(a) {
        var b = a.match(/\/?([0-9]+)(?:,[0-9]+)?((?:\/.+?)+?)(?:\/*)$/);
        return 3 !== (null == b ? void 0 : b.length) ? a : "/" + b[1] + b[2]
    };
    mn = function(a, b) {
        var c, d;
        return null != (d = null != (c = null == b ? void 0 : b.get(_.H(ln) ? kn(a) : a)) ? c : null == b ? void 0 : b.get(_.qf(a))) ? d : 0
    };
    sn = function(a, b, c, d, e) {
        if (null != b && b.size) {
            var f, g;
            e = null != (g = null != (f = null == e ? void 0 : e.adUnits) ? f : null == a ? void 0 : a.adUnits) ? g : [];
            a = _.y(e);
            g = a.next();
            for (f = {}; !g.done; f = {
                    He: f.He
                }, g = a.next()) {
                e = g.value;
                g = e.code;
                e = e.bids;
                var h = void 0;
                if (g && null != (h = e) && h.length && (g = mn(g, b), f.He = g / 1E6, !(0 >= g))) {
                    h = void 0;
                    e = _.y(null != (h = e) ? h : []);
                    var k = e.next();
                    for (h = {}; !k.done; h = {
                            Cb: h.Cb,
                            Bf: h.Bf
                        }, k = e.next()) k = k.value, h.Bf = "function" === typeof k.getFloor ? k.getFloor : void 0, h.Cb = nn(on(pn(new qn, 4), g), c), k.getFloor = function(l, m) {
                        return function(n) {
                            4 === _.Xj(l.Cb, 1, 0) && pn(l.Cb, 1);
                            var p, t = null == (p = l.Bf) ? void 0 : p.apply(this, [n]);
                            n = c ? t || {} : {
                                currency: "USD",
                                floor: m.He
                            };
                            return null != t && t.floor ? (null == t ? 0 : t.currency) && "USD" !== t.currency ? (1 === _.Xj(l.Cb, 1, 0) && (n = on(pn(l.Cb, 6), 1E6 * t.floor), rn(n, 3, t.currency)), t) : (t.floor || 0) > m.He ? (1 === _.Xj(l.Cb, 1, 0) && on(pn(l.Cb, 5), 1E6 * t.floor), t) : n : n
                        }
                    }(h, f), d.set(k.getFloor, h.Cb)
                }
            }
        }
    };
    tn = function(a, b) {
        var c = a.que,
            d = function() {
                var e;
                null == a || null == (e = a.requestBids) || e.before.call(b, function(f, g) {
                    return qm().pbjs_hooks.push({
                        context: b,
                        nextFunction: f,
                        requestBidsConfig: g
                    })
                }, 0)
            };
        (null == c ? 0 : c.hasOwnProperty("push")) ? null == c || c.push(d): null == c || c.unshift(d)
    };
    vn = function(a, b) {
        return hk(b, function() {
            return new un(a, b)
        })
    };
    Fn = function(a, b, c, d, e) {
        var f = e.getBidResponsesForAdUnitCode;
        if (f) {
            var g, h, k, l = null != (k = null == (g = f(b.getDomId())) ? void 0 : g.bids) ? k : null == (h = f(b.getAdUnitPath())) ? void 0 : h.bids;
            if (null != l && l.length && (g = l.filter(function(p) {
                    var t = p.adId;
                    return p.auctionId !== c && d.some(function(u) {
                        return (_.E = _.zk(u, 2), _.z(_.E, "includes")).call(_.E, t)
                    })
                }), g.length)) {
                var m, n;
                f = null == (m = e.adUnits) ? void 0 : null == (n = _.z(m, "find").call(m, function(p) {
                    p = p.code;
                    return p === b.getAdUnitPath() || p === b.getDomId()
                })) ? void 0 : n.mediaTypes;
                m = _.y(g);
                for (n = m.next(); !n.done; n = m.next()) n = n.value, g = wn(n, d, f), g = xn(a, yn(_.Wi(zn(An(new Bn, n.bidder), 1), 6, !0), g)), _.H(Cn) && Dn(n.bidder, e, g), "number" === typeof n.timeToRespond && En(g, n.timeToRespond)
            }
        }
    };
    Dn = function(a, b, c) {
        for (var d = []; a && !_.z(d, "includes").call(d, a);) {
            d.unshift(a);
            var e = void 0,
                f = void 0;
            a = null == (e = b) ? void 0 : null == (f = e.aliasRegistry) ? void 0 : f[a]
        }
        _.Kd(c, 10, d, _.Nc)
    };
    In = function(a, b, c) {
        null != Gn(a, 3) || (c === b.getAdUnitPath() ? Hn(a, 3, 1) : c === b.getDomId() && Hn(a, 3, 2))
    };
    Kn = function(a, b, c, d, e, f, g) {
        f = f.get(null != g ? g : function() {
            return null
        });
        1 !== (null == f ? void 0 : _.Xj(f, 1, 0)) && _.tg(b, 5, f);
        an(a, qn, 5) || (f ? 1 === _.Xj(f, 1, 0) ? Jn(a, f) : Jn(a, on(pn(nn(new qn, e), 1), mn(c, d))) : Jn(a, pn(nn(new qn, e), mn(c, d) ? 2 : 3)))
    };
    wn = function(a, b, c) {
        var d = a.cpm,
            e = a.originalCpm,
            f = a.currency,
            g = a.originalCurrency,
            h = a.dealId,
            k = a.adserverTargeting,
            l = a.bidder,
            m = a.adUnitCode,
            n = a.adId,
            p = a.mediaType,
            t = a.height;
        a = a.width;
        var u = new Ln;
        "number" === typeof d && (_.Nj(u, 2, Math.round(1E6 * d)), g && g !== f || (d = Math.round(1E6 * Number(e)), isNaN(d) || d === _.Me(u, 2) || _.Nj(u, 8, d)));
        "string" === typeof f && rn(u, 3, f);
        (_.E = ["string", "number"], _.z(_.E, "includes")).call(_.E, typeof h) && Mn(u, Nn(new On, String(h)));
        if ("object" === typeof k)
            for (b = _.z(Object, "fromEntries").call(Object, b.map(function(F) {
                    return [_.Qi(F, 1), _.zk(F, 2)]
                })), f = _.y(["", "_" + l]), h = f.next(); !h.done; h = f.next()) {
                h = h.value;
                d = [];
                e = _.y(_.z(Object, "entries").call(Object, k));
                for (g = e.next(); !g.done; g = e.next()) {
                    g = _.y(g.value);
                    var v = g.next().value;
                    g = g.next().value;
                    v = (v + h).slice(0, 20);
                    var x = void 0;
                    if (null != (x = b[v]) && x.length)
                        if (b[v][0] === String(g)) d.push(v);
                        else {
                            d = [];
                            break
                        }
                }
                Pn(u, _.zk(u, 4).concat(d))
            }
        switch (p || "banner") {
            case "banner":
                Hn(u, 5, 1);
                break;
            case "native":
                Hn(u, 5, 2);
                Wh("hbyg_nat", function(F) {
                    L(F, "pub_url", document.URL);
                    L(F, "b", l);
                    L(F, "auc", null != m ? m : "");
                    L(F, "hmt", Number(!!c));
                    var D;
                    L(F, "hat", Number(!!(null == c ? 0 : null == (D = c.native) ? 0 : D.adTemplate)))
                }, _.tf(Qn));
                break;
            case "video":
                Hn(u, 5, 3)
        }
        "number" === typeof t && "number" === typeof a && u.setSize(Rn(Sn(a), t));
        "string" === typeof n && rn(u, 1, n);
        return u
    };
    Tn = function(a, b) {
        var c = new _.w.Map,
            d = function(k) {
                var l = c.get(k);
                l || (l = {}, c.set(k, l));
                return l
            },
            e = [];
        a = _.y(a);
        for (var f = a.next(); !f.done; f = a.next()) {
            f = f.value;
            var g = f.args,
                h = f.eventType;
            f = f.elapsedTime;
            "bidTimeout" === h && e.push.apply(e, _.Ee(g));
            switch (h) {
                case "bidRequested":
                    if (g.auctionId !== b) continue;
                    if (!Array.isArray(g.bids)) continue;
                    g = _.y(g.bids);
                    for (h = g.next(); !h.done; h = g.next())
                        if (h = h.value.bidId) d(h).requestTime = f;
                    break;
                case "noBid":
                    g.auctionId === b && g.bidId && (d(g.bidId).rk = f)
            }
        }
        d = new _.w.Map;
        a = _.y(_.z(c, "entries").call(c));
        for (f = a.next(); !f.done; f = a.next()) g = _.y(f.value), f = g.next().value, h = g.next().value, g = h.requestTime, h = h.rk, g && h && d.set(f, {
            latency: h - g,
            nh: !1
        });
        e = _.y(e);
        for (a = e.next(); !a.done; a = e.next())
            if (f = a.value, a = f.bidId, f = f.auctionId, a && f === b && (a = d.get(a))) a.nh = !0;
        return d
    };
    Un = function(a, b) {
        for (var c = new Yh, d = 0; d < a.length; d++) c.set(a.length - d - 1, b(a[d]));
        return $h(c)
    };
    Xn = function(a, b, c) {
        c = void 0 === c ? {} : c;
        var d = void 0 === c.Yc ? "" : c.Yc;
        c = void 0 === c.Ea ? "," : c.Ea;
        if (_.H(Vn)) return Wn(a, b);
        var e = !1;
        a = a.map(function(f) {
            f = b(f);
            e || (e = !!f);
            return String(f || d)
        });
        return e ? a.join(c) : null
    };
    Wn = function(a, b) {
        return a.map(function(c) {
            return b(c)
        })
    };
    $n = function(a, b, c, d, e, f, g) {
        if (f) {
            var h = {
                    mg: new Yn
                },
                k = new $i;
            a = new Zn(a, b, c, d, e, f, g, h);
            N(k, a);
            ij(k);
            return {
                Fi: h,
                Ja: k
            }
        }
    };
    bo = function(a, b, c, d, e) {
        if (b && !(.01 < Math.random())) {
            var f = new $i;
            N(f, new ao(a, c, b.Fb, d, e));
            ij(f)
        }
    };
    eo = function(a, b) {
        var c;
        return !(null != (c = co(b, 22)) ? !c : !_.G(a, 15))
    };
    fo = function(a, b) {
        var c;
        return !(null != (c = co(a, 11)) ? !c : !_.G(b, 10))
    };
    ho = function(a, b, c, d) {
        if (a = Ch(a, b)) {
            var e;
            if (c = null != (e = co(c, 24)) ? e : _.G(d, 30)) c = a.getBoundingClientRect(), d = c.top, e = c.bottom, 0 === c.height ? c = !1 : (c = _.r.innerHeight, c = 0 < e && e < c || 0 < d && d < c);
            c || go(a, !1)
        }
    };
    io = function(a, b, c, d) {
        Q(a, cl("googletag.setConfig.commerce", dl(b), c, dl(d)))
    };
    jo = function(a) {
        return "string" === typeof a && 0 < a.length && 5E3 > a.length
    };
    ko = function(a) {
        if (!Array.isArray(a) || 0 === a.length) return !1;
        var b = a.length - 1;
        return a.every(function(c) {
            if ("string" !== typeof c || 0 === c.length) return !1;
            b += c.length;
            return 5E3 < b ? !1 : !0
        })
    };
    oo = function(a, b, c) {
        var d = window,
            e = new $i;
        d = new lo(d);
        _.S(e, d);
        c = new mo(a, d, c);
        N(e, c);
        a = new no(a, d, b, c.Cc);
        N(e, a);
        ij(e);
        return {
            Cc: c.Cc,
            Yg: a.m,
            Ja: e
        }
    };
    po = function(a) {
        if (61440 >= a.length) return {
            url: a,
            Cg: 0
        };
        var b = a;
        61440 < b.length && (b = b.substring(0, 61432), b = b.replace(/%\w?$/, ""), b = b.replace(/&[^=]*=?$/, ""), b += "&trunc=1");
        return {
            url: b,
            Cg: a.length - b.length + 8
        }
    };
    qo = function(a, b) {
        b = void 0 === b ? window : b;
        return b.location ? b.URLSearchParams ? (a = (new URLSearchParams(b.location.search)).get(a), (null == a ? 0 : a.length) ? a : null) : (a = (new RegExp("[?&]" + a + "=([^&]*)")).exec(b.location.search)) ? decodeURIComponent(a[1]) : null : null
    };
    ro = function(a, b) {
        b = void 0 === b ? window : b;
        return !!qo(a, b)
    };
    so = function(a, b) {
        var c = "";
        a ? c = "_fy2012" : b && 2012 < b && (c = "_fy" + b);
        return c
    };
    to = function(a) {
        var b, c;
        return null != (c = null == (b = _.z(a, "find").call(a, function(d) {
            return "page_url" === _.Qi(d, 1)
        })) ? void 0 : _.zk(b, 2)[0]) ? c : null
    };
    uo = function(a) {
        var b = a.indexOf("google_preview=", a.lastIndexOf("?")),
            c = a.indexOf("&", b); - 1 === c && (c = a.length - 1, --b);
        return a.substring(0, b) + a.substring(c + 1, a.length)
    };
    vo = function(a) {
        var b;
        if (null == (b = a.location) ? 0 : b.ancestorOrigins) return a.location.ancestorOrigins.length;
        var c = 0;
        bk(function() {
            c++;
            return !1
        }, !0, !0, a);
        return c
    };
    wo = function(a, b) {
        var c = b.aa;
        return !!to(b.fa.Ia()) || a.some(function(d) {
            return null !== to(c[d.getDomId()].Ia())
        })
    };
    yo = function() {
        var a = void 0 === a ? window : a;
        xo = _.ef(a)
    };
    zo = function(a, b) {
        var c = _.Oe("DIV");
        c.id = a;
        c.textContent = b;
        _.Ph(c, {
            height: "24px",
            "line-height": "24px",
            "text-align": "center",
            "vertical-align": "middle",
            color: "white",
            "background-color": "black",
            margin: "0",
            "font-family": "Roboto",
            "font-style": "normal",
            "font-weight": "500",
            "font-size": "11px",
            "letter-spacing": "0.08em"
        });
        return c
    };
    Ao = function(a, b) {
        if ("undefined" !== typeof IntersectionObserver) return new IntersectionObserver(b, {
            rootMargin: a + "%"
        })
    };
    Eo = function(a, b, c, d, e) {
        var f = void 0 === f ? _.w.globalThis.IntersectionObserver : f;
        if (!b) return {
            If: e
        };
        var g = null != Bo(b, 1) ? null != Co(b) && 0 !== (0, _.hn)() ? Bo(b, 1) * Co(b) : Bo(b, 1) : null;
        if (null == g) return {
            If: e
        };
        b = new $i;
        a = new Do(a, d, c, g, e, f);
        N(b, a);
        ij(b);
        return {
            If: a.output,
            Pj: b
        }
    };
    Go = function(a, b, c, d) {
        for (var e = _.y(_.z(Object, "entries").call(Object, Fo)), f = e.next(); !f.done; f = e.next()) {
            var g = _.y(f.value);
            f = g.next().value;
            g = g.next().value;
            b & f && Q(a, g(c, d))
        }
    };
    Jo = function(a, b, c) {
        c = void 0 === c ? null : c;
        b = (void 0 === b ? 0 : b) ? 604800 : -1;
        if (!(0 < b) || c && _.G(c, 5)) {
            c = c ? af(c) : null;
            var d = 0;
            try {
                d |= a !== a.top ? 512 : 0;
                var e;
                if (!(e = !a.navigator)) {
                    var f = a.navigator;
                    e = "brave" in f && "isBrave" in f.brave || !1
                }
                d |= e || /Android 2/.test(a.navigator.userAgent) ? 1048576 : 0;
                d |= Vf(a, 2500);
                d |= Wf(a);
                0 < b && !_.Ho(_.Io(c, b)) && (d |= 134217728)
            } catch (g) {
                d |= 32
            }
            a = d
        } else a = 4194304;
        return a
    };
    No = function(a, b, c, d, e, f) {
        d = Ko(d);
        if (5 !== d) return !1;
        var g = Jo(e, !Lo(c), f);
        if (g &= -134217729) Wh("gpt_int_ns", function(h) {
            L(h, "nsr", g);
            ci(h, a)
        }, _.tf(Mo)), Go(b, g, d, c.getAdUnitPath());
        return !!g
    };
    Oo = function(a) {
        switch (a) {
            case 4:
                return 11;
            case 2:
                return 2;
            case 3:
                return 1;
            case 5:
                return 8;
            case 6:
                return 42;
            case 7:
                return 10
        }
    };
    Ro = function(a, b) {
        a = Oo(a);
        if (!a) return null;
        if (10 === a) return 0;
        var c = 0;
        if (!(_.E = [11, 10], _.z(_.E, "includes")).call(_.E, a)) {
            c |= _.r !== _.r.top ? 512 : 0;
            var d = _.Po(_.r);
            d = 26 !== a && 27 !== a && 40 !== a && 41 !== a && 10 !== a && d.adCount ? 1 == a || 2 == a ? !(!d.adCount[1] && !d.adCount[2]) : (d = d.adCount[a]) ? 1 <= d : !1 : !1;
            d && (c |= 64);
            if (c) return c
        }
        2 === a || 1 === a ? (b = {
            Ca: _.r,
            ue: _.Qo,
            Dg: b ? a : void 0
        }, 0 === (0, _.hn)() && (b.ue = 3E3, b.Of = 650), c |= _.eg(b)) : 8 === a ? c |= Jo(_.r) : 11 !== a && 42 !== a && (c |= 32);
        c || (b = _.Po(_.r), b.adCount = b.adCount || {}, b.adCount[a] = b.adCount[a] + 1 || 1);
        return c
    };
    Uo = function(a, b, c, d) {
        var e = d.Qg,
            f = d.adUnitPath;
        d = void 0 === d.ob ? !1 : d.ob;
        return "string" === typeof f && f.length && (null == e || "string" === typeof e || "number" === typeof e && So(e)) ? To(a, b, f, c, {
            Lb: "string" === typeof e ? e : void 0,
            format: "number" === typeof e ? e : 1,
            ob: d
        }) : (b.error(kk("googletag.defineOutOfPageSlot", [f, e])), null)
    };
    So = function(a) {
        switch (a) {
            case 6:
                return !0;
            case 7:
                return !0;
            default:
                return !!Xm(Lk, function(b) {
                    return b === a
                })
        }
    };
    To = function(a, b, c, d, e) {
        var f = e.format;
        b = d.add(a, b, c, [1, 1], {
            Lb: e.Lb,
            format: f,
            ob: e.ob
        });
        a = b.slotId;
        b = b.ya;
        a && b && (Hn(b, 15, f), _.Vo(a, function() {
            var g = window,
                h = Oo(f);
            if (h) {
                g = _.Po(g);
                var k = g.adCount && g.adCount[h];
                k && (g.adCount[h] = k - 1)
            }
        }));
        return null != a ? a : null
    };
    ep = function(a, b, c, d, e) {
        var f = window,
            g = new $i,
            h = N(g, new Wo(a, b, Xo, function(m) {
                return Yo("i-adframe-load", m.detail.data)
            })),
            k = N(g, new Wo(a, b, Xo, function(m) {
                return Yo("i-dismiss", m.detail.data)
            }));
        h = 0 < _.tf(Zo) ? N(g, new $o(a, h.output, void 0)).output : h.output;
        h = N(g, new ap(a, b, c, h));
        N(g, new bp(a, f, d, e, h.output));
        if (f.top === f) var l = N(g, new cp(a, f, h.output)).output;
        N(g, new dp(a, b, c, h.output, k.output, l));
        return g
    };
    Yo = function(a, b) {
        try {
            var c = JSON.parse(b);
            return "sth" === c.googMsgType && c.msg_type === a
        } catch (d) {}
        return !1
    };
    gp = function(a, b, c) {
        return new fp(c, a, Xo, function(d) {
            d = d.detail.data;
            try {
                var e = JSON.parse(d);
                if ("rewarded" === e.type && e.message === b) return e
            } catch (f) {}
            return null
        })
    };
    jp = function(a, b, c) {
        if ("object" === typeof a && null !== a && _.z(Object, "keys").call(Object, a).some(function(d) {
                return (_.E = _.z(Object, "values").call(Object, hp), _.z(_.E, "includes")).call(_.E, Number(d))
            })) return !0;
        ip("taxonomies", a, b, c);
        return !1
    };
    lp = function(a, b) {
        var c = bh(b, kp, 1).filter(function(d) {
            return _.Xj(d, 1, 0) !== a
        });
        _.Fk(b, 1, c)
    };
    up = function(a, b, c, d) {
        if (void 0 !== _.z(b, "values"))
            if (null === _.z(b, "values")) lp(a, c);
            else if (mp(_.z(b, "values"), d, b))
            if (_.H(np)) {
                var e = op(a, _.z(b, "values"), d, b);
                e.size && (b = (_.E = bh(c, kp, 1), _.z(_.E, "find")).call(_.E, function(f) {
                    return _.Xj(f, 1, 0) === a
                }), e = [].concat(_.Ee(e)), b ? pp(b, e) : qp(c, pp(rp(new kp, a), e)), d.info(sp(dl(e), dl(a))))
            } else b = tp(a, _.z(b, "values"), d, b), b.length && ((e = (_.E = bh(c, kp, 1), _.z(_.E, "find")).call(_.E, function(f) {
                return _.Xj(f, 1, 0) === a
            })) ? pp(e, b) : qp(c, pp(rp(new kp, a), b)), d.info(sp(dl(b), dl(a))))
    };
    mp = function(a, b, c) {
        if (Array.isArray(a)) return !0;
        ip("taxonomyData.values", a, b, c);
        return !1
    };
    tp = function(a, b, c, d) {
        var e = _.H(vp) ? 10 : 5,
            f = [],
            g = [],
            h = !1;
        b = _.y(b);
        for (var k = b.next(); !k.done; k = b.next()) k = k.value, "string" !== typeof k ? g.push(k) : f.length >= e ? h = !0 : _.z(f, "includes").call(f, k) || f.push(k);
        0 < g.length && ip("taxonomyData.values", g, c, d);
        (_.H(wp) ? h : f.length >= e) && Q(c, xp(dl(a), dl(e)));
        return f
    };
    op = function(a, b, c, d) {
        var e = _.H(vp) ? 10 : 5,
            f = new _.w.Set,
            g = [],
            h = !1;
        b = _.y(b);
        for (var k = b.next(); !k.done; k = b.next()) k = k.value, "string" !== typeof k ? g.push(k) : f.size >= e ? h = !0 : f.add(k);
        0 < g.length && ip("taxonomyData.values", g, c, d);
        (_.H(wp) ? h : f.size >= e) && Q(c, xp(dl(a), dl(e)));
        return f
    };
    ip = function(a, b, c, d) {
        Q(c, cl("googletag.setConfig.pps", dl(d), a, dl(b)))
    };
    Bp = function(a, b) {
        if (3 === _.yp(b)) {
            var c = {
                    zd: new zp
                },
                d = new $i;
            N(d, new Ap(a, b, c.zd));
            ij(d);
            return {
                Ja: d,
                gk: c
            }
        }
    };
    Dp = function(a, b, c) {
        if (b) {
            var d = {
                    cg: new Yn
                },
                e = new $i;
            N(e, new Cp(a, b, c, d));
            ij(e);
            return {
                Ja: e,
                Ie: d
            }
        }
    };
    Ep = function(a) {
        var b = function() {
            return a.Reflect.construct(a.HTMLElement, [], this.constructor)
        };
        b.prototype = a.HTMLElement.prototype;
        b.prototype.constructor = b;
        _.z(Object, "setPrototypeOf").call(Object, b, a.HTMLElement);
        return b
    };
    Gp = function(a, b) {
        var c = _.tf(Fp);
        Math.random() <= c && mg(b, a)
    };
    Np = function(a, b, c) {
        var d = {};
        if (!c) return b.error(Hp("missing data-rendering attribute")), d;
        try {
            var e = Ip(Jp(c))
        } catch (k) {}
        var f;
        (null == (f = e) ? 0 : an(f, Kp, 1)) ? (b = _.I(new Lp, 4, 1), b = _.I(b, 2, 7), a = _.rg(b, 3, a.xb || a.vb), b = _.Zg(e, Kp, 1), a = _.tg(a, 5, b), a = _.Mp(a, 6, !0), d.Dk = a) : b.error(Hp("invalid data-rendering attribute"));
        var g;
        d.pk = null == (g = e) ? void 0 : _.R(g, 2);
        var h;
        d.af = null == (h = e) ? void 0 : _.R(h, 3);
        return d
    };
    Qp = function(a, b) {
        var c = Pm(b, "ai");
        if (!c || 0 === c.length) return _.w.Promise.resolve(b);
        var d = Op();
        if (null == d ? 0 : d.gmaSdk) {
            if (c = d.gmaSdk.getClickSignalsWithTimeout ? d.gmaSdk.getClickSignalsWithTimeout(c, 200) : d.gmaSdk.getClickSignals(c)) return _.w.Promise.resolve(b.replace("?", "?ms=" + encodeURIComponent(c) + "&"))
        } else {
            var e, f;
            if (null == d ? 0 : null == (e = d.webkit) ? 0 : null == (f = e.messageHandlers) ? 0 : f.getGmaClickSignals) {
                e = new _.Cf;
                var g = e.resolve;
                e = e.promise;
                Pp(d.webkit.messageHandlers.getGmaClickSignals, {
                    click_string: c
                }, function(h) {
                    g(b.replace("?", "?" + h + "&"))
                }, function() {
                    g(b)
                }, function(h, k) {
                    return zg(a, h, k)
                });
                return e
            }
        }
        return _.w.Promise.resolve(b)
    };
    Sp = function(a, b, c, d) {
        var e, f, g;
        return _.nb(function(h) {
            e = b.getBoundingClientRect();
            f = {};
            g = d.replace("?", _.Rp("", (f.nx = Math.floor(c.clientX - e.x), f.ny = Math.floor(c.clientY - e.y), f.dim = Math.floor(e.width) + "x" + Math.floor(e.height), f)) + "&");
            return h.return(Qp(a, g))
        })
    };
    Tp = function(a, b, c) {
        var d;
        if (null == c ? 0 : null == (d = c.gmaSdk) ? 0 : d.getViewSignals) {
            if (c = c.gmaSdk.getViewSignals()) return c = b.replace(/^(.*?)(&adurl=)?$/, "$1&ms=" + c + "$2"), _.w.Promise.resolve(c)
        } else {
            var e, f;
            if (null == c ? 0 : null == (e = c.webkit) ? 0 : null == (f = e.messageHandlers) ? 0 : f.getGmaViewSignals) {
                d = new _.Cf;
                var g = d.resolve;
                d = d.promise;
                Pp(c.webkit.messageHandlers.getGmaViewSignals, {}, function(h) {
                    g(b.replace(/^(.*?)(&adurl=)?$/, "$1&" + h + "$2"))
                }, function() {
                    g(b)
                }, function(h, k) {
                    return zg(a, h, k)
                });
                return d
            }
        }
        return _.w.Promise.resolve(b)
    };
    Zp = function(a, b) {
        var c = window;
        var d = void 0 === d ? ub : d;
        var e;
        if (c.customElements && null != (e = c.Reflect) && e.construct && !c.customElements.get("google-product-ad")) {
            var f = Op(),
                g;
            null == (g = f ? new Up(function(k, l) {
                return zg(a, k, l)
            }, function() {}) : void 0) || Vp(g);
            var h = Ep(c);
            e = function() {
                return h.apply(this, arguments) || this
            };
            _.T(e, h);
            e.prototype.connectedCallback = function() {
                var k = Np(a, b, this.dataset.rendering),
                    l = k.Dk,
                    m = k.pk;
                k = k.af;
                l && d(Wp(window, l));
                m && Tp(a, m, f).then(function(n) {
                    return void Xp(n)
                });
                k && ("true" === this.getAttribute("data-enable-click") || this.querySelector('[data-enable-click="true"]') ? (this.af = k, this.addEventListener("click", this.j)) : Q(b, Yp(k)))
            };
            e.prototype.j = function(k) {
                var l = k.target instanceof c.HTMLElement ? k.target.closest("[data-enable-click]") : void 0;
                l instanceof c.HTMLElement && "true" === l.getAttribute("data-enable-click") && Sp(a, this, k, this.af).then(function(m) {
                    return void Xp(m)
                })
            };
            c.customElements.define("google-product-ad", e)
        }
    };
    aq = function(a) {
        $p = a
    };
    cq = function(a, b, c, d) {
        pj(b, d, function(e, f) {
            Eg(a, e, f);
            var g, h;
            null == (h = (g = window.console).error) || h.call(g, f)
        }, function() {
            return void Q(c, bq())
        })
    };
    fq = function(a) {
        a = dq(a);
        return _.eq(a)
    };
    dq = function(a) {
        return null === a ? "null" : void 0 === a ? "undefined" : a
    };
    ra = function(a, b) {
        a: {
            b = b[0];a = a[0];
            for (var c = _.pa, d = Math.min(b.length, a.length), e = 0; e < d; e++) {
                var f = c(b[e], a[e]);
                if (0 != f) {
                    b = f;
                    break a
                }
            }
            b = _.pa(b.length, a.length)
        }
        return b
    };
    gq = function(a) {
        return Array.isArray(a) && 2 === a.length && "number" === typeof a[0] && _.z(a, "includes").call(a, 0)
    };
    hq = function(a) {
        if (gq(a)) return {
            size: [],
            gg: !0
        };
        if (Array.isArray(a) && 0 < a.length && "number" !== typeof a[0]) {
            var b = !1;
            a = a.filter(function(c) {
                c = gq(c);
                b = b || c;
                return !c
            });
            return {
                size: a,
                gg: b
            }
        }
        return {
            size: a,
            gg: !1
        }
    };
    jq = function(a, b) {
        var c = b.aa;
        return Xn(a, function(d) {
            return iq(c[d.getDomId()]).join("&")
        }, {
            Ea: "|"
        })
    };
    iq = function(a) {
        a = kq(a);
        var b = [];
        _.bl(a, function(c, d) {
            c.length && (c = c.map(encodeURIComponent), d = encodeURIComponent(d), b.push(d + "=" + c.join()))
        });
        return b
    };
    kq = function(a) {
        for (var b = {}, c = _.y(sk(a)), d = c.next(); !d.done; d = c.next()) d = d.value, b[_.R(d, 1)] = _.zk(d, 2);
        a = _.zk(a, 8);
        a.length && (null != b.excl_cat || (b.excl_cat = a));
        return b
    };
    lq = function(a) {
        var b = !1,
            c = bh(a, vk, 2).map(function(d) {
                var e = _.R(d, 1);
                b = "excl_cat" === e;
                d = _.zk(d, 2);
                return encodeURIComponent(e) + "=" + encodeURIComponent(d.join())
            });
        a = _.zk(a, 3);
        !b && a.length && c.push(encodeURIComponent("excl_cat") + "=" + encodeURIComponent(a.join()));
        return c
    };
    pq = function(a, b, c, d) {
        var e = "function" !== typeof b.document.browsingTopics,
            f = ! of ("browsing-topics", b.document);
        e = e || f;
        if ( of ("shared-storage", b.document) || !e) {
            if (_.H(mq)) return e = new $i, a = new nq(a, b, c, d), N(e, a), ij(e), a.m;
            d = {
                Wb: new Yn
            };
            e = new $i;
            N(e, new oq(a, b, d.Wb, c));
            ij(e);
            return d
        }
    };
    rq = function(a, b, c, d) {
        if (c) {
            var e = {
                    qc: new Yn,
                    Od: new Yn,
                    Pd: new Yn
                },
                f = new $i;
            N(f, new qq(a, b, c, d, e));
            ij(f);
            return {
                Ja: f,
                Hk: e
            }
        }
    };
    tq = function(a, b, c) {
        var d = window;
        if (_.H(Jj) && b) {
            var e = new $i;
            N(e, new sq(a, d, b, c));
            ij(e);
            return e
        }
    };
    vq = function(a, b, c, d) {
        if (b) {
            var e = b.Pb,
                f = b.mk;
            if (b.Xh && 4 === e) {
                b = new Yn;
                e = new Yn;
                if (!f) return b.G({
                    kind: 1,
                    reason: 1
                }), e.G(!1), {
                    Zh: {
                        Ih: b,
                        hh: e
                    }
                };
                f = new $i;
                a = new uq(a, c, d, b, e);
                N(f, a);
                ij(f);
                return {
                    Zh: {
                        Ih: b,
                        hh: e
                    },
                    Mk: f
                }
            }
        }
    };
    wq = function(a) {
        var b = a.kf,
            c = a.Ib,
            d = void 0 === a.Fg ? [] : a.Fg,
            e;
        a = {
            seller: "https://securepubads.g.doubleclick.net",
            decisionLogicUrl: "https://securepubads.g.doubleclick.net/td/sjs",
            trustedScoringSignalsUrl: "https://securepubads.g.doubleclick.net/td/sts",
            interestGroupBuyers: null != (e = a.interestGroupBuyers) ? e : ["https://googleads.g.doubleclick.net", "https://td.doubleclick.net"],
            sellerExperimentGroupId: 0,
            auctionSignals: b.auctionSignals.promise,
            sellerSignals: b.j.promise,
            sellerTimeout: 50,
            perBuyerExperimentGroupIds: {},
            perBuyerSignals: b.perBuyerSignals.promise,
            perBuyerTimeouts: b.perBuyerTimeouts.promise,
            perBuyerCumulativeTimeouts: b.perBuyerCumulativeTimeouts.promise,
            directFromSellerSignals: b.directFromSellerSignals.promise
        };
        return {
            seller: "https://securepubads.g.doubleclick.net",
            decisionLogicUrl: "https://securepubads.g.doubleclick.net/td/sjs",
            interestGroupBuyers: [],
            auctionSignals: {},
            sellerExperimentGroupId: 0,
            sellerSignals: b.topLevelSellerSignals.promise,
            sellerTimeout: 50,
            signal: c.signal,
            perBuyerExperimentGroupIds: {},
            perBuyerSignals: {},
            perBuyerTimeouts: {},
            perBuyerCumulativeTimeouts: {},
            componentAuctions: [a].concat(_.Ee(d)),
            directFromSellerSignals: b.directFromSellerSignals.promise,
            resolveToConfig: b.resolveToConfig.promise
        }
    };
    xq = function(a, b) {
        b = b.kf;
        b.topLevelSellerSignals.resolve(a.sellerSignals);
        b.directFromSellerSignals.resolve(a.directFromSellerSignals);
        b.resolveToConfig.resolve(!!a.resolveToConfig);
        var c;
        if (a = null == (c = a.componentAuctions) ? void 0 : _.z(c, "find").call(c, function(f) {
                return (_.E = ["https://securepubads.g.doubleclick.net", "https://pubads.g.doubleclick.net"], _.z(_.E, "includes")).call(_.E, f.seller)
            })) {
            b.auctionSignals.resolve(a.auctionSignals);
            b.j.resolve(a.sellerSignals);
            b.perBuyerSignals.resolve(a.perBuyerSignals);
            var d;
            b.perBuyerTimeouts.resolve(null != (d = a.perBuyerTimeouts) ? d : {});
            var e;
            b.perBuyerCumulativeTimeouts.resolve(null != (e = a.perBuyerCumulativeTimeouts) ? e : {})
        } else b.auctionSignals.resolve(void 0), b.j.resolve(void 0), b.perBuyerSignals.resolve({}), b.perBuyerTimeouts.resolve({}), b.perBuyerCumulativeTimeouts.resolve({})
    };
    Eq = function(a, b) {
        var c, d, e, f, g, h, k, l, m, n, p, t;
        return _.nb(function(u) {
            if (1 == u.j) return ("string" !== typeof a || _.z(a, "startsWith").call(a, "urn:")) && yq.deprecatedURNToURL && yq.deprecatedReplaceInURN ? _.ob(u, yq.deprecatedURNToURL(a), 2) : u.return();
            c = u.A;
            d = {};
            e = b.gdprApplies || "";
            (null != (f = c.match(zq)) ? f : []).forEach(function(v) {
                d[v] = e
            });
            g = b.vj || "";
            (null != (h = c.match(Aq)) ? h : []).forEach(function(v) {
                d[v] = g
            });
            k = b.Ci || "";
            (null != (l = c.match(Bq)) ? l : []).forEach(function(v) {
                d[v] = k
            });
            m = b.zi || "";
            (null != (n = c.match(Cq)) ? n : []).forEach(function(v) {
                d[v] = m
            });
            p = b.yi || "";
            (null != (t = c.match(Dq)) ? t : []).forEach(function(v) {
                d[v] = p
            });
            return _.ob(u, yq.deprecatedReplaceInURN(a, d), 0)
        })
    };
    Fq = function(a, b, c) {
        var d = "https://googleads.g.doubleclick.net/td/auctionwinner?status=nowinner",
            e = _.G(c, 18),
            f = _.G(c, 7);
        if (f || e) d += "&isContextualWinner=1";
        f && (d += "&hasXfpAds=1");
        e = c.getEscapedQemQueryId();
        f = _.R(c, 6);
        e && (d += "&winner_qid=" + encodeURIComponent(e));
        f && (d += "&xfpQid=" + encodeURIComponent(f));
        _.G(c, 4) && (d += "&is_plog=1");
        (e = _.R(c, 11)) && (d += "&ecrs=" + e);
        (null == c ? 0 : _.G(c, 21)) || (d += "&turtlexTest=1");
        d += "&applied_timeout_ms=" + (b + "&duration_ms=" + Math.round(a));
        Xp(d)
    };
    Gq = function() {
        return new _.w.Promise(function(a) {
            setTimeout(function() {
                a(null)
            }, 0)
        })
    };
    Hq = function(a, b) {
        var c = b.getEscapedQemQueryId(),
            d = _.R(b, 6);
        Wh("pre_run_ad_auction_ping", function(e) {
            ci(e, a);
            L(e, "winner_qid", null != c ? c : "");
            L(e, "xfpQid", null != d ? d : "");
            L(e, "publisher_tag", "gpt")
        }, 1)
    };
    Iq = function(a, b, c, d, e, f, g, h) {
        var k = 3 === b,
            l = 2 === b,
            m = 1 === b,
            n = f.getEscapedQemQueryId(),
            p = _.R(f, 6),
            t, u, v = null != (u = null == (t = g.componentAuctions) ? void 0 : t.length) ? u : 0;
        Wh("run_ad_auction_stats", function(x) {
            ci(x, a);
            L(x, "duration_ms", c);
            L(x, "applied_timeout_ms", d);
            L(x, "timed_out", l ? 1 : 0);
            L(x, "error", k ? 1 : 0);
            L(x, "auction_skipped", m ? 1 : 0);
            L(x, "auction_winner", h ? 1 : 0);
            L(x, "thread_release_only", _.G(f, 15) ? 1 : 0);
            L(x, "winner_qid", null != n ? n : "");
            L(x, "xfpQid", null != p ? p : "");
            L(x, "publisher_tag", "gpt");
            e && L(x, "parallel", "1");
            0 < v && L(x, "nc", v)
        }, 1)
    };
    Jq = function(a, b, c, d, e) {
        var f = e.getEscapedQemQueryId(),
            g = _.R(e, 6);
        Wh("run_ad_auction_complete", function(h) {
            ci(h, a);
            L(h, "duration_ms", Math.round(performance.now() - d));
            L(h, "applied_timeout_ms", c);
            L(h, "auction_has_winner", !!b);
            f && L(h, "winner_qid", f);
            g && L(h, "xfpQid", g)
        }, 1)
    };
    Kq = function(a) {
        return "function" === typeof FencedFrameConfig ? a instanceof FencedFrameConfig : !1
    };
    Lq = function(a) {
        return "gads_privacy_sandbox_td_buyerlist__" + a
    };
    Nq = function(a, b) {
        return a.filter(function(c) {
            return Mq(c, 2) > b
        })
    };
    Pq = function(a, b) {
        a = new _.w.Map(a.map(function(e) {
            return [_.R(e, 1), e]
        }));
        b = _.y(b);
        for (var c = b.next(); !c.done; c = b.next()) {
            c = c.value;
            var d = a.get(_.R(c, 1));
            d ? Oq(d, Math.max(Mq(c, 2), Mq(d, 2))) : a.set(_.R(c, 1), c)
        }
        return _.z(Array, "from").call(Array, _.z(a, "values").call(a))
    };
    Tq = function(a, b) {
        var c = Date.now();
        if (Qq(a, b)) return new _.w.Map;
        b = new _.w.Map(_.z(Object, "entries").call(Object, a).filter(function(k) {
            var l = _.y(k);
            k = l.next().value;
            l = l.next().value;
            return _.z(k, "startsWith").call(k, "gads_privacy_sandbox_td_buyerlist__") && l
        }).map(function(k) {
            var l = _.y(k);
            k = l.next().value;
            l = l.next().value;
            return [k, Rq(l)]
        }));
        for (var d = _.y(b), e = d.next(); !e.done; e = d.next()) {
            var f = _.y(e.value);
            e = f.next().value;
            f = f.next().value;
            var g = bh(f, Sq, 1),
                h = Nq(g, c);
            0 === h.length ? (b.delete(e), a.removeItem(e)) : h.length < g.length && (_.Fk(f, 1, h), a.setItem(e, Qj(f)))
        }
        return b
    };
    Qq = function(a, b) {
        if (!_.G(b, 3)) return !1;
        b = String(_.qf(_.R(b, 2) + _.R(b, 4) + _.G(b, 3)));
        if (a.getItem("gads_privacy_sandbox_tcf_hash") === b) return !1;
        for (var c = _.y(_.z(Object, "keys").call(Object, a).filter(function(e) {
                return _.z(e, "startsWith").call(e, "gads_privacy_sandbox_td_buyerlist__")
            })), d = c.next(); !d.done; d = c.next()) a.removeItem(d.value);
        a.setItem("gads_privacy_sandbox_tcf_hash", b);
        return !0
    };
    Uq = function(a) {
        var b = Date.now() + 864E5;
        return a.map(function(c) {
            var d = new Sq;
            c = _.rg(d, 1, c);
            return Oq(c, b)
        })
    };
    ar = function(a, b, c, d) {
        var e = Ch(a, document);
        e && Pf(e, window, d, !0);
        Vq(_.kf(Cg), "5", Wq(c.aa[a.getDomId()], 20));
        Xq(a, Yq, 801, {
            Lg: null,
            isBackfill: !1
        });
        if (_.Zq(b, a) && !Lh(a, document)) {
            b = c.fa;
            c = c.aa[a.getDomId()];
            var f;
            (null != (f = co(c, 10)) ? f : _.G(b, 11)) && ho(a, document, c, b)
        }
        Xq(a, $q, 825, {
            isEmpty: !0
        })
    };
    er = function(a, b, c, d, e, f, g, h, k, l, m, n, p, t, u, v, x) {
        if (br.runAdAuction && of ("run-ad-auction", document) && !_.H(cr) && v) {
            v = {
                Gh: new zp,
                hb: new Yn,
                gf: new Yn
            };
            var F = new $i;
            N(F, new dr(a, b, c, d, e, f, g, h, k, l, m, n, p, t, u, v, x));
            ij(F);
            return {
                Ja: F,
                Nk: v
            }
        }
    };
    gr = function(a, b, c, d, e, f, g) {
        if (b) {
            var h = b.Pb;
            if (b.Xh && 0 !== h) return b = new $i, a = new fr(a, h, c, d, e, f, g), N(b, a), ij(b), {
                Lk: a.m,
                Kk: b
            }
        }
    };
    hr = function() {
        for (var a = _.y(_.z(Array, "from").call(Array, document.getElementsByTagName("script"))), b = a.next(); !b.done; b = a.next()) {
            var c = b = b.value,
                d = b.src;
            d && (_.Ka(d, "/tag/js/gpt.js") || _.Ka(d, "/tag/js/gpt_mobile.js")) && !c.googletag_executed && b.textContent && (c.googletag_executed = !0, c = document.createElement("script"), b = new _.ve(b.textContent, we), Ya(c, b), document.head.appendChild(c), document.head.removeChild(c))
        }
    };
    ir = function(a, b) {
        b = _.y(_.z(Object, "entries").call(Object, b));
        for (var c = b.next(); !c.done; c = b.next()) {
            var d = _.y(c.value);
            c = d.next().value;
            d = d.next().value;
            a.hasOwnProperty(c) || (a[c] = d)
        }
    };
    lr = function(a, b, c) {
        var d = [];
        c = [].concat(_.Ee(c.ha)).slice();
        if (b) {
            if (!Array.isArray(b)) return Q(a, kk("googletag.destroySlots", [b])), !1;
            oa(b);
            d = c.filter(function(e) {
                return _.z(b, "includes").call(b, e.j)
            })
        } else d = c;
        if (!d.length) return !1;
        jr(d);
        kr(d);
        return !0
    };
    Cr = function(a, b, c, d, e, f, g, h, k, l) {
        var m = qm(),
            n, p, t = J(a, 74, function(v, x, F) {
                return e.defineSlot(a, b, v, x, F)
            }),
            u = {};
        t = (u._loaded_ = !0, u.cmd = [], u._vars_ = m._vars_, u.evalScripts = function() {
            try {
                hr()
            } catch (F) {
                Eg(a, 297, F);
                var v, x;
                null == (v = window.console) || null == (x = v.error) || x.call(v, F)
            }
        }, u.display = J(a, 95, function(v) {
            void mr(c, v, e)
        }), u.defineOutOfPageSlot = J(a, 73, function(v, x) {
            return (v = Uo(a, b, e, {
                Qg: x,
                adUnitPath: v
            })) ? v.j : null
        }), u.getVersion = J(a, 946, function() {
            return a.kc ? String(a.kc) : a.vb
        }), u.pubads = J(a, 947, function() {
            return Fl(a, b, c, e, h)
        }), u.companionAds = J(a, 816, function() {
            null != n || (n = new nr(a, b, c, f));
            return nk(a, b, n)
        }), u.content = J(a, 817, function() {
            null != p || (p = new or(a, b, g));
            return pk(a, b, p)
        }), u.setAdIframeTitle = J(a, 729, aq), u.getEventLog = J(a, 945, function() {
            return new pr(a, b)
        }), u.sizeMapping = J(a, 90, function() {
            return new qr(a, b)
        }), u.enableServices = J(a, 91, function() {
            for (var v = _.y(rr), x = v.next(); !x.done; x = v.next()) x = x.value, x.enabled && b.info(sr()), tr(x)
        }), u.destroySlots = J(a, 75, function(v) {
            return lr(b, v, e)
        }), u.enums = Ok(), u.defineSlot = t, u.defineUnit = t, u.getWindowsThatCanCommunicateWithHostpageLibrary = J(a, 955, function(v) {
            return ur(k, v).map(function(x) {
                var F;
                return null == (F = Lh(x, document)) ? void 0 : F.contentWindow
            }).filter(function(x) {
                return !!x
            })
        }), u.disablePublisherConsole = J(a, 93, Qm), u.onPubConsoleJsLoad = J(a, 731, Tm), u.openConsole = J(a, 732, function(v) {
            Lm = !0;
            var x;
            (null == (x = qm()) ? 0 : x.console) ? qm().console.openConsole(v): (v && (Sm = v), Rm = !0, Hm(a))
        }), u.setConfig = J(a, 1034, function(v) {
            if (_.la(v)) {
                var x = v.commerce,
                    F = v.pps;
                v = v.adExpansion;
                if (null === x) Ck(vr(d, wr, 33), 1);
                else if (void 0 !== x) {
                    var D = vr(d, wr, 33);
                    if (_.la(x)) {
                        var M = x.query,
                            B = x.categories,
                            K = x.productIds,
                            V = x.filter,
                            O = xr(D, yr, 1).clone();
                        null === M ? Ck(O, 1) : jo(M) ? rn(O, 1, M) : void 0 !== M && io(b, x, "query", M);
                        null === B ? Ck(O, 2) : ko(B) ? _.Kd(O, 2, B, _.Nc) : void 0 !== B && io(b, x, "categories", B);
                        null === K ? Ck(O, 3) : ko(K) ? _.Kd(O, 3, K, _.Nc) : void 0 !== K && io(b, x, "productIds", K);
                        null === V ? Ck(O, 4) : jo(V) ? rn(O, 4, V) : void 0 !== V && io(b, x, "filter", V);
                        null != _.Qi(O, 1) || _.zk(O, 2).length ? _.tg(D, 1, O) : Q(b, zr())
                    } else Q(b, kk("googletag.setConfig.commerce", [x]))
                }
                if (null === F) Ck(vr(d, wr, 33), 2);
                else if (void 0 !== F && (x = vr(vr(d, wr, 33), Ar, 2), "object" === typeof F && F.hasOwnProperty("taxonomies") ? D = !0 : (Q(b, kk("googletag.setConfig.pps", [F])), D = !1), D))
                    if (D = F.taxonomies, void 0 === D) ip("taxonomies", D, b, F);
                    else if (null === D) Ck(x, 1);
                else if (jp(D, b, F))
                    for (F = _.y(_.z(Object, "entries").call(Object, D)), M = F.next(); !M.done; M = F.next()) {
                        M = _.y(M.value);
                        var aa = M.next().value;
                        M = M.next().value;
                        B = x;
                        K = b;
                        O = D;
                        if (void 0 === aa || null === aa) ip("taxonomy", aa, K, O);
                        else {
                            V = Number(aa);
                            var ma = V,
                                ta = K,
                                da = O;
                            (_.E = _.z(Object, "values").call(Object, Nk), _.z(_.E, "includes")).call(_.E, Number(ma)) ? aa = !0 : (ip("taxonomy", aa, ta, da), aa = !1);
                            aa && void 0 !== M && (null === M ? lp(V, B) : (aa = K, "object" === typeof M && M.hasOwnProperty("values") ? O = !0 : (ip("taxonomyData", M, aa, O), O = !1), O && up(V, M, B, K)))
                        }
                    }
                void 0 === v || null === v ? Ck(d, 34) : (v = v.enabled, "boolean" === typeof v ? (v = Br(v), _.tg(d, 34, v)) : void 0 !== v && null !== v || Ck(d, 34))
            } else Q(b, kk("googletag.setConfig", [v]))
        }), u.apiReady = !0, u);
        cq(a, m, b, l);
        ir(m, t)
    };
    cs = function(a) {
        var b = window,
            c = new $i,
            d = new Dr(a, b);
        d = N(c, d).output;
        var e = _.H(mq) ? void 0 : pq(a, b, d);
        var f = new $i;
        var g = new Yr(a, b);
        N(f, g);
        ij(f);
        f = {
            dk: g.m
        };
        _.H(Zr) && N(c, new $r(a, b));
        if (Oa()) {
            g = {
                Dh: new Yn
            };
            var h = new $i;
            N(h, new as(a, window, g.Dh));
            ij(h);
            a = g
        } else a = void 0;
        g = b.navigator;
        h = b.document;
        b = _.H(cr);
        h = !!g.runAdAuction && of ("run-ad-auction", h);
        b = !b && h;
        h = _.tf(bs);
        b = {
            Xh: b,
            Pb: h,
            mk: !!g.getInterestGroupAdAuctionData
        };
        ij(c);
        return {
            ck: f,
            kk: a,
            rc: e,
            be: d,
            Jk: b
        }
    };
    ds = function(a) {
        .001 > _.pf() && mg({
            c: "sd",
            s: String(a)
        }, "gpt_whirs")
    };
    es = function(a) {
        var b = {
            threshold: [0, .3, .5, .75, 1]
        };
        return window.IntersectionObserver && new IntersectionObserver(a, b)
    };
    Ps = function(a, b, c, d, e, f, g, h, k, l, m, n, p, t, u, v, x, F, D, M) {
        var B = new $i,
            K = hh(!0, window),
            V = k.fa,
            O = k.aa[e.getDomId()],
            aa = M.be,
            ma = _.H(mq) ? null == D ? void 0 : D.rc : M.rc,
            ta = new fs(a, window);
        N(B, ta);
        var da = m.Aj,
            xa = m.Sk;
        M = m.nj;
        var Da = m.Bb,
            Ia = m.Di,
            Qb = m.Fj,
            gb = m.Se,
            dc = m.uj,
            jc = m.wf,
            Ke = m.Td,
            sc = m.Qk,
            If = m.Ej,
            vd = m.Oj,
            Gc = m.rg,
            Hc = m.Bj,
            Yc = m.fj,
            Rb = m.hb,
            Jf = m.Yh;
        D = m.Hd;
        var Kf = m.Ni,
            Zd = new Yn;
        Zd.G(p);
        var $d = new gs(a, window.top, Zd);
        N(B, $d);
        var Le = new hs(a, Ko(O), K.height, jc, da);
        N(B, Le);
        var Ib = new is(a, e, Ch(e, n), e.getDomId(), Kh(e), n.documentElement, Ko(O), h, f);
        js(B, Ib);
        m = new Yn;
        m.Ta(Ib.o.promise.then(function(Xh) {
            return Xh.output
        }));
        Ib = new ks(a, Rb, Ia, Qb, gb);
        N(B, Ib);
        Rb = new ls(a, _.Zg(V, ms, 5));
        N(B, Rb);
        da = new ns(a, window.location.hash, K.width, xa, da, m);
        N(B, da);
        xa = new os(a, e.getAdUnitPath(), O, f, Ke, xa, Le.output, da.F, da.B, Ib.output, m);
        N(B, xa);
        gb = new ps(a, V, O, Ia, gb, xa.I);
        N(B, gb);
        if (f = er(a, e, $d.output, O, h, p, f, xa.hb, xa.m, m, t, k, F, Da, Jf, g, u)) {
            _.S(B, f.Ja);
            var Bb = f.Nk
        }
        var ec, Ta;
        f = null != (Ta = null == (ec = Bb) ? void 0 : ec.hb) ? Ta : xa.hb;
        var Sb, wd;
        ec = null != (wd = null == (Sb = Bb) ? void 0 : Sb.gf) ? wd : xa.m;
        var kc;
        Bb = null == (kc = Bb) ? void 0 : kc.Gh;
        kc = new qs(a, e, V, O, Ko(O), n, h, m, gb.output, ec, M, Bb);
        N(B, kc);
        Sb = new rs(a, kc.output);
        N(B, Sb);
        wd = new ss(a, e, K, h, Sb.output, Rb.m, Bb);
        N(B, wd);
        Sb = new ts(a, window, m);
        N(B, Sb);
        Rb = new us(a, wd.output, kc.output, Rb.m, Bb);
        N(B, Rb);
        K = new vs(a, n, e, O, K, M, m, kc.output, ec, xa.Td, Sb.output, Da, Bb);
        N(B, K);
        sc = new ws(a, V, O, f, gb.output, sc);
        N(B, sc);
        Yc = new xs(a, window, Yc, ta.output, Bb);
        N(B, Yc);
        Sb = new ys(a, Ko(O), n);
        N(B, Sb);
        x = new zs(a, x, Ko(O), jc, dc, Bb);
        N(B, x);
        vd = new As(a, vd, Bb);
        N(B, vd);
        (ma = tq(a, ma, Kf)) && _.S(B, ma);
        l = new Bs(a, e, h, k, v, l, window, f, gb.output, Rb.output, m, kc.output, ec, Da, M, sc.output, Qb, If, Gc, K.output, Yc.output, Sb.output, x.output, Jf, aa, Bb);
        N(B, l);
        aa = new Cs(a, window, e, l.B, Zd);
        N(B, aa);
        switch (Ko(O)) {
            case 2:
            case 3:
                _.H(Ds) ? N(B, new Es(a, h, Ko(O), e, window, jc, l.m, m, x.output, ec)) : N(B, new Fs(a, h, Ko(O), e, window, jc, l.m, m, x.output, ec));
                break;
            case 5:
                N(B, new Gs(a, e, k.Pc, window, dc, l.m, m, $d.output, x.output, Da));
                break;
            case 4:
                k = new Hs(a, e, v, window, l.m, m);
                _.S(B, k);
                ij(k);
                break;
            case 7:
                js(B, ep(a, e, v, l.m, m))
        }
        n = new Is(a, e, l.m, n, v);
        N(B, n);
        n = new Js(a, e, Ks(h, e), window.top);
        N(B, n);
        h = new Ls(a, Ks(h, e), window.top, l.m, ta.output, n.output, n.m);
        N(B, h);
        N(B, new Ms(a, e, M, Ia, Gc, l.m, kc.output, l.F));
        e = new Ns(a, window, Hc, l.m, kc.output, m);
        N(B, e);
        N(B, new Os(a, qm(), V, b, c, d, D));
        return B
    };
    Ss = function(a, b, c) {
        var d = null;
        try {
            var e = Qs(b.top.document, b.top).y;
            d = a.map(function(f) {
                var g = c.fa,
                    h = c.aa[f.getDomId()],
                    k;
                f = null == (k = Ih(f, h, b.document, eo(g, h))) ? void 0 : k.y;
                k = hh(!0, b).height;
                return void 0 === f || -12245933 === f || -12245933 === k ? -1 : f < e + k ? 0 : ++Rs
            })
        } catch (f) {}
        return d
    };
    $s = function(a) {
        return Gg(a.ma.context, 1132, function() {
            if (a.na.ha.length) {
                var b = new _.w.Set(vf(Ts));
                for (var c = _.y(_.G(a.ma.da, 8) ? "loc gpic cookie ms ppid top etu uule video_doc_id".split(" ") : []), d = c.next(); !d.done; d = c.next()) b.add(d.value);
                d = new _.w.Map;
                c = _.y(Us);
                for (var e = c.next(); !e.done; e = c.next()) e = e.value, e(a, d);
                c = "https://" + (Vs(a) ? "pagead2.googlesyndication.com" : "securepubads.g.doubleclick.net") + "/gampad/ads?";
                d = _.y(d);
                for (e = d.next(); !e.done; e = d.next()) {
                    var f = _.y(e.value);
                    e = f.next().value;
                    var g = f.next().value;
                    f = g.value;
                    g = void 0 === g.options ? {} : g.options;
                    (new RegExp("[?&]" + e + "=")).test(c);
                    if (!b.has(e) && null != f) {
                        var h = void 0 === g.Ea ? "," : g.Ea,
                            k = void 0 === g.Da ? !1 : g.Da,
                            l = void 0 === g.Nb ? !1 : g.Nb;
                        if (f = "object" !== typeof f ? null == f || !k && 0 === f ? null : encodeURIComponent(f) : Array.isArray(f) && f.length ? _.H(Vn) && l || _.H(Ws) ? Xs(f, g) : encodeURIComponent(f.join(h)) : null) "?" !== c[c.length - 1] && (c += "&"), c += e + "=" + f
                    }
                }
                if (1 === _.tf(Ys) || 2 === _.tf(Ys)) b = _.tf(Zs), b = 0 >= b ? "" : (_.E = _.z(Array, "from").call(Array, {
                    length: Math.ceil(b / 8)
                }), _.z(_.E, "fill")).call(_.E, "testdata").join("").substring(0, b), 2 === _.tf(Ys) && (c += "&dblt=" + b);
                b = c
            } else b = "";
            return b
        })
    };
    Vs = function(a) {
        var b = a.ma.da,
            c, d;
        a = null != (d = null == (c = at(a.na.W.fa)) ? void 0 : _.G(c, 9)) ? d : !1;
        c = _.G(b, 8);
        return a || c || !_.G(b, 5)
    };
    Xs = function(a, b) {
        var c = void 0 === b.Ea ? "," : b.Ea,
            d = void 0 === b.Uc ? "" : b.Uc,
            e = void 0 === b.Da ? !1 : b.Da,
            f = !1;
        a = a.map(function(g) {
            f || (f = !!g);
            return String(0 === g && e ? g : g || d)
        });
        return f || e ? encodeURIComponent(a.join(c)) : null
    };
    ct = function(a, b, c, d, e) {
        bt(c, d) ? e(zg(a, 646, b), 0) : b()
    };
    bt = function(a, b) {
        if (0 === a) return !1;
        var c = _.tf(dt);
        switch (c) {
            case 0:
                return !1;
            case 1:
                return !0;
            case 2:
                var d;
                return void 0 !== (null == (d = b.uk) ? void 0 : d.Kj) ? b.uk.Kj() : !0;
            case 3:
                return 0 === a % 2;
            case 4:
                return 0 === a % 5;
            default:
                _.Va(c)
        }
    };
    et = function(a) {
        function b(f) {
            var g = f;
            return function() {
                var h = _.jb.apply(0, arguments);
                if (g) {
                    var k = g;
                    g = null;
                    k.apply(null, _.Ee(h))
                }
            }
        }
        var c = null,
            d = 0,
            e = 0;
        return function() {
            var f, g, h, k;
            return _.nb(function(l) {
                if (1 == l.j) return d && clearTimeout(d), d = 0, f = new _.Cf, g = b(f.resolve), h = ++e, _.ob(l, 0, 2);
                if (e !== h) return g(!1), l.return(f.promise);
                c ? c(!1) : g(!0);
                k = b(function() {
                    c = null;
                    d = 0;
                    g(!0)
                });
                d = setTimeout(k, 1E3);
                _.Vo(a, function() {
                    return void g(!1)
                });
                c = g;
                return l.return(f.promise)
            })
        }
    };
    nt = function() {
        var a = new ft;
        var b = (new gt).setCorrelator(_.Kg(_.r));
        var c = _.nf().join();
        b = _.rg(b, 5, c);
        b = _.I(b, 2, 1);
        a = _.tg(a, 1, b);
        b = new ht;
        c = _.H(jt);
        b = _.Mp(b, 7, c);
        c = _.H(kt);
        b = _.Mp(b, 8, c);
        c = _.H(lt);
        b = _.Mp(b, 9, c);
        b = _.Mp(b, 10, !0);
        c = _.H(mt);
        b = _.Mp(b, 13, c);
        b = _.Mp(b, 16, !0);
        a = _.tg(a, 2, b);
        window.google_rum_config = a.toJSON()
    };
    pt = function() {
        var a = ot,
            b = Number(a);
        return 1 > b || Math.floor(b) !== b ? (mg({
            v: a
        }, "gpt_inv_ver"), "1") : a
    };
    st = function(a, b) {
        var c = qt() || (0, _.rt)() ? 1 : _.pf(),
            d = .001 > c;
        d ? (b.m = !0, mf(31067358)) : .002 > c && mf(31067357);
        hl(23, a);
        return {
            Kd: d,
            Rj: 1E3,
            xk: 1E-4 > c,
            Qj: 1E4,
            Qh: d,
            Tg: 1E3
        }
    };
    vt = function(a, b) {
        var c = b.xb;
        /m\d+/.test(c) ? c = Number(c.substring(1)) : (c && mg({
            mjsv: c
        }, "gpt_inv_ver"), c = void 0);
        var d = window.document.URL,
            e = _.tf(tt);
        e = new ut(4, b.xb, e);
        return _.z(Object, "assign").call(Object, {}, b, a, {
            kc: c,
            Sb: e,
            bj: d,
            Vg: 2012
        })
    };
    _.wt = function(a) {
        var b;
        a = (null != (b = void 0 === a ? null : a) ? b : window).googletag;
        return (null == a ? 0 : a.apiReady) ? a : void 0
    };
    _.ba = [];
    xt = function(a) {
        var b = 0;
        return function() {
            return b < a.length ? {
                done: !1,
                value: a[b++]
            } : {
                done: !0
            }
        }
    };
    yt = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
        if (a == Array.prototype || a == Object.prototype) return a;
        a[b] = c.value;
        return a
    };
    zt = function(a) {
        a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
        for (var b = 0; b < a.length; ++b) {
            var c = a[b];
            if (c && c.Math == Math) return c
        }
        throw Error("Cannot find global object");
    };
    _.At = zt(this);
    Bt = "function" === typeof Symbol && "symbol" === typeof Symbol("x");
    _.w = {};
    Ct = {};
    _.z = function(a, b, c) {
        if (!c || null != a) {
            c = Ct[b];
            if (null == c) return a[b];
            c = a[c];
            return void 0 !== c ? c : a[b]
        }
    };
    Dt = function(a, b, c) {
        if (b) a: {
            var d = a.split(".");a = 1 === d.length;
            var e = d[0],
                f;!a && e in _.w ? f = _.w : f = _.At;
            for (e = 0; e < d.length - 1; e++) {
                var g = d[e];
                if (!(g in f)) break a;
                f = f[g]
            }
            d = d[d.length - 1];c = Bt && "es6" === c ? f[d] : null;b = b(c);null != b && (a ? yt(_.w, d, {
                configurable: !0,
                writable: !0,
                value: b
            }) : b !== c && (void 0 === Ct[d] && (a = 1E9 * Math.random() >>> 0, Ct[d] = Bt ? _.At.Symbol(d) : "$jscp$" + a + "$" + d), yt(f, Ct[d], {
                configurable: !0,
                writable: !0,
                value: b
            })))
        }
    };
    Dt("Symbol", function(a) {
        if (a) return a;
        var b = function(f, g) {
            this.j = f;
            yt(this, "description", {
                configurable: !0,
                writable: !0,
                value: g
            })
        };
        b.prototype.toString = function() {
            return this.j
        };
        var c = "jscomp_symbol_" + (1E9 * Math.random() >>> 0) + "_",
            d = 0,
            e = function(f) {
                if (this instanceof e) throw new TypeError("Symbol is not a constructor");
                return new b(c + (f || "") + "_" + d++, f)
            };
        return e
    }, "es6");
    Dt("Symbol.iterator", function(a) {
        if (a) return a;
        a = (0, _.w.Symbol)("Symbol.iterator");
        for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) {
            var d = _.At[b[c]];
            "function" === typeof d && "function" != typeof d.prototype[a] && yt(d.prototype, a, {
                configurable: !0,
                writable: !0,
                value: function() {
                    return Et(xt(this))
                }
            })
        }
        return a
    }, "es6");
    Et = function(a) {
        a = {
            next: a
        };
        a[_.z(_.w.Symbol, "iterator")] = function() {
            return this
        };
        return a
    };
    _.Ft = function(a) {
        return a.raw = a
    };
    Gt = function(a, b) {
        a.raw = b;
        return a
    };
    _.y = function(a) {
        var b = "undefined" != typeof _.w.Symbol && _.z(_.w.Symbol, "iterator") && a[_.z(_.w.Symbol, "iterator")];
        if (b) return b.call(a);
        if ("number" == typeof a.length) return {
            next: xt(a)
        };
        throw Error(String(a) + " is not an iterable or ArrayLike");
    };
    _.Ee = function(a) {
        if (!(a instanceof Array)) {
            a = _.y(a);
            for (var b, c = []; !(b = a.next()).done;) c.push(b.value);
            a = c
        }
        return a
    };
    Ht = function(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    };
    It = Bt && "function" == typeof _.z(Object, "assign") ? _.z(Object, "assign") : function(a, b) {
        for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c];
            if (d)
                for (var e in d) Ht(d, e) && (a[e] = d[e])
        }
        return a
    };
    Dt("Object.assign", function(a) {
        return a || It
    }, "es6");
    var Jt = "function" == typeof Object.create ? Object.create : function(a) {
            var b = function() {};
            b.prototype = a;
            return new b
        },
        Kt = function() {
            function a() {
                function c() {}
                new c;
                Reflect.construct(c, [], function() {});
                return new c instanceof c
            }
            if (Bt && "undefined" != typeof Reflect && Reflect.construct) {
                if (a()) return Reflect.construct;
                var b = Reflect.construct;
                return function(c, d, e) {
                    c = b(c, d);
                    e && Reflect.setPrototypeOf(c, e.prototype);
                    return c
                }
            }
            return function(c, d, e) {
                void 0 === e && (e = c);
                e = Jt(e.prototype || Object.prototype);
                return Function.prototype.apply.call(c, e, d) || e
            }
        }(),
        Lt;
    if (Bt && "function" == typeof _.z(Object, "setPrototypeOf")) Lt = _.z(Object, "setPrototypeOf");
    else {
        var Mt;
        a: {
            var Nt = {
                    a: !0
                },
                Ot = {};
            try {
                Ot.__proto__ = Nt;
                Mt = Ot.a;
                break a
            } catch (a) {}
            Mt = !1
        }
        Lt = Mt ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    Pt = Lt;
    _.T = function(a, b) {
        a.prototype = Jt(b.prototype);
        a.prototype.constructor = a;
        if (Pt) Pt(a, b);
        else
            for (var c in b)
                if ("prototype" != c)
                    if (Object.defineProperties) {
                        var d = Object.getOwnPropertyDescriptor(b, c);
                        d && Object.defineProperty(a, c, d)
                    } else a[c] = b[c];
        a.Ek = b.prototype
    };
    Qt = function() {
        this.m = !1;
        this.C = null;
        this.A = void 0;
        this.j = 1;
        this.B = this.o = 0;
        this.K = null
    };
    Rt = function(a) {
        if (a.m) throw new TypeError("Generator is already running");
        a.m = !0
    };
    Qt.prototype.J = function(a) {
        this.A = a
    };
    var St = function(a, b) {
        a.K = {
            exception: b,
            Hj: !0
        };
        a.j = a.o || a.B
    };
    Qt.prototype.return = function(a) {
        this.K = {
            return: a
        };
        this.j = this.B
    };
    _.ob = function(a, b, c) {
        a.j = c;
        return {
            value: b
        }
    };
    qb = function(a) {
        a.o = 0;
        var b = a.K.exception;
        a.K = null;
        return b
    };
    Tt = function(a) {
        this.j = new Qt;
        this.A = a
    };
    Wt = function(a, b) {
        Rt(a.j);
        var c = a.j.C;
        if (c) return Ut(a, "return" in c ? c["return"] : function(d) {
            return {
                value: d,
                done: !0
            }
        }, b, a.j.return);
        a.j.return(b);
        return Vt(a)
    };
    Ut = function(a, b, c, d) {
        try {
            var e = b.call(a.j.C, c);
            if (!(e instanceof Object)) throw new TypeError("Iterator result " + e + " is not an object");
            if (!e.done) return a.j.m = !1, e;
            var f = e.value
        } catch (g) {
            return a.j.C = null, St(a.j, g), Vt(a)
        }
        a.j.C = null;
        d.call(a.j, f);
        return Vt(a)
    };
    Vt = function(a) {
        for (; a.j.j;) try {
            var b = a.A(a.j);
            if (b) return a.j.m = !1, {
                value: b.value,
                done: !1
            }
        } catch (c) {
            a.j.A = void 0, St(a.j, c)
        }
        a.j.m = !1;
        if (a.j.K) {
            b = a.j.K;
            a.j.K = null;
            if (b.Hj) throw b.exception;
            return {
                value: b.return,
                done: !0
            }
        }
        return {
            value: void 0,
            done: !0
        }
    };
    Xt = function(a) {
        this.next = function(b) {
            Rt(a.j);
            a.j.C ? b = Ut(a, a.j.C.next, b, a.j.J) : (a.j.J(b), b = Vt(a));
            return b
        };
        this.throw = function(b) {
            Rt(a.j);
            a.j.C ? b = Ut(a, a.j.C["throw"], b, a.j.J) : (St(a.j, b), b = Vt(a));
            return b
        };
        this.return = function(b) {
            return Wt(a, b)
        };
        this[_.z(_.w.Symbol, "iterator")] = function() {
            return this
        }
    };
    Yt = function(a) {
        function b(d) {
            return a.next(d)
        }

        function c(d) {
            return a.throw(d)
        }
        return new _.w.Promise(function(d, e) {
            function f(g) {
                g.done ? d(g.value) : _.w.Promise.resolve(g.value).then(b, c).then(f, e)
            }
            f(a.next())
        })
    };
    _.nb = function(a) {
        return Yt(new Xt(new Tt(a)))
    };
    _.jb = function() {
        for (var a = Number(this), b = [], c = a; c < arguments.length; c++) b[c - a] = arguments[c];
        return b
    };
    Dt("Reflect", function(a) {
        return a ? a : {}
    }, "es6");
    Dt("Reflect.construct", function() {
        return Kt
    }, "es6");
    Dt("Reflect.setPrototypeOf", function(a) {
        return a ? a : Pt ? function(b, c) {
            try {
                return Pt(b, c), !0
            } catch (d) {
                return !1
            }
        } : null
    }, "es6");
    Dt("Promise", function(a) {
        function b() {
            this.j = null
        }

        function c(g) {
            return g instanceof e ? g : new e(function(h) {
                h(g)
            })
        }
        if (a) return a;
        b.prototype.A = function(g) {
            if (null == this.j) {
                this.j = [];
                var h = this;
                this.o(function() {
                    h.K()
                })
            }
            this.j.push(g)
        };
        var d = _.At.setTimeout;
        b.prototype.o = function(g) {
            d(g, 0)
        };
        b.prototype.K = function() {
            for (; this.j && this.j.length;) {
                var g = this.j;
                this.j = [];
                for (var h = 0; h < g.length; ++h) {
                    var k = g[h];
                    g[h] = null;
                    try {
                        k()
                    } catch (l) {
                        this.C(l)
                    }
                }
            }
            this.j = null
        };
        b.prototype.C = function(g) {
            this.o(function() {
                throw g;
            })
        };
        var e = function(g) {
            this.A = 0;
            this.o = void 0;
            this.j = [];
            this.J = !1;
            var h = this.C();
            try {
                g(h.resolve, h.reject)
            } catch (k) {
                h.reject(k)
            }
        };
        e.prototype.C = function() {
            function g(l) {
                return function(m) {
                    k || (k = !0, l.call(h, m))
                }
            }
            var h = this,
                k = !1;
            return {
                resolve: g(this.ua),
                reject: g(this.K)
            }
        };
        e.prototype.ua = function(g) {
            if (g === this) this.K(new TypeError("A Promise cannot resolve to itself"));
            else if (g instanceof e) this.V(g);
            else {
                a: switch (typeof g) {
                    case "object":
                        var h = null != g;
                        break a;
                    case "function":
                        h = !0;
                        break a;
                    default:
                        h = !1
                }
                h ? this.I(g) : this.m(g)
            }
        };
        e.prototype.I = function(g) {
            var h = void 0;
            try {
                h = g.then
            } catch (k) {
                this.K(k);
                return
            }
            "function" == typeof h ? this.Z(h, g) : this.m(g)
        };
        e.prototype.K = function(g) {
            this.B(2, g)
        };
        e.prototype.m = function(g) {
            this.B(1, g)
        };
        e.prototype.B = function(g, h) {
            if (0 != this.A) throw Error("Cannot settle(" + g + ", " + h + "): Promise already settled in state" + this.A);
            this.A = g;
            this.o = h;
            2 === this.A && this.M();
            this.T()
        };
        e.prototype.M = function() {
            var g = this;
            d(function() {
                if (g.F()) {
                    var h = _.At.console;
                    "undefined" !== typeof h && h.error(g.o)
                }
            }, 1)
        };
        e.prototype.F = function() {
            if (this.J) return !1;
            var g = _.At.CustomEvent,
                h = _.At.Event,
                k = _.At.dispatchEvent;
            if ("undefined" === typeof k) return !0;
            "function" === typeof g ? g = new g("unhandledrejection", {
                cancelable: !0
            }) : "function" === typeof h ? g = new h("unhandledrejection", {
                cancelable: !0
            }) : (g = _.At.document.createEvent("CustomEvent"), g.initCustomEvent("unhandledrejection", !1, !0, g));
            g.promise = this;
            g.reason = this.o;
            return k(g)
        };
        e.prototype.T = function() {
            if (null != this.j) {
                for (var g = 0; g < this.j.length; ++g) f.A(this.j[g]);
                this.j = null
            }
        };
        var f = new b;
        e.prototype.V = function(g) {
            var h = this.C();
            g.Xd(h.resolve, h.reject)
        };
        e.prototype.Z = function(g, h) {
            var k = this.C();
            try {
                g.call(h, k.resolve, k.reject)
            } catch (l) {
                k.reject(l)
            }
        };
        e.prototype.then = function(g, h) {
            function k(p, t) {
                return "function" == typeof p ? function(u) {
                    try {
                        l(p(u))
                    } catch (v) {
                        m(v)
                    }
                } : t
            }
            var l, m, n = new e(function(p, t) {
                l = p;
                m = t
            });
            this.Xd(k(g, l), k(h, m));
            return n
        };
        e.prototype.catch = function(g) {
            return this.then(void 0, g)
        };
        e.prototype.Xd = function(g, h) {
            function k() {
                switch (l.A) {
                    case 1:
                        g(l.o);
                        break;
                    case 2:
                        h(l.o);
                        break;
                    default:
                        throw Error("Unexpected state: " + l.A);
                }
            }
            var l = this;
            null == this.j ? f.A(k) : this.j.push(k);
            this.J = !0
        };
        e.resolve = c;
        e.reject = function(g) {
            return new e(function(h, k) {
                k(g)
            })
        };
        e.race = function(g) {
            return new e(function(h, k) {
                for (var l = _.y(g), m = l.next(); !m.done; m = l.next()) c(m.value).Xd(h, k)
            })
        };
        e.all = function(g) {
            var h = _.y(g),
                k = h.next();
            return k.done ? c([]) : new e(function(l, m) {
                function n(u) {
                    return function(v) {
                        p[u] = v;
                        t--;
                        0 == t && l(p)
                    }
                }
                var p = [],
                    t = 0;
                do p.push(void 0), t++, c(k.value).Xd(n(p.length - 1), m), k = h.next(); while (!k.done)
            })
        };
        return e
    }, "es6");
    Dt("Object.setPrototypeOf", function(a) {
        return a || Pt
    }, "es6");
    Dt("WeakMap", function(a) {
        function b() {}

        function c(g) {
            var h = typeof g;
            return "object" === h && null !== g || "function" === h
        }
        if (function() {
                if (!a || !Object.seal) return !1;
                try {
                    var g = Object.seal({}),
                        h = Object.seal({}),
                        k = new a([
                            [g, 2],
                            [h, 3]
                        ]);
                    if (2 != k.get(g) || 3 != k.get(h)) return !1;
                    k.delete(g);
                    k.set(h, 4);
                    return !k.has(g) && 4 == k.get(h)
                } catch (l) {
                    return !1
                }
            }()) return a;
        var d = "$jscomp_hidden_" + Math.random(),
            e = 0,
            f = function(g) {
                this.j = (e += Math.random() + 1).toString();
                if (g) {
                    g = _.y(g);
                    for (var h; !(h = g.next()).done;) h = h.value, this.set(h[0], h[1])
                }
            };
        f.prototype.set = function(g, h) {
            if (!c(g)) throw Error("Invalid WeakMap key");
            if (!Ht(g, d)) {
                var k = new b;
                yt(g, d, {
                    value: k
                })
            }
            if (!Ht(g, d)) throw Error("WeakMap key fail: " + g);
            g[d][this.j] = h;
            return this
        };
        f.prototype.get = function(g) {
            return c(g) && Ht(g, d) ? g[d][this.j] : void 0
        };
        f.prototype.has = function(g) {
            return c(g) && Ht(g, d) && Ht(g[d], this.j)
        };
        f.prototype.delete = function(g) {
            return c(g) && Ht(g, d) && Ht(g[d], this.j) ? delete g[d][this.j] : !1
        };
        return f
    }, "es6");
    Dt("Map", function(a) {
        if (function() {
                if (!a || "function" != typeof a || !_.z(a.prototype, "entries") || "function" != typeof Object.seal) return !1;
                try {
                    var h = Object.seal({
                            x: 4
                        }),
                        k = new a(_.y([
                            [h, "s"]
                        ]));
                    if ("s" != k.get(h) || 1 != k.size || k.get({
                            x: 4
                        }) || k.set({
                            x: 4
                        }, "t") != k || 2 != k.size) return !1;
                    var l = _.z(k, "entries").call(k),
                        m = l.next();
                    if (m.done || m.value[0] != h || "s" != m.value[1]) return !1;
                    m = l.next();
                    return m.done || 4 != m.value[0].x || "t" != m.value[1] || !l.next().done ? !1 : !0
                } catch (n) {
                    return !1
                }
            }()) return a;
        var b = new _.w.WeakMap,
            c = function(h) {
                this[0] = {};
                this[1] = f();
                this.size = 0;
                if (h) {
                    h = _.y(h);
                    for (var k; !(k = h.next()).done;) k = k.value, this.set(k[0], k[1])
                }
            };
        c.prototype.set = function(h, k) {
            h = 0 === h ? 0 : h;
            var l = d(this, h);
            l.list || (l.list = this[0][l.id] = []);
            l.Qa ? l.Qa.value = k : (l.Qa = {
                next: this[1],
                Gb: this[1].Gb,
                head: this[1],
                key: h,
                value: k
            }, l.list.push(l.Qa), this[1].Gb.next = l.Qa, this[1].Gb = l.Qa, this.size++);
            return this
        };
        c.prototype.delete = function(h) {
            h = d(this, h);
            return h.Qa && h.list ? (h.list.splice(h.index, 1), h.list.length || delete this[0][h.id], h.Qa.Gb.next = h.Qa.next, h.Qa.next.Gb = h.Qa.Gb, h.Qa.head = null, this.size--, !0) : !1
        };
        c.prototype.clear = function() {
            this[0] = {};
            this[1] = this[1].Gb = f();
            this.size = 0
        };
        c.prototype.has = function(h) {
            return !!d(this, h).Qa
        };
        c.prototype.get = function(h) {
            return (h = d(this, h).Qa) && h.value
        };
        c.prototype.entries = function() {
            return e(this, function(h) {
                return [h.key, h.value]
            })
        };
        c.prototype.keys = function() {
            return e(this, function(h) {
                return h.key
            })
        };
        c.prototype.values = function() {
            return e(this, function(h) {
                return h.value
            })
        };
        c.prototype.forEach = function(h, k) {
            for (var l = _.z(this, "entries").call(this), m; !(m = l.next()).done;) m = m.value, h.call(k, m[1], m[0], this)
        };
        c.prototype[_.z(_.w.Symbol, "iterator")] = _.z(c.prototype, "entries");
        var d = function(h, k) {
                var l = k && typeof k;
                "object" == l || "function" == l ? b.has(k) ? l = b.get(k) : (l = "" + ++g, b.set(k, l)) : l = "p_" + k;
                var m = h[0][l];
                if (m && Ht(h[0], l))
                    for (h = 0; h < m.length; h++) {
                        var n = m[h];
                        if (k !== k && n.key !== n.key || k === n.key) return {
                            id: l,
                            list: m,
                            index: h,
                            Qa: n
                        }
                    }
                return {
                    id: l,
                    list: m,
                    index: -1,
                    Qa: void 0
                }
            },
            e = function(h, k) {
                var l = h[1];
                return Et(function() {
                    if (l) {
                        for (; l.head != h[1];) l = l.Gb;
                        for (; l.next != l.head;) return l = l.next, {
                            done: !1,
                            value: k(l)
                        };
                        l = null
                    }
                    return {
                        done: !0,
                        value: void 0
                    }
                })
            },
            f = function() {
                var h = {};
                return h.Gb = h.next = h.head = h
            },
            g = 0;
        return c
    }, "es6");
    var Zt = function(a, b) {
        a instanceof String && (a += "");
        var c = 0,
            d = !1,
            e = {
                next: function() {
                    if (!d && c < a.length) {
                        var f = c++;
                        return {
                            value: b(f, a[f]),
                            done: !1
                        }
                    }
                    d = !0;
                    return {
                        done: !0,
                        value: void 0
                    }
                }
            };
        e[_.z(_.w.Symbol, "iterator")] = function() {
            return e
        };
        return e
    };
    Dt("Array.prototype.entries", function(a) {
        return a ? a : function() {
            return Zt(this, function(b, c) {
                return [b, c]
            })
        }
    }, "es6");
    Dt("Array.prototype.keys", function(a) {
        return a ? a : function() {
            return Zt(this, function(b) {
                return b
            })
        }
    }, "es6");
    var $t = function(a, b, c) {
        if (null == a) throw new TypeError("The 'this' value for String.prototype." + c + " must not be null or undefined");
        if (b instanceof RegExp) throw new TypeError("First argument to String.prototype." + c + " must not be a regular expression");
        return a + ""
    };
    Dt("String.prototype.endsWith", function(a) {
        return a ? a : function(b, c) {
            var d = $t(this, b, "endsWith");
            void 0 === c && (c = d.length);
            c = Math.max(0, Math.min(c | 0, d.length));
            for (var e = b.length; 0 < e && 0 < c;)
                if (d[--c] != b[--e]) return !1;
            return 0 >= e
        }
    }, "es6");
    var au = function(a, b, c) {
        a instanceof String && (a = String(a));
        for (var d = a.length, e = 0; e < d; e++) {
            var f = a[e];
            if (b.call(c, f, e, a)) return {
                i: e,
                di: f
            }
        }
        return {
            i: -1,
            di: void 0
        }
    };
    Dt("Array.prototype.find", function(a) {
        return a ? a : function(b, c) {
            return au(this, b, c).di
        }
    }, "es6");
    Dt("Math.trunc", function(a) {
        return a ? a : function(b) {
            b = Number(b);
            if (isNaN(b) || Infinity === b || -Infinity === b || 0 === b) return b;
            var c = Math.floor(Math.abs(b));
            return 0 > b ? -c : c
        }
    }, "es6");
    Dt("Object.values", function(a) {
        return a ? a : function(b) {
            var c = [],
                d;
            for (d in b) Ht(b, d) && c.push(b[d]);
            return c
        }
    }, "es8");
    Dt("Object.is", function(a) {
        return a ? a : function(b, c) {
            return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c
        }
    }, "es6");
    Dt("Array.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            var d = this;
            d instanceof String && (d = String(d));
            var e = d.length;
            c = c || 0;
            for (0 > c && (c = Math.max(c + e, 0)); c < e; c++) {
                var f = d[c];
                if (f === b || _.z(Object, "is").call(Object, f, b)) return !0
            }
            return !1
        }
    }, "es7");
    Dt("String.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            return -1 !== $t(this, b, "includes").indexOf(b, c || 0)
        }
    }, "es6");
    Dt("Number.EPSILON", function() {
        return Math.pow(2, -52)
    }, "es6");
    Dt("Number.isFinite", function(a) {
        return a ? a : function(b) {
            return "number" !== typeof b ? !1 : !isNaN(b) && Infinity !== b && -Infinity !== b
        }
    }, "es6");
    Dt("Number.isInteger", function(a) {
        return a ? a : function(b) {
            return _.z(Number, "isFinite").call(Number, b) ? b === Math.floor(b) : !1
        }
    }, "es6");
    Dt("Number.isNaN", function(a) {
        return a ? a : function(b) {
            return "number" === typeof b && isNaN(b)
        }
    }, "es6");
    Dt("Array.from", function(a) {
        return a ? a : function(b, c, d) {
            c = null != c ? c : function(h) {
                return h
            };
            var e = [],
                f = "undefined" != typeof _.w.Symbol && _.z(_.w.Symbol, "iterator") && b[_.z(_.w.Symbol, "iterator")];
            if ("function" == typeof f) {
                b = f.call(b);
                for (var g = 0; !(f = b.next()).done;) e.push(c.call(d, f.value, g++))
            } else
                for (f = b.length, g = 0; g < f; g++) e.push(c.call(d, b[g], g));
            return e
        }
    }, "es6");
    Dt("Array.prototype.values", function(a) {
        return a ? a : function() {
            return Zt(this, function(b, c) {
                return c
            })
        }
    }, "es8");
    Dt("Array.prototype.fill", function(a) {
        return a ? a : function(b, c, d) {
            var e = this.length || 0;
            0 > c && (c = Math.max(0, e + c));
            if (null == d || d > e) d = e;
            d = Number(d);
            0 > d && (d = Math.max(0, e + d));
            for (c = Number(c || 0); c < d; c++) this[c] = b;
            return this
        }
    }, "es6");
    var bu = function(a) {
        return a ? a : _.z(Array.prototype, "fill")
    };
    Dt("Int8Array.prototype.fill", bu, "es6");
    Dt("Uint8Array.prototype.fill", bu, "es6");
    Dt("Uint8ClampedArray.prototype.fill", bu, "es6");
    Dt("Int16Array.prototype.fill", bu, "es6");
    Dt("Uint16Array.prototype.fill", bu, "es6");
    Dt("Int32Array.prototype.fill", bu, "es6");
    Dt("Uint32Array.prototype.fill", bu, "es6");
    Dt("Float32Array.prototype.fill", bu, "es6");
    Dt("Float64Array.prototype.fill", bu, "es6");
    Dt("Set", function(a) {
        if (function() {
                if (!a || "function" != typeof a || !_.z(a.prototype, "entries") || "function" != typeof Object.seal) return !1;
                try {
                    var c = Object.seal({
                            x: 4
                        }),
                        d = new a(_.y([c]));
                    if (!d.has(c) || 1 != d.size || d.add(c) != d || 1 != d.size || d.add({
                            x: 4
                        }) != d || 2 != d.size) return !1;
                    var e = _.z(d, "entries").call(d),
                        f = e.next();
                    if (f.done || f.value[0] != c || f.value[1] != c) return !1;
                    f = e.next();
                    return f.done || f.value[0] == c || 4 != f.value[0].x || f.value[1] != f.value[0] ? !1 : e.next().done
                } catch (g) {
                    return !1
                }
            }()) return a;
        var b = function(c) {
            this.j = new _.w.Map;
            if (c) {
                c = _.y(c);
                for (var d; !(d = c.next()).done;) this.add(d.value)
            }
            this.size = this.j.size
        };
        b.prototype.add = function(c) {
            c = 0 === c ? 0 : c;
            this.j.set(c, c);
            this.size = this.j.size;
            return this
        };
        b.prototype.delete = function(c) {
            c = this.j.delete(c);
            this.size = this.j.size;
            return c
        };
        b.prototype.clear = function() {
            this.j.clear();
            this.size = 0
        };
        b.prototype.has = function(c) {
            return this.j.has(c)
        };
        b.prototype.entries = function() {
            return _.z(this.j, "entries").call(this.j)
        };
        b.prototype.values = function() {
            return _.z(this.j, "values").call(this.j)
        };
        b.prototype.keys = _.z(b.prototype, "values");
        b.prototype[_.z(_.w.Symbol, "iterator")] = _.z(b.prototype, "values");
        b.prototype.forEach = function(c, d) {
            var e = this;
            this.j.forEach(function(f) {
                return c.call(d, f, f, e)
            })
        };
        return b
    }, "es6");
    Dt("Object.entries", function(a) {
        return a ? a : function(b) {
            var c = [],
                d;
            for (d in b) Ht(b, d) && c.push([d, b[d]]);
            return c
        }
    }, "es8");
    Dt("String.prototype.startsWith", function(a) {
        return a ? a : function(b, c) {
            var d = $t(this, b, "startsWith"),
                e = d.length,
                f = b.length;
            c = Math.max(0, Math.min(c | 0, d.length));
            for (var g = 0; g < f && c < e;)
                if (d[c++] != b[g++]) return !1;
            return g >= f
        }
    }, "es6");
    Dt("String.prototype.repeat", function(a) {
        return a ? a : function(b) {
            var c = $t(this, null, "repeat");
            if (0 > b || 1342177279 < b) throw new RangeError("Invalid count value");
            b |= 0;
            for (var d = ""; b;)
                if (b & 1 && (d += c), b >>>= 1) c += c;
            return d
        }
    }, "es6");
    Dt("globalThis", function(a) {
        return a || _.At
    }, "es_2020");
    Dt("String.prototype.padStart", function(a) {
        return a ? a : function(b, c) {
            var d = $t(this, null, "padStart");
            b -= d.length;
            c = void 0 !== c ? String(c) : " ";
            return (0 < b && c ? _.z(c, "repeat").call(c, Math.ceil(b / c.length)).substring(0, b) : "") + d
        }
    }, "es8");
    Dt("AggregateError", function(a) {
        if (a) return a;
        a = function(b, c) {
            c = Error(c);
            "stack" in c && (this.stack = c.stack);
            this.errors = b;
            this.message = c.message
        };
        _.T(a, Error);
        a.prototype.name = "AggregateError";
        return a
    }, "es_2021");
    Dt("Promise.any", function(a) {
        return a ? a : function(b) {
            b = b instanceof Array ? b : _.z(Array, "from").call(Array, b);
            return _.w.Promise.all(b.map(function(c) {
                return _.w.Promise.resolve(c).then(function(d) {
                    throw d;
                }, function(d) {
                    return d
                })
            })).then(function(c) {
                throw new _.w.AggregateError(c, "All promises were rejected");
            }, function(c) {
                return c
            })
        }
    }, "es_2021");
    Dt("Array.prototype.findIndex", function(a) {
        return a ? a : function(b, c) {
            return au(this, b, c).i
        }
    }, "es6");
    Dt("Object.fromEntries", function(a) {
        return a ? a : function(b) {
            var c = {};
            if (!(_.z(_.w.Symbol, "iterator") in b)) throw new TypeError("" + b + " is not iterable");
            b = b[_.z(_.w.Symbol, "iterator")].call(b);
            for (var d = b.next(); !d.done; d = b.next()) {
                d = d.value;
                if (Object(d) !== d) throw new TypeError("iterable for fromEntries should yield objects");
                c[d[0]] = d[1]
            }
            return c
        }
    }, "es_2019");
    Dt("Promise.prototype.finally", function(a) {
        return a ? a : function(b) {
            return this.then(function(c) {
                return _.w.Promise.resolve(b()).then(function() {
                    return c
                })
            }, function(c) {
                return _.w.Promise.resolve(b()).then(function() {
                    throw c;
                })
            })
        }
    }, "es9");
    Dt("Array.prototype.flat", function(a) {
        return a ? a : function(b) {
            b = void 0 === b ? 1 : b;
            var c = [];
            Array.prototype.forEach.call(this, function(d) {
                Array.isArray(d) && 0 < b ? (d = _.z(Array.prototype, "flat").call(d, b - 1), c.push.apply(c, d)) : c.push(d)
            });
            return c
        }
    }, "es9");
    Dt("String.raw", function(a) {
        return a ? a : function(b, c) {
            if (null == b) throw new TypeError("Cannot convert undefined or null to object");
            for (var d = b.raw, e = d.length, f = "", g = 0; g < e; ++g) f += d[g], g + 1 < e && g + 1 < arguments.length && (f += String(arguments[g + 1]));
            return f
        }
    }, "es6");
    Dt("String.fromCodePoint", function(a) {
        return a ? a : function(b) {
            for (var c = "", d = 0; d < arguments.length; d++) {
                var e = Number(arguments[d]);
                if (0 > e || 1114111 < e || e !== Math.floor(e)) throw new RangeError("invalid_code_point " + e);
                65535 >= e ? c += String.fromCharCode(e) : (e -= 65536, c += String.fromCharCode(e >>> 10 & 1023 | 55296), c += String.fromCharCode(e & 1023 | 56320))
            }
            return c
        }
    }, "es6");
    Dt("Array.prototype.flatMap", function(a) {
        return a ? a : function(b, c) {
            var d = [];
            Array.prototype.forEach.call(this, function(e, f) {
                e = b.call(c, e, f, this);
                Array.isArray(e) ? d.push.apply(d, e) : d.push(e)
            });
            return d
        }
    }, "es9");
    _.r = this || self;
    tc = function(a) {
        var b = typeof a;
        return "object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null"
    };
    _.ua = function(a) {
        var b = tc(a);
        return "array" == b || "object" == b && "number" == typeof a.length
    };
    _.la = function(a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b
    };
    _.na = function(a) {
        return Object.prototype.hasOwnProperty.call(a, cu) && a[cu] || (a[cu] = ++du)
    };
    cu = "closure_uid_" + (1E9 * Math.random() >>> 0);
    du = 0;
    eu = function(a, b, c) {
        return a.call.apply(a.bind, arguments)
    };
    fu = function(a, b, c) {
        if (!a) throw Error();
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function() {
                var e = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(e, d);
                return a.apply(b, e)
            }
        }
        return function() {
            return a.apply(b, arguments)
        }
    };
    _.gu = function(a, b, c) {
        _.gu = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? eu : fu;
        return _.gu.apply(null, arguments)
    };
    _.hu = function(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var d = c.slice();
            d.push.apply(d, arguments);
            return a.apply(this, d)
        }
    };
    var iu;
    var ku, ju;
    _.lu = function(a, b) {
        this.j = a === ju && b || "";
        this.A = ku
    };
    _.lu.prototype.mb = !0;
    _.lu.prototype.Va = function() {
        return this.j
    };
    _.mu = function(a) {
        return a instanceof _.lu && a.constructor === _.lu && a.A === ku ? a.j : "type_error:Const"
    };
    _.nu = function(a) {
        return new _.lu(ju, a)
    };
    ku = {};
    ju = {};
    var tb = _.nu("https://tpc.googlesyndication.com/sodar/%{basename}.js");
    var ou, pu, Dh, ru;
    ou = function() {
        return !0
    };
    pu = function(a) {
        return function() {
            return !a.apply(this, arguments)
        }
    };
    Dh = function(a) {
        var b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    };
    _.qu = function(a) {
        var b = a;
        return function() {
            if (b) {
                var c = b;
                b = null;
                c()
            }
        }
    };
    ru = function(a) {
        var b = 0,
            c = !1,
            d = [],
            e = function() {
                b = 0;
                c && (c = !1, f())
            },
            f = function() {
                b = _.r.setTimeout(e, 200);
                var g = d;
                d = [];
                a.apply(void 0, g)
            };
        return function(g) {
            d = arguments;
            b ? c = !0 : f()
        }
    };
    var su, ea;
    su = {
        passive: !0
    };
    ea = Dh(function() {
        var a = !1;
        try {
            var b = Object.defineProperty({}, "passive", {
                get: function() {
                    a = !0
                }
            });
            _.r.addEventListener("test", null, b)
        } catch (c) {}
        return a
    });
    _.lb = function(a, b, c, d) {
        return a.addEventListener ? (a.addEventListener(b, c, fa(d)), !0) : !1
    };
    _.Pe = function(a, b, c, d) {
        return a.removeEventListener ? (a.removeEventListener(b, c, fa(d)), !0) : !1
    };
    _.ha = function(a, b) {
        return Array.prototype.indexOf.call(a, b, void 0)
    };
    _.tu = function(a, b) {
        Array.prototype.forEach.call(a, b, void 0)
    };
    _.ig = function(a, b) {
        return Array.prototype.filter.call(a, b, void 0)
    };
    _.uu = function(a, b) {
        return Array.prototype.map.call(a, b, void 0)
    };
    _.kg = function(a, b) {
        return Array.prototype.some.call(a, b, void 0)
    };
    var Ea = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
    var vu = {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        command: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0
    };
    var we;
    we = {};
    _.ve = function(a) {
        this.j = a;
        this.mb = !0
    };
    _.ve.prototype.toString = function() {
        return this.j.toString()
    };
    _.ve.prototype.Va = function() {
        return this.j.toString()
    };
    _.Xa = function(a) {
        return a instanceof _.ve && a.constructor === _.ve ? a.j : "type_error:SafeScript"
    };
    var Bu, Au, xu, Cu, yu;
    _.wu = function(a) {
        this.j = a
    };
    _.wu.prototype.toString = function() {
        return this.j + ""
    };
    _.wu.prototype.mb = !0;
    _.wu.prototype.Va = function() {
        return this.j.toString()
    };
    _.zu = function(a, b) {
        a = xu.exec(_.Za(a).toString());
        var c = a[3] || "";
        return _.se(a[1] + yu("?", a[2] || "", b) + yu("#", c))
    };
    _.Za = function(a) {
        return a instanceof _.wu && a.constructor === _.wu ? a.j : "type_error:TrustedResourceUrl"
    };
    _.sb = function(a, b) {
        var c = _.mu(a);
        if (!Au.test(c)) throw Error("Invalid TrustedResourceUrl format: " + c);
        a = c.replace(Bu, function(d, e) {
            if (!Object.prototype.hasOwnProperty.call(b, e)) throw Error('Found marker, "' + e + '", in format string, "' + c + '", but no valid label mapping found in args: ' + JSON.stringify(b));
            d = b[e];
            return d instanceof _.lu ? _.mu(d) : encodeURIComponent(String(d))
        });
        return _.se(a)
    };
    Bu = /%{(\w+)}/g;
    Au = RegExp("^((https:)?//[0-9a-z.:[\\]-]+/|/[^/\\\\]|[^:/\\\\%]+/|[^:/\\\\%]*[?#]|about:blank#)", "i");
    xu = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/;
    Cu = {};
    _.se = function(a) {
        return new _.wu(a, Cu)
    };
    yu = function(a, b, c) {
        if (null == c) return b;
        if ("string" === typeof c) return c ? a + encodeURIComponent(c) : "";
        for (var d in c)
            if (Object.prototype.hasOwnProperty.call(c, d)) {
                var e = c[d];
                e = Array.isArray(e) ? e : [e];
                for (var f = 0; f < e.length; f++) {
                    var g = e[f];
                    null != g && (b || (b = a), b += (b.length > a.length ? "&" : "") + encodeURIComponent(d) + "=" + encodeURIComponent(String(g)))
                }
            }
        return b
    };
    var Du, rk, Eu, Mu, Gu, Hu, Iu, Ju, Ku, Lu, Fu;
    Du = function(a, b) {
        var c = a.length - b.length;
        return 0 <= c && a.indexOf(b, c) == c
    };
    rk = function(a) {
        return /^[\s\xa0]*$/.test(a)
    };
    Eu = function(a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
    };
    Mu = function(a) {
        if (!Fu.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(Gu, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(Hu, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(Iu, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(Ju, "&quot;")); - 1 != a.indexOf("'") && (a = a.replace(Ku, "&#39;")); - 1 != a.indexOf("\x00") && (a = a.replace(Lu, "&#0;"));
        return a
    };
    Gu = /&/g;
    Hu = /</g;
    Iu = />/g;
    Ju = /"/g;
    Ku = /'/g;
    Lu = /\x00/g;
    Fu = /[\x00&<>"']/;
    _.Ka = function(a, b) {
        return -1 != a.indexOf(b)
    };
    var Nu, Ou, Qu, Ru, Tu, fb;
    _.Ra = function(a) {
        this.j = a
    };
    _.Ra.prototype.toString = function() {
        return this.j.toString()
    };
    _.Ra.prototype.mb = !0;
    _.Ra.prototype.Va = function() {
        return this.j.toString()
    };
    _.Sa = function(a) {
        return a instanceof _.Ra && a.constructor === _.Ra ? a.j : "type_error:SafeUrl"
    };
    Nu = /^data:(.*);base64,[a-z0-9+\/]+=*$/i;
    Ou = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
    _.Pu = function(a) {
        if (a instanceof _.Ra) return a;
        a = "object" == typeof a && a.mb ? a.Va() : String(a);
        Ou.test(a) ? a = fb(a) : (a = String(a).replace(/(%0A|%0D)/g, ""), a = a.match(Nu) ? fb(a) : null);
        return a
    };
    try {
        new URL("s://g"), Qu = !0
    } catch (a) {
        Qu = !1
    }
    Ru = Qu;
    _.Su = function(a) {
        if (a instanceof _.Ra) return a;
        a = "object" == typeof a && a.mb ? a.Va() : String(a);
        a: {
            var b = a;
            if (Ru) {
                try {
                    var c = new URL(b)
                } catch (d) {
                    b = "https:";
                    break a
                }
                b = c.protocol
            } else b: {
                c = document.createElement("a");
                try {
                    c.href = b
                } catch (d) {
                    b = void 0;
                    break b
                }
                b = c.protocol;b = ":" === b || "" === b ? "https:" : b
            }
        }
        "javascript:" === b && (a = "about:invalid#zClosurez");
        return fb(a)
    };
    Tu = {};
    fb = function(a) {
        return new _.Ra(a, Tu)
    };
    _.hb = fb("about:invalid#zClosurez");
    _.Uu = {};
    _.Vu = function(a) {
        this.j = a;
        this.mb = !0
    };
    _.Vu.prototype.Va = function() {
        return this.j
    };
    _.Vu.prototype.toString = function() {
        return this.j.toString()
    };
    _.Wu = new _.Vu("", _.Uu);
    _.Xu = RegExp("^[-+,.\"'%_!#/ a-zA-Z0-9\\[\\]]+$");
    _.Yu = RegExp("\\b(url\\([ \t\n]*)('[ -&(-\\[\\]-~]*'|\"[ !#-\\[\\]-~]*\"|[!#-&*-\\[\\]-~]*)([ \t\n]*\\))", "g");
    _.Zu = RegExp("\\b(calc|cubic-bezier|fit-content|hsl|hsla|linear-gradient|matrix|minmax|radial-gradient|repeat|rgb|rgba|(rotate|scale|translate)(X|Y|Z|3d)?|steps|var)\\([-+*/0-9a-zA-Z.%#\\[\\], ]+\\)", "g");
    _.$u = {};
    _.av = function(a) {
        this.j = a;
        this.mb = !0
    };
    _.av.prototype.toString = function() {
        return this.j.toString()
    };
    _.av.prototype.Va = function() {
        return this.j
    };
    _.bv = function(a) {
        return a instanceof _.av && a.constructor === _.av ? a.j : "type_error:SafeStyleSheet"
    };
    var Ha, cv;
    a: {
        for (var dv = ["CLOSURE_FLAGS"], ev = _.r, fv = 0; fv < dv.length; fv++)
            if (ev = ev[dv[fv]], null == ev) {
                cv = null;
                break a
            }
        cv = ev
    }
    var gv = cv && cv[610401301];
    Ha = null != gv ? gv : !1;
    var Ja, hv = _.r.navigator;
    Ja = hv ? hv.userAgentData || null : null;
    var iv, kv, nv, lv, pv, mv, ni;
    iv = {};
    _.jv = function(a) {
        this.j = a;
        this.mb = !0
    };
    _.jv.prototype.Va = function() {
        return this.j.toString()
    };
    _.jv.prototype.toString = function() {
        return this.j.toString()
    };
    _.ab = function(a) {
        return a instanceof _.jv && a.constructor === _.jv ? a.j : "type_error:SafeHtml"
    };
    kv = function(a) {
        return a instanceof _.jv ? a : _.eq(Mu("object" == typeof a && a.mb ? a.Va() : String(a)))
    };
    _.pi = function(a) {
        if (!lv.test(a)) throw Error("");
        if (a.toUpperCase() in mv) throw Error("");
    };
    nv = function(a) {
        var b = kv(ni),
            c = [],
            d = function(e) {
                Array.isArray(e) ? e.forEach(d) : (e = kv(e), c.push(_.ab(e).toString()))
            };
        a.forEach(d);
        return _.eq(c.join(_.ab(b).toString()))
    };
    _.ov = function(a) {
        return nv(Array.prototype.slice.call(arguments))
    };
    _.eq = function(a) {
        return new _.jv(a, iv)
    };
    _.qi = function(a, b, c) {
        var d = "";
        if (b)
            for (var e in b)
                if (Object.prototype.hasOwnProperty.call(b, e)) {
                    if (!lv.test(e)) throw Error("");
                    var f = b[e];
                    if (null != f) {
                        var g = e;
                        if (f instanceof _.lu) f = _.mu(f);
                        else {
                            if ("style" == g.toLowerCase()) throw Error("");
                            if (/^on/i.test(g)) throw Error("");
                            if (g.toLowerCase() in pv)
                                if (f instanceof _.wu) f = _.Za(f).toString();
                                else if (f instanceof _.Ra) f = _.Sa(f);
                            else if ("string" === typeof f) f = (_.Pu(f) || _.hb).Va();
                            else throw Error("");
                        }
                        f.mb && (f = f.Va());
                        f = g + '="' + Mu(String(f)) + '"';
                        d += " " + f
                    }
                }
        b = "<" + a + d;
        null == c ? c = [] : Array.isArray(c) || (c = [c]);
        !0 === vu[a.toLowerCase()] ? b += ">" : (c = _.ov(c), b += ">" + _.ab(c).toString() + "</" + a + ">");
        return _.eq(b)
    };
    lv = /^[a-zA-Z0-9-]+$/;
    pv = {
        action: !0,
        cite: !0,
        data: !0,
        formaction: !0,
        href: !0,
        manifest: !0,
        poster: !0,
        src: !0
    };
    mv = {
        APPLET: !0,
        BASE: !0,
        EMBED: !0,
        IFRAME: !0,
        LINK: !0,
        MATH: !0,
        META: !0,
        OBJECT: !0,
        SCRIPT: !0,
        STYLE: !0,
        SVG: !0,
        TEMPLATE: !0
    };
    ni = new _.jv(_.r.trustedTypes && _.r.trustedTypes.emptyHTML || "", iv);
    _.qv = _.eq("<br>");
    var rv;
    try {
        new URL("s://g"), rv = !0
    } catch (a) {
        rv = !1
    }
    var Pa = rv;
    var sv = {
            vl: 0,
            yl: 1,
            tl: 2,
            ul: 3,
            0: "FORMATTED_HTML_CONTENT",
            1: "HTML_FORMATTED_CONTENT",
            2: "EMBEDDED_INTERNAL_CONTENT",
            3: "EMBEDDED_TRUSTED_EXTERNAL_CONTENT"
        },
        tv = function(a, b) {
            b = Error.call(this, a + " cannot be used with intent " + sv[b]);
            this.message = b.message;
            "stack" in b && (this.stack = b.stack);
            this.type = a;
            this.name = "TypeCannotBeUsedWithIntentError"
        };
    _.T(tv, Error);
    var cb = function(a) {
            this.Mj = a
        },
        eb = [db("data"), db("http"), db("https"), db("mailto"), db("ftp"), new cb(function(a) {
            return /^[^:]*([/?#]|$)/.test(a)
        })];
    var pb = function(a) {
        return new _.w.Promise(function(b, c) {
            var d = new XMLHttpRequest;
            d.onreadystatechange = function() {
                d.readyState === d.DONE && (200 <= d.status && 300 > d.status ? b(JSON.parse(d.responseText)) : c())
            };
            d.open("GET", a, !0);
            d.send()
        })
    };
    var yb, xb = "undefined" !== typeof TextEncoder;
    _.uv = function(a) {
        _.uv[" "](a);
        return a
    };
    _.uv[" "] = function() {};
    var vv = function(a, b) {
        try {
            return _.uv(a[b]), !0
        } catch (c) {}
        return !1
    };
    var wv, yv, zv, Av, Bv, Cv;
    wv = Na() ? !1 : Ma("Opera");
    _.xv = Na() ? !1 : Ma("Trident") || Ma("MSIE");
    yv = Ma("Edge");
    zv = Ma("Gecko") && !(_.Ka(Ga().toLowerCase(), "webkit") && !Ma("Edge")) && !(Ma("Trident") || Ma("MSIE")) && !Ma("Edge");
    Av = _.Ka(Ga().toLowerCase(), "webkit") && !Ma("Edge");
    Bv = function() {
        var a = _.r.document;
        return a ? a.documentMode : void 0
    };
    a: {
        var Dv = "",
            Ev = function() {
                var a = Ga();
                if (zv) return /rv:([^\);]+)(\)|;)/.exec(a);
                if (yv) return /Edge\/([\d\.]+)/.exec(a);
                if (_.xv) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
                if (Av) return /WebKit\/(\S+)/.exec(a);
                if (wv) return /(?:Version)[ \/]?(\S+)/.exec(a)
            }();Ev && (Dv = Ev ? Ev[1] : "");
        if (_.xv) {
            var Fv = Bv();
            if (null != Fv && Fv > parseFloat(Dv)) {
                Cv = String(Fv);
                break a
            }
        }
        Cv = Dv
    }
    var Gv = Cv,
        Hv;
    if (_.r.document && _.xv) {
        var Iv = Bv();
        Hv = Iv ? Iv : parseInt(Gv, 10) || void 0
    } else Hv = void 0;
    var Jv = Hv;
    !Ma("Android") || Oa();
    Oa();
    Ma("Safari") && (Oa() || (Na() ? 0 : Ma("Coast")) || (Na() ? 0 : Ma("Opera")) || (Na() ? 0 : Ma("Edge")) || (Na() ? La("Microsoft Edge") : Ma("Edg/")) || Na() && La("Opera"));
    var Kv = {},
        Lv = null,
        Mv = zv || Av || "function" == typeof _.r.btoa,
        Db = function(a, b) {
            void 0 === b && (b = 0);
            Nv();
            b = Kv[b];
            for (var c = Array(Math.floor(a.length / 3)), d = b[64] || "", e = 0, f = 0; e < a.length - 2; e += 3) {
                var g = a[e],
                    h = a[e + 1],
                    k = a[e + 2],
                    l = b[g >> 2];
                g = b[(g & 3) << 4 | h >> 4];
                h = b[(h & 15) << 2 | k >> 6];
                k = b[k & 63];
                c[f++] = l + g + h + k
            }
            l = 0;
            k = d;
            switch (a.length - e) {
                case 2:
                    l = a[e + 1], k = b[(l & 15) << 2] || d;
                case 1:
                    a = a[e], c[f] = b[a >> 2] + b[(a & 3) << 4 | l >> 4] + k + d
            }
            return c.join("")
        },
        Ov = function(a, b) {
            if (Mv && !b) a = _.r.btoa(a);
            else {
                for (var c = [], d = 0, e = 0; e < a.length; e++) {
                    var f = a.charCodeAt(e);
                    255 < f && (c[d++] = f & 255, f >>= 8);
                    c[d++] = f
                }
                a = Db(c, b)
            }
            return a
        },
        Jp = function(a) {
            var b = "";
            Pv(a, function(c) {
                b += String.fromCharCode(c)
            });
            return b
        },
        ye = function(a) {
            var b = [];
            Pv(a, function(c) {
                b.push(c)
            });
            return b
        },
        Qv = function(a) {
            var b = a.length,
                c = 3 * b / 4;
            c % 3 ? c = Math.floor(c) : _.Ka("=.", a[b - 1]) && (c = _.Ka("=.", a[b - 2]) ? c - 2 : c - 1);
            var d = new Uint8Array(c),
                e = 0;
            Pv(a, function(f) {
                d[e++] = f
            });
            return e !== c ? d.subarray(0, e) : d
        },
        Pv = function(a, b) {
            function c(k) {
                for (; d < a.length;) {
                    var l = a.charAt(d++),
                        m = Lv[l];
                    if (null != m) return m;
                    if (!rk(l)) throw Error("Unknown base64 encoding at char: " + l);
                }
                return k
            }
            Nv();
            for (var d = 0;;) {
                var e = c(-1),
                    f = c(0),
                    g = c(64),
                    h = c(64);
                if (64 === h && -1 === e) break;
                b(e << 2 | f >> 4);
                64 != g && (b(f << 4 & 240 | g >> 2), 64 != h && b(g << 6 & 192 | h))
            }
        },
        Nv = function() {
            if (!Lv) {
                Lv = {};
                for (var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), b = ["+/=", "+/", "-_=", "-_.", "-_"], c = 0; 5 > c; c++) {
                    var d = a.concat(b[c].split(""));
                    Kv[c] = d;
                    for (var e = 0; e < d.length; e++) {
                        var f = d[e];
                        void 0 === Lv[f] && (Lv[f] = e)
                    }
                }
            }
        };
    var Hb = "undefined" !== typeof Uint8Array,
        Cb = !_.xv && "function" === typeof btoa,
        Rv = /[-_.]/g,
        Fb = {
            "-": "+",
            _: "/",
            ".": "="
        },
        Sv, Lb = {};
    var Tv, mc = function(a, b) {
            Mb(b);
            this.la = a;
            if (null != a && 0 === a.length) throw Error("ByteString should be constructed with non-empty values");
        },
        nc = function() {
            return Tv || (Tv = new mc(null, Lb))
        },
        id = function(a) {
            var b = a.la;
            return null == b ? "" : "string" === typeof b ? b : a.la = Eb(b)
        },
        Uj = function(a) {
            Mb(Lb);
            var b = a.la;
            if (null != b && !Kb(b))
                if ("string" === typeof b)
                    if (Cb) {
                        Rv.test(b) && (b = b.replace(Rv, Gb));
                        b = atob(b);
                        for (var c = new Uint8Array(b.length), d = 0; d < b.length; d++) c[d] = b.charCodeAt(d);
                        b = c
                    } else b = Qv(b);
            else b = null;
            return (a = null == b ? b : a.la = b) ? new Uint8Array(a) : Sv || (Sv = new Uint8Array(0))
        };
    mc.prototype.isEmpty = function() {
        return null == this.la
    };
    var Ob = 0,
        Pb = 0,
        Uv;
    var Vv = function(a, b) {
            this.A = a >>> 0;
            this.j = b >>> 0
        },
        Xv = function(a) {
            if (!a) return Wv || (Wv = new Vv(0, 0));
            if (!/^\d+$/.test(a)) return null;
            Ub(a);
            return new Vv(Ob, Pb)
        },
        Wv, Yv = function(a, b) {
            this.A = a >>> 0;
            this.j = b >>> 0
        },
        de = function(a) {
            if (!a) return Zv || (Zv = new Yv(0, 0));
            if (!/^-?\d+$/.test(a)) return null;
            Ub(a);
            return new Yv(Ob, Pb)
        },
        Zv;
    var $v = function() {
        this.j = []
    };
    $v.prototype.length = function() {
        return this.j.length
    };
    $v.prototype.end = function() {
        var a = this.j;
        this.j = [];
        return a
    };
    var he = function(a, b, c) {
            for (; 0 < c || 127 < b;) a.j.push(b & 127 | 128), b = (b >>> 7 | c << 25) >>> 0, c >>>= 7;
            a.j.push(b)
        },
        ee = function(a, b) {
            for (; 127 < b;) a.j.push(b & 127 | 128), b >>>= 7;
            a.j.push(b)
        },
        aw = function(a, b) {
            if (0 <= b) ee(a, b);
            else {
                for (var c = 0; 9 > c; c++) a.j.push(b & 127 | 128), b >>= 7;
                a.j.push(1)
            }
        };
    var ne = function() {
            this.o = [];
            this.A = 0;
            this.j = new $v
        },
        je = function(a, b) {
            0 !== b.length && (a.o.push(b), a.A += b.length)
        },
        bw = function(a, b, c) {
            ee(a.j, 8 * b + 2);
            ee(a.j, c.length);
            je(a, a.j.end());
            je(a, c)
        };
    var Yd = function(a, b) {
        this.j = a;
        this.A = b
    };
    var cw, ac, zd, Xb, Yb;
    cw = "function" === typeof _.w.Symbol && "symbol" === typeof(0, _.w.Symbol)() ? (0, _.w.Symbol)() : void 0;
    ac = cw ? function(a, b) {
        a[cw] |= b
    } : function(a, b) {
        void 0 !== a.nb ? a.nb |= b : Object.defineProperties(a, {
            nb: {
                value: b,
                configurable: !0,
                writable: !0,
                enumerable: !1
            }
        })
    };
    zd = cw ? function(a, b) {
        a[cw] &= ~b
    } : function(a, b) {
        void 0 !== a.nb && (a.nb &= ~b)
    };
    Xb = cw ? function(a) {
        return a[cw] | 0
    } : function(a) {
        return a.nb | 0
    };
    _.rd = cw ? function(a) {
        return a[cw]
    } : function(a) {
        return a.nb
    };
    Yb = cw ? function(a, b) {
        a[cw] = b
    } : function(a, b) {
        void 0 !== a.nb ? a.nb = b : Object.defineProperties(a, {
            nb: {
                value: b,
                configurable: !0,
                writable: !0,
                enumerable: !1
            }
        })
    };
    var Qc = {},
        dw, yd, ew = [];
    Yb(ew, 39);
    yd = Object.freeze(ew);
    var fw = function(a, b, c) {
        this.o = 0;
        this.j = a;
        this.A = b;
        this.C = c
    };
    fw.prototype.next = function() {
        if (this.o < this.j.length) {
            var a = this.j[this.o++];
            return {
                done: !1,
                value: this.A ? this.A.call(this.C, a) : a
            }
        }
        return {
            done: !0,
            value: void 0
        }
    };
    fw.prototype[_.z(_.w.Symbol, "iterator")] = function() {
        return new fw(this.j, this.A, this.C)
    };
    var Fd = {};
    var wc = /^-?([1-9][0-9]*|0)(\.[0-9]+)?$/,
        Tc = "function" === typeof _.w.Symbol && "symbol" === typeof(0, _.w.Symbol)() ? (0, _.w.Symbol)() : "di";
    var Wc, Zc;
    var jd = function(a, b, c, d) {
        c = void 0 === c ? Uc : c;
        d = void 0 === d ? Uc : d;
        var e = Kt(_.w.Map, [], this.constructor);
        var f = Xb(a);
        f |= 64;
        Yb(a, f);
        e.A = f;
        e.o = b;
        e.j = c || Uc;
        e.C = e.o ? dd : d || Uc;
        for (var g = 0; g < a.length; g++) {
            var h = a[g],
                k = c(h[0], !1, !0),
                l = h[1];
            b ? void 0 === l && (l = null) : l = d(h[1], !1, !0, void 0, void 0, f);
            _.w.Map.prototype.set.call(e, k, l)
        }
        return e
    };
    _.T(jd, _.w.Map);
    var gw = function(a) {
            if (a.A & 2) throw Error("Cannot mutate an immutable Map");
        },
        kd = function(a, b) {
            b = void 0 === b ? ed : b;
            return td(a, b)
        },
        td = function(a, b) {
            b = void 0 === b ? ed : b;
            var c = [];
            a = _.z(_.w.Map.prototype, "entries").call(a);
            for (var d; !(d = a.next()).done;) d = d.value, d[0] = b(d[0]), d[1] = b(d[1]), c.push(d);
            return c
        };
    _.q = jd.prototype;
    _.q.clear = function() {
        gw(this);
        _.w.Map.prototype.clear.call(this)
    };
    _.q.delete = function(a) {
        gw(this);
        return _.w.Map.prototype.delete.call(this, this.j(a, !0, !1))
    };
    _.q.entries = function() {
        var a = _.z(Array, "from").call(Array, _.z(_.w.Map.prototype, "keys").call(this));
        return new fw(a, fd, this)
    };
    _.q.keys = function() {
        return _.z(_.w.Map.prototype, "keys").call(this)
    };
    _.q.values = function() {
        var a = _.z(Array, "from").call(Array, _.z(_.w.Map.prototype, "keys").call(this));
        return new fw(a, jd.prototype.get, this)
    };
    _.q.forEach = function(a, b) {
        var c = this;
        _.w.Map.prototype.forEach.call(this, function(d, e) {
            a.call(b, c.get(e), e, c)
        })
    };
    _.q.set = function(a, b) {
        gw(this);
        a = this.j(a, !0, !1);
        return null == a ? this : null == b ? (_.w.Map.prototype.delete.call(this, a), this) : _.w.Map.prototype.set.call(this, a, this.C(b, !0, !0, this.o, !1, this.A))
    };
    _.q.has = function(a) {
        return _.w.Map.prototype.has.call(this, this.j(a, !1, !1))
    };
    _.q.get = function(a) {
        a = this.j(a, !1, !1);
        var b = _.w.Map.prototype.get.call(this, a);
        if (void 0 !== b) {
            var c = this.o;
            return c ? (c = this.C(b, !1, !0, c, this.K, this.A), c !== b && _.w.Map.prototype.set.call(this, a, c), c) : b
        }
    };
    jd.prototype[_.z(_.w.Symbol, "iterator")] = function() {
        return _.z(this, "entries").call(this)
    };
    jd.prototype.toJSON = void 0;
    var Gn, xd, an, Co, fl, Vj, Ed, Ck, Oj, Wj, Tj, vr, hw, xr, bh, iw, Xi, Bo, ah, jw, Wq, Mq, lw, mw, ow, pw, co, qw, rw, sw, rn, Hn, uw;
    Gn = function(a, b) {
        a = a.H;
        return xd(a, (0, _.rd)(a), b)
    };
    xd = function(a, b, c, d) {
        if (-1 === c) return null;
        if (c >= ic(b)) {
            if (b & 256) return a[a.length - 1][c]
        } else {
            var e = a.length;
            if (d && b & 256 && (d = a[e - 1][c], null != d)) return d;
            b = c + (+!!(b & 512) - 1);
            if (b < e) return a[b]
        }
    };
    _.xh = function(a, b, c, d) {
        var e = a.H,
            f = (0, _.rd)(e);
        pc(f);
        ud(e, f, b, c, d);
        return a
    };
    an = function(a, b, c) {
        return void 0 !== hw(a, b, c, !1)
    };
    Co = function(a) {
        a = a.H;
        var b = (0, _.rd)(a),
            c = xd(a, b, 3),
            d = rc(c);
        null != d && d !== c && ud(a, b, 3, d);
        return d
    };
    fl = function(a, b) {
        return vc(Gn(a, b))
    };
    Vj = function(a, b) {
        a = a.H;
        var c = (0, _.rd)(a),
            d = xd(a, c, b),
            e = oc(d, !0, !!(c & 34));
        null != e && e !== d && ud(a, c, b, e);
        return null == e ? nc() : e
    };
    Ck = function(a, b) {
        return _.xh(a, b, void 0, !1)
    };
    Oj = function(a, b, c, d) {
        var e = a.H,
            f = (0, _.rd)(e);
        pc(f);
        (c = Md(e, f, c)) && c !== b && null != d && ud(e, f, c);
        ud(e, f, b, d);
        return a
    };
    Wj = function(a, b, c) {
        a = a.H;
        return Md(a, (0, _.rd)(a), b) === c ? c : -1
    };
    Tj = function(a, b) {
        a = a.H;
        return Md(a, (0, _.rd)(a), b)
    };
    vr = function(a, b, c) {
        a = a.H;
        var d = (0, _.rd)(a);
        pc(d);
        var e = xd(a, d, c);
        b = bd(Sc(e, b, !0, d));
        e !== b && ud(a, d, c, b);
        return b
    };
    hw = function(a, b, c, d) {
        a = a.H;
        var e = (0, _.rd)(a),
            f = xd(a, e, c, d);
        b = Sc(f, b, !1, e);
        b !== f && null != b && ud(a, e, c, b, d);
        return b
    };
    xr = function(a, b, c) {
        return (a = hw(a, b, c, !1)) ? a : Rc(b)
    };
    _.Zg = function(a, b, c) {
        var d = void 0 === d ? !1 : d;
        b = hw(a, b, c, d);
        if (null == b) return b;
        a = a.H;
        var e = (0, _.rd)(a);
        if (!(e & 2)) {
            var f = bd(b);
            f !== b && (b = f, ud(a, e, c, b, d))
        }
        return b
    };
    bh = function(a, b, c) {
        var d = a.H,
            e = (0, _.rd)(d);
        a = !!(e & 2);
        b = Nd(d, e, b, c, a ? 1 : 2);
        if (!(a || Xb(b) & 8)) {
            for (c = 0; c < b.length; c++) a = b[c], d = bd(a), a !== d && (b[c] = d);
            ac(b, 8)
        }
        return b
    };
    _.tg = function(a, b, c) {
        null == c && (c = void 0);
        return _.xh(a, b, c)
    };
    _.wg = function(a, b, c, d) {
        null == d && (d = void 0);
        return Oj(a, b, c, d)
    };
    _.Fk = function(a, b, c) {
        var d = a.H,
            e = (0, _.rd)(d);
        pc(e);
        if (null != c) {
            for (var f = !!c.length, g = 0; g < c.length; g++) {
                var h = c[g];
                f = f && !(Xb(h.H) & 2)
            }
            g = Xb(c);
            h = g | 1;
            h = (f ? h | 8 : h & -9) | 4;
            h != g && (c = $b(c, h))
        }
        null == c && (c = void 0);
        ud(d, e, b, c);
        return a
    };
    iw = function(a, b, c, d) {
        a = a.H;
        var e = (0, _.rd)(a);
        pc(e);
        b = Nd(a, e, c, b, 2);
        c = null != d ? d : new c;
        b.push(c);
        Xb(c.H) & 2 && zd(b, 8);
        return c
    };
    Xi = function(a, b, c, d) {
        iw(a, b, c, d);
        return a
    };
    Bo = function(a, b) {
        return Cc(Gn(a, b))
    };
    ah = function(a, b) {
        return Fc(Gn(a, b))
    };
    jw = function(a, b) {
        a = Gn(a, b);
        a = null == a ? a : yc(a) ? "number" === typeof a ? a : a : void 0;
        return a
    };
    _.Qi = function(a, b) {
        return Pc(Gn(a, b))
    };
    _.zk = function(a, b, c, d) {
        return Bd(a, b, Pc, c, d)
    };
    _.G = function(a, b, c) {
        return Od(fl(a, b), void 0 === c ? !1 : c)
    };
    _.kw = function(a, b) {
        var c = void 0 === c ? 0 : c;
        return Od(Bo(a, b), c)
    };
    Wq = function(a, b) {
        var c = void 0 === c ? 0 : c;
        return Od(ah(a, b), c)
    };
    _.Me = function(a, b) {
        var c = void 0 === c ? 0 : c;
        return Od(Jc(Gn(a, b)), c)
    };
    Mq = function(a, b) {
        var c = void 0 === c ? 0 : c;
        return Od(jw(a, b), c)
    };
    lw = function(a) {
        var b = void 0 === b ? "0" : b;
        return Od(Kc(Gn(a, 2)), b)
    };
    _.R = function(a, b) {
        return Od(_.Qi(a, b), "")
    };
    _.Xj = function(a, b, c) {
        return Od(Gn(a, b), void 0 === c ? 0 : c)
    };
    mw = function(a, b, c) {
        a = _.zk(a, b, void 0, 2);
        if ("number" !== typeof c || 0 > c || c >= a.length) throw Error();
        return a[c]
    };
    ow = function(a) {
        return _.Me(a, Wj(a, nw, 3))
    };
    pw = function(a, b) {
        return _.R(a, Wj(a, b, 2))
    };
    co = function(a, b) {
        a = fl(a, b);
        return null == a ? void 0 : a
    };
    qw = function(a, b) {
        a = Bo(a, b);
        return null == a ? void 0 : a
    };
    rw = function(a, b) {
        a = _.Qi(a, b);
        return null == a ? void 0 : a
    };
    sw = function(a, b) {
        a = Gn(a, b);
        return null == a ? void 0 : a
    };
    _.Wi = function(a, b, c) {
        return _.xh(a, b, null == c ? c : uc(c))
    };
    _.Mp = function(a, b, c) {
        return _.Ld(a, b, null == c ? c : uc(c), !1)
    };
    _.tw = function(a, b, c) {
        return _.xh(a, b, null == c ? c : Bc(c))
    };
    _.Bg = function(a, b, c) {
        return _.Ld(a, b, null == c ? c : Bc(c), 0)
    };
    _.Nj = function(a, b, c) {
        return _.xh(a, b, null == c ? c : _.Ic(c))
    };
    _.qg = function(a, b, c) {
        return _.Ld(a, b, null == c ? c : _.Ic(c), "0")
    };
    rn = function(a, b, c) {
        return _.xh(a, b, Oc(c))
    };
    _.rg = function(a, b, c) {
        return _.Ld(a, b, Oc(c), "")
    };
    Hn = function(a, b, c) {
        return _.xh(a, b, null == c ? c : zc(c))
    };
    _.I = function(a, b, c) {
        return _.Ld(a, b, null == c ? c : zc(c), 0)
    };
    uw = function(a, b, c) {
        c = _.Nc(c);
        var d = a.H,
            e = (0, _.rd)(d);
        pc(e);
        Ad(d, e, b, 2).push(c);
        return a
    };
    _.C = function(a, b, c) {
        this.H = _.A(a, b, c)
    };
    _.C.prototype.toJSON = function() {
        if (dw) var a = Pd(this, this.H, !1);
        else a = md(this.H, od, void 0, void 0, !1, !1), a = Pd(this, a, !0);
        return a
    };
    var Qj = function(a) {
        dw = !0;
        try {
            return JSON.stringify(a.toJSON(), hd)
        } finally {
            dw = !1
        }
    };
    _.C.prototype.clone = function() {
        var a = this.H;
        return _.Xc(this.constructor, _.sd(a, (0, _.rd)(a), !1))
    };
    _.C.prototype.Mf = Qc;
    var Rd = (0, _.w.Symbol)(),
        Xd = (0, _.w.Symbol)(),
        ae = (0, _.w.Symbol)(),
        vw = ce(function(a, b, c) {
            b = rc(b);
            null != b && (ee(a.j, 8 * c + 5), a = a.j, c = Uv || (Uv = new DataView(new ArrayBuffer(8))), c.setFloat32(0, +b, !0), Pb = 0, b = Ob = c.getUint32(0, !0), a.j.push(b >>> 0 & 255), a.j.push(b >>> 8 & 255), a.j.push(b >>> 16 & 255), a.j.push(b >>> 24 & 255))
        }),
        ww = ce(ie),
        xw = ce(ie),
        yw = ce(function(a, b, c) {
            a: if (null != b) {
                if (yc(b)) {
                    if ("string" === typeof b) break a;
                    if ("number" === typeof b) break a
                }
                b = void 0
            }null != b && ("string" === typeof b && Xv(b), null != b && (ee(a.j, 8 * c), "number" === typeof b ? (a = a.j, Tb(b), he(a, Ob, Pb)) : (c = Xv(b), he(a.j, c.A, c.j))))
        }),
        zw = ce(function(a, b, c) {
            b = Cc(b);
            null != b && null != b && (ee(a.j, 8 * c), aw(a.j, b))
        }),
        Aw = ce(function(a, b, c) {
            b = vc(b);
            null != b && (ee(a.j, 8 * c), a.j.j.push(b ? 1 : 0))
        }),
        Bw = ce(function(a, b, c) {
            b = Pc(b);
            null != b && bw(a, c, zb(b))
        }),
        Cw;
    Cw = new Yd(function(a, b, c) {
        if (Array.isArray(b)) {
            var d = Xb(b);
            if (!(d & 4)) {
                for (var e = 0, f = 0; e < b.length; e++) {
                    var g = Pc(b[e]);
                    null != g && (b[f++] = g)
                }
                f < e && (b.length = f);
                Yb(b, d | 5);
                d & 2 && Object.freeze(b)
            }
        } else b = void 0;
        if (null != b)
            for (d = 0; d < b.length; d++) e = b[d], null != e && bw(a, c, zb(e))
    }, !0);
    var Dw = ce(ke),
        Ew;
    Ew = new Yd(function(a, b, c, d, e) {
        if (Array.isArray(b))
            for (var f = 0; f < b.length; f++) ke(a, b[f], c, d, e)
    }, !0);
    var Fw = ce(function(a, b, c) {
        b = Cc(b);
        null != b && (b = parseInt(b, 10), ee(a.j, 8 * c), aw(a.j, b))
    });
    var le = void 0;
    var Kp = function(a) {
        this.H = _.A(a)
    };
    _.T(Kp, _.C);
    var Lp = function(a) {
        this.H = _.A(a)
    };
    _.T(Lp, _.C);
    var Gw = function(a) {
            this.j = a.A;
            this.A = a.o;
            this.C = a.C;
            this.jd = a.jd;
            this.D = a.D;
            this.Lc = a.Lc;
            this.se = a.se;
            this.Ne = a.Ne;
            this.qe = a.qe;
            this.o = a.j
        },
        Hw = function(a, b, c) {
            this.A = a;
            this.o = b;
            this.C = c;
            this.D = window;
            this.Lc = "env";
            this.se = "n";
            this.Ne = "0";
            this.qe = "1";
            this.j = !0
        };
    Hw.prototype.build = function() {
        return new Gw(this)
    };
    var Wp = function(a, b) {
        var c = void 0 === _.G(b, 6) ? !0 : _.G(b, 6),
            d, e, f = qe(_.Xj(b, 2, 0)),
            g = _.R(b, 3);
        a: switch (_.Xj(b, 4, 0)) {
            case 1:
                var h = "pt";
                break a;
            case 2:
                h = "cr";
                break a;
            default:
                h = ""
        }
        f = new Hw(f, g, h);
        b = null != (e = null == (d = _.Zg(b, Kp, 5)) ? void 0 : _.R(d, 1)) ? e : "";
        f.jd = b;
        f.j = c;
        f.D = a;
        return f.build()
    };
    var On = function(a) {
        this.H = _.A(a)
    };
    _.T(On, _.C);
    On.prototype.getId = function() {
        return _.R(this, 1)
    };
    var Nn = function(a, b) {
            return rn(a, 1, b)
        },
        Iw = [0, Bw];
    var Jw = function(a) {
        this.H = _.A(a)
    };
    _.T(Jw, _.C);
    Jw.prototype.getWidth = function() {
        return _.kw(this, 1)
    };
    var Sn = function(a) {
        var b = new Jw;
        return _.tw(b, 1, a)
    };
    Jw.prototype.getHeight = function() {
        return _.kw(this, 2)
    };
    var Rn = function(a, b) {
            return _.tw(a, 2, b)
        },
        Kw = [0, zw, zw];
    var Lw = [0, xw, Aw];
    var Ln = function(a) {
        this.H = _.A(a)
    };
    _.T(Ln, _.C);
    var Pn = function(a, b) {
            _.Kd(a, 4, b, _.Nc)
        },
        Mn = function(a, b) {
            _.tg(a, 6, b)
        };
    Ln.prototype.setSize = function(a) {
        return _.tg(this, 7, a)
    };
    Ln.ia = [4];
    var Mw = [0, Bw, xw, Bw, Cw, Fw, Dw, Iw, Dw, Kw, xw, Dw, Lw];
    var qn = function(a) {
        this.H = _.A(a)
    };
    _.T(qn, _.C);
    var pn = function(a, b) {
            return Hn(a, 1, b)
        },
        nn = function(a, b) {
            return _.Wi(a, 4, b)
        },
        on = function(a, b) {
            return _.tw(a, 2, b)
        },
        Nw = [0, Fw, zw, Bw, Aw];
    var Bn = function(a) {
        this.H = _.A(a)
    };
    _.T(Bn, _.C);
    var An = function(a, b) {
            return rn(a, 1, b)
        },
        En = function(a, b) {
            _.Nj(a, 2, b)
        },
        yn = function(a, b) {
            return Xi(a, 3, Ln, b)
        },
        zn = function(a, b) {
            return Hn(a, 4, b)
        };
    Bn.prototype.ah = function() {
        return _.Xj(this, 7, 0)
    };
    Bn.ia = [10, 3];
    var Ow = [0, Bw, xw, Ew, Mw, Fw, Dw, Nw, Aw, Fw, Cw, 3];
    var Pw = function(a) {
        this.H = _.A(a)
    };
    _.T(Pw, _.C);
    var Qw = [0, Fw, Aw];
    var Rw = function(a) {
        this.H = _.A(a)
    };
    _.T(Rw, _.C);
    var xn = function(a, b) {
            return iw(a, 2, Bn, b)
        },
        Jn = function(a, b) {
            _.tg(a, 5, b)
        },
        Sw = function(a, b) {
            _.tg(a, 9, b)
        };
    Rw.ia = [2];
    var Tw = [0, Fw, Ew, Ow, Fw, Bw, Dw, Nw, Bw, Aw, zw, Dw, Qw];
    var Uw = function(a) {
        this.H = _.A(a)
    };
    _.T(Uw, _.C);
    var Vw = function(a) {
        var b = new Rw;
        b = Hn(b, 1, 1);
        return iw(a, 1, Rw, b)
    };
    Uw.ia = [1];
    Uw.prototype.j = oe([0, Ew, Tw]);
    var Ww = function(a) {
        this.H = _.A(a)
    };
    _.T(Ww, _.C);
    var nw = [2, 3];
    var Xw = function(a) {
        this.H = _.A(a)
    };
    _.T(Xw, _.C);
    Xw.ia = [1];
    var Yw = function(a) {
        this.H = _.A(a)
    };
    _.T(Yw, _.C);
    Yw.ia = [1];
    var Zw = function(a) {
        this.H = _.A(a)
    };
    _.T(Zw, _.C);
    var $w = [2, 3];
    var ax = function(a) {
        this.H = _.A(a)
    };
    _.T(ax, _.C);
    ax.ia = [2];
    var bx = function(a) {
        this.H = _.A(a)
    };
    _.T(bx, _.C);
    bx.ia = [6, 4];
    var cx = function(a) {
        this.H = _.A(a)
    };
    _.T(cx, _.C);
    cx.ia = [4];
    var dx = function(a) {
        this.H = _.A(a)
    };
    _.T(dx, _.C);
    var ex = function(a) {
        this.H = _.A(a)
    };
    _.T(ex, _.C);
    ex.prototype.pe = function() {
        return xr(this, dx, 2)
    };
    ex.ia = [1];
    var fx = function(a) {
        this.H = _.A(a)
    };
    _.T(fx, _.C);
    var gx = function(a) {
        this.H = _.A(a)
    };
    _.T(gx, _.C);
    gx.ia = [1];
    var hx = function(a) {
        this.H = _.A(a)
    };
    _.T(hx, _.C);
    var ix = [0, Fw, xw];
    var jx = function(a) {
        this.H = _.A(a)
    };
    _.T(jx, _.C);
    var kx = [0, ww];
    var lx = function(a) {
        this.H = _.A(a)
    };
    _.T(lx, _.C);
    lx.prototype.getEscapedQemQueryId = function() {
        return _.R(this, 1)
    };
    var mx = [0, Bw, Dw, kx, Dw, ix];
    var nx = function(a) {
        this.H = _.A(a)
    };
    _.T(nx, _.C);
    nx.prototype.getAdUnitPath = function() {
        return _.R(this, 1)
    };
    var ox = function(a) {
        this.H = _.A(a)
    };
    _.T(ox, _.C);
    ox.ia = [5];
    _.px = function(a) {
        this.H = _.A(a)
    };
    _.T(_.px, _.C);
    _.qx = function(a) {
        return bh(a, ox, 15)
    };
    _.px.prototype.ne = ca(0);
    _.px.prototype.cd = ca(1);
    _.px.prototype.oe = ca(2);
    _.px.ia = [15];
    var rx = function(a) {
        this.H = _.A(a)
    };
    _.T(rx, _.C);
    rx.prototype.getAdUnitPath = function() {
        return _.R(this, 2)
    };
    var sx = function(a) {
        this.H = _.A(a)
    };
    _.T(sx, _.C);
    var tx = [5, 7, 8, 9];
    var ux = function(a) {
        this.H = _.A(a)
    };
    _.T(ux, _.C);
    ux.ia = [4, 5, 6];
    var vx = function(a) {
        this.H = _.A(a)
    };
    _.T(vx, _.C);
    vx.prototype.getValue = function() {
        return _.R(this, 2)
    };
    vx.prototype.zf = function() {
        return null != _.Qi(this, 2)
    };
    var wx = function(a) {
        this.H = _.A(a)
    };
    _.T(wx, _.C);
    wx.ia = [13];
    var xx = function(a) {
        this.H = _.A(a)
    };
    _.T(xx, _.C);
    xx.ia = [15, 13];
    var yx = function(a) {
        this.H = _.A(a)
    };
    _.T(yx, _.C);
    var zx = function(a) {
            var b = new yx;
            return Hn(b, 1, a)
        },
        Ax = [0, Fw];
    var Pi = function(a) {
        this.H = _.A(a)
    };
    _.T(Pi, _.C);
    var Bx = function(a) {
        var b = new Pi;
        return rn(b, 1, a)
    };
    Pi.prototype.bb = function(a) {
        return _.tg(this, 10, a)
    };
    var Cx = pe(Pi),
        Dx = [0, Bw, Bw, xw, zw, zw, zw, xw, vw, Aw, Dw, Ax, Aw];
    var Ex = [0, yw, yw, yw];
    var Fx = [0, Dw, 2, Ex, Dw, Ex, Bw, Bw, Aw, Dw, [0, Fw, 4, Bw], xw];
    var Gx = function(a) {
        this.H = _.A(a)
    };
    _.T(Gx, _.C);
    Gx.ia = [1, 2];
    Gx.prototype.j = oe([0, Ew, Fx, Ew, Dx]);
    var Hx = function(a) {
        this.H = _.A(a)
    };
    _.T(Hx, _.C);
    Hx.prototype.getValue = function() {
        return _.Qi(this, 1)
    };
    Hx.prototype.zf = function() {
        return null != _.Qi(this, 1)
    };
    Hx.prototype.getVersion = function() {
        return Gn(this, 5)
    };
    var Ix = function(a) {
        this.H = _.A(a)
    };
    _.T(Ix, _.C);
    var Jx = function(a) {
        this.H = _.A(a)
    };
    _.T(Jx, _.C);
    var Kx = function(a) {
        this.H = _.A(a)
    };
    _.T(Kx, _.C);
    var Lx = function(a) {
        this.H = _.A(a)
    };
    _.T(Lx, _.C);
    Lx.prototype.getEscapedQemQueryId = function() {
        return _.R(this, 4)
    };
    Lx.ia = [2];
    var Mx = function(a) {
        this.H = _.A(a)
    };
    _.T(Mx, _.C);
    var Nx = function(a) {
        this.H = _.A(a)
    };
    _.T(Nx, _.C);
    var Ox = function(a) {
        this.H = _.A(a)
    };
    _.T(Ox, _.C);
    var Px = function(a) {
        this.H = _.A(a)
    };
    _.T(Px, _.C);
    var Qx = function(a) {
        this.H = _.A(a)
    };
    _.T(Qx, _.C);
    Qx.prototype.getEscapedQemQueryId = function() {
        return _.R(this, 2)
    };
    var Rx = function(a) {
        this.H = _.A(a)
    };
    _.T(Rx, _.C);
    var Sx = function(a) {
        this.H = _.A(a)
    };
    _.T(Sx, _.C);
    Sx.prototype.getWidth = function() {
        return _.kw(this, 9)
    };
    Sx.prototype.getHeight = function() {
        return _.kw(this, 10)
    };
    Sx.ia = [3, 7, 27, 11];
    var Tx = function(a) {
        this.H = _.A(a)
    };
    _.T(Tx, _.C);
    Tx.prototype.getHeight = function() {
        return Bo(this, 6)
    };
    Tx.prototype.getWidth = function() {
        return Bo(this, 7)
    };
    Tx.prototype.getEscapedQemQueryId = function() {
        return _.Qi(this, 34)
    };
    Tx.ia = [14, 15, 16, 17, 18, 19, 20, 21, 22, 45, 23, 27, 38, 53, 62, 63];
    var Ux = [39, 48];
    var Vx = function(a) {
        this.H = _.A(a)
    };
    _.T(Vx, _.C);
    var Ip = pe(Vx);
    var Wx = function(a) {
        this.H = _.A(a)
    };
    _.T(Wx, _.C);
    var Xx = pe(Wx);
    Wx.ia = [1, 2, 3];
    var Yx = window;
    var ht = function(a) {
        this.H = _.A(a)
    };
    _.T(ht, _.C);
    ht.ia = [15];
    var gt = function(a) {
        this.H = _.A(a)
    };
    _.T(gt, _.C);
    gt.prototype.getCorrelator = function() {
        return _.Me(this, 1)
    };
    gt.prototype.setCorrelator = function(a) {
        return _.qg(this, 1, a)
    };
    var ft = function(a) {
        this.H = _.A(a)
    };
    _.T(ft, _.C);
    var Zx = _.xv || Av;
    var ay;
    _.$x = Dh(function() {
        var a = document.createElement("div"),
            b = document.createElement("div");
        b.appendChild(document.createElement("div"));
        a.appendChild(b);
        b = a.firstChild.firstChild;
        a.innerHTML = _.ab(ni);
        return !b.parentElement
    });
    ay = function(a, b) {
        b = b instanceof _.Ra ? b : _.Su(b);
        a.href = _.Sa(b)
    };
    _.qh = function(a, b) {
        this.x = void 0 !== a ? a : 0;
        this.y = void 0 !== b ? b : 0
    };
    _.q = _.qh.prototype;
    _.q.clone = function() {
        return new _.qh(this.x, this.y)
    };
    _.q.equals = function(a) {
        return a instanceof _.qh && (this == a ? !0 : this && a ? this.x == a.x && this.y == a.y : !1)
    };
    _.q.ceil = function() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    };
    _.q.floor = function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    };
    _.q.round = function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    };
    _.uh = function(a, b) {
        this.width = a;
        this.height = b
    };
    _.q = _.uh.prototype;
    _.q.clone = function() {
        return new _.uh(this.width, this.height)
    };
    _.q.aspectRatio = function() {
        return this.width / this.height
    };
    _.q.isEmpty = function() {
        return !(this.width * this.height)
    };
    _.q.ceil = function() {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    _.q.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    _.q.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    var by, cy, dy, fy;
    by = function(a) {
        return a = Mu(a)
    };
    cy = function() {
        return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ Date.now()).toString(36)
    };
    dy = 2147483648 * Math.random() | 0;
    _.ey = function(a) {
        return String(a).replace(/\-([a-z])/g, function(b, c) {
            return c.toUpperCase()
        })
    };
    fy = function(a) {
        return a.replace(RegExp("(^|[\\s]+)([a-z])", "g"), function(b, c, d) {
            return c + d.toUpperCase()
        })
    };
    var iy, ky, jy, ny, py, uy;
    iy = function(a) {
        return a ? new _.gy(_.hy(a)) : iu || (iu = new _.gy)
    };
    ky = function(a, b) {
        Aa(b, function(c, d) {
            c && "object" == typeof c && c.mb && (c = c.Va());
            "style" == d ? a.style.cssText = c : "class" == d ? a.className = c : "for" == d ? a.htmlFor = c : jy.hasOwnProperty(d) ? a.setAttribute(jy[d], c) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, c) : a[d] = c
        })
    };
    jy = {
        cellpadding: "cellPadding",
        cellspacing: "cellSpacing",
        colspan: "colSpan",
        frameborder: "frameBorder",
        height: "height",
        maxlength: "maxLength",
        nonce: "nonce",
        role: "role",
        rowspan: "rowSpan",
        type: "type",
        usemap: "useMap",
        valign: "vAlign",
        width: "width"
    };
    _.my = function(a) {
        a = a.document;
        a = _.ly(a) ? a.documentElement : a.body;
        return new _.uh(a.clientWidth, a.clientHeight)
    };
    ny = function(a) {
        return a.scrollingElement ? a.scrollingElement : !Av && _.ly(a) ? a.documentElement : a.body || a.documentElement
    };
    _.oy = function(a) {
        return a ? a.parentWindow || a.defaultView : window
    };
    py = function(a, b, c) {
        function d(h) {
            h && b.appendChild("string" === typeof h ? a.createTextNode(h) : h)
        }
        for (var e = 1; e < c.length; e++) {
            var f = c[e];
            if (!_.ua(f) || _.la(f) && 0 < f.nodeType) d(f);
            else {
                a: {
                    if (f && "number" == typeof f.length) {
                        if (_.la(f)) {
                            var g = "function" == typeof f.item || "string" == typeof f.item;
                            break a
                        }
                        if ("function" === typeof f) {
                            g = "function" == typeof f.item;
                            break a
                        }
                    }
                    g = !1
                }
                _.tu(g ? ja(f) : f, d)
            }
        }
    };
    _.qy = function(a, b) {
        b = String(b);
        "application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
        return a.createElement(b)
    };
    _.ly = function(a) {
        return "CSS1Compat" == a.compatMode
    };
    _.ry = function(a) {
        return a && a.parentNode ? a.parentNode.removeChild(a) : null
    };
    _.sy = function(a) {
        var b;
        if (Zx && (b = a.parentElement)) return b;
        b = a.parentNode;
        return _.la(b) && 1 == b.nodeType ? b : null
    };
    _.ty = function(a, b) {
        if (!a || !b) return !1;
        if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
        if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
        for (; b && a != b;) b = b.parentNode;
        return b == a
    };
    _.hy = function(a) {
        return 9 == a.nodeType ? a : a.ownerDocument || a.document
    };
    uy = function(a) {
        try {
            return a.contentWindow || (a.contentDocument ? _.oy(a.contentDocument) : null)
        } catch (b) {}
        return null
    };
    _.gy = function(a) {
        this.j = a || _.r.document || document
    };
    _.q = _.gy.prototype;
    _.q.wj = function(a) {
        return "string" === typeof a ? this.j.getElementById(a) : a
    };
    _.q.Wk = _.gy.prototype.wj;
    _.q.getElementsByTagName = function(a, b) {
        return (b || this.j).getElementsByTagName(String(a))
    };
    _.q.createElement = function(a) {
        return _.qy(this.j, a)
    };
    _.q.createTextNode = function(a) {
        return this.j.createTextNode(String(a))
    };
    _.q.append = function(a, b) {
        py(_.hy(a), a, arguments)
    };
    _.q.wi = _.ry;
    _.q.contains = _.ty;
    var vy = function() {
        return Ha && Ja ? !Ja.mobile && (Ma("iPad") || Ma("Android") || Ma("Silk")) : Ma("iPad") || Ma("Android") && !Ma("Mobile") || Ma("Silk")
    };
    var xy, Zk, yy, Pm;
    _.wy = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");
    xy = function(a) {
        return a ? decodeURI(a) : a
    };
    Zk = function(a, b, c) {
        if (Array.isArray(b))
            for (var d = 0; d < b.length; d++) Zk(a, String(b[d]), c);
        else null != b && c.push(a + ("" === b ? "" : "=" + encodeURIComponent(String(b))))
    };
    _.Rp = function(a, b) {
        var c = [];
        for (d in b) Zk(d, b[d], c);
        b = c.join("&");
        if (b) {
            c = a.indexOf("#");
            0 > c && (c = a.length);
            var d = a.indexOf("?");
            if (0 > d || d > c) {
                d = c;
                var e = ""
            } else e = a.substring(d + 1, c);
            a = [a.slice(0, d), e, a.slice(c)];
            c = a[1];
            a[1] = b ? c ? c + "&" + b : b : c;
            a = a[0] + (a[1] ? "?" + a[1] : "") + a[2]
        }
        return a
    };
    yy = /#|$/;
    Pm = function(a, b) {
        var c = a.search(yy);
        a: {
            var d = 0;
            for (var e = b.length; 0 <= (d = a.indexOf(b, d)) && d < c;) {
                var f = a.charCodeAt(d - 1);
                if (38 == f || 63 == f)
                    if (f = a.charCodeAt(d + e), !f || 61 == f || 38 == f || 35 == f) break a;
                d += e + 1
            }
            d = -1
        }
        if (0 > d) return null;
        e = a.indexOf("&", d);
        if (0 > e || e > c) e = c;
        d += b.length + 1;
        return decodeURIComponent(a.slice(d, -1 !== e ? e : 0).replace(/\+/g, " "))
    };
    var bk, lj, zy, mj, Eh, Xm, qt, By, Cy, Fh, Dy, Ey, Fy, Gy, Hy, Iy, Jy, Ky, Ly, gi, ii, hi, dn, My, Oy, Py, Qy, Ry, Sy, Ty, nm, Jl, Uy, dl, Vy;
    _.Dj = function(a) {
        try {
            return !!a && null != a.location.href && vv(a, "foo")
        } catch (b) {
            return !1
        }
    };
    bk = function(a, b, c, d) {
        b = void 0 === b ? !1 : b;
        d = void 0 === d ? _.r : d;
        c = (void 0 === c ? 0 : c) ? zy(d) : d;
        for (d = 0; c && 40 > d++ && (!b && !_.Dj(c) || !a(c));) c = zy(c)
    };
    lj = function() {
        var a = window;
        bk(function(b) {
            a = b;
            return !1
        });
        return a
    };
    zy = function(a) {
        try {
            var b = a.parent;
            if (b && b != a) return b
        } catch (c) {}
        return null
    };
    mj = function(a) {
        return _.Dj(a.top) ? a.top : null
    };
    _.Nm = function(a, b) {
        var c = _.Oe("SCRIPT", a);
        $a(c, b);
        return (a = a.getElementsByTagName("script")[0]) && a.parentNode ? (a.parentNode.insertBefore(c, a), c) : null
    };
    Eh = function(a, b) {
        return b.getComputedStyle ? b.getComputedStyle(a, null) : a.currentStyle
    };
    _.pf = function() {
        if (!_.w.globalThis.crypto) return Math.random();
        try {
            var a = new Uint32Array(1);
            _.w.globalThis.crypto.getRandomValues(a);
            return a[0] / 65536 / 65536
        } catch (b) {
            return Math.random()
        }
    };
    _.bl = function(a, b) {
        if (a)
            for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
    };
    _.Ay = function(a) {
        var b = [];
        _.bl(a, function(c) {
            b.push(c)
        });
        return b
    };
    Xm = function(a, b) {
        return Ca(a, function(c, d) {
            return Object.prototype.hasOwnProperty.call(a, d) && b(c, d)
        })
    };
    _.qf = function(a) {
        var b = a.length;
        if (0 == b) return 0;
        for (var c = 305419896, d = 0; d < b; d++) c ^= (c << 5) + (c >> 2) + a.charCodeAt(d) & 4294967295;
        return 0 < c ? c : 4294967296 + c
    };
    _.rt = Dh(function() {
        return _.kg(["Google Web Preview", "Mediapartners-Google", "Google-Read-Aloud", "Google-Adwords"], By) || 1E-4 > Math.random()
    });
    qt = Dh(function() {
        return By("MSIE")
    });
    By = function(a) {
        return _.Ka(Ga(), a)
    };
    Cy = /^([0-9.]+)px$/;
    Fh = function(a) {
        return (a = Cy.exec(a)) ? +a[1] : null
    };
    Dy = function() {
        var a = window;
        try {
            for (var b = null; b != a; b = a, a = a.parent) switch (a.location.protocol) {
                case "https:":
                    return !0;
                case "file:":
                    return !0;
                case "http:":
                    return !1
            }
        } catch (c) {}
        return !0
    };
    Ey = function(a) {
        if (!a) return "";
        var b = RegExp(".*[&#?]google_debug(=[^&]*)?(&.*)?$");
        try {
            var c = b.exec(decodeURIComponent(a));
            if (c) return c[1] && 1 < c[1].length ? c[1].substring(1) : "true"
        } catch (d) {}
        return ""
    };
    Fy = {
        bl: "allow-forms",
        cl: "allow-modals",
        dl: "allow-orientation-lock",
        el: "allow-pointer-lock",
        fl: "allow-popups",
        gl: "allow-popups-to-escape-sandbox",
        il: "allow-presentation",
        jl: "allow-same-origin",
        kl: "allow-scripts",
        ll: "allow-top-navigation",
        ml: "allow-top-navigation-by-user-activation"
    };
    Gy = Dh(function() {
        return _.Ay(Fy)
    });
    Hy = function(a) {
        var b = Gy();
        return a.length ? _.ig(b, function(c) {
            return !(0 <= _.ha(a, c))
        }) : b
    };
    Iy = function() {
        var a = _.Oe("IFRAME"),
            b = {};
        _.tu(Gy(), function(c) {
            a.sandbox && a.sandbox.supports && a.sandbox.supports(c) && (b[c] = !0)
        });
        return b
    };
    Jy = function(a) {
        a = a && a.toString && a.toString();
        return "string" === typeof a && _.Ka(a, "[native code]")
    };
    Ky = function(a, b) {
        for (var c = 0; 50 > c; ++c) {
            try {
                var d = !(!a.frames || !a.frames[b])
            } catch (e) {
                d = !1
            }
            if (d) return a;
            if (!(a = zy(a))) break
        }
        return null
    };
    Ly = function(a) {
        if (!a || !a.frames) return null;
        if (a.frames.google_ads_top_frame) return a.frames.google_ads_top_frame.frameElement;
        try {
            var b = a.document,
                c = b.head,
                d, e = null != (d = b.body) ? d : null == c ? void 0 : c.parentElement;
            if (e) {
                var f = _.Oe("IFRAME");
                f.name = "google_ads_top_frame";
                f.id = "google_ads_top_frame";
                f.style.display = "none";
                f.style.position = "fixed";
                f.style.left = "-999px";
                f.style.top = "-999px";
                f.style.width = "0px";
                f.style.height = "0px";
                e.appendChild(f);
                return f
            }
        } catch (g) {}
        return null
    };
    _.hn = Dh(function() {
        return (Ha && Ja ? Ja.mobile : !vy() && (Ma("iPod") || Ma("iPhone") || Ma("Android") || Ma("IEMobile"))) ? 2 : vy() ? 1 : 0
    });
    gi = function(a, b) {
        var c;
        for (c = void 0 === c ? 100 : c; a && c--;) {
            if (a == b) return !0;
            a = a.parentElement
        }
        return !1
    };
    _.Ph = function(a, b) {
        _.bl(b, function(c, d) {
            a.style.setProperty(d, c, "important")
        })
    };
    ii = function(a, b, c) {
        for (c = void 0 === c ? 100 : c; a && c-- && !1 !== b(a);) a = a.parentElement
    };
    hi = function(a, b) {
        for (var c = 100; a && c--;) {
            var d = Eh(a, window);
            if (d) {
                if (b(d, a)) return !0;
                a = a.parentElement
            }
        }
        return !1
    };
    dn = function(a) {
        if (!a) return null;
        a = a.transform;
        if (!a) return null;
        a = a.replace(/^.*\(([0-9., -]+)\)$/, "$1").split(/, /);
        return 6 != a.length ? null : _.uu(a, parseFloat)
    };
    My = {};
    _.Ny = (My["http://googleads.g.doubleclick.net"] = !0, My["http://pagead2.googlesyndication.com"] = !0, My["https://googleads.g.doubleclick.net"] = !0, My["https://pagead2.googlesyndication.com"] = !0, My);
    Oy = function(a) {
        _.r.console && _.r.console.warn && _.r.console.warn(a)
    };
    Py = [];
    Qy = function() {
        var a = Py;
        Py = [];
        a = _.y(a);
        for (var b = a.next(); !b.done; b = a.next()) {
            b = b.value;
            try {
                b()
            } catch (c) {}
        }
    };
    Ry = function(a) {
        return a.replace(/\\(n|r|\\)/g, function(b, c) {
            return "n" == c ? "\n" : "r" == c ? "\r" : "\\"
        })
    };
    Sy = function() {
        var a = void 0 === a ? Math.random : a;
        return Math.floor(a() * Math.pow(2, 52))
    };
    _.Kg = function(a) {
        if ("number" !== typeof a.goog_pvsid) try {
            Object.defineProperty(a, "goog_pvsid", {
                value: Sy(),
                configurable: !1
            })
        } catch (b) {}
        return Number(a.goog_pvsid) || -1
    };
    Ty = function(a, b) {
        "complete" === a.readyState || "interactive" === a.readyState ? (Py.push(b), 1 == Py.length && (_.w.Promise ? _.w.Promise.resolve().then(Qy) : window.setImmediate ? setImmediate(Qy) : setTimeout(Qy, 0))) : a.addEventListener("DOMContentLoaded", b)
    };
    nm = function(a) {
        return "number" === typeof a && isFinite(a) && 0 == a % 1 && 0 < a
    };
    Jl = function(a) {
        return 0 === a || nm(a)
    };
    Uy = function(a) {
        return new _.w.Promise(function(b) {
            setTimeout(function() {
                return void b(void 0)
            }, a)
        })
    };
    dl = function(a) {
        try {
            var b = JSON.stringify(a)
        } catch (c) {}
        return b || String(a)
    };
    _.Oe = function(a, b) {
        b = void 0 === b ? document : b;
        return b.createElement(String(a).toLowerCase())
    };
    Vy = function(a) {
        for (var b = a; a && a != a.parent;) a = a.parent, _.Dj(a) && (b = a);
        return b
    };
    _.Wy = function(a, b, c, d) {
        this.top = a;
        this.right = b;
        this.bottom = c;
        this.left = d
    };
    _.q = _.Wy.prototype;
    _.q.getWidth = function() {
        return this.right - this.left
    };
    _.q.getHeight = function() {
        return this.bottom - this.top
    };
    _.q.clone = function() {
        return new _.Wy(this.top, this.right, this.bottom, this.left)
    };
    _.q.contains = function(a) {
        return this && a ? a instanceof _.Wy ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1
    };
    _.q.ceil = function() {
        this.top = Math.ceil(this.top);
        this.right = Math.ceil(this.right);
        this.bottom = Math.ceil(this.bottom);
        this.left = Math.ceil(this.left);
        return this
    };
    _.q.floor = function() {
        this.top = Math.floor(this.top);
        this.right = Math.floor(this.right);
        this.bottom = Math.floor(this.bottom);
        this.left = Math.floor(this.left);
        return this
    };
    _.q.round = function() {
        this.top = Math.round(this.top);
        this.right = Math.round(this.right);
        this.bottom = Math.round(this.bottom);
        this.left = Math.round(this.left);
        return this
    };
    var Xy = function(a, b, c, d) {
        this.left = a;
        this.top = b;
        this.width = c;
        this.height = d
    };
    Xy.prototype.clone = function() {
        return new Xy(this.left, this.top, this.width, this.height)
    };
    var Yy = function(a) {
            return new _.Wy(a.top, a.left + a.width, a.top + a.height, a.left)
        },
        Zy = function(a, b) {
            var c = Math.max(a.left, b.left),
                d = Math.min(a.left + a.width, b.left + b.width);
            if (c <= d) {
                var e = Math.max(a.top, b.top);
                a = Math.min(a.top + a.height, b.top + b.height);
                if (e <= a) return new Xy(c, e, d - c, a - e)
            }
            return null
        };
    _.q = Xy.prototype;
    _.q.contains = function(a) {
        return a instanceof _.qh ? a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height : this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height
    };
    _.q.distance = function(a) {
        var b = a.x < this.left ? this.left - a.x : Math.max(a.x - (this.left + this.width), 0);
        a = a.y < this.top ? this.top - a.y : Math.max(a.y - (this.top + this.height), 0);
        return Math.sqrt(b * b + a * a)
    };
    _.q.ceil = function() {
        this.left = Math.ceil(this.left);
        this.top = Math.ceil(this.top);
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    _.q.floor = function() {
        this.left = Math.floor(this.left);
        this.top = Math.floor(this.top);
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    _.q.round = function() {
        this.left = Math.round(this.left);
        this.top = Math.round(this.top);
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    var $y = function(a) {
        return (a = void 0 === a ? re() : a) ? _.Dj(a.master) ? a.master : null : null
    };
    var cz, ez, th, fz, gz, ph, go;
    _.bz = function(a, b, c) {
        if ("string" === typeof b)(b = _.az(a, b)) && (a.style[b] = c);
        else
            for (var d in b) {
                c = a;
                var e = b[d],
                    f = _.az(c, d);
                f && (c.style[f] = e)
            }
    };
    cz = {};
    _.az = function(a, b) {
        var c = cz[b];
        if (!c) {
            var d = _.ey(b);
            c = d;
            void 0 === a.style[d] && (d = (Av ? "Webkit" : zv ? "Moz" : _.xv ? "ms" : null) + fy(d), void 0 !== a.style[d] && (c = d));
            cz[b] = c
        }
        return c
    };
    _.dz = function(a, b) {
        var c = _.hy(a);
        return c.defaultView && c.defaultView.getComputedStyle && (a = c.defaultView.getComputedStyle(a, null)) ? a[b] || a.getPropertyValue(b) || "" : ""
    };
    ez = function(a, b) {
        return _.dz(a, b) || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b]
    };
    th = function(a) {
        try {
            return a.getBoundingClientRect()
        } catch (b) {
            return {
                left: 0,
                top: 0,
                right: 0,
                bottom: 0
            }
        }
    };
    fz = function(a) {
        if (_.xv && !(8 <= Number(Jv))) return a.offsetParent;
        var b = _.hy(a),
            c = ez(a, "position"),
            d = "fixed" == c || "absolute" == c;
        for (a = a.parentNode; a && a != b; a = a.parentNode)
            if (11 == a.nodeType && a.host && (a = a.host), c = ez(a, "position"), d = d && "static" == c && a != b.documentElement && a != b.body, !d && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || "fixed" == c || "absolute" == c || "relative" == c)) return a;
        return null
    };
    gz = function(a) {
        var b = _.hy(a),
            c = new _.qh(0, 0);
        var d = b ? _.hy(b) : document;
        d = !_.xv || 9 <= Number(Jv) || _.ly(iy(d).j) ? d.documentElement : d.body;
        if (a == d) return c;
        a = th(a);
        d = iy(b).j;
        b = ny(d);
        d = d.parentWindow || d.defaultView;
        b = _.xv && d.pageYOffset != b.scrollTop ? new _.qh(b.scrollLeft, b.scrollTop) : new _.qh(d.pageXOffset || b.scrollLeft, d.pageYOffset || b.scrollTop);
        c.x = a.left + b.x;
        c.y = a.top + b.y;
        return c
    };
    ph = function(a, b) {
        var c = new _.qh(0, 0),
            d = _.oy(_.hy(a));
        if (!vv(d, "parent")) return c;
        do {
            var e = d == b ? gz(a) : _.hz(a);
            c.x += e.x;
            c.y += e.y
        } while (d && d != b && d != d.parent && (a = d.frameElement) && (d = d.parent));
        return c
    };
    _.hz = function(a) {
        a = th(a);
        return new _.qh(a.left, a.top)
    };
    _.iz = function(a, b) {
        "number" == typeof a && (a = (b ? Math.round(a) : a) + "px");
        return a
    };
    _.sh = function(a, b) {
        if ("none" != ez(b, "display")) return a(b);
        var c = b.style,
            d = c.display,
            e = c.visibility,
            f = c.position;
        c.visibility = "hidden";
        c.position = "absolute";
        c.display = "inline";
        a = a(b);
        c.display = d;
        c.position = f;
        c.visibility = e;
        return a
    };
    _.jz = function(a) {
        var b = a.offsetWidth,
            c = a.offsetHeight,
            d = Av && !b && !c;
        return (void 0 === b || d) && a.getBoundingClientRect ? (a = th(a), new _.uh(a.right - a.left, a.bottom - a.top)) : new _.uh(b, c)
    };
    go = function(a, b) {
        a.style.display = b ? "" : "none"
    };
    var di = function(a) {
        a = $y(re(a)) || a;
        a = a.google_unique_id;
        return "number" === typeof a ? a : 0
    };
    var kz = function(a) {
        this.H = _.A(a)
    };
    _.T(kz, _.C);
    var lz = {
        "-": 0,
        Y: 2,
        N: 1
    };
    var mz = function(a) {
        this.H = _.A(a)
    };
    _.T(mz, _.C);
    mz.prototype.getVersion = function() {
        return _.kw(this, 2)
    };
    mz.ia = [3];
    var nz = function(a) {
        this.H = _.A(a)
    };
    _.T(nz, _.C);
    var oz = function(a) {
        this.H = _.A(a)
    };
    _.T(oz, _.C);
    var pz = function(a) {
        this.H = _.A(a)
    };
    _.T(pz, _.C);
    pz.prototype.getVersion = function() {
        return _.kw(this, 1)
    };
    var qz = function(a) {
        this.H = _.A(a)
    };
    _.T(qz, _.C);
    var rz = function(a) {
        this.H = _.A(a)
    };
    _.T(rz, _.C);
    var sz = function(a) {
        var b = new rz;
        return _.tg(b, 1, a)
    };
    var tz = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        uz = tz.reduce(function(a, b) {
            return a + b
        });
    var vz = function(a) {
        this.H = _.A(a)
    };
    _.T(vz, _.C);
    var wz = function(a) {
        this.H = _.A(a)
    };
    _.T(wz, _.C);
    wz.prototype.getVersion = function() {
        return _.kw(this, 1)
    };
    var xz = function(a) {
        this.H = _.A(a)
    };
    _.T(xz, _.C);
    var yz = function(a) {
        this.H = _.A(a)
    };
    _.T(yz, _.C);
    var zz = function(a) {
        var b = new yz;
        return _.tg(b, 1, a)
    };
    var Az = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        Bz = Az.reduce(function(a, b) {
            return a + b
        });
    var Cz = function(a) {
        this.H = _.A(a)
    };
    _.T(Cz, _.C);
    var Dz = function(a) {
        this.H = _.A(a)
    };
    _.T(Dz, _.C);
    var Ez = function(a) {
        this.H = _.A(a)
    };
    _.T(Ez, _.C);
    Ez.prototype.getVersion = function() {
        return _.kw(this, 1)
    };
    var Fz = function(a) {
        this.H = _.A(a)
    };
    _.T(Fz, _.C);
    var Gz = function(a) {
        this.H = _.A(a)
    };
    _.T(Gz, _.C);
    var Hz = function(a) {
        var b = new Gz;
        return _.tg(b, 1, a)
    };
    var Iz = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        Jz = Iz.reduce(function(a, b) {
            return a + b
        });
    var Kz = function(a) {
        this.H = _.A(a)
    };
    _.T(Kz, _.C);
    var Lz = function(a) {
        this.H = _.A(a)
    };
    _.T(Lz, _.C);
    Lz.prototype.getVersion = function() {
        return _.kw(this, 1)
    };
    var Mz = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        Nz = Mz.reduce(function(a, b) {
            return a + b
        });
    var Oz = function(a) {
        this.H = _.A(a)
    };
    _.T(Oz, _.C);
    var Pz = function(a, b) {
        if (_.w.globalThis.fetch) _.w.globalThis.fetch(a, {
            method: "POST",
            body: b,
            keepalive: 65536 > b.length,
            credentials: "omit",
            mode: "no-cors",
            redirect: "follow"
        }).catch(function() {});
        else {
            var c = new XMLHttpRequest;
            c.open("POST", a, !0);
            c.send(b)
        }
    };
    var Qz = function(a) {
        this.H = _.A(a)
    };
    _.T(Qz, _.C);
    var Rz = function(a) {
        this.H = _.A(a)
    };
    _.T(Rz, _.C);
    var Ag = function(a) {
        this.H = _.A(a)
    };
    _.T(Ag, _.C);
    var vg = function(a) {
        this.H = _.A(a)
    };
    _.T(vg, _.C);
    var sg = function(a) {
        this.H = _.A(a)
    };
    _.T(sg, _.C);
    var Sz = function(a) {
        this.H = _.A(a)
    };
    _.T(Sz, _.C);
    var pg = function(a) {
        this.H = _.A(a)
    };
    _.T(pg, _.C);
    pg.prototype.getTagSessionCorrelator = function() {
        return _.Me(this, 2)
    };
    pg.ia = [4];
    var xg = [6, 7, 8, 9, 11];
    var Vg = function(a) {
        this.H = _.A(a)
    };
    _.T(Vg, _.C);
    Vg.ia = [3];
    var Lg = function(a) {
        this.H = _.A(a)
    };
    _.T(Lg, _.C);
    Lg.ia = [4, 5];
    var Jg = function(a) {
        this.H = _.A(a)
    };
    _.T(Jg, _.C);
    Jg.prototype.getTagSessionCorrelator = function() {
        return _.Me(this, 1)
    };
    Jg.ia = [2];
    var Ig = function(a) {
        this.H = _.A(a)
    };
    _.T(Ig, _.C);
    var Yg = [4, 6];
    _.U = function() {
        this.K = this.K;
        this.ua = this.ua
    };
    _.U.prototype.K = !1;
    _.U.prototype.wa = function() {
        this.K || (this.K = !0, this.A())
    };
    _.S = function(a, b) {
        _.Vo(a, _.hu(He, b))
    };
    _.Vo = function(a, b) {
        a.K ? b() : (a.ua || (a.ua = []), a.ua.push(b))
    };
    _.U.prototype.A = function() {
        if (this.ua)
            for (; this.ua.length;) this.ua.shift()()
    };
    var Tz = function(a, b, c, d, e, f, g) {
            this.J = c;
            this.m = d;
            this.B = e;
            this.C = f;
            this.K = g;
            this.j = [];
            this.A = null;
            a && b ? (c = new Oz, a = _.I(c, 1, a), this.o = _.rg(a, 2, b)) : this.o = void 0
        },
        Uz = function(a) {
            null !== a.A && (clearTimeout(a.A), a.A = null);
            if (a.j.length) {
                var b = De(a.j, a.o);
                a.m(a.J + "?e=1", b);
                a.j = []
            }
        };
    Tz.prototype.kg = function() {
        var a = _.jb.apply(0, arguments),
            b = this;
        this.K && 65536 <= De(this.j.concat(a), this.o).length && Uz(this);
        this.j.push.apply(this.j, _.Ee(a));
        this.j.length >= this.C && Uz(this);
        this.j.length && null === this.A && (this.A = setTimeout(function() {
            Uz(b)
        }, this.B))
    };
    var ut = function(a, b, c, d, e) {
        Tz.call(this, a, b, "https://pagead2.googlesyndication.com/pagead/ping", Pz, void 0 === c ? 1E3 : c, void 0 === d ? 100 : d, (void 0 === e ? !1 : e) && !!_.w.globalThis.fetch)
    };
    _.T(ut, Tz);
    var Vz = function(a, b) {
            this.j = a;
            this.defaultValue = void 0 === b ? !1 : b
        },
        Wz = function(a, b) {
            this.j = a;
            this.defaultValue = void 0 === b ? 0 : b
        },
        Xz = function(a, b) {
            this.j = a;
            this.defaultValue = void 0 === b ? "" : b
        },
        Yz = function(a) {
            var b = void 0 === b ? [] : b;
            this.j = a;
            this.defaultValue = b
        };
    var Zz, wp, np, vp, Uh, eA, Qn, fA, gA, ln, Cn, hA, iA, jA, Zs, Ys, dt, kA, lA, mA, nA, oA, pA, qA, rA, sA, tA, uA, vA, wA, xA, yA, zA, Fp, AA, ym, BA, Mf, Ws, Vn, Mo, HA, JA, Dg, KA, LA, Ds, Zo, MA, NA, OA, PA, QA, RA, SA, TA, UA, VA, Yk, Vk, YA, Ts, ZA, $A, aB, mm, bB, cB, tt, Kj, dB, eB, fB, mq, Jj, gB, cr, bs, hB, iB, jB, kB, lB, mB, nB, kt, lt, mt, jt, oB, pB, Zr, qB, sB;
    Zz = new Vz(1122, !0);
    _.$z = new Vz(557811243);
    _.aA = new Xz(549581487, "#1A73E8");
    _.bA = new Xz(549581486, "#FFFFFF");
    _.cA = new Vz(546245766);
    _.dA = new Vz(545471060);
    wp = new Vz(561037726);
    np = new Vz(560713690);
    vp = new Vz(559883476);
    Uh = new Wz(7, .1);
    eA = new Vz(212);
    Qn = new Wz(474069761);
    fA = new Wz(455645877);
    gA = new Wz(462420536);
    ln = new Vz(476475256);
    Cn = new Vz(514499457, !0);
    hA = new Wz(448338836, .01);
    iA = new Wz(427198696, 1);
    jA = new Wz(438663674);
    Zs = new Wz(45409629);
    Ys = new Wz(522348973);
    dt = new Wz(550605190);
    kA = new Vz(558225291);
    lA = new Vz(542047475);
    mA = new Wz(408380992, .01);
    nA = new Wz(494575051);
    oA = new Yz(489560439);
    pA = new Yz(505762507);
    qA = new Vz(453);
    rA = new Vz(454);
    sA = new Wz(377289019, 1E4);
    tA = new Wz(488);
    uA = new Vz(45414566, !0);
    vA = new Wz(529, 20);
    wA = new Xz(10);
    xA = new Vz(489217043);
    yA = new Vz(549005203, !0);
    zA = new Vz(495013820);
    Fp = new Wz(447000223, .01);
    AA = new Vz(360245597, !0);
    ym = new Vz(540043576);
    BA = new Vz(471855283);
    Mf = new Vz(465118388);
    Ws = new Vz(45401686);
    Vn = new Vz(45401685, !0);
    _.CA = new Vz(479390945);
    _.DA = new Vz(518650310);
    _.EA = new Vz(551365509);
    Mo = new Wz(492, .01);
    _.FA = new Vz(547020083);
    _.GA = new Wz(550718589);
    HA = new Wz(474872234);
    _.IA = new Vz(531615531);
    JA = new Vz(83);
    Dg = new Vz(85);
    KA = new Vz(547249510);
    LA = new Vz(537116804);
    Ds = new Vz(524098256);
    Zo = new Wz(532520346, 120);
    MA = new Vz(557870754);
    NA = new Wz(553562174, 10);
    OA = new Yz(466086960);
    PA = new Wz(398776877, 6E4);
    QA = new Wz(374201269, 6E4);
    RA = new Wz(371364213, 6E4);
    SA = new Wz(376149757, .0025);
    TA = new Vz(453275889);
    UA = new Vz(377936516, !0);
    VA = new Wz(24);
    Yk = new Yz(1);
    Vk = new Xz(2, "1-0-40");
    _.WA = new Wz(506394061, 100);
    _.XA = new Vz(526684968, !0);
    YA = new Vz(552504722);
    Ts = new Yz(489);
    ZA = new Vz(392065905);
    $A = new Wz(360245595, 500);
    aB = new Vz(546012252);
    mm = new Vz(45397804, !0);
    bB = new Vz(45398607, !0);
    cB = new Vz(424117738);
    tt = new Wz(397316938, 1E3);
    Kj = new Vz(531493729);
    dB = new Vz(555237688);
    eB = new Vz(555237687);
    fB = new Vz(555237686, !0);
    mq = new Vz(547284348);
    Jj = new Vz(507033477, !0);
    gB = new Vz(552803605, !0);
    cr = new Vz(399705355);
    bs = new Wz(514795754, 2);
    hB = new Vz(45415915, !0);
    iB = new Vz(548203148);
    jB = new Vz(561446515);
    kB = new Vz(501);
    lB = new Vz(439828594);
    mB = new Vz(483962503);
    nB = new Vz(506738118);
    kt = new Vz(77);
    lt = new Vz(78);
    mt = new Vz(80);
    jt = new Vz(76);
    oB = new Vz(84);
    pB = new Vz(1958);
    Zr = new Vz(1973);
    qB = new Vz(188);
    _.rB = new Wz(1972);
    sB = new Vz(485990406);
    var tB = function(a, b, c, d, e, f) {
            try {
                var g = a.j,
                    h = _.Oe("SCRIPT", g);
                h.async = !0;
                $a(h, b);
                g.head.appendChild(h);
                h.addEventListener("load", function() {
                    e();
                    d && g.head.removeChild(h)
                });
                h.addEventListener("error", function() {
                    0 < c ? tB(a, b, c - 1, d, e, f) : (d && g.head.removeChild(h), f())
                })
            } catch (k) {
                f()
            }
        },
        uB = function(a, b, c, d) {
            c = void 0 === c ? function() {} : c;
            d = void 0 === d ? function() {} : d;
            tB(iy(a), b, 0, !1, c, d)
        };
    Ba({
        Jl: 0,
        Il: 1,
        Fl: 2,
        Al: 3,
        Gl: 4,
        Bl: 5,
        Hl: 6,
        Dl: 7,
        El: 8,
        zl: 9,
        Cl: 10,
        Kl: 11
    }).map(function(a) {
        return Number(a)
    });
    Ba({
        Ml: 0,
        Nl: 1,
        Ll: 2
    }).map(function(a) {
        return Number(a)
    });
    var vB = function(a, b) {
        this.j = Ie(a);
        this.A = b
    };
    vB.prototype[_.z(_.w.Symbol, "iterator")] = function() {
        return this
    };
    vB.prototype.next = function() {
        var a = this.j.next();
        return {
            value: a.done ? void 0 : this.A.call(void 0, a.value),
            done: a.done
        }
    };
    var wB = function(a, b) {
            return new vB(a, b)
        },
        xB = function(a) {
            this.A = a;
            this.j = 0
        };
    xB.prototype[_.z(_.w.Symbol, "iterator")] = function() {
        return this
    };
    xB.prototype.next = function() {
        for (; this.j < this.A.length;) {
            var a = this.A[this.j].next();
            if (!a.done) return a;
            this.j++
        }
        return {
            done: !0
        }
    };
    var yB = function() {
        return new xB(_.jb.apply(0, arguments).map(Ie))
    };
    var zB = _.r.URL,
        AB;
    try {
        new zB("http://example.com"), AB = !0
    } catch (a) {
        AB = !1
    }
    var BB = AB,
        CB = function(a) {
            this.j = new _.w.Map;
            0 == a.indexOf("?") && (a = a.substring(1));
            a = _.y(a.split("&"));
            for (var b = a.next(); !b.done; b = a.next()) {
                var c = b.value;
                b = c;
                var d = "";
                c = c.split("=");
                1 < c.length && (b = decodeURIComponent(c[0].replace("+", " ")), d = decodeURIComponent(c[1].replace("+", " ")));
                c = this.j.get(b);
                null == c && (c = [], this.j.set(b, c));
                c.push(d)
            }
        };
    CB.prototype.get = function(a) {
        return (a = this.j.get(a)) && a.length ? a[0] : null
    };
    CB.prototype.getAll = function(a) {
        return [].concat(_.Ee(this.j.get(a) || []))
    };
    CB.prototype.has = function(a) {
        return this.j.has(a)
    };
    CB.prototype[_.z(_.w.Symbol, "iterator")] = function() {
        return yB.apply(null, _.Ee(wB(this.j, function(a) {
            var b = a[0];
            return wB(a[1], function(c) {
                return [b, c]
            })
        })))
    };
    CB.prototype.toString = function() {
        return DB(this)
    };
    var DB = function(a) {
            var b = function(c) {
                return encodeURIComponent(c).replace(/[!()~']|(%20)/g, function(d) {
                    return {
                        "!": "%21",
                        "(": "%28",
                        ")": "%29",
                        "%20": "+",
                        "'": "%27",
                        "~": "%7E"
                    }[d]
                })
            };
            return _.z(Array, "from").call(Array, a, function(c) {
                return b(c[0]) + "=" + b(c[1])
            }).join("&")
        },
        FB = function(a) {
            var b = _.qy(document, "A");
            try {
                ay(b, fb(a));
                var c = b.protocol
            } catch (e) {
                throw Error(a + " is not a valid URL.");
            }
            if ("" === c || ":" === c || ":" != c[c.length - 1]) throw Error(a + " is not a valid URL.");
            if (!EB.has(c)) throw Error(a + " is not a valid URL.");
            if (!b.hostname) throw Error(a + " is not a valid URL.");
            var d = b.href;
            a = {
                href: d,
                protocol: b.protocol,
                username: "",
                password: "",
                hostname: b.hostname,
                pathname: "/" + b.pathname,
                search: b.search,
                hash: b.hash,
                toString: function() {
                    return d
                }
            };
            EB.get(b.protocol) === b.port ? (a.host = a.hostname, a.port = "", a.origin = a.protocol + "//" + a.hostname) : (a.host = b.host, a.port = b.port, a.origin = a.protocol + "//" + a.hostname + ":" + a.port);
            return a
        },
        GB = function(a) {
            if (BB) {
                try {
                    var b = new zB(a)
                } catch (d) {
                    throw Error(a + " is not a valid URL.");
                }
                var c = EB.get(b.protocol);
                if (!c) throw Error(a + " is not a valid URL.");
                if (!b.hostname) throw Error(a + " is not a valid URL.");
                "null" == b.origin && (a = {
                    href: b.href,
                    protocol: b.protocol,
                    username: "",
                    password: "",
                    host: b.host,
                    port: b.port,
                    hostname: b.hostname,
                    pathname: b.pathname,
                    search: b.search,
                    hash: b.hash
                }, a.origin = c === b.port ? b.protocol + "//" + b.hostname : b.protocol + "//" + b.hostname + ":" + b.port, b = a);
                return b
            }
            return FB(a)
        },
        EB = new _.w.Map([
            ["http:", "80"],
            ["https:", "443"],
            ["ws:", "80"],
            ["wss:", "443"],
            ["ftp:", "21"]
        ]),
        HB = function(a) {
            return BB && a.searchParams ? a.searchParams : new CB(a.search)
        };
    var IB = function(a) {
            var b = HB(GB(a.location.href));
            a = b.get("fcconsent");
            b = b.get("fc");
            return "alwaysshow" === b ? b : "alwaysshow" === a ? a : null
        },
        JB = function(a) {
            a = HB(GB(a.location.href)).get("fctype");
            return -1 !== ["ab", "gdpr", "consent", "ccpa", "monetization"].indexOf(a) ? a : null
        };
    var KB = function(a) {
        var b = a.document,
            c = function() {
                if (!a.frames.googlefcPresent)
                    if (b.body) {
                        var d = _.Oe("IFRAME", b);
                        d.style.display = "none";
                        d.style.width = "0px";
                        d.style.height = "0px";
                        d.style.border = "none";
                        d.style.zIndex = "-1000";
                        d.style.left = "-1000px";
                        d.style.top = "-1000px";
                        d.name = "googlefcPresent";
                        b.body.appendChild(d)
                    } else a.setTimeout(c, 5)
            };
        c()
    };
    var LB = function(a) {
        this.H = _.A(a)
    };
    _.T(LB, _.C);
    LB.ia = [1, 2];
    var MB = function(a) {
        this.H = _.A(a)
    };
    _.T(MB, _.C);
    var Je = pe(MB);
    var NB = function(a, b, c, d) {
        _.U.call(this);
        this.I = b;
        this.F = c;
        this.T = d;
        this.m = new _.w.Map;
        this.M = 0;
        this.o = new _.w.Map;
        this.B = new _.w.Map;
        this.J = void 0;
        this.C = a
    };
    _.T(NB, _.U);
    NB.prototype.A = function() {
        delete this.j;
        this.m.clear();
        this.o.clear();
        this.B.clear();
        this.J && (_.Pe(this.C, "message", this.J), delete this.J);
        delete this.C;
        delete this.T;
        _.U.prototype.A.call(this)
    };
    var OB = function(a) {
            if (a.j) return a.j;
            a.F && a.F(a.C) ? a.j = a.C : a.j = Ky(a.C, a.I);
            var b;
            return null != (b = a.j) ? b : null
        },
        QB = function(a, b, c) {
            if (OB(a))
                if (a.j === a.C)(b = a.m.get(b)) && b(a.j, c);
                else {
                    var d = a.o.get(b);
                    if (d && d.Ec) {
                        PB(a);
                        var e = ++a.M;
                        a.B.set(e, {
                            lc: d.lc,
                            Wi: d.od(c),
                            ek: "addEventListener" === b
                        });
                        a.j.postMessage(d.Ec(c, e), "*")
                    }
                }
        },
        PB = function(a) {
            a.J || (a.J = function(b) {
                try {
                    var c = a.T ? a.T(b) : void 0;
                    if (c) {
                        var d = c.Zf,
                            e = a.B.get(d);
                        if (e) {
                            e.ek || a.B.delete(d);
                            var f;
                            null == (f = e.lc) || f.call(e, e.Wi, c.payload)
                        }
                    }
                } catch (g) {}
            }, _.lb(a.C, "message", a.J))
        };
    var RB = function(a, b) {
            var c = {
                cb: function(d) {
                    d = Je(d);
                    b.Kb({
                        consentData: d
                    })
                }
            };
            b.spsp && (c.spsp = b.spsp);
            a = a.googlefc || (a.googlefc = {});
            a.__fci = a.__fci || [];
            a.__fci.push(b.command, c)
        },
        SB = {
            od: function(a) {
                return a.Kb
            },
            Ec: function(a, b) {
                return {
                    __fciCall: {
                        callId: b,
                        command: a.command,
                        spsp: a.spsp || void 0
                    }
                }
            },
            lc: function(a, b) {
                a({
                    consentData: b
                })
            }
        },
        lo = function(a) {
            _.U.call(this);
            this.j = this.o = !1;
            this.caller = new NB(a, "googlefcPresent", void 0, Ne);
            this.caller.m.set("getDataWithCallback", RB);
            this.caller.o.set("getDataWithCallback", SB)
        };
    _.T(lo, _.U);
    lo.prototype.A = function() {
        this.caller.wa();
        _.U.prototype.A.call(this)
    };
    var TB = function(a) {
            a.o || (a.j = !!OB(a.caller), a.o = !0);
            return a.j
        },
        UB = function(a) {
            return new _.w.Promise(function(b) {
                TB(a) && QB(a.caller, "getDataWithCallback", {
                    command: "loaded",
                    Kb: function(c) {
                        b(c.consentData)
                    }
                })
            })
        },
        VB = function(a, b) {
            TB(a) && QB(a.caller, "getDataWithCallback", {
                command: "prov",
                spsp: Qj(b),
                Kb: function() {}
            })
        };
    var WB = function(a, b, c, d, e) {
            Qe(a, b, void 0 === c ? null : c, void 0 === d ? !1 : d, void 0 === e ? !1 : e)
        },
        mg = function(a, b) {
            var c = void 0 === c ? !1 : c;
            var d = "https://pagead2.googlesyndication.com/pagead/gen_204?id=" + b;
            _.bl(a, function(e, f) {
                if (e || 0 === e) d += "&" + f + "=" + encodeURIComponent("" + e)
            });
            Xp(d, c)
        },
        Xp = function(a, b) {
            var c = window;
            b = void 0 === b ? !1 : b;
            var d = void 0 === d ? !1 : d;
            c.fetch ? (b = {
                keepalive: !0,
                credentials: "include",
                redirect: "follow",
                method: "get",
                mode: "no-cors"
            }, d && (b.mode = "cors", "setAttributionReporting" in XMLHttpRequest.prototype ? b.attributionReporting = {
                eventSourceEligible: "true",
                triggerEligible: "false"
            } : b.headers = {
                "Attribution-Reporting-Eligible": "event-source"
            }), c.fetch(a, b)) : WB(c, a, void 0, b, d)
        };
    var XB = function(a) {
            void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = void 0);
            void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = void 0);
            return void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.listenerId && "number" !== typeof a.listenerId ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3
        },
        YB = function(a, b) {
            b = void 0 === b ? {} : b;
            _.U.call(this);
            this.o = a;
            this.j = null;
            this.m = {};
            this.T = 0;
            var c;
            this.B = null != (c = b.timeoutMs) ? c : 500;
            var d;
            this.J = null != (d = b.Gi) ? d : !1;
            this.C = null
        };
    _.T(YB, _.U);
    YB.prototype.A = function() {
        this.m = {};
        this.C && (_.Pe(this.o, "message", this.C), delete this.C);
        delete this.m;
        delete this.o;
        delete this.j;
        _.U.prototype.A.call(this)
    };
    var $B = function(a) {
        return "function" === typeof a.o.__tcfapi || null != ZB(a)
    };
    YB.prototype.addEventListener = function(a) {
        var b = this,
            c = {
                internalBlockOnErrors: this.J
            },
            d = _.qu(function() {
                return a(c)
            }),
            e = 0; - 1 !== this.B && (e = setTimeout(function() {
            c.tcString = "tcunavailable";
            c.internalErrorState = 1;
            d()
        }, this.B));
        var f = function(g, h) {
            clearTimeout(e);
            g ? (c = g, c.internalErrorState = XB(c), c.internalBlockOnErrors = b.J, h && 0 === c.internalErrorState || (c.tcString = "tcunavailable", h || (c.internalErrorState = 3))) : (c.tcString = "tcunavailable", c.internalErrorState = 3);
            a(c)
        };
        try {
            aC(this, "addEventListener", f)
        } catch (g) {
            c.tcString = "tcunavailable", c.internalErrorState = 3, e && (clearTimeout(e), e = 0), d()
        }
    };
    YB.prototype.removeEventListener = function(a) {
        a && a.listenerId && aC(this, "removeEventListener", null, a.listenerId)
    };
    var bC = function(a, b) {
            var c = void 0 === c ? "755" : c;
            a: {
                if (a.publisher && a.publisher.restrictions) {
                    var d = a.publisher.restrictions[b];
                    if (void 0 !== d) {
                        d = d[void 0 === c ? "755" : c];
                        break a
                    }
                }
                d = void 0
            }
            if (0 === d) return !1;
            a.purpose && a.vendor ? (d = a.vendor.consents, (c = !(!d || !d[void 0 === c ? "755" : c])) && "1" === b && a.purposeOneTreatment && "CH" === a.publisherCC ? b = !0 : (c && (a = a.purpose.consents, c = !(!a || !a[b])), b = c)) : b = !0;
            return b
        },
        aC = function(a, b, c, d) {
            c || (c = function() {});
            if ("function" === typeof a.o.__tcfapi) a = a.o.__tcfapi, a(b, 2, c, d);
            else if (ZB(a)) {
                cC(a);
                var e = ++a.T;
                a.m[e] = c;
                a.j && (c = {}, a.j.postMessage((c.__tcfapiCall = {
                    command: b,
                    version: 2,
                    callId: e,
                    parameter: d
                }, c), "*"))
            } else c({}, !1)
        },
        ZB = function(a) {
            if (a.j) return a.j;
            a.j = Ky(a.o, "__tcfapiLocator");
            return a.j
        },
        cC = function(a) {
            a.C || (a.C = function(b) {
                try {
                    var c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
                    a.m[c.callId](c.returnValue, c.success)
                } catch (d) {}
            }, _.lb(a.o, "message", a.C))
        },
        dC = function(a) {
            if (!1 === a.gdprApplies) return !0;
            void 0 === a.internalErrorState && (a.internalErrorState = XB(a));
            return "error" === a.cmpStatus || 0 !== a.internalErrorState ? a.internalBlockOnErrors ? (mg({
                e: String(a.internalErrorState)
            }, "tcfe"), !1) : !0 : "loaded" !== a.cmpStatus || "tcloaded" !== a.eventStatus && "useractioncomplete" !== a.eventStatus ? !1 : !0
        },
        eC = function(a, b) {
            return !1 === a.gdprApplies ? !0 : b.every(function(c) {
                return bC(a, c)
            })
        };
    var fC = function(a, b, c) {
            this.j = a;
            this.o = b;
            this.A = void 0 === c ? function() {} : c
        },
        gC = function(a, b, c) {
            return new fC(a, b, c)
        };
    fC.prototype.start = function(a) {
        if (this.j === this.j.top) try {
            KB(this.j), hC(this, a)
        } catch (b) {}
    };
    var hC = function(a, b) {
            var c = IB(a.j),
                d = JB(a.j),
                e = {};
            c = (e.fc = c, e.fctype = d, e);
            c = iC(a.o, c);
            uB(a.j, c, function() {
                a.A(!0)
            }, function() {
                a.A(!1)
            });
            b && VB(new lo(a.j), b)
        },
        iC = function(a, b) {
            var c = _.nu("https://fundingchoicesmessages.google.com/i/%{id}");
            b = _.z(Object, "assign").call(Object, {}, b, {
                ers: 3
            });
            return _.zu(_.sb(c, {
                id: a
            }), b)
        };
    var jC = _.w.Promise;
    var kC = function(a) {
        this.o = a
    };
    kC.prototype.A = function(a, b, c) {
        this.o.then(function(d) {
            d.A(a, b, c)
        })
    };
    kC.prototype.j = function(a, b) {
        return this.o.then(function(c) {
            return c.j(a, b)
        })
    };
    var lC = function(a) {
        this.data = a
    };
    var mC = function(a) {
        this.o = a
    };
    mC.prototype.A = function(a, b, c) {
        c = void 0 === c ? [] : c;
        var d = new MessageChannel;
        nC(d.port1, b);
        this.o.postMessage(a, [d.port2].concat(c))
    };
    mC.prototype.j = function(a, b) {
        var c = this;
        return new jC(function(d) {
            c.A(a, d, b)
        })
    };
    var oC = function(a, b) {
            nC(a, b);
            return new mC(a)
        },
        nC = function(a, b) {
            b && (a.onmessage = function(c) {
                b(new lC(c.data, oC(c.ports[0])))
            })
        };
    var Hj = function(a) {
            var b = a.lb,
                c = void 0 === a.tb ? "ZNWN1d" : a.tb,
                d = void 0 === a.onMessage ? void 0 : a.onMessage,
                e = void 0 === a.Ae ? void 0 : a.Ae;
            return pC({
                destination: a.destination,
                ah: function() {
                    return b.contentWindow
                },
                Wj: qC(a.origin),
                tb: c,
                onMessage: d,
                Ae: e
            })
        },
        pC = function(a) {
            var b = a.destination,
                c = a.ah,
                d = a.Wj,
                e = void 0 === a.Mc ? void 0 : a.Mc,
                f = a.tb,
                g = void 0 === a.onMessage ? void 0 : a.onMessage,
                h = void 0 === a.Ae ? void 0 : a.Ae,
                k = Object.create(null);
            d.forEach(function(l) {
                k[l] = !0
            });
            return new kC(new jC(function(l, m) {
                var n = function(p) {
                    p.source && p.source === c() && !0 === k[p.origin] && (p.data.n || p.data) === f && (b.removeEventListener("message", n, !1), e && p.data.t !== e ? m(Error('Token mismatch while establishing channel "' + f + '". Expected ' + e + ", but received " + p.data.t + ".")) : (l(oC(p.ports[0], g)), h && h(p)))
                };
                b.addEventListener("message", n, !1)
            }))
        },
        qC = function(a) {
            a = "string" === typeof a ? [a] : a;
            var b = Object.create(null);
            a.forEach(function(c) {
                if ("null" === c) throw Error("Receiving from null origin not allowed without token verification. Please use NullOriginConnector.");
                b[c] = !0
            });
            return a
        };
    var rC = navigator,
        sC = function(a) {
            var b = 1,
                c;
            if (void 0 != a && "" != a)
                for (b = 0, c = a.length - 1; 0 <= c; c--) {
                    var d = a.charCodeAt(c);
                    b = (b << 6 & 268435455) + d + (d << 14);
                    d = b & 266338304;
                    b = 0 != d ? b ^ d >> 21 : b
                }
            return b
        },
        tC = function(a, b) {
            if (!a || "none" == a) return 1;
            a = String(a);
            "auto" == a && (a = b, "www." == a.substring(0, 4) && (a = a.substring(4, a.length)));
            return sC(a.toLowerCase())
        },
        uC = RegExp("^\\s*_ga=\\s*1\\.(\\d+)[^.]*\\.(.*?)\\s*$"),
        vC = RegExp("^[^=]+=\\s*GA1\\.(\\d+)[^.]*\\.(.*?)\\s*$"),
        fD = RegExp("^\\s*_ga=\\s*()(amp-[\\w.-]{22,64})$");
    var nh = function(a) {
            return !!a && a.top == a
        },
        dk = function(a, b, c) {
            b = b || a.google_ad_width;
            c = c || a.google_ad_height;
            if (nh(a)) return !1;
            var d = a.document,
                e = d.documentElement;
            if (b && c) {
                var f = 1,
                    g = 1;
                a.innerHeight ? (f = a.innerWidth, g = a.innerHeight) : e && e.clientHeight ? (f = e.clientWidth, g = e.clientHeight) : d.body && (f = d.body.clientWidth, g = d.body.clientHeight);
                if (g > 2 * c || f > 2 * b) return !1
            }
            return !0
        };
    var Yh = function() {
        this.data = [];
        this.j = -1
    };
    Yh.prototype.set = function(a, b) {
        b = void 0 === b ? !0 : b;
        _.z(Number, "isInteger").call(Number, a);
        0 <= a && 52 > a && _.z(Number, "isInteger").call(Number, a) && this.data[a] !== b && (this.data[a] = b, this.j = -1)
    };
    Yh.prototype.get = function(a) {
        return !!this.data[a]
    };
    var $h = function(a) {
        -1 === a.j && (a.j = a.data.reduce(function(b, c, d) {
            return b + (c ? Math.pow(2, d) : 0)
        }, 0));
        return a.j
    };
    _.Hg = function(a) {
        return !!(a.error && a.meta && a.id)
    };
    var gD = function(a, b) {
            (0, a.__uspapi)("getUSPData", 1, function(c, d) {
                b.Kb({
                    consentData: null != c ? c : void 0,
                    he: d ? void 0 : 2
                })
            })
        },
        hD = {
            od: function(a) {
                return a.Kb
            },
            Ec: function(a, b) {
                a = {};
                return a.__uspapiCall = {
                    callId: b,
                    command: "getUSPData",
                    version: 1
                }, a
            },
            lc: function(a, b) {
                b = b.__uspapiReturn;
                var c;
                a({
                    consentData: null != (c = b.returnValue) ? c : void 0,
                    he: b.success ? void 0 : 2
                })
            }
        },
        iD = function(a, b) {
            b = void 0 === b ? {} : b;
            _.U.call(this);
            var c;
            this.timeoutMs = null != (c = b.timeoutMs) ? c : 500;
            this.caller = new NB(a, "__uspapiLocator", function(d) {
                return "function" === typeof d.__uspapi
            }, Ve);
            this.caller.m.set("getDataWithCallback", gD);
            this.caller.o.set("getDataWithCallback", hD)
        };
    _.T(iD, _.U);
    iD.prototype.A = function() {
        this.caller.wa();
        _.U.prototype.A.call(this)
    };
    var jD = function(a, b) {
        var c = {};
        if (OB(a.caller)) {
            var d = _.qu(function() {
                b(c)
            });
            QB(a.caller, "getDataWithCallback", {
                Kb: function(e) {
                    e.he || (c = e.consentData);
                    d()
                }
            });
            setTimeout(d, a.timeoutMs)
        } else b(c)
    };
    var kD = function(a, b) {
            b = b.listener;
            (a = (0, a.__gpp)("addEventListener", b)) && b(a, !0)
        },
        lD = function(a, b) {
            (0, a.__gpp)("removeEventListener", b.listener, b.listenerId)
        },
        mD = function(a, b) {
            (0, a.__gpp)("getSection", function(c) {
                b.Kb({
                    consentData: null != c ? c : void 0,
                    he: c ? void 0 : 4
                })
            }, b.apiPrefix)
        },
        nD = {
            od: function(a) {
                return a.listener
            },
            Ec: function(a, b) {
                a = {};
                return a.__gppCall = {
                    callId: b,
                    command: "addEventListener",
                    version: "1.1"
                }, a
            },
            lc: function(a, b) {
                b = b.__gppReturn;
                a(b.returnValue, b.success)
            }
        },
        oD = {
            od: function(a) {
                return a.listener
            },
            Ec: function(a, b) {
                var c = {};
                return c.__gppCall = {
                    callId: b,
                    command: "removeEventListener",
                    version: "1.1",
                    parameter: a.listenerId
                }, c
            },
            lc: function(a, b) {
                b = b.__gppReturn;
                var c = b.returnValue.data;
                null == a || a(c, b.success)
            }
        },
        pD = {
            od: function(a) {
                return a.Kb
            },
            Ec: function(a, b) {
                var c = {};
                return c.__gppCall = {
                    callId: b,
                    command: "getSection",
                    version: "1.1",
                    parameter: a.apiPrefix
                }, c
            },
            lc: function(a, b) {
                b = b.__gppReturn;
                var c;
                a({
                    consentData: null != (c = b.returnValue) ? c : void 0,
                    he: b.success ? void 0 : 2
                })
            }
        },
        qD = function(a, b) {
            b = void 0 === b ? {} : b;
            _.U.call(this);
            this.caller = new NB(a, "__gppLocator", function(d) {
                return "function" === typeof d.__gpp
            }, We);
            this.caller.m.set("addEventListener", kD);
            this.caller.o.set("addEventListener", nD);
            this.caller.m.set("removeEventListener", lD);
            this.caller.o.set("removeEventListener", oD);
            this.caller.m.set("getDataWithCallback", mD);
            this.caller.o.set("getDataWithCallback", pD);
            var c;
            this.timeoutMs = null != (c = b.timeoutMs) ? c : 500
        };
    _.T(qD, _.U);
    qD.prototype.A = function() {
        this.caller.wa();
        _.U.prototype.A.call(this)
    };
    qD.prototype.addEventListener = function(a) {
        var b = this,
            c = _.qu(function() {
                a({}, !1)
            }),
            d = -1 === this.timeoutMs ? void 0 : setTimeout(function() {
                c()
            }, this.timeoutMs);
        QB(this.caller, "addEventListener", {
            listener: function(e, f) {
                clearTimeout(d);
                var g;
                void 0 === (null == (g = e.pingData) ? void 0 : g.gppVersion) || "1" === e.pingData.gppVersion || "1.0" === e.pingData.gppVersion ? (b.removeEventListener(e.listenerId), a(rD, !0)) : a(e, f)
            }
        })
    };
    qD.prototype.removeEventListener = function(a) {
        QB(this.caller, "removeEventListener", {
            listenerId: a
        })
    };
    var sD = function(a) {
            if (!_.z(a, "includes").call(a, "~")) throw Error("GPP String [" + a + "] contains no sections");
            var b = ze(a.split("~")[0] + "A"),
                c = Ae(b.slice(0, 6)),
                d = Ae(b.slice(6, 12)),
                e = new mz;
            var f = _.Bg(e, 1, c);
            var g = _.Bg(f, 2, d);
            for (var h = b.slice(12), k = Ae(h.slice(0, 12)), l = [], m = h.slice(12).replace(/0+$/, ""), n = 0; n < k; n++) {
                if (0 === m.length) throw Error("Found " + n + " of " + k + " sections [" + l + "] but reached end of input [" + h + "]");
                var p = 0 === Ae(m[0]);
                m = m.slice(1);
                var t = Ce(m, h),
                    u = 0 === l.length ? 0 : l[l.length - 1],
                    v = Be(t) + u;
                m = m.slice(t.length);
                if (p) l.push(v);
                else {
                    for (var x = Ce(m, h), F = Be(x), D = 0; D <= F; D++) l.push(v + D);
                    m = m.slice(x.length)
                }
            }
            if (0 < m.length) throw Error("Found " + k + " sections [" + l + "] but has remaining input [" + m + "], entire input [" + h + "]");
            var M = _.Kd(g, 3, l, Bc);
            if (!_.z(a, "includes").call(a, "~")) throw Error("GPP String [" + a + "] contains no sections");
            var B = a.split("~").slice(1);
            for (var K = 0; K < Bd(M, 3, Cc).length; ++K) {
                var V = Bd(M, 3, Cc)[K],
                    O = B[K];
                switch (V) {
                    case 8:
                        if (0 === O.length) throw Error("Cannot decode empty USCA section string");
                        var aa = O.split(".");
                        if (2 < aa.length) throw Error("Expected at most 1 sub-section but got " + (aa.length - 1) + " when decoding " + O);
                        var ma = void 0,
                            ta = void 0,
                            da = void 0,
                            xa = void 0,
                            Da = void 0,
                            Ia = void 0,
                            Qb = void 0,
                            gb = void 0,
                            dc = void 0,
                            jc = void 0,
                            Ke = void 0,
                            sc = void 0,
                            If = void 0,
                            vd = void 0,
                            Gc = void 0,
                            Hc = void 0,
                            Yc = void 0,
                            Rb = void 0,
                            Jf = void 0,
                            Kf = void 0,
                            Zd = void 0,
                            $d = void 0,
                            Le = void 0,
                            Ib = ze(aa[0]),
                            Bb = Ae(Ib.slice(0, 6));
                        Ib = Ib.slice(6);
                        if (1 !== Bb) throw Error("Unable to decode unsupported USCA Section specification version " + Bb + " - only version 1 is supported.");
                        if (Ib.length < uz)
                            if (Ib.length + 8 >= uz) Ib += "00000000";
                            else throw Error("Expected core segment bitstring minus version plus padding to be at least of length " + uz + " but was " + (Ib.length + 8));
                        for (var ec = 0, Ta = [], Sb = 0; Sb < tz.length; Sb++) {
                            var wd = tz[Sb];
                            Ta.push(Ae(Ib.slice(ec, ec + wd)));
                            ec += wd
                        }
                        var kc = new pz;
                        Le = _.Bg(kc, 1, Bb);
                        var Xh = Ta.shift();
                        $d = _.I(Le, 2, Xh);
                        var Kl = Ta.shift();
                        Zd = _.I($d, 3, Kl);
                        var Er = Ta.shift();
                        Kf = _.I(Zd, 4, Er);
                        var Fr = Ta.shift();
                        Jf = _.I(Kf, 5, Fr);
                        var Gr = Ta.shift();
                        Rb = _.I(Jf, 6, Gr);
                        var Hr = new oz,
                            Ir = Ta.shift();
                        Yc = _.I(Hr, 1, Ir);
                        var Jr = Ta.shift();
                        Hc = _.I(Yc, 2, Jr);
                        var Kr = Ta.shift();
                        Gc = _.I(Hc, 3, Kr);
                        var Mg = Ta.shift();
                        vd = _.I(Gc, 4, Mg);
                        var Ll = Ta.shift();
                        If = _.I(vd, 5, Ll);
                        var Ml = Ta.shift();
                        sc = _.I(If, 6, Ml);
                        var Nl = Ta.shift();
                        Ke = _.I(sc, 7, Nl);
                        var fe = Ta.shift();
                        jc = _.I(Ke, 8, fe);
                        var Lr = Ta.shift();
                        dc = _.I(jc, 9, Lr);
                        gb = _.tg(Rb, 7, dc);
                        var Mr = new nz,
                            Nr = Ta.shift();
                        Qb = _.I(Mr, 1, Nr);
                        var Ol = Ta.shift();
                        Ia = _.I(Qb, 2, Ol);
                        Da = _.tg(gb, 8, Ia);
                        var si = Ta.shift();
                        xa = _.I(Da, 9, si);
                        var Or = Ta.shift();
                        da = _.I(xa, 10, Or);
                        var Pl = Ta.shift();
                        ta = _.I(da, 11, Pl);
                        var ti = Ta.shift();
                        var Xe = ma = _.I(ta, 12, ti);
                        if (1 === aa.length) var ui = sz(Xe);
                        else {
                            var Pr = sz(Xe),
                                Ng = void 0,
                                Ql = void 0,
                                vi = void 0,
                                Tf = ze(aa[1]);
                            if (3 > Tf.length) throw Error("Invalid GPC Segment [" + Tf + "]. Expected length 3, but was " + Tf.length + ".");
                            var Og = Ae(Tf.slice(0, 2));
                            if (0 > Og || 1 < Og) throw Error("Attempting to decode unknown GPC segment subsection type " + Og + ".");
                            vi = Og + 1;
                            var Pg = Ae(Tf.charAt(2)),
                                wi = new qz;
                            Ql = _.I(wi, 2, vi);
                            Ng = _.Mp(Ql, 1, !!Pg);
                            ui = _.tg(Pr, 2, Ng)
                        }
                        var Rl = _.Zg(ui, pz, 1);
                        if (1 === _.Xj(Rl, 5, 0) || 1 === _.Xj(Rl, 6, 0)) return !0;
                        break;
                    case 10:
                        if (0 === O.length) throw Error("Cannot decode empty USCO section string.");
                        var ge = O.split(".");
                        if (2 < ge.length) throw Error("Expected at most 2 segments but got " + ge.length + " when decoding " + O);
                        var xi = void 0,
                            Sl = void 0,
                            Tl = void 0,
                            Qg = void 0,
                            yi = void 0,
                            zi = void 0,
                            Ul = void 0,
                            Rg = void 0,
                            Mc = void 0,
                            Ai = void 0,
                            Ye = void 0,
                            Bi = void 0,
                            Sg = void 0,
                            Vl = void 0,
                            Wl = void 0,
                            Xl = void 0,
                            Ci = void 0,
                            Tg = void 0,
                            cd = ze(ge[0]),
                            Vb = Ae(cd.slice(0, 6));
                        cd = cd.slice(6);
                        if (1 !== Vb) throw Error("Unable to decode unsupported USCO Section specification version " + Vb + " - only version 1 is supported.");
                        if (cd.length < Bz)
                            if (cd.length + 8 >= Bz) cd += "00000000";
                            else throw Error("Expected core segment bitstring minus version plus padding to be at least of length " + Bz + " but was " + (cd.length + 8));
                        for (var Di = 0, vb = [], Ug = 0; Ug < Az.length; Ug++) {
                            var Yl = Az[Ug];
                            vb.push(Ae(cd.slice(Di, Di + Yl)));
                            Di += Yl
                        }
                        var Ei = new wz;
                        Tg = _.Bg(Ei, 1, Vb);
                        var Zl = vb.shift();
                        Ci = _.I(Tg, 2, Zl);
                        var $l = vb.shift();
                        Xl = _.I(Ci, 3, $l);
                        var am = vb.shift();
                        Wl = _.I(Xl, 4, am);
                        var Fi = vb.shift();
                        Vl = _.I(Wl, 5, Fi);
                        var Gi = vb.shift();
                        Sg = _.I(Vl, 6, Gi);
                        var Hi = new vz,
                            bm = vb.shift();
                        Bi = _.I(Hi, 1, bm);
                        var Ii = vb.shift();
                        Ye = _.I(Bi, 2, Ii);
                        var Qr = vb.shift();
                        Ai = _.I(Ye, 3, Qr);
                        var cm = vb.shift();
                        Mc = _.I(Ai, 4, cm);
                        var Rr = vb.shift();
                        Rg = _.I(Mc, 5, Rr);
                        var Uf = vb.shift();
                        Ul = _.I(Rg, 6, Uf);
                        var mQ = vb.shift();
                        zi = _.I(Ul, 7, mQ);
                        yi = _.tg(Sg, 7, zi);
                        var nQ = vb.shift();
                        Qg = _.I(yi, 8, nQ);
                        var oQ = vb.shift();
                        Tl = _.I(Qg, 9, oQ);
                        var pQ = vb.shift();
                        Sl = _.I(Tl, 10, pQ);
                        var qQ = vb.shift();
                        var wC = xi = _.I(Sl, 11, qQ);
                        if (1 === ge.length) var xC = zz(wC);
                        else {
                            var rQ = zz(wC),
                                yC = void 0,
                                zC = void 0,
                                AC = void 0,
                                Ji = ze(ge[1]);
                            if (3 > Ji.length) throw Error("Invalid GPC Segment [" + Ji + "]. Expected length 3, but was " + Ji.length + ".");
                            var dm = Ae(Ji.slice(0, 2));
                            if (0 > dm || 1 < dm) throw Error("Attempting to decode unknown GPC segment subsection type " + dm + ".");
                            AC = dm + 1;
                            var sQ = Ae(Ji.charAt(2)),
                                tQ = new xz;
                            zC = _.I(tQ, 2, AC);
                            yC = _.Mp(zC, 1, !!sQ);
                            xC = _.tg(rQ, 2, yC)
                        }
                        var BC = _.Zg(xC, wz, 1);
                        if (1 === _.Xj(BC, 5, 0) || 1 === _.Xj(BC, 6, 0)) return !0;
                        break;
                    case 12:
                        if (0 === O.length) throw Error("Cannot decode empty usct section string.");
                        var Ki = O.split(".");
                        if (2 < Ki.length) throw Error("Expected at most 2 segments but got " + Ki.length + " when decoding " + O);
                        var uQ = void 0,
                            CC = void 0,
                            DC = void 0,
                            EC = void 0,
                            FC = void 0,
                            GC = void 0,
                            HC = void 0,
                            IC = void 0,
                            JC = void 0,
                            KC = void 0,
                            LC = void 0,
                            MC = void 0,
                            NC = void 0,
                            OC = void 0,
                            PC = void 0,
                            QC = void 0,
                            RC = void 0,
                            SC = void 0,
                            TC = void 0,
                            UC = void 0,
                            VC = void 0,
                            WC = void 0,
                            Ze = ze(Ki[0]),
                            Sr = Ae(Ze.slice(0, 6));
                        Ze = Ze.slice(6);
                        if (1 !== Sr) throw Error("Unable to decode unsupported USCT Section specification version " + Sr + " - only version 1 is supported.");
                        if (Ze.length < Jz)
                            if (Ze.length + 8 >= Jz) Ze += "00000000";
                            else throw Error("Expected core segment bitstring minus version plus padding to be at least of length " + Jz + " but was " + (Ze.length + 8));
                        for (var Tr = 0, wb = [], Ur = 0; Ur < Iz.length; Ur++) {
                            var XC = Iz[Ur];
                            wb.push(Ae(Ze.slice(Tr, Tr + XC)));
                            Tr += XC
                        }
                        var vQ = new Ez;
                        WC = _.Bg(vQ, 1, Sr);
                        var wQ = wb.shift();
                        VC = _.I(WC, 2, wQ);
                        var xQ = wb.shift();
                        UC = _.I(VC, 3, xQ);
                        var yQ = wb.shift();
                        TC = _.I(UC, 4, yQ);
                        var zQ = wb.shift();
                        SC = _.I(TC, 5, zQ);
                        var AQ = wb.shift();
                        RC = _.I(SC, 6, AQ);
                        var BQ = new Dz,
                            CQ = wb.shift();
                        QC = _.I(BQ, 1, CQ);
                        var DQ = wb.shift();
                        PC = _.I(QC, 2, DQ);
                        var EQ = wb.shift();
                        OC = _.I(PC, 3, EQ);
                        var FQ = wb.shift();
                        NC = _.I(OC, 4, FQ);
                        var GQ = wb.shift();
                        MC = _.I(NC, 5, GQ);
                        var HQ = wb.shift();
                        LC = _.I(MC, 6, HQ);
                        var IQ = wb.shift();
                        KC = _.I(LC, 7, IQ);
                        var JQ = wb.shift();
                        JC = _.I(KC, 8, JQ);
                        IC = _.tg(RC, 7, JC);
                        var KQ = new Cz,
                            LQ = wb.shift();
                        HC = _.I(KQ, 1, LQ);
                        var MQ = wb.shift();
                        GC = _.I(HC, 2, MQ);
                        var NQ = wb.shift();
                        FC = _.I(GC, 3, NQ);
                        EC = _.tg(IC, 8, FC);
                        var OQ = wb.shift();
                        DC = _.I(EC, 9, OQ);
                        var PQ = wb.shift();
                        CC = _.I(DC, 10, PQ);
                        var QQ = wb.shift();
                        var YC = uQ = _.I(CC, 11, QQ);
                        if (1 === Ki.length) var ZC = Hz(YC);
                        else {
                            var RQ = Hz(YC),
                                $C = void 0,
                                aD = void 0,
                                bD = void 0,
                                Li = ze(Ki[1]);
                            if (3 > Li.length) throw Error("Invalid GPC Segment [" + Li + "]. Expected length 3, but was " + Li.length + ".");
                            var em = Ae(Li.slice(0, 2));
                            if (0 > em || 1 < em) throw Error("Attempting to decode unknown GPC segment subsection type " + em + ".");
                            bD = em + 1;
                            var SQ = Ae(Li.charAt(2)),
                                TQ = new Fz;
                            aD = _.I(TQ, 2, bD);
                            $C = _.Mp(aD, 1, !!SQ);
                            ZC = _.tg(RQ, 2, $C)
                        }
                        var cD = _.Zg(ZC, Ez, 1);
                        if (1 === _.Xj(cD, 5, 0) || 1 === _.Xj(cD, 6, 0)) return !0;
                        break;
                    case 9:
                        if (0 === O.length) throw Error("Cannot decode empty USVA section string.");
                        var $e = ze(O),
                            Vr = Ae($e.slice(0, 6));
                        $e = $e.slice(6);
                        if (1 !== Vr) throw Error("Unable to decode unsupported USVA Section specification version " + Vr + " - only version 1 is supported.");
                        if ($e.length < Nz)
                            if ($e.length + 8 >= Nz) $e += "00000000";
                            else throw Error("Expected bitstring minus version plus padding to be at least of length " + Nz + " but was " + ($e.length + 8));
                        for (var Wr = 0, Jb = [], Xr = 0; Xr < Mz.length; Xr++) {
                            var dD = Mz[Xr];
                            Jb.push(Ae($e.slice(Wr, Wr + dD)));
                            Wr += dD
                        }
                        var UQ = Vr,
                            VQ = new Lz;
                        var WQ = _.Bg(VQ, 1, UQ);
                        var XQ = Jb.shift();
                        var YQ = _.I(WQ, 2, XQ);
                        var ZQ = Jb.shift();
                        var $Q = _.I(YQ, 3, ZQ);
                        var aR = Jb.shift();
                        var bR = _.I($Q, 4, aR);
                        var cR = Jb.shift();
                        var dR = _.I(bR, 5, cR);
                        var eR = Jb.shift();
                        var fR = _.I(dR, 6, eR);
                        var gR = new Kz,
                            hR = Jb.shift();
                        var iR = _.I(gR, 1, hR);
                        var jR = Jb.shift();
                        var kR = _.I(iR, 2, jR);
                        var lR = Jb.shift();
                        var mR = _.I(kR, 3, lR);
                        var nR = Jb.shift();
                        var oR = _.I(mR, 4, nR);
                        var pR = Jb.shift();
                        var qR = _.I(oR, 5, pR);
                        var rR = Jb.shift();
                        var sR = _.I(qR, 6, rR);
                        var tR = Jb.shift();
                        var uR = _.I(sR, 7, tR);
                        var vR = Jb.shift();
                        var wR = _.I(uR, 8, vR);
                        var xR = _.tg(fR, 7, wR);
                        var yR = Jb.shift();
                        var zR = _.I(xR, 8, yR);
                        var AR = Jb.shift();
                        var BR = _.I(zR, 9, AR);
                        var CR = Jb.shift();
                        var DR = _.I(BR, 10, CR);
                        var ER = Jb.shift(),
                            eD = _.I(DR, 11, ER);
                        if (1 === _.Xj(eD, 5, 0) || 1 === _.Xj(eD, 6, 0)) return !0;
                        break;
                    default:
                        _.Va(V)
                }
            }
            return !1
        },
        rD = {
            eventName: "signalStatus",
            data: "ready",
            pingData: {
                internalErrorState: 1
            },
            listenerId: -1
        };
    var cf = function(a) {
            this.j = a || {
                cookie: ""
            }
        },
        vD = function() {
            var a = tD;
            if (!_.r.navigator.cookieEnabled) return !1;
            if (!a.isEmpty()) return !0;
            a.set("TESTCOOKIESENABLED", "1", {
                Jf: 60
            });
            if ("1" !== a.get("TESTCOOKIESENABLED")) return !1;
            uD(a, "TESTCOOKIESENABLED");
            return !0
        };
    cf.prototype.set = function(a, b, c) {
        var d = !1;
        if ("object" === typeof c) {
            var e = c.um;
            d = c.vk || !1;
            var f = c.domain || void 0;
            var g = c.path || void 0;
            var h = c.Jf
        }
        if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
        if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
        void 0 === h && (h = -1);
        this.j.cookie = a + "=" + b + (f ? ";domain=" + f : "") + (g ? ";path=" + g : "") + (0 > h ? "" : 0 == h ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(Date.now() + 1E3 * h)).toUTCString()) + (d ? ";secure" : "") + (null != e ? ";samesite=" + e : "")
    };
    cf.prototype.get = function(a, b) {
        for (var c = a + "=", d = (this.j.cookie || "").split(";"), e = 0, f; e < d.length; e++) {
            f = Eu(d[e]);
            if (0 == f.lastIndexOf(c, 0)) return f.slice(c.length);
            if (f == a) return ""
        }
        return b
    };
    var uD = function(a, b, c, d) {
        a.get(b);
        a.set(b, "", {
            Jf: 0,
            path: c,
            domain: d
        })
    };
    cf.prototype.isEmpty = function() {
        return !this.j.cookie
    };
    cf.prototype.clear = function() {
        for (var a = (this.j.cookie || "").split(";"), b = [], c = [], d, e, f = 0; f < a.length; f++) e = Eu(a[f]), d = e.indexOf("="), -1 == d ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
        for (a = b.length - 1; 0 <= a; a--) uD(this, b[a])
    };
    var tD = new cf("undefined" == typeof document ? null : document);
    _.wD = RegExp("^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)");
    var xD = null,
        yD = function() {
            if (null === xD) {
                xD = "";
                try {
                    var a = "";
                    try {
                        a = _.r.top.location.hash
                    } catch (c) {
                        a = _.r.location.hash
                    }
                    if (a) {
                        var b = a.match(/\bdeid=([\d,]+)/);
                        xD = b ? b[1] : ""
                    }
                } catch (c) {}
            }
            return xD
        };
    var zD = function(a, b, c, d, e) {
        this.label = a;
        this.type = b;
        this.value = c;
        this.duration = void 0 === d ? 0 : d;
        this.slotId = e;
        this.taskId = void 0;
        this.uniqueId = Math.random()
    };
    var AD, BD, CD, DD, ED;
    AD = _.r.performance;
    BD = !!(AD && AD.mark && AD.measure && AD.clearMarks);
    CD = Dh(function() {
        var a;
        if (a = BD) a = yD(), a = !!a.indexOf && 0 <= a.indexOf("1337");
        return a
    });
    DD = function(a, b) {
        this.A = [];
        var c = null;
        b && (b.google_js_reporting_queue = b.google_js_reporting_queue || [], this.A = b.google_js_reporting_queue, c = b.google_measure_js_timing);
        this.j = CD() || (null != c ? c : Math.random() < a)
    };
    _.Fg = function(a) {
        a && AD && CD() && (AD.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_start"), AD.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_end"))
    };
    ED = function(a, b, c, d, e, f) {
        a.j && (b = new zD(b, c, d, void 0 === e ? 0 : e, f), !a.j || 2048 < a.A.length || a.A.push(b))
    };
    DD.prototype.start = function(a, b) {
        if (!this.j) return null;
        a = new zD(a, b, _.ff() || _.ef());
        b = "goog_" + a.label + "_" + a.uniqueId + "_start";
        AD && CD() && AD.mark(b);
        return a
    };
    DD.prototype.end = function(a) {
        if (this.j && "number" === typeof a.value) {
            a.duration = (_.ff() || _.ef()) - a.value;
            var b = "goog_" + a.label + "_" + a.uniqueId + "_end";
            AD && CD() && AD.mark(b);
            !this.j || 2048 < this.A.length || this.A.push(a)
        }
    };
    var Vq = function(a, b, c) {
        var d = _.ff();
        d && ED(a, b, 9, d, 0, c)
    };
    var ID, HD, KD, JD;
    _.FD = function() {
        this.o = "&";
        this.A = {};
        this.C = 0;
        this.j = []
    };
    _.GD = function(a, b) {
        var c = {};
        c[a] = b;
        return [c]
    };
    ID = function(a, b, c, d, e) {
        var f = [];
        _.bl(a, function(g, h) {
            (g = HD(g, b, c, d, e)) && f.push(h + "=" + g)
        });
        return f.join(b)
    };
    HD = function(a, b, c, d, e) {
        if (null == a) return "";
        b = b || "&";
        c = c || ",$";
        "string" == typeof c && (c = c.split(""));
        if (a instanceof Array) {
            if (d = d || 0, d < c.length) {
                for (var f = [], g = 0; g < a.length; g++) f.push(HD(a[g], b, c, d + 1, e));
                return f.join(c[d])
            }
        } else if ("object" == typeof a) return e = e || 0, 2 > e ? encodeURIComponent(ID(a, b, c, d, e + 1)) : "...";
        return encodeURIComponent(String(a))
    };
    KD = function(a, b) {
        var c = "https://pagead2.googlesyndication.com" + b,
            d = JD(a) - b.length;
        if (0 > d) return "";
        a.j.sort(function(m, n) {
            return m - n
        });
        b = null;
        for (var e = "", f = 0; f < a.j.length; f++)
            for (var g = a.j[f], h = a.A[g], k = 0; k < h.length; k++) {
                if (!d) {
                    b = null == b ? g : b;
                    break
                }
                var l = ID(h[k], a.o, ",$");
                if (l) {
                    l = e + l;
                    if (d >= l.length) {
                        d -= l.length;
                        c += l;
                        e = a.o;
                        break
                    }
                    b = null == b ? g : b
                }
            }
        a = "";
        null != b && (a = e + "trn=" + b);
        return c + a
    };
    JD = function(a) {
        var b = 1,
            c;
        for (c in a.A) b = c.length > b ? c.length : b;
        return 3997 - b - a.o.length - 1
    };
    _.LD = function(a, b) {
        try {
            -1 == a.indexOf(b) && (a = b + "\n" + a);
            for (var c; a != c;) c = a, a = a.replace(RegExp("((https?:/..*/)[^/:]*:\\d+(?:.|\n)*)\\2"), "$1");
            return a.replace(RegExp("\n *", "g"), "\n")
        } catch (d) {
            return b
        }
    };
    var om = function(a) {
        a = Error.call(this, a);
        this.message = a.message;
        "stack" in a && (this.stack = a.stack);
        _.z(Object, "setPrototypeOf").call(Object, this, om.prototype)
    };
    _.T(om, Error);
    om.prototype.name = "PublisherInputError";
    var MD = function(a) {
        a = Error.call(this, a);
        this.message = a.message;
        "stack" in a && (this.stack = a.stack);
        _.z(Object, "setPrototypeOf").call(Object, this, MD.prototype)
    };
    _.T(MD, Error);
    MD.prototype.name = "ServerError";
    var ND = function(a) {
        a = Error.call(this, a);
        this.message = a.message;
        "stack" in a && (this.stack = a.stack);
        _.z(Object, "setPrototypeOf").call(Object, this, ND.prototype)
    };
    _.T(ND, Error);
    ND.prototype.name = "NetworkError";
    var OD = 0,
        PD = _.se(_.mu(_.nu("https://pagead2.googlesyndication.com/pagead/expansion_embed.js")));
    _.kf = function(a) {
        var b = "jc";
        if (a.jc && a.hasOwnProperty(b)) return a.jc;
        b = new a;
        return a.jc = b
    };
    var lf = function() {};
    lf.prototype.j = function() {};
    lf.prototype.o = function() {};
    lf.prototype.A = function() {
        return []
    };
    lf.prototype.C = function() {
        return []
    };
    var yf = function(a, b) {
        a.j = jf(1, b, function() {});
        a.A = function(c, d) {
            return jf(2, b, function() {
                return []
            })(c, 2, d)
        };
        a.C = function() {
            return jf(3, b, function() {
                return []
            })(2)
        };
        a.o = function(c) {
            jf(16, b, function() {})(c, 2)
        }
    };
    var sf = function() {
        var a = {};
        this.A = function(b, c) {
            return null != a[b] ? a[b] : c
        };
        this.o = function(b, c) {
            return null != a[b] ? a[b] : c
        };
        this.C = function(b, c) {
            return null != a[b] ? a[b] : c
        };
        this.K = function(b, c) {
            return null != a[b] ? a[b] : c
        };
        this.j = function() {}
    };
    var wf = function() {
            this.j = function() {}
        },
        Af = function(a, b) {
            a.j = jf(14, b, function() {})
        };
    var hh = function(a, b, c) {
            a && null !== b && b != b.top && (b = b.top);
            try {
                return (void 0 === c ? 0 : c) ? (new _.uh(b.innerWidth, b.innerHeight)).round() : _.my(b || window).round()
            } catch (d) {
                return new _.uh(-12245933, -12245933)
            }
        },
        QD = function(a) {
            return "CSS1Compat" == a.compatMode ? a.documentElement : a.body
        },
        Qs = function(a, b) {
            b = void 0 === b ? _.r : b;
            a = a.scrollingElement || QD(a);
            return new _.qh(b.pageXOffset || a.scrollLeft, b.pageYOffset || a.scrollTop)
        },
        Gh = function(a) {
            try {
                return !(!a || !(a.offsetWidth || a.offsetHeight || a.getClientRects().length))
            } catch (b) {
                return !1
            }
        };
    var RD = function(a) {
        this.H = _.A(a)
    };
    _.T(RD, _.C);
    var SD = function(a, b) {
            _.Wi(a, 13, b)
        },
        TD = function(a, b) {
            _.Wi(a, 12, b)
        },
        UD = function(a, b) {
            return rn(a, 11, b)
        };
    RD.ia = [10];
    var WD, XD, YD;
    _.VD = function(a) {
        this.j = a;
        this.A = 0
    };
    WD = function(a, b) {
        if (0 === a.A) {
            if (_.il(a, "__gads", b)) b = !0;
            else {
                var c = a.j;
                _.G(b, 5) && bf(c) && (new cf(c.document)).set("GoogleAdServingTest", "Good", void 0);
                if (c = "Good" === df("GoogleAdServingTest", b, a.j)) {
                    var d = a.j;
                    _.G(b, 5) && bf(d) && uD(new cf(d.document), "GoogleAdServingTest")
                }
                b = c
            }
            a.A = b ? 2 : 1
        }
        return 2 === a.A
    };
    _.il = function(a, b, c) {
        return c ? df(b, c, a.j) : null
    };
    XD = function(a, b, c, d) {
        if (d) {
            var e = Jc(Gn(c, 2)) - Date.now() / 1E3;
            e = {
                Jf: Math.max(e, 0),
                path: _.Qi(c, 3),
                domain: _.Qi(c, 4),
                vk: !1
            };
            c = c.getValue();
            a = a.j;
            _.G(d, 5) && bf(a) && (new cf(a.document)).set(b, c, e)
        }
    };
    YD = function(a, b, c) {
        if (c && df(b, c, a.j)) {
            var d = a.j.location.hostname;
            if ("localhost" === d) d = ["localhost"];
            else if (d = d.split("."), 2 > d.length) d = [];
            else {
                for (var e = [], f = 0; f < d.length - 1; ++f) e.push(d.slice(f).join("."));
                d = e
            }
            d = _.y(d);
            for (e = d.next(); !e.done; e = d.next()) f = a.j, _.G(c, 5) && bf(f) && uD(new cf(f.document), b, "/", e.value)
        }
    };
    var ZD = {},
        $D = (ZD[3] = _.se(_.mu(_.nu("https://s0.2mdn.net/ads/richmedia/studio/mu/templates/hifi/hifi.js"))), ZD);
    ({})[3] = _.se(_.mu(_.nu("https://s0.2mdn.net/ads/richmedia/studio_canary/mu/templates/hifi/hifi_canary.js")));
    var aE = function(a) {
            this.j = a;
            this.A = cy()
        },
        bE = function(a) {
            var b = {};
            _.tu(a, function(c) {
                b[c.j] = c.A
            });
            return b
        };
    _.cE = _.Ft(["https://pagead2.googlesyndication.com/pagead/js/err_rep.js"]);
    var dE = function(a, b, c, d, e, f) {
        _.U.call(this);
        this.tb = a;
        this.status = 1;
        this.C = b;
        this.o = c;
        this.M = d;
        this.gd = !!e;
        this.m = Math.random();
        this.J = {};
        this.j = null;
        this.T = (0, _.gu)(this.I, this);
        this.B = f
    };
    _.T(dE, _.U);
    dE.prototype.I = function(a) {
        if (!("*" !== this.o && a.origin !== this.o || !this.gd && a.source != this.C)) {
            var b = null;
            try {
                b = JSON.parse(a.data)
            } catch (c) {}
            if (_.la(b) && (a = b.i, b.c === this.tb && a != this.m)) {
                if (2 !== this.status) try {
                    this.status = 2, eE(this), this.j && (this.j(), this.j = null)
                } catch (c) {}
                a = b.s;
                b = b.p;
                if ("string" === typeof a && ("string" === typeof b || _.la(b)) && this.J.hasOwnProperty(a)) this.J[a](b)
            }
        }
    };
    var eE = function(a) {
        var b = {};
        b.c = a.tb;
        b.i = a.m;
        a.B && (b.e = a.B);
        a.C.postMessage(JSON.stringify(b), a.o)
    };
    dE.prototype.F = function() {
        if (1 === this.status) {
            try {
                this.C.postMessage && eE(this)
            } catch (a) {}
            window.setTimeout((0, _.gu)(this.F, this), 50)
        }
    };
    dE.prototype.connect = function(a) {
        a && (this.j = a);
        _.lb(window, "message", this.T);
        this.M && this.F()
    };
    var fE = function(a, b, c) {
            a.J[b] = c
        },
        gE = function(a, b, c) {
            var d = {};
            d.c = a.tb;
            d.i = a.m;
            d.s = b;
            d.p = c;
            try {
                a.C.postMessage(JSON.stringify(d), a.o)
            } catch (e) {}
        };
    dE.prototype.A = function() {
        this.status = 3;
        _.Pe(window, "message", this.T);
        _.U.prototype.A.call(this)
    };
    var hE = new _.w.Map([
            ["navigate", 1],
            ["reload", 2],
            ["back_forward", 3],
            ["prerender", 4]
        ]),
        iE = new _.w.Map([
            [0, 1],
            [1, 2],
            [2, 3]
        ]);
    var jE = function(a) {
        this.H = _.A(a)
    };
    _.T(jE, _.C);
    var kE = pe(jE);
    var lE = function(a) {
        this.H = _.A(a)
    };
    _.T(lE, _.C);
    var mE = function(a) {
        this.H = _.A(a)
    };
    _.T(mE, _.C);
    var nE, oE, pE, qE;
    _.yp = function(a) {
        return a.prerendering ? 3 : {
            visible: 1,
            hidden: 2,
            prerender: 3,
            preview: 4,
            unloaded: 5
        }[a.visibilityState || a.webkitVisibilityState || a.mozVisibilityState || ""] || 0
    };
    nE = function(a) {
        var b;
        a.visibilityState ? b = "visibilitychange" : a.mozVisibilityState ? b = "mozvisibilitychange" : a.webkitVisibilityState && (b = "webkitvisibilitychange");
        return b
    };
    oE = function(a) {
        return null != a.hidden ? a.hidden : null != a.mozHidden ? a.mozHidden : null != a.webkitHidden ? a.webkitHidden : null
    };
    pE = function(a, b) {
        if (3 == _.yp(b)) return !1;
        a();
        return !0
    };
    qE = function(a, b) {
        if (!pE(a, b)) {
            var c = !1,
                d = nE(b),
                e = function() {
                    !c && pE(a, b) && (c = !0, _.Pe(b, d, e))
                };
            d && _.lb(b, d, e)
        }
    };
    var Up = function(a, b) {
            this.j = a;
            this.o = b;
            this.A = {}
        },
        Vp = function(a) {
            Op() && (document.addEventListener("touchstart", function(b) {
                a.j(902, function() {
                    a.A[b.touches[0].identifier] = Date.now()
                })()
            }, su), document.addEventListener("touchend", function(b) {
                a.j(902, function() {
                    var c = b.changedTouches[0],
                        d = c.clientX,
                        e = c.clientY,
                        f = c.force;
                    c = a.A[c.identifier];
                    if (void 0 !== c) try {
                        var g = Op(),
                            h = {
                                x: d,
                                y: e,
                                duration_ms: Date.now() - c
                            };
                        if (null == g ? 0 : g.gmaSdk) g.gmaSdk.reportTouchEvent(JSON.stringify(_.z(Object, "assign").call(Object, {}, h, {
                            type: 1,
                            force: f
                        })));
                        else {
                            var k, l, m;
                            null == g || null == (k = g.webkit) || null == (l = k.messageHandlers) || null == (m = l.reportGmaTouchEvent) || m.postMessage(h)
                        }
                    } catch (n) {
                        a.o("paw_sigs", {
                            msg: "reportTouchError",
                            err: n instanceof Error ? n.message : "nonError"
                        })
                    }
                })()
            }, su))
        },
        Pp = function(a, b, c, d, e) {
            var f = 200,
                g = Gp;
            b = void 0 === b ? {} : b;
            c = void 0 === c ? function() {} : c;
            d = void 0 === d ? function() {} : d;
            f = void 0 === f ? 200 : f;
            var h = String(Math.floor(2147483647 * _.pf())),
                k = 0,
                l = function(m) {
                    try {
                        var n = "object" === typeof m.data ? m.data : JSON.parse(m.data);
                        h === n.paw_id && (window.clearTimeout(k), window.removeEventListener("message", l), n.signal ? c(n.signal) : n.error && d(n.error))
                    } catch (p) {
                        g("paw_sigs", {
                            msg: "postmessageError",
                            err: p instanceof Error ? p.message : "nonError",
                            data: null == m.data ? "null" : 500 < m.data.length ? m.data.substring(0, 500) : m.data
                        })
                    }
                };
            window.addEventListener("message", function(m) {
                e(903, function() {
                    l(m)
                })()
            });
            a.postMessage(_.z(Object, "assign").call(Object, {}, {
                paw_id: h
            }, b));
            k = window.setTimeout(function() {
                window.removeEventListener("message", l);
                d("PAW GMA postmessage timed out.")
            }, f)
        },
        Op = function() {
            var a = window,
                b, c;
            if (a.gmaSdk || (null == (b = a.webkit) ? 0 : null == (c = b.messageHandlers) ? 0 : c.getGmaViewSignals)) return a;
            try {
                var d = window.parent,
                    e, f;
                if (d.gmaSdk || (null == (e = d.webkit) ? 0 : null == (f = e.messageHandlers) ? 0 : f.getGmaViewSignals)) return d
            } catch (g) {}
            return null
        };
    _.Cf = function() {
        var a = this;
        this.promise = new _.w.Promise(function(b, c) {
            a.resolve = b;
            a.reject = c
        })
    };
    _.rE = function() {
        this.j = Math.random()
    };
    _.hg = function(a, b, c, d, e) {
        if (((void 0 === d ? 0 : d) ? a.j : Math.random()) < (e || .001)) try {
            if (c instanceof _.FD) var f = c;
            else f = new _.FD, _.bl(c, function(h, k) {
                var l = f,
                    m = l.C++;
                h = _.GD(k, h);
                l.j.push(m);
                l.A[m] = h
            });
            var g = KD(f, "/pagead/gen_204?id=" + b + "&");
            g && WB(_.r, g)
        } catch (h) {}
    };
    var sE = function(a) {
        this.H = _.A(a)
    };
    _.T(sE, _.C);
    sE.ia = [1];
    var tE = function(a) {
        this.H = _.A(a)
    };
    _.T(tE, _.C);
    var uE = function(a, b) {
        return _.I(a, 1, b)
    };
    var vE = function(a) {
        this.H = _.A(a)
    };
    _.T(vE, _.C);
    var wE = function(a) {
        _.U.call(this);
        this.J = a;
        this.j = [];
        this.o = [];
        this.m = [];
        this.C = []
    };
    _.T(wE, _.U);
    var yE = function(a, b, c) {
        a.o.push({
            Yb: void 0 === c ? !1 : c,
            Ab: b
        });
        _.H(BA) && xE(b, a.J)
    };
    wE.prototype.A = function() {
        this.j.length = 0;
        this.m.length = 0;
        if (_.H(BA))
            for (var a = _.y(this.o), b = a.next(); !b.done; b = a.next()) b.value.Ab.Zd();
        this.o.length = 0;
        this.C.length = 0;
        _.U.prototype.A.call(this)
    };
    var zE = function(a) {
        a = Error.call(this, a);
        this.message = a.message;
        "stack" in a && (this.stack = a.stack);
        _.z(Object, "setPrototypeOf").call(Object, this, zE.prototype);
        this.name = "InputError"
    };
    _.T(zE, Error);
    var AE = function() {
            this.Ya = !1
        },
        BE = function() {
            AE.apply(this, arguments);
            this.j = [];
            this.Gd = new _.Cf
        };
    _.T(BE, AE);
    var DE = function(a, b) {
            a.Ya || (a.Ya = !0, a.Hc = b, a.Gd.resolve(b), _.H(BA) && CE(a))
        },
        EE = function(a, b) {
            a.Ya = !0;
            a.Ce = b;
            a.Gd.reject(b);
            _.H(BA) && CE(a)
        },
        CE = function(a) {
            for (var b = _.y(a.j), c = b.next(); !c.done; c = b.next()) c = c.value, c(a.Hc);
            a.j.length = 0
        };
    BE.prototype.Zd = function() {
        this.j.length = 0
    };
    var xE = function(a, b) {
        _.H(BA) && a.j.push(b)
    };
    _.At.Object.defineProperties(BE.prototype, {
        promise: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.Gd.promise
            }
        },
        sb: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.Ya
            }
        },
        error: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.Ce
            }
        }
    });
    var Yn = function() {
        BE.apply(this, arguments)
    };
    _.T(Yn, BE);
    _.q = Yn.prototype;
    _.q.G = function(a) {
        DE(this, a)
    };
    _.q.Ga = function(a) {
        DE(this, null != a ? a : null)
    };
    _.q.ga = function() {
        DE(this, null)
    };
    _.q.Ta = function(a) {
        var b = this;
        a.then(function(c) {
            b.G(c)
        })
    };
    _.q.bb = function(a) {
        this.Ya || (this.Ya = !0, this.Hc = null, this.Ce = a, this.Gd.reject(a), _.H(BA) && CE(this))
    };
    var FE = function() {
        BE.apply(this, arguments)
    };
    _.T(FE, BE);
    FE.prototype.G = function(a) {
        DE(this, a)
    };
    FE.prototype.Ta = function(a) {
        var b = this;
        a.then(function(c) {
            return void b.G(c)
        })
    };
    FE.prototype.bb = function(a) {
        this.Ya || (this.Ya = !0, this.Ce = a, this.Gd.reject(a))
    };
    var GE = function() {
        FE.apply(this, arguments)
    };
    _.T(GE, FE);
    GE.prototype.Ga = function(a) {
        DE(this, null != a ? a : null)
    };
    GE.prototype.ga = function() {
        DE(this, null)
    };
    GE.prototype.Ta = function(a) {
        var b = this;
        a.then(function(c) {
            return void b.Ga(c)
        })
    };
    var HE = function(a) {
        this.Ya = !1;
        this.yb = a
    };
    _.T(HE, AE);
    HE.prototype.sb = function() {
        return this.yb.Ya
    };
    HE.prototype.zf = function() {
        return null != this.yb.Hc
    };
    _.At.Object.defineProperties(HE.prototype, {
        error: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.yb.Ce
            }
        }
    });
    var IE = function(a) {
        HE.call(this, a);
        this.yb = a
    };
    _.T(IE, HE);
    _.At.Object.defineProperties(IE.prototype, {
        value: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.yb.Hc
            }
        }
    });
    var JE = function(a) {
        HE.call(this, a);
        this.yb = a
    };
    _.T(JE, HE);
    _.At.Object.defineProperties(JE.prototype, {
        value: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                var a;
                return null != (a = this.yb.Hc) ? a : null
            }
        }
    });
    var KE = function() {
        HE.apply(this, arguments)
    };
    _.T(KE, HE);
    _.At.Object.defineProperties(KE.prototype, {
        value: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                var a;
                return null != (a = this.yb.Hc) ? a : null
            }
        }
    });
    var zp = function() {
        BE.apply(this, arguments)
    };
    _.T(zp, BE);
    zp.prototype.notify = function() {
        DE(this, null)
    };
    var LE = function(a, b) {
            b.then(function() {
                a.notify()
            })
        },
        ME = function(a, b) {
            b = void 0 === b ? !1 : b;
            BE.call(this);
            var c = this;
            this.o = a;
            this.A = 0;
            if (_.H(BA)) {
                a = _.y(this.o);
                for (var d = a.next(), e = {}; !d.done; e = {
                        Cd: e.Cd
                    }, d = a.next()) e.Cd = d.value, xE(e.Cd, function(f) {
                    return function(g) {
                        c.A += 1;
                        f.Cd.error ? EE(c, f.Cd.error) : b || null !== g ? DE(c, null != g ? g : null) : c.A === c.o.length && DE(c, null)
                    }
                }(e))
            } else a = a.map(function(f) {
                return f.promise.then(function(g) {
                    if (b || null != g) return g;
                    throw g;
                }, function(g) {
                    EE(c, g);
                    return null
                })
            }), _.z(_.w.Promise, "any").call(_.w.Promise, a).then(function(f) {
                c.Ya || DE(c, f)
            }, function() {
                c.Ya || DE(c, null)
            })
        };
    _.T(ME, BE);
    var NE = function(a, b) {
        BE.call(this);
        this.timeoutMs = a;
        this.defaultValue = b
    };
    _.T(NE, BE);
    var Nf = function(a) {
        setTimeout(function() {
            var b;
            DE(a, null != (b = a.defaultValue) ? b : null)
        }, a.timeoutMs)
    };
    var PE = function(a, b) {
        _.U.call(this);
        var c = this;
        this.id = a;
        this.timeoutMs = b;
        this.ta = this.sa = this.qa = this.started = !1;
        this.C = new wE(function() {
            OE(c)
        });
        _.S(this, this.C)
    };
    _.T(PE, _.U);
    PE.prototype.start = function() {
        var a = this,
            b;
        return _.nb(function(c) {
            switch (c.j) {
                case 1:
                    if (a.started) return c.return();
                    a.started = !0;
                    c.o = 2;
                    return _.ob(c, Of(a.C.o, a.C.C, a.timeoutMs), 4);
                case 4:
                    if (a.K) {
                        c.j = 5;
                        break
                    }
                    for (var d = 0, e = _.y(a.C.m), f = e.next(); !f.done; f = e.next()) {
                        if (!f.value.zf()) throw Error("missing input: " + a.id + "/" + d);
                        ++d
                    }
                    return _.ob(c, a.j(), 5);
                case 5:
                    c.j = 0;
                    c.o = 0;
                    break;
                case 2:
                    b = qb(c);
                    if (a.K) return c.return();
                    b instanceof zE ? a.J(b) : b instanceof Error && (a.T(b), a.o(b));
                    c.j = 0
            }
        })
    };
    var OE = function(a) {
            if (!a.started && a.qa) try {
                var b = a.C.o,
                    c = a.timeoutMs ? b.filter(function(k) {
                        return !k.Yb
                    }) : b,
                    d = b.filter(function(k) {
                        return k.Yb
                    }),
                    e, f = null == (e = _.z(b, "find").call(b, function(k) {
                        return void 0 !== k.Ab.error
                    })) ? void 0 : e.Ab.error;
                if (f) throw a.started = !0, f;
                if (!c.some(function(k) {
                        return !k.Ab.sb
                    })) {
                    if (d.length)
                        if (_.H(Mf)) {
                            for (var g = _.y(a.C.C), h = g.next(); !h.done; h = g.next()) Nf(h.value);
                            if (d.some(function(k) {
                                    return !k.Ab.sb
                                })) return
                        } else if (a.sa || (a.sa = !0, setTimeout(function() {
                            a.ta = !0;
                            OE(a)
                        }, a.timeoutMs)), d.some(function(k) {
                            return !k.Ab.sb
                        }) && !a.ta) return;
                    a.started = !0;
                    a.j()
                }
            } catch (k) {
                a.K || (k instanceof zE ? a.J(k) : k instanceof Error && (a.T(k), a.o(k)))
            }
        },
        W = function(a, b) {
            b = void 0 === b ? new Yn : b;
            a.C.j.push(b);
            return b
        },
        QE = function(a) {
            var b = void 0 === b ? new FE : b;
            a.C.j.push(b);
            return b
        },
        RE = function(a, b) {
            b = void 0 === b ? new zp : b;
            a.C.j.push(b);
            return b
        },
        X = function(a, b) {
            yE(a.C, b);
            b = new IE(b);
            a.C.m.push(b);
            return b
        },
        Y = function(a, b) {
            yE(a.C, b);
            return new JE(b)
        },
        SE = function(a, b) {
            if (_.H(Mf)) {
                if (a.timeoutMs) {
                    var c = new NE(a.timeoutMs, void 0);
                    b = new ME([b, c], !0);
                    yE(a.C, b, !0);
                    a.C.C.push(c);
                    return new JE(b)
                }
                yE(a.C, b);
                return new JE(b)
            }
            yE(a.C, b, !0);
            return new JE(b)
        },
        TE = function(a, b) {
            yE(a.C, b)
        },
        UE = function(a, b) {
            if (_.H(Mf))
                if (a.timeoutMs) {
                    var c = new NE(a.timeoutMs);
                    b = new ME([b, c], !0);
                    yE(a.C, b, !0);
                    a.C.C.push(c)
                } else TE(a, b);
            else yE(a.C, b, !0)
        },
        VE = function(a, b) {
            b = new ME(b);
            yE(a.C, b);
            b = new IE(b);
            a.C.m.push(b);
            return b
        };
    PE.prototype.J = function() {};
    PE.prototype.o = function(a) {
        if (this.C.j.length) {
            a = new zE(a.message);
            for (var b = _.y(this.C.j), c = b.next(); !c.done; c = b.next()) c = c.value, c.sb || EE(c, a)
        }
    };
    var $i = function() {
        _.U.apply(this, arguments);
        this.m = [];
        this.J = [];
        this.T = {};
        this.C = [];
        this.o = new _.Cf;
        this.j = {}
    };
    _.T($i, _.U);
    var N = function(a, b) {
            _.S(a, b);
            a.m.push(b);
            return b
        },
        tj = function(a, b) {
            b = _.y(b);
            for (var c = b.next(); !c.done; c = b.next()) N(a, c.value)
        },
        js = function(a, b) {
            a.J.push(b);
            _.S(a, b)
        },
        ij = function(a) {
            var b, c, d, e, f, g, h, k, l, m, n, p;
            return _.nb(function(t) {
                switch (t.j) {
                    case 1:
                        if (!a.C.length) {
                            t.j = 2;
                            break
                        }
                        return _.ob(t, _.w.Promise.all(a.C.map(function(u) {
                            return u.o.promise
                        })), 2);
                    case 2:
                        b = _.y(a.m);
                        for (c = b.next(); !c.done; c = b.next()) d = c.value, _.H(BA) ? (d.qa = !0, OE(d)) : d.start();
                        e = _.y(a.J);
                        for (f = e.next(); !f.done; f = e.next()) g = f.value, ij(g);
                        if (!a.j) {
                            t.j = 4;
                            break
                        }
                        h = _.z(Object, "keys").call(Object, a.j);
                        if (!h.length) {
                            t.j = 4;
                            break
                        }
                        return _.ob(t, _.w.Promise.all(_.z(Object, "values").call(Object, a.j).map(function(u) {
                            return u.promise
                        })), 6);
                    case 6:
                        for (k = t.A, l = 0, m = _.y(h), n = m.next(); !n.done; n = m.next()) p = n.value, a.T[p] = k[l++];
                    case 4:
                        return a.o.resolve(a.T), t.return(a.o.promise)
                }
            })
        };
    $i.prototype.A = function() {
        _.U.prototype.A.call(this);
        this.m.length = 0;
        this.J.length = 0;
        this.C.length = 0
    };
    var WE = function(a) {
        this.H = _.A(a)
    };
    _.T(WE, _.C);
    WE.ia = [1];
    var XE = [0, Ew, mx];
    var YE = function(a) {
        this.H = _.A(a)
    };
    _.T(YE, _.C);
    YE.ia = [1, 2];
    YE.prototype.j = oe([0, Ew, mx, Ew, XE]);
    var $E, ZE;
    $E = function() {
        this.wasPlaTagProcessed = !1;
        this.wasReactiveAdConfigReceived = {};
        this.adCount = {};
        this.wasReactiveAdVisible = {};
        this.stateForType = {};
        this.reactiveTypeEnabledInAsfe = {};
        this.wasReactiveTagRequestSent = !1;
        this.reactiveTypeDisabledByPublisher = {};
        this.tagSpecificState = {};
        this.messageValidationEnabled = !1;
        this.floatingAdsStacking = new ZE;
        this.sideRailProcessedFixedElements = new _.w.Set;
        this.sideRailAvailableSpace = new _.w.Map;
        this.sideRailPlasParam = new _.w.Map
    };
    _.Po = function(a) {
        a.google_reactive_ads_global_state ? (null == a.google_reactive_ads_global_state.sideRailProcessedFixedElements && (a.google_reactive_ads_global_state.sideRailProcessedFixedElements = new _.w.Set), null == a.google_reactive_ads_global_state.sideRailAvailableSpace && (a.google_reactive_ads_global_state.sideRailAvailableSpace = new _.w.Map), null == a.google_reactive_ads_global_state.sideRailPlasParam && (a.google_reactive_ads_global_state.sideRailPlasParam = new _.w.Map)) : a.google_reactive_ads_global_state = new $E;
        return a.google_reactive_ads_global_state
    };
    ZE = function() {
        this.maxZIndexRestrictions = {};
        this.nextRestrictionId = 0;
        this.maxZIndexListeners = []
    };
    var dF, fF, bF;
    _.aF = function(a) {
        this.j = _.Po(a).floatingAdsStacking
    };
    _.cF = function(a, b) {
        return new bF(a, b)
    };
    dF = function(a) {
        a = _.Ay(a.j.maxZIndexRestrictions);
        return a.length ? Math.min.apply(null, a) : null
    };
    _.eF = function(a, b) {
        a.j.maxZIndexListeners.push(b);
        b(dF(a))
    };
    fF = function(a) {
        var b = dF(a);
        _.tu(a.j.maxZIndexListeners, function(c) {
            return c(b)
        })
    };
    bF = function(a, b) {
        this.A = a;
        this.o = b;
        this.j = null
    };
    _.gF = function(a) {
        if (null == a.j) {
            var b = a.A,
                c = a.o,
                d = b.j.nextRestrictionId++;
            b.j.maxZIndexRestrictions[d] = c;
            fF(b);
            a.j = d
        }
    };
    _.hF = function(a) {
        if (null != a.j) {
            var b = a.A;
            delete b.j.maxZIndexRestrictions[a.j];
            fF(b);
            a.j = null
        }
    };
    _.Qo = 728 * 1.38;
    var bg, iF;
    _.fg = function(a, b) {
        b = void 0 === b ? {} : b;
        this.Ca = a;
        this.ya = b
    };
    _.jF = function(a, b) {
        var c, d = a.Ca.document;
        d.hasOwnProperty("_goog_efp_called_") || (d._goog_efp_called_ = d.elementFromPoint(b.x, b.y));
        if (c = d.elementFromPoint(b.x, b.y)) {
            if (!(d = iF(a, c, b))) a: {
                d = a.Ca.document;
                for (c = c.offsetParent; c && c !== d.body; c = c.offsetParent) {
                    var e = iF(a, c, b);
                    if (e) {
                        d = e;
                        break a
                    }
                }
                d = null
            }
            a = d || null
        } else a = null;
        return a
    };
    bg = function(a, b) {
        b = _.y(b);
        for (var c = b.next(); !c.done; c = b.next())
            if (c = _.jF(a, c.value)) return c;
        return null
    };
    iF = function(a, b, c) {
        if ("fixed" !== ez(b, "position")) return null;
        var d = "GoogleActiveViewInnerContainer" === b.getAttribute("class") || 1 >= _.sh(_.jz, b).width && 1 >= _.sh(_.jz, b).height || a.ya.cj && !a.ya.cj(b) ? !0 : !1;
        a.ya.Wg && a.ya.Wg(b, c, d);
        return d ? null : b
    };
    var ag = 90 * 1.38;
    var kF, lF, mF;
    kF = _.Ft(["* { pointer-events: none; }"]);
    lF = function(a, b) {
        var c = _.Oe("STYLE", a);
        c.textContent = _.bv(new _.av(kF[0], _.$u));
        null == a || a.head.appendChild(c);
        setTimeout(function() {
            null == a || a.head.removeChild(c)
        }, b)
    };
    _.nF = function(a, b, c) {
        if (!a.body) return null;
        var d = new mF;
        d.apply(a, b);
        return function() {
            var e = c || 0;
            0 < e && lF(b.document, e);
            _.bz(a.body, {
                filter: d.j,
                webkitFilter: d.j,
                overflow: d.o,
                position: d.C,
                top: d.K
            });
            b.scrollTo(0, d.A)
        }
    };
    mF = function() {
        this.j = this.K = this.C = this.o = null;
        this.A = 0
    };
    mF.prototype.apply = function(a, b) {
        this.o = a.body.style.overflow;
        this.C = a.body.style.position;
        this.K = a.body.style.top;
        this.j = a.body.style.filter ? a.body.style.filter : a.body.style.webkitFilter;
        this.A = _.Zf(b);
        _.bz(a.body, "top", -this.A + "px")
    };
    _.Io = function(a, b) {
        var c;
        if (!(c = 0 >= b) && !(c = null == a)) {
            try {
                a.setItem("__storage_test__", "__storage_test__");
                var d = a.getItem("__storage_test__");
                a.removeItem("__storage_test__");
                var e = "__storage_test__" === d
            } catch (f) {
                e = !1
            }
            c = !e
        }
        return c ? null : lg(a, b)
    };
    _.Ho = function(a) {
        return !!a && 1 > a.length
    };
    var Km = function(a) {
            var b = void 0 === b ? _.Kg(_.r) : b;
            this.id = a;
            this.A = .001 > Math.random();
            this.j = {
                pvsid: String(b)
            }
        },
        oF = function(a) {
            a = og(a);
            var b;
            Xg.set(a, (null != (b = Xg.get(a)) ? b : 0) + 1)
        },
        Wg = function() {
            return [].concat(_.Ee(_.z(Xg, "values").call(Xg))).reduce(function(a, b) {
                return a + b
            }, 0)
        },
        L = function(a, b, c) {
            "string" !== typeof c && (c = String(c));
            /^\w+$/.test(b) && (c ? a.j[b] = c : delete a.j[b])
        },
        Mm = function(a) {
            var b = 1;
            b = void 0 === b ? null : b;
            if (pF()) b = !0;
            else {
                var c = a.A;
                b && 0 <= b && (c = Math.random() < b);
                b = c && !!a.id
            }
            b && WB(window, qF(a) || "", void 0, !0)
        },
        qF = function(a) {
            var b = "https://pagead2.googlesyndication.com/pagead/gen_204?id=" + encodeURIComponent(a.id);
            _.bl(a.j, function(c, d) {
                c && (b += "&" + d + "=" + encodeURIComponent(c))
            });
            return b
        },
        rF = function(a) {
            var b = [].concat(_.Ee(_.z(Xg, "keys").call(Xg)));
            b = b.map(function(c) {
                return c.replace(/,/g, "\\,")
            });
            3 >= b.length ? L(a, "nw_id", b.join()) : (b = b.slice(0, 3), b.push("__extra__"), L(a, "nw_id", b.join()))
        },
        ci = function(a, b) {
            L(a, "vrg", String(b.kc || b.vb));
            rF(a);
            L(a, "nslots", Wg().toString());
            b = _.nf();
            b.length && L(a, "eid", b.join());
            L(a, "pub_url", document.URL)
        },
        Wh = function(a, b, c) {
            c = void 0 === c ? .001 : c;
            if (void 0 === c || 0 > c || 1 < c) c = .001;
            Math.random() < c && (a = new Km(a), b(a), Mm(a))
        },
        Xg = new _.w.Map,
        pF = Dh(function() {
            return !!Ey(_.r.location.href)
        });
    var Cg = function() {
        DD.call(this, _.H(Dg) || _.H(oB) ? 1 : 0, _.r);
        this.o = 0;
        var a = _.H(Dg) || _.H(oB);
        _.r.google_measure_js_timing = a || _.r.google_measure_js_timing
    };
    _.T(Cg, DD);
    _.sF = function(a) {
        this.context = a
    };
    _.sF.prototype.Hb = function(a, b) {
        return Gg(this.context, a, b)
    };
    _.sF.prototype.Fa = function(a, b) {
        return zg(this.context, a, b)
    };
    _.sF.prototype.rb = function(a, b) {
        Eg(this.context, a, b);
        return !1
    };
    _.sF.prototype.Kc = ca(3);
    var tF = {},
        uF = (tF.companion_ads = "companionAds", tF.content = "content", tF.publisher_ads = "pubads", tF);
    var $g = function(a) {
        this.H = _.A(a)
    };
    _.T($g, _.C);
    $g.prototype.getWidth = function() {
        return Wq(this, 1)
    };
    var fh = function(a, b) {
        return _.xh(a, 1, _.Ec(b))
    };
    $g.prototype.getHeight = function() {
        return Wq(this, 2)
    };
    var eh = function(a, b) {
            return _.xh(a, 2, _.Ec(b))
        },
        hm = function() {
            var a = new $g;
            return _.Wi(a, 3, !0)
        };
    var bn = function(a) {
        this.H = _.A(a)
    };
    _.T(bn, _.C);
    var Br = function(a) {
        var b = new bn;
        return _.Wi(b, 1, a)
    };
    var ms = function(a) {
        this.H = _.A(a)
    };
    _.T(ms, _.C);
    var al = function(a) {
        this.H = _.A(a)
    };
    _.T(al, _.C);
    var vk = function(a) {
        this.H = _.A(a)
    };
    _.T(vk, _.C);
    var uk = function(a, b) {
            return rn(a, 1, b)
        },
        tk = function(a, b) {
            return _.Kd(a, 2, b, _.Nc)
        },
        Qk = function(a, b) {
            return uw(a, 2, b)
        };
    vk.ia = [2];
    var yr = function(a) {
        this.H = _.A(a)
    };
    _.T(yr, _.C);
    yr.ia = [2, 3];
    var kp = function(a) {
        this.H = _.A(a)
    };
    _.T(kp, _.C);
    var rp = function(a, b) {
            return Hn(a, 1, b)
        },
        pp = function(a, b) {
            return _.Kd(a, 2, b, _.Nc)
        };
    kp.ia = [2];
    var Ar = function(a) {
        this.H = _.A(a)
    };
    _.T(Ar, _.C);
    var qp = function(a, b) {
        Xi(a, 1, kp, b)
    };
    Ar.ia = [1];
    var wr = function(a) {
        this.H = _.A(a)
    };
    _.T(wr, _.C);
    var vF = function(a) {
        this.H = _.A(a)
    };
    _.T(vF, _.C);
    vF.prototype.setTagForChildDirectedTreatment = function(a) {
        return Hn(this, 5, a)
    };
    vF.prototype.clearTagForChildDirectedTreatment = function() {
        return Ck(this, 5)
    };
    vF.prototype.setTagForUnderAgeOfConsent = function(a) {
        return Hn(this, 6, a)
    };
    var wF = function(a) {
        this.H = _.A(a)
    };
    _.T(wF, _.C);
    wF.prototype.getCategoryExclusions = function(a) {
        return mw(this, 3, a)
    };
    wF.prototype.Ia = function() {
        return bh(this, vk, 14)
    };
    wF.prototype.hc = function() {
        return _.Zg(this, al, 18)
    };
    var at = function(a) {
        return _.Zg(a, vF, 25)
    };
    wF.prototype.getCorrelator = function() {
        return Mq(this, 26)
    };
    wF.prototype.setCorrelator = function(a) {
        return _.xh(this, 26, null == a ? a : Lc(a))
    };
    wF.prototype.pe = function() {
        return xr(this, wr, 33)
    };
    wF.ia = [2, 3, 14];
    var wh = function() {
        this.j = new _.w.Map
    };
    var xF = {},
        lh = (xF[253] = !1, xF[246] = [], xF[150] = "", xF[221] = /^true$/.test("false"), xF[36] = /^true$/.test("false"), xF[172] = null, xF[260] = void 0, xF[251] = null, xF),
        kh = function() {
            this.j = !1
        };
    var yF = function() {
            this.A = {};
            this.j = new wF;
            this.o = new _.w.Map;
            this.j.setCorrelator(Sy());
            _.mh(36) && _.Wi(this.j, 15, !0)
        },
        zF = function(a) {
            var b = Mh(),
                c = a.getDomId();
            if (c && !b.A.hasOwnProperty(c)) {
                var d = _.kf(wh),
                    e = ++_.kf(Cg).o;
                d.j.set(c, e);
                _.xh(a, 20, _.Ec(e));
                b.A[c] = a
            }
        },
        AF = function(a, b) {
            return a.A[b]
        },
        Mh = function() {
            return _.kf(yF)
        };
    var BF = Dh(Ah);
    var ki = ["auto", "inherit", "100%"],
        li = ki.concat(["none"]),
        CF = [2, 1];
    var gn = function(a, b, c) {
        if (!a) return !0;
        var d = !0;
        ii(a, function(e) {
            return d = ji(e, b, 10, 10)
        }, c);
        return d
    };
    var oi = /^data-(?!xml)[_a-z][_a-z.0-9-]*$/;
    var DF = function(a, b, c, d, e, f) {
            this.o = a.clone();
            this.A = b.clone();
            this.C = c;
            this.j = d.clone();
            this.K = e;
            this.m = f
        },
        EF = function(a) {
            return JSON.stringify({
                windowCoords_t: a.o.top,
                windowCoords_r: a.o.right,
                windowCoords_b: a.o.bottom,
                windowCoords_l: a.o.left,
                frameCoords_t: a.A.top,
                frameCoords_r: a.A.right,
                frameCoords_b: a.A.bottom,
                frameCoords_l: a.A.left,
                styleZIndex: a.C,
                allowedExpansion_t: a.j.top,
                allowedExpansion_r: a.j.right,
                allowedExpansion_b: a.j.bottom,
                allowedExpansion_l: a.j.left,
                xInView: a.K,
                yInView: a.m
            })
        },
        FF = function(a) {
            var b = window,
                c = b.screenX || b.screenLeft || 0,
                d = b.screenY || b.screenTop || 0;
            b = new _.Wy(d, c + (b.outerWidth || document.documentElement.clientWidth || 0), d + (b.outerHeight || document.documentElement.clientHeight || 0), c);
            c = gz(a);
            d = _.sh(_.jz, a);
            var e = new Xy(c.x, c.y, d.width, d.height);
            c = Yy(e);
            d = String(ez(a, "zIndex"));
            var f = new _.Wy(0, Infinity, Infinity, 0);
            for (var g = iy(a), h = g.j.body, k = g.j.documentElement, l = ny(g.j); a = fz(a);)
                if (!(_.xv && 0 == a.clientWidth || Av && 0 == a.clientHeight && a == h) && a != h && a != k && "visible" != ez(a, "overflow")) {
                    var m = gz(a),
                        n = new _.qh(a.clientLeft, a.clientTop);
                    m.x += n.x;
                    m.y += n.y;
                    f.top = Math.max(f.top, m.y);
                    f.right = Math.min(f.right, m.x + a.clientWidth);
                    f.bottom = Math.min(f.bottom, m.y + a.clientHeight);
                    f.left = Math.max(f.left, m.x)
                }
            a = l.scrollLeft;
            l = l.scrollTop;
            f.left = Math.max(f.left, a);
            f.top = Math.max(f.top, l);
            g = g.j;
            g = _.my(g.parentWindow || g.defaultView || window);
            f.right = Math.min(f.right, a + g.width);
            f.bottom = Math.min(f.bottom, l + g.height);
            l = (f = (f = 0 <= f.top && 0 <= f.left && f.bottom > f.top && f.right > f.left ? f : null) ? new Xy(f.left, f.top, f.right - f.left, f.bottom - f.top) : null) ? Zy(e, f) : null;
            g = a = 0;
            l && !(new _.uh(l.width, l.height)).isEmpty() && (a = l.width / e.width, g = l.height / e.height);
            l = new _.Wy(0, 0, 0, 0);
            if (h = f)(e = Zy(e, f)) ? (k = Yy(f), m = Yy(e), h = m.right != k.left && k.right != m.left, k = m.bottom != k.top && k.bottom != m.top, h = (0 != e.width || h) && (0 != e.height || k)) : h = !1;
            h && (l = new _.Wy(Math.max(c.top - f.top, 0), Math.max(f.left + f.width - c.right, 0), Math.max(f.top + f.height - c.bottom, 0), Math.max(c.left - f.left, 0)));
            return new DF(b, c, d, l, a, g)
        };
    var GF = function(a) {
        this.C = a;
        this.K = null;
        this.F = this.status = 0;
        this.A = null;
        this.tb = "sfchannel" + a
    };
    GF.prototype.Gf = function() {
        return 2 == this.F
    };
    var HF = function(a) {
        this.j = a
    };
    HF.prototype.getValue = function(a, b) {
        return null == this.j[a] || null == this.j[a][b] ? null : this.j[a][b]
    };
    var IF = function(a, b) {
        this.ie = a;
        this.je = b;
        this.A = this.j = !1
    };
    var JF = function(a, b, c, d, e, f, g, h) {
        h = void 0 === h ? [] : h;
        this.A = a;
        this.o = b;
        this.C = c;
        this.permissions = d;
        this.metadata = e;
        this.K = f;
        this.gd = g;
        this.hostpageLibraryTokens = h;
        this.j = ""
    };
    var KF = function(a, b) {
        this.A = a;
        this.C = b
    };
    KF.prototype.j = function(a) {
        this.C && a && (a.sentinel = this.C);
        return JSON.stringify(a)
    };
    var LF = function(a, b, c) {
        KF.call(this, a, void 0 === c ? "" : c);
        this.version = b
    };
    _.T(LF, KF);
    LF.prototype.j = function() {
        return KF.prototype.j.call(this, {
            uid: this.A,
            version: this.version
        })
    };
    var MF = function(a, b, c, d) {
        KF.call(this, a, void 0 === d ? "" : d);
        this.K = b;
        this.o = c
    };
    _.T(MF, KF);
    MF.prototype.j = function() {
        return KF.prototype.j.call(this, {
            uid: this.A,
            initialWidth: this.K,
            initialHeight: this.o
        })
    };
    var NF = function(a, b, c) {
        KF.call(this, a, void 0 === c ? "" : c);
        this.description = b
    };
    _.T(NF, KF);
    NF.prototype.j = function() {
        return KF.prototype.j.call(this, {
            uid: this.A,
            description: this.description
        })
    };
    var OF = function(a, b, c, d) {
        KF.call(this, a, void 0 === d ? "" : d);
        this.o = b;
        this.push = c
    };
    _.T(OF, KF);
    OF.prototype.j = function() {
        return KF.prototype.j.call(this, {
            uid: this.A,
            expand_t: this.o.top,
            expand_r: this.o.right,
            expand_b: this.o.bottom,
            expand_l: this.o.left,
            push: this.push
        })
    };
    var PF = function(a, b) {
        KF.call(this, a, void 0 === b ? "" : b)
    };
    _.T(PF, KF);
    PF.prototype.j = function() {
        return KF.prototype.j.call(this, {
            uid: this.A
        })
    };
    var QF = function(a, b, c) {
        KF.call(this, a, void 0 === c ? "" : c);
        this.K = b
    };
    _.T(QF, KF);
    QF.prototype.j = function() {
        var a = {
            uid: this.A,
            newGeometry: EF(this.K)
        };
        return KF.prototype.j.call(this, a)
    };
    var RF = function(a, b, c, d, e, f) {
        QF.call(this, a, c, void 0 === f ? "" : f);
        this.success = b;
        this.o = d;
        this.push = e
    };
    _.T(RF, QF);
    RF.prototype.j = function() {
        var a = {
            uid: this.A,
            success: this.success,
            newGeometry: EF(this.K),
            expand_t: this.o.top,
            expand_r: this.o.right,
            expand_b: this.o.bottom,
            expand_l: this.o.left,
            push: this.push
        };
        this.C && (a.sentinel = this.C);
        return JSON.stringify(a)
    };
    var SF = function(a, b, c, d) {
        KF.call(this, a, void 0 === d ? "" : d);
        this.width = b;
        this.height = c
    };
    _.T(SF, KF);
    SF.prototype.j = function() {
        return KF.prototype.j.call(this, {
            uid: this.A,
            width: this.width,
            height: this.height
        })
    };
    var TF = function(a) {
        var b;
        if (null == (b = a.location) ? 0 : b.ancestorOrigins) return a.location.ancestorOrigins.length;
        var c = 0;
        bk(function() {
            c++;
            return !1
        }, !0, !0, a);
        return c
    };
    var UF = function() {
            this.j = []
        },
        WF = function(a, b, c, d, e) {
            a.j.push(new VF(b, c, d, e))
        },
        XF = function(a) {
            for (var b = a.j.length - 1; 0 <= b; b--) {
                var c = a.j[b];
                c.A ? (c.o.style.removeProperty(c.j), c.o.style.setProperty(c.j, String(c.C), c.K)) : c.o.style[c.j] = c.C
            }
            a.j.length = 0
        },
        VF = function(a, b, c, d) {
            this.o = a;
            this.j = (this.A = !(void 0 === d || !a.style || !a.style.getPropertyPriority)) ? String(b).replace(/([A-Z])/g, "-$1").toLowerCase() : b;
            this.C = this.A ? a.style.getPropertyValue(this.j) : a.style[this.j];
            this.K = this.A ? a.style.getPropertyPriority(this.j) : void 0;
            this.A ? (a.style.removeProperty(this.j), a.style.setProperty(this.j, String(c), d)) : a.style[this.j] = String(c)
        };
    var YF, ZF;
    YF = function(a, b) {
        b = b.google_js_reporting_queue = b.google_js_reporting_queue || [];
        2048 > b.length && b.push(a)
    };
    ZF = function() {
        var a = window,
            b = _.ff(a);
        b && YF({
            label: "2",
            type: 9,
            value: b
        }, a)
    };
    _.$F = function(a, b, c, d, e) {
        e = void 0 === e ? !1 : e;
        var f = d || window,
            g = "undefined" !== typeof queueMicrotask;
        return function() {
            e && g && queueMicrotask(function() {
                f.google_rum_task_id_counter = f.google_rum_task_id_counter || 1;
                f.google_rum_task_id_counter += 1
            });
            var h = _.ff(),
                k = 3;
            try {
                var l = b.apply(this, arguments)
            } catch (m) {
                k = 13;
                if (!c) throw m;
                c(a, m)
            } finally {
                f.google_measure_js_timing && h && YF(_.z(Object, "assign").call(Object, {}, {
                    label: a.toString(),
                    value: h,
                    duration: (_.ff() || 0) - h,
                    type: k
                }, e && g && {
                    taskId: f.google_rum_task_id_counter = f.google_rum_task_id_counter || 1
                }), f)
            }
            return l
        }
    };
    var eG = function(a) {
        GF.call(this, a.uniqueId);
        var b = this;
        this.J = a.om;
        this.T = 1 === a.size;
        this.ba = new IF(a.permissions.ie && !this.T, a.permissions.je && !this.T);
        this.m = a.Yf;
        var c;
        this.Aa = null != (c = a.hostpageLibraryTokens) ? c : [];
        var d = window.location;
        c = d.protocol;
        d = d.host;
        this.va = "file:" == c ? "*" : c + "//" + d;
        this.Ba = !!a.gd;
        this.V = a.Nh ? "//" + a.Nh + ".safeframe.googlesyndication.com" : "//tpc.googlesyndication.com";
        this.oa = a.lb ? "*" : "https:" + this.V;
        this.qa = !!a.ej;
        this.ja = aG(a);
        this.o = new UF;
        bG(this, a.Yf, a.size);
        this.K = this.ta = FF(a.Yf);
        this.M = a.tk || "1-0-40";
        var e;
        this.ka = null != (e = a.Mi) ? e : "";
        cG(this, a);
        this.I = _.$F(412, function() {
            return dG(b)
        }, a.jb);
        this.ua = -1;
        this.B = 0;
        var f = _.$F(415, function() {
            b.j && (b.j.name = "", a.xh && a.xh(), _.Pe(b.j, "load", f))
        }, a.jb);
        _.lb(this.j, "load", f);
        this.Cf = _.$F(413, this.Cf, a.jb);
        this.dg = _.$F(417, this.dg, a.jb);
        this.hg = _.$F(419, this.hg, a.jb);
        this.uf = _.$F(411, this.uf, a.jb);
        this.cf = _.$F(409, this.cf, a.jb);
        this.Z = _.$F(410, this.Z, a.jb);
        this.Sf = _.$F(416, this.Sf, a.jb);
        this.A = new dE(this.tb, this.j.contentWindow, this.oa, !1);
        fE(this.A, "init_done", (0, _.gu)(this.Cf, this));
        fE(this.A, "register_done", (0, _.gu)(this.dg, this));
        fE(this.A, "report_error", (0, _.gu)(this.hg, this));
        fE(this.A, "expand_request", (0, _.gu)(this.uf, this));
        fE(this.A, "collapse_request", (0, _.gu)(this.cf, this));
        fE(this.A, "creative_geometry_update", (0, _.gu)(this.Z, this));
        this.A.connect((0, _.gu)(this.Sf, this))
    };
    _.T(eG, GF);
    var bG = function(a, b, c) {
            a.T ? (b.style.width = _.iz("100%", !0), b.style.height = _.iz("auto", !0)) : (b.style.width = _.iz(c.width, !0), b.style.height = _.iz(c.height, !0))
        },
        cG = function(a, b) {
            var c = b.lb,
                d = b.content,
                e = b.ed,
                f = b.size,
                g = void 0 === b.fd ? "3rd party ad content" : b.fd,
                h = b.ke;
            b = b.Ye;
            var k = {
                shared: {
                    sf_ver: a.M,
                    ck_on: vD() ? 1 : 0,
                    flash_ver: "0"
                }
            };
            d = c ? "" : null != d ? d : "";
            d = a.M + ";" + d.length + ";" + d;
            k = new JF(a.C, a.va, a.ta, a.ba, new HF(k), a.T, a.Ba, a.Aa);
            var l = {};
            l.uid = k.A;
            l.hostPeerName = k.o;
            l.initialGeometry = EF(k.C);
            var m = k.permissions;
            m = JSON.stringify({
                expandByOverlay: m.ie,
                expandByPush: m.je,
                readCookie: m.j,
                writeCookie: m.A
            });
            l = (l.permissions = m, l.metadata = JSON.stringify(k.metadata.j), l.reportCreativeGeometry = k.K, l.isDifferentSourceWindow = k.gd, l.goog_safeframe_hlt = bE(k.hostpageLibraryTokens), l);
            k.j && (l.sentinel = k.j);
            k = JSON.stringify(l);
            d += k;
            a.qa && f instanceof _.uh && (k = _.oy(_.hy(a.m)), l = _.oy(_.hy(a.m)).location.protocol + a.V, OD || _.Nm(k.document, PD), OD++, k.google_eas_queue = k.google_eas_queue || [], k.google_eas_queue.push({
                a: e,
                b: l,
                c: f.width,
                d: f.height,
                e: "sf-gdn-exp-" + OD,
                f: void 0,
                g: void 0,
                h: void 0,
                i: void 0
            }));
            k = f.width;
            f = f.height;
            a.T && (f = k = 0);
            l = {};
            e = (l.id = e, l.title = g, l.name = d, l.scrolling = "no", l.marginWidth = "0", l.marginHeight = "0", l.width = String(k), l.height = String(f), l["data-is-safeframe"] = "true", l);
            void 0 === c && (g = _.oy(_.hy(a.m)), f = a.ka, d = a.V, (k = f) && (k = "?" + k), d = (void 0 === d ? "//tpc.googlesyndication.com" : d) + ("/safeframe/" + a.M + "/html/container.html" + k), (k = TF(g)) && (d += (f ? "&" : "?") + "n=" + k), f = "https:" + d, d = [], a.qa && (k = Ey(g.location.href), g = d.push, k = [0 < k.length ? "google_debug" + (k ? "=" + k : "") + "&" : "", "xpc=", "sf-gdn-exp-" + a.C, "&p=", encodeURIComponent(_.r.document.location.protocol), "//", encodeURIComponent(_.r.document.location.host)].join(""), g.call(d, k)), d.length && (f += "#" + d.join("&")), e.src = f);
            null !== a.ja && (e.sandbox = a.ja);
            h && (e.allow = h);
            b && (e.credentialless = "true");
            e.role = "region";
            e["aria-label"] = "Advertisement";
            e.tabIndex = "0";
            c ? (a.j = c, ky(a.j, e)) : (c = {}, c = (c.frameborder = 0, c.allowTransparency = "true", c.style = "border:0;vertical-align:bottom;", c.src = "about:blank", c), e && Fa(c, e), h = _.Oe("IFRAME"), ky(h, c), a.j = h);
            a.T && (a.j.style.minWidth = "100%");
            a.m.appendChild(a.j)
        };
    _.q = eG.prototype;
    _.q.Sf = function() {
        _.lb(window, "resize", this.I);
        _.lb(window, "scroll", this.I)
    };
    _.q.Cf = function(a) {
        try {
            if (0 != this.status) throw Error("Container already initialized");
            if ("string" !== typeof a) throw Error("Could not parse serialized message");
            var b = JSON.parse(a);
            if (!_.la(b) || !Mi(b.uid) || "string" !== typeof b.version) throw Error("Cannot parse JSON message");
            var c = new LF(b.uid, b.version, b.sentinel);
            if (this.C !== c.A || this.M !== c.version) throw Error("Wrong source container");
            this.status = 1
        } catch (e) {
            var d;
            null == (d = this.J) || d.error("Invalid INITIALIZE_DONE message. Reason: " + e.message)
        }
    };
    _.q.dg = function(a) {
        try {
            if (1 != this.status) throw Error("Container not initialized");
            if ("string" !== typeof a) throw Error("Could not parse serialized message");
            var b = JSON.parse(a);
            if (!_.la(b) || !Mi(b.uid) || "number" !== typeof b.initialWidth || "number" !== typeof b.initialHeight) throw Error("Cannot parse JSON message");
            if (this.C !== (new MF(b.uid, b.initialWidth, b.initialHeight, b.sentinel)).A) throw Error("Wrong source container");
            this.status = 2
        } catch (d) {
            var c;
            null == (c = this.J) || c.error("Invalid REGISTER_DONE message. Reason: " + d.message)
        }
    };
    _.q.hg = function(a) {
        try {
            if ("string" !== typeof a) throw Error("Could not parse serialized message");
            var b = JSON.parse(a);
            if (!_.la(b) || !Mi(b.uid) || "string" !== typeof b.description) throw Error("Cannot parse JSON message");
            var c = new NF(b.uid, b.description, b.sentinel);
            if (this.C !== c.A) throw Error("Wrong source container");
            var d;
            null == (d = this.J) || d.info("Ext reported an error. Description: " + c.description)
        } catch (f) {
            var e;
            null == (e = this.J) || e.error("Invalid REPORT_ERROR message. Reason: " + f.message)
        }
    };
    _.q.uf = function(a) {
        try {
            if (2 != this.status) throw Error("Container is not registered");
            if (0 != this.F) throw Error("Container is not collapsed");
            if ("string" !== typeof a) throw Error("Could not parse serialized message");
            var b = JSON.parse(a);
            if (!_.la(b) || !Mi(b.uid) || "number" !== typeof b.expand_t || "number" !== typeof b.expand_r || "number" !== typeof b.expand_b || "number" !== typeof b.expand_l || "boolean" !== typeof b.push) throw Error("Cannot parse JSON message");
            var c = new OF(b.uid, new _.Wy(b.expand_t, b.expand_r, b.expand_b, b.expand_l), b.push, b.sentinel);
            if (this.C !== c.A) throw Error("Wrong source container");
            if (!(0 <= c.o.top && 0 <= c.o.left && 0 <= c.o.bottom && 0 <= c.o.right)) throw Error("Invalid expansion amounts");
            var d;
            if (d = c.push && this.ba.je || !c.push && this.ba.ie) {
                var e = c.o,
                    f = c.push,
                    g = this.K = FF(this.j);
                if (e.top <= g.j.top && e.right <= g.j.right && e.bottom <= g.j.bottom && e.left <= g.j.left) {
                    if (!f)
                        for (var h = this.j.parentNode; h && h.style; h = h.parentNode) WF(this.o, h, "overflowX", "visible", "important"), WF(this.o, h, "overflowY", "visible", "important");
                    var k = Yy(new Xy(0, 0, this.K.A.getWidth(), this.K.A.getHeight()));
                    _.la(e) ? (k.top -= e.top, k.right += e.right, k.bottom += e.bottom, k.left -= e.left) : (k.top -= e, k.right += Number(void 0), k.bottom += Number(void 0), k.left -= Number(void 0));
                    WF(this.o, this.m, "position", "relative");
                    WF(this.o, this.j, "position", "absolute");
                    if (f) {
                        var l = k.getWidth();
                        WF(this.o, this.m, "width", l + "px");
                        var m = k.getHeight();
                        WF(this.o, this.m, "height", m + "px")
                    } else WF(this.o, this.j, "zIndex", "10000");
                    var n = k.getWidth();
                    WF(this.o, this.j, "width", n + "px");
                    var p = k.getHeight();
                    WF(this.o, this.j, "height", p + "px");
                    WF(this.o, this.j, "left", k.left + "px");
                    WF(this.o, this.j, "top", k.top + "px");
                    this.F = 2;
                    this.K = FF(this.j);
                    d = !0
                } else d = !1
            }
            a = d;
            gE(this.A, "expand_response", (new RF(this.C, a, this.K, c.o, c.push)).j());
            if (!a) throw Error("Viewport or document body not large enough to expand into.");
        } catch (u) {
            var t;
            null == (t = this.J) || t.error("Invalid EXPAND_REQUEST message. Reason: " + u.message)
        }
    };
    _.q.cf = function(a) {
        try {
            if (2 != this.status) throw Error("Container is not registered");
            if (!this.Gf()) throw Error("Container is not expanded");
            if ("string" !== typeof a) throw Error("Could not parse serialized message");
            var b = JSON.parse(a);
            if (!_.la(b) || !Mi(b.uid)) throw Error("Cannot parse JSON message");
            if (this.C !== (new PF(b.uid, b.sentinel)).A) throw Error("Wrong source container");
            XF(this.o);
            this.F = 0;
            this.j && (this.K = FF(this.j));
            gE(this.A, "collapse_response", (new QF(this.C, this.K)).j())
        } catch (d) {
            var c;
            null == (c = this.J) || c.error("Invalid COLLAPSE_REQUEST message. Reason: " + d.message)
        }
    };
    var dG = function(a) {
        if (1 == a.status || 2 == a.status) switch (a.B) {
            case 0:
                fG(a);
                a.ua = window.setTimeout((0, _.gu)(a.sa, a), 1E3);
                a.B = 1;
                break;
            case 1:
                a.B = 2;
                break;
            case 2:
                a.B = 2
        }
    };
    eG.prototype.Z = function(a) {
        try {
            if ("string" !== typeof a) throw Error("Could not parse serialized message");
            var b = JSON.parse(a);
            if (!_.la(b) || !Mi(b.uid) || "number" !== typeof b.width || "number" !== typeof b.height || b.sentinel && "string" !== typeof b.sentinel) throw Error("Cannot parse JSON message");
            var c = new SF(b.uid, b.width, b.height, b.sentinel);
            if (this.C !== c.A) throw Error("Wrong source container");
            var d = String(c.height);
            if (this.T) d !== this.j.height && (this.j.height = d, dG(this));
            else {
                var e;
                null == (e = this.J) || e.error("Got CreativeGeometryUpdate message in non-fluidcontainer. The container is not resized.")
            }
        } catch (g) {
            var f;
            null == (f = this.J) || f.error("Invalid CREATIVE_GEOMETRY_UPDATE message. Reason: " + g.message)
        }
    };
    eG.prototype.sa = function() {
        if (1 == this.status || 2 == this.status) switch (this.B) {
            case 1:
                this.B = 0;
                break;
            case 2:
                fG(this), this.ua = window.setTimeout((0, _.gu)(this.sa, this), 1E3), this.B = 1
        }
    };
    var fG = function(a) {
            a.K = FF(a.j);
            gE(a.A, "geometry_update", (new QF(a.C, a.K)).j())
        },
        aG = function(a) {
            var b = null;
            a.Ph && (b = a.Ph);
            return null == b ? null : b.join(" ")
        },
        gG = ["allow-modals", "allow-orientation-lock", "allow-presentation", "allow-pointer-lock"],
        hG = ["allow-top-navigation"],
        iG = ["allow-same-origin"],
        jG = Hy([].concat(_.Ee(gG), _.Ee(hG)));
    Hy([].concat(_.Ee(gG), _.Ee(iG)));
    Hy([].concat(_.Ee(gG), _.Ee(hG), _.Ee(iG)));
    var kG = _.Ft(["https://tpc.googlesyndication.com/safeframe/", "/html/container.html"]),
        lG = {
            Nj: function(a) {
                if ("string" !== typeof a.version) throw new TypeError("version is not a string");
                if (!/^[0-9]+-[0-9]+-[0-9]+$/.test(a.version)) throw new RangeError("Invalid version: " + a.version);
                if ("string" !== typeof a.Qe) throw new TypeError("subdomain is not a string");
                if (!/^[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?$/.test(a.Qe)) throw new RangeError("Invalid subdomain: " + a.Qe);
                return _.se("https://" + a.Qe + ".safeframe.googlesyndication.com/safeframe/" + a.version + "/html/container.html")
            },
            wm: function(a) {
                return _.te(kG, a)
            }
        };
    var mG = function() {};
    mG.j = function() {
        throw Error("Must be overridden");
    };
    var Ni = function() {
        this.j = 0
    };
    _.T(Ni, mG);
    Ni.jc = void 0;
    Ni.j = function() {
        return Ni.jc ? Ni.jc : Ni.jc = new Ni
    };
    var nG = function() {
            this.cache = {}
        },
        Ui = function() {
            oG || (oG = new nG);
            return oG
        },
        Vi = function(a) {
            var b = Jc(Gn(a, 3));
            if (!b) return 3;
            if (void 0 === _.Qi(a, 2)) return 4;
            a = Date.now();
            return a > b + 2592E5 ? 2 : a > b + 432E5 ? 1 : 0
        };
    nG.prototype.get = function(a, b) {
        if (this.cache[a]) return {
            oc: this.cache[a],
            success: !0
        };
        var c = "";
        try {
            c = b.getItem("_GESPSK-" + a)
        } catch (g) {
            var d;
            Oi(6, a, null == (d = g) ? void 0 : d.message);
            return {
                oc: null,
                success: !1
            }
        }
        if (!c) return {
            oc: null,
            success: !0
        };
        try {
            var e = Cx(c);
            this.cache[a] = e;
            return {
                oc: e,
                success: !0
            }
        } catch (g) {
            var f;
            Oi(5, a, null == (f = g) ? void 0 : f.message);
            return {
                oc: null,
                success: !1
            }
        }
    };
    nG.prototype.set = function(a, b) {
        var c = _.Qi(a, 1),
            d = "_GESPSK-" + c;
        _.Nj(a, 3, Date.now());
        try {
            b.setItem(d, Qj(a))
        } catch (f) {
            var e;
            Oi(7, c, null == (e = f) ? void 0 : e.message);
            return !1
        }
        this.cache[c] = a;
        return !0
    };
    var oG = null;
    var pG = function(a, b) {
        PE.call(this, a);
        this.id = a;
        this.F = b
    };
    _.T(pG, PE);
    pG.prototype.T = function(a) {
        this.F(this.id, a)
    };
    var bj = function(a, b, c, d) {
        pG.call(this, 1041, d);
        this.storage = b;
        this.B = X(this, a);
        c && (this.m = Y(this, c))
    };
    _.T(bj, pG);
    bj.prototype.j = function() {
        var a = this.B.value,
            b, c, d = null != (c = this.storage) ? c : null == (b = this.m) ? void 0 : b.value;
        d && Ui().set(a, d) && null != _.Qi(a, 2) && Oi(27, _.Qi(a, 1))
    };
    var dj = function(a, b) {
        pG.call(this, 1048, b);
        this.m = W(this);
        this.B = W(this);
        this.I = X(this, a)
    };
    _.T(dj, pG);
    dj.prototype.j = function() {
        var a = this.I.value,
            b = function(c) {
                var d = {};
                Oi(c, _.Qi(a, 1), null, (d.tic = String(Math.round((Date.now() - Jc(Gn(a, 3))) / 6E4)), d))
            };
        switch (Vi(a)) {
            case 0:
                b(24);
                break;
            case 1:
                b(25);
                this.B.G(a);
                break;
            case 2:
                b(26);
                this.m.G(a);
                break;
            case 3:
                Oi(9, _.Qi(a, 1));
                this.m.G(a);
                break;
            case 4:
                b(23), this.m.G(a)
        }
    };
    var qG = function(a, b) {
        pG.call(this, 1094, b);
        this.m = RE(this);
        this.B = X(this, a)
    };
    _.T(qG, pG);
    qG.prototype.j = function() {
        var a = this.B.value;
        if (a) {
            if (void 0 !== a)
                for (var b = _.y(_.z(Object, "keys").call(Object, a)), c = b.next(); !c.done; c = b.next())
                    if (c = c.value, _.z(c, "startsWith").call(c, "_GESPSK")) try {
                        a.removeItem(c)
                    } catch (d) {}
            oG = new nG;
            this.m.notify()
        }
    };
    var sj = function(a, b, c) {
        pG.call(this, 1049, c);
        this.storage = b;
        TE(this, a)
    };
    _.T(sj, pG);
    sj.prototype.j = function() {
        for (var a = _.y(Ti(this.storage)), b = a.next(); !b.done; b = a.next()) {
            b = b.value;
            var c = Ui().get(b, this.storage).oc;
            if (c) {
                var d = Vi(c);
                if (2 === d || 3 === d) {
                    d = void 0;
                    var e = Ui();
                    c = _.Qi(c, 1);
                    try {
                        this.storage.removeItem("_GESPSK-" + c), delete e.cache[c]
                    } catch (f) {
                        Oi(8, c, null == (d = f) ? void 0 : d.message)
                    }
                    Oi(40, b)
                }
            }
        }
    };
    var aj = function(a, b, c) {
        pG.call(this, 1027, c);
        this.ae = a;
        this.storage = b;
        this.m = W(this);
        this.B = W(this)
    };
    _.T(aj, pG);
    aj.prototype.j = function() {
        var a = Ui().get(this.ae, this.storage).oc;
        a || (a = _.Nj(Bx(this.ae), 3, Date.now()), this.B.G(a.bb(zx(100))));
        this.m.G(a)
    };
    var kj = {};
    var wj = function(a, b) {
        pG.call(this, 1036, b);
        this.m = W(this);
        this.B = X(this, a)
    };
    _.T(wj, pG);
    wj.prototype.j = function() {
        var a = this.B.value;
        0 !== Vi(a) && this.m.G(a)
    };
    var hj = function(a, b, c) {
        pG.call(this, 1046, c);
        this.output = RE(this);
        this.m = W(this);
        this.B = X(this, b);
        TE(this, a)
    };
    _.T(hj, pG);
    hj.prototype.j = function() {
        this.m.G(this.B.value)
    };
    var ej = function(a, b, c) {
        pG.call(this, 1047, c);
        this.collectorFunction = a;
        this.m = W(this);
        this.B = W(this);
        this.I = W(this);
        this.M = X(this, b)
    };
    _.T(ej, pG);
    ej.prototype.j = function() {
        var a = this,
            b = this.M.value,
            c = _.Qi(b, 1);
        Oi(18, c);
        try {
            var d = _.ef();
            this.collectorFunction().then(function(e) {
                Oi(29, c, null, {
                    delta: String(_.ef() - d)
                });
                a.m.G(rn(b, 2, e));
                a.I.Ga(e)
            }).catch(function(e) {
                Oi(28, c, Zi(e));
                a.B.G(b.bb(zx(106)))
            })
        } catch (e) {
            Oi(1, c, Zi(e)), this.B.G(b.bb(zx(107)))
        }
    };
    var cj = function(a, b) {
        pG.call(this, 1028, b);
        this.m = W(this);
        this.B = X(this, a)
    };
    _.T(cj, pG);
    cj.prototype.j = function() {
        var a = this.B.value,
            b = _.Qi(a, 1);
        null != Jc(Gn(a, 3)) || Oi(35, b);
        this.m.G(a)
    };
    var fj = function(a, b, c, d, e) {
        pG.call(this, 1050, e);
        this.M = c;
        this.I = d;
        this.m = W(this);
        this.B = X(this, a);
        this.V = Y(this, b)
    };
    _.T(fj, pG);
    fj.prototype.j = function() {
        var a = this.B.value,
            b = _.Qi(a, 1),
            c = this.V.value;
        if (null == c) Oi(41, b), a.bb(zx(111)), this.m.G(a);
        else if ("string" !== typeof c) Oi(21, b), this.m.G(a.bb(zx(113)));
        else {
            if (c.length > (/^(\d+)$/.test(b) ? this.I : this.M)) {
                var d = {};
                Oi(12, b, null, (d.sl = String(c.length), d));
                b = a.bb(zx(108));
                Ck(b, 2)
            } else c.length || Oi(20, b), Ck(a, 10);
            this.m.G(a)
        }
    };
    var gj = function(a) {
        pG.call(this, 1046, a);
        this.output = RE(this)
    };
    _.T(gj, pG);
    gj.prototype.j = function() {
        var a = this;
        Si().then(function() {
            return a.output.notify()
        })
    };
    var rG = function(a, b, c, d) {
        pG.call(this, 1059, d);
        this.M = b;
        this.I = c;
        this.m = W(this);
        this.V = X(this, a);
        this.B = Y(this, c)
    };
    _.T(rG, pG);
    rG.prototype.j = function() {
        var a = this.B.value;
        if (a) {
            var b = this.V.value,
                c = b.id,
                d = b.collectorFunction,
                e;
            b = null != (e = b.networkCode) ? e : c;
            c = {};
            Oi(42, b, null, (c.ea = String(Number(this.M)), c));
            this.m.Ta(jj(b, d, a, this.I, this.F))
        }
    };
    var sG = function(a, b) {
        pG.call(this, 1057, b);
        this.m = a;
        this.B = W(this);
        this.I = W(this)
    };
    _.T(sG, pG);
    sG.prototype.j = function() {
        if (this.m)
            if ("object" !== typeof this.m) Oi(46, "UNKNOWN_COLLECTOR_ID"), tG(this, "UNKNOWN_COLLECTOR_ID", 112);
            else {
                var a = this.m.id,
                    b = this.m.networkCode;
                a && b && (delete this.m.id, Oi(47, a + ";" + b));
                a = null != b ? b : a;
                "string" !== typeof a ? (b = {}, Oi(37, "INVALID_COLLECTOR_ID", null, (b.ii = JSON.stringify(a), b)), tG(this, "INVALID_COLLECTOR_ID", 102)) : "function" !== typeof this.m.collectorFunction ? (Oi(14, a), tG(this, a, 105)) : (_.E = vf(pA), _.z(_.E, "includes")).call(_.E, a) ? (Oi(22, a), tG(this, a, 104)) : this.I.G(this.m)
            }
        else Oi(39, "UNKNOWN_COLLECTOR_ID"), tG(this, "UNKNOWN_COLLECTOR_ID", 110)
    };
    var tG = function(a, b, c) {
        a.B.G(Bx(b).bb(zx(c)))
    };
    var qj = function(a, b, c, d, e) {
        var f = document;
        f = void 0 === f ? document : f;
        e = void 0 === e ? kj : e;
        this.j = b;
        this.o = c;
        this.ca = f;
        this.B = d;
        this.J = e;
        this.m = [];
        this.K = [];
        this.C = [];
        this.A = 0;
        a = _.y(a);
        for (b = a.next(); !b.done; b = a.next()) this.push(b.value)
    };
    qj.prototype.push = function(a) {
        var b = this;
        this.o || this.B();
        var c = function(f, g) {
            return void uG(b, f, g)
        };
        a = new sG(a, c);
        var d = new bj(a.B, void 0, this.j, c);
        c = new rG(a.I, this.o, this.j, c, this.J);
        var e = new $i;
        tj(e, [a, d, c]);
        ij(e);
        a = c.m.promise;
        this.m.push(a);
        d = _.y(this.K);
        for (c = d.next(); !c.done; c = d.next()) a.then(c.value)
    };
    qj.prototype.addOnSignalResolveCallback = function(a) {
        this.K.push(a);
        for (var b = _.y(this.m), c = b.next(); !c.done; c = b.next()) c.value.then(a)
    };
    qj.prototype.addErrorHandler = function(a) {
        this.C.push(a)
    };
    qj.prototype.clearAllCache = function() {
        var a = this,
            b = this.ca.currentScript instanceof HTMLScriptElement ? this.ca.currentScript.src : "";
        if (1 === this.A) {
            var c = {};
            Oi(49, "", null, (c.url = b, c))
        } else if (c = String(_.qf(null != b ? b : "")), (_.E = vf(oA), _.z(_.E, "includes")).call(_.E, c)) c = {}, Oi(48, "", null, (c.url = b, c));
        else {
            var d = new $i;
            c = new qG(this.j, function(e, f) {
                return void uG(a, e, f)
            });
            N(d, c);
            ij(d);
            this.A = 1;
            setTimeout(function() {
                a.A = 0
            }, 1E3 * _.tf(nA));
            d = {};
            Oi(43, "", null, (d.url = b, d));
            return c.m.promise
        }
    };
    var uG = function(a, b, c) {
            a = _.y(a.C);
            for (var d = a.next(); !d.done; d = a.next()) d = d.value, d(b, c)
        },
        rj = function(a) {
            this.push = function(b) {
                a.push(b)
            };
            this.addOnSignalResolveCallback = function(b) {
                a.addOnSignalResolveCallback(b)
            };
            this.addErrorHandler = function(b) {
                a.addErrorHandler(b)
            };
            this.clearAllCache = function() {
                a.clearAllCache()
            }
        };
    var xj = function(a, b, c) {
        pG.call(this, 1035, c);
        this.B = b;
        this.m = W(this);
        this.I = X(this, a)
    };
    _.T(xj, pG);
    xj.prototype.j = function() {
        var a = this,
            b = this.I.value,
            c = _.Qi(b, 1),
            d = this.B.toString(),
            e = {};
        Oi(30, c, null, (e.url = d, e));
        var f = document.createElement("script");
        f.setAttribute("esp-signal", "true");
        $a(f, this.B);
        var g = function() {
            var h = {};
            Oi(31, c, null, (h.url = d, h));
            a.m.G(b.bb(zx(109)));
            _.Pe(f, "error", g)
        };
        document.head.appendChild(f);
        _.lb(f, "error", g)
    };
    var vj = new _.w.Set;
    var zj = function(a, b) {
        try {
            ub(Wp(a, b))
        } catch (c) {}
    };
    var vG = function(a) {
        this.H = _.A(a)
    };
    _.T(vG, _.C);
    vG.prototype.j = oe([0, xw, xw, xw, xw, Aw]);
    var wG = [.05, .1, .2, .5],
        xG = [0, .5, 1],
        yG = function(a) {
            a = mj(a);
            if (!a) return -1;
            try {
                var b = QD(a.document);
                var c = new _.uh(b.clientWidth, b.clientHeight)
            } catch (d) {
                c = new _.uh(-12245933, -12245933)
            }
            return -12245933 == c.width || -12245933 == c.height ? -1 : c.width * c.height
        },
        zG = function(a, b) {
            return 0 >= a || 0 >= b ? [] : wG.map(function(c) {
                return Math.min(a / b * c, 1)
            })
        },
        BG = function(a) {
            this.K = a.D;
            this.o = a.Lb;
            this.J = a.timer;
            this.A = null;
            this.C = a.jb;
            this.j = AG(this);
            this.m = a.Ak || !1
        },
        CG = function() {
            var a;
            return !!window.IntersectionObserver && Jy(null == (a = window.performance) ? void 0 : a.now)
        };
    BG.prototype.getSlotId = function() {
        return this.A
    };
    var EG = function(a, b) {
            if (a.j) {
                if (null != a.A) {
                    try {
                        DG(a, Math.round(performance.now()), 0, 0, 0, !1)
                    } catch (c) {
                        a.C && a.C(c)
                    }
                    a.j && a.j.unobserve(a.o)
                }
                a.A = b;
                a.j.observe(a.o)
            }
        },
        AG = function(a) {
            if (!_.r.IntersectionObserver) return null;
            var b = a.o.offsetWidth * a.o.offsetHeight,
                c = yG(a.K);
            b = [].concat(_.Ee(xG), _.Ee(zG(c, b)));
            oa(b);
            return new _.r.IntersectionObserver(function(d) {
                try {
                    for (var e = yG(a.K), f = _.y(d), g = f.next(); !g.done; g = f.next()) {
                        var h = g.value;
                        a.m && DG(a, Math.round(h.time), h.boundingClientRect.width * h.boundingClientRect.height, h.intersectionRect.width * h.intersectionRect.height, e, h.isIntersecting)
                    }
                } catch (k) {
                    a.C && a.C(k)
                }
            }, {
                threshold: b
            })
        },
        DG = function(a, b, c, d, e, f) {
            if (null == a.A) throw Error("Not Attached.");
            var g = new vG;
            c = _.Nj(g, 1, c);
            d = _.Nj(c, 2, d);
            e = _.Nj(d, 3, e);
            b = _.Nj(e, 4, b);
            f = _.Wi(b, 5, f);
            f = Db(f.j(), 4);
            ED(a.J, "1", 10, f, void 0, a.A)
        };
    var FG = function(a, b) {
            this.j = a;
            this.A = b
        },
        GG = function(a) {
            if (a.j.frames.google_ads_top_frame) return !0;
            var b = Ly(a.j);
            b = b && b.contentWindow;
            if (!b) return !1;
            b.addEventListener("message", function(c) {
                var d = c.ports;
                "__goog_top_url_req" === c.data.msgType && d.length && d[0].postMessage({
                    msgType: "__goog_top_url_resp",
                    topUrl: a.A
                })
            }, !1);
            return !0
        };
    var Mj = function(a) {
        this.H = _.A(a)
    };
    _.T(Mj, _.C);
    var Sj = pe(Mj),
        Pj = [1, 3];
    var Re = {
        fm: 0,
        am: 1,
        bm: 9,
        Xl: 2,
        Yl: 3,
        dm: 5,
        cm: 7,
        Zl: 10
    };
    var HG = _.Ft(["https://securepubads.g.doubleclick.net/static/topics/topics_frame.html"]),
        Gj = _.te(HG);
    var IG = function() {
            this.id = "goog_" + dy++
        },
        JG = function(a) {
            _.U.call(this);
            this.context = a;
            this.o = new _.w.Map
        };
    _.T(JG, _.U);
    JG.prototype.A = function() {
        _.U.prototype.A.call(this);
        this.o.clear()
    };
    JG.prototype.listen = function(a, b) {
        var c = this;
        if (this.K) return function() {};
        var d = "string" === typeof a ? a : a.id,
            e, f, g = null != (f = null == (e = this.o.get(d)) ? void 0 : e.add(b)) ? f : new _.w.Set([b]);
        this.o.set(d, g);
        return function() {
            return void KG(c, a, b)
        }
    };
    var MG = function(a) {
            var b = LG;
            var c = void 0 === c ? function() {
                return !0
            } : c;
            return new _.w.Promise(function(d) {
                var e = a.listen(b, function(f) {
                    c(f) && (e(), d(f))
                })
            })
        },
        KG = function(a, b, c) {
            var d;
            return !(null == (d = a.o.get("string" === typeof b ? b : b.id)) || !d.delete(c))
        },
        Xq = function(a, b, c, d) {
            var e, f, g, h, k, l, m, n;
            _.nb(function(p) {
                e = "string" === typeof b ? b : b.id;
                f = a.o.get(e);
                if (null == (g = f) || !g.size) return p.return();
                h = "function" === typeof window.CustomEvent ? new CustomEvent(e, {
                    detail: d,
                    bubbles: !0,
                    cancelable: !0
                }) : function() {
                    var t = document.createEvent("CustomEvent");
                    t.initCustomEvent(e, !0, !0, d);
                    return t
                }();
                k = [];
                l = _.y(f);
                m = l.next();
                for (n = {}; !m.done; n = {
                        te: n.te
                    }, m = l.next()) n.te = m.value, k.push(new _.w.Promise(function(t) {
                    return function(u) {
                        return _.nb(function(v) {
                            if (1 == v.j) return _.ob(v, 0, 2);
                            Gg(a.context, c, function() {
                                a.o.has(e) && f.has(t.te) && (0, t.te)(h)
                            }, !0);
                            u();
                            v.j = 0
                        })
                    }
                }(n)));
                return _.ob(p, _.w.Promise.all(k), 0)
            })
        },
        NG = new IG,
        OG = new IG,
        Yq = new IG,
        PG = new IG,
        $q = new IG,
        QG = new IG,
        RG = new IG,
        Xo = new IG,
        LG = new IG,
        SG = new IG;
    var TG = function() {
            this.data = void 0;
            this.status = 0;
            this.j = []
        },
        UG = function(a) {
            a.data = void 0;
            a.status = 1
        };
    TG.prototype.Zd = function() {
        this.j = []
    };
    var VG, ZG, bH, Ks, cH, YG, XG, WG, dH;
    VG = function() {
        this.j = new _.w.Map;
        this.m = 0;
        this.A = new _.w.Map;
        this.de = null;
        this.C = this.o = this.T = this.J = 0;
        this.kj = null;
        this.B = new TG;
        this.K = new TG
    };
    ZG = function(a, b) {
        a.j.get(b) || (a.j.set(b, {
            nc: !0,
            Wf: "",
            Qc: "",
            Kh: 0,
            Tf: [],
            Uf: [],
            ic: !1
        }), _.Vo(b, function() {
            a.j.delete(b);
            WG(a, b)
        }), b.listen(OG, function(c) {
            c = c.detail;
            var d = a.j.get(b);
            d.Wf = _.Qi(c, 33) || "";
            d.ic = !0;
            XG(a, b, function() {
                return void(d.Wf = "")
            });
            YG(a, b, function() {
                return void(d.ic = !1)
            })
        }))
    };
    _.Zq = function(a, b) {
        var c;
        return null == (c = a.j.get(b)) ? void 0 : c.nc
    };
    _.$G = function(a, b) {
        if (a = a.j.get(b)) a.nc = !1
    };
    _.aH = function(a, b) {
        if (a = a.j.get(b)) a.nc = !0
    };
    bH = function(a, b) {
        if (!b.length) return [];
        var c = og(b[0].getAdUnitPath());
        b.every(function(g) {
            return og(g.getAdUnitPath()) === c
        });
        var d = [];
        a = _.y(a.j);
        for (var e = a.next(); !e.done; e = a.next()) {
            var f = _.y(e.value);
            e = f.next().value;
            (f = f.next().value.Wf) && og(e.getAdUnitPath()) === c && !_.z(b, "includes").call(b, e) && d.push(f)
        }
        return d
    };
    Ks = function(a, b) {
        var c, d;
        return null != (d = null == (c = a.j.get(b)) ? void 0 : c.Qc) ? d : ""
    };
    cH = function(a, b) {
        return (a = a.j.get(b)) ? a.Kh - 1 : 0
    };
    YG = function(a, b, c) {
        (a = a.j.get(b)) && a.Tf.push(c)
    };
    XG = function(a, b, c) {
        (a = a.j.get(b)) && a.Uf.push(c)
    };
    WG = function(a, b) {
        if (a = a.j.get(b))
            for (b = a.Uf.slice(), a.Uf.length = 0, a = _.y(b), b = a.next(); !b.done; b = a.next()) b = b.value, b()
    };
    dH = function(a, b) {
        if (a = a.j.get(b))
            for (b = a.Tf.slice(), a.Tf.length = 0, a = _.y(b), b = a.next(); !b.done; b = a.next()) b = b.value, b()
    };
    VG.prototype.ic = function(a) {
        var b, c;
        return null != (c = null == (b = this.j.get(a)) ? void 0 : b.ic) ? c : !1
    };
    var eH = function(a, b, c) {
            if (a = a.j.get(b)) a.Jh = c
        },
        fH = function(a, b) {
            if (a = a.j.get(b)) {
                var c;
                null == (c = a.Jh) || c.wa();
                delete a.Jh
            }
        };
    var gk = new _.w.Map,
        fk = new _.w.Map;
    var ik = function(a, b) {
        this.messageId = a;
        this.messageArgs = b
    };
    ik.prototype.getMessageId = function() {
        return this.messageId
    };
    ik.prototype.getMessageArgs = function() {
        return this.messageArgs
    };
    var gH = P(2),
        hH = P(3),
        iH = P(4),
        jH = P(5),
        kH = P(6),
        lH = P(12),
        mH = P(14),
        nH = P(16),
        Dk = P(19),
        oH = P(20),
        pH = P(23),
        qH = P(26),
        rH = P(28),
        sH = P(149),
        tH = P(30),
        uH = P(31),
        vH = P(34),
        wH = P(35),
        Rk = P(36),
        sr = P(38),
        xH = P(40),
        yH = P(48),
        zH = P(50),
        AH = P(60),
        BH = P(63),
        CH = P(64),
        DH = P(66),
        EH = P(68),
        FH = P(69),
        GH = P(70),
        HH = P(71),
        IH = P(78),
        JH = P(80),
        tl = P(82),
        Ek = P(84),
        KH = P(85),
        LH = P(87),
        wk = P(88),
        MH = P(92),
        NH = P(93),
        OH = P(99),
        Gk = P(103),
        rl = P(104),
        PH = P(105),
        ll = P(106),
        ml = P(107),
        sl = P(108),
        QH = P(113),
        RH = P(114),
        SH = P(115),
        TH = P(117),
        UH = P(118),
        VH = P(120),
        WH = P(119),
        cl = P(121),
        XH = P(122),
        YH = P(123),
        Hp = P(125),
        ZH = P(126),
        $H = P(127),
        aI = P(144),
        sp = P(129),
        xp = P(132),
        bI = P(134),
        cI = P(135),
        dI = P(136),
        eI = P(137),
        fI = P(138),
        gI = P(139),
        hI = P(140),
        Yp = P(142),
        iI = P(143),
        jI = P(145),
        kI = P(147),
        zr = P(148),
        lI = P(150),
        mI = P(152),
        nI = P(153),
        oI = P(154),
        bq = P(155);
    var pI = function(a, b, c) {
        var d = this;
        this.addEventListener = J(a, 86, function(e, f) {
            if ("function" !== typeof f) return Q(b, kk("Service.addEventListener", [e, f])), d;
            var g = lk(e);
            if (!g) return Q(b, NH(e)), d;
            c.addEventListener(g, f);
            return d
        });
        this.removeEventListener = J(a, 904, function(e, f) {
            var g = lk(e);
            "function" === typeof f && g ? c.removeEventListener(g, f) : Q(b, kk("Service.removeEventListener", [e, f]))
        });
        this.getSlots = J(a, 573, function() {
            return c.j.map(function(e) {
                return e.j
            })
        });
        this.getSlotIdMap = J(a, 574, function() {
            for (var e = {}, f = _.y(c.j), g = f.next(); !g.done; g = f.next()) g = g.value, e[g.toString()] = g.j;
            return e
        });
        this.getName = J(a, 575, function() {
            return c.getName()
        })
    };
    var mk = function(a, b, c) {
        pI.call(this, a, b, c);
        this.setRefreshUnfilledSlots = J(a, 59, function(d) {
            c.setRefreshUnfilledSlots(d)
        });
        this.notifyUnfilledSlots = J(a, 69, function(d) {
            c.nc && qI(c, rI(c, d))
        });
        this.refreshAllSlots = J(a, 60, function() {
            c.nc && qI(c)
        });
        this.setVideoSession = J(a, 61, function(d, e, f) {
            c.J = e;
            c.F = f;
            "number" === typeof d && (e = Mh().j, _.xh(e, 29, null == d ? d : Lc(d)))
        });
        this.getDisplayAdsCorrelator = J(a, 62, function() {
            return String(jw(Mh().j, 26))
        });
        this.getVideoStreamCorrelator = J(a, 63, function() {
            var d = Mh().j;
            d = Mq(d, 29);
            return null != d ? d : 0
        });
        this.isSlotAPersistentRoadblock = J(a, 64, function(d) {
            var e = _.z(c.j, "find").call(c.j, function(f) {
                return f.j === d
            });
            return !!e && sI(c, e)
        });
        this.onImplementationLoaded = J(a, 65, function() {
            c.X.info(yH("GPT CompanionAds"))
        });
        this.slotRenderEnded = J(a, 67, function(d, e, f) {
            var g = _.z(c.j, "find").call(c.j, function(h) {
                return h.j === d
            });
            return g && tI(c, g, e, f)
        })
    };
    _.T(mk, pI);
    var ok = function(a, b, c) {
        pI.call(this, a, b, c);
        this.setContent = J(a, 72, function(d) {
            var e = _.z(c.j, "find").call(c.j, function(f) {
                return f.j === d
            });
            Q(b, aI(), e)
        })
    };
    _.T(ok, pI);
    var Ik = function(a, b, c, d) {
        var e = this,
            f = c.getSlotId(),
            g = Mh().j,
            h = AF(Mh(), f.getDomId());
        this.set = J(a, 83, function(k, l) {
            "page_url" === k && l && (k = [tk(uk(new vk, k), [String(l)])], _.Fk(h, 3, k));
            return e
        });
        this.get = J(a, 84, function(k) {
            if ("page_url" !== k) return null;
            var l, m;
            return null != (m = null == (l = (_.E = h.Ia(), _.z(_.E, "find")).call(_.E, function(n) {
                return _.Qi(n, 1) === k
            })) ? void 0 : _.zk(l, 2)[0]) ? m : null
        });
        this.setClickUrl = J(a, 79, function(k) {
            qk(k, h, f, b);
            return e
        });
        this.setTargeting = J(a, 81, function(k, l) {
            xk(k, l, f, h, b);
            return e
        });
        this.updateTargetingFromMap = J(a, 85, function(k) {
            yk(k, f, h, b);
            return e
        });
        this.display = J(a, 78, function() {
            uI(d, f, yh(g, Mh().A))
        });
        this.setTagForChildDirectedTreatment = J(a, 80, function(k) {
            if (0 === k || 1 === k) {
                var l = at(g) || new vF;
                l.setTagForChildDirectedTreatment(k);
                _.tg(g, 25, l)
            }
            return e
        });
        this.setForceSafeFrame = J(a, 567, function(k) {
            "boolean" === typeof k ? _.Wi(h, 12, k) : Q(b, kk("PassbackSlot.setForceSafeFrame", [String(k)]), f);
            return e
        });
        this.setTagForUnderAgeOfConsent = J(a, 448, function(k) {
            if (0 === k || 1 === k) {
                var l = at(g) || new vF;
                l.setTagForUnderAgeOfConsent(k);
                _.tg(g, 25, l)
            }
            return e
        })
    };
    var hp = {
        Wl: 0,
        Tl: 1,
        Ul: 2,
        Vl: 3
    };
    var Lk = {
            REWARDED: 4,
            TOP_ANCHOR: 2,
            BOTTOM_ANCHOR: 3,
            INTERSTITIAL: 5,
            GAME_MANUAL_INTERSTITIAL: 7
        },
        Nk = {
            IAB_AUDIENCE_1_1: 1,
            IAB_CONTENT_2_1: 2,
            IAB_CONTENT_2_2: 3
        },
        Mk = {
            PURCHASED: 1,
            ORGANIC: 2
        };
    var Pk = function() {
        var a = {};
        return a.adsense_channel_ids = "channel", a.adsense_ad_types = "ad_type", a.adsense_ad_format = "format", a.adsense_background_color = "color_bg", a.adsense_border_color = "color_border", a.adsense_link_color = "color_link", a.adsense_text_color = "color_text", a.adsense_url_color = "color_url", a.page_url = "url", a.adsense_allow_expandable_ads = "ea", a.adsense_encoding = "oe", a.adsense_family_safe = "adsafe", a.adsense_flash_version = "flash", a.adsense_font_face = "f", a.adsense_hints = "hints", a.adsense_keyword_type = "kw_type", a.adsense_keywords = "kw", a.adsense_test_mode = "adtest", a.alternate_ad_iframe_color = "alt_color", a.alternate_ad_url = "alternate_ad_url", a.demographic_age = "cust_age", a.demographic_gender = "cust_gender", a.document_language = "hl", a
    };
    var vI = "",
        Xk = null;
    var Cl = function(a, b, c) {
        JG.call(this, a);
        this.slotId = b;
        this.j = c
    };
    _.T(Cl, JG);
    Cl.prototype.getSlotId = function() {
        return this.slotId
    };
    var Te = function(a, b, c, d) {
        JG.call(this, a);
        this.adUnitPath = b;
        this.Lb = d;
        this.j = null;
        this.id = this.adUnitPath + "_" + c
    };
    _.T(Te, JG);
    _.q = Te.prototype;
    _.q.getId = function() {
        return this.id
    };
    _.q.getAdUnitPath = function() {
        return this.adUnitPath
    };
    _.q.getName = function() {
        return this.adUnitPath
    };
    _.q.toString = function() {
        return this.getId()
    };
    _.q.getDomId = function() {
        return this.Lb
    };
    var wI = function(a, b) {
        a.j = b
    };
    var vl = /^(?:https?:)?\/\/(?:www\.googletagservices\.com|securepubads\.g\.doubleclick\.net|(pagead2\.googlesyndication\.com))(\/tag\/js\/gpt(?:_[a-z]+)*\.js|\/pagead\/managed\/js\/gpt\.js)/;
    var zl = _.qu(function() {
            return void Oy("google_DisableInitialLoad is deprecated and will be removed. Please use googletag.pubads().isInitialLoadDisabled() instead to check if initial load has been disabled.")
        }),
        xI = _.qu(function() {
            return void Oy("googletag.pubads().setCookieOptions() has been removed, and no longer has any effect. Consider migrating to Limited Ads.")
        }),
        yI = _.qu(function() {
            return void Oy("The following functions are deprecated: googletag.pubads().setTagForChildDirectedTreatment(), googletag.pubads().clearTagForChildDirectedTreatment(), googletag.pubads().setRequestNonPersonalizedAds(), and googletag.pubads().setTagForUnderAgeOfConsent(). Please use googletag.pubads().setPrivacySettings() instead.")
        }),
        El = function(a, b, c, d, e) {
            pI.call(this, a, b, c);
            var f = this,
                g = Mh().j,
                h = Mh().A,
                k = !1;
            this.setTargeting = J(a, 1, function(l, m) {
                ol({
                    key: l,
                    value: m,
                    ya: g,
                    serviceName: c.getName(),
                    zk: c.enabled,
                    Wa: e,
                    X: b,
                    context: a
                });
                return f
            });
            this.clearTargeting = J(a, 2, function(l) {
                ul(l, g, c.getName(), b);
                return f
            });
            this.getTargeting = J(a, 38, function(l) {
                return pl(l, g, b)
            });
            this.getTargetingKeys = J(a, 39, function() {
                return ql(g)
            });
            this.setCategoryExclusion = J(a, 3, function(l) {
                "string" !== typeof l || rk(l) ? Q(b, kk("PubAdsService.setCategoryExclusion", [l])) : ((_.E = _.zk(g, 3), _.z(_.E, "includes")).call(_.E, l) || uw(g, 3, l), b.info(KH(l)));
                return f
            });
            this.clearCategoryExclusions = J(a, 4, function() {
                Ck(g, 3);
                b.info(LH());
                return f
            });
            this.disableInitialLoad = J(a, 5, function() {
                _.Wi(g, 4, !0);
                k || (k = !0, Al())
            });
            this.enableSingleRequest = J(a, 6, function() {
                if (c.enabled && !_.G(g, 6)) return Q(b, AH("PubAdsService.enableSingleRequest")), !1;
                b.info(BH("single request"));
                _.Wi(g, 6, !0);
                return !0
            });
            this.enableAsyncRendering = J(a, 7, function() {
                return !0
            });
            this.enableSyncRendering = J(a, 8, function() {
                Oy("GPT synchronous rendering is no longer supported, ads will be requested and rendered asynchronously. See https://support.google.com/admanager/answer/9212594 for more details.");
                return !1
            });
            this.enableLazyLoad = J(a, 485, function(l) {
                var m = new ms;
                m = _.tw(m, 1, 800);
                m = _.tw(m, 2, 400);
                m = _.xh(m, 3, _.qc(3));
                if (_.la(l)) {
                    var n = l.fetchMarginPercent;
                    "number" === typeof n && (0 <= n ? _.tw(m, 1, n) : -1 === n && Ck(m, 1));
                    n = l.renderMarginPercent;
                    "number" === typeof n && (0 <= n ? _.tw(m, 2, n) : -1 === n && Ck(m, 2));
                    l = l.mobileScaling;
                    "number" === typeof l && (0 < l ? _.xh(m, 3, _.qc(l)) : -1 === l && _.xh(m, 3, _.qc(1)))
                }
                window.IntersectionObserver || !Bo(m, 1) && !Bo(m, 2) ? _.tg(g, 5, m) : Q(b, lI())
            });
            this.setCentering = J(a, 9, function(l) {
                l = !!l;
                b.info(CH("centering", String(l)));
                _.Wi(g, 15, l)
            });
            this.definePassback = J(a, 10, function(l, m) {
                return (l = Dl(a, b, c, l, m, d)) && l.Ch
            });
            this.refresh = J(a, 11, function() {
                var l = _.jb.apply(0, arguments),
                    m = _.y(l),
                    n = m.next().value;
                m = m.next().value;
                m = void 0 === m ? {} : m;
                n && !Array.isArray(n) || !_.la(m) || m.changeCorrelator && "boolean" !== typeof m.changeCorrelator ? Q(b, kk("PubAdsService.refresh", l)) : (m && !1 === m.changeCorrelator || g.setCorrelator(Sy()), n = n ? yl(n, c) : c.j, c.refresh(yh(g, h), n) || Q(b, kk("PubAdsService.refresh", l)))
            });
            this.enableVideoAds = J(a, 12, function() {
                _.Wi(g, 21, !0);
                zI(c, g)
            });
            this.setVideoContent = J(a, 13, function(l, m) {
                AI(c, l, m, g)
            });
            this.collapseEmptyDivs = J(a, 14, function(l) {
                l = void 0 === l ? !1 : l;
                l = void 0 === l ? !1 : l;
                _.Wi(g, 11, !0);
                l = !!l;
                _.Wi(g, 10, l);
                b.info(IH(String(l)));
                return !!_.G(g, 11)
            });
            this.clear = J(a, 15, function(l) {
                if (Array.isArray(l)) return BI(c, g, h, yl(l, c));
                if (void 0 === l) return BI(c, g, h, c.j);
                Q(b, kk("PubAdsService.clear", [l]));
                return !1
            });
            this.setLocation = J(a, 16, function(l) {
                "string" !== typeof l ? Q(b, kk("PubAdsService.setLocation", [l])) : rn(g, 8, l);
                return f
            });
            this.setCookieOptions = J(a, 17, function() {
                xI();
                return f
            });
            this.setTagForChildDirectedTreatment = J(a, 18, function(l) {
                yI();
                if (1 !== l && 0 !== l) return Q(b, XH("PubadsService.setTagForChildDirectedTreatment", dl(l), "0,1")), f;
                var m = at(g) || new vF;
                m.setTagForChildDirectedTreatment(l);
                _.tg(g, 25, m);
                return f
            });
            this.clearTagForChildDirectedTreatment = J(a, 19, function() {
                yI();
                var l = at(g);
                if (!l) return f;
                l.clearTagForChildDirectedTreatment();
                _.tg(g, 25, l);
                return f
            });
            this.setPublisherProvidedId = J(a, 20, function(l) {
                l = String(l);
                b.info(CH("PPID", l));
                rn(g, 16, l);
                return f
            });
            this.set = J(a, 21, function(l, m) {
                Sk(l, m, g, c.getName(), b);
                return f
            });
            this.get = J(a, 22, function(l) {
                return Tk(l, g, b)
            });
            this.getAttributeKeys = J(a, 23, function() {
                return Uk(g)
            });
            this.display = J(a, 24, function(l, m, n, p) {
                return void c.display(l, m, d, n, p)
            });
            this.updateCorrelator = J(a, 25, function() {
                Oy(xl("update"));
                Q(b, SH());
                g.setCorrelator(Sy());
                return f
            });
            this.defineOutOfPagePassback = J(a, 35, function(l) {
                l = Dl(a, b, c, l, [1, 1], d);
                if (!l) return null;
                Hn(l.ya, 15, 1);
                return l.Ch
            });
            this.setForceSafeFrame = J(a, 36, function(l) {
                "boolean" !== typeof l ? Q(b, kk("PubAdsService.setForceSafeFrame", [dl(l)])) : _.Wi(g, 13, l);
                return f
            });
            this.setSafeFrameConfig = J(a, 37, function(l) {
                var m = el(b, l);
                m ? _.tg(g, 18, m) : Q(b, kk("PubAdsService.setSafeFrameConfig", [l]));
                return f
            });
            this.setRequestNonPersonalizedAds = J(a, 445, function(l) {
                yI();
                if (0 !== l && 1 !== l) return Q(b, XH("PubAdsService.setRequestNonPersonalizedAds", dl(l), "0,1")), f;
                var m = at(g) || new vF;
                _.Wi(m, 8, !!l);
                _.tg(g, 25, m);
                return f
            });
            this.setTagForUnderAgeOfConsent = J(a, 447, function(l) {
                l = void 0 === l ? 2 : l;
                yI();
                if (2 !== l && 0 !== l && 1 !== l) return Q(b, XH("PubadsService.setTagForUnderAgeOfConsent", dl(l), "2,0,1")), f;
                var m = at(g) || new vF;
                m.setTagForUnderAgeOfConsent(l);
                _.tg(g, 25, m);
                return f
            });
            this.getCorrelator = J(a, 27, function() {
                return String(jw(g, 26))
            });
            this.getTagSessionCorrelator = J(a, 631, function() {
                return _.Kg(_.r)
            });
            this.getVideoContent = J(a, 30, function() {
                return CI(c, g)
            });
            this.getVersion = J(a, 568, function() {
                return a.kc ? String(a.kc) : a.vb
            });
            this.forceExperiment = J(a, 569, function(l) {
                return void c.forceExperiment(l)
            });
            this.setCorrelator = J(a, 28, function(l) {
                Oy(xl("set"));
                Q(b, RH());
                if (nh(window)) return f;
                if (!nm(l)) return Q(b, kk("PubadsService.setCorrelator", [dl(l)])), f;
                l = g.setCorrelator(l);
                _.Wi(l, 27, !0);
                return f
            });
            this.markAsAmp = J(a, 570, function() {
                window.console && window.console.warn && window.console.warn("googletag.pubads().markAsAmp() is deprecated and ignored.")
            });
            this.isSRA = J(a, 571, function() {
                return !!_.G(g, 6)
            });
            this.setImaContent = J(a, 328, function(l, m) {
                null != _.Qi(g, 22) ? AI(c, l, m, g) : (_.Wi(g, 21, !0), zI(c, g), "string" === typeof l && rn(g, 19, l), "string" === typeof m && rn(g, 20, m))
            });
            this.getImaContent = J(a, 329, function() {
                return null != _.Qi(g, 22) ? CI(c, g) : c.enabled ? {
                    vid: _.R(g, 19) || "",
                    cmsid: _.R(g, 20) || ""
                } : null
            });
            this.isInitialLoadDisabled = J(a, 572, function() {
                return !!_.G(g, 4)
            });
            this.setPrivacySettings = J(a, 648, function(l) {
                if (!_.la(l)) return Q(b, kk("PubAdsService.setPrivacySettings", [l])), f;
                var m = l.restrictDataProcessing,
                    n = l.childDirectedTreatment,
                    p = l.underAgeOfConsent,
                    t = l.limitedAds,
                    u = l.nonPersonalizedAds,
                    v = l.userOptedOutOfPersonalization,
                    x = l.trafficSource,
                    F, D = null != (F = at(g)) ? F : new vF;
                "boolean" === typeof u ? _.Wi(D, 8, u) : void 0 !== u && Q(b, cl("PubAdsService.setPrivacySettings", dl(l), "nonPersonalizedAds", dl(u)));
                "boolean" === typeof v ? _.Wi(D, 13, v) : void 0 !== v && Q(b, cl("PubAdsService.setPrivacySettings", dl(l), "userOptedOutOfPersonalization", dl(v)));
                "boolean" === typeof m ? _.Wi(D, 1, m) : void 0 !== m && Q(b, cl("PubAdsService.setPrivacySettings", dl(l), "restrictDataProcessing", dl(m)));
                "boolean" === typeof t ? (m = wl(), t && !_.G(D, 9) && a.Kd && (u = a.Sb, v = ug(a), F = new Sz, F = _.Mp(F, 1, !0), F = _.Mp(F, 2, m), v = _.wg(v, 11, xg, F), Ge(u, v)), m ? _.Wi(D, 9, t) : t && Q(b, kI())) : void 0 !== t && Q(b, cl("PubAdsService.setPrivacySettings", dl(l), "limitedAds", dl(t)));
                void 0 !== p && (null === p ? D.setTagForUnderAgeOfConsent(2) : !1 === p ? D.setTagForUnderAgeOfConsent(0) : !0 === p ? D.setTagForUnderAgeOfConsent(1) : Q(b, cl("PubAdsService.setPrivacySettings", dl(l), "underAgeOfConsent", dl(p))));
                void 0 !== n && (null === n ? D.clearTagForChildDirectedTreatment() : !1 === n ? D.setTagForChildDirectedTreatment(0) : !0 === n ? D.setTagForChildDirectedTreatment(1) : Q(b, cl("PubAdsService.setPrivacySettings", dl(l), "childDirectedTreatment", dl(n))));
                void 0 !== x && (null === x ? Ck(D, 10) : (_.E = _.z(Object, "values").call(Object, Mk), _.z(_.E, "includes")).call(_.E, x) ? Hn(D, 10, x) : Q(b, cl("PubAdsService.setPrivacySettings", dl(l), "trafficSource", dl(x))));
                _.tg(g, 25, D);
                return f
            })
        };
    _.T(El, pI);
    var DI = function(a, b) {
        this.getId = J(a, 593, function() {
            return b.getId()
        });
        this.getAdUnitPath = J(a, 594, function() {
            return b.getAdUnitPath()
        });
        this.getName = J(a, 595, function() {
            return b.getName()
        });
        this.toString = J(a, 596, function() {
            return b.toString()
        });
        this.getDomId = J(a, 597, function() {
            return b.getDomId()
        })
    };
    var EI = function() {
            this.sourceAgnosticLineItemId = this.sourceAgnosticCreativeId = this.lineItemId = this.creativeId = this.campaignId = this.advertiserId = null;
            this.isBackfill = !1;
            this.encryptedTroubleshootingInfo = this.creativeTemplateId = this.companyIds = this.yieldGroupIds = null
        },
        FI = function(a, b) {
            a.advertiserId = b
        },
        GI = function(a, b) {
            a.campaignId = b
        },
        HI = function(a, b) {
            a.yieldGroupIds = b
        },
        II = function(a, b) {
            a.companyIds = b
        };
    var dh = function(a) {
        this.H = _.A(a)
    };
    _.T(dh, _.C);
    dh.ia = [2];
    var JI = function(a) {
        this.H = _.A(a)
    };
    _.T(JI, _.C);
    JI.prototype.getAdUnitPath = function() {
        return _.R(this, 1)
    };
    JI.prototype.getDomId = function() {
        return _.R(this, 2)
    };
    var KI = function(a, b) {
        rn(a, 2, b)
    };
    JI.prototype.Ia = function() {
        return bh(this, vk, 3)
    };
    JI.prototype.getServices = function(a) {
        return mw(this, 4, a)
    };
    var LI = function(a, b) {
        _.Fk(a, 5, b)
    };
    JI.prototype.getClickUrl = function() {
        return _.R(this, 7)
    };
    JI.prototype.setClickUrl = function(a) {
        return rn(this, 7, a)
    };
    JI.prototype.getCategoryExclusions = function(a) {
        return mw(this, 8, a)
    };
    var sk = function(a) {
        return bh(a, vk, 9)
    };
    JI.prototype.hc = function() {
        return _.Zg(this, al, 13)
    };
    var Ko = function(a) {
        return _.Xj(a, 15, 0)
    };
    JI.ia = [3, 4, 5, 6, 8, 9, 27];
    var MI = function(a, b) {
        this.width = a;
        this.height = b
    };
    MI.prototype.getWidth = function() {
        return this.width
    };
    MI.prototype.getHeight = function() {
        return this.height
    };
    var sm = function(a, b, c) {
        var d = this,
            e = AF(Mh(), c.getDomId()),
            f = "",
            g = null,
            h = function() {
                return ""
            },
            k = "",
            l = !1;
        _.Vo(c, function() {
            e = new JI;
            f = "";
            g = null;
            h = function() {
                return ""
            };
            k = ""
        });
        c.listen(Yq, function(n) {
            var p = n.detail;
            n = p.Lg;
            p = p.isBackfill;
            n && (f = n, l = p)
        });
        this.set = J(a, 40, function(n, p) {
            Gl(n, p, c, e, b);
            return d
        });
        this.get = J(a, 41, function(n) {
            return Hl(n, c, e, b)
        });
        this.getAttributeKeys = J(a, 42, function() {
            return Il(e)
        });
        this.addService = J(a, 43, function(n) {
            n = gk.get(n);
            if (!n) return Q(b, kk("Slot.addService", [n]), c), d;
            var p = n.getName();
            if ((_.E = _.zk(e, 4), _.z(_.E, "includes")).call(_.E, p)) return b.info(lH(p, c.toString()), c), d;
            n.slotAdded(c, e);
            return d
        });
        this.defineSizeMapping = J(a, 44, function(n) {
            try {
                var p = e;
                if (!Array.isArray(n)) throw new om("Size mapping must be an array");
                var t = n.map(pm);
                _.Fk(p, 6, t)
            } catch (u) {
                n = u, Eg(a, 44, n), Oy("Incorrect usage of googletag.Slot defineSizeMapping: " + n.message)
            }
            return d
        });
        this.setClickUrl = J(a, 45, function(n) {
            qk(n, e, c, b);
            return d
        });
        this.setCategoryExclusion = J(a, 46, function(n) {
            var p = e;
            "string" !== typeof n || rk(n) ? Q(b, kk("Slot.setCategoryExclusion", [n]), c) : ((_.E = _.zk(p, 8), _.z(_.E, "includes")).call(_.E, n) || uw(p, 8, n), b.info(mH(n), c));
            return d
        });
        this.clearCategoryExclusions = J(a, 47, function() {
            Ck(e, 8);
            b.info(nH(), c);
            return d
        });
        this.getCategoryExclusions = J(a, 48, function() {
            return _.zk(e, 8).slice()
        });
        this.setTargeting = J(a, 49, function(n, p) {
            xk(n, p, c, e, b);
            return d
        });
        this.updateTargetingFromMap = J(a, 649, function(n) {
            yk(n, c, e, b);
            return d
        });
        this.clearTargeting = J(a, 50, function(n) {
            Hk(n, c, e, b);
            return d
        });
        this.getTargeting = J(a, 51, function(n) {
            return Ak(n, c, e, b)
        });
        this.getTargetingKeys = J(a, 52, function() {
            return Bk(e)
        });
        this.setCollapseEmptyDiv = J(a, 53, function(n, p) {
            var t = e;
            p = void 0 === p ? !1 : p;
            p = void 0 === p ? !1 : p;
            "boolean" !== typeof n || "boolean" !== typeof p ? Q(b, kk("Slot.setCollapseEmptyDiv", [n, p]), c) : (t = _.Wi(t, 10, n), _.Wi(t, 11, n && p), p && !n && Q(b, oH(c.toString()), c));
            return d
        });
        this.getAdUnitPath = J(a, 54, function() {
            return c.getAdUnitPath()
        });
        this.getSlotElementId = J(a, 598, function() {
            return c.getDomId()
        });
        this.setForceSafeFrame = J(a, 55, function(n) {
            var p = e;
            "boolean" !== typeof n ? Q(b, kk("Slot.setForceSafeFrame", [String(n)]), c) : _.Wi(p, 12, n);
            return d
        });
        this.setSafeFrameConfig = J(a, 56, function(n) {
            var p = e,
                t = el(b, n);
            t ? _.tg(p, 13, t) : b.error(kk("Slot.setSafeFrameConfig", [n]), c);
            return d
        });
        c.listen(OG, function(n) {
            n = n.detail;
            if (fl(n, 8)) g = null;
            else {
                g = new EI;
                var p = !!fl(n, 9);
                g.isBackfill = p;
                var t = Bd(n, 15, Jc),
                    u = Bd(n, 16, Jc);
                t.length && u.length && (g.sourceAgnosticCreativeId = t[0], g.sourceAgnosticLineItemId = u[0], p || (g.creativeId = t[0], g.lineItemId = u[0], (p = Bd(n, 22, Jc)) && p.length && (g.creativeTemplateId = p[0])));
                Bd(n, 17, Jc).length && FI(g, Bd(n, 17, Jc)[0]);
                Bd(n, 18, Jc).length && GI(g, Bd(n, 18, Jc)[0]);
                Bd(n, 19, Jc).length && HI(g, Bd(n, 19, Jc));
                Bd(n, 20, Jc).length && II(g, Bd(n, 20, Jc));
                n = Bd(n, 45, (0, _.rd)(n.H) & 34 ? Cd : Dd).map(function(v) {
                    return id(v)
                });
                n.length && (g.encryptedTroubleshootingInfo = n[0])
            }
        });
        this.getResponseInformation = J(a, 355, function() {
            return g
        });
        this.getName = J(a, 170, function() {
            b.error(iI());
            return c.getAdUnitPath()
        });
        var m = new DI(a, c);
        this.getSlotId = J(a, 579, function() {
            return m
        });
        this.getServices = J(a, 580, function() {
            return _.zk(e, 4).map(function(n) {
                var p = uF[n];
                if (p) {
                    var t, u, v;
                    n = null != (v = null == (u = (t = qm())[p]) ? void 0 : u.call(t)) ? v : null
                } else n = null;
                return n
            })
        });
        this.getSizes = J(a, 581, function(n, p) {
            var t, u;
            return null != (u = null == (t = gh(e, n, p)) ? void 0 : t.map(function(v) {
                return _.G(v, 3) ? "fluid" : new MI(v.getWidth(), v.getHeight())
            })) ? u : null
        });
        this.getClickUrl = J(a, 582, function() {
            var n;
            return null != (n = e.getClickUrl()) ? n : ""
        });
        this.getTargetingMap = J(a, 583, function() {
            for (var n = {}, p = _.y(sk(e)), t = p.next(); !t.done; t = p.next()) t = t.value, _.R(t, 1) && (n[_.Qi(t, 1)] = _.zk(t, 2));
            return n
        });
        this.getOutOfPage = J(a, 584, function(n) {
            return "number" === typeof n ? Ko(e) === n : 0 !== Ko(e)
        });
        this.getCollapseEmptyDiv = J(a, 585, function() {
            return null != fl(e, 10) ? _.G(e, 10) : null
        });
        this.getDivStartsCollapsed = J(a, 586, function() {
            return null != fl(e, 11) ? _.G(e, 11) : null
        });
        c.listen(PG, function(n) {
            h = n.detail.Ui
        });
        this.getContentUrl = J(a, 587, function() {
            return h()
        });
        this.getFirstLook = J(a, 588, function() {
            Oy("The getFirstLook method of SlotInterface is deprecated. Please update your code to no longer call this method.");
            return 0
        });
        c.listen(OG, function(n) {
            var p;
            k = null != (p = n.detail.getEscapedQemQueryId()) ? p : ""
        });
        this.getEscapedQemQueryId = J(a, 591, function() {
            return k
        });
        this.getHtml = J(a, 592, function() {
            return l ? (window.console && console.warn && console.warn("This ad's html cannot be accessed using the getHtml method on googletag.Slot. Returning the empty string instead."), "") : f
        });
        this.setConfig = J(a, 1022, function(n) {
            var p = e;
            if (!n || "object" !== typeof n && "function" !== typeof n) Q(b, kk("googletag.slot.setConfig", [n]), c);
            else {
                var t = n.componentAuction;
                n = n.adExpansion;
                if (null != t) {
                    var u = {
                        componentAuction: t
                    };
                    if (_.la(u)) {
                        if (t = Id(p, 26), void 0 !== u.componentAuction) {
                            u = _.y(u.componentAuction);
                            for (var v = u.next(); !v.done; v = u.next()) {
                                var x = v.value;
                                v = x.configKey;
                                x = x.auctionConfig;
                                "string" !== typeof v || rk(v) || (null === x ? t.delete(v) : x && t.set(v, JSON.stringify(x)))
                            }
                        }
                    } else Q(b, kk("googletag.Slot.setConfig", [u]))
                }
                void 0 === n || null === n ? Ck(p, 28) : (n = n.enabled, "boolean" === typeof n ? (n = Br(n), _.tg(p, 28, n)) : void 0 !== n && null !== n || Ck(p, 28))
            }
        })
    };
    var Z = function(a, b, c) {
        PE.call(this, b, c);
        this.context = a
    };
    _.T(Z, PE);
    Z.prototype.T = function(a) {
        Eg(this.context, this.id, a);
        var b, c;
        null == (b = window.console) || null == (c = b.error) || c.call(b, a)
    };
    var NI = function(a, b, c, d, e) {
        var f = null,
            g = zg(a.context, b, e);
        _.lb(c, d, g) && (f = function() {
            return _.Pe(c, d, g)
        }, _.Vo(a, f));
        return f
    };
    var Am = function(a, b, c, d, e) {
        Z.call(this, a, 959);
        this.fb = b;
        this.output = W(this);
        this.m = X(this, b);
        TE(this, c);
        TE(this, d);
        e && TE(this, e)
    };
    _.T(Am, Z);
    Am.prototype.j = function() {
        this.output.G(this.m.value)
    };
    var zm = function(a, b, c, d, e, f) {
        Z.call(this, a, 1172);
        this.X = b;
        this.O = c;
        this.D = d;
        this.m = RE(this);
        TE(this, e);
        this.B = X(this, f)
    };
    _.T(zm, Z);
    zm.prototype.j = function() {
        var a = this,
            b = new qD(this.D, {
                timeoutMs: -1
            });
        _.S(this, b);
        if (OB(b.caller)) {
            var c = this.O.K,
                d = c.status,
                e = function(f) {
                    1 !== f.internalErrorState && TD(UD(_.Kd(a.B.value, 10, f.applicableSections, _.Ic), f.gppString), zg(a.context, 1182, function() {
                        return sD(f.gppString)
                    })());
                    a.m.notify()
                };
            switch (d) {
                case 2:
                    e(c.data);
                    break;
                case 1:
                    c.j.push(e);
                    break;
                case 0:
                    UG(c);
                    c.j.push(e);
                    this.X.info(VH());
                    b.addEventListener(zg(this.context, 1173, function(f, g) {
                        g && "signalStatus" === f.eventName && "ready" === f.data && (c.data = f.pingData, c.status = 2, c.j.forEach(function(h) {
                            h(f.pingData)
                        }), c.Zd())
                    }));
                    break;
                default:
                    throw Error("Impossible CacheStatus: " + d);
            }
        } else this.m.notify()
    };
    var xm = function(a, b, c, d, e, f, g) {
        Z.call(this, a, 874);
        this.X = b;
        this.O = c;
        this.D = d;
        this.F = e;
        this.m = RE(this);
        TE(this, f);
        this.B = X(this, g)
    };
    _.T(xm, Z);
    xm.prototype.j = function() {
        var a = this,
            b = new YB(this.D, {
                timeoutMs: -1,
                Gi: !0
            });
        _.S(this, b);
        if ($B(b)) {
            var c = this.O.B,
                d = c.status,
                e = function(f) {
                    var g = a.B.value,
                        h, k, l;
                    if (l = !(null == (h = a.F) ? 0 : _.G(h, 9))) {
                        var m = void 0 === m ? !1 : m;
                        l = dC(f) ? !1 === f.gdprApplies || "tcunavailable" === f.tcString || void 0 === f.gdprApplies && !m || "string" !== typeof f.tcString || !f.tcString.length ? !0 : bC(f, "1") : !1
                    }
                    h = _.Wi(g, 5, l);
                    l = !eC(f, ["3", "4"]);
                    h = _.Wi(h, 9, l);
                    h = rn(h, 2, f.tcString);
                    l = null != (k = f.addtlConsent) ? k : "";
                    k = rn(h, 4, l);
                    Hn(k, 7, f.internalErrorState);
                    null != f.gdprApplies && _.Wi(g, 3, f.gdprApplies);
                    _.H(cB) && !eC(f, ["2", "7", "9", "10"]) && _.Wi(g, 8, !0);
                    a.m.notify()
                };
            switch (d) {
                case 2:
                    e(c.data);
                    break;
                case 1:
                    c.j.push(e);
                    break;
                case 0:
                    UG(c);
                    c.j.push(e);
                    this.X.info(UH());
                    b.addEventListener(function(f) {
                        dC(f) ? ("tcunavailable" === f.tcString ? a.X.info(WH("failed")) : a.X.info(WH("succeeded")), c.data = f, c.status = 2, c.j.forEach(function(g) {
                            g(f)
                        }), c.Zd()) : UG(c)
                    });
                    break;
                default:
                    throw Error("Impossible CacheStatus: " + d);
            }
        } else this.m.notify()
    };
    var wm = function(a, b, c, d, e) {
        Z.call(this, a, 875);
        this.X = b;
        this.D = c;
        this.m = RE(this);
        TE(this, d);
        this.B = X(this, e)
    };
    _.T(wm, Z);
    wm.prototype.j = function() {
        var a = this,
            b = new iD(this.D);
        _.S(this, b);
        if (OB(b.caller)) {
            var c = zg(this.context, 660, function(d) {
                d && "string" === typeof d.uspString && (rn(a.B.value, 1, d.uspString), _.H(jB) && SD(a.B.value, zg(a.context, 1187, function() {
                    var e = d.uspString;
                    var f = e = e.toUpperCase();
                    4 == f.length && (-1 == f.indexOf("-") || "---" === f.substring(1)) && "1" <= f[0] && "9" >= f[0] && lz.hasOwnProperty(f[1]) && lz.hasOwnProperty(f[2]) && lz.hasOwnProperty(f[3]) ? (f = new kz, f = _.Bg(f, 1, parseInt(e[0], 10)), f = _.I(f, 2, lz[e[1]]), f = _.I(f, 3, lz[e[2]]), e = _.I(f, 4, lz[e[3]])) : e = null;
                    return 2 === (null == e ? void 0 : _.Xj(e, 3, 0))
                })()));
                a.m.notify()
            });
            this.X.info(TH());
            jD(b, c)
        } else this.m.notify()
    };
    var um = function(a, b) {
        Z.call(this, a, 958);
        this.m = b;
        this.fb = W(this)
    };
    _.T(um, Z);
    um.prototype.j = function() {
        var a = new RD,
            b = this.m ? _.G(this.m, 9) : _.H(mq) ? wl() : !1;
        _.Wi(a, 5, !b);
        this.fb.G(a)
    };
    var vm = function(a, b, c, d) {
        d = void 0 === d ? .001 : d;
        Z.call(this, a, 960);
        this.D = b;
        this.B = d;
        this.m = X(this, c)
    };
    _.T(vm, Z);
    vm.prototype.j = function() {
        var a = this;
        Gg(this.context, 894, function() {
            return void Wh("cmpMet", function(b) {
                ci(b, a.context);
                var c = new YB(a.D);
                _.S(a, c);
                var d = new iD(a.D);
                _.S(a, d);
                L(b, "fc", Number(a.m.value));
                L(b, "tcfv1", Number(!!a.D.__cmp));
                L(b, "tcfv2", Number($B(c)));
                L(b, "usp", Number(!!OB(d.caller)));
                L(b, "ptt", 17)
            }, a.B)
        })
    };
    var OI = function(a, b, c) {
        Z.call(this, a, 1103);
        this.m = b;
        this.da = c;
        this.output = W(this)
    };
    _.T(OI, Z);
    OI.prototype.j = function() {
        this.output.G(!!_.G(this.da, 5) && !_.G(this.da, 9) && (!_.H(jB) || !_.G(this.da, 13)) && (!_.H(ym) || !_.G(this.da, 12)) && (this.m ? _.G(this.m, 9) || _.G(this.m, 8) || _.G(this.m, 1) || _.H(TA) && _.G(this.m, 13) || 1 === _.Xj(this.m, 6, 2) || 1 === Gn(this.m, 5) ? !1 : !0 : !0))
    };
    var Em = function(a) {
        this.X = a;
        this.A = this.j = 0
    };
    Em.prototype.push = function() {
        for (var a = _.y(_.jb.apply(0, arguments)), b = a.next(); !b.done; b = a.next()) {
            b = b.value;
            try {
                "function" === typeof b && (b.call(_.w.globalThis), this.j++)
            } catch (c) {
                this.A++, b = void 0, null == (b = window.console) || b.error("Exception in queued GPT command", c), this.X.error(tH(String(c)))
            }
        }
        this.X.info(uH(String(this.j), String(this.A)));
        return this.j
    };
    var Cm = function(a, b) {
        this.push = J(a, 76, b.push.bind(b))
    };
    var PI = ["Debug", "Info", "Warning", "Error", "Fatal"],
        QI = function(a, b, c) {
            this.level = a;
            this.message = b;
            this.j = c;
            this.timestamp = new Date
        };
    _.q = QI.prototype;
    _.q.getSlot = function() {
        return this.j
    };
    _.q.getLevel = function() {
        return this.level
    };
    _.q.getTimestamp = function() {
        return this.timestamp
    };
    _.q.getMessage = function() {
        return this.message
    };
    _.q.toString = function() {
        return this.timestamp.toTimeString() + ": " + PI[this.level] + ": " + this.message
    };
    var RI = _.Ft(["https://console.googletagservices.com/pubconsole/loader.js"]),
        Om = _.te(RI),
        Sm, Rm = !1,
        Jm = !1,
        Lm = !1;
    var pr = function(a, b) {
        this.getAllEvents = J(a, 563, function() {
            return Jm ? SI(b).slice() : []
        });
        this.getEventsBySlot = J(a, 565, function(c) {
            return Jm ? TI(b, c).slice() : []
        });
        this.getEventsByLevel = J(a, 566, function(c) {
            return Jm ? UI(b, c).slice() : []
        })
    };
    var VI = {
            20: function(a) {
                return "Ignoring a call to setCollapseEmptyDiv(false, true). Slots that start out collapsed should also collapse when empty. Slot: " + a[0] + "."
            },
            23: function(a) {
                return 'Error in googletag.display: could not find div with id "' + a[1] + '" in DOM for slot: ' + a[0] + "."
            },
            34: function(a) {
                return "Size mapping is null because invalid mappings were added: " + a[0] + "."
            },
            60: function(a) {
                return "Ignoring the " + a[0] + "(" + (a[1] || "") + ") call since the service is already enabled."
            },
            66: function(a) {
                return "Slot " + a[0] + " cannot be refreshed until PubAdsService is enabled."
            },
            68: function() {
                return "Slots cannot be cleared until service is enabled."
            },
            80: function(a) {
                return "Slot object at position " + a[0] + " is of incorrect type."
            },
            84: function(a) {
                return 'Cannot find targeting attribute "' + a[0] + '" for "' + a[1] + '".'
            },
            93: function(a) {
                return "Failed to register listener. Unknown event type: " + a[0] + "."
            },
            96: function(a) {
                return "Invalid arguments: " + a[0] + "(" + a[1] + ")."
            },
            122: function(a) {
                return "Invalid argument: " + a[0] + "(" + a[1] + "). Valid values: " + a[2] + "."
            },
            121: function(a) {
                return "Invalid object passed to " + a[0] + "(" + a[1] + "), for " + a[2] + ": " + a[3] + "."
            },
            151: function(a) {
                return "Invalid arguments: " + a[0] + "(" + a[1] + "). All zero-area slot sizes were removed."
            },
            105: function(a) {
                return "SRA requests may include a maximum of 30 ad slots. " + a[1] + " were requested, so the last " + a[2] + " were ignored."
            },
            106: function(a) {
                return "Publisher betas " + a[0] + " were declared after enableServices() was called."
            },
            107: function(a) {
                return "Publisher betas may only be declared once. " + a[0] + " were added after betas had already been declared."
            },
            108: function(a) {
                return "Beta keys cannot be cleared. clearTargeting() was called on " + a[0] + "."
            },
            123: function(a) {
                return "Refresh was throttled for slot: " + a[0] + "."
            },
            113: function(a) {
                return a[0] + " ad slot ineligible as page is not mobile optimized: " + a[1] + "."
            },
            114: function() {
                return 'setCorrelator has been deprecated. See the Google Ad Manager help page on "Creative selection for multiple ad slots" for more information: https://support.google.com/admanager/answer/183281.'
            },
            115: function() {
                return 'updateCorrelator has been deprecated. See the Google Ad Manager help page on "Creative selection for multiple ad slots" for more information: https://support.google.com/admanager/answer/183281.'
            },
            132: function(a) {
                return "Taxonomy with id " + a[0] + " has reached the limit of " + a[1] + " values."
            },
            133: function() {
                return "No taxonomy values were cleared, either due to an invalid taxonomy or no values present."
            },
            134: function(a) {
                return Um(a[0]) + " " + a[1] + " not requested: Format already created on the page."
            },
            135: function(a) {
                return Um(a[0]) + " " + a[1] + " not requested: Frequency cap of 1 has been exceeded."
            },
            136: function(a) {
                return Um(a[0]) + " " + a[1] + " not requested: The viewport exceeds the current maximum width of 2500px."
            },
            137: function(a) {
                return Um(a[0]) + " " + a[1] + " not requested: Format currently only supported on mobile."
            },
            138: function(a) {
                return Um(a[0]) + " " + a[1] + " not requested: Format currently only supports portrait orientation."
            },
            139: function(a) {
                return Um(a[0]) + " " + a[1] + " not requested: GPT is not running in the top-level window."
            },
            140: function(a) {
                return Um(a[0]) + " " + a[1] + " not requested: Detected browser is currently unsupported."
            },
            142: function(a) {
                return "A google product ad tag with click url " + a[0] + " does not contain any elements enabled for clicking."
            },
            145: function(a) {
                return Um(a[0]) + " " + a[1] + " not requested: Unable to access local storage to determine if the frequency cap has been exceeded due to insufficient user consent."
            },
            143: function() {
                return "getName on googletag.Slot is deprecated and will be removed. Use getAdUnitPath instead."
            },
            147: function() {
                return "GPT must be loaded from the limited ads URL to enable limited ads functionality."
            },
            148: function() {
                return "CommerceAdsConfig must contain a valid value for either categories or queries."
            },
            150: function() {
                return "Legacy browser does not support intersection observer causing lazy render/fetch as well as viewability events not to work properly."
            },
            154: function(a) {
                return "Refresh is disabled for " + Um(a[0]) + " " + a[1] + "."
            },
            152: function() {
                return "Attempted to load GPT multiple times."
            },
            155: function() {
                return "Using deprecated googletag.encryptedSignalProviders. Please use googletag.secureSignalProviders instead."
            },
            158: function(a) {
                return "Unrecognized property encountered when calling setConfig: " + a[0] + "." + a[1]
            },
            159: function(a) {
                return "Invalid value encountered when calling setConfig: " + a[0] + "." + a[1] + ": " + a[2]
            }
        },
        WI = {
            26: function(a) {
                return "Div ID passed to googletag.display() does not match any defined slots: " + a[0] + "."
            },
            28: function(a) {
                return "Error in googletag.defineSlot: Cannot create slot " + a[1] + '. Div element "' + a[0] + '" is already associated with another slot: ' + a[2] + "."
            },
            149: function(a) {
                return "Error in googletag.defineSlot: Invalid ad unit path provided " + a[0] + ", see https://support.google.com/admanager/answer/10477476 for more information."
            },
            92: function(a) {
                return "Exception in " + a[1] + ' event listener: "' + a[0] + '".'
            },
            30: function(a) {
                return "Exception in googletag.cmd function: " + a[0] + "."
            },
            125: function(a) {
                return "google-product-ad element is invalid: " + a[0] + "."
            },
            126: function() {
                return "Attempted to collect prebid data but window.pbjs is undefined."
            },
            153: function() {
                return "Attempted to load GPT from both standard and limited ads domains."
            },
            127: function(a) {
                return "Encountered the following error while attempting to collect prebid metadata: " + a[0] + "."
            },
            144: function() {
                return "ContentService is no longer available. Use the browser's built-in DOM APIs to directly add content to div elements instead."
            }
        };
    var XI = function(a) {
            this.context = a;
            this.o = this.C = this.j = 0;
            this.K = window;
            this.A = [];
            this.A.length = 1E3
        },
        SI = function(a) {
            return [].concat(_.Ee(a.A.slice(a.j)), _.Ee(a.A.slice(0, a.j))).filter(function(b) {
                return !!b
            })
        },
        TI = function(a, b) {
            return SI(a).filter(function(c) {
                return c.getSlot() === b
            })
        },
        UI = function(a, b) {
            return SI(a).filter(function(c) {
                return c.getLevel() >= b
            })
        };
    XI.prototype.log = function(a, b, c, d) {
        var e = this;
        d = void 0 === d ? !1 : d;
        var f, g;
        c = new QI(a, b, null != (g = null == (f = void 0 === c ? null : c) ? void 0 : f.j) ? g : null);
        this.A[this.j] = c;
        this.j = (this.j + 1) % 1E3;
        g = _.tf(tA) && 100 > this.C;
        f = 2 === a || 3 === a;
        var h = b.getMessageArgs(),
            k = b.getMessageId(),
            l = VI[k] || WI[k];
        g && f && (b = _.tf(tA), Wh("gpt_eventlog_messages", function(m) {
            ++e.C;
            ci(m, e.context);
            L(m, "level", a);
            L(m, "messageId", k);
            L(m, "args", h.join("|"));
            l || L(m, "noMsg", !0);
            var n = Error(),
                p;
            L(m, "stack", _.LD(null != (p = n.stack) ? p : "", n.message))
        }, b));
        if (l) {
            b = "[GPT] " + l(h);
            if (d) throw new om(b);
            d = this.o < _.tf(vA) && f && _.r.console;
            if (this.K === top && d || _.z(_.r.navigator.userAgent, "includes").call(_.r.navigator.userAgent, "Lighthouse"))(function(m) {
                var n, p, t, u;
                return void(2 === a ? null == (p = (n = _.r.console).warn) ? void 0 : p.call(n, m) : null == (u = (t = _.r.console).error) ? void 0 : u.call(t, m))
            })(b), this.o++
        }
        return c
    };
    XI.prototype.info = function(a, b) {
        return this.log(1, a, void 0 === b ? null : b)
    };
    var Q = function(a, b, c) {
        return a.log(2, b, c, !1)
    };
    XI.prototype.error = function(a, b, c) {
        return this.log(3, a, b, void 0 === c ? !1 : c)
    };
    var YI = function() {
            var a = {
                    fa: Mh().j,
                    Vh: new Date(Date.now()),
                    Ng: window.location.href
                },
                b = this;
            a = void 0 === a ? {} : a;
            var c = void 0 === a.fa ? Mh().j : a.fa,
                d = void 0 === a.Vh ? new Date(Date.now()) : a.Vh,
                e = void 0 === a.Ng ? window.location.href : a.Ng;
            this.o = "";
            this.C = this.j = null;
            this.K = this.m = !1;
            this.A = function() {
                return !1
            };
            a = {};
            var f = {},
                g = {};
            this.J = (g[3] = (a[72] = function(h, k) {
                var l = b.j;
                k = Number(k);
                h = null !== l ? _.qf("w5uHecUBa2S:" + Number(h) + ":" + l) % k === Math.floor(d.valueOf() / 864E5) % k : void 0;
                return h
            }, a[13] = function() {
                return _.jb.apply(0, arguments).some(function(h) {
                    return 0 == b.o.lastIndexOf(h, 0)
                })
            }, a[12] = function() {
                return !!_.G(c, 6)
            }, a[15] = function(h) {
                return b.A(h)
            }, a[66] = function() {
                try {
                    return !!HTMLScriptElement.supports("webbundle")
                } catch (h) {
                    return !1
                }
            }, a[67] = function() {
                return b.m
            }, a[68] = function() {
                return b.K
            }, a[74] = function() {
                return _.z(_.jb.apply(0, arguments), "includes").call(_.jb.apply(0, arguments), String(_.qf(e)))
            }, a), g[4] = (f[14] = function() {
                var h = Number(b.C || void 0);
                isNaN(h) ? h = void 0 : (h = new Date(1E3 * h), h = 1E4 * h.getFullYear() + 100 * (h.getMonth() + 1) + h.getDate());
                return h
            }, f), g[5] = {}, g)
        },
        ZI = function(a, b) {
            if (b && !a.j) {
                b = b.split(":");
                a.j = _.z(b, "find").call(b, function(d) {
                    return 0 === d.indexOf("ID=")
                }) || null;
                var c;
                a.C = (null == (c = _.z(b, "find").call(b, function(d) {
                    return 0 === d.indexOf("T=")
                })) ? void 0 : c.substring(2)) || null
            }
        };
    var Ls = function(a, b, c, d, e, f, g) {
        Z.call(this, a, 863);
        this.B = c;
        this.Qc = Number(b);
        this.m = X(this, d);
        this.I = X(this, e);
        this.M = X(this, f);
        this.F = X(this, g)
    };
    _.T(Ls, Z);
    Ls.prototype.j = function() {
        var a = this.M.value,
            b = this.m.value,
            c = this.F.value,
            d = this.I.value,
            e = this.B;
        var f = Wm(e);
        var g = b.getBoundingClientRect();
        e = _.Dj(e) ? ph(b, e) : {
            x: 0,
            y: 0
        };
        b = e.x;
        e = e.y;
        g = new _.Wy(e, b + g.right, e + g.bottom, b);
        b = new lE;
        b = _.tw(b, 1, g.top);
        b = _.tw(b, 3, g.bottom);
        b = _.tw(b, 2, g.left);
        g = _.tw(b, 4, g.right);
        b = new mE;
        b = _.xh(b, 1, _.Ec(this.Qc));
        d = _.Wi(b, 2, !d);
        d = _.tg(d, 3, g);
        c = _.tw(d, 4, c);
        f = _.tw(c, 5, f);
        f = {
            type: "asmres",
            payload: Qj(f)
        };
        a.ports[0].postMessage(f)
    };
    var $I = function(a, b, c, d) {
        d = void 0 === d ? function() {
            return !0
        } : d;
        Z.call(this, a, 1060);
        var e = this;
        this.output = RE(this);
        LE(this.output, new _.w.Promise(function(f) {
            var g = NI(e, e.id, b, c, function(h) {
                d(h) && (g(), f())
            })
        }))
    };
    _.T($I, Z);
    $I.prototype.j = function() {};
    var fp = function(a, b, c, d) {
        Z.call(this, a, 1061);
        var e = this;
        this.output = W(this);
        this.output.Ta(new _.w.Promise(function(f) {
            var g = b.listen(c, function(h) {
                h = d(h);
                null !== h && (g(), f(h))
            });
            _.Vo(e, g)
        }))
    };
    _.T(fp, Z);
    fp.prototype.j = function() {};
    var Wo = function(a, b, c, d) {
        d = void 0 === d ? function() {
            return !0
        } : d;
        Z.call(this, a, 1061);
        var e = this;
        this.output = RE(this);
        LE(this.output, new _.w.Promise(function(f) {
            var g = b.listen(c, function(h) {
                d(h) && (g(), f())
            });
            _.Vo(e, g)
        }))
    };
    _.T(Wo, Z);
    Wo.prototype.j = function() {};
    var Js = function(a, b, c, d) {
        fp.call(this, a, b, Xo, function(e) {
            e = e.detail;
            var f;
            return "asmreq" === (null == (f = e.data) ? void 0 : f.type) && Wq(kE(e.data.payload), 1) === Number(c) ? e : null
        });
        this.B = d;
        this.m = W(this)
    };
    _.T(Js, fp);
    Js.prototype.j = function() {
        this.m.G(Wm(this.B))
    };
    var aJ = /(<head(\s+[^>]*)?>)/i,
        ks = function(a, b, c, d, e) {
            Z.call(this, a, 665);
            this.output = W(this);
            this.m = X(this, b);
            this.B = Y(this, c);
            this.F = X(this, d);
            this.I = X(this, e)
        };
    _.T(ks, Z);
    ks.prototype.j = function() {
        var a;
        0 !== this.m.value.kind || null == (a = this.B.value) || !_.Qi(a, 1) || this.I.value ? this.output.G(this.m.value) : (a = this.m.value.wb, Ma("Firefox") || Ma("FxiOS") || (a = a.replace(aJ, "$1<meta http-equiv=Content-Security-Policy content=\"script-src https://cdn.ampproject.org/;object-src 'none';child-src blob:;frame-src 'none'\">")), this.F.value && (a = a.replace(aJ, '$1<meta name="referrer" content="origin">')), this.output.G({
            kind: 0,
            wb: a
        }))
    };
    var bJ = function(a, b, c, d) {
        Z.call(this, a, 1124);
        this.zd = RE(this);
        this.B = X(this, b);
        this.m = X(this, c);
        TE(this, d)
    };
    _.T(bJ, Z);
    bJ.prototype.j = function() {
        _.bz(this.m.value, {
            "min-width": "100%",
            visibility: "hidden"
        });
        _.bz(this.B.value, "min-width", "100%");
        this.zd.notify()
    };
    var cJ = function(a, b, c, d, e) {
        Z.call(this, a, 1125);
        this.B = X(this, b);
        this.m = X(this, c);
        TE(this, d);
        TE(this, e)
    };
    _.T(cJ, Z);
    cJ.prototype.j = function() {
        var a = this.B.value,
            b = a.contentDocument;
        b && (a.setAttribute("height", String(b.body.offsetHeight)), a.setAttribute("width", String(b.body.offsetWidth)), _.bz(this.m.value, "visibility", "visible"))
    };
    var Ms = function(a, b, c, d, e, f, g, h) {
        Z.call(this, a, 718);
        this.slotId = b;
        this.rg = e;
        this.B = f;
        this.F = g;
        this.output = W(this);
        this.m = new Wo(this.context, this.slotId, LG);
        this.M = Y(this, c);
        this.I = Y(this, d);
        this.V = X(this, h)
    };
    _.T(Ms, Z);
    Ms.prototype.j = function() {
        var a = !this.V.value;
        if (null == this.I.value || "height" !== this.M.value || a) this.m.wa(), this.output.G(!1);
        else {
            a = new $i;
            _.S(this, a);
            var b = new bJ(this.context, this.B, this.F, this.rg);
            N(a, b);
            N(a, this.m);
            N(a, new cJ(this.context, this.B, this.F, this.m.output, b.zd));
            ij(a);
            this.output.G(!0)
        }
    };
    var vs = function(a, b, c, d, e, f, g, h, k, l, m, n, p) {
        Z.call(this, a, 699);
        this.ca = b;
        this.slotId = c;
        this.m = d;
        this.Pc = e;
        this.output = RE(this);
        this.M = Y(this, f);
        this.Z = X(this, g);
        this.F = X(this, h);
        this.V = X(this, k);
        this.B = Y(this, l);
        this.ba = X(this, m);
        this.I = X(this, n);
        p && TE(this, p)
    };
    _.T(vs, Z);
    vs.prototype.j = function() {
        var a = this.Z.value,
            b = this.F.value;
        b.style.width = "";
        b.style.height = "";
        if ("height" !== this.M.value) {
            var c, d = null != (c = this.B.value) ? c : 0;
            c = this.V.value;
            var e = this.ba.value,
                f = this.I.value,
                g = !1;
            switch (d) {
                case 1:
                case 2:
                case 4:
                case 5:
                    var h = this.context;
                    g = this.ca;
                    var k = this.slotId,
                        l = this.m,
                        m = this.Pc,
                        n, p = a.parentElement ? null == (n = Eh(a.parentElement, window)) ? void 0 : n.width : void 0;
                    n = c.width;
                    var t = c.height,
                        u = 0;
                    var v = 0;
                    var x = ih(l);
                    x = _.y(x);
                    for (var F = x.next(); !F.done; F = x.next()) {
                        var D = F.value;
                        Array.isArray(D) && (F = D[0], D = D[1], u < F && (u = F), v < D && (v = D))
                    }
                    v = [u, v];
                    u = v[0] < n;
                    t = v[1] < t;
                    if (u || t) {
                        v = n + "px";
                        x = {
                            "max-height": "none",
                            "max-width": v,
                            padding: "0px",
                            width: v
                        };
                        t && (x.height = "auto");
                        Qh(b, a, x);
                        b = {};
                        if ((_.E = [2, 5], _.z(_.E, "includes")).call(_.E, d) || u && n > Nh(e.width)) b.width = v, b["max-width"] = v;
                        t && (b.height = "auto", b["max-height"] = "none");
                        c: {
                            for (M in b)
                                if (Object.prototype.hasOwnProperty.call(b, M)) {
                                    var M = !1;
                                    break c
                                }
                            M = !0
                        }
                        M ? b = !1 : (b["padding-" + ("ltr" === e.direction ? "left" : "right")] = "0px", _.Ph(a, b), b = !0)
                    } else b = !1;
                    b: switch (v = c.width, M = g.defaultView || g.parentWindow || _.r, d) {
                        case 2:
                        case 5:
                            a = Rh(a, M, v, e, m);
                            break b;
                        case 1:
                        case 4:
                            if (e = a.parentElement)
                                if (m = vh(e)) {
                                    F = m.width;
                                    m = Ch(k, M.document);
                                    n = Eh(m, M);
                                    t = n.position;
                                    D = Nh(n.width) || 0;
                                    u = Eh(e, M);
                                    x = "rtl" === u.direction ? "Right" : "Left";
                                    m = x.toLowerCase();
                                    M = "absolute" === t ? 0 : Nh(u["padding" + x]);
                                    u = Nh(u["border" + x + "Width"]);
                                    v = Math.max(Math.round((F - Math.max(D, v)) / 2), 0);
                                    F = {};
                                    D = 0;
                                    var B = dn(n);
                                    B && (D = B[4] * ("Right" === x ? -1 : 1), x = B[3] || 1, 1 !== (B[0] || 1) || 1 !== x) && (B[0] = 1, B[3] = 1, F.transform = "matrix(" + B.join(",") + ")");
                                    x = 0;
                                    switch (t) {
                                        case "fixed":
                                            var K, V = null != (K = Number(Fh(n.getPropertyValue(m)))) ? K : 0,
                                                O;
                                            K = null != (O = e.getBoundingClientRect().left) ? O : 0;
                                            x = V - K;
                                            break;
                                        case "relative":
                                            x = null != (V = Number(Fh(n.getPropertyValue(m)))) ? V : 0;
                                            break;
                                        case "absolute":
                                            F[m] = "0"
                                    }
                                    F["margin-" + m] = v - M - u - x - D + "px";
                                    _.Ph(a, F);
                                    a = !0
                                } else a = !1;
                            else a = !1;
                            break b;
                        default:
                            a = !1
                    }
                    b || a ? (_.z(CF, "includes").call(CF, d) && Th(h, g, k, l, d, c.width, c.height, p, "gpt_slotexp", f), g = !0) : g = !1;
                    break;
                case 3:
                    d = this.context, O = this.ca, g = this.slotId, k = this.m, p = this.Pc, l = a.parentElement ? null == (h = Eh(a.parentElement, window)) ? void 0 : h.width : void 0, h = c.width, K = c.height, V = Nh(e.height) || 0, K >= V || "none" === e.display || "hidden" === e.visibility || !p || -12245933 === p.width || a.getBoundingClientRect().bottom <= p.height ? g = !1 : (p = {
                        height: K + "px"
                    }, Qh(b, a, p), _.Ph(a, p), Th(d, O, g, k, 3, h, K, l, "gpt_slotred", f), g = !0)
            }!g && _.H(eA) && Th(this.context, this.ca, this.slotId, this.m, 0, c.width, c.height, void 0, "gpt_pgbrk", f)
        }
        this.output.notify()
    };
    var ts = function(a, b, c) {
        Z.call(this, a, 698);
        this.D = b;
        this.output = W(this);
        this.m = X(this, c)
    };
    _.T(ts, Z);
    ts.prototype.j = function() {
        this.output.Ga(Eh(this.m.value, this.D))
    };
    var ns = function(a, b, c, d, e, f) {
        Z.call(this, a, 1114);
        this.M = b;
        this.Xb = c;
        this.F = W(this);
        this.B = W(this);
        this.I = X(this, d);
        this.m = X(this, e);
        this.V = X(this, f)
    };
    _.T(ns, Z);
    ns.prototype.j = function() {
        if (this.M) {
            var a = this.M.split(":");
            if (2 !== a.length || "#flexibleAdSlotDebugSize" !== a[0]) dJ(this);
            else {
                var b = a[1];
                a = eJ(this, b);
                var c;
                (c = /(?:.*)height=(ratio|[0-9]+)(?:;.*|$)/.exec(b)) ? (c = c[1], "ratio" === c ? c = a && this.I.value && this.m.value ? Math.floor(this.m.value / this.I.value * a) : null : (c = Number(c), c = 0 <= c ? c : null)) : c = null;
                b = (b = /(?:.*)ius=(.+,?)+(?:;.*|$)/.exec(b)) ? b[1].split(",") : [];
                a || c ? (this.F.G(new _.uh(null != a ? a : this.I.value, null != c ? c : this.m.value)), this.B.G(b)) : dJ(this)
            }
        } else dJ(this)
    };
    var eJ = function(a, b) {
            b = /(?:.*)width=(parent|viewport|[0-9]+)(?:;.*|$)/.exec(b);
            if (!b) return null;
            b = b[1];
            if ("viewport" === b) return a.Xb;
            if ("parent" === b) {
                var c, d, e;
                return (b = null != (e = null == (d = vh(null == (c = a.V.value) ? void 0 : c.parentElement)) ? void 0 : d.width) ? e : null) ? Math.min(b, a.Xb) : null
            }
            a = Number(b);
            return 0 <= a ? a : null
        },
        dJ = function(a) {
            a.F.ga();
            a.B.G([])
        };
    var os = function(a, b, c, d, e, f, g, h, k, l, m) {
        Z.call(this, a, 681);
        this.adUnitPath = b;
        this.Z = c;
        this.Bc = d;
        this.hb = W(this);
        this.m = W(this);
        this.Td = W(this);
        this.I = W(this);
        this.M = Y(this, e);
        this.ka = Y(this, f);
        this.ja = Y(this, g);
        this.ba = Y(this, h);
        this.B = X(this, k);
        this.F = X(this, l);
        this.V = X(this, m)
    };
    _.T(os, Z);
    os.prototype.j = function() {
        var a = fJ(this),
            b = this.ba.value,
            c;
        if (c = !this.Bc && a && b) this.B.value.length ? (c = this.adUnitPath.split("/"), c = _.z(this.B.value, "includes").call(this.B.value, c[c.length - 1])) : c = !0;
        if (c) {
            c = this.V.value;
            var d, e, f = null != (e = null == (d = vh(c.parentElement)) ? void 0 : d.width) ? e : 0;
            d = b.width;
            b = b.height;
            gJ(this, !0, d, b, {
                kind: 0,
                wb: '<html><body style="height:' + (b - 2 + "px;width:" + (d - 2 + 'px;background-color:#ddd;color:#000;border:1px solid #f00;margin:0;"><p>Requested size:')) + (a.width + "x" + a.height + "</p><p>Rendered size:") + (d + "x" + b + "</p></body></html>")
            }, d <= f ? 1 : 2, c)
        } else if (a = this.ka.value, b = this.ja.value, this.Bc) gJ(this, !1, null != a ? a : 0, null != b ? b : 0, this.F.value);
        else {
            if (null == a) throw new om("Missing 'width'.");
            if (null == b) throw new om("Missing 'height'.");
            gJ(this, !1, a, b, this.F.value)
        }
    };
    var fJ = function(a) {
            a = ih(a.Z)[0];
            return Array.isArray(a) && a.every(function(b) {
                return "number" === typeof b
            }) ? new _.uh(a[0], a[1]) : null
        },
        gJ = function(a, b, c, d, e, f, g) {
            f = void 0 === f ? a.M.value : f;
            a.I.G(b);
            a.m.G(new _.uh(c, d));
            a.hb.G(e);
            a.Td.Ga(f);
            g && _.bz(g, "opacity", .5)
        };
    var hJ = null;
    var iJ = function(a, b, c, d, e) {
        Z.call(this, a, 937, _.tf(PA));
        this.eb = b;
        this.m = W(this);
        this.B = W(this);
        this.F = W(this);
        this.Jb = c;
        this.Zb = d;
        this.wc = e
    };
    _.T(iJ, Z);
    iJ.prototype.j = function() {
        var a = {},
            b;
        if (null == (b = _.Zg(this.eb, dx, 2)) ? 0 : _.G(b, 2)) a["*"] = {
            td: !0
        };
        b = new _.w.Set;
        for (var c = _.y(bh(this.eb, cx, 1)), d = c.next(); !d.done; d = c.next()) {
            d = d.value;
            for (var e = _.y([_.R(d, 2), _.R(d, 1)].filter(function(p) {
                    return !!p
                })), f = e.next(); !f.done; f = e.next()) a[f.value] = {
                td: _.G(d, 3)
            };
            d = _.y(Bd(d, 4, Cc));
            for (e = d.next(); !e.done; e = d.next()) b.add(e.value)
        }
        this.Jb.G(a);
        this.m.G([].concat(_.Ee(b)));
        var g, h;
        a = null == (g = _.Zg(this.eb, dx, 2)) ? void 0 : null == (h = _.Zg(g, Yw, 1)) ? void 0 : bh(h, Xw, 1);
        this.B.Ga((null == a ? 0 : a.length) ? a : null);
        var k;
        this.Zb.G(!(null == (k = _.Zg(this.eb, dx, 2)) || !_.G(k, 4)));
        var l;
        this.wc.G(!(null == (l = _.Zg(this.eb, dx, 2)) || !_.G(l, 5)));
        var m, n;
        g = null == (m = _.Zg(this.eb, dx, 2)) ? void 0 : null == (n = _.Zg(m, Yw, 3)) ? void 0 : bh(n, Xw, 1);
        this.F.Ga((null == g ? 0 : g.length) ? g : null)
    };
    iJ.prototype.J = function(a) {
        this.o(a)
    };
    iJ.prototype.o = function() {
        this.Jb.G({});
        this.m.G([]);
        this.B.ga();
        this.Zb.G(!1);
        this.wc.G(!1);
        this.F.ga()
    };
    var jJ = function(a, b, c, d) {
        Z.call(this, a, 980);
        this.Wa = b;
        this.output = new zp;
        this.m = X(this, c);
        this.B = X(this, d)
    };
    _.T(jJ, Z);
    jJ.prototype.j = function() {
        (_.E = _.z(Object, "entries").call(Object, this.m.value), _.z(_.E, "find")).call(_.E, function(c) {
            var d = _.y(c);
            c = d.next().value;
            d = d.next().value;
            return "*" !== c && (null == d ? void 0 : d.td)
        }) && (this.Wa.K = !0);
        hl(25, this.context);
        for (var a = _.y(this.B.value), b = a.next(); !b.done; b = a.next()) mf(b.value);
        this.output.notify()
    };
    var kJ = function(a, b, c, d) {
        Z.call(this, a, 931);
        this.m = Y(this, b);
        this.mc = c;
        this.ac = d
    };
    _.T(kJ, Z);
    kJ.prototype.j = function() {
        var a = this.m.value,
            b = new _.w.Map;
        this.mc.G(new _.w.Map);
        if (a) {
            var c;
            a = _.y(null != (c = this.m.value) ? c : []);
            for (c = a.next(); !c.done; c = a.next()) {
                var d = c.value;
                c = bh(d, Ww, 1);
                c = 1 === _.Xj(c[0], 1, 0) ? ow(c[0]) : pw(c[0], nw);
                d = _.Me(d, 2);
                var e = void 0;
                b.set(c, Math.min(null != (e = b.get(c)) ? e : Number.MAX_VALUE, d))
            }
        }
        this.ac.G(b)
    };
    kJ.prototype.o = function() {
        this.mc.G(new _.w.Map);
        this.ac.G(new _.w.Map)
    };
    var lJ = function(a, b, c) {
        Z.call(this, a, 981);
        this.B = W(this);
        this.F = Y(this, b);
        this.m = c
    };
    _.T(lJ, Z);
    lJ.prototype.j = function() {
        var a = new _.w.Map,
            b, c = _.y(null != (b = this.F.value) ? b : []);
        for (b = c.next(); !b.done; b = c.next()) {
            b = b.value;
            var d = bh(b, Ww, 1);
            d = 1 === _.Xj(d[0], 1, 0) ? ow(d[0]) : pw(d[0], nw);
            a.set(d, _.Me(b, 2))
        }
        this.B.G(a);
        this.m.G(new Pw)
    };
    lJ.prototype.o = function() {
        this.B.G(new _.w.Map);
        var a = this.m,
            b = a.G;
        var c = new Pw;
        c = Hn(c, 1, 2);
        b.call(a, c)
    };
    var mJ = function(a, b, c, d, e, f) {
        Z.call(this, a, 976);
        this.nextFunction = d;
        this.m = e;
        this.requestBidsConfig = f;
        TE(this, b);
        TE(this, c)
    };
    _.T(mJ, Z);
    mJ.prototype.j = function() {
        var a;
        null == (a = this.nextFunction) || a.apply(this.m, [this.requestBidsConfig])
    };
    var nJ = function(a, b, c, d, e, f) {
        Z.call(this, a, 975);
        this.B = b;
        this.m = c;
        this.F = d;
        this.pbjs = e;
        this.requestBidsConfig = f;
        this.output = new zp
    };
    _.T(nJ, Z);
    nJ.prototype.j = function() {
        sn(this.pbjs, this.B, this.m, this.F, this.requestBidsConfig);
        this.output.notify()
    };
    nJ.prototype.o = function() {
        this.output.notify()
    };
    var oJ = function(a, b, c, d, e, f) {
        Z.call(this, a, 1100);
        this.pbjs = b;
        this.m = c;
        this.B = d;
        this.F = e;
        this.requestBidsConfig = f;
        this.output = new zp
    };
    _.T(oJ, Z);
    oJ.prototype.j = function() {
        var a, b, c = null != (b = null == (a = this.m) ? void 0 : a.get("*")) ? b : _.tf(jA);
        if (c) this.Yb(c);
        else {
            var d, e, f, g;
            a = null != (g = null != (f = null == (d = this.requestBidsConfig) ? void 0 : d.adUnits) ? f : null == (e = this.pbjs) ? void 0 : e.adUnits) ? g : [];
            d = _.y(a);
            for (e = d.next(); !e.done; e = d.next())
                if (e = e.value.code) c = b = a = g = void 0, f = null != (g = null != (a = null == (c = this.m) ? void 0 : c.get(_.H(ln) ? kn(e) : e)) ? a : null == (b = this.m) ? void 0 : b.get(_.qf(e))) ? g : 0, this.Yb(f)
        }
        this.output.notify()
    };
    oJ.prototype.Yb = function(a) {
        var b;
        null != (b = this.B) && _.Wi(b, 2, this.F);
        if (a) {
            var c;
            null == (c = this.B) || Hn(c, 1, 1);
            if (!this.F) {
                this.requestBidsConfig.timeout = a;
                var d, e, f;
                b = null != (f = null == (e = (d = this.pbjs).getConfig) ? void 0 : e.call(d).s2sConfig) ? f : [];
                if (Array.isArray(b))
                    for (d = _.y(b), e = d.next(); !e.done; e = d.next()) e.value.timeout = a;
                else b.timeout = a;
                var g, h;
                null == (h = (g = this.pbjs).setConfig) || h.call(g, {
                    bidderTimeout: a
                })
            }
        }
    };
    oJ.prototype.o = function() {
        this.output.notify()
    };
    var pJ = function(a, b, c, d, e, f, g, h) {
        _.U.call(this);
        this.j = a;
        this.C = b;
        this.o = c;
        this.m = d;
        this.B = e;
        this.J = f;
        this.T = g;
        this.pbjs = h
    };
    _.T(pJ, _.U);
    pJ.prototype.push = function(a) {
        var b = a.context,
            c = a.nextFunction;
        a = a.requestBidsConfig;
        if (this.pbjs) {
            var d = new $i;
            _.S(this, d);
            var e = new oJ(this.j, this.pbjs, this.B, this.J, this.T, a),
                f = new nJ(this.j, this.C, this.o, this.m, this.pbjs, a);
            N(d, e);
            N(d, f);
            N(d, new mJ(this.j, f.output, e.output, c, b, a));
            ij(d)
        }
    };
    var un = function(a, b) {
        this.push = J(a, 932, function(c) {
            b.push(c)
        })
    };
    var qJ = function(a, b, c, d, e, f, g, h, k, l, m) {
        Z.call(this, a, 951);
        this.D = window;
        this.I = X(this, b);
        this.B = Y(this, d);
        this.F = X(this, e);
        this.V = X(this, f);
        this.m = Y(this, g);
        this.Z = Y(this, h);
        this.M = X(this, k);
        TE(this, c);
        this.Dd = null != l ? l : W(this);
        this.Ed = null != m ? m : W(this)
    };
    _.T(qJ, Z);
    qJ.prototype.j = function() {
        var a = !!qm().pbjs_hooks;
        this.Ed.G(a);
        this.Dd.Ga(a ? null : _.ef());
        var b, c = null == (b = this.B.value) ? void 0 : b.size,
            d;
        b = (null == (d = this.m.value) ? void 0 : d.size) || _.tf(jA);
        d = this.I.value;
        var e, f = null != (e = qm().pbjs_hooks) ? e : [];
        e = new pJ(this.context, this.B.value, this.F.value, this.V.value, this.m.value, this.Z.value, this.M.value, d);
        _.S(this, e);
        f = _.y(f);
        for (var g = f.next(); !g.done; g = f.next()) e.push(g.value);
        if (c || b || a) qm().pbjs_hooks = vn(this.context, e);
        !c && !b || a || tn(d, this.D)
    };
    var rJ = function(a, b, c) {
        Z.call(this, a, 1093);
        this.m = new KE(b);
        this.B = X(this, c)
    };
    _.T(rJ, Z);
    rJ.prototype.j = function() {
        var a = this.m.value;
        if (a) {
            var b;
            (null == (b = this.B.value["*"]) ? 0 : b.td) && Array.isArray(a.installedModules) && (b = new Km("pbjs_modules"), ci(b, this.context), L(b, "pbmods", a.installedModules.join("~")), Mm(b))
        }
    };
    var sJ = function(a, b, c) {
        Z.call(this, a, 966);
        this.D = b;
        this.Fb = c
    };
    _.T(sJ, Z);
    sJ.prototype.j = function() {
        var a = this,
            b = Lf(this.D);
        if (b) this.Fb.G(b);
        else if ((b = Object.getOwnPropertyDescriptor(this.D, "_pbjsGlobals")) && !b.configurable) Wh("pdpg_error", function(d) {
            ci(d, a.context)
        }, _.tf(hA));
        else {
            var c = null;
            Object.defineProperty(this.D, "_pbjsGlobals", {
                set: function(d) {
                    c = d;
                    (d = Lf(a.D)) && a.Fb.G(d)
                },
                get: function() {
                    return c
                }
            })
        }
    };
    sJ.prototype.o = function() {};
    var tJ = function(a, b, c, d, e) {
        Z.call(this, a, 1146, _.tf(PA));
        this.Wa = b;
        this.D = d;
        this.m = e;
        this.B = SE(this, c)
    };
    _.T(tJ, Z);
    tJ.prototype.j = function() {
        var a = this.B.value,
            b = new $i;
        _.S(this, b);
        var c = new sJ(this.context, this.D, this.m.Fb);
        N(b, c);
        if (a) {
            a = new iJ(this.context, a, this.m.Jb, this.m.Zb, this.m.wc);
            N(b, a);
            var d = new jJ(this.context, this.Wa, a.Jb, a.m);
            N(b, d);
            var e = new kJ(this.context, a.B, this.m.mc, this.m.ac);
            N(b, e);
            var f = new lJ(this.context, a.F, this.m.Ze);
            N(b, f);
            d = new qJ(this.context, c.Fb, d.output, e.ac, this.m.Zb, e.mc, f.B, f.m, a.wc, this.m.Dd, this.m.Ed);
            N(b, d);
            c = new rJ(this.context, c.Fb, a.Jb);
            N(b, c)
        } else uJ(this);
        ij(b)
    };
    var uJ = function(a) {
        a.m.Jb.G({});
        a.m.ac.G(new _.w.Map);
        a.m.Zb.G(!1);
        a.m.mc.G(new _.w.Map);
        a.m.Dd.ga();
        a.m.Ed.G(!1);
        a.m.Ze.G(new Pw);
        a.m.wc.G(!1)
    };
    tJ.prototype.J = function(a) {
        this.o(a)
    };
    tJ.prototype.o = function() {
        uJ(this)
    };
    var vJ = /^v?\d{1,3}(\.\d{1,3}){0,2}(-pre)?$/,
        wJ = function(a, b, c, d, e, f, g) {
            Z.call(this, a, 920);
            this.X = b;
            this.aa = c;
            this.pbjs = f;
            this.I = g;
            this.B = W(this);
            this.F = W(this);
            this.M = [];
            this.m = new _.w.Map;
            this.ba = X(this, d);
            this.Z = Y(this, e.ac);
            this.V = X(this, e.Zb);
            this.ka = X(this, e.mc);
            this.ja = Y(this, e.Ze)
        };
    _.T(wJ, Z);
    wJ.prototype.j = function() {
        var a = xJ(this, this.pbjs);
        a ? (this.I.Ga(a), this.B.G(this.m), this.F.G(this.M)) : yJ(this)
    };
    wJ.prototype.J = function(a) {
        this.o(a)
    };
    wJ.prototype.o = function(a) {
        this.X.error($H(a.message));
        yJ(this)
    };
    var yJ = function(a) {
            a.I.ga();
            a.B.ga();
            a.F.ga()
        },
        xJ = function(a, b) {
            var c = (0, b.getEvents)(),
                d = c.filter(function(g) {
                    var h = g.args;
                    return "auctionEnd" === g.eventType && h.auctionId
                }),
                e = !1,
                f = a.ba.value.map(function(g) {
                    var h = new Uw,
                        k = function(da) {
                            return da === g.getDomId() || da === g.getAdUnitPath()
                        },
                        l, m = null != (l = zJ.get(g)) ? l : 0,
                        n;
                    l = null != (n = d.filter(function(da) {
                        var xa, Da, Ia;
                        return Number(null == (xa = da.args) ? void 0 : xa.timestamp) > m && (null == (Da = da.args) ? void 0 : null == (Ia = Da.adUnitCodes) ? void 0 : _.z(Ia, "find").call(Ia, k))
                    })) ? n : [];
                    if (!l.length) return a.M.push(g), [g, h];
                    var p;
                    n = null == (p = l.reduce(function(da, xa) {
                        return Number(xa.args.timestamp) > Number(da.args.timestamp) ? xa : da
                    })) ? void 0 : p.args;
                    if (!n) return [g, h];
                    var t = void 0 === n.bidderRequests ? [] : n.bidderRequests;
                    p = void 0 === n.bidsReceived ? [] : n.bidsReceived;
                    var u = n.auctionId;
                    n = n.timestamp;
                    if (!u || null == n || !t.length) return [g, h];
                    zJ.has(g) || _.Vo(g, function() {
                        return zJ.delete(g)
                    });
                    zJ.set(g, n);
                    n = Vw(h);
                    Math.random() < _.tf(iA) && b.version && vJ.test(b.version) && rn(n, 6, b.version);
                    var v;
                    Sw(n, null == (v = a.ja) ? void 0 : v.value);
                    v = Dh(function() {
                        return Tn(c, u)
                    });
                    l = sk(a.aa[g.getDomId()]);
                    t = _.y(t);
                    for (var x = t.next(), F = {}; !x.done; F = {
                            bidderCode: F.bidderCode,
                            ng: F.ng
                        }, x = t.next()) {
                        var D = x.value;
                        F.bidderCode = D.bidderCode;
                        var M = D.bids;
                        x = D.timeout;
                        F.ng = D.src;
                        D = D.auctionStart;
                        M = _.y(M);
                        for (var B = M.next(), K = {}; !B.done; K = {
                                Sc: K.Sc
                            }, B = M.next()) {
                            var V = B.value;
                            K.Sc = V.bidId;
                            var O = V.transactionId;
                            B = V.adUnitCode;
                            var aa = V.getFloor;
                            V = V.mediaTypes;
                            if (K.Sc && k(B)) {
                                e = !0;
                                In(n, g, B);
                                O && (null != _.Qi(n, 4) || rn(n, 4, O), a.m.has(O) || a.m.set(O, D));
                                null == Bo(n, 8) && _.z(Number, "isFinite").call(Number, x) && _.tw(n, 8, x);
                                var ma = _.z(p, "find").call(p, function(da) {
                                    return function(xa) {
                                        return xa.requestId === da.Sc
                                    }
                                }(K));
                                O = xn(n, function(da) {
                                    return function() {
                                        var xa = An(new Bn, da.bidderCode);
                                        _.H(Cn) && Dn(da.bidderCode, b, xa);
                                        switch (da.ng) {
                                            case "client":
                                                Hn(xa, 7, 1);
                                                break;
                                            case "s2s":
                                                Hn(xa, 7, 2)
                                        }
                                        return xa
                                    }
                                }(F)());
                                Kn(n, O, B, a.Z.value, a.V.value, a.ka.value, aa);
                                ma ? (zn(O, 1), "number" === typeof ma.timeToRespond && En(O, ma.timeToRespond), B = wn(ma, l, V), yn(O, B)) : (B = v().get(K.Sc)) && !B.nh ? En(zn(O, 2), Math.round(B.latency)) : (B = zn(O, 3), _.z(Number, "isFinite").call(Number, x) && En(B, x))
                            }
                        }
                    }
                    var ta;
                    (null == (ta = b.getConfig) ? 0 : ta.call(b).useBidCache) && Fn(n, g, u, l, b);
                    return [g, h]
                });
            return e ? new _.w.Map(f) : null
        },
        zJ = new _.w.Map;
    var AJ, BJ = function(a, b, c, d, e, f, g) {
        Z.call(this, a, 1019);
        this.aa = d;
        this.pbjs = e;
        this.B = new KE(f);
        this.F = new KE(g);
        this.m = Y(this, b);
        this.I = Y(this, c)
    };
    _.T(BJ, Z);
    BJ.prototype.j = function() {
        CJ(this);
        DJ(this)
    };
    var DJ = function(a) {
            if (!(Math.random() >= _.tf(gA))) {
                var b = (a.I.value || []).filter(function(k) {
                    return sk(a.aa[k.getDomId()]).some(function(l) {
                        return "hb_pb" === _.Qi(l, 1)
                    })
                });
                if (b.length) {
                    var c, d, e, f, g, h = (null == (c = a.pbjs) ? 0 : null == (d = c.adUnits) ? 0 : d.length) ? [].concat(_.Ee(new _.w.Set(null == (e = a.pbjs) ? void 0 : e.adUnits.map(function(k) {
                        return k.code
                    })))) : _.z(Object, "keys").call(Object, (null == (f = a.pbjs) ? void 0 : null == (g = f.getAdserverTargeting) ? void 0 : g.call(f)) || {});
                    c = new Km("haux");
                    L(c, "ius", b.map(function(k) {
                        return k.getAdUnitPath()
                    }).join("~"));
                    L(c, "dids", b.map(function(k) {
                        return k.getDomId()
                    }).join("~"));
                    L(c, "paucs", h.join("~"));
                    ci(c, a.context);
                    Mm(c)
                }
            }
        },
        CJ = function(a) {
            Wh("ppc_hrc", function(b) {
                var c;
                null != AJ || (AJ = null == (c = (_.E = window.google_js_reporting_queue = window.google_js_reporting_queue || [], _.z(_.E, "find")).call(_.E, function(k) {
                    return "1" === k.label
                })) ? void 0 : c.value);
                var d = gf("navigationStart", window);
                AJ && L(b, "lt", AJ);
                var e;
                L(b, "tids", [].concat(_.Ee((null == (e = a.m.value) ? void 0 : _.z(e, "keys").call(e)) || [])).join());
                var f;
                L(b, "asts", [].concat(_.Ee((null == (f = a.m.value) ? void 0 : _.z(f, "values").call(f)) || [])).map(function(k) {
                    return k - d
                }).join());
                var g;
                if (null == (g = a.B) ? 0 : g.value) L(b, "ht", a.B.value - d);
                else {
                    var h;
                    (null == (h = a.F) ? 0 : h.value) && L(b, "ht", 0)
                }
                ci(b, a.context)
            }, a.m.value ? _.tf(fA) : 0)
        };
    var Zn = function(a, b, c, d, e, f, g, h) {
        Z.call(this, a, 1153);
        this.X = b;
        this.aa = c;
        this.Ob = d;
        this.I = e;
        this.vc = f;
        this.m = h;
        this.M = X(this, f.Jb);
        this.B = new KE(f.Fb);
        g && (this.F = Y(this, g))
    };
    _.T(Zn, Z);
    Zn.prototype.j = function() {
        var a, b = null == (a = this.B) ? void 0 : a.value;
        if (a = EJ(this)) null != b && b.libLoaded ? "function" !== typeof b.getEvents ? (this.X.error(ZH()), a = !1) : a = !0 : a = !1;
        if (a) {
            a = new $i;
            var c = new wJ(this.context, this.X, this.aa, this.I, this.vc, b, this.m.mg);
            N(a, c);
            N(a, new BJ(this.context, c.B, c.F, this.aa, b, this.vc.Dd, this.vc.Ed));
            ij(a)
        } else this.m.mg.ga()
    };
    var EJ = function(a) {
        var b;
        if (null == (b = a.F) ? 0 : b.value) return !0;
        var c = a.M.value;
        if (!c) return !1;
        var d;
        return !(null == (d = c["*"]) || !d.td) || a.Ob.split(",").some(function(e) {
            var f;
            return !(null == (f = c[e]) || !f.td)
        })
    };
    var FJ = function(a, b, c, d, e) {
        Z.call(this, a, 982);
        this.F = d;
        this.Ge = e;
        this.B = X(this, b);
        this.m = X(this, c)
    };
    _.T(FJ, Z);
    FJ.prototype.j = function() {
        for (var a = this, b = _.y(["bidWon", "staleRender", "adRenderFailed", "adRenderSucceeded"]), c = b.next(), d = {}; !c.done; d = {
                Xc: d.Xc,
                Be: d.Be
            }, c = b.next()) d.Xc = c.value, d.Be = function(e) {
            return function(f) {
                if (a.F === f.adId) {
                    var g = new Km("hbm_brt");
                    ci(g, a.context);
                    L(g, "et", e.Xc);
                    L(g, "sf", a.B.value);
                    L(g, "qqid", a.m.value);
                    var h, k, l;
                    L(g, "bc", String(null != (l = null != (k = f.bidderCode) ? k : null == (h = f.bid) ? void 0 : h.bidder) ? l : ""));
                    Mm(g)
                }
            }
        }(d), (0, this.Ge.onEvent)(d.Xc, d.Be), _.Vo(this, function(e) {
            return function() {
                return void Gg(a.context, a.id, function() {
                    var f, g;
                    return void(null == (g = (f = a.Ge).offEvent) ? void 0 : g.call(f, e.Xc, e.Be))
                }, !0)
            }
        }(d))
    };
    FJ.prototype.o = function() {};
    var ao = function(a, b, c, d, e) {
        Z.call(this, a, 1134);
        this.Se = d;
        this.Bb = e;
        this.B = Y(this, b);
        this.m = new KE(c)
    };
    _.T(ao, Z);
    ao.prototype.j = function() {
        var a;
        if (this.B.value && null != (a = this.m.value) && a.onEvent) {
            a = new $i;
            var b = new FJ(this.context, this.Se, this.Bb, this.B.value, this.m.value);
            N(a, b);
            ij(a)
        }
    };
    var JJ = function(a, b, c, d) {
            var e = this;
            this.context = a;
            this.O = c;
            this.j = new _.w.Map;
            this.A = new _.w.Map;
            this.timer = _.kf(Cg);
            CG() && (_.lb(window, "DOMContentLoaded", zg(a, 334, function() {
                for (var f = _.y(e.j), g = f.next(); !g.done; g = f.next()) {
                    var h = _.y(g.value);
                    g = h.next().value;
                    h = h.next().value;
                    GJ(e, g, h) && e.j.delete(g)
                }
            })), b.listen(QG, function(f) {
                f = f.detail;
                var g = f.aa;
                return void HJ(e, IJ(d, f.lg), Wq(g, 20))
            }), b.listen(RG, function(f) {
                f = f.detail;
                var g = f.aa;
                f = IJ(d, f.lg);
                g = Wq(g, 20);
                var h = e.A.get(f);
                null != h ? EG(h, g) : HJ(e, f, g)
            }))
        },
        HJ = function(a, b, c) {
            GJ(a, b, c) ? a.j.delete(b) : (a.j.set(b, c), _.Vo(b, function() {
                return a.j.delete(b)
            }))
        },
        GJ = function(a, b, c) {
            var d = Ch(b);
            if ("DIV" !== (null == d ? void 0 : d.nodeName)) return !1;
            d = new BG({
                D: window,
                timer: a.timer,
                Lb: d,
                jb: function(e) {
                    return void Eg(a.context, 336, e)
                },
                Ak: _.H(oB)
            });
            if (!d.j) return !1;
            EG(d, c);
            a.A.set(b, d);
            YG(a.O, b, function() {
                return void a.A.delete(b)
            });
            return !0
        };
    var KJ = function(a, b, c, d, e) {
        Z.call(this, a, 1058);
        this.D = b;
        this.da = c;
        this.output = RE(this);
        d && (this.m = Y(this, d.Wb));
        TE(this, e)
    };
    _.T(KJ, Z);
    KJ.prototype.j = function() {
        var a;
        if ( of ("shared-storage", this.D.document) && null != (a = this.m) && a.value && !_.H(kA) && _.G(this.da, 5)) {
            a = {
                message: "goog:spam:client_age",
                pvsid: this.context.pvsid,
                sendPingToRCS: _.H(lA)
            };
            var b = this.m.value;
            b(a)
        }
        this.output.notify()
    };
    var Dr = function(a, b) {
        Z.call(this, a, 1110);
        this.D = b;
        this.output = W(this)
    };
    _.T(Dr, Z);
    Dr.prototype.j = function() {
        var a = this.D;
        a = _.H(lB) && void 0 !== a.credentialless && (_.H(mB) || a.crossOriginIsolated);
        this.output.G(a)
    };
    var LJ = function(a, b, c, d, e, f) {
        Z.call(this, a, 935);
        this.O = b;
        this.W = c;
        this.ca = d;
        this.output = RE(this);
        this.m = X(this, e);
        TE(this, f)
    };
    _.T(LJ, Z);
    LJ.prototype.j = function() {
        var a = this.W,
            b = a.fa;
        a = a.aa;
        for (var c = _.y(this.m.value), d = c.next(); !d.done; d = c.next()) {
            d = d.value;
            var e = a[d.getDomId()],
                f = this.ca;
            fo(e, b) && !this.O.ic(d) && ho(d, f, e, b)
        }
        this.output.notify()
    };
    var MJ = function(a, b, c, d, e) {
        Z.call(this, a, 864);
        this.O = b;
        this.W = c;
        this.ca = d;
        this.m = RE(this);
        this.B = X(this, e)
    };
    _.T(MJ, Z);
    MJ.prototype.j = function() {
        for (var a = _.y(this.B.value), b = a.next(); !b.done; b = a.next())
            if (b = b.value, _.Zq(this.O, b)) {
                var c = this.W,
                    d = c.fa;
                c = c.aa[b.getDomId()];
                fo(c, d) && ho(b, this.ca, c, d);
                dH(this.O, b);
                var e = void 0,
                    f = void 0;
                null != (e = null != (f = co(c, 10)) ? f : _.G(d, 11)) && e && ho(b, this.ca, c, d)
            }
        this.m.notify()
    };
    var no = function(a, b, c, d) {
        Z.call(this, a, 879);
        this.B = b;
        this.m = W(this);
        c && (this.F = X(this, d))
    };
    _.T(no, Z);
    no.prototype.j = function() {
        var a, b;
        (null != (b = null == (a = this.F) ? void 0 : a.value) ? b : TB(this.B)) ? (a = UB(this.B), this.m.Ta(a)) : this.m.ga()
    };
    var mo = function(a, b, c) {
        Z.call(this, a, 896);
        this.m = b;
        this.Cc = W(this);
        c && TE(this, c)
    };
    _.T(mo, Z);
    mo.prototype.j = function() {
        this.Cc.G(TB(this.m))
    };
    var NJ = function(a, b) {
        Z.call(this, a, 1018);
        this.me = RE(this);
        this.m = Y(this, b)
    };
    _.T(NJ, Z);
    NJ.prototype.j = function() {
        var a, b, c, d = _.y(null != (c = null == (a = this.m.value) ? void 0 : null == (b = _.Zg(a, LB, 5)) ? void 0 : Bd(b, 1, Cc)) ? c : []);
        for (a = d.next(); !a.done; a = d.next()) mf(a.value);
        this.me.notify()
    };
    var OJ = function(a, b) {
        Z.call(this, a, 1070);
        this.m = W(this);
        this.B = Y(this, b)
    };
    _.T(OJ, Z);
    OJ.prototype.j = function() {
        var a, b = null == (a = this.B.value) ? void 0 : _.Zg(a, LB, 5);
        if (b) {
            a = [];
            for (var c = _.y(Bd(b, 2, Kc)), d = c.next(); !d.done; d = c.next()) {
                var e = d.value;
                d = new lx;
                var f = new jx;
                e = _.xh(f, 1, null == e ? e : _.Ic(e));
                d = _.tg(d, 2, e);
                null != Bo(b, 3) && (e = new hx, e = Hn(e, 1, 1), f = _.kw(b, 3), e = _.Nj(e, 2, f), _.tg(d, 3, e));
                a.push(d)
            }
            this.m.G(a)
        } else this.m.G([])
    };
    var PJ = function(a, b, c, d) {
        Z.call(this, a, 1016);
        this.output = W(this);
        this.B = Y(this, b);
        this.m = Y(this, c);
        this.F = VE(this, [b, d])
    };
    _.T(PJ, Z);
    PJ.prototype.j = function() {
        if (this.m.value) {
            var a = this.B.value || this.F.value;
            a && QJ(this, a) ? this.output.G(a) : (this.output.ga(), RJ(this, a))
        } else this.output.ga()
    };
    PJ.prototype.J = function(a) {
        this.o(a)
    };
    PJ.prototype.o = function() {
        this.output.ga()
    };
    var QJ = function(a, b) {
            return bh(a.m.value, fx, 1).some(function(c) {
                return _.R(c, 1) === b
            })
        },
        RJ = function(a, b) {
            Wh("pp_iris_failure", function(c) {
                L(c, "fnc", b);
                ci(c, a.context)
            }, _.tf(SA))
        };
    var SJ = function(a, b) {
        Z.call(this, a, 1015);
        this.m = W(this);
        this.B = Y(this, b)
    };
    _.T(SJ, Z);
    SJ.prototype.j = function() {
        if (this.B.value)
            if (bh(this.B.value, fx, 1).length) {
                var a = bh(this.B.value, fx, 1)[0];
                (_.E = [2, 3], _.z(_.E, "includes")).call(_.E, _.Xj(a, 3, 0)) ? this.m.G(_.R(a, 1)) : this.m.ga()
            } else this.m.ga();
        else this.m.ga()
    };
    SJ.prototype.J = function(a) {
        this.o(a)
    };
    SJ.prototype.o = function() {
        this.m.ga()
    };
    var TJ = function(a, b, c) {
        Z.call(this, a, 1017);
        this.D = c;
        this.output = RE(this);
        this.m = Y(this, b)
    };
    _.T(TJ, Z);
    TJ.prototype.j = function() {
        var a = this;
        if (this.m.value) {
            var b = gC(this.D, this.m.value, function(c) {
                if (!c) {
                    c = iy(b.j);
                    for (var d = _.y(document.getElementsByName("googlefcPresent")), e = d.next(); !e.done; e = d.next()) c.wi(e.value)
                }
                a.output.notify()
            });
            b.start()
        } else this.output.notify()
    };
    TJ.prototype.J = function(a) {
        this.o(a)
    };
    TJ.prototype.o = function() {
        this.output.notify()
    };
    var UJ = function(a, b) {
        Z.call(this, a, 1056);
        this.output = W(this);
        this.m = X(this, b)
    };
    _.T(UJ, Z);
    UJ.prototype.j = function() {
        var a = og(this.m.value.getAdUnitPath());
        this.output.G(a)
    };
    UJ.prototype.J = function(a) {
        this.o(a)
    };
    UJ.prototype.o = function() {
        this.output.ga()
    };
    var VJ = function(a, b, c, d) {
        Z.call(this, a, 906, _.tf(QA));
        this.m = RE(this);
        if (b === b.top) {
            var e = new $i;
            _.S(this, e);
            var f = new SJ(a, c);
            N(e, f);
            d = new fp(a, d, QG, function(g) {
                return g.detail.aa
            });
            N(e, d);
            d = new UJ(a, d.output);
            N(e, d);
            a = new PJ(a, f.m, c, d.output);
            N(e, a);
            b = new TJ(this.context, a.output, b);
            N(e, b);
            UE(this, b.output);
            ij(e)
        } else this.m.notify()
    };
    _.T(VJ, Z);
    VJ.prototype.j = function() {
        this.m.notify()
    };
    VJ.prototype.J = function(a) {
        this.o(a)
    };
    VJ.prototype.o = function() {
        this.m.notify()
    };
    var Cs = function(a, b, c, d, e) {
        Z.call(this, a, 934);
        this.D = b;
        this.slotId = c;
        TE(this, d);
        this.m = X(this, e)
    };
    _.T(Cs, Z);
    Cs.prototype.j = function() {
        var a = this;
        this.slotId.listen(Xo, function(b) {
            b = b.detail.data;
            try {
                var c = JSON.parse(b);
                if ("gpi-uoo" === c.googMsgType) {
                    var d = c.userOptOut,
                        e = c.clearAdsData,
                        f = a.m.value,
                        g = new Hx;
                    var h = rn(g, 1, d ? "1" : "0");
                    var k = rn(_.Nj(h, 2, 2147483647), 3, "/");
                    var l = rn(k, 4, a.D.location.hostname);
                    var m = new _.VD(a.D);
                    XD(m, "__gpi_opt_out", l, f);
                    if (d || e) YD(m, "__gads", f), YD(m, "__gpi", f)
                }
            } catch (n) {}
        })
    };
    var WJ = function(a, b, c) {
        Z.call(this, a, 944);
        this.D = b;
        this.m = new _.VD(this.D);
        this.B = X(this, c)
    };
    _.T(WJ, Z);
    WJ.prototype.j = function() {
        var a = this.B.value;
        if (WD(this.m, a)) {
            var b = _.il(this.m, "__gpi_opt_out", a);
            if (b) {
                var c = new Hx;
                b = rn(c, 1, b);
                b = rn(_.Nj(b, 2, 2147483647), 3, "/");
                b = rn(b, 4, this.D.location.hostname);
                XD(this.m, "__gpi_opt_out", b, a)
            }
        }
    };
    var XJ = function(a, b, c, d) {
        Z.call(this, a, 821);
        this.da = b;
        this.za = c;
        this.m = X(this, d)
    };
    _.T(XJ, Z);
    XJ.prototype.j = function() {
        if (_.G(this.da, 5))
            for (var a = new _.w.Set, b = _.y(bh(this.m.value, Hx, 14)), c = b.next(); !c.done; c = b.next()) {
                c = c.value;
                var d = void 0,
                    e = null != (d = sw(c, 5)) ? d : 1;
                a.has(e) || (XD(this.za, 2 === e ? "__gpi" : "__gads", c, this.da), a.add(e))
            }
    };
    var YJ = function() {
            this.A = [];
            this.hostpageLibraryTokens = [];
            this.j = {}
        },
        ZJ = function(a, b) {
            if (!_.z(a.A, "includes").call(a.A, b) && (_.E = [1, 2, 3], _.z(_.E, "includes")).call(_.E, b)) {
                var c = $D[b];
                if (c) {
                    var d = b + "_hostpage_library";
                    if (c = _.Nm(document, c)) c.id = d
                }
                a.A.push(b);
                b = new aE(b);
                a.hostpageLibraryTokens.push(b);
                a = qm();
                a.hostpageLibraryTokens || (a.hostpageLibraryTokens = {});
                a.hostpageLibraryTokens[b.j] = b.A
            }
        },
        $J = function(a, b, c) {
            var d;
            a.j[b] = null != (d = a.j[b]) ? d : new _.w.Set;
            a.j[b].add(c)
        },
        ur = function(a, b) {
            var c, d;
            a = null != (d = null == (c = a.j[b]) ? void 0 : _.z(c, "values").call(c)) ? d : [];
            return [].concat(_.Ee(a))
        };
    var aK = function(a, b, c, d) {
        Z.call(this, a, 822);
        this.slotId = b;
        this.Ra = c;
        this.m = X(this, d)
    };
    _.T(aK, Z);
    aK.prototype.j = function() {
        for (var a = this, b = Bd(this.m.value, 23, Ac), c = _.y(b), d = c.next(); !d.done; d = c.next()) d = d.value, ZJ(this.Ra, d), $J(this.Ra, d, this.slotId);
        b.length && Wh("gpt_hp", function(e) {
            ci(e, a.context);
            L(e, "ls", b.join())
        }, _.tf(mA))
    };
    var xo = 0;
    var Ns = function(a, b, c, d, e, f) {
        Z.call(this, a, 721);
        this.D = b;
        this.I = Y(this, c);
        this.B = X(this, d);
        this.m = X(this, e);
        this.F = X(this, f)
    };
    _.T(Ns, Z);
    Ns.prototype.j = function() {
        var a = this,
            b = this.I.value,
            c, d = null == b ? void 0 : null == (c = _.Qi(b, 1)) ? void 0 : c.toUpperCase(),
            e;
        b = null == b ? void 0 : null == (e = _.Qi(b, 2)) ? void 0 : e.toUpperCase();
        if (d && b) {
            e = this.B.value;
            c = this.m.value;
            var f = this.F.value,
                g = f.style.height,
                h = f.style.width,
                k = f.style.display,
                l = f.style.position,
                m = zo(e.id + "_top", d),
                n = zo(e.id + "_bottom", b);
            _.Ph(n, {
                position: "relative",
                top: "calc(100vh - 48px)"
            });
            f.appendChild(m);
            f.appendChild(n);
            _.Ph(c, {
                position: "absolute",
                top: "24px",
                clip: "rect(0, auto, auto, 0)",
                width: "100vw",
                height: "calc(100vh - 48px)"
            });
            _.Ph(e, {
                position: "fixed",
                top: "0",
                height: "100vh"
            });
            var p;
            _.Ph(f, {
                position: "relative",
                display: (null == (p = this.D.screen.orientation) ? 0 : p.angle) ? "none" : "block",
                width: "100vw",
                height: "100vh"
            });
            NI(this, 722, this.D, "orientationchange", function() {
                var t;
                (null == (t = a.D.screen.orientation) ? 0 : t.angle) ? _.Ph(f, {
                    display: "none"
                }): _.Ph(f, {
                    display: "block"
                })
            });
            _.Vo(this, function() {
                _.ry(m);
                _.ry(n);
                f.style.position = l;
                f.style.height = g;
                f.style.width = h;
                f.style.display = k
            })
        }
    };
    var bK = _.Ft(["https://td.doubleclick.net/td/kb?kbli=", ""]),
        As = function(a, b, c) {
            Z.call(this, a, 1007);
            this.m = Y(this, b);
            c && TE(this, c)
        };
    _.T(As, Z);
    As.prototype.j = function() {
        var a = this.m.value;
        if (null != a && a.length && null === document.getElementById("koelBirdIGRegisterIframe")) {
            var b = document.createElement("iframe");
            a = kb(bK, encodeURIComponent(a.join()));
            b.removeAttribute("srcdoc");
            if (a instanceof _.wu) throw new tv("TrustedResourceUrl", 3);
            var c = "allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox allow-storage-access-by-user-activation".split(" ");
            b.setAttribute("sandbox", "");
            for (var d = 0; d < c.length; d++) b.sandbox.supports && !b.sandbox.supports(c[d]) || b.sandbox.add(c[d]);
            a = _.Ua(a);
            void 0 !== a && (b.src = a);
            b.id = "koelBirdIGRegisterIframe";
            document.head.appendChild(b)
        }
    };
    var ls = function(a, b) {
        Z.call(this, a, 1176);
        this.B = b;
        this.m = W(this)
    };
    _.T(ls, Z);
    ls.prototype.j = function() {
        var a, b = this.m,
            c = b.Ga,
            d = null != (a = this.B) ? a : new ms;
        a = null != Bo(d, 2) ? null != Co(d) && 0 !== (0, _.hn)() ? Bo(d, 2) * Co(d) : Bo(d, 2) : null;
        c.call(b, a)
    };
    var us = function(a, b, c, d, e, f) {
        f = void 0 === f ? Ao : f;
        Z.call(this, a, 666);
        this.B = f;
        this.output = RE(this);
        TE(this, b);
        e && TE(this, e);
        this.m = X(this, c);
        this.F = Y(this, d)
    };
    _.T(us, Z);
    us.prototype.j = function() {
        var a = this.F.value,
            b = this.m.value;
        null == a || 0 > a || !Gh(b) ? this.output.notify() : cK(this, a, b)
    };
    var cK = function(a, b, c) {
        var d = a.B(b, zg(a.context, 291, function(e, f) {
            e = _.y(e);
            for (var g = e.next(); !g.done; g = e.next())
                if (g = g.value, !(0 >= g.intersectionRatio)) {
                    f.unobserve(g.target);
                    a.output.notify();
                    break
                }
        }));
        d ? (d.observe(c), _.Vo(a, function() {
            d.disconnect()
        })) : a.output.notify()
    };
    var ss = function(a, b, c, d, e, f, g) {
        Z.call(this, a, 664);
        this.slotId = b;
        this.Pc = c;
        this.O = d;
        this.output = RE(this);
        this.B = X(this, e);
        this.m = Y(this, f);
        g && TE(this, g)
    };
    _.T(ss, Z);
    ss.prototype.j = function() {
        var a = this,
            b, c = null != (b = this.m.value) ? b : 0;
        if (0 !== (0, _.hn)() || 0 < c)
            if (b = nE(document), oE(document) && b && (0 < cH(this.O, this.slotId) || !dK(this)) && b) {
                var d = NI(this, 324, document, b, function() {
                    oE(document) || (d && d(), a.output.notify())
                });
                if (d) return
            }
        this.output.notify()
    };
    var dK = function(a) {
        try {
            var b = top;
            if (!b) return !0;
            var c = Qs(b.document, b).y,
                d = c + a.Pc.height,
                e = a.B.value;
            return e.y >= c && e.y <= d
        } catch (f) {
            return !0
        }
    };
    var rs = function(a, b) {
        Z.call(this, a, 676);
        this.output = W(this);
        this.m = X(this, b)
    };
    _.T(rs, Z);
    rs.prototype.j = function() {
        var a = rh(this.m.value);
        this.output.G(a)
    };
    var Do = function(a, b, c, d, e, f) {
        f = void 0 === f ? _.w.globalThis.IntersectionObserver : f;
        Z.call(this, a, 886);
        this.ha = b;
        this.O = c;
        this.B = d;
        this.m = f;
        this.output = RE(this);
        e && TE(this, e)
    };
    _.T(Do, Z);
    Do.prototype.j = function() {
        this.ha.some(function(a) {
            return !Gh(Ch(a))
        }) ? this.output.notify() : LE(this.output, eK(this, this.B))
    };
    var eK = function(a, b) {
        return new _.w.Promise(function(c) {
            if (a.m) {
                for (var d = new a.m(function(h, k) {
                        h.some(function(l) {
                            return 0 < l.intersectionRatio
                        }) && (k.disconnect(), c())
                    }, {
                        rootMargin: b + "%"
                    }), e = _.y(a.ha), f = e.next(), g = {}; !f.done; g = {
                        Ld: g.Ld
                    }, f = e.next()) {
                    f = f.value;
                    g.Ld = Ch(f);
                    if (!g.Ld) return;
                    d.observe(g.Ld);
                    YG(a.O, f, function(h) {
                        return function() {
                            return void d.unobserve(h.Ld)
                        }
                    }(g))
                }
                _.Vo(a, function() {
                    return void d.disconnect()
                })
            } else c()
        })
    };
    var fK = {},
        Fo = (fK[64] = bI, fK[134217728] = cI, fK[32768] = dI, fK[536870912] = eI, fK[8] = fI, fK[512] = gI, fK[1048576] = hI, fK[4194304] = jI, fK);
    var Lo = function(a) {
        return "22639388115" === og(a.getAdUnitPath())
    };
    var gK = function(a, b, c, d, e, f, g, h) {
        Z.call(this, a, 1109);
        this.ca = c;
        this.fa = d;
        this.m = e;
        this.F = f;
        this.I = g;
        this.B = h;
        this.output = W(this);
        this.M = Y(this, b)
    };
    _.T(gK, Z);
    gK.prototype.j = function() {
        var a = this,
            b = this.M.value;
        b && (this.B.push(function() {
            b.addService(a.m)
        }), Ty(this.ca, function() {
            a.I();
            a.F(b);
            _.G(a.fa, 4) && a.m.refresh([b])
        }))
    };
    var hK = function(a, b, c, d, e, f) {
        Z.call(this, a, 1108);
        this.adUnitPath = b;
        this.format = c;
        this.ob = d;
        this.B = e;
        this.X = f;
        this.output = W(this);
        this.m = W(this)
    };
    _.T(hK, Z);
    hK.prototype.j = function() {
        var a = Uo(this.context, this.X, this.B, {
            Qg: this.format,
            adUnitPath: this.adUnitPath,
            ob: this.ob
        });
        this.m.Ga(a);
        this.output.Ga(a ? a.j : null)
    };
    var iK = function(a, b, c, d) {
        Z.call(this, a, 1111);
        this.m = c;
        this.B = d;
        this.F = Y(this, b)
    };
    _.T(iK, Z);
    iK.prototype.j = function() {
        var a = this.F.value;
        a && (a = AF(this.m, a.getSlotElementId()), Xi(a, 27, lx, this.B))
    };
    var jK = function(a, b, c, d, e, f, g, h, k, l, m, n, p, t) {
        $i.call(this);
        this.context = a;
        this.ca = b;
        this.adUnitPath = c;
        this.format = d;
        this.ob = e;
        this.V = f;
        this.I = g;
        this.M = h;
        this.F = k;
        this.fa = l;
        this.Z = m;
        this.ba = n;
        this.X = p;
        this.B = t;
        a = N(this, new hK(this.context, this.adUnitPath, this.format, this.ob, this.ba, this.X));
        this.B && N(this, new iK(this.context, a.output, this.Z, this.B));
        N(this, new gK(this.context, a.output, this.ca, this.fa, this.V, this.I, this.M, this.F));
        this.j = {
            xm: a.m
        }
    };
    _.T(jK, $i);
    var kK = [{
            name: "Interstitial",
            format: 1,
            Vf: 5
        }, {
            name: "TopAnchor",
            format: 2,
            Vf: 2
        }, {
            name: "BottomAnchor",
            format: 3,
            Vf: 3
        }],
        lK = function(a, b, c, d, e, f, g) {
            Z.call(this, a, 789);
            this.ca = b;
            this.googletag = c;
            this.B = d;
            this.m = e;
            this.X = f;
            this.F = g;
            this.output = W(this)
        };
    _.T(lK, Z);
    lK.prototype.j = function() {
        var a = this;
        kK.filter(function(b) {
            return (new RegExp("gam" + b.name + "Demo", "i")).test(a.F)
        }).forEach(function(b) {
            var c = b.name;
            b = b.Vf;
            var d, e;
            null == (d = window.console) || null == (e = d.warn) || e.call(d, "GPT - Demo " + c + " ENABLED");
            c = new jK(a.context, a.ca, "/22639388115/example/" + c.toLowerCase(), b, !1, a.googletag.pubads(), function(f) {
                return void a.googletag.display(f)
            }, function() {
                a.googletag.pubadsReady || a.googletag.enableServices()
            }, a.googletag.cmd, a.m.j, a.m, a.B, a.X);
            _.S(a, c);
            ij(c)
        })
    };
    var mK = function(a, b, c) {
        Z.call(this, a, 1163);
        _.H(Ds);
        this.m = X(this, b);
        c && TE(this, c)
    };
    _.T(mK, Z);
    mK.prototype.j = function() {
        this.m.value.xi();
        this.m.value.Aa()
    };
    var Fs = function(a, b, c, d, e, f, g, h, k, l) {
        Z.call(this, a, 682);
        this.O = b;
        this.format = c;
        this.slotId = d;
        this.D = e;
        this.B = W(this);
        this.m = Y(this, f);
        this.F = X(this, g);
        this.V = X(this, h);
        this.I = Y(this, k);
        this.M = X(this, l)
    };
    _.T(Fs, Z);
    Fs.prototype.j = function() {
        var a = this,
            b;
        if (null != (b = this.m.value) && _.G(b, 12, !1)) {
            b = this.I.value.lj;
            var c = _.Zq(this.O, this.slotId),
                d = this.V.value,
                e = this.F.value;
            _.Ph(e, {
                "max-height": "30vh",
                overflow: "hidden"
            });
            if (nK) nK.ti(e, this.M.value);
            else {
                nK = new b(this.context, this.format, e, this.D, d, this.O, this.slotId);
                b = {};
                d = _.y(bh(this.m.value, vx, 13));
                for (var f = d.next(); !f.done; f = d.next()) f = f.value, b[_.Qi(f, 1)] = _.Qi(f, 2);
                nK.vi(b);
                _.H(Ds) ? (nK.oi(), this.B.G(nK)) : nK.Aa();
                XG(this.O, this.slotId, function() {
                    nK && (nK.wa(), nK = null);
                    c && _.aH(a.O, a.slotId)
                })
            }
            _.Vo(this, function() {
                return _.ry(e)
            })
        }
    };
    var nK = null;
    var Es = function(a, b, c, d, e, f, g, h, k, l) {
        Z.call(this, a, 1155);
        this.O = b;
        this.format = c;
        this.slotId = d;
        this.D = e;
        this.wf = f;
        this.B = g;
        this.M = h;
        this.F = k;
        this.I = l;
        this.m = Y(this, f)
    };
    _.T(Es, Z);
    Es.prototype.j = function() {
        var a;
        if (null != (a = this.m.value) && null != fl(a, 12)) {
            a = new $i;
            _.S(this, a);
            var b, c = (null == (b = this.m.value) ? 0 : _.G(b, 15)) ? N(a, new Wo(this.context, this.slotId, Xo, function(d) {
                d = d.detail.data;
                try {
                    var e = JSON.parse(d);
                    return "floating" === e.type && "loaded" === e.message
                } catch (f) {}
                return !1
            })).output : void 0;
            b = new Fs(this.context, this.O, this.format, this.slotId, this.D, this.wf, this.B, this.M, this.F, this.I);
            N(a, b);
            b = new mK(this.context, b.B, c);
            N(a, b);
            ij(a)
        }
    };
    var cp = function(a, b, c) {
        Z.call(this, a, 1150);
        this.D = b;
        this.output = RE(this);
        TE(this, c)
    };
    _.T(cp, Z);
    cp.prototype.j = function() {
        var a = this;
        this.D.location.hash = "goog_game_inter";
        _.Vo(this, function() {
            "goog_game_inter" === a.D.location.hash && (a.D.location.hash = "")
        });
        LE(this.output, new _.w.Promise(function(b) {
            return void NI(a, a.id, a.D, "hashchange", function(c) {
                Du(c.oldURL, "#goog_game_inter") && b()
            })
        }))
    };
    var oK = function(a, b) {
            this.serviceName = b;
            this.slot = a.j
        },
        pK = function(a, b) {
            oK.call(this, a, b);
            this.isEmpty = !1;
            this.slotContentChanged = !0;
            this.sourceAgnosticLineItemId = this.sourceAgnosticCreativeId = this.lineItemId = this.labelIds = this.creativeTemplateId = this.creativeId = this.campaignId = this.advertiserId = this.size = null;
            this.isBackfill = !1;
            this.companyIds = this.yieldGroupIds = null
        };
    _.T(pK, oK);
    pK.prototype.setSize = function(a) {
        this.size = a;
        return this
    };
    var qK = function() {
        oK.apply(this, arguments)
    };
    _.T(qK, oK);
    var rK = function(a, b, c) {
        oK.call(this, a, b);
        this.inViewPercentage = c
    };
    _.T(rK, oK);
    var sK = function() {
        oK.apply(this, arguments)
    };
    _.T(sK, oK);
    var tK = function() {
        oK.apply(this, arguments)
    };
    _.T(tK, oK);
    var uK = function() {
        oK.apply(this, arguments)
    };
    _.T(uK, oK);
    var vK = function() {
        oK.apply(this, arguments)
    };
    _.T(vK, oK);
    var wK = function(a, b, c, d) {
        oK.call(this, a, b);
        this.makeRewardedVisible = c;
        this.payload = d
    };
    _.T(wK, oK);
    var xK = function(a, b, c) {
        oK.call(this, a, b);
        this.payload = c
    };
    _.T(xK, oK);
    var yK = function() {
        oK.apply(this, arguments)
    };
    _.T(yK, oK);
    var zK = function(a, b, c) {
        oK.call(this, a, b);
        this.makeGameManualInterstitialVisible = c
    };
    _.T(zK, oK);
    var AK = function() {
        oK.apply(this, arguments)
    };
    _.T(AK, oK);
    var dp = function(a, b, c, d, e, f) {
        Z.call(this, a, 1151);
        this.slotId = b;
        this.xa = c;
        TE(this, d);
        a = [e];
        f && a.push(f);
        f = new ME(a, !0);
        yE(this.C, f)
    };
    _.T(dp, Z);
    dp.prototype.j = function() {
        Xq(this.xa, "gameManualInterstitialSlotClosed", 1148, new AK(this.slotId, "publisher_ads"))
    };
    var ap = function(a, b, c, d) {
        Z.call(this, a, 1149);
        this.slotId = b;
        this.xa = c;
        this.output = RE(this);
        TE(this, d)
    };
    _.T(ap, Z);
    ap.prototype.j = function() {
        var a = new _.Cf,
            b = a.promise;
        Xq(this.xa, "gameManualInterstitialSlotReady", 1147, new zK(this.slotId, "publisher_ads", a.resolve));
        0 < _.tf(NA) ? LE(this.output, b.then(function() {
            return Uy(_.tf(NA))
        })) : LE(this.output, b)
    };
    var $o = function(a, b, c) {
        c = void 0 === c ? BK : c;
        Z.call(this, a, 1158);
        this.m = c;
        this.B = 1E3 * _.tf(Zo);
        this.output = RE(this);
        TE(this, b)
    };
    _.T($o, Z);
    $o.prototype.j = function() {
        var a = this;
        this.m.Fe++ ? LE(this.output, Uy(this.B * (this.m.Fe - 2) + (this.B - (Date.now() - this.m.Hf))).then(function() {
            a.m.Hf = Date.now();
            a.m.Fe--
        })) : (this.m.Hf = Date.now(), Uy(this.B).then(function() {
            return void a.m.Fe--
        }), this.output.notify())
    };
    var BK = {
        Fe: 0,
        Hf: Date.now()
    };
    var CK = {
            width: "100%",
            height: "100%",
            left: "0",
            top: "0"
        },
        DK = {
            width: "100%",
            height: "100%",
            transform: "translate(-50%, -50%)",
            left: "50%",
            top: "50%"
        },
        bp = function(a, b, c, d, e) {
            Z.call(this, a, 1150);
            this.D = b;
            this.m = X(this, c);
            this.F = X(this, d);
            TE(this, e);
            this.B = new _.aF(this.D)
        };
    _.T(bp, Z);
    bp.prototype.j = function() {
        var a = 0 === (0, _.hn)() ? "rgba(1,1,1,0.5)" : "white";
        _.Ph(this.m.value, _.z(Object, "assign").call(Object, {
            position: "absolute"
        }, 0 === (0, _.hn)() ? DK : CK));
        _.Ph(this.F.value, _.z(Object, "assign").call(Object, {
            "background-color": a,
            opacity: "1",
            position: "fixed",
            margin: "0",
            padding: "0",
            "z-index": "2147483647",
            display: "block"
        }, CK));
        _.Vo(this, _.nF(this.D.document, this.D));
        a = {};
        uy(this.m.value).postMessage(JSON.stringify((a.googMsgType = "sth", a.msg_type = "i-view", a)), "*");
        if (this.D === this.D.top) {
            var b = _.cF(this.B, 2147483646);
            _.gF(b);
            _.Vo(this, function() {
                return void _.hF(b)
            })
        }
    };
    var EK = function(a, b, c, d, e, f, g, h) {
        Z.call(this, a, 683);
        this.slotId = b;
        this.V = c;
        this.B = d;
        this.m = W(this);
        this.F = X(this, e);
        this.Z = X(this, f);
        this.I = Y(this, g);
        this.M = Y(this, h)
    };
    _.T(EK, Z);
    EK.prototype.j = function() {
        var a = this,
            b = this.Z.value,
            c = this.F.value,
            d = this.M.value.Cj,
            e = new _.sF(this.context),
            f = null != ah(this.B, 14) ? 60 * Wq(this.B, 14) : 604800;
        b = new d(window, c, b, e, this.V, FK(this), Lo(this.slotId), function() {
            return void a.wa()
        }, f, this.I.value);
        b.V();
        _.S(this, b);
        this.m.G(b)
    };
    var FK = function(a) {
        var b = {};
        a = _.y(bh(a.B, vx, 13));
        for (var c = a.next(); !c.done; c = a.next()) c = c.value, b[_.Qi(c, 1)] = _.Qi(c, 2);
        return b
    };
    var GK = function(a, b, c, d, e) {
        Z.call(this, a, 1143);
        this.B = d;
        this.F = e;
        TE(this, b);
        a = new ME([d, e], !0);
        yE(this.C, a);
        this.m = X(this, c)
    };
    _.T(GK, Z);
    GK.prototype.j = function() {
        var a = new Km("int_pm");
        L(a, "ts", Date.now());
        L(a, "qem", this.m.value);
        L(a, "cr", Number(this.B.sb));
        L(a, "ph", Number(this.F.sb));
        Mm(a)
    };
    GK.prototype.o = function() {};
    var Gs = function(a, b, c, d, e, f, g, h, k, l) {
        Z.call(this, a, 1141);
        this.slotId = b;
        this.I = c;
        this.D = d;
        this.B = f;
        this.M = g;
        this.qb = h;
        this.F = k;
        this.Bb = l;
        this.output = W(this);
        this.m = Y(this, e)
    };
    _.T(Gs, Z);
    Gs.prototype.j = function() {
        var a = this;
        if (this.m.value) {
            var b = new $i;
            _.S(this, b);
            var c = N(b, new EK(this.context, this.slotId, this.I, this.m.value, this.B, this.M, this.qb, this.F));
            _.Vo(c, function() {
                return void a.wa()
            });
            if (Math.random() < _.tf(HA)) {
                var d = N(b, new $I(this.context, this.D, "pagehide")),
                    e = N(b, new Wo(this.context, this.slotId, Xo, function(f) {
                        f = f.detail;
                        try {
                            var g = JSON.parse(f.data);
                            return "sth" === g.googMsgType && "i-adframe-load" === g.msg_type
                        } catch (h) {
                            return !1
                        }
                    }));
                N(b, new GK(this.context, c.m, this.Bb, e.output, d.output))
            }
            this.output.Ta(c.m.promise.then(function() {
                return !0
            }));
            ij(b)
        } else this.output.G(!1)
    };
    var HK = function(a) {
        this.module = a
    };
    HK.prototype.toString = function() {
        return String(this.module)
    };
    _.IK = new HK(2);
    _.JK = new HK(5);
    var zs = function(a, b, c, d, e, f) {
        Z.call(this, a, 846);
        this.F = b;
        this.format = c;
        this.output = W(this);
        this.m = Y(this, d);
        this.B = Y(this, e);
        f && TE(this, f)
    };
    _.T(zs, Z);
    zs.prototype.j = function() {
        var a, b = (2 === this.format || 3 === this.format) && !(null == (a = this.m.value) || !_.G(a, 12, !1));
        a = 5 === this.format && this.B.value;
        b || a ? this.output.Ta(this.F.load(_.IK)) : this.output.ga()
    };
    var KK = function(a, b, c, d, e) {
        Z.call(this, a, 905);
        this.W = b;
        this.m = c;
        this.output = RE(this);
        this.B = X(this, d);
        TE(this, e)
    };
    _.T(KK, Z);
    KK.prototype.j = function() {
        for (var a = _.y(this.B.value), b = a.next(); !b.done; b = a.next()) {
            var c = void 0;
            switch (null == (c = this.W.aa[b.value.getDomId()]) ? void 0 : Ko(c)) {
                case 2:
                case 3:
                case 5:
                    this.m.load(_.IK);
                    return
            }
        }
        this.output.notify()
    };
    var LK = function(a, b, c, d, e, f) {
        Z.call(this, a, 696);
        this.slotId = b;
        this.xa = c;
        TE(this, d);
        VE(this, [e, f])
    };
    _.T(LK, Z);
    LK.prototype.j = function() {
        Xq(this.xa, "rewardedSlotClosed", 703, new yK(this.slotId, "publisher_ads"))
    };
    var MK = function(a, b, c, d, e) {
        Z.call(this, a, 694);
        this.slotId = b;
        this.xa = c;
        TE(this, d);
        this.m = Y(this, e)
    };
    _.T(MK, Z);
    MK.prototype.j = function() {
        var a, b = null == (a = this.m.value) ? void 0 : a.payload;
        Xq(this.xa, "rewardedSlotGranted", 702, new xK(this.slotId, "publisher_ads", null != b ? b : null))
    };
    var NK = {
            width: "100%",
            height: "100%",
            left: "0",
            top: "0"
        },
        OK = function(a, b, c, d, e, f) {
            Z.call(this, a, 693);
            this.D = b;
            this.I = f;
            this.output = RE(this);
            this.B = X(this, c);
            this.F = X(this, d);
            TE(this, e);
            this.m = new _.aF(this.D)
        };
    _.T(OK, Z);
    OK.prototype.j = function() {
        var a = this;
        if (!this.I.sb) {
            var b = 0 === (0, _.hn)() ? "rgba(1,1,1,0.5)" : "white";
            _.Ph(this.F.value, _.z(Object, "assign").call(Object, {
                "background-color": b,
                opacity: "1",
                position: "fixed",
                margin: "0",
                padding: "0",
                "z-index": "2147483647",
                display: "block"
            }, NK));
            _.Vo(this, _.nF(this.D.document, this.D));
            uy(this.B.value).postMessage(JSON.stringify({
                type: "rewarded",
                message: "visible"
            }), "*");
            if (this.D === this.D.top) {
                this.D.location.hash = "goog_rewarded";
                var c = _.cF(this.m, 2147483646);
                _.gF(c);
                _.Vo(this, function() {
                    _.hF(c);
                    "goog_rewarded" === a.D.location.hash && (a.D.location.hash = "")
                })
            }
            this.output.notify()
        }
    };
    var PK = function(a, b, c, d) {
        Z.call(this, a, 695);
        this.D = b;
        this.m = X(this, c);
        TE(this, d)
    };
    _.T(PK, Z);
    PK.prototype.j = function() {
        if (this.D === this.D.top) var a = uy(this.m.value),
            b = NI(this, 503, this.D, "hashchange", function(c) {
                Du(c.oldURL, "#goog_rewarded") && (a.postMessage(JSON.stringify({
                    type: "rewarded",
                    message: "back_button"
                }), "*"), b())
            })
    };
    var QK = function(a, b, c, d) {
        Z.call(this, a, 692);
        this.slotId = b;
        this.xa = c;
        this.output = RE(this);
        this.m = X(this, d)
    };
    _.T(QK, Z);
    QK.prototype.j = function() {
        var a = this.m.value,
            b = new _.Cf,
            c = b.promise,
            d;
        Xq(this.xa, "rewardedSlotReady", 701, new wK(this.slotId, "publisher_ads", b.resolve, null != (d = a.payload) ? d : null));
        LE(this.output, c)
    };
    var RK = {
            width: "100%",
            height: "100%",
            left: "0",
            top: "0"
        },
        SK = {
            width: "60%",
            height: "60%",
            transform: "translate(-50%, -50%)",
            left: "50%",
            top: "50%"
        },
        TK = function(a, b, c, d, e) {
            Z.call(this, a, 691);
            this.F = W(this);
            this.B = RE(this);
            this.I = X(this, c);
            this.m = VE(this, [d, e])
        };
    _.T(TK, Z);
    TK.prototype.j = function() {
        if ("ha_before_make_visible" === this.m.value.message) this.B.notify();
        else {
            var a = _.H(MA) ? RK : SK;
            _.Ph(this.I.value, _.z(Object, "assign").call(Object, {
                position: "absolute"
            }, 0 === (0, _.hn)() ? a : RK));
            this.F.G(this.m.value)
        }
    };
    var Hs = function(a, b, c, d, e, f) {
        $i.call(this);
        var g = gp(b, "granted", a);
        N(this, g);
        var h = gp(b, "prefetched", a);
        N(this, h);
        var k = gp(b, "closed", a);
        N(this, k);
        var l = gp(b, "ha_before_make_visible", a);
        N(this, l);
        var m = new TK(a, b, e, h.output, l.output);
        N(this, m);
        h = new QK(a, b, c, m.F);
        N(this, h);
        f = new OK(a, d, e, f, h.output, m.B);
        N(this, f);
        N(this, new PK(a, d, e, f.output));
        N(this, new MK(a, b, c, h.output, g.output));
        N(this, new LK(a, b, c, h.output, k.output, l.output))
    };
    _.T(Hs, $i);
    var $r = function(a, b) {
        Z.call(this, a, 1031);
        this.D = b
    };
    _.T($r, Z);
    $r.prototype.j = function() {
        this.D === this.D.top && ak(this.D)
    };
    var Yr = function(a, b, c) {
        c = void 0 === c ? Gf : c;
        Z.call(this, a, 1063);
        this.D = b;
        this.B = c;
        this.m = W(this)
    };
    _.T(Yr, Z);
    Yr.prototype.j = function() {
        var a = this;
        if (_.H(AA) && Hf(this.D)) {
            var b = null,
                c = 0,
                d = zg(this.context, this.id, function() {
                    var f, g, h, k;
                    return _.nb(function(l) {
                        switch (l.j) {
                            case 1:
                                return f = a.B(a.D), g = "0", l.o = 2, _.ob(l, f, 4);
                            case 4:
                                g = null != (h = l.A) ? h : "0";
                                1E4 < g.length && (Eg(a.context, a.id, new om("ML:" + g.length)), g = "0");
                                l.j = 3;
                                l.o = 0;
                                break;
                            case 2:
                                k = qb(l), Eg(a.context, a.id, k);
                            case 3:
                                b = g, c = _.ef(a.D) + 3E5, l.j = 0
                        }
                    })
                });
            var e = (_.E = d(), _.z(_.E, "finally")).call(_.E, function() {
                e = void 0
            });
            this.m.G(function() {
                var f, g;
                return _.nb(function(h) {
                    if (1 == h.j) {
                        f = _.ef(a.D) >= c;
                        g = null === b || "0" === b;
                        if (!f && !g) {
                            h.j = 2;
                            return
                        }
                        e || (e = (_.E = d(), _.z(_.E, "finally")).call(_.E, function() {
                            e = void 0
                        }));
                        return _.ob(h, e, 2)
                    }
                    return h.return(b)
                })
            })
        } else this.m.G(function() {
            return _.w.Promise.resolve("")
        })
    };
    Yr.prototype.o = function() {
        this.m.G(function() {
            return _.w.Promise.resolve("")
        })
    };
    var UK = function(a, b) {
        Z.call(this, a, 1091);
        this.output = W(this);
        b && (this.m = Y(this, b))
    };
    _.T(UK, Z);
    UK.prototype.j = function() {
        var a;
        null != (a = this.m) && a.value ? this.output.Ta(this.m.value()) : this.output.G("")
    };
    UK.prototype.o = function() {
        this.output.G("")
    };
    var Ap = function(a, b, c) {
        Z.call(this, a, 1122);
        this.ca = b;
        this.m = c;
        RE(this, c)
    };
    _.T(Ap, Z);
    Ap.prototype.j = function() {
        var a = this;
        LE(this.m, new _.w.Promise(function(b) {
            return void qE(b, a.ca)
        }))
    };
    var as = function(a, b, c) {
        Z.call(this, a, 1107);
        this.D = b;
        this.output = this.yb = c
    };
    _.T(as, Z);
    as.prototype.j = function() {
        var a = of ("run-ad-auction", this.D.document),
            b = of ("browsing-topics", this.D.document),
            c = of ("shared-storage", this.D.document),
            d = of ("attribution-reporting", this.D.document),
            e = 0;
        a && (e |= 1);
        b && (e |= 4);
        c && (e |= 8);
        d && (e |= 2);
        0 === e ? this.output.ga() : this.output.G(e)
    };
    as.prototype.o = function() {
        this.output.ga()
    };
    var VK = function(a, b, c, d) {
        Z.call(this, a, 1118);
        this.m = b;
        this.B = d;
        W(this, d);
        c && (this.F = Y(this, c))
    };
    _.T(VK, Z);
    VK.prototype.j = function() {
        var a = new vE;
        a = _.Ld(a, 1, _.Ec(this.m), 0);
        if (this.m & 1) {
            var b, c, d = WK(null != (c = null == (b = this.F) ? void 0 : b.value) ? c : null);
            _.tg(a, 2, d)
        }
        this.B.G(a)
    };
    var WK = function(a) {
        switch (_.tf(bs)) {
            case 1:
                var b = 1;
                break;
            case 2:
                b = 2;
                break;
            case 3:
                b = 3;
                break;
            default:
                b = 0
        }
        var c = uE(new tE, b);
        null == a || a.forEach(function(d, e) {
            var f = Jd(c, 2, sE);
            var g = f.set,
                h = new sE;
            d = _.Kd(h, 1, d, Dc);
            g.call(f, e, d)
        });
        return c
    };
    var Cp = function(a, b, c, d) {
        Z.call(this, a, 1165);
        this.B = c;
        this.Ie = d;
        this.m = Y(this, b.Dh)
    };
    _.T(Cp, Z);
    Cp.prototype.j = function() {
        if (this.m.value) {
            var a = new $i,
                b = new VK(this.context, this.m.value, this.B, this.Ie.cg);
            N(a, b);
            ij(a)
        } else this.Ie.cg.ga()
    };
    var XK = function(a, b, c) {
        Z.call(this, a, 873);
        this.D = b;
        this.m = X(this, c)
    };
    _.T(XK, Z);
    XK.prototype.j = function() {
        var a = this.context,
            b = this.m.value,
            c = this.D;
        !qm()._pubconsole_disable_ && (b = df("google_pubconsole", b, c)) && (b = b.split("|"), "1" !== b[0] && "0" !== b[0] || Hm(a, c))
    };
    var YK = function() {
        this.resources = {}
    };
    var $p = "3rd party ad content";
    var ZK = function(a, b, c) {
        _.U.call(this);
        this.context = a;
        this.gb = b;
        this.o = c;
        a = c.slotId;
        b = c.size;
        this.j = "height" === c.mj ? "fluid" : [b.width, b.height];
        this.ed = Jh(a);
        this.fd = $p
    };
    _.T(ZK, _.U);
    ZK.prototype.render = function() {
        var a = this.gb,
            b = this.o,
            c = b.slotId,
            d = b.W.aa,
            e = b.size,
            f = b.sf,
            g = b.isBackfill,
            h = b.Qd;
        Pf(b.Sh, _.oy(b.ca), null != f ? f : "", !1);
        Vq(_.kf(Cg), "5", Wq(d[c.getDomId()], 20));
        Xq(c, Yq, 801, {
            Lg: 0 === a.kind ? a.wb : "",
            isBackfill: g
        });
        a = this.m();
        h && a && a.setAttribute("data-google-container-id", h);
        Xq(c, $q, 825, {
            size: e,
            isEmpty: !1
        });
        return a
    };
    ZK.prototype.loaded = function(a) {
        var b = this.o,
            c = b.slotId,
            d = b.xa;
        b = b.W.aa;
        Xq(c, LG, 844);
        a && a.setAttribute("data-load-complete", !0);
        Xq(d, "slotOnload", 710, new sK(c, "publisher_ads"));
        Vq(_.kf(Cg), "6", Wq(b[c.getDomId()], 20))
    };
    var $K = function(a) {
        a = a.gb;
        a = 0 === a.kind ? a.wb : "";
        var b = "",
            c = !0,
            d = "sf";
        b = void 0 === b ? "" : b;
        c = void 0 === c ? !1 : c;
        d = void 0 === d ? "" : d;
        if (a) {
            var e = a.toLowerCase(); - 1 < e.indexOf("<!doctype") || -1 < e.indexOf("<html") ? c && ng(d, 2) : (c && ng(d, 3), a = _.H(pB) ? a : "<!doctype html><html><head>" + b + "</head><body>" + a + "</body></html>")
        } else c && ng(d, 1);
        return a
    };
    ZK.prototype.A = function() {
        _.U.prototype.A.call(this);
        this.o.Sh.removeAttribute("data-google-query-id")
    };
    ZK.prototype.J = function(a) {
        var b = this,
            c = aL(this, function() {
                return void b.loaded(c.j)
            }, a);
        _.Vo(this, function() {
            100 != c.status && (c.Gf() && (XF(c.o), c.F = 0), window.clearTimeout(c.ua), c.ua = -1, c.B = 3, c.A && (c.A.wa(), c.A = null), _.Pe(window, "resize", c.I), _.Pe(window, "scroll", c.I), c.m && c.j && c.m == _.sy(c.j) && c.m.removeChild(c.j), c.j = null, c.m = null, c.status = 100)
        });
        return c
    };
    var aL = function(a, b, c) {
        var d = a.o,
            e = d.Oh,
            f = d.isBackfill,
            g = d.Dj,
            h = d.Qd,
            k = d.ke,
            l = d.Ye,
            m = d.Ra,
            n = Array.isArray(a.j) ? new _.uh(Number(a.j[0]), Number(a.j[1])) : 1;
        return new eG({
            Yf: d.Gg,
            ed: a.ed,
            fd: a.fd,
            content: $K(a),
            size: n,
            ej: !!g,
            xh: b,
            Ph: null != e ? e : void 0,
            permissions: {
                ie: null != fl(c, 1) ? !!_.G(c, 1) : !f,
                je: null != fl(c, 2) ? !!_.G(c, 2) : !1
            },
            gd: !!qm().fifWin,
            tk: vI ? vI : vI = Wk(),
            Mi: $k(),
            hostpageLibraryTokens: m.hostpageLibraryTokens,
            jb: function(p, t) {
                return void Eg(a.context, p, t)
            },
            uniqueId: h,
            Nh: BF(),
            ke: null != k ? k : void 0,
            lb: void 0,
            Ye: null != l ? l : void 0
        })
    };
    var bL = function() {
        ZK.apply(this, arguments)
    };
    _.T(bL, ZK);
    bL.prototype.m = function() {
        var a = this.o,
            b = a.W,
            c = b.fa;
        a = b.aa[a.slotId.getDomId()];
        b = new al;
        c = gl([b, c.hc(), null == a ? void 0 : a.hc()]);
        return ZK.prototype.J.call(this, c).j
    };
    bL.prototype.C = function() {
        return !1
    };
    var ps = function(a, b, c, d, e, f) {
        Z.call(this, a, 669);
        this.fa = b;
        this.aa = c;
        this.output = W(this);
        this.B = Y(this, d);
        this.m = X(this, e);
        f && (this.F = X(this, f))
    };
    _.T(ps, Z);
    ps.prototype.j = function() {
        var a;
        if (null == (a = this.F) ? 0 : a.value) this.output.G(!0);
        else {
            var b;
            a = !(null == (b = this.B.value) || !_.Qi(b, 1)) && (_.G(this.aa, 12) || fl(this.fa, 13)) || this.m.value;
            this.output.G(!!a)
        }
    };
    var cL = function(a, b, c, d) {
        Z.call(this, a, 833);
        this.m = b;
        this.D = c;
        this.output = RE(this);
        TE(this, d)
    };
    _.T(cL, Z);
    cL.prototype.j = function() {
        var a = this.m,
            b = this.D,
            c = BF();
        c = {
            version: vI ? vI : vI = Wk(),
            Qe: c
        };
        c = lG.Nj(c);
        var d = TF(b);
        c = d ? ue(c, new _.w.Map([
            ["n", String(d)]
        ])) : c;
        d = vf(Yk);
        for (var e = new _.w.Map, f = 0; f < d.length; f += 2) e.set(d[f], d[f + 1]);
        c = ue(c, e);
        var g;
        a.resources[c.toString()] || (null == (g = qm()) ? 0 : g.fifWin) || (a.resources[c.toString()] = 1, b = b.document, a = _.Oe("IFRAME"), a.src = _.Za(c).toString(), a.style.visibility = "hidden", a.style.display = "none", b = b.getElementsByTagName("script"), b.length && (b = b[b.length - 1], b.parentNode && b.parentNode.insertBefore(a, b.nextSibling)));
        this.output.notify()
    };
    var dL = function(a, b, c) {
        Z.call(this, a, 1135);
        this.B = b;
        this.F = c;
        this.m = W(this)
    };
    _.T(dL, Z);
    dL.prototype.j = function() {
        for (var a = new ax, b = new _.w.Map, c = new _.w.Set, d = _.y(this.B), e = d.next(); !e.done; e = d.next()) {
            var f = e.value;
            if (null != _.Qi(f, 1)) {
                e = new _.w.Set;
                b.set(_.R(f, 1).toString(), e);
                f = _.y(bh(f, Zw, 2));
                for (var g = f.next(); !g.done; g = f.next()) {
                    g = g.value;
                    var h = _.R(g, 1);
                    e.add(h);
                    c.has(h) || Xi(a, 2, Zw, g);
                    c.add(h)
                }
            }
        }
        this.F.G(b);
        this.m.G(a)
    };
    var eL = function(a, b, c) {
        Z.call(this, a, 1051);
        this.B = b;
        this.m = Y(this, c)
    };
    _.T(eL, Z);
    eL.prototype.j = function() {
        var a = this;
        this.m.value && uj(this.m.value, function(b, c) {
            Eg(a.context, b, c);
            var d, e;
            null == (d = a.B) || null == (e = d.error) || e.call(d, c)
        })
    };
    var fL = function(a, b) {
        Z.call(this, a, 1040);
        this.m = W(this);
        this.B = Y(this, b)
    };
    _.T(fL, Z);
    fL.prototype.j = function() {
        var a = this.B.value;
        a ? (a = bh(a, Zw, 2), this.m.G(a.map(function(b) {
            var c = pw(b, $w);
            b = _.R(b, 1);
            c = c && (_.z(c, "startsWith").call(c, location.protocol) || _.z(c, "startsWith").call(c, "data:") && 80 >= c.length) ? _.se(dq(c)) : void 0;
            return {
                ae: b,
                url: c
            }
        }))) : this.m.G([])
    };
    var gL = function(a, b, c, d, e) {
        Z.call(this, a, 813);
        this.F = b;
        this.m = d;
        this.qb = e;
        c && (this.I = Y(this, c));
        e && (this.B = Y(this, e))
    };
    _.T(gL, Z);
    gL.prototype.j = function() {
        var a = this,
            b, c, d = null != (c = this.F) ? c : null == (b = this.I) ? void 0 : b.value,
            e, f;
        b = null != (f = this.m) ? f : null == (e = this.B) ? void 0 : e.value;
        if (null != d && d.length && b)
            for (d = _.y(d), e = d.next(); !e.done; e = d.next()) f = e.value, e = f.ae, (f = f.url) && _.S(this, yj(e, f, b, this.qb, function(g, h) {
                Eg(a.context, g, h);
                var k, l;
                null == (l = (k = console).error) || l.call(k, h)
            }))
    };
    var hL = function(a, b, c) {
        Z.call(this, a, 1045);
        this.m = b;
        this.qb = c
    };
    _.T(hL, Z);
    hL.prototype.j = function() {
        var a = new $i;
        _.S(this, a);
        var b = new fL(this.context, this.m);
        N(a, b);
        b = new gL(this.context, void 0, b.m, void 0, this.qb);
        N(a, b);
        ij(a)
    };
    var gs = function(a, b, c, d) {
        Z.call(this, a, 706);
        this.D = b;
        this.output = null != d ? d : W(this);
        this.m = X(this, c)
    };
    _.T(gs, Z);
    gs.prototype.j = function() {
        this.output.Ga(af(this.m.value, this.D))
    };
    var iL = function(a, b, c, d) {
        Z.call(this, a, 1154);
        this.fb = c;
        this.m = d;
        this.B = Y(this, b)
    };
    _.T(iL, Z);
    iL.prototype.j = function() {
        if (this.B.value) {
            var a = new $i;
            _.S(this, a);
            var b = new gs(this.context, window, this.fb, this.m.qb);
            N(a, b);
            b = new dL(this.context, this.B.value, this.m.Qf);
            N(a, b);
            N(a, new hL(this.context, b.m, this.m.qb));
            b = new eL(this.context, console, this.m.qb);
            N(a, b);
            ij(a)
        } else this.m.Qf.ga(), this.m.qb.ga()
    };
    var jL = function(a, b, c, d, e, f) {
        Z.call(this, a, 1096);
        this.D = b;
        this.da = c;
        this.m = d;
        this.dd = e;
        this.B = Y(this, f)
    };
    _.T(jL, Z);
    jL.prototype.j = function() {
        var a, b = null == (a = this.B.value) ? void 0 : a.Ai;
        b && b(this.m, this.da, this.D, this.dd, this.context.Sb)
    };
    var kL = function(a, b) {
        Z.call(this, a, 1095);
        this.m = b;
        this.output = W(this)
    };
    _.T(kL, Z);
    kL.prototype.j = function() {
        this.output.Ta(this.m.load(_.JK))
    };
    var lL = function(a, b, c, d, e) {
        Z.call(this, a, 1090);
        this.m = b;
        this.dd = c;
        this.B = X(this, d);
        this.F = Y(this, e)
    };
    _.T(lL, Z);
    lL.prototype.j = function() {
        var a = this.F.value,
            b;
        if (a && null != (b = _.Zg(a, _.px, 1)) && _.qx(b).length) {
            b = new $i;
            _.S(this, b);
            var c = new kL(this.context, this.m);
            N(b, c);
            a = new jL(this.context, window, this.B.value, a, this.dd, c.output);
            N(b, a);
            ij(b)
        }
    };
    var qr = function(a, b) {
        var c = this,
            d = [],
            e = [];
        this.addSize = zg(a, 88, function(f, g) {
            var h;
            if (h = gm(f)) h = g, h = fm(h) || Array.isArray(h) && h.every(fm);
            if (h) {
                if (_.H(bB)) {
                    var k = hq(g);
                    h = k.size;
                    k.gg && (g = jk([f, g]), g = g.substring(1, g.length - 1), Q(b, new ik(151, ["SizeMappingBuilder.addSize", g])), g = h)
                }
                d.push([f, g])
            } else e.push([f, g]), Q(b, kk("SizeMappingBuilder.addSize", [f, g]));
            return c
        });
        this.build = zg(a, 89, function() {
            if (e.length) return Q(b, vH(dl(e))), null;
            sa(d);
            return d
        })
    };
    var mL = function(a, b, c, d, e, f) {
        f = void 0 === f ? Aj : f;
        Z.call(this, a, 939);
        this.B = b;
        this.D = c;
        this.da = d;
        this.m = f;
        this.output = RE(this);
        TE(this, e)
    };
    _.T(mL, Z);
    mL.prototype.j = function() {
        var a = this.m,
            b = this.D,
            c = new Lp;
        var d = new Kp;
        d = _.rg(d, 1, String(this.B));
        c = _.tg(c, 5, d);
        c = _.I(c, 4, 1);
        c = _.I(c, 2, 2);
        c = _.rg(c, 3, this.context.xb || this.context.vb);
        c = _.Mp(c, 6, _.G(this.da, 5));
        a.call(this, b, c);
        this.output.notify()
    };
    var xs = function(a, b, c, d, e) {
        Z.call(this, a, 807);
        this.D = b;
        this.output = RE(this);
        this.m = Y(this, c);
        this.B = X(this, d);
        e && TE(this, e)
    };
    _.T(xs, Z);
    xs.prototype.j = function() {
        var a = this.m.value;
        if (a && !this.B.value) {
            var b = Vy(this.D);
            GG(new FG(b, a)) || this.T(new om("Cannot create top window frame"))
        }
        this.output.notify()
    };
    var nL = function(a, b) {
        Z.call(this, a, 820);
        this.D = b;
        this.output = W(this)
    };
    _.T(nL, Z);
    nL.prototype.j = function() {
        var a = this;
        this.output.Ta(Ej(this.D).then(function(b) {
            var c = b.de,
                d = b.status;
            Wh("gpt_etu", function(e) {
                ci(e, a.context);
                L(e, "rsn", d)
            }, c ? void 0 : 0);
            return null != c ? c : ""
        }))
    };
    var oq = function(a, b, c, d) {
        Z.call(this, a, 979);
        this.D = b;
        this.m = Y(this, d);
        this.output = c
    };
    _.T(oq, Z);
    oq.prototype.j = function() {
        var a = this;
        if (_.H(fB)) this.output.ga();
        else {
            var b;
            Ij(this.D, null != (b = this.m.value) ? b : !1).then(function(c) {
                a.output.G(c)
            })
        }
    };
    oq.prototype.o = function() {
        this.output.ga()
    };
    var nq = function(a, b, c, d) {
        Z.call(this, a, 1156);
        this.D = b;
        this.be = c;
        this.m = {
            Wb: new Yn
        };
        this.B = X(this, d)
    };
    _.T(nq, Z);
    nq.prototype.j = function() {
        if (_.G(this.B.value, 5)) {
            var a = new $i;
            _.S(this, a);
            var b = new oq(this.context, this.D, this.m.Wb, this.be);
            N(a, b);
            ij(a)
        } else this.m.Wb.ga()
    };
    var oL = function(a, b, c) {
        Z.call(this, a, 1123);
        this.m = b;
        this.B = c;
        W(this, b);
        W(this, c)
    };
    _.T(oL, Z);
    oL.prototype.j = function() {
        _.H(dB) ? (this.m.G(!1), this.B.ga()) : (this.m.G(!0), this.B.G(10))
    };
    var pL = function(a, b, c, d, e) {
        Z.call(this, a, 978);
        this.D = b;
        this.F = c;
        this.m = e;
        W(this, e);
        this.B = Y(this, d.Wb)
    };
    _.T(pL, Z);
    pL.prototype.j = function() {
        if (_.H(eB)) this.m.ga();
        else if (this.B.value) {
            var a = Rj(this.B.value, this.D, new _.sF(this.context), this.F);
            this.m.Ta(a)
        } else this.m.ga()
    };
    pL.prototype.o = function() {
        this.m.ga()
    };
    var qq = function(a, b, c, d, e) {
        Z.call(this, a, 1164);
        this.B = b;
        this.rc = c;
        this.m = e;
        this.F = X(this, d)
    };
    _.T(qq, Z);
    qq.prototype.j = function() {
        if (_.H(gB) && ! of ("browsing-topics", window.document)) this.m.Pd.ga(), this.m.qc.G(!1), this.m.Od.ga();
        else if (this.F.value) {
            var a = new $i;
            _.S(this, a);
            N(a, new pL(this.context, window, this.B, this.rc, this.m.Pd));
            var b = new oL(this.context, this.m.qc, this.m.Od);
            N(a, b);
            ij(a)
        } else this.m.Pd.G(5), this.m.qc.G(!1), this.m.Od.G(5)
    };
    var qL = function(a, b, c) {
        Z.call(this, a, 1101);
        this.D = b;
        this.m = c
    };
    _.T(qL, Z);
    qL.prototype.j = function() {
        if (!_.H(eB)) {
            var a = this.m,
                b = Fj(this.D);
            b.setTopicsCalled ? _.w.Promise.resolve() : (b.setTopicsCalled = !0, a({
                message: "goog:topics:frame:get:topics",
                skipTopicsObservation: !1,
                sendPingToRCS: !1
            }))
        }
    };
    var sq = function(a, b, c, d) {
        Z.call(this, a, 1180);
        this.D = b;
        this.B = Y(this, d);
        this.m = Y(this, c.Wb)
    };
    _.T(sq, Z);
    sq.prototype.j = function() {
        if (this.B.value && this.m.value) {
            var a = new $i;
            _.S(this, a);
            N(a, new qL(this.context, this.D, this.m.value));
            ij(a)
        }
    };
    var rL = function(a, b, c) {
        Z.call(this, a, 1171);
        this.m = c;
        W(this, c);
        this.fg = X(this, b)
    };
    _.T(rL, Z);
    rL.prototype.j = function() {
        this.m.G(0 === this.fg.value.kind)
    };
    var sL = function(a, b, c) {
        Z.call(this, a, 1160);
        this.m = c;
        W(this, c);
        this.B = X(this, b)
    };
    _.T(sL, Z);
    sL.prototype.j = function() {
        var a = this;
        if (this.B.value.requestId) {
            var b = this.B.value.request;
            Wh("td_ba", function(d) {
                ci(d, a.context);
                L(d, "sz", b.byteLength)
            }, 1);
            if (32768 < b.byteLength) this.m.G({
                kind: 1,
                reason: 3
            });
            else {
                var c = Db(b, 3);
                c.length ? this.m.G({
                    kind: 0,
                    signal: c,
                    requestId: this.B.value.requestId
                }) : this.m.G({
                    kind: 1,
                    reason: 5
                })
            }
        } else this.m.G({
            kind: 1,
            reason: this.B.value
        })
    };
    sL.prototype.o = function() {
        this.m.G({
            kind: 1,
            reason: 4
        })
    };
    var tL = function(a, b) {
        Z.call(this, a, 1159);
        this.output = W(this);
        this.m = b
    };
    _.T(tL, Z);
    tL.prototype.j = function() {
        var a = this;
        this.output.Ta(this.m.getInterestGroupAdAuctionData({
            seller: "https://securepubads.g.doubleclick.net"
        }).catch(function(b) {
            a.T(b);
            return 4
        }))
    };
    tL.prototype.o = function() {
        this.output.G(4)
    };
    var uq = function(a, b, c, d, e) {
        Z.call(this, a, 1177);
        this.I = b;
        this.m = d;
        this.B = e;
        W(this, d);
        W(this, e);
        this.F = X(this, c)
    };
    _.T(uq, Z);
    uq.prototype.j = function() {
        if (this.F.value) {
            var a = new $i;
            _.S(this, a);
            var b = new tL(this.context, this.I);
            N(a, b);
            b = new sL(this.context, b.output, this.m);
            N(a, b);
            b = new rL(this.context, this.m, this.B);
            N(a, b);
            ij(a)
        } else this.m.G({
            kind: 1,
            reason: 2
        }), this.B.G(!1)
    };
    var uL = function(a, b, c, d) {
        Z.call(this, a, 881);
        this.ya = b;
        this.Pa = c;
        this.m = d;
        this.output = W(this)
    };
    _.T(uL, Z);
    uL.prototype.j = function() {
        if (4 === _.tf(bs)) {
            var a = _.Zg(this.Pa, Ox, 23);
            if (a) {
                var b;
                if (0 !== (null == (b = this.m) ? void 0 : b.kind)) throw new TypeError("Received remote auction config despite " + (this.m ? "invalid" : "absent") + " remarketing input.");
                this.output.G({
                    seller: "https://securepubads.g.doubleclick.net",
                    interestGroupBuyers: _.zk(this.Pa, 3),
                    requestId: this.m.requestId,
                    serverResponse: Uj(Vj(a, 1)),
                    resolveToConfig: !_.G(this.Pa, 14)
                })
            } else this.output.ga()
        } else {
            b = this.output;
            a = b.G;
            var c = this.Pa;
            for (var d = rm(this.context, this.ya), e = !_.G(c, 14) && !0, f = {}, g = _.y(bh(c, Mx, 7)), h = g.next(); !h.done; h = g.next()) h = h.value, f[_.R(h, 1)] = JSON.parse(_.R(h, 2));
            if (g = _.Zg(c, Lx, 6)) f["https://googleads.g.doubleclick.net"] = g.toJSON(), f["https://td.doubleclick.net"] = g.toJSON();
            g = {};
            h = _.y(bh(c, Nx, 11));
            for (var k = h.next(); !k.done; k = h.next()) k = k.value, g[_.R(k, 1)] = _.kw(k, 2);
            k = {};
            0 !== _.kw(c, 21) && (k["*"] = _.kw(c, 21));
            var l = {};
            Wq(c, 18) && (l["https://googleads.g.doubleclick.net"] = Wq(c, 18), l["https://td.doubleclick.net"] = Wq(c, 18));
            h = _.y(Jd(c, 24, Rx));
            for (var m = h.next(); !m.done; m = h.next()) {
                var n = m.value;
                Wq(n[1], 4) && (m = n[0], n = Wq(n[1], 4), l[m] = n)
            }
            h = _.R(c, 1).split("/td/")[0];
            m = _.R(c, 19);
            m = "" !== m ? h + m : void 0;
            var p;
            n = null == (p = _.Zg(c, Qx, 5)) ? void 0 : p.clone();
            var t;
            null != n && null != (t = _.Zg(n, Px, 5)) && Ck(t, 2);
            p = _.z(Object, "assign").call(Object, {}, {
                seller: h,
                decisionLogicUrl: _.R(c, 1),
                trustedScoringSignalsUrl: _.R(c, 2),
                interestGroupBuyers: _.zk(c, 3),
                sellerExperimentGroupId: Wq(c, 17),
                auctionSignals: JSON.parse(_.R(c, 4) || "{}"),
                sellerSignals: (null == n ? void 0 : n.toJSON()) || [],
                sellerTimeout: _.kw(c, 15) || 50,
                perBuyerExperimentGroupIds: l,
                perBuyerSignals: f,
                perBuyerTimeouts: g,
                perBuyerCumulativeTimeouts: k
            }, m ? {
                directFromSellerSignals: m
            } : {}, e ? {
                resolveToConfig: e
            } : {});
            if (null == c ? 0 : _.G(xr(c, Qx, 5), 25)) p.sellerCurrency = "USD", p.perBuyerCurrencies = _.z(Object, "fromEntries").call(Object, Id(c, 22));
            t = new Qx;
            "0" !== lw(xr(xr(c, Qx, 5), Px, 5)) && (f = new Px, g = lw(xr(xr(c, Qx, 5), Px, 5)), f = _.Ld(f, 2, null == g ? g : _.Ic(g), "0"), _.tg(t, 5, f));
            xr(c, Qx, 5).getEscapedQemQueryId() && (f = xr(c, Qx, 5).getEscapedQemQueryId(), _.rg(t, 2, f));
            c = _.z(Object, "assign").call(Object, {}, {
                seller: h,
                decisionLogicUrl: _.R(c, 1),
                sellerExperimentGroupId: Wq(c, 17),
                sellerSignals: t.toJSON(),
                sellerTimeout: _.kw(c, 15) || 50,
                interestGroupBuyers: [],
                auctionSignals: {},
                perBuyerExperimentGroupIds: {},
                perBuyerSignals: {},
                perBuyerTimeouts: {},
                perBuyerCumulativeTimeouts: {}
            }, m ? {
                directFromSellerSignals: m
            } : {}, {
                componentAuctions: [p].concat(_.Ee(null != d ? d : []))
            }, e ? {
                resolveToConfig: e
            } : {});
            a.call(b, c)
        }
    };
    uL.prototype.o = function() {
        this.output.ga()
    };
    var yq = navigator,
        zq = /(\$\{GDPR})/gi,
        Aq = /(\$\{GDPR_CONSENT_[0-9]+\})/gi,
        Bq = /(\$\{ADDTL_CONSENT})/gi,
        Cq = /(\$\{AD_WIDTH})/gi,
        Dq = /(\$\{AD_HEIGHT})/gi;
    var vL = function() {
            var a = this;
            this.promise = new _.w.Promise(function(b, c) {
                a.reject = c;
                a.resolve = b
            })
        },
        wL = function() {
            this.auctionSignals = new vL;
            this.topLevelSellerSignals = new vL;
            this.j = new vL;
            this.perBuyerSignals = new vL;
            this.perBuyerTimeouts = new vL;
            this.perBuyerCumulativeTimeouts = new vL;
            this.directFromSellerSignals = new vL;
            this.resolveToConfig = new vL
        },
        xL = function(a, b, c) {
            this.j = a;
            this.kf = b;
            this.Ib = c
        };
    var yL = navigator,
        zL = function(a, b, c, d, e, f, g, h, k, l, m, n) {
            Z.call(this, a, 882);
            this.O = b;
            this.da = c;
            this.ja = d;
            this.Pa = e;
            this.ka = f;
            this.ba = g;
            this.m = l;
            this.F = m;
            this.I = n;
            this.M = W(this);
            this.B = W(this);
            this.V = Y(this, h);
            this.Z = X(this, k);
            W(this, this.F);
            W(this, this.I)
        };
    _.T(zL, Z);
    zL.prototype.j = function() {
        var a = this,
            b, c, d, e, f, g, h, k, l, m, n, p, t, u;
        return _.nb(function(v) {
            switch (v.j) {
                case 1:
                    if (!a.V.value) return null == (b = a.m) || b.Ib.abort(), AL(a), a.B.G(!1), v.return();
                    c = xr(a.Pa, Qx, 5);
                    d = a.Pa.getWidth();
                    e = a.Pa.getHeight();
                    if (!d || !e) return Fq(0, 0, c), null == (f = a.m) || f.Ib.abort(), AL(a), a.B.G(!1), v.return();
                    g = _.G(c, 9);
                    if (h = _.G(c, 10))
                        if (AL(a), _.G(c, 17)) return Fq(0, 0, c), null == (k = a.m) || k.Ib.abort(), a.B.G(!1), v.return();
                    Hq(a.context, c);
                    l = performance.now();
                    m = _.kw(a.Pa, 8) || 1E3;
                    var x = a.V.value;
                    var F = _.kw(c, 14) || -1;
                    if (0 < F && a.O.o >= F) x = 1;
                    else if (F = _.kw(c, 13) || -1, 0 < F && a.O.C >= F) x = 1;
                    else if (++a.O.o, ++a.O.C, x.signal = AbortSignal.timeout(m), _.G(c, 15)) --a.O.o, x = Gq();
                    else {
                        if (a.m && x.serverResponse) throw new TypeError("Attempted to provide a RemoteAuctionConfig in parallelized auction.");
                        x = a.m ? BL(a, x, m, l, a.m, c) : CL(a, x, m, l, c);
                        --a.O.o
                    }
                    return _.ob(v, x, 2);
                case 2:
                    n = v.A;
                    p = Math.round(performance.now() - l);
                    t = "string" === typeof n || Kq(n);
                    Iq(a.context, n, p, m, !!a.m, c, a.V.value, t);
                    if (!t) return u = 2 === n, Fq(p, u ? m : 0, c), h || AL(a), a.B.G(!0), v.return();
                    if (h) return _.ob(v, yL.deprecatedURNToURL(n, !0), 8);
                    if (!g) {
                        v.j = 4;
                        break
                    }
                    if (_.G(c, 17)) {
                        Fq(0, 0, c);
                        v.j = 6;
                        break
                    }
                    return _.ob(v, yL.deprecatedURNToURL(n, !0), 6);
                case 6:
                    return a.B.G(!0), AL(a), v.return();
                case 8:
                    return a.B.G(!0), v.return();
                case 4:
                    return a.B.G(!0), _.ob(v, Eq(n, {
                        gdprApplies: null != fl(a.da, 3) ? _.G(a.da, 3) ? "1" : "0" : null,
                        vj: _.Qi(a.da, 2),
                        Ci: _.Qi(a.da, 4),
                        zi: d.toString(),
                        yi: e.toString()
                    }), 9);
                case 9:
                    go(a.Z.value, !0), a.F.G({
                        kind: 2,
                        Mc: n
                    }), a.I.G(new _.uh(d, e)), a.M.G(!1), v.j = 0
            }
        })
    };
    zL.prototype.o = function() {
        var a, b = null == (a = this.Pa) ? void 0 : xr(a, Qx, 5);
        b && Fq(0, 0, b);
        var c;
        null == (c = this.m) || c.Ib.abort();
        AL(this)
    };
    var CL = function(a, b, c, d, e) {
            var f;
            return null == (f = yL.runAdAuction) ? void 0 : f.call(yL, b).then(function(g) {
                Jq(a.context, g, c, d, e);
                return g
            }).catch(function(g) {
                return g instanceof DOMException && "TimeoutError" === g.name ? 2 : 3
            })
        },
        BL = function(a, b, c, d, e, f) {
            xq(b, e);
            setTimeout(function() {
                e.Ib.abort(new DOMException("runAdAuction", "TimeoutError"))
            }, c);
            return e.j.then(function(g) {
                (null === g || "string" === typeof g || Kq(g)) && Jq(a.context, g, c, d, f);
                return g
            })
        },
        AL = function(a) {
            if (_.H(iB)) {
                var b = _.R(a.Pa, 25);
                if (b) {
                    go(a.Z.value, !0);
                    a.M.G(!1);
                    a.F.G({
                        kind: 2,
                        Mc: b
                    });
                    a.I.G(a.ba);
                    return
                }
            }
            a.M.G(a.ja);
            a.F.G(a.ka);
            a.I.G(a.ba)
        };
    var Sq = function(a) {
        this.H = _.A(a)
    };
    _.T(Sq, _.C);
    var Oq = function(a, b) {
        return _.Ld(a, 2, null == b ? b : Lc(b), "0")
    };
    var DL = function(a) {
        this.H = _.A(a)
    };
    _.T(DL, _.C);
    var Rq = pe(DL);
    DL.ia = [1];
    var EL = function(a, b, c, d) {
        Z.call(this, a, 1105);
        this.adUnitPath = b;
        this.Pa = c;
        this.storage = d
    };
    _.T(EL, Z);
    EL.prototype.j = function() {
        var a = _.zk(this.Pa, 3),
            b = Lq(this.adUnitPath);
        if (_.G(this.Pa, 20)) {
            a = Uq(a);
            var c = this.storage.getItem(b),
                d = c ? bh(Rq(c), Sq, 1) : [];
            c = new DL;
            a = Pq(d, a);
            a = _.Fk(c, 1, a);
            this.storage.setItem(b, Qj(a))
        } else _.H(hB) && this.storage.removeItem(b)
    };
    var FL = function(a, b, c, d) {
        Z.call(this, a, 1174);
        var e = this;
        this.ca = b;
        this.directFromSellerSignals = c;
        this.m = _.qu(function() {
            var f = (_.E = [].concat(_.Ee(e.ca.head.querySelectorAll("script[type=webbundle]"))), _.z(_.E, "find")).call(_.E, function(h) {
                var k;
                return null == (k = h.textContent) ? void 0 : k.match(e.directFromSellerSignals)
            });
            if (null != f && f.textContent) {
                var g = JSON.parse(f.textContent);
                g.resources = g.resources.filter(function(h) {
                    return !h.match(e.directFromSellerSignals)
                });
                f.remove();
                g.resources.length && (f = e.ca.createElement("script"), f.type = "webbundle", Ya(f, xe(g)), e.ca.head.appendChild(f))
            }
        });
        TE(this, d);
        _.Vo(this, function() {
            return setTimeout(function() {
                return void e.m()
            }, 5E3)
        })
    };
    _.T(FL, Z);
    FL.prototype.j = function() {
        this.m()
    };
    var GL = function(a, b, c) {
        Z.call(this, a, 1175);
        this.output = RE(this);
        TE(this, b);
        TE(this, c)
    };
    _.T(GL, Z);
    GL.prototype.j = function() {
        LE(this.output, Uy(5E3))
    };
    var HL = function(a, b, c) {
        Z.call(this, a, 1054);
        this.m = b;
        this.output = RE(this);
        this.B = X(this, c)
    };
    _.T(HL, Z);
    HL.prototype.j = function() {
        this.B.value || this.m();
        this.output.notify()
    };
    var IL = function(a, b, c, d, e, f) {
        Z.call(this, a, 1053);
        this.slotId = b;
        this.W = c;
        this.O = d;
        this.m = W(this);
        this.B = X(this, e);
        this.F = X(this, f)
    };
    _.T(IL, Z);
    IL.prototype.j = function() {
        this.F.value ? (ar(this.slotId, this.O, this.W, this.B.value), this.m.G(!1)) : this.m.G(!0)
    };
    var JL = function(a, b, c, d) {
        Z.call(this, a, 1055);
        this.m = d;
        TE(this, c);
        this.B = X(this, b);
        RE(this, this.m)
    };
    _.T(JL, Z);
    JL.prototype.j = function() {
        this.B.value && this.m.notify()
    };
    var dr = function(a, b, c, d, e, f, g, h, k, l, m, n, p, t, u, v, x) {
        Z.call(this, a, 1179);
        this.slotId = b;
        this.aa = d;
        this.O = e;
        this.da = f;
        this.B = g;
        this.ba = l;
        this.I = m;
        this.W = n;
        this.Z = p;
        this.Bb = t;
        this.m = v;
        this.ka = x;
        this.ja = Y(this, u);
        this.M = X(this, h);
        this.V = X(this, k);
        this.F = Y(this, c)
    };
    _.T(dr, Z);
    dr.prototype.j = function() {
        var a = new $i;
        _.S(this, a);
        var b = this.ja.value,
            c = W(this);
        if (b) {
            2 === _.tf(bs) && this.F.value && _.G(b, 20) && 0 !== _.zk(b, 3).length && (c = new EL(this.context, this.slotId.getAdUnitPath(), b, this.F.value), N(a, c));
            c = new uL(this.context, this.aa, b, this.ka);
            N(a, c);
            c = new zL(this.context, this.O, this.da, this.B, b, this.M.value, this.V.value, c.output, this.ba, this.I, this.m.hb, this.m.gf);
            N(a, c);
            var d = new Wo(this.context, this.slotId, $q);
            N(a, d);
            d = new GL(this.context, c.B, d.output);
            N(a, d);
            b = _.R(b, 19);
            (null == b ? 0 : b.length) && N(a, new FL(this.context, window.document, b, d.output));
            c = c.M
        } else this.m.hb.G(this.M.value), this.m.gf.G(this.V.value), c.G(this.B), null == (d = this.I) || d.Ib.abort();
        b = new IL(this.context, this.slotId, this.W, this.O, this.Bb, c);
        N(a, b);
        c = new HL(this.context, this.Z, c);
        N(a, c);
        b = new JL(this.context, b.m, c.output, this.m.Gh);
        N(a, b);
        ij(a)
    };
    var br = navigator;
    var KL = function() {
        ZK.apply(this, arguments)
    };
    _.T(KL, ZK);
    var LL = function(a, b) {
            var c = _.Oe(b ? "fencedframe" : "IFRAME");
            b && (c.mode = "opaque-ads");
            c.id = a.ed;
            c.name = a.ed;
            c.title = a.fd;
            Array.isArray(a.j) ? null != a.j[0] && null != a.j[1] && (c.width = String(a.j[0]), c.height = String(a.j[1])) : (c.width = "100%", c.height = "0");
            c.allowTransparency = "true";
            c.scrolling = "no";
            c.marginWidth = "0";
            c.marginHeight = "0";
            c.frameBorder = "0";
            c.style.border = "0";
            c.style.verticalAlign = "bottom";
            c.setAttribute("role", "region");
            c.setAttribute("aria-label", "Advertisement");
            c.tabIndex = 0;
            return c
        },
        ML = function(a, b) {
            "string" !== typeof a.j && (b.width = String(a.j[0]), b.height = String(a.j[1]));
            var c = zg(a.context, 774, function() {
                a.loaded(b);
                _.Pe(b, "load", c)
            });
            _.lb(b, "load", c);
            _.Vo(a, function() {
                return _.Pe(b, "load", c)
            });
            a.o.Gg.appendChild(b)
        };
    var NL = function() {
        KL.apply(this, arguments)
    };
    _.T(NL, KL);
    NL.prototype.m = function() {
        var a = LL(this, !this.o.Pk);
        if ("string" === typeof this.gb.Mc) {
            var b = this.gb.Mc;
            if (_.H(iB) && _.z(b, "startsWith").call(b, "http") || /^(uuid-in-package|urn:uuid):[0-9a-fA-F-]*$/.test(b)) b = _.se(b), a.src = _.Za(b).toString()
        } else a.config = this.gb.Mc;
        ML(this, a);
        return a
    };
    NL.prototype.C = function() {
        return !1
    };
    var OL = navigator,
        PL = function(a, b, c, d, e, f) {
            Z.call(this, a, 1089);
            this.Pb = b;
            this.ha = c;
            this.aa = d;
            this.m = f;
            W(this, f);
            e && (this.B = Y(this, e))
        };
    _.T(PL, Z);
    PL.prototype.j = function() {
        var a = {};
        if (1 === this.Pb)
            for (var b = _.y(this.ha), c = b.next(); !c.done; c = b.next()) {
                var d = c.value;
                c = this.aa[d.getDomId()];
                a[d.getId()] = QL(this, c)
            } else if (2 === this.Pb) {
                b = null == (d = this.B) ? void 0 : d.value;
                if (!b) {
                    this.m.ga();
                    return
                }
                d = _.y(this.ha);
                for (c = d.next(); !c.done; c = d.next()) {
                    c = c.value;
                    var e = b.get(c.getId()),
                        f = void 0;
                    null != (f = e) && f.length && (f = this.aa[c.getDomId()], a[c.getId()] = QL(this, f, e))
                }
            }
        this.m.G(a)
    };
    var QL = function(a, b, c) {
        var d = new wL,
            e = new AbortController;
        a = wq({
            kf: d,
            Ib: e,
            Fg: rm(a.context, b),
            interestGroupBuyers: c
        });
        a = OL.runAdAuction(a).catch(function(f) {
            return f instanceof DOMException && "TimeoutError" === f.name ? 2 : 3
        });
        return new xL(a, d, e)
    };
    var RL = function(a, b, c, d, e) {
        Z.call(this, a, 1106);
        this.da = b;
        this.B = c;
        this.ha = d;
        this.F = e;
        this.m = W(this);
        W(this, e)
    };
    _.T(RL, Z);
    RL.prototype.j = function() {
        for (var a = Tq(this.B, this.da), b = new _.w.Map, c = new _.w.Map, d = _.y(this.ha), e = d.next(); !e.done; e = d.next()) {
            var f = e.value;
            e = f.getAdUnitPath();
            var g = void 0,
                h = void 0,
                k = null != (h = null == (g = a.get(Lq(e))) ? void 0 : bh(g, Sq, 1).map(function(l) {
                    return _.R(l, 1)
                })) ? h : [];
            b.set(f.getId(), k);
            if (!c.has(e)) {
                f = [];
                k = _.y(k.sort());
                for (g = k.next(); !g.done; g = k.next()) f.push(_.qf(g.value));
                c.set(e, f)
            }
        }
        this.m.G(b);
        this.F.G(c)
    };
    var fr = function(a, b, c, d, e, f, g) {
        Z.call(this, a, 1170);
        this.Pb = b;
        this.aa = c;
        this.da = d;
        this.B = e;
        this.m = {
            Xf: W(this)
        };
        2 === b && (this.m.Df = W(this));
        this.I = X(this, f);
        this.F = X(this, g)
    };
    _.T(fr, Z);
    fr.prototype.j = function() {
        var a = this.I.value;
        if (this.F.value && a.length) {
            var b = new $i;
            _.S(this, b);
            if (2 === this.Pb && this.B) {
                var c = new RL(this.context, this.da, this.B, a, this.m.Df);
                N(b, c);
                c = c.m
            }
            a = new PL(this.context, this.Pb, a, this.aa, c, this.m.Xf);
            N(b, a);
            ij(b)
        } else this.m.Xf.ga(), null == (b = this.m.Df) || b.ga()
    };
    var SL = function(a, b, c, d, e, f, g, h) {
        Z.call(this, a, 1166);
        this.Tc = b;
        this.ca = c;
        this.I = d;
        var k = void 0 === k ? new GE : k;
        this.C.j.push(k);
        this.m = k;
        this.B = W(this);
        this.F = W(this);
        this.V = X(this, e);
        this.Z = X(this, f);
        TE(this, g);
        this.M = X(this, h)
    };
    _.T(SL, Z);
    SL.prototype.j = function() {
        var a = this,
            b = this.V.value;
        if (b) {
            var c = _.sb(this.Z.value, {
                    uuid: this.Tc
                }),
                d = this.ca.createElement("script");
            b = {
                source: b,
                credentials: this.M.value ? "include" : "omit",
                resources: [c.toString()]
            };
            d.setAttribute("type", "webbundle");
            Ya(d, xe(b));
            this.ca.head.appendChild(d);
            this.B.G(d);
            this.F.G(b);
            this.m.Ta(TL(c).catch(function(e) {
                e instanceof ND ? a.I(e) : (a.T(e), a.o(e));
                return null
            }))
        } else this.m.ga(), this.B.ga(), this.F.ga()
    };
    var TL = function(a) {
        var b, c;
        return _.nb(function(d) {
            if (1 == d.j) return _.ob(d, fetch(a.toString()).catch(function() {
                throw new ND("Failed to fetch bundle index.");
            }), 2);
            if (3 != d.j) return b = d.A, _.ob(d, b.text(), 3);
            c = d.A;
            return d.return(Xx(c))
        })
    };
    var UL = function(a, b, c, d, e, f, g, h, k, l, m) {
        Z.call(this, a, 1167);
        this.ca = b;
        this.da = c;
        this.I = d;
        this.m = e;
        this.F = f;
        this.B = X(this, g);
        this.V = Y(this, h);
        this.Z = Y(this, k);
        this.ba = Y(this, l);
        m && (this.M = Y(this, m))
    };
    _.T(UL, Z);
    UL.prototype.j = function() {
        var a = this.V.value,
            b = this.Z.value,
            c = this.ba.value;
        if (a)
            if (b && c) {
                var d = _.zk(a, 1),
                    e = _.zk(a, 2);
                a = _.zk(a, 3);
                if (d.length !== e.length) this.m(new MD("Received " + d.length + " ad URLs but " + e.length + " metadatas"));
                else {
                    c.resources = [].concat(_.Ee(d.filter(function(f) {
                        return f
                    })), _.Ee(a.map(function(f) {
                        return "https://securepubads.g.doubleclick.net" + f
                    })));
                    c.resources.length ? (a = _.Oe("SCRIPT"), a.setAttribute("type", "webbundle"), Ya(a, xe(c)), this.ca.head.removeChild(b), this.ca.head.appendChild(a)) : this.ca.head.removeChild(b);
                    for (b = 0; b < d.length; b++) c = void 0, this.I(b, e[b], {
                        kind: 1,
                        url: d[b]
                    }, this.B.value, this.da, null == (c = this.M) ? void 0 : c.value, void 0);
                    this.F(d.length - 1, this.B.value, this.da)
                }
            } else this.m(Error("Lost bundle script"))
    };
    var VL = function(a, b, c, d, e, f, g, h, k, l, m, n, p, t) {
        $i.call(this);
        e = new SL(a, f, h, c, m, n, p, t);
        N(this, e);
        N(this, new UL(a, h, g, b, c, d, k, e.m, e.B, e.F, l));
        this.j = {
            output: e.m
        }
    };
    _.T(VL, $i);
    var rr = new _.w.Set,
        WL = function(a, b, c) {
            var d = 0,
                e = function() {
                    d = 0
                };
            return function(f) {
                d || (d = _.r.setTimeout(e, b), a.apply(c, arguments))
            }
        }(function() {
            throw new om("Reached Limit for addEventListener");
        }, 3E5),
        XL = function(a, b, c) {
            _.U.call(this);
            this.context = a;
            this.X = b;
            this.o = c;
            this.j = [];
            this.enabled = !1;
            this.B = 0;
            this.m = new _.w.Map;
            rr.add(this);
            this.X.info(wH(this.getName()))
        };
    _.T(XL, _.U);
    var tr = function(a) {
        a.enabled || (a.enabled = !0, hl(6, a.context), a.T())
    };
    XL.prototype.slotAdded = function(a, b) {
        this.j.push(a);
        var c = new tK(a, this.getName());
        Xq(this.o, "slotAdded", 818, c);
        this.X.info(xH(this.getName(), a.getAdUnitPath()), a);
        a = this.getName();
        uw(b, 4, a)
    };
    XL.prototype.destroySlots = function(a) {
        var b = this;
        return a.filter(function(c) {
            return ia(b.j, c)
        })
    };
    XL.prototype.addEventListener = function(a, b, c) {
        var d = this;
        c = void 0 === c ? window : c;
        if (this.B >= _.tf(sA) && 0 < _.tf(sA)) return WL(), !1;
        if (!c.IntersectionObserver && (_.E = ["impressionViewable", "slotVisibilityChanged"], _.z(_.E, "includes")).call(_.E, a)) return Q(this.X, lI()), !1;
        var e;
        if (null == (e = this.m.get(a)) ? 0 : e.has(b)) return !1;
        this.m.has(a) || this.m.set(a, new _.w.Map);
        c = function(f) {
            f = f.detail;
            try {
                b(f)
            } catch (k) {
                d.X.error(MH(String(k), a));
                var g, h;
                null == (g = window.console) || null == (h = g.error) || h.call(g, k)
            }
        };
        this.m.get(a).set(b, c);
        this.o.listen(a, c);
        this.B++;
        return !0
    };
    XL.prototype.removeEventListener = function(a, b) {
        var c, d = null == (c = this.m.get(a)) ? void 0 : c.get(b);
        if (!d || !KG(this.o, a, d)) return !1;
        this.B--;
        return this.m.get(a).delete(b)
    };
    var jr = function(a) {
        for (var b = _.y(rr), c = b.next(); !c.done; c = b.next()) c.value.destroySlots(a)
    };
    var nr = function(a, b, c, d) {
        XL.call(this, a, b, d);
        this.C = c;
        this.ads = new _.w.Map;
        this.nc = !1
    };
    _.T(nr, XL);
    nr.prototype.setRefreshUnfilledSlots = function(a) {
        "boolean" === typeof a && (this.nc = a)
    };
    var sI = function(a, b) {
            var c;
            return a.C.enabled && !(null == (c = a.ads.get(b)) || !c.fk)
        },
        tI = function(a, b, c, d) {
            b = new pK(b, a.getName());
            null != c && null != d && b.setSize([c, d]);
            Xq(a.o, "slotRenderEnded", 67, b)
        };
    nr.prototype.getName = function() {
        return "companion_ads"
    };
    nr.prototype.slotAdded = function(a, b) {
        var c = this;
        a.listen(OG, function(d) {
            fl(d.detail, 11) && (YL(c, a).fk = !0)
        });
        XL.prototype.slotAdded.call(this, a, b)
    };
    nr.prototype.T = function() {};
    var YL = function(a, b) {
            var c = a.ads.get(b);
            c || (c = {}, a.ads.set(b, c), _.Vo(b, function() {
                return a.ads.delete(b)
            }));
            return c
        },
        qI = function(a, b) {
            var c = Mh().j,
                d = Mh().A;
            if (a.C.enabled) {
                var e = {
                    Rb: 3
                };
                a.J && (e.Nc = a.J);
                a.F && (e.Oc = a.F);
                b = null != b ? b : a.j;
                c = yh(c, d);
                d = e.Nc;
                var f = e.Oc;
                d && "number" !== typeof d || f && "number" !== typeof f || a.C.refresh(c, b, e)
            } else(null == b ? 0 : b[0]) && a.X.error(DH(b[0].getDomId()))
        },
        rI = function(a, b) {
            return a.j.filter(function(c) {
                return _.z(b, "includes").call(b, c.toString())
            })
        };
    var or = function(a, b, c) {
        XL.call(this, a, b, c)
    };
    _.T(or, XL);
    or.prototype.getName = function() {
        return "content"
    };
    or.prototype.T = function() {};
    var ZL = _.Ft(["https://securepubads.g.doubleclick.net/pagead/managed/js/gpt/", "/pubads_impl_", "", ".js"]),
        $L = _.Ft(["https://securepubads.g.doubleclick.net/gpt/pubads_impl_", "_", ".js"]),
        aM = _.Ft(["https://pagead2.googlesyndication.com/pagead/managed/js/gpt/", "/pubads_impl_", "", ".js"]),
        bM = _.Ft(["https://pagead2.googlesyndication.com/gpt/pubads_impl_", "_", ".js"]),
        cM = new _.w.Map([
            [2, {
                vh: "page_level_ads"
            }],
            [5, {
                vh: "shoppit"
            }]
        ]),
        dM = function(a) {
            var b = void 0 === b ? cM : b;
            this.context = a;
            this.j = b;
            this.A = new _.w.Map;
            this.loaded = new _.w.Set
        },
        fM;
    dM.prototype.load = function(a) {
        var b = _.eM(this, a),
            c, d = (null != (c = this.j.get(a.module)) ? c : {}).vh;
        if (!d) throw Error("cannot load invalid module: " + d);
        if (!this.loaded.has(a.module)) {
            (c = _.mh(172)) && "pagead2.googlesyndication.com" === xy((c.src || "").match(_.wy)[3] || null) ? (c = "", _.H(LA) && (c = so(_.H(KA), this.context.Vg)), d = this.context.xb ? _.te(aM, this.context.xb, d, c) : _.te(bM, d, this.context.vb)) : this.context.xb ? (c = "", _.H(LA) && (c = so(_.H(KA), this.context.Vg)), d = _.te(ZL, this.context.xb, d, c)) : d = _.te($L, d, this.context.vb);
            c = {};
            var e = _.tf(VA);
            e && (c.cb = e);
            d = _.z(Object, "keys").call(Object, c).length ? _.zu(d, c) : d;
            fM(this, a);
            _.Nm(document, d);
            this.loaded.add(a.module)
        }
        return b.promise
    };
    _.eM = function(a, b) {
        b = b.module;
        a.A.has(b) || a.A.set(b, new _.Cf);
        return a.A.get(b)
    };
    fM = function(a, b) {
        var c = b.module;
        b = "_gpt_js_load_" + c + "_";
        var d = zg(a.context, 340, function(e) {
            if (a.j.has(c) && "function" === typeof e) {
                var f = a.j.get(c);
                f = (void 0 === f.Xi ? [] : f.Xi).map(function(g) {
                    return _.eM(a, g).promise
                });
                _.w.Promise.all(f).then(function() {
                    e.call(window, _, a)
                })
            }
        });
        Object.defineProperty(qm(), b, {
            value: function(e) {
                if (d) {
                    var f = d;
                    d = null;
                    f(e)
                }
            },
            writable: !1,
            enumerable: !1
        })
    };
    var gM = function(a, b) {
        Z.call(this, a, 980);
        this.output = new zp;
        this.m = [];
        this.B = X(this, b)
    };
    _.T(gM, Z);
    gM.prototype.j = function() {
        for (var a = _.y((_.E = [this.B.value, this.m.map(function(c) {
                return c.value
            })], _.z(_.E, "flat")).call(_.E)), b = a.next(); !b.done; b = a.next()) mf(b.value);
        this.output.notify()
    };
    var hM = function(a, b) {
        Z.call(this, a, 892, _.tf(RA));
        this.m = W(this);
        this.F = W(this);
        this.B = W(this);
        this.Wc = W(this);
        this.Hd = W(this);
        this.I = W(this);
        this.Te = W(this);
        this.M = SE(this, b)
    };
    _.T(hM, Z);
    hM.prototype.j = function() {
        var a = this.M.value;
        if (!a) throw Error("config timeout");
        this.m.Ga(_.Zg(a, ex, 3));
        this.F.Ga(_.Zg(a, gx, 2));
        this.B.G(Bd(a, 4, Cc));
        this.Wc.Ga(bh(a, ax, 6));
        this.Hd.Ga(bh(a, sx, 5));
        this.I.Ga(_.Zg(a, rx, 7));
        var b;
        this.Te.G(new _.w.Set((null == (b = _.Zg(a, bx, 1)) ? void 0 : _.zk(b, 6)) || []))
    };
    hM.prototype.J = function(a) {
        this.o(a)
    };
    hM.prototype.o = function(a) {
        this.m.bb(a);
        this.F.bb(a);
        this.B.G([]);
        this.Wc.G([]);
        this.Hd.G([]);
        this.I.ga()
    };
    var iM = function(a, b) {
        Z.call(this, a, 891);
        var c = this;
        this.m = W(this);
        this.error = void 0;
        var d = W(this);
        this.B = X(this, d);
        b(function(e, f) {
            if (f) c.error = f, d.G([]);
            else try {
                if ("string" === typeof e) {
                    var g = JSON.parse(e || "[]");
                    Array.isArray(g) && d.G(g)
                }
            } catch (h) {} finally {
                d.sb || (c.error = Error("malformed response"), d.G([]))
            }
        })
    };
    _.T(iM, Z);
    iM.prototype.j = function() {
        if (this.error) throw this.error;
        this.m.G(Qd(ux, this.B.value))
    };
    var jM = function(a, b) {
        Z.call(this, a, 1081);
        this.Mb = W(this);
        this.m = Y(this, b)
    };
    _.T(jM, Z);
    jM.prototype.j = function() {
        this.m.value ? this.Mb.G(this.m.value) : this.Mb.ga()
    };
    var kM = new _.w.Map([
            [1, 5],
            [2, 2],
            [3, 3]
        ]),
        lM = function(a, b, c, d, e, f, g, h, k) {
            Z.call(this, a, 1079);
            this.ca = b;
            this.googletag = c;
            this.fa = d;
            this.I = e;
            this.m = f;
            this.X = g;
            this.B = h;
            this.F = k;
            W(this)
        };
    _.T(lM, Z);
    lM.prototype.j = function() {
        var a = this,
            b = this.B.getAdUnitPath(),
            c = kM.get(_.Xj(this.B, 2, 0));
        if (b && c) {
            var d, e = null != (d = this.fa) ? d : this.m.j;
            b = new jK(this.context, this.ca, b, c, !0, this.googletag.pubads(), this.googletag.display, function() {
                a.googletag.pubadsReady || a.googletag.enableServices()
            }, this.googletag.cmd, e, this.m, this.I, this.X, this.F);
            _.S(this, b);
            ij(b)
        }
    };
    var Os = function(a, b, c, d, e, f, g) {
        Z.call(this, a, 1082);
        this.googletag = b;
        this.fa = c;
        this.I = d;
        this.B = e;
        this.X = f;
        this.F = W(this);
        this.m = new jM(this.context, this.F);
        this.Mb = this.m.Mb;
        _.S(this, this.m);
        this.M = X(this, g)
    };
    _.T(Os, Z);
    Os.prototype.j = function() {
        if (_.H(UA)) {
            for (var a = [], b = _.y(this.M.value), c = b.next(); !c.done; c = b.next()) switch (c = c.value, Tj(c, tx)) {
                case 5:
                    a.push(c);
                    break;
                case 8:
                    var d = c
            }
            this.F.Ga(null == d ? void 0 : _.Zg(d, lx, 4));
            d = new $i;
            _.S(this, d);
            a = _.y(a);
            for (b = a.next(); !b.done; b = a.next()) b = b.value, c = void 0, N(d, new lM(this.context, document, this.googletag, null != (c = this.fa) ? c : this.B.j, this.I, this.B, this.X, _.Zg(b, nx, Wj(b, tx, 5)), _.Zg(b, lx, 4)));
            N(d, this.m);
            ij(d)
        } else this.Mb.ga()
    };
    var mM = function(a, b, c, d, e, f, g, h) {
        _.U.call(this);
        this.context = a;
        this.C = b;
        this.o = c;
        this.X = d;
        this.O = e;
        this.j = f;
        this.Wa = g;
        this.m = h
    };
    _.T(mM, _.U);
    var nM = function(a, b, c, d) {
        var e = new $i;
        _.S(a, e);
        var f = a.context;
        var g = a.j;
        var h = new $i;
        g = new iM(f, g);
        N(h, g);
        var k = new hM(f, g.m);
        N(h, k);
        ij(h);
        var l = k.m;
        var m = k.F;
        var n = k.B;
        f = k.Wc;
        var p = k.Hd;
        g = k.I;
        k = k.Te;
        _.S(a, h);
        var t;
        h = new lK(a.context, document, qm(), a.C, a.o, a.X, null != (t = window.location.hash) ? t : "");
        N(e, h);
        t = new Os(a.context, qm(), null, a.C, a.o, a.X, p);
        N(e, t);
        h = new gM(a.context, n);
        N(e, h);
        b = new VJ(a.context, window, m, b);
        N(e, b);
        n = a.context;
        p = a.Wa;
        m = {
            Fb: new Yn,
            Jb: new Yn,
            ac: new Yn,
            Zb: new Yn,
            wc: new Yn,
            mc: new Yn,
            Dd: new Yn,
            Ed: new Yn,
            Ze: new Yn
        };
        var u = new $i;
        N(u, new tJ(n, p, l, window, m));
        ij(u);
        _.S(a, u);
        l = oo(a.context, a.j, b.m);
        p = l.Cc;
        u = l.Yg;
        _.S(e, l.Ja);
        l = new NJ(a.context, u);
        N(e, l);
        n = new OJ(a.context, u);
        N(e, n);
        u = Bm(a.context, a.X, a.O, window, p, u);
        p = u.fb;
        _.S(a, u.Ja);
        u = a.context;
        if (_.H(qA) || wl()) u = void 0;
        else {
            var v = {
                    Qf: new Yn,
                    qb: new Yn
                },
                x = new $i;
            N(x, new iL(u, f, p, v));
            ij(x);
            u = {
                Me: v,
                Ja: x
            }
        }
        if (u) {
            var F = u.Me;
            _.S(a, u.Ja)
        }
        d = _.H(mq) ? pq(a.context, window, d.be, p) : void 0;
        _.H(YA) || (v = a.context, x = a.m, u = new $i, c = new lL(v, x, c, p, g), N(u, c), ij(u), _.S(a, u));
        ij(e);
        return {
            vc: m,
            Me: F,
            Vj: b.m,
            Si: h.output,
            Mb: t.Mb,
            Wc: f,
            me: l.me,
            sj: n.m,
            Te: k,
            rc: d
        }
    };
    var oM = function() {
        KL.apply(this, arguments)
    };
    _.T(oM, KL);
    oM.prototype.m = function() {
        var a = this,
            b = this.o,
            c = b.Oh;
        b = b.ke;
        var d = LL(this);
        if (null == c ? 0 : c.length)
            if (_.xv) {
                c = _.y(c);
                for (var e = c.next(); !e.done; e = c.next()) d.sandbox.add(e.value)
            } else d.sandbox.add.apply(d.sandbox, _.Ee(c));
        b && (d.allow = b);
        ML(this, d);
        Gg(this.context, 653, function() {
            var f;
            if (f = fq(a.gb.wb)) {
                var g = f.toString().toLowerCase(); - 1 < g.indexOf("<!doctype") || -1 < g.indexOf("<html") ? ds(2) : (ds(3), f = _.H(pB) ? f : fq("<!doctype html><html><head><script>var inDapIF=true,inGptIF=true;\x3c/script></head><body>" + f + "</body></html>"))
            } else ds(1);
            var h, k;
            g = null != (k = null == (h = d.contentWindow) ? void 0 : h.document) ? k : d.contentDocument;
            (Ma("Firefox") || Ma("FxiOS")) && g.open("text/html", "replace");
            bb(g, f);
            var l, m, n;
            if (Du(null != (n = null == (l = d.contentWindow) ? void 0 : null == (m = l.location) ? void 0 : m.href) ? n : "", "#")) {
                var p, t;
                null == (p = d.contentWindow) || null == (t = p.history) || t.replaceState(null, "", "#" + Math.random())
            }
            g.close()
        }, !0);
        return d
    };
    oM.prototype.C = function() {
        return !0
    };
    var Bs = function(a, b, c, d, e, f, g, h, k, l, m, n, p, t, u, v, x, F, D, M, B, K, V, O, aa, ma) {
        Z.call(this, a, 680);
        this.slotId = b;
        this.O = c;
        this.W = d;
        this.xa = e;
        this.Ra = f;
        this.D = g;
        this.m = W(this);
        this.F = W(this);
        this.B = RE(this);
        this.M = X(this, h);
        this.Ma = X(this, k);
        TE(this, l);
        this.ka = X(this, m);
        this.I = X(this, n);
        this.ja = X(this, p);
        TE(this, M);
        this.V = X(this, t);
        this.Z = Y(this, u);
        this.Na = Y(this, v);
        this.ba = X(this, x);
        this.Ba = Y(this, F);
        this.kb = Y(this, D);
        TE(this, B);
        this.Aa = X(this, K);
        TE(this, V);
        ma && TE(this, ma);
        this.oa = Y(this, O);
        aa && (this.va = Y(this, aa))
    };
    _.T(Bs, Z);
    Bs.prototype.j = function() {
        var a = this.M.value;
        if (0 === a.kind && null == a.wb) throw new MD("invalid html");
        var b, c;
        a: {
            var d = this.context,
                e = {
                    ca: document,
                    slotId: this.slotId,
                    O: this.O,
                    W: this.W,
                    xa: this.xa,
                    size: this.ja.value,
                    Sh: this.ka.value,
                    Gg: this.I.value,
                    sf: this.V.value,
                    mj: this.Z.value,
                    Oh: this.Na.value,
                    isBackfill: this.ba.value,
                    Dj: this.Ba.value,
                    Qd: this.kb.value,
                    ke: this.Aa.value,
                    Pk: null == (b = this.oa.value) ? void 0 : _.G(b, 14),
                    Ye: null == (c = this.va) ? void 0 : c.value,
                    Ra: this.Ra
                };b = this.Ma.value;c = a.kind;
            switch (c) {
                case 0:
                    a = new(b ? bL : oM)(d, a, e);
                    break a;
                case 2:
                    a = new NL(d, a, e);
                    break a;
                default:
                    _.Va(c)
            }
            a = void 0
        }
        _.S(this, a);
        d = a.render();
        pM(this, this.D, d);
        this.D.top && this.D.top !== this.D && _.Dj(this.D.top) && pM(this, this.D.top, d);
        this.B.notify();
        this.m.G(d);
        this.F.G(a.C())
    };
    var pM = function(a, b, c) {
        NI(a, a.id, b, "message", function(d) {
            c.contentWindow === d.source && Xq(a.slotId, Xo, 824, d)
        })
    };
    var hs = function(a, b, c, d, e) {
        Z.call(this, a, 720);
        this.format = b;
        this.tc = c;
        this.output = W(this);
        this.m = Y(this, d);
        this.B = Y(this, e)
    };
    _.T(hs, Z);
    hs.prototype.j = function() {
        var a = this.B.value;
        if (null == a) this.output.ga();
        else {
            var b = Math.round(.3 * this.tc),
                c;
            2 !== this.format && 3 !== this.format || null == (c = this.m.value) || !_.G(c, 12, !1) || 0 >= b || a <= b ? this.output.G(a) : this.output.G(b)
        }
    };
    var qs = function(a, b, c, d, e, f, g, h, k, l, m, n) {
        Z.call(this, a, 674);
        this.slotId = b;
        this.fa = c;
        this.B = d;
        this.ca = f;
        this.O = g;
        this.output = W(this);
        this.V = 2 === e || 3 === e;
        this.m = X(this, h);
        this.M = X(this, k);
        this.I = Y(this, l);
        this.F = Y(this, m);
        n && TE(this, n)
    };
    _.T(qs, Z);
    qs.prototype.j = function() {
        var a = eo(this.fa, this.B),
            b = Bh(this.slotId, this.ca) || Zm(this.m.value, Kh(this.slotId), a);
        this.M.value && !a && (b.style.display = "inline-block");
        this.V ? XG(this.O, this.slotId, function() {
            return void _.ry(b)
        }) : _.Vo(this, function() {
            return void _.ry(b)
        });
        a = qM(this);
        0 < a && (b.style.paddingTop = a + "px");
        this.output.G(b)
    };
    var qM = function(a) {
        var b = a.m.value,
            c, d = null == (c = a.I.value) ? void 0 : c.height;
        if (b && !a.F.value && d) {
            var e;
            c = (null != (e = co(a.B, 23)) ? e : _.G(a.fa, 31)) ? Math.floor((b.offsetHeight - d) / 2) : 0
        } else c = 0;
        return c
    };
    var fs = function(a, b) {
        Z.call(this, a, 859);
        this.D = b;
        this.output = W(this)
    };
    _.T(fs, Z);
    fs.prototype.j = function() {
        this.output.G(!_.Dj(this.D.top))
    };
    var ys = function(a, b, c) {
        Z.call(this, a, 840);
        this.format = b;
        this.ca = c;
        this.output = W(this)
    };
    _.T(ys, Z);
    ys.prototype.j = function() {
        var a = [],
            b = this.ca;
        b = void 0 === b ? document : b;
        var c;
        null != (c = b.featurePolicy) && (_.E = c.features(), _.z(_.E, "includes")).call(_.E, "attribution-reporting") && a.push("attribution-reporting");
        5 !== this.format && 4 !== this.format || !_.H(Zz) || a.push("autoplay");
        a.length ? this.output.G(a.join(";")) : this.output.G("")
    };
    var Is = function(a, b, c, d, e, f) {
        f = void 0 === f ? es : f;
        Z.call(this, a, 783);
        var g = this;
        this.slotId = b;
        this.ca = d;
        this.xa = e;
        this.M = f;
        this.I = !1;
        this.m = null;
        this.F = this.B = -1;
        this.Z = _.qu(function() {
            Xq(g.xa, "impressionViewable", 715, new qK(g.slotId, "publisher_ads"))
        });
        this.ba = ru(function() {
            Xq(g.xa, "slotVisibilityChanged", 716, new rK(g.slotId, "publisher_ads", g.F))
        });
        this.V = X(this, c);
        var h = new zp;
        MG(this.slotId).then(function() {
            return void h.notify()
        });
        TE(this, h)
    };
    _.T(Is, Z);
    Is.prototype.j = function() {
        var a = this,
            b = this.M(zg(this.context, this.id, function(c) {
                c = _.y(c);
                for (var d = c.next(); !d.done; d = c.next()) a.B = 100 * d.value.intersectionRatio, _.z(Number, "isFinite").call(Number, a.B) && rM(a)
            }));
        b && (b.observe(this.V.value), NI(this, this.id, this.ca, "visibilitychange", function() {
            rM(a)
        }), _.Vo(this, function() {
            b.disconnect()
        }))
    };
    var rM = function(a) {
            var b = !oE(a.ca);
            sM(a, 50 <= a.B && b);
            b = Math.floor(b ? a.B : 0);
            if (0 > b || 100 < b || b === a.F ? 0 : -1 !== a.F || 0 !== b) a.F = b, a.ba()
        },
        sM = function(a, b) {
            a.I || (b ? null === a.m && (a.m = setTimeout(function() {
                oE(a.ca) || (a.Z(), a.I = !0);
                a.m = null
            }, 1E3)) : null !== a.m && (clearTimeout(a.m), a.m = null))
        };
    var ws = function(a, b, c, d, e, f) {
        Z.call(this, a, 719);
        this.fa = b;
        this.B = c;
        this.output = W(this);
        this.m = X(this, d);
        this.F = X(this, e);
        this.I = Y(this, f)
    };
    _.T(ws, Z);
    ws.prototype.j = function() {
        var a = this.m.value.kind;
        switch (a) {
            case 0:
                if (this.m.value.wb)
                    if (this.F.value) {
                        a = this.I.value;
                        var b = new al;
                        a = _.Wi(b, 3, a);
                        _.G(gl([a, this.fa.hc(), this.B.hc()]), 3) ? this.output.G(jG) : this.output.ga()
                    } else this.output.ga();
                else this.output.ga();
                break;
            case 2:
                this.output.ga();
                break;
            default:
                _.Va(a)
        }
    };
    var tM = function(a, b, c, d, e, f) {
        Z.call(this, a, 1119);
        this.slotId = b;
        this.B = c;
        this.documentElement = d;
        this.O = e;
        this.m = f;
        this.output = QE(this)
    };
    _.T(tM, Z);
    tM.prototype.j = function() {
        var a = _.Oe("INS");
        a.id = this.B;
        _.Ph(a, {
            display: "none"
        });
        this.documentElement.appendChild(a);
        var b = function() {
            return void _.ry(a)
        };
        (_.E = [2, 3], _.z(_.E, "includes")).call(_.E, this.m) ? XG(this.O, this.slotId, b) : _.Vo(this, b);
        this.output.G(a)
    };
    var uM = function(a, b, c, d, e) {
        Z.call(this, a, 1120);
        this.I = b;
        this.B = c;
        this.Bc = d;
        this.m = e;
        this.output = QE(this);
        a = this.m;
        if (!_.la(a) || !_.la(a) || 1 !== a.nodeType || a.namespaceURI && "http://www.w3.org/1999/xhtml" !== a.namespaceURI) this.F = X(this, this.m)
    };
    _.T(uM, Z);
    uM.prototype.j = function() {
        var a, b, c = null != (b = null == (a = this.F) ? void 0 : a.value) ? b : this.m;
        if (!(_.E = [2, 3], _.z(_.E, "includes")).call(_.E, this.B)) {
            a = _.y(_.z(Array, "from").call(Array, c.childNodes));
            for (b = a.next(); !b.done; b = a.next()) b = b.value, 1 === b.nodeType && b.id !== this.I && _.ry(b);
            this.Bc || go(c, !0)
        }
        this.output.G(c)
    };
    var is = function(a, b, c, d, e, f, g, h, k) {
        $i.call(this);
        c ? (a = new uM(a, e, g, k, c), N(this, a), a = a.output) : 0 !== g && 1 !== g ? (a = new tM(a, b, d, f, h, g), N(this, a), a = a.output) : (b = new fp(a, b, NG, function(l) {
            return l.detail
        }), N(this, b), a = new uM(a, e, g, k, b.output), N(this, a), a = a.output);
        this.j = {
            output: a
        }
    };
    _.T(is, $i);
    var vM = function(a, b) {
            var c = Mh();
            this.context = a;
            this.O = b;
            this.j = c
        },
        wM = function(a, b, c, d, e, f, g, h, k, l, m, n, p, t, u, v, x) {
            var F = document,
                D = window;
            e || f || fH(a.O, d);
            var M = Ps(a.context, b, a.j, c, d, e, f, g, h, k, l, F, m, n, p, t, u, function() {
                fH(a.O, d);
                eH(a.O, d, M)
            }, v, x);
            f || eH(a.O, d, M);
            _.Vo(d, function() {
                fH(a.O, d)
            });
            D.top !== D && D.addEventListener("pagehide", function(B) {
                B.persisted || fH(a.O, d)
            });
            ij(M)
        };
    var xM = function(a, b, c, d) {
        Z.call(this, a, 884);
        this.za = b;
        this.Wa = c;
        this.B = W(this);
        this.m = X(this, d)
    };
    _.T(xM, Z);
    xM.prototype.j = function() {
        ZI(this.Wa, _.il(this.za, "__gads", this.m.value));
        kl(20, this.context, this.za, this.m.value);
        kl(2, this.context, this.za, this.m.value);
        this.B.G(_.nf())
    };
    var Rs = 0,
        yM = new _.qh(-9, -9);
    var Us = new _.w.Set([function(a, b) {
        var c = a.na.W.fa;
        b.set("pvsid", {
            value: a.ma.context.pvsid
        }).set("correlator", {
            value: c.getCorrelator()
        })
    }, function(a, b) {
        a = a.gi;
        var c = a.Tc;
        "wbn" === a.De && b.set("wbsu", {
            value: c
        })
    }, function(a, b) {
        var c = a.na.W.fa,
            d = a.Rk;
        a = d.Oc;
        d = d.Nc;
        var e = _.G(c, 21);
        b = b.set("hxva", {
            value: e ? 1 : null
        }).set("cmsid", {
            value: e ? _.Qi(c, 23) : null
        }).set("vid", {
            value: e ? _.Qi(c, 22) : null
        }).set("pod", {
            value: d
        }).set("ppos", {
            value: a
        });
        a = b.set;
        c = jw(c, 29);
        a.call(b, "scor", {
            value: null == c ? void 0 : c
        })
    }, function(a, b) {
        var c = a.na,
            d = c.ha,
            e = c.W.aa;
        c = a.lk;
        var f = c.yj,
            g = c.tj;
        b.set("eid", {
            value: a.ma.vf
        }).set("debug_experiment_id", {
            value: yD().split(",")
        }).set("expflags", {
            value: _.mh(253) ? _.uf(wA) || null : null
        }).set("pied", {
            value: function() {
                var h = new YE,
                    k = !1,
                    l = !1;
                f && (k = !0, Xi(h, 1, lx, f));
                var m = d.map(function(p) {
                    var t = new WE,
                        u;
                    p = null == (u = e[p.getDomId()]) ? void 0 : bh(u, lx, 27);
                    if (null == p || !p.length) return t;
                    l = k = !0;
                    u = _.y(p);
                    for (p = u.next(); !p.done; p = u.next()) Xi(t, 1, lx, p.value);
                    return t
                });
                l && _.Fk(h, 2, m);
                m = _.y(null != g ? g : []);
                for (var n = m.next(); !n.done; n = m.next()) Xi(h, 1, lx, n.value), k = !0;
                return k ? Db(h.j(), 3) : null
            }()
        })
    }, function(a, b) {
        var c = a.ma,
            d = c.context;
        c = c.Za;
        b.set("output", {
            value: a.gi.De
        }).set("gdfp_req", {
            value: 1
        }).set("vrg", {
            value: d.kc ? String(d.kc) : d.vb
        }).set("ptt", {
            value: 17
        }).set("impl", {
            value: c ? "fifs" : "fif"
        })
    }, function(a, b) {
        var c = a.ma.da;
        a = at(a.na.W.fa) || new vF;
        var d = _.Xj(a, 6, 2);
        b.set("rdp", {
            value: _.G(a, 1) ? "1" : null
        }).set("ltd", {
            value: _.G(a, 9) ? "1" : null
        }).set("gdpr_consent", {
            value: rw(c, 2)
        }).set("gdpr", {
            value: null != fl(c, 3) ? _.G(c, 3) ? "1" : "0" : null,
            options: {
                Da: !0
            }
        }).set("addtl_consent", {
            value: rw(c, 4)
        }).set("tcfe", {
            value: sw(c, 7)
        }).set("us_privacy", {
            value: rw(c, 1)
        }).set("npa", {
            value: _.G(c, 6) || _.G(a, 8) ? 1 : null
        }).set("puo", {
            value: _.H(TA) && _.G(a, 13) ? 1 : null
        }).set("tfua", {
            value: 2 !== d ? d : null,
            options: {
                Da: !0
            }
        }).set("tfcd", {
            value: null != Gn(a, 5) ? _.Xj(a, 5, 0) : null,
            options: {
                Da: !0
            }
        }).set("trt", {
            value: null != Gn(a, 10) ? _.Xj(a, 10, 0) : null,
            options: {
                Da: !0
            }
        }).set("tad", {
            value: null != fl(c, 8) ? _.G(c, 8) ? "1" : "0" : null,
            options: {
                Da: !0
            }
        }).set("gpp", {
            value: rw(c, 11)
        }).set("gpp_sid", {
            value: Bd(c, 10, Jc).join(",") || void 0
        })
    }, function(a, b) {
        var c = a.na,
            d = c.W,
            e = c.ha,
            f = c.Ff,
            g = a.ma.D;
        a = {
            Ea: "~"
        };
        var h = e.map(function(l) {
                return d.aa[l.getDomId()]
            }),
            k = [];
        c = e.map(function(l) {
            return l.getAdUnitPath().replace(/,/g, ":").split("/").map(function(m) {
                if (!m) return "";
                var n = _.z(k, "findIndex").call(k, function(p) {
                    return p === m
                });
                return 0 <= n ? n : k.push(m) - 1
            }).join("/")
        });
        b.set("iu_parts", {
            value: k
        }).set("enc_prev_ius", {
            value: c
        }).set("prev_iu_szs", {
            value: h.map(function(l) {
                return jh(l)
            })
        }).set("fluid", {
            value: function() {
                var l = !1,
                    m = h.map(function(n) {
                        n = (_.E = ih(n), _.z(_.E, "includes")).call(_.E, "fluid");
                        l || (l = n);
                        return n ? "height" : "0"
                    });
                return l ? m : null
            }()
        }).set("ifi", {
            value: function() {
                var l = di(g);
                if (!f) {
                    l += 1;
                    var m = g,
                        n = e.length;
                    n = void 0 === n ? 1 : n;
                    m = $y(re(m)) || m;
                    m.google_unique_id = (m.google_unique_id || 0) + n
                }
                return l
            }()
        }).set("didk", {
            value: _.H(ZA) ? Xn(e, function(l) {
                return _.qf(l.getDomId())
            }, a) : null,
            options: _.z(Object, "assign").call(Object, {}, a, {
                Nb: !0
            })
        })
    }, function(a, b) {
        var c = a.na;
        a = c.ha;
        c = c.W;
        var d = c.fa,
            e = c.aa;
        b.set("sfv", {
            value: vI ? vI : vI = Wk()
        }).set("fsfs", {
            value: Xn(a, function(f) {
                f = e[f.getDomId()];
                var g;
                return Number(null != (g = null == f ? void 0 : co(f, 12)) ? g : fl(d, 13))
            }, {
                Yc: 0
            }),
            options: {
                Ea: ",",
                Uc: 0,
                Nb: !0
            }
        }).set("fsbs", {
            value: Xn(a, function(f) {
                f = e[f.getDomId()].hc();
                var g = d.hc(),
                    h;
                return (null != (h = null == f ? void 0 : co(f, 3)) ? h : null == g ? 0 : _.G(g, 3)) ? 1 : 0
            }, {
                Yc: 0
            }),
            options: {
                Uc: 0,
                Nb: !0
            }
        })
    }, function(a, b) {
        var c = a.ma.O;
        a = a.na;
        var d = a.Ff;
        b.set("rcs", {
            value: Xn(a.ha, function(e) {
                if (!d) {
                    var f = c.j.get(e);
                    f && f.Kh++
                }
                return cH(c, e)
            }, {
                Yc: 0
            }),
            options: {
                Uc: 0,
                Nb: !0
            }
        })
    }, function(a, b) {
        var c = a.na;
        a = a.ma.Za;
        c = c.W.aa[c.ha[0].getDomId()];
        b.set("click", {
            value: !a && c.getClickUrl() ? _.Qi(c, 7) : null
        })
    }, function(a, b, c) {
        var d = a.na,
            e = d.ha,
            f = d.W.aa;
        a = a.ma;
        var g = a.da,
            h = a.D;
        c = void 0 === c ? function(k, l) {
            return af(k, l)
        } : c;
        a = e.map(function(k) {
            return f[k.getDomId()]
        });
        b.set("ists", {
            value: Un(a, function(k) {
                return 0 !== Ko(k)
            }) || null
        }).set("fas", {
            value: Xn(a, function(k) {
                return Oo(Ko(k))
            }, {
                Yc: 0
            }),
            options: {
                Uc: 0,
                Nb: !0
            }
        }).set("itsi", {
            value: e.some(function(k) {
                var l;
                return !Lo(k) && 5 === (null == (l = f[k.getDomId()]) ? void 0 : Ko(l))
            }) ? function() {
                var k = c(g, h);
                if (!k) return 1;
                var l;
                k = Math.max.apply(Math, _.Ee(null != (l = _.Io(k, 604800)) ? l : []));
                return isFinite(k) ? Math.floor(Math.max((Date.now() - k) / 6E4, 1)) : null
            }() : null
        }).set("fsapi", {
            value: Un(a, function(k) {
                return 5 === Ko(k) && _.H(_.FA)
            }) || null
        })
    }, function(a, b) {
        a = a.na;
        var c = a.W.aa;
        a = a.ha.map(function(d) {
            return c[d.getDomId()]
        });
        b.set("rbvs", {
            value: Un(a, function(d) {
                return 4 === Ko(d)
            }) || null
        })
    }, function(a, b) {
        var c = a.na,
            d = a.ma;
        a = d.isSecureContext;
        d = d.D;
        var e = b.set;
        var f = c.ha;
        var g = c.W;
        c = c.Rb;
        var h = g.fa,
            k = g.aa,
            l = new Yh;
        l.set(0, 1 !== c);
        k = k[f[0].getDomId()];
        l.set(1, !!_.G(k, 17));
        l.set(2, wo(f, g));
        l.set(3, _.G(h, 27) || !1);
        l.set(4, 3 === c);
        f = $h(l);
        e.call(b, "eri", {
            value: f
        }).set("gct", {
            value: qo("google_preview", d)
        }).set("sc", {
            value: a ? 1 : 0,
            options: {
                Da: !0
            }
        })
    }, function(a, b) {
        var c = a.ma,
            d = c.D,
            e = c.da;
        c = c.za;
        var f = to(a.na.W.fa.Ia()),
            g = _.il(c, "__gads", e);
        a = "1" === _.il(c, "__gpi_opt_out", e) ? "1" : null;
        b = b.set("cookie", {
            value: g,
            options: {
                Da: !0
            }
        }).set("cookie_enabled", {
            value: !g && WD(c, e) ? "1" : null
        });
        g = d.document;
        var h = g.domain;
        d = b.set.call(b, "cdm", {
            value: (f || oh(d)) === g.URL ? "" : h
        });
        f = d.set;
        e = (e = _.il(c, "__gpi", e)) && !_.z(e, "includes").call(e, "&") ? e : null;
        f.call(d, "gpic", {
            value: e
        }).set("pdopt", {
            value: a
        })
    }, function(a, b) {
        a = a.ma.D;
        b.set("arp", {
            value: Ym(a) ? 1 : null
        }).set("abxe", {
            value: _.Dj(a.top) || Jy(a.IntersectionObserver) ? 1 : null
        })
    }, function(a, b) {
        var c = a.ma.D;
        a = to(a.na.W.fa.Ia());
        b.set("dt", {
            value: (new Date).getTime()
        });
        if (!a) {
            a = b.set;
            try {
                var d = Math.round(Date.parse(c.document.lastModified) / 1E3) || null
            } catch (e) {
                d = null
            }
            a.call(b, "lmt", {
                value: d
            })
        }
    }, function(a, b) {
        var c = a.na,
            d = c.W;
        c = c.ha;
        var e = a.ma;
        a = e.D;
        var f = e.Za;
        e = hh(!0, a);
        for (var g = d.fa, h = a.document, k = d.aa, l = [], m = [], n = _.y(c), p = n.next(); !p.done; p = n.next()) {
            p = p.value;
            var t = k[p.getDomId()];
            p = Ih(p, t, h, eo(g, t));
            t = void 0;
            var u = f ? null != (t = p) ? t : yM : p;
            u && (l.push(Math.round(u.x)), m.push(Math.round(u.y)))
        }
        e && (d.Pc = e);
        f = nh(a) ? null : hh(!1, a);
        try {
            var v = a.top;
            var x = Qs(v.document, v)
        } catch (F) {
            x = new _.qh(-12245933, -12245933)
        }
        b.set("adxs", {
            value: l,
            options: {
                Da: !0
            }
        }).set("adys", {
            value: m,
            options: {
                Da: !0
            }
        }).set("biw", {
            value: e ? e.width : null
        }).set("bih", {
            value: e ? e.height : null
        }).set("isw", {
            value: e ? null == f ? void 0 : f.width : null
        }).set("ish", {
            value: e ? null == f ? void 0 : f.height : null
        }).set("scr_x", {
            value: Math.round(x.x),
            options: {
                Da: !0
            }
        }).set("scr_y", {
            value: Math.round(x.y),
            options: {
                Da: !0
            }
        }).set("btvi", {
            value: Ss(c, a, d),
            options: {
                Da: !0,
                Ea: "|"
            }
        })
    }, function(a, b) {
        var c = a.ma.O;
        b.set("ucis", {
            value: a.na.ha.map(function(d) {
                d = c.j.get(d);
                null != d.Qd || (d.Qd = window === window.top ? (++c.T).toString(36) : cy());
                return d.Qd
            }),
            options: {
                Ea: "|"
            }
        }).set("oid", {
            value: 2
        })
    }, function(a, b) {
        a = a.na;
        var c = a.ha,
            d = a.W,
            e = d.aa;
        a = new _.w.Map;
        d = _.y(d.fa.Ia());
        for (var f = d.next(); !f.done; f = d.next()) {
            var g = f.value;
            a.set(_.R(g, 1), [_.zk(g, 2)[0]])
        }
        for (d = 0; d < c.length; d++)
            if (g = e[c[d].getDomId()])
                for (g = _.y(g.Ia()), f = g.next(); !f.done; f = g.next()) {
                    var h = f.value;
                    f = _.R(h, 1);
                    var k = a.get(f) || [];
                    h = _.zk(h, 2)[0];
                    1 === c.length ? k[0] = h : h !== k[0] && (k[d + 1] = h);
                    a.set(f, k)
                }
        c = [];
        e = _.y(_.z(a, "keys").call(a));
        for (d = e.next(); !d.done; d = e.next()) g = d.value, d = Pk()[g], g = a.get(g), d && g && (1 < g.length ? (g = g.map(function(l) {
            return encodeURIComponent(l || "")
        }).join(), c.push(d + "," + g)) : 1 === g.length && "url" !== d && b.set(d, {
            value: g[0]
        }));
        c.length && b.set("sps", {
            value: c,
            options: {
                Ea: "|"
            }
        })
    }, function(a, b) {
        var c = a.ma;
        a = c.D;
        c = c.Db;
        var d = _.mh(251),
            e, f, g, h, k, l, m;
        var n = a;
        n = void 0 === n ? Yx : n;
        try {
            var p = n.history.length
        } catch (Ia) {
            p = 0
        }
        b = b.set("u_his", {
            value: p
        }).set("u_h", {
            value: null == (e = a.screen) ? void 0 : e.height
        }).set("u_w", {
            value: null == (f = a.screen) ? void 0 : f.width
        }).set("u_ah", {
            value: null == (g = a.screen) ? void 0 : g.availHeight
        }).set("u_aw", {
            value: null == (h = a.screen) ? void 0 : h.availWidth
        }).set("u_cd", {
            value: null == (k = a.screen) ? void 0 : k.colorDepth
        });
        e = b.set;
        f = a;
        f = void 0 === f ? _.r : f;
        f = f.devicePixelRatio;
        e = e.call(b, "u_sd", {
            value: "number" === typeof f ? +f.toFixed(3) : null
        }).set("u_tz", {
            value: -(new Date).getTimezoneOffset()
        });
        f = e.set;
        try {
            var t, u, v, x, F = null != (x = null == (t = a.external) ? void 0 : null == (u = t.getHostEnvironmentValue) ? void 0 : null == (v = u.bind(a.external)) ? void 0 : v("os-mode")) ? x : "",
                D, M = Number(null == (D = JSON.parse(F)) ? void 0 : D["os-mode"]);
            var B = 0 <= M ? M + 1 : null
        } catch (Ia) {
            B = null
        }
        B = f.call(e, "wsm", {
            value: B
        }).set("dmc", {
            value: null != (m = null == (l = a.navigator) ? void 0 : l.deviceMemory) ? m : null
        });
        l = B.set;
        m = a;
        m = void 0 === m ? _.r : m;
        t = new Yh;
        "SVGElement" in m && "createElementNS" in m.document && t.set(0);
        u = Iy();
        u["allow-top-navigation-by-user-activation"] && t.set(1);
        u["allow-popups-to-escape-sandbox"] && t.set(2);
        m.crypto && m.crypto.subtle && t.set(3);
        "TextDecoder" in m && "TextEncoder" in m && t.set(4);
        m = $h(t);
        d = l.call(B, "bc", {
            value: m
        }).set("uach", {
            value: d ? Ov(d, 3) : null
        });
        l = d.set;
        if (c) var K = null;
        else if (c = null == (K = a.navigator) ? void 0 : K.userActivation) {
            K = 0;
            if (null == c ? 0 : c.hasBeenActive) K |= 1;
            if (null == c ? 0 : c.isActive) K |= 2
        } else K = void 0;
        K = l.call(d, "uas", {
            value: K
        });
        c = K.set;
        a: {
            try {
                var V, O, aa = null == (V = a.performance) ? void 0 : null == (O = V.getEntriesByType("navigation")) ? void 0 : O[0];
                if (null == aa ? 0 : aa.type) {
                    var ma;
                    var ta = null != (ma = hE.get(aa.type)) ? ma : null;
                    break a
                }
            } catch (Ia) {}
            var da, xa, Da;ta = null != (Da = iE.get(null == (da = a.performance) ? void 0 : null == (xa = da.navigation) ? void 0 : xa.type)) ? Da : null
        }
        ta = c.call(K, "nvt", {
            value: ta
        });
        V = ta.set;
        _.H(aB) ? (O = 0 === (0, _.hn)(), aa = !!a.document.querySelector('meta[name=viewport][content*="width=device-width"]'), a = O || aa ? Math.round(100 * (a.outerWidth / a.innerWidth + _.z(Number, "EPSILON"))) / 100 : Math.round(100 * (a.outerWidth / a.innerWidth / .4 + _.z(Number, "EPSILON"))) / 100) : a = null;
        V.call(ta, "bz", {
            value: a
        })
    }, function(a, b) {
        var c = a.ma,
            d = c.D,
            e = c.O;
        c = c.Za;
        a = a.na;
        var f = a.ha;
        a = a.W;
        var g = a.fa,
            h = a.aa;
        a = ro("google_preview", d);
        var k = d.document,
            l = a ? uo(k.URL) : k.URL;
        k = a ? uo(k.referrer) : k.referrer;
        a = !1;
        if (c) c = to(g.Ia());
        else {
            var m;
            c = null != (m = to(h[f[0].getDomId()].Ia())) ? m : to(g.Ia())
        }
        if (null != c) {
            var n = l;
            nh(d) || (k = "", a = !0)
        } else c = l;
        m = vo(d);
        b.set("nhd", {
            value: m || null
        }).set("url", {
            value: c
        }).set("loc", {
            value: null !== n && n !== c ? n : null
        }).set("ref", {
            value: k
        });
        if (m) {
            n = b.set;
            var p, t;
            m = _.Dj(d.top) && (null == (p = d.top) ? void 0 : null == (t = p.location) ? void 0 : t.href);
            var u;
            p = null == (u = d.location) ? void 0 : u.ancestorOrigins;
            d = ck(d) || "";
            u = (null == p ? void 0 : p[p.length - 1]) || "";
            d = (d = m || d || u) ? a ? xy(d.match(_.wy)[3] || null) : d : null;
            n.call(b, "top", {
                value: d
            }).set("etu", {
                value: e.de
            })
        }
    }, function(a, b) {
        a = a.ma.context.pvsid;
        b.set("rumc", {
            value: _.H(oB) || _.kf(Cg).j ? a : null
        }).set("rume", {
            value: _.H(JA) ? 1 : null
        })
    }, function(a, b) {
        b.set("vis", {
            value: _.yp(a.ma.D.document)
        })
    }, function(a, b) {
        var c = a.na,
            d = c.ha;
        c = c.W;
        a = a.ma.D;
        var e = cn(d, c.aa, c.fa),
            f = fn(d, e, a);
        c = f.Yj;
        f = f.Ck;
        var g = jn(d, e, a),
            h = g.oj;
        g = g.Xj;
        null != hJ || (hJ = ek(a));
        var k = !1;
        d = d.map(function(m) {
            var n;
            m = null != (n = e.get(m)) ? n : 0;
            if (0 === m) return null;
            k = !0;
            return 2 === m ? "1" : "0"
        });
        var l;
        b.set("aee", {
            value: k ? d : null,
            options: {
                Ea: "|"
            }
        }).set("psz", {
            value: c,
            options: {
                Ea: "|"
            }
        }).set("msz", {
            value: f,
            options: {
                Ea: "|"
            }
        }).set("fws", {
            value: h,
            options: {
                Da: !0
            }
        }).set("ohw", {
            value: g,
            options: {
                Da: !0
            }
        }).set("ea", {
            value: hJ ? null : "0",
            options: {
                Da: !0
            }
        }).set("efat", {
            value: "#flexibleAdSlotTest" === (null == (l = a.location) ? void 0 : l.hash) ? "1" : null
        })
    }, function(a, b) {
        b.set("psts", {
            value: bH(a.ma.O, a.na.ha)
        })
    }, function(a, b) {
        var c = a.ma;
        a = c.da;
        c = c.D;
        var d;
        var e = c.document.domain,
            f = null != (d = _.G(a, 5) && bf(c) ? c.document.cookie : null) ? d : "",
            g = c.history.length,
            h = c.screen,
            k = c.document.referrer;
        if (re()) var l = window.gaGlobal || {};
        else {
            var m = Math.round((new Date).getTime() / 1E3),
                n = c.google_analytics_domain_name;
            e = "undefined" == typeof n ? tC("auto", e) : tC(n, e);
            var p = -1 < f.indexOf("__utma=" + e + "."),
                t = -1 < f.indexOf("__utmb=" + e);
            (d = ($y() || window).gaGlobal) || (d = {}, ($y() || window).gaGlobal = d);
            var u = !1;
            if (p) {
                var v = f.split("__utma=" + e + ".")[1].split(";")[0].split(".");
                t ? d.sid = v[3] : d.sid || (d.sid = m + "");
                d.vid = v[0] + "." + v[1];
                d.from_cookie = !0
            } else {
                d.sid || (d.sid = m + "");
                if (!d.vid) {
                    u = !0;
                    t = Math.round(2147483647 * Math.random());
                    p = rC.appName;
                    var x = rC.version,
                        F = rC.language ? rC.language : rC.browserLanguage,
                        D = rC.platform,
                        M = rC.userAgent;
                    try {
                        v = rC.javaEnabled()
                    } catch (B) {
                        v = !1
                    }
                    v = [p, x, F, D, M, v ? 1 : 0].join("");
                    h ? v += h.width + "x" + h.height + h.colorDepth : _.r.java && _.r.java.awt && (h = _.r.java.awt.Toolkit.getDefaultToolkit().getScreenSize(), v += h.screen.width + "x" + h.screen.height);
                    v = v + f + (k || "");
                    for (k = v.length; 0 < g;) v += g-- ^ k++;
                    d.vid = (t ^ sC(v) & 2147483647) + "." + m
                }
                d.from_cookie || (d.from_cookie = !1)
            }
            if (!d.cid) {
                b: for (m = 999, n && (n = 0 == n.indexOf(".") ? n.substr(1) : n, m = n.split(".").length), n = 999, f = f.split(";"), v = 0; v < f.length; v++)
                    if (k = uC.exec(f[v]) || vC.exec(f[v]) || fD.exec(f[v])) {
                        h = k[1] || 0;
                        if (h == m) {
                            l = k[2];
                            break b
                        }
                        h < n && (n = h, l = k[2])
                    }u && l && -1 != l.search(/^\d+\.\d+$/) ? (d.vid = l, d.from_cookie = !0) : l != d.vid && (d.cid = l)
            }
            d.dh = e;
            d.hid || (d.hid = Math.round(2147483647 * Math.random()));
            l = d
        }
        e = l.sid;
        d = l.hid;
        u = l.from_cookie;
        f = l.cid;
        u && !_.G(a, 5) || b.set("ga_vid", {
            value: l.vid
        }).set("ga_sid", {
            value: e
        }).set("ga_hid", {
            value: d
        }).set("ga_fc", {
            value: u
        }).set("ga_cid", {
            value: f
        }).set("ga_wpids", {
            value: c.google_analytics_uacct
        })
    }, function(a, b) {
        var c = a.ma.D,
            d = c.navigator;
        c = c.document;
        var e = a.Ok;
        a = e.fg;
        e = e.kj;
        if (!_.H(sB)) {
            "runAdAuction" in d && "joinAdInterestGroup" in d && of ("run-ad-auction", c) && b.set("td", {
                value: 1
            });
            if (a) switch (a.kind) {
                case 0:
                    b.set("eig", {
                        value: a.signal
                    });
                    break;
                case 1:
                    b.set("eigir", {
                        value: a.reason,
                        options: {
                            Da: !0
                        }
                    });
                    break;
                default:
                    _.Va(a)
            }
            void 0 !== e && b.set("egid", {
                value: e
            })
        }
    }, function(a, b) {
        var c = a.Fk,
            d = c.Ik;
        c = c.Gk; of ("browsing-topics", a.ma.D.document) && (b.set("topics", {
            value: d instanceof Uint8Array ? Db(d, 3) : d
        }), !d || d instanceof Uint8Array || b.set("tps", {
            value: d
        }), c && b.set("htps", {
            value: c
        }))
    }, function(a, b) {
        var c = a.ma,
            d = c.D,
            e = c.da,
            f = a.na.ha;
        c = a.wk;
        a = c.Ge;
        var g = c.gj,
            h = c.Tj;
        if (!_.H(rA)) {
            c = b.set;
            e = af(e, d);
            d = og(f[0].getAdUnitPath());
            f = new Gx;
            Yi(f, e, d, h);
            g = null != g ? g : [];
            if (d && a && g && "function" === typeof a.getUserIdsAsEidBySource) {
                if ("function" === typeof a.getUserIdsAsEids) try {
                    for (var k = _.y(a.getUserIdsAsEids()), l = k.next(); !l.done; l = k.next()) {
                        var m = l.value;
                        "string" === typeof m.source && Oi(52, m.source)
                    }
                } catch (p) {
                    var n;
                    Oi(45, "", null == (n = p) ? void 0 : n.message)
                }
                k = _.y(g);
                for (l = k.next(); !l.done; l = k.next())
                    if (l = l.value, String(_.R(l, 1)) === d)
                        for (l = _.y(bh(l, Zw, 2)), m = l.next(); !m.done; m = l.next())
                            if (m = m.value, _.G(m, Wj(m, $w, 3)) && (m = _.R(m, 1), !Ri(f, m))) {
                                n = null;
                                try {
                                    e = h = g = void 0, n = null == (g = a.getUserIdsAsEidBySource(m)) ? void 0 : null == (h = g.uids) ? void 0 : null == (e = h[0]) ? void 0 : e.id
                                } catch (p) {
                                    g = void 0, Oi(45, m, null == (g = p) ? void 0 : g.message)
                                }
                                n && (300 < n.length ? (g = {}, Oi(12, m, null, (g.sl = String(n.length), g.fp = "1", g))) : (g = Bx(m), g = rn(g, 2, n), g = _.Wi(g, 11, !0), Xi(f, 2, Pi, g), g = {}, Oi(19, m, null, (g.fp = "1", g.hs = n ? "1" : "0", g))))
                            }
            }
            bh(f, Pi, 2).length ? (Oi(50, ""), a = Db(f.j(), 3)) : a = null;
            c.call(b, "a3p", {
                value: a
            })
        }
    }, function(a, b) {
        var c = a.eb.Sd,
            d = a.na.ha;
        a = {
            Ea: "~"
        };
        var e = function() {
            return c ? d.map(function(f) {
                return c.get(f)
            }) : []
        }();
        b.set("cbidsp", {
            value: Xn(e, function(f) {
                return Db(f.j(), 3)
            }, a),
            options: _.z(Object, "assign").call(Object, {}, a, {
                Nb: !0
            })
        })
    }, function(a, b) {
        a = a.na.W.fa;
        an(a.pe(), yr, 1) && (a = xr(a.pe(), yr, 1), b.set("cmrv", {
            value: 1
        }).set("cmrq", {
            value: _.R(a, 1)
        }).set("cmrc", {
            value: _.zk(a, 2),
            options: {
                Ea: ">"
            }
        }).set("cmrids", {
            value: _.zk(a, 3),
            options: {
                Ea: "!"
            }
        }).set("cmrf", {
            value: _.R(a, 4)
        }))
    }, function(a, b) {
        var c = [];
        a = _.y(bh(xr(a.na.W.fa.pe(), Ar, 2), kp, 1));
        for (var d = a.next(); !d.done; d = a.next()) d = d.value, _.zk(d, 2).length && c.push(_.Xj(d, 1, 0) + 2 + "=" + _.zk(d, 2).join("|"));
        b.set("pps", {
            value: c,
            options: {
                Ea: "~"
            }
        })
    }, function(a, b) {
        b.set("scar", {
            value: a.bk.xj
        })
    }, function(a, b) {
        a = a.ma.D.document;
        !_.H(nB) && of ("attribution-reporting", a) && b.set("nt", {
            value: 1
        })
    }, function(a, b) {
        if (a = a.jk.ik) a = Ov(Qj(a), 3), b.set("psd", {
            value: a
        })
    }, function(a, b) {
        a = _.hf(a.ma.D);
        var c = xo;
        0 < a && c >= a && b.set("dlt", {
            value: a
        }).set("idt", {
            value: c - a
        })
    }, function(a, b) {
        a = a.na.W.fa;
        b.set("ppid", {
            value: null != _.Qi(a, 16) ? _.R(a, 16) : null,
            options: {
                Da: !0
            }
        })
    }, function(a, b) {
        var c = b.set;
        (a = _.Qi(a.na.W.fa, 8)) ? (50 < a.length && (a = a.substring(0, 50)), a = "a " + Ov('role:1 producer:12 loc:"' + a + '"')) : a = "";
        c.call(b, "uule", {
            value: a
        })
    }, function(a, b) {
        a = a.na;
        var c = a.W.fa;
        b.set("prev_scp", {
            value: jq(a.ha, a.W),
            options: {
                Nb: !0,
                Ea: "|"
            }
        }).set("cust_params", {
            value: lq(c),
            options: {
                Ea: "&"
            }
        })
    }, function(a, b) {
        var c = a.na,
            d = c.W;
        a = a.ma;
        var e = a.O,
            f = a.Za;
        b.set("adks", {
            value: c.ha.map(function(g) {
                if (f) {
                    var h = d.aa[g.getDomId()];
                    h = Vm(h);
                    if (g = e.j.get(g)) g.Qc = h;
                    return h
                }
                h = d.fa;
                var k = d.aa[g.getDomId()],
                    l;
                if (!(l = Ks(e, g))) {
                    h = Vm(k, _.G(h, 6) || _.G(k, 17) ? null : Ch(g));
                    if (g = e.j.get(g)) g.Qc = h;
                    l = h
                }
                return l
            })
        })
    }, function(a, b) {
        var c = b.set;
        a = a.ma.D;
        var d = Vy(a);
        var e = dk(a, a.google_ad_width, a.google_ad_height);
        var f = d.location.href;
        if (d === d.top) f = !0;
        else {
            var g = !1,
                h = d.document;
            h && h.referrer && (f = h.referrer, d.parent === d.top && (g = !0));
            (d = d.location.ancestorOrigins) && (d = d[d.length - 1]) && -1 === f.indexOf(d) && (g = !1);
            f = g
        }
        g = a.top == a ? 0 : _.Dj(a.top) ? 1 : 2;
        d = 4;
        e || 1 != g ? e || 2 != g ? e && 1 == g ? d = 7 : e && 2 == g && (d = 8) : d = 6 : d = 5;
        f && (d |= 16);
        e = "" + d;
        if (a != a.top)
            for (; a && a != a.top && _.Dj(a) && !a.sf_ && !a.$sf && !a.inGptIF && !a.inDapIF; a = a.parent);
        c.call(b, "frm", {
            value: e || null
        })
    }]);
    var zM = function(a, b, c) {
        Z.call(this, a, 798);
        this.output = W(this);
        this.m = Y(this, b);
        this.B = X(this, c)
    };
    _.T(zM, Z);
    zM.prototype.j = function() {
        var a = this,
            b = new _.w.Map;
        if (this.m.value) {
            var c = this.m.value,
                d = c.ma.Za,
                e = c.eb.Sd;
            c = _.y(c.na.ha);
            for (var f = c.next(); !f.done; f = c.next()) {
                f = f.value;
                var g = void 0,
                    h = null == (g = e) ? void 0 : g.get(f);
                b.set(f, d ? AM(this, f, h) : function() {
                    return a.B.value
                })
            }
        }
        this.output.G(b)
    };
    var AM = function(a, b, c) {
        return Dh(function() {
            var d = _.z(Object, "assign").call(Object, {}, a.m.value);
            d.na.Ff = !0;
            d.na.ha = [b];
            c && (d.eb.Sd = new _.w.Map, d.eb.Sd.set(b, c));
            return po($s(d)).url
        })
    };
    var BM = function(a, b, c, d, e, f, g) {
        Z.call(this, a, 810);
        this.B = b;
        this.Za = c;
        this.W = d;
        this.X = e;
        this.D = f;
        this.da = g;
        this.m = W(this)
    };
    _.T(BM, Z);
    BM.prototype.j = function() {
        var a = this,
            b = this.B;
        !this.Za && 1 < this.B.length && (b = [b[0]]);
        b = b.filter(function(c) {
            if (c.K) return !1;
            var d = a.W.aa[c.getDomId()],
                e;
            if (e = !(So(Ko(d)) && (_.E = vf(OA), _.z(_.E, "includes")).call(_.E, String(Ko(d))))) e = a.X, Wf(a.D) && 4 === Ko(d) ? (Q(e, QH("googletag.enums.OutOfPageFormat.REWARDED", String(c.getAdUnitPath()))), e = !0) : e = !1, e = !e;
            return e && !No(a.context, a.X, c, d, a.D, a.da)
        });
        30 < b.length && (Q(this.X, PH("30", String(b.length), String(b.length - 30))), b = b.slice(0, 30));
        this.m.G(b)
    };
    var CM = function(a, b, c) {
        Z.call(this, a, 919);
        this.m = b;
        this.da = c;
        this.output = W(this)
    };
    _.T(CM, Z);
    CM.prototype.j = function() {
        var a, b = !(null == (a = this.m) ? 0 : _.G(a, 9)) && !!_.G(this.da, 5);
        this.output.G(b)
    };
    var DM = function(a, b, c, d, e, f) {
        Z.call(this, a, 928);
        this.requestId = b;
        this.F = f;
        this.output = RE(this);
        this.B = X(this, c);
        e && (this.m = X(this, e));
        TE(this, d)
    };
    _.T(DM, Z);
    var EM = function(a) {
        return a.m ? a.F.split(",").some(function(b) {
            var c;
            return null == (c = a.m) ? void 0 : c.value.has(b)
        }) : !1
    };
    DM.prototype.j = function() {
        var a = this.context,
            b = this.requestId,
            c = this.B.value.length,
            d = EM(this);
        if (a.Kd) {
            var e = a.Sb;
            a = ug(a);
            var f = new Qz;
            b = _.qg(f, 2, b);
            c = _.Bg(b, 1, c);
            d = _.Mp(c, 3, d);
            d = _.wg(a, 7, xg, d);
            Ge(e, d)
        }
        this.output.notify()
    };
    var FM = function(a, b, c, d) {
        Z.call(this, a, 867);
        this.xa = b;
        this.W = c;
        this.output = RE(this);
        this.m = X(this, d)
    };
    _.T(FM, Z);
    FM.prototype.j = function() {
        for (var a = _.y(this.m.value), b = a.next(); !b.done; b = a.next()) {
            var c = _.y(b.value);
            b = c.next().value;
            c = c.next().value;
            var d = ah(this.W.aa[b.getDomId()], 20);
            Xq(b, PG, 808, {
                Ui: c,
                sk: d
            });
            Xq(this.xa, "slotRequested", 705, new uK(b, "publisher_ads"))
        }
        this.output.notify()
    };
    var GM = function(a, b, c, d, e, f, g, h, k, l, m, n, p, t, u, v, x, F, D, M, B, K, V, O, aa, ma, ta, da, xa, Da, Ia) {
        Z.call(this, a, 785, _.tf($A));
        this.Za = b;
        this.O = c;
        this.za = d;
        this.W = e;
        this.De = f;
        this.Rb = g;
        this.Oc = h;
        this.Nc = k;
        this.vf = l;
        this.Tc = m;
        this.timer = n;
        this.da = p;
        this.isSecureContext = t;
        this.Db = u;
        this.D = v;
        this.m = W(this);
        this.B = W(this);
        this.Z = W(this);
        TE(this, V);
        this.va = SE(this, x);
        this.I = SE(this, F);
        this.M = X(this, D);
        B && (this.F = SE(this, B.Pd), B.Od && (this.Na = Y(this, B.Od)));
        K && (this.V = SE(this, K.Wb));
        TE(this, V);
        O && (this.Ba = X(this, O));
        aa && (this.ba = new KE(aa));
        ma && (this.Aa = Y(this, ma));
        ta && (this.ka = X(this, ta));
        da && TE(this, da);
        xa && (this.oa = X(this, xa));
        M && (this.ja = Y(this, M));
        Da && (this.Ma = Y(this, Da.cg));
        Ia && (this.kb = X(this, Ia))
    };
    _.T(GM, Z);
    GM.prototype.j = function() {
        if (this.M.value.length) {
            var a = null;
            if (this.F) {
                var b = this.F.value;
                a = b ? b : this.V && !this.V.sb() ? 9 : this.F.sb() ? null : 1
            }
            this.I.value && (this.O.de = this.I.value);
            var c, d, e, f, g, h, k, l, m, n, p;
            b = {
                ma: {
                    D: this.D,
                    context: this.context,
                    O: this.O,
                    za: this.za,
                    da: this.da,
                    Za: this.Za,
                    vf: this.vf,
                    isSecureContext: this.isSecureContext,
                    Db: this.Db
                },
                na: {
                    ha: this.M.value,
                    W: this.W,
                    Rb: this.Rb,
                    Ff: !1
                },
                Rk: {
                    Oc: this.Oc,
                    Nc: this.Nc
                },
                bk: {
                    xj: null != (n = this.va.value) ? n : "0"
                },
                gi: {
                    De: this.De,
                    Tc: this.Tc
                },
                eb: {
                    Sd: null == (c = this.ja) ? void 0 : c.value
                },
                Fk: {
                    Ik: a,
                    Gk: null == (d = this.Na) ? void 0 : d.value
                },
                wk: {
                    Tj: null != (p = null == (e = this.Ba) ? void 0 : e.value) ? p : void 0,
                    Ge: null == (f = this.ba) ? void 0 : f.value,
                    gj: null == (g = this.ka) ? void 0 : g.value
                },
                lk: {
                    yj: null == (h = this.Aa) ? void 0 : h.value,
                    tj: null == (k = this.oa) ? void 0 : k.value
                },
                jk: {
                    ik: null == (l = this.Ma) ? void 0 : l.value
                },
                Ok: {
                    fg: null == (m = this.kb) ? void 0 : m.value
                }
            };
            this.B.G(b);
            c = po($s(b));
            d = c.url;
            ED(this.timer, (9).toString(), 9, c.Cg);
            this.m.G(d);
            this.Z.G(Vs(b) ? _.nu("https://pagead2.googlesyndication.com/gampad/ads/%{uuid}") : _.nu("https://securepubads.g.doubleclick.net/gampad/ads/%{uuid}"))
        } else this.m.G(""), this.B.ga()
    };
    var HM = function(a, b, c, d, e, f) {
        Z.call(this, a, 878);
        this.m = b;
        this.ca = c;
        this.W = d;
        this.D = e;
        this.output = RE(this);
        f && TE(this, f)
    };
    _.T(HM, Z);
    HM.prototype.j = function() {
        for (var a = _.y(this.m), b = a.next(); !b.done; b = a.next()) {
            b = b.value;
            var c = Ch(b, this.ca);
            if (!Bh(b, this.ca) && c) {
                a: {
                    var d = c;
                    var e = this.W.aa[b.getDomId()],
                        f = 0,
                        g = 0;e = _.y(ih(e));
                    for (var h = e.next(); !h.done; h = e.next())
                        if (h = h.value, Array.isArray(h)) {
                            var k = _.y(h);
                            h = k.next().value;
                            k = k.next().value;
                            if (!("number" !== typeof h || "number" !== typeof k || 1 >= h || 1 >= k || (f = f || h, g = Math.min(g || Infinity, k), $m(Eh(d, this.D)) || !d.parentElement || $m(Eh(d.parentElement, this.D))))) {
                                d = [f, 0];
                                break a
                            }
                        }
                    d = f || g ? [f, g] : null
                }
                g = this.W;f = g.fa;g = g.aa[b.getDomId()];Zm(c, Kh(b), eo(f, g), d)
            }
        }
        this.output.notify()
    };
    var IM = function(a, b, c, d, e, f, g) {
            this.m = a;
            this.B = b;
            this.K = c;
            this.ha = d;
            this.da = e;
            this.T = f;
            this.J = g;
            this.C = "";
            this.o = -1;
            this.j = 1;
            this.A = ""
        },
        KM = function(a, b) {
            if (b)
                if (1 !== a.j && 2 !== a.j) JM(a, new MD("state err: (" + ([a.j, a.A.length].join() + ")")));
                else {
                    a.A && (b = a.A + b);
                    var c = 0;
                    do {
                        var d = b.indexOf("\n", c);
                        var e = -1 !== d;
                        if (!e) break;
                        var f = a;
                        c = b.substr(c, d - c);
                        if (1 === f.j) f.C = c, ++f.o, f.j = 2;
                        else {
                            try {
                                f.m(f.o, f.C, {
                                    kind: 0,
                                    wb: Ry(c)
                                }, f.ha, f.da, f.T, f.J), f.C = ""
                            } catch (g) {}
                            f.j = 1
                        }
                        c = d + 1
                    } while (e && c < b.length);
                    a.A = b.substr(c)
                }
        },
        JM = function(a, b) {
            a.j = 4;
            try {
                a.B(b)
            } catch (c) {}
        },
        LM = function(a) {
            1 !== a.j || a.A ? JM(a, new MD("state err (" + ([a.j, a.A.length].join() + ")"))) : (a.j = 3, a.K(a.o, a.ha, a.da))
        };
    var MM = function(a, b, c, d, e, f, g, h, k, l, m, n) {
        Z.call(this, a, 788);
        this.V = b;
        this.M = c;
        this.I = d;
        this.da = e;
        this.output = RE(this);
        this.F = 0;
        this.B = !1;
        this.m = null != n ? n : new XMLHttpRequest;
        this.ja = X(this, f);
        g && (this.ka = Y(this, g));
        this.oa = X(this, h);
        TE(this, k);
        this.Z = X(this, l);
        if (null == m ? 0 : m.qc) this.ba = Y(this, m.qc)
    };
    _.T(MM, Z);
    MM.prototype.j = function() {
        var a = this,
            b = this.oa.value;
        if (b) {
            var c, d = new IM(this.V, this.M, this.I, this.ja.value, this.da, null == (c = this.ka) ? void 0 : c.value);
            this.m.open("GET", b);
            this.m.withCredentials = this.Z.value;
            var e;
            if (null == (e = this.ba) ? 0 : e.value) this.m.deprecatedBrowsingTopics = !0;
            this.m.onreadystatechange = function() {
                NM(a, d, !1)
            };
            this.m.onload = function() {
                NM(a, d, !0)
            };
            this.m.onerror = function() {
                JM(d, new ND("XHR error"))
            };
            this.m.send()
        }
        this.output.notify()
    };
    var NM = function(a, b, c) {
        try {
            if (3 === a.m.readyState || 4 === a.m.readyState)
                if (300 <= a.m.status) a.B || (JM(b, new ND("xhr_err-" + a.m.status)), a.B = !0);
                else {
                    var d = a.m.responseText.substr(a.F);
                    d && KM(b, d);
                    a.F = a.m.responseText.length;
                    c && 4 === a.m.readyState && LM(b)
                }
        } catch (e) {
            JM(b, e)
        }
    };
    var OM = function(a, b, c, d, e, f, g, h, k, l, m, n, p) {
        Z.call(this, a, 1078);
        this.F = b;
        this.B = c;
        this.m = d;
        this.da = e;
        this.output = RE(this);
        this.V = X(this, f);
        g && (this.Z = Y(this, g));
        h && (this.ba = X(this, h));
        this.ja = X(this, k);
        TE(this, l);
        this.I = X(this, m);
        if (null == n ? 0 : n.qc) this.M = Y(this, n.qc);
        p && (this.ka = X(this, p))
    };
    _.T(OM, Z);
    OM.prototype.j = function() {
        var a = this,
            b = this.ja.value;
        if (b) {
            var c, d, e = new IM(this.F, this.B, this.m, this.V.value, this.da, null == (c = this.Z) ? void 0 : c.value, null == (d = this.ba) ? void 0 : d.value);
            c = this.I.value ? "include" : "omit";
            var f;
            d = null == (f = this.M) ? void 0 : f.value;
            var g;
            f = null == (g = this.ka) ? void 0 : g.value;
            g = _.z(Object, "assign").call(Object, {}, {
                credentials: c
            }, d ? {
                browsingTopics: d
            } : {}, f ? {
                adAuctionHeaders: f
            } : {});
            fetch(b, g).then(function(h) {
                PM(a, h, e)
            }).catch(function(h) {
                QM(h, e)
            })
        }
        this.output.notify()
    };
    var PM = function(a, b, c) {
            if (300 <= b.status) JM(c, new ND("fetch_status-" + b.status));
            else {
                var d, e = null == (d = b.body) ? void 0 : d.pipeThrough(new TextDecoderStream).getReader();
                e ? e.read().then(function(f) {
                    RM(a, f, e, c)
                }).catch(function(f) {
                    QM(f, c)
                }) : JM(c, new ND("failed_reader"))
            }
        },
        RM = function(a, b, c, d) {
            var e = b.value;
            b.done ? LM(d) : (KM(d, e), c.read().then(function(f) {
                RM(a, f, c, d)
            }).catch(function(f) {
                QM(f, d)
            }))
        },
        QM = function(a, b) {
            JM(b, new ND("fetch error: " + (a instanceof Error ? a.message : void 0)))
        };
    var SM = function(a, b, c, d, e) {
        Z.call(this, a, 918);
        this.W = b;
        this.timer = c;
        this.output = RE(this);
        this.m = X(this, e);
        TE(this, d)
    };
    _.T(SM, Z);
    SM.prototype.j = function() {
        var a = this.m.value;
        a.length && Vq(this.timer, "3", Wq(this.W.aa[a[0].getDomId()], 20));
        this.output.notify()
    };
    var UM = function(a, b, c) {
        Z.call(this, a, 804);
        this.gb = c;
        this.output = QE(this);
        this.B = [];
        this.Gc = {
            Aj: TM(this, function(d) {
                return qw(d, 6)
            }),
            Sk: TM(this, function(d) {
                return qw(d, 7)
            }),
            Gj: TM(this, function(d) {
                return !!fl(d, 8)
            }),
            nj: TM(this, function(d) {
                return rw(d, 10)
            }),
            Bb: TM(this, function(d) {
                var e;
                return null != (e = d.getEscapedQemQueryId()) ? e : ""
            }),
            Di: TM(this, function(d) {
                return _.Zg(d, Ix, 43)
            }),
            Fj: TM(this, function(d) {
                return !!fl(d, 9)
            }),
            Se: TM(this, function(d) {
                return !!fl(d, 12)
            }),
            uj: TM(this, function(d) {
                return _.Zg(d, xx, Wj(d, Ux, 48))
            }),
            wf: TM(this, function(d) {
                return _.Zg(d, wx, Wj(d, Ux, 39))
            }),
            Td: TM(this, function(d) {
                return sw(d, 36)
            }),
            Qk: TM(this, function(d) {
                return !!fl(d, 13)
            }),
            Ej: TM(this, function(d) {
                return !!fl(d, 3)
            }),
            rg: TM(this, function(d) {
                return rw(d, 49)
            }),
            Bj: TM(this, function(d) {
                return _.Zg(d, Kx, 51)
            }),
            fj: TM(this, function(d) {
                return rw(d, 61)
            }),
            hb: W(this),
            Yh: TM(this, function(d) {
                return _.Zg(d, Sx, 58)
            }),
            Tk: TM(this, function(d) {
                var e, f;
                return null != (f = null == (e = _.Zg(d, Jx, 56)) ? void 0 : rw(e, 1)) ? f : null
            }),
            Hd: TM(this, function(d) {
                return bh(d, sx, 62)
            }),
            Oj: TM(this, function(d) {
                return Bd(d, 63, Kc)
            }),
            Ni: TM(this, function(d) {
                return !!fl(d, 64)
            })
        };
        this.m = X(this, b)
    };
    _.T(UM, Z);
    var TM = function(a, b) {
        var c = W(a);
        a.B.push({
            output: c,
            ij: b
        });
        return c
    };
    UM.prototype.j = function() {
        for (var a = _.y(this.B), b = a.next(); !b.done; b = a.next()) {
            b = b.value;
            var c = b.ij,
                d = void 0;
            b.output.Ga(null != (d = c(this.m.value)) ? d : null)
        }
        0 === this.gb.kind ? this.Gc.hb.G(this.gb) : this.Gc.hb.G({
            kind: 0,
            wb: _.Qi(this.m.value, 4) || ""
        });
        this.output.G(this.Gc)
    };
    var VM = function(a, b, c, d, e) {
        Z.call(this, a, 803);
        this.m = b;
        this.slotId = c;
        this.za = d;
        this.da = e;
        this.output = W(this)
    };
    _.T(VM, Z);
    VM.prototype.j = function() {
        var a = JSON.parse(this.m),
            b = Xm(a, ou);
        if (!b) throw Error("missing ad unit path");
        if (null == a || !a[b]) throw Error("invalid ad unit path: " + b);
        a = a[b];
        if (!Array.isArray(a)) throw Error("dictionary not an array: " + this.m);
        a = Qd(Tx, a);
        b = _.y(Bd(a, 27, Cc));
        for (var c = b.next(); !c.done; c = b.next()) c = c.value, _.kf(lf).j(c);
        kl(4, this.context, this.za, this.da);
        Xq(this.slotId, OG, 800, a);
        this.output.G(a)
    };
    var WM = function(a, b, c, d) {
        Z.call(this, a, 823);
        this.slotId = b;
        this.O = c;
        this.m = X(this, d)
    };
    _.T(WM, Z);
    WM.prototype.j = function() {
        var a = this;
        fl(this.m.value, 11) && (_.$G(this.O, this.slotId), XG(this.O, this.slotId, function() {
            _.aH(a.O, a.slotId)
        }))
    };
    var XM = function(a, b, c, d) {
        $i.call(this);
        this.context = a;
        this.slotId = b;
        a = d.O;
        var e = d.da;
        b = d.Ra;
        var f = d.za;
        d = d.gb;
        c = new VM(this.context, c, this.slotId, f, e);
        N(this, c);
        e = new XJ(this.context, e, f, c.output);
        N(this, e);
        b = new aK(this.context, this.slotId, b, c.output);
        N(this, b);
        a = new WM(this.context, this.slotId, a, c.output);
        N(this, a);
        a = new UM(this.context, c.output, d);
        N(this, a);
        d = a.Gc;
        this.j = {
            Bc: d.Gj,
            sf: d.Bb,
            Pa: d.Yh,
            Gc: a.output
        }
    };
    _.T(XM, $i);
    /* 
     
    Math.uuid.js (v1.4) 
    http://www.broofa.com 
    mailto:robert@broofa.com 
    Copyright (c) 2010 Robert Kieffer 
    Dual licensed under the MIT and GPL licenses. 
    */
    var YM = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),
        ZM = function() {
            for (var a = Array(36), b = 0, c, d = 0; 36 > d; d++) 8 == d || 13 == d || 18 == d || 23 == d ? a[d] = "-" : 14 == d ? a[d] = "4" : (2 >= b && (b = 33554432 + 16777216 * Math.random() | 0), c = b & 15, b >>= 4, a[d] = YM[19 == d ? c & 3 | 8 : c]);
            return a.join("")
        };
    var $M = function(a, b, c, d, e, f, g, h, k, l, m, n, p, t, u, v, x, F, D, M, B, K, V, O, aa) {
        Z.call(this, a, 973);
        this.va = b;
        this.X = c;
        this.V = d;
        this.ba = e;
        this.W = f;
        this.O = g;
        this.za = h;
        this.ka = k;
        this.Z = l;
        this.I = m;
        this.Id = n;
        this.oa = p;
        this.Ob = t;
        this.isSecureContext = u;
        this.Db = v;
        this.Ra = x;
        this.D = F;
        this.ca = D;
        this.m = V;
        this.M = O;
        this.Aa = aa;
        this.F = [];
        this.B = Y(this, M);
        this.ja = X(this, B);
        this.Ba = X(this, K);
        this.m && TE(this, this.m.Si)
    };
    _.T($M, Z);
    $M.prototype.j = function() {
        var a = this,
            b = new $i;
        _.S(this, b);
        var c = this.ja.value,
            d = at(this.W.fa);
        this.B.value && this.Aa.G(this.B.value);
        var e = Bp(this.context, this.ca);
        e && _.S(b, e.Ja);
        var f = Eo(this.context, _.Zg(this.W.fa, ms, 5), this.O, this.V, null == e ? void 0 : e.gk.zd);
        e = f.If;
        (f = f.Pj) && _.S(b, f);
        f = new HM(this.context, this.V, this.ca, this.W, this.D, e);
        N(b, f);
        var g = !!_.G(this.W.fa, 6);
        e = new BM(this.context, this.V, g, this.W, this.X, this.D, c);
        N(b, e);
        var h = new OI(this.context, d, c);
        N(b, h);
        var k = this.M,
            l = k.ck,
            m = k.kk;
        k = k.Jk;
        var n = gr(this.context, k, this.W.aa, c, this.B.value, e.m, h.output);
        if (n) {
            var p = n.Lk;
            n = n.Kk;
            var t = p.Xf;
            p = p.Df;
            _.S(b, n)
        }
        if (k = vq(this.context, k, this.D.navigator, h.output)) {
            var u = k.Zh;
            k = k.Mk;
            var v = u.Ih;
            u = u.hh;
            k && _.S(b, k)
        }
        n = new nL(this.context, this.D);
        N(b, n);
        var x;
        k = null != (x = this.m) ? x : {};
        var F = k.vc,
            D = k.Me,
            M = k.Mb,
            B = k.Wc,
            K = k.me,
            V = k.sj;
        k = k.Te;
        var O = (null != F ? F : {}).Fb,
            aa;
        x = _.H(mq) ? null == (aa = this.m) ? void 0 : aa.rc : this.M.rc;
        aa = new UK(this.context, l.dk);
        N(b, aa);
        if (l = $n(this.context, this.X, this.W.aa, this.Ob, e.m, F, M)) {
            var ma = l.Fi;
            _.S(this, l.Ja)
        }
        if (p = Dp(this.context, m, p)) {
            var ta = p.Ie;
            _.S(this, p.Ja)
        }
        if (p = rq(this.context, this.B.value, x, h.output)) {
            var da = p.Hk;
            _.S(this, p.Ja);
            this.F.push(da.Pd.promise)
        }
        p = window.isSecureContext && _.H(kB) ? "wbn" : "ldjh";
        var xa = ++this.O.J;
        h = "wbn" === p ? ZM().toLowerCase() : void 0;
        m = this.Id;
        var Da;
        ma = new GM(this.context, g, this.O, this.za, this.W, p, m.Rb, m.Oc, m.Nc, this.Ba.value, h, _.kf(Cg), c, this.isSecureContext, this.Db, this.D, aa.output, n.output, e.m, null == (Da = ma) ? void 0 : Da.mg, da, x, f.output, null == D ? void 0 : D.Qf, O, M, B, K, V, ta, v);
        N(b, ma);
        ta = new SM(this.context, this.W, _.kf(Cg), ma.m, e.m);
        N(b, ta);
        d = new CM(this.context, d, c);
        N(b, d);
        Da = zg(this.context, 646, function(Ia, Qb, gb, dc, jc, Ke, sc) {
            ct(a.context, function() {
                return void aN(a, jc, Ia, Qb, gb, dc, Ke, sc)
            }, Ia, a.D.navigator, a.D.setTimeout)
        });
        f = zg(this.context, 647, function(Ia, Qb, gb) {
            var dc = function() {
                return void bN(a, xa, gb, Qb, Ia)
            };
            _.tf(dt) ? setTimeout(zg(a.context, 646, dc), 0) : dc()
        });
        "ldjh" === p ? (g = cN(this, 289, "strm_err"), _.H(xA) && window.fetch && window.TextDecoderStream || _.H(zA) && Jy(window.fetch) && Jy(window.TextDecoderStream) || _.H(yA) && Oa() && Jy(window.fetch) && Jy(window.TextDecoderStream) ? (t = new OM(this.context, Da, g, f, c, e.m, t, v, ma.m, ta.output, d.output, da, u), N(b, t), t = t.output) : (t = new MM(this.context, Da, g, f, c, e.m, t, ma.m, ta.output, d.output, da), N(b, t), t = t.output)) : (v = new VL(this.context, Da, cN(this, 1042, "Unknown web bundle error."), f, p, h, c, this.ca, e.m, t, ma.m, ma.Z, ta.output, d.output), js(b, v), t = new zp, LE(t, ij(v).then(function() {})));
        v = new DM(this.context, xa, e.m, t, k, this.Ob);
        N(b, v);
        da = new zM(this.context, ma.B, ma.m);
        N(b, da);
        da = new FM(this.context, this.I.xa, this.W, da.output);
        N(b, da);
        da = new cL(this.context, this.ka, this.D, da.output);
        N(b, da);
        da = new KK(this.context, this.W, this.Z, e.m, da.output);
        N(b, da);
        e = new LJ(this.context, this.O, this.W, this.ca, e.m, da.output);
        N(b, e);
        da = new mL(this.context, _.Kg(this.D), this.D, c, t);
        N(b, da);
        1 === xa && (c = new KJ(this.context, this.D, c, x, t), N(b, c), this.F.push(c.output.promise));
        this.F.push(v.output.promise, e.output.promise, da.output.promise);
        ij(b)
    };
    var aN = function(a, b, c, d, e, f, g, h) {
            var k, l, m;
            return _.nb(function(n) {
                k = f[c];
                if (!k) return Eg(a.context, 646, Error("missing slot")), n.return();
                0 === c && (l = Wq(a.W.aa[k.getDomId()], 20), Vq(_.kf(Cg), "4", l));
                return _.ob(n, dN(a, k, d, e, b, null == (m = g) ? void 0 : m[k.getId()], h), 0)
            })
        },
        bN = function(a, b, c, d, e) {
            var f, g, h;
            return _.nb(function(k) {
                if (1 == k.j) {
                    var l = a.context,
                        m = e + 1,
                        n = d.length;
                    if (l.Kd) {
                        var p = l.Sb;
                        l = ug(l);
                        var t = new Rz;
                        t = _.qg(t, 3, b);
                        m = _.Bg(t, 1, m);
                        n = _.Bg(m, 2, n);
                        n = _.wg(l, 8, xg, n);
                        Ge(p, n)
                    }
                    f = e + 1
                }
                if (3 != k.j) {
                    if (!(f < d.length)) return _.ob(k, eN(a), 0);
                    if (!d[f]) {
                        k.j = 3;
                        return
                    }
                    p = new Tx;
                    p = _.Wi(p, 8, !0);
                    g = Qj(p);
                    h = '{"empty":' + g + "}";
                    return _.ob(k, aN(a, c, f, h, {
                        kind: 0,
                        wb: ""
                    }, d), 3)
                }++f;
                k.j = 2
            })
        },
        dN = function(a, b, c, d, e, f, g) {
            var h, k, l, m, n, p, t, u, v, x;
            return _.nb(function(F) {
                if (1 == F.j) return h = {
                    da: e,
                    Ra: a.Ra,
                    O: a.O,
                    za: a.za,
                    gb: d
                }, k = new XM(a.context, b, c, h), _.ob(F, ij(k), 2);
                l = F.A;
                m = l.Bc;
                n = l.sf;
                p = l.Pa;
                t = l.Gc;
                bo(a.context, null == (u = a.m) ? void 0 : u.vc, t.Tk, t.Se, t.Bb);
                if (b.K) return F.return();
                (v = !!p) && Wh("gpt_td_init", function(D) {
                    ci(D, a.context);
                    L(D, "noFill", m ? "1" : "0");
                    L(D, "publisher_tag", "gpt");
                    var M = _.Zg(p, Qx, 5);
                    M && (L(D, "winner_qid", M.getEscapedQemQueryId()), L(D, "xfpQid", _.R(M, 6)))
                }, 1);
                (x = ro("google_norender")) || m && !v ? ar(b, a.O, a.W, n) : wM(a.oa, a.va, a.X, b, m || x, v, a.O, a.W, a.Ra, t, e, f, g, a.I.xa, a.Z, a.m, a.M);
                k.wa();
                F.j = 0
            })
        },
        cN = function(a, b, c) {
            return zg(a.context, b, function(d) {
                d = d instanceof Error ? d : Error();
                d.message = d.message || c;
                Eg(a.context, b, d);
                eN(a)
            })
        },
        eN = function(a) {
            return _.nb(function(b) {
                if (1 == b.j) {
                    var c = a.O,
                        d = a.ba,
                        e = c.A.get(d) - 1;
                    0 === e ? c.A.delete(d) : c.A.set(d, e);
                    return e ? b.return() : _.ob(b, _.w.Promise.all(a.F), 2)
                }
                Xq(a.I.bh, SG, 965, a.ba);
                b.j = 0
            })
        };
    var fN = function(a, b, c, d, e, f, g, h, k, l, m, n, p, t, u, v, x, F, D, M, B, K, V, O) {
        Z.call(this, a, 885);
        this.ja = b;
        this.X = c;
        this.W = d;
        this.O = e;
        this.za = f;
        this.Id = g;
        this.Z = h;
        this.I = k;
        this.m = l;
        this.F = m;
        this.ba = n;
        this.isSecureContext = p;
        this.Wa = t;
        this.V = u;
        this.Db = v;
        this.Ra = x;
        this.D = F;
        this.ca = D;
        this.B = K;
        this.M = V;
        this.ka = O;
        this.oa = X(this, M);
        TE(this, B)
    };
    _.T(fN, Z);
    fN.prototype.j = function() {
        var a = this.oa.value;
        if (a.length) {
            var b = this.O,
                c = this.m,
                d = a.length;
            b.A.has(c);
            b.A.set(c, d);
            a = _.y(a);
            for (b = a.next(); !b.done; b = a.next()) {
                c = b.value;
                var e = void 0;
                b = c.Ob;
                d = c.ha;
                c = new $i;
                _.S(this, c);
                var f = oo(this.context, this.V, null == (e = this.B) ? void 0 : e.Vj);
                e = f.Cc;
                var g = f.Yg;
                _.S(c, f.Ja);
                e = Bm(this.context, this.X, this.O, this.D, e, g, at(this.W.fa));
                f = e.fb;
                _.S(c, e.Ja);
                e = new XK(this.context, this.D, f);
                N(c, e);
                e = new WJ(this.context, this.D, f);
                N(c, e);
                e = new gs(this.context, this.D, f);
                N(c, e);
                g = new xM(this.context, this.za, this.Wa, f);
                N(c, g);
                b = new $M(this.context, this.ja, this.X, d, this.m, this.W, this.O, this.za, this.Z, this.I, this.F, this.Id, this.ba, b, this.isSecureContext, this.Db, this.Ra, this.D, this.ca, e.output, f, g.B, this.B, this.M, this.ka);
                N(c, b);
                ij(c)
            }
        } else Xq(this.F.bh, SG, 965, this.m)
    };
    var gN = new _.w.Map,
        hN = function(a, b, c, d) {
            d = void 0 === d ? gN : d;
            Z.call(this, a, 834);
            this.X = b;
            this.ha = c;
            this.m = d;
            this.B = W(this);
            this.B.Ta(_.w.Promise.all(this.ha.map(this.F, this)).then(function(e) {
                return e.filter(function(f) {
                    return null != f && !f.K
                })
            }))
        };
    _.T(hN, Z);
    hN.prototype.j = function() {};
    hN.prototype.F = function(a) {
        var b = this,
            c, d;
        return _.nb(function(e) {
            if (1 == e.j) {
                if (a.K) return e.return();
                b.m.has(a) || (b.m.set(a, et(a)), _.Vo(a, function() {
                    return void b.m.delete(a)
                }));
                c = b.m.get(a);
                return _.ob(e, c(), 2)
            }
            d = e.A;
            if (b.K) return e.return();
            if (d) return e.return(a);
            Q(b.X, YH(a.getAdUnitPath()));
            return e.return()
        })
    };
    var iN = function(a, b, c, d, e) {
        Z.call(this, a, 847);
        this.O = b;
        this.Za = c;
        this.B = d;
        this.m = W(this);
        this.F = X(this, e)
    };
    _.T(iN, Z);
    iN.prototype.j = function() {
        var a = this.F.value;
        if (a.length) {
            for (var b = _.y(a), c = b.next(); !c.done; c = b.next()) dH(this.O, c.value);
            this.B ? this.m.G([]) : this.Za ? (b = og(a[0].getAdUnitPath()), a = jN(a, b), this.m.G(a)) : (a = a.map(function(d) {
                return {
                    Ob: og(d.getAdUnitPath()),
                    ha: [d]
                }
            }), this.m.G(a))
        } else this.m.G([])
    };
    var jN = function(a, b) {
        var c = [];
        a = ya(a, function(f) {
            return og(f.getAdUnitPath())
        });
        a = _.y(_.z(Object, "entries").call(Object, a));
        for (var d = a.next(); !d.done; d = a.next()) {
            var e = _.y(d.value);
            d = e.next().value;
            e = e.next().value;
            d === b ? c.unshift({
                Ob: d,
                ha: e
            }) : c.push({
                Ob: d,
                ha: e
            })
        }
        return c
    };
    var kN = function(a, b, c) {
        Z.call(this, a, 845);
        this.aa = b;
        this.m = W(this);
        this.B = W(this);
        this.F = X(this, c)
    };
    _.T(kN, Z);
    kN.prototype.j = function() {
        var a = this,
            b = function(d) {
                return !!ih(a.aa[d.getDomId()]).length
            },
            c = this.F.value;
        this.m.G(c.filter(b));
        this.B.G(c.filter(pu(b)))
    };
    var lN = function(a, b, c, d, e, f, g, h, k, l, m, n, p, t, u, v, x, F, D) {
        _.U.call(this);
        var M = this;
        this.context = a;
        this.I = b;
        this.X = c;
        this.O = d;
        this.za = e;
        this.xa = f;
        this.T = g;
        this.m = h;
        this.F = k;
        this.isSecureContext = l;
        this.Wa = m;
        this.B = n;
        this.Db = p;
        this.Ra = t;
        this.ca = u;
        this.D = v;
        this.C = x;
        this.J = F;
        this.M = D;
        this.j = new _.w.Map;
        this.o = new JG(a);
        _.S(this, this.o);
        this.o.listen(SG, function(B) {
            B = B.detail;
            var K = M.j.get(B);
            K && (M.j.delete(B), K.wa())
        })
    };
    _.T(lN, _.U);
    var mN = function(a, b, c, d) {
        var e = ++a.O.m;
        a.j.has(e);
        var f = new $i;
        a.j.set(e, f);
        b = new hN(a.context, a.X, b);
        N(f, b);
        var g = new kN(a.context, d.aa, b.B);
        N(f, g);
        b = new iN(a.context, a.O, !!_.G(d.fa, 6), ro("google_nofetch"), g.m);
        N(f, b);
        g = new MJ(a.context, a.O, d, document, g.B);
        N(f, g);
        a = new fN(a.context, a.I, a.X, d, a.O, a.za, c, a.T, a.m, e, {
            bh: a.o,
            xa: a.xa
        }, a.F, a.isSecureContext, a.Wa, a.B, a.Db, a.Ra, a.D, a.ca, b.m, g.m, a.C, a.J, a.M);
        N(f, a);
        ij(f)
    };
    var nN = function(a, b, c, d, e, f, g, h, k, l, m, n, p, t, u) {
        XL.call(this, a, c, h);
        this.context = a;
        this.O = d;
        this.C = new _.w.Set;
        this.J = {};
        this.F = new vM(a, d);
        this.I = new lN(a, b, c, d, new _.VD(window), this.o, m, e, this.F, f, g, k, l, n, document, window, p, t, u);
        _.S(this, this.I)
    };
    _.T(nN, XL);
    nN.prototype.getName = function() {
        return "publisher_ads"
    };
    nN.prototype.display = function(a, b, c, d, e) {
        d = void 0 === d ? "" : d;
        e = void 0 === e ? "" : e;
        var f = "";
        if (d)
            if (_.la(d) && 1 == d.nodeType) {
                var g = d;
                f = g.id
            } else f = d;
        tr(this);
        var h = Bl(c, this.context, this.X, a, b, f),
            k = h.slotId;
        h = h.ya;
        if (k && h) {
            g && !f && (g.id = k.getDomId());
            this.slotAdded(k, h);
            h.setClickUrl(e);
            var l;
            mr(this, null != (l = g) ? l : k.getDomId(), c)
        } else Q(this.X, kk("PubAdsService.display", [a, b, d]))
    };
    var mr = function(a, b, c) {
            var d = oN(b, c);
            c = d.slotId;
            var e = d.Zi;
            d = d.aj;
            if (c) {
                if (b = Mh(), (d = AF(b, c.getDomId())) && !_.G(d, 19))
                    if (e && b.o.set(c, e), (e = Ch(c)) || (e = Ko(d), e = 0 !== e && 1 !== e), e) {
                        if (_.Wi(d, 19, !0), e = yh(b.j, b.A), a.enabled) {
                            tr(a);
                            a.enabled && ZG(a.O, c);
                            a.X.info(zH());
                            b = e.fa;
                            d = e.aa;
                            var f = _.G(b, 6);
                            if (f || !a.O.ic(c)) f && (f = Ch(c)) && Xq(c, NG, 778, f), _.G(b, 4) && (d = d[c.getDomId()], fo(d, b) && !a.O.ic(c) && ho(c, document, d, b)), pN(a, e, c)
                        }
                    } else Q(a.X, pH(String(_.Qi(d, 1)), String(_.Qi(d, 2))), c)
            } else d ? a.X.error(qH(d)) : a.X.error(kk("googletag.display", [String(b)]))
        },
        uI = function(a, b, c) {
            var d = void 0 === d ? document : d;
            var e;
            null != (e = c.aa[b.getDomId()]) && _.Wi(e, 19, !0);
            e = {
                id: by(b.getDomId())
            };
            bb(d, ri(e));
            Ch(b, d) ? (tr(a), ZG(a.O, b), pN(a, c, b)) : Wh("gpt_pb_write", function(f) {
                ci(f, a.context)
            })
        };
    nN.prototype.slotAdded = function(a, b) {
        var c = this;
        _.G(b, 17) || this.enabled && ZG(this.O, a);
        Xq(this.o, QG, 724, {
            lg: a.getDomId(),
            aa: b
        });
        a.listen($q, function(d) {
            var e = d.detail,
                f = e.size;
            d = new pK(a, "publisher_ads");
            e.isEmpty && (d.isEmpty = !0);
            e = a.j.getResponseInformation();
            f && e && (f = d.setSize([f.width, f.height]), f.sourceAgnosticCreativeId = e.sourceAgnosticCreativeId, f.sourceAgnosticLineItemId = e.sourceAgnosticLineItemId, f.isBackfill = e.isBackfill, f.creativeId = e.creativeId, f.lineItemId = e.lineItemId, f.creativeTemplateId = e.creativeTemplateId, f.advertiserId = e.advertiserId, f.campaignId = e.campaignId, f.yieldGroupIds = e.yieldGroupIds, f.companyIds = e.companyIds);
            Xq(c.o, "slotRenderEnded", 708, d)
        });
        a.listen(OG, function() {
            Xq(c.o, "slotResponseReceived", 709, new vK(a, c.getName()))
        });
        4 === Ko(b) && qN(this, "rewardedSlotClosed", a, b);
        7 === Ko(b) && qN(this, "gameManualInterstitialSlotClosed", a, b);
        XL.prototype.slotAdded.call(this, a, b)
    };
    var qN = function(a, b, c, d) {
            _.Vo(c, a.o.listen(b, function(e) {
                c.j === e.detail.slot && (e = {}, rN(a, [c], Mh().j, (e[c.getDomId()] = d, e), a.O))
            }))
        },
        pN = function(a, b, c) {
            var d = sN(a, b, c);
            tN(a, d, b, {
                Rb: 1
            });
            b = c.getAdUnitPath();
            if (c = a.J[b]) {
                c = _.y(c);
                for (d = c.next(); !d.done; d = c.next()) d = d.value, tN(a, d.ha, d.W, d.Id);
                delete a.J[b]
            }
        },
        sN = function(a, b, c) {
            var d = b.fa;
            b = b.aa;
            if (_.G(d, 4)) return [];
            var e;
            return !_.G(d, 6) || (null == (e = b[c.getDomId()]) ? 0 : _.G(e, 17)) ? (a.C.add(c), _.Vo(c, function() {
                return void a.C.delete(c)
            }), [c]) : a.j.filter(function(f) {
                if (a.C.has(f)) return !1;
                a.C.add(f);
                _.Vo(f, function() {
                    return void a.C.delete(f)
                });
                return !0
            })
        },
        tN = function(a, b, c, d) {
            a.X.info(GH());
            if (uN(a, b, d, c) && 1 !== d.Rb)
                for (b = _.y(b), d = b.next(); !d.done; d = b.next()) d = d.value.getDomId(), Xq(a.o, RG, 725, {
                    lg: d,
                    aa: c.aa[d]
                })
        },
        uN = function(a, b, c, d) {
            b = b.filter(function(e) {
                var f = d.aa[e.getDomId()],
                    g = _.Zq(a.O, e);
                !1 === g && Q(a.X, oI(String(Ko(f)), e.getAdUnitPath()));
                if (!g) return !1;
                (_.E = [5, 4, 7], _.z(_.E, "includes")).call(_.E, Ko(f)) && _.$G(a.O, e);
                return !0
            });
            if (!b.length) return null;
            mN(a.I, b, c, d);
            return b
        };
    nN.prototype.refresh = function(a, b, c) {
        c = void 0 === c ? {
            Rb: 2
        } : c;
        b = vN(this, b);
        if (!b.length) return !1;
        wN(this, a, b, c);
        return !0
    };
    var vN = function(a, b) {
            return b.filter(function(c, d) {
                if (!c.K) return !0;
                Q(a.X, JH(String(d)));
                return !1
            })
        },
        wN = function(a, b, c, d) {
            var e = c[0],
                f, g = null != (f = null == e ? void 0 : e.getDomId()) ? f : "";
            if (a.enabled) {
                var h = _.y(c);
                e = h.next();
                for (f = {}; !e.done; f = {
                        Md: f.Md
                    }, e = h.next()) f.Md = e.value, a.C.add(f.Md), _.Vo(f.Md, function(k) {
                    return function() {
                        return void a.C.delete(k.Md)
                    }
                }(f));
                tN(a, c, b, d)
            } else c.length && _.G(b.fa, 6) ? (Q(a.X, FH(g), e), e = e.getAdUnitPath(), f = null != (h = a.J[e]) ? h : [], f.push({
                ha: c,
                W: b,
                Id: d
            }), a.J[e] = f) : Q(a.X, DH(g), e)
        };
    nN.prototype.T = function() {
        var a = Mh().j;
        if (_.G(a, 6))
            for (var b = _.y(this.j), c = b.next(); !c.done; c = b.next()) this.enabled && ZG(this.O, c.value);
        zI(this, a);
        a = qm();
        a.hasOwnProperty("pubadsReady") || (a.pubadsReady = !0)
    };
    nN.prototype.destroySlots = function(a) {
        a = XL.prototype.destroySlots.call(this, a);
        if (a.length && this.enabled) {
            var b = Mh();
            xN(this, a, b.j, b.A)
        }
        return a
    };
    var BI = function(a, b, c, d) {
            if (!a.enabled) return Q(a.X, EH(), d[0]), !1;
            var e = vN(a, d);
            if (!e.length) return Q(a.X, kk("PubAdsService.clear", [d].filter(function(f) {
                return void 0 !== f
            }))), !1;
            a.X.info(HH());
            xN(a, e, b, c);
            return !0
        },
        xN = function(a, b, c, d) {
            for (var e = _.y(b), f = e.next(); !f.done; f = e.next()) WG(a.O, f.value);
            rN(a, b, c, d, a.O)
        };
    nN.prototype.forceExperiment = function(a) {
        a = Number(a);
        0 < a && _.kf(lf).j(a)
    };
    var rN = function(a, b, c, d, e) {
            var f = void 0 === f ? window : f;
            b = _.y(b);
            for (var g = b.next(); !g.done; g = b.next()) {
                g = g.value;
                fH(a.F.O, g);
                var h = d[g.getDomId()];
                fo(h, c) && ho(g, f.document, h, c);
                dH(e, g)
            }
        },
        AI = function(a, b, c, d) {
            if ("string" !== typeof b || "string" !== typeof c) Q(a.X, kk("PubAdsService.setVideoContent", [b, c]));
            else {
                var e = _.Wi(d, 21, !0);
                b = rn(e, 22, b);
                rn(b, 23, c);
                zI(a, d)
            }
        },
        CI = function(a, b) {
            if (!a.enabled) return null;
            var c, d;
            return {
                vid: null != (c = _.R(b, 22)) ? c : "",
                cmsid: null != (d = _.R(b, 23)) ? d : ""
            }
        },
        zI = function(a, b) {
            _.G(b, 21) && a.enabled && (a = Sy(), _.xh(b, 29, null == a ? a : Lc(a)))
        },
        oN = function(a, b) {
            var c = "";
            if ("string" === typeof a) c = a, b = IJ(b, c);
            else if (_.la(a) && 1 == a.nodeType) {
                var d = a;
                c = d.id;
                b = IJ(b, c)
            } else b = (_.E = [].concat(_.Ee(b.ha)), _.z(_.E, "find")).call(_.E, function(e) {
                return e.j === a
            });
            return {
                slotId: b,
                Zi: d,
                aj: c
            }
        };
    var yN = _.Ft(["https://securepubads.g.doubleclick.net/pagead/js/rum_debug.js"]),
        zN = _.Ft(["https://securepubads.g.doubleclick.net/pagead/js/rum.js"]);
    var AN = Gt(["^[-p{L}p{M}p{N}_,.!*<>():/]*$"], ["^[-\\p{L}\\p{M}\\p{N}_,\\.!*<>():/]*$"]),
        BN = _.qu(function() {
            Oy("The googletag.pubads().definePassback function has been deprecated. The function may break in certain contexts, see https://developers.google.com/publisher-tag/guides/passback-tags#construct_passback_tags for how to correctly create a passback.")
        }),
        DN = function(a, b) {
            var c = this;
            var d = void 0 === d ? _.z(String, "raw").call(String, AN) : d;
            this.O = a;
            this.A = d;
            this.j = new _.w.Map;
            this.ha = new _.w.Set;
            b.A = function(e) {
                return CN(c, e)
            }
        };
    DN.prototype.defineSlot = function(a, b, c, d, e) {
        a = Bl(this, a, b, c, d, e);
        var f = a.slotId;
        if (f) return f.j;
        a.ge || b.error(kk("googletag.defineSlot", [c, d, e]));
        return null
    };
    var Bl = function(a, b, c, d, e, f, g) {
        return "string" === typeof d && 0 < d.length && e && (void 0 === f || "string" === typeof f) ? a.add(b, c, d, e, {
            Lb: f,
            Bh: void 0 === g ? !1 : g
        }) : {}
    };
    DN.prototype.add = function(a, b, c, d, e) {
        var f = this,
            g = e.Lb,
            h = void 0 === e.format ? 0 : e.format,
            k = void 0 === e.Bh ? !1 : e.Bh;
        e = void 0 === e.ob ? !1 : e.ob;
        try {
            var l = new RegExp(this.A, "u");
            if (l.test("/1") && !l.test(c)) return b.error(sH(c)), {
                ge: !0
            }
        } catch (n) {}
        if (l = Ro(h, e)) return Go(b, l, h, c), {};
        k && BN();
        h = this.j.get(c) || Number(k);
        b = EN(this, a, b, c, h, d, g || "gpt_unit_" + c + "_" + h);
        a = b.ya;
        var m = b.slotId;
        b = b.ge;
        if (!m) return {
            ge: b
        };
        this.j.set(c, h + 1);
        this.ha.add(m);
        _.Vo(m, function() {
            return void f.ha.delete(m)
        });
        oF(c);
        return {
            slotId: m,
            ya: a
        }
    };
    var IJ = function(a, b) {
            a = _.y(a.ha);
            for (var c = a.next(); !c.done; c = a.next())
                if (c = c.value, c.getDomId() === b) return c
        },
        kr = function(a) {
            a = _.y(a);
            for (var b = a.next(); !b.done; b = a.next()) b.value.wa()
        },
        EN = function(a, b, c, d, e, f, g) {
            var h = IJ(a, g);
            if (h) return c.error(rH(g, d, h.getAdUnitPath())), {
                ge: !0
            };
            var k = new JI;
            KI(rn(k, 1, d), g);
            LI(k, lm(f));
            zF(k);
            var l = new Te(b, d, e, g);
            wI(l, tm(b, c, l));
            _.Vo(l, function() {
                var m = Mh(),
                    n = l.getDomId();
                delete m.A[n];
                m.o.delete(l);
                m = l.getAdUnitPath();
                m = og(m);
                var p;
                n = (null != (p = Xg.get(m)) ? p : 0) - 1;
                0 >= n ? Xg.delete(m) : Xg.set(m, n);
                c.info(OH(l.toString()), l);
                (p = fk.get(l)) && gk.delete(p);
                fk.delete(l)
            });
            c.info(gH(l.toString()), l);
            l.listen(PG, function(m) {
                m = m.detail.sk;
                c.info(hH(l.getAdUnitPath()), l);
                ED(_.kf(Cg), "7", 9, cH(a.O, l), 0, m)
            });
            l.listen(OG, function(m) {
                var n = m.detail;
                c.info(iH(l.getAdUnitPath()), l);
                var p;
                m = _.kf(Cg);
                var t = Wq(k, 20);
                n = null != (p = n.getEscapedQemQueryId()) ? p : "";
                m.j && (_.r.google_timing_params = _.r.google_timing_params || {}, _.r.google_timing_params["qqid." + t] = n)
            });
            l.listen(Yq, function() {
                return void c.info(jH(l.getAdUnitPath()), l)
            });
            l.listen($q, function() {
                return void c.info(kH(l.getAdUnitPath()), l)
            });
            return {
                ya: k,
                slotId: l
            }
        },
        CN = function(a, b) {
            var c = new RegExp("(^|,|/)" + b + "($|,|/)");
            return [].concat(_.Ee(a.ha)).some(function(d) {
                return c.test(og(d.getAdUnitPath()))
            })
        };
    var ot = "1";
    (function(a, b) {
        var c = null != a ? a : {
            pvsid: _.Kg(window),
            vb: pt(),
            xb: "m202309050101",
            Sb: new ut(3, "m202309050101", 0),
            Qh: !0,
            Tg: 1
        };
        try {
            var d = qm();
            me(!_.kf(kh).j);
            _.z(Object, "assign").call(Object, lh, d._vars_);
            d._vars_ = lh;
            if (d.evalScripts) d.evalScripts();
            else {
                ZF();
                try {
                    Bf()
                } catch (Da) {
                    Eg(c, 408, Da)
                }
                yo();
                var e = new YI;
                try {
                    xf(e.J), hl(13, c), hl(3, c)
                } catch (Da) {
                    Eg(c, 408, Da)
                }
                var f = st(c, e),
                    g = null != a ? a : vt(f, c),
                    h = null != b ? b : new XI(g);
                yg(g);
                Wh("gpt_fifwin", function(Da) {
                    ci(Da, g)
                }, d.fifWin ? .01 : 0);
                var k = new VG,
                    l = new DN(k, e),
                    m = new dM(g),
                    n = _.mh(260),
                    p = new mM(g, l, Mh(), h, k, n, e, m),
                    t = Dy(),
                    u = cs(g),
                    v = new JG(g),
                    x = new JG(g),
                    F = new JG(g),
                    D = _.mh(150),
                    M;
                n && (M = nM(p, v, D, _.H(mq) ? u : void 0));
                var B = _.mh(221),
                    K = new YK,
                    V = new YJ,
                    O, aa, ma, ta = null != (ma = null == (O = M) ? void 0 : null == (aa = O.Me) ? void 0 : aa.qb) ? ma : new Yn,
                    da = new nN(g, l, h, k, m, t, e, v, n, B, K, V, M, u, ta);
                _.H(oB) && new JJ(g, v, k, l);
                var xa = Mh().j;
                Cr(g, h, da, xa, l, x, F, e, V, ta);
                Fm(g, d, h);
                _.H(uA) && window.setTimeout(function() {
                    for (var Da = window.document.scripts, Ia = 0, Qb = 0, gb = 0; gb < Da.length; gb++) Da[gb].src.match("securepubads.g.doubleclick.net/tag/js/gpt.js") ? Ia++ : Da[gb].src.match("www.googletagservices.com/tag/js/gpt.js") && Qb++;
                    1 < Ia && 0 === Qb || 1 < Qb && 0 === Ia ? Q(h, mI()) : 0 < Qb && 0 < Ia && h.error(nI())
                }, 1E3);
                hr();
                if (_.H(oB) || _.kf(Cg).j) nt(), _.Nm(document, _.H(qB) ? _.te(yN) : _.te(zN));
                Zp(g, h);
                Im(g)
            }
        } catch (Da) {
            Eg(c, 106, Da)
        }
    })();
    _.FN = _.r.requestAnimationFrame || _.r.webkitRequestAnimationFrame;
    _.GN = !!_.FN && !/'iPhone'/.test(_.r.navigator.userAgent);
}).call(this, {});