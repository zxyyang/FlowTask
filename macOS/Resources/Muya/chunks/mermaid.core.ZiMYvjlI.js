import { c as Vn, Q as Gn, ae as Me } from "./emojis.bYhmvyOg.js";
import { T as Xn, d as Kn, t as Zn, i as Jn, c as si, a as li, b as Qn, e as ta, f as ea, n as ra, g as ia, h as oa, j as na, k as aa, l as sa, m as la, o as ha, p as ca, q as ua, r as da, s as fa, u as ga, v as pa, w as ma, x as Ca, y as ya, z as ba, A as xa } from "./step.sPVUIIxm.js";
function _a(t) {
  for (var e = [], r = 1; r < arguments.length; r++)
    e[r - 1] = arguments[r];
  var i = Array.from(typeof t == "string" ? [t] : t);
  i[i.length - 1] = i[i.length - 1].replace(/\r?\n([\t ]*)$/, "");
  var o = i.reduce(function(s, l) {
    var c = l.match(/\n([\t ]+|(?!\s).)/g);
    return c ? s.concat(c.map(function(u) {
      var f, h;
      return (h = (f = u.match(/[\t ]/g)) === null || f === void 0 ? void 0 : f.length) !== null && h !== void 0 ? h : 0;
    })) : s;
  }, []);
  if (o.length) {
    var n = new RegExp(`
[	 ]{` + Math.min.apply(Math, o) + "}", "g");
    i = i.map(function(s) {
      return s.replace(n, `
`);
    });
  }
  i[0] = i[0].replace(/^\r?\n/, "");
  var a = i[0];
  return e.forEach(function(s, l) {
    var c = a.match(/(?:^|\n)( *)$/), u = c ? c[1] : "", f = s;
    typeof s == "string" && s.includes(`
`) && (f = String(s).split(`
`).map(function(h, g) {
      return g === 0 ? h : "" + u + h;
    }).join(`
`)), a += f + i[l + 1];
  }), a;
}
var Ki = { exports: {} };
(function(t, e) {
  (function(r, i) {
    t.exports = i();
  })(Vn, function() {
    var r = 1e3, i = 6e4, o = 36e5, n = "millisecond", a = "second", s = "minute", l = "hour", c = "day", u = "week", f = "month", h = "quarter", g = "year", y = "date", _ = "Invalid Date", k = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, O = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, x = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(A) {
      var b = ["th", "st", "nd", "rd"], p = A % 100;
      return "[" + A + (b[(p - 20) % 10] || b[p] || b[0]) + "]";
    } }, z = function(A, b, p) {
      var S = String(A);
      return !S || S.length >= b ? A : "" + Array(b + 1 - S.length).join(p) + A;
    }, q = { s: z, z: function(A) {
      var b = -A.utcOffset(), p = Math.abs(b), S = Math.floor(p / 60), C = p % 60;
      return (b <= 0 ? "+" : "-") + z(S, 2, "0") + ":" + z(C, 2, "0");
    }, m: function A(b, p) {
      if (b.date() < p.date())
        return -A(p, b);
      var S = 12 * (p.year() - b.year()) + (p.month() - b.month()), C = b.clone().add(S, f), w = p - C < 0, $ = b.clone().add(S + (w ? -1 : 1), f);
      return +(-(S + (p - C) / (w ? C - $ : $ - C)) || 0);
    }, a: function(A) {
      return A < 0 ? Math.ceil(A) || 0 : Math.floor(A);
    }, p: function(A) {
      return { M: f, y: g, w: u, d: c, D: y, h: l, m: s, s: a, ms: n, Q: h }[A] || String(A || "").toLowerCase().replace(/s$/, "");
    }, u: function(A) {
      return A === void 0;
    } }, P = "en", R = {};
    R[P] = x;
    var E = "$isDayjsObject", zt = function(A) {
      return A instanceof Ft || !(!A || !A[E]);
    }, Pt = function A(b, p, S) {
      var C;
      if (!b)
        return P;
      if (typeof b == "string") {
        var w = b.toLowerCase();
        R[w] && (C = w), p && (R[w] = p, C = w);
        var $ = b.split("-");
        if (!C && $.length > 1)
          return A($[0]);
      } else {
        var I = b.name;
        R[I] = b, C = I;
      }
      return !S && C && (P = C), C || !S && P;
    }, W = function(A, b) {
      if (zt(A))
        return A.clone();
      var p = typeof b == "object" ? b : {};
      return p.date = A, p.args = arguments, new Ft(p);
    }, M = q;
    M.l = Pt, M.i = zt, M.w = function(A, b) {
      return W(A, { locale: b.$L, utc: b.$u, x: b.$x, $offset: b.$offset });
    };
    var Ft = function() {
      function A(p) {
        this.$L = Pt(p.locale, null, !0), this.parse(p), this.$x = this.$x || p.x || {}, this[E] = !0;
      }
      var b = A.prototype;
      return b.parse = function(p) {
        this.$d = function(S) {
          var C = S.date, w = S.utc;
          if (C === null)
            return /* @__PURE__ */ new Date(NaN);
          if (M.u(C))
            return /* @__PURE__ */ new Date();
          if (C instanceof Date)
            return new Date(C);
          if (typeof C == "string" && !/Z$/i.test(C)) {
            var $ = C.match(k);
            if ($) {
              var I = $[2] - 1 || 0, N = ($[7] || "0").substring(0, 3);
              return w ? new Date(Date.UTC($[1], I, $[3] || 1, $[4] || 0, $[5] || 0, $[6] || 0, N)) : new Date($[1], I, $[3] || 1, $[4] || 0, $[5] || 0, $[6] || 0, N);
            }
          }
          return new Date(C);
        }(p), this.init();
      }, b.init = function() {
        var p = this.$d;
        this.$y = p.getFullYear(), this.$M = p.getMonth(), this.$D = p.getDate(), this.$W = p.getDay(), this.$H = p.getHours(), this.$m = p.getMinutes(), this.$s = p.getSeconds(), this.$ms = p.getMilliseconds();
      }, b.$utils = function() {
        return M;
      }, b.isValid = function() {
        return this.$d.toString() !== _;
      }, b.isSame = function(p, S) {
        var C = W(p);
        return this.startOf(S) <= C && C <= this.endOf(S);
      }, b.isAfter = function(p, S) {
        return W(p) < this.startOf(S);
      }, b.isBefore = function(p, S) {
        return this.endOf(S) < W(p);
      }, b.$g = function(p, S, C) {
        return M.u(p) ? this[S] : this.set(C, p);
      }, b.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, b.valueOf = function() {
        return this.$d.getTime();
      }, b.startOf = function(p, S) {
        var C = this, w = !!M.u(S) || S, $ = M.p(p), I = function(Lt, J) {
          var vt = M.w(C.$u ? Date.UTC(C.$y, J, Lt) : new Date(C.$y, J, Lt), C);
          return w ? vt : vt.endOf(c);
        }, N = function(Lt, J) {
          return M.w(C.toDate()[Lt].apply(C.toDate("s"), (w ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(J)), C);
        }, Y = this.$W, U = this.$M, rt = this.$D, Nt = "set" + (this.$u ? "UTC" : "");
        switch ($) {
          case g:
            return w ? I(1, 0) : I(31, 11);
          case f:
            return w ? I(1, U) : I(0, U + 1);
          case u:
            var wt = this.$locale().weekStart || 0, Qt = (Y < wt ? Y + 7 : Y) - wt;
            return I(w ? rt - Qt : rt + (6 - Qt), U);
          case c:
          case y:
            return N(Nt + "Hours", 0);
          case l:
            return N(Nt + "Minutes", 1);
          case s:
            return N(Nt + "Seconds", 2);
          case a:
            return N(Nt + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, b.endOf = function(p) {
        return this.startOf(p, !1);
      }, b.$set = function(p, S) {
        var C, w = M.p(p), $ = "set" + (this.$u ? "UTC" : ""), I = (C = {}, C[c] = $ + "Date", C[y] = $ + "Date", C[f] = $ + "Month", C[g] = $ + "FullYear", C[l] = $ + "Hours", C[s] = $ + "Minutes", C[a] = $ + "Seconds", C[n] = $ + "Milliseconds", C)[w], N = w === c ? this.$D + (S - this.$W) : S;
        if (w === f || w === g) {
          var Y = this.clone().set(y, 1);
          Y.$d[I](N), Y.init(), this.$d = Y.set(y, Math.min(this.$D, Y.daysInMonth())).$d;
        } else
          I && this.$d[I](N);
        return this.init(), this;
      }, b.set = function(p, S) {
        return this.clone().$set(p, S);
      }, b.get = function(p) {
        return this[M.p(p)]();
      }, b.add = function(p, S) {
        var C, w = this;
        p = Number(p);
        var $ = M.p(S), I = function(U) {
          var rt = W(w);
          return M.w(rt.date(rt.date() + Math.round(U * p)), w);
        };
        if ($ === f)
          return this.set(f, this.$M + p);
        if ($ === g)
          return this.set(g, this.$y + p);
        if ($ === c)
          return I(1);
        if ($ === u)
          return I(7);
        var N = (C = {}, C[s] = i, C[l] = o, C[a] = r, C)[$] || 1, Y = this.$d.getTime() + p * N;
        return M.w(Y, this);
      }, b.subtract = function(p, S) {
        return this.add(-1 * p, S);
      }, b.format = function(p) {
        var S = this, C = this.$locale();
        if (!this.isValid())
          return C.invalidDate || _;
        var w = p || "YYYY-MM-DDTHH:mm:ssZ", $ = M.z(this), I = this.$H, N = this.$m, Y = this.$M, U = C.weekdays, rt = C.months, Nt = C.meridiem, wt = function(J, vt, te, xe) {
          return J && (J[vt] || J(S, w)) || te[vt].slice(0, xe);
        }, Qt = function(J) {
          return M.s(I % 12 || 12, J, "0");
        }, Lt = Nt || function(J, vt, te) {
          var xe = J < 12 ? "AM" : "PM";
          return te ? xe.toLowerCase() : xe;
        };
        return w.replace(O, function(J, vt) {
          return vt || function(te) {
            switch (te) {
              case "YY":
                return String(S.$y).slice(-2);
              case "YYYY":
                return M.s(S.$y, 4, "0");
              case "M":
                return Y + 1;
              case "MM":
                return M.s(Y + 1, 2, "0");
              case "MMM":
                return wt(C.monthsShort, Y, rt, 3);
              case "MMMM":
                return wt(rt, Y);
              case "D":
                return S.$D;
              case "DD":
                return M.s(S.$D, 2, "0");
              case "d":
                return String(S.$W);
              case "dd":
                return wt(C.weekdaysMin, S.$W, U, 2);
              case "ddd":
                return wt(C.weekdaysShort, S.$W, U, 3);
              case "dddd":
                return U[S.$W];
              case "H":
                return String(I);
              case "HH":
                return M.s(I, 2, "0");
              case "h":
                return Qt(1);
              case "hh":
                return Qt(2);
              case "a":
                return Lt(I, N, !0);
              case "A":
                return Lt(I, N, !1);
              case "m":
                return String(N);
              case "mm":
                return M.s(N, 2, "0");
              case "s":
                return String(S.$s);
              case "ss":
                return M.s(S.$s, 2, "0");
              case "SSS":
                return M.s(S.$ms, 3, "0");
              case "Z":
                return $;
            }
            return null;
          }(J) || $.replace(":", "");
        });
      }, b.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, b.diff = function(p, S, C) {
        var w, $ = this, I = M.p(S), N = W(p), Y = (N.utcOffset() - this.utcOffset()) * i, U = this - N, rt = function() {
          return M.m($, N);
        };
        switch (I) {
          case g:
            w = rt() / 12;
            break;
          case f:
            w = rt();
            break;
          case h:
            w = rt() / 3;
            break;
          case u:
            w = (U - Y) / 6048e5;
            break;
          case c:
            w = (U - Y) / 864e5;
            break;
          case l:
            w = U / o;
            break;
          case s:
            w = U / i;
            break;
          case a:
            w = U / r;
            break;
          default:
            w = U;
        }
        return C ? w : M.a(w);
      }, b.daysInMonth = function() {
        return this.endOf(f).$D;
      }, b.$locale = function() {
        return R[this.$L];
      }, b.locale = function(p, S) {
        if (!p)
          return this.$L;
        var C = this.clone(), w = Pt(p, S, !0);
        return w && (C.$L = w), C;
      }, b.clone = function() {
        return M.w(this.$d, this);
      }, b.toDate = function() {
        return new Date(this.valueOf());
      }, b.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, b.toISOString = function() {
        return this.$d.toISOString();
      }, b.toString = function() {
        return this.$d.toUTCString();
      }, A;
    }(), be = Ft.prototype;
    return W.prototype = be, [["$ms", n], ["$s", a], ["$m", s], ["$H", l], ["$W", c], ["$M", f], ["$y", g], ["$D", y]].forEach(function(A) {
      be[A[1]] = function(b) {
        return this.$g(b, A[0], A[1]);
      };
    }), W.extend = function(A, b) {
      return A.$i || (A(b, Ft, W), A.$i = !0), W;
    }, W.locale = Pt, W.isDayjs = zt, W.unix = function(A) {
      return W(1e3 * A);
    }, W.en = R[P], W.Ls = R, W.p = {}, W;
  });
})(Ki);
var va = Ki.exports;
const Ta = /* @__PURE__ */ Gn(va);
var Zi = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.sanitizeUrl = t.BLANK_URL = void 0;
  var e = /^([^\w]*)(javascript|data|vbscript)/im, r = /&#(\w+)(^\w|;)?/g, i = /&(newline|tab);/gi, o = /[\u0000-\u001F\u007F-\u009F\u2000-\u200D\uFEFF]/gim, n = /^.+(:|&colon;)/gim, a = [".", "/"];
  t.BLANK_URL = "about:blank";
  function s(u) {
    return a.indexOf(u[0]) > -1;
  }
  function l(u) {
    var f = u.replace(o, "");
    return f.replace(r, function(h, g) {
      return String.fromCharCode(g);
    });
  }
  function c(u) {
    if (!u)
      return t.BLANK_URL;
    var f = l(u).replace(i, "").replace(o, "").trim();
    if (!f)
      return t.BLANK_URL;
    if (s(f))
      return f;
    var h = f.match(n);
    if (!h)
      return f;
    var g = h[0];
    return e.test(g) ? t.BLANK_URL : f;
  }
  t.sanitizeUrl = c;
})(Zi);
var br = "http://www.w3.org/1999/xhtml";
const hi = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: br,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function Xe(t) {
  var e = t += "", r = e.indexOf(":");
  return r >= 0 && (e = t.slice(0, r)) !== "xmlns" && (t = t.slice(r + 1)), hi.hasOwnProperty(e) ? { space: hi[e], local: t } : t;
}
function ka(t) {
  return function() {
    var e = this.ownerDocument, r = this.namespaceURI;
    return r === br && e.documentElement.namespaceURI === br ? e.createElement(t) : e.createElementNS(r, t);
  };
}
function Sa(t) {
  return function() {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function Ji(t) {
  var e = Xe(t);
  return (e.local ? Sa : ka)(e);
}
function Ba() {
}
function Ir(t) {
  return t == null ? Ba : function() {
    return this.querySelector(t);
  };
}
function Fa(t) {
  typeof t != "function" && (t = Ir(t));
  for (var e = this._groups, r = e.length, i = new Array(r), o = 0; o < r; ++o)
    for (var n = e[o], a = n.length, s = i[o] = new Array(a), l, c, u = 0; u < a; ++u)
      (l = n[u]) && (c = t.call(l, l.__data__, u, n)) && ("__data__" in l && (c.__data__ = l.__data__), s[u] = c);
  return new et(i, this._parents);
}
function wa(t) {
  return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
}
function La() {
  return [];
}
function Qi(t) {
  return t == null ? La : function() {
    return this.querySelectorAll(t);
  };
}
function Aa(t) {
  return function() {
    return wa(t.apply(this, arguments));
  };
}
function $a(t) {
  typeof t == "function" ? t = Aa(t) : t = Qi(t);
  for (var e = this._groups, r = e.length, i = [], o = [], n = 0; n < r; ++n)
    for (var a = e[n], s = a.length, l, c = 0; c < s; ++c)
      (l = a[c]) && (i.push(t.call(l, l.__data__, c, a)), o.push(l));
  return new et(i, o);
}
function to(t) {
  return function() {
    return this.matches(t);
  };
}
function eo(t) {
  return function(e) {
    return e.matches(t);
  };
}
var Oa = Array.prototype.find;
function Ea(t) {
  return function() {
    return Oa.call(this.children, t);
  };
}
function Ma() {
  return this.firstElementChild;
}
function Ia(t) {
  return this.select(t == null ? Ma : Ea(typeof t == "function" ? t : eo(t)));
}
var qa = Array.prototype.filter;
function Da() {
  return Array.from(this.children);
}
function za(t) {
  return function() {
    return qa.call(this.children, t);
  };
}
function Pa(t) {
  return this.selectAll(t == null ? Da : za(typeof t == "function" ? t : eo(t)));
}
function Na(t) {
  typeof t != "function" && (t = to(t));
  for (var e = this._groups, r = e.length, i = new Array(r), o = 0; o < r; ++o)
    for (var n = e[o], a = n.length, s = i[o] = [], l, c = 0; c < a; ++c)
      (l = n[c]) && t.call(l, l.__data__, c, n) && s.push(l);
  return new et(i, this._parents);
}
function ro(t) {
  return new Array(t.length);
}
function Ra() {
  return new et(this._enter || this._groups.map(ro), this._parents);
}
function Ie(t, e) {
  this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = e;
}
Ie.prototype = {
  constructor: Ie,
  appendChild: function(t) {
    return this._parent.insertBefore(t, this._next);
  },
  insertBefore: function(t, e) {
    return this._parent.insertBefore(t, e);
  },
  querySelector: function(t) {
    return this._parent.querySelector(t);
  },
  querySelectorAll: function(t) {
    return this._parent.querySelectorAll(t);
  }
};
function Wa(t) {
  return function() {
    return t;
  };
}
function ja(t, e, r, i, o, n) {
  for (var a = 0, s, l = e.length, c = n.length; a < c; ++a)
    (s = e[a]) ? (s.__data__ = n[a], i[a] = s) : r[a] = new Ie(t, n[a]);
  for (; a < l; ++a)
    (s = e[a]) && (o[a] = s);
}
function Ha(t, e, r, i, o, n, a) {
  var s, l, c = /* @__PURE__ */ new Map(), u = e.length, f = n.length, h = new Array(u), g;
  for (s = 0; s < u; ++s)
    (l = e[s]) && (h[s] = g = a.call(l, l.__data__, s, e) + "", c.has(g) ? o[s] = l : c.set(g, l));
  for (s = 0; s < f; ++s)
    g = a.call(t, n[s], s, n) + "", (l = c.get(g)) ? (i[s] = l, l.__data__ = n[s], c.delete(g)) : r[s] = new Ie(t, n[s]);
  for (s = 0; s < u; ++s)
    (l = e[s]) && c.get(h[s]) === l && (o[s] = l);
}
function Ya(t) {
  return t.__data__;
}
function Ua(t, e) {
  if (!arguments.length)
    return Array.from(this, Ya);
  var r = e ? Ha : ja, i = this._parents, o = this._groups;
  typeof t != "function" && (t = Wa(t));
  for (var n = o.length, a = new Array(n), s = new Array(n), l = new Array(n), c = 0; c < n; ++c) {
    var u = i[c], f = o[c], h = f.length, g = Va(t.call(u, u && u.__data__, c, i)), y = g.length, _ = s[c] = new Array(y), k = a[c] = new Array(y), O = l[c] = new Array(h);
    r(u, f, _, k, O, g, e);
    for (var x = 0, z = 0, q, P; x < y; ++x)
      if (q = _[x]) {
        for (x >= z && (z = x + 1); !(P = k[z]) && ++z < y; )
          ;
        q._next = P || null;
      }
  }
  return a = new et(a, i), a._enter = s, a._exit = l, a;
}
function Va(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function Ga() {
  return new et(this._exit || this._groups.map(ro), this._parents);
}
function Xa(t, e, r) {
  var i = this.enter(), o = this, n = this.exit();
  return typeof t == "function" ? (i = t(i), i && (i = i.selection())) : i = i.append(t + ""), e != null && (o = e(o), o && (o = o.selection())), r == null ? n.remove() : r(n), i && o ? i.merge(o).order() : o;
}
function Ka(t) {
  for (var e = t.selection ? t.selection() : t, r = this._groups, i = e._groups, o = r.length, n = i.length, a = Math.min(o, n), s = new Array(o), l = 0; l < a; ++l)
    for (var c = r[l], u = i[l], f = c.length, h = s[l] = new Array(f), g, y = 0; y < f; ++y)
      (g = c[y] || u[y]) && (h[y] = g);
  for (; l < o; ++l)
    s[l] = r[l];
  return new et(s, this._parents);
}
function Za() {
  for (var t = this._groups, e = -1, r = t.length; ++e < r; )
    for (var i = t[e], o = i.length - 1, n = i[o], a; --o >= 0; )
      (a = i[o]) && (n && a.compareDocumentPosition(n) ^ 4 && n.parentNode.insertBefore(a, n), n = a);
  return this;
}
function Ja(t) {
  t || (t = Qa);
  function e(f, h) {
    return f && h ? t(f.__data__, h.__data__) : !f - !h;
  }
  for (var r = this._groups, i = r.length, o = new Array(i), n = 0; n < i; ++n) {
    for (var a = r[n], s = a.length, l = o[n] = new Array(s), c, u = 0; u < s; ++u)
      (c = a[u]) && (l[u] = c);
    l.sort(e);
  }
  return new et(o, this._parents).order();
}
function Qa(t, e) {
  return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function ts() {
  var t = arguments[0];
  return arguments[0] = this, t.apply(null, arguments), this;
}
function es() {
  return Array.from(this);
}
function rs() {
  for (var t = this._groups, e = 0, r = t.length; e < r; ++e)
    for (var i = t[e], o = 0, n = i.length; o < n; ++o) {
      var a = i[o];
      if (a)
        return a;
    }
  return null;
}
function is() {
  let t = 0;
  for (const e of this)
    ++t;
  return t;
}
function os() {
  return !this.node();
}
function ns(t) {
  for (var e = this._groups, r = 0, i = e.length; r < i; ++r)
    for (var o = e[r], n = 0, a = o.length, s; n < a; ++n)
      (s = o[n]) && t.call(s, s.__data__, n, o);
  return this;
}
function as(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function ss(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function ls(t, e) {
  return function() {
    this.setAttribute(t, e);
  };
}
function hs(t, e) {
  return function() {
    this.setAttributeNS(t.space, t.local, e);
  };
}
function cs(t, e) {
  return function() {
    var r = e.apply(this, arguments);
    r == null ? this.removeAttribute(t) : this.setAttribute(t, r);
  };
}
function us(t, e) {
  return function() {
    var r = e.apply(this, arguments);
    r == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, r);
  };
}
function ds(t, e) {
  var r = Xe(t);
  if (arguments.length < 2) {
    var i = this.node();
    return r.local ? i.getAttributeNS(r.space, r.local) : i.getAttribute(r);
  }
  return this.each((e == null ? r.local ? ss : as : typeof e == "function" ? r.local ? us : cs : r.local ? hs : ls)(r, e));
}
function io(t) {
  return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
}
function fs(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function gs(t, e, r) {
  return function() {
    this.style.setProperty(t, e, r);
  };
}
function ps(t, e, r) {
  return function() {
    var i = e.apply(this, arguments);
    i == null ? this.style.removeProperty(t) : this.style.setProperty(t, i, r);
  };
}
function ms(t, e, r) {
  return arguments.length > 1 ? this.each((e == null ? fs : typeof e == "function" ? ps : gs)(t, e, r ?? "")) : Ht(this.node(), t);
}
function Ht(t, e) {
  return t.style.getPropertyValue(e) || io(t).getComputedStyle(t, null).getPropertyValue(e);
}
function Cs(t) {
  return function() {
    delete this[t];
  };
}
function ys(t, e) {
  return function() {
    this[t] = e;
  };
}
function bs(t, e) {
  return function() {
    var r = e.apply(this, arguments);
    r == null ? delete this[t] : this[t] = r;
  };
}
function xs(t, e) {
  return arguments.length > 1 ? this.each((e == null ? Cs : typeof e == "function" ? bs : ys)(t, e)) : this.node()[t];
}
function oo(t) {
  return t.trim().split(/^|\s+/);
}
function qr(t) {
  return t.classList || new no(t);
}
function no(t) {
  this._node = t, this._names = oo(t.getAttribute("class") || "");
}
no.prototype = {
  add: function(t) {
    var e = this._names.indexOf(t);
    e < 0 && (this._names.push(t), this._node.setAttribute("class", this._names.join(" ")));
  },
  remove: function(t) {
    var e = this._names.indexOf(t);
    e >= 0 && (this._names.splice(e, 1), this._node.setAttribute("class", this._names.join(" ")));
  },
  contains: function(t) {
    return this._names.indexOf(t) >= 0;
  }
};
function ao(t, e) {
  for (var r = qr(t), i = -1, o = e.length; ++i < o; )
    r.add(e[i]);
}
function so(t, e) {
  for (var r = qr(t), i = -1, o = e.length; ++i < o; )
    r.remove(e[i]);
}
function _s(t) {
  return function() {
    ao(this, t);
  };
}
function vs(t) {
  return function() {
    so(this, t);
  };
}
function Ts(t, e) {
  return function() {
    (e.apply(this, arguments) ? ao : so)(this, t);
  };
}
function ks(t, e) {
  var r = oo(t + "");
  if (arguments.length < 2) {
    for (var i = qr(this.node()), o = -1, n = r.length; ++o < n; )
      if (!i.contains(r[o]))
        return !1;
    return !0;
  }
  return this.each((typeof e == "function" ? Ts : e ? _s : vs)(r, e));
}
function Ss() {
  this.textContent = "";
}
function Bs(t) {
  return function() {
    this.textContent = t;
  };
}
function Fs(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.textContent = e ?? "";
  };
}
function ws(t) {
  return arguments.length ? this.each(t == null ? Ss : (typeof t == "function" ? Fs : Bs)(t)) : this.node().textContent;
}
function Ls() {
  this.innerHTML = "";
}
function As(t) {
  return function() {
    this.innerHTML = t;
  };
}
function $s(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.innerHTML = e ?? "";
  };
}
function Os(t) {
  return arguments.length ? this.each(t == null ? Ls : (typeof t == "function" ? $s : As)(t)) : this.node().innerHTML;
}
function Es() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function Ms() {
  return this.each(Es);
}
function Is() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function qs() {
  return this.each(Is);
}
function Ds(t) {
  var e = typeof t == "function" ? t : Ji(t);
  return this.select(function() {
    return this.appendChild(e.apply(this, arguments));
  });
}
function zs() {
  return null;
}
function Ps(t, e) {
  var r = typeof t == "function" ? t : Ji(t), i = e == null ? zs : typeof e == "function" ? e : Ir(e);
  return this.select(function() {
    return this.insertBefore(r.apply(this, arguments), i.apply(this, arguments) || null);
  });
}
function Ns() {
  var t = this.parentNode;
  t && t.removeChild(this);
}
function Rs() {
  return this.each(Ns);
}
function Ws() {
  var t = this.cloneNode(!1), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function js() {
  var t = this.cloneNode(!0), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function Hs(t) {
  return this.select(t ? js : Ws);
}
function Ys(t) {
  return arguments.length ? this.property("__data__", t) : this.node().__data__;
}
function Us(t) {
  return function(e) {
    t.call(this, e, this.__data__);
  };
}
function Vs(t) {
  return t.trim().split(/^|\s+/).map(function(e) {
    var r = "", i = e.indexOf(".");
    return i >= 0 && (r = e.slice(i + 1), e = e.slice(0, i)), { type: e, name: r };
  });
}
function Gs(t) {
  return function() {
    var e = this.__on;
    if (e) {
      for (var r = 0, i = -1, o = e.length, n; r < o; ++r)
        n = e[r], (!t.type || n.type === t.type) && n.name === t.name ? this.removeEventListener(n.type, n.listener, n.options) : e[++i] = n;
      ++i ? e.length = i : delete this.__on;
    }
  };
}
function Xs(t, e, r) {
  return function() {
    var i = this.__on, o, n = Us(e);
    if (i) {
      for (var a = 0, s = i.length; a < s; ++a)
        if ((o = i[a]).type === t.type && o.name === t.name) {
          this.removeEventListener(o.type, o.listener, o.options), this.addEventListener(o.type, o.listener = n, o.options = r), o.value = e;
          return;
        }
    }
    this.addEventListener(t.type, n, r), o = { type: t.type, name: t.name, value: e, listener: n, options: r }, i ? i.push(o) : this.__on = [o];
  };
}
function Ks(t, e, r) {
  var i = Vs(t + ""), o, n = i.length, a;
  if (arguments.length < 2) {
    var s = this.node().__on;
    if (s) {
      for (var l = 0, c = s.length, u; l < c; ++l)
        for (o = 0, u = s[l]; o < n; ++o)
          if ((a = i[o]).type === u.type && a.name === u.name)
            return u.value;
    }
    return;
  }
  for (s = e ? Xs : Gs, o = 0; o < n; ++o)
    this.each(s(i[o], e, r));
  return this;
}
function lo(t, e, r) {
  var i = io(t), o = i.CustomEvent;
  typeof o == "function" ? o = new o(e, r) : (o = i.document.createEvent("Event"), r ? (o.initEvent(e, r.bubbles, r.cancelable), o.detail = r.detail) : o.initEvent(e, !1, !1)), t.dispatchEvent(o);
}
function Zs(t, e) {
  return function() {
    return lo(this, t, e);
  };
}
function Js(t, e) {
  return function() {
    return lo(this, t, e.apply(this, arguments));
  };
}
function Qs(t, e) {
  return this.each((typeof e == "function" ? Js : Zs)(t, e));
}
function* tl() {
  for (var t = this._groups, e = 0, r = t.length; e < r; ++e)
    for (var i = t[e], o = 0, n = i.length, a; o < n; ++o)
      (a = i[o]) && (yield a);
}
var ho = [null];
function et(t, e) {
  this._groups = t, this._parents = e;
}
function pe() {
  return new et([[document.documentElement]], ho);
}
function el() {
  return this;
}
et.prototype = pe.prototype = {
  constructor: et,
  select: Fa,
  selectAll: $a,
  selectChild: Ia,
  selectChildren: Pa,
  filter: Na,
  data: Ua,
  enter: Ra,
  exit: Ga,
  join: Xa,
  merge: Ka,
  selection: el,
  order: Za,
  sort: Ja,
  call: ts,
  nodes: es,
  node: rs,
  size: is,
  empty: os,
  each: ns,
  attr: ds,
  style: ms,
  property: xs,
  classed: ks,
  text: ws,
  html: Os,
  raise: Ms,
  lower: qs,
  append: Ds,
  insert: Ps,
  remove: Rs,
  clone: Hs,
  datum: Ys,
  on: Ks,
  dispatch: Qs,
  [Symbol.iterator]: tl
};
function ot(t) {
  return typeof t == "string" ? new et([[document.querySelector(t)]], [document.documentElement]) : new et([[t]], ho);
}
function ci(t, e, r) {
  var i = new Xn();
  return e = e == null ? 0 : +e, i.restart((o) => {
    i.stop(), t(o + e);
  }, e, r), i;
}
var rl = Kn("start", "end", "cancel", "interrupt"), il = [], co = 0, ui = 1, xr = 2, Se = 3, di = 4, _r = 5, Be = 6;
function Ke(t, e, r, i, o, n) {
  var a = t.__transition;
  if (!a)
    t.__transition = {};
  else if (r in a)
    return;
  ol(t, r, {
    name: e,
    index: i,
    // For context during callback.
    group: o,
    // For context during callback.
    on: rl,
    tween: il,
    time: n.time,
    delay: n.delay,
    duration: n.duration,
    ease: n.ease,
    timer: null,
    state: co
  });
}
function Dr(t, e) {
  var r = lt(t, e);
  if (r.state > co)
    throw new Error("too late; already scheduled");
  return r;
}
function dt(t, e) {
  var r = lt(t, e);
  if (r.state > Se)
    throw new Error("too late; already running");
  return r;
}
function lt(t, e) {
  var r = t.__transition;
  if (!r || !(r = r[e]))
    throw new Error("transition not found");
  return r;
}
function ol(t, e, r) {
  var i = t.__transition, o;
  i[e] = r, r.timer = Zn(n, 0, r.time);
  function n(c) {
    r.state = ui, r.timer.restart(a, r.delay, r.time), r.delay <= c && a(c - r.delay);
  }
  function a(c) {
    var u, f, h, g;
    if (r.state !== ui)
      return l();
    for (u in i)
      if (g = i[u], g.name === r.name) {
        if (g.state === Se)
          return ci(a);
        g.state === di ? (g.state = Be, g.timer.stop(), g.on.call("interrupt", t, t.__data__, g.index, g.group), delete i[u]) : +u < e && (g.state = Be, g.timer.stop(), g.on.call("cancel", t, t.__data__, g.index, g.group), delete i[u]);
      }
    if (ci(function() {
      r.state === Se && (r.state = di, r.timer.restart(s, r.delay, r.time), s(c));
    }), r.state = xr, r.on.call("start", t, t.__data__, r.index, r.group), r.state === xr) {
      for (r.state = Se, o = new Array(h = r.tween.length), u = 0, f = -1; u < h; ++u)
        (g = r.tween[u].value.call(t, t.__data__, r.index, r.group)) && (o[++f] = g);
      o.length = f + 1;
    }
  }
  function s(c) {
    for (var u = c < r.duration ? r.ease.call(null, c / r.duration) : (r.timer.restart(l), r.state = _r, 1), f = -1, h = o.length; ++f < h; )
      o[f].call(t, u);
    r.state === _r && (r.on.call("end", t, t.__data__, r.index, r.group), l());
  }
  function l() {
    r.state = Be, r.timer.stop(), delete i[e];
    for (var c in i)
      return;
    delete t.__transition;
  }
}
function nl(t, e) {
  var r = t.__transition, i, o, n = !0, a;
  if (r) {
    e = e == null ? null : e + "";
    for (a in r) {
      if ((i = r[a]).name !== e) {
        n = !1;
        continue;
      }
      o = i.state > xr && i.state < _r, i.state = Be, i.timer.stop(), i.on.call(o ? "interrupt" : "cancel", t, t.__data__, i.index, i.group), delete r[a];
    }
    n && delete t.__transition;
  }
}
function al(t) {
  return this.each(function() {
    nl(this, t);
  });
}
function sl(t, e) {
  var r, i;
  return function() {
    var o = dt(this, t), n = o.tween;
    if (n !== r) {
      i = r = n;
      for (var a = 0, s = i.length; a < s; ++a)
        if (i[a].name === e) {
          i = i.slice(), i.splice(a, 1);
          break;
        }
    }
    o.tween = i;
  };
}
function ll(t, e, r) {
  var i, o;
  if (typeof r != "function")
    throw new Error();
  return function() {
    var n = dt(this, t), a = n.tween;
    if (a !== i) {
      o = (i = a).slice();
      for (var s = { name: e, value: r }, l = 0, c = o.length; l < c; ++l)
        if (o[l].name === e) {
          o[l] = s;
          break;
        }
      l === c && o.push(s);
    }
    n.tween = o;
  };
}
function hl(t, e) {
  var r = this._id;
  if (t += "", arguments.length < 2) {
    for (var i = lt(this.node(), r).tween, o = 0, n = i.length, a; o < n; ++o)
      if ((a = i[o]).name === t)
        return a.value;
    return null;
  }
  return this.each((e == null ? sl : ll)(r, t, e));
}
function zr(t, e, r) {
  var i = t._id;
  return t.each(function() {
    var o = dt(this, i);
    (o.value || (o.value = {}))[e] = r.apply(this, arguments);
  }), function(o) {
    return lt(o, i).value[e];
  };
}
function uo(t, e) {
  var r;
  return (typeof e == "number" ? Jn : e instanceof si ? li : (r = si(e)) ? (e = r, li) : Qn)(t, e);
}
function cl(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function ul(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function dl(t, e, r) {
  var i, o = r + "", n;
  return function() {
    var a = this.getAttribute(t);
    return a === o ? null : a === i ? n : n = e(i = a, r);
  };
}
function fl(t, e, r) {
  var i, o = r + "", n;
  return function() {
    var a = this.getAttributeNS(t.space, t.local);
    return a === o ? null : a === i ? n : n = e(i = a, r);
  };
}
function gl(t, e, r) {
  var i, o, n;
  return function() {
    var a, s = r(this), l;
    return s == null ? void this.removeAttribute(t) : (a = this.getAttribute(t), l = s + "", a === l ? null : a === i && l === o ? n : (o = l, n = e(i = a, s)));
  };
}
function pl(t, e, r) {
  var i, o, n;
  return function() {
    var a, s = r(this), l;
    return s == null ? void this.removeAttributeNS(t.space, t.local) : (a = this.getAttributeNS(t.space, t.local), l = s + "", a === l ? null : a === i && l === o ? n : (o = l, n = e(i = a, s)));
  };
}
function ml(t, e) {
  var r = Xe(t), i = r === "transform" ? ta : uo;
  return this.attrTween(t, typeof e == "function" ? (r.local ? pl : gl)(r, i, zr(this, "attr." + t, e)) : e == null ? (r.local ? ul : cl)(r) : (r.local ? fl : dl)(r, i, e));
}
function Cl(t, e) {
  return function(r) {
    this.setAttribute(t, e.call(this, r));
  };
}
function yl(t, e) {
  return function(r) {
    this.setAttributeNS(t.space, t.local, e.call(this, r));
  };
}
function bl(t, e) {
  var r, i;
  function o() {
    var n = e.apply(this, arguments);
    return n !== i && (r = (i = n) && yl(t, n)), r;
  }
  return o._value = e, o;
}
function xl(t, e) {
  var r, i;
  function o() {
    var n = e.apply(this, arguments);
    return n !== i && (r = (i = n) && Cl(t, n)), r;
  }
  return o._value = e, o;
}
function _l(t, e) {
  var r = "attr." + t;
  if (arguments.length < 2)
    return (r = this.tween(r)) && r._value;
  if (e == null)
    return this.tween(r, null);
  if (typeof e != "function")
    throw new Error();
  var i = Xe(t);
  return this.tween(r, (i.local ? bl : xl)(i, e));
}
function vl(t, e) {
  return function() {
    Dr(this, t).delay = +e.apply(this, arguments);
  };
}
function Tl(t, e) {
  return e = +e, function() {
    Dr(this, t).delay = e;
  };
}
function kl(t) {
  var e = this._id;
  return arguments.length ? this.each((typeof t == "function" ? vl : Tl)(e, t)) : lt(this.node(), e).delay;
}
function Sl(t, e) {
  return function() {
    dt(this, t).duration = +e.apply(this, arguments);
  };
}
function Bl(t, e) {
  return e = +e, function() {
    dt(this, t).duration = e;
  };
}
function Fl(t) {
  var e = this._id;
  return arguments.length ? this.each((typeof t == "function" ? Sl : Bl)(e, t)) : lt(this.node(), e).duration;
}
function wl(t, e) {
  if (typeof e != "function")
    throw new Error();
  return function() {
    dt(this, t).ease = e;
  };
}
function Ll(t) {
  var e = this._id;
  return arguments.length ? this.each(wl(e, t)) : lt(this.node(), e).ease;
}
function Al(t, e) {
  return function() {
    var r = e.apply(this, arguments);
    if (typeof r != "function")
      throw new Error();
    dt(this, t).ease = r;
  };
}
function $l(t) {
  if (typeof t != "function")
    throw new Error();
  return this.each(Al(this._id, t));
}
function Ol(t) {
  typeof t != "function" && (t = to(t));
  for (var e = this._groups, r = e.length, i = new Array(r), o = 0; o < r; ++o)
    for (var n = e[o], a = n.length, s = i[o] = [], l, c = 0; c < a; ++c)
      (l = n[c]) && t.call(l, l.__data__, c, n) && s.push(l);
  return new xt(i, this._parents, this._name, this._id);
}
function El(t) {
  if (t._id !== this._id)
    throw new Error();
  for (var e = this._groups, r = t._groups, i = e.length, o = r.length, n = Math.min(i, o), a = new Array(i), s = 0; s < n; ++s)
    for (var l = e[s], c = r[s], u = l.length, f = a[s] = new Array(u), h, g = 0; g < u; ++g)
      (h = l[g] || c[g]) && (f[g] = h);
  for (; s < i; ++s)
    a[s] = e[s];
  return new xt(a, this._parents, this._name, this._id);
}
function Ml(t) {
  return (t + "").trim().split(/^|\s+/).every(function(e) {
    var r = e.indexOf(".");
    return r >= 0 && (e = e.slice(0, r)), !e || e === "start";
  });
}
function Il(t, e, r) {
  var i, o, n = Ml(e) ? Dr : dt;
  return function() {
    var a = n(this, t), s = a.on;
    s !== i && (o = (i = s).copy()).on(e, r), a.on = o;
  };
}
function ql(t, e) {
  var r = this._id;
  return arguments.length < 2 ? lt(this.node(), r).on.on(t) : this.each(Il(r, t, e));
}
function Dl(t) {
  return function() {
    var e = this.parentNode;
    for (var r in this.__transition)
      if (+r !== t)
        return;
    e && e.removeChild(this);
  };
}
function zl() {
  return this.on("end.remove", Dl(this._id));
}
function Pl(t) {
  var e = this._name, r = this._id;
  typeof t != "function" && (t = Ir(t));
  for (var i = this._groups, o = i.length, n = new Array(o), a = 0; a < o; ++a)
    for (var s = i[a], l = s.length, c = n[a] = new Array(l), u, f, h = 0; h < l; ++h)
      (u = s[h]) && (f = t.call(u, u.__data__, h, s)) && ("__data__" in u && (f.__data__ = u.__data__), c[h] = f, Ke(c[h], e, r, h, c, lt(u, r)));
  return new xt(n, this._parents, e, r);
}
function Nl(t) {
  var e = this._name, r = this._id;
  typeof t != "function" && (t = Qi(t));
  for (var i = this._groups, o = i.length, n = [], a = [], s = 0; s < o; ++s)
    for (var l = i[s], c = l.length, u, f = 0; f < c; ++f)
      if (u = l[f]) {
        for (var h = t.call(u, u.__data__, f, l), g, y = lt(u, r), _ = 0, k = h.length; _ < k; ++_)
          (g = h[_]) && Ke(g, e, r, _, h, y);
        n.push(h), a.push(u);
      }
  return new xt(n, a, e, r);
}
var Rl = pe.prototype.constructor;
function Wl() {
  return new Rl(this._groups, this._parents);
}
function jl(t, e) {
  var r, i, o;
  return function() {
    var n = Ht(this, t), a = (this.style.removeProperty(t), Ht(this, t));
    return n === a ? null : n === r && a === i ? o : o = e(r = n, i = a);
  };
}
function fo(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function Hl(t, e, r) {
  var i, o = r + "", n;
  return function() {
    var a = Ht(this, t);
    return a === o ? null : a === i ? n : n = e(i = a, r);
  };
}
function Yl(t, e, r) {
  var i, o, n;
  return function() {
    var a = Ht(this, t), s = r(this), l = s + "";
    return s == null && (l = s = (this.style.removeProperty(t), Ht(this, t))), a === l ? null : a === i && l === o ? n : (o = l, n = e(i = a, s));
  };
}
function Ul(t, e) {
  var r, i, o, n = "style." + e, a = "end." + n, s;
  return function() {
    var l = dt(this, t), c = l.on, u = l.value[n] == null ? s || (s = fo(e)) : void 0;
    (c !== r || o !== u) && (i = (r = c).copy()).on(a, o = u), l.on = i;
  };
}
function Vl(t, e, r) {
  var i = (t += "") == "transform" ? ea : uo;
  return e == null ? this.styleTween(t, jl(t, i)).on("end.style." + t, fo(t)) : typeof e == "function" ? this.styleTween(t, Yl(t, i, zr(this, "style." + t, e))).each(Ul(this._id, t)) : this.styleTween(t, Hl(t, i, e), r).on("end.style." + t, null);
}
function Gl(t, e, r) {
  return function(i) {
    this.style.setProperty(t, e.call(this, i), r);
  };
}
function Xl(t, e, r) {
  var i, o;
  function n() {
    var a = e.apply(this, arguments);
    return a !== o && (i = (o = a) && Gl(t, a, r)), i;
  }
  return n._value = e, n;
}
function Kl(t, e, r) {
  var i = "style." + (t += "");
  if (arguments.length < 2)
    return (i = this.tween(i)) && i._value;
  if (e == null)
    return this.tween(i, null);
  if (typeof e != "function")
    throw new Error();
  return this.tween(i, Xl(t, e, r ?? ""));
}
function Zl(t) {
  return function() {
    this.textContent = t;
  };
}
function Jl(t) {
  return function() {
    var e = t(this);
    this.textContent = e ?? "";
  };
}
function Ql(t) {
  return this.tween("text", typeof t == "function" ? Jl(zr(this, "text", t)) : Zl(t == null ? "" : t + ""));
}
function th(t) {
  return function(e) {
    this.textContent = t.call(this, e);
  };
}
function eh(t) {
  var e, r;
  function i() {
    var o = t.apply(this, arguments);
    return o !== r && (e = (r = o) && th(o)), e;
  }
  return i._value = t, i;
}
function rh(t) {
  var e = "text";
  if (arguments.length < 1)
    return (e = this.tween(e)) && e._value;
  if (t == null)
    return this.tween(e, null);
  if (typeof t != "function")
    throw new Error();
  return this.tween(e, eh(t));
}
function ih() {
  for (var t = this._name, e = this._id, r = go(), i = this._groups, o = i.length, n = 0; n < o; ++n)
    for (var a = i[n], s = a.length, l, c = 0; c < s; ++c)
      if (l = a[c]) {
        var u = lt(l, e);
        Ke(l, t, r, c, a, {
          time: u.time + u.delay + u.duration,
          delay: 0,
          duration: u.duration,
          ease: u.ease
        });
      }
  return new xt(i, this._parents, t, r);
}
function oh() {
  var t, e, r = this, i = r._id, o = r.size();
  return new Promise(function(n, a) {
    var s = { value: a }, l = { value: function() {
      --o === 0 && n();
    } };
    r.each(function() {
      var c = dt(this, i), u = c.on;
      u !== t && (e = (t = u).copy(), e._.cancel.push(s), e._.interrupt.push(s), e._.end.push(l)), c.on = e;
    }), o === 0 && n();
  });
}
var nh = 0;
function xt(t, e, r, i) {
  this._groups = t, this._parents = e, this._name = r, this._id = i;
}
function go() {
  return ++nh;
}
var gt = pe.prototype;
xt.prototype = {
  constructor: xt,
  select: Pl,
  selectAll: Nl,
  selectChild: gt.selectChild,
  selectChildren: gt.selectChildren,
  filter: Ol,
  merge: El,
  selection: Wl,
  transition: ih,
  call: gt.call,
  nodes: gt.nodes,
  node: gt.node,
  size: gt.size,
  empty: gt.empty,
  each: gt.each,
  on: ql,
  attr: ml,
  attrTween: _l,
  style: Vl,
  styleTween: Kl,
  text: Ql,
  textTween: rh,
  remove: zl,
  tween: hl,
  delay: kl,
  duration: Fl,
  ease: Ll,
  easeVarying: $l,
  end: oh,
  [Symbol.iterator]: gt[Symbol.iterator]
};
function ah(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
var sh = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: ah
};
function lh(t, e) {
  for (var r; !(r = t.__transition) || !(r = r[e]); )
    if (!(t = t.parentNode))
      throw new Error(`transition ${e} not found`);
  return r;
}
function hh(t) {
  var e, r;
  t instanceof xt ? (e = t._id, t = t._name) : (e = go(), (r = sh).time = ra(), t = t == null ? null : t + "");
  for (var i = this._groups, o = i.length, n = 0; n < o; ++n)
    for (var a = i[n], s = a.length, l, c = 0; c < s; ++c)
      (l = a[c]) && Ke(l, t, e, c, a, r || lh(l, e));
  return new xt(i, this._parents, t, e);
}
pe.prototype.interrupt = al;
pe.prototype.transition = hh;
class po {
  constructor(e, r) {
    this._context = e, this._x = r;
  }
  areaStart() {
    this._line = 0;
  }
  areaEnd() {
    this._line = NaN;
  }
  lineStart() {
    this._point = 0;
  }
  lineEnd() {
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  }
  point(e, r) {
    switch (e = +e, r = +r, this._point) {
      case 0: {
        this._point = 1, this._line ? this._context.lineTo(e, r) : this._context.moveTo(e, r);
        break;
      }
      case 1:
        this._point = 2;
      default: {
        this._x ? this._context.bezierCurveTo(this._x0 = (this._x0 + e) / 2, this._y0, this._x0, r, e, r) : this._context.bezierCurveTo(this._x0, this._y0 = (this._y0 + r) / 2, e, this._y0, e, r);
        break;
      }
    }
    this._x0 = e, this._y0 = r;
  }
}
function ch(t) {
  return new po(t, !0);
}
function uh(t) {
  return new po(t, !1);
}
function re(t, e, r) {
  this.k = t, this.x = e, this.y = r;
}
re.prototype = {
  constructor: re,
  scale: function(t) {
    return t === 1 ? this : new re(this.k * t, this.x, this.y);
  },
  translate: function(t, e) {
    return t === 0 & e === 0 ? this : new re(this.k, this.x + this.k * t, this.y + this.k * e);
  },
  apply: function(t) {
    return [t[0] * this.k + this.x, t[1] * this.k + this.y];
  },
  applyX: function(t) {
    return t * this.k + this.x;
  },
  applyY: function(t) {
    return t * this.k + this.y;
  },
  invert: function(t) {
    return [(t[0] - this.x) / this.k, (t[1] - this.y) / this.k];
  },
  invertX: function(t) {
    return (t - this.x) / this.k;
  },
  invertY: function(t) {
    return (t - this.y) / this.k;
  },
  rescaleX: function(t) {
    return t.copy().domain(t.range().map(this.invertX, this).map(t.invert, t));
  },
  rescaleY: function(t) {
    return t.copy().domain(t.range().map(this.invertY, this).map(t.invert, t));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};
re.prototype;
const Fe = {
  /* CLAMP */
  min: {
    r: 0,
    g: 0,
    b: 0,
    s: 0,
    l: 0,
    a: 0
  },
  max: {
    r: 255,
    g: 255,
    b: 255,
    h: 360,
    s: 100,
    l: 100,
    a: 1
  },
  clamp: {
    r: (t) => t >= 255 ? 255 : t < 0 ? 0 : t,
    g: (t) => t >= 255 ? 255 : t < 0 ? 0 : t,
    b: (t) => t >= 255 ? 255 : t < 0 ? 0 : t,
    h: (t) => t % 360,
    s: (t) => t >= 100 ? 100 : t < 0 ? 0 : t,
    l: (t) => t >= 100 ? 100 : t < 0 ? 0 : t,
    a: (t) => t >= 1 ? 1 : t < 0 ? 0 : t
  },
  /* CONVERSION */
  //SOURCE: https://planetcalc.com/7779
  toLinear: (t) => {
    const e = t / 255;
    return t > 0.03928 ? Math.pow((e + 0.055) / 1.055, 2.4) : e / 12.92;
  },
  //SOURCE: https://gist.github.com/mjackson/5311256
  hue2rgb: (t, e, r) => (r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? t + (e - t) * 6 * r : r < 1 / 2 ? e : r < 2 / 3 ? t + (e - t) * (2 / 3 - r) * 6 : t),
  hsl2rgb: ({ h: t, s: e, l: r }, i) => {
    if (!e)
      return r * 2.55;
    t /= 360, e /= 100, r /= 100;
    const o = r < 0.5 ? r * (1 + e) : r + e - r * e, n = 2 * r - o;
    switch (i) {
      case "r":
        return Fe.hue2rgb(n, o, t + 1 / 3) * 255;
      case "g":
        return Fe.hue2rgb(n, o, t) * 255;
      case "b":
        return Fe.hue2rgb(n, o, t - 1 / 3) * 255;
    }
  },
  rgb2hsl: ({ r: t, g: e, b: r }, i) => {
    t /= 255, e /= 255, r /= 255;
    const o = Math.max(t, e, r), n = Math.min(t, e, r), a = (o + n) / 2;
    if (i === "l")
      return a * 100;
    if (o === n)
      return 0;
    const s = o - n, l = a > 0.5 ? s / (2 - o - n) : s / (o + n);
    if (i === "s")
      return l * 100;
    switch (o) {
      case t:
        return ((e - r) / s + (e < r ? 6 : 0)) * 60;
      case e:
        return ((r - t) / s + 2) * 60;
      case r:
        return ((t - e) / s + 4) * 60;
      default:
        return -1;
    }
  }
}, dh = Fe, fh = {
  /* API */
  clamp: (t, e, r) => e > r ? Math.min(e, Math.max(r, t)) : Math.min(r, Math.max(e, t)),
  round: (t) => Math.round(t * 1e10) / 1e10
}, gh = fh, ph = {
  /* API */
  dec2hex: (t) => {
    const e = Math.round(t).toString(16);
    return e.length > 1 ? e : `0${e}`;
  }
}, mh = ph, Ch = {
  channel: dh,
  lang: gh,
  unit: mh
}, L = Ch, Tt = {};
for (let t = 0; t <= 255; t++)
  Tt[t] = L.unit.dec2hex(t);
const V = {
  ALL: 0,
  RGB: 1,
  HSL: 2
};
class yh {
  constructor() {
    this.type = V.ALL;
  }
  /* API */
  get() {
    return this.type;
  }
  set(e) {
    if (this.type && this.type !== e)
      throw new Error("Cannot change both RGB and HSL channels at the same time");
    this.type = e;
  }
  reset() {
    this.type = V.ALL;
  }
  is(e) {
    return this.type === e;
  }
}
const bh = yh;
class xh {
  /* CONSTRUCTOR */
  constructor(e, r) {
    this.color = r, this.changed = !1, this.data = e, this.type = new bh();
  }
  /* API */
  set(e, r) {
    return this.color = r, this.changed = !1, this.data = e, this.type.type = V.ALL, this;
  }
  /* HELPERS */
  _ensureHSL() {
    const e = this.data, { h: r, s: i, l: o } = e;
    r === void 0 && (e.h = L.channel.rgb2hsl(e, "h")), i === void 0 && (e.s = L.channel.rgb2hsl(e, "s")), o === void 0 && (e.l = L.channel.rgb2hsl(e, "l"));
  }
  _ensureRGB() {
    const e = this.data, { r, g: i, b: o } = e;
    r === void 0 && (e.r = L.channel.hsl2rgb(e, "r")), i === void 0 && (e.g = L.channel.hsl2rgb(e, "g")), o === void 0 && (e.b = L.channel.hsl2rgb(e, "b"));
  }
  /* GETTERS */
  get r() {
    const e = this.data, r = e.r;
    return !this.type.is(V.HSL) && r !== void 0 ? r : (this._ensureHSL(), L.channel.hsl2rgb(e, "r"));
  }
  get g() {
    const e = this.data, r = e.g;
    return !this.type.is(V.HSL) && r !== void 0 ? r : (this._ensureHSL(), L.channel.hsl2rgb(e, "g"));
  }
  get b() {
    const e = this.data, r = e.b;
    return !this.type.is(V.HSL) && r !== void 0 ? r : (this._ensureHSL(), L.channel.hsl2rgb(e, "b"));
  }
  get h() {
    const e = this.data, r = e.h;
    return !this.type.is(V.RGB) && r !== void 0 ? r : (this._ensureRGB(), L.channel.rgb2hsl(e, "h"));
  }
  get s() {
    const e = this.data, r = e.s;
    return !this.type.is(V.RGB) && r !== void 0 ? r : (this._ensureRGB(), L.channel.rgb2hsl(e, "s"));
  }
  get l() {
    const e = this.data, r = e.l;
    return !this.type.is(V.RGB) && r !== void 0 ? r : (this._ensureRGB(), L.channel.rgb2hsl(e, "l"));
  }
  get a() {
    return this.data.a;
  }
  /* SETTERS */
  set r(e) {
    this.type.set(V.RGB), this.changed = !0, this.data.r = e;
  }
  set g(e) {
    this.type.set(V.RGB), this.changed = !0, this.data.g = e;
  }
  set b(e) {
    this.type.set(V.RGB), this.changed = !0, this.data.b = e;
  }
  set h(e) {
    this.type.set(V.HSL), this.changed = !0, this.data.h = e;
  }
  set s(e) {
    this.type.set(V.HSL), this.changed = !0, this.data.s = e;
  }
  set l(e) {
    this.type.set(V.HSL), this.changed = !0, this.data.l = e;
  }
  set a(e) {
    this.changed = !0, this.data.a = e;
  }
}
const _h = xh, vh = new _h({ r: 0, g: 0, b: 0, a: 0 }, "transparent"), Ze = vh, mo = {
  /* VARIABLES */
  re: /^#((?:[a-f0-9]{2}){2,4}|[a-f0-9]{3})$/i,
  /* API */
  parse: (t) => {
    if (t.charCodeAt(0) !== 35)
      return;
    const e = t.match(mo.re);
    if (!e)
      return;
    const r = e[1], i = parseInt(r, 16), o = r.length, n = o % 4 === 0, a = o > 4, s = a ? 1 : 17, l = a ? 8 : 4, c = n ? 0 : -1, u = a ? 255 : 15;
    return Ze.set({
      r: (i >> l * (c + 3) & u) * s,
      g: (i >> l * (c + 2) & u) * s,
      b: (i >> l * (c + 1) & u) * s,
      a: n ? (i & u) * s / 255 : 1
    }, t);
  },
  stringify: (t) => {
    const { r: e, g: r, b: i, a: o } = t;
    return o < 1 ? `#${Tt[Math.round(e)]}${Tt[Math.round(r)]}${Tt[Math.round(i)]}${Tt[Math.round(o * 255)]}` : `#${Tt[Math.round(e)]}${Tt[Math.round(r)]}${Tt[Math.round(i)]}`;
  }
}, ie = mo, we = {
  /* VARIABLES */
  re: /^hsla?\(\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?(?:deg|grad|rad|turn)?)\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?%)\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?%)(?:\s*?(?:,|\/)\s*?\+?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?(%)?))?\s*?\)$/i,
  hueRe: /^(.+?)(deg|grad|rad|turn)$/i,
  /* HELPERS */
  _hue2deg: (t) => {
    const e = t.match(we.hueRe);
    if (e) {
      const [, r, i] = e;
      switch (i) {
        case "grad":
          return L.channel.clamp.h(parseFloat(r) * 0.9);
        case "rad":
          return L.channel.clamp.h(parseFloat(r) * 180 / Math.PI);
        case "turn":
          return L.channel.clamp.h(parseFloat(r) * 360);
      }
    }
    return L.channel.clamp.h(parseFloat(t));
  },
  /* API */
  parse: (t) => {
    const e = t.charCodeAt(0);
    if (e !== 104 && e !== 72)
      return;
    const r = t.match(we.re);
    if (!r)
      return;
    const [, i, o, n, a, s] = r;
    return Ze.set({
      h: we._hue2deg(i),
      s: L.channel.clamp.s(parseFloat(o)),
      l: L.channel.clamp.l(parseFloat(n)),
      a: a ? L.channel.clamp.a(s ? parseFloat(a) / 100 : parseFloat(a)) : 1
    }, t);
  },
  stringify: (t) => {
    const { h: e, s: r, l: i, a: o } = t;
    return o < 1 ? `hsla(${L.lang.round(e)}, ${L.lang.round(r)}%, ${L.lang.round(i)}%, ${o})` : `hsl(${L.lang.round(e)}, ${L.lang.round(r)}%, ${L.lang.round(i)}%)`;
  }
}, _e = we, Le = {
  /* VARIABLES */
  colors: {
    aliceblue: "#f0f8ff",
    antiquewhite: "#faebd7",
    aqua: "#00ffff",
    aquamarine: "#7fffd4",
    azure: "#f0ffff",
    beige: "#f5f5dc",
    bisque: "#ffe4c4",
    black: "#000000",
    blanchedalmond: "#ffebcd",
    blue: "#0000ff",
    blueviolet: "#8a2be2",
    brown: "#a52a2a",
    burlywood: "#deb887",
    cadetblue: "#5f9ea0",
    chartreuse: "#7fff00",
    chocolate: "#d2691e",
    coral: "#ff7f50",
    cornflowerblue: "#6495ed",
    cornsilk: "#fff8dc",
    crimson: "#dc143c",
    cyanaqua: "#00ffff",
    darkblue: "#00008b",
    darkcyan: "#008b8b",
    darkgoldenrod: "#b8860b",
    darkgray: "#a9a9a9",
    darkgreen: "#006400",
    darkgrey: "#a9a9a9",
    darkkhaki: "#bdb76b",
    darkmagenta: "#8b008b",
    darkolivegreen: "#556b2f",
    darkorange: "#ff8c00",
    darkorchid: "#9932cc",
    darkred: "#8b0000",
    darksalmon: "#e9967a",
    darkseagreen: "#8fbc8f",
    darkslateblue: "#483d8b",
    darkslategray: "#2f4f4f",
    darkslategrey: "#2f4f4f",
    darkturquoise: "#00ced1",
    darkviolet: "#9400d3",
    deeppink: "#ff1493",
    deepskyblue: "#00bfff",
    dimgray: "#696969",
    dimgrey: "#696969",
    dodgerblue: "#1e90ff",
    firebrick: "#b22222",
    floralwhite: "#fffaf0",
    forestgreen: "#228b22",
    fuchsia: "#ff00ff",
    gainsboro: "#dcdcdc",
    ghostwhite: "#f8f8ff",
    gold: "#ffd700",
    goldenrod: "#daa520",
    gray: "#808080",
    green: "#008000",
    greenyellow: "#adff2f",
    grey: "#808080",
    honeydew: "#f0fff0",
    hotpink: "#ff69b4",
    indianred: "#cd5c5c",
    indigo: "#4b0082",
    ivory: "#fffff0",
    khaki: "#f0e68c",
    lavender: "#e6e6fa",
    lavenderblush: "#fff0f5",
    lawngreen: "#7cfc00",
    lemonchiffon: "#fffacd",
    lightblue: "#add8e6",
    lightcoral: "#f08080",
    lightcyan: "#e0ffff",
    lightgoldenrodyellow: "#fafad2",
    lightgray: "#d3d3d3",
    lightgreen: "#90ee90",
    lightgrey: "#d3d3d3",
    lightpink: "#ffb6c1",
    lightsalmon: "#ffa07a",
    lightseagreen: "#20b2aa",
    lightskyblue: "#87cefa",
    lightslategray: "#778899",
    lightslategrey: "#778899",
    lightsteelblue: "#b0c4de",
    lightyellow: "#ffffe0",
    lime: "#00ff00",
    limegreen: "#32cd32",
    linen: "#faf0e6",
    magenta: "#ff00ff",
    maroon: "#800000",
    mediumaquamarine: "#66cdaa",
    mediumblue: "#0000cd",
    mediumorchid: "#ba55d3",
    mediumpurple: "#9370db",
    mediumseagreen: "#3cb371",
    mediumslateblue: "#7b68ee",
    mediumspringgreen: "#00fa9a",
    mediumturquoise: "#48d1cc",
    mediumvioletred: "#c71585",
    midnightblue: "#191970",
    mintcream: "#f5fffa",
    mistyrose: "#ffe4e1",
    moccasin: "#ffe4b5",
    navajowhite: "#ffdead",
    navy: "#000080",
    oldlace: "#fdf5e6",
    olive: "#808000",
    olivedrab: "#6b8e23",
    orange: "#ffa500",
    orangered: "#ff4500",
    orchid: "#da70d6",
    palegoldenrod: "#eee8aa",
    palegreen: "#98fb98",
    paleturquoise: "#afeeee",
    palevioletred: "#db7093",
    papayawhip: "#ffefd5",
    peachpuff: "#ffdab9",
    peru: "#cd853f",
    pink: "#ffc0cb",
    plum: "#dda0dd",
    powderblue: "#b0e0e6",
    purple: "#800080",
    rebeccapurple: "#663399",
    red: "#ff0000",
    rosybrown: "#bc8f8f",
    royalblue: "#4169e1",
    saddlebrown: "#8b4513",
    salmon: "#fa8072",
    sandybrown: "#f4a460",
    seagreen: "#2e8b57",
    seashell: "#fff5ee",
    sienna: "#a0522d",
    silver: "#c0c0c0",
    skyblue: "#87ceeb",
    slateblue: "#6a5acd",
    slategray: "#708090",
    slategrey: "#708090",
    snow: "#fffafa",
    springgreen: "#00ff7f",
    tan: "#d2b48c",
    teal: "#008080",
    thistle: "#d8bfd8",
    transparent: "#00000000",
    turquoise: "#40e0d0",
    violet: "#ee82ee",
    wheat: "#f5deb3",
    white: "#ffffff",
    whitesmoke: "#f5f5f5",
    yellow: "#ffff00",
    yellowgreen: "#9acd32"
  },
  /* API */
  parse: (t) => {
    t = t.toLowerCase();
    const e = Le.colors[t];
    if (e)
      return ie.parse(e);
  },
  stringify: (t) => {
    const e = ie.stringify(t);
    for (const r in Le.colors)
      if (Le.colors[r] === e)
        return r;
  }
}, fi = Le, Co = {
  /* VARIABLES */
  re: /^rgba?\(\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?))\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?))\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?))(?:\s*?(?:,|\/)\s*?\+?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?)))?\s*?\)$/i,
  /* API */
  parse: (t) => {
    const e = t.charCodeAt(0);
    if (e !== 114 && e !== 82)
      return;
    const r = t.match(Co.re);
    if (!r)
      return;
    const [, i, o, n, a, s, l, c, u] = r;
    return Ze.set({
      r: L.channel.clamp.r(o ? parseFloat(i) * 2.55 : parseFloat(i)),
      g: L.channel.clamp.g(a ? parseFloat(n) * 2.55 : parseFloat(n)),
      b: L.channel.clamp.b(l ? parseFloat(s) * 2.55 : parseFloat(s)),
      a: c ? L.channel.clamp.a(u ? parseFloat(c) / 100 : parseFloat(c)) : 1
    }, t);
  },
  stringify: (t) => {
    const { r: e, g: r, b: i, a: o } = t;
    return o < 1 ? `rgba(${L.lang.round(e)}, ${L.lang.round(r)}, ${L.lang.round(i)}, ${L.lang.round(o)})` : `rgb(${L.lang.round(e)}, ${L.lang.round(r)}, ${L.lang.round(i)})`;
  }
}, ve = Co, Th = {
  /* VARIABLES */
  format: {
    keyword: fi,
    hex: ie,
    rgb: ve,
    rgba: ve,
    hsl: _e,
    hsla: _e
  },
  /* API */
  parse: (t) => {
    if (typeof t != "string")
      return t;
    const e = ie.parse(t) || ve.parse(t) || _e.parse(t) || fi.parse(t);
    if (e)
      return e;
    throw new Error(`Unsupported color format: "${t}"`);
  },
  stringify: (t) => !t.changed && t.color ? t.color : t.type.is(V.HSL) || t.data.r === void 0 ? _e.stringify(t) : t.a < 1 || !Number.isInteger(t.r) || !Number.isInteger(t.g) || !Number.isInteger(t.b) ? ve.stringify(t) : ie.stringify(t)
}, ct = Th, kh = (t, e) => {
  const r = ct.parse(t);
  for (const i in e)
    r[i] = L.channel.clamp[i](e[i]);
  return ct.stringify(r);
}, yo = kh, Sh = (t, e, r = 0, i = 1) => {
  if (typeof t != "number")
    return yo(t, { a: e });
  const o = Ze.set({
    r: L.channel.clamp.r(t),
    g: L.channel.clamp.g(e),
    b: L.channel.clamp.b(r),
    a: L.channel.clamp.a(i)
  });
  return ct.stringify(o);
}, oe = Sh, Bh = (t) => {
  const { r: e, g: r, b: i } = ct.parse(t), o = 0.2126 * L.channel.toLinear(e) + 0.7152 * L.channel.toLinear(r) + 0.0722 * L.channel.toLinear(i);
  return L.lang.round(o);
}, Fh = Bh, wh = (t) => Fh(t) >= 0.5, Lh = wh, Ah = (t) => !Lh(t), me = Ah, $h = (t, e, r) => {
  const i = ct.parse(t), o = i[e], n = L.channel.clamp[e](o + r);
  return o !== n && (i[e] = n), ct.stringify(i);
}, bo = $h, Oh = (t, e) => bo(t, "l", e), v = Oh, Eh = (t, e) => bo(t, "l", -e), F = Eh, Mh = (t, e) => {
  const r = ct.parse(t), i = {};
  for (const o in e)
    e[o] && (i[o] = r[o] + e[o]);
  return yo(t, i);
}, d = Mh, Ih = (t, e, r = 50) => {
  const { r: i, g: o, b: n, a } = ct.parse(t), { r: s, g: l, b: c, a: u } = ct.parse(e), f = r / 100, h = f * 2 - 1, g = a - u, _ = ((h * g === -1 ? h : (h + g) / (1 + h * g)) + 1) / 2, k = 1 - _, O = i * _ + s * k, x = o * _ + l * k, z = n * _ + c * k, q = a * f + u * (1 - f);
  return oe(O, x, z, q);
}, qh = Ih, Dh = (t, e = 100) => {
  const r = ct.parse(t);
  return r.r = 255 - r.r, r.g = 255 - r.g, r.b = 255 - r.b, qh(r, t, e);
}, m = Dh;
var zh = typeof global == "object" && global && global.Object === Object && global;
const xo = zh;
var Ph = typeof self == "object" && self && self.Object === Object && self, Nh = xo || Ph || Function("return this")();
const ft = Nh;
var Rh = ft.Symbol;
const qe = Rh;
var _o = Object.prototype, Wh = _o.hasOwnProperty, jh = _o.toString, ee = qe ? qe.toStringTag : void 0;
function Hh(t) {
  var e = Wh.call(t, ee), r = t[ee];
  try {
    t[ee] = void 0;
    var i = !0;
  } catch {
  }
  var o = jh.call(t);
  return i && (e ? t[ee] = r : delete t[ee]), o;
}
var Yh = Object.prototype, Uh = Yh.toString;
function Vh(t) {
  return Uh.call(t);
}
var Gh = "[object Null]", Xh = "[object Undefined]", gi = qe ? qe.toStringTag : void 0;
function Kt(t) {
  return t == null ? t === void 0 ? Xh : Gh : gi && gi in Object(t) ? Hh(t) : Vh(t);
}
function It(t) {
  var e = typeof t;
  return t != null && (e == "object" || e == "function");
}
var Kh = "[object AsyncFunction]", Zh = "[object Function]", Jh = "[object GeneratorFunction]", Qh = "[object Proxy]";
function Pr(t) {
  if (!It(t))
    return !1;
  var e = Kt(t);
  return e == Zh || e == Jh || e == Kh || e == Qh;
}
var tc = ft["__core-js_shared__"];
const ur = tc;
var pi = function() {
  var t = /[^.]+$/.exec(ur && ur.keys && ur.keys.IE_PROTO || "");
  return t ? "Symbol(src)_1." + t : "";
}();
function ec(t) {
  return !!pi && pi in t;
}
var rc = Function.prototype, ic = rc.toString;
function qt(t) {
  if (t != null) {
    try {
      return ic.call(t);
    } catch {
    }
    try {
      return t + "";
    } catch {
    }
  }
  return "";
}
var oc = /[\\^$.*+?()[\]{}|]/g, nc = /^\[object .+?Constructor\]$/, ac = Function.prototype, sc = Object.prototype, lc = ac.toString, hc = sc.hasOwnProperty, cc = RegExp(
  "^" + lc.call(hc).replace(oc, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function uc(t) {
  if (!It(t) || ec(t))
    return !1;
  var e = Pr(t) ? cc : nc;
  return e.test(qt(t));
}
function dc(t, e) {
  return t == null ? void 0 : t[e];
}
function Dt(t, e) {
  var r = dc(t, e);
  return uc(r) ? r : void 0;
}
var fc = Dt(Object, "create");
const he = fc;
function gc() {
  this.__data__ = he ? he(null) : {}, this.size = 0;
}
function pc(t) {
  var e = this.has(t) && delete this.__data__[t];
  return this.size -= e ? 1 : 0, e;
}
var mc = "__lodash_hash_undefined__", Cc = Object.prototype, yc = Cc.hasOwnProperty;
function bc(t) {
  var e = this.__data__;
  if (he) {
    var r = e[t];
    return r === mc ? void 0 : r;
  }
  return yc.call(e, t) ? e[t] : void 0;
}
var xc = Object.prototype, _c = xc.hasOwnProperty;
function vc(t) {
  var e = this.__data__;
  return he ? e[t] !== void 0 : _c.call(e, t);
}
var Tc = "__lodash_hash_undefined__";
function kc(t, e) {
  var r = this.__data__;
  return this.size += this.has(t) ? 0 : 1, r[t] = he && e === void 0 ? Tc : e, this;
}
function Et(t) {
  var e = -1, r = t == null ? 0 : t.length;
  for (this.clear(); ++e < r; ) {
    var i = t[e];
    this.set(i[0], i[1]);
  }
}
Et.prototype.clear = gc;
Et.prototype.delete = pc;
Et.prototype.get = bc;
Et.prototype.has = vc;
Et.prototype.set = kc;
function Sc() {
  this.__data__ = [], this.size = 0;
}
function Je(t, e) {
  return t === e || t !== t && e !== e;
}
function Qe(t, e) {
  for (var r = t.length; r--; )
    if (Je(t[r][0], e))
      return r;
  return -1;
}
var Bc = Array.prototype, Fc = Bc.splice;
function wc(t) {
  var e = this.__data__, r = Qe(e, t);
  if (r < 0)
    return !1;
  var i = e.length - 1;
  return r == i ? e.pop() : Fc.call(e, r, 1), --this.size, !0;
}
function Lc(t) {
  var e = this.__data__, r = Qe(e, t);
  return r < 0 ? void 0 : e[r][1];
}
function Ac(t) {
  return Qe(this.__data__, t) > -1;
}
function $c(t, e) {
  var r = this.__data__, i = Qe(r, t);
  return i < 0 ? (++this.size, r.push([t, e])) : r[i][1] = e, this;
}
function _t(t) {
  var e = -1, r = t == null ? 0 : t.length;
  for (this.clear(); ++e < r; ) {
    var i = t[e];
    this.set(i[0], i[1]);
  }
}
_t.prototype.clear = Sc;
_t.prototype.delete = wc;
_t.prototype.get = Lc;
_t.prototype.has = Ac;
_t.prototype.set = $c;
var Oc = Dt(ft, "Map");
const ce = Oc;
function Ec() {
  this.size = 0, this.__data__ = {
    hash: new Et(),
    map: new (ce || _t)(),
    string: new Et()
  };
}
function Mc(t) {
  var e = typeof t;
  return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? t !== "__proto__" : t === null;
}
function tr(t, e) {
  var r = t.__data__;
  return Mc(e) ? r[typeof e == "string" ? "string" : "hash"] : r.map;
}
function Ic(t) {
  var e = tr(this, t).delete(t);
  return this.size -= e ? 1 : 0, e;
}
function qc(t) {
  return tr(this, t).get(t);
}
function Dc(t) {
  return tr(this, t).has(t);
}
function zc(t, e) {
  var r = tr(this, t), i = r.size;
  return r.set(t, e), this.size += r.size == i ? 0 : 1, this;
}
function Bt(t) {
  var e = -1, r = t == null ? 0 : t.length;
  for (this.clear(); ++e < r; ) {
    var i = t[e];
    this.set(i[0], i[1]);
  }
}
Bt.prototype.clear = Ec;
Bt.prototype.delete = Ic;
Bt.prototype.get = qc;
Bt.prototype.has = Dc;
Bt.prototype.set = zc;
var Pc = "Expected a function";
function Ce(t, e) {
  if (typeof t != "function" || e != null && typeof e != "function")
    throw new TypeError(Pc);
  var r = function() {
    var i = arguments, o = e ? e.apply(this, i) : i[0], n = r.cache;
    if (n.has(o))
      return n.get(o);
    var a = t.apply(this, i);
    return r.cache = n.set(o, a) || n, a;
  };
  return r.cache = new (Ce.Cache || Bt)(), r;
}
Ce.Cache = Bt;
function Nc() {
  this.__data__ = new _t(), this.size = 0;
}
function Rc(t) {
  var e = this.__data__, r = e.delete(t);
  return this.size = e.size, r;
}
function Wc(t) {
  return this.__data__.get(t);
}
function jc(t) {
  return this.__data__.has(t);
}
var Hc = 200;
function Yc(t, e) {
  var r = this.__data__;
  if (r instanceof _t) {
    var i = r.__data__;
    if (!ce || i.length < Hc - 1)
      return i.push([t, e]), this.size = ++r.size, this;
    r = this.__data__ = new Bt(i);
  }
  return r.set(t, e), this.size = r.size, this;
}
function Zt(t) {
  var e = this.__data__ = new _t(t);
  this.size = e.size;
}
Zt.prototype.clear = Nc;
Zt.prototype.delete = Rc;
Zt.prototype.get = Wc;
Zt.prototype.has = jc;
Zt.prototype.set = Yc;
var Uc = function() {
  try {
    var t = Dt(Object, "defineProperty");
    return t({}, "", {}), t;
  } catch {
  }
}();
const De = Uc;
function Nr(t, e, r) {
  e == "__proto__" && De ? De(t, e, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : t[e] = r;
}
function vr(t, e, r) {
  (r !== void 0 && !Je(t[e], r) || r === void 0 && !(e in t)) && Nr(t, e, r);
}
function Vc(t) {
  return function(e, r, i) {
    for (var o = -1, n = Object(e), a = i(e), s = a.length; s--; ) {
      var l = a[t ? s : ++o];
      if (r(n[l], l, n) === !1)
        break;
    }
    return e;
  };
}
var Gc = Vc();
const Xc = Gc;
var vo = typeof exports == "object" && exports && !exports.nodeType && exports, mi = vo && typeof module == "object" && module && !module.nodeType && module, Kc = mi && mi.exports === vo, Ci = Kc ? ft.Buffer : void 0, yi = Ci ? Ci.allocUnsafe : void 0;
function Zc(t, e) {
  if (e)
    return t.slice();
  var r = t.length, i = yi ? yi(r) : new t.constructor(r);
  return t.copy(i), i;
}
var Jc = ft.Uint8Array;
const bi = Jc;
function Qc(t) {
  var e = new t.constructor(t.byteLength);
  return new bi(e).set(new bi(t)), e;
}
function tu(t, e) {
  var r = e ? Qc(t.buffer) : t.buffer;
  return new t.constructor(r, t.byteOffset, t.length);
}
function eu(t, e) {
  var r = -1, i = t.length;
  for (e || (e = Array(i)); ++r < i; )
    e[r] = t[r];
  return e;
}
var xi = Object.create, ru = /* @__PURE__ */ function() {
  function t() {
  }
  return function(e) {
    if (!It(e))
      return {};
    if (xi)
      return xi(e);
    t.prototype = e;
    var r = new t();
    return t.prototype = void 0, r;
  };
}();
const iu = ru;
function To(t, e) {
  return function(r) {
    return t(e(r));
  };
}
var ou = To(Object.getPrototypeOf, Object);
const ko = ou;
var nu = Object.prototype;
function er(t) {
  var e = t && t.constructor, r = typeof e == "function" && e.prototype || nu;
  return t === r;
}
function au(t) {
  return typeof t.constructor == "function" && !er(t) ? iu(ko(t)) : {};
}
function ye(t) {
  return t != null && typeof t == "object";
}
var su = "[object Arguments]";
function _i(t) {
  return ye(t) && Kt(t) == su;
}
var So = Object.prototype, lu = So.hasOwnProperty, hu = So.propertyIsEnumerable, cu = _i(/* @__PURE__ */ function() {
  return arguments;
}()) ? _i : function(t) {
  return ye(t) && lu.call(t, "callee") && !hu.call(t, "callee");
};
const ze = cu;
var uu = Array.isArray;
const Pe = uu;
var du = 9007199254740991;
function Bo(t) {
  return typeof t == "number" && t > -1 && t % 1 == 0 && t <= du;
}
function rr(t) {
  return t != null && Bo(t.length) && !Pr(t);
}
function fu(t) {
  return ye(t) && rr(t);
}
function gu() {
  return !1;
}
var Fo = typeof exports == "object" && exports && !exports.nodeType && exports, vi = Fo && typeof module == "object" && module && !module.nodeType && module, pu = vi && vi.exports === Fo, Ti = pu ? ft.Buffer : void 0, mu = Ti ? Ti.isBuffer : void 0, Cu = mu || gu;
const Rr = Cu;
var yu = "[object Object]", bu = Function.prototype, xu = Object.prototype, wo = bu.toString, _u = xu.hasOwnProperty, vu = wo.call(Object);
function Tu(t) {
  if (!ye(t) || Kt(t) != yu)
    return !1;
  var e = ko(t);
  if (e === null)
    return !0;
  var r = _u.call(e, "constructor") && e.constructor;
  return typeof r == "function" && r instanceof r && wo.call(r) == vu;
}
var ku = "[object Arguments]", Su = "[object Array]", Bu = "[object Boolean]", Fu = "[object Date]", wu = "[object Error]", Lu = "[object Function]", Au = "[object Map]", $u = "[object Number]", Ou = "[object Object]", Eu = "[object RegExp]", Mu = "[object Set]", Iu = "[object String]", qu = "[object WeakMap]", Du = "[object ArrayBuffer]", zu = "[object DataView]", Pu = "[object Float32Array]", Nu = "[object Float64Array]", Ru = "[object Int8Array]", Wu = "[object Int16Array]", ju = "[object Int32Array]", Hu = "[object Uint8Array]", Yu = "[object Uint8ClampedArray]", Uu = "[object Uint16Array]", Vu = "[object Uint32Array]", D = {};
D[Pu] = D[Nu] = D[Ru] = D[Wu] = D[ju] = D[Hu] = D[Yu] = D[Uu] = D[Vu] = !0;
D[ku] = D[Su] = D[Du] = D[Bu] = D[zu] = D[Fu] = D[wu] = D[Lu] = D[Au] = D[$u] = D[Ou] = D[Eu] = D[Mu] = D[Iu] = D[qu] = !1;
function Gu(t) {
  return ye(t) && Bo(t.length) && !!D[Kt(t)];
}
function Xu(t) {
  return function(e) {
    return t(e);
  };
}
var Lo = typeof exports == "object" && exports && !exports.nodeType && exports, ne = Lo && typeof module == "object" && module && !module.nodeType && module, Ku = ne && ne.exports === Lo, dr = Ku && xo.process, Zu = function() {
  try {
    var t = ne && ne.require && ne.require("util").types;
    return t || dr && dr.binding && dr.binding("util");
  } catch {
  }
}();
const ki = Zu;
var Si = ki && ki.isTypedArray, Ju = Si ? Xu(Si) : Gu;
const Wr = Ju;
function Tr(t, e) {
  if (!(e === "constructor" && typeof t[e] == "function") && e != "__proto__")
    return t[e];
}
var Qu = Object.prototype, td = Qu.hasOwnProperty;
function ed(t, e, r) {
  var i = t[e];
  (!(td.call(t, e) && Je(i, r)) || r === void 0 && !(e in t)) && Nr(t, e, r);
}
function rd(t, e, r, i) {
  var o = !r;
  r || (r = {});
  for (var n = -1, a = e.length; ++n < a; ) {
    var s = e[n], l = i ? i(r[s], t[s], s, r, t) : void 0;
    l === void 0 && (l = t[s]), o ? Nr(r, s, l) : ed(r, s, l);
  }
  return r;
}
function id(t, e) {
  for (var r = -1, i = Array(t); ++r < t; )
    i[r] = e(r);
  return i;
}
var od = 9007199254740991, nd = /^(?:0|[1-9]\d*)$/;
function Ao(t, e) {
  var r = typeof t;
  return e = e ?? od, !!e && (r == "number" || r != "symbol" && nd.test(t)) && t > -1 && t % 1 == 0 && t < e;
}
var ad = Object.prototype, sd = ad.hasOwnProperty;
function ld(t, e) {
  var r = Pe(t), i = !r && ze(t), o = !r && !i && Rr(t), n = !r && !i && !o && Wr(t), a = r || i || o || n, s = a ? id(t.length, String) : [], l = s.length;
  for (var c in t)
    (e || sd.call(t, c)) && !(a && // Safari 9 has enumerable `arguments.length` in strict mode.
    (c == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    o && (c == "offset" || c == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    n && (c == "buffer" || c == "byteLength" || c == "byteOffset") || // Skip index properties.
    Ao(c, l))) && s.push(c);
  return s;
}
function hd(t) {
  var e = [];
  if (t != null)
    for (var r in Object(t))
      e.push(r);
  return e;
}
var cd = Object.prototype, ud = cd.hasOwnProperty;
function dd(t) {
  if (!It(t))
    return hd(t);
  var e = er(t), r = [];
  for (var i in t)
    i == "constructor" && (e || !ud.call(t, i)) || r.push(i);
  return r;
}
function $o(t) {
  return rr(t) ? ld(t, !0) : dd(t);
}
function fd(t) {
  return rd(t, $o(t));
}
function gd(t, e, r, i, o, n, a) {
  var s = Tr(t, r), l = Tr(e, r), c = a.get(l);
  if (c) {
    vr(t, r, c);
    return;
  }
  var u = n ? n(s, l, r + "", t, e, a) : void 0, f = u === void 0;
  if (f) {
    var h = Pe(l), g = !h && Rr(l), y = !h && !g && Wr(l);
    u = l, h || g || y ? Pe(s) ? u = s : fu(s) ? u = eu(s) : g ? (f = !1, u = Zc(l, !0)) : y ? (f = !1, u = tu(l, !0)) : u = [] : Tu(l) || ze(l) ? (u = s, ze(s) ? u = fd(s) : (!It(s) || Pr(s)) && (u = au(l))) : f = !1;
  }
  f && (a.set(l, u), o(u, l, i, n, a), a.delete(l)), vr(t, r, u);
}
function Oo(t, e, r, i, o) {
  t !== e && Xc(e, function(n, a) {
    if (o || (o = new Zt()), It(n))
      gd(t, e, a, r, Oo, i, o);
    else {
      var s = i ? i(Tr(t, a), n, a + "", t, e, o) : void 0;
      s === void 0 && (s = n), vr(t, a, s);
    }
  }, $o);
}
function Eo(t) {
  return t;
}
function pd(t, e, r) {
  switch (r.length) {
    case 0:
      return t.call(e);
    case 1:
      return t.call(e, r[0]);
    case 2:
      return t.call(e, r[0], r[1]);
    case 3:
      return t.call(e, r[0], r[1], r[2]);
  }
  return t.apply(e, r);
}
var Bi = Math.max;
function md(t, e, r) {
  return e = Bi(e === void 0 ? t.length - 1 : e, 0), function() {
    for (var i = arguments, o = -1, n = Bi(i.length - e, 0), a = Array(n); ++o < n; )
      a[o] = i[e + o];
    o = -1;
    for (var s = Array(e + 1); ++o < e; )
      s[o] = i[o];
    return s[e] = r(a), pd(t, this, s);
  };
}
function Cd(t) {
  return function() {
    return t;
  };
}
var yd = De ? function(t, e) {
  return De(t, "toString", {
    configurable: !0,
    enumerable: !1,
    value: Cd(e),
    writable: !0
  });
} : Eo;
const bd = yd;
var xd = 800, _d = 16, vd = Date.now;
function Td(t) {
  var e = 0, r = 0;
  return function() {
    var i = vd(), o = _d - (i - r);
    if (r = i, o > 0) {
      if (++e >= xd)
        return arguments[0];
    } else
      e = 0;
    return t.apply(void 0, arguments);
  };
}
var kd = Td(bd);
const Sd = kd;
function Bd(t, e) {
  return Sd(md(t, e, Eo), t + "");
}
function Fd(t, e, r) {
  if (!It(r))
    return !1;
  var i = typeof e;
  return (i == "number" ? rr(r) && Ao(e, r.length) : i == "string" && e in r) ? Je(r[e], t) : !1;
}
function wd(t) {
  return Bd(function(e, r) {
    var i = -1, o = r.length, n = o > 1 ? r[o - 1] : void 0, a = o > 2 ? r[2] : void 0;
    for (n = t.length > 3 && typeof n == "function" ? (o--, n) : void 0, a && Fd(r[0], r[1], a) && (n = o < 3 ? void 0 : n, o = 1), e = Object(e); ++i < o; ) {
      var s = r[i];
      s && t(e, s, i, n);
    }
    return e;
  });
}
var Ld = wd(function(t, e, r) {
  Oo(t, e, r);
});
const Ad = Ld;
var Mo = "comm", Io = "rule", qo = "decl", $d = "@import", Od = "@keyframes", Ed = "@layer", Md = Math.abs, jr = String.fromCharCode;
function Do(t) {
  return t.trim();
}
function Ae(t, e, r) {
  return t.replace(e, r);
}
function Id(t, e) {
  return t.indexOf(e);
}
function ue(t, e) {
  return t.charCodeAt(e) | 0;
}
function de(t, e, r) {
  return t.slice(e, r);
}
function Ct(t) {
  return t.length;
}
function qd(t) {
  return t.length;
}
function Te(t, e) {
  return e.push(t), t;
}
var ir = 1, Yt = 1, zo = 0, nt = 0, j = 0, Jt = "";
function Hr(t, e, r, i, o, n, a, s) {
  return { value: t, root: e, parent: r, type: i, props: o, children: n, line: ir, column: Yt, length: a, return: "", siblings: s };
}
function Dd() {
  return j;
}
function zd() {
  return j = nt > 0 ? ue(Jt, --nt) : 0, Yt--, j === 10 && (Yt = 1, ir--), j;
}
function at() {
  return j = nt < zo ? ue(Jt, nt++) : 0, Yt++, j === 10 && (Yt = 1, ir++), j;
}
function $t() {
  return ue(Jt, nt);
}
function $e() {
  return nt;
}
function or(t, e) {
  return de(Jt, t, e);
}
function kr(t) {
  switch (t) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function Pd(t) {
  return ir = Yt = 1, zo = Ct(Jt = t), nt = 0, [];
}
function Nd(t) {
  return Jt = "", t;
}
function fr(t) {
  return Do(or(nt - 1, Sr(t === 91 ? t + 2 : t === 40 ? t + 1 : t)));
}
function Rd(t) {
  for (; (j = $t()) && j < 33; )
    at();
  return kr(t) > 2 || kr(j) > 3 ? "" : " ";
}
function Wd(t, e) {
  for (; --e && at() && !(j < 48 || j > 102 || j > 57 && j < 65 || j > 70 && j < 97); )
    ;
  return or(t, $e() + (e < 6 && $t() == 32 && at() == 32));
}
function Sr(t) {
  for (; at(); )
    switch (j) {
      case t:
        return nt;
      case 34:
      case 39:
        t !== 34 && t !== 39 && Sr(j);
        break;
      case 40:
        t === 41 && Sr(t);
        break;
      case 92:
        at();
        break;
    }
  return nt;
}
function jd(t, e) {
  for (; at() && t + j !== 57; )
    if (t + j === 84 && $t() === 47)
      break;
  return "/*" + or(e, nt - 1) + "*" + jr(t === 47 ? t : at());
}
function Hd(t) {
  for (; !kr($t()); )
    at();
  return or(t, nt);
}
function Yd(t) {
  return Nd(Oe("", null, null, null, [""], t = Pd(t), 0, [0], t));
}
function Oe(t, e, r, i, o, n, a, s, l) {
  for (var c = 0, u = 0, f = a, h = 0, g = 0, y = 0, _ = 1, k = 1, O = 1, x = 0, z = "", q = o, P = n, R = i, E = z; k; )
    switch (y = x, x = at()) {
      case 40:
        if (y != 108 && ue(E, f - 1) == 58) {
          Id(E += Ae(fr(x), "&", "&\f"), "&\f") != -1 && (O = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        E += fr(x);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        E += Rd(y);
        break;
      case 92:
        E += Wd($e() - 1, 7);
        continue;
      case 47:
        switch ($t()) {
          case 42:
          case 47:
            Te(Ud(jd(at(), $e()), e, r, l), l);
            break;
          default:
            E += "/";
        }
        break;
      case 123 * _:
        s[c++] = Ct(E) * O;
      case 125 * _:
      case 59:
      case 0:
        switch (x) {
          case 0:
          case 125:
            k = 0;
          case 59 + u:
            O == -1 && (E = Ae(E, /\f/g, "")), g > 0 && Ct(E) - f && Te(g > 32 ? wi(E + ";", i, r, f - 1, l) : wi(Ae(E, " ", "") + ";", i, r, f - 2, l), l);
            break;
          case 59:
            E += ";";
          default:
            if (Te(R = Fi(E, e, r, c, u, o, s, z, q = [], P = [], f, n), n), x === 123)
              if (u === 0)
                Oe(E, e, R, R, q, n, f, s, P);
              else
                switch (h === 99 && ue(E, 3) === 110 ? 100 : h) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Oe(t, R, R, i && Te(Fi(t, R, R, 0, 0, o, s, z, o, q = [], f, P), P), o, P, f, s, i ? q : P);
                    break;
                  default:
                    Oe(E, R, R, R, [""], P, 0, s, P);
                }
        }
        c = u = g = 0, _ = O = 1, z = E = "", f = a;
        break;
      case 58:
        f = 1 + Ct(E), g = y;
      default:
        if (_ < 1) {
          if (x == 123)
            --_;
          else if (x == 125 && _++ == 0 && zd() == 125)
            continue;
        }
        switch (E += jr(x), x * _) {
          case 38:
            O = u > 0 ? 1 : (E += "\f", -1);
            break;
          case 44:
            s[c++] = (Ct(E) - 1) * O, O = 1;
            break;
          case 64:
            $t() === 45 && (E += fr(at())), h = $t(), u = f = Ct(z = E += Hd($e())), x++;
            break;
          case 45:
            y === 45 && Ct(E) == 2 && (_ = 0);
        }
    }
  return n;
}
function Fi(t, e, r, i, o, n, a, s, l, c, u, f) {
  for (var h = o - 1, g = o === 0 ? n : [""], y = qd(g), _ = 0, k = 0, O = 0; _ < i; ++_)
    for (var x = 0, z = de(t, h + 1, h = Md(k = a[_])), q = t; x < y; ++x)
      (q = Do(k > 0 ? g[x] + " " + z : Ae(z, /&\f/g, g[x]))) && (l[O++] = q);
  return Hr(t, e, r, o === 0 ? Io : s, l, c, u, f);
}
function Ud(t, e, r, i) {
  return Hr(t, e, r, Mo, jr(Dd()), de(t, 2, -2), 0, i);
}
function wi(t, e, r, i, o) {
  return Hr(t, e, r, qo, de(t, 0, i), de(t, i + 1, -1), i, o);
}
function Br(t, e) {
  for (var r = "", i = 0; i < t.length; i++)
    r += e(t[i], i, t, e) || "";
  return r;
}
function Vd(t, e, r, i) {
  switch (t.type) {
    case Ed:
      if (t.children.length)
        break;
    case $d:
    case qo:
      return t.return = t.return || t.value;
    case Mo:
      return "";
    case Od:
      return t.return = t.value + "{" + Br(t.children, i) + "}";
    case Io:
      if (!Ct(t.value = t.props.join(",")))
        return "";
  }
  return Ct(r = Br(t.children, i)) ? t.return = t.value + "{" + r + "}" : "";
}
var Gd = To(Object.keys, Object);
const Xd = Gd;
var Kd = Object.prototype, Zd = Kd.hasOwnProperty;
function Jd(t) {
  if (!er(t))
    return Xd(t);
  var e = [];
  for (var r in Object(t))
    Zd.call(t, r) && r != "constructor" && e.push(r);
  return e;
}
var Qd = Dt(ft, "DataView");
const Fr = Qd;
var tf = Dt(ft, "Promise");
const wr = tf;
var ef = Dt(ft, "Set");
const Lr = ef;
var rf = Dt(ft, "WeakMap");
const Ar = rf;
var Li = "[object Map]", of = "[object Object]", Ai = "[object Promise]", $i = "[object Set]", Oi = "[object WeakMap]", Ei = "[object DataView]", nf = qt(Fr), af = qt(ce), sf = qt(wr), lf = qt(Lr), hf = qt(Ar), At = Kt;
(Fr && At(new Fr(new ArrayBuffer(1))) != Ei || ce && At(new ce()) != Li || wr && At(wr.resolve()) != Ai || Lr && At(new Lr()) != $i || Ar && At(new Ar()) != Oi) && (At = function(t) {
  var e = Kt(t), r = e == of ? t.constructor : void 0, i = r ? qt(r) : "";
  if (i)
    switch (i) {
      case nf:
        return Ei;
      case af:
        return Li;
      case sf:
        return Ai;
      case lf:
        return $i;
      case hf:
        return Oi;
    }
  return e;
});
const cf = At;
var uf = "[object Map]", df = "[object Set]", ff = Object.prototype, gf = ff.hasOwnProperty;
function gr(t) {
  if (t == null)
    return !0;
  if (rr(t) && (Pe(t) || typeof t == "string" || typeof t.splice == "function" || Rr(t) || Wr(t) || ze(t)))
    return !t.length;
  var e = cf(t);
  if (e == uf || e == df)
    return !t.size;
  if (er(t))
    return !Jd(t).length;
  for (var r in t)
    if (gf.call(t, r))
      return !1;
  return !0;
}
const pt = {
  trace: 0,
  debug: 1,
  info: 2,
  warn: 3,
  error: 4,
  fatal: 5
}, B = {
  trace: (...t) => {
  },
  debug: (...t) => {
  },
  info: (...t) => {
  },
  warn: (...t) => {
  },
  error: (...t) => {
  },
  fatal: (...t) => {
  }
}, Yr = function(t = "fatal") {
  let e = pt.fatal;
  typeof t == "string" ? (t = t.toLowerCase(), t in pt && (e = pt[t])) : typeof t == "number" && (e = t), B.trace = () => {
  }, B.debug = () => {
  }, B.info = () => {
  }, B.warn = () => {
  }, B.error = () => {
  }, B.fatal = () => {
  }, e <= pt.fatal && (B.fatal = console.error ? console.error.bind(console, it("FATAL"), "color: orange") : console.log.bind(console, "\x1B[35m", it("FATAL"))), e <= pt.error && (B.error = console.error ? console.error.bind(console, it("ERROR"), "color: orange") : console.log.bind(console, "\x1B[31m", it("ERROR"))), e <= pt.warn && (B.warn = console.warn ? console.warn.bind(console, it("WARN"), "color: orange") : console.log.bind(console, "\x1B[33m", it("WARN"))), e <= pt.info && (B.info = console.info ? console.info.bind(console, it("INFO"), "color: lightblue") : console.log.bind(console, "\x1B[34m", it("INFO"))), e <= pt.debug && (B.debug = console.debug ? console.debug.bind(console, it("DEBUG"), "color: lightgreen") : console.log.bind(console, "\x1B[32m", it("DEBUG"))), e <= pt.trace && (B.trace = console.debug ? console.debug.bind(console, it("TRACE"), "color: lightgreen") : console.log.bind(console, "\x1B[32m", it("TRACE")));
}, it = (t) => `%c${Ta().format("ss.SSS")} : ${t} : `, nr = /<br\s*\/?>/gi, pf = (t) => t ? No(t).replace(/\\n/g, "#br#").split("#br#") : [""], Po = (t) => Me.sanitize(t), Mi = (t, e) => {
  var r;
  if (((r = e.flowchart) == null ? void 0 : r.htmlLabels) !== !1) {
    const i = e.securityLevel;
    i === "antiscript" || i === "strict" ? t = Po(t) : i !== "loose" && (t = No(t), t = t.replace(/</g, "&lt;").replace(/>/g, "&gt;"), t = t.replace(/=/g, "&equals;"), t = bf(t));
  }
  return t;
}, fe = (t, e) => t && (e.dompurifyConfig ? t = Me.sanitize(Mi(t, e), e.dompurifyConfig).toString() : t = Me.sanitize(Mi(t, e), {
  FORBID_TAGS: ["style"]
}).toString(), t), mf = (t, e) => typeof t == "string" ? fe(t, e) : t.flat().map((r) => fe(r, e)), Cf = (t) => nr.test(t), yf = (t) => t.split(nr), bf = (t) => t.replace(/#br#/g, "<br/>"), No = (t) => t.replace(nr, "#br#"), xf = (t) => {
  let e = "";
  return t && (e = window.location.protocol + "//" + window.location.host + window.location.pathname + window.location.search, e = e.replaceAll(/\(/g, "\\("), e = e.replaceAll(/\)/g, "\\)")), e;
}, Ro = (t) => !(t === !1 || ["false", "null", "0"].includes(String(t).trim().toLowerCase())), _f = function(...t) {
  const e = t.filter((r) => !isNaN(r));
  return Math.max(...e);
}, vf = function(...t) {
  const e = t.filter((r) => !isNaN(r));
  return Math.min(...e);
}, Ky = function(t) {
  const e = t.split(/(,)/), r = [];
  for (let i = 0; i < e.length; i++) {
    let o = e[i];
    if (o === "," && i > 0 && i + 1 < e.length) {
      const n = e[i - 1], a = e[i + 1];
      Tf(n, a) && (o = n + "," + a, i++, r.pop());
    }
    r.push(kf(o));
  }
  return r.join("");
}, $r = (t, e) => Math.max(0, t.split(e).length - 1), Tf = (t, e) => {
  const r = $r(t, "~"), i = $r(e, "~");
  return r === 1 && i === 1;
}, kf = (t) => {
  const e = $r(t, "~");
  let r = !1;
  if (e <= 1)
    return t;
  e % 2 !== 0 && t.startsWith("~") && (t = t.substring(1), r = !0);
  const i = [...t];
  let o = i.indexOf("~"), n = i.lastIndexOf("~");
  for (; o !== -1 && n !== -1 && o !== n; )
    i[o] = "<", i[n] = ">", o = i.indexOf("~"), n = i.lastIndexOf("~");
  return r && i.unshift("~"), i.join("");
}, Ur = {
  getRows: pf,
  sanitizeText: fe,
  sanitizeTextOrArray: mf,
  hasBreaks: Cf,
  splitBreaks: yf,
  lineBreakRegex: nr,
  removeScript: Po,
  getUrl: xf,
  evaluate: Ro,
  getMax: _f,
  getMin: vf
}, Z = (t, e) => e ? d(t, { s: -40, l: 10 }) : d(t, { s: -40, l: -10 }), ar = "#ffffff", sr = "#f2f2f2";
let Sf = class {
  constructor() {
    this.background = "#f4f4f4", this.primaryColor = "#fff4dd", this.noteBkgColor = "#fff5ad", this.noteTextColor = "#333", this.THEME_COLOR_LIMIT = 12, this.fontFamily = '"trebuchet ms", verdana, arial, sans-serif', this.fontSize = "16px";
  }
  updateColors() {
    var e, r, i, o, n, a, s, l, c, u, f;
    if (this.primaryTextColor = this.primaryTextColor || (this.darkMode ? "#eee" : "#333"), this.secondaryColor = this.secondaryColor || d(this.primaryColor, { h: -120 }), this.tertiaryColor = this.tertiaryColor || d(this.primaryColor, { h: 180, l: 5 }), this.primaryBorderColor = this.primaryBorderColor || Z(this.primaryColor, this.darkMode), this.secondaryBorderColor = this.secondaryBorderColor || Z(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = this.tertiaryBorderColor || Z(this.tertiaryColor, this.darkMode), this.noteBorderColor = this.noteBorderColor || Z(this.noteBkgColor, this.darkMode), this.noteBkgColor = this.noteBkgColor || "#fff5ad", this.noteTextColor = this.noteTextColor || "#333", this.secondaryTextColor = this.secondaryTextColor || m(this.secondaryColor), this.tertiaryTextColor = this.tertiaryTextColor || m(this.tertiaryColor), this.lineColor = this.lineColor || m(this.background), this.arrowheadColor = this.arrowheadColor || m(this.background), this.textColor = this.textColor || this.primaryTextColor, this.border2 = this.border2 || this.tertiaryBorderColor, this.nodeBkg = this.nodeBkg || this.primaryColor, this.mainBkg = this.mainBkg || this.primaryColor, this.nodeBorder = this.nodeBorder || this.primaryBorderColor, this.clusterBkg = this.clusterBkg || this.tertiaryColor, this.clusterBorder = this.clusterBorder || this.tertiaryBorderColor, this.defaultLinkColor = this.defaultLinkColor || this.lineColor, this.titleColor = this.titleColor || this.tertiaryTextColor, this.edgeLabelBackground = this.edgeLabelBackground || (this.darkMode ? F(this.secondaryColor, 30) : this.secondaryColor), this.nodeTextColor = this.nodeTextColor || this.primaryTextColor, this.actorBorder = this.actorBorder || this.primaryBorderColor, this.actorBkg = this.actorBkg || this.mainBkg, this.actorTextColor = this.actorTextColor || this.primaryTextColor, this.actorLineColor = this.actorLineColor || "grey", this.labelBoxBkgColor = this.labelBoxBkgColor || this.actorBkg, this.signalColor = this.signalColor || this.textColor, this.signalTextColor = this.signalTextColor || this.textColor, this.labelBoxBorderColor = this.labelBoxBorderColor || this.actorBorder, this.labelTextColor = this.labelTextColor || this.actorTextColor, this.loopTextColor = this.loopTextColor || this.actorTextColor, this.activationBorderColor = this.activationBorderColor || F(this.secondaryColor, 10), this.activationBkgColor = this.activationBkgColor || this.secondaryColor, this.sequenceNumberColor = this.sequenceNumberColor || m(this.lineColor), this.sectionBkgColor = this.sectionBkgColor || this.tertiaryColor, this.altSectionBkgColor = this.altSectionBkgColor || "white", this.sectionBkgColor = this.sectionBkgColor || this.secondaryColor, this.sectionBkgColor2 = this.sectionBkgColor2 || this.primaryColor, this.excludeBkgColor = this.excludeBkgColor || "#eeeeee", this.taskBorderColor = this.taskBorderColor || this.primaryBorderColor, this.taskBkgColor = this.taskBkgColor || this.primaryColor, this.activeTaskBorderColor = this.activeTaskBorderColor || this.primaryColor, this.activeTaskBkgColor = this.activeTaskBkgColor || v(this.primaryColor, 23), this.gridColor = this.gridColor || "lightgrey", this.doneTaskBkgColor = this.doneTaskBkgColor || "lightgrey", this.doneTaskBorderColor = this.doneTaskBorderColor || "grey", this.critBorderColor = this.critBorderColor || "#ff8888", this.critBkgColor = this.critBkgColor || "red", this.todayLineColor = this.todayLineColor || "red", this.taskTextColor = this.taskTextColor || this.textColor, this.taskTextOutsideColor = this.taskTextOutsideColor || this.textColor, this.taskTextLightColor = this.taskTextLightColor || this.textColor, this.taskTextColor = this.taskTextColor || this.primaryTextColor, this.taskTextDarkColor = this.taskTextDarkColor || this.textColor, this.taskTextClickableColor = this.taskTextClickableColor || "#003163", this.personBorder = this.personBorder || this.primaryBorderColor, this.personBkg = this.personBkg || this.mainBkg, this.transitionColor = this.transitionColor || this.lineColor, this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || this.tertiaryColor, this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.compositeBorder = this.compositeBorder || this.nodeBorder, this.innerEndBackground = this.nodeBorder, this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.transitionColor = this.transitionColor || this.lineColor, this.specialStateColor = this.lineColor, this.cScale0 = this.cScale0 || this.primaryColor, this.cScale1 = this.cScale1 || this.secondaryColor, this.cScale2 = this.cScale2 || this.tertiaryColor, this.cScale3 = this.cScale3 || d(this.primaryColor, { h: 30 }), this.cScale4 = this.cScale4 || d(this.primaryColor, { h: 60 }), this.cScale5 = this.cScale5 || d(this.primaryColor, { h: 90 }), this.cScale6 = this.cScale6 || d(this.primaryColor, { h: 120 }), this.cScale7 = this.cScale7 || d(this.primaryColor, { h: 150 }), this.cScale8 = this.cScale8 || d(this.primaryColor, { h: 210, l: 150 }), this.cScale9 = this.cScale9 || d(this.primaryColor, { h: 270 }), this.cScale10 = this.cScale10 || d(this.primaryColor, { h: 300 }), this.cScale11 = this.cScale11 || d(this.primaryColor, { h: 330 }), this.darkMode)
      for (let g = 0; g < this.THEME_COLOR_LIMIT; g++)
        this["cScale" + g] = F(this["cScale" + g], 75);
    else
      for (let g = 0; g < this.THEME_COLOR_LIMIT; g++)
        this["cScale" + g] = F(this["cScale" + g], 25);
    for (let g = 0; g < this.THEME_COLOR_LIMIT; g++)
      this["cScaleInv" + g] = this["cScaleInv" + g] || m(this["cScale" + g]);
    for (let g = 0; g < this.THEME_COLOR_LIMIT; g++)
      this.darkMode ? this["cScalePeer" + g] = this["cScalePeer" + g] || v(this["cScale" + g], 10) : this["cScalePeer" + g] = this["cScalePeer" + g] || F(this["cScale" + g], 10);
    this.scaleLabelColor = this.scaleLabelColor || this.labelTextColor;
    for (let g = 0; g < this.THEME_COLOR_LIMIT; g++)
      this["cScaleLabel" + g] = this["cScaleLabel" + g] || this.scaleLabelColor;
    const h = this.darkMode ? -4 : -1;
    for (let g = 0; g < 5; g++)
      this["surface" + g] = this["surface" + g] || d(this.mainBkg, { h: 180, s: -15, l: h * (5 + g * 3) }), this["surfacePeer" + g] = this["surfacePeer" + g] || d(this.mainBkg, { h: 180, s: -15, l: h * (8 + g * 3) });
    this.classText = this.classText || this.textColor, this.fillType0 = this.fillType0 || this.primaryColor, this.fillType1 = this.fillType1 || this.secondaryColor, this.fillType2 = this.fillType2 || d(this.primaryColor, { h: 64 }), this.fillType3 = this.fillType3 || d(this.secondaryColor, { h: 64 }), this.fillType4 = this.fillType4 || d(this.primaryColor, { h: -64 }), this.fillType5 = this.fillType5 || d(this.secondaryColor, { h: -64 }), this.fillType6 = this.fillType6 || d(this.primaryColor, { h: 128 }), this.fillType7 = this.fillType7 || d(this.secondaryColor, { h: 128 }), this.pie1 = this.pie1 || this.primaryColor, this.pie2 = this.pie2 || this.secondaryColor, this.pie3 = this.pie3 || this.tertiaryColor, this.pie4 = this.pie4 || d(this.primaryColor, { l: -10 }), this.pie5 = this.pie5 || d(this.secondaryColor, { l: -10 }), this.pie6 = this.pie6 || d(this.tertiaryColor, { l: -10 }), this.pie7 = this.pie7 || d(this.primaryColor, { h: 60, l: -10 }), this.pie8 = this.pie8 || d(this.primaryColor, { h: -60, l: -10 }), this.pie9 = this.pie9 || d(this.primaryColor, { h: 120, l: 0 }), this.pie10 = this.pie10 || d(this.primaryColor, { h: 60, l: -20 }), this.pie11 = this.pie11 || d(this.primaryColor, { h: -60, l: -20 }), this.pie12 = this.pie12 || d(this.primaryColor, { h: 120, l: -10 }), this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7", this.quadrant1Fill = this.quadrant1Fill || this.primaryColor, this.quadrant2Fill = this.quadrant2Fill || d(this.primaryColor, { r: 5, g: 5, b: 5 }), this.quadrant3Fill = this.quadrant3Fill || d(this.primaryColor, { r: 10, g: 10, b: 10 }), this.quadrant4Fill = this.quadrant4Fill || d(this.primaryColor, { r: 15, g: 15, b: 15 }), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || d(this.primaryTextColor, { r: -5, g: -5, b: -5 }), this.quadrant3TextFill = this.quadrant3TextFill || d(this.primaryTextColor, { r: -10, g: -10, b: -10 }), this.quadrant4TextFill = this.quadrant4TextFill || d(this.primaryTextColor, { r: -15, g: -15, b: -15 }), this.quadrantPointFill = this.quadrantPointFill || me(this.quadrant1Fill) ? v(this.quadrant1Fill) : F(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.xyChart = {
      backgroundColor: ((e = this.xyChart) == null ? void 0 : e.backgroundColor) || this.background,
      titleColor: ((r = this.xyChart) == null ? void 0 : r.titleColor) || this.primaryTextColor,
      xAxisTitleColor: ((i = this.xyChart) == null ? void 0 : i.xAxisTitleColor) || this.primaryTextColor,
      xAxisLabelColor: ((o = this.xyChart) == null ? void 0 : o.xAxisLabelColor) || this.primaryTextColor,
      xAxisTickColor: ((n = this.xyChart) == null ? void 0 : n.xAxisTickColor) || this.primaryTextColor,
      xAxisLineColor: ((a = this.xyChart) == null ? void 0 : a.xAxisLineColor) || this.primaryTextColor,
      yAxisTitleColor: ((s = this.xyChart) == null ? void 0 : s.yAxisTitleColor) || this.primaryTextColor,
      yAxisLabelColor: ((l = this.xyChart) == null ? void 0 : l.yAxisLabelColor) || this.primaryTextColor,
      yAxisTickColor: ((c = this.xyChart) == null ? void 0 : c.yAxisTickColor) || this.primaryTextColor,
      yAxisLineColor: ((u = this.xyChart) == null ? void 0 : u.yAxisLineColor) || this.primaryTextColor,
      plotColorPalette: ((f = this.xyChart) == null ? void 0 : f.plotColorPalette) || "#FFF4DD,#FFD8B1,#FFA07A,#ECEFF1,#D6DBDF,#C3E0A8,#FFB6A4,#FFD74D,#738FA7,#FFFFF0"
    }, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || (this.darkMode ? F(this.secondaryColor, 30) : this.secondaryColor), this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = this.git0 || this.primaryColor, this.git1 = this.git1 || this.secondaryColor, this.git2 = this.git2 || this.tertiaryColor, this.git3 = this.git3 || d(this.primaryColor, { h: -30 }), this.git4 = this.git4 || d(this.primaryColor, { h: -60 }), this.git5 = this.git5 || d(this.primaryColor, { h: -90 }), this.git6 = this.git6 || d(this.primaryColor, { h: 60 }), this.git7 = this.git7 || d(this.primaryColor, { h: 120 }), this.darkMode ? (this.git0 = v(this.git0, 25), this.git1 = v(this.git1, 25), this.git2 = v(this.git2, 25), this.git3 = v(this.git3, 25), this.git4 = v(this.git4, 25), this.git5 = v(this.git5, 25), this.git6 = v(this.git6, 25), this.git7 = v(this.git7, 25)) : (this.git0 = F(this.git0, 25), this.git1 = F(this.git1, 25), this.git2 = F(this.git2, 25), this.git3 = F(this.git3, 25), this.git4 = F(this.git4, 25), this.git5 = F(this.git5, 25), this.git6 = F(this.git6, 25), this.git7 = F(this.git7, 25)), this.gitInv0 = this.gitInv0 || m(this.git0), this.gitInv1 = this.gitInv1 || m(this.git1), this.gitInv2 = this.gitInv2 || m(this.git2), this.gitInv3 = this.gitInv3 || m(this.git3), this.gitInv4 = this.gitInv4 || m(this.git4), this.gitInv5 = this.gitInv5 || m(this.git5), this.gitInv6 = this.gitInv6 || m(this.git6), this.gitInv7 = this.gitInv7 || m(this.git7), this.branchLabelColor = this.branchLabelColor || (this.darkMode ? "black" : this.labelTextColor), this.gitBranchLabel0 = this.gitBranchLabel0 || this.branchLabelColor, this.gitBranchLabel1 = this.gitBranchLabel1 || this.branchLabelColor, this.gitBranchLabel2 = this.gitBranchLabel2 || this.branchLabelColor, this.gitBranchLabel3 = this.gitBranchLabel3 || this.branchLabelColor, this.gitBranchLabel4 = this.gitBranchLabel4 || this.branchLabelColor, this.gitBranchLabel5 = this.gitBranchLabel5 || this.branchLabelColor, this.gitBranchLabel6 = this.gitBranchLabel6 || this.branchLabelColor, this.gitBranchLabel7 = this.gitBranchLabel7 || this.branchLabelColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || ar, this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || sr;
  }
  calculate(e) {
    if (typeof e != "object") {
      this.updateColors();
      return;
    }
    const r = Object.keys(e);
    r.forEach((i) => {
      this[i] = e[i];
    }), this.updateColors(), r.forEach((i) => {
      this[i] = e[i];
    });
  }
};
const Bf = (t) => {
  const e = new Sf();
  return e.calculate(t), e;
};
let Ff = class {
  constructor() {
    this.background = "#333", this.primaryColor = "#1f2020", this.secondaryColor = v(this.primaryColor, 16), this.tertiaryColor = d(this.primaryColor, { h: -160 }), this.primaryBorderColor = m(this.background), this.secondaryBorderColor = Z(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = Z(this.tertiaryColor, this.darkMode), this.primaryTextColor = m(this.primaryColor), this.secondaryTextColor = m(this.secondaryColor), this.tertiaryTextColor = m(this.tertiaryColor), this.lineColor = m(this.background), this.textColor = m(this.background), this.mainBkg = "#1f2020", this.secondBkg = "calculated", this.mainContrastColor = "lightgrey", this.darkTextColor = v(m("#323D47"), 10), this.lineColor = "calculated", this.border1 = "#81B1DB", this.border2 = oe(255, 255, 255, 0.25), this.arrowheadColor = "calculated", this.fontFamily = '"trebuchet ms", verdana, arial, sans-serif', this.fontSize = "16px", this.labelBackground = "#181818", this.textColor = "#ccc", this.THEME_COLOR_LIMIT = 12, this.nodeBkg = "calculated", this.nodeBorder = "calculated", this.clusterBkg = "calculated", this.clusterBorder = "calculated", this.defaultLinkColor = "calculated", this.titleColor = "#F9FFFE", this.edgeLabelBackground = "calculated", this.actorBorder = "calculated", this.actorBkg = "calculated", this.actorTextColor = "calculated", this.actorLineColor = "calculated", this.signalColor = "calculated", this.signalTextColor = "calculated", this.labelBoxBkgColor = "calculated", this.labelBoxBorderColor = "calculated", this.labelTextColor = "calculated", this.loopTextColor = "calculated", this.noteBorderColor = "calculated", this.noteBkgColor = "#fff5ad", this.noteTextColor = "calculated", this.activationBorderColor = "calculated", this.activationBkgColor = "calculated", this.sequenceNumberColor = "black", this.sectionBkgColor = F("#EAE8D9", 30), this.altSectionBkgColor = "calculated", this.sectionBkgColor2 = "#EAE8D9", this.excludeBkgColor = F(this.sectionBkgColor, 10), this.taskBorderColor = oe(255, 255, 255, 70), this.taskBkgColor = "calculated", this.taskTextColor = "calculated", this.taskTextLightColor = "calculated", this.taskTextOutsideColor = "calculated", this.taskTextClickableColor = "#003163", this.activeTaskBorderColor = oe(255, 255, 255, 50), this.activeTaskBkgColor = "#81B1DB", this.gridColor = "calculated", this.doneTaskBkgColor = "calculated", this.doneTaskBorderColor = "grey", this.critBorderColor = "#E83737", this.critBkgColor = "#E83737", this.taskTextDarkColor = "calculated", this.todayLineColor = "#DB5757", this.personBorder = this.primaryBorderColor, this.personBkg = this.mainBkg, this.labelColor = "calculated", this.errorBkgColor = "#a44141", this.errorTextColor = "#ddd";
  }
  updateColors() {
    var e, r, i, o, n, a, s, l, c, u, f;
    this.secondBkg = v(this.mainBkg, 16), this.lineColor = this.mainContrastColor, this.arrowheadColor = this.mainContrastColor, this.nodeBkg = this.mainBkg, this.nodeBorder = this.border1, this.clusterBkg = this.secondBkg, this.clusterBorder = this.border2, this.defaultLinkColor = this.lineColor, this.edgeLabelBackground = v(this.labelBackground, 25), this.actorBorder = this.border1, this.actorBkg = this.mainBkg, this.actorTextColor = this.mainContrastColor, this.actorLineColor = this.mainContrastColor, this.signalColor = this.mainContrastColor, this.signalTextColor = this.mainContrastColor, this.labelBoxBkgColor = this.actorBkg, this.labelBoxBorderColor = this.actorBorder, this.labelTextColor = this.mainContrastColor, this.loopTextColor = this.mainContrastColor, this.noteBorderColor = this.secondaryBorderColor, this.noteBkgColor = this.secondBkg, this.noteTextColor = this.secondaryTextColor, this.activationBorderColor = this.border1, this.activationBkgColor = this.secondBkg, this.altSectionBkgColor = this.background, this.taskBkgColor = v(this.mainBkg, 23), this.taskTextColor = this.darkTextColor, this.taskTextLightColor = this.mainContrastColor, this.taskTextOutsideColor = this.taskTextLightColor, this.gridColor = this.mainContrastColor, this.doneTaskBkgColor = this.mainContrastColor, this.taskTextDarkColor = this.darkTextColor, this.transitionColor = this.transitionColor || this.lineColor, this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || "#555", this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.compositeBorder = this.compositeBorder || this.nodeBorder, this.innerEndBackground = this.primaryBorderColor, this.specialStateColor = "#f4f4f4", this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.fillType0 = this.primaryColor, this.fillType1 = this.secondaryColor, this.fillType2 = d(this.primaryColor, { h: 64 }), this.fillType3 = d(this.secondaryColor, { h: 64 }), this.fillType4 = d(this.primaryColor, { h: -64 }), this.fillType5 = d(this.secondaryColor, { h: -64 }), this.fillType6 = d(this.primaryColor, { h: 128 }), this.fillType7 = d(this.secondaryColor, { h: 128 }), this.cScale1 = this.cScale1 || "#0b0000", this.cScale2 = this.cScale2 || "#4d1037", this.cScale3 = this.cScale3 || "#3f5258", this.cScale4 = this.cScale4 || "#4f2f1b", this.cScale5 = this.cScale5 || "#6e0a0a", this.cScale6 = this.cScale6 || "#3b0048", this.cScale7 = this.cScale7 || "#995a01", this.cScale8 = this.cScale8 || "#154706", this.cScale9 = this.cScale9 || "#161722", this.cScale10 = this.cScale10 || "#00296f", this.cScale11 = this.cScale11 || "#01629c", this.cScale12 = this.cScale12 || "#010029", this.cScale0 = this.cScale0 || this.primaryColor, this.cScale1 = this.cScale1 || this.secondaryColor, this.cScale2 = this.cScale2 || this.tertiaryColor, this.cScale3 = this.cScale3 || d(this.primaryColor, { h: 30 }), this.cScale4 = this.cScale4 || d(this.primaryColor, { h: 60 }), this.cScale5 = this.cScale5 || d(this.primaryColor, { h: 90 }), this.cScale6 = this.cScale6 || d(this.primaryColor, { h: 120 }), this.cScale7 = this.cScale7 || d(this.primaryColor, { h: 150 }), this.cScale8 = this.cScale8 || d(this.primaryColor, { h: 210 }), this.cScale9 = this.cScale9 || d(this.primaryColor, { h: 270 }), this.cScale10 = this.cScale10 || d(this.primaryColor, { h: 300 }), this.cScale11 = this.cScale11 || d(this.primaryColor, { h: 330 });
    for (let h = 0; h < this.THEME_COLOR_LIMIT; h++)
      this["cScaleInv" + h] = this["cScaleInv" + h] || m(this["cScale" + h]);
    for (let h = 0; h < this.THEME_COLOR_LIMIT; h++)
      this["cScalePeer" + h] = this["cScalePeer" + h] || v(this["cScale" + h], 10);
    for (let h = 0; h < 5; h++)
      this["surface" + h] = this["surface" + h] || d(this.mainBkg, { h: 30, s: -30, l: -(-10 + h * 4) }), this["surfacePeer" + h] = this["surfacePeer" + h] || d(this.mainBkg, { h: 30, s: -30, l: -(-7 + h * 4) });
    this.scaleLabelColor = this.scaleLabelColor || (this.darkMode ? "black" : this.labelTextColor);
    for (let h = 0; h < this.THEME_COLOR_LIMIT; h++)
      this["cScaleLabel" + h] = this["cScaleLabel" + h] || this.scaleLabelColor;
    for (let h = 0; h < this.THEME_COLOR_LIMIT; h++)
      this["pie" + h] = this["cScale" + h];
    this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7", this.quadrant1Fill = this.quadrant1Fill || this.primaryColor, this.quadrant2Fill = this.quadrant2Fill || d(this.primaryColor, { r: 5, g: 5, b: 5 }), this.quadrant3Fill = this.quadrant3Fill || d(this.primaryColor, { r: 10, g: 10, b: 10 }), this.quadrant4Fill = this.quadrant4Fill || d(this.primaryColor, { r: 15, g: 15, b: 15 }), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || d(this.primaryTextColor, { r: -5, g: -5, b: -5 }), this.quadrant3TextFill = this.quadrant3TextFill || d(this.primaryTextColor, { r: -10, g: -10, b: -10 }), this.quadrant4TextFill = this.quadrant4TextFill || d(this.primaryTextColor, { r: -15, g: -15, b: -15 }), this.quadrantPointFill = this.quadrantPointFill || me(this.quadrant1Fill) ? v(this.quadrant1Fill) : F(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.xyChart = {
      backgroundColor: ((e = this.xyChart) == null ? void 0 : e.backgroundColor) || this.background,
      titleColor: ((r = this.xyChart) == null ? void 0 : r.titleColor) || this.primaryTextColor,
      xAxisTitleColor: ((i = this.xyChart) == null ? void 0 : i.xAxisTitleColor) || this.primaryTextColor,
      xAxisLabelColor: ((o = this.xyChart) == null ? void 0 : o.xAxisLabelColor) || this.primaryTextColor,
      xAxisTickColor: ((n = this.xyChart) == null ? void 0 : n.xAxisTickColor) || this.primaryTextColor,
      xAxisLineColor: ((a = this.xyChart) == null ? void 0 : a.xAxisLineColor) || this.primaryTextColor,
      yAxisTitleColor: ((s = this.xyChart) == null ? void 0 : s.yAxisTitleColor) || this.primaryTextColor,
      yAxisLabelColor: ((l = this.xyChart) == null ? void 0 : l.yAxisLabelColor) || this.primaryTextColor,
      yAxisTickColor: ((c = this.xyChart) == null ? void 0 : c.yAxisTickColor) || this.primaryTextColor,
      yAxisLineColor: ((u = this.xyChart) == null ? void 0 : u.yAxisLineColor) || this.primaryTextColor,
      plotColorPalette: ((f = this.xyChart) == null ? void 0 : f.plotColorPalette) || "#3498db,#2ecc71,#e74c3c,#f1c40f,#bdc3c7,#ffffff,#34495e,#9b59b6,#1abc9c,#e67e22"
    }, this.classText = this.primaryTextColor, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || (this.darkMode ? F(this.secondaryColor, 30) : this.secondaryColor), this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = v(this.secondaryColor, 20), this.git1 = v(this.pie2 || this.secondaryColor, 20), this.git2 = v(this.pie3 || this.tertiaryColor, 20), this.git3 = v(this.pie4 || d(this.primaryColor, { h: -30 }), 20), this.git4 = v(this.pie5 || d(this.primaryColor, { h: -60 }), 20), this.git5 = v(this.pie6 || d(this.primaryColor, { h: -90 }), 10), this.git6 = v(this.pie7 || d(this.primaryColor, { h: 60 }), 10), this.git7 = v(this.pie8 || d(this.primaryColor, { h: 120 }), 20), this.gitInv0 = this.gitInv0 || m(this.git0), this.gitInv1 = this.gitInv1 || m(this.git1), this.gitInv2 = this.gitInv2 || m(this.git2), this.gitInv3 = this.gitInv3 || m(this.git3), this.gitInv4 = this.gitInv4 || m(this.git4), this.gitInv5 = this.gitInv5 || m(this.git5), this.gitInv6 = this.gitInv6 || m(this.git6), this.gitInv7 = this.gitInv7 || m(this.git7), this.gitBranchLabel0 = this.gitBranchLabel0 || m(this.labelTextColor), this.gitBranchLabel1 = this.gitBranchLabel1 || this.labelTextColor, this.gitBranchLabel2 = this.gitBranchLabel2 || this.labelTextColor, this.gitBranchLabel3 = this.gitBranchLabel3 || m(this.labelTextColor), this.gitBranchLabel4 = this.gitBranchLabel4 || this.labelTextColor, this.gitBranchLabel5 = this.gitBranchLabel5 || this.labelTextColor, this.gitBranchLabel6 = this.gitBranchLabel6 || this.labelTextColor, this.gitBranchLabel7 = this.gitBranchLabel7 || this.labelTextColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || v(this.background, 12), this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || v(this.background, 2);
  }
  calculate(e) {
    if (typeof e != "object") {
      this.updateColors();
      return;
    }
    const r = Object.keys(e);
    r.forEach((i) => {
      this[i] = e[i];
    }), this.updateColors(), r.forEach((i) => {
      this[i] = e[i];
    });
  }
};
const wf = (t) => {
  const e = new Ff();
  return e.calculate(t), e;
};
let Lf = class {
  constructor() {
    this.background = "#f4f4f4", this.primaryColor = "#ECECFF", this.secondaryColor = d(this.primaryColor, { h: 120 }), this.secondaryColor = "#ffffde", this.tertiaryColor = d(this.primaryColor, { h: -160 }), this.primaryBorderColor = Z(this.primaryColor, this.darkMode), this.secondaryBorderColor = Z(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = Z(this.tertiaryColor, this.darkMode), this.primaryTextColor = m(this.primaryColor), this.secondaryTextColor = m(this.secondaryColor), this.tertiaryTextColor = m(this.tertiaryColor), this.lineColor = m(this.background), this.textColor = m(this.background), this.background = "white", this.mainBkg = "#ECECFF", this.secondBkg = "#ffffde", this.lineColor = "#333333", this.border1 = "#9370DB", this.border2 = "#aaaa33", this.arrowheadColor = "#333333", this.fontFamily = '"trebuchet ms", verdana, arial, sans-serif', this.fontSize = "16px", this.labelBackground = "#e8e8e8", this.textColor = "#333", this.THEME_COLOR_LIMIT = 12, this.nodeBkg = "calculated", this.nodeBorder = "calculated", this.clusterBkg = "calculated", this.clusterBorder = "calculated", this.defaultLinkColor = "calculated", this.titleColor = "calculated", this.edgeLabelBackground = "calculated", this.actorBorder = "calculated", this.actorBkg = "calculated", this.actorTextColor = "black", this.actorLineColor = "grey", this.signalColor = "calculated", this.signalTextColor = "calculated", this.labelBoxBkgColor = "calculated", this.labelBoxBorderColor = "calculated", this.labelTextColor = "calculated", this.loopTextColor = "calculated", this.noteBorderColor = "calculated", this.noteBkgColor = "#fff5ad", this.noteTextColor = "calculated", this.activationBorderColor = "#666", this.activationBkgColor = "#f4f4f4", this.sequenceNumberColor = "white", this.sectionBkgColor = "calculated", this.altSectionBkgColor = "calculated", this.sectionBkgColor2 = "calculated", this.excludeBkgColor = "#eeeeee", this.taskBorderColor = "calculated", this.taskBkgColor = "calculated", this.taskTextLightColor = "calculated", this.taskTextColor = this.taskTextLightColor, this.taskTextDarkColor = "calculated", this.taskTextOutsideColor = this.taskTextDarkColor, this.taskTextClickableColor = "calculated", this.activeTaskBorderColor = "calculated", this.activeTaskBkgColor = "calculated", this.gridColor = "calculated", this.doneTaskBkgColor = "calculated", this.doneTaskBorderColor = "calculated", this.critBorderColor = "calculated", this.critBkgColor = "calculated", this.todayLineColor = "calculated", this.sectionBkgColor = oe(102, 102, 255, 0.49), this.altSectionBkgColor = "white", this.sectionBkgColor2 = "#fff400", this.taskBorderColor = "#534fbc", this.taskBkgColor = "#8a90dd", this.taskTextLightColor = "white", this.taskTextColor = "calculated", this.taskTextDarkColor = "black", this.taskTextOutsideColor = "calculated", this.taskTextClickableColor = "#003163", this.activeTaskBorderColor = "#534fbc", this.activeTaskBkgColor = "#bfc7ff", this.gridColor = "lightgrey", this.doneTaskBkgColor = "lightgrey", this.doneTaskBorderColor = "grey", this.critBorderColor = "#ff8888", this.critBkgColor = "red", this.todayLineColor = "red", this.personBorder = this.primaryBorderColor, this.personBkg = this.mainBkg, this.labelColor = "black", this.errorBkgColor = "#552222", this.errorTextColor = "#552222", this.updateColors();
  }
  updateColors() {
    var e, r, i, o, n, a, s, l, c, u, f;
    this.cScale0 = this.cScale0 || this.primaryColor, this.cScale1 = this.cScale1 || this.secondaryColor, this.cScale2 = this.cScale2 || this.tertiaryColor, this.cScale3 = this.cScale3 || d(this.primaryColor, { h: 30 }), this.cScale4 = this.cScale4 || d(this.primaryColor, { h: 60 }), this.cScale5 = this.cScale5 || d(this.primaryColor, { h: 90 }), this.cScale6 = this.cScale6 || d(this.primaryColor, { h: 120 }), this.cScale7 = this.cScale7 || d(this.primaryColor, { h: 150 }), this.cScale8 = this.cScale8 || d(this.primaryColor, { h: 210 }), this.cScale9 = this.cScale9 || d(this.primaryColor, { h: 270 }), this.cScale10 = this.cScale10 || d(this.primaryColor, { h: 300 }), this.cScale11 = this.cScale11 || d(this.primaryColor, { h: 330 }), this.cScalePeer1 = this.cScalePeer1 || F(this.secondaryColor, 45), this.cScalePeer2 = this.cScalePeer2 || F(this.tertiaryColor, 40);
    for (let h = 0; h < this.THEME_COLOR_LIMIT; h++)
      this["cScale" + h] = F(this["cScale" + h], 10), this["cScalePeer" + h] = this["cScalePeer" + h] || F(this["cScale" + h], 25);
    for (let h = 0; h < this.THEME_COLOR_LIMIT; h++)
      this["cScaleInv" + h] = this["cScaleInv" + h] || d(this["cScale" + h], { h: 180 });
    for (let h = 0; h < 5; h++)
      this["surface" + h] = this["surface" + h] || d(this.mainBkg, { h: 30, l: -(5 + h * 5) }), this["surfacePeer" + h] = this["surfacePeer" + h] || d(this.mainBkg, { h: 30, l: -(7 + h * 5) });
    if (this.scaleLabelColor = this.scaleLabelColor !== "calculated" && this.scaleLabelColor ? this.scaleLabelColor : this.labelTextColor, this.labelTextColor !== "calculated") {
      this.cScaleLabel0 = this.cScaleLabel0 || m(this.labelTextColor), this.cScaleLabel3 = this.cScaleLabel3 || m(this.labelTextColor);
      for (let h = 0; h < this.THEME_COLOR_LIMIT; h++)
        this["cScaleLabel" + h] = this["cScaleLabel" + h] || this.labelTextColor;
    }
    this.nodeBkg = this.mainBkg, this.nodeBorder = this.border1, this.clusterBkg = this.secondBkg, this.clusterBorder = this.border2, this.defaultLinkColor = this.lineColor, this.titleColor = this.textColor, this.edgeLabelBackground = this.labelBackground, this.actorBorder = v(this.border1, 23), this.actorBkg = this.mainBkg, this.labelBoxBkgColor = this.actorBkg, this.signalColor = this.textColor, this.signalTextColor = this.textColor, this.labelBoxBorderColor = this.actorBorder, this.labelTextColor = this.actorTextColor, this.loopTextColor = this.actorTextColor, this.noteBorderColor = this.border2, this.noteTextColor = this.actorTextColor, this.taskTextColor = this.taskTextLightColor, this.taskTextOutsideColor = this.taskTextDarkColor, this.transitionColor = this.transitionColor || this.lineColor, this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || "#f0f0f0", this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.compositeBorder = this.compositeBorder || this.nodeBorder, this.innerEndBackground = this.nodeBorder, this.specialStateColor = this.lineColor, this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.transitionColor = this.transitionColor || this.lineColor, this.classText = this.primaryTextColor, this.fillType0 = this.primaryColor, this.fillType1 = this.secondaryColor, this.fillType2 = d(this.primaryColor, { h: 64 }), this.fillType3 = d(this.secondaryColor, { h: 64 }), this.fillType4 = d(this.primaryColor, { h: -64 }), this.fillType5 = d(this.secondaryColor, { h: -64 }), this.fillType6 = d(this.primaryColor, { h: 128 }), this.fillType7 = d(this.secondaryColor, { h: 128 }), this.pie1 = this.pie1 || this.primaryColor, this.pie2 = this.pie2 || this.secondaryColor, this.pie3 = this.pie3 || d(this.tertiaryColor, { l: -40 }), this.pie4 = this.pie4 || d(this.primaryColor, { l: -10 }), this.pie5 = this.pie5 || d(this.secondaryColor, { l: -30 }), this.pie6 = this.pie6 || d(this.tertiaryColor, { l: -20 }), this.pie7 = this.pie7 || d(this.primaryColor, { h: 60, l: -20 }), this.pie8 = this.pie8 || d(this.primaryColor, { h: -60, l: -40 }), this.pie9 = this.pie9 || d(this.primaryColor, { h: 120, l: -40 }), this.pie10 = this.pie10 || d(this.primaryColor, { h: 60, l: -40 }), this.pie11 = this.pie11 || d(this.primaryColor, { h: -90, l: -40 }), this.pie12 = this.pie12 || d(this.primaryColor, { h: 120, l: -30 }), this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7", this.quadrant1Fill = this.quadrant1Fill || this.primaryColor, this.quadrant2Fill = this.quadrant2Fill || d(this.primaryColor, { r: 5, g: 5, b: 5 }), this.quadrant3Fill = this.quadrant3Fill || d(this.primaryColor, { r: 10, g: 10, b: 10 }), this.quadrant4Fill = this.quadrant4Fill || d(this.primaryColor, { r: 15, g: 15, b: 15 }), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || d(this.primaryTextColor, { r: -5, g: -5, b: -5 }), this.quadrant3TextFill = this.quadrant3TextFill || d(this.primaryTextColor, { r: -10, g: -10, b: -10 }), this.quadrant4TextFill = this.quadrant4TextFill || d(this.primaryTextColor, { r: -15, g: -15, b: -15 }), this.quadrantPointFill = this.quadrantPointFill || me(this.quadrant1Fill) ? v(this.quadrant1Fill) : F(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.xyChart = {
      backgroundColor: ((e = this.xyChart) == null ? void 0 : e.backgroundColor) || this.background,
      titleColor: ((r = this.xyChart) == null ? void 0 : r.titleColor) || this.primaryTextColor,
      xAxisTitleColor: ((i = this.xyChart) == null ? void 0 : i.xAxisTitleColor) || this.primaryTextColor,
      xAxisLabelColor: ((o = this.xyChart) == null ? void 0 : o.xAxisLabelColor) || this.primaryTextColor,
      xAxisTickColor: ((n = this.xyChart) == null ? void 0 : n.xAxisTickColor) || this.primaryTextColor,
      xAxisLineColor: ((a = this.xyChart) == null ? void 0 : a.xAxisLineColor) || this.primaryTextColor,
      yAxisTitleColor: ((s = this.xyChart) == null ? void 0 : s.yAxisTitleColor) || this.primaryTextColor,
      yAxisLabelColor: ((l = this.xyChart) == null ? void 0 : l.yAxisLabelColor) || this.primaryTextColor,
      yAxisTickColor: ((c = this.xyChart) == null ? void 0 : c.yAxisTickColor) || this.primaryTextColor,
      yAxisLineColor: ((u = this.xyChart) == null ? void 0 : u.yAxisLineColor) || this.primaryTextColor,
      plotColorPalette: ((f = this.xyChart) == null ? void 0 : f.plotColorPalette) || "#ECECFF,#8493A6,#FFC3A0,#DCDDE1,#B8E994,#D1A36F,#C3CDE6,#FFB6C1,#496078,#F8F3E3"
    }, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || this.labelBackground, this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = this.git0 || this.primaryColor, this.git1 = this.git1 || this.secondaryColor, this.git2 = this.git2 || this.tertiaryColor, this.git3 = this.git3 || d(this.primaryColor, { h: -30 }), this.git4 = this.git4 || d(this.primaryColor, { h: -60 }), this.git5 = this.git5 || d(this.primaryColor, { h: -90 }), this.git6 = this.git6 || d(this.primaryColor, { h: 60 }), this.git7 = this.git7 || d(this.primaryColor, { h: 120 }), this.darkMode ? (this.git0 = v(this.git0, 25), this.git1 = v(this.git1, 25), this.git2 = v(this.git2, 25), this.git3 = v(this.git3, 25), this.git4 = v(this.git4, 25), this.git5 = v(this.git5, 25), this.git6 = v(this.git6, 25), this.git7 = v(this.git7, 25)) : (this.git0 = F(this.git0, 25), this.git1 = F(this.git1, 25), this.git2 = F(this.git2, 25), this.git3 = F(this.git3, 25), this.git4 = F(this.git4, 25), this.git5 = F(this.git5, 25), this.git6 = F(this.git6, 25), this.git7 = F(this.git7, 25)), this.gitInv0 = this.gitInv0 || F(m(this.git0), 25), this.gitInv1 = this.gitInv1 || m(this.git1), this.gitInv2 = this.gitInv2 || m(this.git2), this.gitInv3 = this.gitInv3 || m(this.git3), this.gitInv4 = this.gitInv4 || m(this.git4), this.gitInv5 = this.gitInv5 || m(this.git5), this.gitInv6 = this.gitInv6 || m(this.git6), this.gitInv7 = this.gitInv7 || m(this.git7), this.gitBranchLabel0 = this.gitBranchLabel0 || m(this.labelTextColor), this.gitBranchLabel1 = this.gitBranchLabel1 || this.labelTextColor, this.gitBranchLabel2 = this.gitBranchLabel2 || this.labelTextColor, this.gitBranchLabel3 = this.gitBranchLabel3 || m(this.labelTextColor), this.gitBranchLabel4 = this.gitBranchLabel4 || this.labelTextColor, this.gitBranchLabel5 = this.gitBranchLabel5 || this.labelTextColor, this.gitBranchLabel6 = this.gitBranchLabel6 || this.labelTextColor, this.gitBranchLabel7 = this.gitBranchLabel7 || this.labelTextColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || ar, this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || sr;
  }
  calculate(e) {
    if (typeof e != "object") {
      this.updateColors();
      return;
    }
    const r = Object.keys(e);
    r.forEach((i) => {
      this[i] = e[i];
    }), this.updateColors(), r.forEach((i) => {
      this[i] = e[i];
    });
  }
};
const Af = (t) => {
  const e = new Lf();
  return e.calculate(t), e;
};
let $f = class {
  constructor() {
    this.background = "#f4f4f4", this.primaryColor = "#cde498", this.secondaryColor = "#cdffb2", this.background = "white", this.mainBkg = "#cde498", this.secondBkg = "#cdffb2", this.lineColor = "green", this.border1 = "#13540c", this.border2 = "#6eaa49", this.arrowheadColor = "green", this.fontFamily = '"trebuchet ms", verdana, arial, sans-serif', this.fontSize = "16px", this.tertiaryColor = v("#cde498", 10), this.primaryBorderColor = Z(this.primaryColor, this.darkMode), this.secondaryBorderColor = Z(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = Z(this.tertiaryColor, this.darkMode), this.primaryTextColor = m(this.primaryColor), this.secondaryTextColor = m(this.secondaryColor), this.tertiaryTextColor = m(this.primaryColor), this.lineColor = m(this.background), this.textColor = m(this.background), this.THEME_COLOR_LIMIT = 12, this.nodeBkg = "calculated", this.nodeBorder = "calculated", this.clusterBkg = "calculated", this.clusterBorder = "calculated", this.defaultLinkColor = "calculated", this.titleColor = "#333", this.edgeLabelBackground = "#e8e8e8", this.actorBorder = "calculated", this.actorBkg = "calculated", this.actorTextColor = "black", this.actorLineColor = "grey", this.signalColor = "#333", this.signalTextColor = "#333", this.labelBoxBkgColor = "calculated", this.labelBoxBorderColor = "#326932", this.labelTextColor = "calculated", this.loopTextColor = "calculated", this.noteBorderColor = "calculated", this.noteBkgColor = "#fff5ad", this.noteTextColor = "calculated", this.activationBorderColor = "#666", this.activationBkgColor = "#f4f4f4", this.sequenceNumberColor = "white", this.sectionBkgColor = "#6eaa49", this.altSectionBkgColor = "white", this.sectionBkgColor2 = "#6eaa49", this.excludeBkgColor = "#eeeeee", this.taskBorderColor = "calculated", this.taskBkgColor = "#487e3a", this.taskTextLightColor = "white", this.taskTextColor = "calculated", this.taskTextDarkColor = "black", this.taskTextOutsideColor = "calculated", this.taskTextClickableColor = "#003163", this.activeTaskBorderColor = "calculated", this.activeTaskBkgColor = "calculated", this.gridColor = "lightgrey", this.doneTaskBkgColor = "lightgrey", this.doneTaskBorderColor = "grey", this.critBorderColor = "#ff8888", this.critBkgColor = "red", this.todayLineColor = "red", this.personBorder = this.primaryBorderColor, this.personBkg = this.mainBkg, this.labelColor = "black", this.errorBkgColor = "#552222", this.errorTextColor = "#552222";
  }
  updateColors() {
    var e, r, i, o, n, a, s, l, c, u, f;
    this.actorBorder = F(this.mainBkg, 20), this.actorBkg = this.mainBkg, this.labelBoxBkgColor = this.actorBkg, this.labelTextColor = this.actorTextColor, this.loopTextColor = this.actorTextColor, this.noteBorderColor = this.border2, this.noteTextColor = this.actorTextColor, this.cScale0 = this.cScale0 || this.primaryColor, this.cScale1 = this.cScale1 || this.secondaryColor, this.cScale2 = this.cScale2 || this.tertiaryColor, this.cScale3 = this.cScale3 || d(this.primaryColor, { h: 30 }), this.cScale4 = this.cScale4 || d(this.primaryColor, { h: 60 }), this.cScale5 = this.cScale5 || d(this.primaryColor, { h: 90 }), this.cScale6 = this.cScale6 || d(this.primaryColor, { h: 120 }), this.cScale7 = this.cScale7 || d(this.primaryColor, { h: 150 }), this.cScale8 = this.cScale8 || d(this.primaryColor, { h: 210 }), this.cScale9 = this.cScale9 || d(this.primaryColor, { h: 270 }), this.cScale10 = this.cScale10 || d(this.primaryColor, { h: 300 }), this.cScale11 = this.cScale11 || d(this.primaryColor, { h: 330 }), this.cScalePeer1 = this.cScalePeer1 || F(this.secondaryColor, 45), this.cScalePeer2 = this.cScalePeer2 || F(this.tertiaryColor, 40);
    for (let h = 0; h < this.THEME_COLOR_LIMIT; h++)
      this["cScale" + h] = F(this["cScale" + h], 10), this["cScalePeer" + h] = this["cScalePeer" + h] || F(this["cScale" + h], 25);
    for (let h = 0; h < this.THEME_COLOR_LIMIT; h++)
      this["cScaleInv" + h] = this["cScaleInv" + h] || d(this["cScale" + h], { h: 180 });
    this.scaleLabelColor = this.scaleLabelColor !== "calculated" && this.scaleLabelColor ? this.scaleLabelColor : this.labelTextColor;
    for (let h = 0; h < this.THEME_COLOR_LIMIT; h++)
      this["cScaleLabel" + h] = this["cScaleLabel" + h] || this.scaleLabelColor;
    for (let h = 0; h < 5; h++)
      this["surface" + h] = this["surface" + h] || d(this.mainBkg, { h: 30, s: -30, l: -(5 + h * 5) }), this["surfacePeer" + h] = this["surfacePeer" + h] || d(this.mainBkg, { h: 30, s: -30, l: -(8 + h * 5) });
    this.nodeBkg = this.mainBkg, this.nodeBorder = this.border1, this.clusterBkg = this.secondBkg, this.clusterBorder = this.border2, this.defaultLinkColor = this.lineColor, this.taskBorderColor = this.border1, this.taskTextColor = this.taskTextLightColor, this.taskTextOutsideColor = this.taskTextDarkColor, this.activeTaskBorderColor = this.taskBorderColor, this.activeTaskBkgColor = this.mainBkg, this.transitionColor = this.transitionColor || this.lineColor, this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || "#f0f0f0", this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.compositeBorder = this.compositeBorder || this.nodeBorder, this.innerEndBackground = this.primaryBorderColor, this.specialStateColor = this.lineColor, this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.transitionColor = this.transitionColor || this.lineColor, this.classText = this.primaryTextColor, this.fillType0 = this.primaryColor, this.fillType1 = this.secondaryColor, this.fillType2 = d(this.primaryColor, { h: 64 }), this.fillType3 = d(this.secondaryColor, { h: 64 }), this.fillType4 = d(this.primaryColor, { h: -64 }), this.fillType5 = d(this.secondaryColor, { h: -64 }), this.fillType6 = d(this.primaryColor, { h: 128 }), this.fillType7 = d(this.secondaryColor, { h: 128 }), this.pie1 = this.pie1 || this.primaryColor, this.pie2 = this.pie2 || this.secondaryColor, this.pie3 = this.pie3 || this.tertiaryColor, this.pie4 = this.pie4 || d(this.primaryColor, { l: -30 }), this.pie5 = this.pie5 || d(this.secondaryColor, { l: -30 }), this.pie6 = this.pie6 || d(this.tertiaryColor, { h: 40, l: -40 }), this.pie7 = this.pie7 || d(this.primaryColor, { h: 60, l: -10 }), this.pie8 = this.pie8 || d(this.primaryColor, { h: -60, l: -10 }), this.pie9 = this.pie9 || d(this.primaryColor, { h: 120, l: 0 }), this.pie10 = this.pie10 || d(this.primaryColor, { h: 60, l: -50 }), this.pie11 = this.pie11 || d(this.primaryColor, { h: -60, l: -50 }), this.pie12 = this.pie12 || d(this.primaryColor, { h: 120, l: -50 }), this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7", this.quadrant1Fill = this.quadrant1Fill || this.primaryColor, this.quadrant2Fill = this.quadrant2Fill || d(this.primaryColor, { r: 5, g: 5, b: 5 }), this.quadrant3Fill = this.quadrant3Fill || d(this.primaryColor, { r: 10, g: 10, b: 10 }), this.quadrant4Fill = this.quadrant4Fill || d(this.primaryColor, { r: 15, g: 15, b: 15 }), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || d(this.primaryTextColor, { r: -5, g: -5, b: -5 }), this.quadrant3TextFill = this.quadrant3TextFill || d(this.primaryTextColor, { r: -10, g: -10, b: -10 }), this.quadrant4TextFill = this.quadrant4TextFill || d(this.primaryTextColor, { r: -15, g: -15, b: -15 }), this.quadrantPointFill = this.quadrantPointFill || me(this.quadrant1Fill) ? v(this.quadrant1Fill) : F(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.xyChart = {
      backgroundColor: ((e = this.xyChart) == null ? void 0 : e.backgroundColor) || this.background,
      titleColor: ((r = this.xyChart) == null ? void 0 : r.titleColor) || this.primaryTextColor,
      xAxisTitleColor: ((i = this.xyChart) == null ? void 0 : i.xAxisTitleColor) || this.primaryTextColor,
      xAxisLabelColor: ((o = this.xyChart) == null ? void 0 : o.xAxisLabelColor) || this.primaryTextColor,
      xAxisTickColor: ((n = this.xyChart) == null ? void 0 : n.xAxisTickColor) || this.primaryTextColor,
      xAxisLineColor: ((a = this.xyChart) == null ? void 0 : a.xAxisLineColor) || this.primaryTextColor,
      yAxisTitleColor: ((s = this.xyChart) == null ? void 0 : s.yAxisTitleColor) || this.primaryTextColor,
      yAxisLabelColor: ((l = this.xyChart) == null ? void 0 : l.yAxisLabelColor) || this.primaryTextColor,
      yAxisTickColor: ((c = this.xyChart) == null ? void 0 : c.yAxisTickColor) || this.primaryTextColor,
      yAxisLineColor: ((u = this.xyChart) == null ? void 0 : u.yAxisLineColor) || this.primaryTextColor,
      plotColorPalette: ((f = this.xyChart) == null ? void 0 : f.plotColorPalette) || "#CDE498,#FF6B6B,#A0D2DB,#D7BDE2,#F0F0F0,#FFC3A0,#7FD8BE,#FF9A8B,#FAF3E0,#FFF176"
    }, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || this.edgeLabelBackground, this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = this.git0 || this.primaryColor, this.git1 = this.git1 || this.secondaryColor, this.git2 = this.git2 || this.tertiaryColor, this.git3 = this.git3 || d(this.primaryColor, { h: -30 }), this.git4 = this.git4 || d(this.primaryColor, { h: -60 }), this.git5 = this.git5 || d(this.primaryColor, { h: -90 }), this.git6 = this.git6 || d(this.primaryColor, { h: 60 }), this.git7 = this.git7 || d(this.primaryColor, { h: 120 }), this.darkMode ? (this.git0 = v(this.git0, 25), this.git1 = v(this.git1, 25), this.git2 = v(this.git2, 25), this.git3 = v(this.git3, 25), this.git4 = v(this.git4, 25), this.git5 = v(this.git5, 25), this.git6 = v(this.git6, 25), this.git7 = v(this.git7, 25)) : (this.git0 = F(this.git0, 25), this.git1 = F(this.git1, 25), this.git2 = F(this.git2, 25), this.git3 = F(this.git3, 25), this.git4 = F(this.git4, 25), this.git5 = F(this.git5, 25), this.git6 = F(this.git6, 25), this.git7 = F(this.git7, 25)), this.gitInv0 = this.gitInv0 || m(this.git0), this.gitInv1 = this.gitInv1 || m(this.git1), this.gitInv2 = this.gitInv2 || m(this.git2), this.gitInv3 = this.gitInv3 || m(this.git3), this.gitInv4 = this.gitInv4 || m(this.git4), this.gitInv5 = this.gitInv5 || m(this.git5), this.gitInv6 = this.gitInv6 || m(this.git6), this.gitInv7 = this.gitInv7 || m(this.git7), this.gitBranchLabel0 = this.gitBranchLabel0 || m(this.labelTextColor), this.gitBranchLabel1 = this.gitBranchLabel1 || this.labelTextColor, this.gitBranchLabel2 = this.gitBranchLabel2 || this.labelTextColor, this.gitBranchLabel3 = this.gitBranchLabel3 || m(this.labelTextColor), this.gitBranchLabel4 = this.gitBranchLabel4 || this.labelTextColor, this.gitBranchLabel5 = this.gitBranchLabel5 || this.labelTextColor, this.gitBranchLabel6 = this.gitBranchLabel6 || this.labelTextColor, this.gitBranchLabel7 = this.gitBranchLabel7 || this.labelTextColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || ar, this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || sr;
  }
  calculate(e) {
    if (typeof e != "object") {
      this.updateColors();
      return;
    }
    const r = Object.keys(e);
    r.forEach((i) => {
      this[i] = e[i];
    }), this.updateColors(), r.forEach((i) => {
      this[i] = e[i];
    });
  }
};
const Of = (t) => {
  const e = new $f();
  return e.calculate(t), e;
};
class Ef {
  constructor() {
    this.primaryColor = "#eee", this.contrast = "#707070", this.secondaryColor = v(this.contrast, 55), this.background = "#ffffff", this.tertiaryColor = d(this.primaryColor, { h: -160 }), this.primaryBorderColor = Z(this.primaryColor, this.darkMode), this.secondaryBorderColor = Z(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = Z(this.tertiaryColor, this.darkMode), this.primaryTextColor = m(this.primaryColor), this.secondaryTextColor = m(this.secondaryColor), this.tertiaryTextColor = m(this.tertiaryColor), this.lineColor = m(this.background), this.textColor = m(this.background), this.mainBkg = "#eee", this.secondBkg = "calculated", this.lineColor = "#666", this.border1 = "#999", this.border2 = "calculated", this.note = "#ffa", this.text = "#333", this.critical = "#d42", this.done = "#bbb", this.arrowheadColor = "#333333", this.fontFamily = '"trebuchet ms", verdana, arial, sans-serif', this.fontSize = "16px", this.THEME_COLOR_LIMIT = 12, this.nodeBkg = "calculated", this.nodeBorder = "calculated", this.clusterBkg = "calculated", this.clusterBorder = "calculated", this.defaultLinkColor = "calculated", this.titleColor = "calculated", this.edgeLabelBackground = "white", this.actorBorder = "calculated", this.actorBkg = "calculated", this.actorTextColor = "calculated", this.actorLineColor = "calculated", this.signalColor = "calculated", this.signalTextColor = "calculated", this.labelBoxBkgColor = "calculated", this.labelBoxBorderColor = "calculated", this.labelTextColor = "calculated", this.loopTextColor = "calculated", this.noteBorderColor = "calculated", this.noteBkgColor = "calculated", this.noteTextColor = "calculated", this.activationBorderColor = "#666", this.activationBkgColor = "#f4f4f4", this.sequenceNumberColor = "white", this.sectionBkgColor = "calculated", this.altSectionBkgColor = "white", this.sectionBkgColor2 = "calculated", this.excludeBkgColor = "#eeeeee", this.taskBorderColor = "calculated", this.taskBkgColor = "calculated", this.taskTextLightColor = "white", this.taskTextColor = "calculated", this.taskTextDarkColor = "calculated", this.taskTextOutsideColor = "calculated", this.taskTextClickableColor = "#003163", this.activeTaskBorderColor = "calculated", this.activeTaskBkgColor = "calculated", this.gridColor = "calculated", this.doneTaskBkgColor = "calculated", this.doneTaskBorderColor = "calculated", this.critBkgColor = "calculated", this.critBorderColor = "calculated", this.todayLineColor = "calculated", this.personBorder = this.primaryBorderColor, this.personBkg = this.mainBkg, this.labelColor = "black", this.errorBkgColor = "#552222", this.errorTextColor = "#552222";
  }
  updateColors() {
    var e, r, i, o, n, a, s, l, c, u, f;
    this.secondBkg = v(this.contrast, 55), this.border2 = this.contrast, this.actorBorder = v(this.border1, 23), this.actorBkg = this.mainBkg, this.actorTextColor = this.text, this.actorLineColor = this.lineColor, this.signalColor = this.text, this.signalTextColor = this.text, this.labelBoxBkgColor = this.actorBkg, this.labelBoxBorderColor = this.actorBorder, this.labelTextColor = this.text, this.loopTextColor = this.text, this.noteBorderColor = "#999", this.noteBkgColor = "#666", this.noteTextColor = "#fff", this.cScale0 = this.cScale0 || "#555", this.cScale1 = this.cScale1 || "#F4F4F4", this.cScale2 = this.cScale2 || "#555", this.cScale3 = this.cScale3 || "#BBB", this.cScale4 = this.cScale4 || "#777", this.cScale5 = this.cScale5 || "#999", this.cScale6 = this.cScale6 || "#DDD", this.cScale7 = this.cScale7 || "#FFF", this.cScale8 = this.cScale8 || "#DDD", this.cScale9 = this.cScale9 || "#BBB", this.cScale10 = this.cScale10 || "#999", this.cScale11 = this.cScale11 || "#777";
    for (let h = 0; h < this.THEME_COLOR_LIMIT; h++)
      this["cScaleInv" + h] = this["cScaleInv" + h] || m(this["cScale" + h]);
    for (let h = 0; h < this.THEME_COLOR_LIMIT; h++)
      this.darkMode ? this["cScalePeer" + h] = this["cScalePeer" + h] || v(this["cScale" + h], 10) : this["cScalePeer" + h] = this["cScalePeer" + h] || F(this["cScale" + h], 10);
    this.scaleLabelColor = this.scaleLabelColor || (this.darkMode ? "black" : this.labelTextColor), this.cScaleLabel0 = this.cScaleLabel0 || this.cScale1, this.cScaleLabel2 = this.cScaleLabel2 || this.cScale1;
    for (let h = 0; h < this.THEME_COLOR_LIMIT; h++)
      this["cScaleLabel" + h] = this["cScaleLabel" + h] || this.scaleLabelColor;
    for (let h = 0; h < 5; h++)
      this["surface" + h] = this["surface" + h] || d(this.mainBkg, { l: -(5 + h * 5) }), this["surfacePeer" + h] = this["surfacePeer" + h] || d(this.mainBkg, { l: -(8 + h * 5) });
    this.nodeBkg = this.mainBkg, this.nodeBorder = this.border1, this.clusterBkg = this.secondBkg, this.clusterBorder = this.border2, this.defaultLinkColor = this.lineColor, this.titleColor = this.text, this.sectionBkgColor = v(this.contrast, 30), this.sectionBkgColor2 = v(this.contrast, 30), this.taskBorderColor = F(this.contrast, 10), this.taskBkgColor = this.contrast, this.taskTextColor = this.taskTextLightColor, this.taskTextDarkColor = this.text, this.taskTextOutsideColor = this.taskTextDarkColor, this.activeTaskBorderColor = this.taskBorderColor, this.activeTaskBkgColor = this.mainBkg, this.gridColor = v(this.border1, 30), this.doneTaskBkgColor = this.done, this.doneTaskBorderColor = this.lineColor, this.critBkgColor = this.critical, this.critBorderColor = F(this.critBkgColor, 10), this.todayLineColor = this.critBkgColor, this.transitionColor = this.transitionColor || "#000", this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || "#f4f4f4", this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.stateBorder = this.stateBorder || "#000", this.innerEndBackground = this.primaryBorderColor, this.specialStateColor = "#222", this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.classText = this.primaryTextColor, this.fillType0 = this.primaryColor, this.fillType1 = this.secondaryColor, this.fillType2 = d(this.primaryColor, { h: 64 }), this.fillType3 = d(this.secondaryColor, { h: 64 }), this.fillType4 = d(this.primaryColor, { h: -64 }), this.fillType5 = d(this.secondaryColor, { h: -64 }), this.fillType6 = d(this.primaryColor, { h: 128 }), this.fillType7 = d(this.secondaryColor, { h: 128 });
    for (let h = 0; h < this.THEME_COLOR_LIMIT; h++)
      this["pie" + h] = this["cScale" + h];
    this.pie12 = this.pie0, this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7", this.quadrant1Fill = this.quadrant1Fill || this.primaryColor, this.quadrant2Fill = this.quadrant2Fill || d(this.primaryColor, { r: 5, g: 5, b: 5 }), this.quadrant3Fill = this.quadrant3Fill || d(this.primaryColor, { r: 10, g: 10, b: 10 }), this.quadrant4Fill = this.quadrant4Fill || d(this.primaryColor, { r: 15, g: 15, b: 15 }), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || d(this.primaryTextColor, { r: -5, g: -5, b: -5 }), this.quadrant3TextFill = this.quadrant3TextFill || d(this.primaryTextColor, { r: -10, g: -10, b: -10 }), this.quadrant4TextFill = this.quadrant4TextFill || d(this.primaryTextColor, { r: -15, g: -15, b: -15 }), this.quadrantPointFill = this.quadrantPointFill || me(this.quadrant1Fill) ? v(this.quadrant1Fill) : F(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.xyChart = {
      backgroundColor: ((e = this.xyChart) == null ? void 0 : e.backgroundColor) || this.background,
      titleColor: ((r = this.xyChart) == null ? void 0 : r.titleColor) || this.primaryTextColor,
      xAxisTitleColor: ((i = this.xyChart) == null ? void 0 : i.xAxisTitleColor) || this.primaryTextColor,
      xAxisLabelColor: ((o = this.xyChart) == null ? void 0 : o.xAxisLabelColor) || this.primaryTextColor,
      xAxisTickColor: ((n = this.xyChart) == null ? void 0 : n.xAxisTickColor) || this.primaryTextColor,
      xAxisLineColor: ((a = this.xyChart) == null ? void 0 : a.xAxisLineColor) || this.primaryTextColor,
      yAxisTitleColor: ((s = this.xyChart) == null ? void 0 : s.yAxisTitleColor) || this.primaryTextColor,
      yAxisLabelColor: ((l = this.xyChart) == null ? void 0 : l.yAxisLabelColor) || this.primaryTextColor,
      yAxisTickColor: ((c = this.xyChart) == null ? void 0 : c.yAxisTickColor) || this.primaryTextColor,
      yAxisLineColor: ((u = this.xyChart) == null ? void 0 : u.yAxisLineColor) || this.primaryTextColor,
      plotColorPalette: ((f = this.xyChart) == null ? void 0 : f.plotColorPalette) || "#EEE,#6BB8E4,#8ACB88,#C7ACD6,#E8DCC2,#FFB2A8,#FFF380,#7E8D91,#FFD8B1,#FAF3E0"
    }, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || this.edgeLabelBackground, this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = F(this.pie1, 25) || this.primaryColor, this.git1 = this.pie2 || this.secondaryColor, this.git2 = this.pie3 || this.tertiaryColor, this.git3 = this.pie4 || d(this.primaryColor, { h: -30 }), this.git4 = this.pie5 || d(this.primaryColor, { h: -60 }), this.git5 = this.pie6 || d(this.primaryColor, { h: -90 }), this.git6 = this.pie7 || d(this.primaryColor, { h: 60 }), this.git7 = this.pie8 || d(this.primaryColor, { h: 120 }), this.gitInv0 = this.gitInv0 || m(this.git0), this.gitInv1 = this.gitInv1 || m(this.git1), this.gitInv2 = this.gitInv2 || m(this.git2), this.gitInv3 = this.gitInv3 || m(this.git3), this.gitInv4 = this.gitInv4 || m(this.git4), this.gitInv5 = this.gitInv5 || m(this.git5), this.gitInv6 = this.gitInv6 || m(this.git6), this.gitInv7 = this.gitInv7 || m(this.git7), this.branchLabelColor = this.branchLabelColor || this.labelTextColor, this.gitBranchLabel0 = this.branchLabelColor, this.gitBranchLabel1 = "white", this.gitBranchLabel2 = this.branchLabelColor, this.gitBranchLabel3 = "white", this.gitBranchLabel4 = this.branchLabelColor, this.gitBranchLabel5 = this.branchLabelColor, this.gitBranchLabel6 = this.branchLabelColor, this.gitBranchLabel7 = this.branchLabelColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || ar, this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || sr;
  }
  calculate(e) {
    if (typeof e != "object") {
      this.updateColors();
      return;
    }
    const r = Object.keys(e);
    r.forEach((i) => {
      this[i] = e[i];
    }), this.updateColors(), r.forEach((i) => {
      this[i] = e[i];
    });
  }
}
const Mf = (t) => {
  const e = new Ef();
  return e.calculate(t), e;
}, bt = {
  base: {
    getThemeVariables: Bf
  },
  dark: {
    getThemeVariables: wf
  },
  default: {
    getThemeVariables: Af
  },
  forest: {
    getThemeVariables: Of
  },
  neutral: {
    getThemeVariables: Mf
  }
}, mt = {
  flowchart: {
    useMaxWidth: !0,
    titleTopMargin: 25,
    diagramPadding: 8,
    htmlLabels: !0,
    nodeSpacing: 50,
    rankSpacing: 50,
    curve: "basis",
    padding: 15,
    defaultRenderer: "dagre-wrapper",
    wrappingWidth: 200
  },
  sequence: {
    useMaxWidth: !0,
    hideUnusedParticipants: !1,
    activationWidth: 10,
    diagramMarginX: 50,
    diagramMarginY: 10,
    actorMargin: 50,
    width: 150,
    height: 65,
    boxMargin: 10,
    boxTextMargin: 5,
    noteMargin: 10,
    messageMargin: 35,
    messageAlign: "center",
    mirrorActors: !0,
    forceMenus: !1,
    bottomMarginAdj: 1,
    rightAngles: !1,
    showSequenceNumbers: !1,
    actorFontSize: 14,
    actorFontFamily: '"Open Sans", sans-serif',
    actorFontWeight: 400,
    noteFontSize: 14,
    noteFontFamily: '"trebuchet ms", verdana, arial, sans-serif',
    noteFontWeight: 400,
    noteAlign: "center",
    messageFontSize: 16,
    messageFontFamily: '"trebuchet ms", verdana, arial, sans-serif',
    messageFontWeight: 400,
    wrap: !1,
    wrapPadding: 10,
    labelBoxWidth: 50,
    labelBoxHeight: 20
  },
  gantt: {
    useMaxWidth: !0,
    titleTopMargin: 25,
    barHeight: 20,
    barGap: 4,
    topPadding: 50,
    rightPadding: 75,
    leftPadding: 75,
    gridLineStartPadding: 35,
    fontSize: 11,
    sectionFontSize: 11,
    numberSectionStyles: 4,
    axisFormat: "%Y-%m-%d",
    topAxis: !1,
    displayMode: "",
    weekday: "sunday"
  },
  journey: {
    useMaxWidth: !0,
    diagramMarginX: 50,
    diagramMarginY: 10,
    leftMargin: 150,
    width: 150,
    height: 50,
    boxMargin: 10,
    boxTextMargin: 5,
    noteMargin: 10,
    messageMargin: 35,
    messageAlign: "center",
    bottomMarginAdj: 1,
    rightAngles: !1,
    taskFontSize: 14,
    taskFontFamily: '"Open Sans", sans-serif',
    taskMargin: 50,
    activationWidth: 10,
    textPlacement: "fo",
    actorColours: [
      "#8FBC8F",
      "#7CFC00",
      "#00FFFF",
      "#20B2AA",
      "#B0E0E6",
      "#FFFFE0"
    ],
    sectionFills: [
      "#191970",
      "#8B008B",
      "#4B0082",
      "#2F4F4F",
      "#800000",
      "#8B4513",
      "#00008B"
    ],
    sectionColours: [
      "#fff"
    ]
  },
  class: {
    useMaxWidth: !0,
    titleTopMargin: 25,
    arrowMarkerAbsolute: !1,
    dividerMargin: 10,
    padding: 5,
    textHeight: 10,
    defaultRenderer: "dagre-wrapper",
    htmlLabels: !1
  },
  state: {
    useMaxWidth: !0,
    titleTopMargin: 25,
    dividerMargin: 10,
    sizeUnit: 5,
    padding: 8,
    textHeight: 10,
    titleShift: -15,
    noteMargin: 10,
    forkWidth: 70,
    forkHeight: 7,
    miniPadding: 2,
    fontSizeFactor: 5.02,
    fontSize: 24,
    labelHeight: 16,
    edgeLengthFactor: "20",
    compositTitleSize: 35,
    radius: 5,
    defaultRenderer: "dagre-wrapper"
  },
  er: {
    useMaxWidth: !0,
    titleTopMargin: 25,
    diagramPadding: 20,
    layoutDirection: "TB",
    minEntityWidth: 100,
    minEntityHeight: 75,
    entityPadding: 15,
    stroke: "gray",
    fill: "honeydew",
    fontSize: 12
  },
  pie: {
    useMaxWidth: !0,
    textPosition: 0.75
  },
  quadrantChart: {
    useMaxWidth: !0,
    chartWidth: 500,
    chartHeight: 500,
    titleFontSize: 20,
    titlePadding: 10,
    quadrantPadding: 5,
    xAxisLabelPadding: 5,
    yAxisLabelPadding: 5,
    xAxisLabelFontSize: 16,
    yAxisLabelFontSize: 16,
    quadrantLabelFontSize: 16,
    quadrantTextTopPadding: 5,
    pointTextPadding: 5,
    pointLabelFontSize: 12,
    pointRadius: 5,
    xAxisPosition: "top",
    yAxisPosition: "left",
    quadrantInternalBorderStrokeWidth: 1,
    quadrantExternalBorderStrokeWidth: 2
  },
  xyChart: {
    useMaxWidth: !0,
    width: 700,
    height: 500,
    titleFontSize: 20,
    titlePadding: 10,
    showTitle: !0,
    xAxis: {
      $ref: "#/$defs/XYChartAxisConfig",
      showLabel: !0,
      labelFontSize: 14,
      labelPadding: 5,
      showTitle: !0,
      titleFontSize: 16,
      titlePadding: 5,
      showTick: !0,
      tickLength: 5,
      tickWidth: 2,
      showAxisLine: !0,
      axisLineWidth: 2
    },
    yAxis: {
      $ref: "#/$defs/XYChartAxisConfig",
      showLabel: !0,
      labelFontSize: 14,
      labelPadding: 5,
      showTitle: !0,
      titleFontSize: 16,
      titlePadding: 5,
      showTick: !0,
      tickLength: 5,
      tickWidth: 2,
      showAxisLine: !0,
      axisLineWidth: 2
    },
    chartOrientation: "vertical",
    plotReservedSpacePercent: 50
  },
  requirement: {
    useMaxWidth: !0,
    rect_fill: "#f9f9f9",
    text_color: "#333",
    rect_border_size: "0.5px",
    rect_border_color: "#bbb",
    rect_min_width: 200,
    rect_min_height: 200,
    fontSize: 14,
    rect_padding: 10,
    line_height: 20
  },
  mindmap: {
    useMaxWidth: !0,
    padding: 10,
    maxNodeWidth: 200
  },
  timeline: {
    useMaxWidth: !0,
    diagramMarginX: 50,
    diagramMarginY: 10,
    leftMargin: 150,
    width: 150,
    height: 50,
    boxMargin: 10,
    boxTextMargin: 5,
    noteMargin: 10,
    messageMargin: 35,
    messageAlign: "center",
    bottomMarginAdj: 1,
    rightAngles: !1,
    taskFontSize: 14,
    taskFontFamily: '"Open Sans", sans-serif',
    taskMargin: 50,
    activationWidth: 10,
    textPlacement: "fo",
    actorColours: [
      "#8FBC8F",
      "#7CFC00",
      "#00FFFF",
      "#20B2AA",
      "#B0E0E6",
      "#FFFFE0"
    ],
    sectionFills: [
      "#191970",
      "#8B008B",
      "#4B0082",
      "#2F4F4F",
      "#800000",
      "#8B4513",
      "#00008B"
    ],
    sectionColours: [
      "#fff"
    ],
    disableMulticolor: !1
  },
  gitGraph: {
    useMaxWidth: !0,
    titleTopMargin: 25,
    diagramPadding: 8,
    nodeLabel: {
      width: 75,
      height: 100,
      x: -25,
      y: 0
    },
    mainBranchName: "main",
    mainBranchOrder: 0,
    showCommitLabel: !0,
    showBranches: !0,
    rotateCommitLabel: !0,
    arrowMarkerAbsolute: !1
  },
  c4: {
    useMaxWidth: !0,
    diagramMarginX: 50,
    diagramMarginY: 10,
    c4ShapeMargin: 50,
    c4ShapePadding: 20,
    width: 216,
    height: 60,
    boxMargin: 10,
    c4ShapeInRow: 4,
    nextLinePaddingX: 0,
    c4BoundaryInRow: 2,
    personFontSize: 14,
    personFontFamily: '"Open Sans", sans-serif',
    personFontWeight: "normal",
    external_personFontSize: 14,
    external_personFontFamily: '"Open Sans", sans-serif',
    external_personFontWeight: "normal",
    systemFontSize: 14,
    systemFontFamily: '"Open Sans", sans-serif',
    systemFontWeight: "normal",
    external_systemFontSize: 14,
    external_systemFontFamily: '"Open Sans", sans-serif',
    external_systemFontWeight: "normal",
    system_dbFontSize: 14,
    system_dbFontFamily: '"Open Sans", sans-serif',
    system_dbFontWeight: "normal",
    external_system_dbFontSize: 14,
    external_system_dbFontFamily: '"Open Sans", sans-serif',
    external_system_dbFontWeight: "normal",
    system_queueFontSize: 14,
    system_queueFontFamily: '"Open Sans", sans-serif',
    system_queueFontWeight: "normal",
    external_system_queueFontSize: 14,
    external_system_queueFontFamily: '"Open Sans", sans-serif',
    external_system_queueFontWeight: "normal",
    boundaryFontSize: 14,
    boundaryFontFamily: '"Open Sans", sans-serif',
    boundaryFontWeight: "normal",
    messageFontSize: 12,
    messageFontFamily: '"Open Sans", sans-serif',
    messageFontWeight: "normal",
    containerFontSize: 14,
    containerFontFamily: '"Open Sans", sans-serif',
    containerFontWeight: "normal",
    external_containerFontSize: 14,
    external_containerFontFamily: '"Open Sans", sans-serif',
    external_containerFontWeight: "normal",
    container_dbFontSize: 14,
    container_dbFontFamily: '"Open Sans", sans-serif',
    container_dbFontWeight: "normal",
    external_container_dbFontSize: 14,
    external_container_dbFontFamily: '"Open Sans", sans-serif',
    external_container_dbFontWeight: "normal",
    container_queueFontSize: 14,
    container_queueFontFamily: '"Open Sans", sans-serif',
    container_queueFontWeight: "normal",
    external_container_queueFontSize: 14,
    external_container_queueFontFamily: '"Open Sans", sans-serif',
    external_container_queueFontWeight: "normal",
    componentFontSize: 14,
    componentFontFamily: '"Open Sans", sans-serif',
    componentFontWeight: "normal",
    external_componentFontSize: 14,
    external_componentFontFamily: '"Open Sans", sans-serif',
    external_componentFontWeight: "normal",
    component_dbFontSize: 14,
    component_dbFontFamily: '"Open Sans", sans-serif',
    component_dbFontWeight: "normal",
    external_component_dbFontSize: 14,
    external_component_dbFontFamily: '"Open Sans", sans-serif',
    external_component_dbFontWeight: "normal",
    component_queueFontSize: 14,
    component_queueFontFamily: '"Open Sans", sans-serif',
    component_queueFontWeight: "normal",
    external_component_queueFontSize: 14,
    external_component_queueFontFamily: '"Open Sans", sans-serif',
    external_component_queueFontWeight: "normal",
    wrap: !0,
    wrapPadding: 10,
    person_bg_color: "#08427B",
    person_border_color: "#073B6F",
    external_person_bg_color: "#686868",
    external_person_border_color: "#8A8A8A",
    system_bg_color: "#1168BD",
    system_border_color: "#3C7FC0",
    system_db_bg_color: "#1168BD",
    system_db_border_color: "#3C7FC0",
    system_queue_bg_color: "#1168BD",
    system_queue_border_color: "#3C7FC0",
    external_system_bg_color: "#999999",
    external_system_border_color: "#8A8A8A",
    external_system_db_bg_color: "#999999",
    external_system_db_border_color: "#8A8A8A",
    external_system_queue_bg_color: "#999999",
    external_system_queue_border_color: "#8A8A8A",
    container_bg_color: "#438DD5",
    container_border_color: "#3C7FC0",
    container_db_bg_color: "#438DD5",
    container_db_border_color: "#3C7FC0",
    container_queue_bg_color: "#438DD5",
    container_queue_border_color: "#3C7FC0",
    external_container_bg_color: "#B3B3B3",
    external_container_border_color: "#A6A6A6",
    external_container_db_bg_color: "#B3B3B3",
    external_container_db_border_color: "#A6A6A6",
    external_container_queue_bg_color: "#B3B3B3",
    external_container_queue_border_color: "#A6A6A6",
    component_bg_color: "#85BBF0",
    component_border_color: "#78A8D8",
    component_db_bg_color: "#85BBF0",
    component_db_border_color: "#78A8D8",
    component_queue_bg_color: "#85BBF0",
    component_queue_border_color: "#78A8D8",
    external_component_bg_color: "#CCCCCC",
    external_component_border_color: "#BFBFBF",
    external_component_db_bg_color: "#CCCCCC",
    external_component_db_border_color: "#BFBFBF",
    external_component_queue_bg_color: "#CCCCCC",
    external_component_queue_border_color: "#BFBFBF"
  },
  sankey: {
    useMaxWidth: !0,
    width: 600,
    height: 400,
    linkColor: "gradient",
    nodeAlignment: "justify",
    showValues: !0,
    prefix: "",
    suffix: ""
  },
  theme: "default",
  maxTextSize: 5e4,
  darkMode: !1,
  fontFamily: '"trebuchet ms", verdana, arial, sans-serif;',
  logLevel: 5,
  securityLevel: "strict",
  startOnLoad: !0,
  arrowMarkerAbsolute: !1,
  secure: [
    "secure",
    "securityLevel",
    "startOnLoad",
    "maxTextSize"
  ],
  deterministicIds: !1,
  fontSize: 16
}, Wo = {
  ...mt,
  // Set, even though they're `undefined` so that `configKeys` finds these keys
  // TODO: Should we replace these with `null` so that they can go in the JSON Schema?
  deterministicIDSeed: void 0,
  themeCSS: void 0,
  // add non-JSON default config values
  themeVariables: bt.default.getThemeVariables(),
  sequence: {
    ...mt.sequence,
    messageFont: function() {
      return {
        fontFamily: this.messageFontFamily,
        fontSize: this.messageFontSize,
        fontWeight: this.messageFontWeight
      };
    },
    noteFont: function() {
      return {
        fontFamily: this.noteFontFamily,
        fontSize: this.noteFontSize,
        fontWeight: this.noteFontWeight
      };
    },
    actorFont: function() {
      return {
        fontFamily: this.actorFontFamily,
        fontSize: this.actorFontSize,
        fontWeight: this.actorFontWeight
      };
    }
  },
  gantt: {
    ...mt.gantt,
    tickInterval: void 0,
    useWidth: void 0
    // can probably be removed since `configKeys` already includes this
  },
  c4: {
    ...mt.c4,
    useWidth: void 0,
    personFont: function() {
      return {
        fontFamily: this.personFontFamily,
        fontSize: this.personFontSize,
        fontWeight: this.personFontWeight
      };
    },
    external_personFont: function() {
      return {
        fontFamily: this.external_personFontFamily,
        fontSize: this.external_personFontSize,
        fontWeight: this.external_personFontWeight
      };
    },
    systemFont: function() {
      return {
        fontFamily: this.systemFontFamily,
        fontSize: this.systemFontSize,
        fontWeight: this.systemFontWeight
      };
    },
    external_systemFont: function() {
      return {
        fontFamily: this.external_systemFontFamily,
        fontSize: this.external_systemFontSize,
        fontWeight: this.external_systemFontWeight
      };
    },
    system_dbFont: function() {
      return {
        fontFamily: this.system_dbFontFamily,
        fontSize: this.system_dbFontSize,
        fontWeight: this.system_dbFontWeight
      };
    },
    external_system_dbFont: function() {
      return {
        fontFamily: this.external_system_dbFontFamily,
        fontSize: this.external_system_dbFontSize,
        fontWeight: this.external_system_dbFontWeight
      };
    },
    system_queueFont: function() {
      return {
        fontFamily: this.system_queueFontFamily,
        fontSize: this.system_queueFontSize,
        fontWeight: this.system_queueFontWeight
      };
    },
    external_system_queueFont: function() {
      return {
        fontFamily: this.external_system_queueFontFamily,
        fontSize: this.external_system_queueFontSize,
        fontWeight: this.external_system_queueFontWeight
      };
    },
    containerFont: function() {
      return {
        fontFamily: this.containerFontFamily,
        fontSize: this.containerFontSize,
        fontWeight: this.containerFontWeight
      };
    },
    external_containerFont: function() {
      return {
        fontFamily: this.external_containerFontFamily,
        fontSize: this.external_containerFontSize,
        fontWeight: this.external_containerFontWeight
      };
    },
    container_dbFont: function() {
      return {
        fontFamily: this.container_dbFontFamily,
        fontSize: this.container_dbFontSize,
        fontWeight: this.container_dbFontWeight
      };
    },
    external_container_dbFont: function() {
      return {
        fontFamily: this.external_container_dbFontFamily,
        fontSize: this.external_container_dbFontSize,
        fontWeight: this.external_container_dbFontWeight
      };
    },
    container_queueFont: function() {
      return {
        fontFamily: this.container_queueFontFamily,
        fontSize: this.container_queueFontSize,
        fontWeight: this.container_queueFontWeight
      };
    },
    external_container_queueFont: function() {
      return {
        fontFamily: this.external_container_queueFontFamily,
        fontSize: this.external_container_queueFontSize,
        fontWeight: this.external_container_queueFontWeight
      };
    },
    componentFont: function() {
      return {
        fontFamily: this.componentFontFamily,
        fontSize: this.componentFontSize,
        fontWeight: this.componentFontWeight
      };
    },
    external_componentFont: function() {
      return {
        fontFamily: this.external_componentFontFamily,
        fontSize: this.external_componentFontSize,
        fontWeight: this.external_componentFontWeight
      };
    },
    component_dbFont: function() {
      return {
        fontFamily: this.component_dbFontFamily,
        fontSize: this.component_dbFontSize,
        fontWeight: this.component_dbFontWeight
      };
    },
    external_component_dbFont: function() {
      return {
        fontFamily: this.external_component_dbFontFamily,
        fontSize: this.external_component_dbFontSize,
        fontWeight: this.external_component_dbFontWeight
      };
    },
    component_queueFont: function() {
      return {
        fontFamily: this.component_queueFontFamily,
        fontSize: this.component_queueFontSize,
        fontWeight: this.component_queueFontWeight
      };
    },
    external_component_queueFont: function() {
      return {
        fontFamily: this.external_component_queueFontFamily,
        fontSize: this.external_component_queueFontSize,
        fontWeight: this.external_component_queueFontWeight
      };
    },
    boundaryFont: function() {
      return {
        fontFamily: this.boundaryFontFamily,
        fontSize: this.boundaryFontSize,
        fontWeight: this.boundaryFontWeight
      };
    },
    messageFont: function() {
      return {
        fontFamily: this.messageFontFamily,
        fontSize: this.messageFontSize,
        fontWeight: this.messageFontWeight
      };
    }
  },
  pie: {
    ...mt.pie,
    useWidth: 984
  },
  xyChart: {
    ...mt.xyChart,
    useWidth: void 0
  },
  requirement: {
    ...mt.requirement,
    useWidth: void 0
  },
  gitGraph: {
    ...mt.gitGraph,
    // TODO: This is a temporary override for `gitGraph`, since every other
    //       diagram does have `useMaxWidth`, but instead sets it to `true`.
    //       Should we set this to `true` instead?
    useMaxWidth: !1
  },
  sankey: {
    ...mt.sankey,
    // this is false, unlike every other diagram (other than gitGraph)
    // TODO: can we make this default to `true` instead?
    useMaxWidth: !1
  }
}, jo = (t, e = "") => Object.keys(t).reduce((r, i) => Array.isArray(t[i]) ? r : typeof t[i] == "object" && t[i] !== null ? [...r, e + i, ...jo(t[i], "")] : [...r, e + i], []), If = new Set(jo(Wo, "")), qf = Wo, Ne = (t) => {
  if (B.debug("sanitizeDirective called with", t), !(typeof t != "object" || t == null)) {
    if (Array.isArray(t)) {
      t.forEach((e) => Ne(e));
      return;
    }
    for (const e of Object.keys(t)) {
      if (B.debug("Checking key", e), e.startsWith("__") || e.includes("proto") || e.includes("constr") || !If.has(e) || t[e] == null) {
        B.debug("sanitize deleting key: ", e), delete t[e];
        continue;
      }
      if (typeof t[e] == "object") {
        B.debug("sanitizing object", e), Ne(t[e]);
        continue;
      }
      const r = ["themeCSS", "fontFamily", "altFontFamily"];
      for (const i of r)
        e.includes(i) && (B.debug("sanitizing css option", e), t[e] = Df(t[e]));
    }
    if (t.themeVariables)
      for (const e of Object.keys(t.themeVariables)) {
        const r = t.themeVariables[e];
        r != null && r.match && !r.match(/^[\d "#%(),.;A-Za-z]+$/) && (t.themeVariables[e] = "");
      }
    B.debug("After sanitization", t);
  }
}, Df = (t) => {
  let e = 0, r = 0;
  for (const i of t) {
    if (e < r)
      return "{ /* ERROR: Unbalanced CSS */ }";
    i === "{" ? e++ : i === "}" && r++;
  }
  return e !== r ? "{ /* ERROR: Unbalanced CSS */ }" : t;
}, Ho = /^-{3}\s*[\n\r](.*?)[\n\r]-{3}\s*[\n\r]+/s, ae = /%{2}{\s*(?:(\w+)\s*:|(\w+))\s*(?:(\w+)|((?:(?!}%{2}).|\r?\n)*))?\s*(?:}%{2})?/gi, zf = /\s*%%.*\n/gm;
class Yo extends Error {
  constructor(e) {
    super(e), this.name = "UnknownDiagramError";
  }
}
const Ut = {}, lr = function(t, e) {
  t = t.replace(Ho, "").replace(ae, "").replace(zf, `
`);
  for (const [r, { detector: i }] of Object.entries(Ut))
    if (i(t, e))
      return r;
  throw new Yo(
    `No diagram type detected matching given configuration for text: ${t}`
  );
}, Uo = (...t) => {
  for (const { id: e, detector: r, loader: i } of t)
    Vo(e, r, i);
}, Vo = (t, e, r) => {
  Ut[t] ? B.error(`Detector with key ${t} already exists`) : Ut[t] = { detector: e, loader: r }, B.debug(`Detector with key ${t} added${r ? " with loader" : ""}`);
}, Pf = (t) => Ut[t].loader, Or = (t, e, { depth: r = 2, clobber: i = !1 } = {}) => {
  const o = { depth: r, clobber: i };
  return Array.isArray(e) && !Array.isArray(t) ? (e.forEach((n) => Or(t, n, o)), t) : Array.isArray(e) && Array.isArray(t) ? (e.forEach((n) => {
    t.includes(n) || t.push(n);
  }), t) : t === void 0 || r <= 0 ? t != null && typeof t == "object" && typeof e == "object" ? Object.assign(t, e) : e : (e !== void 0 && typeof t == "object" && typeof e == "object" && Object.keys(e).forEach((n) => {
    typeof e[n] == "object" && (t[n] === void 0 || typeof t[n] == "object") ? (t[n] === void 0 && (t[n] = Array.isArray(e[n]) ? [] : {}), t[n] = Or(t[n], e[n], { depth: r - 1, clobber: i })) : (i || typeof t[n] != "object" && typeof e[n] != "object") && (t[n] = e[n]);
  }), t);
}, G = Or, Nf = "​", Rf = {
  curveBasis: ia,
  curveBasisClosed: oa,
  curveBasisOpen: na,
  curveBumpX: ch,
  curveBumpY: uh,
  curveBundle: aa,
  curveCardinalClosed: sa,
  curveCardinalOpen: la,
  curveCardinal: ha,
  curveCatmullRomClosed: ca,
  curveCatmullRomOpen: ua,
  curveCatmullRom: da,
  curveLinear: fa,
  curveLinearClosed: ga,
  curveMonotoneX: pa,
  curveMonotoneY: ma,
  curveNatural: Ca,
  curveStep: ya,
  curveStepAfter: ba,
  curveStepBefore: xa
}, Wf = /\s*(?:(\w+)(?=:):|(\w+))\s*(?:(\w+)|((?:(?!}%{2}).|\r?\n)*))?\s*(?:}%{2})?/gi, jf = function(t, e) {
  const r = Go(t, /(?:init\b)|(?:initialize\b)/);
  let i = {};
  if (Array.isArray(r)) {
    const a = r.map((s) => s.args);
    Ne(a), i = G(i, [...a]);
  } else
    i = r.args;
  if (!i)
    return;
  let o = lr(t, e);
  const n = "config";
  return i[n] !== void 0 && (o === "flowchart-v2" && (o = "flowchart"), i[o] = i[n], delete i[n]), i;
}, Go = function(t, e = null) {
  try {
    const r = new RegExp(
      `[%]{2}(?![{]${Wf.source})(?=[}][%]{2}).*
`,
      "ig"
    );
    t = t.trim().replace(r, "").replace(/'/gm, '"'), B.debug(
      `Detecting diagram directive${e !== null ? " type:" + e : ""} based on the text:${t}`
    );
    let i;
    const o = [];
    for (; (i = ae.exec(t)) !== null; )
      if (i.index === ae.lastIndex && ae.lastIndex++, i && !e || e && i[1] && i[1].match(e) || e && i[2] && i[2].match(e)) {
        const n = i[1] ? i[1] : i[2], a = i[3] ? i[3].trim() : i[4] ? JSON.parse(i[4].trim()) : null;
        o.push({ type: n, args: a });
      }
    return o.length === 0 ? { type: t, args: null } : o.length === 1 ? o[0] : o;
  } catch (r) {
    return B.error(
      `ERROR: ${r.message} - Unable to parse directive type: '${e}' based on the text: '${t}'`
    ), { type: void 0, args: null };
  }
}, Hf = function(t) {
  return t.replace(ae, "");
}, Yf = function(t, e) {
  for (const [r, i] of e.entries())
    if (i.match(t))
      return r;
  return -1;
};
function Uf(t, e) {
  if (!t)
    return e;
  const r = `curve${t.charAt(0).toUpperCase() + t.slice(1)}`;
  return Rf[r] ?? e;
}
function Vf(t, e) {
  const r = t.trim();
  if (r)
    return e.securityLevel !== "loose" ? Zi.sanitizeUrl(r) : r;
}
const Gf = (t, ...e) => {
  const r = t.split("."), i = r.length - 1, o = r[i];
  let n = window;
  for (let a = 0; a < i; a++)
    if (n = n[r[a]], !n) {
      B.error(`Function name: ${t} not found in window`);
      return;
    }
  n[o](...e);
};
function Xo(t, e) {
  return !t || !e ? 0 : Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
}
function Xf(t) {
  let e, r = 0;
  t.forEach((o) => {
    r += Xo(o, e), e = o;
  });
  const i = r / 2;
  return Vr(t, i);
}
function Kf(t) {
  return t.length === 1 ? t[0] : Xf(t);
}
const Ii = (t, e = 2) => {
  const r = Math.pow(10, e);
  return Math.round(t * r) / r;
}, Vr = (t, e) => {
  let r, i = e;
  for (const o of t) {
    if (r) {
      const n = Xo(o, r);
      if (n < i)
        i -= n;
      else {
        const a = i / n;
        if (a <= 0)
          return r;
        if (a >= 1)
          return { x: o.x, y: o.y };
        if (a > 0 && a < 1)
          return {
            x: Ii((1 - a) * r.x + a * o.x, 5),
            y: Ii((1 - a) * r.y + a * o.y, 5)
          };
      }
    }
    r = o;
  }
  throw new Error("Could not find a suitable point for the given distance");
}, Zf = (t, e, r) => {
  B.info(`our points ${JSON.stringify(e)}`), e[0] !== r && (e = e.reverse());
  const o = Vr(e, 25), n = t ? 10 : 5, a = Math.atan2(e[0].y - o.y, e[0].x - o.x), s = { x: 0, y: 0 };
  return s.x = Math.sin(a) * n + (e[0].x + o.x) / 2, s.y = -Math.cos(a) * n + (e[0].y + o.y) / 2, s;
};
function Jf(t, e, r) {
  const i = structuredClone(r);
  B.info("our points", i), e !== "start_left" && e !== "start_right" && i.reverse();
  const o = 25 + t, n = Vr(i, o), a = 10 + t * 0.5, s = Math.atan2(i[0].y - n.y, i[0].x - n.x), l = { x: 0, y: 0 };
  return e === "start_left" ? (l.x = Math.sin(s + Math.PI) * a + (i[0].x + n.x) / 2, l.y = -Math.cos(s + Math.PI) * a + (i[0].y + n.y) / 2) : e === "end_right" ? (l.x = Math.sin(s - Math.PI) * a + (i[0].x + n.x) / 2 - 5, l.y = -Math.cos(s - Math.PI) * a + (i[0].y + n.y) / 2 - 5) : e === "end_left" ? (l.x = Math.sin(s) * a + (i[0].x + n.x) / 2 - 5, l.y = -Math.cos(s) * a + (i[0].y + n.y) / 2 - 5) : (l.x = Math.sin(s) * a + (i[0].x + n.x) / 2, l.y = -Math.cos(s) * a + (i[0].y + n.y) / 2), l;
}
function Qf(t) {
  let e = "", r = "";
  for (const i of t)
    i !== void 0 && (i.startsWith("color:") || i.startsWith("text-align:") ? r = r + i + ";" : e = e + i + ";");
  return { style: e, labelStyle: r };
}
let qi = 0;
const tg = () => (qi++, "id-" + Math.random().toString(36).substr(2, 12) + "-" + qi);
function eg(t) {
  let e = "";
  const r = "0123456789abcdef", i = r.length;
  for (let o = 0; o < t; o++)
    e += r.charAt(Math.floor(Math.random() * i));
  return e;
}
const rg = (t) => eg(t.length), ig = function() {
  return {
    x: 0,
    y: 0,
    fill: void 0,
    anchor: "start",
    style: "#666",
    width: 100,
    height: 100,
    textMargin: 0,
    rx: 0,
    ry: 0,
    valign: void 0,
    text: ""
  };
}, og = function(t, e) {
  const r = e.text.replace(Ur.lineBreakRegex, " "), [, i] = Xr(e.fontSize), o = t.append("text");
  o.attr("x", e.x), o.attr("y", e.y), o.style("text-anchor", e.anchor), o.style("font-family", e.fontFamily), o.style("font-size", i), o.style("font-weight", e.fontWeight), o.attr("fill", e.fill), e.class !== void 0 && o.attr("class", e.class);
  const n = o.append("tspan");
  return n.attr("x", e.x + e.textMargin * 2), n.attr("fill", e.fill), n.text(r), o;
}, ng = Ce(
  (t, e, r) => {
    if (!t || (r = Object.assign(
      { fontSize: 12, fontWeight: 400, fontFamily: "Arial", joinWith: "<br/>" },
      r
    ), Ur.lineBreakRegex.test(t)))
      return t;
    const i = t.split(" "), o = [];
    let n = "";
    return i.forEach((a, s) => {
      const l = Re(`${a} `, r), c = Re(n, r);
      if (l > e) {
        const { hyphenatedStrings: h, remainingWord: g } = ag(a, e, "-", r);
        o.push(n, ...h), n = g;
      } else
        c + l >= e ? (o.push(n), n = a) : n = [n, a].filter(Boolean).join(" ");
      s + 1 === i.length && o.push(n);
    }), o.filter((a) => a !== "").join(r.joinWith);
  },
  (t, e, r) => `${t}${e}${r.fontSize}${r.fontWeight}${r.fontFamily}${r.joinWith}`
), ag = Ce(
  (t, e, r = "-", i) => {
    i = Object.assign(
      { fontSize: 12, fontWeight: 400, fontFamily: "Arial", margin: 0 },
      i
    );
    const o = [...t], n = [];
    let a = "";
    return o.forEach((s, l) => {
      const c = `${a}${s}`;
      if (Re(c, i) >= e) {
        const f = l + 1, h = o.length === f, g = `${c}${r}`;
        n.push(h ? c : g), a = "";
      } else
        a = c;
    }), { hyphenatedStrings: n, remainingWord: a };
  },
  (t, e, r = "-", i) => `${t}${e}${r}${i.fontSize}${i.fontWeight}${i.fontFamily}`
);
function sg(t, e) {
  return Gr(t, e).height;
}
function Re(t, e) {
  return Gr(t, e).width;
}
const Gr = Ce(
  (t, e) => {
    const { fontSize: r = 12, fontFamily: i = "Arial", fontWeight: o = 400 } = e;
    if (!t)
      return { width: 0, height: 0 };
    const [, n] = Xr(r), a = ["sans-serif", i], s = t.split(Ur.lineBreakRegex), l = [], c = ot("body");
    if (!c.remove)
      return { width: 0, height: 0, lineHeight: 0 };
    const u = c.append("svg");
    for (const h of a) {
      let g = 0;
      const y = { width: 0, height: 0, lineHeight: 0 };
      for (const _ of s) {
        const k = ig();
        k.text = _ || Nf;
        const O = og(u, k).style("font-size", n).style("font-weight", o).style("font-family", h), x = (O._groups || O)[0][0].getBBox();
        if (x.width === 0 && x.height === 0)
          throw new Error("svg element not in render tree");
        y.width = Math.round(Math.max(y.width, x.width)), g = Math.round(x.height), y.height += g, y.lineHeight = Math.round(Math.max(y.lineHeight, g));
      }
      l.push(y);
    }
    u.remove();
    const f = isNaN(l[1].height) || isNaN(l[1].width) || isNaN(l[1].lineHeight) || l[0].height > l[1].height && l[0].width > l[1].width && l[0].lineHeight > l[1].lineHeight ? 0 : 1;
    return l[f];
  },
  (t, e) => `${t}${e.fontSize}${e.fontWeight}${e.fontFamily}`
);
class lg {
  constructor(e = !1, r) {
    this.count = 0, this.count = r ? r.length : 0, this.next = e ? () => this.count++ : () => Date.now();
  }
}
let ke;
const hg = function(t) {
  return ke = ke || document.createElement("div"), t = escape(t).replace(/%26/g, "&").replace(/%23/g, "#").replace(/%3B/g, ";"), ke.innerHTML = t, unescape(ke.textContent);
};
function Ko(t) {
  return "str" in t;
}
const cg = (t, e, r, i) => {
  var o;
  if (!i)
    return;
  const n = (o = t.node()) == null ? void 0 : o.getBBox();
  n && t.append("text").text(i).attr("x", n.x + n.width / 2).attr("y", -r).attr("class", e);
}, Xr = (t) => {
  if (typeof t == "number")
    return [t, t + "px"];
  const e = parseInt(t ?? "", 10);
  return Number.isNaN(e) ? [void 0, void 0] : t === String(e) ? [e, t + "px"] : [e, t];
};
function Zo(t, e) {
  return Ad({}, t, e);
}
const se = {
  assignWithDepth: G,
  wrapLabel: ng,
  calculateTextHeight: sg,
  calculateTextWidth: Re,
  calculateTextDimensions: Gr,
  cleanAndMerge: Zo,
  detectInit: jf,
  detectDirective: Go,
  isSubstringInArray: Yf,
  interpolateToCurve: Uf,
  calcLabelPosition: Kf,
  calcCardinalityPosition: Zf,
  calcTerminalLabelPosition: Jf,
  formatUrl: Vf,
  getStylesFromArray: Qf,
  generateId: tg,
  random: rg,
  runFunc: Gf,
  entityDecode: hg,
  insertTitle: cg,
  parseFontSize: Xr,
  InitIDGenerator: lg
}, Di = "10.6.1", Vt = Object.freeze(qf);
let Q = G({}, Vt), Jo, Gt = [], le = G({}, Vt);
const hr = (t, e) => {
  let r = G({}, t), i = {};
  for (const o of e)
    en(o), i = G(i, o);
  if (r = G(r, i), i.theme && i.theme in bt) {
    const o = G({}, Jo), n = G(
      o.themeVariables || {},
      i.themeVariables
    );
    r.theme && r.theme in bt && (r.themeVariables = bt[r.theme].getThemeVariables(n));
  }
  return le = r, rn(le), le;
}, ug = (t) => (Q = G({}, Vt), Q = G(Q, t), t.theme && bt[t.theme] && (Q.themeVariables = bt[t.theme].getThemeVariables(t.themeVariables)), hr(Q, Gt), Q), dg = (t) => {
  Jo = G({}, t);
}, fg = (t) => (Q = G(Q, t), hr(Q, Gt), Q), Qo = () => G({}, Q), tn = (t) => (rn(t), G(le, t), ut()), ut = () => G({}, le), en = (t) => {
  t && (["secure", ...Q.secure ?? []].forEach((e) => {
    Object.hasOwn(t, e) && (B.debug(`Denied attempt to modify a secure key ${e}`, t[e]), delete t[e]);
  }), Object.keys(t).forEach((e) => {
    e.startsWith("__") && delete t[e];
  }), Object.keys(t).forEach((e) => {
    typeof t[e] == "string" && (t[e].includes("<") || t[e].includes(">") || t[e].includes("url(data:")) && delete t[e], typeof t[e] == "object" && en(t[e]);
  }));
}, gg = (t) => {
  Ne(t), t.fontFamily && (!t.themeVariables || !t.themeVariables.fontFamily) && (t.themeVariables = { fontFamily: t.fontFamily }), Gt.push(t), hr(Q, Gt);
}, We = (t = Q) => {
  Gt = [], hr(t, Gt);
}, pg = {
  LAZY_LOAD_DEPRECATED: "The configuration options lazyLoadedDiagrams and loadExternalDiagramsAtStartup are deprecated. Please use registerExternalDiagrams instead."
}, zi = {}, mg = (t) => {
  zi[t] || (B.warn(pg[t]), zi[t] = !0);
}, rn = (t) => {
  t && (t.lazyLoadedDiagrams || t.loadExternalDiagramsAtStartup) && mg("LAZY_LOAD_DEPRECATED");
}, on = "c4", Cg = (t) => /^\s*C4Context|C4Container|C4Component|C4Dynamic|C4Deployment/.test(t), yg = async () => {
  const { diagram: t } = await import("./c4Diagram-817c8e44.ZtNRT_C-.js");
  return { id: on, diagram: t };
}, bg = {
  id: on,
  detector: Cg,
  loader: yg
}, xg = bg, nn = "flowchart", _g = (t, e) => {
  var r, i;
  return ((r = e == null ? void 0 : e.flowchart) == null ? void 0 : r.defaultRenderer) === "dagre-wrapper" || ((i = e == null ? void 0 : e.flowchart) == null ? void 0 : i.defaultRenderer) === "elk" ? !1 : /^\s*graph/.test(t);
}, vg = async () => {
  const { diagram: t } = await import("./flowDiagram-61eb444c.YP70uxIe.js");
  return { id: nn, diagram: t };
}, Tg = {
  id: nn,
  detector: _g,
  loader: vg
}, kg = Tg, an = "flowchart-v2", Sg = (t, e) => {
  var r, i, o;
  return ((r = e == null ? void 0 : e.flowchart) == null ? void 0 : r.defaultRenderer) === "dagre-d3" || ((i = e == null ? void 0 : e.flowchart) == null ? void 0 : i.defaultRenderer) === "elk" ? !1 : /^\s*graph/.test(t) && ((o = e == null ? void 0 : e.flowchart) == null ? void 0 : o.defaultRenderer) === "dagre-wrapper" ? !0 : /^\s*flowchart/.test(t);
}, Bg = async () => {
  const { diagram: t } = await import("./flowDiagram-v2-2f8f667a.0PqmR6M7.js");
  return { id: an, diagram: t };
}, Fg = {
  id: an,
  detector: Sg,
  loader: Bg
}, wg = Fg, sn = "er", Lg = (t) => /^\s*erDiagram/.test(t), Ag = async () => {
  const { diagram: t } = await import("./erDiagram-9cfc3649.hn5OJfMf.js");
  return { id: sn, diagram: t };
}, $g = {
  id: sn,
  detector: Lg,
  loader: Ag
}, Og = $g, ln = "gitGraph", Eg = (t) => /^\s*gitGraph/.test(t), Mg = async () => {
  const { diagram: t } = await import("./gitGraphDiagram-6b463803.JpwphSxs.js");
  return { id: ln, diagram: t };
}, Ig = {
  id: ln,
  detector: Eg,
  loader: Mg
}, qg = Ig, hn = "gantt", Dg = (t) => /^\s*gantt/.test(t), zg = async () => {
  const { diagram: t } = await import("./ganttDiagram-db6931fb.eT6RgjPH.js");
  return { id: hn, diagram: t };
}, Pg = {
  id: hn,
  detector: Dg,
  loader: zg
}, Ng = Pg, cn = "info", Rg = (t) => /^\s*info/.test(t), Wg = async () => {
  const { diagram: t } = await import("./infoDiagram-a336098b.LW6Cu3CM.js");
  return { id: cn, diagram: t };
}, jg = {
  id: cn,
  detector: Rg,
  loader: Wg
}, un = "pie", Hg = (t) => /^\s*pie/.test(t), Yg = async () => {
  const { diagram: t } = await import("./pieDiagram-a5166659.KHq8jjbB.js");
  return { id: un, diagram: t };
}, Ug = {
  id: un,
  detector: Hg,
  loader: Yg
}, dn = "quadrantChart", Vg = (t) => /^\s*quadrantChart/.test(t), Gg = async () => {
  const { diagram: t } = await import("./quadrantDiagram-6c355bbc.4-bu_BNC.js");
  return { id: dn, diagram: t };
}, Xg = {
  id: dn,
  detector: Vg,
  loader: Gg
}, Kg = Xg, fn = "xychart", Zg = (t) => /^\s*xychart-beta/.test(t), Jg = async () => {
  const { diagram: t } = await import("./xychartDiagram-f746c04c.Qpxwcr36.js");
  return { id: fn, diagram: t };
}, Qg = {
  id: fn,
  detector: Zg,
  loader: Jg
}, tp = Qg, gn = "requirement", ep = (t) => /^\s*requirement(Diagram)?/.test(t), rp = async () => {
  const { diagram: t } = await import("./requirementDiagram-4038b16c.TK8kMFFa.js");
  return { id: gn, diagram: t };
}, ip = {
  id: gn,
  detector: ep,
  loader: rp
}, op = ip, pn = "sequence", np = (t) => /^\s*sequenceDiagram/.test(t), ap = async () => {
  const { diagram: t } = await import("./sequenceDiagram-465a088a.BftCHJrk.js");
  return { id: pn, diagram: t };
}, sp = {
  id: pn,
  detector: np,
  loader: ap
}, lp = sp, mn = "class", hp = (t, e) => {
  var r;
  return ((r = e == null ? void 0 : e.class) == null ? void 0 : r.defaultRenderer) === "dagre-wrapper" ? !1 : /^\s*classDiagram/.test(t);
}, cp = async () => {
  const { diagram: t } = await import("./classDiagram-48ab76fb.e7wpkpeX.js");
  return { id: mn, diagram: t };
}, up = {
  id: mn,
  detector: hp,
  loader: cp
}, dp = up, Cn = "classDiagram", fp = (t, e) => {
  var r;
  return /^\s*classDiagram/.test(t) && ((r = e == null ? void 0 : e.class) == null ? void 0 : r.defaultRenderer) === "dagre-wrapper" ? !0 : /^\s*classDiagram-v2/.test(t);
}, gp = async () => {
  const { diagram: t } = await import("./classDiagram-v2-8ecb0bfc.M5S0CrDg.js");
  return { id: Cn, diagram: t };
}, pp = {
  id: Cn,
  detector: fp,
  loader: gp
}, mp = pp, yn = "state", Cp = (t, e) => {
  var r;
  return ((r = e == null ? void 0 : e.state) == null ? void 0 : r.defaultRenderer) === "dagre-wrapper" ? !1 : /^\s*stateDiagram/.test(t);
}, yp = async () => {
  const { diagram: t } = await import("./stateDiagram-b620d43f.Gp-lG4rO.js");
  return { id: yn, diagram: t };
}, bp = {
  id: yn,
  detector: Cp,
  loader: yp
}, xp = bp, bn = "stateDiagram", _p = (t, e) => {
  var r;
  return !!(/^\s*stateDiagram-v2/.test(t) || /^\s*stateDiagram/.test(t) && ((r = e == null ? void 0 : e.state) == null ? void 0 : r.defaultRenderer) === "dagre-wrapper");
}, vp = async () => {
  const { diagram: t } = await import("./stateDiagram-v2-2671c3d1.Ve7cJrGW.js");
  return { id: bn, diagram: t };
}, Tp = {
  id: bn,
  detector: _p,
  loader: vp
}, kp = Tp, xn = "journey", Sp = (t) => /^\s*journey/.test(t), Bp = async () => {
  const { diagram: t } = await import("./journeyDiagram-deae3313.hSLhUlSJ.js");
  return { id: xn, diagram: t };
}, Fp = {
  id: xn,
  detector: Sp,
  loader: Bp
}, wp = Fp, Lp = function(t, e) {
  for (let r of e)
    t.attr(r[0], r[1]);
}, Ap = function(t, e, r) {
  let i = /* @__PURE__ */ new Map();
  return r ? (i.set("width", "100%"), i.set("style", `max-width: ${e}px;`)) : (i.set("height", t), i.set("width", e)), i;
}, _n = function(t, e, r, i) {
  const o = Ap(e, r, i);
  Lp(t, o);
}, $p = function(t, e, r, i) {
  const o = e.node().getBBox(), n = o.width, a = o.height;
  B.info(`SVG bounds: ${n}x${a}`, o);
  let s = 0, l = 0;
  B.info(`Graph bounds: ${s}x${l}`, t), s = n + r * 2, l = a + r * 2, B.info(`Calculated bounds: ${s}x${l}`), _n(e, l, s, i);
  const c = `${o.x - r} ${o.y - r} ${o.width + 2 * r} ${o.height + 2 * r}`;
  e.attr("viewBox", c);
}, Ee = {}, Op = (t, e, r) => {
  let i = "";
  return t in Ee && Ee[t] ? i = Ee[t](r) : B.warn(`No theme found for ${t}`), ` & {
    font-family: ${r.fontFamily};
    font-size: ${r.fontSize};
    fill: ${r.textColor}
  }

  /* Classes common for multiple diagrams */

  & .error-icon {
    fill: ${r.errorBkgColor};
  }
  & .error-text {
    fill: ${r.errorTextColor};
    stroke: ${r.errorTextColor};
  }

  & .edge-thickness-normal {
    stroke-width: 2px;
  }
  & .edge-thickness-thick {
    stroke-width: 3.5px
  }
  & .edge-pattern-solid {
    stroke-dasharray: 0;
  }

  & .edge-pattern-dashed{
    stroke-dasharray: 3;
  }
  .edge-pattern-dotted {
    stroke-dasharray: 2;
  }

  & .marker {
    fill: ${r.lineColor};
    stroke: ${r.lineColor};
  }
  & .marker.cross {
    stroke: ${r.lineColor};
  }

  & svg {
    font-family: ${r.fontFamily};
    font-size: ${r.fontSize};
  }

  ${i}

  ${e}
`;
}, Ep = (t, e) => {
  e !== void 0 && (Ee[t] = e);
}, Mp = Op;
let Kr = "", Zr = "", Jr = "";
const Qr = (t) => fe(t, ut()), Ip = () => {
  Kr = "", Jr = "", Zr = "";
}, qp = (t) => {
  Kr = Qr(t).replace(/^\s+/g, "");
}, Dp = () => Kr, zp = (t) => {
  Jr = Qr(t).replace(/\n\s+/g, `
`);
}, Pp = () => Jr, Np = (t) => {
  Zr = Qr(t);
}, Rp = () => Zr, Wp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  clear: Ip,
  getAccDescription: Pp,
  getAccTitle: Dp,
  getDiagramTitle: Rp,
  setAccDescription: zp,
  setAccTitle: qp,
  setDiagramTitle: Np
}, Symbol.toStringTag, { value: "Module" })), jp = B, Hp = Yr, ti = ut, e0 = tn, r0 = Vt, Yp = (t) => fe(t, ti()), Up = $p, Vp = () => Wp, je = {}, He = (t, e, r) => {
  var i;
  if (je[t])
    throw new Error(`Diagram ${t} already registered.`);
  je[t] = e, r && Vo(t, r), Ep(t, e.styles), (i = e.injectUtils) == null || i.call(
    e,
    jp,
    Hp,
    ti,
    Yp,
    Up,
    Vp(),
    () => {
    }
  );
}, ei = (t) => {
  if (t in je)
    return je[t];
  throw new Gp(t);
};
class Gp extends Error {
  constructor(e) {
    super(`Diagram ${e} not found.`);
  }
}
const Xp = (t) => {
  var e;
  const { securityLevel: r } = ti();
  let i = ot("body");
  if (r === "sandbox") {
    const a = ((e = ot(`#i${t}`).node()) == null ? void 0 : e.contentDocument) ?? document;
    i = ot(a.body);
  }
  return i.select(`#${t}`);
}, Kp = (t, e, r) => {
  B.debug(`renering svg for syntax error
`);
  const i = Xp(e);
  i.attr("viewBox", "0 0 2412 512"), _n(i, 100, 512, !0);
  const o = i.append("g");
  o.append("path").attr("class", "error-icon").attr(
    "d",
    "m411.313,123.313c6.25-6.25 6.25-16.375 0-22.625s-16.375-6.25-22.625,0l-32,32-9.375,9.375-20.688-20.688c-12.484-12.5-32.766-12.5-45.25,0l-16,16c-1.261,1.261-2.304,2.648-3.31,4.051-21.739-8.561-45.324-13.426-70.065-13.426-105.867,0-192,86.133-192,192s86.133,192 192,192 192-86.133 192-192c0-24.741-4.864-48.327-13.426-70.065 1.402-1.007 2.79-2.049 4.051-3.31l16-16c12.5-12.492 12.5-32.758 0-45.25l-20.688-20.688 9.375-9.375 32.001-31.999zm-219.313,100.687c-52.938,0-96,43.063-96,96 0,8.836-7.164,16-16,16s-16-7.164-16-16c0-70.578 57.422-128 128-128 8.836,0 16,7.164 16,16s-7.164,16-16,16z"
  ), o.append("path").attr("class", "error-icon").attr(
    "d",
    "m459.02,148.98c-6.25-6.25-16.375-6.25-22.625,0s-6.25,16.375 0,22.625l16,16c3.125,3.125 7.219,4.688 11.313,4.688 4.094,0 8.188-1.563 11.313-4.688 6.25-6.25 6.25-16.375 0-22.625l-16.001-16z"
  ), o.append("path").attr("class", "error-icon").attr(
    "d",
    "m340.395,75.605c3.125,3.125 7.219,4.688 11.313,4.688 4.094,0 8.188-1.563 11.313-4.688 6.25-6.25 6.25-16.375 0-22.625l-16-16c-6.25-6.25-16.375-6.25-22.625,0s-6.25,16.375 0,22.625l15.999,16z"
  ), o.append("path").attr("class", "error-icon").attr(
    "d",
    "m400,64c8.844,0 16-7.164 16-16v-32c0-8.836-7.156-16-16-16-8.844,0-16,7.164-16,16v32c0,8.836 7.156,16 16,16z"
  ), o.append("path").attr("class", "error-icon").attr(
    "d",
    "m496,96.586h-32c-8.844,0-16,7.164-16,16 0,8.836 7.156,16 16,16h32c8.844,0 16-7.164 16-16 0-8.836-7.156-16-16-16z"
  ), o.append("path").attr("class", "error-icon").attr(
    "d",
    "m436.98,75.605c3.125,3.125 7.219,4.688 11.313,4.688 4.094,0 8.188-1.563 11.313-4.688l32-32c6.25-6.25 6.25-16.375 0-22.625s-16.375-6.25-22.625,0l-32,32c-6.251,6.25-6.251,16.375-0.001,22.625z"
  ), o.append("text").attr("class", "error-text").attr("x", 1440).attr("y", 250).attr("font-size", "150px").style("text-anchor", "middle").text("Syntax error in text"), o.append("text").attr("class", "error-text").attr("x", 1250).attr("y", 400).attr("font-size", "100px").style("text-anchor", "middle").text(`mermaid version ${r}`);
}, vn = { draw: Kp }, Zp = vn, Jp = {
  db: {},
  renderer: vn,
  parser: {
    parser: { yy: {} },
    parse: () => {
    }
  }
}, Qp = Jp, Tn = "flowchart-elk", tm = (t, e) => {
  var r;
  return (
    // If diagram explicitly states flowchart-elk
    !!(/^\s*flowchart-elk/.test(t) || // If a flowchart/graph diagram has their default renderer set to elk
    /^\s*flowchart|graph/.test(t) && ((r = e == null ? void 0 : e.flowchart) == null ? void 0 : r.defaultRenderer) === "elk")
  );
}, em = async () => {
  const { diagram: t } = await import("./flowchart-elk-definition-e097735e.ApAjgKYr.js");
  return { id: Tn, diagram: t };
}, rm = {
  id: Tn,
  detector: tm,
  loader: em
}, im = rm, kn = "timeline", om = (t) => /^\s*timeline/.test(t), nm = async () => {
  const { diagram: t } = await import("./timeline-definition-732a2638.IpybkUcH.js");
  return { id: kn, diagram: t };
}, am = {
  id: kn,
  detector: om,
  loader: nm
}, sm = am, Sn = "mindmap", lm = (t) => /^\s*mindmap/.test(t), hm = async () => {
  const { diagram: t } = await import("./mindmap-definition-617cf8dd.4ac4afyW.js");
  return { id: Sn, diagram: t };
}, cm = {
  id: Sn,
  detector: lm,
  loader: hm
}, um = cm, Bn = "sankey", dm = (t) => /^\s*sankey-beta/.test(t), fm = async () => {
  const { diagram: t } = await import("./sankeyDiagram-6db3d513.1FE82lQd.js");
  return { id: Bn, diagram: t };
}, gm = {
  id: Bn,
  detector: dm,
  loader: fm
}, pm = gm;
let Pi = !1;
const ri = () => {
  Pi || (Pi = !0, He("error", Qp, (t) => t.toLowerCase().trim() === "error"), He(
    "---",
    // --- diagram type may appear if YAML front-matter is not parsed correctly
    {
      db: {
        clear: () => {
        }
      },
      styles: {},
      // should never be used
      renderer: {
        draw: () => {
        }
      },
      parser: {
        parser: { yy: {} },
        parse: () => {
          throw new Error(
            "Diagrams beginning with --- are not valid. If you were trying to use a YAML front-matter, please ensure that you've correctly opened and closed the YAML front-matter with un-indented `---` blocks"
          );
        }
      },
      init: () => null
      // no op
    },
    (t) => t.toLowerCase().trimStart().startsWith("---")
  ), Uo(
    xg,
    mp,
    dp,
    Og,
    Ng,
    jg,
    Ug,
    op,
    lp,
    im,
    wg,
    kg,
    um,
    sm,
    qg,
    kp,
    xp,
    wp,
    Kg,
    pm,
    tp
  ));
};
class Fn {
  constructor(e, r = {}) {
    this.text = e, this.metadata = r, this.type = "graph", this.text += `
`;
    const i = ut();
    try {
      this.type = lr(e, i);
    } catch (n) {
      this.type = "error", this.detectError = n;
    }
    const o = ei(this.type);
    B.debug("Type " + this.type), this.db = o.db, this.renderer = o.renderer, this.parser = o.parser, this.parser.parser.yy = this.db, this.init = o.init, this.parse();
  }
  parse() {
    var e, r, i, o, n;
    if (this.detectError)
      throw this.detectError;
    (r = (e = this.db).clear) == null || r.call(e);
    const a = ut();
    (i = this.init) == null || i.call(this, a), this.metadata.title && ((n = (o = this.db).setDiagramTitle) == null || n.call(o, this.metadata.title)), this.parser.parse(this.text);
  }
  async render(e, r) {
    await this.renderer.draw(this.text, e, r, this);
  }
  getParser() {
    return this.parser;
  }
  getType() {
    return this.type;
  }
}
const ii = async (t, e = {}) => {
  const r = lr(t, ut());
  try {
    ei(r);
  } catch {
    const o = Pf(r);
    if (!o)
      throw new Yo(`Diagram ${r} not found.`);
    const { id: n, diagram: a } = await o();
    He(n, a);
  }
  return new Fn(t, e);
};
let Er = [];
const i0 = (t) => {
  Er.push(t);
}, mm = () => {
  Er.forEach((t) => {
    t();
  }), Er = [];
}, Cm = "graphics-document document";
function ym(t, e) {
  t.attr("role", Cm), e !== "" && t.attr("aria-roledescription", e);
}
function bm(t, e, r, i) {
  if (t.insert !== void 0) {
    if (r) {
      const o = `chart-desc-${i}`;
      t.attr("aria-describedby", o), t.insert("desc", ":first-child").attr("id", o).text(r);
    }
    if (e) {
      const o = `chart-title-${i}`;
      t.attr("aria-labelledby", o), t.insert("title", ":first-child").attr("id", o).text(e);
    }
  }
}
const xm = (t) => t.replace(/^\s*%%(?!{)[^\n]+\n?/gm, "").trimStart();
/*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT */
function wn(t) {
  return typeof t > "u" || t === null;
}
function _m(t) {
  return typeof t == "object" && t !== null;
}
function vm(t) {
  return Array.isArray(t) ? t : wn(t) ? [] : [t];
}
function Tm(t, e) {
  var r, i, o, n;
  if (e)
    for (n = Object.keys(e), r = 0, i = n.length; r < i; r += 1)
      o = n[r], t[o] = e[o];
  return t;
}
function km(t, e) {
  var r = "", i;
  for (i = 0; i < e; i += 1)
    r += t;
  return r;
}
function Sm(t) {
  return t === 0 && Number.NEGATIVE_INFINITY === 1 / t;
}
var Bm = wn, Fm = _m, wm = vm, Lm = km, Am = Sm, $m = Tm, K = {
  isNothing: Bm,
  isObject: Fm,
  toArray: wm,
  repeat: Lm,
  isNegativeZero: Am,
  extend: $m
};
function Ln(t, e) {
  var r = "", i = t.reason || "(unknown reason)";
  return t.mark ? (t.mark.name && (r += 'in "' + t.mark.name + '" '), r += "(" + (t.mark.line + 1) + ":" + (t.mark.column + 1) + ")", !e && t.mark.snippet && (r += `

` + t.mark.snippet), i + " " + r) : i;
}
function ge(t, e) {
  Error.call(this), this.name = "YAMLException", this.reason = t, this.mark = e, this.message = Ln(this, !1), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack || "";
}
ge.prototype = Object.create(Error.prototype);
ge.prototype.constructor = ge;
ge.prototype.toString = function(e) {
  return this.name + ": " + Ln(this, e);
};
var yt = ge;
function pr(t, e, r, i, o) {
  var n = "", a = "", s = Math.floor(o / 2) - 1;
  return i - e > s && (n = " ... ", e = i - s + n.length), r - i > s && (a = " ...", r = i + s - a.length), {
    str: n + t.slice(e, r).replace(/\t/g, "→") + a,
    pos: i - e + n.length
    // relative position
  };
}
function mr(t, e) {
  return K.repeat(" ", e - t.length) + t;
}
function Om(t, e) {
  if (e = Object.create(e || null), !t.buffer)
    return null;
  e.maxLength || (e.maxLength = 79), typeof e.indent != "number" && (e.indent = 1), typeof e.linesBefore != "number" && (e.linesBefore = 3), typeof e.linesAfter != "number" && (e.linesAfter = 2);
  for (var r = /\r?\n|\r|\0/g, i = [0], o = [], n, a = -1; n = r.exec(t.buffer); )
    o.push(n.index), i.push(n.index + n[0].length), t.position <= n.index && a < 0 && (a = i.length - 2);
  a < 0 && (a = i.length - 1);
  var s = "", l, c, u = Math.min(t.line + e.linesAfter, o.length).toString().length, f = e.maxLength - (e.indent + u + 3);
  for (l = 1; l <= e.linesBefore && !(a - l < 0); l++)
    c = pr(
      t.buffer,
      i[a - l],
      o[a - l],
      t.position - (i[a] - i[a - l]),
      f
    ), s = K.repeat(" ", e.indent) + mr((t.line - l + 1).toString(), u) + " | " + c.str + `
` + s;
  for (c = pr(t.buffer, i[a], o[a], t.position, f), s += K.repeat(" ", e.indent) + mr((t.line + 1).toString(), u) + " | " + c.str + `
`, s += K.repeat("-", e.indent + u + 3 + c.pos) + `^
`, l = 1; l <= e.linesAfter && !(a + l >= o.length); l++)
    c = pr(
      t.buffer,
      i[a + l],
      o[a + l],
      t.position - (i[a] - i[a + l]),
      f
    ), s += K.repeat(" ", e.indent) + mr((t.line + l + 1).toString(), u) + " | " + c.str + `
`;
  return s.replace(/\n$/, "");
}
var Em = Om, Mm = [
  "kind",
  "multi",
  "resolve",
  "construct",
  "instanceOf",
  "predicate",
  "represent",
  "representName",
  "defaultStyle",
  "styleAliases"
], Im = [
  "scalar",
  "sequence",
  "mapping"
];
function qm(t) {
  var e = {};
  return t !== null && Object.keys(t).forEach(function(r) {
    t[r].forEach(function(i) {
      e[String(i)] = r;
    });
  }), e;
}
function Dm(t, e) {
  if (e = e || {}, Object.keys(e).forEach(function(r) {
    if (Mm.indexOf(r) === -1)
      throw new yt('Unknown option "' + r + '" is met in definition of "' + t + '" YAML type.');
  }), this.options = e, this.tag = t, this.kind = e.kind || null, this.resolve = e.resolve || function() {
    return !0;
  }, this.construct = e.construct || function(r) {
    return r;
  }, this.instanceOf = e.instanceOf || null, this.predicate = e.predicate || null, this.represent = e.represent || null, this.representName = e.representName || null, this.defaultStyle = e.defaultStyle || null, this.multi = e.multi || !1, this.styleAliases = qm(e.styleAliases || null), Im.indexOf(this.kind) === -1)
    throw new yt('Unknown kind "' + this.kind + '" is specified for "' + t + '" YAML type.');
}
var X = Dm;
function Ni(t, e) {
  var r = [];
  return t[e].forEach(function(i) {
    var o = r.length;
    r.forEach(function(n, a) {
      n.tag === i.tag && n.kind === i.kind && n.multi === i.multi && (o = a);
    }), r[o] = i;
  }), r;
}
function zm() {
  var t = {
    scalar: {},
    sequence: {},
    mapping: {},
    fallback: {},
    multi: {
      scalar: [],
      sequence: [],
      mapping: [],
      fallback: []
    }
  }, e, r;
  function i(o) {
    o.multi ? (t.multi[o.kind].push(o), t.multi.fallback.push(o)) : t[o.kind][o.tag] = t.fallback[o.tag] = o;
  }
  for (e = 0, r = arguments.length; e < r; e += 1)
    arguments[e].forEach(i);
  return t;
}
function Mr(t) {
  return this.extend(t);
}
Mr.prototype.extend = function(e) {
  var r = [], i = [];
  if (e instanceof X)
    i.push(e);
  else if (Array.isArray(e))
    i = i.concat(e);
  else if (e && (Array.isArray(e.implicit) || Array.isArray(e.explicit)))
    e.implicit && (r = r.concat(e.implicit)), e.explicit && (i = i.concat(e.explicit));
  else
    throw new yt("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");
  r.forEach(function(n) {
    if (!(n instanceof X))
      throw new yt("Specified list of YAML types (or a single Type object) contains a non-Type object.");
    if (n.loadKind && n.loadKind !== "scalar")
      throw new yt("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");
    if (n.multi)
      throw new yt("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.");
  }), i.forEach(function(n) {
    if (!(n instanceof X))
      throw new yt("Specified list of YAML types (or a single Type object) contains a non-Type object.");
  });
  var o = Object.create(Mr.prototype);
  return o.implicit = (this.implicit || []).concat(r), o.explicit = (this.explicit || []).concat(i), o.compiledImplicit = Ni(o, "implicit"), o.compiledExplicit = Ni(o, "explicit"), o.compiledTypeMap = zm(o.compiledImplicit, o.compiledExplicit), o;
};
var Pm = Mr, Nm = new X("tag:yaml.org,2002:str", {
  kind: "scalar",
  construct: function(t) {
    return t !== null ? t : "";
  }
}), Rm = new X("tag:yaml.org,2002:seq", {
  kind: "sequence",
  construct: function(t) {
    return t !== null ? t : [];
  }
}), Wm = new X("tag:yaml.org,2002:map", {
  kind: "mapping",
  construct: function(t) {
    return t !== null ? t : {};
  }
}), jm = new Pm({
  explicit: [
    Nm,
    Rm,
    Wm
  ]
});
function Hm(t) {
  if (t === null)
    return !0;
  var e = t.length;
  return e === 1 && t === "~" || e === 4 && (t === "null" || t === "Null" || t === "NULL");
}
function Ym() {
  return null;
}
function Um(t) {
  return t === null;
}
var Vm = new X("tag:yaml.org,2002:null", {
  kind: "scalar",
  resolve: Hm,
  construct: Ym,
  predicate: Um,
  represent: {
    canonical: function() {
      return "~";
    },
    lowercase: function() {
      return "null";
    },
    uppercase: function() {
      return "NULL";
    },
    camelcase: function() {
      return "Null";
    },
    empty: function() {
      return "";
    }
  },
  defaultStyle: "lowercase"
});
function Gm(t) {
  if (t === null)
    return !1;
  var e = t.length;
  return e === 4 && (t === "true" || t === "True" || t === "TRUE") || e === 5 && (t === "false" || t === "False" || t === "FALSE");
}
function Xm(t) {
  return t === "true" || t === "True" || t === "TRUE";
}
function Km(t) {
  return Object.prototype.toString.call(t) === "[object Boolean]";
}
var Zm = new X("tag:yaml.org,2002:bool", {
  kind: "scalar",
  resolve: Gm,
  construct: Xm,
  predicate: Km,
  represent: {
    lowercase: function(t) {
      return t ? "true" : "false";
    },
    uppercase: function(t) {
      return t ? "TRUE" : "FALSE";
    },
    camelcase: function(t) {
      return t ? "True" : "False";
    }
  },
  defaultStyle: "lowercase"
});
function Jm(t) {
  return 48 <= t && t <= 57 || 65 <= t && t <= 70 || 97 <= t && t <= 102;
}
function Qm(t) {
  return 48 <= t && t <= 55;
}
function tC(t) {
  return 48 <= t && t <= 57;
}
function eC(t) {
  if (t === null)
    return !1;
  var e = t.length, r = 0, i = !1, o;
  if (!e)
    return !1;
  if (o = t[r], (o === "-" || o === "+") && (o = t[++r]), o === "0") {
    if (r + 1 === e)
      return !0;
    if (o = t[++r], o === "b") {
      for (r++; r < e; r++)
        if (o = t[r], o !== "_") {
          if (o !== "0" && o !== "1")
            return !1;
          i = !0;
        }
      return i && o !== "_";
    }
    if (o === "x") {
      for (r++; r < e; r++)
        if (o = t[r], o !== "_") {
          if (!Jm(t.charCodeAt(r)))
            return !1;
          i = !0;
        }
      return i && o !== "_";
    }
    if (o === "o") {
      for (r++; r < e; r++)
        if (o = t[r], o !== "_") {
          if (!Qm(t.charCodeAt(r)))
            return !1;
          i = !0;
        }
      return i && o !== "_";
    }
  }
  if (o === "_")
    return !1;
  for (; r < e; r++)
    if (o = t[r], o !== "_") {
      if (!tC(t.charCodeAt(r)))
        return !1;
      i = !0;
    }
  return !(!i || o === "_");
}
function rC(t) {
  var e = t, r = 1, i;
  if (e.indexOf("_") !== -1 && (e = e.replace(/_/g, "")), i = e[0], (i === "-" || i === "+") && (i === "-" && (r = -1), e = e.slice(1), i = e[0]), e === "0")
    return 0;
  if (i === "0") {
    if (e[1] === "b")
      return r * parseInt(e.slice(2), 2);
    if (e[1] === "x")
      return r * parseInt(e.slice(2), 16);
    if (e[1] === "o")
      return r * parseInt(e.slice(2), 8);
  }
  return r * parseInt(e, 10);
}
function iC(t) {
  return Object.prototype.toString.call(t) === "[object Number]" && t % 1 === 0 && !K.isNegativeZero(t);
}
var oC = new X("tag:yaml.org,2002:int", {
  kind: "scalar",
  resolve: eC,
  construct: rC,
  predicate: iC,
  represent: {
    binary: function(t) {
      return t >= 0 ? "0b" + t.toString(2) : "-0b" + t.toString(2).slice(1);
    },
    octal: function(t) {
      return t >= 0 ? "0o" + t.toString(8) : "-0o" + t.toString(8).slice(1);
    },
    decimal: function(t) {
      return t.toString(10);
    },
    /* eslint-disable max-len */
    hexadecimal: function(t) {
      return t >= 0 ? "0x" + t.toString(16).toUpperCase() : "-0x" + t.toString(16).toUpperCase().slice(1);
    }
  },
  defaultStyle: "decimal",
  styleAliases: {
    binary: [2, "bin"],
    octal: [8, "oct"],
    decimal: [10, "dec"],
    hexadecimal: [16, "hex"]
  }
}), nC = new RegExp(
  // 2.5e4, 2.5 and integers
  "^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$"
);
function aC(t) {
  return !(t === null || !nC.test(t) || // Quick hack to not allow integers end with `_`
  // Probably should update regexp & check speed
  t[t.length - 1] === "_");
}
function sC(t) {
  var e, r;
  return e = t.replace(/_/g, "").toLowerCase(), r = e[0] === "-" ? -1 : 1, "+-".indexOf(e[0]) >= 0 && (e = e.slice(1)), e === ".inf" ? r === 1 ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY : e === ".nan" ? NaN : r * parseFloat(e, 10);
}
var lC = /^[-+]?[0-9]+e/;
function hC(t, e) {
  var r;
  if (isNaN(t))
    switch (e) {
      case "lowercase":
        return ".nan";
      case "uppercase":
        return ".NAN";
      case "camelcase":
        return ".NaN";
    }
  else if (Number.POSITIVE_INFINITY === t)
    switch (e) {
      case "lowercase":
        return ".inf";
      case "uppercase":
        return ".INF";
      case "camelcase":
        return ".Inf";
    }
  else if (Number.NEGATIVE_INFINITY === t)
    switch (e) {
      case "lowercase":
        return "-.inf";
      case "uppercase":
        return "-.INF";
      case "camelcase":
        return "-.Inf";
    }
  else if (K.isNegativeZero(t))
    return "-0.0";
  return r = t.toString(10), lC.test(r) ? r.replace("e", ".e") : r;
}
function cC(t) {
  return Object.prototype.toString.call(t) === "[object Number]" && (t % 1 !== 0 || K.isNegativeZero(t));
}
var uC = new X("tag:yaml.org,2002:float", {
  kind: "scalar",
  resolve: aC,
  construct: sC,
  predicate: cC,
  represent: hC,
  defaultStyle: "lowercase"
}), An = jm.extend({
  implicit: [
    Vm,
    Zm,
    oC,
    uC
  ]
}), dC = An, $n = new RegExp(
  "^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"
), On = new RegExp(
  "^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$"
);
function fC(t) {
  return t === null ? !1 : $n.exec(t) !== null || On.exec(t) !== null;
}
function gC(t) {
  var e, r, i, o, n, a, s, l = 0, c = null, u, f, h;
  if (e = $n.exec(t), e === null && (e = On.exec(t)), e === null)
    throw new Error("Date resolve error");
  if (r = +e[1], i = +e[2] - 1, o = +e[3], !e[4])
    return new Date(Date.UTC(r, i, o));
  if (n = +e[4], a = +e[5], s = +e[6], e[7]) {
    for (l = e[7].slice(0, 3); l.length < 3; )
      l += "0";
    l = +l;
  }
  return e[9] && (u = +e[10], f = +(e[11] || 0), c = (u * 60 + f) * 6e4, e[9] === "-" && (c = -c)), h = new Date(Date.UTC(r, i, o, n, a, s, l)), c && h.setTime(h.getTime() - c), h;
}
function pC(t) {
  return t.toISOString();
}
var mC = new X("tag:yaml.org,2002:timestamp", {
  kind: "scalar",
  resolve: fC,
  construct: gC,
  instanceOf: Date,
  represent: pC
});
function CC(t) {
  return t === "<<" || t === null;
}
var yC = new X("tag:yaml.org,2002:merge", {
  kind: "scalar",
  resolve: CC
}), oi = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;
function bC(t) {
  if (t === null)
    return !1;
  var e, r, i = 0, o = t.length, n = oi;
  for (r = 0; r < o; r++)
    if (e = n.indexOf(t.charAt(r)), !(e > 64)) {
      if (e < 0)
        return !1;
      i += 6;
    }
  return i % 8 === 0;
}
function xC(t) {
  var e, r, i = t.replace(/[\r\n=]/g, ""), o = i.length, n = oi, a = 0, s = [];
  for (e = 0; e < o; e++)
    e % 4 === 0 && e && (s.push(a >> 16 & 255), s.push(a >> 8 & 255), s.push(a & 255)), a = a << 6 | n.indexOf(i.charAt(e));
  return r = o % 4 * 6, r === 0 ? (s.push(a >> 16 & 255), s.push(a >> 8 & 255), s.push(a & 255)) : r === 18 ? (s.push(a >> 10 & 255), s.push(a >> 2 & 255)) : r === 12 && s.push(a >> 4 & 255), new Uint8Array(s);
}
function _C(t) {
  var e = "", r = 0, i, o, n = t.length, a = oi;
  for (i = 0; i < n; i++)
    i % 3 === 0 && i && (e += a[r >> 18 & 63], e += a[r >> 12 & 63], e += a[r >> 6 & 63], e += a[r & 63]), r = (r << 8) + t[i];
  return o = n % 3, o === 0 ? (e += a[r >> 18 & 63], e += a[r >> 12 & 63], e += a[r >> 6 & 63], e += a[r & 63]) : o === 2 ? (e += a[r >> 10 & 63], e += a[r >> 4 & 63], e += a[r << 2 & 63], e += a[64]) : o === 1 && (e += a[r >> 2 & 63], e += a[r << 4 & 63], e += a[64], e += a[64]), e;
}
function vC(t) {
  return Object.prototype.toString.call(t) === "[object Uint8Array]";
}
var TC = new X("tag:yaml.org,2002:binary", {
  kind: "scalar",
  resolve: bC,
  construct: xC,
  predicate: vC,
  represent: _C
}), kC = Object.prototype.hasOwnProperty, SC = Object.prototype.toString;
function BC(t) {
  if (t === null)
    return !0;
  var e = [], r, i, o, n, a, s = t;
  for (r = 0, i = s.length; r < i; r += 1) {
    if (o = s[r], a = !1, SC.call(o) !== "[object Object]")
      return !1;
    for (n in o)
      if (kC.call(o, n))
        if (!a)
          a = !0;
        else
          return !1;
    if (!a)
      return !1;
    if (e.indexOf(n) === -1)
      e.push(n);
    else
      return !1;
  }
  return !0;
}
function FC(t) {
  return t !== null ? t : [];
}
var wC = new X("tag:yaml.org,2002:omap", {
  kind: "sequence",
  resolve: BC,
  construct: FC
}), LC = Object.prototype.toString;
function AC(t) {
  if (t === null)
    return !0;
  var e, r, i, o, n, a = t;
  for (n = new Array(a.length), e = 0, r = a.length; e < r; e += 1) {
    if (i = a[e], LC.call(i) !== "[object Object]" || (o = Object.keys(i), o.length !== 1))
      return !1;
    n[e] = [o[0], i[o[0]]];
  }
  return !0;
}
function $C(t) {
  if (t === null)
    return [];
  var e, r, i, o, n, a = t;
  for (n = new Array(a.length), e = 0, r = a.length; e < r; e += 1)
    i = a[e], o = Object.keys(i), n[e] = [o[0], i[o[0]]];
  return n;
}
var OC = new X("tag:yaml.org,2002:pairs", {
  kind: "sequence",
  resolve: AC,
  construct: $C
}), EC = Object.prototype.hasOwnProperty;
function MC(t) {
  if (t === null)
    return !0;
  var e, r = t;
  for (e in r)
    if (EC.call(r, e) && r[e] !== null)
      return !1;
  return !0;
}
function IC(t) {
  return t !== null ? t : {};
}
var qC = new X("tag:yaml.org,2002:set", {
  kind: "mapping",
  resolve: MC,
  construct: IC
}), DC = dC.extend({
  implicit: [
    mC,
    yC
  ],
  explicit: [
    TC,
    wC,
    OC,
    qC
  ]
}), St = Object.prototype.hasOwnProperty, Ye = 1, En = 2, Mn = 3, Ue = 4, Cr = 1, zC = 2, Ri = 3, PC = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/, NC = /[\x85\u2028\u2029]/, RC = /[,\[\]\{\}]/, In = /^(?:!|!!|![a-z\-]+!)$/i, qn = /^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;
function Wi(t) {
  return Object.prototype.toString.call(t);
}
function ht(t) {
  return t === 10 || t === 13;
}
function Ot(t) {
  return t === 9 || t === 32;
}
function tt(t) {
  return t === 9 || t === 32 || t === 10 || t === 13;
}
function Wt(t) {
  return t === 44 || t === 91 || t === 93 || t === 123 || t === 125;
}
function WC(t) {
  var e;
  return 48 <= t && t <= 57 ? t - 48 : (e = t | 32, 97 <= e && e <= 102 ? e - 97 + 10 : -1);
}
function jC(t) {
  return t === 120 ? 2 : t === 117 ? 4 : t === 85 ? 8 : 0;
}
function HC(t) {
  return 48 <= t && t <= 57 ? t - 48 : -1;
}
function ji(t) {
  return t === 48 ? "\0" : t === 97 ? "\x07" : t === 98 ? "\b" : t === 116 || t === 9 ? "	" : t === 110 ? `
` : t === 118 ? "\v" : t === 102 ? "\f" : t === 114 ? "\r" : t === 101 ? "\x1B" : t === 32 ? " " : t === 34 ? '"' : t === 47 ? "/" : t === 92 ? "\\" : t === 78 ? "" : t === 95 ? " " : t === 76 ? "\u2028" : t === 80 ? "\u2029" : "";
}
function YC(t) {
  return t <= 65535 ? String.fromCharCode(t) : String.fromCharCode(
    (t - 65536 >> 10) + 55296,
    (t - 65536 & 1023) + 56320
  );
}
var Dn = new Array(256), zn = new Array(256);
for (var Rt = 0; Rt < 256; Rt++)
  Dn[Rt] = ji(Rt) ? 1 : 0, zn[Rt] = ji(Rt);
function UC(t, e) {
  this.input = t, this.filename = e.filename || null, this.schema = e.schema || DC, this.onWarning = e.onWarning || null, this.legacy = e.legacy || !1, this.json = e.json || !1, this.listener = e.listener || null, this.implicitTypes = this.schema.compiledImplicit, this.typeMap = this.schema.compiledTypeMap, this.length = t.length, this.position = 0, this.line = 0, this.lineStart = 0, this.lineIndent = 0, this.firstTabInLine = -1, this.documents = [];
}
function Pn(t, e) {
  var r = {
    name: t.filename,
    buffer: t.input.slice(0, -1),
    // omit trailing \0
    position: t.position,
    line: t.line,
    column: t.position - t.lineStart
  };
  return r.snippet = Em(r), new yt(e, r);
}
function T(t, e) {
  throw Pn(t, e);
}
function Ve(t, e) {
  t.onWarning && t.onWarning.call(null, Pn(t, e));
}
var Hi = {
  YAML: function(e, r, i) {
    var o, n, a;
    e.version !== null && T(e, "duplication of %YAML directive"), i.length !== 1 && T(e, "YAML directive accepts exactly one argument"), o = /^([0-9]+)\.([0-9]+)$/.exec(i[0]), o === null && T(e, "ill-formed argument of the YAML directive"), n = parseInt(o[1], 10), a = parseInt(o[2], 10), n !== 1 && T(e, "unacceptable YAML version of the document"), e.version = i[0], e.checkLineBreaks = a < 2, a !== 1 && a !== 2 && Ve(e, "unsupported YAML version of the document");
  },
  TAG: function(e, r, i) {
    var o, n;
    i.length !== 2 && T(e, "TAG directive accepts exactly two arguments"), o = i[0], n = i[1], In.test(o) || T(e, "ill-formed tag handle (first argument) of the TAG directive"), St.call(e.tagMap, o) && T(e, 'there is a previously declared suffix for "' + o + '" tag handle'), qn.test(n) || T(e, "ill-formed tag prefix (second argument) of the TAG directive");
    try {
      n = decodeURIComponent(n);
    } catch {
      T(e, "tag prefix is malformed: " + n);
    }
    e.tagMap[o] = n;
  }
};
function kt(t, e, r, i) {
  var o, n, a, s;
  if (e < r) {
    if (s = t.input.slice(e, r), i)
      for (o = 0, n = s.length; o < n; o += 1)
        a = s.charCodeAt(o), a === 9 || 32 <= a && a <= 1114111 || T(t, "expected valid JSON character");
    else
      PC.test(s) && T(t, "the stream contains non-printable characters");
    t.result += s;
  }
}
function Yi(t, e, r, i) {
  var o, n, a, s;
  for (K.isObject(r) || T(t, "cannot merge mappings; the provided source object is unacceptable"), o = Object.keys(r), a = 0, s = o.length; a < s; a += 1)
    n = o[a], St.call(e, n) || (e[n] = r[n], i[n] = !0);
}
function jt(t, e, r, i, o, n, a, s, l) {
  var c, u;
  if (Array.isArray(o))
    for (o = Array.prototype.slice.call(o), c = 0, u = o.length; c < u; c += 1)
      Array.isArray(o[c]) && T(t, "nested arrays are not supported inside keys"), typeof o == "object" && Wi(o[c]) === "[object Object]" && (o[c] = "[object Object]");
  if (typeof o == "object" && Wi(o) === "[object Object]" && (o = "[object Object]"), o = String(o), e === null && (e = {}), i === "tag:yaml.org,2002:merge")
    if (Array.isArray(n))
      for (c = 0, u = n.length; c < u; c += 1)
        Yi(t, e, n[c], r);
    else
      Yi(t, e, n, r);
  else
    !t.json && !St.call(r, o) && St.call(e, o) && (t.line = a || t.line, t.lineStart = s || t.lineStart, t.position = l || t.position, T(t, "duplicated mapping key")), o === "__proto__" ? Object.defineProperty(e, o, {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      value: n
    }) : e[o] = n, delete r[o];
  return e;
}
function ni(t) {
  var e;
  e = t.input.charCodeAt(t.position), e === 10 ? t.position++ : e === 13 ? (t.position++, t.input.charCodeAt(t.position) === 10 && t.position++) : T(t, "a line break is expected"), t.line += 1, t.lineStart = t.position, t.firstTabInLine = -1;
}
function H(t, e, r) {
  for (var i = 0, o = t.input.charCodeAt(t.position); o !== 0; ) {
    for (; Ot(o); )
      o === 9 && t.firstTabInLine === -1 && (t.firstTabInLine = t.position), o = t.input.charCodeAt(++t.position);
    if (e && o === 35)
      do
        o = t.input.charCodeAt(++t.position);
      while (o !== 10 && o !== 13 && o !== 0);
    if (ht(o))
      for (ni(t), o = t.input.charCodeAt(t.position), i++, t.lineIndent = 0; o === 32; )
        t.lineIndent++, o = t.input.charCodeAt(++t.position);
    else
      break;
  }
  return r !== -1 && i !== 0 && t.lineIndent < r && Ve(t, "deficient indentation"), i;
}
function cr(t) {
  var e = t.position, r;
  return r = t.input.charCodeAt(e), !!((r === 45 || r === 46) && r === t.input.charCodeAt(e + 1) && r === t.input.charCodeAt(e + 2) && (e += 3, r = t.input.charCodeAt(e), r === 0 || tt(r)));
}
function ai(t, e) {
  e === 1 ? t.result += " " : e > 1 && (t.result += K.repeat(`
`, e - 1));
}
function VC(t, e, r) {
  var i, o, n, a, s, l, c, u, f = t.kind, h = t.result, g;
  if (g = t.input.charCodeAt(t.position), tt(g) || Wt(g) || g === 35 || g === 38 || g === 42 || g === 33 || g === 124 || g === 62 || g === 39 || g === 34 || g === 37 || g === 64 || g === 96 || (g === 63 || g === 45) && (o = t.input.charCodeAt(t.position + 1), tt(o) || r && Wt(o)))
    return !1;
  for (t.kind = "scalar", t.result = "", n = a = t.position, s = !1; g !== 0; ) {
    if (g === 58) {
      if (o = t.input.charCodeAt(t.position + 1), tt(o) || r && Wt(o))
        break;
    } else if (g === 35) {
      if (i = t.input.charCodeAt(t.position - 1), tt(i))
        break;
    } else {
      if (t.position === t.lineStart && cr(t) || r && Wt(g))
        break;
      if (ht(g))
        if (l = t.line, c = t.lineStart, u = t.lineIndent, H(t, !1, -1), t.lineIndent >= e) {
          s = !0, g = t.input.charCodeAt(t.position);
          continue;
        } else {
          t.position = a, t.line = l, t.lineStart = c, t.lineIndent = u;
          break;
        }
    }
    s && (kt(t, n, a, !1), ai(t, t.line - l), n = a = t.position, s = !1), Ot(g) || (a = t.position + 1), g = t.input.charCodeAt(++t.position);
  }
  return kt(t, n, a, !1), t.result ? !0 : (t.kind = f, t.result = h, !1);
}
function GC(t, e) {
  var r, i, o;
  if (r = t.input.charCodeAt(t.position), r !== 39)
    return !1;
  for (t.kind = "scalar", t.result = "", t.position++, i = o = t.position; (r = t.input.charCodeAt(t.position)) !== 0; )
    if (r === 39)
      if (kt(t, i, t.position, !0), r = t.input.charCodeAt(++t.position), r === 39)
        i = t.position, t.position++, o = t.position;
      else
        return !0;
    else
      ht(r) ? (kt(t, i, o, !0), ai(t, H(t, !1, e)), i = o = t.position) : t.position === t.lineStart && cr(t) ? T(t, "unexpected end of the document within a single quoted scalar") : (t.position++, o = t.position);
  T(t, "unexpected end of the stream within a single quoted scalar");
}
function XC(t, e) {
  var r, i, o, n, a, s;
  if (s = t.input.charCodeAt(t.position), s !== 34)
    return !1;
  for (t.kind = "scalar", t.result = "", t.position++, r = i = t.position; (s = t.input.charCodeAt(t.position)) !== 0; ) {
    if (s === 34)
      return kt(t, r, t.position, !0), t.position++, !0;
    if (s === 92) {
      if (kt(t, r, t.position, !0), s = t.input.charCodeAt(++t.position), ht(s))
        H(t, !1, e);
      else if (s < 256 && Dn[s])
        t.result += zn[s], t.position++;
      else if ((a = jC(s)) > 0) {
        for (o = a, n = 0; o > 0; o--)
          s = t.input.charCodeAt(++t.position), (a = WC(s)) >= 0 ? n = (n << 4) + a : T(t, "expected hexadecimal character");
        t.result += YC(n), t.position++;
      } else
        T(t, "unknown escape sequence");
      r = i = t.position;
    } else
      ht(s) ? (kt(t, r, i, !0), ai(t, H(t, !1, e)), r = i = t.position) : t.position === t.lineStart && cr(t) ? T(t, "unexpected end of the document within a double quoted scalar") : (t.position++, i = t.position);
  }
  T(t, "unexpected end of the stream within a double quoted scalar");
}
function KC(t, e) {
  var r = !0, i, o, n, a = t.tag, s, l = t.anchor, c, u, f, h, g, y = /* @__PURE__ */ Object.create(null), _, k, O, x;
  if (x = t.input.charCodeAt(t.position), x === 91)
    u = 93, g = !1, s = [];
  else if (x === 123)
    u = 125, g = !0, s = {};
  else
    return !1;
  for (t.anchor !== null && (t.anchorMap[t.anchor] = s), x = t.input.charCodeAt(++t.position); x !== 0; ) {
    if (H(t, !0, e), x = t.input.charCodeAt(t.position), x === u)
      return t.position++, t.tag = a, t.anchor = l, t.kind = g ? "mapping" : "sequence", t.result = s, !0;
    r ? x === 44 && T(t, "expected the node content, but found ','") : T(t, "missed comma between flow collection entries"), k = _ = O = null, f = h = !1, x === 63 && (c = t.input.charCodeAt(t.position + 1), tt(c) && (f = h = !0, t.position++, H(t, !0, e))), i = t.line, o = t.lineStart, n = t.position, Xt(t, e, Ye, !1, !0), k = t.tag, _ = t.result, H(t, !0, e), x = t.input.charCodeAt(t.position), (h || t.line === i) && x === 58 && (f = !0, x = t.input.charCodeAt(++t.position), H(t, !0, e), Xt(t, e, Ye, !1, !0), O = t.result), g ? jt(t, s, y, k, _, O, i, o, n) : f ? s.push(jt(t, null, y, k, _, O, i, o, n)) : s.push(_), H(t, !0, e), x = t.input.charCodeAt(t.position), x === 44 ? (r = !0, x = t.input.charCodeAt(++t.position)) : r = !1;
  }
  T(t, "unexpected end of the stream within a flow collection");
}
function ZC(t, e) {
  var r, i, o = Cr, n = !1, a = !1, s = e, l = 0, c = !1, u, f;
  if (f = t.input.charCodeAt(t.position), f === 124)
    i = !1;
  else if (f === 62)
    i = !0;
  else
    return !1;
  for (t.kind = "scalar", t.result = ""; f !== 0; )
    if (f = t.input.charCodeAt(++t.position), f === 43 || f === 45)
      Cr === o ? o = f === 43 ? Ri : zC : T(t, "repeat of a chomping mode identifier");
    else if ((u = HC(f)) >= 0)
      u === 0 ? T(t, "bad explicit indentation width of a block scalar; it cannot be less than one") : a ? T(t, "repeat of an indentation width identifier") : (s = e + u - 1, a = !0);
    else
      break;
  if (Ot(f)) {
    do
      f = t.input.charCodeAt(++t.position);
    while (Ot(f));
    if (f === 35)
      do
        f = t.input.charCodeAt(++t.position);
      while (!ht(f) && f !== 0);
  }
  for (; f !== 0; ) {
    for (ni(t), t.lineIndent = 0, f = t.input.charCodeAt(t.position); (!a || t.lineIndent < s) && f === 32; )
      t.lineIndent++, f = t.input.charCodeAt(++t.position);
    if (!a && t.lineIndent > s && (s = t.lineIndent), ht(f)) {
      l++;
      continue;
    }
    if (t.lineIndent < s) {
      o === Ri ? t.result += K.repeat(`
`, n ? 1 + l : l) : o === Cr && n && (t.result += `
`);
      break;
    }
    for (i ? Ot(f) ? (c = !0, t.result += K.repeat(`
`, n ? 1 + l : l)) : c ? (c = !1, t.result += K.repeat(`
`, l + 1)) : l === 0 ? n && (t.result += " ") : t.result += K.repeat(`
`, l) : t.result += K.repeat(`
`, n ? 1 + l : l), n = !0, a = !0, l = 0, r = t.position; !ht(f) && f !== 0; )
      f = t.input.charCodeAt(++t.position);
    kt(t, r, t.position, !1);
  }
  return !0;
}
function Ui(t, e) {
  var r, i = t.tag, o = t.anchor, n = [], a, s = !1, l;
  if (t.firstTabInLine !== -1)
    return !1;
  for (t.anchor !== null && (t.anchorMap[t.anchor] = n), l = t.input.charCodeAt(t.position); l !== 0 && (t.firstTabInLine !== -1 && (t.position = t.firstTabInLine, T(t, "tab characters must not be used in indentation")), !(l !== 45 || (a = t.input.charCodeAt(t.position + 1), !tt(a)))); ) {
    if (s = !0, t.position++, H(t, !0, -1) && t.lineIndent <= e) {
      n.push(null), l = t.input.charCodeAt(t.position);
      continue;
    }
    if (r = t.line, Xt(t, e, Mn, !1, !0), n.push(t.result), H(t, !0, -1), l = t.input.charCodeAt(t.position), (t.line === r || t.lineIndent > e) && l !== 0)
      T(t, "bad indentation of a sequence entry");
    else if (t.lineIndent < e)
      break;
  }
  return s ? (t.tag = i, t.anchor = o, t.kind = "sequence", t.result = n, !0) : !1;
}
function JC(t, e, r) {
  var i, o, n, a, s, l, c = t.tag, u = t.anchor, f = {}, h = /* @__PURE__ */ Object.create(null), g = null, y = null, _ = null, k = !1, O = !1, x;
  if (t.firstTabInLine !== -1)
    return !1;
  for (t.anchor !== null && (t.anchorMap[t.anchor] = f), x = t.input.charCodeAt(t.position); x !== 0; ) {
    if (!k && t.firstTabInLine !== -1 && (t.position = t.firstTabInLine, T(t, "tab characters must not be used in indentation")), i = t.input.charCodeAt(t.position + 1), n = t.line, (x === 63 || x === 58) && tt(i))
      x === 63 ? (k && (jt(t, f, h, g, y, null, a, s, l), g = y = _ = null), O = !0, k = !0, o = !0) : k ? (k = !1, o = !0) : T(t, "incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"), t.position += 1, x = i;
    else {
      if (a = t.line, s = t.lineStart, l = t.position, !Xt(t, r, En, !1, !0))
        break;
      if (t.line === n) {
        for (x = t.input.charCodeAt(t.position); Ot(x); )
          x = t.input.charCodeAt(++t.position);
        if (x === 58)
          x = t.input.charCodeAt(++t.position), tt(x) || T(t, "a whitespace character is expected after the key-value separator within a block mapping"), k && (jt(t, f, h, g, y, null, a, s, l), g = y = _ = null), O = !0, k = !1, o = !1, g = t.tag, y = t.result;
        else if (O)
          T(t, "can not read an implicit mapping pair; a colon is missed");
        else
          return t.tag = c, t.anchor = u, !0;
      } else if (O)
        T(t, "can not read a block mapping entry; a multiline key may not be an implicit key");
      else
        return t.tag = c, t.anchor = u, !0;
    }
    if ((t.line === n || t.lineIndent > e) && (k && (a = t.line, s = t.lineStart, l = t.position), Xt(t, e, Ue, !0, o) && (k ? y = t.result : _ = t.result), k || (jt(t, f, h, g, y, _, a, s, l), g = y = _ = null), H(t, !0, -1), x = t.input.charCodeAt(t.position)), (t.line === n || t.lineIndent > e) && x !== 0)
      T(t, "bad indentation of a mapping entry");
    else if (t.lineIndent < e)
      break;
  }
  return k && jt(t, f, h, g, y, null, a, s, l), O && (t.tag = c, t.anchor = u, t.kind = "mapping", t.result = f), O;
}
function QC(t) {
  var e, r = !1, i = !1, o, n, a;
  if (a = t.input.charCodeAt(t.position), a !== 33)
    return !1;
  if (t.tag !== null && T(t, "duplication of a tag property"), a = t.input.charCodeAt(++t.position), a === 60 ? (r = !0, a = t.input.charCodeAt(++t.position)) : a === 33 ? (i = !0, o = "!!", a = t.input.charCodeAt(++t.position)) : o = "!", e = t.position, r) {
    do
      a = t.input.charCodeAt(++t.position);
    while (a !== 0 && a !== 62);
    t.position < t.length ? (n = t.input.slice(e, t.position), a = t.input.charCodeAt(++t.position)) : T(t, "unexpected end of the stream within a verbatim tag");
  } else {
    for (; a !== 0 && !tt(a); )
      a === 33 && (i ? T(t, "tag suffix cannot contain exclamation marks") : (o = t.input.slice(e - 1, t.position + 1), In.test(o) || T(t, "named tag handle cannot contain such characters"), i = !0, e = t.position + 1)), a = t.input.charCodeAt(++t.position);
    n = t.input.slice(e, t.position), RC.test(n) && T(t, "tag suffix cannot contain flow indicator characters");
  }
  n && !qn.test(n) && T(t, "tag name cannot contain such characters: " + n);
  try {
    n = decodeURIComponent(n);
  } catch {
    T(t, "tag name is malformed: " + n);
  }
  return r ? t.tag = n : St.call(t.tagMap, o) ? t.tag = t.tagMap[o] + n : o === "!" ? t.tag = "!" + n : o === "!!" ? t.tag = "tag:yaml.org,2002:" + n : T(t, 'undeclared tag handle "' + o + '"'), !0;
}
function ty(t) {
  var e, r;
  if (r = t.input.charCodeAt(t.position), r !== 38)
    return !1;
  for (t.anchor !== null && T(t, "duplication of an anchor property"), r = t.input.charCodeAt(++t.position), e = t.position; r !== 0 && !tt(r) && !Wt(r); )
    r = t.input.charCodeAt(++t.position);
  return t.position === e && T(t, "name of an anchor node must contain at least one character"), t.anchor = t.input.slice(e, t.position), !0;
}
function ey(t) {
  var e, r, i;
  if (i = t.input.charCodeAt(t.position), i !== 42)
    return !1;
  for (i = t.input.charCodeAt(++t.position), e = t.position; i !== 0 && !tt(i) && !Wt(i); )
    i = t.input.charCodeAt(++t.position);
  return t.position === e && T(t, "name of an alias node must contain at least one character"), r = t.input.slice(e, t.position), St.call(t.anchorMap, r) || T(t, 'unidentified alias "' + r + '"'), t.result = t.anchorMap[r], H(t, !0, -1), !0;
}
function Xt(t, e, r, i, o) {
  var n, a, s, l = 1, c = !1, u = !1, f, h, g, y, _, k;
  if (t.listener !== null && t.listener("open", t), t.tag = null, t.anchor = null, t.kind = null, t.result = null, n = a = s = Ue === r || Mn === r, i && H(t, !0, -1) && (c = !0, t.lineIndent > e ? l = 1 : t.lineIndent === e ? l = 0 : t.lineIndent < e && (l = -1)), l === 1)
    for (; QC(t) || ty(t); )
      H(t, !0, -1) ? (c = !0, s = n, t.lineIndent > e ? l = 1 : t.lineIndent === e ? l = 0 : t.lineIndent < e && (l = -1)) : s = !1;
  if (s && (s = c || o), (l === 1 || Ue === r) && (Ye === r || En === r ? _ = e : _ = e + 1, k = t.position - t.lineStart, l === 1 ? s && (Ui(t, k) || JC(t, k, _)) || KC(t, _) ? u = !0 : (a && ZC(t, _) || GC(t, _) || XC(t, _) ? u = !0 : ey(t) ? (u = !0, (t.tag !== null || t.anchor !== null) && T(t, "alias node should not have any properties")) : VC(t, _, Ye === r) && (u = !0, t.tag === null && (t.tag = "?")), t.anchor !== null && (t.anchorMap[t.anchor] = t.result)) : l === 0 && (u = s && Ui(t, k))), t.tag === null)
    t.anchor !== null && (t.anchorMap[t.anchor] = t.result);
  else if (t.tag === "?") {
    for (t.result !== null && t.kind !== "scalar" && T(t, 'unacceptable node kind for !<?> tag; it should be "scalar", not "' + t.kind + '"'), f = 0, h = t.implicitTypes.length; f < h; f += 1)
      if (y = t.implicitTypes[f], y.resolve(t.result)) {
        t.result = y.construct(t.result), t.tag = y.tag, t.anchor !== null && (t.anchorMap[t.anchor] = t.result);
        break;
      }
  } else if (t.tag !== "!") {
    if (St.call(t.typeMap[t.kind || "fallback"], t.tag))
      y = t.typeMap[t.kind || "fallback"][t.tag];
    else
      for (y = null, g = t.typeMap.multi[t.kind || "fallback"], f = 0, h = g.length; f < h; f += 1)
        if (t.tag.slice(0, g[f].tag.length) === g[f].tag) {
          y = g[f];
          break;
        }
    y || T(t, "unknown tag !<" + t.tag + ">"), t.result !== null && y.kind !== t.kind && T(t, "unacceptable node kind for !<" + t.tag + '> tag; it should be "' + y.kind + '", not "' + t.kind + '"'), y.resolve(t.result, t.tag) ? (t.result = y.construct(t.result, t.tag), t.anchor !== null && (t.anchorMap[t.anchor] = t.result)) : T(t, "cannot resolve a node with !<" + t.tag + "> explicit tag");
  }
  return t.listener !== null && t.listener("close", t), t.tag !== null || t.anchor !== null || u;
}
function ry(t) {
  var e = t.position, r, i, o, n = !1, a;
  for (t.version = null, t.checkLineBreaks = t.legacy, t.tagMap = /* @__PURE__ */ Object.create(null), t.anchorMap = /* @__PURE__ */ Object.create(null); (a = t.input.charCodeAt(t.position)) !== 0 && (H(t, !0, -1), a = t.input.charCodeAt(t.position), !(t.lineIndent > 0 || a !== 37)); ) {
    for (n = !0, a = t.input.charCodeAt(++t.position), r = t.position; a !== 0 && !tt(a); )
      a = t.input.charCodeAt(++t.position);
    for (i = t.input.slice(r, t.position), o = [], i.length < 1 && T(t, "directive name must not be less than one character in length"); a !== 0; ) {
      for (; Ot(a); )
        a = t.input.charCodeAt(++t.position);
      if (a === 35) {
        do
          a = t.input.charCodeAt(++t.position);
        while (a !== 0 && !ht(a));
        break;
      }
      if (ht(a))
        break;
      for (r = t.position; a !== 0 && !tt(a); )
        a = t.input.charCodeAt(++t.position);
      o.push(t.input.slice(r, t.position));
    }
    a !== 0 && ni(t), St.call(Hi, i) ? Hi[i](t, i, o) : Ve(t, 'unknown document directive "' + i + '"');
  }
  if (H(t, !0, -1), t.lineIndent === 0 && t.input.charCodeAt(t.position) === 45 && t.input.charCodeAt(t.position + 1) === 45 && t.input.charCodeAt(t.position + 2) === 45 ? (t.position += 3, H(t, !0, -1)) : n && T(t, "directives end mark is expected"), Xt(t, t.lineIndent - 1, Ue, !1, !0), H(t, !0, -1), t.checkLineBreaks && NC.test(t.input.slice(e, t.position)) && Ve(t, "non-ASCII line breaks are interpreted as content"), t.documents.push(t.result), t.position === t.lineStart && cr(t)) {
    t.input.charCodeAt(t.position) === 46 && (t.position += 3, H(t, !0, -1));
    return;
  }
  if (t.position < t.length - 1)
    T(t, "end of the stream or a document separator is expected");
  else
    return;
}
function Nn(t, e) {
  t = String(t), e = e || {}, t.length !== 0 && (t.charCodeAt(t.length - 1) !== 10 && t.charCodeAt(t.length - 1) !== 13 && (t += `
`), t.charCodeAt(0) === 65279 && (t = t.slice(1)));
  var r = new UC(t, e), i = t.indexOf("\0");
  for (i !== -1 && (r.position = i, T(r, "null byte is not allowed in input")), r.input += "\0"; r.input.charCodeAt(r.position) === 32; )
    r.lineIndent += 1, r.position += 1;
  for (; r.position < r.length - 1; )
    ry(r);
  return r.documents;
}
function iy(t, e, r) {
  e !== null && typeof e == "object" && typeof r > "u" && (r = e, e = null);
  var i = Nn(t, r);
  if (typeof e != "function")
    return i;
  for (var o = 0, n = i.length; o < n; o += 1)
    e(i[o]);
}
function oy(t, e) {
  var r = Nn(t, e);
  if (r.length !== 0) {
    if (r.length === 1)
      return r[0];
    throw new yt("expected a single document in the stream, but found more");
  }
}
var ny = iy, ay = oy, sy = {
  loadAll: ny,
  load: ay
}, ly = An, hy = sy.load;
function cy(t) {
  const e = t.match(Ho);
  if (!e)
    return {
      text: t,
      metadata: {}
    };
  let r = hy(e[1], {
    // To support config, we need JSON schema.
    // https://www.yaml.org/spec/1.2/spec.html#id2803231
    schema: ly
  }) ?? {};
  r = typeof r == "object" && !Array.isArray(r) ? r : {};
  const i = {};
  return r.displayMode && (i.displayMode = r.displayMode.toString()), r.title && (i.title = r.title.toString()), r.config && (i.config = r.config), {
    text: t.slice(e[0].length),
    metadata: i
  };
}
const uy = (t) => t.replace(/\r\n?/g, `
`).replace(
  /<(\w+)([^>]*)>/g,
  (e, r, i) => "<" + r + i.replace(/="([^"]*)"/g, "='$1'") + ">"
), dy = (t) => {
  const { text: e, metadata: r } = cy(t), { displayMode: i, title: o, config: n = {} } = r;
  return i && (n.gantt || (n.gantt = {}), n.gantt.displayMode = i), { title: o, config: n, text: e };
}, fy = (t) => {
  const e = se.detectInit(t) ?? {}, r = se.detectDirective(t, "wrap");
  return Array.isArray(r) ? e.wrap = r.some(({ type: i }) => {
  }) : (r == null ? void 0 : r.type) === "wrap" && (e.wrap = !0), {
    text: Hf(t),
    directive: e
  };
};
function gy(t) {
  const e = uy(t), r = dy(e), i = fy(r.text), o = Zo(r.config, i.directive);
  return t = xm(i.text), {
    code: t,
    title: r.title,
    config: o
  };
}
const py = 5e4, my = "graph TB;a[Maximum text size in diagram exceeded];style a fill:#faa", Cy = "sandbox", yy = "loose", by = "http://www.w3.org/2000/svg", xy = "http://www.w3.org/1999/xlink", _y = "http://www.w3.org/1999/xhtml", vy = "100%", Ty = "100%", ky = "border:0;margin:0;", Sy = "margin:0", By = "allow-top-navigation-by-user-activation allow-popups", Fy = 'The "iframe" tag is not supported by your browser.', wy = ["foreignobject"], Ly = ["dominant-baseline"];
function Rn(t) {
  const e = gy(t);
  return We(), gg(e.config ?? {}), e;
}
async function Ay(t, e) {
  ri(), t = Rn(t).code;
  try {
    await ii(t);
  } catch (r) {
    if (e != null && e.suppressErrors)
      return !1;
    throw r;
  }
  return !0;
}
const $y = function(t) {
  let e = t;
  return e = e.replace(/style.*:\S*#.*;/g, function(r) {
    return r.substring(0, r.length - 1);
  }), e = e.replace(/classDef.*:\S*#.*;/g, function(r) {
    return r.substring(0, r.length - 1);
  }), e = e.replace(/#\w+;/g, function(r) {
    const i = r.substring(1, r.length - 1);
    return /^\+?\d+$/.test(i) ? "ﬂ°°" + i + "¶ß" : "ﬂ°" + i + "¶ß";
  }), e;
}, Oy = function(t) {
  return t.replace(/ﬂ°°/g, "&#").replace(/ﬂ°/g, "&").replace(/¶ß/g, ";");
}, Vi = (t, e, r = []) => `
.${t} ${e} { ${r.join(" !important; ")} !important; }`, Ey = (t, e = {}) => {
  var r;
  let i = "";
  if (t.themeCSS !== void 0 && (i += `
${t.themeCSS}`), t.fontFamily !== void 0 && (i += `
:root { --mermaid-font-family: ${t.fontFamily}}`), t.altFontFamily !== void 0 && (i += `
:root { --mermaid-alt-font-family: ${t.altFontFamily}}`), !gr(e)) {
    const s = t.htmlLabels || ((r = t.flowchart) == null ? void 0 : r.htmlLabels) ? ["> *", "span"] : ["rect", "polygon", "ellipse", "circle", "path"];
    for (const l in e) {
      const c = e[l];
      gr(c.styles) || s.forEach((u) => {
        i += Vi(c.id, u, c.styles);
      }), gr(c.textStyles) || (i += Vi(c.id, "tspan", c.textStyles));
    }
  }
  return i;
}, My = (t, e, r, i) => {
  const o = Ey(t, r), n = Mp(e, o, t.themeVariables);
  return Br(Yd(`${i}{${n}}`), Vd);
}, Iy = (t = "", e, r) => {
  let i = t;
  return !r && !e && (i = i.replace(
    /marker-end="url\([\d+./:=?A-Za-z-]*?#/g,
    'marker-end="url(#'
  )), i = Oy(i), i = i.replace(/<br>/g, "<br/>"), i;
}, qy = (t = "", e) => {
  var r, i;
  const o = (i = (r = e == null ? void 0 : e.viewBox) == null ? void 0 : r.baseVal) != null && i.height ? e.viewBox.baseVal.height + "px" : Ty, n = btoa('<body style="' + Sy + '">' + t + "</body>");
  return `<iframe style="width:${vy};height:${o};${ky}" src="data:text/html;base64,${n}" sandbox="${By}">
  ${Fy}
</iframe>`;
}, Gi = (t, e, r, i, o) => {
  const n = t.append("div");
  n.attr("id", r), i && n.attr("style", i);
  const a = n.append("svg").attr("id", e).attr("width", "100%").attr("xmlns", by);
  return o && a.attr("xmlns:xlink", o), a.append("g"), t;
};
function Xi(t, e) {
  return t.append("iframe").attr("id", e).attr("style", "width: 100%; height: 100%;").attr("sandbox", "");
}
const Dy = (t, e, r, i) => {
  var o, n, a;
  (o = t.getElementById(e)) == null || o.remove(), (n = t.getElementById(r)) == null || n.remove(), (a = t.getElementById(i)) == null || a.remove();
}, zy = async function(t, e, r) {
  var i, o, n, a, s, l;
  ri();
  const c = Rn(e);
  e = c.code;
  const u = ut();
  B.debug(u), e.length > ((u == null ? void 0 : u.maxTextSize) ?? py) && (e = my);
  const f = "#" + t, h = "i" + t, g = "#" + h, y = "d" + t, _ = "#" + y;
  let k = ot("body");
  const O = u.securityLevel === Cy, x = u.securityLevel === yy, z = u.fontFamily;
  if (r !== void 0) {
    if (r && (r.innerHTML = ""), O) {
      const w = Xi(ot(r), h);
      k = ot(w.nodes()[0].contentDocument.body), k.node().style.margin = 0;
    } else
      k = ot(r);
    Gi(k, t, y, `font-family: ${z}`, xy);
  } else {
    if (Dy(document, t, y, h), O) {
      const w = Xi(ot("body"), h);
      k = ot(w.nodes()[0].contentDocument.body), k.node().style.margin = 0;
    } else
      k = ot("body");
    Gi(k, t, y);
  }
  e = $y(e);
  let q, P;
  try {
    q = await ii(e, { title: c.title });
  } catch (w) {
    q = new Fn("error"), P = w;
  }
  const R = k.select(_).node(), E = q.type, zt = R.firstChild, Pt = zt.firstChild, W = (o = (i = q.renderer).getClasses) == null ? void 0 : o.call(i, e, q), M = My(u, E, W, f), Ft = document.createElement("style");
  Ft.innerHTML = M, zt.insertBefore(Ft, Pt);
  try {
    await q.renderer.draw(e, t, Di, q);
  } catch (w) {
    throw Zp.draw(e, t, Di), w;
  }
  const be = k.select(`${_} svg`), A = (a = (n = q.db).getAccTitle) == null ? void 0 : a.call(n), b = (l = (s = q.db).getAccDescription) == null ? void 0 : l.call(s);
  Ny(E, be, A, b), k.select(`[id="${t}"]`).selectAll("foreignobject > *").attr("xmlns", _y);
  let p = k.select(_).node().innerHTML;
  if (B.debug("config.arrowMarkerAbsolute", u.arrowMarkerAbsolute), p = Iy(p, O, Ro(u.arrowMarkerAbsolute)), O) {
    const w = k.select(_ + " svg").node();
    p = qy(p, w);
  } else
    x || (p = Me.sanitize(p, {
      ADD_TAGS: wy,
      ADD_ATTR: Ly
    }));
  if (mm(), P)
    throw P;
  const C = ot(O ? g : _).node();
  return C && "remove" in C && C.remove(), {
    svg: p,
    bindFunctions: q.db.bindFunctions
  };
};
function Py(t = {}) {
  var e;
  t != null && t.fontFamily && !((e = t.themeVariables) != null && e.fontFamily) && (t.themeVariables || (t.themeVariables = {}), t.themeVariables.fontFamily = t.fontFamily), dg(t), t != null && t.theme && t.theme in bt ? t.themeVariables = bt[t.theme].getThemeVariables(
    t.themeVariables
  ) : t && (t.themeVariables = bt.default.getThemeVariables(t.themeVariables));
  const r = typeof t == "object" ? ug(t) : Qo();
  Yr(r.logLevel), ri();
}
function Ny(t, e, r, i) {
  ym(e, t), bm(e, r, i, e.attr("id"));
}
const Mt = Object.freeze({
  render: zy,
  parse: Ay,
  getDiagramFromText: ii,
  initialize: Py,
  getConfig: ut,
  setConfig: tn,
  getSiteConfig: Qo,
  updateSiteConfig: fg,
  reset: () => {
    We();
  },
  globalReset: () => {
    We(Vt);
  },
  defaultConfig: Vt
});
Yr(ut().logLevel);
We(ut());
const Ry = async () => {
  B.debug("Loading registered diagrams");
  const e = (await Promise.allSettled(
    Object.entries(Ut).map(async ([r, { detector: i, loader: o }]) => {
      if (o)
        try {
          ei(r);
        } catch {
          try {
            const { diagram: a, id: s } = await o();
            He(s, a, i);
          } catch (a) {
            throw B.error(`Failed to load external diagram with key ${r}. Removing from detectors.`), delete Ut[r], a;
          }
        }
    })
  )).filter((r) => r.status === "rejected");
  if (e.length > 0) {
    B.error(`Failed to load ${e.length} external diagrams`);
    for (const r of e)
      B.error(r);
    throw new Error(`Failed to load ${e.length} external diagrams`);
  }
}, Wy = (t, e, r) => {
  B.warn(t), Ko(t) ? (r && r(t.str, t.hash), e.push({ ...t, message: t.str, error: t })) : (r && r(t), t instanceof Error && e.push({
    str: t.message,
    message: t.message,
    hash: t.name,
    error: t
  }));
}, Wn = async function(t = {
  querySelector: ".mermaid"
}) {
  try {
    await jy(t);
  } catch (e) {
    if (Ko(e) && B.error(e.str), st.parseError && st.parseError(e), !t.suppressErrors)
      throw B.error("Use the suppressErrors option to suppress these errors"), e;
  }
}, jy = async function({ postRenderCallback: t, querySelector: e, nodes: r } = {
  querySelector: ".mermaid"
}) {
  const i = Mt.getConfig();
  B.debug(`${t ? "" : "No "}Callback function found`);
  let o;
  if (r)
    o = r;
  else if (e)
    o = document.querySelectorAll(e);
  else
    throw new Error("Nodes and querySelector are both undefined");
  B.debug(`Found ${o.length} diagrams`), (i == null ? void 0 : i.startOnLoad) !== void 0 && (B.debug("Start On Load: " + (i == null ? void 0 : i.startOnLoad)), Mt.updateSiteConfig({ startOnLoad: i == null ? void 0 : i.startOnLoad }));
  const n = new se.InitIDGenerator(i.deterministicIds, i.deterministicIDSeed);
  let a;
  const s = [];
  for (const l of Array.from(o)) {
    B.info("Rendering diagram: " + l.id);
    /*! Check if previously processed */
    if (l.getAttribute("data-processed"))
      continue;
    l.setAttribute("data-processed", "true");
    const c = `mermaid-${n.next()}`;
    a = l.innerHTML, a = _a(se.entityDecode(a)).trim().replace(/<br\s*\/?>/gi, "<br/>");
    const u = se.detectInit(a);
    u && B.debug("Detected early reinit: ", u);
    try {
      const { svg: f, bindFunctions: h } = await Un(c, a, l);
      l.innerHTML = f, t && await t(c), h && h(l);
    } catch (f) {
      Wy(f, s, st.parseError);
    }
  }
  if (s.length > 0)
    throw s[0];
}, jn = function(t) {
  Mt.initialize(t);
}, Hy = async function(t, e, r) {
  B.warn("mermaid.init is deprecated. Please use run instead."), t && jn(t);
  const i = { postRenderCallback: r, querySelector: ".mermaid" };
  typeof e == "string" ? i.querySelector = e : e && (e instanceof HTMLElement ? i.nodes = [e] : i.nodes = e), await Wn(i);
}, Yy = async (t, {
  lazyLoad: e = !0
} = {}) => {
  Uo(...t), e === !1 && await Ry();
}, Hn = function() {
  if (st.startOnLoad) {
    const { startOnLoad: t } = Mt.getConfig();
    t && st.run().catch((e) => B.error("Mermaid failed to initialize", e));
  }
};
if (typeof document < "u") {
  /*!
   * Wait for document loaded before starting the execution
   */
  window.addEventListener("load", Hn, !1);
}
const Uy = function(t) {
  st.parseError = t;
}, Ge = [];
let yr = !1;
const Yn = async () => {
  if (!yr) {
    for (yr = !0; Ge.length > 0; ) {
      const t = Ge.shift();
      if (t)
        try {
          await t();
        } catch (e) {
          B.error("Error executing queue", e);
        }
    }
    yr = !1;
  }
}, Vy = async (t, e) => new Promise((r, i) => {
  const o = () => new Promise((n, a) => {
    Mt.parse(t, e).then(
      (s) => {
        n(s), r(s);
      },
      (s) => {
        var l;
        B.error("Error parsing", s), (l = st.parseError) == null || l.call(st, s), a(s), i(s);
      }
    );
  });
  Ge.push(o), Yn().catch(i);
}), Un = (t, e, r) => new Promise((i, o) => {
  const n = () => new Promise((a, s) => {
    Mt.render(t, e, r).then(
      (l) => {
        a(l), i(l);
      },
      (l) => {
        var c;
        B.error("Error parsing", l), (c = st.parseError) == null || c.call(st, l), s(l), o(l);
      }
    );
  });
  Ge.push(n), Yn().catch(o);
}), st = {
  startOnLoad: !0,
  mermaidAPI: Mt,
  parse: Vy,
  render: Un,
  init: Hy,
  run: Wn,
  registerExternalDiagrams: Yy,
  initialize: jn,
  parseError: void 0,
  contentLoaded: Hn,
  setParseErrorHandler: Uy,
  detectType: lr
}, o0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: st
}, Symbol.toStringTag, { value: "Module" }));
export {
  bi as $,
  Kt as A,
  Pe as B,
  It as C,
  rr as D,
  ld as E,
  Jd as F,
  Ce as G,
  ze as H,
  Sd as I,
  md as J,
  rd as K,
  $o as L,
  ko as M,
  Qc as N,
  tu as O,
  cf as P,
  ki as Q,
  Xu as R,
  qe as S,
  eu as T,
  Rr as U,
  Zc as V,
  au as W,
  Zt as X,
  ed as Y,
  Bt as Z,
  Je as _,
  Pp as a,
  Wr as a0,
  Bo as a1,
  Ao as a2,
  Eo as a3,
  Xc as a4,
  ft as a5,
  Bd as a6,
  Fd as a7,
  Nr as a8,
  Lr as a9,
  Nf as aA,
  tg as aB,
  Wp as aC,
  me as aD,
  v as aE,
  F as aF,
  o0 as aG,
  fu as aa,
  Cd as ab,
  Pr as ac,
  gr as ad,
  Ad as ae,
  et as af,
  ho as ag,
  wa as ah,
  L as ai,
  ct as aj,
  Tu as ak,
  oe as al,
  Oy as am,
  _a as an,
  e0 as ao,
  Ky as ap,
  Up as aq,
  rg as ar,
  Ta as as,
  Xp as at,
  qf as au,
  Zo as av,
  Xr as aw,
  Af as ax,
  ut as ay,
  i0 as az,
  zp as b,
  ti as c,
  fe as d,
  G as e,
  Re as f,
  Dp as g,
  ot as h,
  _n as i,
  Ur as j,
  sg as k,
  B as l,
  Zi as m,
  nr as n,
  Qf as o,
  Ro as p,
  Uf as q,
  $p as r,
  qp as s,
  r0 as t,
  Np as u,
  Rp as v,
  ng as w,
  se as x,
  Ip as y,
  ye as z
};
