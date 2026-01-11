var Pa = Object.defineProperty;
var Ra = (n, t, e) => t in n ? Pa(n, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : n[t] = e;
var T = (n, t, e) => (Ra(n, typeof t != "symbol" ? t + "" : t, e), e);
import { x as Wr, C as fe, O as vn, m as re, Q as ns, V as Ma, G as xn, W as wn, c as Y, I as Oe, S as Zr, J as z, X as Jr, Y as Ba, Z as As, _ as qa, w as Me, t as De, q as er, $ as tr, a0 as Ts, a1 as Ha, a2 as Ga, a3 as sr, a4 as At, L as nr, a5 as Fa, a6 as qs, a7 as za, a8 as Yr, l as rr, a9 as Xr, aa as Tt, ab as Ua, K as or, s as Qr, P as Vr, j as Ka, ac as Wa, ad as Za, k as Ja, A as Ya } from "./emojis.bYhmvyOg.js";
import Xa from "../assets/icons/7c1a03a0f912a482.png.js";
class le {
  constructor() {
    T(this, "head", null);
    T(this, "tail", null);
    T(this, "length", 0);
  }
  *iterator(t = this.head, e = this.length) {
    let s = 0;
    for (; s < e && t; )
      yield t, s++, t = t.next;
  }
  append(...t) {
    for (const e of t)
      this.insertBefore(e);
  }
  contains(t) {
    const e = this.iterator();
    let s = null;
    for (; (s = e.next()).done !== !0; ) {
      const { value: r } = s;
      if (r === t)
        return !0;
    }
    return !1;
  }
  insertBefore(t, e = null) {
    t && (t.next = e, e !== null ? (t.prev = e.prev, e.prev !== null && (e.prev.next = t), e.prev = t, this.head === e && (this.head = t)) : this.tail !== null ? (this.tail.next = t, t.prev = this.tail, this.tail = t) : (t.prev = null, this.head = this.tail = t), this.length += 1);
  }
  offset(t) {
    return [...this.iterator()].indexOf(t);
  }
  remove(t) {
    this.contains(t) && (t.prev && (t.prev.next = t.next), t.next && (t.next.prev = t.prev), this.head === t && (this.head = t.next), this.tail === t && (this.tail = t.prev), this.length -= 1);
  }
  find(t) {
    return t < 0 || t >= this.length ? null : [...this.iterator()][t];
  }
  forEach(t) {
    return [...this.iterator()].forEach(t);
  }
  forEachAt(t, e = this.length, s) {
    const r = this.find(t);
    return [...this.iterator(r, e)].forEach((o, a) => {
      s(o, a + t);
    });
  }
  map(t) {
    return this.reduce((e, s, r) => [...e, t(s, r)], []);
  }
  reduce(t, e) {
    return [...this.iterator()].reduce(t, e);
  }
}
const Qa = (n, { classList: t = [], attributes: e = {}, datasets: s = {} } = {}) => {
  const r = document.createElement(n);
  for (const o of t)
    r.classList.add(o);
  for (const [o, a] of Object.entries(e))
    r.setAttribute(o, a.toString());
  for (const [o, a] of Object.entries(s))
    r.dataset[o] = a.toString();
  return r;
}, Xe = (n, t, e) => {
  const s = n.classList.contains(e);
  (t === "add" && !s || t === "remove" && s) && n.classList[t](e);
}, Ih = (n, t) => {
  const e = t.parentNode;
  e && (t.nextSibling ? e.insertBefore(n, t.nextSibling) : e.appendChild(n));
};
class rs {
  constructor(t) {
    T(this, "prev", null);
    T(this, "next", null);
    T(this, "parent", null);
    T(this, "domNode", null);
    T(this, "tagName", "");
    T(this, "classList", []);
    T(this, "attributes", {});
    T(this, "datasets", {});
    this.muya = t;
  }
  get static() {
    return this.constructor;
  }
  get blockName() {
    return this.static.blockName;
  }
  get jsonState() {
    return this.muya.editor.jsonState;
  }
  get scrollPage() {
    return this.muya.editor.scrollPage;
  }
  get isScrollPage() {
    return this.blockName === "scrollpage";
  }
  get isOutMostBlock() {
    return this.parent ? this.parent.isScrollPage : !1;
  }
  get outMostBlock() {
    let t = this.isContent() ? this.parent : this;
    for (; t; ) {
      if (t.isOutMostBlock)
        return t;
      t = t.parent;
    }
    return null;
  }
  /**
   * check this is a Content block?
   * @param this
   * @returns boolean
   */
  isContent() {
    return "text" in this;
  }
  /**
   * check this is a Parent block?
   * @param this
   * @returns boolean
   */
  isParent() {
    return this instanceof q;
  }
  /**
   * create domNode
   */
  createDomNode() {
    const { tagName: t, classList: e, attributes: s, datasets: r } = this, o = Qa(t, {
      classList: e,
      attributes: s,
      datasets: r
    });
    o[Wr] = this, this.domNode = o;
  }
  // Get previous content block in block tree.
  previousContentInContext() {
    if (this.isScrollPage || !this.parent)
      return null;
    const { parent: t } = this;
    return t.prev ? t.prev.isParent() ? t.prev.lastContentInDescendant() : t.prev : t.previousContentInContext();
  }
  // Get next content block in block tree.
  nextContentInContext() {
    if (this.isScrollPage || !this.parent)
      return null;
    const { parent: t } = this;
    return this.blockName === "language-input" ? t.lastContentInDescendant() : t.next ? t.next.firstContentInDescendant() : t.nextContentInContext();
  }
  /**
   * Weather `this` is the only child of its parent.
   */
  isOnlyChild() {
    return this.isFirstChild() && this.isLastChild();
  }
  /**
   * Weather `this` is the first child of its parent.
   */
  isFirstChild() {
    return this.prev === null;
  }
  /**
   * Weather `this` is the last child of its parent.
   */
  isLastChild() {
    return this.next === null;
  }
  /**
   * Weather `this` is descendant of `block`
   * @param {*} block
   */
  isInBlock(t) {
    let e = this.parent;
    for (; e; ) {
      if (e === t)
        return !0;
      e = e.parent;
    }
    return !1;
  }
  /**
   * Find the closest block which blockName is `blockName`. return `null` if not found.
   * @param {string} blockName
   */
  closestBlock(t) {
    if (this.blockName === t)
      return this;
    let e = this.parent;
    for (; e; ) {
      if (e.blockName === t)
        return e;
      e = e.parent;
    }
    return null;
  }
  farthestBlock(t) {
    const e = [];
    this.blockName === t && e.push(this);
    let s = this.parent;
    for (; s; )
      s.blockName === t && e.push(s), s = s.parent;
    const r = e.pop();
    return r || null;
  }
  insertInto(t, e = null) {
    this.parent === t && this.next === e || (this.parent && this.parent.removeChild(this), t.insertBefore(this, e));
  }
  /**
   * Remove the current block in the block tree.
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  remove(t = "user") {
    var e;
    if (this.parent)
      return this.parent.children.remove(this), this.parent = null, (e = this.domNode) == null || e.remove(), this;
  }
}
T(rs, "blockName", "tree.node");
const Hs = ["error", "warn", "log", "info"];
let eo = "log";
function to(n, ...t) {
  Hs.indexOf(n) <= Hs.indexOf(eo) && process.env.NODE_ENV !== "production" && console[n](...t);
}
function J(n) {
  return Hs.reduce((t, e) => (t[e] = to.bind(console, e, n), t), {});
}
J.level = (n) => {
  eo = n;
};
to.level = J.level;
const We = J("parent:");
class Va extends rs {
  constructor() {
    super(...arguments);
    // Used to store icon, checkbox(span) etc. these blocks are not in children properties in json state.
    T(this, "attachments", new le());
    T(this, "children", new le());
    T(this, "prev", null);
    T(this, "next", null);
    T(this, "_active", !1);
  }
  get active() {
    return this._active;
  }
  set active(e) {
    if (this._active = e, this.domNode == null) {
      We.error("domNode is null.");
      return;
    }
    e ? Xe(this.domNode, "add", fe.MU_ACTIVE) : Xe(this.domNode, "remove", fe.MU_ACTIVE);
  }
  get firstChild() {
    return this.children.head;
  }
  get lastChild() {
    return this.children.tail;
  }
  get isContainerBlock() {
    return /block-quote|order-list|bullet-list|task-list|list-item|task-list-item/.test(
      this.blockName
    );
  }
  get path() {
    return We.error("You should never call get path on Parent."), [];
  }
  getJsonPath() {
    const { path: e } = this;
    return this.isContainerBlock && e.pop(), e;
  }
  getState() {
    return We.error("You should never call get state on Parent."), {};
  }
  /**
   * Clone itself.
   */
  clone() {
    const e = this.getState(), { muya: s } = this;
    return this.static.create(s, e);
  }
  /**
   * Return the length of children.
   */
  length() {
    return this.reduce((e) => e + 1, 0);
  }
  offset(e) {
    return this.children.offset(e);
  }
  find(e) {
    return this.children.find(e);
  }
  append(...e) {
    const s = typeof e[e.length - 1] == "string" ? e.pop() : "api";
    e.forEach((r) => {
      r.parent = this;
      const { domNode: o } = r;
      this.domNode.appendChild(o);
    }), this.children.append(...e), s === "user" && e.forEach((r) => {
      const o = r.getJsonPath(), a = r.getState();
      this.jsonState.insertOperation(o, a);
    });
  }
  /**
   * This method will only be used when initialization.
   * @param  {...any} nodes attachment blocks
   */
  appendAttachment(...e) {
    e.forEach((s) => {
      s.parent = this;
      const { domNode: r } = s;
      this.domNode.appendChild(r);
    }), this.attachments.append(...e);
  }
  forEachAt(e, s = this.length(), r) {
    return this.children.forEachAt(e, s, r);
  }
  forEach(e) {
    return this.children.forEach(e);
  }
  map(e) {
    return this.children.map(e);
  }
  reduce(e, s) {
    return this.children.reduce(e, s);
  }
  /**
   * Use the `block` to replace the current block(this)
   * @param {TreeNode} block
   */
  replaceWith(e, s = "user") {
    if (!this.parent) {
      We.warn("Call replaceWith need has a parent block");
      return;
    }
    return this.parent.insertBefore(e, this, s), e.parent = this.parent, this.remove(s), e;
  }
  insertBefore(e, s = null, r = "user") {
    if (e.parent = this, this.children.insertBefore(e, s), this.domNode.insertBefore(
      e.domNode,
      s ? s.domNode : null
    ), r === "user") {
      const o = e.getJsonPath(), a = e.getState();
      this.jsonState.insertOperation(o, a);
    }
    return e;
  }
  insertAfter(e, s = null, r = "user") {
    return this.insertBefore(e, s ? s.next : null, r), e;
  }
  remove(e = "user") {
    if (e === "user") {
      const s = this.getJsonPath();
      this.jsonState.removeOperation(s);
    }
    return super.remove(e), this;
  }
  empty() {
    this.forEach((e) => {
      this.removeChild(e, "api");
    });
  }
  removeChild(e, s = "user") {
    return this.children.contains(e) || We.warn(
      "Can not removeChild(node), because node is not child of this block"
    ), e.isParent() ? e.remove(s) : e.isContent() && e.remove(), e;
  }
  /**
   * find the first content block, paragraph.content etc.
   */
  firstContentInDescendant() {
    let e = this.children.head;
    for (; e && e.isParent(); )
      e = e.children.head;
    return e != null && e.isContent() ? e : null;
  }
  /**
   * find the last content block in container block.
   */
  lastContentInDescendant() {
    let e = this.children.tail;
    for (; e && e.isParent(); )
      e = e.children.tail;
    return e != null && e.isContent() ? e : null;
  }
  breadthFirstTraverse(e) {
    const s = [this];
    for (; s.length; ) {
      const r = s.shift();
      e(r), r.isParent() && r.children.forEach((o) => s.push(o));
    }
  }
  depthFirstTraverse(e) {
    const s = [this];
    for (; s.length; ) {
      const r = s.shift();
      e(r), r.isParent() && r.children.forEach((o, a) => s.splice(a, 0, o));
    }
  }
}
const q = Va, ir = J("scrollpage:"), Ne = class Ne extends q {
  constructor(e) {
    super(e);
    T(this, "_blurFocus", { blur: null, focus: null });
    T(this, "updateActiveStatus", () => {
      const { blur: e, focus: s } = this._blurFocus;
      if (e == null && s == null)
        return;
      let r = [], o = [], a;
      if (e && s)
        for (o = s.getAncestors(), a = e.parent; a && a.isParent && a.isParent() && !o.includes(a); )
          r.push(a), a = a.parent;
      else
        e ? r = e.getAncestors() : s && (o = s.getAncestors());
      r.length && r.forEach((l) => {
        l.active = !1;
      }), o.length && o.forEach((l) => {
        l.active = !0;
      }), this._blurFocus = {
        blur: null,
        focus: null
      };
    });
    this.parent = e, this.tagName = "div", this.classList = ["mu-container"], this.createDomNode(), this.listenDomEvent();
  }
  static register(e) {
    const { blockName: s } = e;
    this.registeredBlocks.set(s, e);
  }
  static loadBlock(e) {
    const s = this.registeredBlocks.get(e);
    return s || ir.warn(`block:${e} is not existed.`), s;
  }
  static create(e, s) {
    const r = new Ne(e);
    return r.append(
      ...s.map((o) => this.loadBlock(o.name).create(e, o))
    ), r.parent.domNode.appendChild(r.domNode), r;
  }
  get path() {
    return [];
  }
  getState() {
    return ir.warn("You can never call `getState` in scrollPage"), {};
  }
  listenDomEvent() {
    const { eventCenter: e } = this.muya, { domNode: s } = this;
    e.attachDOMEvent(s, "click", this.clickHandler.bind(this));
  }
  updateState(e) {
    const { muya: s } = this;
    this.empty(), this.append(
      ...e.map((r) => Ne.loadBlock(r.name).create(s, r))
    );
  }
  /**
   * Find the content block by the path
   * @param {array} path
   */
  queryBlock(e) {
    if (e.length === 0)
      return this;
    const s = e.shift(), r = this.find(s);
    return r && e.length ? r.queryBlock(e) : r;
  }
  updateRefLinkAndImage(e) {
    const s = new RegExp(`\\[${e}\\](?!:)`);
    this.breadthFirstTraverse((r) => {
      r.isContent() && s.test(r.text) && r.update();
    });
  }
  handleBlurFromContent(e) {
    this._blurFocus.blur = e, requestAnimationFrame(this.updateActiveStatus);
  }
  handleFocusFromContent(e) {
    this._blurFocus.focus = e, requestAnimationFrame(this.updateActiveStatus);
  }
  // Create a new paragraph if click the blank area in editor.
  clickHandler(e) {
    if (!vn(e))
      return;
    const s = e.target;
    if (s && s[Wr] === this) {
      const r = this.lastChild, o = r.lastContentInDescendant(), { clientY: a } = e, l = r.domNode, { bottom: m } = l.getBoundingClientRect();
      if (a > m)
        if (r.blockName === "paragraph" && o.text === "")
          o.setCursor(0, 0);
        else {
          const h = {
            name: "paragraph",
            text: ""
          }, u = Ne.loadBlock(h.name).create(
            this.muya,
            h
          );
          this.append(u, "user"), u.lastContentInDescendant().setCursor(0, 0, !0);
        }
    }
  }
};
T(Ne, "blockName", "scrollpage"), T(Ne, "registeredBlocks", /* @__PURE__ */ new Map());
let k = Ne;
class dt {
  constructor() {
    T(this, "firstChild");
  }
  queryBlock(t) {
    return t.length && t[0] === "text" ? this.firstChild : this;
  }
}
var so = Object.defineProperty, ec = Object.getOwnPropertyDescriptor, tc = (n, t, e) => t in n ? so(n, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : n[t] = e, sc = (n, t, e, s) => {
  for (var r = s > 1 ? void 0 : s ? ec(t, e) : t, o = n.length - 1, a; o >= 0; o--)
    (a = n[o]) && (r = (s ? a(t, e, r) : a(r)) || r);
  return s && r && so(t, e, r), r;
}, nc = (n, t, e) => (tc(n, typeof t != "symbol" ? t + "" : t, e), e);
let Qe = class extends q {
  static create(n, t) {
    const e = new Qe(n);
    return e.append(
      k.loadBlock("paragraph.content").create(n, t.text)
    ), e;
  }
  get path() {
    const { path: n } = this.parent, t = this.parent.offset(this);
    return [...n, t];
  }
  constructor(n) {
    super(n), this.tagName = "p", this.classList = ["mu-paragraph"], this.createDomNode();
  }
  getState() {
    return {
      name: "paragraph",
      text: this.children.head.text
    };
  }
};
nc(Qe, "blockName", "paragraph");
Qe = sc([
  re(dt)
], Qe);
const rc = Qe;
var no = Object.defineProperty, oc = Object.getOwnPropertyDescriptor, ic = (n, t, e) => t in n ? no(n, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : n[t] = e, ac = (n, t, e, s) => {
  for (var r = s > 1 ? void 0 : s ? oc(t, e) : t, o = n.length - 1, a; o >= 0; o--)
    (a = n[o]) && (r = (s ? a(t, e, r) : a(r)) || r);
  return s && r && no(t, e, r), r;
}, cc = (n, t, e) => (ic(n, typeof t != "symbol" ? t + "" : t, e), e);
let Ve = class extends q {
  constructor(t, { meta: e }) {
    super(t);
    T(this, "meta");
    this.tagName = `h${e.level}`, this.meta = e, this.classList = ["mu-atx-heading"], this.createDomNode();
  }
  static create(t, e) {
    const s = new Ve(t, e);
    return s.append(
      k.loadBlock("atxheading.content").create(t, e.text)
    ), s;
  }
  get path() {
    const { path: t } = this.parent, e = this.parent.offset(this);
    return [...t, e];
  }
  getState() {
    return {
      name: "atx-heading",
      meta: this.meta,
      text: this.children.head.text
    };
  }
};
cc(Ve, "blockName", "atx-heading");
Ve = ac([
  re(dt)
], Ve);
const lc = Ve;
var ro = Object.defineProperty, pc = Object.getOwnPropertyDescriptor, mc = (n, t, e) => t in n ? ro(n, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : n[t] = e, uc = (n, t, e, s) => {
  for (var r = s > 1 ? void 0 : s ? pc(t, e) : t, o = n.length - 1, a; o >= 0; o--)
    (a = n[o]) && (r = (s ? a(t, e, r) : a(r)) || r);
  return s && r && ro(t, e, r), r;
}, dc = (n, t, e) => (mc(n, typeof t != "symbol" ? t + "" : t, e), e);
let et = class extends q {
  constructor(t, { meta: e }) {
    super(t);
    T(this, "meta");
    this.tagName = `h${e.level}`, this.meta = e, this.classList = ["mu-setext-heading"], this.createDomNode();
  }
  static create(t, e) {
    const s = new et(t, e);
    return s.append(
      k.loadBlock("setextheading.content").create(t, e.text)
    ), s;
  }
  get path() {
    const { path: t } = this.parent, e = this.parent.offset(this);
    return [...t, e];
  }
  getState() {
    return {
      name: "setext-heading",
      meta: this.meta,
      text: this.children.head.text
    };
  }
};
dc(et, "blockName", "setext-heading");
et = uc([
  re(dt)
], et);
const hc = et;
var oo = Object.defineProperty, fc = Object.getOwnPropertyDescriptor, gc = (n, t, e) => t in n ? oo(n, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : n[t] = e, _c = (n, t, e, s) => {
  for (var r = s > 1 ? void 0 : s ? fc(t, e) : t, o = n.length - 1, a; o >= 0; o--)
    (a = n[o]) && (r = (s ? a(t, e, r) : a(r)) || r);
  return s && r && oo(t, e, r), r;
}, jc = (n, t, e) => (gc(n, typeof t != "symbol" ? t + "" : t, e), e);
let tt = class extends q {
  static create(n, t) {
    const e = new tt(n);
    return e.append(
      k.loadBlock("thematicbreak.content").create(n, t.text)
    ), e;
  }
  get path() {
    const { path: n } = this.parent, t = this.parent.offset(this);
    return [...n, t];
  }
  constructor(n) {
    super(n), this.tagName = "p", this.classList = ["mu-thematic-break"], this.createDomNode();
  }
  getState() {
    return {
      name: "thematic-break",
      text: this.children.head.text
    };
  }
};
jc(tt, "blockName", "thematic-break");
tt = _c([
  re(dt)
], tt);
const bc = tt;
function je(n) {
  return Array.isArray ? Array.isArray(n) : co(n) === "[object Array]";
}
const vc = 1 / 0;
function xc(n) {
  if (typeof n == "string")
    return n;
  let t = n + "";
  return t == "0" && 1 / n == -vc ? "-0" : t;
}
function wc(n) {
  return n == null ? "" : xc(n);
}
function ce(n) {
  return typeof n == "string";
}
function io(n) {
  return typeof n == "number";
}
function kc(n) {
  return n === !0 || n === !1 || yc(n) && co(n) == "[object Boolean]";
}
function ao(n) {
  return typeof n == "object";
}
function yc(n) {
  return ao(n) && n !== null;
}
function se(n) {
  return n != null;
}
function Ds(n) {
  return !n.trim().length;
}
function co(n) {
  return n == null ? n === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(n);
}
const Sc = "Incorrect 'index' type", Cc = (n) => `Invalid value for key ${n}`, Ac = (n) => `Pattern length exceeds max of ${n}.`, Tc = (n) => `Missing ${n} property in key`, Dc = (n) => `Property 'weight' in key '${n}' must be a positive integer`, ar = Object.prototype.hasOwnProperty;
class $c {
  constructor(t) {
    this._keys = [], this._keyMap = {};
    let e = 0;
    t.forEach((s) => {
      let r = lo(s);
      this._keys.push(r), this._keyMap[r.id] = r, e += r.weight;
    }), this._keys.forEach((s) => {
      s.weight /= e;
    });
  }
  get(t) {
    return this._keyMap[t];
  }
  keys() {
    return this._keys;
  }
  toJSON() {
    return JSON.stringify(this._keys);
  }
}
function lo(n) {
  let t = null, e = null, s = null, r = 1, o = null;
  if (ce(n) || je(n))
    s = n, t = cr(n), e = Gs(n);
  else {
    if (!ar.call(n, "name"))
      throw new Error(Tc("name"));
    const a = n.name;
    if (s = a, ar.call(n, "weight") && (r = n.weight, r <= 0))
      throw new Error(Dc(a));
    t = cr(a), e = Gs(a), o = n.getFn;
  }
  return { path: t, id: e, weight: r, src: s, getFn: o };
}
function cr(n) {
  return je(n) ? n : n.split(".");
}
function Gs(n) {
  return je(n) ? n.join(".") : n;
}
function Nc(n, t) {
  let e = [], s = !1;
  const r = (o, a, l) => {
    if (se(o))
      if (!a[l])
        e.push(o);
      else {
        let m = a[l];
        const h = o[m];
        if (!se(h))
          return;
        if (l === a.length - 1 && (ce(h) || io(h) || kc(h)))
          e.push(wc(h));
        else if (je(h)) {
          s = !0;
          for (let u = 0, f = h.length; u < f; u += 1)
            r(h[u], a, l + 1);
        } else
          a.length && r(h, a, l + 1);
      }
  };
  return r(n, ce(t) ? t.split(".") : t, 0), s ? e : e[0];
}
const Lc = {
  // Whether the matches should be included in the result set. When `true`, each record in the result
  // set will include the indices of the matched characters.
  // These can consequently be used for highlighting purposes.
  includeMatches: !1,
  // When `true`, the matching function will continue to the end of a search pattern even if
  // a perfect match has already been located in the string.
  findAllMatches: !1,
  // Minimum number of characters that must be matched before a result is considered a match
  minMatchCharLength: 1
}, Oc = {
  // When `true`, the algorithm continues searching to the end of the input even if a perfect
  // match is found before the end of the same input.
  isCaseSensitive: !1,
  // When true, the matching function will continue to the end of a search pattern even if
  includeScore: !1,
  // List of properties that will be searched. This also supports nested properties.
  keys: [],
  // Whether to sort the result list, by score
  shouldSort: !0,
  // Default sort function: sort by ascending score, ascending index
  sortFn: (n, t) => n.score === t.score ? n.idx < t.idx ? -1 : 1 : n.score < t.score ? -1 : 1
}, Ec = {
  // Approximately where in the text is the pattern expected to be found?
  location: 0,
  // At what point does the match algorithm give up. A threshold of '0.0' requires a perfect match
  // (of both letters and location), a threshold of '1.0' would match anything.
  threshold: 0.6,
  // Determines how close the match must be to the fuzzy location (specified above).
  // An exact letter match which is 'distance' characters away from the fuzzy location
  // would score as a complete mismatch. A distance of '0' requires the match be at
  // the exact location specified, a threshold of '1000' would require a perfect match
  // to be within 800 characters of the fuzzy location to be found using a 0.8 threshold.
  distance: 100
}, Ic = {
  // When `true`, it enables the use of unix-like search commands
  useExtendedSearch: !1,
  // The get function to use when fetching an object's properties.
  // The default will search nested paths *ie foo.bar.baz*
  getFn: Nc,
  // When `true`, search will ignore `location` and `distance`, so it won't matter
  // where in the string the pattern appears.
  // More info: https://fusejs.io/concepts/scoring-theory.html#fuzziness-score
  ignoreLocation: !1,
  // When `true`, the calculation for the relevance score (used for sorting) will
  // ignore the field-length norm.
  // More info: https://fusejs.io/concepts/scoring-theory.html#field-length-norm
  ignoreFieldNorm: !1,
  // The weight to determine how much field length norm effects scoring.
  fieldNormWeight: 1
};
var E = {
  ...Oc,
  ...Lc,
  ...Ec,
  ...Ic
};
const Pc = /[^ ]+/g;
function Rc(n = 1, t = 3) {
  const e = /* @__PURE__ */ new Map(), s = Math.pow(10, t);
  return {
    get(r) {
      const o = r.match(Pc).length;
      if (e.has(o))
        return e.get(o);
      const a = 1 / Math.pow(o, 0.5 * n), l = parseFloat(Math.round(a * s) / s);
      return e.set(o, l), l;
    },
    clear() {
      e.clear();
    }
  };
}
class kn {
  constructor({
    getFn: t = E.getFn,
    fieldNormWeight: e = E.fieldNormWeight
  } = {}) {
    this.norm = Rc(e, 3), this.getFn = t, this.isCreated = !1, this.setIndexRecords();
  }
  setSources(t = []) {
    this.docs = t;
  }
  setIndexRecords(t = []) {
    this.records = t;
  }
  setKeys(t = []) {
    this.keys = t, this._keysMap = {}, t.forEach((e, s) => {
      this._keysMap[e.id] = s;
    });
  }
  create() {
    this.isCreated || !this.docs.length || (this.isCreated = !0, ce(this.docs[0]) ? this.docs.forEach((t, e) => {
      this._addString(t, e);
    }) : this.docs.forEach((t, e) => {
      this._addObject(t, e);
    }), this.norm.clear());
  }
  // Adds a doc to the end of the index
  add(t) {
    const e = this.size();
    ce(t) ? this._addString(t, e) : this._addObject(t, e);
  }
  // Removes the doc at the specified index of the index
  removeAt(t) {
    this.records.splice(t, 1);
    for (let e = t, s = this.size(); e < s; e += 1)
      this.records[e].i -= 1;
  }
  getValueForItemAtKeyId(t, e) {
    return t[this._keysMap[e]];
  }
  size() {
    return this.records.length;
  }
  _addString(t, e) {
    if (!se(t) || Ds(t))
      return;
    let s = {
      v: t,
      i: e,
      n: this.norm.get(t)
    };
    this.records.push(s);
  }
  _addObject(t, e) {
    let s = { i: e, $: {} };
    this.keys.forEach((r, o) => {
      let a = r.getFn ? r.getFn(t) : this.getFn(t, r.path);
      if (se(a)) {
        if (je(a)) {
          let l = [];
          const m = [{ nestedArrIndex: -1, value: a }];
          for (; m.length; ) {
            const { nestedArrIndex: h, value: u } = m.pop();
            if (se(u))
              if (ce(u) && !Ds(u)) {
                let f = {
                  v: u,
                  i: h,
                  n: this.norm.get(u)
                };
                l.push(f);
              } else
                je(u) && u.forEach((f, i) => {
                  m.push({
                    nestedArrIndex: i,
                    value: f
                  });
                });
          }
          s.$[o] = l;
        } else if (ce(a) && !Ds(a)) {
          let l = {
            v: a,
            n: this.norm.get(a)
          };
          s.$[o] = l;
        }
      }
    }), this.records.push(s);
  }
  toJSON() {
    return {
      keys: this.keys,
      records: this.records
    };
  }
}
function po(n, t, { getFn: e = E.getFn, fieldNormWeight: s = E.fieldNormWeight } = {}) {
  const r = new kn({ getFn: e, fieldNormWeight: s });
  return r.setKeys(n.map(lo)), r.setSources(t), r.create(), r;
}
function Mc(n, { getFn: t = E.getFn, fieldNormWeight: e = E.fieldNormWeight } = {}) {
  const { keys: s, records: r } = n, o = new kn({ getFn: t, fieldNormWeight: e });
  return o.setKeys(s), o.setIndexRecords(r), o;
}
function Dt(n, {
  errors: t = 0,
  currentLocation: e = 0,
  expectedLocation: s = 0,
  distance: r = E.distance,
  ignoreLocation: o = E.ignoreLocation
} = {}) {
  const a = t / n.length;
  if (o)
    return a;
  const l = Math.abs(s - e);
  return r ? a + l / r : l ? 1 : a;
}
function Bc(n = [], t = E.minMatchCharLength) {
  let e = [], s = -1, r = -1, o = 0;
  for (let a = n.length; o < a; o += 1) {
    let l = n[o];
    l && s === -1 ? s = o : !l && s !== -1 && (r = o - 1, r - s + 1 >= t && e.push([s, r]), s = -1);
  }
  return n[o - 1] && o - s >= t && e.push([s, o - 1]), e;
}
const $e = 32;
function qc(n, t, e, {
  location: s = E.location,
  distance: r = E.distance,
  threshold: o = E.threshold,
  findAllMatches: a = E.findAllMatches,
  minMatchCharLength: l = E.minMatchCharLength,
  includeMatches: m = E.includeMatches,
  ignoreLocation: h = E.ignoreLocation
} = {}) {
  if (t.length > $e)
    throw new Error(Ac($e));
  const u = t.length, f = n.length, i = Math.max(0, Math.min(s, f));
  let c = o, p = i;
  const g = l > 1 || m, j = g ? Array(f) : [];
  let b;
  for (; (b = n.indexOf(t, p)) > -1; ) {
    let A = Dt(t, {
      currentLocation: b,
      expectedLocation: i,
      distance: r,
      ignoreLocation: h
    });
    if (c = Math.min(A, c), p = b + u, g) {
      let $ = 0;
      for (; $ < u; )
        j[b + $] = 1, $ += 1;
    }
  }
  p = -1;
  let x = [], y = 1, w = u + f;
  const C = 1 << u - 1;
  for (let A = 0; A < u; A += 1) {
    let $ = 0, O = w;
    for (; $ < O; )
      Dt(t, {
        errors: A,
        currentLocation: i + O,
        expectedLocation: i,
        distance: r,
        ignoreLocation: h
      }) <= c ? $ = O : w = O, O = Math.floor((w - $) / 2 + $);
    w = O;
    let R = Math.max(1, i - O + 1), M = a ? f : Math.min(i + O, f) + u, I = Array(M + 2);
    I[M + 1] = (1 << A) - 1;
    for (let H = M; H >= R; H -= 1) {
      let V = H - 1, ye = e[n.charAt(V)];
      if (g && (j[V] = +!!ye), I[H] = (I[H + 1] << 1 | 1) & ye, A && (I[H] |= (x[H + 1] | x[H]) << 1 | 1 | x[H + 1]), I[H] & C && (y = Dt(t, {
        errors: A,
        currentLocation: V,
        expectedLocation: i,
        distance: r,
        ignoreLocation: h
      }), y <= c)) {
        if (c = y, p = V, p <= i)
          break;
        R = Math.max(1, 2 * i - p);
      }
    }
    if (Dt(t, {
      errors: A + 1,
      currentLocation: i,
      expectedLocation: i,
      distance: r,
      ignoreLocation: h
    }) > c)
      break;
    x = I;
  }
  const D = {
    isMatch: p >= 0,
    // Count exact matches (those with a score of 0) to be "almost" exact
    score: Math.max(1e-3, y)
  };
  if (g) {
    const A = Bc(j, l);
    A.length ? m && (D.indices = A) : D.isMatch = !1;
  }
  return D;
}
function Hc(n) {
  let t = {};
  for (let e = 0, s = n.length; e < s; e += 1) {
    const r = n.charAt(e);
    t[r] = (t[r] || 0) | 1 << s - e - 1;
  }
  return t;
}
class mo {
  constructor(t, {
    location: e = E.location,
    threshold: s = E.threshold,
    distance: r = E.distance,
    includeMatches: o = E.includeMatches,
    findAllMatches: a = E.findAllMatches,
    minMatchCharLength: l = E.minMatchCharLength,
    isCaseSensitive: m = E.isCaseSensitive,
    ignoreLocation: h = E.ignoreLocation
  } = {}) {
    if (this.options = {
      location: e,
      threshold: s,
      distance: r,
      includeMatches: o,
      findAllMatches: a,
      minMatchCharLength: l,
      isCaseSensitive: m,
      ignoreLocation: h
    }, this.pattern = m ? t : t.toLowerCase(), this.chunks = [], !this.pattern.length)
      return;
    const u = (i, c) => {
      this.chunks.push({
        pattern: i,
        alphabet: Hc(i),
        startIndex: c
      });
    }, f = this.pattern.length;
    if (f > $e) {
      let i = 0;
      const c = f % $e, p = f - c;
      for (; i < p; )
        u(this.pattern.substr(i, $e), i), i += $e;
      if (c) {
        const g = f - $e;
        u(this.pattern.substr(g), g);
      }
    } else
      u(this.pattern, 0);
  }
  searchIn(t) {
    const { isCaseSensitive: e, includeMatches: s } = this.options;
    if (e || (t = t.toLowerCase()), this.pattern === t) {
      let p = {
        isMatch: !0,
        score: 0
      };
      return s && (p.indices = [[0, t.length - 1]]), p;
    }
    const {
      location: r,
      distance: o,
      threshold: a,
      findAllMatches: l,
      minMatchCharLength: m,
      ignoreLocation: h
    } = this.options;
    let u = [], f = 0, i = !1;
    this.chunks.forEach(({ pattern: p, alphabet: g, startIndex: j }) => {
      const { isMatch: b, score: x, indices: y } = qc(t, p, g, {
        location: r + j,
        distance: o,
        threshold: a,
        findAllMatches: l,
        minMatchCharLength: m,
        includeMatches: s,
        ignoreLocation: h
      });
      b && (i = !0), f += x, b && y && (u = [...u, ...y]);
    });
    let c = {
      isMatch: i,
      score: i ? f / this.chunks.length : 1
    };
    return i && s && (c.indices = u), c;
  }
}
class we {
  constructor(t) {
    this.pattern = t;
  }
  static isMultiMatch(t) {
    return lr(t, this.multiRegex);
  }
  static isSingleMatch(t) {
    return lr(t, this.singleRegex);
  }
  search() {
  }
}
function lr(n, t) {
  const e = n.match(t);
  return e ? e[1] : null;
}
class Gc extends we {
  constructor(t) {
    super(t);
  }
  static get type() {
    return "exact";
  }
  static get multiRegex() {
    return /^="(.*)"$/;
  }
  static get singleRegex() {
    return /^=(.*)$/;
  }
  search(t) {
    const e = t === this.pattern;
    return {
      isMatch: e,
      score: e ? 0 : 1,
      indices: [0, this.pattern.length - 1]
    };
  }
}
class Fc extends we {
  constructor(t) {
    super(t);
  }
  static get type() {
    return "inverse-exact";
  }
  static get multiRegex() {
    return /^!"(.*)"$/;
  }
  static get singleRegex() {
    return /^!(.*)$/;
  }
  search(t) {
    const s = t.indexOf(this.pattern) === -1;
    return {
      isMatch: s,
      score: s ? 0 : 1,
      indices: [0, t.length - 1]
    };
  }
}
class zc extends we {
  constructor(t) {
    super(t);
  }
  static get type() {
    return "prefix-exact";
  }
  static get multiRegex() {
    return /^\^"(.*)"$/;
  }
  static get singleRegex() {
    return /^\^(.*)$/;
  }
  search(t) {
    const e = t.startsWith(this.pattern);
    return {
      isMatch: e,
      score: e ? 0 : 1,
      indices: [0, this.pattern.length - 1]
    };
  }
}
class Uc extends we {
  constructor(t) {
    super(t);
  }
  static get type() {
    return "inverse-prefix-exact";
  }
  static get multiRegex() {
    return /^!\^"(.*)"$/;
  }
  static get singleRegex() {
    return /^!\^(.*)$/;
  }
  search(t) {
    const e = !t.startsWith(this.pattern);
    return {
      isMatch: e,
      score: e ? 0 : 1,
      indices: [0, t.length - 1]
    };
  }
}
class Kc extends we {
  constructor(t) {
    super(t);
  }
  static get type() {
    return "suffix-exact";
  }
  static get multiRegex() {
    return /^"(.*)"\$$/;
  }
  static get singleRegex() {
    return /^(.*)\$$/;
  }
  search(t) {
    const e = t.endsWith(this.pattern);
    return {
      isMatch: e,
      score: e ? 0 : 1,
      indices: [t.length - this.pattern.length, t.length - 1]
    };
  }
}
class Wc extends we {
  constructor(t) {
    super(t);
  }
  static get type() {
    return "inverse-suffix-exact";
  }
  static get multiRegex() {
    return /^!"(.*)"\$$/;
  }
  static get singleRegex() {
    return /^!(.*)\$$/;
  }
  search(t) {
    const e = !t.endsWith(this.pattern);
    return {
      isMatch: e,
      score: e ? 0 : 1,
      indices: [0, t.length - 1]
    };
  }
}
class uo extends we {
  constructor(t, {
    location: e = E.location,
    threshold: s = E.threshold,
    distance: r = E.distance,
    includeMatches: o = E.includeMatches,
    findAllMatches: a = E.findAllMatches,
    minMatchCharLength: l = E.minMatchCharLength,
    isCaseSensitive: m = E.isCaseSensitive,
    ignoreLocation: h = E.ignoreLocation
  } = {}) {
    super(t), this._bitapSearch = new mo(t, {
      location: e,
      threshold: s,
      distance: r,
      includeMatches: o,
      findAllMatches: a,
      minMatchCharLength: l,
      isCaseSensitive: m,
      ignoreLocation: h
    });
  }
  static get type() {
    return "fuzzy";
  }
  static get multiRegex() {
    return /^"(.*)"$/;
  }
  static get singleRegex() {
    return /^(.*)$/;
  }
  search(t) {
    return this._bitapSearch.searchIn(t);
  }
}
class ho extends we {
  constructor(t) {
    super(t);
  }
  static get type() {
    return "include";
  }
  static get multiRegex() {
    return /^'"(.*)"$/;
  }
  static get singleRegex() {
    return /^'(.*)$/;
  }
  search(t) {
    let e = 0, s;
    const r = [], o = this.pattern.length;
    for (; (s = t.indexOf(this.pattern, e)) > -1; )
      e = s + o, r.push([s, e - 1]);
    const a = !!r.length;
    return {
      isMatch: a,
      score: a ? 0 : 1,
      indices: r
    };
  }
}
const Fs = [
  Gc,
  ho,
  zc,
  Uc,
  Wc,
  Kc,
  Fc,
  uo
], pr = Fs.length, Zc = / +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/, Jc = "|";
function Yc(n, t = {}) {
  return n.split(Jc).map((e) => {
    let s = e.trim().split(Zc).filter((o) => o && !!o.trim()), r = [];
    for (let o = 0, a = s.length; o < a; o += 1) {
      const l = s[o];
      let m = !1, h = -1;
      for (; !m && ++h < pr; ) {
        const u = Fs[h];
        let f = u.isMultiMatch(l);
        f && (r.push(new u(f, t)), m = !0);
      }
      if (!m)
        for (h = -1; ++h < pr; ) {
          const u = Fs[h];
          let f = u.isSingleMatch(l);
          if (f) {
            r.push(new u(f, t));
            break;
          }
        }
    }
    return r;
  });
}
const Xc = /* @__PURE__ */ new Set([uo.type, ho.type]);
class Qc {
  constructor(t, {
    isCaseSensitive: e = E.isCaseSensitive,
    includeMatches: s = E.includeMatches,
    minMatchCharLength: r = E.minMatchCharLength,
    ignoreLocation: o = E.ignoreLocation,
    findAllMatches: a = E.findAllMatches,
    location: l = E.location,
    threshold: m = E.threshold,
    distance: h = E.distance
  } = {}) {
    this.query = null, this.options = {
      isCaseSensitive: e,
      includeMatches: s,
      minMatchCharLength: r,
      findAllMatches: a,
      ignoreLocation: o,
      location: l,
      threshold: m,
      distance: h
    }, this.pattern = e ? t : t.toLowerCase(), this.query = Yc(this.pattern, this.options);
  }
  static condition(t, e) {
    return e.useExtendedSearch;
  }
  searchIn(t) {
    const e = this.query;
    if (!e)
      return {
        isMatch: !1,
        score: 1
      };
    const { includeMatches: s, isCaseSensitive: r } = this.options;
    t = r ? t : t.toLowerCase();
    let o = 0, a = [], l = 0;
    for (let m = 0, h = e.length; m < h; m += 1) {
      const u = e[m];
      a.length = 0, o = 0;
      for (let f = 0, i = u.length; f < i; f += 1) {
        const c = u[f], { isMatch: p, indices: g, score: j } = c.search(t);
        if (p) {
          if (o += 1, l += j, s) {
            const b = c.constructor.type;
            Xc.has(b) ? a = [...a, ...g] : a.push(g);
          }
        } else {
          l = 0, o = 0, a.length = 0;
          break;
        }
      }
      if (o) {
        let f = {
          isMatch: !0,
          score: l / o
        };
        return s && (f.indices = a), f;
      }
    }
    return {
      isMatch: !1,
      score: 1
    };
  }
}
const zs = [];
function Vc(...n) {
  zs.push(...n);
}
function Us(n, t) {
  for (let e = 0, s = zs.length; e < s; e += 1) {
    let r = zs[e];
    if (r.condition(n, t))
      return new r(n, t);
  }
  return new mo(n, t);
}
const Ot = {
  AND: "$and",
  OR: "$or"
}, Ks = {
  PATH: "$path",
  PATTERN: "$val"
}, Ws = (n) => !!(n[Ot.AND] || n[Ot.OR]), el = (n) => !!n[Ks.PATH], tl = (n) => !je(n) && ao(n) && !Ws(n), mr = (n) => ({
  [Ot.AND]: Object.keys(n).map((t) => ({
    [t]: n[t]
  }))
});
function fo(n, t, { auto: e = !0 } = {}) {
  const s = (r) => {
    let o = Object.keys(r);
    const a = el(r);
    if (!a && o.length > 1 && !Ws(r))
      return s(mr(r));
    if (tl(r)) {
      const m = a ? r[Ks.PATH] : o[0], h = a ? r[Ks.PATTERN] : r[m];
      if (!ce(h))
        throw new Error(Cc(m));
      const u = {
        keyId: Gs(m),
        pattern: h
      };
      return e && (u.searcher = Us(h, t)), u;
    }
    let l = {
      children: [],
      operator: o[0]
    };
    return o.forEach((m) => {
      const h = r[m];
      je(h) && h.forEach((u) => {
        l.children.push(s(u));
      });
    }), l;
  };
  return Ws(n) || (n = mr(n)), s(n);
}
function sl(n, { ignoreFieldNorm: t = E.ignoreFieldNorm }) {
  n.forEach((e) => {
    let s = 1;
    e.matches.forEach(({ key: r, norm: o, score: a }) => {
      const l = r ? r.weight : null;
      s *= Math.pow(
        a === 0 && l ? Number.EPSILON : a,
        (l || 1) * (t ? 1 : o)
      );
    }), e.score = s;
  });
}
function nl(n, t) {
  const e = n.matches;
  t.matches = [], se(e) && e.forEach((s) => {
    if (!se(s.indices) || !s.indices.length)
      return;
    const { indices: r, value: o } = s;
    let a = {
      indices: r,
      value: o
    };
    s.key && (a.key = s.key.src), s.idx > -1 && (a.refIndex = s.idx), t.matches.push(a);
  });
}
function rl(n, t) {
  t.score = n.score;
}
function ol(n, t, {
  includeMatches: e = E.includeMatches,
  includeScore: s = E.includeScore
} = {}) {
  const r = [];
  return e && r.push(nl), s && r.push(rl), n.map((o) => {
    const { idx: a } = o, l = {
      item: t[a],
      refIndex: a
    };
    return r.length && r.forEach((m) => {
      m(o, l);
    }), l;
  });
}
class qe {
  constructor(t, e = {}, s) {
    this.options = { ...E, ...e }, this.options.useExtendedSearch, this._keyStore = new $c(this.options.keys), this.setCollection(t, s);
  }
  setCollection(t, e) {
    if (this._docs = t, e && !(e instanceof kn))
      throw new Error(Sc);
    this._myIndex = e || po(this.options.keys, this._docs, {
      getFn: this.options.getFn,
      fieldNormWeight: this.options.fieldNormWeight
    });
  }
  add(t) {
    se(t) && (this._docs.push(t), this._myIndex.add(t));
  }
  remove(t = () => !1) {
    const e = [];
    for (let s = 0, r = this._docs.length; s < r; s += 1) {
      const o = this._docs[s];
      t(o, s) && (this.removeAt(s), s -= 1, r -= 1, e.push(o));
    }
    return e;
  }
  removeAt(t) {
    this._docs.splice(t, 1), this._myIndex.removeAt(t);
  }
  getIndex() {
    return this._myIndex;
  }
  search(t, { limit: e = -1 } = {}) {
    const {
      includeMatches: s,
      includeScore: r,
      shouldSort: o,
      sortFn: a,
      ignoreFieldNorm: l
    } = this.options;
    let m = ce(t) ? ce(this._docs[0]) ? this._searchStringList(t) : this._searchObjectList(t) : this._searchLogical(t);
    return sl(m, { ignoreFieldNorm: l }), o && m.sort(a), io(e) && e > -1 && (m = m.slice(0, e)), ol(m, this._docs, {
      includeMatches: s,
      includeScore: r
    });
  }
  _searchStringList(t) {
    const e = Us(t, this.options), { records: s } = this._myIndex, r = [];
    return s.forEach(({ v: o, i: a, n: l }) => {
      if (!se(o))
        return;
      const { isMatch: m, score: h, indices: u } = e.searchIn(o);
      m && r.push({
        item: o,
        idx: a,
        matches: [{ score: h, value: o, norm: l, indices: u }]
      });
    }), r;
  }
  _searchLogical(t) {
    const e = fo(t, this.options), s = (l, m, h) => {
      if (!l.children) {
        const { keyId: f, searcher: i } = l, c = this._findMatches({
          key: this._keyStore.get(f),
          value: this._myIndex.getValueForItemAtKeyId(m, f),
          searcher: i
        });
        return c && c.length ? [
          {
            idx: h,
            item: m,
            matches: c
          }
        ] : [];
      }
      const u = [];
      for (let f = 0, i = l.children.length; f < i; f += 1) {
        const c = l.children[f], p = s(c, m, h);
        if (p.length)
          u.push(...p);
        else if (l.operator === Ot.AND)
          return [];
      }
      return u;
    }, r = this._myIndex.records, o = {}, a = [];
    return r.forEach(({ $: l, i: m }) => {
      if (se(l)) {
        let h = s(e, l, m);
        h.length && (o[m] || (o[m] = { idx: m, item: l, matches: [] }, a.push(o[m])), h.forEach(({ matches: u }) => {
          o[m].matches.push(...u);
        }));
      }
    }), a;
  }
  _searchObjectList(t) {
    const e = Us(t, this.options), { keys: s, records: r } = this._myIndex, o = [];
    return r.forEach(({ $: a, i: l }) => {
      if (!se(a))
        return;
      let m = [];
      s.forEach((h, u) => {
        m.push(
          ...this._findMatches({
            key: h,
            value: a[u],
            searcher: e
          })
        );
      }), m.length && o.push({
        idx: l,
        item: a,
        matches: m
      });
    }), o;
  }
  _findMatches({ key: t, value: e, searcher: s }) {
    if (!se(e))
      return [];
    let r = [];
    if (je(e))
      e.forEach(({ v: o, i: a, n: l }) => {
        if (!se(o))
          return;
        const { isMatch: m, score: h, indices: u } = s.searchIn(o);
        m && r.push({
          score: h,
          key: t,
          value: o,
          idx: a,
          norm: l,
          indices: u
        });
      });
    else {
      const { v: o, n: a } = e, { isMatch: l, score: m, indices: h } = s.searchIn(o);
      l && r.push({ score: m, key: t, value: o, norm: a, indices: h });
    }
    return r;
  }
}
qe.version = "7.0.0";
qe.createIndex = po;
qe.parseIndex = Mc;
qe.config = E;
qe.parseQuery = fo;
Vc(Qc);
var go = { exports: {} };
(function(n) {
  var t = { core: { meta: { path: "components/prism-core.js", option: "mandatory" }, core: "Core" }, themes: { meta: { path: "themes/{id}.css", link: "index.html?theme={id}", exclusive: !0 }, prism: { title: "Default", option: "default" }, "prism-dark": "Dark", "prism-funky": "Funky", "prism-okaidia": { title: "Okaidia", owner: "ocodia" }, "prism-twilight": { title: "Twilight", owner: "remybach" }, "prism-coy": { title: "Coy", owner: "tshedor" }, "prism-solarizedlight": { title: "Solarized Light", owner: "hectormatos2011 " }, "prism-tomorrow": { title: "Tomorrow Night", owner: "Rosey" } }, languages: { meta: { path: "components/prism-{id}", noCSS: !0, examplesPath: "examples/prism-{id}", addCheckAll: !0 }, markup: { title: "Markup", alias: ["html", "xml", "svg", "mathml", "ssml", "atom", "rss"], aliasTitles: { html: "HTML", xml: "XML", svg: "SVG", mathml: "MathML", ssml: "SSML", atom: "Atom", rss: "RSS" }, option: "default" }, css: { title: "CSS", option: "default", modify: "markup" }, clike: { title: "C-like", option: "default" }, javascript: { title: "JavaScript", require: "clike", modify: "markup", optional: "regex", alias: "js", option: "default" }, abap: { title: "ABAP", owner: "dellagustin" }, abnf: { title: "ABNF", owner: "RunDevelopment" }, actionscript: { title: "ActionScript", require: "javascript", modify: "markup", owner: "Golmote" }, ada: { title: "Ada", owner: "Lucretia" }, agda: { title: "Agda", owner: "xy-ren" }, al: { title: "AL", owner: "RunDevelopment" }, antlr4: { title: "ANTLR4", alias: "g4", owner: "RunDevelopment" }, apacheconf: { title: "Apache Configuration", owner: "GuiTeK" }, apex: { title: "Apex", require: ["clike", "sql"], owner: "RunDevelopment" }, apl: { title: "APL", owner: "ngn" }, applescript: { title: "AppleScript", owner: "Golmote" }, aql: { title: "AQL", owner: "RunDevelopment" }, arduino: { title: "Arduino", require: "cpp", alias: "ino", owner: "dkern" }, arff: { title: "ARFF", owner: "Golmote" }, armasm: { title: "ARM Assembly", alias: "arm-asm", owner: "RunDevelopment" }, arturo: { title: "Arturo", alias: "art", optional: ["bash", "css", "javascript", "markup", "markdown", "sql"], owner: "drkameleon" }, asciidoc: { alias: "adoc", title: "AsciiDoc", owner: "Golmote" }, aspnet: { title: "ASP.NET (C#)", require: ["markup", "csharp"], owner: "nauzilus" }, asm6502: { title: "6502 Assembly", owner: "kzurawel" }, asmatmel: { title: "Atmel AVR Assembly", owner: "cerkit" }, autohotkey: { title: "AutoHotkey", owner: "aviaryan" }, autoit: { title: "AutoIt", owner: "Golmote" }, avisynth: { title: "AviSynth", alias: "avs", owner: "Zinfidel" }, "avro-idl": { title: "Avro IDL", alias: "avdl", owner: "RunDevelopment" }, awk: { title: "AWK", alias: "gawk", aliasTitles: { gawk: "GAWK" }, owner: "RunDevelopment" }, bash: { title: "Bash", alias: ["sh", "shell"], aliasTitles: { sh: "Shell", shell: "Shell" }, owner: "zeitgeist87" }, basic: { title: "BASIC", owner: "Golmote" }, batch: { title: "Batch", owner: "Golmote" }, bbcode: { title: "BBcode", alias: "shortcode", aliasTitles: { shortcode: "Shortcode" }, owner: "RunDevelopment" }, bbj: { title: "BBj", owner: "hyyan" }, bicep: { title: "Bicep", owner: "johnnyreilly" }, birb: { title: "Birb", require: "clike", owner: "Calamity210" }, bison: { title: "Bison", require: "c", owner: "Golmote" }, bnf: { title: "BNF", alias: "rbnf", aliasTitles: { rbnf: "RBNF" }, owner: "RunDevelopment" }, bqn: { title: "BQN", owner: "yewscion" }, brainfuck: { title: "Brainfuck", owner: "Golmote" }, brightscript: { title: "BrightScript", owner: "RunDevelopment" }, bro: { title: "Bro", owner: "wayward710" }, bsl: { title: "BSL (1C:Enterprise)", alias: "oscript", aliasTitles: { oscript: "OneScript" }, owner: "Diversus23" }, c: { title: "C", require: "clike", owner: "zeitgeist87" }, csharp: { title: "C#", require: "clike", alias: ["cs", "dotnet"], owner: "mvalipour" }, cpp: { title: "C++", require: "c", owner: "zeitgeist87" }, cfscript: { title: "CFScript", require: "clike", alias: "cfc", owner: "mjclemente" }, chaiscript: { title: "ChaiScript", require: ["clike", "cpp"], owner: "RunDevelopment" }, cil: { title: "CIL", owner: "sbrl" }, cilkc: { title: "Cilk/C", require: "c", alias: "cilk-c", owner: "OpenCilk" }, cilkcpp: { title: "Cilk/C++", require: "cpp", alias: ["cilk-cpp", "cilk"], owner: "OpenCilk" }, clojure: { title: "Clojure", owner: "troglotit" }, cmake: { title: "CMake", owner: "mjrogozinski" }, cobol: { title: "COBOL", owner: "RunDevelopment" }, coffeescript: { title: "CoffeeScript", require: "javascript", alias: "coffee", owner: "R-osey" }, concurnas: { title: "Concurnas", alias: "conc", owner: "jasontatton" }, csp: { title: "Content-Security-Policy", owner: "ScottHelme" }, cooklang: { title: "Cooklang", owner: "ahue" }, coq: { title: "Coq", owner: "RunDevelopment" }, crystal: { title: "Crystal", require: "ruby", owner: "MakeNowJust" }, "css-extras": { title: "CSS Extras", require: "css", modify: "css", owner: "milesj" }, csv: { title: "CSV", owner: "RunDevelopment" }, cue: { title: "CUE", owner: "RunDevelopment" }, cypher: { title: "Cypher", owner: "RunDevelopment" }, d: { title: "D", require: "clike", owner: "Golmote" }, dart: { title: "Dart", require: "clike", owner: "Golmote" }, dataweave: { title: "DataWeave", owner: "machaval" }, dax: { title: "DAX", owner: "peterbud" }, dhall: { title: "Dhall", owner: "RunDevelopment" }, diff: { title: "Diff", owner: "uranusjr" }, django: { title: "Django/Jinja2", require: "markup-templating", alias: "jinja2", owner: "romanvm" }, "dns-zone-file": { title: "DNS zone file", owner: "RunDevelopment", alias: "dns-zone" }, docker: { title: "Docker", alias: "dockerfile", owner: "JustinBeckwith" }, dot: { title: "DOT (Graphviz)", alias: "gv", optional: "markup", owner: "RunDevelopment" }, ebnf: { title: "EBNF", owner: "RunDevelopment" }, editorconfig: { title: "EditorConfig", owner: "osipxd" }, eiffel: { title: "Eiffel", owner: "Conaclos" }, ejs: { title: "EJS", require: ["javascript", "markup-templating"], owner: "RunDevelopment", alias: "eta", aliasTitles: { eta: "Eta" } }, elixir: { title: "Elixir", owner: "Golmote" }, elm: { title: "Elm", owner: "zwilias" }, etlua: { title: "Embedded Lua templating", require: ["lua", "markup-templating"], owner: "RunDevelopment" }, erb: { title: "ERB", require: ["ruby", "markup-templating"], owner: "Golmote" }, erlang: { title: "Erlang", owner: "Golmote" }, "excel-formula": { title: "Excel Formula", alias: ["xlsx", "xls"], owner: "RunDevelopment" }, fsharp: { title: "F#", require: "clike", owner: "simonreynolds7" }, factor: { title: "Factor", owner: "catb0t" }, false: { title: "False", owner: "edukisto" }, "firestore-security-rules": { title: "Firestore security rules", require: "clike", owner: "RunDevelopment" }, flow: { title: "Flow", require: "javascript", owner: "Golmote" }, fortran: { title: "Fortran", owner: "Golmote" }, ftl: { title: "FreeMarker Template Language", require: "markup-templating", owner: "RunDevelopment" }, gml: { title: "GameMaker Language", alias: "gamemakerlanguage", require: "clike", owner: "LiarOnce" }, gap: { title: "GAP (CAS)", owner: "RunDevelopment" }, gcode: { title: "G-code", owner: "RunDevelopment" }, gdscript: { title: "GDScript", owner: "RunDevelopment" }, gedcom: { title: "GEDCOM", owner: "Golmote" }, gettext: { title: "gettext", alias: "po", owner: "RunDevelopment" }, gherkin: { title: "Gherkin", owner: "hason" }, git: { title: "Git", owner: "lgiraudel" }, glsl: { title: "GLSL", require: "c", owner: "Golmote" }, gn: { title: "GN", alias: "gni", owner: "RunDevelopment" }, "linker-script": { title: "GNU Linker Script", alias: "ld", owner: "RunDevelopment" }, go: { title: "Go", require: "clike", owner: "arnehormann" }, "go-module": { title: "Go module", alias: "go-mod", owner: "RunDevelopment" }, gradle: { title: "Gradle", require: "clike", owner: "zeabdelkhalek-badido18" }, graphql: { title: "GraphQL", optional: "markdown", owner: "Golmote" }, groovy: { title: "Groovy", require: "clike", owner: "robfletcher" }, haml: { title: "Haml", require: "ruby", optional: ["css", "css-extras", "coffeescript", "erb", "javascript", "less", "markdown", "scss", "textile"], owner: "Golmote" }, handlebars: { title: "Handlebars", require: "markup-templating", alias: ["hbs", "mustache"], aliasTitles: { mustache: "Mustache" }, owner: "Golmote" }, haskell: { title: "Haskell", alias: "hs", owner: "bholst" }, haxe: { title: "Haxe", require: "clike", optional: "regex", owner: "Golmote" }, hcl: { title: "HCL", owner: "outsideris" }, hlsl: { title: "HLSL", require: "c", owner: "RunDevelopment" }, hoon: { title: "Hoon", owner: "matildepark" }, http: { title: "HTTP", optional: ["csp", "css", "hpkp", "hsts", "javascript", "json", "markup", "uri"], owner: "danielgtaylor" }, hpkp: { title: "HTTP Public-Key-Pins", owner: "ScottHelme" }, hsts: { title: "HTTP Strict-Transport-Security", owner: "ScottHelme" }, ichigojam: { title: "IchigoJam", owner: "BlueCocoa" }, icon: { title: "Icon", owner: "Golmote" }, "icu-message-format": { title: "ICU Message Format", owner: "RunDevelopment" }, idris: { title: "Idris", alias: "idr", owner: "KeenS", require: "haskell" }, ignore: { title: ".ignore", owner: "osipxd", alias: ["gitignore", "hgignore", "npmignore"], aliasTitles: { gitignore: ".gitignore", hgignore: ".hgignore", npmignore: ".npmignore" } }, inform7: { title: "Inform 7", owner: "Golmote" }, ini: { title: "Ini", owner: "aviaryan" }, io: { title: "Io", owner: "AlesTsurko" }, j: { title: "J", owner: "Golmote" }, java: { title: "Java", require: "clike", owner: "sherblot" }, javadoc: { title: "JavaDoc", require: ["markup", "java", "javadoclike"], modify: "java", optional: "scala", owner: "RunDevelopment" }, javadoclike: { title: "JavaDoc-like", modify: ["java", "javascript", "php"], owner: "RunDevelopment" }, javastacktrace: { title: "Java stack trace", owner: "RunDevelopment" }, jexl: { title: "Jexl", owner: "czosel" }, jolie: { title: "Jolie", require: "clike", owner: "thesave" }, jq: { title: "JQ", owner: "RunDevelopment" }, jsdoc: { title: "JSDoc", require: ["javascript", "javadoclike", "typescript"], modify: "javascript", optional: ["actionscript", "coffeescript"], owner: "RunDevelopment" }, "js-extras": { title: "JS Extras", require: "javascript", modify: "javascript", optional: ["actionscript", "coffeescript", "flow", "n4js", "typescript"], owner: "RunDevelopment" }, json: { title: "JSON", alias: "webmanifest", aliasTitles: { webmanifest: "Web App Manifest" }, owner: "CupOfTea696" }, json5: { title: "JSON5", require: "json", owner: "RunDevelopment" }, jsonp: { title: "JSONP", require: "json", owner: "RunDevelopment" }, jsstacktrace: { title: "JS stack trace", owner: "sbrl" }, "js-templates": { title: "JS Templates", require: "javascript", modify: "javascript", optional: ["css", "css-extras", "graphql", "markdown", "markup", "sql"], owner: "RunDevelopment" }, julia: { title: "Julia", owner: "cdagnino" }, keepalived: { title: "Keepalived Configure", owner: "dev-itsheng" }, keyman: { title: "Keyman", owner: "mcdurdin" }, kotlin: { title: "Kotlin", alias: ["kt", "kts"], aliasTitles: { kts: "Kotlin Script" }, require: "clike", owner: "Golmote" }, kumir: { title: "KuMir (КуМир)", alias: "kum", owner: "edukisto" }, kusto: { title: "Kusto", owner: "RunDevelopment" }, latex: { title: "LaTeX", alias: ["tex", "context"], aliasTitles: { tex: "TeX", context: "ConTeXt" }, owner: "japborst" }, latte: { title: "Latte", require: ["clike", "markup-templating", "php"], owner: "nette" }, less: { title: "Less", require: "css", optional: "css-extras", owner: "Golmote" }, lilypond: { title: "LilyPond", require: "scheme", alias: "ly", owner: "RunDevelopment" }, liquid: { title: "Liquid", require: "markup-templating", owner: "cinhtau" }, lisp: { title: "Lisp", alias: ["emacs", "elisp", "emacs-lisp"], owner: "JuanCaicedo" }, livescript: { title: "LiveScript", owner: "Golmote" }, llvm: { title: "LLVM IR", owner: "porglezomp" }, log: { title: "Log file", optional: "javastacktrace", owner: "RunDevelopment" }, lolcode: { title: "LOLCODE", owner: "Golmote" }, lua: { title: "Lua", owner: "Golmote" }, magma: { title: "Magma (CAS)", owner: "RunDevelopment" }, makefile: { title: "Makefile", owner: "Golmote" }, markdown: { title: "Markdown", require: "markup", optional: "yaml", alias: "md", owner: "Golmote" }, "markup-templating": { title: "Markup templating", require: "markup", owner: "Golmote" }, mata: { title: "Mata", owner: "RunDevelopment" }, matlab: { title: "MATLAB", owner: "Golmote" }, maxscript: { title: "MAXScript", owner: "RunDevelopment" }, mel: { title: "MEL", owner: "Golmote" }, mermaid: { title: "Mermaid", owner: "RunDevelopment" }, metafont: { title: "METAFONT", owner: "LaeriExNihilo" }, mizar: { title: "Mizar", owner: "Golmote" }, mongodb: { title: "MongoDB", owner: "airs0urce", require: "javascript" }, monkey: { title: "Monkey", owner: "Golmote" }, moonscript: { title: "MoonScript", alias: "moon", owner: "RunDevelopment" }, n1ql: { title: "N1QL", owner: "TMWilds" }, n4js: { title: "N4JS", require: "javascript", optional: "jsdoc", alias: "n4jsd", owner: "bsmith-n4" }, "nand2tetris-hdl": { title: "Nand To Tetris HDL", owner: "stephanmax" }, naniscript: { title: "Naninovel Script", owner: "Elringus", alias: "nani" }, nasm: { title: "NASM", owner: "rbmj" }, neon: { title: "NEON", owner: "nette" }, nevod: { title: "Nevod", owner: "nezaboodka" }, nginx: { title: "nginx", owner: "volado" }, nim: { title: "Nim", owner: "Golmote" }, nix: { title: "Nix", owner: "Golmote" }, nsis: { title: "NSIS", owner: "idleberg" }, objectivec: { title: "Objective-C", require: "c", alias: "objc", owner: "uranusjr" }, ocaml: { title: "OCaml", owner: "Golmote" }, odin: { title: "Odin", owner: "edukisto" }, opencl: { title: "OpenCL", require: "c", modify: ["c", "cpp"], owner: "Milania1" }, openqasm: { title: "OpenQasm", alias: "qasm", owner: "RunDevelopment" }, oz: { title: "Oz", owner: "Golmote" }, parigp: { title: "PARI/GP", owner: "Golmote" }, parser: { title: "Parser", require: "markup", owner: "Golmote" }, pascal: { title: "Pascal", alias: "objectpascal", aliasTitles: { objectpascal: "Object Pascal" }, owner: "Golmote" }, pascaligo: { title: "Pascaligo", owner: "DefinitelyNotAGoat" }, psl: { title: "PATROL Scripting Language", owner: "bertysentry" }, pcaxis: { title: "PC-Axis", alias: "px", owner: "RunDevelopment" }, peoplecode: { title: "PeopleCode", alias: "pcode", owner: "RunDevelopment" }, perl: { title: "Perl", owner: "Golmote" }, php: { title: "PHP", require: "markup-templating", owner: "milesj" }, phpdoc: { title: "PHPDoc", require: ["php", "javadoclike"], modify: "php", owner: "RunDevelopment" }, "php-extras": { title: "PHP Extras", require: "php", modify: "php", owner: "milesj" }, "plant-uml": { title: "PlantUML", alias: "plantuml", owner: "RunDevelopment" }, plsql: { title: "PL/SQL", require: "sql", owner: "Golmote" }, powerquery: { title: "PowerQuery", alias: ["pq", "mscript"], owner: "peterbud" }, powershell: { title: "PowerShell", owner: "nauzilus" }, processing: { title: "Processing", require: "clike", owner: "Golmote" }, prolog: { title: "Prolog", owner: "Golmote" }, promql: { title: "PromQL", owner: "arendjr" }, properties: { title: ".properties", owner: "Golmote" }, protobuf: { title: "Protocol Buffers", require: "clike", owner: "just-boris" }, pug: { title: "Pug", require: ["markup", "javascript"], optional: ["coffeescript", "ejs", "handlebars", "less", "livescript", "markdown", "scss", "stylus", "twig"], owner: "Golmote" }, puppet: { title: "Puppet", owner: "Golmote" }, pure: { title: "Pure", optional: ["c", "cpp", "fortran"], owner: "Golmote" }, purebasic: { title: "PureBasic", require: "clike", alias: "pbfasm", owner: "HeX0R101" }, purescript: { title: "PureScript", require: "haskell", alias: "purs", owner: "sriharshachilakapati" }, python: { title: "Python", alias: "py", owner: "multipetros" }, qsharp: { title: "Q#", require: "clike", alias: "qs", owner: "fedonman" }, q: { title: "Q (kdb+ database)", owner: "Golmote" }, qml: { title: "QML", require: "javascript", owner: "RunDevelopment" }, qore: { title: "Qore", require: "clike", owner: "temnroegg" }, r: { title: "R", owner: "Golmote" }, racket: { title: "Racket", require: "scheme", alias: "rkt", owner: "RunDevelopment" }, cshtml: { title: "Razor C#", alias: "razor", require: ["markup", "csharp"], optional: ["css", "css-extras", "javascript", "js-extras"], owner: "RunDevelopment" }, jsx: { title: "React JSX", require: ["markup", "javascript"], optional: ["jsdoc", "js-extras", "js-templates"], owner: "vkbansal" }, tsx: { title: "React TSX", require: ["jsx", "typescript"] }, reason: { title: "Reason", require: "clike", owner: "Golmote" }, regex: { title: "Regex", owner: "RunDevelopment" }, rego: { title: "Rego", owner: "JordanSh" }, renpy: { title: "Ren'py", alias: "rpy", owner: "HyuchiaDiego" }, rescript: { title: "ReScript", alias: "res", owner: "vmarcosp" }, rest: { title: "reST (reStructuredText)", owner: "Golmote" }, rip: { title: "Rip", owner: "ravinggenius" }, roboconf: { title: "Roboconf", owner: "Golmote" }, robotframework: { title: "Robot Framework", alias: "robot", owner: "RunDevelopment" }, ruby: { title: "Ruby", require: "clike", alias: "rb", owner: "samflores" }, rust: { title: "Rust", owner: "Golmote" }, sas: { title: "SAS", optional: ["groovy", "lua", "sql"], owner: "Golmote" }, sass: { title: "Sass (Sass)", require: "css", optional: "css-extras", owner: "Golmote" }, scss: { title: "Sass (SCSS)", require: "css", optional: "css-extras", owner: "MoOx" }, scala: { title: "Scala", require: "java", owner: "jozic" }, scheme: { title: "Scheme", owner: "bacchus123" }, "shell-session": { title: "Shell session", require: "bash", alias: ["sh-session", "shellsession"], owner: "RunDevelopment" }, smali: { title: "Smali", owner: "RunDevelopment" }, smalltalk: { title: "Smalltalk", owner: "Golmote" }, smarty: { title: "Smarty", require: "markup-templating", optional: "php", owner: "Golmote" }, sml: { title: "SML", alias: "smlnj", aliasTitles: { smlnj: "SML/NJ" }, owner: "RunDevelopment" }, solidity: { title: "Solidity (Ethereum)", alias: "sol", require: "clike", owner: "glachaud" }, "solution-file": { title: "Solution file", alias: "sln", owner: "RunDevelopment" }, soy: { title: "Soy (Closure Template)", require: "markup-templating", owner: "Golmote" }, sparql: { title: "SPARQL", require: "turtle", owner: "Triply-Dev", alias: "rq" }, "splunk-spl": { title: "Splunk SPL", owner: "RunDevelopment" }, sqf: { title: "SQF: Status Quo Function (Arma 3)", require: "clike", owner: "RunDevelopment" }, sql: { title: "SQL", owner: "multipetros" }, squirrel: { title: "Squirrel", require: "clike", owner: "RunDevelopment" }, stan: { title: "Stan", owner: "RunDevelopment" }, stata: { title: "Stata Ado", require: ["mata", "java", "python"], owner: "RunDevelopment" }, iecst: { title: "Structured Text (IEC 61131-3)", owner: "serhioromano" }, stylus: { title: "Stylus", owner: "vkbansal" }, supercollider: { title: "SuperCollider", alias: "sclang", owner: "RunDevelopment" }, swift: { title: "Swift", owner: "chrischares" }, systemd: { title: "Systemd configuration file", owner: "RunDevelopment" }, "t4-templating": { title: "T4 templating", owner: "RunDevelopment" }, "t4-cs": { title: "T4 Text Templates (C#)", require: ["t4-templating", "csharp"], alias: "t4", owner: "RunDevelopment" }, "t4-vb": { title: "T4 Text Templates (VB)", require: ["t4-templating", "vbnet"], owner: "RunDevelopment" }, tap: { title: "TAP", owner: "isaacs", require: "yaml" }, tcl: { title: "Tcl", owner: "PeterChaplin" }, tt2: { title: "Template Toolkit 2", require: ["clike", "markup-templating"], owner: "gflohr" }, textile: { title: "Textile", require: "markup", optional: "css", owner: "Golmote" }, toml: { title: "TOML", owner: "RunDevelopment" }, tremor: { title: "Tremor", alias: ["trickle", "troy"], owner: "darach", aliasTitles: { trickle: "trickle", troy: "troy" } }, turtle: { title: "Turtle", alias: "trig", aliasTitles: { trig: "TriG" }, owner: "jakubklimek" }, twig: { title: "Twig", require: "markup-templating", owner: "brandonkelly" }, typescript: { title: "TypeScript", require: "javascript", optional: "js-templates", alias: "ts", owner: "vkbansal" }, typoscript: { title: "TypoScript", alias: "tsconfig", aliasTitles: { tsconfig: "TSConfig" }, owner: "dkern" }, unrealscript: { title: "UnrealScript", alias: ["uscript", "uc"], owner: "RunDevelopment" }, uorazor: { title: "UO Razor Script", owner: "jaseowns" }, uri: { title: "URI", alias: "url", aliasTitles: { url: "URL" }, owner: "RunDevelopment" }, v: { title: "V", require: "clike", owner: "taggon" }, vala: { title: "Vala", require: "clike", optional: "regex", owner: "TemplarVolk" }, vbnet: { title: "VB.Net", require: "basic", owner: "Bigsby" }, velocity: { title: "Velocity", require: "markup", owner: "Golmote" }, verilog: { title: "Verilog", owner: "a-rey" }, vhdl: { title: "VHDL", owner: "a-rey" }, vim: { title: "vim", owner: "westonganger" }, "visual-basic": { title: "Visual Basic", alias: ["vb", "vba"], aliasTitles: { vba: "VBA" }, owner: "Golmote" }, warpscript: { title: "WarpScript", owner: "RunDevelopment" }, wasm: { title: "WebAssembly", owner: "Golmote" }, "web-idl": { title: "Web IDL", alias: "webidl", owner: "RunDevelopment" }, wgsl: { title: "WGSL", owner: "Dr4gonthree" }, wiki: { title: "Wiki markup", require: "markup", owner: "Golmote" }, wolfram: { title: "Wolfram language", alias: ["mathematica", "nb", "wl"], aliasTitles: { mathematica: "Mathematica", nb: "Mathematica Notebook" }, owner: "msollami" }, wren: { title: "Wren", owner: "clsource" }, xeora: { title: "Xeora", require: "markup", alias: "xeoracube", aliasTitles: { xeoracube: "XeoraCube" }, owner: "freakmaxi" }, "xml-doc": { title: "XML doc (.net)", require: "markup", modify: ["csharp", "fsharp", "vbnet"], owner: "RunDevelopment" }, xojo: { title: "Xojo (REALbasic)", owner: "Golmote" }, xquery: { title: "XQuery", require: "markup", owner: "Golmote" }, yaml: { title: "YAML", alias: "yml", owner: "hason" }, yang: { title: "YANG", owner: "RunDevelopment" }, zig: { title: "Zig", owner: "RunDevelopment" } }, plugins: { meta: { path: "plugins/{id}/prism-{id}", link: "plugins/{id}/" }, "line-highlight": { title: "Line Highlight", description: "Highlights specific lines and/or line ranges." }, "line-numbers": { title: "Line Numbers", description: "Line number at the beginning of code lines.", owner: "kuba-kubula" }, "show-invisibles": { title: "Show Invisibles", description: "Show hidden characters such as tabs and line breaks.", optional: ["autolinker", "data-uri-highlight"] }, autolinker: { title: "Autolinker", description: "Converts URLs and emails in code to clickable links. Parses Markdown links in comments." }, wpd: { title: "WebPlatform Docs", description: 'Makes tokens link to <a href="https://webplatform.github.io/docs/">WebPlatform.org documentation</a>. The links open in a new tab.' }, "custom-class": { title: "Custom Class", description: "This plugin allows you to prefix Prism's default classes (<code>.comment</code> can become <code>.namespace--comment</code>) or replace them with your defined ones (like <code>.editor__comment</code>). You can even add new classes.", owner: "dvkndn", noCSS: !0 }, "file-highlight": { title: "File Highlight", description: "Fetch external files and highlight them with Prism. Used on the Prism website itself.", noCSS: !0 }, "show-language": { title: "Show Language", description: "Display the highlighted language in code blocks (inline code does not show the label).", owner: "nauzilus", noCSS: !0, require: "toolbar" }, "jsonp-highlight": { title: "JSONP Highlight", description: "Fetch content with JSONP and highlight some interesting content (e.g. GitHub/Gists or Bitbucket API).", noCSS: !0, owner: "nauzilus" }, "highlight-keywords": { title: "Highlight Keywords", description: "Adds special CSS classes for each keyword for fine-grained highlighting.", owner: "vkbansal", noCSS: !0 }, "remove-initial-line-feed": { title: "Remove initial line feed", description: "Removes the initial line feed in code blocks.", owner: "Golmote", noCSS: !0 }, "inline-color": { title: "Inline color", description: "Adds a small inline preview for colors in style sheets.", require: "css-extras", owner: "RunDevelopment" }, previewers: { title: "Previewers", description: "Previewers for angles, colors, gradients, easing and time.", require: "css-extras", owner: "Golmote" }, autoloader: { title: "Autoloader", description: "Automatically loads the needed languages to highlight the code blocks.", owner: "Golmote", noCSS: !0 }, "keep-markup": { title: "Keep Markup", description: "Prevents custom markup from being dropped out during highlighting.", owner: "Golmote", optional: "normalize-whitespace", noCSS: !0 }, "command-line": { title: "Command Line", description: "Display a command line with a prompt and, optionally, the output/response from the commands.", owner: "chriswells0" }, "unescaped-markup": { title: "Unescaped Markup", description: "Write markup without having to escape anything." }, "normalize-whitespace": { title: "Normalize Whitespace", description: "Supports multiple operations to normalize whitespace in code blocks.", owner: "zeitgeist87", optional: "unescaped-markup", noCSS: !0 }, "data-uri-highlight": { title: "Data-URI Highlight", description: "Highlights data-URI contents.", owner: "Golmote", noCSS: !0 }, toolbar: { title: "Toolbar", description: "Attach a toolbar for plugins to easily register buttons on the top of a code block.", owner: "mAAdhaTTah" }, "copy-to-clipboard": { title: "Copy to Clipboard Button", description: "Add a button that copies the code block to the clipboard when clicked.", owner: "mAAdhaTTah", require: "toolbar", noCSS: !0 }, "download-button": { title: "Download Button", description: "A button in the toolbar of a code block adding a convenient way to download a code file.", owner: "Golmote", require: "toolbar", noCSS: !0 }, "match-braces": { title: "Match braces", description: "Highlights matching braces.", owner: "RunDevelopment" }, "diff-highlight": { title: "Diff Highlight", description: "Highlights the code inside diff blocks.", owner: "RunDevelopment", require: "diff" }, "filter-highlight-all": { title: "Filter highlightAll", description: "Filters the elements the <code>highlightAll</code> and <code>highlightAllUnder</code> methods actually highlight.", owner: "RunDevelopment", noCSS: !0 }, treeview: { title: "Treeview", description: "A language with special styles to highlight file system tree structures.", owner: "Golmote" } } };
  n.exports && (n.exports = t);
})(go);
var Zs = go.exports;
const Js = /* @__PURE__ */ ns(Zs), il = (n, t) => {
  const e = n[t];
  return e ? typeof e == "function" ? e() : Promise.resolve(e) : new Promise((s, r) => {
    (typeof queueMicrotask == "function" ? queueMicrotask : setTimeout)(r.bind(null, new Error("Unknown variable dynamic import: " + t)));
  });
};
var _o = { exports: {} };
(function(n) {
  var t = /* @__PURE__ */ function() {
    var e = function() {
    };
    function s(f, i) {
      Array.isArray(f) ? f.forEach(i) : f != null && i(f, 0);
    }
    function r(f) {
      for (var i = {}, c = 0, p = f.length; c < p; c++)
        i[f[c]] = !0;
      return i;
    }
    function o(f) {
      var i = {};
      for (var c in f) {
        var p = f[c];
        for (var g in p)
          if (g != "meta") {
            var j = p[g];
            i[g] = typeof j == "string" ? { title: j } : j;
          }
      }
      return i;
    }
    function a(f) {
      var i = {}, c = [];
      function p(g, j) {
        if (!(g in i)) {
          j.push(g);
          var b = j.indexOf(g);
          if (b < j.length - 1)
            throw new Error("Circular dependency: " + j.slice(b).join(" -> "));
          var x = {}, y = f[g];
          if (y) {
            let w = function(C) {
              if (!(C in f))
                throw new Error(g + " depends on an unknown component " + C);
              if (!(C in x)) {
                p(C, j), x[C] = !0;
                for (var D in i[C])
                  x[D] = !0;
              }
            };
            s(y.require, w), s(y.optional, w), s(y.modify, w);
          }
          i[g] = x, j.pop();
        }
      }
      return function(g) {
        var j = i[g];
        return j || (p(g, c), j = i[g]), j;
      };
    }
    function l(f) {
      var i;
      return function(c) {
        if (c in f)
          return c;
        if (!i) {
          i = {};
          for (var p in f) {
            var g = f[p];
            s(g && g.alias, function(j) {
              if (j in i)
                throw new Error(j + " cannot be alias for both " + p + " and " + i[j]);
              if (j in f)
                throw new Error(j + " cannot be alias of " + p + " because it is a component.");
              i[j] = p;
            });
          }
        }
        return i[c] || c;
      };
    }
    function m(f, i, c, p) {
      var g = p ? p.series : void 0, j = p ? p.parallel : e, b = {}, x = {};
      function y(A) {
        if (A in b)
          return b[A];
        x[A] = !0;
        var $ = [];
        for (var O in f(A))
          O in i && $.push(O);
        var R;
        if ($.length === 0)
          R = c(A);
        else {
          var M = j($.map(function(I) {
            var P = y(I);
            return delete x[I], P;
          }));
          g ? R = g(M, function() {
            return c(A);
          }) : c(A);
        }
        return b[A] = R;
      }
      for (var w in i)
        y(w);
      var C = [];
      for (var D in x)
        C.push(b[D]);
      return j(C);
    }
    function h(f) {
      for (var i in f)
        return !0;
      return !1;
    }
    function u(f, i, c) {
      var p = o(f), g = l(p);
      i = i.map(g), c = (c || []).map(g);
      var j = r(i), b = r(c);
      i.forEach(x);
      function x(I) {
        var P = p[I];
        s(P && P.require, function(H) {
          H in b || (j[H] = !0, x(H));
        });
      }
      for (var y = a(p), w = j, C; h(w); ) {
        C = {};
        for (var D in w) {
          var A = p[D];
          s(A && A.modify, function(I) {
            I in b && (C[I] = !0);
          });
        }
        for (var $ in b)
          if (!($ in j)) {
            for (var O in y($))
              if (O in j) {
                C[$] = !0;
                break;
              }
          }
        w = C;
        for (var R in w)
          j[R] = !0;
      }
      var M = {
        getIds: function() {
          var I = [];
          return M.load(function(P) {
            I.push(P);
          }), I;
        },
        load: function(I, P) {
          return m(y, j, I, P);
        }
      };
      return M;
    }
    return u;
  }();
  n.exports = t;
})(_o);
var al = _o.exports;
const cl = /* @__PURE__ */ ns(al), Ye = /* @__PURE__ */ new Set([
  "markup",
  "css",
  "clike",
  "javascript"
]), { languages: $t } = Js, ur = (n) => {
  const t = [];
  for (const e of n)
    if ($t[e])
      t.push(e);
    else {
      const s = Object.keys($t).find((r) => {
        const o = $t[r];
        return o.alias ? o.alias === e || Array.isArray(o.alias) && o.alias.includes(e) : !1;
      });
      s ? t.push(s) : t.push(e);
    }
  return t;
};
function ll(n) {
  return async function(e) {
    if (e || (e = Object.keys($t).filter((o) => o !== "meta")), e && !e.length)
      return Promise.reject(
        new Error(
          "The first parameter should be a list of load languages or single language."
        )
      );
    Array.isArray(e) || (e = [e]);
    const s = [], r = [...Ye, ...Object.keys(n.languages)];
    return cl(Js, e, r).load(async (o) => {
      const a = Ma();
      s.push(a.promise), o in Js.languages ? Ye.has(o) ? a.resolve({
        lang: o,
        status: "cached"
      }) : (delete n.languages[o], await il(/* @__PURE__ */ Object.assign({ "../../../node_modules/prismjs/components/prism-abap.js": () => import("./prism-abap.YBPcKZ2C.js"), "../../../node_modules/prismjs/components/prism-abap.min.js": () => import("./prism-abap.min.xQNcuZpq.js"), "../../../node_modules/prismjs/components/prism-abnf.js": () => import("./prism-abnf.88aHIaI0.js"), "../../../node_modules/prismjs/components/prism-abnf.min.js": () => import("./prism-abnf.min.KvEqXvKz.js"), "../../../node_modules/prismjs/components/prism-actionscript.js": () => import("./prism-actionscript.i8WjOItw.js"), "../../../node_modules/prismjs/components/prism-actionscript.min.js": () => import("./prism-actionscript.min.cCbgcsko.js"), "../../../node_modules/prismjs/components/prism-ada.js": () => import("./prism-ada.tfah8hyF.js"), "../../../node_modules/prismjs/components/prism-ada.min.js": () => import("./prism-ada.min.oymtL71s.js"), "../../../node_modules/prismjs/components/prism-agda.js": () => import("./prism-agda.ir_Nq8TP.js"), "../../../node_modules/prismjs/components/prism-agda.min.js": () => import("./prism-agda.min.i1g1Qaih.js"), "../../../node_modules/prismjs/components/prism-al.js": () => import("./prism-al.Wny0G_C3.js"), "../../../node_modules/prismjs/components/prism-al.min.js": () => import("./prism-al.min.A9-ubU9F.js"), "../../../node_modules/prismjs/components/prism-antlr4.js": () => import("./prism-antlr4.eXYkkakp.js"), "../../../node_modules/prismjs/components/prism-antlr4.min.js": () => import("./prism-antlr4.min.M0UOk97a.js"), "../../../node_modules/prismjs/components/prism-apacheconf.js": () => import("./prism-apacheconf.TVP9R2Rp.js"), "../../../node_modules/prismjs/components/prism-apacheconf.min.js": () => import("./prism-apacheconf.min.H2kCQrRd.js"), "../../../node_modules/prismjs/components/prism-apex.js": () => import("./prism-apex.4Ur3ZCaZ.js"), "../../../node_modules/prismjs/components/prism-apex.min.js": () => import("./prism-apex.min.9DerzXlN.js"), "../../../node_modules/prismjs/components/prism-apl.js": () => import("./prism-apl.ahMH7Rp1.js"), "../../../node_modules/prismjs/components/prism-apl.min.js": () => import("./prism-apl.min.sQ_xoLWg.js"), "../../../node_modules/prismjs/components/prism-applescript.js": () => import("./prism-applescript.ehnE7vrB.js"), "../../../node_modules/prismjs/components/prism-applescript.min.js": () => import("./prism-applescript.min.IXHIUoUA.js"), "../../../node_modules/prismjs/components/prism-aql.js": () => import("./prism-aql.Htno0ncK.js"), "../../../node_modules/prismjs/components/prism-aql.min.js": () => import("./prism-aql.min.4pJvO4FY.js"), "../../../node_modules/prismjs/components/prism-arduino.js": () => import("./prism-arduino.0lIPps_k.js"), "../../../node_modules/prismjs/components/prism-arduino.min.js": () => import("./prism-arduino.min._LqzPxOj.js"), "../../../node_modules/prismjs/components/prism-arff.js": () => import("./prism-arff.jQknshN9.js"), "../../../node_modules/prismjs/components/prism-arff.min.js": () => import("./prism-arff.min.XoAqbpMg.js"), "../../../node_modules/prismjs/components/prism-armasm.js": () => import("./prism-armasm.YMv0EjSf.js"), "../../../node_modules/prismjs/components/prism-armasm.min.js": () => import("./prism-armasm.min.UewCvRwE.js"), "../../../node_modules/prismjs/components/prism-arturo.js": () => import("./prism-arturo.9rqJNjar.js"), "../../../node_modules/prismjs/components/prism-arturo.min.js": () => import("./prism-arturo.min.XuwM1r_Z.js"), "../../../node_modules/prismjs/components/prism-asciidoc.js": () => import("./prism-asciidoc.yw1LNcO1.js"), "../../../node_modules/prismjs/components/prism-asciidoc.min.js": () => import("./prism-asciidoc.min.3SOwDZds.js"), "../../../node_modules/prismjs/components/prism-asm6502.js": () => import("./prism-asm6502.B0VwDlyQ.js"), "../../../node_modules/prismjs/components/prism-asm6502.min.js": () => import("./prism-asm6502.min.kBujadqS.js"), "../../../node_modules/prismjs/components/prism-asmatmel.js": () => import("./prism-asmatmel.a_OA1tL2.js"), "../../../node_modules/prismjs/components/prism-asmatmel.min.js": () => import("./prism-asmatmel.min.-D6YiZBA.js"), "../../../node_modules/prismjs/components/prism-aspnet.js": () => import("./prism-aspnet.KFsBvq37.js"), "../../../node_modules/prismjs/components/prism-aspnet.min.js": () => import("./prism-aspnet.min.l3V_IYNf.js"), "../../../node_modules/prismjs/components/prism-autohotkey.js": () => import("./prism-autohotkey.GWQ29rEO.js"), "../../../node_modules/prismjs/components/prism-autohotkey.min.js": () => import("./prism-autohotkey.min.m_7CdmZT.js"), "../../../node_modules/prismjs/components/prism-autoit.js": () => import("./prism-autoit.xXADNMUy.js"), "../../../node_modules/prismjs/components/prism-autoit.min.js": () => import("./prism-autoit.min.w5N00kYx.js"), "../../../node_modules/prismjs/components/prism-avisynth.js": () => import("./prism-avisynth.wNRwfed_.js"), "../../../node_modules/prismjs/components/prism-avisynth.min.js": () => import("./prism-avisynth.min.lqdfqZzx.js"), "../../../node_modules/prismjs/components/prism-avro-idl.js": () => import("./prism-avro-idl.P-1BqQt2.js"), "../../../node_modules/prismjs/components/prism-avro-idl.min.js": () => import("./prism-avro-idl.min.v5FS6TXn.js"), "../../../node_modules/prismjs/components/prism-awk.js": () => import("./prism-awk.NAH6Uh0B.js"), "../../../node_modules/prismjs/components/prism-awk.min.js": () => import("./prism-awk.min.IqoJDsd9.js"), "../../../node_modules/prismjs/components/prism-bash.js": () => import("./prism-bash.JTZtjSUo.js"), "../../../node_modules/prismjs/components/prism-bash.min.js": () => import("./prism-bash.min.vAvTx02J.js"), "../../../node_modules/prismjs/components/prism-basic.js": () => import("./prism-basic.EzK22d5i.js"), "../../../node_modules/prismjs/components/prism-basic.min.js": () => import("./prism-basic.min.7KNvupHn.js"), "../../../node_modules/prismjs/components/prism-batch.js": () => import("./prism-batch.3ZVL0Kt_.js"), "../../../node_modules/prismjs/components/prism-batch.min.js": () => import("./prism-batch.min.CWemWWd1.js"), "../../../node_modules/prismjs/components/prism-bbcode.js": () => import("./prism-bbcode.kZB6m0KD.js"), "../../../node_modules/prismjs/components/prism-bbcode.min.js": () => import("./prism-bbcode.min.DIC7yTER.js"), "../../../node_modules/prismjs/components/prism-bbj.js": () => import("./prism-bbj.lwRJ4T8N.js"), "../../../node_modules/prismjs/components/prism-bbj.min.js": () => import("./prism-bbj.min.9IcLSJQw.js"), "../../../node_modules/prismjs/components/prism-bicep.js": () => import("./prism-bicep.ZHNkyoZK.js"), "../../../node_modules/prismjs/components/prism-bicep.min.js": () => import("./prism-bicep.min.H5QydYRu.js"), "../../../node_modules/prismjs/components/prism-birb.js": () => import("./prism-birb.KssXXFac.js"), "../../../node_modules/prismjs/components/prism-birb.min.js": () => import("./prism-birb.min.quFGnRdw.js"), "../../../node_modules/prismjs/components/prism-bison.js": () => import("./prism-bison.Hultry5c.js"), "../../../node_modules/prismjs/components/prism-bison.min.js": () => import("./prism-bison.min.lFzzRhQ0.js"), "../../../node_modules/prismjs/components/prism-bnf.js": () => import("./prism-bnf.usb-yZVx.js"), "../../../node_modules/prismjs/components/prism-bnf.min.js": () => import("./prism-bnf.min.NnMkc8br.js"), "../../../node_modules/prismjs/components/prism-bqn.js": () => import("./prism-bqn.q2rgLhxg.js"), "../../../node_modules/prismjs/components/prism-bqn.min.js": () => import("./prism-bqn.min.cCH9eY-W.js"), "../../../node_modules/prismjs/components/prism-brainfuck.js": () => import("./prism-brainfuck.4VSzIflT.js"), "../../../node_modules/prismjs/components/prism-brainfuck.min.js": () => import("./prism-brainfuck.min.j9twm1c2.js"), "../../../node_modules/prismjs/components/prism-brightscript.js": () => import("./prism-brightscript.XuqCjUpf.js"), "../../../node_modules/prismjs/components/prism-brightscript.min.js": () => import("./prism-brightscript.min.ZSTXi0ss.js"), "../../../node_modules/prismjs/components/prism-bro.js": () => import("./prism-bro.oO1NQYkY.js"), "../../../node_modules/prismjs/components/prism-bro.min.js": () => import("./prism-bro.min.WuzgnOjC.js"), "../../../node_modules/prismjs/components/prism-bsl.js": () => import("./prism-bsl.rqRzHrmX.js"), "../../../node_modules/prismjs/components/prism-bsl.min.js": () => import("./prism-bsl.min.4122uJbc.js"), "../../../node_modules/prismjs/components/prism-c.js": () => import("./prism-c.bYaNRXJz.js"), "../../../node_modules/prismjs/components/prism-c.min.js": () => import("./prism-c.min.treajOCO.js"), "../../../node_modules/prismjs/components/prism-cfscript.js": () => import("./prism-cfscript.Ub_0ZunX.js"), "../../../node_modules/prismjs/components/prism-cfscript.min.js": () => import("./prism-cfscript.min.-3immJCq.js"), "../../../node_modules/prismjs/components/prism-chaiscript.js": () => import("./prism-chaiscript.fNx9n7_T.js"), "../../../node_modules/prismjs/components/prism-chaiscript.min.js": () => import("./prism-chaiscript.min.Oal9rXOV.js"), "../../../node_modules/prismjs/components/prism-cil.js": () => import("./prism-cil.YJlqrmYH.js"), "../../../node_modules/prismjs/components/prism-cil.min.js": () => import("./prism-cil.min.1XPoQzX6.js"), "../../../node_modules/prismjs/components/prism-cilkc.js": () => import("./prism-cilkc.fxDFeqaW.js"), "../../../node_modules/prismjs/components/prism-cilkc.min.js": () => import("./prism-cilkc.min.MWFVYMoW.js"), "../../../node_modules/prismjs/components/prism-cilkcpp.js": () => import("./prism-cilkcpp.wLWphObf.js"), "../../../node_modules/prismjs/components/prism-cilkcpp.min.js": () => import("./prism-cilkcpp.min.NB8fZ5f2.js"), "../../../node_modules/prismjs/components/prism-clike.js": () => import("./prism-clike.-kdMGTnT.js"), "../../../node_modules/prismjs/components/prism-clike.min.js": () => import("./prism-clike.min.BROMxRib.js"), "../../../node_modules/prismjs/components/prism-clojure.js": () => import("./prism-clojure.rH7NyfL1.js"), "../../../node_modules/prismjs/components/prism-clojure.min.js": () => import("./prism-clojure.min.IBlKlSpr.js"), "../../../node_modules/prismjs/components/prism-cmake.js": () => import("./prism-cmake.u30NX6dx.js"), "../../../node_modules/prismjs/components/prism-cmake.min.js": () => import("./prism-cmake.min.ENDu7o_4.js"), "../../../node_modules/prismjs/components/prism-cobol.js": () => import("./prism-cobol.Z2O0PnXe.js"), "../../../node_modules/prismjs/components/prism-cobol.min.js": () => import("./prism-cobol.min.ndD5Wmo6.js"), "../../../node_modules/prismjs/components/prism-coffeescript.js": () => import("./prism-coffeescript.OWtU7F2Q.js"), "../../../node_modules/prismjs/components/prism-coffeescript.min.js": () => import("./prism-coffeescript.min.V3g-0ttq.js"), "../../../node_modules/prismjs/components/prism-concurnas.js": () => import("./prism-concurnas.B_6wGiu5.js"), "../../../node_modules/prismjs/components/prism-concurnas.min.js": () => import("./prism-concurnas.min.sepR_FRR.js"), "../../../node_modules/prismjs/components/prism-cooklang.js": () => import("./prism-cooklang.z7Datu7C.js"), "../../../node_modules/prismjs/components/prism-cooklang.min.js": () => import("./prism-cooklang.min.tbCBpuNJ.js"), "../../../node_modules/prismjs/components/prism-coq.js": () => import("./prism-coq.u4IttL7M.js"), "../../../node_modules/prismjs/components/prism-coq.min.js": () => import("./prism-coq.min.G6kxO0sK.js"), "../../../node_modules/prismjs/components/prism-core.js": () => import("./prism-core.DVxSY65j.js").then((l) => l.p), "../../../node_modules/prismjs/components/prism-core.min.js": () => import("./prism-core.min.ZHyp_tfT.js").then((l) => l.p), "../../../node_modules/prismjs/components/prism-cpp.js": () => import("./prism-cpp.J5tUxp2J.js"), "../../../node_modules/prismjs/components/prism-cpp.min.js": () => import("./prism-cpp.min.MBAhskHl.js"), "../../../node_modules/prismjs/components/prism-crystal.js": () => import("./prism-crystal.EAHg2kJR.js"), "../../../node_modules/prismjs/components/prism-crystal.min.js": () => import("./prism-crystal.min.iNcyvlh_.js"), "../../../node_modules/prismjs/components/prism-csharp.js": () => import("./prism-csharp.IbPzurNh.js"), "../../../node_modules/prismjs/components/prism-csharp.min.js": () => import("./prism-csharp.min.kI_s7jgD.js"), "../../../node_modules/prismjs/components/prism-cshtml.js": () => import("./prism-cshtml.AQPv6ROM.js"), "../../../node_modules/prismjs/components/prism-cshtml.min.js": () => import("./prism-cshtml.min.R1p10iFi.js"), "../../../node_modules/prismjs/components/prism-csp.js": () => import("./prism-csp.g0HBOVb4.js"), "../../../node_modules/prismjs/components/prism-csp.min.js": () => import("./prism-csp.min.oQHQVHf0.js"), "../../../node_modules/prismjs/components/prism-css-extras.js": () => import("./prism-css-extras.DyHNs-60.js"), "../../../node_modules/prismjs/components/prism-css-extras.min.js": () => import("./prism-css-extras.min.kqUXGtvt.js"), "../../../node_modules/prismjs/components/prism-css.js": () => import("./prism-css.xa1dgcXW.js"), "../../../node_modules/prismjs/components/prism-css.min.js": () => import("./prism-css.min.T5ysc1kX.js"), "../../../node_modules/prismjs/components/prism-csv.js": () => import("./prism-csv.nAus2ljN.js"), "../../../node_modules/prismjs/components/prism-csv.min.js": () => import("./prism-csv.min.cw5KKZsC.js"), "../../../node_modules/prismjs/components/prism-cue.js": () => import("./prism-cue.tAzEZXyJ.js"), "../../../node_modules/prismjs/components/prism-cue.min.js": () => import("./prism-cue.min.1K8Cuxjd.js"), "../../../node_modules/prismjs/components/prism-cypher.js": () => import("./prism-cypher.Ri2DQUnp.js"), "../../../node_modules/prismjs/components/prism-cypher.min.js": () => import("./prism-cypher.min.3jfBsO7x.js"), "../../../node_modules/prismjs/components/prism-d.js": () => import("./prism-d.wCixRbVI.js"), "../../../node_modules/prismjs/components/prism-d.min.js": () => import("./prism-d.min.eS5PJjNp.js"), "../../../node_modules/prismjs/components/prism-dart.js": () => import("./prism-dart.luF4l33s.js"), "../../../node_modules/prismjs/components/prism-dart.min.js": () => import("./prism-dart.min.NfUrA8Ox.js"), "../../../node_modules/prismjs/components/prism-dataweave.js": () => import("./prism-dataweave.cJSlA05e.js"), "../../../node_modules/prismjs/components/prism-dataweave.min.js": () => import("./prism-dataweave.min.F9RznKYf.js"), "../../../node_modules/prismjs/components/prism-dax.js": () => import("./prism-dax.qVOqYgjK.js"), "../../../node_modules/prismjs/components/prism-dax.min.js": () => import("./prism-dax.min.DP7pl0Gw.js"), "../../../node_modules/prismjs/components/prism-dhall.js": () => import("./prism-dhall.RlUGwY_u.js"), "../../../node_modules/prismjs/components/prism-dhall.min.js": () => import("./prism-dhall.min.0ri6-uUQ.js"), "../../../node_modules/prismjs/components/prism-diff.js": () => import("./prism-diff.FQwd_1MQ.js"), "../../../node_modules/prismjs/components/prism-diff.min.js": () => import("./prism-diff.min.GeAe4_Cy.js"), "../../../node_modules/prismjs/components/prism-django.js": () => import("./prism-django.exgyCA8p.js"), "../../../node_modules/prismjs/components/prism-django.min.js": () => import("./prism-django.min.ul101W_P.js"), "../../../node_modules/prismjs/components/prism-dns-zone-file.js": () => import("./prism-dns-zone-file.10DccuQW.js"), "../../../node_modules/prismjs/components/prism-dns-zone-file.min.js": () => import("./prism-dns-zone-file.min.F7d3jmSv.js"), "../../../node_modules/prismjs/components/prism-docker.js": () => import("./prism-docker.C7_pR_-e.js"), "../../../node_modules/prismjs/components/prism-docker.min.js": () => import("./prism-docker.min.8pzECyO2.js"), "../../../node_modules/prismjs/components/prism-dot.js": () => import("./prism-dot.UCTNiJLs.js"), "../../../node_modules/prismjs/components/prism-dot.min.js": () => import("./prism-dot.min.8FjqT27t.js"), "../../../node_modules/prismjs/components/prism-ebnf.js": () => import("./prism-ebnf.7geVXXNB.js"), "../../../node_modules/prismjs/components/prism-ebnf.min.js": () => import("./prism-ebnf.min.aHz4LMhx.js"), "../../../node_modules/prismjs/components/prism-editorconfig.js": () => import("./prism-editorconfig.i-phHFRs.js"), "../../../node_modules/prismjs/components/prism-editorconfig.min.js": () => import("./prism-editorconfig.min.Qyf_mP_O.js"), "../../../node_modules/prismjs/components/prism-eiffel.js": () => import("./prism-eiffel.taat3ZgU.js"), "../../../node_modules/prismjs/components/prism-eiffel.min.js": () => import("./prism-eiffel.min.urtqucg8.js"), "../../../node_modules/prismjs/components/prism-ejs.js": () => import("./prism-ejs.JgUdLLWp.js"), "../../../node_modules/prismjs/components/prism-ejs.min.js": () => import("./prism-ejs.min.fDRRC342.js"), "../../../node_modules/prismjs/components/prism-elixir.js": () => import("./prism-elixir.goRxaxFM.js"), "../../../node_modules/prismjs/components/prism-elixir.min.js": () => import("./prism-elixir.min.pVSne9WU.js"), "../../../node_modules/prismjs/components/prism-elm.js": () => import("./prism-elm.d3hDHbwR.js"), "../../../node_modules/prismjs/components/prism-elm.min.js": () => import("./prism-elm.min.7atRkmwI.js"), "../../../node_modules/prismjs/components/prism-erb.js": () => import("./prism-erb.rCHOsvDU.js"), "../../../node_modules/prismjs/components/prism-erb.min.js": () => import("./prism-erb.min.RtVXXLTF.js"), "../../../node_modules/prismjs/components/prism-erlang.js": () => import("./prism-erlang.vMUSKybf.js"), "../../../node_modules/prismjs/components/prism-erlang.min.js": () => import("./prism-erlang.min.gQRjgxHW.js"), "../../../node_modules/prismjs/components/prism-etlua.js": () => import("./prism-etlua.xyNN9AXB.js"), "../../../node_modules/prismjs/components/prism-etlua.min.js": () => import("./prism-etlua.min.j6lxJXGt.js"), "../../../node_modules/prismjs/components/prism-excel-formula.js": () => import("./prism-excel-formula.wsLXT0DI.js"), "../../../node_modules/prismjs/components/prism-excel-formula.min.js": () => import("./prism-excel-formula.min.Cam1heM9.js"), "../../../node_modules/prismjs/components/prism-factor.js": () => import("./prism-factor.Dv-Un3FD.js"), "../../../node_modules/prismjs/components/prism-factor.min.js": () => import("./prism-factor.min.L3pubFBz.js"), "../../../node_modules/prismjs/components/prism-false.js": () => import("./prism-false.gIGGA2zt.js"), "../../../node_modules/prismjs/components/prism-false.min.js": () => import("./prism-false.min.UUkaLsoy.js"), "../../../node_modules/prismjs/components/prism-firestore-security-rules.js": () => import("./prism-firestore-security-rules.p8ibB-te.js"), "../../../node_modules/prismjs/components/prism-firestore-security-rules.min.js": () => import("./prism-firestore-security-rules.min.6jQiHPN1.js"), "../../../node_modules/prismjs/components/prism-flow.js": () => import("./prism-flow.SOvcGBT_.js"), "../../../node_modules/prismjs/components/prism-flow.min.js": () => import("./prism-flow.min.PY0m9Y3u.js"), "../../../node_modules/prismjs/components/prism-fortran.js": () => import("./prism-fortran.TW5ME2pU.js"), "../../../node_modules/prismjs/components/prism-fortran.min.js": () => import("./prism-fortran.min.wR_TABwc.js"), "../../../node_modules/prismjs/components/prism-fsharp.js": () => import("./prism-fsharp.llYK_pfj.js"), "../../../node_modules/prismjs/components/prism-fsharp.min.js": () => import("./prism-fsharp.min.CrTgbtLm.js"), "../../../node_modules/prismjs/components/prism-ftl.js": () => import("./prism-ftl.2w-ufW15.js"), "../../../node_modules/prismjs/components/prism-ftl.min.js": () => import("./prism-ftl.min.t0HNKrsq.js"), "../../../node_modules/prismjs/components/prism-gap.js": () => import("./prism-gap.4jFn_o_j.js"), "../../../node_modules/prismjs/components/prism-gap.min.js": () => import("./prism-gap.min.JSkE5-wB.js"), "../../../node_modules/prismjs/components/prism-gcode.js": () => import("./prism-gcode.TuP9FqID.js"), "../../../node_modules/prismjs/components/prism-gcode.min.js": () => import("./prism-gcode.min.3rKaYdQb.js"), "../../../node_modules/prismjs/components/prism-gdscript.js": () => import("./prism-gdscript.WXAo_Gai.js"), "../../../node_modules/prismjs/components/prism-gdscript.min.js": () => import("./prism-gdscript.min.x8fmXmns.js"), "../../../node_modules/prismjs/components/prism-gedcom.js": () => import("./prism-gedcom.80I6fLbI.js"), "../../../node_modules/prismjs/components/prism-gedcom.min.js": () => import("./prism-gedcom.min.3th3YsN_.js"), "../../../node_modules/prismjs/components/prism-gettext.js": () => import("./prism-gettext.qYT19HFM.js"), "../../../node_modules/prismjs/components/prism-gettext.min.js": () => import("./prism-gettext.min.WAqN97nH.js"), "../../../node_modules/prismjs/components/prism-gherkin.js": () => import("./prism-gherkin.FLFB_Kr8.js"), "../../../node_modules/prismjs/components/prism-gherkin.min.js": () => import("./prism-gherkin.min.j0WCPrnQ.js"), "../../../node_modules/prismjs/components/prism-git.js": () => import("./prism-git.NujODtrd.js"), "../../../node_modules/prismjs/components/prism-git.min.js": () => import("./prism-git.min.XVC4pUBz.js"), "../../../node_modules/prismjs/components/prism-glsl.js": () => import("./prism-glsl.L7KUB7yh.js"), "../../../node_modules/prismjs/components/prism-glsl.min.js": () => import("./prism-glsl.min.odZRy2g2.js"), "../../../node_modules/prismjs/components/prism-gml.js": () => import("./prism-gml.9RdEOm7h.js"), "../../../node_modules/prismjs/components/prism-gml.min.js": () => import("./prism-gml.min.KxSyQxxs.js"), "../../../node_modules/prismjs/components/prism-gn.js": () => import("./prism-gn.KsNiF3YI.js"), "../../../node_modules/prismjs/components/prism-gn.min.js": () => import("./prism-gn.min.p7Vnw_N5.js"), "../../../node_modules/prismjs/components/prism-go-module.js": () => import("./prism-go-module.MZ67beiM.js"), "../../../node_modules/prismjs/components/prism-go-module.min.js": () => import("./prism-go-module.min.JadUQ8kr.js"), "../../../node_modules/prismjs/components/prism-go.js": () => import("./prism-go.lQwxsn6u.js"), "../../../node_modules/prismjs/components/prism-go.min.js": () => import("./prism-go.min.uppVtd_Y.js"), "../../../node_modules/prismjs/components/prism-gradle.js": () => import("./prism-gradle.Rc8h-c5N.js"), "../../../node_modules/prismjs/components/prism-gradle.min.js": () => import("./prism-gradle.min.-J62UiLt.js"), "../../../node_modules/prismjs/components/prism-graphql.js": () => import("./prism-graphql.QYSd5A6e.js"), "../../../node_modules/prismjs/components/prism-graphql.min.js": () => import("./prism-graphql.min.p8XN7ZJo.js"), "../../../node_modules/prismjs/components/prism-groovy.js": () => import("./prism-groovy.LFWUViNn.js"), "../../../node_modules/prismjs/components/prism-groovy.min.js": () => import("./prism-groovy.min.wYiY15a9.js"), "../../../node_modules/prismjs/components/prism-haml.js": () => import("./prism-haml.FyK_Fplq.js"), "../../../node_modules/prismjs/components/prism-haml.min.js": () => import("./prism-haml.min.s_k7DI0N.js"), "../../../node_modules/prismjs/components/prism-handlebars.js": () => import("./prism-handlebars.YycqJ_Xw.js"), "../../../node_modules/prismjs/components/prism-handlebars.min.js": () => import("./prism-handlebars.min.-mwM4n64.js"), "../../../node_modules/prismjs/components/prism-haskell.js": () => import("./prism-haskell.NXcLXj0c.js"), "../../../node_modules/prismjs/components/prism-haskell.min.js": () => import("./prism-haskell.min.tlEDLbVw.js"), "../../../node_modules/prismjs/components/prism-haxe.js": () => import("./prism-haxe.oIEk1N7a.js"), "../../../node_modules/prismjs/components/prism-haxe.min.js": () => import("./prism-haxe.min.PyVCrn-U.js"), "../../../node_modules/prismjs/components/prism-hcl.js": () => import("./prism-hcl.n7Z2rIzD.js"), "../../../node_modules/prismjs/components/prism-hcl.min.js": () => import("./prism-hcl.min.Eaw9LiaO.js"), "../../../node_modules/prismjs/components/prism-hlsl.js": () => import("./prism-hlsl.CHX2yTD6.js"), "../../../node_modules/prismjs/components/prism-hlsl.min.js": () => import("./prism-hlsl.min.tmAFVVtI.js"), "../../../node_modules/prismjs/components/prism-hoon.js": () => import("./prism-hoon.nT0GTdTm.js"), "../../../node_modules/prismjs/components/prism-hoon.min.js": () => import("./prism-hoon.min.o2DInwbs.js"), "../../../node_modules/prismjs/components/prism-hpkp.js": () => import("./prism-hpkp.z-8f4cYp.js"), "../../../node_modules/prismjs/components/prism-hpkp.min.js": () => import("./prism-hpkp.min.sLb2CoE4.js"), "../../../node_modules/prismjs/components/prism-hsts.js": () => import("./prism-hsts.odnE2wbs.js"), "../../../node_modules/prismjs/components/prism-hsts.min.js": () => import("./prism-hsts.min.D5VZ5ea1.js"), "../../../node_modules/prismjs/components/prism-http.js": () => import("./prism-http.uaAg2d5o.js"), "../../../node_modules/prismjs/components/prism-http.min.js": () => import("./prism-http.min.yMXrS1l9.js"), "../../../node_modules/prismjs/components/prism-ichigojam.js": () => import("./prism-ichigojam.00v6XG5H.js"), "../../../node_modules/prismjs/components/prism-ichigojam.min.js": () => import("./prism-ichigojam.min.-T5iDpnJ.js"), "../../../node_modules/prismjs/components/prism-icon.js": () => import("./prism-icon.SCmslVQS.js"), "../../../node_modules/prismjs/components/prism-icon.min.js": () => import("./prism-icon.min.rvx1Qad2.js"), "../../../node_modules/prismjs/components/prism-icu-message-format.js": () => import("./prism-icu-message-format.LFk6Mh_y.js"), "../../../node_modules/prismjs/components/prism-icu-message-format.min.js": () => import("./prism-icu-message-format.min.fwrASPDt.js"), "../../../node_modules/prismjs/components/prism-idris.js": () => import("./prism-idris.wZkV5ia_.js"), "../../../node_modules/prismjs/components/prism-idris.min.js": () => import("./prism-idris.min.d9IIQdvA.js"), "../../../node_modules/prismjs/components/prism-iecst.js": () => import("./prism-iecst.cKaI3MML.js"), "../../../node_modules/prismjs/components/prism-iecst.min.js": () => import("./prism-iecst.min.xIvWLRLm.js"), "../../../node_modules/prismjs/components/prism-ignore.js": () => import("./prism-ignore.PmXITrc_.js"), "../../../node_modules/prismjs/components/prism-ignore.min.js": () => import("./prism-ignore.min.Cz0gDnCd.js"), "../../../node_modules/prismjs/components/prism-inform7.js": () => import("./prism-inform7.PHL57Tuz.js"), "../../../node_modules/prismjs/components/prism-inform7.min.js": () => import("./prism-inform7.min.vy9pETVU.js"), "../../../node_modules/prismjs/components/prism-ini.js": () => import("./prism-ini.Zxo9MOCb.js"), "../../../node_modules/prismjs/components/prism-ini.min.js": () => import("./prism-ini.min.ggHIbpMO.js"), "../../../node_modules/prismjs/components/prism-io.js": () => import("./prism-io.YA2xrsX4.js"), "../../../node_modules/prismjs/components/prism-io.min.js": () => import("./prism-io.min.kgb6Ndbh.js"), "../../../node_modules/prismjs/components/prism-j.js": () => import("./prism-j.mGu7hEZG.js"), "../../../node_modules/prismjs/components/prism-j.min.js": () => import("./prism-j.min.EzT7Mrtc.js"), "../../../node_modules/prismjs/components/prism-java.js": () => import("./prism-java.QpZWr4vT.js"), "../../../node_modules/prismjs/components/prism-java.min.js": () => import("./prism-java.min.KCegcaWd.js"), "../../../node_modules/prismjs/components/prism-javadoc.js": () => import("./prism-javadoc.tHaLSN1r.js"), "../../../node_modules/prismjs/components/prism-javadoc.min.js": () => import("./prism-javadoc.min.uK10aoZo.js"), "../../../node_modules/prismjs/components/prism-javadoclike.js": () => import("./prism-javadoclike.LMd2CPoY.js"), "../../../node_modules/prismjs/components/prism-javadoclike.min.js": () => import("./prism-javadoclike.min.aQPWQz4U.js"), "../../../node_modules/prismjs/components/prism-javascript.js": () => import("./prism-javascript.vnHdQadt.js"), "../../../node_modules/prismjs/components/prism-javascript.min.js": () => import("./prism-javascript.min.hvuJDaiR.js"), "../../../node_modules/prismjs/components/prism-javastacktrace.js": () => import("./prism-javastacktrace.KwRzLeuk.js"), "../../../node_modules/prismjs/components/prism-javastacktrace.min.js": () => import("./prism-javastacktrace.min.GOYUI60A.js"), "../../../node_modules/prismjs/components/prism-jexl.js": () => import("./prism-jexl.pdafTDkC.js"), "../../../node_modules/prismjs/components/prism-jexl.min.js": () => import("./prism-jexl.min.jxzWv0lS.js"), "../../../node_modules/prismjs/components/prism-jolie.js": () => import("./prism-jolie.LVcdiB9E.js"), "../../../node_modules/prismjs/components/prism-jolie.min.js": () => import("./prism-jolie.min.dohR5CMo.js"), "../../../node_modules/prismjs/components/prism-jq.js": () => import("./prism-jq.Enedna0w.js"), "../../../node_modules/prismjs/components/prism-jq.min.js": () => import("./prism-jq.min.EXJzRhH-.js"), "../../../node_modules/prismjs/components/prism-js-extras.js": () => import("./prism-js-extras.O4xkMQEp.js"), "../../../node_modules/prismjs/components/prism-js-extras.min.js": () => import("./prism-js-extras.min.G8zqLqJM.js"), "../../../node_modules/prismjs/components/prism-js-templates.js": () => import("./prism-js-templates.TFNFcx0O.js"), "../../../node_modules/prismjs/components/prism-js-templates.min.js": () => import("./prism-js-templates.min.0mIqb8C2.js"), "../../../node_modules/prismjs/components/prism-jsdoc.js": () => import("./prism-jsdoc.15olhUUU.js"), "../../../node_modules/prismjs/components/prism-jsdoc.min.js": () => import("./prism-jsdoc.min.LJHP7QPr.js"), "../../../node_modules/prismjs/components/prism-json.js": () => import("./prism-json.Vaa5f2NF.js"), "../../../node_modules/prismjs/components/prism-json.min.js": () => import("./prism-json.min.1zfY9gEI.js"), "../../../node_modules/prismjs/components/prism-json5.js": () => import("./prism-json5.KsXNnV6b.js"), "../../../node_modules/prismjs/components/prism-json5.min.js": () => import("./prism-json5.min.j7_ZCNaA.js"), "../../../node_modules/prismjs/components/prism-jsonp.js": () => import("./prism-jsonp.Ioj8Y8nl.js"), "../../../node_modules/prismjs/components/prism-jsonp.min.js": () => import("./prism-jsonp.min.DjkmE4DB.js"), "../../../node_modules/prismjs/components/prism-jsstacktrace.js": () => import("./prism-jsstacktrace.RrFPZpfG.js"), "../../../node_modules/prismjs/components/prism-jsstacktrace.min.js": () => import("./prism-jsstacktrace.min.EGtjDRSA.js"), "../../../node_modules/prismjs/components/prism-jsx.js": () => import("./prism-jsx.d-LniFse.js"), "../../../node_modules/prismjs/components/prism-jsx.min.js": () => import("./prism-jsx.min.3fBZdqm4.js"), "../../../node_modules/prismjs/components/prism-julia.js": () => import("./prism-julia.TCcmK2IM.js"), "../../../node_modules/prismjs/components/prism-julia.min.js": () => import("./prism-julia.min.pYoceTrz.js"), "../../../node_modules/prismjs/components/prism-keepalived.js": () => import("./prism-keepalived.TRicK-7H.js"), "../../../node_modules/prismjs/components/prism-keepalived.min.js": () => import("./prism-keepalived.min.JtWs6ZoA.js"), "../../../node_modules/prismjs/components/prism-keyman.js": () => import("./prism-keyman.JCxNjiff.js"), "../../../node_modules/prismjs/components/prism-keyman.min.js": () => import("./prism-keyman.min.HpZt4P6Y.js"), "../../../node_modules/prismjs/components/prism-kotlin.js": () => import("./prism-kotlin.dYRHiget.js"), "../../../node_modules/prismjs/components/prism-kotlin.min.js": () => import("./prism-kotlin.min.Jgsp516-.js"), "../../../node_modules/prismjs/components/prism-kumir.js": () => import("./prism-kumir.MCB5YtyV.js"), "../../../node_modules/prismjs/components/prism-kumir.min.js": () => import("./prism-kumir.min.1hP3nvdQ.js"), "../../../node_modules/prismjs/components/prism-kusto.js": () => import("./prism-kusto.6JVVR1m0.js"), "../../../node_modules/prismjs/components/prism-kusto.min.js": () => import("./prism-kusto.min.M8nwzffR.js"), "../../../node_modules/prismjs/components/prism-latex.js": () => import("./prism-latex.ZekJffZz.js"), "../../../node_modules/prismjs/components/prism-latex.min.js": () => import("./prism-latex.min.9z1at4zy.js"), "../../../node_modules/prismjs/components/prism-latte.js": () => import("./prism-latte.a7nW08tx.js"), "../../../node_modules/prismjs/components/prism-latte.min.js": () => import("./prism-latte.min.RsDsynng.js"), "../../../node_modules/prismjs/components/prism-less.js": () => import("./prism-less.z7BYHuyF.js"), "../../../node_modules/prismjs/components/prism-less.min.js": () => import("./prism-less.min.AkoAGRSW.js"), "../../../node_modules/prismjs/components/prism-lilypond.js": () => import("./prism-lilypond.yuzjYO1-.js"), "../../../node_modules/prismjs/components/prism-lilypond.min.js": () => import("./prism-lilypond.min.8t-LYQJz.js"), "../../../node_modules/prismjs/components/prism-linker-script.js": () => import("./prism-linker-script.G55WUiqn.js"), "../../../node_modules/prismjs/components/prism-linker-script.min.js": () => import("./prism-linker-script.min.Z6iIDuNe.js"), "../../../node_modules/prismjs/components/prism-liquid.js": () => import("./prism-liquid.mL_h3RXl.js"), "../../../node_modules/prismjs/components/prism-liquid.min.js": () => import("./prism-liquid.min.HZpSbm8o.js"), "../../../node_modules/prismjs/components/prism-lisp.js": () => import("./prism-lisp.y7YdgX64.js"), "../../../node_modules/prismjs/components/prism-lisp.min.js": () => import("./prism-lisp.min.WTWuyRr8.js"), "../../../node_modules/prismjs/components/prism-livescript.js": () => import("./prism-livescript.92qoSZec.js"), "../../../node_modules/prismjs/components/prism-livescript.min.js": () => import("./prism-livescript.min.zqRoVCZm.js"), "../../../node_modules/prismjs/components/prism-llvm.js": () => import("./prism-llvm.eKDTzI0L.js"), "../../../node_modules/prismjs/components/prism-llvm.min.js": () => import("./prism-llvm.min.D4h7noEO.js"), "../../../node_modules/prismjs/components/prism-log.js": () => import("./prism-log.z6qnoN5X.js"), "../../../node_modules/prismjs/components/prism-log.min.js": () => import("./prism-log.min.c8dXT1vB.js"), "../../../node_modules/prismjs/components/prism-lolcode.js": () => import("./prism-lolcode.dzP3Soyk.js"), "../../../node_modules/prismjs/components/prism-lolcode.min.js": () => import("./prism-lolcode.min.mRGx4Fax.js"), "../../../node_modules/prismjs/components/prism-lua.js": () => import("./prism-lua.0tVkC72c.js"), "../../../node_modules/prismjs/components/prism-lua.min.js": () => import("./prism-lua.min.GpAHgnCN.js"), "../../../node_modules/prismjs/components/prism-magma.js": () => import("./prism-magma.w1du9BmT.js"), "../../../node_modules/prismjs/components/prism-magma.min.js": () => import("./prism-magma.min.O-Ljcb3v.js"), "../../../node_modules/prismjs/components/prism-makefile.js": () => import("./prism-makefile.ipVsMRy2.js"), "../../../node_modules/prismjs/components/prism-makefile.min.js": () => import("./prism-makefile.min.XKfdqVzq.js"), "../../../node_modules/prismjs/components/prism-markdown.js": () => import("./prism-markdown.TJHwhV3C.js"), "../../../node_modules/prismjs/components/prism-markdown.min.js": () => import("./prism-markdown.min.hV2SE6LK.js"), "../../../node_modules/prismjs/components/prism-markup-templating.js": () => import("./prism-markup-templating.YxynTk49.js"), "../../../node_modules/prismjs/components/prism-markup-templating.min.js": () => import("./prism-markup-templating.min.u6Zyohy4.js"), "../../../node_modules/prismjs/components/prism-markup.js": () => import("./prism-markup.DPsxSC8G.js"), "../../../node_modules/prismjs/components/prism-markup.min.js": () => import("./prism-markup.min.nhQEcIuZ.js"), "../../../node_modules/prismjs/components/prism-mata.js": () => import("./prism-mata.gaSeDcrK.js"), "../../../node_modules/prismjs/components/prism-mata.min.js": () => import("./prism-mata.min.cWt-YgDo.js"), "../../../node_modules/prismjs/components/prism-matlab.js": () => import("./prism-matlab.kIvXRHy_.js"), "../../../node_modules/prismjs/components/prism-matlab.min.js": () => import("./prism-matlab.min.rTulTK6s.js"), "../../../node_modules/prismjs/components/prism-maxscript.js": () => import("./prism-maxscript.bK_ml2Q-.js"), "../../../node_modules/prismjs/components/prism-maxscript.min.js": () => import("./prism-maxscript.min.v35DVXGb.js"), "../../../node_modules/prismjs/components/prism-mel.js": () => import("./prism-mel.F14e2AOY.js"), "../../../node_modules/prismjs/components/prism-mel.min.js": () => import("./prism-mel.min.djhkWAYP.js"), "../../../node_modules/prismjs/components/prism-mermaid.js": () => import("./prism-mermaid.vcbaxbjp.js"), "../../../node_modules/prismjs/components/prism-mermaid.min.js": () => import("./prism-mermaid.min.gWuJfIcN.js"), "../../../node_modules/prismjs/components/prism-metafont.js": () => import("./prism-metafont.j2io9oEj.js"), "../../../node_modules/prismjs/components/prism-metafont.min.js": () => import("./prism-metafont.min.McB1-vN1.js"), "../../../node_modules/prismjs/components/prism-mizar.js": () => import("./prism-mizar.SGjoYBcw.js"), "../../../node_modules/prismjs/components/prism-mizar.min.js": () => import("./prism-mizar.min.2cSz3NQN.js"), "../../../node_modules/prismjs/components/prism-mongodb.js": () => import("./prism-mongodb.Goi5ZuGc.js"), "../../../node_modules/prismjs/components/prism-mongodb.min.js": () => import("./prism-mongodb.min.GU2E4ddm.js"), "../../../node_modules/prismjs/components/prism-monkey.js": () => import("./prism-monkey.-zvRfkG0.js"), "../../../node_modules/prismjs/components/prism-monkey.min.js": () => import("./prism-monkey.min.NJ20WYza.js"), "../../../node_modules/prismjs/components/prism-moonscript.js": () => import("./prism-moonscript.5zk06ZKL.js"), "../../../node_modules/prismjs/components/prism-moonscript.min.js": () => import("./prism-moonscript.min.kOZ8TXSV.js"), "../../../node_modules/prismjs/components/prism-n1ql.js": () => import("./prism-n1ql._sPDwnjg.js"), "../../../node_modules/prismjs/components/prism-n1ql.min.js": () => import("./prism-n1ql.min.ldVz19te.js"), "../../../node_modules/prismjs/components/prism-n4js.js": () => import("./prism-n4js.WnoQrwxZ.js"), "../../../node_modules/prismjs/components/prism-n4js.min.js": () => import("./prism-n4js.min.dqQsb0sS.js"), "../../../node_modules/prismjs/components/prism-nand2tetris-hdl.js": () => import("./prism-nand2tetris-hdl.YbitkPuW.js"), "../../../node_modules/prismjs/components/prism-nand2tetris-hdl.min.js": () => import("./prism-nand2tetris-hdl.min.wSN7pkA_.js"), "../../../node_modules/prismjs/components/prism-naniscript.js": () => import("./prism-naniscript.Qc1QaMgY.js"), "../../../node_modules/prismjs/components/prism-naniscript.min.js": () => import("./prism-naniscript.min.5mmajxnz.js"), "../../../node_modules/prismjs/components/prism-nasm.js": () => import("./prism-nasm.ZEC6boqY.js"), "../../../node_modules/prismjs/components/prism-nasm.min.js": () => import("./prism-nasm.min.oNjBS01h.js"), "../../../node_modules/prismjs/components/prism-neon.js": () => import("./prism-neon.CSUP7Bf7.js"), "../../../node_modules/prismjs/components/prism-neon.min.js": () => import("./prism-neon.min.NAe90FzV.js"), "../../../node_modules/prismjs/components/prism-nevod.js": () => import("./prism-nevod.VIPZNdAF.js"), "../../../node_modules/prismjs/components/prism-nevod.min.js": () => import("./prism-nevod.min.2xfzKKho.js"), "../../../node_modules/prismjs/components/prism-nginx.js": () => import("./prism-nginx.u2DUKBxi.js"), "../../../node_modules/prismjs/components/prism-nginx.min.js": () => import("./prism-nginx.min.EPajEPFf.js"), "../../../node_modules/prismjs/components/prism-nim.js": () => import("./prism-nim.vcR_-KTk.js"), "../../../node_modules/prismjs/components/prism-nim.min.js": () => import("./prism-nim.min.DHjglkPB.js"), "../../../node_modules/prismjs/components/prism-nix.js": () => import("./prism-nix.4df7xHXo.js"), "../../../node_modules/prismjs/components/prism-nix.min.js": () => import("./prism-nix.min._FZ82AQ3.js"), "../../../node_modules/prismjs/components/prism-nsis.js": () => import("./prism-nsis.XnVpg_Ie.js"), "../../../node_modules/prismjs/components/prism-nsis.min.js": () => import("./prism-nsis.min.pwECsqze.js"), "../../../node_modules/prismjs/components/prism-objectivec.js": () => import("./prism-objectivec.FZwn5E4a.js"), "../../../node_modules/prismjs/components/prism-objectivec.min.js": () => import("./prism-objectivec.min.zjSENxth.js"), "../../../node_modules/prismjs/components/prism-ocaml.js": () => import("./prism-ocaml.ALiazuvz.js"), "../../../node_modules/prismjs/components/prism-ocaml.min.js": () => import("./prism-ocaml.min.M-4r61Gy.js"), "../../../node_modules/prismjs/components/prism-odin.js": () => import("./prism-odin.JB3_cDxn.js"), "../../../node_modules/prismjs/components/prism-odin.min.js": () => import("./prism-odin.min.KaXU32Ql.js"), "../../../node_modules/prismjs/components/prism-opencl.js": () => import("./prism-opencl.LcNSSxyJ.js"), "../../../node_modules/prismjs/components/prism-opencl.min.js": () => import("./prism-opencl.min.YTpyd_6P.js"), "../../../node_modules/prismjs/components/prism-openqasm.js": () => import("./prism-openqasm.BvtFuFXj.js"), "../../../node_modules/prismjs/components/prism-openqasm.min.js": () => import("./prism-openqasm.min.EFcUnQYF.js"), "../../../node_modules/prismjs/components/prism-oz.js": () => import("./prism-oz.T4RhgHz0.js"), "../../../node_modules/prismjs/components/prism-oz.min.js": () => import("./prism-oz.min.gVU760oi.js"), "../../../node_modules/prismjs/components/prism-parigp.js": () => import("./prism-parigp.PHTh1jEg.js"), "../../../node_modules/prismjs/components/prism-parigp.min.js": () => import("./prism-parigp.min.6T8QP8MR.js"), "../../../node_modules/prismjs/components/prism-parser.js": () => import("./prism-parser.9T2_6OEu.js"), "../../../node_modules/prismjs/components/prism-parser.min.js": () => import("./prism-parser.min.MN_7Xxo0.js"), "../../../node_modules/prismjs/components/prism-pascal.js": () => import("./prism-pascal.ptt6Bmwt.js"), "../../../node_modules/prismjs/components/prism-pascal.min.js": () => import("./prism-pascal.min.JEF_6nc5.js"), "../../../node_modules/prismjs/components/prism-pascaligo.js": () => import("./prism-pascaligo.zKgk9Ted.js"), "../../../node_modules/prismjs/components/prism-pascaligo.min.js": () => import("./prism-pascaligo.min.oBUHXTOx.js"), "../../../node_modules/prismjs/components/prism-pcaxis.js": () => import("./prism-pcaxis.ahhUPB5f.js"), "../../../node_modules/prismjs/components/prism-pcaxis.min.js": () => import("./prism-pcaxis.min.rgp6Y93o.js"), "../../../node_modules/prismjs/components/prism-peoplecode.js": () => import("./prism-peoplecode.heJE98Ob.js"), "../../../node_modules/prismjs/components/prism-peoplecode.min.js": () => import("./prism-peoplecode.min.AZX-8nbY.js"), "../../../node_modules/prismjs/components/prism-perl.js": () => import("./prism-perl.PZtd5_Xe.js"), "../../../node_modules/prismjs/components/prism-perl.min.js": () => import("./prism-perl.min.1-avE_J8.js"), "../../../node_modules/prismjs/components/prism-php-extras.js": () => import("./prism-php-extras.Xq_syA_N.js"), "../../../node_modules/prismjs/components/prism-php-extras.min.js": () => import("./prism-php-extras.min.N7Ic09YE.js"), "../../../node_modules/prismjs/components/prism-php.js": () => import("./prism-php.0F9gayLU.js"), "../../../node_modules/prismjs/components/prism-php.min.js": () => import("./prism-php.min.pWl9Xhl6.js"), "../../../node_modules/prismjs/components/prism-phpdoc.js": () => import("./prism-phpdoc.AV39Z012.js"), "../../../node_modules/prismjs/components/prism-phpdoc.min.js": () => import("./prism-phpdoc.min.4mG-tco6.js"), "../../../node_modules/prismjs/components/prism-plant-uml.js": () => import("./prism-plant-uml.x15lm_sz.js"), "../../../node_modules/prismjs/components/prism-plant-uml.min.js": () => import("./prism-plant-uml.min.AiUIvHf9.js"), "../../../node_modules/prismjs/components/prism-plsql.js": () => import("./prism-plsql.7uzJrIia.js"), "../../../node_modules/prismjs/components/prism-plsql.min.js": () => import("./prism-plsql.min.W14eIk3P.js"), "../../../node_modules/prismjs/components/prism-powerquery.js": () => import("./prism-powerquery.SCHQCpT-.js"), "../../../node_modules/prismjs/components/prism-powerquery.min.js": () => import("./prism-powerquery.min.JOe6s-88.js"), "../../../node_modules/prismjs/components/prism-powershell.js": () => import("./prism-powershell.bMschMG0.js"), "../../../node_modules/prismjs/components/prism-powershell.min.js": () => import("./prism-powershell.min.q8pUSPKi.js"), "../../../node_modules/prismjs/components/prism-processing.js": () => import("./prism-processing.pBrKDu0U.js"), "../../../node_modules/prismjs/components/prism-processing.min.js": () => import("./prism-processing.min.rruVdVbb.js"), "../../../node_modules/prismjs/components/prism-prolog.js": () => import("./prism-prolog.irQDq6f0.js"), "../../../node_modules/prismjs/components/prism-prolog.min.js": () => import("./prism-prolog.min.u6aYPAK4.js"), "../../../node_modules/prismjs/components/prism-promql.js": () => import("./prism-promql.NxbSygwv.js"), "../../../node_modules/prismjs/components/prism-promql.min.js": () => import("./prism-promql.min.NR1P3sD6.js"), "../../../node_modules/prismjs/components/prism-properties.js": () => import("./prism-properties.vdFMycaK.js"), "../../../node_modules/prismjs/components/prism-properties.min.js": () => import("./prism-properties.min.vsPODz9a.js"), "../../../node_modules/prismjs/components/prism-protobuf.js": () => import("./prism-protobuf.38w9WveN.js"), "../../../node_modules/prismjs/components/prism-protobuf.min.js": () => import("./prism-protobuf.min.lHztEdl0.js"), "../../../node_modules/prismjs/components/prism-psl.js": () => import("./prism-psl.asPpWbZM.js"), "../../../node_modules/prismjs/components/prism-psl.min.js": () => import("./prism-psl.min.vA0HTRom.js"), "../../../node_modules/prismjs/components/prism-pug.js": () => import("./prism-pug.xePDSh59.js"), "../../../node_modules/prismjs/components/prism-pug.min.js": () => import("./prism-pug.min.w35AP4SC.js"), "../../../node_modules/prismjs/components/prism-puppet.js": () => import("./prism-puppet.MXTZGE8k.js"), "../../../node_modules/prismjs/components/prism-puppet.min.js": () => import("./prism-puppet.min.YTEzo10r.js"), "../../../node_modules/prismjs/components/prism-pure.js": () => import("./prism-pure.sCSGAwy7.js"), "../../../node_modules/prismjs/components/prism-pure.min.js": () => import("./prism-pure.min.MBqmgM-E.js"), "../../../node_modules/prismjs/components/prism-purebasic.js": () => import("./prism-purebasic.gBDTZFIU.js"), "../../../node_modules/prismjs/components/prism-purebasic.min.js": () => import("./prism-purebasic.min.3eO0zlzZ.js"), "../../../node_modules/prismjs/components/prism-purescript.js": () => import("./prism-purescript.5iL6XUcl.js"), "../../../node_modules/prismjs/components/prism-purescript.min.js": () => import("./prism-purescript.min.upWFZNw4.js"), "../../../node_modules/prismjs/components/prism-python.js": () => import("./prism-python.1z0DTnwk.js"), "../../../node_modules/prismjs/components/prism-python.min.js": () => import("./prism-python.min.5aoERcK6.js"), "../../../node_modules/prismjs/components/prism-q.js": () => import("./prism-q.ciOWmQP2.js"), "../../../node_modules/prismjs/components/prism-q.min.js": () => import("./prism-q.min.5B7-od6S.js"), "../../../node_modules/prismjs/components/prism-qml.js": () => import("./prism-qml.hCgF8JDl.js"), "../../../node_modules/prismjs/components/prism-qml.min.js": () => import("./prism-qml.min.4V_GBDu7.js"), "../../../node_modules/prismjs/components/prism-qore.js": () => import("./prism-qore.5OfsjJkF.js"), "../../../node_modules/prismjs/components/prism-qore.min.js": () => import("./prism-qore.min.Quh0d1YC.js"), "../../../node_modules/prismjs/components/prism-qsharp.js": () => import("./prism-qsharp.uJl4Fsqu.js"), "../../../node_modules/prismjs/components/prism-qsharp.min.js": () => import("./prism-qsharp.min.Cmu5PHa2.js"), "../../../node_modules/prismjs/components/prism-r.js": () => import("./prism-r.DNsVfqyW.js"), "../../../node_modules/prismjs/components/prism-r.min.js": () => import("./prism-r.min.BMSCWjH7.js"), "../../../node_modules/prismjs/components/prism-racket.js": () => import("./prism-racket.7SfjMVfJ.js"), "../../../node_modules/prismjs/components/prism-racket.min.js": () => import("./prism-racket.min.EKuV6P1C.js"), "../../../node_modules/prismjs/components/prism-reason.js": () => import("./prism-reason.sXBK01x3.js"), "../../../node_modules/prismjs/components/prism-reason.min.js": () => import("./prism-reason.min.opDGrd1D.js"), "../../../node_modules/prismjs/components/prism-regex.js": () => import("./prism-regex.NT3tdRyW.js"), "../../../node_modules/prismjs/components/prism-regex.min.js": () => import("./prism-regex.min.Ej1kQav2.js"), "../../../node_modules/prismjs/components/prism-rego.js": () => import("./prism-rego.RJrmpOnA.js"), "../../../node_modules/prismjs/components/prism-rego.min.js": () => import("./prism-rego.min.0SHiIYcG.js"), "../../../node_modules/prismjs/components/prism-renpy.js": () => import("./prism-renpy.T_aCGcFM.js"), "../../../node_modules/prismjs/components/prism-renpy.min.js": () => import("./prism-renpy.min.KII5mEcv.js"), "../../../node_modules/prismjs/components/prism-rescript.js": () => import("./prism-rescript.6-7RaBYg.js"), "../../../node_modules/prismjs/components/prism-rescript.min.js": () => import("./prism-rescript.min.mz3lSewm.js"), "../../../node_modules/prismjs/components/prism-rest.js": () => import("./prism-rest.uIUn7pQk.js"), "../../../node_modules/prismjs/components/prism-rest.min.js": () => import("./prism-rest.min.kotzRXWB.js"), "../../../node_modules/prismjs/components/prism-rip.js": () => import("./prism-rip.wDnEpTUR.js"), "../../../node_modules/prismjs/components/prism-rip.min.js": () => import("./prism-rip.min.Ki3DYkB7.js"), "../../../node_modules/prismjs/components/prism-roboconf.js": () => import("./prism-roboconf.XJ9Un_hD.js"), "../../../node_modules/prismjs/components/prism-roboconf.min.js": () => import("./prism-roboconf.min.vqSrC7yJ.js"), "../../../node_modules/prismjs/components/prism-robotframework.js": () => import("./prism-robotframework.8TOwu3Sv.js"), "../../../node_modules/prismjs/components/prism-robotframework.min.js": () => import("./prism-robotframework.min.uB94Sl2i.js"), "../../../node_modules/prismjs/components/prism-ruby.js": () => import("./prism-ruby.LvGrCkxW.js"), "../../../node_modules/prismjs/components/prism-ruby.min.js": () => import("./prism-ruby.min.eM4iy86W.js"), "../../../node_modules/prismjs/components/prism-rust.js": () => import("./prism-rust.76QZ2MAF.js"), "../../../node_modules/prismjs/components/prism-rust.min.js": () => import("./prism-rust.min.I56KUKDO.js"), "../../../node_modules/prismjs/components/prism-sas.js": () => import("./prism-sas.6zycMDTe.js"), "../../../node_modules/prismjs/components/prism-sas.min.js": () => import("./prism-sas.min.AjpsG-GV.js"), "../../../node_modules/prismjs/components/prism-sass.js": () => import("./prism-sass.vR-0oiOw.js"), "../../../node_modules/prismjs/components/prism-sass.min.js": () => import("./prism-sass.min.CzJ-IIDp.js"), "../../../node_modules/prismjs/components/prism-scala.js": () => import("./prism-scala.daj5QG-d.js"), "../../../node_modules/prismjs/components/prism-scala.min.js": () => import("./prism-scala.min.mHv_0vny.js"), "../../../node_modules/prismjs/components/prism-scheme.js": () => import("./prism-scheme.97_I5JXu.js"), "../../../node_modules/prismjs/components/prism-scheme.min.js": () => import("./prism-scheme.min.9rOmssjO.js"), "../../../node_modules/prismjs/components/prism-scss.js": () => import("./prism-scss.6COIE9aA.js"), "../../../node_modules/prismjs/components/prism-scss.min.js": () => import("./prism-scss.min.Als0FLXB.js"), "../../../node_modules/prismjs/components/prism-shell-session.js": () => import("./prism-shell-session.MtGm3H1e.js"), "../../../node_modules/prismjs/components/prism-shell-session.min.js": () => import("./prism-shell-session.min.EZPq4rhk.js"), "../../../node_modules/prismjs/components/prism-smali.js": () => import("./prism-smali.OcL03lJB.js"), "../../../node_modules/prismjs/components/prism-smali.min.js": () => import("./prism-smali.min.SU4kTuzZ.js"), "../../../node_modules/prismjs/components/prism-smalltalk.js": () => import("./prism-smalltalk.bnreuLOY.js"), "../../../node_modules/prismjs/components/prism-smalltalk.min.js": () => import("./prism-smalltalk.min.2uG16qdJ.js"), "../../../node_modules/prismjs/components/prism-smarty.js": () => import("./prism-smarty.scq3QUAS.js"), "../../../node_modules/prismjs/components/prism-smarty.min.js": () => import("./prism-smarty.min.zXo4o4bx.js"), "../../../node_modules/prismjs/components/prism-sml.js": () => import("./prism-sml.ImgX8iWz.js"), "../../../node_modules/prismjs/components/prism-sml.min.js": () => import("./prism-sml.min.2X7gIiTx.js"), "../../../node_modules/prismjs/components/prism-solidity.js": () => import("./prism-solidity.vOw8FkmI.js"), "../../../node_modules/prismjs/components/prism-solidity.min.js": () => import("./prism-solidity.min.ITP6lYmC.js"), "../../../node_modules/prismjs/components/prism-solution-file.js": () => import("./prism-solution-file.8dQGtO1k.js"), "../../../node_modules/prismjs/components/prism-solution-file.min.js": () => import("./prism-solution-file.min.Uhjnmwdy.js"), "../../../node_modules/prismjs/components/prism-soy.js": () => import("./prism-soy.UL6XRHhJ.js"), "../../../node_modules/prismjs/components/prism-soy.min.js": () => import("./prism-soy.min.cJs3G0Mu.js"), "../../../node_modules/prismjs/components/prism-sparql.js": () => import("./prism-sparql.6qXMOZ8u.js"), "../../../node_modules/prismjs/components/prism-sparql.min.js": () => import("./prism-sparql.min.TnDRlaMl.js"), "../../../node_modules/prismjs/components/prism-splunk-spl.js": () => import("./prism-splunk-spl.ASk_XgWt.js"), "../../../node_modules/prismjs/components/prism-splunk-spl.min.js": () => import("./prism-splunk-spl.min.p0V16Uc9.js"), "../../../node_modules/prismjs/components/prism-sqf.js": () => import("./prism-sqf.HLXP1b_2.js"), "../../../node_modules/prismjs/components/prism-sqf.min.js": () => import("./prism-sqf.min.cG_eGJ0o.js"), "../../../node_modules/prismjs/components/prism-sql.js": () => import("./prism-sql._r6JVMyt.js"), "../../../node_modules/prismjs/components/prism-sql.min.js": () => import("./prism-sql.min.pOHT8XZf.js"), "../../../node_modules/prismjs/components/prism-squirrel.js": () => import("./prism-squirrel.rHTazx9O.js"), "../../../node_modules/prismjs/components/prism-squirrel.min.js": () => import("./prism-squirrel.min.QVFOVARq.js"), "../../../node_modules/prismjs/components/prism-stan.js": () => import("./prism-stan.Fp76gNJD.js"), "../../../node_modules/prismjs/components/prism-stan.min.js": () => import("./prism-stan.min.ULDf9Odg.js"), "../../../node_modules/prismjs/components/prism-stata.js": () => import("./prism-stata.jHtv_suX.js"), "../../../node_modules/prismjs/components/prism-stata.min.js": () => import("./prism-stata.min.CnYNgyXl.js"), "../../../node_modules/prismjs/components/prism-stylus.js": () => import("./prism-stylus.m9yv10TY.js"), "../../../node_modules/prismjs/components/prism-stylus.min.js": () => import("./prism-stylus.min.YsHl2MPD.js"), "../../../node_modules/prismjs/components/prism-supercollider.js": () => import("./prism-supercollider.YWWoNmDa.js"), "../../../node_modules/prismjs/components/prism-supercollider.min.js": () => import("./prism-supercollider.min.2pozwtKH.js"), "../../../node_modules/prismjs/components/prism-swift.js": () => import("./prism-swift.-ogwD8TX.js"), "../../../node_modules/prismjs/components/prism-swift.min.js": () => import("./prism-swift.min.r9rFLmxu.js"), "../../../node_modules/prismjs/components/prism-systemd.js": () => import("./prism-systemd.Mmq-3CAf.js"), "../../../node_modules/prismjs/components/prism-systemd.min.js": () => import("./prism-systemd.min.0kW-cK5b.js"), "../../../node_modules/prismjs/components/prism-t4-cs.js": () => import("./prism-t4-cs.k6tF1Npb.js"), "../../../node_modules/prismjs/components/prism-t4-cs.min.js": () => import("./prism-t4-cs.min.k6tF1Npb.js"), "../../../node_modules/prismjs/components/prism-t4-templating.js": () => import("./prism-t4-templating.7IWh99hR.js"), "../../../node_modules/prismjs/components/prism-t4-templating.min.js": () => import("./prism-t4-templating.min.4uOhsSCb.js"), "../../../node_modules/prismjs/components/prism-t4-vb.js": () => import("./prism-t4-vb._wklSXl3.js"), "../../../node_modules/prismjs/components/prism-t4-vb.min.js": () => import("./prism-t4-vb.min._wklSXl3.js"), "../../../node_modules/prismjs/components/prism-tap.js": () => import("./prism-tap.vMHtg_sQ.js"), "../../../node_modules/prismjs/components/prism-tap.min.js": () => import("./prism-tap.min.B3-a7nR0.js"), "../../../node_modules/prismjs/components/prism-tcl.js": () => import("./prism-tcl.igJwjiUN.js"), "../../../node_modules/prismjs/components/prism-tcl.min.js": () => import("./prism-tcl.min.L5nccegj.js"), "../../../node_modules/prismjs/components/prism-textile.js": () => import("./prism-textile.lk0BMacw.js"), "../../../node_modules/prismjs/components/prism-textile.min.js": () => import("./prism-textile.min.N774Tr9a.js"), "../../../node_modules/prismjs/components/prism-toml.js": () => import("./prism-toml.jRWY9T3c.js"), "../../../node_modules/prismjs/components/prism-toml.min.js": () => import("./prism-toml.min.UXVbBgiL.js"), "../../../node_modules/prismjs/components/prism-tremor.js": () => import("./prism-tremor.xOapK7UZ.js"), "../../../node_modules/prismjs/components/prism-tremor.min.js": () => import("./prism-tremor.min.x1Cuzs1U.js"), "../../../node_modules/prismjs/components/prism-tsx.js": () => import("./prism-tsx.xm1_qV9U.js"), "../../../node_modules/prismjs/components/prism-tsx.min.js": () => import("./prism-tsx.min.a7T8mkel.js"), "../../../node_modules/prismjs/components/prism-tt2.js": () => import("./prism-tt2.GGGr1j3a.js"), "../../../node_modules/prismjs/components/prism-tt2.min.js": () => import("./prism-tt2.min.CrEsqtXq.js"), "../../../node_modules/prismjs/components/prism-turtle.js": () => import("./prism-turtle.zwrB7I39.js"), "../../../node_modules/prismjs/components/prism-turtle.min.js": () => import("./prism-turtle.min.tAdbiqCi.js"), "../../../node_modules/prismjs/components/prism-twig.js": () => import("./prism-twig.1ZV4PFr5.js"), "../../../node_modules/prismjs/components/prism-twig.min.js": () => import("./prism-twig.min.bC0U5fM1.js"), "../../../node_modules/prismjs/components/prism-typescript.js": () => import("./prism-typescript.cZ4d-QDu.js"), "../../../node_modules/prismjs/components/prism-typescript.min.js": () => import("./prism-typescript.min.c31ffb60.js"), "../../../node_modules/prismjs/components/prism-typoscript.js": () => import("./prism-typoscript.3mqNdYV7.js"), "../../../node_modules/prismjs/components/prism-typoscript.min.js": () => import("./prism-typoscript.min.Cl14FF_q.js"), "../../../node_modules/prismjs/components/prism-unrealscript.js": () => import("./prism-unrealscript.c_RhmvkR.js"), "../../../node_modules/prismjs/components/prism-unrealscript.min.js": () => import("./prism-unrealscript.min.VT0P8NC2.js"), "../../../node_modules/prismjs/components/prism-uorazor.js": () => import("./prism-uorazor.eH2vj_vC.js"), "../../../node_modules/prismjs/components/prism-uorazor.min.js": () => import("./prism-uorazor.min.aGdnf3oY.js"), "../../../node_modules/prismjs/components/prism-uri.js": () => import("./prism-uri.pkFM0xeZ.js"), "../../../node_modules/prismjs/components/prism-uri.min.js": () => import("./prism-uri.min.jVdH2Yt6.js"), "../../../node_modules/prismjs/components/prism-v.js": () => import("./prism-v.-c6CXLG9.js"), "../../../node_modules/prismjs/components/prism-v.min.js": () => import("./prism-v.min.cSSI67lR.js"), "../../../node_modules/prismjs/components/prism-vala.js": () => import("./prism-vala.DNcsVIZy.js"), "../../../node_modules/prismjs/components/prism-vala.min.js": () => import("./prism-vala.min.XeVv22tD.js"), "../../../node_modules/prismjs/components/prism-vbnet.js": () => import("./prism-vbnet.NuWYpxSP.js"), "../../../node_modules/prismjs/components/prism-vbnet.min.js": () => import("./prism-vbnet.min.h9SSa0FG.js"), "../../../node_modules/prismjs/components/prism-velocity.js": () => import("./prism-velocity.5zoQl6z3.js"), "../../../node_modules/prismjs/components/prism-velocity.min.js": () => import("./prism-velocity.min.R4ZgJ9b4.js"), "../../../node_modules/prismjs/components/prism-verilog.js": () => import("./prism-verilog.n1W4FGUb.js"), "../../../node_modules/prismjs/components/prism-verilog.min.js": () => import("./prism-verilog.min.UJTfL0sv.js"), "../../../node_modules/prismjs/components/prism-vhdl.js": () => import("./prism-vhdl.Z9qJB3z_.js"), "../../../node_modules/prismjs/components/prism-vhdl.min.js": () => import("./prism-vhdl.min.bQLu82GC.js"), "../../../node_modules/prismjs/components/prism-vim.js": () => import("./prism-vim.Kf1B64bY.js"), "../../../node_modules/prismjs/components/prism-vim.min.js": () => import("./prism-vim.min.n4PHHFFP.js"), "../../../node_modules/prismjs/components/prism-visual-basic.js": () => import("./prism-visual-basic.ZgCQBDgk.js"), "../../../node_modules/prismjs/components/prism-visual-basic.min.js": () => import("./prism-visual-basic.min.vtUUGfVJ.js"), "../../../node_modules/prismjs/components/prism-warpscript.js": () => import("./prism-warpscript.npkR79Jz.js"), "../../../node_modules/prismjs/components/prism-warpscript.min.js": () => import("./prism-warpscript.min.AabaJNAo.js"), "../../../node_modules/prismjs/components/prism-wasm.js": () => import("./prism-wasm.12r8aioY.js"), "../../../node_modules/prismjs/components/prism-wasm.min.js": () => import("./prism-wasm.min.-jptbBsS.js"), "../../../node_modules/prismjs/components/prism-web-idl.js": () => import("./prism-web-idl.P-eWZqjw.js"), "../../../node_modules/prismjs/components/prism-web-idl.min.js": () => import("./prism-web-idl.min.VEWrwUDg.js"), "../../../node_modules/prismjs/components/prism-wgsl.js": () => import("./prism-wgsl.HYkMjGwA.js"), "../../../node_modules/prismjs/components/prism-wgsl.min.js": () => import("./prism-wgsl.min.TdsTfz1x.js"), "../../../node_modules/prismjs/components/prism-wiki.js": () => import("./prism-wiki.EA0oBHoz.js"), "../../../node_modules/prismjs/components/prism-wiki.min.js": () => import("./prism-wiki.min.CZ84-Qq3.js"), "../../../node_modules/prismjs/components/prism-wolfram.js": () => import("./prism-wolfram.ONNMMfYn.js"), "../../../node_modules/prismjs/components/prism-wolfram.min.js": () => import("./prism-wolfram.min.0yDeKX14.js"), "../../../node_modules/prismjs/components/prism-wren.js": () => import("./prism-wren.K1GjOHX9.js"), "../../../node_modules/prismjs/components/prism-wren.min.js": () => import("./prism-wren.min.VqbDebIj.js"), "../../../node_modules/prismjs/components/prism-xeora.js": () => import("./prism-xeora.lZKwx4vW.js"), "../../../node_modules/prismjs/components/prism-xeora.min.js": () => import("./prism-xeora.min.v39cb0o2.js"), "../../../node_modules/prismjs/components/prism-xml-doc.js": () => import("./prism-xml-doc.V5d2uPEd.js"), "../../../node_modules/prismjs/components/prism-xml-doc.min.js": () => import("./prism-xml-doc.min.g6asX3wp.js"), "../../../node_modules/prismjs/components/prism-xojo.js": () => import("./prism-xojo.nZ8HxJIi.js"), "../../../node_modules/prismjs/components/prism-xojo.min.js": () => import("./prism-xojo.min.ScWpc7Fc.js"), "../../../node_modules/prismjs/components/prism-xquery.js": () => import("./prism-xquery._qaZhZqa.js"), "../../../node_modules/prismjs/components/prism-xquery.min.js": () => import("./prism-xquery.min.iHLKP7AU.js"), "../../../node_modules/prismjs/components/prism-yaml.js": () => import("./prism-yaml.xVpjDtp5.js"), "../../../node_modules/prismjs/components/prism-yaml.min.js": () => import("./prism-yaml.min.qeUGcluq.js"), "../../../node_modules/prismjs/components/prism-yang.js": () => import("./prism-yang.FRa7Mb_8.js"), "../../../node_modules/prismjs/components/prism-yang.min.js": () => import("./prism-yang.min.xwrfsTZD.js"), "../../../node_modules/prismjs/components/prism-zig.js": () => import("./prism-zig.FlCuhIqf.js"), "../../../node_modules/prismjs/components/prism-zig.min.js": () => import("./prism-zig.min.OvtOUcZk.js") }), `../../../node_modules/prismjs/components/prism-${o}.js`), a.resolve({
        lang: o,
        status: "loaded"
      }), Ye.add(o)) : a.resolve({
        lang: o,
        status: "noexist"
      });
    }), Promise.all(s);
  };
}
function jo(n, t) {
  for (const e of n)
    typeof e == "string" ? t({ type: "temp-text", content: e, length: e.length }) : typeof e.content == "string" ? t(e) : jo(
      Array.isArray(e.content) ? e.content : [e.content],
      t
    );
}
const $s = xn;
window.Prism = xn;
import("./prism-keep-markup.MZOMl8XE.js");
const Nt = [];
for (const n of Object.keys(Zs.languages)) {
  const t = Zs.languages[n];
  Nt.push({
    name: n,
    ...t
  }), t.alias && (typeof t.alias == "string" ? Nt.push({
    name: t.alias,
    ...t
  }) : Array.isArray(t.alias) && Nt.push(
    ...t.alias.map((e) => ({
      name: e,
      ...t
    }))
  ));
}
const ht = ll(xn), Ph = (n) => !n || typeof n != "string" ? [] : new qe(Nt, {
  includeScore: !0,
  keys: ["name", "title", "alias"]
}).search(n).map((e) => e.item).slice(0, 5);
ht("latex");
ht("yaml");
var ne = -1, Q = 1, K = 0;
function st(n, t, e, s, r) {
  if (n === t)
    return n ? [[K, n]] : [];
  if (e != null) {
    var o = jl(n, t, e);
    if (o)
      return o;
  }
  var a = yn(n, t), l = n.substring(0, a);
  n = n.substring(a), t = t.substring(a), a = os(n, t);
  var m = n.substring(n.length - a);
  n = n.substring(0, n.length - a), t = t.substring(0, t.length - a);
  var h = pl(n, t);
  return l && h.unshift([K, l]), m && h.push([K, m]), Sn(h, r), s && dl(h), h;
}
function pl(n, t) {
  var e;
  if (!n)
    return [[Q, t]];
  if (!t)
    return [[ne, n]];
  var s = n.length > t.length ? n : t, r = n.length > t.length ? t : n, o = s.indexOf(r);
  if (o !== -1)
    return e = [
      [Q, s.substring(0, o)],
      [K, r],
      [Q, s.substring(o + r.length)]
    ], n.length > t.length && (e[0][0] = e[2][0] = ne), e;
  if (r.length === 1)
    return [
      [ne, n],
      [Q, t]
    ];
  var a = ul(n, t);
  if (a) {
    var l = a[0], m = a[1], h = a[2], u = a[3], f = a[4], i = st(l, h), c = st(m, u);
    return i.concat([[K, f]], c);
  }
  return ml(n, t);
}
function ml(n, t) {
  for (var e = n.length, s = t.length, r = Math.ceil((e + s) / 2), o = r, a = 2 * r, l = new Array(a), m = new Array(a), h = 0; h < a; h++)
    l[h] = -1, m[h] = -1;
  l[o + 1] = 0, m[o + 1] = 0;
  for (var u = e - s, f = u % 2 !== 0, i = 0, c = 0, p = 0, g = 0, j = 0; j < r; j++) {
    for (var b = -j + i; b <= j - c; b += 2) {
      var x = o + b, y;
      b === -j || b !== j && l[x - 1] < l[x + 1] ? y = l[x + 1] : y = l[x - 1] + 1;
      for (var w = y - b; y < e && w < s && n.charAt(y) === t.charAt(w); )
        y++, w++;
      if (l[x] = y, y > e)
        c += 2;
      else if (w > s)
        i += 2;
      else if (f) {
        var C = o + u - b;
        if (C >= 0 && C < a && m[C] !== -1) {
          var D = e - m[C];
          if (y >= D)
            return dr(n, t, y, w);
        }
      }
    }
    for (var A = -j + p; A <= j - g; A += 2) {
      var C = o + A, D;
      A === -j || A !== j && m[C - 1] < m[C + 1] ? D = m[C + 1] : D = m[C - 1] + 1;
      for (var $ = D - A; D < e && $ < s && n.charAt(e - D - 1) === t.charAt(s - $ - 1); )
        D++, $++;
      if (m[C] = D, D > e)
        g += 2;
      else if ($ > s)
        p += 2;
      else if (!f) {
        var x = o + u - A;
        if (x >= 0 && x < a && l[x] !== -1) {
          var y = l[x], w = o + y - x;
          if (D = e - D, y >= D)
            return dr(n, t, y, w);
        }
      }
    }
  }
  return [
    [ne, n],
    [Q, t]
  ];
}
function dr(n, t, e, s) {
  var r = n.substring(0, e), o = t.substring(0, s), a = n.substring(e), l = t.substring(s), m = st(r, o), h = st(a, l);
  return m.concat(h);
}
function yn(n, t) {
  if (!n || !t || n.charAt(0) !== t.charAt(0))
    return 0;
  for (var e = 0, s = Math.min(n.length, t.length), r = s, o = 0; e < r; )
    n.substring(o, r) == t.substring(o, r) ? (e = r, o = e) : s = r, r = Math.floor((s - e) / 2 + e);
  return bo(n.charCodeAt(r - 1)) && r--, r;
}
function hr(n, t) {
  var e = n.length, s = t.length;
  if (e == 0 || s == 0)
    return 0;
  e > s ? n = n.substring(e - s) : e < s && (t = t.substring(0, e));
  var r = Math.min(e, s);
  if (n == t)
    return r;
  for (var o = 0, a = 1; ; ) {
    var l = n.substring(r - a), m = t.indexOf(l);
    if (m == -1)
      return o;
    a += m, (m == 0 || n.substring(r - a) == t.substring(0, a)) && (o = a, a++);
  }
}
function os(n, t) {
  if (!n || !t || n.slice(-1) !== t.slice(-1))
    return 0;
  for (var e = 0, s = Math.min(n.length, t.length), r = s, o = 0; e < r; )
    n.substring(n.length - r, n.length - o) == t.substring(t.length - r, t.length - o) ? (e = r, o = e) : s = r, r = Math.floor((s - e) / 2 + e);
  return vo(n.charCodeAt(n.length - r)) && r--, r;
}
function ul(n, t) {
  var e = n.length > t.length ? n : t, s = n.length > t.length ? t : n;
  if (e.length < 4 || s.length * 2 < e.length)
    return null;
  function r(c, p, g) {
    for (var j = c.substring(g, g + Math.floor(c.length / 4)), b = -1, x = "", y, w, C, D; (b = p.indexOf(j, b + 1)) !== -1; ) {
      var A = yn(
        c.substring(g),
        p.substring(b)
      ), $ = os(
        c.substring(0, g),
        p.substring(0, b)
      );
      x.length < $ + A && (x = p.substring(b - $, b) + p.substring(b, b + A), y = c.substring(0, g - $), w = c.substring(g + A), C = p.substring(0, b - $), D = p.substring(b + A));
    }
    return x.length * 2 >= c.length ? [
      y,
      w,
      C,
      D,
      x
    ] : null;
  }
  var o = r(
    e,
    s,
    Math.ceil(e.length / 4)
  ), a = r(
    e,
    s,
    Math.ceil(e.length / 2)
  ), l;
  if (!o && !a)
    return null;
  a ? o ? l = o[4].length > a[4].length ? o : a : l = a : l = o;
  var m, h, u, f;
  n.length > t.length ? (m = l[0], h = l[1], u = l[2], f = l[3]) : (u = l[0], f = l[1], m = l[2], h = l[3]);
  var i = l[4];
  return [m, h, u, f, i];
}
function dl(n) {
  for (var t = !1, e = [], s = 0, r = null, o = 0, a = 0, l = 0, m = 0, h = 0; o < n.length; )
    n[o][0] == K ? (e[s++] = o, a = m, l = h, m = 0, h = 0, r = n[o][1]) : (n[o][0] == Q ? m += n[o][1].length : h += n[o][1].length, r && r.length <= Math.max(a, l) && r.length <= Math.max(m, h) && (n.splice(e[s - 1], 0, [
      ne,
      r
    ]), n[e[s - 1] + 1][0] = Q, s--, s--, o = s > 0 ? e[s - 1] : -1, a = 0, l = 0, m = 0, h = 0, r = null, t = !0)), o++;
  for (t && Sn(n), gl(n), o = 1; o < n.length; ) {
    if (n[o - 1][0] == ne && n[o][0] == Q) {
      var u = n[o - 1][1], f = n[o][1], i = hr(u, f), c = hr(f, u);
      i >= c ? (i >= u.length / 2 || i >= f.length / 2) && (n.splice(o, 0, [
        K,
        f.substring(0, i)
      ]), n[o - 1][1] = u.substring(
        0,
        u.length - i
      ), n[o + 1][1] = f.substring(i), o++) : (c >= u.length / 2 || c >= f.length / 2) && (n.splice(o, 0, [
        K,
        u.substring(0, c)
      ]), n[o - 1][0] = Q, n[o - 1][1] = f.substring(
        0,
        f.length - c
      ), n[o + 1][0] = ne, n[o + 1][1] = u.substring(c), o++), o++;
    }
    o++;
  }
}
var fr = /[^a-zA-Z0-9]/, gr = /\s/, _r = /[\r\n]/, hl = /\n\r?\n$/, fl = /^\r?\n\r?\n/;
function gl(n) {
  function t(c, p) {
    if (!c || !p)
      return 6;
    var g = c.charAt(c.length - 1), j = p.charAt(0), b = g.match(fr), x = j.match(fr), y = b && g.match(gr), w = x && j.match(gr), C = y && g.match(_r), D = w && j.match(_r), A = C && c.match(hl), $ = D && p.match(fl);
    return A || $ ? 5 : C || D ? 4 : b && !y && w ? 3 : y || w ? 2 : b || x ? 1 : 0;
  }
  for (var e = 1; e < n.length - 1; ) {
    if (n[e - 1][0] == K && n[e + 1][0] == K) {
      var s = n[e - 1][1], r = n[e][1], o = n[e + 1][1], a = os(s, r);
      if (a) {
        var l = r.substring(r.length - a);
        s = s.substring(0, s.length - a), r = l + r.substring(0, r.length - a), o = l + o;
      }
      for (var m = s, h = r, u = o, f = t(s, r) + t(r, o); r.charAt(0) === o.charAt(0); ) {
        s += r.charAt(0), r = r.substring(1) + o.charAt(0), o = o.substring(1);
        var i = t(s, r) + t(r, o);
        i >= f && (f = i, m = s, h = r, u = o);
      }
      n[e - 1][1] != m && (m ? n[e - 1][1] = m : (n.splice(e - 1, 1), e--), n[e][1] = h, u ? n[e + 1][1] = u : (n.splice(e + 1, 1), e--));
    }
    e++;
  }
}
function Sn(n, t) {
  n.push([K, ""]);
  for (var e = 0, s = 0, r = 0, o = "", a = "", l; e < n.length; ) {
    if (e < n.length - 1 && !n[e][1]) {
      n.splice(e, 1);
      continue;
    }
    switch (n[e][0]) {
      case Q:
        r++, a += n[e][1], e++;
        break;
      case ne:
        s++, o += n[e][1], e++;
        break;
      case K:
        var m = e - r - s - 1;
        if (t) {
          if (m >= 0 && wo(n[m][1])) {
            var h = n[m][1].slice(-1);
            if (n[m][1] = n[m][1].slice(
              0,
              -1
            ), o = h + o, a = h + a, !n[m][1]) {
              n.splice(m, 1), e--;
              var u = m - 1;
              n[u] && n[u][0] === Q && (r++, a = n[u][1] + a, u--), n[u] && n[u][0] === ne && (s++, o = n[u][1] + o, u--), m = u;
            }
          }
          if (xo(n[e][1])) {
            var h = n[e][1].charAt(0);
            n[e][1] = n[e][1].slice(1), o += h, a += h;
          }
        }
        if (e < n.length - 1 && !n[e][1]) {
          n.splice(e, 1);
          break;
        }
        if (o.length > 0 || a.length > 0) {
          o.length > 0 && a.length > 0 && (l = yn(a, o), l !== 0 && (m >= 0 ? n[m][1] += a.substring(
            0,
            l
          ) : (n.splice(0, 0, [
            K,
            a.substring(0, l)
          ]), e++), a = a.substring(l), o = o.substring(l)), l = os(a, o), l !== 0 && (n[e][1] = a.substring(a.length - l) + n[e][1], a = a.substring(
            0,
            a.length - l
          ), o = o.substring(
            0,
            o.length - l
          )));
          var f = r + s;
          o.length === 0 && a.length === 0 ? (n.splice(e - f, f), e = e - f) : o.length === 0 ? (n.splice(e - f, f, [Q, a]), e = e - f + 1) : a.length === 0 ? (n.splice(e - f, f, [ne, o]), e = e - f + 1) : (n.splice(
            e - f,
            f,
            [ne, o],
            [Q, a]
          ), e = e - f + 2);
        }
        e !== 0 && n[e - 1][0] === K ? (n[e - 1][1] += n[e][1], n.splice(e, 1)) : e++, r = 0, s = 0, o = "", a = "";
        break;
    }
  }
  n[n.length - 1][1] === "" && n.pop();
  var i = !1;
  for (e = 1; e < n.length - 1; )
    n[e - 1][0] === K && n[e + 1][0] === K && (n[e][1].substring(
      n[e][1].length - n[e - 1][1].length
    ) === n[e - 1][1] ? (n[e][1] = n[e - 1][1] + n[e][1].substring(
      0,
      n[e][1].length - n[e - 1][1].length
    ), n[e + 1][1] = n[e - 1][1] + n[e + 1][1], n.splice(e - 1, 1), i = !0) : n[e][1].substring(0, n[e + 1][1].length) == n[e + 1][1] && (n[e - 1][1] += n[e + 1][1], n[e][1] = n[e][1].substring(n[e + 1][1].length) + n[e + 1][1], n.splice(e + 1, 1), i = !0)), e++;
  i && Sn(n, t);
}
function bo(n) {
  return n >= 55296 && n <= 56319;
}
function vo(n) {
  return n >= 56320 && n <= 57343;
}
function xo(n) {
  return vo(n.charCodeAt(0));
}
function wo(n) {
  return bo(n.charCodeAt(n.length - 1));
}
function _l(n) {
  for (var t = [], e = 0; e < n.length; e++)
    n[e][1].length > 0 && t.push(n[e]);
  return t;
}
function Ns(n, t, e, s) {
  return wo(n) || xo(s) ? null : _l([
    [K, n],
    [ne, t],
    [Q, e],
    [K, s]
  ]);
}
function jl(n, t, e) {
  var s = typeof e == "number" ? { index: e, length: 0 } : e.oldRange, r = typeof e == "number" ? null : e.newRange, o = n.length, a = t.length;
  if (s.length === 0 && (r === null || r.length === 0)) {
    var l = s.index, m = n.slice(0, l), h = n.slice(l), u = r ? r.index : null;
    e: {
      var f = l + a - o;
      if (u !== null && u !== f || f < 0 || f > a)
        break e;
      var i = t.slice(0, f), c = t.slice(f);
      if (c !== h)
        break e;
      var p = Math.min(l, f), g = m.slice(0, p), j = i.slice(0, p);
      if (g !== j)
        break e;
      var b = m.slice(p), x = i.slice(p);
      return Ns(g, b, x, h);
    }
    e: {
      if (u !== null && u !== l)
        break e;
      var y = l, i = t.slice(0, y), c = t.slice(y);
      if (i !== m)
        break e;
      var w = Math.min(o - y, a - y), C = h.slice(h.length - w), D = c.slice(c.length - w);
      if (C !== D)
        break e;
      var b = h.slice(0, h.length - w), x = c.slice(0, c.length - w);
      return Ns(m, b, x, C);
    }
  }
  if (s.length > 0 && r && r.length === 0)
    e: {
      var g = n.slice(0, s.index), C = n.slice(s.index + s.length), p = g.length, w = C.length;
      if (a < p + w)
        break e;
      var j = t.slice(0, p), D = t.slice(a - w);
      if (g !== j || C !== D)
        break e;
      var b = n.slice(p, o - w), x = t.slice(p, a - w);
      return Ns(g, b, x, C);
    }
  return null;
}
function is(n, t, e, s) {
  return st(n, t, e, s, !0);
}
is.INSERT = Q;
is.DELETE = ne;
is.EQUAL = K;
var bl = is;
const Cn = /* @__PURE__ */ ns(bl), vl = J("codeblock:"), Pt = class Pt extends q {
  constructor(e, { meta: s }) {
    super(e);
    T(this, "meta");
    this.tagName = "pre", this.meta = s, this.classList = ["mu-code-block", `mu-${s.type}-code`], this.createDomNode();
  }
  static create(e, s) {
    const r = new Pt(e, s), { lang: o } = s.meta, a = k.loadBlock("language-input").create(
      e,
      s
    ), l = k.loadBlock("code").create(e, s);
    return r.append(a), r.append(l), o && requestAnimationFrame(() => {
      r.lang = o;
    }), r;
  }
  get lang() {
    return this.meta.lang;
  }
  set lang(e) {
    if (this.meta.lang = e, this.meta.type !== "fenced") {
      this.meta.type = "fenced";
      const s = Cn("indented", "fenced"), { path: r } = this;
      r.push("meta", "type"), this.jsonState.editOperation(r, wn(s)), Xe(this.domNode, "remove", "mu-indented-code"), Xe(this.domNode, "add", "mu-fenced-code");
    }
    e && ht(e).then((s) => {
      var o;
      if (!Array.isArray(s))
        return;
      s.some(
        ({ status: a }) => a === "loaded" || a === "cached"
      ) && ((o = this.lastContentInDescendant()) == null || o.update());
    }).catch((s) => {
      vl.warn(s);
    });
  }
  get path() {
    const { path: e } = this.parent, s = this.parent.offset(this);
    return [...e, s];
  }
  queryBlock(e) {
    return e.length === 0 ? this : e[0] === "meta" || e[0] === "type" ? this : e[0] === "lang" ? this.firstContentInDescendant() : this.lastContentInDescendant();
  }
  getState() {
    return {
      name: "code-block",
      meta: { ...this.meta },
      text: this.lastContentInDescendant().text
    };
  }
};
T(Pt, "blockName", "code-block");
let Ys = Pt;
function xl(n, t) {
  return document.createElement(n, t);
}
function wl(n, t, e) {
  return document.createElementNS(n, t, e);
}
function kl() {
  return Le(document.createDocumentFragment());
}
function yl(n) {
  return document.createTextNode(n);
}
function Sl(n) {
  return document.createComment(n);
}
function Cl(n, t, e) {
  if (ge(n)) {
    let s = n;
    for (; s && ge(s); )
      s = Le(s).parent;
    n = s ?? n;
  }
  ge(t) && (t = Le(t, n)), e && ge(e) && (e = Le(e).firstChildNode), n.insertBefore(t, e);
}
function Al(n, t) {
  n.removeChild(t);
}
function Tl(n, t) {
  ge(t) && (t = Le(t, n)), n.appendChild(t);
}
function ko(n) {
  if (ge(n)) {
    for (; n && ge(n); )
      n = Le(n).parent;
    return n ?? null;
  }
  return n.parentNode;
}
function Dl(n) {
  var t;
  if (ge(n)) {
    const e = Le(n), s = ko(e);
    if (s && e.lastChildNode) {
      const r = Array.from(s.childNodes), o = r.indexOf(e.lastChildNode);
      return (t = r[o + 1]) !== null && t !== void 0 ? t : null;
    }
    return null;
  }
  return n.nextSibling;
}
function $l(n) {
  return n.tagName;
}
function Nl(n, t) {
  n.textContent = t;
}
function Ll(n) {
  return n.textContent;
}
function Ol(n) {
  return n.nodeType === 1;
}
function El(n) {
  return n.nodeType === 3;
}
function Il(n) {
  return n.nodeType === 8;
}
function ge(n) {
  return n.nodeType === 11;
}
function Le(n, t) {
  var e, s, r;
  const o = n;
  return (e = o.parent) !== null && e !== void 0 || (o.parent = t ?? null), (s = o.firstChildNode) !== null && s !== void 0 || (o.firstChildNode = n.firstChild), (r = o.lastChildNode) !== null && r !== void 0 || (o.lastChildNode = n.lastChild), o;
}
const yo = {
  createElement: xl,
  createElementNS: wl,
  createTextNode: yl,
  createDocumentFragment: kl,
  createComment: Sl,
  insertBefore: Cl,
  removeChild: Al,
  appendChild: Tl,
  parentNode: ko,
  nextSibling: Dl,
  tagName: $l,
  setTextContent: Nl,
  getTextContent: Ll,
  isElement: Ol,
  isText: El,
  isComment: Il,
  isDocumentFragment: ge
};
function _e(n, t, e, s, r) {
  const o = t === void 0 ? void 0 : t.key;
  return { sel: n, data: t, children: e, text: s, elm: r, key: o };
}
const Xs = Array.isArray;
function Lt(n) {
  return typeof n == "string" || typeof n == "number" || n instanceof String || n instanceof Number;
}
function Ls(n) {
  return n === void 0;
}
function te(n) {
  return n !== void 0;
}
const Os = _e("", {}, [], void 0, void 0);
function Ze(n, t) {
  var e, s;
  const r = n.key === t.key, o = ((e = n.data) === null || e === void 0 ? void 0 : e.is) === ((s = t.data) === null || s === void 0 ? void 0 : s.is), a = n.sel === t.sel, l = !n.sel && n.sel === t.sel ? typeof n.text == typeof t.text : !0;
  return a && r && o && l;
}
function Pl() {
  throw new Error("The document fragment is not supported on this platform.");
}
function Rl(n, t) {
  return n.isElement(t);
}
function Ml(n, t) {
  return n.isDocumentFragment(t);
}
function Bl(n, t, e) {
  var s;
  const r = {};
  for (let o = t; o <= e; ++o) {
    const a = (s = n[o]) === null || s === void 0 ? void 0 : s.key;
    a !== void 0 && (r[a] = o);
  }
  return r;
}
const ql = [
  "create",
  "update",
  "remove",
  "destroy",
  "pre",
  "post"
];
function Hl(n, t, e) {
  const s = {
    create: [],
    update: [],
    remove: [],
    destroy: [],
    pre: [],
    post: []
  }, r = t !== void 0 ? t : yo;
  for (const p of ql)
    for (const g of n) {
      const j = g[p];
      j !== void 0 && s[p].push(j);
    }
  function o(p) {
    const g = p.id ? "#" + p.id : "", j = p.getAttribute("class"), b = j ? "." + j.split(" ").join(".") : "";
    return _e(r.tagName(p).toLowerCase() + g + b, {}, [], void 0, p);
  }
  function a(p) {
    return _e(void 0, {}, [], void 0, p);
  }
  function l(p, g) {
    return function() {
      if (--g === 0) {
        const b = r.parentNode(p);
        r.removeChild(b, p);
      }
    };
  }
  function m(p, g) {
    var j, b, x, y;
    let w, C = p.data;
    if (C !== void 0) {
      const $ = (j = C.hook) === null || j === void 0 ? void 0 : j.init;
      te($) && ($(p), C = p.data);
    }
    const D = p.children, A = p.sel;
    if (A === "!")
      Ls(p.text) && (p.text = ""), p.elm = r.createComment(p.text);
    else if (A !== void 0) {
      const $ = A.indexOf("#"), O = A.indexOf(".", $), R = $ > 0 ? $ : A.length, M = O > 0 ? O : A.length, I = $ !== -1 || O !== -1 ? A.slice(0, Math.min(R, M)) : A, P = p.elm = te(C) && te(w = C.ns) ? r.createElementNS(w, I, C) : r.createElement(I, C);
      for (R < M && P.setAttribute("id", A.slice(R + 1, M)), O > 0 && P.setAttribute("class", A.slice(M + 1).replace(/\./g, " ")), w = 0; w < s.create.length; ++w)
        s.create[w](Os, p);
      if (Xs(D))
        for (w = 0; w < D.length; ++w) {
          const V = D[w];
          V != null && r.appendChild(P, m(V, g));
        }
      else
        Lt(p.text) && r.appendChild(P, r.createTextNode(p.text));
      const H = p.data.hook;
      te(H) && ((b = H.create) === null || b === void 0 || b.call(H, Os, p), H.insert && g.push(p));
    } else if (!((x = e == null ? void 0 : e.experimental) === null || x === void 0) && x.fragments && p.children) {
      for (p.elm = ((y = r.createDocumentFragment) !== null && y !== void 0 ? y : Pl)(), w = 0; w < s.create.length; ++w)
        s.create[w](Os, p);
      for (w = 0; w < p.children.length; ++w) {
        const $ = p.children[w];
        $ != null && r.appendChild(p.elm, m($, g));
      }
    } else
      p.elm = r.createTextNode(p.text);
    return p.elm;
  }
  function h(p, g, j, b, x, y) {
    for (; b <= x; ++b) {
      const w = j[b];
      w != null && r.insertBefore(p, m(w, y), g);
    }
  }
  function u(p) {
    var g, j;
    const b = p.data;
    if (b !== void 0) {
      (j = (g = b == null ? void 0 : b.hook) === null || g === void 0 ? void 0 : g.destroy) === null || j === void 0 || j.call(g, p);
      for (let x = 0; x < s.destroy.length; ++x)
        s.destroy[x](p);
      if (p.children !== void 0)
        for (let x = 0; x < p.children.length; ++x) {
          const y = p.children[x];
          y != null && typeof y != "string" && u(y);
        }
    }
  }
  function f(p, g, j, b) {
    for (var x, y; j <= b; ++j) {
      let w, C;
      const D = g[j];
      if (D != null)
        if (te(D.sel)) {
          u(D), w = s.remove.length + 1, C = l(D.elm, w);
          for (let $ = 0; $ < s.remove.length; ++$)
            s.remove[$](D, C);
          const A = (y = (x = D == null ? void 0 : D.data) === null || x === void 0 ? void 0 : x.hook) === null || y === void 0 ? void 0 : y.remove;
          te(A) ? A(D, C) : C();
        } else
          D.children ? (u(D), f(p, D.children, 0, D.children.length - 1)) : r.removeChild(p, D.elm);
    }
  }
  function i(p, g, j, b) {
    let x = 0, y = 0, w = g.length - 1, C = g[0], D = g[w], A = j.length - 1, $ = j[0], O = j[A], R, M, I, P;
    for (; x <= w && y <= A; )
      C == null ? C = g[++x] : D == null ? D = g[--w] : $ == null ? $ = j[++y] : O == null ? O = j[--A] : Ze(C, $) ? (c(C, $, b), C = g[++x], $ = j[++y]) : Ze(D, O) ? (c(D, O, b), D = g[--w], O = j[--A]) : Ze(C, O) ? (c(C, O, b), r.insertBefore(p, C.elm, r.nextSibling(D.elm)), C = g[++x], O = j[--A]) : Ze(D, $) ? (c(D, $, b), r.insertBefore(p, D.elm, C.elm), D = g[--w], $ = j[++y]) : (R === void 0 && (R = Bl(g, x, w)), M = R[$.key], Ls(M) ? r.insertBefore(p, m($, b), C.elm) : (I = g[M], I.sel !== $.sel ? r.insertBefore(p, m($, b), C.elm) : (c(I, $, b), g[M] = void 0, r.insertBefore(p, I.elm, C.elm))), $ = j[++y]);
    y <= A && (P = j[A + 1] == null ? null : j[A + 1].elm, h(p, P, j, y, A, b)), x <= w && f(p, g, x, w);
  }
  function c(p, g, j) {
    var b, x, y, w, C, D, A, $;
    const O = (b = g.data) === null || b === void 0 ? void 0 : b.hook;
    (x = O == null ? void 0 : O.prepatch) === null || x === void 0 || x.call(O, p, g);
    const R = g.elm = p.elm;
    if (p === g)
      return;
    if (g.data !== void 0 || te(g.text) && g.text !== p.text) {
      (y = g.data) !== null && y !== void 0 || (g.data = {}), (w = p.data) !== null && w !== void 0 || (p.data = {});
      for (let P = 0; P < s.update.length; ++P)
        s.update[P](p, g);
      (A = (D = (C = g.data) === null || C === void 0 ? void 0 : C.hook) === null || D === void 0 ? void 0 : D.update) === null || A === void 0 || A.call(D, p, g);
    }
    const M = p.children, I = g.children;
    Ls(g.text) ? te(M) && te(I) ? M !== I && i(R, M, I, j) : te(I) ? (te(p.text) && r.setTextContent(R, ""), h(R, null, I, 0, I.length - 1, j)) : te(M) ? f(R, M, 0, M.length - 1) : te(p.text) && r.setTextContent(R, "") : p.text !== g.text && (te(M) && f(R, M, 0, M.length - 1), r.setTextContent(R, g.text)), ($ = O == null ? void 0 : O.postpatch) === null || $ === void 0 || $.call(O, p, g);
  }
  return function(g, j) {
    let b, x, y;
    const w = [];
    for (b = 0; b < s.pre.length; ++b)
      s.pre[b]();
    for (Rl(r, g) ? g = o(g) : Ml(r, g) && (g = a(g)), Ze(g, j) ? c(g, j, w) : (x = g.elm, y = r.parentNode(x), m(j, w), y !== null && (r.insertBefore(y, j.elm, r.nextSibling(x)), f(y, [g], 0, 0))), b = 0; b < w.length; ++b)
      w[b].data.hook.insert(w[b]);
    for (b = 0; b < s.post.length; ++b)
      s.post[b]();
    return j;
  };
}
function An(n, t, e) {
  if (n.ns = "http://www.w3.org/2000/svg", e !== "foreignObject" && t !== void 0)
    for (let s = 0; s < t.length; ++s) {
      const r = t[s];
      if (typeof r == "string")
        continue;
      const o = r.data;
      o !== void 0 && An(o, r.children, r.sel);
    }
}
function Gl(n, t, e) {
  let s = {}, r, o, a;
  if (e !== void 0 ? (t !== null && (s = t), Xs(e) ? r = e : Lt(e) ? o = e.toString() : e && e.sel && (r = [e])) : t != null && (Xs(t) ? r = t : Lt(t) ? o = t.toString() : t && t.sel ? r = [t] : s = t), r !== void 0)
    for (a = 0; a < r.length; ++a)
      Lt(r[a]) && (r[a] = _e(void 0, void 0, void 0, r[a], void 0));
  return n[0] === "s" && n[1] === "v" && n[2] === "g" && (n.length === 3 || n[3] === "." || n[3] === "#") && An(s, r, n), _e(n, s, r, o, void 0);
}
function So(n, t) {
  const e = t !== void 0 ? t : yo;
  let s;
  if (e.isElement(n)) {
    const r = n.id ? "#" + n.id : "", o = n.getAttribute("class"), a = o ? "." + o.split(" ").join(".") : "", l = e.tagName(n).toLowerCase() + r + a, m = {}, h = {}, u = {}, f = [];
    let i, c, p;
    const g = n.attributes, j = n.childNodes;
    for (c = 0, p = g.length; c < p; c++)
      i = g[c].nodeName, i[0] === "d" && i[1] === "a" && i[2] === "t" && i[3] === "a" && i[4] === "-" ? h[i.slice(5)] = g[c].nodeValue || "" : i !== "id" && i !== "class" && (m[i] = g[c].nodeValue);
    for (c = 0, p = j.length; c < p; c++)
      f.push(So(j[c], t));
    return Object.keys(m).length > 0 && (u.attrs = m), Object.keys(h).length > 0 && (u.dataset = h), l[0] === "s" && l[1] === "v" && l[2] === "g" && (l.length === 3 || l[3] === "." || l[3] === "#") && An(u, f, l), _e(l, u, f, void 0, n);
  } else
    return e.isText(n) ? (s = e.getTextContent(n), _e(void 0, void 0, void 0, s, n)) : e.isComment(n) ? (s = e.getTextContent(n), _e("!", {}, [], s, n)) : _e("", {}, [], void 0, n);
}
const Fl = "http://www.w3.org/1999/xlink", zl = "http://www.w3.org/XML/1998/namespace", jr = 58, Ul = 120;
function br(n, t) {
  let e;
  const s = t.elm;
  let r = n.data.attrs, o = t.data.attrs;
  if (!(!r && !o) && r !== o) {
    r = r || {}, o = o || {};
    for (e in o) {
      const a = o[e];
      r[e] !== a && (a === !0 ? s.setAttribute(e, "") : a === !1 ? s.removeAttribute(e) : e.charCodeAt(0) !== Ul ? s.setAttribute(e, a) : e.charCodeAt(3) === jr ? s.setAttributeNS(zl, e, a) : e.charCodeAt(5) === jr ? s.setAttributeNS(Fl, e, a) : s.setAttribute(e, a));
    }
    for (e in r)
      e in o || s.removeAttribute(e);
  }
}
const Kl = {
  create: br,
  update: br
};
function vr(n, t) {
  let e, s;
  const r = t.elm;
  let o = n.data.class, a = t.data.class;
  if (!(!o && !a) && o !== a) {
    o = o || {}, a = a || {};
    for (s in o)
      o[s] && !Object.prototype.hasOwnProperty.call(a, s) && r.classList.remove(s);
    for (s in a)
      e = a[s], e !== o[s] && r.classList[e ? "add" : "remove"](s);
  }
}
const Wl = { create: vr, update: vr }, xr = /[A-Z]/g;
function wr(n, t) {
  const e = t.elm;
  let s = n.data.dataset, r = t.data.dataset, o;
  if (!s && !r || s === r)
    return;
  s = s || {}, r = r || {};
  const a = e.dataset;
  for (o in s)
    r[o] || (a ? o in a && delete a[o] : e.removeAttribute("data-" + o.replace(xr, "-$&").toLowerCase()));
  for (o in r)
    s[o] !== r[o] && (a ? a[o] = r[o] : e.setAttribute("data-" + o.replace(xr, "-$&").toLowerCase(), r[o]));
}
const Zl = {
  create: wr,
  update: wr
};
function Co(n, t, e) {
  if (typeof n == "function")
    n.call(t, e, t);
  else if (typeof n == "object")
    for (let s = 0; s < n.length; s++)
      Co(n[s], t, e);
}
function Jl(n, t) {
  const e = n.type, s = t.data.on;
  s && s[e] && Co(s[e], t, n);
}
function Yl() {
  return function n(t) {
    Jl(t, n.vnode);
  };
}
function Es(n, t) {
  const e = n.data.on, s = n.listener, r = n.elm, o = t && t.data.on, a = t && t.elm;
  let l;
  if (e !== o) {
    if (e && s)
      if (o)
        for (l in e)
          o[l] || r.removeEventListener(l, s, !1);
      else
        for (l in e)
          r.removeEventListener(l, s, !1);
    if (o) {
      const m = t.listener = n.listener || Yl();
      if (m.vnode = t, e)
        for (l in o)
          e[l] || a.addEventListener(l, m, !1);
      else
        for (l in o)
          a.addEventListener(l, m, !1);
    }
  }
}
const Xl = {
  create: Es,
  update: Es,
  destroy: Es
};
function kr(n, t) {
  let e, s, r;
  const o = t.elm;
  let a = n.data.props, l = t.data.props;
  if (!(!a && !l) && a !== l) {
    a = a || {}, l = l || {};
    for (e in l)
      s = l[e], r = a[e], r !== s && (e !== "value" || o[e] !== s) && (o[e] = s);
  }
}
const Ql = { create: kr, update: kr }, yr = typeof window < "u" && window.requestAnimationFrame.bind(window) || setTimeout, Vl = function(n) {
  yr(function() {
    yr(n);
  });
};
let Qs = !1;
function ep(n, t, e) {
  Vl(function() {
    n[t] = e;
  });
}
function Sr(n, t) {
  let e, s;
  const r = t.elm;
  let o = n.data.style, a = t.data.style;
  if (!o && !a || o === a)
    return;
  o = o || {}, a = a || {};
  const l = "delayed" in o;
  for (s in o)
    a[s] || (s[0] === "-" && s[1] === "-" ? r.style.removeProperty(s) : r.style[s] = "");
  for (s in a)
    if (e = a[s], s === "delayed" && a.delayed)
      for (const m in a.delayed)
        e = a.delayed[m], (!l || e !== o.delayed[m]) && ep(r.style, m, e);
    else
      s !== "remove" && e !== o[s] && (s[0] === "-" && s[1] === "-" ? r.style.setProperty(s, e) : r.style[s] = e);
}
function tp(n) {
  let t, e;
  const s = n.elm, r = n.data.style;
  if (!(!r || !(t = r.destroy)))
    for (e in t)
      s.style[e] = t[e];
}
function sp(n, t) {
  const e = n.data.style;
  if (!e || !e.remove) {
    t();
    return;
  }
  Qs || (n.elm.offsetLeft, Qs = !0);
  let s;
  const r = n.elm;
  let o = 0;
  const a = e.remove;
  let l = 0;
  const m = [];
  for (s in a)
    m.push(s), r.style[s] = a[s];
  const u = getComputedStyle(r)["transition-property"].split(", ");
  for (; o < u.length; ++o)
    m.indexOf(u[o]) !== -1 && l++;
  r.addEventListener("transitionend", function(f) {
    f.target === r && --l, l === 0 && t();
  });
}
function np() {
  Qs = !1;
}
const rp = {
  pre: np,
  create: Sr,
  update: Sr,
  destroy: tp,
  remove: sp
};
var op = 1 / 0, ip = "[object Symbol]", Ao = /[&<>"'`]/g, ap = RegExp(Ao.source), cp = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "`": "&#96;"
}, lp = typeof Y == "object" && Y && Y.Object === Object && Y, pp = typeof self == "object" && self && self.Object === Object && self, mp = lp || pp || Function("return this")();
function up(n) {
  return function(t) {
    return n == null ? void 0 : n[t];
  };
}
var dp = up(cp), hp = Object.prototype, fp = hp.toString, Cr = mp.Symbol, Ar = Cr ? Cr.prototype : void 0, Tr = Ar ? Ar.toString : void 0;
function gp(n) {
  if (typeof n == "string")
    return n;
  if (jp(n))
    return Tr ? Tr.call(n) : "";
  var t = n + "";
  return t == "0" && 1 / n == -op ? "-0" : t;
}
function _p(n) {
  return !!n && typeof n == "object";
}
function jp(n) {
  return typeof n == "symbol" || _p(n) && fp.call(n) == ip;
}
function bp(n) {
  return n == null ? "" : gp(n);
}
function vp(n) {
  return n = bp(n), n && ap.test(n) ? n.replace(Ao, dp) : n;
}
var ft = vp;
/*!
 * Cross-Browser Split 1.1.1
 * Copyright 2007-2012 Steven Levithan <stevenlevithan.com>
 * Available under the MIT License
 * ECMAScript compliant, uniform cross-browser split method
 */
var xp = function(t) {
  var e = String.prototype.split, s = /()??/.exec("")[1] === t, r;
  return r = function(o, f, l) {
    if (Object.prototype.toString.call(f) !== "[object RegExp]")
      return e.call(o, f, l);
    var m = [], h = (f.ignoreCase ? "i" : "") + (f.multiline ? "m" : "") + (f.extended ? "x" : "") + // Proposed for ES6
    (f.sticky ? "y" : ""), u = 0, f = new RegExp(f.source, h + "g"), i, c, p, g;
    for (o += "", s || (i = new RegExp("^" + f.source + "$(?!\\s)", h)), l = l === t ? -1 >>> 0 : (
      // Math.pow(2, 32) - 1
      l >>> 0
    ); (c = f.exec(o)) && (p = c.index + c[0].length, !(p > u && (m.push(o.slice(u, c.index)), !s && c.length > 1 && c[0].replace(i, function() {
      for (var j = 1; j < arguments.length - 2; j++)
        arguments[j] === t && (c[j] = t);
    }), c.length > 1 && c.index < o.length && Array.prototype.push.apply(m, c.slice(1)), g = c[0].length, u = p, m.length >= l))); )
      f.lastIndex === c.index && f.lastIndex++;
    return u === o.length ? (g || !f.test("")) && m.push("") : m.push(o.slice(u)), m.length > l ? m.slice(0, l) : m;
  }, r;
}(), wp = xp, kp = /([\.#]?[a-zA-Z0-9\u007F-\uFFFF_:-]+)/, yp = /^\.|#/, Sp = function(t, e) {
  t = t || "";
  var s, r = "", o = [], a = wp(t, kp);
  (yp.test(a[1]) || t === "") && (s = "div");
  var l, m, h;
  for (h = 0; h < a.length; h++)
    l = a[h], l && (m = l.charAt(0), s ? m === "." ? o.push(l.substring(1, l.length)) : m === "#" && (r = l.substring(1, l.length)) : s = l);
  return {
    tagName: e === !0 ? s.toUpperCase() : s,
    id: r,
    className: o.join(" ")
  };
}, as = {};
as.CONTAINER = {
  // http://www.w3.org/TR/SVG/intro.html#TermContainerElement
  a: !0,
  defs: !0,
  glyph: !0,
  g: !0,
  marker: !0,
  mask: !0,
  "missing-glyph": !0,
  pattern: !0,
  svg: !0,
  switch: !0,
  symbol: !0,
  text: !0,
  clipPath: !0,
  linearGradient: !0,
  style: !0,
  script: !0,
  // http://www.w3.org/TR/SVG/intro.html#TermDescriptiveElement
  desc: !0,
  metadata: !0,
  title: !0
};
as.VOID = {
  area: !0,
  base: !0,
  br: !0,
  col: !0,
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
var Dr = ft, Cp = Sp, Ap = as.VOID, $r = as.CONTAINER, Tp = function(t) {
  function e(s, r) {
    var o = [], a = /* @__PURE__ */ new Map([
      // These can be overwritten because that’s what happens in snabbdom
      ["id", r.id],
      ["class", r.className]
    ]);
    return t.forEach(function(l, m) {
      l(s, a);
    }), a.forEach(function(l, m) {
      l && l !== "" && o.push(m + '="' + l + '"');
    }), o.join(" ");
  }
  return function s(r) {
    if (typeof r > "u" || r === null)
      return "";
    if (!r.sel && typeof r.text == "string")
      return Dr(r.text);
    r.data = r.data || {}, r.data.hook && typeof r.data.hook.init == "function" && typeof r.data.fn == "function" && r.data.hook.init(r);
    var o = Cp(r.sel), a = o.tagName, l = e(r, o), m = r.data.ns === "http://www.w3.org/2000/svg", h = [];
    return a === "!" ? "<!--" + r.text + "-->" : (h.push("<" + a), l.length && h.push(" " + l), m && $r[a] !== !0 && h.push(" /"), h.push(">"), (Ap[a] !== !0 && !m || m && $r[a] === !0) && (r.data.props && r.data.props.innerHTML ? h.push(r.data.props.innerHTML) : r.text ? h.push(Dr(r.text)) : r.children && r.children.forEach(function(u) {
      h.push(s(u));
    }), h.push("</" + a + ">")), h.join(""));
  };
}, To = 9007199254740991, Dp = "[object Arguments]", $p = "[object Function]", Np = "[object GeneratorFunction]", Lp = /^(?:0|[1-9]\d*)$/;
function Op(n, t) {
  for (var e = -1, s = Array(n); ++e < n; )
    s[e] = t(e);
  return s;
}
function Ep(n, t) {
  return function(e) {
    return n(t(e));
  };
}
var cs = Object.prototype, Tn = cs.hasOwnProperty, Do = cs.toString, Ip = cs.propertyIsEnumerable, Pp = Ep(Object.keys, Object);
function Rp(n, t) {
  var e = Up(n) || zp(n) ? Op(n.length, String) : [], s = e.length, r = !!s;
  for (var o in n)
    (t || Tn.call(n, o)) && !(r && (o == "length" || Gp(o, s))) && e.push(o);
  return e;
}
var Mp = Hp();
function Bp(n, t) {
  return n && Mp(n, t, Qp);
}
function qp(n) {
  if (!Fp(n))
    return Pp(n);
  var t = [];
  for (var e in Object(n))
    Tn.call(n, e) && e != "constructor" && t.push(e);
  return t;
}
function Hp(n) {
  return function(t, e, s) {
    for (var r = -1, o = Object(t), a = s(t), l = a.length; l--; ) {
      var m = a[n ? l : ++r];
      if (e(o[m], m, o) === !1)
        break;
    }
    return t;
  };
}
function Gp(n, t) {
  return t = t ?? To, !!t && (typeof n == "number" || Lp.test(n)) && n > -1 && n % 1 == 0 && n < t;
}
function Fp(n) {
  var t = n && n.constructor, e = typeof t == "function" && t.prototype || cs;
  return n === e;
}
function zp(n) {
  return Kp(n) && Tn.call(n, "callee") && (!Ip.call(n, "callee") || Do.call(n) == Dp);
}
var Up = Array.isArray;
function $o(n) {
  return n != null && Zp(n.length) && !Wp(n);
}
function Kp(n) {
  return Yp(n) && $o(n);
}
function Wp(n) {
  var t = Jp(n) ? Do.call(n) : "";
  return t == $p || t == Np;
}
function Zp(n) {
  return typeof n == "number" && n > -1 && n % 1 == 0 && n <= To;
}
function Jp(n) {
  var t = typeof n;
  return !!n && (t == "object" || t == "function");
}
function Yp(n) {
  return !!n && typeof n == "object";
}
function Xp(n, t) {
  return n && Bp(n, typeof t == "function" ? t : Vp);
}
function Qp(n) {
  return $o(n) ? Rp(n) : qp(n);
}
function Vp(n) {
  return n;
}
var gt = Xp, Et = { exports: {} };
Et.exports;
(function(n, t) {
  var e = 200, s = "Expected a function", r = "__lodash_hash_undefined__", o = 1, a = 2, l = 1 / 0, m = 9007199254740991, h = "[object Arguments]", u = "[object Array]", f = "[object Boolean]", i = "[object Date]", c = "[object Error]", p = "[object Function]", g = "[object GeneratorFunction]", j = "[object Map]", b = "[object Number]", x = "[object Object]", y = "[object Promise]", w = "[object RegExp]", C = "[object Set]", D = "[object String]", A = "[object Symbol]", $ = "[object WeakMap]", O = "[object ArrayBuffer]", R = "[object DataView]", M = "[object Float32Array]", I = "[object Float64Array]", P = "[object Int8Array]", H = "[object Int16Array]", V = "[object Int32Array]", ye = "[object Uint8Array]", _t = "[object Uint8ClampedArray]", oi = "[object Uint16Array]", ii = "[object Uint32Array]", ai = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, ci = /^\w*$/, li = /^\./, pi = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, mi = /[\\^$.*+?()[\]{}|]/g, ui = /\\(\\)?/g, di = /^\[object .+?Constructor\]$/, hi = /^(?:0|[1-9]\d*)$/, F = {};
  F[M] = F[I] = F[P] = F[H] = F[V] = F[ye] = F[_t] = F[oi] = F[ii] = !0, F[h] = F[u] = F[O] = F[f] = F[R] = F[i] = F[c] = F[p] = F[j] = F[b] = F[x] = F[w] = F[C] = F[D] = F[$] = !1;
  var En = typeof Y == "object" && Y && Y.Object === Object && Y, fi = typeof self == "object" && self && self.Object === Object && self, be = En || fi || Function("return this")(), In = t && !t.nodeType && t, Pn = In && !0 && n && !n.nodeType && n, gi = Pn && Pn.exports === In, Rn = gi && En.process, Mn = function() {
    try {
      return Rn && Rn.binding("util");
    } catch {
    }
  }(), Bn = Mn && Mn.isTypedArray;
  function _i(d, _) {
    for (var v = -1, S = d ? d.length : 0; ++v < S; )
      if (_(d[v], v, d))
        return !0;
    return !1;
  }
  function ji(d) {
    return function(_) {
      return _ == null ? void 0 : _[d];
    };
  }
  function bi(d, _) {
    for (var v = -1, S = Array(d); ++v < d; )
      S[v] = _(v);
    return S;
  }
  function vi(d) {
    return function(_) {
      return d(_);
    };
  }
  function xi(d, _) {
    return d == null ? void 0 : d[_];
  }
  function us(d) {
    var _ = !1;
    if (d != null && typeof d.toString != "function")
      try {
        _ = !!(d + "");
      } catch {
      }
    return _;
  }
  function wi(d) {
    var _ = -1, v = Array(d.size);
    return d.forEach(function(S, L) {
      v[++_] = [L, S];
    }), v;
  }
  function ki(d, _) {
    return function(v) {
      return d(_(v));
    };
  }
  function yi(d) {
    var _ = -1, v = Array(d.size);
    return d.forEach(function(S) {
      v[++_] = S;
    }), v;
  }
  var Si = Array.prototype, Ci = Function.prototype, jt = Object.prototype, ds = be["__core-js_shared__"], qn = function() {
    var d = /[^.]+$/.exec(ds && ds.keys && ds.keys.IE_PROTO || "");
    return d ? "Symbol(src)_1." + d : "";
  }(), Hn = Ci.toString, pe = jt.hasOwnProperty, Ie = jt.toString, Ai = RegExp(
    "^" + Hn.call(pe).replace(mi, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), Gn = be.Symbol, Fn = be.Uint8Array, Ti = jt.propertyIsEnumerable, zn = Si.splice, Di = ki(Object.keys, Object), hs = Pe(be, "DataView"), ze = Pe(be, "Map"), fs = Pe(be, "Promise"), gs = Pe(be, "Set"), _s = Pe(be, "WeakMap"), Ue = Pe(Object, "create"), $i = Ce(hs), Ni = Ce(ze), Li = Ce(fs), Oi = Ce(gs), Ei = Ce(_s), bt = Gn ? Gn.prototype : void 0, js = bt ? bt.valueOf : void 0, Un = bt ? bt.toString : void 0;
  function Se(d) {
    var _ = -1, v = d ? d.length : 0;
    for (this.clear(); ++_ < v; ) {
      var S = d[_];
      this.set(S[0], S[1]);
    }
  }
  function Ii() {
    this.__data__ = Ue ? Ue(null) : {};
  }
  function Pi(d) {
    return this.has(d) && delete this.__data__[d];
  }
  function Ri(d) {
    var _ = this.__data__;
    if (Ue) {
      var v = _[d];
      return v === r ? void 0 : v;
    }
    return pe.call(_, d) ? _[d] : void 0;
  }
  function Mi(d) {
    var _ = this.__data__;
    return Ue ? _[d] !== void 0 : pe.call(_, d);
  }
  function Bi(d, _) {
    var v = this.__data__;
    return v[d] = Ue && _ === void 0 ? r : _, this;
  }
  Se.prototype.clear = Ii, Se.prototype.delete = Pi, Se.prototype.get = Ri, Se.prototype.has = Mi, Se.prototype.set = Bi;
  function me(d) {
    var _ = -1, v = d ? d.length : 0;
    for (this.clear(); ++_ < v; ) {
      var S = d[_];
      this.set(S[0], S[1]);
    }
  }
  function qi() {
    this.__data__ = [];
  }
  function Hi(d) {
    var _ = this.__data__, v = xt(_, d);
    if (v < 0)
      return !1;
    var S = _.length - 1;
    return v == S ? _.pop() : zn.call(_, v, 1), !0;
  }
  function Gi(d) {
    var _ = this.__data__, v = xt(_, d);
    return v < 0 ? void 0 : _[v][1];
  }
  function Fi(d) {
    return xt(this.__data__, d) > -1;
  }
  function zi(d, _) {
    var v = this.__data__, S = xt(v, d);
    return S < 0 ? v.push([d, _]) : v[S][1] = _, this;
  }
  me.prototype.clear = qi, me.prototype.delete = Hi, me.prototype.get = Gi, me.prototype.has = Fi, me.prototype.set = zi;
  function ue(d) {
    var _ = -1, v = d ? d.length : 0;
    for (this.clear(); ++_ < v; ) {
      var S = d[_];
      this.set(S[0], S[1]);
    }
  }
  function Ui() {
    this.__data__ = {
      hash: new Se(),
      map: new (ze || me)(),
      string: new Se()
    };
  }
  function Ki(d) {
    return wt(this, d).delete(d);
  }
  function Wi(d) {
    return wt(this, d).get(d);
  }
  function Zi(d) {
    return wt(this, d).has(d);
  }
  function Ji(d, _) {
    return wt(this, d).set(d, _), this;
  }
  ue.prototype.clear = Ui, ue.prototype.delete = Ki, ue.prototype.get = Wi, ue.prototype.has = Zi, ue.prototype.set = Ji;
  function vt(d) {
    var _ = -1, v = d ? d.length : 0;
    for (this.__data__ = new ue(); ++_ < v; )
      this.add(d[_]);
  }
  function Yi(d) {
    return this.__data__.set(d, r), this;
  }
  function Xi(d) {
    return this.__data__.has(d);
  }
  vt.prototype.add = vt.prototype.push = Yi, vt.prototype.has = Xi;
  function de(d) {
    this.__data__ = new me(d);
  }
  function Qi() {
    this.__data__ = new me();
  }
  function Vi(d) {
    return this.__data__.delete(d);
  }
  function ea(d) {
    return this.__data__.get(d);
  }
  function ta(d) {
    return this.__data__.has(d);
  }
  function sa(d, _) {
    var v = this.__data__;
    if (v instanceof me) {
      var S = v.__data__;
      if (!ze || S.length < e - 1)
        return S.push([d, _]), this;
      v = this.__data__ = new ue(S);
    }
    return v.set(d, _), this;
  }
  de.prototype.clear = Qi, de.prototype.delete = Vi, de.prototype.get = ea, de.prototype.has = ta, de.prototype.set = sa;
  function na(d, _) {
    var v = Ae(d) || Yn(d) ? bi(d.length, String) : [], S = v.length, L = !!S;
    for (var N in d)
      (_ || pe.call(d, N)) && !(L && (N == "length" || ws(N, S))) && v.push(N);
    return v;
  }
  function xt(d, _) {
    for (var v = d.length; v--; )
      if (Jn(d[v][0], _))
        return v;
    return -1;
  }
  function bs(d, _) {
    _ = Ke(_, d) ? [_] : xs(_);
    for (var v = 0, S = _.length; d != null && v < S; )
      d = d[Re(_[v++])];
    return v && v == S ? d : void 0;
  }
  function ra(d) {
    return Ie.call(d);
  }
  function oa(d, _) {
    return d != null && _ in Object(d);
  }
  function vs(d, _, v, S, L) {
    return d === _ ? !0 : d == null || _ == null || !kt(d) && !yt(_) ? d !== d && _ !== _ : ia(d, _, vs, v, S, L);
  }
  function ia(d, _, v, S, L, N) {
    var B = Ae(d), G = Ae(_), U = u, W = u;
    B || (U = ve(d), U = U == h ? x : U), G || (W = ve(_), W = W == h ? x : W);
    var X = U == x && !us(d), ee = W == x && !us(_), Z = U == W;
    if (Z && !X)
      return N || (N = new de()), B || $a(d) ? Kn(d, _, v, S, L, N) : ja(d, _, U, v, S, L, N);
    if (!(L & a)) {
      var oe = X && pe.call(d, "__wrapped__"), ie = ee && pe.call(_, "__wrapped__");
      if (oe || ie) {
        var xe = oe ? d.value() : d, he = ie ? _.value() : _;
        return N || (N = new de()), v(xe, he, S, L, N);
      }
    }
    return Z ? (N || (N = new de()), ba(d, _, v, S, L, N)) : !1;
  }
  function aa(d, _, v, S) {
    var L = v.length, N = L, B = !S;
    if (d == null)
      return !N;
    for (d = Object(d); L--; ) {
      var G = v[L];
      if (B && G[2] ? G[1] !== d[G[0]] : !(G[0] in d))
        return !1;
    }
    for (; ++L < N; ) {
      G = v[L];
      var U = G[0], W = d[U], X = G[1];
      if (B && G[2]) {
        if (W === void 0 && !(U in d))
          return !1;
      } else {
        var ee = new de();
        if (S)
          var Z = S(W, X, U, d, _, ee);
        if (!(Z === void 0 ? vs(X, W, S, o | a, ee) : Z))
          return !1;
      }
    }
    return !0;
  }
  function ca(d) {
    if (!kt(d) || ka(d))
      return !1;
    var _ = Qn(d) || us(d) ? Ai : di;
    return _.test(Ce(d));
  }
  function la(d) {
    return yt(d) && ys(d.length) && !!F[Ie.call(d)];
  }
  function pa(d) {
    return typeof d == "function" ? d : d == null ? Ea : typeof d == "object" ? Ae(d) ? da(d[0], d[1]) : ua(d) : Ia(d);
  }
  function ma(d) {
    if (!ya(d))
      return Di(d);
    var _ = [];
    for (var v in Object(d))
      pe.call(d, v) && v != "constructor" && _.push(v);
    return _;
  }
  function ua(d) {
    var _ = va(d);
    return _.length == 1 && _[0][2] ? Zn(_[0][0], _[0][1]) : function(v) {
      return v === d || aa(v, d, _);
    };
  }
  function da(d, _) {
    return Ke(d) && Wn(_) ? Zn(Re(d), _) : function(v) {
      var S = La(v, d);
      return S === void 0 && S === _ ? Oa(v, d) : vs(_, S, void 0, o | a);
    };
  }
  function ha(d) {
    return function(_) {
      return bs(_, d);
    };
  }
  function fa(d, _) {
    for (var v = d ? _.length : 0, S = v - 1; v--; ) {
      var L = _[v];
      if (v == S || L !== N) {
        var N = L;
        if (ws(L))
          zn.call(d, L, 1);
        else if (Ke(L, d))
          delete d[Re(L)];
        else {
          var B = xs(L), G = Sa(d, B);
          G != null && delete G[Re(Aa(B))];
        }
      }
    }
    return d;
  }
  function ga(d, _, v) {
    var S = -1, L = d.length;
    _ < 0 && (_ = -_ > L ? 0 : L + _), v = v > L ? L : v, v < 0 && (v += L), L = _ > v ? 0 : v - _ >>> 0, _ >>>= 0;
    for (var N = Array(L); ++S < L; )
      N[S] = d[S + _];
    return N;
  }
  function _a(d) {
    if (typeof d == "string")
      return d;
    if (Ss(d))
      return Un ? Un.call(d) : "";
    var _ = d + "";
    return _ == "0" && 1 / d == -l ? "-0" : _;
  }
  function xs(d) {
    return Ae(d) ? d : Ca(d);
  }
  function Kn(d, _, v, S, L, N) {
    var B = L & a, G = d.length, U = _.length;
    if (G != U && !(B && U > G))
      return !1;
    var W = N.get(d);
    if (W && N.get(_))
      return W == _;
    var X = -1, ee = !0, Z = L & o ? new vt() : void 0;
    for (N.set(d, _), N.set(_, d); ++X < G; ) {
      var oe = d[X], ie = _[X];
      if (S)
        var xe = B ? S(ie, oe, X, _, d, N) : S(oe, ie, X, d, _, N);
      if (xe !== void 0) {
        if (xe)
          continue;
        ee = !1;
        break;
      }
      if (Z) {
        if (!_i(_, function(he, Te) {
          if (!Z.has(Te) && (oe === he || v(oe, he, S, L, N)))
            return Z.add(Te);
        })) {
          ee = !1;
          break;
        }
      } else if (!(oe === ie || v(oe, ie, S, L, N))) {
        ee = !1;
        break;
      }
    }
    return N.delete(d), N.delete(_), ee;
  }
  function ja(d, _, v, S, L, N, B) {
    switch (v) {
      case R:
        if (d.byteLength != _.byteLength || d.byteOffset != _.byteOffset)
          return !1;
        d = d.buffer, _ = _.buffer;
      case O:
        return !(d.byteLength != _.byteLength || !S(new Fn(d), new Fn(_)));
      case f:
      case i:
      case b:
        return Jn(+d, +_);
      case c:
        return d.name == _.name && d.message == _.message;
      case w:
      case D:
        return d == _ + "";
      case j:
        var G = wi;
      case C:
        var U = N & a;
        if (G || (G = yi), d.size != _.size && !U)
          return !1;
        var W = B.get(d);
        if (W)
          return W == _;
        N |= o, B.set(d, _);
        var X = Kn(G(d), G(_), S, L, N, B);
        return B.delete(d), X;
      case A:
        if (js)
          return js.call(d) == js.call(_);
    }
    return !1;
  }
  function ba(d, _, v, S, L, N) {
    var B = L & a, G = Cs(d), U = G.length, W = Cs(_), X = W.length;
    if (U != X && !B)
      return !1;
    for (var ee = U; ee--; ) {
      var Z = G[ee];
      if (!(B ? Z in _ : pe.call(_, Z)))
        return !1;
    }
    var oe = N.get(d);
    if (oe && N.get(_))
      return oe == _;
    var ie = !0;
    N.set(d, _), N.set(_, d);
    for (var xe = B; ++ee < U; ) {
      Z = G[ee];
      var he = d[Z], Te = _[Z];
      if (S)
        var Vn = B ? S(Te, he, Z, _, d, N) : S(he, Te, Z, d, _, N);
      if (!(Vn === void 0 ? he === Te || v(he, Te, S, L, N) : Vn)) {
        ie = !1;
        break;
      }
      xe || (xe = Z == "constructor");
    }
    if (ie && !xe) {
      var St = d.constructor, Ct = _.constructor;
      St != Ct && "constructor" in d && "constructor" in _ && !(typeof St == "function" && St instanceof St && typeof Ct == "function" && Ct instanceof Ct) && (ie = !1);
    }
    return N.delete(d), N.delete(_), ie;
  }
  function wt(d, _) {
    var v = d.__data__;
    return wa(_) ? v[typeof _ == "string" ? "string" : "hash"] : v.map;
  }
  function va(d) {
    for (var _ = Cs(d), v = _.length; v--; ) {
      var S = _[v], L = d[S];
      _[v] = [S, L, Wn(L)];
    }
    return _;
  }
  function Pe(d, _) {
    var v = xi(d, _);
    return ca(v) ? v : void 0;
  }
  var ve = ra;
  (hs && ve(new hs(new ArrayBuffer(1))) != R || ze && ve(new ze()) != j || fs && ve(fs.resolve()) != y || gs && ve(new gs()) != C || _s && ve(new _s()) != $) && (ve = function(d) {
    var _ = Ie.call(d), v = _ == x ? d.constructor : void 0, S = v ? Ce(v) : void 0;
    if (S)
      switch (S) {
        case $i:
          return R;
        case Ni:
          return j;
        case Li:
          return y;
        case Oi:
          return C;
        case Ei:
          return $;
      }
    return _;
  });
  function xa(d, _, v) {
    _ = Ke(_, d) ? [_] : xs(_);
    for (var S, L = -1, B = _.length; ++L < B; ) {
      var N = Re(_[L]);
      if (!(S = d != null && v(d, N)))
        break;
      d = d[N];
    }
    if (S)
      return S;
    var B = d ? d.length : 0;
    return !!B && ys(B) && ws(N, B) && (Ae(d) || Yn(d));
  }
  function ws(d, _) {
    return _ = _ ?? m, !!_ && (typeof d == "number" || hi.test(d)) && d > -1 && d % 1 == 0 && d < _;
  }
  function Ke(d, _) {
    if (Ae(d))
      return !1;
    var v = typeof d;
    return v == "number" || v == "symbol" || v == "boolean" || d == null || Ss(d) ? !0 : ci.test(d) || !ai.test(d) || _ != null && d in Object(_);
  }
  function wa(d) {
    var _ = typeof d;
    return _ == "string" || _ == "number" || _ == "symbol" || _ == "boolean" ? d !== "__proto__" : d === null;
  }
  function ka(d) {
    return !!qn && qn in d;
  }
  function ya(d) {
    var _ = d && d.constructor, v = typeof _ == "function" && _.prototype || jt;
    return d === v;
  }
  function Wn(d) {
    return d === d && !kt(d);
  }
  function Zn(d, _) {
    return function(v) {
      return v == null ? !1 : v[d] === _ && (_ !== void 0 || d in Object(v));
    };
  }
  function Sa(d, _) {
    return _.length == 1 ? d : bs(d, ga(_, 0, -1));
  }
  var Ca = ks(function(d) {
    d = Na(d);
    var _ = [];
    return li.test(d) && _.push(""), d.replace(pi, function(v, S, L, N) {
      _.push(L ? N.replace(ui, "$1") : S || v);
    }), _;
  });
  function Re(d) {
    if (typeof d == "string" || Ss(d))
      return d;
    var _ = d + "";
    return _ == "0" && 1 / d == -l ? "-0" : _;
  }
  function Ce(d) {
    if (d != null) {
      try {
        return Hn.call(d);
      } catch {
      }
      try {
        return d + "";
      } catch {
      }
    }
    return "";
  }
  function Aa(d) {
    var _ = d ? d.length : 0;
    return _ ? d[_ - 1] : void 0;
  }
  function Ta(d, _) {
    var v = [];
    if (!(d && d.length))
      return v;
    var S = -1, L = [], N = d.length;
    for (_ = pa(_); ++S < N; ) {
      var B = d[S];
      _(B, S, d) && (v.push(B), L.push(S));
    }
    return fa(d, L), v;
  }
  function ks(d, _) {
    if (typeof d != "function" || _ && typeof _ != "function")
      throw new TypeError(s);
    var v = function() {
      var S = arguments, L = _ ? _.apply(this, S) : S[0], N = v.cache;
      if (N.has(L))
        return N.get(L);
      var B = d.apply(this, S);
      return v.cache = N.set(L, B), B;
    };
    return v.cache = new (ks.Cache || ue)(), v;
  }
  ks.Cache = ue;
  function Jn(d, _) {
    return d === _ || d !== d && _ !== _;
  }
  function Yn(d) {
    return Da(d) && pe.call(d, "callee") && (!Ti.call(d, "callee") || Ie.call(d) == h);
  }
  var Ae = Array.isArray;
  function Xn(d) {
    return d != null && ys(d.length) && !Qn(d);
  }
  function Da(d) {
    return yt(d) && Xn(d);
  }
  function Qn(d) {
    var _ = kt(d) ? Ie.call(d) : "";
    return _ == p || _ == g;
  }
  function ys(d) {
    return typeof d == "number" && d > -1 && d % 1 == 0 && d <= m;
  }
  function kt(d) {
    var _ = typeof d;
    return !!d && (_ == "object" || _ == "function");
  }
  function yt(d) {
    return !!d && typeof d == "object";
  }
  function Ss(d) {
    return typeof d == "symbol" || yt(d) && Ie.call(d) == A;
  }
  var $a = Bn ? vi(Bn) : la;
  function Na(d) {
    return d == null ? "" : _a(d);
  }
  function La(d, _, v) {
    var S = d == null ? void 0 : bs(d, _);
    return S === void 0 ? v : S;
  }
  function Oa(d, _) {
    return d != null && xa(d, _, oa);
  }
  function Cs(d) {
    return Xn(d) ? na(d) : ma(d);
  }
  function Ea(d) {
    return d;
  }
  function Ia(d) {
    return Ke(d) ? ji(Re(d)) : ha(d);
  }
  n.exports = Ta;
})(Et, Et.exports);
var em = Et.exports, tm = 200, Dn = "__lodash_hash_undefined__", sm = 1 / 0, nm = "[object Function]", rm = "[object GeneratorFunction]", om = /[\\^$.*+?()[\]{}|]/g, im = /^\[object .+?Constructor\]$/, am = typeof Y == "object" && Y && Y.Object === Object && Y, cm = typeof self == "object" && self && self.Object === Object && self, $n = am || cm || Function("return this")();
function lm(n, t) {
  var e = n ? n.length : 0;
  return !!e && um(n, t, 0) > -1;
}
function pm(n, t, e) {
  for (var s = -1, r = n ? n.length : 0; ++s < r; )
    if (e(t, n[s]))
      return !0;
  return !1;
}
function mm(n, t, e, s) {
  for (var r = n.length, o = e + (s ? 1 : -1); s ? o-- : ++o < r; )
    if (t(n[o], o, n))
      return o;
  return -1;
}
function um(n, t, e) {
  if (t !== t)
    return mm(n, dm, e);
  for (var s = e - 1, r = n.length; ++s < r; )
    if (n[s] === t)
      return s;
  return -1;
}
function dm(n) {
  return n !== n;
}
function hm(n, t) {
  return n.has(t);
}
function fm(n, t) {
  return n == null ? void 0 : n[t];
}
function gm(n) {
  var t = !1;
  if (n != null && typeof n.toString != "function")
    try {
      t = !!(n + "");
    } catch {
    }
  return t;
}
function No(n) {
  var t = -1, e = Array(n.size);
  return n.forEach(function(s) {
    e[++t] = s;
  }), e;
}
var _m = Array.prototype, jm = Function.prototype, Lo = Object.prototype, Is = $n["__core-js_shared__"], Nr = function() {
  var n = /[^.]+$/.exec(Is && Is.keys && Is.keys.IE_PROTO || "");
  return n ? "Symbol(src)_1." + n : "";
}(), Oo = jm.toString, Nn = Lo.hasOwnProperty, bm = Lo.toString, vm = RegExp(
  "^" + Oo.call(Nn).replace(om, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
), xm = _m.splice, wm = Ln($n, "Map"), Ps = Ln($n, "Set"), nt = Ln(Object, "create");
function Ee(n) {
  var t = -1, e = n ? n.length : 0;
  for (this.clear(); ++t < e; ) {
    var s = n[t];
    this.set(s[0], s[1]);
  }
}
function km() {
  this.__data__ = nt ? nt(null) : {};
}
function ym(n) {
  return this.has(n) && delete this.__data__[n];
}
function Sm(n) {
  var t = this.__data__;
  if (nt) {
    var e = t[n];
    return e === Dn ? void 0 : e;
  }
  return Nn.call(t, n) ? t[n] : void 0;
}
function Cm(n) {
  var t = this.__data__;
  return nt ? t[n] !== void 0 : Nn.call(t, n);
}
function Am(n, t) {
  var e = this.__data__;
  return e[n] = nt && t === void 0 ? Dn : t, this;
}
Ee.prototype.clear = km;
Ee.prototype.delete = ym;
Ee.prototype.get = Sm;
Ee.prototype.has = Cm;
Ee.prototype.set = Am;
function He(n) {
  var t = -1, e = n ? n.length : 0;
  for (this.clear(); ++t < e; ) {
    var s = n[t];
    this.set(s[0], s[1]);
  }
}
function Tm() {
  this.__data__ = [];
}
function Dm(n) {
  var t = this.__data__, e = ls(t, n);
  if (e < 0)
    return !1;
  var s = t.length - 1;
  return e == s ? t.pop() : xm.call(t, e, 1), !0;
}
function $m(n) {
  var t = this.__data__, e = ls(t, n);
  return e < 0 ? void 0 : t[e][1];
}
function Nm(n) {
  return ls(this.__data__, n) > -1;
}
function Lm(n, t) {
  var e = this.__data__, s = ls(e, n);
  return s < 0 ? e.push([n, t]) : e[s][1] = t, this;
}
He.prototype.clear = Tm;
He.prototype.delete = Dm;
He.prototype.get = $m;
He.prototype.has = Nm;
He.prototype.set = Lm;
function Ge(n) {
  var t = -1, e = n ? n.length : 0;
  for (this.clear(); ++t < e; ) {
    var s = n[t];
    this.set(s[0], s[1]);
  }
}
function Om() {
  this.__data__ = {
    hash: new Ee(),
    map: new (wm || He)(),
    string: new Ee()
  };
}
function Em(n) {
  return ps(this, n).delete(n);
}
function Im(n) {
  return ps(this, n).get(n);
}
function Pm(n) {
  return ps(this, n).has(n);
}
function Rm(n, t) {
  return ps(this, n).set(n, t), this;
}
Ge.prototype.clear = Om;
Ge.prototype.delete = Em;
Ge.prototype.get = Im;
Ge.prototype.has = Pm;
Ge.prototype.set = Rm;
function It(n) {
  var t = -1, e = n ? n.length : 0;
  for (this.__data__ = new Ge(); ++t < e; )
    this.add(n[t]);
}
function Mm(n) {
  return this.__data__.set(n, Dn), this;
}
function Bm(n) {
  return this.__data__.has(n);
}
It.prototype.add = It.prototype.push = Mm;
It.prototype.has = Bm;
function ls(n, t) {
  for (var e = n.length; e--; )
    if (Wm(n[e][0], t))
      return e;
  return -1;
}
function qm(n) {
  if (!Eo(n) || zm(n))
    return !1;
  var t = Zm(n) || gm(n) ? vm : im;
  return t.test(Um(n));
}
function Hm(n, t, e) {
  var s = -1, r = lm, o = n.length, a = !0, l = [], m = l;
  if (e)
    a = !1, r = pm;
  else if (o >= tm) {
    var h = t ? null : Gm(n);
    if (h)
      return No(h);
    a = !1, r = hm, m = new It();
  } else
    m = t ? [] : l;
  e:
    for (; ++s < o; ) {
      var u = n[s], f = t ? t(u) : u;
      if (u = e || u !== 0 ? u : 0, a && f === f) {
        for (var i = m.length; i--; )
          if (m[i] === f)
            continue e;
        t && m.push(f), l.push(u);
      } else
        r(m, f, e) || (m !== l && m.push(f), l.push(u));
    }
  return l;
}
var Gm = Ps && 1 / No(new Ps([, -0]))[1] == sm ? function(n) {
  return new Ps(n);
} : Jm;
function ps(n, t) {
  var e = n.__data__;
  return Fm(t) ? e[typeof t == "string" ? "string" : "hash"] : e.map;
}
function Ln(n, t) {
  var e = fm(n, t);
  return qm(e) ? e : void 0;
}
function Fm(n) {
  var t = typeof n;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? n !== "__proto__" : n === null;
}
function zm(n) {
  return !!Nr && Nr in n;
}
function Um(n) {
  if (n != null) {
    try {
      return Oo.call(n);
    } catch {
    }
    try {
      return n + "";
    } catch {
    }
  }
  return "";
}
function Km(n) {
  return n && n.length ? Hm(n) : [];
}
function Wm(n, t) {
  return n === t || n !== n && t !== t;
}
function Zm(n) {
  var t = Eo(n) ? bm.call(n) : "";
  return t == nm || t == rm;
}
function Eo(n) {
  var t = typeof n;
  return !!n && (t == "object" || t == "function");
}
function Jm() {
}
var Ym = Km, Xm = gt, Qm = em, Vm = Ym, eu = function(t, e) {
  var s, r = [], o = [], a = t.data.class || {}, l = e.get("class");
  l = l.length > 0 ? l.split(" ") : [], Xm(a, function(m, h) {
    m ? r.push(h) : o.push(h);
  }), s = Qm(Vm(l.concat(r)), function(m) {
    return o.indexOf(m) < 0;
  }), s.length && e.set("class", s.join(" "));
}, tu = gt, su = ft, nu = [
  "attributes",
  "childElementCount",
  "children",
  "classList",
  "clientHeight",
  "clientLeft",
  "clientTop",
  "clientWidth",
  "currentStyle",
  "firstElementChild",
  "innerHTML",
  "lastElementChild",
  "nextElementSibling",
  "ongotpointercapture",
  "onlostpointercapture",
  "onwheel",
  "outerHTML",
  "previousElementSibling",
  "runtimeStyle",
  "scrollHeight",
  "scrollLeft",
  "scrollLeftMax",
  "scrollTop",
  "scrollTopMax",
  "scrollWidth",
  "tabStop",
  "tagName"
], ru = [
  "disabled",
  "visible",
  "checked",
  "readonly",
  "required",
  "allowfullscreen",
  "autofocus",
  "autoplay",
  "compact",
  "controls",
  "default",
  "formnovalidate",
  "hidden",
  "ismap",
  "itemscope",
  "loop",
  "multiple",
  "muted",
  "noresize",
  "noshade",
  "novalidate",
  "nowrap",
  "open",
  "reversed",
  "seamless",
  "selected",
  "sortable",
  "truespeed",
  "typemustmatch"
], ou = function(t, e) {
  var s = t.data.props || {};
  tu(s, function(r, o) {
    if (!(nu.indexOf(o) > -1)) {
      o === "htmlFor" && (o = "for"), o === "className" && (o = "class");
      var a = o.toLowerCase();
      ~ru.indexOf(a) ? r && e.set(a, a) : e.set(a, su(r));
    }
  });
}, iu = gt, au = ft, cu = function(t, e) {
  var s = t.data.attrs || {};
  iu(s, function(r, o) {
    e.set(o, au(r));
  });
};
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Lr = Object.getOwnPropertySymbols, lu = Object.prototype.hasOwnProperty, pu = Object.prototype.propertyIsEnumerable;
function mu(n) {
  if (n == null)
    throw new TypeError("Object.assign cannot be called with null or undefined");
  return Object(n);
}
function uu() {
  try {
    if (!Object.assign)
      return !1;
    var n = new String("abc");
    if (n[5] = "de", Object.getOwnPropertyNames(n)[0] === "5")
      return !1;
    for (var t = {}, e = 0; e < 10; e++)
      t["_" + String.fromCharCode(e)] = e;
    var s = Object.getOwnPropertyNames(t).map(function(o) {
      return t[o];
    });
    if (s.join("") !== "0123456789")
      return !1;
    var r = {};
    return "abcdefghijklmnopqrst".split("").forEach(function(o) {
      r[o] = o;
    }), Object.keys(Object.assign({}, r)).join("") === "abcdefghijklmnopqrst";
  } catch {
    return !1;
  }
}
var du = uu() ? Object.assign : function(n, t) {
  for (var e, s = mu(n), r, o = 1; o < arguments.length; o++) {
    e = Object(arguments[o]);
    for (var a in e)
      lu.call(e, a) && (s[a] = e[a]);
    if (Lr) {
      r = Lr(e);
      for (var l = 0; l < r.length; l++)
        pu.call(e, r[l]) && (s[r[l]] = e[r[l]]);
    }
  }
  return s;
}, hu = 1 / 0, fu = "[object Symbol]", gu = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, _u = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Io = "\\ud800-\\udfff", ju = "\\u0300-\\u036f\\ufe20-\\ufe23", bu = "\\u20d0-\\u20f0", Po = "\\u2700-\\u27bf", Ro = "a-z\\xdf-\\xf6\\xf8-\\xff", vu = "\\xac\\xb1\\xd7\\xf7", xu = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", wu = "\\u2000-\\u206f", ku = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", Mo = "A-Z\\xc0-\\xd6\\xd8-\\xde", yu = "\\ufe0e\\ufe0f", Bo = vu + xu + wu + ku, On = "['’]", Or = "[" + Bo + "]", qo = "[" + ju + bu + "]", Ho = "\\d+", Su = "[" + Po + "]", Go = "[" + Ro + "]", Fo = "[^" + Io + Bo + Ho + Po + Ro + Mo + "]", Cu = "\\ud83c[\\udffb-\\udfff]", Au = "(?:" + qo + "|" + Cu + ")", Tu = "[^" + Io + "]", zo = "(?:\\ud83c[\\udde6-\\uddff]){2}", Uo = "[\\ud800-\\udbff][\\udc00-\\udfff]", Be = "[" + Mo + "]", Du = "\\u200d", Er = "(?:" + Go + "|" + Fo + ")", $u = "(?:" + Be + "|" + Fo + ")", Ir = "(?:" + On + "(?:d|ll|m|re|s|t|ve))?", Pr = "(?:" + On + "(?:D|LL|M|RE|S|T|VE))?", Ko = Au + "?", Wo = "[" + yu + "]?", Nu = "(?:" + Du + "(?:" + [Tu, zo, Uo].join("|") + ")" + Wo + Ko + ")*", Lu = Wo + Ko + Nu, Ou = "(?:" + [Su, zo, Uo].join("|") + ")" + Lu, Eu = RegExp(On, "g"), Iu = RegExp(qo, "g"), Pu = RegExp([
  Be + "?" + Go + "+" + Ir + "(?=" + [Or, Be, "$"].join("|") + ")",
  $u + "+" + Pr + "(?=" + [Or, Be + Er, "$"].join("|") + ")",
  Be + "?" + Er + "+" + Ir,
  Be + "+" + Pr,
  Ho,
  Ou
].join("|"), "g"), Ru = /[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, Mu = {
  // Latin-1 Supplement block.
  À: "A",
  Á: "A",
  Â: "A",
  Ã: "A",
  Ä: "A",
  Å: "A",
  à: "a",
  á: "a",
  â: "a",
  ã: "a",
  ä: "a",
  å: "a",
  Ç: "C",
  ç: "c",
  Ð: "D",
  ð: "d",
  È: "E",
  É: "E",
  Ê: "E",
  Ë: "E",
  è: "e",
  é: "e",
  ê: "e",
  ë: "e",
  Ì: "I",
  Í: "I",
  Î: "I",
  Ï: "I",
  ì: "i",
  í: "i",
  î: "i",
  ï: "i",
  Ñ: "N",
  ñ: "n",
  Ò: "O",
  Ó: "O",
  Ô: "O",
  Õ: "O",
  Ö: "O",
  Ø: "O",
  ò: "o",
  ó: "o",
  ô: "o",
  õ: "o",
  ö: "o",
  ø: "o",
  Ù: "U",
  Ú: "U",
  Û: "U",
  Ü: "U",
  ù: "u",
  ú: "u",
  û: "u",
  ü: "u",
  Ý: "Y",
  ý: "y",
  ÿ: "y",
  Æ: "Ae",
  æ: "ae",
  Þ: "Th",
  þ: "th",
  ß: "ss",
  // Latin Extended-A block.
  Ā: "A",
  Ă: "A",
  Ą: "A",
  ā: "a",
  ă: "a",
  ą: "a",
  Ć: "C",
  Ĉ: "C",
  Ċ: "C",
  Č: "C",
  ć: "c",
  ĉ: "c",
  ċ: "c",
  č: "c",
  Ď: "D",
  Đ: "D",
  ď: "d",
  đ: "d",
  Ē: "E",
  Ĕ: "E",
  Ė: "E",
  Ę: "E",
  Ě: "E",
  ē: "e",
  ĕ: "e",
  ė: "e",
  ę: "e",
  ě: "e",
  Ĝ: "G",
  Ğ: "G",
  Ġ: "G",
  Ģ: "G",
  ĝ: "g",
  ğ: "g",
  ġ: "g",
  ģ: "g",
  Ĥ: "H",
  Ħ: "H",
  ĥ: "h",
  ħ: "h",
  Ĩ: "I",
  Ī: "I",
  Ĭ: "I",
  Į: "I",
  İ: "I",
  ĩ: "i",
  ī: "i",
  ĭ: "i",
  į: "i",
  ı: "i",
  Ĵ: "J",
  ĵ: "j",
  Ķ: "K",
  ķ: "k",
  ĸ: "k",
  Ĺ: "L",
  Ļ: "L",
  Ľ: "L",
  Ŀ: "L",
  Ł: "L",
  ĺ: "l",
  ļ: "l",
  ľ: "l",
  ŀ: "l",
  ł: "l",
  Ń: "N",
  Ņ: "N",
  Ň: "N",
  Ŋ: "N",
  ń: "n",
  ņ: "n",
  ň: "n",
  ŋ: "n",
  Ō: "O",
  Ŏ: "O",
  Ő: "O",
  ō: "o",
  ŏ: "o",
  ő: "o",
  Ŕ: "R",
  Ŗ: "R",
  Ř: "R",
  ŕ: "r",
  ŗ: "r",
  ř: "r",
  Ś: "S",
  Ŝ: "S",
  Ş: "S",
  Š: "S",
  ś: "s",
  ŝ: "s",
  ş: "s",
  š: "s",
  Ţ: "T",
  Ť: "T",
  Ŧ: "T",
  ţ: "t",
  ť: "t",
  ŧ: "t",
  Ũ: "U",
  Ū: "U",
  Ŭ: "U",
  Ů: "U",
  Ű: "U",
  Ų: "U",
  ũ: "u",
  ū: "u",
  ŭ: "u",
  ů: "u",
  ű: "u",
  ų: "u",
  Ŵ: "W",
  ŵ: "w",
  Ŷ: "Y",
  ŷ: "y",
  Ÿ: "Y",
  Ź: "Z",
  Ż: "Z",
  Ž: "Z",
  ź: "z",
  ż: "z",
  ž: "z",
  Ĳ: "IJ",
  ĳ: "ij",
  Œ: "Oe",
  œ: "oe",
  ŉ: "'n",
  ſ: "ss"
}, Bu = typeof Y == "object" && Y && Y.Object === Object && Y, qu = typeof self == "object" && self && self.Object === Object && self, Hu = Bu || qu || Function("return this")();
function Gu(n, t, e, s) {
  var r = -1, o = n ? n.length : 0;
  for (s && o && (e = n[++r]); ++r < o; )
    e = t(e, n[r], r, n);
  return e;
}
function Fu(n) {
  return n.match(gu) || [];
}
function zu(n) {
  return function(t) {
    return n == null ? void 0 : n[t];
  };
}
var Uu = zu(Mu);
function Ku(n) {
  return Ru.test(n);
}
function Wu(n) {
  return n.match(Pu) || [];
}
var Zu = Object.prototype, Ju = Zu.toString, Rr = Hu.Symbol, Mr = Rr ? Rr.prototype : void 0, Br = Mr ? Mr.toString : void 0;
function Yu(n) {
  if (typeof n == "string")
    return n;
  if (Vu(n))
    return Br ? Br.call(n) : "";
  var t = n + "";
  return t == "0" && 1 / n == -hu ? "-0" : t;
}
function Xu(n) {
  return function(t) {
    return Gu(sd(ed(t).replace(Eu, "")), n, "");
  };
}
function Qu(n) {
  return !!n && typeof n == "object";
}
function Vu(n) {
  return typeof n == "symbol" || Qu(n) && Ju.call(n) == fu;
}
function Zo(n) {
  return n == null ? "" : Yu(n);
}
function ed(n) {
  return n = Zo(n), n && n.replace(_u, Uu).replace(Iu, "");
}
var td = Xu(function(n, t, e) {
  return n + (e ? "-" : "") + t.toLowerCase();
});
function sd(n, t, e) {
  return n = Zo(n), t = e ? void 0 : t, t === void 0 ? Ku(n) ? Wu(n) : Fu(n) : n.match(t) || [];
}
var nd = td, rd = du, od = gt, id = ft, ad = nd, cd = function(t, e) {
  var s = [], r = t.data.style || {};
  r.delayed && rd(r, r.delayed), od(r, function(o, a) {
    if (typeof o == "string" || typeof o == "number") {
      var l = ad(a);
      s.push((a.match(/^--.*/) ? "--" + l : l) + ": " + id(o));
    }
  }), s.length && e.set("style", s.join("; "));
}, ld = gt, pd = ft, md = function(t, e) {
  var s = t.data.dataset || {};
  ld(s, function(r, o) {
    e.set(`data-${o}`, pd(r));
  });
}, ud = {
  class: eu,
  props: ou,
  attributes: cu,
  style: cd,
  dataset: md
}, dd = Tp, Je = ud, hd = dd([
  Je.attributes,
  Je.props,
  Je.class,
  Je.style,
  Je.dataset
]), fd = hd;
const gd = /* @__PURE__ */ ns(fd), Rh = Hl([
  Wl,
  Kl,
  rp,
  Ql,
  Zl,
  Xl
]), Rs = Gl, _d = So, jd = gd, Mh = (n) => {
  const t = document.createElement("div");
  return t.innerHTML = n, _d(t).children;
}, qr = J("code:"), bd = (n) => {
  const t = "a.mu-code-copy", e = Rs(
    "i.icon",
    Rs(
      "i.icon-inner",
      {
        style: {
          background: `url(${Xa}) no-repeat`,
          "background-size": "100%"
        }
      },
      ""
    )
  );
  return Rs(
    t,
    {
      attrs: {
        title: n.t("Copy content"),
        contenteditable: "false"
      }
    },
    e
  );
}, Rt = class Rt extends q {
  constructor(e) {
    super(e);
    T(this, "parent", null);
    this.tagName = "code", this.classList = ["mu-code"], this.createDomNode(), this.createCopyNode(), this.listen();
  }
  static create(e, s) {
    const r = new Rt(e);
    return r.append(k.loadBlock("codeblock.content").create(e, s)), r;
  }
  get path() {
    const { path: e } = this.parent;
    return [...e];
  }
  getState() {
    return qr.warn("You can never call `getState` in code"), {};
  }
  // Create the copy button at the top-right.
  createCopyNode() {
    const { i18n: e } = this.muya;
    this.domNode.innerHTML = jd(bd(e));
  }
  listen() {
    var a, l;
    const { eventCenter: e, editor: s } = this.muya, r = (m) => {
      m.preventDefault(), m.stopPropagation();
      const h = this.firstContentInDescendant();
      if (h == null) {
        qr.error("Has no code content");
        return;
      }
      s.clipboard.copy("copyCodeContent", h.text);
    }, o = (m) => {
      m.preventDefault();
    };
    e.attachDOMEvent(
      (a = this.domNode) == null ? void 0 : a.firstElementChild,
      "click",
      r
    ), e.attachDOMEvent(
      (l = this.domNode) == null ? void 0 : l.firstElementChild,
      "mousedown",
      o
    );
  }
};
T(Rt, "blockName", "code");
let Vs = Rt;
const Hr = J("table:"), Mt = class Mt extends q {
  constructor(e) {
    super(e);
    T(this, "children", new le());
    this.tagName = "figure", this.classList = ["mu-table"], this.createDomNode(), this.listenDomEvent();
  }
  static create(e, s) {
    const r = new Mt(e);
    return r.append(k.loadBlock("table.inner").create(e, s)), r;
  }
  // static createWithRowAndColumn(muya, row, column) {
  //   // TODO
  // }
  static createWithHeader(e, s) {
    const r = {
      name: "table",
      children: [
        {
          name: "table.row",
          children: s.map((o) => ({
            name: "table.cell",
            meta: { align: "none" },
            text: o
          }))
        },
        {
          name: "table.row",
          children: s.map(() => ({
            name: "table.cell",
            meta: { align: "none" },
            text: ""
          }))
        }
      ]
    };
    return this.create(e, r);
  }
  get path() {
    const { path: e } = this.parent, s = this.parent.offset(this);
    return [...e, s];
  }
  get rowCount() {
    return this.firstChild.length();
  }
  get columnCount() {
    return this.firstChild.firstChild.length();
  }
  isEmpty() {
    return this.getState().children.every(
      (s) => s.children.every((r) => r.text === "")
    );
  }
  listenDomEvent() {
    const { eventCenter: e } = this.muya, { domNode: s } = this, r = (o) => {
      if (o.target === s) {
        o.preventDefault();
        const a = this.lastContentInDescendant(), l = a.text.length;
        a.setCursor(l, l, !0);
      }
    };
    e.attachDOMEvent(s, "mousedown", r);
  }
  queryBlock(e) {
    return this.firstChild.queryBlock(e);
  }
  empty() {
    if (this.isEmpty())
      return;
    const e = this.children.head;
    e != null && e.forEach((s) => {
      s.forEach((r) => {
        r.firstChild.text = "";
      });
    });
  }
  insertRow(e) {
    const { columnCount: s } = this, r = this.getState().children[0], o = e > 0 ? this.firstChild.find(e - 1) : this.firstChild.find(e), a = {
      name: "table.row",
      children: [...new Array(s)].map((m, h) => ({
        name: "table.cell",
        meta: {
          align: r.children[h].meta.align
        },
        text: ""
      }))
    }, l = k.loadBlock("table.row").create(this.muya, a);
    return e > 0 ? this.firstChild.insertAfter(l, o) : this.firstChild.insertBefore(l, o), l.firstContentInDescendant();
  }
  insertColumn(e, s = "none") {
    const r = this.firstChild;
    let o = null;
    return r.forEach((a) => {
      const l = {
        name: "table.cell",
        meta: { align: s },
        text: ""
      }, m = k.loadBlock("table.cell").create(this.muya, l), h = a.find(e);
      a.insertBefore(m, h), o || (o = m);
    }), o.firstChild;
  }
  removeRow(e) {
    const s = this.firstChild.find(e);
    s != null && s.remove();
  }
  removeColumn(e) {
    const { columnCount: s } = this;
    if (e < 0 || e >= s) {
      Hr.warn(`column at ${e} is not existed.`);
      return;
    }
    const r = this.firstChild;
    if (this.columnCount === 1)
      return this.remove();
    r.forEach((o) => {
      const a = o.find(e);
      a && a.remove();
    });
  }
  alignColumn(e, s) {
    const { columnCount: r } = this;
    if (e < 0 || e >= r) {
      Hr.warn(`Column at ${e} is not existed.`);
      return;
    }
    this.firstChild.forEach((a) => {
      const l = a.find(e);
      if (l) {
        const { align: m } = l;
        l.align = m === s ? "none" : s;
        const h = Cn(m, l.align), { path: u } = l;
        u.push("meta", "align"), this.jsonState.editOperation(u, wn(h));
      }
    });
  }
  getState() {
    return this.firstChild.getState();
  }
};
T(Mt, "blockName", "table");
let en = Mt;
class ke {
  queryBlock(t) {
    if (typeof t[0] == "string" && /children|meta|align|type|lang/.test(t[0]) && t.shift(), t.length === 0)
      return this;
    const e = t.shift(), s = this.find(e);
    return s && t.length ? s.queryBlock(t) : s;
  }
}
var Jo = Object.defineProperty, vd = Object.getOwnPropertyDescriptor, xd = (n, t, e) => t in n ? Jo(n, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : n[t] = e, wd = (n, t, e, s) => {
  for (var r = s > 1 ? void 0 : s ? vd(t, e) : t, o = n.length - 1, a; o >= 0; o--)
    (a = n[o]) && (r = (s ? a(t, e, r) : a(r)) || r);
  return s && r && Jo(t, e, r), r;
}, kd = (n, t, e) => (xd(n, typeof t != "symbol" ? t + "" : t, e), e);
let rt = class extends q {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  constructor(t, e) {
    super(t);
    T(this, "children", new le());
    this.tagName = "table", this.classList = ["mu-table-inner"], this.createDomNode();
  }
  static create(t, e) {
    const s = new rt(t, e);
    return s.append(
      ...e.children.map(
        (r) => k.loadBlock("table.row").create(t, r)
      )
    ), s;
  }
  get path() {
    return [...this.parent.path, "children"];
  }
  getState() {
    return {
      name: "table",
      children: this.map((e) => e.getState())
    };
  }
};
kd(rt, "blockName", "table.inner");
rt = wd([
  re(ke)
], rt);
const yd = rt;
var Yo = Object.defineProperty, Sd = Object.getOwnPropertyDescriptor, Cd = (n, t, e) => t in n ? Yo(n, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : n[t] = e, Ad = (n, t, e, s) => {
  for (var r = s > 1 ? void 0 : s ? Sd(t, e) : t, o = n.length - 1, a; o >= 0; o--)
    (a = n[o]) && (r = (s ? a(t, e, r) : a(r)) || r);
  return s && r && Yo(t, e, r), r;
}, Td = (n, t, e) => (Cd(n, typeof t != "symbol" ? t + "" : t, e), e);
let ot = class extends q {
  constructor(t) {
    super(t);
    T(this, "children", new le());
    this.tagName = "tr", this.classList = ["mu-table-row"], this.createDomNode();
  }
  static create(t, e) {
    const s = new ot(t);
    return s.append(
      ...e.children.map(
        (r) => k.loadBlock("table.cell").create(t, r)
      )
    ), s;
  }
  get path() {
    const { path: t } = this.parent, e = this.parent.offset(this);
    return [...t, e];
  }
  getState() {
    return {
      name: "table.row",
      children: this.map((e) => e.getState())
    };
  }
};
Td(ot, "blockName", "table.row");
ot = Ad([
  re(ke)
], ot);
const Dd = ot;
var Xo = Object.defineProperty, $d = Object.getOwnPropertyDescriptor, Nd = (n, t, e) => t in n ? Xo(n, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : n[t] = e, Ld = (n, t, e, s) => {
  for (var r = s > 1 ? void 0 : s ? $d(t, e) : t, o = n.length - 1, a; o >= 0; o--)
    (a = n[o]) && (r = (s ? a(t, e, r) : a(r)) || r);
  return s && r && Xo(t, e, r), r;
}, Od = (n, t, e) => (Nd(n, typeof t != "symbol" ? t + "" : t, e), e);
let it = class extends q {
  constructor(t, { meta: e }) {
    super(t);
    T(this, "children", new le());
    T(this, "meta");
    this.tagName = "td", this.meta = e, this.datasets = {
      align: e.align
    }, this.classList = ["mu-table-cell"], this.createDomNode();
  }
  static create(t, e) {
    const s = new it(t, e);
    return s.append(
      k.loadBlock("table.cell.content").create(t, e.text)
    ), s;
  }
  get path() {
    const { path: t } = this.parent, e = this.parent.offset(this);
    return [...t, "children", e];
  }
  get table() {
    return this.closestBlock("table");
  }
  get row() {
    return this.closestBlock("table.row");
  }
  get rowOffset() {
    return this.table.firstChild.offset(this.row);
  }
  get columnOffset() {
    return this.row.offset(this);
  }
  get align() {
    return this.meta.align;
  }
  set align(t) {
    this.domNode.dataset.align = t, this.meta.align = t;
  }
  getState() {
    return {
      name: "table.cell",
      meta: { ...this.meta },
      text: this.firstChild.text
    };
  }
};
Od(it, "blockName", "table.cell");
it = Ld([
  re(dt)
], it);
const Ed = it, Bt = class Bt extends q {
  static create(t, e) {
    const s = new Bt(t), r = k.loadBlock("html-preview").create(
      t,
      e
    ), o = k.loadBlock("html-container").create(
      t,
      e
    );
    return s.appendAttachment(r), s.append(o), s;
  }
  get path() {
    const { path: t } = this.parent, e = this.parent.offset(this);
    return [...t, e];
  }
  constructor(t) {
    super(t), this.tagName = "figure", this.classList = [fe.MU_HTML_BLOCK];
    const { disableHtml: e } = t.options;
    e && this.classList.push(fe.MU_DISABLE_HTML_RENDER), this.createDomNode();
  }
  queryBlock(t) {
    return t.length && t[0] === "text" ? this.firstContentInDescendant() : this;
  }
  getState() {
    var e;
    return {
      name: "html-block",
      text: ((e = this.firstContentInDescendant()) == null ? void 0 : e.text) ?? ""
    };
  }
};
T(Bt, "blockName", "html-block");
let tn = Bt;
const Id = J("htmlContainer:"), qt = class qt extends q {
  static create(t, e) {
    const s = new qt(t), r = k.loadBlock("code").create(t, e);
    return s.append(r), s;
  }
  get lang() {
    return "markup";
  }
  get path() {
    const { path: t } = this.parent;
    return [...t];
  }
  constructor(t) {
    super(t), this.tagName = "pre", this.classList = ["mu-html-container"], this.createDomNode();
  }
  getState() {
    return Id.warn("You can never call `getState` in htmlContainer"), {};
  }
};
T(qt, "blockName", "html-container");
let sn = qt;
const Ht = class Ht extends q {
  constructor(e, { meta: s }) {
    super(e);
    T(this, "meta");
    this.tagName = "figure", this.meta = s, this.classList = ["mu-math-block"], this.createDomNode();
  }
  static create(e, s) {
    const r = new Ht(e, s), o = k.loadBlock("math-preview").create(
      e,
      s
    ), a = k.loadBlock("math-container").create(
      e,
      s
    );
    return r.appendAttachment(o), r.append(a), r;
  }
  get path() {
    const { path: e } = this.parent, s = this.parent.offset(this);
    return [...e, s];
  }
  queryBlock(e) {
    return e.length && e[0] === "text" ? this.firstContentInDescendant() : this;
  }
  getState() {
    var r;
    const { meta: e } = this, s = (r = this.firstContentInDescendant()) == null ? void 0 : r.text;
    if (s == null)
      throw new Error("text is null when getState in math block.");
    return {
      name: "math-block",
      text: s,
      meta: e
    };
  }
};
T(Ht, "blockName", "math-block");
let nn = Ht;
const Pd = J("mathContainer:"), Gt = class Gt extends q {
  static create(t, e) {
    const s = new Gt(t), r = k.loadBlock("code").create(t, e);
    return s.append(r), s;
  }
  get lang() {
    return "latex";
  }
  get path() {
    const { path: t } = this.parent;
    return [...t];
  }
  constructor(t) {
    super(t), this.tagName = "pre", this.classList = ["mu-math-container"], this.createDomNode();
  }
  getState() {
    return Pd.warn("You can never call `getState` in mathContainer"), {};
  }
};
T(Gt, "blockName", "math-container");
let rn = Gt;
const Rd = J("frontmatter:"), Ft = class Ft extends q {
  constructor(e, { meta: s }) {
    super(e);
    T(this, "meta");
    this.tagName = "pre", this.meta = s, this.classList = ["mu-frontmatter"], this.createDomNode();
  }
  static create(e, s) {
    const r = new Ft(e, s), { lang: o } = s.meta, a = k.loadBlock("code").create(e, s);
    return r.append(a), o && (r.lang = o), r;
  }
  get lang() {
    return this.meta.lang;
  }
  set lang(e) {
    this.meta.lang = e, e && ht(e).then((s) => {
      var o;
      if (!Array.isArray(s))
        return;
      s.some(
        ({ status: a }) => a === "loaded" || a === "cached"
      ) && ((o = this.lastContentInDescendant()) == null || o.update());
    }).catch((s) => {
      Rd.warn(s);
    });
  }
  get path() {
    const { path: e } = this.parent, s = this.parent.offset(this);
    return [...e, s];
  }
  queryBlock(e) {
    return e.length === 0 ? this : e[0] === "meta" || e[0] === "type" ? this : e[0] === "lang" ? this.firstContentInDescendant() : this.lastContentInDescendant();
  }
  getState() {
    var s;
    return {
      name: "frontmatter",
      meta: { ...this.meta },
      text: ((s = this.lastContentInDescendant()) == null ? void 0 : s.text) ?? ""
    };
  }
};
T(Ft, "blockName", "frontmatter");
let on = Ft;
const Md = J("diagram:"), zt = class zt extends q {
  constructor(e, { meta: s }) {
    super(e);
    T(this, "meta");
    this.tagName = "figure", this.meta = s, this.classList = ["mu-diagram-block"], this.createDomNode();
  }
  static create(e, s) {
    const r = new zt(e, s), { lang: o } = s.meta, a = k.loadBlock("diagram-preview").create(
      e,
      s
    ), l = k.loadBlock("diagram-container").create(
      e,
      s
    );
    return r.appendAttachment(a), r.append(l), o && ht(o).then((m) => {
      var u;
      if (!Array.isArray(m))
        return;
      m.some(
        ({ status: f }) => f === "loaded" || f === "cached"
      ) && ((u = r.lastContentInDescendant()) == null || u.update());
    }).catch((m) => {
      Md.warn(m);
    }), r;
  }
  get path() {
    const { path: e } = this.parent, s = this.parent.offset(this);
    return [...e, s];
  }
  queryBlock(e) {
    return e.length && e[0] === "text" ? this.firstContentInDescendant() : this;
  }
  getState() {
    var r;
    const { meta: e } = this, s = (r = this.firstContentInDescendant()) == null ? void 0 : r.text;
    if (s == null)
      throw new Error("text is null when getState in diagram block.");
    return {
      name: "diagram",
      text: s,
      meta: e
    };
  }
};
T(zt, "blockName", "diagram");
let an = zt;
const Bd = J("diagramContainer:"), Ut = class Ut extends q {
  constructor(e, { meta: s }) {
    super(e);
    T(this, "meta");
    this.tagName = "pre", this.meta = s, this.classList = ["mu-diagram-container"], this.createDomNode();
  }
  static create(e, s) {
    const r = new Ut(e, s), o = k.loadBlock("code").create(e, s);
    return r.append(o), r;
  }
  get lang() {
    return this.meta.lang;
  }
  get path() {
    const { path: e } = this.parent;
    return [...e];
  }
  getState() {
    return Bd.warn("You can never call `getState` in diagramContainer"), {};
  }
};
T(Ut, "blockName", "diagram-container");
let cn = Ut;
var Qo = Object.defineProperty, qd = Object.getOwnPropertyDescriptor, Hd = (n, t, e) => t in n ? Qo(n, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : n[t] = e, Gd = (n, t, e, s) => {
  for (var r = s > 1 ? void 0 : s ? qd(t, e) : t, o = n.length - 1, a; o >= 0; o--)
    (a = n[o]) && (r = (s ? a(t, e, r) : a(r)) || r);
  return s && r && Qo(t, e, r), r;
}, Fd = (n, t, e) => (Hd(n, typeof t != "symbol" ? t + "" : t, e), e);
let at = class extends q {
  static create(n, t) {
    const e = new at(n);
    for (const s of t.children)
      e.append(k.loadBlock(s.name).create(n, s));
    return e;
  }
  get path() {
    const { path: n } = this.parent, t = this.parent.offset(this);
    return [...n, t, "children"];
  }
  constructor(n) {
    super(n), this.tagName = "blockquote", this.classList = ["mu-block-quote"], this.createDomNode();
  }
  getState() {
    return {
      name: "block-quote",
      children: this.children.map((t) => t.getState())
    };
  }
};
Fd(at, "blockName", "block-quote");
at = Gd([
  re(ke)
], at);
const zd = at;
var Vo = Object.defineProperty, Ud = Object.getOwnPropertyDescriptor, Kd = (n, t, e) => t in n ? Vo(n, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : n[t] = e, Wd = (n, t, e, s) => {
  for (var r = s > 1 ? void 0 : s ? Ud(t, e) : t, o = n.length - 1, a; o >= 0; o--)
    (a = n[o]) && (r = (s ? a(t, e, r) : a(r)) || r);
  return s && r && Vo(t, e, r), r;
}, Zd = (n, t, e) => (Kd(n, typeof t != "symbol" ? t + "" : t, e), e);
let ct = class extends q {
  constructor(t, { meta: e }) {
    super(t);
    T(this, "children", new le());
    T(this, "meta");
    this.tagName = "ol", this.meta = e, this.attributes = { start: String(e.start) }, this.datasets = { delimiter: e.delimiter }, this.classList = ["mu-order-list"], e.loose || this.classList.push("mu-tight-list"), this.createDomNode();
  }
  static create(t, e) {
    const s = new ct(t, e);
    return s.append(
      ...e.children.map(
        (r) => k.loadBlock(r.name).create(t, r)
      )
    ), s;
  }
  get path() {
    const { path: t } = this.parent, e = this.parent.offset(this);
    return [...t, e, "children"];
  }
  getState() {
    return {
      name: "order-list",
      meta: { ...this.meta },
      children: this.children.map((e) => e.getState())
    };
  }
};
Zd(ct, "blockName", "order-list");
ct = Wd([
  re(ke)
], ct);
const Jd = ct;
var ei = Object.defineProperty, Yd = Object.getOwnPropertyDescriptor, Xd = (n, t, e) => t in n ? ei(n, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : n[t] = e, Qd = (n, t, e, s) => {
  for (var r = s > 1 ? void 0 : s ? Yd(t, e) : t, o = n.length - 1, a; o >= 0; o--)
    (a = n[o]) && (r = (s ? a(t, e, r) : a(r)) || r);
  return s && r && ei(t, e, r), r;
}, Vd = (n, t, e) => (Xd(n, typeof t != "symbol" ? t + "" : t, e), e);
let lt = class extends q {
  constructor(t) {
    super(t);
    T(this, "children", new le());
    this.tagName = "li", this.classList = ["mu-list-item"], this.createDomNode();
  }
  static create(t, e) {
    const s = new lt(t);
    return s.append(
      ...e.children.map(
        (r) => k.loadBlock(r.name).create(t, r)
      )
    ), s;
  }
  get path() {
    const { path: t } = this.parent, e = this.parent.offset(this);
    return [...t, e, "children"];
  }
  getState() {
    return {
      name: "list-item",
      children: this.children.map((e) => e.getState())
    };
  }
};
Vd(lt, "blockName", "list-item");
lt = Qd([
  re(ke)
], lt);
const eh = lt;
var ti = Object.defineProperty, th = Object.getOwnPropertyDescriptor, sh = (n, t, e) => t in n ? ti(n, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : n[t] = e, nh = (n, t, e, s) => {
  for (var r = s > 1 ? void 0 : s ? th(t, e) : t, o = n.length - 1, a; o >= 0; o--)
    (a = n[o]) && (r = (s ? a(t, e, r) : a(r)) || r);
  return s && r && ti(t, e, r), r;
}, rh = (n, t, e) => (sh(n, typeof t != "symbol" ? t + "" : t, e), e);
let pt = class extends q {
  constructor(t, { meta: e }) {
    super(t);
    T(this, "children", new le());
    T(this, "meta");
    this.tagName = "ul", this.meta = e, this.datasets = {
      marker: e.marker
    }, this.classList = ["mu-bullet-list"], e.loose || this.classList.push("mu-tight-list"), this.createDomNode();
  }
  static create(t, e) {
    const s = new pt(t, e);
    return s.append(
      ...e.children.map(
        (r) => k.loadBlock(r.name).create(t, r)
      )
    ), s;
  }
  get path() {
    const { path: t } = this.parent, e = this.parent.offset(this);
    return [...t, e, "children"];
  }
  getState() {
    return {
      name: "bullet-list",
      meta: { ...this.meta },
      children: this.children.map(
        (e) => e.getState()
      )
    };
  }
};
rh(pt, "blockName", "bullet-list");
pt = nh([
  re(ke)
], pt);
const oh = pt;
var si = Object.defineProperty, ih = Object.getOwnPropertyDescriptor, ah = (n, t, e) => t in n ? si(n, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : n[t] = e, ch = (n, t, e, s) => {
  for (var r = s > 1 ? void 0 : s ? ih(t, e) : t, o = n.length - 1, a; o >= 0; o--)
    (a = n[o]) && (r = (s ? a(t, e, r) : a(r)) || r);
  return s && r && si(t, e, r), r;
}, lh = (n, t, e) => (ah(n, typeof t != "symbol" ? t + "" : t, e), e);
let mt = class extends q {
  constructor(t, { meta: e }) {
    super(t);
    T(this, "meta");
    this.tagName = "ul", this.meta = e, this.datasets = {
      marker: e.marker
    }, this.classList = ["mu-task-list"], e.loose || this.classList.push("mu-tight-list"), this.createDomNode();
  }
  static create(t, e) {
    const s = new mt(t, e);
    return s.append(
      ...e.children.map(
        (r) => k.loadBlock(r.name).create(t, r)
      )
    ), s;
  }
  get path() {
    const { path: t } = this.parent, e = this.parent.offset(this);
    return [...t, e, "children"];
  }
  /**
   * Auto move checked list item to the end of task list.
   */
  orderIfNecessary() {
    const { autoMoveCheckedToEnd: t } = this.muya.options;
    if (!t)
      return;
    let e = this.firstChild, s = this.lastChild, r = e;
    for (; e !== s; )
      if (!e.checked)
        e = e.next, r = e;
      else if (s.checked)
        s = s.prev;
      else {
        const o = s;
        s = s.prev, o.insertInto(this, r), r = o;
      }
  }
  getState() {
    return {
      name: "task-list",
      meta: { ...this.meta },
      children: this.children.map((e) => e.getState())
    };
  }
};
lh(mt, "blockName", "task-list");
mt = ch([
  re(ke)
], mt);
const ph = mt;
var ni = Object.defineProperty, mh = Object.getOwnPropertyDescriptor, uh = (n, t, e) => t in n ? ni(n, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : n[t] = e, dh = (n, t, e, s) => {
  for (var r = s > 1 ? void 0 : s ? mh(t, e) : t, o = n.length - 1, a; o >= 0; o--)
    (a = n[o]) && (r = (s ? a(t, e, r) : a(r)) || r);
  return s && r && ni(t, e, r), r;
}, hh = (n, t, e) => (uh(n, typeof t != "symbol" ? t + "" : t, e), e);
let ut = class extends q {
  constructor(t, { meta: e }) {
    super(t);
    T(this, "children", new le());
    T(this, "meta");
    this.tagName = "li", this.meta = e, this.classList = ["mu-task-list-item"], this.createDomNode();
  }
  static create(t, e) {
    const s = new ut(t, e);
    return s.appendAttachment(
      k.loadBlock("task-list-checkbox").create(t, e.meta)
    ), s.append(
      ...e.children.map(
        (r) => k.loadBlock(r.name).create(t, r)
      )
    ), s;
  }
  get path() {
    const { path: t } = this.parent, e = this.parent.offset(this);
    return [...t, e, "children"];
  }
  get checked() {
    return this.meta.checked;
  }
  set checked(t) {
    const e = this.meta.checked;
    if (t !== e) {
      this.meta.checked = t;
      const { path: s } = this;
      s.pop(), s.push("meta", "checked"), this.jsonState.replaceOperation(s, e, t);
    }
  }
  getState() {
    return {
      name: "task-list-item",
      meta: { ...this.meta },
      children: this.children.map((e) => e.getState())
    };
  }
};
hh(ut, "blockName", "task-list-item");
ut = dh([
  re(ke)
], ut);
const fh = ut;
class ms extends rs {
  constructor(e, s) {
    super(e);
    T(this, "_text");
    T(this, "isComposed");
    T(this, "keydownHandler", (e) => {
      if (Oe(e)) {
        if (this.muya.ui.shownFloat.size > 0 && (e.key === z.Enter || e.key === z.Escape || e.key === z.Tab || e.key === z.ArrowUp || e.key === z.ArrowDown)) {
          let s = !1;
          for (const r of this.muya.ui.shownFloat)
            if (r.name === "mu-format-picker" || r.name === "mu-table-picker" || r.name === "mu-quick-insert" || r.name === "mu-emoji-picker" || r.name === "mu-front-menu" || r.name === "mu-list-picker" || r.name === "mu-image-selector" || r.name === "mu-table-column-tools" || r.name === "mu-table-bar-tools") {
              s = !0;
              break;
            }
          s && e.preventDefault();
          return;
        }
        switch (e.key) {
          case z.Backspace:
            this.backspaceHandler(e);
            break;
          case z.Delete:
            this.deleteHandler(e);
            break;
          case z.Enter:
            this.isComposed || this.enterHandler(e);
            break;
          case z.ArrowUp:
          case z.ArrowDown:
          case z.ArrowLeft:
          case z.ArrowRight:
            this.isComposed || this.arrowHandler(e);
            break;
          case z.Tab:
            this.tabHandler(e);
            break;
        }
      }
    });
    this.tagName = "span", this.classList = ["mu-content"], this.attributes = {
      contenteditable: !0
    }, this._text = s, this.isComposed = !1;
  }
  get hasSelection() {
    return !!this.getCursor();
  }
  get selection() {
    return this.muya.editor.selection;
  }
  get inlineRenderer() {
    return this.muya.editor.inlineRenderer;
  }
  get path() {
    if (this.parent == null)
      return ["text"];
    const { path: e } = this.parent;
    return [...e, "text"];
  }
  get text() {
    return this._text;
  }
  set text(e) {
    const s = this._text;
    this._text = e;
    const { path: r } = this;
    if (this.blockName === "language-input" && (r.pop(), r.push("meta", "lang")), s !== e) {
      const o = Cn(s, e);
      this.jsonState.editOperation(r, wn(o));
    }
  }
  get isCollapsed() {
    const { isCollapsed: e } = this.getCursor() ?? {};
    return e;
  }
  get isContainerBlock() {
    return !1;
  }
  getAnchor() {
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  clickHandler(e) {
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  tabHandler(e) {
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  keyupHandler(e) {
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  inputHandler(e) {
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  backspaceHandler(e) {
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  enterHandler(e) {
  }
  deleteHandler(e) {
    const { start: s, end: r } = this.getCursor(), { text: o } = this;
    if (s.offset === r.offset && s.offset === o.length) {
      e.preventDefault();
      return;
    }
  }
  arrowHandler(e) {
    var i;
    if (!Oe(e))
      return;
    const s = this.previousContentInContext(), r = this.nextContentInContext(), { start: o, end: a } = this.getCursor(), { topOffset: l, bottomOffset: m } = Zr.getCursorYOffset(
      this.domNode
    );
    if (o.offset !== a.offset || e.shiftKey || e.key === z.ArrowUp && l > 0 || e.key === z.ArrowDown && m > 0)
      return;
    const { muya: h } = this;
    let u = null, f = 0;
    if (e.key === z.ArrowUp || e.key === z.ArrowLeft && o.offset === 0) {
      if (e.preventDefault(), e.stopPropagation(), !s)
        return;
      u = s, f = s.text.length;
    } else if (e.key === z.ArrowDown || e.key === z.ArrowRight && o.offset === this.text.length) {
      if (e.preventDefault(), e.stopPropagation(), r)
        u = r;
      else {
        const c = {
          name: "paragraph",
          text: ""
        }, p = k.loadBlock(c.name).create(
          h,
          c
        );
        (i = this.scrollPage) == null || i.append(p, "user"), u = p.children.head;
      }
      f = Jr(0, u, e);
    }
    u && (this.update(), u.setCursor(f, f, !0));
  }
  createDomNode() {
    super.createDomNode(), this.update();
  }
  /**
   * Get cursor if selection is in this block.
   */
  getCursor() {
    const e = this.selection.getSelection();
    if (e == null)
      return null;
    const {
      anchor: s,
      focus: r,
      anchorBlock: o,
      focusBlock: a,
      isCollapsed: l,
      isSelectionInSameBlock: m,
      // This is always be true.
      direction: h,
      type: u
    } = e;
    return o !== this || a !== this ? null : {
      start: { offset: Math.min(s.offset, r.offset) },
      end: { offset: Math.max(s.offset, r.offset) },
      anchor: s,
      focus: r,
      isCollapsed: l,
      isSelectionInSameBlock: m,
      direction: h,
      type: u
    };
  }
  /**
   * Set cursor at the special position
   * @param {number} begin
   * @param {number} end
   * @param {boolean} needUpdate
   */
  setCursor(e, s, r = !1) {
    const o = {
      anchor: { offset: e },
      focus: { offset: s },
      block: this,
      path: this.path
    };
    r && this.update(o), this.muya.editor.activeContentBlock = this, this.selection.setSelection(o);
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  update(e, s = []) {
    const { text: r } = this;
    this.domNode.innerHTML = `<span class="mu-syntax-text">${r}</span>`;
  }
  composeHandler(e) {
    e.type === "compositionstart" ? this.isComposed = !0 : e.type === "compositionend" && (this.isComposed = !1, this.inputHandler(e));
  }
  /**
   * used in input handler
   * @param {input event} event
   */
  autoPair(e, s, r, o, a = !1, l = !1, m = "format") {
    const { anchor: h, focus: u } = this.selection, f = h.offset <= u.offset ? h : u;
    let i = !1;
    if (!Ba(e) || !f)
      return { text: s, needRender: i };
    if (this.text !== s) {
      if (r.offset === o.offset && e.type === "input") {
        const { offset: c } = r, { autoPairBracket: p, autoPairMarkdownSyntax: g, autoPairQuote: j } = this.muya.options, b = s.charAt(+c - 1), x = s.charAt(+c - 2), y = s.charAt(+c - 3), w = s.charAt(+c);
        if (/^delete/.test(e.inputType)) {
          const C = this.text[c];
          e.inputType === "deleteContentBackward" && w === As[C] && (i = !0, s = s.substring(0, c) + s.substring(c + 1)), e.inputType === "deleteContentForward" && b === qa[C] && (i = !0, r.offset -= 1, o.offset -= 1, s = s.substring(0, c - 1) + s.substring(c));
        } else
          e.inputType.indexOf("delete") === -1 && b === w && (j && /[']{1}/.test(b) || j && /["]{1}/.test(b) || p && /[}\])]{1}/.test(b) || g && /[$]{1}/.test(b) || g && /[*$`~_]{1}/.test(b) && /[_*~]{1}/.test(y)) ? (i = !0, s = s.substring(0, c) + s.substring(c + 1)) : (!/\\/.test(x) && (j && /[']{1}/.test(b) && !/[a-zA-Z\d]{1}/.test(x) || j && /["]{1}/.test(b) || p && /[{[(]{1}/.test(b) || m === "format" && !a && !l && g && !/[a-z0-9]{1}/i.test(x) && /[*$`~_]{1}/.test(b)) && (i = !0, s = typeof e.data == "string" && As[e.data] ? s.substring(0, c) + As[b] + s.substring(c) : s), m === "format" && typeof e.data == "string" && /\s/.test(e.data) && /^\* /.test(s) && x === "*" && w === "*" && (s = s.substring(0, c) + s.substring(c + 1), i = !0));
      }
      this.text.endsWith(`
`) && r.offset === s.length && (e.inputType === "insertText" || e.type === "compositionend") ? (s = this.text + e.data, Me || (r.offset++, o.offset++)) : this.text.length === f.offset && this.text[f.offset - 2] === `
` && e.inputType === "deleteContentBackward" && (s = this.text.substring(0, f.offset - 1), r.offset = s.length, o.offset = s.length);
    }
    return { text: s, needRender: i };
  }
  insertTab() {
    const { muya: e, text: s } = this, { tabSize: r } = e.options, o = " ".repeat(r), { start: a, end: l } = this.getCursor();
    if (this.isCollapsed) {
      this.text = s.substring(0, a.offset) + o + s.substring(l.offset);
      const m = a.offset + o.length;
      this.setCursor(m, m, !0);
    }
  }
  blurHandler() {
    var e;
    (e = this.scrollPage) == null || e.handleBlurFromContent(this);
  }
  focusHandler() {
    var e;
    (e = this.scrollPage) == null || e.handleFocusFromContent(this);
  }
  getAncestors() {
    const e = [];
    let s = this.parent;
    for (; s && s.isParent && s.isParent(); )
      e.push(s), s = s.parent;
    return e;
  }
  getCommonAncestors(e) {
    const s = this.getAncestors(), r = e.getAncestors(), o = [];
    for (const a of s)
      r.includes(a) && o.push(a);
    return o;
  }
  remove(e = "user") {
    return super.remove(e), this;
  }
}
T(ms, "blockName", "content");
const gh = J("block.format:");
function _h(n) {
  return n.type === "emoji";
}
const jh = [
  `(?:^|
) {0,3}([*+-] {1,4})`,
  // Bullet list
  "^(\\[[x ]{1}\\] {1,4})",
  // Task list **match from beginning**
  `(?:^|
) {0,3}(\\d{1,9}(?:\\.|\\)) {1,4})`,
  // Order list
  `(?:^|
) {0,3}(#{1,6})(?=\\s{1,}|$)`,
  // ATX headings
  "^(?:[\\s\\S]+?)\\n {0,3}(\\={3,}|\\-{3,})(?= {1,}|$)",
  // Setext headings **match from beginning**
  `(?:^|
) {0,3}(>).+`,
  // Block quote
  "^( {4,})",
  // Indent code **match from beginning**
  // '^(\\[\\^[^\\^\\[\\]\\s]+?(?<!\\\\)\\]: )', // Footnote **match from beginning**
  `(?:^|
) {0,3}((?:\\* *\\* *\\*|- *- *-|_ *_ *_)[ \\*\\-\\_]*)(?=
|$)`
  // Thematic break
], bh = new RegExp(jh.join("|"), "i");
function Gr(n, t) {
  const {
    range: { start: e, end: s },
    type: r
  } = t, o = n - e, a = s - e;
  switch (r) {
    case "strong":
    case "del":
    case "em":
    case "inline_code":
    case "inline_math": {
      const l = r === "strong" || r === "del" ? 2 : 1;
      if (o < 0)
        return 0;
      if (o >= 0 && o < l)
        return -o;
      if (o >= l && o <= a - l)
        return -l;
      if (o > a - l && o <= a)
        return a - o - 2 * l;
      if (o > a)
        return -2 * l;
      break;
    }
    case "html_tag": {
      const { tag: l } = t, m = qs[l].open.length, h = qs[l].close.length;
      if (o < 0)
        return 0;
      if (o >= 0 && o < m)
        return -o;
      if (o >= m && o <= a - h)
        return -m;
      if (o > a - h && o <= a)
        return a - o - m - h;
      if (o > a)
        return -m - h;
      break;
    }
    case "link": {
      const { anchor: l } = t, m = 1;
      if (o < m)
        return 0;
      if (o >= m && o <= m + l.length)
        return -1;
      if (o > m + l.length)
        return l.length - o;
      break;
    }
    case "image": {
      const { alt: l } = t, m = 1;
      if (o < m)
        return 0;
      if (o >= m && o < m * 2)
        return -1;
      if (o >= m * 2 && o <= m * 2 + l.length)
        return -2;
      if (o > m * 2 + l.length)
        return l.length - o;
      break;
    }
  }
}
function Ms(n, t) {
  switch (n.type) {
    case "strong":
    case "del":
    case "em":
    case "link":
    case "html_tag": {
      const { parent: r, children: o } = n, a = r.indexOf(n);
      r.splice(a, 1, ...o);
      break;
    }
    case "image": {
      const { parent: r, range: o } = n, a = r.indexOf(n), l = {
        type: "text",
        raw: n.alt,
        content: n.alt,
        // maybe src is better?
        parent: r,
        range: o
        // the range is wrong, but it will not be used.
      };
      r.splice(a, 1, l);
      break;
    }
    case "inline_math":
    case "inline_code": {
      const { parent: r, range: o } = n, a = r.indexOf(n), l = {
        type: "text",
        raw: n.content,
        content: n.content,
        parent: r,
        range: o
        // the range is wrong, but it will not be used.
      };
      r.splice(a, 1, l);
      break;
    }
  }
  const e = t.start, s = t.end;
  if (e) {
    const r = Gr(e.offset, n);
    e.delta += r;
  }
  if (s) {
    const r = Gr(s.offset, n);
    s.delta += r;
  }
}
const Fr = (n) => {
  const { type: t } = n;
  return Fa.includes(t) ? !0 : t === "html_tag" ? /^(?:u|sub|sup|mark)$/i.test(n.tag) : !1;
};
class Fe extends ms {
  _checkCursorInTokenType(t, e, s) {
    const r = De(t, {
      hasBeginRules: !1,
      options: this.muya.options
    });
    let o = null;
    const a = (l) => {
      for (const m of l) {
        if (m.range.start > e)
          break;
        if (m.type === s && e > m.range.start && e < m.range.end) {
          o = m;
          break;
        } else
          "children" in m && Array.isArray(m.children) && a(m.children);
      }
    };
    return a(r), o;
  }
  _checkNotSameToken(t, e) {
    const { options: s } = this.muya, r = De(t, {
      options: s
    }), o = De(e, {
      options: s
    }), a = {}, l = {};
    for (const { type: m } of r)
      a[m] ? a[m]++ : a[m] = 1;
    for (const { type: m } of o)
      l[m] ? l[m]++ : l[m] = 1;
    if (Object.keys(a).length !== Object.keys(l).length)
      return !0;
    for (const m of Object.keys(a))
      if (!l[m] || a[m] !== l[m])
        return !0;
    return !1;
  }
  // TODO: @JOCS remove use this.selection directly
  checkNeedRender(t = this.selection) {
    const { labels: e } = this.inlineRenderer, { text: s } = this, { start: r, end: o, anchor: a, focus: l } = t, m = r ? r.offset : a.offset, h = o ? o.offset : l.offset, u = /text|hard_line_break|soft_line_break/;
    for (const f of De(s, {
      labels: e,
      options: this.muya.options
    })) {
      if (u.test(f.type))
        continue;
      const { start: i, end: c } = f.range, p = s.length;
      if (er(
        [Math.max(0, i - 1), Math.min(p, c + 1)],
        [m, m]
      ) || er(
        [Math.max(0, i - 1), Math.min(p, c + 1)],
        [h, h]
      ))
        return !0;
    }
    return !1;
  }
  blurHandler() {
    super.blurHandler(), this.checkNeedRender() && this.update();
  }
  /**
   * Update emoji text if cursor is in emoji syntax.
   * @param {string} text emoji text
   */
  setEmoji(t) {
    const { anchor: e } = this.selection, s = this._checkCursorInTokenType(
      this.text,
      e.offset,
      "emoji"
    );
    if (s) {
      const { start: r, end: o } = s.range, a = this.text;
      this.text = a.substring(0, r) + `:${t}:` + a.substring(o);
      const l = r + t.length + 2;
      this.setCursor(l, l, !0);
    }
  }
  replaceImage({ token: t }, { alt: e = "", src: s = "", title: r = "" }) {
    const { type: o } = t, { start: a, end: l } = t.range, m = this.text;
    let h = "";
    if (o === "image")
      h = "![", e && (h += e), h += "](", s && (h += s.replace(/ /g, encodeURI(" ")).replace(/#/g, encodeURIComponent("#"))), r && (h += ` "${r}"`), h += ")";
    else if (o === "html_tag") {
      const { attrs: u } = t;
      Object.assign(u, { alt: e, src: s, title: r }), h = "<img ";
      for (const f of Object.keys(u)) {
        let i = u[f];
        i && f === "src" && (i = tr(i)), h += `${f}="${i}" `;
      }
      h = h.trim(), h += ">";
    }
    this.text = m.substring(0, a) + h + m.substring(l), this.update();
  }
  updateImage({ imageId: t, token: e }, s, r) {
    const { start: o, end: a } = e.range, l = this.text;
    let m = "";
    const h = Object.assign({}, e.attrs);
    h[s] = r, m = "<img ";
    for (const i of Object.keys(h)) {
      let c = h[i];
      c && i === "src" && (c = tr(c)), m += `${i}="${c}" `;
    }
    m = m.trim(), m += ">", this.text = l.substring(0, o) + m + l.substring(a), this.update();
    const u = `#${t.indexOf("_") > -1 ? t : t + "_" + e.range.start} img`, f = document.querySelector(u);
    f && f.click();
  }
  deleteImage({ token: t }) {
    const e = this.text, { start: s, end: r } = t.range, { eventCenter: o } = this.muya;
    this.text = e.substring(0, s) + e.substring(r), this.setCursor(s, s, !0), o.emit("muya-transformer", { reference: null }), o.emit("muya-image-toolbar", { reference: null });
  }
  clickHandler(t) {
    if (!vn(t))
      return;
    const { target: e } = t, s = e.closest(`.${fe.MU_MATH_RENDER}`) || e.closest(`.${fe.MU_RUBY_RENDER}`);
    if (s)
      return this._handleClickInlineRuleRender(t, s);
    requestAnimationFrame(() => {
      if (t.shiftKey && this.selection.anchorBlock !== this)
        return;
      const r = this.getCursor();
      if (!r)
        return;
      const o = Object.assign({}, r, {
        block: this,
        path: this.path
      });
      if ((this.selection.anchorBlock === this ? this.checkNeedRender(o) || this.checkNeedRender() : this.checkNeedRender(o)) && this.update(o), this.selection.setSelection(o), o.start.offset !== o.end.offset) {
        const l = Ts();
        this.muya.eventCenter.emit("muya-format-picker", {
          reference: l,
          block: this
        });
      }
    });
  }
  keyupHandler() {
    if (this.isComposed)
      return;
    const {
      anchor: t,
      focus: e,
      isSelectionInSameBlock: s
    } = this.selection;
    if (!s)
      return;
    const { anchor: r, focus: o } = this.getCursor();
    if (r.offset !== (t == null ? void 0 : t.offset) || o.offset !== (e == null ? void 0 : e.offset)) {
      const l = this.checkNeedRender({ anchor: r, focus: o }), m = { anchor: r, focus: o, block: this, path: this.path };
      l && this.update(m), this.selection.setSelection(m);
    }
    if (this._checkCursorInTokenType(
      this.text,
      r.offset,
      "emoji"
    ) || this.muya.eventCenter.emit("muya-emoji-picker", {
      emojiText: ""
    }), r.offset !== o.offset) {
      const l = Ts();
      this.muya.eventCenter.emit("muya-format-picker", {
        reference: l,
        block: this
      });
    }
  }
  inputHandler(t) {
    if (this.isComposed || /historyUndo|historyRedo/.test(t.inputType))
      return;
    const { domNode: e } = this, { start: s, end: r } = this.getCursor(), o = Ha(e, [
      fe.MU_MATH_RENDER,
      fe.MU_RUBY_RENDER
    ]), a = !!this._checkCursorInTokenType(
      o,
      s.offset,
      "inline_math"
    ), l = !!this._checkCursorInTokenType(
      o,
      s.offset,
      "inline_code"
    );
    let { needRender: m, text: h } = this.autoPair(
      t,
      o,
      s,
      r,
      a,
      l,
      "format"
    );
    this._checkNotSameToken(this.text, h) && (m = !0), this.text = h;
    const u = {
      path: this.path,
      block: this,
      anchor: {
        offset: s.offset
      },
      focus: {
        offset: r.offset
      }
    };
    if ((this.checkNeedRender(u) || m) && this.update(u), this.selection.setSelection(u), t.inputType !== "insertFromPaste" && t.inputType !== "deleteByCut") {
      const i = this._checkCursorInTokenType(
        this.text,
        s.offset,
        "emoji"
      );
      if (i && _h(i)) {
        const { content: c } = i, p = Ts();
        this.muya.eventCenter.emit("muya-emoji-picker", {
          reference: p,
          emojiText: c,
          block: this
        });
      }
    }
    this.blockName !== "table.cell.content" && this._convertIfNeeded();
  }
  _convertIfNeeded() {
    const { text: t } = this, [
      e,
      s,
      r,
      o,
      a,
      l,
      m,
      h,
      u
    ] = t.match(bh) || [];
    switch (!0) {
      case (!!u && new Set(u.split("").filter((f) => /\S/.test(f))).size === 1):
        this._convertToThematicBreak();
        break;
      case !!s:
        this._convertToList();
        break;
      case !!o:
        this._convertToList();
        break;
      case !!r:
        this.convertToTaskList();
        break;
      case !!a:
        this._convertToAtxHeading(a);
        break;
      case !!l:
        this._convertToSetextHeading(l);
        break;
      case !!m:
        this._convertToBlockQuote();
        break;
      case !!h:
        this._convertToIndentedCodeBlock();
        break;
      case !e:
      default:
        this.convertToParagraph();
        break;
    }
  }
  // Thematic Break
  _convertToThematicBreak() {
    var c;
    if (((c = this.parent) == null ? void 0 : c.blockName) === "thematic-break")
      return;
    const { hasSelection: t } = this, { start: e, end: s } = this.getCursor(), { text: r, muya: o } = this, a = r.split(`
`), l = [];
    let m = "";
    const h = [];
    let u = !1;
    for (const p of a)
      // eslint-disable-next-line no-useless-escape
      / {0,3}(?:\* *\* *\*|- *- *-|_ *_ *_)[ \*\-\_]*$/.test(p) && !u ? (m = p, u = !0) : u ? h.push(p) : l.push(p);
    const f = Object.assign({}, Ga, {
      text: m
    });
    if (l.length) {
      const p = Object.assign({}, sr, {
        text: l.join(`
`)
      }), g = k.loadBlock(
        p.name
      ).create(o, p);
      this.parent.parent.insertBefore(g, this.parent);
    }
    if (h.length) {
      const p = Object.assign({}, sr, {
        text: h.join(`
`)
      }), g = k.loadBlock(
        p.name
      ).create(o, p);
      this.parent.parent.insertAfter(g, this.parent);
    }
    const i = k.loadBlock(f.name).create(
      o,
      f
    );
    if (this.parent.replaceWith(i), t) {
      const p = i.children.head, g = l.reduce(
        (x, y) => x + y.length + 1,
        0
      ), j = Math.max(0, e.offset - g), b = Math.max(0, s.offset - g);
      p.setCursor(j, b, !0);
    }
  }
  _convertToList() {
    const { text: t, parent: e, muya: s, hasSelection: r } = this, { preferLooseListItem: o } = s.options, a = t.match(
      /^([\s\S]*?) {0,3}([*+-]|\d{1,9}(?:\.|\))) {1,4}([\s\S]*)$/
    ), l = /\d/.test(a[2]) ? "order-list" : "bullet-list";
    if (a[1]) {
      const i = {
        name: "paragraph",
        text: a[1].trim()
      }, c = k.loadBlock(i.name).create(
        s,
        i
      );
      e.parent.insertBefore(c, e);
    }
    const m = {
      name: l,
      meta: {
        loose: o
      },
      children: [
        {
          name: "list-item",
          children: [
            {
              name: "paragraph",
              text: a[3]
            }
          ]
        }
      ]
    };
    l === "order-list" ? (m.meta.delimiter = a[2].slice(-1), m.meta.start = Number(
      a[2].slice(0, -1)
    )) : m.meta.marker = a[2];
    const h = k.loadBlock(m.name).create(s, m);
    e.replaceWith(h);
    const u = h.firstContentInDescendant();
    r && u.setCursor(0, 0, !0), /^\[[x ]\] {1,4}/i.test(u.text) && u.convertToTaskList();
  }
  convertToTaskList() {
    const { text: t, parent: e, muya: s, hasSelection: r } = this, { preferLooseListItem: o } = s.options, a = e.parent, l = a == null ? void 0 : a.parent, m = t.match(/^\[([x ]{1})\] {1,4}([\s\S]*)$/i);
    if (!l || l.blockName !== "bullet-list" || !e.isFirstChild() || m == null)
      return;
    const h = {
      name: "task-list",
      meta: {
        loose: o,
        marker: l.meta.marker
      },
      children: [
        {
          name: "task-list-item",
          meta: {
            checked: m[1] !== " "
          },
          children: a.map((f) => f === e ? {
            name: "paragraph",
            text: m[2]
          } : f.getState())
        }
      ]
    }, u = k.loadBlock(h.name).create(
      s,
      h
    );
    switch (!0) {
      case a.isOnlyChild():
        l.replaceWith(u);
        break;
      case a.isFirstChild():
        l.parent.insertBefore(u, l), a.remove();
        break;
      case a.isLastChild():
        l.parent.insertAfter(u, l), a.remove();
        break;
      default: {
        const f = {
          name: "bullet-list",
          meta: {
            loose: o,
            marker: l.meta.marker
          },
          children: []
        }, i = l.offset(a);
        l.forEachAt(i + 1, void 0, (p) => {
          f.children.push(p.getState()), p.remove();
        });
        const c = k.loadBlock(f.name).create(
          s,
          f
        );
        l.parent.insertAfter(u, l), u.parent.insertAfter(c, u), a.remove();
        break;
      }
    }
    r && u.firstContentInDescendant().setCursor(0, 0, !0);
  }
  // ATX Heading
  _convertToAtxHeading(t) {
    const e = t.length;
    if (this.parent.blockName === "atx-heading" && this.parent.meta.level === e)
      return;
    const { hasSelection: s } = this, { start: r, end: o } = this.getCursor(), { text: a, muya: l } = this, m = a.split(`
`), h = [];
    let u = "";
    const f = [];
    let i = !1;
    for (const g of m)
      /^ {0,3}#{1,6}(?=\s{1,}|$)/.test(g) && !i ? (u = g, i = !0) : i ? f.push(g) : h.push(g);
    if (h.length) {
      const g = {
        name: "paragraph",
        text: h.join(`
`)
      }, j = k.loadBlock(
        g.name
      ).create(l, g);
      this.parent.parent.insertBefore(j, this.parent);
    }
    if (f.length) {
      const g = {
        name: "paragraph",
        text: f.join(`
`)
      }, j = k.loadBlock(
        g.name
      ).create(l, g);
      this.parent.parent.insertAfter(j, this.parent);
    }
    const c = {
      name: "atx-heading",
      meta: {
        level: e
      },
      text: u
    }, p = k.loadBlock(c.name).create(
      l,
      c
    );
    if (this.parent.replaceWith(p), s) {
      const g = p.children.head, j = h.reduce(
        (y, w) => y + w.length + 1,
        0
      ), b = Math.max(0, r.offset - j), x = Math.max(0, o.offset - j);
      g.setCursor(b, x, !0);
    }
  }
  // Setext Heading
  _convertToSetextHeading(t) {
    var i;
    const e = /=/.test(t) ? 2 : 1;
    if (((i = this.parent) == null ? void 0 : i.blockName) === "setext-heading" && this.parent.meta.level === e)
      return;
    const { hasSelection: s } = this, { text: r, muya: o } = this, a = r.split(`
`), l = [], m = [];
    let h = !1;
    for (const c of a)
      /^ {0,3}(?:={3,}|-{3,})(?= {1,}|$)/.test(c) && !h ? h = !0 : h ? m.push(c) : l.push(c);
    const u = {
      name: "setext-heading",
      meta: {
        level: e,
        underline: t
      },
      text: l.join(`
`)
    }, f = k.loadBlock(u.name).create(
      o,
      u
    );
    if (this.parent.replaceWith(f), m.length) {
      const c = {
        name: "paragraph",
        text: m.join(`
`)
      }, p = k.loadBlock(
        c.name
      ).create(o, c);
      f.parent.insertAfter(
        p,
        f
      );
    }
    if (s) {
      const c = f.children.head, p = c.text.length;
      c.setCursor(p, p, !0);
    }
  }
  // Block Quote
  _convertToBlockQuote() {
    const { text: t, muya: e, hasSelection: s } = this, { start: r, end: o } = this.getCursor(), a = t.split(`
`), l = [], m = [];
    let h = !1, u = 0;
    for (const p of a)
      if (/^ {0,3}>/.test(p) && !h) {
        h = !0;
        const g = /( *> *)(.*)/.exec(p);
        u = g[1].length, m.push(g[2]);
      } else
        h ? m.push(p) : l.push(p);
    let f;
    this.blockName === "setextheading.content" ? f = {
      name: "setext-heading",
      meta: this.parent.meta,
      text: m.join(`
`)
    } : this.blockName === "atxheading.content" ? f = {
      name: "atx-heading",
      meta: this.parent.meta,
      text: m.join(" ")
    } : f = {
      name: "paragraph",
      text: m.join(`
`)
    };
    const i = {
      name: "block-quote",
      children: [f]
    }, c = k.loadBlock(i.name).create(
      e,
      i
    );
    if (this.parent.replaceWith(c), l.length) {
      const p = {
        name: "paragraph",
        text: l.join(`
`)
      }, g = k.loadBlock(
        p.name
      ).create(e, p);
      c.parent.insertBefore(g, c);
    }
    s && c.children.head.children.head.setCursor(
      Math.max(0, r.offset - u),
      Math.max(0, o.offset - u),
      !0
    );
  }
  // Indented Code Block
  _convertToIndentedCodeBlock() {
    const { text: t, muya: e, hasSelection: s } = this, r = t.split(`
`), o = [], a = [];
    let l = !0;
    for (const u of r)
      /^ {4,}/.test(u) && l ? o.push(u.replace(/^ {4}/, "")) : (l = !1, a.push(u));
    const m = {
      name: "code-block",
      meta: {
        lang: "",
        type: "indented"
      },
      text: o.join(`
`)
    }, h = k.loadBlock(m.name).create(
      e,
      m
    );
    if (this.parent.replaceWith(h), a.length > 0) {
      const u = {
        name: "paragraph",
        text: a.join(`
`)
      }, f = k.loadBlock(u.name).create(
        e,
        u
      );
      h.parent.insertAfter(f, h);
    }
    s && h.lastContentInDescendant().setCursor(0, 0);
  }
  // Paragraph
  convertToParagraph(t = !1) {
    if (!t && (this.parent.blockName === "setext-heading" || this.parent.blockName === "paragraph"))
      return;
    const { text: e, muya: s, hasSelection: r } = this, { start: o, end: a } = this.getCursor(), l = {
      name: "paragraph",
      text: e
    }, m = k.loadBlock(l.name).create(
      s,
      l
    );
    this.parent.replaceWith(m), r && m.children.head.setCursor(o.offset, a.offset, !0);
  }
  backspaceHandler(t) {
    const { start: e, end: s } = this.getCursor() ?? {};
    if (!e || !s || (e == null ? void 0 : e.offset) !== (s == null ? void 0 : s.offset))
      return;
    const { text: r } = this, { footnote: o, superSubScript: a } = this.muya.options, l = De(r, {
      options: { footnote: o, superSubScript: a }
    });
    let m = !1, h = null, u = !1;
    for (const f of l) {
      if (f.range.end === e.offset) {
        m = !0, f.raw = f.raw.substring(0, f.raw.length - 1);
        break;
      }
      if (f.range.start + 1 === e.offset) {
        m = !0, f.raw = f.raw.substring(1);
        break;
      }
      if (f.range.start + 1 === e.offset && h && h.type === "image") {
        u = !0, m = !0, f.raw = f.raw.substring(1);
        break;
      }
      h = f;
    }
    if (m && (t.preventDefault(), this.text = At(l), e.offset--, s.offset--, this.setCursor(e.offset, s.offset, !0)), u) {
      t.stopPropagation();
      const f = this.domNode.querySelectorAll(`.${fe.MU_INLINE_IMAGE}`), i = f[f.length - 1], c = nr(i);
      this.muya.editor.selection.selectedImage = Object.assign({}, c, {
        block: this
      }), this.muya.editor.activeContentBlock = null, this.muya.editor.selection.setSelection({
        anchor: null,
        focus: null,
        block: this,
        path: this.path
      });
    }
  }
  deleteHandler(t) {
    const { start: e, end: s } = this.getCursor(), { text: r } = this;
    if (e.offset !== s.offset || e.offset !== r.length)
      return;
    const o = this.nextContentInContext();
    if (!o || o.blockName !== "paragraph.content") {
      t.preventDefault();
      return;
    }
    let l = o.parent;
    for (; l && l.isOnlyChild() && !l.isScrollPage; )
      l = l.parent;
    this.text = r + o.text, this.setCursor(e.offset, s.offset, !0), l.remove();
  }
  shiftEnterHandler(t) {
    t.preventDefault(), t.stopPropagation();
    const { text: e } = this, { start: s, end: r } = this.getCursor();
    this.text = e.substring(0, s.offset) + `
` + e.substring(r.offset), this.setCursor(s.offset + 1, r.offset + 1, !0);
  }
  enterHandler(t) {
    t.preventDefault();
    const { text: e, muya: s, parent: r } = this, { start: o, end: a } = this.getCursor();
    this.text = e.substring(0, o.offset);
    const m = {
      name: "paragraph",
      text: e.substring(a.offset)
    }, h = k.loadBlock(m.name).create(
      s,
      m
    );
    r.parent.insertAfter(h, r), this.update(), h.firstContentInDescendant().setCursor(0, 0, !0);
  }
  getFormatsInRange(t = this.getCursor()) {
    if (t == null)
      return { formats: [], tokens: [], neighbors: [] };
    const { start: e, end: s } = t, { text: r } = this, o = [], a = [], l = De(r, {
      options: this.muya.options
    });
    return function m(h) {
      for (const u of h)
        Fr(u) && e.offset >= u.range.start && s.offset <= u.range.end && o.push(u), Fr(u) && (e.offset >= u.range.start && e.offset <= u.range.end || s.offset >= u.range.start && s.offset <= u.range.end || e.offset <= u.range.start && u.range.end <= s.offset) && a.push(u), "children" in u && Array.isArray(u.children) && m(u.children);
    }(l), { formats: o, tokens: l, neighbors: a };
  }
  format(t) {
    const e = this.getCursor();
    if (e == null)
      return;
    const s = e.start, r = e.end;
    if (s == null || r == null)
      return gh.warn("You need to special the range you want to format.");
    s.delta = r.delta = 0;
    const { formats: o, tokens: a, neighbors: l } = this.getFormatsInRange(e), [m, h] = [o, l].map(
      (u) => u.filter((f) => f.type === t || f.type === "html_tag" && f.tag === t).reverse()
    );
    if (t === "clear") {
      for (const u of l)
        Ms(u, { start: s, end: r });
      s.offset += s.delta, r.offset += r.delta, this.text = At(a);
    } else if (m.length) {
      for (const u of m)
        Ms(u, { start: s, end: r });
      s.offset += s.delta, r.offset += r.delta, this.text = At(a);
    } else {
      if (h.length)
        for (const u of h)
          Ms(u, { start: s, end: r });
      s.offset += s.delta, r.offset += r.delta, this.text = At(a), this._addFormat(t, { start: s, end: r }), t === "image" && requestAnimationFrame(() => {
        const u = Zr.getSelectionStart();
        if (u) {
          const f = u.closest(".mu-inline-image");
          if (f && f.classList.contains("mu-empty-image")) {
            const i = nr(f), c = f.getBoundingClientRect(), p = {
              getBoundingClientRect: () => c,
              width: f.offsetWidth,
              height: f.offsetHeight
            };
            this.muya.eventCenter.emit("muya-image-selector", {
              block: this,
              reference: p,
              imageInfo: i
            });
          }
        }
      });
    }
    this.setCursor(s.offset, r.offset, !0);
  }
  _addFormat(t, { start: e, end: s }) {
    switch (t) {
      case "em":
      case "del":
      case "inline_code":
      case "strong":
      case "inline_math": {
        const r = za[t], o = this.text;
        this.text = o.substring(0, e.offset) + r + o.substring(e.offset, s.offset) + r + o.substring(s.offset), e.offset += r.length, s.offset += r.length;
        break;
      }
      case "sub":
      case "sup":
      case "mark":
      case "u": {
        const r = qs[t], o = this.text;
        this.text = o.substring(0, e.offset) + r.open + o.substring(e.offset, s.offset) + r.close + o.substring(s.offset), e.offset += r.open.length, s.offset += r.open.length;
        break;
      }
      case "link":
      case "image": {
        const r = this.text, o = s.offset - e.offset;
        this.text = r.substring(0, e.offset) + (t === "link" ? "[" : "![") + r.substring(e.offset, s.offset) + "]()" + r.substring(s.offset), e.offset += t === "link" ? 3 + o : 4 + o, s.offset = e.offset;
        break;
      }
    }
  }
  // Click the rendering of inline syntax, such as Inline Math, and select the math formula.
  _handleClickInlineRuleRender(t, e) {
    t.preventDefault(), t.stopPropagation();
    const s = +e.getAttribute("data-start"), r = +e.getAttribute("data-end");
    return this.setCursor(s, r, !0);
  }
}
T(Fe, "blockName", "format");
const Bs = J("paragraph:content"), vh = /^<([a-zA-Z\d-]+)(?=\s|>)[^<>]*?>$/, xh = [
  "strong",
  "em",
  "inline_code",
  "image",
  "link",
  "reference_image",
  "reference_link",
  "emoji",
  "del",
  "html_tag",
  "inline_math"
], wh = (n) => {
  const t = [], e = n.length;
  let s;
  for (s = 0; s < e; s++) {
    const r = n[s];
    /^[^|]$/.test(r) && (t[t.length - 1] += r), /\\/.test(r) && (t[t.length - 1] += n[++s]), /\|/.test(r) && s !== e - 1 && t.push("");
  }
  return t;
}, Kt = class Kt extends Fe {
  constructor(e, s) {
    super(e, s);
    T(this, "parent", null);
    this.classList = [...this.classList, "mu-paragraph-content"], this.attributes["empty-hint"] = e.i18n.t("Type / to insert..."), this.createDomNode();
  }
  static create(e, s) {
    return new Kt(e, s);
  }
  getAnchor() {
    return this.parent;
  }
  update(e, s = []) {
    this.inlineRenderer.patch(this, e, s);
    const { label: r } = this.inlineRenderer.getLabelInfo(this);
    this.scrollPage && r && this.scrollPage.updateRefLinkAndImage(r);
  }
  backspaceHandler(e) {
    const { start: s, end: r } = this.getCursor(), { eventCenter: o } = this.muya;
    if (s.offset !== 0 || r.offset !== 0) {
      super.backspaceHandler(e), o.emit("content-change", { block: this });
      return;
    }
    switch (e.preventDefault(), this._paragraphParentType()) {
      case "paragraph":
        return this.handleBackspaceInParagraph();
      case "block-quote":
        return this.handleBackspaceInBlockQuote();
      case "list-item":
      case "task-list-item":
        return this.handleBackspaceInList();
      default:
        Bs.error("Unknown backspace type");
        break;
    }
  }
  inputHandler(e) {
    super.inputHandler(e);
    const { eventCenter: s } = this.muya;
    s.emit("content-change", { block: this });
  }
  enterConvert(e) {
    e.preventDefault(), e.stopPropagation();
    const s = /^\|.*?(\\*)\|.*?(\\*)\|/, r = /^\$\$/, { text: o } = this, a = o.match(/(^ {0,3}`{3,})([^` ]*)/), l = s.exec(o), m = vh.exec(o), h = r.exec(o), u = m && m[1] && Yr.find((f) => f === m[1]);
    if (h) {
      const f = {
        name: "math-block",
        text: "",
        meta: {
          mathStyle: ""
        }
      }, i = k.loadBlock("math-block").create(
        this.muya,
        f
      );
      this.parent.replaceWith(i), i.firstContentInDescendant().setCursor(0, 0);
    } else if (a) {
      const i = {
        name: "code-block",
        meta: {
          lang: a[2],
          type: "fenced"
        },
        text: ""
      }, c = k.loadBlock(i.name).create(
        this.muya,
        i
      );
      this.parent.replaceWith(c), c.lastContentInDescendant().setCursor(0, 0);
    } else if (l && rr(l[1]) && rr(l[2])) {
      const f = wh(this.text), i = k.loadBlock("table").createWithHeader(
        this.muya,
        f
      );
      this.parent.replaceWith(i), i.firstChild.find(1).firstContentInDescendant().setCursor(0, 0, !0);
    } else if (u && Xr.every((f) => f !== u)) {
      const f = {
        name: "html-block",
        text: `<${u}>

</${u}>`
      }, i = k.loadBlock("html-block").create(
        this.muya,
        f
      );
      this.parent.replaceWith(i);
      const c = u.length + 3;
      i.firstContentInDescendant().setCursor(c, c);
    } else
      return super.enterHandler(e);
  }
  enterInBlockQuote(e) {
    const { text: s, parent: r } = this;
    if (s.length !== 0)
      return super.enterHandler(e);
    e.preventDefault(), e.stopPropagation();
    const o = r.clone(), a = r.parent;
    switch (!0) {
      case r.isOnlyChild():
        a.parent.insertBefore(o, a), a.remove();
        break;
      case r.isFirstChild():
        a.parent.insertBefore(o, a), r.remove();
        break;
      case r.isLastChild():
        a.parent.insertAfter(o, a), r.remove();
        break;
      default: {
        const l = {
          name: "block-quote",
          children: []
        }, m = a.offset(r);
        a.forEachAt(m + 1, void 0, (u) => {
          l.children.push(u.getState()), u.remove();
        });
        const h = k.loadBlock(l.name).create(
          this.muya,
          l
        );
        a.parent.insertAfter(o, a), a.parent.insertAfter(h, o), r.remove();
        break;
      }
    }
    o.children.head.setCursor(0, 0, !0);
  }
  enterInListItem(e) {
    var u, f, i, c;
    e.preventDefault(), e.stopPropagation();
    const { text: s, parent: r, muya: o } = this, { start: a, end: l } = this.getCursor(), m = r.parent, h = m.parent;
    if (s.length === 0)
      if (r.isOnlyChild())
        switch (!0) {
          case m.isOnlyChild(): {
            const p = r.clone();
            h.replaceWith(p), (u = p == null ? void 0 : p.firstContentInDescendant()) == null || u.setCursor(0, 0);
            break;
          }
          case m.isFirstChild(): {
            const p = r.clone();
            m.remove(), h.parent.insertBefore(p, h), (f = p == null ? void 0 : p.firstContentInDescendant()) == null || f.setCursor(0, 0);
            break;
          }
          case m.isLastChild(): {
            const p = r.clone();
            m.remove(), h.parent.insertAfter(p, h), (i = p == null ? void 0 : p.firstContentInDescendant()) == null || i.setCursor(0, 0);
            break;
          }
          default: {
            const p = r.clone(), g = {
              name: h.blockName,
              meta: { ...h.meta },
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              children: []
            }, j = h.offset(m);
            h.forEachAt(j + 1, void 0, (x) => {
              g.children.push(x.getState()), x.remove();
            });
            const b = k.loadBlock(g.name).create(
              this.muya,
              g
            );
            h.parent.insertAfter(p, h), h.parent.insertAfter(b, p), m.remove(), (c = p == null ? void 0 : p.firstContentInDescendant()) == null || c.setCursor(0, 0);
            break;
          }
        }
      else {
        const p = {
          name: m.blockName,
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          children: []
        };
        m.blockName === "task-list-item" && (p.meta = {
          checked: !1
        });
        const g = m.offset(r);
        m.forEachAt(g, void 0, (b) => {
          p.children.push(b.getState()), b.remove();
        });
        const j = k.loadBlock(p.name).create(
          this.muya,
          p
        );
        h.insertAfter(j, m), j.firstContentInDescendant().setCursor(0, 0);
      }
    else if (r.isOnlyChild()) {
      this.text = s.substring(0, a.offset);
      const p = {
        name: m.blockName,
        children: [
          {
            name: "paragraph",
            text: s.substring(l.offset)
          }
        ]
      };
      m.blockName === "task-list-item" && (p.meta = {
        checked: !1
      });
      const g = k.loadBlock(p.name).create(
        o,
        p
      );
      h.insertAfter(g, m), this.update(), g.firstContentInDescendant().setCursor(0, 0, !0);
    } else
      super.enterHandler(e);
  }
  enterHandler(e) {
    if (!Oe(e))
      return;
    if (e.shiftKey)
      return this.shiftEnterHandler(e);
    const s = this._paragraphParentType();
    s === "block-quote" ? this.enterInBlockQuote(e) : s === "list-item" || s === "task-list-item" ? this.enterInListItem(e) : this.enterConvert(e);
  }
  _paragraphParentType() {
    if (this.blockName !== "paragraph.content") {
      Bs.warn("Only paragraph content can call _paragraphParentType");
      return;
    }
    let e = this.parent, s = "paragraph";
    for (; e && !e.isScrollPage; ) {
      if (e.blockName === "block-quote" || e.blockName === "list-item" || e.blockName === "task-list-item") {
        s = e.blockName;
        break;
      }
      e = e.parent;
    }
    return s;
  }
  handleBackspaceInParagraph() {
    const e = this.previousContentInContext();
    if (!e)
      return;
    const { text: s } = e, r = s.length;
    e.text += this.text, this.parent.remove(), e.setCursor(r, r, !0);
  }
  handleBackspaceInBlockQuote() {
    const e = this.parent, s = e.parent;
    let r;
    if (!e.isOnlyChild() && !e.isFirstChild())
      return this.handleBackspaceInParagraph();
    if (e.isOnlyChild())
      s.replaceWith(e), r = e.firstContentInDescendant();
    else if (e.isFirstChild()) {
      const o = e.clone();
      s.parent.insertBefore(o, s), e.remove(), r = o.firstContentInDescendant();
    }
    r.setCursor(0, 0, !0);
  }
  handleBackspaceInList() {
    const e = this.parent, s = e.parent, r = s.parent;
    if (!e.isFirstChild())
      return this.handleBackspaceInParagraph();
    if (s.isOnlyChild())
      s.forEach((o, a) => {
        var m;
        const l = o.clone();
        r.parent.insertBefore(l, r), a === 0 && ((m = l == null ? void 0 : l.firstContentInDescendant()) == null || m.setCursor(0, 0, !0));
      }), r.remove();
    else if (s.isFirstChild())
      s.forEach((o, a) => {
        var m;
        const l = o.clone();
        r.parent.insertBefore(l, r), a === 0 && ((m = l == null ? void 0 : l.firstContentInDescendant()) == null || m.setCursor(0, 0, !0));
      }), s.remove();
    else {
      const o = s.prev;
      s.forEach((a, l) => {
        var h;
        const m = a.clone();
        o.append(m, "user"), l === 0 && ((h = m == null ? void 0 : m.firstContentInDescendant()) == null || h.setCursor(0, 0, !0));
      }), s.remove();
    }
  }
  isUnindentableListItem() {
    const { parent: e } = this, s = e.parent, r = s == null ? void 0 : s.parent, o = r == null ? void 0 : r.parent;
    return this.isCollapsed && o && (o.blockName === "list-item" || o.blockName === "task-list-item") ? r.prev ? "INDENT" : "REPLACEMENT" : !1;
  }
  _canIndentListItem() {
    const { parent: e } = this;
    if (e.blockName !== "paragraph" || !e.parent)
      return !1;
    const s = e == null ? void 0 : e.parent, r = s == null ? void 0 : s.parent;
    return s == null || r == null || s.blockName !== "list-item" && s.blockName !== "task-list-item" || !this.isCollapsed ? !1 : r && /ol|ul/.test(r.tagName) && s.prev;
  }
  _unindentListItem(e) {
    const { parent: s } = this, r = s == null ? void 0 : s.parent, o = r == null ? void 0 : r.parent, a = o == null ? void 0 : o.parent, l = this.getCursor();
    if (s == null || r == null || o == null || a == null || l == null)
      return;
    const { start: m, end: h } = l, u = r.offset(s);
    if (e === "REPLACEMENT") {
      const f = s.clone();
      a.insertBefore(f, o), r.isOnlyChild() ? o.remove() : r.remove();
    } else if (e === "INDENT") {
      const f = r.clone();
      if (a.parent.insertAfter(f, a), (r.next || o.next) && f.lastChild.blockName !== o.blockName) {
        const c = {
          name: o.blockName,
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          meta: { ...o.meta },
          children: []
        }, p = k.loadBlock(c.name).create(
          this.muya,
          c
        );
        f.append(p, "user");
      }
      if (r.next) {
        const c = o.offset(r);
        o.forEachAt(c + 1, void 0, (p) => {
          var g;
          (g = f.lastChild) == null || g.append(p.clone(), "user"), p.remove();
        });
      }
      if (o.next) {
        const c = a.offset(o);
        a.forEachAt(c + 1, void 0, (p) => {
          var g;
          (g = f.lastChild) == null || g.append(p.clone(), "user"), p.remove();
        });
      }
      if (r.isOnlyChild() ? o.remove() : r.remove(), f == null) {
        Bs.error("newListItem is null");
        return;
      }
      const i = f.find(u).firstContentInDescendant();
      i == null || i.setCursor(m.offset, h.offset, !0);
    }
  }
  indentListItem() {
    const { parent: e, muya: s } = this, r = e == null ? void 0 : e.parent, o = r == null ? void 0 : r.parent, a = r == null ? void 0 : r.prev, { start: l, end: m } = this.getCursor();
    if (e == null || r == null || o == null)
      return;
    const h = r.offset(e);
    let u = a == null ? void 0 : a.lastChild;
    if (!u || !/ol|ul/.test(u.tagName)) {
      const i = {
        name: o.blockName,
        meta: { ...o.meta },
        children: [r.getState()]
      };
      u = k.loadBlock(i.name).create(s, i), a.append(u, "user");
    } else
      u.append(r.clone(), "user");
    r.remove(), u.lastChild.find(h).firstContentInDescendant().setCursor(l.offset, m.offset, !0);
  }
  insertTab() {
    const { muya: e, text: s } = this, { tabSize: r } = e.options, o = " ".repeat(r), { start: a, end: l } = this.getCursor();
    if (this.isCollapsed) {
      this.text = s.substring(0, a.offset) + o + s.substring(l.offset);
      const m = a.offset + o.length;
      this.setCursor(m, m, !0);
    }
  }
  _checkCursorAtEndFormat() {
    const { offset: e } = this.getCursor().start, { muya: s, text: r } = this, o = De(r, {
      hasBeginRules: !1,
      options: s.options
    });
    let a = null;
    const l = (m) => {
      for (const h of m) {
        const { type: u, range: f } = h, { start: i, end: c } = f;
        if (xh.includes(u) && e > i && e < c)
          switch (u) {
            case "strong":
            case "em":
            case "inline_code":
            case "emoji":
            case "del":
            case "inline_math": {
              const { marker: p } = h;
              if (p && e === c - p.length) {
                a = {
                  offset: p.length
                };
                return;
              }
              break;
            }
            case "image":
            case "link": {
              const { backlash: p } = h, g = h.srcAndTitle, j = h.hrefAndTitle, b = (g || j).length, x = p && p.second ? p.second.length : 0;
              if (e === c - 3 - (b + x)) {
                a = {
                  offset: 2
                };
                return;
              } else if (e === c - 1) {
                a = {
                  offset: 1
                };
                return;
              }
              break;
            }
            case "reference_image":
            case "reference_link": {
              const { backlash: p, isFullLink: g, label: j } = h, b = j ? j.length : 0, x = p && p.second ? p.second.length : 0;
              if (g) {
                if (e === c - 3 - b - x) {
                  a = {
                    offset: 2
                  };
                  return;
                } else if (e === c - 1) {
                  a = {
                    offset: 1
                  };
                  return;
                }
              } else if (e === c - 1) {
                a = {
                  offset: 1
                };
                return;
              }
              break;
            }
            case "html_tag": {
              const { closeTag: p } = h;
              if (p && e === c - p.length) {
                a = {
                  offset: p.length
                };
                return;
              }
              break;
            }
          }
        "children" in h && Array.isArray(h.children) && l(h.children);
      }
    };
    return l(o), a;
  }
  tabHandler(e) {
    if (e.preventDefault(), !Oe(e))
      return;
    const { start: s, end: r } = this.getCursor();
    if (!(!s || !r)) {
      if (e.shiftKey) {
        const o = this.isUnindentableListItem();
        o && this._unindentListItem(o);
        return;
      }
      if (this.isCollapsed) {
        const o = this._checkCursorAtEndFormat();
        if (o) {
          const a = s.offset + o.offset;
          this.setCursor(a, a, !0);
          return;
        }
      }
      if (this._canIndentListItem()) {
        this.indentListItem();
        return;
      }
      this.insertTab();
    }
  }
};
T(Kt, "blockName", "paragraph.content");
let ln = Kt;
const Wt = class Wt extends Fe {
  constructor(e, s) {
    super(e, s);
    T(this, "parent", null);
    this.classList = [...this.classList, "mu-atxheading-content"], this.createDomNode();
  }
  static create(e, s) {
    return new Wt(e, s);
  }
  getAnchor() {
    return this.parent;
  }
  update(e, s = []) {
    return this.inlineRenderer.patch(this, e, s);
  }
  enterHandler(e) {
    const { start: s, end: r } = this.getCursor(), { level: o } = this.parent.meta;
    if (s.offset === r.offset && s.offset <= o + 1) {
      const a = {
        name: "paragraph",
        text: ""
      }, l = k.loadBlock(a.name).create(
        this.muya,
        a
      );
      this.parent.parent.insertBefore(l, this.parent), this.setCursor(s.offset, r.offset, !0);
    } else
      super.enterHandler(e);
  }
  backspaceHandler(e) {
    const { start: s, end: r } = this.getCursor();
    s.offset === 0 && r.offset === 0 ? (e.preventDefault(), this.text = this.text.replace(/^ {0,3}#{1,6} */, ""), this.convertToParagraph()) : s.offset === 1 && r.offset === 1 && this.text === "#" ? (e.preventDefault(), this.text = "", this.setCursor(0, 0), this.convertToParagraph()) : super.backspaceHandler(e);
  }
};
T(Wt, "blockName", "atxheading.content");
let pn = Wt;
const Zt = class Zt extends Fe {
  static create(t, e) {
    return new Zt(t, e);
  }
  constructor(t, e) {
    super(t, e), this.classList = [...this.classList, "mu-setextheading-content"], this.createDomNode();
  }
  getAnchor() {
    return this.parent;
  }
  update(t, e = []) {
    return this.inlineRenderer.patch(this, t, e);
  }
  enterHandler(t) {
    if (!Oe(t))
      return;
    if (t.shiftKey)
      return t.preventDefault(), t.stopPropagation(), this.shiftEnterHandler(t);
    const { text: e } = this;
    if (e.length === 0)
      return t.preventDefault(), t.stopPropagation(), this.convertToParagraph(!0);
    const { start: s, end: r } = this.getCursor();
    if (s.offset === 0 && r.offset === 0) {
      t.preventDefault(), t.stopPropagation();
      const o = {
        name: "paragraph",
        text: ""
      }, a = k.loadBlock(o.name).create(
        this.muya,
        o
      );
      this.parent.parent.insertBefore(a, this.parent), this.setCursor(s.offset, r.offset, !0);
    } else
      super.enterHandler(t);
  }
  backspaceHandler(t) {
    const { start: e, end: s } = this.getCursor();
    e.offset === 0 && s.offset === 0 ? this.convertToParagraph(!0) : super.backspaceHandler(t);
  }
};
T(Zt, "blockName", "setextheading.content");
let mn = Zt;
const Jt = class Jt extends Fe {
  static create(t, e) {
    return new Jt(t, e);
  }
  constructor(t, e) {
    super(t, e), this.classList = [...this.classList, "mu-thematic-break-content"], this.createDomNode();
  }
  getAnchor() {
    return this.parent;
  }
  update(t, e = []) {
    return this.inlineRenderer.patch(this, t, e);
  }
  /**
   * Create an empty paragraph bellow.
   * @param {*} event
   */
  enterHandler(t) {
    const { text: e, muya: s } = this, { start: r, end: o } = this.getCursor();
    if (r.offset === o.offset && r.offset === 0) {
      const a = {
        name: "paragraph",
        text: ""
      }, l = k.loadBlock(a.name).create(
        s,
        a
      ), m = this.parent;
      m.parent.insertBefore(l, m);
    } else {
      const a = e.length;
      this.setCursor(a, a), super.enterHandler(t);
    }
  }
  backspaceHandler(t) {
    const { start: e, end: s } = this.getCursor();
    e.offset === 0 && s.offset === 0 ? (this.text = "", this.convertToParagraph()) : super.backspaceHandler(t);
  }
};
T(Jt, "blockName", "thematicbreak.content");
let un = Jt;
const ae = {
  "<": `%${Tt()}%`,
  ">": `%${Tt()}%`,
  '"': `%${Tt()}%`,
  "'": `%${Tt()}%`
}, ri = (n, t, e = !1, s = !1) => {
  let r = "", o = 0;
  const a = (l, m) => `${ae["<"]}span class=${ae['"']}${l}${ae['"']}${ae[">"]}${m}${ae["<"]}/span${ae[">"]}`;
  for (const l of t) {
    const { start: m, end: h, active: u } = l;
    r += n.substring(o, m);
    const f = u ? "mu-highlight" : "mu-selection";
    let i = n.substring(m, h);
    s && n.endsWith(`
`) && h === n.length && (i = i.substring(m, h - 1) + (e ? a("mu-line-end", `
`) : `<span class="mu-line-end">
</span>`)), r += e ? a(f, i) : `<span class="${f}">${i}</span>`, o = h;
  }
  return o !== n.length && (s && n.endsWith(`
`) ? r += n.substring(o, n.length - 1) + (e ? a("mu-line-end", `
`) : `<span class="mu-line-end">
</span>`) : r += n.substring(o)), r;
}, Yt = class Yt extends ms {
  constructor(e, { meta: s }) {
    super(e, s.lang);
    T(this, "parent", null);
    this.classList = [...this.classList, "mu-language-input"], this.attributes.hint = e.i18n.t("Input Language Identifier..."), this.createDomNode();
  }
  static create(e, s) {
    return new Yt(e, s);
  }
  getAnchor() {
    return this.parent;
  }
  update(e, s = []) {
    this.domNode.innerHTML = ri(this.text, s);
  }
  /**
   * Update this block lang and parent's lang, and show/hide language selector.
   * @param lang 
   */
  updateLanguage(e) {
    const { start: s, end: r } = this.getCursor();
    this.text = e, this.parent.lang = e;
    const o = Math.min(e.length, s.offset), a = Math.min(e.length, r.offset);
    this.setCursor(o, a, !0), this.muya.eventCenter.emit("content-change", { block: this });
  }
  inputHandler() {
    const s = (this.domNode.textContent ?? "").split(/\s+/)[0];
    this.updateLanguage(s);
  }
  enterHandler(e) {
    var r;
    e.preventDefault(), e.stopPropagation();
    const { parent: s } = this;
    (r = s.lastContentInDescendant()) == null || r.setCursor(0, 0);
  }
  backspaceHandler(e) {
    const { start: s, end: r } = this.getCursor(), { text: o } = this;
    if (s.offset === 1 && r.offset === 1 && o.length === 1) {
      e.preventDefault();
      const a = "";
      this.updateLanguage(a);
    }
    if (s.offset === 0 && r.offset === 0) {
      e.preventDefault();
      const a = this.previousContentInContext();
      if (a) {
        const l = a.text.length;
        a.setCursor(l, l, !0);
      }
    }
  }
};
T(Yt, "blockName", "language-input");
let dn = Yt;
const kh = (n, t) => {
  const e = n.substring(t - 1, t + 1);
  return /^(\{\}|\[\]|\(\)|><)$/.test(e);
}, yh = (n) => {
  const t = /^(\s*)\S/.exec(n);
  return t ? t[1] : "";
}, Sh = (n = "") => {
  const t = /(#|\.)([^#.]+)/;
  let e = "", s = "", r = "", o = !1, a;
  for (const l of Yr)
    n.startsWith(l) && (!n[l.length] || /#|\./.test(n[l.length])) && (e = l, Xr.some((m) => m === l) && (o = !0), n = n.substring(l.length));
  if (e !== "")
    for (a = t.exec(n); a && n.length; )
      a[1] === "#" ? s = a[2] : r = a[2], n = n.substring(a[0].length), a = t.exec(n);
  return { tag: e, id: s, className: r, isVoid: o };
}, Ch = {
  "html-block": "html",
  "math-block": "latex"
};
function Ah(n) {
  return /code-block|diagram|frontmatter/.test(n.name);
}
const Xt = class Xt extends ms {
  constructor(e, s) {
    super(e, s.text);
    T(this, "initialLang");
    T(this, "parent", null);
    Ah(s) ? this.initialLang = s.meta.lang : this.initialLang = Ch[s.name], this.classList = [...this.classList, "mu-codeblock-content"], this.attributes.frontMatter = e.i18n.t("Input Front Matter..."), this.attributes.math = e.i18n.t("Input Mathematical Formula..."), this.createDomNode();
  }
  static create(e, s) {
    return new Xt(e, s);
  }
  get lang() {
    const { codeContainer: e } = this;
    return e ? e.lang : this.initialLang;
  }
  /**
   * Always be the `pre` element
   */
  get codeContainer() {
    var e;
    return (e = this.parent) == null ? void 0 : e.parent;
  }
  get outContainer() {
    const { codeContainer: e } = this;
    return /code-block|frontmatter/.test(e.blockName) ? e : e.parent;
  }
  getAnchor() {
    return this.outContainer;
  }
  // Some block has a preview container, like math, diagram, html, should update the preview if the text changed.
  updatePreviewIfHave(e) {
    var s, r, o, a;
    (r = (s = this.outContainer) == null ? void 0 : s.attachments) != null && r.length && ((a = (o = this.outContainer) == null ? void 0 : o.attachments) == null ? void 0 : a.head).update(e);
  }
  update(e, s = []) {
    const { lang: r, text: o } = this, a = ur([r])[0], l = this.domNode, m = Ua(ri(o, s, !0, !0)).replace(new RegExp(ae["<"], "g"), "<").replace(new RegExp(ae[">"], "g"), ">").replace(new RegExp(ae['"'], "g"), '"').replace(new RegExp(ae["'"], "g"), "'");
    if (a && /\S/.test(m) && Ye.has(a)) {
      const h = document.createElement("div");
      h.classList.add(`language-${a}`), h.innerHTML = m, $s.highlightElement(h, !1, function() {
        l.innerHTML = this.innerHTML;
      });
    } else
      l.innerHTML = m;
  }
  inputHandler(e) {
    if (this.isComposed)
      return;
    const s = this.domNode.textContent, { start: r, end: o } = this.getCursor(), { needRender: a, text: l } = this.autoPair(
      e,
      s,
      r,
      o,
      !1,
      !1,
      "codeblock.content"
    );
    this.text = l, this.updatePreviewIfHave(l), a ? this.setCursor(r.offset, o.offset, !0) : this.setCursor(r.offset, o.offset, !0);
  }
  enterHandler(e) {
    var h;
    if (e.preventDefault(), e.shiftKey) {
      let u;
      const f = this.nextContentInContext();
      if (f)
        u = f;
      else {
        const c = {
          name: "paragraph",
          text: ""
        }, p = k.loadBlock(c.name).create(
          this.muya,
          c
        );
        (h = this.scrollPage) == null || h.append(p, "user"), u = p.firstChild;
      }
      const i = Jr(0, u, e);
      u.setCursor(i, i, !0);
      return;
    }
    const { tabSize: s } = this.muya.options, { start: r } = this.getCursor(), { text: o } = this, a = kh(o, r.offset), l = yh(o);
    this.text = o.substring(0, r.offset) + `
` + (a ? l + " ".repeat(s) + `
` : "") + l + o.substring(r.offset);
    let m = r.offset + 1 + l.length;
    a && (m += s), this.setCursor(m, m, !0);
  }
  tabHandler(e) {
    e.preventDefault();
    const { start: s, end: r } = this.getCursor(), { lang: o, text: a } = this;
    if (/markup|html|xml|svg|mathml/.test(o)) {
      const m = a.substring(0, s.offset).split(/\s+/).pop() ?? "", { tag: h, isVoid: u, id: f, className: i } = Sh(m);
      if (h) {
        const c = a.substring(
          0,
          s.offset - m.length
        ), p = a.substring(r.offset);
        let g = `<${h}`, j = 0, b = 0;
        switch (h) {
          case "img":
            g += ' alt="" src=""', j = b = g.length - 1;
            break;
          case "input":
            g += ' type="text"', j = g.length - 5, b = g.length - 1;
            break;
          case "a":
            g += ' href=""', j = b = g.length - 1;
            break;
          case "link":
            g += ' rel="stylesheet" href=""', j = b = g.length - 1;
            break;
        }
        f && (g += ` id="${f}"`), i && (g += ` class="${i}"`), g += ">", j === 0 && b === 0 && (j = b = g.length), u || (g += `</${h}>`), this.text = c + g + p, this.setCursor(
          j + c.length,
          b + c.length,
          !0
        );
      } else
        this.insertTab();
    } else
      this.insertTab();
  }
  backspaceHandler(e) {
    const { start: s, end: r } = this.getCursor();
    if (s.offset === r.offset && s.offset === 0) {
      e.preventDefault();
      const { text: o, muya: a } = this, l = {
        name: "paragraph",
        text: o
      }, m = k.loadBlock(l.name).create(a, l);
      return this.outContainer.replaceWith(m), m.lastContentInDescendant().setCursor(0, 0, !0);
    }
    if (s.offset === r.offset && this.text[s.offset - 1] === `
`) {
      e.preventDefault();
      const { text: o } = this;
      return this.text = o.substring(0, s.offset - 1) + o.substring(s.offset), this.updatePreviewIfHave(this.text), this.setCursor(--s.offset, --r.offset, !0);
    }
    if (s.offset === r.offset) {
      const { lang: o, text: a } = this, l = ur([o])[0];
      if (l && /\S/.test(a) && Ye.has(l)) {
        const m = $s.tokenize(a, $s.languages[o]);
        let h = s.offset, u = "", f = !1;
        if (jo(m, (i) => {
          h === 1 && i.type === "temp-text" && typeof i.content == "string" ? (i.content = i.content.substring(1), f = !0) : h === i.length && i.type !== "temp-text" && typeof i.content == "string" && (i.content = i.content.substring(0, i.length - 1), f = !0), u += i.content, h -= i.length;
        }), f)
          return e.preventDefault(), this.text = u, this.updatePreviewIfHave(this.text), this.setCursor(--s.offset, --r.offset, !0);
      }
    }
  }
  keyupHandler() {
    if (this.isComposed)
      return;
    const { anchor: e, focus: s } = this.getCursor(), { anchor: r, focus: o } = this.selection;
    if (e.offset !== (r == null ? void 0 : r.offset) || s.offset !== (o == null ? void 0 : o.offset)) {
      const a = { anchor: e, focus: s, block: this, path: this.path };
      this.selection.setSelection(a);
    }
  }
};
T(Xt, "blockName", "codeblock.content");
let hn = Xt;
const Qt = class Qt extends Fe {
  constructor(e, s) {
    super(e, s);
    T(this, "hasZeroWidthSpaceAtBeginning", !1);
    this.classList = [...this.classList, "mu-table-cell-content"], this.createDomNode();
  }
  static create(e, s) {
    return new Qt(e, s);
  }
  get table() {
    return this.closestBlock("table");
  }
  get tableInner() {
    return this.closestBlock("table.inner");
  }
  get row() {
    return this.closestBlock("table.row");
  }
  get cell() {
    return this.closestBlock("table.cell");
  }
  getAnchor() {
    return this.table;
  }
  update(e, s = []) {
    return this.inlineRenderer.patch(this, e, s);
  }
  findNextRow() {
    const { row: e } = this;
    return e.next || null;
  }
  findPreviousRow() {
    const { row: e } = this;
    return e.prev || null;
  }
  shiftEnter(e) {
    e.preventDefault();
    const { start: s, end: r } = this.getCursor(), { text: o } = this, a = "<br/>";
    this.text = o.substring(0, s.offset) + a + o.substring(r.offset);
    const l = s.offset + a.length;
    this.setCursor(l, l, !0);
  }
  commandEnter(e) {
    e.preventDefault();
    const s = this.tableInner.offset(this.row);
    this.table.insertRow(
      s + 1
      /* Because insert after the current row */
    ).setCursor(0, 0);
  }
  normalEnter(e) {
    var a;
    e.preventDefault();
    const s = this.findNextRow(), { row: r } = this;
    let o = null;
    if (s)
      o = s.firstContentInDescendant();
    else {
      const l = r.lastContentInDescendant(), m = l == null ? void 0 : l.nextContentInContext();
      if (m)
        o = m;
      else {
        const h = {
          name: "paragraph",
          text: ""
        }, u = k.loadBlock("paragraph").create(
          this.muya,
          h
        );
        (a = this.scrollPage) == null || a.append(u, "user"), o = u.firstContentInDescendant();
      }
    }
    o.setCursor(0, 0, !0);
  }
  enterHandler(e) {
    if (Oe(e))
      return e.shiftKey ? this.shiftEnter(e) : or && e.metaKey || !or && e.ctrlKey ? this.commandEnter(e) : this.normalEnter(e);
  }
  arrowHandler(e) {
    var f;
    if (!Oe(e))
      return;
    const s = this.findPreviousRow(), r = this.findNextRow(), { table: o, cell: a, row: l } = this, m = l.offset(a), h = o.prev ? o.prev.lastContentInDescendant() : null, u = o.next ? o.next.firstContentInDescendant() : null;
    if (e.key === z.ArrowUp) {
      if (e.preventDefault(), s) {
        const i = s.find(m).firstContentInDescendant();
        if (i) {
          const c = i.text.length;
          i.setCursor(c, c, !0);
        }
      } else if (h) {
        const i = h.text.length;
        h.setCursor(i, i, !0);
      }
    } else if (e.key === z.ArrowDown)
      if (e.preventDefault(), r) {
        const i = r.find(m).firstContentInDescendant();
        i == null || i.setCursor(0, 0, !0);
      } else {
        let i = null;
        if (u)
          i = u;
        else {
          const c = {
            name: "paragraph",
            text: ""
          }, p = k.loadBlock("paragraph").create(
            this.muya,
            c
          );
          (f = this.scrollPage) == null || f.append(p, "user"), i = p.firstContentInDescendant();
        }
        i.setCursor(0, 0, !0);
      }
    else
      super.arrowHandler(e);
  }
  backspaceHandler(e) {
    const { start: s, end: r } = this.getCursor(), o = this.previousContentInContext();
    if (s.offset !== 0 || s.offset !== r.offset)
      return super.backspaceHandler(e);
    if (e.preventDefault(), e.stopPropagation(), !o || o.blockName !== "table.cell.content" && this.table.isEmpty()) {
      const a = {
        name: "paragraph",
        text: ""
      }, l = k.loadBlock("paragraph").create(
        this.muya,
        a
      );
      this.table.replaceWith(l), l.firstChild.setCursor(0, 0);
    } else {
      const a = o.text.length;
      o.setCursor(a, a, !0);
    }
  }
  tabHandler(e) {
    e.preventDefault(), e.stopPropagation();
    const s = this.nextContentInContext();
    s && s.setCursor(0, 0, !0);
  }
  // The following code is used to fix a bug in Safari, 
  // entering Chinese in an empty table cell will cause 
  // the table to be messed up, so we insert a zero-width
  // character before entering the Chinese, and remove the 
  // zero-width character after entering the Chinese.
  composeHandler(e) {
    if (super.composeHandler(e), e.type === "compositionstart" && this.text === "")
      this.hasZeroWidthSpaceAtBeginning = !0, this.domNode.innerText = "​";
    else if (e.type === "compositionend" && this.hasZeroWidthSpaceAtBeginning) {
      this.hasZeroWidthSpaceAtBeginning = !1;
      const { text: s } = this, r = s.length - 1;
      this.text = s.substring(0, r), this.setCursor(r, r, !0);
    }
  }
};
T(Qt, "blockName", "table.cell.content");
let fn = Qt;
const Th = J("tasklistCheckbox:"), Vt = class Vt extends rs {
  constructor(e, { checked: s }) {
    super(e);
    T(this, "checked");
    T(this, "eventIds", []);
    T(this, "update", (e, s = "api") => {
      Xe(
        this.domNode,
        e ? "add" : "remove",
        "mu-checkbox-checked"
      );
      const r = this.parent, o = r.parent;
      this.domNode.checked !== e && !Me && (this.domNode.checked = e), s === "api" ? r.meta.checked = e : r.checked = e, o.orderIfNecessary();
    });
    this.tagName = Me ? "span" : "input", this.checked = s, this.attributes = Me ? { contenteditable: "false" } : { type: "checkbox", contenteditable: "false" }, this.classList = ["mu-task-list-checkbox"], s && (Me || (this.attributes.checked = !0), this.classList.push("mu-checkbox-checked")), this.createDomNode(), this.listen();
  }
  static create(e, s) {
    return new Vt(e, s);
  }
  get path() {
    const { path: e } = this.parent;
    return e.pop(), [...e, "meta", "checked"];
  }
  get isContainerBlock() {
    return !1;
  }
  listen() {
    const { domNode: e, muya: s } = this, { eventCenter: r } = s, o = (l) => {
      if (vn(l))
        if (l.stopPropagation(), Me)
          this.checked = !this.checked, this.update(this.checked, "user");
        else {
          const { checked: m } = l.target;
          this.checked = m, this.update(m, "user");
        }
    }, a = [
      r.attachDOMEvent(e, "click", o)
    ];
    this.eventIds.push(...a);
  }
  detachDOMEvents() {
    for (const e of this.eventIds)
      this.muya.eventCenter.detachDOMEvent(e);
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  remove(e) {
    return super.remove(), this.detachDOMEvents(), this;
  }
  getState() {
    Th.warn("You should never call this method.");
  }
};
T(Vt, "blockName", "task-list-checkbox");
let gn = Vt;
const zr = J("htmlPreview:"), es = class es extends q {
  constructor(e, { text: s }) {
    super(e);
    T(this, "html");
    this.tagName = "div", this.html = s, this.classList = ["mu-html-preview"], this.attributes = {
      spellcheck: "false",
      contenteditable: "false"
    }, this.createDomNode(), this.update();
  }
  static create(e, s) {
    return new es(e, s);
  }
  get path() {
    return zr.warn("You can never call `get path` in htmlPreview"), [];
  }
  update(e = this.html) {
    this.html !== e && (this.html = e);
    const { disableHtml: s } = this.muya.options, r = Qr(e, Vr, s);
    if (/^<([a-z][a-z\d]*)[^>]*?>(\s*)<\/\1>$/.test(r.trim()))
      this.domNode.innerHTML = '<div class="mu-empty">&lt;Empty HTML Block&gt;</div>';
    else {
      const a = new DOMParser().parseFromString(r, "text/html"), l = a.documentElement.querySelectorAll("img");
      for (const m of l) {
        const h = m.getAttribute("src"), u = Ka(h);
        m.setAttribute("src", u.src);
      }
      this.domNode.innerHTML = a.documentElement.querySelector("body").innerHTML;
    }
  }
  getState() {
    return zr.warn("You can never call `getState` in htmlPreview"), {};
  }
};
T(es, "blockName", "html-preview");
let _n = es;
var Dh = { exports: {} };
const $h = /* @__PURE__ */ Wa(Za);
(function(n, t) {
  (function(e, s) {
    n.exports = s($h);
  })(typeof self < "u" ? self : Y, function(e) {
    return function() {
      var s = { 771: function(l) {
        l.exports = e;
      } }, r = {};
      function o(l) {
        var m = r[l];
        if (m !== void 0)
          return m.exports;
        var h = r[l] = { exports: {} };
        return s[l](h, h.exports, o), h.exports;
      }
      o.n = function(l) {
        var m = l && l.__esModule ? function() {
          return l.default;
        } : function() {
          return l;
        };
        return o.d(m, { a: m }), m;
      }, o.d = function(l, m) {
        for (var h in m)
          o.o(m, h) && !o.o(l, h) && Object.defineProperty(l, h, { enumerable: !0, get: m[h] });
      }, o.o = function(l, m) {
        return Object.prototype.hasOwnProperty.call(l, m);
      };
      var a = {};
      return function() {
        var l = o(771), m = o.n(l);
        m().__defineMacro("\\ce", function(i) {
          return h(i.consumeArgs(1)[0], "ce");
        }), m().__defineMacro("\\pu", function(i) {
          return h(i.consumeArgs(1)[0], "pu");
        }), m().__defineMacro("\\tripledash", "{\\vphantom{-}\\raisebox{2.56mu}{$\\mkern2mu\\tiny\\text{-}\\mkern1mu\\text{-}\\mkern1mu\\text{-}\\mkern2mu$}}");
        var h = function(i, c) {
          for (var p = "", g = i.length && i[i.length - 1].loc.start, j = i.length - 1; j >= 0; j--)
            i[j].loc.start > g && (p += " ", g = i[j].loc.start), p += i[j].text, g += i[j].text.length;
          return f.go(u.go(p, c));
        }, u = { go: function(i, c) {
          if (!i)
            return [];
          c === void 0 && (c = "ce");
          var p, g = "0", j = {};
          j.parenthesisLevel = 0, i = (i = (i = i.replace(/\n/g, " ")).replace(/[\u2212\u2013\u2014\u2010]/g, "-")).replace(/[\u2026]/g, "...");
          for (var b = 10, x = []; ; ) {
            p !== i ? (b = 10, p = i) : b--;
            var y = u.stateMachines[c], w = y.transitions[g] || y.transitions["*"];
            e:
              for (var C = 0; C < w.length; C++) {
                var D = u.patterns.match_(w[C].pattern, i);
                if (D) {
                  for (var A = w[C].task, $ = 0; $ < A.action_.length; $++) {
                    var O;
                    if (y.actions[A.action_[$].type_])
                      O = y.actions[A.action_[$].type_](j, D.match_, A.action_[$].option);
                    else {
                      if (!u.actions[A.action_[$].type_])
                        throw ["MhchemBugA", "mhchem bug A. Please report. (" + A.action_[$].type_ + ")"];
                      O = u.actions[A.action_[$].type_](j, D.match_, A.action_[$].option);
                    }
                    u.concatArray(x, O);
                  }
                  if (g = A.nextState || g, !(i.length > 0))
                    return x;
                  if (A.revisit || (i = D.remainder), !A.toContinue)
                    break e;
                }
              }
            if (b <= 0)
              throw ["MhchemBugU", "mhchem bug U. Please report."];
          }
        }, concatArray: function(i, c) {
          if (c)
            if (Array.isArray(c))
              for (var p = 0; p < c.length; p++)
                i.push(c[p]);
            else
              i.push(c);
        }, patterns: { patterns: { empty: /^$/, else: /^./, else2: /^./, space: /^\s/, "space A": /^\s(?=[A-Z\\$])/, space$: /^\s$/, "a-z": /^[a-z]/, x: /^x/, x$: /^x$/, i$: /^i$/, letters: /^(?:[a-zA-Z\u03B1-\u03C9\u0391-\u03A9?@]|(?:\\(?:alpha|beta|gamma|delta|epsilon|zeta|eta|theta|iota|kappa|lambda|mu|nu|xi|omicron|pi|rho|sigma|tau|upsilon|phi|chi|psi|omega|Gamma|Delta|Theta|Lambda|Xi|Pi|Sigma|Upsilon|Phi|Psi|Omega)(?:\s+|\{\}|(?![a-zA-Z]))))+/, "\\greek": /^\\(?:alpha|beta|gamma|delta|epsilon|zeta|eta|theta|iota|kappa|lambda|mu|nu|xi|omicron|pi|rho|sigma|tau|upsilon|phi|chi|psi|omega|Gamma|Delta|Theta|Lambda|Xi|Pi|Sigma|Upsilon|Phi|Psi|Omega)(?:\s+|\{\}|(?![a-zA-Z]))/, "one lowercase latin letter $": /^(?:([a-z])(?:$|[^a-zA-Z]))$/, "$one lowercase latin letter$ $": /^\$(?:([a-z])(?:$|[^a-zA-Z]))\$$/, "one lowercase greek letter $": /^(?:\$?[\u03B1-\u03C9]\$?|\$?\\(?:alpha|beta|gamma|delta|epsilon|zeta|eta|theta|iota|kappa|lambda|mu|nu|xi|omicron|pi|rho|sigma|tau|upsilon|phi|chi|psi|omega)\s*\$?)(?:\s+|\{\}|(?![a-zA-Z]))$/, digits: /^[0-9]+/, "-9.,9": /^[+\-]?(?:[0-9]+(?:[,.][0-9]+)?|[0-9]*(?:\.[0-9]+))/, "-9.,9 no missing 0": /^[+\-]?[0-9]+(?:[.,][0-9]+)?/, "(-)(9.,9)(e)(99)": function(i) {
          var c = i.match(/^(\+\-|\+\/\-|\+|\-|\\pm\s?)?([0-9]+(?:[,.][0-9]+)?|[0-9]*(?:\.[0-9]+))?(\((?:[0-9]+(?:[,.][0-9]+)?|[0-9]*(?:\.[0-9]+))\))?(?:([eE]|\s*(\*|x|\\times|\u00D7)\s*10\^)([+\-]?[0-9]+|\{[+\-]?[0-9]+\}))?/);
          return c && c[0] ? { match_: c.splice(1), remainder: i.substr(c[0].length) } : null;
        }, "(-)(9)^(-9)": function(i) {
          var c = i.match(/^(\+\-|\+\/\-|\+|\-|\\pm\s?)?([0-9]+(?:[,.][0-9]+)?|[0-9]*(?:\.[0-9]+)?)\^([+\-]?[0-9]+|\{[+\-]?[0-9]+\})/);
          return c && c[0] ? { match_: c.splice(1), remainder: i.substr(c[0].length) } : null;
        }, "state of aggregation $": function(i) {
          var c = u.patterns.findObserveGroups(i, "", /^\([a-z]{1,3}(?=[\),])/, ")", "");
          if (c && c.remainder.match(/^($|[\s,;\)\]\}])/))
            return c;
          var p = i.match(/^(?:\((?:\\ca\s?)?\$[amothc]\$\))/);
          return p ? { match_: p[0], remainder: i.substr(p[0].length) } : null;
        }, "_{(state of aggregation)}$": /^_\{(\([a-z]{1,3}\))\}/, "{[(": /^(?:\\\{|\[|\()/, ")]}": /^(?:\)|\]|\\\})/, ", ": /^[,;]\s*/, ",": /^[,;]/, ".": /^[.]/, ". ": /^([.\u22C5\u00B7\u2022])\s*/, "...": /^\.\.\.(?=$|[^.])/, "* ": /^([*])\s*/, "^{(...)}": function(i) {
          return u.patterns.findObserveGroups(i, "^{", "", "", "}");
        }, "^($...$)": function(i) {
          return u.patterns.findObserveGroups(i, "^", "$", "$", "");
        }, "^a": /^\^([0-9]+|[^\\_])/, "^\\x{}{}": function(i) {
          return u.patterns.findObserveGroups(i, "^", /^\\[a-zA-Z]+\{/, "}", "", "", "{", "}", "", !0);
        }, "^\\x{}": function(i) {
          return u.patterns.findObserveGroups(i, "^", /^\\[a-zA-Z]+\{/, "}", "");
        }, "^\\x": /^\^(\\[a-zA-Z]+)\s*/, "^(-1)": /^\^(-?\d+)/, "'": /^'/, "_{(...)}": function(i) {
          return u.patterns.findObserveGroups(i, "_{", "", "", "}");
        }, "_($...$)": function(i) {
          return u.patterns.findObserveGroups(i, "_", "$", "$", "");
        }, _9: /^_([+\-]?[0-9]+|[^\\])/, "_\\x{}{}": function(i) {
          return u.patterns.findObserveGroups(i, "_", /^\\[a-zA-Z]+\{/, "}", "", "", "{", "}", "", !0);
        }, "_\\x{}": function(i) {
          return u.patterns.findObserveGroups(i, "_", /^\\[a-zA-Z]+\{/, "}", "");
        }, "_\\x": /^_(\\[a-zA-Z]+)\s*/, "^_": /^(?:\^(?=_)|\_(?=\^)|[\^_]$)/, "{}": /^\{\}/, "{...}": function(i) {
          return u.patterns.findObserveGroups(i, "", "{", "}", "");
        }, "{(...)}": function(i) {
          return u.patterns.findObserveGroups(i, "{", "", "", "}");
        }, "$...$": function(i) {
          return u.patterns.findObserveGroups(i, "", "$", "$", "");
        }, "${(...)}$": function(i) {
          return u.patterns.findObserveGroups(i, "${", "", "", "}$");
        }, "$(...)$": function(i) {
          return u.patterns.findObserveGroups(i, "$", "", "", "$");
        }, "=<>": /^[=<>]/, "#": /^[#\u2261]/, "+": /^\+/, "-$": /^-(?=[\s_},;\]/]|$|\([a-z]+\))/, "-9": /^-(?=[0-9])/, "- orbital overlap": /^-(?=(?:[spd]|sp)(?:$|[\s,;\)\]\}]))/, "-": /^-/, "pm-operator": /^(?:\\pm|\$\\pm\$|\+-|\+\/-)/, operator: /^(?:\+|(?:[\-=<>]|<<|>>|\\approx|\$\\approx\$)(?=\s|$|-?[0-9]))/, arrowUpDown: /^(?:v|\(v\)|\^|\(\^\))(?=$|[\s,;\)\]\}])/, "\\bond{(...)}": function(i) {
          return u.patterns.findObserveGroups(i, "\\bond{", "", "", "}");
        }, "->": /^(?:<->|<-->|->|<-|<=>>|<<=>|<=>|[\u2192\u27F6\u21CC])/, CMT: /^[CMT](?=\[)/, "[(...)]": function(i) {
          return u.patterns.findObserveGroups(i, "[", "", "", "]");
        }, "1st-level escape": /^(&|\\\\|\\hline)\s*/, "\\,": /^(?:\\[,\ ;:])/, "\\x{}{}": function(i) {
          return u.patterns.findObserveGroups(i, "", /^\\[a-zA-Z]+\{/, "}", "", "", "{", "}", "", !0);
        }, "\\x{}": function(i) {
          return u.patterns.findObserveGroups(i, "", /^\\[a-zA-Z]+\{/, "}", "");
        }, "\\ca": /^\\ca(?:\s+|(?![a-zA-Z]))/, "\\x": /^(?:\\[a-zA-Z]+\s*|\\[_&{}%])/, orbital: /^(?:[0-9]{1,2}[spdfgh]|[0-9]{0,2}sp)(?=$|[^a-zA-Z])/, others: /^[\/~|]/, "\\frac{(...)}": function(i) {
          return u.patterns.findObserveGroups(i, "\\frac{", "", "", "}", "{", "", "", "}");
        }, "\\overset{(...)}": function(i) {
          return u.patterns.findObserveGroups(i, "\\overset{", "", "", "}", "{", "", "", "}");
        }, "\\underset{(...)}": function(i) {
          return u.patterns.findObserveGroups(i, "\\underset{", "", "", "}", "{", "", "", "}");
        }, "\\underbrace{(...)}": function(i) {
          return u.patterns.findObserveGroups(i, "\\underbrace{", "", "", "}_", "{", "", "", "}");
        }, "\\color{(...)}0": function(i) {
          return u.patterns.findObserveGroups(i, "\\color{", "", "", "}");
        }, "\\color{(...)}{(...)}1": function(i) {
          return u.patterns.findObserveGroups(i, "\\color{", "", "", "}", "{", "", "", "}");
        }, "\\color(...){(...)}2": function(i) {
          return u.patterns.findObserveGroups(i, "\\color", "\\", "", /^(?=\{)/, "{", "", "", "}");
        }, "\\ce{(...)}": function(i) {
          return u.patterns.findObserveGroups(i, "\\ce{", "", "", "}");
        }, oxidation$: /^(?:[+-][IVX]+|\\pm\s*0|\$\\pm\$\s*0)$/, "d-oxidation$": /^(?:[+-]?\s?[IVX]+|\\pm\s*0|\$\\pm\$\s*0)$/, "roman numeral": /^[IVX]+/, "1/2$": /^[+\-]?(?:[0-9]+|\$[a-z]\$|[a-z])\/[0-9]+(?:\$[a-z]\$|[a-z])?$/, amount: function(i) {
          var c;
          if (c = i.match(/^(?:(?:(?:\([+\-]?[0-9]+\/[0-9]+\)|[+\-]?(?:[0-9]+|\$[a-z]\$|[a-z])\/[0-9]+|[+\-]?[0-9]+[.,][0-9]+|[+\-]?\.[0-9]+|[+\-]?[0-9]+)(?:[a-z](?=\s*[A-Z]))?)|[+\-]?[a-z](?=\s*[A-Z])|\+(?!\s))/))
            return { match_: c[0], remainder: i.substr(c[0].length) };
          var p = u.patterns.findObserveGroups(i, "", "$", "$", "");
          return p && (c = p.match_.match(/^\$(?:\(?[+\-]?(?:[0-9]*[a-z]?[+\-])?[0-9]*[a-z](?:[+\-][0-9]*[a-z]?)?\)?|\+|-)\$$/)) ? { match_: c[0], remainder: i.substr(c[0].length) } : null;
        }, amount2: function(i) {
          return this.amount(i);
        }, "(KV letters),": /^(?:[A-Z][a-z]{0,2}|i)(?=,)/, formula$: function(i) {
          if (i.match(/^\([a-z]+\)$/))
            return null;
          var c = i.match(/^(?:[a-z]|(?:[0-9\ \+\-\,\.\(\)]+[a-z])+[0-9\ \+\-\,\.\(\)]*|(?:[a-z][0-9\ \+\-\,\.\(\)]+)+[a-z]?)$/);
          return c ? { match_: c[0], remainder: i.substr(c[0].length) } : null;
        }, uprightEntities: /^(?:pH|pOH|pC|pK|iPr|iBu)(?=$|[^a-zA-Z])/, "/": /^\s*(\/)\s*/, "//": /^\s*(\/\/)\s*/, "*": /^\s*[*.]\s*/ }, findObserveGroups: function(i, c, p, g, j, b, x, y, w, C) {
          var D = function(I, P) {
            if (typeof P == "string")
              return I.indexOf(P) !== 0 ? null : P;
            var H = I.match(P);
            return H ? H[0] : null;
          }, A = D(i, c);
          if (A === null || (i = i.substr(A.length), (A = D(i, p)) === null))
            return null;
          var $ = function(I, P, H) {
            for (var V = 0; P < I.length; ) {
              var ye = I.charAt(P), _t = D(I.substr(P), H);
              if (_t !== null && V === 0)
                return { endMatchBegin: P, endMatchEnd: P + _t.length };
              if (ye === "{")
                V++;
              else if (ye === "}") {
                if (V === 0)
                  throw ["ExtraCloseMissingOpen", "Extra close brace or missing open brace"];
                V--;
              }
              P++;
            }
            return null;
          }(i, A.length, g || j);
          if ($ === null)
            return null;
          var O = i.substring(0, g ? $.endMatchEnd : $.endMatchBegin);
          if (b || x) {
            var R = this.findObserveGroups(i.substr($.endMatchEnd), b, x, y, w);
            if (R === null)
              return null;
            var M = [O, R.match_];
            return { match_: C ? M.join("") : M, remainder: R.remainder };
          }
          return { match_: O, remainder: i.substr($.endMatchEnd) };
        }, match_: function(i, c) {
          var p = u.patterns.patterns[i];
          if (p === void 0)
            throw ["MhchemBugP", "mhchem bug P. Please report. (" + i + ")"];
          if (typeof p == "function")
            return u.patterns.patterns[i](c);
          var g = c.match(p);
          return g ? { match_: g[2] ? [g[1], g[2]] : g[1] ? g[1] : g[0], remainder: c.substr(g[0].length) } : null;
        } }, actions: { "a=": function(i, c) {
          i.a = (i.a || "") + c;
        }, "b=": function(i, c) {
          i.b = (i.b || "") + c;
        }, "p=": function(i, c) {
          i.p = (i.p || "") + c;
        }, "o=": function(i, c) {
          i.o = (i.o || "") + c;
        }, "q=": function(i, c) {
          i.q = (i.q || "") + c;
        }, "d=": function(i, c) {
          i.d = (i.d || "") + c;
        }, "rm=": function(i, c) {
          i.rm = (i.rm || "") + c;
        }, "text=": function(i, c) {
          i.text_ = (i.text_ || "") + c;
        }, insert: function(i, c, p) {
          return { type_: p };
        }, "insert+p1": function(i, c, p) {
          return { type_: p, p1: c };
        }, "insert+p1+p2": function(i, c, p) {
          return { type_: p, p1: c[0], p2: c[1] };
        }, copy: function(i, c) {
          return c;
        }, rm: function(i, c) {
          return { type_: "rm", p1: c || "" };
        }, text: function(i, c) {
          return u.go(c, "text");
        }, "{text}": function(i, c) {
          var p = ["{"];
          return u.concatArray(p, u.go(c, "text")), p.push("}"), p;
        }, "tex-math": function(i, c) {
          return u.go(c, "tex-math");
        }, "tex-math tight": function(i, c) {
          return u.go(c, "tex-math tight");
        }, bond: function(i, c, p) {
          return { type_: "bond", kind_: p || c };
        }, "color0-output": function(i, c) {
          return { type_: "color0", color: c[0] };
        }, ce: function(i, c) {
          return u.go(c);
        }, "1/2": function(i, c) {
          var p = [];
          c.match(/^[+\-]/) && (p.push(c.substr(0, 1)), c = c.substr(1));
          var g = c.match(/^([0-9]+|\$[a-z]\$|[a-z])\/([0-9]+)(\$[a-z]\$|[a-z])?$/);
          return g[1] = g[1].replace(/\$/g, ""), p.push({ type_: "frac", p1: g[1], p2: g[2] }), g[3] && (g[3] = g[3].replace(/\$/g, ""), p.push({ type_: "tex-math", p1: g[3] })), p;
        }, "9,9": function(i, c) {
          return u.go(c, "9,9");
        } }, createTransitions: function(i) {
          var c, p, g, j, b = {};
          for (c in i)
            for (p in i[c])
              for (g = p.split("|"), i[c][p].stateArray = g, j = 0; j < g.length; j++)
                b[g[j]] = [];
          for (c in i)
            for (p in i[c])
              for (g = i[c][p].stateArray || [], j = 0; j < g.length; j++) {
                var x = i[c][p];
                if (x.action_) {
                  x.action_ = [].concat(x.action_);
                  for (var y = 0; y < x.action_.length; y++)
                    typeof x.action_[y] == "string" && (x.action_[y] = { type_: x.action_[y] });
                } else
                  x.action_ = [];
                for (var w = c.split("|"), C = 0; C < w.length; C++)
                  if (g[j] === "*")
                    for (var D in b)
                      b[D].push({ pattern: w[C], task: x });
                  else
                    b[g[j]].push({ pattern: w[C], task: x });
              }
          return b;
        }, stateMachines: {} };
        u.stateMachines = { ce: { transitions: u.createTransitions({ empty: { "*": { action_: "output" } }, else: { "0|1|2": { action_: "beginsWithBond=false", revisit: !0, toContinue: !0 } }, oxidation$: { 0: { action_: "oxidation-output" } }, CMT: { r: { action_: "rdt=", nextState: "rt" }, rd: { action_: "rqt=", nextState: "rdt" } }, arrowUpDown: { "0|1|2|as": { action_: ["sb=false", "output", "operator"], nextState: "1" } }, uprightEntities: { "0|1|2": { action_: ["o=", "output"], nextState: "1" } }, orbital: { "0|1|2|3": { action_: "o=", nextState: "o" } }, "->": { "0|1|2|3": { action_: "r=", nextState: "r" }, "a|as": { action_: ["output", "r="], nextState: "r" }, "*": { action_: ["output", "r="], nextState: "r" } }, "+": { o: { action_: "d= kv", nextState: "d" }, "d|D": { action_: "d=", nextState: "d" }, q: { action_: "d=", nextState: "qd" }, "qd|qD": { action_: "d=", nextState: "qd" }, dq: { action_: ["output", "d="], nextState: "d" }, 3: { action_: ["sb=false", "output", "operator"], nextState: "0" } }, amount: { "0|2": { action_: "a=", nextState: "a" } }, "pm-operator": { "0|1|2|a|as": { action_: ["sb=false", "output", { type_: "operator", option: "\\pm" }], nextState: "0" } }, operator: { "0|1|2|a|as": { action_: ["sb=false", "output", "operator"], nextState: "0" } }, "-$": { "o|q": { action_: ["charge or bond", "output"], nextState: "qd" }, d: { action_: "d=", nextState: "d" }, D: { action_: ["output", { type_: "bond", option: "-" }], nextState: "3" }, q: { action_: "d=", nextState: "qd" }, qd: { action_: "d=", nextState: "qd" }, "qD|dq": { action_: ["output", { type_: "bond", option: "-" }], nextState: "3" } }, "-9": { "3|o": { action_: ["output", { type_: "insert", option: "hyphen" }], nextState: "3" } }, "- orbital overlap": { o: { action_: ["output", { type_: "insert", option: "hyphen" }], nextState: "2" }, d: { action_: ["output", { type_: "insert", option: "hyphen" }], nextState: "2" } }, "-": { "0|1|2": { action_: [{ type_: "output", option: 1 }, "beginsWithBond=true", { type_: "bond", option: "-" }], nextState: "3" }, 3: { action_: { type_: "bond", option: "-" } }, a: { action_: ["output", { type_: "insert", option: "hyphen" }], nextState: "2" }, as: { action_: [{ type_: "output", option: 2 }, { type_: "bond", option: "-" }], nextState: "3" }, b: { action_: "b=" }, o: { action_: { type_: "- after o/d", option: !1 }, nextState: "2" }, q: { action_: { type_: "- after o/d", option: !1 }, nextState: "2" }, "d|qd|dq": { action_: { type_: "- after o/d", option: !0 }, nextState: "2" }, "D|qD|p": { action_: ["output", { type_: "bond", option: "-" }], nextState: "3" } }, amount2: { "1|3": { action_: "a=", nextState: "a" } }, letters: { "0|1|2|3|a|as|b|p|bp|o": { action_: "o=", nextState: "o" }, "q|dq": { action_: ["output", "o="], nextState: "o" }, "d|D|qd|qD": { action_: "o after d", nextState: "o" } }, digits: { o: { action_: "q=", nextState: "q" }, "d|D": { action_: "q=", nextState: "dq" }, q: { action_: ["output", "o="], nextState: "o" }, a: { action_: "o=", nextState: "o" } }, "space A": { "b|p|bp": {} }, space: { a: { nextState: "as" }, 0: { action_: "sb=false" }, "1|2": { action_: "sb=true" }, "r|rt|rd|rdt|rdq": { action_: "output", nextState: "0" }, "*": { action_: ["output", "sb=true"], nextState: "1" } }, "1st-level escape": { "1|2": { action_: ["output", { type_: "insert+p1", option: "1st-level escape" }] }, "*": { action_: ["output", { type_: "insert+p1", option: "1st-level escape" }], nextState: "0" } }, "[(...)]": { "r|rt": { action_: "rd=", nextState: "rd" }, "rd|rdt": { action_: "rq=", nextState: "rdq" } }, "...": { "o|d|D|dq|qd|qD": { action_: ["output", { type_: "bond", option: "..." }], nextState: "3" }, "*": { action_: [{ type_: "output", option: 1 }, { type_: "insert", option: "ellipsis" }], nextState: "1" } }, ". |* ": { "*": { action_: ["output", { type_: "insert", option: "addition compound" }], nextState: "1" } }, "state of aggregation $": { "*": { action_: ["output", "state of aggregation"], nextState: "1" } }, "{[(": { "a|as|o": { action_: ["o=", "output", "parenthesisLevel++"], nextState: "2" }, "0|1|2|3": { action_: ["o=", "output", "parenthesisLevel++"], nextState: "2" }, "*": { action_: ["output", "o=", "output", "parenthesisLevel++"], nextState: "2" } }, ")]}": { "0|1|2|3|b|p|bp|o": { action_: ["o=", "parenthesisLevel--"], nextState: "o" }, "a|as|d|D|q|qd|qD|dq": { action_: ["output", "o=", "parenthesisLevel--"], nextState: "o" } }, ", ": { "*": { action_: ["output", "comma"], nextState: "0" } }, "^_": { "*": {} }, "^{(...)}|^($...$)": { "0|1|2|as": { action_: "b=", nextState: "b" }, p: { action_: "b=", nextState: "bp" }, "3|o": { action_: "d= kv", nextState: "D" }, q: { action_: "d=", nextState: "qD" }, "d|D|qd|qD|dq": { action_: ["output", "d="], nextState: "D" } }, "^a|^\\x{}{}|^\\x{}|^\\x|'": { "0|1|2|as": { action_: "b=", nextState: "b" }, p: { action_: "b=", nextState: "bp" }, "3|o": { action_: "d= kv", nextState: "d" }, q: { action_: "d=", nextState: "qd" }, "d|qd|D|qD": { action_: "d=" }, dq: { action_: ["output", "d="], nextState: "d" } }, "_{(state of aggregation)}$": { "d|D|q|qd|qD|dq": { action_: ["output", "q="], nextState: "q" } }, "_{(...)}|_($...$)|_9|_\\x{}{}|_\\x{}|_\\x": { "0|1|2|as": { action_: "p=", nextState: "p" }, b: { action_: "p=", nextState: "bp" }, "3|o": { action_: "q=", nextState: "q" }, "d|D": { action_: "q=", nextState: "dq" }, "q|qd|qD|dq": { action_: ["output", "q="], nextState: "q" } }, "=<>": { "0|1|2|3|a|as|o|q|d|D|qd|qD|dq": { action_: [{ type_: "output", option: 2 }, "bond"], nextState: "3" } }, "#": { "0|1|2|3|a|as|o": { action_: [{ type_: "output", option: 2 }, { type_: "bond", option: "#" }], nextState: "3" } }, "{}": { "*": { action_: { type_: "output", option: 1 }, nextState: "1" } }, "{...}": { "0|1|2|3|a|as|b|p|bp": { action_: "o=", nextState: "o" }, "o|d|D|q|qd|qD|dq": { action_: ["output", "o="], nextState: "o" } }, "$...$": { a: { action_: "a=" }, "0|1|2|3|as|b|p|bp|o": { action_: "o=", nextState: "o" }, "as|o": { action_: "o=" }, "q|d|D|qd|qD|dq": { action_: ["output", "o="], nextState: "o" } }, "\\bond{(...)}": { "*": { action_: [{ type_: "output", option: 2 }, "bond"], nextState: "3" } }, "\\frac{(...)}": { "*": { action_: [{ type_: "output", option: 1 }, "frac-output"], nextState: "3" } }, "\\overset{(...)}": { "*": { action_: [{ type_: "output", option: 2 }, "overset-output"], nextState: "3" } }, "\\underset{(...)}": { "*": { action_: [{ type_: "output", option: 2 }, "underset-output"], nextState: "3" } }, "\\underbrace{(...)}": { "*": { action_: [{ type_: "output", option: 2 }, "underbrace-output"], nextState: "3" } }, "\\color{(...)}{(...)}1|\\color(...){(...)}2": { "*": { action_: [{ type_: "output", option: 2 }, "color-output"], nextState: "3" } }, "\\color{(...)}0": { "*": { action_: [{ type_: "output", option: 2 }, "color0-output"] } }, "\\ce{(...)}": { "*": { action_: [{ type_: "output", option: 2 }, "ce"], nextState: "3" } }, "\\,": { "*": { action_: [{ type_: "output", option: 1 }, "copy"], nextState: "1" } }, "\\x{}{}|\\x{}|\\x": { "0|1|2|3|a|as|b|p|bp|o|c0": { action_: ["o=", "output"], nextState: "3" }, "*": { action_: ["output", "o=", "output"], nextState: "3" } }, others: { "*": { action_: [{ type_: "output", option: 1 }, "copy"], nextState: "3" } }, else2: { a: { action_: "a to o", nextState: "o", revisit: !0 }, as: { action_: ["output", "sb=true"], nextState: "1", revisit: !0 }, "r|rt|rd|rdt|rdq": { action_: ["output"], nextState: "0", revisit: !0 }, "*": { action_: ["output", "copy"], nextState: "3" } } }), actions: { "o after d": function(i, c) {
          var p;
          if ((i.d || "").match(/^[0-9]+$/)) {
            var g = i.d;
            i.d = void 0, p = this.output(i), i.b = g;
          } else
            p = this.output(i);
          return u.actions["o="](i, c), p;
        }, "d= kv": function(i, c) {
          i.d = c, i.dType = "kv";
        }, "charge or bond": function(i, c) {
          if (i.beginsWithBond) {
            var p = [];
            return u.concatArray(p, this.output(i)), u.concatArray(p, u.actions.bond(i, c, "-")), p;
          }
          i.d = c;
        }, "- after o/d": function(i, c, p) {
          var g = u.patterns.match_("orbital", i.o || ""), j = u.patterns.match_("one lowercase greek letter $", i.o || ""), b = u.patterns.match_("one lowercase latin letter $", i.o || ""), x = u.patterns.match_("$one lowercase latin letter$ $", i.o || ""), y = c === "-" && (g && g.remainder === "" || j || b || x);
          !y || i.a || i.b || i.p || i.d || i.q || g || !b || (i.o = "$" + i.o + "$");
          var w = [];
          return y ? (u.concatArray(w, this.output(i)), w.push({ type_: "hyphen" })) : (g = u.patterns.match_("digits", i.d || ""), p && g && g.remainder === "" ? (u.concatArray(w, u.actions["d="](i, c)), u.concatArray(w, this.output(i))) : (u.concatArray(w, this.output(i)), u.concatArray(w, u.actions.bond(i, c, "-")))), w;
        }, "a to o": function(i) {
          i.o = i.a, i.a = void 0;
        }, "sb=true": function(i) {
          i.sb = !0;
        }, "sb=false": function(i) {
          i.sb = !1;
        }, "beginsWithBond=true": function(i) {
          i.beginsWithBond = !0;
        }, "beginsWithBond=false": function(i) {
          i.beginsWithBond = !1;
        }, "parenthesisLevel++": function(i) {
          i.parenthesisLevel++;
        }, "parenthesisLevel--": function(i) {
          i.parenthesisLevel--;
        }, "state of aggregation": function(i, c) {
          return { type_: "state of aggregation", p1: u.go(c, "o") };
        }, comma: function(i, c) {
          var p = c.replace(/\s*$/, "");
          return p !== c && i.parenthesisLevel === 0 ? { type_: "comma enumeration L", p1: p } : { type_: "comma enumeration M", p1: p };
        }, output: function(i, c, p) {
          var g, j, b;
          i.r ? (j = i.rdt === "M" ? u.go(i.rd, "tex-math") : i.rdt === "T" ? [{ type_: "text", p1: i.rd || "" }] : u.go(i.rd), b = i.rqt === "M" ? u.go(i.rq, "tex-math") : i.rqt === "T" ? [{ type_: "text", p1: i.rq || "" }] : u.go(i.rq), g = { type_: "arrow", r: i.r, rd: j, rq: b }) : (g = [], (i.a || i.b || i.p || i.o || i.q || i.d || p) && (i.sb && g.push({ type_: "entitySkip" }), i.o || i.q || i.d || i.b || i.p || p === 2 ? i.o || i.q || i.d || !i.b && !i.p ? i.o && i.dType === "kv" && u.patterns.match_("d-oxidation$", i.d || "") ? i.dType = "oxidation" : i.o && i.dType === "kv" && !i.q && (i.dType = void 0) : (i.o = i.a, i.d = i.b, i.q = i.p, i.a = i.b = i.p = void 0) : (i.o = i.a, i.a = void 0), g.push({ type_: "chemfive", a: u.go(i.a, "a"), b: u.go(i.b, "bd"), p: u.go(i.p, "pq"), o: u.go(i.o, "o"), q: u.go(i.q, "pq"), d: u.go(i.d, i.dType === "oxidation" ? "oxidation" : "bd"), dType: i.dType })));
          for (var x in i)
            x !== "parenthesisLevel" && x !== "beginsWithBond" && delete i[x];
          return g;
        }, "oxidation-output": function(i, c) {
          var p = ["{"];
          return u.concatArray(p, u.go(c, "oxidation")), p.push("}"), p;
        }, "frac-output": function(i, c) {
          return { type_: "frac-ce", p1: u.go(c[0]), p2: u.go(c[1]) };
        }, "overset-output": function(i, c) {
          return { type_: "overset", p1: u.go(c[0]), p2: u.go(c[1]) };
        }, "underset-output": function(i, c) {
          return { type_: "underset", p1: u.go(c[0]), p2: u.go(c[1]) };
        }, "underbrace-output": function(i, c) {
          return { type_: "underbrace", p1: u.go(c[0]), p2: u.go(c[1]) };
        }, "color-output": function(i, c) {
          return { type_: "color", color1: c[0], color2: u.go(c[1]) };
        }, "r=": function(i, c) {
          i.r = c;
        }, "rdt=": function(i, c) {
          i.rdt = c;
        }, "rd=": function(i, c) {
          i.rd = c;
        }, "rqt=": function(i, c) {
          i.rqt = c;
        }, "rq=": function(i, c) {
          i.rq = c;
        }, operator: function(i, c, p) {
          return { type_: "operator", kind_: p || c };
        } } }, a: { transitions: u.createTransitions({ empty: { "*": {} }, "1/2$": { 0: { action_: "1/2" } }, else: { 0: { nextState: "1", revisit: !0 } }, "$(...)$": { "*": { action_: "tex-math tight", nextState: "1" } }, ",": { "*": { action_: { type_: "insert", option: "commaDecimal" } } }, else2: { "*": { action_: "copy" } } }), actions: {} }, o: { transitions: u.createTransitions({ empty: { "*": {} }, "1/2$": { 0: { action_: "1/2" } }, else: { 0: { nextState: "1", revisit: !0 } }, letters: { "*": { action_: "rm" } }, "\\ca": { "*": { action_: { type_: "insert", option: "circa" } } }, "\\x{}{}|\\x{}|\\x": { "*": { action_: "copy" } }, "${(...)}$|$(...)$": { "*": { action_: "tex-math" } }, "{(...)}": { "*": { action_: "{text}" } }, else2: { "*": { action_: "copy" } } }), actions: {} }, text: { transitions: u.createTransitions({ empty: { "*": { action_: "output" } }, "{...}": { "*": { action_: "text=" } }, "${(...)}$|$(...)$": { "*": { action_: "tex-math" } }, "\\greek": { "*": { action_: ["output", "rm"] } }, "\\,|\\x{}{}|\\x{}|\\x": { "*": { action_: ["output", "copy"] } }, else: { "*": { action_: "text=" } } }), actions: { output: function(i) {
          if (i.text_) {
            var c = { type_: "text", p1: i.text_ };
            for (var p in i)
              delete i[p];
            return c;
          }
        } } }, pq: { transitions: u.createTransitions({ empty: { "*": {} }, "state of aggregation $": { "*": { action_: "state of aggregation" } }, i$: { 0: { nextState: "!f", revisit: !0 } }, "(KV letters),": { 0: { action_: "rm", nextState: "0" } }, formula$: { 0: { nextState: "f", revisit: !0 } }, "1/2$": { 0: { action_: "1/2" } }, else: { 0: { nextState: "!f", revisit: !0 } }, "${(...)}$|$(...)$": { "*": { action_: "tex-math" } }, "{(...)}": { "*": { action_: "text" } }, "a-z": { f: { action_: "tex-math" } }, letters: { "*": { action_: "rm" } }, "-9.,9": { "*": { action_: "9,9" } }, ",": { "*": { action_: { type_: "insert+p1", option: "comma enumeration S" } } }, "\\color{(...)}{(...)}1|\\color(...){(...)}2": { "*": { action_: "color-output" } }, "\\color{(...)}0": { "*": { action_: "color0-output" } }, "\\ce{(...)}": { "*": { action_: "ce" } }, "\\,|\\x{}{}|\\x{}|\\x": { "*": { action_: "copy" } }, else2: { "*": { action_: "copy" } } }), actions: { "state of aggregation": function(i, c) {
          return { type_: "state of aggregation subscript", p1: u.go(c, "o") };
        }, "color-output": function(i, c) {
          return { type_: "color", color1: c[0], color2: u.go(c[1], "pq") };
        } } }, bd: { transitions: u.createTransitions({ empty: { "*": {} }, x$: { 0: { nextState: "!f", revisit: !0 } }, formula$: { 0: { nextState: "f", revisit: !0 } }, else: { 0: { nextState: "!f", revisit: !0 } }, "-9.,9 no missing 0": { "*": { action_: "9,9" } }, ".": { "*": { action_: { type_: "insert", option: "electron dot" } } }, "a-z": { f: { action_: "tex-math" } }, x: { "*": { action_: { type_: "insert", option: "KV x" } } }, letters: { "*": { action_: "rm" } }, "'": { "*": { action_: { type_: "insert", option: "prime" } } }, "${(...)}$|$(...)$": { "*": { action_: "tex-math" } }, "{(...)}": { "*": { action_: "text" } }, "\\color{(...)}{(...)}1|\\color(...){(...)}2": { "*": { action_: "color-output" } }, "\\color{(...)}0": { "*": { action_: "color0-output" } }, "\\ce{(...)}": { "*": { action_: "ce" } }, "\\,|\\x{}{}|\\x{}|\\x": { "*": { action_: "copy" } }, else2: { "*": { action_: "copy" } } }), actions: { "color-output": function(i, c) {
          return { type_: "color", color1: c[0], color2: u.go(c[1], "bd") };
        } } }, oxidation: { transitions: u.createTransitions({ empty: { "*": {} }, "roman numeral": { "*": { action_: "roman-numeral" } }, "${(...)}$|$(...)$": { "*": { action_: "tex-math" } }, else: { "*": { action_: "copy" } } }), actions: { "roman-numeral": function(i, c) {
          return { type_: "roman numeral", p1: c || "" };
        } } }, "tex-math": { transitions: u.createTransitions({ empty: { "*": { action_: "output" } }, "\\ce{(...)}": { "*": { action_: ["output", "ce"] } }, "{...}|\\,|\\x{}{}|\\x{}|\\x": { "*": { action_: "o=" } }, else: { "*": { action_: "o=" } } }), actions: { output: function(i) {
          if (i.o) {
            var c = { type_: "tex-math", p1: i.o };
            for (var p in i)
              delete i[p];
            return c;
          }
        } } }, "tex-math tight": { transitions: u.createTransitions({ empty: { "*": { action_: "output" } }, "\\ce{(...)}": { "*": { action_: ["output", "ce"] } }, "{...}|\\,|\\x{}{}|\\x{}|\\x": { "*": { action_: "o=" } }, "-|+": { "*": { action_: "tight operator" } }, else: { "*": { action_: "o=" } } }), actions: { "tight operator": function(i, c) {
          i.o = (i.o || "") + "{" + c + "}";
        }, output: function(i) {
          if (i.o) {
            var c = { type_: "tex-math", p1: i.o };
            for (var p in i)
              delete i[p];
            return c;
          }
        } } }, "9,9": { transitions: u.createTransitions({ empty: { "*": {} }, ",": { "*": { action_: "comma" } }, else: { "*": { action_: "copy" } } }), actions: { comma: function() {
          return { type_: "commaDecimal" };
        } } }, pu: { transitions: u.createTransitions({ empty: { "*": { action_: "output" } }, space$: { "*": { action_: ["output", "space"] } }, "{[(|)]}": { "0|a": { action_: "copy" } }, "(-)(9)^(-9)": { 0: { action_: "number^", nextState: "a" } }, "(-)(9.,9)(e)(99)": { 0: { action_: "enumber", nextState: "a" } }, space: { "0|a": {} }, "pm-operator": { "0|a": { action_: { type_: "operator", option: "\\pm" }, nextState: "0" } }, operator: { "0|a": { action_: "copy", nextState: "0" } }, "//": { d: { action_: "o=", nextState: "/" } }, "/": { d: { action_: "o=", nextState: "/" } }, "{...}|else": { "0|d": { action_: "d=", nextState: "d" }, a: { action_: ["space", "d="], nextState: "d" }, "/|q": { action_: "q=", nextState: "q" } } }), actions: { enumber: function(i, c) {
          var p = [];
          return c[0] === "+-" || c[0] === "+/-" ? p.push("\\pm ") : c[0] && p.push(c[0]), c[1] && (u.concatArray(p, u.go(c[1], "pu-9,9")), c[2] && (c[2].match(/[,.]/) ? u.concatArray(p, u.go(c[2], "pu-9,9")) : p.push(c[2])), c[3] = c[4] || c[3], c[3] && (c[3] = c[3].trim(), c[3] === "e" || c[3].substr(0, 1) === "*" ? p.push({ type_: "cdot" }) : p.push({ type_: "times" }))), c[3] && p.push("10^{" + c[5] + "}"), p;
        }, "number^": function(i, c) {
          var p = [];
          return c[0] === "+-" || c[0] === "+/-" ? p.push("\\pm ") : c[0] && p.push(c[0]), u.concatArray(p, u.go(c[1], "pu-9,9")), p.push("^{" + c[2] + "}"), p;
        }, operator: function(i, c, p) {
          return { type_: "operator", kind_: p || c };
        }, space: function() {
          return { type_: "pu-space-1" };
        }, output: function(i) {
          var c, p = u.patterns.match_("{(...)}", i.d || "");
          p && p.remainder === "" && (i.d = p.match_);
          var g = u.patterns.match_("{(...)}", i.q || "");
          if (g && g.remainder === "" && (i.q = g.match_), i.d && (i.d = i.d.replace(/\u00B0C|\^oC|\^{o}C/g, "{}^{\\circ}C"), i.d = i.d.replace(/\u00B0F|\^oF|\^{o}F/g, "{}^{\\circ}F")), i.q) {
            i.q = i.q.replace(/\u00B0C|\^oC|\^{o}C/g, "{}^{\\circ}C"), i.q = i.q.replace(/\u00B0F|\^oF|\^{o}F/g, "{}^{\\circ}F");
            var j = { d: u.go(i.d, "pu"), q: u.go(i.q, "pu") };
            i.o === "//" ? c = { type_: "pu-frac", p1: j.d, p2: j.q } : (c = j.d, j.d.length > 1 || j.q.length > 1 ? c.push({ type_: " / " }) : c.push({ type_: "/" }), u.concatArray(c, j.q));
          } else
            c = u.go(i.d, "pu-2");
          for (var b in i)
            delete i[b];
          return c;
        } } }, "pu-2": { transitions: u.createTransitions({ empty: { "*": { action_: "output" } }, "*": { "*": { action_: ["output", "cdot"], nextState: "0" } }, "\\x": { "*": { action_: "rm=" } }, space: { "*": { action_: ["output", "space"], nextState: "0" } }, "^{(...)}|^(-1)": { 1: { action_: "^(-1)" } }, "-9.,9": { 0: { action_: "rm=", nextState: "0" }, 1: { action_: "^(-1)", nextState: "0" } }, "{...}|else": { "*": { action_: "rm=", nextState: "1" } } }), actions: { cdot: function() {
          return { type_: "tight cdot" };
        }, "^(-1)": function(i, c) {
          i.rm += "^{" + c + "}";
        }, space: function() {
          return { type_: "pu-space-2" };
        }, output: function(i) {
          var c = [];
          if (i.rm) {
            var p = u.patterns.match_("{(...)}", i.rm || "");
            c = p && p.remainder === "" ? u.go(p.match_, "pu") : { type_: "rm", p1: i.rm };
          }
          for (var g in i)
            delete i[g];
          return c;
        } } }, "pu-9,9": { transitions: u.createTransitions({ empty: { 0: { action_: "output-0" }, o: { action_: "output-o" } }, ",": { 0: { action_: ["output-0", "comma"], nextState: "o" } }, ".": { 0: { action_: ["output-0", "copy"], nextState: "o" } }, else: { "*": { action_: "text=" } } }), actions: { comma: function() {
          return { type_: "commaDecimal" };
        }, "output-0": function(i) {
          var c = [];
          if (i.text_ = i.text_ || "", i.text_.length > 4) {
            var p = i.text_.length % 3;
            p === 0 && (p = 3);
            for (var g = i.text_.length - 3; g > 0; g -= 3)
              c.push(i.text_.substr(g, 3)), c.push({ type_: "1000 separator" });
            c.push(i.text_.substr(0, p)), c.reverse();
          } else
            c.push(i.text_);
          for (var j in i)
            delete i[j];
          return c;
        }, "output-o": function(i) {
          var c = [];
          if (i.text_ = i.text_ || "", i.text_.length > 4) {
            for (var p = i.text_.length - 3, g = 0; g < p; g += 3)
              c.push(i.text_.substr(g, 3)), c.push({ type_: "1000 separator" });
            c.push(i.text_.substr(g));
          } else
            c.push(i.text_);
          for (var j in i)
            delete i[j];
          return c;
        } } } };
        var f = { go: function(i, c) {
          if (!i)
            return "";
          for (var p = "", g = !1, j = 0; j < i.length; j++) {
            var b = i[j];
            typeof b == "string" ? p += b : (p += f._go2(b), b.type_ === "1st-level escape" && (g = !0));
          }
          return c || g || !p || (p = "{" + p + "}"), p;
        }, _goInner: function(i) {
          return i && f.go(i, !0);
        }, _go2: function(i) {
          var c;
          switch (i.type_) {
            case "chemfive":
              c = "";
              var p = { a: f._goInner(i.a), b: f._goInner(i.b), p: f._goInner(i.p), o: f._goInner(i.o), q: f._goInner(i.q), d: f._goInner(i.d) };
              p.a && (p.a.match(/^[+\-]/) && (p.a = "{" + p.a + "}"), c += p.a + "\\,"), (p.b || p.p) && (c += "{\\vphantom{X}}", c += "^{\\hphantom{" + (p.b || "") + "}}_{\\hphantom{" + (p.p || "") + "}}", c += "{\\vphantom{X}}", c += "^{\\smash[t]{\\vphantom{2}}\\mathllap{" + (p.b || "") + "}}", c += "_{\\vphantom{2}\\mathllap{\\smash[t]{" + (p.p || "") + "}}}"), p.o && (p.o.match(/^[+\-]/) && (p.o = "{" + p.o + "}"), c += p.o), i.dType === "kv" ? ((p.d || p.q) && (c += "{\\vphantom{X}}"), p.d && (c += "^{" + p.d + "}"), p.q && (c += "_{\\smash[t]{" + p.q + "}}")) : i.dType === "oxidation" ? (p.d && (c += "{\\vphantom{X}}", c += "^{" + p.d + "}"), p.q && (c += "{\\vphantom{X}}", c += "_{\\smash[t]{" + p.q + "}}")) : (p.q && (c += "{\\vphantom{X}}", c += "_{\\smash[t]{" + p.q + "}}"), p.d && (c += "{\\vphantom{X}}", c += "^{" + p.d + "}"));
              break;
            case "rm":
            case "roman numeral":
              c = "\\mathrm{" + i.p1 + "}";
              break;
            case "text":
              i.p1.match(/[\^_]/) ? (i.p1 = i.p1.replace(" ", "~").replace("-", "\\text{-}"), c = "\\mathrm{" + i.p1 + "}") : c = "\\text{" + i.p1 + "}";
              break;
            case "state of aggregation":
              c = "\\mskip2mu " + f._goInner(i.p1);
              break;
            case "state of aggregation subscript":
              c = "\\mskip1mu " + f._goInner(i.p1);
              break;
            case "bond":
              if (!(c = f._getBond(i.kind_)))
                throw ["MhchemErrorBond", "mhchem Error. Unknown bond type (" + i.kind_ + ")"];
              break;
            case "frac":
              var g = "\\frac{" + i.p1 + "}{" + i.p2 + "}";
              c = "\\mathchoice{\\textstyle" + g + "}{" + g + "}{" + g + "}{" + g + "}";
              break;
            case "pu-frac":
              var j = "\\frac{" + f._goInner(i.p1) + "}{" + f._goInner(i.p2) + "}";
              c = "\\mathchoice{\\textstyle" + j + "}{" + j + "}{" + j + "}{" + j + "}";
              break;
            case "tex-math":
            case "1st-level escape":
              c = i.p1 + " ";
              break;
            case "frac-ce":
              c = "\\frac{" + f._goInner(i.p1) + "}{" + f._goInner(i.p2) + "}";
              break;
            case "overset":
              c = "\\overset{" + f._goInner(i.p1) + "}{" + f._goInner(i.p2) + "}";
              break;
            case "underset":
              c = "\\underset{" + f._goInner(i.p1) + "}{" + f._goInner(i.p2) + "}";
              break;
            case "underbrace":
              c = "\\underbrace{" + f._goInner(i.p1) + "}_{" + f._goInner(i.p2) + "}";
              break;
            case "color":
              c = "{\\color{" + i.color1 + "}{" + f._goInner(i.color2) + "}}";
              break;
            case "color0":
              c = "\\color{" + i.color + "}";
              break;
            case "arrow":
              var b = { rd: f._goInner(i.rd), rq: f._goInner(i.rq) }, x = "\\x" + f._getArrow(i.r);
              b.rq && (x += "[{" + b.rq + "}]"), c = x += b.rd ? "{" + b.rd + "}" : "{}";
              break;
            case "operator":
              c = f._getOperator(i.kind_);
              break;
            case "space":
              c = " ";
              break;
            case "entitySkip":
            case "pu-space-1":
              c = "~";
              break;
            case "pu-space-2":
              c = "\\mkern3mu ";
              break;
            case "1000 separator":
              c = "\\mkern2mu ";
              break;
            case "commaDecimal":
              c = "{,}";
              break;
            case "comma enumeration L":
              c = "{" + i.p1 + "}\\mkern6mu ";
              break;
            case "comma enumeration M":
              c = "{" + i.p1 + "}\\mkern3mu ";
              break;
            case "comma enumeration S":
              c = "{" + i.p1 + "}\\mkern1mu ";
              break;
            case "hyphen":
              c = "\\text{-}";
              break;
            case "addition compound":
              c = "\\,{\\cdot}\\,";
              break;
            case "electron dot":
              c = "\\mkern1mu \\bullet\\mkern1mu ";
              break;
            case "KV x":
              c = "{\\times}";
              break;
            case "prime":
              c = "\\prime ";
              break;
            case "cdot":
              c = "\\cdot ";
              break;
            case "tight cdot":
              c = "\\mkern1mu{\\cdot}\\mkern1mu ";
              break;
            case "times":
              c = "\\times ";
              break;
            case "circa":
              c = "{\\sim}";
              break;
            case "^":
              c = "uparrow";
              break;
            case "v":
              c = "downarrow";
              break;
            case "ellipsis":
              c = "\\ldots ";
              break;
            case "/":
              c = "/";
              break;
            case " / ":
              c = "\\,/\\,";
              break;
            default:
              throw ["MhchemBugT", "mhchem bug T. Please report."];
          }
          return c;
        }, _getArrow: function(i) {
          switch (i) {
            case "->":
            case "→":
            case "⟶":
              return "rightarrow";
            case "<-":
              return "leftarrow";
            case "<->":
              return "leftrightarrow";
            case "<-->":
              return "rightleftarrows";
            case "<=>":
            case "⇌":
              return "rightleftharpoons";
            case "<=>>":
              return "rightequilibrium";
            case "<<=>":
              return "leftequilibrium";
            default:
              throw ["MhchemBugT", "mhchem bug T. Please report."];
          }
        }, _getBond: function(i) {
          switch (i) {
            case "-":
            case "1":
              return "{-}";
            case "=":
            case "2":
              return "{=}";
            case "#":
            case "3":
              return "{\\equiv}";
            case "~":
              return "{\\tripledash}";
            case "~-":
              return "{\\mathrlap{\\raisebox{-.1em}{$-$}}\\raisebox{.1em}{$\\tripledash$}}";
            case "~=":
            case "~--":
              return "{\\mathrlap{\\raisebox{-.2em}{$-$}}\\mathrlap{\\raisebox{.2em}{$\\tripledash$}}-}";
            case "-~-":
              return "{\\mathrlap{\\raisebox{-.2em}{$-$}}\\mathrlap{\\raisebox{.2em}{$-$}}\\tripledash}";
            case "...":
              return "{{\\cdot}{\\cdot}{\\cdot}}";
            case "....":
              return "{{\\cdot}{\\cdot}{\\cdot}{\\cdot}}";
            case "->":
              return "{\\rightarrow}";
            case "<-":
              return "{\\leftarrow}";
            case "<":
              return "{<}";
            case ">":
              return "{>}";
            default:
              throw ["MhchemBugT", "mhchem bug T. Please report."];
          }
        }, _getOperator: function(i) {
          switch (i) {
            case "+":
              return " {}+{} ";
            case "-":
              return " {}-{} ";
            case "=":
              return " {}={} ";
            case "<":
              return " {}<{} ";
            case ">":
              return " {}>{} ";
            case "<<":
              return " {}\\ll{} ";
            case ">>":
              return " {}\\gg{} ";
            case "\\pm":
              return " {}\\pm{} ";
            case "\\approx":
            case "$\\approx$":
              return " {}\\approx{} ";
            case "v":
            case "(v)":
              return " \\downarrow{} ";
            case "^":
            case "(^)":
              return " \\uparrow{} ";
            default:
              throw ["MhchemBugT", "mhchem bug T. Please report."];
          }
        } };
      }(), a = a.default;
    }();
  });
})(Dh);
const Ur = J("mathPreview:"), ts = class ts extends q {
  constructor(e, { text: s }) {
    super(e);
    T(this, "math");
    this.tagName = "div", this.math = s, this.classList = ["mu-math-preview"], this.attributes = {
      spellcheck: "false",
      contenteditable: "false"
    }, this.createDomNode(), this.attachDOMEvents(), this.update();
  }
  static create(e, s) {
    return new ts(e, s);
  }
  get path() {
    return Ur.warn("You can never call `get path` in htmlPreview"), [];
  }
  getState() {
    return Ur.warn("You can never call `getState` in mathPreview"), {};
  }
  attachDOMEvents() {
    const { eventCenter: e } = this.muya;
    e.attachDOMEvent(
      this.domNode,
      "click",
      this.clickHandler.bind(this)
    );
  }
  clickHandler(e) {
    e.preventDefault(), e.stopPropagation();
    const s = this.parent.firstContentInDescendant();
    s == null || s.setCursor(0, 0);
  }
  update(e = this.math) {
    this.math !== e && (this.math = e);
    const { i18n: s } = this.muya;
    if (e)
      try {
        const r = Ja.renderToString(e, {
          displayMode: !0
        });
        this.domNode.innerHTML = r;
      } catch {
        this.domNode.innerHTML = `<div class="mu-math-error">&lt; ${s.t(
          "Invalid Mathematical Formula"
        )} &gt;</div>`;
      }
    else
      this.domNode.innerHTML = `<div class="mu-empty">&lt; ${s.t(
        "Empty Mathematical Formula"
      )} &gt;</div>`;
  }
};
T(ts, "blockName", "math-preview");
let jn = ts;
const Kr = J("diagramPreview:"), Nh = async ({
  type: n,
  code: t,
  target: e,
  vegaTheme: s,
  mermaidTheme: r
}) => {
  const o = await Ya(n), a = {};
  if (n === "vega-lite" && Object.assign(a, {
    actions: !1,
    tooltip: !1,
    renderer: "svg",
    theme: s
  }), n === "plantuml") {
    const l = o.parse(t);
    e.innerHTML = "", l.insertImgElement(e);
  } else
    n === "vega-lite" ? await o(e, JSON.parse(t), a) : n === "mermaid" && (o.initialize({
      startOnLoad: !1,
      securityLevel: "strict",
      theme: r
    }), await o.parse(t), e.innerHTML = Qr(t, Vr, !0), e.removeAttribute("data-processed"), await o.run({
      nodes: [e]
    }));
}, ss = class ss extends q {
  constructor(e, { text: s, meta: r }) {
    super(e);
    T(this, "code");
    T(this, "type");
    this.tagName = "div", this.code = s, this.type = r.type, this.classList = ["mu-diagram-preview"], this.attributes = {
      spellcheck: "false",
      contenteditable: "false"
    }, this.createDomNode(), this.attachDOMEvents(), this.update();
  }
  static create(e, s) {
    return new ss(e, s);
  }
  get path() {
    return Kr.warn("You can never call `get path` in diagramPreview"), [];
  }
  getState() {
    return Kr.warn("You can never call `getState` in diagramPreview"), {};
  }
  attachDOMEvents() {
    const { eventCenter: e } = this.muya;
    e.attachDOMEvent(
      this.domNode,
      "click",
      this.clickHandler.bind(this)
    );
  }
  clickHandler(e) {
    if (e.preventDefault(), e.stopPropagation(), this.parent == null)
      return;
    const s = this.parent.firstContentInDescendant();
    s == null || s.setCursor(0, 0);
  }
  async update(e = this.code) {
    const { i18n: s } = this.muya;
    if (this.code !== e && (this.code = e), e) {
      this.domNode.innerHTML = s.t("Loading...");
      const { mermaidTheme: r, vegaTheme: o } = this.muya.options, { type: a } = this;
      try {
        await Nh({
          target: this.domNode,
          code: e,
          type: a,
          mermaidTheme: r,
          vegaTheme: o
        });
      } catch {
        this.domNode.innerHTML = `<div class="mu-diagram-error">&lt; ${s.t(
          "Invalid Diagram Code"
        )} &gt;</div>`;
      }
    } else
      this.domNode.innerHTML = `<div class="mu-empty">&lt; ${s.t(
        "Empty Diagram"
      )} &gt;</div>`;
  }
};
T(ss, "blockName", "diagram-preview");
let bn = ss;
k.register(k);
k.register(rc);
k.register(ln);
k.register(lc);
k.register(pn);
k.register(hc);
k.register(mn);
k.register(zd);
k.register(bc);
k.register(un);
k.register(Ys);
k.register(Vs);
k.register(dn);
k.register(hn);
k.register(Jd);
k.register(eh);
k.register(oh);
k.register(ph);
k.register(fh);
k.register(gn);
k.register(en);
k.register(yd);
k.register(Dd);
k.register(Ed);
k.register(fn);
k.register(tn);
k.register(_n);
k.register(sn);
k.register(nn);
k.register(jn);
k.register(rn);
k.register(on);
k.register(an);
k.register(cn);
k.register(bn);
const Bh = {
  paragraph: {
    name: "paragraph",
    text: ""
  },
  "thematic-break": {
    name: "thematic-break",
    text: "---"
    // --- or ___ or ***
  },
  frontmatter: {
    name: "frontmatter",
    text: "",
    meta: {
      lang: "yaml",
      // yaml | toml | json
      style: "-"
      // `-` for yaml | `+` for toml | `;;;` and `{}` for json
    }
  },
  "atx-heading": {
    name: "atx-heading",
    meta: {
      level: 1
      // 1 ~ 6
    },
    text: "# "
    // can not contain `\n`!
  },
  table: {
    name: "table",
    children: [
      {
        name: "table.row",
        children: [
          {
            name: "table.cell",
            meta: {
              align: "none"
              // none left center right, cells in the same column has the same alignment.
            },
            text: ""
          },
          {
            name: "table.cell",
            meta: {
              align: "none"
              // none left center right, cells in the same column has the same alignment.
            },
            text: ""
          }
        ]
      },
      {
        name: "table.row",
        children: [
          {
            name: "table.cell",
            meta: {
              align: "none"
              // none left center right, cells in the same column has the same alignment.
            },
            text: ""
          },
          {
            name: "table.cell",
            meta: {
              align: "none"
              // none left center right, cells in the same column has the same alignment.
            },
            text: ""
          }
        ]
      }
    ]
  },
  "math-block": {
    name: "math-block",
    text: "",
    meta: {
      mathStyle: ""
      // '' for `$$` and 'gitlab' for ```math
    }
  },
  "html-block": {
    name: "html-block",
    text: `<div>

</div>`
  },
  "code-block": {
    name: "code-block",
    meta: {
      type: "fenced",
      // indented or fenced
      lang: ""
      // lang will be enpty string if block is indented block. set language will auto change into fenced code block.
    },
    text: ""
  },
  "block-quote": {
    name: "block-quote",
    children: [
      {
        // Can contains any type and number of leaf blocks.
        name: "paragraph",
        text: ""
      }
    ]
  },
  "order-list": {
    name: "order-list",
    meta: {
      start: 1,
      // 0 ~ 999999999
      loose: !0,
      // true or false, true is loose list and false is tight.
      delimiter: "."
      // . or )
    },
    children: [
      // List Item
      {
        name: "list-item",
        // Can contains any type and number of leaf blocks.
        children: [
          {
            name: "paragraph",
            text: ""
          }
        ]
      }
    ]
  },
  "bullet-list": {
    name: "bullet-list",
    meta: {
      marker: "-",
      // - + *
      loose: !1
      // true or false
    },
    children: [
      // List Item
      {
        name: "list-item",
        // Can contains any type and number of leaf blocks.
        children: [
          {
            name: "paragraph",
            text: ""
          }
        ]
      }
    ]
  },
  "task-list": {
    name: "task-list",
    meta: {
      marker: "-",
      // - + *
      loose: !1
    },
    children: [
      {
        name: "task-list-item",
        meta: {
          checked: !0
          // true or false
        },
        children: [
          {
            name: "paragraph",
            text: ""
          }
        ]
      }
    ]
  },
  diagram: {
    name: "diagram",
    text: "",
    meta: {
      lang: "yaml",
      type: "mermaid"
    }
  }
};
export {
  oh as B,
  hn as C,
  qe as F,
  Jd as O,
  ln as P,
  k as S,
  Rs as a,
  Fe as b,
  Bh as e,
  Mh as h,
  Ih as i,
  J as n,
  Xe as o,
  Rh as p,
  Ph as s,
  jd as t
};
