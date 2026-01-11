var Ie = Object.defineProperty;
var Le = (l, e, t) => e in l ? Ie(l, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : l[e] = t;
var d = (l, e, t) => (Le(l, typeof e != "symbol" ? e + "" : e, t), t), Pe = (l, e, t) => {
  if (!e.has(l))
    throw TypeError("Cannot " + t);
};
var H = (l, e, t) => {
  if (e.has(l))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(l) : e.set(l, t);
};
var P = (l, e, t) => (Pe(l, e, "access private method"), t);
import { k as Ce, F as ve, G as te } from "./emojis.bYhmvyOg.js";
function Q() {
  return {
    async: !1,
    breaks: !1,
    extensions: null,
    gfm: !0,
    hooks: null,
    pedantic: !1,
    renderer: null,
    silent: !1,
    tokenizer: null,
    walkTokens: null
  };
}
let R = Q();
function ge(l) {
  R = l;
}
const ke = /[&<>"']/, Me = new RegExp(ke.source, "g"), de = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, Be = new RegExp(de.source, "g"), Oe = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
}, ne = (l) => Oe[l];
function x(l, e) {
  if (e) {
    if (ke.test(l))
      return l.replace(Me, ne);
  } else if (de.test(l))
    return l.replace(Be, ne);
  return l;
}
const je = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;
function Ze(l) {
  return l.replace(je, (e, t) => (t = t.toLowerCase(), t === "colon" ? ":" : t.charAt(0) === "#" ? t.charAt(1) === "x" ? String.fromCharCode(parseInt(t.substring(2), 16)) : String.fromCharCode(+t.substring(1)) : ""));
}
const qe = /(^|[^\[])\^/g;
function k(l, e) {
  let t = typeof l == "string" ? l : l.source;
  e = e || "";
  const n = {
    replace: (i, r) => {
      let s = typeof r == "string" ? r : r.source;
      return s = s.replace(qe, "$1"), t = t.replace(i, s), n;
    },
    getRegex: () => new RegExp(t, e)
  };
  return n;
}
function se(l) {
  try {
    l = encodeURI(l).replace(/%25/g, "%");
  } catch {
    return null;
  }
  return l;
}
const _ = { exec: () => null };
function ie(l, e) {
  const t = l.replace(/\|/g, (r, s, o) => {
    let a = !1, u = s;
    for (; --u >= 0 && o[u] === "\\"; )
      a = !a;
    return a ? "|" : " |";
  }), n = t.split(/ \|/);
  let i = 0;
  if (n[0].trim() || n.shift(), n.length > 0 && !n[n.length - 1].trim() && n.pop(), e)
    if (n.length > e)
      n.splice(e);
    else
      for (; n.length < e; )
        n.push("");
  for (; i < n.length; i++)
    n[i] = n[i].trim().replace(/\\\|/g, "|");
  return n;
}
function C(l, e, t) {
  const n = l.length;
  if (n === 0)
    return "";
  let i = 0;
  for (; i < n; ) {
    const r = l.charAt(n - i - 1);
    if (r === e && !t)
      i++;
    else if (r !== e && t)
      i++;
    else
      break;
  }
  return l.slice(0, n - i);
}
function De(l, e) {
  if (l.indexOf(e[1]) === -1)
    return -1;
  let t = 0;
  for (let n = 0; n < l.length; n++)
    if (l[n] === "\\")
      n++;
    else if (l[n] === e[0])
      t++;
    else if (l[n] === e[1] && (t--, t < 0))
      return n;
  return -1;
}
function re(l, e, t, n) {
  const i = e.href, r = e.title ? x(e.title) : null, s = l[1].replace(/\\([\[\]])/g, "$1");
  if (l[0].charAt(0) !== "!") {
    n.state.inLink = !0;
    const o = {
      type: "link",
      raw: t,
      href: i,
      title: r,
      text: s,
      tokens: n.inlineTokens(s)
    };
    return n.state.inLink = !1, o;
  }
  return {
    type: "image",
    raw: t,
    href: i,
    title: r,
    text: x(s)
  };
}
function He(l, e) {
  const t = l.match(/^(\s+)(?:```)/);
  if (t === null)
    return e;
  const n = t[1];
  return e.split(`
`).map((i) => {
    const r = i.match(/^\s+/);
    if (r === null)
      return i;
    const [s] = r;
    return s.length >= n.length ? i.slice(n.length) : i;
  }).join(`
`);
}
class M {
  // set by the lexer
  constructor(e) {
    d(this, "options");
    d(this, "rules");
    // set by the lexer
    d(this, "lexer");
    this.options = e || R;
  }
  space(e) {
    const t = this.rules.block.newline.exec(e);
    if (t && t[0].length > 0)
      return {
        type: "space",
        raw: t[0]
      };
  }
  code(e) {
    const t = this.rules.block.code.exec(e);
    if (t) {
      const n = t[0].replace(/^ {1,4}/gm, "");
      return {
        type: "code",
        raw: t[0],
        codeBlockStyle: "indented",
        text: this.options.pedantic ? n : C(n, `
`)
      };
    }
  }
  fences(e) {
    const t = this.rules.block.fences.exec(e);
    if (t) {
      const n = t[0], i = He(n, t[3] || "");
      return {
        type: "code",
        raw: n,
        lang: t[2] ? t[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : t[2],
        text: i
      };
    }
  }
  heading(e) {
    const t = this.rules.block.heading.exec(e);
    if (t) {
      let n = t[2].trim();
      if (/#$/.test(n)) {
        const i = C(n, "#");
        (this.options.pedantic || !i || / $/.test(i)) && (n = i.trim());
      }
      return {
        type: "heading",
        raw: t[0],
        depth: t[1].length,
        text: n,
        tokens: this.lexer.inline(n)
      };
    }
  }
  hr(e) {
    const t = this.rules.block.hr.exec(e);
    if (t)
      return {
        type: "hr",
        raw: t[0]
      };
  }
  blockquote(e) {
    const t = this.rules.block.blockquote.exec(e);
    if (t) {
      const n = C(t[0].replace(/^ *>[ \t]?/gm, ""), `
`), i = this.lexer.state.top;
      this.lexer.state.top = !0;
      const r = this.lexer.blockTokens(n);
      return this.lexer.state.top = i, {
        type: "blockquote",
        raw: t[0],
        tokens: r,
        text: n
      };
    }
  }
  list(e) {
    let t = this.rules.block.list.exec(e);
    if (t) {
      let n = t[1].trim();
      const i = n.length > 1, r = {
        type: "list",
        raw: "",
        ordered: i,
        start: i ? +n.slice(0, -1) : "",
        loose: !1,
        items: []
      };
      n = i ? `\\d{1,9}\\${n.slice(-1)}` : `\\${n}`, this.options.pedantic && (n = i ? n : "[*+-]");
      const s = new RegExp(`^( {0,3}${n})((?:[	 ][^\\n]*)?(?:\\n|$))`);
      let o = "", a = "", u = !1;
      for (; e; ) {
        let c = !1;
        if (!(t = s.exec(e)) || this.rules.block.hr.test(e))
          break;
        o = t[0], e = e.substring(o.length);
        let p = t[2].split(`
`, 1)[0].replace(/^\t+/, (q) => " ".repeat(3 * q.length)), h = e.split(`
`, 1)[0], f = 0;
        this.options.pedantic ? (f = 2, a = p.trimStart()) : (f = t[2].search(/[^ ]/), f = f > 4 ? 1 : f, a = p.slice(f), f += t[1].length);
        let y = !1;
        if (!p && /^ *$/.test(h) && (o += h + `
`, e = e.substring(h.length + 1), c = !0), !c) {
          const q = new RegExp(`^ {0,${Math.min(3, f - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`), J = new RegExp(`^ {0,${Math.min(3, f - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`), V = new RegExp(`^ {0,${Math.min(3, f - 1)}}(?:\`\`\`|~~~)`), ee = new RegExp(`^ {0,${Math.min(3, f - 1)}}#`);
          for (; e; ) {
            const D = e.split(`
`, 1)[0];
            if (h = D, this.options.pedantic && (h = h.replace(/^ {1,4}(?=( {4})*[^ ])/g, "  ")), V.test(h) || ee.test(h) || q.test(h) || J.test(e))
              break;
            if (h.search(/[^ ]/) >= f || !h.trim())
              a += `
` + h.slice(f);
            else {
              if (y || p.search(/[^ ]/) >= 4 || V.test(p) || ee.test(p) || J.test(p))
                break;
              a += `
` + h;
            }
            !y && !h.trim() && (y = !0), o += D + `
`, e = e.substring(D.length + 1), p = h.slice(f);
          }
        }
        r.loose || (u ? r.loose = !0 : /\n *\n *$/.test(o) && (u = !0));
        let m = null, $;
        this.options.gfm && (m = /^\[[ xX]\] /.exec(a), m && ($ = m[0] !== "[ ] ", a = a.replace(/^\[[ xX]\] +/, ""))), r.items.push({
          type: "list_item",
          raw: o,
          task: !!m,
          checked: $,
          loose: !1,
          text: a,
          tokens: []
        }), r.raw += o;
      }
      r.items[r.items.length - 1].raw = o.trimEnd(), r.items[r.items.length - 1].text = a.trimEnd(), r.raw = r.raw.trimEnd();
      for (let c = 0; c < r.items.length; c++)
        if (this.lexer.state.top = !1, r.items[c].tokens = this.lexer.blockTokens(r.items[c].text, []), !r.loose) {
          const p = r.items[c].tokens.filter((f) => f.type === "space"), h = p.length > 0 && p.some((f) => /\n.*\n/.test(f.raw));
          r.loose = h;
        }
      if (r.loose)
        for (let c = 0; c < r.items.length; c++)
          r.items[c].loose = !0;
      return r;
    }
  }
  html(e) {
    const t = this.rules.block.html.exec(e);
    if (t)
      return {
        type: "html",
        block: !0,
        raw: t[0],
        pre: t[1] === "pre" || t[1] === "script" || t[1] === "style",
        text: t[0]
      };
  }
  def(e) {
    const t = this.rules.block.def.exec(e);
    if (t) {
      const n = t[1].toLowerCase().replace(/\s+/g, " "), i = t[2] ? t[2].replace(/^<(.*)>$/, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "", r = t[3] ? t[3].substring(1, t[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : t[3];
      return {
        type: "def",
        tag: n,
        raw: t[0],
        href: i,
        title: r
      };
    }
  }
  table(e) {
    const t = this.rules.block.table.exec(e);
    if (!t || !/[:|]/.test(t[2]))
      return;
    const n = ie(t[1]), i = t[2].replace(/^\||\| *$/g, "").split("|"), r = t[3] && t[3].trim() ? t[3].replace(/\n[ \t]*$/, "").split(`
`) : [], s = {
      type: "table",
      raw: t[0],
      header: [],
      align: [],
      rows: []
    };
    if (n.length === i.length) {
      for (const o of i)
        /^ *-+: *$/.test(o) ? s.align.push("right") : /^ *:-+: *$/.test(o) ? s.align.push("center") : /^ *:-+ *$/.test(o) ? s.align.push("left") : s.align.push(null);
      for (const o of n)
        s.header.push({
          text: o,
          tokens: this.lexer.inline(o)
        });
      for (const o of r)
        s.rows.push(ie(o, s.header.length).map((a) => ({
          text: a,
          tokens: this.lexer.inline(a)
        })));
      return s;
    }
  }
  lheading(e) {
    const t = this.rules.block.lheading.exec(e);
    if (t)
      return {
        type: "heading",
        raw: t[0],
        depth: t[2].charAt(0) === "=" ? 1 : 2,
        text: t[1],
        tokens: this.lexer.inline(t[1])
      };
  }
  paragraph(e) {
    const t = this.rules.block.paragraph.exec(e);
    if (t) {
      const n = t[1].charAt(t[1].length - 1) === `
` ? t[1].slice(0, -1) : t[1];
      return {
        type: "paragraph",
        raw: t[0],
        text: n,
        tokens: this.lexer.inline(n)
      };
    }
  }
  text(e) {
    const t = this.rules.block.text.exec(e);
    if (t)
      return {
        type: "text",
        raw: t[0],
        text: t[0],
        tokens: this.lexer.inline(t[0])
      };
  }
  escape(e) {
    const t = this.rules.inline.escape.exec(e);
    if (t)
      return {
        type: "escape",
        raw: t[0],
        text: x(t[1])
      };
  }
  tag(e) {
    const t = this.rules.inline.tag.exec(e);
    if (t)
      return !this.lexer.state.inLink && /^<a /i.test(t[0]) ? this.lexer.state.inLink = !0 : this.lexer.state.inLink && /^<\/a>/i.test(t[0]) && (this.lexer.state.inLink = !1), !this.lexer.state.inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(t[0]) ? this.lexer.state.inRawBlock = !0 : this.lexer.state.inRawBlock && /^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0]) && (this.lexer.state.inRawBlock = !1), {
        type: "html",
        raw: t[0],
        inLink: this.lexer.state.inLink,
        inRawBlock: this.lexer.state.inRawBlock,
        block: !1,
        text: t[0]
      };
  }
  link(e) {
    const t = this.rules.inline.link.exec(e);
    if (t) {
      const n = t[2].trim();
      if (!this.options.pedantic && /^</.test(n)) {
        if (!/>$/.test(n))
          return;
        const s = C(n.slice(0, -1), "\\");
        if ((n.length - s.length) % 2 === 0)
          return;
      } else {
        const s = De(t[2], "()");
        if (s > -1) {
          const a = (t[0].indexOf("!") === 0 ? 5 : 4) + t[1].length + s;
          t[2] = t[2].substring(0, s), t[0] = t[0].substring(0, a).trim(), t[3] = "";
        }
      }
      let i = t[2], r = "";
      if (this.options.pedantic) {
        const s = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(i);
        s && (i = s[1], r = s[3]);
      } else
        r = t[3] ? t[3].slice(1, -1) : "";
      return i = i.trim(), /^</.test(i) && (this.options.pedantic && !/>$/.test(n) ? i = i.slice(1) : i = i.slice(1, -1)), re(t, {
        href: i && i.replace(this.rules.inline.anyPunctuation, "$1"),
        title: r && r.replace(this.rules.inline.anyPunctuation, "$1")
      }, t[0], this.lexer);
    }
  }
  reflink(e, t) {
    let n;
    if ((n = this.rules.inline.reflink.exec(e)) || (n = this.rules.inline.nolink.exec(e))) {
      const i = (n[2] || n[1]).replace(/\s+/g, " "), r = t[i.toLowerCase()];
      if (!r) {
        const s = n[0].charAt(0);
        return {
          type: "text",
          raw: s,
          text: s
        };
      }
      return re(n, r, n[0], this.lexer);
    }
  }
  emStrong(e, t, n = "") {
    let i = this.rules.inline.emStrongLDelim.exec(e);
    if (!i || i[3] && n.match(/[\p{L}\p{N}]/u))
      return;
    if (!(i[1] || i[2] || "") || !n || this.rules.inline.punctuation.exec(n)) {
      const s = [...i[0]].length - 1;
      let o, a, u = s, c = 0;
      const p = i[0][0] === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
      for (p.lastIndex = 0, t = t.slice(-1 * e.length + s); (i = p.exec(t)) != null; ) {
        if (o = i[1] || i[2] || i[3] || i[4] || i[5] || i[6], !o)
          continue;
        if (a = [...o].length, i[3] || i[4]) {
          u += a;
          continue;
        } else if ((i[5] || i[6]) && s % 3 && !((s + a) % 3)) {
          c += a;
          continue;
        }
        if (u -= a, u > 0)
          continue;
        a = Math.min(a, a + u + c);
        const h = [...i[0]][0].length, f = e.slice(0, s + i.index + h + a);
        if (Math.min(s, a) % 2) {
          const m = f.slice(1, -1);
          return {
            type: "em",
            raw: f,
            text: m,
            tokens: this.lexer.inlineTokens(m)
          };
        }
        const y = f.slice(2, -2);
        return {
          type: "strong",
          raw: f,
          text: y,
          tokens: this.lexer.inlineTokens(y)
        };
      }
    }
  }
  codespan(e) {
    const t = this.rules.inline.code.exec(e);
    if (t) {
      let n = t[2].replace(/\n/g, " ");
      const i = /[^ ]/.test(n), r = /^ /.test(n) && / $/.test(n);
      return i && r && (n = n.substring(1, n.length - 1)), n = x(n, !0), {
        type: "codespan",
        raw: t[0],
        text: n
      };
    }
  }
  br(e) {
    const t = this.rules.inline.br.exec(e);
    if (t)
      return {
        type: "br",
        raw: t[0]
      };
  }
  del(e) {
    const t = this.rules.inline.del.exec(e);
    if (t)
      return {
        type: "del",
        raw: t[0],
        text: t[2],
        tokens: this.lexer.inlineTokens(t[2])
      };
  }
  autolink(e) {
    const t = this.rules.inline.autolink.exec(e);
    if (t) {
      let n, i;
      return t[2] === "@" ? (n = x(t[1]), i = "mailto:" + n) : (n = x(t[1]), i = n), {
        type: "link",
        raw: t[0],
        text: n,
        href: i,
        tokens: [
          {
            type: "text",
            raw: n,
            text: n
          }
        ]
      };
    }
  }
  url(e) {
    var n;
    let t;
    if (t = this.rules.inline.url.exec(e)) {
      let i, r;
      if (t[2] === "@")
        i = x(t[0]), r = "mailto:" + i;
      else {
        let s;
        do
          s = t[0], t[0] = ((n = this.rules.inline._backpedal.exec(t[0])) == null ? void 0 : n[0]) ?? "";
        while (s !== t[0]);
        i = x(t[0]), t[1] === "www." ? r = "http://" + t[0] : r = t[0];
      }
      return {
        type: "link",
        raw: t[0],
        text: i,
        href: r,
        tokens: [
          {
            type: "text",
            raw: i,
            text: i
          }
        ]
      };
    }
  }
  inlineText(e) {
    const t = this.rules.inline.text.exec(e);
    if (t) {
      let n;
      return this.lexer.state.inRawBlock ? n = t[0] : n = x(t[0]), {
        type: "text",
        raw: t[0],
        text: n
      };
    }
  }
}
const Ge = /^(?: *(?:\n|$))+/, Ne = /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/, Qe = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, I = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, Ue = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, xe = /(?:[*+-]|\d{1,9}[.)])/, me = k(/^(?!bull )((?:.|\n(?!\s*?\n|bull ))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g, xe).getRegex(), U = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, Fe = /^[^\n]+/, F = /(?!\s*\])(?:\\.|[^\[\]\\])+/, Ke = k(/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/).replace("label", F).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), Xe = k(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, xe).getRegex(), Z = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", K = /<!--(?!-?>)[\s\S]*?(?:-->|$)/, We = k("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))", "i").replace("comment", K).replace("tag", Z).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), be = k(U).replace("hr", I).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Z).getRegex(), Ye = k(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", be).getRegex(), X = {
  blockquote: Ye,
  code: Ne,
  def: Ke,
  fences: Qe,
  heading: Ue,
  hr: I,
  html: We,
  lheading: me,
  list: Xe,
  newline: Ge,
  paragraph: be,
  table: _,
  text: Fe
}, le = k("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", I).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", " {4}[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Z).getRegex(), Je = {
  ...X,
  table: le,
  paragraph: k(U).replace("hr", I).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", le).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Z).getRegex()
}, Ve = {
  ...X,
  html: k(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", K).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
  heading: /^(#{1,6})(.*)(?:\n+|$)/,
  fences: _,
  // fences not supported
  lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
  paragraph: k(U).replace("hr", I).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", me).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex()
}, we = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, et = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, ye = /^( {2,}|\\)\n(?!\s*$)/, tt = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, L = "\\p{P}$+<=>`^|~", nt = k(/^((?![*_])[\spunctuation])/, "u").replace(/punctuation/g, L).getRegex(), st = /\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g, it = k(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/, "u").replace(/punct/g, L).getRegex(), rt = k("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])", "gu").replace(/punct/g, L).getRegex(), lt = k("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])", "gu").replace(/punct/g, L).getRegex(), ot = k(/\\([punct])/, "gu").replace(/punct/g, L).getRegex(), at = k(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), ct = k(K).replace("(?:-->|$)", "-->").getRegex(), ht = k("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", ct).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), B = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/, ut = k(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label", B).replace("href", /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), $e = k(/^!?\[(label)\]\[(ref)\]/).replace("label", B).replace("ref", F).getRegex(), Te = k(/^!?\[(ref)\](?:\[\])?/).replace("ref", F).getRegex(), pt = k("reflink|nolink(?!\\()", "g").replace("reflink", $e).replace("nolink", Te).getRegex(), W = {
  _backpedal: _,
  // only used for GFM url
  anyPunctuation: ot,
  autolink: at,
  blockSkip: st,
  br: ye,
  code: et,
  del: _,
  emStrongLDelim: it,
  emStrongRDelimAst: rt,
  emStrongRDelimUnd: lt,
  escape: we,
  link: ut,
  nolink: Te,
  punctuation: nt,
  reflink: $e,
  reflinkSearch: pt,
  tag: ht,
  text: tt,
  url: _
}, ft = {
  ...W,
  link: k(/^!?\[(label)\]\((.*?)\)/).replace("label", B).getRegex(),
  reflink: k(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", B).getRegex()
}, G = {
  ...W,
  escape: k(we).replace("])", "~|])").getRegex(),
  url: k(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, "i").replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),
  _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
  del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
  text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
}, gt = {
  ...G,
  br: k(ye).replace("{2,}", "*").getRegex(),
  text: k(G.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
}, v = {
  normal: X,
  gfm: Je,
  pedantic: Ve
}, S = {
  normal: W,
  gfm: G,
  breaks: gt,
  pedantic: ft
};
class b {
  constructor(e) {
    d(this, "tokens");
    d(this, "options");
    d(this, "state");
    d(this, "tokenizer");
    d(this, "inlineQueue");
    this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = e || R, this.options.tokenizer = this.options.tokenizer || new M(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = {
      inLink: !1,
      inRawBlock: !1,
      top: !0
    };
    const t = {
      block: v.normal,
      inline: S.normal
    };
    this.options.pedantic ? (t.block = v.pedantic, t.inline = S.pedantic) : this.options.gfm && (t.block = v.gfm, this.options.breaks ? t.inline = S.breaks : t.inline = S.gfm), this.tokenizer.rules = t;
  }
  /**
   * Expose Rules
   */
  static get rules() {
    return {
      block: v,
      inline: S
    };
  }
  /**
   * Static Lex Method
   */
  static lex(e, t) {
    return new b(t).lex(e);
  }
  /**
   * Static Lex Inline Method
   */
  static lexInline(e, t) {
    return new b(t).inlineTokens(e);
  }
  /**
   * Preprocessing
   */
  lex(e) {
    e = e.replace(/\r\n|\r/g, `
`), this.blockTokens(e, this.tokens);
    let t;
    for (; t = this.inlineQueue.shift(); )
      this.inlineTokens(t.src, t.tokens);
    return this.tokens;
  }
  blockTokens(e, t = []) {
    this.options.pedantic ? e = e.replace(/\t/g, "    ").replace(/^ +$/gm, "") : e = e.replace(/^( *)(\t+)/gm, (o, a, u) => a + "    ".repeat(u.length));
    let n, i, r, s;
    for (; e; )
      if (!(this.options.extensions && this.options.extensions.block && this.options.extensions.block.some((o) => (n = o.call({ lexer: this }, e, t)) ? (e = e.substring(n.raw.length), t.push(n), !0) : !1))) {
        if (n = this.tokenizer.space(e)) {
          e = e.substring(n.raw.length), n.raw.length === 1 && t.length > 0 ? t[t.length - 1].raw += `
` : t.push(n);
          continue;
        }
        if (n = this.tokenizer.code(e)) {
          e = e.substring(n.raw.length), i = t[t.length - 1], i && (i.type === "paragraph" || i.type === "text") ? (i.raw += `
` + n.raw, i.text += `
` + n.text, this.inlineQueue[this.inlineQueue.length - 1].src = i.text) : t.push(n);
          continue;
        }
        if (n = this.tokenizer.fences(e)) {
          e = e.substring(n.raw.length), t.push(n);
          continue;
        }
        if (n = this.tokenizer.heading(e)) {
          e = e.substring(n.raw.length), t.push(n);
          continue;
        }
        if (n = this.tokenizer.hr(e)) {
          e = e.substring(n.raw.length), t.push(n);
          continue;
        }
        if (n = this.tokenizer.blockquote(e)) {
          e = e.substring(n.raw.length), t.push(n);
          continue;
        }
        if (n = this.tokenizer.list(e)) {
          e = e.substring(n.raw.length), t.push(n);
          continue;
        }
        if (n = this.tokenizer.html(e)) {
          e = e.substring(n.raw.length), t.push(n);
          continue;
        }
        if (n = this.tokenizer.def(e)) {
          e = e.substring(n.raw.length), i = t[t.length - 1], i && (i.type === "paragraph" || i.type === "text") ? (i.raw += `
` + n.raw, i.text += `
` + n.raw, this.inlineQueue[this.inlineQueue.length - 1].src = i.text) : this.tokens.links[n.tag] || (this.tokens.links[n.tag] = {
            href: n.href,
            title: n.title
          });
          continue;
        }
        if (n = this.tokenizer.table(e)) {
          e = e.substring(n.raw.length), t.push(n);
          continue;
        }
        if (n = this.tokenizer.lheading(e)) {
          e = e.substring(n.raw.length), t.push(n);
          continue;
        }
        if (r = e, this.options.extensions && this.options.extensions.startBlock) {
          let o = 1 / 0;
          const a = e.slice(1);
          let u;
          this.options.extensions.startBlock.forEach((c) => {
            u = c.call({ lexer: this }, a), typeof u == "number" && u >= 0 && (o = Math.min(o, u));
          }), o < 1 / 0 && o >= 0 && (r = e.substring(0, o + 1));
        }
        if (this.state.top && (n = this.tokenizer.paragraph(r))) {
          i = t[t.length - 1], s && i.type === "paragraph" ? (i.raw += `
` + n.raw, i.text += `
` + n.text, this.inlineQueue.pop(), this.inlineQueue[this.inlineQueue.length - 1].src = i.text) : t.push(n), s = r.length !== e.length, e = e.substring(n.raw.length);
          continue;
        }
        if (n = this.tokenizer.text(e)) {
          e = e.substring(n.raw.length), i = t[t.length - 1], i && i.type === "text" ? (i.raw += `
` + n.raw, i.text += `
` + n.text, this.inlineQueue.pop(), this.inlineQueue[this.inlineQueue.length - 1].src = i.text) : t.push(n);
          continue;
        }
        if (e) {
          const o = "Infinite loop on byte: " + e.charCodeAt(0);
          if (this.options.silent) {
            console.error(o);
            break;
          } else
            throw new Error(o);
        }
      }
    return this.state.top = !0, t;
  }
  inline(e, t = []) {
    return this.inlineQueue.push({ src: e, tokens: t }), t;
  }
  /**
   * Lexing/Compiling
   */
  inlineTokens(e, t = []) {
    let n, i, r, s = e, o, a, u;
    if (this.tokens.links) {
      const c = Object.keys(this.tokens.links);
      if (c.length > 0)
        for (; (o = this.tokenizer.rules.inline.reflinkSearch.exec(s)) != null; )
          c.includes(o[0].slice(o[0].lastIndexOf("[") + 1, -1)) && (s = s.slice(0, o.index) + "[" + "a".repeat(o[0].length - 2) + "]" + s.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
    }
    for (; (o = this.tokenizer.rules.inline.blockSkip.exec(s)) != null; )
      s = s.slice(0, o.index) + "[" + "a".repeat(o[0].length - 2) + "]" + s.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    for (; (o = this.tokenizer.rules.inline.anyPunctuation.exec(s)) != null; )
      s = s.slice(0, o.index) + "++" + s.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
    for (; e; )
      if (a || (u = ""), a = !1, !(this.options.extensions && this.options.extensions.inline && this.options.extensions.inline.some((c) => (n = c.call({ lexer: this }, e, t)) ? (e = e.substring(n.raw.length), t.push(n), !0) : !1))) {
        if (n = this.tokenizer.escape(e)) {
          e = e.substring(n.raw.length), t.push(n);
          continue;
        }
        if (n = this.tokenizer.tag(e)) {
          e = e.substring(n.raw.length), i = t[t.length - 1], i && n.type === "text" && i.type === "text" ? (i.raw += n.raw, i.text += n.text) : t.push(n);
          continue;
        }
        if (n = this.tokenizer.link(e)) {
          e = e.substring(n.raw.length), t.push(n);
          continue;
        }
        if (n = this.tokenizer.reflink(e, this.tokens.links)) {
          e = e.substring(n.raw.length), i = t[t.length - 1], i && n.type === "text" && i.type === "text" ? (i.raw += n.raw, i.text += n.text) : t.push(n);
          continue;
        }
        if (n = this.tokenizer.emStrong(e, s, u)) {
          e = e.substring(n.raw.length), t.push(n);
          continue;
        }
        if (n = this.tokenizer.codespan(e)) {
          e = e.substring(n.raw.length), t.push(n);
          continue;
        }
        if (n = this.tokenizer.br(e)) {
          e = e.substring(n.raw.length), t.push(n);
          continue;
        }
        if (n = this.tokenizer.del(e)) {
          e = e.substring(n.raw.length), t.push(n);
          continue;
        }
        if (n = this.tokenizer.autolink(e)) {
          e = e.substring(n.raw.length), t.push(n);
          continue;
        }
        if (!this.state.inLink && (n = this.tokenizer.url(e))) {
          e = e.substring(n.raw.length), t.push(n);
          continue;
        }
        if (r = e, this.options.extensions && this.options.extensions.startInline) {
          let c = 1 / 0;
          const p = e.slice(1);
          let h;
          this.options.extensions.startInline.forEach((f) => {
            h = f.call({ lexer: this }, p), typeof h == "number" && h >= 0 && (c = Math.min(c, h));
          }), c < 1 / 0 && c >= 0 && (r = e.substring(0, c + 1));
        }
        if (n = this.tokenizer.inlineText(r)) {
          e = e.substring(n.raw.length), n.raw.slice(-1) !== "_" && (u = n.raw.slice(-1)), a = !0, i = t[t.length - 1], i && i.type === "text" ? (i.raw += n.raw, i.text += n.text) : t.push(n);
          continue;
        }
        if (e) {
          const c = "Infinite loop on byte: " + e.charCodeAt(0);
          if (this.options.silent) {
            console.error(c);
            break;
          } else
            throw new Error(c);
        }
      }
    return t;
  }
}
class O {
  constructor(e) {
    d(this, "options");
    this.options = e || R;
  }
  code(e, t, n) {
    var r;
    const i = (r = (t || "").match(/^\S*/)) == null ? void 0 : r[0];
    return e = e.replace(/\n$/, "") + `
`, i ? '<pre><code class="language-' + x(i) + '">' + (n ? e : x(e, !0)) + `</code></pre>
` : "<pre><code>" + (n ? e : x(e, !0)) + `</code></pre>
`;
  }
  blockquote(e) {
    return `<blockquote>
${e}</blockquote>
`;
  }
  html(e, t) {
    return e;
  }
  heading(e, t, n) {
    return `<h${t}>${e}</h${t}>
`;
  }
  hr() {
    return `<hr>
`;
  }
  list(e, t, n) {
    const i = t ? "ol" : "ul", r = t && n !== 1 ? ' start="' + n + '"' : "";
    return "<" + i + r + `>
` + e + "</" + i + `>
`;
  }
  listitem(e, t, n) {
    return `<li>${e}</li>
`;
  }
  checkbox(e) {
    return "<input " + (e ? 'checked="" ' : "") + 'disabled="" type="checkbox">';
  }
  paragraph(e) {
    return `<p>${e}</p>
`;
  }
  table(e, t) {
    return t && (t = `<tbody>${t}</tbody>`), `<table>
<thead>
` + e + `</thead>
` + t + `</table>
`;
  }
  tablerow(e) {
    return `<tr>
${e}</tr>
`;
  }
  tablecell(e, t) {
    const n = t.header ? "th" : "td";
    return (t.align ? `<${n} align="${t.align}">` : `<${n}>`) + e + `</${n}>
`;
  }
  /**
   * span level renderer
   */
  strong(e) {
    return `<strong>${e}</strong>`;
  }
  em(e) {
    return `<em>${e}</em>`;
  }
  codespan(e) {
    return `<code>${e}</code>`;
  }
  br() {
    return "<br>";
  }
  del(e) {
    return `<del>${e}</del>`;
  }
  link(e, t, n) {
    const i = se(e);
    if (i === null)
      return n;
    e = i;
    let r = '<a href="' + e + '"';
    return t && (r += ' title="' + t + '"'), r += ">" + n + "</a>", r;
  }
  image(e, t, n) {
    const i = se(e);
    if (i === null)
      return n;
    e = i;
    let r = `<img src="${e}" alt="${n}"`;
    return t && (r += ` title="${t}"`), r += ">", r;
  }
  text(e) {
    return e;
  }
}
class Y {
  // no need for block level renderers
  strong(e) {
    return e;
  }
  em(e) {
    return e;
  }
  codespan(e) {
    return e;
  }
  del(e) {
    return e;
  }
  html(e) {
    return e;
  }
  text(e) {
    return e;
  }
  link(e, t, n) {
    return "" + n;
  }
  image(e, t, n) {
    return "" + n;
  }
  br() {
    return "";
  }
}
class w {
  constructor(e) {
    d(this, "options");
    d(this, "renderer");
    d(this, "textRenderer");
    this.options = e || R, this.options.renderer = this.options.renderer || new O(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.textRenderer = new Y();
  }
  /**
   * Static Parse Method
   */
  static parse(e, t) {
    return new w(t).parse(e);
  }
  /**
   * Static Parse Inline Method
   */
  static parseInline(e, t) {
    return new w(t).parseInline(e);
  }
  /**
   * Parse Loop
   */
  parse(e, t = !0) {
    let n = "";
    for (let i = 0; i < e.length; i++) {
      const r = e[i];
      if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[r.type]) {
        const s = r, o = this.options.extensions.renderers[s.type].call({ parser: this }, s);
        if (o !== !1 || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "paragraph", "text"].includes(s.type)) {
          n += o || "";
          continue;
        }
      }
      switch (r.type) {
        case "space":
          continue;
        case "hr": {
          n += this.renderer.hr();
          continue;
        }
        case "heading": {
          const s = r;
          n += this.renderer.heading(this.parseInline(s.tokens), s.depth, Ze(this.parseInline(s.tokens, this.textRenderer)));
          continue;
        }
        case "code": {
          const s = r;
          n += this.renderer.code(s.text, s.lang, !!s.escaped);
          continue;
        }
        case "table": {
          const s = r;
          let o = "", a = "";
          for (let c = 0; c < s.header.length; c++)
            a += this.renderer.tablecell(this.parseInline(s.header[c].tokens), { header: !0, align: s.align[c] });
          o += this.renderer.tablerow(a);
          let u = "";
          for (let c = 0; c < s.rows.length; c++) {
            const p = s.rows[c];
            a = "";
            for (let h = 0; h < p.length; h++)
              a += this.renderer.tablecell(this.parseInline(p[h].tokens), { header: !1, align: s.align[h] });
            u += this.renderer.tablerow(a);
          }
          n += this.renderer.table(o, u);
          continue;
        }
        case "blockquote": {
          const s = r, o = this.parse(s.tokens);
          n += this.renderer.blockquote(o);
          continue;
        }
        case "list": {
          const s = r, o = s.ordered, a = s.start, u = s.loose;
          let c = "";
          for (let p = 0; p < s.items.length; p++) {
            const h = s.items[p], f = h.checked, y = h.task;
            let m = "";
            if (h.task) {
              const $ = this.renderer.checkbox(!!f);
              u ? h.tokens.length > 0 && h.tokens[0].type === "paragraph" ? (h.tokens[0].text = $ + " " + h.tokens[0].text, h.tokens[0].tokens && h.tokens[0].tokens.length > 0 && h.tokens[0].tokens[0].type === "text" && (h.tokens[0].tokens[0].text = $ + " " + h.tokens[0].tokens[0].text)) : h.tokens.unshift({
                type: "text",
                text: $ + " "
              }) : m += $ + " ";
            }
            m += this.parse(h.tokens, u), c += this.renderer.listitem(m, y, !!f);
          }
          n += this.renderer.list(c, o, a);
          continue;
        }
        case "html": {
          const s = r;
          n += this.renderer.html(s.text, s.block);
          continue;
        }
        case "paragraph": {
          const s = r;
          n += this.renderer.paragraph(this.parseInline(s.tokens));
          continue;
        }
        case "text": {
          let s = r, o = s.tokens ? this.parseInline(s.tokens) : s.text;
          for (; i + 1 < e.length && e[i + 1].type === "text"; )
            s = e[++i], o += `
` + (s.tokens ? this.parseInline(s.tokens) : s.text);
          n += t ? this.renderer.paragraph(o) : o;
          continue;
        }
        default: {
          const s = 'Token with "' + r.type + '" type was not found.';
          if (this.options.silent)
            return console.error(s), "";
          throw new Error(s);
        }
      }
    }
    return n;
  }
  /**
   * Parse Inline Tokens
   */
  parseInline(e, t) {
    t = t || this.renderer;
    let n = "";
    for (let i = 0; i < e.length; i++) {
      const r = e[i];
      if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[r.type]) {
        const s = this.options.extensions.renderers[r.type].call({ parser: this }, r);
        if (s !== !1 || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(r.type)) {
          n += s || "";
          continue;
        }
      }
      switch (r.type) {
        case "escape": {
          const s = r;
          n += t.text(s.text);
          break;
        }
        case "html": {
          const s = r;
          n += t.html(s.text);
          break;
        }
        case "link": {
          const s = r;
          n += t.link(s.href, s.title, this.parseInline(s.tokens, t));
          break;
        }
        case "image": {
          const s = r;
          n += t.image(s.href, s.title, s.text);
          break;
        }
        case "strong": {
          const s = r;
          n += t.strong(this.parseInline(s.tokens, t));
          break;
        }
        case "em": {
          const s = r;
          n += t.em(this.parseInline(s.tokens, t));
          break;
        }
        case "codespan": {
          const s = r;
          n += t.codespan(s.text);
          break;
        }
        case "br": {
          n += t.br();
          break;
        }
        case "del": {
          const s = r;
          n += t.del(this.parseInline(s.tokens, t));
          break;
        }
        case "text": {
          const s = r;
          n += t.text(s.text);
          break;
        }
        default: {
          const s = 'Token with "' + r.type + '" type was not found.';
          if (this.options.silent)
            return console.error(s), "";
          throw new Error(s);
        }
      }
    }
    return n;
  }
}
class E {
  constructor(e) {
    d(this, "options");
    this.options = e || R;
  }
  /**
   * Process markdown before marked
   */
  preprocess(e) {
    return e;
  }
  /**
   * Process HTML after marked is finished
   */
  postprocess(e) {
    return e;
  }
  /**
   * Process all tokens before walk tokens
   */
  processAllTokens(e) {
    return e;
  }
}
d(E, "passThroughHooks", /* @__PURE__ */ new Set([
  "preprocess",
  "postprocess",
  "processAllTokens"
]));
var A, N, j, Se;
class Re {
  constructor(...e) {
    H(this, A);
    H(this, j);
    d(this, "defaults", Q());
    d(this, "options", this.setOptions);
    d(this, "parse", P(this, A, N).call(this, b.lex, w.parse));
    d(this, "parseInline", P(this, A, N).call(this, b.lexInline, w.parseInline));
    d(this, "Parser", w);
    d(this, "Renderer", O);
    d(this, "TextRenderer", Y);
    d(this, "Lexer", b);
    d(this, "Tokenizer", M);
    d(this, "Hooks", E);
    this.use(...e);
  }
  /**
   * Run callback for every token
   */
  walkTokens(e, t) {
    var i, r;
    let n = [];
    for (const s of e)
      switch (n = n.concat(t.call(this, s)), s.type) {
        case "table": {
          const o = s;
          for (const a of o.header)
            n = n.concat(this.walkTokens(a.tokens, t));
          for (const a of o.rows)
            for (const u of a)
              n = n.concat(this.walkTokens(u.tokens, t));
          break;
        }
        case "list": {
          const o = s;
          n = n.concat(this.walkTokens(o.items, t));
          break;
        }
        default: {
          const o = s;
          (r = (i = this.defaults.extensions) == null ? void 0 : i.childTokens) != null && r[o.type] ? this.defaults.extensions.childTokens[o.type].forEach((a) => {
            n = n.concat(this.walkTokens(o[a], t));
          }) : o.tokens && (n = n.concat(this.walkTokens(o.tokens, t)));
        }
      }
    return n;
  }
  use(...e) {
    const t = this.defaults.extensions || { renderers: {}, childTokens: {} };
    return e.forEach((n) => {
      const i = { ...n };
      if (i.async = this.defaults.async || i.async || !1, n.extensions && (n.extensions.forEach((r) => {
        if (!r.name)
          throw new Error("extension name required");
        if ("renderer" in r) {
          const s = t.renderers[r.name];
          s ? t.renderers[r.name] = function(...o) {
            let a = r.renderer.apply(this, o);
            return a === !1 && (a = s.apply(this, o)), a;
          } : t.renderers[r.name] = r.renderer;
        }
        if ("tokenizer" in r) {
          if (!r.level || r.level !== "block" && r.level !== "inline")
            throw new Error("extension level must be 'block' or 'inline'");
          const s = t[r.level];
          s ? s.unshift(r.tokenizer) : t[r.level] = [r.tokenizer], r.start && (r.level === "block" ? t.startBlock ? t.startBlock.push(r.start) : t.startBlock = [r.start] : r.level === "inline" && (t.startInline ? t.startInline.push(r.start) : t.startInline = [r.start]));
        }
        "childTokens" in r && r.childTokens && (t.childTokens[r.name] = r.childTokens);
      }), i.extensions = t), n.renderer) {
        const r = this.defaults.renderer || new O(this.defaults);
        for (const s in n.renderer) {
          if (!(s in r))
            throw new Error(`renderer '${s}' does not exist`);
          if (s === "options")
            continue;
          const o = s, a = n.renderer[o], u = r[o];
          r[o] = (...c) => {
            let p = a.apply(r, c);
            return p === !1 && (p = u.apply(r, c)), p || "";
          };
        }
        i.renderer = r;
      }
      if (n.tokenizer) {
        const r = this.defaults.tokenizer || new M(this.defaults);
        for (const s in n.tokenizer) {
          if (!(s in r))
            throw new Error(`tokenizer '${s}' does not exist`);
          if (["options", "rules", "lexer"].includes(s))
            continue;
          const o = s, a = n.tokenizer[o], u = r[o];
          r[o] = (...c) => {
            let p = a.apply(r, c);
            return p === !1 && (p = u.apply(r, c)), p;
          };
        }
        i.tokenizer = r;
      }
      if (n.hooks) {
        const r = this.defaults.hooks || new E();
        for (const s in n.hooks) {
          if (!(s in r))
            throw new Error(`hook '${s}' does not exist`);
          if (s === "options")
            continue;
          const o = s, a = n.hooks[o], u = r[o];
          E.passThroughHooks.has(s) ? r[o] = (c) => {
            if (this.defaults.async)
              return Promise.resolve(a.call(r, c)).then((h) => u.call(r, h));
            const p = a.call(r, c);
            return u.call(r, p);
          } : r[o] = (...c) => {
            let p = a.apply(r, c);
            return p === !1 && (p = u.apply(r, c)), p;
          };
        }
        i.hooks = r;
      }
      if (n.walkTokens) {
        const r = this.defaults.walkTokens, s = n.walkTokens;
        i.walkTokens = function(o) {
          let a = [];
          return a.push(s.call(this, o)), r && (a = a.concat(r.call(this, o))), a;
        };
      }
      this.defaults = { ...this.defaults, ...i };
    }), this;
  }
  setOptions(e) {
    return this.defaults = { ...this.defaults, ...e }, this;
  }
  lexer(e, t) {
    return b.lex(e, t ?? this.defaults);
  }
  parser(e, t) {
    return w.parse(e, t ?? this.defaults);
  }
}
A = new WeakSet(), N = function(e, t) {
  return (n, i) => {
    const r = { ...i }, s = { ...this.defaults, ...r };
    this.defaults.async === !0 && r.async === !1 && (s.silent || console.warn("marked(): The async option was set to true by an extension. The async: false option sent to parse will be ignored."), s.async = !0);
    const o = P(this, j, Se).call(this, !!s.silent, !!s.async);
    if (typeof n > "u" || n === null)
      return o(new Error("marked(): input parameter is undefined or null"));
    if (typeof n != "string")
      return o(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(n) + ", string expected"));
    if (s.hooks && (s.hooks.options = s), s.async)
      return Promise.resolve(s.hooks ? s.hooks.preprocess(n) : n).then((a) => e(a, s)).then((a) => s.hooks ? s.hooks.processAllTokens(a) : a).then((a) => s.walkTokens ? Promise.all(this.walkTokens(a, s.walkTokens)).then(() => a) : a).then((a) => t(a, s)).then((a) => s.hooks ? s.hooks.postprocess(a) : a).catch(o);
    try {
      s.hooks && (n = s.hooks.preprocess(n));
      let a = e(n, s);
      s.hooks && (a = s.hooks.processAllTokens(a)), s.walkTokens && this.walkTokens(a, s.walkTokens);
      let u = t(a, s);
      return s.hooks && (u = s.hooks.postprocess(u)), u;
    } catch (a) {
      return o(a);
    }
  };
}, j = new WeakSet(), Se = function(e, t) {
  return (n) => {
    if (n.message += `
Please report this to https://github.com/markedjs/marked.`, e) {
      const i = "<p>An error occurred:</p><pre>" + x(n.message + "", !0) + "</pre>";
      return t ? Promise.resolve(i) : i;
    }
    if (t)
      return Promise.reject(n);
    throw n;
  };
};
const T = new Re();
function g(l, e) {
  return T.parse(l, e);
}
g.options = g.setOptions = function(l) {
  return T.setOptions(l), g.defaults = T.defaults, ge(g.defaults), g;
};
g.getDefaults = Q;
g.defaults = R;
g.use = function(...l) {
  return T.use(...l), g.defaults = T.defaults, ge(g.defaults), g;
};
g.walkTokens = function(l, e) {
  return T.walkTokens(l, e);
};
g.parseInline = T.parseInline;
g.Parser = w;
g.parser = w.parse;
g.Renderer = O;
g.TextRenderer = Y;
g.Lexer = b;
g.lexer = b.lex;
g.Tokenizer = M;
g.Hooks = E;
g.parse = g;
g.options;
g.setOptions;
g.use;
g.walkTokens;
g.parseInline;
w.parse;
b.lex;
const kt = /(\s|^)\${1,2}(?!\$)/, oe = /^(\${1,2})(?!\$)((?:\\.|[^\\\n])*?(?:\\.|[^\\\n$]))\1(?=[\s?!.,:]|$)/, dt = /^(\${1,2})\n((?:\\[^]|[^\\])+?)\n\1(?:\n|$)/, xt = {
  throwOnError: !1,
  useKatexRender: !1
};
function mt(l = {}) {
  const e = Object.assign({}, xt, l);
  return {
    extensions: [
      bt(ae(e, !1)),
      wt(ae(e, !0))
    ]
  };
}
function ae(l, e) {
  return (t) => {
    const { useKatexRender: n, ...i } = l, { type: r, text: s, displayMode: o, mathStyle: a } = t;
    return n ? Ce.renderToString(s, {
      ...i,
      displayMode: o
    }) + (e ? `
` : "") : r === "inlineMath" ? `$${s}$` : `<pre class="multiple-math" data-math-style="${a}">${s}</pre>
`;
  };
}
function bt(l) {
  return {
    name: "inlineMath",
    level: "inline",
    start(e) {
      const t = e.match(kt);
      if (!t)
        return;
      const n = (t.index || 0) + t[1].length;
      if (e.substring(n).match(oe))
        return n;
    },
    tokenizer(e) {
      const t = e.match(oe);
      if (t)
        return {
          type: "inlineMath",
          raw: t[0],
          text: t[2].trim(),
          displayMode: t[1].length === 2
        };
    },
    renderer: l
  };
}
function wt(l) {
  return {
    name: "multiplemath",
    level: "block",
    start(e) {
      return e.indexOf(`
$`);
    },
    tokenizer(e) {
      const t = e.match(dt);
      if (t)
        return {
          type: "multiplemath",
          raw: t[0],
          text: t[2].trim(),
          displayMode: t[1].length === 2,
          mathStyle: ""
        };
    },
    renderer: l
  };
}
const yt = /(?:\s|^)(~)(?!\1)/, ze = new RegExp("^(~)((?:[^~\\s]|(?<=\\\\)\\1|(?<=\\\\) )+?)(?<!\\\\)\\1(?!\\1)"), $t = /(?:\S|^)(\^)(?!\1)/, _e = new RegExp("^(\\^)((?:[^^\\s]|(?<=\\\\)\\1|(?<=\\\\) )+?)(?<!\\\\)\\1(?!\\1)"), Tt = {
  superscript: $t,
  subscript: yt
}, Rt = {
  superscript: _e,
  subscript: ze
};
function St() {
  return {
    extensions: [ce("superscript"), ce("subscript")]
  };
}
function ce(l) {
  return {
    name: l,
    level: "inline",
    start(e) {
      const t = e.match(Tt[l]);
      if (!t)
        return;
      const n = (t.index || 0) + t[1].length, i = e.substring(n);
      if (i.match(_e) || i.match(ze))
        return n;
    },
    tokenizer(e) {
      const t = e.match(Rt[l]);
      if (t)
        return {
          type: l,
          raw: t[0],
          text: t[2].trim(),
          marker: t[1]
        };
    },
    renderer(e) {
      const { text: t, marker: n } = e, i = n === "^" ? "sup" : "sub";
      return `<${i}>${t}</${i}>`;
    }
  };
}
const zt = /^(?:(?:---\n([\s\S]+?)---)|(?:\+\+\+\n([\s\S]+?)\+\+\+)|(?:;;;\n([\s\S]+?);;;)|(?:\{\n([\s\S]+?)\}))(?:\n{2,}|\n{1,2}$)/, _t = {
  "-": "yaml",
  "+": "toml",
  ";": "json",
  "{": "json"
};
function Et(l) {
  const e = zt.exec(l);
  let t = null, n = l;
  if (e) {
    const i = e[0], r = i[0], s = _t[r];
    t = {
      type: "frontmatter",
      raw: i,
      text: e[1],
      style: r,
      lang: s
    }, n = l.substring(i.length);
  }
  return { token: t, src: n };
}
function At(l) {
  const { text: e, style: t, lang: n } = l;
  return `<pre class="front-matter" data-style="${t}" data-lang="${n}">
${e}</pre>
`;
}
const It = {
  footnote: !1,
  math: !0,
  isGitlabCompatibilityEnabled: !0,
  frontMatter: !0,
  superSubScript: !0
};
function Lt(l) {
  return l.type === "heading";
}
function Pt(l) {
  return l.type === "code" && l.lang === "math";
}
const Ct = (l) => (e) => {
  const { math: t, isGitlabCompatibilityEnabled: n } = l;
  if (Lt(e)) {
    const i = /\n {0,3}(=+|-+)/.exec(e.raw);
    e.headingStyle = i ? "setext" : "atx", e.marker = i ? i[1] : "";
  }
  e.type === "code" && (e.codeBlockStyle ? e.lang = "" : typeof e.lang == "string" && (e.codeBlockStyle = "fenced")), Pt(e) && t && n && (e.type = "multiplemath", e.mathStyle = "gitlab", e.displayMode = !0, delete e.lang, delete e.codeBlockStyle);
};
function vt(l) {
  if (typeof l == "function" && (l = {
    highlight: l
  }), !l || typeof l.highlight != "function")
    throw new Error("Must provide highlight function");
  return typeof l.langPrefix != "string" && (l.langPrefix = "language-"), {
    async: !!l.async,
    walkTokens(e) {
      if (e.type !== "code")
        return;
      const t = Mt(e);
      if (l.async)
        return Promise.resolve(l.highlight(e.text, t)).then(he(e));
      const n = l.highlight(e.text, t);
      if (n instanceof Promise)
        throw new Error("markedHighlight is not set to async but the highlight function is async. Set the async option to true on markedHighlight to await the async highlight function.");
      he(e)(n);
    },
    renderer: {
      code(e, t, n) {
        const i = (t || "").match(/\S*/)[0], r = i ? ` class="${l.langPrefix}${pe(i)}"` : "";
        return e = e.replace(/\n$/, ""), `<pre><code${r}>${n ? e : pe(e, !0)}
</code></pre>`;
      }
    }
  };
}
function Mt(l) {
  return (l.lang || "").match(/\S*/)[0];
}
function he(l) {
  return (e) => {
    typeof e == "string" && e !== l.text && (l.escaped = !0, l.text = e);
  };
}
const Ee = /[&<>"']/, Bt = new RegExp(Ee.source, "g"), Ae = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, Ot = new RegExp(Ae.source, "g"), jt = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
}, ue = (l) => jt[l];
function pe(l, e) {
  if (e) {
    if (Ee.test(l))
      return l.replace(Bt, ue);
  } else if (Ae.test(l))
    return l.replace(Ot, ue);
  return l;
}
const Zt = (l) => ve.find((e) => e.aliases.includes(l)), qt = /(\s|^):(?!:)/, fe = /^(:)([a-z_\d+-]+?)\1/, Dt = {
  isRenderEmoji: !0
};
function Ht(l = {}) {
  const e = Object.assign({}, Dt, l);
  return {
    extensions: [Gt(e)]
  };
}
function Gt(l) {
  return {
    name: "emoji",
    level: "inline",
    start(e) {
      const t = e.match(qt);
      if (!t)
        return;
      const n = (t.index || 0) + t[1].length;
      if (e.substring(n).match(fe))
        return n;
    },
    tokenizer(e) {
      const t = e.match(fe);
      if (t)
        return {
          type: "emoji",
          raw: t[0],
          text: t[2].trim(),
          marker: t[1]
        };
    },
    renderer(e) {
      const { isRenderEmoji: t } = l, { text: n, marker: i } = e;
      if (t) {
        const r = Zt(n);
        return r ? r.emoji : `${i}${n}${i}`;
      } else
        return `${i}${n}${i}`;
    }
  };
}
const Nt = [
  "mermaid",
  "plantuml",
  "vega-lite"
], z = new Re(
  vt({
    highlight(l, e) {
      if (!e || Nt.includes(e))
        return l;
      const t = te.languages[e];
      return t ? te.highlight(l, t, e) : (console.warn(`Unable to find grammar for "${e}".`), l);
    }
  })
);
function Ft(l, e = {}) {
  e = Object.assign({}, It, e);
  const { frontMatter: t, math: n, isGitlabCompatibilityEnabled: i, superSubScript: r } = e;
  let s = "";
  if (z.use({
    walkTokens: Ct({ math: n, isGitlabCompatibilityEnabled: i })
  }), z.use(Ht({ isRenderEmoji: !0 })), n && z.use(
    mt({
      throwOnError: !1,
      useKatexRender: !0
    })
  ), r && z.use(St()), t) {
    const { token: o, src: a } = Et(l);
    o && (s = At(o), l = a);
  }
  return s += z.parse(l), s;
}
export {
  It as D,
  b as _,
  mt as a,
  Ft as b,
  At as f,
  Et as g,
  g as m,
  St as s,
  Zt as v,
  Ct as w
};
