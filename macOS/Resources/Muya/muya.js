var $n = Object.defineProperty;
var xn = (t, e, n) => e in t ? $n(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var j = (t, e, n) => (xn(t, typeof e != "symbol" ? e + "" : e, n), n);
import { d as ht, i as Rn, D as Ln, s as Un, P as Bn, a as Pn, U as jn, m as Hn, c as Ae, b as an, C as b, u as on, e as Dn, f as rt, g as Fn, B as Gn, h as Vn, j as ln, k as Wn, l as Vt, n as Kn, o as zn, p as qn, q as Wt, t as Yn, r as Xn, v as Kt, S as Jn, w as Qn, x as At, y as Zn, M as es } from "./chunks/emojis.bYhmvyOg.js";
import { n as dt, e as vt, S as Pe, C as ts, h as cn, i as ns, o as Mt, a as zt, t as ss } from "./chunks/emptyStates.uTrnPSUC.js";
import { D as It, m as nt, w as hn, a as un, s as rs, g as fn, f as is, _ as as, v as os } from "./chunks/getHighlightHtml.yqytLMpn.js";
import ls from "./assets/icons/afda92700ecf3647.png.js";
import cs from "./assets/icons/a6766f71eb16f6bd.png.js";
import hs from "./assets/icons/c091372ebb16f3d7.png.js";
import us from "./locales/en.js";
import "./assets/icons/7c1a03a0f912a482.png.js";
class Et {
  constructor(e) {
    this.muya = e;
  }
  get selection() {
    return this.muya.editor.selection;
  }
  get scrollPage() {
    return this.muya.editor.scrollPage;
  }
}
function qt(t, e = {}) {
  e = Object.assign({}, It, e);
  const { frontMatter: n, math: s, isGitlabCompatibilityEnabled: r, superSubScript: i } = e;
  let a = "";
  if (nt.use({
    walkTokens: hn({ math: s, isGitlabCompatibilityEnabled: r })
  }), s && nt.use(
    un({
      throwOnError: !1,
      useKatexRender: !1
    })
  ), i && nt.use(rs()), n) {
    const { token: o, src: h } = fn(t);
    o && (a = is(o), t = h);
  }
  return a += nt(t), a;
}
function fs(t) {
  return t.type === "list";
}
const Yt = /^ {0,3}([*+-]|\d{1,9}(?:\.|\)))/, gt = (t = []) => {
  const e = [];
  for (const n of t)
    if (fs(n))
      if (n.ordered === !0) {
        n.listType = "order";
        for (const s of n.items) {
          s.tokens = gt(s.tokens), s.listItemType = "order";
          const r = Yt.exec(s.raw);
          s.bulletMarkerOrDelimiter = r ? r[1].slice(-1) : "";
        }
        e.push(n);
      } else {
        const { type: s, raw: r, ordered: i, loose: a } = n;
        let o = null;
        for (const h of n.items) {
          h.tokens = gt(h.tokens);
          const f = h.task ? "task" : "bullet";
          h.listItemType = f;
          const c = Yt.exec(h.raw);
          h.bulletMarkerOrDelimiter = c ? c[1] : "", o ? f === o.listType ? o.items.push(h) : (e.push(o), o = {
            type: s,
            raw: r,
            ordered: i,
            start: "",
            loose: a,
            listType: f,
            items: [h]
          }) : o = {
            type: s,
            raw: r,
            ordered: i,
            start: "",
            loose: a,
            listType: f,
            items: [h]
          };
        }
        o && e.push(o);
      }
    else
      n.type === "blockquote" && (n.tokens = gt(n.tokens)), e.push(n);
  return e;
};
function ds(t, e = It) {
  e = Object.assign({}, It, e);
  const { math: n, frontMatter: s } = e;
  let r = [];
  if (n && nt.use(
    un({
      throwOnError: !1,
      useKatexRender: !1
    })
  ), s) {
    const { token: i, src: a } = fn(t);
    i && (r.push(i), t = a);
  }
  return r.push(...new as().blockTokens(t)), r = gt(r), nt.walkTokens(r, hn(e)), r;
}
const ps = dt("export markdown: "), gs = (t) => t.replace(/([^\\])\|/g, "$1\\|");
class dn {
  constructor({
    listIndentation: e
  } = {
    listIndentation: 1
  }) {
    j(this, "listType");
    j(this, "isLooseParentList");
    j(this, "listIndentation");
    j(this, "listIndentationCount");
    this.listType = [], this.isLooseParentList = !0, this.listIndentation = "number", e === "dfm" ? (this.listIndentation = "dfm", this.listIndentationCount = 4) : typeof e == "number" ? this.listIndentationCount = Math.min(Math.max(e, 1), 4) : this.listIndentationCount = 1;
  }
  generate(e) {
    return this.convertStatesToMarkdown(e);
  }
  convertStatesToMarkdown(e, n = "", s = "") {
    const r = [];
    let i = "";
    for (const a of e)
      switch (a.name !== "order-list" && a.name !== "bullet-list" && a.name !== "task-list" && (i = ""), a.name) {
        case "frontmatter":
          r.push(this.serializeFrontMatter(a));
          break;
        case "paragraph":
        case "thematic-break":
          this.insertLineBreak(r, n), r.push(this.serializeTextParagraph(a, n));
          break;
        case "atx-heading":
          this.insertLineBreak(r, n), r.push(this.serializeAtxHeading(a, n));
          break;
        case "setext-heading":
          this.insertLineBreak(r, n), r.push(this.serializeSetextHeading(a, n));
          break;
        case "code-block":
          this.insertLineBreak(r, n), r.push(this.serializeCodeBlock(a, n));
          break;
        case "html-block":
          this.insertLineBreak(r, n), r.push(this.serializeHtmlBlock(a, n));
          break;
        case "math-block":
          this.insertLineBreak(r, n), r.push(this.serializeMathBlock(a, n));
          break;
        case "diagram":
          this.insertLineBreak(r, n), r.push(this.serializeDiagramBlock(a, n));
          break;
        case "block-quote":
          this.insertLineBreak(r, n), r.push(this.serializeBlockquote(a, n));
          break;
        case "table":
          this.insertLineBreak(r, n), r.push(this.serializeTable(a, n));
          break;
        case "order-list":
        case "bullet-list":
        case "task-list": {
          let o = this.isLooseParentList;
          this.isLooseParentList = !0;
          const { meta: h } = a, f = h.delimiter || h.marker;
          i && i !== f && (o = !1), i = f, o && this.insertLineBreak(r, n), this.listType.push(ht(h)), r.push(this.serializeList(a, n, s)), this.listType.pop();
          break;
        }
        case "list-item":
        case "task-list-item": {
          const { loose: o } = this.listType[this.listType.length - 1];
          this.isLooseParentList = o, o && this.insertLineBreak(r, n), r.push(this.serializeListItem(a, n + s)), this.isLooseParentList = !0;
          break;
        }
        default: {
          ps.warn(
            "convertStatesToMarkdown: Unknown state type:",
            a.name
          );
          break;
        }
      }
    return r.join("");
  }
  insertLineBreak(e, n) {
    e.length && e.push(`${n}
`);
  }
  serializeFrontMatter(e) {
    let n, s;
    switch (e.meta.lang) {
      case "yaml":
        n = `---
`, s = `---
`;
        break;
      case "toml":
        n = `+++
`, s = `+++
`;
        break;
      case "json":
        e.meta.style === ";" ? (n = `;;;
`, s = `;;;
`) : (n = `{
`, s = `}
`);
        break;
    }
    const r = [];
    r.push(n);
    const { text: i } = e, a = i.split(`
`);
    for (const o of a)
      r.push(`${o}
`);
    return r.push(s), r.join("");
  }
  serializeTextParagraph(e, n) {
    const { text: s } = e;
    return s.split(`
`).map((i) => `${n}${i}`).join(`
`) + `
`;
  }
  serializeAtxHeading(e, n) {
    const { text: s } = e, r = s.match(/(#{1,6})(.*)/), i = `${r == null ? void 0 : r[1]} ${r == null ? void 0 : r[2].trim()}`;
    return `${n}${i}
`;
  }
  serializeSetextHeading(e, n) {
    const { text: s, meta: r } = e, { underline: i } = r;
    return s.trim().split(`
`).map((o) => `${n}${o}`).join(`
`) + `
${n}${i.trim()}
`;
  }
  serializeCodeBlock(e, n) {
    const s = [], { text: r, meta: i } = e, a = r.split(`
`), { type: o, lang: h } = i;
    return o === "fenced" ? (s.push(`${n}${h ? "```" + h + `
` : "```\n"}`), a.forEach((f) => {
      s.push(`${n}${f}
`);
    }), s.push(n + "```\n")) : a.forEach((f) => {
      s.push(`${n}    ${f}
`);
    }), s.join("");
  }
  serializeHtmlBlock(e, n) {
    const s = [], { text: r } = e, i = r.split(`
`);
    for (const a of i)
      s.push(`${n}${a}
`);
    return s.join("");
  }
  serializeMathBlock(e, n) {
    const s = [], {
      text: r,
      meta: { mathStyle: i }
    } = e, a = r.split(`
`);
    s.push(n + (i === "" ? `$$
` : "```math\n"));
    for (const o of a)
      s.push(`${n}${o}
`);
    return s.push(n + (i === "" ? `$$
` : "```\n")), s.join("");
  }
  serializeDiagramBlock(e, n) {
    const s = [], {
      text: r,
      meta: { type: i }
    } = e, a = r.split(`
`);
    s.push(n + "```" + i + `
`);
    for (const o of a)
      s.push(`${n}${o}
`);
    return s.push(n + "```\n"), s.join("");
  }
  serializeBlockquote(e, n) {
    const { children: s } = e, r = `${n}> `;
    return this.convertStatesToMarkdown(s, r);
  }
  serializeTable(e, n) {
    const s = [], r = e.children.length, i = e.children[0].children.length, a = [];
    for (const c of e.children)
      a.push(
        c.children.map((l) => gs(l.text.trim()))
      );
    const o = e.children[0].children.map((c) => ({
      width: 5,
      align: c.meta.align
    }));
    let h, f;
    for (h = 0; h < r; h++)
      for (f = 0; f < i; f++)
        o[f].width = Math.max(
          o[f].width,
          a[h][f].length + 2
        );
    return a.forEach((c, l) => {
      const u = n + "|" + c.map((d, g) => ` ${d + " ".repeat(o[g].width)}`.substring(0, o[g].width)).join("|") + "|";
      if (s.push(u), l === 0) {
        const d = n + "|" + o.map(({ width: g, align: k }) => {
          let E = "-".repeat(g - 2);
          switch (k) {
            case "left":
              E = `:${E} `;
              break;
            case "center":
              E = `:${E}:`;
              break;
            case "right":
              E = ` ${E}:`;
              break;
            default:
              E = ` ${E} `;
              break;
          }
          return E;
        }).join("|") + "|";
        s.push(d);
      }
    }), s.join(`
`) + `
`;
  }
  serializeList(e, n, s) {
    const { children: r } = e;
    return this.convertStatesToMarkdown(r, n, s);
  }
  serializeListItem(e, n) {
    const s = [], r = this.listType[this.listType.length - 1], { marker: i, delimiter: a, start: o } = r, h = !!i, { children: f, name: c } = e;
    let l;
    if (h)
      l = i ? `${i} ` : "- ";
    else {
      let k = o;
      (this.listIndentation === "dfm" && k > 99 || k > 999999999) && (k = 1), r.start++, l = `${k}${a || "."} `;
    }
    const u = n + " ".repeat(l.length);
    let d = "";
    const { listIndentation: g } = this;
    return g === "dfm" ? d = " ".repeat(4 - l.length) : g === "number" && (d = " ".repeat(this.listIndentationCount - 1)), c === "task-list-item" && (l += e.meta.checked ? "[x] " : "[ ] "), s.push(`${n}${l}`), s.push(
      this.convertStatesToMarkdown(f, u, d).substring(
        u.length
      )
    ), s.join("");
  }
}
class ms extends Et {
  constructor() {
    super(...arguments);
    j(this, "copyType", "normal");
    // `normal` or `copyAsMarkdown` or `copyAsHtml` or `copyCodeContent`
    j(this, "copyInfo", "");
  }
  getClipboardData() {
    const { copyType: n, copyInfo: s } = this;
    if (n === "copyCodeContent")
      return {
        html: "",
        text: s
      };
    let r = "", i = "";
    const a = this.selection.getSelection();
    if (!a)
      return { html: i, text: r };
    const { isSelectionInSameBlock: o, anchor: h, anchorBlock: f, focus: c, focusBlock: l } = a, {
      frontMatter: u = !0,
      math: d,
      isGitlabCompatibilityEnabled: g,
      superSubScript: k
    } = this.muya.options;
    if (o) {
      const X = Math.min(h.offset, c.offset), re = Math.max(h.offset, c.offset);
      return r = f.text.substring(X, re), i = qt(r, {
        frontMatter: u,
        math: d,
        isGitlabCompatibilityEnabled: g,
        superSubScript: k
      }), { html: i, text: r };
    }
    const E = [], y = f.outMostBlock, A = l.outMostBlock, _ = this.scrollPage.offset(y), N = this.scrollPage.offset(A), m = _ <= N ? y : A, C = _ <= N ? A : y, O = _ <= N ? f : l, D = _ <= N ? l : f, V = _ <= N ? h.offset : c.offset, H = _ <= N ? c.offset : h.offset, ue = (X) => {
      const re = X === "start" ? m : C, ge = X === "start" ? O : D;
      if (/block-quote|code-block|html-block|table|math-block|frontmatter|diagram/.test(
        re.blockName
      ))
        E.push(re.getState());
      else if (/bullet-list|order-list|task-list/.test(re.blockName)) {
        const Me = re.blockName === "task-list" ? "task-list-item" : "list-item", Qe = ge.farthestBlock(Me), Ve = re.offset(Qe), { name: ze, meta: Ze, children: at } = re.getState();
        E.push({
          name: ze,
          meta: Ze,
          children: at.filter(
            (je, ot) => X === "start" ? ot >= Ve : ot <= Ve
          )
        });
      } else
        X === "start" && V < O.text.length ? E.push({
          name: "paragraph",
          text: O.text.substring(V)
        }) : X === "end" && H > 0 && E.push({
          name: "paragraph",
          text: D.text.substring(0, H)
        });
    };
    if (y === A)
      if (/block-quote|table/.test(y.blockName))
        E.push(y.getState());
      else {
        const X = y.blockName === "task-list" ? "task-list-item" : "list-item", re = f.farthestBlock(X), ge = l.farthestBlock(X), Me = y.offset(
          re
        ), Qe = y.offset(
          ge
        ), Ve = Math.min(Me, Qe), ze = Math.max(Me, Qe), { name: Ze, meta: at, children: je } = y.getState();
        E.push({
          name: Ze,
          meta: at,
          children: je.filter(
            (ot, lt) => lt >= Ve && lt <= ze
          )
        });
      }
    else {
      ue("start");
      let X = m == null ? void 0 : m.next;
      for (; X && X !== C; )
        E.push(X.getState()), X = X.next;
      ue("end");
    }
    return r = new dn().generate(E), i = qt(r, {
      frontMatter: u,
      math: d,
      isGitlabCompatibilityEnabled: g,
      superSubScript: k
    }), { html: i, text: r };
  }
  copyHandler(n) {
    const { html: s, text: r } = this.getClipboardData(), { copyType: i } = this;
    if (n.clipboardData)
      switch (i) {
        case "normal": {
          n.clipboardData.setData("text/html", s), n.clipboardData.setData("text/plain", r);
          break;
        }
        case "copyAsHtml": {
          n.clipboardData.setData("text/html", ""), n.clipboardData.setData("text/plain", s);
          break;
        }
        case "copyAsMarkdown": {
          n.clipboardData.setData("text/html", ""), n.clipboardData.setData("text/plain", r);
          break;
        }
        case "copyCodeContent": {
          n.clipboardData.setData("text/html", ""), n.clipboardData.setData("text/plain", r);
          break;
        }
      }
  }
}
class ys extends Et {
  cutHandler() {
    const e = this.selection.getSelection();
    if (!e)
      return;
    const {
      isSelectionInSameBlock: n,
      anchor: s,
      anchorBlock: r,
      focus: i,
      focusBlock: a,
      direction: o
    } = e;
    if (n) {
      const { text: _ } = r, N = o === "forward" ? s.offset : i.offset, m = o === "forward" ? i.offset : s.offset;
      return r.text = _.substring(0, N) + _.substring(m), r.setCursor(N, N, !0);
    }
    const h = r.outMostBlock, f = a.outMostBlock, c = o === "forward" ? h : f, l = o === "forward" ? f : h, u = o === "forward" ? r : a, d = o === "forward" ? a : r, g = o === "forward" ? s.offset : i.offset, k = o === "forward" ? i.offset : s.offset;
    let E, y;
    const A = (_) => {
      const N = _ === "start" ? c : l, m = _ === "start" ? u : d;
      if (/block-quote|code-block|html-block|table|math-block|frontmatter|diagram/.test(
        N.blockName
      ))
        if (_ === "start") {
          const C = N.blockName === "block-quote" ? ht(vt["block-quote"]) : ht(vt.paragraph), O = Pe.loadBlock(C.name).create(
            this.muya,
            C
          );
          N.replaceWith(O), E = O.firstContentInDescendant(), y = 0;
        } else
          N.remove();
      else if (/bullet-list|order-list|task-list/.test(N.blockName)) {
        const C = N.blockName === "task-list" ? "task-list-item" : "list-item", O = m.farthestBlock(C), D = N.offset(O);
        N.forEach((V, H) => {
          if (_ === "start" && H === D) {
            const ue = {
              name: C,
              children: [
                {
                  name: "paragraph",
                  text: ""
                }
              ]
            }, le = Pe.loadBlock(ue.name).create(
              this.muya,
              ue
            );
            V.replaceWith(le), E = le.firstContentInDescendant(), y = 0;
          } else
            (_ === "start" && H > D || _ === "end" && H <= D) && (V.isOnlyChild() ? N.remove() : V.remove());
        });
      } else
        _ === "start" ? (u.text = u.text.substring(0, g), E = u, y = g) : _ === "end" && E && (E.text += d.text.substring(k), l.remove());
    };
    if (h === f)
      if (h.blockName === "block-quote") {
        const _ = ht(vt["block-quote"]), N = Pe.loadBlock(_.name).create(
          this.muya,
          _
        );
        h.replaceWith(N), E = N.firstContentInDescendant(), y = 0;
      } else if (h.blockName === "table") {
        const _ = {
          name: "paragraph",
          text: ""
        }, N = Pe.loadBlock(_.name).create(
          this.muya,
          _
        );
        h.replaceWith(N), E = N.firstContentInDescendant(), y = 0;
      } else {
        const _ = h.blockName === "task-list" ? "task-list-item" : "list-item", N = r.farthestBlock(_), m = a.farthestBlock(_), C = h.offset(N), O = h.offset(m), D = Math.min(C, O), V = Math.max(C, O);
        h.forEach((H, ue) => {
          if (ue === D) {
            const le = {
              name: _,
              children: [
                {
                  name: "paragraph",
                  text: ""
                }
              ]
            }, X = Pe.loadBlock(le.name).create(
              this.muya,
              le
            );
            H.replaceWith(X), E = X.firstContentInDescendant(), y = 0;
          } else
            ue > D && ue <= V && H.remove();
        });
      }
    else {
      A("start");
      let _ = c.next;
      for (; _ && _ !== l; ) {
        const N = _.next;
        _.remove(), _ = N;
      }
      A("end");
    }
    if (E && E.setCursor(y, y, !0), this.scrollPage.length() === 0) {
      const _ = {
        name: "paragraph",
        text: ""
      }, N = Pe.loadBlock("paragraph").create(
        this.muya,
        _
      );
      this.scrollPage.append(N, "user"), E = N.firstContentInDescendant(), E.setCursor(0, 0, !0);
    }
  }
}
var Xt = /highlight-(?:text|source)-([a-z0-9]+)/;
function pn(t) {
  t.addRule("highlightedCodeBlock", {
    filter: function(e) {
      var n = e.firstChild;
      return e.nodeName === "DIV" && Xt.test(e.className) && n && n.nodeName === "PRE";
    },
    replacement: function(e, n, s) {
      var r = n.className || "", i = (r.match(Xt) || [null, ""])[1];
      return `

` + s.fence + i + `
` + n.firstChild.textContent + `
` + s.fence + `

`;
    }
  });
}
function gn(t) {
  t.addRule("strikethrough", {
    filter: ["del", "s", "strike"],
    replacement: function(e) {
      return "~" + e + "~";
    }
  });
}
var bs = Array.prototype.indexOf, ks = Array.prototype.every, it = {};
it.tableCell = {
  filter: ["th", "td"],
  replacement: function(t, e) {
    return Rt(yn(e)) ? t : wt(t, e);
  }
};
it.tableRow = {
  filter: "tr",
  replacement: function(t, e) {
    const n = yn(e);
    if (Rt(n))
      return t;
    var s = "", r = { left: ":--", right: "--:", center: ":-:" };
    if (Es(e)) {
      const h = bn(n);
      for (var i = 0; i < h; i++) {
        const f = h >= e.childNodes.length ? null : e.childNodes[i];
        var a = "---", o = f ? (f.getAttribute("align") || "").toLowerCase() : "";
        o && (a = r[o] || a), f ? s += wt(a, e.childNodes[i]) : s += wt(a, null, i);
      }
    }
    return `
` + t + (s ? `
` + s : "");
  }
};
it.table = {
  // Only convert tables with a heading row.
  // Tables with no heading row are kept using `keep` (see below).
  filter: function(t) {
    return t.nodeName === "TABLE";
  },
  replacement: function(t, e) {
    if (Rt(e))
      return t;
    t = t.replace(/\n+/g, `
`);
    var n = t.trim().split(`
`);
    n.length >= 2 && (n = n[1]);
    var s = n.indexOf("| ---") === 0, r = bn(e), i = "";
    return r && !s && (i = "|" + "     |".repeat(r) + `
|` + " --- |".repeat(r)), `

` + i + t + `

`;
  }
};
it.tableSection = {
  filter: ["thead", "tbody", "tfoot"],
  replacement: function(t) {
    return t;
  }
};
function Es(t) {
  var e = t.parentNode;
  return e.nodeName === "THEAD" || e.firstChild === t && (e.nodeName === "TABLE" || Cs(e)) && ks.call(t.childNodes, function(n) {
    return n.nodeName === "TH";
  });
}
function Cs(t) {
  var e = t.previousSibling;
  return t.nodeName === "TBODY" && (!e || e.nodeName === "THEAD" && /^\s*$/i.test(e.textContent));
}
function wt(t, e = null, n = null) {
  n === null && (n = bs.call(e.parentNode.childNodes, e));
  var s = " ";
  n === 0 && (s = "| ");
  let r = t.trim().replace(/\n\r/g, "<br>").replace(/\n/g, "<br>");
  for (r = r.replace(/\|+/g, "\\|"); r.length < 3; )
    r += " ";
  return e && (r = vs(r, e, " ")), s + r + " |";
}
function mn(t) {
  if (!t.childNodes)
    return !1;
  for (let e = 0; e < t.childNodes.length; e++) {
    const n = t.childNodes[e];
    if (n.nodeName === "TABLE" || mn(n))
      return !0;
  }
  return !1;
}
function Rt(t) {
  return !!(!t || !t.rows || t.rows.length === 1 && t.rows[0].childNodes.length <= 1 || mn(t));
}
function yn(t) {
  let e = t.parentNode;
  for (; e.nodeName !== "TABLE"; )
    if (e = e.parentNode, !e)
      return null;
  return e;
}
function vs(t, e, n) {
  const s = e.getAttribute("colspan") || 1;
  for (let r = 1; r < s; r++)
    t += " | " + n.repeat(3);
  return t;
}
function bn(t) {
  let e = 0;
  for (let n = 0; n < t.rows.length; n++) {
    const r = t.rows[n].childNodes.length;
    r > e && (e = r);
  }
  return e;
}
function kn(t) {
  t.keep(function(n) {
    return n.nodeName === "TABLE";
  });
  for (var e in it)
    t.addRule(e, it[e]);
}
function En(t) {
  t.addRule("taskListItems", {
    filter: function(e) {
      return e.type === "checkbox" && e.parentNode.nodeName === "LI";
    },
    replacement: function(e, n) {
      return (n.checked ? "[x]" : "[ ]") + " ";
    }
  });
}
function Ms(t) {
  t.use([
    pn,
    gn,
    kn,
    En
  ]);
}
const _s = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  gfm: Ms,
  highlightedCodeBlock: pn,
  strikethrough: gn,
  tables: kn,
  taskListItems: En
}, Symbol.toStringTag, { value: "Module" }));
function Os(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e];
    for (var s in n)
      n.hasOwnProperty(s) && (t[s] = n[s]);
  }
  return t;
}
function St(t, e) {
  return Array(e + 1).join(t);
}
function Ts(t) {
  return t.replace(/^\n*/, "");
}
function Ns(t) {
  for (var e = t.length; e > 0 && t[e - 1] === `
`; )
    e--;
  return t.substring(0, e);
}
var As = [
  "ADDRESS",
  "ARTICLE",
  "ASIDE",
  "AUDIO",
  "BLOCKQUOTE",
  "BODY",
  "CANVAS",
  "CENTER",
  "DD",
  "DIR",
  "DIV",
  "DL",
  "DT",
  "FIELDSET",
  "FIGCAPTION",
  "FIGURE",
  "FOOTER",
  "FORM",
  "FRAMESET",
  "H1",
  "H2",
  "H3",
  "H4",
  "H5",
  "H6",
  "HEADER",
  "HGROUP",
  "HR",
  "HTML",
  "ISINDEX",
  "LI",
  "MAIN",
  "MENU",
  "NAV",
  "NOFRAMES",
  "NOSCRIPT",
  "OL",
  "OUTPUT",
  "P",
  "PRE",
  "SECTION",
  "TABLE",
  "TBODY",
  "TD",
  "TFOOT",
  "TH",
  "THEAD",
  "TR",
  "UL"
];
function Lt(t) {
  return Ut(t, As);
}
var Cn = [
  "AREA",
  "BASE",
  "BR",
  "COL",
  "COMMAND",
  "EMBED",
  "HR",
  "IMG",
  "INPUT",
  "KEYGEN",
  "LINK",
  "META",
  "PARAM",
  "SOURCE",
  "TRACK",
  "WBR"
];
function vn(t) {
  return Ut(t, Cn);
}
function Is(t) {
  return _n(t, Cn);
}
var Mn = [
  "A",
  "TABLE",
  "THEAD",
  "TBODY",
  "TFOOT",
  "TH",
  "TD",
  "IFRAME",
  "SCRIPT",
  "AUDIO",
  "VIDEO"
];
function ws(t) {
  return Ut(t, Mn);
}
function Ss(t) {
  return _n(t, Mn);
}
function Ut(t, e) {
  return e.indexOf(t.nodeName) >= 0;
}
function _n(t, e) {
  return t.getElementsByTagName && e.some(function(n) {
    return t.getElementsByTagName(n).length;
  });
}
var Ne = {};
Ne.paragraph = {
  filter: "p",
  replacement: function(t) {
    return `

` + t + `

`;
  }
};
Ne.lineBreak = {
  filter: "br",
  replacement: function(t, e, n) {
    return n.br + `
`;
  }
};
Ne.heading = {
  filter: ["h1", "h2", "h3", "h4", "h5", "h6"],
  replacement: function(t, e, n) {
    var s = Number(e.nodeName.charAt(1));
    if (n.headingStyle === "setext" && s < 3) {
      var r = St(s === 1 ? "=" : "-", t.length);
      return `

` + t + `
` + r + `

`;
    } else
      return `

` + St("#", s) + " " + t + `

`;
  }
};
Ne.blockquote = {
  filter: "blockquote",
  replacement: function(t) {
    return t = t.replace(/^\n+|\n+$/g, ""), t = t.replace(/^/gm, "> "), `

` + t + `

`;
  }
};
Ne.list = {
  filter: ["ul", "ol"],
  replacement: function(t, e) {
    var n = e.parentNode;
    return n.nodeName === "LI" && n.lastElementChild === e ? `
` + t : `

` + t + `

`;
  }
};
Ne.listItem = {
  filter: "li",
  replacement: function(t, e, n) {
    t = t.replace(/^\n+/, "").replace(/\n+$/, `
`).replace(/\n/gm, `
    `);
    var s = n.bulletListMarker + "   ", r = e.parentNode;
    if (r.nodeName === "OL") {
      var i = r.getAttribute("start"), a = Array.prototype.indexOf.call(r.children, e);
      s = (i ? Number(i) + a : a + 1) + ".  ";
    }
    return s + t + (e.nextSibling && !/\n$/.test(t) ? `
` : "");
  }
};
Ne.indentedCodeBlock = {
  filter: function(t, e) {
    return e.codeBlockStyle === "indented" && t.nodeName === "PRE" && t.firstChild && t.firstChild.nodeName === "CODE";
  },
  replacement: function(t, e, n) {
    return `

    ` + e.firstChild.textContent.replace(/\n/g, `
    `) + `

`;
  }
};
Ne.fencedCodeBlock = {
  filter: function(t, e) {
    return e.codeBlockStyle === "fenced" && t.nodeName === "PRE" && t.firstChild && t.firstChild.nodeName === "CODE";
  },
  replacement: function(t, e, n) {
    for (var s = e.firstChild.getAttribute("class") || "", r = (s.match(/language-(\S+)/) || [null, ""])[1], i = e.firstChild.textContent, a = n.fence.charAt(0), o = 3, h = new RegExp("^" + a + "{3,}", "gm"), f; f = h.exec(i); )
      f[0].length >= o && (o = f[0].length + 1);
    var c = St(a, o);
    return `

` + c + r + `
` + i.replace(/\n$/, "") + `
` + c + `

`;
  }
};
Ne.horizontalRule = {
  filter: "hr",
  replacement: function(t, e, n) {
    return `

` + n.hr + `

`;
  }
};
Ne.inlineLink = {
  filter: function(t, e) {
    return e.linkStyle === "inlined" && t.nodeName === "A" && t.getAttribute("href");
  },
  replacement: function(t, e) {
    var n = e.getAttribute("href"), s = mt(e.getAttribute("title"));
    return s && (s = ' "' + s + '"'), "[" + t + "](" + n + s + ")";
  }
};
Ne.referenceLink = {
  filter: function(t, e) {
    return e.linkStyle === "referenced" && t.nodeName === "A" && t.getAttribute("href");
  },
  replacement: function(t, e, n) {
    var s = e.getAttribute("href"), r = mt(e.getAttribute("title"));
    r && (r = ' "' + r + '"');
    var i, a;
    switch (n.linkReferenceStyle) {
      case "collapsed":
        i = "[" + t + "][]", a = "[" + t + "]: " + s + r;
        break;
      case "shortcut":
        i = "[" + t + "]", a = "[" + t + "]: " + s + r;
        break;
      default:
        var o = this.references.length + 1;
        i = "[" + t + "][" + o + "]", a = "[" + o + "]: " + s + r;
    }
    return this.references.push(a), i;
  },
  references: [],
  append: function(t) {
    var e = "";
    return this.references.length && (e = `

` + this.references.join(`
`) + `

`, this.references = []), e;
  }
};
Ne.emphasis = {
  filter: ["em", "i"],
  replacement: function(t, e, n) {
    return t.trim() ? n.emDelimiter + t + n.emDelimiter : "";
  }
};
Ne.strong = {
  filter: ["strong", "b"],
  replacement: function(t, e, n) {
    return t.trim() ? n.strongDelimiter + t + n.strongDelimiter : "";
  }
};
Ne.code = {
  filter: function(t) {
    var e = t.previousSibling || t.nextSibling, n = t.parentNode.nodeName === "PRE" && !e;
    return t.nodeName === "CODE" && !n;
  },
  replacement: function(t) {
    if (!t)
      return "";
    t = t.replace(/\r?\n|\r/g, " ");
    for (var e = /^`|^ .*?[^ ].* $|`$/.test(t) ? " " : "", n = "`", s = t.match(/`+/gm) || []; s.indexOf(n) !== -1; )
      n = n + "`";
    return n + e + t + e + n;
  }
};
Ne.image = {
  filter: "img",
  replacement: function(t, e) {
    var n = mt(e.getAttribute("alt")), s = e.getAttribute("src") || "", r = mt(e.getAttribute("title")), i = r ? ' "' + r + '"' : "";
    return s ? "![" + n + "](" + s + i + ")" : "";
  }
};
function mt(t) {
  return t ? t.replace(/(\n+\s*)+/g, `
`) : "";
}
function On(t) {
  this.options = t, this._keep = [], this._remove = [], this.blankRule = {
    replacement: t.blankReplacement
  }, this.keepReplacement = t.keepReplacement, this.defaultRule = {
    replacement: t.defaultReplacement
  }, this.array = [];
  for (var e in t.rules)
    this.array.push(t.rules[e]);
}
On.prototype = {
  add: function(t, e) {
    this.array.unshift(e);
  },
  keep: function(t) {
    this._keep.unshift({
      filter: t,
      replacement: this.keepReplacement
    });
  },
  remove: function(t) {
    this._remove.unshift({
      filter: t,
      replacement: function() {
        return "";
      }
    });
  },
  forNode: function(t) {
    if (t.isBlank)
      return this.blankRule;
    var e;
    return (e = _t(this.array, t, this.options)) || (e = _t(this._keep, t, this.options)) || (e = _t(this._remove, t, this.options)) ? e : this.defaultRule;
  },
  forEach: function(t) {
    for (var e = 0; e < this.array.length; e++)
      t(this.array[e], e);
  }
};
function _t(t, e, n) {
  for (var s = 0; s < t.length; s++) {
    var r = t[s];
    if ($s(r, e, n))
      return r;
  }
}
function $s(t, e, n) {
  var s = t.filter;
  if (typeof s == "string") {
    if (s === e.nodeName.toLowerCase())
      return !0;
  } else if (Array.isArray(s)) {
    if (s.indexOf(e.nodeName.toLowerCase()) > -1)
      return !0;
  } else if (typeof s == "function") {
    if (s.call(t, e, n))
      return !0;
  } else
    throw new TypeError("`filter` needs to be a string, array, or function");
}
function xs(t) {
  var e = t.element, n = t.isBlock, s = t.isVoid, r = t.isPre || function(l) {
    return l.nodeName === "PRE";
  };
  if (!(!e.firstChild || r(e))) {
    for (var i = null, a = !1, o = null, h = Jt(o, e, r); h !== e; ) {
      if (h.nodeType === 3 || h.nodeType === 4) {
        var f = h.data.replace(/[ \r\n\t]+/g, " ");
        if ((!i || / $/.test(i.data)) && !a && f[0] === " " && (f = f.substr(1)), !f) {
          h = Ot(h);
          continue;
        }
        h.data = f, i = h;
      } else if (h.nodeType === 1)
        n(h) || h.nodeName === "BR" ? (i && (i.data = i.data.replace(/ $/, "")), i = null, a = !1) : s(h) || r(h) ? (i = null, a = !0) : i && (a = !1);
      else {
        h = Ot(h);
        continue;
      }
      var c = Jt(o, h, r);
      o = h, h = c;
    }
    i && (i.data = i.data.replace(/ $/, ""), i.data || Ot(i));
  }
}
function Ot(t) {
  var e = t.nextSibling || t.parentNode;
  return t.parentNode.removeChild(t), e;
}
function Jt(t, e, n) {
  return t && t.parentNode === e || n(e) ? e.nextSibling || e.parentNode : e.firstChild || e.nextSibling || e.parentNode;
}
var Tn = typeof window < "u" ? window : {};
function Rs() {
  var t = Tn.DOMParser, e = !1;
  try {
    new t().parseFromString("", "text/html") && (e = !0);
  } catch {
  }
  return e;
}
function Ls() {
  var t = function() {
  };
  return Us() ? t.prototype.parseFromString = function(e) {
    var n = new window.ActiveXObject("htmlfile");
    return n.designMode = "on", n.open(), n.write(e), n.close(), n;
  } : t.prototype.parseFromString = function(e) {
    var n = document.implementation.createHTMLDocument("");
    return n.open(), n.write(e), n.close(), n;
  }, t;
}
function Us() {
  var t = !1;
  try {
    document.implementation.createHTMLDocument("").open();
  } catch {
    window.ActiveXObject && (t = !0);
  }
  return t;
}
var Bs = Rs() ? Tn.DOMParser : Ls();
function Ps(t, e) {
  var n;
  if (typeof t == "string") {
    var s = js().parseFromString(
      // DOM parsers arrange elements in the <head> and <body>.
      // Wrapping in a custom element ensures elements are reliably arranged in
      // a single element.
      '<x-turndown id="turndown-root">' + t + "</x-turndown>",
      "text/html"
    );
    n = s.getElementById("turndown-root");
  } else
    n = t.cloneNode(!0);
  return xs({
    element: n,
    isBlock: Lt,
    isVoid: vn,
    isPre: e.preformattedCode ? Hs : null
  }), n;
}
var Tt;
function js() {
  return Tt = Tt || new Bs(), Tt;
}
function Hs(t) {
  return t.nodeName === "PRE" || t.nodeName === "CODE";
}
function Ds(t, e) {
  return t.isBlock = Lt(t), t.isCode = t.nodeName === "CODE" || t.parentNode.isCode, t.isBlank = Fs(t), t.flankingWhitespace = Gs(t, e), t;
}
function Fs(t) {
  return !vn(t) && !ws(t) && /^\s*$/i.test(t.textContent) && !Is(t) && !Ss(t);
}
function Gs(t, e) {
  if (t.isBlock || e.preformattedCode && t.isCode)
    return { leading: "", trailing: "" };
  var n = Vs(t.textContent);
  return n.leadingAscii && Qt("left", t, e) && (n.leading = n.leadingNonAscii), n.trailingAscii && Qt("right", t, e) && (n.trailing = n.trailingNonAscii), { leading: n.leading, trailing: n.trailing };
}
function Vs(t) {
  var e = t.match(/^(([ \t\r\n]*)(\s*))(?:(?=\S)[\s\S]*\S)?((\s*?)([ \t\r\n]*))$/);
  return {
    leading: e[1],
    // whole string for whitespace-only strings
    leadingAscii: e[2],
    leadingNonAscii: e[3],
    trailing: e[4],
    // empty for whitespace-only strings
    trailingNonAscii: e[5],
    trailingAscii: e[6]
  };
}
function Qt(t, e, n) {
  var s, r, i;
  return t === "left" ? (s = e.previousSibling, r = / $/) : (s = e.nextSibling, r = /^ /), s && (s.nodeType === 3 ? i = r.test(s.nodeValue) : n.preformattedCode && s.nodeName === "CODE" ? i = !1 : s.nodeType === 1 && !Lt(s) && (i = r.test(s.textContent))), i;
}
var Ws = Array.prototype.reduce, Ks = [
  [/\\/g, "\\\\"],
  [/\*/g, "\\*"],
  [/^-/g, "\\-"],
  [/^\+ /g, "\\+ "],
  [/^(=+)/g, "\\$1"],
  [/^(#{1,6}) /g, "\\$1 "],
  [/`/g, "\\`"],
  [/^~~~/g, "\\~~~"],
  [/\[/g, "\\["],
  [/\]/g, "\\]"],
  [/^>/g, "\\>"],
  [/_/g, "\\_"],
  [/^(\d+)\. /g, "$1\\. "]
];
function yt(t) {
  if (!(this instanceof yt))
    return new yt(t);
  var e = {
    rules: Ne,
    headingStyle: "setext",
    hr: "* * *",
    bulletListMarker: "*",
    codeBlockStyle: "indented",
    fence: "```",
    emDelimiter: "_",
    strongDelimiter: "**",
    linkStyle: "inlined",
    linkReferenceStyle: "full",
    br: "  ",
    preformattedCode: !1,
    blankReplacement: function(n, s) {
      return s.isBlock ? `

` : "";
    },
    keepReplacement: function(n, s) {
      return s.isBlock ? `

` + s.outerHTML + `

` : s.outerHTML;
    },
    defaultReplacement: function(n, s) {
      return s.isBlock ? `

` + n + `

` : n;
    }
  };
  this.options = Os({}, e, t), this.rules = new On(this.options);
}
yt.prototype = {
  /**
   * The entry point for converting a string or DOM node to Markdown
   * @public
   * @param {String|HTMLElement} input The string or DOM node to convert
   * @returns A Markdown representation of the input
   * @type String
   */
  turndown: function(t) {
    if (!Ys(t))
      throw new TypeError(
        t + " is not a string, or an element/document/fragment node."
      );
    if (t === "")
      return "";
    var e = Nn.call(this, new Ps(t, this.options));
    return zs.call(this, e);
  },
  /**
   * Add one or more plugins
   * @public
   * @param {Function|Array} plugin The plugin or array of plugins to add
   * @returns The Turndown instance for chaining
   * @type Object
   */
  use: function(t) {
    if (Array.isArray(t))
      for (var e = 0; e < t.length; e++)
        this.use(t[e]);
    else if (typeof t == "function")
      t(this);
    else
      throw new TypeError("plugin must be a Function or an Array of Functions");
    return this;
  },
  /**
   * Adds a rule
   * @public
   * @param {String} key The unique key of the rule
   * @param {Object} rule The rule
   * @returns The Turndown instance for chaining
   * @type Object
   */
  addRule: function(t, e) {
    return this.rules.add(t, e), this;
  },
  /**
   * Keep a node (as HTML) that matches the filter
   * @public
   * @param {String|Array|Function} filter The unique key of the rule
   * @returns The Turndown instance for chaining
   * @type Object
   */
  keep: function(t) {
    return this.rules.keep(t), this;
  },
  /**
   * Remove a node that matches the filter
   * @public
   * @param {String|Array|Function} filter The unique key of the rule
   * @returns The Turndown instance for chaining
   * @type Object
   */
  remove: function(t) {
    return this.rules.remove(t), this;
  },
  /**
   * Escapes Markdown syntax
   * @public
   * @param {String} string The string to escape
   * @returns A string with Markdown syntax escaped
   * @type String
   */
  escape: function(t) {
    return Ks.reduce(function(e, n) {
      return e.replace(n[0], n[1]);
    }, t);
  }
};
function Nn(t) {
  var e = this;
  return Ws.call(t.childNodes, function(n, s) {
    s = new Ds(s, e.options);
    var r = "";
    return s.nodeType === 3 ? r = s.isCode ? s.nodeValue : e.escape(s.nodeValue) : s.nodeType === 1 && (r = qs.call(e, s)), An(n, r);
  }, "");
}
function zs(t) {
  var e = this;
  return this.rules.forEach(function(n) {
    typeof n.append == "function" && (t = An(t, n.append(e.options)));
  }), t.replace(/^[\t\r\n]+/, "").replace(/[\t\r\n\s]+$/, "");
}
function qs(t) {
  var e = this.rules.forNode(t), n = Nn.call(this, t), s = t.flankingWhitespace;
  return (s.leading || s.trailing) && (n = n.trim()), s.leading + e.replacement(n, t, this.options) + s.trailing;
}
function An(t, e) {
  var n = Ns(t), s = Ts(e), r = Math.max(t.length - n.length, e.length - s.length), i = `

`.substring(0, r);
  return n + i + s;
}
function Ys(t) {
  return t != null && (typeof t == "string" || t.nodeType && (t.nodeType === 1 || t.nodeType === 9 || t.nodeType === 11));
}
const Xs = ["u", "mark", "ruby", "rt", "sub", "sup"], Js = (t) => {
  const { strikethrough: e, tables: n } = _s;
  t.use(e), t.use(n), t.addRule("strikethrough", {
    filter: [
      "del",
      "s"
      /* "strike" */
    ],
    // <strike> is not support by the web standard, so I remove the use `strike` in filter...
    replacement(s) {
      return "~~" + s + "~~";
    }
  }), t.addRule("heading", {
    filter: ["h1", "h2", "h3", "h4", "h5", "h6"],
    replacement: function(s, r, i) {
      const a = Number(r.nodeName.charAt(1));
      if ((i.headingStyle === "setext" || /\n/.test(s)) && a < 3) {
        const o = Math.max(
          ...s.split(`
`).map((f) => f.length)
        ), h = (a === 1 ? "=" : "-").repeat(o);
        return `

` + s + `
` + h + `

`;
      } else
        return `

` + "#".repeat(a) + " " + s.replace(/\n+/, "") + `

`;
    }
  }), t.addRule("taskListItems", {
    filter: function(s) {
      var r;
      return s.type === "checkbox" && ((r = s.parentNode) == null ? void 0 : r.nodeName) === "P";
    },
    replacement: function(s, r) {
      return (r.checked ? "[x]" : "[ ]") + " ";
    }
  }), t.addRule("paragraph", {
    filter: "p",
    replacement: function(s, r) {
      var a;
      return r instanceof HTMLElement && ((a = r.firstElementChild) == null ? void 0 : a.tagName) === "INPUT" ? s.replace(/\]\s+\n/, "] ") + `

` : `

` + s + `

`;
    }
  }), t.addRule("listItem", {
    filter: "li",
    replacement: function(s, r, i) {
      s = s.replace(/^\n+/, "").replace(/\n+$/, `
`).replace(/\n/gm, `
  `);
      let a = i.bulletListMarker + " ";
      const o = r.parentNode;
      if ((o == null ? void 0 : o.nodeName) === "OL") {
        const h = o.getAttribute("start"), f = Array.prototype.indexOf.call(o.children, r);
        a = (h ? Number(h) + f : f + 1) + ". ";
      }
      return a + s + (r.nextSibling && !/\n$/.test(s) ? `
` : "");
    }
  }), t.addRule("multiplemath", {
    filter(s) {
      return s instanceof HTMLElement && s.nodeName === "PRE" && s.classList.contains("multiple-math");
    },
    replacement(s) {
      return `$$
${s}
$$`;
    }
  }), t.escape = Rn, t.keep(Xs);
}, Qs = (t) => {
  const s = new DOMParser().parseFromString(
    `<x-mt id="turn-root">${t}</x-mt>`,
    "text/html"
  ).querySelector("#turn-root"), r = (i) => {
    var a;
    for (const o of i)
      if (o.nodeType === Node.TEXT_NODE && ((a = o.parentElement) == null ? void 0 : a.tagName) !== "CODE") {
        let h = 0, f = 0;
        const c = o.nodeValue ?? "".replace(/^(\n+)/, (l, u) => (h = u.length, "")).replace(/(\n+)$/, (l, u) => (f = u.length, ""));
        if (/\n/.test(c)) {
          const l = c.split(`
`), u = [];
          let d = 0;
          const g = l.length;
          for (; d < g; d++) {
            let k = l[d];
            if (d === 0 && h !== 0 ? k = `
`.repeat(h) + k : d === g - 1 && f !== 0 && (k = k + `
`.repeat(f)), u.push(document.createTextNode(k)), d !== g - 1) {
              const E = document.createElement("span");
              E.classList.add("mu-soft-line-break"), u.push(E);
            }
          }
          o.replaceWith(...u);
        }
      } else
        o.nodeType === Node.ELEMENT_NODE && r(o.childNodes);
  };
  return r(s.childNodes), s.innerHTML.trim();
};
class Zs {
  constructor(e = {}) {
    j(this, "options");
    this.options = Object.assign(
      {},
      Ln,
      e
    );
  }
  generate(e) {
    const { options: n } = this, s = new yt(n);
    return Js(s), e = e.replace(/<span>&nbsp;<\/span>/g, " "), e = Qs(e), s.turndown(e);
  }
}
const er = dt("import markdown: "), Zt = (t) => t.replace(/\|/g, "\\|"), tr = {
  footnote: !1,
  math: !0,
  isGitlabCompatibilityEnabled: !0,
  trimUnnecessaryCodeBlockEmptyLines: !1,
  frontMatter: !0
};
class In {
  constructor(e = tr) {
    this.options = e;
  }
  generate(e) {
    return this.convertMarkdownToState(e);
  }
  convertMarkdownToState(e) {
    const {
      footnote: n = !1,
      math: s = !0,
      isGitlabCompatibilityEnabled: r = !0,
      trimUnnecessaryCodeBlockEmptyLines: i = !1,
      frontMatter: a = !0
    } = this.options, o = ds(e, {
      footnote: n,
      math: s,
      frontMatter: a,
      isGitlabCompatibilityEnabled: r
    }), h = [];
    let f, c, l;
    const u = [h];
    for (; f = o.shift(); )
      switch (f.type) {
        case "block-end": {
          u[0].length === 0 && f.tokenType === "blockquote" && (c = {
            name: "paragraph",
            text: ""
          }, u[0].push(c)), u.shift();
          break;
        }
        case "frontmatter": {
          const { lang: d, style: g, text: k } = f;
          l = k.replace(/^\s+/, "").replace(/\s$/, ""), c = {
            name: "frontmatter",
            meta: {
              lang: d,
              style: g
            },
            text: l
          }, u[0].push(c);
          break;
        }
        case "hr": {
          c = {
            name: "thematic-break",
            text: f.raw.replace(/\n+$/, "")
          }, u[0].push(c);
          break;
        }
        case "heading": {
          const { headingStyle: d, depth: g, text: k, marker: E } = f, y = d === "atx" ? "atx-heading" : "setext-heading", A = {
            level: g
          };
          y === "setext-heading" && (A.underline = E), l = y === "atx-heading" ? "#".repeat(+g) + ` ${k}` : k, c = {
            name: y,
            meta: A,
            text: l
          }, u[0].push(c);
          break;
        }
        case "code": {
          const { codeBlockStyle: d, text: g, lang: k = "" } = f, E = (k || "").match(/\S*/)[0];
          l = g, i && (l.endsWith(`
`) || l.startsWith(`
`)) && (l = l.replace(/\n+$/, "").replace(/^\n+/, "")), /mermaid|vega-lite|plantuml/.test(E) ? c = {
            name: "diagram",
            text: l,
            meta: {
              type: E,
              lang: E === "vega-lite" ? "json" : "yaml"
            }
          } : c = {
            name: "code-block",
            meta: {
              type: d === "fenced" ? "fenced" : "indented",
              lang: E
            },
            text: l
          }, u[0].push(c);
          break;
        }
        case "table": {
          const { header: d, align: g, rows: k } = f;
          c = {
            name: "table",
            children: []
          }, c.children.push({
            name: "table.row",
            children: d.map((E, y) => ({
              name: "table.cell",
              meta: { align: g[y] || "none" },
              text: Zt(E.text)
            }))
          }), c.children.push(
            ...k.map((E) => ({
              name: "table.row",
              children: E.map((y, A) => ({
                name: "table.cell",
                meta: { align: g[A] || "none" },
                text: Zt(y.text)
              }))
            }))
          ), u[0].push(c);
          break;
        }
        case "html": {
          const d = f.text.trim();
          /^<img[^<>]+>$/.test(d) ? (c = {
            name: "paragraph",
            text: d
          }, u[0].push(c)) : (c = {
            name: "html-block",
            text: d
          }, u[0].push(c));
          break;
        }
        case "multiplemath": {
          const d = f.text.trim(), { mathStyle: g = "" } = f, k = {
            name: "math-block",
            text: d,
            meta: { mathStyle: g }
          };
          u[0].push(k);
          break;
        }
        case "text": {
          for (l = f.text; o[0].type === "text"; )
            f = o.shift(), l += `
${f.text}`;
          c = {
            name: "paragraph",
            text: l
          }, u[0].push(c);
          break;
        }
        case "paragraph": {
          l = f.text, c = {
            name: "paragraph",
            text: l
          }, u[0].push(c);
          break;
        }
        case "blockquote": {
          c = {
            name: "block-quote",
            children: []
          }, u[0].push(c), u.unshift(c.children), o.unshift({ type: "block-end", tokenType: "blockquote" }), o.unshift(...f.tokens);
          break;
        }
        case "list": {
          const { listType: d, loose: g, start: k } = f, E = f.items[0].bulletMarkerOrDelimiter, y = {
            loose: g
          };
          d === "order" ? (y.start = /^\d+$/.test(k) ? k : 1, y.delimiter = E || ".") : y.marker = E || "-", c = {
            name: `${d}-list`,
            meta: y,
            children: []
          }, u[0].push(c), u.unshift(c.children), o.unshift({ type: "block-end", tokenType: "list" }), o.unshift(...f.items);
          break;
        }
        case "list_item": {
          const { checked: d, listItemType: g } = f;
          c = {
            name: g === "task" ? "task-list-item" : "list-item",
            children: []
          }, g === "task" && (c.meta = { checked: d }), u[0].push(c), u.unshift(c.children), o.unshift({ type: "block-end", tokenType: "list-item" }), o.unshift(...f.tokens);
          break;
        }
        case "space":
          break;
        default:
          er.warn(`Unknown type ${f.type}`);
          break;
      }
    return h.length ? h : [{ name: "paragraph", text: "" }];
  }
}
const nr = 1500, sr = () => navigator.onLine === !0, rr = async (t) => {
  if (!t.startsWith("http") || !sr())
    return "";
  try {
    const e = await fetch(t, { method: "GET", mode: "cors" }), n = e.headers.get("content-type");
    if (e.status === 200 && n && /text\/html/.test(n)) {
      const s = await e.json();
      if (typeof s == "string") {
        const r = s.match(/<title>(.*)<\/title>/);
        return r && r[1] ? r[1] : "";
      }
      return "";
    }
    return "";
  } catch {
    return "";
  }
}, ir = async function(t) {
  var i;
  if (/<body>[\s\S]*<\/body>/.test(t)) {
    const a = /<body>([\s\S]*)<\/body>/.exec(t);
    a && typeof a[1] == "string" && (t = a[1]);
  }
  const e = Un(
    t,
    Bn,
    !1
  ), n = document.createElement("div");
  n.innerHTML = e;
  const s = Array.from(n.querySelectorAll("table"));
  for (const a of s) {
    const o = a.querySelector("tr");
    o && ((i = o.firstElementChild) == null ? void 0 : i.tagName) !== "TH" && [...o.children].forEach((c) => {
      const l = document.createElement("th");
      l.innerHTML = c.innerHTML, c.replaceWith(l);
    });
    const h = Array.from(a.querySelectorAll("p"));
    for (const c of h) {
      const l = document.createElement("span");
      l.innerHTML = c.innerHTML, c.replaceWith(l);
    }
    const f = a.querySelectorAll("td");
    for (const c of f) {
      const l = c.innerHTML;
      /<br>/.test(l) && (c.innerHTML = l.replace(/<br>/g, "&lt;br&gt;"));
    }
  }
  const r = Array.from(
    n.querySelectorAll("a")
  );
  for (const a of r) {
    const o = a.getAttribute("href"), h = a.textContent;
    if (o === h && typeof o == "string") {
      const f = new Promise((l) => {
        setTimeout(() => {
          l("");
        }, nr);
      }), c = await Promise.race([rr(o), f]);
      if (c)
        a.textContent = c;
      else {
        const l = document.createElement("span");
        l.innerHTML = h, a.replaceWith(l);
      }
    }
  }
  return n.innerHTML;
}, ar = function(t, e, n) {
  const s = (r) => {
    const i = /^<([a-zA-Z\d-]+)(?=\s|>).*?>[\s\S]+?<\/([a-zA-Z\d-]+)>$/.exec(
      r.trim()
    );
    if (i && i[1]) {
      const a = i[1];
      return Pn.find((o) => o === a) ? "code" : "text";
    }
    return "text";
  };
  return n === "normal" && t && e ? "html" : s(e);
};
class or extends Et {
  constructor() {
    super(...arguments);
    j(this, "pasteType", "normal");
  }
  // `normal` or `pasteAsPlainText`
  async pasteHandler(n) {
    n.preventDefault(), n.stopPropagation();
    const { muya: s } = this, {
      bulletListMarker: r,
      footnote: i,
      isGitlabCompatibilityEnabled: a,
      math: o,
      trimUnnecessaryCodeBlockEmptyLines: h,
      frontMatter: f
    } = s.options, c = this.selection.getSelection();
    if (!c)
      return;
    const { isSelectionInSameBlock: l, anchorBlock: u } = c;
    if (!l)
      return this.cutHandler(), this.pasteHandler(n);
    if (!u || !n.clipboardData)
      return;
    const d = n.clipboardData.getData("text/plain");
    let g = n.clipboardData.getData("text/html");
    jn.test(d) && !/\s/.test(d) && !g && (g = `<a href="${d}">${d}</a>`), g = await ir(g);
    const k = ar(g, d, this.pasteType), { start: E, end: y } = u.getCursor(), { text: A } = u;
    let _ = u.getAnchor();
    const N = _;
    if (/html|text/.test(k)) {
      let m = k === "html" && u.blockName !== "codeblock.content" ? new Zs({ bulletListMarker: r }).generate(g) : d;
      if (/\n\n/.test(m) && u.blockName !== "codeblock.content") {
        E.offset !== y.offset && (u.text = A.substring(0, E.offset) + A.substring(y.offset), u.update());
        const C = new In({
          footnote: i,
          math: o,
          isGitlabCompatibilityEnabled: a,
          trimUnnecessaryCodeBlockEmptyLines: h,
          frontMatter: f
        }).generate(m);
        for (const V of C) {
          const H = Pe.loadBlock(V.name).create(s, V);
          _.parent.insertAfter(H, _), _ = H;
        }
        N.blockName === "paragraph" && N.getState().text === "" && N.remove();
        const O = _.firstContentInDescendant(), D = O.text.length;
        O.setCursor(D, D, !0);
      } else {
        u.blockName === "language-input" ? m = m.replace(/\n/g, "") : u.blockName === "table.cell.content" && (m = m.replace(/\n/g, "<br/>")), u.text = A.substring(0, E.offset) + m + A.substring(y.offset);
        const C = E.offset + m.length;
        u.setCursor(C, C, !0), u instanceof ts && u.outContainer && /html-block|math-block|diagram/.test(
          u.outContainer.blockName
        ) && u.outContainer.attachments.head.update(u.text);
      }
    } else {
      const m = {
        name: "code-block",
        meta: {
          type: "fenced",
          lang: "html"
        },
        text: d
      }, C = Pe.loadBlock(m.name).create(s, m);
      _.parent.insertAfter(C, _);
      const O = d.length;
      C.lastContentInDescendant().setCursor(O, O, !0);
    }
  }
}
var lr = Object.defineProperty, cr = Object.getOwnPropertyDescriptor, hr = (t, e, n, s) => {
  for (var r = s > 1 ? void 0 : s ? cr(e, n) : e, i = t.length - 1, a; i >= 0; i--)
    (a = t[i]) && (r = (s ? a(e, n, r) : a(r)) || r);
  return s && r && lr(e, n, r), r;
};
let bt = class extends Et {
  constructor() {
    super(...arguments);
    j(this, "copyType", "normal");
    // `normal` or `copyAsMarkdown` or `copyAsHtml` or `copyCodeContent`
    j(this, "pasteType", "normal");
    // `normal` or `pasteAsPlainText`
    j(this, "copyInfo", "");
  }
  static create(e) {
    const n = new bt(e);
    return n.listen(), n;
  }
  listen() {
    const { domNode: e, eventCenter: n } = this.muya, s = (a) => {
      a.preventDefault(), a.stopPropagation();
      const o = a.type === "cut";
      this.copyHandler(a), o && this.cutHandler();
    }, r = (a) => {
      const { key: o, metaKey: h } = a, { isSelectionInSameBlock: f } = this.selection.getSelection() ?? {};
      f || /Alt|Option|Meta|Shift|CapsLock|ArrowUp|ArrowDown|ArrowLeft|ArrowRight/.test(
        o
      ) || h || ((o === "Backspace" || o === "Delete") && a.preventDefault(), this.cutHandler());
    }, i = (a) => {
      this.pasteHandler(a);
    };
    n.attachDOMEvent(
      e,
      "copy",
      s
    ), n.attachDOMEvent(e, "cut", s), n.attachDOMEvent(e, "paste", i), n.attachDOMEvent(
      e,
      "keydown",
      r
    );
  }
  copyAsMarkdown() {
    this.copyType = "copyAsMarkdown", document.execCommand("copy"), this.copyType = "normal";
  }
  copyAsHtml() {
    this.copyType = "copyAsHtml", document.execCommand("copy"), this.copyType = "normal";
  }
  pasteAsPlainText() {
    this.pasteType = "pasteAsPlainText", document.execCommand("paste"), this.pasteType = "normal";
  }
  copy(e, n) {
    this.copyType = e, this.copyInfo = n, document.execCommand("copy"), this.copyType = "normal";
  }
};
bt = hr([
  Hn(ms, ys, or)
], bt);
const ur = bt;
var Te = {}, wn = {}, Bt = {};
Object.defineProperty(Bt, "__esModule", { value: !0 });
function fr(t, e) {
  if (Array.isArray(e))
    return !1;
  for (let n in t)
    if (!Pt(t[n], e[n]))
      return !1;
  for (let n in e)
    if (t[n] === void 0)
      return !1;
  return !0;
}
function dr(t, e) {
  if (!Array.isArray(e) || t.length !== e.length)
    return !1;
  for (let n = 0; n < t.length; n++)
    if (!Pt(t[n], e[n]))
      return !1;
  return !0;
}
function Pt(t, e) {
  return t === e ? !0 : t === null || e === null || typeof t != "object" || typeof e != "object" ? !1 : Array.isArray(t) ? dr(t, e) : fr(t, e);
}
Bt.default = Pt;
var jt = {};
Object.defineProperty(jt, "__esModule", { value: !0 });
function $t(t) {
  if (t === null)
    return null;
  if (Array.isArray(t))
    return t.map($t);
  if (typeof t == "object") {
    const e = {};
    for (let n in t)
      e[n] = $t(t[n]);
    return e;
  } else
    return t;
}
jt.default = $t;
var Ht = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.eachChildOf = t.advancer = t.readCursor = t.writeCursor = t.WriteCursor = t.ReadCursor = t.isValidPathItem = void 0;
  function e(c, l) {
    if (!c)
      throw new Error(l);
  }
  const n = (c) => c != null && typeof c == "object" && !Array.isArray(c), s = (c, l) => (
    // All the numbers, then all the letters. Just as the gods of ascii intended.
    typeof c == typeof l ? c > l : typeof c == "string" && typeof l == "number"
  );
  function r(c, l) {
    for (let u in c) {
      const d = u;
      l.write(d, c[d]);
    }
  }
  t.isValidPathItem = (c) => typeof c == "number" || typeof c == "string" && c !== "__proto__";
  class i {
    constructor(l = null) {
      this.parents = [], this.indexes = [], this.lcIdx = -1, this.idx = -1, this.container = l;
    }
    ascend() {
      e(this.parents.length === this.indexes.length / 2), this.idx === 0 ? this.parents.length ? (this.lcIdx = this.indexes.pop(), this.container = this.parents.pop(), this.idx = this.indexes.pop()) : (this.lcIdx = 0, this.idx = -1) : (e(this.idx > 0), this.idx--, n(this.container[this.idx]) && this.idx--);
    }
    getPath() {
      const l = [];
      let u = this.container, d = this.parents.length - 1, g = this.idx;
      for (; g >= 0; )
        l.unshift(u[g]), g === 0 ? (g = this.indexes[d * 2], u = this.parents[d--]) : g -= n(u[g - 1]) ? 2 : 1;
      return l;
    }
  }
  class a extends i {
    get() {
      return this.container ? this.container.slice(this.idx + 1) : null;
    }
    // Its only valid to call this after descending into a child.
    getKey() {
      return e(this.container != null, "Invalid call to getKey before cursor descended"), this.container[this.idx];
    }
    getComponent() {
      let l;
      return this.container && this.container.length > this.idx + 1 && n(l = this.container[this.idx + 1]) ? l : null;
    }
    descendFirst() {
      let l = this.idx + 1;
      if (!this.container || l >= this.container.length || n(this.container[l]) && l + 1 >= this.container.length)
        return !1;
      n(this.container[l]) && l++;
      const u = this.container[l];
      return Array.isArray(u) ? (this.indexes.push(this.idx), this.parents.push(this.container), this.indexes.push(l), this.idx = 0, this.container = u) : this.idx = l, !0;
    }
    nextSibling() {
      if (e(this.parents.length === this.indexes.length / 2), this.idx > 0 || this.parents.length === 0)
        return !1;
      const l = this.indexes[this.indexes.length - 1] + 1, u = this.parents[this.parents.length - 1];
      return l >= u.length ? !1 : (e(!isNaN(l)), this.indexes[this.indexes.length - 1] = l, this.container = u[l], !0);
    }
    _init(l, u, d, g) {
      this.container = l, this.idx = u, this.parents = d.slice(), this.indexes = g.slice();
    }
    clone() {
      const l = new a();
      return l._init(this.container, this.idx, this.parents, this.indexes), l;
    }
    *[Symbol.iterator]() {
      if (this.descendFirst()) {
        do
          yield this.getKey();
        while (this.nextSibling());
        this.ascend();
      }
    }
    // TODO(cleanup): Consider moving these functions out of cursor, since
    // they're really just helper methods.
    // It'd be really nice to do this using generators.
    traverse(l, u) {
      const d = this.getComponent();
      d && u(d, l);
      for (const g of this)
        l && l.descend(g), this.traverse(l, u), l && l.ascend();
    }
    eachPick(l, u) {
      this.traverse(l, (d, g) => {
        d.p != null && u(d.p, g);
      });
    }
    eachDrop(l, u) {
      this.traverse(l, (d, g) => {
        d.d != null && u(d.d, g);
      });
    }
  }
  t.ReadCursor = a;
  class o extends i {
    constructor(l = null) {
      super(l), this.pendingDescent = [], this._op = l;
    }
    flushDescent() {
      e(this.parents.length === this.indexes.length / 2), this.container === null && (this._op = this.container = []);
      for (let l = 0; l < this.pendingDescent.length; l++) {
        const u = this.pendingDescent[l];
        let d = this.idx + 1;
        if (d < this.container.length && n(this.container[d]) && d++, e(d === this.container.length || !n(this.container[d])), d === this.container.length)
          this.container.push(u), this.idx = d;
        else if (this.container[d] === u)
          this.idx = d;
        else {
          if (!Array.isArray(this.container[d])) {
            const g = this.container.splice(d, this.container.length - d);
            this.container.push(g), this.lcIdx > -1 && (this.lcIdx = d);
          }
          for (this.indexes.push(this.idx), this.parents.push(this.container), this.lcIdx !== -1 && (e(s(u, this.container[this.lcIdx][0])), d = this.lcIdx + 1, this.lcIdx = -1); d < this.container.length && s(u, this.container[d][0]); )
            d++;
          if (this.indexes.push(d), this.idx = 0, d < this.container.length && this.container[d][0] === u)
            this.container = this.container[d];
          else {
            const g = [u];
            this.container.splice(d, 0, g), this.container = g;
          }
        }
      }
      this.pendingDescent.length = 0;
    }
    reset() {
      this.lcIdx = -1;
    }
    // Creates and returns a component, creating one if need be. You should
    // probably write to it immediately - ops are not valid with empty
    // components.
    getComponent() {
      this.flushDescent();
      const l = this.idx + 1;
      if (l < this.container.length && n(this.container[l]))
        return this.container[l];
      {
        const u = {};
        return this.container.splice(l, 0, u), u;
      }
    }
    write(l, u) {
      const d = this.getComponent();
      e(d[l] == null || d[l] === u, "Internal consistency error: Overwritten component. File a bug"), d[l] = u;
    }
    get() {
      return this._op;
    }
    descend(l) {
      if (!t.isValidPathItem(l))
        throw Error("Invalid JSON key");
      this.pendingDescent.push(l);
    }
    descendPath(l) {
      return this.pendingDescent.push(...l), this;
    }
    ascend() {
      this.pendingDescent.length ? this.pendingDescent.pop() : super.ascend();
    }
    mergeTree(l, u = r) {
      if (l === null)
        return;
      if (e(Array.isArray(l)), l === this._op)
        throw Error("Cannot merge into my own tree");
      const d = this.lcIdx, g = this.parents.length;
      let k = 0;
      for (let E = 0; E < l.length; E++) {
        const y = l[E];
        typeof y == "string" || typeof y == "number" ? (k++, this.descend(y)) : Array.isArray(y) ? this.mergeTree(y, u) : typeof y == "object" && u(y, this);
      }
      for (; k--; )
        this.ascend();
      this.lcIdx = this.parents.length === g ? d : -1;
    }
    at(l, u) {
      this.descendPath(l), u(this);
      for (let d = 0; d < l.length; d++)
        this.ascend();
      return this;
    }
    // This is used by helpers, so the strict ordering guarantees are
    // relaxed.
    writeAtPath(l, u, d) {
      return this.at(l, () => this.write(u, d)), this.reset(), this;
    }
    writeMove(l, u, d = 0) {
      return this.writeAtPath(l, "p", d).writeAtPath(u, "d", d);
    }
    getPath() {
      const l = super.getPath();
      return l.push(...this.pendingDescent), l;
    }
  }
  t.WriteCursor = o, t.writeCursor = () => new o(), t.readCursor = (c) => new a(c);
  function h(c, l, u) {
    let d, g;
    g = d = c ? c.descendFirst() : !1;
    function k(E) {
      let y;
      for (; g; ) {
        const A = y = c.getKey();
        if (E != null) {
          let _ = !1;
          if (l && typeof A == "number" && (y = l(A, c.getComponent()), y < 0 && (y = ~y, _ = !0)), s(y, E))
            return null;
          if (y === E && !_)
            return c;
        }
        u && typeof y == "number" && u(y, c.getComponent()), g = c.nextSibling();
      }
      return null;
    }
    return k.end = () => {
      d && c.ascend();
    }, k;
  }
  t.advancer = h;
  function f(c, l, u) {
    let d, g, k, E;
    for (d = g = c && c.descendFirst(), k = E = l && l.descendFirst(); d || k; ) {
      let y = d ? c.getKey() : null, A = k ? l.getKey() : null;
      y !== null && A !== null && (s(A, y) ? A = null : y !== A && (y = null)), u(y ?? A, y != null ? c : null, A != null ? l : null), y != null && d && (d = c.nextSibling()), A != null && k && (k = l.nextSibling());
    }
    g && c.ascend(), E && l.ascend();
  }
  t.eachChildOf = f;
})(Ht);
var Dt = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.ConflictType = void 0, function(e) {
    e[e.RM_UNEXPECTED_CONTENT = 1] = "RM_UNEXPECTED_CONTENT", e[e.DROP_COLLISION = 2] = "DROP_COLLISION", e[e.BLACKHOLE = 3] = "BLACKHOLE";
  }(t.ConflictType || (t.ConflictType = {}));
})(Dt);
var st = {}, Ke = {};
Object.defineProperty(Ke, "__esModule", { value: !0 });
Ke.uniToStrPos = Ke.strPosToUni = void 0;
Ke.strPosToUni = (t, e = t.length) => {
  let n = 0, s = 0;
  for (; s < e; s++) {
    const r = t.charCodeAt(s);
    r >= 55296 && r <= 57343 && (n++, s++);
  }
  if (s !== e)
    throw Error("Invalid offset - splits unicode bytes");
  return s - n;
};
Ke.uniToStrPos = (t, e) => {
  let n = 0;
  for (; e > 0; e--) {
    const s = t.charCodeAt(n);
    n += s >= 55296 && s <= 57343 ? 2 : 1;
  }
  return n;
};
var kt = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.uniSlice = t.dlen = t.eachOp = void 0;
  const e = Ke, n = (m) => {
    if (!Array.isArray(m))
      throw Error("Op must be an array of components");
    let C = null;
    for (let O = 0; O < m.length; O++) {
      const D = m[O];
      switch (typeof D) {
        case "object":
          if (typeof D.d != "number" && typeof D.d != "string")
            throw Error("Delete must be number or string");
          if (t.dlen(D.d) <= 0)
            throw Error("Deletes must not be empty");
          break;
        case "string":
          if (!(D.length > 0))
            throw Error("Inserts cannot be empty");
          break;
        case "number":
          if (!(D > 0))
            throw Error("Skip components must be >0");
          if (typeof C == "number")
            throw Error("Adjacent skip components should be combined");
          break;
      }
      C = D;
    }
    if (typeof C == "number")
      throw Error("Op has a trailing skip");
  };
  function s(m, C) {
    let O = 0, D = 0;
    for (let V = 0; V < m.length; V++) {
      const H = m[V];
      switch (C(H, O, D), typeof H) {
        case "object":
          O += t.dlen(H.d);
          break;
        case "string":
          D += e.strPosToUni(H);
          break;
        case "number":
          O += H, D += H;
          break;
      }
    }
  }
  t.eachOp = s;
  function r(m, C) {
    const O = [], D = o(O);
    return s(m, (V, H, ue) => {
      D(C(V, H, ue));
    }), l(O);
  }
  const i = (m) => m, a = (m) => r(m, i);
  t.dlen = (m) => typeof m == "number" ? m : e.strPosToUni(m);
  const o = (m) => (C) => {
    if (!(!C || C.d === 0 || C.d === ""))
      if (m.length === 0)
        m.push(C);
      else if (typeof C == typeof m[m.length - 1])
        if (typeof C == "object") {
          const O = m[m.length - 1];
          O.d = typeof O.d == "string" && typeof C.d == "string" ? O.d + C.d : t.dlen(O.d) + t.dlen(C.d);
        } else
          m[m.length - 1] += C;
      else
        m.push(C);
  }, h = (m) => typeof m == "number" ? m : typeof m == "string" ? e.strPosToUni(m) : typeof m.d == "number" ? m.d : e.strPosToUni(m.d);
  t.uniSlice = (m, C, O) => {
    const D = e.uniToStrPos(m, C), V = O == null ? 1 / 0 : e.uniToStrPos(m, O);
    return m.slice(D, V);
  };
  const f = (m, C, O) => typeof m == "number" ? O == null ? m - C : Math.min(m, O) - C : t.uniSlice(m, C, O), c = (m) => {
    let C = 0, O = 0;
    return { take: (H, ue) => {
      if (C === m.length)
        return H === -1 ? null : H;
      const le = m[C];
      let X;
      if (typeof le == "number")
        return H === -1 || le - O <= H ? (X = le - O, ++C, O = 0, X) : (O += H, H);
      if (typeof le == "string") {
        if (H === -1 || ue === "i" || e.strPosToUni(le.slice(O)) <= H)
          return X = le.slice(O), ++C, O = 0, X;
        {
          const re = O + e.uniToStrPos(le.slice(O), H);
          return X = le.slice(O, re), O = re, X;
        }
      } else {
        if (H === -1 || ue === "d" || t.dlen(le.d) - O <= H)
          return X = { d: f(le.d, O) }, ++C, O = 0, X;
        {
          let re = f(le.d, O, O + H);
          return O += H, { d: re };
        }
      }
    }, peek: () => m[C] };
  }, l = (m) => (m.length > 0 && typeof m[m.length - 1] == "number" && m.pop(), m);
  function u(m, C, O) {
    if (O !== "left" && O !== "right")
      throw Error("side (" + O + ") must be 'left' or 'right'");
    n(m), n(C);
    const D = [], V = o(D), { take: H, peek: ue } = c(m);
    for (let X = 0; X < C.length; X++) {
      const re = C[X];
      let ge, Me;
      switch (typeof re) {
        case "number":
          for (ge = re; ge > 0; )
            Me = H(ge, "i"), V(Me), typeof Me != "string" && (ge -= h(Me));
          break;
        case "string":
          O === "left" && typeof ue() == "string" && V(H(-1)), V(e.strPosToUni(re));
          break;
        case "object":
          for (ge = t.dlen(re.d); ge > 0; )
            switch (Me = H(ge, "i"), typeof Me) {
              case "number":
                ge -= Me;
                break;
              case "string":
                V(Me);
                break;
              case "object":
                ge -= t.dlen(Me.d);
            }
          break;
      }
    }
    let le;
    for (; le = H(-1); )
      V(le);
    return l(D);
  }
  function d(m, C) {
    n(m), n(C);
    const O = [], D = o(O), { take: V } = c(m);
    for (let ue = 0; ue < C.length; ue++) {
      const le = C[ue];
      let X, re;
      switch (typeof le) {
        case "number":
          for (X = le; X > 0; )
            re = V(X, "d"), D(re), typeof re != "object" && (X -= h(re));
          break;
        case "string":
          D(le);
          break;
        case "object":
          X = t.dlen(le.d);
          let ge = 0;
          for (; ge < X; )
            switch (re = V(X - ge, "d"), typeof re) {
              case "number":
                D({ d: f(le.d, ge, ge + re) }), ge += re;
                break;
              case "string":
                ge += e.strPosToUni(re);
                break;
              case "object":
                D(re);
            }
          break;
      }
    }
    let H;
    for (; H = V(-1); )
      D(H);
    return l(O);
  }
  const g = (m, C) => {
    let O = 0;
    for (let D = 0; D < C.length && m > O; D++) {
      const V = C[D];
      switch (typeof V) {
        case "number": {
          O += V;
          break;
        }
        case "string":
          const H = e.strPosToUni(V);
          O += H, m += H;
          break;
        case "object":
          m -= Math.min(t.dlen(V.d), m - O);
          break;
      }
    }
    return m;
  }, k = (m, C) => typeof m == "number" ? g(m, C) : m.map((O) => g(O, C));
  function E(m, C, O) {
    return r(m, (D, V) => typeof D == "object" && typeof D.d == "number" ? { d: O.slice(C, V, V + D.d) } : D);
  }
  function y(m) {
    return r(m, (C) => {
      switch (typeof C) {
        case "object":
          if (typeof C.d == "number")
            throw Error("Cannot invert text op: Deleted characters missing from operation. makeInvertible must be called first.");
          return C.d;
        case "string":
          return { d: C };
        case "number":
          return C;
      }
    });
  }
  function A(m) {
    return r(m, (C) => typeof C == "object" && typeof C.d == "string" ? { d: e.strPosToUni(C.d) } : C);
  }
  function _(m) {
    let C = !0;
    return s(m, (O) => {
      typeof O == "object" && typeof O.d == "number" && (C = !1);
    }), C;
  }
  function N(m) {
    return {
      name: "text-unicode",
      uri: "http://sharejs.org/types/text-unicode",
      trim: l,
      normalize: a,
      checkOp: n,
      /** Create a new text snapshot.
       *
       * @param {string} initial - initial snapshot data. Optional. Defaults to ''.
       * @returns {Snap} Initial document snapshot object
       */
      create(C = "") {
        if (typeof C != "string")
          throw Error("Initial data must be a string");
        return m.create(C);
      },
      /** Apply an operation to a document snapshot
       */
      apply(C, O) {
        n(O);
        const D = m.builder(C);
        for (let V = 0; V < O.length; V++) {
          const H = O[V];
          switch (typeof H) {
            case "number":
              D.skip(H);
              break;
            case "string":
              D.append(H);
              break;
            case "object":
              D.del(t.dlen(H.d));
              break;
          }
        }
        return D.build();
      },
      transform: u,
      compose: d,
      transformPosition: g,
      transformSelection: k,
      isInvertible: _,
      makeInvertible(C, O) {
        return E(C, O, m);
      },
      stripInvertible: A,
      invert: y,
      invertWithDoc(C, O) {
        return y(E(C, O, m));
      },
      isNoop: (C) => C.length === 0
    };
  }
  t.default = N;
})(kt);
var Ft = {};
Object.defineProperty(Ft, "__esModule", { value: !0 });
const en = kt, tn = Ke;
function Sn(t, e) {
  return {
    // Returns the text content of the document
    get: t,
    // Returns the number of characters in the string
    getLength() {
      return t().length;
    },
    // Insert the specified text at the given position in the document
    insert(n, s, r) {
      const i = tn.strPosToUni(t(), n);
      return e([i, s], r);
    },
    remove(n, s, r) {
      const i = tn.strPosToUni(t(), n);
      return e([i, { d: s }], r);
    },
    // When you use this API, you should implement these two methods
    // in your editing context.
    //onInsert: function(pos, text) {},
    //onRemove: function(pos, removedLength) {},
    _onOp(n) {
      en.eachOp(n, (s, r, i) => {
        switch (typeof s) {
          case "string":
            this.onInsert && this.onInsert(i, s);
            break;
          case "object":
            const a = en.dlen(s.d);
            this.onRemove && this.onRemove(i, a);
        }
      });
    },
    onInsert: null,
    onRemove: null
  };
}
Ft.default = Sn;
Sn.provides = { text: !0 };
(function(t) {
  var e = Ae && Ae.__createBinding || (Object.create ? function(u, d, g, k) {
    k === void 0 && (k = g), Object.defineProperty(u, k, { enumerable: !0, get: function() {
      return d[g];
    } });
  } : function(u, d, g, k) {
    k === void 0 && (k = g), u[k] = d[g];
  }), n = Ae && Ae.__setModuleDefault || (Object.create ? function(u, d) {
    Object.defineProperty(u, "default", { enumerable: !0, value: d });
  } : function(u, d) {
    u.default = d;
  }), s = Ae && Ae.__importStar || function(u) {
    if (u && u.__esModule)
      return u;
    var d = {};
    if (u != null)
      for (var g in u)
        Object.hasOwnProperty.call(u, g) && e(d, u, g);
    return n(d, u), d;
  }, r = Ae && Ae.__importDefault || function(u) {
    return u && u.__esModule ? u : { default: u };
  };
  Object.defineProperty(t, "__esModule", { value: !0 }), t.type = t.remove = t.insert = void 0;
  const i = Ke, a = s(kt), o = r(Ft), h = {
    create(u) {
      return u;
    },
    toString(u) {
      return u;
    },
    builder(u) {
      if (typeof u != "string")
        throw Error("Invalid document snapshot: " + u);
      const d = [];
      return {
        skip(g) {
          let k = i.uniToStrPos(u, g);
          if (k > u.length)
            throw Error("The op is too long for this document");
          d.push(u.slice(0, k)), u = u.slice(k);
        },
        append(g) {
          d.push(g);
        },
        del(g) {
          u = u.slice(i.uniToStrPos(u, g));
        },
        build() {
          return d.join("") + u;
        }
      };
    },
    slice: a.uniSlice
  }, f = a.default(h), c = Object.assign(Object.assign({}, f), { api: o.default });
  t.type = c, t.insert = (u, d) => d.length === 0 ? [] : u === 0 ? [d] : [u, d], t.remove = (u, d) => a.dlen(d) === 0 ? [] : u === 0 ? [{ d }] : [u, { d }];
  var l = kt;
  Object.defineProperty(t, "makeType", { enumerable: !0, get: function() {
    return l.default;
  } });
})(st);
(function(t) {
  var e = Ae && Ae.__importDefault || function(p) {
    return p && p.__esModule ? p : {
      default: p
    };
  };
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.editOp = t.replaceOp = t.insertOp = t.moveOp = t.removeOp = t.type = void 0;
  const n = e(Bt), s = e(jt), r = Ht, i = Dt;
  function a(p, v) {
    if (!p)
      throw new Error(v);
  }
  t.type = {
    name: "json1",
    uri: "http://sharejs.org/types/JSONv1",
    readCursor: r.readCursor,
    writeCursor: r.writeCursor,
    create: (p) => p,
    isNoop: (p) => p == null,
    setDebug(p) {
    },
    registerSubtype: y,
    checkValidOp: V,
    normalize: H,
    apply: ue,
    transformPosition: le,
    compose: X,
    tryTransform: ze,
    transform: at,
    makeInvertible: Me,
    invert: re,
    invertWithDoc: Qe,
    RM_UNEXPECTED_CONTENT: i.ConflictType.RM_UNEXPECTED_CONTENT,
    DROP_COLLISION: i.ConflictType.DROP_COLLISION,
    BLACKHOLE: i.ConflictType.BLACKHOLE,
    transformNoConflict: (p, v, w) => lt(() => !0, p, v, w),
    typeAllowingConflictsPred: (p) => Object.assign(Object.assign({}, t.type), {
      transform: (v, w, L) => lt(p, v, w, L)
    })
  };
  const o = (p) => p ? p.getComponent() : null;
  function h(p) {
    return p && typeof p == "object" && !Array.isArray(p);
  }
  const f = (p) => Array.isArray(p) ? p.slice() : p !== null && typeof p == "object" ? Object.assign({}, p) : p, c = (p) => p && (p.p != null || p.r !== void 0), l = (p) => p && (p.d != null || p.i !== void 0);
  function u(p, v) {
    return a(p != null), typeof v == "number" ? (a(Array.isArray(p), "Invalid key - child is not an array"), (p = p.slice()).splice(v, 1)) : (a(h(p), "Invalid key - child is not an object"), delete (p = Object.assign({}, p))[v]), p;
  }
  function d(p, v, w) {
    return typeof v == "number" ? (a(p != null, "Container is missing for key"), a(Array.isArray(p), "Cannot use numerical key for object container"), a(p.length >= v, "Cannot insert into out of bounds index"), p.splice(v, 0, w)) : (a(h(p), "Cannot insert into missing item"), a(p[v] === void 0, "Trying to overwrite value at key. Your op needs to remove it first"), p[v] = w), w;
  }
  t.removeOp = (p, v = !0) => r.writeCursor().writeAtPath(p, "r", v).get(), t.moveOp = (p, v) => r.writeCursor().writeMove(p, v).get(), t.insertOp = (p, v) => r.writeCursor().writeAtPath(p, "i", v).get(), t.replaceOp = (p, v, w) => r.writeCursor().at(p, (L) => {
    L.write("r", v), L.write("i", w);
  }).get(), t.editOp = (p, v, w, L = !1) => r.writeCursor().at(p, (S) => C(S, v, w, L)).get();
  const g = (p, v) => p != null && (typeof v == "number" ? Array.isArray(p) : typeof p == "object"), k = (p, v) => g(p, v) ? p[v] : void 0, E = {};
  function y(p) {
    let v = p.type ? p.type : p;
    v.name && (E[v.name] = v), v.uri && (E[v.uri] = v);
  }
  const A = (p) => {
    const v = E[p];
    if (v)
      return v;
    throw Error("Missing type: " + p);
  };
  y(st);
  const _ = (p, v) => p + v;
  y({
    name: "number",
    apply: _,
    compose: _,
    invert: (p) => -p,
    transform: (p) => p
  });
  const N = (p) => p == null ? null : p.et ? A(p.et) : p.es ? E["text-unicode"] : p.ena != null ? E.number : null, m = (p) => p.es ? p.es : p.ena != null ? p.ena : p.e, C = (p, v, w, L = !1) => {
    const [S, R] = typeof v == "string" ? [A(v), v] : [v, v.name];
    !L && S.isNoop && S.isNoop(w) || (R === "number" ? p.write("ena", w) : R === "text-unicode" ? p.write("es", w) : (p.write("et", R), p.write("e", w)));
  };
  function O(p) {
    a(typeof p == "number"), a(p >= 0), a(p === (0 | p));
  }
  function D(p) {
    typeof p == "number" ? O(p) : a(typeof p == "string");
  }
  function V(p) {
    if (p === null)
      return;
    const v = /* @__PURE__ */ new Set(), w = /* @__PURE__ */ new Set(), L = (R) => {
      let Y = !0, z = !1;
      for (let M in R) {
        const I = R[M];
        if (Y = !1, a(M === "p" || M === "r" || M === "d" || M === "i" || M === "e" || M === "es" || M === "ena" || M === "et", "Invalid component item '" + M + "'"), M === "p")
          O(I), a(!v.has(I)), v.add(I), a(R.r === void 0);
        else if (M === "d")
          O(I), a(!w.has(I)), w.add(I), a(R.i === void 0);
        else if (M === "e" || M === "es" || M === "ena") {
          a(!z), z = !0;
          const $ = N(R);
          a($, "Missing type in edit"), $.checkValidOp && $.checkValidOp(m(R));
        }
      }
      a(!Y);
    }, S = (R, Y, z) => {
      if (!Array.isArray(R))
        throw Error("Op must be null or a list");
      if (R.length === 0)
        throw Error("Empty descent");
      Y || D(R[0]);
      let M = 1, I = 0, $ = 0;
      for (let x = 0; x < R.length; x++) {
        const q = R[x];
        if (a(q != null), Array.isArray(q)) {
          const J = S(q, !1);
          if (I) {
            const T = typeof $, G = typeof J;
            T === G ? a($ < J, "descent keys are not in order") : a(T === "number" && G === "string");
          }
          $ = J, I++, M = 3;
        } else
          typeof q == "object" ? (a(M === 1, `Prev not scalar - instead ${M}`), L(q), M = 2) : (a(M !== 3), D(q), a(r.isValidPathItem(q), "Invalid path key"), M = 1);
      }
      return a(I !== 1, "Operation makes multiple descents. Remove some []"), a(M === 2 || M === 3), R[0];
    };
    S(p, !0), a(v.size === w.size, "Mismatched picks and drops in op");
    for (let R = 0; R < v.size; R++)
      a(v.has(R)), a(w.has(R));
  }
  function H(p) {
    let v = 0, w = [];
    const L = r.writeCursor();
    return L.mergeTree(p, (S, R) => {
      const Y = N(S);
      if (Y) {
        const M = m(S);
        C(R, Y, Y.normalize ? Y.normalize(M) : M);
      }
      for (const M of ["r", "p", "i", "d"])
        if (S[M] !== void 0) {
          const I = M === "p" || M === "d" ? (z = S[M], w[z] == null && (w[z] = v++), w[z]) : S[M];
          R.write(M, I);
        }
      var z;
    }), L.get();
  }
  function ue(p, v) {
    if (V(v), v === null)
      return p;
    const w = [];
    return function L(S, R) {
      let Y = S, z = 0, M = {
        root: S
      }, I = 0, $ = M, x = "root";
      function q() {
        for (; I < z; I++) {
          let J = R[I];
          typeof J != "object" && (a(g($, x)), $ = $[x] = f($[x]), x = J);
        }
      }
      for (; z < R.length; z++) {
        const J = R[z];
        if (Array.isArray(J)) {
          const T = L(Y, J);
          T !== Y && T !== void 0 && (q(), Y = $[x] = T);
        } else if (typeof J == "object") {
          J.d != null ? (q(), Y = d($, x, w[J.d])) : J.i !== void 0 && (q(), Y = d($, x, J.i));
          const T = N(J);
          if (T)
            q(), Y = $[x] = T.apply(Y, m(J));
          else if (J.e !== void 0)
            throw Error("Subtype " + J.et + " undefined");
        } else
          Y = k(Y, J);
      }
      return M.root;
    }(p = function L(S, R) {
      const Y = [];
      let z = 0;
      for (; z < R.length; z++) {
        const x = R[z];
        if (Array.isArray(x))
          break;
        typeof x != "object" && (Y.push(S), S = k(S, x));
      }
      for (let x = R.length - 1; x >= z; x--)
        S = L(S, R[x]);
      for (--z; z >= 0; z--) {
        const x = R[z];
        if (typeof x != "object") {
          const q = Y.pop();
          S = S === k(q, x) ? q : S === void 0 ? u(q, x) : (I = x, $ = S, (M = f(M = q))[I] = $, M);
        } else
          c(x) && (a(S !== void 0, "Cannot pick up or remove undefined"), x.p != null && (w[x.p] = S), S = void 0);
      }
      var M, I, $;
      return S;
    }(p, v), v);
  }
  function le(p, v) {
    p = p.slice(), V(v);
    const w = r.readCursor(v);
    let L, S, R = !1;
    const Y = [];
    for (let M = 0; ; M++) {
      const I = p[M], $ = w.getComponent();
      if ($ && ($.r !== void 0 ? R = !0 : $.p != null && (R = !1, L = $.p, S = M)), M >= p.length)
        break;
      let x = 0;
      const q = r.advancer(w, void 0, (T, G) => {
        c(G) && x++;
      });
      Y.unshift(q);
      const J = q(I);
      if (typeof I == "number" && (p[M] -= x), !J)
        break;
    }
    if (Y.forEach((M) => M.end()), R)
      return null;
    const z = () => {
      let M = 0;
      if (L != null) {
        const I = w.getPath();
        M = I.length, p = I.concat(p.slice(S));
      }
      for (; M < p.length; M++) {
        const I = p[M], $ = o(w), x = N($);
        if (x) {
          const T = m($);
          x.transformPosition && (p[M] = x.transformPosition(p[M], T));
          break;
        }
        let q = 0;
        const J = r.advancer(w, (T, G) => l(G) ? ~(T - q) : T - q, (T, G) => {
          l(G) && q++;
        })(I);
        if (typeof I == "number" && (p[M] += q), !J)
          break;
      }
    };
    return L != null ? w.eachDrop(null, (M) => {
      M === L && z();
    }) : z(), p;
  }
  function X(p, v) {
    if (V(p), V(v), p == null)
      return v;
    if (v == null)
      return p;
    let w = 0;
    const L = r.readCursor(p), S = r.readCursor(v), R = r.writeCursor(), Y = [], z = [], M = [], I = [], $ = [], x = [], q = /* @__PURE__ */ new Set();
    L.traverse(null, (T) => {
      T.p != null && (M[T.p] = L.clone());
    }), S.traverse(null, (T) => {
      T.d != null && (I[T.d] = S.clone());
    });
    const J = r.writeCursor();
    return function T(G, ce, oe, ee, fe, He, _e, Ee) {
      a(ce || oe);
      const de = o(ce), we = o(oe), $e = !!we && we.r !== void 0, qe = !!de && de.i !== void 0, Se = de ? de.d : null, Ie = we ? we.p : null, De = (He || $e) && Ie == null;
      if (Ie != null)
        ee = I[Ie], _e = z[Ie] = new r.WriteCursor();
      else if (we && we.r !== void 0)
        ee = null;
      else {
        const B = o(ee);
        B && B.d != null && (ee = null);
      }
      const ie = o(ee);
      if (Se != null)
        if (G = M[Se], Ee = Y[Se] = new r.WriteCursor(), De)
          He && !$e && Ee.write("r", !0);
        else {
          const B = $[Se] = w++;
          _e.write("d", B);
        }
      else if (de && de.i !== void 0)
        G = null;
      else {
        const B = o(G);
        B && B.p != null && (G = null);
      }
      let P;
      qe ? (a(fe === void 0), P = de.i) : P = fe;
      const Q = (Ie == null ? !qe || He || $e : P === void 0) ? null : _e.getComponent();
      if (Ie != null) {
        if (!(fe !== void 0 || qe)) {
          const B = Se != null ? $[Se] : w++;
          x[Ie] = B, Ee.write("p", B);
        }
      } else
        $e && (qe || fe !== void 0 || (we.r, Ee.write("r", we.r)));
      const F = De ? null : N(de), U = N(ie);
      if ((F || U) && (F && F.name, U && U.name), F && U) {
        a(F === U);
        const B = m(de), Z = m(ie), ke = F.compose(B, Z);
        C(_e, F, ke), q.add(ie);
      } else
        F ? C(_e, F, m(de)) : U && (C(_e, U, m(ie)), q.add(ie));
      const W = typeof P == "object" && P != null;
      let ne = !1, se = 0, ae = 0, be = 0, ye = 0, pe = 0;
      const ve = r.advancer(ee, (B, Z) => l(Z) ? ye - B - 1 : B - ye, (B, Z) => {
        l(Z) && ye++;
      }), te = r.advancer(G, (B, Z) => c(Z) ? se - B - 1 : B - se, (B, Z) => {
        c(Z) && se++;
      });
      if (r.eachChildOf(ce, oe, (B, Z, ke) => {
        let Oe, Fe, Ye = B, xe = B, ct = B;
        if (typeof B == "number") {
          let Ce = B + be;
          Fe = ve(Ce), xe = Ce + ye;
          let me = B + ae;
          Oe = te(me), l(o(Fe)) && (Oe = null), Ye = me + se, ct = B + pe, a(Ye >= 0, "p1PickKey is negative"), a(xe >= 0, "p2DropKey is negative");
          const Re = l(o(Z)), Ge = c(o(ke));
          (Re || Ge && !De) && pe--, Re && ae--, Ge && be--;
        } else
          Oe = te(B), Fe = ve(B);
        Ee.descend(Ye), _e.descend(xe);
        const et = W && !l(o(Z)) ? P[ct] : void 0, Ue = T(Oe, Z, ke, Fe, et, De, _e, Ee);
        var Be, K, he;
        W && !De ? et !== Ue && (ne || (P = Array.isArray(P) ? P.slice() : Object.assign({}, P), ne = !0), Be = P, he = Ue, typeof (K = ct) == "number" ? (a(Array.isArray(Be)), a(K < Be.length)) : (a(!Array.isArray(Be)), a(Be[K] !== void 0)), he === void 0 ? typeof K == "number" ? Be.splice(K, 1) : delete Be[K] : Be[K] = he) : a(Ue === void 0), _e.ascend(), Ee.ascend();
      }), te.end(), ve.end(), Q != null)
        Q.i = P;
      else if (!He && !$e && Ie == null)
        return P;
    }(L, L.clone(), S, S.clone(), void 0, !1, R, J), R.reset(), R.mergeTree(J.get()), R.reset(), R.get(), Y.map((T) => T.get()), z.map((T) => T.get()), L.traverse(R, (T, G) => {
      const ce = T.p;
      if (ce != null) {
        const oe = $[ce];
        oe != null && G.write("p", oe);
        const ee = Y[ce];
        ee && ee.get(), ee && G.mergeTree(ee.get());
      } else
        T.r !== void 0 && G.write("r", T.r);
    }), R.reset(), R.get(), S.traverse(R, (T, G) => {
      const ce = T.d;
      if (ce != null) {
        const ee = x[ce];
        ee != null && G.write("d", ee);
        const fe = z[ce];
        fe && G.mergeTree(fe.get());
      } else
        T.i !== void 0 && G.write("i", T.i);
      const oe = N(T);
      oe && !q.has(T) && C(G, oe, m(T));
    }), R.get();
  }
  function re(p) {
    if (p == null)
      return null;
    const v = new r.ReadCursor(p), w = new r.WriteCursor();
    let L;
    const S = [], R = [];
    return function Y(z, M, I) {
      const $ = z.getComponent();
      let x, q = !1;
      if ($) {
        $.p != null && (M.write("d", $.p), S[$.p] = z.clone()), $.r !== void 0 && M.write("i", $.r), $.d != null && (M.write("p", $.d), I = void 0), $.i !== void 0 && (I = x = $.i);
        const T = N($);
        T && (I === void 0 ? (L || (L = /* @__PURE__ */ new Set()), L.add($)) : (m($), I = T.apply(I, m($)), q = !0));
      }
      let J = 0;
      for (const T of z) {
        M.descend(T);
        const G = typeof T == "number" ? T - J : T, ce = k(I, G);
        l(z.getComponent()) && J++;
        const oe = Y(z, M, ce);
        if (I !== void 0 && oe !== void 0) {
          if (q || (q = !0, I = f(I)), !g(I, G))
            throw Error("Cannot modify child - invalid operation");
          I[G] = oe;
        }
        M.ascend();
      }
      if (x === void 0)
        return q ? I : void 0;
      M.write("r", I);
    }(v, w, void 0), L && (w.reset(), function Y(z, M, I) {
      const $ = M.getComponent();
      if ($) {
        const T = $.d;
        if (T != null && (z = S[T], I = R[T] = r.writeCursor()), L.has($)) {
          const G = N($);
          if (!G.invert)
            throw Error(`Cannot invert subtype ${G.name}`);
          C(I, G, G.invert(m($)));
        }
      }
      let x = 0, q = 0;
      const J = r.advancer(z, (T, G) => c(G) ? x - T - 1 : T - x, (T, G) => {
        c(G) && x++;
      });
      for (const T of M)
        if (typeof T == "number") {
          const G = T - q, ce = J(G), oe = G + x;
          I.descend(oe), Y(ce, M, I), l(M.getComponent()) && q++, I.ascend();
        } else
          I.descend(T), Y(J(T), M, I), I.ascend();
      J.end();
    }(v.clone(), v, w), R.length && (w.reset(), v.traverse(w, (Y, z) => {
      const M = Y.p;
      if (M != null) {
        const I = R[M];
        I && I.get(), I && z.mergeTree(I.get());
      }
    }))), w.get();
  }
  const ge = (p, v) => p.some((w) => typeof w == "object" && (Array.isArray(w) ? ge(w, v) : v(w)));
  function Me(p, v) {
    if (p == null || !ge(p, (M) => {
      var I;
      return M.r !== void 0 || ((I = N(M)) === null || I === void 0 ? void 0 : I.makeInvertible) != null;
    }))
      return p;
    const w = new r.ReadCursor(p), L = new r.WriteCursor();
    let S = !1;
    const R = [], Y = [], z = (M, I, $) => {
      const x = M.getComponent();
      let q = !1;
      if (x) {
        x.d != null && I.write("d", x.d), x.i !== void 0 && I.write("i", x.i);
        const T = x.p;
        if (T != null && (R[T] = M.clone(), a($ !== void 0, "Operation picks up at an invalid key"), Y[T] = $, I.write("p", x.p)), x.r !== void 0 && $ === void 0)
          throw Error("Invalid doc / op in makeInvertible: removed item missing from doc");
        const G = N(x);
        G && (G.makeInvertible ? S = !0 : C(I, G, m(x), !0));
      }
      let J = 0;
      for (const T of M) {
        I.descend(T);
        const G = typeof T == "number" ? T - J : T, ce = k($, G), oe = z(M, I, ce);
        ce !== oe && (q || (q = !0, $ = f($)), oe === void 0 ? ($ = u($, G), typeof T == "number" && J++) : $[G] = oe), I.ascend();
      }
      return x && (x.r !== void 0 ? (I.write("r", s.default($)), $ = void 0) : x.p != null && ($ = void 0)), $;
    };
    return z(w, L, v), L.get(), S && (L.reset(), function M(I, $, x, q, J) {
      const T = $.getComponent();
      if (T) {
        T.i !== void 0 ? (q = T.i, J = !0) : T.d != null && (q = Y[T.d], I = R[T.d], J = !1, T.d);
        let ee = N(T);
        if (ee && ee.makeInvertible) {
          const fe = m(T);
          C(x, ee, ee.makeInvertible(fe, q), !0);
        }
      }
      let G = 0, ce = 0;
      const oe = r.advancer(I, (ee, fe) => c(fe) ? G - ee - 1 : ee - G, (ee, fe) => {
        c(fe) && G++;
      });
      for (const ee of $)
        if (typeof ee == "number") {
          const fe = ee - ce, He = oe(fe), _e = fe + G, Ee = k(q, J ? fe : _e);
          x.descend(ee), M(He, $, x, Ee, J), l($.getComponent()) && ce++, x.ascend();
        } else {
          const fe = k(q, ee);
          x.descend(ee), M(oe(ee), $, x, fe, J), x.ascend();
        }
      oe.end();
    }(w.clone(), w, L, v, !1)), L.get();
  }
  function Qe(p, v) {
    return re(Me(p, v));
  }
  const Ve = (p) => {
    if (p == null)
      return null;
    const v = p.slice();
    for (let w = 0; w < p.length; w++) {
      const L = v[w];
      Array.isArray(L) && (v[w] = Ve(L));
    }
    return v;
  };
  function ze(p, v, w) {
    a(w === "left" || w === "right", "Direction must be left or right");
    const L = w === "left" ? 0 : 1;
    if (v == null)
      return {
        ok: !0,
        result: p
      };
    V(p), V(v);
    let S = null;
    const R = [], Y = [], z = [], M = [], I = [], $ = [], x = [], q = [], J = [], T = [], G = [], ce = [], oe = [], ee = [], fe = [];
    let He = 0;
    const _e = r.readCursor(p), Ee = r.readCursor(v), de = r.writeCursor();
    if (function ie(P, Q = null, F) {
      const U = o(Q);
      U && (U.r !== void 0 ? F = Q.clone() : U.p != null && (F = null, $[U.p] = P.clone()));
      const W = P.getComponent();
      let ne;
      W && (ne = W.p) != null && (I[ne] = Q ? Q.clone() : null, z[ne] = P.clone(), F && (T[ne] = !0, J[ne] = F), U && U.p != null && (ee[ne] = U.p));
      const se = r.advancer(Q);
      for (const ae of P)
        ie(P, se(ae), F);
      se.end();
    }(Ee, _e, null), function ie(P, Q, F, U, W) {
      const ne = F.getComponent();
      let se, ae = !1;
      ne && ((se = ne.d) != null ? (M[se] = F.clone(), U != null && (fe[U] == null && (fe[U] = []), fe[U].push(se)), P = I[se] || null, Q = z[se] || null, T[se] ? (W && (G[se] = !0), W = J[se] || null) : !W || L !== 1 && ee[se] != null || S == null && (S = {
        type: i.ConflictType.RM_UNEXPECTED_CONTENT,
        op1: t.removeOp(W.getPath()),
        op2: t.moveOp(Q.getPath(), F.getPath())
      }), ae = !0) : ne.i !== void 0 && (P = Q = null, ae = !0, W && S == null && (S = {
        type: i.ConflictType.RM_UNEXPECTED_CONTENT,
        op1: t.removeOp(W.getPath()),
        op2: t.insertOp(F.getPath(), ne.i)
      })));
      const be = o(P);
      be && (be.r !== void 0 ? W = P.clone() : be.p != null && (be.p, U = be.p, W = null));
      const ye = N(ne);
      ye && W && S == null && (S = {
        type: i.ConflictType.RM_UNEXPECTED_CONTENT,
        op1: t.removeOp(W.getPath()),
        op2: t.editOp(F.getPath(), ye, m(ne), !0)
      });
      let pe = 0, ve = 0;
      const te = r.advancer(Q, (Z, ke) => c(ke) ? pe - Z - 1 : Z - pe, (Z, ke) => {
        c(ke) && pe++;
      }), B = r.advancer(P);
      for (const Z of F)
        if (typeof Z == "number") {
          const ke = Z - ve, Oe = te(ke);
          ve += +ie(B(ke + pe), Oe, F, U, W);
        } else {
          const ke = te(Z);
          ie(B(Z), ke, F, U, W);
        }
      return te.end(), B.end(), ae;
    }(_e, Ee, Ee.clone(), null, null), M.map((ie) => ie && ie.get()), S)
      return {
        ok: !1,
        conflict: S
      };
    G.map((ie) => !!ie);
    const we = [];
    let $e = null;
    (function ie(P, Q, F, U, W) {
      let ne = !1;
      const se = o(Q);
      if (c(se)) {
        const te = se.p;
        te != null ? (F = M[te], U = ce[te] = r.writeCursor(), ne = !0, W = null) : (F = null, W = Q.clone());
      } else
        l(o(F)) && (F = null);
      const ae = P.getComponent();
      if (ae) {
        const te = ae.p;
        te != null ? (W && (q[te] = W), we[te] = W || L === 1 && ne ? null : U.getComponent(), R[te] = P.clone(), F && (x[te] = F.clone())) : ae.r !== void 0 && (W || U.write("r", !0), (W || ne) && ($e == null && ($e = /* @__PURE__ */ new Set()), $e.add(ae)));
      }
      let be = 0, ye = 0;
      const pe = r.advancer(Q, void 0, (te, B) => {
        c(B) && be++;
      }), ve = r.advancer(F, (te, B) => l(B) ? ~(te - ye) : te - ye, (te, B) => {
        l(B) && ye++;
      });
      if (P)
        for (const te of P)
          if (typeof te == "string") {
            const B = pe(te), Z = ve(te);
            U.descend(te), ie(P, B, Z, U, W), U.ascend();
          } else {
            const B = pe(te), Z = te - be, ke = c(o(B)) ? null : ve(Z), Oe = Z + ye;
            a(Oe >= 0), U.descend(Oe), ie(P, B, ke, U, W), U.ascend();
          }
      pe.end(), ve.end();
    })(_e, Ee, Ee.clone(), de, null), de.reset();
    let qe = [];
    if (function ie(P, Q, F, U, W, ne) {
      a(Q);
      const se = Q.getComponent();
      let ae = o(U), be = !1;
      const ye = (K, he, Ce) => K ? t.moveOp(K.getPath(), he.getPath()) : t.insertOp(he.getPath(), Ce.i);
      if (l(se)) {
        const K = se.d;
        K != null && (Y[K] = Q.clone());
        const he = K != null ? we[K] : null;
        let Ce = !1;
        if (se.i !== void 0 || K != null && he) {
          let me;
          ae && (ae.i !== void 0 || (me = ae.d) != null && !T[me]) && (Ce = me != null ? K != null && K === ee[me] : n.default(ae.i, se.i), Ce || me != null && L !== 1 && ee[me] != null || S == null && (S = {
            type: i.ConflictType.DROP_COLLISION,
            op1: ye(K != null ? R[K] : null, Q, se),
            op2: ye(me != null ? z[me] : null, U, ae)
          })), Ce || (ne ? S == null && (S = {
            type: i.ConflictType.RM_UNEXPECTED_CONTENT,
            op1: ye(K != null ? R[K] : null, Q, se),
            op2: t.removeOp(ne.getPath())
          }) : (K != null ? (qe[He] = K, W.write("d", he.p = He++)) : W.write("i", s.default(se.i)), be = !0));
        } else if (K != null && !he) {
          const me = q[K];
          me && (ne = me.clone());
        }
        K != null ? (P = R[K], F = $[K], U = x[K]) : se.i !== void 0 && (P = F = null, Ce || (U = null));
      } else
        c(o(P)) && (P = F = U = null);
      const pe = o(P), ve = o(F);
      if (c(ve)) {
        const K = ve.p;
        ve.r !== void 0 && (!pe || pe.r === void 0) || T[K] ? (U = null, ne = F.clone()) : K != null && (U = M[K], L !== 1 && ee[K] != null || ((W = oe[K]) || (W = oe[K] = r.writeCursor()), W.reset(), ne = null));
      } else
        !l(se) && l(ae) && (U = null);
      ae = U != null ? U.getComponent() : null;
      const te = N(se);
      if (te) {
        const K = m(se);
        if (ne)
          S == null && (S = {
            type: i.ConflictType.RM_UNEXPECTED_CONTENT,
            op1: t.editOp(Q.getPath(), te, K, !0),
            op2: t.removeOp(ne.getPath())
          });
        else {
          const he = N(ae);
          let Ce;
          if (he) {
            if (te !== he)
              throw Error("Transforming incompatible types");
            const me = m(ae);
            Ce = te.transform(K, me, w);
          } else
            Ce = s.default(K);
          C(W, te, Ce);
        }
      }
      let B = 0, Z = 0, ke = 0, Oe = 0, Fe = 0, Ye = 0, xe = P != null && P.descendFirst(), ct = xe;
      const et = r.advancer(F, void 0, (K, he) => {
        c(he) && ke++;
      });
      let Ue = U != null && U.descendFirst(), Be = Ue;
      for (const K of Q)
        if (typeof K == "number") {
          let he;
          const Ce = l(Q.getComponent()), me = K - Z;
          {
            let We;
            for (; xe && typeof (We = P.getKey()) == "number"; ) {
              We += B;
              const Le = P.getComponent(), tt = c(Le);
              if (We > me || We === me && (!tt || L === 0 && Ce))
                break;
              if (tt) {
                B--;
                const Xe = Le.p;
                ee.includes(Xe), Le.d, o(oe[Le.d]), c(o(oe[Le.d])), (Le.r === void 0 || $e && $e.has(Le)) && (Xe == null || !we[Xe] || L !== 1 && ee.includes(Xe)) || Fe--;
              }
              xe = P.nextSibling();
            }
            he = xe && We === me ? P : null;
          }
          const Re = me - B;
          let Ge = et(Re);
          const Ct = Re - ke;
          let pt = null;
          {
            let We, Le;
            for (; Ue && typeof (We = U.getKey()) == "number"; ) {
              Le = We - Oe;
              const tt = U.getComponent(), Xe = l(tt);
              if (Le > Ct)
                break;
              if (Le === Ct) {
                if (!Xe) {
                  pt = U;
                  break;
                }
                {
                  if (L === 0 && Ce) {
                    pt = U;
                    break;
                  }
                  const Je = Ge && c(Ge.getComponent());
                  if (L === 0 && Je)
                    break;
                }
              }
              if (Xe) {
                const Je = tt.d;
                ee[Je], tt.i === void 0 && (T[Je] || ee[Je] != null && L !== 1) ? (T[Je] || ee[Je] != null && L === 0) && (Oe++, Ye--) : Oe++;
              }
              Ue = U.nextSibling();
            }
          }
          const Gt = Ct + Oe + Fe + Ye;
          a(Gt >= 0, "trying to descend to a negative index"), W.descend(Gt), Ce && (he = Ge = pt = null, Z++), ie(he, Q, Ge, pt, W, ne) && Ye++, W.ascend();
        } else {
          let he;
          for (; xe && (he = P.getKey(), typeof he != "string" || !(he > K || he === K)); )
            xe = P.nextSibling();
          const Ce = xe && he === K ? P : null, me = et(K);
          let Re;
          for (; Ue && (Re = U.getKey(), typeof Re != "string" || !(Re > K || Re === K)); )
            Ue = U.nextSibling();
          const Ge = Ue && Re === K ? U : null;
          W.descend(K), ie(Ce, Q, me, Ge, W, ne), W.ascend();
        }
      return et.end(), ct && P.ascend(), Be && U.ascend(), be;
    }(_e, _e.clone(), Ee, Ee.clone(), de, null), S)
      return {
        ok: !1,
        conflict: S
      };
    de.reset();
    const Se = (ie, P, Q) => ie.traverse(P, (F, U) => {
      F.d != null && Q(F.d, ie, U);
    });
    (T.length || ce.length) && (Se(Ee, de, (ie, P, Q) => {
      T[ie] && !G[ie] && Q.write("r", !0), ce[ie] && Q.mergeTree(ce[ie].get());
    }), de.reset());
    const Ie = [], De = [];
    if ((oe.length || T.length) && !S) {
      const ie = r.readCursor(Ve(de.get()));
      if (Se(ie, null, (P, Q) => {
        Ie[P] = Q.clone();
      }), oe.forEach((P) => {
        P && Se(r.readCursor(P.get()), null, (Q, F) => {
          Ie[Q] = F.clone();
        });
      }), function P(Q, F, U, W, ne, se) {
        const ae = o(F);
        if (ae && c(ae))
          if (ae.p != null) {
            const B = ae.p;
            Ie[B].getPath(), U = Ie[B], W = De[B] = r.writeCursor();
          } else
            ae.r !== void 0 && (U = null);
        else
          l(o(U)) && (U = null);
        const be = Q.getComponent();
        if (be) {
          let B;
          if ((B = be.d) != null) {
            const Z = oe[B];
            Z && (Z.get(), W.mergeTree(Z.get()), U = r.readCursor(Z.get()));
          }
        }
        let ye = 0, pe = 0;
        const ve = r.advancer(F, void 0, (B, Z) => {
          c(Z) && ye--;
        }), te = r.advancer(U, (B, Z) => l(Z) ? -(B - pe) - 1 : B - pe, (B, Z) => {
          l(Z) && pe++;
        });
        for (const B of Q)
          if (typeof B == "number") {
            const Z = ve(B), ke = B + ye, Oe = te(ke), Fe = ke + pe;
            W.descend(Fe), P(Q, Z, Oe, W), W.ascend();
          } else
            W.descend(B), P(Q, ve(B), te(B), W), W.ascend();
        ve.end(), te.end();
      }(Ee, ie, ie.clone(), de), de.reset(), S)
        return {
          ok: !1,
          conflict: S
        };
      if (de.get(), De.length) {
        const P = De.map((F) => F ? F.get() : null), Q = r.readCursor(Ve(de.get()));
        if (Se(Q, de, (F, U, W) => {
          const ne = P[F];
          ne && (W.mergeTree(ne), P[F] = null);
        }), P.find((F) => F)) {
          const F = r.writeCursor(), U = r.writeCursor();
          let W = 0, ne = 0;
          P.forEach((se) => {
            se != null && Se(r.readCursor(se), null, (ae) => {
              const be = qe[ae];
              F.writeMove(R[be].getPath(), Y[be].getPath(), W++);
              const ye = fe[be];
              ye && ye.forEach((pe) => {
                T[pe] || L !== 1 && ee[pe] != null || U.writeMove(z[pe].getPath(), M[pe].getPath(), ne++);
              });
            });
          }), S = {
            type: i.ConflictType.BLACKHOLE,
            op1: F.get(),
            op2: U.get()
          };
        }
      }
    }
    return S ? {
      ok: !1,
      conflict: S
    } : {
      ok: !0,
      result: de.get()
    };
  }
  const Ze = (p) => {
    const v = new Error("Transform detected write conflict");
    throw v.conflict = p, v.type = v.name = "writeConflict", v;
  };
  function at(p, v, w) {
    const L = ze(p, v, w);
    if (L.ok)
      return L.result;
    Ze(L.conflict);
  }
  const je = (p) => {
    const v = r.writeCursor();
    return r.readCursor(p).traverse(v, (w, L) => {
      (l(w) || N(w)) && L.write("r", !0);
    }), v.get();
  }, ot = (p, v) => {
    const { type: w, op1: L, op2: S } = p;
    switch (w) {
      case i.ConflictType.DROP_COLLISION:
        return v === "left" ? [null, je(S)] : [je(L), null];
      case i.ConflictType.RM_UNEXPECTED_CONTENT:
        let R = !1;
        return r.readCursor(L).traverse(null, (Y) => {
          Y.r !== void 0 && (R = !0);
        }), R ? [null, je(S)] : [je(L), null];
      case i.ConflictType.BLACKHOLE:
        return [je(L), je(S)];
      default:
        throw Error("Unrecognised conflict: " + w);
    }
  };
  function lt(p, v, w, L) {
    let S = null;
    for (; ; ) {
      const R = ze(v, w, L);
      if (R.ok)
        return X(S, R.result);
      {
        const { conflict: Y } = R;
        p(Y) || Ze(Y);
        const [z, M] = ot(Y, L);
        v = X(H(v), z), w = X(H(w), M), S = X(S, M);
      }
    }
  }
})(wn);
(function(t) {
  var e = Ae && Ae.__createBinding || (Object.create ? function(i, a, o, h) {
    h === void 0 && (h = o), Object.defineProperty(i, h, { enumerable: !0, get: function() {
      return a[o];
    } });
  } : function(i, a, o, h) {
    h === void 0 && (h = o), i[h] = a[o];
  }), n = Ae && Ae.__exportStar || function(i, a) {
    for (var o in i)
      o !== "default" && !a.hasOwnProperty(o) && e(a, i, o);
  };
  Object.defineProperty(t, "__esModule", { value: !0 }), n(wn, t);
  var s = Ht;
  Object.defineProperty(t, "ReadCursor", { enumerable: !0, get: function() {
    return s.ReadCursor;
  } }), Object.defineProperty(t, "WriteCursor", { enumerable: !0, get: function() {
    return s.WriteCursor;
  } });
  var r = Dt;
  Object.defineProperty(t, "ConflictType", { enumerable: !0, get: function() {
    return r.ConflictType;
  } });
})(Te);
const pr = {
  delay: 1e3,
  maxStack: 100,
  userOnly: !1
};
class gr {
  constructor(e, n = pr) {
    j(this, "lastRecorded", 0);
    j(this, "ignoreChange", !1);
    j(this, "selectionStack", []);
    j(this, "stack", {
      undo: [],
      redo: []
    });
    this.muya = e, this.options = n, this.listen();
  }
  get selection() {
    return this.muya.editor.selection;
  }
  listen() {
    this.muya.eventCenter.on(
      "json-change",
      ({
        op: e,
        source: n,
        doc: s
      }) => {
        this.ignoreChange || (!this.options.userOnly || n === "user" ? this.record(e, s) : this.transform(e));
      }
    );
  }
  change(e, n) {
    if (this.stack[e].length === 0)
      return;
    const { operation: s, selection: r } = this.stack[e].pop(), i = Te.type.invert(s);
    this.stack[n].push({
      operation: i,
      selection: this.selection.getSelection()
    }), this.lastRecorded = 0, this.ignoreChange = !0, this.muya.editor.updateContents(s, r, "user"), this.ignoreChange = !1, this.getLastSelection();
  }
  clear() {
    this.stack = { undo: [], redo: [] };
  }
  cutoff() {
    this.lastRecorded = 0;
  }
  getLastSelection() {
    return this.selectionStack.push(this.selection.getSelection()), this.selectionStack.length > 2 && this.selectionStack.shift(), this.selectionStack.length === 2 ? this.selectionStack[0] : null;
  }
  record(e, n) {
    if (e.length === 0)
      return;
    let s = this.getLastSelection();
    this.stack.redo = [];
    let r = Te.type.invert(e);
    const i = Date.now();
    if (this.lastRecorded + this.options.delay > i && this.stack.undo.length > 0) {
      const { operation: a, selection: o } = this.stack.undo.pop();
      s = o, r = Te.type.makeInvertible(
        Te.type.compose(r, a),
        n
      );
    } else
      this.lastRecorded = i;
    !r || r.length === 0 || (this.stack.undo.push({ operation: r, selection: s }), this.stack.undo.length > this.options.maxStack && this.stack.undo.shift());
  }
  redo() {
    this.change("redo", "undo");
  }
  transform(e) {
    nn(this.stack.undo, e), nn(this.stack.redo, e);
  }
  undo() {
    this.change("undo", "redo");
  }
}
function nn(t, e) {
  let n = e;
  for (let s = t.length - 1; s >= 0; s -= 1) {
    const { operation: r } = t[s];
    t[s] = Object.assign(t[s], {
      operation: Te.type.transform(r, n, "left")
    }), n = Te.type.transform(
      n,
      r,
      "right"
    ), t[s].operation.length === 0 && t.splice(s, 1);
  }
}
const ft = (t) => t && typeof t == "string" && an("a", "href", t) ? t : "";
function mr({ h: t, cursor: e, block: n, token: s, outerClass: r }) {
  const i = this.getClassName(r, n, s, e), { isLink: a, marker: o, href: h, email: f } = s, { start: c, end: l } = s.range, u = this.highlight(
    t,
    n,
    c,
    c + o.length,
    s
  ), d = this.highlight(t, n, l - o.length, l, s), g = this.highlight(
    t,
    n,
    c + o.length,
    l - o.length,
    s
  ), k = a ? encodeURI(h) : `mailto:${f}`;
  return [
    t(`span.${i}`, u),
    t(
      `a.${b.MU_INLINE_RULE}.${b.MU_AUTO_LINK}`,
      {
        attrs: {
          spellcheck: "false"
        },
        props: {
          href: ft(k),
          target: "_blank"
        }
      },
      g
    ),
    t(`span.${i}`, d)
  ];
}
function yr({ h: t, block: e, token: n }) {
  const { linkType: s, www: r, url: i, email: a } = n, { start: o, end: h } = n.range, f = this.highlight(t, e, o, h, n), c = s === "www" ? encodeURI(`http://${r}`) : s === "url" ? encodeURI(i) : `mailto:${a}`;
  return [
    t(
      `a.${b.MU_INLINE_RULE}.${b.MU_AUTO_LINK_EXTENSION}`,
      {
        attrs: {
          spellcheck: "false"
        },
        props: {
          href: ft(c),
          target: "_blank"
        }
      },
      f
    )
  ];
}
function br({ h: t, cursor: e, block: n, token: s, outerClass: r }) {
  const i = this.getClassName(r, n, s, e), { start: a, end: o } = s.range, h = this.highlight(t, n, a, o, s);
  return [t(`span.${i}.${b.MU_REMOVE}`, h)];
}
function kr(t, e, n, s, r) {
  const { highlights: i = [] } = r, a = e.split(""), o = a.length, h = [];
  let f;
  for (f = 0; f < o; f++) {
    const c = a[f], l = i.filter(
      (d) => on({ start: s + f, end: s + f + 1 }, d)
    );
    let u = "span";
    if (l.length) {
      const d = this.getHighlightClassName(!!l[0].active);
      u += `.${d}`;
    }
    Dn(f) ? h.push(t(`${u}.${n}`, c)) : h.push(t(`${u}.${b.MU_BACKLASH}`, c));
  }
  return h;
}
function Er({ h: t, block: e, token: n }) {
  const { start: s, end: r } = n.range, { marker: i } = n, a = this.highlight(
    t,
    e,
    s,
    s + i.length,
    n
  ), o = this.highlight(t, e, s + i.length, r, n);
  return [
    t(`span.${b.MU_GRAY}`, a),
    t(
      `span.${b.MU_LANGUAGE}`,
      {
        attrs: {
          spellcheck: "false"
        }
      },
      o
    )
  ];
}
function Cr({ h: t, cursor: e, block: n, token: s, outerClass: r }) {
  return this.delEmStrongFac("del", {
    h: t,
    cursor: e,
    block: n,
    token: s,
    outerClass: r
  });
}
function vr(t, {
  h: e,
  cursor: n,
  block: s,
  token: r,
  outerClass: i
}) {
  const a = this.getClassName(i, s, r, n), o = `span.${a}.${b.MU_REMOVE}`, { marker: h } = r, { start: f, end: c } = r.range, l = c - h.length - r.backlash.length, u = [
    ...r.children.reduce((k, E) => {
      const y = this[rt(E.type)]({
        h: e,
        cursor: n,
        block: s,
        token: E,
        className: a
      });
      return Array.isArray(y) ? [...k, ...y] : [...k, y];
    }, []),
    ...this.backlashInToken(
      e,
      r.backlash,
      a,
      l,
      r
    )
  ], d = this.highlight(
    e,
    s,
    f,
    f + h.length,
    r
  ), g = this.highlight(e, s, c - h.length, c, r);
  return [
    e(o, d),
    e(`${t}.${b.MU_INLINE_RULE}`, u),
    e(o, g)
  ];
}
function Mr({ h: t, cursor: e, block: n, token: s, outerClass: r }) {
  return this.delEmStrongFac("em", {
    h: t,
    cursor: e,
    block: n,
    token: s,
    outerClass: r
  });
}
function _r({ h: t, cursor: e, block: n, token: s, outerClass: r }) {
  const { start: i, end: a } = s.range, o = this.getClassName(r, n, s, e), h = os(s.content), f = h ? o : b.MU_WARN, c = f !== b.MU_GRAY ? `span.${f}.${b.MU_INLINE_RULE}.${b.MU_EMOJI_MARKED_TEXT}` : `span.${b.MU_INLINE_RULE}.${b.MU_EMOJI_MARKED_TEXT}`;
  let l = `span.${f}.${b.MU_EMOJI_MARKER}`, u = l, d = s.content, g = i + s.marker.length;
  if (s.highlights && s.highlights.length) {
    d = [];
    for (const E of s.highlights) {
      const { active: y } = E;
      let { start: A, end: _ } = E;
      const N = this.getHighlightClassName(!!y);
      A === i && (l += `.${N}`, A++), _ === a && (u += `.${N}`, _--), g < A && d.push(n.text.substring(g, A)), A < _ && d.push(
        t(`span.${N}`, n.text.substring(A, _))
      ), g = _;
    }
    g < a - s.marker.length && d.push(n.text.substring(g, a - 1));
  }
  const k = h ? t(
    c,
    {
      attrs: {
        spellcheck: "false"
      },
      dataset: {
        emoji: h.emoji
      }
    },
    d
  ) : t(c, d);
  return [
    t(l, s.marker),
    k,
    t(u, s.marker)
  ];
}
function Or({
  h: t,
  cursor: e,
  block: n,
  token: s,
  outerClass: r
}) {
  const i = this.getClassName(r, n, s, e), { marker: a } = s, { start: o, end: h } = s.range, f = this.highlight(
    t,
    n,
    o,
    o + a.length,
    s
  ), c = this.highlight(t, n, h - 1, h, s), l = this.highlight(
    t,
    n,
    o + a.length,
    h - 1,
    s
  );
  return [
    t(
      `sup#noteref-${s.content}.${b.MU_INLINE_FOOTNOTE_IDENTIFIER}.${b.MU_INLINE_RULE}`,
      [
        t(`span.${i}.${b.MU_REMOVE}`, f),
        t(
          "a",
          {
            attrs: {
              spellcheck: "false"
            }
          },
          l
        ),
        t(`span.${i}.${b.MU_REMOVE}`, c)
      ]
    )
  ];
}
function Tr({ h: t, token: e }) {
  const { spaces: n, lineBreak: s, isAtEnd: r } = e, i = b.MU_HARD_LINE_BREAK, a = b.MU_HARD_LINE_BREAK_SPACE;
  return r ? [
    t(`span.${i}`, t(`span.${a}`, n)),
    t(`span.${b.MU_LINE_END}`, s)
  ] : [
    t(`span.${i}`, [t(`span.${a}`, n), s])
  ];
}
function Nr({
  h: t,
  cursor: e,
  block: n,
  token: s,
  outerClass: r
}) {
  const { content: i } = s, { start: a, end: o } = s.range, h = this.getClassName(
    r,
    n,
    {
      range: {
        start: a,
        end: o - i.length
      }
    },
    e
  ), f = this.highlight(
    t,
    n,
    a,
    o - i.length,
    s
  ), c = this.highlight(
    t,
    n,
    o - i.length,
    o,
    s
  ), l = h === b.MU_HIDE ? `span.${b.MU_HEADER_TIGHT_SPACE}.${b.MU_REMOVE}` : `span.${b.MU_GRAY}.${b.MU_REMOVE}`;
  return [
    t(`span.${h}.${b.MU_REMOVE}`, f),
    t(l, c)
  ];
}
function Ar(t, e, n, s, r) {
  const { text: i } = e, { highlights: a } = r;
  let o = [];
  const h = [];
  let f = n;
  if (a)
    for (const c of a) {
      const l = on({ start: n, end: s }, c);
      l && h.push(l);
    }
  if (h.length) {
    for (const c of h) {
      const { start: l, end: u, active: d } = c, g = this.getHighlightClassName(!!d);
      f < l && o.push(i.substring(f, l)), o.push(t(`span.${g}`, i.substring(l, u))), f = u;
    }
    f < s && o.push(e.text.substring(f, s));
  } else
    o = [i.substring(n, s)];
  return o;
}
function Ir({ h: t, block: e, token: n }) {
  const { start: s, end: r } = n.range, i = this.highlight(t, e, s, r, n);
  return [t(`span.${b.MU_GRAY}.${b.MU_REMOVE}`, i)];
}
function wr({
  h: t,
  cursor: e,
  block: n,
  token: s,
  outerClass: r
}) {
  const i = this.getClassName(r, n, s, e), { escapeCharacter: a } = s, { start: o, end: h } = s.range, f = this.highlight(t, n, o, h, s);
  return [
    t(
      `span.${i}.${b.MU_HTML_ESCAPE}`,
      {
        dataset: {
          character: Fn[a]
        }
      },
      f
    )
  ];
}
function Sr({
  h: t,
  cursor: e,
  block: n,
  token: s,
  outerClass: r
}) {
  const i = this.getClassName(r, n, s, e), { children: a } = s, { start: o, end: h } = s.range, f = this.highlight(t, n, o, h, s), c = cn(s.raw), l = `span.${b.MU_RUBY_RENDER}`;
  return a != null && a.length ? [
    t(`span.${i}.${b.MU_RUBY}`, [
      t(
        `span.${b.MU_INLINE_RULE}.${b.MU_RUBY_TEXT}`,
        f
      ),
      t(
        l,
        {
          attrs: {
            contenteditable: "false",
            spellcheck: "false"
          },
          dataset: {
            start: String(o + 6),
            // '<ruby>'.length
            end: String(h - 7)
            // '</ruby>'.length
          }
        },
        c
      )
    ])
    // if children is empty string, no need to render ruby characters...
  ] : [
    t(`span.${i}.${b.MU_RUBY}`, [
      t(
        `span.${b.MU_INLINE_RULE}.${b.MU_RUBY_TEXT}`,
        f
      )
    ])
  ];
}
function $r({
  h: t,
  cursor: e,
  block: n,
  token: s,
  outerClass: r
}) {
  const { tag: i, openTag: a, closeTag: o, children: h, attrs: f } = s, c = h != null && h.length ? this.getClassName(r, n, s, e) : b.MU_GRAY, l = c === b.MU_HIDE ? c : b.MU_HTML_TAG, { start: u, end: d } = s.range, g = this.highlight(
    t,
    n,
    u,
    u + a.length,
    s
  ), k = o ? this.highlight(t, n, d - o.length, d, s) : "", E = Array.isArray(h) && h.length && i !== "ruby" ? h.reduce((y, A) => {
    const _ = this[rt(A.type)]({
      h: t,
      cursor: e,
      block: n,
      token: A,
      className: c
    });
    return Array.isArray(_) ? [...y, ..._] : [...y, _];
  }, []) : "";
  switch (i) {
    case "img":
      return this.image({ h: t, cursor: e, block: n, token: s, outerClass: r });
    case "br":
      return [t(`span.${b.MU_HTML_TAG}`, [...g, t(i)])];
    default:
      if (o) {
        if (i === "ruby")
          return this.htmlRuby({
            h: t,
            cursor: e,
            block: n,
            token: s,
            outerClass: r
          });
        {
          let y = Gn.includes(i) || !Vn(`<${i}>`) ? "span" : i;
          y += `.${b.MU_INLINE_RULE}.${b.MU_RAW_HTML}`;
          const A = {
            attrs: {},
            dataset: {
              start: String(u),
              end: String(d),
              raw: s.raw
            }
          };
          if ((i === "code" || i === "kbd") && Object.assign(A.attrs, { spellcheck: "false" }), f.id && (y += `#${f.id}`), f.class && /\S/.test(f.class)) {
            const _ = f.class.split(/\s+/);
            for (const N of _)
              y += `.${N}`;
          }
          for (const _ of Object.keys(f))
            if (_ !== "id" && _ !== "class") {
              const N = f[_];
              N && an(i, _, N) && (A.attrs[_] = N);
            }
          return [
            t(
              `span.${l}.${b.MU_OUTPUT_REMOVE}`,
              {
                attrs: {
                  spellcheck: "false"
                }
              },
              g
            ),
            t(`${y}`, A, E),
            t(
              `span.${l}.${b.MU_OUTPUT_REMOVE}`,
              {
                attrs: {
                  spellcheck: "false"
                }
              },
              k
            )
          ];
        }
      } else
        return [t(`span.${b.MU_HTML_TAG}`, g)];
  }
}
const Nt = (t, e, n) => {
  const s = `a.${e}`, r = t(
    "i.icon",
    t(
      "i.icon-inner",
      {
        style: {
          background: `url(${n}) no-repeat`,
          "background-size": "100%"
        }
      },
      ""
    )
  );
  return t(s, r);
};
function xr({ h: t, block: e, token: n }) {
  const s = ln(n.attrs.src), { selectedImage: r } = this.muya.editor.selection, { i18n: i } = this.muya, a = {
    attrs: {
      contenteditable: "false",
      "empty-text": i.t("Click to add an image"),
      "fail-text": i.t("Load image failed")
    },
    dataset: {
      raw: n.raw
    }
  };
  let o = "", h, f = s.src;
  const c = n.attrs.alt, l = n.attrs.title, u = n.attrs.width, d = n.attrs.height;
  f && ({ id: o, isSuccess: h } = this.loadImageAsync(s, n.attrs));
  let g = o ? `span#${h ? o + "_" + n.range.start : o}.${b.MU_INLINE_IMAGE}` : `span.${b.MU_INLINE_IMAGE}`;
  const k = [
    Nt(t, "mu-image-icon-success", ls),
    Nt(t, "mu-image-icon-fail", cs),
    Nt(t, "mu-image-icon-close", hs)
  ], E = (...y) => {
    const A = {};
    return l && Object.assign(A, {
      dataset: { title: l }
    }), t(`span.${b.MU_IMAGE_CONTAINER}`, A, y);
  };
  if (typeof n.attrs["data-align"] == "string" && (g += `.${n.attrs["data-align"]}`), this.urlMap.has(f) && (r && r.token.attrs.src === f && r.imageId !== o && (r.imageId = o), f = this.urlMap.get(f), h = !0), c.startsWith("loading-") && (g += `.${b.MU_IMAGE_UPLOADING}`, Object.assign(a.dataset, {
    id: c
  }), this.urlMap.has(c) && (f = this.urlMap.get(c), h = !0)), f) {
    if (typeof h > "u" ? g += `.${b.MU_IMAGE_LOADING}` : h === !0 ? g += `.${b.MU_IMAGE_SUCCESS}` : g += `.${b.MU_IMAGE_FAIL}`, r) {
      const { imageId: A, block: _, token: N } = r;
      A === `${o}_${n.range.start}` && _ === e && N.range.start === n.range.start && N.range.end === n.range.end && (g += `.${b.MU_INLINE_IMAGE_SELECTED}`);
    }
    const y = () => {
      const A = {
        props: {
          alt: c.replace(/[`*{}[\]()#+\-.!_>~:|<>$]/g, ""),
          src: f,
          title: l
        }
      };
      return typeof u == "string" && u && Object.assign(A.props, { width: u }), typeof d == "string" && d && Object.assign(A.props, { height: d }), t("img", A);
    };
    return h ? [
      t(g, a, [
        ...k,
        E(
          // An image description has inline elements as its contents.
          // When an image is rendered to HTML, this is used as the image’s alt attribute.
          y()
        )
      ])
    ] : [t(g, a, [...k, E()])];
  } else
    return g += `.${b.MU_EMPTY_IMAGE}`, [t(g, a, [...k, E()])];
}
function Rr({
  h: t,
  cursor: e,
  block: n,
  token: s,
  outerClass: r
}) {
  const i = this.getClassName(r, n, s, e), { marker: a } = s, { start: o, end: h } = s.range, f = this.highlight(
    t,
    n,
    o,
    o + a.length,
    s
  ), c = this.highlight(t, n, h - a.length, h, s), l = this.highlight(
    t,
    n,
    o + a.length,
    h - a.length,
    s
  );
  return [
    t(`span.${i}.${b.MU_REMOVE}`, f),
    t(
      `code.${b.MU_INLINE_RULE}`,
      {
        attrs: {
          spellcheck: "false"
        }
      },
      l
    ),
    t(`span.${i}.${b.MU_REMOVE}`, c)
  ];
}
function Lr({
  h: t,
  cursor: e,
  block: n,
  token: s,
  outerClass: r
}) {
  const i = this.getClassName(r, n, s, e), { i18n: a } = this.muya, o = i === b.MU_HIDE ? `span.${i}.${b.MU_MATH}` : `span.${b.MU_MATH}`, { start: h, end: f } = s.range, { marker: c } = s, l = this.highlight(
    t,
    n,
    h,
    h + c.length,
    s
  ), u = this.highlight(t, n, f - c.length, f, s), d = this.highlight(
    t,
    n,
    h + c.length,
    f - c.length,
    s
  ), { content: g, type: k } = s, { loadMathMap: E } = this, y = !1, A = `${g}_${k}`;
  let _ = null, N = `span.${b.MU_MATH_RENDER}`;
  if (E.has(A))
    _ = E.get(A);
  else
    try {
      const m = Wn.renderToString(g, {
        displayMode: y
      });
      _ = cn(m), E.set(A, _);
    } catch {
      _ = `<${a.t("Invalid Mathematical Formula")}>`, N += `.${b.MU_MATH_ERROR}`;
    }
  return [
    t(`span.${i}.${b.MU_MATH_MARKER}`, l),
    t(o, [
      t(
        `span.${b.MU_INLINE_RULE}.${b.MU_MATH_TEXT}`,
        {
          attrs: { spellcheck: "false" }
        },
        d
      ),
      t(
        N,
        {
          attrs: { contenteditable: "false" },
          dataset: {
            start: String(h + 1),
            // '$'.length
            end: String(f - 1)
            // '$'.length
          }
        },
        _
      )
    ]),
    t(`span.${i}.${b.MU_MATH_MARKER}`, u)
  ];
}
function Ur({
  h: t,
  cursor: e,
  block: n,
  token: s,
  outerClass: r
}) {
  const i = this.getClassName(r, n, s, e), a = i === b.MU_HIDE ? i : b.MU_LINK_IN_BRACKET, { start: o, end: h } = s.range, f = this.highlight(t, n, o, o + 3, s), c = this.highlight(t, n, o, o + 1, s), l = this.highlight(
    t,
    n,
    o + 1 + s.anchor.length + s.backlash.first.length,
    o + 1 + s.anchor.length + s.backlash.first.length + 2,
    s
  ), u = this.highlight(
    t,
    n,
    o + 1 + s.anchor.length + s.backlash.first.length + 2,
    o + 1 + s.anchor.length + s.backlash.first.length + 2 + s.hrefAndTitle.length,
    s
  ), d = this.highlight(
    t,
    n,
    o + 1 + s.anchor.length + s.backlash.first.length,
    o + 1 + s.anchor.length + s.backlash.first.length + 2 + s.hrefAndTitle.length,
    s
  ), g = this.highlight(t, n, h - 1, h, s), k = o + 1 + s.anchor.length, E = h - 1 - s.backlash.second.length;
  return Vt(s.backlash.first) && Vt(s.backlash.second) ? !s.children.length && !s.backlash.first ? [
    t(
      `span.${b.MU_GRAY}.${b.MU_REMOVE}`,
      f
    ),
    t(
      `a.${b.MU_NO_TEXT_LINK}.${b.MU_INLINE_RULE}`,
      {
        props: {
          href: ft(
            s.href + encodeURI(s.backlash.second)
          ),
          target: "_blank",
          title: s.title
        }
      },
      [
        ...u,
        ...this.backlashInToken(
          t,
          s.backlash.second,
          i,
          E,
          s
        )
      ]
    ),
    t(`span.${b.MU_GRAY}.${b.MU_REMOVE}`, g)
  ] : [
    t(`span.${i}.${b.MU_REMOVE}`, c),
    t(
      `span.${b.MU_INLINE_RULE}.${b.MU_LINK}`,
      {
        props: {
          href: ft(
            s.href + encodeURI(s.backlash.second)
          ),
          title: s.title
        },
        dataset: {
          start: String(o),
          end: String(h),
          raw: s.raw
        }
      },
      [
        ...s.children.reduce((y, A) => {
          const _ = this[rt(A.type)]({
            h: t,
            cursor: e,
            block: n,
            token: A,
            className: i
          });
          return Array.isArray(_) ? [...y, ..._] : [...y, _];
        }, []),
        ...this.backlashInToken(
          t,
          s.backlash.first,
          i,
          k,
          s
        )
      ]
    ),
    t(`span.${i}.${b.MU_REMOVE}`, l),
    t(
      `span.${a}.${b.MU_REMOVE}`,
      {
        attrs: { spellcheck: "false" }
      },
      [
        ...u,
        ...this.backlashInToken(
          t,
          s.backlash.second,
          i,
          E,
          s
        )
      ]
    ),
    t(`span.${i}.${b.MU_REMOVE}`, g)
  ] : [
    ...c,
    ...s.children.reduce((y, A) => {
      const _ = this[rt(A.type)]({
        h: t,
        cursor: e,
        block: n,
        token: A,
        className: i
      });
      return Array.isArray(_) ? [...y, ..._] : [...y, _];
    }, []),
    ...this.backlashInToken(
      t,
      s.backlash.first,
      i,
      k,
      s
    ),
    ...d,
    ...this.backlashInToken(
      t,
      s.backlash.second,
      i,
      E,
      s
    ),
    ...g
  ];
}
function Br(t, e, n, s) {
  const { src: r, isUnknownType: i } = t;
  let a, o, h, f;
  if (!this.loadImageMap.has(r))
    a = Kn(), zn(r, i).then(({ url: c, width: l, height: u }) => {
      const d = document.querySelector(`#${a}`), g = document.createElement("img");
      if (g.src = c, e.alt && (g.alt = e.alt.replace(/[`*{}[\]()#+\-.!_>~:|<>$]/g, "")), e.title && g.setAttribute("title", e.title), e.width && typeof e.width == "number" && g.setAttribute("width", e.width), e.height && typeof e.height == "number" && g.setAttribute("height", e.height), s && g.classList.add(s), d)
        if (d.classList.contains(`${b.MU_INLINE_IMAGE}`)) {
          const k = d.querySelector(
            `.${b.MU_IMAGE_CONTAINER}`
          ), E = k.querySelector("img");
          E && E.remove(), k.appendChild(g), d.classList.remove("mu-image-loading"), d.classList.add("mu-image-success");
        } else
          ns(g, d), n && Mt(d, "add", n);
      this.urlMap.has(r) && this.urlMap.delete(r), this.loadImageMap.set(r, {
        id: a,
        isSuccess: !0,
        width: l,
        height: u
      });
    }).catch(() => {
      const c = document.querySelector(`#${a}`);
      if (c) {
        Mt(c, "remove", b.MU_IMAGE_LOADING), Mt(c, "add", b.MU_IMAGE_FAIL);
        const l = c.querySelector("img");
        l && l.remove();
      }
      this.urlMap.has(r) && this.urlMap.delete(r), this.loadImageMap.set(r, {
        id: a,
        isSuccess: !1
      });
    });
  else {
    const c = this.loadImageMap.get(r);
    a = c.id, o = c.isSuccess, h = c.width, f = c.height;
  }
  return { id: a, isSuccess: o, width: h, height: f };
}
function Pr({ h: t, block: e, token: n }) {
  const { start: s, end: r } = n.range, i = this.highlight(t, e, s, r, n);
  return [t(`span.${b.MU_GRAY}.${b.MU_REMOVE}`, i)];
}
function jr({ h: t, block: e, token: n }) {
  const s = b.MU_REFERENCE_MARKER, {
    leftBracket: r,
    label: i,
    backlash: a,
    // rightBracket,
    // leftHrefMarker,
    // href,
    // rightHrefMarker,
    titleMarker: o,
    title: h,
    rightTitleSpace: f
  } = n, { start: c, end: l } = n.range, u = this.highlight(
    t,
    e,
    c,
    c + r.length,
    n
  ), d = this.highlight(
    t,
    e,
    c + r.length,
    c + r.length + i.length,
    n
  ), g = this.highlight(
    t,
    e,
    c + r.length + i.length + a.length,
    l - f.length - o.length - h.length,
    n
  ), k = this.highlight(
    t,
    e,
    l - f.length - o.length - h.length,
    l - o.length - f.length,
    n
  ), E = this.highlight(
    t,
    e,
    l - o.length - f.length,
    l,
    n
  ), y = c + r.length + i.length;
  return [
    t(`span.${s}`, u),
    t(
      `span.${b.MU_REFERENCE_LABEL}`,
      {
        attrs: {
          spellcheck: "false"
        }
      },
      d
    ),
    ...this.backlashInToken(
      t,
      a,
      b.MU_GRAY,
      y,
      n
    ),
    t(
      `span.${s}`,
      {
        attrs: {
          spellcheck: "false"
        }
      },
      g
    ),
    t(`span.${b.MU_REFERENCE_TITLE}`, k),
    t(
      `span.${s}`,
      {
        attrs: {
          spellcheck: "false"
        }
      },
      E
    )
  ];
}
function Hr({
  h: t,
  cursor: e,
  block: n,
  token: s,
  outerClass: r
}) {
  const i = this.getClassName(r, n, s, e), a = b.MU_IMAGE_MARKED_TEXT, { start: o, end: h } = s.range, f = this.highlight(t, n, o, h, s), { label: c, backlash: l, alt: u } = s, d = c + l.second;
  let g = "", k = "";
  this.parent.labels.has(d.toLowerCase()) && ({ href: g, title: k } = this.parent.labels.get(d.toLowerCase()));
  const E = ln(g), { src: y } = E;
  let A, _, N;
  return y && ({ id: A, isSuccess: _ } = this.loadImageAsync(
    E,
    { alt: u },
    i,
    b.MU_COPY_REMOVE
  )), N = A ? `span#${A}.${a}` : `span.${a}`, N += `.${b.MU_OUTPUT_REMOVE}`, _ ? N += `.${i}` : N += `.${b.MU_IMAGE_FAIL}`, _ ? [
    t(N, f),
    t(`img.${b.MU_COPY_REMOVE}`, { props: { alt: u, src: y, title: k } })
  ] : [t(N, f)];
}
function Dr({
  h: t,
  cursor: e,
  block: n,
  token: s,
  outerClass: r
}) {
  const i = this.getClassName(r, n, s, e), a = i === b.MU_GRAY ? b.MU_REFERENCE_LABEL : i, { start: o, end: h } = s.range, { anchor: f, children: c, backlash: l, isFullLink: u, label: d } = s, g = "[", k = (d + l.second).toLowerCase(), E = o + g.length + f.length, y = [
    ...c.reduce((D, V) => {
      const H = this[rt(V.type)]({
        h: t,
        cursor: e,
        block: n,
        token: V,
        className: i
      });
      return Array.isArray(H) ? [...D, ...H] : [...D, H];
    }, []),
    ...this.backlashInToken(t, l.first, i, E, s)
  ], { href: A, title: _ } = this.parent.labels.get(k) ?? {}, N = this.highlight(
    t,
    n,
    o,
    o + g.length,
    s
  ), m = this.highlight(
    t,
    n,
    o + g.length + f.length + l.first.length,
    h,
    s
  ), C = A ? `a.${b.MU_INLINE_RULE}.${b.MU_REFERENCE_LINK}` : `span.${b.MU_REFERENCE_LINK}`, O = {
    attrs: {
      spellcheck: "false"
    },
    props: {
      title: _
    },
    dataset: {
      start: String(o),
      end: String(h),
      raw: s.raw
    }
  };
  if (A && Object.assign(O.props, { href: ft(A) }), u) {
    const D = this.highlight(
      t,
      n,
      o + 3 * g.length + f.length + l.first.length,
      h - g.length - l.second.length,
      s
    ), V = this.highlight(
      t,
      n,
      o + g.length + f.length + l.first.length,
      o + 3 * g.length + f.length + l.first.length,
      s
    ), H = this.highlight(
      t,
      n,
      h - g.length,
      h,
      s
    ), ue = h - g.length - l.second.length;
    return [
      t(`span.${i}`, N),
      t(C, O, y),
      t(`span.${i}`, V),
      t(`span.${a}`, D),
      ...this.backlashInToken(
        t,
        l.second,
        i,
        ue,
        s
      ),
      t(`span.${i}`, H)
    ];
  } else
    return [
      t(`span.${i}`, N),
      t(C, O, y),
      t(`span.${i}`, m)
    ];
}
function Fr({ h: t, token: e }) {
  const { lineBreak: n, isAtEnd: s } = e;
  let r = `span.${b.MU_SOFT_LINE_BREAK}`;
  return s && (r += `.${b.MU_LINE_END}`), [t(r, n)];
}
function Gr({ h: t, cursor: e, block: n, token: s, outerClass: r }) {
  return this.delEmStrongFac("strong", {
    h: t,
    cursor: e,
    block: n,
    token: s,
    outerClass: r
  });
}
function Vr({
  h: t,
  cursor: e,
  block: n,
  token: s,
  outerClass: r
}) {
  const i = this.getClassName(r, n, s, e), { marker: a } = s, { start: o, end: h } = s.range, f = this.highlight(
    t,
    n,
    o,
    o + a.length,
    s
  ), c = this.highlight(t, n, h - a.length, h, s), l = this.highlight(
    t,
    n,
    o + a.length,
    h - a.length,
    s
  ), u = a === "^" ? "sup" : "sub";
  return [
    t(`span.${i}.${b.MU_REMOVE}`, f),
    t(
      `${u}.${b.MU_INLINE_RULE}`,
      {
        attrs: {
          spellcheck: "false"
        }
      },
      l
    ),
    t(`span.${i}.${b.MU_REMOVE}`, c)
  ];
}
function Wr({
  h: t,
  cursor: e,
  block: n,
  token: s,
  outerClass: r
}) {
  const i = this.getClassName(r, n, s, e), { start: a, end: o } = s.range, h = this.highlight(t, n, a, o, s);
  return n.blockName === "atxheading.content" ? [t(`span.${i}`, h)] : h;
}
function Kr({ h: t, block: e, token: n }) {
  const { start: s, end: r } = n.range;
  return [t("span.mu-plain-text", this.highlight(t, e, s, r, n))];
}
var zr = Object.defineProperty, qr = Object.getOwnPropertyDescriptor, Yr = (t, e, n, s) => {
  for (var r = s > 1 ? void 0 : s ? qr(e, n) : e, i = t.length - 1, a; i >= 0; i--)
    (a = t[i]) && (r = (s ? a(e, n, r) : a(r)) || r);
  return s && r && zr(e, n, r), r;
};
const Xr = {
  backlashInToken: kr,
  backlash: br,
  highlight: Ar,
  header: Nr,
  link: Ur,
  htmlTag: $r,
  hr: Ir,
  tailHeader: Wr,
  hardLineBreak: Tr,
  softLineBreak: Fr,
  codeFence: Er,
  inlineMath: Lr,
  autoLink: mr,
  autoLinkExtension: yr,
  loadImageAsync: Br,
  image: xr,
  delEmStrongFac: vr,
  emoji: _r,
  inlineCode: Rr,
  text: Kr,
  del: Cr,
  em: Mr,
  strong: Gr,
  htmlEscape: wr,
  multipleMath: Pr,
  referenceDefinition: jr,
  htmlRuby: Sr,
  referenceLink: Dr,
  referenceImage: Hr,
  superSubScript: Vr,
  footnoteIdentifier: Or
};
let xt = class {
  constructor(t, e) {
    j(this, "loadMathMap", /* @__PURE__ */ new Map());
    j(this, "loadImageMap", /* @__PURE__ */ new Map());
    j(this, "urlMap", /* @__PURE__ */ new Map());
    this.muya = t, this.parent = e;
  }
  checkConflicted(t, e, n = {}) {
    const s = n.anchor || n.start, r = n.focus || n.end;
    if (!s || !r || n.block && n.block !== t)
      return !1;
    const { start: i, end: a } = e.range;
    return Wt([i, a], [s.offset, s.offset]) || Wt([i, a], [r.offset, r.offset]);
  }
  getClassName(t, e, n, s) {
    return t || (this.checkConflicted(e, n, s) ? b.MU_GRAY : b.MU_HIDE);
  }
  getHighlightClassName(t) {
    return t ? b.MU_HIGHLIGHT : b.MU_SELECTION;
  }
  output(t, e, n) {
    const s = t.reduce(
      (a, o) => [
        ...a,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ...this[rt(o.type)]({
          h: zt,
          cursor: n,
          block: e,
          token: o
        })
      ],
      []
    ), r = zt("span", s);
    return ss(r).replace(/^<span>([\s\S]*)<\/span>$/g, (a, o) => o);
  }
};
xt = Yr([
  qn(Xr)
], xt);
const Jr = xt, Qr = dt("inlineRenderer:");
class Zr {
  constructor(e) {
    j(this, "labels", /* @__PURE__ */ new Map());
    j(this, "renderer");
    this.muya = e, this.renderer = new Jr(e, this);
  }
  tokenizer(e, n) {
    const { options: s } = this.muya, { text: r } = e, { labels: i } = this, a = /thematicbreak\.content|paragraph\.content|atxheading\.content/.test(
      e.blockName
    );
    return Yn(r, { hasBeginRules: a, labels: i, options: s, highlights: n });
  }
  patch(e, n, s = []) {
    this.collectReferenceDefinitions();
    const { domNode: r } = e;
    e.isParent() && Qr.error("Patch can only handle content block");
    const i = this.tokenizer(e, s), a = this.renderer.output(
      i,
      e,
      n && n.block === e ? n : {}
    );
    r.innerHTML = a;
  }
  collectReferenceDefinitions() {
    const e = this.muya.editor.jsonState.getState(), n = /* @__PURE__ */ new Map(), s = (r) => {
      if (Array.isArray(r) && r.length)
        for (const i of r)
          if (i.name === "paragraph") {
            const { label: a, info: o } = this.getLabelInfo(i);
            a && o && n.set(a, o);
          } else
            i.children && s(i.children);
    };
    s(e), this.labels = n;
  }
  getLabelInfo(e) {
    const { text: n } = e, s = Xn.reference_definition.exec(n);
    let r = null, i = null;
    return s && (r = (s[2] + s[3]).toLowerCase(), i = {
      href: s[6],
      title: s[10] || ""
    }), { label: r, info: i };
  }
}
const { toString: ei } = Object.prototype;
function ti(t) {
  return ei.call(t) === "[object RegExp]";
}
const sn = {
  global: "g",
  ignoreCase: "i",
  multiline: "m",
  dotAll: "s",
  sticky: "y",
  unicode: "u"
};
function ni(t, e = {}) {
  if (!ti(t))
    throw new TypeError("Expected a RegExp instance");
  const n = Object.keys(sn).map((r) => (typeof e[r] == "boolean" ? e[r] : t[r]) ? sn[r] : "").join(""), s = new RegExp(e.source || t.source, n);
  return s.lastIndex = typeof e.lastIndex == "number" ? e.lastIndex : t.lastIndex, s;
}
function si(t, e) {
  let n;
  const s = [], r = ni(t, { lastIndex: 0 }), i = r.global;
  for (; (n = r.exec(e)) && (s.push({
    match: n[0],
    subMatches: n.slice(1),
    index: n.index
  }), !!i); )
    ;
  return s;
}
const ri = (t, e, n) => {
  const { isCaseSensitive: s, isWholeWord: r, isRegexp: i } = n, a = /[\[\]\\^$.\|\?\*\+\(\)\/]{1}/g;
  let o = null, h = e, f = "g";
  s || (f += "i"), i || (h = e.replace(a, (c) => c === "\\" ? "\\\\" : `\\${c}`)), r && (h = `\\b${h}\\b`);
  try {
    return o = new RegExp(h, f), si(o, t);
  } catch {
    return [];
  }
}, ii = (t, e) => {
  const n = e.match(new RegExp("(?<!\\\\)\\$\\d", "g"));
  if (Array.isArray(n) && n.length)
    for (const s of n) {
      const r = parseInt(s.replace(/^\$/, ""));
      r === 0 ? e = e.replace(s, t.match) : r > 0 && r <= t.subMatches.length && (e = e.replace(s, t.subMatches[r - 1]));
    }
  return e;
};
class ai {
  constructor(e) {
    j(this, "value", "");
    j(this, "matches", []);
    j(this, "index", -1);
    this.muya = e;
  }
  get scrollPage() {
    return this.muya.editor.scrollPage;
  }
  updateMatches(e = !1) {
    var o;
    const { matches: n, index: s } = this;
    let r;
    const i = n.length, a = /* @__PURE__ */ new Map();
    for (r = 0; r < i; r++) {
      const { block: h, start: f, end: c } = n[r], u = { start: f, end: c, active: r === s }, d = a.get(h);
      a.has(h) && Array.isArray(d) ? (d.push(u), a.set(h, d)) : a.set(h, [u]);
    }
    for (const [h, f] of a.entries()) {
      const c = f.some((l) => l.active);
      h.update(void 0, e ? [] : f), (o = h.parent) != null && o.active && !c && h.blurHandler(), c && !e && h.focusHandler();
    }
  }
  innerReplace(e, n) {
    if (!e.length)
      return;
    let s = "", r = e[0].block, i = 0;
    for (const a of e) {
      const { start: o, end: h, block: f } = a;
      r !== f && (r && (r.text = s + r.text.substring(i)), s = "", i = 0, r = f), s += f.text.substring(i, o), s += n, i = h;
    }
    r.text = s + r.text.substring(i);
  }
  replace(e, n = { isSingle: !0, isRegexp: !1 }) {
    const { isSingle: s, isRegexp: r, ...i } = n, a = Object.assign({}, Kt, i), { matches: o, value: h, index: f } = this;
    if (o.length) {
      r && (e = ii(o[f], e)), s ? this.innerReplace([o[f]], e) : this.innerReplace(o, e);
      const c = f < o.length - 1 ? f : f - 1;
      this.search(h, {
        ...a,
        highlightIndex: s ? c : -1
      });
    }
    return this;
  }
  /**
   * Find preview or next value, and highlight it.
   * @param {string} action : previous or next.
   */
  find(e) {
    const { matches: n } = this;
    let { index: s } = this;
    const r = n.length;
    return r ? (s = e === "next" ? s + 1 : s - 1, s < 0 && (s = r - 1), s >= r && (s = 0), this.index = s, this.updateMatches(!0), this.updateMatches(), this) : this;
  }
  /**
   * Search value in current document.
   * @param {string} value
   * @param {object} opts
   */
  search(e, n = {}) {
    const s = [], r = Object.assign({}, Kt, n), { highlightIndex: i } = r;
    let a = -1;
    return this.updateMatches(!0), e && this.scrollPage.depthFirstTraverse((o) => {
      if (o.isContent()) {
        const { text: h } = o;
        if (h && typeof h == "string") {
          const f = ri(h, e, r);
          s.push(
            ...f.map(({ index: c, match: l, subMatches: u }) => ({
              block: o,
              start: c,
              end: c + l.length,
              match: l,
              subMatches: u
            }))
          );
        }
      }
    }), i !== -1 ? a = i : s.length && (a = 0), Object.assign(this, { value: e, matches: s, index: a }), this.updateMatches(), this;
  }
}
const oi = dt("jsonState:");
class li {
  constructor(e, n) {
    j(this, "operationCache", []);
    j(this, "isGoing", !1);
    j(this, "state", []);
    this.muya = e, this.setContent(n);
  }
  static invert(e) {
    return Te.type.invert(e);
  }
  static compose(e, n) {
    return Te.type.compose(e, n);
  }
  static transform(e, n, s) {
    return Te.type.transform(e, n, s);
  }
  apply(e) {
    this.state = Te.type.apply(
      this.state,
      e
    );
  }
  setContent(e) {
    typeof e == "object" ? this.setState(e) : this.setMarkdown(e);
  }
  setState(e) {
    this.state = e;
  }
  setMarkdown(e) {
    const {
      footnote: n,
      isGitlabCompatibilityEnabled: s,
      trimUnnecessaryCodeBlockEmptyLines: r,
      frontMatter: i,
      math: a
    } = this.muya.options;
    this.state = new In({
      footnote: n,
      isGitlabCompatibilityEnabled: s,
      trimUnnecessaryCodeBlockEmptyLines: r,
      frontMatter: i,
      math: a
    }).generate(e);
  }
  insertOperation(e, n) {
    const s = Te.insertOp(e, n);
    this.operationCache.push(s), this._emitStateChange();
  }
  removeOperation(e) {
    const n = Te.removeOp(e);
    this.operationCache.push(n), this._emitStateChange();
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  editOperation(e, n) {
    const s = Te.editOp(e, "text-unicode", n);
    this.operationCache.push(s), this._emitStateChange();
  }
  replaceOperation(e, n, s) {
    const r = Te.replaceOp(e, n, s);
    this.operationCache.push(r), this._emitStateChange();
  }
  _emitStateChange() {
    this.isGoing || (this.isGoing = !0, requestAnimationFrame(() => {
      const e = this.operationCache.reduce(Te.type.compose);
      this.apply(e);
      const n = this.getState();
      this.muya.eventCenter.emit("json-change", {
        op: e,
        source: "user",
        doc: n
      }), this.operationCache = [], this.isGoing = !1;
    }));
  }
  dispatch(e, n = "user") {
    this.apply(e);
    const s = this.getState();
    oi.log(JSON.stringify(e)), this.muya.eventCenter.emit("json-change", {
      op: e,
      source: n,
      doc: s
    });
  }
  getState() {
    return ht(this.state);
  }
  getMarkdown() {
    const e = this.getState();
    return new dn().generate(e);
  }
}
const ci = dt("editor:");
class hi {
  constructor(e) {
    j(this, "jsonState");
    j(this, "inlineRenderer");
    j(this, "selection");
    j(this, "searchModule");
    j(this, "clipboard");
    j(this, "history");
    j(this, "scrollPage", null);
    j(this, "_activeContentBlock", null);
    this.muya = e;
    const n = e.options.json || e.options.markdown || "";
    this.jsonState = new li(e, n), this.inlineRenderer = new Zr(e), this.selection = new Jn(e), this.searchModule = new ai(e), this.clipboard = ur.create(e), this.history = new gr(e);
  }
  get activeContentBlock() {
    return this._activeContentBlock;
  }
  set activeContentBlock(e) {
    const { activeContentBlock: n } = this;
    e !== n && (this._activeContentBlock = e, n && n.blurHandler(), e && e.focusHandler());
  }
  init() {
    const { muya: e } = this, n = this.jsonState.getState();
    this.scrollPage = Pe.create(e, n), this._dispatchEvents(), this.focus(), this.exportAPI();
  }
  _dispatchEvents() {
    const { eventCenter: e } = this.muya, { domNode: n } = this.muya, s = (r) => {
      var o;
      const { anchorBlock: i, isSelectionInSameBlock: a } = this.selection.getSelection() ?? {};
      if (r.type === "click" && Qn && r.target.textContent === "" && r.target.classList.contains("mu-language-input")) {
        (o = r.target[At]) == null || o.setCursor(
          0,
          0,
          !0
        );
        return;
      }
      if (!a || !i) {
        this.activeContentBlock = null;
        return;
      }
      switch (this.activeContentBlock = i, r.type) {
        case "click": {
          i.clickHandler(r);
          break;
        }
        case "input": {
          i.inputHandler(r);
          break;
        }
        case "keydown": {
          i.keydownHandler(r);
          break;
        }
        case "keyup": {
          i.keyupHandler(r);
          break;
        }
        case "compositionend":
        case "compositionstart": {
          i.composeHandler(r);
          break;
        }
      }
    };
    e.attachDOMEvent(n, "click", s), e.attachDOMEvent(n, "input", s), e.attachDOMEvent(n, "keydown", s), e.attachDOMEvent(n, "keyup", s), e.attachDOMEvent(n, "compositionend", s), e.attachDOMEvent(n, "compositionstart", s);
  }
  focus() {
    const e = this.scrollPage.firstContentInDescendant(), n = {
      path: e.path,
      block: e,
      anchor: {
        offset: 0
      },
      focus: {
        offset: 0
      }
    }, s = e.blockName === "paragraph.content" && e.checkNeedRender(n);
    e.setCursor(0, 0, s);
  }
  updateContents(e, n, s) {
    const { muya: r } = this;
    if (this.jsonState.dispatch(e, s), e === null)
      return;
    function i(h, f) {
      const c = [];
      let l = 0;
      for (; l < f.length; l++) {
        const u = f[l];
        if (Array.isArray(u))
          break;
        typeof u != "object" && (c.push(h), h = h == null ? void 0 : h.queryBlock([u]));
      }
      for (let u = f.length - 1; u >= l; u--)
        h = i(h, f[u]);
      for (--l; l >= 0; l--) {
        const u = f[l];
        if (typeof u != "object") {
          const d = c.pop();
          h === (d == null ? void 0 : d.queryBlock([u])) ? h = d : h === void 0 ? (typeof u == "number" && d.find(u).remove("api"), h = d) : (typeof u == "number" && d.find(u).replaceWith(h, "api"), h = d);
        } else
          Zn(u) && (h = void 0);
      }
      return h;
    }
    const a = i(this.scrollPage, e);
    function o(h, f) {
      let c = h, l = 0, u = 0;
      const d = { root: h };
      let g = d, k = "root";
      function E() {
        for (; u < l; u++) {
          const y = f[u];
          typeof y != "object" && (g = k === "root" ? g[k] : g.queryBlock([k]), k = y);
        }
      }
      for (; l < f.length; l++) {
        const y = f[l];
        if (Array.isArray(y)) {
          const A = o(c, y);
          A !== c && A !== void 0 && (E(), c = g[k] = A);
        } else if (typeof y == "object") {
          if (y.i !== void 0) {
            E();
            const A = g.find(k);
            if (typeof k == "number") {
              const _ = Pe.loadBlock(y.i.name).create(r, y.i);
              g.insertBefore(_, A, "api"), c = _;
            } else
              switch (k) {
                case "checked": {
                  A.update(y.i, "api");
                  break;
                }
                case "meta":
                  break;
                default:
                  ci.warn(`Unknown operation path ${k}`);
                  break;
              }
          }
          y.es && (E(), c.blockName === "table.cell" ? c.align = st.type.apply(c.align, y.es) : c.blockName === "language-input" ? (c._text = st.type.apply(c.text, y.es), c.parent.meta.lang = c.text, c.update()) : c.blockName === "code-block" ? c.meta.type = st.type.apply(c.meta.type, y.es) : (c._text = st.type.apply(c.text, y.es), c.update()));
        } else
          c = c != null ? c.queryBlock([y]) : void 0;
      }
      return d.root;
    }
    if (o(a, e), n) {
      const { anchorPath: h, anchor: f, focus: c, isSelectionInSameBlock: l } = n, u = this.scrollPage.queryBlock(h), d = Math.min(f.offset, c.offset), g = Math.max(f.offset, c.offset);
      l && u && u.isContent() ? u.setCursor(d, g, !0) : this.selection.setSelection(n);
    }
  }
  setContent(e, n = !1) {
    this.jsonState.setContent(e);
    const s = this.jsonState.getState();
    this.scrollPage.updateState(s), this.history.clear(), n && this.focus();
  }
  exportAPI() {
    const e = {
      jsonState: ["getState", "getMarkdown"],
      history: ["undo", "redo"],
      searchModule: ["search", "find", "replace"],
      selection: ["selectAll"]
    };
    Object.keys(e).forEach((n) => {
      for (const s of e[n])
        this[s] = this[n][s].bind(this[n]);
    });
  }
}
const ui = function* () {
  let t = 0;
  for (; ; )
    yield t++;
}, fi = "event-", di = ui();
class pi {
  constructor() {
    j(this, "events", []);
    j(this, "listeners", {});
  }
  get eventId() {
    return `${fi}${di.next().value}`;
  }
  /**
   * [attachDOMEvent] bind event listener to target, and return a unique ID,
   * this ID
   */
  attachDOMEvent(e, n, s, r) {
    if (this.checkHasBind(e, n, s, r))
      return "";
    const { eventId: i } = this;
    return e.addEventListener(n, s, r), this.events.push({
      eventId: i,
      target: e,
      event: n,
      listener: s,
      capture: r
    }), i;
  }
  /**
   * [detachDOMEvent removeEventListener]
   * @param  {[type]} eventId [unique eventId]
   */
  detachDOMEvent(e) {
    if (!e)
      return !1;
    const n = this.events.find((s) => s.eventId === e);
    if (n) {
      const { target: s, event: r, listener: i, capture: a } = n;
      s.removeEventListener(r, i, a);
      const o = this.events.findIndex((h) => h.eventId === e);
      this.events.splice(o, 1);
    }
  }
  /**
   * [detachAllDomEvents remove all the DOM events handler]
   */
  detachAllDomEvents() {
    for (const e of this.events) {
      const { target: n, event: s, listener: r, capture: i } = e;
      n.removeEventListener(s, r, i);
    }
    this.events = [];
  }
  /**
   * inner method for on and once
   */
  subscribe(e, n, s = !1) {
    const r = this.listeners[e], i = { listener: n, once: s };
    r && Array.isArray(r) ? r.push(i) : this.listeners[e] = [i];
  }
  /**
   * [on] on custom event
   */
  on(e, n) {
    this.subscribe(e, n);
  }
  /**
   * [off] off custom event
   */
  off(e, n) {
    const s = this.listeners[e];
    if (Array.isArray(s) && s.find((r) => r.listener === n)) {
      const r = s.findIndex((i) => i.listener === n);
      s.splice(r, 1);
    }
  }
  /**
   * [once] subscribe event and listen once
   */
  once(e, n) {
    this.subscribe(e, n, !0);
  }
  /**
   * emit custom event
   */
  emit(e, ...n) {
    const s = this.listeners[e];
    s && Array.isArray(s) && s.forEach(({ listener: r, once: i }) => {
      r(...n), i && this.off(e, r);
    });
  }
  // Determine whether the event has been bind
  checkHasBind(e, n, s, r) {
    for (const { target: i, event: a, listener: o, capture: h } of this.events)
      if (i === e && a === n && o === s && h === r)
        return !0;
    return !1;
  }
}
class gi {
  constructor(e, n) {
    j(this, "lang");
    j(this, "resources");
    this.muya = e;
    const { name: s, resource: r } = n || us;
    this.lang = s, this.resources = {
      [s]: r
    };
  }
  t(e) {
    var r;
    const { lang: n, resources: s } = this;
    return ((r = s == null ? void 0 : s[n]) == null ? void 0 : r[e]) || s.en[e] || e;
  }
  locale(e) {
    const { name: n, resource: s } = e;
    this.lang = n, this.resources = {
      ...this.resources,
      [n]: s
    };
  }
}
class mi {
  constructor(e) {
    j(this, "shownFloat", /* @__PURE__ */ new Set());
    j(this, "shownButton", /* @__PURE__ */ new Set());
    this.muya = e, this.listen();
  }
  listen() {
    this.muya.eventCenter.subscribe("muya-float", (e, n) => {
      n ? this.shownFloat.add(e) : this.shownFloat.delete(e);
    }), this.muya.eventCenter.subscribe("muya-float-button", (e, n) => {
      n ? this.shownButton.add(e) : this.shownButton.delete(e);
    });
  }
  hideAllFloatTools() {
    for (const e of this.shownFloat)
      e.hide();
    for (const e of this.shownButton)
      e.hide();
  }
}
const ut = class ut {
  constructor(e, n = {}) {
    j(this, "version", typeof window.MUYA_VERSION > "u" ? "dev" : window.MUYA_VERSION);
    j(this, "options");
    j(this, "eventCenter");
    j(this, "domNode");
    j(this, "editor");
    j(this, "ui");
    j(this, "i18n");
    j(this, "on");
    j(this, "off");
    j(this, "once");
    j(this, "getState");
    j(this, "getMarkdown");
    j(this, "setContent");
    j(this, "undo");
    j(this, "redo");
    j(this, "search");
    j(this, "find");
    j(this, "replace");
    j(this, "focus");
    j(this, "selectAll");
    this.options = Object.assign({}, es, n), this.eventCenter = new pi(), this.domNode = yi(e, n), this.domNode[At] = this, this.editor = new hi(this), this.ui = new mi(this), this.i18n = new gi(this, this.options.locale);
  }
  static use(e, n = {}) {
    this.plugins.push({
      plugin: e,
      options: n
    });
  }
  init() {
    if (this.editor.init(), this.exportAPI(), ut.plugins.length)
      for (const { plugin: e, options: n } of ut.plugins)
        this.ui[e.pluginName] = new e(this, n);
  }
  locale(e) {
    return this.i18n.locale(e);
  }
  exportAPI() {
    const e = {
      eventCenter: ["on", "off", "once"],
      editor: [
        "getState",
        "getMarkdown",
        "undo",
        "redo",
        "search",
        "find",
        "replace",
        "setContent",
        "focus",
        "selectAll"
      ]
    };
    Object.keys(e).forEach((n) => {
      for (const s of e[n])
        this[s] = this[n][s].bind(this[n]);
    });
  }
  destroy() {
    this.eventCenter.detachAllDomEvents(), this.domNode[At] = null, this.domNode.remove && this.domNode.remove(), this.ui && this.ui.hideAllFloatTools();
  }
};
j(ut, "plugins", []);
let rn = ut;
function yi(t, e) {
  const { spellcheckEnabled: n, hideQuickInsertHint: s } = e, r = document.createElement("div"), i = t.attributes;
  return Array.from(i).forEach((a) => {
    r.setAttribute(a.name, a.value);
  }), s || r.classList.add(b.MU_SHOW_QUICK_INSERT_HINT), r.classList.add(b.MU_EDITOR), r.setAttribute("contenteditable", "true"), r.setAttribute("autocorrect", "false"), r.setAttribute("autocomplete", "off"), r.setAttribute("spellcheck", n ? "true" : "false"), t.replaceWith(r), r;
}
export {
  rn as default
};
