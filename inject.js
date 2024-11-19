"use strict";
(() => {
    var Hn = Object.create;
    var ce = Object.defineProperty;
    var Gn = Object.getOwnPropertyDescriptor;
    var Nn = Object.getOwnPropertyNames;
    var Wn = Object.getPrototypeOf,
        Vn = Object.prototype.hasOwnProperty;
    var n = (e, r) => () => (r || e((r = {
        exports: {}
    }).exports, r), r.exports);
    var $n = (e, r, t, i) => {
        if (r && typeof r == "object" || typeof r == "function")
            for (let a of Nn(r)) !Vn.call(e, a) && a !== t && ce(e, a, {
                get: () => r[a],
                enumerable: !(i = Gn(r, a)) || i.enumerable
            });
        return e
    };
    var Kn = (e, r, t) => (t = e != null ? Hn(Wn(e)) : {}, $n(r || !e || !e.__esModule ? ce(t, "default", {
        value: e,
        enumerable: !0
    }) : t, e));
    var le = n((Yc, pe) => {
        "use strict";

        function Yn() {
            this.__data__ = [], this.size = 0
        }
        pe.exports = Yn
    });
    var C = n((Jc, fe) => {
        "use strict";

        function Jn(e, r) {
            return e === r || e !== e && r !== r
        }
        fe.exports = Jn
    });
    var S = n((Xc, de) => {
        "use strict";
        var Xn = C();

        function Zn(e, r) {
            for (var t = e.length; t--;)
                if (Xn(e[t][0], r)) return t;
            return -1
        }
        de.exports = Zn
    });
    var be = n((Zc, he) => {
        "use strict";
        var Qn = S(),
            kn = Array.prototype,
            ei = kn.splice;

        function ri(e) {
            var r = this.__data__,
                t = Qn(r, e);
            if (t < 0) return !1;
            var i = r.length - 1;
            return t == i ? r.pop() : ei.call(r, t, 1), --this.size, !0
        }
        he.exports = ri
    });
    var ve = n((Qc, ge) => {
        "use strict";
        var ti = S();

        function ni(e) {
            var r = this.__data__,
                t = ti(r, e);
            return t < 0 ? void 0 : r[t][1]
        }
        ge.exports = ni
    });
    var xe = n((kc, ye) => {
        "use strict";
        var ii = S();

        function ai(e) {
            return ii(this.__data__, e) > -1
        }
        ye.exports = ai
    });
    var qe = n((ep, me) => {
        "use strict";
        var oi = S();

        function si(e, r) {
            var t = this.__data__,
                i = oi(t, e);
            return i < 0 ? (++this.size, t.push([e, r])) : t[i][1] = r, this
        }
        me.exports = si
    });
    var A = n((rp, _e) => {
        "use strict";
        var ui = le(),
            ci = be(),
            pi = ve(),
            li = xe(),
            fi = qe();

        function y(e) {
            var r = -1,
                t = e == null ? 0 : e.length;
            for (this.clear(); ++r < t;) {
                var i = e[r];
                this.set(i[0], i[1])
            }
        }
        y.prototype.clear = ui;
        y.prototype.delete = ci;
        y.prototype.get = pi;
        y.prototype.has = li;
        y.prototype.set = fi;
        _e.exports = y
    });
    var we = n((tp, Te) => {
        "use strict";
        var di = A();

        function hi() {
            this.__data__ = new di, this.size = 0
        }
        Te.exports = hi
    });
    var je = n((np, Oe) => {
        "use strict";

        function bi(e) {
            var r = this.__data__,
                t = r.delete(e);
            return this.size = r.size, t
        }
        Oe.exports = bi
    });
    var Se = n((ip, Ce) => {
        "use strict";

        function gi(e) {
            return this.__data__.get(e)
        }
        Ce.exports = gi
    });
    var Ie = n((ap, Ae) => {
        "use strict";

        function vi(e) {
            return this.__data__.has(e)
        }
        Ae.exports = vi
    });
    var W = n((op, Pe) => {
        "use strict";
        var yi = typeof global == "object" && global && global.Object === Object && global;
        Pe.exports = yi
    });
    var g = n((sp, Ee) => {
        "use strict";
        var xi = W(),
            mi = typeof self == "object" && self && self.Object === Object && self,
            qi = xi || mi || Function("return this")();
        Ee.exports = qi
    });
    var V = n((up, Ue) => {
        "use strict";
        var _i = g(),
            Ti = _i.Symbol;
        Ue.exports = Ti
    });
    var Me = n((cp, De) => {
        "use strict";
        var Fe = V(),
            Be = Object.prototype,
            wi = Be.hasOwnProperty,
            Oi = Be.toString,
            I = Fe ? Fe.toStringTag : void 0;

        function ji(e) {
            var r = wi.call(e, I),
                t = e[I];
            try {
                e[I] = void 0;
                var i = !0
            } catch {}
            var a = Oi.call(e);
            return i && (r ? e[I] = t : delete e[I]), a
        }
        De.exports = ji
    });
    var Re = n((pp, Le) => {
        "use strict";
        var Ci = Object.prototype,
            Si = Ci.toString;

        function Ai(e) {
            return Si.call(e)
        }
        Le.exports = Ai
    });
    var P = n((lp, Ge) => {
        "use strict";
        var ze = V(),
            Ii = Me(),
            Pi = Re(),
            Ei = "[object Null]",
            Ui = "[object Undefined]",
            He = ze ? ze.toStringTag : void 0;

        function Fi(e) {
            return e == null ? e === void 0 ? Ui : Ei : He && He in Object(e) ? Ii(e) : Pi(e)
        }
        Ge.exports = Fi
    });
    var h = n((fp, Ne) => {
        "use strict";

        function Bi(e) {
            var r = typeof e;
            return e != null && (r == "object" || r == "function")
        }
        Ne.exports = Bi
    });
    var R = n((dp, We) => {
        "use strict";
        var Di = P(),
            Mi = h(),
            Li = "[object AsyncFunction]",
            Ri = "[object Function]",
            zi = "[object GeneratorFunction]",
            Hi = "[object Proxy]";

        function Gi(e) {
            if (!Mi(e)) return !1;
            var r = Di(e);
            return r == Ri || r == zi || r == Li || r == Hi
        }
        We.exports = Gi
    });
    var $e = n((hp, Ve) => {
        "use strict";
        var Ni = g(),
            Wi = Ni["__core-js_shared__"];
        Ve.exports = Wi
    });
    var Je = n((bp, Ye) => {
        "use strict";
        var $ = $e(),
            Ke = function() {
                var e = /[^.]+$/.exec($ && $.keys && $.keys.IE_PROTO || "");
                return e ? "Symbol(src)_1." + e : ""
            }();

        function Vi(e) {
            return !!Ke && Ke in e
        }
        Ye.exports = Vi
    });
    var Ze = n((gp, Xe) => {
        "use strict";
        var $i = Function.prototype,
            Ki = $i.toString;

        function Yi(e) {
            if (e != null) {
                try {
                    return Ki.call(e)
                } catch {}
                try {
                    return e + ""
                } catch {}
            }
            return ""
        }
        Xe.exports = Yi
    });
    var ke = n((vp, Qe) => {
        "use strict";
        var Ji = R(),
            Xi = Je(),
            Zi = h(),
            Qi = Ze(),
            ki = /[\\^$.*+?()[\]{}|]/g,
            ea = /^\[object .+?Constructor\]$/,
            ra = Function.prototype,
            ta = Object.prototype,
            na = ra.toString,
            ia = ta.hasOwnProperty,
            aa = RegExp("^" + na.call(ia).replace(ki, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");

        function oa(e) {
            if (!Zi(e) || Xi(e)) return !1;
            var r = Ji(e) ? aa : ea;
            return r.test(Qi(e))
        }
        Qe.exports = oa
    });
    var rr = n((yp, er) => {
        "use strict";

        function sa(e, r) {
            return e?.[r]
        }
        er.exports = sa
    });
    var z = n((xp, tr) => {
        "use strict";
        var ua = ke(),
            ca = rr();

        function pa(e, r) {
            var t = ca(e, r);
            return ua(t) ? t : void 0
        }
        tr.exports = pa
    });
    var K = n((mp, nr) => {
        "use strict";
        var la = z(),
            fa = g(),
            da = la(fa, "Map");
        nr.exports = da
    });
    var E = n((qp, ir) => {
        "use strict";
        var ha = z(),
            ba = ha(Object, "create");
        ir.exports = ba
    });
    var sr = n((_p, or) => {
        "use strict";
        var ar = E();

        function ga() {
            this.__data__ = ar ? ar(null) : {}, this.size = 0
        }
        or.exports = ga
    });
    var cr = n((Tp, ur) => {
        "use strict";

        function va(e) {
            var r = this.has(e) && delete this.__data__[e];
            return this.size -= r ? 1 : 0, r
        }
        ur.exports = va
    });
    var lr = n((wp, pr) => {
        "use strict";
        var ya = E(),
            xa = "__lodash_hash_undefined__",
            ma = Object.prototype,
            qa = ma.hasOwnProperty;

        function _a(e) {
            var r = this.__data__;
            if (ya) {
                var t = r[e];
                return t === xa ? void 0 : t
            }
            return qa.call(r, e) ? r[e] : void 0
        }
        pr.exports = _a
    });
    var dr = n((Op, fr) => {
        "use strict";
        var Ta = E(),
            wa = Object.prototype,
            Oa = wa.hasOwnProperty;

        function ja(e) {
            var r = this.__data__;
            return Ta ? r[e] !== void 0 : Oa.call(r, e)
        }
        fr.exports = ja
    });
    var br = n((jp, hr) => {
        "use strict";
        var Ca = E(),
            Sa = "__lodash_hash_undefined__";

        function Aa(e, r) {
            var t = this.__data__;
            return this.size += this.has(e) ? 0 : 1, t[e] = Ca && r === void 0 ? Sa : r, this
        }
        hr.exports = Aa
    });
    var vr = n((Cp, gr) => {
        "use strict";
        var Ia = sr(),
            Pa = cr(),
            Ea = lr(),
            Ua = dr(),
            Fa = br();

        function x(e) {
            var r = -1,
                t = e == null ? 0 : e.length;
            for (this.clear(); ++r < t;) {
                var i = e[r];
                this.set(i[0], i[1])
            }
        }
        x.prototype.clear = Ia;
        x.prototype.delete = Pa;
        x.prototype.get = Ea;
        x.prototype.has = Ua;
        x.prototype.set = Fa;
        gr.exports = x
    });
    var mr = n((Sp, xr) => {
        "use strict";
        var yr = vr(),
            Ba = A(),
            Da = K();

        function Ma() {
            this.size = 0, this.__data__ = {
                hash: new yr,
                map: new(Da || Ba),
                string: new yr
            }
        }
        xr.exports = Ma
    });
    var _r = n((Ap, qr) => {
        "use strict";

        function La(e) {
            var r = typeof e;
            return r == "string" || r == "number" || r == "symbol" || r == "boolean" ? e !== "__proto__" : e === null
        }
        qr.exports = La
    });
    var U = n((Ip, Tr) => {
        "use strict";
        var Ra = _r();

        function za(e, r) {
            var t = e.__data__;
            return Ra(r) ? t[typeof r == "string" ? "string" : "hash"] : t.map
        }
        Tr.exports = za
    });
    var Or = n((Pp, wr) => {
        "use strict";
        var Ha = U();

        function Ga(e) {
            var r = Ha(this, e).delete(e);
            return this.size -= r ? 1 : 0, r
        }
        wr.exports = Ga
    });
    var Cr = n((Ep, jr) => {
        "use strict";
        var Na = U();

        function Wa(e) {
            return Na(this, e).get(e)
        }
        jr.exports = Wa
    });
    var Ar = n((Up, Sr) => {
        "use strict";
        var Va = U();

        function $a(e) {
            return Va(this, e).has(e)
        }
        Sr.exports = $a
    });
    var Pr = n((Fp, Ir) => {
        "use strict";
        var Ka = U();

        function Ya(e, r) {
            var t = Ka(this, e),
                i = t.size;
            return t.set(e, r), this.size += t.size == i ? 0 : 1, this
        }
        Ir.exports = Ya
    });
    var Ur = n((Bp, Er) => {
        "use strict";
        var Ja = mr(),
            Xa = Or(),
            Za = Cr(),
            Qa = Ar(),
            ka = Pr();

        function m(e) {
            var r = -1,
                t = e == null ? 0 : e.length;
            for (this.clear(); ++r < t;) {
                var i = e[r];
                this.set(i[0], i[1])
            }
        }
        m.prototype.clear = Ja;
        m.prototype.delete = Xa;
        m.prototype.get = Za;
        m.prototype.has = Qa;
        m.prototype.set = ka;
        Er.exports = m
    });
    var Br = n((Dp, Fr) => {
        "use strict";
        var eo = A(),
            ro = K(),
            to = Ur(),
            no = 200;

        function io(e, r) {
            var t = this.__data__;
            if (t instanceof eo) {
                var i = t.__data__;
                if (!ro || i.length < no - 1) return i.push([e, r]), this.size = ++t.size, this;
                t = this.__data__ = new to(i)
            }
            return t.set(e, r), this.size = t.size, this
        }
        Fr.exports = io
    });
    var Mr = n((Mp, Dr) => {
        "use strict";
        var ao = A(),
            oo = we(),
            so = je(),
            uo = Se(),
            co = Ie(),
            po = Br();

        function q(e) {
            var r = this.__data__ = new ao(e);
            this.size = r.size
        }
        q.prototype.clear = oo;
        q.prototype.delete = so;
        q.prototype.get = uo;
        q.prototype.has = co;
        q.prototype.set = po;
        Dr.exports = q
    });
    var Y = n((Lp, Lr) => {
        "use strict";
        var lo = z(),
            fo = function() {
                try {
                    var e = lo(Object, "defineProperty");
                    return e({}, "", {}), e
                } catch {}
            }();
        Lr.exports = fo
    });
    var H = n((Rp, zr) => {
        "use strict";
        var Rr = Y();

        function ho(e, r, t) {
            r == "__proto__" && Rr ? Rr(e, r, {
                configurable: !0,
                enumerable: !0,
                value: t,
                writable: !0
            }) : e[r] = t
        }
        zr.exports = ho
    });
    var J = n((zp, Hr) => {
        "use strict";
        var bo = H(),
            go = C();

        function vo(e, r, t) {
            (t !== void 0 && !go(e[r], t) || t === void 0 && !(r in e)) && bo(e, r, t)
        }
        Hr.exports = vo
    });
    var Nr = n((Hp, Gr) => {
        "use strict";

        function yo(e) {
            return function(r, t, i) {
                for (var a = -1, o = Object(r), c = i(r), s = c.length; s--;) {
                    var p = c[e ? s : ++a];
                    if (t(o[p], p, o) === !1) break
                }
                return r
            }
        }
        Gr.exports = yo
    });
    var Vr = n((Gp, Wr) => {
        "use strict";
        var xo = Nr(),
            mo = xo();
        Wr.exports = mo
    });
    var Xr = n((F, _) => {
        "use strict";
        var qo = g(),
            Jr = typeof F == "object" && F && !F.nodeType && F,
            $r = Jr && typeof _ == "object" && _ && !_.nodeType && _,
            _o = $r && $r.exports === Jr,
            Kr = _o ? qo.Buffer : void 0,
            Yr = Kr ? Kr.allocUnsafe : void 0;

        function To(e, r) {
            if (r) return e.slice();
            var t = e.length,
                i = Yr ? Yr(t) : new e.constructor(t);
            return e.copy(i), i
        }
        _.exports = To
    });
    var Qr = n((Np, Zr) => {
        "use strict";
        var wo = g(),
            Oo = wo.Uint8Array;
        Zr.exports = Oo
    });
    var rt = n((Wp, et) => {
        "use strict";
        var kr = Qr();

        function jo(e) {
            var r = new e.constructor(e.byteLength);
            return new kr(r).set(new kr(e)), r
        }
        et.exports = jo
    });
    var nt = n((Vp, tt) => {
        "use strict";
        var Co = rt();

        function So(e, r) {
            var t = r ? Co(e.buffer) : e.buffer;
            return new e.constructor(t, e.byteOffset, e.length)
        }
        tt.exports = So
    });
    var at = n(($p, it) => {
        "use strict";

        function Ao(e, r) {
            var t = -1,
                i = e.length;
            for (r || (r = Array(i)); ++t < i;) r[t] = e[t];
            return r
        }
        it.exports = Ao
    });
    var ut = n((Kp, st) => {
        "use strict";
        var Io = h(),
            ot = Object.create,
            Po = function() {
                function e() {}
                return function(r) {
                    if (!Io(r)) return {};
                    if (ot) return ot(r);
                    e.prototype = r;
                    var t = new e;
                    return e.prototype = void 0, t
                }
            }();
        st.exports = Po
    });
    var pt = n((Yp, ct) => {
        "use strict";

        function Eo(e, r) {
            return function(t) {
                return e(r(t))
            }
        }
        ct.exports = Eo
    });
    var X = n((Jp, lt) => {
        "use strict";
        var Uo = pt(),
            Fo = Uo(Object.getPrototypeOf, Object);
        lt.exports = Fo
    });
    var Z = n((Xp, ft) => {
        "use strict";
        var Bo = Object.prototype;

        function Do(e) {
            var r = e && e.constructor,
                t = typeof r == "function" && r.prototype || Bo;
            return e === t
        }
        ft.exports = Do
    });
    var ht = n((Zp, dt) => {
        "use strict";
        var Mo = ut(),
            Lo = X(),
            Ro = Z();

        function zo(e) {
            return typeof e.constructor == "function" && !Ro(e) ? Mo(Lo(e)) : {}
        }
        dt.exports = zo
    });
    var T = n((Qp, bt) => {
        "use strict";

        function Ho(e) {
            return e != null && typeof e == "object"
        }
        bt.exports = Ho
    });
    var vt = n((kp, gt) => {
        "use strict";
        var Go = P(),
            No = T(),
            Wo = "[object Arguments]";

        function Vo(e) {
            return No(e) && Go(e) == Wo
        }
        gt.exports = Vo
    });
    var Q = n((el, mt) => {
        "use strict";
        var yt = vt(),
            $o = T(),
            xt = Object.prototype,
            Ko = xt.hasOwnProperty,
            Yo = xt.propertyIsEnumerable,
            Jo = yt(function() {
                return arguments
            }()) ? yt : function(e) {
                return $o(e) && Ko.call(e, "callee") && !Yo.call(e, "callee")
            };
        mt.exports = Jo
    });
    var k = n((rl, qt) => {
        "use strict";
        var Xo = Array.isArray;
        qt.exports = Xo
    });
    var ee = n((tl, _t) => {
        "use strict";
        var Zo = 9007199254740991;

        function Qo(e) {
            return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Zo
        }
        _t.exports = Qo
    });
    var G = n((nl, Tt) => {
        "use strict";
        var ko = R(),
            es = ee();

        function rs(e) {
            return e != null && es(e.length) && !ko(e)
        }
        Tt.exports = rs
    });
    var Ot = n((il, wt) => {
        "use strict";
        var ts = G(),
            ns = T();

        function is(e) {
            return ns(e) && ts(e)
        }
        wt.exports = is
    });
    var Ct = n((al, jt) => {
        "use strict";

        function as() {
            return !1
        }
        jt.exports = as
    });
    var re = n((B, w) => {
        "use strict";
        var os = g(),
            ss = Ct(),
            It = typeof B == "object" && B && !B.nodeType && B,
            St = It && typeof w == "object" && w && !w.nodeType && w,
            us = St && St.exports === It,
            At = us ? os.Buffer : void 0,
            cs = At ? At.isBuffer : void 0,
            ps = cs || ss;
        w.exports = ps
    });
    var Ut = n((ol, Et) => {
        "use strict";
        var ls = P(),
            fs = X(),
            ds = T(),
            hs = "[object Object]",
            bs = Function.prototype,
            gs = Object.prototype,
            Pt = bs.toString,
            vs = gs.hasOwnProperty,
            ys = Pt.call(Object);

        function xs(e) {
            if (!ds(e) || ls(e) != hs) return !1;
            var r = fs(e);
            if (r === null) return !0;
            var t = vs.call(r, "constructor") && r.constructor;
            return typeof t == "function" && t instanceof t && Pt.call(t) == ys
        }
        Et.exports = xs
    });
    var Bt = n((sl, Ft) => {
        "use strict";
        var ms = P(),
            qs = ee(),
            _s = T(),
            Ts = "[object Arguments]",
            ws = "[object Array]",
            Os = "[object Boolean]",
            js = "[object Date]",
            Cs = "[object Error]",
            Ss = "[object Function]",
            As = "[object Map]",
            Is = "[object Number]",
            Ps = "[object Object]",
            Es = "[object RegExp]",
            Us = "[object Set]",
            Fs = "[object String]",
            Bs = "[object WeakMap]",
            Ds = "[object ArrayBuffer]",
            Ms = "[object DataView]",
            Ls = "[object Float32Array]",
            Rs = "[object Float64Array]",
            zs = "[object Int8Array]",
            Hs = "[object Int16Array]",
            Gs = "[object Int32Array]",
            Ns = "[object Uint8Array]",
            Ws = "[object Uint8ClampedArray]",
            Vs = "[object Uint16Array]",
            $s = "[object Uint32Array]",
            l = {};
        l[Ls] = l[Rs] = l[zs] = l[Hs] = l[Gs] = l[Ns] = l[Ws] = l[Vs] = l[$s] = !0;
        l[Ts] = l[ws] = l[Ds] = l[Os] = l[Ms] = l[js] = l[Cs] = l[Ss] = l[As] = l[Is] = l[Ps] = l[Es] = l[Us] = l[Fs] = l[Bs] = !1;

        function Ks(e) {
            return _s(e) && qs(e.length) && !!l[ms(e)]
        }
        Ft.exports = Ks
    });
    var Mt = n((ul, Dt) => {
        "use strict";

        function Ys(e) {
            return function(r) {
                return e(r)
            }
        }
        Dt.exports = Ys
    });
    var Rt = n((D, O) => {
        "use strict";
        var Js = W(),
            Lt = typeof D == "object" && D && !D.nodeType && D,
            M = Lt && typeof O == "object" && O && !O.nodeType && O,
            Xs = M && M.exports === Lt,
            te = Xs && Js.process,
            Zs = function() {
                try {
                    var e = M && M.require && M.require("util").types;
                    return e || te && te.binding && te.binding("util")
                } catch {}
            }();
        O.exports = Zs
    });
    var ne = n((cl, Gt) => {
        "use strict";
        var Qs = Bt(),
            ks = Mt(),
            zt = Rt(),
            Ht = zt && zt.isTypedArray,
            eu = Ht ? ks(Ht) : Qs;
        Gt.exports = eu
    });
    var ie = n((pl, Nt) => {
        "use strict";

        function ru(e, r) {
            if (!(r === "constructor" && typeof e[r] == "function") && r != "__proto__") return e[r]
        }
        Nt.exports = ru
    });
    var Vt = n((ll, Wt) => {
        "use strict";
        var tu = H(),
            nu = C(),
            iu = Object.prototype,
            au = iu.hasOwnProperty;

        function ou(e, r, t) {
            var i = e[r];
            (!(au.call(e, r) && nu(i, t)) || t === void 0 && !(r in e)) && tu(e, r, t)
        }
        Wt.exports = ou
    });
    var Kt = n((fl, $t) => {
        "use strict";
        var su = Vt(),
            uu = H();

        function cu(e, r, t, i) {
            var a = !t;
            t || (t = {});
            for (var o = -1, c = r.length; ++o < c;) {
                var s = r[o],
                    p = i ? i(t[s], e[s], s, t, e) : void 0;
                p === void 0 && (p = e[s]), a ? uu(t, s, p) : su(t, s, p)
            }
            return t
        }
        $t.exports = cu
    });
    var Jt = n((dl, Yt) => {
        "use strict";

        function pu(e, r) {
            for (var t = -1, i = Array(e); ++t < e;) i[t] = r(t);
            return i
        }
        Yt.exports = pu
    });
    var ae = n((hl, Xt) => {
        "use strict";
        var lu = 9007199254740991,
            fu = /^(?:0|[1-9]\d*)$/;

        function du(e, r) {
            var t = typeof e;
            return r = r ?? lu, !!r && (t == "number" || t != "symbol" && fu.test(e)) && e > -1 && e % 1 == 0 && e < r
        }
        Xt.exports = du
    });
    var Qt = n((bl, Zt) => {
        "use strict";
        var hu = Jt(),
            bu = Q(),
            gu = k(),
            vu = re(),
            yu = ae(),
            xu = ne(),
            mu = Object.prototype,
            qu = mu.hasOwnProperty;

        function _u(e, r) {
            var t = gu(e),
                i = !t && bu(e),
                a = !t && !i && vu(e),
                o = !t && !i && !a && xu(e),
                c = t || i || a || o,
                s = c ? hu(e.length, String) : [],
                p = s.length;
            for (var d in e)(r || qu.call(e, d)) && !(c && (d == "length" || a && (d == "offset" || d == "parent") || o && (d == "buffer" || d == "byteLength" || d == "byteOffset") || yu(d, p))) && s.push(d);
            return s
        }
        Zt.exports = _u
    });
    var en = n((gl, kt) => {
        "use strict";

        function Tu(e) {
            var r = [];
            if (e != null)
                for (var t in Object(e)) r.push(t);
            return r
        }
        kt.exports = Tu
    });
    var tn = n((vl, rn) => {
        "use strict";
        var wu = h(),
            Ou = Z(),
            ju = en(),
            Cu = Object.prototype,
            Su = Cu.hasOwnProperty;

        function Au(e) {
            if (!wu(e)) return ju(e);
            var r = Ou(e),
                t = [];
            for (var i in e) i == "constructor" && (r || !Su.call(e, i)) || t.push(i);
            return t
        }
        rn.exports = Au
    });
    var oe = n((yl, nn) => {
        "use strict";
        var Iu = Qt(),
            Pu = tn(),
            Eu = G();

        function Uu(e) {
            return Eu(e) ? Iu(e, !0) : Pu(e)
        }
        nn.exports = Uu
    });
    var on = n((xl, an) => {
        "use strict";
        var Fu = Kt(),
            Bu = oe();

        function Du(e) {
            return Fu(e, Bu(e))
        }
        an.exports = Du
    });
    var fn = n((ml, ln) => {
        "use strict";
        var sn = J(),
            Mu = Xr(),
            Lu = nt(),
            Ru = at(),
            zu = ht(),
            un = Q(),
            cn = k(),
            Hu = Ot(),
            Gu = re(),
            Nu = R(),
            Wu = h(),
            Vu = Ut(),
            $u = ne(),
            pn = ie(),
            Ku = on();

        function Yu(e, r, t, i, a, o, c) {
            var s = pn(e, t),
                p = pn(r, t),
                d = c.get(p);
            if (d) {
                sn(e, t, d);
                return
            }
            var f = o ? o(s, p, t + "", e, r, c) : void 0,
                b = f === void 0;
            if (b) {
                var v = cn(p),
                    j = !v && Gu(p),
                    ue = !v && !j && $u(p);
                f = p, v || j || ue ? cn(s) ? f = s : Hu(s) ? f = Ru(s) : j ? (b = !1, f = Mu(p, !0)) : ue ? (b = !1, f = Lu(p, !0)) : f = [] : Vu(p) || un(p) ? (f = s, un(s) ? f = Ku(s) : (!Wu(s) || Nu(s)) && (f = zu(p))) : b = !1
            }
            b && (c.set(p, f), a(f, p, i, o, c), c.delete(p)), sn(e, t, f)
        }
        ln.exports = Yu
    });
    var bn = n((ql, hn) => {
        "use strict";
        var Ju = Mr(),
            Xu = J(),
            Zu = Vr(),
            Qu = fn(),
            ku = h(),
            ec = oe(),
            rc = ie();

        function dn(e, r, t, i, a) {
            e !== r && Zu(r, function(o, c) {
                if (a || (a = new Ju), ku(o)) Qu(e, r, c, t, dn, i, a);
                else {
                    var s = i ? i(rc(e, c), o, c + "", e, r, a) : void 0;
                    s === void 0 && (s = o), Xu(e, c, s)
                }
            }, ec)
        }
        hn.exports = dn
    });
    var se = n((_l, gn) => {
        "use strict";

        function tc(e) {
            return e
        }
        gn.exports = tc
    });
    var yn = n((Tl, vn) => {
        "use strict";

        function nc(e, r, t) {
            switch (t.length) {
                case 0:
                    return e.call(r);
                case 1:
                    return e.call(r, t[0]);
                case 2:
                    return e.call(r, t[0], t[1]);
                case 3:
                    return e.call(r, t[0], t[1], t[2])
            }
            return e.apply(r, t)
        }
        vn.exports = nc
    });
    var qn = n((wl, mn) => {
        "use strict";
        var ic = yn(),
            xn = Math.max;

        function ac(e, r, t) {
            return r = xn(r === void 0 ? e.length - 1 : r, 0),
                function() {
                    for (var i = arguments, a = -1, o = xn(i.length - r, 0), c = Array(o); ++a < o;) c[a] = i[r + a];
                    a = -1;
                    for (var s = Array(r + 1); ++a < r;) s[a] = i[a];
                    return s[r] = t(c), ic(e, this, s)
                }
        }
        mn.exports = ac
    });
    var Tn = n((Ol, _n) => {
        "use strict";

        function oc(e) {
            return function() {
                return e
            }
        }
        _n.exports = oc
    });
    var jn = n((jl, On) => {
        "use strict";
        var sc = Tn(),
            wn = Y(),
            uc = se(),
            cc = wn ? function(e, r) {
                return wn(e, "toString", {
                    configurable: !0,
                    enumerable: !1,
                    value: sc(r),
                    writable: !0
                })
            } : uc;
        On.exports = cc
    });
    var Sn = n((Cl, Cn) => {
        "use strict";
        var pc = 800,
            lc = 16,
            fc = Date.now;

        function dc(e) {
            var r = 0,
                t = 0;
            return function() {
                var i = fc(),
                    a = lc - (i - t);
                if (t = i, a > 0) {
                    if (++r >= pc) return arguments[0]
                } else r = 0;
                return e.apply(void 0, arguments)
            }
        }
        Cn.exports = dc
    });
    var In = n((Sl, An) => {
        "use strict";
        var hc = jn(),
            bc = Sn(),
            gc = bc(hc);
        An.exports = gc
    });
    var En = n((Al, Pn) => {
        "use strict";
        var vc = se(),
            yc = qn(),
            xc = In();

        function mc(e, r) {
            return xc(yc(e, r, vc), e + "")
        }
        Pn.exports = mc
    });
    var Fn = n((Il, Un) => {
        "use strict";
        var qc = C(),
            _c = G(),
            Tc = ae(),
            wc = h();

        function Oc(e, r, t) {
            if (!wc(t)) return !1;
            var i = typeof r;
            return (i == "number" ? _c(t) && Tc(r, t.length) : i == "string" && r in t) ? qc(t[r], e) : !1
        }
        Un.exports = Oc
    });
    var Dn = n((Pl, Bn) => {
        "use strict";
        var jc = En(),
            Cc = Fn();

        function Sc(e) {
            return jc(function(r, t) {
                var i = -1,
                    a = t.length,
                    o = a > 1 ? t[a - 1] : void 0,
                    c = a > 2 ? t[2] : void 0;
                for (o = e.length > 3 && typeof o == "function" ? (a--, o) : void 0, c && Cc(t[0], t[1], c) && (o = a < 3 ? void 0 : o, a = 1), r = Object(r); ++i < a;) {
                    var s = t[i];
                    s && e(r, s, i, o)
                }
                return r
            })
        }
        Bn.exports = Sc
    });
    var Ln = n((El, Mn) => {
        "use strict";
        var Ac = bn(),
            Ic = Dn(),
            Pc = Ic(function(e, r, t) {
                Ac(e, r, t)
            });
        Mn.exports = Pc
    });
    var N = Kn(Ln(), 1),
        Ec = "body",
        Uc = "https://cdn.botpress.cloud/webchat/v2.2/webchat.js",
        Fc = "https://cdn.botpress.cloud/webchat/v2.2/fab.js",
        Bc = () => {
            u.state = "opened", L(), u._emit("webchat:opened", {})
        },
        Dc = () => {
            u.state = "closed", L(), u._emit("webchat:closed", {})
        },
        Mc = () => {
            u.state = u.state === "opened" ? "closed" : "opened", L(), u.state === "opened" ? u._emit("webchat:opened", {}) : u.state === "closed" && u._emit("webchat:closed", {})
        },
        Lc = e => {
            throw new Error("Botpress webchat is not initialized. Please call botpress.init() before sending events.")
        },
        Rc = e => {
            throw new Error("Botpress webchat is not initialized. Please call botpress.init() before sending messages.")
        },
        zc = () => {
            throw new Error("Botpress webchat is not initialized. Please call botpress.init() before getting the user information.")
        },
        Hc = async e => {
            u.user = (0, N.default)(u.user, e)
        }, Gc = e => {
            let {
                configuration: r,
                user: t
            } = e;
            r && (u.configuration = (0, N.default)(u.configuration, r)), t && (u.user = (0, N.default)(u.user, t)), L()
        }, Nc = e => {
            if (u.initialized) return;
            if (!e.botId) {
                console.error("Botpress: botId is required");
                return
            }
            if (!e.clientId) {
                console.error("Botpress: clientId is required");
                return
            }
            let {
                botId: r,
                clientId: t,
                selector: i = Ec,
                webchatScriptUrl: a = Uc,
                fabScriptUrl: o = Fc,
                pushpinUrl: c,
                defaultState: s,
                configuration: p,
                user: d
            } = e;
            u.botId = r, u.clientId = t, u.pushpinUrl = c ?? u.pushpinUrl, u.state = s ?? u.state, u.configuration = p ?? u.configuration, u.user = d ?? u.user;
            let f = document.querySelector(i);
            if (!f) {
                console.error(`Botpress: could not find element to inject the webchat selector "${i}"`);
                return
            }
            u.webchatIframe = Rn(f, u.webchatId, a, "webchat", u.configuration?.additionalStylesheetUrl), u.fabIframe = Rn(f, u.fabId, o, "fab", u.configuration?.additionalStylesheetUrl);
            let b = u.configuration?.radius ?? 1;
            L();
            let v = document.createElement("style"),
                j = `
      .bpFab {
      z-index: 9998;
      position: fixed;
      bottom: 1.5rem;
      right: 100rem;
      height: 4rem;
      width: 4rem;
      border-radius: 9999px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      transition:
        transform 0.3s ease,
        box-shadow 0.3s ease;
    }

    .bpFab:hover {
      transform: scale(1.1);
      box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
    }

    .bpFab:active {
      transform: scale(0.9);
    }

    .bpWebchat {
      width: 100%;
      height: 100dvh;
      position: fixed;
      bottom: 0;
      right: 0;
      z-index: 9999;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      border-radius: ${.375*b}rem;
    }
    @media (min-width: 768px) {
      .bpWebchat {
        width: 400px;
        bottom: 6rem;
        right: 32rem;
        max-height: 800px;
        height: min(800px, calc(100% - 120px));
        transform-origin: bottom right;
      }
    }

    @media (max-width: 800px) {
      :has(.bpOpen) {
        overflow: hidden;
      }
    }

    .bpOpen {
      visibility: visible;
      opacity: 1;
      transform: translateY(0);
      transition:
        opacity 100ms ease-in-out,
        transform 100ms ease-in-out;
    }
    .bpClose visibility: visible;
          opacity: 1;
          transform: translateY(0);
          transition:
            opacity 100ms ease-in-out,
            transform 100ms ease-in-out;
     }
  `;
            v.textContent = j, f.appendChild(v), u.initialized = !0, u._emit("webchat:ready", {})
        }, L = () => {
            let e = u.state === "opened" ? "bpOpen" : "bpClose";
            u.webchatIframe?.setAttribute("class", `${e} bpWebchat bpReset`), u.fabIframe?.setAttribute("class", "bpFab")
        }, Wc = () => !!navigator.userAgent.match("Firefox"), Vc = e => {
            let r = document.createElement("script");
            return r.type = "text/javascript", r.src = e, r.type = "module", r
        }, Rn = (e, r, t, i, a) => {
            let o = document.createElement("iframe");
            if (o.setAttribute("aria-hidden", "true"), o.setAttribute("tabIndex", "-1"), o.setAttribute("title", "Botpress"), o.setAttribute("frameborder", "0"), o.setAttribute("name", i), e.appendChild(o), Wc()) {
                let s = o.contentDocument?.open();
                s?.write("<!DOCTYPE html>"), s?.close()
            }
            o.contentDocument && (o.contentDocument.documentElement.innerHTML = `<!DOCTYPE html><html><head><meta name="viewport" content="width=device-width, initial-scale=1 viewport-fit=cover, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"></head><body class="bpHeightFull"><div class="bpHeightFull" id="${r}"></div></body></html>`, o.contentDocument.documentElement.setAttribute("lang", "en"), o.contentDocument.documentElement.setAttribute("class", "bpHeightFull bpReset"));
            let c = Vc(t);
            return o.contentDocument?.head.append(c), o.contentDocument?.head.append(`<link
    href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&family=IBM+Plex+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
    rel="stylesheet" />`), a && o.contentDocument?.head.append(`<link rel="stylesheet" href="${a}" />`), o
        }, $c = () => {
            let e = {};
            return {
                on: (i, a) => (e[i] || (e[i] = new Set), e[i]?.add(a), () => e[i]?.delete(a)),
                emit: (i, a) => {
                    e[i]?.forEach(o => o(a)), e["*"]?.forEach(o => o({
                        type: i,
                        payload: a
                    }))
                }
            }
        }, zn = $c(), u = {
            initialized: !1,
            version: "2a326c166beff0be35ed96d5bd3b45b23db649ea",
            pushpinUrl: "https://webchat.botpress.cloud",
            clientId: "",
            botId: "",
            fabIframe: void 0,
            fabId: "fab-root",
            state: "initial",
            webchatIframe: void 0,
            webchatId: "webchat-root",
            configuration: void 0,
            user: void 0,
            allowFileUpload: void 0,
            open: Bc,
            close: Dc,
            toggle: Mc,
            init: Nc,
            config: Gc,
            sendEvent: Lc,
            sendMessage: Rc,
            updateUser: Hc,
            getUser: zc,
            on: zn.on,
            _emit: zn.emit
        };
    window.botpress = u;
})();
