var xi = Object.defineProperty;
var wi = (o, r, e) => r in o ? xi(o, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : o[r] = e;
var u = (o, r, e) => (wi(o, typeof r != "symbol" ? r + "" : r, e), e);
import { H as Z, I as ne, J as N, F as ji, K as G, U as Ci, n as Ii, L as Si, N as _i, j as Ei, O, Q as Ti, R as H, x as y, d as S, T as Wi } from "../chunks/emojis.bYhmvyOg.js";
import { F as De, a as f, p as v, b as Mi, s as Ai, S as C, n as Oi, e as W, P as Di, O as Bi, B as Pi } from "../chunks/emptyStates.uTrnPSUC.js";
import Ni from "../assets/icons/b570de000baf55f4.png.js";
import Li from "../assets/icons/f2eb31cd15d4165c.png.js";
import zi from "../assets/icons/35a00cb5b05f2f52.png.js";
import pe from "../assets/icons/151dc2df1dc5da9b.png.js";
import qi from "../assets/icons/e41e2b00e710d26c.png.js";
import Fi from "../assets/icons/f97cae6c6710da23.png.js";
import Ri from "../assets/icons/ae4289787f029669.png.js";
import Ki from "../assets/icons/b5fbd75b1606b471.png.js";
import Vi from "../assets/icons/d35659776ae1bc46.png.js";
import Hi from "../assets/icons/2c6d0aa300d3510b.png.js";
import Gi from "../assets/icons/95af502c73dacdb9.png.js";
import Ui from "../assets/icons/74fd2b4c9354b476.png.js";
import Be from "../assets/icons/9f778221346712e6.png.js";
import Pe from "../assets/icons/a115a0dc71d474ed.png.js";
import Ne from "../assets/icons/8c6216d397835203.png.js";
import Ji from "../assets/icons/5e790a50405472cf.png.js";
import Xi from "../assets/icons/9ed9dc717413ca85.png.js";
import Yi from "../assets/icons/c1c3b81825ceedd8.png.js";
import Qi from "../assets/icons/233265eff00f9a10.png.js";
import Le from "../assets/icons/e73c2364d0abdfda.png.js";
import ze from "../assets/icons/490ced1f17724a5a.png.js";
import qe from "../assets/icons/389129145c40f63f.png.js";
import Fe from "../assets/icons/6add4d0c4f3fec58.png.js";
import Re from "../assets/icons/1eb9f601f5373f1a.png.js";
import Ke from "../assets/icons/e9707e889df812c2.png.js";
import Ve from "../assets/icons/96f285db6e151471.png.js";
import He from "../assets/icons/bfc07ec59c7c6710.png.js";
import Ge from "../assets/icons/02157ccba35a58ba.png.js";
import Ue from "../assets/icons/d191fb6699877d72.png.js";
import Je from "../assets/icons/5fb058ef26639339.png.js";
import Xe from "../assets/icons/7a788fdaceb35f0d.png.js";
import Ye from "../assets/icons/2f13e3a2034605b1.png.js";
import Qe from "../assets/icons/d167338d33669307.png.js";
import Ze from "../assets/icons/b9f74d054aec066a.png.js";
import ee from "../assets/icons/5e68b273687eed0d.png.js";
import ei from "../assets/icons/4e52880df4e83687.png.js";
import ii from "../assets/icons/d7c0db0568cddbd1.png.js";
import ri from "../assets/icons/9f9f5a29aba9b45b.png.js";
import Zi from "../assets/icons/1fe90f86b8dd5b03.png.js";
import oi from "../assets/icons/c091372ebb16f3d7.png.js";
import er from "../assets/icons/0491a7f7dbee5618.png.js";
import ir from "../assets/icons/7c1a03a0f912a482.png.js";
import "../locales/en.js";
/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.16.1
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
var U = typeof window < "u" && typeof document < "u" && typeof navigator < "u", rr = function() {
  for (var o = ["Edge", "Trident", "Firefox"], r = 0; r < o.length; r += 1)
    if (U && navigator.userAgent.indexOf(o[r]) >= 0)
      return 1;
  return 0;
}();
function or(o) {
  var r = !1;
  return function() {
    r || (r = !0, window.Promise.resolve().then(function() {
      r = !1, o();
    }));
  };
}
function nr(o) {
  var r = !1;
  return function() {
    r || (r = !0, setTimeout(function() {
      r = !1, o();
    }, rr));
  };
}
var tr = U && window.Promise, ar = tr ? or : nr;
function ni(o) {
  var r = {};
  return o && r.toString.call(o) === "[object Function]";
}
function P(o, r) {
  if (o.nodeType !== 1)
    return [];
  var e = o.ownerDocument.defaultView, i = e.getComputedStyle(o, null);
  return r ? i[r] : i;
}
function ge(o) {
  return o.nodeName === "HTML" ? o : o.parentNode || o.host;
}
function J(o) {
  if (!o)
    return document.body;
  switch (o.nodeName) {
    case "HTML":
    case "BODY":
      return o.ownerDocument.body;
    case "#document":
      return o.body;
  }
  var r = P(o), e = r.overflow, i = r.overflowX, n = r.overflowY;
  return /(auto|scroll|overlay)/.test(e + n + i) ? o : J(ge(o));
}
function ti(o) {
  return o && o.referenceNode ? o.referenceNode : o;
}
var ve = U && !!(window.MSInputMethodContext && document.documentMode), xe = U && /MSIE 10/.test(navigator.userAgent);
function R(o) {
  return o === 11 ? ve : o === 10 ? xe : ve || xe;
}
function L(o) {
  if (!o)
    return document.documentElement;
  for (var r = R(10) ? document.body : null, e = o.offsetParent || null; e === r && o.nextElementSibling; )
    e = (o = o.nextElementSibling).offsetParent;
  var i = e && e.nodeName;
  return !i || i === "BODY" || i === "HTML" ? o ? o.ownerDocument.documentElement : document.documentElement : ["TH", "TD", "TABLE"].indexOf(e.nodeName) !== -1 && P(e, "position") === "static" ? L(e) : e;
}
function mr(o) {
  var r = o.nodeName;
  return r === "BODY" ? !1 : r === "HTML" || L(o.firstElementChild) === o;
}
function le(o) {
  return o.parentNode !== null ? le(o.parentNode) : o;
}
function ie(o, r) {
  if (!o || !o.nodeType || !r || !r.nodeType)
    return document.documentElement;
  var e = o.compareDocumentPosition(r) & Node.DOCUMENT_POSITION_FOLLOWING, i = e ? o : r, n = e ? r : o, t = document.createRange();
  t.setStart(i, 0), t.setEnd(n, 0);
  var a = t.commonAncestorContainer;
  if (o !== a && r !== a || i.contains(n))
    return mr(a) ? a : L(a);
  var d = le(o);
  return d.host ? ie(d.host, r) : ie(o, le(r).host);
}
function z(o) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "top", e = r === "top" ? "scrollTop" : "scrollLeft", i = o.nodeName;
  if (i === "BODY" || i === "HTML") {
    var n = o.ownerDocument.documentElement, t = o.ownerDocument.scrollingElement || n;
    return t[e];
  }
  return o[e];
}
function dr(o, r) {
  var e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, i = z(r, "top"), n = z(r, "left"), t = e ? -1 : 1;
  return o.top += i * t, o.bottom += i * t, o.left += n * t, o.right += n * t, o;
}
function we(o, r) {
  var e = r === "x" ? "Left" : "Top", i = e === "Left" ? "Right" : "Bottom";
  return parseFloat(o["border" + e + "Width"]) + parseFloat(o["border" + i + "Width"]);
}
function je(o, r, e, i) {
  return Math.max(r["offset" + o], r["scroll" + o], e["client" + o], e["offset" + o], e["scroll" + o], R(10) ? parseInt(e["offset" + o]) + parseInt(i["margin" + (o === "Height" ? "Top" : "Left")]) + parseInt(i["margin" + (o === "Height" ? "Bottom" : "Right")]) : 0);
}
function ai(o) {
  var r = o.body, e = o.documentElement, i = R(10) && getComputedStyle(e);
  return {
    height: je("Height", r, e, i),
    width: je("Width", r, e, i)
  };
}
var cr = function(o, r) {
  if (!(o instanceof r))
    throw new TypeError("Cannot call a class as a function");
}, lr = /* @__PURE__ */ function() {
  function o(r, e) {
    for (var i = 0; i < e.length; i++) {
      var n = e[i];
      n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(r, n.key, n);
    }
  }
  return function(r, e, i) {
    return e && o(r.prototype, e), i && o(r, i), r;
  };
}(), q = function(o, r, e) {
  return r in o ? Object.defineProperty(o, r, {
    value: e,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : o[r] = e, o;
}, _ = Object.assign || function(o) {
  for (var r = 1; r < arguments.length; r++) {
    var e = arguments[r];
    for (var i in e)
      Object.prototype.hasOwnProperty.call(e, i) && (o[i] = e[i]);
  }
  return o;
};
function D(o) {
  return _({}, o, {
    right: o.left + o.width,
    bottom: o.top + o.height
  });
}
function se(o) {
  var r = {};
  try {
    if (R(10)) {
      r = o.getBoundingClientRect();
      var e = z(o, "top"), i = z(o, "left");
      r.top += e, r.left += i, r.bottom += e, r.right += i;
    } else
      r = o.getBoundingClientRect();
  } catch {
  }
  var n = {
    left: r.left,
    top: r.top,
    width: r.right - r.left,
    height: r.bottom - r.top
  }, t = o.nodeName === "HTML" ? ai(o.ownerDocument) : {}, a = t.width || o.clientWidth || n.width, d = t.height || o.clientHeight || n.height, m = o.offsetWidth - a, c = o.offsetHeight - d;
  if (m || c) {
    var l = P(o);
    m -= we(l, "x"), c -= we(l, "y"), n.width -= m, n.height -= c;
  }
  return D(n);
}
function fe(o, r) {
  var e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, i = R(10), n = r.nodeName === "HTML", t = se(o), a = se(r), d = J(o), m = P(r), c = parseFloat(m.borderTopWidth), l = parseFloat(m.borderLeftWidth);
  e && n && (a.top = Math.max(a.top, 0), a.left = Math.max(a.left, 0));
  var s = D({
    top: t.top - a.top - c,
    left: t.left - a.left - l,
    width: t.width,
    height: t.height
  });
  if (s.marginTop = 0, s.marginLeft = 0, !i && n) {
    var p = parseFloat(m.marginTop), $ = parseFloat(m.marginLeft);
    s.top -= c - p, s.bottom -= c - p, s.left -= l - $, s.right -= l - $, s.marginTop = p, s.marginLeft = $;
  }
  return (i && !e ? r.contains(d) : r === d && d.nodeName !== "BODY") && (s = dr(s, r)), s;
}
function sr(o) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, e = o.ownerDocument.documentElement, i = fe(o, e), n = Math.max(e.clientWidth, window.innerWidth || 0), t = Math.max(e.clientHeight, window.innerHeight || 0), a = r ? 0 : z(e), d = r ? 0 : z(e, "left"), m = {
    top: a - i.top + i.marginTop,
    left: d - i.left + i.marginLeft,
    width: n,
    height: t
  };
  return D(m);
}
function mi(o) {
  var r = o.nodeName;
  if (r === "BODY" || r === "HTML")
    return !1;
  if (P(o, "position") === "fixed")
    return !0;
  var e = ge(o);
  return e ? mi(e) : !1;
}
function di(o) {
  if (!o || !o.parentElement || R())
    return document.documentElement;
  for (var r = o.parentElement; r && P(r, "transform") === "none"; )
    r = r.parentElement;
  return r || document.documentElement;
}
function be(o, r, e, i) {
  var n = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1, t = { top: 0, left: 0 }, a = n ? di(o) : ie(o, ti(r));
  if (i === "viewport")
    t = sr(a, n);
  else {
    var d = void 0;
    i === "scrollParent" ? (d = J(ge(r)), d.nodeName === "BODY" && (d = o.ownerDocument.documentElement)) : i === "window" ? d = o.ownerDocument.documentElement : d = i;
    var m = fe(d, a, n);
    if (d.nodeName === "HTML" && !mi(a)) {
      var c = ai(o.ownerDocument), l = c.height, s = c.width;
      t.top += m.top - m.marginTop, t.bottom = l + m.top, t.left += m.left - m.marginLeft, t.right = s + m.left;
    } else
      t = m;
  }
  e = e || 0;
  var p = typeof e == "number";
  return t.left += p ? e : e.left || 0, t.top += p ? e : e.top || 0, t.right -= p ? e : e.right || 0, t.bottom -= p ? e : e.bottom || 0, t;
}
function ur(o) {
  var r = o.width, e = o.height;
  return r * e;
}
function ci(o, r, e, i, n) {
  var t = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : 0;
  if (o.indexOf("auto") === -1)
    return o;
  var a = be(e, i, t, n), d = {
    top: {
      width: a.width,
      height: r.top - a.top
    },
    right: {
      width: a.right - r.right,
      height: a.height
    },
    bottom: {
      width: a.width,
      height: a.bottom - r.bottom
    },
    left: {
      width: r.left - a.left,
      height: a.height
    }
  }, m = Object.keys(d).map(function(p) {
    return _({
      key: p
    }, d[p], {
      area: ur(d[p])
    });
  }).sort(function(p, $) {
    return $.area - p.area;
  }), c = m.filter(function(p) {
    var $ = p.width, g = p.height;
    return $ >= e.clientWidth && g >= e.clientHeight;
  }), l = c.length > 0 ? c[0].key : m[0].key, s = o.split("-")[1];
  return l + (s ? "-" + s : "");
}
function li(o, r, e) {
  var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null, n = i ? di(r) : ie(r, ti(e));
  return fe(e, n, i);
}
function si(o) {
  var r = o.ownerDocument.defaultView, e = r.getComputedStyle(o), i = parseFloat(e.marginTop || 0) + parseFloat(e.marginBottom || 0), n = parseFloat(e.marginLeft || 0) + parseFloat(e.marginRight || 0), t = {
    width: o.offsetWidth + n,
    height: o.offsetHeight + i
  };
  return t;
}
function re(o) {
  var r = { left: "right", right: "left", bottom: "top", top: "bottom" };
  return o.replace(/left|right|bottom|top/g, function(e) {
    return r[e];
  });
}
function ui(o, r, e) {
  e = e.split("-")[0];
  var i = si(o), n = {
    width: i.width,
    height: i.height
  }, t = ["right", "left"].indexOf(e) !== -1, a = t ? "top" : "left", d = t ? "left" : "top", m = t ? "height" : "width", c = t ? "width" : "height";
  return n[a] = r[a] + r[m] / 2 - i[m] / 2, e === d ? n[d] = r[d] - i[c] : n[d] = r[re(d)], n;
}
function X(o, r) {
  return Array.prototype.find ? o.find(r) : o.filter(r)[0];
}
function $r(o, r, e) {
  if (Array.prototype.findIndex)
    return o.findIndex(function(n) {
      return n[r] === e;
    });
  var i = X(o, function(n) {
    return n[r] === e;
  });
  return o.indexOf(i);
}
function $i(o, r, e) {
  var i = e === void 0 ? o : o.slice(0, $r(o, "name", e));
  return i.forEach(function(n) {
    n.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
    var t = n.function || n.fn;
    n.enabled && ni(t) && (r.offsets.popper = D(r.offsets.popper), r.offsets.reference = D(r.offsets.reference), r = t(r, n));
  }), r;
}
function pr() {
  if (!this.state.isDestroyed) {
    var o = {
      instance: this,
      styles: {},
      arrowStyles: {},
      attributes: {},
      flipped: !1,
      offsets: {}
    };
    o.offsets.reference = li(this.state, this.popper, this.reference, this.options.positionFixed), o.placement = ci(this.options.placement, o.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), o.originalPlacement = o.placement, o.positionFixed = this.options.positionFixed, o.offsets.popper = ui(this.popper, o.offsets.reference, o.placement), o.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute", o = $i(this.modifiers, o), this.state.isCreated ? this.options.onUpdate(o) : (this.state.isCreated = !0, this.options.onCreate(o));
  }
}
function pi(o, r) {
  return o.some(function(e) {
    var i = e.name, n = e.enabled;
    return n && i === r;
  });
}
function ke(o) {
  for (var r = [!1, "ms", "Webkit", "Moz", "O"], e = o.charAt(0).toUpperCase() + o.slice(1), i = 0; i < r.length; i++) {
    var n = r[i], t = n ? "" + n + e : o;
    if (typeof document.body.style[t] < "u")
      return t;
  }
  return null;
}
function gr() {
  return this.state.isDestroyed = !0, pi(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.position = "", this.popper.style.top = "", this.popper.style.left = "", this.popper.style.right = "", this.popper.style.bottom = "", this.popper.style.willChange = "", this.popper.style[ke("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this;
}
function gi(o) {
  var r = o.ownerDocument;
  return r ? r.defaultView : window;
}
function fi(o, r, e, i) {
  var n = o.nodeName === "BODY", t = n ? o.ownerDocument.defaultView : o;
  t.addEventListener(r, e, { passive: !0 }), n || fi(J(t.parentNode), r, e, i), i.push(t);
}
function fr(o, r, e, i) {
  e.updateBound = i, gi(o).addEventListener("resize", e.updateBound, { passive: !0 });
  var n = J(o);
  return fi(n, "scroll", e.updateBound, e.scrollParents), e.scrollElement = n, e.eventsEnabled = !0, e;
}
function br() {
  this.state.eventsEnabled || (this.state = fr(this.reference, this.options, this.state, this.scheduleUpdate));
}
function kr(o, r) {
  return gi(o).removeEventListener("resize", r.updateBound), r.scrollParents.forEach(function(e) {
    e.removeEventListener("scroll", r.updateBound);
  }), r.updateBound = null, r.scrollParents = [], r.scrollElement = null, r.eventsEnabled = !1, r;
}
function hr() {
  this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = kr(this.reference, this.state));
}
function he(o) {
  return o !== "" && !isNaN(parseFloat(o)) && isFinite(o);
}
function ue(o, r) {
  Object.keys(r).forEach(function(e) {
    var i = "";
    ["width", "height", "top", "right", "bottom", "left"].indexOf(e) !== -1 && he(r[e]) && (i = "px"), o.style[e] = r[e] + i;
  });
}
function yr(o, r) {
  Object.keys(r).forEach(function(e) {
    var i = r[e];
    i !== !1 ? o.setAttribute(e, r[e]) : o.removeAttribute(e);
  });
}
function vr(o) {
  return ue(o.instance.popper, o.styles), yr(o.instance.popper, o.attributes), o.arrowElement && Object.keys(o.arrowStyles).length && ue(o.arrowElement, o.arrowStyles), o;
}
function xr(o, r, e, i, n) {
  var t = li(n, r, o, e.positionFixed), a = ci(e.placement, t, r, o, e.modifiers.flip.boundariesElement, e.modifiers.flip.padding);
  return r.setAttribute("x-placement", a), ue(r, { position: e.positionFixed ? "fixed" : "absolute" }), e;
}
function wr(o, r) {
  var e = o.offsets, i = e.popper, n = e.reference, t = Math.round, a = Math.floor, d = function(h) {
    return h;
  }, m = t(n.width), c = t(i.width), l = ["left", "right"].indexOf(o.placement) !== -1, s = o.placement.indexOf("-") !== -1, p = m % 2 === c % 2, $ = m % 2 === 1 && c % 2 === 1, g = r ? l || s || p ? t : a : d, b = r ? t : d;
  return {
    left: g($ && !s && r ? i.left - 1 : i.left),
    top: b(i.top),
    bottom: b(i.bottom),
    right: g(i.right)
  };
}
var jr = U && /Firefox/i.test(navigator.userAgent);
function Cr(o, r) {
  var e = r.x, i = r.y, n = o.offsets.popper, t = X(o.instance.modifiers, function(I) {
    return I.name === "applyStyle";
  }).gpuAcceleration;
  t !== void 0 && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
  var a = t !== void 0 ? t : r.gpuAcceleration, d = L(o.instance.popper), m = se(d), c = {
    position: n.position
  }, l = wr(o, window.devicePixelRatio < 2 || !jr), s = e === "bottom" ? "top" : "bottom", p = i === "right" ? "left" : "right", $ = ke("transform"), g = void 0, b = void 0;
  if (s === "bottom" ? d.nodeName === "HTML" ? b = -d.clientHeight + l.bottom : b = -m.height + l.bottom : b = l.top, p === "right" ? d.nodeName === "HTML" ? g = -d.clientWidth + l.right : g = -m.width + l.right : g = l.left, a && $)
    c[$] = "translate3d(" + g + "px, " + b + "px, 0)", c[s] = 0, c[p] = 0, c.willChange = "transform";
  else {
    var x = s === "bottom" ? -1 : 1, h = p === "right" ? -1 : 1;
    c[s] = b * x, c[p] = g * h, c.willChange = s + ", " + p;
  }
  var k = {
    "x-placement": o.placement
  };
  return o.attributes = _({}, k, o.attributes), o.styles = _({}, c, o.styles), o.arrowStyles = _({}, o.offsets.arrow, o.arrowStyles), o;
}
function bi(o, r, e) {
  var i = X(o, function(d) {
    var m = d.name;
    return m === r;
  }), n = !!i && o.some(function(d) {
    return d.name === e && d.enabled && d.order < i.order;
  });
  if (!n) {
    var t = "`" + r + "`", a = "`" + e + "`";
    console.warn(a + " modifier is required by " + t + " modifier in order to work, be sure to include it before " + t + "!");
  }
  return n;
}
function Ir(o, r) {
  var e;
  if (!bi(o.instance.modifiers, "arrow", "keepTogether"))
    return o;
  var i = r.element;
  if (typeof i == "string") {
    if (i = o.instance.popper.querySelector(i), !i)
      return o;
  } else if (!o.instance.popper.contains(i))
    return console.warn("WARNING: `arrow.element` must be child of its popper element!"), o;
  var n = o.placement.split("-")[0], t = o.offsets, a = t.popper, d = t.reference, m = ["left", "right"].indexOf(n) !== -1, c = m ? "height" : "width", l = m ? "Top" : "Left", s = l.toLowerCase(), p = m ? "left" : "top", $ = m ? "bottom" : "right", g = si(i)[c];
  d[$] - g < a[s] && (o.offsets.popper[s] -= a[s] - (d[$] - g)), d[s] + g > a[$] && (o.offsets.popper[s] += d[s] + g - a[$]), o.offsets.popper = D(o.offsets.popper);
  var b = d[s] + d[c] / 2 - g / 2, x = P(o.instance.popper), h = parseFloat(x["margin" + l]), k = parseFloat(x["border" + l + "Width"]), I = b - o.offsets.popper[s] - h - k;
  return I = Math.max(Math.min(a[c] - g, I), 0), o.arrowElement = i, o.offsets.arrow = (e = {}, q(e, s, Math.round(I)), q(e, p, ""), e), o;
}
function Sr(o) {
  return o === "end" ? "start" : o === "start" ? "end" : o;
}
var ki = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"], ae = ki.slice(3);
function Ce(o) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, e = ae.indexOf(o), i = ae.slice(e + 1).concat(ae.slice(0, e));
  return r ? i.reverse() : i;
}
var me = {
  FLIP: "flip",
  CLOCKWISE: "clockwise",
  COUNTERCLOCKWISE: "counterclockwise"
};
function _r(o, r) {
  if (pi(o.instance.modifiers, "inner") || o.flipped && o.placement === o.originalPlacement)
    return o;
  var e = be(o.instance.popper, o.instance.reference, r.padding, r.boundariesElement, o.positionFixed), i = o.placement.split("-")[0], n = re(i), t = o.placement.split("-")[1] || "", a = [];
  switch (r.behavior) {
    case me.FLIP:
      a = [i, n];
      break;
    case me.CLOCKWISE:
      a = Ce(i);
      break;
    case me.COUNTERCLOCKWISE:
      a = Ce(i, !0);
      break;
    default:
      a = r.behavior;
  }
  return a.forEach(function(d, m) {
    if (i !== d || a.length === m + 1)
      return o;
    i = o.placement.split("-")[0], n = re(i);
    var c = o.offsets.popper, l = o.offsets.reference, s = Math.floor, p = i === "left" && s(c.right) > s(l.left) || i === "right" && s(c.left) < s(l.right) || i === "top" && s(c.bottom) > s(l.top) || i === "bottom" && s(c.top) < s(l.bottom), $ = s(c.left) < s(e.left), g = s(c.right) > s(e.right), b = s(c.top) < s(e.top), x = s(c.bottom) > s(e.bottom), h = i === "left" && $ || i === "right" && g || i === "top" && b || i === "bottom" && x, k = ["top", "bottom"].indexOf(i) !== -1, I = !!r.flipVariations && (k && t === "start" && $ || k && t === "end" && g || !k && t === "start" && b || !k && t === "end" && x), A = !!r.flipVariationsByContent && (k && t === "start" && g || k && t === "end" && $ || !k && t === "start" && x || !k && t === "end" && b), K = I || A;
    (p || h || K) && (o.flipped = !0, (p || h) && (i = a[m + 1]), K && (t = Sr(t)), o.placement = i + (t ? "-" + t : ""), o.offsets.popper = _({}, o.offsets.popper, ui(o.instance.popper, o.offsets.reference, o.placement)), o = $i(o.instance.modifiers, o, "flip"));
  }), o;
}
function Er(o) {
  var r = o.offsets, e = r.popper, i = r.reference, n = o.placement.split("-")[0], t = Math.floor, a = ["top", "bottom"].indexOf(n) !== -1, d = a ? "right" : "bottom", m = a ? "left" : "top", c = a ? "width" : "height";
  return e[d] < t(i[m]) && (o.offsets.popper[m] = t(i[m]) - e[c]), e[m] > t(i[d]) && (o.offsets.popper[m] = t(i[d])), o;
}
function Tr(o, r, e, i) {
  var n = o.match(/((?:\-|\+)?\d*\.?\d*)(.*)/), t = +n[1], a = n[2];
  if (!t)
    return o;
  if (a.indexOf("%") === 0) {
    var d = void 0;
    switch (a) {
      case "%p":
        d = e;
        break;
      case "%":
      case "%r":
      default:
        d = i;
    }
    var m = D(d);
    return m[r] / 100 * t;
  } else if (a === "vh" || a === "vw") {
    var c = void 0;
    return a === "vh" ? c = Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : c = Math.max(document.documentElement.clientWidth, window.innerWidth || 0), c / 100 * t;
  } else
    return t;
}
function Wr(o, r, e, i) {
  var n = [0, 0], t = ["right", "left"].indexOf(i) !== -1, a = o.split(/(\+|\-)/).map(function(l) {
    return l.trim();
  }), d = a.indexOf(X(a, function(l) {
    return l.search(/,|\s/) !== -1;
  }));
  a[d] && a[d].indexOf(",") === -1 && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
  var m = /\s*,\s*|\s+/, c = d !== -1 ? [a.slice(0, d).concat([a[d].split(m)[0]]), [a[d].split(m)[1]].concat(a.slice(d + 1))] : [a];
  return c = c.map(function(l, s) {
    var p = (s === 1 ? !t : t) ? "height" : "width", $ = !1;
    return l.reduce(function(g, b) {
      return g[g.length - 1] === "" && ["+", "-"].indexOf(b) !== -1 ? (g[g.length - 1] = b, $ = !0, g) : $ ? (g[g.length - 1] += b, $ = !1, g) : g.concat(b);
    }, []).map(function(g) {
      return Tr(g, p, r, e);
    });
  }), c.forEach(function(l, s) {
    l.forEach(function(p, $) {
      he(p) && (n[s] += p * (l[$ - 1] === "-" ? -1 : 1));
    });
  }), n;
}
function Mr(o, r) {
  var e = r.offset, i = o.placement, n = o.offsets, t = n.popper, a = n.reference, d = i.split("-")[0], m = void 0;
  return he(+e) ? m = [+e, 0] : m = Wr(e, t, a, d), d === "left" ? (t.top += m[0], t.left -= m[1]) : d === "right" ? (t.top += m[0], t.left += m[1]) : d === "top" ? (t.left += m[0], t.top -= m[1]) : d === "bottom" && (t.left += m[0], t.top += m[1]), o.popper = t, o;
}
function Ar(o, r) {
  var e = r.boundariesElement || L(o.instance.popper);
  o.instance.reference === e && (e = L(e));
  var i = ke("transform"), n = o.instance.popper.style, t = n.top, a = n.left, d = n[i];
  n.top = "", n.left = "", n[i] = "";
  var m = be(o.instance.popper, o.instance.reference, r.padding, e, o.positionFixed);
  n.top = t, n.left = a, n[i] = d, r.boundaries = m;
  var c = r.priority, l = o.offsets.popper, s = {
    primary: function($) {
      var g = l[$];
      return l[$] < m[$] && !r.escapeWithReference && (g = Math.max(l[$], m[$])), q({}, $, g);
    },
    secondary: function($) {
      var g = $ === "right" ? "left" : "top", b = l[g];
      return l[$] > m[$] && !r.escapeWithReference && (b = Math.min(l[g], m[$] - ($ === "right" ? l.width : l.height))), q({}, g, b);
    }
  };
  return c.forEach(function(p) {
    var $ = ["left", "top"].indexOf(p) !== -1 ? "primary" : "secondary";
    l = _({}, l, s[$](p));
  }), o.offsets.popper = l, o;
}
function Or(o) {
  var r = o.placement, e = r.split("-")[0], i = r.split("-")[1];
  if (i) {
    var n = o.offsets, t = n.reference, a = n.popper, d = ["bottom", "top"].indexOf(e) !== -1, m = d ? "left" : "top", c = d ? "width" : "height", l = {
      start: q({}, m, t[m]),
      end: q({}, m, t[m] + t[c] - a[c])
    };
    o.offsets.popper = _({}, a, l[i]);
  }
  return o;
}
function Dr(o) {
  if (!bi(o.instance.modifiers, "hide", "preventOverflow"))
    return o;
  var r = o.offsets.reference, e = X(o.instance.modifiers, function(i) {
    return i.name === "preventOverflow";
  }).boundaries;
  if (r.bottom < e.top || r.left > e.right || r.top > e.bottom || r.right < e.left) {
    if (o.hide === !0)
      return o;
    o.hide = !0, o.attributes["x-out-of-boundaries"] = "";
  } else {
    if (o.hide === !1)
      return o;
    o.hide = !1, o.attributes["x-out-of-boundaries"] = !1;
  }
  return o;
}
function Br(o) {
  var r = o.placement, e = r.split("-")[0], i = o.offsets, n = i.popper, t = i.reference, a = ["left", "right"].indexOf(e) !== -1, d = ["top", "left"].indexOf(e) === -1;
  return n[a ? "left" : "top"] = t[e] - (d ? n[a ? "width" : "height"] : 0), o.placement = re(r), o.offsets.popper = D(n), o;
}
var Pr = {
  /**
   * Modifier used to shift the popper on the start or end of its reference
   * element.<br />
   * It will read the variation of the `placement` property.<br />
   * It can be one either `-end` or `-start`.
   * @memberof modifiers
   * @inner
   */
  shift: {
    /** @prop {number} order=100 - Index used to define the order of execution */
    order: 100,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: !0,
    /** @prop {ModifierFn} */
    fn: Or
  },
  /**
   * The `offset` modifier can shift your popper on both its axis.
   *
   * It accepts the following units:
   * - `px` or unit-less, interpreted as pixels
   * - `%` or `%r`, percentage relative to the length of the reference element
   * - `%p`, percentage relative to the length of the popper element
   * - `vw`, CSS viewport width unit
   * - `vh`, CSS viewport height unit
   *
   * For length is intended the main axis relative to the placement of the popper.<br />
   * This means that if the placement is `top` or `bottom`, the length will be the
   * `width`. In case of `left` or `right`, it will be the `height`.
   *
   * You can provide a single value (as `Number` or `String`), or a pair of values
   * as `String` divided by a comma or one (or more) white spaces.<br />
   * The latter is a deprecated method because it leads to confusion and will be
   * removed in v2.<br />
   * Additionally, it accepts additions and subtractions between different units.
   * Note that multiplications and divisions aren't supported.
   *
   * Valid examples are:
   * ```
   * 10
   * '10%'
   * '10, 10'
   * '10%, 10'
   * '10 + 10%'
   * '10 - 5vh + 3%'
   * '-10px + 5vh, 5px - 6%'
   * ```
   * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
   * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
   * > You can read more on this at this [issue](https://github.com/FezVrasta/popper.js/issues/373).
   *
   * @memberof modifiers
   * @inner
   */
  offset: {
    /** @prop {number} order=200 - Index used to define the order of execution */
    order: 200,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: !0,
    /** @prop {ModifierFn} */
    fn: Mr,
    /** @prop {Number|String} offset=0
     * The offset value as described in the modifier description
     */
    offset: 0
  },
  /**
   * Modifier used to prevent the popper from being positioned outside the boundary.
   *
   * A scenario exists where the reference itself is not within the boundaries.<br />
   * We can say it has "escaped the boundaries" — or just "escaped".<br />
   * In this case we need to decide whether the popper should either:
   *
   * - detach from the reference and remain "trapped" in the boundaries, or
   * - if it should ignore the boundary and "escape with its reference"
   *
   * When `escapeWithReference` is set to`true` and reference is completely
   * outside its boundaries, the popper will overflow (or completely leave)
   * the boundaries in order to remain attached to the edge of the reference.
   *
   * @memberof modifiers
   * @inner
   */
  preventOverflow: {
    /** @prop {number} order=300 - Index used to define the order of execution */
    order: 300,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: !0,
    /** @prop {ModifierFn} */
    fn: Ar,
    /**
     * @prop {Array} [priority=['left','right','top','bottom']]
     * Popper will try to prevent overflow following these priorities by default,
     * then, it could overflow on the left and on top of the `boundariesElement`
     */
    priority: ["left", "right", "top", "bottom"],
    /**
     * @prop {number} padding=5
     * Amount of pixel used to define a minimum distance between the boundaries
     * and the popper. This makes sure the popper always has a little padding
     * between the edges of its container
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='scrollParent'
     * Boundaries used by the modifier. Can be `scrollParent`, `window`,
     * `viewport` or any DOM element.
     */
    boundariesElement: "scrollParent"
  },
  /**
   * Modifier used to make sure the reference and its popper stay near each other
   * without leaving any gap between the two. Especially useful when the arrow is
   * enabled and you want to ensure that it points to its reference element.
   * It cares only about the first axis. You can still have poppers with margin
   * between the popper and its reference element.
   * @memberof modifiers
   * @inner
   */
  keepTogether: {
    /** @prop {number} order=400 - Index used to define the order of execution */
    order: 400,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: !0,
    /** @prop {ModifierFn} */
    fn: Er
  },
  /**
   * This modifier is used to move the `arrowElement` of the popper to make
   * sure it is positioned between the reference element and its popper element.
   * It will read the outer size of the `arrowElement` node to detect how many
   * pixels of conjunction are needed.
   *
   * It has no effect if no `arrowElement` is provided.
   * @memberof modifiers
   * @inner
   */
  arrow: {
    /** @prop {number} order=500 - Index used to define the order of execution */
    order: 500,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: !0,
    /** @prop {ModifierFn} */
    fn: Ir,
    /** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */
    element: "[x-arrow]"
  },
  /**
   * Modifier used to flip the popper's placement when it starts to overlap its
   * reference element.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   *
   * **NOTE:** this modifier will interrupt the current update cycle and will
   * restart it if it detects the need to flip the placement.
   * @memberof modifiers
   * @inner
   */
  flip: {
    /** @prop {number} order=600 - Index used to define the order of execution */
    order: 600,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: !0,
    /** @prop {ModifierFn} */
    fn: _r,
    /**
     * @prop {String|Array} behavior='flip'
     * The behavior used to change the popper's placement. It can be one of
     * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
     * placements (with optional variations)
     */
    behavior: "flip",
    /**
     * @prop {number} padding=5
     * The popper will flip if it hits the edges of the `boundariesElement`
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='viewport'
     * The element which will define the boundaries of the popper position.
     * The popper will never be placed outside of the defined boundaries
     * (except if `keepTogether` is enabled)
     */
    boundariesElement: "viewport",
    /**
     * @prop {Boolean} flipVariations=false
     * The popper will switch placement variation between `-start` and `-end` when
     * the reference element overlaps its boundaries.
     *
     * The original placement should have a set variation.
     */
    flipVariations: !1,
    /**
     * @prop {Boolean} flipVariationsByContent=false
     * The popper will switch placement variation between `-start` and `-end` when
     * the popper element overlaps its reference boundaries.
     *
     * The original placement should have a set variation.
     */
    flipVariationsByContent: !1
  },
  /**
   * Modifier used to make the popper flow toward the inner of the reference element.
   * By default, when this modifier is disabled, the popper will be placed outside
   * the reference element.
   * @memberof modifiers
   * @inner
   */
  inner: {
    /** @prop {number} order=700 - Index used to define the order of execution */
    order: 700,
    /** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */
    enabled: !1,
    /** @prop {ModifierFn} */
    fn: Br
  },
  /**
   * Modifier used to hide the popper when its reference element is outside of the
   * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
   * be used to hide with a CSS selector the popper when its reference is
   * out of boundaries.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   * @memberof modifiers
   * @inner
   */
  hide: {
    /** @prop {number} order=800 - Index used to define the order of execution */
    order: 800,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: !0,
    /** @prop {ModifierFn} */
    fn: Dr
  },
  /**
   * Computes the style that will be applied to the popper element to gets
   * properly positioned.
   *
   * Note that this modifier will not touch the DOM, it just prepares the styles
   * so that `applyStyle` modifier can apply it. This separation is useful
   * in case you need to replace `applyStyle` with a custom implementation.
   *
   * This modifier has `850` as `order` value to maintain backward compatibility
   * with previous versions of Popper.js. Expect the modifiers ordering method
   * to change in future major versions of the library.
   *
   * @memberof modifiers
   * @inner
   */
  computeStyle: {
    /** @prop {number} order=850 - Index used to define the order of execution */
    order: 850,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: !0,
    /** @prop {ModifierFn} */
    fn: Cr,
    /**
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: !0,
    /**
     * @prop {string} [x='bottom']
     * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
     * Change this if your popper should grow in a direction different from `bottom`
     */
    x: "bottom",
    /**
     * @prop {string} [x='left']
     * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
     * Change this if your popper should grow in a direction different from `right`
     */
    y: "right"
  },
  /**
   * Applies the computed styles to the popper element.
   *
   * All the DOM manipulations are limited to this modifier. This is useful in case
   * you want to integrate Popper.js inside a framework or view library and you
   * want to delegate all the DOM manipulations to it.
   *
   * Note that if you disable this modifier, you must make sure the popper element
   * has its position set to `absolute` before Popper.js can do its work!
   *
   * Just disable this modifier and define your own to achieve the desired effect.
   *
   * @memberof modifiers
   * @inner
   */
  applyStyle: {
    /** @prop {number} order=900 - Index used to define the order of execution */
    order: 900,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: !0,
    /** @prop {ModifierFn} */
    fn: vr,
    /** @prop {Function} */
    onLoad: xr,
    /**
     * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: void 0
  }
}, Nr = {
  /**
   * Popper's placement.
   * @prop {Popper.placements} placement='bottom'
   */
  placement: "bottom",
  /**
   * Set this to true if you want popper to position it self in 'fixed' mode
   * @prop {Boolean} positionFixed=false
   */
  positionFixed: !1,
  /**
   * Whether events (resize, scroll) are initially enabled.
   * @prop {Boolean} eventsEnabled=true
   */
  eventsEnabled: !0,
  /**
   * Set to true if you want to automatically remove the popper when
   * you call the `destroy` method.
   * @prop {Boolean} removeOnDestroy=false
   */
  removeOnDestroy: !1,
  /**
   * Callback called when the popper is created.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onCreate}
   */
  onCreate: function() {
  },
  /**
   * Callback called when the popper is updated. This callback is not called
   * on the initialization/creation of the popper, but only on subsequent
   * updates.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onUpdate}
   */
  onUpdate: function() {
  },
  /**
   * List of modifiers used to modify the offsets before they are applied to the popper.
   * They provide most of the functionalities of Popper.js.
   * @prop {modifiers}
   */
  modifiers: Pr
}, te = function() {
  function o(r, e) {
    var i = this, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    cr(this, o), this.scheduleUpdate = function() {
      return requestAnimationFrame(i.update);
    }, this.update = ar(this.update.bind(this)), this.options = _({}, o.Defaults, n), this.state = {
      isDestroyed: !1,
      isCreated: !1,
      scrollParents: []
    }, this.reference = r && r.jquery ? r[0] : r, this.popper = e && e.jquery ? e[0] : e, this.options.modifiers = {}, Object.keys(_({}, o.Defaults.modifiers, n.modifiers)).forEach(function(a) {
      i.options.modifiers[a] = _({}, o.Defaults.modifiers[a] || {}, n.modifiers ? n.modifiers[a] : {});
    }), this.modifiers = Object.keys(this.options.modifiers).map(function(a) {
      return _({
        name: a
      }, i.options.modifiers[a]);
    }).sort(function(a, d) {
      return a.order - d.order;
    }), this.modifiers.forEach(function(a) {
      a.enabled && ni(a.onLoad) && a.onLoad(i.reference, i.popper, i.options, a, i.state);
    }), this.update();
    var t = this.options.eventsEnabled;
    t && this.enableEventListeners(), this.state.eventsEnabled = t;
  }
  return lr(o, [{
    key: "update",
    value: function() {
      return pr.call(this);
    }
  }, {
    key: "destroy",
    value: function() {
      return gr.call(this);
    }
  }, {
    key: "enableEventListeners",
    value: function() {
      return br.call(this);
    }
  }, {
    key: "disableEventListeners",
    value: function() {
      return hr.call(this);
    }
    /**
     * Schedules an update. It will run on the next UI update available.
     * @method scheduleUpdate
     * @memberof Popper
     */
    /**
     * Collection of utilities useful when writing custom modifiers.
     * Starting from version 1.7, this method is available only if you
     * include `popper-utils.js` before `popper.js`.
     *
     * **DEPRECATION**: This way to access PopperUtils is deprecated
     * and will be removed in v2! Use the PopperUtils module directly instead.
     * Due to the high instability of the methods contained in Utils, we can't
     * guarantee them to follow semver. Use them at your own risk!
     * @static
     * @private
     * @type {Object}
     * @deprecated since version 1.8
     * @member Utils
     * @memberof Popper
     */
  }]), o;
}();
te.Utils = (typeof window < "u" ? window : global).PopperUtils;
te.placements = ki;
te.Defaults = Nr;
const hi = te, Lr = () => ({
  placement: "bottom-start",
  modifiers: {
    offset: {
      offset: "0, 12"
    }
  },
  showArrow: !1
}), Ie = ["mu-table-drag-bar", "mu-front-button"];
class M {
  constructor(r, e, i = {}) {
    u(this, "options");
    u(this, "status", !1);
    u(this, "floatBox", null);
    u(this, "container", null);
    u(this, "popper", null);
    u(this, "lastScrollTop", null);
    u(this, "cb", Z);
    u(this, "resizeObserver", null);
    this.muya = r, this.name = e, this.options = Object.assign({}, Lr(), i), this.init();
  }
  init() {
    const r = document.createElement("div"), e = document.createElement("div");
    e.classList.add(this.name), e.classList.add("mu-float-container"), r.classList.add("mu-float-wrapper"), r.appendChild(e), document.body.appendChild(r), this.floatBox = r, this.container = e, (this.resizeObserver = new ResizeObserver(() => {
      const { offsetWidth: n, offsetHeight: t } = e;
      Object.assign(r.style, {
        width: `${n}px`,
        height: `${t}px`
      }), this.popper && this.popper.update();
    })).observe(e);
  }
  listen() {
    const { eventCenter: r, domNode: e } = this.muya, { floatBox: i } = this, n = (a) => {
      ne(a) && a.key === N.Escape && this.hide();
    }, t = (a) => {
      var d;
      if (typeof this.lastScrollTop != "number") {
        this.lastScrollTop = (d = a.target) == null ? void 0 : d.scrollTop;
        return;
      }
      this.status && a.target && Math.abs(a.target.scrollTop - this.lastScrollTop) > 50 && this.hide();
    };
    r.attachDOMEvent(document, "click", this.hide.bind(this)), r.attachDOMEvent(i, "click", (a) => {
      a.stopPropagation(), a.preventDefault();
    }), r.attachDOMEvent(e, "keydown", n), r.attachDOMEvent(e.parentElement, "scroll", t);
  }
  hide() {
    if (!this.status)
      return;
    const { eventCenter: r } = this.muya;
    this.status = !1, this.popper && this.popper.destroy && this.popper.destroy(), this.cb = Z, this.lastScrollTop = null, Ie.includes(this.name) ? r.emit("muya-float-button", this, !1) : r.emit("muya-float", this, !1);
  }
  show(r, e = Z) {
    const { floatBox: i } = this, { eventCenter: n } = this.muya, { placement: t, modifiers: a } = this.options;
    if (!i)
      throw new Error("The float box is not existed.");
    this.popper && this.popper.destroy && this.popper.destroy(), this.cb = e, this.popper = new hi(r, i, {
      placement: t,
      modifiers: a
    }), this.status = !0, Ie.includes(this.name) ? n.emit("muya-float-button", this, !0) : n.emit("muya-float", this, !0);
  }
  destroy() {
    var r;
    this.container && this.resizeObserver && this.resizeObserver.unobserve(this.container), this.popper && this.popper.destroy && this.popper.destroy(), (r = this.floatBox) == null || r.remove();
  }
}
class ye extends M {
  constructor(e, i, n = {}) {
    super(e, i, n);
    u(this, "scrollElement", null);
    u(this, "reference", null);
    u(this, "activeItem", null);
    u(this, "renderArray", []);
    this.createScrollElement();
  }
  createScrollElement() {
    const { container: e } = this, i = document.createElement("div");
    e.appendChild(i), this.scrollElement = i;
  }
  activeEleScrollIntoView(e) {
    e && e.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "start"
    });
  }
  listen() {
    super.listen();
    const { eventCenter: e, domNode: i } = this.muya, n = (t) => {
      if (!(!this.status || !ne(t)))
        switch (t.key) {
          case N.ArrowUp:
            this.step("previous");
            break;
          case N.ArrowDown:
          case N.Tab:
            this.step("next");
            break;
          case N.Enter:
            this.selectItem(this.activeItem);
            break;
        }
    };
    e.attachDOMEvent(i, "keydown", n);
  }
  hide() {
    super.hide(), this.reference = null;
  }
  show(e, i = Z) {
    this.cb = i, !(e instanceof HTMLElement && this.reference && this.reference === e && this.status) && (this.reference = e, super.show(e, i));
  }
  step(e) {
    let i = this.renderArray.findIndex((t) => t === this.activeItem);
    i = e === "next" ? i + 1 : i - 1, i < 0 ? i = this.renderArray.length - 1 : i >= this.renderArray.length && (i = 0), this.activeItem = this.renderArray[i], this.render();
    const n = this.getItemElement(this.activeItem);
    this.activeEleScrollIntoView(n);
  }
  selectItem(e) {
    const { cb: i } = this;
    i && i(e), requestAnimationFrame(this.hide.bind(this));
  }
}
const V = {};
for (const o of ji)
  V[o.category] ? V[o.category].push(o) : V[o.category] = [o];
class zr {
  constructor() {
    // cache key is the search text, and the value is search results by category.
    u(this, "cache", /* @__PURE__ */ new Map());
  }
  search(r) {
    const { cache: e } = this;
    if (e.has(r))
      return e.get(r);
    const i = {};
    return Object.keys(V).forEach((n) => {
      const a = new De(V[n], {
        includeScore: !0,
        keys: ["aliases", "tags"]
      }).search(r).map((d) => d.item);
      a.length && (i[n] = a);
    }), e.set(r, i), i;
  }
  destroy() {
    return this.cache.clear();
  }
}
const qr = {
  placement: "bottom",
  modifiers: {
    offset: {
      offset: "0, 12"
    }
  },
  showArrow: !1
};
class Fr extends ye {
  constructor(e) {
    super(e, "mu-emoji-picker", qr);
    u(this, "_renderObj", null);
    u(this, "oldVNode", null);
    u(this, "emoji", new zr());
    u(this, "renderArray", []);
    u(this, "activeItem", null);
    this.listen();
  }
  get renderObj() {
    return this._renderObj || {};
  }
  set renderObj(e) {
    this._renderObj = e;
    const i = [];
    if (Object.keys(e).forEach((n) => {
      i.push(...e[n]);
    }), this.renderArray = i, this.renderArray.length > 0) {
      this.activeItem = this.renderArray[0];
      const n = this.getItemElement(this.activeItem);
      this.activeEleScrollIntoView(n);
    }
  }
  listen() {
    super.listen();
    const { eventCenter: e } = this.muya;
    e.on("muya-emoji-picker", ({ reference: i, emojiText: n, block: t }) => {
      if (!n)
        return this.hide();
      const a = n.trim();
      if (a) {
        this.renderObj = this.emoji.search(a);
        const d = (m) => {
          t && t.setEmoji && t.setEmoji(m.aliases[0]);
        };
        this.renderArray.length ? (this.show(i, d), this.render()) : this.hide();
      }
    });
  }
  render() {
    const { scrollElement: e, renderObj: i, activeItem: n, oldVNode: t } = this, { i18n: a } = this.muya, d = Object.keys(i).map((c) => {
      const l = f("div.title", a.t(c) || c), s = i[c].map((p) => f(
        n === p ? "div.item.active" : "div.item",
        {
          dataset: { label: p.aliases[0] },
          props: { title: p.description },
          on: {
            click: () => {
              this.selectItem(p);
            }
          }
        },
        f("span", p.emoji)
      ));
      return f("section", [l, f("div.emoji-wrapper", s)]);
    }), m = f("div", d);
    t ? v(t, m) : v(e, m), this.oldVNode = m;
  }
  getItemElement(e) {
    const i = e.aliases[0];
    return this.floatBox.querySelector(`[data-label="${i}"]`);
  }
  destroy() {
    super.destroy(), this.emoji.destroy();
  }
}
u(Fr, "pluginName", "emojiPicker");
const E = G ? "⌘" : "Ctrl", Rr = [
  {
    type: "strong",
    tooltip: "Emphasize",
    shortcut: `${E}+B`,
    icon: Ni
  },
  {
    type: "em",
    tooltip: "Italic",
    shortcut: `${E}+I`,
    icon: Li
  },
  {
    type: "u",
    tooltip: "Underline",
    shortcut: `${E}+U`,
    icon: zi
  },
  {
    type: "del",
    tooltip: "Strikethrough",
    shortcut: `${E}+D`,
    icon: Ri
  },
  {
    type: "mark",
    tooltip: "Highlight",
    shortcut: `⇧+${E}+H`,
    icon: Vi
  },
  {
    type: "inline_code",
    tooltip: "Inline Code",
    shortcut: `${E}+E`,
    icon: pe
  },
  {
    type: "inline_math",
    tooltip: "Inline Math",
    shortcut: `⇧+${E}+E`,
    icon: Ki
  },
  {
    type: "link",
    tooltip: "Link",
    shortcut: `${E}+L`,
    icon: Fi
  },
  {
    type: "image",
    tooltip: "Image",
    shortcut: `⇧+${E}+I`,
    icon: qi
  },
  {
    type: "clear",
    tooltip: "Eliminate",
    shortcut: `⇧+${E}+R`,
    icon: Hi
  }
], Kr = {
  placement: "top",
  modifiers: {
    offset: {
      offset: "0, 5"
    }
  },
  showArrow: !1
};
class Vr extends M {
  constructor(e, i = {}) {
    const n = "mu-format-picker", t = Object.assign({}, Kr, i);
    super(e, n, t);
    u(this, "oldVNode", null);
    u(this, "block", null);
    u(this, "formats", []);
    u(this, "options");
    u(this, "icons", Rr);
    u(this, "formatContainer", document.createElement("div"));
    this.options = t, this.container.appendChild(this.formatContainer), this.floatBox.classList.add("mu-format-picker-container"), this.listen();
  }
  listen() {
    const { eventCenter: e, domNode: i, editor: n } = this.muya;
    super.listen(), e.subscribe("muya-format-picker", ({ reference: m, block: c }) => {
      m ? (this.block = c, this.formats = c.getFormatsInRange().formats, requestAnimationFrame(() => {
        this.show(m), this.render();
      })) : this.hide();
    });
    const t = {
      b: "strong",
      i: "em",
      u: "u",
      d: "del",
      e: "inline_code",
      l: "link"
    }, a = {
      h: "mark",
      e: "inline_math",
      i: "image",
      r: "clear"
    }, d = (m) => {
      if (!ne(m))
        return;
      const { key: c, shiftKey: l, metaKey: s, ctrlKey: p } = m, $ = n.selection.getSelection();
      if (!$)
        return;
      const { anchorBlock: g, isSelectionInSameBlock: b } = $;
      if (b) {
        if (!(g instanceof Mi) || !s && !p)
          return;
        l ? Object.keys(a).includes(c) && (m.preventDefault(), g.format(a[c])) : Object.keys(t).includes(c) && (m.preventDefault(), g.format(t[c]));
      }
    };
    e.attachDOMEvent(i, "keydown", d);
  }
  render() {
    const { icons: e, oldVNode: i, formatContainer: n, formats: t } = this, { i18n: a } = this.muya, d = e.map((c) => {
      const l = "div.icon-wrapper", s = f(
        "i.icon",
        f(
          "i.icon-inner",
          {
            style: {
              background: `url(${c.icon}) no-repeat`,
              "background-size": "100%"
            }
          },
          ""
        )
      ), p = f(l, s);
      let $ = `li.item.${c.type}`;
      return t.some(
        (g) => g.type === c.type || g.type === "html_tag" && g.tag === c.type
      ) && ($ += ".active"), f(
        $,
        {
          attrs: {
            title: `${a.t(c.tooltip)}
${c.shortcut}`
          },
          on: {
            click: (g) => {
              this.selectItem(g, c);
            }
          }
        },
        [p]
      );
    }), m = f("ul", d);
    i ? v(i, m) : v(n, m), this.oldVNode = m;
  }
  selectItem(e, i) {
    e.preventDefault(), e.stopPropagation();
    const { selection: n } = this.muya.editor, { anchor: t, focus: a, anchorBlock: d, anchorPath: m, focusBlock: c, focusPath: l } = n, { block: s } = this;
    if (n.setSelection({
      anchor: t,
      focus: a,
      anchorBlock: d,
      anchorPath: m,
      focusBlock: c,
      focusPath: l
    }), s.format(i.type), /link|image/.test(i.type))
      this.hide();
    else {
      const { formats: p } = s.getFormatsInRange();
      this.formats = p, this.render();
    }
  }
}
u(Vr, "pluginName", "formatPicker");
const de = {
  placement: "bottom",
  modifiers: {
    offset: {
      offset: "0, 0"
    }
  },
  showArrow: !1
};
class Hr extends M {
  constructor(e, i = { ...de }) {
    super(e, "mu-image-selector", Object.assign({}, de, i));
    u(this, "options");
    u(this, "oldVNode", null);
    u(this, "imageInfo", null);
    u(this, "block", null);
    u(this, "state", {
      alt: "",
      src: "",
      title: ""
    });
    u(this, "imageSelectorContainer", document.createElement("div"));
    u(this, "replaceImageAsync", async ({ alt: e, src: i, title: n }) => {
      if (!this.options.imageAction || Ci.test(i)) {
        const {
          alt: t,
          src: a,
          title: d
        } = this.imageInfo.token.attrs;
        (e !== t || i !== a || n !== d) && this.block.replaceImage(this.imageInfo, { alt: e, src: i, title: n }), this.hide();
      } else if (i) {
        const t = `loading-${Ii()}`;
        this.block.replaceImage(this.imageInfo, {
          alt: t,
          src: i,
          title: n
        }), this.hide();
        const a = await this.options.imageAction({ src: i, title: n, alt: e }), { src: d } = Ei(i);
        d && this.muya.editor.inlineRenderer.renderer.urlMap.set(a, d);
        const m = this.muya.domNode.querySelector(
          `span[data-id=${t}]`
        );
        if (m) {
          const c = Si(m);
          this.block.replaceImage(c, {
            alt: e,
            src: a,
            title: n
          });
        }
      } else
        this.hide();
    });
    this.options = Object.assign({}, de, i), this.container.appendChild(this.imageSelectorContainer), this.floatBox.classList.add("mu-image-selector-wrapper"), this.listen();
  }
  listen() {
    super.listen();
    const { eventCenter: e } = this.muya;
    e.on("muya-image-selector", ({ block: i, reference: n, imageInfo: t }) => {
      var a;
      if (n) {
        this.block = i, Object.assign(this.state, t.token.attrs);
        const d = this.state.src;
        if (d && /^file:\/\//.test(d)) {
          let c = 7;
          _i && /^file:\/\/\//.test(d) && (c = 8), this.state.src = d.substring(c);
        }
        this.imageInfo = t, this.show(n), this.render();
        const m = (a = this.container) == null ? void 0 : a.querySelector("input.src");
        m && (m.focus(), m.select());
      } else
        this.hide();
    });
  }
  handleSrcInput(e) {
    const i = e.target.value;
    this.state.src = i;
  }
  handleEnter(e) {
    ne(e) && (e.stopPropagation(), e.key === N.Enter && this.handleConfirm());
  }
  handleConfirm() {
    return this.replaceImageAsync(this.state);
  }
  async handleMoreClick() {
    if (!this.options.imagePathPicker)
      return;
    const e = await this.options.imagePathPicker();
    this.state.src = e, this.render();
  }
  render() {
    const { oldVNode: e, imageSelectorContainer: i } = this, { i18n: n } = this.muya, { src: t } = this.state, a = this.options.imagePathPicker ? f(
      "span.more",
      {
        on: {
          click: () => {
            this.handleMoreClick();
          }
        }
      },
      f("span.more-inner")
    ) : null, d = f("input.src", {
      props: {
        placeholder: n.t("Image src placeholder"),
        value: t
      },
      on: {
        input: (l) => {
          this.handleSrcInput(l);
        },
        paste: (l) => {
          this.handleSrcInput(l);
        },
        keydown: (l) => {
          this.handleEnter(l);
        }
      }
    }), m = f(
      "span.confirm",
      {
        on: {
          click: () => {
            this.handleConfirm();
          }
        }
      },
      n.t("Confirm Text")
    ), c = f("div.image-edit-tool", [
      a,
      d,
      m
    ]);
    v(e || i, c), this.oldVNode = c;
  }
}
u(Hr, "pluginName", "imageSelector");
const Gr = [
  {
    type: "edit",
    tooltip: "Edit Image",
    icon: Gi
  },
  {
    type: "inline",
    tooltip: "Inline Image",
    icon: Ui
  },
  {
    type: "left",
    tooltip: "Align Left",
    icon: Be
  },
  {
    type: "center",
    tooltip: "Align Center",
    icon: Pe
  },
  {
    type: "right",
    tooltip: "Align Right",
    icon: Ne
  },
  {
    type: "delete",
    tooltip: "Remove Image",
    icon: Ji
  }
], Ur = {
  placement: "top",
  modifiers: {
    offset: {
      offset: "0, 10"
    }
  },
  showArrow: !1
};
class Jr extends M {
  constructor(e, i = {}) {
    const n = "mu-image-toolbar", t = Object.assign({}, Ur, i);
    super(e, n, t);
    u(this, "oldVNode", null);
    u(this, "imageInfo", null);
    u(this, "icons", Gr);
    u(this, "reference", null);
    u(this, "block", null);
    u(this, "toolbarContainer", document.createElement("div"));
    this.container.appendChild(this.toolbarContainer), this.floatBox.classList.add("mu-image-toolbar-container"), this.listen();
  }
  listen() {
    const { eventCenter: e } = this.muya;
    super.listen(), e.on("muya-image-toolbar", ({ block: i, reference: n, imageInfo: t }) => {
      this.reference = n, n ? (this.block = i, this.imageInfo = t, setTimeout(() => {
        this.show(n), this.render();
      }, 0)) : this.hide();
    });
  }
  render() {
    const { icons: e, oldVNode: i, toolbarContainer: n, imageInfo: t } = this, { i18n: a } = this.muya, { attrs: d } = t.token, m = d["data-align"], c = e.map((s) => {
      const p = "div.icon-wrapper", $ = f(
        "i.icon",
        f(
          "i.icon-inner",
          {
            style: {
              background: `url(${s.icon}) no-repeat`,
              "background-size": "100%"
            }
          },
          ""
        )
      ), g = f(p, $);
      let b = `li.item.${s.type}`;
      return (s.type === m || !m && s.type === "inline") && (b += ".active"), f(
        b,
        {
          dataset: {
            tip: s.tooltip
          },
          attrs: {
            title: a.t(s.tooltip)
          },
          on: {
            click: (x) => {
              this.selectItem(x, s);
            }
          }
        },
        g
      );
    }), l = f("ul", c);
    i ? v(i, l) : v(n, l), this.oldVNode = l;
  }
  selectItem(e, i) {
    e.preventDefault(), e.stopPropagation();
    const { imageInfo: n } = this;
    switch (i.type) {
      case "delete":
        return this.block.deleteImage(n), this.muya.eventCenter.emit("muya-transformer", {
          reference: null
        }), this.hide();
      case "edit": {
        const t = this.reference.getBoundingClientRect(), a = {
          getBoundingClientRect() {
            return t.height = 0, t;
          }
        };
        return this.muya.eventCenter.emit("muya-transformer", {
          reference: null
        }), this.muya.eventCenter.emit("muya-image-selector", {
          block: this.block,
          reference: a,
          imageInfo: n
        }), this.hide();
      }
      case "inline":
      case "left":
      case "center":
      case "right":
        return this.block.updateImage(this.imageInfo, "data-align", i.type), this.hide();
    }
  }
}
u(Jr, "pluginName", "imageToolbar");
const Se = ["left", "right"], Y = 5, _e = 50;
class Xr {
  constructor(r) {
    u(this, "reference", null);
    u(this, "block", null);
    u(this, "imageInfo", null);
    u(this, "movingAnchor", null);
    u(this, "status", !1);
    u(this, "width", null);
    u(this, "eventId", []);
    u(this, "lastScrollTop", null);
    u(this, "resizing", !1);
    // A container for storing drag strips
    u(this, "container");
    u(this, "mouseDown", (r) => {
      const e = r.target;
      if (!e.closest(".bar"))
        return;
      const { eventCenter: i } = this.muya;
      this.movingAnchor = e.getAttribute("data-position");
      const n = i.attachDOMEvent(
        document.body,
        "mousemove",
        this.mouseMove
      ), t = i.attachDOMEvent(
        document.body,
        "mouseup",
        this.mouseUp
      );
      this.resizing = !0, i.emit("muya-image-toolbar", { reference: null }), this.eventId.push(n, t);
    });
    u(this, "mouseMove", (r) => {
      if (!O(r))
        return;
      r.preventDefault();
      const { clientX: e } = r;
      let i = "", n;
      const t = this.reference.querySelector("img");
      if (t) {
        switch (this.movingAnchor) {
          case "left":
            n = this.container.querySelector(".right"), i = Math.max(
              n.getBoundingClientRect().left + Y - e,
              50
            );
            break;
          case "right":
            n = this.container.querySelector(".left"), i = Math.max(
              e - n.getBoundingClientRect().left - Y,
              50
            );
            break;
        }
        i = parseInt(String(i)), this.width = i, t.setAttribute("width", String(i)), this.update();
      }
    });
    u(this, "mouseUp", (r) => {
      r.preventDefault();
      const { eventCenter: e } = this.muya;
      if (this.eventId.length) {
        for (const i of this.eventId)
          e.detachDOMEvent(i);
        this.eventId = [];
      }
      typeof this.width == "number" && this.block && this.imageInfo && (this.block.updateImage(this.imageInfo, "width", String(this.width)), this.hide()), this.width = null, this.resizing = !1, this.movingAnchor = null;
    });
    this.muya = r;
    const e = this.container = document.createElement("div");
    e.classList.add("mu-transformer"), document.body.appendChild(e), this.listen();
  }
  listen() {
    const { eventCenter: r, domNode: e } = this.muya, i = (n) => {
      if (typeof this.lastScrollTop != "number") {
        this.lastScrollTop = n.target.scrollTop;
        return;
      }
      !this.resizing && this.status && Math.abs(n.target.scrollTop - this.lastScrollTop) > 50 && this.hide();
    };
    r.on("muya-transformer", ({ block: n, reference: t, imageInfo: a }) => {
      this.reference = t, t ? (this.block = n, this.imageInfo = a, setTimeout(() => {
        this.render();
      })) : this.hide();
    }), r.attachDOMEvent(document, "click", this.hide.bind(this)), r.attachDOMEvent(e.parentElement, "scroll", i), r.attachDOMEvent(
      this.container,
      "dragstart",
      (n) => n.preventDefault()
    ), r.attachDOMEvent(document.body, "mousedown", this.mouseDown);
  }
  render() {
    const { eventCenter: r } = this.muya;
    this.status && this.hide(), this.status = !0, this.createElements(), this.update(), r.emit("muya-float", this, !0);
  }
  createElements() {
    Se.forEach((r) => {
      const e = document.createElement("div");
      e.classList.add("bar"), e.classList.add(r), e.setAttribute("data-position", r), this.container.appendChild(e);
    });
  }
  update() {
    const r = this.reference.getBoundingClientRect();
    Se.forEach((e) => {
      const i = this.container.querySelector(`.${e}`);
      switch (e) {
        case "left":
          i.style.left = `${r.left - Y}px`, i.style.top = `${r.top + r.height / 2 - _e / 2}px`;
          break;
        case "right":
          i.style.left = `${r.left + r.width - Y}px`, i.style.top = `${r.top + r.height / 2 - _e / 2}px`;
          break;
      }
    });
  }
  hide() {
    const { eventCenter: r } = this.muya, e = this.container.querySelectorAll(".bar");
    Array.from(e).forEach((i) => i.remove()), this.status = !1, r.emit("muya-float", this, !1);
  }
}
u(Xr, "pluginName", "transformer");
var Yr = [[[["acre-icon", ["medium-blue", "medium-blue"], /^APLSource$/], ["acre-icon", ["dark-blue", "dark-blue"], /^\.acre$/], ["agda-icon", ["dark-cyan", "dark-cyan"], /^\.agda$/i], ["alacritty-alt-icon", ["dark-blue", "dark-blue"], /\/\.config\/alacritty$/i, , !0], ["appstore-icon", [null, null], /\.(?:app|xcodeproj|xcworkspace)$/i], ["arttext4-icon", ["medium-purple", "medium-purple"], /\.art4$/i], ["arttext-icon", ["dark-purple", "dark-purple"], /\.artx$/i], ["atom-icon", ["dark-green", "dark-green"], /^\.atom(?:-ci)?$/], ["automator-icon", ["medium-cyan", "medium-cyan"], /[^\s.]\.(?:c?action|definition|workflow)$/i], ["azurepipelines-icon", ["dark-blue", "dark-blue"], /^\.azure-pipelines$/i], ["bazaar-icon", ["medium-yellow", "dark-yellow"], /^\.bzr$/], ["bitcoin-icon", ["medium-orange", "medium-orange"], /^\.bitcoin$/i], ["bloc-icon", ["medium-cyan", "medium-cyan"], /^bloc$/i], ["bower-icon", ["medium-yellow", "medium-orange"], /^bower[-_]components$/], ["buildkite-icon", ["light-green", "medium-green"], /^\.buildkite$/], ["cabal-icon", ["medium-cyan", "medium-cyan"], /^\.cabal$/i], ["chef-icon", [null, null], /\.chef$/], ["circleci-icon", [null, null], /^\.circleci$/], ["cnab-icon", ["dark-blue", "dark-blue"], /^cnab$/i], ["cpan-icon", ["medium-blue", "medium-blue"], /^\.cpan$/i], ["cpan-icon", ["dark-blue", "dark-blue"], /^\.cpanplus$/i], ["cubit-icon", ["medium-cyan", "medium-cyan"], /^cubits?$/i], ["cvs-icon", ["medium-orange", "medium-orange"], /^CVS$/], ["deno-icon", ["dark-purple", "dark-purple"], /\.deno$/i], ["dependabot-icon", ["medium-blue", "medium-blue"], /\.dependabot$/i], ["devcontainer-icon", ["medium-blue", "medium-blue"], /^\.devcontainer$/i], ["docker-icon", ["dark-blue", "dark-blue"], /^\.docker$/], ["dropbox-icon", ["medium-blue", "medium-blue"], /^(?:Dropbox|\.dropbox\.cache)$/], ["dub-icon", ["medium-red", "medium-red"], /^\.dub$/], ["dvc-icon", ["light-blue", "light-blue"], /^\.dvc$/], ["emacs-icon", ["medium-purple", "medium-purple"], /^\.emacs\.d$/], ["expo-icon", ["medium-blue", "medium-blue"], /^\.expo(?:-shared)?$/i], ["fossil-icon", [null, null], /^\.fossil-settings$/i], ["git-icon", ["medium-red", "medium-red"], /\.git$/], ["github-icon", [null, null], /^\.github$/], ["gitlab-icon", [null, null], /^\.gitlab$/], ["istanbul-icon", ["medium-orange", "medium-orange"], /^\.nyc[-_]output$/], ["dylib-icon", [null, null], /.\.(?:appex|bundle|ccl|component|framework|framework|ideplugin|kext|mdimporter|osax|(?:osirix)?plugin|qlgenerator)$/i], ["hg-icon", ["medium-grey", "medium-grey"], /^\.hg$/], ["meteor-icon", ["dark-orange", "dark-orange"], /^\.meteor$/], ["node-icon", ["medium-green", "medium-green"], /^node_modules$/], ["node-icon", ["dark-green", "dark-green"], /^\.node-gyp$/], ["package-icon", [null, null], /^\.(?:bundle|paket)$/i], ["svn-icon", [null, null], /^\.svn$/i], ["textmate-icon", [null, null], /\.tmBundle$/i], ["ufo-icon", [null, null], /\.ufo\d?$/i], ["vagrant-icon", ["medium-cyan", "medium-cyan"], /\.vagrant$/i], ["vagrant-icon", ["dark-cyan", "dark-cyan"], /\.vagrant\.d$/i], ["vim-icon", ["medium-green", "medium-green"], /^\.vim$/i], ["vs-icon", [null, null], /^\.vscode$/i], ["wine-icon", ["dark-red", "dark-red"], /^\.wine$/i], ["yarn-icon", ["medium-blue", "medium-blue"], /^\.yarn$/i]], [[], [], [3], [], []], {}], [[["lock-icon", ["dark-blue", "dark-blue"], /(?:^|.*(?:\.|-|\/))vault\.ya?ml$$/i, 4, !0, , , , /^\$ANSIBLE_VAULT;/], ["binary-icon", ["dark-green", "dark-green"], /\.swp$/i, 4], ["database-icon", ["medium-red", "medium-red"], /(?:^|\.)fonts\.(?:dir|scale|alias)$/i, 4, !1, , /^source\.fontdir$/i], ["link-icon", ["medium-blue", "medium-blue"], /\.lnk$/i, 3, !1, , , , /^L\0{3}\x01\x14\x02\0{5}\xC0\0{6}F/], ["link-icon", ["medium-blue", "medium-blue"], /\.alias$/, 3, !1, , , , /^book\0{4}mark\0{4}/], ["phoenix-icon", ["medium-red", "medium-red"], /^phoenix\.ex$/i, 3], ["phoenix-icon", ["medium-orange", "medium-orange"], /^phoenix\.[cm]?js$/i, 3], ["alacritty-icon", ["medium-orange", "medium-orange"], /^\.?alacritty\.ya?ml$/i, 2], ["angular-icon", ["medium-red", "medium-red"], /^angular[^.]*\.[cm]?js$/i, 2], ["ansible-icon", ["dark-cyan", "dark-cyan"], /(?:^|\.)ansible(?:\.ya?ml)?$/i, 2, !1, , /^source\.ansible(?:[.-]advanced)?$/i, /^Ansible$/i], ["ansible-icon", ["dark-cyan", "dark-cyan"], /([\\\/])roles\1[^\\\/]+\1(?:tasks|handlers|tests)\1.*\.ya?ml$/i, 2, !0], ["ansible-icon", ["dark-blue", "dark-blue"], /([\\\/])roles\1[^\\\/]+\1(?:defaults|vars|meta)\1.*\.ya?ml$|([\\\/])(?:group_vars|host_vars)\1.*\.ya?ml$/i, 2, !0], ["ant-icon", ["dark-pink", "dark-pink"], /^ant\.xml$|\.ant$/i, 2, !1, , /^text\.xml\.ant$/i, /^Ant[\W_ \t]?Build[\W_ \t]?System$/i], ["antwar-icon", ["dark-purple", "dark-purple"], /^\.?antwar\.conf(?:ig)?\.[cm]?js$/i, 2], ["apache-icon", ["medium-red", "medium-red"], /^(?:apache2?|httpd)(?:\.[-\w]+)*\.conf$/i, 2], ["apache-icon", ["dark-red", "dark-red"], /\.apacheconf$/i, 2, !1, , /\.apache-config$/i, /^Apache$|^(?:aconf|ApacheConf)$/i], ["apache-icon", ["medium-purple", "medium-purple"], /apache2[\\/]magic$/i, 2, !0], ["apache-icon", ["dark-green", "dark-green"], /\.vhost$/i, 2], ["apache-icon", ["medium-green", "medium-green"], /\.thrift$/i, 2], ["apiextractor-icon", ["light-blue", "medium-blue"], /^api-extractor(?:-base)?\.json$/i, 2], ["apollo-icon", ["dark-blue", "dark-blue"], /^apollo\.config\.js$/i, 2, !1, /^apollo$/], ["appcelerator-icon", ["medium-red", "medium-red"], /^appcelerator\.[cm]?js$/i, 2], ["appveyor-icon", ["medium-blue", "medium-blue"], /^\.?appveyor\.yml$/i, 2], ["archlinux-icon", ["dark-purple", "dark-purple"], /^\.install$/, 2], ["archlinux-icon", ["dark-maroon", "dark-maroon"], /^\.SRCINFO$/, 2], ["archlinux-icon", ["dark-yellow", "dark-yellow"], /^pacman\.conf$/, 2], ["archlinux-icon", ["light-yellow", "light-yellow"], /^pamac\.conf$/, 2], ["archlinux-icon", ["dark-cyan", "dark-cyan"], /^PKGBUILD$/, 2], ["archlinux-icon", ["light-yellow", "light-yellow"], /yaourtrc$/i, 2], ["atom-icon", ["dark-green", "dark-green"], /\.atomproject\.[jc]son$/i, 2], ["atoum-icon", ["medium-blue", "medium-blue"], /^\.?atoum(?:\.[^.]+)*\.php/i, 2], ["aurelia-icon", ["dark-pink", "dark-pink"], /^aurelia\.json$/i, 2], ["azurepipelines-icon", ["dark-blue", "dark-blue"], /^azure-pipelines\.ya?ml$/i, 2], ["backbone-icon", ["dark-blue", "dark-blue"], /^backbone(?:[-.]min|dev)?\.[cm]?js$/i, 2], ["behat-icon", ["medium-cyan", "medium-cyan"], /^behat(?:\.[^.]+)*\.ya?ml$/i, 2], ["bem-icon", ["medium-maroon", "medium-maroon"], /\.bemjson(?:\.[cm]?js)?$/i, 2], ["bintray-icon", ["medium-green", "medium-green"], /^\.bintray\.json$/i, 2], ["bitbucket-icon", ["medium-blue", "medium-blue"], /^bitbucket-pipelines\.ya?ml$/i, 2], ["bitcoin-icon", ["medium-orange", "medium-orange"], /^bitcoin\.conf$/i, 2], ["boot-icon", ["medium-green", "dark-green"], /^Makefile\.boot$/i, 2], ["bootstrap-icon", ["medium-yellow", "dark-yellow"], /^(?:custom\.)?bootstrap\S*\.js$/i, 2], ["bootstrap-icon", ["medium-green", "dark-green"], /^(?:custom\.)?bootstrap\S*\.cjs$/i, 2], ["bootstrap-icon", ["medium-blue", "dark-blue"], /^(?:custom\.)?bootstrap\S*\.mjs$/i, 2], ["bootstrap-icon", ["medium-blue", "medium-blue"], /^(?:custom\.)?bootstrap\S*\.css$/i, 2], ["bootstrap-icon", ["dark-blue", "dark-blue"], /^(?:custom\.)?bootstrap\S*\.less$/i, 2], ["bootstrap-icon", ["light-pink", "light-pink"], /^(?:custom\.)?bootstrap\S*\.scss$/i, 2], ["bootstrap-icon", ["medium-green", "medium-green"], /^(?:custom\.)?bootstrap\S*\.styl$/i, 2], ["bootstrap-icon", ["medium-orange", "medium-orange"], /\.bootstraprc$/i, 2], ["bors-icon", ["dark-purple", "dark-purple"], /^bors\.toml$/i, 2], ["bower-icon", ["medium-yellow", "medium-orange"], /^(?:\.bowerrc|bower\.json|Bowerfile)$/i, 2], ["brakeman-icon", ["medium-red", "medium-red"], /brakeman\.yml$/i, 2], ["brakeman-icon", ["dark-red", "dark-red"], /^brakeman\.ignore$/i, 2], ["broccoli-icon", ["medium-green", "medium-green"], /^Brocfile\./i, 2], ["browsersync-icon", ["medium-red", "medium-red"], /^(?:bs-config|browser-sync)\.(?:[cm]?js|json)$/i, 2], ["brunch-icon", ["medium-green", "medium-green"], /^brunch-config\.(?:[cm]?js|coffee|ts)$/i, 2], ["bundler-icon", ["medium-blue", "dark-blue"], /^Gemfile(?:\.lock)?$/i, 2], ["cabal-icon", ["medium-purple", "medium-purple"], /^cabal\.(?:config|project)$/i, 2], ["cabal-icon", ["medium-yellow", "dark-yellow"], /^cabal-ghcjs\.project$/i, 2], ["caddy-icon", ["dark-blue", "dark-blue"], /^Caddyfile(?:$|[-.])/i, 2], ["caffe2-icon", ["dark-blue", "dark-blue"], /\.caffe2model$|^(?:init|predict)_net\.pb$/i, 2], ["caffe2-icon", ["medium-purple", "medium-purple"], /^(?:deploy|solver|train_val)\.prototxt$/i, 2], ["carthage-icon", ["dark-pink", "dark-pink"], /^Cartfile(?:\.|$)/, 2], ["chai-icon", ["medium-red", "dark-red"], /^chai\.(?:[jt]sx?|es6?|coffee)$/i, 2], ["chartjs-icon", ["dark-pink", "dark-pink"], /^Chart(?:\.bundle)?(?:\.min)?\.[cm]?js$/i, 2], ["checklist-icon", ["medium-green", "medium-green"], /^todo\.txt$/i, 2, !1, , /^text\.(?:gfm-)?todotxt$/i, /^Checklist$/i], ["chocolatey-icon", ["medium-blue", "medium-blue"], /^chocolatey.*\.ps1$/i, 2], ["circleci-icon", ["medium-green", "medium-green"], /^circle\.yml$/i, 2], ["codacy-icon", ["dark-blue", "dark-blue"], /\.codacy\.ya?ml$/i, 2], ["cc-icon", ["medium-green", "medium-green"], /\.codeclimate\.yml$/i, 2], ["codecov-icon", ["dark-pink", "dark-pink"], /^\.?codecov\.ya?ml$/i, 2], ["codemeta-icon", ["medium-grey", "dark-grey"], /^codemeta\.json(?:ld)?$/i, 2], ["codeship-icon", ["dark-blue", "dark-blue"], /^codeship-[\w.-]+\.ya?ml$/i, 2], ["coffee-icon", ["medium-cyan", "medium-cyan"], /\.coffee\.ecr$/i, 2], ["coffee-icon", ["medium-red", "medium-red"], /\.coffee\.erb$/i, 2], ["commitizen-icon", ["dark-purple", "dark-purple"], /^\.?cz\.(?:json|toml|ya?ml)$/i, 2], ["commitlint-icon", ["medium-blue", "medium-blue"], /^commitlint\.config\.js$|^\.commitlintrc\.(?:json|js|ya?ml)$/i, 2], ["compass-icon", ["medium-red", "medium-red"], /^_?(?:compass|lemonade)\.scss$/i, 2], ["composer-icon", ["medium-yellow", "medium-yellow"], /^composer\.(?:json|lock)$/i, 2], ["composer-icon", ["dark-blue", "dark-blue"], /^composer\.phar$/i, 2], ["conan-icon", ["medium-blue", "dark-blue"], /^(?:conanfile\.(?:txt|py)|conan\.conf)$/i, 2], ["config-icon", ["dark-blue", "dark-blue"], /^buildozer\.spec$/i, 2], ["config-go-icon", ["dark-blue", "dark-blue"], /^go\.mod$/i, 2], ["config-go-icon", ["medium-green", "medium-green"], /^go\.sum$/i, 2], ["cordova-icon", ["light-blue", "light-blue"], /^cordova(?:[^.]*\.|-(?:\d\.)+)[cm]?js$/i, 2], ["coveralls-icon", ["medium-red", "medium-red"], /^\.coveralls\.ya?ml$/i, 2], ["cpan-icon", ["medium-red", "medium-red"], /^META\.yml$/, 2], ["cpan-icon", ["medium-yellow", "dark-yellow"], /^META\.json$/, 2], ["crowdin-icon", ["medium-green", "medium-green"], /^crowdin\.ya?ml$/i, 2], ["d3-icon", ["medium-orange", "medium-orange"], /^d3(?:\.v\d+)?[^.]*\.[cm]?js$/i, 2], ["database-icon", ["medium-red", "medium-red"], /^METADATA\.pb$/, 2], ["database-icon", ["medium-red", "medium-red"], /\.git[\/\\](?:.*[\/\\])?(?:HEAD|ORIG_HEAD|packed-refs|logs[\/\\](?:.+[\/\\])?[^\/\\]+)$/, 2, !0], ["dependabot-icon", ["medium-blue", "medium-blue"], /^dependabot\.ya?ml$/i, 2], ["devcontainer-icon", ["medium-blue", "medium-blue"], /^devcontainer\.json$/i, 2], ["docker-icon", ["dark-blue", "dark-blue"], /^(?:Dockerfile|docker-compose)|\.docker(?:file|ignore)$/i, 2, !1, , /\.dockerfile$/i, /^D[0o]cker$|^D[0o]ckerfile$/i], ["docker-icon", ["dark-orange", "dark-orange"], /^docker-sync\.yml$/i, 2], ["doclets-icon", ["light-green", "medium-green"], /\.doclets\.ya?ml$/i, 2], ["docz-icon", ["medium-yellow", "dark-yellow"], /(?:^|\.)docz(?:rc)?(?:\.config)?\.[cm]?js$/i, 2], ["docz-icon", ["medium-orange", "dark-orange"], /(?:^|\.)docz(?:rc)?(?:\.config)?\.json$/i, 2], ["dojo-icon", ["light-red", "light-red"], /^dojo\.[cm]?js$/i, 2], ["dragula-icon", ["dark-purple", "dark-purple"], /^dragula(?:\.min)?\.(?:[cm]?js|css)$/i, 2], ["drawio-icon", ["medium-orange", "medium-orange"], /^\.drawio(?:$|\.)|\.d(?:raw)?io(?:\.png|\.svg)?$/i, 2], ["drone-icon", ["medium-cyan", "medium-cyan"], /\.drone\.ya?ml$/i, 2], ["dub-icon", ["medium-red", "medium-red"], /^dub(?:\.selections)?\.(?:json|sdl)$/i, 2], ["electron-icon", ["dark-blue", "dark-blue"], /\.compilerc(?:\.json)?$/i, 2], ["ember-icon", ["medium-red", "medium-red"], /^ember(?:\.|(?:-[^.]+)?-(?:\d+\.)+(?:debug\.)?)[cm]?js$/i, 2], ["esdoc-icon", ["medium-red", "medium-red"], /^\.?esdoc\.(?:[cm]?js|json)$/i, 2], ["eslint-icon", ["medium-purple", "medium-purple"], /\.eslint(?:cache|ignore)$/i, 2], ["eslint-icon", ["light-purple", "light-purple"], /\.eslintrc(?:$|\.)/i, 2], ["extjs-icon", ["light-green", "light-green"], /\bExtjs(?:-ext)?\.[cm]?js$/i, 2], ["fabfile-icon", ["medium-blue", "medium-blue"], /^fabfile\.py$/i, 2], ["fabric-icon", ["medium-orange", "dark-orange"], /^fabric\.mod\.json$/i, 2], ["firebase-icon", ["medium-yellow", "medium-yellow"], /^firebase\.json$|^firestore\.indexes\.json$/i, 2], ["fossa-icon", ["medium-blue", "medium-blue"], /\.fossa\.ya?ml$/i, 2], ["fuelux-icon", ["medium-orange", "dark-orange"], /^fuelux(?:\.min)?\.(?:css|[cm]?js)$/i, 2], ["fusebox-icon", ["medium-blue", "medium-blue"], /^fuse\.[cm]?js$/, 2], ["galaxy-icon", ["medium-grey", "medium-grey"], /^galaxy\.ini$/i, 2], ["gatsby-icon", ["dark-purple", "dark-purple"], /^gatsby-.+\.[jt]s$/i, 2], ["gear-icon", ["medium-blue", "medium-blue"], /\.indent\.pro$/i, 2], ["gitlab-icon", ["medium-orange", "medium-orange"], /^\.gitlab-ci\.yml$/, 2], ["gitpod-icon", ["medium-blue", "medium-blue"], /^\.?gitpod\.ya?ml$/i, 2], ["glide-icon", ["light-orange", "light-orange"], /^glide\.ya?ml$/i, 2], ["goreleaser-icon", ["medium-blue", "medium-blue"], /^\.goreleaser\.ya?ml$/i, 2], ["graphql-icon", ["medium-pink", "medium-pink"], /^\.graphqlrc(?:\.(?:json|js|ya?ml))?$/i, 2], ["graphql-icon", ["medium-pink", "medium-pink"], /^graphql\.config\.js$/, 2], ["gql-codegen-icon", ["dark-pink", "dark-pink"], /^codegen\.(?:json|ya?ml)$/i, 2], ["greenkeeper-icon", ["medium-green", "medium-green"], /^greenkeeper\.json$/i, 2], ["gridsome-icon", ["medium-cyan", "medium-cyan"], /\bgridsome\.(?:config|client|server)\.[jt]s$/i, 2], ["grunt-icon", ["medium-yellow", "medium-yellow"], /^gruntfile.*\.(?:[cm]?js|jsx)$/i, 2], ["grunt-icon", ["medium-maroon", "medium-maroon"], /^gruntfile.*\.(?:lit)?coffee$/i, 2], ["grunt-icon", ["medium-blue", "medium-blue"], /^gruntfile.*\.tsx?$/i, 2], ["gulp-icon", ["medium-red", "medium-red"], /^gulpfile.*\.(?:[cm]?js|jsx)$/i, 2], ["gulp-icon", ["medium-maroon", "medium-maroon"], /^gulpfile.*\.(?:lit)?coffee$/i, 2], ["gulp-icon", ["medium-blue", "medium-blue"], /^gulpfile.*\.tsx?$/i, 2], ["hie-icon", ["dark-purple", "dark-purple"], /^hie\.ya?ml(?:$|\.)/i, 2], ["templeos-icon", ["medium-orange", "medium-orange"], /\.hc\.z$/i, 2], ["houndci-icon", ["medium-purple", "medium-purple"], /\.hound\.ya?ml$/i, 2], ["html5-icon", ["medium-cyan", "medium-cyan"], /\.html?\.ecr$/i, 2], ["html5-icon", ["medium-red", "medium-red"], /\.(?:html?\.erb(?:\.deface)?|rhtml)$/i, 2, !1, , /\.html\.erb$/i, /^Html$/i], ["husky-icon", ["medium-orange", "dark-orange"], /\.huskyrc\.js$/i, 2], ["husky-icon", ["medium-yellow", "dark-yellow"], /\.huskyrc\.json$/i, 2], ["husky-icon", ["medium-green", "dark-green"], /\.huskyrc\.cjs$/i, 2], ["husky-icon", ["medium-blue", "dark-blue"], /\.huskyrc\.mjs$/i, 2], ["husky-icon", ["medium-red", "dark-red"], /\.huskyrc\.ya?ml$/i, 2], ["hyper-icon", ["dark-purple", "dark-purple"], /^\.hyper\.[cm]?js$/i, 2], ["icomoon-icon", ["medium-purple", "medium-purple"], /^icomoon(?:\.[-\w]+)*\.json$/i, 2], ["ionic-icon", ["medium-blue", "medium-blue"], /^ionic\.(?:project|config\.json)$/, 2], ["istanbul-icon", ["medium-orange", "medium-orange"], /^\.nycrc(?:\.json)?$/i, 2], ["istanbul-icon", ["medium-green", "medium-green"], /^\.nycrc\.ya?ml$/i, 2], ["istanbul-icon", ["medium-yellow", "dark-yellow"], /^nyc\.config\.js$/i, 2], ["istanbul-icon", ["medium-green", "dark-green"], /^nyc\.config\.cjs$/i, 2], ["istanbul-icon", ["medium-blue", "dark-blue"], /^nyc\.config\.mjs$/i, 2], ["jasmine-icon", ["medium-purple", "dark-purple"], /^\.?jasmine\.json$|^jasmine\.(?:[-\w]+\.)?(?:[cm]?js|ts|coffee)$/i, 2], ["js-icon", ["medium-cyan", "medium-cyan"], /\.js\.ecr$/i, 2], ["js-icon", ["medium-red", "medium-red"], /\.js\.erb$/i, 2], ["jekyll-icon", ["medium-red", "medium-red"], /^_config\.yml$/, 2], ["jest-icon", ["medium-red", "medium-red"], /^jest(?:\.config)?(?:\.babel)?\.(?:js(?:on|x)?|[cm]js|tsx?)$|^\.jestrc(?:$|\.)/i, 2], ["jest-icon", ["medium-blue", "medium-blue"], /\.(?:mjs|tsx?)\.snap$/i, 2], ["jest-icon", ["medium-green", "dark-green"], /\.cjs\.snap$/i, 2], ["jest-icon", ["medium-yellow", "dark-yellow"], /\.snap$/i, 2], ["jquery-icon", ["dark-blue", "dark-blue"], /^jquery(?:[-.](?:min|latest|slim|\d\.\d+(?:\.\d+)?))*\.(?:[jt]sx?|es6?|coffee|map)$/i, 2], ["jqueryui-icon", ["dark-blue", "dark-blue"], /^jquery(?:[-_.](?:ui[-_.](?:custom|dialog-?\w*)|effects)(?:\.[^.]*)?|[-.]?ui(?:-\d\.\d+(?:\.\d+)?)?(?:\.\w+)?)(?:[-_.]?min|dev)?\.(?:[jt]sx?|es6?|coffee|map|s?css|less|styl)$/i, 2], ["jscpd-icon", ["medium-grey", "medium-grey"], /\.jscpd(?:\.json)?$|^jscpd-report\.json/i, 2], ["jscpd-icon", ["medium-orange", "medium-orange"], /\.jscpd\.html$/i, 2], ["jscpd-icon", ["medium-cyan", "medium-cyan"], /\.jscpd\.xml$/i, 2], ["karma-icon", ["medium-cyan", "medium-cyan"], /^karma\.conf(?:ig)?\.[cm]?js$|^karma\.conf(?:ig)?\.ts$/i, 2], ["karma-icon", ["medium-maroon", "medium-maroon"], /^karma\.conf(?:ig)?\.coffee$/i, 2], ["keybase-icon", ["medium-blue", "medium-blue"], /^keybase\.txt$/i, 2], ["kitchenci-icon", ["medium-green", "medium-green"], /^\.?kitchen(?:\.[-\w]*)*\.ya?ml$/i, 2], ["knockout-icon", ["medium-red", "medium-red"], /^knockout[-.](?:\d+\.){3}(?:debug\.)?[cm]?js$/i, 2], ["kubernetes-icon", ["medium-blue", "medium-blue"], /^kubernetes.*\.ya?ml$|(?:^|\.)kazelcfg\.json$/i, 2, !1, /^kazel$/], ["leaflet-icon", ["medium-green", "medium-green"], /^leaflet\.(?:draw-src|draw|spin|coordinates-(?:\d+\.)\d+\.\d+\.src)\.(?:[cm]?js|css)$|^wicket-leaflet\.[cm]?js$/i, 2], ["lefthook-icon", ["medium-red", "medium-red"], /^lefthook(?:-local)?\.ya?ml$/i, 2], ["lein-icon", [null, null], /project\.clj$/i, 2], ["lerna-icon", ["medium-blue", "dark-blue"], /^lerna\.json$/i, 2], ["lex-icon", ["medium-cyan", "medium-cyan"], /^lexer\.x$/i, 2], ["lgtm-icon", ["dark-purple", "dark-purple"], /^\.?lgtm\.ya?ml$/i, 2], ["lighthouse-icon", ["dark-blue", "dark-blue"], /^\.?lighthouserc\.(?:json|js|ya?ml)$/i, 2, !1, /^lhci$/], ["checklist-icon", ["medium-green", "medium-green"], /^mk\.config$/, 2], ["sourcemap-icon", ["medium-blue", "medium-blue"], /\.css\.map$/i, 2], ["sourcemap-icon", ["medium-yellow", "dark-yellow"], /\.js\.map$/i, 2], ["sourcemap-icon", ["medium-green", "dark-green"], /\.cjs\.map$/i, 2], ["sourcemap-icon", ["medium-blue", "dark-blue"], /\.mjs\.map$/i, 2], ["sourcemap-icon", ["medium-orange", "medium-orange"], /\.cidmap$/i, 2, !1, /^cidmap$/, /\.cidmap$/i, /^Map$|^cidmap$/i], ["sourcemap-icon", ["medium-purple", "medium-purple"], /\.enigma$/i, 2], ["sourcemap-icon", ["medium-maroon", "medium-maroon"], /\.match$/i, 2], ["sourcemap-icon", ["dark-green", "dark-green"], /\.tiny$/i, 2], ["sourcemap-icon", ["medium-green", "medium-green"], /\.tinyv2$/i, 2], ["sourcemap-icon", ["light-cyan", "light-cyan"], /\.unpick$/i, 2], ["markdownlint-icon", ["dark-green", "dark-green"], /^\.markdownlint/i, 2, !1, /^mdl$/], ["marko-icon", ["medium-blue", "medium-blue"], /\.marko$/i, 2, !1, /^marko$/, /\.marko$/i, /^mark[0o]$/i], ["marko-icon", ["medium-maroon", "medium-maroon"], /\.marko\.[cm]?js$/i, 2], ["materialize-icon", ["light-red", "light-red"], /^materialize(?:\.min)?\.(?:[cm]?js|css)$/i, 2], ["mathjax-icon", ["dark-green", "dark-green"], /^MathJax[^.]*\.[cm]?js$/i, 2], ["meson-icon", ["medium-green", "medium-green"], /^(?:meson\.build|meson_options\.txt)$/i, 2, !1, , /\.meson$/i, /^Mes[0o]n$/i], ["book-alt-icon", ["medium-blue", "medium-blue"], /^\.?mkdocs\.ya?ml$/i, 2], ["mocha-icon", ["medium-maroon", "medium-maroon"], /\.mocharc\.(?:jsonc?|[cm]?js|ya?ml)$|^mocha(?:\.min)?\.(?:[jt]sx?|es6?|coffee)$/i, 2], ["mocha-icon", ["medium-red", "medium-red"], /^mocha(?:\.min)?\.(?:s?css|less|styl)$/i, 2], ["mocha-icon", ["light-maroon", "light-maroon"], /mocha\.opts$/i, 2], ["modernweb-icon", ["medium-blue", "medium-blue"], /^web-(?:dev-server|test-runner)\.config\.(?:[cm]?js)$/i, 2], ["modernizr-icon", ["medium-red", "medium-red"], /^\.?modernizr(?:rc)?\.[cm]?js$|^modernizr(?:[-\.]custom|-\d\.\d+)(?:\.\d+)?\.[cm]?js$/i, 2], ["moleculer-icon", ["medium-blue", "medium-blue"], /^moleculer\.config\.(?:[cm]?js|json|ts)$/i, 2], ["moment-icon", ["medium-cyan", "medium-cyan"], /^moment(?:-with-locales)?(?:\.min)?\.[cm]?js$/i, 2], ["moment-tz-icon", ["dark-blue", "dark-blue"], /^moment-timezone(?:-with-data)?(?:-\d{4}-\d{4})?(?:\.min)?\.[cm]?js$/i, 2], ["mootools-icon", ["medium-purple", "medium-purple"], /^mootools[^.]*\d+\.\d+(?:\.\d+)?[^.]*\.[cm]?js$/i, 2], ["nanoc-icon", ["medium-red", "medium-red"], /^\.?nanoc\.ya?ml$/i, 2], ["neko-icon", ["dark-orange", "dark-orange"], /^run\.n$/, 2], ["nestjs-icon", ["medium-red", "medium-red"], /^nestconfig\.json$/i, 2], ["netlify-icon", ["dark-blue", "dark-blue"], /^netlify\.toml$/i, 2], ["newrelic-icon", ["medium-cyan", "medium-cyan"], /^newrelic\.yml/i, 2], ["nextflow-icon", ["dark-green", "dark-green"], /^nextflow\.config$/i, 2], ["nextjs-icon", ["dark-grey", "dark-grey"], /^next\.config\.[cm]?js$/i, 2], ["nginx-icon", ["dark-green", "dark-green"], /^nginx(?:\.[-\w]+)*\.conf$/i, 2], ["nginx-icon", ["medium-green", "medium-green"], /\.nginx(?:conf)?$/i, 2, !1, , /\.nginx$/i, /^Nginx$|^nginx[\W_ \t]?c[0o]nfigurati[0o]n[\W_ \t]?file$/i], ["nightwatch-icon", ["dark-maroon", "dark-maroon"], /^nightwatch\.conf(?:ig)?\.[cm]?js$/i, 2], ["shuriken-icon", ["dark-cyan", "dark-cyan"], /\.ninja\.d$/i, 2], ["nodemon-icon", ["medium-green", "medium-green"], /^nodemon\.json$|\.nodemonignore$/i, 2], ["normalize-icon", ["medium-red", "medium-red"], /^normalize(?:\.min)?\.(?:css|less|scss|styl)$/i, 2], ["npm-icon", ["medium-red", "medium-red"], /^(?:package\.json|\.npmignore|\.?npmrc|npm-debug\.log|npm-shrinkwrap\.json|package-lock\.json)$/i, 2, !1, , /\.ini\.npmrc\b/, /^Npm$/i], ["nsri-icon", ["medium-green", "medium-green"], /^\.nsrirc(?:\.(?:json|(?:config\.)?[cm]?js|ya?ml))?$/i, 2], ["nsri-icon", ["dark-green", "dark-green"], /^\.nsriignore(?:\.(?:json|(?:config\.)?[cm]?js|ya?ml))?$/i, 2], ["nsri-alt-icon", ["medium-green", "medium-green"], /\.integrity\.json$/i, 2], ["nuxt-icon", ["medium-cyan", "medium-cyan"], /^nuxt\.config\.[jt]s$/i, 2], ["nx-icon", ["dark-blue", "dark-blue"], /^nx\.json$/i, 2], ["package-icon", ["light-orange", "light-orange"], /Cargo\.toml$/i, 2], ["package-icon", ["dark-orange", "dark-orange"], /Cargo\.lock$/i, 2], ["package-icon", ["medium-green", "medium-green"], /\.packages$/i, 2], ["package-icon", ["medium-blue", "medium-blue"], /^pubspec\.lock$/i, 2], ["package-icon", ["medium-yellow", "medium-yellow"], /^pubspec\.ya?ml$/i, 2], ["package-icon", ["medium-blue", "medium-blue"], /^paket\.(?:dependencies|lock|references|local|template)$/i, 2, !1, , /\.paket$/i, /^Paket$/i], ["patreon-icon", ["medium-orange", "medium-orange"], /^PATR(?:ONS|EON)\.md$/, 2], ["phpunit-icon", ["medium-purple", "medium-purple"], /^phpunit\.xml$/i, 2], ["phraseapp-icon", ["medium-blue", "medium-blue"], /^\.phraseapp\.ya?ml$/i, 2], ["platformio-icon", ["medium-orange", "medium-orange"], /^platformio\.ini$/i, 2], ["pm2-icon", ["medium-blue", "medium-blue"], /^ecosystem\.conf(?:ig)?\./i, 2], ["pnpm-icon", ["medium-orange", "medium-orange"], /^pnpm-(?:lock|workspace)\.ya?ml$/i, 2], ["pnpm-icon", ["medium-yellow", "dark-yellow"], /^pnpmfile\.js$/i, 2], ["polymer-icon", ["medium-purple", "medium-purple"], /^polymer\.json$/i, 2], ["postcss-icon", ["medium-orange", "dark-orange"], /\.postcssrc(?:\.(?:[cm]?js|json|ya?ml))?$/i, 2], ["postcss-icon", ["medium-yellow", "dark-yellow"], /\bpostcss\.config\.[cm]?js$/i, 2], ["precommit-icon", ["medium-yellow", "dark-yellow"], /^\.pre-commit\b.*\.ya?ml$/i, 2], ["prettier-icon", ["medium-cyan", "dark-cyan"], /\.prettierrc(?:\.(?:[cm]?js|json5?|ya?ml))?$|^prettier\.config\.[cm]?js$/i, 2], ["prettier-icon", ["dark-yellow", "dark-yellow"], /\.prettierignore$/i, 2], ["proselint-icon", ["dark-cyan", "dark-cyan"], /\.proselintrc$/i, 2], ["protractor-icon", ["medium-red", "medium-red"], /^protractor\.(?:conf|config)\./i, 2], ["pug-icon", ["medium-orange", "medium-orange"], /^\.pug-lintrc/i, 2], ["pullapprove-icon", ["dark-blue", "dark-blue"], /^\.?pullapprove\.ya?ml$/i, 2], ["pypi-icon", ["dark-blue", "dark-blue"], /^(?:(?:dev|docs?|tests?)[-_]requirements|requirements(?:[-_](?:dev|docs?|tests?))?)\.(?:in|txt)$/i, 2], ["pytest-icon", ["medium-blue", "medium-blue"], /^pytest\.ini$/, 2], ["pyup-icon", ["dark-cyan", "dark-cyan"], /^\.pyup(?:\.ya?ml)?$/i, 2], ["quasar-icon", ["medium-blue", "medium-blue"], /^quasar\.conf\.[cm]?js$/i, 2], ["raphael-icon", ["medium-orange", "medium-orange"], /^raphael(?:\.min|\.no-deps)*\.[cm]?js$/i, 2], ["razzle-icon", ["dark-blue", "dark-blue"], /^razzle\.config\./i, 2], ["react-icon", ["dark-blue", "dark-blue"], /^react(?:-[^.]*)?\.[cm]?js$/i, 2], ["react-icon", ["medium-blue", "dark-blue"], /\.react\.[cm]?js$/i, 2], ["readthedocs-icon", ["dark-grey", "dark-grey"], /^\.?readthedocs\.ya?ml$/i, 2], ["book-icon", ["medium-blue", "medium-blue"], /^README(?:\b|_)|^(?:(?:un)?licen[sc]es?(?:\.mysql)?|(?:read|readme|click|delete|keep|test)\.me)(?:\.(?:md|txt))?$|\.(?:readme|1st|licen[sc]es?)$/i, 2], ["book-icon", ["dark-blue", "dark-blue"], /^(?:notice|bugs|changes|change[-_]?log(?:[-._]?\d+)?|contribute|contributing|contributors|copy(?:ing|right)(?:\.regex)?|faq|fixes|hacking|history|install|maintainers|manifest|more\.stuff|notes|problems|projects|revision|terms|thanks|warnings)(?:_\w+)?$/i, 2], ["book-icon", ["medium-blue", "medium-blue"], /^zork\d\.doc$/, 2], ["remark-icon", ["medium-yellow", "medium-yellow"], /^\.rehyperc(?:\.(?:[cm]?js|json|ya?ml))?$/i, 2], ["remark-icon", ["medium-red", "medium-red"], /^\.remarkrc(?:\.(?:[cm]?js|json|ya?ml))?$/i, 2], ["remark-icon", ["medium-green", "medium-green"], /^\.retextrc(?:\.(?:[cm]?js|json|ya?ml))?$/i, 2], ["remark-icon", ["dark-yellow", "dark-yellow"], /\.rehypeignore$/i, 2], ["remark-icon", ["dark-red", "dark-red"], /\.remarkignore$/i, 2], ["remark-icon", ["dark-green", "dark-green"], /\.retextignore$/i, 2], ["renovate-icon", ["medium-cyan", "medium-cyan"], /(?!^renovate$)(?:\.|^)renovate(?:rc)?(?:\.json)?$/i, 2], ["requirejs-icon", ["medium-blue", "medium-blue"], /^require(?:[-.]min|dev)?\.[cm]?js$/i, 2], ["restql-icon", ["medium-cyan", "medium-cyan"], /^restql\.ya?ml$/i, 2], ["clojure-icon", ["medium-maroon", "dark-maroon"], /^riemann\.config$/i, 2], ["robots-icon", ["dark-cyan", "dark-cyan"], /^robots\.txt$/i, 2], ["manpage-icon", ["dark-green", "dark-green"], /^tmac\.|^(?:cstr\.54|indep_tr|mmn|mmt|toc\.entries|chem\.macros|(?:eth|lsd|morphine)\.p)$/i, 2], ["rollup-icon", ["medium-red", "medium-red"], /^rollup\.config\./i, 2], ["rubocop-icon", ["dark-red", "dark-red"], /^\.rubocop(?:_todo)?\.ya?ml$/i, 2], ["sass-icon", ["medium-yellow", "dark-yellow"], /^\.sassrc(?:\.[cm]?js)?$/i, 2], ["scrutinizer-icon", ["dark-blue", "dark-blue"], /\.scrutinizer\.yml$/i, 2], ["semrelease-icon", ["medium-grey", "medium-grey"], /^\.releaserc(?:\.(?:ya?ml|[cm]?js|json))?$/i, 2], ["sencha-icon", ["light-green", "light-green"], /^sencha(?:\.min)?\.[cm]?js$/i, 2], ["sequelize-icon", ["medium-blue", "dark-blue"], /\.sequelizerc(?:\.[cm]?js|\.json)?$/i, 2], ["serverless-icon", ["medium-red", "medium-red"], /(?:^|\.)serverless\.ya?ml$/i, 2], ["shadowcljs-icon", ["medium-cyan", "dark-cyan"], /^shadow-cljs\.edn$/i, 2], ["shipit-icon", ["medium-orange", "medium-orange"], /^shipitfile(?:\b.+)?\.[cm]?js$/i, 2], ["shippable-icon", ["medium-cyan", "medium-cyan"], /^shippable\.ya?ml$/i, 2], ["snapsvg-icon", ["medium-cyan", "medium-cyan"], /^snap\.svg(?:[-.]min)?\.[cm]?js$/i, 2], ["snapcraft-icon", ["dark-cyan", "dark-cyan"], /^snapcraft\.ya?ml$/i, 2], ["snowpack-icon", ["dark-blue", "dark-blue"], /^snowpack\.config\.(?:[cm]?js|ts|json)$/i, 2], ["solidarity-icon", ["dark-red", "dark-red"], /^\.solidarity(?:\.json)?$/i, 2], ["stdlibjs-icon", ["medium-orange", "medium-orange"], /^stdlib(?:-.+)?\.[cm]?js$/i, 2], ["stdlibjs-icon", ["medium-blue", "medium-blue"], /^stdlib(?:-.+)?\.[cm]?js\.gz$/i, 2], ["stitches-icon", ["medium-purple", "medium-purple"], /^\.?stitches\.config\.(?:[cm]?js|ts)$/i, 2], ["storybook-icon", ["medium-orange", "medium-orange"], /\.(?:story|stories)\.(?:[cm]?js|jsx)$/i, 2], ["storybook-icon", ["medium-blue", "medium-blue"], /\.(?:story|stories)\.tsx?$/i, 2], ["stylable-icon", ["medium-green", "medium-green"], /\.st\.css$/i, 2], ["nailpolish-icon", ["medium-yellow", "medium-yellow"], /\.sc\.js$/i, 2, !1, , /^styled$/, /^Styled[\W_ \t]?C[0o]mp[0o]nent$/i], ["nailpolish-icon", ["medium-blue", "dark-blue"], /\.sc\.jsx$|\.sc\.mjs$/i, 2], ["nailpolish-icon", ["medium-green", "dark-green"], /\.sc\.cjs$/i, 2], ["nailpolish-icon", ["medium-blue", "medium-blue"], /\.sc\.ts$/i, 2], ["nailpolish-icon", ["light-blue", "light-blue"], /\.sc\.tsx$/i, 2], ["stylelint-icon", ["medium-purple", "medium-purple"], /^\.stylelintrc(?:\.|$)/i, 2], ["stylelint-icon", ["medium-yellow", "dark-yellow"], /^stylelint\.config\.[cm]?js$/i, 2], ["stylelint-icon", ["dark-blue", "dark-blue"], /\.stylelint(?:ignore|cache)$/i, 2], ["stylishhaskell-icon", ["medium-purple", "medium-purple"], /^\.stylish-haskell\.ya?ml$/i, 2], ["swagger-icon", ["medium-green", "medium-green"], /^(?:openapi|swagger)\.(?:json|yaml|yml)$/i, 2], ["toc-icon", ["medium-cyan", "dark-cyan"], /\.toc$/i, 2, !1, , /\.toc$/i, /^Table[\W_ \t]?[0o]f[\W_ \t]?C[0o]ntents$/i], ["tag-icon", ["medium-green", "medium-green"], /^\.atom-socket-.+\.\d$/, 2], ["tailwind-icon", ["medium-cyan", "medium-cyan"], /^\.?tailwind(?:\.config)?\.(?:[cm]?js|ts|coffee)$/i, 2], ["terraform-icon", ["medium-yellow", "medium-yellow"], /\.tf\.json$/i, 2], ["terser-icon", ["medium-orange", "medium-orange"], /^\.(?:terser|uglify)rc(?:\.\w+)?$/i, 2], ["test-ruby-icon", ["medium-red", "dark-red"], /(?:^test[._-].*|[._-](?:spec|test)s?)\.(?:rb|ruby)$/i, 2], ["test-ruby-icon", ["medium-red", "dark-red"], /([\\\x2F])(t|tests?|specs?)\1+(?:(?!\1).)*\.(rb|ruby)$/, 2, !0], ["testcafe-icon", ["medium-blue", "medium-blue"], /^\.testcaferc\.json$/i, 2], ["tex-icon", ["medium-red", "dark-red"], /^hyphen(?:ex)?\.(?:cs|den|det|fr|sv|us)$/, 2], ["calc-icon", ["medium-maroon", "medium-maroon"], /\.8x[pk](?:\.txt)?$/i, 2, !1, , , , /^\*\*TI[789]\d\*\*/], ["tmux-icon", ["medium-green", "medium-green"], /(?:\.|_|^)tmux\.conf$/i, 2, !1, , /\.tmux$/i, /^tmux$/i], ["travis-icon", ["medium-red", "medium-red"], /^\.travis/i, 2], ["truffle-icon", ["medium-maroon", "dark-maroon"], /^\.?truffle\.[cm]?js$/i, 2], ["typedoc-icon", ["dark-purple", "dark-purple"], /^typedoc\.json$/i, 2], ["typings-icon", ["medium-maroon", "medium-maroon"], /^typings\.json$/i, 2], ["uikit-icon", ["medium-blue", "medium-blue"], /^uikit(?:\.min)?\.[cm]?js$/i, 2], ["unibeautify-icon", ["dark-cyan", "dark-cyan"], /\.unibeautifyrc$/i, 2], ["unibeautify-icon", ["medium-orange", "dark-orange"], /^unibeautify\.config\.[cm]?js$|\.unibeautifyrc\.(?:[cm]?js|json)$/i, 2], ["unibeautify-icon", ["medium-yellow", "dark-yellow"], /\.unibeautifyrc\.ya?ml$/i, 2], ["unicode-icon", ["medium-red", "medium-red"], /^(?:ArabicShaping|Bidi(?:Brackets|CharacterTest|Mirroring|Test)|Blocks|CJKRadicals|CaseFolding|CompositionExclusions|Derived(?:Age|Name|Numeric(?:Type|Values)|BidiClass|BinaryProperties|CombiningClass|CoreProperties|DecompositionType|EastAsianWidth|GeneralCategory|Joining(?:Group|Type)|LineBreak|NormalizationProps)|EastAsianWidth|EmojiSources|EquivalentUnifiedIdeograph|(?:Grapheme|Line|Sentence|Word)Break(?:Property|Test)|HangulSyllableType|Index|Indic(?:Positional|Syllabic)Category|Jamo|LineBreak|NameAliases|NamedSequences(?:Prov)?|NamesList|Normalization(?:Corrections|Test)|NushuSources|PropList|Property(?:Value)?Aliases|Script(?:Extension)?s|SpecialCasing|StandardizedVariants|TangutSources|Unihan(?:_\w+)?|U(?:nicode|Source)Data|VerticalOrientation)\.txt$/, 2, !1, , /\.unidata$/i, /^Unic[0o]de$/i], ["unicode-icon", ["medium-red", "medium-red"], /^NamesList\.(?:lst|txt)$/, 2, !1, , /\.ucd\.nameslist$/i, /^Unic[0o]de$/i], ["unicode-icon", ["medium-red", "medium-red"], /([\\\/])(UNIDATA|UCD)(?:\1(?:auxiliary|emoji|extracted|unihan))?\1(?!ReadMe)[^\\\/]+\.txt$/i, 2, !0], ["v8-icon", ["dark-blue", "dark-blue"], /^\.c8rc(?:\.json)?$/i, 2, !1, /^c8$/], ["zeit-icon", ["medium-grey", "dark-grey"], /^(?:vercel|now)\.json$/i, 2], ["vs-icon", ["dark-purple", "dark-purple"], /\.vcx?proj(?:\.[-\w]+)*$/i, 2], ["vs-icon", ["dark-green", "dark-green"], /\.vssettings(?:\.json)?$/i, 2], ["vs-icon", ["medium-blue", "medium-blue"], /\.vscodeignore(?:\.json)?$/i, 2], ["vite-icon", ["medium-yellow", "dark-yellow"], /^vite\.config\.[jt]s$/i, 2], ["vsts-icon", ["medium-blue", "medium-blue"], /^\.vsts-ci\.ya?ml$/i, 2], ["vue-icon", ["light-green", "light-green"], /^vue\.config\.[cm]?js$/i, 2], ["w3c-icon", ["medium-blue", "dark-blue"], /^w3c\.json$/i, 2], ["wallaby-icon", ["medium-green", "medium-green"], /^\.wallaby\.[cm]?js$/i, 2], ["watchman-icon", ["medium-blue", "medium-blue"], /\.watchmanconfig$|^watchman\.json$/i, 2], ["webpack-icon", ["medium-blue", "medium-blue"], /(?:^|\.)webpack(?:file)?.*\.(?:[jt]sx?|[cm]js|json|(?:lit)?coffee)$/i, 2], ["wercker-icon", ["medium-purple", "medium-purple"], /^wercker\.ya?ml$/i, 2], ["windi-icon", ["medium-blue", "medium-blue"], /^windi\.config\.[tj]s$/i, 2], ["workbox-icon", ["medium-orange", "medium-orange"], /^workbox-config\.[cm]?js$/i, 2], ["xmake-icon", ["medium-green", "medium-green"], /^xmake\.lua$/i, 2], ["yaml-icon", ["medium-orange", "medium-orange"], /\.ya?ml\.mysql$/i, 2], ["yaml-icon", ["dark-green", "dark-green"], /\.ya?ml\.sed$/i, 2], ["yamllint-icon", ["medium-green", "medium-green"], /^\.yamllint(?:\.ya?ml)?$/i, 2], ["yandex-icon", ["medium-red", "medium-red"], /^\.yaspellerrc(?:$|\.)|^\.yaspeller\.json$/i, 2], ["yarn-icon", ["medium-blue", "medium-blue"], /^yarn\.lock$|\.yarn-metadata(?:\.json)?$/i, 2], ["yeoman-icon", ["medium-cyan", "medium-cyan"], /\.yo-rc\.json$/i, 2], ["yui-icon", ["dark-blue", "dark-blue"], /^(?:yahoo-|yui)[^.]*\.[cm]?js$/i, 2], ["crafttweaker-icon", ["medium-orange", "dark-orange"], /^\.zsrc\.json$/i, 2], ["acre-icon", ["medium-blue", "medium-blue"], /^acre\.config$/i, 1.5], ["animestudio-icon", ["medium-orange", "medium-orange"], /\.animeproj$/i, 1.5], ["binder-icon", ["medium-orange", "medium-orange"], /^binder[-_]requirements\.(?:in|txt)$/i, 1.5], ["config-icon", ["medium-yellow", "medium-yellow"], /^pf\.os$/i, 1.5], ["config-icon", ["medium-green", "medium-green"], /^settings\.bsp$/i, 1.5], ["config-icon", ["dark-green", "dark-green"], /\/(?:dev[-\w]+|troff)\/(?:[^\/]+\/)*(?:DESC|Foundry|download|symbolmap)(?:\.(?:in|proto|8400))?$/i, 1.5, !0, , /^source\.ditroff\.desc$/], ["config-icon", ["dark-blue", "dark-blue"], /(?:^|[\/\\])\.ssh[\/\\]config$/, 1.5, !0], ["config-coffee-icon", ["medium-maroon", "medium-maroon"], /^coffeelint\.json$/i, 1.5], ["config-hs-icon", ["medium-purple", "dark-purple"], /^haskellconfig\.json$/i, 1.5], ["config-js-icon", ["medium-yellow", "dark-yellow"], /\.js(?:beautify|cs|hint)rc$|^(?:jsconfig(?:\..+)?|\.?eshost(?:-config)?)\.json$/i, 1.5], ["config-perl-icon", ["medium-blue", "medium-blue"], /^perl[56]?-?config\.json$/i, 1.5], ["config-python-icon", ["dark-blue", "dark-blue"], /^python-?config\.json$|^pyproject\.toml$|^poetry\.lock$|^\.coveragerc$|^MANIFEST\.in$|\.python-version$/i, 1.5], ["config-react-icon", ["medium-blue", "dark-blue"], /^jsxconfig\.json$/i, 1.5], ["config-ruby-icon", ["medium-red", "dark-red"], /^rubyconfig\.json$|\.(?:autotest|cross_rubies|gemtest|hoerc|kick|simplecov|yardopts)$/i, 1.5], ["config-rust-icon", ["medium-maroon", "medium-maroon"], /^rustconfig\.json$/i, 1.5], ["config-ts-icon", ["medium-blue", "dark-blue"], /^tsconfig(?:\..+)?\.json$/i, 1.5], ["config-ts-icon", ["medium-purple", "dark-purple"], /^tslint\.json$/i, 1.5], ["database-icon", ["medium-green", "medium-green"], /(?:^|\/)n?term\/O?tab\.(?:X|lpr)$/i, 1.5, !0], ["database-icon", ["dark-red", "dark-red"], /^\.icondb\.js$/, 1.5], ["database-icon", ["medium-red", "medium-red"], /^index\.(?:bt|db|dir|pag)$/i, 1.5], ["database-icon", ["dark-blue", "dark-blue"], /^(?:language-subtag-registry(?:\.txt)?|nametable)$/, 1.5, !1, , /\.record-jar$/i], ["eclipse-lang-icon", ["medium-blue", "medium-blue"], /\.ecl(?:\.txt)?$/i, 1.5, !1, , /\.eclipse$/i, /^Ecli[\W_ \t]?Pse$/i], ["emacs-icon", ["medium-purple", "medium-purple"], /(?:^|\.)(?:el|_?emacs|emacs\.desktop|abbrev[-_]defs)$/i, 1.5, !1, /^(?:x?emacs)$/, /\.emacs\.lisp$/i, /^Emacs[\W_ \t]?Lisp$|^elisp$/i], ["emacs-icon", ["dark-purple", "dark-purple"], /(?:^|\.)(?:elc|eld)$/i, 1.5, !1, , , , /^;ELC\x17\0{3}/], ["emacs-icon", ["medium-red", "medium-red"], /\.gnus$/i, 1.5], ["emacs-icon", ["dark-green", "dark-green"], /\.viper$/i, 1.5], ["emacs-icon", ["dark-blue", "dark-blue"], /^Cask$/, 1.5], ["emacs-icon", ["medium-blue", "medium-blue"], /^Project\.ede$/i, 1.5], ["flask-icon", ["dark-blue", "dark-blue"], /^flask(?:[-_.].*)\.py$/i, 1.5], ["hygen-icon", ["medium-pink", "medium-pink"], /\.ejs\.t$/i, 1.5], ["lime-icon", ["medium-green", "medium-green"], /\.hxp$/i, 1.5], ["moho-icon", ["medium-orange", "medium-orange"], /\.mohoproj$/i, 1.5], ["photorec-icon", ["medium-green", "dark-green"], /^\.photorec\.cfg$/i, 1.5], ["postscript-icon", ["dark-red", "dark-red"], /^Fontmap(?:\.GS)?$/i, 1.5], ["pros-icon", ["medium-orange", "medium-orange"], /^project\.pros$/i, 1.5], ["qt-icon", ["medium-yellow", "dark-yellow"], /^(?:toolchain_)?installscript\.qs$/i, 1.5], ["rsync-icon", ["dark-purple", "dark-purple"], /^rsyncd\.conf$/i, 1.5, !1, , /(?:\.|^)rsyncd(?:-conf(?:ig)?)?(?:\.|$)/i, /^rsync$/i], ["mixin-icon", ["medium-orange", "medium-orange"], /\.mixins?\.json$/i, 1.5], ["test-coffee-icon", ["medium-maroon", "dark-maroon"], /(?:[._-](?:spec|test)s?|^test[-_].*)\.(?:(?:lit)?coffee|iced|cjsx)$/i, 1.5], ["test-generic-icon", ["medium-green", "medium-green"], /([\\\/])t\1t?\d+(?:(?!\1).)+\.sh$|[._-](spec|test)s?\.sh$/i, 1.5, !0], ["test-go-icon", ["medium-cyan", "dark-cyan"], /(?:^test[._-].*|[._-](?:spec|test)s?)\.go$/i, 1.5], ["test-hs-icon", ["medium-purple", "dark-purple"], /(?:^test[._-].*|[._-](?:spec|test)s?)\.(?:hsc?|c2hs|lhs)$/i, 1.5], ["test-js-icon", ["medium-yellow", "dark-yellow"], /(?:[._-](?:spec|test)s?|^test[._-].*)\.(?:[_s]?js|js[bms]|es\d*)$/i, 1.5], ["test-js-icon", ["medium-blue", "dark-blue"], /(?:[._-](?:spec|test)s?|^test[._-].*)\.mjs$/i, 1.5], ["test-js-icon", ["medium-green", "dark-green"], /(?:[._-](?:spec|test)s?|^test[._-].*)\.cjs$/i, 1.5], ["test-js-icon", ["medium-yellow", "dark-yellow"], /([\\\/])(?:(spec|test)s?|t)\1(?:\d+[-.])+(?!-)[^.\\\/]+\.js$/i, 1.5, !0], ["test-js-icon", ["medium-blue", "dark-blue"], /([\\\/])(?:(spec|test)s?|t)\1(?:\d+[-.])+(?!-)[^.\\\/]+\.mjs$/i, 1.5, !0], ["test-js-icon", ["medium-green", "dark-green"], /([\\\/])(?:(spec|test)s?|t)\1(?:\d+[-.])+(?!-)[^.\\\/]+\.cjs$/i, 1.5, !0], ["test-perl-icon", ["medium-blue", "dark-blue"], /([\\\x2F])t\1(?:(?!\1).)+\.t$|([\\\x2F])(test|spec)s?(\1((?!\1).)+)*\1((?!\1).)+[._-](spec|test)s?\.p(er)?l$/i, 1.5, !0], ["test-python-icon", ["dark-blue", "dark-blue"], /(?:^test[._-].*|[._-](?:spec|test)s?)\.py(?:3|thon)?/i, 1.5], ["test-python-icon", ["dark-blue", "dark-blue"], /([\\\x2F])(test|spec)s?(\1((?!\1).)+)*\1(((?!\1).)+[._-](?:spec|test)s?|(?:spec|test)s?[._-].+)\.py(3|thon)?$/i, 1.5, !0], ["test-react-icon", ["medium-blue", "dark-blue"], /(?:^test[._-].*|[._-](?:spec|test)s?)\.(?:jsx|react\.[cm]?js)$/, 1.5], ["test-react-icon", ["medium-blue", "dark-blue"], /([\\\/])(spec|test)s?\1(?:\d+[-.])+(?!-)[^.\\\/]+\.(jsx|react\.[cm]?js)$/i, 1.5, !0], ["test-rust-icon", ["medium-maroon", "dark-maroon"], /(?:^test[-_].*|[._-](?:spec|test)s?)\.rs$/i, 1.5], ["test-ts-icon", ["medium-blue", "dark-blue"], /(?:^test[._-].*|[._-](?:spec|test)s?)\.ts$/i, 1.5], ["test-ts-icon", ["light-blue", "medium-blue"], /(?:^test[._-].*|[._-](?:spec|test)s?)\.tsx$/i, 1.5], ["test-ts-icon", ["medium-blue", "dark-blue"], /([\\\/])(spec|test)s?\1(?:\d+[-.])+(?!-)[^.\\\/]+\.ts$/i, 1.5, !0], ["test-ts-icon", ["light-blue", "medium-blue"], /([\\\/])(spec|test)s?\1(?:\d+[-.])+(?!-)[^.\\\/]+\.tsx$/i, 1.5, !0], ["scales-icon", ["medium-green", "dark-green"], /^units\.(?:lib|dat)$|^unittab$/i, 1.5], ["electron-icon", ["dark-cyan", "dark-cyan"], /(?:^|\.)forge\.config\.js$/i, 1.4], ["asm-zilog-icon", ["medium-blue", "medium-blue"], /\.PLX(?:COPY)?$/, 1.25, !1, , /\.zvm(?:asm|plx|plxedl)(?:\.|$)/, /^Assembly,[\W_ \t]?Zil[0o]g$|^z\/?(?:OS|VM)\s*(?:Assembl(?:y|er)|PL\/?X(?:\s*EDL)?)$/i], ["bazel-icon", ["medium-cyan", "medium-cyan"], /^\.gazelcfg\.json$/i, 1.25], ["_1c-icon", ["medium-red", "medium-red"], /\.bsl$/i, , !1, , /\.bsl$/i, /^1[\W_ \t]?C$|^1[\W_ \t]?C[\W_ \t]?Enterprise$/i], ["_1c-icon", ["dark-orange", "dark-orange"], /\.sdbl$/i, , !1, , /\.sdbl$/i, /^1[\W_ \t]?C$|^1[\W_ \t]?C[\W_ \t]?Query$/i], ["_1c-icon", ["dark-red", "dark-red"], /\.os$/i], ["_1c-alt-icon", ["medium-red", "dark-red"], /\.mdo$/i], ["_4d-icon", ["dark-blue", "dark-blue"], /\.4dm$/i, , !1, , /\.4dm$/i, /^4[\W_ \t]?D$/i], ["a-plus-icon", ["medium-blue", "medium-blue"], /\.a?\+$/i, , !1, /^a\+$/], ["abap-icon", ["medium-orange", "medium-orange"], /\.abap$/i, , !1, , /\.abp$/i, /^Abap$/i], ["abif-icon", ["medium-blue", "medium-blue"], /\.abif$/i, , !1, , , , /^ABIF/], ["abif-icon", ["medium-green", "medium-green"], /\.ab1$/i], ["abif-icon", ["medium-red", "medium-red"], /\.fsa$/i], ["as-icon", ["medium-blue", "medium-blue"], /\.swf$/i], ["as-icon", ["medium-red", "medium-red"], /\.as$/i, , !1, , /\.(?:flex-config|actionscript(?:\.\d+)?)$/i, /^Acti[0o]n[\W_ \t]?Script$|^(?:ActionScript\s*3|as3)$/i], ["as-icon", ["medium-yellow", "dark-yellow"], /\.jsfl$/i], ["as-icon", ["dark-red", "dark-red"], /\.swc$/i], ["ada-icon", ["medium-blue", "medium-blue"], /\.(?:ada|adb|ads)$/i, , !1, , /\.ada$/i, /^Ada$|^(?:ada95|ada2005)$/i], ["ae-icon", ["dark-pink", "dark-pink"], /\.aep$/i], ["ae-icon", ["dark-purple", "dark-purple"], /\.aet$/i], ["animate-icon", ["dark-orange", "medium-red"], /\.fla$/i], ["ai-icon", ["medium-orange", "medium-orange"], /\.ai$/i], ["ai-icon", ["dark-orange", "dark-orange"], /\.ait$/i], ["ai-icon", ["medium-yellow", "medium-yellow"], /\.aia$/i], ["indesign-icon", ["dark-pink", "dark-pink"], /\.indd$|\.idml$/i], ["indesign-icon", ["medium-purple", "medium-purple"], /\.indl$/i], ["indesign-icon", ["dark-purple", "dark-purple"], /\.indt$/i], ["indesign-icon", ["dark-blue", "dark-blue"], /\.indb$/i], ["psd-icon", ["medium-blue", "medium-blue"], /\.psd$/i, , !1, , , , /^8BPS/], ["psd-icon", ["dark-purple", "dark-purple"], /\.psb$/i], ["psd-icon", ["dark-blue", "dark-blue"], /\.atn$/i], ["premiere-icon", ["dark-purple", "dark-purple"], /\.prproj$/i], ["premiere-icon", ["medium-maroon", "medium-maroon"], /\.prel$/i], ["premiere-icon", ["medium-purple", "medium-purple"], /\.psq$/i], ["totvs-icon", ["medium-maroon", "medium-maroon"], /\.prw$/i, , !1, /^advpl$/, /\.advpl$/i, /^advpl$/i], ["totvs-icon", ["medium-green", "medium-green"], /\.ahu$/i], ["totvs-icon", ["dark-green", "dark-green"], /\.aph$/i], ["totvs-icon", ["dark-blue", "dark-blue"], /\.tlpp$/i], ["affectscript-icon", ["medium-pink", "medium-pink"], /\.affect$/i, , !1, , /\.affect$/i, /^Affect[\W_ \t]?Script$/i], ["affinity-icon", ["medium-blue", "medium-blue"], /\.afdesign$/i, , !1, , , , /^\0\xFFKA.{4}nsrP#Inf.{48}Prot.{4}#Filx\x01/], ["affinity-icon", ["medium-pink", "medium-pink"], /\.afphoto$/i], ["affinity-icon", ["medium-red", "medium-red"], /\.afpub$/i], ["agda-icon", ["dark-cyan", "dark-cyan"], /\.agda$/i, , !1, /^agda$/, /\.agda$/i, /^agda$/i], ["agda-icon", ["medium-cyan", "medium-cyan"], /\.lagda$/i], ["alex-icon", ["medium-pink", "dark-pink"], /\.alexrc$/i], ["alex-icon", ["medium-red", "dark-red"], /\.alexignore$/i], ["alloy-icon", ["medium-red", "medium-red"], /\.als$/i, , !1, , /\.alloy$/i, /^All[0o]y$/i], ["alpine-icon", ["dark-blue", "dark-blue"], /(?:\.|^)APKBUILD$/], ["ampl-icon", ["dark-maroon", "dark-maroon"], /\.ampl$/i, , !1, , /\.ampl$/i, /^Ampl$/i], ["amusewiki-icon", ["dark-red", "dark-red"], /\.muse$/i, , !1, , /\.muse$/i, /^Amuse[\W_ \t]?Wiki$|^Muse$/i], ["analytica-icon", ["medium-orange", "medium-orange"], /\.ana$/i], ["android-icon", ["medium-green", "medium-green"], /\.smali$/i], ["android-icon", ["dark-maroon", "dark-maroon"], /\.rsh$/i], ["angelscript-icon", ["medium-blue", "dark-blue"], /\.(?:acs|angelscript)$/i, , !1, , /^source\.angelscript$/, /^Angel[\W_ \t]?Script$|^Angel[\W_ \t]?C[0o]de$/i], ["sun-icon", ["medium-yellow", "dark-yellow"], /\.ansiweatherrc$/i], ["antlr-icon", ["medium-red", "medium-red"], /\.g$/i, , !1, /^antlr$/, /\.antlr$/i, /^antlr$/i], ["antlr-icon", ["medium-orange", "medium-orange"], /\.g4$/i], ["anyscript-icon", ["dark-red", "dark-red"], /\.any$/i, , !1, , /(?:^|\.)any-?script(?:$|\.)/i, /^Any[\W_ \t]?Script$/i], ["api-icon", ["medium-blue", "medium-blue"], /\.apib$/i, , !1, , /\.apib$/i, /^Api[\W_ \t]?Blueprint$/i], ["apl-icon", ["dark-cyan", "dark-cyan"], /\.apl[acfino]?$/i, , !1, /^(?:gnu[-._]?)?aplx?$/i, /\.apl$/i, /^Apl$/i, /[⌶-⍺]/], ["apl-icon", ["medium-maroon", "medium-maroon"], /\.apl\.history$/i], ["apple-icon", ["medium-purple", "medium-purple"], /\.(?:applescript|scpt)$/i, , !1, /^osascript$/, /\.applescript$/i, /^Apple$|^[0o]sascript$/i], ["arc-icon", ["medium-blue", "medium-blue"], /\.arc$/i], ["arduino-icon", ["dark-cyan", "dark-cyan"], /\.ino$/i, , !1, , /\.arduino$/i, /^Arduin[0o]$/i], ["asciidoctor-icon", ["medium-blue", "medium-blue"], /\.(?:ad|adoc|asc|asciidoc)$/i, , !1, , /\.asciidoc$/i, /^Ascii[\W_ \t]?D[0o]c$/i], ["asp-icon", ["dark-blue", "dark-blue"], /\.asp$/i, , !1, , /\.asp$/i, /^[Aa][Ss][Pp].[nN][eE][tT]$|^aspx(?:-vb)?$/], ["asp-icon", ["medium-maroon", "medium-maroon"], /\.asax$/i], ["asp-icon", ["dark-green", "dark-green"], /\.ascx$/i], ["asp-icon", ["medium-green", "medium-green"], /\.ashx$/i], ["asp-icon", ["dark-cyan", "dark-cyan"], /\.asmx$/i], ["asp-icon", ["medium-purple", "medium-purple"], /\.aspx$/i], ["asp-icon", ["medium-cyan", "medium-cyan"], /\.axd$/i], ["eclipse-icon", ["medium-maroon", "medium-maroon"], /\.aj$/i], ["asm-icon", ["medium-green", "medium-green"], /\.a$|\.asm$/i, , !1, , /(?:^|\.)(?:asm|assembly|lc-?3)(?:\.|$)/i, /^Assembly$|^asm$/i], ["asm-icon", ["medium-cyan", "medium-cyan"], /\.i$/i], ["asm-icon", ["dark-green", "dark-green"], /\.s$/i], ["asm-icon", ["medium-orange", "medium-orange"], /\.a51$/i], ["asm-agc-icon", ["dark-blue", "dark-blue"], /\.agc$/i, , !1, , /\.source\.agc$/i, /^Assembly,[\W_ \t]?Agc$|^(?:Virtual\s*)?AGC$|^Apollo(?:[-_\s]*11)?\s*Guidance\s*Computer$/i], ["asm-arm-icon", ["medium-blue", "medium-blue"], /\.arm$/i, , !1, , /\.arm$/i, /^Assembly,[\W_ \t]?Arm$/i], ["asm-avr-icon", ["dark-purple", "dark-purple"], /\.avr$/i, , !1, , /(?:^|\.)avr(?:dis)?asm(?:\.|$)/i, /^Assembly,[\W_ \t]?Avr$/i], ["asm-hitachi-icon", ["medium-grey", "medium-grey"], /\.h8(?:SX?|\d{3})?$/i], ["asm-intel-icon", ["dark-blue", "dark-blue"], /\.(?:(?:x|i(?:a[-_]?))(?:32|86|64)(?:asm)?|i386|80386)$/i, , !1, , /(?:^|\.)(?:(?:x|i(?:a[-_]?))(?:32|86|64)(?:asm)?|i386|80386)(?:\.|$)/i, /^Assembly,[\W_ \t]?Intel$|^(?:x86|x64|x86[-_]?64|i(?:a[-_]?)?(?:32|64)|i386|80386|Intel|Itanium|[ftm]asm)$/i], ["asm-m68k-icon", ["dark-red", "dark-red"], /\.m68k$/i, , !1, , /(?:^|\.)(?:m68k|dasm)(?:\.|$)/i, /^Assembly,[\W_ \t]?M[0o]t[0o]r[0o]la$|^(?:asm68(?:k|\d{2,3})?|m68k)$/i], ["asm-m68k-icon", ["medium-blue", "medium-blue"], /\.lst$/i, , !1, , /(?:^|\.)(?:lst-)?cpu[-_\s]?12(?:\.|$)/i, /^Assembly,[\W_ \t]?M[0o]t[0o]r[0o]la$|^lst[\W_ \t]?cpu12$/i], ["asm-vax-icon", ["medium-maroon", "medium-maroon"], /\.v(?:ax|masm)$/i], ["asm-zilog-icon", ["medium-yellow", "medium-yellow"], /\.z80$/i, , !1, , /\.z80$/i, /^Assembly,[\W_ \t]?Zil[0o]g$/i], ["asymptote-icon", ["medium-red", "medium-red"], /\.asy$/i, , !1, /^asy$/, /\.asymptote$/i, /^Asympt[0o]te$/i], ["atom-icon", ["medium-green", "medium-green"], /^\.?apmrc$/i], ["ats-icon", ["medium-red", "medium-red"], /\.dats$/i, , !1, , /\.ats$/i, /^Ats$|^ats2$/i], ["ats-icon", ["medium-blue", "medium-blue"], /\.hats$/i], ["ats-icon", ["dark-yellow", "dark-yellow"], /\.sats$/i], ["audacity-icon", ["medium-yellow", "medium-yellow"], /\.aup$/i], ["audio-icon", ["medium-red", "medium-red"], /\.mp3$/i, , !1, , , , /^\xFF\xFB|^ID3/], ["audio-icon", ["dark-yellow", "dark-yellow"], /\.wav$/i, , !1, , , , /^RIFF(?!.+WEBP)/], ["audio-icon", ["dark-cyan", "dark-cyan"], /\.(?:aac|ac3|m4p)$/i, , !1, , , , /^\x0Bw/], ["audio-icon", ["medium-purple", "medium-purple"], /\.aif[fc]?$|\.mka$/i, , !1, , , , /^FORM.{4}AIFF/], ["audio-icon", ["medium-cyan", "medium-cyan"], /\.au$/i, , !1, , , , /^\.snd|^dns\./], ["audio-icon", ["dark-red", "dark-red"], /\.flac$/i, , !1, , , , /^fLaC/], ["audio-icon", ["medium-red", "medium-red"], /\.f4[ab]$/i, , !1, , , , /^FLV\x01\x04/], ["audio-icon", ["medium-orange", "medium-orange"], /\.it$/i, , !1, , , , /^IMPM/], ["audio-icon", ["medium-cyan", "medium-cyan"], /\.m4a$/i, , !1, , , , /^.{4}ftypM4A/], ["audio-icon", ["dark-green", "dark-green"], /\.(?:mpc|mp\+)$/i, , !1, , , , /^MPCK/], ["audio-icon", ["dark-orange", "dark-orange"], /\.oga$/i], ["audio-icon", ["dark-maroon", "dark-maroon"], /\.opus$/i, , !1, , , , /OpusHead/], ["audio-icon", ["dark-blue", "dark-blue"], /\.r[am]$/i, , !1, , , , /^\.RMF/], ["audio-icon", ["medium-green", "medium-green"], /\.s3m$/i, , !1, , , , /^.{44}SCRM/], ["audio-icon", ["medium-yellow", "medium-yellow"], /\.sndh$/i], ["audio-icon", ["medium-blue", "medium-blue"], /\.wma$/i], ["augeas-icon", ["dark-orange", "dark-orange"], /\.aug$/i], ["ahk-icon", ["dark-blue", "dark-blue"], /\.ahk$/i, , !1, /^ahk$/, /\.ahk$/i, /^Aut[0o][\W_ \t]?H[0o]tkey$|^ahk$/i], ["ahk-icon", ["dark-purple", "dark-purple"], /\.ahkl$/i], ["autoit-icon", ["medium-purple", "medium-purple"], /\.au3$/i, , !1, , /(?:^|\.)autoit(?:\.|$)/i, /^Aut[0o][\W_ \t]?It$|^(?:AutoIt3|AutoItScript|au3)$/i], ["avro-icon", ["medium-blue", "medium-blue"], /\.av(?:cs|sc|dl)$/i, , !1, , /(?:^|\.)avro(?:-idl)?(?:\.|$)/i, /^Avr[0o]$/i], ["awk-icon", ["medium-blue", "dark-blue"], /\.awk$/i, , !1, /^awk$/, /\.awk$/i, /^awk$/i], ["awk-icon", ["medium-red", "dark-red"], /\.gawk$/i, , !1, /^gawk$/, /\.gawk$/i, /^Awk$|^gawk$/i], ["awk-icon", ["medium-maroon", "dark-maroon"], /\.mawk$/i, , !1, /^mawk$/, /\.mawk$/i, /^Awk$|^mawk$/i], ["awk-icon", ["medium-green", "dark-green"], /\.nawk$/i, , !1, /^nawk$/, /\.nawk$/i, /^Awk$|^nawk$/i], ["awk-icon", ["medium-cyan", "dark-cyan"], /\.auk$/i], ["babel-icon", ["medium-yellow", "medium-yellow"], /\.(?:babelrc|babelrc\.[cm]?js|languagebabel|babel)$|babel(?:\.[\w\-]+)*\.conf(?:ig)?\./i], ["babel-icon", ["dark-yellow", "dark-yellow"], /\.babelignore$/i], ["backup-icon", [null, null], /\.(?:bak|old|orig)$/], ["ballerina-icon", ["medium-cyan", "medium-cyan"], /\.bal$/i, , !1, /^ballerina$/, /\.ballerina$/i, /^ballerina$/i], ["ballerina-icon", ["dark-green", "dark-green"], /\.balx$/i], ["bazaar-icon", ["medium-yellow", "dark-yellow"], /\.bzrignore$/i], ["calc-icon", ["medium-red", "medium-red"], /\.bc$|^bc\.library$/i, , !1, /^bc$/, /\.bc$/i, /^bc$/i], ["calc-icon", ["medium-blue", "medium-blue"], /\.dc$|^\.?dcrc$/i, , !1, /^dc$/, /\.dc$/i, /^Bc$|^dc$/i], ["bibtex-icon", ["medium-red", "dark-red"], /\.cbx$/i], ["bibtex-icon", ["medium-blue", "dark-blue"], /\.bbl$/i], ["bibtex-icon", ["medium-orange", "dark-orange"], /\.bbx$/i], ["bibtex-icon", ["medium-yellow", "dark-yellow"], /\.bib(?:tex)?$/i, , !1, /^bibtex$/, /\.bibtex$/i, /^bibtex$/i], ["bibtex-icon", ["medium-green", "dark-green"], /\.bst$/i], ["bikeshed-icon", ["medium-red", "dark-blue"], /\.bs$/i, , !1, , /\.source\.csswg$/i, /^Bikeshed$/i], ["biml-icon", ["medium-red", "medium-red"], /\.biml$/i, , !1, , /\.biml$/i, /^Biml$/i], ["binary-icon", ["medium-red", "medium-red"], /\.(?:[ls]?o|out)$|\.rpy[bc]$/i], ["binary-icon", ["dark-blue", "dark-blue"], /\.axf$|\.d-objdump$|^\.rnd$/i], ["binary-icon", ["medium-green", "medium-green"], /\.elf$/i], ["binary-icon", ["dark-red", "dark-red"], /\.la$/i], ["binary-icon", ["dark-green", "dark-green"], /\.ko$/i], ["binary-icon", ["dark-orange", "dark-orange"], /\.(?:(?:c(?:[+px]{2}?)?-?)?objdump|bsdiff|bin|dat|pak|pdb)$/i], ["binary-icon", ["medium-orange", "medium-orange"], /\.(?:gco?|gcode|[cdhk]nc)$/i, , !1, /^g-code$/, /\.g-code$/i, /^Binary$|^g[\W_ \t]?c[0o]de$/i], ["binary-icon", ["dark-purple", "dark-purple"], /\.py[cdo]$/i], ["binary-icon", ["medium-purple", "medium-purple"], /\.prx$/i], ["binary-icon", ["medium-grey", "medium-grey"], /\.puff$/i], ["bison-icon", ["medium-red", "medium-red"], /\.bison$/i, , !1, /^bison$/, /\.bison$/i, /^bis[0o]n$/i], ["bison-icon", ["dark-green", "dark-green"], /\.y$/i], ["bison-icon", ["medium-green", "medium-green"], /\.yacc$/i], ["bison-icon", ["medium-cyan", "medium-cyan"], /\.(?:yy|ypp)$/i], ["bithound-icon", ["medium-red", "medium-red"], /\.bithoundrc$/i], ["blender-icon", ["medium-orange", "medium-orange"], /\.blend$/i], ["blender-icon", ["dark-orange", "dark-orange"], /\.blend\d+$/i], ["blender-icon", ["dark-blue", "dark-blue"], /\.bphys$/i], ["blitzbasic-icon", ["medium-cyan", "medium-cyan"], /\.bb$/i, , !1, , /\.source\.blitzmax$/i, /^Blitz[\W_ \t]?Basic$|^(?:b3d|blitz(?:plus|3d)|bplus)$/i], ["blitzbasic-icon", ["medium-green", "medium-green"], /\.decls$/i], ["bluespec-icon", ["dark-blue", "dark-blue"], /\.bsv$/i, , !1, , /\.bsv$/i, /^Bluespec$/i], ["boo-icon", ["medium-green", "medium-green"], /\.boo$/i, , !1, , /\.boo(?:\.unity)?$/i, /^B[0o][0o]$/i], ["boot-icon", [null, null], /\.boot$/i], ["bosque-icon", ["medium-green", "medium-green"], /\.bsq$/i, , !1, , /\.source\.bsq$/i, /^B[0o]sque$/i], ["brain-icon", ["dark-pink", "dark-pink"], /\.bf?$/i, , !1, , /\.(?:bf|brainfuck)$/i, /^Brainfuck$|^(?:bf|Brainf\**ck)$/i], ["bro-icon", ["dark-cyan", "dark-cyan"], /\.bro$/i, , !1, , /\.bro$/i, /^Br[0o]$/i], ["brotli-icon", ["medium-orange", "medium-orange"], /\.br$/i], ["browserslist-icon", ["medium-orange", "medium-orange"], /^(?:browserslist|\.browserslistrc)$/i], ["buck-icon", ["medium-blue", "medium-blue"], /\.buckconfig$/i], ["buck-icon", ["dark-blue", "dark-blue"], /^BUCK$/], ["bundler-icon", ["medium-cyan", "dark-cyan"], /\.gemfile$/i], ["byond-icon", ["medium-blue", "medium-blue"], /\.dm$/i, , !1, , /\.dm$/i, /^By[0o]nd$|^(?:DM|Dream\s*Maker(?:\s*Script)?)$/i], ["c-icon", ["medium-blue", "medium-blue"], /\.c$/i, , !1, /^tcc$/, /\.c$/i, /^C$/i], ["c-icon", ["medium-purple", "medium-purple"], /\.h$|\.cats$/i], ["c-icon", ["medium-green", "medium-green"], /\.idc$|\.xpm$/i], ["c-icon", ["medium-maroon", "medium-maroon"], /\.w$/i], ["c-icon", ["dark-blue", "dark-blue"], /\.nc$/i], ["c-icon", ["medium-cyan", "medium-cyan"], /\.upc$/i], ["c-icon", ["medium-orange", "medium-orange"], /\.xbm$/i], ["c-icon", ["medium-blue", "medium-blue"], /(\\|\/)share(?:\1misc)?\1getopts?\d?$/, , !0], ["csharp-icon", ["medium-blue", "dark-blue"], /\.cs$/i, , !1, , /\.cs$/i, /^C#$|^c\s*sharp$/i], ["csscript-icon", ["dark-green", "dark-green"], /\.csx$/i, , !1, , /\.csx$/i, /^C#[\W_ \t]?Script$/i], ["cpp-icon", ["medium-blue", "dark-blue"], /\.c[+px]{2}$|\.cc$/i, , !1, , /\.cpp$/i, /^C\+?\+?$|c[-_]?pp|cplusplus/i], ["cpp-icon", ["medium-purple", "dark-purple"], /\.h[+px]{2}$/i], ["cpp-icon", ["medium-orange", "dark-orange"], /\.[it]pp$/i], ["cpp-icon", ["medium-red", "dark-red"], /\.(?:tcc|inl)$/i], ["cabal-icon", ["medium-cyan", "medium-cyan"], /\.cabal$/i, , !1, , /\.cabal$/i, /^Cabal$/i], ["caffe-icon", ["medium-maroon", "medium-maroon"], /\.caffemodel$/i], ["caffe-icon", ["medium-green", "medium-green"], /\.solverstate$/i], ["cake-icon", ["medium-yellow", "medium-yellow"], /\.cake$/i, , !1, , /\.cake$/i, /^Cake$/i], ["cakefile-icon", ["medium-red", "medium-red"], /^Cakefile$/], ["cakephp-icon", ["medium-red", "medium-red"], /\.ctp$/i], ["calva-icon", ["medium-maroon", "medium-maroon"], /\.calva-repl$/i], ["casc-icon", ["medium-orange", "dark-orange"], /\.casc?$/i, , !1, , /\.casc$/i, /^Casc$/i], ["ceylon-icon", ["medium-orange", "medium-orange"], /\.ceylon$/i], ["chapel-icon", ["medium-green", "medium-green"], /\.chpl$/i, , !1, , /\.chapel$/i, /^Chapel$|^chpl$/i], ["checklist-icon", ["medium-yellow", "medium-yellow"], /\.(?:todo|taskpaper)$/i], ["cheetah3d-icon", ["medium-yellow", "dark-yellow"], /\.jas$/i], ["chef-icon", ["medium-orange", "dark-orange"], /^chefignore$|^(?:Berks|Policy)file(?:\.lock)?$/i], ["chrome-icon", ["medium-red", "medium-red"], /\.crx$/i, , !1, , , , /^Cr24/], ["chuck-icon", ["medium-green", "medium-green"], /\.ck$/i, , !1, , /\.chuck$/i, /^Chuc[\W_ \t]?K$/i], ["icon-circuit-board", ["dark-green", "dark-green"], /\.brd$|\.(?:cir|ckt|struct|tech)$/i, , !1, /^ngspice$/, /\.spice$/i], ["icon-circuit-board", ["medium-red", "medium-red"], /\.sch$|\.gbr$|\.gko$/i, , !1, /^gerber$/, /\.gerber$/i], ["icon-circuit-board", ["medium-green", "medium-green"], /\.pcb$|\.gm\d+$/i], ["icon-circuit-board", ["medium-blue", "medium-blue"], /\.gtl$/i], ["icon-circuit-board", ["medium-cyan", "medium-cyan"], /\.gbl$/i], ["icon-circuit-board", ["medium-orange", "medium-orange"], /\.gbs$/i], ["icon-circuit-board", ["medium-maroon", "medium-maroon"], /\.gto$/i], ["icon-circuit-board", ["dark-maroon", "dark-maroon"], /\.gts$/i], ["icon-circuit-board", ["dark-orange", "dark-orange"], /\.gtp$/i], ["icon-circuit-board", ["dark-blue", "dark-blue"], /\.gbo$|\.drl$|\.net$/i], ["icon-circuit-board", ["dark-red", "dark-red"], /\.gbp$|\.fab$/i], ["icon-circuit-board", ["dark-cyan", "dark-cyan"], /\.dsn$|\.pho$/i], ["icon-circuit-board", ["medium-yellow", "medium-yellow"], /\.gpt$/i], ["icon-circuit-board", ["dark-yellow", "dark-yellow"], /\.gpb$/i], ["cirru-icon", ["medium-pink", "dark-pink"], /\.cirru$/i, , !1, , /\.cirru$/i, /^Cirru$/i], ["clarion-icon", ["medium-orange", "medium-orange"], /\.clw$/i, , !1, , /\.clarion$/i, /^Clari[0o]n$/i], ["clean-icon", ["dark-cyan", "dark-cyan"], /\.icl$/i, , !1, /^clean$/, /\.clean$/i, /^clean$/i], ["clean-icon", ["medium-cyan", "medium-cyan"], /\.dcl$/i], ["clean-icon", ["medium-blue", "medium-blue"], /\.abc$/i], ["click-icon", ["medium-yellow", "medium-yellow"], /\.click$/i, , !1, , /\.click$/i, /^Click$|^Click!$/i], ["clips-icon", ["dark-green", "dark-green"], /\.clp$/i, , !1, , /\.clips$/i, /^Clips$/i], ["clojure-icon", ["medium-blue", "dark-blue"], /\.clj$/i, , !1, /^clojure$/, /\.clojure$/i, /^cl[0o]jure$/i], ["clojure-icon", ["medium-purple", "dark-purple"], /\.cl2$/i], ["clojure-icon", ["medium-green", "dark-green"], /\.cljc$/i], ["clojure-icon", ["medium-red", "dark-red"], /\.cljx$|\.hic$/i], ["cljs-icon", ["medium-blue", "dark-blue"], /\.cljs(?:cm)?$/i], ["closure-tpl-icon", ["medium-blue", "medium-blue"], /\.soy$/i, , !1, , /^text\.html\.soy$/, /^Cl[0o]sure[\W_ \t]?Template$/i], ["cloudfoundry-icon", ["medium-blue", "medium-blue"], /\.cfignore$/i], ["cmake-icon", ["medium-green", "medium-green"], /\.cmake$/i, , !1, /^cmake$/, /\.cmake$/i, /^cmake$/i], ["cmake-icon", ["medium-red", "medium-red"], /^CMakeLists\.txt$/], ["cobol-icon", ["medium-blue", "dark-blue"], /\.(?:cob|ccp|cbl|cobol|cpy)$/i, , !1, , /\.cobol$/i, /^C[0o]b[0o]l$/i], ["cocoapods-icon", ["medium-red", "medium-red"], /\.podspec$/i], ["codekit-icon", [null, null], /(?:^config)?\.codekit\d*$/i], ["coffee-icon", ["medium-maroon", "medium-maroon"], /\.coffee$/i, , !1, /^coffee$/, /\.coffee$/i, /^C[0o]ffee[\W_ \t]?Script$|^Coffee(?:-Script)?$/i], ["coffee-icon", ["dark-maroon", "dark-maroon"], /\.cjsx$/i], ["coffee-icon", ["medium-blue", "medium-blue"], /\.coffee\.md$|\.iced$/i], ["coffee-icon", ["light-maroon", "light-maroon"], /\.litcoffee$/i, , !1, /^litcoffee$/, /\.litcoffee$/i, /^C[0o]ffee[\W_ \t]?Script$|^litc[0o]ffee$/i], ["cf-icon", ["light-cyan", "light-cyan"], /\.cfc$/i, , !1, , /\.cfscript$/i, /^C[0o]ld[\W_ \t]?Fusi[0o]n$|^(?:CFC|CFScript)$/i], ["cf-icon", ["medium-cyan", "medium-cyan"], /\.cfml?$/i, , !1, , /\.cfml?$/i, /^C[0o]ld[\W_ \t]?Fusi[0o]n$|^(?:cfml?|ColdFusion\s*HTML)$/i], ["khronos-icon", ["medium-orange", "medium-orange"], /\.(?:dae|collada)$/i], ["cl-icon", ["medium-orange", "medium-orange"], /\.cl$/i, , !1, /^(?:c?lisp|sbcl|[ec]cl)$/, /\.common-lisp$/i, /^C[0o]mm[0o]n[\W_ \t]?Lisp$|^c?lisp$/i], ["cp-icon", ["medium-maroon", "medium-maroon"], /\.cp$/i], ["cp-icon", ["dark-red", "dark-red"], /\.cps$/i], ["zip-icon", [null, null], /\.(?:zip|z|xz)$/i, , !1, , , , /^(?:\x50\x4B(?:\x03\x04|\x05\x06|\x07|\x08)|\x1F[\x9D\xA0]|BZh|RNC[\x01\x02]|\xD0\xCF\x11\xE0)/], ["zip-icon", ["medium-blue", "medium-blue"], /\.rar$|\.wgt$/i, , !1, , , , /^Rar!\x1A\x07\x01?\0/], ["zip-icon", ["dark-blue", "dark-blue"], /\.t?gz$|\.tar$|\.whl$/i, , !1, , , , /^\x1F\x8B/], ["zip-icon", ["medium-maroon", "medium-maroon"], /\.(?:lzo?|lzma|tlz|tar\.lzma)$/i, , !1, , , , /^LZIP/], ["zip-icon", ["medium-maroon", "medium-maroon"], /\.7z$/i, , !1, , , , /^7z\xBC\xAF\x27\x1C/], ["zip-icon", ["medium-red", "medium-red"], /\.apk$|\.gem$/i], ["zip-icon", ["dark-cyan", "dark-cyan"], /\.bz2$/i], ["zip-icon", ["medium-orange", "medium-orange"], /\.maff$|\.xpi$/i, , !1, , , , /^\x04\x03KP/], ["zip-icon", ["medium-blue", "medium-blue"], /\.iso$/i, , !1, , , , /^\x45\x52\x02\0{3}|^\x8B\x45\x52\x02/], ["zip-icon", ["medium-cyan", "medium-cyan"], /\.hqx$/i, , !1, , , , /^\(This file must be converted with BinHex 4\.0\)/], ["zip-icon", ["medium-green", "medium-green"], /\.epub$|\.dsk$/i], ["zip-icon", ["dark-pink", "dark-pink"], /\.jar$/i], ["zip-icon", ["medium-purple", "medium-purple"], /\.war$|\.ear$/i], ["zip-icon", ["dark-orange", "dark-orange"], /\.xar$/i, , !1, , , , /^xar!/], ["zip-icon", ["light-orange", "light-orange"], /\.egg$/i], ["zip-icon", ["medium-blue", "medium-blue"], /\.sit$/i, , !1, , , , /^SIT[!D]/], ["zip-icon", ["dark-blue", "dark-blue"], /\.hak$/i, , !1, , , , /^HAK V\d\.\d/], ["cdf-icon", ["medium-red", "medium-red"], /\.cdf$/i], ["conda-icon", ["medium-green", "medium-green"], /^\.?condarc$/i], ["config-icon", ["medium-yellow", "medium-yellow"], /\.(?:ini|desktop|directory|cfg|co?nf|prefs)$/i, , !1, , /\.ini$/i, /^d[0o]sini$/i], ["config-icon", ["medium-purple", "medium-purple"], /\.properties$/i, , !1, , /\.java-properties$/i], ["config-icon", ["dark-red", "dark-red"], /\.ld$/i], ["config-icon", ["dark-green", "dark-green"], /\.ldif$/i], ["config-icon", ["medium-red", "medium-red"], /\.lds$|\.kys$/i], ["config-icon", ["medium-blue", "medium-blue"], /\.mcf$|\.sdl(?:ang)?$|^mimeapps\.list$/i, , !1, , /^source\.sdl$/], ["config-icon", ["medium-green", "medium-green"], /\.opts$|\.flc$/i, , !1, , /^source\.figctrl$/i, , /^flc2a/], ["config-icon", ["dark-blue", "dark-blue"], /(?:\.|^)terminal(?:rc)?$/i], ["config-icon", ["medium-orange", "medium-orange"], /^ld\.script$/i], ["config-icon", ["medium-cyan", "medium-cyan"], /^\.?XCompose$/, , !1, /^xcompose$/, /\.xcompose$/i, /^xc[0o]mp[0o]se$/i], ["config-icon", ["dark-red", "dark-red"], /\.git[\/\\](?:config|info[\/\\][-\w]+)$/, , !0], ["config-icon", ["dark-cyan", "dark-cyan"], /(^|[\/\\])\.fossil-settings\1(?:[^\/\/]+)/, , !0], ["config-icon", ["dark-orange", "dark-orange"], /^\/(?:private\/)?etc\/(?:[^\/]+\/)*[^\/]*\.(?:cf|conf|ini)(?:\.default)?$/i, , !0], ["config-icon", ["medium-maroon", "medium-maroon"], /^\/(?:private\/)?etc\/(?:aliases|auto_(?:home|master)|ftpusers|group|gettytab|hosts(?:\.equiv)?|manpaths|networks|paths|protocols|services|shells|sudoers|ttys)$/i, , !0], ["config-coffee-icon", ["medium-red", "medium-red"], /\.coffeelintignore$/i, , !1, , /^source\.gitignore$/], ["config-rust-icon", ["dark-maroon", "dark-maroon"], /^rust-toolchain$/i], ["conll-icon", ["medium-blue", "medium-blue"], /\.conll$/i, , !1, , /^text\.conllu$/, /^CoNLL(?:[-_\s]*[XU])?$/i], ["conll-icon", ["medium-orange", "medium-orange"], /\.conllu$/i], ["coq-icon", ["medium-maroon", "medium-maroon"], /\.coq$/i, , !1, , /\.coq$/i, /^C[0o]q$/i], ["corel-icon", ["medium-blue", "medium-blue"], /\.(?:cmx|ccx)$/i], ["coreldraw-icon", ["medium-green", "medium-green"], /\.(?:cdrx?|cdt)$/i, , !1, , , , /^RIFF.{4}CDR.{1,2}vrsn/], ["cpan-icon", ["dark-blue", "dark-blue"], /^cpanfile$/i], ["cpan-icon", ["medium-maroon", "medium-maroon"], /^MANIFEST\.SKIP$/], ["cpcdosc-icon", ["medium-blue", "medium-blue"], /\.cpc$/i, , !1, , /\.cpc$/i, /^Cpcd[0o]s[\W_ \t]?C\+?$/i], ["creole-icon", ["medium-blue", "medium-blue"], /\.creole$/i, , !1, , /\.creole$/i, /^Cre[0o]le$/i], ["crystal-icon", ["medium-cyan", "medium-cyan"], /\.e?cr$/i, , !1, /^crystal$/, /\.crystal$/i, /^Crystal$/i], ["csound-icon", ["medium-maroon", "medium-maroon"], /\.orc$/i, , !1, , /\.csound$/i, /^Cs[0o]und$|^cs[0o]und[\W_ \t]?[0o]rc$/i], ["csound-icon", ["dark-orange", "dark-orange"], /\.udo$/i], ["csound-icon", ["dark-maroon", "dark-maroon"], /\.csd$/i, , !1, , /\.csound-document$/i, /^Cs[0o]und$|^cs[0o]und[\W_ \t]?csd$/i], ["csound-icon", ["dark-blue", "dark-blue"], /\.sco$/i, , !1, , /\.csound-score$/i, /^Cs[0o]und$|^cs[0o]und[\W_ \t]?sc[0o]$/i], ["css3-icon", ["medium-blue", "medium-blue"], /\.css$/i, , !1, /^css$/, /\.css$/i, /^css$/i], ["css3-icon", ["dark-blue", "dark-blue"], /\.less$/i, , !1, /^lessc$/, /^source(?:\.css)?\.less$/, /^Css$|^less(?:c|-?css)?$/i], ["css3-icon", ["dark-red", "dark-red"], /\.tss$/i, , !1, /^tss$/, /\.tss$/i, /^Css$|^tss$/i], ["cucumber-icon", ["medium-green", "medium-green"], /\.feature$/i, , !1, , /(?:^|\.)(?:gherkin\.feature|cucumber\.steps)(?:\.|$)/i, /^Cucumber$|^gherkin$/i], ["nvidia-icon", ["medium-green", "medium-green"], /\.cu$/i, , !1, , /\.cuda(?:-c\+\+)?$/i, /^Cuda$/i], ["nvidia-icon", ["dark-green", "dark-green"], /\.cuh$/i], ["cuneiform-icon", ["dark-blue", "dark-blue"], /\.cfl$/i, , !1, /^cuneiform$/, /\.cfl$/i, /^Cuneif[0o]rm$/i], ["curl-icon", ["dark-blue", "dark-blue"], /(?:^|\.)curlrc$|^_curlrc$/i, , !1, , /\.curlrc$/i, /^c[\W_ \t]?Url$/i], ["curry-icon", ["medium-red", "medium-red"], /\.curry$/i, , !1, , /\.curry$/i, /^Curry$/i], ["cvs-icon", ["medium-orange", "medium-orange"], /\.cvsignore$/i], ["cwl-icon", ["dark-red", "dark-red"], /\.cwl$/i, , !1, /^cwl-runner$/, /\.cwl$/i, /^Cwl$|^C[0o]mm[0o]n[\W_ \t]?W[0o]rkfl[0o]w[\W_ \t]?Language$/i], ["cython-icon", ["medium-orange", "medium-orange"], /\.pyx$/i, , !1, , /\.cython$/i, /^Cyth[0o]n$|^pyrex$/i], ["cython-icon", ["medium-blue", "medium-blue"], /\.pxd$/i], ["cython-icon", ["dark-blue", "dark-blue"], /\.pxi$/i], ["dlang-icon", ["medium-red", "medium-red"], /\.di?$/i, , !1, , /\.d$/i, /^D$/i], ["dafny-icon", ["medium-yellow", "medium-orange"], /\.(?:dfy|dafny)$/i, , !1, /^dafny$/, /\.(?:dfy|dafny)(?:$|\.)/i, /^Dafny$/i], ["yang-icon", ["medium-red", "medium-red"], /\.dnh$/i, , !1, , /\.danmakufu$/i, /^Danmakufu$/i], ["darcs-icon", ["medium-green", "medium-green"], /\.d(?:arcs)?patch$/i], ["darcs-icon", ["dark-green", "dark-green"], /^\.boringignore$/i], ["dart-icon", ["medium-cyan", "medium-cyan"], /\.dart$/i, , !1, /^dart$/, /\.dart$/i, /^Dart$/i], ["dashboard-icon", ["medium-orange", "medium-orange"], /\.s[kl]im$/i, , !1, /^slim$/, /\.slim$/i, /^slim$/i], ["dashboard-icon", ["medium-green", "medium-green"], /\.cpuprofile$/i], ["dashboard-icon", ["medium-blue", "medium-blue"], /\.cloc$/i], ["database-icon", ["medium-red", "medium-red"], /\.aff$|\.http$|\.pot?$|\.(?:irb-history|lesshst)$/i], ["database-icon", ["medium-maroon", "medium-maroon"], /\.cson$|\.ston$|^(?:mime\.types|fstab)$|^whatis$/i], ["database-icon", ["medium-green", "medium-green"], /\.dict?$|\.snip(?:pets?)?$/i, , !1, , /\.(?:vim-snippet|snipmate|ultisnips|neosnippet|snippets?)(?:\.|$)/i], ["database-icon", ["medium-orange", "medium-orange"], /\.hson$|\.ndjson$|\.dbi$|(?:^|\.)encodings\.dir$/i, , !1, /^hson$/, /\.hson$/i, /^hs[0o]n$/i], ["database-icon", ["light-blue", "light-blue"], /\.fea$/i, , !1, , /\.opentype$/i, /^afdk[0o]$/i], ["database-icon", ["medium-purple", "medium-purple"], /\.json\.eex$|\.edn$|^(?:magic\.mgc|figmagic)$/i, , !1, , , , /^\xF1\x1E\x04\x1C|^\x1C\x04\x1E\xF1/], ["database-icon", ["medium-cyan", "medium-cyan"], /\.cbor$|\.ttl$|\.2da$/i, , !1, , /\.turtle$/i], ["database-icon", ["dark-cyan", "dark-cyan"], /\.(?:proto|protote?xt|pbte?xt)$/i, , !1, , /\.protobuf$/i, /^(?:protobuf|Protocol\s*Buffers?)(?:\s*text)?$/i], ["database-icon", ["medium-orange", "medium-orange"], /\.pytb$/i, , !1, , /\.python\.traceback$/i], ["database-icon", ["dark-blue", "dark-blue"], /\.pydeps$/i], ["database-icon", ["dark-red", "dark-red"], /\.ejson$/i], ["database-icon", ["dark-purple", "dark-purple"], /\.eam\.fs$/i], ["database-icon", ["dark-green", "dark-green"], /\.son$|\.sy$/i, , !1, /^son$/, /\.son$/i, /^s[0o]n$/i], ["database-icon", ["medium-blue", "medium-blue"], /\.syntax$|\.webmanifest$|\.tgn$|^pkginfo$/i], ["database-icon", ["medium-grey", "medium-grey"], /\.(?:od|onlydata)$/i], ["database-icon", ["medium-green", "medium-green"], /\.yas(?:nippet)?$/i, , !1, , /^source\.yasnippet$/i, /(?:YA)?Snippet/i], ["database-icon", ["medium-red", "medium-red"], /(\\|\/)share(?:\1misc)?\1(?:ascii|trace\.codes)$/, , !0], ["database-icon", ["dark-orange", "dark-orange"], /\.(?:ldj|ldjson|jsonl)$/, , !1, /^jsonl$/, /\.jsonl$/i, /^js[0o]nl$/i], ["database-icon", ["dark-red", "dark-red"], /[\/\\](?:magic[\/\\]Magdir|file[\/\\]magic)[\/\\][-.\w]+$/i, , !0], ["database-icon", ["medium-green", "medium-green"], /(\\|\/)dev[-\w]+\1(?:[^\\\/]+\1)*(?!DESC|NOTES)(?:[A-Z][-A-Z]*)(?:\.in)?$|\.ssh[\/\\](?:authorized_keys|known_hosts)$/, , !0], ["dataweave-icon", ["medium-blue", "dark-blue"], /\.dwl$/i, , !1, , /\.data-?weave/, /^Data[\W_ \t]?Weave$/i], ["dbase-icon", ["medium-red", "medium-red"], /\.dbf$/i], ["debian-icon", ["medium-red", "medium-red"], /\.deb$/i], ["debian-icon", ["dark-cyan", "dark-cyan"], /(?:^|\.)(?:control|dsc)$/, , !1, , /\.deb-control$/i, /^Debian$/i], ["debian-icon", ["medium-cyan", "medium-cyan"], /^rules$/], ["delphi-icon", ["medium-red", "medium-red"], /\.dfm$/i], ["delphi-icon", ["medium-blue", "medium-blue"], /\.dof$/i], ["delphi-icon", ["medium-orange", "medium-orange"], /\.dpr$/i], ["devicetree-icon", ["medium-purple", "medium-purple"], /\.dts$/i, , !1, , /\.dts$/i, /^Device[\W_ \t]?Tree$|^Device[\W_ \t]?Tree[\W_ \t]?S[0o]urce$/i], ["devicetree-icon", ["medium-orange", "medium-orange"], /\.dtsi$/i], ["dhall-icon", ["dark-grey", "dark-grey"], /\.dhall$/i, , !1, , /\.\.dhall$/i, /^Dhall$/i], ["dia-icon", ["medium-cyan", "dark-cyan"], /\.dia$/i], ["diff-icon", ["medium-orange", "medium-orange"], /\.diff$/i, , !1, , /\.diff$/i, /^Diff$|^udiff$/i], ["digdag-icon", ["medium-orange", "medium-orange"], /\.dig$/i], ["binary-icon", ["dark-green", "dark-green"], /\.dit(?:roff)?$/i, , !1, , /\.source\.ditroff$/i, /^Ditr[0o]ff$/i, /^x\s*T\s+(?:dvi|html|lbp|lj4|ps|post|pdf|ascii|cp1047|latin1|utf8|X75|X75-12|X100|X100-12)(?=\s|$)/], ["earth-icon", ["medium-blue", "medium-blue"], /\.zone$/i], ["earth-icon", ["medium-green", "medium-green"], /\.arpa$/i], ["earth-icon", ["dark-blue", "dark-blue"], /^CNAME$/], ["docbook-icon", ["medium-cyan", "medium-cyan"], /\.(?:dbk|docbook)$/i, , !1, , , , /^<!DOCTYPE(?=\s)[^>]+?DTD[^>]+?DocBook\b[^>]*>/i], ["docpad-icon", ["medium-maroon", "medium-maroon"], /\.eco$/i, , !1, , /\.eco$/i, /^D[0o]c[\W_ \t]?Pad$/i], ["dosbox-icon", ["medium-orange", "medium-orange"], /^dosbox(?:\b|_).*(?:\.conf|pref\w*)$/i], ["doxygen-icon", ["medium-blue", "medium-blue"], /^\.?Doxyfile$/i, , !1, , /\.doxygen$/i, /^D[0o]xyfile$/i], ["dyalog-icon", ["medium-orange", "medium-orange"], /\.dyalog$/i, , !1, /^dyalog$/], ["dyalog-icon", ["medium-red", "medium-red"], /\.dyapp$/i], ["dyalog-icon", ["dark-green", "dark-green"], /\.mipage$/i], ["dylib-icon", ["medium-cyan", "medium-cyan"], /\.(?:dylib|bundle)$/i], ["icon-star", ["dark-red", "dark-red"], /\.dmark$/i], ["e-icon", ["medium-green", "medium-green"], /\.E$/, , !1, /^rune$/], ["eagle-icon", ["medium-red", "medium-red"], /\.eup$/i, , !1, , /\.eagle$/i, /^Eagle$/i], ["easybuild-icon", ["dark-blue", "dark-blue"], /\.eb$/i], ["ec-icon", ["dark-blue", "dark-blue"], /\.ec$/i, , !1, /^ec$/, /\.ec$/i, /^ec$/i], ["ec-icon", ["dark-purple", "dark-purple"], /\.eh$/i], ["ecere-icon", ["medium-blue", "medium-blue"], /\.epj$/i], ["eclipse-icon", ["dark-blue", "dark-blue"], /\.c?project$/], ["eclipse-icon", ["medium-red", "medium-red"], /\.classpath$/i], ["edge-icon", ["dark-orange", "dark-orange"], /\.edge$/i, , !1, , /\.html.edge$/, /^Edge$/i], ["editorconfig-icon", ["medium-orange", "medium-orange"], /\.editorconfig$/i, , !1, , /\.editorconfig$/i, /^Edit[0o]r[\W_ \t]?C[0o]nfig$/i], ["editorconfig-icon", ["dark-blue", "dark-blue"], /\.ecrc$/i], ["eiffel-icon", ["medium-cyan", "medium-cyan"], /\.e$/, , !1, , /\.eiffel$/i, /^Eiffel$/i], ["ejs-icon", ["medium-green", "medium-green"], /\.ejs$/i, , !1, , /\.text\.html\.js$/i, /^Ejs$/i], ["elixir-icon", ["dark-purple", "dark-purple"], /\.ex$/i, , !1, /^elixir$/, /\.elixir$/i, /^elixir$/i], ["elixir-icon", ["medium-purple", "medium-purple"], /\.(?:exs|[hl]?eex)$/i], ["elixir-icon", ["light-purple", "light-purple"], /^mix\.(?:exs?|lock)$/i], ["elm-icon", ["medium-blue", "medium-blue"], /\.elm$/i, , !1, , /\.elm$/i, /^Elm$/i], ["at-icon", ["medium-red", "dark-red"], /^(?:authors|(?:code)?owners)$/i, , !1, , /^text\.eml(?:$|\.)/, /^(?:EML|mbox|e?-?mail)$/i], ["em-icon", ["medium-red", "medium-red"], /\.emberscript$/i, , !1, , /\.ember(?:script)?$/i, /^Ember[\W_ \t]?Script$/i], ["mustache-icon", ["medium-blue", "medium-blue"], /\.em(?:blem)?$/i, , !1, , /\.emblem$/i, /^Emblem$/i], ["ensime-icon", ["medium-red", "medium-red"], /\.ensime$/i], ["eq-icon", ["medium-orange", "medium-orange"], /\.eq$/i, , !1, , /\.eq$/i, /^Eq$/i], ["erlang-icon", ["medium-red", "medium-red"], /\.erl$|^rebar(?:\.config)?\.lock$/i, , !1, /^escript$/, /\.erlang$/i, /^Erlang$/i], ["erlang-icon", ["dark-red", "dark-red"], /\.beam$/i], ["erlang-icon", ["medium-maroon", "medium-maroon"], /\.hrl$/i], ["erlang-icon", ["medium-green", "medium-green"], /\.xrl$/i], ["erlang-icon", ["dark-green", "dark-green"], /\.yrl$/i], ["erlang-icon", ["dark-maroon", "dark-maroon"], /\.app\.src$/i], ["erlang-icon", ["dark-green", "dark-green"], /^Emakefile$/], ["factor-icon", ["medium-orange", "medium-orange"], /\.factor$/i, , !1, , /\.factor$/i, /^Fact[0o]r$/i], ["factor-icon", ["dark-orange", "dark-orange"], /\.factor-rc$/i], ["factor-icon", ["medium-red", "medium-red"], /\.factor-boot-rc$/i], ["falcon-icon", ["medium-red", "medium-red"], /\.fal(?:con)?$/i, , !1, /^falcon$/, /\.falcon$/i, /^Falc[0o]n$/i], ["fancy-icon", ["dark-blue", "dark-blue"], /\.fy$/i, , !1, /^fancy$/, /\.fancy$/i, /^fancy$/i], ["fancy-icon", ["medium-blue", "medium-blue"], /\.fancypack$/i], ["fancy-icon", ["medium-green", "medium-green"], /^Fakefile$/], ["fantom-icon", ["medium-blue", "medium-blue"], /\.fan$/i, , !1, , /\.fan(?:tom)?$/i, /^Fant[0o]m$/i], ["dna-icon", ["medium-purple", "medium-purple"], /\.(?:fasta|fas?|seq|fsa)$/i, , !1, /^fasta$/, /\.fasta$/i, /^fasta$/i], ["dna-icon", ["medium-green", "medium-green"], /\.(?:fastq|fq)$/i, , !1, /^fastq$/, /\.fastq$/i, /^Fasta$|^fastq$/i], ["dna-icon", ["medium-orange", "medium-orange"], /\.(?:faa|mpfa)$/i], ["dna-icon", ["medium-pink", "medium-pink"], /\.fna$/i], ["dna-icon", ["medium-red", "medium-red"], /\.ffn$/i], ["dna-icon", ["medium-blue", "medium-blue"], /\.frn$/i], ["dna-icon", ["dark-yellow", "dark-yellow"], /\.sam$/i], ["fauna-icon", ["dark-blue", "dark-blue"], /\.fql$|\.faunarc$/i, , !1, , /\.source\.fql$/i, /^Fauna$|^(?:FaunaDB|Fauna *Query *Language)$/i], ["faust-icon", ["dark-orange", "dark-orange"], /\.dsp$/i, , !1, , /\.faust$/i, /^Faust$/i], ["fbx-icon", ["medium-maroon", "medium-maroon"], /\.fbx$/i], ["fexl-icon", ["medium-cyan", "medium-cyan"], /\.fxl$/i, , !1, /^fexl$/, /(?:^|\.)fe?xl(?:.|$)/i, /^Fexl$/i], ["figma-icon", ["medium-red", "medium-red"], /\.figma$/i], ["finaldraft-icon", ["medium-green", "medium-green"], /\.fdx$/i], ["finder-icon", ["medium-blue", "medium-blue"], /^Icon\r$/], ["finder-icon", ["dark-blue", "dark-blue"], /\.rsrc$/i], ["firebase-icon", ["medium-orange", "medium-orange"], /^firestore\.rules?$|\.firebaserc$/i, , !1, , /\bsource\.fire(?:store|rules)(?=\\.|$)/i, /^Firebase$|^firerules$/i, /^service\s+cloud\.firestore\s+{/], ["firebase-bolt-icon", ["medium-yellow", "medium-yellow"], /\.bolt$/i, , !1, , /\.bolt$/i, /^Firebase[\W_ \t]?B[0o]lt$/i], ["firefox-icon", ["medium-orange", "medium-orange"], /\.webapp$/i], ["floobits-icon", ["medium-red", "medium-red"], /\.flooignore$/i], ["flow-icon", ["medium-orange", "medium-orange"], /\.(?:flowconfig|js\.flow|flow)$/i], ["flutter-icon", ["light-blue", "light-blue"], /\.flutter-plugins$/i], ["flux-icon", ["medium-blue", "medium-blue"], /\.fx$/i], ["flux-icon", ["dark-blue", "dark-blue"], /\.flux$/i], ["font-icon", ["dark-blue", "dark-blue"], /\.woff2$/i, , !1, , , , /^wOF2/], ["font-icon", ["medium-blue", "medium-blue"], /\.woff$/i, , !1, , , , /^wOFF/], ["font-icon", ["light-green", "light-green"], /\.eot$/i, , !1, , , , /^.{34}LP/], ["font-icon", ["dark-green", "dark-green"], /\.ttc$|\.tfm$/i, , !1, , , , /^ttcf/], ["font-icon", ["medium-green", "medium-green"], /\.ttf$/i, , !1, , , , /^\0\x01\0{3}/], ["font-icon", ["dark-yellow", "dark-yellow"], /\.otf$/i, , !1, , , , /^OTTO.*\0/], ["font-icon", ["dark-red", "dark-red"], /\.pfb$/i], ["font-icon", ["medium-red", "medium-red"], /\.pfm$/i], ["font-icon", ["dark-cyan", "dark-cyan"], /\.dfont$/i, , !1, , , , /^\0\0\x01\0.*?(?:sfnt|FONT|NFNT|POST)/], ["font-bitmap-icon", ["medium-cyan", "medium-cyan"], /\.psfu?$/i, , !1, , , , /^\x72\xB5\x4A\x86|^6\x04/], ["font-bitmap-icon", ["medium-orange", "medium-orange"], /\.pcf$/i, , !1, , , , /^\x01FCP/], ["font-bitmap-icon", ["dark-blue", "dark-blue"], /\.psftx$/i], ["font-bitmap-icon", ["medium-red", "medium-red"], /\.bdf$|\.flf$/i, , !1, , /^source\.figfont$/i, , /^flf/], ["font-bitmap-icon", ["medium-blue", "medium-blue"], /\.fnt$/i], ["font-bitmap-icon", ["dark-red", "dark-red"], /\.fon$/i], ["font-bitmap-icon", ["dark-orange", "dark-orange"], /\.snf$/i], ["font-bitmap-icon", ["medium-orange", "medium-orange"], /\.tlf$/i, , !1, , , , /^tlf/], ["ff-icon", ["medium-orange", "medium-orange"], /\.(?:ff|pe)$/i, , !1, /^fontforge$/, /\.source\.fontforge$/i, /^F[0o]nt[\W_ \t]?F[0o]rge$|^pfaedit$/i], ["ff-icon", ["dark-blue", "dark-blue"], /\.sfd$/i, , !1, , /\.text\.sfd$/i, /^F[0o]nt[\W_ \t]?F[0o]rge$/i], ["ftr-icon", ["medium-red", "medium-red"], /\.trm$/i], ["fork-icon", ["medium-blue", "medium-blue"], /^\.issuetracker$/i], ["fortran-icon", ["medium-maroon", "medium-maroon"], /\.f$/i, , !1, , /\.fortran\.?(?:modern|punchcard)?$/i, /^F[0o]rtran$/i], ["fortran-icon", ["medium-green", "medium-green"], /\.f90$/i, , !1, , /\.fortran\.free$/i, /^F[0o]rtran$/i], ["fortran-icon", ["medium-red", "medium-red"], /\.f03$/i], ["fortran-icon", ["medium-blue", "medium-blue"], /\.f08$/i], ["fortran-icon", ["medium-maroon", "medium-maroon"], /\.f77$/i, , !1, , /\.fortran\.fixed$/i, /^F[0o]rtran$/i], ["fortran-icon", ["dark-pink", "dark-pink"], /\.f95$/i], ["fortran-icon", ["dark-cyan", "dark-cyan"], /\.for$/i], ["fortran-icon", ["dark-yellow", "dark-yellow"], /\.fpp$/i], ["fortran-icon", ["dark-blue", "dark-blue"], /\.pfo$/i], ["fossa-icon", ["dark-blue", "dark-blue"], /\.fossaignore$/i], ["fossil-icon", ["medium-cyan", "dark-cyan"], /\.fossil$/i], ["fountain-icon", ["medium-blue", "medium-blue"], /\.fountain$/i, , !1, , /\.fountain$/i, /^F[0o]untain$/i], ["franca-icon", ["medium-orange", "medium-orange"], /\.fi?dl$/i, , !1, , /\.fidl$/i, /^Franca$|^Franca[\W_ \t]?Idl$/i], ["franca-icon", ["medium-maroon", "medium-maroon"], /\.fdepl$/i, , !1, , /\.fdepl$/i, /^Franca$|^Franca[\W_ \t]?Depl[0o]yment$/i], ["freemarker-icon", ["medium-blue", "medium-blue"], /\.ftl$/i, , !1, , /\.ftl$/i, /^Free[\W_ \t]?Marker$|^ftl$/i], ["frege-icon", ["dark-red", "dark-red"], /\.fr$/i], ["fsharp-icon", ["medium-blue", "medium-blue"], /\.fs[xi]?$/i, , !1, , /\.fsharp$/i, /^Fsharp$|^f#$/i], ["fthtml-icon", ["medium-orange", "medium-orange"], /\.fthtml$/i, , !1, , /\.source\.fthtml$/i, /^ft[\W_ \t]?Html$/i], ["futhark-icon", ["dark-maroon", "dark-maroon"], /\.fut$/i, , !1, /^futhark$/, /\.futhark$/i, /^Futhark$/i], ["galen-icon", ["medium-blue", "medium-blue"], /\.gspec$/i, , !1, , /^text\.galen$/, /^Galen$/i], ["galen-icon", ["medium-cyan", "medium-cyan"], /\.gtest$/i, , !1, , /^text\.galen-t$/, /^Galen$/i], ["gml-icon", ["medium-green", "medium-green"], /\.gml$/i], ["gams-icon", ["dark-red", "dark-red"], /\.gms$/i, , !1, , /\.gams(?:-lst)?$/i, /^Gams$/i], ["gap-icon", ["medium-yellow", "dark-yellow"], /\.gap$/i, , !1, /^gap$/, /\.gap$/i, /^gap$/i], ["gap-icon", ["dark-blue", "dark-blue"], /\.gi$/i], ["gap-icon", ["medium-orange", "medium-orange"], /\.tst$/i], ["gauss-icon", ["medium-orange", "medium-orange"], /\.gss$/i, , !1, , /\.gauss$/i, /^Gauss$/i], ["gdb-icon", ["medium-green", "dark-green"], /\.gdb$/i, , !1, /^gdb$/, /\.gdb$/i, /^gdb$/i], ["gdb-icon", ["medium-cyan", "dark-cyan"], /gdbinit$/i], ["gear-icon", ["medium-red", "medium-red"], /^\.htaccess$|\.htmlhintrc$/i], ["gear-icon", ["medium-orange", "medium-orange"], /^\.htpasswd$/i], ["gear-icon", ["dark-yellow", "dark-yellow"], /^\.lesshintrc$/i], ["gear-icon", ["medium-yellow", "medium-yellow"], /^\.csscomb\.json$|\.csslintrc$/i], ["gear-icon", ["dark-green", "dark-green"], /^text\.enc$/], ["gear-icon", ["medium-blue", "medium-blue"], /\.module$/i], ["gear-icon", ["medium-maroon", "medium-maroon"], /\.codoopts$/i], ["gear-icon", ["dark-blue", "dark-blue"], /\.arcconfig$/i], ["gear-icon", ["dark-green", "dark-green"], /\.pairs$/i], ["gear-icon", ["dark-orange", "dark-orange"], /\.lintstagedrc$/i], ["gears-icon", ["dark-orange", "dark-orange"], /\.dll$/i, , !1, , , , /^PMOCCMOC/], ["code-icon", ["medium-blue", "medium-blue"], /\.xml$|\.config$|\.4th$|\.[ad]sl$|\.dyl$|\.dylan$|\.fcgi$|\.forth$|\.launch$|\.manifest$|\.menu$|\.srdf$|\.st$|\.ui$|\.wsf$|\.x3d$/i, , !1, , /\.source\.asl$/i, , /^<\?xml /], ["code-icon", ["medium-red", "medium-red"], /\.xmp$|\.cscfg$|\.cgi$|\.ch$|\.cw$|\.fo$|\.iml$|\.mask$|\.mumps$|\.prg$|\.pt$|\.rl$|\.sml$|\.targets$|\.tera$|\.webidl$|\.wsdl$|\.xacro$|\.xliff$/i, , !1, /^fasto$/, /\.fasto$/i, , /^(?:<\?xpacket|<x:xmpmeta) /], ["code-icon", ["dark-red", "dark-red"], /\.rdf$|\.bc$|\.dotsettings$|\.fsproj$|\.xproj$/i, , !1, /^baan$/, /\.baan$/i], ["code-icon", ["medium-blue", "medium-blue"], /^_service$/], ["code-icon", ["medium-red", "medium-red"], /^configure\.ac$|\.ML$/], ["code-icon", ["medium-green", "medium-green"], /^Settings\.StyleCop$/], ["code-icon", ["dark-blue", "dark-blue"], /\.adm[lx]$|\.axml$|\.bmx$|\.brs$|\.ccxml$|\.clixml$|\.fth$|\.intr$|\.mdpolicy$|\.mtml$|\.myt$|\.xsd$/i, , !1, /^brightscript$/, /\.brightscript$/i], ["code-icon", ["medium-purple", "medium-purple"], /\.aepx$|\.dita$|\.grace$|\.lid$|\.qhelp$|\.tagx$/i], ["code-icon", ["medium-orange", "medium-orange"], /\.appxmanifest$|\.befunge$|\.fun$|\.muf$|\.ssmssln$|\.xul$/i], ["code-icon", ["medium-cyan", "medium-cyan"], /\.ash$|\.asn1?$|\.dtd$|\.props$|\.resx$|\.smt2$/i, , !1, , /\.dtd$/i], ["code-icon", ["dark-red", "dark-red"], /\.capnp$/i, , !1, , /\.capnp$/i, /^(?:Cap[^\w\s]?n\s*Proto|capnp)$/i], ["code-icon", ["medium-blue", "medium-blue"], /\.cocci$|\.sk[12]$/i, , !1, , /\.smpl$/i, /^(?:SmPL|Coccinelle)$/i, /^##sK1 /], ["code-icon", ["dark-pink", "dark-pink"], /\.ct$|\.zcml$/i], ["code-icon", ["dark-green", "dark-green"], /\.cy$|\.eclxml$|\.ivy$|\.natvis$|\.proj$|\.sed$|\.tml$/i, , !1, /^(?:[gs]?sed|minised)$/, /\.sed$/i], ["code-icon", ["dark-purple", "dark-purple"], /\.rdg$|\.ditamap$|\.frt$|\.jspx$|\.lp$|\.omgrofl$|\.osm$|\.xib$/i], ["code-icon", ["medium-green", "medium-green"], /\.ditaval$|\.spthy$|\.storyboard$|\.xmi$/i, , !1, /^tamarin(?:[\s_-]?prover)?$/i, /(?:^|\.)(?:spthy|tamarin)(?:\.|$)/i], ["code-icon", ["dark-maroon", "dark-maroon"], /\.ed$|\.mxml$/i, , !1, /^ed$/, /^source\.ed$i/], ["code-icon", ["medium-pink", "medium-pink"], /\.fidl$|\.filters$|\.pig$/i, , !1, /^fidl$/, /\.fidl$/i, /^fidl$/i], ["code-icon", ["medium-maroon", "medium-maroon"], /\.fxml$/i], ["code-icon", ["dark-orange", "dark-orange"], /\.grxml$|\.urdf$/i], ["code-icon", ["medium-yellow", "medium-yellow"], /\.jelly$|\.joy$/i, , !1, /^joy$/, /\.joy$/i], ["code-icon", ["medium-red", "medium-red"], /\.jf?lex$/i, , !1, , /^source\.jf?lex$/i], ["code-icon", ["dark-yellow", "dark-yellow"], /\.jsproj$|\.ohm$|\.sgml?$/i, , !1, /^ohm$/, /\.ohm$/i], ["code-icon", ["medium-red", "medium-red"], /\.m4$/i, , !1, /^m4$/, /\.m4$/i, /^m4$/i], ["code-icon", ["dark-blue", "dark-blue"], /\.mq[45h]$/i, , !1, , /(?:^|\.)mq[45](?=\.|$)/i], ["code-icon", ["light-green", "light-green"], /\.odd$/i], ["code-icon", ["dark-cyan", "dark-cyan"], /\.plist$|\.wisp$|\.xlf$|\.xslt$/i, , !1, , /\.plist$/i], ["code-icon", ["light-blue", "light-blue"], /\.psc1$|\.sk$|\.smt$/i, , !1, /boolector|cvc4|mathsat5|opensmt|smtinterpol|smt-rat|stp|verit|yices2|z3/, /\.smt$/i, , /^##Sketch 1 2/], ["code-icon", ["light-cyan", "light-cyan"], /\.scxml$/i], ["code-icon", ["light-maroon", "light-maroon"], /\.sig$/i], ["code-icon", ["medium-blue", "medium-blue"], /\.stellaris$/i, , !1, /^stellaris$/, /\.stellaris$/i, /^stellaris$/i], ["code-icon", ["light-orange", "light-orange"], /\.ux$/i], ["code-icon", ["light-purple", "light-purple"], /\.vxml$/i], ["code-icon", ["medium-blue", "medium-blue"], /\.wlp(?:4|ppp)$/i, , !1, /^wlp4$/, /\.wlp4$/i, /^wlp4$/i], ["code-icon", ["medium-cyan", "medium-cyan"], /\.xsl$/i, , !1, /^xsl$/, /\.xsl$/i, /^xsl$/i], ["genshi-icon", ["medium-red", "medium-red"], /\.kid$/i, , !1, , /\.genshi$/i, /^Genshi$|^xml\+(?:genshi|kid)$/i], ["genstat-icon", ["medium-green", "medium-green"], /\.gen$/i], ["genstat-icon", ["medium-blue", "medium-blue"], /\.gpi$/i], ["gentoo-icon", ["dark-cyan", "dark-cyan"], /\.ebuild$/i, , !1, , /\.ebuild$/i, /^Gent[0o][0o]$/i], ["gentoo-icon", ["medium-blue", "medium-blue"], /\.eclass$/i], ["gimp-icon", ["medium-red", "medium-red"], /\.xcf$/i], ["gimp-icon", ["medium-orange", "medium-orange"], /\.ggr$/i], ["gimp-icon", ["medium-maroon", "medium-maroon"], /\.gih$/i], ["gimp-icon", ["medium-green", "medium-green"], /\.gpl$/i], ["gimp-icon", ["medium-cyan", "medium-cyan"], /\.vbr$/i], ["git-icon", ["medium-red", "medium-red"], /^\.git|^\.keep$|\.(?:lfsconfig|mailmap)$/i, , !1, , /\.git-(?:commit|config|rebase)$/i, /^Git$/i], ["git-commit-icon", ["medium-red", "medium-red"], /^(?:ATOM_)?COMMIT_EDITMSG$/], ["git-merge-icon", ["medium-red", "medium-red"], /^MERGE_(?:HEAD|MODE|MSG)$/], ["glade-icon", ["medium-green", "medium-green"], /\.glade$/i], ["gltf-icon", ["medium-green", "medium-green"], /\.gltf$/i], ["pointwise-icon", ["medium-blue", "medium-blue"], /\.glf$/i], ["glyphs-icon", ["medium-green", "medium-green"], /\.glyphs$/i], ["gn-icon", ["dark-blue", "dark-blue"], /\.gn$/i, , !1, /^gn$/, /\.gn$/i, /^gn$/i], ["gn-icon", ["medium-blue", "medium-blue"], /\.gni$/i], ["gnu-icon", ["medium-red", "dark-red"], /\.(?:gnu|gplv[23])$/i], ["gnuplot-icon", ["medium-red", "medium-red"], /\.(?:gp|plo?t|gnuplot)$/i, , !1, /^gnuplot$/, /\.gnuplot$/i, /^Gnupl[0o]t$/i], ["go-icon", ["medium-blue", "medium-blue"], /\.go$/i, , !1, , /\.go(?:template)?$/i, /^G[0o]$/i], ["godot-icon", ["medium-blue", "medium-blue"], /\.gd$/i, , !1, , /\.gdscript$/i, /^G[0o]d[0o]t$|^Gdscript$/i], ["godot-icon", ["dark-blue", "dark-blue"], /\.godot$/i], ["godot-icon", ["medium-cyan", "medium-cyan"], /\.tres$/i], ["godot-icon", ["medium-green", "medium-green"], /\.tscn$/i], ["godot-icon", ["medium-red", "medium-red"], /\.import$/i], ["bnf-icon", ["medium-yellow", "dark-yellow"], /\.grm$/i, , !1, , /\.goldgrm$/i, /^G[0o]ld[\W_ \t]?Parser$|^G[0o]ld[\W_ \t]?Grammar$/i], ["bnf-icon", ["medium-red", "dark-red"], /\.[ce]gt$/i], ["golo-icon", ["medium-orange", "medium-orange"], /\.golo$/i, , !1, , /\.golo$/i, /^G[0o]l[0o]$/i], ["gosu-icon", ["medium-blue", "medium-blue"], /\.gs$/i, , !1, , /\.gosu(?:\.\d+)?$/i, /^G[0o]su$/i], ["gosu-icon", ["medium-green", "medium-green"], /\.gst$/i], ["gosu-icon", ["dark-green", "dark-green"], /\.gsx$/i], ["gosu-icon", ["dark-blue", "dark-blue"], /\.vark$/i], ["gradle-icon", ["medium-blue", "medium-blue"], /\.gradle$/i, , !1, , /\.gradle$/i, /^Gradle$/i], ["gradle-icon", ["dark-purple", "dark-purple"], /gradlew$/i], ["bnf-icon", ["medium-maroon", "medium-maroon"], /\.bnf$/i, , !1, , /\.bnf$/i, /^Backus[\W_ \t]?Naur[\W_ \t]?F[0o]rm$/i], ["bnf-icon", ["medium-green", "medium-green"], /\.abnf$/i, , !1, , /\.abnf$/i, /^Augmented[\W_ \t]?Backus[\W_ \t]?Naur[\W_ \t]?F[0o]rm$/i], ["bnf-icon", ["medium-red", "medium-red"], /\.ebnf$/i, , !1, , /\.ebnf$/i, /^Extended[\W_ \t]?Backus[\W_ \t]?Naur[\W_ \t]?F[0o]rm$/i], ["bnf-icon", ["medium-grey", "medium-grey"], /\.cddl$/i, , !1, , /\.cddl$/i, /^C[0o]ncise[\W_ \t]?Data[\W_ \t]?Definiti[0o]n[\W_ \t]?Language$/i], ["bnf-icon", ["dark-yellow", "dark-yellow"], /\.(?:cf|lbnf)$/i, , !1, /^bnfc$/, /\.lbnf$/i, /^Labelled[\W_ \t]?Backus[\W_ \t]?Naur[\W_ \t]?F[0o]rm$/i], ["bnf-icon", ["medium-cyan", "medium-cyan"], /\.grammar$/i], ["gf-icon", ["medium-red", "medium-red"], /\.gf$/i], ["grapher-icon", ["medium-green", "dark-green"], /\.gcx$/i], ["graphql-icon", ["medium-pink", "medium-pink"], /\.graphql$/i, , !1, , /\.graphql$/i, /^Graph[\W_ \t]?Ql$/i], ["graphql-icon", ["medium-red", "medium-red"], /\.graphqls$/i], ["graphql-icon", ["medium-purple", "medium-purple"], /\.gql$/i], ["graphviz-icon", ["medium-blue", "medium-blue"], /\.gv$/i, , !1, , /\.dot$/i, /^Graphviz$/i], ["graphviz-icon", ["dark-cyan", "dark-cyan"], /\.dot$/i], ["graphviz-icon", ["medium-orange", "medium-orange"], /\.(?:plantuml|[ip]uml|pu)$/i], ["gvdesign-icon", ["medium-yellow", "medium-yellow"], /\.gvdesign$/i], ["groovy-icon", ["light-blue", "light-blue"], /\.(?:groovy|grt|gtpl|gsp|gvy)$/i, , !1, /^groovy$/, /\.groovy$/i, /^Gr[0o][0o]vy$|^gsp$/i], ["hack-icon", ["medium-orange", "medium-orange"], /\.hh$/i, , !1, , /\.hack$/i, /^Hack$/i], ["hack-icon", ["medium-red", "medium-red"], /\.hhi$/i], ["hack-icon", ["medium-yellow", "medium-yellow"], /\.hack$/i], ["haml-icon", ["medium-yellow", "medium-yellow"], /\.haml$/i, , !1, /^haml$/, /\.haml$/i, /^haml$/i], ["haml-icon", ["medium-maroon", "medium-maroon"], /\.hamlc$/i, , !1, /^hamlc$/, /\.hamlc$/i, /^Haml$|^hamlc$/i], ["haml-icon", ["medium-red", "medium-red"], /\.haml\.deface$/i], ["harbour-icon", ["dark-blue", "dark-blue"], /\.hb$/i, , !1, , /\.harbour$/i, /^Harb[0o]ur$/i], ["hashicorp-icon", ["dark-purple", "dark-purple"], /\.hcl$/i, , !1, , /(?:^|\.)(?:hcl|hashicorp)(?:\.|$)/i, /^Hashic[0o]rp[\W_ \t]?C[0o]nfigurati[0o]n[\W_ \t]?Language$/i], ["hashicorp-icon", ["medium-cyan", "medium-cyan"], /\.workflow$/i], ["haskell-icon", ["medium-purple", "medium-purple"], /\.hs$/i, , !1, /^run(?:ghc|haskell|hugs)$/, /\.source\.haskell$/i, /^Haskell$/i], ["haskell-icon", ["medium-blue", "medium-blue"], /\.hsc$/i, , !1, , /\.hsc2hs$/i, /^Haskell$/i], ["haskell-icon", ["dark-purple", "dark-purple"], /\.c2hs$/i, , !1, , /\.c2hs$/i, /^Haskell$|^C2hs(?:\s*Haskell)?$/i], ["haskell-icon", ["dark-blue", "dark-blue"], /\.lhs$/i, , !1, , /\.latex\.haskell$/i, /^Haskell$|^(?:lhaskell|lhs|Literate\s*Haskell)$/i], ["haskell-icon", ["medium-maroon", "medium-maroon"], /\.hs-boot$|\.hsig$/i], ["haxe-icon", ["medium-orange", "medium-orange"], /\.hx(?:[sm]l|)?$/, , !1, , /(?:^|\.)haxe(?:\.\d+)?$/i, /^Haxe$/i], ["haxedevelop-icon", ["medium-blue", "dark-blue"], /\.hxproj$/i], ["helix-icon", ["medium-blue", "medium-blue"], /^\.p4ignore$/i], ["question-icon", ["medium-blue", "medium-blue"], /\.chm$/i, , !1, , , , /^ITSF/], ["question-icon", ["dark-blue", "dark-blue"], /\.hlp$/i, , !1, , , , /^\?_\x03\0/], ["heroku-icon", ["medium-purple", "medium-purple"], /^(?:Proc|Apt)file$/], ["heroku-icon", ["light-purple", "light-purple"], /\.buildpacks$/i], ["heroku-icon", ["dark-purple", "dark-purple"], /\.slugignore$/i], ["heroku-icon", ["dark-purple", "dark-purple"], /^\.vendor_urls$/], ["hp-icon", ["medium-blue", "medium-blue"], /\.hpgl$/i], ["hjson-icon", ["medium-green", "medium-green"], /\.hjson$/i, , !1, , /\.hjson$/i, /^Hjs[0o]n$/i], ["templeos-icon", ["medium-yellow", "medium-yellow"], /\.hc$/i, , !1, , /\.hc$/, /^H[0o]ly[\W_ \t]?C$/i], ["brew-icon", ["medium-orange", "dark-orange"], /^Brewfile$/], ["hoplon-icon", ["medium-red", "medium-red"], /\.hl$/i], ["houdini-icon", ["medium-orange", "medium-orange"], /\.(?:hipnc|hip|i3d|picnc)$/i], ["houdini-icon", ["medium-cyan", "medium-cyan"], /\.vfl$/i], ["html5-icon", ["medium-orange", "medium-orange"], /\.x?html?$/i, , !1, , /\.html\.basic$/i, /^Html$|^(?:xhtml|htm)$/i, /^<!DOCTYPE\s+html/i], ["html5-icon", ["medium-red", "medium-red"], /\.cshtml$|\.latte$/i, , !1, /^latte$/, /\.latte$/i], ["html5-icon", ["dark-blue", "dark-blue"], /\.gohtml$|\.phtml$/i, , !1, /^gohtml$/, /\.gohtml$/i, /^Html$|^g[0o]html$/i], ["html5-icon", ["medium-purple", "medium-purple"], /\.html\.[hl]?eex$|\.jsp$/i, , !1, , /\.jsp$/i], ["html5-icon", ["dark-purple", "dark-purple"], /\.jspf$/i], ["html5-icon", ["medium-green", "medium-green"], /\.kit$|\.swig$/i, , !1, /^swig$/, /\.swig$/i], ["html5-icon", ["medium-blue", "medium-blue"], /\.isml$/i, , !1, /^isml$/, /\.isml$/i, /^Html$|^isml$/i], ["html5-icon", ["medium-cyan", "medium-cyan"], /\.shtml$/i], ["html5-icon", ["dark-red", "dark-red"], /\.scaml$/i, , !1, /^scaml$/, /\.scaml$/i, /^Html$|^scaml$/i], ["html5-icon", ["medium-red", "medium-red"], /\.vash$/i, , !1, /^vash$/, /\.vash$/i, /^Html$|^vash$/i], ["html5-icon", ["medium-maroon", "medium-maroon"], /\.xht$/i], ["html5-icon", ["medium-blue", "medium-blue"], /\.dtml$/i, , !1, /^dtml$/, /\.dtml$/i, /^Html$|^dtml$/i], ["html5-icon", ["medium-blue", "medium-blue"], /\.mht(?:ml)?$/i, , !1, /^mhtml$/, /\.mhtml$/i, /^Html$|^mhtml$/i], ["husky-icon", ["medium-blue", "dark-blue"], /\.huskyrc$/i], ["hy-icon", ["dark-blue", "dark-blue"], /\.hy$/i, , !1, /^hy$/, /\.hy$/i, /^Hy$|^hylang$/i], ["idl-icon", ["medium-blue", "medium-blue"], /\.dlm$/i, , !1, , /\.idl$/i, /^Idl$/i], ["idris-icon", ["dark-red", "dark-red"], /\.idr$/i, , !1, , /\.(?:idris|ipkg)$/i, /^Idris$/i], ["idris-icon", ["medium-maroon", "medium-maroon"], /\.lidr$/i], ["igorpro-icon", ["dark-red", "dark-red"], /\.ipf$/i], ["image-icon", ["medium-orange", "medium-orange"], /\.a?png$|\.(?:avif|heifs?|hif)$|\.cgm$|\.svgz$|\.pxm$/i, , !1, , , , /^.PNG\r\n\x1A\n/], ["image-icon", ["medium-yellow", "medium-yellow"], /\.gif$|\.ora$|\.sgi$/i, , !1, , , , /^GIF8[97]a/], ["image-icon", ["medium-green", "medium-green"], /\.jpe?g$/i, , !1, , , , /^\xFF\xD8\xFF[\xDB\xE0\xE1]|(?:JFIF|Exif)\0|^\xCF\x84\x01|^\xFF\xD8.+\xFF\xD9$/], ["image-icon", ["medium-blue", "medium-blue"], /\.ico$|\.pxs$/i, , !1, , , , /^\0{2}\x01\0/], ["image-icon", ["dark-blue", "dark-blue"], /\.webp$|\.iff$|\.lbm$|\.liff$|\.nrrd$|\.pcx$|\.vsdx?$/i, , !1, , , , /^RIFF.{4}WEBPVP8/], ["image-icon", ["medium-red", "medium-red"], /\.bmp$|\.pxb$/i, , !1, , , , /^BM/], ["image-icon", ["medium-red", "medium-red"], /\.bpg$/i, , !1, , , , /^BPG\xFB/], ["image-icon", ["medium-orange", "medium-orange"], /\.cin$/i, , !1, , , , /^\x80\x2A\x5F\xD7/], ["image-icon", ["dark-green", "dark-green"], /\.cd5$/i, , !1, , , , /^_CD5\x10\0/], ["image-icon", ["medium-orange", "medium-orange"], /\.cr2$/i, , !1, , , , /^II\*\0\x10\0{3}CR/], ["image-icon", ["medium-pink", "medium-pink"], /\.dcm$|\.mpo$|\.pxls$/i, , !1, , , , /^.{128}DICM/], ["image-icon", ["dark-green", "dark-green"], /\.dds$/i, , !1, , , , /^DDS \|\0{3}/], ["image-icon", ["medium-purple", "medium-purple"], /\.djvu?$|\.pxr$/i, , !1, , , , /^AT&TFORM/], ["image-icon", ["dark-orange", "dark-orange"], /\.dpx$|\.fig$|\.raw$/i, , !1, , , , /^(?:SDPX|XPDS)/], ["image-icon", ["light-blue", "light-blue"], /\.ecw$|\.sct$/i], ["image-icon", ["medium-cyan", "medium-cyan"], /\.fits?$|\.fts$/i, , !1, , , , /^SIMPLE  =/], ["image-icon", ["dark-red", "dark-red"], /\.flif$|\.hdp$|\.heic$|\.jxr$|\.wdp$/i, , !1, , , , /^FLIF/], ["image-icon", ["medium-orange", "medium-orange"], /\.(?:gsrc|gr(?:emli)?n)$/i, , !1, , /^source\.gremlin$/, /^Image$|^Gremlin$/i, /^(?:sun)?gremlinfile/], ["image-icon", ["medium-blue", "medium-blue"], /\.hdr$/i, , !1, , , , /^#\?RADIANCE\n/], ["image-icon", ["medium-pink", "medium-pink"], /\.icns$/i, , !1, , , , /^icns/], ["image-icon", ["dark-green", "dark-green"], /\.(?:jp[f2xm]|j2c|mj2)$/i, , !1, , , , /^\0{3}\fjP {2}/], ["image-icon", ["dark-cyan", "dark-cyan"], /\.jps$/i], ["image-icon", ["medium-cyan", "medium-cyan"], /\.jng$/i, , !1, , , , /^\x8BJNG\r\n\x1A\n/], ["image-icon", ["medium-orange", "medium-orange"], /\.mng$/i, , !1, , , , /^.MNG\r\n\x1A\n/], ["image-icon", ["light-purple", "light-purple"], /\.pict$/i], ["image-icon", ["dark-orange", "dark-orange"], /\.tga$/i, , !1, , , , /TRUEVISION-XFILE\.\0$/], ["image-icon", ["medium-red", "medium-red"], /\.tiff?$/i, , !1, , , , /^II\x2A\0|^MM\0\x2A/], ["image-icon", ["dark-maroon", "dark-maroon"], /\.wbm$/i], ["image-icon", ["dark-grey", "dark-grey"], /\.wbmp$/i], ["image-icon", ["medium-red", "medium-red"], /\.(?:wmf|emf|wmz|apm)$/i, , !1, , , , /^[\x01\x02]\0\t\0|^×ÍÆ\x9A/], ["image-icon", ["dark-purple", "dark-purple"], /\.xwd$/i], ["image-icon", ["medium-cyan", "dark-cyan"], /\.pxg$/i], ["imba-icon", ["medium-yellow", "medium-yellow"], /\.imba$/i, , !1, , /\.imba$/, /^Imba$/i], ["imgbot-icon", ["dark-cyan", "dark-cyan"], /^\.imgbotconfig$/i], ["inform7-icon", ["medium-blue", "medium-blue"], /\.ni$/i, , !1, , /\.inform-?7?$/i, /^Inf[0o]rm[\W_ \t]?7$|^i7$/i], ["inform7-icon", ["dark-blue", "dark-blue"], /\.i7x$/i], ["ink-icon", ["dark-blue", "dark-blue"], /\.ink$/i, , !1, , /\.ink$/i, /^Ink$|^Inkle$/i], ["ink-icon", ["dark-purple", "dark-purple"], /\.ink2$/i], ["inkscape-icon", ["dark-purple", "dark-purple"], /\.inx$/i], ["inno-icon", ["dark-blue", "dark-blue"], /\.iss$/i, , !1, , /\.inno$/i, /^Inn[0o][\W_ \t]?Setup$/i], ["inno-icon", ["medium-cyan", "medium-cyan"], /\.isl$/i], ["io-icon", ["dark-purple", "dark-purple"], /\.io$/i, , !1, /^io$/, /^source\.io$/i, /^I[0o]$/i], ["ioke-icon", ["medium-red", "medium-red"], /\.ik$/i, , !1, /^ioke$/], ["isabelle-icon", ["dark-red", "dark-red"], /\.thy$/i, , !1, , /\.isabelle\.theory$/i, /^Isabelle$/i], ["isabelle-icon", ["dark-blue", "dark-blue"], /^ROOT$/], ["j-icon", ["light-blue", "light-blue"], /\.ijs$/i, , !1, /^jconsole$/, /\.j$/i, /^J$/i], ["jade-icon", ["medium-red", "medium-red"], /\.jade$/i, , !1, , /\.jade$/i, /^Jade$/i], ["jake-icon", ["medium-maroon", "dark-maroon"], /^Jakefile$/], ["jake-icon", ["medium-yellow", "dark-yellow"], /\.jake$/i], ["java-icon", ["medium-purple", "medium-purple"], /\.java$/i, , !1, , /\.java$/i, /^Java$/i], ["java-icon", ["medium-maroon", "medium-maroon"], /\.class$/i], ["js-icon", ["medium-yellow", "dark-yellow"], /\.js$|\.es\d?$/i, , !1, /^(?:node|chakra|d8|iojs|g?js|qjs(?:c?|bnc?)?|mujs|rhino|slimerjs|v8(?:-shell)?)$/, /\.js$/i, /^Java[\W_ \t]?Script$|^(?:js|node)$/i], ["js-icon", ["medium-orange", "dark-orange"], /\._js$/i], ["js-icon", ["medium-maroon", "dark-maroon"], /\.jsb$|\.jse$|\.dust$/i], ["js-icon", ["medium-blue", "dark-blue"], /\.jsm$|\.mjs$|\.xsjslib$/i], ["js-icon", ["medium-green", "dark-green"], /\.jss$|\.cjs$/i], ["js-icon", ["medium-pink", "dark-pink"], /\.sjs$/i], ["js-icon", ["medium-red", "dark-red"], /\.ssjs$|\.jscript$|\.jslib$/i], ["js-icon", ["medium-orange", "medium-orange"], /\.jspre$/i], ["js-icon", ["medium-purple", "dark-purple"], /\.xsjs$/i], ["js-icon", ["dark-yellow", "dark-yellow"], /\.htc$/i], ["js-icon", ["medium-purple", "medium-purple"], /\.pac$/i], ["js-icon", ["dark-purple", "dark-purple"], /\.pjs$/i], ["js-icon", ["medium-blue", "medium-blue"], /([\/\\])cartridge\1scripts(?:\1.+)?\1[^\\\/]+\.ds$/i, , !0], ["jekyll-icon", ["medium-green", "medium-green"], /\.nojekyll$/i], ["jenkins-icon", ["medium-red", "dark-red"], /^Jenkinsfile$/], ["jinja-icon", ["dark-red", "dark-red"], /\.jinja$/i, , !1, , /\.jinja$/i, /^Jinja$|^(?:django|htmldjango|html\+django\/jinja|html\+jinja)$/i], ["jinja-icon", ["medium-red", "medium-red"], /\.j(?:inja)?2$/i], ["jison-icon", ["medium-blue", "medium-blue"], /\.jison$/i, , !1, /^jison$/, /\.jison$/i, /^jis[0o]n$/i], ["jison-icon", ["medium-cyan", "medium-cyan"], /\.jisonlex$/i, , !1, /^JisonLex$/, /\.JisonLex$/i, /^Jis[0o]n$|^Jis[0o]n[\W_ \t]?Lex$/i], ["jolie-icon", ["dark-pink", "dark-pink"], /\.ol$/i, , !1, /^jolie$/, /\.jolie$/i, /^j[0o]lie$/i], ["jolie-icon", ["medium-red", "medium-red"], /\.iol$/i], ["json-icon", ["medium-cyan", "medium-cyan"], /\.(?:h|geo|topo)?json$/i, , !1, , /\.json$/i, /^Js[0o]n$/i], ["json-icon", ["dark-blue", "dark-blue"], /\.jsonc$/i, , !1, , /\.jsonc$/i, /^Js[0o]n$|^Js[0o]n[\W_ \t]?with[\W_ \t]?C[0o]mments$/i], ["json-icon", ["medium-blue", "medium-blue"], /\.rsj$/i], ["jsonld-icon", ["medium-blue", "medium-blue"], /\.jsonld$/i], ["json5-icon", ["dark-yellow", "dark-yellow"], /\.json5$/i, , !1, , /\.json5$/i, /^Js[0o]n5$/i], ["sql-icon", ["medium-blue", "medium-blue"], /\.jq$/i, , !1, , /\.jq$/i, /^Js[0o]niq$/i], ["jsonnet-icon", ["dark-blue", "dark-blue"], /\.jsonnet$/i, , !1, /^jsonnet$/, /\.jsonnet$/i, /^js[0o]nnet$/i], ["jsonnet-icon", ["medium-blue", "medium-blue"], /\.libsonnet$/i], ["jsx-icon", ["medium-blue", "dark-blue"], /\.jsx$/i, , !1, , /\.jsx$/i, /^Jsx$/i], ["julia-icon", ["medium-purple", "medium-purple"], /\.jl$/i, , !1, /^julia$/, /\.julia$/i, /^Julia$/i], ["junos-icon", ["medium-cyan", "medium-cyan"], /\.jos$/i, , !1, , /\.junos$/i, /^Jun[0o]s$|^(?:Juniper\W*)Jun\s*os(?:\W*Config)?$/i], ["junos-icon", ["medium-blue", "medium-blue"], /\.slax$/i, , !1, /^slax$/, /\.slax$/i, /^Jun[0o]s$|^slax$/i], ["jupyter-icon", ["dark-orange", "dark-orange"], /\.ipynb$/i, , !1, , /\.ipynb$/i, /^(?:ipynb|(?:Jupyter|IPython)\s*Notebook)$/i], ["jupyter-icon", ["dark-cyan", "dark-cyan"], /^Notebook$/], ["kaitai-icon", ["medium-maroon", "medium-maroon"], /\.ksy$/i], ["kos-icon", ["dark-green", "dark-green"], /\.ks$/i, , !1, , /^source\.kerboscript$/i, /^Kerb[0o][\W_ \t]?Script$/i], ["keynote-icon", ["medium-blue", "medium-blue"], /\.keynote$/i], ["keynote-icon", ["dark-blue", "dark-blue"], /\.knt$/i], ["kibo-icon", ["light-yellow", "light-yellow"], /\.hypr$/i], ["kibo-icon", ["dark-orange", "dark-orange"], /\.hypr\.live$/i], ["kicad-icon", ["dark-blue", "dark-blue"], /\.kicad_pcb$|^fp-lib-table$/i, , !1, , /^source\.pcb\.board$|\.kicad(?=$|\.)/, /^Ki[\W_ \t]?Cad$/i], ["kicad-icon", ["dark-red", "dark-red"], /\.kicad_pcb-bak$/i], ["kicad-icon", ["medium-green", "medium-green"], /\.kicad_mod$/i], ["kicad-icon", ["medium-cyan", "medium-cyan"], /\.kicad_wks$/i], ["kivy-icon", ["dark-maroon", "dark-maroon"], /\.kv$/i, , !1, , /\.kv$/i, /^Kivy$/i], ["earth-icon", ["medium-green", "medium-green"], /\.kml$/i], ["kotlin-icon", ["dark-blue", "dark-blue"], /\.kt$/i, , !1, /^kotlin$/, /\.kotlin$/i, /^k[0o]tlin$/i], ["kotlin-icon", ["medium-blue", "medium-blue"], /\.ktm$/i], ["kotlin-icon", ["medium-orange", "medium-orange"], /\.kts$/i], ["krl-icon", ["medium-blue", "medium-blue"], /\.krl$/i, , !1, , /\.krl$/i, /^Krl$/i], ["kusto-icon", ["medium-blue", "medium-blue"], /\.(?:csl|kusto)$/i, , !1, , /\.source\.kusto$/i, /^Kust[0o]$|Kusto (?:Query.?Language|Explorer)|^KQL$/i], ["labview-icon", ["dark-blue", "dark-blue"], /\.lv(?:proj|lib)$/i], ["laravel-icon", ["medium-orange", "medium-orange"], /\.blade(?:\.php)?$/i, , !1, , /\.php\.blade$/i, /^Laravel$/i], ["lark-icon", ["dark-blue", "dark-blue"], /\.lark$/i, , !1, /^lark$/, /\.source\.lark$/i, /^Lark$/i], ["lasso-icon", ["dark-blue", "dark-blue"], /\.lasso$|\.las$/i, , !1, , /\.lasso$/i, /^Lass[0o]$|^lass[0o]script$/i], ["lasso-icon", ["medium-blue", "medium-blue"], /\.lasso8$/i], ["lasso-icon", ["medium-purple", "medium-purple"], /\.lasso9$/i], ["lasso-icon", ["dark-red", "dark-red"], /\.lassoapp$/i], ["lasso-icon", ["medium-red", "medium-red"], /\.ldml$/i], ["latino-icon", ["medium-blue", "dark-blue"], /\.lat$/i, , !1, , /\.source\.latino$/i, /^Latin[0o]$/i], ["lean-icon", ["dark-purple", "dark-purple"], /\.lean$/i, , !1, /^lean$/, /\.lean$/i, /^lean$/i], ["lean-icon", ["dark-red", "dark-red"], /\.hlean$/i], ["graph-icon", ["medium-blue", "medium-blue"], /\.ledger$/i, , !1, /^ledger$/, /\.ledger$/i, /^ledger$/i], ["graph-icon", ["medium-green", "medium-green"], /\.hledger$/i], ["lektor-icon", ["dark-purple", "dark-purple"], /\.lr$/i], ["lektor-icon", ["medium-orange", "medium-orange"], /\.lektorproject$/i], ["lex-icon", ["medium-cyan", "medium-cyan"], /\.l(?:e?x)?$/i, , !1, /^lex$/, /\.lex$/i, /^lex$/i], ["lex-icon", ["dark-red", "dark-red"], /\.flex$/i], ["lfe-icon", ["dark-red", "dark-red"], /\.lfe$/i], ["lightwave-icon", ["medium-red", "medium-red"], /\.lwo$/i], ["lightwave-icon", ["medium-blue", "medium-blue"], /\.lws$/i], ["lilypond-icon", ["medium-green", "medium-green"], /\.ly$/i, , !1, , /\.(?:At)?lilypond/i, /^Lily\s*Pond$/i], ["lilypond-icon", ["dark-green", "dark-green"], /\.ily$/i], ["link-icon", ["dark-blue", "dark-blue"], /\.url$/i], ["linqpad-icon", ["dark-pink", "dark-pink"], /\.linq$/i], ["lisp-icon", ["dark-red", "dark-red"], /\.lisp$/i, , !1, /^lisp$/, /\.lisp$/i, /^lisp$/i], ["lisp-icon", ["medium-red", "medium-red"], /\.lsp$/i, , !1, /^newlisp$/, /\.newlisp$/i, /^Lisp$|^newlisp$/i], ["lisp-icon", ["medium-maroon", "medium-maroon"], /\.nl$/i], ["lisp-icon", ["medium-blue", "medium-blue"], /\.ny$|\.sexp$/i], ["lisp-icon", ["medium-purple", "medium-purple"], /\.podsl$/i], ["lisp-icon", ["dark-purple", "dark-purple"], /\.sbclrc$/i], ["ls-icon", ["medium-blue", "medium-blue"], /\.ls$/i, , !1, , /\.livescript$/i, /^Live[\W_ \t]?Script$|^(?:ls|live-script)$/i], ["ls-icon", ["dark-blue", "dark-blue"], /\._ls$/i], ["ls-icon", ["medium-green", "medium-green"], /^Slakefile$/], ["llvm-icon", ["dark-green", "dark-green"], /\.ll$/i, , !1, /^llvm$/, /\.llvm$/i, /^llvm$/i], ["llvm-icon", ["medium-yellow", "dark-yellow"], /\.clang-(?:format|tidy)$/i], ["llvm-icon", ["medium-red", "dark-red"], /^ubsan\.blacklist$/i], ["mobile-icon", ["dark-blue", "dark-blue"], /\.xm$/i, , !1, /^logos$/, /\.logos$/i, /^l[0o]g[0o]s$/i], ["mobile-icon", ["dark-red", "dark-red"], /\.xi$/i], ["logtalk-icon", ["medium-red", "medium-red"], /\.(?:logtalk|lgt)$/i, , !1, , /\.logtalk$/i, /^L[0o]gtalk$/i], ["lookml-icon", ["medium-purple", "medium-purple"], /\.(?:lookml|lkml)$/i], ["lsl-icon", ["medium-cyan", "medium-cyan"], /\.lsl$/i, , !1, /^lsl$/, /\.lsl$/i, /^lsl$/i], ["lsl-icon", ["dark-cyan", "dark-cyan"], /\.lslp$/i], ["lua-icon", ["medium-blue", "medium-blue"], /\.lua$/i, , !1, /^lua$/, /\.lua$/i, /^lua$/i], ["lua-icon", ["dark-blue", "dark-blue"], /\.pd_lua$/i], ["lua-icon", ["dark-purple", "dark-purple"], /\.rbxs$/i], ["lua-icon", ["dark-red", "dark-red"], /\.wlua$/i], ["lua-icon", ["dark-green", "dark-green"], /^Lakefile$/i], ["lua-icon", ["medium-green", "medium-green"], /\.luacheckrc$/i], ["lua-icon", ["medium-purple", "medium-purple"], /\.rockspec$/i], ["macaulay2-icon", ["light-cyan", "dark-cyan"], /\.m2$/i, , !1, /^m2$/, /\.macaulay2$/i, /^Macaulay2$|^m2$/i], ["icon-mail", ["medium-blue", "medium-blue"], /\.eml$/i, , !1, , /^text\.eml\.basic$/, /^Mail$/i], ["icon-mail", ["medium-red", "medium-red"], /\.mbo?x$/i], ["checklist-icon", ["medium-yellow", "medium-yellow"], /^Makefile|^makefile$/, , !1, /^make$/, /\.makefile$/i, /^Makefile$|^(?:bsdmake|make|mf)$/i], ["checklist-icon", ["medium-yellow", "medium-yellow"], /\.(?:mk|mak|make)$|^mkfile$/i], ["checklist-icon", ["medium-red", "medium-red"], /^BSDmakefile$|^makefile\.sco$|\.am$/i], ["checklist-icon", ["medium-green", "medium-green"], /^GNUmakefile$/i], ["checklist-icon", ["medium-blue", "medium-blue"], /^Kbuild$/], ["checklist-icon", ["dark-blue", "dark-blue"], /^\.?qmake$/i], ["checklist-icon", ["dark-blue", "dark-blue"], /^DEPS$/], ["checklist-icon", ["medium-blue", "medium-blue"], /\.mms$/i], ["checklist-icon", ["light-blue", "light-blue"], /\.mmk$/i], ["checklist-icon", ["dark-purple", "dark-purple"], /\.pri$/i], ["checklist-icon", ["medium-cyan", "medium-cyan"], /^justfile$/i, , !1, /^just$/, /\.just$/i, /^Makefile$|^just$/i], ["mako-icon", ["dark-blue", "dark-blue"], /\.mak?o$/i, , !1, , /\.mako$/i, /^Mak[0o]$/i], ["mapbox-icon", ["medium-cyan", "medium-cyan"], /\.mss$/i, , !1, , /\.mss$/i, /^Mapb[0o]x$|^Carto(?:CSS)?$/i], ["markdown-icon", ["medium-blue", "medium-blue"], /\.(?:md(?:te?xt)?|mdown|markdown|mkd|mkdown|mdwn|mkdn|ron|pmd|jmd)$/i, , !1, , /(?:^|\.)[gp]fm|j?md|markdown(?:\.|$)/i, /^(?:CommonMark|GFM|Pandoc)$|\bMarkdown\b/i], ["markdownlint-icon", ["medium-red", "medium-red"], /^\.?mdlrc(?:\.style)?\.rb$/i], ["markdownlint-icon", ["dark-cyan", "dark-cyan"], /^\.?mdlrc$/i], ["mathematica-icon", ["dark-red", "dark-red"], /\.mathematica$|\.nbp$/i, , !1, , /\.mathematica$/i, /^Mathematica$|^mma$/i], ["mathematica-icon", ["medium-orange", "medium-orange"], /\.ma$/i], ["mathematica-icon", ["medium-maroon", "medium-maroon"], /\.mt$/i], ["mathematica-icon", ["dark-orange", "dark-orange"], /\.nb$/i], ["matlab-icon", ["medium-yellow", "medium-yellow"], /\.matlab$/i, , !1, /^matlab$/, /\.matlab$/i, /^matlab$/i], ["matlab-icon", ["dark-maroon", "dark-maroon"], /\.mlappinstall$/i], ["matlab-icon", ["medium-cyan", "medium-cyan"], /\.mlpkginstall$/i], ["matlab-icon", ["dark-red", "dark-red"], /\.mltbx$|\.slxp$/i], ["matlab-icon", ["medium-red", "medium-red"], /\.mdlp$|\.slx$/i], ["matlab-icon", ["dark-purple", "dark-purple"], /\.mn$/i], ["matlab-icon", ["medium-maroon", "medium-maroon"], /\.sldd$/i], ["max-icon", ["dark-purple", "dark-purple"], /\.maxpat$/i], ["max-icon", ["medium-red", "medium-red"], /\.maxhelp$/i], ["max-icon", ["medium-blue", "medium-blue"], /\.maxproj$/i], ["max-icon", ["medium-purple", "medium-purple"], /\.mxt$/i], ["max-icon", ["medium-green", "medium-green"], /\.pat$/i], ["maxscript-icon", ["dark-blue", "dark-blue"], /\.ms$/i, , !1, , /\.maxscript$/i, /^Maxscript$/i], ["maxscript-icon", ["dark-purple", "dark-purple"], /\.mcr$/i], ["maxscript-icon", ["medium-red", "medium-red"], /\.mce$/i], ["maxscript-icon", ["dark-cyan", "dark-cyan"], /\.max$/i], ["maxscript-icon", ["medium-cyan", "medium-cyan"], /\.3ds$/i], ["maya-icon", ["dark-cyan", "dark-cyan"], /\.mb$/i], ["maya-icon", ["dark-blue", "dark-blue"], /\.mel$/i], ["maya-icon", ["dark-purple", "dark-purple"], /\.mcf[ip]$/i], ["mdx-icon", ["medium-orange", "medium-orange"], /\.mdx$/i], ["mediawiki-icon", ["medium-yellow", "medium-yellow"], /\.mediawiki$/i, , !1, /^mediawiki$/, /\.mediawiki$/i, /^mediawiki$/i], ["mediawiki-icon", ["medium-orange", "medium-orange"], /\.wiki$/i], ["bullhorn-icon", ["medium-orange", "medium-orange"], /^\.mention-bot$/i], ["hg-icon", ["medium-grey", "medium-grey"], /\.hgignore$/i], ["hg-icon", ["dark-grey", "dark-grey"], /\.?hgrc$/i], ["hg-icon", ["dark-cyan", "dark-cyan"], /\.hgsub$/i], ["hg-icon", ["medium-cyan", "medium-cyan"], /\.hgsubstate$/i], ["mercury-icon", ["medium-cyan", "medium-cyan"], /\.moo$/i, , !1, /^mmi$/, /\.mercury$/i, /^Mercury$/i], ["mermaid-icon", ["medium-blue", "medium-blue"], /\.(?:mmd|mermaid)$/i, , !1, , /\.mermaid$/i, /^Mermaid$/i], ["metal-icon", ["dark-cyan", "dark-cyan"], /\.metal$/i], ["metapost-icon", ["dark-red", "dark-red"], /\.mp$/i, , !1, /^metapost$/, /\.metapost$/i, /^metap[0o]st$/i], ["metapost-icon", ["dark-green", "dark-green"], /\.mf$/i, , !1, /^metafont$/, /\.metafont$/i, /^Meta[\W_ \t]?P[0o]st$|^metaf[0o]nt$/i], ["access-icon", ["dark-maroon", "dark-maroon"], /\.accda$/i], ["access-icon", ["medium-maroon", "medium-maroon"], /\.accdb$/i], ["access-icon", ["medium-green", "medium-green"], /\.accde$/i], ["access-icon", ["medium-red", "medium-red"], /\.accdr$/i], ["access-icon", ["dark-red", "dark-red"], /\.accdt$/i], ["access-icon", ["light-maroon", "light-maroon"], /\.adn$|\.laccdb$/i], ["access-icon", ["dark-purple", "dark-purple"], /\.mdw$/i], ["excel-icon", ["dark-orange", "dark-orange"], /\.xls$/i], ["excel-icon", ["dark-green", "dark-green"], /\.xlsx$/i], ["excel-icon", ["medium-green", "medium-green"], /\.xlsm$/i], ["excel-icon", ["medium-red", "medium-red"], /\.xlsb$/i], ["excel-icon", ["dark-cyan", "dark-cyan"], /\.xlt$/i], ["excel-icon", ["medium-orange", "medium-orange"], /\.xla$/i], ["excel-icon", ["dark-red", "dark-red"], /\.xlam$/i], ["excel-icon", ["medium-maroon", "medium-maroon"], /\.xltm$/i], ["excel-icon", ["dark-maroon", "dark-maroon"], /\.xltx$/i], ["infopath-icon", ["dark-purple", "dark-purple"], /\.(?:infopathxml|xsn|xsf|xtp2)$/i], ["lync-icon", ["dark-blue", "dark-blue"], /\.o?crec$/i, , !1, , , , /^\r\n\x14\x15\0\x07\n\r\x06\x01\v/], ["onenote-icon", ["dark-purple", "dark-purple"], /\.one$/i], ["outlook-icon", ["medium-blue", "medium-blue"], /\.pst$|\.oab$/i], ["outlook-icon", ["dark-blue", "dark-blue"], /\.bcmx$/i], ["outlook-icon", ["medium-red", "medium-red"], /\.otm$/i], ["outlook-icon", ["medium-maroon", "medium-maroon"], /\.oft$/i], ["outlook-icon", ["dark-red", "dark-red"], /\.nk2$/i], ["powerpoint-icon", ["dark-red", "dark-red"], /\.pps$/i], ["powerpoint-icon", ["medium-orange", "medium-orange"], /\.ppsx$/i], ["powerpoint-icon", ["dark-orange", "dark-orange"], /\.ppt$/i], ["powerpoint-icon", ["medium-red", "medium-red"], /\.pptx$/i], ["powerpoint-icon", ["medium-maroon", "medium-maroon"], /\.potm$/i], ["msproject-icon", ["medium-green", "medium-green"], /\.mpp$/i], ["msproject-icon", ["dark-green", "dark-green"], /\.mpt$/i], ["publisher-icon", ["dark-cyan", "dark-cyan"], /\.puz$/i], ["visio-icon", ["dark-blue", "dark-blue"], /\.vsdx$|\.vs[st][mx]?$/i], ["visio-icon", ["dark-purple", "dark-purple"], /\.vdw$/i], ["visio-icon", ["medium-red", "medium-red"], /\.vdx$/i], ["visio-icon", ["medium-blue", "medium-blue"], /\.vsd$/i], ["visio-icon", ["dark-maroon", "dark-maroon"], /\.vsdm$/i], ["visio-icon", ["medium-green", "medium-green"], /\.vsw$/i], ["visio-icon", ["dark-red", "dark-red"], /\.vsx$|\.vtx$/i], ["visio-icon", ["medium-cyan", "medium-cyan"], /\.vrd$/i], ["visio-icon", ["medium-orange", "medium-orange"], /\.vsl$/i], ["word-icon", ["medium-blue", "medium-blue"], /\.doc$/i], ["word-icon", ["dark-blue", "dark-blue"], /\.docx$|\.wll$/i], ["word-icon", ["medium-maroon", "medium-maroon"], /\.docm$/i], ["word-icon", ["dark-cyan", "dark-cyan"], /\.docxml$/i], ["word-icon", ["dark-maroon", "dark-maroon"], /\.dotm$/i], ["word-icon", ["medium-cyan", "medium-cyan"], /\.dotx$/i], ["word-icon", ["medium-orange", "medium-orange"], /\.wri$/i], ["minecraft-icon", ["dark-green", "dark-green"], /^mcmod\.info$|\.mcpack$|^pack\.mcmeta$/i, , !1, , /\.forge-config$/i, /^Minecraft$/i], ["minecraft-icon", ["light-green", "light-green"], /\.mcfunction$/i], ["minecraft-icon", ["medium-green", "medium-green"], /\.mclevel$/i], ["minecraft-icon", ["medium-blue", "medium-blue"], /\.mcworld$/i], ["minecraft-icon", ["dark-green", "dark-green"], /\.png\.mcmeta$/], ["minizinc-icon", ["medium-blue", "medium-blue"], /\.mzn$/i, , !1, /^mzn$/, /\.mzn$/i, /^Mini[\W_ \t]?Zinc$|^mzn$/i], ["minizinc-icon", ["dark-blue", "dark-blue"], /\.dzn$/i], ["mint-icon", ["medium-green", "medium-green"], /\.mint$/i, , !1, , /\.source\.mint$/i, /^Mint$/i], ["mirah-icon", ["medium-blue", "medium-blue"], /\.dr?uby$/g, , !1, /^mirah$/, /\.mirah$/i, /^mirah$/i], ["mirah-icon", ["light-blue", "light-blue"], /\.mir(?:ah)?$/g], ["mirc-icon", ["medium-red", "medium-red"], /\.mrc$/i, , !1, , /\.mrc$/i, /^m[\W_ \t]?Irc$/i], ["mjml-icon", ["medium-red", "medium-red"], /\.mjml$/i, , !1, /^mjml$/, /\.mjml$/i, /^mjml$/i], ["mjml-icon", ["medium-orange", "medium-orange"], /\.mjmlslim$/i], ["model-icon", ["medium-red", "medium-red"], /\.obj$|\.geo(?:m|metry)?$|\.mdl$/i, , !1, , /\.wavefront\.obj$/i], ["model-icon", ["dark-blue", "dark-blue"], /\.mtl$|\.c4d$|\.fnc$/i, , !1, , /\.wavefront\.mtl$/i], ["model-icon", ["medium-cyan", "medium-cyan"], /\.shader$/i, , !1, , /\.(?:shader(?:code|lab)|cg)(?=\.|$)/i, /^Shader[\W_ \t]?Lab$/i], ["model-icon", ["medium-purple", "medium-purple"], /\.comp$/i], ["model-icon", ["medium-green", "medium-green"], /\.tesc$|\.tese$/i], ["model-icon", ["dark-cyan", "dark-cyan"], /\.cginc$/i], ["model-icon", ["medium-orange", "medium-orange"], /\.dxf$|\.u3d$|\.(?:ste?p|p21)$/i, , !1, , /\.step-file$/i, , /^ISO-10303-21/], ["model-icon", ["dark-orange", "dark-orange"], /\.dwg$/i], ["model-icon", ["dark-red", "dark-red"], /\.ply$/i, , !1, , , , /^ply|^EPLYBNDS/], ["model-icon", ["dark-green", "dark-green"], /\.stl$/i], ["model-icon", ["dark-blue", "dark-blue"], /\.(?:rviz|vcg)$/i, , !1, /^rviz$/, /\.rviz$/i, /^rviz$/i], ["modelica-icon", ["medium-red", "dark-red"], /\.mo$/i, , !1, , /\.modelica(?:script)?$/i, /^M[0o]delica$/i], ["modo-icon", ["medium-cyan", "medium-cyan"], /\.lxo$/i], ["modula2-icon", ["medium-blue", "medium-blue"], /\.mod$/i, , !1, , /(?:^|\.)modula-?2(?:\.|$)/i, /^M[0o]dula[\W_ \t]?2$/i], ["modula2-icon", ["medium-green", "medium-green"], /\.def$/i], ["modula3-icon", ["medium-blue", "medium-blue"], /\.i3$/i, , !1, , /(?:^|\.)modula-?3(?:\.|$)/i, /^M[0o]dula[\W_ \t]?3$/i], ["modula3-icon", ["medium-green", "medium-green"], /\.ig$/i], ["modula3-icon", ["dark-blue", "dark-blue"], /\.m3$/i], ["modula3-icon", ["dark-green", "dark-green"], /\.mg$/i], ["modula3-icon", ["medium-red", "medium-red"], /^m3(?:makefile|overrides)$/i, , !1, /^quake$/, /\.quake$/i, /^M[0o]dula[\W_ \t]?3$|^quake$/i], ["moho-icon", ["medium-orange", "medium-orange"], /\.moho$/i], ["moho-icon", ["medium-blue", "medium-blue"], /\.mohoaction$/i], ["moho-icon", ["medium-maroon", "medium-maroon"], /\.mohobrush$/i], ["moho-icon", ["medium-yellow", "medium-yellow"], /\.mohoexport$/i], ["moho-icon", ["medium-purple", "medium-purple"], /\.mohostyle$/i], ["monkey-icon", ["medium-maroon", "medium-maroon"], /\.monkey$/i, , !1, , /\.monkey$/i, /^M[0o]nkey$/i], ["monotone-icon", ["dark-purple", "dark-purple"], /\.mtn-ignore$/i], ["moon-icon", ["medium-yellow", "medium-yellow"], /\.moon$/i, , !1, /^moon$/, /\.moon$/i, /^M[0o][0o]n[\W_ \t]?Script$/i], ["mruby-icon", ["medium-red", "medium-red"], /\.mrb$/i, , !1, /^mruby$/], ["msql-icon", ["medium-purple", "medium-purple"], /\.dsql$/i], ["mupad-icon", ["medium-red", "medium-red"], /\.mu$/i], ["music-icon", ["medium-orange", "medium-orange"], /\.chord$/i], ["music-icon", ["dark-blue", "dark-blue"], /\.midi?$/i, , !1, , , , /^MThd/], ["music-icon", ["dark-red", "dark-red"], /\.pd$/i], ["mustache-icon", ["medium-orange", "medium-orange"], /\.(?:hb[st]|handlebars|(?:mu)?stache)$/i, , !1, , /(?:^|\.)(?:mustache|handlebars)(?:\.|$)/i, /^Mustache$|^(?:hbs|htmlbars|handlebars)$/i], ["nano-icon", ["medium-blue", "medium-blue"], /\.nanorc$/i, , !1, , /\.nanorc(?=\.|$)/i, /^Nan[0o]$/i], ["nant-icon", ["medium-orange", "medium-orange"], /\.build$/i, , !1, , /\.nant-build$/i, /^Nant$/i], ["nasm-icon", ["dark-blue", "dark-blue"], /\.nasm$/i], ["earth-icon", ["medium-green", "medium-green"], /\.ncl$/i, , !1, , /\.ncl$/i, /^Ncar[\W_ \t]?C[0o]mmand[\W_ \t]?Language[\W_ \t]?\(?Ncl\)?$/i], ["ndepend-icon", ["medium-blue", "medium-blue"], /\.nd?proj$/i], ["neko-icon", ["medium-orange", "medium-orange"], /\.neko$/i, , !1, /^neko$/, /\.neko$/i, /^nek[0o]$/i], ["neo4j-icon", ["medium-blue", "dark-blue"], /\.cyp(?:her)?$/i, , !1, , /\.neo4j$/i, /^Ne[0o]4[\W_ \t]?J$/i], ["neon-icon", ["medium-grey", "medium-grey"], /\.neon$/i, , !1, , /\.neon$/i, /^Ne[0o]n$/i], ["nessus-icon", ["medium-cyan", "dark-cyan"], /\.nasl$/i, , !1, /^nasl$/, /\.nasl$/i, /^Nessus$/i], ["amx-icon", ["medium-blue", "medium-blue"], /\.axs$/i], ["amx-icon", ["dark-blue", "dark-blue"], /\.axi$/i], ["netlogo-icon", ["medium-red", "medium-red"], /\.nlogo$/i], ["nextflow-icon", ["medium-green", "medium-green"], /\.nf$/i, , !1, /^nextflow$/, /\.nextflow$/i, /^nextfl[0o]w$/i], ["nib-icon", ["dark-orange", "dark-orange"], /\.nib$/i], ["nickle-icon", ["medium-grey", "dark-grey"], /\.5c$/i, , !1, /^nickle$/, /\.nickle$/i, /^Nickle$/i], ["nimrod-icon", ["medium-green", "medium-green"], /\.nim(?:rod)?$/i, , !1, , /\.nim$/i, /^Nim$|^Nimr[0o]d$/i], ["nimble-icon", ["medium-grey", "medium-grey"], /\.nimble$/i], ["shuriken-icon", ["medium-blue", "medium-blue"], /\.ninja$/i, , !1, /^ninja$/, /\.ninja$/i, /^ninja$/i], ["n64-icon", ["dark-cyan", "dark-cyan"], /\.n64$/i], ["n64-icon", ["dark-green", "dark-green"], /\.z64$/i], ["nit-icon", ["dark-green", "dark-green"], /\.nit$/i, , !1, , /\.nit$/i, /^Nit$/i], ["nix-icon", ["medium-cyan", "medium-cyan"], /\.nix$/i, , !1, , /\.nix$/i, /^Nix$|^nix[0o]s$/i], ["nmap-icon", ["dark-blue", "dark-blue"], /\.nse$/i, , !1, , /\.nmap$/i, /^Nmap$/i], ["node-icon", ["medium-green", "medium-green"], /\.njs$|\.nvmrc$/i], ["node-icon", ["dark-green", "dark-green"], /\.node$|\.node-version$|\.node_repl_history$/i], ["node-icon", ["dark-green", "dark-green"], /^BUNDLED_NODE_VERSION$/], ["nokogiri-icon", ["medium-red", "medium-red"], /^\.?nokogirirc(?:$|\.)/i], ["nomad-icon", ["medium-green", "medium-green"], /\.nomad$/i], ["noon-icon", ["dark-grey", "dark-grey"], /\.noon$/i, , !1, /^noon$/, /\.noon$/i, /^N[0o][0o]n$/i], ["nsis-icon", ["medium-purple", "medium-purple"], /\.nsi$/i, , !1, /^nsis$/, /\.nsis$/i, /^nsis$/i], ["nsis-icon", ["dark-cyan", "dark-cyan"], /\.nsh$/i], ["recycle-icon", ["light-green", "light-green"], /\.nu$/i, , !1, /^nush$/, /\.nu$/i, /^Nu$|^nush$/i], ["recycle-icon", ["dark-green", "dark-green"], /^Nukefile$/], ["nuget-icon", ["medium-blue", "medium-blue"], /\.nuspec$/i], ["nuget-icon", ["medium-purple", "medium-purple"], /\.nupkg$/i], ["nuget-icon", ["dark-purple", "dark-purple"], /\.pkgproj$/i], ["nuget-icon", ["medium-green", "medium-green"], /\.snupkg$/i], ["nuget-icon", ["dark-green", "dark-green"], /\.psmdcp$/i], ["numpy-icon", ["medium-cyan", "medium-cyan"], /\.npy$/i], ["numpy-icon", ["dark-cyan", "dark-cyan"], /\.npz$/i], ["numpy-icon", ["dark-blue", "dark-blue"], /\.numpy$/i], ["numpy-icon", ["medium-blue", "medium-blue"], /\.numpyw$/i], ["numpy-icon", ["medium-orange", "medium-orange"], /\.numsc$/i], ["nunjucks-icon", ["dark-green", "dark-green"], /\.(?:nunjucks|njk)$/i], ["nwscript-icon", ["dark-blue", "dark-blue"], /\.nss$/i, , !1, , /\.nwscript$/i, /^Nwscript$/i], ["nwscript-icon", ["dark-red", "dark-red"], /\.ncs$/i], ["nwscript-icon", ["medium-maroon", "medium-maroon"], /\.ndb$/i], ["nxc-icon", ["medium-orange", "medium-orange"], /\.nxc$/i, , !1, , /\.nxc$/i, /^Nxc$/i], ["oberon-icon", ["medium-purple", "medium-purple"], /\.ob2$/i, , !1, , /\.oberon$/i, /^[0o]ber[0o]n$/i], ["objc-icon", ["medium-blue", "medium-blue"], /\.mm?$/i, , !1, , /\.objc(?:pp)?$/i, /^[0o]bjective[\W_ \t]?C$|^(?:Obj-?C|ObjectiveC)(?:\+\+)?$/i], ["objc-icon", ["dark-red", "dark-red"], /\.pch$/i], ["objc-icon", ["dark-green", "dark-green"], /\.x$/i], ["objj-icon", ["dark-orange", "dark-orange"], /\.j$/i, , !1, , /\.objj$/i, /^[0o]bjective[\W_ \t]?J$|^(?:Obj-?J|ObjectiveJ)$/i], ["objj-icon", ["dark-red", "dark-red"], /\.sj$/i], ["ocaml-icon", ["medium-orange", "medium-orange"], /\.ml$/i, , !1, /ocaml(?:run|script)?/, /\.ocaml$/i, /^[0o]caml$/i], ["ocaml-icon", ["dark-orange", "dark-orange"], /\.mli$/i], ["ocaml-icon", ["medium-red", "medium-red"], /\.eliom$/i], ["ocaml-icon", ["dark-red", "dark-red"], /\.eliomi$/i], ["ocaml-icon", ["medium-green", "medium-green"], /\.ml4$/i], ["ocaml-icon", ["dark-green", "dark-green"], /\.mll$/i, , !1, /^ocamllex$/, /\.ocamllex$/i, /^[0o]caml$|^[0o]camllex$/i], ["ocaml-icon", ["dark-yellow", "dark-yellow"], /\.mly$/i, , !1, /^menhir$/, /\.menhir$/i, /^[0o]caml$|^menhir$/i], ["octave-icon", ["medium-orange", "medium-orange"], /\.octave$|\.octave_hist$/i, , !1, , /\.octave$/i, /^[0o]ctave$/i], ["octave-icon", ["dark-orange", "dark-orange"], /\.octaverc$/i], ["odin-icon", ["medium-blue", "medium-blue"], /\.odin$/i, , !1, /^odin$/, /\.odin$/i, /^[0o]din$/i], ["ogone-icon", ["medium-grey", "dark-grey"], /\.(?:o3|ogone)$/i, , !1, , /\.source\.o3$/i, /^[0o]g[0o]ne$/i], ["omnigraffle-icon", ["medium-green", "medium-green"], /\.graffle$/i], ["omnigraffle-icon", ["medium-cyan", "medium-cyan"], /\.gdiagramstyle$/i], ["omnigraffle-icon", ["medium-red", "medium-red"], /\.gstencil$/i], ["omnigraffle-icon", ["dark-green", "dark-green"], /\.gtemplate$/i], ["ooc-icon", ["medium-green", "medium-green"], /\.ooc$/i, , !1, , /\.ooc$/i, /^[0o][0o]c$/i], ["opa-icon", ["medium-blue", "medium-blue"], /\.opa$/i, , !1, , /\.opa$/i, /^[0o]pa$/i], ["openpolicy-icon", ["medium-cyan", "medium-cyan"], /\.rego$/i, , !1, , /\.rego$/i, /^[0o]pen[\W_ \t]?P[0o]licy[\W_ \t]?Agent$/i], ["opencl-icon", ["medium-red", "medium-red"], /\.opencl$/i, , !1, , /\.opencl$/i, /^[0o]pen[\W_ \t]?Cl$/i], ["progress-icon", ["medium-green", "medium-green"], /\.(?:p|abl)$/i, , !1, , /\.abl$/i, /^[0o]pen[\W_ \t]?Edge[\W_ \t]?Abl$|^(?:progress|openedge|abl)$/i], ["openexr-icon", ["medium-pink", "dark-pink"], /\.exr$/i, , !1, , , , /^v\/1\x01/], ["opengl-icon", ["dark-cyan", "dark-cyan"], /\.(?:glslv?|gsh|gshader)$/i, , !1, , /\.glsl$/i, /^[0o]pen[\W_ \t]?Gl[\W_ \t]?Shading[\W_ \t]?Language$|^(?:GLSL|GLslang)$/i], ["vertex-icon", ["medium-blue", "medium-blue"], /\.(?:vert|vrx|vertex|vsh(?:ader)?)$/i], ["vertex-icon", ["medium-red", "medium-red"], /\.(?:fra?g|fp|fsh|fshader)$/i], ["openoffice-icon", ["medium-blue", "medium-blue"], /\.odt$/i], ["openoffice-icon", ["dark-blue", "dark-blue"], /\.ott$/i], ["openoffice-icon", ["dark-purple", "dark-purple"], /\.fodt$/i], ["openoffice-icon", ["medium-green", "medium-green"], /\.ods$/i], ["openoffice-icon", ["dark-green", "dark-green"], /\.ots$/i], ["openoffice-icon", ["dark-cyan", "dark-cyan"], /\.fods$/i], ["openoffice-icon", ["medium-purple", "medium-purple"], /\.odp$/i], ["openoffice-icon", ["dark-pink", "dark-pink"], /\.otp$/i], ["openoffice-icon", ["medium-pink", "medium-pink"], /\.fodp$/i], ["openoffice-icon", ["medium-red", "medium-red"], /\.odg$/i], ["openoffice-icon", ["dark-red", "dark-red"], /\.otg$/i], ["openoffice-icon", ["dark-orange", "dark-orange"], /\.fodg$/i], ["openoffice-icon", ["medium-maroon", "medium-maroon"], /\.odf$/i], ["openoffice-icon", ["light-pink", "light-pink"], /\.odb$/i], ["scad-icon", ["medium-orange", "medium-orange"], /\.scad$/i, , !1, , /\.scad$/i, /^[0o]pen[\W_ \t]?Scad$/i], ["scad-icon", ["medium-yellow", "medium-yellow"], /\.jscad$/i], ["openvms-icon", ["medium-blue", "medium-blue"], /\.hlb$/i], ["openvms-icon", ["medium-orange", "medium-orange"], /\.cld$/i], ["openvpn-icon", ["medium-orange", "medium-orange"], /\.ovpn$/i], ["openzfs-icon", ["dark-blue", "dark-blue"], /^vdev\d+$/, , !1, , , , /^(?:.|\r|\n){8}(?:\0\0\0\x02\xF5\xBA\xCB\xAC|\xAC\xCB\xBA\xF5\x02\0\0\0)/], ["org-icon", ["dark-green", "dark-green"], /\.org$/i], ["osx-icon", ["medium-red", "medium-red"], /\.dmg$/i, , !1, , , , /^\x78\x01\x73\x0D\x62\x62\x60/], ["ox-icon", ["medium-cyan", "dark-cyan"], /\.ox$/i, , !1, , /\.ox$/i, /^[0o]x$/i], ["ox-icon", ["medium-green", "dark-green"], /\.oxh$/i], ["ox-icon", ["medium-blue", "dark-blue"], /\.oxo$/i], ["oxygene-icon", ["medium-cyan", "dark-cyan"], /\.oxygene$/i, , !1, , /\.oxygene$/i, /^[0o]xygene$/i], ["oz-icon", ["medium-yellow", "medium-yellow"], /\.oz$/i, , !1, , /\.oz$/i, /^[0o]z$/i], ["p4-icon", ["dark-purple", "dark-purple"], /\.p4$/i, , !1, , /\.p4$/i, /^P4$/i], ["pan-icon", ["medium-red", "medium-red"], /\.pan$/i, , !1, , /^source.pan$/, /^Pan$/i], ["papyrus-icon", ["medium-green", "medium-green"], /\.psc$/i, , !1, , /(?:^|\.)(?:papyrus\.skyrim|compiled-?papyrus|papyrus-assembly)(?:\.|$)/i, /^Papyrus$/i], ["parrot-icon", ["medium-green", "medium-green"], /\.parrot$/i, , !1, /^parrot$/], ["parrot-icon", ["dark-green", "dark-green"], /\.pasm$/i, , !1, , /\.parrot\.pasm$/i, /^Parr[0o]t$|^pasm$/i], ["parrot-icon", ["dark-blue", "dark-blue"], /\.pir$/i, , !1, , /\.parrot\.pir$/i, /^Parr[0o]t$|^pir$/i], ["pascal-icon", ["medium-purple", "medium-purple"], /\.pas(?:cal)?$/i, , !1, /pascal|instantfpc/, /\.pascal$/i, /^Pascal$/i], ["pascal-icon", ["dark-purple", "dark-purple"], /\.lpr$/i], ["pascal-icon", ["medium-blue", "medium-blue"], /\.lfm$|\.or$/i], ["pascal-icon", ["medium-red", "medium-red"], /\.lps$/i], ["pascal-icon", ["dark-blue", "dark-blue"], /\.lpi$/i], ["pascal-icon", ["dark-cyan", "dark-cyan"], /\.lpk$/i], ["pascal-icon", ["medium-maroon", "medium-maroon"], /\.lrs$/i], ["pascal-icon", ["dark-red", "dark-red"], /\.lrt$/i], ["pascal-icon", ["medium-cyan", "medium-cyan"], /\.ppu$/i], ["patch-icon", ["medium-green", "medium-green"], /\.patch$/i], ["pawn-icon", ["medium-orange", "medium-orange"], /\.pwn$/i, , !1, , /\.pwn$/i, /^Pawn$/i], ["pcd-icon", ["medium-green", "medium-green"], /\.pcd$/i], ["icon-file-pdf", ["medium-red", "medium-red"], /\.pdf$/i, , !1, , , , /^%PDF/], ["peg-icon", ["medium-red", "medium-red"], /\.(?:pegjs|peggy)$/i, , !1, /^pegjs$/, /\.pegjs$/i, /^pegjs$/i], ["peg-icon", ["medium-maroon", "medium-maroon"], /\.pegcoffee$/i, , !1, /^pegcoffee$/, /\.pegcoffee$/i, /^Peg[\W_ \t]?Js$|^pegc[0o]ffee$/i], ["perl-icon", ["medium-blue", "medium-blue"], /\.p(?:er)?l$/i, , !1, /^c?perl5?$/, /\.perl$/i, /^C?Perl$/i], ["perl-icon", ["dark-blue", "dark-blue"], /\.al$|\.pm$/i], ["perl-icon", ["dark-purple", "dark-purple"], /\.ph$/i], ["perl-icon", ["medium-purple", "medium-purple"], /\.plx$/i], ["perl-icon", ["medium-red", "medium-red"], /\.(?:psgi|xs)$/i], ["phalcon-icon", ["medium-cyan", "medium-cyan"], /\.volt$/i, , !1, , /\.volt$/i, /^Phalc[0o]n$/i], ["php-icon", ["dark-blue", "dark-blue"], /\.php(?:[st\d]|_cs)?$/i, , !1, /^php$/, /\.php$/i, /^Php$/i, /^<\?php/], ["php-icon", ["dark-green", "dark-green"], /^Phakefile/], ["php-icon", ["medium-blue", "medium-blue"], /\.engine$/i], ["php-icon", ["medium-red", "medium-red"], /\.phar$/i], ["pickle-icon", ["dark-cyan", "dark-cyan"], /\.(?:pkl|pickle)$/i], ["pico8-icon", ["medium-red", "medium-red"], /\.p8$/i, , !1, /^pico-8$/, /\.p8$/i, /^pico\W8$/i, /^pico-8 cartridge \/\/ http:\/\/www\.pico-8\.com$/], ["pike-icon", ["dark-cyan", "dark-cyan"], /\.pike$/i, , !1, /^pike$/], ["pike-icon", ["medium-blue", "medium-blue"], /\.pmod$/i], ["pinescript-icon", ["medium-green", "medium-green"], /\.pine$/i, , !1, , /\.pine$/i, /^Pine[\W_ \t]?Script$/i], ["pipenv-icon", ["dark-blue", "dark-blue"], /^Pipfile(?:\.lock)?$/i], ["sql-icon", ["medium-red", "medium-red"], /\.pls$|\.plsql$/i, , !1, , /\.plsql(?:\.oracle)?(?:\.|$)/i, /^Plsql$/i], ["sql-icon", ["medium-orange", "medium-orange"], /\.pck$/i], ["sql-icon", ["medium-blue", "medium-blue"], /\.pks$/i], ["sql-icon", ["medium-purple", "medium-purple"], /\.plb$/i], ["sql-icon", ["dark-red", "dark-red"], /\.pkb$/i], ["pod-icon", ["dark-blue", "dark-blue"], /\.pod$/i], ["pogo-icon", ["medium-orange", "dark-orange"], /\.pogo$/i, , !1, , /\.pogoscript$/i, /^P[0o]g[0o][\W_ \t]?Script$/i], ["pony-icon", ["light-maroon", "light-maroon"], /\.pony$/i, , !1, , /\.pony$/i, /^P[0o]ny$/i], ["postcss-icon", ["dark-red", "dark-red"], /\.p(?:ost)?css$/i, , !1, /^postcss$/, /\.postcss$/i, /^p[0o]stcss$/i], ["postcss-icon", ["dark-pink", "dark-pink"], /\.sss$/i, , !1, /^sugarss$/, /\.sugarss$/i, /^P[0o]st[\W_ \t]?Css$|^sugarss$/i], ["pgsql-icon", ["dark-blue", "dark-blue"], /\.pgsql$/i], ["postscript-icon", ["medium-red", "medium-red"], /\.ps$/i, , !1, , /(?:^|\.)postscript$/i, /^P[0o]st[\W_ \t]?Script$|^p[0o]stscr$/i, /^%!PS/], ["postscript-icon", ["medium-orange", "medium-orange"], /\.eps$/i], ["postscript-icon", ["dark-blue", "dark-blue"], /\.pfa$/i], ["postscript-icon", ["medium-blue", "medium-blue"], /^fontinfo$/i, , !1, , /\.fontinfo$/i, /^P[0o]st[\W_ \t]?Script$|^f[0o]ntinf[0o]$/i, /^IsItalicStyle\s/], ["postscript-icon", ["medium-green", "medium-green"], /\.a[fm]m$/i, , !1, , /\.afm$/i, /^P[0o]st[\W_ \t]?Script$/i, /^\s*Start(?:Comp|Master)?FontMetrics\s+(?:\d+\.\d+)/], ["postscript-icon", ["dark-orange", "dark-orange"], /\.eps[fi]$|\.gsf$/i], ["povray-icon", ["dark-blue", "dark-blue"], /\.pov$/i], ["powerbuilder-icon", ["medium-blue", "medium-blue"], /\.pbl$|\.sra$/i], ["powerbuilder-icon", ["dark-blue", "dark-blue"], /\.pbt$/i], ["powerbuilder-icon", ["medium-red", "medium-red"], /\.srw$/i], ["powerbuilder-icon", ["medium-orange", "medium-orange"], /\.sru$/i], ["powerbuilder-icon", ["medium-maroon", "medium-maroon"], /\.srp$/i], ["powerbuilder-icon", ["medium-purple", "medium-purple"], /\.srj$/i], ["powershell-icon", ["medium-blue", "medium-blue"], /\.ps1$/i, , !1, /^pwsh$/, /\.powershell$/i, /^P[0o]wer[\W_ \t]?Shell$|^p[0o]sh$/i], ["powershell-icon", ["dark-blue", "dark-blue"], /\.psd1$/i], ["powershell-icon", ["medium-purple", "medium-purple"], /\.psm1$/i], ["powershell-icon", ["dark-purple", "dark-purple"], /\.ps1xml$/i], ["print-icon", ["dark-cyan", "dark-cyan"], /\.ppd$/i, , !1, , , , /^\*PPD-Adobe:/], ["print-icon", ["medium-orange", "medium-orange"], /\.upp$/i, , !1, , /\.source\.uniprint$/i, /^Printer$|^Uniprint$/i], ["print-icon", ["dark-red", "dark-red"], /\.joboptions$/i], ["prisma-icon", ["dark-blue", "dark-blue"], /\.prisma$/i], ["processing-icon", ["dark-blue", "dark-blue"], /\.pde$/i, , !1, , /\.processing$/i, /^Pr[0o]cessing$/i], ["prolog-icon", ["medium-blue", "medium-blue"], /\.pro$/i, , !1, /^swipl$/, /\.prolog$/i, /^Pr[0o]l[0o]g$/i], ["prolog-icon", ["medium-cyan", "medium-cyan"], /\.prolog$/i], ["prolog-icon", ["medium-purple", "medium-purple"], /\.yap$/i, , !1, /^yap$/], ["propeller-icon", ["medium-orange", "medium-orange"], /\.spin$/i, , !1, , /\.spin$/i, /^Pr[0o]peller[\W_ \t]?Spin$/i], ["pug-icon", ["medium-red", "medium-red"], /\.pug$/i, , !1, , /\.pug$/i, /^Pug$/i], ["puppet-icon", ["medium-purple", "medium-purple"], /\.pp$/i, , !1, /^puppet$/, /\.puppet$/i, /^puppet$/i], ["puppet-icon", ["medium-orange", "medium-orange"], /\.epp$/i], ["puppet-icon", ["dark-blue", "dark-blue"], /Modulefile$/i], ["pure-icon", ["medium-grey", "medium-grey"], /\.pure$/i, , !1, /^pure$/, /\.pure$/i, /^Pure$/i], ["purebasic-icon", ["medium-red", "medium-red"], /\.pb$/i, , !1, /^purebasic$/, /\.purebasic$/i, /^purebasic$/i], ["purebasic-icon", ["dark-orange", "dark-orange"], /\.pbi$/i], ["purescript-icon", ["dark-purple", "dark-purple"], /\.purs$/i, , !1, , /\.purescript$/i, /^Pure[\W_ \t]?Script$/i], ["pyret-icon", ["dark-red", "dark-red"], /\.arr$/i, , !1, /^pyret$/, /^source\.arr$/, /^Pyret$/i], ["python-icon", ["dark-blue", "dark-blue"], /\.py$|\.py3$|\.?(?:pypirc|pythonrc|python-venv)$/i, , !1, /python[\d.]*/, /\.python$/i, /^Pyth[0o]n$|^rusth[0o]n$/i], ["python-icon", ["medium-blue", "medium-blue"], /\.ipy$|\.pyi$/i], ["python-icon", ["dark-green", "dark-green"], /\.isolate$|\.gypi$|\.pyt$/i], ["python-icon", ["medium-orange", "medium-orange"], /\.pep$|\.pyde$/i, , !1, /^pep8$/, /\.pep8$/i, /^Pyth[0o]n$|^pep8$/i], ["python-icon", ["medium-green", "medium-green"], /\.gyp$|\.smk$/i], ["python-icon", ["dark-purple", "dark-purple"], /\.pyp$/i], ["python-icon", ["medium-maroon", "medium-maroon"], /\.pyw$/i], ["python-icon", ["dark-red", "dark-red"], /\.pyz$|\.wsgi$/i], ["python-icon", ["dark-pink", "dark-pink"], /\.tac$/i], ["python-icon", ["medium-yellow", "dark-yellow"], /\.xpy$/i], ["python-icon", ["medium-pink", "medium-pink"], /\.rpy$/i, , !1, , /\.renpy$/i, /^Pyth[0o]n$|^Ren'?Py$/i], ["python-icon", ["medium-grey", "medium-grey"], /^py\.typed$/i], ["python-icon", ["dark-green", "dark-green"], /^(?:SConstruct|SConscript)$/], ["python-icon", ["medium-green", "medium-green"], /^(?:Snakefile|WATCHLISTS)$/], ["python-icon", ["dark-maroon", "dark-maroon"], /^wscript$/], ["qsharp-icon", ["dark-purple", "dark-purple"], /\.qs$/i, , !1, , /\.source\.qsharp$/i, /^Q#$|^qsharp$/i], ["kx-icon", ["medium-blue", "medium-blue"], /\.q$/i, , !1, , /^source\.q$/, /^[Qq]\/[Kk][dD][bB]+$|^Kdb\s*\+$/], ["kx-icon", ["dark-purple", "dark-purple"], /\.k$/i, , !1, , /^source\.k4$/, /^Q\/?Kdb\+?$/i], ["qiskit-icon", ["dark-blue", "dark-blue"], /\.qasm$/i, , !1, , /\.qasm$/i, /^Qasm$|^[0o]pen[\W_ \t]?Qasm$/i], ["qlik-icon", ["medium-green", "medium-green"], /\.qvw$/i], ["qlik-icon", ["dark-green", "dark-green"], /\.qvd$/i], ["qt-icon", ["medium-green", "medium-green"], /\.qml$/i, , !1, /^qml$/, /\.qml$/i, /^Qt$|^qml$/i], ["qt-icon", ["dark-green", "dark-green"], /\.qmlproject$/i], ["qt-icon", ["medium-cyan", "medium-cyan"], /\.qbs$/i], ["r-icon", ["medium-blue", "medium-blue"], /\.(?:r|Rprofile|Rhistory|rsx|rd)$/i, , !1, /^Rscript$/, /\.r$/i, /^R$|^(?:Rscript|splus|Rlang)$/i], ["racket-icon", ["medium-red", "medium-red"], /\.rkt$/i, , !1, /^racket$/, /\.racket$/i, /^racket$/i], ["racket-icon", ["medium-blue", "medium-blue"], /\.rktd$/i], ["racket-icon", ["light-red", "light-red"], /\.rktl$/i], ["racket-icon", ["dark-blue", "dark-blue"], /\.scrbl$/i, , !1, /^scribble$/, /\.scribble$/i, /^Racket$|^scribble$/i], ["perl6-icon", ["medium-purple", "medium-purple"], /\.pl6$/i, , !1, /^perl6$/, /(?:^|\.)perl6(?:fe)?(?=\.|$)/, /^Raku$|^(?:pl6|Perl\s*6)$/i], ["perl6-icon", ["light-blue", "light-blue"], /\.[tp]6$|\.6pl$/i], ["perl6-icon", ["dark-pink", "dark-pink"], /\.(?:pm6|p6m)$/i], ["perl6-icon", ["dark-cyan", "dark-cyan"], /\.6pm$/i], ["perl6-icon", ["dark-purple", "dark-purple"], /\.nqp$|\.rakutest$/i], ["perl6-icon", ["medium-blue", "medium-blue"], /\.p6l$|\.raku$/i], ["perl6-icon", ["dark-green", "dark-green"], /\.pod6$/i], ["perl6-icon", ["dark-blue", "dark-blue"], /\.rakumod$/i], ["perl6-icon", ["medium-green", "medium-green"], /^Rexfile$/], ["raml-icon", ["medium-cyan", "medium-cyan"], /\.raml$/i, , !1, , /\.raml$/i, /^Raml$/i], ["rascal-icon", ["medium-yellow", "medium-yellow"], /\.rsc$/i, , !1, , /\.rascal$/i, /^Rascal$/i], ["rdata-icon", ["medium-red", "medium-red"], /\.Rdata$/i], ["rdata-icon", ["medium-orange", "medium-orange"], /\.rdb$/i], ["rdata-icon", ["medium-yellow", "medium-yellow"], /\.rds$/i], ["rdata-icon", ["medium-maroon", "medium-maroon"], /\.rdx$/i], ["rdoc-icon", ["medium-red", "medium-red"], /\.rdoc$/i, , !1, , /\.rdoc$/i, /^Rd[0o]c$/i], ["book-icon", ["medium-blue", "medium-blue"], /\.changes$|\.journal$|\.faq$/i], ["book-icon", ["medium-red", "medium-red"], /\.yo$/i, , !1, /^yodl$/, /\.yodl$/i, /^Readme$|^y[0o]dl$/i], ["xojo-icon", ["medium-green", "medium-green"], /\.rbbas$/i], ["xojo-icon", ["dark-green", "dark-green"], /\.rbfrm$/i], ["xojo-icon", ["dark-cyan", "dark-cyan"], /\.rbmnu$/i], ["xojo-icon", ["medium-cyan", "medium-cyan"], /\.rbres$/i], ["xojo-icon", ["medium-blue", "medium-blue"], /\.rbtbar$/i], ["xojo-icon", ["dark-blue", "dark-blue"], /\.rbuistate$/i], ["reason-icon", ["medium-red", "medium-red"], /\.re$/i, , !1, /^reason$/, /\.reason$/i, /^reas[0o]n$/i], ["reason-icon", ["medium-orange", "medium-orange"], /\.rei$/i], ["reasonstudios-icon", ["medium-orange", "medium-orange"], /\.reason$|\.rsn$/i], ["reasonstudios-icon", ["dark-orange", "dark-orange"], /\.rns$/i, , !1, , , , /^Propellerheads Reason Song File/], ["reasonstudios-icon", ["medium-red", "medium-red"], /\.rx2$/i], ["reasonstudios-icon", ["medium-yellow", "medium-yellow"], /\.sxt$/i, , !1, , , , /^FORM.{4}PTCH/], ["rebol-icon", ["dark-green", "dark-green"], /\.reb(?:ol)?$/i, , !1, /^rebol$/, /\.rebol$/i, /^reb[0o]l$/i], ["rebol-icon", ["dark-red", "dark-red"], /\.r2$/i], ["rebol-icon", ["dark-blue", "dark-blue"], /\.r3$/i], ["red-icon", ["medium-red", "medium-red"], /\.red$/i, , !1, , /\.red$/i, /^Red$|^red\/?system$/i], ["red-icon", ["light-red", "light-red"], /\.reds$/i], ["red-hat-icon", ["medium-red", "medium-red"], /\.rpm(?:macros)?$/i], ["red-hat-icon", ["dark-red", "dark-red"], /\.spec$/i], ["reek-icon", ["medium-red", "medium-red"], /\.reek$/i], ["regex-icon", ["medium-green", "medium-green"], /\.regexp?$/i, , !1, , /(?:\.|^)regexp?(?:\.|$)/i, /^Reg[\W_ \t]?Exp$/i], ["rescript-icon", ["medium-red", "medium-red"], /\.resi$/i, , !1, , /\.rescript$/i, /^Re[\W_ \t]?Script$/i], ["restql-icon", ["dark-blue", "dark-blue"], /\.r(?:est)?ql$/i, , !1, /^restql$/, /\.restql$/i, /^restql$/i], ["rst-icon", ["dark-blue", "dark-blue"], /\.re?st(?:\.txt)?$/i, , !1, , /\.restructuredtext$/i, /^re[\W_ \t]?Structured[\W_ \t]?Text$|^re?st$/i], ["rexx-icon", ["medium-red", "medium-red"], /\.rexx?$/i, , !1, /rexx|regina/i, /\.rexx$/i, /^Rexx$/i], ["rexx-icon", ["medium-blue", "medium-blue"], /\.pprx$/i], ["rhino-icon", ["medium-blue", "medium-blue"], /\.3dm$/i], ["rhino-icon", ["medium-green", "medium-green"], /\.rvb$/i, , !1, /^rhino$/, /\.rhino$/i, /^Rhin[0o]3[\W_ \t]?D$|^rhin[0o]$/i], ["ring-icon", ["medium-purple", "medium-purple"], /\.ring$/i, , !1, , /\.ring$/i, /^Ring$/i], ["riot-icon", ["medium-red", "medium-red"], /\.tag$/i, , !1, , /\.riot$/i, /^Ri[0o]t[\W_ \t]?Js$/i], ["rmarkdown-icon", ["medium-red", "medium-red"], /\.(?:rmd|rmarkdown)$/i], ["robot-icon", ["medium-cyan", "medium-cyan"], /\.robot$/i], ["manpage-icon", ["dark-green", "dark-green"], /\.(?:1(?:[bcmstx]|has|in)?|[24568]|3(?:avl|bsm|cfgadm|in|[cmx]|perl|pm?|qt)?|7(?:d|fs|i|ipp|m|p)?|9[efps]?|cstr|eqn|groff|man|mandoc|mdoc|me|mom|nr?|nroff|roff?|tmac|tmac-u|tr|troff)$|^(?:man|mdoc)\.template$|(?:^|\.)(?:(?:troff|eqn)rc(?:-end)?)$/i, , !1, /man|mandoc|(?:[gnt]|dit)?roff/i, /\.[gtn]?roff$/i, /^(?:[gtn]?roff|man(?:[-_\s]?page|doc)?|mdoc)$/i, /^('\\" [tre]+(?=\s|$)|\.TH[ \t]+(?:\S+)|\.so[ \t]+man(\w+)\/.+\.\1($|\s)|\.EQ\n|('+\t?|\.\t)\\"\s)/m], ["manpage-icon", ["dark-green", "dark-green"], /\.(?:chem|dformat|pic|pikchr)$|^grap(?:\.tex)?\.defines$/i, , !1, /^(?:(?:pic|grap)2(?:plot|graph)|[gtd]?pic|picpack|picasso|pikchr)$/, /\.source\.pic$/i, /^R[0o]ff$|^(?:[gtd]?pic|dformat|chem|pikchr)$/i, /^\.(?:PS\s[^\0]*?^\.P[EF]|cstart\n[^\0]*?^\.cend|begin dformat\s[^\0]*?^\.end|G1\n[^\0]*?\n\.G2)\n/m], ["manpage-icon", ["dark-maroon", "dark-maroon"], /\.(?:rnh|rno|run|runoff)$/i, , !1, /^runoff$/, /\.runoff$/i, /^R[0o]ff$|^run[0o]ff$/i], ["manpage-icon", ["dark-green", "dark-green"], /(\\|\/)(?:man(\w+)\1[^\\\/]+\.\2|(?:tmac|eqnchar)\.d\1(?:ms\.)?[^\\\/.]+(?:\.in)?|picasso\1(?:defs\.\w+|disclaimer))$/, , !0], ["clojure-icon", ["medium-red", "medium-red"], /\.rg$/i], ["rspec-icon", ["medium-red", "medium-red"], /\.rspec$/i], ["rss-icon", ["medium-orange", "medium-orange"], /\.rss$/i], ["rstudio-icon", ["light-blue", "light-blue"], /\.rproj$/i], ["ruby-icon", ["medium-red", "medium-red"], /\.(?:rb|ru|ruby|erb|god|mspec|pluginspec|podspec|rabl|rake|opal)$|^\.?(?:irbrc|gemrc|pryrc|ruby-(?:gemset|version))$/i, , !1, /(?:mac|j)?ruby|rake|rbx/, /\.ruby$/i, /^Ruby$|^(?:rbx?|rake|jruby|macruby)$/i], ["ruby-icon", ["medium-red", "medium-red"], /^(?:Appraisals|(?:Rake|App|[bB]uild|Cap|Danger|Deliver|Fast|Guard|Jar|Maven|Pod|Puppet|Snap)file(?:\.lock)?)$|^rails$/], ["ruby-icon", ["dark-red", "dark-red"], /\.(?:jbuilder|rbuild|rb[wx]|builder)$/i], ["ruby-icon", ["dark-yellow", "dark-yellow"], /\.watchr$/i], ["rubygems-icon", ["medium-red", "medium-red"], /\.gemspec$/i], ["rust-icon", ["medium-maroon", "medium-maroon"], /\.rs$/i, , !1, /^rust$/, /\.rust$/i, /^rust$/i], ["rust-icon", ["light-maroon", "light-maroon"], /\.rlib$/i], ["rust-icon", ["medium-red", "medium-red"], /^rust-toolchain$/], ["sac-icon", ["medium-yellow", "medium-yellow"], /\.sac$/i, , !1, , /\.sac$/i, /^Sac$/i], ["safari-icon", ["medium-blue", "medium-blue"], /\.webarchive$/i], ["safari-icon", ["dark-blue", "dark-blue"], /\.binarycookies$/i, , !1, , , , /^cook\0/], ["sage-icon", ["medium-blue", "medium-blue"], /\.sage$/i, , !1, /^sage$/, /\.sage$/i, /^sage$/i], ["sage-icon", ["dark-blue", "dark-blue"], /\.sagews$/i], ["sails-icon", ["medium-blue", "medium-blue"], /^\.sailsrc$/i], ["saltstack-icon", ["medium-blue", "dark-blue"], /\.sls$/i, , !1, , /\.salt$/i, /^Salt[\W_ \t]?Stack$|^Salt(?:State)?$/i], ["san-icon", ["medium-cyan", "medium-cyan"], /\.san$/i, , !1, , /\.san$/i, /^San$/i], ["sandbox-icon", ["dark-orange", "dark-orange"], /\.sb$/i, , !1, , /\.sbpl$/i, /^Sandb[0o]x$|^(?:Sandbox Profile Language|SBPL)$/i], ["sas-icon", ["medium-blue", "medium-blue"], /\.sas$/i, , !1, , /\.sas$/i, /^Sas$/i], ["sass-icon", ["light-pink", "light-pink"], /\.scss$/i, , !1, /^scss$/, /\.scss$/i, /^Sass$|^scss$/i], ["sass-icon", ["dark-pink", "dark-pink"], /\.sass$/i, , !1, /^sass$/, /\.sass$/i, /^sass$/i], ["sbt-icon", ["dark-purple", "dark-purple"], /\.sbt$/i], ["scala-icon", ["medium-red", "medium-red"], /\.(?:sc|scala)$/i, , !1, /^scala$/, /\.scala$/i, /^scala$/i], ["scala-icon", ["medium-green", "medium-green"], /\.kojo$/i], ["scheme-icon", ["medium-red", "medium-red"], /\.scm$/i, , !1, /guile|bigloo|chicken/, /\.scheme$/i, /^Scheme$/i], ["scheme-icon", ["medium-blue", "medium-blue"], /\.sld$/i], ["scheme-icon", ["medium-purple", "medium-purple"], /\.sps$/i], ["scheme-icon", ["medium-yellow", "medium-yellow"], /\.xtm$/i, , !1, /^extempore$/, /\.extempore$/i, /^Scheme$|^extemp[0o]re$/i], ["scilab-icon", ["dark-purple", "dark-purple"], /\.sci$/i, , !1, /^scilab$/, /\.scilab$/i, /^scilab$/i], ["scilab-icon", ["dark-blue", "dark-blue"], /\.sce$/i], ["scilab-icon", ["dark-cyan", "dark-cyan"], /\.tst$/i], ["scilla-icon", ["medium-orange", "medium-orange"], /\.scilla$/i, , !1, , /\.scilla$/i, /^Scilla$/i], ["scratch-icon", ["dark-orange", "dark-orange"], /\.sb2$/i], ["scratch-icon", ["medium-orange", "medium-orange"], /\.sb3$/i], ["secret-icon", [null, null], /\.secret$/i], ["self-icon", ["dark-blue", "dark-blue"], /\.self$/i, , !1, , /\.self$/i, /^Self$/i], ["sentry-icon", ["medium-red", "light-red"], /\.sentryclirc$/i], ["graph-icon", ["light-red", "light-red"], /\.csv$/i, , !1, , /(?:^|\.)csv(?:\.semicolon)?(?:\.|$)/i], ["graph-icon", ["light-green", "light-green"], /\.(?:tab|tsv)$/i], ["graph-icon", ["medium-green", "medium-green"], /\.dif$/i], ["graph-icon", ["medium-cyan", "medium-cyan"], /\.slk$/i], ["graph-icon", ["dark-blue", "dark-blue"], /\.prn$/i], ["sf-icon", ["light-orange", "light-orange"], /\.sfproj$/i], ["terminal-icon", ["medium-purple", "medium-purple"], /\.(?:sh|rc|bash|tool|install|command)$/i, , !1, /^(?:[bd]ash|a?sh|zsh|rc)$/, /\.shell$/i, /^(?:sh|shell|Shell-?Script|Bash)$/i], ["terminal-icon", ["dark-purple", "dark-purple"], /^(?:\.?bash(?:rc|[-_]?(?:profile|login|logout|history|prompt))|_osc|config|install-sh)$|\.profile$/i], ["terminal-icon", ["dark-yellow", "dark-yellow"], /\.(?:ksh|mksh|pdksh)$/i, , !1, /^(?:ksh|mksh(?:-static)?|pdksh|lksh)$/i, /\.ksh-shell$/i], ["terminal-icon", ["medium-yellow", "dark-yellow"], /\.sh-session$/i, , !1, , /\.shell-session$/i, /^(?:Bash|Shell|Sh)[-\s]*(?:Session|Console)$/i], ["terminal-icon", ["medium-blue", "medium-blue"], /\.zsh(?:-theme|_history)?$|^\.?(?:antigen|zpreztorc|zlogin|zlogout|zprofile|zshenv|zshrc)$|\.tmux$/i], ["terminal-icon", ["medium-green", "medium-green"], /\.fish$|^\.fishrc$|\.tcsh$/i, , !1, /^fish$/, /\.fish$/i, /^fish$/i], ["terminal-icon", ["medium-red", "medium-red"], /^\.?(?:login|profile)$|^(?:configure|config\.(?:guess|rpath|status|sub)|depcomp|libtool|compile)$/], ["terminal-icon", ["medium-green", "medium-green"], /^\.?_?dir_?colors$/i, , !1, /^dircolors$/, /\.dircolors$/i, /^dirc[0o]l[0o]rs$/i], ["terminal-icon", ["medium-red", "medium-red"], /\.inputrc$/i, , !1, , /\.inputrc$/i, /^Readline[\W_ \t]?C[0o]nfig$/i], ["terminal-icon", ["dark-purple", "dark-purple"], /^\/(?:private\/)?etc\/(?:[^\/]+\/)*(?:profile$|nanorc$|rc\.|csh\.)/i, , !0], ["terminal-icon", ["medium-orange", "medium-orange"], /^\.?cshrc$/i], ["terminal-icon", ["medium-yellow", "medium-yellow"], /\.csh$/i], ["shellcheck-icon", ["light-maroon", "light-maroon"], /^\.?shellcheckrc$/i, , !1, , /\.source\.shellcheckrc$/i, /^Shell[\W_ \t]?Check$/i], ["shen-icon", ["dark-cyan", "dark-cyan"], /\.shen$/i], ["shopify-icon", ["medium-green", "medium-green"], /\.liquid$/i], ["filter-icon", ["medium-red", "medium-red"], /\.sieve$/i, , !1, /^pigeonhole$/, /\.sieve$/i, /^Sieve$/i], ["sigils-icon", ["dark-red", "dark-red"], /\.sigils$/i], ["sgi-icon", ["medium-orange", "medium-orange"], /\.(?:sgi|iris)$/i, , !1, , , , /^\x01Ú[\0-\x01]/], ["silverstripe-icon", ["medium-blue", "medium-blue"], /\.ss$/i, , !1, , /(?:^|\.)ss(?:template)?(?:\.|$)/i, /^Silver[\W_ \t]?Stripe$/i], ["sketch-icon", ["medium-orange", "medium-orange"], /\.sketch$/i], ["sketchup-lo-icon", ["medium-red", "dark-red"], /\.layout$/i], ["sketchup-mk-icon", ["medium-red", "medium-red"], /\.skp$/i], ["sketchup-sb-icon", ["medium-red", "dark-red"], /\.style$/i], ["anchor-icon", ["dark-blue", "dark-blue"], /\.eskip$/i, , !1, , /\.eskip$/i, /^Skipper$/i], ["slash-icon", ["dark-blue", "dark-blue"], /\.sl$/i, , !1, , /\.slash$/i, /^Slash$/i], ["smarty-icon", ["medium-yellow", "dark-yellow"], /\.tpl$/i, , !1, , /\.smarty$/i, /^Smarty$/i], ["snort-icon", ["light-red", "light-red"], /\.snort$/i, , !1, , /\.snort$/i, /^Sn[0o]rt$/i], ["snyk-icon", ["dark-purple", "dark-purple"], /\.snyk$/i], ["solidity-icon", ["dark-cyan", "dark-cyan"], /\.sol(?:idity)?$/i, , !1, , /\.solidity$/i, /^S[0o]lidity$/i], ["sophia-icon", ["dark-pink", "dark-pink"], /\.aes$/i, , !1, , /\.sophia$/i, /^S[0o]phia$/i], ["sorbet-icon", ["medium-purple", "dark-purple"], /\.rbi$/i], ["clojure-icon", ["medium-yellow", "dark-yellow"], /\.(?:sma|sp)$/i, , !1, , /\.sp$/i, /^S[0o]urce[\W_ \t]?Pawn$|^s[0o]urcem[0o]d$/i], ["clojure-icon", ["medium-green", "medium-green"], /\.inc$/i], ["spacemacs-icon", ["medium-purple", "medium-purple"], /(?:^|\.)spacemacs$/i, , !1, /^spacemacs$/, /\.spacemacs$/i, /^Spacemacs$/i], ["spacengine-icon", ["medium-blue", "medium-blue"], /\.spe$/i, , !1, , /\.text\.html\.spe$/i, /^Spacengine$/i], ["sparql-icon", ["medium-blue", "medium-blue"], /\.sparql$/i, , !1, , /\.rq$/i, /^Sparql$/i], ["sparql-icon", ["dark-blue", "dark-blue"], /\.rq$/i], ["sqf-icon", ["dark-maroon", "dark-maroon"], /\.sqf$/i, , !1, /^sqf$/, /\.sqf$/i, /^sqf$/i], ["sqf-icon", ["dark-red", "dark-red"], /\.hqf$/i], ["sql-icon", ["medium-orange", "medium-orange"], /\.(?:my)?sql$/i, , !1, /^sql$/, /\.sql$/i, /^sql$/i], ["sql-icon", ["medium-blue", "medium-blue"], /\.ddl$|\.4gl$/i, , !1, , /4GL(?:\.|$)/i], ["sql-icon", ["medium-green", "medium-green"], /\.udf$|\.spsql$/i], ["sql-icon", ["medium-red", "medium-red"], /\.hql$/i], ["sql-icon", ["dark-cyan", "dark-cyan"], /\.viw$/i], ["sql-icon", ["dark-blue", "dark-blue"], /\.prc$|\.cql$/i], ["sql-icon", ["medium-purple", "medium-purple"], /\.db2$/i], ["sql-icon", ["medium-cyan", "medium-cyan"], /\.per$/i], ["sqlite-icon", ["medium-blue", "medium-blue"], /\.sqlite$/i], ["sqlite-icon", ["dark-blue", "dark-blue"], /\.sqlite3$/i, , !1, , , , /^SQLite format 3/], ["sqlite-icon", ["medium-purple", "medium-purple"], /\.db$/i], ["sqlite-icon", ["dark-purple", "dark-purple"], /\.db3$/i], ["squarespace-icon", ["dark-purple", "dark-purple"], /\.jsont$/i, , !1, , /\.jsont$/i, /^Square[\W_ \t]?Space$|^(?:json[-_]?t|json[-_\s]?template)$/i], ["squirrel-icon", ["medium-maroon", "medium-maroon"], /\.nut$/i, , !1, , /\.nut$/i, /^Squirrel$/i], ["squirrel-icon", ["medium-red", "medium-red"], /\.gnut$/i], ["key-icon", ["medium-yellow", "medium-yellow"], /\.pub$/i], ["key-icon", ["medium-orange", "medium-orange"], /\.pem$/i], ["key-icon", ["medium-blue", "medium-blue"], /\.key$|\.crt$/i], ["key-icon", ["medium-purple", "medium-purple"], /\.der$/i], ["key-icon", ["medium-red", "medium-red"], /^id_rsa/], ["key-icon", ["medium-green", "medium-green"], /\.glyphs\d*License$|^git-credential-osxkeychain$/i], ["key-icon", ["dark-green", "dark-green"], /^(?:master\.)?passwd$/i], ["stan-icon", ["medium-red", "medium-red"], /\.stan$/i, , !1, , /\.stan$/i, /^Stan$/i], ["bazel-icon", ["dark-green", "dark-green"], /^(?:\.bazelrc|bazel\.rc|bazel\.bazelrc)$/i, , !1, /^bazel$/], ["bazel-icon", ["medium-green", "medium-green"], /^(?:BUILD|WORKSPACE)(?:\.[Bb][Aa][Zz][Ee][Ll])?$/, , !1, , /^source\.build$|(?:^|\.)bazel(?:\.|$)/i, /^Starlark$/i], ["bazel-icon", ["dark-blue", "dark-blue"], /\.(?:bazel|bzl|star)$/i, , !1, , /(?:^|\.)(?:bzl|skylark)(?:\.|$)/i, /^Starlark$|^(?:Bazel|Skylark)$/i], ["stata-icon", ["medium-blue", "medium-blue"], /\.do$/i, , !1, /^stata$/, /\.stata$/i, /^stata$/i], ["stata-icon", ["dark-blue", "dark-blue"], /\.ado$/i], ["stata-icon", ["light-blue", "light-blue"], /\.doh$/i], ["stata-icon", ["medium-cyan", "medium-cyan"], /\.ihlp$/i], ["stata-icon", ["dark-cyan", "dark-cyan"], /\.mata$/i, , !1, /^mata$/, /\.mata$/i, /^Stata$|^mata$/i], ["stata-icon", ["light-cyan", "light-cyan"], /\.matah$/i], ["stata-icon", ["medium-purple", "medium-purple"], /\.sthlp$/i], ["stencil-icon", ["medium-orange", "medium-orange"], /\.stencil$/i, , !1, , /\.stencil$/i, /^Stencil$/i], ["storyist-icon", ["medium-blue", "medium-blue"], /\.story$/i], ["strings-icon", ["medium-red", "medium-red"], /\.strings$/i, , !1, , /\.strings$/i, /^Strings$/i], ["stylus-icon", ["medium-green", "medium-green"], /\.(?:styl|stylus)$/i, , !1, , /\.stylus$/i, /^Stylus$/i], ["sublime-icon", ["medium-orange", "medium-orange"], /\.(?:stTheme|sublime[-_](?:build|commands|completions|keymap|macro|menu|mousemap|project|settings|theme|workspace|metrics|session|snippet))$/i], ["sublime-icon", ["dark-orange", "dark-orange"], /\.sublime-syntax$/i], ["scd-icon", ["medium-red", "medium-red"], /\.scd$/i, , !1, /sclang|scsynth/, /\.supercollider$/i, /^Super[\W_ \t]?C[0o]llider$/i], ["svelte-icon", ["medium-orange", "medium-orange"], /\.svelte$/i, , !1, , /\.svelte$/i, /^Svelte$/i], ["svg-icon", ["dark-yellow", "dark-yellow"], /\.svg$/i, , !1, , /\.svg$/i, /^Svg$/i], ["swagger-icon", ["dark-green", "dark-green"], /\.swagger-codegen-ignore$/i], ["swift-icon", ["medium-orange", "medium-orange"], /\.swift$/i, , !1, , /\.swift$/i, /^Swift$/i], ["sysverilog-icon", ["medium-blue", "dark-blue"], /\.sv$/i], ["sysverilog-icon", ["medium-green", "dark-green"], /\.svh$/i], ["sysverilog-icon", ["medium-cyan", "dark-cyan"], /\.vh$/i], ["toc-icon", ["medium-maroon", "medium-maroon"], /^\.listing(?:\.\d+)?$/], ["tag-icon", ["medium-blue", "medium-blue"], /\.?c?tags$/i], ["tag-icon", ["medium-red", "medium-red"], /\.gemtags/i], ["tag-icon", ["medium-cyan", "medium-cyan"], /\.hgtags$|^localtags$/i], ["tag-icon", ["medium-yellow", "medium-yellow"], /^\.?VERSION$/i], ["tag-icon", ["medium-orange", "medium-orange"], /\.pid$/i], ["tag-icon", ["medium-maroon", "medium-maroon"], /\.tld$/i], ["tag-icon", ["medium-green", "medium-green"], new RegExp("(?:\\.|^)sha(?:256|sum)?$|(?:\\.|^)(?:check|ck|crc(?:32)?|md5|rmd160|sha(?:224|256|384|512|1|2|3)?)?(?:sums?|(?<=\\w))$", "i"), , !1, , /\.text\.checksums$/i], ["tcl-icon", ["dark-orange", "dark-orange"], /\.tcl$/i, , !1, /tclsh|wish/, /\.tcl$/i, /^Tcl$/i], ["tcl-icon", ["medium-orange", "medium-orange"], /\.adp$/i], ["tcl-icon", ["medium-red", "medium-red"], /\.tm$/i], ["tcl-icon", ["dark-blue", "dark-blue"], /\.exp$/i], ["tcl-icon", ["medium-cyan", "medium-cyan"], /^\.tkcvs/i], ["tcl-icon", ["dark-red", "dark-red"], /^\.tkdiffrc$/], ["coffee-icon", ["medium-orange", "medium-orange"], /\.tea$/i, , !1, , /\.tea$/i, /^Tea$/i], ["tfs-icon", ["dark-purple", "dark-purple"], /\.tfignore$/i], ["telegram-icon", ["medium-blue", "medium-blue"], /\.tl$/i, , !1, , /\.tl$/i, /^Telegram$|Type\s*Language/i], ["telegram-icon", ["light-blue", "light-blue"], /\.xps$/i], ["tt-icon", ["medium-blue", "medium-blue"], /\.tt2?$/i], ["tt-icon", ["medium-purple", "medium-purple"], /\.tt3$/i], ["tern-icon", ["medium-blue", "medium-blue"], /\.tern-project$/i], ["tern-icon", ["medium-purple", "medium-purple"], /\.tern-config$/i], ["terraform-icon", ["dark-purple", "dark-purple"], /\.tf(?:vars)?$/i, , !1, , /\.terra(?:form)?$/i, /^Terraf[0o]rm$/i], ["terraform-icon", ["medium-cyan", "medium-cyan"], /\.tfstate(?:\.backup)?$/i], ["test-generic-icon", ["medium-grey", "dark-grey"], /\.bats$/i, , !1, /^bats$/, /\.bats$/i, /^Test,[\W_ \t]?Generic$|^Bats$/i], ["test-generic-icon", ["dark-green", "dark-green"], /\.xspec$/i], ["test-perl-icon", ["medium-blue", "dark-blue"], /\.t$|^test[._-].*\.pl$/i], ["tex-icon", ["medium-blue", "dark-blue"], /\.tex$|\.ltx$|\.lbx$/i, , !1, , /(?:^|\.)latex(?:\.|$)/i, /^Te[\W_ \t]?X$|^latex$/i], ["tex-icon", ["medium-green", "dark-green"], /\.aux$|\.ins$/i], ["tex-icon", ["medium-red", "dark-red"], /\.sty$/i, , !1, , /(?:^|\.)tex(?:\.|$)/i, /^Te[\W_ \t]?X$/i], ["tex-icon", ["medium-maroon", "dark-maroon"], /\.dtx$/i], ["tex-icon", ["medium-orange", "dark-orange"], /\.cls$|\.mkiv$|\.mkvi$|\.mkii$/i], ["tex-icon", ["medium-purple", "dark-purple"], /\.pgf$/i, , !1, /^pgf$/, /\.pgf$/i, /^Te[\W_ \t]?X$|^pgf$/i], ["tex-icon", ["medium-purple", "dark-purple"], /\.tikz$/i, , !1, /^tikz$/, /\.tikz$/i, /^Te[\W_ \t]?X$|^tikz$/i], ["tex-icon", ["medium-red", "dark-red"], /\.(?:texi(?:nfo)?|txi)$/i, , !1, /^texinfo$/, /\.texinfo$/i, /^Te[\W_ \t]?X$|^texinf[0o]$/i], ["icon-file-text", ["medium-blue", "medium-blue"], /\.te?xt$|\.dri$|\.irclog$|\.uot$/i, , !1, , , , /^\xEF\xBB\xBF|^\xFF\xFE/], ["icon-file-text", ["medium-maroon", "medium-maroon"], /\.log$|^Terminal[-_\s]Saved[-_\s]Output$|\.brf$|\.rpt$/i], ["icon-file-text", ["dark-red", "dark-red"], /\.git[\/\\]description$|(\\|\/)share(?:\1misc)?\1(?:operator|mail\.(?:tilde)?help)$/, , !0], ["icon-file-text", ["medium-red", "medium-red"], /\.err$|\.std(?:err|out)$|\.no$|^(?:bug-report|fdl|for-release|tests)$/i], ["icon-file-text", ["dark-red", "dark-red"], /\.rtf$|\.uof$/i], ["icon-file-text", ["dark-blue", "dark-blue"], /\.(?:i?nfo|lcov)$/i, , !1, /^lcov$/, /\.lcov$/i, /^Text$|^lc[0o]v$/i], ["icon-file-text", ["dark-purple", "dark-purple"], /\.abt$|\.sub$/i], ["icon-file-text", ["dark-orange", "dark-orange"], /\.ans$/i], ["icon-file-text", ["medium-yellow", "medium-yellow"], /\.etx$/i], ["icon-file-text", ["medium-purple", "medium-purple"], /\.more$|\.srt$|\.uop$/i, , !1, , /\.srt$/i], ["icon-file-text", ["medium-orange", "medium-orange"], /\.msg$/i], ["icon-file-text", ["medium-cyan", "medium-cyan"], /\.(?:utxt|utf8)$/i], ["icon-file-text", ["medium-green", "medium-green"], /\.weechatlog$|\.uos$/i], ["textile-icon", ["medium-orange", "medium-orange"], /\.textile$/i, , !1, , /\.textile$/i, /^Textile$/i], ["textmate-icon", ["medium-pink", "medium-pink"], /\.(?:tm_properties|tmProperties)$|\.tmTheme$/i, , !1, , /\.source\.tm-properties$/i, /^Text[\W_ \t]?Mate$/i], ["textmate-icon", ["medium-green", "medium-green"], /\.tmcg$/i, , !1, , /\.tmcg$/i, /^Text[\W_ \t]?Mate$/i], ["textmate-icon", ["dark-purple", "dark-purple"], /\.tmLanguage$/i], ["textmate-icon", ["medium-blue", "medium-blue"], /\.tmCommand$/i], ["textmate-icon", ["dark-blue", "dark-blue"], /\.tmPreferences$/i], ["textmate-icon", ["dark-orange", "dark-orange"], /\.tmSnippet$/i], ["textmate-icon", ["medium-maroon", "medium-maroon"], /\.tmMacro$/i], ["textmate-icon", ["medium-orange", "medium-orange"], /\.yaml-tmlanguage$/i], ["textmate-icon", ["medium-purple", "medium-purple"], /\.JSON-tmLanguage$/i], ["icon-paintcan", ["medium-purple", "medium-purple"], /\.theme$/i], ["thor-icon", ["medium-orange", "medium-orange"], /\.thor$/i], ["thor-icon", ["dark-orange", "dark-orange"], /^Thorfile$/i], ["tilt-icon", ["medium-green", "medium-green"], /^Tiltfile$/i], ["tipe-icon", ["medium-cyan", "medium-cyan"], /\.tipe$/i], ["tla-icon", ["medium-maroon", "medium-maroon"], /\.tla$/i, , !1, , /\.tla$/i, /^Tla\+?$/i], ["toml-icon", ["medium-green", "medium-green"], /\.toml$/i, , !1, , /\.toml$/i, /^T[0o]ml$/i], ["tortoise-icon", ["medium-red", "medium-red"], /^\.tgitconfig$/i], ["tsx-icon", ["light-blue", "light-blue"], /\.tsx$/i, , !1, , /\.tsx$/i, /^Tsx$/i], ["ttcn3-icon", ["medium-blue", "medium-blue"], /\.ttcn3?$/i, , !1, , /\.TTCN-3$/i, /^Ttcn[\W_ \t]?3$/i], ["turing-icon", ["medium-red", "medium-red"], /\.tu$/i, , !1, , /\.turing$/i, /^Turing$/i], ["twig-icon", ["medium-green", "medium-green"], /\.twig$/i, , !1, , /\.twig$/i, /^Twig$/i], ["twine-icon", ["medium-blue", "medium-blue"], /\.tw$/i, , !1, /^(?:Twine|Twee)$/i, /\.tw$/i, /^Twine[\W_ \t]?Script$|^Sugar[\W_ \t]?Cube$/i], ["txl-icon", ["medium-orange", "medium-orange"], /\.txl$/i, , !1, , /\.txl$/i, /^Txl$/i], ["ts-icon", ["medium-blue", "medium-blue"], /\.ts$/i, , !1, /\b(?:deno|tsc|ts-node)$/, /\.ts$/i, /^(?:ts|Type[-\s]*Script)$/i], ["typo3-icon", ["medium-orange", "medium-orange"], /\.(?:typoscript|tsconfig)$/i], ["scales-icon", ["medium-green", "dark-green"], /\.units$/i, , !1, , /^source\.units(?:\.(?:gnu|bsd))?$/i, /^Units$/i], ["scales-icon", ["medium-red", "dark-red"], /^\.?units[-_]?history$/i], ["unity3d-icon", ["dark-blue", "dark-blue"], /\.anim$/i, , !1, /^shaderlab$/, /\.shaderlab$/i, /^Unity3[\W_ \t]?D$|^shaderlab$/i], ["unity3d-icon", ["dark-green", "dark-green"], /\.asset$|\.unitypackage$/i], ["unity3d-icon", ["medium-cyan", "medium-cyan"], /\.cubemap$/i], ["unity3d-icon", ["medium-red", "medium-red"], /\.mat$/i], ["unity3d-icon", ["dark-red", "dark-red"], /\.meta$/i], ["unity3d-icon", ["dark-cyan", "dark-cyan"], /\.physics?Material(?:2D)?$|\.prefab$/i], ["unity3d-icon", ["medium-blue", "medium-blue"], /\.unity$/i], ["unity3d-icon", ["medium-maroon", "medium-maroon"], /\.unityproj$/i], ["uno-icon", ["dark-blue", "dark-blue"], /\.uno$/i], ["unreal-icon", ["medium-grey", "medium-grey"], /\.uc$/i, , !1, , /\.uc$/i, /^Unreal$|^Unreal[\W_ \t]?Script$/i], ["unreal-icon", ["dark-blue", "dark-blue"], /\.uasset$/i], ["urweb-icon", ["medium-maroon", "medium-maroon"], /\.ur$/i, , !1, , /\.ur$/i, /^Ur[\W_ \t]?Web$|^Ur(?:\/Web)?$/i], ["urweb-icon", ["dark-blue", "dark-blue"], /\.urs$/i], ["vray-icon", ["medium-grey", "dark-grey"], /\.vrimg$/i], ["v8-icon", ["medium-blue", "medium-blue"], /^\.v8flags\b/], ["vagrant-icon", ["medium-cyan", "medium-cyan"], /^Vagrantfile$/i], ["vala-icon", ["medium-purple", "medium-purple"], /\.vala$/i, , !1, /^vala$/, /\.vala$/i, /^vala$/i], ["vala-icon", ["dark-purple", "dark-purple"], /\.vapi$/i], ["source-icon", ["medium-orange", "medium-orange"], /\.bsp$/i, , !1, , , , /^VBSP/], ["source-icon", ["medium-red", "medium-red"], /\.vpk$/i, , !1, , , , /^4\x12\xAAU./], ["source-icon", ["dark-red", "dark-red"], /\.vtfx$/i, , !1, , , , /^VTFX/], ["source-icon", ["medium-blue", "medium-blue"], /\.vmt$/i, , !1, , /\.vmt$/i, /^Valve[\W_ \t]?S[0o]urce[\W_ \t]?Engine$|^Valve[\W_ \t]?Material[\W_ \t]?Type$/i], ["source-icon", ["dark-blue", "dark-blue"], /\.vtf$/i, , !1, , , , /^VTF\0|^\0FTV/], ["source-icon", ["medium-maroon", "medium-maroon"], /\.vmf$/i], ["source-icon", ["medium-cyan", "medium-cyan"], /\.res$/i], ["varnish-icon", ["dark-blue", "dark-blue"], /\.vcl$/i, , !1, , /(?:^|\.)(?:varnish|vcl)(?:\.|$)/i, /^Vcl$/i], ["velocity-icon", ["dark-blue", "dark-blue"], /\.vm$/i, , !1, , /\.velocity$/i, /^Vel[0o]city$/i], ["zeit-icon", ["medium-maroon", "dark-maroon"], /^\.(?:vercel|now)ignore$/i], ["verilog-icon", ["dark-green", "dark-green"], /\.v$/i, , !1, /^(?:vvp|iverilog)$/i, /\.verilog$/i, /^Veril[0o]g$/i], ["verilog-icon", ["medium-red", "medium-red"], /\.veo$/i], ["vhdl-icon", ["dark-green", "dark-green"], /\.vhdl$/i, , !1, /^vhdl$/, /\.vhdl$/i, /^vhdl$/i], ["vhdl-icon", ["dark-blue", "dark-blue"], /\.vhf$/i], ["vhdl-icon", ["medium-blue", "medium-blue"], /\.vhi$/i], ["vhdl-icon", ["dark-purple", "dark-purple"], /\.vho$/i], ["vhdl-icon", ["medium-purple", "medium-purple"], /\.vhs$/i], ["vhdl-icon", ["dark-red", "dark-red"], /\.vht$/i], ["vhdl-icon", ["dark-orange", "dark-orange"], /\.vhw$/i], ["video-icon", ["medium-blue", "medium-blue"], /\.3gpp?$/i, , !1, , , , /^.{4}ftyp3g/], ["video-icon", ["dark-blue", "dark-blue"], /\.(?:mp4|m4v|h264)$/i, , !1, , , , /^.{4}ftyp/], ["video-icon", ["medium-maroon", "medium-maroon"], /\.asx$/i, , !1, , , , /^<ASX /i], ["video-icon", ["medium-blue", "medium-blue"], /\.avi$/i, , !1, , , , /^MLVI/], ["video-icon", ["medium-cyan", "medium-cyan"], /\.mov$/i, , !1, , , , /^.{4}moov/], ["video-icon", ["medium-purple", "medium-purple"], /\.mk(?:v|s|3d)$/i, , !1, , , , /^\x1AEß£\x93B\x82\x88matroska/], ["video-icon", ["medium-red", "medium-red"], /\.flv$/i, , !1, , , , /^FLV\x01/], ["video-icon", ["dark-blue", "dark-blue"], /\.webm$/i, , !1, , , , /^\x1A\x45\xDF\xA3/], ["video-icon", ["medium-red", "medium-red"], /\.mpe?g$/i, , !1, , , , /^\0{2}\x01[\xB3\xBA]/], ["video-icon", ["dark-purple", "dark-purple"], /\.(?:asf|wmv)$/i, , !1, , , , /^0&²u\x8EfÏ\x11¦Ù\0ª\0bÎl/], ["video-icon", ["medium-orange", "medium-orange"], /\.(?:ogm|og[gv])$/i, , !1, , , , /^OggS/], ["vim-icon", ["medium-green", "medium-green"], /\.(?:vim|[gn]?vimrc)$|(?:^|\.)n?exrc$/i, , !1, /Vim?/i, /\.viml$/i, /^(?:VimL?|NVim|Vim\s*Script)$/i], ["vim-icon", ["dark-green", "dark-green"], /^[.gn_]?vim(?:rc|info)$|\.vmb$/i, , !1, , , , /^UseVimball/m], ["virtualbox-icon", ["medium-blue", "medium-blue"], /\.ova$/i], ["virtualbox-icon", ["medium-purple", "medium-purple"], /\.ovf$/i], ["virtualbox-icon", ["medium-green", "medium-green"], /\.vhd$/i], ["virtualbox-icon", ["dark-green", "dark-green"], /\.vhdx$/i, , !1, , , , /^vhdxfile/], ["virtualbox-icon", ["medium-blue", "dark-blue"], /\.vbox_version$|\.vbox(?:-prev)?$/i], ["vs-icon", ["medium-blue", "medium-blue"], /\.(?:vba?|fr[mx]|bas)$/i, , !1, , /\.vbnet$/i, /^Visual[\W_ \t]?Studi[0o]$|^vb\.?net$/i], ["vs-icon", ["medium-red", "medium-red"], /\.vbhtml$/i], ["vs-icon", ["medium-green", "medium-green"], /\.vbs$/i], ["vs-icon", ["medium-cyan", "medium-cyan"], /\.vsix$/i], ["vs-icon", ["dark-blue", "dark-blue"], /\.csproj$|\.code-workspace$/i], ["vs-icon", ["dark-red", "dark-red"], /\.vbproj$|\.modelproj$/i], ["vs-icon", ["medium-purple", "medium-purple"], /\.vstemplate$/i], ["vs-icon", ["dark-orange", "dark-orange"], /\.vsixmanifest$/i], ["vs-icon", ["medium-maroon", "medium-maroon"], /\.builds$|\.wmaproj$/i], ["vs-icon", ["dark-purple", "dark-purple"], /\.dbproj$/i], ["vs-icon", ["light-cyan", "light-cyan"], /\.lsproj$/i], ["vs-icon", ["medium-orange", "medium-orange"], /\.sln$|\.sqlproj$/i], ["vs-icon", ["light-red", "light-red"], /\.njsproj$/i], ["vs-icon", ["medium-purple", "dark-purple"], /\.vcxitems$/i], ["vmware-icon", ["medium-orange", "dark-orange"], /\.vmdk$|\.vmx$|\.vmxf$/i], ["vmware-icon", ["medium-blue", "dark-blue"], /\.nvram$|\.vmss$/i], ["vmware-icon", ["medium-green", "medium-green"], /\.vmsd$|\.vmsn$/i], ["vmware-icon", ["medium-red", "dark-red"], /\.vmtm$/i], ["vue-icon", ["light-green", "light-green"], /\.vue$/i, , !1, , /\.vue$/i, /^Vue$/i], ["vyper-icon", ["medium-grey", "medium-grey"], /\.vy$/i, , !1, /^vyper$/, /\.vyper$/i, /^Vyper$/i], ["walt-icon", ["medium-purple", "medium-purple"], /\.walt$/i, , !1, , /\.walt$/i, /^Walt$/i], ["warcraft3-icon", ["dark-orange", "dark-orange"], /\.wc3$/i], ["warcraft3-icon", ["medium-red", "medium-red"], /\.jass$/i, , !1, , /\.source\.jass$/i, /^Warcraft[\W_ \t]?Iii$|^vjass$/i], ["warcraft3-icon", ["medium-maroon", "medium-maroon"], /\.zn$/i, , !1, , /\.source\.zinc$/i, /^Warcraft[\W_ \t]?Iii$|^Zinc$/i], ["wdl-icon", ["medium-blue", "medium-blue"], /\.wdl$/i, , !1, , /(?:^|\.)wdl(?=$|\.)/i, /^Wdl$|^W[0o]rkfl[0o]w[\W_ \t]?Descripti[0o]n[\W_ \t]?Language$/i], ["owl-icon", ["dark-blue", "dark-blue"], /\.owl$/i], ["wasm-icon", ["medium-blue", "medium-blue"], /\.was?t$/i, , !1, /^wasmtime$/, /(?:^|\.)(?:webassembly|was[mt])(?:\.|$)/i, /^Web[\W_ \t]?Assembly$|^was[mti]$/i], ["wasm-icon", ["medium-red", "medium-red"], /\.wasm$/i], ["webgl-icon", ["dark-red", "dark-red"], /\.webgl$/i], ["webhint-icon", ["dark-purple", "dark-purple"], /^\.hintrc$/i, , !1, /^hint$/], ["webvtt-icon", ["dark-blue", "dark-blue"], /\.vtt$/i, , !1, , /^source\.vtt$/, /^Web[\W_ \t]?Vtt$/i, /^WEBVTT(?=\s|$)/], ["wechat-icon", ["medium-green", "medium-green"], /\.wxml$/i], ["wechat-icon", ["medium-blue", "medium-blue"], /\.wxss$/i], ["wenyan-icon", ["light-orange", "light-orange"], /\.wy$/i, , !1, /^wenyan$/, /^source\.wenyan$/, /^Wenyan$/i], ["wget-icon", ["medium-purple", "medium-purple"], /^wgetrc$|\.wgetrc$/i, , !1, /^wget$/, /\.wgetrc$/i, /^Wget$/i], ["wget-icon", ["medium-maroon", "medium-maroon"], /\.wget-hsts$/i], ["windows-icon", ["medium-purple", "medium-purple"], /\.bat$|\.cmd$/i, , !1, , /(?:^|\.)(?:bat|dosbatch)(?:\.|$)/i, /^(?:bat|(?:DOS|Win)?Batch)$/i], ["windows-icon", [null, null], /\.(?:exe|com|msi)$/i], ["windows-icon", ["medium-blue", "medium-blue"], /\.reg$/i], ["winui-icon", ["medium-blue", "medium-blue"], /\.xaml$/i], ["winui-icon", ["medium-red", "medium-red"], /\.baml$/i], ["wix-icon", ["medium-orange", "medium-orange"], /\.wixproj$/i], ["wix-icon", ["medium-red", "medium-red"], /\.wixobj$/i], ["wix-icon", ["dark-purple", "dark-purple"], /\.wxs$/i], ["wix-icon", ["medium-orange", "dark-orange"], /\.wxi$/i], ["wix-icon", ["medium-maroon", "dark-maroon"], /\.wxl$|\.wix$/i], ["wolfram-icon", ["medium-red", "medium-red"], /\.wl$/i], ["wolfram-icon", ["dark-red", "dark-red"], /\.wls$/i], ["wolfram-icon", ["medium-orange", "dark-orange"], /\.wlt$/i], ["wurst-icon", ["medium-maroon", "medium-maroon"], /\.wurst$/i, , !1, , /\.wurst$/i, /^Wurst[\W_ \t]?Script$|^Wurst[\W_ \t]?Lang$/i], ["x10-icon", ["light-maroon", "light-maroon"], /\.x10$/i, , !1, , /\.x10$/i, /^X1[0o]$|^xten$/i], ["x11-icon", ["medium-orange", "medium-orange"], /\.X(?:authority|clients|initrc|inputrc|profile|resources|session-errors|screensaver)$/i], ["xamarin-icon", ["light-blue", "light-blue"], /\.workbook$/i], ["xmos-icon", ["medium-orange", "medium-orange"], /\.xc$/i], ["appstore-icon", ["medium-blue", "medium-blue"], /\.pbxproj$/i], ["appstore-icon", ["medium-cyan", "medium-cyan"], /\.pbxuser$/i], ["appstore-icon", ["medium-orange", "medium-orange"], /\.xccheckout$/i], ["appstore-icon", ["dark-purple", "dark-purple"], /\.xcplugindata$/i], ["appstore-icon", ["dark-cyan", "dark-cyan"], /\.xcrequiredplugins$|\.xcuserstate$/i], ["appstore-icon", ["medium-purple", "medium-purple"], /\.xcscheme$/i], ["appstore-icon", ["dark-blue", "dark-blue"], /\.xcscmblueprint$/i], ["appstore-icon", ["medium-green", "medium-green"], /\.xcsettings$/i], ["appstore-icon", ["dark-red", "dark-red"], /\.xcworkspacedata$/i], ["appstore-icon", ["medium-red", "medium-red"], /\.mode\dv3$/i], ["xojo-icon", ["medium-green", "medium-green"], /\.xojo_code$/i], ["xojo-icon", ["medium-blue", "medium-blue"], /\.xojo_menu$/i], ["xojo-icon", ["medium-red", "medium-red"], /\.xojo_report$/i], ["xojo-icon", ["dark-green", "dark-green"], /\.xojo_script$/i], ["xojo-icon", ["dark-purple", "dark-purple"], /\.xojo_toolbar$/i], ["xojo-icon", ["dark-cyan", "dark-cyan"], /\.xojo_window$/i], ["xpages-icon", ["medium-blue", "medium-blue"], /\.xsp-config$/i], ["xpages-icon", ["dark-blue", "dark-blue"], /\.xsp\.metadata$/i], ["xmos-icon", ["dark-blue", "dark-blue"], /\.xpl$/i], ["xmos-icon", ["medium-purple", "medium-purple"], /\.xproc$/i], ["sql-icon", ["dark-red", "dark-red"], /\.(?:xquery|xq|xql|xqm|xqy)$/i, , !1, , /\.xq$/i, /^Xquery$/i], ["xtend-icon", ["dark-purple", "dark-purple"], /\.xtend$/i, , !1, , /\.xtend$/i, /^Xtend$/i], ["yaml-icon", ["medium-red", "medium-red"], /\.ya?ml$/i], ["yang-icon", ["medium-yellow", "medium-yellow"], /\.yang$/i, , !1, , /\.yang$/i, /^Yang$/i], ["yara-icon", ["medium-red", "medium-red"], /\.yara?$/i, , !1, /^yara$/, /\.yara$/, /^Yara$/i], ["yarn-icon", ["dark-blue", "dark-blue"], /\.(?:yarnrc|yarnclean|yarn-integrity)$/i], ["yorick-icon", ["medium-orange", "medium-orange"], /\.yorick$/i, , !1, /^yorick$/, /\.yorick$/i, /^Y[0o]rick$/i], ["zbrush-icon", ["dark-purple", "dark-purple"], /\.zpr$/i], ["zbrush-icon", ["medium-red", "dark-red"], /\.ztl$/i], ["crafttweaker-icon", ["medium-maroon", "dark-maroon"], /\.zs$/i, , !1, /^zenscript$/, /\.zenscript$/i, /^zenscript$/i], ["zephir-icon", ["medium-pink", "medium-pink"], /\.zep$/i], ["zig-icon", ["medium-orange", "medium-orange"], /\.zig$/i, , !1, , /\.zig$/i, /^Zig$/i], ["zimpl-icon", ["medium-orange", "medium-orange"], /\.(?:zimpl|zmpl|zpl)$/i], ["zork-icon", ["dark-cyan", "dark-cyan"], /\.zap$/i, , !1, , /\.zap$/i, /^Z[0o]rk[\W_ \t]?Assembly$|^Zap$/i], ["zork-icon", ["dark-green", "dark-green"], /\.xzap$|^s4\.errors$/i], ["zork-icon", ["medium-red", "medium-red"], /\.zabstr?$/i], ["zork-icon", ["dark-blue", "dark-blue"], /\.zil$/i, , !1, , /\.zil$/i, /^Z[0o]rk[\W_ \t]?Interpreter[\W_ \t]?Language$|^Zil$/i], ["zork-icon", ["medium-maroon", "medium-maroon"], /\.mud$/i], ["dotjs-icon", ["medium-blue", "medium-blue"], /\.dot$/i, 0.9, !1, /^dotjs$/, /\.dotjs$/i, /^d[0o][\W_ \t]?T\.?js$|^d[0o]tjs$/i], ["openvms-icon", ["medium-orange", "medium-orange"], /\.com$/i, 0.9, !1, , /\.dcl$/i, /^[0o]pen[\W_ \t]?Vms$|^Digital[\W_ \t]?C[0o]mmand[\W_ \t]?Language$/i], ["v-icon", ["medium-blue", "medium-blue"], /\.v$/i, 0.9, !1, /^v$/i, /\.v$/i, /^V$/i], ["v-icon", ["dark-blue", "dark-blue"], /\.vh$/i, 0.9], ["cabal-icon", ["medium-blue", "medium-blue"], /^cabal\../i, 0.75], ["config-icon", ["dark-blue", "dark-blue"], /[\/\\]fontforge[\/\\]hotkeys[\/\\][^\/\\]+/i, 0.75, !0, , /fontforge.hotkeys/i], ["database-icon", ["medium-green", "medium-green"], /term\/O?tab\.[^\/]+$|\/dev[-\w]+\/(?:APL\.bug|[A-Z][-A-Za-z0-9]*)(?:\.fd)?$/i, 0.75, !0], ["outlook-icon", ["dark-cyan", "dark-cyan"], /\.olk14\w*$/i, 0.75], ["image-icon", ["medium-pink", "medium-pink"], /\.pbm$/i, 0.75], ["image-icon", ["medium-grey", "medium-grey"], /\.pgm$/i, 0.75], ["image-icon", ["dark-maroon", "dark-maroon"], /\.ppm$/i, 0.75], ["image-icon", ["medium-blue", "medium-blue"], /\.pnm$/i, 0.75], ["ai-icon", ["medium-orange", "medium-orange"], /^(?:AIAppResources|Adobe Illustrator(?: Cloud)? Prefs|Last Used Asset Export Settings|Tools Panel Presets)$/, 0.5, !1, , , , /^\/(?:Menus|collection1) \{(?:\r?\n|\r)/], ["animestudio-icon", ["medium-maroon", "medium-maroon"], /\.anme$|\.animebrush$/i, 0.5], ["animestudio-icon", ["medium-orange", "medium-orange"], /\.anime$/i, 0.5], ["animestudio-icon", ["medium-blue", "medium-blue"], /\.animeaction$/i, 0.5], ["animestudio-icon", ["medium-yellow", "medium-yellow"], /\.animeexport$/i, 0.5], ["animestudio-icon", ["medium-purple", "medium-purple"], /\.animestyle$/i, 0.5], ["apple-icon", ["medium-blue", "medium-blue"], /^com\.apple\./, 0.5], ["icon-circuit-board", ["dark-blue", "dark-blue"], /\.g[0-9]+$/i, 0.5], ["icon-circuit-board", ["dark-green", "dark-green"], /^PCB\.[0-9]+(?:\.backup~?)?$/, 0.5], ["config-icon", ["medium-green", "medium-green"], /^(?:shells|rpc)$/i, 0.5], ["config-ruby-icon", ["medium-red", "dark-red"], /^\.yardopts/i, 0.5], ["database-icon", ["dark-green", "dark-green"], /^term(?:cap|info)/i, 0.5], ["database-icon", ["dark-red", "dark-red"], /^eign$/, 0.5], ["database-icon", ["medium-green", "medium-green"], /^(?:birthtoken|flowers)$/, 0.5, !1, , /^source\.generic-db$/], ["dotenv-icon", ["medium-yellow", "dark-yellow"], /^\.env(?:\.|$)/i, 0.5, !1, , /\.source\.dotenv$/i, /^d[0o]tenv$/i], ["download-icon", ["dark-blue", "dark-blue"], /\.crdownload$/i, 0.5], ["git-icon", ["medium-red", "medium-red"], /\.git(?:ignore|config|attributes)$/i, 0.5], ["lolcode-icon", ["dark-red", "dark-red"], /\.lol$/i, 0.5, !1, /^lci$/, /\.lol$/i, /^L[0o]lc[0o]de$/i], ["sourcemap-icon", ["dark-blue", "dark-blue"], /\.map$|\.mapping$/i, 0.5], ["miranda-icon", ["medium-red", "medium-red"], /\.m$/i, 0.5, !1, , /\.miranda$/i, /^Miranda$/i], ["model-icon", ["medium-green", "medium-green"], /\.x$/i, 0.5, !1, , /(?:^|\.)direct-?x(?:$|\.)/i, /^Direct[\W_ \t]?X[\W_ \t]?3[\W_ \t]?D[\W_ \t]?File$/i, /^xof 0303(?:txt|bin|tzip|bzip)\b/], ["openbsd-icon", ["medium-orange", "dark-orange"], /^\+(?:CONTENTS|DESC|DISPLAY)$/, 0.5, !1, , /\.openbsd-pkg\.(?:contents|desc)$/, /^[0o]pen[\W_ \t]?Bsd$/i], ["picolisp-icon", ["medium-purple", "medium-purple"], /\.l$/i, 0.5, !1, /^(?:picolisp|pil)$/], ["postscript-icon", ["medium-red", "medium-red"], /\.bez$/i, 0.5, !1, , /\.stdbez$/i, /^P[0o]st[\W_ \t]?Script$|^(?:St(?:andar)?d )B[eè]zier$/i], ["postscript-icon", ["medium-red", "medium-red"], /\/Resource\/[A-Z]\w+\/[^\/]+$|(?:^|\/)(?:cidfmap|xlatmap|PPI_CUtils|Pscript5Idiom)$/i, 0.5, !0, , , , /^%+\s+Copyright\s+\(C\)\s+(?:[-\d]+),?\s+Artifex\sSoftware\b/i], ["manpage-icon", ["dark-green", "dark-green"], /(?:^|\/)samples\/(?:eqn|mm|[nt]?roff|pic|tbl)\.[a-z]+$/i, 0.5, !0], ["terminal-icon", ["dark-blue", "dark-blue"], /rc_Apple_Terminal$/i, 0.5], ["database-icon", ["dark-blue", "dark-blue"], /\.schema$/i, 0.25], ["gnome-icon", [null, null], /\.gtk/, 0.25], ["test-generic-icon", ["medium-green", "medium-green"], /\.test$/i, 0.25], ["android-icon", ["dark-cyan", "dark-cyan"], /\.webarchivexml$/i, 0.2], ["diff-icon", ["medium-red", "medium-red"], /\.diffs$/i, 0.1], ["bundler-icon", ["medium-red", "medium-red"], /gemfile/i, 0.01], ["apache-icon", ["medium-red", "medium-red"], /^httpd\.conf/i, 0], ["checklist-icon", ["medium-yellow", "medium-yellow"], /TODO/, 0], ["config-icon", [null, null], /config|settings|option|pref/i, 0], ["doge-icon", ["medium-yellow", "medium-yellow"], /\.djs$/i, 0, !1, , /\.dogescript$/i, /^D[0o]gescript$/i], ["finder-icon", ["dark-blue", "dark-blue"], /^\._./, 0, !1, , , , /^\0\x05\x16[\0\x07]/], ["finder-icon", ["dark-cyan", "dark-cyan"], /\.DS_Store$/i, 0, !1, , , , /^\0{3}\x1Bud1\0/], ["gear-icon", [null, null], /^\./, 0], ["gnu-icon", ["medium-red", "dark-red"], /^(?:[AL]?GPL|GFDL)(?:\b|_)/, 0], ["checklist-icon", ["dark-red", "dark-red"], /^contrib\.make?(?:[-.]|$)/i, 0], ["book-icon", ["medium-blue", "medium-blue"], /\b(?:changelog|copying(?:v?\d)?|install|notes?|notices?|read[-_]?me)\b|^licen[sc]es?[-._]/i, 0], ["book-icon", ["dark-blue", "dark-blue"], /^(?:news|release[-_.]?notes)(?:[-_.]?[-\d]+)?$|^sudo[-_]lecture$/i, 0], ["book-icon", ["dark-blue", "dark-blue"], /^zork\d\.(?!pre$|pur$)[a-z]+$/, 0], ["key-icon", ["dark-blue", "dark-blue"], /\.ssh[\/\\][^\/\\\s]+$/, 0, !0], ["v8-icon", ["medium-blue", "medium-blue"], /^(?:[dv]8|v8[-_.][^.]*|mksnapshot|mkpeephole)$/i, 0]], [[20, 169, 176, 182, 188, 189, 323, 369, 414, 440, 448, 461, 465, 467, 492, 515, 519, 520, 521, 522, 527, 530, 531, 535, 545, 549, 571, 600, 601, 616, 621, 628, 633, 636, 640, 671, 687, 692, 693, 694, 698, 702, 707, 711, 712, 718, 727, 732, 757, 762, 765, 775, 784, 794, 795, 799, 800, 809, 839, 861, 866, 870, 884, 885, 889, 896, 898, 899, 900, 903, 905, 906, 910, 913, 916, 917, 935, 938, 958, 969, 973, 974, 979, 1001, 1002, 1005, 1006, 1008, 1009, 1011, 1012, 1014, 1060, 1061, 1064, 1070, 1087, 1088, 1089, 1097, 1100, 1102, 1117, 1124, 1131, 1133, 1137, 1146, 1147, 1155, 1158, 1162, 1164, 1171, 1174, 1184, 1194, 1215, 1222, 1225, 1226, 1280, 1283, 1286, 1298, 1307, 1315, 1316, 1328, 1331, 1335, 1337, 1340, 1351, 1352, 1354, 1377, 1382, 1383, 1386, 1431, 1434, 1447, 1448, 1449, 1455, 1460, 1461, 1473, 1474, 1489, 1498, 1500, 1503, 1506, 1507, 1510, 1511, 1514, 1532, 1535, 1536, 1539, 1540, 1557, 1564, 1570, 1580, 1582, 1585, 1590, 1591, 1592, 1598, 1603, 1609, 1616, 1617, 1619, 1621, 1624, 1625, 1640, 1642, 1645, 1647, 1655, 1673, 1677, 1679, 1702, 1705, 1709, 1718, 1734, 1750, 1758, 1759, 1760, 1766, 1796, 1798, 1802, 1818, 1830, 1832, 1850, 1876, 1883, 1886, 1890, 1891, 1935, 1937, 1940, 1949, 1951, 1978, 1983], [9, 12, 15, 64, 93, 137, 182, 189, 193, 212, 217, 228, 291, 301, 311, 320, 321, 368, 369, 383, 407, 409, 410, 413, 415, 420, 423, 440, 444, 448, 452, 454, 455, 459, 461, 463, 464, 465, 467, 469, 470, 471, 479, 483, 484, 485, 487, 488, 489, 491, 492, 494, 515, 517, 518, 519, 520, 521, 522, 527, 530, 531, 535, 537, 538, 545, 549, 557, 559, 560, 562, 563, 564, 570, 571, 579, 580, 581, 585, 588, 592, 594, 599, 614, 615, 616, 619, 620, 621, 626, 628, 630, 633, 636, 637, 638, 640, 662, 671, 678, 680, 685, 686, 687, 688, 690, 691, 692, 693, 694, 695, 696, 698, 699, 700, 702, 703, 706, 707, 708, 711, 712, 718, 719, 722, 727, 730, 732, 735, 738, 743, 745, 747, 749, 754, 756, 763, 765, 770, 771, 773, 774, 775, 778, 779, 780, 781, 783, 784, 791, 794, 795, 798, 799, 800, 806, 807, 809, 814, 815, 839, 840, 843, 844, 847, 854, 855, 856, 857, 859, 860, 861, 862, 863, 865, 866, 869, 870, 893, 894, 900, 906, 913, 916, 917, 918, 921, 928, 935, 938, 939, 940, 945, 947, 948, 952, 954, 955, 956, 957, 958, 962, 965, 969, 970, 973, 974, 976, 977, 979, 980, 981, 982, 984, 994, 995, 1e3, 1002, 1006, 1008, 1009, 1011, 1012, 1014, 1015, 1016, 1036, 1051, 1053, 1055, 1058, 1060, 1062, 1064, 1065, 1068, 1070, 1085, 1087, 1088, 1089, 1091, 1092, 1095, 1096, 1097, 1099, 1100, 1101, 1102, 1103, 1106, 1111, 1115, 1117, 1120, 1121, 1123, 1124, 1125, 1130, 1131, 1133, 1137, 1142, 1146, 1147, 1152, 1155, 1158, 1160, 1162, 1164, 1171, 1172, 1174, 1184, 1185, 1186, 1187, 1190, 1194, 1206, 1215, 1222, 1223, 1225, 1226, 1275, 1280, 1282, 1283, 1285, 1286, 1290, 1298, 1299, 1301, 1303, 1307, 1313, 1315, 1322, 1323, 1324, 1326, 1328, 1329, 1330, 1331, 1335, 1337, 1338, 1340, 1343, 1344, 1345, 1351, 1352, 1354, 1367, 1370, 1371, 1372, 1375, 1377, 1382, 1383, 1384, 1386, 1387, 1392, 1393, 1394, 1395, 1396, 1398, 1415, 1423, 1426, 1427, 1428, 1429, 1430, 1432, 1433, 1434, 1444, 1447, 1448, 1449, 1454, 1455, 1460, 1463, 1465, 1471, 1472, 1473, 1474, 1476, 1479, 1480, 1489, 1494, 1497, 1498, 1501, 1502, 1503, 1506, 1507, 1509, 1510, 1511, 1514, 1521, 1526, 1527, 1528, 1529, 1532, 1535, 1536, 1539, 1540, 1549, 1550, 1555, 1557, 1564, 1570, 1573, 1578, 1579, 1580, 1581, 1582, 1585, 1586, 1587, 1590, 1591, 1592, 1598, 1603, 1606, 1609, 1612, 1613, 1614, 1615, 1616, 1617, 1619, 1621, 1624, 1625, 1628, 1632, 1640, 1643, 1645, 1647, 1648, 1652, 1655, 1658, 1663, 1664, 1665, 1666, 1668, 1669, 1671, 1673, 1674, 1675, 1677, 1679, 1691, 1692, 1701, 1703, 1704, 1705, 1709, 1712, 1714, 1715, 1718, 1719, 1720, 1722, 1734, 1740, 1742, 1748, 1750, 1753, 1755, 1758, 1759, 1760, 1766, 1774, 1775, 1776, 1789, 1790, 1792, 1793, 1794, 1795, 1796, 1797, 1798, 1800, 1802, 1811, 1813, 1818, 1823, 1827, 1828, 1830, 1832, 1850, 1857, 1875, 1876, 1877, 1879, 1880, 1881, 1883, 1887, 1890, 1891, 1893, 1906, 1907, 1931, 1932, 1934, 1935, 1937, 1940, 1942, 1944, 1947, 1949, 1950, 1951, 1975, 1978, 1980, 1981, 1982, 1984, 1997], [0, 10, 11, 16, 90, 307, 322, 352, 353, 364, 386, 392, 393, 394, 395, 397, 399, 403, 404, 578, 672, 673, 674, 675, 731, 733, 734, 1082, 1593, 1649, 1763, 1954, 1955, 1985, 1986, 2006], [2, 9, 12, 15, 64, 93, 137, 182, 189, 193, 212, 217, 228, 291, 301, 311, 320, 321, 352, 367, 368, 369, 383, 407, 409, 410, 413, 415, 420, 423, 440, 444, 448, 452, 454, 455, 459, 461, 463, 464, 465, 467, 469, 470, 471, 479, 483, 484, 485, 487, 488, 489, 491, 492, 494, 515, 517, 518, 519, 520, 521, 522, 527, 530, 531, 535, 537, 538, 545, 549, 557, 559, 560, 562, 563, 564, 570, 571, 579, 580, 581, 585, 588, 592, 594, 599, 600, 601, 614, 615, 616, 619, 620, 621, 626, 628, 630, 633, 636, 637, 638, 640, 662, 663, 667, 668, 671, 676, 678, 680, 685, 686, 687, 688, 690, 691, 692, 693, 694, 695, 696, 698, 699, 700, 702, 703, 706, 707, 708, 711, 712, 717, 718, 719, 721, 722, 723, 727, 730, 732, 735, 738, 743, 745, 747, 749, 754, 756, 763, 765, 770, 771, 773, 774, 775, 778, 779, 780, 781, 783, 784, 791, 794, 795, 798, 799, 800, 806, 807, 809, 814, 815, 834, 839, 840, 843, 844, 847, 854, 855, 856, 857, 859, 860, 861, 862, 863, 865, 866, 869, 870, 883, 884, 885, 889, 892, 893, 894, 896, 898, 899, 900, 903, 904, 905, 906, 907, 909, 910, 913, 916, 917, 918, 921, 928, 935, 938, 939, 940, 945, 947, 948, 952, 954, 955, 956, 957, 958, 962, 965, 969, 970, 973, 974, 976, 977, 979, 980, 981, 982, 984, 994, 995, 1e3, 1001, 1002, 1003, 1005, 1006, 1008, 1009, 1011, 1012, 1014, 1015, 1016, 1036, 1051, 1053, 1055, 1058, 1060, 1062, 1064, 1065, 1068, 1070, 1085, 1087, 1088, 1089, 1091, 1092, 1095, 1096, 1097, 1099, 1100, 1101, 1102, 1103, 1106, 1111, 1115, 1117, 1120, 1121, 1123, 1124, 1125, 1130, 1131, 1133, 1137, 1142, 1146, 1147, 1152, 1155, 1158, 1160, 1162, 1164, 1171, 1172, 1174, 1184, 1185, 1186, 1187, 1190, 1194, 1206, 1215, 1222, 1223, 1225, 1226, 1275, 1280, 1282, 1283, 1285, 1286, 1288, 1289, 1290, 1294, 1298, 1299, 1301, 1303, 1307, 1313, 1315, 1322, 1323, 1324, 1326, 1328, 1329, 1330, 1331, 1335, 1337, 1338, 1340, 1343, 1344, 1345, 1351, 1352, 1354, 1367, 1370, 1371, 1372, 1375, 1377, 1382, 1383, 1384, 1386, 1387, 1392, 1393, 1394, 1395, 1396, 1398, 1415, 1423, 1426, 1427, 1428, 1429, 1430, 1432, 1433, 1434, 1444, 1447, 1448, 1449, 1454, 1455, 1460, 1463, 1465, 1471, 1472, 1473, 1474, 1476, 1479, 1480, 1489, 1494, 1497, 1498, 1501, 1502, 1503, 1506, 1507, 1509, 1510, 1511, 1514, 1521, 1526, 1527, 1528, 1529, 1532, 1535, 1536, 1539, 1540, 1549, 1550, 1555, 1557, 1564, 1570, 1573, 1578, 1579, 1580, 1581, 1582, 1585, 1586, 1587, 1590, 1591, 1592, 1598, 1603, 1606, 1609, 1612, 1613, 1614, 1615, 1616, 1617, 1619, 1621, 1624, 1625, 1628, 1632, 1634, 1640, 1642, 1643, 1645, 1647, 1648, 1652, 1655, 1658, 1663, 1664, 1665, 1666, 1668, 1669, 1671, 1673, 1674, 1675, 1677, 1679, 1680, 1691, 1692, 1701, 1703, 1704, 1705, 1709, 1712, 1714, 1715, 1718, 1719, 1720, 1722, 1733, 1734, 1740, 1742, 1748, 1750, 1753, 1755, 1758, 1759, 1760, 1766, 1770, 1774, 1775, 1776, 1789, 1790, 1792, 1793, 1794, 1795, 1796, 1797, 1798, 1800, 1802, 1811, 1813, 1818, 1823, 1827, 1828, 1830, 1832, 1850, 1857, 1875, 1876, 1877, 1879, 1880, 1881, 1883, 1887, 1890, 1891, 1893, 1906, 1907, 1931, 1932, 1934, 1935, 1937, 1940, 1942, 1944, 1947, 1949, 1950, 1951, 1954, 1974, 1975, 1978, 1980, 1981, 1982, 1984, 1997], [0, 3, 4, 310, 370, 416, 434, 445, 465, 498, 499, 500, 501, 502, 503, 504, 505, 506, 507, 509, 510, 511, 598, 643, 644, 645, 646, 647, 650, 651, 652, 656, 658, 659, 668, 682, 720, 749, 753, 814, 822, 823, 824, 825, 826, 827, 830, 831, 832, 834, 838, 882, 883, 884, 894, 910, 987, 988, 1e3, 1019, 1020, 1021, 1022, 1023, 1024, 1025, 1026, 1027, 1028, 1029, 1030, 1031, 1032, 1034, 1035, 1036, 1037, 1038, 1039, 1041, 1042, 1044, 1045, 1048, 1244, 1294, 1296, 1320, 1397, 1420, 1422, 1446, 1455, 1460, 1476, 1479, 1480, 1493, 1567, 1569, 1590, 1591, 1608, 1657, 1688, 1761, 1820, 1821, 1822, 1824, 1839, 1840, 1841, 1842, 1843, 1844, 1845, 1846, 1847, 1848, 1849, 1851, 1855, 1887, 1961, 1981, 1985, 1998, 1999]], { binary: 539, coffee: 633, go: 939, haskell: 979, js: 1070, perl: 1449, python: 1511, ruby: 1598, rust: 1603, executable: 1640, coffeeTest: 385, genericTest: 386, goTest: 387, haskellTest: 388, jsTest: 389, perlTest: 1752, pythonTest: 396, rubyTest: 306, rustTest: 400, tsTest: 401, ts: 1798 }]];
const Qr = class {
  constructor(o, r, e, i, n = 1, t = null, a = null, d = null, m = null, c = null) {
    this.index = o, this.icon = r, this.colour = e, this.match = i, this.priority = n, this.matchPath = t || !1, this.interpreter = a || null, this.scope = d || null, this.lang = m || null, this.signature = c || null;
  }
  getClass(o = null, r = !1) {
    return o === null || this.colour[0] === null ? r ? [this.icon] : this.icon : r ? [this.icon, this.colour[o]] : this.icon + " " + this.colour[o];
  }
};
class yi {
  constructor() {
    const r = Yr;
    this.taggedIcons = { __proto__: null }, this.directoryIcons = this.read(r[0]), this.fileIcons = this.read(r[1]);
  }
  read(r) {
    let [e, i, n] = r;
    e = e.map((l, s) => new Qr(s, ...l)), i = i.map((l) => l.map((s) => e[s]));
    for (const l in n)
      this.taggedIcons[l] = e[n[l]];
    const [t, a, d, m, c] = i;
    return { byName: e, byInterpreter: t, byLanguage: a, byPath: d, byScope: m, bySignature: c };
  }
  matchName(r, e = !1) {
    const [i, n] = e ? [j.directoryName, this.directoryIcons.byName] : [j.fileName, this.fileIcons.byName], t = i.get(r);
    if (t)
      return t;
    for (let a = 0, d = n.length; a < d; ++a) {
      const m = n[a];
      if (m.match.test(r))
        return i.set(r, m), m;
    }
    return null;
  }
  matchPath(r, e = !1) {
    const [i, n] = e ? [j.directoryName, this.directoryIcons.byPath] : [j.fileName, this.fileIcons.byPath], t = i.get(r);
    if (t)
      return t;
    for (let a = 0, d = n.length; a < d; ++a) {
      const m = n[a];
      if (m.match.test(r))
        return i.set(r, m), m;
    }
    return null;
  }
  matchLanguage(r) {
    const e = j.language.get(r);
    if (e)
      return e;
    const i = this.fileIcons.byLanguage;
    for (let n = 0, t = i.length; n < t; ++n) {
      const a = i[n];
      if (a.lang.test(r))
        return j.language.set(r, a), a;
    }
    return null;
  }
  matchScope(r) {
    const e = j.scope.get(r);
    if (e)
      return e;
    const i = this.fileIcons.byScope;
    for (let n = 0, t = i.length; n < t; ++n) {
      const a = i[n];
      if (a.scope.test(r))
        return j.scope.set(r, a), a;
    }
    return null;
  }
  matchInterpreter(r) {
    const e = j.interpreter.get(r);
    if (e)
      return e;
    const i = this.fileIcons.byInterpreter;
    for (let n = 0, t = i.length; n < t; ++n) {
      const a = i[n];
      if (a.interpreter.test(r))
        return j.interpreter.set(r, a), a;
    }
    return null;
  }
  matchSignature(r) {
    const e = j.signature.get(r);
    if (e)
      return e;
    const i = this.fileIcons.bySignature;
    for (let n = 0, t = i.length; n < t; ++n) {
      const a = i[n];
      if (a.signature.test(r))
        return j.signature.set(r, a), a;
    }
    if (/\0/.test(r)) {
      const n = this.taggedIcons.binary;
      return j.signature.set(r, n), n;
    }
    return null;
  }
}
const j = { directoryName: /* @__PURE__ */ new Map(), directoryPath: /* @__PURE__ */ new Map(), fileName: /* @__PURE__ */ new Map(), filePath: /* @__PURE__ */ new Map(), interpreter: /* @__PURE__ */ new Map(), scope: /* @__PURE__ */ new Map(), language: /* @__PURE__ */ new Map(), signature: /* @__PURE__ */ new Map() };
Object.defineProperty(yi.prototype, "cache", { get: () => j });
var Zr = new yi(), eo = Zr;
const F = /* @__PURE__ */ Ti(eo);
F.getClassByName = function(o) {
  const r = F.matchName(o);
  return r ? r.getClass(0, !1) : null;
};
F.getClassByLanguage = function(o) {
  const r = F.matchLanguage(o);
  return r ? r.getClass(0, !1) : null;
};
const io = {
  placement: "bottom-start",
  modifiers: {
    offset: {
      offset: "0, 0"
    }
  },
  showArrow: !1
};
class ro extends ye {
  constructor(e, i = {}) {
    const n = "mu-list-picker", t = Object.assign({}, io, i);
    super(e, n, t);
    u(this, "oldVNode", null);
    u(this, "block", null);
    this.listen();
  }
  listen() {
    super.listen();
    const { eventCenter: e } = this.muya;
    e.on("content-change", ({ block: i }) => {
      if (i.blockName !== "paragraph.content" && i.blockName !== "language-input")
        return;
      const { text: n, domNode: t } = i;
      let a = "";
      if (i.blockName === "paragraph.content") {
        const m = n.match(/(^ {0,3}`{3,})([^` ]+)/);
        m && m[2] && (a = m[2]);
      } else
        i.blockName === "language-input" && (a = n);
      const d = Ai(a);
      d.length ? (this.block = i, this.show(t), this.renderArray = d, this.activeItem = d[0], this.render()) : this.hide();
    });
  }
  render() {
    const { renderArray: e, oldVNode: i, scrollElement: n, activeItem: t } = this;
    let a = e.map((m) => {
      let c;
      m.name && (c = F.getClassByLanguage(m.name)), !c && m.name === "markdown" && (c = F.getClassByName("fakeName.md"));
      const l = f("div.language", m.name), s = t === m ? "li.item.active" : "li.item", p = [l];
      if (c) {
        const $ = "span" + c.split(/\s/).map((b) => `.${b}`).join(""), g = f("div.icon-wrapper", f($));
        p.push(g);
      }
      return f(
        s,
        {
          dataset: {
            label: m.name
          },
          on: {
            click: () => {
              this.selectItem(m);
            }
          }
        },
        p
      );
    });
    a.length === 0 && (a = [f("div.no-result", "No result")]);
    const d = f("ul", a);
    i ? v(i, d) : v(n, d), this.oldVNode = d;
  }
  getItemElement(e) {
    const { name: i } = e;
    return this.floatBox.querySelector(`[data-label="${i}"]`);
  }
  selectItem(e) {
    var d, m, c;
    const { block: i, muya: n } = this, { name: t } = e;
    if (!i)
      return;
    function a(l) {
      return l.blockName === "paragraph.content";
    }
    if (a(i)) {
      const l = n.options.isGitlabCompatibilityEnabled && t === "math" ? {
        name: "math-block",
        meta: {
          mathStyle: "gitlab"
        },
        text: ""
      } : {
        name: "code-block",
        meta: {
          lang: t,
          type: "fenced"
        },
        text: ""
      }, s = C.loadBlock(l.name).create(
        this.muya,
        l
      );
      (d = i.parent) == null || d.replaceWith(s), s.lastContentInDescendant().setCursor(0, 0);
    } else
      i.text = t, i.update(), i.parent.lang = t, (c = (m = i.parent) == null ? void 0 : m.lastContentInDescendant()) == null || c.setCursor(0, 0);
    super.selectItem(e);
  }
}
u(ro, "pluginName", "codePicker");
const oo = [
  {
    type: "left",
    tooltip: "Align Left",
    icon: Be
  },
  {
    type: "center",
    tooltip: "Align Center",
    icon: Pe
  },
  {
    type: "right",
    tooltip: "Align Right",
    icon: Ne
  },
  {
    type: "insert left",
    tooltip: "Insert Column left",
    icon: Xi
  },
  {
    type: "insert right",
    tooltip: "Insert Column right",
    icon: Yi
  },
  {
    type: "remove",
    tooltip: "Remove Column",
    icon: Qi
  }
], no = 27, to = {
  placement: "top",
  modifiers: {
    offset: {
      offset: "0, 0"
    }
  },
  showArrow: !1
};
class ao extends M {
  constructor(e, i = {}) {
    const n = "mu-table-column-tools", t = Object.assign({}, to, i);
    super(e, n, t);
    u(this, "oldVNode", null);
    u(this, "block", null);
    u(this, "icons", oo);
    u(this, "toolsContainer", document.createElement("div"));
    this.options = t, this.container.appendChild(this.toolsContainer), this.floatBox.classList.add("mu-table-column-tools-container"), this.listen();
  }
  listen() {
    const { eventCenter: e } = this.muya;
    super.listen();
    const i = H((n) => {
      if (!O(n))
        return;
      const { x: t, y: a } = n, d = [...document.elementsFromPoint(t, a)], m = [...document.elementsFromPoint(t, a + no)], c = (l) => l.some(
        (s) => s[y] && s[y].blockName === "table.cell"
      );
      if (!c(d) && c(m)) {
        const { ui: l } = this.muya;
        for (const { name: $, status: g } of l.shownFloat)
          if ($ === "mu-format-picker" && g)
            return this.hide();
        const s = m.find(
          ($) => $[y] && $[y].blockName === "table.cell"
        ), p = s[y];
        this.block = p, this.show(s), this.render();
      } else
        this.hide();
    }, 300);
    e.attachDOMEvent(document.body, "mousemove", i);
  }
  render() {
    const { icons: e, oldVNode: i, toolsContainer: n, block: t } = this, { i18n: a } = this.muya, d = e.map((c) => {
      const l = "div.icon-wrapper", s = f(
        "i.icon",
        f(
          "i.icon-inner",
          {
            style: {
              background: `url(${c.icon}) no-repeat`,
              "background-size": "100%"
            }
          },
          ""
        )
      ), p = f(l, s);
      let $ = `li.item.${c.type}`;
      return (t == null ? void 0 : t.align) === c.type && ($ += ".active"), c.type === "remove" && ($ += ".delete"), f(
        $,
        {
          attrs: {
            title: `${a.t(c.tooltip)}`
          },
          on: {
            click: (g) => {
              this.selectItem(g, c);
            }
          }
        },
        [p]
      );
    }), m = f("ul", d);
    i ? v(i, m) : v(n, m), this.oldVNode = m;
  }
  selectItem(e, i) {
    e.preventDefault(), e.stopPropagation();
    const { block: n } = this;
    if (!n || !n.parent)
      return;
    const t = n.parent.offset(n), { table: a, row: d } = n, m = d.offset(this.block);
    switch (i.type) {
      case "remove":
        return n.table.removeColumn(t), this.hide();
      case "insert left":
      case "insert right": {
        const c = i.type === "insert left" ? m : m + 1, l = a.insertColumn(c);
        return l && l.setCursor(0, 0), this.hide();
      }
      default:
        return n.table.alignColumn(t, i.type), this.render();
    }
  }
}
u(ao, "pluginName", "tableColumnTools");
const mo = Oi("quickInsert:"), w = G ? "⌘" : "Ctrl", T = G ? "⌥" : "Alt", co = G ? "⇧" : "Shift", oe = [
  {
    name: "basic blocks",
    children: [
      {
        title: "Paragraph",
        subTitle: "Lorem Ipsum text",
        label: "paragraph",
        shortCut: `${w}+0`,
        shortKeyMap: {
          altKey: !1,
          shiftKey: !1,
          metaKey: !0,
          code: "Digit0"
        },
        icon: ee
      },
      {
        title: "Horizontal Line",
        subTitle: "---",
        label: "thematic-break",
        shortCut: `${T}+${w}+-`,
        shortKeyMap: {
          altKey: !0,
          shiftKey: !1,
          metaKey: !0,
          code: "Minus"
        },
        icon: Ue
      },
      {
        title: "Front Matter",
        subTitle: "--- Lorem Ipsum ---",
        label: "frontmatter",
        shortCut: `${T}+${w}+Y`,
        shortKeyMap: {
          altKey: !0,
          shiftKey: !1,
          metaKey: !0,
          code: "KeyY"
        },
        icon: qe
      }
    ]
  },
  {
    name: "headers",
    children: [
      {
        title: "Header 1",
        subTitle: "# Lorem Ipsum...",
        label: "atx-heading 1",
        shortCut: `${w}+1`,
        shortKeyMap: {
          altKey: !1,
          shiftKey: !1,
          metaKey: !0,
          code: "Digit1"
        },
        icon: Fe
      },
      {
        title: "Header 2",
        subTitle: "## Lorem Ipsum...",
        label: "atx-heading 2",
        shortCut: `${w}+2`,
        shortKeyMap: {
          altKey: !1,
          shiftKey: !1,
          metaKey: !0,
          code: "Digit2"
        },
        icon: Re
      },
      {
        title: "Header 3",
        subTitle: "### Lorem Ipsum...",
        label: "atx-heading 3",
        shortCut: `${w}+3`,
        shortKeyMap: {
          altKey: !1,
          shiftKey: !1,
          metaKey: !0,
          code: "Digit3"
        },
        icon: Ke
      },
      {
        title: "Header 4",
        subTitle: "#### Lorem Ipsum...",
        label: "atx-heading 4",
        shortCut: `${w}+4`,
        shortKeyMap: {
          altKey: !1,
          shiftKey: !1,
          metaKey: !0,
          code: "Digit4"
        },
        icon: Ve
      },
      {
        title: "Header 5",
        subTitle: "##### Lorem Ipsum...",
        label: "atx-heading 5",
        shortCut: `${w}+5`,
        shortKeyMap: {
          altKey: !1,
          shiftKey: !1,
          metaKey: !0,
          code: "Digit5"
        },
        icon: He
      },
      {
        title: "Header 6",
        subTitle: "###### Lorem Ipsum...",
        label: "atx-heading 6",
        shortCut: `${w}+6`,
        shortKeyMap: {
          altKey: !1,
          shiftKey: !1,
          metaKey: !0,
          code: "Digit6"
        },
        icon: Ge
      }
    ]
  },
  {
    name: "advanced blocks",
    children: [
      {
        title: "Table Block",
        subTitle: "|Lorem | Ipsum |",
        label: "table",
        // no
        shortCut: `${co}+${w}+T`,
        shortKeyMap: {
          altKey: !1,
          shiftKey: !0,
          metaKey: !0,
          code: "KeyT"
        },
        icon: Qe
      },
      {
        title: "Display Math",
        subTitle: "$$ Lorem Ipsum $$",
        label: "math-block",
        shortCut: `${T}+${w}+M`,
        shortKeyMap: {
          altKey: !0,
          shiftKey: !1,
          metaKey: !0,
          code: "KeyM"
        },
        icon: Xe
      },
      {
        title: "HTML Block",
        subTitle: "<div> Lorem Ipsum </div>",
        label: "html-block",
        shortCut: `${T}+${w}+J`,
        shortKeyMap: {
          altKey: !0,
          shiftKey: !1,
          metaKey: !0,
          code: "KeyJ"
        },
        icon: Je
      },
      {
        title: "Code Block",
        subTitle: "```java Lorem Ipsum ```",
        label: "code-block",
        shortCut: `${T}+${w}+C`,
        shortKeyMap: {
          altKey: !0,
          shiftKey: !1,
          metaKey: !0,
          code: "KeyC"
        },
        icon: pe
      },
      {
        title: "Quote Block",
        subTitle: ">Lorem Ipsum ...",
        label: "block-quote",
        // no
        shortCut: `${T}+${w}+Q`,
        shortKeyMap: {
          altKey: !0,
          shiftKey: !1,
          metaKey: !0,
          code: "KeyQ"
        },
        icon: ii
      }
    ]
  },
  {
    name: "list blocks",
    children: [
      {
        title: "Order List",
        subTitle: "1. Lorem Ipsum ...",
        label: "order-list",
        shortCut: `${T}+${w}+O`,
        shortKeyMap: {
          altKey: !0,
          shiftKey: !1,
          metaKey: !0,
          code: "KeyO"
        },
        icon: Ze
      },
      {
        title: "Bullet List",
        subTitle: "- Lorem Ipsum ...",
        label: "bullet-list",
        shortCut: `${T}+${w}+U`,
        shortKeyMap: {
          altKey: !0,
          shiftKey: !1,
          metaKey: !0,
          code: "KeyU"
        },
        icon: Le
      },
      {
        title: "To-do List",
        subTitle: "- [x] Lorem Ipsum ...",
        label: "task-list",
        shortCut: `${T}+${w}+X`,
        shortKeyMap: {
          altKey: !0,
          shiftKey: !1,
          metaKey: !0,
          code: "KeyX"
        },
        icon: ri
      }
    ]
  },
  {
    name: "diagrams",
    children: [
      {
        title: "Vega Chart",
        subTitle: "By vega-lite.js",
        label: "diagram vega-lite",
        icon: ze
      },
      {
        title: "Mermaid",
        subTitle: "By mermaid",
        label: "diagram mermaid",
        icon: Ye
      },
      {
        title: "Plantuml",
        subTitle: "By plantuml",
        label: "diagram plantuml",
        icon: ei
      }
    ]
  }
], lo = (o) => {
  const e = oe.reduce(
    (i, n) => [...i, ...n.children],
    []
  ).find((i) => {
    const { code: n, metaKey: t, shiftKey: a, altKey: d } = o, { shortKeyMap: m = {} } = i;
    return n === (m == null ? void 0 : m.code) && t === m.metaKey && a === m.shiftKey && d === m.altKey;
  });
  if (e)
    return e.label;
}, $e = ({ block: o, muya: r, label: e, text: i = "" }) => {
  const {
    preferLooseListItem: n,
    bulletListMarker: t,
    orderListDelimiter: a,
    frontmatterType: d
  } = r.options;
  let m = null, c = null, l = null;
  switch (e) {
    case "paragraph":
    case "thematic-break":
    case "table":
    case "math-block":
    case "html-block":
    case "code-block":
    case "block-quote":
      c = S(W[e]), e === "paragraph" ? c.text = i : e === "block-quote" && (c.children[0].text = i), m = C.loadBlock(e).create(r, c);
      break;
    case "frontmatter":
      c = S(W.frontmatter), c.meta.style = d, c.meta.lang = /\+-/.test(d) ? "yaml" : "json", m = C.loadBlock(e).create(r, c);
      break;
    case "atx-heading 1":
    case "atx-heading 2":
    case "atx-heading 3":
    case "atx-heading 4":
    case "atx-heading 5":
    case "atx-heading 6":
      c = S(W["atx-heading"]);
      const [s, p] = e.split(" ");
      c.meta.level = +p, c.text = "#".repeat(+p) + " " + i, m = C.loadBlock(s).create(r, c);
      break;
    case "order-list":
      c = S(W[e]), c.meta.loose = n, c.meta.delimiter = a, i && (c.children[0].children[0].text = i), m = C.loadBlock(e).create(r, c);
      break;
    case "bullet-list":
    case "task-list":
      c = S(W[e]), c.meta.loose = n, c.meta.marker = t, i && (c.children[0].children[0].text = i), m = C.loadBlock(e).create(r, c);
      break;
    case "diagram vega-lite":
    case "diagram mermaid":
    case "diagram plantuml":
      c = S(W.diagram);
      const [$, g] = e.split(" ");
      c.meta.type = g, c.meta.lang = g === "vega-lite" ? "json" : "ymal", m = C.loadBlock($).create(r, c);
      break;
    default:
      mo.log("Unknown label in quick insert");
      break;
  }
  if (o.replaceWith(m), e === "thematic-break") {
    const s = C.loadBlock("paragraph").create(
      r,
      S(W.paragraph)
    );
    m.parent.insertAfter(s, m), l = s.firstContentInDescendant(), l.setCursor(0, 0, !0);
  } else {
    l = m.firstContentInDescendant();
    const s = e === "html-block" ? 6 : l.text.length;
    l.setCursor(s, s, !0);
  }
}, so = (o) => /^[/、]\S*$/.test(o), uo = (o) => /^[/、]$/.test(o), $o = (o, r) => {
  var i, n, t;
  const { frontMatter: e } = o.options;
  return e && !((i = r.parent) != null && i.prev) && ((t = (n = r.parent) == null ? void 0 : n.parent) == null ? void 0 : t.blockName) === "scrollpage";
};
class po extends ye {
  // private renderArray: QuickInsertMenuItem["children"][number] = [];
  constructor(e) {
    super(e, "mu-quick-insert");
    u(this, "oldVNode", null);
    u(this, "block", null);
    u(this, "activeItem", null);
    u(this, "_renderData", []);
    this.renderArray = [], this.renderData = oe, this.render(), this.listen();
  }
  get renderData() {
    return this._renderData;
  }
  set renderData(e) {
    if (this._renderData = e, this.renderArray = e.flatMap((i) => i.children), this.renderArray.length > 0) {
      this.activeItem = this.renderArray[0];
      const i = this.getItemElement(this.activeItem);
      this.activeEleScrollIntoView(i);
    }
  }
  listen() {
    super.listen();
    const { eventCenter: e, editor: i, domNode: n, i18n: t } = this.muya;
    e.subscribe("content-change", ({ block: d }) => {
      if (d.blockName !== "paragraph.content")
        return;
      const { text: m, domNode: c } = d, l = so(m);
      uo(m) ? c.setAttribute("placeholder", t.t("Search keyword...")) : c.removeAttribute("placeholder"), l ? (this.block = d, this.show(c), this.search(m.substring(1))) : this.hide();
    });
    const a = (d) => {
      const { anchorBlock: m, isSelectionInSameBlock: c } = i.selection.getSelection() ?? {};
      if (c && m instanceof Di) {
        if (m.text)
          return;
        const l = lo(d);
        l && (d.preventDefault(), $e({
          label: l,
          block: m.parent,
          muya: this.muya
        }));
      }
    };
    e.attachDOMEvent(n, "keydown", a);
  }
  render() {
    const { scrollElement: e, activeItem: i, renderData: n } = this, { i18n: t } = this.muya;
    let a = n.map((m) => {
      const c = f("div.title", t.t(m.name).toUpperCase()), l = [];
      for (const s of m.children) {
        const { title: p, subTitle: $, label: g, icon: b, shortCut: x } = s, h = f(
          "div.icon-container",
          f(
            "i.icon",
            f(
              `i.icon-${g.replace(/\s/g, "-")}`,
              {
                style: {
                  background: `url(${b}) no-repeat`,
                  "background-size": "100%"
                }
              },
              ""
            )
          )
        ), k = f("div.description", [
          f(
            "div.big-title",
            {
              attrs: { title: $ }
            },
            t.t(p)
          )
        ]), I = f("div.short-cut", [f("span", x)]), A = i.label === g ? "div.item.active" : "div.item";
        l.push(
          f(
            A,
            {
              dataset: { label: g },
              on: {
                click: () => {
                  this.selectItem(s);
                }
              }
            },
            [h, k, I]
          )
        );
      }
      return f("section", [c, ...l]);
    });
    a.length === 0 && (a = [f("div.no-result", t.t("No result"))]);
    const d = f("div", a);
    this.oldVNode ? v(this.oldVNode, d) : v(e, d), this.oldVNode = d;
  }
  search(e) {
    var c;
    const { muya: i, block: n } = this, { i18n: t } = i, a = $o(i, n), d = S(oe);
    a || (c = d.find((l) => l.name === "basic blocks")) == null || c.children.splice(2, 1);
    let m = d;
    if (e !== "") {
      m = [];
      for (const l of d) {
        for (const $ of l.children)
          $.i18nTitle = t.t($.title);
        const p = new De(l.children, {
          includeScore: !0,
          keys: ["i18nTitle", "title"]
        }).search(e).map(($) => ({ score: $.score, ...$.item }));
        p.length && m.push({
          name: l.name,
          children: p
        });
      }
      m.length && m.sort((l, s) => l.children[0].score < s.children[0].score ? -1 : 1);
    }
    this.renderData = m, this.render();
  }
  selectItem({ label: e }) {
    const { block: i, muya: n } = this;
    $e({
      label: e,
      block: i.parent,
      muya: n
    }), setTimeout(this.hide.bind(this));
  }
  getItemElement(e) {
    const { label: i } = e;
    return this.scrollElement.querySelector(
      `[data-label="${i}"]`
    );
  }
}
u(po, "pluginName", "quickInsert");
const go = (o, r) => {
  const e = o.firstChild.domNode;
  if (r === "bottom") {
    const i = e.querySelector("tr");
    return Array.from(i.children).map((n) => n.clientWidth);
  } else
    return Array.from(e.querySelectorAll("tr")).map(
      (i) => i.clientHeight
    );
}, fo = (o) => {
  const e = o.firstChild.domNode.querySelectorAll("tr"), i = [];
  for (const n of Array.from(e))
    i.push(Array.from(n.children));
  return i;
}, bo = (o, r) => {
  const { row: e, table: i } = r;
  return o === "bottom" ? e.offset(r) : i.firstChild.offset(e);
}, ko = (o, r, e) => {
  const i = o.firstChild.domNode, n = [];
  if (r === "right") {
    const t = [...i.querySelectorAll("tr")][e];
    n.push(...t.children);
  } else {
    const t = [...i.querySelectorAll("tr")], a = t.length;
    let d;
    for (d = 0; d < a; d++)
      n.push(t[d].children[e]);
  }
  return n;
}, Ee = 20, ho = {
  placement: "right",
  modifiers: {
    offset: {
      offset: "0, 0"
    }
  },
  showArrow: !1
}, Te = {
  placement: "bottom",
  modifiers: {
    offset: {
      offset: "0, 0"
    }
  },
  showArrow: !1
};
class yo extends M {
  constructor(e, i = {}) {
    const n = "mu-table-drag-bar", t = Object.assign({}, Te, i);
    super(e, n, t);
    u(this, "block", null);
    u(this, "mouseTimer", null);
    u(this, "dragEventIds", []);
    u(this, "isDragTableBar", !1);
    u(this, "barType", null);
    u(this, "dragInfo", null);
    u(this, "mousedown", (e) => {
      e.preventDefault(), e.stopPropagation(), this.mouseTimer = setTimeout(() => {
        this.startDrag(e), this.mouseTimer = null;
      }, 300);
    });
    u(this, "mouseup", (e) => {
      e.preventDefault(), e.stopPropagation();
      const { container: i, barType: n } = this, { eventCenter: t } = this.muya;
      this.mouseTimer && (clearTimeout(this.mouseTimer), this.mouseTimer = null, n === "right" && t.emit("muya-table-bar", {
        reference: i,
        tableInfo: {
          barType: n
        },
        block: this.block
      }));
    });
    u(this, "docMousemove", (e) => {
      if (!this.dragInfo || !O(e))
        return;
      const { barType: i } = this.dragInfo, n = i === "bottom" ? "clientX" : "clientY", t = this.dragInfo.offset = e[n] - this.dragInfo[n];
      Math.abs(t) < 5 || (this.isDragTableBar = !0, this.calculateCurIndex(), this.setDragTargetStyle(), this.setSwitchStyle());
    });
    u(this, "docMouseup", (e) => {
      e.preventDefault();
      const { eventCenter: i } = this.muya;
      for (const n of this.dragEventIds)
        i.detachDOMEvent(n);
      this.dragEventIds = [], this.isDragTableBar && (this.setDropTargetStyle(), setTimeout(() => {
        this.switchTableData(), this.resetDragTableBar();
      }, 300));
    });
    u(this, "calculateCurIndex", () => {
      if (!this.dragInfo)
        return;
      const { aspects: e, index: i } = this.dragInfo;
      let { offset: n } = this.dragInfo, t = i;
      const a = e.length;
      let d;
      if (n > 0)
        for (d = i; d < a; d++) {
          const m = e[d];
          if (d === i ? n -= Math.floor(m / 2) : n -= m, n < 0)
            break;
          t++;
        }
      else if (n < 0)
        for (d = i; d >= 0; d--) {
          const m = e[d];
          if (d === i ? n += Math.floor(m / 2) : n += m, n > 0)
            break;
          t--;
        }
      this.dragInfo.curIndex = Math.max(0, Math.min(t, a - 1));
    });
    u(this, "setDragTargetStyle", () => {
      const { offset: e, barType: i, dragCells: n } = this.dragInfo;
      for (const t of n) {
        t.classList.contains("mu-drag-cell") || (t.classList.add("mu-drag-cell"), t.classList.add(`mu-drag-${i}`));
        const a = i === "bottom" ? "translateX" : "translateY";
        t.style.transform = `${a}(${e}px)`;
      }
    });
    u(this, "setSwitchStyle", () => {
      if (!this.dragInfo)
        return;
      const { index: e, offset: i, curIndex: n, barType: t, aspects: a, cells: d } = this.dragInfo, m = a[e], c = a.length;
      let l;
      if (i > 0)
        if (t === "bottom")
          for (const s of d)
            for (l = 0; l < c; l++) {
              const p = s[l];
              l > e && l <= n ? p.style.transform = `translateX(${-m}px)` : l !== e && (p.style.transform = "translateX(0px)");
            }
        else
          for (l = 0; l < c; l++) {
            const s = d[l];
            for (const p of s)
              l > e && l <= n ? p.style.transform = `translateY(${-m}px)` : l !== e && (p.style.transform = "translateY(0px)");
          }
      else if (t === "bottom")
        for (const s of d)
          for (l = 0; l < c; l++) {
            const p = s[l];
            l >= n && l < e ? p.style.transform = `translateX(${m}px)` : l !== e && (p.style.transform = "translateX(0px)");
          }
      else
        for (l = 0; l < c; l++) {
          const s = d[l];
          for (const p of s)
            l >= n && l < e ? p.style.transform = `translateY(${m}px)` : l !== e && (p.style.transform = "translateY(0px)");
        }
    });
    u(this, "setDropTargetStyle", () => {
      if (!this.dragInfo)
        return;
      const { dragCells: e, barType: i, curIndex: n, index: t, aspects: a, offset: d } = this.dragInfo;
      let m = 0, c;
      if (d > 0)
        for (c = t + 1; c <= n; c++)
          m += a[c];
      else
        for (c = n; c < t; c++)
          m -= a[c];
      for (const l of e) {
        l.classList.remove("mu-drag-cell"), l.classList.remove(`mu-drag-${i}`), l.classList.add("mu-cell-transform");
        const s = i === "bottom" ? "translateX" : "translateY";
        l.style.transform = `${s}(${m}px)`;
      }
    });
    u(this, "switchTableData", () => {
      if (!this.dragInfo)
        return;
      const { barType: e, index: i, curIndex: n, table: t, offset: a } = this.dragInfo;
      if (i === n)
        return;
      const d = t.getState();
      let m = null, c = null, l = 0, s = 0;
      if (t.active) {
        const { anchorBlock: $, anchor: g, focus: b, isSelectionInSameBlock: x } = this.muya.editor.selection ?? {}, { rowOffset: h, columnOffset: k } = $ == null ? void 0 : $.closestBlock(
          "table.cell"
        );
        l = x ? Math.min(g.offset, b.offset) : 0, s = x ? Math.max(g.offset, b.offset) : 0, e === "bottom" ? (m = h, k === i ? c = n : k >= Math.min(i, n) && k <= Math.max(i, n) ? c = k + (a > 0 ? -1 : 1) : c = k) : (c = k, h === i ? m = n : h >= Math.min(i, n) && h <= Math.max(i, n) ? m = h + (a > 0 ? -1 : 1) : m = h);
      }
      if (e === "bottom")
        d.children.forEach(($) => {
          const g = $.children.splice(i, 1)[0];
          $.children.splice(n, 0, g);
        });
      else {
        const $ = d.children.splice(i, 1)[0];
        d.children.splice(n, 0, $);
      }
      const p = C.loadBlock("table").create(
        this.muya,
        d
      );
      t.replaceWith(p), m !== null && c !== null && p.firstChild.find(m).find(c).firstContentInDescendant().setCursor(l, s, !0);
    });
    u(this, "resetDragTableBar", () => {
      this.dragInfo = null, this.isDragTableBar = !1;
    });
    this.floatBox.classList.add("mu-table-drag-container"), this.listen();
  }
  listen() {
    const { eventCenter: e } = this.muya, { container: i } = this;
    super.listen();
    const n = H((t) => {
      if (!O(t))
        return;
      const { x: a, y: d } = t, m = [...document.elementsFromPoint(a, d)], c = [...document.elementsFromPoint(a, d - Ee)], l = [...document.elementsFromPoint(a - Ee, d)], s = (p) => p.some(
        ($) => $[y] && $[y].blockName === "table.cell"
      );
      if (!this.isDragTableBar && !s(m) && (s(c) || s(l))) {
        const p = [...c, ...l].find(
          (b) => b[y] && b[y].blockName === "table.cell"
        ), $ = p[y], g = s(c) ? "bottom" : "right";
        this.options = Object.assign(
          {},
          g === "right" ? ho : Te
        ), this.barType = g, this.block = $, this.show(p), this.render(g);
      } else
        this.hide();
    });
    e.attachDOMEvent(document.body, "mousemove", n), e.attachDOMEvent(i, "mousedown", this.mousedown), e.attachDOMEvent(i, "mouseup", this.mouseup);
  }
  startDrag(e) {
    if (e.preventDefault(), !O(e) || !this.block || !this.barType)
      return;
    const { table: i } = this.block, { eventCenter: n } = this.muya, { clientX: t, clientY: a } = e, d = this.barType, m = bo(d, this.block), c = go(i, d);
    this.dragInfo = {
      table: i,
      clientX: t,
      clientY: a,
      barType: d,
      index: m,
      curIndex: m,
      dragCells: ko(i, d, m),
      cells: fo(i),
      aspects: c,
      offset: 0
    };
    for (const l of this.dragInfo.cells)
      for (const s of l)
        this.dragInfo.dragCells.includes(s) || s.classList.add("mu-cell-transform");
    this.dragEventIds.push(
      n.attachDOMEvent(document, "mousemove", this.docMousemove),
      n.attachDOMEvent(document, "mouseup", this.docMouseup)
    );
  }
  render(e) {
    this.container.dataset.drag = e;
  }
}
u(yo, "pluginName", "tableDragBar");
const vo = {
  right: [
    {
      label: "Insert Row Above",
      action: "insert",
      location: "previous",
      target: "row"
    },
    {
      label: "Insert Row Below",
      action: "insert",
      location: "next",
      target: "row"
    },
    {
      label: "Remove Row",
      action: "remove",
      location: "current",
      target: "row"
    }
  ],
  bottom: [
    {
      label: "Insert Column Left",
      action: "insert",
      location: "left",
      target: "column"
    },
    {
      label: "Insert Column Right",
      action: "insert",
      location: "right",
      target: "column"
    },
    {
      label: "Remove Column",
      action: "remove",
      location: "current",
      target: "column"
    }
  ]
}, xo = {
  placement: "bottom-center",
  modifiers: {
    offset: {
      offset: "0, 5"
    }
  },
  showArrow: !1
};
class wo extends M {
  constructor(e, i = {}) {
    const n = "mu-table-bar-tools", t = Object.assign({}, xo, i);
    super(e, n, t);
    u(this, "oldVNode", null);
    u(this, "tableInfo", null);
    u(this, "block", null);
    u(this, "tableBarContainer", document.createElement("div"));
    this.floatBox.classList.add("mu-table-bar-tools"), this.container.appendChild(this.tableBarContainer), this.listen();
  }
  listen() {
    super.listen();
    const { eventCenter: e } = this.muya;
    e.subscribe(
      "muya-table-bar",
      ({ reference: i, tableInfo: n, block: t }) => {
        i ? (this.tableInfo = n, this.block = t, this.show(i), this.render()) : this.hide();
      }
    );
  }
  render() {
    const { tableInfo: e, oldVNode: i, tableBarContainer: n } = this, { i18n: t } = this.muya, d = vo[e.barType].map((c) => {
      const { label: l } = c;
      return f(
        "li.item",
        {
          dataset: {
            label: c.action
          },
          on: {
            click: (p) => {
              this.selectItem(p, c);
            }
          }
        },
        t.t(l)
      );
    }), m = f("ul", d);
    i ? v(i, m) : v(n, m), this.oldVNode = m;
  }
  selectItem(e, i) {
    e.preventDefault(), e.stopPropagation();
    const { table: n, row: t } = this.block, a = n.firstChild.offset(t), d = t.offset(this.block), { location: m, action: c, target: l } = i;
    if (c === "insert") {
      let s = null;
      if (l === "row") {
        const p = m === "previous" ? a : a + 1;
        s = n.insertRow(p);
      } else {
        const p = m === "left" ? d : d + 1;
        s = n.insertColumn(p);
      }
      s && s.setCursor(0, 0);
    } else
      l === "row" ? n.removeRow(a) : n.removeColumn(d);
    this.hide();
  }
}
u(wo, "pluginName", "tableBarTools");
const jo = [
  {
    type: "edit",
    tooltip: "edit",
    icon: Zi
  },
  {
    type: "delete",
    tooltip: "delete block",
    icon: oi
  }
], Co = {
  placement: "left-start",
  modifiers: {
    offset: {
      offset: "5, -95"
    }
  },
  showArrow: !1
};
class Io extends M {
  constructor(e, i = {}) {
    var a, d;
    const n = "mu-preview-tools", t = Object.assign({}, Co, i);
    super(e, n, t);
    u(this, "oldVNode", null);
    u(this, "block", null);
    u(this, "iconContainer", document.createElement("div"));
    this.options = t, (a = this.container) == null || a.appendChild(this.iconContainer), (d = this.floatBox) == null || d.classList.add("mu-preview-tools-container"), this.listen();
  }
  listen() {
    const { eventCenter: e } = this.muya;
    super.listen();
    const i = H((n) => {
      if (!O(n))
        return;
      const { x: t, y: a } = n, m = [...[...document.elementsFromPoint(t, a)]].find(
        (c) => c[y] && /html-block|math-block/.test(c[y].blockName)
      );
      if (m && !m[y].active) {
        const c = m[y];
        if (c.blockName === "html-block" && this.muya.options.disableHtml)
          return this.hide();
        this.block = c, this.show(m), this.render();
      } else
        this.hide();
    }, 300);
    e.attachDOMEvent(document.body, "mousemove", i);
  }
  render() {
    const { iconContainer: e, oldVNode: i } = this, n = jo.map((a) => {
      const d = "div.icon-wrapper", m = f(
        "i.icon",
        f(
          "i.icon-inner",
          {
            style: {
              background: `url(${a.icon}) no-repeat`,
              "background-size": "100%"
            }
          },
          ""
        )
      ), c = f(d, m), l = `li.item.${a.type}`;
      return f(
        l,
        {
          attrs: {
            title: `${a.tooltip}`
          },
          on: {
            click: (s) => {
              this.selectItem(s, a);
            }
          }
        },
        [c]
      );
    }), t = f("ul", n);
    i ? v(i, t) : v(e, t), this.oldVNode = t;
  }
  selectItem(e, i) {
    e.preventDefault();
    const { block: n } = this;
    let t = null;
    switch (i.type) {
      case "edit": {
        t = n.firstContentInDescendant();
        break;
      }
      case "delete": {
        const a = {
          name: "paragraph",
          text: ""
        }, d = C.loadBlock("paragraph").create(
          this.muya,
          a
        );
        n.replaceWith(d), t = d.firstContentInDescendant();
        break;
      }
    }
    t && t.setCursor(0, 0), this.hide();
  }
}
u(Io, "pluginName", "previewTools");
const We = [
  Fe,
  Re,
  Ke,
  Ve,
  He,
  Ge
], So = {
  plantuml: ei,
  mermaid: Ye,
  "vega-lite": ze
}, _o = (o) => {
  const { blockName: r } = o;
  switch (r) {
    case "frontmatter":
      return qe;
    case "paragraph":
      return ee;
    case "block-quote":
      return ii;
    case "bullet-list":
      return Le;
    case "order-list":
      return Ze;
    case "task-list":
      return ri;
    case "code-block":
      return pe;
    case "atx-heading":
      return We[o.meta.level - 1];
    case "setext-heading":
      return We[o.meta.level - 1];
    case "thematic-break":
      return Ue;
    case "table":
      return Qe;
    case "html-block":
      return Je;
    case "math-block":
      return Xe;
    case "diagram":
      return So[o.meta.type];
    default:
      return ee;
  }
}, Me = 100, Eo = () => ({
  placement: "left-start",
  modifiers: {
    offset: {
      offset: "0, 8"
    }
  },
  showArrow: !1
}), Ae = (o, r) => f(
  `i.icon${r ? `.${r}` : ""}`,
  f(
    "i.icon-inner",
    {
      style: {
        background: `url(${o}) no-repeat`,
        "background-size": "100%"
      }
    },
    ""
  )
);
function To(o) {
  return o instanceof Bi || o instanceof Pi;
}
class _n {
  constructor(r, e = {}) {
    u(this, "name", "mu-front-button");
    u(this, "resizeObserver", null);
    u(this, "options");
    u(this, "block", null);
    u(this, "oldVNode", null);
    u(this, "status", !1);
    u(this, "floatBox", document.createElement("div"));
    u(this, "container", document.createElement("div"));
    u(this, "iconWrapper", document.createElement("div"));
    u(this, "popper", null);
    u(this, "dragTimer", null);
    u(this, "dragInfo", null);
    u(this, "ghost", null);
    u(this, "shadow", null);
    u(this, "disableListen", !1);
    u(this, "dragEvents", []);
    u(this, "dragBarMouseDown", (r) => {
      r.preventDefault(), r.stopPropagation(), this.dragTimer = setTimeout(() => {
        this.startDrag(), this.dragTimer = null;
      }, 300);
    });
    u(this, "dragBarMouseUp", () => {
      this.dragTimer && (clearTimeout(this.dragTimer), this.dragTimer = null);
    });
    u(this, "mouseMove", (r) => {
      if (!this.dragInfo || !O(r))
        return;
      r.preventDefault();
      const { x: e, y: i } = r, t = [
        ...document.elementsFromPoint(e, i),
        ...document.elementsFromPoint(e + Me, i)
      ].find(
        (a) => a[y] && a[y].isOutMostBlock
      );
      if (this.moveShadow(r), t && t[y] !== this.dragInfo.block && t[y].blockName !== "frontmatter") {
        const a = t[y], d = t.getBoundingClientRect(), m = Wi(r, d);
        this.createStyledGhost(d, m), Object.assign(this.dragInfo, {
          target: a,
          position: m
        });
      } else
        this.ghost && (this.ghost.remove(), this.ghost = null, this.dragInfo.target = null, this.dragInfo.position = null);
    });
    u(this, "mouseUp", (r) => {
      r.preventDefault(), r.stopPropagation(), this.disableListen = !1;
      const { eventCenter: e } = this.muya;
      this.dragEvents.forEach((a) => e.detachDOMEvent(a)), this.dragEvents = [], this.ghost && this.ghost.remove(), this.destroyShadow(), document.body.style.cursor = "auto", this.dragTimer = null;
      const { block: i, target: n, position: t } = this.dragInfo || {};
      if (n && t && i) {
        if (t === "down" && i.prev === n || t === "up" && i.next === n)
          return;
        t === "up" ? i.insertInto(i.parent, n) : i.insertInto(i.parent, n.next);
        const { anchorBlock: a, anchor: d, focus: m, isSelectionInSameBlock: c } = i.muya.editor.selection ?? {};
        if (c && a && a.isInBlock(i)) {
          const l = Math.min(d.offset, m.offset), s = Math.max(d.offset, m.offset);
          a.setCursor(l, s);
        }
      }
      this.dragInfo = null;
    });
    u(this, "startDrag", () => {
      const { block: r } = this;
      if (!r || r && r.blockName === "frontmatter")
        return;
      this.disableListen = !0, this.dragInfo = {
        block: r
      }, this.createStyledShadow(), this.hide();
      const { eventCenter: e } = this.muya;
      document.body.style.cursor = "grabbing", this.dragEvents = [
        e.attachDOMEvent(
          document,
          "mousemove",
          H(this.mouseMove, 100)
        ),
        e.attachDOMEvent(document, "mouseup", this.mouseUp)
      ];
    });
    this.muya = r, this.options = Object.assign({}, Eo(), e), this.init(), this.listen();
  }
  init() {
    const { floatBox: r, container: e, iconWrapper: i } = this;
    e.classList.add(this.name), e.appendChild(i), r.classList.add("mu-front-button-wrapper"), r.appendChild(e), document.body.appendChild(r), (this.resizeObserver = new ResizeObserver(() => {
      const { offsetWidth: t, offsetHeight: a } = e;
      Object.assign(r.style, {
        width: `${t}px`,
        height: `${a}px`
      }), this.popper && this.popper.update();
    })).observe(e);
  }
  listen() {
    const { container: r } = this, { eventCenter: e } = this.muya, i = H((t) => {
      if (this.disableListen)
        return;
      const { x: a, y: d } = t, c = [
        ...document.elementsFromPoint(a, d),
        ...document.elementsFromPoint(a + Me, d)
      ].find(
        (l) => l[y] && l[y].isOutMostBlock
      );
      c ? (this.show(c[y]), this.render()) : this.hide();
    }, 300), n = () => {
      e.emit("muya-front-menu", {
        reference: r,
        block: this.block
      });
    };
    e.attachDOMEvent(r, "mousedown", this.dragBarMouseDown), e.attachDOMEvent(r, "mouseup", this.dragBarMouseUp), e.attachDOMEvent(document, "mousemove", i), e.attachDOMEvent(r, "click", n);
  }
  createStyledGhost(r, e) {
    let i = this.ghost;
    i || (i = document.createElement("div"), document.body.appendChild(i), i.classList.add("mu-line-ghost"), this.ghost = i), Object.assign(i.style, {
      width: `${r.width}px`,
      left: `${r.left}px`,
      top: e === "up" ? `${r.top}px` : `${r.top + r.height}px`
    });
  }
  createStyledShadow() {
    const { domNode: r } = this.block, { width: e, top: i, left: n } = r.getBoundingClientRect(), t = document.createElement("div");
    t.classList.add("mu-shadow"), Object.assign(t.style, {
      width: `${e}px`,
      top: `${i}px`,
      left: `${n}px`
    }), t.appendChild(r.cloneNode(!0)), document.body.appendChild(t), this.shadow = t;
  }
  moveShadow(r) {
    const { shadow: e } = this;
    if (!e || !O(r))
      return;
    const { y: i } = r;
    Object.assign(e.style, {
      top: `${i}px`
    });
  }
  destroyShadow() {
    const { shadow: r } = this;
    r && (r.remove(), this.shadow = null);
  }
  render() {
    const { container: r, iconWrapper: e, block: i, oldVNode: n } = this, t = "div.mu-icon-wrapper", a = _o(i), d = Ae(a, "paragraph"), m = Ae(er, "drag"), c = f(t, [d, m]);
    n ? v(n, c) : v(e, c), this.oldVNode = c;
    const { lineHeight: l } = getComputedStyle(i.domNode);
    r.style.height = l;
  }
  hide() {
    if (!this.status)
      return;
    this.block = null, this.status = !1;
    const { eventCenter: r } = this.muya;
    this.popper && this.popper.destroy && this.popper.destroy(), this.floatBox.style.opacity = "0", r.emit("muya-float-button", this, !1);
  }
  show(r) {
    if (this.block && this.block === r)
      return;
    this.block = r;
    const { domNode: e } = r, { floatBox: i } = this, { placement: n, modifiers: t } = this.options, { eventCenter: a } = this.muya;
    i.style.opacity = "1", this.popper && this.popper.destroy && this.popper.destroy();
    const d = window.getComputedStyle(e), m = parseFloat(d.paddingTop), c = To(r) && r.meta.loose;
    t.offset.offset = `${c ? m * 2 : m}, 8`, this.popper = new hi(e, i, {
      placement: n,
      modifiers: t
    }), this.status = !0, a.emit("muya-float-button", this, !0);
  }
  destroy() {
    this.container && this.resizeObserver && this.resizeObserver.unobserve(this.container), this.popper && this.popper.destroy && this.popper.destroy(), this.floatBox.remove();
  }
}
const Q = oe.reduce(
  (o, r) => [...o, ...r.children],
  []
), ce = G ? "⌘" : "⌃", Wo = [
  {
    icon: ir,
    label: "duplicate",
    text: "Duplicate",
    shortCut: `⇧${ce}P`
  },
  {
    icon: ee,
    label: "new",
    text: "New Paragraph",
    shortCut: `⇧${ce}N`
  },
  {
    icon: oi,
    label: "delete",
    text: "Delete",
    shortCut: `⇧${ce}D`
  }
], Mo = (o) => {
  const { blockName: r } = o;
  switch (r) {
    case "paragraph": {
      if (/^\s*$/.test(o.firstContentInDescendant().text))
        return Q.filter((n) => n.label !== "frontmatter");
      const i = /paragraph|atx-heading|block-quote|order-list|bullet-list|task-list/;
      return Q.filter(
        (n) => i.test(n.label)
      );
    }
    case "atx-heading":
      return Q.filter(
        (e) => /atx-heading|paragraph/.test(e.label)
      );
    case "order-list":
    case "bullet-list":
    case "task-list":
      return Q.filter(
        (e) => /order-list|bullet-list|task-list/.test(e.label)
      );
    default:
      return [];
  }
}, Oe = ({ label: o, icon: r }) => f(
  "i.icon",
  f(
    `i.icon-${o.replace(/\s/g, "-")}`,
    {
      style: {
        background: `url(${r}) no-repeat`,
        "background-size": "100%"
      }
    },
    ""
  )
), Ao = {
  placement: "bottom",
  modifiers: {
    offset: {
      offset: "0, 10"
    }
  },
  showArrow: !1
};
class Oo extends M {
  constructor(e, i = {}) {
    const n = "mu-front-menu", t = Object.assign({}, Ao, i);
    super(e, n, t);
    u(this, "reference", null);
    u(this, "oldVNode", null);
    u(this, "block", null);
    u(this, "frontMenuContainer", document.createElement("div"));
    Object.assign(this.container.parentNode.style, {
      overflow: "visible"
    }), this.container.appendChild(this.frontMenuContainer), this.listen();
  }
  listen() {
    const { container: e } = this, { eventCenter: i } = this.muya;
    super.listen(), i.subscribe("muya-front-menu", ({ reference: t, block: a }) => {
      t && (this.block = a, this.reference = t, setTimeout(() => {
        this.show(t), this.render();
      }, 0));
    });
    const n = () => {
      this.hide(), this.reference = null, this.block = null;
    };
    i.attachDOMEvent(e, "mouseleave", n);
  }
  renderSubMenu(e) {
    const { block: i } = this, { i18n: n } = this.muya, t = e.map((d) => {
      const { title: m, label: c, subTitle: l } = d, p = f(
        "div.icon-wrapper",
        {
          props: {
            title: `${n.t(m)}
${l}`
          }
        },
        Oe(d)
      );
      let $ = `div.turn-into-item.${c}`;
      return (i == null ? void 0 : i.blockName) === "atx-heading" ? c.startsWith(i.blockName) && c.endsWith(String(i.meta.level)) && ($ += ".active") : c === (i == null ? void 0 : i.blockName) && ($ += ".active"), f(
        $,
        {
          on: {
            click: (g) => {
              this.selectItem(g, { label: c });
            }
          }
        },
        [p]
      );
    });
    return f("li.turn-into-menu", t);
  }
  render() {
    const { oldVNode: e, frontMenuContainer: i, block: n } = this, { i18n: t } = this.muya, { blockName: a } = n, d = Wo.map(({ icon: l, label: s, text: p, shortCut: $ }) => {
      const b = f("div.icon-wrapper", Oe({ icon: l, label: s })), x = f("span.text", t.t(p)), h = f("div.short-cut", [f("span", $)]), k = `li.item.${s}`;
      return f(
        k,
        {
          on: {
            click: (A) => {
              this.selectItem(A, { label: s });
            }
          }
        },
        [b, x, h]
      );
    });
    a === "frontmatter" && d.splice(0, 1);
    const m = Mo(n);
    if (m.length) {
      const l = f("li.divider");
      d.unshift(l), d.unshift(this.renderSubMenu(m));
    }
    const c = f("ul", d);
    e ? v(e, c) : v(i, c), this.oldVNode = c;
  }
  selectItem(e, { label: i }) {
    var p;
    if (e.preventDefault(), e.stopPropagation(), !this.block)
      return;
    const { block: n, muya: t } = this, { editor: a } = t, d = n.getState();
    let m = null, c = null;
    const { bulletListMarker: l, orderListDelimiter: s } = t.options;
    if (/duplicate|new|delete/.test(i))
      switch (i) {
        case "duplicate": {
          c = S(d);
          const $ = C.loadBlock(c.name).create(t, c);
          n.parent.insertAfter($, n), m = $.lastContentInDescendant();
          break;
        }
        case "new": {
          c = S(W.paragraph);
          const $ = C.loadBlock("paragraph").create(
            t,
            c
          );
          n.parent.insertAfter($, n), m = $.lastContentInDescendant();
          break;
        }
        case "delete": {
          if (n.prev)
            m = n.prev.lastContentInDescendant();
          else if (n.next)
            m = n.next.firstContentInDescendant();
          else {
            c = S(W.paragraph);
            const $ = C.loadBlock("paragraph").create(
              t,
              c
            );
            n.parent.insertAfter($, n), m = $.lastContentInDescendant();
          }
          n.remove();
        }
      }
    else
      switch (n.blockName) {
        case "paragraph":
        case "atx-heading": {
          if (n.blockName === "paragraph" && n.blockName === i || n.blockName === "atx-heading" && i.split(" ")[1] === String(d.meta.level))
            break;
          const $ = d.text, g = n.blockName === "paragraph" ? $ : $.replace(/^ {0,3}#{1,6}(?:\s{1,}|$)/, "");
          $e({
            block: n,
            label: i,
            muya: t,
            text: g
          });
          break;
        }
        case "order-list":
        case "bullet-list":
        case "task-list": {
          if (n.blockName === i)
            break;
          c = S(d), n.blockName === "task-list" && c.children.forEach((B) => {
            B.name = "list-item", delete B.meta;
          });
          const {
            loose: $,
            delimiter: g = s,
            marker: b = l
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
          } = c.meta;
          i === "task-list" ? (c.children.forEach((B) => {
            B.name = "task-list-item", B.meta = {
              checked: !1
            };
          }), c.meta = {
            marker: b,
            loose: $
          }) : i === "order-list" ? c.meta = {
            delimiter: g,
            loose: $
          } : c.meta = {
            marker: b,
            loose: $
          };
          const { anchorPath: x, anchor: h, focus: k, isSelectionInSameBlock: I } = a.selection, A = C.loadBlock(i).create(t, c);
          n.replaceWith(A);
          const K = (p = t.editor.scrollPage) == null ? void 0 : p.queryBlock(x);
          if (K && I) {
            const B = Math.min(h.offset, k.offset), vi = Math.max(h.offset, k.offset);
            K.setCursor(B, vi, !0);
          } else
            m = A.firstContentInDescendant();
          break;
        }
      }
    m && m.setCursor(0, 0, !0), setTimeout(this.hide.bind(this));
  }
}
u(Oo, "pluginName", "frontMenu");
export {
  ro as CodeBlockLanguageSelector,
  Fr as EmojiSelector,
  Hr as ImageEditTool,
  Xr as ImageResizeBar,
  Jr as ImageToolBar,
  Vr as InlineFormatToolbar,
  _n as ParagraphFrontButton,
  Oo as ParagraphFrontMenu,
  po as ParagraphQuickInsertMenu,
  Io as PreviewToolBar,
  ao as TableColumnToolbar,
  yo as TableDragBar,
  wo as TableRowColumMenu
};
