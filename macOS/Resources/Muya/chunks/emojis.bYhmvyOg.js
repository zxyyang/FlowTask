var ko = Object.defineProperty;
var _o = (a, e, t) => e in a ? ko(a, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : a[e] = t;
var Qe = (a, e, t) => (_o(a, typeof e != "symbol" ? e + "" : e, t), t);
import xo from "../locales/en.js";
const So = [
  '"',
  "&",
  "<",
  ">",
  " ",
  " ",
  " ",
  " ",
  "<",
  ">",
  "&",
  '"',
  "©",
  "®",
  "™",
  "×",
  "÷",
  " ",
  "¡",
  "¢",
  "£",
  "¤",
  "¥",
  "¦",
  "§",
  "¨",
  "©",
  "ª",
  "«",
  "¬",
  "­",
  "®",
  "¯",
  "°",
  "±",
  "²",
  "³",
  "´",
  "µ",
  "¶",
  "·",
  "¸",
  "¹",
  "º",
  "»",
  "¼",
  "½",
  "¾",
  "¿",
  "À",
  "Á",
  "Â",
  "Ã",
  "Ä",
  "Å",
  "Æ",
  "Ç",
  "È",
  "É",
  "Ê",
  "Ë",
  "Ì",
  "Í",
  "Î",
  "Ï",
  "Ð",
  "Ñ",
  "Ò",
  "Ó",
  "Ô",
  "Õ",
  "Ö",
  "×",
  "Ø",
  "Ù",
  "Ú",
  "Û",
  "Ü",
  "Ý",
  "Þ",
  "ß",
  "à",
  "á",
  "â",
  "ã",
  "ä",
  "å",
  "æ",
  "ç",
  "è",
  "é",
  "ê",
  "ë",
  "ì",
  "í",
  "î",
  "ï",
  "ð",
  "ñ",
  "ò",
  "ó",
  "ô",
  "õ",
  "ö",
  "÷",
  "ø",
  "ù",
  "ú",
  "û",
  "ü",
  "ý",
  "þ",
  "ÿ",
  "ƒ",
  "Α",
  "Β",
  "Γ",
  "Δ",
  "Ε",
  "Ζ",
  "Η",
  "Θ",
  "Ι",
  "Κ",
  "Λ",
  "Μ",
  "Ν",
  "Ξ",
  "Ο",
  "Π",
  "Ρ",
  "Σ",
  "Τ",
  "Υ",
  "Φ",
  "Χ",
  "Ψ",
  "Ω",
  "α",
  "β",
  "γ",
  "δ",
  "ε",
  "ζ",
  "η",
  "θ",
  "ι",
  "κ",
  "λ",
  "μ",
  "ν",
  "ξ",
  "ο",
  "π",
  "ρ",
  "ς",
  "σ",
  "τ",
  "υ",
  "φ",
  "χ",
  "ψ",
  "ω",
  "ϑ",
  "ϒ",
  "ϖ",
  "•",
  "…",
  "′",
  "″",
  "‾",
  "⁄",
  "℘",
  "ℑ",
  "ℜ",
  "™",
  "ℵ",
  "←",
  "↑",
  "→",
  "↓",
  "↔",
  "↵",
  "⇐",
  "⇑",
  "⇒",
  "⇓",
  "⇔",
  "∀",
  "∂",
  "∃",
  "∅",
  "∇",
  "∈",
  "∉",
  "∋",
  "∏",
  "∑",
  "−",
  "∗",
  "√",
  "∝",
  "∞",
  "∠",
  "∧",
  "∨",
  "∩",
  "∪",
  "∫",
  "∴",
  "∼",
  "≅",
  "≈",
  "≠",
  "≡",
  "≤",
  "≥",
  "⊂",
  "⊃",
  "⊄",
  "⊆",
  "⊇",
  "⊕",
  "⊗",
  "⊥",
  "⋅",
  "⌈",
  "⌉",
  "⌊",
  "⌋",
  "⟨",
  "⟩",
  "◊",
  "♠",
  "♣",
  "♥",
  "♦",
  '"',
  "&",
  "<",
  ">",
  "Œ",
  "œ",
  "Š",
  "š",
  "Ÿ",
  "ˆ",
  "˜",
  " ",
  " ",
  " ",
  "‌",
  "‍",
  "‎",
  "‏",
  "–",
  "—",
  "‘",
  "’",
  "‚",
  "“",
  "”",
  "„",
  "†",
  "‡",
  "‰",
  "‹",
  "›",
  "€"
], cr = [
  "&quot;",
  "&amp;",
  "&lt;",
  "&gt;",
  "&nbsp;",
  "&ensp;",
  "&emsp;",
  "&nbsp;",
  "&lt;",
  "&gt;",
  "&amp;",
  "&quot;",
  "&copy;",
  "&reg;",
  "&trade;",
  "&times;",
  "&divide;",
  "&nbsp;",
  "&iexcl;",
  "&cent;",
  "&pound;",
  "&curren;",
  "&yen;",
  "&brvbar;",
  "&sect;",
  "&uml;",
  "&copy;",
  "&ordf;",
  "&laquo;",
  "&not;",
  "&shy;",
  "&reg;",
  "&macr;",
  "&deg;",
  "&plusmn;",
  "&sup2;",
  "&sup3;",
  "&acute;",
  "&micro;",
  "&para;",
  "&middot;",
  "&cedil;",
  "&sup1;",
  "&ordm;",
  "&raquo;",
  "&frac14;",
  "&frac12;",
  "&frac34;",
  "&iquest;",
  "&Agrave;",
  "&Aacute;",
  "&Acirc;",
  "&Atilde;",
  "&Auml;",
  "&Aring;",
  "&AElig;",
  "&Ccedil;",
  "&Egrave;",
  "&Eacute;",
  "&Ecirc;",
  "&Euml;",
  "&Igrave;",
  "&Iacute;",
  "&Icirc;",
  "&Iuml;",
  "&ETH;",
  "&Ntilde;",
  "&Ograve;",
  "&Oacute;",
  "&Ocirc;",
  "&Otilde;",
  "&Ouml;",
  "&times;",
  "&Oslash;",
  "&Ugrave;",
  "&Uacute;",
  "&Ucirc;",
  "&Uuml;",
  "&Yacute;",
  "&THORN;",
  "&szlig;",
  "&agrave;",
  "&aacute;",
  "&acirc;",
  "&atilde;",
  "&auml;",
  "&aring;",
  "&aelig;",
  "&ccedil;",
  "&egrave;",
  "&eacute;",
  "&ecirc;",
  "&euml;",
  "&igrave;",
  "&iacute;",
  "&icirc;",
  "&iuml;",
  "&eth;",
  "&ntilde;",
  "&ograve;",
  "&oacute;",
  "&ocirc;",
  "&otilde;",
  "&ouml;",
  "&divide;",
  "&oslash;",
  "&ugrave;",
  "&uacute;",
  "&ucirc;",
  "&uuml;",
  "&yacute;",
  "&thorn;",
  "&yuml;",
  "&fnof;",
  "&Alpha;",
  "&Beta;",
  "&Gamma;",
  "&Delta;",
  "&Epsilon;",
  "&Zeta;",
  "&Eta;",
  "&Theta;",
  "&Iota;",
  "&Kappa;",
  "&Lambda;",
  "&Mu;",
  "&Nu;",
  "&Xi;",
  "&Omicron;",
  "&Pi;",
  "&Rho;",
  "&Sigma;",
  "&Tau;",
  "&Upsilon;",
  "&Phi;",
  "&Chi;",
  "&Psi;",
  "&Omega;",
  "&alpha;",
  "&beta;",
  "&gamma;",
  "&delta;",
  "&epsilon;",
  "&zeta;",
  "&eta;",
  "&theta;",
  "&iota;",
  "&kappa;",
  "&lambda;",
  "&mu;",
  "&nu;",
  "&xi;",
  "&omicron;",
  "&pi;",
  "&rho;",
  "&sigmaf;",
  "&sigma;",
  "&tau;",
  "&upsilon;",
  "&phi;",
  "&chi;",
  "&psi;",
  "&omega;",
  "&thetasym;",
  "&upsih;",
  "&piv;",
  "&bull;",
  "&hellip;",
  "&prime;",
  "&Prime;",
  "&oline;",
  "&frasl;",
  "&weierp;",
  "&image;",
  "&real;",
  "&trade;",
  "&alefsym;",
  "&larr;",
  "&uarr;",
  "&rarr;",
  "&darr;",
  "&harr;",
  "&crarr;",
  "&lArr;",
  "&uArr;",
  "&rArr;",
  "&dArr;",
  "&hArr;",
  "&forall;",
  "&part;",
  "&exist;",
  "&empty;",
  "&nabla;",
  "&isin;",
  "&notin;",
  "&ni;",
  "&prod;",
  "&sum;",
  "&minus;",
  "&lowast;",
  "&radic;",
  "&prop;",
  "&infin;",
  "&ang;",
  "&and;",
  "&or;",
  "&cap;",
  "&cup;",
  "&int;",
  "&there4;",
  "&sim;",
  "&cong;",
  "&asymp;",
  "&ne;",
  "&equiv;",
  "&le;",
  "&ge;",
  "&sub;",
  "&sup;",
  "&nsub;",
  "&sube;",
  "&supe;",
  "&oplus;",
  "&otimes;",
  "&perp;",
  "&sdot;",
  "&lceil;",
  "&rceil;",
  "&lfloor;",
  "&rfloor;",
  "&lang;",
  "&rang;",
  "&loz;",
  "&spades;",
  "&clubs;",
  "&hearts;",
  "&diams;",
  "&quot;",
  "&amp;",
  "&lt;",
  "&gt;",
  "&OElig;",
  "&oelig;",
  "&Scaron;",
  "&scaron;",
  "&Yuml;",
  "&circ;",
  "&tilde;",
  "&ensp;",
  "&emsp;",
  "&thinsp;",
  "&zwnj;",
  "&zwj;",
  "&lrm;",
  "&rlm;",
  "&ndash;",
  "&mdash;",
  "&lsquo;",
  "&rsquo;",
  "&sbquo;",
  "&ldquo;",
  "&rdquo;",
  "&bdquo;",
  "&dagger;",
  "&Dagger;",
  "&permil;",
  "&lsaquo;",
  "&rsaquo;",
  "&euro;"
], El = cr.reduce(
  (a, e, t) => Object.assign(a, { [e]: So[t] }),
  {}
), Ao = {
  hr: /^(\*{3,}$|^\-{3,}$|^\_{3,}$)/,
  code_fence: /^(`{3,})([^`]*)$/,
  header: /(^ {0,3}#{1,6}(\s{1,}|$))/,
  reference_definition: /^( {0,3}\[)([^\]]+?)(\\*)(\]: *)(<?)([^\s>]+)(>?)(?:( +)(["'(]?)([^\n"'\(\)]+)\9)?( *)$/,
  // extra syntax (not belongs to GFM)
  multiple_math: /^(\$\$)$/
}, To = {
  tail_header: /^(\s{1,}#{1,})(\s*)$/
}, Eo = {
  strong: /^(\*\*|__)(?=\S)([\s\S]*?[^\s\\])(\\*)\1(?!(\*|_))/,
  // can nest
  em: /^(\*|_)(?=\S)([\s\S]*?[^\s\*\\])(\\*)\1(?!\1)/,
  // can nest
  inline_code: /^(`{1,3})([^`]+?|.{2,})\1/,
  image: /^(\!\[)(.*?)(\\*)\]\((.*)(\\*)\)/,
  link: /^(\[)((?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*?)(\\*)\]\((.*)(\\*)\)/,
  // can nest
  reference_link: /^\[([^\]]+?)(\\*)\](?:\[([^\]]*?)(\\*)\])?/,
  reference_image: /^\!\[([^\]]+?)(\\*)\](?:\[([^\]]*?)(\\*)\])?/,
  html_tag: /^(<!--[\s\S]*?-->|(<([a-zA-Z]{1}[a-zA-Z\d-]*) *[^\n<>]* *(?:\/)?>)(?:([\s\S]*?)(<\/\3 *>))?)/,
  // raw html
  html_escape: new RegExp(`^(${cr.join("|")})`, "i"),
  soft_line_break: /^(\n)(?!\n)/,
  hard_line_break: /^( {2,})(\n)(?!\n)/,
  // patched math marker `$`
  backlash: /^(\\)([\\`*{}\[\]()#+\-.!_>~:\|\<\>$]{1})/
}, Mo = {
  emoji: /^(:)([a-z_\d+-]+?)\1/,
  del: /^(~{2})(?=\S)([\s\S]*?\S)(\\*)\1/,
  // can nest
  auto_link: /^<(?:([a-zA-Z]{1}[a-zA-Z\d\+\.\-]{1,31}:[^ <>]*)|([a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*))>/,
  // (extended www autolink|extended url autolink|extended email autolink) the email regexp is the same as auto_link.
  auto_link_extension: /^(?:(www\.[a-z_-]+\.[a-z]{2,}(?::[0-9]{1,5})?(?:\/[\S]+)?)|(http(?:s)?:\/\/(?:[a-z0-9\-._~]+\.[a-z]{2,}|[0-9.]+|localhost|\[[a-f0-9.:]+\])(?::[0-9]{1,5})?(?:\/[\S]+)?)|([a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*))(?=\s|$)/
}, Fo = {
  inline_math: /^(\$)([^\$]*?[^\$\\])(\\*)\1(?!\1)/,
  // This is not the best regexp, because it not support `2^2\\^`.
  superscript: new RegExp("^(\\^)((?:[^\\^\\s]|(?<=\\\\)\\1|(?<=\\\\) )+?)(?<!\\\\)\\1(?!\\1)"),
  subscript: new RegExp("^(~)((?:[^~\\s]|(?<=\\\\)\\1|(?<=\\\\) )+?)(?<!\\\\)\\1(?!\\1)"),
  footnote_identifier: new RegExp("^(\\[\\^)([^\\^\\[\\]\\s]+?)(?<!\\\\)\\]")
}, hi = {
  ...To,
  ...Eo,
  ...Mo,
  ...Fo
}, Po = [
  "em",
  "strong",
  "tail_header",
  "backlash",
  "superscript",
  "subscript",
  "footnote_identifier"
], ds = Object.keys(hi).reduce((a, e) => Po.includes(e) ? a : {
  ...a,
  [e]: hi[e]
}, {}), Bo = (a, e) => {
  if (a.indexOf(e[1]) === -1)
    return -1;
  let t = 0;
  for (let i = 0; i < a.length; i++)
    if (a[i] === "\\")
      i++;
    else if (a[i] === e[0])
      t++;
    else if (a[i] === e[1] && (t--, t < 0))
      return i;
  return -1;
}, Ht = /[!"#$%&'()*+,\-./:;<=>?@\[\]^_`{|}~\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u0AF0\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E42\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC9\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDF3C-\uDF3E]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]/, Do = [
  "align",
  "alt",
  "checked",
  "class",
  "color",
  "dir",
  "disabled",
  "for",
  "height",
  "hidden",
  "href",
  "id",
  "lang",
  "lazyload",
  "rel",
  "spellcheck",
  "src",
  "srcset",
  "start",
  "style",
  "target",
  "title",
  "type",
  "value",
  "width",
  // Used in img
  "data-align"
], Gt = /^\s/, Oo = (a) => {
  if (!/^\d{1,}$/.test(a))
    return "";
  const e = parseInt(a);
  return e >= 0 ? e.toString() : "";
}, mr = (a, e, t) => {
  let i;
  const s = [];
  for (i = 0; i < e; i++) {
    if (s.includes(i))
      continue;
    const r = a.substring(i);
    for (const [, l] of Object.entries(t)) {
      const c = l.exec(r);
      if (c && c[0].length <= e - i && s.push(i + c[0].length - 1), c && c[0].length > e - i)
        return !1;
    }
  }
  return !0;
}, No = (a) => {
  var r;
  const i = (r = new DOMParser().parseFromString(a, "text/html").querySelector("body")) == null ? void 0 : r.firstElementChild;
  if (!i)
    return null;
  const s = {};
  i.tagName === "IMG" && Object.assign(s, {
    title: "",
    src: "",
    alt: ""
  });
  for (const l of i.getAttributeNames()) {
    if (!Do.includes(l))
      continue;
    const c = i.getAttribute(l);
    /width|height/.test(l) && c ? s[l] = Oo(c) : s[l] = c;
  }
  return s;
}, ps = (a = "") => {
  if (a.split(/\s+/).length === 1)
    return {
      src: a.trim(),
      title: ""
    };
  const t = a.replace(/^[^ ]+ +/, "");
  let i = "";
  const s = /^('|")(.*?)\1$/;
  let r = "";
  return t && s.test(t) && (r = t.replace(s, "$2")), r ? i = a.substring(0, a.length - t.length).trim() : i = a.trim(), { src: i, title: r };
}, zo = (a, e, t) => {
  const i = t.charAt(t.length - 1) || `
`, s = a[e.length];
  return !(Gt.test(s) || Ht.test(s) && !(Gt.test(i) || Ht.test(i)) || /_/.test(e) && !(Gt.test(i) || Ht.test(i)));
}, Co = (a, e, t) => {
  const i = a[e - t.length - 1], s = a[e] || `
`;
  return !(Gt.test(i) || Ht.test(i) && !(Gt.test(s) || Ht.test(s)) || /_/.test(t) && !(Gt.test(s) || Ht.test(s)));
}, Io = (a, e, t, i, s) => {
  if (!zo(a, t, i) || !Co(a, e, t))
    return !1;
  const r = t.length, l = a.substring(r, e - r), c = new RegExp(
    ` \\${t.split("").join("\\")}[^\\${t.charAt(0)}]`
  ), m = new RegExp(
    `[^\\${t.charAt(0)}]\\${t.split("").join("\\")}`
  );
  return l.match(c) && !l.match(m) ? !1 : mr(a, e, s);
}, hs = (a) => {
  if (a && typeof a[4] == "string") {
    const e = Bo(a[4], "()");
    if (e > -1) {
      const t = a[0].length - (a[4].length - e);
      a[0] = a[0].substring(0, t);
      const i = a[4].substring(0, e), s = /(\\+)$/.exec(i);
      s ? (a[4] = i.substring(0, i.length - s[1].length), a[5] = s[1]) : (a[4] = i, a[5] = "");
    }
  }
}, Ro = /(?:title|textarea|style|xmp|iframe|noembed|noframes|script|plaintext)/i, Ut = (a, e, t, i = 0, s, r, l) => {
  const c = a, m = [];
  let d = "", y = i;
  const { superSubScript: v, footnote: x } = l, k = () => {
    d && m.push({
      type: "text",
      parent: m,
      raw: d,
      content: d,
      range: {
        start: y,
        end: i
      }
    }), y = i, d = "";
  };
  if (e && i === 0) {
    const M = [
      "header",
      "hr",
      "code_fence",
      "multiple_math"
    ];
    for (const F of M) {
      const O = e[F].exec(a);
      if (O) {
        const w = {
          type: F,
          raw: O[0],
          parent: m,
          marker: O[1],
          content: O[2] || "",
          backlash: O[3] || "",
          range: {
            start: i,
            end: i + O[0].length
          }
        };
        m.push(w), a = a.substring(O[0].length), i = i + O[0].length;
        break;
      }
    }
    const T = e.reference_definition.exec(a);
    if (T && We(T[3])) {
      const F = {
        type: "reference_definition",
        parent: m,
        leftBracket: T[1],
        label: T[2],
        backlash: T[3] || "",
        rightBracket: T[4],
        leftHrefMarker: T[5] || "",
        href: T[6],
        rightHrefMarker: T[7] || "",
        leftTitleSpace: T[8],
        titleMarker: T[9] || "",
        title: T[10] || "",
        rightTitleSpace: T[11] || "",
        raw: T[0],
        range: {
          start: i,
          end: i + T[0].length
        }
      };
      m.push(F), a = a.substring(T[0].length), i = i + T[0].length;
    }
  }
  for (; a.length; ) {
    const M = t.backlash.exec(a);
    if (M) {
      k(), m.push({
        type: "backlash",
        raw: M[1],
        marker: M[1],
        parent: m,
        content: "",
        range: {
          start: i,
          end: i + M[1].length
        }
      }), d += d + M[2], y = i + M[1].length, a = a.substring(M[0].length), i = i + M[0].length;
      continue;
    }
    const T = ["strong", "em"];
    let F;
    for (const q of T) {
      const W = t[q].exec(a);
      if (W && We(W[3])) {
        if (Io(
          a,
          W[0].length,
          W[1],
          d,
          ds
        )) {
          F = !0, k();
          const ke = {
            start: i,
            end: i + W[0].length
          }, re = W[1];
          m.push({
            type: q,
            raw: W[0],
            range: ke,
            marker: re,
            parent: m,
            children: Ut(
              W[2],
              null,
              t,
              i + W[1].length,
              !1,
              r,
              l
            ),
            backlash: W[3]
          }), a = a.substring(W[0].length), i = i + W[0].length;
        }
        break;
      }
    }
    if (F)
      continue;
    const O = ["inline_code", "del", "emoji", "inline_math"];
    for (const q of O) {
      const W = t[q].exec(a);
      if (W && We(W[3])) {
        if (q === "emoji" && !mr(a, W[0].length, ds))
          break;
        F = !0, k();
        const ye = {
          start: i,
          end: i + W[0].length
        }, ke = W[1];
        q === "inline_code" || q === "emoji" || q === "inline_math" ? m.push({
          type: q,
          raw: W[0],
          range: ye,
          marker: ke,
          parent: m,
          content: W[2],
          backlash: W[3]
        }) : m.push({
          type: q,
          raw: W[0],
          range: ye,
          marker: ke,
          parent: m,
          children: Ut(
            W[2],
            null,
            t,
            i + W[1].length,
            !1,
            r,
            l
          ),
          backlash: W[3]
        }), a = a.substring(W[0].length), i = i + W[0].length;
        break;
      }
    }
    if (F)
      continue;
    if (v) {
      const q = t.superscript.exec(a) || t.subscript.exec(a);
      if (q) {
        k(), m.push({
          type: "super_sub_script",
          raw: q[0],
          marker: q[1],
          range: {
            start: i,
            end: i + q[0].length
          },
          parent: m,
          content: q[2]
        }), a = a.substring(q[0].length), i = i + q[0].length;
        continue;
      }
    }
    if (i !== 0 && x) {
      const q = t.footnote_identifier.exec(a);
      if (q) {
        k(), m.push({
          type: "footnote_identifier",
          raw: q[0],
          marker: q[1],
          range: {
            start: i,
            end: i + q[0].length
          },
          parent: m,
          content: q[2]
        }), a = a.substring(q[0].length), i = i + q[0].length;
        continue;
      }
    }
    const w = t.image.exec(a);
    if (hs(w), w && We(w[3]) && We(w[5])) {
      const { src: q, title: W } = ps(w[4]);
      k(), m.push({
        type: "image",
        raw: w[0],
        marker: w[1],
        srcAndTitle: w[4],
        // This `attrs` used for render image.
        attrs: {
          src: q + encodeURI(w[5]),
          title: W,
          alt: w[2] + encodeURI(w[3])
        },
        src: q,
        title: W,
        parent: m,
        range: {
          start: i,
          end: i + w[0].length
        },
        alt: w[2],
        backlash: {
          first: w[3],
          second: w[5]
        }
      }), a = a.substring(w[0].length), i = i + w[0].length;
      continue;
    }
    const f = t.link.exec(a);
    if (hs(f), f && We(f[3]) && We(f[5])) {
      const { src: q, title: W } = ps(f[4]);
      k(), m.push({
        type: "link",
        raw: f[0],
        marker: f[1],
        hrefAndTitle: f[4],
        href: q,
        title: W,
        parent: m,
        anchor: f[2],
        range: {
          start: i,
          end: i + f[0].length
        },
        children: Ut(
          f[2],
          null,
          t,
          i + f[1].length,
          !1,
          r,
          l
        ),
        backlash: {
          first: f[3],
          second: f[5]
        }
      }), a = a.substring(f[0].length), i = i + f[0].length;
      continue;
    }
    const S = t.reference_link.exec(a);
    if (S && r.has(S[3] || S[1]) && We(S[2]) && We(S[4])) {
      k(), m.push({
        type: "reference_link",
        raw: S[0],
        isFullLink: !!S[3],
        parent: m,
        anchor: S[1],
        backlash: {
          first: S[2],
          second: S[4] || ""
        },
        label: S[3] || S[1],
        range: {
          start: i,
          end: i + S[0].length
        },
        children: Ut(
          S[1],
          null,
          t,
          i + 1,
          !1,
          r,
          l
        )
      }), a = a.substring(S[0].length), i = i + S[0].length;
      continue;
    }
    const A = t.reference_image.exec(a);
    if (A && r.has(A[3] || A[1]) && We(A[2]) && We(A[4])) {
      k(), m.push({
        type: "reference_image",
        raw: A[0],
        isFullLink: !!A[3],
        parent: m,
        alt: A[1],
        backlash: {
          first: A[2],
          second: A[4] || ""
        },
        label: A[3] || A[1],
        range: {
          start: i,
          end: i + A[0].length
        }
      }), a = a.substring(A[0].length), i = i + A[0].length;
      continue;
    }
    const E = t.html_escape.exec(a);
    if (E) {
      const q = E[0].length;
      k(), m.push({
        type: "html_escape",
        raw: E[0],
        escapeCharacter: E[1],
        parent: m,
        range: {
          start: i,
          end: i + q
        }
      }), a = a.substring(q), i = i + q;
      continue;
    }
    const P = t.auto_link_extension.exec(a);
    if (P && s && (i === 0 || /[* _~(]{1}/.test(c[i - 1]))) {
      k(), m.push({
        type: "auto_link_extension",
        raw: P[0],
        www: P[1],
        url: P[2],
        email: P[3],
        linkType: P[1] ? "www" : P[2] ? "url" : "email",
        parent: m,
        range: {
          start: i,
          end: i + P[0].length
        }
      }), a = a.substring(P[0].length), i = i + P[0].length;
      continue;
    }
    const R = t.auto_link.exec(a);
    if (R) {
      k(), m.push({
        type: "auto_link",
        raw: R[0],
        href: R[1],
        email: R[2],
        isLink: !!R[1],
        // It is a link or email.
        marker: "<",
        parent: m,
        range: {
          start: i,
          end: i + R[0].length
        }
      }), a = a.substring(R[0].length), i = i + R[0].length;
      continue;
    }
    const B = t.html_tag.exec(a);
    let K;
    if (B && B[1] && !B[3]) {
      const q = B[0].length;
      k(), m.push({
        type: "html_tag",
        raw: B[0],
        tag: "<!---->",
        openTag: B[1],
        parent: m,
        attrs: {},
        range: {
          start: i,
          end: i + q
        }
      }), a = a.substring(q), i = i + q;
      continue;
    }
    if (B && !Ro.test(B[3]) && (K = No(B[0]))) {
      const q = B[3], W = B[0], ye = B[0].length;
      k(), m.push({
        type: "html_tag",
        raw: W,
        tag: q,
        openTag: B[2],
        closeTag: B[5],
        parent: m,
        attrs: K,
        content: B[4],
        children: B[4] ? Ut(
          B[4],
          null,
          t,
          i + B[2].length,
          !1,
          r,
          l
        ) : [],
        range: {
          start: i,
          end: i + ye
        }
      }), a = a.substring(ye), i = i + ye;
      continue;
    }
    const Z = t.soft_line_break.exec(a);
    if (Z) {
      const q = Z[0].length;
      k(), m.push({
        type: "soft_line_break",
        raw: Z[0],
        lineBreak: Z[1],
        isAtEnd: Z.input.length === Z[0].length,
        parent: m,
        range: {
          start: i,
          end: i + q
        }
      }), a = a.substring(q), i += q;
      continue;
    }
    const Q = t.hard_line_break.exec(a);
    if (Q) {
      const q = Q[0].length;
      k(), m.push({
        type: "hard_line_break",
        raw: Q[0],
        spaces: Q[1],
        // The space in hard line break
        lineBreak: Q[2],
        // \n
        isAtEnd: Q.input.length === Q[0].length,
        parent: m,
        range: {
          start: i,
          end: i + q
        }
      }), a = a.substring(q), i += q;
      continue;
    }
    const pe = t.tail_header.exec(a);
    if (pe && s) {
      k(), m.push({
        type: "tail_header",
        raw: pe[1],
        marker: pe[1],
        parent: m,
        range: {
          start: i,
          end: i + pe[1].length
        }
      }), a = a.substring(pe[1].length), i += pe[1].length;
      continue;
    }
    d || (y = i), d += a[0], a = a.substring(1), i++;
  }
  return k(), m;
}, Lo = (a, {
  highlights: e = [],
  hasBeginRules: t = !0,
  labels: i = /* @__PURE__ */ new Map(),
  options: s = {
    superSubScript: !0,
    footnote: !1
  }
} = {}) => {
  const r = Ut(
    a,
    t ? Ao : null,
    hi,
    0,
    !0,
    i,
    s
  ), l = (c) => {
    for (const m of c) {
      for (const d of e) {
        const y = u0(m.range, d);
        y && (m.highlights && Array.isArray(m.highlights) ? m.highlights.push(y) : m.highlights = [y]);
      }
      "children" in m && m.children && Array.isArray(m.children) && l(m.children);
    }
  };
  return e.length && l(r), r;
}, Ml = (a) => {
  let e = "";
  for (const t of a)
    e += t.raw;
  return e;
}, qo = (a) => a && a.tagName === "SPAN" && a.classList.contains("mu-content"), Sa = (a) => {
  if (!a)
    return null;
  do {
    if (a instanceof HTMLElement && qo(a))
      return a;
    a = a.parentNode;
  } while (a);
  return null;
}, ys = (a, e) => a.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_FOLLOWING, Mi = (a, e = []) => {
  if (a.nodeType === Node.TEXT_NODE || e.length === 0)
    return a.textContent;
  let t = "";
  if (Fa(a) && e.some(
    (i) => a.classList && a.classList.contains(i)
  ))
    return t;
  if (a.nodeType === Node.TEXT_NODE)
    t += a.textContent;
  else if (Fa(a) && a.classList.contains(`${Le.MU_INLINE_IMAGE}`)) {
    const i = a.getAttribute("data-raw"), s = a.querySelector(
      `.${Le.MU_IMAGE_CONTAINER}`
    ), r = s.querySelector("img"), l = s.childNodes;
    if (l.length && r)
      for (const c of l)
        c.nodeType === Node.ELEMENT_NODE && c.nodeName === "IMG" ? t += i : c.nodeType === Node.TEXT_NODE && (t += c.textContent);
    else
      t += i;
  } else {
    const i = a.childNodes;
    for (const s of i)
      t += Mi(s, e);
  }
  return t;
}, Ma = (a, e) => {
  let t = 0, i = a;
  if (a === e)
    return t;
  do
    i = i.previousSibling, i && (t += Mi(i, [
      Le.MU_MATH_RENDER,
      Le.MU_RUBY_RENDER
    ]).length);
  while (i);
  return a === e || a.parentNode === e ? t : t + Ma(a.parentNode, e);
};
function yi(a, e) {
  if (a.nodeType === Node.TEXT_NODE)
    return {
      node: a,
      offset: e
    };
  const t = a.childNodes, i = t.length;
  let s, r = 0;
  for (s = 0; s < i; s++) {
    const l = t[s], c = Mi(l, [
      Le.MU_MATH_RENDER,
      Le.MU_RUBY_RENDER
    ]), m = c.length;
    if (/^\n$/.test(c) && s !== i - 1 ? r + m > e : r + m >= e)
      if (Fa(l) && l.classList && l.classList.contains(`${Le.MU_INLINE_IMAGE}`)) {
        const d = l.querySelector(
          `.${Le.MU_IMAGE_CONTAINER}`
        );
        return d.querySelector("img") ? r + m === e ? l.nextElementSibling ? {
          node: l.nextElementSibling,
          offset: 0
        } : {
          node: d,
          offset: 1
        } : r === e && r === 0 ? {
          node: d,
          offset: 0
        } : {
          node: l,
          offset: 0
        } : {
          node: l,
          offset: 0
        };
      } else
        return yi(l, e - r);
    else
      r += m;
  }
  return { node: a, offset: e };
}
function fs(a) {
  const e = Sa(a), t = a.getAttribute("data-raw"), i = Ma(a, e), r = Lo(t)[0];
  return r.range = {
    start: i,
    end: i + t.length
  }, {
    token: r,
    imageId: a.id
  };
}
const Fl = (a) => {
  const e = /\.(jpeg|jpg|png|gif|svg|webp)(?=\?|$)/i, t = /^http(s)?:\/\/([a-z0-9\-._~]+\.[a-z]{2,}|[0-9.]+|localhost|\[[a-f0-9.:]+\])(:[0-9]{1,5})?\/[\S]+/i, i = /^data:image\/[\w+-]+(;[\w-]+=[\w-]+|;base64)*,[a-zA-Z0-9+/]+={0,2}$/, s = e.test(a), r = t.test(a);
  // 已经是 muya-local:// URL，直接返回
  if (a && a.startsWith('muya-local://')) {
    return {
      isUnknownType: !1,
      src: a
    };
  }
  return s ? r ? {
    isUnknownType: !1,
    src: a
  } : {
    isUnknownType: !1,
    src: "file://" + a
  } : r && !s ? {
    isUnknownType: !0,
    src: a
  } : i.test(a) ? {
    isUnknownType: !1,
    src: a
  } : {
    isUnknownType: !1,
    src: ""
  };
}, Pl = async (a, e = !1) => e && !await Uo(a) ? Promise.reject("not an image.") : new Promise((t, i) => {
  const s = new Image();
  s.onload = () => {
    t({
      url: a,
      width: s.width,
      height: s.height
    });
  }, s.onerror = (r) => {
    i(r);
  }, s.src = a;
}), Uo = async (a) => {
  try {
    const e = await fetch(a, { method: "HEAD" }), t = e.headers.get("content-type");
    return !!(t && e.status === 200 && /^image\/(?:jpeg|png|gif|svg\+xml|webp)$/.test(t));
  } catch {
    return !1;
  }
}, Bl = (a) => (a && (Ts && /^(?:[a-zA-Z]:\\|[a-zA-Z]:\/).+/.test(a) ? a = "file:///" + a.replace(/\\/g, "/") : Ts && /^\\\\\?\\.+/.test(a) && (a = "file:///" + a.substring(4).replace(/\\/g, "/"))), a);
class Ho {
  constructor(e) {
    Qe(this, "doc", document);
    Qe(this, "anchorPath", []);
    Qe(this, "anchorBlock", null);
    Qe(this, "focusPath", []);
    Qe(this, "focusBlock", null);
    Qe(this, "anchor", null);
    Qe(this, "focus", null);
    Qe(this, "selectedImage", null);
    Qe(this, "selectInfo", {
      isSelect: !1,
      selection: null
    });
    this.muya = e, this.listenSelectActions();
  }
  /**
   * topOffset is the line counts above cursor, and bottomOffset is line counts bellow cursor.
   * @param {*} paragraph
   */
  static getCursorYOffset(e) {
    const { y: t } = this.getCursorCoords(), { height: i, top: s } = e.getBoundingClientRect(), r = parseFloat(getComputedStyle(e).lineHeight), l = Math.floor((t - s) / r), c = Math.round(
      (s + i - r - t) / r
    );
    return {
      topOffset: l,
      bottomOffset: c
    };
  }
  static getCursorCoords() {
    const e = document.getSelection();
    let t, i = null;
    if (e != null && e.rangeCount && (t = e.getRangeAt(0).cloneRange(), t.getClientRects)) {
      let s = t.getClientRects();
      s.length === 0 && (s = t.startContainer && Fa(t.startContainer) ? t.startContainer.getClientRects() : null), s != null && s.length && (i = s[0]);
    }
    return i;
  }
  // https://stackoverflow.com/questions/1197401/
  // how-can-i-get-the-element-the-caret-is-in-with-javascript-when-using-contenteditable
  // by You
  static getSelectionStart() {
    const e = document.getSelection().anchorNode;
    return e && e.nodeType === Node.TEXT_NODE ? e.parentNode : e;
  }
  get scrollPage() {
    return this.muya.editor.scrollPage;
  }
  get isCollapsed() {
    const { anchorBlock: e, focusBlock: t, anchor: i, focus: s } = this;
    return i === null || s === null ? !1 : e === t && i.offset === s.offset;
  }
  get isSelectionInSameBlock() {
    const { anchorBlock: e, focusBlock: t, anchor: i } = this;
    return i === null || focus === null ? !1 : e === t;
  }
  get direction() {
    const {
      anchor: e,
      focus: t,
      anchorBlock: i,
      focusBlock: s,
      isSelectionInSameBlock: r,
      isCollapsed: l
    } = this;
    if (e === null || t === null || !i || !s || l)
      return "none";
    if (r)
      return e.offset < t.offset ? "forward" : "backward";
    {
      const c = i.domNode, m = s.domNode;
      return ys(c, m) ? "forward" : "backward";
    }
  }
  get type() {
    const { anchorBlock: e, focusBlock: t, isCollapsed: i } = this;
    return !e && !t ? "None" : i ? "Caret" : "Range";
  }
  selectAll() {
    const {
      anchor: e,
      focus: t,
      isSelectionInSameBlock: i,
      anchorBlock: s,
      anchorPath: r,
      scrollPage: l
    } = this;
    if (i && e && t && s && Math.abs(t.offset - e.offset) < s.text.length) {
      const v = {
        anchor: { offset: 0 },
        focus: { offset: s.text.length },
        block: s,
        path: r
      };
      this.setSelection(v);
      return;
    }
    const c = l.firstContentInDescendant(), m = l.lastContentInDescendant(), d = {
      anchor: { offset: 0 },
      focus: { offset: m.text.length },
      anchorBlock: c,
      anchorPath: c.path,
      focusBlock: m,
      focusPath: m.path
    };
    this.setSelection(d);
    const y = this.doc.activeElement;
    y && y.classList.contains("mu-content") && y.blur();
  }
  /**
   * Return the current selection of doc or null if has no selection.
   * @returns
   */
  getSelection() {
    const e = document.getSelection();
    if (!e)
      return null;
    const { anchorNode: t, anchorOffset: i, focusNode: s, focusOffset: r } = e;
    if (!t || !s)
      return null;
    const l = Sa(t), c = Sa(s);
    if (!l || !c)
      return null;
    const m = l[ei], d = c[ei], y = m.path, v = d.path, x = Ma(t, l) + i, k = Ma(s, c) + r, M = { offset: x }, T = { offset: k }, F = m === d && M.offset === T.offset, O = m === d;
    let w = "none", f = "None";
    if (F && (w = "none"), O)
      w = M.offset < T.offset ? "forward" : "backward";
    else {
      const S = m.domNode, A = d.domNode;
      w = ys(S, A) ? "forward" : "backward";
    }
    return f = F ? "Caret" : "Range", {
      anchor: M,
      focus: T,
      anchorBlock: m,
      anchorPath: y,
      focusBlock: d,
      focusPath: v,
      isCollapsed: F,
      isSelectionInSameBlock: O,
      direction: w,
      type: f
    };
  }
  setSelection({
    anchor: e,
    focus: t,
    block: i,
    path: s,
    anchorBlock: r,
    anchorPath: l,
    focusBlock: c,
    focusPath: m
  }) {
    this.anchor = e ?? null, this.focus = t ?? null, this.anchorBlock = r ?? i ?? null, this.anchorPath = l ?? s ?? [], this.focusBlock = c ?? i ?? null, this.focusPath = m ?? s ?? [], this.setCursor();
    const {
      isCollapsed: d,
      isSelectionInSameBlock: y,
      direction: v,
      type: x,
      selectedImage: k
    } = this;
    this.muya.eventCenter.emit("selection-change", {
      anchor: e,
      focus: t,
      anchorBlock: r,
      anchorPath: l,
      focusBlock: c,
      focusPath: m,
      isCollapsed: d,
      isSelectionInSameBlock: y,
      direction: v,
      type: x,
      selectedImage: k
    });
  }
  listenSelectActions() {
    const { eventCenter: e, domNode: t } = this.muya, i = () => {
      this.selectInfo = {
        isSelect: !0,
        selection: null
      };
    }, s = () => {
      this.selectInfo.selection && this.setSelection(this.selectInfo.selection), this.selectInfo = {
        isSelect: !1,
        selection: null
      };
    }, r = (d) => {
      if (!b0(d))
        return;
      const { type: y, shiftKey: v } = d;
      if (y === "mousemove" && !this.selectInfo.isSelect || y === "click" && !v)
        return;
      const x = this.getSelection();
      if (!x)
        return;
      const {
        anchor: k,
        focus: M,
        anchorBlock: T,
        focusBlock: F,
        isSelectionInSameBlock: O,
        direction: w
      } = x;
      if (O)
        return;
      const f = {
        anchor: k,
        focus: M,
        anchorBlock: T,
        focusBlock: F,
        anchorPath: T.path,
        focusPath: F.path
      }, S = T.outMostBlock, A = F.outMostBlock;
      if (/block-quote|code-block|html-block|table|math-block|frontmatter|diagram/.test(
        S.blockName
      )) {
        const E = S.firstContentInDescendant(), P = S.lastContentInDescendant();
        w === "forward" ? (f.anchorBlock = E, f.anchorPath = E.path, f.anchor.offset = 0) : (f.anchorBlock = P, f.anchorPath = P.path, f.anchor.offset = P.text.length);
      }
      if (/block-quote|code-block|html-block|table|math-block|frontmatter|diagram/.test(
        A.blockName
      )) {
        const E = A.firstContentInDescendant(), P = A.lastContentInDescendant();
        w === "forward" ? (f.focusBlock = P, f.focusPath = P.path, f.focus.offset = P.text.length) : (f.focusBlock = E, f.focusPath = E.path, f.focus.offset = 0);
      }
      if (/bullet-list|order-list|task-list/.test(S.blockName)) {
        const E = S.blockName === "task-list" ? "task-list-item" : "list-item", P = T.farthestBlock(E), R = P.firstContentInDescendant(), B = P.lastContentInDescendant();
        w === "forward" ? (f.anchorBlock = R, f.anchorPath = R.path, f.anchor.offset = 0) : (f.anchorBlock = B, f.anchorPath = B.path, f.anchor.offset = B.text.length);
      }
      if (/bullet-list|order-list|task-list/.test(A.blockName)) {
        const E = A.blockName === "task-list" ? "task-list-item" : "list-item", P = F.farthestBlock(E), R = P.firstContentInDescendant(), B = P.lastContentInDescendant();
        w === "forward" ? (f.focusBlock = B, f.focusPath = B.path, f.focus.offset = B.text.length) : (f.focusBlock = R, f.focusPath = R.path, f.focus.offset = 0);
      }
      y === "mousemove" ? this.selectInfo.selection = f : this.setSelection(f);
    }, l = () => {
      this.selectedImage = null;
    }, c = (d) => {
      const { target: y } = d, v = y == null ? void 0 : y.closest(
        `.${Le.MU_INLINE_IMAGE}`
      );
      if (this.selectedImage = null, v)
        return this.handleClickInlineImage(d, v);
    }, m = (d) => {
      if (!f0(d))
        return;
      const { key: y } = d, { selectedImage: v } = this;
      if (v && /Backspace|Enter/.test(y)) {
        d.preventDefault();
        const { block: x, ...k } = v;
        x.deleteImage(k), this.selectedImage = null;
      }
    };
    e.attachDOMEvent(t, "mousedown", i), e.attachDOMEvent(t, "mousemove", r), e.attachDOMEvent(t, "mouseup", s), e.attachDOMEvent(t, "mouseleave", s), e.attachDOMEvent(t, "click", r), e.attachDOMEvent(t, "click", c), e.attachDOMEvent(document, "click", l), e.attachDOMEvent(document, "keydown", m);
  }
  // Handle click inline image.
  handleClickInlineImage(e, t) {
    var d;
    e.preventDefault(), e.stopPropagation();
    const { eventCenter: i } = this.muya, s = fs(t), { target: r } = e, l = r.closest(
      ".mu-image-icon-close"
    ), c = Sa(r);
    if (!c)
      return;
    const m = c[ei];
    if (l) {
      m.deleteImage(s);
      return;
    }
    if ((r == null ? void 0 : r.tagName) === "IMG") {
      const y = (d = t.querySelector(`.${Le.MU_IMAGE_CONTAINER}`)) == null ? void 0 : d.getBoundingClientRect(), v = {
        getBoundingClientRect: () => y,
        width: t.offsetWidth,
        height: t.offsetHeight
      };
      i.emit("muya-image-toolbar", {
        block: m,
        reference: v,
        imageInfo: s
      });
      const x = `#${s.imageId}`, k = document.querySelector(
        `${x} .${Le.MU_IMAGE_CONTAINER}`
      );
      i.emit("muya-transformer", {
        block: m,
        reference: k,
        imageInfo: s
      }), this.selectedImage = Object.assign({}, s, {
        block: m
      }), this.muya.editor.activeContentBlock = null, this.setSelection({
        anchor: null,
        focus: null
      });
      return;
    }
    if (t.classList.contains(Le.MU_EMPTY_IMAGE) || t.classList.contains(Le.MU_IMAGE_FAIL)) {
      const y = t.getBoundingClientRect(), v = {
        getBoundingClientRect: () => y,
        width: t.offsetWidth,
        height: t.offsetHeight
      }, x = fs(t);
      i.emit("muya-image-selector", {
        block: m,
        reference: v,
        imageInfo: x
      });
    }
  }
  selectRange(e) {
    const t = this.doc.getSelection();
    t && (t.removeAllRanges(), t.addRange(e));
  }
  select(e, t, i, s) {
    const r = this.doc.createRange();
    return r.setStart(e, t), i && typeof s == "number" ? r.setEnd(i, s) : r.collapse(!0), this.selectRange(r), r;
  }
  setFocus(e, t) {
    const i = this.doc.getSelection();
    i && i.extend(e, t);
  }
  setCursor() {
    const {
      anchor: e,
      focus: t,
      anchorBlock: i,
      anchorPath: s,
      focusBlock: r,
      focusPath: l,
      scrollPage: c
    } = this;
    if (!e || !t) {
      const M = this.doc.getSelection();
      M && M.removeAllRanges();
      return;
    }
    const m = i ? i.domNode : c.queryBlock(s), d = r ? r.domNode : c.queryBlock(l), { node: y, offset: v } = yi(
      m,
      e.offset
    ), { node: x, offset: k } = yi(
      d,
      t.offset
    );
    this.select(y, v), this.setFocus(x, k);
  }
}
/*! @license DOMPurify 3.0.6 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.0.6/LICENSE */
const {
  entries: gr,
  setPrototypeOf: bs,
  isFrozen: Go,
  getPrototypeOf: $o,
  getOwnPropertyDescriptor: ur
} = Object;
let {
  freeze: Fe,
  seal: Xe,
  create: dr
} = Object, {
  apply: fi,
  construct: bi
} = typeof Reflect < "u" && Reflect;
Fe || (Fe = function(e) {
  return e;
});
Xe || (Xe = function(e) {
  return e;
});
fi || (fi = function(e, t, i) {
  return e.apply(t, i);
});
bi || (bi = function(e, t) {
  return new e(...t);
});
const da = Ge(Array.prototype.forEach), vs = Ge(Array.prototype.pop), Zt = Ge(Array.prototype.push), Aa = Ge(String.prototype.toLowerCase), Xa = Ge(String.prototype.toString), Vo = Ge(String.prototype.match), Jt = Ge(String.prototype.replace), Wo = Ge(String.prototype.indexOf), Yo = Ge(String.prototype.trim), Ie = Ge(RegExp.prototype.test), Qt = Xo(TypeError);
function Ge(a) {
  return function(e) {
    for (var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), s = 1; s < t; s++)
      i[s - 1] = arguments[s];
    return fi(a, e, i);
  };
}
function Xo(a) {
  return function() {
    for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
      t[i] = arguments[i];
    return bi(a, t);
  };
}
function ee(a, e) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Aa;
  bs && bs(a, null);
  let i = e.length;
  for (; i--; ) {
    let s = e[i];
    if (typeof s == "string") {
      const r = t(s);
      r !== s && (Go(e) || (e[i] = r), s = r);
    }
    a[s] = !0;
  }
  return a;
}
function Lt(a) {
  const e = dr(null);
  for (const [t, i] of gr(a))
    ur(a, t) !== void 0 && (e[t] = i);
  return e;
}
function pa(a, e) {
  for (; a !== null; ) {
    const i = ur(a, e);
    if (i) {
      if (i.get)
        return Ge(i.get);
      if (typeof i.value == "function")
        return Ge(i.value);
    }
    a = $o(a);
  }
  function t(i) {
    return console.warn("fallback value for", i), null;
  }
  return t;
}
const ws = Fe(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Ka = Fe(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), Za = Fe(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Ko = Fe(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), Ja = Fe(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), Zo = Fe(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), js = Fe(["#text"]), ks = Fe(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"]), Qa = Fe(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), _s = Fe(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), ha = Fe(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), Jo = Xe(/\{\{[\w\W]*|[\w\W]*\}\}/gm), Qo = Xe(/<%[\w\W]*|[\w\W]*%>/gm), e0 = Xe(/\${[\w\W]*}/gm), t0 = Xe(/^data-[\-\w.\u00B7-\uFFFF]/), a0 = Xe(/^aria-[\-\w]+$/), pr = Xe(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), i0 = Xe(/^(?:\w+script|data):/i), s0 = Xe(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), hr = Xe(/^html$/i);
var xs = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  MUSTACHE_EXPR: Jo,
  ERB_EXPR: Qo,
  TMPLIT_EXPR: e0,
  DATA_ATTR: t0,
  ARIA_ATTR: a0,
  IS_ALLOWED_URI: pr,
  IS_SCRIPT_OR_DATA: i0,
  ATTR_WHITESPACE: s0,
  DOCTYPE_NAME: hr
});
const r0 = function() {
  return typeof window > "u" ? null : window;
}, o0 = function(e, t) {
  if (typeof e != "object" || typeof e.createPolicy != "function")
    return null;
  let i = null;
  const s = "data-tt-policy-suffix";
  t && t.hasAttribute(s) && (i = t.getAttribute(s));
  const r = "dompurify" + (i ? "#" + i : "");
  try {
    return e.createPolicy(r, {
      createHTML(l) {
        return l;
      },
      createScriptURL(l) {
        return l;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + r + " could not be created."), null;
  }
};
function yr() {
  let a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : r0();
  const e = (G) => yr(G);
  if (e.version = "3.0.6", e.removed = [], !a || !a.document || a.document.nodeType !== 9)
    return e.isSupported = !1, e;
  let {
    document: t
  } = a;
  const i = t, s = i.currentScript, {
    DocumentFragment: r,
    HTMLTemplateElement: l,
    Node: c,
    Element: m,
    NodeFilter: d,
    NamedNodeMap: y = a.NamedNodeMap || a.MozNamedAttrMap,
    HTMLFormElement: v,
    DOMParser: x,
    trustedTypes: k
  } = a, M = m.prototype, T = pa(M, "cloneNode"), F = pa(M, "nextSibling"), O = pa(M, "childNodes"), w = pa(M, "parentNode");
  if (typeof l == "function") {
    const G = t.createElement("template");
    G.content && G.content.ownerDocument && (t = G.content.ownerDocument);
  }
  let f, S = "";
  const {
    implementation: A,
    createNodeIterator: E,
    createDocumentFragment: P,
    getElementsByTagName: R
  } = t, {
    importNode: B
  } = i;
  let K = {};
  e.isSupported = typeof gr == "function" && typeof w == "function" && A && A.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: Z,
    ERB_EXPR: Q,
    TMPLIT_EXPR: pe,
    DATA_ATTR: q,
    ARIA_ATTR: W,
    IS_SCRIPT_OR_DATA: ye,
    ATTR_WHITESPACE: ke
  } = xs;
  let {
    IS_ALLOWED_URI: re
  } = xs, te = null;
  const ve = ee({}, [...ws, ...Ka, ...Za, ...Ja, ...js]);
  let ie = null;
  const oe = ee({}, [...ks, ...Qa, ..._s, ...ha]);
  let se = Object.seal(dr(null, {
    tagNameCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    attributeNameCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    allowCustomizedBuiltInElements: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: !1
    }
  })), we = null, _e = null, Ke = !0, Ae = !0, Ce = !1, Ze = !0, Te = !1, Be = !1, xt = !1, ot = !1, Je = !1, St = !1, At = !1, Ot = !0, Tt = !1;
  const Nt = "user-content-";
  let Ua = !0, Xt = !1, zt = {}, Ct = null;
  const Zi = ee({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let Ji = null;
  const Qi = ee({}, ["audio", "video", "img", "source", "image", "track"]);
  let Ha = null;
  const es = ee({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), ma = "http://www.w3.org/1998/Math/MathML", ga = "http://www.w3.org/2000/svg", nt = "http://www.w3.org/1999/xhtml";
  let It = nt, Ga = !1, $a = null;
  const po = ee({}, [ma, ga, nt], Xa);
  let Et = null;
  const ho = ["application/xhtml+xml", "text/html"], yo = "text/html";
  let je = null, Rt = null;
  const fo = t.createElement("form"), ts = function(j) {
    return j instanceof RegExp || j instanceof Function;
  }, Va = function() {
    let j = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!(Rt && Rt === j)) {
      if ((!j || typeof j != "object") && (j = {}), j = Lt(j), Et = // eslint-disable-next-line unicorn/prefer-includes
      ho.indexOf(j.PARSER_MEDIA_TYPE) === -1 ? Et = yo : Et = j.PARSER_MEDIA_TYPE, je = Et === "application/xhtml+xml" ? Xa : Aa, te = "ALLOWED_TAGS" in j ? ee({}, j.ALLOWED_TAGS, je) : ve, ie = "ALLOWED_ATTR" in j ? ee({}, j.ALLOWED_ATTR, je) : oe, $a = "ALLOWED_NAMESPACES" in j ? ee({}, j.ALLOWED_NAMESPACES, Xa) : po, Ha = "ADD_URI_SAFE_ATTR" in j ? ee(
        Lt(es),
        // eslint-disable-line indent
        j.ADD_URI_SAFE_ATTR,
        // eslint-disable-line indent
        je
        // eslint-disable-line indent
      ) : es, Ji = "ADD_DATA_URI_TAGS" in j ? ee(
        Lt(Qi),
        // eslint-disable-line indent
        j.ADD_DATA_URI_TAGS,
        // eslint-disable-line indent
        je
        // eslint-disable-line indent
      ) : Qi, Ct = "FORBID_CONTENTS" in j ? ee({}, j.FORBID_CONTENTS, je) : Zi, we = "FORBID_TAGS" in j ? ee({}, j.FORBID_TAGS, je) : {}, _e = "FORBID_ATTR" in j ? ee({}, j.FORBID_ATTR, je) : {}, zt = "USE_PROFILES" in j ? j.USE_PROFILES : !1, Ke = j.ALLOW_ARIA_ATTR !== !1, Ae = j.ALLOW_DATA_ATTR !== !1, Ce = j.ALLOW_UNKNOWN_PROTOCOLS || !1, Ze = j.ALLOW_SELF_CLOSE_IN_ATTR !== !1, Te = j.SAFE_FOR_TEMPLATES || !1, Be = j.WHOLE_DOCUMENT || !1, Je = j.RETURN_DOM || !1, St = j.RETURN_DOM_FRAGMENT || !1, At = j.RETURN_TRUSTED_TYPE || !1, ot = j.FORCE_BODY || !1, Ot = j.SANITIZE_DOM !== !1, Tt = j.SANITIZE_NAMED_PROPS || !1, Ua = j.KEEP_CONTENT !== !1, Xt = j.IN_PLACE || !1, re = j.ALLOWED_URI_REGEXP || pr, It = j.NAMESPACE || nt, se = j.CUSTOM_ELEMENT_HANDLING || {}, j.CUSTOM_ELEMENT_HANDLING && ts(j.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (se.tagNameCheck = j.CUSTOM_ELEMENT_HANDLING.tagNameCheck), j.CUSTOM_ELEMENT_HANDLING && ts(j.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (se.attributeNameCheck = j.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), j.CUSTOM_ELEMENT_HANDLING && typeof j.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (se.allowCustomizedBuiltInElements = j.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), Te && (Ae = !1), St && (Je = !0), zt && (te = ee({}, [...js]), ie = [], zt.html === !0 && (ee(te, ws), ee(ie, ks)), zt.svg === !0 && (ee(te, Ka), ee(ie, Qa), ee(ie, ha)), zt.svgFilters === !0 && (ee(te, Za), ee(ie, Qa), ee(ie, ha)), zt.mathMl === !0 && (ee(te, Ja), ee(ie, _s), ee(ie, ha))), j.ADD_TAGS && (te === ve && (te = Lt(te)), ee(te, j.ADD_TAGS, je)), j.ADD_ATTR && (ie === oe && (ie = Lt(ie)), ee(ie, j.ADD_ATTR, je)), j.ADD_URI_SAFE_ATTR && ee(Ha, j.ADD_URI_SAFE_ATTR, je), j.FORBID_CONTENTS && (Ct === Zi && (Ct = Lt(Ct)), ee(Ct, j.FORBID_CONTENTS, je)), Ua && (te["#text"] = !0), Be && ee(te, ["html", "head", "body"]), te.table && (ee(te, ["tbody"]), delete we.tbody), j.TRUSTED_TYPES_POLICY) {
        if (typeof j.TRUSTED_TYPES_POLICY.createHTML != "function")
          throw Qt('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof j.TRUSTED_TYPES_POLICY.createScriptURL != "function")
          throw Qt('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        f = j.TRUSTED_TYPES_POLICY, S = f.createHTML("");
      } else
        f === void 0 && (f = o0(k, s)), f !== null && typeof S == "string" && (S = f.createHTML(""));
      Fe && Fe(j), Rt = j;
    }
  }, as = ee({}, ["mi", "mo", "mn", "ms", "mtext"]), is = ee({}, ["foreignobject", "desc", "title", "annotation-xml"]), bo = ee({}, ["title", "style", "font", "a", "script"]), ua = ee({}, Ka);
  ee(ua, Za), ee(ua, Ko);
  const Wa = ee({}, Ja);
  ee(Wa, Zo);
  const vo = function(j) {
    let C = w(j);
    (!C || !C.tagName) && (C = {
      namespaceURI: It,
      tagName: "template"
    });
    const H = Aa(j.tagName), le = Aa(C.tagName);
    return $a[j.namespaceURI] ? j.namespaceURI === ga ? C.namespaceURI === nt ? H === "svg" : C.namespaceURI === ma ? H === "svg" && (le === "annotation-xml" || as[le]) : !!ua[H] : j.namespaceURI === ma ? C.namespaceURI === nt ? H === "math" : C.namespaceURI === ga ? H === "math" && is[le] : !!Wa[H] : j.namespaceURI === nt ? C.namespaceURI === ga && !is[le] || C.namespaceURI === ma && !as[le] ? !1 : !Wa[H] && (bo[H] || !ua[H]) : !!(Et === "application/xhtml+xml" && $a[j.namespaceURI]) : !1;
  }, Mt = function(j) {
    Zt(e.removed, {
      element: j
    });
    try {
      j.parentNode.removeChild(j);
    } catch {
      j.remove();
    }
  }, Ya = function(j, C) {
    try {
      Zt(e.removed, {
        attribute: C.getAttributeNode(j),
        from: C
      });
    } catch {
      Zt(e.removed, {
        attribute: null,
        from: C
      });
    }
    if (C.removeAttribute(j), j === "is" && !ie[j])
      if (Je || St)
        try {
          Mt(C);
        } catch {
        }
      else
        try {
          C.setAttribute(j, "");
        } catch {
        }
  }, ss = function(j) {
    let C = null, H = null;
    if (ot)
      j = "<remove></remove>" + j;
    else {
      const Se = Vo(j, /^[\r\n\t ]+/);
      H = Se && Se[0];
    }
    Et === "application/xhtml+xml" && It === nt && (j = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + j + "</body></html>");
    const le = f ? f.createHTML(j) : j;
    if (It === nt)
      try {
        C = new x().parseFromString(le, Et);
      } catch {
      }
    if (!C || !C.documentElement) {
      C = A.createDocument(It, "template", null);
      try {
        C.documentElement.innerHTML = Ga ? S : le;
      } catch {
      }
    }
    const xe = C.body || C.documentElement;
    return j && H && xe.insertBefore(t.createTextNode(H), xe.childNodes[0] || null), It === nt ? R.call(C, Be ? "html" : "body")[0] : Be ? C.documentElement : xe;
  }, rs = function(j) {
    return E.call(
      j.ownerDocument || j,
      j,
      // eslint-disable-next-line no-bitwise
      d.SHOW_ELEMENT | d.SHOW_COMMENT | d.SHOW_TEXT,
      null
    );
  }, wo = function(j) {
    return j instanceof v && (typeof j.nodeName != "string" || typeof j.textContent != "string" || typeof j.removeChild != "function" || !(j.attributes instanceof y) || typeof j.removeAttribute != "function" || typeof j.setAttribute != "function" || typeof j.namespaceURI != "string" || typeof j.insertBefore != "function" || typeof j.hasChildNodes != "function");
  }, os = function(j) {
    return typeof c == "function" && j instanceof c;
  }, lt = function(j, C, H) {
    K[j] && da(K[j], (le) => {
      le.call(e, C, H, Rt);
    });
  }, ns = function(j) {
    let C = null;
    if (lt("beforeSanitizeElements", j, null), wo(j))
      return Mt(j), !0;
    const H = je(j.nodeName);
    if (lt("uponSanitizeElement", j, {
      tagName: H,
      allowedTags: te
    }), j.hasChildNodes() && !os(j.firstElementChild) && Ie(/<[/\w]/g, j.innerHTML) && Ie(/<[/\w]/g, j.textContent))
      return Mt(j), !0;
    if (!te[H] || we[H]) {
      if (!we[H] && cs(H) && (se.tagNameCheck instanceof RegExp && Ie(se.tagNameCheck, H) || se.tagNameCheck instanceof Function && se.tagNameCheck(H)))
        return !1;
      if (Ua && !Ct[H]) {
        const le = w(j) || j.parentNode, xe = O(j) || j.childNodes;
        if (xe && le) {
          const Se = xe.length;
          for (let De = Se - 1; De >= 0; --De)
            le.insertBefore(T(xe[De], !0), F(j));
        }
      }
      return Mt(j), !0;
    }
    return j instanceof m && !vo(j) || (H === "noscript" || H === "noembed" || H === "noframes") && Ie(/<\/no(script|embed|frames)/i, j.innerHTML) ? (Mt(j), !0) : (Te && j.nodeType === 3 && (C = j.textContent, da([Z, Q, pe], (le) => {
      C = Jt(C, le, " ");
    }), j.textContent !== C && (Zt(e.removed, {
      element: j.cloneNode()
    }), j.textContent = C)), lt("afterSanitizeElements", j, null), !1);
  }, ls = function(j, C, H) {
    if (Ot && (C === "id" || C === "name") && (H in t || H in fo))
      return !1;
    if (!(Ae && !_e[C] && Ie(q, C))) {
      if (!(Ke && Ie(W, C))) {
        if (!ie[C] || _e[C]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(cs(j) && (se.tagNameCheck instanceof RegExp && Ie(se.tagNameCheck, j) || se.tagNameCheck instanceof Function && se.tagNameCheck(j)) && (se.attributeNameCheck instanceof RegExp && Ie(se.attributeNameCheck, C) || se.attributeNameCheck instanceof Function && se.attributeNameCheck(C)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            C === "is" && se.allowCustomizedBuiltInElements && (se.tagNameCheck instanceof RegExp && Ie(se.tagNameCheck, H) || se.tagNameCheck instanceof Function && se.tagNameCheck(H)))
          )
            return !1;
        } else if (!Ha[C]) {
          if (!Ie(re, Jt(H, ke, ""))) {
            if (!((C === "src" || C === "xlink:href" || C === "href") && j !== "script" && Wo(H, "data:") === 0 && Ji[j])) {
              if (!(Ce && !Ie(ye, Jt(H, ke, "")))) {
                if (H)
                  return !1;
              }
            }
          }
        }
      }
    }
    return !0;
  }, cs = function(j) {
    return j.indexOf("-") > 0;
  }, ms = function(j) {
    lt("beforeSanitizeAttributes", j, null);
    const {
      attributes: C
    } = j;
    if (!C)
      return;
    const H = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: ie
    };
    let le = C.length;
    for (; le--; ) {
      const xe = C[le], {
        name: Se,
        namespaceURI: De,
        value: Ft
      } = xe, Kt = je(Se);
      let Oe = Se === "value" ? Ft : Yo(Ft);
      if (H.attrName = Kt, H.attrValue = Oe, H.keepAttr = !0, H.forceKeepAttr = void 0, lt("uponSanitizeAttribute", j, H), Oe = H.attrValue, H.forceKeepAttr || (Ya(Se, j), !H.keepAttr))
        continue;
      if (!Ze && Ie(/\/>/i, Oe)) {
        Ya(Se, j);
        continue;
      }
      Te && da([Z, Q, pe], (us) => {
        Oe = Jt(Oe, us, " ");
      });
      const gs = je(j.nodeName);
      if (ls(gs, Kt, Oe)) {
        if (Tt && (Kt === "id" || Kt === "name") && (Ya(Se, j), Oe = Nt + Oe), f && typeof k == "object" && typeof k.getAttributeType == "function" && !De)
          switch (k.getAttributeType(gs, Kt)) {
            case "TrustedHTML": {
              Oe = f.createHTML(Oe);
              break;
            }
            case "TrustedScriptURL": {
              Oe = f.createScriptURL(Oe);
              break;
            }
          }
        try {
          De ? j.setAttributeNS(De, Se, Oe) : j.setAttribute(Se, Oe), vs(e.removed);
        } catch {
        }
      }
    }
    lt("afterSanitizeAttributes", j, null);
  }, jo = function G(j) {
    let C = null;
    const H = rs(j);
    for (lt("beforeSanitizeShadowDOM", j, null); C = H.nextNode(); )
      lt("uponSanitizeShadowNode", C, null), !ns(C) && (C.content instanceof r && G(C.content), ms(C));
    lt("afterSanitizeShadowDOM", j, null);
  };
  return e.sanitize = function(G) {
    let j = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, C = null, H = null, le = null, xe = null;
    if (Ga = !G, Ga && (G = "<!-->"), typeof G != "string" && !os(G))
      if (typeof G.toString == "function") {
        if (G = G.toString(), typeof G != "string")
          throw Qt("dirty is not a string, aborting");
      } else
        throw Qt("toString is not a function");
    if (!e.isSupported)
      return G;
    if (xt || Va(j), e.removed = [], typeof G == "string" && (Xt = !1), Xt) {
      if (G.nodeName) {
        const Ft = je(G.nodeName);
        if (!te[Ft] || we[Ft])
          throw Qt("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (G instanceof c)
      C = ss("<!---->"), H = C.ownerDocument.importNode(G, !0), H.nodeType === 1 && H.nodeName === "BODY" || H.nodeName === "HTML" ? C = H : C.appendChild(H);
    else {
      if (!Je && !Te && !Be && // eslint-disable-next-line unicorn/prefer-includes
      G.indexOf("<") === -1)
        return f && At ? f.createHTML(G) : G;
      if (C = ss(G), !C)
        return Je ? null : At ? S : "";
    }
    C && ot && Mt(C.firstChild);
    const Se = rs(Xt ? G : C);
    for (; le = Se.nextNode(); )
      ns(le) || (le.content instanceof r && jo(le.content), ms(le));
    if (Xt)
      return G;
    if (Je) {
      if (St)
        for (xe = P.call(C.ownerDocument); C.firstChild; )
          xe.appendChild(C.firstChild);
      else
        xe = C;
      return (ie.shadowroot || ie.shadowrootmode) && (xe = B.call(i, xe, !0)), xe;
    }
    let De = Be ? C.outerHTML : C.innerHTML;
    return Be && te["!doctype"] && C.ownerDocument && C.ownerDocument.doctype && C.ownerDocument.doctype.name && Ie(hr, C.ownerDocument.doctype.name) && (De = "<!DOCTYPE " + C.ownerDocument.doctype.name + `>
` + De), Te && da([Z, Q, pe], (Ft) => {
      De = Jt(De, Ft, " ");
    }), f && At ? f.createHTML(De) : De;
  }, e.setConfig = function() {
    let G = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Va(G), xt = !0;
  }, e.clearConfig = function() {
    Rt = null, xt = !1;
  }, e.isValidAttribute = function(G, j, C) {
    Rt || Va({});
    const H = je(G), le = je(j);
    return ls(H, le, C);
  }, e.addHook = function(G, j) {
    typeof j == "function" && (K[G] = K[G] || [], Zt(K[G], j));
  }, e.removeHook = function(G) {
    if (K[G])
      return vs(K[G]);
  }, e.removeHooks = function(G) {
    K[G] && (K[G] = []);
  }, e.removeAllHooks = function() {
    K = {};
  }, e;
}
var n0 = yr();
const { sanitize: Ss, isValidAttribute: Dl } = n0(), l0 = function* () {
  let a = 0;
  for (; ; )
    yield a++;
}, c0 = "mu-", m0 = l0(), g0 = () => `${c0}${m0.next().value}`, Ol = () => `${g0()}-${(+/* @__PURE__ */ new Date()).toString(32)}`, Nl = () => {
}, zl = (a) => a, Cl = (a) => Math.abs(a) % 2 === 0, We = (a = "") => a.length % 2 === 0, Il = (a) => a.replace(/_([a-z])/g, (e, t) => t.toUpperCase()), Rl = (a, e) => !(a[1] < e[0] || e[1] < a[0]), u0 = ({ start: a, end: e }, { start: t, end: i, active: s }) => e <= t || i <= a ? null : t < a ? {
  start: a,
  end: e < i ? e : i,
  active: s
} : {
  start: t,
  end: e < i ? e : i,
  active: s
}, Ll = (a, e = 50) => {
  let t, i, s, r = null, l = 0;
  const c = () => {
    l = Date.now(), r = null, s = a.apply(t, i), r || (t = i = null);
  };
  return function() {
    const m = Date.now(), d = e - (m - l);
    return t = this, i = arguments, d <= 0 || d > e ? (r && (clearTimeout(r), r = null), l = m, s = a.apply(t, i), r || (t = i = null)) : r || (r = setTimeout(c, d)), s;
  };
}, ql = (a) => structuredClone(a), vi = (a) => a.replace(
  /[&<>'"]/g,
  (e) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "'": "&#39;",
    '"': "&quot;"
  })[e] || e
), Ul = (a) => a.replace(
  /(?:&amp;|&lt;|&gt;|&quot;|&#39;)/g,
  (e) => ({
    "&amp;": "&",
    "&lt;": "<",
    "&gt;": ">",
    "&#39;": "'",
    "&quot;": '"'
  })[e] || e
), d0 = (a) => a.replace(
  /(<(style|script|title)[^<>]*>)([\s\S]*?)(<\/\2>)/g,
  (e, t, i, s, r) => `${vi(t)}${s}${vi(r)}`
), p0 = (a) => a.reduce((e, t) => {
  const i = t.toLowerCase().replace(/_/g, "-");
  return Object.assign(e, { [t]: i });
}, {}), h0 = (a) => a.reduce((e, t) => Object.assign(e, { [t]: t }), {}), Hl = (a, e, t) => Ss(t ? vi(a) : d0(a), e);
function y0(a) {
  return [...new Intl.Segmenter().segment(a)].length;
}
function Gl(a) {
  const e = [];
  for (const i of a)
    switch (i[0]) {
      case -1:
        e.push({ d: i[1] });
        break;
      case 0:
        e.push(y0(i[1]));
        break;
      case 1:
        e.push(i[1]);
        break;
    }
  let t = e[e.length - 1];
  for (; typeof t == "number"; )
    e.pop(), t = e[e.length - 1];
  return e;
}
const $l = () => {
  const a = Ho.getCursorCoords();
  return a ? {
    getBoundingClientRect() {
      return a;
    },
    clientWidth: a.width,
    clientHeight: a.height
  } : null;
}, Vl = (a, e, t) => {
  var i;
  if (((i = e.parent) == null ? void 0 : i.blockName) === "atx-heading" && t.key === S0.ArrowDown) {
    const s = /^\s{0,3}(?:#{1,6})(?:\s{1,}|$)/.exec(e.text);
    if (s)
      return s[0].length;
  }
  return a;
}, Wl = (a, e) => {
  const { clientY: t } = a, { top: i, height: s } = e;
  return t - i > s / 2 ? "down" : "up";
}, Yl = (a) => a && (a.p != null || a.r !== void 0), Xl = () => {
  const a = {}, e = new Promise((t, i) => {
    a.resolve = t, a.reject = i;
  });
  return a.promise = e, a;
}, Kl = (...a) => (e) => {
  for (const t of a)
    Object.keys(t).forEach((i) => {
      Object.defineProperty(
        e.prototype,
        i,
        Object.getOwnPropertyDescriptor(t, i) || /* @__PURE__ */ Object.create(null)
      );
    });
}, Zl = (...a) => (e) => {
  a.forEach((t) => {
    Object.getOwnPropertyNames(t.prototype).forEach((i) => {
      i !== "constructor" && Object.defineProperty(
        e.prototype,
        i,
        Object.getOwnPropertyDescriptor(t.prototype, i) || /* @__PURE__ */ Object.create(null)
      );
    });
  });
};
function f0(a) {
  return "key" in a;
}
function b0(a) {
  return "x" in a;
}
function Jl(a) {
  return "inputType" in a;
}
function Fa(a) {
  return a.nodeType === Node.ELEMENT_NODE;
}
var As = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Fi(a) {
  return a && a.__esModule && Object.prototype.hasOwnProperty.call(a, "default") ? a.default : a;
}
function Ql(a) {
  if (a.__esModule)
    return a;
  var e = a.default;
  if (typeof e == "function") {
    var t = function i() {
      return this instanceof i ? Reflect.construct(e, arguments, this.constructor) : e.apply(this, arguments);
    };
    t.prototype = e.prototype;
  } else
    t = {};
  return Object.defineProperty(t, "__esModule", { value: !0 }), Object.keys(a).forEach(function(i) {
    var s = Object.getOwnPropertyDescriptor(a, i);
    Object.defineProperty(t, i, s.get ? s : {
      enumerable: !0,
      get: function() {
        return a[i];
      }
    });
  }), t;
}
const v0 = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "math",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rb",
  "rp",
  "rt",
  "rtc",
  "ruby",
  "s",
  "samp",
  "script",
  "search",
  "section",
  "select",
  "slot",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "svg",
  "table",
  "tbody",
  "td",
  "template",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr"
];
var w0 = v0;
const j0 = /* @__PURE__ */ Fi(w0), k0 = [
  "area",
  "base",
  "br",
  "col",
  "embed",
  "hr",
  "img",
  "input",
  "link",
  "menuitem",
  "meta",
  "param",
  "source",
  "track",
  "wbr"
];
var _0 = k0;
const x0 = /* @__PURE__ */ Fi(_0), ec = x0, tc = j0, ei = "__MUYA_BLOCK__", ac = {
  em: "*",
  inline_code: "`",
  strong: "**",
  del: "~~",
  inline_math: "$"
}, ic = {
  u: {
    open: "<u>",
    close: "</u>"
  },
  sub: {
    open: "<sub>",
    close: "</sub>"
  },
  sup: {
    open: "<sup>",
    close: "</sup>"
  },
  mark: {
    open: "<mark>",
    close: "</mark>"
  }
}, sc = [
  "strong",
  "em",
  "del",
  "inline_code",
  "link",
  "image",
  "inline_math"
], rc = {
  name: "paragraph",
  text: "paragraph example"
}, oc = {
  name: "thematic-break",
  text: "---"
}, S0 = h0([
  "Enter",
  "Backspace",
  "Space",
  "Delete",
  "ArrowUp",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "Tab",
  "Escape"
]), Le = p0([
  "MU_EDITOR",
  "MU_ACTIVE",
  "MU_AUTO_LINK",
  "MU_AUTO_LINK_EXTENSION",
  "MU_BACKLASH",
  "MU_BUG",
  "MU_BULLET_LIST",
  "MU_BULLET_LIST_ITEM",
  "MU_CHECKBOX_CHECKED",
  "MU_CONTAINER_BLOCK",
  "MU_CONTAINER_PREVIEW",
  "MU_CONTAINER_ICON",
  "MU_COPY_REMOVE",
  "MU_DISABLE_HTML_RENDER",
  "MU_EMOJI_MARKED_TEXT",
  "MU_EMOJI_MARKER",
  "MU_EMPTY",
  "MU_FENCE_CODE",
  "MU_FOCUS_MODE",
  "MU_FRONT_MATTER",
  "MU_FRONT_ICON",
  "MU_GRAY",
  "MU_HARD_LINE_BREAK",
  "MU_HARD_LINE_BREAK_SPACE",
  "MU_LINE_END",
  "MU_HEADER_TIGHT_SPACE",
  "MU_HIDE",
  "MU_HIGHLIGHT",
  "MU_HTML_BLOCK",
  "MU_HTML_ESCAPE",
  "MU_HTML_PREVIEW",
  "MU_HTML_TAG",
  "MU_IMAGE_FAIL",
  "MU_IMAGE_BUTTONS",
  "MU_IMAGE_LOADING",
  "MU_EMPTY_IMAGE",
  "MU_IMAGE_MARKED_TEXT",
  "MU_IMAGE_SRC",
  "MU_IMAGE_CONTAINER",
  "MU_INLINE_IMAGE",
  "MU_IMAGE_SUCCESS",
  "MU_IMAGE_UPLOADING",
  "MU_INLINE_IMAGE_SELECTED",
  "MU_INLINE_IMAGE_IS_EDIT",
  "MU_INDENT_CODE",
  "MU_INLINE_FOOTNOTE_IDENTIFIER",
  "MU_INLINE_RULE",
  "MU_LANGUAGE",
  "MU_LANGUAGE_INPUT",
  "MU_LINK",
  "MU_LINK_IN_BRACKET",
  "MU_LIST_ITEM",
  "MU_LOOSE_LIST_ITEM",
  "MU_MATH",
  "MU_MATH_TEXT",
  "MU_MATH_RENDER",
  "MU_RUBY",
  "MU_RUBY_TEXT",
  "MU_RUBY_RENDER",
  "MU_SELECTED",
  "MU_SOFT_LINE_BREAK",
  "MU_MATH_ERROR",
  "MU_MATH_MARKER",
  "MU_MATH_RENDER",
  "MU_MATH_TEXT",
  "MU_MERMAID",
  "MU_MULTIPLE_MATH",
  "MU_NO_TEXT_LINK",
  "MU_ORDER_LIST",
  "MU_ORDER_LIST_ITEM",
  "MU_OUTPUT_REMOVE",
  "MU_PARAGRAPH",
  "MU_RAW_HTML",
  "MU_REFERENCE_LABEL",
  "MU_REFERENCE_LINK",
  "MU_REFERENCE_MARKER",
  "MU_REFERENCE_TITLE",
  "MU_REMOVE",
  "MU_RUBY",
  "MU_RUBY_RENDER",
  "MU_RUBY_TEXT",
  "MU_SELECTION",
  "MU_SHOW_PREVIEW",
  "MU_SOFT_LINE_BREAK",
  "MU_TASK_LIST",
  "MU_TASK_LIST_ITEM",
  "MU_TASK_LIST_ITEM_CHECKBOX",
  "MU_TIGHT_LIST_ITEM",
  "MU_TOOL_BAR",
  "MU_VEGA_LITE",
  "MU_WARN",
  "MU_SHOW_QUICK_INSERT_HINT"
]), nc = [
  "p",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "blockquote",
  "pre",
  "ul",
  "ol",
  "li",
  "figure"
], lc = [
  "address",
  "article",
  "aside",
  "base",
  "basefont",
  "blockquote",
  "body",
  "caption",
  "center",
  "col",
  "colgroup",
  "dd",
  "details",
  "dialog",
  "dir",
  "div",
  "dl",
  "dt",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "frame",
  "frameset",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hr",
  "html",
  "iframe",
  "legend",
  "li",
  "link",
  "main",
  "menu",
  "menuitem",
  "meta",
  "nav",
  "noframes",
  "ol",
  "optgroup",
  "option",
  "p",
  "param",
  "section",
  "source",
  "summary",
  "table",
  "tbody",
  "td",
  "tfoot",
  "th",
  "thead",
  "title",
  "tr",
  "track",
  "ul"
], cc = {
  "{": "}",
  "[": "]",
  "(": ")",
  "*": "*",
  _: "_",
  '"': '"',
  "'": "'",
  $: "$",
  "~": "~"
}, mc = {
  "}": "{",
  "]": "[",
  ")": "(",
  "*": "*",
  _: "_",
  '"': '"',
  "'": "'",
  $: "$",
  "~": "~"
}, gc = {
  fontSize: 16,
  lineHeight: 1.6,
  focusMode: !1,
  markdown: "",
  // Whether to trim the beginning and ending empty line in code block when open markdown.
  trimUnnecessaryCodeBlockEmptyLines: !1,
  preferLooseListItem: !0,
  autoPairBracket: !0,
  autoPairMarkdownSyntax: !0,
  autoPairQuote: !0,
  bulletListMarker: "-",
  orderListDelimiter: ".",
  tabSize: 4,
  codeBlockLineNumbers: !1,
  // bullet/list marker width + listIndentation, tab or Daring Fireball Markdown (4 spaces) --> list indentation
  listIndentation: 1,
  frontmatterType: "-",
  mermaidTheme: "default",
  // dark / forest / default
  vegaTheme: "latimes",
  // excel / ggplot2 / quartz / vox / fivethirtyeight / dark / latimes
  hideQuickInsertHint: !1,
  hideLinkPopup: !1,
  autoCheck: !1,
  // Whether we should set spellcheck attribute on our container to highlight misspelled words.
  // NOTE: The browser is not able to correct misspelled words words without a custom
  // implementation like in MarkText.
  spellcheckEnabled: !1,
  // Markdown extensions
  frontMatter: !0,
  // Whether to support frontmatter.
  superSubScript: !0,
  footnote: !1,
  // Whether math block is supported.
  math: !0,
  isGitlabCompatibilityEnabled: !0,
  // Move checked task list item to the end of task list.
  autoMoveCheckedToEnd: !1,
  // Whether HTML rendering is disabled or not.
  disableHtml: !1,
  locale: xo
}, uc = navigator.userAgent.indexOf("Firefox") !== -1, dc = window && window.navigator && /Mac/.test(window.navigator.userAgent), Ts = window && window.navigator.userAgent && /win32|wow32|win64|wow64/i.test(window.navigator.userAgent), pc = /^http(s)?:\/\/([a-z0-9\-._~]+\.[a-z]{2,}|[0-9.]+|localhost|\[[a-f0-9.:]+\])(:[0-9]{1,5})?\/[\S]+/i, hc = {
  // do not forbid `class` because `code` element use class to present language
  FORBID_ATTR: ["style", "contenteditable"],
  ALLOW_DATA_ATTR: !1,
  USE_PROFILES: {
    html: !0,
    svg: !0,
    svgFilters: !0,
    mathMl: !1
  },
  RETURN_TRUSTED_TYPE: !1
}, yc = {
  FORBID_ATTR: ["contenteditable"],
  ALLOW_DATA_ATTR: !1,
  ADD_ATTR: ["data-align"],
  USE_PROFILES: {
    html: !0,
    svg: !0,
    svgFilters: !0,
    mathMl: !1
  },
  RETURN_TRUSTED_TYPE: !1,
  // Allow "file" protocol to export images on Windows (#1997).
  ALLOWED_URI_REGEXP: /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp|file):|[^a-z]|[a-z+.-]+(?:[^a-z+.\-:]|$))/i
}, fc = {
  isCaseSensitive: !1,
  isWholeWord: !1,
  isRegexp: !1,
  selectHighlight: !1,
  highlightIndex: -1
}, Es = `
`, bc = {
  headingStyle: "atx",
  // setext or atx
  hr: "---",
  bulletListMarker: "-",
  // -, +, or *
  codeBlockStyle: "fenced",
  // fenced or indented
  fence: "```",
  // ``` or ~~~
  emDelimiter: "*",
  // _ or *
  strongDelimiter: "**",
  // ** or __
  linkStyle: "inlined",
  linkReferenceStyle: "full",
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
  blankReplacement(a, e, t) {
    return e && e.classList.contains("mu-soft-line-break") ? Es : e && e.classList.contains("mu-hard-line-break") ? "  " + Es : e && e.classList.contains("mu-hard-line-break-space") ? "" : e.isBlock ? `

` : "";
  }
};
var fr = { exports: {} };
(function(a) {
  var e = typeof window < "u" ? window : typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope ? self : {};
  /**
   * Prism: Lightweight, robust, elegant syntax highlighting
   *
   * @license MIT <https://opensource.org/licenses/MIT>
   * @author Lea Verou <https://lea.verou.me>
   * @namespace
   * @public
   */
  var t = function(i) {
    var s = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i, r = 0, l = {}, c = {
      /**
       * By default, Prism will attempt to highlight all code elements (by calling {@link Prism.highlightAll}) on the
       * current page after the page finished loading. This might be a problem if e.g. you wanted to asynchronously load
       * additional languages or plugins yourself.
       *
       * By setting this value to `true`, Prism will not automatically highlight all code elements on the page.
       *
       * You obviously have to change this value before the automatic highlighting started. To do this, you can add an
       * empty Prism object into the global scope before loading the Prism script like this:
       *
       * ```js
       * window.Prism = window.Prism || {};
       * Prism.manual = true;
       * // add a new <script> to load Prism's script
       * ```
       *
       * @default false
       * @type {boolean}
       * @memberof Prism
       * @public
       */
      manual: i.Prism && i.Prism.manual,
      /**
       * By default, if Prism is in a web worker, it assumes that it is in a worker it created itself, so it uses
       * `addEventListener` to communicate with its parent instance. However, if you're using Prism manually in your
       * own worker, you don't want it to do this.
       *
       * By setting this value to `true`, Prism will not add its own listeners to the worker.
       *
       * You obviously have to change this value before Prism executes. To do this, you can add an
       * empty Prism object into the global scope before loading the Prism script like this:
       *
       * ```js
       * window.Prism = window.Prism || {};
       * Prism.disableWorkerMessageHandler = true;
       * // Load Prism's script
       * ```
       *
       * @default false
       * @type {boolean}
       * @memberof Prism
       * @public
       */
      disableWorkerMessageHandler: i.Prism && i.Prism.disableWorkerMessageHandler,
      /**
       * A namespace for utility methods.
       *
       * All function in this namespace that are not explicitly marked as _public_ are for __internal use only__ and may
       * change or disappear at any time.
       *
       * @namespace
       * @memberof Prism
       */
      util: {
        encode: function w(f) {
          return f instanceof m ? new m(f.type, w(f.content), f.alias) : Array.isArray(f) ? f.map(w) : f.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
        },
        /**
         * Returns the name of the type of the given value.
         *
         * @param {any} o
         * @returns {string}
         * @example
         * type(null)      === 'Null'
         * type(undefined) === 'Undefined'
         * type(123)       === 'Number'
         * type('foo')     === 'String'
         * type(true)      === 'Boolean'
         * type([1, 2])    === 'Array'
         * type({})        === 'Object'
         * type(String)    === 'Function'
         * type(/abc+/)    === 'RegExp'
         */
        type: function(w) {
          return Object.prototype.toString.call(w).slice(8, -1);
        },
        /**
         * Returns a unique number for the given object. Later calls will still return the same number.
         *
         * @param {Object} obj
         * @returns {number}
         */
        objId: function(w) {
          return w.__id || Object.defineProperty(w, "__id", { value: ++r }), w.__id;
        },
        /**
         * Creates a deep clone of the given object.
         *
         * The main intended use of this function is to clone language definitions.
         *
         * @param {T} o
         * @param {Record<number, any>} [visited]
         * @returns {T}
         * @template T
         */
        clone: function w(f, S) {
          S = S || {};
          var A, E;
          switch (c.util.type(f)) {
            case "Object":
              if (E = c.util.objId(f), S[E])
                return S[E];
              A = /** @type {Record<string, any>} */
              {}, S[E] = A;
              for (var P in f)
                f.hasOwnProperty(P) && (A[P] = w(f[P], S));
              return (
                /** @type {any} */
                A
              );
            case "Array":
              return E = c.util.objId(f), S[E] ? S[E] : (A = [], S[E] = A, /** @type {Array} */
              /** @type {any} */
              f.forEach(function(R, B) {
                A[B] = w(R, S);
              }), /** @type {any} */
              A);
            default:
              return f;
          }
        },
        /**
         * Returns the Prism language of the given element set by a `language-xxxx` or `lang-xxxx` class.
         *
         * If no language is set for the element or the element is `null` or `undefined`, `none` will be returned.
         *
         * @param {Element} element
         * @returns {string}
         */
        getLanguage: function(w) {
          for (; w; ) {
            var f = s.exec(w.className);
            if (f)
              return f[1].toLowerCase();
            w = w.parentElement;
          }
          return "none";
        },
        /**
         * Sets the Prism `language-xxxx` class of the given element.
         *
         * @param {Element} element
         * @param {string} language
         * @returns {void}
         */
        setLanguage: function(w, f) {
          w.className = w.className.replace(RegExp(s, "gi"), ""), w.classList.add("language-" + f);
        },
        /**
         * Returns the script element that is currently executing.
         *
         * This does __not__ work for line script element.
         *
         * @returns {HTMLScriptElement | null}
         */
        currentScript: function() {
          if (typeof document > "u")
            return null;
          if ("currentScript" in document && 1 < 2)
            return (
              /** @type {any} */
              document.currentScript
            );
          try {
            throw new Error();
          } catch (A) {
            var w = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(A.stack) || [])[1];
            if (w) {
              var f = document.getElementsByTagName("script");
              for (var S in f)
                if (f[S].src == w)
                  return f[S];
            }
            return null;
          }
        },
        /**
         * Returns whether a given class is active for `element`.
         *
         * The class can be activated if `element` or one of its ancestors has the given class and it can be deactivated
         * if `element` or one of its ancestors has the negated version of the given class. The _negated version_ of the
         * given class is just the given class with a `no-` prefix.
         *
         * Whether the class is active is determined by the closest ancestor of `element` (where `element` itself is
         * closest ancestor) that has the given class or the negated version of it. If neither `element` nor any of its
         * ancestors have the given class or the negated version of it, then the default activation will be returned.
         *
         * In the paradoxical situation where the closest ancestor contains __both__ the given class and the negated
         * version of it, the class is considered active.
         *
         * @param {Element} element
         * @param {string} className
         * @param {boolean} [defaultActivation=false]
         * @returns {boolean}
         */
        isActive: function(w, f, S) {
          for (var A = "no-" + f; w; ) {
            var E = w.classList;
            if (E.contains(f))
              return !0;
            if (E.contains(A))
              return !1;
            w = w.parentElement;
          }
          return !!S;
        }
      },
      /**
       * This namespace contains all currently loaded languages and the some helper functions to create and modify languages.
       *
       * @namespace
       * @memberof Prism
       * @public
       */
      languages: {
        /**
         * The grammar for plain, unformatted text.
         */
        plain: l,
        plaintext: l,
        text: l,
        txt: l,
        /**
         * Creates a deep copy of the language with the given id and appends the given tokens.
         *
         * If a token in `redef` also appears in the copied language, then the existing token in the copied language
         * will be overwritten at its original position.
         *
         * ## Best practices
         *
         * Since the position of overwriting tokens (token in `redef` that overwrite tokens in the copied language)
         * doesn't matter, they can technically be in any order. However, this can be confusing to others that trying to
         * understand the language definition because, normally, the order of tokens matters in Prism grammars.
         *
         * Therefore, it is encouraged to order overwriting tokens according to the positions of the overwritten tokens.
         * Furthermore, all non-overwriting tokens should be placed after the overwriting ones.
         *
         * @param {string} id The id of the language to extend. This has to be a key in `Prism.languages`.
         * @param {Grammar} redef The new tokens to append.
         * @returns {Grammar} The new language created.
         * @public
         * @example
         * Prism.languages['css-with-colors'] = Prism.languages.extend('css', {
         *     // Prism.languages.css already has a 'comment' token, so this token will overwrite CSS' 'comment' token
         *     // at its original position
         *     'comment': { ... },
         *     // CSS doesn't have a 'color' token, so this token will be appended
         *     'color': /\b(?:red|green|blue)\b/
         * });
         */
        extend: function(w, f) {
          var S = c.util.clone(c.languages[w]);
          for (var A in f)
            S[A] = f[A];
          return S;
        },
        /**
         * Inserts tokens _before_ another token in a language definition or any other grammar.
         *
         * ## Usage
         *
         * This helper method makes it easy to modify existing languages. For example, the CSS language definition
         * not only defines CSS highlighting for CSS documents, but also needs to define highlighting for CSS embedded
         * in HTML through `<style>` elements. To do this, it needs to modify `Prism.languages.markup` and add the
         * appropriate tokens. However, `Prism.languages.markup` is a regular JavaScript object literal, so if you do
         * this:
         *
         * ```js
         * Prism.languages.markup.style = {
         *     // token
         * };
         * ```
         *
         * then the `style` token will be added (and processed) at the end. `insertBefore` allows you to insert tokens
         * before existing tokens. For the CSS example above, you would use it like this:
         *
         * ```js
         * Prism.languages.insertBefore('markup', 'cdata', {
         *     'style': {
         *         // token
         *     }
         * });
         * ```
         *
         * ## Special cases
         *
         * If the grammars of `inside` and `insert` have tokens with the same name, the tokens in `inside`'s grammar
         * will be ignored.
         *
         * This behavior can be used to insert tokens after `before`:
         *
         * ```js
         * Prism.languages.insertBefore('markup', 'comment', {
         *     'comment': Prism.languages.markup.comment,
         *     // tokens after 'comment'
         * });
         * ```
         *
         * ## Limitations
         *
         * The main problem `insertBefore` has to solve is iteration order. Since ES2015, the iteration order for object
         * properties is guaranteed to be the insertion order (except for integer keys) but some browsers behave
         * differently when keys are deleted and re-inserted. So `insertBefore` can't be implemented by temporarily
         * deleting properties which is necessary to insert at arbitrary positions.
         *
         * To solve this problem, `insertBefore` doesn't actually insert the given tokens into the target object.
         * Instead, it will create a new object and replace all references to the target object with the new one. This
         * can be done without temporarily deleting properties, so the iteration order is well-defined.
         *
         * However, only references that can be reached from `Prism.languages` or `insert` will be replaced. I.e. if
         * you hold the target object in a variable, then the value of the variable will not change.
         *
         * ```js
         * var oldMarkup = Prism.languages.markup;
         * var newMarkup = Prism.languages.insertBefore('markup', 'comment', { ... });
         *
         * assert(oldMarkup !== Prism.languages.markup);
         * assert(newMarkup === Prism.languages.markup);
         * ```
         *
         * @param {string} inside The property of `root` (e.g. a language id in `Prism.languages`) that contains the
         * object to be modified.
         * @param {string} before The key to insert before.
         * @param {Grammar} insert An object containing the key-value pairs to be inserted.
         * @param {Object<string, any>} [root] The object containing `inside`, i.e. the object that contains the
         * object to be modified.
         *
         * Defaults to `Prism.languages`.
         * @returns {Grammar} The new grammar object.
         * @public
         */
        insertBefore: function(w, f, S, A) {
          A = A || /** @type {any} */
          c.languages;
          var E = A[w], P = {};
          for (var R in E)
            if (E.hasOwnProperty(R)) {
              if (R == f)
                for (var B in S)
                  S.hasOwnProperty(B) && (P[B] = S[B]);
              S.hasOwnProperty(R) || (P[R] = E[R]);
            }
          var K = A[w];
          return A[w] = P, c.languages.DFS(c.languages, function(Z, Q) {
            Q === K && Z != w && (this[Z] = P);
          }), P;
        },
        // Traverse a language definition with Depth First Search
        DFS: function w(f, S, A, E) {
          E = E || {};
          var P = c.util.objId;
          for (var R in f)
            if (f.hasOwnProperty(R)) {
              S.call(f, R, f[R], A || R);
              var B = f[R], K = c.util.type(B);
              K === "Object" && !E[P(B)] ? (E[P(B)] = !0, w(B, S, null, E)) : K === "Array" && !E[P(B)] && (E[P(B)] = !0, w(B, S, R, E));
            }
        }
      },
      plugins: {},
      /**
       * This is the most high-level function in Prism’s API.
       * It fetches all the elements that have a `.language-xxxx` class and then calls {@link Prism.highlightElement} on
       * each one of them.
       *
       * This is equivalent to `Prism.highlightAllUnder(document, async, callback)`.
       *
       * @param {boolean} [async=false] Same as in {@link Prism.highlightAllUnder}.
       * @param {HighlightCallback} [callback] Same as in {@link Prism.highlightAllUnder}.
       * @memberof Prism
       * @public
       */
      highlightAll: function(w, f) {
        c.highlightAllUnder(document, w, f);
      },
      /**
       * Fetches all the descendants of `container` that have a `.language-xxxx` class and then calls
       * {@link Prism.highlightElement} on each one of them.
       *
       * The following hooks will be run:
       * 1. `before-highlightall`
       * 2. `before-all-elements-highlight`
       * 3. All hooks of {@link Prism.highlightElement} for each element.
       *
       * @param {ParentNode} container The root element, whose descendants that have a `.language-xxxx` class will be highlighted.
       * @param {boolean} [async=false] Whether each element is to be highlighted asynchronously using Web Workers.
       * @param {HighlightCallback} [callback] An optional callback to be invoked on each element after its highlighting is done.
       * @memberof Prism
       * @public
       */
      highlightAllUnder: function(w, f, S) {
        var A = {
          callback: S,
          container: w,
          selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
        };
        c.hooks.run("before-highlightall", A), A.elements = Array.prototype.slice.apply(A.container.querySelectorAll(A.selector)), c.hooks.run("before-all-elements-highlight", A);
        for (var E = 0, P; P = A.elements[E++]; )
          c.highlightElement(P, f === !0, A.callback);
      },
      /**
       * Highlights the code inside a single element.
       *
       * The following hooks will be run:
       * 1. `before-sanity-check`
       * 2. `before-highlight`
       * 3. All hooks of {@link Prism.highlight}. These hooks will be run by an asynchronous worker if `async` is `true`.
       * 4. `before-insert`
       * 5. `after-highlight`
       * 6. `complete`
       *
       * Some the above hooks will be skipped if the element doesn't contain any text or there is no grammar loaded for
       * the element's language.
       *
       * @param {Element} element The element containing the code.
       * It must have a class of `language-xxxx` to be processed, where `xxxx` is a valid language identifier.
       * @param {boolean} [async=false] Whether the element is to be highlighted asynchronously using Web Workers
       * to improve performance and avoid blocking the UI when highlighting very large chunks of code. This option is
       * [disabled by default](https://prismjs.com/faq.html#why-is-asynchronous-highlighting-disabled-by-default).
       *
       * Note: All language definitions required to highlight the code must be included in the main `prism.js` file for
       * asynchronous highlighting to work. You can build your own bundle on the
       * [Download page](https://prismjs.com/download.html).
       * @param {HighlightCallback} [callback] An optional callback to be invoked after the highlighting is done.
       * Mostly useful when `async` is `true`, since in that case, the highlighting is done asynchronously.
       * @memberof Prism
       * @public
       */
      highlightElement: function(w, f, S) {
        var A = c.util.getLanguage(w), E = c.languages[A];
        c.util.setLanguage(w, A);
        var P = w.parentElement;
        P && P.nodeName.toLowerCase() === "pre" && c.util.setLanguage(P, A);
        var R = w.textContent, B = {
          element: w,
          language: A,
          grammar: E,
          code: R
        };
        function K(Q) {
          B.highlightedCode = Q, c.hooks.run("before-insert", B), B.element.innerHTML = B.highlightedCode, c.hooks.run("after-highlight", B), c.hooks.run("complete", B), S && S.call(B.element);
        }
        if (c.hooks.run("before-sanity-check", B), P = B.element.parentElement, P && P.nodeName.toLowerCase() === "pre" && !P.hasAttribute("tabindex") && P.setAttribute("tabindex", "0"), !B.code) {
          c.hooks.run("complete", B), S && S.call(B.element);
          return;
        }
        if (c.hooks.run("before-highlight", B), !B.grammar) {
          K(c.util.encode(B.code));
          return;
        }
        if (f && i.Worker) {
          var Z = new Worker(c.filename);
          Z.onmessage = function(Q) {
            K(Q.data);
          }, Z.postMessage(JSON.stringify({
            language: B.language,
            code: B.code,
            immediateClose: !0
          }));
        } else
          K(c.highlight(B.code, B.grammar, B.language));
      },
      /**
       * Low-level function, only use if you know what you’re doing. It accepts a string of text as input
       * and the language definitions to use, and returns a string with the HTML produced.
       *
       * The following hooks will be run:
       * 1. `before-tokenize`
       * 2. `after-tokenize`
       * 3. `wrap`: On each {@link Token}.
       *
       * @param {string} text A string with the code to be highlighted.
       * @param {Grammar} grammar An object containing the tokens to use.
       *
       * Usually a language definition like `Prism.languages.markup`.
       * @param {string} language The name of the language definition passed to `grammar`.
       * @returns {string} The highlighted HTML.
       * @memberof Prism
       * @public
       * @example
       * Prism.highlight('var foo = true;', Prism.languages.javascript, 'javascript');
       */
      highlight: function(w, f, S) {
        var A = {
          code: w,
          grammar: f,
          language: S
        };
        if (c.hooks.run("before-tokenize", A), !A.grammar)
          throw new Error('The language "' + A.language + '" has no grammar.');
        return A.tokens = c.tokenize(A.code, A.grammar), c.hooks.run("after-tokenize", A), m.stringify(c.util.encode(A.tokens), A.language);
      },
      /**
       * This is the heart of Prism, and the most low-level function you can use. It accepts a string of text as input
       * and the language definitions to use, and returns an array with the tokenized code.
       *
       * When the language definition includes nested tokens, the function is called recursively on each of these tokens.
       *
       * This method could be useful in other contexts as well, as a very crude parser.
       *
       * @param {string} text A string with the code to be highlighted.
       * @param {Grammar} grammar An object containing the tokens to use.
       *
       * Usually a language definition like `Prism.languages.markup`.
       * @returns {TokenStream} An array of strings and tokens, a token stream.
       * @memberof Prism
       * @public
       * @example
       * let code = `var foo = 0;`;
       * let tokens = Prism.tokenize(code, Prism.languages.javascript);
       * tokens.forEach(token => {
       *     if (token instanceof Prism.Token && token.type === 'number') {
       *         console.log(`Found numeric literal: ${token.content}`);
       *     }
       * });
       */
      tokenize: function(w, f) {
        var S = f.rest;
        if (S) {
          for (var A in S)
            f[A] = S[A];
          delete f.rest;
        }
        var E = new v();
        return x(E, E.head, w), y(w, E, f, E.head, 0), M(E);
      },
      /**
       * @namespace
       * @memberof Prism
       * @public
       */
      hooks: {
        all: {},
        /**
         * Adds the given callback to the list of callbacks for the given hook.
         *
         * The callback will be invoked when the hook it is registered for is run.
         * Hooks are usually directly run by a highlight function but you can also run hooks yourself.
         *
         * One callback function can be registered to multiple hooks and the same hook multiple times.
         *
         * @param {string} name The name of the hook.
         * @param {HookCallback} callback The callback function which is given environment variables.
         * @public
         */
        add: function(w, f) {
          var S = c.hooks.all;
          S[w] = S[w] || [], S[w].push(f);
        },
        /**
         * Runs a hook invoking all registered callbacks with the given environment variables.
         *
         * Callbacks will be invoked synchronously and in the order in which they were registered.
         *
         * @param {string} name The name of the hook.
         * @param {Object<string, any>} env The environment variables of the hook passed to all callbacks registered.
         * @public
         */
        run: function(w, f) {
          var S = c.hooks.all[w];
          if (!(!S || !S.length))
            for (var A = 0, E; E = S[A++]; )
              E(f);
        }
      },
      Token: m
    };
    i.Prism = c;
    function m(w, f, S, A) {
      this.type = w, this.content = f, this.alias = S, this.length = (A || "").length | 0;
    }
    m.stringify = function w(f, S) {
      if (typeof f == "string")
        return f;
      if (Array.isArray(f)) {
        var A = "";
        return f.forEach(function(K) {
          A += w(K, S);
        }), A;
      }
      var E = {
        type: f.type,
        content: w(f.content, S),
        tag: "span",
        classes: ["token", f.type],
        attributes: {},
        language: S
      }, P = f.alias;
      P && (Array.isArray(P) ? Array.prototype.push.apply(E.classes, P) : E.classes.push(P)), c.hooks.run("wrap", E);
      var R = "";
      for (var B in E.attributes)
        R += " " + B + '="' + (E.attributes[B] || "").replace(/"/g, "&quot;") + '"';
      return "<" + E.tag + ' class="' + E.classes.join(" ") + '"' + R + ">" + E.content + "</" + E.tag + ">";
    };
    function d(w, f, S, A) {
      w.lastIndex = f;
      var E = w.exec(S);
      if (E && A && E[1]) {
        var P = E[1].length;
        E.index += P, E[0] = E[0].slice(P);
      }
      return E;
    }
    function y(w, f, S, A, E, P) {
      for (var R in S)
        if (!(!S.hasOwnProperty(R) || !S[R])) {
          var B = S[R];
          B = Array.isArray(B) ? B : [B];
          for (var K = 0; K < B.length; ++K) {
            if (P && P.cause == R + "," + K)
              return;
            var Z = B[K], Q = Z.inside, pe = !!Z.lookbehind, q = !!Z.greedy, W = Z.alias;
            if (q && !Z.pattern.global) {
              var ye = Z.pattern.toString().match(/[imsuy]*$/)[0];
              Z.pattern = RegExp(Z.pattern.source, ye + "g");
            }
            for (var ke = Z.pattern || Z, re = A.next, te = E; re !== f.tail && !(P && te >= P.reach); te += re.value.length, re = re.next) {
              var ve = re.value;
              if (f.length > w.length)
                return;
              if (!(ve instanceof m)) {
                var ie = 1, oe;
                if (q) {
                  if (oe = d(ke, te, w, pe), !oe || oe.index >= w.length)
                    break;
                  var Ke = oe.index, se = oe.index + oe[0].length, we = te;
                  for (we += re.value.length; Ke >= we; )
                    re = re.next, we += re.value.length;
                  if (we -= re.value.length, te = we, re.value instanceof m)
                    continue;
                  for (var _e = re; _e !== f.tail && (we < se || typeof _e.value == "string"); _e = _e.next)
                    ie++, we += _e.value.length;
                  ie--, ve = w.slice(te, we), oe.index -= te;
                } else if (oe = d(ke, 0, ve, pe), !oe)
                  continue;
                var Ke = oe.index, Ae = oe[0], Ce = ve.slice(0, Ke), Ze = ve.slice(Ke + Ae.length), Te = te + ve.length;
                P && Te > P.reach && (P.reach = Te);
                var Be = re.prev;
                Ce && (Be = x(f, Be, Ce), te += Ce.length), k(f, Be, ie);
                var xt = new m(R, Q ? c.tokenize(Ae, Q) : Ae, W, Ae);
                if (re = x(f, Be, xt), Ze && x(f, re, Ze), ie > 1) {
                  var ot = {
                    cause: R + "," + K,
                    reach: Te
                  };
                  y(w, f, S, re.prev, te, ot), P && ot.reach > P.reach && (P.reach = ot.reach);
                }
              }
            }
          }
        }
    }
    function v() {
      var w = { value: null, prev: null, next: null }, f = { value: null, prev: w, next: null };
      w.next = f, this.head = w, this.tail = f, this.length = 0;
    }
    function x(w, f, S) {
      var A = f.next, E = { value: S, prev: f, next: A };
      return f.next = E, A.prev = E, w.length++, E;
    }
    function k(w, f, S) {
      for (var A = f.next, E = 0; E < S && A !== w.tail; E++)
        A = A.next;
      f.next = A, A.prev = f, w.length -= E;
    }
    function M(w) {
      for (var f = [], S = w.head.next; S !== w.tail; )
        f.push(S.value), S = S.next;
      return f;
    }
    if (!i.document)
      return i.addEventListener && (c.disableWorkerMessageHandler || i.addEventListener("message", function(w) {
        var f = JSON.parse(w.data), S = f.language, A = f.code, E = f.immediateClose;
        i.postMessage(c.highlight(A, c.languages[S], S)), E && i.close();
      }, !1)), c;
    var T = c.util.currentScript();
    T && (c.filename = T.src, T.hasAttribute("data-manual") && (c.manual = !0));
    function F() {
      c.manual || c.highlightAll();
    }
    if (!c.manual) {
      var O = document.readyState;
      O === "loading" || O === "interactive" && T && T.defer ? document.addEventListener("DOMContentLoaded", F) : window.requestAnimationFrame ? window.requestAnimationFrame(F) : window.setTimeout(F, 16);
    }
    return c;
  }(e);
  a.exports && (a.exports = t), typeof As < "u" && (As.Prism = t), t.languages.markup = {
    comment: {
      pattern: /<!--(?:(?!<!--)[\s\S])*?-->/,
      greedy: !0
    },
    prolog: {
      pattern: /<\?[\s\S]+?\?>/,
      greedy: !0
    },
    doctype: {
      // https://www.w3.org/TR/xml/#NT-doctypedecl
      pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
      greedy: !0,
      inside: {
        "internal-subset": {
          pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
          lookbehind: !0,
          greedy: !0,
          inside: null
          // see below
        },
        string: {
          pattern: /"[^"]*"|'[^']*'/,
          greedy: !0
        },
        punctuation: /^<!|>$|[[\]]/,
        "doctype-tag": /^DOCTYPE/i,
        name: /[^\s<>'"]+/
      }
    },
    cdata: {
      pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
      greedy: !0
    },
    tag: {
      pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
      greedy: !0,
      inside: {
        tag: {
          pattern: /^<\/?[^\s>\/]+/,
          inside: {
            punctuation: /^<\/?/,
            namespace: /^[^\s>\/:]+:/
          }
        },
        "special-attr": [],
        "attr-value": {
          pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
          inside: {
            punctuation: [
              {
                pattern: /^=/,
                alias: "attr-equals"
              },
              {
                pattern: /^(\s*)["']|["']$/,
                lookbehind: !0
              }
            ]
          }
        },
        punctuation: /\/?>/,
        "attr-name": {
          pattern: /[^\s>\/]+/,
          inside: {
            namespace: /^[^\s>\/:]+:/
          }
        }
      }
    },
    entity: [
      {
        pattern: /&[\da-z]{1,8};/i,
        alias: "named-entity"
      },
      /&#x?[\da-f]{1,8};/i
    ]
  }, t.languages.markup.tag.inside["attr-value"].inside.entity = t.languages.markup.entity, t.languages.markup.doctype.inside["internal-subset"].inside = t.languages.markup, t.hooks.add("wrap", function(i) {
    i.type === "entity" && (i.attributes.title = i.content.replace(/&amp;/, "&"));
  }), Object.defineProperty(t.languages.markup.tag, "addInlined", {
    /**
     * Adds an inlined language to markup.
     *
     * An example of an inlined language is CSS with `<style>` tags.
     *
     * @param {string} tagName The name of the tag that contains the inlined language. This name will be treated as
     * case insensitive.
     * @param {string} lang The language key.
     * @example
     * addInlined('style', 'css');
     */
    value: function(s, r) {
      var l = {};
      l["language-" + r] = {
        pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
        lookbehind: !0,
        inside: t.languages[r]
      }, l.cdata = /^<!\[CDATA\[|\]\]>$/i;
      var c = {
        "included-cdata": {
          pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
          inside: l
        }
      };
      c["language-" + r] = {
        pattern: /[\s\S]+/,
        inside: t.languages[r]
      };
      var m = {};
      m[s] = {
        pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function() {
          return s;
        }), "i"),
        lookbehind: !0,
        greedy: !0,
        inside: c
      }, t.languages.insertBefore("markup", "cdata", m);
    }
  }), Object.defineProperty(t.languages.markup.tag, "addAttribute", {
    /**
     * Adds an pattern to highlight languages embedded in HTML attributes.
     *
     * An example of an inlined language is CSS with `style` attributes.
     *
     * @param {string} attrName The name of the tag that contains the inlined language. This name will be treated as
     * case insensitive.
     * @param {string} lang The language key.
     * @example
     * addAttribute('style', 'css');
     */
    value: function(i, s) {
      t.languages.markup.tag.inside["special-attr"].push({
        pattern: RegExp(
          /(^|["'\s])/.source + "(?:" + i + ")" + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,
          "i"
        ),
        lookbehind: !0,
        inside: {
          "attr-name": /^[^\s=]+/,
          "attr-value": {
            pattern: /=[\s\S]+/,
            inside: {
              value: {
                pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
                lookbehind: !0,
                alias: [s, "language-" + s],
                inside: t.languages[s]
              },
              punctuation: [
                {
                  pattern: /^=/,
                  alias: "attr-equals"
                },
                /"|'/
              ]
            }
          }
        }
      });
    }
  }), t.languages.html = t.languages.markup, t.languages.mathml = t.languages.markup, t.languages.svg = t.languages.markup, t.languages.xml = t.languages.extend("markup", {}), t.languages.ssml = t.languages.xml, t.languages.atom = t.languages.xml, t.languages.rss = t.languages.xml, function(i) {
    var s = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
    i.languages.css = {
      comment: /\/\*[\s\S]*?\*\//,
      atrule: {
        pattern: RegExp("@[\\w-](?:" + /[^;{\s"']|\s+(?!\s)/.source + "|" + s.source + ")*?" + /(?:;|(?=\s*\{))/.source),
        inside: {
          rule: /^@[\w-]+/,
          "selector-function-argument": {
            pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
            lookbehind: !0,
            alias: "selector"
          },
          keyword: {
            pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
            lookbehind: !0
          }
          // See rest below
        }
      },
      url: {
        // https://drafts.csswg.org/css-values-3/#urls
        pattern: RegExp("\\burl\\((?:" + s.source + "|" + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ")\\)", "i"),
        greedy: !0,
        inside: {
          function: /^url/i,
          punctuation: /^\(|\)$/,
          string: {
            pattern: RegExp("^" + s.source + "$"),
            alias: "url"
          }
        }
      },
      selector: {
        pattern: RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|` + s.source + ")*(?=\\s*\\{)"),
        lookbehind: !0
      },
      string: {
        pattern: s,
        greedy: !0
      },
      property: {
        pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
        lookbehind: !0
      },
      important: /!important\b/i,
      function: {
        pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
        lookbehind: !0
      },
      punctuation: /[(){};:,]/
    }, i.languages.css.atrule.inside.rest = i.languages.css;
    var r = i.languages.markup;
    r && (r.tag.addInlined("style", "css"), r.tag.addAttribute("style", "css"));
  }(t), t.languages.clike = {
    comment: [
      {
        pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
        lookbehind: !0,
        greedy: !0
      },
      {
        pattern: /(^|[^\\:])\/\/.*/,
        lookbehind: !0,
        greedy: !0
      }
    ],
    string: {
      pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
      greedy: !0
    },
    "class-name": {
      pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
      lookbehind: !0,
      inside: {
        punctuation: /[.\\]/
      }
    },
    keyword: /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
    boolean: /\b(?:false|true)\b/,
    function: /\b\w+(?=\()/,
    number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
    operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
    punctuation: /[{}[\];(),.:]/
  }, t.languages.javascript = t.languages.extend("clike", {
    "class-name": [
      t.languages.clike["class-name"],
      {
        pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
        lookbehind: !0
      }
    ],
    keyword: [
      {
        pattern: /((?:^|\})\s*)catch\b/,
        lookbehind: !0
      },
      {
        pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
        lookbehind: !0
      }
    ],
    // Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
    function: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
    number: {
      pattern: RegExp(
        /(^|[^\w$])/.source + "(?:" + // constant
        (/NaN|Infinity/.source + "|" + // binary integer
        /0[bB][01]+(?:_[01]+)*n?/.source + "|" + // octal integer
        /0[oO][0-7]+(?:_[0-7]+)*n?/.source + "|" + // hexadecimal integer
        /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source + "|" + // decimal bigint
        /\d+(?:_\d+)*n/.source + "|" + // decimal number (integer or float) but no bigint
        /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source) + ")" + /(?![\w$])/.source
      ),
      lookbehind: !0
    },
    operator: /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
  }), t.languages.javascript["class-name"][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/, t.languages.insertBefore("javascript", "keyword", {
    regex: {
      pattern: RegExp(
        // lookbehind
        // eslint-disable-next-line regexp/no-dupe-characters-character-class
        /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source + // Regex pattern:
        // There are 2 regex patterns here. The RegExp set notation proposal added support for nested character
        // classes if the `v` flag is present. Unfortunately, nested CCs are both context-free and incompatible
        // with the only syntax, so we have to define 2 different regex patterns.
        /\//.source + "(?:" + /(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source + "|" + // `v` flag syntax. This supports 3 levels of nested character classes.
        /(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source + ")" + // lookahead
        /(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source
      ),
      lookbehind: !0,
      greedy: !0,
      inside: {
        "regex-source": {
          pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
          lookbehind: !0,
          alias: "language-regex",
          inside: t.languages.regex
        },
        "regex-delimiter": /^\/|\/$/,
        "regex-flags": /^[a-z]+$/
      }
    },
    // This must be declared before keyword because we use "function" inside the look-forward
    "function-variable": {
      pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
      alias: "function"
    },
    parameter: [
      {
        pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
        lookbehind: !0,
        inside: t.languages.javascript
      },
      {
        pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
        lookbehind: !0,
        inside: t.languages.javascript
      },
      {
        pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
        lookbehind: !0,
        inside: t.languages.javascript
      },
      {
        pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
        lookbehind: !0,
        inside: t.languages.javascript
      }
    ],
    constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
  }), t.languages.insertBefore("javascript", "string", {
    hashbang: {
      pattern: /^#!.*/,
      greedy: !0,
      alias: "comment"
    },
    "template-string": {
      pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
      greedy: !0,
      inside: {
        "template-punctuation": {
          pattern: /^`|`$/,
          alias: "string"
        },
        interpolation: {
          pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
          lookbehind: !0,
          inside: {
            "interpolation-punctuation": {
              pattern: /^\$\{|\}$/,
              alias: "punctuation"
            },
            rest: t.languages.javascript
          }
        },
        string: /[\s\S]+/
      }
    },
    "string-property": {
      pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
      lookbehind: !0,
      greedy: !0,
      alias: "property"
    }
  }), t.languages.insertBefore("javascript", "operator", {
    "literal-property": {
      pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
      lookbehind: !0,
      alias: "property"
    }
  }), t.languages.markup && (t.languages.markup.tag.addInlined("script", "javascript"), t.languages.markup.tag.addAttribute(
    /on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,
    "javascript"
  )), t.languages.js = t.languages.javascript, function() {
    if (typeof t > "u" || typeof document > "u")
      return;
    Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector);
    var i = "Loading…", s = function(T, F) {
      return "✖ Error " + T + " while fetching file: " + F;
    }, r = "✖ Error: File does not exist or is empty", l = {
      js: "javascript",
      py: "python",
      rb: "ruby",
      ps1: "powershell",
      psm1: "powershell",
      sh: "bash",
      bat: "batch",
      h: "c",
      tex: "latex"
    }, c = "data-src-status", m = "loading", d = "loaded", y = "failed", v = "pre[data-src]:not([" + c + '="' + d + '"]):not([' + c + '="' + m + '"])';
    function x(T, F, O) {
      var w = new XMLHttpRequest();
      w.open("GET", T, !0), w.onreadystatechange = function() {
        w.readyState == 4 && (w.status < 400 && w.responseText ? F(w.responseText) : w.status >= 400 ? O(s(w.status, w.statusText)) : O(r));
      }, w.send(null);
    }
    function k(T) {
      var F = /^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(T || "");
      if (F) {
        var O = Number(F[1]), w = F[2], f = F[3];
        return w ? f ? [O, Number(f)] : [O, void 0] : [O, O];
      }
    }
    t.hooks.add("before-highlightall", function(T) {
      T.selector += ", " + v;
    }), t.hooks.add("before-sanity-check", function(T) {
      var F = (
        /** @type {HTMLPreElement} */
        T.element
      );
      if (F.matches(v)) {
        T.code = "", F.setAttribute(c, m);
        var O = F.appendChild(document.createElement("CODE"));
        O.textContent = i;
        var w = F.getAttribute("data-src"), f = T.language;
        if (f === "none") {
          var S = (/\.(\w+)$/.exec(w) || [, "none"])[1];
          f = l[S] || S;
        }
        t.util.setLanguage(O, f), t.util.setLanguage(F, f);
        var A = t.plugins.autoloader;
        A && A.loadLanguages(f), x(
          w,
          function(E) {
            F.setAttribute(c, d);
            var P = k(F.getAttribute("data-range"));
            if (P) {
              var R = E.split(/\r\n?|\n/g), B = P[0], K = P[1] == null ? R.length : P[1];
              B < 0 && (B += R.length), B = Math.max(0, Math.min(B - 1, R.length)), K < 0 && (K += R.length), K = Math.max(0, Math.min(K, R.length)), E = R.slice(B, K).join(`
`), F.hasAttribute("data-start") || F.setAttribute("data-start", String(B + 1));
            }
            O.textContent = E, t.highlightElement(O);
          },
          function(E) {
            F.setAttribute(c, y), O.textContent = E;
          }
        );
      }
    }), t.plugins.fileHighlight = {
      /**
       * Executes the File Highlight plugin for all matching `pre` elements under the given container.
       *
       * Note: Elements which are already loaded or currently loading will not be touched by this method.
       *
       * @param {ParentNode} [container=document]
       */
      highlight: function(F) {
        for (var O = (F || document).querySelectorAll(v), w = 0, f; f = O[w++]; )
          t.highlightElement(f);
      }
    };
    var M = !1;
    t.fileHighlight = function() {
      M || (console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."), M = !0), t.plugins.fileHighlight.highlight.apply(this, arguments);
    };
  }();
})(fr);
var A0 = fr.exports;
const vc = /* @__PURE__ */ Fi(A0);
class Re {
  // The + prefix indicates that these fields aren't writeable
  // Lexer holding the input string.
  // Start offset, zero-based inclusive.
  // End offset, zero-based exclusive.
  constructor(e, t, i) {
    this.lexer = void 0, this.start = void 0, this.end = void 0, this.lexer = e, this.start = t, this.end = i;
  }
  /**
   * Merges two `SourceLocation`s from location providers, given they are
   * provided in order of appearance.
   * - Returns the first one's location if only the first is provided.
   * - Returns a merged range of the first and the last if both are provided
   *   and their lexers match.
   * - Otherwise, returns null.
   */
  static range(e, t) {
    return t ? !e || !e.loc || !t.loc || e.loc.lexer !== t.loc.lexer ? null : new Re(e.loc.lexer, e.loc.start, t.loc.end) : e && e.loc;
  }
}
class at {
  // don't expand the token
  // used in \noexpand
  constructor(e, t) {
    this.text = void 0, this.loc = void 0, this.noexpand = void 0, this.treatAsRelax = void 0, this.text = e, this.loc = t;
  }
  /**
   * Given a pair of tokens (this and endToken), compute a `Token` encompassing
   * the whole input range enclosed by these two.
   */
  range(e, t) {
    return new at(t, Re.range(this, e));
  }
}
class z {
  // Error start position based on passed-in Token or ParseNode.
  // Length of affected text based on passed-in Token or ParseNode.
  // The underlying error message without any context added.
  constructor(e, t) {
    this.name = void 0, this.position = void 0, this.length = void 0, this.rawMessage = void 0;
    var i = "KaTeX parse error: " + e, s, r, l = t && t.loc;
    if (l && l.start <= l.end) {
      var c = l.lexer.input;
      s = l.start, r = l.end, s === c.length ? i += " at end of input: " : i += " at position " + (s + 1) + ": ";
      var m = c.slice(s, r).replace(/[^]/g, "$&̲"), d;
      s > 15 ? d = "…" + c.slice(s - 15, s) : d = c.slice(0, s);
      var y;
      r + 15 < c.length ? y = c.slice(r, r + 15) + "…" : y = c.slice(r), i += d + m + y;
    }
    var v = new Error(i);
    return v.name = "ParseError", v.__proto__ = z.prototype, v.position = s, s != null && r != null && (v.length = r - s), v.rawMessage = e, v;
  }
}
z.prototype.__proto__ = Error.prototype;
var T0 = function(e, t) {
  return e.indexOf(t) !== -1;
}, E0 = function(e, t) {
  return e === void 0 ? t : e;
}, M0 = /([A-Z])/g, F0 = function(e) {
  return e.replace(M0, "-$1").toLowerCase();
}, P0 = {
  "&": "&amp;",
  ">": "&gt;",
  "<": "&lt;",
  '"': "&quot;",
  "'": "&#x27;"
}, B0 = /[&><"']/g;
function D0(a) {
  return String(a).replace(B0, (e) => P0[e]);
}
var br = function a(e) {
  return e.type === "ordgroup" || e.type === "color" ? e.body.length === 1 ? a(e.body[0]) : e : e.type === "font" ? a(e.body) : e;
}, O0 = function(e) {
  var t = br(e);
  return t.type === "mathord" || t.type === "textord" || t.type === "atom";
}, N0 = function(e) {
  if (!e)
    throw new Error("Expected non-null, but got " + String(e));
  return e;
}, z0 = function(e) {
  var t = /^\s*([^\\/#]*?)(?::|&#0*58|&#x0*3a)/i.exec(e);
  return t != null ? t[1] : "_relative";
}, X = {
  contains: T0,
  deflt: E0,
  escape: D0,
  hyphenate: F0,
  getBaseElem: br,
  isCharacterBox: O0,
  protocolFromUrl: z0
}, Ta = {
  displayMode: {
    type: "boolean",
    description: "Render math in display mode, which puts the math in display style (so \\int and \\sum are large, for example), and centers the math on the page on its own line.",
    cli: "-d, --display-mode"
  },
  output: {
    type: {
      enum: ["htmlAndMathml", "html", "mathml"]
    },
    description: "Determines the markup language of the output.",
    cli: "-F, --format <type>"
  },
  leqno: {
    type: "boolean",
    description: "Render display math in leqno style (left-justified tags)."
  },
  fleqn: {
    type: "boolean",
    description: "Render display math flush left."
  },
  throwOnError: {
    type: "boolean",
    default: !0,
    cli: "-t, --no-throw-on-error",
    cliDescription: "Render errors (in the color given by --error-color) instead of throwing a ParseError exception when encountering an error."
  },
  errorColor: {
    type: "string",
    default: "#cc0000",
    cli: "-c, --error-color <color>",
    cliDescription: "A color string given in the format 'rgb' or 'rrggbb' (no #). This option determines the color of errors rendered by the -t option.",
    cliProcessor: (a) => "#" + a
  },
  macros: {
    type: "object",
    cli: "-m, --macro <def>",
    cliDescription: "Define custom macro of the form '\\foo:expansion' (use multiple -m arguments for multiple macros).",
    cliDefault: [],
    cliProcessor: (a, e) => (e.push(a), e)
  },
  minRuleThickness: {
    type: "number",
    description: "Specifies a minimum thickness, in ems, for fraction lines, `\\sqrt` top lines, `{array}` vertical lines, `\\hline`, `\\hdashline`, `\\underline`, `\\overline`, and the borders of `\\fbox`, `\\boxed`, and `\\fcolorbox`.",
    processor: (a) => Math.max(0, a),
    cli: "--min-rule-thickness <size>",
    cliProcessor: parseFloat
  },
  colorIsTextColor: {
    type: "boolean",
    description: "Makes \\color behave like LaTeX's 2-argument \\textcolor, instead of LaTeX's one-argument \\color mode change.",
    cli: "-b, --color-is-text-color"
  },
  strict: {
    type: [{
      enum: ["warn", "ignore", "error"]
    }, "boolean", "function"],
    description: "Turn on strict / LaTeX faithfulness mode, which throws an error if the input uses features that are not supported by LaTeX.",
    cli: "-S, --strict",
    cliDefault: !1
  },
  trust: {
    type: ["boolean", "function"],
    description: "Trust the input, enabling all HTML features such as \\url.",
    cli: "-T, --trust"
  },
  maxSize: {
    type: "number",
    default: 1 / 0,
    description: "If non-zero, all user-specified sizes, e.g. in \\rule{500em}{500em}, will be capped to maxSize ems. Otherwise, elements and spaces can be arbitrarily large",
    processor: (a) => Math.max(0, a),
    cli: "-s, --max-size <n>",
    cliProcessor: parseInt
  },
  maxExpand: {
    type: "number",
    default: 1e3,
    description: "Limit the number of macro expansions to the specified number, to prevent e.g. infinite macro loops. If set to Infinity, the macro expander will try to fully expand as in LaTeX.",
    processor: (a) => Math.max(0, a),
    cli: "-e, --max-expand <n>",
    cliProcessor: (a) => a === "Infinity" ? 1 / 0 : parseInt(a)
  },
  globalGroup: {
    type: "boolean",
    cli: !1
  }
};
function C0(a) {
  if (a.default)
    return a.default;
  var e = a.type, t = Array.isArray(e) ? e[0] : e;
  if (typeof t != "string")
    return t.enum[0];
  switch (t) {
    case "boolean":
      return !1;
    case "string":
      return "";
    case "number":
      return 0;
    case "object":
      return {};
  }
}
class Pi {
  constructor(e) {
    this.displayMode = void 0, this.output = void 0, this.leqno = void 0, this.fleqn = void 0, this.throwOnError = void 0, this.errorColor = void 0, this.macros = void 0, this.minRuleThickness = void 0, this.colorIsTextColor = void 0, this.strict = void 0, this.trust = void 0, this.maxSize = void 0, this.maxExpand = void 0, this.globalGroup = void 0, e = e || {};
    for (var t in Ta)
      if (Ta.hasOwnProperty(t)) {
        var i = Ta[t];
        this[t] = e[t] !== void 0 ? i.processor ? i.processor(e[t]) : e[t] : C0(i);
      }
  }
  /**
   * Report nonstrict (non-LaTeX-compatible) input.
   * Can safely not be called if `this.strict` is false in JavaScript.
   */
  reportNonstrict(e, t, i) {
    var s = this.strict;
    if (typeof s == "function" && (s = s(e, t, i)), !(!s || s === "ignore")) {
      if (s === !0 || s === "error")
        throw new z("LaTeX-incompatible input and strict mode is set to 'error': " + (t + " [" + e + "]"), i);
      s === "warn" ? typeof console < "u" && console.warn("LaTeX-incompatible input and strict mode is set to 'warn': " + (t + " [" + e + "]")) : typeof console < "u" && console.warn("LaTeX-incompatible input and strict mode is set to " + ("unrecognized '" + s + "': " + t + " [" + e + "]"));
    }
  }
  /**
   * Check whether to apply strict (LaTeX-adhering) behavior for unusual
   * input (like `\\`).  Unlike `nonstrict`, will not throw an error;
   * instead, "error" translates to a return value of `true`, while "ignore"
   * translates to a return value of `false`.  May still print a warning:
   * "warn" prints a warning and returns `false`.
   * This is for the second category of `errorCode`s listed in the README.
   */
  useStrictBehavior(e, t, i) {
    var s = this.strict;
    if (typeof s == "function")
      try {
        s = s(e, t, i);
      } catch {
        s = "error";
      }
    return !s || s === "ignore" ? !1 : s === !0 || s === "error" ? !0 : s === "warn" ? (typeof console < "u" && console.warn("LaTeX-incompatible input and strict mode is set to 'warn': " + (t + " [" + e + "]")), !1) : (typeof console < "u" && console.warn("LaTeX-incompatible input and strict mode is set to " + ("unrecognized '" + s + "': " + t + " [" + e + "]")), !1);
  }
  /**
   * Check whether to test potentially dangerous input, and return
   * `true` (trusted) or `false` (untrusted).  The sole argument `context`
   * should be an object with `command` field specifying the relevant LaTeX
   * command (as a string starting with `\`), and any other arguments, etc.
   * If `context` has a `url` field, a `protocol` field will automatically
   * get added by this function (changing the specified object).
   */
  isTrusted(e) {
    e.url && !e.protocol && (e.protocol = X.protocolFromUrl(e.url));
    var t = typeof this.trust == "function" ? this.trust(e) : this.trust;
    return !!t;
  }
}
class ft {
  constructor(e, t, i) {
    this.id = void 0, this.size = void 0, this.cramped = void 0, this.id = e, this.size = t, this.cramped = i;
  }
  /**
   * Get the style of a superscript given a base in the current style.
   */
  sup() {
    return et[I0[this.id]];
  }
  /**
   * Get the style of a subscript given a base in the current style.
   */
  sub() {
    return et[R0[this.id]];
  }
  /**
   * Get the style of a fraction numerator given the fraction in the current
   * style.
   */
  fracNum() {
    return et[L0[this.id]];
  }
  /**
   * Get the style of a fraction denominator given the fraction in the current
   * style.
   */
  fracDen() {
    return et[q0[this.id]];
  }
  /**
   * Get the cramped version of a style (in particular, cramping a cramped style
   * doesn't change the style).
   */
  cramp() {
    return et[U0[this.id]];
  }
  /**
   * Get a text or display version of this style.
   */
  text() {
    return et[H0[this.id]];
  }
  /**
   * Return true if this style is tightly spaced (scriptstyle/scriptscriptstyle)
   */
  isTight() {
    return this.size >= 2;
  }
}
var Bi = 0, Pa = 1, $t = 2, gt = 3, sa = 4, He = 5, Vt = 6, Me = 7, et = [new ft(Bi, 0, !1), new ft(Pa, 0, !0), new ft($t, 1, !1), new ft(gt, 1, !0), new ft(sa, 2, !1), new ft(He, 2, !0), new ft(Vt, 3, !1), new ft(Me, 3, !0)], I0 = [sa, He, sa, He, Vt, Me, Vt, Me], R0 = [He, He, He, He, Me, Me, Me, Me], L0 = [$t, gt, sa, He, Vt, Me, Vt, Me], q0 = [gt, gt, He, He, Me, Me, Me, Me], U0 = [Pa, Pa, gt, gt, He, He, Me, Me], H0 = [Bi, Pa, $t, gt, $t, gt, $t, gt], V = {
  DISPLAY: et[Bi],
  TEXT: et[$t],
  SCRIPT: et[sa],
  SCRIPTSCRIPT: et[Vt]
}, wi = [{
  // Latin characters beyond the Latin-1 characters we have metrics for.
  // Needed for Czech, Hungarian and Turkish text, for example.
  name: "latin",
  blocks: [
    [256, 591],
    // Latin Extended-A and Latin Extended-B
    [768, 879]
    // Combining Diacritical marks
  ]
}, {
  // The Cyrillic script used by Russian and related languages.
  // A Cyrillic subset used to be supported as explicitly defined
  // symbols in symbols.js
  name: "cyrillic",
  blocks: [[1024, 1279]]
}, {
  // Armenian
  name: "armenian",
  blocks: [[1328, 1423]]
}, {
  // The Brahmic scripts of South and Southeast Asia
  // Devanagari (0900–097F)
  // Bengali (0980–09FF)
  // Gurmukhi (0A00–0A7F)
  // Gujarati (0A80–0AFF)
  // Oriya (0B00–0B7F)
  // Tamil (0B80–0BFF)
  // Telugu (0C00–0C7F)
  // Kannada (0C80–0CFF)
  // Malayalam (0D00–0D7F)
  // Sinhala (0D80–0DFF)
  // Thai (0E00–0E7F)
  // Lao (0E80–0EFF)
  // Tibetan (0F00–0FFF)
  // Myanmar (1000–109F)
  name: "brahmic",
  blocks: [[2304, 4255]]
}, {
  name: "georgian",
  blocks: [[4256, 4351]]
}, {
  // Chinese and Japanese.
  // The "k" in cjk is for Korean, but we've separated Korean out
  name: "cjk",
  blocks: [
    [12288, 12543],
    // CJK symbols and punctuation, Hiragana, Katakana
    [19968, 40879],
    // CJK ideograms
    [65280, 65376]
    // Fullwidth punctuation
    // TODO: add halfwidth Katakana and Romanji glyphs
  ]
}, {
  // Korean
  name: "hangul",
  blocks: [[44032, 55215]]
}];
function G0(a) {
  for (var e = 0; e < wi.length; e++)
    for (var t = wi[e], i = 0; i < t.blocks.length; i++) {
      var s = t.blocks[i];
      if (a >= s[0] && a <= s[1])
        return t.name;
    }
  return null;
}
var Ea = [];
wi.forEach((a) => a.blocks.forEach((e) => Ea.push(...e)));
function vr(a) {
  for (var e = 0; e < Ea.length; e += 2)
    if (a >= Ea[e] && a <= Ea[e + 1])
      return !0;
  return !1;
}
var qt = 80, $0 = function(e, t) {
  return "M95," + (622 + e + t) + `
c-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14
c0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54
c44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10
s173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429
c69,-144,104.5,-217.7,106.5,-221
l` + e / 2.075 + " -" + e + `
c5.3,-9.3,12,-14,20,-14
H400000v` + (40 + e) + `H845.2724
s-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7
c-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z
M` + (834 + e) + " " + t + "h400000v" + (40 + e) + "h-400000z";
}, V0 = function(e, t) {
  return "M263," + (601 + e + t) + `c0.7,0,18,39.7,52,119
c34,79.3,68.167,158.7,102.5,238c34.3,79.3,51.8,119.3,52.5,120
c340,-704.7,510.7,-1060.3,512,-1067
l` + e / 2.084 + " -" + e + `
c4.7,-7.3,11,-11,19,-11
H40000v` + (40 + e) + `H1012.3
s-271.3,567,-271.3,567c-38.7,80.7,-84,175,-136,283c-52,108,-89.167,185.3,-111.5,232
c-22.3,46.7,-33.8,70.3,-34.5,71c-4.7,4.7,-12.3,7,-23,7s-12,-1,-12,-1
s-109,-253,-109,-253c-72.7,-168,-109.3,-252,-110,-252c-10.7,8,-22,16.7,-34,26
c-22,17.3,-33.3,26,-34,26s-26,-26,-26,-26s76,-59,76,-59s76,-60,76,-60z
M` + (1001 + e) + " " + t + "h400000v" + (40 + e) + "h-400000z";
}, W0 = function(e, t) {
  return "M983 " + (10 + e + t) + `
l` + e / 3.13 + " -" + e + `
c4,-6.7,10,-10,18,-10 H400000v` + (40 + e) + `
H1013.1s-83.4,268,-264.1,840c-180.7,572,-277,876.3,-289,913c-4.7,4.7,-12.7,7,-24,7
s-12,0,-12,0c-1.3,-3.3,-3.7,-11.7,-7,-25c-35.3,-125.3,-106.7,-373.3,-214,-744
c-10,12,-21,25,-33,39s-32,39,-32,39c-6,-5.3,-15,-14,-27,-26s25,-30,25,-30
c26.7,-32.7,52,-63,76,-91s52,-60,52,-60s208,722,208,722
c56,-175.3,126.3,-397.3,211,-666c84.7,-268.7,153.8,-488.2,207.5,-658.5
c53.7,-170.3,84.5,-266.8,92.5,-289.5z
M` + (1001 + e) + " " + t + "h400000v" + (40 + e) + "h-400000z";
}, Y0 = function(e, t) {
  return "M424," + (2398 + e + t) + `
c-1.3,-0.7,-38.5,-172,-111.5,-514c-73,-342,-109.8,-513.3,-110.5,-514
c0,-2,-10.7,14.3,-32,49c-4.7,7.3,-9.8,15.7,-15.5,25c-5.7,9.3,-9.8,16,-12.5,20
s-5,7,-5,7c-4,-3.3,-8.3,-7.7,-13,-13s-13,-13,-13,-13s76,-122,76,-122s77,-121,77,-121
s209,968,209,968c0,-2,84.7,-361.7,254,-1079c169.3,-717.3,254.7,-1077.7,256,-1081
l` + e / 4.223 + " -" + e + `c4,-6.7,10,-10,18,-10 H400000
v` + (40 + e) + `H1014.6
s-87.3,378.7,-272.6,1166c-185.3,787.3,-279.3,1182.3,-282,1185
c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2z M` + (1001 + e) + " " + t + `
h400000v` + (40 + e) + "h-400000z";
}, X0 = function(e, t) {
  return "M473," + (2713 + e + t) + `
c339.3,-1799.3,509.3,-2700,510,-2702 l` + e / 5.298 + " -" + e + `
c3.3,-7.3,9.3,-11,18,-11 H400000v` + (40 + e) + `H1017.7
s-90.5,478,-276.2,1466c-185.7,988,-279.5,1483,-281.5,1485c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2c0,-1.3,-5.3,-32,-16,-92c-50.7,-293.3,-119.7,-693.3,-207,-1200
c0,-1.3,-5.3,8.7,-16,30c-10.7,21.3,-21.3,42.7,-32,64s-16,33,-16,33s-26,-26,-26,-26
s76,-153,76,-153s77,-151,77,-151c0.7,0.7,35.7,202,105,604c67.3,400.7,102,602.7,104,
606zM` + (1001 + e) + " " + t + "h400000v" + (40 + e) + "H1017.7z";
}, K0 = function(e) {
  var t = e / 2;
  return "M400000 " + e + " H0 L" + t + " 0 l65 45 L145 " + (e - 80) + " H400000z";
}, Z0 = function(e, t, i) {
  var s = i - 54 - t - e;
  return "M702 " + (e + t) + "H400000" + (40 + e) + `
H742v` + s + `l-4 4-4 4c-.667.7 -2 1.5-4 2.5s-4.167 1.833-6.5 2.5-5.5 1-9.5 1
h-12l-28-84c-16.667-52-96.667 -294.333-240-727l-212 -643 -85 170
c-4-3.333-8.333-7.667-13 -13l-13-13l77-155 77-156c66 199.333 139 419.667
219 661 l218 661zM702 ` + t + "H400000v" + (40 + e) + "H742z";
}, J0 = function(e, t, i) {
  t = 1e3 * t;
  var s = "";
  switch (e) {
    case "sqrtMain":
      s = $0(t, qt);
      break;
    case "sqrtSize1":
      s = V0(t, qt);
      break;
    case "sqrtSize2":
      s = W0(t, qt);
      break;
    case "sqrtSize3":
      s = Y0(t, qt);
      break;
    case "sqrtSize4":
      s = X0(t, qt);
      break;
    case "sqrtTall":
      s = Z0(t, qt, i);
  }
  return s;
}, Q0 = function(e, t) {
  switch (e) {
    case "⎜":
      return "M291 0 H417 V" + t + " H291z M291 0 H417 V" + t + " H291z";
    case "∣":
      return "M145 0 H188 V" + t + " H145z M145 0 H188 V" + t + " H145z";
    case "∥":
      return "M145 0 H188 V" + t + " H145z M145 0 H188 V" + t + " H145z" + ("M367 0 H410 V" + t + " H367z M367 0 H410 V" + t + " H367z");
    case "⎟":
      return "M457 0 H583 V" + t + " H457z M457 0 H583 V" + t + " H457z";
    case "⎢":
      return "M319 0 H403 V" + t + " H319z M319 0 H403 V" + t + " H319z";
    case "⎥":
      return "M263 0 H347 V" + t + " H263z M263 0 H347 V" + t + " H263z";
    case "⎪":
      return "M384 0 H504 V" + t + " H384z M384 0 H504 V" + t + " H384z";
    case "⏐":
      return "M312 0 H355 V" + t + " H312z M312 0 H355 V" + t + " H312z";
    case "‖":
      return "M257 0 H300 V" + t + " H257z M257 0 H300 V" + t + " H257z" + ("M478 0 H521 V" + t + " H478z M478 0 H521 V" + t + " H478z");
    default:
      return "";
  }
}, Ms = {
  // The doubleleftarrow geometry is from glyph U+21D0 in the font KaTeX Main
  doubleleftarrow: `M262 157
l10-10c34-36 62.7-77 86-123 3.3-8 5-13.3 5-16 0-5.3-6.7-8-20-8-7.3
 0-12.2.5-14.5 1.5-2.3 1-4.8 4.5-7.5 10.5-49.3 97.3-121.7 169.3-217 216-28
 14-57.3 25-88 33-6.7 2-11 3.8-13 5.5-2 1.7-3 4.2-3 7.5s1 5.8 3 7.5
c2 1.7 6.3 3.5 13 5.5 68 17.3 128.2 47.8 180.5 91.5 52.3 43.7 93.8 96.2 124.5
 157.5 9.3 8 15.3 12.3 18 13h6c12-.7 18-4 18-10 0-2-1.7-7-5-15-23.3-46-52-87
-86-123l-10-10h399738v-40H218c328 0 0 0 0 0l-10-8c-26.7-20-65.7-43-117-69 2.7
-2 6-3.7 10-5 36.7-16 72.3-37.3 107-64l10-8h399782v-40z
m8 0v40h399730v-40zm0 194v40h399730v-40z`,
  // doublerightarrow is from glyph U+21D2 in font KaTeX Main
  doublerightarrow: `M399738 392l
-10 10c-34 36-62.7 77-86 123-3.3 8-5 13.3-5 16 0 5.3 6.7 8 20 8 7.3 0 12.2-.5
 14.5-1.5 2.3-1 4.8-4.5 7.5-10.5 49.3-97.3 121.7-169.3 217-216 28-14 57.3-25 88
-33 6.7-2 11-3.8 13-5.5 2-1.7 3-4.2 3-7.5s-1-5.8-3-7.5c-2-1.7-6.3-3.5-13-5.5-68
-17.3-128.2-47.8-180.5-91.5-52.3-43.7-93.8-96.2-124.5-157.5-9.3-8-15.3-12.3-18
-13h-6c-12 .7-18 4-18 10 0 2 1.7 7 5 15 23.3 46 52 87 86 123l10 10H0v40h399782
c-328 0 0 0 0 0l10 8c26.7 20 65.7 43 117 69-2.7 2-6 3.7-10 5-36.7 16-72.3 37.3
-107 64l-10 8H0v40zM0 157v40h399730v-40zm0 194v40h399730v-40z`,
  // leftarrow is from glyph U+2190 in font KaTeX Main
  leftarrow: `M400000 241H110l3-3c68.7-52.7 113.7-120
 135-202 4-14.7 6-23 6-25 0-7.3-7-11-21-11-8 0-13.2.8-15.5 2.5-2.3 1.7-4.2 5.8
-5.5 12.5-1.3 4.7-2.7 10.3-4 17-12 48.7-34.8 92-68.5 130S65.3 228.3 18 247
c-10 4-16 7.7-18 11 0 8.7 6 14.3 18 17 47.3 18.7 87.8 47 121.5 85S196 441.3 208
 490c.7 2 1.3 5 2 9s1.2 6.7 1.5 8c.3 1.3 1 3.3 2 6s2.2 4.5 3.5 5.5c1.3 1 3.3
 1.8 6 2.5s6 1 10 1c14 0 21-3.7 21-11 0-2-2-10.3-6-25-20-79.3-65-146.7-135-202
 l-3-3h399890zM100 241v40h399900v-40z`,
  // overbrace is from glyphs U+23A9/23A8/23A7 in font KaTeX_Size4-Regular
  leftbrace: `M6 548l-6-6v-35l6-11c56-104 135.3-181.3 238-232 57.3-28.7 117
-45 179-50h399577v120H403c-43.3 7-81 15-113 26-100.7 33-179.7 91-237 174-2.7
 5-6 9-10 13-.7 1-7.3 1-20 1H6z`,
  leftbraceunder: `M0 6l6-6h17c12.688 0 19.313.3 20 1 4 4 7.313 8.3 10 13
 35.313 51.3 80.813 93.8 136.5 127.5 55.688 33.7 117.188 55.8 184.5 66.5.688
 0 2 .3 4 1 18.688 2.7 76 4.3 172 5h399450v120H429l-6-1c-124.688-8-235-61.7
-331-161C60.687 138.7 32.312 99.3 7 54L0 41V6z`,
  // overgroup is from the MnSymbol package (public domain)
  leftgroup: `M400000 80
H435C64 80 168.3 229.4 21 260c-5.9 1.2-18 0-18 0-2 0-3-1-3-3v-38C76 61 257 0
 435 0h399565z`,
  leftgroupunder: `M400000 262
H435C64 262 168.3 112.6 21 82c-5.9-1.2-18 0-18 0-2 0-3 1-3 3v38c76 158 257 219
 435 219h399565z`,
  // Harpoons are from glyph U+21BD in font KaTeX Main
  leftharpoon: `M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3
-3.3 10.2-9.5 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5
-18.3 3-21-1.3-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7
-196 228-6.7 4.7-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40z`,
  leftharpoonplus: `M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3-3.3 10.2-9.5
 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5-18.3 3-21-1.3
-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7-196 228-6.7 4.7
-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40zM0 435v40h400000v-40z
m0 0v40h400000v-40z`,
  leftharpoondown: `M7 241c-4 4-6.333 8.667-7 14 0 5.333.667 9 2 11s5.333
 5.333 12 10c90.667 54 156 130 196 228 3.333 10.667 6.333 16.333 9 17 2 .667 5
 1 9 1h5c10.667 0 16.667-2 18-6 2-2.667 1-9.667-3-21-32-87.333-82.667-157.667
-152-211l-3-3h399907v-40zM93 281 H400000 v-40L7 241z`,
  leftharpoondownplus: `M7 435c-4 4-6.3 8.7-7 14 0 5.3.7 9 2 11s5.3 5.3 12
 10c90.7 54 156 130 196 228 3.3 10.7 6.3 16.3 9 17 2 .7 5 1 9 1h5c10.7 0 16.7
-2 18-6 2-2.7 1-9.7-3-21-32-87.3-82.7-157.7-152-211l-3-3h399907v-40H7zm93 0
v40h399900v-40zM0 241v40h399900v-40zm0 0v40h399900v-40z`,
  // hook is from glyph U+21A9 in font KaTeX Main
  lefthook: `M400000 281 H103s-33-11.2-61-33.5S0 197.3 0 164s14.2-61.2 42.5
-83.5C70.8 58.2 104 47 142 47 c16.7 0 25 6.7 25 20 0 12-8.7 18.7-26 20-40 3.3
-68.7 15.7-86 37-10 12-15 25.3-15 40 0 22.7 9.8 40.7 29.5 54 19.7 13.3 43.5 21
 71.5 23h399859zM103 281v-40h399897v40z`,
  leftlinesegment: `M40 281 V428 H0 V94 H40 V241 H400000 v40z
M40 281 V428 H0 V94 H40 V241 H400000 v40z`,
  leftmapsto: `M40 281 V448H0V74H40V241H400000v40z
M40 281 V448H0V74H40V241H400000v40z`,
  // tofrom is from glyph U+21C4 in font KaTeX AMS Regular
  leftToFrom: `M0 147h400000v40H0zm0 214c68 40 115.7 95.7 143 167h22c15.3 0 23
-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69-70-101l-7-8h399905v-40H95l7-8
c28.7-32 52-65.7 70-101 10.7-23.3 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 265.3
 68 321 0 361zm0-174v-40h399900v40zm100 154v40h399900v-40z`,
  longequal: `M0 50 h400000 v40H0z m0 194h40000v40H0z
M0 50 h400000 v40H0z m0 194h40000v40H0z`,
  midbrace: `M200428 334
c-100.7-8.3-195.3-44-280-108-55.3-42-101.7-93-139-153l-9-14c-2.7 4-5.7 8.7-9 14
-53.3 86.7-123.7 153-211 199-66.7 36-137.3 56.3-212 62H0V214h199568c178.3-11.7
 311.7-78.3 403-201 6-8 9.7-12 11-12 .7-.7 6.7-1 18-1s17.3.3 18 1c1.3 0 5 4 11
 12 44.7 59.3 101.3 106.3 170 141s145.3 54.3 229 60h199572v120z`,
  midbraceunder: `M199572 214
c100.7 8.3 195.3 44 280 108 55.3 42 101.7 93 139 153l9 14c2.7-4 5.7-8.7 9-14
 53.3-86.7 123.7-153 211-199 66.7-36 137.3-56.3 212-62h199568v120H200432c-178.3
 11.7-311.7 78.3-403 201-6 8-9.7 12-11 12-.7.7-6.7 1-18 1s-17.3-.3-18-1c-1.3 0
-5-4-11-12-44.7-59.3-101.3-106.3-170-141s-145.3-54.3-229-60H0V214z`,
  oiintSize1: `M512.6 71.6c272.6 0 320.3 106.8 320.3 178.2 0 70.8-47.7 177.6
-320.3 177.6S193.1 320.6 193.1 249.8c0-71.4 46.9-178.2 319.5-178.2z
m368.1 178.2c0-86.4-60.9-215.4-368.1-215.4-306.4 0-367.3 129-367.3 215.4 0 85.8
60.9 214.8 367.3 214.8 307.2 0 368.1-129 368.1-214.8z`,
  oiintSize2: `M757.8 100.1c384.7 0 451.1 137.6 451.1 230 0 91.3-66.4 228.8
-451.1 228.8-386.3 0-452.7-137.5-452.7-228.8 0-92.4 66.4-230 452.7-230z
m502.4 230c0-111.2-82.4-277.2-502.4-277.2s-504 166-504 277.2
c0 110 84 276 504 276s502.4-166 502.4-276z`,
  oiiintSize1: `M681.4 71.6c408.9 0 480.5 106.8 480.5 178.2 0 70.8-71.6 177.6
-480.5 177.6S202.1 320.6 202.1 249.8c0-71.4 70.5-178.2 479.3-178.2z
m525.8 178.2c0-86.4-86.8-215.4-525.7-215.4-437.9 0-524.7 129-524.7 215.4 0
85.8 86.8 214.8 524.7 214.8 438.9 0 525.7-129 525.7-214.8z`,
  oiiintSize2: `M1021.2 53c603.6 0 707.8 165.8 707.8 277.2 0 110-104.2 275.8
-707.8 275.8-606 0-710.2-165.8-710.2-275.8C311 218.8 415.2 53 1021.2 53z
m770.4 277.1c0-131.2-126.4-327.6-770.5-327.6S248.4 198.9 248.4 330.1
c0 130 128.8 326.4 772.7 326.4s770.5-196.4 770.5-326.4z`,
  rightarrow: `M0 241v40h399891c-47.3 35.3-84 78-110 128
-16.7 32-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20
 11 8 0 13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7
 39-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85
-40.5-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5
-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67
 151.7 139 205zm0 0v40h399900v-40z`,
  rightbrace: `M400000 542l
-6 6h-17c-12.7 0-19.3-.3-20-1-4-4-7.3-8.3-10-13-35.3-51.3-80.8-93.8-136.5-127.5
s-117.2-55.8-184.5-66.5c-.7 0-2-.3-4-1-18.7-2.7-76-4.3-172-5H0V214h399571l6 1
c124.7 8 235 61.7 331 161 31.3 33.3 59.7 72.7 85 118l7 13v35z`,
  rightbraceunder: `M399994 0l6 6v35l-6 11c-56 104-135.3 181.3-238 232-57.3
 28.7-117 45-179 50H-300V214h399897c43.3-7 81-15 113-26 100.7-33 179.7-91 237
-174 2.7-5 6-9 10-13 .7-1 7.3-1 20-1h17z`,
  rightgroup: `M0 80h399565c371 0 266.7 149.4 414 180 5.9 1.2 18 0 18 0 2 0
 3-1 3-3v-38c-76-158-257-219-435-219H0z`,
  rightgroupunder: `M0 262h399565c371 0 266.7-149.4 414-180 5.9-1.2 18 0 18
 0 2 0 3 1 3 3v38c-76 158-257 219-435 219H0z`,
  rightharpoon: `M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3
-3.7-15.3-11-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2
-10.7 0-16.7 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58
 69.2 92 94.5zm0 0v40h399900v-40z`,
  rightharpoonplus: `M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3-3.7-15.3-11
-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2-10.7 0-16.7
 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58 69.2 92 94.5z
m0 0v40h399900v-40z m100 194v40h399900v-40zm0 0v40h399900v-40z`,
  rightharpoondown: `M399747 511c0 7.3 6.7 11 20 11 8 0 13-.8 15-2.5s4.7-6.8
 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3 8.5-5.8 9.5
-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3-64.7 57-92 95
-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 241v40h399900v-40z`,
  rightharpoondownplus: `M399747 705c0 7.3 6.7 11 20 11 8 0 13-.8
 15-2.5s4.7-6.8 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3
 8.5-5.8 9.5-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3
-64.7 57-92 95-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 435v40h399900v-40z
m0-194v40h400000v-40zm0 0v40h400000v-40z`,
  righthook: `M399859 241c-764 0 0 0 0 0 40-3.3 68.7-15.7 86-37 10-12 15-25.3
 15-40 0-22.7-9.8-40.7-29.5-54-19.7-13.3-43.5-21-71.5-23-17.3-1.3-26-8-26-20 0
-13.3 8.7-20 26-20 38 0 71 11.2 99 33.5 0 0 7 5.6 21 16.7 14 11.2 21 33.5 21
 66.8s-14 61.2-42 83.5c-28 22.3-61 33.5-99 33.5L0 241z M0 281v-40h399859v40z`,
  rightlinesegment: `M399960 241 V94 h40 V428 h-40 V281 H0 v-40z
M399960 241 V94 h40 V428 h-40 V281 H0 v-40z`,
  rightToFrom: `M400000 167c-70.7-42-118-97.7-142-167h-23c-15.3 0-23 .3-23
 1 0 1.3 5.3 13.7 16 37 18 35.3 41.3 69 70 101l7 8H0v40h399905l-7 8c-28.7 32
-52 65.7-70 101-10.7 23.3-16 35.7-16 37 0 .7 7.7 1 23 1h23c24-69.3 71.3-125 142
-167z M100 147v40h399900v-40zM0 341v40h399900v-40z`,
  // twoheadleftarrow is from glyph U+219E in font KaTeX AMS Regular
  twoheadleftarrow: `M0 167c68 40
 115.7 95.7 143 167h22c15.3 0 23-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69
-70-101l-7-8h125l9 7c50.7 39.3 85 86 103 140h46c0-4.7-6.3-18.7-19-42-18-35.3
-40-67.3-66-96l-9-9h399716v-40H284l9-9c26-28.7 48-60.7 66-96 12.7-23.333 19
-37.333 19-42h-46c-18 54-52.3 100.7-103 140l-9 7H95l7-8c28.7-32 52-65.7 70-101
 10.7-23.333 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 71.3 68 127 0 167z`,
  twoheadrightarrow: `M400000 167
c-68-40-115.7-95.7-143-167h-22c-15.3 0-23 .3-23 1 0 1.3 5.3 13.7 16 37 18 35.3
 41.3 69 70 101l7 8h-125l-9-7c-50.7-39.3-85-86-103-140h-46c0 4.7 6.3 18.7 19 42
 18 35.3 40 67.3 66 96l9 9H0v40h399716l-9 9c-26 28.7-48 60.7-66 96-12.7 23.333
-19 37.333-19 42h46c18-54 52.3-100.7 103-140l9-7h125l-7 8c-28.7 32-52 65.7-70
 101-10.7 23.333-16 35.7-16 37 0 .7 7.7 1 23 1h22c27.3-71.3 75-127 143-167z`,
  // tilde1 is a modified version of a glyph from the MnSymbol package
  tilde1: `M200 55.538c-77 0-168 73.953-177 73.953-3 0-7
-2.175-9-5.437L2 97c-1-2-2-4-2-6 0-4 2-7 5-9l20-12C116 12 171 0 207 0c86 0
 114 68 191 68 78 0 168-68 177-68 4 0 7 2 9 5l12 19c1 2.175 2 4.35 2 6.525 0
 4.35-2 7.613-5 9.788l-19 13.05c-92 63.077-116.937 75.308-183 76.128
-68.267.847-113-73.952-191-73.952z`,
  // ditto tilde2, tilde3, & tilde4
  tilde2: `M344 55.266c-142 0-300.638 81.316-311.5 86.418
-8.01 3.762-22.5 10.91-23.5 5.562L1 120c-1-2-1-3-1-4 0-5 3-9 8-10l18.4-9C160.9
 31.9 283 0 358 0c148 0 188 122 331 122s314-97 326-97c4 0 8 2 10 7l7 21.114
c1 2.14 1 3.21 1 4.28 0 5.347-3 9.626-7 10.696l-22.3 12.622C852.6 158.372 751
 181.476 676 181.476c-149 0-189-126.21-332-126.21z`,
  tilde3: `M786 59C457 59 32 175.242 13 175.242c-6 0-10-3.457
-11-10.37L.15 138c-1-7 3-12 10-13l19.2-6.4C378.4 40.7 634.3 0 804.3 0c337 0
 411.8 157 746.8 157 328 0 754-112 773-112 5 0 10 3 11 9l1 14.075c1 8.066-.697
 16.595-6.697 17.492l-21.052 7.31c-367.9 98.146-609.15 122.696-778.15 122.696
 -338 0-409-156.573-744-156.573z`,
  tilde4: `M786 58C457 58 32 177.487 13 177.487c-6 0-10-3.345
-11-10.035L.15 143c-1-7 3-12 10-13l22-6.7C381.2 35 637.15 0 807.15 0c337 0 409
 177 744 177 328 0 754-127 773-127 5 0 10 3 11 9l1 14.794c1 7.805-3 13.38-9
 14.495l-20.7 5.574c-366.85 99.79-607.3 139.372-776.3 139.372-338 0-409
 -175.236-744-175.236z`,
  // vec is from glyph U+20D7 in font KaTeX Main
  vec: `M377 20c0-5.333 1.833-10 5.5-14S391 0 397 0c4.667 0 8.667 1.667 12 5
3.333 2.667 6.667 9 10 19 6.667 24.667 20.333 43.667 41 57 7.333 4.667 11
10.667 11 18 0 6-1 10-3 12s-6.667 5-14 9c-28.667 14.667-53.667 35.667-75 63
-1.333 1.333-3.167 3.5-5.5 6.5s-4 4.833-5 5.5c-1 .667-2.5 1.333-4.5 2s-4.333 1
-7 1c-4.667 0-9.167-1.833-13.5-5.5S337 184 337 178c0-12.667 15.667-32.333 47-59
H213l-171-1c-8.667-6-13-12.333-13-19 0-4.667 4.333-11.333 13-20h359
c-16-25.333-24-45-24-59z`,
  // widehat1 is a modified version of a glyph from the MnSymbol package
  widehat1: `M529 0h5l519 115c5 1 9 5 9 10 0 1-1 2-1 3l-4 22
c-1 5-5 9-11 9h-2L532 67 19 159h-2c-5 0-9-4-11-9l-5-22c-1-6 2-12 8-13z`,
  // ditto widehat2, widehat3, & widehat4
  widehat2: `M1181 0h2l1171 176c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 220h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`,
  widehat3: `M1181 0h2l1171 236c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 280h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`,
  widehat4: `M1181 0h2l1171 296c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 340h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`,
  // widecheck paths are all inverted versions of widehat
  widecheck1: `M529,159h5l519,-115c5,-1,9,-5,9,-10c0,-1,-1,-2,-1,-3l-4,-22c-1,
-5,-5,-9,-11,-9h-2l-512,92l-513,-92h-2c-5,0,-9,4,-11,9l-5,22c-1,6,2,12,8,13z`,
  widecheck2: `M1181,220h2l1171,-176c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,153l-1167,-153h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`,
  widecheck3: `M1181,280h2l1171,-236c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,213l-1167,-213h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`,
  widecheck4: `M1181,340h2l1171,-296c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,273l-1167,-273h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`,
  // The next ten paths support reaction arrows from the mhchem package.
  // Arrows for \ce{<-->} are offset from xAxis by 0.22ex, per mhchem in LaTeX
  // baraboveleftarrow is mostly from glyph U+2190 in font KaTeX Main
  baraboveleftarrow: `M400000 620h-399890l3 -3c68.7 -52.7 113.7 -120 135 -202
c4 -14.7 6 -23 6 -25c0 -7.3 -7 -11 -21 -11c-8 0 -13.2 0.8 -15.5 2.5
c-2.3 1.7 -4.2 5.8 -5.5 12.5c-1.3 4.7 -2.7 10.3 -4 17c-12 48.7 -34.8 92 -68.5 130
s-74.2 66.3 -121.5 85c-10 4 -16 7.7 -18 11c0 8.7 6 14.3 18 17c47.3 18.7 87.8 47
121.5 85s56.5 81.3 68.5 130c0.7 2 1.3 5 2 9s1.2 6.7 1.5 8c0.3 1.3 1 3.3 2 6
s2.2 4.5 3.5 5.5c1.3 1 3.3 1.8 6 2.5s6 1 10 1c14 0 21 -3.7 21 -11
c0 -2 -2 -10.3 -6 -25c-20 -79.3 -65 -146.7 -135 -202l-3 -3h399890z
M100 620v40h399900v-40z M0 241v40h399900v-40zM0 241v40h399900v-40z`,
  // rightarrowabovebar is mostly from glyph U+2192, KaTeX Main
  rightarrowabovebar: `M0 241v40h399891c-47.3 35.3-84 78-110 128-16.7 32
-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20 11 8 0
13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7 39
-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85-40.5
-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5
-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67
151.7 139 205zm96 379h399894v40H0zm0 0h399904v40H0z`,
  // The short left harpoon has 0.5em (i.e. 500 units) kern on the left end.
  // Ref from mhchem.sty: \rlap{\raisebox{-.22ex}{$\kern0.5em
  baraboveshortleftharpoon: `M507,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11
c1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17
c2,0.7,5,1,9,1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21
c-32,-87.3,-82.7,-157.7,-152,-211c0,0,-3,-3,-3,-3l399351,0l0,-40
c-398570,0,-399437,0,-399437,0z M593 435 v40 H399500 v-40z
M0 281 v-40 H399908 v40z M0 281 v-40 H399908 v40z`,
  rightharpoonaboveshortbar: `M0,241 l0,40c399126,0,399993,0,399993,0
c4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,
-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6
c-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z
M0 241 v40 H399908 v-40z M0 475 v-40 H399500 v40z M0 475 v-40 H399500 v40z`,
  shortbaraboveleftharpoon: `M7,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11
c1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17c2,0.7,5,1,9,
1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21c-32,-87.3,-82.7,-157.7,
-152,-211c0,0,-3,-3,-3,-3l399907,0l0,-40c-399126,0,-399993,0,-399993,0z
M93 435 v40 H400000 v-40z M500 241 v40 H400000 v-40z M500 241 v40 H400000 v-40z`,
  shortrightharpoonabovebar: `M53,241l0,40c398570,0,399437,0,399437,0
c4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,
-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6
c-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z
M500 241 v40 H399408 v-40z M500 435 v40 H400000 v-40z`
}, en = function(e, t) {
  switch (e) {
    case "lbrack":
      return "M403 1759 V84 H666 V0 H319 V1759 v" + t + ` v1759 h347 v-84
H403z M403 1759 V0 H319 V1759 v` + t + " v1759 h84z";
    case "rbrack":
      return "M347 1759 V0 H0 V84 H263 V1759 v" + t + ` v1759 H0 v84 H347z
M347 1759 V0 H263 V1759 v` + t + " v1759 h84z";
    case "vert":
      return "M145 15 v585 v" + t + ` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v` + -t + ` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M188 15 H145 v585 v` + t + " v585 h43z";
    case "doublevert":
      return "M145 15 v585 v" + t + ` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v` + -t + ` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M188 15 H145 v585 v` + t + ` v585 h43z
M367 15 v585 v` + t + ` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v` + -t + ` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M410 15 H367 v585 v` + t + " v585 h43z";
    case "lfloor":
      return "M319 602 V0 H403 V602 v" + t + ` v1715 h263 v84 H319z
MM319 602 V0 H403 V602 v` + t + " v1715 H319z";
    case "rfloor":
      return "M319 602 V0 H403 V602 v" + t + ` v1799 H0 v-84 H319z
MM319 602 V0 H403 V602 v` + t + " v1715 H319z";
    case "lceil":
      return "M403 1759 V84 H666 V0 H319 V1759 v" + t + ` v602 h84z
M403 1759 V0 H319 V1759 v` + t + " v602 h84z";
    case "rceil":
      return "M347 1759 V0 H0 V84 H263 V1759 v" + t + ` v602 h84z
M347 1759 V0 h-84 V1759 v` + t + " v602 h84z";
    case "lparen":
      return `M863,9c0,-2,-2,-5,-6,-9c0,0,-17,0,-17,0c-12.7,0,-19.3,0.3,-20,1
c-5.3,5.3,-10.3,11,-15,17c-242.7,294.7,-395.3,682,-458,1162c-21.3,163.3,-33.3,349,
-36,557 l0,` + (t + 84) + `c0.2,6,0,26,0,60c2,159.3,10,310.7,24,454c53.3,528,210,
949.7,470,1265c4.7,6,9.7,11.7,15,17c0.7,0.7,7,1,19,1c0,0,18,0,18,0c4,-4,6,-7,6,-9
c0,-2.7,-3.3,-8.7,-10,-18c-135.3,-192.7,-235.5,-414.3,-300.5,-665c-65,-250.7,-102.5,
-544.7,-112.5,-882c-2,-104,-3,-167,-3,-189
l0,-` + (t + 92) + `c0,-162.7,5.7,-314,17,-454c20.7,-272,63.7,-513,129,-723c65.3,
-210,155.3,-396.3,270,-559c6.7,-9.3,10,-15.3,10,-18z`;
    case "rparen":
      return `M76,0c-16.7,0,-25,3,-25,9c0,2,2,6.3,6,13c21.3,28.7,42.3,60.3,
63,95c96.7,156.7,172.8,332.5,228.5,527.5c55.7,195,92.8,416.5,111.5,664.5
c11.3,139.3,17,290.7,17,454c0,28,1.7,43,3.3,45l0,` + (t + 9) + `
c-3,4,-3.3,16.7,-3.3,38c0,162,-5.7,313.7,-17,455c-18.7,248,-55.8,469.3,-111.5,664
c-55.7,194.7,-131.8,370.3,-228.5,527c-20.7,34.7,-41.7,66.3,-63,95c-2,3.3,-4,7,-6,11
c0,7.3,5.7,11,17,11c0,0,11,0,11,0c9.3,0,14.3,-0.3,15,-1c5.3,-5.3,10.3,-11,15,-17
c242.7,-294.7,395.3,-681.7,458,-1161c21.3,-164.7,33.3,-350.7,36,-558
l0,-` + (t + 144) + `c-2,-159.3,-10,-310.7,-24,-454c-53.3,-528,-210,-949.7,
-470,-1265c-4.7,-6,-9.7,-11.7,-15,-17c-0.7,-0.7,-6.7,-1,-18,-1z`;
    default:
      throw new Error("Unknown stretchy delimiter.");
  }
};
class na {
  // HtmlDomNode
  // Never used; needed for satisfying interface.
  constructor(e) {
    this.children = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.maxFontSize = void 0, this.style = void 0, this.children = e, this.classes = [], this.height = 0, this.depth = 0, this.maxFontSize = 0, this.style = {};
  }
  hasClass(e) {
    return X.contains(this.classes, e);
  }
  /** Convert the fragment into a node. */
  toNode() {
    for (var e = document.createDocumentFragment(), t = 0; t < this.children.length; t++)
      e.appendChild(this.children[t].toNode());
    return e;
  }
  /** Convert the fragment into HTML markup. */
  toMarkup() {
    for (var e = "", t = 0; t < this.children.length; t++)
      e += this.children[t].toMarkup();
    return e;
  }
  /**
   * Converts the math node into a string, similar to innerText. Applies to
   * MathDomNode's only.
   */
  toText() {
    var e = (t) => t.toText();
    return this.children.map(e).join("");
  }
}
var tt = {
  "AMS-Regular": {
    32: [0, 0, 0, 0, 0.25],
    65: [0, 0.68889, 0, 0, 0.72222],
    66: [0, 0.68889, 0, 0, 0.66667],
    67: [0, 0.68889, 0, 0, 0.72222],
    68: [0, 0.68889, 0, 0, 0.72222],
    69: [0, 0.68889, 0, 0, 0.66667],
    70: [0, 0.68889, 0, 0, 0.61111],
    71: [0, 0.68889, 0, 0, 0.77778],
    72: [0, 0.68889, 0, 0, 0.77778],
    73: [0, 0.68889, 0, 0, 0.38889],
    74: [0.16667, 0.68889, 0, 0, 0.5],
    75: [0, 0.68889, 0, 0, 0.77778],
    76: [0, 0.68889, 0, 0, 0.66667],
    77: [0, 0.68889, 0, 0, 0.94445],
    78: [0, 0.68889, 0, 0, 0.72222],
    79: [0.16667, 0.68889, 0, 0, 0.77778],
    80: [0, 0.68889, 0, 0, 0.61111],
    81: [0.16667, 0.68889, 0, 0, 0.77778],
    82: [0, 0.68889, 0, 0, 0.72222],
    83: [0, 0.68889, 0, 0, 0.55556],
    84: [0, 0.68889, 0, 0, 0.66667],
    85: [0, 0.68889, 0, 0, 0.72222],
    86: [0, 0.68889, 0, 0, 0.72222],
    87: [0, 0.68889, 0, 0, 1],
    88: [0, 0.68889, 0, 0, 0.72222],
    89: [0, 0.68889, 0, 0, 0.72222],
    90: [0, 0.68889, 0, 0, 0.66667],
    107: [0, 0.68889, 0, 0, 0.55556],
    160: [0, 0, 0, 0, 0.25],
    165: [0, 0.675, 0.025, 0, 0.75],
    174: [0.15559, 0.69224, 0, 0, 0.94666],
    240: [0, 0.68889, 0, 0, 0.55556],
    295: [0, 0.68889, 0, 0, 0.54028],
    710: [0, 0.825, 0, 0, 2.33334],
    732: [0, 0.9, 0, 0, 2.33334],
    770: [0, 0.825, 0, 0, 2.33334],
    771: [0, 0.9, 0, 0, 2.33334],
    989: [0.08167, 0.58167, 0, 0, 0.77778],
    1008: [0, 0.43056, 0.04028, 0, 0.66667],
    8245: [0, 0.54986, 0, 0, 0.275],
    8463: [0, 0.68889, 0, 0, 0.54028],
    8487: [0, 0.68889, 0, 0, 0.72222],
    8498: [0, 0.68889, 0, 0, 0.55556],
    8502: [0, 0.68889, 0, 0, 0.66667],
    8503: [0, 0.68889, 0, 0, 0.44445],
    8504: [0, 0.68889, 0, 0, 0.66667],
    8513: [0, 0.68889, 0, 0, 0.63889],
    8592: [-0.03598, 0.46402, 0, 0, 0.5],
    8594: [-0.03598, 0.46402, 0, 0, 0.5],
    8602: [-0.13313, 0.36687, 0, 0, 1],
    8603: [-0.13313, 0.36687, 0, 0, 1],
    8606: [0.01354, 0.52239, 0, 0, 1],
    8608: [0.01354, 0.52239, 0, 0, 1],
    8610: [0.01354, 0.52239, 0, 0, 1.11111],
    8611: [0.01354, 0.52239, 0, 0, 1.11111],
    8619: [0, 0.54986, 0, 0, 1],
    8620: [0, 0.54986, 0, 0, 1],
    8621: [-0.13313, 0.37788, 0, 0, 1.38889],
    8622: [-0.13313, 0.36687, 0, 0, 1],
    8624: [0, 0.69224, 0, 0, 0.5],
    8625: [0, 0.69224, 0, 0, 0.5],
    8630: [0, 0.43056, 0, 0, 1],
    8631: [0, 0.43056, 0, 0, 1],
    8634: [0.08198, 0.58198, 0, 0, 0.77778],
    8635: [0.08198, 0.58198, 0, 0, 0.77778],
    8638: [0.19444, 0.69224, 0, 0, 0.41667],
    8639: [0.19444, 0.69224, 0, 0, 0.41667],
    8642: [0.19444, 0.69224, 0, 0, 0.41667],
    8643: [0.19444, 0.69224, 0, 0, 0.41667],
    8644: [0.1808, 0.675, 0, 0, 1],
    8646: [0.1808, 0.675, 0, 0, 1],
    8647: [0.1808, 0.675, 0, 0, 1],
    8648: [0.19444, 0.69224, 0, 0, 0.83334],
    8649: [0.1808, 0.675, 0, 0, 1],
    8650: [0.19444, 0.69224, 0, 0, 0.83334],
    8651: [0.01354, 0.52239, 0, 0, 1],
    8652: [0.01354, 0.52239, 0, 0, 1],
    8653: [-0.13313, 0.36687, 0, 0, 1],
    8654: [-0.13313, 0.36687, 0, 0, 1],
    8655: [-0.13313, 0.36687, 0, 0, 1],
    8666: [0.13667, 0.63667, 0, 0, 1],
    8667: [0.13667, 0.63667, 0, 0, 1],
    8669: [-0.13313, 0.37788, 0, 0, 1],
    8672: [-0.064, 0.437, 0, 0, 1.334],
    8674: [-0.064, 0.437, 0, 0, 1.334],
    8705: [0, 0.825, 0, 0, 0.5],
    8708: [0, 0.68889, 0, 0, 0.55556],
    8709: [0.08167, 0.58167, 0, 0, 0.77778],
    8717: [0, 0.43056, 0, 0, 0.42917],
    8722: [-0.03598, 0.46402, 0, 0, 0.5],
    8724: [0.08198, 0.69224, 0, 0, 0.77778],
    8726: [0.08167, 0.58167, 0, 0, 0.77778],
    8733: [0, 0.69224, 0, 0, 0.77778],
    8736: [0, 0.69224, 0, 0, 0.72222],
    8737: [0, 0.69224, 0, 0, 0.72222],
    8738: [0.03517, 0.52239, 0, 0, 0.72222],
    8739: [0.08167, 0.58167, 0, 0, 0.22222],
    8740: [0.25142, 0.74111, 0, 0, 0.27778],
    8741: [0.08167, 0.58167, 0, 0, 0.38889],
    8742: [0.25142, 0.74111, 0, 0, 0.5],
    8756: [0, 0.69224, 0, 0, 0.66667],
    8757: [0, 0.69224, 0, 0, 0.66667],
    8764: [-0.13313, 0.36687, 0, 0, 0.77778],
    8765: [-0.13313, 0.37788, 0, 0, 0.77778],
    8769: [-0.13313, 0.36687, 0, 0, 0.77778],
    8770: [-0.03625, 0.46375, 0, 0, 0.77778],
    8774: [0.30274, 0.79383, 0, 0, 0.77778],
    8776: [-0.01688, 0.48312, 0, 0, 0.77778],
    8778: [0.08167, 0.58167, 0, 0, 0.77778],
    8782: [0.06062, 0.54986, 0, 0, 0.77778],
    8783: [0.06062, 0.54986, 0, 0, 0.77778],
    8785: [0.08198, 0.58198, 0, 0, 0.77778],
    8786: [0.08198, 0.58198, 0, 0, 0.77778],
    8787: [0.08198, 0.58198, 0, 0, 0.77778],
    8790: [0, 0.69224, 0, 0, 0.77778],
    8791: [0.22958, 0.72958, 0, 0, 0.77778],
    8796: [0.08198, 0.91667, 0, 0, 0.77778],
    8806: [0.25583, 0.75583, 0, 0, 0.77778],
    8807: [0.25583, 0.75583, 0, 0, 0.77778],
    8808: [0.25142, 0.75726, 0, 0, 0.77778],
    8809: [0.25142, 0.75726, 0, 0, 0.77778],
    8812: [0.25583, 0.75583, 0, 0, 0.5],
    8814: [0.20576, 0.70576, 0, 0, 0.77778],
    8815: [0.20576, 0.70576, 0, 0, 0.77778],
    8816: [0.30274, 0.79383, 0, 0, 0.77778],
    8817: [0.30274, 0.79383, 0, 0, 0.77778],
    8818: [0.22958, 0.72958, 0, 0, 0.77778],
    8819: [0.22958, 0.72958, 0, 0, 0.77778],
    8822: [0.1808, 0.675, 0, 0, 0.77778],
    8823: [0.1808, 0.675, 0, 0, 0.77778],
    8828: [0.13667, 0.63667, 0, 0, 0.77778],
    8829: [0.13667, 0.63667, 0, 0, 0.77778],
    8830: [0.22958, 0.72958, 0, 0, 0.77778],
    8831: [0.22958, 0.72958, 0, 0, 0.77778],
    8832: [0.20576, 0.70576, 0, 0, 0.77778],
    8833: [0.20576, 0.70576, 0, 0, 0.77778],
    8840: [0.30274, 0.79383, 0, 0, 0.77778],
    8841: [0.30274, 0.79383, 0, 0, 0.77778],
    8842: [0.13597, 0.63597, 0, 0, 0.77778],
    8843: [0.13597, 0.63597, 0, 0, 0.77778],
    8847: [0.03517, 0.54986, 0, 0, 0.77778],
    8848: [0.03517, 0.54986, 0, 0, 0.77778],
    8858: [0.08198, 0.58198, 0, 0, 0.77778],
    8859: [0.08198, 0.58198, 0, 0, 0.77778],
    8861: [0.08198, 0.58198, 0, 0, 0.77778],
    8862: [0, 0.675, 0, 0, 0.77778],
    8863: [0, 0.675, 0, 0, 0.77778],
    8864: [0, 0.675, 0, 0, 0.77778],
    8865: [0, 0.675, 0, 0, 0.77778],
    8872: [0, 0.69224, 0, 0, 0.61111],
    8873: [0, 0.69224, 0, 0, 0.72222],
    8874: [0, 0.69224, 0, 0, 0.88889],
    8876: [0, 0.68889, 0, 0, 0.61111],
    8877: [0, 0.68889, 0, 0, 0.61111],
    8878: [0, 0.68889, 0, 0, 0.72222],
    8879: [0, 0.68889, 0, 0, 0.72222],
    8882: [0.03517, 0.54986, 0, 0, 0.77778],
    8883: [0.03517, 0.54986, 0, 0, 0.77778],
    8884: [0.13667, 0.63667, 0, 0, 0.77778],
    8885: [0.13667, 0.63667, 0, 0, 0.77778],
    8888: [0, 0.54986, 0, 0, 1.11111],
    8890: [0.19444, 0.43056, 0, 0, 0.55556],
    8891: [0.19444, 0.69224, 0, 0, 0.61111],
    8892: [0.19444, 0.69224, 0, 0, 0.61111],
    8901: [0, 0.54986, 0, 0, 0.27778],
    8903: [0.08167, 0.58167, 0, 0, 0.77778],
    8905: [0.08167, 0.58167, 0, 0, 0.77778],
    8906: [0.08167, 0.58167, 0, 0, 0.77778],
    8907: [0, 0.69224, 0, 0, 0.77778],
    8908: [0, 0.69224, 0, 0, 0.77778],
    8909: [-0.03598, 0.46402, 0, 0, 0.77778],
    8910: [0, 0.54986, 0, 0, 0.76042],
    8911: [0, 0.54986, 0, 0, 0.76042],
    8912: [0.03517, 0.54986, 0, 0, 0.77778],
    8913: [0.03517, 0.54986, 0, 0, 0.77778],
    8914: [0, 0.54986, 0, 0, 0.66667],
    8915: [0, 0.54986, 0, 0, 0.66667],
    8916: [0, 0.69224, 0, 0, 0.66667],
    8918: [0.0391, 0.5391, 0, 0, 0.77778],
    8919: [0.0391, 0.5391, 0, 0, 0.77778],
    8920: [0.03517, 0.54986, 0, 0, 1.33334],
    8921: [0.03517, 0.54986, 0, 0, 1.33334],
    8922: [0.38569, 0.88569, 0, 0, 0.77778],
    8923: [0.38569, 0.88569, 0, 0, 0.77778],
    8926: [0.13667, 0.63667, 0, 0, 0.77778],
    8927: [0.13667, 0.63667, 0, 0, 0.77778],
    8928: [0.30274, 0.79383, 0, 0, 0.77778],
    8929: [0.30274, 0.79383, 0, 0, 0.77778],
    8934: [0.23222, 0.74111, 0, 0, 0.77778],
    8935: [0.23222, 0.74111, 0, 0, 0.77778],
    8936: [0.23222, 0.74111, 0, 0, 0.77778],
    8937: [0.23222, 0.74111, 0, 0, 0.77778],
    8938: [0.20576, 0.70576, 0, 0, 0.77778],
    8939: [0.20576, 0.70576, 0, 0, 0.77778],
    8940: [0.30274, 0.79383, 0, 0, 0.77778],
    8941: [0.30274, 0.79383, 0, 0, 0.77778],
    8994: [0.19444, 0.69224, 0, 0, 0.77778],
    8995: [0.19444, 0.69224, 0, 0, 0.77778],
    9416: [0.15559, 0.69224, 0, 0, 0.90222],
    9484: [0, 0.69224, 0, 0, 0.5],
    9488: [0, 0.69224, 0, 0, 0.5],
    9492: [0, 0.37788, 0, 0, 0.5],
    9496: [0, 0.37788, 0, 0, 0.5],
    9585: [0.19444, 0.68889, 0, 0, 0.88889],
    9586: [0.19444, 0.74111, 0, 0, 0.88889],
    9632: [0, 0.675, 0, 0, 0.77778],
    9633: [0, 0.675, 0, 0, 0.77778],
    9650: [0, 0.54986, 0, 0, 0.72222],
    9651: [0, 0.54986, 0, 0, 0.72222],
    9654: [0.03517, 0.54986, 0, 0, 0.77778],
    9660: [0, 0.54986, 0, 0, 0.72222],
    9661: [0, 0.54986, 0, 0, 0.72222],
    9664: [0.03517, 0.54986, 0, 0, 0.77778],
    9674: [0.11111, 0.69224, 0, 0, 0.66667],
    9733: [0.19444, 0.69224, 0, 0, 0.94445],
    10003: [0, 0.69224, 0, 0, 0.83334],
    10016: [0, 0.69224, 0, 0, 0.83334],
    10731: [0.11111, 0.69224, 0, 0, 0.66667],
    10846: [0.19444, 0.75583, 0, 0, 0.61111],
    10877: [0.13667, 0.63667, 0, 0, 0.77778],
    10878: [0.13667, 0.63667, 0, 0, 0.77778],
    10885: [0.25583, 0.75583, 0, 0, 0.77778],
    10886: [0.25583, 0.75583, 0, 0, 0.77778],
    10887: [0.13597, 0.63597, 0, 0, 0.77778],
    10888: [0.13597, 0.63597, 0, 0, 0.77778],
    10889: [0.26167, 0.75726, 0, 0, 0.77778],
    10890: [0.26167, 0.75726, 0, 0, 0.77778],
    10891: [0.48256, 0.98256, 0, 0, 0.77778],
    10892: [0.48256, 0.98256, 0, 0, 0.77778],
    10901: [0.13667, 0.63667, 0, 0, 0.77778],
    10902: [0.13667, 0.63667, 0, 0, 0.77778],
    10933: [0.25142, 0.75726, 0, 0, 0.77778],
    10934: [0.25142, 0.75726, 0, 0, 0.77778],
    10935: [0.26167, 0.75726, 0, 0, 0.77778],
    10936: [0.26167, 0.75726, 0, 0, 0.77778],
    10937: [0.26167, 0.75726, 0, 0, 0.77778],
    10938: [0.26167, 0.75726, 0, 0, 0.77778],
    10949: [0.25583, 0.75583, 0, 0, 0.77778],
    10950: [0.25583, 0.75583, 0, 0, 0.77778],
    10955: [0.28481, 0.79383, 0, 0, 0.77778],
    10956: [0.28481, 0.79383, 0, 0, 0.77778],
    57350: [0.08167, 0.58167, 0, 0, 0.22222],
    57351: [0.08167, 0.58167, 0, 0, 0.38889],
    57352: [0.08167, 0.58167, 0, 0, 0.77778],
    57353: [0, 0.43056, 0.04028, 0, 0.66667],
    57356: [0.25142, 0.75726, 0, 0, 0.77778],
    57357: [0.25142, 0.75726, 0, 0, 0.77778],
    57358: [0.41951, 0.91951, 0, 0, 0.77778],
    57359: [0.30274, 0.79383, 0, 0, 0.77778],
    57360: [0.30274, 0.79383, 0, 0, 0.77778],
    57361: [0.41951, 0.91951, 0, 0, 0.77778],
    57366: [0.25142, 0.75726, 0, 0, 0.77778],
    57367: [0.25142, 0.75726, 0, 0, 0.77778],
    57368: [0.25142, 0.75726, 0, 0, 0.77778],
    57369: [0.25142, 0.75726, 0, 0, 0.77778],
    57370: [0.13597, 0.63597, 0, 0, 0.77778],
    57371: [0.13597, 0.63597, 0, 0, 0.77778]
  },
  "Caligraphic-Regular": {
    32: [0, 0, 0, 0, 0.25],
    65: [0, 0.68333, 0, 0.19445, 0.79847],
    66: [0, 0.68333, 0.03041, 0.13889, 0.65681],
    67: [0, 0.68333, 0.05834, 0.13889, 0.52653],
    68: [0, 0.68333, 0.02778, 0.08334, 0.77139],
    69: [0, 0.68333, 0.08944, 0.11111, 0.52778],
    70: [0, 0.68333, 0.09931, 0.11111, 0.71875],
    71: [0.09722, 0.68333, 0.0593, 0.11111, 0.59487],
    72: [0, 0.68333, 965e-5, 0.11111, 0.84452],
    73: [0, 0.68333, 0.07382, 0, 0.54452],
    74: [0.09722, 0.68333, 0.18472, 0.16667, 0.67778],
    75: [0, 0.68333, 0.01445, 0.05556, 0.76195],
    76: [0, 0.68333, 0, 0.13889, 0.68972],
    77: [0, 0.68333, 0, 0.13889, 1.2009],
    78: [0, 0.68333, 0.14736, 0.08334, 0.82049],
    79: [0, 0.68333, 0.02778, 0.11111, 0.79611],
    80: [0, 0.68333, 0.08222, 0.08334, 0.69556],
    81: [0.09722, 0.68333, 0, 0.11111, 0.81667],
    82: [0, 0.68333, 0, 0.08334, 0.8475],
    83: [0, 0.68333, 0.075, 0.13889, 0.60556],
    84: [0, 0.68333, 0.25417, 0, 0.54464],
    85: [0, 0.68333, 0.09931, 0.08334, 0.62583],
    86: [0, 0.68333, 0.08222, 0, 0.61278],
    87: [0, 0.68333, 0.08222, 0.08334, 0.98778],
    88: [0, 0.68333, 0.14643, 0.13889, 0.7133],
    89: [0.09722, 0.68333, 0.08222, 0.08334, 0.66834],
    90: [0, 0.68333, 0.07944, 0.13889, 0.72473],
    160: [0, 0, 0, 0, 0.25]
  },
  "Fraktur-Regular": {
    32: [0, 0, 0, 0, 0.25],
    33: [0, 0.69141, 0, 0, 0.29574],
    34: [0, 0.69141, 0, 0, 0.21471],
    38: [0, 0.69141, 0, 0, 0.73786],
    39: [0, 0.69141, 0, 0, 0.21201],
    40: [0.24982, 0.74947, 0, 0, 0.38865],
    41: [0.24982, 0.74947, 0, 0, 0.38865],
    42: [0, 0.62119, 0, 0, 0.27764],
    43: [0.08319, 0.58283, 0, 0, 0.75623],
    44: [0, 0.10803, 0, 0, 0.27764],
    45: [0.08319, 0.58283, 0, 0, 0.75623],
    46: [0, 0.10803, 0, 0, 0.27764],
    47: [0.24982, 0.74947, 0, 0, 0.50181],
    48: [0, 0.47534, 0, 0, 0.50181],
    49: [0, 0.47534, 0, 0, 0.50181],
    50: [0, 0.47534, 0, 0, 0.50181],
    51: [0.18906, 0.47534, 0, 0, 0.50181],
    52: [0.18906, 0.47534, 0, 0, 0.50181],
    53: [0.18906, 0.47534, 0, 0, 0.50181],
    54: [0, 0.69141, 0, 0, 0.50181],
    55: [0.18906, 0.47534, 0, 0, 0.50181],
    56: [0, 0.69141, 0, 0, 0.50181],
    57: [0.18906, 0.47534, 0, 0, 0.50181],
    58: [0, 0.47534, 0, 0, 0.21606],
    59: [0.12604, 0.47534, 0, 0, 0.21606],
    61: [-0.13099, 0.36866, 0, 0, 0.75623],
    63: [0, 0.69141, 0, 0, 0.36245],
    65: [0, 0.69141, 0, 0, 0.7176],
    66: [0, 0.69141, 0, 0, 0.88397],
    67: [0, 0.69141, 0, 0, 0.61254],
    68: [0, 0.69141, 0, 0, 0.83158],
    69: [0, 0.69141, 0, 0, 0.66278],
    70: [0.12604, 0.69141, 0, 0, 0.61119],
    71: [0, 0.69141, 0, 0, 0.78539],
    72: [0.06302, 0.69141, 0, 0, 0.7203],
    73: [0, 0.69141, 0, 0, 0.55448],
    74: [0.12604, 0.69141, 0, 0, 0.55231],
    75: [0, 0.69141, 0, 0, 0.66845],
    76: [0, 0.69141, 0, 0, 0.66602],
    77: [0, 0.69141, 0, 0, 1.04953],
    78: [0, 0.69141, 0, 0, 0.83212],
    79: [0, 0.69141, 0, 0, 0.82699],
    80: [0.18906, 0.69141, 0, 0, 0.82753],
    81: [0.03781, 0.69141, 0, 0, 0.82699],
    82: [0, 0.69141, 0, 0, 0.82807],
    83: [0, 0.69141, 0, 0, 0.82861],
    84: [0, 0.69141, 0, 0, 0.66899],
    85: [0, 0.69141, 0, 0, 0.64576],
    86: [0, 0.69141, 0, 0, 0.83131],
    87: [0, 0.69141, 0, 0, 1.04602],
    88: [0, 0.69141, 0, 0, 0.71922],
    89: [0.18906, 0.69141, 0, 0, 0.83293],
    90: [0.12604, 0.69141, 0, 0, 0.60201],
    91: [0.24982, 0.74947, 0, 0, 0.27764],
    93: [0.24982, 0.74947, 0, 0, 0.27764],
    94: [0, 0.69141, 0, 0, 0.49965],
    97: [0, 0.47534, 0, 0, 0.50046],
    98: [0, 0.69141, 0, 0, 0.51315],
    99: [0, 0.47534, 0, 0, 0.38946],
    100: [0, 0.62119, 0, 0, 0.49857],
    101: [0, 0.47534, 0, 0, 0.40053],
    102: [0.18906, 0.69141, 0, 0, 0.32626],
    103: [0.18906, 0.47534, 0, 0, 0.5037],
    104: [0.18906, 0.69141, 0, 0, 0.52126],
    105: [0, 0.69141, 0, 0, 0.27899],
    106: [0, 0.69141, 0, 0, 0.28088],
    107: [0, 0.69141, 0, 0, 0.38946],
    108: [0, 0.69141, 0, 0, 0.27953],
    109: [0, 0.47534, 0, 0, 0.76676],
    110: [0, 0.47534, 0, 0, 0.52666],
    111: [0, 0.47534, 0, 0, 0.48885],
    112: [0.18906, 0.52396, 0, 0, 0.50046],
    113: [0.18906, 0.47534, 0, 0, 0.48912],
    114: [0, 0.47534, 0, 0, 0.38919],
    115: [0, 0.47534, 0, 0, 0.44266],
    116: [0, 0.62119, 0, 0, 0.33301],
    117: [0, 0.47534, 0, 0, 0.5172],
    118: [0, 0.52396, 0, 0, 0.5118],
    119: [0, 0.52396, 0, 0, 0.77351],
    120: [0.18906, 0.47534, 0, 0, 0.38865],
    121: [0.18906, 0.47534, 0, 0, 0.49884],
    122: [0.18906, 0.47534, 0, 0, 0.39054],
    160: [0, 0, 0, 0, 0.25],
    8216: [0, 0.69141, 0, 0, 0.21471],
    8217: [0, 0.69141, 0, 0, 0.21471],
    58112: [0, 0.62119, 0, 0, 0.49749],
    58113: [0, 0.62119, 0, 0, 0.4983],
    58114: [0.18906, 0.69141, 0, 0, 0.33328],
    58115: [0.18906, 0.69141, 0, 0, 0.32923],
    58116: [0.18906, 0.47534, 0, 0, 0.50343],
    58117: [0, 0.69141, 0, 0, 0.33301],
    58118: [0, 0.62119, 0, 0, 0.33409],
    58119: [0, 0.47534, 0, 0, 0.50073]
  },
  "Main-Bold": {
    32: [0, 0, 0, 0, 0.25],
    33: [0, 0.69444, 0, 0, 0.35],
    34: [0, 0.69444, 0, 0, 0.60278],
    35: [0.19444, 0.69444, 0, 0, 0.95833],
    36: [0.05556, 0.75, 0, 0, 0.575],
    37: [0.05556, 0.75, 0, 0, 0.95833],
    38: [0, 0.69444, 0, 0, 0.89444],
    39: [0, 0.69444, 0, 0, 0.31944],
    40: [0.25, 0.75, 0, 0, 0.44722],
    41: [0.25, 0.75, 0, 0, 0.44722],
    42: [0, 0.75, 0, 0, 0.575],
    43: [0.13333, 0.63333, 0, 0, 0.89444],
    44: [0.19444, 0.15556, 0, 0, 0.31944],
    45: [0, 0.44444, 0, 0, 0.38333],
    46: [0, 0.15556, 0, 0, 0.31944],
    47: [0.25, 0.75, 0, 0, 0.575],
    48: [0, 0.64444, 0, 0, 0.575],
    49: [0, 0.64444, 0, 0, 0.575],
    50: [0, 0.64444, 0, 0, 0.575],
    51: [0, 0.64444, 0, 0, 0.575],
    52: [0, 0.64444, 0, 0, 0.575],
    53: [0, 0.64444, 0, 0, 0.575],
    54: [0, 0.64444, 0, 0, 0.575],
    55: [0, 0.64444, 0, 0, 0.575],
    56: [0, 0.64444, 0, 0, 0.575],
    57: [0, 0.64444, 0, 0, 0.575],
    58: [0, 0.44444, 0, 0, 0.31944],
    59: [0.19444, 0.44444, 0, 0, 0.31944],
    60: [0.08556, 0.58556, 0, 0, 0.89444],
    61: [-0.10889, 0.39111, 0, 0, 0.89444],
    62: [0.08556, 0.58556, 0, 0, 0.89444],
    63: [0, 0.69444, 0, 0, 0.54305],
    64: [0, 0.69444, 0, 0, 0.89444],
    65: [0, 0.68611, 0, 0, 0.86944],
    66: [0, 0.68611, 0, 0, 0.81805],
    67: [0, 0.68611, 0, 0, 0.83055],
    68: [0, 0.68611, 0, 0, 0.88194],
    69: [0, 0.68611, 0, 0, 0.75555],
    70: [0, 0.68611, 0, 0, 0.72361],
    71: [0, 0.68611, 0, 0, 0.90416],
    72: [0, 0.68611, 0, 0, 0.9],
    73: [0, 0.68611, 0, 0, 0.43611],
    74: [0, 0.68611, 0, 0, 0.59444],
    75: [0, 0.68611, 0, 0, 0.90138],
    76: [0, 0.68611, 0, 0, 0.69166],
    77: [0, 0.68611, 0, 0, 1.09166],
    78: [0, 0.68611, 0, 0, 0.9],
    79: [0, 0.68611, 0, 0, 0.86388],
    80: [0, 0.68611, 0, 0, 0.78611],
    81: [0.19444, 0.68611, 0, 0, 0.86388],
    82: [0, 0.68611, 0, 0, 0.8625],
    83: [0, 0.68611, 0, 0, 0.63889],
    84: [0, 0.68611, 0, 0, 0.8],
    85: [0, 0.68611, 0, 0, 0.88472],
    86: [0, 0.68611, 0.01597, 0, 0.86944],
    87: [0, 0.68611, 0.01597, 0, 1.18888],
    88: [0, 0.68611, 0, 0, 0.86944],
    89: [0, 0.68611, 0.02875, 0, 0.86944],
    90: [0, 0.68611, 0, 0, 0.70277],
    91: [0.25, 0.75, 0, 0, 0.31944],
    92: [0.25, 0.75, 0, 0, 0.575],
    93: [0.25, 0.75, 0, 0, 0.31944],
    94: [0, 0.69444, 0, 0, 0.575],
    95: [0.31, 0.13444, 0.03194, 0, 0.575],
    97: [0, 0.44444, 0, 0, 0.55902],
    98: [0, 0.69444, 0, 0, 0.63889],
    99: [0, 0.44444, 0, 0, 0.51111],
    100: [0, 0.69444, 0, 0, 0.63889],
    101: [0, 0.44444, 0, 0, 0.52708],
    102: [0, 0.69444, 0.10903, 0, 0.35139],
    103: [0.19444, 0.44444, 0.01597, 0, 0.575],
    104: [0, 0.69444, 0, 0, 0.63889],
    105: [0, 0.69444, 0, 0, 0.31944],
    106: [0.19444, 0.69444, 0, 0, 0.35139],
    107: [0, 0.69444, 0, 0, 0.60694],
    108: [0, 0.69444, 0, 0, 0.31944],
    109: [0, 0.44444, 0, 0, 0.95833],
    110: [0, 0.44444, 0, 0, 0.63889],
    111: [0, 0.44444, 0, 0, 0.575],
    112: [0.19444, 0.44444, 0, 0, 0.63889],
    113: [0.19444, 0.44444, 0, 0, 0.60694],
    114: [0, 0.44444, 0, 0, 0.47361],
    115: [0, 0.44444, 0, 0, 0.45361],
    116: [0, 0.63492, 0, 0, 0.44722],
    117: [0, 0.44444, 0, 0, 0.63889],
    118: [0, 0.44444, 0.01597, 0, 0.60694],
    119: [0, 0.44444, 0.01597, 0, 0.83055],
    120: [0, 0.44444, 0, 0, 0.60694],
    121: [0.19444, 0.44444, 0.01597, 0, 0.60694],
    122: [0, 0.44444, 0, 0, 0.51111],
    123: [0.25, 0.75, 0, 0, 0.575],
    124: [0.25, 0.75, 0, 0, 0.31944],
    125: [0.25, 0.75, 0, 0, 0.575],
    126: [0.35, 0.34444, 0, 0, 0.575],
    160: [0, 0, 0, 0, 0.25],
    163: [0, 0.69444, 0, 0, 0.86853],
    168: [0, 0.69444, 0, 0, 0.575],
    172: [0, 0.44444, 0, 0, 0.76666],
    176: [0, 0.69444, 0, 0, 0.86944],
    177: [0.13333, 0.63333, 0, 0, 0.89444],
    184: [0.17014, 0, 0, 0, 0.51111],
    198: [0, 0.68611, 0, 0, 1.04166],
    215: [0.13333, 0.63333, 0, 0, 0.89444],
    216: [0.04861, 0.73472, 0, 0, 0.89444],
    223: [0, 0.69444, 0, 0, 0.59722],
    230: [0, 0.44444, 0, 0, 0.83055],
    247: [0.13333, 0.63333, 0, 0, 0.89444],
    248: [0.09722, 0.54167, 0, 0, 0.575],
    305: [0, 0.44444, 0, 0, 0.31944],
    338: [0, 0.68611, 0, 0, 1.16944],
    339: [0, 0.44444, 0, 0, 0.89444],
    567: [0.19444, 0.44444, 0, 0, 0.35139],
    710: [0, 0.69444, 0, 0, 0.575],
    711: [0, 0.63194, 0, 0, 0.575],
    713: [0, 0.59611, 0, 0, 0.575],
    714: [0, 0.69444, 0, 0, 0.575],
    715: [0, 0.69444, 0, 0, 0.575],
    728: [0, 0.69444, 0, 0, 0.575],
    729: [0, 0.69444, 0, 0, 0.31944],
    730: [0, 0.69444, 0, 0, 0.86944],
    732: [0, 0.69444, 0, 0, 0.575],
    733: [0, 0.69444, 0, 0, 0.575],
    915: [0, 0.68611, 0, 0, 0.69166],
    916: [0, 0.68611, 0, 0, 0.95833],
    920: [0, 0.68611, 0, 0, 0.89444],
    923: [0, 0.68611, 0, 0, 0.80555],
    926: [0, 0.68611, 0, 0, 0.76666],
    928: [0, 0.68611, 0, 0, 0.9],
    931: [0, 0.68611, 0, 0, 0.83055],
    933: [0, 0.68611, 0, 0, 0.89444],
    934: [0, 0.68611, 0, 0, 0.83055],
    936: [0, 0.68611, 0, 0, 0.89444],
    937: [0, 0.68611, 0, 0, 0.83055],
    8211: [0, 0.44444, 0.03194, 0, 0.575],
    8212: [0, 0.44444, 0.03194, 0, 1.14999],
    8216: [0, 0.69444, 0, 0, 0.31944],
    8217: [0, 0.69444, 0, 0, 0.31944],
    8220: [0, 0.69444, 0, 0, 0.60278],
    8221: [0, 0.69444, 0, 0, 0.60278],
    8224: [0.19444, 0.69444, 0, 0, 0.51111],
    8225: [0.19444, 0.69444, 0, 0, 0.51111],
    8242: [0, 0.55556, 0, 0, 0.34444],
    8407: [0, 0.72444, 0.15486, 0, 0.575],
    8463: [0, 0.69444, 0, 0, 0.66759],
    8465: [0, 0.69444, 0, 0, 0.83055],
    8467: [0, 0.69444, 0, 0, 0.47361],
    8472: [0.19444, 0.44444, 0, 0, 0.74027],
    8476: [0, 0.69444, 0, 0, 0.83055],
    8501: [0, 0.69444, 0, 0, 0.70277],
    8592: [-0.10889, 0.39111, 0, 0, 1.14999],
    8593: [0.19444, 0.69444, 0, 0, 0.575],
    8594: [-0.10889, 0.39111, 0, 0, 1.14999],
    8595: [0.19444, 0.69444, 0, 0, 0.575],
    8596: [-0.10889, 0.39111, 0, 0, 1.14999],
    8597: [0.25, 0.75, 0, 0, 0.575],
    8598: [0.19444, 0.69444, 0, 0, 1.14999],
    8599: [0.19444, 0.69444, 0, 0, 1.14999],
    8600: [0.19444, 0.69444, 0, 0, 1.14999],
    8601: [0.19444, 0.69444, 0, 0, 1.14999],
    8636: [-0.10889, 0.39111, 0, 0, 1.14999],
    8637: [-0.10889, 0.39111, 0, 0, 1.14999],
    8640: [-0.10889, 0.39111, 0, 0, 1.14999],
    8641: [-0.10889, 0.39111, 0, 0, 1.14999],
    8656: [-0.10889, 0.39111, 0, 0, 1.14999],
    8657: [0.19444, 0.69444, 0, 0, 0.70277],
    8658: [-0.10889, 0.39111, 0, 0, 1.14999],
    8659: [0.19444, 0.69444, 0, 0, 0.70277],
    8660: [-0.10889, 0.39111, 0, 0, 1.14999],
    8661: [0.25, 0.75, 0, 0, 0.70277],
    8704: [0, 0.69444, 0, 0, 0.63889],
    8706: [0, 0.69444, 0.06389, 0, 0.62847],
    8707: [0, 0.69444, 0, 0, 0.63889],
    8709: [0.05556, 0.75, 0, 0, 0.575],
    8711: [0, 0.68611, 0, 0, 0.95833],
    8712: [0.08556, 0.58556, 0, 0, 0.76666],
    8715: [0.08556, 0.58556, 0, 0, 0.76666],
    8722: [0.13333, 0.63333, 0, 0, 0.89444],
    8723: [0.13333, 0.63333, 0, 0, 0.89444],
    8725: [0.25, 0.75, 0, 0, 0.575],
    8726: [0.25, 0.75, 0, 0, 0.575],
    8727: [-0.02778, 0.47222, 0, 0, 0.575],
    8728: [-0.02639, 0.47361, 0, 0, 0.575],
    8729: [-0.02639, 0.47361, 0, 0, 0.575],
    8730: [0.18, 0.82, 0, 0, 0.95833],
    8733: [0, 0.44444, 0, 0, 0.89444],
    8734: [0, 0.44444, 0, 0, 1.14999],
    8736: [0, 0.69224, 0, 0, 0.72222],
    8739: [0.25, 0.75, 0, 0, 0.31944],
    8741: [0.25, 0.75, 0, 0, 0.575],
    8743: [0, 0.55556, 0, 0, 0.76666],
    8744: [0, 0.55556, 0, 0, 0.76666],
    8745: [0, 0.55556, 0, 0, 0.76666],
    8746: [0, 0.55556, 0, 0, 0.76666],
    8747: [0.19444, 0.69444, 0.12778, 0, 0.56875],
    8764: [-0.10889, 0.39111, 0, 0, 0.89444],
    8768: [0.19444, 0.69444, 0, 0, 0.31944],
    8771: [222e-5, 0.50222, 0, 0, 0.89444],
    8773: [0.027, 0.638, 0, 0, 0.894],
    8776: [0.02444, 0.52444, 0, 0, 0.89444],
    8781: [222e-5, 0.50222, 0, 0, 0.89444],
    8801: [222e-5, 0.50222, 0, 0, 0.89444],
    8804: [0.19667, 0.69667, 0, 0, 0.89444],
    8805: [0.19667, 0.69667, 0, 0, 0.89444],
    8810: [0.08556, 0.58556, 0, 0, 1.14999],
    8811: [0.08556, 0.58556, 0, 0, 1.14999],
    8826: [0.08556, 0.58556, 0, 0, 0.89444],
    8827: [0.08556, 0.58556, 0, 0, 0.89444],
    8834: [0.08556, 0.58556, 0, 0, 0.89444],
    8835: [0.08556, 0.58556, 0, 0, 0.89444],
    8838: [0.19667, 0.69667, 0, 0, 0.89444],
    8839: [0.19667, 0.69667, 0, 0, 0.89444],
    8846: [0, 0.55556, 0, 0, 0.76666],
    8849: [0.19667, 0.69667, 0, 0, 0.89444],
    8850: [0.19667, 0.69667, 0, 0, 0.89444],
    8851: [0, 0.55556, 0, 0, 0.76666],
    8852: [0, 0.55556, 0, 0, 0.76666],
    8853: [0.13333, 0.63333, 0, 0, 0.89444],
    8854: [0.13333, 0.63333, 0, 0, 0.89444],
    8855: [0.13333, 0.63333, 0, 0, 0.89444],
    8856: [0.13333, 0.63333, 0, 0, 0.89444],
    8857: [0.13333, 0.63333, 0, 0, 0.89444],
    8866: [0, 0.69444, 0, 0, 0.70277],
    8867: [0, 0.69444, 0, 0, 0.70277],
    8868: [0, 0.69444, 0, 0, 0.89444],
    8869: [0, 0.69444, 0, 0, 0.89444],
    8900: [-0.02639, 0.47361, 0, 0, 0.575],
    8901: [-0.02639, 0.47361, 0, 0, 0.31944],
    8902: [-0.02778, 0.47222, 0, 0, 0.575],
    8968: [0.25, 0.75, 0, 0, 0.51111],
    8969: [0.25, 0.75, 0, 0, 0.51111],
    8970: [0.25, 0.75, 0, 0, 0.51111],
    8971: [0.25, 0.75, 0, 0, 0.51111],
    8994: [-0.13889, 0.36111, 0, 0, 1.14999],
    8995: [-0.13889, 0.36111, 0, 0, 1.14999],
    9651: [0.19444, 0.69444, 0, 0, 1.02222],
    9657: [-0.02778, 0.47222, 0, 0, 0.575],
    9661: [0.19444, 0.69444, 0, 0, 1.02222],
    9667: [-0.02778, 0.47222, 0, 0, 0.575],
    9711: [0.19444, 0.69444, 0, 0, 1.14999],
    9824: [0.12963, 0.69444, 0, 0, 0.89444],
    9825: [0.12963, 0.69444, 0, 0, 0.89444],
    9826: [0.12963, 0.69444, 0, 0, 0.89444],
    9827: [0.12963, 0.69444, 0, 0, 0.89444],
    9837: [0, 0.75, 0, 0, 0.44722],
    9838: [0.19444, 0.69444, 0, 0, 0.44722],
    9839: [0.19444, 0.69444, 0, 0, 0.44722],
    10216: [0.25, 0.75, 0, 0, 0.44722],
    10217: [0.25, 0.75, 0, 0, 0.44722],
    10815: [0, 0.68611, 0, 0, 0.9],
    10927: [0.19667, 0.69667, 0, 0, 0.89444],
    10928: [0.19667, 0.69667, 0, 0, 0.89444],
    57376: [0.19444, 0.69444, 0, 0, 0]
  },
  "Main-BoldItalic": {
    32: [0, 0, 0, 0, 0.25],
    33: [0, 0.69444, 0.11417, 0, 0.38611],
    34: [0, 0.69444, 0.07939, 0, 0.62055],
    35: [0.19444, 0.69444, 0.06833, 0, 0.94444],
    37: [0.05556, 0.75, 0.12861, 0, 0.94444],
    38: [0, 0.69444, 0.08528, 0, 0.88555],
    39: [0, 0.69444, 0.12945, 0, 0.35555],
    40: [0.25, 0.75, 0.15806, 0, 0.47333],
    41: [0.25, 0.75, 0.03306, 0, 0.47333],
    42: [0, 0.75, 0.14333, 0, 0.59111],
    43: [0.10333, 0.60333, 0.03306, 0, 0.88555],
    44: [0.19444, 0.14722, 0, 0, 0.35555],
    45: [0, 0.44444, 0.02611, 0, 0.41444],
    46: [0, 0.14722, 0, 0, 0.35555],
    47: [0.25, 0.75, 0.15806, 0, 0.59111],
    48: [0, 0.64444, 0.13167, 0, 0.59111],
    49: [0, 0.64444, 0.13167, 0, 0.59111],
    50: [0, 0.64444, 0.13167, 0, 0.59111],
    51: [0, 0.64444, 0.13167, 0, 0.59111],
    52: [0.19444, 0.64444, 0.13167, 0, 0.59111],
    53: [0, 0.64444, 0.13167, 0, 0.59111],
    54: [0, 0.64444, 0.13167, 0, 0.59111],
    55: [0.19444, 0.64444, 0.13167, 0, 0.59111],
    56: [0, 0.64444, 0.13167, 0, 0.59111],
    57: [0, 0.64444, 0.13167, 0, 0.59111],
    58: [0, 0.44444, 0.06695, 0, 0.35555],
    59: [0.19444, 0.44444, 0.06695, 0, 0.35555],
    61: [-0.10889, 0.39111, 0.06833, 0, 0.88555],
    63: [0, 0.69444, 0.11472, 0, 0.59111],
    64: [0, 0.69444, 0.09208, 0, 0.88555],
    65: [0, 0.68611, 0, 0, 0.86555],
    66: [0, 0.68611, 0.0992, 0, 0.81666],
    67: [0, 0.68611, 0.14208, 0, 0.82666],
    68: [0, 0.68611, 0.09062, 0, 0.87555],
    69: [0, 0.68611, 0.11431, 0, 0.75666],
    70: [0, 0.68611, 0.12903, 0, 0.72722],
    71: [0, 0.68611, 0.07347, 0, 0.89527],
    72: [0, 0.68611, 0.17208, 0, 0.8961],
    73: [0, 0.68611, 0.15681, 0, 0.47166],
    74: [0, 0.68611, 0.145, 0, 0.61055],
    75: [0, 0.68611, 0.14208, 0, 0.89499],
    76: [0, 0.68611, 0, 0, 0.69777],
    77: [0, 0.68611, 0.17208, 0, 1.07277],
    78: [0, 0.68611, 0.17208, 0, 0.8961],
    79: [0, 0.68611, 0.09062, 0, 0.85499],
    80: [0, 0.68611, 0.0992, 0, 0.78721],
    81: [0.19444, 0.68611, 0.09062, 0, 0.85499],
    82: [0, 0.68611, 0.02559, 0, 0.85944],
    83: [0, 0.68611, 0.11264, 0, 0.64999],
    84: [0, 0.68611, 0.12903, 0, 0.7961],
    85: [0, 0.68611, 0.17208, 0, 0.88083],
    86: [0, 0.68611, 0.18625, 0, 0.86555],
    87: [0, 0.68611, 0.18625, 0, 1.15999],
    88: [0, 0.68611, 0.15681, 0, 0.86555],
    89: [0, 0.68611, 0.19803, 0, 0.86555],
    90: [0, 0.68611, 0.14208, 0, 0.70888],
    91: [0.25, 0.75, 0.1875, 0, 0.35611],
    93: [0.25, 0.75, 0.09972, 0, 0.35611],
    94: [0, 0.69444, 0.06709, 0, 0.59111],
    95: [0.31, 0.13444, 0.09811, 0, 0.59111],
    97: [0, 0.44444, 0.09426, 0, 0.59111],
    98: [0, 0.69444, 0.07861, 0, 0.53222],
    99: [0, 0.44444, 0.05222, 0, 0.53222],
    100: [0, 0.69444, 0.10861, 0, 0.59111],
    101: [0, 0.44444, 0.085, 0, 0.53222],
    102: [0.19444, 0.69444, 0.21778, 0, 0.4],
    103: [0.19444, 0.44444, 0.105, 0, 0.53222],
    104: [0, 0.69444, 0.09426, 0, 0.59111],
    105: [0, 0.69326, 0.11387, 0, 0.35555],
    106: [0.19444, 0.69326, 0.1672, 0, 0.35555],
    107: [0, 0.69444, 0.11111, 0, 0.53222],
    108: [0, 0.69444, 0.10861, 0, 0.29666],
    109: [0, 0.44444, 0.09426, 0, 0.94444],
    110: [0, 0.44444, 0.09426, 0, 0.64999],
    111: [0, 0.44444, 0.07861, 0, 0.59111],
    112: [0.19444, 0.44444, 0.07861, 0, 0.59111],
    113: [0.19444, 0.44444, 0.105, 0, 0.53222],
    114: [0, 0.44444, 0.11111, 0, 0.50167],
    115: [0, 0.44444, 0.08167, 0, 0.48694],
    116: [0, 0.63492, 0.09639, 0, 0.385],
    117: [0, 0.44444, 0.09426, 0, 0.62055],
    118: [0, 0.44444, 0.11111, 0, 0.53222],
    119: [0, 0.44444, 0.11111, 0, 0.76777],
    120: [0, 0.44444, 0.12583, 0, 0.56055],
    121: [0.19444, 0.44444, 0.105, 0, 0.56166],
    122: [0, 0.44444, 0.13889, 0, 0.49055],
    126: [0.35, 0.34444, 0.11472, 0, 0.59111],
    160: [0, 0, 0, 0, 0.25],
    168: [0, 0.69444, 0.11473, 0, 0.59111],
    176: [0, 0.69444, 0, 0, 0.94888],
    184: [0.17014, 0, 0, 0, 0.53222],
    198: [0, 0.68611, 0.11431, 0, 1.02277],
    216: [0.04861, 0.73472, 0.09062, 0, 0.88555],
    223: [0.19444, 0.69444, 0.09736, 0, 0.665],
    230: [0, 0.44444, 0.085, 0, 0.82666],
    248: [0.09722, 0.54167, 0.09458, 0, 0.59111],
    305: [0, 0.44444, 0.09426, 0, 0.35555],
    338: [0, 0.68611, 0.11431, 0, 1.14054],
    339: [0, 0.44444, 0.085, 0, 0.82666],
    567: [0.19444, 0.44444, 0.04611, 0, 0.385],
    710: [0, 0.69444, 0.06709, 0, 0.59111],
    711: [0, 0.63194, 0.08271, 0, 0.59111],
    713: [0, 0.59444, 0.10444, 0, 0.59111],
    714: [0, 0.69444, 0.08528, 0, 0.59111],
    715: [0, 0.69444, 0, 0, 0.59111],
    728: [0, 0.69444, 0.10333, 0, 0.59111],
    729: [0, 0.69444, 0.12945, 0, 0.35555],
    730: [0, 0.69444, 0, 0, 0.94888],
    732: [0, 0.69444, 0.11472, 0, 0.59111],
    733: [0, 0.69444, 0.11472, 0, 0.59111],
    915: [0, 0.68611, 0.12903, 0, 0.69777],
    916: [0, 0.68611, 0, 0, 0.94444],
    920: [0, 0.68611, 0.09062, 0, 0.88555],
    923: [0, 0.68611, 0, 0, 0.80666],
    926: [0, 0.68611, 0.15092, 0, 0.76777],
    928: [0, 0.68611, 0.17208, 0, 0.8961],
    931: [0, 0.68611, 0.11431, 0, 0.82666],
    933: [0, 0.68611, 0.10778, 0, 0.88555],
    934: [0, 0.68611, 0.05632, 0, 0.82666],
    936: [0, 0.68611, 0.10778, 0, 0.88555],
    937: [0, 0.68611, 0.0992, 0, 0.82666],
    8211: [0, 0.44444, 0.09811, 0, 0.59111],
    8212: [0, 0.44444, 0.09811, 0, 1.18221],
    8216: [0, 0.69444, 0.12945, 0, 0.35555],
    8217: [0, 0.69444, 0.12945, 0, 0.35555],
    8220: [0, 0.69444, 0.16772, 0, 0.62055],
    8221: [0, 0.69444, 0.07939, 0, 0.62055]
  },
  "Main-Italic": {
    32: [0, 0, 0, 0, 0.25],
    33: [0, 0.69444, 0.12417, 0, 0.30667],
    34: [0, 0.69444, 0.06961, 0, 0.51444],
    35: [0.19444, 0.69444, 0.06616, 0, 0.81777],
    37: [0.05556, 0.75, 0.13639, 0, 0.81777],
    38: [0, 0.69444, 0.09694, 0, 0.76666],
    39: [0, 0.69444, 0.12417, 0, 0.30667],
    40: [0.25, 0.75, 0.16194, 0, 0.40889],
    41: [0.25, 0.75, 0.03694, 0, 0.40889],
    42: [0, 0.75, 0.14917, 0, 0.51111],
    43: [0.05667, 0.56167, 0.03694, 0, 0.76666],
    44: [0.19444, 0.10556, 0, 0, 0.30667],
    45: [0, 0.43056, 0.02826, 0, 0.35778],
    46: [0, 0.10556, 0, 0, 0.30667],
    47: [0.25, 0.75, 0.16194, 0, 0.51111],
    48: [0, 0.64444, 0.13556, 0, 0.51111],
    49: [0, 0.64444, 0.13556, 0, 0.51111],
    50: [0, 0.64444, 0.13556, 0, 0.51111],
    51: [0, 0.64444, 0.13556, 0, 0.51111],
    52: [0.19444, 0.64444, 0.13556, 0, 0.51111],
    53: [0, 0.64444, 0.13556, 0, 0.51111],
    54: [0, 0.64444, 0.13556, 0, 0.51111],
    55: [0.19444, 0.64444, 0.13556, 0, 0.51111],
    56: [0, 0.64444, 0.13556, 0, 0.51111],
    57: [0, 0.64444, 0.13556, 0, 0.51111],
    58: [0, 0.43056, 0.0582, 0, 0.30667],
    59: [0.19444, 0.43056, 0.0582, 0, 0.30667],
    61: [-0.13313, 0.36687, 0.06616, 0, 0.76666],
    63: [0, 0.69444, 0.1225, 0, 0.51111],
    64: [0, 0.69444, 0.09597, 0, 0.76666],
    65: [0, 0.68333, 0, 0, 0.74333],
    66: [0, 0.68333, 0.10257, 0, 0.70389],
    67: [0, 0.68333, 0.14528, 0, 0.71555],
    68: [0, 0.68333, 0.09403, 0, 0.755],
    69: [0, 0.68333, 0.12028, 0, 0.67833],
    70: [0, 0.68333, 0.13305, 0, 0.65277],
    71: [0, 0.68333, 0.08722, 0, 0.77361],
    72: [0, 0.68333, 0.16389, 0, 0.74333],
    73: [0, 0.68333, 0.15806, 0, 0.38555],
    74: [0, 0.68333, 0.14028, 0, 0.525],
    75: [0, 0.68333, 0.14528, 0, 0.76888],
    76: [0, 0.68333, 0, 0, 0.62722],
    77: [0, 0.68333, 0.16389, 0, 0.89666],
    78: [0, 0.68333, 0.16389, 0, 0.74333],
    79: [0, 0.68333, 0.09403, 0, 0.76666],
    80: [0, 0.68333, 0.10257, 0, 0.67833],
    81: [0.19444, 0.68333, 0.09403, 0, 0.76666],
    82: [0, 0.68333, 0.03868, 0, 0.72944],
    83: [0, 0.68333, 0.11972, 0, 0.56222],
    84: [0, 0.68333, 0.13305, 0, 0.71555],
    85: [0, 0.68333, 0.16389, 0, 0.74333],
    86: [0, 0.68333, 0.18361, 0, 0.74333],
    87: [0, 0.68333, 0.18361, 0, 0.99888],
    88: [0, 0.68333, 0.15806, 0, 0.74333],
    89: [0, 0.68333, 0.19383, 0, 0.74333],
    90: [0, 0.68333, 0.14528, 0, 0.61333],
    91: [0.25, 0.75, 0.1875, 0, 0.30667],
    93: [0.25, 0.75, 0.10528, 0, 0.30667],
    94: [0, 0.69444, 0.06646, 0, 0.51111],
    95: [0.31, 0.12056, 0.09208, 0, 0.51111],
    97: [0, 0.43056, 0.07671, 0, 0.51111],
    98: [0, 0.69444, 0.06312, 0, 0.46],
    99: [0, 0.43056, 0.05653, 0, 0.46],
    100: [0, 0.69444, 0.10333, 0, 0.51111],
    101: [0, 0.43056, 0.07514, 0, 0.46],
    102: [0.19444, 0.69444, 0.21194, 0, 0.30667],
    103: [0.19444, 0.43056, 0.08847, 0, 0.46],
    104: [0, 0.69444, 0.07671, 0, 0.51111],
    105: [0, 0.65536, 0.1019, 0, 0.30667],
    106: [0.19444, 0.65536, 0.14467, 0, 0.30667],
    107: [0, 0.69444, 0.10764, 0, 0.46],
    108: [0, 0.69444, 0.10333, 0, 0.25555],
    109: [0, 0.43056, 0.07671, 0, 0.81777],
    110: [0, 0.43056, 0.07671, 0, 0.56222],
    111: [0, 0.43056, 0.06312, 0, 0.51111],
    112: [0.19444, 0.43056, 0.06312, 0, 0.51111],
    113: [0.19444, 0.43056, 0.08847, 0, 0.46],
    114: [0, 0.43056, 0.10764, 0, 0.42166],
    115: [0, 0.43056, 0.08208, 0, 0.40889],
    116: [0, 0.61508, 0.09486, 0, 0.33222],
    117: [0, 0.43056, 0.07671, 0, 0.53666],
    118: [0, 0.43056, 0.10764, 0, 0.46],
    119: [0, 0.43056, 0.10764, 0, 0.66444],
    120: [0, 0.43056, 0.12042, 0, 0.46389],
    121: [0.19444, 0.43056, 0.08847, 0, 0.48555],
    122: [0, 0.43056, 0.12292, 0, 0.40889],
    126: [0.35, 0.31786, 0.11585, 0, 0.51111],
    160: [0, 0, 0, 0, 0.25],
    168: [0, 0.66786, 0.10474, 0, 0.51111],
    176: [0, 0.69444, 0, 0, 0.83129],
    184: [0.17014, 0, 0, 0, 0.46],
    198: [0, 0.68333, 0.12028, 0, 0.88277],
    216: [0.04861, 0.73194, 0.09403, 0, 0.76666],
    223: [0.19444, 0.69444, 0.10514, 0, 0.53666],
    230: [0, 0.43056, 0.07514, 0, 0.71555],
    248: [0.09722, 0.52778, 0.09194, 0, 0.51111],
    338: [0, 0.68333, 0.12028, 0, 0.98499],
    339: [0, 0.43056, 0.07514, 0, 0.71555],
    710: [0, 0.69444, 0.06646, 0, 0.51111],
    711: [0, 0.62847, 0.08295, 0, 0.51111],
    713: [0, 0.56167, 0.10333, 0, 0.51111],
    714: [0, 0.69444, 0.09694, 0, 0.51111],
    715: [0, 0.69444, 0, 0, 0.51111],
    728: [0, 0.69444, 0.10806, 0, 0.51111],
    729: [0, 0.66786, 0.11752, 0, 0.30667],
    730: [0, 0.69444, 0, 0, 0.83129],
    732: [0, 0.66786, 0.11585, 0, 0.51111],
    733: [0, 0.69444, 0.1225, 0, 0.51111],
    915: [0, 0.68333, 0.13305, 0, 0.62722],
    916: [0, 0.68333, 0, 0, 0.81777],
    920: [0, 0.68333, 0.09403, 0, 0.76666],
    923: [0, 0.68333, 0, 0, 0.69222],
    926: [0, 0.68333, 0.15294, 0, 0.66444],
    928: [0, 0.68333, 0.16389, 0, 0.74333],
    931: [0, 0.68333, 0.12028, 0, 0.71555],
    933: [0, 0.68333, 0.11111, 0, 0.76666],
    934: [0, 0.68333, 0.05986, 0, 0.71555],
    936: [0, 0.68333, 0.11111, 0, 0.76666],
    937: [0, 0.68333, 0.10257, 0, 0.71555],
    8211: [0, 0.43056, 0.09208, 0, 0.51111],
    8212: [0, 0.43056, 0.09208, 0, 1.02222],
    8216: [0, 0.69444, 0.12417, 0, 0.30667],
    8217: [0, 0.69444, 0.12417, 0, 0.30667],
    8220: [0, 0.69444, 0.1685, 0, 0.51444],
    8221: [0, 0.69444, 0.06961, 0, 0.51444],
    8463: [0, 0.68889, 0, 0, 0.54028]
  },
  "Main-Regular": {
    32: [0, 0, 0, 0, 0.25],
    33: [0, 0.69444, 0, 0, 0.27778],
    34: [0, 0.69444, 0, 0, 0.5],
    35: [0.19444, 0.69444, 0, 0, 0.83334],
    36: [0.05556, 0.75, 0, 0, 0.5],
    37: [0.05556, 0.75, 0, 0, 0.83334],
    38: [0, 0.69444, 0, 0, 0.77778],
    39: [0, 0.69444, 0, 0, 0.27778],
    40: [0.25, 0.75, 0, 0, 0.38889],
    41: [0.25, 0.75, 0, 0, 0.38889],
    42: [0, 0.75, 0, 0, 0.5],
    43: [0.08333, 0.58333, 0, 0, 0.77778],
    44: [0.19444, 0.10556, 0, 0, 0.27778],
    45: [0, 0.43056, 0, 0, 0.33333],
    46: [0, 0.10556, 0, 0, 0.27778],
    47: [0.25, 0.75, 0, 0, 0.5],
    48: [0, 0.64444, 0, 0, 0.5],
    49: [0, 0.64444, 0, 0, 0.5],
    50: [0, 0.64444, 0, 0, 0.5],
    51: [0, 0.64444, 0, 0, 0.5],
    52: [0, 0.64444, 0, 0, 0.5],
    53: [0, 0.64444, 0, 0, 0.5],
    54: [0, 0.64444, 0, 0, 0.5],
    55: [0, 0.64444, 0, 0, 0.5],
    56: [0, 0.64444, 0, 0, 0.5],
    57: [0, 0.64444, 0, 0, 0.5],
    58: [0, 0.43056, 0, 0, 0.27778],
    59: [0.19444, 0.43056, 0, 0, 0.27778],
    60: [0.0391, 0.5391, 0, 0, 0.77778],
    61: [-0.13313, 0.36687, 0, 0, 0.77778],
    62: [0.0391, 0.5391, 0, 0, 0.77778],
    63: [0, 0.69444, 0, 0, 0.47222],
    64: [0, 0.69444, 0, 0, 0.77778],
    65: [0, 0.68333, 0, 0, 0.75],
    66: [0, 0.68333, 0, 0, 0.70834],
    67: [0, 0.68333, 0, 0, 0.72222],
    68: [0, 0.68333, 0, 0, 0.76389],
    69: [0, 0.68333, 0, 0, 0.68056],
    70: [0, 0.68333, 0, 0, 0.65278],
    71: [0, 0.68333, 0, 0, 0.78472],
    72: [0, 0.68333, 0, 0, 0.75],
    73: [0, 0.68333, 0, 0, 0.36111],
    74: [0, 0.68333, 0, 0, 0.51389],
    75: [0, 0.68333, 0, 0, 0.77778],
    76: [0, 0.68333, 0, 0, 0.625],
    77: [0, 0.68333, 0, 0, 0.91667],
    78: [0, 0.68333, 0, 0, 0.75],
    79: [0, 0.68333, 0, 0, 0.77778],
    80: [0, 0.68333, 0, 0, 0.68056],
    81: [0.19444, 0.68333, 0, 0, 0.77778],
    82: [0, 0.68333, 0, 0, 0.73611],
    83: [0, 0.68333, 0, 0, 0.55556],
    84: [0, 0.68333, 0, 0, 0.72222],
    85: [0, 0.68333, 0, 0, 0.75],
    86: [0, 0.68333, 0.01389, 0, 0.75],
    87: [0, 0.68333, 0.01389, 0, 1.02778],
    88: [0, 0.68333, 0, 0, 0.75],
    89: [0, 0.68333, 0.025, 0, 0.75],
    90: [0, 0.68333, 0, 0, 0.61111],
    91: [0.25, 0.75, 0, 0, 0.27778],
    92: [0.25, 0.75, 0, 0, 0.5],
    93: [0.25, 0.75, 0, 0, 0.27778],
    94: [0, 0.69444, 0, 0, 0.5],
    95: [0.31, 0.12056, 0.02778, 0, 0.5],
    97: [0, 0.43056, 0, 0, 0.5],
    98: [0, 0.69444, 0, 0, 0.55556],
    99: [0, 0.43056, 0, 0, 0.44445],
    100: [0, 0.69444, 0, 0, 0.55556],
    101: [0, 0.43056, 0, 0, 0.44445],
    102: [0, 0.69444, 0.07778, 0, 0.30556],
    103: [0.19444, 0.43056, 0.01389, 0, 0.5],
    104: [0, 0.69444, 0, 0, 0.55556],
    105: [0, 0.66786, 0, 0, 0.27778],
    106: [0.19444, 0.66786, 0, 0, 0.30556],
    107: [0, 0.69444, 0, 0, 0.52778],
    108: [0, 0.69444, 0, 0, 0.27778],
    109: [0, 0.43056, 0, 0, 0.83334],
    110: [0, 0.43056, 0, 0, 0.55556],
    111: [0, 0.43056, 0, 0, 0.5],
    112: [0.19444, 0.43056, 0, 0, 0.55556],
    113: [0.19444, 0.43056, 0, 0, 0.52778],
    114: [0, 0.43056, 0, 0, 0.39167],
    115: [0, 0.43056, 0, 0, 0.39445],
    116: [0, 0.61508, 0, 0, 0.38889],
    117: [0, 0.43056, 0, 0, 0.55556],
    118: [0, 0.43056, 0.01389, 0, 0.52778],
    119: [0, 0.43056, 0.01389, 0, 0.72222],
    120: [0, 0.43056, 0, 0, 0.52778],
    121: [0.19444, 0.43056, 0.01389, 0, 0.52778],
    122: [0, 0.43056, 0, 0, 0.44445],
    123: [0.25, 0.75, 0, 0, 0.5],
    124: [0.25, 0.75, 0, 0, 0.27778],
    125: [0.25, 0.75, 0, 0, 0.5],
    126: [0.35, 0.31786, 0, 0, 0.5],
    160: [0, 0, 0, 0, 0.25],
    163: [0, 0.69444, 0, 0, 0.76909],
    167: [0.19444, 0.69444, 0, 0, 0.44445],
    168: [0, 0.66786, 0, 0, 0.5],
    172: [0, 0.43056, 0, 0, 0.66667],
    176: [0, 0.69444, 0, 0, 0.75],
    177: [0.08333, 0.58333, 0, 0, 0.77778],
    182: [0.19444, 0.69444, 0, 0, 0.61111],
    184: [0.17014, 0, 0, 0, 0.44445],
    198: [0, 0.68333, 0, 0, 0.90278],
    215: [0.08333, 0.58333, 0, 0, 0.77778],
    216: [0.04861, 0.73194, 0, 0, 0.77778],
    223: [0, 0.69444, 0, 0, 0.5],
    230: [0, 0.43056, 0, 0, 0.72222],
    247: [0.08333, 0.58333, 0, 0, 0.77778],
    248: [0.09722, 0.52778, 0, 0, 0.5],
    305: [0, 0.43056, 0, 0, 0.27778],
    338: [0, 0.68333, 0, 0, 1.01389],
    339: [0, 0.43056, 0, 0, 0.77778],
    567: [0.19444, 0.43056, 0, 0, 0.30556],
    710: [0, 0.69444, 0, 0, 0.5],
    711: [0, 0.62847, 0, 0, 0.5],
    713: [0, 0.56778, 0, 0, 0.5],
    714: [0, 0.69444, 0, 0, 0.5],
    715: [0, 0.69444, 0, 0, 0.5],
    728: [0, 0.69444, 0, 0, 0.5],
    729: [0, 0.66786, 0, 0, 0.27778],
    730: [0, 0.69444, 0, 0, 0.75],
    732: [0, 0.66786, 0, 0, 0.5],
    733: [0, 0.69444, 0, 0, 0.5],
    915: [0, 0.68333, 0, 0, 0.625],
    916: [0, 0.68333, 0, 0, 0.83334],
    920: [0, 0.68333, 0, 0, 0.77778],
    923: [0, 0.68333, 0, 0, 0.69445],
    926: [0, 0.68333, 0, 0, 0.66667],
    928: [0, 0.68333, 0, 0, 0.75],
    931: [0, 0.68333, 0, 0, 0.72222],
    933: [0, 0.68333, 0, 0, 0.77778],
    934: [0, 0.68333, 0, 0, 0.72222],
    936: [0, 0.68333, 0, 0, 0.77778],
    937: [0, 0.68333, 0, 0, 0.72222],
    8211: [0, 0.43056, 0.02778, 0, 0.5],
    8212: [0, 0.43056, 0.02778, 0, 1],
    8216: [0, 0.69444, 0, 0, 0.27778],
    8217: [0, 0.69444, 0, 0, 0.27778],
    8220: [0, 0.69444, 0, 0, 0.5],
    8221: [0, 0.69444, 0, 0, 0.5],
    8224: [0.19444, 0.69444, 0, 0, 0.44445],
    8225: [0.19444, 0.69444, 0, 0, 0.44445],
    8230: [0, 0.123, 0, 0, 1.172],
    8242: [0, 0.55556, 0, 0, 0.275],
    8407: [0, 0.71444, 0.15382, 0, 0.5],
    8463: [0, 0.68889, 0, 0, 0.54028],
    8465: [0, 0.69444, 0, 0, 0.72222],
    8467: [0, 0.69444, 0, 0.11111, 0.41667],
    8472: [0.19444, 0.43056, 0, 0.11111, 0.63646],
    8476: [0, 0.69444, 0, 0, 0.72222],
    8501: [0, 0.69444, 0, 0, 0.61111],
    8592: [-0.13313, 0.36687, 0, 0, 1],
    8593: [0.19444, 0.69444, 0, 0, 0.5],
    8594: [-0.13313, 0.36687, 0, 0, 1],
    8595: [0.19444, 0.69444, 0, 0, 0.5],
    8596: [-0.13313, 0.36687, 0, 0, 1],
    8597: [0.25, 0.75, 0, 0, 0.5],
    8598: [0.19444, 0.69444, 0, 0, 1],
    8599: [0.19444, 0.69444, 0, 0, 1],
    8600: [0.19444, 0.69444, 0, 0, 1],
    8601: [0.19444, 0.69444, 0, 0, 1],
    8614: [0.011, 0.511, 0, 0, 1],
    8617: [0.011, 0.511, 0, 0, 1.126],
    8618: [0.011, 0.511, 0, 0, 1.126],
    8636: [-0.13313, 0.36687, 0, 0, 1],
    8637: [-0.13313, 0.36687, 0, 0, 1],
    8640: [-0.13313, 0.36687, 0, 0, 1],
    8641: [-0.13313, 0.36687, 0, 0, 1],
    8652: [0.011, 0.671, 0, 0, 1],
    8656: [-0.13313, 0.36687, 0, 0, 1],
    8657: [0.19444, 0.69444, 0, 0, 0.61111],
    8658: [-0.13313, 0.36687, 0, 0, 1],
    8659: [0.19444, 0.69444, 0, 0, 0.61111],
    8660: [-0.13313, 0.36687, 0, 0, 1],
    8661: [0.25, 0.75, 0, 0, 0.61111],
    8704: [0, 0.69444, 0, 0, 0.55556],
    8706: [0, 0.69444, 0.05556, 0.08334, 0.5309],
    8707: [0, 0.69444, 0, 0, 0.55556],
    8709: [0.05556, 0.75, 0, 0, 0.5],
    8711: [0, 0.68333, 0, 0, 0.83334],
    8712: [0.0391, 0.5391, 0, 0, 0.66667],
    8715: [0.0391, 0.5391, 0, 0, 0.66667],
    8722: [0.08333, 0.58333, 0, 0, 0.77778],
    8723: [0.08333, 0.58333, 0, 0, 0.77778],
    8725: [0.25, 0.75, 0, 0, 0.5],
    8726: [0.25, 0.75, 0, 0, 0.5],
    8727: [-0.03472, 0.46528, 0, 0, 0.5],
    8728: [-0.05555, 0.44445, 0, 0, 0.5],
    8729: [-0.05555, 0.44445, 0, 0, 0.5],
    8730: [0.2, 0.8, 0, 0, 0.83334],
    8733: [0, 0.43056, 0, 0, 0.77778],
    8734: [0, 0.43056, 0, 0, 1],
    8736: [0, 0.69224, 0, 0, 0.72222],
    8739: [0.25, 0.75, 0, 0, 0.27778],
    8741: [0.25, 0.75, 0, 0, 0.5],
    8743: [0, 0.55556, 0, 0, 0.66667],
    8744: [0, 0.55556, 0, 0, 0.66667],
    8745: [0, 0.55556, 0, 0, 0.66667],
    8746: [0, 0.55556, 0, 0, 0.66667],
    8747: [0.19444, 0.69444, 0.11111, 0, 0.41667],
    8764: [-0.13313, 0.36687, 0, 0, 0.77778],
    8768: [0.19444, 0.69444, 0, 0, 0.27778],
    8771: [-0.03625, 0.46375, 0, 0, 0.77778],
    8773: [-0.022, 0.589, 0, 0, 0.778],
    8776: [-0.01688, 0.48312, 0, 0, 0.77778],
    8781: [-0.03625, 0.46375, 0, 0, 0.77778],
    8784: [-0.133, 0.673, 0, 0, 0.778],
    8801: [-0.03625, 0.46375, 0, 0, 0.77778],
    8804: [0.13597, 0.63597, 0, 0, 0.77778],
    8805: [0.13597, 0.63597, 0, 0, 0.77778],
    8810: [0.0391, 0.5391, 0, 0, 1],
    8811: [0.0391, 0.5391, 0, 0, 1],
    8826: [0.0391, 0.5391, 0, 0, 0.77778],
    8827: [0.0391, 0.5391, 0, 0, 0.77778],
    8834: [0.0391, 0.5391, 0, 0, 0.77778],
    8835: [0.0391, 0.5391, 0, 0, 0.77778],
    8838: [0.13597, 0.63597, 0, 0, 0.77778],
    8839: [0.13597, 0.63597, 0, 0, 0.77778],
    8846: [0, 0.55556, 0, 0, 0.66667],
    8849: [0.13597, 0.63597, 0, 0, 0.77778],
    8850: [0.13597, 0.63597, 0, 0, 0.77778],
    8851: [0, 0.55556, 0, 0, 0.66667],
    8852: [0, 0.55556, 0, 0, 0.66667],
    8853: [0.08333, 0.58333, 0, 0, 0.77778],
    8854: [0.08333, 0.58333, 0, 0, 0.77778],
    8855: [0.08333, 0.58333, 0, 0, 0.77778],
    8856: [0.08333, 0.58333, 0, 0, 0.77778],
    8857: [0.08333, 0.58333, 0, 0, 0.77778],
    8866: [0, 0.69444, 0, 0, 0.61111],
    8867: [0, 0.69444, 0, 0, 0.61111],
    8868: [0, 0.69444, 0, 0, 0.77778],
    8869: [0, 0.69444, 0, 0, 0.77778],
    8872: [0.249, 0.75, 0, 0, 0.867],
    8900: [-0.05555, 0.44445, 0, 0, 0.5],
    8901: [-0.05555, 0.44445, 0, 0, 0.27778],
    8902: [-0.03472, 0.46528, 0, 0, 0.5],
    8904: [5e-3, 0.505, 0, 0, 0.9],
    8942: [0.03, 0.903, 0, 0, 0.278],
    8943: [-0.19, 0.313, 0, 0, 1.172],
    8945: [-0.1, 0.823, 0, 0, 1.282],
    8968: [0.25, 0.75, 0, 0, 0.44445],
    8969: [0.25, 0.75, 0, 0, 0.44445],
    8970: [0.25, 0.75, 0, 0, 0.44445],
    8971: [0.25, 0.75, 0, 0, 0.44445],
    8994: [-0.14236, 0.35764, 0, 0, 1],
    8995: [-0.14236, 0.35764, 0, 0, 1],
    9136: [0.244, 0.744, 0, 0, 0.412],
    9137: [0.244, 0.745, 0, 0, 0.412],
    9651: [0.19444, 0.69444, 0, 0, 0.88889],
    9657: [-0.03472, 0.46528, 0, 0, 0.5],
    9661: [0.19444, 0.69444, 0, 0, 0.88889],
    9667: [-0.03472, 0.46528, 0, 0, 0.5],
    9711: [0.19444, 0.69444, 0, 0, 1],
    9824: [0.12963, 0.69444, 0, 0, 0.77778],
    9825: [0.12963, 0.69444, 0, 0, 0.77778],
    9826: [0.12963, 0.69444, 0, 0, 0.77778],
    9827: [0.12963, 0.69444, 0, 0, 0.77778],
    9837: [0, 0.75, 0, 0, 0.38889],
    9838: [0.19444, 0.69444, 0, 0, 0.38889],
    9839: [0.19444, 0.69444, 0, 0, 0.38889],
    10216: [0.25, 0.75, 0, 0, 0.38889],
    10217: [0.25, 0.75, 0, 0, 0.38889],
    10222: [0.244, 0.744, 0, 0, 0.412],
    10223: [0.244, 0.745, 0, 0, 0.412],
    10229: [0.011, 0.511, 0, 0, 1.609],
    10230: [0.011, 0.511, 0, 0, 1.638],
    10231: [0.011, 0.511, 0, 0, 1.859],
    10232: [0.024, 0.525, 0, 0, 1.609],
    10233: [0.024, 0.525, 0, 0, 1.638],
    10234: [0.024, 0.525, 0, 0, 1.858],
    10236: [0.011, 0.511, 0, 0, 1.638],
    10815: [0, 0.68333, 0, 0, 0.75],
    10927: [0.13597, 0.63597, 0, 0, 0.77778],
    10928: [0.13597, 0.63597, 0, 0, 0.77778],
    57376: [0.19444, 0.69444, 0, 0, 0]
  },
  "Math-BoldItalic": {
    32: [0, 0, 0, 0, 0.25],
    48: [0, 0.44444, 0, 0, 0.575],
    49: [0, 0.44444, 0, 0, 0.575],
    50: [0, 0.44444, 0, 0, 0.575],
    51: [0.19444, 0.44444, 0, 0, 0.575],
    52: [0.19444, 0.44444, 0, 0, 0.575],
    53: [0.19444, 0.44444, 0, 0, 0.575],
    54: [0, 0.64444, 0, 0, 0.575],
    55: [0.19444, 0.44444, 0, 0, 0.575],
    56: [0, 0.64444, 0, 0, 0.575],
    57: [0.19444, 0.44444, 0, 0, 0.575],
    65: [0, 0.68611, 0, 0, 0.86944],
    66: [0, 0.68611, 0.04835, 0, 0.8664],
    67: [0, 0.68611, 0.06979, 0, 0.81694],
    68: [0, 0.68611, 0.03194, 0, 0.93812],
    69: [0, 0.68611, 0.05451, 0, 0.81007],
    70: [0, 0.68611, 0.15972, 0, 0.68889],
    71: [0, 0.68611, 0, 0, 0.88673],
    72: [0, 0.68611, 0.08229, 0, 0.98229],
    73: [0, 0.68611, 0.07778, 0, 0.51111],
    74: [0, 0.68611, 0.10069, 0, 0.63125],
    75: [0, 0.68611, 0.06979, 0, 0.97118],
    76: [0, 0.68611, 0, 0, 0.75555],
    77: [0, 0.68611, 0.11424, 0, 1.14201],
    78: [0, 0.68611, 0.11424, 0, 0.95034],
    79: [0, 0.68611, 0.03194, 0, 0.83666],
    80: [0, 0.68611, 0.15972, 0, 0.72309],
    81: [0.19444, 0.68611, 0, 0, 0.86861],
    82: [0, 0.68611, 421e-5, 0, 0.87235],
    83: [0, 0.68611, 0.05382, 0, 0.69271],
    84: [0, 0.68611, 0.15972, 0, 0.63663],
    85: [0, 0.68611, 0.11424, 0, 0.80027],
    86: [0, 0.68611, 0.25555, 0, 0.67778],
    87: [0, 0.68611, 0.15972, 0, 1.09305],
    88: [0, 0.68611, 0.07778, 0, 0.94722],
    89: [0, 0.68611, 0.25555, 0, 0.67458],
    90: [0, 0.68611, 0.06979, 0, 0.77257],
    97: [0, 0.44444, 0, 0, 0.63287],
    98: [0, 0.69444, 0, 0, 0.52083],
    99: [0, 0.44444, 0, 0, 0.51342],
    100: [0, 0.69444, 0, 0, 0.60972],
    101: [0, 0.44444, 0, 0, 0.55361],
    102: [0.19444, 0.69444, 0.11042, 0, 0.56806],
    103: [0.19444, 0.44444, 0.03704, 0, 0.5449],
    104: [0, 0.69444, 0, 0, 0.66759],
    105: [0, 0.69326, 0, 0, 0.4048],
    106: [0.19444, 0.69326, 0.0622, 0, 0.47083],
    107: [0, 0.69444, 0.01852, 0, 0.6037],
    108: [0, 0.69444, 88e-4, 0, 0.34815],
    109: [0, 0.44444, 0, 0, 1.0324],
    110: [0, 0.44444, 0, 0, 0.71296],
    111: [0, 0.44444, 0, 0, 0.58472],
    112: [0.19444, 0.44444, 0, 0, 0.60092],
    113: [0.19444, 0.44444, 0.03704, 0, 0.54213],
    114: [0, 0.44444, 0.03194, 0, 0.5287],
    115: [0, 0.44444, 0, 0, 0.53125],
    116: [0, 0.63492, 0, 0, 0.41528],
    117: [0, 0.44444, 0, 0, 0.68102],
    118: [0, 0.44444, 0.03704, 0, 0.56666],
    119: [0, 0.44444, 0.02778, 0, 0.83148],
    120: [0, 0.44444, 0, 0, 0.65903],
    121: [0.19444, 0.44444, 0.03704, 0, 0.59028],
    122: [0, 0.44444, 0.04213, 0, 0.55509],
    160: [0, 0, 0, 0, 0.25],
    915: [0, 0.68611, 0.15972, 0, 0.65694],
    916: [0, 0.68611, 0, 0, 0.95833],
    920: [0, 0.68611, 0.03194, 0, 0.86722],
    923: [0, 0.68611, 0, 0, 0.80555],
    926: [0, 0.68611, 0.07458, 0, 0.84125],
    928: [0, 0.68611, 0.08229, 0, 0.98229],
    931: [0, 0.68611, 0.05451, 0, 0.88507],
    933: [0, 0.68611, 0.15972, 0, 0.67083],
    934: [0, 0.68611, 0, 0, 0.76666],
    936: [0, 0.68611, 0.11653, 0, 0.71402],
    937: [0, 0.68611, 0.04835, 0, 0.8789],
    945: [0, 0.44444, 0, 0, 0.76064],
    946: [0.19444, 0.69444, 0.03403, 0, 0.65972],
    947: [0.19444, 0.44444, 0.06389, 0, 0.59003],
    948: [0, 0.69444, 0.03819, 0, 0.52222],
    949: [0, 0.44444, 0, 0, 0.52882],
    950: [0.19444, 0.69444, 0.06215, 0, 0.50833],
    951: [0.19444, 0.44444, 0.03704, 0, 0.6],
    952: [0, 0.69444, 0.03194, 0, 0.5618],
    953: [0, 0.44444, 0, 0, 0.41204],
    954: [0, 0.44444, 0, 0, 0.66759],
    955: [0, 0.69444, 0, 0, 0.67083],
    956: [0.19444, 0.44444, 0, 0, 0.70787],
    957: [0, 0.44444, 0.06898, 0, 0.57685],
    958: [0.19444, 0.69444, 0.03021, 0, 0.50833],
    959: [0, 0.44444, 0, 0, 0.58472],
    960: [0, 0.44444, 0.03704, 0, 0.68241],
    961: [0.19444, 0.44444, 0, 0, 0.6118],
    962: [0.09722, 0.44444, 0.07917, 0, 0.42361],
    963: [0, 0.44444, 0.03704, 0, 0.68588],
    964: [0, 0.44444, 0.13472, 0, 0.52083],
    965: [0, 0.44444, 0.03704, 0, 0.63055],
    966: [0.19444, 0.44444, 0, 0, 0.74722],
    967: [0.19444, 0.44444, 0, 0, 0.71805],
    968: [0.19444, 0.69444, 0.03704, 0, 0.75833],
    969: [0, 0.44444, 0.03704, 0, 0.71782],
    977: [0, 0.69444, 0, 0, 0.69155],
    981: [0.19444, 0.69444, 0, 0, 0.7125],
    982: [0, 0.44444, 0.03194, 0, 0.975],
    1009: [0.19444, 0.44444, 0, 0, 0.6118],
    1013: [0, 0.44444, 0, 0, 0.48333],
    57649: [0, 0.44444, 0, 0, 0.39352],
    57911: [0.19444, 0.44444, 0, 0, 0.43889]
  },
  "Math-Italic": {
    32: [0, 0, 0, 0, 0.25],
    48: [0, 0.43056, 0, 0, 0.5],
    49: [0, 0.43056, 0, 0, 0.5],
    50: [0, 0.43056, 0, 0, 0.5],
    51: [0.19444, 0.43056, 0, 0, 0.5],
    52: [0.19444, 0.43056, 0, 0, 0.5],
    53: [0.19444, 0.43056, 0, 0, 0.5],
    54: [0, 0.64444, 0, 0, 0.5],
    55: [0.19444, 0.43056, 0, 0, 0.5],
    56: [0, 0.64444, 0, 0, 0.5],
    57: [0.19444, 0.43056, 0, 0, 0.5],
    65: [0, 0.68333, 0, 0.13889, 0.75],
    66: [0, 0.68333, 0.05017, 0.08334, 0.75851],
    67: [0, 0.68333, 0.07153, 0.08334, 0.71472],
    68: [0, 0.68333, 0.02778, 0.05556, 0.82792],
    69: [0, 0.68333, 0.05764, 0.08334, 0.7382],
    70: [0, 0.68333, 0.13889, 0.08334, 0.64306],
    71: [0, 0.68333, 0, 0.08334, 0.78625],
    72: [0, 0.68333, 0.08125, 0.05556, 0.83125],
    73: [0, 0.68333, 0.07847, 0.11111, 0.43958],
    74: [0, 0.68333, 0.09618, 0.16667, 0.55451],
    75: [0, 0.68333, 0.07153, 0.05556, 0.84931],
    76: [0, 0.68333, 0, 0.02778, 0.68056],
    77: [0, 0.68333, 0.10903, 0.08334, 0.97014],
    78: [0, 0.68333, 0.10903, 0.08334, 0.80347],
    79: [0, 0.68333, 0.02778, 0.08334, 0.76278],
    80: [0, 0.68333, 0.13889, 0.08334, 0.64201],
    81: [0.19444, 0.68333, 0, 0.08334, 0.79056],
    82: [0, 0.68333, 773e-5, 0.08334, 0.75929],
    83: [0, 0.68333, 0.05764, 0.08334, 0.6132],
    84: [0, 0.68333, 0.13889, 0.08334, 0.58438],
    85: [0, 0.68333, 0.10903, 0.02778, 0.68278],
    86: [0, 0.68333, 0.22222, 0, 0.58333],
    87: [0, 0.68333, 0.13889, 0, 0.94445],
    88: [0, 0.68333, 0.07847, 0.08334, 0.82847],
    89: [0, 0.68333, 0.22222, 0, 0.58056],
    90: [0, 0.68333, 0.07153, 0.08334, 0.68264],
    97: [0, 0.43056, 0, 0, 0.52859],
    98: [0, 0.69444, 0, 0, 0.42917],
    99: [0, 0.43056, 0, 0.05556, 0.43276],
    100: [0, 0.69444, 0, 0.16667, 0.52049],
    101: [0, 0.43056, 0, 0.05556, 0.46563],
    102: [0.19444, 0.69444, 0.10764, 0.16667, 0.48959],
    103: [0.19444, 0.43056, 0.03588, 0.02778, 0.47697],
    104: [0, 0.69444, 0, 0, 0.57616],
    105: [0, 0.65952, 0, 0, 0.34451],
    106: [0.19444, 0.65952, 0.05724, 0, 0.41181],
    107: [0, 0.69444, 0.03148, 0, 0.5206],
    108: [0, 0.69444, 0.01968, 0.08334, 0.29838],
    109: [0, 0.43056, 0, 0, 0.87801],
    110: [0, 0.43056, 0, 0, 0.60023],
    111: [0, 0.43056, 0, 0.05556, 0.48472],
    112: [0.19444, 0.43056, 0, 0.08334, 0.50313],
    113: [0.19444, 0.43056, 0.03588, 0.08334, 0.44641],
    114: [0, 0.43056, 0.02778, 0.05556, 0.45116],
    115: [0, 0.43056, 0, 0.05556, 0.46875],
    116: [0, 0.61508, 0, 0.08334, 0.36111],
    117: [0, 0.43056, 0, 0.02778, 0.57246],
    118: [0, 0.43056, 0.03588, 0.02778, 0.48472],
    119: [0, 0.43056, 0.02691, 0.08334, 0.71592],
    120: [0, 0.43056, 0, 0.02778, 0.57153],
    121: [0.19444, 0.43056, 0.03588, 0.05556, 0.49028],
    122: [0, 0.43056, 0.04398, 0.05556, 0.46505],
    160: [0, 0, 0, 0, 0.25],
    915: [0, 0.68333, 0.13889, 0.08334, 0.61528],
    916: [0, 0.68333, 0, 0.16667, 0.83334],
    920: [0, 0.68333, 0.02778, 0.08334, 0.76278],
    923: [0, 0.68333, 0, 0.16667, 0.69445],
    926: [0, 0.68333, 0.07569, 0.08334, 0.74236],
    928: [0, 0.68333, 0.08125, 0.05556, 0.83125],
    931: [0, 0.68333, 0.05764, 0.08334, 0.77986],
    933: [0, 0.68333, 0.13889, 0.05556, 0.58333],
    934: [0, 0.68333, 0, 0.08334, 0.66667],
    936: [0, 0.68333, 0.11, 0.05556, 0.61222],
    937: [0, 0.68333, 0.05017, 0.08334, 0.7724],
    945: [0, 0.43056, 37e-4, 0.02778, 0.6397],
    946: [0.19444, 0.69444, 0.05278, 0.08334, 0.56563],
    947: [0.19444, 0.43056, 0.05556, 0, 0.51773],
    948: [0, 0.69444, 0.03785, 0.05556, 0.44444],
    949: [0, 0.43056, 0, 0.08334, 0.46632],
    950: [0.19444, 0.69444, 0.07378, 0.08334, 0.4375],
    951: [0.19444, 0.43056, 0.03588, 0.05556, 0.49653],
    952: [0, 0.69444, 0.02778, 0.08334, 0.46944],
    953: [0, 0.43056, 0, 0.05556, 0.35394],
    954: [0, 0.43056, 0, 0, 0.57616],
    955: [0, 0.69444, 0, 0, 0.58334],
    956: [0.19444, 0.43056, 0, 0.02778, 0.60255],
    957: [0, 0.43056, 0.06366, 0.02778, 0.49398],
    958: [0.19444, 0.69444, 0.04601, 0.11111, 0.4375],
    959: [0, 0.43056, 0, 0.05556, 0.48472],
    960: [0, 0.43056, 0.03588, 0, 0.57003],
    961: [0.19444, 0.43056, 0, 0.08334, 0.51702],
    962: [0.09722, 0.43056, 0.07986, 0.08334, 0.36285],
    963: [0, 0.43056, 0.03588, 0, 0.57141],
    964: [0, 0.43056, 0.1132, 0.02778, 0.43715],
    965: [0, 0.43056, 0.03588, 0.02778, 0.54028],
    966: [0.19444, 0.43056, 0, 0.08334, 0.65417],
    967: [0.19444, 0.43056, 0, 0.05556, 0.62569],
    968: [0.19444, 0.69444, 0.03588, 0.11111, 0.65139],
    969: [0, 0.43056, 0.03588, 0, 0.62245],
    977: [0, 0.69444, 0, 0.08334, 0.59144],
    981: [0.19444, 0.69444, 0, 0.08334, 0.59583],
    982: [0, 0.43056, 0.02778, 0, 0.82813],
    1009: [0.19444, 0.43056, 0, 0.08334, 0.51702],
    1013: [0, 0.43056, 0, 0.05556, 0.4059],
    57649: [0, 0.43056, 0, 0.02778, 0.32246],
    57911: [0.19444, 0.43056, 0, 0.08334, 0.38403]
  },
  "SansSerif-Bold": {
    32: [0, 0, 0, 0, 0.25],
    33: [0, 0.69444, 0, 0, 0.36667],
    34: [0, 0.69444, 0, 0, 0.55834],
    35: [0.19444, 0.69444, 0, 0, 0.91667],
    36: [0.05556, 0.75, 0, 0, 0.55],
    37: [0.05556, 0.75, 0, 0, 1.02912],
    38: [0, 0.69444, 0, 0, 0.83056],
    39: [0, 0.69444, 0, 0, 0.30556],
    40: [0.25, 0.75, 0, 0, 0.42778],
    41: [0.25, 0.75, 0, 0, 0.42778],
    42: [0, 0.75, 0, 0, 0.55],
    43: [0.11667, 0.61667, 0, 0, 0.85556],
    44: [0.10556, 0.13056, 0, 0, 0.30556],
    45: [0, 0.45833, 0, 0, 0.36667],
    46: [0, 0.13056, 0, 0, 0.30556],
    47: [0.25, 0.75, 0, 0, 0.55],
    48: [0, 0.69444, 0, 0, 0.55],
    49: [0, 0.69444, 0, 0, 0.55],
    50: [0, 0.69444, 0, 0, 0.55],
    51: [0, 0.69444, 0, 0, 0.55],
    52: [0, 0.69444, 0, 0, 0.55],
    53: [0, 0.69444, 0, 0, 0.55],
    54: [0, 0.69444, 0, 0, 0.55],
    55: [0, 0.69444, 0, 0, 0.55],
    56: [0, 0.69444, 0, 0, 0.55],
    57: [0, 0.69444, 0, 0, 0.55],
    58: [0, 0.45833, 0, 0, 0.30556],
    59: [0.10556, 0.45833, 0, 0, 0.30556],
    61: [-0.09375, 0.40625, 0, 0, 0.85556],
    63: [0, 0.69444, 0, 0, 0.51945],
    64: [0, 0.69444, 0, 0, 0.73334],
    65: [0, 0.69444, 0, 0, 0.73334],
    66: [0, 0.69444, 0, 0, 0.73334],
    67: [0, 0.69444, 0, 0, 0.70278],
    68: [0, 0.69444, 0, 0, 0.79445],
    69: [0, 0.69444, 0, 0, 0.64167],
    70: [0, 0.69444, 0, 0, 0.61111],
    71: [0, 0.69444, 0, 0, 0.73334],
    72: [0, 0.69444, 0, 0, 0.79445],
    73: [0, 0.69444, 0, 0, 0.33056],
    74: [0, 0.69444, 0, 0, 0.51945],
    75: [0, 0.69444, 0, 0, 0.76389],
    76: [0, 0.69444, 0, 0, 0.58056],
    77: [0, 0.69444, 0, 0, 0.97778],
    78: [0, 0.69444, 0, 0, 0.79445],
    79: [0, 0.69444, 0, 0, 0.79445],
    80: [0, 0.69444, 0, 0, 0.70278],
    81: [0.10556, 0.69444, 0, 0, 0.79445],
    82: [0, 0.69444, 0, 0, 0.70278],
    83: [0, 0.69444, 0, 0, 0.61111],
    84: [0, 0.69444, 0, 0, 0.73334],
    85: [0, 0.69444, 0, 0, 0.76389],
    86: [0, 0.69444, 0.01528, 0, 0.73334],
    87: [0, 0.69444, 0.01528, 0, 1.03889],
    88: [0, 0.69444, 0, 0, 0.73334],
    89: [0, 0.69444, 0.0275, 0, 0.73334],
    90: [0, 0.69444, 0, 0, 0.67223],
    91: [0.25, 0.75, 0, 0, 0.34306],
    93: [0.25, 0.75, 0, 0, 0.34306],
    94: [0, 0.69444, 0, 0, 0.55],
    95: [0.35, 0.10833, 0.03056, 0, 0.55],
    97: [0, 0.45833, 0, 0, 0.525],
    98: [0, 0.69444, 0, 0, 0.56111],
    99: [0, 0.45833, 0, 0, 0.48889],
    100: [0, 0.69444, 0, 0, 0.56111],
    101: [0, 0.45833, 0, 0, 0.51111],
    102: [0, 0.69444, 0.07639, 0, 0.33611],
    103: [0.19444, 0.45833, 0.01528, 0, 0.55],
    104: [0, 0.69444, 0, 0, 0.56111],
    105: [0, 0.69444, 0, 0, 0.25556],
    106: [0.19444, 0.69444, 0, 0, 0.28611],
    107: [0, 0.69444, 0, 0, 0.53056],
    108: [0, 0.69444, 0, 0, 0.25556],
    109: [0, 0.45833, 0, 0, 0.86667],
    110: [0, 0.45833, 0, 0, 0.56111],
    111: [0, 0.45833, 0, 0, 0.55],
    112: [0.19444, 0.45833, 0, 0, 0.56111],
    113: [0.19444, 0.45833, 0, 0, 0.56111],
    114: [0, 0.45833, 0.01528, 0, 0.37222],
    115: [0, 0.45833, 0, 0, 0.42167],
    116: [0, 0.58929, 0, 0, 0.40417],
    117: [0, 0.45833, 0, 0, 0.56111],
    118: [0, 0.45833, 0.01528, 0, 0.5],
    119: [0, 0.45833, 0.01528, 0, 0.74445],
    120: [0, 0.45833, 0, 0, 0.5],
    121: [0.19444, 0.45833, 0.01528, 0, 0.5],
    122: [0, 0.45833, 0, 0, 0.47639],
    126: [0.35, 0.34444, 0, 0, 0.55],
    160: [0, 0, 0, 0, 0.25],
    168: [0, 0.69444, 0, 0, 0.55],
    176: [0, 0.69444, 0, 0, 0.73334],
    180: [0, 0.69444, 0, 0, 0.55],
    184: [0.17014, 0, 0, 0, 0.48889],
    305: [0, 0.45833, 0, 0, 0.25556],
    567: [0.19444, 0.45833, 0, 0, 0.28611],
    710: [0, 0.69444, 0, 0, 0.55],
    711: [0, 0.63542, 0, 0, 0.55],
    713: [0, 0.63778, 0, 0, 0.55],
    728: [0, 0.69444, 0, 0, 0.55],
    729: [0, 0.69444, 0, 0, 0.30556],
    730: [0, 0.69444, 0, 0, 0.73334],
    732: [0, 0.69444, 0, 0, 0.55],
    733: [0, 0.69444, 0, 0, 0.55],
    915: [0, 0.69444, 0, 0, 0.58056],
    916: [0, 0.69444, 0, 0, 0.91667],
    920: [0, 0.69444, 0, 0, 0.85556],
    923: [0, 0.69444, 0, 0, 0.67223],
    926: [0, 0.69444, 0, 0, 0.73334],
    928: [0, 0.69444, 0, 0, 0.79445],
    931: [0, 0.69444, 0, 0, 0.79445],
    933: [0, 0.69444, 0, 0, 0.85556],
    934: [0, 0.69444, 0, 0, 0.79445],
    936: [0, 0.69444, 0, 0, 0.85556],
    937: [0, 0.69444, 0, 0, 0.79445],
    8211: [0, 0.45833, 0.03056, 0, 0.55],
    8212: [0, 0.45833, 0.03056, 0, 1.10001],
    8216: [0, 0.69444, 0, 0, 0.30556],
    8217: [0, 0.69444, 0, 0, 0.30556],
    8220: [0, 0.69444, 0, 0, 0.55834],
    8221: [0, 0.69444, 0, 0, 0.55834]
  },
  "SansSerif-Italic": {
    32: [0, 0, 0, 0, 0.25],
    33: [0, 0.69444, 0.05733, 0, 0.31945],
    34: [0, 0.69444, 316e-5, 0, 0.5],
    35: [0.19444, 0.69444, 0.05087, 0, 0.83334],
    36: [0.05556, 0.75, 0.11156, 0, 0.5],
    37: [0.05556, 0.75, 0.03126, 0, 0.83334],
    38: [0, 0.69444, 0.03058, 0, 0.75834],
    39: [0, 0.69444, 0.07816, 0, 0.27778],
    40: [0.25, 0.75, 0.13164, 0, 0.38889],
    41: [0.25, 0.75, 0.02536, 0, 0.38889],
    42: [0, 0.75, 0.11775, 0, 0.5],
    43: [0.08333, 0.58333, 0.02536, 0, 0.77778],
    44: [0.125, 0.08333, 0, 0, 0.27778],
    45: [0, 0.44444, 0.01946, 0, 0.33333],
    46: [0, 0.08333, 0, 0, 0.27778],
    47: [0.25, 0.75, 0.13164, 0, 0.5],
    48: [0, 0.65556, 0.11156, 0, 0.5],
    49: [0, 0.65556, 0.11156, 0, 0.5],
    50: [0, 0.65556, 0.11156, 0, 0.5],
    51: [0, 0.65556, 0.11156, 0, 0.5],
    52: [0, 0.65556, 0.11156, 0, 0.5],
    53: [0, 0.65556, 0.11156, 0, 0.5],
    54: [0, 0.65556, 0.11156, 0, 0.5],
    55: [0, 0.65556, 0.11156, 0, 0.5],
    56: [0, 0.65556, 0.11156, 0, 0.5],
    57: [0, 0.65556, 0.11156, 0, 0.5],
    58: [0, 0.44444, 0.02502, 0, 0.27778],
    59: [0.125, 0.44444, 0.02502, 0, 0.27778],
    61: [-0.13, 0.37, 0.05087, 0, 0.77778],
    63: [0, 0.69444, 0.11809, 0, 0.47222],
    64: [0, 0.69444, 0.07555, 0, 0.66667],
    65: [0, 0.69444, 0, 0, 0.66667],
    66: [0, 0.69444, 0.08293, 0, 0.66667],
    67: [0, 0.69444, 0.11983, 0, 0.63889],
    68: [0, 0.69444, 0.07555, 0, 0.72223],
    69: [0, 0.69444, 0.11983, 0, 0.59722],
    70: [0, 0.69444, 0.13372, 0, 0.56945],
    71: [0, 0.69444, 0.11983, 0, 0.66667],
    72: [0, 0.69444, 0.08094, 0, 0.70834],
    73: [0, 0.69444, 0.13372, 0, 0.27778],
    74: [0, 0.69444, 0.08094, 0, 0.47222],
    75: [0, 0.69444, 0.11983, 0, 0.69445],
    76: [0, 0.69444, 0, 0, 0.54167],
    77: [0, 0.69444, 0.08094, 0, 0.875],
    78: [0, 0.69444, 0.08094, 0, 0.70834],
    79: [0, 0.69444, 0.07555, 0, 0.73611],
    80: [0, 0.69444, 0.08293, 0, 0.63889],
    81: [0.125, 0.69444, 0.07555, 0, 0.73611],
    82: [0, 0.69444, 0.08293, 0, 0.64584],
    83: [0, 0.69444, 0.09205, 0, 0.55556],
    84: [0, 0.69444, 0.13372, 0, 0.68056],
    85: [0, 0.69444, 0.08094, 0, 0.6875],
    86: [0, 0.69444, 0.1615, 0, 0.66667],
    87: [0, 0.69444, 0.1615, 0, 0.94445],
    88: [0, 0.69444, 0.13372, 0, 0.66667],
    89: [0, 0.69444, 0.17261, 0, 0.66667],
    90: [0, 0.69444, 0.11983, 0, 0.61111],
    91: [0.25, 0.75, 0.15942, 0, 0.28889],
    93: [0.25, 0.75, 0.08719, 0, 0.28889],
    94: [0, 0.69444, 0.0799, 0, 0.5],
    95: [0.35, 0.09444, 0.08616, 0, 0.5],
    97: [0, 0.44444, 981e-5, 0, 0.48056],
    98: [0, 0.69444, 0.03057, 0, 0.51667],
    99: [0, 0.44444, 0.08336, 0, 0.44445],
    100: [0, 0.69444, 0.09483, 0, 0.51667],
    101: [0, 0.44444, 0.06778, 0, 0.44445],
    102: [0, 0.69444, 0.21705, 0, 0.30556],
    103: [0.19444, 0.44444, 0.10836, 0, 0.5],
    104: [0, 0.69444, 0.01778, 0, 0.51667],
    105: [0, 0.67937, 0.09718, 0, 0.23889],
    106: [0.19444, 0.67937, 0.09162, 0, 0.26667],
    107: [0, 0.69444, 0.08336, 0, 0.48889],
    108: [0, 0.69444, 0.09483, 0, 0.23889],
    109: [0, 0.44444, 0.01778, 0, 0.79445],
    110: [0, 0.44444, 0.01778, 0, 0.51667],
    111: [0, 0.44444, 0.06613, 0, 0.5],
    112: [0.19444, 0.44444, 0.0389, 0, 0.51667],
    113: [0.19444, 0.44444, 0.04169, 0, 0.51667],
    114: [0, 0.44444, 0.10836, 0, 0.34167],
    115: [0, 0.44444, 0.0778, 0, 0.38333],
    116: [0, 0.57143, 0.07225, 0, 0.36111],
    117: [0, 0.44444, 0.04169, 0, 0.51667],
    118: [0, 0.44444, 0.10836, 0, 0.46111],
    119: [0, 0.44444, 0.10836, 0, 0.68334],
    120: [0, 0.44444, 0.09169, 0, 0.46111],
    121: [0.19444, 0.44444, 0.10836, 0, 0.46111],
    122: [0, 0.44444, 0.08752, 0, 0.43472],
    126: [0.35, 0.32659, 0.08826, 0, 0.5],
    160: [0, 0, 0, 0, 0.25],
    168: [0, 0.67937, 0.06385, 0, 0.5],
    176: [0, 0.69444, 0, 0, 0.73752],
    184: [0.17014, 0, 0, 0, 0.44445],
    305: [0, 0.44444, 0.04169, 0, 0.23889],
    567: [0.19444, 0.44444, 0.04169, 0, 0.26667],
    710: [0, 0.69444, 0.0799, 0, 0.5],
    711: [0, 0.63194, 0.08432, 0, 0.5],
    713: [0, 0.60889, 0.08776, 0, 0.5],
    714: [0, 0.69444, 0.09205, 0, 0.5],
    715: [0, 0.69444, 0, 0, 0.5],
    728: [0, 0.69444, 0.09483, 0, 0.5],
    729: [0, 0.67937, 0.07774, 0, 0.27778],
    730: [0, 0.69444, 0, 0, 0.73752],
    732: [0, 0.67659, 0.08826, 0, 0.5],
    733: [0, 0.69444, 0.09205, 0, 0.5],
    915: [0, 0.69444, 0.13372, 0, 0.54167],
    916: [0, 0.69444, 0, 0, 0.83334],
    920: [0, 0.69444, 0.07555, 0, 0.77778],
    923: [0, 0.69444, 0, 0, 0.61111],
    926: [0, 0.69444, 0.12816, 0, 0.66667],
    928: [0, 0.69444, 0.08094, 0, 0.70834],
    931: [0, 0.69444, 0.11983, 0, 0.72222],
    933: [0, 0.69444, 0.09031, 0, 0.77778],
    934: [0, 0.69444, 0.04603, 0, 0.72222],
    936: [0, 0.69444, 0.09031, 0, 0.77778],
    937: [0, 0.69444, 0.08293, 0, 0.72222],
    8211: [0, 0.44444, 0.08616, 0, 0.5],
    8212: [0, 0.44444, 0.08616, 0, 1],
    8216: [0, 0.69444, 0.07816, 0, 0.27778],
    8217: [0, 0.69444, 0.07816, 0, 0.27778],
    8220: [0, 0.69444, 0.14205, 0, 0.5],
    8221: [0, 0.69444, 316e-5, 0, 0.5]
  },
  "SansSerif-Regular": {
    32: [0, 0, 0, 0, 0.25],
    33: [0, 0.69444, 0, 0, 0.31945],
    34: [0, 0.69444, 0, 0, 0.5],
    35: [0.19444, 0.69444, 0, 0, 0.83334],
    36: [0.05556, 0.75, 0, 0, 0.5],
    37: [0.05556, 0.75, 0, 0, 0.83334],
    38: [0, 0.69444, 0, 0, 0.75834],
    39: [0, 0.69444, 0, 0, 0.27778],
    40: [0.25, 0.75, 0, 0, 0.38889],
    41: [0.25, 0.75, 0, 0, 0.38889],
    42: [0, 0.75, 0, 0, 0.5],
    43: [0.08333, 0.58333, 0, 0, 0.77778],
    44: [0.125, 0.08333, 0, 0, 0.27778],
    45: [0, 0.44444, 0, 0, 0.33333],
    46: [0, 0.08333, 0, 0, 0.27778],
    47: [0.25, 0.75, 0, 0, 0.5],
    48: [0, 0.65556, 0, 0, 0.5],
    49: [0, 0.65556, 0, 0, 0.5],
    50: [0, 0.65556, 0, 0, 0.5],
    51: [0, 0.65556, 0, 0, 0.5],
    52: [0, 0.65556, 0, 0, 0.5],
    53: [0, 0.65556, 0, 0, 0.5],
    54: [0, 0.65556, 0, 0, 0.5],
    55: [0, 0.65556, 0, 0, 0.5],
    56: [0, 0.65556, 0, 0, 0.5],
    57: [0, 0.65556, 0, 0, 0.5],
    58: [0, 0.44444, 0, 0, 0.27778],
    59: [0.125, 0.44444, 0, 0, 0.27778],
    61: [-0.13, 0.37, 0, 0, 0.77778],
    63: [0, 0.69444, 0, 0, 0.47222],
    64: [0, 0.69444, 0, 0, 0.66667],
    65: [0, 0.69444, 0, 0, 0.66667],
    66: [0, 0.69444, 0, 0, 0.66667],
    67: [0, 0.69444, 0, 0, 0.63889],
    68: [0, 0.69444, 0, 0, 0.72223],
    69: [0, 0.69444, 0, 0, 0.59722],
    70: [0, 0.69444, 0, 0, 0.56945],
    71: [0, 0.69444, 0, 0, 0.66667],
    72: [0, 0.69444, 0, 0, 0.70834],
    73: [0, 0.69444, 0, 0, 0.27778],
    74: [0, 0.69444, 0, 0, 0.47222],
    75: [0, 0.69444, 0, 0, 0.69445],
    76: [0, 0.69444, 0, 0, 0.54167],
    77: [0, 0.69444, 0, 0, 0.875],
    78: [0, 0.69444, 0, 0, 0.70834],
    79: [0, 0.69444, 0, 0, 0.73611],
    80: [0, 0.69444, 0, 0, 0.63889],
    81: [0.125, 0.69444, 0, 0, 0.73611],
    82: [0, 0.69444, 0, 0, 0.64584],
    83: [0, 0.69444, 0, 0, 0.55556],
    84: [0, 0.69444, 0, 0, 0.68056],
    85: [0, 0.69444, 0, 0, 0.6875],
    86: [0, 0.69444, 0.01389, 0, 0.66667],
    87: [0, 0.69444, 0.01389, 0, 0.94445],
    88: [0, 0.69444, 0, 0, 0.66667],
    89: [0, 0.69444, 0.025, 0, 0.66667],
    90: [0, 0.69444, 0, 0, 0.61111],
    91: [0.25, 0.75, 0, 0, 0.28889],
    93: [0.25, 0.75, 0, 0, 0.28889],
    94: [0, 0.69444, 0, 0, 0.5],
    95: [0.35, 0.09444, 0.02778, 0, 0.5],
    97: [0, 0.44444, 0, 0, 0.48056],
    98: [0, 0.69444, 0, 0, 0.51667],
    99: [0, 0.44444, 0, 0, 0.44445],
    100: [0, 0.69444, 0, 0, 0.51667],
    101: [0, 0.44444, 0, 0, 0.44445],
    102: [0, 0.69444, 0.06944, 0, 0.30556],
    103: [0.19444, 0.44444, 0.01389, 0, 0.5],
    104: [0, 0.69444, 0, 0, 0.51667],
    105: [0, 0.67937, 0, 0, 0.23889],
    106: [0.19444, 0.67937, 0, 0, 0.26667],
    107: [0, 0.69444, 0, 0, 0.48889],
    108: [0, 0.69444, 0, 0, 0.23889],
    109: [0, 0.44444, 0, 0, 0.79445],
    110: [0, 0.44444, 0, 0, 0.51667],
    111: [0, 0.44444, 0, 0, 0.5],
    112: [0.19444, 0.44444, 0, 0, 0.51667],
    113: [0.19444, 0.44444, 0, 0, 0.51667],
    114: [0, 0.44444, 0.01389, 0, 0.34167],
    115: [0, 0.44444, 0, 0, 0.38333],
    116: [0, 0.57143, 0, 0, 0.36111],
    117: [0, 0.44444, 0, 0, 0.51667],
    118: [0, 0.44444, 0.01389, 0, 0.46111],
    119: [0, 0.44444, 0.01389, 0, 0.68334],
    120: [0, 0.44444, 0, 0, 0.46111],
    121: [0.19444, 0.44444, 0.01389, 0, 0.46111],
    122: [0, 0.44444, 0, 0, 0.43472],
    126: [0.35, 0.32659, 0, 0, 0.5],
    160: [0, 0, 0, 0, 0.25],
    168: [0, 0.67937, 0, 0, 0.5],
    176: [0, 0.69444, 0, 0, 0.66667],
    184: [0.17014, 0, 0, 0, 0.44445],
    305: [0, 0.44444, 0, 0, 0.23889],
    567: [0.19444, 0.44444, 0, 0, 0.26667],
    710: [0, 0.69444, 0, 0, 0.5],
    711: [0, 0.63194, 0, 0, 0.5],
    713: [0, 0.60889, 0, 0, 0.5],
    714: [0, 0.69444, 0, 0, 0.5],
    715: [0, 0.69444, 0, 0, 0.5],
    728: [0, 0.69444, 0, 0, 0.5],
    729: [0, 0.67937, 0, 0, 0.27778],
    730: [0, 0.69444, 0, 0, 0.66667],
    732: [0, 0.67659, 0, 0, 0.5],
    733: [0, 0.69444, 0, 0, 0.5],
    915: [0, 0.69444, 0, 0, 0.54167],
    916: [0, 0.69444, 0, 0, 0.83334],
    920: [0, 0.69444, 0, 0, 0.77778],
    923: [0, 0.69444, 0, 0, 0.61111],
    926: [0, 0.69444, 0, 0, 0.66667],
    928: [0, 0.69444, 0, 0, 0.70834],
    931: [0, 0.69444, 0, 0, 0.72222],
    933: [0, 0.69444, 0, 0, 0.77778],
    934: [0, 0.69444, 0, 0, 0.72222],
    936: [0, 0.69444, 0, 0, 0.77778],
    937: [0, 0.69444, 0, 0, 0.72222],
    8211: [0, 0.44444, 0.02778, 0, 0.5],
    8212: [0, 0.44444, 0.02778, 0, 1],
    8216: [0, 0.69444, 0, 0, 0.27778],
    8217: [0, 0.69444, 0, 0, 0.27778],
    8220: [0, 0.69444, 0, 0, 0.5],
    8221: [0, 0.69444, 0, 0, 0.5]
  },
  "Script-Regular": {
    32: [0, 0, 0, 0, 0.25],
    65: [0, 0.7, 0.22925, 0, 0.80253],
    66: [0, 0.7, 0.04087, 0, 0.90757],
    67: [0, 0.7, 0.1689, 0, 0.66619],
    68: [0, 0.7, 0.09371, 0, 0.77443],
    69: [0, 0.7, 0.18583, 0, 0.56162],
    70: [0, 0.7, 0.13634, 0, 0.89544],
    71: [0, 0.7, 0.17322, 0, 0.60961],
    72: [0, 0.7, 0.29694, 0, 0.96919],
    73: [0, 0.7, 0.19189, 0, 0.80907],
    74: [0.27778, 0.7, 0.19189, 0, 1.05159],
    75: [0, 0.7, 0.31259, 0, 0.91364],
    76: [0, 0.7, 0.19189, 0, 0.87373],
    77: [0, 0.7, 0.15981, 0, 1.08031],
    78: [0, 0.7, 0.3525, 0, 0.9015],
    79: [0, 0.7, 0.08078, 0, 0.73787],
    80: [0, 0.7, 0.08078, 0, 1.01262],
    81: [0, 0.7, 0.03305, 0, 0.88282],
    82: [0, 0.7, 0.06259, 0, 0.85],
    83: [0, 0.7, 0.19189, 0, 0.86767],
    84: [0, 0.7, 0.29087, 0, 0.74697],
    85: [0, 0.7, 0.25815, 0, 0.79996],
    86: [0, 0.7, 0.27523, 0, 0.62204],
    87: [0, 0.7, 0.27523, 0, 0.80532],
    88: [0, 0.7, 0.26006, 0, 0.94445],
    89: [0, 0.7, 0.2939, 0, 0.70961],
    90: [0, 0.7, 0.24037, 0, 0.8212],
    160: [0, 0, 0, 0, 0.25]
  },
  "Size1-Regular": {
    32: [0, 0, 0, 0, 0.25],
    40: [0.35001, 0.85, 0, 0, 0.45834],
    41: [0.35001, 0.85, 0, 0, 0.45834],
    47: [0.35001, 0.85, 0, 0, 0.57778],
    91: [0.35001, 0.85, 0, 0, 0.41667],
    92: [0.35001, 0.85, 0, 0, 0.57778],
    93: [0.35001, 0.85, 0, 0, 0.41667],
    123: [0.35001, 0.85, 0, 0, 0.58334],
    125: [0.35001, 0.85, 0, 0, 0.58334],
    160: [0, 0, 0, 0, 0.25],
    710: [0, 0.72222, 0, 0, 0.55556],
    732: [0, 0.72222, 0, 0, 0.55556],
    770: [0, 0.72222, 0, 0, 0.55556],
    771: [0, 0.72222, 0, 0, 0.55556],
    8214: [-99e-5, 0.601, 0, 0, 0.77778],
    8593: [1e-5, 0.6, 0, 0, 0.66667],
    8595: [1e-5, 0.6, 0, 0, 0.66667],
    8657: [1e-5, 0.6, 0, 0, 0.77778],
    8659: [1e-5, 0.6, 0, 0, 0.77778],
    8719: [0.25001, 0.75, 0, 0, 0.94445],
    8720: [0.25001, 0.75, 0, 0, 0.94445],
    8721: [0.25001, 0.75, 0, 0, 1.05556],
    8730: [0.35001, 0.85, 0, 0, 1],
    8739: [-599e-5, 0.606, 0, 0, 0.33333],
    8741: [-599e-5, 0.606, 0, 0, 0.55556],
    8747: [0.30612, 0.805, 0.19445, 0, 0.47222],
    8748: [0.306, 0.805, 0.19445, 0, 0.47222],
    8749: [0.306, 0.805, 0.19445, 0, 0.47222],
    8750: [0.30612, 0.805, 0.19445, 0, 0.47222],
    8896: [0.25001, 0.75, 0, 0, 0.83334],
    8897: [0.25001, 0.75, 0, 0, 0.83334],
    8898: [0.25001, 0.75, 0, 0, 0.83334],
    8899: [0.25001, 0.75, 0, 0, 0.83334],
    8968: [0.35001, 0.85, 0, 0, 0.47222],
    8969: [0.35001, 0.85, 0, 0, 0.47222],
    8970: [0.35001, 0.85, 0, 0, 0.47222],
    8971: [0.35001, 0.85, 0, 0, 0.47222],
    9168: [-99e-5, 0.601, 0, 0, 0.66667],
    10216: [0.35001, 0.85, 0, 0, 0.47222],
    10217: [0.35001, 0.85, 0, 0, 0.47222],
    10752: [0.25001, 0.75, 0, 0, 1.11111],
    10753: [0.25001, 0.75, 0, 0, 1.11111],
    10754: [0.25001, 0.75, 0, 0, 1.11111],
    10756: [0.25001, 0.75, 0, 0, 0.83334],
    10758: [0.25001, 0.75, 0, 0, 0.83334]
  },
  "Size2-Regular": {
    32: [0, 0, 0, 0, 0.25],
    40: [0.65002, 1.15, 0, 0, 0.59722],
    41: [0.65002, 1.15, 0, 0, 0.59722],
    47: [0.65002, 1.15, 0, 0, 0.81111],
    91: [0.65002, 1.15, 0, 0, 0.47222],
    92: [0.65002, 1.15, 0, 0, 0.81111],
    93: [0.65002, 1.15, 0, 0, 0.47222],
    123: [0.65002, 1.15, 0, 0, 0.66667],
    125: [0.65002, 1.15, 0, 0, 0.66667],
    160: [0, 0, 0, 0, 0.25],
    710: [0, 0.75, 0, 0, 1],
    732: [0, 0.75, 0, 0, 1],
    770: [0, 0.75, 0, 0, 1],
    771: [0, 0.75, 0, 0, 1],
    8719: [0.55001, 1.05, 0, 0, 1.27778],
    8720: [0.55001, 1.05, 0, 0, 1.27778],
    8721: [0.55001, 1.05, 0, 0, 1.44445],
    8730: [0.65002, 1.15, 0, 0, 1],
    8747: [0.86225, 1.36, 0.44445, 0, 0.55556],
    8748: [0.862, 1.36, 0.44445, 0, 0.55556],
    8749: [0.862, 1.36, 0.44445, 0, 0.55556],
    8750: [0.86225, 1.36, 0.44445, 0, 0.55556],
    8896: [0.55001, 1.05, 0, 0, 1.11111],
    8897: [0.55001, 1.05, 0, 0, 1.11111],
    8898: [0.55001, 1.05, 0, 0, 1.11111],
    8899: [0.55001, 1.05, 0, 0, 1.11111],
    8968: [0.65002, 1.15, 0, 0, 0.52778],
    8969: [0.65002, 1.15, 0, 0, 0.52778],
    8970: [0.65002, 1.15, 0, 0, 0.52778],
    8971: [0.65002, 1.15, 0, 0, 0.52778],
    10216: [0.65002, 1.15, 0, 0, 0.61111],
    10217: [0.65002, 1.15, 0, 0, 0.61111],
    10752: [0.55001, 1.05, 0, 0, 1.51112],
    10753: [0.55001, 1.05, 0, 0, 1.51112],
    10754: [0.55001, 1.05, 0, 0, 1.51112],
    10756: [0.55001, 1.05, 0, 0, 1.11111],
    10758: [0.55001, 1.05, 0, 0, 1.11111]
  },
  "Size3-Regular": {
    32: [0, 0, 0, 0, 0.25],
    40: [0.95003, 1.45, 0, 0, 0.73611],
    41: [0.95003, 1.45, 0, 0, 0.73611],
    47: [0.95003, 1.45, 0, 0, 1.04445],
    91: [0.95003, 1.45, 0, 0, 0.52778],
    92: [0.95003, 1.45, 0, 0, 1.04445],
    93: [0.95003, 1.45, 0, 0, 0.52778],
    123: [0.95003, 1.45, 0, 0, 0.75],
    125: [0.95003, 1.45, 0, 0, 0.75],
    160: [0, 0, 0, 0, 0.25],
    710: [0, 0.75, 0, 0, 1.44445],
    732: [0, 0.75, 0, 0, 1.44445],
    770: [0, 0.75, 0, 0, 1.44445],
    771: [0, 0.75, 0, 0, 1.44445],
    8730: [0.95003, 1.45, 0, 0, 1],
    8968: [0.95003, 1.45, 0, 0, 0.58334],
    8969: [0.95003, 1.45, 0, 0, 0.58334],
    8970: [0.95003, 1.45, 0, 0, 0.58334],
    8971: [0.95003, 1.45, 0, 0, 0.58334],
    10216: [0.95003, 1.45, 0, 0, 0.75],
    10217: [0.95003, 1.45, 0, 0, 0.75]
  },
  "Size4-Regular": {
    32: [0, 0, 0, 0, 0.25],
    40: [1.25003, 1.75, 0, 0, 0.79167],
    41: [1.25003, 1.75, 0, 0, 0.79167],
    47: [1.25003, 1.75, 0, 0, 1.27778],
    91: [1.25003, 1.75, 0, 0, 0.58334],
    92: [1.25003, 1.75, 0, 0, 1.27778],
    93: [1.25003, 1.75, 0, 0, 0.58334],
    123: [1.25003, 1.75, 0, 0, 0.80556],
    125: [1.25003, 1.75, 0, 0, 0.80556],
    160: [0, 0, 0, 0, 0.25],
    710: [0, 0.825, 0, 0, 1.8889],
    732: [0, 0.825, 0, 0, 1.8889],
    770: [0, 0.825, 0, 0, 1.8889],
    771: [0, 0.825, 0, 0, 1.8889],
    8730: [1.25003, 1.75, 0, 0, 1],
    8968: [1.25003, 1.75, 0, 0, 0.63889],
    8969: [1.25003, 1.75, 0, 0, 0.63889],
    8970: [1.25003, 1.75, 0, 0, 0.63889],
    8971: [1.25003, 1.75, 0, 0, 0.63889],
    9115: [0.64502, 1.155, 0, 0, 0.875],
    9116: [1e-5, 0.6, 0, 0, 0.875],
    9117: [0.64502, 1.155, 0, 0, 0.875],
    9118: [0.64502, 1.155, 0, 0, 0.875],
    9119: [1e-5, 0.6, 0, 0, 0.875],
    9120: [0.64502, 1.155, 0, 0, 0.875],
    9121: [0.64502, 1.155, 0, 0, 0.66667],
    9122: [-99e-5, 0.601, 0, 0, 0.66667],
    9123: [0.64502, 1.155, 0, 0, 0.66667],
    9124: [0.64502, 1.155, 0, 0, 0.66667],
    9125: [-99e-5, 0.601, 0, 0, 0.66667],
    9126: [0.64502, 1.155, 0, 0, 0.66667],
    9127: [1e-5, 0.9, 0, 0, 0.88889],
    9128: [0.65002, 1.15, 0, 0, 0.88889],
    9129: [0.90001, 0, 0, 0, 0.88889],
    9130: [0, 0.3, 0, 0, 0.88889],
    9131: [1e-5, 0.9, 0, 0, 0.88889],
    9132: [0.65002, 1.15, 0, 0, 0.88889],
    9133: [0.90001, 0, 0, 0, 0.88889],
    9143: [0.88502, 0.915, 0, 0, 1.05556],
    10216: [1.25003, 1.75, 0, 0, 0.80556],
    10217: [1.25003, 1.75, 0, 0, 0.80556],
    57344: [-499e-5, 0.605, 0, 0, 1.05556],
    57345: [-499e-5, 0.605, 0, 0, 1.05556],
    57680: [0, 0.12, 0, 0, 0.45],
    57681: [0, 0.12, 0, 0, 0.45],
    57682: [0, 0.12, 0, 0, 0.45],
    57683: [0, 0.12, 0, 0, 0.45]
  },
  "Typewriter-Regular": {
    32: [0, 0, 0, 0, 0.525],
    33: [0, 0.61111, 0, 0, 0.525],
    34: [0, 0.61111, 0, 0, 0.525],
    35: [0, 0.61111, 0, 0, 0.525],
    36: [0.08333, 0.69444, 0, 0, 0.525],
    37: [0.08333, 0.69444, 0, 0, 0.525],
    38: [0, 0.61111, 0, 0, 0.525],
    39: [0, 0.61111, 0, 0, 0.525],
    40: [0.08333, 0.69444, 0, 0, 0.525],
    41: [0.08333, 0.69444, 0, 0, 0.525],
    42: [0, 0.52083, 0, 0, 0.525],
    43: [-0.08056, 0.53055, 0, 0, 0.525],
    44: [0.13889, 0.125, 0, 0, 0.525],
    45: [-0.08056, 0.53055, 0, 0, 0.525],
    46: [0, 0.125, 0, 0, 0.525],
    47: [0.08333, 0.69444, 0, 0, 0.525],
    48: [0, 0.61111, 0, 0, 0.525],
    49: [0, 0.61111, 0, 0, 0.525],
    50: [0, 0.61111, 0, 0, 0.525],
    51: [0, 0.61111, 0, 0, 0.525],
    52: [0, 0.61111, 0, 0, 0.525],
    53: [0, 0.61111, 0, 0, 0.525],
    54: [0, 0.61111, 0, 0, 0.525],
    55: [0, 0.61111, 0, 0, 0.525],
    56: [0, 0.61111, 0, 0, 0.525],
    57: [0, 0.61111, 0, 0, 0.525],
    58: [0, 0.43056, 0, 0, 0.525],
    59: [0.13889, 0.43056, 0, 0, 0.525],
    60: [-0.05556, 0.55556, 0, 0, 0.525],
    61: [-0.19549, 0.41562, 0, 0, 0.525],
    62: [-0.05556, 0.55556, 0, 0, 0.525],
    63: [0, 0.61111, 0, 0, 0.525],
    64: [0, 0.61111, 0, 0, 0.525],
    65: [0, 0.61111, 0, 0, 0.525],
    66: [0, 0.61111, 0, 0, 0.525],
    67: [0, 0.61111, 0, 0, 0.525],
    68: [0, 0.61111, 0, 0, 0.525],
    69: [0, 0.61111, 0, 0, 0.525],
    70: [0, 0.61111, 0, 0, 0.525],
    71: [0, 0.61111, 0, 0, 0.525],
    72: [0, 0.61111, 0, 0, 0.525],
    73: [0, 0.61111, 0, 0, 0.525],
    74: [0, 0.61111, 0, 0, 0.525],
    75: [0, 0.61111, 0, 0, 0.525],
    76: [0, 0.61111, 0, 0, 0.525],
    77: [0, 0.61111, 0, 0, 0.525],
    78: [0, 0.61111, 0, 0, 0.525],
    79: [0, 0.61111, 0, 0, 0.525],
    80: [0, 0.61111, 0, 0, 0.525],
    81: [0.13889, 0.61111, 0, 0, 0.525],
    82: [0, 0.61111, 0, 0, 0.525],
    83: [0, 0.61111, 0, 0, 0.525],
    84: [0, 0.61111, 0, 0, 0.525],
    85: [0, 0.61111, 0, 0, 0.525],
    86: [0, 0.61111, 0, 0, 0.525],
    87: [0, 0.61111, 0, 0, 0.525],
    88: [0, 0.61111, 0, 0, 0.525],
    89: [0, 0.61111, 0, 0, 0.525],
    90: [0, 0.61111, 0, 0, 0.525],
    91: [0.08333, 0.69444, 0, 0, 0.525],
    92: [0.08333, 0.69444, 0, 0, 0.525],
    93: [0.08333, 0.69444, 0, 0, 0.525],
    94: [0, 0.61111, 0, 0, 0.525],
    95: [0.09514, 0, 0, 0, 0.525],
    96: [0, 0.61111, 0, 0, 0.525],
    97: [0, 0.43056, 0, 0, 0.525],
    98: [0, 0.61111, 0, 0, 0.525],
    99: [0, 0.43056, 0, 0, 0.525],
    100: [0, 0.61111, 0, 0, 0.525],
    101: [0, 0.43056, 0, 0, 0.525],
    102: [0, 0.61111, 0, 0, 0.525],
    103: [0.22222, 0.43056, 0, 0, 0.525],
    104: [0, 0.61111, 0, 0, 0.525],
    105: [0, 0.61111, 0, 0, 0.525],
    106: [0.22222, 0.61111, 0, 0, 0.525],
    107: [0, 0.61111, 0, 0, 0.525],
    108: [0, 0.61111, 0, 0, 0.525],
    109: [0, 0.43056, 0, 0, 0.525],
    110: [0, 0.43056, 0, 0, 0.525],
    111: [0, 0.43056, 0, 0, 0.525],
    112: [0.22222, 0.43056, 0, 0, 0.525],
    113: [0.22222, 0.43056, 0, 0, 0.525],
    114: [0, 0.43056, 0, 0, 0.525],
    115: [0, 0.43056, 0, 0, 0.525],
    116: [0, 0.55358, 0, 0, 0.525],
    117: [0, 0.43056, 0, 0, 0.525],
    118: [0, 0.43056, 0, 0, 0.525],
    119: [0, 0.43056, 0, 0, 0.525],
    120: [0, 0.43056, 0, 0, 0.525],
    121: [0.22222, 0.43056, 0, 0, 0.525],
    122: [0, 0.43056, 0, 0, 0.525],
    123: [0.08333, 0.69444, 0, 0, 0.525],
    124: [0.08333, 0.69444, 0, 0, 0.525],
    125: [0.08333, 0.69444, 0, 0, 0.525],
    126: [0, 0.61111, 0, 0, 0.525],
    127: [0, 0.61111, 0, 0, 0.525],
    160: [0, 0, 0, 0, 0.525],
    176: [0, 0.61111, 0, 0, 0.525],
    184: [0.19445, 0, 0, 0, 0.525],
    305: [0, 0.43056, 0, 0, 0.525],
    567: [0.22222, 0.43056, 0, 0, 0.525],
    711: [0, 0.56597, 0, 0, 0.525],
    713: [0, 0.56555, 0, 0, 0.525],
    714: [0, 0.61111, 0, 0, 0.525],
    715: [0, 0.61111, 0, 0, 0.525],
    728: [0, 0.61111, 0, 0, 0.525],
    730: [0, 0.61111, 0, 0, 0.525],
    770: [0, 0.61111, 0, 0, 0.525],
    771: [0, 0.61111, 0, 0, 0.525],
    776: [0, 0.61111, 0, 0, 0.525],
    915: [0, 0.61111, 0, 0, 0.525],
    916: [0, 0.61111, 0, 0, 0.525],
    920: [0, 0.61111, 0, 0, 0.525],
    923: [0, 0.61111, 0, 0, 0.525],
    926: [0, 0.61111, 0, 0, 0.525],
    928: [0, 0.61111, 0, 0, 0.525],
    931: [0, 0.61111, 0, 0, 0.525],
    933: [0, 0.61111, 0, 0, 0.525],
    934: [0, 0.61111, 0, 0, 0.525],
    936: [0, 0.61111, 0, 0, 0.525],
    937: [0, 0.61111, 0, 0, 0.525],
    8216: [0, 0.61111, 0, 0, 0.525],
    8217: [0, 0.61111, 0, 0, 0.525],
    8242: [0, 0.61111, 0, 0, 0.525],
    9251: [0.11111, 0.21944, 0, 0, 0.525]
  }
}, ya = {
  slant: [0.25, 0.25, 0.25],
  // sigma1
  space: [0, 0, 0],
  // sigma2
  stretch: [0, 0, 0],
  // sigma3
  shrink: [0, 0, 0],
  // sigma4
  xHeight: [0.431, 0.431, 0.431],
  // sigma5
  quad: [1, 1.171, 1.472],
  // sigma6
  extraSpace: [0, 0, 0],
  // sigma7
  num1: [0.677, 0.732, 0.925],
  // sigma8
  num2: [0.394, 0.384, 0.387],
  // sigma9
  num3: [0.444, 0.471, 0.504],
  // sigma10
  denom1: [0.686, 0.752, 1.025],
  // sigma11
  denom2: [0.345, 0.344, 0.532],
  // sigma12
  sup1: [0.413, 0.503, 0.504],
  // sigma13
  sup2: [0.363, 0.431, 0.404],
  // sigma14
  sup3: [0.289, 0.286, 0.294],
  // sigma15
  sub1: [0.15, 0.143, 0.2],
  // sigma16
  sub2: [0.247, 0.286, 0.4],
  // sigma17
  supDrop: [0.386, 0.353, 0.494],
  // sigma18
  subDrop: [0.05, 0.071, 0.1],
  // sigma19
  delim1: [2.39, 1.7, 1.98],
  // sigma20
  delim2: [1.01, 1.157, 1.42],
  // sigma21
  axisHeight: [0.25, 0.25, 0.25],
  // sigma22
  // These font metrics are extracted from TeX by using tftopl on cmex10.tfm;
  // they correspond to the font parameters of the extension fonts (family 3).
  // See the TeXbook, page 441. In AMSTeX, the extension fonts scale; to
  // match cmex7, we'd use cmex7.tfm values for script and scriptscript
  // values.
  defaultRuleThickness: [0.04, 0.049, 0.049],
  // xi8; cmex7: 0.049
  bigOpSpacing1: [0.111, 0.111, 0.111],
  // xi9
  bigOpSpacing2: [0.166, 0.166, 0.166],
  // xi10
  bigOpSpacing3: [0.2, 0.2, 0.2],
  // xi11
  bigOpSpacing4: [0.6, 0.611, 0.611],
  // xi12; cmex7: 0.611
  bigOpSpacing5: [0.1, 0.143, 0.143],
  // xi13; cmex7: 0.143
  // The \sqrt rule width is taken from the height of the surd character.
  // Since we use the same font at all sizes, this thickness doesn't scale.
  sqrtRuleThickness: [0.04, 0.04, 0.04],
  // This value determines how large a pt is, for metrics which are defined
  // in terms of pts.
  // This value is also used in katex.less; if you change it make sure the
  // values match.
  ptPerEm: [10, 10, 10],
  // The space between adjacent `|` columns in an array definition. From
  // `\showthe\doublerulesep` in LaTeX. Equals 2.0 / ptPerEm.
  doubleRuleSep: [0.2, 0.2, 0.2],
  // The width of separator lines in {array} environments. From
  // `\showthe\arrayrulewidth` in LaTeX. Equals 0.4 / ptPerEm.
  arrayRuleWidth: [0.04, 0.04, 0.04],
  // Two values from LaTeX source2e:
  fboxsep: [0.3, 0.3, 0.3],
  //        3 pt / ptPerEm
  fboxrule: [0.04, 0.04, 0.04]
  // 0.4 pt / ptPerEm
}, Fs = {
  // Latin-1
  Å: "A",
  Ð: "D",
  Þ: "o",
  å: "a",
  ð: "d",
  þ: "o",
  // Cyrillic
  А: "A",
  Б: "B",
  В: "B",
  Г: "F",
  Д: "A",
  Е: "E",
  Ж: "K",
  З: "3",
  И: "N",
  Й: "N",
  К: "K",
  Л: "N",
  М: "M",
  Н: "H",
  О: "O",
  П: "N",
  Р: "P",
  С: "C",
  Т: "T",
  У: "y",
  Ф: "O",
  Х: "X",
  Ц: "U",
  Ч: "h",
  Ш: "W",
  Щ: "W",
  Ъ: "B",
  Ы: "X",
  Ь: "B",
  Э: "3",
  Ю: "X",
  Я: "R",
  а: "a",
  б: "b",
  в: "a",
  г: "r",
  д: "y",
  е: "e",
  ж: "m",
  з: "e",
  и: "n",
  й: "n",
  к: "n",
  л: "n",
  м: "m",
  н: "n",
  о: "o",
  п: "n",
  р: "p",
  с: "c",
  т: "o",
  у: "y",
  ф: "b",
  х: "x",
  ц: "n",
  ч: "n",
  ш: "w",
  щ: "w",
  ъ: "a",
  ы: "m",
  ь: "a",
  э: "e",
  ю: "m",
  я: "r"
};
function tn(a, e) {
  tt[a] = e;
}
function Di(a, e, t) {
  if (!tt[e])
    throw new Error("Font metrics not found for font: " + e + ".");
  var i = a.charCodeAt(0), s = tt[e][i];
  if (!s && a[0] in Fs && (i = Fs[a[0]].charCodeAt(0), s = tt[e][i]), !s && t === "text" && vr(i) && (s = tt[e][77]), s)
    return {
      depth: s[0],
      height: s[1],
      italic: s[2],
      skew: s[3],
      width: s[4]
    };
}
var ti = {};
function an(a) {
  var e;
  if (a >= 5 ? e = 0 : a >= 3 ? e = 1 : e = 2, !ti[e]) {
    var t = ti[e] = {
      cssEmPerMu: ya.quad[e] / 18
    };
    for (var i in ya)
      ya.hasOwnProperty(i) && (t[i] = ya[i][e]);
  }
  return ti[e];
}
var sn = [
  // Each element contains [textsize, scriptsize, scriptscriptsize].
  // The size mappings are taken from TeX with \normalsize=10pt.
  [1, 1, 1],
  // size1: [5, 5, 5]              \tiny
  [2, 1, 1],
  // size2: [6, 5, 5]
  [3, 1, 1],
  // size3: [7, 5, 5]              \scriptsize
  [4, 2, 1],
  // size4: [8, 6, 5]              \footnotesize
  [5, 2, 1],
  // size5: [9, 6, 5]              \small
  [6, 3, 1],
  // size6: [10, 7, 5]             \normalsize
  [7, 4, 2],
  // size7: [12, 8, 6]             \large
  [8, 6, 3],
  // size8: [14.4, 10, 7]          \Large
  [9, 7, 6],
  // size9: [17.28, 12, 10]        \LARGE
  [10, 8, 7],
  // size10: [20.74, 14.4, 12]     \huge
  [11, 10, 9]
  // size11: [24.88, 20.74, 17.28] \HUGE
], Ps = [
  // fontMetrics.js:getGlobalMetrics also uses size indexes, so if
  // you change size indexes, change that function.
  0.5,
  0.6,
  0.7,
  0.8,
  0.9,
  1,
  1.2,
  1.44,
  1.728,
  2.074,
  2.488
], Bs = function(e, t) {
  return t.size < 2 ? e : sn[e - 1][t.size - 1];
};
class mt {
  // A font family applies to a group of fonts (i.e. SansSerif), while a font
  // represents a specific font (i.e. SansSerif Bold).
  // See: https://tex.stackexchange.com/questions/22350/difference-between-textrm-and-mathrm
  /**
   * The base size index.
   */
  constructor(e) {
    this.style = void 0, this.color = void 0, this.size = void 0, this.textSize = void 0, this.phantom = void 0, this.font = void 0, this.fontFamily = void 0, this.fontWeight = void 0, this.fontShape = void 0, this.sizeMultiplier = void 0, this.maxSize = void 0, this.minRuleThickness = void 0, this._fontMetrics = void 0, this.style = e.style, this.color = e.color, this.size = e.size || mt.BASESIZE, this.textSize = e.textSize || this.size, this.phantom = !!e.phantom, this.font = e.font || "", this.fontFamily = e.fontFamily || "", this.fontWeight = e.fontWeight || "", this.fontShape = e.fontShape || "", this.sizeMultiplier = Ps[this.size - 1], this.maxSize = e.maxSize, this.minRuleThickness = e.minRuleThickness, this._fontMetrics = void 0;
  }
  /**
   * Returns a new options object with the same properties as "this".  Properties
   * from "extension" will be copied to the new options object.
   */
  extend(e) {
    var t = {
      style: this.style,
      size: this.size,
      textSize: this.textSize,
      color: this.color,
      phantom: this.phantom,
      font: this.font,
      fontFamily: this.fontFamily,
      fontWeight: this.fontWeight,
      fontShape: this.fontShape,
      maxSize: this.maxSize,
      minRuleThickness: this.minRuleThickness
    };
    for (var i in e)
      e.hasOwnProperty(i) && (t[i] = e[i]);
    return new mt(t);
  }
  /**
   * Return an options object with the given style. If `this.style === style`,
   * returns `this`.
   */
  havingStyle(e) {
    return this.style === e ? this : this.extend({
      style: e,
      size: Bs(this.textSize, e)
    });
  }
  /**
   * Return an options object with a cramped version of the current style. If
   * the current style is cramped, returns `this`.
   */
  havingCrampedStyle() {
    return this.havingStyle(this.style.cramp());
  }
  /**
   * Return an options object with the given size and in at least `\textstyle`.
   * Returns `this` if appropriate.
   */
  havingSize(e) {
    return this.size === e && this.textSize === e ? this : this.extend({
      style: this.style.text(),
      size: e,
      textSize: e,
      sizeMultiplier: Ps[e - 1]
    });
  }
  /**
   * Like `this.havingSize(BASESIZE).havingStyle(style)`. If `style` is omitted,
   * changes to at least `\textstyle`.
   */
  havingBaseStyle(e) {
    e = e || this.style.text();
    var t = Bs(mt.BASESIZE, e);
    return this.size === t && this.textSize === mt.BASESIZE && this.style === e ? this : this.extend({
      style: e,
      size: t
    });
  }
  /**
   * Remove the effect of sizing changes such as \Huge.
   * Keep the effect of the current style, such as \scriptstyle.
   */
  havingBaseSizing() {
    var e;
    switch (this.style.id) {
      case 4:
      case 5:
        e = 3;
        break;
      case 6:
      case 7:
        e = 1;
        break;
      default:
        e = 6;
    }
    return this.extend({
      style: this.style.text(),
      size: e
    });
  }
  /**
   * Create a new options object with the given color.
   */
  withColor(e) {
    return this.extend({
      color: e
    });
  }
  /**
   * Create a new options object with "phantom" set to true.
   */
  withPhantom() {
    return this.extend({
      phantom: !0
    });
  }
  /**
   * Creates a new options object with the given math font or old text font.
   * @type {[type]}
   */
  withFont(e) {
    return this.extend({
      font: e
    });
  }
  /**
   * Create a new options objects with the given fontFamily.
   */
  withTextFontFamily(e) {
    return this.extend({
      fontFamily: e,
      font: ""
    });
  }
  /**
   * Creates a new options object with the given font weight
   */
  withTextFontWeight(e) {
    return this.extend({
      fontWeight: e,
      font: ""
    });
  }
  /**
   * Creates a new options object with the given font weight
   */
  withTextFontShape(e) {
    return this.extend({
      fontShape: e,
      font: ""
    });
  }
  /**
   * Return the CSS sizing classes required to switch from enclosing options
   * `oldOptions` to `this`. Returns an array of classes.
   */
  sizingClasses(e) {
    return e.size !== this.size ? ["sizing", "reset-size" + e.size, "size" + this.size] : [];
  }
  /**
   * Return the CSS sizing classes required to switch to the base size. Like
   * `this.havingSize(BASESIZE).sizingClasses(this)`.
   */
  baseSizingClasses() {
    return this.size !== mt.BASESIZE ? ["sizing", "reset-size" + this.size, "size" + mt.BASESIZE] : [];
  }
  /**
   * Return the font metrics for this size.
   */
  fontMetrics() {
    return this._fontMetrics || (this._fontMetrics = an(this.size)), this._fontMetrics;
  }
  /**
   * Gets the CSS color of the current options object
   */
  getColor() {
    return this.phantom ? "transparent" : this.color;
  }
}
mt.BASESIZE = 6;
var ji = {
  // https://en.wikibooks.org/wiki/LaTeX/Lengths and
  // https://tex.stackexchange.com/a/8263
  pt: 1,
  // TeX point
  mm: 7227 / 2540,
  // millimeter
  cm: 7227 / 254,
  // centimeter
  in: 72.27,
  // inch
  bp: 803 / 800,
  // big (PostScript) points
  pc: 12,
  // pica
  dd: 1238 / 1157,
  // didot
  cc: 14856 / 1157,
  // cicero (12 didot)
  nd: 685 / 642,
  // new didot
  nc: 1370 / 107,
  // new cicero (12 new didot)
  sp: 1 / 65536,
  // scaled point (TeX's internal smallest unit)
  // https://tex.stackexchange.com/a/41371
  px: 803 / 800
  // \pdfpxdimen defaults to 1 bp in pdfTeX and LuaTeX
}, rn = {
  ex: !0,
  em: !0,
  mu: !0
}, wr = function(e) {
  return typeof e != "string" && (e = e.unit), e in ji || e in rn || e === "ex";
}, ue = function(e, t) {
  var i;
  if (e.unit in ji)
    i = ji[e.unit] / t.fontMetrics().ptPerEm / t.sizeMultiplier;
  else if (e.unit === "mu")
    i = t.fontMetrics().cssEmPerMu;
  else {
    var s;
    if (t.style.isTight() ? s = t.havingStyle(t.style.text()) : s = t, e.unit === "ex")
      i = s.fontMetrics().xHeight;
    else if (e.unit === "em")
      i = s.fontMetrics().quad;
    else
      throw new z("Invalid unit: '" + e.unit + "'");
    s !== t && (i *= s.sizeMultiplier / t.sizeMultiplier);
  }
  return Math.min(e.number * i, t.maxSize);
}, I = function(e) {
  return +e.toFixed(4) + "em";
}, wt = function(e) {
  return e.filter((t) => t).join(" ");
}, jr = function(e, t, i) {
  if (this.classes = e || [], this.attributes = {}, this.height = 0, this.depth = 0, this.maxFontSize = 0, this.style = i || {}, t) {
    t.style.isTight() && this.classes.push("mtight");
    var s = t.getColor();
    s && (this.style.color = s);
  }
}, kr = function(e) {
  var t = document.createElement(e);
  t.className = wt(this.classes);
  for (var i in this.style)
    this.style.hasOwnProperty(i) && (t.style[i] = this.style[i]);
  for (var s in this.attributes)
    this.attributes.hasOwnProperty(s) && t.setAttribute(s, this.attributes[s]);
  for (var r = 0; r < this.children.length; r++)
    t.appendChild(this.children[r].toNode());
  return t;
}, _r = function(e) {
  var t = "<" + e;
  this.classes.length && (t += ' class="' + X.escape(wt(this.classes)) + '"');
  var i = "";
  for (var s in this.style)
    this.style.hasOwnProperty(s) && (i += X.hyphenate(s) + ":" + this.style[s] + ";");
  i && (t += ' style="' + X.escape(i) + '"');
  for (var r in this.attributes)
    this.attributes.hasOwnProperty(r) && (t += " " + r + '="' + X.escape(this.attributes[r]) + '"');
  t += ">";
  for (var l = 0; l < this.children.length; l++)
    t += this.children[l].toMarkup();
  return t += "</" + e + ">", t;
};
class la {
  constructor(e, t, i, s) {
    this.children = void 0, this.attributes = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.width = void 0, this.maxFontSize = void 0, this.style = void 0, jr.call(this, e, i, s), this.children = t || [];
  }
  /**
   * Sets an arbitrary attribute on the span. Warning: use this wisely. Not
   * all browsers support attributes the same, and having too many custom
   * attributes is probably bad.
   */
  setAttribute(e, t) {
    this.attributes[e] = t;
  }
  hasClass(e) {
    return X.contains(this.classes, e);
  }
  toNode() {
    return kr.call(this, "span");
  }
  toMarkup() {
    return _r.call(this, "span");
  }
}
class Oi {
  constructor(e, t, i, s) {
    this.children = void 0, this.attributes = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.maxFontSize = void 0, this.style = void 0, jr.call(this, t, s), this.children = i || [], this.setAttribute("href", e);
  }
  setAttribute(e, t) {
    this.attributes[e] = t;
  }
  hasClass(e) {
    return X.contains(this.classes, e);
  }
  toNode() {
    return kr.call(this, "a");
  }
  toMarkup() {
    return _r.call(this, "a");
  }
}
class on {
  constructor(e, t, i) {
    this.src = void 0, this.alt = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.maxFontSize = void 0, this.style = void 0, this.alt = t, this.src = e, this.classes = ["mord"], this.style = i;
  }
  hasClass(e) {
    return X.contains(this.classes, e);
  }
  toNode() {
    var e = document.createElement("img");
    e.src = this.src, e.alt = this.alt, e.className = "mord";
    for (var t in this.style)
      this.style.hasOwnProperty(t) && (e.style[t] = this.style[t]);
    return e;
  }
  toMarkup() {
    var e = "<img  src='" + this.src + " 'alt='" + this.alt + "' ", t = "";
    for (var i in this.style)
      this.style.hasOwnProperty(i) && (t += X.hyphenate(i) + ":" + this.style[i] + ";");
    return t && (e += ' style="' + X.escape(t) + '"'), e += "'/>", e;
  }
}
var nn = {
  î: "ı̂",
  ï: "ı̈",
  í: "ı́",
  // 'ī': '\u0131\u0304', // enable when we add Extended Latin
  ì: "ı̀"
};
class $e {
  constructor(e, t, i, s, r, l, c, m) {
    this.text = void 0, this.height = void 0, this.depth = void 0, this.italic = void 0, this.skew = void 0, this.width = void 0, this.maxFontSize = void 0, this.classes = void 0, this.style = void 0, this.text = e, this.height = t || 0, this.depth = i || 0, this.italic = s || 0, this.skew = r || 0, this.width = l || 0, this.classes = c || [], this.style = m || {}, this.maxFontSize = 0;
    var d = G0(this.text.charCodeAt(0));
    d && this.classes.push(d + "_fallback"), /[îïíì]/.test(this.text) && (this.text = nn[this.text]);
  }
  hasClass(e) {
    return X.contains(this.classes, e);
  }
  /**
   * Creates a text node or span from a symbol node. Note that a span is only
   * created if it is needed.
   */
  toNode() {
    var e = document.createTextNode(this.text), t = null;
    this.italic > 0 && (t = document.createElement("span"), t.style.marginRight = I(this.italic)), this.classes.length > 0 && (t = t || document.createElement("span"), t.className = wt(this.classes));
    for (var i in this.style)
      this.style.hasOwnProperty(i) && (t = t || document.createElement("span"), t.style[i] = this.style[i]);
    return t ? (t.appendChild(e), t) : e;
  }
  /**
   * Creates markup for a symbol node.
   */
  toMarkup() {
    var e = !1, t = "<span";
    this.classes.length && (e = !0, t += ' class="', t += X.escape(wt(this.classes)), t += '"');
    var i = "";
    this.italic > 0 && (i += "margin-right:" + this.italic + "em;");
    for (var s in this.style)
      this.style.hasOwnProperty(s) && (i += X.hyphenate(s) + ":" + this.style[s] + ";");
    i && (e = !0, t += ' style="' + X.escape(i) + '"');
    var r = X.escape(this.text);
    return e ? (t += ">", t += r, t += "</span>", t) : r;
  }
}
class dt {
  constructor(e, t) {
    this.children = void 0, this.attributes = void 0, this.children = e || [], this.attributes = t || {};
  }
  toNode() {
    var e = "http://www.w3.org/2000/svg", t = document.createElementNS(e, "svg");
    for (var i in this.attributes)
      Object.prototype.hasOwnProperty.call(this.attributes, i) && t.setAttribute(i, this.attributes[i]);
    for (var s = 0; s < this.children.length; s++)
      t.appendChild(this.children[s].toNode());
    return t;
  }
  toMarkup() {
    var e = '<svg xmlns="http://www.w3.org/2000/svg"';
    for (var t in this.attributes)
      Object.prototype.hasOwnProperty.call(this.attributes, t) && (e += " " + t + "='" + this.attributes[t] + "'");
    e += ">";
    for (var i = 0; i < this.children.length; i++)
      e += this.children[i].toMarkup();
    return e += "</svg>", e;
  }
}
class jt {
  constructor(e, t) {
    this.pathName = void 0, this.alternate = void 0, this.pathName = e, this.alternate = t;
  }
  toNode() {
    var e = "http://www.w3.org/2000/svg", t = document.createElementNS(e, "path");
    return this.alternate ? t.setAttribute("d", this.alternate) : t.setAttribute("d", Ms[this.pathName]), t;
  }
  toMarkup() {
    return this.alternate ? "<path d='" + this.alternate + "'/>" : "<path d='" + Ms[this.pathName] + "'/>";
  }
}
class ki {
  constructor(e) {
    this.attributes = void 0, this.attributes = e || {};
  }
  toNode() {
    var e = "http://www.w3.org/2000/svg", t = document.createElementNS(e, "line");
    for (var i in this.attributes)
      Object.prototype.hasOwnProperty.call(this.attributes, i) && t.setAttribute(i, this.attributes[i]);
    return t;
  }
  toMarkup() {
    var e = "<line";
    for (var t in this.attributes)
      Object.prototype.hasOwnProperty.call(this.attributes, t) && (e += " " + t + "='" + this.attributes[t] + "'");
    return e += "/>", e;
  }
}
function Ds(a) {
  if (a instanceof $e)
    return a;
  throw new Error("Expected symbolNode but got " + String(a) + ".");
}
function ln(a) {
  if (a instanceof la)
    return a;
  throw new Error("Expected span<HtmlDomNode> but got " + String(a) + ".");
}
var cn = {
  bin: 1,
  close: 1,
  inner: 1,
  open: 1,
  punct: 1,
  rel: 1
}, mn = {
  "accent-token": 1,
  mathord: 1,
  "op-token": 1,
  spacing: 1,
  textord: 1
}, ce = {
  math: {},
  text: {}
};
function o(a, e, t, i, s, r) {
  ce[a][s] = {
    font: e,
    group: t,
    replace: i
  }, r && i && (ce[a][i] = ce[a][s]);
}
var n = "math", D = "text", g = "main", p = "ams", me = "accent-token", U = "bin", Pe = "close", Wt = "inner", $ = "mathord", fe = "op-token", qe = "open", za = "punct", h = "rel", yt = "spacing", b = "textord";
o(n, g, h, "≡", "\\equiv", !0);
o(n, g, h, "≺", "\\prec", !0);
o(n, g, h, "≻", "\\succ", !0);
o(n, g, h, "∼", "\\sim", !0);
o(n, g, h, "⊥", "\\perp");
o(n, g, h, "⪯", "\\preceq", !0);
o(n, g, h, "⪰", "\\succeq", !0);
o(n, g, h, "≃", "\\simeq", !0);
o(n, g, h, "∣", "\\mid", !0);
o(n, g, h, "≪", "\\ll", !0);
o(n, g, h, "≫", "\\gg", !0);
o(n, g, h, "≍", "\\asymp", !0);
o(n, g, h, "∥", "\\parallel");
o(n, g, h, "⋈", "\\bowtie", !0);
o(n, g, h, "⌣", "\\smile", !0);
o(n, g, h, "⊑", "\\sqsubseteq", !0);
o(n, g, h, "⊒", "\\sqsupseteq", !0);
o(n, g, h, "≐", "\\doteq", !0);
o(n, g, h, "⌢", "\\frown", !0);
o(n, g, h, "∋", "\\ni", !0);
o(n, g, h, "∝", "\\propto", !0);
o(n, g, h, "⊢", "\\vdash", !0);
o(n, g, h, "⊣", "\\dashv", !0);
o(n, g, h, "∋", "\\owns");
o(n, g, za, ".", "\\ldotp");
o(n, g, za, "⋅", "\\cdotp");
o(n, g, b, "#", "\\#");
o(D, g, b, "#", "\\#");
o(n, g, b, "&", "\\&");
o(D, g, b, "&", "\\&");
o(n, g, b, "ℵ", "\\aleph", !0);
o(n, g, b, "∀", "\\forall", !0);
o(n, g, b, "ℏ", "\\hbar", !0);
o(n, g, b, "∃", "\\exists", !0);
o(n, g, b, "∇", "\\nabla", !0);
o(n, g, b, "♭", "\\flat", !0);
o(n, g, b, "ℓ", "\\ell", !0);
o(n, g, b, "♮", "\\natural", !0);
o(n, g, b, "♣", "\\clubsuit", !0);
o(n, g, b, "℘", "\\wp", !0);
o(n, g, b, "♯", "\\sharp", !0);
o(n, g, b, "♢", "\\diamondsuit", !0);
o(n, g, b, "ℜ", "\\Re", !0);
o(n, g, b, "♡", "\\heartsuit", !0);
o(n, g, b, "ℑ", "\\Im", !0);
o(n, g, b, "♠", "\\spadesuit", !0);
o(n, g, b, "§", "\\S", !0);
o(D, g, b, "§", "\\S");
o(n, g, b, "¶", "\\P", !0);
o(D, g, b, "¶", "\\P");
o(n, g, b, "†", "\\dag");
o(D, g, b, "†", "\\dag");
o(D, g, b, "†", "\\textdagger");
o(n, g, b, "‡", "\\ddag");
o(D, g, b, "‡", "\\ddag");
o(D, g, b, "‡", "\\textdaggerdbl");
o(n, g, Pe, "⎱", "\\rmoustache", !0);
o(n, g, qe, "⎰", "\\lmoustache", !0);
o(n, g, Pe, "⟯", "\\rgroup", !0);
o(n, g, qe, "⟮", "\\lgroup", !0);
o(n, g, U, "∓", "\\mp", !0);
o(n, g, U, "⊖", "\\ominus", !0);
o(n, g, U, "⊎", "\\uplus", !0);
o(n, g, U, "⊓", "\\sqcap", !0);
o(n, g, U, "∗", "\\ast");
o(n, g, U, "⊔", "\\sqcup", !0);
o(n, g, U, "◯", "\\bigcirc", !0);
o(n, g, U, "∙", "\\bullet", !0);
o(n, g, U, "‡", "\\ddagger");
o(n, g, U, "≀", "\\wr", !0);
o(n, g, U, "⨿", "\\amalg");
o(n, g, U, "&", "\\And");
o(n, g, h, "⟵", "\\longleftarrow", !0);
o(n, g, h, "⇐", "\\Leftarrow", !0);
o(n, g, h, "⟸", "\\Longleftarrow", !0);
o(n, g, h, "⟶", "\\longrightarrow", !0);
o(n, g, h, "⇒", "\\Rightarrow", !0);
o(n, g, h, "⟹", "\\Longrightarrow", !0);
o(n, g, h, "↔", "\\leftrightarrow", !0);
o(n, g, h, "⟷", "\\longleftrightarrow", !0);
o(n, g, h, "⇔", "\\Leftrightarrow", !0);
o(n, g, h, "⟺", "\\Longleftrightarrow", !0);
o(n, g, h, "↦", "\\mapsto", !0);
o(n, g, h, "⟼", "\\longmapsto", !0);
o(n, g, h, "↗", "\\nearrow", !0);
o(n, g, h, "↩", "\\hookleftarrow", !0);
o(n, g, h, "↪", "\\hookrightarrow", !0);
o(n, g, h, "↘", "\\searrow", !0);
o(n, g, h, "↼", "\\leftharpoonup", !0);
o(n, g, h, "⇀", "\\rightharpoonup", !0);
o(n, g, h, "↙", "\\swarrow", !0);
o(n, g, h, "↽", "\\leftharpoondown", !0);
o(n, g, h, "⇁", "\\rightharpoondown", !0);
o(n, g, h, "↖", "\\nwarrow", !0);
o(n, g, h, "⇌", "\\rightleftharpoons", !0);
o(n, p, h, "≮", "\\nless", !0);
o(n, p, h, "", "\\@nleqslant");
o(n, p, h, "", "\\@nleqq");
o(n, p, h, "⪇", "\\lneq", !0);
o(n, p, h, "≨", "\\lneqq", !0);
o(n, p, h, "", "\\@lvertneqq");
o(n, p, h, "⋦", "\\lnsim", !0);
o(n, p, h, "⪉", "\\lnapprox", !0);
o(n, p, h, "⊀", "\\nprec", !0);
o(n, p, h, "⋠", "\\npreceq", !0);
o(n, p, h, "⋨", "\\precnsim", !0);
o(n, p, h, "⪹", "\\precnapprox", !0);
o(n, p, h, "≁", "\\nsim", !0);
o(n, p, h, "", "\\@nshortmid");
o(n, p, h, "∤", "\\nmid", !0);
o(n, p, h, "⊬", "\\nvdash", !0);
o(n, p, h, "⊭", "\\nvDash", !0);
o(n, p, h, "⋪", "\\ntriangleleft");
o(n, p, h, "⋬", "\\ntrianglelefteq", !0);
o(n, p, h, "⊊", "\\subsetneq", !0);
o(n, p, h, "", "\\@varsubsetneq");
o(n, p, h, "⫋", "\\subsetneqq", !0);
o(n, p, h, "", "\\@varsubsetneqq");
o(n, p, h, "≯", "\\ngtr", !0);
o(n, p, h, "", "\\@ngeqslant");
o(n, p, h, "", "\\@ngeqq");
o(n, p, h, "⪈", "\\gneq", !0);
o(n, p, h, "≩", "\\gneqq", !0);
o(n, p, h, "", "\\@gvertneqq");
o(n, p, h, "⋧", "\\gnsim", !0);
o(n, p, h, "⪊", "\\gnapprox", !0);
o(n, p, h, "⊁", "\\nsucc", !0);
o(n, p, h, "⋡", "\\nsucceq", !0);
o(n, p, h, "⋩", "\\succnsim", !0);
o(n, p, h, "⪺", "\\succnapprox", !0);
o(n, p, h, "≆", "\\ncong", !0);
o(n, p, h, "", "\\@nshortparallel");
o(n, p, h, "∦", "\\nparallel", !0);
o(n, p, h, "⊯", "\\nVDash", !0);
o(n, p, h, "⋫", "\\ntriangleright");
o(n, p, h, "⋭", "\\ntrianglerighteq", !0);
o(n, p, h, "", "\\@nsupseteqq");
o(n, p, h, "⊋", "\\supsetneq", !0);
o(n, p, h, "", "\\@varsupsetneq");
o(n, p, h, "⫌", "\\supsetneqq", !0);
o(n, p, h, "", "\\@varsupsetneqq");
o(n, p, h, "⊮", "\\nVdash", !0);
o(n, p, h, "⪵", "\\precneqq", !0);
o(n, p, h, "⪶", "\\succneqq", !0);
o(n, p, h, "", "\\@nsubseteqq");
o(n, p, U, "⊴", "\\unlhd");
o(n, p, U, "⊵", "\\unrhd");
o(n, p, h, "↚", "\\nleftarrow", !0);
o(n, p, h, "↛", "\\nrightarrow", !0);
o(n, p, h, "⇍", "\\nLeftarrow", !0);
o(n, p, h, "⇏", "\\nRightarrow", !0);
o(n, p, h, "↮", "\\nleftrightarrow", !0);
o(n, p, h, "⇎", "\\nLeftrightarrow", !0);
o(n, p, h, "△", "\\vartriangle");
o(n, p, b, "ℏ", "\\hslash");
o(n, p, b, "▽", "\\triangledown");
o(n, p, b, "◊", "\\lozenge");
o(n, p, b, "Ⓢ", "\\circledS");
o(n, p, b, "®", "\\circledR");
o(D, p, b, "®", "\\circledR");
o(n, p, b, "∡", "\\measuredangle", !0);
o(n, p, b, "∄", "\\nexists");
o(n, p, b, "℧", "\\mho");
o(n, p, b, "Ⅎ", "\\Finv", !0);
o(n, p, b, "⅁", "\\Game", !0);
o(n, p, b, "‵", "\\backprime");
o(n, p, b, "▲", "\\blacktriangle");
o(n, p, b, "▼", "\\blacktriangledown");
o(n, p, b, "■", "\\blacksquare");
o(n, p, b, "⧫", "\\blacklozenge");
o(n, p, b, "★", "\\bigstar");
o(n, p, b, "∢", "\\sphericalangle", !0);
o(n, p, b, "∁", "\\complement", !0);
o(n, p, b, "ð", "\\eth", !0);
o(D, g, b, "ð", "ð");
o(n, p, b, "╱", "\\diagup");
o(n, p, b, "╲", "\\diagdown");
o(n, p, b, "□", "\\square");
o(n, p, b, "□", "\\Box");
o(n, p, b, "◊", "\\Diamond");
o(n, p, b, "¥", "\\yen", !0);
o(D, p, b, "¥", "\\yen", !0);
o(n, p, b, "✓", "\\checkmark", !0);
o(D, p, b, "✓", "\\checkmark");
o(n, p, b, "ℶ", "\\beth", !0);
o(n, p, b, "ℸ", "\\daleth", !0);
o(n, p, b, "ℷ", "\\gimel", !0);
o(n, p, b, "ϝ", "\\digamma", !0);
o(n, p, b, "ϰ", "\\varkappa");
o(n, p, qe, "┌", "\\@ulcorner", !0);
o(n, p, Pe, "┐", "\\@urcorner", !0);
o(n, p, qe, "└", "\\@llcorner", !0);
o(n, p, Pe, "┘", "\\@lrcorner", !0);
o(n, p, h, "≦", "\\leqq", !0);
o(n, p, h, "⩽", "\\leqslant", !0);
o(n, p, h, "⪕", "\\eqslantless", !0);
o(n, p, h, "≲", "\\lesssim", !0);
o(n, p, h, "⪅", "\\lessapprox", !0);
o(n, p, h, "≊", "\\approxeq", !0);
o(n, p, U, "⋖", "\\lessdot");
o(n, p, h, "⋘", "\\lll", !0);
o(n, p, h, "≶", "\\lessgtr", !0);
o(n, p, h, "⋚", "\\lesseqgtr", !0);
o(n, p, h, "⪋", "\\lesseqqgtr", !0);
o(n, p, h, "≑", "\\doteqdot");
o(n, p, h, "≓", "\\risingdotseq", !0);
o(n, p, h, "≒", "\\fallingdotseq", !0);
o(n, p, h, "∽", "\\backsim", !0);
o(n, p, h, "⋍", "\\backsimeq", !0);
o(n, p, h, "⫅", "\\subseteqq", !0);
o(n, p, h, "⋐", "\\Subset", !0);
o(n, p, h, "⊏", "\\sqsubset", !0);
o(n, p, h, "≼", "\\preccurlyeq", !0);
o(n, p, h, "⋞", "\\curlyeqprec", !0);
o(n, p, h, "≾", "\\precsim", !0);
o(n, p, h, "⪷", "\\precapprox", !0);
o(n, p, h, "⊲", "\\vartriangleleft");
o(n, p, h, "⊴", "\\trianglelefteq");
o(n, p, h, "⊨", "\\vDash", !0);
o(n, p, h, "⊪", "\\Vvdash", !0);
o(n, p, h, "⌣", "\\smallsmile");
o(n, p, h, "⌢", "\\smallfrown");
o(n, p, h, "≏", "\\bumpeq", !0);
o(n, p, h, "≎", "\\Bumpeq", !0);
o(n, p, h, "≧", "\\geqq", !0);
o(n, p, h, "⩾", "\\geqslant", !0);
o(n, p, h, "⪖", "\\eqslantgtr", !0);
o(n, p, h, "≳", "\\gtrsim", !0);
o(n, p, h, "⪆", "\\gtrapprox", !0);
o(n, p, U, "⋗", "\\gtrdot");
o(n, p, h, "⋙", "\\ggg", !0);
o(n, p, h, "≷", "\\gtrless", !0);
o(n, p, h, "⋛", "\\gtreqless", !0);
o(n, p, h, "⪌", "\\gtreqqless", !0);
o(n, p, h, "≖", "\\eqcirc", !0);
o(n, p, h, "≗", "\\circeq", !0);
o(n, p, h, "≜", "\\triangleq", !0);
o(n, p, h, "∼", "\\thicksim");
o(n, p, h, "≈", "\\thickapprox");
o(n, p, h, "⫆", "\\supseteqq", !0);
o(n, p, h, "⋑", "\\Supset", !0);
o(n, p, h, "⊐", "\\sqsupset", !0);
o(n, p, h, "≽", "\\succcurlyeq", !0);
o(n, p, h, "⋟", "\\curlyeqsucc", !0);
o(n, p, h, "≿", "\\succsim", !0);
o(n, p, h, "⪸", "\\succapprox", !0);
o(n, p, h, "⊳", "\\vartriangleright");
o(n, p, h, "⊵", "\\trianglerighteq");
o(n, p, h, "⊩", "\\Vdash", !0);
o(n, p, h, "∣", "\\shortmid");
o(n, p, h, "∥", "\\shortparallel");
o(n, p, h, "≬", "\\between", !0);
o(n, p, h, "⋔", "\\pitchfork", !0);
o(n, p, h, "∝", "\\varpropto");
o(n, p, h, "◀", "\\blacktriangleleft");
o(n, p, h, "∴", "\\therefore", !0);
o(n, p, h, "∍", "\\backepsilon");
o(n, p, h, "▶", "\\blacktriangleright");
o(n, p, h, "∵", "\\because", !0);
o(n, p, h, "⋘", "\\llless");
o(n, p, h, "⋙", "\\gggtr");
o(n, p, U, "⊲", "\\lhd");
o(n, p, U, "⊳", "\\rhd");
o(n, p, h, "≂", "\\eqsim", !0);
o(n, g, h, "⋈", "\\Join");
o(n, p, h, "≑", "\\Doteq", !0);
o(n, p, U, "∔", "\\dotplus", !0);
o(n, p, U, "∖", "\\smallsetminus");
o(n, p, U, "⋒", "\\Cap", !0);
o(n, p, U, "⋓", "\\Cup", !0);
o(n, p, U, "⩞", "\\doublebarwedge", !0);
o(n, p, U, "⊟", "\\boxminus", !0);
o(n, p, U, "⊞", "\\boxplus", !0);
o(n, p, U, "⋇", "\\divideontimes", !0);
o(n, p, U, "⋉", "\\ltimes", !0);
o(n, p, U, "⋊", "\\rtimes", !0);
o(n, p, U, "⋋", "\\leftthreetimes", !0);
o(n, p, U, "⋌", "\\rightthreetimes", !0);
o(n, p, U, "⋏", "\\curlywedge", !0);
o(n, p, U, "⋎", "\\curlyvee", !0);
o(n, p, U, "⊝", "\\circleddash", !0);
o(n, p, U, "⊛", "\\circledast", !0);
o(n, p, U, "⋅", "\\centerdot");
o(n, p, U, "⊺", "\\intercal", !0);
o(n, p, U, "⋒", "\\doublecap");
o(n, p, U, "⋓", "\\doublecup");
o(n, p, U, "⊠", "\\boxtimes", !0);
o(n, p, h, "⇢", "\\dashrightarrow", !0);
o(n, p, h, "⇠", "\\dashleftarrow", !0);
o(n, p, h, "⇇", "\\leftleftarrows", !0);
o(n, p, h, "⇆", "\\leftrightarrows", !0);
o(n, p, h, "⇚", "\\Lleftarrow", !0);
o(n, p, h, "↞", "\\twoheadleftarrow", !0);
o(n, p, h, "↢", "\\leftarrowtail", !0);
o(n, p, h, "↫", "\\looparrowleft", !0);
o(n, p, h, "⇋", "\\leftrightharpoons", !0);
o(n, p, h, "↶", "\\curvearrowleft", !0);
o(n, p, h, "↺", "\\circlearrowleft", !0);
o(n, p, h, "↰", "\\Lsh", !0);
o(n, p, h, "⇈", "\\upuparrows", !0);
o(n, p, h, "↿", "\\upharpoonleft", !0);
o(n, p, h, "⇃", "\\downharpoonleft", !0);
o(n, g, h, "⊶", "\\origof", !0);
o(n, g, h, "⊷", "\\imageof", !0);
o(n, p, h, "⊸", "\\multimap", !0);
o(n, p, h, "↭", "\\leftrightsquigarrow", !0);
o(n, p, h, "⇉", "\\rightrightarrows", !0);
o(n, p, h, "⇄", "\\rightleftarrows", !0);
o(n, p, h, "↠", "\\twoheadrightarrow", !0);
o(n, p, h, "↣", "\\rightarrowtail", !0);
o(n, p, h, "↬", "\\looparrowright", !0);
o(n, p, h, "↷", "\\curvearrowright", !0);
o(n, p, h, "↻", "\\circlearrowright", !0);
o(n, p, h, "↱", "\\Rsh", !0);
o(n, p, h, "⇊", "\\downdownarrows", !0);
o(n, p, h, "↾", "\\upharpoonright", !0);
o(n, p, h, "⇂", "\\downharpoonright", !0);
o(n, p, h, "⇝", "\\rightsquigarrow", !0);
o(n, p, h, "⇝", "\\leadsto");
o(n, p, h, "⇛", "\\Rrightarrow", !0);
o(n, p, h, "↾", "\\restriction");
o(n, g, b, "‘", "`");
o(n, g, b, "$", "\\$");
o(D, g, b, "$", "\\$");
o(D, g, b, "$", "\\textdollar");
o(n, g, b, "%", "\\%");
o(D, g, b, "%", "\\%");
o(n, g, b, "_", "\\_");
o(D, g, b, "_", "\\_");
o(D, g, b, "_", "\\textunderscore");
o(n, g, b, "∠", "\\angle", !0);
o(n, g, b, "∞", "\\infty", !0);
o(n, g, b, "′", "\\prime");
o(n, g, b, "△", "\\triangle");
o(n, g, b, "Γ", "\\Gamma", !0);
o(n, g, b, "Δ", "\\Delta", !0);
o(n, g, b, "Θ", "\\Theta", !0);
o(n, g, b, "Λ", "\\Lambda", !0);
o(n, g, b, "Ξ", "\\Xi", !0);
o(n, g, b, "Π", "\\Pi", !0);
o(n, g, b, "Σ", "\\Sigma", !0);
o(n, g, b, "Υ", "\\Upsilon", !0);
o(n, g, b, "Φ", "\\Phi", !0);
o(n, g, b, "Ψ", "\\Psi", !0);
o(n, g, b, "Ω", "\\Omega", !0);
o(n, g, b, "A", "Α");
o(n, g, b, "B", "Β");
o(n, g, b, "E", "Ε");
o(n, g, b, "Z", "Ζ");
o(n, g, b, "H", "Η");
o(n, g, b, "I", "Ι");
o(n, g, b, "K", "Κ");
o(n, g, b, "M", "Μ");
o(n, g, b, "N", "Ν");
o(n, g, b, "O", "Ο");
o(n, g, b, "P", "Ρ");
o(n, g, b, "T", "Τ");
o(n, g, b, "X", "Χ");
o(n, g, b, "¬", "\\neg", !0);
o(n, g, b, "¬", "\\lnot");
o(n, g, b, "⊤", "\\top");
o(n, g, b, "⊥", "\\bot");
o(n, g, b, "∅", "\\emptyset");
o(n, p, b, "∅", "\\varnothing");
o(n, g, $, "α", "\\alpha", !0);
o(n, g, $, "β", "\\beta", !0);
o(n, g, $, "γ", "\\gamma", !0);
o(n, g, $, "δ", "\\delta", !0);
o(n, g, $, "ϵ", "\\epsilon", !0);
o(n, g, $, "ζ", "\\zeta", !0);
o(n, g, $, "η", "\\eta", !0);
o(n, g, $, "θ", "\\theta", !0);
o(n, g, $, "ι", "\\iota", !0);
o(n, g, $, "κ", "\\kappa", !0);
o(n, g, $, "λ", "\\lambda", !0);
o(n, g, $, "μ", "\\mu", !0);
o(n, g, $, "ν", "\\nu", !0);
o(n, g, $, "ξ", "\\xi", !0);
o(n, g, $, "ο", "\\omicron", !0);
o(n, g, $, "π", "\\pi", !0);
o(n, g, $, "ρ", "\\rho", !0);
o(n, g, $, "σ", "\\sigma", !0);
o(n, g, $, "τ", "\\tau", !0);
o(n, g, $, "υ", "\\upsilon", !0);
o(n, g, $, "ϕ", "\\phi", !0);
o(n, g, $, "χ", "\\chi", !0);
o(n, g, $, "ψ", "\\psi", !0);
o(n, g, $, "ω", "\\omega", !0);
o(n, g, $, "ε", "\\varepsilon", !0);
o(n, g, $, "ϑ", "\\vartheta", !0);
o(n, g, $, "ϖ", "\\varpi", !0);
o(n, g, $, "ϱ", "\\varrho", !0);
o(n, g, $, "ς", "\\varsigma", !0);
o(n, g, $, "φ", "\\varphi", !0);
o(n, g, U, "∗", "*", !0);
o(n, g, U, "+", "+");
o(n, g, U, "−", "-", !0);
o(n, g, U, "⋅", "\\cdot", !0);
o(n, g, U, "∘", "\\circ", !0);
o(n, g, U, "÷", "\\div", !0);
o(n, g, U, "±", "\\pm", !0);
o(n, g, U, "×", "\\times", !0);
o(n, g, U, "∩", "\\cap", !0);
o(n, g, U, "∪", "\\cup", !0);
o(n, g, U, "∖", "\\setminus", !0);
o(n, g, U, "∧", "\\land");
o(n, g, U, "∨", "\\lor");
o(n, g, U, "∧", "\\wedge", !0);
o(n, g, U, "∨", "\\vee", !0);
o(n, g, b, "√", "\\surd");
o(n, g, qe, "⟨", "\\langle", !0);
o(n, g, qe, "∣", "\\lvert");
o(n, g, qe, "∥", "\\lVert");
o(n, g, Pe, "?", "?");
o(n, g, Pe, "!", "!");
o(n, g, Pe, "⟩", "\\rangle", !0);
o(n, g, Pe, "∣", "\\rvert");
o(n, g, Pe, "∥", "\\rVert");
o(n, g, h, "=", "=");
o(n, g, h, ":", ":");
o(n, g, h, "≈", "\\approx", !0);
o(n, g, h, "≅", "\\cong", !0);
o(n, g, h, "≥", "\\ge");
o(n, g, h, "≥", "\\geq", !0);
o(n, g, h, "←", "\\gets");
o(n, g, h, ">", "\\gt", !0);
o(n, g, h, "∈", "\\in", !0);
o(n, g, h, "", "\\@not");
o(n, g, h, "⊂", "\\subset", !0);
o(n, g, h, "⊃", "\\supset", !0);
o(n, g, h, "⊆", "\\subseteq", !0);
o(n, g, h, "⊇", "\\supseteq", !0);
o(n, p, h, "⊈", "\\nsubseteq", !0);
o(n, p, h, "⊉", "\\nsupseteq", !0);
o(n, g, h, "⊨", "\\models");
o(n, g, h, "←", "\\leftarrow", !0);
o(n, g, h, "≤", "\\le");
o(n, g, h, "≤", "\\leq", !0);
o(n, g, h, "<", "\\lt", !0);
o(n, g, h, "→", "\\rightarrow", !0);
o(n, g, h, "→", "\\to");
o(n, p, h, "≱", "\\ngeq", !0);
o(n, p, h, "≰", "\\nleq", !0);
o(n, g, yt, " ", "\\ ");
o(n, g, yt, " ", "\\space");
o(n, g, yt, " ", "\\nobreakspace");
o(D, g, yt, " ", "\\ ");
o(D, g, yt, " ", " ");
o(D, g, yt, " ", "\\space");
o(D, g, yt, " ", "\\nobreakspace");
o(n, g, yt, null, "\\nobreak");
o(n, g, yt, null, "\\allowbreak");
o(n, g, za, ",", ",");
o(n, g, za, ";", ";");
o(n, p, U, "⊼", "\\barwedge", !0);
o(n, p, U, "⊻", "\\veebar", !0);
o(n, g, U, "⊙", "\\odot", !0);
o(n, g, U, "⊕", "\\oplus", !0);
o(n, g, U, "⊗", "\\otimes", !0);
o(n, g, b, "∂", "\\partial", !0);
o(n, g, U, "⊘", "\\oslash", !0);
o(n, p, U, "⊚", "\\circledcirc", !0);
o(n, p, U, "⊡", "\\boxdot", !0);
o(n, g, U, "△", "\\bigtriangleup");
o(n, g, U, "▽", "\\bigtriangledown");
o(n, g, U, "†", "\\dagger");
o(n, g, U, "⋄", "\\diamond");
o(n, g, U, "⋆", "\\star");
o(n, g, U, "◃", "\\triangleleft");
o(n, g, U, "▹", "\\triangleright");
o(n, g, qe, "{", "\\{");
o(D, g, b, "{", "\\{");
o(D, g, b, "{", "\\textbraceleft");
o(n, g, Pe, "}", "\\}");
o(D, g, b, "}", "\\}");
o(D, g, b, "}", "\\textbraceright");
o(n, g, qe, "{", "\\lbrace");
o(n, g, Pe, "}", "\\rbrace");
o(n, g, qe, "[", "\\lbrack", !0);
o(D, g, b, "[", "\\lbrack", !0);
o(n, g, Pe, "]", "\\rbrack", !0);
o(D, g, b, "]", "\\rbrack", !0);
o(n, g, qe, "(", "\\lparen", !0);
o(n, g, Pe, ")", "\\rparen", !0);
o(D, g, b, "<", "\\textless", !0);
o(D, g, b, ">", "\\textgreater", !0);
o(n, g, qe, "⌊", "\\lfloor", !0);
o(n, g, Pe, "⌋", "\\rfloor", !0);
o(n, g, qe, "⌈", "\\lceil", !0);
o(n, g, Pe, "⌉", "\\rceil", !0);
o(n, g, b, "\\", "\\backslash");
o(n, g, b, "∣", "|");
o(n, g, b, "∣", "\\vert");
o(D, g, b, "|", "\\textbar", !0);
o(n, g, b, "∥", "\\|");
o(n, g, b, "∥", "\\Vert");
o(D, g, b, "∥", "\\textbardbl");
o(D, g, b, "~", "\\textasciitilde");
o(D, g, b, "\\", "\\textbackslash");
o(D, g, b, "^", "\\textasciicircum");
o(n, g, h, "↑", "\\uparrow", !0);
o(n, g, h, "⇑", "\\Uparrow", !0);
o(n, g, h, "↓", "\\downarrow", !0);
o(n, g, h, "⇓", "\\Downarrow", !0);
o(n, g, h, "↕", "\\updownarrow", !0);
o(n, g, h, "⇕", "\\Updownarrow", !0);
o(n, g, fe, "∐", "\\coprod");
o(n, g, fe, "⋁", "\\bigvee");
o(n, g, fe, "⋀", "\\bigwedge");
o(n, g, fe, "⨄", "\\biguplus");
o(n, g, fe, "⋂", "\\bigcap");
o(n, g, fe, "⋃", "\\bigcup");
o(n, g, fe, "∫", "\\int");
o(n, g, fe, "∫", "\\intop");
o(n, g, fe, "∬", "\\iint");
o(n, g, fe, "∭", "\\iiint");
o(n, g, fe, "∏", "\\prod");
o(n, g, fe, "∑", "\\sum");
o(n, g, fe, "⨂", "\\bigotimes");
o(n, g, fe, "⨁", "\\bigoplus");
o(n, g, fe, "⨀", "\\bigodot");
o(n, g, fe, "∮", "\\oint");
o(n, g, fe, "∯", "\\oiint");
o(n, g, fe, "∰", "\\oiiint");
o(n, g, fe, "⨆", "\\bigsqcup");
o(n, g, fe, "∫", "\\smallint");
o(D, g, Wt, "…", "\\textellipsis");
o(n, g, Wt, "…", "\\mathellipsis");
o(D, g, Wt, "…", "\\ldots", !0);
o(n, g, Wt, "…", "\\ldots", !0);
o(n, g, Wt, "⋯", "\\@cdots", !0);
o(n, g, Wt, "⋱", "\\ddots", !0);
o(n, g, b, "⋮", "\\varvdots");
o(n, g, me, "ˊ", "\\acute");
o(n, g, me, "ˋ", "\\grave");
o(n, g, me, "¨", "\\ddot");
o(n, g, me, "~", "\\tilde");
o(n, g, me, "ˉ", "\\bar");
o(n, g, me, "˘", "\\breve");
o(n, g, me, "ˇ", "\\check");
o(n, g, me, "^", "\\hat");
o(n, g, me, "⃗", "\\vec");
o(n, g, me, "˙", "\\dot");
o(n, g, me, "˚", "\\mathring");
o(n, g, $, "", "\\@imath");
o(n, g, $, "", "\\@jmath");
o(n, g, b, "ı", "ı");
o(n, g, b, "ȷ", "ȷ");
o(D, g, b, "ı", "\\i", !0);
o(D, g, b, "ȷ", "\\j", !0);
o(D, g, b, "ß", "\\ss", !0);
o(D, g, b, "æ", "\\ae", !0);
o(D, g, b, "œ", "\\oe", !0);
o(D, g, b, "ø", "\\o", !0);
o(D, g, b, "Æ", "\\AE", !0);
o(D, g, b, "Œ", "\\OE", !0);
o(D, g, b, "Ø", "\\O", !0);
o(D, g, me, "ˊ", "\\'");
o(D, g, me, "ˋ", "\\`");
o(D, g, me, "ˆ", "\\^");
o(D, g, me, "˜", "\\~");
o(D, g, me, "ˉ", "\\=");
o(D, g, me, "˘", "\\u");
o(D, g, me, "˙", "\\.");
o(D, g, me, "¸", "\\c");
o(D, g, me, "˚", "\\r");
o(D, g, me, "ˇ", "\\v");
o(D, g, me, "¨", '\\"');
o(D, g, me, "˝", "\\H");
o(D, g, me, "◯", "\\textcircled");
var xr = {
  "--": !0,
  "---": !0,
  "``": !0,
  "''": !0
};
o(D, g, b, "–", "--", !0);
o(D, g, b, "–", "\\textendash");
o(D, g, b, "—", "---", !0);
o(D, g, b, "—", "\\textemdash");
o(D, g, b, "‘", "`", !0);
o(D, g, b, "‘", "\\textquoteleft");
o(D, g, b, "’", "'", !0);
o(D, g, b, "’", "\\textquoteright");
o(D, g, b, "“", "``", !0);
o(D, g, b, "“", "\\textquotedblleft");
o(D, g, b, "”", "''", !0);
o(D, g, b, "”", "\\textquotedblright");
o(n, g, b, "°", "\\degree", !0);
o(D, g, b, "°", "\\degree");
o(D, g, b, "°", "\\textdegree", !0);
o(n, g, b, "£", "\\pounds");
o(n, g, b, "£", "\\mathsterling", !0);
o(D, g, b, "£", "\\pounds");
o(D, g, b, "£", "\\textsterling", !0);
o(n, p, b, "✠", "\\maltese");
o(D, p, b, "✠", "\\maltese");
var Os = '0123456789/@."';
for (var ai = 0; ai < Os.length; ai++) {
  var Ns = Os.charAt(ai);
  o(n, g, b, Ns, Ns);
}
var zs = '0123456789!@*()-=+";:?/.,';
for (var ii = 0; ii < zs.length; ii++) {
  var Cs = zs.charAt(ii);
  o(D, g, b, Cs, Cs);
}
var Ba = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
for (var si = 0; si < Ba.length; si++) {
  var fa = Ba.charAt(si);
  o(n, g, $, fa, fa), o(D, g, b, fa, fa);
}
o(n, p, b, "C", "ℂ");
o(D, p, b, "C", "ℂ");
o(n, p, b, "H", "ℍ");
o(D, p, b, "H", "ℍ");
o(n, p, b, "N", "ℕ");
o(D, p, b, "N", "ℕ");
o(n, p, b, "P", "ℙ");
o(D, p, b, "P", "ℙ");
o(n, p, b, "Q", "ℚ");
o(D, p, b, "Q", "ℚ");
o(n, p, b, "R", "ℝ");
o(D, p, b, "R", "ℝ");
o(n, p, b, "Z", "ℤ");
o(D, p, b, "Z", "ℤ");
o(n, g, $, "h", "ℎ");
o(D, g, $, "h", "ℎ");
var Y = "";
for (var Ee = 0; Ee < Ba.length; Ee++) {
  var de = Ba.charAt(Ee);
  Y = String.fromCharCode(55349, 56320 + Ee), o(n, g, $, de, Y), o(D, g, b, de, Y), Y = String.fromCharCode(55349, 56372 + Ee), o(n, g, $, de, Y), o(D, g, b, de, Y), Y = String.fromCharCode(55349, 56424 + Ee), o(n, g, $, de, Y), o(D, g, b, de, Y), Y = String.fromCharCode(55349, 56580 + Ee), o(n, g, $, de, Y), o(D, g, b, de, Y), Y = String.fromCharCode(55349, 56684 + Ee), o(n, g, $, de, Y), o(D, g, b, de, Y), Y = String.fromCharCode(55349, 56736 + Ee), o(n, g, $, de, Y), o(D, g, b, de, Y), Y = String.fromCharCode(55349, 56788 + Ee), o(n, g, $, de, Y), o(D, g, b, de, Y), Y = String.fromCharCode(55349, 56840 + Ee), o(n, g, $, de, Y), o(D, g, b, de, Y), Y = String.fromCharCode(55349, 56944 + Ee), o(n, g, $, de, Y), o(D, g, b, de, Y), Ee < 26 && (Y = String.fromCharCode(55349, 56632 + Ee), o(n, g, $, de, Y), o(D, g, b, de, Y), Y = String.fromCharCode(55349, 56476 + Ee), o(n, g, $, de, Y), o(D, g, b, de, Y));
}
Y = "𝕜";
o(n, g, $, "k", Y);
o(D, g, b, "k", Y);
for (var Pt = 0; Pt < 10; Pt++) {
  var bt = Pt.toString();
  Y = String.fromCharCode(55349, 57294 + Pt), o(n, g, $, bt, Y), o(D, g, b, bt, Y), Y = String.fromCharCode(55349, 57314 + Pt), o(n, g, $, bt, Y), o(D, g, b, bt, Y), Y = String.fromCharCode(55349, 57324 + Pt), o(n, g, $, bt, Y), o(D, g, b, bt, Y), Y = String.fromCharCode(55349, 57334 + Pt), o(n, g, $, bt, Y), o(D, g, b, bt, Y);
}
var _i = "ÐÞþ";
for (var ri = 0; ri < _i.length; ri++) {
  var ba = _i.charAt(ri);
  o(n, g, $, ba, ba), o(D, g, b, ba, ba);
}
var va = [
  ["mathbf", "textbf", "Main-Bold"],
  // A-Z bold upright
  ["mathbf", "textbf", "Main-Bold"],
  // a-z bold upright
  ["mathnormal", "textit", "Math-Italic"],
  // A-Z italic
  ["mathnormal", "textit", "Math-Italic"],
  // a-z italic
  ["boldsymbol", "boldsymbol", "Main-BoldItalic"],
  // A-Z bold italic
  ["boldsymbol", "boldsymbol", "Main-BoldItalic"],
  // a-z bold italic
  // Map fancy A-Z letters to script, not calligraphic.
  // This aligns with unicode-math and math fonts (except Cambria Math).
  ["mathscr", "textscr", "Script-Regular"],
  // A-Z script
  ["", "", ""],
  // a-z script.  No font
  ["", "", ""],
  // A-Z bold script. No font
  ["", "", ""],
  // a-z bold script. No font
  ["mathfrak", "textfrak", "Fraktur-Regular"],
  // A-Z Fraktur
  ["mathfrak", "textfrak", "Fraktur-Regular"],
  // a-z Fraktur
  ["mathbb", "textbb", "AMS-Regular"],
  // A-Z double-struck
  ["mathbb", "textbb", "AMS-Regular"],
  // k double-struck
  // Note that we are using a bold font, but font metrics for regular Fraktur.
  ["mathboldfrak", "textboldfrak", "Fraktur-Regular"],
  // A-Z bold Fraktur
  ["mathboldfrak", "textboldfrak", "Fraktur-Regular"],
  // a-z bold Fraktur
  ["mathsf", "textsf", "SansSerif-Regular"],
  // A-Z sans-serif
  ["mathsf", "textsf", "SansSerif-Regular"],
  // a-z sans-serif
  ["mathboldsf", "textboldsf", "SansSerif-Bold"],
  // A-Z bold sans-serif
  ["mathboldsf", "textboldsf", "SansSerif-Bold"],
  // a-z bold sans-serif
  ["mathitsf", "textitsf", "SansSerif-Italic"],
  // A-Z italic sans-serif
  ["mathitsf", "textitsf", "SansSerif-Italic"],
  // a-z italic sans-serif
  ["", "", ""],
  // A-Z bold italic sans. No font
  ["", "", ""],
  // a-z bold italic sans. No font
  ["mathtt", "texttt", "Typewriter-Regular"],
  // A-Z monospace
  ["mathtt", "texttt", "Typewriter-Regular"]
  // a-z monospace
], Is = [
  ["mathbf", "textbf", "Main-Bold"],
  // 0-9 bold
  ["", "", ""],
  // 0-9 double-struck. No KaTeX font.
  ["mathsf", "textsf", "SansSerif-Regular"],
  // 0-9 sans-serif
  ["mathboldsf", "textboldsf", "SansSerif-Bold"],
  // 0-9 bold sans-serif
  ["mathtt", "texttt", "Typewriter-Regular"]
  // 0-9 monospace
], gn = function(e, t) {
  var i = e.charCodeAt(0), s = e.charCodeAt(1), r = (i - 55296) * 1024 + (s - 56320) + 65536, l = t === "math" ? 0 : 1;
  if (119808 <= r && r < 120484) {
    var c = Math.floor((r - 119808) / 26);
    return [va[c][2], va[c][l]];
  } else if (120782 <= r && r <= 120831) {
    var m = Math.floor((r - 120782) / 10);
    return [Is[m][2], Is[m][l]];
  } else {
    if (r === 120485 || r === 120486)
      return [va[0][2], va[0][l]];
    if (120486 < r && r < 120782)
      return ["", ""];
    throw new z("Unsupported character: " + e);
  }
}, Ca = function(e, t, i) {
  return ce[i][e] && ce[i][e].replace && (e = ce[i][e].replace), {
    value: e,
    metrics: Di(e, t, i)
  };
}, Ye = function(e, t, i, s, r) {
  var l = Ca(e, t, i), c = l.metrics;
  e = l.value;
  var m;
  if (c) {
    var d = c.italic;
    (i === "text" || s && s.font === "mathit") && (d = 0), m = new $e(e, c.height, c.depth, d, c.skew, c.width, r);
  } else
    typeof console < "u" && console.warn("No character metrics " + ("for '" + e + "' in style '" + t + "' and mode '" + i + "'")), m = new $e(e, 0, 0, 0, 0, 0, r);
  if (s) {
    m.maxFontSize = s.sizeMultiplier, s.style.isTight() && m.classes.push("mtight");
    var y = s.getColor();
    y && (m.style.color = y);
  }
  return m;
}, un = function(e, t, i, s) {
  return s === void 0 && (s = []), i.font === "boldsymbol" && Ca(e, "Main-Bold", t).metrics ? Ye(e, "Main-Bold", t, i, s.concat(["mathbf"])) : e === "\\" || ce[t][e].font === "main" ? Ye(e, "Main-Regular", t, i, s) : Ye(e, "AMS-Regular", t, i, s.concat(["amsrm"]));
}, dn = function(e, t, i, s, r) {
  return r !== "textord" && Ca(e, "Math-BoldItalic", t).metrics ? {
    fontName: "Math-BoldItalic",
    fontClass: "boldsymbol"
  } : {
    fontName: "Main-Bold",
    fontClass: "mathbf"
  };
}, pn = function(e, t, i) {
  var s = e.mode, r = e.text, l = ["mord"], c = s === "math" || s === "text" && t.font, m = c ? t.font : t.fontFamily, d = "", y = "";
  if (r.charCodeAt(0) === 55349 && ([d, y] = gn(r, s)), d.length > 0)
    return Ye(r, d, s, t, l.concat(y));
  if (m) {
    var v, x;
    if (m === "boldsymbol") {
      var k = dn(r, s, t, l, i);
      v = k.fontName, x = [k.fontClass];
    } else
      c ? (v = Tr[m].fontName, x = [m]) : (v = wa(m, t.fontWeight, t.fontShape), x = [m, t.fontWeight, t.fontShape]);
    if (Ca(r, v, s).metrics)
      return Ye(r, v, s, t, l.concat(x));
    if (xr.hasOwnProperty(r) && v.slice(0, 10) === "Typewriter") {
      for (var M = [], T = 0; T < r.length; T++)
        M.push(Ye(r[T], v, s, t, l.concat(x)));
      return Ar(M);
    }
  }
  if (i === "mathord")
    return Ye(r, "Math-Italic", s, t, l.concat(["mathnormal"]));
  if (i === "textord") {
    var F = ce[s][r] && ce[s][r].font;
    if (F === "ams") {
      var O = wa("amsrm", t.fontWeight, t.fontShape);
      return Ye(r, O, s, t, l.concat("amsrm", t.fontWeight, t.fontShape));
    } else if (F === "main" || !F) {
      var w = wa("textrm", t.fontWeight, t.fontShape);
      return Ye(r, w, s, t, l.concat(t.fontWeight, t.fontShape));
    } else {
      var f = wa(F, t.fontWeight, t.fontShape);
      return Ye(r, f, s, t, l.concat(f, t.fontWeight, t.fontShape));
    }
  } else
    throw new Error("unexpected type: " + i + " in makeOrd");
}, hn = (a, e) => {
  if (wt(a.classes) !== wt(e.classes) || a.skew !== e.skew || a.maxFontSize !== e.maxFontSize)
    return !1;
  if (a.classes.length === 1) {
    var t = a.classes[0];
    if (t === "mbin" || t === "mord")
      return !1;
  }
  for (var i in a.style)
    if (a.style.hasOwnProperty(i) && a.style[i] !== e.style[i])
      return !1;
  for (var s in e.style)
    if (e.style.hasOwnProperty(s) && a.style[s] !== e.style[s])
      return !1;
  return !0;
}, yn = (a) => {
  for (var e = 0; e < a.length - 1; e++) {
    var t = a[e], i = a[e + 1];
    t instanceof $e && i instanceof $e && hn(t, i) && (t.text += i.text, t.height = Math.max(t.height, i.height), t.depth = Math.max(t.depth, i.depth), t.italic = i.italic, a.splice(e + 1, 1), e--);
  }
  return a;
}, Ni = function(e) {
  for (var t = 0, i = 0, s = 0, r = 0; r < e.children.length; r++) {
    var l = e.children[r];
    l.height > t && (t = l.height), l.depth > i && (i = l.depth), l.maxFontSize > s && (s = l.maxFontSize);
  }
  e.height = t, e.depth = i, e.maxFontSize = s;
}, Ne = function(e, t, i, s) {
  var r = new la(e, t, i, s);
  return Ni(r), r;
}, Sr = (a, e, t, i) => new la(a, e, t, i), fn = function(e, t, i) {
  var s = Ne([e], [], t);
  return s.height = Math.max(i || t.fontMetrics().defaultRuleThickness, t.minRuleThickness), s.style.borderBottomWidth = I(s.height), s.maxFontSize = 1, s;
}, bn = function(e, t, i, s) {
  var r = new Oi(e, t, i, s);
  return Ni(r), r;
}, Ar = function(e) {
  var t = new na(e);
  return Ni(t), t;
}, vn = function(e, t) {
  return e instanceof na ? Ne([], [e], t) : e;
}, wn = function(e) {
  if (e.positionType === "individualShift") {
    for (var t = e.children, i = [t[0]], s = -t[0].shift - t[0].elem.depth, r = s, l = 1; l < t.length; l++) {
      var c = -t[l].shift - r - t[l].elem.depth, m = c - (t[l - 1].elem.height + t[l - 1].elem.depth);
      r = r + c, i.push({
        type: "kern",
        size: m
      }), i.push(t[l]);
    }
    return {
      children: i,
      depth: s
    };
  }
  var d;
  if (e.positionType === "top") {
    for (var y = e.positionData, v = 0; v < e.children.length; v++) {
      var x = e.children[v];
      y -= x.type === "kern" ? x.size : x.elem.height + x.elem.depth;
    }
    d = y;
  } else if (e.positionType === "bottom")
    d = -e.positionData;
  else {
    var k = e.children[0];
    if (k.type !== "elem")
      throw new Error('First child must have type "elem".');
    if (e.positionType === "shift")
      d = -k.elem.depth - e.positionData;
    else if (e.positionType === "firstBaseline")
      d = -k.elem.depth;
    else
      throw new Error("Invalid positionType " + e.positionType + ".");
  }
  return {
    children: e.children,
    depth: d
  };
}, jn = function(e, t) {
  for (var {
    children: i,
    depth: s
  } = wn(e), r = 0, l = 0; l < i.length; l++) {
    var c = i[l];
    if (c.type === "elem") {
      var m = c.elem;
      r = Math.max(r, m.maxFontSize, m.height);
    }
  }
  r += 2;
  var d = Ne(["pstrut"], []);
  d.style.height = I(r);
  for (var y = [], v = s, x = s, k = s, M = 0; M < i.length; M++) {
    var T = i[M];
    if (T.type === "kern")
      k += T.size;
    else {
      var F = T.elem, O = T.wrapperClasses || [], w = T.wrapperStyle || {}, f = Ne(O, [d, F], void 0, w);
      f.style.top = I(-r - k - F.depth), T.marginLeft && (f.style.marginLeft = T.marginLeft), T.marginRight && (f.style.marginRight = T.marginRight), y.push(f), k += F.height + F.depth;
    }
    v = Math.min(v, k), x = Math.max(x, k);
  }
  var S = Ne(["vlist"], y);
  S.style.height = I(x);
  var A;
  if (v < 0) {
    var E = Ne([], []), P = Ne(["vlist"], [E]);
    P.style.height = I(-v);
    var R = Ne(["vlist-s"], [new $e("​")]);
    A = [Ne(["vlist-r"], [S, R]), Ne(["vlist-r"], [P])];
  } else
    A = [Ne(["vlist-r"], [S])];
  var B = Ne(["vlist-t"], A);
  return A.length === 2 && B.classes.push("vlist-t2"), B.height = x, B.depth = -v, B;
}, kn = (a, e) => {
  var t = Ne(["mspace"], [], e), i = ue(a, e);
  return t.style.marginRight = I(i), t;
}, wa = function(e, t, i) {
  var s = "";
  switch (e) {
    case "amsrm":
      s = "AMS";
      break;
    case "textrm":
      s = "Main";
      break;
    case "textsf":
      s = "SansSerif";
      break;
    case "texttt":
      s = "Typewriter";
      break;
    default:
      s = e;
  }
  var r;
  return t === "textbf" && i === "textit" ? r = "BoldItalic" : t === "textbf" ? r = "Bold" : t === "textit" ? r = "Italic" : r = "Regular", s + "-" + r;
}, Tr = {
  // styles
  mathbf: {
    variant: "bold",
    fontName: "Main-Bold"
  },
  mathrm: {
    variant: "normal",
    fontName: "Main-Regular"
  },
  textit: {
    variant: "italic",
    fontName: "Main-Italic"
  },
  mathit: {
    variant: "italic",
    fontName: "Main-Italic"
  },
  mathnormal: {
    variant: "italic",
    fontName: "Math-Italic"
  },
  // "boldsymbol" is missing because they require the use of multiple fonts:
  // Math-BoldItalic and Main-Bold.  This is handled by a special case in
  // makeOrd which ends up calling boldsymbol.
  // families
  mathbb: {
    variant: "double-struck",
    fontName: "AMS-Regular"
  },
  mathcal: {
    variant: "script",
    fontName: "Caligraphic-Regular"
  },
  mathfrak: {
    variant: "fraktur",
    fontName: "Fraktur-Regular"
  },
  mathscr: {
    variant: "script",
    fontName: "Script-Regular"
  },
  mathsf: {
    variant: "sans-serif",
    fontName: "SansSerif-Regular"
  },
  mathtt: {
    variant: "monospace",
    fontName: "Typewriter-Regular"
  }
}, Er = {
  //   path, width, height
  vec: ["vec", 0.471, 0.714],
  // values from the font glyph
  oiintSize1: ["oiintSize1", 0.957, 0.499],
  // oval to overlay the integrand
  oiintSize2: ["oiintSize2", 1.472, 0.659],
  oiiintSize1: ["oiiintSize1", 1.304, 0.499],
  oiiintSize2: ["oiiintSize2", 1.98, 0.659]
}, _n = function(e, t) {
  var [i, s, r] = Er[e], l = new jt(i), c = new dt([l], {
    width: I(s),
    height: I(r),
    // Override CSS rule `.katex svg { width: 100% }`
    style: "width:" + I(s),
    viewBox: "0 0 " + 1e3 * s + " " + 1e3 * r,
    preserveAspectRatio: "xMinYMin"
  }), m = Sr(["overlay"], [c], t);
  return m.height = r, m.style.height = I(r), m.style.width = I(s), m;
}, _ = {
  fontMap: Tr,
  makeSymbol: Ye,
  mathsym: un,
  makeSpan: Ne,
  makeSvgSpan: Sr,
  makeLineSpan: fn,
  makeAnchor: bn,
  makeFragment: Ar,
  wrapFragment: vn,
  makeVList: jn,
  makeOrd: pn,
  makeGlue: kn,
  staticSvg: _n,
  svgData: Er,
  tryCombineChars: yn
}, ge = {
  number: 3,
  unit: "mu"
}, Bt = {
  number: 4,
  unit: "mu"
}, ct = {
  number: 5,
  unit: "mu"
}, xn = {
  mord: {
    mop: ge,
    mbin: Bt,
    mrel: ct,
    minner: ge
  },
  mop: {
    mord: ge,
    mop: ge,
    mrel: ct,
    minner: ge
  },
  mbin: {
    mord: Bt,
    mop: Bt,
    mopen: Bt,
    minner: Bt
  },
  mrel: {
    mord: ct,
    mop: ct,
    mopen: ct,
    minner: ct
  },
  mopen: {},
  mclose: {
    mop: ge,
    mbin: Bt,
    mrel: ct,
    minner: ge
  },
  mpunct: {
    mord: ge,
    mop: ge,
    mrel: ct,
    mopen: ge,
    mclose: ge,
    mpunct: ge,
    minner: ge
  },
  minner: {
    mord: ge,
    mop: ge,
    mbin: Bt,
    mrel: ct,
    mopen: ge,
    mpunct: ge,
    minner: ge
  }
}, Sn = {
  mord: {
    mop: ge
  },
  mop: {
    mord: ge,
    mop: ge
  },
  mbin: {},
  mrel: {},
  mopen: {},
  mclose: {
    mop: ge
  },
  mpunct: {},
  minner: {
    mop: ge
  }
}, Mr = {}, Da = {}, Oa = {};
function L(a) {
  for (var {
    type: e,
    names: t,
    props: i,
    handler: s,
    htmlBuilder: r,
    mathmlBuilder: l
  } = a, c = {
    type: e,
    numArgs: i.numArgs,
    argTypes: i.argTypes,
    allowedInArgument: !!i.allowedInArgument,
    allowedInText: !!i.allowedInText,
    allowedInMath: i.allowedInMath === void 0 ? !0 : i.allowedInMath,
    numOptionalArgs: i.numOptionalArgs || 0,
    infix: !!i.infix,
    primitive: !!i.primitive,
    handler: s
  }, m = 0; m < t.length; ++m)
    Mr[t[m]] = c;
  e && (r && (Da[e] = r), l && (Oa[e] = l));
}
function Dt(a) {
  var {
    type: e,
    htmlBuilder: t,
    mathmlBuilder: i
  } = a;
  L({
    type: e,
    names: [],
    props: {
      numArgs: 0
    },
    handler() {
      throw new Error("Should never be called.");
    },
    htmlBuilder: t,
    mathmlBuilder: i
  });
}
var Na = function(e) {
  return e.type === "ordgroup" && e.body.length === 1 ? e.body[0] : e;
}, he = function(e) {
  return e.type === "ordgroup" ? e.body : [e];
}, pt = _.makeSpan, An = ["leftmost", "mbin", "mopen", "mrel", "mop", "mpunct"], Tn = ["rightmost", "mrel", "mclose", "mpunct"], En = {
  display: V.DISPLAY,
  text: V.TEXT,
  script: V.SCRIPT,
  scriptscript: V.SCRIPTSCRIPT
}, Mn = {
  mord: "mord",
  mop: "mop",
  mbin: "mbin",
  mrel: "mrel",
  mopen: "mopen",
  mclose: "mclose",
  mpunct: "mpunct",
  minner: "minner"
}, be = function(e, t, i, s) {
  s === void 0 && (s = [null, null]);
  for (var r = [], l = 0; l < e.length; l++) {
    var c = ae(e[l], t);
    if (c instanceof na) {
      var m = c.children;
      r.push(...m);
    } else
      r.push(c);
  }
  if (_.tryCombineChars(r), !i)
    return r;
  var d = t;
  if (e.length === 1) {
    var y = e[0];
    y.type === "sizing" ? d = t.havingSize(y.size) : y.type === "styling" && (d = t.havingStyle(En[y.style]));
  }
  var v = pt([s[0] || "leftmost"], [], t), x = pt([s[1] || "rightmost"], [], t), k = i === "root";
  return Rs(r, (M, T) => {
    var F = T.classes[0], O = M.classes[0];
    F === "mbin" && X.contains(Tn, O) ? T.classes[0] = "mord" : O === "mbin" && X.contains(An, F) && (M.classes[0] = "mord");
  }, {
    node: v
  }, x, k), Rs(r, (M, T) => {
    var F = xi(T), O = xi(M), w = F && O ? M.hasClass("mtight") ? Sn[F][O] : xn[F][O] : null;
    if (w)
      return _.makeGlue(w, d);
  }, {
    node: v
  }, x, k), r;
}, Rs = function a(e, t, i, s, r) {
  s && e.push(s);
  for (var l = 0; l < e.length; l++) {
    var c = e[l], m = Fr(c);
    if (m) {
      a(m.children, t, i, null, r);
      continue;
    }
    var d = !c.hasClass("mspace");
    if (d) {
      var y = t(c, i.node);
      y && (i.insertAfter ? i.insertAfter(y) : (e.unshift(y), l++));
    }
    d ? i.node = c : r && c.hasClass("newline") && (i.node = pt(["leftmost"])), i.insertAfter = /* @__PURE__ */ ((v) => (x) => {
      e.splice(v + 1, 0, x), l++;
    })(l);
  }
  s && e.pop();
}, Fr = function(e) {
  return e instanceof na || e instanceof Oi || e instanceof la && e.hasClass("enclosing") ? e : null;
}, Fn = function a(e, t) {
  var i = Fr(e);
  if (i) {
    var s = i.children;
    if (s.length) {
      if (t === "right")
        return a(s[s.length - 1], "right");
      if (t === "left")
        return a(s[0], "left");
    }
  }
  return e;
}, xi = function(e, t) {
  return e ? (t && (e = Fn(e, t)), Mn[e.classes[0]] || null) : null;
}, ra = function(e, t) {
  var i = ["nulldelimiter"].concat(e.baseSizingClasses());
  return pt(t.concat(i));
}, ae = function(e, t, i) {
  if (!e)
    return pt();
  if (Da[e.type]) {
    var s = Da[e.type](e, t);
    if (i && t.size !== i.size) {
      s = pt(t.sizingClasses(i), [s], t);
      var r = t.sizeMultiplier / i.sizeMultiplier;
      s.height *= r, s.depth *= r;
    }
    return s;
  } else
    throw new z("Got group of unknown type: '" + e.type + "'");
};
function ja(a, e) {
  var t = pt(["base"], a, e), i = pt(["strut"]);
  return i.style.height = I(t.height + t.depth), t.depth && (i.style.verticalAlign = I(-t.depth)), t.children.unshift(i), t;
}
function Si(a, e) {
  var t = null;
  a.length === 1 && a[0].type === "tag" && (t = a[0].tag, a = a[0].body);
  var i = be(a, e, "root"), s;
  i.length === 2 && i[1].hasClass("tag") && (s = i.pop());
  for (var r = [], l = [], c = 0; c < i.length; c++)
    if (l.push(i[c]), i[c].hasClass("mbin") || i[c].hasClass("mrel") || i[c].hasClass("allowbreak")) {
      for (var m = !1; c < i.length - 1 && i[c + 1].hasClass("mspace") && !i[c + 1].hasClass("newline"); )
        c++, l.push(i[c]), i[c].hasClass("nobreak") && (m = !0);
      m || (r.push(ja(l, e)), l = []);
    } else
      i[c].hasClass("newline") && (l.pop(), l.length > 0 && (r.push(ja(l, e)), l = []), r.push(i[c]));
  l.length > 0 && r.push(ja(l, e));
  var d;
  t ? (d = ja(be(t, e, !0)), d.classes = ["tag"], r.push(d)) : s && r.push(s);
  var y = pt(["katex-html"], r);
  if (y.setAttribute("aria-hidden", "true"), d) {
    var v = d.children[0];
    v.style.height = I(y.height + y.depth), y.depth && (v.style.verticalAlign = I(-y.depth));
  }
  return y;
}
function Pr(a) {
  return new na(a);
}
class Ue {
  constructor(e, t, i) {
    this.type = void 0, this.attributes = void 0, this.children = void 0, this.classes = void 0, this.type = e, this.attributes = {}, this.children = t || [], this.classes = i || [];
  }
  /**
   * Sets an attribute on a MathML node. MathML depends on attributes to convey a
   * semantic content, so this is used heavily.
   */
  setAttribute(e, t) {
    this.attributes[e] = t;
  }
  /**
   * Gets an attribute on a MathML node.
   */
  getAttribute(e) {
    return this.attributes[e];
  }
  /**
   * Converts the math node into a MathML-namespaced DOM element.
   */
  toNode() {
    var e = document.createElementNS("http://www.w3.org/1998/Math/MathML", this.type);
    for (var t in this.attributes)
      Object.prototype.hasOwnProperty.call(this.attributes, t) && e.setAttribute(t, this.attributes[t]);
    this.classes.length > 0 && (e.className = wt(this.classes));
    for (var i = 0; i < this.children.length; i++)
      e.appendChild(this.children[i].toNode());
    return e;
  }
  /**
   * Converts the math node into an HTML markup string.
   */
  toMarkup() {
    var e = "<" + this.type;
    for (var t in this.attributes)
      Object.prototype.hasOwnProperty.call(this.attributes, t) && (e += " " + t + '="', e += X.escape(this.attributes[t]), e += '"');
    this.classes.length > 0 && (e += ' class ="' + X.escape(wt(this.classes)) + '"'), e += ">";
    for (var i = 0; i < this.children.length; i++)
      e += this.children[i].toMarkup();
    return e += "</" + this.type + ">", e;
  }
  /**
   * Converts the math node into a string, similar to innerText, but escaped.
   */
  toText() {
    return this.children.map((e) => e.toText()).join("");
  }
}
class aa {
  constructor(e) {
    this.text = void 0, this.text = e;
  }
  /**
   * Converts the text node into a DOM text node.
   */
  toNode() {
    return document.createTextNode(this.text);
  }
  /**
   * Converts the text node into escaped HTML markup
   * (representing the text itself).
   */
  toMarkup() {
    return X.escape(this.toText());
  }
  /**
   * Converts the text node into a string
   * (representing the text itself).
   */
  toText() {
    return this.text;
  }
}
class Pn {
  /**
   * Create a Space node with width given in CSS ems.
   */
  constructor(e) {
    this.width = void 0, this.character = void 0, this.width = e, e >= 0.05555 && e <= 0.05556 ? this.character = " " : e >= 0.1666 && e <= 0.1667 ? this.character = " " : e >= 0.2222 && e <= 0.2223 ? this.character = " " : e >= 0.2777 && e <= 0.2778 ? this.character = "  " : e >= -0.05556 && e <= -0.05555 ? this.character = " ⁣" : e >= -0.1667 && e <= -0.1666 ? this.character = " ⁣" : e >= -0.2223 && e <= -0.2222 ? this.character = " ⁣" : e >= -0.2778 && e <= -0.2777 ? this.character = " ⁣" : this.character = null;
  }
  /**
   * Converts the math node into a MathML-namespaced DOM element.
   */
  toNode() {
    if (this.character)
      return document.createTextNode(this.character);
    var e = document.createElementNS("http://www.w3.org/1998/Math/MathML", "mspace");
    return e.setAttribute("width", I(this.width)), e;
  }
  /**
   * Converts the math node into an HTML markup string.
   */
  toMarkup() {
    return this.character ? "<mtext>" + this.character + "</mtext>" : '<mspace width="' + I(this.width) + '"/>';
  }
  /**
   * Converts the math node into a string, similar to innerText.
   */
  toText() {
    return this.character ? this.character : " ";
  }
}
var N = {
  MathNode: Ue,
  TextNode: aa,
  SpaceNode: Pn,
  newDocumentFragment: Pr
}, Ve = function(e, t, i) {
  return ce[t][e] && ce[t][e].replace && e.charCodeAt(0) !== 55349 && !(xr.hasOwnProperty(e) && i && (i.fontFamily && i.fontFamily.slice(4, 6) === "tt" || i.font && i.font.slice(4, 6) === "tt")) && (e = ce[t][e].replace), new N.TextNode(e);
}, zi = function(e) {
  return e.length === 1 ? e[0] : new N.MathNode("mrow", e);
}, Ci = function(e, t) {
  if (t.fontFamily === "texttt")
    return "monospace";
  if (t.fontFamily === "textsf")
    return t.fontShape === "textit" && t.fontWeight === "textbf" ? "sans-serif-bold-italic" : t.fontShape === "textit" ? "sans-serif-italic" : t.fontWeight === "textbf" ? "bold-sans-serif" : "sans-serif";
  if (t.fontShape === "textit" && t.fontWeight === "textbf")
    return "bold-italic";
  if (t.fontShape === "textit")
    return "italic";
  if (t.fontWeight === "textbf")
    return "bold";
  var i = t.font;
  if (!i || i === "mathnormal")
    return null;
  var s = e.mode;
  if (i === "mathit")
    return "italic";
  if (i === "boldsymbol")
    return e.type === "textord" ? "bold" : "bold-italic";
  if (i === "mathbf")
    return "bold";
  if (i === "mathbb")
    return "double-struck";
  if (i === "mathfrak")
    return "fraktur";
  if (i === "mathscr" || i === "mathcal")
    return "script";
  if (i === "mathsf")
    return "sans-serif";
  if (i === "mathtt")
    return "monospace";
  var r = e.text;
  if (X.contains(["\\imath", "\\jmath"], r))
    return null;
  ce[s][r] && ce[s][r].replace && (r = ce[s][r].replace);
  var l = _.fontMap[i].fontName;
  return Di(r, l, s) ? _.fontMap[i].variant : null;
}, ze = function(e, t, i) {
  if (e.length === 1) {
    var s = ne(e[0], t);
    return i && s instanceof Ue && s.type === "mo" && (s.setAttribute("lspace", "0em"), s.setAttribute("rspace", "0em")), [s];
  }
  for (var r = [], l, c = 0; c < e.length; c++) {
    var m = ne(e[c], t);
    if (m instanceof Ue && l instanceof Ue) {
      if (m.type === "mtext" && l.type === "mtext" && m.getAttribute("mathvariant") === l.getAttribute("mathvariant")) {
        l.children.push(...m.children);
        continue;
      } else if (m.type === "mn" && l.type === "mn") {
        l.children.push(...m.children);
        continue;
      } else if (m.type === "mi" && m.children.length === 1 && l.type === "mn") {
        var d = m.children[0];
        if (d instanceof aa && d.text === ".") {
          l.children.push(...m.children);
          continue;
        }
      } else if (l.type === "mi" && l.children.length === 1) {
        var y = l.children[0];
        if (y instanceof aa && y.text === "̸" && (m.type === "mo" || m.type === "mi" || m.type === "mn")) {
          var v = m.children[0];
          v instanceof aa && v.text.length > 0 && (v.text = v.text.slice(0, 1) + "̸" + v.text.slice(1), r.pop());
        }
      }
    }
    r.push(m), l = m;
  }
  return r;
}, kt = function(e, t, i) {
  return zi(ze(e, t, i));
}, ne = function(e, t) {
  if (!e)
    return new N.MathNode("mrow");
  if (Oa[e.type]) {
    var i = Oa[e.type](e, t);
    return i;
  } else
    throw new z("Got group of unknown type: '" + e.type + "'");
};
function Ls(a, e, t, i, s) {
  var r = ze(a, t), l;
  r.length === 1 && r[0] instanceof Ue && X.contains(["mrow", "mtable"], r[0].type) ? l = r[0] : l = new N.MathNode("mrow", r);
  var c = new N.MathNode("annotation", [new N.TextNode(e)]);
  c.setAttribute("encoding", "application/x-tex");
  var m = new N.MathNode("semantics", [l, c]), d = new N.MathNode("math", [m]);
  d.setAttribute("xmlns", "http://www.w3.org/1998/Math/MathML"), i && d.setAttribute("display", "block");
  var y = s ? "katex" : "katex-mathml";
  return _.makeSpan([y], [d]);
}
var Br = function(e) {
  return new mt({
    style: e.displayMode ? V.DISPLAY : V.TEXT,
    maxSize: e.maxSize,
    minRuleThickness: e.minRuleThickness
  });
}, Dr = function(e, t) {
  if (t.displayMode) {
    var i = ["katex-display"];
    t.leqno && i.push("leqno"), t.fleqn && i.push("fleqn"), e = _.makeSpan(i, [e]);
  }
  return e;
}, Bn = function(e, t, i) {
  var s = Br(i), r;
  if (i.output === "mathml")
    return Ls(e, t, s, i.displayMode, !0);
  if (i.output === "html") {
    var l = Si(e, s);
    r = _.makeSpan(["katex"], [l]);
  } else {
    var c = Ls(e, t, s, i.displayMode, !1), m = Si(e, s);
    r = _.makeSpan(["katex"], [c, m]);
  }
  return Dr(r, i);
}, Dn = function(e, t, i) {
  var s = Br(i), r = Si(e, s), l = _.makeSpan(["katex"], [r]);
  return Dr(l, i);
}, On = {
  widehat: "^",
  widecheck: "ˇ",
  widetilde: "~",
  utilde: "~",
  overleftarrow: "←",
  underleftarrow: "←",
  xleftarrow: "←",
  overrightarrow: "→",
  underrightarrow: "→",
  xrightarrow: "→",
  underbrace: "⏟",
  overbrace: "⏞",
  overgroup: "⏠",
  undergroup: "⏡",
  overleftrightarrow: "↔",
  underleftrightarrow: "↔",
  xleftrightarrow: "↔",
  Overrightarrow: "⇒",
  xRightarrow: "⇒",
  overleftharpoon: "↼",
  xleftharpoonup: "↼",
  overrightharpoon: "⇀",
  xrightharpoonup: "⇀",
  xLeftarrow: "⇐",
  xLeftrightarrow: "⇔",
  xhookleftarrow: "↩",
  xhookrightarrow: "↪",
  xmapsto: "↦",
  xrightharpoondown: "⇁",
  xleftharpoondown: "↽",
  xrightleftharpoons: "⇌",
  xleftrightharpoons: "⇋",
  xtwoheadleftarrow: "↞",
  xtwoheadrightarrow: "↠",
  xlongequal: "=",
  xtofrom: "⇄",
  xrightleftarrows: "⇄",
  xrightequilibrium: "⇌",
  // Not a perfect match.
  xleftequilibrium: "⇋",
  // None better available.
  "\\cdrightarrow": "→",
  "\\cdleftarrow": "←",
  "\\cdlongequal": "="
}, Nn = function(e) {
  var t = new N.MathNode("mo", [new N.TextNode(On[e.replace(/^\\/, "")])]);
  return t.setAttribute("stretchy", "true"), t;
}, zn = {
  //   path(s), minWidth, height, align
  overrightarrow: [["rightarrow"], 0.888, 522, "xMaxYMin"],
  overleftarrow: [["leftarrow"], 0.888, 522, "xMinYMin"],
  underrightarrow: [["rightarrow"], 0.888, 522, "xMaxYMin"],
  underleftarrow: [["leftarrow"], 0.888, 522, "xMinYMin"],
  xrightarrow: [["rightarrow"], 1.469, 522, "xMaxYMin"],
  "\\cdrightarrow": [["rightarrow"], 3, 522, "xMaxYMin"],
  // CD minwwidth2.5pc
  xleftarrow: [["leftarrow"], 1.469, 522, "xMinYMin"],
  "\\cdleftarrow": [["leftarrow"], 3, 522, "xMinYMin"],
  Overrightarrow: [["doublerightarrow"], 0.888, 560, "xMaxYMin"],
  xRightarrow: [["doublerightarrow"], 1.526, 560, "xMaxYMin"],
  xLeftarrow: [["doubleleftarrow"], 1.526, 560, "xMinYMin"],
  overleftharpoon: [["leftharpoon"], 0.888, 522, "xMinYMin"],
  xleftharpoonup: [["leftharpoon"], 0.888, 522, "xMinYMin"],
  xleftharpoondown: [["leftharpoondown"], 0.888, 522, "xMinYMin"],
  overrightharpoon: [["rightharpoon"], 0.888, 522, "xMaxYMin"],
  xrightharpoonup: [["rightharpoon"], 0.888, 522, "xMaxYMin"],
  xrightharpoondown: [["rightharpoondown"], 0.888, 522, "xMaxYMin"],
  xlongequal: [["longequal"], 0.888, 334, "xMinYMin"],
  "\\cdlongequal": [["longequal"], 3, 334, "xMinYMin"],
  xtwoheadleftarrow: [["twoheadleftarrow"], 0.888, 334, "xMinYMin"],
  xtwoheadrightarrow: [["twoheadrightarrow"], 0.888, 334, "xMaxYMin"],
  overleftrightarrow: [["leftarrow", "rightarrow"], 0.888, 522],
  overbrace: [["leftbrace", "midbrace", "rightbrace"], 1.6, 548],
  underbrace: [["leftbraceunder", "midbraceunder", "rightbraceunder"], 1.6, 548],
  underleftrightarrow: [["leftarrow", "rightarrow"], 0.888, 522],
  xleftrightarrow: [["leftarrow", "rightarrow"], 1.75, 522],
  xLeftrightarrow: [["doubleleftarrow", "doublerightarrow"], 1.75, 560],
  xrightleftharpoons: [["leftharpoondownplus", "rightharpoonplus"], 1.75, 716],
  xleftrightharpoons: [["leftharpoonplus", "rightharpoondownplus"], 1.75, 716],
  xhookleftarrow: [["leftarrow", "righthook"], 1.08, 522],
  xhookrightarrow: [["lefthook", "rightarrow"], 1.08, 522],
  overlinesegment: [["leftlinesegment", "rightlinesegment"], 0.888, 522],
  underlinesegment: [["leftlinesegment", "rightlinesegment"], 0.888, 522],
  overgroup: [["leftgroup", "rightgroup"], 0.888, 342],
  undergroup: [["leftgroupunder", "rightgroupunder"], 0.888, 342],
  xmapsto: [["leftmapsto", "rightarrow"], 1.5, 522],
  xtofrom: [["leftToFrom", "rightToFrom"], 1.75, 528],
  // The next three arrows are from the mhchem package.
  // In mhchem.sty, min-length is 2.0em. But these arrows might appear in the
  // document as \xrightarrow or \xrightleftharpoons. Those have
  // min-length = 1.75em, so we set min-length on these next three to match.
  xrightleftarrows: [["baraboveleftarrow", "rightarrowabovebar"], 1.75, 901],
  xrightequilibrium: [["baraboveshortleftharpoon", "rightharpoonaboveshortbar"], 1.75, 716],
  xleftequilibrium: [["shortbaraboveleftharpoon", "shortrightharpoonabovebar"], 1.75, 716]
}, Cn = function(e) {
  return e.type === "ordgroup" ? e.body.length : 1;
}, In = function(e, t) {
  function i() {
    var c = 4e5, m = e.label.slice(1);
    if (X.contains(["widehat", "widecheck", "widetilde", "utilde"], m)) {
      var d = e, y = Cn(d.base), v, x, k;
      if (y > 5)
        m === "widehat" || m === "widecheck" ? (v = 420, c = 2364, k = 0.42, x = m + "4") : (v = 312, c = 2340, k = 0.34, x = "tilde4");
      else {
        var M = [1, 1, 2, 2, 3, 3][y];
        m === "widehat" || m === "widecheck" ? (c = [0, 1062, 2364, 2364, 2364][M], v = [0, 239, 300, 360, 420][M], k = [0, 0.24, 0.3, 0.3, 0.36, 0.42][M], x = m + M) : (c = [0, 600, 1033, 2339, 2340][M], v = [0, 260, 286, 306, 312][M], k = [0, 0.26, 0.286, 0.3, 0.306, 0.34][M], x = "tilde" + M);
      }
      var T = new jt(x), F = new dt([T], {
        width: "100%",
        height: I(k),
        viewBox: "0 0 " + c + " " + v,
        preserveAspectRatio: "none"
      });
      return {
        span: _.makeSvgSpan([], [F], t),
        minWidth: 0,
        height: k
      };
    } else {
      var O = [], w = zn[m], [f, S, A] = w, E = A / 1e3, P = f.length, R, B;
      if (P === 1) {
        var K = w[3];
        R = ["hide-tail"], B = [K];
      } else if (P === 2)
        R = ["halfarrow-left", "halfarrow-right"], B = ["xMinYMin", "xMaxYMin"];
      else if (P === 3)
        R = ["brace-left", "brace-center", "brace-right"], B = ["xMinYMin", "xMidYMin", "xMaxYMin"];
      else
        throw new Error(`Correct katexImagesData or update code here to support
                    ` + P + " children.");
      for (var Z = 0; Z < P; Z++) {
        var Q = new jt(f[Z]), pe = new dt([Q], {
          width: "400em",
          height: I(E),
          viewBox: "0 0 " + c + " " + A,
          preserveAspectRatio: B[Z] + " slice"
        }), q = _.makeSvgSpan([R[Z]], [pe], t);
        if (P === 1)
          return {
            span: q,
            minWidth: S,
            height: E
          };
        q.style.height = I(E), O.push(q);
      }
      return {
        span: _.makeSpan(["stretchy"], O, t),
        minWidth: S,
        height: E
      };
    }
  }
  var {
    span: s,
    minWidth: r,
    height: l
  } = i();
  return s.height = l, s.style.height = I(l), r > 0 && (s.style.minWidth = I(r)), s;
}, Rn = function(e, t, i, s, r) {
  var l, c = e.height + e.depth + i + s;
  if (/fbox|color|angl/.test(t)) {
    if (l = _.makeSpan(["stretchy", t], [], r), t === "fbox") {
      var m = r.color && r.getColor();
      m && (l.style.borderColor = m);
    }
  } else {
    var d = [];
    /^[bx]cancel$/.test(t) && d.push(new ki({
      x1: "0",
      y1: "0",
      x2: "100%",
      y2: "100%",
      "stroke-width": "0.046em"
    })), /^x?cancel$/.test(t) && d.push(new ki({
      x1: "0",
      y1: "100%",
      x2: "100%",
      y2: "0",
      "stroke-width": "0.046em"
    }));
    var y = new dt(d, {
      width: "100%",
      height: I(c)
    });
    l = _.makeSvgSpan([], [y], r);
  }
  return l.height = c, l.style.height = I(c), l;
}, ht = {
  encloseSpan: Rn,
  mathMLnode: Nn,
  svgSpan: In
};
function J(a, e) {
  if (!a || a.type !== e)
    throw new Error("Expected node of type " + e + ", but got " + (a ? "node of type " + a.type : String(a)));
  return a;
}
function Ii(a) {
  var e = Ia(a);
  if (!e)
    throw new Error("Expected node of symbol group type, but got " + (a ? "node of type " + a.type : String(a)));
  return e;
}
function Ia(a) {
  return a && (a.type === "atom" || mn.hasOwnProperty(a.type)) ? a : null;
}
var Ri = (a, e) => {
  var t, i, s;
  a && a.type === "supsub" ? (i = J(a.base, "accent"), t = i.base, a.base = t, s = ln(ae(a, e)), a.base = i) : (i = J(a, "accent"), t = i.base);
  var r = ae(t, e.havingCrampedStyle()), l = i.isShifty && X.isCharacterBox(t), c = 0;
  if (l) {
    var m = X.getBaseElem(t), d = ae(m, e.havingCrampedStyle());
    c = Ds(d).skew;
  }
  var y = i.label === "\\c", v = y ? r.height + r.depth : Math.min(r.height, e.fontMetrics().xHeight), x;
  if (i.isStretchy)
    x = ht.svgSpan(i, e), x = _.makeVList({
      positionType: "firstBaseline",
      children: [{
        type: "elem",
        elem: r
      }, {
        type: "elem",
        elem: x,
        wrapperClasses: ["svg-align"],
        wrapperStyle: c > 0 ? {
          width: "calc(100% - " + I(2 * c) + ")",
          marginLeft: I(2 * c)
        } : void 0
      }]
    }, e);
  else {
    var k, M;
    i.label === "\\vec" ? (k = _.staticSvg("vec", e), M = _.svgData.vec[1]) : (k = _.makeOrd({
      mode: i.mode,
      text: i.label
    }, e, "textord"), k = Ds(k), k.italic = 0, M = k.width, y && (v += k.depth)), x = _.makeSpan(["accent-body"], [k]);
    var T = i.label === "\\textcircled";
    T && (x.classes.push("accent-full"), v = r.height);
    var F = c;
    T || (F -= M / 2), x.style.left = I(F), i.label === "\\textcircled" && (x.style.top = ".2em"), x = _.makeVList({
      positionType: "firstBaseline",
      children: [{
        type: "elem",
        elem: r
      }, {
        type: "kern",
        size: -v
      }, {
        type: "elem",
        elem: x
      }]
    }, e);
  }
  var O = _.makeSpan(["mord", "accent"], [x], e);
  return s ? (s.children[0] = O, s.height = Math.max(O.height, s.height), s.classes[0] = "mord", s) : O;
}, Or = (a, e) => {
  var t = a.isStretchy ? ht.mathMLnode(a.label) : new N.MathNode("mo", [Ve(a.label, a.mode)]), i = new N.MathNode("mover", [ne(a.base, e), t]);
  return i.setAttribute("accent", "true"), i;
}, Ln = new RegExp(["\\acute", "\\grave", "\\ddot", "\\tilde", "\\bar", "\\breve", "\\check", "\\hat", "\\vec", "\\dot", "\\mathring"].map((a) => "\\" + a).join("|"));
L({
  type: "accent",
  names: ["\\acute", "\\grave", "\\ddot", "\\tilde", "\\bar", "\\breve", "\\check", "\\hat", "\\vec", "\\dot", "\\mathring", "\\widecheck", "\\widehat", "\\widetilde", "\\overrightarrow", "\\overleftarrow", "\\Overrightarrow", "\\overleftrightarrow", "\\overgroup", "\\overlinesegment", "\\overleftharpoon", "\\overrightharpoon"],
  props: {
    numArgs: 1
  },
  handler: (a, e) => {
    var t = Na(e[0]), i = !Ln.test(a.funcName), s = !i || a.funcName === "\\widehat" || a.funcName === "\\widetilde" || a.funcName === "\\widecheck";
    return {
      type: "accent",
      mode: a.parser.mode,
      label: a.funcName,
      isStretchy: i,
      isShifty: s,
      base: t
    };
  },
  htmlBuilder: Ri,
  mathmlBuilder: Or
});
L({
  type: "accent",
  names: ["\\'", "\\`", "\\^", "\\~", "\\=", "\\u", "\\.", '\\"', "\\c", "\\r", "\\H", "\\v", "\\textcircled"],
  props: {
    numArgs: 1,
    allowedInText: !0,
    allowedInMath: !0,
    // unless in strict mode
    argTypes: ["primitive"]
  },
  handler: (a, e) => {
    var t = e[0], i = a.parser.mode;
    return i === "math" && (a.parser.settings.reportNonstrict("mathVsTextAccents", "LaTeX's accent " + a.funcName + " works only in text mode"), i = "text"), {
      type: "accent",
      mode: i,
      label: a.funcName,
      isStretchy: !1,
      isShifty: !0,
      base: t
    };
  },
  htmlBuilder: Ri,
  mathmlBuilder: Or
});
L({
  type: "accentUnder",
  names: ["\\underleftarrow", "\\underrightarrow", "\\underleftrightarrow", "\\undergroup", "\\underlinesegment", "\\utilde"],
  props: {
    numArgs: 1
  },
  handler: (a, e) => {
    var {
      parser: t,
      funcName: i
    } = a, s = e[0];
    return {
      type: "accentUnder",
      mode: t.mode,
      label: i,
      base: s
    };
  },
  htmlBuilder: (a, e) => {
    var t = ae(a.base, e), i = ht.svgSpan(a, e), s = a.label === "\\utilde" ? 0.12 : 0, r = _.makeVList({
      positionType: "top",
      positionData: t.height,
      children: [{
        type: "elem",
        elem: i,
        wrapperClasses: ["svg-align"]
      }, {
        type: "kern",
        size: s
      }, {
        type: "elem",
        elem: t
      }]
    }, e);
    return _.makeSpan(["mord", "accentunder"], [r], e);
  },
  mathmlBuilder: (a, e) => {
    var t = ht.mathMLnode(a.label), i = new N.MathNode("munder", [ne(a.base, e), t]);
    return i.setAttribute("accentunder", "true"), i;
  }
});
var ka = (a) => {
  var e = new N.MathNode("mpadded", a ? [a] : []);
  return e.setAttribute("width", "+0.6em"), e.setAttribute("lspace", "0.3em"), e;
};
L({
  type: "xArrow",
  names: [
    "\\xleftarrow",
    "\\xrightarrow",
    "\\xLeftarrow",
    "\\xRightarrow",
    "\\xleftrightarrow",
    "\\xLeftrightarrow",
    "\\xhookleftarrow",
    "\\xhookrightarrow",
    "\\xmapsto",
    "\\xrightharpoondown",
    "\\xrightharpoonup",
    "\\xleftharpoondown",
    "\\xleftharpoonup",
    "\\xrightleftharpoons",
    "\\xleftrightharpoons",
    "\\xlongequal",
    "\\xtwoheadrightarrow",
    "\\xtwoheadleftarrow",
    "\\xtofrom",
    // The next 3 functions are here to support the mhchem extension.
    // Direct use of these functions is discouraged and may break someday.
    "\\xrightleftarrows",
    "\\xrightequilibrium",
    "\\xleftequilibrium",
    // The next 3 functions are here only to support the {CD} environment.
    "\\\\cdrightarrow",
    "\\\\cdleftarrow",
    "\\\\cdlongequal"
  ],
  props: {
    numArgs: 1,
    numOptionalArgs: 1
  },
  handler(a, e, t) {
    var {
      parser: i,
      funcName: s
    } = a;
    return {
      type: "xArrow",
      mode: i.mode,
      label: s,
      body: e[0],
      below: t[0]
    };
  },
  // Flow is unable to correctly infer the type of `group`, even though it's
  // unambiguously determined from the passed-in `type` above.
  htmlBuilder(a, e) {
    var t = e.style, i = e.havingStyle(t.sup()), s = _.wrapFragment(ae(a.body, i, e), e), r = a.label.slice(0, 2) === "\\x" ? "x" : "cd";
    s.classes.push(r + "-arrow-pad");
    var l;
    a.below && (i = e.havingStyle(t.sub()), l = _.wrapFragment(ae(a.below, i, e), e), l.classes.push(r + "-arrow-pad"));
    var c = ht.svgSpan(a, e), m = -e.fontMetrics().axisHeight + 0.5 * c.height, d = -e.fontMetrics().axisHeight - 0.5 * c.height - 0.111;
    (s.depth > 0.25 || a.label === "\\xleftequilibrium") && (d -= s.depth);
    var y;
    if (l) {
      var v = -e.fontMetrics().axisHeight + l.height + 0.5 * c.height + 0.111;
      y = _.makeVList({
        positionType: "individualShift",
        children: [{
          type: "elem",
          elem: s,
          shift: d
        }, {
          type: "elem",
          elem: c,
          shift: m
        }, {
          type: "elem",
          elem: l,
          shift: v
        }]
      }, e);
    } else
      y = _.makeVList({
        positionType: "individualShift",
        children: [{
          type: "elem",
          elem: s,
          shift: d
        }, {
          type: "elem",
          elem: c,
          shift: m
        }]
      }, e);
    return y.children[0].children[0].children[1].classes.push("svg-align"), _.makeSpan(["mrel", "x-arrow"], [y], e);
  },
  mathmlBuilder(a, e) {
    var t = ht.mathMLnode(a.label);
    t.setAttribute("minsize", a.label.charAt(0) === "x" ? "1.75em" : "3.0em");
    var i;
    if (a.body) {
      var s = ka(ne(a.body, e));
      if (a.below) {
        var r = ka(ne(a.below, e));
        i = new N.MathNode("munderover", [t, r, s]);
      } else
        i = new N.MathNode("mover", [t, s]);
    } else if (a.below) {
      var l = ka(ne(a.below, e));
      i = new N.MathNode("munder", [t, l]);
    } else
      i = ka(), i = new N.MathNode("mover", [t, i]);
    return i;
  }
});
var qn = _.makeSpan;
function Nr(a, e) {
  var t = be(a.body, e, !0);
  return qn([a.mclass], t, e);
}
function zr(a, e) {
  var t, i = ze(a.body, e);
  return a.mclass === "minner" ? t = new N.MathNode("mpadded", i) : a.mclass === "mord" ? a.isCharacterBox ? (t = i[0], t.type = "mi") : t = new N.MathNode("mi", i) : (a.isCharacterBox ? (t = i[0], t.type = "mo") : t = new N.MathNode("mo", i), a.mclass === "mbin" ? (t.attributes.lspace = "0.22em", t.attributes.rspace = "0.22em") : a.mclass === "mpunct" ? (t.attributes.lspace = "0em", t.attributes.rspace = "0.17em") : a.mclass === "mopen" || a.mclass === "mclose" ? (t.attributes.lspace = "0em", t.attributes.rspace = "0em") : a.mclass === "minner" && (t.attributes.lspace = "0.0556em", t.attributes.width = "+0.1111em")), t;
}
L({
  type: "mclass",
  names: ["\\mathord", "\\mathbin", "\\mathrel", "\\mathopen", "\\mathclose", "\\mathpunct", "\\mathinner"],
  props: {
    numArgs: 1,
    primitive: !0
  },
  handler(a, e) {
    var {
      parser: t,
      funcName: i
    } = a, s = e[0];
    return {
      type: "mclass",
      mode: t.mode,
      mclass: "m" + i.slice(5),
      // TODO(kevinb): don't prefix with 'm'
      body: he(s),
      isCharacterBox: X.isCharacterBox(s)
    };
  },
  htmlBuilder: Nr,
  mathmlBuilder: zr
});
var Ra = (a) => {
  var e = a.type === "ordgroup" && a.body.length ? a.body[0] : a;
  return e.type === "atom" && (e.family === "bin" || e.family === "rel") ? "m" + e.family : "mord";
};
L({
  type: "mclass",
  names: ["\\@binrel"],
  props: {
    numArgs: 2
  },
  handler(a, e) {
    var {
      parser: t
    } = a;
    return {
      type: "mclass",
      mode: t.mode,
      mclass: Ra(e[0]),
      body: he(e[1]),
      isCharacterBox: X.isCharacterBox(e[1])
    };
  }
});
L({
  type: "mclass",
  names: ["\\stackrel", "\\overset", "\\underset"],
  props: {
    numArgs: 2
  },
  handler(a, e) {
    var {
      parser: t,
      funcName: i
    } = a, s = e[1], r = e[0], l;
    i !== "\\stackrel" ? l = Ra(s) : l = "mrel";
    var c = {
      type: "op",
      mode: s.mode,
      limits: !0,
      alwaysHandleSupSub: !0,
      parentIsSupSub: !1,
      symbol: !1,
      suppressBaseShift: i !== "\\stackrel",
      body: he(s)
    }, m = {
      type: "supsub",
      mode: r.mode,
      base: c,
      sup: i === "\\underset" ? null : r,
      sub: i === "\\underset" ? r : null
    };
    return {
      type: "mclass",
      mode: t.mode,
      mclass: l,
      body: [m],
      isCharacterBox: X.isCharacterBox(m)
    };
  },
  htmlBuilder: Nr,
  mathmlBuilder: zr
});
L({
  type: "pmb",
  names: ["\\pmb"],
  props: {
    numArgs: 1,
    allowedInText: !0
  },
  handler(a, e) {
    var {
      parser: t
    } = a;
    return {
      type: "pmb",
      mode: t.mode,
      mclass: Ra(e[0]),
      body: he(e[0])
    };
  },
  htmlBuilder(a, e) {
    var t = be(a.body, e, !0), i = _.makeSpan([a.mclass], t, e);
    return i.style.textShadow = "0.02em 0.01em 0.04px", i;
  },
  mathmlBuilder(a, e) {
    var t = ze(a.body, e), i = new N.MathNode("mstyle", t);
    return i.setAttribute("style", "text-shadow: 0.02em 0.01em 0.04px"), i;
  }
});
var Un = {
  ">": "\\\\cdrightarrow",
  "<": "\\\\cdleftarrow",
  "=": "\\\\cdlongequal",
  A: "\\uparrow",
  V: "\\downarrow",
  "|": "\\Vert",
  ".": "no arrow"
}, qs = () => ({
  type: "styling",
  body: [],
  mode: "math",
  style: "display"
}), Us = (a) => a.type === "textord" && a.text === "@", Hn = (a, e) => (a.type === "mathord" || a.type === "atom") && a.text === e;
function Gn(a, e, t) {
  var i = Un[a];
  switch (i) {
    case "\\\\cdrightarrow":
    case "\\\\cdleftarrow":
      return t.callFunction(i, [e[0]], [e[1]]);
    case "\\uparrow":
    case "\\downarrow": {
      var s = t.callFunction("\\\\cdleft", [e[0]], []), r = {
        type: "atom",
        text: i,
        mode: "math",
        family: "rel"
      }, l = t.callFunction("\\Big", [r], []), c = t.callFunction("\\\\cdright", [e[1]], []), m = {
        type: "ordgroup",
        mode: "math",
        body: [s, l, c]
      };
      return t.callFunction("\\\\cdparent", [m], []);
    }
    case "\\\\cdlongequal":
      return t.callFunction("\\\\cdlongequal", [], []);
    case "\\Vert": {
      var d = {
        type: "textord",
        text: "\\Vert",
        mode: "math"
      };
      return t.callFunction("\\Big", [d], []);
    }
    default:
      return {
        type: "textord",
        text: " ",
        mode: "math"
      };
  }
}
function $n(a) {
  var e = [];
  for (a.gullet.beginGroup(), a.gullet.macros.set("\\cr", "\\\\\\relax"), a.gullet.beginGroup(); ; ) {
    e.push(a.parseExpression(!1, "\\\\")), a.gullet.endGroup(), a.gullet.beginGroup();
    var t = a.fetch().text;
    if (t === "&" || t === "\\\\")
      a.consume();
    else if (t === "\\end") {
      e[e.length - 1].length === 0 && e.pop();
      break;
    } else
      throw new z("Expected \\\\ or \\cr or \\end", a.nextToken);
  }
  for (var i = [], s = [i], r = 0; r < e.length; r++) {
    for (var l = e[r], c = qs(), m = 0; m < l.length; m++)
      if (!Us(l[m]))
        c.body.push(l[m]);
      else {
        i.push(c), m += 1;
        var d = Ii(l[m]).text, y = new Array(2);
        if (y[0] = {
          type: "ordgroup",
          mode: "math",
          body: []
        }, y[1] = {
          type: "ordgroup",
          mode: "math",
          body: []
        }, !("=|.".indexOf(d) > -1))
          if ("<>AV".indexOf(d) > -1)
            for (var v = 0; v < 2; v++) {
              for (var x = !0, k = m + 1; k < l.length; k++) {
                if (Hn(l[k], d)) {
                  x = !1, m = k;
                  break;
                }
                if (Us(l[k]))
                  throw new z("Missing a " + d + " character to complete a CD arrow.", l[k]);
                y[v].body.push(l[k]);
              }
              if (x)
                throw new z("Missing a " + d + " character to complete a CD arrow.", l[m]);
            }
          else
            throw new z('Expected one of "<>AV=|." after @', l[m]);
        var M = Gn(d, y, a), T = {
          type: "styling",
          body: [M],
          mode: "math",
          style: "display"
          // CD is always displaystyle.
        };
        i.push(T), c = qs();
      }
    r % 2 === 0 ? i.push(c) : i.shift(), i = [], s.push(i);
  }
  a.gullet.endGroup(), a.gullet.endGroup();
  var F = new Array(s[0].length).fill({
    type: "align",
    align: "c",
    pregap: 0.25,
    // CD package sets \enskip between columns.
    postgap: 0.25
    // So pre and post each get half an \enskip, i.e. 0.25em.
  });
  return {
    type: "array",
    mode: "math",
    body: s,
    arraystretch: 1,
    addJot: !0,
    rowGaps: [null],
    cols: F,
    colSeparationType: "CD",
    hLinesBeforeRow: new Array(s.length + 1).fill([])
  };
}
L({
  type: "cdlabel",
  names: ["\\\\cdleft", "\\\\cdright"],
  props: {
    numArgs: 1
  },
  handler(a, e) {
    var {
      parser: t,
      funcName: i
    } = a;
    return {
      type: "cdlabel",
      mode: t.mode,
      side: i.slice(4),
      label: e[0]
    };
  },
  htmlBuilder(a, e) {
    var t = e.havingStyle(e.style.sup()), i = _.wrapFragment(ae(a.label, t, e), e);
    return i.classes.push("cd-label-" + a.side), i.style.bottom = I(0.8 - i.depth), i.height = 0, i.depth = 0, i;
  },
  mathmlBuilder(a, e) {
    var t = new N.MathNode("mrow", [ne(a.label, e)]);
    return t = new N.MathNode("mpadded", [t]), t.setAttribute("width", "0"), a.side === "left" && t.setAttribute("lspace", "-1width"), t.setAttribute("voffset", "0.7em"), t = new N.MathNode("mstyle", [t]), t.setAttribute("displaystyle", "false"), t.setAttribute("scriptlevel", "1"), t;
  }
});
L({
  type: "cdlabelparent",
  names: ["\\\\cdparent"],
  props: {
    numArgs: 1
  },
  handler(a, e) {
    var {
      parser: t
    } = a;
    return {
      type: "cdlabelparent",
      mode: t.mode,
      fragment: e[0]
    };
  },
  htmlBuilder(a, e) {
    var t = _.wrapFragment(ae(a.fragment, e), e);
    return t.classes.push("cd-vert-arrow"), t;
  },
  mathmlBuilder(a, e) {
    return new N.MathNode("mrow", [ne(a.fragment, e)]);
  }
});
L({
  type: "textord",
  names: ["\\@char"],
  props: {
    numArgs: 1,
    allowedInText: !0
  },
  handler(a, e) {
    for (var {
      parser: t
    } = a, i = J(e[0], "ordgroup"), s = i.body, r = "", l = 0; l < s.length; l++) {
      var c = J(s[l], "textord");
      r += c.text;
    }
    var m = parseInt(r), d;
    if (isNaN(m))
      throw new z("\\@char has non-numeric argument " + r);
    if (m < 0 || m >= 1114111)
      throw new z("\\@char with invalid code point " + r);
    return m <= 65535 ? d = String.fromCharCode(m) : (m -= 65536, d = String.fromCharCode((m >> 10) + 55296, (m & 1023) + 56320)), {
      type: "textord",
      mode: t.mode,
      text: d
    };
  }
});
var Cr = (a, e) => {
  var t = be(a.body, e.withColor(a.color), !1);
  return _.makeFragment(t);
}, Ir = (a, e) => {
  var t = ze(a.body, e.withColor(a.color)), i = new N.MathNode("mstyle", t);
  return i.setAttribute("mathcolor", a.color), i;
};
L({
  type: "color",
  names: ["\\textcolor"],
  props: {
    numArgs: 2,
    allowedInText: !0,
    argTypes: ["color", "original"]
  },
  handler(a, e) {
    var {
      parser: t
    } = a, i = J(e[0], "color-token").color, s = e[1];
    return {
      type: "color",
      mode: t.mode,
      color: i,
      body: he(s)
    };
  },
  htmlBuilder: Cr,
  mathmlBuilder: Ir
});
L({
  type: "color",
  names: ["\\color"],
  props: {
    numArgs: 1,
    allowedInText: !0,
    argTypes: ["color"]
  },
  handler(a, e) {
    var {
      parser: t,
      breakOnTokenText: i
    } = a, s = J(e[0], "color-token").color;
    t.gullet.macros.set("\\current@color", s);
    var r = t.parseExpression(!0, i);
    return {
      type: "color",
      mode: t.mode,
      color: s,
      body: r
    };
  },
  htmlBuilder: Cr,
  mathmlBuilder: Ir
});
L({
  type: "cr",
  names: ["\\\\"],
  props: {
    numArgs: 0,
    numOptionalArgs: 0,
    allowedInText: !0
  },
  handler(a, e, t) {
    var {
      parser: i
    } = a, s = i.gullet.future().text === "[" ? i.parseSizeGroup(!0) : null, r = !i.settings.displayMode || !i.settings.useStrictBehavior("newLineInDisplayMode", "In LaTeX, \\\\ or \\newline does nothing in display mode");
    return {
      type: "cr",
      mode: i.mode,
      newLine: r,
      size: s && J(s, "size").value
    };
  },
  // The following builders are called only at the top level,
  // not within tabular/array environments.
  htmlBuilder(a, e) {
    var t = _.makeSpan(["mspace"], [], e);
    return a.newLine && (t.classes.push("newline"), a.size && (t.style.marginTop = I(ue(a.size, e)))), t;
  },
  mathmlBuilder(a, e) {
    var t = new N.MathNode("mspace");
    return a.newLine && (t.setAttribute("linebreak", "newline"), a.size && t.setAttribute("height", I(ue(a.size, e)))), t;
  }
});
var Ai = {
  "\\global": "\\global",
  "\\long": "\\\\globallong",
  "\\\\globallong": "\\\\globallong",
  "\\def": "\\gdef",
  "\\gdef": "\\gdef",
  "\\edef": "\\xdef",
  "\\xdef": "\\xdef",
  "\\let": "\\\\globallet",
  "\\futurelet": "\\\\globalfuture"
}, Rr = (a) => {
  var e = a.text;
  if (/^(?:[\\{}$&#^_]|EOF)$/.test(e))
    throw new z("Expected a control sequence", a);
  return e;
}, Vn = (a) => {
  var e = a.gullet.popToken();
  return e.text === "=" && (e = a.gullet.popToken(), e.text === " " && (e = a.gullet.popToken())), e;
}, Lr = (a, e, t, i) => {
  var s = a.gullet.macros.get(t.text);
  s == null && (t.noexpand = !0, s = {
    tokens: [t],
    numArgs: 0,
    // reproduce the same behavior in expansion
    unexpandable: !a.gullet.isExpandable(t.text)
  }), a.gullet.macros.set(e, s, i);
};
L({
  type: "internal",
  names: [
    "\\global",
    "\\long",
    "\\\\globallong"
    // can’t be entered directly
  ],
  props: {
    numArgs: 0,
    allowedInText: !0
  },
  handler(a) {
    var {
      parser: e,
      funcName: t
    } = a;
    e.consumeSpaces();
    var i = e.fetch();
    if (Ai[i.text])
      return (t === "\\global" || t === "\\\\globallong") && (i.text = Ai[i.text]), J(e.parseFunction(), "internal");
    throw new z("Invalid token after macro prefix", i);
  }
});
L({
  type: "internal",
  names: ["\\def", "\\gdef", "\\edef", "\\xdef"],
  props: {
    numArgs: 0,
    allowedInText: !0,
    primitive: !0
  },
  handler(a) {
    var {
      parser: e,
      funcName: t
    } = a, i = e.gullet.popToken(), s = i.text;
    if (/^(?:[\\{}$&#^_]|EOF)$/.test(s))
      throw new z("Expected a control sequence", i);
    for (var r = 0, l, c = [[]]; e.gullet.future().text !== "{"; )
      if (i = e.gullet.popToken(), i.text === "#") {
        if (e.gullet.future().text === "{") {
          l = e.gullet.future(), c[r].push("{");
          break;
        }
        if (i = e.gullet.popToken(), !/^[1-9]$/.test(i.text))
          throw new z('Invalid argument number "' + i.text + '"');
        if (parseInt(i.text) !== r + 1)
          throw new z('Argument number "' + i.text + '" out of order');
        r++, c.push([]);
      } else {
        if (i.text === "EOF")
          throw new z("Expected a macro definition");
        c[r].push(i.text);
      }
    var {
      tokens: m
    } = e.gullet.consumeArg();
    return l && m.unshift(l), (t === "\\edef" || t === "\\xdef") && (m = e.gullet.expandTokens(m), m.reverse()), e.gullet.macros.set(s, {
      tokens: m,
      numArgs: r,
      delimiters: c
    }, t === Ai[t]), {
      type: "internal",
      mode: e.mode
    };
  }
});
L({
  type: "internal",
  names: [
    "\\let",
    "\\\\globallet"
    // can’t be entered directly
  ],
  props: {
    numArgs: 0,
    allowedInText: !0,
    primitive: !0
  },
  handler(a) {
    var {
      parser: e,
      funcName: t
    } = a, i = Rr(e.gullet.popToken());
    e.gullet.consumeSpaces();
    var s = Vn(e);
    return Lr(e, i, s, t === "\\\\globallet"), {
      type: "internal",
      mode: e.mode
    };
  }
});
L({
  type: "internal",
  names: [
    "\\futurelet",
    "\\\\globalfuture"
    // can’t be entered directly
  ],
  props: {
    numArgs: 0,
    allowedInText: !0,
    primitive: !0
  },
  handler(a) {
    var {
      parser: e,
      funcName: t
    } = a, i = Rr(e.gullet.popToken()), s = e.gullet.popToken(), r = e.gullet.popToken();
    return Lr(e, i, r, t === "\\\\globalfuture"), e.gullet.pushToken(r), e.gullet.pushToken(s), {
      type: "internal",
      mode: e.mode
    };
  }
});
var ta = function(e, t, i) {
  var s = ce.math[e] && ce.math[e].replace, r = Di(s || e, t, i);
  if (!r)
    throw new Error("Unsupported symbol " + e + " and font size " + t + ".");
  return r;
}, Li = function(e, t, i, s) {
  var r = i.havingBaseStyle(t), l = _.makeSpan(s.concat(r.sizingClasses(i)), [e], i), c = r.sizeMultiplier / i.sizeMultiplier;
  return l.height *= c, l.depth *= c, l.maxFontSize = r.sizeMultiplier, l;
}, qr = function(e, t, i) {
  var s = t.havingBaseStyle(i), r = (1 - t.sizeMultiplier / s.sizeMultiplier) * t.fontMetrics().axisHeight;
  e.classes.push("delimcenter"), e.style.top = I(r), e.height -= r, e.depth += r;
}, Wn = function(e, t, i, s, r, l) {
  var c = _.makeSymbol(e, "Main-Regular", r, s), m = Li(c, t, s, l);
  return i && qr(m, s, t), m;
}, Yn = function(e, t, i, s) {
  return _.makeSymbol(e, "Size" + t + "-Regular", i, s);
}, Ur = function(e, t, i, s, r, l) {
  var c = Yn(e, t, r, s), m = Li(_.makeSpan(["delimsizing", "size" + t], [c], s), V.TEXT, s, l);
  return i && qr(m, s, V.TEXT), m;
}, oi = function(e, t, i) {
  var s;
  t === "Size1-Regular" ? s = "delim-size1" : s = "delim-size4";
  var r = _.makeSpan(["delimsizinginner", s], [_.makeSpan([], [_.makeSymbol(e, t, i)])]);
  return {
    type: "elem",
    elem: r
  };
}, ni = function(e, t, i) {
  var s = tt["Size4-Regular"][e.charCodeAt(0)] ? tt["Size4-Regular"][e.charCodeAt(0)][4] : tt["Size1-Regular"][e.charCodeAt(0)][4], r = new jt("inner", Q0(e, Math.round(1e3 * t))), l = new dt([r], {
    width: I(s),
    height: I(t),
    // Override CSS rule `.katex svg { width: 100% }`
    style: "width:" + I(s),
    viewBox: "0 0 " + 1e3 * s + " " + Math.round(1e3 * t),
    preserveAspectRatio: "xMinYMin"
  }), c = _.makeSvgSpan([], [l], i);
  return c.height = t, c.style.height = I(t), c.style.width = I(s), {
    type: "elem",
    elem: c
  };
}, Ti = 8e-3, _a = {
  type: "kern",
  size: -1 * Ti
}, Xn = ["|", "\\lvert", "\\rvert", "\\vert"], Kn = ["\\|", "\\lVert", "\\rVert", "\\Vert"], Hr = function(e, t, i, s, r, l) {
  var c, m, d, y, v = "", x = 0;
  c = d = y = e, m = null;
  var k = "Size1-Regular";
  e === "\\uparrow" ? d = y = "⏐" : e === "\\Uparrow" ? d = y = "‖" : e === "\\downarrow" ? c = d = "⏐" : e === "\\Downarrow" ? c = d = "‖" : e === "\\updownarrow" ? (c = "\\uparrow", d = "⏐", y = "\\downarrow") : e === "\\Updownarrow" ? (c = "\\Uparrow", d = "‖", y = "\\Downarrow") : X.contains(Xn, e) ? (d = "∣", v = "vert", x = 333) : X.contains(Kn, e) ? (d = "∥", v = "doublevert", x = 556) : e === "[" || e === "\\lbrack" ? (c = "⎡", d = "⎢", y = "⎣", k = "Size4-Regular", v = "lbrack", x = 667) : e === "]" || e === "\\rbrack" ? (c = "⎤", d = "⎥", y = "⎦", k = "Size4-Regular", v = "rbrack", x = 667) : e === "\\lfloor" || e === "⌊" ? (d = c = "⎢", y = "⎣", k = "Size4-Regular", v = "lfloor", x = 667) : e === "\\lceil" || e === "⌈" ? (c = "⎡", d = y = "⎢", k = "Size4-Regular", v = "lceil", x = 667) : e === "\\rfloor" || e === "⌋" ? (d = c = "⎥", y = "⎦", k = "Size4-Regular", v = "rfloor", x = 667) : e === "\\rceil" || e === "⌉" ? (c = "⎤", d = y = "⎥", k = "Size4-Regular", v = "rceil", x = 667) : e === "(" || e === "\\lparen" ? (c = "⎛", d = "⎜", y = "⎝", k = "Size4-Regular", v = "lparen", x = 875) : e === ")" || e === "\\rparen" ? (c = "⎞", d = "⎟", y = "⎠", k = "Size4-Regular", v = "rparen", x = 875) : e === "\\{" || e === "\\lbrace" ? (c = "⎧", m = "⎨", y = "⎩", d = "⎪", k = "Size4-Regular") : e === "\\}" || e === "\\rbrace" ? (c = "⎫", m = "⎬", y = "⎭", d = "⎪", k = "Size4-Regular") : e === "\\lgroup" || e === "⟮" ? (c = "⎧", y = "⎩", d = "⎪", k = "Size4-Regular") : e === "\\rgroup" || e === "⟯" ? (c = "⎫", y = "⎭", d = "⎪", k = "Size4-Regular") : e === "\\lmoustache" || e === "⎰" ? (c = "⎧", y = "⎭", d = "⎪", k = "Size4-Regular") : (e === "\\rmoustache" || e === "⎱") && (c = "⎫", y = "⎩", d = "⎪", k = "Size4-Regular");
  var M = ta(c, k, r), T = M.height + M.depth, F = ta(d, k, r), O = F.height + F.depth, w = ta(y, k, r), f = w.height + w.depth, S = 0, A = 1;
  if (m !== null) {
    var E = ta(m, k, r);
    S = E.height + E.depth, A = 2;
  }
  var P = T + f + S, R = Math.max(0, Math.ceil((t - P) / (A * O))), B = P + R * A * O, K = s.fontMetrics().axisHeight;
  i && (K *= s.sizeMultiplier);
  var Z = B / 2 - K, Q = [];
  if (v.length > 0) {
    var pe = B - T - f, q = Math.round(B * 1e3), W = en(v, Math.round(pe * 1e3)), ye = new jt(v, W), ke = (x / 1e3).toFixed(3) + "em", re = (q / 1e3).toFixed(3) + "em", te = new dt([ye], {
      width: ke,
      height: re,
      viewBox: "0 0 " + x + " " + q
    }), ve = _.makeSvgSpan([], [te], s);
    ve.height = q / 1e3, ve.style.width = ke, ve.style.height = re, Q.push({
      type: "elem",
      elem: ve
    });
  } else {
    if (Q.push(oi(y, k, r)), Q.push(_a), m === null) {
      var ie = B - T - f + 2 * Ti;
      Q.push(ni(d, ie, s));
    } else {
      var oe = (B - T - f - S) / 2 + 2 * Ti;
      Q.push(ni(d, oe, s)), Q.push(_a), Q.push(oi(m, k, r)), Q.push(_a), Q.push(ni(d, oe, s));
    }
    Q.push(_a), Q.push(oi(c, k, r));
  }
  var se = s.havingBaseStyle(V.TEXT), we = _.makeVList({
    positionType: "bottom",
    positionData: Z,
    children: Q
  }, se);
  return Li(_.makeSpan(["delimsizing", "mult"], [we], se), V.TEXT, s, l);
}, li = 80, ci = 0.08, mi = function(e, t, i, s, r) {
  var l = J0(e, s, i), c = new jt(e, l), m = new dt([c], {
    // Note: 1000:1 ratio of viewBox to document em width.
    width: "400em",
    height: I(t),
    viewBox: "0 0 400000 " + i,
    preserveAspectRatio: "xMinYMin slice"
  });
  return _.makeSvgSpan(["hide-tail"], [m], r);
}, Zn = function(e, t) {
  var i = t.havingBaseSizing(), s = Wr("\\surd", e * i.sizeMultiplier, Vr, i), r = i.sizeMultiplier, l = Math.max(0, t.minRuleThickness - t.fontMetrics().sqrtRuleThickness), c, m = 0, d = 0, y = 0, v;
  return s.type === "small" ? (y = 1e3 + 1e3 * l + li, e < 1 ? r = 1 : e < 1.4 && (r = 0.7), m = (1 + l + ci) / r, d = (1 + l) / r, c = mi("sqrtMain", m, y, l, t), c.style.minWidth = "0.853em", v = 0.833 / r) : s.type === "large" ? (y = (1e3 + li) * ia[s.size], d = (ia[s.size] + l) / r, m = (ia[s.size] + l + ci) / r, c = mi("sqrtSize" + s.size, m, y, l, t), c.style.minWidth = "1.02em", v = 1 / r) : (m = e + l + ci, d = e + l, y = Math.floor(1e3 * e + l) + li, c = mi("sqrtTall", m, y, l, t), c.style.minWidth = "0.742em", v = 1.056), c.height = d, c.style.height = I(m), {
    span: c,
    advanceWidth: v,
    // Calculate the actual line width.
    // This actually should depend on the chosen font -- e.g. \boldmath
    // should use the thicker surd symbols from e.g. KaTeX_Main-Bold, and
    // have thicker rules.
    ruleWidth: (t.fontMetrics().sqrtRuleThickness + l) * r
  };
}, Gr = ["(", "\\lparen", ")", "\\rparen", "[", "\\lbrack", "]", "\\rbrack", "\\{", "\\lbrace", "\\}", "\\rbrace", "\\lfloor", "\\rfloor", "⌊", "⌋", "\\lceil", "\\rceil", "⌈", "⌉", "\\surd"], Jn = ["\\uparrow", "\\downarrow", "\\updownarrow", "\\Uparrow", "\\Downarrow", "\\Updownarrow", "|", "\\|", "\\vert", "\\Vert", "\\lvert", "\\rvert", "\\lVert", "\\rVert", "\\lgroup", "\\rgroup", "⟮", "⟯", "\\lmoustache", "\\rmoustache", "⎰", "⎱"], $r = ["<", ">", "\\langle", "\\rangle", "/", "\\backslash", "\\lt", "\\gt"], ia = [0, 1.2, 1.8, 2.4, 3], Qn = function(e, t, i, s, r) {
  if (e === "<" || e === "\\lt" || e === "⟨" ? e = "\\langle" : (e === ">" || e === "\\gt" || e === "⟩") && (e = "\\rangle"), X.contains(Gr, e) || X.contains($r, e))
    return Ur(e, t, !1, i, s, r);
  if (X.contains(Jn, e))
    return Hr(e, ia[t], !1, i, s, r);
  throw new z("Illegal delimiter: '" + e + "'");
}, el = [{
  type: "small",
  style: V.SCRIPTSCRIPT
}, {
  type: "small",
  style: V.SCRIPT
}, {
  type: "small",
  style: V.TEXT
}, {
  type: "large",
  size: 1
}, {
  type: "large",
  size: 2
}, {
  type: "large",
  size: 3
}, {
  type: "large",
  size: 4
}], tl = [{
  type: "small",
  style: V.SCRIPTSCRIPT
}, {
  type: "small",
  style: V.SCRIPT
}, {
  type: "small",
  style: V.TEXT
}, {
  type: "stack"
}], Vr = [{
  type: "small",
  style: V.SCRIPTSCRIPT
}, {
  type: "small",
  style: V.SCRIPT
}, {
  type: "small",
  style: V.TEXT
}, {
  type: "large",
  size: 1
}, {
  type: "large",
  size: 2
}, {
  type: "large",
  size: 3
}, {
  type: "large",
  size: 4
}, {
  type: "stack"
}], al = function(e) {
  if (e.type === "small")
    return "Main-Regular";
  if (e.type === "large")
    return "Size" + e.size + "-Regular";
  if (e.type === "stack")
    return "Size4-Regular";
  throw new Error("Add support for delim type '" + e.type + "' here.");
}, Wr = function(e, t, i, s) {
  for (var r = Math.min(2, 3 - s.style.size), l = r; l < i.length && i[l].type !== "stack"; l++) {
    var c = ta(e, al(i[l]), "math"), m = c.height + c.depth;
    if (i[l].type === "small") {
      var d = s.havingBaseStyle(i[l].style);
      m *= d.sizeMultiplier;
    }
    if (m > t)
      return i[l];
  }
  return i[i.length - 1];
}, Yr = function(e, t, i, s, r, l) {
  e === "<" || e === "\\lt" || e === "⟨" ? e = "\\langle" : (e === ">" || e === "\\gt" || e === "⟩") && (e = "\\rangle");
  var c;
  X.contains($r, e) ? c = el : X.contains(Gr, e) ? c = Vr : c = tl;
  var m = Wr(e, t, c, s);
  return m.type === "small" ? Wn(e, m.style, i, s, r, l) : m.type === "large" ? Ur(e, m.size, i, s, r, l) : Hr(e, t, i, s, r, l);
}, il = function(e, t, i, s, r, l) {
  var c = s.fontMetrics().axisHeight * s.sizeMultiplier, m = 901, d = 5 / s.fontMetrics().ptPerEm, y = Math.max(t - c, i + c), v = Math.max(
    // In real TeX, calculations are done using integral values which are
    // 65536 per pt, or 655360 per em. So, the division here truncates in
    // TeX but doesn't here, producing different results. If we wanted to
    // exactly match TeX's calculation, we could do
    //   Math.floor(655360 * maxDistFromAxis / 500) *
    //    delimiterFactor / 655360
    // (To see the difference, compare
    //    x^{x^{\left(\rule{0.1em}{0.68em}\right)}}
    // in TeX and KaTeX)
    y / 500 * m,
    2 * y - d
  );
  return Yr(e, v, !0, s, r, l);
}, ut = {
  sqrtImage: Zn,
  sizedDelim: Qn,
  sizeToMaxHeight: ia,
  customSizedDelim: Yr,
  leftRightDelim: il
}, Hs = {
  "\\bigl": {
    mclass: "mopen",
    size: 1
  },
  "\\Bigl": {
    mclass: "mopen",
    size: 2
  },
  "\\biggl": {
    mclass: "mopen",
    size: 3
  },
  "\\Biggl": {
    mclass: "mopen",
    size: 4
  },
  "\\bigr": {
    mclass: "mclose",
    size: 1
  },
  "\\Bigr": {
    mclass: "mclose",
    size: 2
  },
  "\\biggr": {
    mclass: "mclose",
    size: 3
  },
  "\\Biggr": {
    mclass: "mclose",
    size: 4
  },
  "\\bigm": {
    mclass: "mrel",
    size: 1
  },
  "\\Bigm": {
    mclass: "mrel",
    size: 2
  },
  "\\biggm": {
    mclass: "mrel",
    size: 3
  },
  "\\Biggm": {
    mclass: "mrel",
    size: 4
  },
  "\\big": {
    mclass: "mord",
    size: 1
  },
  "\\Big": {
    mclass: "mord",
    size: 2
  },
  "\\bigg": {
    mclass: "mord",
    size: 3
  },
  "\\Bigg": {
    mclass: "mord",
    size: 4
  }
}, sl = ["(", "\\lparen", ")", "\\rparen", "[", "\\lbrack", "]", "\\rbrack", "\\{", "\\lbrace", "\\}", "\\rbrace", "\\lfloor", "\\rfloor", "⌊", "⌋", "\\lceil", "\\rceil", "⌈", "⌉", "<", ">", "\\langle", "⟨", "\\rangle", "⟩", "\\lt", "\\gt", "\\lvert", "\\rvert", "\\lVert", "\\rVert", "\\lgroup", "\\rgroup", "⟮", "⟯", "\\lmoustache", "\\rmoustache", "⎰", "⎱", "/", "\\backslash", "|", "\\vert", "\\|", "\\Vert", "\\uparrow", "\\Uparrow", "\\downarrow", "\\Downarrow", "\\updownarrow", "\\Updownarrow", "."];
function La(a, e) {
  var t = Ia(a);
  if (t && X.contains(sl, t.text))
    return t;
  throw t ? new z("Invalid delimiter '" + t.text + "' after '" + e.funcName + "'", a) : new z("Invalid delimiter type '" + a.type + "'", a);
}
L({
  type: "delimsizing",
  names: ["\\bigl", "\\Bigl", "\\biggl", "\\Biggl", "\\bigr", "\\Bigr", "\\biggr", "\\Biggr", "\\bigm", "\\Bigm", "\\biggm", "\\Biggm", "\\big", "\\Big", "\\bigg", "\\Bigg"],
  props: {
    numArgs: 1,
    argTypes: ["primitive"]
  },
  handler: (a, e) => {
    var t = La(e[0], a);
    return {
      type: "delimsizing",
      mode: a.parser.mode,
      size: Hs[a.funcName].size,
      mclass: Hs[a.funcName].mclass,
      delim: t.text
    };
  },
  htmlBuilder: (a, e) => a.delim === "." ? _.makeSpan([a.mclass]) : ut.sizedDelim(a.delim, a.size, e, a.mode, [a.mclass]),
  mathmlBuilder: (a) => {
    var e = [];
    a.delim !== "." && e.push(Ve(a.delim, a.mode));
    var t = new N.MathNode("mo", e);
    a.mclass === "mopen" || a.mclass === "mclose" ? t.setAttribute("fence", "true") : t.setAttribute("fence", "false"), t.setAttribute("stretchy", "true");
    var i = I(ut.sizeToMaxHeight[a.size]);
    return t.setAttribute("minsize", i), t.setAttribute("maxsize", i), t;
  }
});
function Gs(a) {
  if (!a.body)
    throw new Error("Bug: The leftright ParseNode wasn't fully parsed.");
}
L({
  type: "leftright-right",
  names: ["\\right"],
  props: {
    numArgs: 1,
    primitive: !0
  },
  handler: (a, e) => {
    var t = a.parser.gullet.macros.get("\\current@color");
    if (t && typeof t != "string")
      throw new z("\\current@color set to non-string in \\right");
    return {
      type: "leftright-right",
      mode: a.parser.mode,
      delim: La(e[0], a).text,
      color: t
      // undefined if not set via \color
    };
  }
});
L({
  type: "leftright",
  names: ["\\left"],
  props: {
    numArgs: 1,
    primitive: !0
  },
  handler: (a, e) => {
    var t = La(e[0], a), i = a.parser;
    ++i.leftrightDepth;
    var s = i.parseExpression(!1);
    --i.leftrightDepth, i.expect("\\right", !1);
    var r = J(i.parseFunction(), "leftright-right");
    return {
      type: "leftright",
      mode: i.mode,
      body: s,
      left: t.text,
      right: r.delim,
      rightColor: r.color
    };
  },
  htmlBuilder: (a, e) => {
    Gs(a);
    for (var t = be(a.body, e, !0, ["mopen", "mclose"]), i = 0, s = 0, r = !1, l = 0; l < t.length; l++)
      t[l].isMiddle ? r = !0 : (i = Math.max(t[l].height, i), s = Math.max(t[l].depth, s));
    i *= e.sizeMultiplier, s *= e.sizeMultiplier;
    var c;
    if (a.left === "." ? c = ra(e, ["mopen"]) : c = ut.leftRightDelim(a.left, i, s, e, a.mode, ["mopen"]), t.unshift(c), r)
      for (var m = 1; m < t.length; m++) {
        var d = t[m], y = d.isMiddle;
        y && (t[m] = ut.leftRightDelim(y.delim, i, s, y.options, a.mode, []));
      }
    var v;
    if (a.right === ".")
      v = ra(e, ["mclose"]);
    else {
      var x = a.rightColor ? e.withColor(a.rightColor) : e;
      v = ut.leftRightDelim(a.right, i, s, x, a.mode, ["mclose"]);
    }
    return t.push(v), _.makeSpan(["minner"], t, e);
  },
  mathmlBuilder: (a, e) => {
    Gs(a);
    var t = ze(a.body, e);
    if (a.left !== ".") {
      var i = new N.MathNode("mo", [Ve(a.left, a.mode)]);
      i.setAttribute("fence", "true"), t.unshift(i);
    }
    if (a.right !== ".") {
      var s = new N.MathNode("mo", [Ve(a.right, a.mode)]);
      s.setAttribute("fence", "true"), a.rightColor && s.setAttribute("mathcolor", a.rightColor), t.push(s);
    }
    return zi(t);
  }
});
L({
  type: "middle",
  names: ["\\middle"],
  props: {
    numArgs: 1,
    primitive: !0
  },
  handler: (a, e) => {
    var t = La(e[0], a);
    if (!a.parser.leftrightDepth)
      throw new z("\\middle without preceding \\left", t);
    return {
      type: "middle",
      mode: a.parser.mode,
      delim: t.text
    };
  },
  htmlBuilder: (a, e) => {
    var t;
    if (a.delim === ".")
      t = ra(e, []);
    else {
      t = ut.sizedDelim(a.delim, 1, e, a.mode, []);
      var i = {
        delim: a.delim,
        options: e
      };
      t.isMiddle = i;
    }
    return t;
  },
  mathmlBuilder: (a, e) => {
    var t = a.delim === "\\vert" || a.delim === "|" ? Ve("|", "text") : Ve(a.delim, a.mode), i = new N.MathNode("mo", [t]);
    return i.setAttribute("fence", "true"), i.setAttribute("lspace", "0.05em"), i.setAttribute("rspace", "0.05em"), i;
  }
});
var qi = (a, e) => {
  var t = _.wrapFragment(ae(a.body, e), e), i = a.label.slice(1), s = e.sizeMultiplier, r, l = 0, c = X.isCharacterBox(a.body);
  if (i === "sout")
    r = _.makeSpan(["stretchy", "sout"]), r.height = e.fontMetrics().defaultRuleThickness / s, l = -0.5 * e.fontMetrics().xHeight;
  else if (i === "phase") {
    var m = ue({
      number: 0.6,
      unit: "pt"
    }, e), d = ue({
      number: 0.35,
      unit: "ex"
    }, e), y = e.havingBaseSizing();
    s = s / y.sizeMultiplier;
    var v = t.height + t.depth + m + d;
    t.style.paddingLeft = I(v / 2 + m);
    var x = Math.floor(1e3 * v * s), k = K0(x), M = new dt([new jt("phase", k)], {
      width: "400em",
      height: I(x / 1e3),
      viewBox: "0 0 400000 " + x,
      preserveAspectRatio: "xMinYMin slice"
    });
    r = _.makeSvgSpan(["hide-tail"], [M], e), r.style.height = I(v), l = t.depth + m + d;
  } else {
    /cancel/.test(i) ? c || t.classes.push("cancel-pad") : i === "angl" ? t.classes.push("anglpad") : t.classes.push("boxpad");
    var T = 0, F = 0, O = 0;
    /box/.test(i) ? (O = Math.max(
      e.fontMetrics().fboxrule,
      // default
      e.minRuleThickness
      // User override.
    ), T = e.fontMetrics().fboxsep + (i === "colorbox" ? 0 : O), F = T) : i === "angl" ? (O = Math.max(e.fontMetrics().defaultRuleThickness, e.minRuleThickness), T = 4 * O, F = Math.max(0, 0.25 - t.depth)) : (T = c ? 0.2 : 0, F = T), r = ht.encloseSpan(t, i, T, F, e), /fbox|boxed|fcolorbox/.test(i) ? (r.style.borderStyle = "solid", r.style.borderWidth = I(O)) : i === "angl" && O !== 0.049 && (r.style.borderTopWidth = I(O), r.style.borderRightWidth = I(O)), l = t.depth + F, a.backgroundColor && (r.style.backgroundColor = a.backgroundColor, a.borderColor && (r.style.borderColor = a.borderColor));
  }
  var w;
  if (a.backgroundColor)
    w = _.makeVList({
      positionType: "individualShift",
      children: [
        // Put the color background behind inner;
        {
          type: "elem",
          elem: r,
          shift: l
        },
        {
          type: "elem",
          elem: t,
          shift: 0
        }
      ]
    }, e);
  else {
    var f = /cancel|phase/.test(i) ? ["svg-align"] : [];
    w = _.makeVList({
      positionType: "individualShift",
      children: [
        // Write the \cancel stroke on top of inner.
        {
          type: "elem",
          elem: t,
          shift: 0
        },
        {
          type: "elem",
          elem: r,
          shift: l,
          wrapperClasses: f
        }
      ]
    }, e);
  }
  return /cancel/.test(i) && (w.height = t.height, w.depth = t.depth), /cancel/.test(i) && !c ? _.makeSpan(["mord", "cancel-lap"], [w], e) : _.makeSpan(["mord"], [w], e);
}, Ui = (a, e) => {
  var t = 0, i = new N.MathNode(a.label.indexOf("colorbox") > -1 ? "mpadded" : "menclose", [ne(a.body, e)]);
  switch (a.label) {
    case "\\cancel":
      i.setAttribute("notation", "updiagonalstrike");
      break;
    case "\\bcancel":
      i.setAttribute("notation", "downdiagonalstrike");
      break;
    case "\\phase":
      i.setAttribute("notation", "phasorangle");
      break;
    case "\\sout":
      i.setAttribute("notation", "horizontalstrike");
      break;
    case "\\fbox":
      i.setAttribute("notation", "box");
      break;
    case "\\angl":
      i.setAttribute("notation", "actuarial");
      break;
    case "\\fcolorbox":
    case "\\colorbox":
      if (t = e.fontMetrics().fboxsep * e.fontMetrics().ptPerEm, i.setAttribute("width", "+" + 2 * t + "pt"), i.setAttribute("height", "+" + 2 * t + "pt"), i.setAttribute("lspace", t + "pt"), i.setAttribute("voffset", t + "pt"), a.label === "\\fcolorbox") {
        var s = Math.max(
          e.fontMetrics().fboxrule,
          // default
          e.minRuleThickness
          // user override
        );
        i.setAttribute("style", "border: " + s + "em solid " + String(a.borderColor));
      }
      break;
    case "\\xcancel":
      i.setAttribute("notation", "updiagonalstrike downdiagonalstrike");
      break;
  }
  return a.backgroundColor && i.setAttribute("mathbackground", a.backgroundColor), i;
};
L({
  type: "enclose",
  names: ["\\colorbox"],
  props: {
    numArgs: 2,
    allowedInText: !0,
    argTypes: ["color", "text"]
  },
  handler(a, e, t) {
    var {
      parser: i,
      funcName: s
    } = a, r = J(e[0], "color-token").color, l = e[1];
    return {
      type: "enclose",
      mode: i.mode,
      label: s,
      backgroundColor: r,
      body: l
    };
  },
  htmlBuilder: qi,
  mathmlBuilder: Ui
});
L({
  type: "enclose",
  names: ["\\fcolorbox"],
  props: {
    numArgs: 3,
    allowedInText: !0,
    argTypes: ["color", "color", "text"]
  },
  handler(a, e, t) {
    var {
      parser: i,
      funcName: s
    } = a, r = J(e[0], "color-token").color, l = J(e[1], "color-token").color, c = e[2];
    return {
      type: "enclose",
      mode: i.mode,
      label: s,
      backgroundColor: l,
      borderColor: r,
      body: c
    };
  },
  htmlBuilder: qi,
  mathmlBuilder: Ui
});
L({
  type: "enclose",
  names: ["\\fbox"],
  props: {
    numArgs: 1,
    argTypes: ["hbox"],
    allowedInText: !0
  },
  handler(a, e) {
    var {
      parser: t
    } = a;
    return {
      type: "enclose",
      mode: t.mode,
      label: "\\fbox",
      body: e[0]
    };
  }
});
L({
  type: "enclose",
  names: ["\\cancel", "\\bcancel", "\\xcancel", "\\sout", "\\phase"],
  props: {
    numArgs: 1
  },
  handler(a, e) {
    var {
      parser: t,
      funcName: i
    } = a, s = e[0];
    return {
      type: "enclose",
      mode: t.mode,
      label: i,
      body: s
    };
  },
  htmlBuilder: qi,
  mathmlBuilder: Ui
});
L({
  type: "enclose",
  names: ["\\angl"],
  props: {
    numArgs: 1,
    argTypes: ["hbox"],
    allowedInText: !1
  },
  handler(a, e) {
    var {
      parser: t
    } = a;
    return {
      type: "enclose",
      mode: t.mode,
      label: "\\angl",
      body: e[0]
    };
  }
});
var Xr = {};
function it(a) {
  for (var {
    type: e,
    names: t,
    props: i,
    handler: s,
    htmlBuilder: r,
    mathmlBuilder: l
  } = a, c = {
    type: e,
    numArgs: i.numArgs || 0,
    allowedInText: !1,
    numOptionalArgs: 0,
    handler: s
  }, m = 0; m < t.length; ++m)
    Xr[t[m]] = c;
  r && (Da[e] = r), l && (Oa[e] = l);
}
var Kr = {};
function u(a, e) {
  Kr[a] = e;
}
function $s(a) {
  var e = [];
  a.consumeSpaces();
  var t = a.fetch().text;
  for (t === "\\relax" && (a.consume(), a.consumeSpaces(), t = a.fetch().text); t === "\\hline" || t === "\\hdashline"; )
    a.consume(), e.push(t === "\\hdashline"), a.consumeSpaces(), t = a.fetch().text;
  return e;
}
var qa = (a) => {
  var e = a.parser.settings;
  if (!e.displayMode)
    throw new z("{" + a.envName + "} can be used only in display mode.");
};
function Hi(a) {
  if (a.indexOf("ed") === -1)
    return a.indexOf("*") === -1;
}
function _t(a, e, t) {
  var {
    hskipBeforeAndAfter: i,
    addJot: s,
    cols: r,
    arraystretch: l,
    colSeparationType: c,
    autoTag: m,
    singleRow: d,
    emptySingleRow: y,
    maxNumCols: v,
    leqno: x
  } = e;
  if (a.gullet.beginGroup(), d || a.gullet.macros.set("\\cr", "\\\\\\relax"), !l) {
    var k = a.gullet.expandMacroAsText("\\arraystretch");
    if (k == null)
      l = 1;
    else if (l = parseFloat(k), !l || l < 0)
      throw new z("Invalid \\arraystretch: " + k);
  }
  a.gullet.beginGroup();
  var M = [], T = [M], F = [], O = [], w = m != null ? [] : void 0;
  function f() {
    m && a.gullet.macros.set("\\@eqnsw", "1", !0);
  }
  function S() {
    w && (a.gullet.macros.get("\\df@tag") ? (w.push(a.subparse([new at("\\df@tag")])), a.gullet.macros.set("\\df@tag", void 0, !0)) : w.push(!!m && a.gullet.macros.get("\\@eqnsw") === "1"));
  }
  for (f(), O.push($s(a)); ; ) {
    var A = a.parseExpression(!1, d ? "\\end" : "\\\\");
    a.gullet.endGroup(), a.gullet.beginGroup(), A = {
      type: "ordgroup",
      mode: a.mode,
      body: A
    }, t && (A = {
      type: "styling",
      mode: a.mode,
      style: t,
      body: [A]
    }), M.push(A);
    var E = a.fetch().text;
    if (E === "&") {
      if (v && M.length === v) {
        if (d || c)
          throw new z("Too many tab characters: &", a.nextToken);
        a.settings.reportNonstrict("textEnv", "Too few columns specified in the {array} column argument.");
      }
      a.consume();
    } else if (E === "\\end") {
      S(), M.length === 1 && A.type === "styling" && A.body[0].body.length === 0 && (T.length > 1 || !y) && T.pop(), O.length < T.length + 1 && O.push([]);
      break;
    } else if (E === "\\\\") {
      a.consume();
      var P = void 0;
      a.gullet.future().text !== " " && (P = a.parseSizeGroup(!0)), F.push(P ? P.value : null), S(), O.push($s(a)), M = [], T.push(M), f();
    } else
      throw new z("Expected & or \\\\ or \\cr or \\end", a.nextToken);
  }
  return a.gullet.endGroup(), a.gullet.endGroup(), {
    type: "array",
    mode: a.mode,
    addJot: s,
    arraystretch: l,
    body: T,
    cols: r,
    rowGaps: F,
    hskipBeforeAndAfter: i,
    hLinesBeforeRow: O,
    colSeparationType: c,
    tags: w,
    leqno: x
  };
}
function Gi(a) {
  return a.slice(0, 1) === "d" ? "display" : "text";
}
var st = function(e, t) {
  var i, s, r = e.body.length, l = e.hLinesBeforeRow, c = 0, m = new Array(r), d = [], y = Math.max(
    // From LaTeX \showthe\arrayrulewidth. Equals 0.04 em.
    t.fontMetrics().arrayRuleWidth,
    t.minRuleThickness
    // User override.
  ), v = 1 / t.fontMetrics().ptPerEm, x = 5 * v;
  if (e.colSeparationType && e.colSeparationType === "small") {
    var k = t.havingStyle(V.SCRIPT).sizeMultiplier;
    x = 0.2778 * (k / t.sizeMultiplier);
  }
  var M = e.colSeparationType === "CD" ? ue({
    number: 3,
    unit: "ex"
  }, t) : 12 * v, T = 3 * v, F = e.arraystretch * M, O = 0.7 * F, w = 0.3 * F, f = 0;
  function S(Tt) {
    for (var Nt = 0; Nt < Tt.length; ++Nt)
      Nt > 0 && (f += 0.25), d.push({
        pos: f,
        isDashed: Tt[Nt]
      });
  }
  for (S(l[0]), i = 0; i < e.body.length; ++i) {
    var A = e.body[i], E = O, P = w;
    c < A.length && (c = A.length);
    var R = new Array(A.length);
    for (s = 0; s < A.length; ++s) {
      var B = ae(A[s], t);
      P < B.depth && (P = B.depth), E < B.height && (E = B.height), R[s] = B;
    }
    var K = e.rowGaps[i], Z = 0;
    K && (Z = ue(K, t), Z > 0 && (Z += w, P < Z && (P = Z), Z = 0)), e.addJot && (P += T), R.height = E, R.depth = P, f += E, R.pos = f, f += P + Z, m[i] = R, S(l[i + 1]);
  }
  var Q = f / 2 + t.fontMetrics().axisHeight, pe = e.cols || [], q = [], W, ye, ke = [];
  if (e.tags && e.tags.some((Tt) => Tt))
    for (i = 0; i < r; ++i) {
      var re = m[i], te = re.pos - Q, ve = e.tags[i], ie = void 0;
      ve === !0 ? ie = _.makeSpan(["eqn-num"], [], t) : ve === !1 ? ie = _.makeSpan([], [], t) : ie = _.makeSpan([], be(ve, t, !0), t), ie.depth = re.depth, ie.height = re.height, ke.push({
        type: "elem",
        elem: ie,
        shift: te
      });
    }
  for (
    s = 0, ye = 0;
    // Continue while either there are more columns or more column
    // descriptions, so trailing separators don't get lost.
    s < c || ye < pe.length;
    ++s, ++ye
  ) {
    for (var oe = pe[ye] || {}, se = !0; oe.type === "separator"; ) {
      if (se || (W = _.makeSpan(["arraycolsep"], []), W.style.width = I(t.fontMetrics().doubleRuleSep), q.push(W)), oe.separator === "|" || oe.separator === ":") {
        var we = oe.separator === "|" ? "solid" : "dashed", _e = _.makeSpan(["vertical-separator"], [], t);
        _e.style.height = I(f), _e.style.borderRightWidth = I(y), _e.style.borderRightStyle = we, _e.style.margin = "0 " + I(-y / 2);
        var Ke = f - Q;
        Ke && (_e.style.verticalAlign = I(-Ke)), q.push(_e);
      } else
        throw new z("Invalid separator type: " + oe.separator);
      ye++, oe = pe[ye] || {}, se = !1;
    }
    if (!(s >= c)) {
      var Ae = void 0;
      (s > 0 || e.hskipBeforeAndAfter) && (Ae = X.deflt(oe.pregap, x), Ae !== 0 && (W = _.makeSpan(["arraycolsep"], []), W.style.width = I(Ae), q.push(W)));
      var Ce = [];
      for (i = 0; i < r; ++i) {
        var Ze = m[i], Te = Ze[s];
        if (Te) {
          var Be = Ze.pos - Q;
          Te.depth = Ze.depth, Te.height = Ze.height, Ce.push({
            type: "elem",
            elem: Te,
            shift: Be
          });
        }
      }
      Ce = _.makeVList({
        positionType: "individualShift",
        children: Ce
      }, t), Ce = _.makeSpan(["col-align-" + (oe.align || "c")], [Ce]), q.push(Ce), (s < c - 1 || e.hskipBeforeAndAfter) && (Ae = X.deflt(oe.postgap, x), Ae !== 0 && (W = _.makeSpan(["arraycolsep"], []), W.style.width = I(Ae), q.push(W)));
    }
  }
  if (m = _.makeSpan(["mtable"], q), d.length > 0) {
    for (var xt = _.makeLineSpan("hline", t, y), ot = _.makeLineSpan("hdashline", t, y), Je = [{
      type: "elem",
      elem: m,
      shift: 0
    }]; d.length > 0; ) {
      var St = d.pop(), At = St.pos - Q;
      St.isDashed ? Je.push({
        type: "elem",
        elem: ot,
        shift: At
      }) : Je.push({
        type: "elem",
        elem: xt,
        shift: At
      });
    }
    m = _.makeVList({
      positionType: "individualShift",
      children: Je
    }, t);
  }
  if (ke.length === 0)
    return _.makeSpan(["mord"], [m], t);
  var Ot = _.makeVList({
    positionType: "individualShift",
    children: ke
  }, t);
  return Ot = _.makeSpan(["tag"], [Ot], t), _.makeFragment([m, Ot]);
}, rl = {
  c: "center ",
  l: "left ",
  r: "right "
}, rt = function(e, t) {
  for (var i = [], s = new N.MathNode("mtd", [], ["mtr-glue"]), r = new N.MathNode("mtd", [], ["mml-eqn-num"]), l = 0; l < e.body.length; l++) {
    for (var c = e.body[l], m = [], d = 0; d < c.length; d++)
      m.push(new N.MathNode("mtd", [ne(c[d], t)]));
    e.tags && e.tags[l] && (m.unshift(s), m.push(s), e.leqno ? m.unshift(r) : m.push(r)), i.push(new N.MathNode("mtr", m));
  }
  var y = new N.MathNode("mtable", i), v = e.arraystretch === 0.5 ? 0.1 : 0.16 + e.arraystretch - 1 + (e.addJot ? 0.09 : 0);
  y.setAttribute("rowspacing", I(v));
  var x = "", k = "";
  if (e.cols && e.cols.length > 0) {
    var M = e.cols, T = "", F = !1, O = 0, w = M.length;
    M[0].type === "separator" && (x += "top ", O = 1), M[M.length - 1].type === "separator" && (x += "bottom ", w -= 1);
    for (var f = O; f < w; f++)
      M[f].type === "align" ? (k += rl[M[f].align], F && (T += "none "), F = !0) : M[f].type === "separator" && F && (T += M[f].separator === "|" ? "solid " : "dashed ", F = !1);
    y.setAttribute("columnalign", k.trim()), /[sd]/.test(T) && y.setAttribute("columnlines", T.trim());
  }
  if (e.colSeparationType === "align") {
    for (var S = e.cols || [], A = "", E = 1; E < S.length; E++)
      A += E % 2 ? "0em " : "1em ";
    y.setAttribute("columnspacing", A.trim());
  } else
    e.colSeparationType === "alignat" || e.colSeparationType === "gather" ? y.setAttribute("columnspacing", "0em") : e.colSeparationType === "small" ? y.setAttribute("columnspacing", "0.2778em") : e.colSeparationType === "CD" ? y.setAttribute("columnspacing", "0.5em") : y.setAttribute("columnspacing", "1em");
  var P = "", R = e.hLinesBeforeRow;
  x += R[0].length > 0 ? "left " : "", x += R[R.length - 1].length > 0 ? "right " : "";
  for (var B = 1; B < R.length - 1; B++)
    P += R[B].length === 0 ? "none " : R[B][0] ? "dashed " : "solid ";
  return /[sd]/.test(P) && y.setAttribute("rowlines", P.trim()), x !== "" && (y = new N.MathNode("menclose", [y]), y.setAttribute("notation", x.trim())), e.arraystretch && e.arraystretch < 1 && (y = new N.MathNode("mstyle", [y]), y.setAttribute("scriptlevel", "1")), y;
}, Zr = function(e, t) {
  e.envName.indexOf("ed") === -1 && qa(e);
  var i = [], s = e.envName.indexOf("at") > -1 ? "alignat" : "align", r = e.envName === "split", l = _t(e.parser, {
    cols: i,
    addJot: !0,
    autoTag: r ? void 0 : Hi(e.envName),
    emptySingleRow: !0,
    colSeparationType: s,
    maxNumCols: r ? 2 : void 0,
    leqno: e.parser.settings.leqno
  }, "display"), c, m = 0, d = {
    type: "ordgroup",
    mode: e.mode,
    body: []
  };
  if (t[0] && t[0].type === "ordgroup") {
    for (var y = "", v = 0; v < t[0].body.length; v++) {
      var x = J(t[0].body[v], "textord");
      y += x.text;
    }
    c = Number(y), m = c * 2;
  }
  var k = !m;
  l.body.forEach(function(O) {
    for (var w = 1; w < O.length; w += 2) {
      var f = J(O[w], "styling"), S = J(f.body[0], "ordgroup");
      S.body.unshift(d);
    }
    if (k)
      m < O.length && (m = O.length);
    else {
      var A = O.length / 2;
      if (c < A)
        throw new z("Too many math in a row: " + ("expected " + c + ", but got " + A), O[0]);
    }
  });
  for (var M = 0; M < m; ++M) {
    var T = "r", F = 0;
    M % 2 === 1 ? T = "l" : M > 0 && k && (F = 1), i[M] = {
      type: "align",
      align: T,
      pregap: F,
      postgap: 0
    };
  }
  return l.colSeparationType = k ? "align" : "alignat", l;
};
it({
  type: "array",
  names: ["array", "darray"],
  props: {
    numArgs: 1
  },
  handler(a, e) {
    var t = Ia(e[0]), i = t ? [e[0]] : J(e[0], "ordgroup").body, s = i.map(function(l) {
      var c = Ii(l), m = c.text;
      if ("lcr".indexOf(m) !== -1)
        return {
          type: "align",
          align: m
        };
      if (m === "|")
        return {
          type: "separator",
          separator: "|"
        };
      if (m === ":")
        return {
          type: "separator",
          separator: ":"
        };
      throw new z("Unknown column alignment: " + m, l);
    }), r = {
      cols: s,
      hskipBeforeAndAfter: !0,
      // \@preamble in lttab.dtx
      maxNumCols: s.length
    };
    return _t(a.parser, r, Gi(a.envName));
  },
  htmlBuilder: st,
  mathmlBuilder: rt
});
it({
  type: "array",
  names: ["matrix", "pmatrix", "bmatrix", "Bmatrix", "vmatrix", "Vmatrix", "matrix*", "pmatrix*", "bmatrix*", "Bmatrix*", "vmatrix*", "Vmatrix*"],
  props: {
    numArgs: 0
  },
  handler(a) {
    var e = {
      matrix: null,
      pmatrix: ["(", ")"],
      bmatrix: ["[", "]"],
      Bmatrix: ["\\{", "\\}"],
      vmatrix: ["|", "|"],
      Vmatrix: ["\\Vert", "\\Vert"]
    }[a.envName.replace("*", "")], t = "c", i = {
      hskipBeforeAndAfter: !1,
      cols: [{
        type: "align",
        align: t
      }]
    };
    if (a.envName.charAt(a.envName.length - 1) === "*") {
      var s = a.parser;
      if (s.consumeSpaces(), s.fetch().text === "[") {
        if (s.consume(), s.consumeSpaces(), t = s.fetch().text, "lcr".indexOf(t) === -1)
          throw new z("Expected l or c or r", s.nextToken);
        s.consume(), s.consumeSpaces(), s.expect("]"), s.consume(), i.cols = [{
          type: "align",
          align: t
        }];
      }
    }
    var r = _t(a.parser, i, Gi(a.envName)), l = Math.max(0, ...r.body.map((c) => c.length));
    return r.cols = new Array(l).fill({
      type: "align",
      align: t
    }), e ? {
      type: "leftright",
      mode: a.mode,
      body: [r],
      left: e[0],
      right: e[1],
      rightColor: void 0
      // \right uninfluenced by \color in array
    } : r;
  },
  htmlBuilder: st,
  mathmlBuilder: rt
});
it({
  type: "array",
  names: ["smallmatrix"],
  props: {
    numArgs: 0
  },
  handler(a) {
    var e = {
      arraystretch: 0.5
    }, t = _t(a.parser, e, "script");
    return t.colSeparationType = "small", t;
  },
  htmlBuilder: st,
  mathmlBuilder: rt
});
it({
  type: "array",
  names: ["subarray"],
  props: {
    numArgs: 1
  },
  handler(a, e) {
    var t = Ia(e[0]), i = t ? [e[0]] : J(e[0], "ordgroup").body, s = i.map(function(l) {
      var c = Ii(l), m = c.text;
      if ("lc".indexOf(m) !== -1)
        return {
          type: "align",
          align: m
        };
      throw new z("Unknown column alignment: " + m, l);
    });
    if (s.length > 1)
      throw new z("{subarray} can contain only one column");
    var r = {
      cols: s,
      hskipBeforeAndAfter: !1,
      arraystretch: 0.5
    };
    if (r = _t(a.parser, r, "script"), r.body.length > 0 && r.body[0].length > 1)
      throw new z("{subarray} can contain only one column");
    return r;
  },
  htmlBuilder: st,
  mathmlBuilder: rt
});
it({
  type: "array",
  names: ["cases", "dcases", "rcases", "drcases"],
  props: {
    numArgs: 0
  },
  handler(a) {
    var e = {
      arraystretch: 1.2,
      cols: [{
        type: "align",
        align: "l",
        pregap: 0,
        // TODO(kevinb) get the current style.
        // For now we use the metrics for TEXT style which is what we were
        // doing before.  Before attempting to get the current style we
        // should look at TeX's behavior especially for \over and matrices.
        postgap: 1
        /* 1em quad */
      }, {
        type: "align",
        align: "l",
        pregap: 0,
        postgap: 0
      }]
    }, t = _t(a.parser, e, Gi(a.envName));
    return {
      type: "leftright",
      mode: a.mode,
      body: [t],
      left: a.envName.indexOf("r") > -1 ? "." : "\\{",
      right: a.envName.indexOf("r") > -1 ? "\\}" : ".",
      rightColor: void 0
    };
  },
  htmlBuilder: st,
  mathmlBuilder: rt
});
it({
  type: "array",
  names: ["align", "align*", "aligned", "split"],
  props: {
    numArgs: 0
  },
  handler: Zr,
  htmlBuilder: st,
  mathmlBuilder: rt
});
it({
  type: "array",
  names: ["gathered", "gather", "gather*"],
  props: {
    numArgs: 0
  },
  handler(a) {
    X.contains(["gather", "gather*"], a.envName) && qa(a);
    var e = {
      cols: [{
        type: "align",
        align: "c"
      }],
      addJot: !0,
      colSeparationType: "gather",
      autoTag: Hi(a.envName),
      emptySingleRow: !0,
      leqno: a.parser.settings.leqno
    };
    return _t(a.parser, e, "display");
  },
  htmlBuilder: st,
  mathmlBuilder: rt
});
it({
  type: "array",
  names: ["alignat", "alignat*", "alignedat"],
  props: {
    numArgs: 1
  },
  handler: Zr,
  htmlBuilder: st,
  mathmlBuilder: rt
});
it({
  type: "array",
  names: ["equation", "equation*"],
  props: {
    numArgs: 0
  },
  handler(a) {
    qa(a);
    var e = {
      autoTag: Hi(a.envName),
      emptySingleRow: !0,
      singleRow: !0,
      maxNumCols: 1,
      leqno: a.parser.settings.leqno
    };
    return _t(a.parser, e, "display");
  },
  htmlBuilder: st,
  mathmlBuilder: rt
});
it({
  type: "array",
  names: ["CD"],
  props: {
    numArgs: 0
  },
  handler(a) {
    return qa(a), $n(a.parser);
  },
  htmlBuilder: st,
  mathmlBuilder: rt
});
u("\\nonumber", "\\gdef\\@eqnsw{0}");
u("\\notag", "\\nonumber");
L({
  type: "text",
  // Doesn't matter what this is.
  names: ["\\hline", "\\hdashline"],
  props: {
    numArgs: 0,
    allowedInText: !0,
    allowedInMath: !0
  },
  handler(a, e) {
    throw new z(a.funcName + " valid only within array environment");
  }
});
var Vs = Xr;
L({
  type: "environment",
  names: ["\\begin", "\\end"],
  props: {
    numArgs: 1,
    argTypes: ["text"]
  },
  handler(a, e) {
    var {
      parser: t,
      funcName: i
    } = a, s = e[0];
    if (s.type !== "ordgroup")
      throw new z("Invalid environment name", s);
    for (var r = "", l = 0; l < s.body.length; ++l)
      r += J(s.body[l], "textord").text;
    if (i === "\\begin") {
      if (!Vs.hasOwnProperty(r))
        throw new z("No such environment: " + r, s);
      var c = Vs[r], {
        args: m,
        optArgs: d
      } = t.parseArguments("\\begin{" + r + "}", c), y = {
        mode: t.mode,
        envName: r,
        parser: t
      }, v = c.handler(y, m, d);
      t.expect("\\end", !1);
      var x = t.nextToken, k = J(t.parseFunction(), "environment");
      if (k.name !== r)
        throw new z("Mismatch: \\begin{" + r + "} matched by \\end{" + k.name + "}", x);
      return v;
    }
    return {
      type: "environment",
      mode: t.mode,
      name: r,
      nameGroup: s
    };
  }
});
var Jr = (a, e) => {
  var t = a.font, i = e.withFont(t);
  return ae(a.body, i);
}, Qr = (a, e) => {
  var t = a.font, i = e.withFont(t);
  return ne(a.body, i);
}, Ws = {
  "\\Bbb": "\\mathbb",
  "\\bold": "\\mathbf",
  "\\frak": "\\mathfrak",
  "\\bm": "\\boldsymbol"
};
L({
  type: "font",
  names: [
    // styles, except \boldsymbol defined below
    "\\mathrm",
    "\\mathit",
    "\\mathbf",
    "\\mathnormal",
    // families
    "\\mathbb",
    "\\mathcal",
    "\\mathfrak",
    "\\mathscr",
    "\\mathsf",
    "\\mathtt",
    // aliases, except \bm defined below
    "\\Bbb",
    "\\bold",
    "\\frak"
  ],
  props: {
    numArgs: 1,
    allowedInArgument: !0
  },
  handler: (a, e) => {
    var {
      parser: t,
      funcName: i
    } = a, s = Na(e[0]), r = i;
    return r in Ws && (r = Ws[r]), {
      type: "font",
      mode: t.mode,
      font: r.slice(1),
      body: s
    };
  },
  htmlBuilder: Jr,
  mathmlBuilder: Qr
});
L({
  type: "mclass",
  names: ["\\boldsymbol", "\\bm"],
  props: {
    numArgs: 1
  },
  handler: (a, e) => {
    var {
      parser: t
    } = a, i = e[0], s = X.isCharacterBox(i);
    return {
      type: "mclass",
      mode: t.mode,
      mclass: Ra(i),
      body: [{
        type: "font",
        mode: t.mode,
        font: "boldsymbol",
        body: i
      }],
      isCharacterBox: s
    };
  }
});
L({
  type: "font",
  names: ["\\rm", "\\sf", "\\tt", "\\bf", "\\it", "\\cal"],
  props: {
    numArgs: 0,
    allowedInText: !0
  },
  handler: (a, e) => {
    var {
      parser: t,
      funcName: i,
      breakOnTokenText: s
    } = a, {
      mode: r
    } = t, l = t.parseExpression(!0, s), c = "math" + i.slice(1);
    return {
      type: "font",
      mode: r,
      font: c,
      body: {
        type: "ordgroup",
        mode: t.mode,
        body: l
      }
    };
  },
  htmlBuilder: Jr,
  mathmlBuilder: Qr
});
var eo = (a, e) => {
  var t = e;
  return a === "display" ? t = t.id >= V.SCRIPT.id ? t.text() : V.DISPLAY : a === "text" && t.size === V.DISPLAY.size ? t = V.TEXT : a === "script" ? t = V.SCRIPT : a === "scriptscript" && (t = V.SCRIPTSCRIPT), t;
}, $i = (a, e) => {
  var t = eo(a.size, e.style), i = t.fracNum(), s = t.fracDen(), r;
  r = e.havingStyle(i);
  var l = ae(a.numer, r, e);
  if (a.continued) {
    var c = 8.5 / e.fontMetrics().ptPerEm, m = 3.5 / e.fontMetrics().ptPerEm;
    l.height = l.height < c ? c : l.height, l.depth = l.depth < m ? m : l.depth;
  }
  r = e.havingStyle(s);
  var d = ae(a.denom, r, e), y, v, x;
  a.hasBarLine ? (a.barSize ? (v = ue(a.barSize, e), y = _.makeLineSpan("frac-line", e, v)) : y = _.makeLineSpan("frac-line", e), v = y.height, x = y.height) : (y = null, v = 0, x = e.fontMetrics().defaultRuleThickness);
  var k, M, T;
  t.size === V.DISPLAY.size || a.size === "display" ? (k = e.fontMetrics().num1, v > 0 ? M = 3 * x : M = 7 * x, T = e.fontMetrics().denom1) : (v > 0 ? (k = e.fontMetrics().num2, M = x) : (k = e.fontMetrics().num3, M = 3 * x), T = e.fontMetrics().denom2);
  var F;
  if (y) {
    var w = e.fontMetrics().axisHeight;
    k - l.depth - (w + 0.5 * v) < M && (k += M - (k - l.depth - (w + 0.5 * v))), w - 0.5 * v - (d.height - T) < M && (T += M - (w - 0.5 * v - (d.height - T)));
    var f = -(w - 0.5 * v);
    F = _.makeVList({
      positionType: "individualShift",
      children: [{
        type: "elem",
        elem: d,
        shift: T
      }, {
        type: "elem",
        elem: y,
        shift: f
      }, {
        type: "elem",
        elem: l,
        shift: -k
      }]
    }, e);
  } else {
    var O = k - l.depth - (d.height - T);
    O < M && (k += 0.5 * (M - O), T += 0.5 * (M - O)), F = _.makeVList({
      positionType: "individualShift",
      children: [{
        type: "elem",
        elem: d,
        shift: T
      }, {
        type: "elem",
        elem: l,
        shift: -k
      }]
    }, e);
  }
  r = e.havingStyle(t), F.height *= r.sizeMultiplier / e.sizeMultiplier, F.depth *= r.sizeMultiplier / e.sizeMultiplier;
  var S;
  t.size === V.DISPLAY.size ? S = e.fontMetrics().delim1 : t.size === V.SCRIPTSCRIPT.size ? S = e.havingStyle(V.SCRIPT).fontMetrics().delim2 : S = e.fontMetrics().delim2;
  var A, E;
  return a.leftDelim == null ? A = ra(e, ["mopen"]) : A = ut.customSizedDelim(a.leftDelim, S, !0, e.havingStyle(t), a.mode, ["mopen"]), a.continued ? E = _.makeSpan([]) : a.rightDelim == null ? E = ra(e, ["mclose"]) : E = ut.customSizedDelim(a.rightDelim, S, !0, e.havingStyle(t), a.mode, ["mclose"]), _.makeSpan(["mord"].concat(r.sizingClasses(e)), [A, _.makeSpan(["mfrac"], [F]), E], e);
}, Vi = (a, e) => {
  var t = new N.MathNode("mfrac", [ne(a.numer, e), ne(a.denom, e)]);
  if (!a.hasBarLine)
    t.setAttribute("linethickness", "0px");
  else if (a.barSize) {
    var i = ue(a.barSize, e);
    t.setAttribute("linethickness", I(i));
  }
  var s = eo(a.size, e.style);
  if (s.size !== e.style.size) {
    t = new N.MathNode("mstyle", [t]);
    var r = s.size === V.DISPLAY.size ? "true" : "false";
    t.setAttribute("displaystyle", r), t.setAttribute("scriptlevel", "0");
  }
  if (a.leftDelim != null || a.rightDelim != null) {
    var l = [];
    if (a.leftDelim != null) {
      var c = new N.MathNode("mo", [new N.TextNode(a.leftDelim.replace("\\", ""))]);
      c.setAttribute("fence", "true"), l.push(c);
    }
    if (l.push(t), a.rightDelim != null) {
      var m = new N.MathNode("mo", [new N.TextNode(a.rightDelim.replace("\\", ""))]);
      m.setAttribute("fence", "true"), l.push(m);
    }
    return zi(l);
  }
  return t;
};
L({
  type: "genfrac",
  names: [
    "\\dfrac",
    "\\frac",
    "\\tfrac",
    "\\dbinom",
    "\\binom",
    "\\tbinom",
    "\\\\atopfrac",
    // can’t be entered directly
    "\\\\bracefrac",
    "\\\\brackfrac"
    // ditto
  ],
  props: {
    numArgs: 2,
    allowedInArgument: !0
  },
  handler: (a, e) => {
    var {
      parser: t,
      funcName: i
    } = a, s = e[0], r = e[1], l, c = null, m = null, d = "auto";
    switch (i) {
      case "\\dfrac":
      case "\\frac":
      case "\\tfrac":
        l = !0;
        break;
      case "\\\\atopfrac":
        l = !1;
        break;
      case "\\dbinom":
      case "\\binom":
      case "\\tbinom":
        l = !1, c = "(", m = ")";
        break;
      case "\\\\bracefrac":
        l = !1, c = "\\{", m = "\\}";
        break;
      case "\\\\brackfrac":
        l = !1, c = "[", m = "]";
        break;
      default:
        throw new Error("Unrecognized genfrac command");
    }
    switch (i) {
      case "\\dfrac":
      case "\\dbinom":
        d = "display";
        break;
      case "\\tfrac":
      case "\\tbinom":
        d = "text";
        break;
    }
    return {
      type: "genfrac",
      mode: t.mode,
      continued: !1,
      numer: s,
      denom: r,
      hasBarLine: l,
      leftDelim: c,
      rightDelim: m,
      size: d,
      barSize: null
    };
  },
  htmlBuilder: $i,
  mathmlBuilder: Vi
});
L({
  type: "genfrac",
  names: ["\\cfrac"],
  props: {
    numArgs: 2
  },
  handler: (a, e) => {
    var {
      parser: t,
      funcName: i
    } = a, s = e[0], r = e[1];
    return {
      type: "genfrac",
      mode: t.mode,
      continued: !0,
      numer: s,
      denom: r,
      hasBarLine: !0,
      leftDelim: null,
      rightDelim: null,
      size: "display",
      barSize: null
    };
  }
});
L({
  type: "infix",
  names: ["\\over", "\\choose", "\\atop", "\\brace", "\\brack"],
  props: {
    numArgs: 0,
    infix: !0
  },
  handler(a) {
    var {
      parser: e,
      funcName: t,
      token: i
    } = a, s;
    switch (t) {
      case "\\over":
        s = "\\frac";
        break;
      case "\\choose":
        s = "\\binom";
        break;
      case "\\atop":
        s = "\\\\atopfrac";
        break;
      case "\\brace":
        s = "\\\\bracefrac";
        break;
      case "\\brack":
        s = "\\\\brackfrac";
        break;
      default:
        throw new Error("Unrecognized infix genfrac command");
    }
    return {
      type: "infix",
      mode: e.mode,
      replaceWith: s,
      token: i
    };
  }
});
var Ys = ["display", "text", "script", "scriptscript"], Xs = function(e) {
  var t = null;
  return e.length > 0 && (t = e, t = t === "." ? null : t), t;
};
L({
  type: "genfrac",
  names: ["\\genfrac"],
  props: {
    numArgs: 6,
    allowedInArgument: !0,
    argTypes: ["math", "math", "size", "text", "math", "math"]
  },
  handler(a, e) {
    var {
      parser: t
    } = a, i = e[4], s = e[5], r = Na(e[0]), l = r.type === "atom" && r.family === "open" ? Xs(r.text) : null, c = Na(e[1]), m = c.type === "atom" && c.family === "close" ? Xs(c.text) : null, d = J(e[2], "size"), y, v = null;
    d.isBlank ? y = !0 : (v = d.value, y = v.number > 0);
    var x = "auto", k = e[3];
    if (k.type === "ordgroup") {
      if (k.body.length > 0) {
        var M = J(k.body[0], "textord");
        x = Ys[Number(M.text)];
      }
    } else
      k = J(k, "textord"), x = Ys[Number(k.text)];
    return {
      type: "genfrac",
      mode: t.mode,
      numer: i,
      denom: s,
      continued: !1,
      hasBarLine: y,
      barSize: v,
      leftDelim: l,
      rightDelim: m,
      size: x
    };
  },
  htmlBuilder: $i,
  mathmlBuilder: Vi
});
L({
  type: "infix",
  names: ["\\above"],
  props: {
    numArgs: 1,
    argTypes: ["size"],
    infix: !0
  },
  handler(a, e) {
    var {
      parser: t,
      funcName: i,
      token: s
    } = a;
    return {
      type: "infix",
      mode: t.mode,
      replaceWith: "\\\\abovefrac",
      size: J(e[0], "size").value,
      token: s
    };
  }
});
L({
  type: "genfrac",
  names: ["\\\\abovefrac"],
  props: {
    numArgs: 3,
    argTypes: ["math", "size", "math"]
  },
  handler: (a, e) => {
    var {
      parser: t,
      funcName: i
    } = a, s = e[0], r = N0(J(e[1], "infix").size), l = e[2], c = r.number > 0;
    return {
      type: "genfrac",
      mode: t.mode,
      numer: s,
      denom: l,
      continued: !1,
      hasBarLine: c,
      barSize: r,
      leftDelim: null,
      rightDelim: null,
      size: "auto"
    };
  },
  htmlBuilder: $i,
  mathmlBuilder: Vi
});
var to = (a, e) => {
  var t = e.style, i, s;
  a.type === "supsub" ? (i = a.sup ? ae(a.sup, e.havingStyle(t.sup()), e) : ae(a.sub, e.havingStyle(t.sub()), e), s = J(a.base, "horizBrace")) : s = J(a, "horizBrace");
  var r = ae(s.base, e.havingBaseStyle(V.DISPLAY)), l = ht.svgSpan(s, e), c;
  if (s.isOver ? (c = _.makeVList({
    positionType: "firstBaseline",
    children: [{
      type: "elem",
      elem: r
    }, {
      type: "kern",
      size: 0.1
    }, {
      type: "elem",
      elem: l
    }]
  }, e), c.children[0].children[0].children[1].classes.push("svg-align")) : (c = _.makeVList({
    positionType: "bottom",
    positionData: r.depth + 0.1 + l.height,
    children: [{
      type: "elem",
      elem: l
    }, {
      type: "kern",
      size: 0.1
    }, {
      type: "elem",
      elem: r
    }]
  }, e), c.children[0].children[0].children[0].classes.push("svg-align")), i) {
    var m = _.makeSpan(["mord", s.isOver ? "mover" : "munder"], [c], e);
    s.isOver ? c = _.makeVList({
      positionType: "firstBaseline",
      children: [{
        type: "elem",
        elem: m
      }, {
        type: "kern",
        size: 0.2
      }, {
        type: "elem",
        elem: i
      }]
    }, e) : c = _.makeVList({
      positionType: "bottom",
      positionData: m.depth + 0.2 + i.height + i.depth,
      children: [{
        type: "elem",
        elem: i
      }, {
        type: "kern",
        size: 0.2
      }, {
        type: "elem",
        elem: m
      }]
    }, e);
  }
  return _.makeSpan(["mord", s.isOver ? "mover" : "munder"], [c], e);
}, ol = (a, e) => {
  var t = ht.mathMLnode(a.label);
  return new N.MathNode(a.isOver ? "mover" : "munder", [ne(a.base, e), t]);
};
L({
  type: "horizBrace",
  names: ["\\overbrace", "\\underbrace"],
  props: {
    numArgs: 1
  },
  handler(a, e) {
    var {
      parser: t,
      funcName: i
    } = a;
    return {
      type: "horizBrace",
      mode: t.mode,
      label: i,
      isOver: /^\\over/.test(i),
      base: e[0]
    };
  },
  htmlBuilder: to,
  mathmlBuilder: ol
});
L({
  type: "href",
  names: ["\\href"],
  props: {
    numArgs: 2,
    argTypes: ["url", "original"],
    allowedInText: !0
  },
  handler: (a, e) => {
    var {
      parser: t
    } = a, i = e[1], s = J(e[0], "url").url;
    return t.settings.isTrusted({
      command: "\\href",
      url: s
    }) ? {
      type: "href",
      mode: t.mode,
      href: s,
      body: he(i)
    } : t.formatUnsupportedCmd("\\href");
  },
  htmlBuilder: (a, e) => {
    var t = be(a.body, e, !1);
    return _.makeAnchor(a.href, [], t, e);
  },
  mathmlBuilder: (a, e) => {
    var t = kt(a.body, e);
    return t instanceof Ue || (t = new Ue("mrow", [t])), t.setAttribute("href", a.href), t;
  }
});
L({
  type: "href",
  names: ["\\url"],
  props: {
    numArgs: 1,
    argTypes: ["url"],
    allowedInText: !0
  },
  handler: (a, e) => {
    var {
      parser: t
    } = a, i = J(e[0], "url").url;
    if (!t.settings.isTrusted({
      command: "\\url",
      url: i
    }))
      return t.formatUnsupportedCmd("\\url");
    for (var s = [], r = 0; r < i.length; r++) {
      var l = i[r];
      l === "~" && (l = "\\textasciitilde"), s.push({
        type: "textord",
        mode: "text",
        text: l
      });
    }
    var c = {
      type: "text",
      mode: t.mode,
      font: "\\texttt",
      body: s
    };
    return {
      type: "href",
      mode: t.mode,
      href: i,
      body: he(c)
    };
  }
});
L({
  type: "hbox",
  names: ["\\hbox"],
  props: {
    numArgs: 1,
    argTypes: ["text"],
    allowedInText: !0,
    primitive: !0
  },
  handler(a, e) {
    var {
      parser: t
    } = a;
    return {
      type: "hbox",
      mode: t.mode,
      body: he(e[0])
    };
  },
  htmlBuilder(a, e) {
    var t = be(a.body, e, !1);
    return _.makeFragment(t);
  },
  mathmlBuilder(a, e) {
    return new N.MathNode("mrow", ze(a.body, e));
  }
});
L({
  type: "html",
  names: ["\\htmlClass", "\\htmlId", "\\htmlStyle", "\\htmlData"],
  props: {
    numArgs: 2,
    argTypes: ["raw", "original"],
    allowedInText: !0
  },
  handler: (a, e) => {
    var {
      parser: t,
      funcName: i,
      token: s
    } = a, r = J(e[0], "raw").string, l = e[1];
    t.settings.strict && t.settings.reportNonstrict("htmlExtension", "HTML extension is disabled on strict mode");
    var c, m = {};
    switch (i) {
      case "\\htmlClass":
        m.class = r, c = {
          command: "\\htmlClass",
          class: r
        };
        break;
      case "\\htmlId":
        m.id = r, c = {
          command: "\\htmlId",
          id: r
        };
        break;
      case "\\htmlStyle":
        m.style = r, c = {
          command: "\\htmlStyle",
          style: r
        };
        break;
      case "\\htmlData": {
        for (var d = r.split(","), y = 0; y < d.length; y++) {
          var v = d[y].split("=");
          if (v.length !== 2)
            throw new z("Error parsing key-value for \\htmlData");
          m["data-" + v[0].trim()] = v[1].trim();
        }
        c = {
          command: "\\htmlData",
          attributes: m
        };
        break;
      }
      default:
        throw new Error("Unrecognized html command");
    }
    return t.settings.isTrusted(c) ? {
      type: "html",
      mode: t.mode,
      attributes: m,
      body: he(l)
    } : t.formatUnsupportedCmd(i);
  },
  htmlBuilder: (a, e) => {
    var t = be(a.body, e, !1), i = ["enclosing"];
    a.attributes.class && i.push(...a.attributes.class.trim().split(/\s+/));
    var s = _.makeSpan(i, t, e);
    for (var r in a.attributes)
      r !== "class" && a.attributes.hasOwnProperty(r) && s.setAttribute(r, a.attributes[r]);
    return s;
  },
  mathmlBuilder: (a, e) => kt(a.body, e)
});
L({
  type: "htmlmathml",
  names: ["\\html@mathml"],
  props: {
    numArgs: 2,
    allowedInText: !0
  },
  handler: (a, e) => {
    var {
      parser: t
    } = a;
    return {
      type: "htmlmathml",
      mode: t.mode,
      html: he(e[0]),
      mathml: he(e[1])
    };
  },
  htmlBuilder: (a, e) => {
    var t = be(a.html, e, !1);
    return _.makeFragment(t);
  },
  mathmlBuilder: (a, e) => kt(a.mathml, e)
});
var gi = function(e) {
  if (/^[-+]? *(\d+(\.\d*)?|\.\d+)$/.test(e))
    return {
      number: +e,
      unit: "bp"
    };
  var t = /([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(e);
  if (!t)
    throw new z("Invalid size: '" + e + "' in \\includegraphics");
  var i = {
    number: +(t[1] + t[2]),
    // sign + magnitude, cast to number
    unit: t[3]
  };
  if (!wr(i))
    throw new z("Invalid unit: '" + i.unit + "' in \\includegraphics.");
  return i;
};
L({
  type: "includegraphics",
  names: ["\\includegraphics"],
  props: {
    numArgs: 1,
    numOptionalArgs: 1,
    argTypes: ["raw", "url"],
    allowedInText: !1
  },
  handler: (a, e, t) => {
    var {
      parser: i
    } = a, s = {
      number: 0,
      unit: "em"
    }, r = {
      number: 0.9,
      unit: "em"
    }, l = {
      number: 0,
      unit: "em"
    }, c = "";
    if (t[0])
      for (var m = J(t[0], "raw").string, d = m.split(","), y = 0; y < d.length; y++) {
        var v = d[y].split("=");
        if (v.length === 2) {
          var x = v[1].trim();
          switch (v[0].trim()) {
            case "alt":
              c = x;
              break;
            case "width":
              s = gi(x);
              break;
            case "height":
              r = gi(x);
              break;
            case "totalheight":
              l = gi(x);
              break;
            default:
              throw new z("Invalid key: '" + v[0] + "' in \\includegraphics.");
          }
        }
      }
    var k = J(e[0], "url").url;
    return c === "" && (c = k, c = c.replace(/^.*[\\/]/, ""), c = c.substring(0, c.lastIndexOf("."))), i.settings.isTrusted({
      command: "\\includegraphics",
      url: k
    }) ? {
      type: "includegraphics",
      mode: i.mode,
      alt: c,
      width: s,
      height: r,
      totalheight: l,
      src: k
    } : i.formatUnsupportedCmd("\\includegraphics");
  },
  htmlBuilder: (a, e) => {
    var t = ue(a.height, e), i = 0;
    a.totalheight.number > 0 && (i = ue(a.totalheight, e) - t);
    var s = 0;
    a.width.number > 0 && (s = ue(a.width, e));
    var r = {
      height: I(t + i)
    };
    s > 0 && (r.width = I(s)), i > 0 && (r.verticalAlign = I(-i));
    var l = new on(a.src, a.alt, r);
    return l.height = t, l.depth = i, l;
  },
  mathmlBuilder: (a, e) => {
    var t = new N.MathNode("mglyph", []);
    t.setAttribute("alt", a.alt);
    var i = ue(a.height, e), s = 0;
    if (a.totalheight.number > 0 && (s = ue(a.totalheight, e) - i, t.setAttribute("valign", I(-s))), t.setAttribute("height", I(i + s)), a.width.number > 0) {
      var r = ue(a.width, e);
      t.setAttribute("width", I(r));
    }
    return t.setAttribute("src", a.src), t;
  }
});
L({
  type: "kern",
  names: ["\\kern", "\\mkern", "\\hskip", "\\mskip"],
  props: {
    numArgs: 1,
    argTypes: ["size"],
    primitive: !0,
    allowedInText: !0
  },
  handler(a, e) {
    var {
      parser: t,
      funcName: i
    } = a, s = J(e[0], "size");
    if (t.settings.strict) {
      var r = i[1] === "m", l = s.value.unit === "mu";
      r ? (l || t.settings.reportNonstrict("mathVsTextUnits", "LaTeX's " + i + " supports only mu units, " + ("not " + s.value.unit + " units")), t.mode !== "math" && t.settings.reportNonstrict("mathVsTextUnits", "LaTeX's " + i + " works only in math mode")) : l && t.settings.reportNonstrict("mathVsTextUnits", "LaTeX's " + i + " doesn't support mu units");
    }
    return {
      type: "kern",
      mode: t.mode,
      dimension: s.value
    };
  },
  htmlBuilder(a, e) {
    return _.makeGlue(a.dimension, e);
  },
  mathmlBuilder(a, e) {
    var t = ue(a.dimension, e);
    return new N.SpaceNode(t);
  }
});
L({
  type: "lap",
  names: ["\\mathllap", "\\mathrlap", "\\mathclap"],
  props: {
    numArgs: 1,
    allowedInText: !0
  },
  handler: (a, e) => {
    var {
      parser: t,
      funcName: i
    } = a, s = e[0];
    return {
      type: "lap",
      mode: t.mode,
      alignment: i.slice(5),
      body: s
    };
  },
  htmlBuilder: (a, e) => {
    var t;
    a.alignment === "clap" ? (t = _.makeSpan([], [ae(a.body, e)]), t = _.makeSpan(["inner"], [t], e)) : t = _.makeSpan(["inner"], [ae(a.body, e)]);
    var i = _.makeSpan(["fix"], []), s = _.makeSpan([a.alignment], [t, i], e), r = _.makeSpan(["strut"]);
    return r.style.height = I(s.height + s.depth), s.depth && (r.style.verticalAlign = I(-s.depth)), s.children.unshift(r), s = _.makeSpan(["thinbox"], [s], e), _.makeSpan(["mord", "vbox"], [s], e);
  },
  mathmlBuilder: (a, e) => {
    var t = new N.MathNode("mpadded", [ne(a.body, e)]);
    if (a.alignment !== "rlap") {
      var i = a.alignment === "llap" ? "-1" : "-0.5";
      t.setAttribute("lspace", i + "width");
    }
    return t.setAttribute("width", "0px"), t;
  }
});
L({
  type: "styling",
  names: ["\\(", "$"],
  props: {
    numArgs: 0,
    allowedInText: !0,
    allowedInMath: !1
  },
  handler(a, e) {
    var {
      funcName: t,
      parser: i
    } = a, s = i.mode;
    i.switchMode("math");
    var r = t === "\\(" ? "\\)" : "$", l = i.parseExpression(!1, r);
    return i.expect(r), i.switchMode(s), {
      type: "styling",
      mode: i.mode,
      style: "text",
      body: l
    };
  }
});
L({
  type: "text",
  // Doesn't matter what this is.
  names: ["\\)", "\\]"],
  props: {
    numArgs: 0,
    allowedInText: !0,
    allowedInMath: !1
  },
  handler(a, e) {
    throw new z("Mismatched " + a.funcName);
  }
});
var Ks = (a, e) => {
  switch (e.style.size) {
    case V.DISPLAY.size:
      return a.display;
    case V.TEXT.size:
      return a.text;
    case V.SCRIPT.size:
      return a.script;
    case V.SCRIPTSCRIPT.size:
      return a.scriptscript;
    default:
      return a.text;
  }
};
L({
  type: "mathchoice",
  names: ["\\mathchoice"],
  props: {
    numArgs: 4,
    primitive: !0
  },
  handler: (a, e) => {
    var {
      parser: t
    } = a;
    return {
      type: "mathchoice",
      mode: t.mode,
      display: he(e[0]),
      text: he(e[1]),
      script: he(e[2]),
      scriptscript: he(e[3])
    };
  },
  htmlBuilder: (a, e) => {
    var t = Ks(a, e), i = be(t, e, !1);
    return _.makeFragment(i);
  },
  mathmlBuilder: (a, e) => {
    var t = Ks(a, e);
    return kt(t, e);
  }
});
var ao = (a, e, t, i, s, r, l) => {
  a = _.makeSpan([], [a]);
  var c = t && X.isCharacterBox(t), m, d;
  if (e) {
    var y = ae(e, i.havingStyle(s.sup()), i);
    d = {
      elem: y,
      kern: Math.max(i.fontMetrics().bigOpSpacing1, i.fontMetrics().bigOpSpacing3 - y.depth)
    };
  }
  if (t) {
    var v = ae(t, i.havingStyle(s.sub()), i);
    m = {
      elem: v,
      kern: Math.max(i.fontMetrics().bigOpSpacing2, i.fontMetrics().bigOpSpacing4 - v.height)
    };
  }
  var x;
  if (d && m) {
    var k = i.fontMetrics().bigOpSpacing5 + m.elem.height + m.elem.depth + m.kern + a.depth + l;
    x = _.makeVList({
      positionType: "bottom",
      positionData: k,
      children: [{
        type: "kern",
        size: i.fontMetrics().bigOpSpacing5
      }, {
        type: "elem",
        elem: m.elem,
        marginLeft: I(-r)
      }, {
        type: "kern",
        size: m.kern
      }, {
        type: "elem",
        elem: a
      }, {
        type: "kern",
        size: d.kern
      }, {
        type: "elem",
        elem: d.elem,
        marginLeft: I(r)
      }, {
        type: "kern",
        size: i.fontMetrics().bigOpSpacing5
      }]
    }, i);
  } else if (m) {
    var M = a.height - l;
    x = _.makeVList({
      positionType: "top",
      positionData: M,
      children: [{
        type: "kern",
        size: i.fontMetrics().bigOpSpacing5
      }, {
        type: "elem",
        elem: m.elem,
        marginLeft: I(-r)
      }, {
        type: "kern",
        size: m.kern
      }, {
        type: "elem",
        elem: a
      }]
    }, i);
  } else if (d) {
    var T = a.depth + l;
    x = _.makeVList({
      positionType: "bottom",
      positionData: T,
      children: [{
        type: "elem",
        elem: a
      }, {
        type: "kern",
        size: d.kern
      }, {
        type: "elem",
        elem: d.elem,
        marginLeft: I(r)
      }, {
        type: "kern",
        size: i.fontMetrics().bigOpSpacing5
      }]
    }, i);
  } else
    return a;
  var F = [x];
  if (m && r !== 0 && !c) {
    var O = _.makeSpan(["mspace"], [], i);
    O.style.marginRight = I(r), F.unshift(O);
  }
  return _.makeSpan(["mop", "op-limits"], F, i);
}, io = ["\\smallint"], Yt = (a, e) => {
  var t, i, s = !1, r;
  a.type === "supsub" ? (t = a.sup, i = a.sub, r = J(a.base, "op"), s = !0) : r = J(a, "op");
  var l = e.style, c = !1;
  l.size === V.DISPLAY.size && r.symbol && !X.contains(io, r.name) && (c = !0);
  var m;
  if (r.symbol) {
    var d = c ? "Size2-Regular" : "Size1-Regular", y = "";
    if ((r.name === "\\oiint" || r.name === "\\oiiint") && (y = r.name.slice(1), r.name = y === "oiint" ? "\\iint" : "\\iiint"), m = _.makeSymbol(r.name, d, "math", e, ["mop", "op-symbol", c ? "large-op" : "small-op"]), y.length > 0) {
      var v = m.italic, x = _.staticSvg(y + "Size" + (c ? "2" : "1"), e);
      m = _.makeVList({
        positionType: "individualShift",
        children: [{
          type: "elem",
          elem: m,
          shift: 0
        }, {
          type: "elem",
          elem: x,
          shift: c ? 0.08 : 0
        }]
      }, e), r.name = "\\" + y, m.classes.unshift("mop"), m.italic = v;
    }
  } else if (r.body) {
    var k = be(r.body, e, !0);
    k.length === 1 && k[0] instanceof $e ? (m = k[0], m.classes[0] = "mop") : m = _.makeSpan(["mop"], k, e);
  } else {
    for (var M = [], T = 1; T < r.name.length; T++)
      M.push(_.mathsym(r.name[T], r.mode, e));
    m = _.makeSpan(["mop"], M, e);
  }
  var F = 0, O = 0;
  return (m instanceof $e || r.name === "\\oiint" || r.name === "\\oiiint") && !r.suppressBaseShift && (F = (m.height - m.depth) / 2 - e.fontMetrics().axisHeight, O = m.italic), s ? ao(m, t, i, e, l, O, F) : (F && (m.style.position = "relative", m.style.top = I(F)), m);
}, ca = (a, e) => {
  var t;
  if (a.symbol)
    t = new Ue("mo", [Ve(a.name, a.mode)]), X.contains(io, a.name) && t.setAttribute("largeop", "false");
  else if (a.body)
    t = new Ue("mo", ze(a.body, e));
  else {
    t = new Ue("mi", [new aa(a.name.slice(1))]);
    var i = new Ue("mo", [Ve("⁡", "text")]);
    a.parentIsSupSub ? t = new Ue("mrow", [t, i]) : t = Pr([t, i]);
  }
  return t;
}, nl = {
  "∏": "\\prod",
  "∐": "\\coprod",
  "∑": "\\sum",
  "⋀": "\\bigwedge",
  "⋁": "\\bigvee",
  "⋂": "\\bigcap",
  "⋃": "\\bigcup",
  "⨀": "\\bigodot",
  "⨁": "\\bigoplus",
  "⨂": "\\bigotimes",
  "⨄": "\\biguplus",
  "⨆": "\\bigsqcup"
};
L({
  type: "op",
  names: ["\\coprod", "\\bigvee", "\\bigwedge", "\\biguplus", "\\bigcap", "\\bigcup", "\\intop", "\\prod", "\\sum", "\\bigotimes", "\\bigoplus", "\\bigodot", "\\bigsqcup", "\\smallint", "∏", "∐", "∑", "⋀", "⋁", "⋂", "⋃", "⨀", "⨁", "⨂", "⨄", "⨆"],
  props: {
    numArgs: 0
  },
  handler: (a, e) => {
    var {
      parser: t,
      funcName: i
    } = a, s = i;
    return s.length === 1 && (s = nl[s]), {
      type: "op",
      mode: t.mode,
      limits: !0,
      parentIsSupSub: !1,
      symbol: !0,
      name: s
    };
  },
  htmlBuilder: Yt,
  mathmlBuilder: ca
});
L({
  type: "op",
  names: ["\\mathop"],
  props: {
    numArgs: 1,
    primitive: !0
  },
  handler: (a, e) => {
    var {
      parser: t
    } = a, i = e[0];
    return {
      type: "op",
      mode: t.mode,
      limits: !1,
      parentIsSupSub: !1,
      symbol: !1,
      body: he(i)
    };
  },
  htmlBuilder: Yt,
  mathmlBuilder: ca
});
var ll = {
  "∫": "\\int",
  "∬": "\\iint",
  "∭": "\\iiint",
  "∮": "\\oint",
  "∯": "\\oiint",
  "∰": "\\oiiint"
};
L({
  type: "op",
  names: ["\\arcsin", "\\arccos", "\\arctan", "\\arctg", "\\arcctg", "\\arg", "\\ch", "\\cos", "\\cosec", "\\cosh", "\\cot", "\\cotg", "\\coth", "\\csc", "\\ctg", "\\cth", "\\deg", "\\dim", "\\exp", "\\hom", "\\ker", "\\lg", "\\ln", "\\log", "\\sec", "\\sin", "\\sinh", "\\sh", "\\tan", "\\tanh", "\\tg", "\\th"],
  props: {
    numArgs: 0
  },
  handler(a) {
    var {
      parser: e,
      funcName: t
    } = a;
    return {
      type: "op",
      mode: e.mode,
      limits: !1,
      parentIsSupSub: !1,
      symbol: !1,
      name: t
    };
  },
  htmlBuilder: Yt,
  mathmlBuilder: ca
});
L({
  type: "op",
  names: ["\\det", "\\gcd", "\\inf", "\\lim", "\\max", "\\min", "\\Pr", "\\sup"],
  props: {
    numArgs: 0
  },
  handler(a) {
    var {
      parser: e,
      funcName: t
    } = a;
    return {
      type: "op",
      mode: e.mode,
      limits: !0,
      parentIsSupSub: !1,
      symbol: !1,
      name: t
    };
  },
  htmlBuilder: Yt,
  mathmlBuilder: ca
});
L({
  type: "op",
  names: ["\\int", "\\iint", "\\iiint", "\\oint", "\\oiint", "\\oiiint", "∫", "∬", "∭", "∮", "∯", "∰"],
  props: {
    numArgs: 0
  },
  handler(a) {
    var {
      parser: e,
      funcName: t
    } = a, i = t;
    return i.length === 1 && (i = ll[i]), {
      type: "op",
      mode: e.mode,
      limits: !1,
      parentIsSupSub: !1,
      symbol: !0,
      name: i
    };
  },
  htmlBuilder: Yt,
  mathmlBuilder: ca
});
var so = (a, e) => {
  var t, i, s = !1, r;
  a.type === "supsub" ? (t = a.sup, i = a.sub, r = J(a.base, "operatorname"), s = !0) : r = J(a, "operatorname");
  var l;
  if (r.body.length > 0) {
    for (var c = r.body.map((v) => {
      var x = v.text;
      return typeof x == "string" ? {
        type: "textord",
        mode: v.mode,
        text: x
      } : v;
    }), m = be(c, e.withFont("mathrm"), !0), d = 0; d < m.length; d++) {
      var y = m[d];
      y instanceof $e && (y.text = y.text.replace(/\u2212/, "-").replace(/\u2217/, "*"));
    }
    l = _.makeSpan(["mop"], m, e);
  } else
    l = _.makeSpan(["mop"], [], e);
  return s ? ao(l, t, i, e, e.style, 0, 0) : l;
}, cl = (a, e) => {
  for (var t = ze(a.body, e.withFont("mathrm")), i = !0, s = 0; s < t.length; s++) {
    var r = t[s];
    if (!(r instanceof N.SpaceNode))
      if (r instanceof N.MathNode)
        switch (r.type) {
          case "mi":
          case "mn":
          case "ms":
          case "mspace":
          case "mtext":
            break;
          case "mo": {
            var l = r.children[0];
            r.children.length === 1 && l instanceof N.TextNode ? l.text = l.text.replace(/\u2212/, "-").replace(/\u2217/, "*") : i = !1;
            break;
          }
          default:
            i = !1;
        }
      else
        i = !1;
  }
  if (i) {
    var c = t.map((y) => y.toText()).join("");
    t = [new N.TextNode(c)];
  }
  var m = new N.MathNode("mi", t);
  m.setAttribute("mathvariant", "normal");
  var d = new N.MathNode("mo", [Ve("⁡", "text")]);
  return a.parentIsSupSub ? new N.MathNode("mrow", [m, d]) : N.newDocumentFragment([m, d]);
};
L({
  type: "operatorname",
  names: ["\\operatorname@", "\\operatornamewithlimits"],
  props: {
    numArgs: 1
  },
  handler: (a, e) => {
    var {
      parser: t,
      funcName: i
    } = a, s = e[0];
    return {
      type: "operatorname",
      mode: t.mode,
      body: he(s),
      alwaysHandleSupSub: i === "\\operatornamewithlimits",
      limits: !1,
      parentIsSupSub: !1
    };
  },
  htmlBuilder: so,
  mathmlBuilder: cl
});
u("\\operatorname", "\\@ifstar\\operatornamewithlimits\\operatorname@");
Dt({
  type: "ordgroup",
  htmlBuilder(a, e) {
    return a.semisimple ? _.makeFragment(be(a.body, e, !1)) : _.makeSpan(["mord"], be(a.body, e, !0), e);
  },
  mathmlBuilder(a, e) {
    return kt(a.body, e, !0);
  }
});
L({
  type: "overline",
  names: ["\\overline"],
  props: {
    numArgs: 1
  },
  handler(a, e) {
    var {
      parser: t
    } = a, i = e[0];
    return {
      type: "overline",
      mode: t.mode,
      body: i
    };
  },
  htmlBuilder(a, e) {
    var t = ae(a.body, e.havingCrampedStyle()), i = _.makeLineSpan("overline-line", e), s = e.fontMetrics().defaultRuleThickness, r = _.makeVList({
      positionType: "firstBaseline",
      children: [{
        type: "elem",
        elem: t
      }, {
        type: "kern",
        size: 3 * s
      }, {
        type: "elem",
        elem: i
      }, {
        type: "kern",
        size: s
      }]
    }, e);
    return _.makeSpan(["mord", "overline"], [r], e);
  },
  mathmlBuilder(a, e) {
    var t = new N.MathNode("mo", [new N.TextNode("‾")]);
    t.setAttribute("stretchy", "true");
    var i = new N.MathNode("mover", [ne(a.body, e), t]);
    return i.setAttribute("accent", "true"), i;
  }
});
L({
  type: "phantom",
  names: ["\\phantom"],
  props: {
    numArgs: 1,
    allowedInText: !0
  },
  handler: (a, e) => {
    var {
      parser: t
    } = a, i = e[0];
    return {
      type: "phantom",
      mode: t.mode,
      body: he(i)
    };
  },
  htmlBuilder: (a, e) => {
    var t = be(a.body, e.withPhantom(), !1);
    return _.makeFragment(t);
  },
  mathmlBuilder: (a, e) => {
    var t = ze(a.body, e);
    return new N.MathNode("mphantom", t);
  }
});
L({
  type: "hphantom",
  names: ["\\hphantom"],
  props: {
    numArgs: 1,
    allowedInText: !0
  },
  handler: (a, e) => {
    var {
      parser: t
    } = a, i = e[0];
    return {
      type: "hphantom",
      mode: t.mode,
      body: i
    };
  },
  htmlBuilder: (a, e) => {
    var t = _.makeSpan([], [ae(a.body, e.withPhantom())]);
    if (t.height = 0, t.depth = 0, t.children)
      for (var i = 0; i < t.children.length; i++)
        t.children[i].height = 0, t.children[i].depth = 0;
    return t = _.makeVList({
      positionType: "firstBaseline",
      children: [{
        type: "elem",
        elem: t
      }]
    }, e), _.makeSpan(["mord"], [t], e);
  },
  mathmlBuilder: (a, e) => {
    var t = ze(he(a.body), e), i = new N.MathNode("mphantom", t), s = new N.MathNode("mpadded", [i]);
    return s.setAttribute("height", "0px"), s.setAttribute("depth", "0px"), s;
  }
});
L({
  type: "vphantom",
  names: ["\\vphantom"],
  props: {
    numArgs: 1,
    allowedInText: !0
  },
  handler: (a, e) => {
    var {
      parser: t
    } = a, i = e[0];
    return {
      type: "vphantom",
      mode: t.mode,
      body: i
    };
  },
  htmlBuilder: (a, e) => {
    var t = _.makeSpan(["inner"], [ae(a.body, e.withPhantom())]), i = _.makeSpan(["fix"], []);
    return _.makeSpan(["mord", "rlap"], [t, i], e);
  },
  mathmlBuilder: (a, e) => {
    var t = ze(he(a.body), e), i = new N.MathNode("mphantom", t), s = new N.MathNode("mpadded", [i]);
    return s.setAttribute("width", "0px"), s;
  }
});
L({
  type: "raisebox",
  names: ["\\raisebox"],
  props: {
    numArgs: 2,
    argTypes: ["size", "hbox"],
    allowedInText: !0
  },
  handler(a, e) {
    var {
      parser: t
    } = a, i = J(e[0], "size").value, s = e[1];
    return {
      type: "raisebox",
      mode: t.mode,
      dy: i,
      body: s
    };
  },
  htmlBuilder(a, e) {
    var t = ae(a.body, e), i = ue(a.dy, e);
    return _.makeVList({
      positionType: "shift",
      positionData: -i,
      children: [{
        type: "elem",
        elem: t
      }]
    }, e);
  },
  mathmlBuilder(a, e) {
    var t = new N.MathNode("mpadded", [ne(a.body, e)]), i = a.dy.number + a.dy.unit;
    return t.setAttribute("voffset", i), t;
  }
});
L({
  type: "internal",
  names: ["\\relax"],
  props: {
    numArgs: 0,
    allowedInText: !0
  },
  handler(a) {
    var {
      parser: e
    } = a;
    return {
      type: "internal",
      mode: e.mode
    };
  }
});
L({
  type: "rule",
  names: ["\\rule"],
  props: {
    numArgs: 2,
    numOptionalArgs: 1,
    argTypes: ["size", "size", "size"]
  },
  handler(a, e, t) {
    var {
      parser: i
    } = a, s = t[0], r = J(e[0], "size"), l = J(e[1], "size");
    return {
      type: "rule",
      mode: i.mode,
      shift: s && J(s, "size").value,
      width: r.value,
      height: l.value
    };
  },
  htmlBuilder(a, e) {
    var t = _.makeSpan(["mord", "rule"], [], e), i = ue(a.width, e), s = ue(a.height, e), r = a.shift ? ue(a.shift, e) : 0;
    return t.style.borderRightWidth = I(i), t.style.borderTopWidth = I(s), t.style.bottom = I(r), t.width = i, t.height = s + r, t.depth = -r, t.maxFontSize = s * 1.125 * e.sizeMultiplier, t;
  },
  mathmlBuilder(a, e) {
    var t = ue(a.width, e), i = ue(a.height, e), s = a.shift ? ue(a.shift, e) : 0, r = e.color && e.getColor() || "black", l = new N.MathNode("mspace");
    l.setAttribute("mathbackground", r), l.setAttribute("width", I(t)), l.setAttribute("height", I(i));
    var c = new N.MathNode("mpadded", [l]);
    return s >= 0 ? c.setAttribute("height", I(s)) : (c.setAttribute("height", I(s)), c.setAttribute("depth", I(-s))), c.setAttribute("voffset", I(s)), c;
  }
});
function ro(a, e, t) {
  for (var i = be(a, e, !1), s = e.sizeMultiplier / t.sizeMultiplier, r = 0; r < i.length; r++) {
    var l = i[r].classes.indexOf("sizing");
    l < 0 ? Array.prototype.push.apply(i[r].classes, e.sizingClasses(t)) : i[r].classes[l + 1] === "reset-size" + e.size && (i[r].classes[l + 1] = "reset-size" + t.size), i[r].height *= s, i[r].depth *= s;
  }
  return _.makeFragment(i);
}
var Zs = ["\\tiny", "\\sixptsize", "\\scriptsize", "\\footnotesize", "\\small", "\\normalsize", "\\large", "\\Large", "\\LARGE", "\\huge", "\\Huge"], ml = (a, e) => {
  var t = e.havingSize(a.size);
  return ro(a.body, t, e);
};
L({
  type: "sizing",
  names: Zs,
  props: {
    numArgs: 0,
    allowedInText: !0
  },
  handler: (a, e) => {
    var {
      breakOnTokenText: t,
      funcName: i,
      parser: s
    } = a, r = s.parseExpression(!1, t);
    return {
      type: "sizing",
      mode: s.mode,
      // Figure out what size to use based on the list of functions above
      size: Zs.indexOf(i) + 1,
      body: r
    };
  },
  htmlBuilder: ml,
  mathmlBuilder: (a, e) => {
    var t = e.havingSize(a.size), i = ze(a.body, t), s = new N.MathNode("mstyle", i);
    return s.setAttribute("mathsize", I(t.sizeMultiplier)), s;
  }
});
L({
  type: "smash",
  names: ["\\smash"],
  props: {
    numArgs: 1,
    numOptionalArgs: 1,
    allowedInText: !0
  },
  handler: (a, e, t) => {
    var {
      parser: i
    } = a, s = !1, r = !1, l = t[0] && J(t[0], "ordgroup");
    if (l)
      for (var c = "", m = 0; m < l.body.length; ++m) {
        var d = l.body[m];
        if (c = d.text, c === "t")
          s = !0;
        else if (c === "b")
          r = !0;
        else {
          s = !1, r = !1;
          break;
        }
      }
    else
      s = !0, r = !0;
    var y = e[0];
    return {
      type: "smash",
      mode: i.mode,
      body: y,
      smashHeight: s,
      smashDepth: r
    };
  },
  htmlBuilder: (a, e) => {
    var t = _.makeSpan([], [ae(a.body, e)]);
    if (!a.smashHeight && !a.smashDepth)
      return t;
    if (a.smashHeight && (t.height = 0, t.children))
      for (var i = 0; i < t.children.length; i++)
        t.children[i].height = 0;
    if (a.smashDepth && (t.depth = 0, t.children))
      for (var s = 0; s < t.children.length; s++)
        t.children[s].depth = 0;
    var r = _.makeVList({
      positionType: "firstBaseline",
      children: [{
        type: "elem",
        elem: t
      }]
    }, e);
    return _.makeSpan(["mord"], [r], e);
  },
  mathmlBuilder: (a, e) => {
    var t = new N.MathNode("mpadded", [ne(a.body, e)]);
    return a.smashHeight && t.setAttribute("height", "0px"), a.smashDepth && t.setAttribute("depth", "0px"), t;
  }
});
L({
  type: "sqrt",
  names: ["\\sqrt"],
  props: {
    numArgs: 1,
    numOptionalArgs: 1
  },
  handler(a, e, t) {
    var {
      parser: i
    } = a, s = t[0], r = e[0];
    return {
      type: "sqrt",
      mode: i.mode,
      body: r,
      index: s
    };
  },
  htmlBuilder(a, e) {
    var t = ae(a.body, e.havingCrampedStyle());
    t.height === 0 && (t.height = e.fontMetrics().xHeight), t = _.wrapFragment(t, e);
    var i = e.fontMetrics(), s = i.defaultRuleThickness, r = s;
    e.style.id < V.TEXT.id && (r = e.fontMetrics().xHeight);
    var l = s + r / 4, c = t.height + t.depth + l + s, {
      span: m,
      ruleWidth: d,
      advanceWidth: y
    } = ut.sqrtImage(c, e), v = m.height - d;
    v > t.height + t.depth + l && (l = (l + v - t.height - t.depth) / 2);
    var x = m.height - t.height - l - d;
    t.style.paddingLeft = I(y);
    var k = _.makeVList({
      positionType: "firstBaseline",
      children: [{
        type: "elem",
        elem: t,
        wrapperClasses: ["svg-align"]
      }, {
        type: "kern",
        size: -(t.height + x)
      }, {
        type: "elem",
        elem: m
      }, {
        type: "kern",
        size: d
      }]
    }, e);
    if (a.index) {
      var M = e.havingStyle(V.SCRIPTSCRIPT), T = ae(a.index, M, e), F = 0.6 * (k.height - k.depth), O = _.makeVList({
        positionType: "shift",
        positionData: -F,
        children: [{
          type: "elem",
          elem: T
        }]
      }, e), w = _.makeSpan(["root"], [O]);
      return _.makeSpan(["mord", "sqrt"], [w, k], e);
    } else
      return _.makeSpan(["mord", "sqrt"], [k], e);
  },
  mathmlBuilder(a, e) {
    var {
      body: t,
      index: i
    } = a;
    return i ? new N.MathNode("mroot", [ne(t, e), ne(i, e)]) : new N.MathNode("msqrt", [ne(t, e)]);
  }
});
var Js = {
  display: V.DISPLAY,
  text: V.TEXT,
  script: V.SCRIPT,
  scriptscript: V.SCRIPTSCRIPT
};
L({
  type: "styling",
  names: ["\\displaystyle", "\\textstyle", "\\scriptstyle", "\\scriptscriptstyle"],
  props: {
    numArgs: 0,
    allowedInText: !0,
    primitive: !0
  },
  handler(a, e) {
    var {
      breakOnTokenText: t,
      funcName: i,
      parser: s
    } = a, r = s.parseExpression(!0, t), l = i.slice(1, i.length - 5);
    return {
      type: "styling",
      mode: s.mode,
      // Figure out what style to use by pulling out the style from
      // the function name
      style: l,
      body: r
    };
  },
  htmlBuilder(a, e) {
    var t = Js[a.style], i = e.havingStyle(t).withFont("");
    return ro(a.body, i, e);
  },
  mathmlBuilder(a, e) {
    var t = Js[a.style], i = e.havingStyle(t), s = ze(a.body, i), r = new N.MathNode("mstyle", s), l = {
      display: ["0", "true"],
      text: ["0", "false"],
      script: ["1", "false"],
      scriptscript: ["2", "false"]
    }, c = l[a.style];
    return r.setAttribute("scriptlevel", c[0]), r.setAttribute("displaystyle", c[1]), r;
  }
});
var gl = function(e, t) {
  var i = e.base;
  if (i)
    if (i.type === "op") {
      var s = i.limits && (t.style.size === V.DISPLAY.size || i.alwaysHandleSupSub);
      return s ? Yt : null;
    } else if (i.type === "operatorname") {
      var r = i.alwaysHandleSupSub && (t.style.size === V.DISPLAY.size || i.limits);
      return r ? so : null;
    } else {
      if (i.type === "accent")
        return X.isCharacterBox(i.base) ? Ri : null;
      if (i.type === "horizBrace") {
        var l = !e.sub;
        return l === i.isOver ? to : null;
      } else
        return null;
    }
  else
    return null;
};
Dt({
  type: "supsub",
  htmlBuilder(a, e) {
    var t = gl(a, e);
    if (t)
      return t(a, e);
    var {
      base: i,
      sup: s,
      sub: r
    } = a, l = ae(i, e), c, m, d = e.fontMetrics(), y = 0, v = 0, x = i && X.isCharacterBox(i);
    if (s) {
      var k = e.havingStyle(e.style.sup());
      c = ae(s, k, e), x || (y = l.height - k.fontMetrics().supDrop * k.sizeMultiplier / e.sizeMultiplier);
    }
    if (r) {
      var M = e.havingStyle(e.style.sub());
      m = ae(r, M, e), x || (v = l.depth + M.fontMetrics().subDrop * M.sizeMultiplier / e.sizeMultiplier);
    }
    var T;
    e.style === V.DISPLAY ? T = d.sup1 : e.style.cramped ? T = d.sup3 : T = d.sup2;
    var F = e.sizeMultiplier, O = I(0.5 / d.ptPerEm / F), w = null;
    if (m) {
      var f = a.base && a.base.type === "op" && a.base.name && (a.base.name === "\\oiint" || a.base.name === "\\oiiint");
      (l instanceof $e || f) && (w = I(-l.italic));
    }
    var S;
    if (c && m) {
      y = Math.max(y, T, c.depth + 0.25 * d.xHeight), v = Math.max(v, d.sub2);
      var A = d.defaultRuleThickness, E = 4 * A;
      if (y - c.depth - (m.height - v) < E) {
        v = E - (y - c.depth) + m.height;
        var P = 0.8 * d.xHeight - (y - c.depth);
        P > 0 && (y += P, v -= P);
      }
      var R = [{
        type: "elem",
        elem: m,
        shift: v,
        marginRight: O,
        marginLeft: w
      }, {
        type: "elem",
        elem: c,
        shift: -y,
        marginRight: O
      }];
      S = _.makeVList({
        positionType: "individualShift",
        children: R
      }, e);
    } else if (m) {
      v = Math.max(v, d.sub1, m.height - 0.8 * d.xHeight);
      var B = [{
        type: "elem",
        elem: m,
        marginLeft: w,
        marginRight: O
      }];
      S = _.makeVList({
        positionType: "shift",
        positionData: v,
        children: B
      }, e);
    } else if (c)
      y = Math.max(y, T, c.depth + 0.25 * d.xHeight), S = _.makeVList({
        positionType: "shift",
        positionData: -y,
        children: [{
          type: "elem",
          elem: c,
          marginRight: O
        }]
      }, e);
    else
      throw new Error("supsub must have either sup or sub.");
    var K = xi(l, "right") || "mord";
    return _.makeSpan([K], [l, _.makeSpan(["msupsub"], [S])], e);
  },
  mathmlBuilder(a, e) {
    var t = !1, i, s;
    a.base && a.base.type === "horizBrace" && (s = !!a.sup, s === a.base.isOver && (t = !0, i = a.base.isOver)), a.base && (a.base.type === "op" || a.base.type === "operatorname") && (a.base.parentIsSupSub = !0);
    var r = [ne(a.base, e)];
    a.sub && r.push(ne(a.sub, e)), a.sup && r.push(ne(a.sup, e));
    var l;
    if (t)
      l = i ? "mover" : "munder";
    else if (a.sub)
      if (a.sup) {
        var d = a.base;
        d && d.type === "op" && d.limits && e.style === V.DISPLAY || d && d.type === "operatorname" && d.alwaysHandleSupSub && (e.style === V.DISPLAY || d.limits) ? l = "munderover" : l = "msubsup";
      } else {
        var m = a.base;
        m && m.type === "op" && m.limits && (e.style === V.DISPLAY || m.alwaysHandleSupSub) || m && m.type === "operatorname" && m.alwaysHandleSupSub && (m.limits || e.style === V.DISPLAY) ? l = "munder" : l = "msub";
      }
    else {
      var c = a.base;
      c && c.type === "op" && c.limits && (e.style === V.DISPLAY || c.alwaysHandleSupSub) || c && c.type === "operatorname" && c.alwaysHandleSupSub && (c.limits || e.style === V.DISPLAY) ? l = "mover" : l = "msup";
    }
    return new N.MathNode(l, r);
  }
});
Dt({
  type: "atom",
  htmlBuilder(a, e) {
    return _.mathsym(a.text, a.mode, e, ["m" + a.family]);
  },
  mathmlBuilder(a, e) {
    var t = new N.MathNode("mo", [Ve(a.text, a.mode)]);
    if (a.family === "bin") {
      var i = Ci(a, e);
      i === "bold-italic" && t.setAttribute("mathvariant", i);
    } else
      a.family === "punct" ? t.setAttribute("separator", "true") : (a.family === "open" || a.family === "close") && t.setAttribute("stretchy", "false");
    return t;
  }
});
var oo = {
  mi: "italic",
  mn: "normal",
  mtext: "normal"
};
Dt({
  type: "mathord",
  htmlBuilder(a, e) {
    return _.makeOrd(a, e, "mathord");
  },
  mathmlBuilder(a, e) {
    var t = new N.MathNode("mi", [Ve(a.text, a.mode, e)]), i = Ci(a, e) || "italic";
    return i !== oo[t.type] && t.setAttribute("mathvariant", i), t;
  }
});
Dt({
  type: "textord",
  htmlBuilder(a, e) {
    return _.makeOrd(a, e, "textord");
  },
  mathmlBuilder(a, e) {
    var t = Ve(a.text, a.mode, e), i = Ci(a, e) || "normal", s;
    return a.mode === "text" ? s = new N.MathNode("mtext", [t]) : /[0-9]/.test(a.text) ? s = new N.MathNode("mn", [t]) : a.text === "\\prime" ? s = new N.MathNode("mo", [t]) : s = new N.MathNode("mi", [t]), i !== oo[s.type] && s.setAttribute("mathvariant", i), s;
  }
});
var ui = {
  "\\nobreak": "nobreak",
  "\\allowbreak": "allowbreak"
}, di = {
  " ": {},
  "\\ ": {},
  "~": {
    className: "nobreak"
  },
  "\\space": {},
  "\\nobreakspace": {
    className: "nobreak"
  }
};
Dt({
  type: "spacing",
  htmlBuilder(a, e) {
    if (di.hasOwnProperty(a.text)) {
      var t = di[a.text].className || "";
      if (a.mode === "text") {
        var i = _.makeOrd(a, e, "textord");
        return i.classes.push(t), i;
      } else
        return _.makeSpan(["mspace", t], [_.mathsym(a.text, a.mode, e)], e);
    } else {
      if (ui.hasOwnProperty(a.text))
        return _.makeSpan(["mspace", ui[a.text]], [], e);
      throw new z('Unknown type of space "' + a.text + '"');
    }
  },
  mathmlBuilder(a, e) {
    var t;
    if (di.hasOwnProperty(a.text))
      t = new N.MathNode("mtext", [new N.TextNode(" ")]);
    else {
      if (ui.hasOwnProperty(a.text))
        return new N.MathNode("mspace");
      throw new z('Unknown type of space "' + a.text + '"');
    }
    return t;
  }
});
var Qs = () => {
  var a = new N.MathNode("mtd", []);
  return a.setAttribute("width", "50%"), a;
};
Dt({
  type: "tag",
  mathmlBuilder(a, e) {
    var t = new N.MathNode("mtable", [new N.MathNode("mtr", [Qs(), new N.MathNode("mtd", [kt(a.body, e)]), Qs(), new N.MathNode("mtd", [kt(a.tag, e)])])]);
    return t.setAttribute("width", "100%"), t;
  }
});
var er = {
  "\\text": void 0,
  "\\textrm": "textrm",
  "\\textsf": "textsf",
  "\\texttt": "texttt",
  "\\textnormal": "textrm"
}, tr = {
  "\\textbf": "textbf",
  "\\textmd": "textmd"
}, ul = {
  "\\textit": "textit",
  "\\textup": "textup"
}, ar = (a, e) => {
  var t = a.font;
  return t ? er[t] ? e.withTextFontFamily(er[t]) : tr[t] ? e.withTextFontWeight(tr[t]) : e.withTextFontShape(ul[t]) : e;
};
L({
  type: "text",
  names: [
    // Font families
    "\\text",
    "\\textrm",
    "\\textsf",
    "\\texttt",
    "\\textnormal",
    // Font weights
    "\\textbf",
    "\\textmd",
    // Font Shapes
    "\\textit",
    "\\textup"
  ],
  props: {
    numArgs: 1,
    argTypes: ["text"],
    allowedInArgument: !0,
    allowedInText: !0
  },
  handler(a, e) {
    var {
      parser: t,
      funcName: i
    } = a, s = e[0];
    return {
      type: "text",
      mode: t.mode,
      body: he(s),
      font: i
    };
  },
  htmlBuilder(a, e) {
    var t = ar(a, e), i = be(a.body, t, !0);
    return _.makeSpan(["mord", "text"], i, t);
  },
  mathmlBuilder(a, e) {
    var t = ar(a, e);
    return kt(a.body, t);
  }
});
L({
  type: "underline",
  names: ["\\underline"],
  props: {
    numArgs: 1,
    allowedInText: !0
  },
  handler(a, e) {
    var {
      parser: t
    } = a;
    return {
      type: "underline",
      mode: t.mode,
      body: e[0]
    };
  },
  htmlBuilder(a, e) {
    var t = ae(a.body, e), i = _.makeLineSpan("underline-line", e), s = e.fontMetrics().defaultRuleThickness, r = _.makeVList({
      positionType: "top",
      positionData: t.height,
      children: [{
        type: "kern",
        size: s
      }, {
        type: "elem",
        elem: i
      }, {
        type: "kern",
        size: 3 * s
      }, {
        type: "elem",
        elem: t
      }]
    }, e);
    return _.makeSpan(["mord", "underline"], [r], e);
  },
  mathmlBuilder(a, e) {
    var t = new N.MathNode("mo", [new N.TextNode("‾")]);
    t.setAttribute("stretchy", "true");
    var i = new N.MathNode("munder", [ne(a.body, e), t]);
    return i.setAttribute("accentunder", "true"), i;
  }
});
L({
  type: "vcenter",
  names: ["\\vcenter"],
  props: {
    numArgs: 1,
    argTypes: ["original"],
    // In LaTeX, \vcenter can act only on a box.
    allowedInText: !1
  },
  handler(a, e) {
    var {
      parser: t
    } = a;
    return {
      type: "vcenter",
      mode: t.mode,
      body: e[0]
    };
  },
  htmlBuilder(a, e) {
    var t = ae(a.body, e), i = e.fontMetrics().axisHeight, s = 0.5 * (t.height - i - (t.depth + i));
    return _.makeVList({
      positionType: "shift",
      positionData: s,
      children: [{
        type: "elem",
        elem: t
      }]
    }, e);
  },
  mathmlBuilder(a, e) {
    return new N.MathNode("mpadded", [ne(a.body, e)], ["vcenter"]);
  }
});
L({
  type: "verb",
  names: ["\\verb"],
  props: {
    numArgs: 0,
    allowedInText: !0
  },
  handler(a, e, t) {
    throw new z("\\verb ended by end of line instead of matching delimiter");
  },
  htmlBuilder(a, e) {
    for (var t = ir(a), i = [], s = e.havingStyle(e.style.text()), r = 0; r < t.length; r++) {
      var l = t[r];
      l === "~" && (l = "\\textasciitilde"), i.push(_.makeSymbol(l, "Typewriter-Regular", a.mode, s, ["mord", "texttt"]));
    }
    return _.makeSpan(["mord", "text"].concat(s.sizingClasses(e)), _.tryCombineChars(i), s);
  },
  mathmlBuilder(a, e) {
    var t = new N.TextNode(ir(a)), i = new N.MathNode("mtext", [t]);
    return i.setAttribute("mathvariant", "monospace"), i;
  }
});
var ir = (a) => a.body.replace(/ /g, a.star ? "␣" : " "), vt = Mr, no = `[ \r
	]`, dl = "\\\\[a-zA-Z@]+", pl = "\\\\[^\uD800-\uDFFF]", hl = "(" + dl + ")" + no + "*", yl = `\\\\(
|[ \r	]+
?)[ \r	]*`, Ei = "[̀-ͯ]", fl = new RegExp(Ei + "+$"), bl = "(" + no + "+)|" + // whitespace
(yl + "|") + // \whitespace
"([!-\\[\\]-‧‪-퟿豈-￿]" + // single codepoint
(Ei + "*") + // ...plus accents
"|[\uD800-\uDBFF][\uDC00-\uDFFF]" + // surrogate pair
(Ei + "*") + // ...plus accents
"|\\\\verb\\*([^]).*?\\4|\\\\verb([^*a-zA-Z]).*?\\5" + // \verb unstarred
("|" + hl) + // \macroName + spaces
("|" + pl + ")");
class sr {
  // Category codes. The lexer only supports comment characters (14) for now.
  // MacroExpander additionally distinguishes active (13).
  constructor(e, t) {
    this.input = void 0, this.settings = void 0, this.tokenRegex = void 0, this.catcodes = void 0, this.input = e, this.settings = t, this.tokenRegex = new RegExp(bl, "g"), this.catcodes = {
      "%": 14,
      // comment character
      "~": 13
      // active character
    };
  }
  setCatcode(e, t) {
    this.catcodes[e] = t;
  }
  /**
   * This function lexes a single token.
   */
  lex() {
    var e = this.input, t = this.tokenRegex.lastIndex;
    if (t === e.length)
      return new at("EOF", new Re(this, t, t));
    var i = this.tokenRegex.exec(e);
    if (i === null || i.index !== t)
      throw new z("Unexpected character: '" + e[t] + "'", new at(e[t], new Re(this, t, t + 1)));
    var s = i[6] || i[3] || (i[2] ? "\\ " : " ");
    if (this.catcodes[s] === 14) {
      var r = e.indexOf(`
`, this.tokenRegex.lastIndex);
      return r === -1 ? (this.tokenRegex.lastIndex = e.length, this.settings.reportNonstrict("commentAtEnd", "% comment has no terminating newline; LaTeX would fail because of commenting the end of math mode (e.g. $)")) : this.tokenRegex.lastIndex = r + 1, this.lex();
    }
    return new at(s, new Re(this, t, this.tokenRegex.lastIndex));
  }
}
class vl {
  /**
   * Both arguments are optional.  The first argument is an object of
   * built-in mappings which never change.  The second argument is an object
   * of initial (global-level) mappings, which will constantly change
   * according to any global/top-level `set`s done.
   */
  constructor(e, t) {
    e === void 0 && (e = {}), t === void 0 && (t = {}), this.current = void 0, this.builtins = void 0, this.undefStack = void 0, this.current = t, this.builtins = e, this.undefStack = [];
  }
  /**
   * Start a new nested group, affecting future local `set`s.
   */
  beginGroup() {
    this.undefStack.push({});
  }
  /**
   * End current nested group, restoring values before the group began.
   */
  endGroup() {
    if (this.undefStack.length === 0)
      throw new z("Unbalanced namespace destruction: attempt to pop global namespace; please report this as a bug");
    var e = this.undefStack.pop();
    for (var t in e)
      e.hasOwnProperty(t) && (e[t] == null ? delete this.current[t] : this.current[t] = e[t]);
  }
  /**
   * Ends all currently nested groups (if any), restoring values before the
   * groups began.  Useful in case of an error in the middle of parsing.
   */
  endGroups() {
    for (; this.undefStack.length > 0; )
      this.endGroup();
  }
  /**
   * Detect whether `name` has a definition.  Equivalent to
   * `get(name) != null`.
   */
  has(e) {
    return this.current.hasOwnProperty(e) || this.builtins.hasOwnProperty(e);
  }
  /**
   * Get the current value of a name, or `undefined` if there is no value.
   *
   * Note: Do not use `if (namespace.get(...))` to detect whether a macro
   * is defined, as the definition may be the empty string which evaluates
   * to `false` in JavaScript.  Use `if (namespace.get(...) != null)` or
   * `if (namespace.has(...))`.
   */
  get(e) {
    return this.current.hasOwnProperty(e) ? this.current[e] : this.builtins[e];
  }
  /**
   * Set the current value of a name, and optionally set it globally too.
   * Local set() sets the current value and (when appropriate) adds an undo
   * operation to the undo stack.  Global set() may change the undo
   * operation at every level, so takes time linear in their number.
   * A value of undefined means to delete existing definitions.
   */
  set(e, t, i) {
    if (i === void 0 && (i = !1), i) {
      for (var s = 0; s < this.undefStack.length; s++)
        delete this.undefStack[s][e];
      this.undefStack.length > 0 && (this.undefStack[this.undefStack.length - 1][e] = t);
    } else {
      var r = this.undefStack[this.undefStack.length - 1];
      r && !r.hasOwnProperty(e) && (r[e] = this.current[e]);
    }
    t == null ? delete this.current[e] : this.current[e] = t;
  }
}
var wl = Kr;
u("\\noexpand", function(a) {
  var e = a.popToken();
  return a.isExpandable(e.text) && (e.noexpand = !0, e.treatAsRelax = !0), {
    tokens: [e],
    numArgs: 0
  };
});
u("\\expandafter", function(a) {
  var e = a.popToken();
  return a.expandOnce(!0), {
    tokens: [e],
    numArgs: 0
  };
});
u("\\@firstoftwo", function(a) {
  var e = a.consumeArgs(2);
  return {
    tokens: e[0],
    numArgs: 0
  };
});
u("\\@secondoftwo", function(a) {
  var e = a.consumeArgs(2);
  return {
    tokens: e[1],
    numArgs: 0
  };
});
u("\\@ifnextchar", function(a) {
  var e = a.consumeArgs(3);
  a.consumeSpaces();
  var t = a.future();
  return e[0].length === 1 && e[0][0].text === t.text ? {
    tokens: e[1],
    numArgs: 0
  } : {
    tokens: e[2],
    numArgs: 0
  };
});
u("\\@ifstar", "\\@ifnextchar *{\\@firstoftwo{#1}}");
u("\\TextOrMath", function(a) {
  var e = a.consumeArgs(2);
  return a.mode === "text" ? {
    tokens: e[0],
    numArgs: 0
  } : {
    tokens: e[1],
    numArgs: 0
  };
});
var rr = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  a: 10,
  A: 10,
  b: 11,
  B: 11,
  c: 12,
  C: 12,
  d: 13,
  D: 13,
  e: 14,
  E: 14,
  f: 15,
  F: 15
};
u("\\char", function(a) {
  var e = a.popToken(), t, i = "";
  if (e.text === "'")
    t = 8, e = a.popToken();
  else if (e.text === '"')
    t = 16, e = a.popToken();
  else if (e.text === "`")
    if (e = a.popToken(), e.text[0] === "\\")
      i = e.text.charCodeAt(1);
    else {
      if (e.text === "EOF")
        throw new z("\\char` missing argument");
      i = e.text.charCodeAt(0);
    }
  else
    t = 10;
  if (t) {
    if (i = rr[e.text], i == null || i >= t)
      throw new z("Invalid base-" + t + " digit " + e.text);
    for (var s; (s = rr[a.future().text]) != null && s < t; )
      i *= t, i += s, a.popToken();
  }
  return "\\@char{" + i + "}";
});
var Wi = (a, e, t) => {
  var i = a.consumeArg().tokens;
  if (i.length !== 1)
    throw new z("\\newcommand's first argument must be a macro name");
  var s = i[0].text, r = a.isDefined(s);
  if (r && !e)
    throw new z("\\newcommand{" + s + "} attempting to redefine " + (s + "; use \\renewcommand"));
  if (!r && !t)
    throw new z("\\renewcommand{" + s + "} when command " + s + " does not yet exist; use \\newcommand");
  var l = 0;
  if (i = a.consumeArg().tokens, i.length === 1 && i[0].text === "[") {
    for (var c = "", m = a.expandNextToken(); m.text !== "]" && m.text !== "EOF"; )
      c += m.text, m = a.expandNextToken();
    if (!c.match(/^\s*[0-9]+\s*$/))
      throw new z("Invalid number of arguments: " + c);
    l = parseInt(c), i = a.consumeArg().tokens;
  }
  return a.macros.set(s, {
    tokens: i,
    numArgs: l
  }), "";
};
u("\\newcommand", (a) => Wi(a, !1, !0));
u("\\renewcommand", (a) => Wi(a, !0, !1));
u("\\providecommand", (a) => Wi(a, !0, !0));
u("\\message", (a) => {
  var e = a.consumeArgs(1)[0];
  return console.log(e.reverse().map((t) => t.text).join("")), "";
});
u("\\errmessage", (a) => {
  var e = a.consumeArgs(1)[0];
  return console.error(e.reverse().map((t) => t.text).join("")), "";
});
u("\\show", (a) => {
  var e = a.popToken(), t = e.text;
  return console.log(e, a.macros.get(t), vt[t], ce.math[t], ce.text[t]), "";
});
u("\\bgroup", "{");
u("\\egroup", "}");
u("~", "\\nobreakspace");
u("\\lq", "`");
u("\\rq", "'");
u("\\aa", "\\r a");
u("\\AA", "\\r A");
u("\\textcopyright", "\\html@mathml{\\textcircled{c}}{\\char`©}");
u("\\copyright", "\\TextOrMath{\\textcopyright}{\\text{\\textcopyright}}");
u("\\textregistered", "\\html@mathml{\\textcircled{\\scriptsize R}}{\\char`®}");
u("ℬ", "\\mathscr{B}");
u("ℰ", "\\mathscr{E}");
u("ℱ", "\\mathscr{F}");
u("ℋ", "\\mathscr{H}");
u("ℐ", "\\mathscr{I}");
u("ℒ", "\\mathscr{L}");
u("ℳ", "\\mathscr{M}");
u("ℛ", "\\mathscr{R}");
u("ℭ", "\\mathfrak{C}");
u("ℌ", "\\mathfrak{H}");
u("ℨ", "\\mathfrak{Z}");
u("\\Bbbk", "\\Bbb{k}");
u("·", "\\cdotp");
u("\\llap", "\\mathllap{\\textrm{#1}}");
u("\\rlap", "\\mathrlap{\\textrm{#1}}");
u("\\clap", "\\mathclap{\\textrm{#1}}");
u("\\mathstrut", "\\vphantom{(}");
u("\\underbar", "\\underline{\\text{#1}}");
u("\\not", '\\html@mathml{\\mathrel{\\mathrlap\\@not}}{\\char"338}');
u("\\neq", "\\html@mathml{\\mathrel{\\not=}}{\\mathrel{\\char`≠}}");
u("\\ne", "\\neq");
u("≠", "\\neq");
u("\\notin", "\\html@mathml{\\mathrel{{\\in}\\mathllap{/\\mskip1mu}}}{\\mathrel{\\char`∉}}");
u("∉", "\\notin");
u("≘", "\\html@mathml{\\mathrel{=\\kern{-1em}\\raisebox{0.4em}{$\\scriptsize\\frown$}}}{\\mathrel{\\char`≘}}");
u("≙", "\\html@mathml{\\stackrel{\\tiny\\wedge}{=}}{\\mathrel{\\char`≘}}");
u("≚", "\\html@mathml{\\stackrel{\\tiny\\vee}{=}}{\\mathrel{\\char`≚}}");
u("≛", "\\html@mathml{\\stackrel{\\scriptsize\\star}{=}}{\\mathrel{\\char`≛}}");
u("≝", "\\html@mathml{\\stackrel{\\tiny\\mathrm{def}}{=}}{\\mathrel{\\char`≝}}");
u("≞", "\\html@mathml{\\stackrel{\\tiny\\mathrm{m}}{=}}{\\mathrel{\\char`≞}}");
u("≟", "\\html@mathml{\\stackrel{\\tiny?}{=}}{\\mathrel{\\char`≟}}");
u("⟂", "\\perp");
u("‼", "\\mathclose{!\\mkern-0.8mu!}");
u("∌", "\\notni");
u("⌜", "\\ulcorner");
u("⌝", "\\urcorner");
u("⌞", "\\llcorner");
u("⌟", "\\lrcorner");
u("©", "\\copyright");
u("®", "\\textregistered");
u("️", "\\textregistered");
u("\\ulcorner", '\\html@mathml{\\@ulcorner}{\\mathop{\\char"231c}}');
u("\\urcorner", '\\html@mathml{\\@urcorner}{\\mathop{\\char"231d}}');
u("\\llcorner", '\\html@mathml{\\@llcorner}{\\mathop{\\char"231e}}');
u("\\lrcorner", '\\html@mathml{\\@lrcorner}{\\mathop{\\char"231f}}');
u("\\vdots", "\\mathord{\\varvdots\\rule{0pt}{15pt}}");
u("⋮", "\\vdots");
u("\\varGamma", "\\mathit{\\Gamma}");
u("\\varDelta", "\\mathit{\\Delta}");
u("\\varTheta", "\\mathit{\\Theta}");
u("\\varLambda", "\\mathit{\\Lambda}");
u("\\varXi", "\\mathit{\\Xi}");
u("\\varPi", "\\mathit{\\Pi}");
u("\\varSigma", "\\mathit{\\Sigma}");
u("\\varUpsilon", "\\mathit{\\Upsilon}");
u("\\varPhi", "\\mathit{\\Phi}");
u("\\varPsi", "\\mathit{\\Psi}");
u("\\varOmega", "\\mathit{\\Omega}");
u("\\substack", "\\begin{subarray}{c}#1\\end{subarray}");
u("\\colon", "\\nobreak\\mskip2mu\\mathpunct{}\\mathchoice{\\mkern-3mu}{\\mkern-3mu}{}{}{:}\\mskip6mu\\relax");
u("\\boxed", "\\fbox{$\\displaystyle{#1}$}");
u("\\iff", "\\DOTSB\\;\\Longleftrightarrow\\;");
u("\\implies", "\\DOTSB\\;\\Longrightarrow\\;");
u("\\impliedby", "\\DOTSB\\;\\Longleftarrow\\;");
var or = {
  ",": "\\dotsc",
  "\\not": "\\dotsb",
  // \keybin@ checks for the following:
  "+": "\\dotsb",
  "=": "\\dotsb",
  "<": "\\dotsb",
  ">": "\\dotsb",
  "-": "\\dotsb",
  "*": "\\dotsb",
  ":": "\\dotsb",
  // Symbols whose definition starts with \DOTSB:
  "\\DOTSB": "\\dotsb",
  "\\coprod": "\\dotsb",
  "\\bigvee": "\\dotsb",
  "\\bigwedge": "\\dotsb",
  "\\biguplus": "\\dotsb",
  "\\bigcap": "\\dotsb",
  "\\bigcup": "\\dotsb",
  "\\prod": "\\dotsb",
  "\\sum": "\\dotsb",
  "\\bigotimes": "\\dotsb",
  "\\bigoplus": "\\dotsb",
  "\\bigodot": "\\dotsb",
  "\\bigsqcup": "\\dotsb",
  "\\And": "\\dotsb",
  "\\longrightarrow": "\\dotsb",
  "\\Longrightarrow": "\\dotsb",
  "\\longleftarrow": "\\dotsb",
  "\\Longleftarrow": "\\dotsb",
  "\\longleftrightarrow": "\\dotsb",
  "\\Longleftrightarrow": "\\dotsb",
  "\\mapsto": "\\dotsb",
  "\\longmapsto": "\\dotsb",
  "\\hookrightarrow": "\\dotsb",
  "\\doteq": "\\dotsb",
  // Symbols whose definition starts with \mathbin:
  "\\mathbin": "\\dotsb",
  // Symbols whose definition starts with \mathrel:
  "\\mathrel": "\\dotsb",
  "\\relbar": "\\dotsb",
  "\\Relbar": "\\dotsb",
  "\\xrightarrow": "\\dotsb",
  "\\xleftarrow": "\\dotsb",
  // Symbols whose definition starts with \DOTSI:
  "\\DOTSI": "\\dotsi",
  "\\int": "\\dotsi",
  "\\oint": "\\dotsi",
  "\\iint": "\\dotsi",
  "\\iiint": "\\dotsi",
  "\\iiiint": "\\dotsi",
  "\\idotsint": "\\dotsi",
  // Symbols whose definition starts with \DOTSX:
  "\\DOTSX": "\\dotsx"
};
u("\\dots", function(a) {
  var e = "\\dotso", t = a.expandAfterFuture().text;
  return t in or ? e = or[t] : (t.slice(0, 4) === "\\not" || t in ce.math && X.contains(["bin", "rel"], ce.math[t].group)) && (e = "\\dotsb"), e;
});
var Yi = {
  // \rightdelim@ checks for the following:
  ")": !0,
  "]": !0,
  "\\rbrack": !0,
  "\\}": !0,
  "\\rbrace": !0,
  "\\rangle": !0,
  "\\rceil": !0,
  "\\rfloor": !0,
  "\\rgroup": !0,
  "\\rmoustache": !0,
  "\\right": !0,
  "\\bigr": !0,
  "\\biggr": !0,
  "\\Bigr": !0,
  "\\Biggr": !0,
  // \extra@ also tests for the following:
  $: !0,
  // \extrap@ checks for the following:
  ";": !0,
  ".": !0,
  ",": !0
};
u("\\dotso", function(a) {
  var e = a.future().text;
  return e in Yi ? "\\ldots\\," : "\\ldots";
});
u("\\dotsc", function(a) {
  var e = a.future().text;
  return e in Yi && e !== "," ? "\\ldots\\," : "\\ldots";
});
u("\\cdots", function(a) {
  var e = a.future().text;
  return e in Yi ? "\\@cdots\\," : "\\@cdots";
});
u("\\dotsb", "\\cdots");
u("\\dotsm", "\\cdots");
u("\\dotsi", "\\!\\cdots");
u("\\dotsx", "\\ldots\\,");
u("\\DOTSI", "\\relax");
u("\\DOTSB", "\\relax");
u("\\DOTSX", "\\relax");
u("\\tmspace", "\\TextOrMath{\\kern#1#3}{\\mskip#1#2}\\relax");
u("\\,", "\\tmspace+{3mu}{.1667em}");
u("\\thinspace", "\\,");
u("\\>", "\\mskip{4mu}");
u("\\:", "\\tmspace+{4mu}{.2222em}");
u("\\medspace", "\\:");
u("\\;", "\\tmspace+{5mu}{.2777em}");
u("\\thickspace", "\\;");
u("\\!", "\\tmspace-{3mu}{.1667em}");
u("\\negthinspace", "\\!");
u("\\negmedspace", "\\tmspace-{4mu}{.2222em}");
u("\\negthickspace", "\\tmspace-{5mu}{.277em}");
u("\\enspace", "\\kern.5em ");
u("\\enskip", "\\hskip.5em\\relax");
u("\\quad", "\\hskip1em\\relax");
u("\\qquad", "\\hskip2em\\relax");
u("\\tag", "\\@ifstar\\tag@literal\\tag@paren");
u("\\tag@paren", "\\tag@literal{({#1})}");
u("\\tag@literal", (a) => {
  if (a.macros.get("\\df@tag"))
    throw new z("Multiple \\tag");
  return "\\gdef\\df@tag{\\text{#1}}";
});
u("\\bmod", "\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}\\mathbin{\\rm mod}\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}");
u("\\pod", "\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern8mu}{\\mkern8mu}{\\mkern8mu}(#1)");
u("\\pmod", "\\pod{{\\rm mod}\\mkern6mu#1}");
u("\\mod", "\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern12mu}{\\mkern12mu}{\\mkern12mu}{\\rm mod}\\,\\,#1");
u("\\newline", "\\\\\\relax");
u("\\TeX", "\\textrm{\\html@mathml{T\\kern-.1667em\\raisebox{-.5ex}{E}\\kern-.125emX}{TeX}}");
var lo = I(tt["Main-Regular"][84][1] - 0.7 * tt["Main-Regular"][65][1]);
u("\\LaTeX", "\\textrm{\\html@mathml{" + ("L\\kern-.36em\\raisebox{" + lo + "}{\\scriptstyle A}") + "\\kern-.15em\\TeX}{LaTeX}}");
u("\\KaTeX", "\\textrm{\\html@mathml{" + ("K\\kern-.17em\\raisebox{" + lo + "}{\\scriptstyle A}") + "\\kern-.15em\\TeX}{KaTeX}}");
u("\\hspace", "\\@ifstar\\@hspacer\\@hspace");
u("\\@hspace", "\\hskip #1\\relax");
u("\\@hspacer", "\\rule{0pt}{0pt}\\hskip #1\\relax");
u("\\ordinarycolon", ":");
u("\\vcentcolon", "\\mathrel{\\mathop\\ordinarycolon}");
u("\\dblcolon", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-.9mu}\\vcentcolon}}{\\mathop{\\char"2237}}');
u("\\coloneqq", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2254}}');
u("\\Coloneqq", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2237\\char"3d}}');
u("\\coloneq", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"3a\\char"2212}}');
u("\\Coloneq", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"2237\\char"2212}}');
u("\\eqqcolon", '\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2255}}');
u("\\Eqqcolon", '\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"3d\\char"2237}}');
u("\\eqcolon", '\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2239}}');
u("\\Eqcolon", '\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"2212\\char"2237}}');
u("\\colonapprox", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"3a\\char"2248}}');
u("\\Colonapprox", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"2237\\char"2248}}');
u("\\colonsim", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"3a\\char"223c}}');
u("\\Colonsim", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"2237\\char"223c}}');
u("∷", "\\dblcolon");
u("∹", "\\eqcolon");
u("≔", "\\coloneqq");
u("≕", "\\eqqcolon");
u("⩴", "\\Coloneqq");
u("\\ratio", "\\vcentcolon");
u("\\coloncolon", "\\dblcolon");
u("\\colonequals", "\\coloneqq");
u("\\coloncolonequals", "\\Coloneqq");
u("\\equalscolon", "\\eqqcolon");
u("\\equalscoloncolon", "\\Eqqcolon");
u("\\colonminus", "\\coloneq");
u("\\coloncolonminus", "\\Coloneq");
u("\\minuscolon", "\\eqcolon");
u("\\minuscoloncolon", "\\Eqcolon");
u("\\coloncolonapprox", "\\Colonapprox");
u("\\coloncolonsim", "\\Colonsim");
u("\\simcolon", "\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\vcentcolon}");
u("\\simcoloncolon", "\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\dblcolon}");
u("\\approxcolon", "\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\vcentcolon}");
u("\\approxcoloncolon", "\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\dblcolon}");
u("\\notni", "\\html@mathml{\\not\\ni}{\\mathrel{\\char`∌}}");
u("\\limsup", "\\DOTSB\\operatorname*{lim\\,sup}");
u("\\liminf", "\\DOTSB\\operatorname*{lim\\,inf}");
u("\\injlim", "\\DOTSB\\operatorname*{inj\\,lim}");
u("\\projlim", "\\DOTSB\\operatorname*{proj\\,lim}");
u("\\varlimsup", "\\DOTSB\\operatorname*{\\overline{lim}}");
u("\\varliminf", "\\DOTSB\\operatorname*{\\underline{lim}}");
u("\\varinjlim", "\\DOTSB\\operatorname*{\\underrightarrow{lim}}");
u("\\varprojlim", "\\DOTSB\\operatorname*{\\underleftarrow{lim}}");
u("\\gvertneqq", "\\html@mathml{\\@gvertneqq}{≩}");
u("\\lvertneqq", "\\html@mathml{\\@lvertneqq}{≨}");
u("\\ngeqq", "\\html@mathml{\\@ngeqq}{≱}");
u("\\ngeqslant", "\\html@mathml{\\@ngeqslant}{≱}");
u("\\nleqq", "\\html@mathml{\\@nleqq}{≰}");
u("\\nleqslant", "\\html@mathml{\\@nleqslant}{≰}");
u("\\nshortmid", "\\html@mathml{\\@nshortmid}{∤}");
u("\\nshortparallel", "\\html@mathml{\\@nshortparallel}{∦}");
u("\\nsubseteqq", "\\html@mathml{\\@nsubseteqq}{⊈}");
u("\\nsupseteqq", "\\html@mathml{\\@nsupseteqq}{⊉}");
u("\\varsubsetneq", "\\html@mathml{\\@varsubsetneq}{⊊}");
u("\\varsubsetneqq", "\\html@mathml{\\@varsubsetneqq}{⫋}");
u("\\varsupsetneq", "\\html@mathml{\\@varsupsetneq}{⊋}");
u("\\varsupsetneqq", "\\html@mathml{\\@varsupsetneqq}{⫌}");
u("\\imath", "\\html@mathml{\\@imath}{ı}");
u("\\jmath", "\\html@mathml{\\@jmath}{ȷ}");
u("\\llbracket", "\\html@mathml{\\mathopen{[\\mkern-3.2mu[}}{\\mathopen{\\char`⟦}}");
u("\\rrbracket", "\\html@mathml{\\mathclose{]\\mkern-3.2mu]}}{\\mathclose{\\char`⟧}}");
u("⟦", "\\llbracket");
u("⟧", "\\rrbracket");
u("\\lBrace", "\\html@mathml{\\mathopen{\\{\\mkern-3.2mu[}}{\\mathopen{\\char`⦃}}");
u("\\rBrace", "\\html@mathml{\\mathclose{]\\mkern-3.2mu\\}}}{\\mathclose{\\char`⦄}}");
u("⦃", "\\lBrace");
u("⦄", "\\rBrace");
u("\\minuso", "\\mathbin{\\html@mathml{{\\mathrlap{\\mathchoice{\\kern{0.145em}}{\\kern{0.145em}}{\\kern{0.1015em}}{\\kern{0.0725em}}\\circ}{-}}}{\\char`⦵}}");
u("⦵", "\\minuso");
u("\\darr", "\\downarrow");
u("\\dArr", "\\Downarrow");
u("\\Darr", "\\Downarrow");
u("\\lang", "\\langle");
u("\\rang", "\\rangle");
u("\\uarr", "\\uparrow");
u("\\uArr", "\\Uparrow");
u("\\Uarr", "\\Uparrow");
u("\\N", "\\mathbb{N}");
u("\\R", "\\mathbb{R}");
u("\\Z", "\\mathbb{Z}");
u("\\alef", "\\aleph");
u("\\alefsym", "\\aleph");
u("\\Alpha", "\\mathrm{A}");
u("\\Beta", "\\mathrm{B}");
u("\\bull", "\\bullet");
u("\\Chi", "\\mathrm{X}");
u("\\clubs", "\\clubsuit");
u("\\cnums", "\\mathbb{C}");
u("\\Complex", "\\mathbb{C}");
u("\\Dagger", "\\ddagger");
u("\\diamonds", "\\diamondsuit");
u("\\empty", "\\emptyset");
u("\\Epsilon", "\\mathrm{E}");
u("\\Eta", "\\mathrm{H}");
u("\\exist", "\\exists");
u("\\harr", "\\leftrightarrow");
u("\\hArr", "\\Leftrightarrow");
u("\\Harr", "\\Leftrightarrow");
u("\\hearts", "\\heartsuit");
u("\\image", "\\Im");
u("\\infin", "\\infty");
u("\\Iota", "\\mathrm{I}");
u("\\isin", "\\in");
u("\\Kappa", "\\mathrm{K}");
u("\\larr", "\\leftarrow");
u("\\lArr", "\\Leftarrow");
u("\\Larr", "\\Leftarrow");
u("\\lrarr", "\\leftrightarrow");
u("\\lrArr", "\\Leftrightarrow");
u("\\Lrarr", "\\Leftrightarrow");
u("\\Mu", "\\mathrm{M}");
u("\\natnums", "\\mathbb{N}");
u("\\Nu", "\\mathrm{N}");
u("\\Omicron", "\\mathrm{O}");
u("\\plusmn", "\\pm");
u("\\rarr", "\\rightarrow");
u("\\rArr", "\\Rightarrow");
u("\\Rarr", "\\Rightarrow");
u("\\real", "\\Re");
u("\\reals", "\\mathbb{R}");
u("\\Reals", "\\mathbb{R}");
u("\\Rho", "\\mathrm{P}");
u("\\sdot", "\\cdot");
u("\\sect", "\\S");
u("\\spades", "\\spadesuit");
u("\\sub", "\\subset");
u("\\sube", "\\subseteq");
u("\\supe", "\\supseteq");
u("\\Tau", "\\mathrm{T}");
u("\\thetasym", "\\vartheta");
u("\\weierp", "\\wp");
u("\\Zeta", "\\mathrm{Z}");
u("\\argmin", "\\DOTSB\\operatorname*{arg\\,min}");
u("\\argmax", "\\DOTSB\\operatorname*{arg\\,max}");
u("\\plim", "\\DOTSB\\mathop{\\operatorname{plim}}\\limits");
u("\\bra", "\\mathinner{\\langle{#1}|}");
u("\\ket", "\\mathinner{|{#1}\\rangle}");
u("\\braket", "\\mathinner{\\langle{#1}\\rangle}");
u("\\Bra", "\\left\\langle#1\\right|");
u("\\Ket", "\\left|#1\\right\\rangle");
var co = (a) => (e) => {
  var t = e.consumeArg().tokens, i = e.consumeArg().tokens, s = e.consumeArg().tokens, r = e.consumeArg().tokens, l = e.macros.get("|"), c = e.macros.get("\\|");
  e.macros.beginGroup();
  var m = (v) => (x) => {
    a && (x.macros.set("|", l), s.length && x.macros.set("\\|", c));
    var k = v;
    if (!v && s.length) {
      var M = x.future();
      M.text === "|" && (x.popToken(), k = !0);
    }
    return {
      tokens: k ? s : i,
      numArgs: 0
    };
  };
  e.macros.set("|", m(!1)), s.length && e.macros.set("\\|", m(!0));
  var d = e.consumeArg().tokens, y = e.expandTokens([
    ...r,
    ...d,
    ...t
    // reversed
  ]);
  return e.macros.endGroup(), {
    tokens: y.reverse(),
    numArgs: 0
  };
};
u("\\bra@ket", co(!1));
u("\\bra@set", co(!0));
u("\\Braket", "\\bra@ket{\\left\\langle}{\\,\\middle\\vert\\,}{\\,\\middle\\vert\\,}{\\right\\rangle}");
u("\\Set", "\\bra@set{\\left\\{\\:}{\\;\\middle\\vert\\;}{\\;\\middle\\Vert\\;}{\\:\\right\\}}");
u("\\set", "\\bra@set{\\{\\,}{\\mid}{}{\\,\\}}");
u("\\angln", "{\\angl n}");
u("\\blue", "\\textcolor{##6495ed}{#1}");
u("\\orange", "\\textcolor{##ffa500}{#1}");
u("\\pink", "\\textcolor{##ff00af}{#1}");
u("\\red", "\\textcolor{##df0030}{#1}");
u("\\green", "\\textcolor{##28ae7b}{#1}");
u("\\gray", "\\textcolor{gray}{#1}");
u("\\purple", "\\textcolor{##9d38bd}{#1}");
u("\\blueA", "\\textcolor{##ccfaff}{#1}");
u("\\blueB", "\\textcolor{##80f6ff}{#1}");
u("\\blueC", "\\textcolor{##63d9ea}{#1}");
u("\\blueD", "\\textcolor{##11accd}{#1}");
u("\\blueE", "\\textcolor{##0c7f99}{#1}");
u("\\tealA", "\\textcolor{##94fff5}{#1}");
u("\\tealB", "\\textcolor{##26edd5}{#1}");
u("\\tealC", "\\textcolor{##01d1c1}{#1}");
u("\\tealD", "\\textcolor{##01a995}{#1}");
u("\\tealE", "\\textcolor{##208170}{#1}");
u("\\greenA", "\\textcolor{##b6ffb0}{#1}");
u("\\greenB", "\\textcolor{##8af281}{#1}");
u("\\greenC", "\\textcolor{##74cf70}{#1}");
u("\\greenD", "\\textcolor{##1fab54}{#1}");
u("\\greenE", "\\textcolor{##0d923f}{#1}");
u("\\goldA", "\\textcolor{##ffd0a9}{#1}");
u("\\goldB", "\\textcolor{##ffbb71}{#1}");
u("\\goldC", "\\textcolor{##ff9c39}{#1}");
u("\\goldD", "\\textcolor{##e07d10}{#1}");
u("\\goldE", "\\textcolor{##a75a05}{#1}");
u("\\redA", "\\textcolor{##fca9a9}{#1}");
u("\\redB", "\\textcolor{##ff8482}{#1}");
u("\\redC", "\\textcolor{##f9685d}{#1}");
u("\\redD", "\\textcolor{##e84d39}{#1}");
u("\\redE", "\\textcolor{##bc2612}{#1}");
u("\\maroonA", "\\textcolor{##ffbde0}{#1}");
u("\\maroonB", "\\textcolor{##ff92c6}{#1}");
u("\\maroonC", "\\textcolor{##ed5fa6}{#1}");
u("\\maroonD", "\\textcolor{##ca337c}{#1}");
u("\\maroonE", "\\textcolor{##9e034e}{#1}");
u("\\purpleA", "\\textcolor{##ddd7ff}{#1}");
u("\\purpleB", "\\textcolor{##c6b9fc}{#1}");
u("\\purpleC", "\\textcolor{##aa87ff}{#1}");
u("\\purpleD", "\\textcolor{##7854ab}{#1}");
u("\\purpleE", "\\textcolor{##543b78}{#1}");
u("\\mintA", "\\textcolor{##f5f9e8}{#1}");
u("\\mintB", "\\textcolor{##edf2df}{#1}");
u("\\mintC", "\\textcolor{##e0e5cc}{#1}");
u("\\grayA", "\\textcolor{##f6f7f7}{#1}");
u("\\grayB", "\\textcolor{##f0f1f2}{#1}");
u("\\grayC", "\\textcolor{##e3e5e6}{#1}");
u("\\grayD", "\\textcolor{##d6d8da}{#1}");
u("\\grayE", "\\textcolor{##babec2}{#1}");
u("\\grayF", "\\textcolor{##888d93}{#1}");
u("\\grayG", "\\textcolor{##626569}{#1}");
u("\\grayH", "\\textcolor{##3b3e40}{#1}");
u("\\grayI", "\\textcolor{##21242c}{#1}");
u("\\kaBlue", "\\textcolor{##314453}{#1}");
u("\\kaGreen", "\\textcolor{##71B307}{#1}");
var mo = {
  "^": !0,
  // Parser.js
  _: !0,
  // Parser.js
  "\\limits": !0,
  // Parser.js
  "\\nolimits": !0
  // Parser.js
};
class jl {
  constructor(e, t, i) {
    this.settings = void 0, this.expansionCount = void 0, this.lexer = void 0, this.macros = void 0, this.stack = void 0, this.mode = void 0, this.settings = t, this.expansionCount = 0, this.feed(e), this.macros = new vl(wl, t.macros), this.mode = i, this.stack = [];
  }
  /**
   * Feed a new input string to the same MacroExpander
   * (with existing macros etc.).
   */
  feed(e) {
    this.lexer = new sr(e, this.settings);
  }
  /**
   * Switches between "text" and "math" modes.
   */
  switchMode(e) {
    this.mode = e;
  }
  /**
   * Start a new group nesting within all namespaces.
   */
  beginGroup() {
    this.macros.beginGroup();
  }
  /**
   * End current group nesting within all namespaces.
   */
  endGroup() {
    this.macros.endGroup();
  }
  /**
   * Ends all currently nested groups (if any), restoring values before the
   * groups began.  Useful in case of an error in the middle of parsing.
   */
  endGroups() {
    this.macros.endGroups();
  }
  /**
   * Returns the topmost token on the stack, without expanding it.
   * Similar in behavior to TeX's `\futurelet`.
   */
  future() {
    return this.stack.length === 0 && this.pushToken(this.lexer.lex()), this.stack[this.stack.length - 1];
  }
  /**
   * Remove and return the next unexpanded token.
   */
  popToken() {
    return this.future(), this.stack.pop();
  }
  /**
   * Add a given token to the token stack.  In particular, this get be used
   * to put back a token returned from one of the other methods.
   */
  pushToken(e) {
    this.stack.push(e);
  }
  /**
   * Append an array of tokens to the token stack.
   */
  pushTokens(e) {
    this.stack.push(...e);
  }
  /**
   * Find an macro argument without expanding tokens and append the array of
   * tokens to the token stack. Uses Token as a container for the result.
   */
  scanArgument(e) {
    var t, i, s;
    if (e) {
      if (this.consumeSpaces(), this.future().text !== "[")
        return null;
      t = this.popToken(), {
        tokens: s,
        end: i
      } = this.consumeArg(["]"]);
    } else
      ({
        tokens: s,
        start: t,
        end: i
      } = this.consumeArg());
    return this.pushToken(new at("EOF", i.loc)), this.pushTokens(s), t.range(i, "");
  }
  /**
   * Consume all following space tokens, without expansion.
   */
  consumeSpaces() {
    for (; ; ) {
      var e = this.future();
      if (e.text === " ")
        this.stack.pop();
      else
        break;
    }
  }
  /**
   * Consume an argument from the token stream, and return the resulting array
   * of tokens and start/end token.
   */
  consumeArg(e) {
    var t = [], i = e && e.length > 0;
    i || this.consumeSpaces();
    var s = this.future(), r, l = 0, c = 0;
    do {
      if (r = this.popToken(), t.push(r), r.text === "{")
        ++l;
      else if (r.text === "}") {
        if (--l, l === -1)
          throw new z("Extra }", r);
      } else if (r.text === "EOF")
        throw new z("Unexpected end of input in a macro argument, expected '" + (e && i ? e[c] : "}") + "'", r);
      if (e && i)
        if ((l === 0 || l === 1 && e[c] === "{") && r.text === e[c]) {
          if (++c, c === e.length) {
            t.splice(-c, c);
            break;
          }
        } else
          c = 0;
    } while (l !== 0 || i);
    return s.text === "{" && t[t.length - 1].text === "}" && (t.pop(), t.shift()), t.reverse(), {
      tokens: t,
      start: s,
      end: r
    };
  }
  /**
   * Consume the specified number of (delimited) arguments from the token
   * stream and return the resulting array of arguments.
   */
  consumeArgs(e, t) {
    if (t) {
      if (t.length !== e + 1)
        throw new z("The length of delimiters doesn't match the number of args!");
      for (var i = t[0], s = 0; s < i.length; s++) {
        var r = this.popToken();
        if (i[s] !== r.text)
          throw new z("Use of the macro doesn't match its definition", r);
      }
    }
    for (var l = [], c = 0; c < e; c++)
      l.push(this.consumeArg(t && t[c + 1]).tokens);
    return l;
  }
  /**
   * Expand the next token only once if possible.
   *
   * If the token is expanded, the resulting tokens will be pushed onto
   * the stack in reverse order, and the number of such tokens will be
   * returned.  This number might be zero or positive.
   *
   * If not, the return value is `false`, and the next token remains at the
   * top of the stack.
   *
   * In either case, the next token will be on the top of the stack,
   * or the stack will be empty (in case of empty expansion
   * and no other tokens).
   *
   * Used to implement `expandAfterFuture` and `expandNextToken`.
   *
   * If expandableOnly, only expandable tokens are expanded and
   * an undefined control sequence results in an error.
   */
  expandOnce(e) {
    var t = this.popToken(), i = t.text, s = t.noexpand ? null : this._getExpansion(i);
    if (s == null || e && s.unexpandable) {
      if (e && s == null && i[0] === "\\" && !this.isDefined(i))
        throw new z("Undefined control sequence: " + i);
      return this.pushToken(t), !1;
    }
    if (this.expansionCount++, this.expansionCount > this.settings.maxExpand)
      throw new z("Too many expansions: infinite loop or need to increase maxExpand setting");
    var r = s.tokens, l = this.consumeArgs(s.numArgs, s.delimiters);
    if (s.numArgs) {
      r = r.slice();
      for (var c = r.length - 1; c >= 0; --c) {
        var m = r[c];
        if (m.text === "#") {
          if (c === 0)
            throw new z("Incomplete placeholder at end of macro body", m);
          if (m = r[--c], m.text === "#")
            r.splice(c + 1, 1);
          else if (/^[1-9]$/.test(m.text))
            r.splice(c, 2, ...l[+m.text - 1]);
          else
            throw new z("Not a valid argument number", m);
        }
      }
    }
    return this.pushTokens(r), r.length;
  }
  /**
   * Expand the next token only once (if possible), and return the resulting
   * top token on the stack (without removing anything from the stack).
   * Similar in behavior to TeX's `\expandafter\futurelet`.
   * Equivalent to expandOnce() followed by future().
   */
  expandAfterFuture() {
    return this.expandOnce(), this.future();
  }
  /**
   * Recursively expand first token, then return first non-expandable token.
   */
  expandNextToken() {
    for (; ; )
      if (this.expandOnce() === !1) {
        var e = this.stack.pop();
        return e.treatAsRelax && (e.text = "\\relax"), e;
      }
    throw new Error();
  }
  /**
   * Fully expand the given macro name and return the resulting list of
   * tokens, or return `undefined` if no such macro is defined.
   */
  expandMacro(e) {
    return this.macros.has(e) ? this.expandTokens([new at(e)]) : void 0;
  }
  /**
   * Fully expand the given token stream and return the resulting list of
   * tokens.  Note that the input tokens are in reverse order, but the
   * output tokens are in forward order.
   */
  expandTokens(e) {
    var t = [], i = this.stack.length;
    for (this.pushTokens(e); this.stack.length > i; )
      if (this.expandOnce(!0) === !1) {
        var s = this.stack.pop();
        s.treatAsRelax && (s.noexpand = !1, s.treatAsRelax = !1), t.push(s);
      }
    return t;
  }
  /**
   * Fully expand the given macro name and return the result as a string,
   * or return `undefined` if no such macro is defined.
   */
  expandMacroAsText(e) {
    var t = this.expandMacro(e);
    return t && t.map((i) => i.text).join("");
  }
  /**
   * Returns the expanded macro as a reversed array of tokens and a macro
   * argument count.  Or returns `null` if no such macro.
   */
  _getExpansion(e) {
    var t = this.macros.get(e);
    if (t == null)
      return t;
    if (e.length === 1) {
      var i = this.lexer.catcodes[e];
      if (i != null && i !== 13)
        return;
    }
    var s = typeof t == "function" ? t(this) : t;
    if (typeof s == "string") {
      var r = 0;
      if (s.indexOf("#") !== -1)
        for (var l = s.replace(/##/g, ""); l.indexOf("#" + (r + 1)) !== -1; )
          ++r;
      for (var c = new sr(s, this.settings), m = [], d = c.lex(); d.text !== "EOF"; )
        m.push(d), d = c.lex();
      m.reverse();
      var y = {
        tokens: m,
        numArgs: r
      };
      return y;
    }
    return s;
  }
  /**
   * Determine whether a command is currently "defined" (has some
   * functionality), meaning that it's a macro (in the current group),
   * a function, a symbol, or one of the special commands listed in
   * `implicitCommands`.
   */
  isDefined(e) {
    return this.macros.has(e) || vt.hasOwnProperty(e) || ce.math.hasOwnProperty(e) || ce.text.hasOwnProperty(e) || mo.hasOwnProperty(e);
  }
  /**
   * Determine whether a command is expandable.
   */
  isExpandable(e) {
    var t = this.macros.get(e);
    return t != null ? typeof t == "string" || typeof t == "function" || !t.unexpandable : vt.hasOwnProperty(e) && !vt[e].primitive;
  }
}
var nr = /^[₊₋₌₍₎₀₁₂₃₄₅₆₇₈₉ₐₑₕᵢⱼₖₗₘₙₒₚᵣₛₜᵤᵥₓᵦᵧᵨᵩᵪ]/, xa = Object.freeze({
  "₊": "+",
  "₋": "-",
  "₌": "=",
  "₍": "(",
  "₎": ")",
  "₀": "0",
  "₁": "1",
  "₂": "2",
  "₃": "3",
  "₄": "4",
  "₅": "5",
  "₆": "6",
  "₇": "7",
  "₈": "8",
  "₉": "9",
  "ₐ": "a",
  "ₑ": "e",
  "ₕ": "h",
  "ᵢ": "i",
  "ⱼ": "j",
  "ₖ": "k",
  "ₗ": "l",
  "ₘ": "m",
  "ₙ": "n",
  "ₒ": "o",
  "ₚ": "p",
  "ᵣ": "r",
  "ₛ": "s",
  "ₜ": "t",
  "ᵤ": "u",
  "ᵥ": "v",
  "ₓ": "x",
  "ᵦ": "β",
  "ᵧ": "γ",
  "ᵨ": "ρ",
  "ᵩ": "ϕ",
  "ᵪ": "χ",
  "⁺": "+",
  "⁻": "-",
  "⁼": "=",
  "⁽": "(",
  "⁾": ")",
  "⁰": "0",
  "¹": "1",
  "²": "2",
  "³": "3",
  "⁴": "4",
  "⁵": "5",
  "⁶": "6",
  "⁷": "7",
  "⁸": "8",
  "⁹": "9",
  "ᴬ": "A",
  "ᴮ": "B",
  "ᴰ": "D",
  "ᴱ": "E",
  "ᴳ": "G",
  "ᴴ": "H",
  "ᴵ": "I",
  "ᴶ": "J",
  "ᴷ": "K",
  "ᴸ": "L",
  "ᴹ": "M",
  "ᴺ": "N",
  "ᴼ": "O",
  "ᴾ": "P",
  "ᴿ": "R",
  "ᵀ": "T",
  "ᵁ": "U",
  "ⱽ": "V",
  "ᵂ": "W",
  "ᵃ": "a",
  "ᵇ": "b",
  "ᶜ": "c",
  "ᵈ": "d",
  "ᵉ": "e",
  "ᶠ": "f",
  "ᵍ": "g",
  ʰ: "h",
  "ⁱ": "i",
  ʲ: "j",
  "ᵏ": "k",
  ˡ: "l",
  "ᵐ": "m",
  ⁿ: "n",
  "ᵒ": "o",
  "ᵖ": "p",
  ʳ: "r",
  ˢ: "s",
  "ᵗ": "t",
  "ᵘ": "u",
  "ᵛ": "v",
  ʷ: "w",
  ˣ: "x",
  ʸ: "y",
  "ᶻ": "z",
  "ᵝ": "β",
  "ᵞ": "γ",
  "ᵟ": "δ",
  "ᵠ": "ϕ",
  "ᵡ": "χ",
  "ᶿ": "θ"
}), pi = {
  "́": {
    text: "\\'",
    math: "\\acute"
  },
  "̀": {
    text: "\\`",
    math: "\\grave"
  },
  "̈": {
    text: '\\"',
    math: "\\ddot"
  },
  "̃": {
    text: "\\~",
    math: "\\tilde"
  },
  "̄": {
    text: "\\=",
    math: "\\bar"
  },
  "̆": {
    text: "\\u",
    math: "\\breve"
  },
  "̌": {
    text: "\\v",
    math: "\\check"
  },
  "̂": {
    text: "\\^",
    math: "\\hat"
  },
  "̇": {
    text: "\\.",
    math: "\\dot"
  },
  "̊": {
    text: "\\r",
    math: "\\mathring"
  },
  "̋": {
    text: "\\H"
  },
  "̧": {
    text: "\\c"
  }
}, lr = {
  á: "á",
  à: "à",
  ä: "ä",
  ǟ: "ǟ",
  ã: "ã",
  ā: "ā",
  ă: "ă",
  ắ: "ắ",
  ằ: "ằ",
  ẵ: "ẵ",
  ǎ: "ǎ",
  â: "â",
  ấ: "ấ",
  ầ: "ầ",
  ẫ: "ẫ",
  ȧ: "ȧ",
  ǡ: "ǡ",
  å: "å",
  ǻ: "ǻ",
  ḃ: "ḃ",
  ć: "ć",
  ḉ: "ḉ",
  č: "č",
  ĉ: "ĉ",
  ċ: "ċ",
  ç: "ç",
  ď: "ď",
  ḋ: "ḋ",
  ḑ: "ḑ",
  é: "é",
  è: "è",
  ë: "ë",
  ẽ: "ẽ",
  ē: "ē",
  ḗ: "ḗ",
  ḕ: "ḕ",
  ĕ: "ĕ",
  ḝ: "ḝ",
  ě: "ě",
  ê: "ê",
  ế: "ế",
  ề: "ề",
  ễ: "ễ",
  ė: "ė",
  ȩ: "ȩ",
  ḟ: "ḟ",
  ǵ: "ǵ",
  ḡ: "ḡ",
  ğ: "ğ",
  ǧ: "ǧ",
  ĝ: "ĝ",
  ġ: "ġ",
  ģ: "ģ",
  ḧ: "ḧ",
  ȟ: "ȟ",
  ĥ: "ĥ",
  ḣ: "ḣ",
  ḩ: "ḩ",
  í: "í",
  ì: "ì",
  ï: "ï",
  ḯ: "ḯ",
  ĩ: "ĩ",
  ī: "ī",
  ĭ: "ĭ",
  ǐ: "ǐ",
  î: "î",
  ǰ: "ǰ",
  ĵ: "ĵ",
  ḱ: "ḱ",
  ǩ: "ǩ",
  ķ: "ķ",
  ĺ: "ĺ",
  ľ: "ľ",
  ļ: "ļ",
  ḿ: "ḿ",
  ṁ: "ṁ",
  ń: "ń",
  ǹ: "ǹ",
  ñ: "ñ",
  ň: "ň",
  ṅ: "ṅ",
  ņ: "ņ",
  ó: "ó",
  ò: "ò",
  ö: "ö",
  ȫ: "ȫ",
  õ: "õ",
  ṍ: "ṍ",
  ṏ: "ṏ",
  ȭ: "ȭ",
  ō: "ō",
  ṓ: "ṓ",
  ṑ: "ṑ",
  ŏ: "ŏ",
  ǒ: "ǒ",
  ô: "ô",
  ố: "ố",
  ồ: "ồ",
  ỗ: "ỗ",
  ȯ: "ȯ",
  ȱ: "ȱ",
  ő: "ő",
  ṕ: "ṕ",
  ṗ: "ṗ",
  ŕ: "ŕ",
  ř: "ř",
  ṙ: "ṙ",
  ŗ: "ŗ",
  ś: "ś",
  ṥ: "ṥ",
  š: "š",
  ṧ: "ṧ",
  ŝ: "ŝ",
  ṡ: "ṡ",
  ş: "ş",
  ẗ: "ẗ",
  ť: "ť",
  ṫ: "ṫ",
  ţ: "ţ",
  ú: "ú",
  ù: "ù",
  ü: "ü",
  ǘ: "ǘ",
  ǜ: "ǜ",
  ǖ: "ǖ",
  ǚ: "ǚ",
  ũ: "ũ",
  ṹ: "ṹ",
  ū: "ū",
  ṻ: "ṻ",
  ŭ: "ŭ",
  ǔ: "ǔ",
  û: "û",
  ů: "ů",
  ű: "ű",
  ṽ: "ṽ",
  ẃ: "ẃ",
  ẁ: "ẁ",
  ẅ: "ẅ",
  ŵ: "ŵ",
  ẇ: "ẇ",
  ẘ: "ẘ",
  ẍ: "ẍ",
  ẋ: "ẋ",
  ý: "ý",
  ỳ: "ỳ",
  ÿ: "ÿ",
  ỹ: "ỹ",
  ȳ: "ȳ",
  ŷ: "ŷ",
  ẏ: "ẏ",
  ẙ: "ẙ",
  ź: "ź",
  ž: "ž",
  ẑ: "ẑ",
  ż: "ż",
  Á: "Á",
  À: "À",
  Ä: "Ä",
  Ǟ: "Ǟ",
  Ã: "Ã",
  Ā: "Ā",
  Ă: "Ă",
  Ắ: "Ắ",
  Ằ: "Ằ",
  Ẵ: "Ẵ",
  Ǎ: "Ǎ",
  Â: "Â",
  Ấ: "Ấ",
  Ầ: "Ầ",
  Ẫ: "Ẫ",
  Ȧ: "Ȧ",
  Ǡ: "Ǡ",
  Å: "Å",
  Ǻ: "Ǻ",
  Ḃ: "Ḃ",
  Ć: "Ć",
  Ḉ: "Ḉ",
  Č: "Č",
  Ĉ: "Ĉ",
  Ċ: "Ċ",
  Ç: "Ç",
  Ď: "Ď",
  Ḋ: "Ḋ",
  Ḑ: "Ḑ",
  É: "É",
  È: "È",
  Ë: "Ë",
  Ẽ: "Ẽ",
  Ē: "Ē",
  Ḗ: "Ḗ",
  Ḕ: "Ḕ",
  Ĕ: "Ĕ",
  Ḝ: "Ḝ",
  Ě: "Ě",
  Ê: "Ê",
  Ế: "Ế",
  Ề: "Ề",
  Ễ: "Ễ",
  Ė: "Ė",
  Ȩ: "Ȩ",
  Ḟ: "Ḟ",
  Ǵ: "Ǵ",
  Ḡ: "Ḡ",
  Ğ: "Ğ",
  Ǧ: "Ǧ",
  Ĝ: "Ĝ",
  Ġ: "Ġ",
  Ģ: "Ģ",
  Ḧ: "Ḧ",
  Ȟ: "Ȟ",
  Ĥ: "Ĥ",
  Ḣ: "Ḣ",
  Ḩ: "Ḩ",
  Í: "Í",
  Ì: "Ì",
  Ï: "Ï",
  Ḯ: "Ḯ",
  Ĩ: "Ĩ",
  Ī: "Ī",
  Ĭ: "Ĭ",
  Ǐ: "Ǐ",
  Î: "Î",
  İ: "İ",
  Ĵ: "Ĵ",
  Ḱ: "Ḱ",
  Ǩ: "Ǩ",
  Ķ: "Ķ",
  Ĺ: "Ĺ",
  Ľ: "Ľ",
  Ļ: "Ļ",
  Ḿ: "Ḿ",
  Ṁ: "Ṁ",
  Ń: "Ń",
  Ǹ: "Ǹ",
  Ñ: "Ñ",
  Ň: "Ň",
  Ṅ: "Ṅ",
  Ņ: "Ņ",
  Ó: "Ó",
  Ò: "Ò",
  Ö: "Ö",
  Ȫ: "Ȫ",
  Õ: "Õ",
  Ṍ: "Ṍ",
  Ṏ: "Ṏ",
  Ȭ: "Ȭ",
  Ō: "Ō",
  Ṓ: "Ṓ",
  Ṑ: "Ṑ",
  Ŏ: "Ŏ",
  Ǒ: "Ǒ",
  Ô: "Ô",
  Ố: "Ố",
  Ồ: "Ồ",
  Ỗ: "Ỗ",
  Ȯ: "Ȯ",
  Ȱ: "Ȱ",
  Ő: "Ő",
  Ṕ: "Ṕ",
  Ṗ: "Ṗ",
  Ŕ: "Ŕ",
  Ř: "Ř",
  Ṙ: "Ṙ",
  Ŗ: "Ŗ",
  Ś: "Ś",
  Ṥ: "Ṥ",
  Š: "Š",
  Ṧ: "Ṧ",
  Ŝ: "Ŝ",
  Ṡ: "Ṡ",
  Ş: "Ş",
  Ť: "Ť",
  Ṫ: "Ṫ",
  Ţ: "Ţ",
  Ú: "Ú",
  Ù: "Ù",
  Ü: "Ü",
  Ǘ: "Ǘ",
  Ǜ: "Ǜ",
  Ǖ: "Ǖ",
  Ǚ: "Ǚ",
  Ũ: "Ũ",
  Ṹ: "Ṹ",
  Ū: "Ū",
  Ṻ: "Ṻ",
  Ŭ: "Ŭ",
  Ǔ: "Ǔ",
  Û: "Û",
  Ů: "Ů",
  Ű: "Ű",
  Ṽ: "Ṽ",
  Ẃ: "Ẃ",
  Ẁ: "Ẁ",
  Ẅ: "Ẅ",
  Ŵ: "Ŵ",
  Ẇ: "Ẇ",
  Ẍ: "Ẍ",
  Ẋ: "Ẋ",
  Ý: "Ý",
  Ỳ: "Ỳ",
  Ÿ: "Ÿ",
  Ỹ: "Ỹ",
  Ȳ: "Ȳ",
  Ŷ: "Ŷ",
  Ẏ: "Ẏ",
  Ź: "Ź",
  Ž: "Ž",
  Ẑ: "Ẑ",
  Ż: "Ż",
  ά: "ά",
  ὰ: "ὰ",
  ᾱ: "ᾱ",
  ᾰ: "ᾰ",
  έ: "έ",
  ὲ: "ὲ",
  ή: "ή",
  ὴ: "ὴ",
  ί: "ί",
  ὶ: "ὶ",
  ϊ: "ϊ",
  ΐ: "ΐ",
  ῒ: "ῒ",
  ῑ: "ῑ",
  ῐ: "ῐ",
  ό: "ό",
  ὸ: "ὸ",
  ύ: "ύ",
  ὺ: "ὺ",
  ϋ: "ϋ",
  ΰ: "ΰ",
  ῢ: "ῢ",
  ῡ: "ῡ",
  ῠ: "ῠ",
  ώ: "ώ",
  ὼ: "ὼ",
  Ύ: "Ύ",
  Ὺ: "Ὺ",
  Ϋ: "Ϋ",
  Ῡ: "Ῡ",
  Ῠ: "Ῠ",
  Ώ: "Ώ",
  Ὼ: "Ὼ"
};
class oa {
  constructor(e, t) {
    this.mode = void 0, this.gullet = void 0, this.settings = void 0, this.leftrightDepth = void 0, this.nextToken = void 0, this.mode = "math", this.gullet = new jl(e, t, this.mode), this.settings = t, this.leftrightDepth = 0;
  }
  /**
   * Checks a result to make sure it has the right type, and throws an
   * appropriate error otherwise.
   */
  expect(e, t) {
    if (t === void 0 && (t = !0), this.fetch().text !== e)
      throw new z("Expected '" + e + "', got '" + this.fetch().text + "'", this.fetch());
    t && this.consume();
  }
  /**
   * Discards the current lookahead token, considering it consumed.
   */
  consume() {
    this.nextToken = null;
  }
  /**
   * Return the current lookahead token, or if there isn't one (at the
   * beginning, or if the previous lookahead token was consume()d),
   * fetch the next token as the new lookahead token and return it.
   */
  fetch() {
    return this.nextToken == null && (this.nextToken = this.gullet.expandNextToken()), this.nextToken;
  }
  /**
   * Switches between "text" and "math" modes.
   */
  switchMode(e) {
    this.mode = e, this.gullet.switchMode(e);
  }
  /**
   * Main parsing function, which parses an entire input.
   */
  parse() {
    this.settings.globalGroup || this.gullet.beginGroup(), this.settings.colorIsTextColor && this.gullet.macros.set("\\color", "\\textcolor");
    try {
      var e = this.parseExpression(!1);
      return this.expect("EOF"), this.settings.globalGroup || this.gullet.endGroup(), e;
    } finally {
      this.gullet.endGroups();
    }
  }
  /**
   * Fully parse a separate sequence of tokens as a separate job.
   * Tokens should be specified in reverse order, as in a MacroDefinition.
   */
  subparse(e) {
    var t = this.nextToken;
    this.consume(), this.gullet.pushToken(new at("}")), this.gullet.pushTokens(e);
    var i = this.parseExpression(!1);
    return this.expect("}"), this.nextToken = t, i;
  }
  /**
   * Parses an "expression", which is a list of atoms.
   *
   * `breakOnInfix`: Should the parsing stop when we hit infix nodes? This
   *                 happens when functions have higher precedence han infix
   *                 nodes in implicit parses.
   *
   * `breakOnTokenText`: The text of the token that the expression should end
   *                     with, or `null` if something else should end the
   *                     expression.
   */
  parseExpression(e, t) {
    for (var i = []; ; ) {
      this.mode === "math" && this.consumeSpaces();
      var s = this.fetch();
      if (oa.endOfExpression.indexOf(s.text) !== -1 || t && s.text === t || e && vt[s.text] && vt[s.text].infix)
        break;
      var r = this.parseAtom(t);
      if (r) {
        if (r.type === "internal")
          continue;
      } else
        break;
      i.push(r);
    }
    return this.mode === "text" && this.formLigatures(i), this.handleInfixNodes(i);
  }
  /**
   * Rewrites infix operators such as \over with corresponding commands such
   * as \frac.
   *
   * There can only be one infix operator per group.  If there's more than one
   * then the expression is ambiguous.  This can be resolved by adding {}.
   */
  handleInfixNodes(e) {
    for (var t = -1, i, s = 0; s < e.length; s++)
      if (e[s].type === "infix") {
        if (t !== -1)
          throw new z("only one infix operator per group", e[s].token);
        t = s, i = e[s].replaceWith;
      }
    if (t !== -1 && i) {
      var r, l, c = e.slice(0, t), m = e.slice(t + 1);
      c.length === 1 && c[0].type === "ordgroup" ? r = c[0] : r = {
        type: "ordgroup",
        mode: this.mode,
        body: c
      }, m.length === 1 && m[0].type === "ordgroup" ? l = m[0] : l = {
        type: "ordgroup",
        mode: this.mode,
        body: m
      };
      var d;
      return i === "\\\\abovefrac" ? d = this.callFunction(i, [r, e[t], l], []) : d = this.callFunction(i, [r, l], []), [d];
    } else
      return e;
  }
  /**
   * Handle a subscript or superscript with nice errors.
   */
  handleSupSubscript(e) {
    var t = this.fetch(), i = t.text;
    this.consume(), this.consumeSpaces();
    var s = this.parseGroup(e);
    if (!s)
      throw new z("Expected group after '" + i + "'", t);
    return s;
  }
  /**
   * Converts the textual input of an unsupported command into a text node
   * contained within a color node whose color is determined by errorColor
   */
  formatUnsupportedCmd(e) {
    for (var t = [], i = 0; i < e.length; i++)
      t.push({
        type: "textord",
        mode: "text",
        text: e[i]
      });
    var s = {
      type: "text",
      mode: this.mode,
      body: t
    }, r = {
      type: "color",
      mode: this.mode,
      color: this.settings.errorColor,
      body: [s]
    };
    return r;
  }
  /**
   * Parses a group with optional super/subscripts.
   */
  parseAtom(e) {
    var t = this.parseGroup("atom", e);
    if (this.mode === "text")
      return t;
    for (var i, s; ; ) {
      this.consumeSpaces();
      var r = this.fetch();
      if (r.text === "\\limits" || r.text === "\\nolimits") {
        if (t && t.type === "op") {
          var l = r.text === "\\limits";
          t.limits = l, t.alwaysHandleSupSub = !0;
        } else if (t && t.type === "operatorname")
          t.alwaysHandleSupSub && (t.limits = r.text === "\\limits");
        else
          throw new z("Limit controls must follow a math operator", r);
        this.consume();
      } else if (r.text === "^") {
        if (i)
          throw new z("Double superscript", r);
        i = this.handleSupSubscript("superscript");
      } else if (r.text === "_") {
        if (s)
          throw new z("Double subscript", r);
        s = this.handleSupSubscript("subscript");
      } else if (r.text === "'") {
        if (i)
          throw new z("Double superscript", r);
        var c = {
          type: "textord",
          mode: this.mode,
          text: "\\prime"
        }, m = [c];
        for (this.consume(); this.fetch().text === "'"; )
          m.push(c), this.consume();
        this.fetch().text === "^" && m.push(this.handleSupSubscript("superscript")), i = {
          type: "ordgroup",
          mode: this.mode,
          body: m
        };
      } else if (xa[r.text]) {
        var d = xa[r.text], y = nr.test(r.text);
        for (this.consume(); ; ) {
          var v = this.fetch().text;
          if (!xa[v] || nr.test(v) !== y)
            break;
          this.consume(), d += xa[v];
        }
        var x = new oa(d, this.settings).parse();
        y ? s = {
          type: "ordgroup",
          mode: "math",
          body: x
        } : i = {
          type: "ordgroup",
          mode: "math",
          body: x
        };
      } else
        break;
    }
    return i || s ? {
      type: "supsub",
      mode: this.mode,
      base: t,
      sup: i,
      sub: s
    } : t;
  }
  /**
   * Parses an entire function, including its base and all of its arguments.
   */
  parseFunction(e, t) {
    var i = this.fetch(), s = i.text, r = vt[s];
    if (!r)
      return null;
    if (this.consume(), t && t !== "atom" && !r.allowedInArgument)
      throw new z("Got function '" + s + "' with no arguments" + (t ? " as " + t : ""), i);
    if (this.mode === "text" && !r.allowedInText)
      throw new z("Can't use function '" + s + "' in text mode", i);
    if (this.mode === "math" && r.allowedInMath === !1)
      throw new z("Can't use function '" + s + "' in math mode", i);
    var {
      args: l,
      optArgs: c
    } = this.parseArguments(s, r);
    return this.callFunction(s, l, c, i, e);
  }
  /**
   * Call a function handler with a suitable context and arguments.
   */
  callFunction(e, t, i, s, r) {
    var l = {
      funcName: e,
      parser: this,
      token: s,
      breakOnTokenText: r
    }, c = vt[e];
    if (c && c.handler)
      return c.handler(l, t, i);
    throw new z("No function handler for " + e);
  }
  /**
   * Parses the arguments of a function or environment
   */
  parseArguments(e, t) {
    var i = t.numArgs + t.numOptionalArgs;
    if (i === 0)
      return {
        args: [],
        optArgs: []
      };
    for (var s = [], r = [], l = 0; l < i; l++) {
      var c = t.argTypes && t.argTypes[l], m = l < t.numOptionalArgs;
      (t.primitive && c == null || // \sqrt expands into primitive if optional argument doesn't exist
      t.type === "sqrt" && l === 1 && r[0] == null) && (c = "primitive");
      var d = this.parseGroupOfType("argument to '" + e + "'", c, m);
      if (m)
        r.push(d);
      else if (d != null)
        s.push(d);
      else
        throw new z("Null argument, please report this as a bug");
    }
    return {
      args: s,
      optArgs: r
    };
  }
  /**
   * Parses a group when the mode is changing.
   */
  parseGroupOfType(e, t, i) {
    switch (t) {
      case "color":
        return this.parseColorGroup(i);
      case "size":
        return this.parseSizeGroup(i);
      case "url":
        return this.parseUrlGroup(i);
      case "math":
      case "text":
        return this.parseArgumentGroup(i, t);
      case "hbox": {
        var s = this.parseArgumentGroup(i, "text");
        return s != null ? {
          type: "styling",
          mode: s.mode,
          body: [s],
          style: "text"
          // simulate \textstyle
        } : null;
      }
      case "raw": {
        var r = this.parseStringGroup("raw", i);
        return r != null ? {
          type: "raw",
          mode: "text",
          string: r.text
        } : null;
      }
      case "primitive": {
        if (i)
          throw new z("A primitive argument cannot be optional");
        var l = this.parseGroup(e);
        if (l == null)
          throw new z("Expected group as " + e, this.fetch());
        return l;
      }
      case "original":
      case null:
      case void 0:
        return this.parseArgumentGroup(i);
      default:
        throw new z("Unknown group type as " + e, this.fetch());
    }
  }
  /**
   * Discard any space tokens, fetching the next non-space token.
   */
  consumeSpaces() {
    for (; this.fetch().text === " "; )
      this.consume();
  }
  /**
   * Parses a group, essentially returning the string formed by the
   * brace-enclosed tokens plus some position information.
   */
  parseStringGroup(e, t) {
    var i = this.gullet.scanArgument(t);
    if (i == null)
      return null;
    for (var s = "", r; (r = this.fetch()).text !== "EOF"; )
      s += r.text, this.consume();
    return this.consume(), i.text = s, i;
  }
  /**
   * Parses a regex-delimited group: the largest sequence of tokens
   * whose concatenated strings match `regex`. Returns the string
   * formed by the tokens plus some position information.
   */
  parseRegexGroup(e, t) {
    for (var i = this.fetch(), s = i, r = "", l; (l = this.fetch()).text !== "EOF" && e.test(r + l.text); )
      s = l, r += s.text, this.consume();
    if (r === "")
      throw new z("Invalid " + t + ": '" + i.text + "'", i);
    return i.range(s, r);
  }
  /**
   * Parses a color description.
   */
  parseColorGroup(e) {
    var t = this.parseStringGroup("color", e);
    if (t == null)
      return null;
    var i = /^(#[a-f0-9]{3}|#?[a-f0-9]{6}|[a-z]+)$/i.exec(t.text);
    if (!i)
      throw new z("Invalid color: '" + t.text + "'", t);
    var s = i[0];
    return /^[0-9a-f]{6}$/i.test(s) && (s = "#" + s), {
      type: "color-token",
      mode: this.mode,
      color: s
    };
  }
  /**
   * Parses a size specification, consisting of magnitude and unit.
   */
  parseSizeGroup(e) {
    var t, i = !1;
    if (this.gullet.consumeSpaces(), !e && this.gullet.future().text !== "{" ? t = this.parseRegexGroup(/^[-+]? *(?:$|\d+|\d+\.\d*|\.\d*) *[a-z]{0,2} *$/, "size") : t = this.parseStringGroup("size", e), !t)
      return null;
    !e && t.text.length === 0 && (t.text = "0pt", i = !0);
    var s = /([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(t.text);
    if (!s)
      throw new z("Invalid size: '" + t.text + "'", t);
    var r = {
      number: +(s[1] + s[2]),
      // sign + magnitude, cast to number
      unit: s[3]
    };
    if (!wr(r))
      throw new z("Invalid unit: '" + r.unit + "'", t);
    return {
      type: "size",
      mode: this.mode,
      value: r,
      isBlank: i
    };
  }
  /**
   * Parses an URL, checking escaped letters and allowed protocols,
   * and setting the catcode of % as an active character (as in \hyperref).
   */
  parseUrlGroup(e) {
    this.gullet.lexer.setCatcode("%", 13), this.gullet.lexer.setCatcode("~", 12);
    var t = this.parseStringGroup("url", e);
    if (this.gullet.lexer.setCatcode("%", 14), this.gullet.lexer.setCatcode("~", 13), t == null)
      return null;
    var i = t.text.replace(/\\([#$%&~_^{}])/g, "$1");
    return {
      type: "url",
      mode: this.mode,
      url: i
    };
  }
  /**
   * Parses an argument with the mode specified.
   */
  parseArgumentGroup(e, t) {
    var i = this.gullet.scanArgument(e);
    if (i == null)
      return null;
    var s = this.mode;
    t && this.switchMode(t), this.gullet.beginGroup();
    var r = this.parseExpression(!1, "EOF");
    this.expect("EOF"), this.gullet.endGroup();
    var l = {
      type: "ordgroup",
      mode: this.mode,
      loc: i.loc,
      body: r
    };
    return t && this.switchMode(s), l;
  }
  /**
   * Parses an ordinary group, which is either a single nucleus (like "x")
   * or an expression in braces (like "{x+y}") or an implicit group, a group
   * that starts at the current position, and ends right before a higher explicit
   * group ends, or at EOF.
   */
  parseGroup(e, t) {
    var i = this.fetch(), s = i.text, r;
    if (s === "{" || s === "\\begingroup") {
      this.consume();
      var l = s === "{" ? "}" : "\\endgroup";
      this.gullet.beginGroup();
      var c = this.parseExpression(!1, l), m = this.fetch();
      this.expect(l), this.gullet.endGroup(), r = {
        type: "ordgroup",
        mode: this.mode,
        loc: Re.range(i, m),
        body: c,
        // A group formed by \begingroup...\endgroup is a semi-simple group
        // which doesn't affect spacing in math mode, i.e., is transparent.
        // https://tex.stackexchange.com/questions/1930/when-should-one-
        // use-begingroup-instead-of-bgroup
        semisimple: s === "\\begingroup" || void 0
      };
    } else if (r = this.parseFunction(t, e) || this.parseSymbol(), r == null && s[0] === "\\" && !mo.hasOwnProperty(s)) {
      if (this.settings.throwOnError)
        throw new z("Undefined control sequence: " + s, i);
      r = this.formatUnsupportedCmd(s), this.consume();
    }
    return r;
  }
  /**
   * Form ligature-like combinations of characters for text mode.
   * This includes inputs like "--", "---", "``" and "''".
   * The result will simply replace multiple textord nodes with a single
   * character in each value by a single textord node having multiple
   * characters in its value.  The representation is still ASCII source.
   * The group will be modified in place.
   */
  formLigatures(e) {
    for (var t = e.length - 1, i = 0; i < t; ++i) {
      var s = e[i], r = s.text;
      r === "-" && e[i + 1].text === "-" && (i + 1 < t && e[i + 2].text === "-" ? (e.splice(i, 3, {
        type: "textord",
        mode: "text",
        loc: Re.range(s, e[i + 2]),
        text: "---"
      }), t -= 2) : (e.splice(i, 2, {
        type: "textord",
        mode: "text",
        loc: Re.range(s, e[i + 1]),
        text: "--"
      }), t -= 1)), (r === "'" || r === "`") && e[i + 1].text === r && (e.splice(i, 2, {
        type: "textord",
        mode: "text",
        loc: Re.range(s, e[i + 1]),
        text: r + r
      }), t -= 1);
    }
  }
  /**
   * Parse a single symbol out of the string. Here, we handle single character
   * symbols and special functions like \verb.
   */
  parseSymbol() {
    var e = this.fetch(), t = e.text;
    if (/^\\verb[^a-zA-Z]/.test(t)) {
      this.consume();
      var i = t.slice(5), s = i.charAt(0) === "*";
      if (s && (i = i.slice(1)), i.length < 2 || i.charAt(0) !== i.slice(-1))
        throw new z(`\\verb assertion failed --
                    please report what input caused this bug`);
      return i = i.slice(1, -1), {
        type: "verb",
        mode: "text",
        body: i,
        star: s
      };
    }
    lr.hasOwnProperty(t[0]) && !ce[this.mode][t[0]] && (this.settings.strict && this.mode === "math" && this.settings.reportNonstrict("unicodeTextInMathMode", 'Accented Unicode text character "' + t[0] + '" used in math mode', e), t = lr[t[0]] + t.slice(1));
    var r = fl.exec(t);
    r && (t = t.substring(0, r.index), t === "i" ? t = "ı" : t === "j" && (t = "ȷ"));
    var l;
    if (ce[this.mode][t]) {
      this.settings.strict && this.mode === "math" && _i.indexOf(t) >= 0 && this.settings.reportNonstrict("unicodeTextInMathMode", 'Latin-1/Unicode text character "' + t[0] + '" used in math mode', e);
      var c = ce[this.mode][t].group, m = Re.range(e), d;
      if (cn.hasOwnProperty(c)) {
        var y = c;
        d = {
          type: "atom",
          mode: this.mode,
          family: y,
          loc: m,
          text: t
        };
      } else
        d = {
          type: c,
          mode: this.mode,
          loc: m,
          text: t
        };
      l = d;
    } else if (t.charCodeAt(0) >= 128)
      this.settings.strict && (vr(t.charCodeAt(0)) ? this.mode === "math" && this.settings.reportNonstrict("unicodeTextInMathMode", 'Unicode text character "' + t[0] + '" used in math mode', e) : this.settings.reportNonstrict("unknownSymbol", 'Unrecognized Unicode character "' + t[0] + '"' + (" (" + t.charCodeAt(0) + ")"), e)), l = {
        type: "textord",
        mode: "text",
        loc: Re.range(e),
        text: t
      };
    else
      return null;
    if (this.consume(), r)
      for (var v = 0; v < r[0].length; v++) {
        var x = r[0][v];
        if (!pi[x])
          throw new z("Unknown accent ' " + x + "'", e);
        var k = pi[x][this.mode] || pi[x].text;
        if (!k)
          throw new z("Accent " + x + " unsupported in " + this.mode + " mode", e);
        l = {
          type: "accent",
          mode: this.mode,
          loc: Re.range(e),
          label: k,
          isStretchy: !1,
          isShifty: !0,
          // $FlowFixMe
          base: l
        };
      }
    return l;
  }
}
oa.endOfExpression = ["}", "\\endgroup", "\\end", "\\right", "&"];
var Xi = function(e, t) {
  if (!(typeof e == "string" || e instanceof String))
    throw new TypeError("KaTeX can only parse string typed expression");
  var i = new oa(e, t);
  delete i.gullet.macros.current["\\df@tag"];
  var s = i.parse();
  if (delete i.gullet.macros.current["\\current@color"], delete i.gullet.macros.current["\\color"], i.gullet.macros.get("\\df@tag")) {
    if (!t.displayMode)
      throw new z("\\tag works only in display equations");
    s = [{
      type: "tag",
      mode: "text",
      body: s,
      tag: i.subparse([new at("\\df@tag")])
    }];
  }
  return s;
}, go = function(e, t, i) {
  t.textContent = "";
  var s = Ki(e, i).toNode();
  t.appendChild(s);
};
typeof document < "u" && document.compatMode !== "CSS1Compat" && (typeof console < "u" && console.warn("Warning: KaTeX doesn't work in quirks mode. Make sure your website has a suitable doctype."), go = function() {
  throw new z("KaTeX doesn't work in quirks mode.");
});
var kl = function(e, t) {
  var i = Ki(e, t).toMarkup();
  return i;
}, _l = function(e, t) {
  var i = new Pi(t);
  return Xi(e, i);
}, uo = function(e, t, i) {
  if (i.throwOnError || !(e instanceof z))
    throw e;
  var s = _.makeSpan(["katex-error"], [new $e(t)]);
  return s.setAttribute("title", e.toString()), s.setAttribute("style", "color:" + i.errorColor), s;
}, Ki = function(e, t) {
  var i = new Pi(t);
  try {
    var s = Xi(e, i);
    return Bn(s, e, i);
  } catch (r) {
    return uo(r, e, i);
  }
}, xl = function(e, t) {
  var i = new Pi(t);
  try {
    var s = Xi(e, i);
    return Dn(s, e, i);
  } catch (r) {
    return uo(r, e, i);
  }
}, Sl = {
  /**
   * Current KaTeX version
   */
  version: "0.16.9",
  /**
   * Renders the given LaTeX into an HTML+MathML combination, and adds
   * it as a child to the specified DOM node.
   */
  render: go,
  /**
   * Renders the given LaTeX into an HTML+MathML combination string,
   * for sending to the client.
   */
  renderToString: kl,
  /**
   * KaTeX error, usually during parsing.
   */
  ParseError: z,
  /**
   * The shema of Settings
   */
  SETTINGS_SCHEMA: Ta,
  /**
   * Parses the given LaTeX into KaTeX's internal parse tree structure,
   * without rendering to HTML or MathML.
   *
   * NOTE: This method is not currently recommended for public use.
   * The internal tree representation is unstable and is very likely
   * to change. Use at your own risk.
   */
  __parse: _l,
  /**
   * Renders the given LaTeX into an HTML+MathML internal DOM tree
   * representation, without flattening that representation to a string.
   *
   * NOTE: This method is not currently recommended for public use.
   * The internal tree representation is unstable and is very likely
   * to change. Use at your own risk.
   */
  __renderToDomTree: Ki,
  /**
   * Renders the given LaTeX into an HTML internal DOM tree representation,
   * without MathML and without flattening that representation to a string.
   *
   * NOTE: This method is not currently recommended for public use.
   * The internal tree representation is unstable and is very likely
   * to change. Use at your own risk.
   */
  __renderToHTMLTree: xl,
  /**
   * extends internal font metrics object with a new object
   * each key in the new object represents a font name
  */
  __setFontMetrics: tn,
  /**
   * adds a new symbol to builtin symbols table
   */
  __defineSymbol: o,
  /**
   * adds a new function to builtin function list,
   * which directly produce parse tree elements
   * and have their own html/mathml builders
   */
  __defineFunction: L,
  /**
   * adds a new macro to builtin macro list
   */
  __defineMacro: u,
  /**
   * Expose the dom tree node types, which can be useful for type checking nodes.
   *
   * NOTE: This method is not currently recommended for public use.
   * The internal tree representation is unstable and is very likely
   * to change. Use at your own risk.
   */
  __domTree: {
    Span: la,
    Anchor: Oi,
    SymbolNode: $e,
    SvgNode: dt,
    PathNode: jt,
    LineNode: ki
  }
};
const wc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Sl
}, Symbol.toStringTag, { value: "Module" })), ea = /* @__PURE__ */ new Map(), jc = async (a) => {
  if (!ea.has(a)) {
    let e;
    switch (a) {
      case "plantuml":
        e = await import("./index.J4SjLbz0.js"), ea.set(a, e.default);
        break;
      case "mermaid":
        e = await import("./mermaid.core.ZiMYvjlI.js").then((t) => t.aG), ea.set(a, e.default);
        break;
      case "vega-lite":
        e = await import("./vega-embed.module.c3vwf-HB.js"), ea.set(a, e.default);
        break;
      default:
        throw new Error(`Unknown diagram name ${a}`);
    }
  }
  return ea.get(a);
}, kc = [
  {
    emoji: "😀",
    description: "grinning face",
    category: "Smileys & Emotion",
    aliases: ["grinning"],
    tags: ["smile", "happy"]
  },
  {
    emoji: "😃",
    description: "grinning face with big eyes",
    category: "Smileys & Emotion",
    aliases: ["smiley"],
    tags: ["happy", "joy", "haha"]
  },
  {
    emoji: "😄",
    description: "grinning face with smiling eyes",
    category: "Smileys & Emotion",
    aliases: ["smile"],
    tags: ["happy", "joy", "laugh", "pleased"]
  },
  {
    emoji: "😁",
    description: "beaming face with smiling eyes",
    category: "Smileys & Emotion",
    aliases: ["grin"],
    tags: []
  },
  {
    emoji: "😆",
    description: "grinning squinting face",
    category: "Smileys & Emotion",
    aliases: ["laughing", "satisfied"],
    tags: ["happy", "haha"]
  },
  {
    emoji: "😅",
    description: "grinning face with sweat",
    category: "Smileys & Emotion",
    aliases: ["sweat_smile"],
    tags: ["hot"]
  },
  {
    emoji: "🤣",
    description: "rolling on the floor laughing",
    category: "Smileys & Emotion",
    aliases: ["rofl"],
    tags: ["lol", "laughing"]
  },
  {
    emoji: "😂",
    description: "face with tears of joy",
    category: "Smileys & Emotion",
    aliases: ["joy"],
    tags: ["tears"]
  },
  {
    emoji: "🙂",
    description: "slightly smiling face",
    category: "Smileys & Emotion",
    aliases: ["slightly_smiling_face"],
    tags: []
  },
  {
    emoji: "🙃",
    description: "upside-down face",
    category: "Smileys & Emotion",
    aliases: ["upside_down_face"],
    tags: []
  },
  {
    emoji: "😉",
    description: "winking face",
    category: "Smileys & Emotion",
    aliases: ["wink"],
    tags: ["flirt"]
  },
  {
    emoji: "😊",
    description: "smiling face with smiling eyes",
    category: "Smileys & Emotion",
    aliases: ["blush"],
    tags: ["proud"]
  },
  {
    emoji: "😇",
    description: "smiling face with halo",
    category: "Smileys & Emotion",
    aliases: ["innocent"],
    tags: ["angel"]
  },
  {
    emoji: "🥰",
    description: "smiling face with hearts",
    category: "Smileys & Emotion",
    aliases: ["smiling_face_with_three_hearts"],
    tags: ["love"]
  },
  {
    emoji: "😍",
    description: "smiling face with heart-eyes",
    category: "Smileys & Emotion",
    aliases: ["heart_eyes"],
    tags: ["love", "crush"]
  },
  {
    emoji: "🤩",
    description: "star-struck",
    category: "Smileys & Emotion",
    aliases: ["star_struck"],
    tags: ["eyes"]
  },
  {
    emoji: "😘",
    description: "face blowing a kiss",
    category: "Smileys & Emotion",
    aliases: ["kissing_heart"],
    tags: ["flirt"]
  },
  {
    emoji: "😗",
    description: "kissing face",
    category: "Smileys & Emotion",
    aliases: ["kissing"],
    tags: []
  },
  {
    emoji: "☺️",
    description: "smiling face",
    category: "Smileys & Emotion",
    aliases: ["relaxed"],
    tags: ["blush", "pleased"]
  },
  {
    emoji: "😚",
    description: "kissing face with closed eyes",
    category: "Smileys & Emotion",
    aliases: ["kissing_closed_eyes"],
    tags: []
  },
  {
    emoji: "😙",
    description: "kissing face with smiling eyes",
    category: "Smileys & Emotion",
    aliases: ["kissing_smiling_eyes"],
    tags: []
  },
  {
    emoji: "🥲",
    description: "smiling face with tear",
    category: "Smileys & Emotion",
    aliases: ["smiling_face_with_tear"],
    tags: []
  },
  {
    emoji: "😋",
    description: "face savoring food",
    category: "Smileys & Emotion",
    aliases: ["yum"],
    tags: ["tongue", "lick"]
  },
  {
    emoji: "😛",
    description: "face with tongue",
    category: "Smileys & Emotion",
    aliases: ["stuck_out_tongue"],
    tags: []
  },
  {
    emoji: "😜",
    description: "winking face with tongue",
    category: "Smileys & Emotion",
    aliases: ["stuck_out_tongue_winking_eye"],
    tags: ["prank", "silly"]
  },
  {
    emoji: "🤪",
    description: "zany face",
    category: "Smileys & Emotion",
    aliases: ["zany_face"],
    tags: ["goofy", "wacky"]
  },
  {
    emoji: "😝",
    description: "squinting face with tongue",
    category: "Smileys & Emotion",
    aliases: ["stuck_out_tongue_closed_eyes"],
    tags: ["prank"]
  },
  {
    emoji: "🤑",
    description: "money-mouth face",
    category: "Smileys & Emotion",
    aliases: ["money_mouth_face"],
    tags: ["rich"]
  },
  {
    emoji: "🤗",
    description: "hugging face",
    category: "Smileys & Emotion",
    aliases: ["hugs"],
    tags: []
  },
  {
    emoji: "🤭",
    description: "face with hand over mouth",
    category: "Smileys & Emotion",
    aliases: ["hand_over_mouth"],
    tags: ["quiet", "whoops"]
  },
  {
    emoji: "🤫",
    description: "shushing face",
    category: "Smileys & Emotion",
    aliases: ["shushing_face"],
    tags: ["silence", "quiet"]
  },
  {
    emoji: "🤔",
    description: "thinking face",
    category: "Smileys & Emotion",
    aliases: ["thinking"],
    tags: []
  },
  {
    emoji: "🤐",
    description: "zipper-mouth face",
    category: "Smileys & Emotion",
    aliases: ["zipper_mouth_face"],
    tags: ["silence", "hush"]
  },
  {
    emoji: "🤨",
    description: "face with raised eyebrow",
    category: "Smileys & Emotion",
    aliases: ["raised_eyebrow"],
    tags: ["suspicious"]
  },
  {
    emoji: "😐",
    description: "neutral face",
    category: "Smileys & Emotion",
    aliases: ["neutral_face"],
    tags: ["meh"]
  },
  {
    emoji: "😑",
    description: "expressionless face",
    category: "Smileys & Emotion",
    aliases: ["expressionless"],
    tags: []
  },
  {
    emoji: "😶",
    description: "face without mouth",
    category: "Smileys & Emotion",
    aliases: ["no_mouth"],
    tags: ["mute", "silence"]
  },
  {
    emoji: "😶‍🌫️",
    description: "face in clouds",
    category: "Smileys & Emotion",
    aliases: ["face_in_clouds"],
    tags: []
  },
  {
    emoji: "😏",
    description: "smirking face",
    category: "Smileys & Emotion",
    aliases: ["smirk"],
    tags: ["smug"]
  },
  {
    emoji: "😒",
    description: "unamused face",
    category: "Smileys & Emotion",
    aliases: ["unamused"],
    tags: ["meh"]
  },
  {
    emoji: "🙄",
    description: "face with rolling eyes",
    category: "Smileys & Emotion",
    aliases: ["roll_eyes"],
    tags: []
  },
  {
    emoji: "😬",
    description: "grimacing face",
    category: "Smileys & Emotion",
    aliases: ["grimacing"],
    tags: []
  },
  {
    emoji: "😮‍💨",
    description: "face exhaling",
    category: "Smileys & Emotion",
    aliases: ["face_exhaling"],
    tags: []
  },
  {
    emoji: "🤥",
    description: "lying face",
    category: "Smileys & Emotion",
    aliases: ["lying_face"],
    tags: ["liar"]
  },
  {
    emoji: "😌",
    description: "relieved face",
    category: "Smileys & Emotion",
    aliases: ["relieved"],
    tags: ["whew"]
  },
  {
    emoji: "😔",
    description: "pensive face",
    category: "Smileys & Emotion",
    aliases: ["pensive"],
    tags: []
  },
  {
    emoji: "😪",
    description: "sleepy face",
    category: "Smileys & Emotion",
    aliases: ["sleepy"],
    tags: ["tired"]
  },
  {
    emoji: "🤤",
    description: "drooling face",
    category: "Smileys & Emotion",
    aliases: ["drooling_face"],
    tags: []
  },
  {
    emoji: "😴",
    description: "sleeping face",
    category: "Smileys & Emotion",
    aliases: ["sleeping"],
    tags: ["zzz"]
  },
  {
    emoji: "😷",
    description: "face with medical mask",
    category: "Smileys & Emotion",
    aliases: ["mask"],
    tags: ["sick", "ill"]
  },
  {
    emoji: "🤒",
    description: "face with thermometer",
    category: "Smileys & Emotion",
    aliases: ["face_with_thermometer"],
    tags: ["sick"]
  },
  {
    emoji: "🤕",
    description: "face with head-bandage",
    category: "Smileys & Emotion",
    aliases: ["face_with_head_bandage"],
    tags: ["hurt"]
  },
  {
    emoji: "🤢",
    description: "nauseated face",
    category: "Smileys & Emotion",
    aliases: ["nauseated_face"],
    tags: ["sick", "barf", "disgusted"]
  },
  {
    emoji: "🤮",
    description: "face vomiting",
    category: "Smileys & Emotion",
    aliases: ["vomiting_face"],
    tags: ["barf", "sick"]
  },
  {
    emoji: "🤧",
    description: "sneezing face",
    category: "Smileys & Emotion",
    aliases: ["sneezing_face"],
    tags: ["achoo", "sick"]
  },
  {
    emoji: "🥵",
    description: "hot face",
    category: "Smileys & Emotion",
    aliases: ["hot_face"],
    tags: ["heat", "sweating"]
  },
  {
    emoji: "🥶",
    description: "cold face",
    category: "Smileys & Emotion",
    aliases: ["cold_face"],
    tags: ["freezing", "ice"]
  },
  {
    emoji: "🥴",
    description: "woozy face",
    category: "Smileys & Emotion",
    aliases: ["woozy_face"],
    tags: ["groggy"]
  },
  {
    emoji: "😵",
    description: "knocked-out face",
    category: "Smileys & Emotion",
    aliases: ["dizzy_face"],
    tags: []
  },
  {
    emoji: "😵‍💫",
    description: "face with spiral eyes",
    category: "Smileys & Emotion",
    aliases: ["face_with_spiral_eyes"],
    tags: []
  },
  {
    emoji: "🤯",
    description: "exploding head",
    category: "Smileys & Emotion",
    aliases: ["exploding_head"],
    tags: ["mind", "blown"]
  },
  {
    emoji: "🤠",
    description: "cowboy hat face",
    category: "Smileys & Emotion",
    aliases: ["cowboy_hat_face"],
    tags: []
  },
  {
    emoji: "🥳",
    description: "partying face",
    category: "Smileys & Emotion",
    aliases: ["partying_face"],
    tags: ["celebration", "birthday"]
  },
  {
    emoji: "🥸",
    description: "disguised face",
    category: "Smileys & Emotion",
    aliases: ["disguised_face"],
    tags: []
  },
  {
    emoji: "😎",
    description: "smiling face with sunglasses",
    category: "Smileys & Emotion",
    aliases: ["sunglasses"],
    tags: ["cool"]
  },
  {
    emoji: "🤓",
    description: "nerd face",
    category: "Smileys & Emotion",
    aliases: ["nerd_face"],
    tags: ["geek", "glasses"]
  },
  {
    emoji: "🧐",
    description: "face with monocle",
    category: "Smileys & Emotion",
    aliases: ["monocle_face"],
    tags: []
  },
  {
    emoji: "😕",
    description: "confused face",
    category: "Smileys & Emotion",
    aliases: ["confused"],
    tags: []
  },
  {
    emoji: "😟",
    description: "worried face",
    category: "Smileys & Emotion",
    aliases: ["worried"],
    tags: ["nervous"]
  },
  {
    emoji: "🙁",
    description: "slightly frowning face",
    category: "Smileys & Emotion",
    aliases: ["slightly_frowning_face"],
    tags: []
  },
  {
    emoji: "☹️",
    description: "frowning face",
    category: "Smileys & Emotion",
    aliases: ["frowning_face"],
    tags: []
  },
  {
    emoji: "😮",
    description: "face with open mouth",
    category: "Smileys & Emotion",
    aliases: ["open_mouth"],
    tags: ["surprise", "impressed", "wow"]
  },
  {
    emoji: "😯",
    description: "hushed face",
    category: "Smileys & Emotion",
    aliases: ["hushed"],
    tags: ["silence", "speechless"]
  },
  {
    emoji: "😲",
    description: "astonished face",
    category: "Smileys & Emotion",
    aliases: ["astonished"],
    tags: ["amazed", "gasp"]
  },
  {
    emoji: "😳",
    description: "flushed face",
    category: "Smileys & Emotion",
    aliases: ["flushed"],
    tags: []
  },
  {
    emoji: "🥺",
    description: "pleading face",
    category: "Smileys & Emotion",
    aliases: ["pleading_face"],
    tags: ["puppy", "eyes"]
  },
  {
    emoji: "😦",
    description: "frowning face with open mouth",
    category: "Smileys & Emotion",
    aliases: ["frowning"],
    tags: []
  },
  {
    emoji: "😧",
    description: "anguished face",
    category: "Smileys & Emotion",
    aliases: ["anguished"],
    tags: ["stunned"]
  },
  {
    emoji: "😨",
    description: "fearful face",
    category: "Smileys & Emotion",
    aliases: ["fearful"],
    tags: ["scared", "shocked", "oops"]
  },
  {
    emoji: "😰",
    description: "anxious face with sweat",
    category: "Smileys & Emotion",
    aliases: ["cold_sweat"],
    tags: ["nervous"]
  },
  {
    emoji: "😥",
    description: "sad but relieved face",
    category: "Smileys & Emotion",
    aliases: ["disappointed_relieved"],
    tags: ["phew", "sweat", "nervous"]
  },
  {
    emoji: "😢",
    description: "crying face",
    category: "Smileys & Emotion",
    aliases: ["cry"],
    tags: ["sad", "tear"]
  },
  {
    emoji: "😭",
    description: "loudly crying face",
    category: "Smileys & Emotion",
    aliases: ["sob"],
    tags: ["sad", "cry", "bawling"]
  },
  {
    emoji: "😱",
    description: "face screaming in fear",
    category: "Smileys & Emotion",
    aliases: ["scream"],
    tags: ["horror", "shocked"]
  },
  {
    emoji: "😖",
    description: "confounded face",
    category: "Smileys & Emotion",
    aliases: ["confounded"],
    tags: []
  },
  {
    emoji: "😣",
    description: "persevering face",
    category: "Smileys & Emotion",
    aliases: ["persevere"],
    tags: ["struggling"]
  },
  {
    emoji: "😞",
    description: "disappointed face",
    category: "Smileys & Emotion",
    aliases: ["disappointed"],
    tags: ["sad"]
  },
  {
    emoji: "😓",
    description: "downcast face with sweat",
    category: "Smileys & Emotion",
    aliases: ["sweat"],
    tags: []
  },
  {
    emoji: "😩",
    description: "weary face",
    category: "Smileys & Emotion",
    aliases: ["weary"],
    tags: ["tired"]
  },
  {
    emoji: "😫",
    description: "tired face",
    category: "Smileys & Emotion",
    aliases: ["tired_face"],
    tags: ["upset", "whine"]
  },
  {
    emoji: "🥱",
    description: "yawning face",
    category: "Smileys & Emotion",
    aliases: ["yawning_face"],
    tags: []
  },
  {
    emoji: "😤",
    description: "face with steam from nose",
    category: "Smileys & Emotion",
    aliases: ["triumph"],
    tags: ["smug"]
  },
  {
    emoji: "😡",
    description: "pouting face",
    category: "Smileys & Emotion",
    aliases: ["rage", "pout"],
    tags: ["angry"]
  },
  {
    emoji: "😠",
    description: "angry face",
    category: "Smileys & Emotion",
    aliases: ["angry"],
    tags: ["mad", "annoyed"]
  },
  {
    emoji: "🤬",
    description: "face with symbols on mouth",
    category: "Smileys & Emotion",
    aliases: ["cursing_face"],
    tags: ["foul"]
  },
  {
    emoji: "😈",
    description: "smiling face with horns",
    category: "Smileys & Emotion",
    aliases: ["smiling_imp"],
    tags: ["devil", "evil", "horns"]
  },
  {
    emoji: "👿",
    description: "angry face with horns",
    category: "Smileys & Emotion",
    aliases: ["imp"],
    tags: ["angry", "devil", "evil", "horns"]
  },
  {
    emoji: "💀",
    description: "skull",
    category: "Smileys & Emotion",
    aliases: ["skull"],
    tags: ["dead", "danger", "poison"]
  },
  {
    emoji: "☠️",
    description: "skull and crossbones",
    category: "Smileys & Emotion",
    aliases: ["skull_and_crossbones"],
    tags: ["danger", "pirate"]
  },
  {
    emoji: "💩",
    description: "pile of poo",
    category: "Smileys & Emotion",
    aliases: ["hankey", "poop", "shit"],
    tags: ["crap"]
  },
  {
    emoji: "🤡",
    description: "clown face",
    category: "Smileys & Emotion",
    aliases: ["clown_face"],
    tags: []
  },
  {
    emoji: "👹",
    description: "ogre",
    category: "Smileys & Emotion",
    aliases: ["japanese_ogre"],
    tags: ["monster"]
  },
  {
    emoji: "👺",
    description: "goblin",
    category: "Smileys & Emotion",
    aliases: ["japanese_goblin"],
    tags: []
  },
  {
    emoji: "👻",
    description: "ghost",
    category: "Smileys & Emotion",
    aliases: ["ghost"],
    tags: ["halloween"]
  },
  {
    emoji: "👽",
    description: "alien",
    category: "Smileys & Emotion",
    aliases: ["alien"],
    tags: ["ufo"]
  },
  {
    emoji: "👾",
    description: "alien monster",
    category: "Smileys & Emotion",
    aliases: ["space_invader"],
    tags: ["game", "retro"]
  },
  {
    emoji: "🤖",
    description: "robot",
    category: "Smileys & Emotion",
    aliases: ["robot"],
    tags: []
  },
  {
    emoji: "😺",
    description: "grinning cat",
    category: "Smileys & Emotion",
    aliases: ["smiley_cat"],
    tags: []
  },
  {
    emoji: "😸",
    description: "grinning cat with smiling eyes",
    category: "Smileys & Emotion",
    aliases: ["smile_cat"],
    tags: []
  },
  {
    emoji: "😹",
    description: "cat with tears of joy",
    category: "Smileys & Emotion",
    aliases: ["joy_cat"],
    tags: []
  },
  {
    emoji: "😻",
    description: "smiling cat with heart-eyes",
    category: "Smileys & Emotion",
    aliases: ["heart_eyes_cat"],
    tags: []
  },
  {
    emoji: "😼",
    description: "cat with wry smile",
    category: "Smileys & Emotion",
    aliases: ["smirk_cat"],
    tags: []
  },
  {
    emoji: "😽",
    description: "kissing cat",
    category: "Smileys & Emotion",
    aliases: ["kissing_cat"],
    tags: []
  },
  {
    emoji: "🙀",
    description: "weary cat",
    category: "Smileys & Emotion",
    aliases: ["scream_cat"],
    tags: ["horror"]
  },
  {
    emoji: "😿",
    description: "crying cat",
    category: "Smileys & Emotion",
    aliases: ["crying_cat_face"],
    tags: ["sad", "tear"]
  },
  {
    emoji: "😾",
    description: "pouting cat",
    category: "Smileys & Emotion",
    aliases: ["pouting_cat"],
    tags: []
  },
  {
    emoji: "🙈",
    description: "see-no-evil monkey",
    category: "Smileys & Emotion",
    aliases: ["see_no_evil"],
    tags: ["monkey", "blind", "ignore"]
  },
  {
    emoji: "🙉",
    description: "hear-no-evil monkey",
    category: "Smileys & Emotion",
    aliases: ["hear_no_evil"],
    tags: ["monkey", "deaf"]
  },
  {
    emoji: "🙊",
    description: "speak-no-evil monkey",
    category: "Smileys & Emotion",
    aliases: ["speak_no_evil"],
    tags: ["monkey", "mute", "hush"]
  },
  {
    emoji: "💋",
    description: "kiss mark",
    category: "Smileys & Emotion",
    aliases: ["kiss"],
    tags: ["lipstick"]
  },
  {
    emoji: "💌",
    description: "love letter",
    category: "Smileys & Emotion",
    aliases: ["love_letter"],
    tags: ["email", "envelope"]
  },
  {
    emoji: "💘",
    description: "heart with arrow",
    category: "Smileys & Emotion",
    aliases: ["cupid"],
    tags: ["love", "heart"]
  },
  {
    emoji: "💝",
    description: "heart with ribbon",
    category: "Smileys & Emotion",
    aliases: ["gift_heart"],
    tags: ["chocolates"]
  },
  {
    emoji: "💖",
    description: "sparkling heart",
    category: "Smileys & Emotion",
    aliases: ["sparkling_heart"],
    tags: []
  },
  {
    emoji: "💗",
    description: "growing heart",
    category: "Smileys & Emotion",
    aliases: ["heartpulse"],
    tags: []
  },
  {
    emoji: "💓",
    description: "beating heart",
    category: "Smileys & Emotion",
    aliases: ["heartbeat"],
    tags: []
  },
  {
    emoji: "💞",
    description: "revolving hearts",
    category: "Smileys & Emotion",
    aliases: ["revolving_hearts"],
    tags: []
  },
  {
    emoji: "💕",
    description: "two hearts",
    category: "Smileys & Emotion",
    aliases: ["two_hearts"],
    tags: []
  },
  {
    emoji: "💟",
    description: "heart decoration",
    category: "Smileys & Emotion",
    aliases: ["heart_decoration"],
    tags: []
  },
  {
    emoji: "❣️",
    description: "heart exclamation",
    category: "Smileys & Emotion",
    aliases: ["heavy_heart_exclamation"],
    tags: []
  },
  {
    emoji: "💔",
    description: "broken heart",
    category: "Smileys & Emotion",
    aliases: ["broken_heart"],
    tags: []
  },
  {
    emoji: "❤️‍🔥",
    description: "heart on fire",
    category: "Smileys & Emotion",
    aliases: ["heart_on_fire"],
    tags: []
  },
  {
    emoji: "❤️‍🩹",
    description: "mending heart",
    category: "Smileys & Emotion",
    aliases: ["mending_heart"],
    tags: []
  },
  {
    emoji: "❤️",
    description: "red heart",
    category: "Smileys & Emotion",
    aliases: ["heart"],
    tags: ["love"]
  },
  {
    emoji: "🧡",
    description: "orange heart",
    category: "Smileys & Emotion",
    aliases: ["orange_heart"],
    tags: []
  },
  {
    emoji: "💛",
    description: "yellow heart",
    category: "Smileys & Emotion",
    aliases: ["yellow_heart"],
    tags: []
  },
  {
    emoji: "💚",
    description: "green heart",
    category: "Smileys & Emotion",
    aliases: ["green_heart"],
    tags: []
  },
  {
    emoji: "💙",
    description: "blue heart",
    category: "Smileys & Emotion",
    aliases: ["blue_heart"],
    tags: []
  },
  {
    emoji: "💜",
    description: "purple heart",
    category: "Smileys & Emotion",
    aliases: ["purple_heart"],
    tags: []
  },
  {
    emoji: "🤎",
    description: "brown heart",
    category: "Smileys & Emotion",
    aliases: ["brown_heart"],
    tags: []
  },
  {
    emoji: "🖤",
    description: "black heart",
    category: "Smileys & Emotion",
    aliases: ["black_heart"],
    tags: []
  },
  {
    emoji: "🤍",
    description: "white heart",
    category: "Smileys & Emotion",
    aliases: ["white_heart"],
    tags: []
  },
  {
    emoji: "💯",
    description: "hundred points",
    category: "Smileys & Emotion",
    aliases: ["100"],
    tags: ["score", "perfect"]
  },
  {
    emoji: "💢",
    description: "anger symbol",
    category: "Smileys & Emotion",
    aliases: ["anger"],
    tags: ["angry"]
  },
  {
    emoji: "💥",
    description: "collision",
    category: "Smileys & Emotion",
    aliases: ["boom", "collision"],
    tags: ["explode"]
  },
  {
    emoji: "💫",
    description: "dizzy",
    category: "Smileys & Emotion",
    aliases: ["dizzy"],
    tags: ["star"]
  },
  {
    emoji: "💦",
    description: "sweat droplets",
    category: "Smileys & Emotion",
    aliases: ["sweat_drops"],
    tags: ["water", "workout"]
  },
  {
    emoji: "💨",
    description: "dashing away",
    category: "Smileys & Emotion",
    aliases: ["dash"],
    tags: ["wind", "blow", "fast"]
  },
  {
    emoji: "🕳️",
    description: "hole",
    category: "Smileys & Emotion",
    aliases: ["hole"],
    tags: []
  },
  {
    emoji: "💣",
    description: "bomb",
    category: "Smileys & Emotion",
    aliases: ["bomb"],
    tags: ["boom"]
  },
  {
    emoji: "💬",
    description: "speech balloon",
    category: "Smileys & Emotion",
    aliases: ["speech_balloon"],
    tags: ["comment"]
  },
  {
    emoji: "👁️‍🗨️",
    description: "eye in speech bubble",
    category: "Smileys & Emotion",
    aliases: ["eye_speech_bubble"],
    tags: []
  },
  {
    emoji: "🗨️",
    description: "left speech bubble",
    category: "Smileys & Emotion",
    aliases: ["left_speech_bubble"],
    tags: []
  },
  {
    emoji: "🗯️",
    description: "right anger bubble",
    category: "Smileys & Emotion",
    aliases: ["right_anger_bubble"],
    tags: []
  },
  {
    emoji: "💭",
    description: "thought balloon",
    category: "Smileys & Emotion",
    aliases: ["thought_balloon"],
    tags: ["thinking"]
  },
  {
    emoji: "💤",
    description: "zzz",
    category: "Smileys & Emotion",
    aliases: ["zzz"],
    tags: ["sleeping"]
  },
  {
    emoji: "👋",
    description: "waving hand",
    category: "People & Body",
    aliases: ["wave"],
    tags: ["goodbye"],
    skin_tones: !0
  },
  {
    emoji: "🤚",
    description: "raised back of hand",
    category: "People & Body",
    aliases: ["raised_back_of_hand"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "🖐️",
    description: "hand with fingers splayed",
    category: "People & Body",
    aliases: ["raised_hand_with_fingers_splayed"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "✋",
    description: "raised hand",
    category: "People & Body",
    aliases: ["hand", "raised_hand"],
    tags: ["highfive", "stop"],
    skin_tones: !0
  },
  {
    emoji: "🖖",
    description: "vulcan salute",
    category: "People & Body",
    aliases: ["vulcan_salute"],
    tags: ["prosper", "spock"],
    skin_tones: !0
  },
  {
    emoji: "👌",
    description: "OK hand",
    category: "People & Body",
    aliases: ["ok_hand"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "🤌",
    description: "pinched fingers",
    category: "People & Body",
    aliases: ["pinched_fingers"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "🤏",
    description: "pinching hand",
    category: "People & Body",
    aliases: ["pinching_hand"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "✌️",
    description: "victory hand",
    category: "People & Body",
    aliases: ["v"],
    tags: ["victory", "peace"],
    skin_tones: !0
  },
  {
    emoji: "🤞",
    description: "crossed fingers",
    category: "People & Body",
    aliases: ["crossed_fingers"],
    tags: ["luck", "hopeful"],
    skin_tones: !0
  },
  {
    emoji: "🤟",
    description: "love-you gesture",
    category: "People & Body",
    aliases: ["love_you_gesture"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "🤘",
    description: "sign of the horns",
    category: "People & Body",
    aliases: ["metal"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "🤙",
    description: "call me hand",
    category: "People & Body",
    aliases: ["call_me_hand"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "👈",
    description: "backhand index pointing left",
    category: "People & Body",
    aliases: ["point_left"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "👉",
    description: "backhand index pointing right",
    category: "People & Body",
    aliases: ["point_right"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "👆",
    description: "backhand index pointing up",
    category: "People & Body",
    aliases: ["point_up_2"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "🖕",
    description: "middle finger",
    category: "People & Body",
    aliases: ["middle_finger", "fu"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "👇",
    description: "backhand index pointing down",
    category: "People & Body",
    aliases: ["point_down"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "☝️",
    description: "index pointing up",
    category: "People & Body",
    aliases: ["point_up"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "👍",
    description: "thumbs up",
    category: "People & Body",
    aliases: ["+1", "thumbsup"],
    tags: ["approve", "ok"],
    skin_tones: !0
  },
  {
    emoji: "👎",
    description: "thumbs down",
    category: "People & Body",
    aliases: ["-1", "thumbsdown"],
    tags: ["disapprove", "bury"],
    skin_tones: !0
  },
  {
    emoji: "✊",
    description: "raised fist",
    category: "People & Body",
    aliases: ["fist_raised", "fist"],
    tags: ["power"],
    skin_tones: !0
  },
  {
    emoji: "👊",
    description: "oncoming fist",
    category: "People & Body",
    aliases: ["fist_oncoming", "facepunch", "punch"],
    tags: ["attack"],
    skin_tones: !0
  },
  {
    emoji: "🤛",
    description: "left-facing fist",
    category: "People & Body",
    aliases: ["fist_left"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "🤜",
    description: "right-facing fist",
    category: "People & Body",
    aliases: ["fist_right"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "👏",
    description: "clapping hands",
    category: "People & Body",
    aliases: ["clap"],
    tags: ["praise", "applause"],
    skin_tones: !0
  },
  {
    emoji: "🙌",
    description: "raising hands",
    category: "People & Body",
    aliases: ["raised_hands"],
    tags: ["hooray"],
    skin_tones: !0
  },
  {
    emoji: "👐",
    description: "open hands",
    category: "People & Body",
    aliases: ["open_hands"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "🤲",
    description: "palms up together",
    category: "People & Body",
    aliases: ["palms_up_together"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "🤝",
    description: "handshake",
    category: "People & Body",
    aliases: ["handshake"],
    tags: ["deal"]
  },
  {
    emoji: "🙏",
    description: "folded hands",
    category: "People & Body",
    aliases: ["pray"],
    tags: ["please", "hope", "wish"],
    skin_tones: !0
  },
  {
    emoji: "✍️",
    description: "writing hand",
    category: "People & Body",
    aliases: ["writing_hand"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "💅",
    description: "nail polish",
    category: "People & Body",
    aliases: ["nail_care"],
    tags: ["beauty", "manicure"],
    skin_tones: !0
  },
  {
    emoji: "🤳",
    description: "selfie",
    category: "People & Body",
    aliases: ["selfie"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "💪",
    description: "flexed biceps",
    category: "People & Body",
    aliases: ["muscle"],
    tags: ["flex", "bicep", "strong", "workout"],
    skin_tones: !0
  },
  {
    emoji: "🦾",
    description: "mechanical arm",
    category: "People & Body",
    aliases: ["mechanical_arm"],
    tags: []
  },
  {
    emoji: "🦿",
    description: "mechanical leg",
    category: "People & Body",
    aliases: ["mechanical_leg"],
    tags: []
  },
  {
    emoji: "🦵",
    description: "leg",
    category: "People & Body",
    aliases: ["leg"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "🦶",
    description: "foot",
    category: "People & Body",
    aliases: ["foot"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "👂",
    description: "ear",
    category: "People & Body",
    aliases: ["ear"],
    tags: ["hear", "sound", "listen"],
    skin_tones: !0
  },
  {
    emoji: "🦻",
    description: "ear with hearing aid",
    category: "People & Body",
    aliases: ["ear_with_hearing_aid"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "👃",
    description: "nose",
    category: "People & Body",
    aliases: ["nose"],
    tags: ["smell"],
    skin_tones: !0
  },
  {
    emoji: "🧠",
    description: "brain",
    category: "People & Body",
    aliases: ["brain"],
    tags: []
  },
  {
    emoji: "🫀",
    description: "anatomical heart",
    category: "People & Body",
    aliases: ["anatomical_heart"],
    tags: []
  },
  {
    emoji: "🫁",
    description: "lungs",
    category: "People & Body",
    aliases: ["lungs"],
    tags: []
  },
  {
    emoji: "🦷",
    description: "tooth",
    category: "People & Body",
    aliases: ["tooth"],
    tags: []
  },
  {
    emoji: "🦴",
    description: "bone",
    category: "People & Body",
    aliases: ["bone"],
    tags: []
  },
  {
    emoji: "👀",
    description: "eyes",
    category: "People & Body",
    aliases: ["eyes"],
    tags: ["look", "see", "watch"]
  },
  {
    emoji: "👁️",
    description: "eye",
    category: "People & Body",
    aliases: ["eye"],
    tags: []
  },
  {
    emoji: "👅",
    description: "tongue",
    category: "People & Body",
    aliases: ["tongue"],
    tags: ["taste"]
  },
  {
    emoji: "👄",
    description: "mouth",
    category: "People & Body",
    aliases: ["lips"],
    tags: ["kiss"]
  },
  {
    emoji: "👶",
    description: "baby",
    category: "People & Body",
    aliases: ["baby"],
    tags: ["child", "newborn"],
    skin_tones: !0
  },
  {
    emoji: "🧒",
    description: "child",
    category: "People & Body",
    aliases: ["child"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "👦",
    description: "boy",
    category: "People & Body",
    aliases: ["boy"],
    tags: ["child"],
    skin_tones: !0
  },
  {
    emoji: "👧",
    description: "girl",
    category: "People & Body",
    aliases: ["girl"],
    tags: ["child"],
    skin_tones: !0
  },
  {
    emoji: "🧑",
    description: "person",
    category: "People & Body",
    aliases: ["adult"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "👱",
    description: "person: blond hair",
    category: "People & Body",
    aliases: ["blond_haired_person"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "👨",
    description: "man",
    category: "People & Body",
    aliases: ["man"],
    tags: ["mustache", "father", "dad"],
    skin_tones: !0
  },
  {
    emoji: "🧔",
    description: "person: beard",
    category: "People & Body",
    aliases: ["bearded_person"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "🧔‍♂️",
    description: "man: beard",
    category: "People & Body",
    aliases: ["man_beard"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "🧔‍♀️",
    description: "woman: beard",
    category: "People & Body",
    aliases: ["woman_beard"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "👨‍🦰",
    description: "man: red hair",
    category: "People & Body",
    aliases: ["red_haired_man"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "👨‍🦱",
    description: "man: curly hair",
    category: "People & Body",
    aliases: ["curly_haired_man"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "👨‍🦳",
    description: "man: white hair",
    category: "People & Body",
    aliases: ["white_haired_man"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "👨‍🦲",
    description: "man: bald",
    category: "People & Body",
    aliases: ["bald_man"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "👩",
    description: "woman",
    category: "People & Body",
    aliases: ["woman"],
    tags: ["girls"],
    skin_tones: !0
  },
  {
    emoji: "👩‍🦰",
    description: "woman: red hair",
    category: "People & Body",
    aliases: ["red_haired_woman"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "🧑‍🦰",
    description: "person: red hair",
    category: "People & Body",
    aliases: ["person_red_hair"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "👩‍🦱",
    description: "woman: curly hair",
    category: "People & Body",
    aliases: ["curly_haired_woman"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "🧑‍🦱",
    description: "person: curly hair",
    category: "People & Body",
    aliases: ["person_curly_hair"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "👩‍🦳",
    description: "woman: white hair",
    category: "People & Body",
    aliases: ["white_haired_woman"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "🧑‍🦳",
    description: "person: white hair",
    category: "People & Body",
    aliases: ["person_white_hair"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "👩‍🦲",
    description: "woman: bald",
    category: "People & Body",
    aliases: ["bald_woman"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "🧑‍🦲",
    description: "person: bald",
    category: "People & Body",
    aliases: ["person_bald"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "👱‍♀️",
    description: "woman: blond hair",
    category: "People & Body",
    aliases: ["blond_haired_woman", "blonde_woman"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "👱‍♂️",
    description: "man: blond hair",
    category: "People & Body",
    aliases: ["blond_haired_man"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "🧓",
    description: "older person",
    category: "People & Body",
    aliases: ["older_adult"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "👴",
    description: "old man",
    category: "People & Body",
    aliases: ["older_man"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "👵",
    description: "old woman",
    category: "People & Body",
    aliases: ["older_woman"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "🙍",
    description: "person frowning",
    category: "People & Body",
    aliases: ["frowning_person"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "🙍‍♂️",
    description: "man frowning",
    category: "People & Body",
    aliases: ["frowning_man"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "🙍‍♀️",
    description: "woman frowning",
    category: "People & Body",
    aliases: ["frowning_woman"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "🙎",
    description: "person pouting",
    category: "People & Body",
    aliases: ["pouting_face"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "🙎‍♂️",
    description: "man pouting",
    category: "People & Body",
    aliases: ["pouting_man"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "🙎‍♀️",
    description: "woman pouting",
    category: "People & Body",
    aliases: ["pouting_woman"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "🙅",
    description: "person gesturing NO",
    category: "People & Body",
    aliases: ["no_good"],
    tags: ["stop", "halt", "denied"],
    skin_tones: !0
  },
  {
    emoji: "🙅‍♂️",
    description: "man gesturing NO",
    category: "People & Body",
    aliases: ["no_good_man", "ng_man"],
    tags: ["stop", "halt", "denied"],
    skin_tones: !0
  },
  {
    emoji: "🙅‍♀️",
    description: "woman gesturing NO",
    category: "People & Body",
    aliases: ["no_good_woman", "ng_woman"],
    tags: ["stop", "halt", "denied"],
    skin_tones: !0
  },
  {
    emoji: "🙆",
    description: "person gesturing OK",
    category: "People & Body",
    aliases: ["ok_person"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "🙆‍♂️",
    description: "man gesturing OK",
    category: "People & Body",
    aliases: ["ok_man"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "🙆‍♀️",
    description: "woman gesturing OK",
    category: "People & Body",
    aliases: ["ok_woman"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "💁",
    description: "person tipping hand",
    category: "People & Body",
    aliases: ["tipping_hand_person", "information_desk_person"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "💁‍♂️",
    description: "man tipping hand",
    category: "People & Body",
    aliases: ["tipping_hand_man", "sassy_man"],
    tags: ["information"],
    skin_tones: !0
  },
  {
    emoji: "💁‍♀️",
    description: "woman tipping hand",
    category: "People & Body",
    aliases: ["tipping_hand_woman", "sassy_woman"],
    tags: ["information"],
    skin_tones: !0
  },
  {
    emoji: "🙋",
    description: "person raising hand",
    category: "People & Body",
    aliases: ["raising_hand"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "🙋‍♂️",
    description: "man raising hand",
    category: "People & Body",
    aliases: ["raising_hand_man"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "🙋‍♀️",
    description: "woman raising hand",
    category: "People & Body",
    aliases: ["raising_hand_woman"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "🧏",
    description: "deaf person",
    category: "People & Body",
    aliases: ["deaf_person"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "🧏‍♂️",
    description: "deaf man",
    category: "People & Body",
    aliases: ["deaf_man"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "🧏‍♀️",
    description: "deaf woman",
    category: "People & Body",
    aliases: ["deaf_woman"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "🙇",
    description: "person bowing",
    category: "People & Body",
    aliases: ["bow"],
    tags: ["respect", "thanks"],
    skin_tones: !0
  },
  {
    emoji: "🙇‍♂️",
    description: "man bowing",
    category: "People & Body",
    aliases: ["bowing_man"],
    tags: ["respect", "thanks"],
    skin_tones: !0
  },
  {
    emoji: "🙇‍♀️",
    description: "woman bowing",
    category: "People & Body",
    aliases: ["bowing_woman"],
    tags: ["respect", "thanks"],
    skin_tones: !0
  },
  {
    emoji: "🤦",
    description: "person facepalming",
    category: "People & Body",
    aliases: ["facepalm"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "🤦‍♂️",
    description: "man facepalming",
    category: "People & Body",
    aliases: ["man_facepalming"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "🤦‍♀️",
    description: "woman facepalming",
    category: "People & Body",
    aliases: ["woman_facepalming"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "🤷",
    description: "person shrugging",
    category: "People & Body",
    aliases: ["shrug"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "🤷‍♂️",
    description: "man shrugging",
    category: "People & Body",
    aliases: ["man_shrugging"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "🤷‍♀️",
    description: "woman shrugging",
    category: "People & Body",
    aliases: ["woman_shrugging"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "🧑‍⚕️",
    description: "health worker",
    category: "People & Body",
    aliases: ["health_worker"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "👨‍⚕️",
    description: "man health worker",
    category: "People & Body",
    aliases: ["man_health_worker"],
    tags: ["doctor", "nurse"],
    skin_tones: !0
  },
  {
    emoji: "👩‍⚕️",
    description: "woman health worker",
    category: "People & Body",
    aliases: ["woman_health_worker"],
    tags: ["doctor", "nurse"],
    skin_tones: !0
  },
  {
    emoji: "🧑‍🎓",
    description: "student",
    category: "People & Body",
    aliases: ["student"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "👨‍🎓",
    description: "man student",
    category: "People & Body",
    aliases: ["man_student"],
    tags: ["graduation"],
    skin_tones: !0
  },
  {
    emoji: "👩‍🎓",
    description: "woman student",
    category: "People & Body",
    aliases: ["woman_student"],
    tags: ["graduation"],
    skin_tones: !0
  },
  {
    emoji: "🧑‍🏫",
    description: "teacher",
    category: "People & Body",
    aliases: ["teacher"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "👨‍🏫",
    description: "man teacher",
    category: "People & Body",
    aliases: ["man_teacher"],
    tags: ["school", "professor"],
    skin_tones: !0
  },
  {
    emoji: "👩‍🏫",
    description: "woman teacher",
    category: "People & Body",
    aliases: ["woman_teacher"],
    tags: ["school", "professor"],
    skin_tones: !0
  },
  {
    emoji: "🧑‍⚖️",
    description: "judge",
    category: "People & Body",
    aliases: ["judge"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "👨‍⚖️",
    description: "man judge",
    category: "People & Body",
    aliases: ["man_judge"],
    tags: ["justice"],
    skin_tones: !0
  },
  {
    emoji: "👩‍⚖️",
    description: "woman judge",
    category: "People & Body",
    aliases: ["woman_judge"],
    tags: ["justice"],
    skin_tones: !0
  },
  {
    emoji: "🧑‍🌾",
    description: "farmer",
    category: "People & Body",
    aliases: ["farmer"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "👨‍🌾",
    description: "man farmer",
    category: "People & Body",
    aliases: ["man_farmer"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "👩‍🌾",
    description: "woman farmer",
    category: "People & Body",
    aliases: ["woman_farmer"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "🧑‍🍳",
    description: "cook",
    category: "People & Body",
    aliases: ["cook"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "👨‍🍳",
    description: "man cook",
    category: "People & Body",
    aliases: ["man_cook"],
    tags: ["chef"],
    skin_tones: !0
  },
  {
    emoji: "👩‍🍳",
    description: "woman cook",
    category: "People & Body",
    aliases: ["woman_cook"],
    tags: ["chef"],
    skin_tones: !0
  },
  {
    emoji: "🧑‍🔧",
    description: "mechanic",
    category: "People & Body",
    aliases: ["mechanic"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "👨‍🔧",
    description: "man mechanic",
    category: "People & Body",
    aliases: ["man_mechanic"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "👩‍🔧",
    description: "woman mechanic",
    category: "People & Body",
    aliases: ["woman_mechanic"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "🧑‍🏭",
    description: "factory worker",
    category: "People & Body",
    aliases: ["factory_worker"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "👨‍🏭",
    description: "man factory worker",
    category: "People & Body",
    aliases: ["man_factory_worker"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "👩‍🏭",
    description: "woman factory worker",
    category: "People & Body",
    aliases: ["woman_factory_worker"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "🧑‍💼",
    description: "office worker",
    category: "People & Body",
    aliases: ["office_worker"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "👨‍💼",
    description: "man office worker",
    category: "People & Body",
    aliases: ["man_office_worker"],
    tags: ["business"],
    skin_tones: !0
  },
  {
    emoji: "👩‍💼",
    description: "woman office worker",
    category: "People & Body",
    aliases: ["woman_office_worker"],
    tags: ["business"],
    skin_tones: !0
  },
  {
    emoji: "🧑‍🔬",
    description: "scientist",
    category: "People & Body",
    aliases: ["scientist"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "👨‍🔬",
    description: "man scientist",
    category: "People & Body",
    aliases: ["man_scientist"],
    tags: ["research"],
    skin_tones: !0
  },
  {
    emoji: "👩‍🔬",
    description: "woman scientist",
    category: "People & Body",
    aliases: ["woman_scientist"],
    tags: ["research"],
    skin_tones: !0
  },
  {
    emoji: "🧑‍💻",
    description: "technologist",
    category: "People & Body",
    aliases: ["technologist"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "👨‍💻",
    description: "man technologist",
    category: "People & Body",
    aliases: ["man_technologist"],
    tags: ["coder"],
    skin_tones: !0
  },
  {
    emoji: "👩‍💻",
    description: "woman technologist",
    category: "People & Body",
    aliases: ["woman_technologist"],
    tags: ["coder"],
    skin_tones: !0
  },
  {
    emoji: "🧑‍🎤",
    description: "singer",
    category: "People & Body",
    aliases: ["singer"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "👨‍🎤",
    description: "man singer",
    category: "People & Body",
    aliases: ["man_singer"],
    tags: ["rockstar"],
    skin_tones: !0
  },
  {
    emoji: "👩‍🎤",
    description: "woman singer",
    category: "People & Body",
    aliases: ["woman_singer"],
    tags: ["rockstar"],
    skin_tones: !0
  },
  {
    emoji: "🧑‍🎨",
    description: "artist",
    category: "People & Body",
    aliases: ["artist"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "👨‍🎨",
    description: "man artist",
    category: "People & Body",
    aliases: ["man_artist"],
    tags: ["painter"],
    skin_tones: !0
  },
  {
    emoji: "👩‍🎨",
    description: "woman artist",
    category: "People & Body",
    aliases: ["woman_artist"],
    tags: ["painter"],
    skin_tones: !0
  },
  {
    emoji: "🧑‍✈️",
    description: "pilot",
    category: "People & Body",
    aliases: ["pilot"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "👨‍✈️",
    description: "man pilot",
    category: "People & Body",
    aliases: ["man_pilot"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "👩‍✈️",
    description: "woman pilot",
    category: "People & Body",
    aliases: ["woman_pilot"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "🧑‍🚀",
    description: "astronaut",
    category: "People & Body",
    aliases: ["astronaut"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "👨‍🚀",
    description: "man astronaut",
    category: "People & Body",
    aliases: ["man_astronaut"],
    tags: ["space"],
    skin_tones: !0
  },
  {
    emoji: "👩‍🚀",
    description: "woman astronaut",
    category: "People & Body",
    aliases: ["woman_astronaut"],
    tags: ["space"],
    skin_tones: !0
  },
  {
    emoji: "🧑‍🚒",
    description: "firefighter",
    category: "People & Body",
    aliases: ["firefighter"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "👨‍🚒",
    description: "man firefighter",
    category: "People & Body",
    aliases: ["man_firefighter"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "👩‍🚒",
    description: "woman firefighter",
    category: "People & Body",
    aliases: ["woman_firefighter"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "👮",
    description: "police officer",
    category: "People & Body",
    aliases: ["police_officer", "cop"],
    tags: ["law"],
    skin_tones: !0
  },
  {
    emoji: "👮‍♂️",
    description: "man police officer",
    category: "People & Body",
    aliases: ["policeman"],
    tags: ["law", "cop"],
    skin_tones: !0
  },
  {
    emoji: "👮‍♀️",
    description: "woman police officer",
    category: "People & Body",
    aliases: ["policewoman"],
    tags: ["law", "cop"],
    skin_tones: !0
  },
  {
    emoji: "🕵️",
    description: "detective",
    category: "People & Body",
    aliases: ["detective"],
    tags: ["sleuth"],
    skin_tones: !0
  },
  {
    emoji: "🕵️‍♂️",
    description: "man detective",
    category: "People & Body",
    aliases: ["male_detective"],
    tags: ["sleuth"],
    skin_tones: !0
  },
  {
    emoji: "🕵️‍♀️",
    description: "woman detective",
    category: "People & Body",
    aliases: ["female_detective"],
    tags: ["sleuth"],
    skin_tones: !0
  },
  {
    emoji: "💂",
    description: "guard",
    category: "People & Body",
    aliases: ["guard"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "💂‍♂️",
    description: "man guard",
    category: "People & Body",
    aliases: ["guardsman"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "💂‍♀️",
    description: "woman guard",
    category: "People & Body",
    aliases: ["guardswoman"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "🥷",
    description: "ninja",
    category: "People & Body",
    aliases: ["ninja"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "👷",
    description: "construction worker",
    category: "People & Body",
    aliases: ["construction_worker"],
    tags: ["helmet"],
    skin_tones: !0
  },
  {
    emoji: "👷‍♂️",
    description: "man construction worker",
    category: "People & Body",
    aliases: ["construction_worker_man"],
    tags: ["helmet"],
    skin_tones: !0
  },
  {
    emoji: "👷‍♀️",
    description: "woman construction worker",
    category: "People & Body",
    aliases: ["construction_worker_woman"],
    tags: ["helmet"],
    skin_tones: !0
  },
  {
    emoji: "🤴",
    description: "prince",
    category: "People & Body",
    aliases: ["prince"],
    tags: ["crown", "royal"],
    skin_tones: !0
  },
  {
    emoji: "👸",
    description: "princess",
    category: "People & Body",
    aliases: ["princess"],
    tags: ["crown", "royal"],
    skin_tones: !0
  },
  {
    emoji: "👳",
    description: "person wearing turban",
    category: "People & Body",
    aliases: ["person_with_turban"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "👳‍♂️",
    description: "man wearing turban",
    category: "People & Body",
    aliases: ["man_with_turban"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "👳‍♀️",
    description: "woman wearing turban",
    category: "People & Body",
    aliases: ["woman_with_turban"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "👲",
    description: "person with skullcap",
    category: "People & Body",
    aliases: ["man_with_gua_pi_mao"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "🧕",
    description: "woman with headscarf",
    category: "People & Body",
    aliases: ["woman_with_headscarf"],
    tags: ["hijab"],
    skin_tones: !0
  },
  {
    emoji: "🤵",
    description: "person in tuxedo",
    category: "People & Body",
    aliases: ["person_in_tuxedo"],
    tags: ["groom", "marriage", "wedding"],
    skin_tones: !0
  },
  {
    emoji: "🤵‍♂️",
    description: "man in tuxedo",
    category: "People & Body",
    aliases: ["man_in_tuxedo"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "🤵‍♀️",
    description: "woman in tuxedo",
    category: "People & Body",
    aliases: ["woman_in_tuxedo"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "👰",
    description: "person with veil",
    category: "People & Body",
    aliases: ["person_with_veil"],
    tags: ["marriage", "wedding"],
    skin_tones: !0
  },
  {
    emoji: "👰‍♂️",
    description: "man with veil",
    category: "People & Body",
    aliases: ["man_with_veil"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "👰‍♀️",
    description: "woman with veil",
    category: "People & Body",
    aliases: ["woman_with_veil", "bride_with_veil"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "🤰",
    description: "pregnant woman",
    category: "People & Body",
    aliases: ["pregnant_woman"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "🤱",
    description: "breast-feeding",
    category: "People & Body",
    aliases: ["breast_feeding"],
    tags: ["nursing"],
    skin_tones: !0
  },
  {
    emoji: "👩‍🍼",
    description: "woman feeding baby",
    category: "People & Body",
    aliases: ["woman_feeding_baby"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "👨‍🍼",
    description: "man feeding baby",
    category: "People & Body",
    aliases: ["man_feeding_baby"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "🧑‍🍼",
    description: "person feeding baby",
    category: "People & Body",
    aliases: ["person_feeding_baby"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "👼",
    description: "baby angel",
    category: "People & Body",
    aliases: ["angel"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "🎅",
    description: "Santa Claus",
    category: "People & Body",
    aliases: ["santa"],
    tags: ["christmas"],
    skin_tones: !0
  },
  {
    emoji: "🤶",
    description: "Mrs. Claus",
    category: "People & Body",
    aliases: ["mrs_claus"],
    tags: ["santa"],
    skin_tones: !0
  },
  {
    emoji: "🧑‍🎄",
    description: "mx claus",
    category: "People & Body",
    aliases: ["mx_claus"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "🦸",
    description: "superhero",
    category: "People & Body",
    aliases: ["superhero"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "🦸‍♂️",
    description: "man superhero",
    category: "People & Body",
    aliases: ["superhero_man"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "🦸‍♀️",
    description: "woman superhero",
    category: "People & Body",
    aliases: ["superhero_woman"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "🦹",
    description: "supervillain",
    category: "People & Body",
    aliases: ["supervillain"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "🦹‍♂️",
    description: "man supervillain",
    category: "People & Body",
    aliases: ["supervillain_man"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "🦹‍♀️",
    description: "woman supervillain",
    category: "People & Body",
    aliases: ["supervillain_woman"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "🧙",
    description: "mage",
    category: "People & Body",
    aliases: ["mage"],
    tags: ["wizard"],
    skin_tones: !0
  },
  {
    emoji: "🧙‍♂️",
    description: "man mage",
    category: "People & Body",
    aliases: ["mage_man"],
    tags: ["wizard"],
    skin_tones: !0
  },
  {
    emoji: "🧙‍♀️",
    description: "woman mage",
    category: "People & Body",
    aliases: ["mage_woman"],
    tags: ["wizard"],
    skin_tones: !0
  },
  {
    emoji: "🧚",
    description: "fairy",
    category: "People & Body",
    aliases: ["fairy"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "🧚‍♂️",
    description: "man fairy",
    category: "People & Body",
    aliases: ["fairy_man"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "🧚‍♀️",
    description: "woman fairy",
    category: "People & Body",
    aliases: ["fairy_woman"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "🧛",
    description: "vampire",
    category: "People & Body",
    aliases: ["vampire"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "🧛‍♂️",
    description: "man vampire",
    category: "People & Body",
    aliases: ["vampire_man"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "🧛‍♀️",
    description: "woman vampire",
    category: "People & Body",
    aliases: ["vampire_woman"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "🧜",
    description: "merperson",
    category: "People & Body",
    aliases: ["merperson"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "🧜‍♂️",
    description: "merman",
    category: "People & Body",
    aliases: ["merman"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "🧜‍♀️",
    description: "mermaid",
    category: "People & Body",
    aliases: ["mermaid"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "🧝",
    description: "elf",
    category: "People & Body",
    aliases: ["elf"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "🧝‍♂️",
    description: "man elf",
    category: "People & Body",
    aliases: ["elf_man"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "🧝‍♀️",
    description: "woman elf",
    category: "People & Body",
    aliases: ["elf_woman"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "🧞",
    description: "genie",
    category: "People & Body",
    aliases: ["genie"],
    tags: []
  },
  {
    emoji: "🧞‍♂️",
    description: "man genie",
    category: "People & Body",
    aliases: ["genie_man"],
    tags: []
  },
  {
    emoji: "🧞‍♀️",
    description: "woman genie",
    category: "People & Body",
    aliases: ["genie_woman"],
    tags: []
  },
  {
    emoji: "🧟",
    description: "zombie",
    category: "People & Body",
    aliases: ["zombie"],
    tags: []
  },
  {
    emoji: "🧟‍♂️",
    description: "man zombie",
    category: "People & Body",
    aliases: ["zombie_man"],
    tags: []
  },
  {
    emoji: "🧟‍♀️",
    description: "woman zombie",
    category: "People & Body",
    aliases: ["zombie_woman"],
    tags: []
  },
  {
    emoji: "💆",
    description: "person getting massage",
    category: "People & Body",
    aliases: ["massage"],
    tags: ["spa"],
    skin_tones: !0
  },
  {
    emoji: "💆‍♂️",
    description: "man getting massage",
    category: "People & Body",
    aliases: ["massage_man"],
    tags: ["spa"],
    skin_tones: !0
  },
  {
    emoji: "💆‍♀️",
    description: "woman getting massage",
    category: "People & Body",
    aliases: ["massage_woman"],
    tags: ["spa"],
    skin_tones: !0
  },
  {
    emoji: "💇",
    description: "person getting haircut",
    category: "People & Body",
    aliases: ["haircut"],
    tags: ["beauty"],
    skin_tones: !0
  },
  {
    emoji: "💇‍♂️",
    description: "man getting haircut",
    category: "People & Body",
    aliases: ["haircut_man"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "💇‍♀️",
    description: "woman getting haircut",
    category: "People & Body",
    aliases: ["haircut_woman"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "🚶",
    description: "person walking",
    category: "People & Body",
    aliases: ["walking"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "🚶‍♂️",
    description: "man walking",
    category: "People & Body",
    aliases: ["walking_man"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "🚶‍♀️",
    description: "woman walking",
    category: "People & Body",
    aliases: ["walking_woman"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "🧍",
    description: "person standing",
    category: "People & Body",
    aliases: ["standing_person"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "🧍‍♂️",
    description: "man standing",
    category: "People & Body",
    aliases: ["standing_man"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "🧍‍♀️",
    description: "woman standing",
    category: "People & Body",
    aliases: ["standing_woman"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "🧎",
    description: "person kneeling",
    category: "People & Body",
    aliases: ["kneeling_person"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "🧎‍♂️",
    description: "man kneeling",
    category: "People & Body",
    aliases: ["kneeling_man"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "🧎‍♀️",
    description: "woman kneeling",
    category: "People & Body",
    aliases: ["kneeling_woman"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "🧑‍🦯",
    description: "person with white cane",
    category: "People & Body",
    aliases: ["person_with_probing_cane"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "👨‍🦯",
    description: "man with white cane",
    category: "People & Body",
    aliases: ["man_with_probing_cane"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "👩‍🦯",
    description: "woman with white cane",
    category: "People & Body",
    aliases: ["woman_with_probing_cane"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "🧑‍🦼",
    description: "person in motorized wheelchair",
    category: "People & Body",
    aliases: ["person_in_motorized_wheelchair"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "👨‍🦼",
    description: "man in motorized wheelchair",
    category: "People & Body",
    aliases: ["man_in_motorized_wheelchair"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "👩‍🦼",
    description: "woman in motorized wheelchair",
    category: "People & Body",
    aliases: ["woman_in_motorized_wheelchair"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "🧑‍🦽",
    description: "person in manual wheelchair",
    category: "People & Body",
    aliases: ["person_in_manual_wheelchair"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "👨‍🦽",
    description: "man in manual wheelchair",
    category: "People & Body",
    aliases: ["man_in_manual_wheelchair"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "👩‍🦽",
    description: "woman in manual wheelchair",
    category: "People & Body",
    aliases: ["woman_in_manual_wheelchair"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "🏃",
    description: "person running",
    category: "People & Body",
    aliases: ["runner", "running"],
    tags: ["exercise", "workout", "marathon"],
    skin_tones: !0
  },
  {
    emoji: "🏃‍♂️",
    description: "man running",
    category: "People & Body",
    aliases: ["running_man"],
    tags: ["exercise", "workout", "marathon"],
    skin_tones: !0
  },
  {
    emoji: "🏃‍♀️",
    description: "woman running",
    category: "People & Body",
    aliases: ["running_woman"],
    tags: ["exercise", "workout", "marathon"],
    skin_tones: !0
  },
  {
    emoji: "💃",
    description: "woman dancing",
    category: "People & Body",
    aliases: ["woman_dancing", "dancer"],
    tags: ["dress"],
    skin_tones: !0
  },
  {
    emoji: "🕺",
    description: "man dancing",
    category: "People & Body",
    aliases: ["man_dancing"],
    tags: ["dancer"],
    skin_tones: !0
  },
  {
    emoji: "🕴️",
    description: "person in suit levitating",
    category: "People & Body",
    aliases: ["business_suit_levitating"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "👯",
    description: "people with bunny ears",
    category: "People & Body",
    aliases: ["dancers"],
    tags: ["bunny"]
  },
  {
    emoji: "👯‍♂️",
    description: "men with bunny ears",
    category: "People & Body",
    aliases: ["dancing_men"],
    tags: ["bunny"]
  },
  {
    emoji: "👯‍♀️",
    description: "women with bunny ears",
    category: "People & Body",
    aliases: ["dancing_women"],
    tags: ["bunny"]
  },
  {
    emoji: "🧖",
    description: "person in steamy room",
    category: "People & Body",
    aliases: ["sauna_person"],
    tags: ["steamy"],
    skin_tones: !0
  },
  {
    emoji: "🧖‍♂️",
    description: "man in steamy room",
    category: "People & Body",
    aliases: ["sauna_man"],
    tags: ["steamy"],
    skin_tones: !0
  },
  {
    emoji: "🧖‍♀️",
    description: "woman in steamy room",
    category: "People & Body",
    aliases: ["sauna_woman"],
    tags: ["steamy"],
    skin_tones: !0
  },
  {
    emoji: "🧗",
    description: "person climbing",
    category: "People & Body",
    aliases: ["climbing"],
    tags: ["bouldering"],
    skin_tones: !0
  },
  {
    emoji: "🧗‍♂️",
    description: "man climbing",
    category: "People & Body",
    aliases: ["climbing_man"],
    tags: ["bouldering"],
    skin_tones: !0
  },
  {
    emoji: "🧗‍♀️",
    description: "woman climbing",
    category: "People & Body",
    aliases: ["climbing_woman"],
    tags: ["bouldering"],
    skin_tones: !0
  },
  {
    emoji: "🤺",
    description: "person fencing",
    category: "People & Body",
    aliases: ["person_fencing"],
    tags: []
  },
  {
    emoji: "🏇",
    description: "horse racing",
    category: "People & Body",
    aliases: ["horse_racing"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "⛷️",
    description: "skier",
    category: "People & Body",
    aliases: ["skier"],
    tags: []
  },
  {
    emoji: "🏂",
    description: "snowboarder",
    category: "People & Body",
    aliases: ["snowboarder"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "🏌️",
    description: "person golfing",
    category: "People & Body",
    aliases: ["golfing"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "🏌️‍♂️",
    description: "man golfing",
    category: "People & Body",
    aliases: ["golfing_man"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "🏌️‍♀️",
    description: "woman golfing",
    category: "People & Body",
    aliases: ["golfing_woman"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "🏄",
    description: "person surfing",
    category: "People & Body",
    aliases: ["surfer"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "🏄‍♂️",
    description: "man surfing",
    category: "People & Body",
    aliases: ["surfing_man"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "🏄‍♀️",
    description: "woman surfing",
    category: "People & Body",
    aliases: ["surfing_woman"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "🚣",
    description: "person rowing boat",
    category: "People & Body",
    aliases: ["rowboat"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "🚣‍♂️",
    description: "man rowing boat",
    category: "People & Body",
    aliases: ["rowing_man"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "🚣‍♀️",
    description: "woman rowing boat",
    category: "People & Body",
    aliases: ["rowing_woman"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "🏊",
    description: "person swimming",
    category: "People & Body",
    aliases: ["swimmer"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "🏊‍♂️",
    description: "man swimming",
    category: "People & Body",
    aliases: ["swimming_man"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "🏊‍♀️",
    description: "woman swimming",
    category: "People & Body",
    aliases: ["swimming_woman"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "⛹️",
    description: "person bouncing ball",
    category: "People & Body",
    aliases: ["bouncing_ball_person"],
    tags: ["basketball"],
    skin_tones: !0
  },
  {
    emoji: "⛹️‍♂️",
    description: "man bouncing ball",
    category: "People & Body",
    aliases: ["bouncing_ball_man", "basketball_man"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "⛹️‍♀️",
    description: "woman bouncing ball",
    category: "People & Body",
    aliases: ["bouncing_ball_woman", "basketball_woman"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "🏋️",
    description: "person lifting weights",
    category: "People & Body",
    aliases: ["weight_lifting"],
    tags: ["gym", "workout"],
    skin_tones: !0
  },
  {
    emoji: "🏋️‍♂️",
    description: "man lifting weights",
    category: "People & Body",
    aliases: ["weight_lifting_man"],
    tags: ["gym", "workout"],
    skin_tones: !0
  },
  {
    emoji: "🏋️‍♀️",
    description: "woman lifting weights",
    category: "People & Body",
    aliases: ["weight_lifting_woman"],
    tags: ["gym", "workout"],
    skin_tones: !0
  },
  {
    emoji: "🚴",
    description: "person biking",
    category: "People & Body",
    aliases: ["bicyclist"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "🚴‍♂️",
    description: "man biking",
    category: "People & Body",
    aliases: ["biking_man"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "🚴‍♀️",
    description: "woman biking",
    category: "People & Body",
    aliases: ["biking_woman"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "🚵",
    description: "person mountain biking",
    category: "People & Body",
    aliases: ["mountain_bicyclist"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "🚵‍♂️",
    description: "man mountain biking",
    category: "People & Body",
    aliases: ["mountain_biking_man"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "🚵‍♀️",
    description: "woman mountain biking",
    category: "People & Body",
    aliases: ["mountain_biking_woman"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "🤸",
    description: "person cartwheeling",
    category: "People & Body",
    aliases: ["cartwheeling"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "🤸‍♂️",
    description: "man cartwheeling",
    category: "People & Body",
    aliases: ["man_cartwheeling"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "🤸‍♀️",
    description: "woman cartwheeling",
    category: "People & Body",
    aliases: ["woman_cartwheeling"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "🤼",
    description: "people wrestling",
    category: "People & Body",
    aliases: ["wrestling"],
    tags: []
  },
  {
    emoji: "🤼‍♂️",
    description: "men wrestling",
    category: "People & Body",
    aliases: ["men_wrestling"],
    tags: []
  },
  {
    emoji: "🤼‍♀️",
    description: "women wrestling",
    category: "People & Body",
    aliases: ["women_wrestling"],
    tags: []
  },
  {
    emoji: "🤽",
    description: "person playing water polo",
    category: "People & Body",
    aliases: ["water_polo"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "🤽‍♂️",
    description: "man playing water polo",
    category: "People & Body",
    aliases: ["man_playing_water_polo"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "🤽‍♀️",
    description: "woman playing water polo",
    category: "People & Body",
    aliases: ["woman_playing_water_polo"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "🤾",
    description: "person playing handball",
    category: "People & Body",
    aliases: ["handball_person"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "🤾‍♂️",
    description: "man playing handball",
    category: "People & Body",
    aliases: ["man_playing_handball"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "🤾‍♀️",
    description: "woman playing handball",
    category: "People & Body",
    aliases: ["woman_playing_handball"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "🤹",
    description: "person juggling",
    category: "People & Body",
    aliases: ["juggling_person"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "🤹‍♂️",
    description: "man juggling",
    category: "People & Body",
    aliases: ["man_juggling"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "🤹‍♀️",
    description: "woman juggling",
    category: "People & Body",
    aliases: ["woman_juggling"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "🧘",
    description: "person in lotus position",
    category: "People & Body",
    aliases: ["lotus_position"],
    tags: ["meditation"],
    skin_tones: !0
  },
  {
    emoji: "🧘‍♂️",
    description: "man in lotus position",
    category: "People & Body",
    aliases: ["lotus_position_man"],
    tags: ["meditation"],
    skin_tones: !0
  },
  {
    emoji: "🧘‍♀️",
    description: "woman in lotus position",
    category: "People & Body",
    aliases: ["lotus_position_woman"],
    tags: ["meditation"],
    skin_tones: !0
  },
  {
    emoji: "🛀",
    description: "person taking bath",
    category: "People & Body",
    aliases: ["bath"],
    tags: ["shower"],
    skin_tones: !0
  },
  {
    emoji: "🛌",
    description: "person in bed",
    category: "People & Body",
    aliases: ["sleeping_bed"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "🧑‍🤝‍🧑",
    description: "people holding hands",
    category: "People & Body",
    aliases: ["people_holding_hands"],
    tags: ["couple", "date"],
    skin_tones: !0
  },
  {
    emoji: "👭",
    description: "women holding hands",
    category: "People & Body",
    aliases: ["two_women_holding_hands"],
    tags: ["couple", "date"],
    skin_tones: !0
  },
  {
    emoji: "👫",
    description: "woman and man holding hands",
    category: "People & Body",
    aliases: ["couple"],
    tags: ["date"],
    skin_tones: !0
  },
  {
    emoji: "👬",
    description: "men holding hands",
    category: "People & Body",
    aliases: ["two_men_holding_hands"],
    tags: ["couple", "date"],
    skin_tones: !0
  },
  {
    emoji: "💏",
    description: "kiss",
    category: "People & Body",
    aliases: ["couplekiss"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "👩‍❤️‍💋‍👨",
    description: "kiss: woman, man",
    category: "People & Body",
    aliases: ["couplekiss_man_woman"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "👨‍❤️‍💋‍👨",
    description: "kiss: man, man",
    category: "People & Body",
    aliases: ["couplekiss_man_man"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "👩‍❤️‍💋‍👩",
    description: "kiss: woman, woman",
    category: "People & Body",
    aliases: ["couplekiss_woman_woman"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "💑",
    description: "couple with heart",
    category: "People & Body",
    aliases: ["couple_with_heart"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "👩‍❤️‍👨",
    description: "couple with heart: woman, man",
    category: "People & Body",
    aliases: ["couple_with_heart_woman_man"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "👨‍❤️‍👨",
    description: "couple with heart: man, man",
    category: "People & Body",
    aliases: ["couple_with_heart_man_man"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "👩‍❤️‍👩",
    description: "couple with heart: woman, woman",
    category: "People & Body",
    aliases: ["couple_with_heart_woman_woman"],
    tags: [],
    skin_tones: !0
  },
  {
    emoji: "👪",
    description: "family",
    category: "People & Body",
    aliases: ["family"],
    tags: ["home", "parents", "child"]
  },
  {
    emoji: "👨‍👩‍👦",
    description: "family: man, woman, boy",
    category: "People & Body",
    aliases: ["family_man_woman_boy"],
    tags: []
  },
  {
    emoji: "👨‍👩‍👧",
    description: "family: man, woman, girl",
    category: "People & Body",
    aliases: ["family_man_woman_girl"],
    tags: []
  },
  {
    emoji: "👨‍👩‍👧‍👦",
    description: "family: man, woman, girl, boy",
    category: "People & Body",
    aliases: ["family_man_woman_girl_boy"],
    tags: []
  },
  {
    emoji: "👨‍👩‍👦‍👦",
    description: "family: man, woman, boy, boy",
    category: "People & Body",
    aliases: ["family_man_woman_boy_boy"],
    tags: []
  },
  {
    emoji: "👨‍👩‍👧‍👧",
    description: "family: man, woman, girl, girl",
    category: "People & Body",
    aliases: ["family_man_woman_girl_girl"],
    tags: []
  },
  {
    emoji: "👨‍👨‍👦",
    description: "family: man, man, boy",
    category: "People & Body",
    aliases: ["family_man_man_boy"],
    tags: []
  },
  {
    emoji: "👨‍👨‍👧",
    description: "family: man, man, girl",
    category: "People & Body",
    aliases: ["family_man_man_girl"],
    tags: []
  },
  {
    emoji: "👨‍👨‍👧‍👦",
    description: "family: man, man, girl, boy",
    category: "People & Body",
    aliases: ["family_man_man_girl_boy"],
    tags: []
  },
  {
    emoji: "👨‍👨‍👦‍👦",
    description: "family: man, man, boy, boy",
    category: "People & Body",
    aliases: ["family_man_man_boy_boy"],
    tags: []
  },
  {
    emoji: "👨‍👨‍👧‍👧",
    description: "family: man, man, girl, girl",
    category: "People & Body",
    aliases: ["family_man_man_girl_girl"],
    tags: []
  },
  {
    emoji: "👩‍👩‍👦",
    description: "family: woman, woman, boy",
    category: "People & Body",
    aliases: ["family_woman_woman_boy"],
    tags: []
  },
  {
    emoji: "👩‍👩‍👧",
    description: "family: woman, woman, girl",
    category: "People & Body",
    aliases: ["family_woman_woman_girl"],
    tags: []
  },
  {
    emoji: "👩‍👩‍👧‍👦",
    description: "family: woman, woman, girl, boy",
    category: "People & Body",
    aliases: ["family_woman_woman_girl_boy"],
    tags: []
  },
  {
    emoji: "👩‍👩‍👦‍👦",
    description: "family: woman, woman, boy, boy",
    category: "People & Body",
    aliases: ["family_woman_woman_boy_boy"],
    tags: []
  },
  {
    emoji: "👩‍👩‍👧‍👧",
    description: "family: woman, woman, girl, girl",
    category: "People & Body",
    aliases: ["family_woman_woman_girl_girl"],
    tags: []
  },
  {
    emoji: "👨‍👦",
    description: "family: man, boy",
    category: "People & Body",
    aliases: ["family_man_boy"],
    tags: []
  },
  {
    emoji: "👨‍👦‍👦",
    description: "family: man, boy, boy",
    category: "People & Body",
    aliases: ["family_man_boy_boy"],
    tags: []
  },
  {
    emoji: "👨‍👧",
    description: "family: man, girl",
    category: "People & Body",
    aliases: ["family_man_girl"],
    tags: []
  },
  {
    emoji: "👨‍👧‍👦",
    description: "family: man, girl, boy",
    category: "People & Body",
    aliases: ["family_man_girl_boy"],
    tags: []
  },
  {
    emoji: "👨‍👧‍👧",
    description: "family: man, girl, girl",
    category: "People & Body",
    aliases: ["family_man_girl_girl"],
    tags: []
  },
  {
    emoji: "👩‍👦",
    description: "family: woman, boy",
    category: "People & Body",
    aliases: ["family_woman_boy"],
    tags: []
  },
  {
    emoji: "👩‍👦‍👦",
    description: "family: woman, boy, boy",
    category: "People & Body",
    aliases: ["family_woman_boy_boy"],
    tags: []
  },
  {
    emoji: "👩‍👧",
    description: "family: woman, girl",
    category: "People & Body",
    aliases: ["family_woman_girl"],
    tags: []
  },
  {
    emoji: "👩‍👧‍👦",
    description: "family: woman, girl, boy",
    category: "People & Body",
    aliases: ["family_woman_girl_boy"],
    tags: []
  },
  {
    emoji: "👩‍👧‍👧",
    description: "family: woman, girl, girl",
    category: "People & Body",
    aliases: ["family_woman_girl_girl"],
    tags: []
  },
  {
    emoji: "🗣️",
    description: "speaking head",
    category: "People & Body",
    aliases: ["speaking_head"],
    tags: []
  },
  {
    emoji: "👤",
    description: "bust in silhouette",
    category: "People & Body",
    aliases: ["bust_in_silhouette"],
    tags: ["user"]
  },
  {
    emoji: "👥",
    description: "busts in silhouette",
    category: "People & Body",
    aliases: ["busts_in_silhouette"],
    tags: ["users", "group", "team"]
  },
  {
    emoji: "🫂",
    description: "people hugging",
    category: "People & Body",
    aliases: ["people_hugging"],
    tags: []
  },
  {
    emoji: "👣",
    description: "footprints",
    category: "People & Body",
    aliases: ["footprints"],
    tags: ["feet", "tracks"]
  },
  {
    emoji: "🐵",
    description: "monkey face",
    category: "Animals & Nature",
    aliases: ["monkey_face"],
    tags: []
  },
  {
    emoji: "🐒",
    description: "monkey",
    category: "Animals & Nature",
    aliases: ["monkey"],
    tags: []
  },
  {
    emoji: "🦍",
    description: "gorilla",
    category: "Animals & Nature",
    aliases: ["gorilla"],
    tags: []
  },
  {
    emoji: "🦧",
    description: "orangutan",
    category: "Animals & Nature",
    aliases: ["orangutan"],
    tags: []
  },
  {
    emoji: "🐶",
    description: "dog face",
    category: "Animals & Nature",
    aliases: ["dog"],
    tags: ["pet"]
  },
  {
    emoji: "🐕",
    description: "dog",
    category: "Animals & Nature",
    aliases: ["dog2"],
    tags: []
  },
  {
    emoji: "🦮",
    description: "guide dog",
    category: "Animals & Nature",
    aliases: ["guide_dog"],
    tags: []
  },
  {
    emoji: "🐕‍🦺",
    description: "service dog",
    category: "Animals & Nature",
    aliases: ["service_dog"],
    tags: []
  },
  {
    emoji: "🐩",
    description: "poodle",
    category: "Animals & Nature",
    aliases: ["poodle"],
    tags: ["dog"]
  },
  {
    emoji: "🐺",
    description: "wolf",
    category: "Animals & Nature",
    aliases: ["wolf"],
    tags: []
  },
  {
    emoji: "🦊",
    description: "fox",
    category: "Animals & Nature",
    aliases: ["fox_face"],
    tags: []
  },
  {
    emoji: "🦝",
    description: "raccoon",
    category: "Animals & Nature",
    aliases: ["raccoon"],
    tags: []
  },
  {
    emoji: "🐱",
    description: "cat face",
    category: "Animals & Nature",
    aliases: ["cat"],
    tags: ["pet"]
  },
  {
    emoji: "🐈",
    description: "cat",
    category: "Animals & Nature",
    aliases: ["cat2"],
    tags: []
  },
  {
    emoji: "🐈‍⬛",
    description: "black cat",
    category: "Animals & Nature",
    aliases: ["black_cat"],
    tags: []
  },
  {
    emoji: "🦁",
    description: "lion",
    category: "Animals & Nature",
    aliases: ["lion"],
    tags: []
  },
  {
    emoji: "🐯",
    description: "tiger face",
    category: "Animals & Nature",
    aliases: ["tiger"],
    tags: []
  },
  {
    emoji: "🐅",
    description: "tiger",
    category: "Animals & Nature",
    aliases: ["tiger2"],
    tags: []
  },
  {
    emoji: "🐆",
    description: "leopard",
    category: "Animals & Nature",
    aliases: ["leopard"],
    tags: []
  },
  {
    emoji: "🐴",
    description: "horse face",
    category: "Animals & Nature",
    aliases: ["horse"],
    tags: []
  },
  {
    emoji: "🐎",
    description: "horse",
    category: "Animals & Nature",
    aliases: ["racehorse"],
    tags: ["speed"]
  },
  {
    emoji: "🦄",
    description: "unicorn",
    category: "Animals & Nature",
    aliases: ["unicorn"],
    tags: []
  },
  {
    emoji: "🦓",
    description: "zebra",
    category: "Animals & Nature",
    aliases: ["zebra"],
    tags: []
  },
  {
    emoji: "🦌",
    description: "deer",
    category: "Animals & Nature",
    aliases: ["deer"],
    tags: []
  },
  {
    emoji: "🦬",
    description: "bison",
    category: "Animals & Nature",
    aliases: ["bison"],
    tags: []
  },
  {
    emoji: "🐮",
    description: "cow face",
    category: "Animals & Nature",
    aliases: ["cow"],
    tags: []
  },
  {
    emoji: "🐂",
    description: "ox",
    category: "Animals & Nature",
    aliases: ["ox"],
    tags: []
  },
  {
    emoji: "🐃",
    description: "water buffalo",
    category: "Animals & Nature",
    aliases: ["water_buffalo"],
    tags: []
  },
  {
    emoji: "🐄",
    description: "cow",
    category: "Animals & Nature",
    aliases: ["cow2"],
    tags: []
  },
  {
    emoji: "🐷",
    description: "pig face",
    category: "Animals & Nature",
    aliases: ["pig"],
    tags: []
  },
  {
    emoji: "🐖",
    description: "pig",
    category: "Animals & Nature",
    aliases: ["pig2"],
    tags: []
  },
  {
    emoji: "🐗",
    description: "boar",
    category: "Animals & Nature",
    aliases: ["boar"],
    tags: []
  },
  {
    emoji: "🐽",
    description: "pig nose",
    category: "Animals & Nature",
    aliases: ["pig_nose"],
    tags: []
  },
  {
    emoji: "🐏",
    description: "ram",
    category: "Animals & Nature",
    aliases: ["ram"],
    tags: []
  },
  {
    emoji: "🐑",
    description: "ewe",
    category: "Animals & Nature",
    aliases: ["sheep"],
    tags: []
  },
  {
    emoji: "🐐",
    description: "goat",
    category: "Animals & Nature",
    aliases: ["goat"],
    tags: []
  },
  {
    emoji: "🐪",
    description: "camel",
    category: "Animals & Nature",
    aliases: ["dromedary_camel"],
    tags: ["desert"]
  },
  {
    emoji: "🐫",
    description: "two-hump camel",
    category: "Animals & Nature",
    aliases: ["camel"],
    tags: []
  },
  {
    emoji: "🦙",
    description: "llama",
    category: "Animals & Nature",
    aliases: ["llama"],
    tags: []
  },
  {
    emoji: "🦒",
    description: "giraffe",
    category: "Animals & Nature",
    aliases: ["giraffe"],
    tags: []
  },
  {
    emoji: "🐘",
    description: "elephant",
    category: "Animals & Nature",
    aliases: ["elephant"],
    tags: []
  },
  {
    emoji: "🦣",
    description: "mammoth",
    category: "Animals & Nature",
    aliases: ["mammoth"],
    tags: []
  },
  {
    emoji: "🦏",
    description: "rhinoceros",
    category: "Animals & Nature",
    aliases: ["rhinoceros"],
    tags: []
  },
  {
    emoji: "🦛",
    description: "hippopotamus",
    category: "Animals & Nature",
    aliases: ["hippopotamus"],
    tags: []
  },
  {
    emoji: "🐭",
    description: "mouse face",
    category: "Animals & Nature",
    aliases: ["mouse"],
    tags: []
  },
  {
    emoji: "🐁",
    description: "mouse",
    category: "Animals & Nature",
    aliases: ["mouse2"],
    tags: []
  },
  {
    emoji: "🐀",
    description: "rat",
    category: "Animals & Nature",
    aliases: ["rat"],
    tags: []
  },
  {
    emoji: "🐹",
    description: "hamster",
    category: "Animals & Nature",
    aliases: ["hamster"],
    tags: ["pet"]
  },
  {
    emoji: "🐰",
    description: "rabbit face",
    category: "Animals & Nature",
    aliases: ["rabbit"],
    tags: ["bunny"]
  },
  {
    emoji: "🐇",
    description: "rabbit",
    category: "Animals & Nature",
    aliases: ["rabbit2"],
    tags: []
  },
  {
    emoji: "🐿️",
    description: "chipmunk",
    category: "Animals & Nature",
    aliases: ["chipmunk"],
    tags: []
  },
  {
    emoji: "🦫",
    description: "beaver",
    category: "Animals & Nature",
    aliases: ["beaver"],
    tags: []
  },
  {
    emoji: "🦔",
    description: "hedgehog",
    category: "Animals & Nature",
    aliases: ["hedgehog"],
    tags: []
  },
  {
    emoji: "🦇",
    description: "bat",
    category: "Animals & Nature",
    aliases: ["bat"],
    tags: []
  },
  {
    emoji: "🐻",
    description: "bear",
    category: "Animals & Nature",
    aliases: ["bear"],
    tags: []
  },
  {
    emoji: "🐻‍❄️",
    description: "polar bear",
    category: "Animals & Nature",
    aliases: ["polar_bear"],
    tags: []
  },
  {
    emoji: "🐨",
    description: "koala",
    category: "Animals & Nature",
    aliases: ["koala"],
    tags: []
  },
  {
    emoji: "🐼",
    description: "panda",
    category: "Animals & Nature",
    aliases: ["panda_face"],
    tags: []
  },
  {
    emoji: "🦥",
    description: "sloth",
    category: "Animals & Nature",
    aliases: ["sloth"],
    tags: []
  },
  {
    emoji: "🦦",
    description: "otter",
    category: "Animals & Nature",
    aliases: ["otter"],
    tags: []
  },
  {
    emoji: "🦨",
    description: "skunk",
    category: "Animals & Nature",
    aliases: ["skunk"],
    tags: []
  },
  {
    emoji: "🦘",
    description: "kangaroo",
    category: "Animals & Nature",
    aliases: ["kangaroo"],
    tags: []
  },
  {
    emoji: "🦡",
    description: "badger",
    category: "Animals & Nature",
    aliases: ["badger"],
    tags: []
  },
  {
    emoji: "🐾",
    description: "paw prints",
    category: "Animals & Nature",
    aliases: ["feet", "paw_prints"],
    tags: []
  },
  {
    emoji: "🦃",
    description: "turkey",
    category: "Animals & Nature",
    aliases: ["turkey"],
    tags: ["thanksgiving"]
  },
  {
    emoji: "🐔",
    description: "chicken",
    category: "Animals & Nature",
    aliases: ["chicken"],
    tags: []
  },
  {
    emoji: "🐓",
    description: "rooster",
    category: "Animals & Nature",
    aliases: ["rooster"],
    tags: []
  },
  {
    emoji: "🐣",
    description: "hatching chick",
    category: "Animals & Nature",
    aliases: ["hatching_chick"],
    tags: []
  },
  {
    emoji: "🐤",
    description: "baby chick",
    category: "Animals & Nature",
    aliases: ["baby_chick"],
    tags: []
  },
  {
    emoji: "🐥",
    description: "front-facing baby chick",
    category: "Animals & Nature",
    aliases: ["hatched_chick"],
    tags: []
  },
  {
    emoji: "🐦",
    description: "bird",
    category: "Animals & Nature",
    aliases: ["bird"],
    tags: []
  },
  {
    emoji: "🐧",
    description: "penguin",
    category: "Animals & Nature",
    aliases: ["penguin"],
    tags: []
  },
  {
    emoji: "🕊️",
    description: "dove",
    category: "Animals & Nature",
    aliases: ["dove"],
    tags: ["peace"]
  },
  {
    emoji: "🦅",
    description: "eagle",
    category: "Animals & Nature",
    aliases: ["eagle"],
    tags: []
  },
  {
    emoji: "🦆",
    description: "duck",
    category: "Animals & Nature",
    aliases: ["duck"],
    tags: []
  },
  {
    emoji: "🦢",
    description: "swan",
    category: "Animals & Nature",
    aliases: ["swan"],
    tags: []
  },
  {
    emoji: "🦉",
    description: "owl",
    category: "Animals & Nature",
    aliases: ["owl"],
    tags: []
  },
  {
    emoji: "🦤",
    description: "dodo",
    category: "Animals & Nature",
    aliases: ["dodo"],
    tags: []
  },
  {
    emoji: "🪶",
    description: "feather",
    category: "Animals & Nature",
    aliases: ["feather"],
    tags: []
  },
  {
    emoji: "🦩",
    description: "flamingo",
    category: "Animals & Nature",
    aliases: ["flamingo"],
    tags: []
  },
  {
    emoji: "🦚",
    description: "peacock",
    category: "Animals & Nature",
    aliases: ["peacock"],
    tags: []
  },
  {
    emoji: "🦜",
    description: "parrot",
    category: "Animals & Nature",
    aliases: ["parrot"],
    tags: []
  },
  {
    emoji: "🐸",
    description: "frog",
    category: "Animals & Nature",
    aliases: ["frog"],
    tags: []
  },
  {
    emoji: "🐊",
    description: "crocodile",
    category: "Animals & Nature",
    aliases: ["crocodile"],
    tags: []
  },
  {
    emoji: "🐢",
    description: "turtle",
    category: "Animals & Nature",
    aliases: ["turtle"],
    tags: ["slow"]
  },
  {
    emoji: "🦎",
    description: "lizard",
    category: "Animals & Nature",
    aliases: ["lizard"],
    tags: []
  },
  {
    emoji: "🐍",
    description: "snake",
    category: "Animals & Nature",
    aliases: ["snake"],
    tags: []
  },
  {
    emoji: "🐲",
    description: "dragon face",
    category: "Animals & Nature",
    aliases: ["dragon_face"],
    tags: []
  },
  {
    emoji: "🐉",
    description: "dragon",
    category: "Animals & Nature",
    aliases: ["dragon"],
    tags: []
  },
  {
    emoji: "🦕",
    description: "sauropod",
    category: "Animals & Nature",
    aliases: ["sauropod"],
    tags: ["dinosaur"]
  },
  {
    emoji: "🦖",
    description: "T-Rex",
    category: "Animals & Nature",
    aliases: ["t-rex"],
    tags: ["dinosaur"]
  },
  {
    emoji: "🐳",
    description: "spouting whale",
    category: "Animals & Nature",
    aliases: ["whale"],
    tags: ["sea"]
  },
  {
    emoji: "🐋",
    description: "whale",
    category: "Animals & Nature",
    aliases: ["whale2"],
    tags: []
  },
  {
    emoji: "🐬",
    description: "dolphin",
    category: "Animals & Nature",
    aliases: ["dolphin", "flipper"],
    tags: []
  },
  {
    emoji: "🦭",
    description: "seal",
    category: "Animals & Nature",
    aliases: ["seal"],
    tags: []
  },
  {
    emoji: "🐟",
    description: "fish",
    category: "Animals & Nature",
    aliases: ["fish"],
    tags: []
  },
  {
    emoji: "🐠",
    description: "tropical fish",
    category: "Animals & Nature",
    aliases: ["tropical_fish"],
    tags: []
  },
  {
    emoji: "🐡",
    description: "blowfish",
    category: "Animals & Nature",
    aliases: ["blowfish"],
    tags: []
  },
  {
    emoji: "🦈",
    description: "shark",
    category: "Animals & Nature",
    aliases: ["shark"],
    tags: []
  },
  {
    emoji: "🐙",
    description: "octopus",
    category: "Animals & Nature",
    aliases: ["octopus"],
    tags: []
  },
  {
    emoji: "🐚",
    description: "spiral shell",
    category: "Animals & Nature",
    aliases: ["shell"],
    tags: ["sea", "beach"]
  },
  {
    emoji: "🐌",
    description: "snail",
    category: "Animals & Nature",
    aliases: ["snail"],
    tags: ["slow"]
  },
  {
    emoji: "🦋",
    description: "butterfly",
    category: "Animals & Nature",
    aliases: ["butterfly"],
    tags: []
  },
  {
    emoji: "🐛",
    description: "bug",
    category: "Animals & Nature",
    aliases: ["bug"],
    tags: []
  },
  {
    emoji: "🐜",
    description: "ant",
    category: "Animals & Nature",
    aliases: ["ant"],
    tags: []
  },
  {
    emoji: "🐝",
    description: "honeybee",
    category: "Animals & Nature",
    aliases: ["bee", "honeybee"],
    tags: []
  },
  {
    emoji: "🪲",
    description: "beetle",
    category: "Animals & Nature",
    aliases: ["beetle"],
    tags: []
  },
  {
    emoji: "🐞",
    description: "lady beetle",
    category: "Animals & Nature",
    aliases: ["lady_beetle"],
    tags: ["bug"]
  },
  {
    emoji: "🦗",
    description: "cricket",
    category: "Animals & Nature",
    aliases: ["cricket"],
    tags: []
  },
  {
    emoji: "🪳",
    description: "cockroach",
    category: "Animals & Nature",
    aliases: ["cockroach"],
    tags: []
  },
  {
    emoji: "🕷️",
    description: "spider",
    category: "Animals & Nature",
    aliases: ["spider"],
    tags: []
  },
  {
    emoji: "🕸️",
    description: "spider web",
    category: "Animals & Nature",
    aliases: ["spider_web"],
    tags: []
  },
  {
    emoji: "🦂",
    description: "scorpion",
    category: "Animals & Nature",
    aliases: ["scorpion"],
    tags: []
  },
  {
    emoji: "🦟",
    description: "mosquito",
    category: "Animals & Nature",
    aliases: ["mosquito"],
    tags: []
  },
  {
    emoji: "🪰",
    description: "fly",
    category: "Animals & Nature",
    aliases: ["fly"],
    tags: []
  },
  {
    emoji: "🪱",
    description: "worm",
    category: "Animals & Nature",
    aliases: ["worm"],
    tags: []
  },
  {
    emoji: "🦠",
    description: "microbe",
    category: "Animals & Nature",
    aliases: ["microbe"],
    tags: ["germ"]
  },
  {
    emoji: "💐",
    description: "bouquet",
    category: "Animals & Nature",
    aliases: ["bouquet"],
    tags: ["flowers"]
  },
  {
    emoji: "🌸",
    description: "cherry blossom",
    category: "Animals & Nature",
    aliases: ["cherry_blossom"],
    tags: ["flower", "spring"]
  },
  {
    emoji: "💮",
    description: "white flower",
    category: "Animals & Nature",
    aliases: ["white_flower"],
    tags: []
  },
  {
    emoji: "🏵️",
    description: "rosette",
    category: "Animals & Nature",
    aliases: ["rosette"],
    tags: []
  },
  {
    emoji: "🌹",
    description: "rose",
    category: "Animals & Nature",
    aliases: ["rose"],
    tags: ["flower"]
  },
  {
    emoji: "🥀",
    description: "wilted flower",
    category: "Animals & Nature",
    aliases: ["wilted_flower"],
    tags: []
  },
  {
    emoji: "🌺",
    description: "hibiscus",
    category: "Animals & Nature",
    aliases: ["hibiscus"],
    tags: []
  },
  {
    emoji: "🌻",
    description: "sunflower",
    category: "Animals & Nature",
    aliases: ["sunflower"],
    tags: []
  },
  {
    emoji: "🌼",
    description: "blossom",
    category: "Animals & Nature",
    aliases: ["blossom"],
    tags: []
  },
  {
    emoji: "🌷",
    description: "tulip",
    category: "Animals & Nature",
    aliases: ["tulip"],
    tags: ["flower"]
  },
  {
    emoji: "🌱",
    description: "seedling",
    category: "Animals & Nature",
    aliases: ["seedling"],
    tags: ["plant"]
  },
  {
    emoji: "🪴",
    description: "potted plant",
    category: "Animals & Nature",
    aliases: ["potted_plant"],
    tags: []
  },
  {
    emoji: "🌲",
    description: "evergreen tree",
    category: "Animals & Nature",
    aliases: ["evergreen_tree"],
    tags: ["wood"]
  },
  {
    emoji: "🌳",
    description: "deciduous tree",
    category: "Animals & Nature",
    aliases: ["deciduous_tree"],
    tags: ["wood"]
  },
  {
    emoji: "🌴",
    description: "palm tree",
    category: "Animals & Nature",
    aliases: ["palm_tree"],
    tags: []
  },
  {
    emoji: "🌵",
    description: "cactus",
    category: "Animals & Nature",
    aliases: ["cactus"],
    tags: []
  },
  {
    emoji: "🌾",
    description: "sheaf of rice",
    category: "Animals & Nature",
    aliases: ["ear_of_rice"],
    tags: []
  },
  {
    emoji: "🌿",
    description: "herb",
    category: "Animals & Nature",
    aliases: ["herb"],
    tags: []
  },
  {
    emoji: "☘️",
    description: "shamrock",
    category: "Animals & Nature",
    aliases: ["shamrock"],
    tags: []
  },
  {
    emoji: "🍀",
    description: "four leaf clover",
    category: "Animals & Nature",
    aliases: ["four_leaf_clover"],
    tags: ["luck"]
  },
  {
    emoji: "🍁",
    description: "maple leaf",
    category: "Animals & Nature",
    aliases: ["maple_leaf"],
    tags: ["canada"]
  },
  {
    emoji: "🍂",
    description: "fallen leaf",
    category: "Animals & Nature",
    aliases: ["fallen_leaf"],
    tags: ["autumn"]
  },
  {
    emoji: "🍃",
    description: "leaf fluttering in wind",
    category: "Animals & Nature",
    aliases: ["leaves"],
    tags: ["leaf"]
  },
  {
    emoji: "🍇",
    description: "grapes",
    category: "Food & Drink",
    aliases: ["grapes"],
    tags: []
  },
  {
    emoji: "🍈",
    description: "melon",
    category: "Food & Drink",
    aliases: ["melon"],
    tags: []
  },
  {
    emoji: "🍉",
    description: "watermelon",
    category: "Food & Drink",
    aliases: ["watermelon"],
    tags: []
  },
  {
    emoji: "🍊",
    description: "tangerine",
    category: "Food & Drink",
    aliases: ["tangerine", "orange", "mandarin"],
    tags: []
  },
  {
    emoji: "🍋",
    description: "lemon",
    category: "Food & Drink",
    aliases: ["lemon"],
    tags: []
  },
  {
    emoji: "🍌",
    description: "banana",
    category: "Food & Drink",
    aliases: ["banana"],
    tags: ["fruit"]
  },
  {
    emoji: "🍍",
    description: "pineapple",
    category: "Food & Drink",
    aliases: ["pineapple"],
    tags: []
  },
  {
    emoji: "🥭",
    description: "mango",
    category: "Food & Drink",
    aliases: ["mango"],
    tags: []
  },
  {
    emoji: "🍎",
    description: "red apple",
    category: "Food & Drink",
    aliases: ["apple"],
    tags: []
  },
  {
    emoji: "🍏",
    description: "green apple",
    category: "Food & Drink",
    aliases: ["green_apple"],
    tags: ["fruit"]
  },
  {
    emoji: "🍐",
    description: "pear",
    category: "Food & Drink",
    aliases: ["pear"],
    tags: []
  },
  {
    emoji: "🍑",
    description: "peach",
    category: "Food & Drink",
    aliases: ["peach"],
    tags: []
  },
  {
    emoji: "🍒",
    description: "cherries",
    category: "Food & Drink",
    aliases: ["cherries"],
    tags: ["fruit"]
  },
  {
    emoji: "🍓",
    description: "strawberry",
    category: "Food & Drink",
    aliases: ["strawberry"],
    tags: ["fruit"]
  },
  {
    emoji: "🫐",
    description: "blueberries",
    category: "Food & Drink",
    aliases: ["blueberries"],
    tags: []
  },
  {
    emoji: "🥝",
    description: "kiwi fruit",
    category: "Food & Drink",
    aliases: ["kiwi_fruit"],
    tags: []
  },
  {
    emoji: "🍅",
    description: "tomato",
    category: "Food & Drink",
    aliases: ["tomato"],
    tags: []
  },
  {
    emoji: "🫒",
    description: "olive",
    category: "Food & Drink",
    aliases: ["olive"],
    tags: []
  },
  {
    emoji: "🥥",
    description: "coconut",
    category: "Food & Drink",
    aliases: ["coconut"],
    tags: []
  },
  {
    emoji: "🥑",
    description: "avocado",
    category: "Food & Drink",
    aliases: ["avocado"],
    tags: []
  },
  {
    emoji: "🍆",
    description: "eggplant",
    category: "Food & Drink",
    aliases: ["eggplant"],
    tags: ["aubergine"]
  },
  {
    emoji: "🥔",
    description: "potato",
    category: "Food & Drink",
    aliases: ["potato"],
    tags: []
  },
  {
    emoji: "🥕",
    description: "carrot",
    category: "Food & Drink",
    aliases: ["carrot"],
    tags: []
  },
  {
    emoji: "🌽",
    description: "ear of corn",
    category: "Food & Drink",
    aliases: ["corn"],
    tags: []
  },
  {
    emoji: "🌶️",
    description: "hot pepper",
    category: "Food & Drink",
    aliases: ["hot_pepper"],
    tags: ["spicy"]
  },
  {
    emoji: "🫑",
    description: "bell pepper",
    category: "Food & Drink",
    aliases: ["bell_pepper"],
    tags: []
  },
  {
    emoji: "🥒",
    description: "cucumber",
    category: "Food & Drink",
    aliases: ["cucumber"],
    tags: []
  },
  {
    emoji: "🥬",
    description: "leafy green",
    category: "Food & Drink",
    aliases: ["leafy_green"],
    tags: []
  },
  {
    emoji: "🥦",
    description: "broccoli",
    category: "Food & Drink",
    aliases: ["broccoli"],
    tags: []
  },
  {
    emoji: "🧄",
    description: "garlic",
    category: "Food & Drink",
    aliases: ["garlic"],
    tags: []
  },
  {
    emoji: "🧅",
    description: "onion",
    category: "Food & Drink",
    aliases: ["onion"],
    tags: []
  },
  {
    emoji: "🍄",
    description: "mushroom",
    category: "Food & Drink",
    aliases: ["mushroom"],
    tags: []
  },
  {
    emoji: "🥜",
    description: "peanuts",
    category: "Food & Drink",
    aliases: ["peanuts"],
    tags: []
  },
  {
    emoji: "🌰",
    description: "chestnut",
    category: "Food & Drink",
    aliases: ["chestnut"],
    tags: []
  },
  {
    emoji: "🍞",
    description: "bread",
    category: "Food & Drink",
    aliases: ["bread"],
    tags: ["toast"]
  },
  {
    emoji: "🥐",
    description: "croissant",
    category: "Food & Drink",
    aliases: ["croissant"],
    tags: []
  },
  {
    emoji: "🥖",
    description: "baguette bread",
    category: "Food & Drink",
    aliases: ["baguette_bread"],
    tags: []
  },
  {
    emoji: "🫓",
    description: "flatbread",
    category: "Food & Drink",
    aliases: ["flatbread"],
    tags: []
  },
  {
    emoji: "🥨",
    description: "pretzel",
    category: "Food & Drink",
    aliases: ["pretzel"],
    tags: []
  },
  {
    emoji: "🥯",
    description: "bagel",
    category: "Food & Drink",
    aliases: ["bagel"],
    tags: []
  },
  {
    emoji: "🥞",
    description: "pancakes",
    category: "Food & Drink",
    aliases: ["pancakes"],
    tags: []
  },
  {
    emoji: "🧇",
    description: "waffle",
    category: "Food & Drink",
    aliases: ["waffle"],
    tags: []
  },
  {
    emoji: "🧀",
    description: "cheese wedge",
    category: "Food & Drink",
    aliases: ["cheese"],
    tags: []
  },
  {
    emoji: "🍖",
    description: "meat on bone",
    category: "Food & Drink",
    aliases: ["meat_on_bone"],
    tags: []
  },
  {
    emoji: "🍗",
    description: "poultry leg",
    category: "Food & Drink",
    aliases: ["poultry_leg"],
    tags: ["meat", "chicken"]
  },
  {
    emoji: "🥩",
    description: "cut of meat",
    category: "Food & Drink",
    aliases: ["cut_of_meat"],
    tags: []
  },
  {
    emoji: "🥓",
    description: "bacon",
    category: "Food & Drink",
    aliases: ["bacon"],
    tags: []
  },
  {
    emoji: "🍔",
    description: "hamburger",
    category: "Food & Drink",
    aliases: ["hamburger"],
    tags: ["burger"]
  },
  {
    emoji: "🍟",
    description: "french fries",
    category: "Food & Drink",
    aliases: ["fries"],
    tags: []
  },
  {
    emoji: "🍕",
    description: "pizza",
    category: "Food & Drink",
    aliases: ["pizza"],
    tags: []
  },
  {
    emoji: "🌭",
    description: "hot dog",
    category: "Food & Drink",
    aliases: ["hotdog"],
    tags: []
  },
  {
    emoji: "🥪",
    description: "sandwich",
    category: "Food & Drink",
    aliases: ["sandwich"],
    tags: []
  },
  {
    emoji: "🌮",
    description: "taco",
    category: "Food & Drink",
    aliases: ["taco"],
    tags: []
  },
  {
    emoji: "🌯",
    description: "burrito",
    category: "Food & Drink",
    aliases: ["burrito"],
    tags: []
  },
  {
    emoji: "🫔",
    description: "tamale",
    category: "Food & Drink",
    aliases: ["tamale"],
    tags: []
  },
  {
    emoji: "🥙",
    description: "stuffed flatbread",
    category: "Food & Drink",
    aliases: ["stuffed_flatbread"],
    tags: []
  },
  {
    emoji: "🧆",
    description: "falafel",
    category: "Food & Drink",
    aliases: ["falafel"],
    tags: []
  },
  {
    emoji: "🥚",
    description: "egg",
    category: "Food & Drink",
    aliases: ["egg"],
    tags: []
  },
  {
    emoji: "🍳",
    description: "cooking",
    category: "Food & Drink",
    aliases: ["fried_egg"],
    tags: ["breakfast"]
  },
  {
    emoji: "🥘",
    description: "shallow pan of food",
    category: "Food & Drink",
    aliases: ["shallow_pan_of_food"],
    tags: ["paella", "curry"]
  },
  {
    emoji: "🍲",
    description: "pot of food",
    category: "Food & Drink",
    aliases: ["stew"],
    tags: []
  },
  {
    emoji: "🫕",
    description: "fondue",
    category: "Food & Drink",
    aliases: ["fondue"],
    tags: []
  },
  {
    emoji: "🥣",
    description: "bowl with spoon",
    category: "Food & Drink",
    aliases: ["bowl_with_spoon"],
    tags: []
  },
  {
    emoji: "🥗",
    description: "green salad",
    category: "Food & Drink",
    aliases: ["green_salad"],
    tags: []
  },
  {
    emoji: "🍿",
    description: "popcorn",
    category: "Food & Drink",
    aliases: ["popcorn"],
    tags: []
  },
  {
    emoji: "🧈",
    description: "butter",
    category: "Food & Drink",
    aliases: ["butter"],
    tags: []
  },
  {
    emoji: "🧂",
    description: "salt",
    category: "Food & Drink",
    aliases: ["salt"],
    tags: []
  },
  {
    emoji: "🥫",
    description: "canned food",
    category: "Food & Drink",
    aliases: ["canned_food"],
    tags: []
  },
  {
    emoji: "🍱",
    description: "bento box",
    category: "Food & Drink",
    aliases: ["bento"],
    tags: []
  },
  {
    emoji: "🍘",
    description: "rice cracker",
    category: "Food & Drink",
    aliases: ["rice_cracker"],
    tags: []
  },
  {
    emoji: "🍙",
    description: "rice ball",
    category: "Food & Drink",
    aliases: ["rice_ball"],
    tags: []
  },
  {
    emoji: "🍚",
    description: "cooked rice",
    category: "Food & Drink",
    aliases: ["rice"],
    tags: []
  },
  {
    emoji: "🍛",
    description: "curry rice",
    category: "Food & Drink",
    aliases: ["curry"],
    tags: []
  },
  {
    emoji: "🍜",
    description: "steaming bowl",
    category: "Food & Drink",
    aliases: ["ramen"],
    tags: ["noodle"]
  },
  {
    emoji: "🍝",
    description: "spaghetti",
    category: "Food & Drink",
    aliases: ["spaghetti"],
    tags: ["pasta"]
  },
  {
    emoji: "🍠",
    description: "roasted sweet potato",
    category: "Food & Drink",
    aliases: ["sweet_potato"],
    tags: []
  },
  {
    emoji: "🍢",
    description: "oden",
    category: "Food & Drink",
    aliases: ["oden"],
    tags: []
  },
  {
    emoji: "🍣",
    description: "sushi",
    category: "Food & Drink",
    aliases: ["sushi"],
    tags: []
  },
  {
    emoji: "🍤",
    description: "fried shrimp",
    category: "Food & Drink",
    aliases: ["fried_shrimp"],
    tags: ["tempura"]
  },
  {
    emoji: "🍥",
    description: "fish cake with swirl",
    category: "Food & Drink",
    aliases: ["fish_cake"],
    tags: []
  },
  {
    emoji: "🥮",
    description: "moon cake",
    category: "Food & Drink",
    aliases: ["moon_cake"],
    tags: []
  },
  {
    emoji: "🍡",
    description: "dango",
    category: "Food & Drink",
    aliases: ["dango"],
    tags: []
  },
  {
    emoji: "🥟",
    description: "dumpling",
    category: "Food & Drink",
    aliases: ["dumpling"],
    tags: []
  },
  {
    emoji: "🥠",
    description: "fortune cookie",
    category: "Food & Drink",
    aliases: ["fortune_cookie"],
    tags: []
  },
  {
    emoji: "🥡",
    description: "takeout box",
    category: "Food & Drink",
    aliases: ["takeout_box"],
    tags: []
  },
  {
    emoji: "🦀",
    description: "crab",
    category: "Food & Drink",
    aliases: ["crab"],
    tags: []
  },
  {
    emoji: "🦞",
    description: "lobster",
    category: "Food & Drink",
    aliases: ["lobster"],
    tags: []
  },
  {
    emoji: "🦐",
    description: "shrimp",
    category: "Food & Drink",
    aliases: ["shrimp"],
    tags: []
  },
  {
    emoji: "🦑",
    description: "squid",
    category: "Food & Drink",
    aliases: ["squid"],
    tags: []
  },
  {
    emoji: "🦪",
    description: "oyster",
    category: "Food & Drink",
    aliases: ["oyster"],
    tags: []
  },
  {
    emoji: "🍦",
    description: "soft ice cream",
    category: "Food & Drink",
    aliases: ["icecream"],
    tags: []
  },
  {
    emoji: "🍧",
    description: "shaved ice",
    category: "Food & Drink",
    aliases: ["shaved_ice"],
    tags: []
  },
  {
    emoji: "🍨",
    description: "ice cream",
    category: "Food & Drink",
    aliases: ["ice_cream"],
    tags: []
  },
  {
    emoji: "🍩",
    description: "doughnut",
    category: "Food & Drink",
    aliases: ["doughnut"],
    tags: []
  },
  {
    emoji: "🍪",
    description: "cookie",
    category: "Food & Drink",
    aliases: ["cookie"],
    tags: []
  },
  {
    emoji: "🎂",
    description: "birthday cake",
    category: "Food & Drink",
    aliases: ["birthday"],
    tags: ["party"]
  },
  {
    emoji: "🍰",
    description: "shortcake",
    category: "Food & Drink",
    aliases: ["cake"],
    tags: ["dessert"]
  },
  {
    emoji: "🧁",
    description: "cupcake",
    category: "Food & Drink",
    aliases: ["cupcake"],
    tags: []
  },
  {
    emoji: "🥧",
    description: "pie",
    category: "Food & Drink",
    aliases: ["pie"],
    tags: []
  },
  {
    emoji: "🍫",
    description: "chocolate bar",
    category: "Food & Drink",
    aliases: ["chocolate_bar"],
    tags: []
  },
  {
    emoji: "🍬",
    description: "candy",
    category: "Food & Drink",
    aliases: ["candy"],
    tags: ["sweet"]
  },
  {
    emoji: "🍭",
    description: "lollipop",
    category: "Food & Drink",
    aliases: ["lollipop"],
    tags: []
  },
  {
    emoji: "🍮",
    description: "custard",
    category: "Food & Drink",
    aliases: ["custard"],
    tags: []
  },
  {
    emoji: "🍯",
    description: "honey pot",
    category: "Food & Drink",
    aliases: ["honey_pot"],
    tags: []
  },
  {
    emoji: "🍼",
    description: "baby bottle",
    category: "Food & Drink",
    aliases: ["baby_bottle"],
    tags: ["milk"]
  },
  {
    emoji: "🥛",
    description: "glass of milk",
    category: "Food & Drink",
    aliases: ["milk_glass"],
    tags: []
  },
  {
    emoji: "☕",
    description: "hot beverage",
    category: "Food & Drink",
    aliases: ["coffee"],
    tags: ["cafe", "espresso"]
  },
  {
    emoji: "🫖",
    description: "teapot",
    category: "Food & Drink",
    aliases: ["teapot"],
    tags: []
  },
  {
    emoji: "🍵",
    description: "teacup without handle",
    category: "Food & Drink",
    aliases: ["tea"],
    tags: ["green", "breakfast"]
  },
  {
    emoji: "🍶",
    description: "sake",
    category: "Food & Drink",
    aliases: ["sake"],
    tags: []
  },
  {
    emoji: "🍾",
    description: "bottle with popping cork",
    category: "Food & Drink",
    aliases: ["champagne"],
    tags: ["bottle", "bubbly", "celebration"]
  },
  {
    emoji: "🍷",
    description: "wine glass",
    category: "Food & Drink",
    aliases: ["wine_glass"],
    tags: []
  },
  {
    emoji: "🍸",
    description: "cocktail glass",
    category: "Food & Drink",
    aliases: ["cocktail"],
    tags: ["drink"]
  },
  {
    emoji: "🍹",
    description: "tropical drink",
    category: "Food & Drink",
    aliases: ["tropical_drink"],
    tags: ["summer", "vacation"]
  },
  {
    emoji: "🍺",
    description: "beer mug",
    category: "Food & Drink",
    aliases: ["beer"],
    tags: ["drink"]
  },
  {
    emoji: "🍻",
    description: "clinking beer mugs",
    category: "Food & Drink",
    aliases: ["beers"],
    tags: ["drinks"]
  },
  {
    emoji: "🥂",
    description: "clinking glasses",
    category: "Food & Drink",
    aliases: ["clinking_glasses"],
    tags: ["cheers", "toast"]
  },
  {
    emoji: "🥃",
    description: "tumbler glass",
    category: "Food & Drink",
    aliases: ["tumbler_glass"],
    tags: ["whisky"]
  },
  {
    emoji: "🥤",
    description: "cup with straw",
    category: "Food & Drink",
    aliases: ["cup_with_straw"],
    tags: []
  },
  {
    emoji: "🧋",
    description: "bubble tea",
    category: "Food & Drink",
    aliases: ["bubble_tea"],
    tags: []
  },
  {
    emoji: "🧃",
    description: "beverage box",
    category: "Food & Drink",
    aliases: ["beverage_box"],
    tags: []
  },
  {
    emoji: "🧉",
    description: "mate",
    category: "Food & Drink",
    aliases: ["mate"],
    tags: []
  },
  {
    emoji: "🧊",
    description: "ice",
    category: "Food & Drink",
    aliases: ["ice_cube"],
    tags: []
  },
  {
    emoji: "🥢",
    description: "chopsticks",
    category: "Food & Drink",
    aliases: ["chopsticks"],
    tags: []
  },
  {
    emoji: "🍽️",
    description: "fork and knife with plate",
    category: "Food & Drink",
    aliases: ["plate_with_cutlery"],
    tags: ["dining", "dinner"]
  },
  {
    emoji: "🍴",
    description: "fork and knife",
    category: "Food & Drink",
    aliases: ["fork_and_knife"],
    tags: ["cutlery"]
  },
  {
    emoji: "🥄",
    description: "spoon",
    category: "Food & Drink",
    aliases: ["spoon"],
    tags: []
  },
  {
    emoji: "🔪",
    description: "kitchen knife",
    category: "Food & Drink",
    aliases: ["hocho", "knife"],
    tags: ["cut", "chop"]
  },
  {
    emoji: "🏺",
    description: "amphora",
    category: "Food & Drink",
    aliases: ["amphora"],
    tags: []
  },
  {
    emoji: "🌍",
    description: "globe showing Europe-Africa",
    category: "Travel & Places",
    aliases: ["earth_africa"],
    tags: ["globe", "world", "international"]
  },
  {
    emoji: "🌎",
    description: "globe showing Americas",
    category: "Travel & Places",
    aliases: ["earth_americas"],
    tags: ["globe", "world", "international"]
  },
  {
    emoji: "🌏",
    description: "globe showing Asia-Australia",
    category: "Travel & Places",
    aliases: ["earth_asia"],
    tags: ["globe", "world", "international"]
  },
  {
    emoji: "🌐",
    description: "globe with meridians",
    category: "Travel & Places",
    aliases: ["globe_with_meridians"],
    tags: ["world", "global", "international"]
  },
  {
    emoji: "🗺️",
    description: "world map",
    category: "Travel & Places",
    aliases: ["world_map"],
    tags: ["travel"]
  },
  {
    emoji: "🗾",
    description: "map of Japan",
    category: "Travel & Places",
    aliases: ["japan"],
    tags: []
  },
  {
    emoji: "🧭",
    description: "compass",
    category: "Travel & Places",
    aliases: ["compass"],
    tags: []
  },
  {
    emoji: "🏔️",
    description: "snow-capped mountain",
    category: "Travel & Places",
    aliases: ["mountain_snow"],
    tags: []
  },
  {
    emoji: "⛰️",
    description: "mountain",
    category: "Travel & Places",
    aliases: ["mountain"],
    tags: []
  },
  {
    emoji: "🌋",
    description: "volcano",
    category: "Travel & Places",
    aliases: ["volcano"],
    tags: []
  },
  {
    emoji: "🗻",
    description: "mount fuji",
    category: "Travel & Places",
    aliases: ["mount_fuji"],
    tags: []
  },
  {
    emoji: "🏕️",
    description: "camping",
    category: "Travel & Places",
    aliases: ["camping"],
    tags: []
  },
  {
    emoji: "🏖️",
    description: "beach with umbrella",
    category: "Travel & Places",
    aliases: ["beach_umbrella"],
    tags: []
  },
  {
    emoji: "🏜️",
    description: "desert",
    category: "Travel & Places",
    aliases: ["desert"],
    tags: []
  },
  {
    emoji: "🏝️",
    description: "desert island",
    category: "Travel & Places",
    aliases: ["desert_island"],
    tags: []
  },
  {
    emoji: "🏞️",
    description: "national park",
    category: "Travel & Places",
    aliases: ["national_park"],
    tags: []
  },
  {
    emoji: "🏟️",
    description: "stadium",
    category: "Travel & Places",
    aliases: ["stadium"],
    tags: []
  },
  {
    emoji: "🏛️",
    description: "classical building",
    category: "Travel & Places",
    aliases: ["classical_building"],
    tags: []
  },
  {
    emoji: "🏗️",
    description: "building construction",
    category: "Travel & Places",
    aliases: ["building_construction"],
    tags: []
  },
  {
    emoji: "🧱",
    description: "brick",
    category: "Travel & Places",
    aliases: ["bricks"],
    tags: []
  },
  {
    emoji: "🪨",
    description: "rock",
    category: "Travel & Places",
    aliases: ["rock"],
    tags: []
  },
  {
    emoji: "🪵",
    description: "wood",
    category: "Travel & Places",
    aliases: ["wood"],
    tags: []
  },
  {
    emoji: "🛖",
    description: "hut",
    category: "Travel & Places",
    aliases: ["hut"],
    tags: []
  },
  {
    emoji: "🏘️",
    description: "houses",
    category: "Travel & Places",
    aliases: ["houses"],
    tags: []
  },
  {
    emoji: "🏚️",
    description: "derelict house",
    category: "Travel & Places",
    aliases: ["derelict_house"],
    tags: []
  },
  {
    emoji: "🏠",
    description: "house",
    category: "Travel & Places",
    aliases: ["house"],
    tags: []
  },
  {
    emoji: "🏡",
    description: "house with garden",
    category: "Travel & Places",
    aliases: ["house_with_garden"],
    tags: []
  },
  {
    emoji: "🏢",
    description: "office building",
    category: "Travel & Places",
    aliases: ["office"],
    tags: []
  },
  {
    emoji: "🏣",
    description: "Japanese post office",
    category: "Travel & Places",
    aliases: ["post_office"],
    tags: []
  },
  {
    emoji: "🏤",
    description: "post office",
    category: "Travel & Places",
    aliases: ["european_post_office"],
    tags: []
  },
  {
    emoji: "🏥",
    description: "hospital",
    category: "Travel & Places",
    aliases: ["hospital"],
    tags: []
  },
  {
    emoji: "🏦",
    description: "bank",
    category: "Travel & Places",
    aliases: ["bank"],
    tags: []
  },
  {
    emoji: "🏨",
    description: "hotel",
    category: "Travel & Places",
    aliases: ["hotel"],
    tags: []
  },
  {
    emoji: "🏩",
    description: "love hotel",
    category: "Travel & Places",
    aliases: ["love_hotel"],
    tags: []
  },
  {
    emoji: "🏪",
    description: "convenience store",
    category: "Travel & Places",
    aliases: ["convenience_store"],
    tags: []
  },
  {
    emoji: "🏫",
    description: "school",
    category: "Travel & Places",
    aliases: ["school"],
    tags: []
  },
  {
    emoji: "🏬",
    description: "department store",
    category: "Travel & Places",
    aliases: ["department_store"],
    tags: []
  },
  {
    emoji: "🏭",
    description: "factory",
    category: "Travel & Places",
    aliases: ["factory"],
    tags: []
  },
  {
    emoji: "🏯",
    description: "Japanese castle",
    category: "Travel & Places",
    aliases: ["japanese_castle"],
    tags: []
  },
  {
    emoji: "🏰",
    description: "castle",
    category: "Travel & Places",
    aliases: ["european_castle"],
    tags: []
  },
  {
    emoji: "💒",
    description: "wedding",
    category: "Travel & Places",
    aliases: ["wedding"],
    tags: ["marriage"]
  },
  {
    emoji: "🗼",
    description: "Tokyo tower",
    category: "Travel & Places",
    aliases: ["tokyo_tower"],
    tags: []
  },
  {
    emoji: "🗽",
    description: "Statue of Liberty",
    category: "Travel & Places",
    aliases: ["statue_of_liberty"],
    tags: []
  },
  {
    emoji: "⛪",
    description: "church",
    category: "Travel & Places",
    aliases: ["church"],
    tags: []
  },
  {
    emoji: "🕌",
    description: "mosque",
    category: "Travel & Places",
    aliases: ["mosque"],
    tags: []
  },
  {
    emoji: "🛕",
    description: "hindu temple",
    category: "Travel & Places",
    aliases: ["hindu_temple"],
    tags: []
  },
  {
    emoji: "🕍",
    description: "synagogue",
    category: "Travel & Places",
    aliases: ["synagogue"],
    tags: []
  },
  {
    emoji: "⛩️",
    description: "shinto shrine",
    category: "Travel & Places",
    aliases: ["shinto_shrine"],
    tags: []
  },
  {
    emoji: "🕋",
    description: "kaaba",
    category: "Travel & Places",
    aliases: ["kaaba"],
    tags: []
  },
  {
    emoji: "⛲",
    description: "fountain",
    category: "Travel & Places",
    aliases: ["fountain"],
    tags: []
  },
  {
    emoji: "⛺",
    description: "tent",
    category: "Travel & Places",
    aliases: ["tent"],
    tags: ["camping"]
  },
  {
    emoji: "🌁",
    description: "foggy",
    category: "Travel & Places",
    aliases: ["foggy"],
    tags: ["karl"]
  },
  {
    emoji: "🌃",
    description: "night with stars",
    category: "Travel & Places",
    aliases: ["night_with_stars"],
    tags: []
  },
  {
    emoji: "🏙️",
    description: "cityscape",
    category: "Travel & Places",
    aliases: ["cityscape"],
    tags: ["skyline"]
  },
  {
    emoji: "🌄",
    description: "sunrise over mountains",
    category: "Travel & Places",
    aliases: ["sunrise_over_mountains"],
    tags: []
  },
  {
    emoji: "🌅",
    description: "sunrise",
    category: "Travel & Places",
    aliases: ["sunrise"],
    tags: []
  },
  {
    emoji: "🌆",
    description: "cityscape at dusk",
    category: "Travel & Places",
    aliases: ["city_sunset"],
    tags: []
  },
  {
    emoji: "🌇",
    description: "sunset",
    category: "Travel & Places",
    aliases: ["city_sunrise"],
    tags: []
  },
  {
    emoji: "🌉",
    description: "bridge at night",
    category: "Travel & Places",
    aliases: ["bridge_at_night"],
    tags: []
  },
  {
    emoji: "♨️",
    description: "hot springs",
    category: "Travel & Places",
    aliases: ["hotsprings"],
    tags: []
  },
  {
    emoji: "🎠",
    description: "carousel horse",
    category: "Travel & Places",
    aliases: ["carousel_horse"],
    tags: []
  },
  {
    emoji: "🎡",
    description: "ferris wheel",
    category: "Travel & Places",
    aliases: ["ferris_wheel"],
    tags: []
  },
  {
    emoji: "🎢",
    description: "roller coaster",
    category: "Travel & Places",
    aliases: ["roller_coaster"],
    tags: []
  },
  {
    emoji: "💈",
    description: "barber pole",
    category: "Travel & Places",
    aliases: ["barber"],
    tags: []
  },
  {
    emoji: "🎪",
    description: "circus tent",
    category: "Travel & Places",
    aliases: ["circus_tent"],
    tags: []
  },
  {
    emoji: "🚂",
    description: "locomotive",
    category: "Travel & Places",
    aliases: ["steam_locomotive"],
    tags: ["train"]
  },
  {
    emoji: "🚃",
    description: "railway car",
    category: "Travel & Places",
    aliases: ["railway_car"],
    tags: []
  },
  {
    emoji: "🚄",
    description: "high-speed train",
    category: "Travel & Places",
    aliases: ["bullettrain_side"],
    tags: ["train"]
  },
  {
    emoji: "🚅",
    description: "bullet train",
    category: "Travel & Places",
    aliases: ["bullettrain_front"],
    tags: ["train"]
  },
  {
    emoji: "🚆",
    description: "train",
    category: "Travel & Places",
    aliases: ["train2"],
    tags: []
  },
  {
    emoji: "🚇",
    description: "metro",
    category: "Travel & Places",
    aliases: ["metro"],
    tags: []
  },
  {
    emoji: "🚈",
    description: "light rail",
    category: "Travel & Places",
    aliases: ["light_rail"],
    tags: []
  },
  {
    emoji: "🚉",
    description: "station",
    category: "Travel & Places",
    aliases: ["station"],
    tags: []
  },
  {
    emoji: "🚊",
    description: "tram",
    category: "Travel & Places",
    aliases: ["tram"],
    tags: []
  },
  {
    emoji: "🚝",
    description: "monorail",
    category: "Travel & Places",
    aliases: ["monorail"],
    tags: []
  },
  {
    emoji: "🚞",
    description: "mountain railway",
    category: "Travel & Places",
    aliases: ["mountain_railway"],
    tags: []
  },
  {
    emoji: "🚋",
    description: "tram car",
    category: "Travel & Places",
    aliases: ["train"],
    tags: []
  },
  {
    emoji: "🚌",
    description: "bus",
    category: "Travel & Places",
    aliases: ["bus"],
    tags: []
  },
  {
    emoji: "🚍",
    description: "oncoming bus",
    category: "Travel & Places",
    aliases: ["oncoming_bus"],
    tags: []
  },
  {
    emoji: "🚎",
    description: "trolleybus",
    category: "Travel & Places",
    aliases: ["trolleybus"],
    tags: []
  },
  {
    emoji: "🚐",
    description: "minibus",
    category: "Travel & Places",
    aliases: ["minibus"],
    tags: []
  },
  {
    emoji: "🚑",
    description: "ambulance",
    category: "Travel & Places",
    aliases: ["ambulance"],
    tags: []
  },
  {
    emoji: "🚒",
    description: "fire engine",
    category: "Travel & Places",
    aliases: ["fire_engine"],
    tags: []
  },
  {
    emoji: "🚓",
    description: "police car",
    category: "Travel & Places",
    aliases: ["police_car"],
    tags: []
  },
  {
    emoji: "🚔",
    description: "oncoming police car",
    category: "Travel & Places",
    aliases: ["oncoming_police_car"],
    tags: []
  },
  {
    emoji: "🚕",
    description: "taxi",
    category: "Travel & Places",
    aliases: ["taxi"],
    tags: []
  },
  {
    emoji: "🚖",
    description: "oncoming taxi",
    category: "Travel & Places",
    aliases: ["oncoming_taxi"],
    tags: []
  },
  {
    emoji: "🚗",
    description: "automobile",
    category: "Travel & Places",
    aliases: ["car", "red_car"],
    tags: []
  },
  {
    emoji: "🚘",
    description: "oncoming automobile",
    category: "Travel & Places",
    aliases: ["oncoming_automobile"],
    tags: []
  },
  {
    emoji: "🚙",
    description: "sport utility vehicle",
    category: "Travel & Places",
    aliases: ["blue_car"],
    tags: []
  },
  {
    emoji: "🛻",
    description: "pickup truck",
    category: "Travel & Places",
    aliases: ["pickup_truck"],
    tags: []
  },
  {
    emoji: "🚚",
    description: "delivery truck",
    category: "Travel & Places",
    aliases: ["truck"],
    tags: []
  },
  {
    emoji: "🚛",
    description: "articulated lorry",
    category: "Travel & Places",
    aliases: ["articulated_lorry"],
    tags: []
  },
  {
    emoji: "🚜",
    description: "tractor",
    category: "Travel & Places",
    aliases: ["tractor"],
    tags: []
  },
  {
    emoji: "🏎️",
    description: "racing car",
    category: "Travel & Places",
    aliases: ["racing_car"],
    tags: []
  },
  {
    emoji: "🏍️",
    description: "motorcycle",
    category: "Travel & Places",
    aliases: ["motorcycle"],
    tags: []
  },
  {
    emoji: "🛵",
    description: "motor scooter",
    category: "Travel & Places",
    aliases: ["motor_scooter"],
    tags: []
  },
  {
    emoji: "🦽",
    description: "manual wheelchair",
    category: "Travel & Places",
    aliases: ["manual_wheelchair"],
    tags: []
  },
  {
    emoji: "🦼",
    description: "motorized wheelchair",
    category: "Travel & Places",
    aliases: ["motorized_wheelchair"],
    tags: []
  },
  {
    emoji: "🛺",
    description: "auto rickshaw",
    category: "Travel & Places",
    aliases: ["auto_rickshaw"],
    tags: []
  },
  {
    emoji: "🚲",
    description: "bicycle",
    category: "Travel & Places",
    aliases: ["bike"],
    tags: ["bicycle"]
  },
  {
    emoji: "🛴",
    description: "kick scooter",
    category: "Travel & Places",
    aliases: ["kick_scooter"],
    tags: []
  },
  {
    emoji: "🛹",
    description: "skateboard",
    category: "Travel & Places",
    aliases: ["skateboard"],
    tags: []
  },
  {
    emoji: "🛼",
    description: "roller skate",
    category: "Travel & Places",
    aliases: ["roller_skate"],
    tags: []
  },
  {
    emoji: "🚏",
    description: "bus stop",
    category: "Travel & Places",
    aliases: ["busstop"],
    tags: []
  },
  {
    emoji: "🛣️",
    description: "motorway",
    category: "Travel & Places",
    aliases: ["motorway"],
    tags: []
  },
  {
    emoji: "🛤️",
    description: "railway track",
    category: "Travel & Places",
    aliases: ["railway_track"],
    tags: []
  },
  {
    emoji: "🛢️",
    description: "oil drum",
    category: "Travel & Places",
    aliases: ["oil_drum"],
    tags: []
  },
  {
    emoji: "⛽",
    description: "fuel pump",
    category: "Travel & Places",
    aliases: ["fuelpump"],
    tags: []
  },
  {
    emoji: "🚨",
    description: "police car light",
    category: "Travel & Places",
    aliases: ["rotating_light"],
    tags: ["911", "emergency"]
  },
  {
    emoji: "🚥",
    description: "horizontal traffic light",
    category: "Travel & Places",
    aliases: ["traffic_light"],
    tags: []
  },
  {
    emoji: "🚦",
    description: "vertical traffic light",
    category: "Travel & Places",
    aliases: ["vertical_traffic_light"],
    tags: ["semaphore"]
  },
  {
    emoji: "🛑",
    description: "stop sign",
    category: "Travel & Places",
    aliases: ["stop_sign"],
    tags: []
  },
  {
    emoji: "🚧",
    description: "construction",
    category: "Travel & Places",
    aliases: ["construction"],
    tags: ["wip"]
  },
  {
    emoji: "⚓",
    description: "anchor",
    category: "Travel & Places",
    aliases: ["anchor"],
    tags: ["ship"]
  },
  {
    emoji: "⛵",
    description: "sailboat",
    category: "Travel & Places",
    aliases: ["boat", "sailboat"],
    tags: []
  },
  {
    emoji: "🛶",
    description: "canoe",
    category: "Travel & Places",
    aliases: ["canoe"],
    tags: []
  },
  {
    emoji: "🚤",
    description: "speedboat",
    category: "Travel & Places",
    aliases: ["speedboat"],
    tags: ["ship"]
  },
  {
    emoji: "🛳️",
    description: "passenger ship",
    category: "Travel & Places",
    aliases: ["passenger_ship"],
    tags: ["cruise"]
  },
  {
    emoji: "⛴️",
    description: "ferry",
    category: "Travel & Places",
    aliases: ["ferry"],
    tags: []
  },
  {
    emoji: "🛥️",
    description: "motor boat",
    category: "Travel & Places",
    aliases: ["motor_boat"],
    tags: []
  },
  {
    emoji: "🚢",
    description: "ship",
    category: "Travel & Places",
    aliases: ["ship"],
    tags: []
  },
  {
    emoji: "✈️",
    description: "airplane",
    category: "Travel & Places",
    aliases: ["airplane"],
    tags: ["flight"]
  },
  {
    emoji: "🛩️",
    description: "small airplane",
    category: "Travel & Places",
    aliases: ["small_airplane"],
    tags: ["flight"]
  },
  {
    emoji: "🛫",
    description: "airplane departure",
    category: "Travel & Places",
    aliases: ["flight_departure"],
    tags: []
  },
  {
    emoji: "🛬",
    description: "airplane arrival",
    category: "Travel & Places",
    aliases: ["flight_arrival"],
    tags: []
  },
  {
    emoji: "🪂",
    description: "parachute",
    category: "Travel & Places",
    aliases: ["parachute"],
    tags: []
  },
  {
    emoji: "💺",
    description: "seat",
    category: "Travel & Places",
    aliases: ["seat"],
    tags: []
  },
  {
    emoji: "🚁",
    description: "helicopter",
    category: "Travel & Places",
    aliases: ["helicopter"],
    tags: []
  },
  {
    emoji: "🚟",
    description: "suspension railway",
    category: "Travel & Places",
    aliases: ["suspension_railway"],
    tags: []
  },
  {
    emoji: "🚠",
    description: "mountain cableway",
    category: "Travel & Places",
    aliases: ["mountain_cableway"],
    tags: []
  },
  {
    emoji: "🚡",
    description: "aerial tramway",
    category: "Travel & Places",
    aliases: ["aerial_tramway"],
    tags: []
  },
  {
    emoji: "🛰️",
    description: "satellite",
    category: "Travel & Places",
    aliases: ["artificial_satellite"],
    tags: ["orbit", "space"]
  },
  {
    emoji: "🚀",
    description: "rocket",
    category: "Travel & Places",
    aliases: ["rocket"],
    tags: ["ship", "launch"]
  },
  {
    emoji: "🛸",
    description: "flying saucer",
    category: "Travel & Places",
    aliases: ["flying_saucer"],
    tags: ["ufo"]
  },
  {
    emoji: "🛎️",
    description: "bellhop bell",
    category: "Travel & Places",
    aliases: ["bellhop_bell"],
    tags: []
  },
  {
    emoji: "🧳",
    description: "luggage",
    category: "Travel & Places",
    aliases: ["luggage"],
    tags: []
  },
  {
    emoji: "⌛",
    description: "hourglass done",
    category: "Travel & Places",
    aliases: ["hourglass"],
    tags: ["time"]
  },
  {
    emoji: "⏳",
    description: "hourglass not done",
    category: "Travel & Places",
    aliases: ["hourglass_flowing_sand"],
    tags: ["time"]
  },
  {
    emoji: "⌚",
    description: "watch",
    category: "Travel & Places",
    aliases: ["watch"],
    tags: ["time"]
  },
  {
    emoji: "⏰",
    description: "alarm clock",
    category: "Travel & Places",
    aliases: ["alarm_clock"],
    tags: ["morning"]
  },
  {
    emoji: "⏱️",
    description: "stopwatch",
    category: "Travel & Places",
    aliases: ["stopwatch"],
    tags: []
  },
  {
    emoji: "⏲️",
    description: "timer clock",
    category: "Travel & Places",
    aliases: ["timer_clock"],
    tags: []
  },
  {
    emoji: "🕰️",
    description: "mantelpiece clock",
    category: "Travel & Places",
    aliases: ["mantelpiece_clock"],
    tags: []
  },
  {
    emoji: "🕛",
    description: "twelve o’clock",
    category: "Travel & Places",
    aliases: ["clock12"],
    tags: []
  },
  {
    emoji: "🕧",
    description: "twelve-thirty",
    category: "Travel & Places",
    aliases: ["clock1230"],
    tags: []
  },
  {
    emoji: "🕐",
    description: "one o’clock",
    category: "Travel & Places",
    aliases: ["clock1"],
    tags: []
  },
  {
    emoji: "🕜",
    description: "one-thirty",
    category: "Travel & Places",
    aliases: ["clock130"],
    tags: []
  },
  {
    emoji: "🕑",
    description: "two o’clock",
    category: "Travel & Places",
    aliases: ["clock2"],
    tags: []
  },
  {
    emoji: "🕝",
    description: "two-thirty",
    category: "Travel & Places",
    aliases: ["clock230"],
    tags: []
  },
  {
    emoji: "🕒",
    description: "three o’clock",
    category: "Travel & Places",
    aliases: ["clock3"],
    tags: []
  },
  {
    emoji: "🕞",
    description: "three-thirty",
    category: "Travel & Places",
    aliases: ["clock330"],
    tags: []
  },
  {
    emoji: "🕓",
    description: "four o’clock",
    category: "Travel & Places",
    aliases: ["clock4"],
    tags: []
  },
  {
    emoji: "🕟",
    description: "four-thirty",
    category: "Travel & Places",
    aliases: ["clock430"],
    tags: []
  },
  {
    emoji: "🕔",
    description: "five o’clock",
    category: "Travel & Places",
    aliases: ["clock5"],
    tags: []
  },
  {
    emoji: "🕠",
    description: "five-thirty",
    category: "Travel & Places",
    aliases: ["clock530"],
    tags: []
  },
  {
    emoji: "🕕",
    description: "six o’clock",
    category: "Travel & Places",
    aliases: ["clock6"],
    tags: []
  },
  {
    emoji: "🕡",
    description: "six-thirty",
    category: "Travel & Places",
    aliases: ["clock630"],
    tags: []
  },
  {
    emoji: "🕖",
    description: "seven o’clock",
    category: "Travel & Places",
    aliases: ["clock7"],
    tags: []
  },
  {
    emoji: "🕢",
    description: "seven-thirty",
    category: "Travel & Places",
    aliases: ["clock730"],
    tags: []
  },
  {
    emoji: "🕗",
    description: "eight o’clock",
    category: "Travel & Places",
    aliases: ["clock8"],
    tags: []
  },
  {
    emoji: "🕣",
    description: "eight-thirty",
    category: "Travel & Places",
    aliases: ["clock830"],
    tags: []
  },
  {
    emoji: "🕘",
    description: "nine o’clock",
    category: "Travel & Places",
    aliases: ["clock9"],
    tags: []
  },
  {
    emoji: "🕤",
    description: "nine-thirty",
    category: "Travel & Places",
    aliases: ["clock930"],
    tags: []
  },
  {
    emoji: "🕙",
    description: "ten o’clock",
    category: "Travel & Places",
    aliases: ["clock10"],
    tags: []
  },
  {
    emoji: "🕥",
    description: "ten-thirty",
    category: "Travel & Places",
    aliases: ["clock1030"],
    tags: []
  },
  {
    emoji: "🕚",
    description: "eleven o’clock",
    category: "Travel & Places",
    aliases: ["clock11"],
    tags: []
  },
  {
    emoji: "🕦",
    description: "eleven-thirty",
    category: "Travel & Places",
    aliases: ["clock1130"],
    tags: []
  },
  {
    emoji: "🌑",
    description: "new moon",
    category: "Travel & Places",
    aliases: ["new_moon"],
    tags: []
  },
  {
    emoji: "🌒",
    description: "waxing crescent moon",
    category: "Travel & Places",
    aliases: ["waxing_crescent_moon"],
    tags: []
  },
  {
    emoji: "🌓",
    description: "first quarter moon",
    category: "Travel & Places",
    aliases: ["first_quarter_moon"],
    tags: []
  },
  {
    emoji: "🌔",
    description: "waxing gibbous moon",
    category: "Travel & Places",
    aliases: ["moon", "waxing_gibbous_moon"],
    tags: []
  },
  {
    emoji: "🌕",
    description: "full moon",
    category: "Travel & Places",
    aliases: ["full_moon"],
    tags: []
  },
  {
    emoji: "🌖",
    description: "waning gibbous moon",
    category: "Travel & Places",
    aliases: ["waning_gibbous_moon"],
    tags: []
  },
  {
    emoji: "🌗",
    description: "last quarter moon",
    category: "Travel & Places",
    aliases: ["last_quarter_moon"],
    tags: []
  },
  {
    emoji: "🌘",
    description: "waning crescent moon",
    category: "Travel & Places",
    aliases: ["waning_crescent_moon"],
    tags: []
  },
  {
    emoji: "🌙",
    description: "crescent moon",
    category: "Travel & Places",
    aliases: ["crescent_moon"],
    tags: ["night"]
  },
  {
    emoji: "🌚",
    description: "new moon face",
    category: "Travel & Places",
    aliases: ["new_moon_with_face"],
    tags: []
  },
  {
    emoji: "🌛",
    description: "first quarter moon face",
    category: "Travel & Places",
    aliases: ["first_quarter_moon_with_face"],
    tags: []
  },
  {
    emoji: "🌜",
    description: "last quarter moon face",
    category: "Travel & Places",
    aliases: ["last_quarter_moon_with_face"],
    tags: []
  },
  {
    emoji: "🌡️",
    description: "thermometer",
    category: "Travel & Places",
    aliases: ["thermometer"],
    tags: []
  },
  {
    emoji: "☀️",
    description: "sun",
    category: "Travel & Places",
    aliases: ["sunny"],
    tags: ["weather"]
  },
  {
    emoji: "🌝",
    description: "full moon face",
    category: "Travel & Places",
    aliases: ["full_moon_with_face"],
    tags: []
  },
  {
    emoji: "🌞",
    description: "sun with face",
    category: "Travel & Places",
    aliases: ["sun_with_face"],
    tags: ["summer"]
  },
  {
    emoji: "🪐",
    description: "ringed planet",
    category: "Travel & Places",
    aliases: ["ringed_planet"],
    tags: []
  },
  {
    emoji: "⭐",
    description: "star",
    category: "Travel & Places",
    aliases: ["star"],
    tags: []
  },
  {
    emoji: "🌟",
    description: "glowing star",
    category: "Travel & Places",
    aliases: ["star2"],
    tags: []
  },
  {
    emoji: "🌠",
    description: "shooting star",
    category: "Travel & Places",
    aliases: ["stars"],
    tags: []
  },
  {
    emoji: "🌌",
    description: "milky way",
    category: "Travel & Places",
    aliases: ["milky_way"],
    tags: []
  },
  {
    emoji: "☁️",
    description: "cloud",
    category: "Travel & Places",
    aliases: ["cloud"],
    tags: []
  },
  {
    emoji: "⛅",
    description: "sun behind cloud",
    category: "Travel & Places",
    aliases: ["partly_sunny"],
    tags: ["weather", "cloud"]
  },
  {
    emoji: "⛈️",
    description: "cloud with lightning and rain",
    category: "Travel & Places",
    aliases: ["cloud_with_lightning_and_rain"],
    tags: []
  },
  {
    emoji: "🌤️",
    description: "sun behind small cloud",
    category: "Travel & Places",
    aliases: ["sun_behind_small_cloud"],
    tags: []
  },
  {
    emoji: "🌥️",
    description: "sun behind large cloud",
    category: "Travel & Places",
    aliases: ["sun_behind_large_cloud"],
    tags: []
  },
  {
    emoji: "🌦️",
    description: "sun behind rain cloud",
    category: "Travel & Places",
    aliases: ["sun_behind_rain_cloud"],
    tags: []
  },
  {
    emoji: "🌧️",
    description: "cloud with rain",
    category: "Travel & Places",
    aliases: ["cloud_with_rain"],
    tags: []
  },
  {
    emoji: "🌨️",
    description: "cloud with snow",
    category: "Travel & Places",
    aliases: ["cloud_with_snow"],
    tags: []
  },
  {
    emoji: "🌩️",
    description: "cloud with lightning",
    category: "Travel & Places",
    aliases: ["cloud_with_lightning"],
    tags: []
  },
  {
    emoji: "🌪️",
    description: "tornado",
    category: "Travel & Places",
    aliases: ["tornado"],
    tags: []
  },
  {
    emoji: "🌫️",
    description: "fog",
    category: "Travel & Places",
    aliases: ["fog"],
    tags: []
  },
  {
    emoji: "🌬️",
    description: "wind face",
    category: "Travel & Places",
    aliases: ["wind_face"],
    tags: []
  },
  {
    emoji: "🌀",
    description: "cyclone",
    category: "Travel & Places",
    aliases: ["cyclone"],
    tags: ["swirl"]
  },
  {
    emoji: "🌈",
    description: "rainbow",
    category: "Travel & Places",
    aliases: ["rainbow"],
    tags: []
  },
  {
    emoji: "🌂",
    description: "closed umbrella",
    category: "Travel & Places",
    aliases: ["closed_umbrella"],
    tags: ["weather", "rain"]
  },
  {
    emoji: "☂️",
    description: "umbrella",
    category: "Travel & Places",
    aliases: ["open_umbrella"],
    tags: []
  },
  {
    emoji: "☔",
    description: "umbrella with rain drops",
    category: "Travel & Places",
    aliases: ["umbrella"],
    tags: ["rain", "weather"]
  },
  {
    emoji: "⛱️",
    description: "umbrella on ground",
    category: "Travel & Places",
    aliases: ["parasol_on_ground"],
    tags: ["beach_umbrella"]
  },
  {
    emoji: "⚡",
    description: "high voltage",
    category: "Travel & Places",
    aliases: ["zap"],
    tags: ["lightning", "thunder"]
  },
  {
    emoji: "❄️",
    description: "snowflake",
    category: "Travel & Places",
    aliases: ["snowflake"],
    tags: ["winter", "cold", "weather"]
  },
  {
    emoji: "☃️",
    description: "snowman",
    category: "Travel & Places",
    aliases: ["snowman_with_snow"],
    tags: ["winter", "christmas"]
  },
  {
    emoji: "⛄",
    description: "snowman without snow",
    category: "Travel & Places",
    aliases: ["snowman"],
    tags: ["winter"]
  },
  {
    emoji: "☄️",
    description: "comet",
    category: "Travel & Places",
    aliases: ["comet"],
    tags: []
  },
  {
    emoji: "🔥",
    description: "fire",
    category: "Travel & Places",
    aliases: ["fire"],
    tags: ["burn"]
  },
  {
    emoji: "💧",
    description: "droplet",
    category: "Travel & Places",
    aliases: ["droplet"],
    tags: ["water"]
  },
  {
    emoji: "🌊",
    description: "water wave",
    category: "Travel & Places",
    aliases: ["ocean"],
    tags: ["sea"]
  },
  {
    emoji: "🎃",
    description: "jack-o-lantern",
    category: "Activities",
    aliases: ["jack_o_lantern"],
    tags: ["halloween"]
  },
  {
    emoji: "🎄",
    description: "Christmas tree",
    category: "Activities",
    aliases: ["christmas_tree"],
    tags: []
  },
  {
    emoji: "🎆",
    description: "fireworks",
    category: "Activities",
    aliases: ["fireworks"],
    tags: ["festival", "celebration"]
  },
  {
    emoji: "🎇",
    description: "sparkler",
    category: "Activities",
    aliases: ["sparkler"],
    tags: []
  },
  {
    emoji: "🧨",
    description: "firecracker",
    category: "Activities",
    aliases: ["firecracker"],
    tags: []
  },
  {
    emoji: "✨",
    description: "sparkles",
    category: "Activities",
    aliases: ["sparkles"],
    tags: ["shiny"]
  },
  {
    emoji: "🎈",
    description: "balloon",
    category: "Activities",
    aliases: ["balloon"],
    tags: ["party", "birthday"]
  },
  {
    emoji: "🎉",
    description: "party popper",
    category: "Activities",
    aliases: ["tada"],
    tags: ["hooray", "party"]
  },
  {
    emoji: "🎊",
    description: "confetti ball",
    category: "Activities",
    aliases: ["confetti_ball"],
    tags: []
  },
  {
    emoji: "🎋",
    description: "tanabata tree",
    category: "Activities",
    aliases: ["tanabata_tree"],
    tags: []
  },
  {
    emoji: "🎍",
    description: "pine decoration",
    category: "Activities",
    aliases: ["bamboo"],
    tags: []
  },
  {
    emoji: "🎎",
    description: "Japanese dolls",
    category: "Activities",
    aliases: ["dolls"],
    tags: []
  },
  {
    emoji: "🎏",
    description: "carp streamer",
    category: "Activities",
    aliases: ["flags"],
    tags: []
  },
  {
    emoji: "🎐",
    description: "wind chime",
    category: "Activities",
    aliases: ["wind_chime"],
    tags: []
  },
  {
    emoji: "🎑",
    description: "moon viewing ceremony",
    category: "Activities",
    aliases: ["rice_scene"],
    tags: []
  },
  {
    emoji: "🧧",
    description: "red envelope",
    category: "Activities",
    aliases: ["red_envelope"],
    tags: []
  },
  {
    emoji: "🎀",
    description: "ribbon",
    category: "Activities",
    aliases: ["ribbon"],
    tags: []
  },
  {
    emoji: "🎁",
    description: "wrapped gift",
    category: "Activities",
    aliases: ["gift"],
    tags: ["present", "birthday", "christmas"]
  },
  {
    emoji: "🎗️",
    description: "reminder ribbon",
    category: "Activities",
    aliases: ["reminder_ribbon"],
    tags: []
  },
  {
    emoji: "🎟️",
    description: "admission tickets",
    category: "Activities",
    aliases: ["tickets"],
    tags: []
  },
  {
    emoji: "🎫",
    description: "ticket",
    category: "Activities",
    aliases: ["ticket"],
    tags: []
  },
  {
    emoji: "🎖️",
    description: "military medal",
    category: "Activities",
    aliases: ["medal_military"],
    tags: []
  },
  {
    emoji: "🏆",
    description: "trophy",
    category: "Activities",
    aliases: ["trophy"],
    tags: ["award", "contest", "winner"]
  },
  {
    emoji: "🏅",
    description: "sports medal",
    category: "Activities",
    aliases: ["medal_sports"],
    tags: ["gold", "winner"]
  },
  {
    emoji: "🥇",
    description: "1st place medal",
    category: "Activities",
    aliases: ["1st_place_medal"],
    tags: ["gold"]
  },
  {
    emoji: "🥈",
    description: "2nd place medal",
    category: "Activities",
    aliases: ["2nd_place_medal"],
    tags: ["silver"]
  },
  {
    emoji: "🥉",
    description: "3rd place medal",
    category: "Activities",
    aliases: ["3rd_place_medal"],
    tags: ["bronze"]
  },
  {
    emoji: "⚽",
    description: "soccer ball",
    category: "Activities",
    aliases: ["soccer"],
    tags: ["sports"]
  },
  {
    emoji: "⚾",
    description: "baseball",
    category: "Activities",
    aliases: ["baseball"],
    tags: ["sports"]
  },
  {
    emoji: "🥎",
    description: "softball",
    category: "Activities",
    aliases: ["softball"],
    tags: []
  },
  {
    emoji: "🏀",
    description: "basketball",
    category: "Activities",
    aliases: ["basketball"],
    tags: ["sports"]
  },
  {
    emoji: "🏐",
    description: "volleyball",
    category: "Activities",
    aliases: ["volleyball"],
    tags: []
  },
  {
    emoji: "🏈",
    description: "american football",
    category: "Activities",
    aliases: ["football"],
    tags: ["sports"]
  },
  {
    emoji: "🏉",
    description: "rugby football",
    category: "Activities",
    aliases: ["rugby_football"],
    tags: []
  },
  {
    emoji: "🎾",
    description: "tennis",
    category: "Activities",
    aliases: ["tennis"],
    tags: ["sports"]
  },
  {
    emoji: "🥏",
    description: "flying disc",
    category: "Activities",
    aliases: ["flying_disc"],
    tags: []
  },
  {
    emoji: "🎳",
    description: "bowling",
    category: "Activities",
    aliases: ["bowling"],
    tags: []
  },
  {
    emoji: "🏏",
    description: "cricket game",
    category: "Activities",
    aliases: ["cricket_game"],
    tags: []
  },
  {
    emoji: "🏑",
    description: "field hockey",
    category: "Activities",
    aliases: ["field_hockey"],
    tags: []
  },
  {
    emoji: "🏒",
    description: "ice hockey",
    category: "Activities",
    aliases: ["ice_hockey"],
    tags: []
  },
  {
    emoji: "🥍",
    description: "lacrosse",
    category: "Activities",
    aliases: ["lacrosse"],
    tags: []
  },
  {
    emoji: "🏓",
    description: "ping pong",
    category: "Activities",
    aliases: ["ping_pong"],
    tags: []
  },
  {
    emoji: "🏸",
    description: "badminton",
    category: "Activities",
    aliases: ["badminton"],
    tags: []
  },
  {
    emoji: "🥊",
    description: "boxing glove",
    category: "Activities",
    aliases: ["boxing_glove"],
    tags: []
  },
  {
    emoji: "🥋",
    description: "martial arts uniform",
    category: "Activities",
    aliases: ["martial_arts_uniform"],
    tags: []
  },
  {
    emoji: "🥅",
    description: "goal net",
    category: "Activities",
    aliases: ["goal_net"],
    tags: []
  },
  {
    emoji: "⛳",
    description: "flag in hole",
    category: "Activities",
    aliases: ["golf"],
    tags: []
  },
  {
    emoji: "⛸️",
    description: "ice skate",
    category: "Activities",
    aliases: ["ice_skate"],
    tags: ["skating"]
  },
  {
    emoji: "🎣",
    description: "fishing pole",
    category: "Activities",
    aliases: ["fishing_pole_and_fish"],
    tags: []
  },
  {
    emoji: "🤿",
    description: "diving mask",
    category: "Activities",
    aliases: ["diving_mask"],
    tags: []
  },
  {
    emoji: "🎽",
    description: "running shirt",
    category: "Activities",
    aliases: ["running_shirt_with_sash"],
    tags: ["marathon"]
  },
  {
    emoji: "🎿",
    description: "skis",
    category: "Activities",
    aliases: ["ski"],
    tags: []
  },
  {
    emoji: "🛷",
    description: "sled",
    category: "Activities",
    aliases: ["sled"],
    tags: []
  },
  {
    emoji: "🥌",
    description: "curling stone",
    category: "Activities",
    aliases: ["curling_stone"],
    tags: []
  },
  {
    emoji: "🎯",
    description: "bullseye",
    category: "Activities",
    aliases: ["dart"],
    tags: ["target"]
  },
  {
    emoji: "🪀",
    description: "yo-yo",
    category: "Activities",
    aliases: ["yo_yo"],
    tags: []
  },
  {
    emoji: "🪁",
    description: "kite",
    category: "Activities",
    aliases: ["kite"],
    tags: []
  },
  {
    emoji: "🎱",
    description: "pool 8 ball",
    category: "Activities",
    aliases: ["8ball"],
    tags: ["pool", "billiards"]
  },
  {
    emoji: "🔮",
    description: "crystal ball",
    category: "Activities",
    aliases: ["crystal_ball"],
    tags: ["fortune"]
  },
  {
    emoji: "🪄",
    description: "magic wand",
    category: "Activities",
    aliases: ["magic_wand"],
    tags: []
  },
  {
    emoji: "🧿",
    description: "nazar amulet",
    category: "Activities",
    aliases: ["nazar_amulet"],
    tags: []
  },
  {
    emoji: "🎮",
    description: "video game",
    category: "Activities",
    aliases: ["video_game"],
    tags: ["play", "controller", "console"]
  },
  {
    emoji: "🕹️",
    description: "joystick",
    category: "Activities",
    aliases: ["joystick"],
    tags: []
  },
  {
    emoji: "🎰",
    description: "slot machine",
    category: "Activities",
    aliases: ["slot_machine"],
    tags: []
  },
  {
    emoji: "🎲",
    description: "game die",
    category: "Activities",
    aliases: ["game_die"],
    tags: ["dice", "gambling"]
  },
  {
    emoji: "🧩",
    description: "puzzle piece",
    category: "Activities",
    aliases: ["jigsaw"],
    tags: []
  },
  {
    emoji: "🧸",
    description: "teddy bear",
    category: "Activities",
    aliases: ["teddy_bear"],
    tags: []
  },
  {
    emoji: "🪅",
    description: "piñata",
    category: "Activities",
    aliases: ["pinata"],
    tags: []
  },
  {
    emoji: "🪆",
    description: "nesting dolls",
    category: "Activities",
    aliases: ["nesting_dolls"],
    tags: []
  },
  {
    emoji: "♠️",
    description: "spade suit",
    category: "Activities",
    aliases: ["spades"],
    tags: []
  },
  {
    emoji: "♥️",
    description: "heart suit",
    category: "Activities",
    aliases: ["hearts"],
    tags: []
  },
  {
    emoji: "♦️",
    description: "diamond suit",
    category: "Activities",
    aliases: ["diamonds"],
    tags: []
  },
  {
    emoji: "♣️",
    description: "club suit",
    category: "Activities",
    aliases: ["clubs"],
    tags: []
  },
  {
    emoji: "♟️",
    description: "chess pawn",
    category: "Activities",
    aliases: ["chess_pawn"],
    tags: []
  },
  {
    emoji: "🃏",
    description: "joker",
    category: "Activities",
    aliases: ["black_joker"],
    tags: []
  },
  {
    emoji: "🀄",
    description: "mahjong red dragon",
    category: "Activities",
    aliases: ["mahjong"],
    tags: []
  },
  {
    emoji: "🎴",
    description: "flower playing cards",
    category: "Activities",
    aliases: ["flower_playing_cards"],
    tags: []
  },
  {
    emoji: "🎭",
    description: "performing arts",
    category: "Activities",
    aliases: ["performing_arts"],
    tags: ["theater", "drama"]
  },
  {
    emoji: "🖼️",
    description: "framed picture",
    category: "Activities",
    aliases: ["framed_picture"],
    tags: []
  },
  {
    emoji: "🎨",
    description: "artist palette",
    category: "Activities",
    aliases: ["art"],
    tags: ["design", "paint"]
  },
  {
    emoji: "🧵",
    description: "thread",
    category: "Activities",
    aliases: ["thread"],
    tags: []
  },
  {
    emoji: "🪡",
    description: "sewing needle",
    category: "Activities",
    aliases: ["sewing_needle"],
    tags: []
  },
  {
    emoji: "🧶",
    description: "yarn",
    category: "Activities",
    aliases: ["yarn"],
    tags: []
  },
  {
    emoji: "🪢",
    description: "knot",
    category: "Activities",
    aliases: ["knot"],
    tags: []
  },
  {
    emoji: "👓",
    description: "glasses",
    category: "Objects",
    aliases: ["eyeglasses"],
    tags: ["glasses"]
  },
  {
    emoji: "🕶️",
    description: "sunglasses",
    category: "Objects",
    aliases: ["dark_sunglasses"],
    tags: []
  },
  {
    emoji: "🥽",
    description: "goggles",
    category: "Objects",
    aliases: ["goggles"],
    tags: []
  },
  {
    emoji: "🥼",
    description: "lab coat",
    category: "Objects",
    aliases: ["lab_coat"],
    tags: []
  },
  {
    emoji: "🦺",
    description: "safety vest",
    category: "Objects",
    aliases: ["safety_vest"],
    tags: []
  },
  {
    emoji: "👔",
    description: "necktie",
    category: "Objects",
    aliases: ["necktie"],
    tags: ["shirt", "formal"]
  },
  {
    emoji: "👕",
    description: "t-shirt",
    category: "Objects",
    aliases: ["shirt", "tshirt"],
    tags: []
  },
  {
    emoji: "👖",
    description: "jeans",
    category: "Objects",
    aliases: ["jeans"],
    tags: ["pants"]
  },
  {
    emoji: "🧣",
    description: "scarf",
    category: "Objects",
    aliases: ["scarf"],
    tags: []
  },
  {
    emoji: "🧤",
    description: "gloves",
    category: "Objects",
    aliases: ["gloves"],
    tags: []
  },
  {
    emoji: "🧥",
    description: "coat",
    category: "Objects",
    aliases: ["coat"],
    tags: []
  },
  {
    emoji: "🧦",
    description: "socks",
    category: "Objects",
    aliases: ["socks"],
    tags: []
  },
  {
    emoji: "👗",
    description: "dress",
    category: "Objects",
    aliases: ["dress"],
    tags: []
  },
  {
    emoji: "👘",
    description: "kimono",
    category: "Objects",
    aliases: ["kimono"],
    tags: []
  },
  {
    emoji: "🥻",
    description: "sari",
    category: "Objects",
    aliases: ["sari"],
    tags: []
  },
  {
    emoji: "🩱",
    description: "one-piece swimsuit",
    category: "Objects",
    aliases: ["one_piece_swimsuit"],
    tags: []
  },
  {
    emoji: "🩲",
    description: "briefs",
    category: "Objects",
    aliases: ["swim_brief"],
    tags: []
  },
  {
    emoji: "🩳",
    description: "shorts",
    category: "Objects",
    aliases: ["shorts"],
    tags: []
  },
  {
    emoji: "👙",
    description: "bikini",
    category: "Objects",
    aliases: ["bikini"],
    tags: ["beach"]
  },
  {
    emoji: "👚",
    description: "woman’s clothes",
    category: "Objects",
    aliases: ["womans_clothes"],
    tags: []
  },
  {
    emoji: "👛",
    description: "purse",
    category: "Objects",
    aliases: ["purse"],
    tags: []
  },
  {
    emoji: "👜",
    description: "handbag",
    category: "Objects",
    aliases: ["handbag"],
    tags: ["bag"]
  },
  {
    emoji: "👝",
    description: "clutch bag",
    category: "Objects",
    aliases: ["pouch"],
    tags: ["bag"]
  },
  {
    emoji: "🛍️",
    description: "shopping bags",
    category: "Objects",
    aliases: ["shopping"],
    tags: ["bags"]
  },
  {
    emoji: "🎒",
    description: "backpack",
    category: "Objects",
    aliases: ["school_satchel"],
    tags: []
  },
  {
    emoji: "🩴",
    description: "thong sandal",
    category: "Objects",
    aliases: ["thong_sandal"],
    tags: []
  },
  {
    emoji: "👞",
    description: "man’s shoe",
    category: "Objects",
    aliases: ["mans_shoe", "shoe"],
    tags: []
  },
  {
    emoji: "👟",
    description: "running shoe",
    category: "Objects",
    aliases: ["athletic_shoe"],
    tags: ["sneaker", "sport", "running"]
  },
  {
    emoji: "🥾",
    description: "hiking boot",
    category: "Objects",
    aliases: ["hiking_boot"],
    tags: []
  },
  {
    emoji: "🥿",
    description: "flat shoe",
    category: "Objects",
    aliases: ["flat_shoe"],
    tags: []
  },
  {
    emoji: "👠",
    description: "high-heeled shoe",
    category: "Objects",
    aliases: ["high_heel"],
    tags: ["shoe"]
  },
  {
    emoji: "👡",
    description: "woman’s sandal",
    category: "Objects",
    aliases: ["sandal"],
    tags: ["shoe"]
  },
  {
    emoji: "🩰",
    description: "ballet shoes",
    category: "Objects",
    aliases: ["ballet_shoes"],
    tags: []
  },
  {
    emoji: "👢",
    description: "woman’s boot",
    category: "Objects",
    aliases: ["boot"],
    tags: []
  },
  {
    emoji: "👑",
    description: "crown",
    category: "Objects",
    aliases: ["crown"],
    tags: ["king", "queen", "royal"]
  },
  {
    emoji: "👒",
    description: "woman’s hat",
    category: "Objects",
    aliases: ["womans_hat"],
    tags: []
  },
  {
    emoji: "🎩",
    description: "top hat",
    category: "Objects",
    aliases: ["tophat"],
    tags: ["hat", "classy"]
  },
  {
    emoji: "🎓",
    description: "graduation cap",
    category: "Objects",
    aliases: ["mortar_board"],
    tags: ["education", "college", "university", "graduation"]
  },
  {
    emoji: "🧢",
    description: "billed cap",
    category: "Objects",
    aliases: ["billed_cap"],
    tags: []
  },
  {
    emoji: "🪖",
    description: "military helmet",
    category: "Objects",
    aliases: ["military_helmet"],
    tags: []
  },
  {
    emoji: "⛑️",
    description: "rescue worker’s helmet",
    category: "Objects",
    aliases: ["rescue_worker_helmet"],
    tags: []
  },
  {
    emoji: "📿",
    description: "prayer beads",
    category: "Objects",
    aliases: ["prayer_beads"],
    tags: []
  },
  {
    emoji: "💄",
    description: "lipstick",
    category: "Objects",
    aliases: ["lipstick"],
    tags: ["makeup"]
  },
  {
    emoji: "💍",
    description: "ring",
    category: "Objects",
    aliases: ["ring"],
    tags: ["wedding", "marriage", "engaged"]
  },
  {
    emoji: "💎",
    description: "gem stone",
    category: "Objects",
    aliases: ["gem"],
    tags: ["diamond"]
  },
  {
    emoji: "🔇",
    description: "muted speaker",
    category: "Objects",
    aliases: ["mute"],
    tags: ["sound", "volume"]
  },
  {
    emoji: "🔈",
    description: "speaker low volume",
    category: "Objects",
    aliases: ["speaker"],
    tags: []
  },
  {
    emoji: "🔉",
    description: "speaker medium volume",
    category: "Objects",
    aliases: ["sound"],
    tags: ["volume"]
  },
  {
    emoji: "🔊",
    description: "speaker high volume",
    category: "Objects",
    aliases: ["loud_sound"],
    tags: ["volume"]
  },
  {
    emoji: "📢",
    description: "loudspeaker",
    category: "Objects",
    aliases: ["loudspeaker"],
    tags: ["announcement"]
  },
  {
    emoji: "📣",
    description: "megaphone",
    category: "Objects",
    aliases: ["mega"],
    tags: []
  },
  {
    emoji: "📯",
    description: "postal horn",
    category: "Objects",
    aliases: ["postal_horn"],
    tags: []
  },
  {
    emoji: "🔔",
    description: "bell",
    category: "Objects",
    aliases: ["bell"],
    tags: ["sound", "notification"]
  },
  {
    emoji: "🔕",
    description: "bell with slash",
    category: "Objects",
    aliases: ["no_bell"],
    tags: ["volume", "off"]
  },
  {
    emoji: "🎼",
    description: "musical score",
    category: "Objects",
    aliases: ["musical_score"],
    tags: []
  },
  {
    emoji: "🎵",
    description: "musical note",
    category: "Objects",
    aliases: ["musical_note"],
    tags: []
  },
  {
    emoji: "🎶",
    description: "musical notes",
    category: "Objects",
    aliases: ["notes"],
    tags: ["music"]
  },
  {
    emoji: "🎙️",
    description: "studio microphone",
    category: "Objects",
    aliases: ["studio_microphone"],
    tags: ["podcast"]
  },
  {
    emoji: "🎚️",
    description: "level slider",
    category: "Objects",
    aliases: ["level_slider"],
    tags: []
  },
  {
    emoji: "🎛️",
    description: "control knobs",
    category: "Objects",
    aliases: ["control_knobs"],
    tags: []
  },
  {
    emoji: "🎤",
    description: "microphone",
    category: "Objects",
    aliases: ["microphone"],
    tags: ["sing"]
  },
  {
    emoji: "🎧",
    description: "headphone",
    category: "Objects",
    aliases: ["headphones"],
    tags: ["music", "earphones"]
  },
  {
    emoji: "📻",
    description: "radio",
    category: "Objects",
    aliases: ["radio"],
    tags: ["podcast"]
  },
  {
    emoji: "🎷",
    description: "saxophone",
    category: "Objects",
    aliases: ["saxophone"],
    tags: []
  },
  {
    emoji: "🪗",
    description: "accordion",
    category: "Objects",
    aliases: ["accordion"],
    tags: []
  },
  {
    emoji: "🎸",
    description: "guitar",
    category: "Objects",
    aliases: ["guitar"],
    tags: ["rock"]
  },
  {
    emoji: "🎹",
    description: "musical keyboard",
    category: "Objects",
    aliases: ["musical_keyboard"],
    tags: ["piano"]
  },
  {
    emoji: "🎺",
    description: "trumpet",
    category: "Objects",
    aliases: ["trumpet"],
    tags: []
  },
  {
    emoji: "🎻",
    description: "violin",
    category: "Objects",
    aliases: ["violin"],
    tags: []
  },
  {
    emoji: "🪕",
    description: "banjo",
    category: "Objects",
    aliases: ["banjo"],
    tags: []
  },
  {
    emoji: "🥁",
    description: "drum",
    category: "Objects",
    aliases: ["drum"],
    tags: []
  },
  {
    emoji: "🪘",
    description: "long drum",
    category: "Objects",
    aliases: ["long_drum"],
    tags: []
  },
  {
    emoji: "📱",
    description: "mobile phone",
    category: "Objects",
    aliases: ["iphone"],
    tags: ["smartphone", "mobile"]
  },
  {
    emoji: "📲",
    description: "mobile phone with arrow",
    category: "Objects",
    aliases: ["calling"],
    tags: ["call", "incoming"]
  },
  {
    emoji: "☎️",
    description: "telephone",
    category: "Objects",
    aliases: ["phone", "telephone"],
    tags: []
  },
  {
    emoji: "📞",
    description: "telephone receiver",
    category: "Objects",
    aliases: ["telephone_receiver"],
    tags: ["phone", "call"]
  },
  {
    emoji: "📟",
    description: "pager",
    category: "Objects",
    aliases: ["pager"],
    tags: []
  },
  {
    emoji: "📠",
    description: "fax machine",
    category: "Objects",
    aliases: ["fax"],
    tags: []
  },
  {
    emoji: "🔋",
    description: "battery",
    category: "Objects",
    aliases: ["battery"],
    tags: ["power"]
  },
  {
    emoji: "🔌",
    description: "electric plug",
    category: "Objects",
    aliases: ["electric_plug"],
    tags: []
  },
  {
    emoji: "💻",
    description: "laptop",
    category: "Objects",
    aliases: ["computer"],
    tags: ["desktop", "screen"]
  },
  {
    emoji: "🖥️",
    description: "desktop computer",
    category: "Objects",
    aliases: ["desktop_computer"],
    tags: []
  },
  {
    emoji: "🖨️",
    description: "printer",
    category: "Objects",
    aliases: ["printer"],
    tags: []
  },
  {
    emoji: "⌨️",
    description: "keyboard",
    category: "Objects",
    aliases: ["keyboard"],
    tags: []
  },
  {
    emoji: "🖱️",
    description: "computer mouse",
    category: "Objects",
    aliases: ["computer_mouse"],
    tags: []
  },
  {
    emoji: "🖲️",
    description: "trackball",
    category: "Objects",
    aliases: ["trackball"],
    tags: []
  },
  {
    emoji: "💽",
    description: "computer disk",
    category: "Objects",
    aliases: ["minidisc"],
    tags: []
  },
  {
    emoji: "💾",
    description: "floppy disk",
    category: "Objects",
    aliases: ["floppy_disk"],
    tags: ["save"]
  },
  {
    emoji: "💿",
    description: "optical disk",
    category: "Objects",
    aliases: ["cd"],
    tags: []
  },
  {
    emoji: "📀",
    description: "dvd",
    category: "Objects",
    aliases: ["dvd"],
    tags: []
  },
  {
    emoji: "🧮",
    description: "abacus",
    category: "Objects",
    aliases: ["abacus"],
    tags: []
  },
  {
    emoji: "🎥",
    description: "movie camera",
    category: "Objects",
    aliases: ["movie_camera"],
    tags: ["film", "video"]
  },
  {
    emoji: "🎞️",
    description: "film frames",
    category: "Objects",
    aliases: ["film_strip"],
    tags: []
  },
  {
    emoji: "📽️",
    description: "film projector",
    category: "Objects",
    aliases: ["film_projector"],
    tags: []
  },
  {
    emoji: "🎬",
    description: "clapper board",
    category: "Objects",
    aliases: ["clapper"],
    tags: ["film"]
  },
  {
    emoji: "📺",
    description: "television",
    category: "Objects",
    aliases: ["tv"],
    tags: []
  },
  {
    emoji: "📷",
    description: "camera",
    category: "Objects",
    aliases: ["camera"],
    tags: ["photo"]
  },
  {
    emoji: "📸",
    description: "camera with flash",
    category: "Objects",
    aliases: ["camera_flash"],
    tags: ["photo"]
  },
  {
    emoji: "📹",
    description: "video camera",
    category: "Objects",
    aliases: ["video_camera"],
    tags: []
  },
  {
    emoji: "📼",
    description: "videocassette",
    category: "Objects",
    aliases: ["vhs"],
    tags: []
  },
  {
    emoji: "🔍",
    description: "magnifying glass tilted left",
    category: "Objects",
    aliases: ["mag"],
    tags: ["search", "zoom"]
  },
  {
    emoji: "🔎",
    description: "magnifying glass tilted right",
    category: "Objects",
    aliases: ["mag_right"],
    tags: []
  },
  {
    emoji: "🕯️",
    description: "candle",
    category: "Objects",
    aliases: ["candle"],
    tags: []
  },
  {
    emoji: "💡",
    description: "light bulb",
    category: "Objects",
    aliases: ["bulb"],
    tags: ["idea", "light"]
  },
  {
    emoji: "🔦",
    description: "flashlight",
    category: "Objects",
    aliases: ["flashlight"],
    tags: []
  },
  {
    emoji: "🏮",
    description: "red paper lantern",
    category: "Objects",
    aliases: ["izakaya_lantern", "lantern"],
    tags: []
  },
  {
    emoji: "🪔",
    description: "diya lamp",
    category: "Objects",
    aliases: ["diya_lamp"],
    tags: []
  },
  {
    emoji: "📔",
    description: "notebook with decorative cover",
    category: "Objects",
    aliases: ["notebook_with_decorative_cover"],
    tags: []
  },
  {
    emoji: "📕",
    description: "closed book",
    category: "Objects",
    aliases: ["closed_book"],
    tags: []
  },
  {
    emoji: "📖",
    description: "open book",
    category: "Objects",
    aliases: ["book", "open_book"],
    tags: []
  },
  {
    emoji: "📗",
    description: "green book",
    category: "Objects",
    aliases: ["green_book"],
    tags: []
  },
  {
    emoji: "📘",
    description: "blue book",
    category: "Objects",
    aliases: ["blue_book"],
    tags: []
  },
  {
    emoji: "📙",
    description: "orange book",
    category: "Objects",
    aliases: ["orange_book"],
    tags: []
  },
  {
    emoji: "📚",
    description: "books",
    category: "Objects",
    aliases: ["books"],
    tags: ["library"]
  },
  {
    emoji: "📓",
    description: "notebook",
    category: "Objects",
    aliases: ["notebook"],
    tags: []
  },
  {
    emoji: "📒",
    description: "ledger",
    category: "Objects",
    aliases: ["ledger"],
    tags: []
  },
  {
    emoji: "📃",
    description: "page with curl",
    category: "Objects",
    aliases: ["page_with_curl"],
    tags: []
  },
  {
    emoji: "📜",
    description: "scroll",
    category: "Objects",
    aliases: ["scroll"],
    tags: ["document"]
  },
  {
    emoji: "📄",
    description: "page facing up",
    category: "Objects",
    aliases: ["page_facing_up"],
    tags: ["document"]
  },
  {
    emoji: "📰",
    description: "newspaper",
    category: "Objects",
    aliases: ["newspaper"],
    tags: ["press"]
  },
  {
    emoji: "🗞️",
    description: "rolled-up newspaper",
    category: "Objects",
    aliases: ["newspaper_roll"],
    tags: ["press"]
  },
  {
    emoji: "📑",
    description: "bookmark tabs",
    category: "Objects",
    aliases: ["bookmark_tabs"],
    tags: []
  },
  {
    emoji: "🔖",
    description: "bookmark",
    category: "Objects",
    aliases: ["bookmark"],
    tags: []
  },
  {
    emoji: "🏷️",
    description: "label",
    category: "Objects",
    aliases: ["label"],
    tags: ["tag"]
  },
  {
    emoji: "💰",
    description: "money bag",
    category: "Objects",
    aliases: ["moneybag"],
    tags: ["dollar", "cream"]
  },
  {
    emoji: "🪙",
    description: "coin",
    category: "Objects",
    aliases: ["coin"],
    tags: []
  },
  {
    emoji: "💴",
    description: "yen banknote",
    category: "Objects",
    aliases: ["yen"],
    tags: []
  },
  {
    emoji: "💵",
    description: "dollar banknote",
    category: "Objects",
    aliases: ["dollar"],
    tags: ["money"]
  },
  {
    emoji: "💶",
    description: "euro banknote",
    category: "Objects",
    aliases: ["euro"],
    tags: []
  },
  {
    emoji: "💷",
    description: "pound banknote",
    category: "Objects",
    aliases: ["pound"],
    tags: []
  },
  {
    emoji: "💸",
    description: "money with wings",
    category: "Objects",
    aliases: ["money_with_wings"],
    tags: ["dollar"]
  },
  {
    emoji: "💳",
    description: "credit card",
    category: "Objects",
    aliases: ["credit_card"],
    tags: ["subscription"]
  },
  {
    emoji: "🧾",
    description: "receipt",
    category: "Objects",
    aliases: ["receipt"],
    tags: []
  },
  {
    emoji: "💹",
    description: "chart increasing with yen",
    category: "Objects",
    aliases: ["chart"],
    tags: []
  },
  {
    emoji: "✉️",
    description: "envelope",
    category: "Objects",
    aliases: ["envelope"],
    tags: ["letter", "email"]
  },
  {
    emoji: "📧",
    description: "e-mail",
    category: "Objects",
    aliases: ["email", "e-mail"],
    tags: []
  },
  {
    emoji: "📨",
    description: "incoming envelope",
    category: "Objects",
    aliases: ["incoming_envelope"],
    tags: []
  },
  {
    emoji: "📩",
    description: "envelope with arrow",
    category: "Objects",
    aliases: ["envelope_with_arrow"],
    tags: []
  },
  {
    emoji: "📤",
    description: "outbox tray",
    category: "Objects",
    aliases: ["outbox_tray"],
    tags: []
  },
  {
    emoji: "📥",
    description: "inbox tray",
    category: "Objects",
    aliases: ["inbox_tray"],
    tags: []
  },
  {
    emoji: "📦",
    description: "package",
    category: "Objects",
    aliases: ["package"],
    tags: ["shipping"]
  },
  {
    emoji: "📫",
    description: "closed mailbox with raised flag",
    category: "Objects",
    aliases: ["mailbox"],
    tags: []
  },
  {
    emoji: "📪",
    description: "closed mailbox with lowered flag",
    category: "Objects",
    aliases: ["mailbox_closed"],
    tags: []
  },
  {
    emoji: "📬",
    description: "open mailbox with raised flag",
    category: "Objects",
    aliases: ["mailbox_with_mail"],
    tags: []
  },
  {
    emoji: "📭",
    description: "open mailbox with lowered flag",
    category: "Objects",
    aliases: ["mailbox_with_no_mail"],
    tags: []
  },
  {
    emoji: "📮",
    description: "postbox",
    category: "Objects",
    aliases: ["postbox"],
    tags: []
  },
  {
    emoji: "🗳️",
    description: "ballot box with ballot",
    category: "Objects",
    aliases: ["ballot_box"],
    tags: []
  },
  {
    emoji: "✏️",
    description: "pencil",
    category: "Objects",
    aliases: ["pencil2"],
    tags: []
  },
  {
    emoji: "✒️",
    description: "black nib",
    category: "Objects",
    aliases: ["black_nib"],
    tags: []
  },
  {
    emoji: "🖋️",
    description: "fountain pen",
    category: "Objects",
    aliases: ["fountain_pen"],
    tags: []
  },
  {
    emoji: "🖊️",
    description: "pen",
    category: "Objects",
    aliases: ["pen"],
    tags: []
  },
  {
    emoji: "🖌️",
    description: "paintbrush",
    category: "Objects",
    aliases: ["paintbrush"],
    tags: []
  },
  {
    emoji: "🖍️",
    description: "crayon",
    category: "Objects",
    aliases: ["crayon"],
    tags: []
  },
  {
    emoji: "📝",
    description: "memo",
    category: "Objects",
    aliases: ["memo", "pencil"],
    tags: ["document", "note"]
  },
  {
    emoji: "💼",
    description: "briefcase",
    category: "Objects",
    aliases: ["briefcase"],
    tags: ["business"]
  },
  {
    emoji: "📁",
    description: "file folder",
    category: "Objects",
    aliases: ["file_folder"],
    tags: ["directory"]
  },
  {
    emoji: "📂",
    description: "open file folder",
    category: "Objects",
    aliases: ["open_file_folder"],
    tags: []
  },
  {
    emoji: "🗂️",
    description: "card index dividers",
    category: "Objects",
    aliases: ["card_index_dividers"],
    tags: []
  },
  {
    emoji: "📅",
    description: "calendar",
    category: "Objects",
    aliases: ["date"],
    tags: ["calendar", "schedule"]
  },
  {
    emoji: "📆",
    description: "tear-off calendar",
    category: "Objects",
    aliases: ["calendar"],
    tags: ["schedule"]
  },
  {
    emoji: "🗒️",
    description: "spiral notepad",
    category: "Objects",
    aliases: ["spiral_notepad"],
    tags: []
  },
  {
    emoji: "🗓️",
    description: "spiral calendar",
    category: "Objects",
    aliases: ["spiral_calendar"],
    tags: []
  },
  {
    emoji: "📇",
    description: "card index",
    category: "Objects",
    aliases: ["card_index"],
    tags: []
  },
  {
    emoji: "📈",
    description: "chart increasing",
    category: "Objects",
    aliases: ["chart_with_upwards_trend"],
    tags: ["graph", "metrics"]
  },
  {
    emoji: "📉",
    description: "chart decreasing",
    category: "Objects",
    aliases: ["chart_with_downwards_trend"],
    tags: ["graph", "metrics"]
  },
  {
    emoji: "📊",
    description: "bar chart",
    category: "Objects",
    aliases: ["bar_chart"],
    tags: ["stats", "metrics"]
  },
  {
    emoji: "📋",
    description: "clipboard",
    category: "Objects",
    aliases: ["clipboard"],
    tags: []
  },
  {
    emoji: "📌",
    description: "pushpin",
    category: "Objects",
    aliases: ["pushpin"],
    tags: ["location"]
  },
  {
    emoji: "📍",
    description: "round pushpin",
    category: "Objects",
    aliases: ["round_pushpin"],
    tags: ["location"]
  },
  {
    emoji: "📎",
    description: "paperclip",
    category: "Objects",
    aliases: ["paperclip"],
    tags: []
  },
  {
    emoji: "🖇️",
    description: "linked paperclips",
    category: "Objects",
    aliases: ["paperclips"],
    tags: []
  },
  {
    emoji: "📏",
    description: "straight ruler",
    category: "Objects",
    aliases: ["straight_ruler"],
    tags: []
  },
  {
    emoji: "📐",
    description: "triangular ruler",
    category: "Objects",
    aliases: ["triangular_ruler"],
    tags: []
  },
  {
    emoji: "✂️",
    description: "scissors",
    category: "Objects",
    aliases: ["scissors"],
    tags: ["cut"]
  },
  {
    emoji: "🗃️",
    description: "card file box",
    category: "Objects",
    aliases: ["card_file_box"],
    tags: []
  },
  {
    emoji: "🗄️",
    description: "file cabinet",
    category: "Objects",
    aliases: ["file_cabinet"],
    tags: []
  },
  {
    emoji: "🗑️",
    description: "wastebasket",
    category: "Objects",
    aliases: ["wastebasket"],
    tags: ["trash"]
  },
  {
    emoji: "🔒",
    description: "locked",
    category: "Objects",
    aliases: ["lock"],
    tags: ["security", "private"]
  },
  {
    emoji: "🔓",
    description: "unlocked",
    category: "Objects",
    aliases: ["unlock"],
    tags: ["security"]
  },
  {
    emoji: "🔏",
    description: "locked with pen",
    category: "Objects",
    aliases: ["lock_with_ink_pen"],
    tags: []
  },
  {
    emoji: "🔐",
    description: "locked with key",
    category: "Objects",
    aliases: ["closed_lock_with_key"],
    tags: ["security"]
  },
  {
    emoji: "🔑",
    description: "key",
    category: "Objects",
    aliases: ["key"],
    tags: ["lock", "password"]
  },
  {
    emoji: "🗝️",
    description: "old key",
    category: "Objects",
    aliases: ["old_key"],
    tags: []
  },
  {
    emoji: "🔨",
    description: "hammer",
    category: "Objects",
    aliases: ["hammer"],
    tags: ["tool"]
  },
  {
    emoji: "🪓",
    description: "axe",
    category: "Objects",
    aliases: ["axe"],
    tags: []
  },
  {
    emoji: "⛏️",
    description: "pick",
    category: "Objects",
    aliases: ["pick"],
    tags: []
  },
  {
    emoji: "⚒️",
    description: "hammer and pick",
    category: "Objects",
    aliases: ["hammer_and_pick"],
    tags: []
  },
  {
    emoji: "🛠️",
    description: "hammer and wrench",
    category: "Objects",
    aliases: ["hammer_and_wrench"],
    tags: []
  },
  {
    emoji: "🗡️",
    description: "dagger",
    category: "Objects",
    aliases: ["dagger"],
    tags: []
  },
  {
    emoji: "⚔️",
    description: "crossed swords",
    category: "Objects",
    aliases: ["crossed_swords"],
    tags: []
  },
  {
    emoji: "🔫",
    description: "water pistol",
    category: "Objects",
    aliases: ["gun"],
    tags: ["shoot", "weapon"]
  },
  {
    emoji: "🪃",
    description: "boomerang",
    category: "Objects",
    aliases: ["boomerang"],
    tags: []
  },
  {
    emoji: "🏹",
    description: "bow and arrow",
    category: "Objects",
    aliases: ["bow_and_arrow"],
    tags: ["archery"]
  },
  {
    emoji: "🛡️",
    description: "shield",
    category: "Objects",
    aliases: ["shield"],
    tags: []
  },
  {
    emoji: "🪚",
    description: "carpentry saw",
    category: "Objects",
    aliases: ["carpentry_saw"],
    tags: []
  },
  {
    emoji: "🔧",
    description: "wrench",
    category: "Objects",
    aliases: ["wrench"],
    tags: ["tool"]
  },
  {
    emoji: "🪛",
    description: "screwdriver",
    category: "Objects",
    aliases: ["screwdriver"],
    tags: []
  },
  {
    emoji: "🔩",
    description: "nut and bolt",
    category: "Objects",
    aliases: ["nut_and_bolt"],
    tags: []
  },
  {
    emoji: "⚙️",
    description: "gear",
    category: "Objects",
    aliases: ["gear"],
    tags: []
  },
  {
    emoji: "🗜️",
    description: "clamp",
    category: "Objects",
    aliases: ["clamp"],
    tags: []
  },
  {
    emoji: "⚖️",
    description: "balance scale",
    category: "Objects",
    aliases: ["balance_scale"],
    tags: []
  },
  {
    emoji: "🦯",
    description: "white cane",
    category: "Objects",
    aliases: ["probing_cane"],
    tags: []
  },
  {
    emoji: "🔗",
    description: "link",
    category: "Objects",
    aliases: ["link"],
    tags: []
  },
  {
    emoji: "⛓️",
    description: "chains",
    category: "Objects",
    aliases: ["chains"],
    tags: []
  },
  {
    emoji: "🪝",
    description: "hook",
    category: "Objects",
    aliases: ["hook"],
    tags: []
  },
  {
    emoji: "🧰",
    description: "toolbox",
    category: "Objects",
    aliases: ["toolbox"],
    tags: []
  },
  {
    emoji: "🧲",
    description: "magnet",
    category: "Objects",
    aliases: ["magnet"],
    tags: []
  },
  {
    emoji: "🪜",
    description: "ladder",
    category: "Objects",
    aliases: ["ladder"],
    tags: []
  },
  {
    emoji: "⚗️",
    description: "alembic",
    category: "Objects",
    aliases: ["alembic"],
    tags: []
  },
  {
    emoji: "🧪",
    description: "test tube",
    category: "Objects",
    aliases: ["test_tube"],
    tags: []
  },
  {
    emoji: "🧫",
    description: "petri dish",
    category: "Objects",
    aliases: ["petri_dish"],
    tags: []
  },
  {
    emoji: "🧬",
    description: "dna",
    category: "Objects",
    aliases: ["dna"],
    tags: []
  },
  {
    emoji: "🔬",
    description: "microscope",
    category: "Objects",
    aliases: ["microscope"],
    tags: ["science", "laboratory", "investigate"]
  },
  {
    emoji: "🔭",
    description: "telescope",
    category: "Objects",
    aliases: ["telescope"],
    tags: []
  },
  {
    emoji: "📡",
    description: "satellite antenna",
    category: "Objects",
    aliases: ["satellite"],
    tags: ["signal"]
  },
  {
    emoji: "💉",
    description: "syringe",
    category: "Objects",
    aliases: ["syringe"],
    tags: ["health", "hospital", "needle"]
  },
  {
    emoji: "🩸",
    description: "drop of blood",
    category: "Objects",
    aliases: ["drop_of_blood"],
    tags: []
  },
  {
    emoji: "💊",
    description: "pill",
    category: "Objects",
    aliases: ["pill"],
    tags: ["health", "medicine"]
  },
  {
    emoji: "🩹",
    description: "adhesive bandage",
    category: "Objects",
    aliases: ["adhesive_bandage"],
    tags: []
  },
  {
    emoji: "🩺",
    description: "stethoscope",
    category: "Objects",
    aliases: ["stethoscope"],
    tags: []
  },
  {
    emoji: "🚪",
    description: "door",
    category: "Objects",
    aliases: ["door"],
    tags: []
  },
  {
    emoji: "🛗",
    description: "elevator",
    category: "Objects",
    aliases: ["elevator"],
    tags: []
  },
  {
    emoji: "🪞",
    description: "mirror",
    category: "Objects",
    aliases: ["mirror"],
    tags: []
  },
  {
    emoji: "🪟",
    description: "window",
    category: "Objects",
    aliases: ["window"],
    tags: []
  },
  {
    emoji: "🛏️",
    description: "bed",
    category: "Objects",
    aliases: ["bed"],
    tags: []
  },
  {
    emoji: "🛋️",
    description: "couch and lamp",
    category: "Objects",
    aliases: ["couch_and_lamp"],
    tags: []
  },
  {
    emoji: "🪑",
    description: "chair",
    category: "Objects",
    aliases: ["chair"],
    tags: []
  },
  {
    emoji: "🚽",
    description: "toilet",
    category: "Objects",
    aliases: ["toilet"],
    tags: ["wc"]
  },
  {
    emoji: "🪠",
    description: "plunger",
    category: "Objects",
    aliases: ["plunger"],
    tags: []
  },
  {
    emoji: "🚿",
    description: "shower",
    category: "Objects",
    aliases: ["shower"],
    tags: ["bath"]
  },
  {
    emoji: "🛁",
    description: "bathtub",
    category: "Objects",
    aliases: ["bathtub"],
    tags: []
  },
  {
    emoji: "🪤",
    description: "mouse trap",
    category: "Objects",
    aliases: ["mouse_trap"],
    tags: []
  },
  {
    emoji: "🪒",
    description: "razor",
    category: "Objects",
    aliases: ["razor"],
    tags: []
  },
  {
    emoji: "🧴",
    description: "lotion bottle",
    category: "Objects",
    aliases: ["lotion_bottle"],
    tags: []
  },
  {
    emoji: "🧷",
    description: "safety pin",
    category: "Objects",
    aliases: ["safety_pin"],
    tags: []
  },
  {
    emoji: "🧹",
    description: "broom",
    category: "Objects",
    aliases: ["broom"],
    tags: []
  },
  {
    emoji: "🧺",
    description: "basket",
    category: "Objects",
    aliases: ["basket"],
    tags: []
  },
  {
    emoji: "🧻",
    description: "roll of paper",
    category: "Objects",
    aliases: ["roll_of_paper"],
    tags: ["toilet"]
  },
  {
    emoji: "🪣",
    description: "bucket",
    category: "Objects",
    aliases: ["bucket"],
    tags: []
  },
  {
    emoji: "🧼",
    description: "soap",
    category: "Objects",
    aliases: ["soap"],
    tags: []
  },
  {
    emoji: "🪥",
    description: "toothbrush",
    category: "Objects",
    aliases: ["toothbrush"],
    tags: []
  },
  {
    emoji: "🧽",
    description: "sponge",
    category: "Objects",
    aliases: ["sponge"],
    tags: []
  },
  {
    emoji: "🧯",
    description: "fire extinguisher",
    category: "Objects",
    aliases: ["fire_extinguisher"],
    tags: []
  },
  {
    emoji: "🛒",
    description: "shopping cart",
    category: "Objects",
    aliases: ["shopping_cart"],
    tags: []
  },
  {
    emoji: "🚬",
    description: "cigarette",
    category: "Objects",
    aliases: ["smoking"],
    tags: ["cigarette"]
  },
  {
    emoji: "⚰️",
    description: "coffin",
    category: "Objects",
    aliases: ["coffin"],
    tags: ["funeral"]
  },
  {
    emoji: "🪦",
    description: "headstone",
    category: "Objects",
    aliases: ["headstone"],
    tags: []
  },
  {
    emoji: "⚱️",
    description: "funeral urn",
    category: "Objects",
    aliases: ["funeral_urn"],
    tags: []
  },
  {
    emoji: "🗿",
    description: "moai",
    category: "Objects",
    aliases: ["moyai"],
    tags: ["stone"]
  },
  {
    emoji: "🪧",
    description: "placard",
    category: "Objects",
    aliases: ["placard"],
    tags: []
  },
  {
    emoji: "🏧",
    description: "ATM sign",
    category: "Symbols",
    aliases: ["atm"],
    tags: []
  },
  {
    emoji: "🚮",
    description: "litter in bin sign",
    category: "Symbols",
    aliases: ["put_litter_in_its_place"],
    tags: []
  },
  {
    emoji: "🚰",
    description: "potable water",
    category: "Symbols",
    aliases: ["potable_water"],
    tags: []
  },
  {
    emoji: "♿",
    description: "wheelchair symbol",
    category: "Symbols",
    aliases: ["wheelchair"],
    tags: ["accessibility"]
  },
  {
    emoji: "🚹",
    description: "men’s room",
    category: "Symbols",
    aliases: ["mens"],
    tags: []
  },
  {
    emoji: "🚺",
    description: "women’s room",
    category: "Symbols",
    aliases: ["womens"],
    tags: []
  },
  {
    emoji: "🚻",
    description: "restroom",
    category: "Symbols",
    aliases: ["restroom"],
    tags: ["toilet"]
  },
  {
    emoji: "🚼",
    description: "baby symbol",
    category: "Symbols",
    aliases: ["baby_symbol"],
    tags: []
  },
  {
    emoji: "🚾",
    description: "water closet",
    category: "Symbols",
    aliases: ["wc"],
    tags: ["toilet", "restroom"]
  },
  {
    emoji: "🛂",
    description: "passport control",
    category: "Symbols",
    aliases: ["passport_control"],
    tags: []
  },
  {
    emoji: "🛃",
    description: "customs",
    category: "Symbols",
    aliases: ["customs"],
    tags: []
  },
  {
    emoji: "🛄",
    description: "baggage claim",
    category: "Symbols",
    aliases: ["baggage_claim"],
    tags: ["airport"]
  },
  {
    emoji: "🛅",
    description: "left luggage",
    category: "Symbols",
    aliases: ["left_luggage"],
    tags: []
  },
  {
    emoji: "⚠️",
    description: "warning",
    category: "Symbols",
    aliases: ["warning"],
    tags: ["wip"]
  },
  {
    emoji: "🚸",
    description: "children crossing",
    category: "Symbols",
    aliases: ["children_crossing"],
    tags: []
  },
  {
    emoji: "⛔",
    description: "no entry",
    category: "Symbols",
    aliases: ["no_entry"],
    tags: ["limit"]
  },
  {
    emoji: "🚫",
    description: "prohibited",
    category: "Symbols",
    aliases: ["no_entry_sign"],
    tags: ["block", "forbidden"]
  },
  {
    emoji: "🚳",
    description: "no bicycles",
    category: "Symbols",
    aliases: ["no_bicycles"],
    tags: []
  },
  {
    emoji: "🚭",
    description: "no smoking",
    category: "Symbols",
    aliases: ["no_smoking"],
    tags: []
  },
  {
    emoji: "🚯",
    description: "no littering",
    category: "Symbols",
    aliases: ["do_not_litter"],
    tags: []
  },
  {
    emoji: "🚱",
    description: "non-potable water",
    category: "Symbols",
    aliases: ["non-potable_water"],
    tags: []
  },
  {
    emoji: "🚷",
    description: "no pedestrians",
    category: "Symbols",
    aliases: ["no_pedestrians"],
    tags: []
  },
  {
    emoji: "📵",
    description: "no mobile phones",
    category: "Symbols",
    aliases: ["no_mobile_phones"],
    tags: []
  },
  {
    emoji: "🔞",
    description: "no one under eighteen",
    category: "Symbols",
    aliases: ["underage"],
    tags: []
  },
  {
    emoji: "☢️",
    description: "radioactive",
    category: "Symbols",
    aliases: ["radioactive"],
    tags: []
  },
  {
    emoji: "☣️",
    description: "biohazard",
    category: "Symbols",
    aliases: ["biohazard"],
    tags: []
  },
  {
    emoji: "⬆️",
    description: "up arrow",
    category: "Symbols",
    aliases: ["arrow_up"],
    tags: []
  },
  {
    emoji: "↗️",
    description: "up-right arrow",
    category: "Symbols",
    aliases: ["arrow_upper_right"],
    tags: []
  },
  {
    emoji: "➡️",
    description: "right arrow",
    category: "Symbols",
    aliases: ["arrow_right"],
    tags: []
  },
  {
    emoji: "↘️",
    description: "down-right arrow",
    category: "Symbols",
    aliases: ["arrow_lower_right"],
    tags: []
  },
  {
    emoji: "⬇️",
    description: "down arrow",
    category: "Symbols",
    aliases: ["arrow_down"],
    tags: []
  },
  {
    emoji: "↙️",
    description: "down-left arrow",
    category: "Symbols",
    aliases: ["arrow_lower_left"],
    tags: []
  },
  {
    emoji: "⬅️",
    description: "left arrow",
    category: "Symbols",
    aliases: ["arrow_left"],
    tags: []
  },
  {
    emoji: "↖️",
    description: "up-left arrow",
    category: "Symbols",
    aliases: ["arrow_upper_left"],
    tags: []
  },
  {
    emoji: "↕️",
    description: "up-down arrow",
    category: "Symbols",
    aliases: ["arrow_up_down"],
    tags: []
  },
  {
    emoji: "↔️",
    description: "left-right arrow",
    category: "Symbols",
    aliases: ["left_right_arrow"],
    tags: []
  },
  {
    emoji: "↩️",
    description: "right arrow curving left",
    category: "Symbols",
    aliases: ["leftwards_arrow_with_hook"],
    tags: ["return"]
  },
  {
    emoji: "↪️",
    description: "left arrow curving right",
    category: "Symbols",
    aliases: ["arrow_right_hook"],
    tags: []
  },
  {
    emoji: "⤴️",
    description: "right arrow curving up",
    category: "Symbols",
    aliases: ["arrow_heading_up"],
    tags: []
  },
  {
    emoji: "⤵️",
    description: "right arrow curving down",
    category: "Symbols",
    aliases: ["arrow_heading_down"],
    tags: []
  },
  {
    emoji: "🔃",
    description: "clockwise vertical arrows",
    category: "Symbols",
    aliases: ["arrows_clockwise"],
    tags: []
  },
  {
    emoji: "🔄",
    description: "counterclockwise arrows button",
    category: "Symbols",
    aliases: ["arrows_counterclockwise"],
    tags: ["sync"]
  },
  {
    emoji: "🔙",
    description: "BACK arrow",
    category: "Symbols",
    aliases: ["back"],
    tags: []
  },
  {
    emoji: "🔚",
    description: "END arrow",
    category: "Symbols",
    aliases: ["end"],
    tags: []
  },
  {
    emoji: "🔛",
    description: "ON! arrow",
    category: "Symbols",
    aliases: ["on"],
    tags: []
  },
  {
    emoji: "🔜",
    description: "SOON arrow",
    category: "Symbols",
    aliases: ["soon"],
    tags: []
  },
  {
    emoji: "🔝",
    description: "TOP arrow",
    category: "Symbols",
    aliases: ["top"],
    tags: []
  },
  {
    emoji: "🛐",
    description: "place of worship",
    category: "Symbols",
    aliases: ["place_of_worship"],
    tags: []
  },
  {
    emoji: "⚛️",
    description: "atom symbol",
    category: "Symbols",
    aliases: ["atom_symbol"],
    tags: []
  },
  {
    emoji: "🕉️",
    description: "om",
    category: "Symbols",
    aliases: ["om"],
    tags: []
  },
  {
    emoji: "✡️",
    description: "star of David",
    category: "Symbols",
    aliases: ["star_of_david"],
    tags: []
  },
  {
    emoji: "☸️",
    description: "wheel of dharma",
    category: "Symbols",
    aliases: ["wheel_of_dharma"],
    tags: []
  },
  {
    emoji: "☯️",
    description: "yin yang",
    category: "Symbols",
    aliases: ["yin_yang"],
    tags: []
  },
  {
    emoji: "✝️",
    description: "latin cross",
    category: "Symbols",
    aliases: ["latin_cross"],
    tags: []
  },
  {
    emoji: "☦️",
    description: "orthodox cross",
    category: "Symbols",
    aliases: ["orthodox_cross"],
    tags: []
  },
  {
    emoji: "☪️",
    description: "star and crescent",
    category: "Symbols",
    aliases: ["star_and_crescent"],
    tags: []
  },
  {
    emoji: "☮️",
    description: "peace symbol",
    category: "Symbols",
    aliases: ["peace_symbol"],
    tags: []
  },
  {
    emoji: "🕎",
    description: "menorah",
    category: "Symbols",
    aliases: ["menorah"],
    tags: []
  },
  {
    emoji: "🔯",
    description: "dotted six-pointed star",
    category: "Symbols",
    aliases: ["six_pointed_star"],
    tags: []
  },
  {
    emoji: "♈",
    description: "Aries",
    category: "Symbols",
    aliases: ["aries"],
    tags: []
  },
  {
    emoji: "♉",
    description: "Taurus",
    category: "Symbols",
    aliases: ["taurus"],
    tags: []
  },
  {
    emoji: "♊",
    description: "Gemini",
    category: "Symbols",
    aliases: ["gemini"],
    tags: []
  },
  {
    emoji: "♋",
    description: "Cancer",
    category: "Symbols",
    aliases: ["cancer"],
    tags: []
  },
  {
    emoji: "♌",
    description: "Leo",
    category: "Symbols",
    aliases: ["leo"],
    tags: []
  },
  {
    emoji: "♍",
    description: "Virgo",
    category: "Symbols",
    aliases: ["virgo"],
    tags: []
  },
  {
    emoji: "♎",
    description: "Libra",
    category: "Symbols",
    aliases: ["libra"],
    tags: []
  },
  {
    emoji: "♏",
    description: "Scorpio",
    category: "Symbols",
    aliases: ["scorpius"],
    tags: []
  },
  {
    emoji: "♐",
    description: "Sagittarius",
    category: "Symbols",
    aliases: ["sagittarius"],
    tags: []
  },
  {
    emoji: "♑",
    description: "Capricorn",
    category: "Symbols",
    aliases: ["capricorn"],
    tags: []
  },
  {
    emoji: "♒",
    description: "Aquarius",
    category: "Symbols",
    aliases: ["aquarius"],
    tags: []
  },
  {
    emoji: "♓",
    description: "Pisces",
    category: "Symbols",
    aliases: ["pisces"],
    tags: []
  },
  {
    emoji: "⛎",
    description: "Ophiuchus",
    category: "Symbols",
    aliases: ["ophiuchus"],
    tags: []
  },
  {
    emoji: "🔀",
    description: "shuffle tracks button",
    category: "Symbols",
    aliases: ["twisted_rightwards_arrows"],
    tags: ["shuffle"]
  },
  {
    emoji: "🔁",
    description: "repeat button",
    category: "Symbols",
    aliases: ["repeat"],
    tags: ["loop"]
  },
  {
    emoji: "🔂",
    description: "repeat single button",
    category: "Symbols",
    aliases: ["repeat_one"],
    tags: []
  },
  {
    emoji: "▶️",
    description: "play button",
    category: "Symbols",
    aliases: ["arrow_forward"],
    tags: []
  },
  {
    emoji: "⏩",
    description: "fast-forward button",
    category: "Symbols",
    aliases: ["fast_forward"],
    tags: []
  },
  {
    emoji: "⏭️",
    description: "next track button",
    category: "Symbols",
    aliases: ["next_track_button"],
    tags: []
  },
  {
    emoji: "⏯️",
    description: "play or pause button",
    category: "Symbols",
    aliases: ["play_or_pause_button"],
    tags: []
  },
  {
    emoji: "◀️",
    description: "reverse button",
    category: "Symbols",
    aliases: ["arrow_backward"],
    tags: []
  },
  {
    emoji: "⏪",
    description: "fast reverse button",
    category: "Symbols",
    aliases: ["rewind"],
    tags: []
  },
  {
    emoji: "⏮️",
    description: "last track button",
    category: "Symbols",
    aliases: ["previous_track_button"],
    tags: []
  },
  {
    emoji: "🔼",
    description: "upwards button",
    category: "Symbols",
    aliases: ["arrow_up_small"],
    tags: []
  },
  {
    emoji: "⏫",
    description: "fast up button",
    category: "Symbols",
    aliases: ["arrow_double_up"],
    tags: []
  },
  {
    emoji: "🔽",
    description: "downwards button",
    category: "Symbols",
    aliases: ["arrow_down_small"],
    tags: []
  },
  {
    emoji: "⏬",
    description: "fast down button",
    category: "Symbols",
    aliases: ["arrow_double_down"],
    tags: []
  },
  {
    emoji: "⏸️",
    description: "pause button",
    category: "Symbols",
    aliases: ["pause_button"],
    tags: []
  },
  {
    emoji: "⏹️",
    description: "stop button",
    category: "Symbols",
    aliases: ["stop_button"],
    tags: []
  },
  {
    emoji: "⏺️",
    description: "record button",
    category: "Symbols",
    aliases: ["record_button"],
    tags: []
  },
  {
    emoji: "⏏️",
    description: "eject button",
    category: "Symbols",
    aliases: ["eject_button"],
    tags: []
  },
  {
    emoji: "🎦",
    description: "cinema",
    category: "Symbols",
    aliases: ["cinema"],
    tags: ["film", "movie"]
  },
  {
    emoji: "🔅",
    description: "dim button",
    category: "Symbols",
    aliases: ["low_brightness"],
    tags: []
  },
  {
    emoji: "🔆",
    description: "bright button",
    category: "Symbols",
    aliases: ["high_brightness"],
    tags: []
  },
  {
    emoji: "📶",
    description: "antenna bars",
    category: "Symbols",
    aliases: ["signal_strength"],
    tags: ["wifi"]
  },
  {
    emoji: "📳",
    description: "vibration mode",
    category: "Symbols",
    aliases: ["vibration_mode"],
    tags: []
  },
  {
    emoji: "📴",
    description: "mobile phone off",
    category: "Symbols",
    aliases: ["mobile_phone_off"],
    tags: ["mute", "off"]
  },
  {
    emoji: "♀️",
    description: "female sign",
    category: "Symbols",
    aliases: ["female_sign"],
    tags: []
  },
  {
    emoji: "♂️",
    description: "male sign",
    category: "Symbols",
    aliases: ["male_sign"],
    tags: []
  },
  {
    emoji: "⚧️",
    description: "transgender symbol",
    category: "Symbols",
    aliases: ["transgender_symbol"],
    tags: []
  },
  {
    emoji: "✖️",
    description: "multiply",
    category: "Symbols",
    aliases: ["heavy_multiplication_x"],
    tags: []
  },
  {
    emoji: "➕",
    description: "plus",
    category: "Symbols",
    aliases: ["heavy_plus_sign"],
    tags: []
  },
  {
    emoji: "➖",
    description: "minus",
    category: "Symbols",
    aliases: ["heavy_minus_sign"],
    tags: []
  },
  {
    emoji: "➗",
    description: "divide",
    category: "Symbols",
    aliases: ["heavy_division_sign"],
    tags: []
  },
  {
    emoji: "♾️",
    description: "infinity",
    category: "Symbols",
    aliases: ["infinity"],
    tags: []
  },
  {
    emoji: "‼️",
    description: "double exclamation mark",
    category: "Symbols",
    aliases: ["bangbang"],
    tags: []
  },
  {
    emoji: "⁉️",
    description: "exclamation question mark",
    category: "Symbols",
    aliases: ["interrobang"],
    tags: []
  },
  {
    emoji: "❓",
    description: "red question mark",
    category: "Symbols",
    aliases: ["question"],
    tags: ["confused"]
  },
  {
    emoji: "❔",
    description: "white question mark",
    category: "Symbols",
    aliases: ["grey_question"],
    tags: []
  },
  {
    emoji: "❕",
    description: "white exclamation mark",
    category: "Symbols",
    aliases: ["grey_exclamation"],
    tags: []
  },
  {
    emoji: "❗",
    description: "red exclamation mark",
    category: "Symbols",
    aliases: ["exclamation", "heavy_exclamation_mark"],
    tags: ["bang"]
  },
  {
    emoji: "〰️",
    description: "wavy dash",
    category: "Symbols",
    aliases: ["wavy_dash"],
    tags: []
  },
  {
    emoji: "💱",
    description: "currency exchange",
    category: "Symbols",
    aliases: ["currency_exchange"],
    tags: []
  },
  {
    emoji: "💲",
    description: "heavy dollar sign",
    category: "Symbols",
    aliases: ["heavy_dollar_sign"],
    tags: []
  },
  {
    emoji: "⚕️",
    description: "medical symbol",
    category: "Symbols",
    aliases: ["medical_symbol"],
    tags: []
  },
  {
    emoji: "♻️",
    description: "recycling symbol",
    category: "Symbols",
    aliases: ["recycle"],
    tags: ["environment", "green"]
  },
  {
    emoji: "⚜️",
    description: "fleur-de-lis",
    category: "Symbols",
    aliases: ["fleur_de_lis"],
    tags: []
  },
  {
    emoji: "🔱",
    description: "trident emblem",
    category: "Symbols",
    aliases: ["trident"],
    tags: []
  },
  {
    emoji: "📛",
    description: "name badge",
    category: "Symbols",
    aliases: ["name_badge"],
    tags: []
  },
  {
    emoji: "🔰",
    description: "Japanese symbol for beginner",
    category: "Symbols",
    aliases: ["beginner"],
    tags: []
  },
  {
    emoji: "⭕",
    description: "hollow red circle",
    category: "Symbols",
    aliases: ["o"],
    tags: []
  },
  {
    emoji: "✅",
    description: "check mark button",
    category: "Symbols",
    aliases: ["white_check_mark"],
    tags: []
  },
  {
    emoji: "☑️",
    description: "check box with check",
    category: "Symbols",
    aliases: ["ballot_box_with_check"],
    tags: []
  },
  {
    emoji: "✔️",
    description: "check mark",
    category: "Symbols",
    aliases: ["heavy_check_mark"],
    tags: []
  },
  {
    emoji: "❌",
    description: "cross mark",
    category: "Symbols",
    aliases: ["x"],
    tags: []
  },
  {
    emoji: "❎",
    description: "cross mark button",
    category: "Symbols",
    aliases: ["negative_squared_cross_mark"],
    tags: []
  },
  {
    emoji: "➰",
    description: "curly loop",
    category: "Symbols",
    aliases: ["curly_loop"],
    tags: []
  },
  {
    emoji: "➿",
    description: "double curly loop",
    category: "Symbols",
    aliases: ["loop"],
    tags: []
  },
  {
    emoji: "〽️",
    description: "part alternation mark",
    category: "Symbols",
    aliases: ["part_alternation_mark"],
    tags: []
  },
  {
    emoji: "✳️",
    description: "eight-spoked asterisk",
    category: "Symbols",
    aliases: ["eight_spoked_asterisk"],
    tags: []
  },
  {
    emoji: "✴️",
    description: "eight-pointed star",
    category: "Symbols",
    aliases: ["eight_pointed_black_star"],
    tags: []
  },
  {
    emoji: "❇️",
    description: "sparkle",
    category: "Symbols",
    aliases: ["sparkle"],
    tags: []
  },
  {
    emoji: "©️",
    description: "copyright",
    category: "Symbols",
    aliases: ["copyright"],
    tags: []
  },
  {
    emoji: "®️",
    description: "registered",
    category: "Symbols",
    aliases: ["registered"],
    tags: []
  },
  {
    emoji: "™️",
    description: "trade mark",
    category: "Symbols",
    aliases: ["tm"],
    tags: ["trademark"]
  },
  {
    emoji: "#️⃣",
    description: "keycap: #",
    category: "Symbols",
    aliases: ["hash"],
    tags: ["number"]
  },
  {
    emoji: "*️⃣",
    description: "keycap: *",
    category: "Symbols",
    aliases: ["asterisk"],
    tags: []
  },
  {
    emoji: "0️⃣",
    description: "keycap: 0",
    category: "Symbols",
    aliases: ["zero"],
    tags: []
  },
  {
    emoji: "1️⃣",
    description: "keycap: 1",
    category: "Symbols",
    aliases: ["one"],
    tags: []
  },
  {
    emoji: "2️⃣",
    description: "keycap: 2",
    category: "Symbols",
    aliases: ["two"],
    tags: []
  },
  {
    emoji: "3️⃣",
    description: "keycap: 3",
    category: "Symbols",
    aliases: ["three"],
    tags: []
  },
  {
    emoji: "4️⃣",
    description: "keycap: 4",
    category: "Symbols",
    aliases: ["four"],
    tags: []
  },
  {
    emoji: "5️⃣",
    description: "keycap: 5",
    category: "Symbols",
    aliases: ["five"],
    tags: []
  },
  {
    emoji: "6️⃣",
    description: "keycap: 6",
    category: "Symbols",
    aliases: ["six"],
    tags: []
  },
  {
    emoji: "7️⃣",
    description: "keycap: 7",
    category: "Symbols",
    aliases: ["seven"],
    tags: []
  },
  {
    emoji: "8️⃣",
    description: "keycap: 8",
    category: "Symbols",
    aliases: ["eight"],
    tags: []
  },
  {
    emoji: "9️⃣",
    description: "keycap: 9",
    category: "Symbols",
    aliases: ["nine"],
    tags: []
  },
  {
    emoji: "🔟",
    description: "keycap: 10",
    category: "Symbols",
    aliases: ["keycap_ten"],
    tags: []
  },
  {
    emoji: "🔠",
    description: "input latin uppercase",
    category: "Symbols",
    aliases: ["capital_abcd"],
    tags: ["letters"]
  },
  {
    emoji: "🔡",
    description: "input latin lowercase",
    category: "Symbols",
    aliases: ["abcd"],
    tags: []
  },
  {
    emoji: "🔢",
    description: "input numbers",
    category: "Symbols",
    aliases: ["1234"],
    tags: ["numbers"]
  },
  {
    emoji: "🔣",
    description: "input symbols",
    category: "Symbols",
    aliases: ["symbols"],
    tags: []
  },
  {
    emoji: "🔤",
    description: "input latin letters",
    category: "Symbols",
    aliases: ["abc"],
    tags: ["alphabet"]
  },
  {
    emoji: "🅰️",
    description: "A button (blood type)",
    category: "Symbols",
    aliases: ["a"],
    tags: []
  },
  {
    emoji: "🆎",
    description: "AB button (blood type)",
    category: "Symbols",
    aliases: ["ab"],
    tags: []
  },
  {
    emoji: "🅱️",
    description: "B button (blood type)",
    category: "Symbols",
    aliases: ["b"],
    tags: []
  },
  {
    emoji: "🆑",
    description: "CL button",
    category: "Symbols",
    aliases: ["cl"],
    tags: []
  },
  {
    emoji: "🆒",
    description: "COOL button",
    category: "Symbols",
    aliases: ["cool"],
    tags: []
  },
  {
    emoji: "🆓",
    description: "FREE button",
    category: "Symbols",
    aliases: ["free"],
    tags: []
  },
  {
    emoji: "ℹ️",
    description: "information",
    category: "Symbols",
    aliases: ["information_source"],
    tags: []
  },
  {
    emoji: "🆔",
    description: "ID button",
    category: "Symbols",
    aliases: ["id"],
    tags: []
  },
  {
    emoji: "Ⓜ️",
    description: "circled M",
    category: "Symbols",
    aliases: ["m"],
    tags: []
  },
  {
    emoji: "🆕",
    description: "NEW button",
    category: "Symbols",
    aliases: ["new"],
    tags: ["fresh"]
  },
  {
    emoji: "🆖",
    description: "NG button",
    category: "Symbols",
    aliases: ["ng"],
    tags: []
  },
  {
    emoji: "🅾️",
    description: "O button (blood type)",
    category: "Symbols",
    aliases: ["o2"],
    tags: []
  },
  {
    emoji: "🆗",
    description: "OK button",
    category: "Symbols",
    aliases: ["ok"],
    tags: ["yes"]
  },
  {
    emoji: "🅿️",
    description: "P button",
    category: "Symbols",
    aliases: ["parking"],
    tags: []
  },
  {
    emoji: "🆘",
    description: "SOS button",
    category: "Symbols",
    aliases: ["sos"],
    tags: ["help", "emergency"]
  },
  {
    emoji: "🆙",
    description: "UP! button",
    category: "Symbols",
    aliases: ["up"],
    tags: []
  },
  {
    emoji: "🆚",
    description: "VS button",
    category: "Symbols",
    aliases: ["vs"],
    tags: []
  },
  {
    emoji: "🈁",
    description: "Japanese “here” button",
    category: "Symbols",
    aliases: ["koko"],
    tags: []
  },
  {
    emoji: "🈂️",
    description: "Japanese “service charge” button",
    category: "Symbols",
    aliases: ["sa"],
    tags: []
  },
  {
    emoji: "🈷️",
    description: "Japanese “monthly amount” button",
    category: "Symbols",
    aliases: ["u6708"],
    tags: []
  },
  {
    emoji: "🈶",
    description: "Japanese “not free of charge” button",
    category: "Symbols",
    aliases: ["u6709"],
    tags: []
  },
  {
    emoji: "🈯",
    description: "Japanese “reserved” button",
    category: "Symbols",
    aliases: ["u6307"],
    tags: []
  },
  {
    emoji: "🉐",
    description: "Japanese “bargain” button",
    category: "Symbols",
    aliases: ["ideograph_advantage"],
    tags: []
  },
  {
    emoji: "🈹",
    description: "Japanese “discount” button",
    category: "Symbols",
    aliases: ["u5272"],
    tags: []
  },
  {
    emoji: "🈚",
    description: "Japanese “free of charge” button",
    category: "Symbols",
    aliases: ["u7121"],
    tags: []
  },
  {
    emoji: "🈲",
    description: "Japanese “prohibited” button",
    category: "Symbols",
    aliases: ["u7981"],
    tags: []
  },
  {
    emoji: "🉑",
    description: "Japanese “acceptable” button",
    category: "Symbols",
    aliases: ["accept"],
    tags: []
  },
  {
    emoji: "🈸",
    description: "Japanese “application” button",
    category: "Symbols",
    aliases: ["u7533"],
    tags: []
  },
  {
    emoji: "🈴",
    description: "Japanese “passing grade” button",
    category: "Symbols",
    aliases: ["u5408"],
    tags: []
  },
  {
    emoji: "🈳",
    description: "Japanese “vacancy” button",
    category: "Symbols",
    aliases: ["u7a7a"],
    tags: []
  },
  {
    emoji: "㊗️",
    description: "Japanese “congratulations” button",
    category: "Symbols",
    aliases: ["congratulations"],
    tags: []
  },
  {
    emoji: "㊙️",
    description: "Japanese “secret” button",
    category: "Symbols",
    aliases: ["secret"],
    tags: []
  },
  {
    emoji: "🈺",
    description: "Japanese “open for business” button",
    category: "Symbols",
    aliases: ["u55b6"],
    tags: []
  },
  {
    emoji: "🈵",
    description: "Japanese “no vacancy” button",
    category: "Symbols",
    aliases: ["u6e80"],
    tags: []
  },
  {
    emoji: "🔴",
    description: "red circle",
    category: "Symbols",
    aliases: ["red_circle"],
    tags: []
  },
  {
    emoji: "🟠",
    description: "orange circle",
    category: "Symbols",
    aliases: ["orange_circle"],
    tags: []
  },
  {
    emoji: "🟡",
    description: "yellow circle",
    category: "Symbols",
    aliases: ["yellow_circle"],
    tags: []
  },
  {
    emoji: "🟢",
    description: "green circle",
    category: "Symbols",
    aliases: ["green_circle"],
    tags: []
  },
  {
    emoji: "🔵",
    description: "blue circle",
    category: "Symbols",
    aliases: ["large_blue_circle"],
    tags: []
  },
  {
    emoji: "🟣",
    description: "purple circle",
    category: "Symbols",
    aliases: ["purple_circle"],
    tags: []
  },
  {
    emoji: "🟤",
    description: "brown circle",
    category: "Symbols",
    aliases: ["brown_circle"],
    tags: []
  },
  {
    emoji: "⚫",
    description: "black circle",
    category: "Symbols",
    aliases: ["black_circle"],
    tags: []
  },
  {
    emoji: "⚪",
    description: "white circle",
    category: "Symbols",
    aliases: ["white_circle"],
    tags: []
  },
  {
    emoji: "🟥",
    description: "red square",
    category: "Symbols",
    aliases: ["red_square"],
    tags: []
  },
  {
    emoji: "🟧",
    description: "orange square",
    category: "Symbols",
    aliases: ["orange_square"],
    tags: []
  },
  {
    emoji: "🟨",
    description: "yellow square",
    category: "Symbols",
    aliases: ["yellow_square"],
    tags: []
  },
  {
    emoji: "🟩",
    description: "green square",
    category: "Symbols",
    aliases: ["green_square"],
    tags: []
  },
  {
    emoji: "🟦",
    description: "blue square",
    category: "Symbols",
    aliases: ["blue_square"],
    tags: []
  },
  {
    emoji: "🟪",
    description: "purple square",
    category: "Symbols",
    aliases: ["purple_square"],
    tags: []
  },
  {
    emoji: "🟫",
    description: "brown square",
    category: "Symbols",
    aliases: ["brown_square"],
    tags: []
  },
  {
    emoji: "⬛",
    description: "black large square",
    category: "Symbols",
    aliases: ["black_large_square"],
    tags: []
  },
  {
    emoji: "⬜",
    description: "white large square",
    category: "Symbols",
    aliases: ["white_large_square"],
    tags: []
  },
  {
    emoji: "◼️",
    description: "black medium square",
    category: "Symbols",
    aliases: ["black_medium_square"],
    tags: []
  },
  {
    emoji: "◻️",
    description: "white medium square",
    category: "Symbols",
    aliases: ["white_medium_square"],
    tags: []
  },
  {
    emoji: "◾",
    description: "black medium-small square",
    category: "Symbols",
    aliases: ["black_medium_small_square"],
    tags: []
  },
  {
    emoji: "◽",
    description: "white medium-small square",
    category: "Symbols",
    aliases: ["white_medium_small_square"],
    tags: []
  },
  {
    emoji: "▪️",
    description: "black small square",
    category: "Symbols",
    aliases: ["black_small_square"],
    tags: []
  },
  {
    emoji: "▫️",
    description: "white small square",
    category: "Symbols",
    aliases: ["white_small_square"],
    tags: []
  },
  {
    emoji: "🔶",
    description: "large orange diamond",
    category: "Symbols",
    aliases: ["large_orange_diamond"],
    tags: []
  },
  {
    emoji: "🔷",
    description: "large blue diamond",
    category: "Symbols",
    aliases: ["large_blue_diamond"],
    tags: []
  },
  {
    emoji: "🔸",
    description: "small orange diamond",
    category: "Symbols",
    aliases: ["small_orange_diamond"],
    tags: []
  },
  {
    emoji: "🔹",
    description: "small blue diamond",
    category: "Symbols",
    aliases: ["small_blue_diamond"],
    tags: []
  },
  {
    emoji: "🔺",
    description: "red triangle pointed up",
    category: "Symbols",
    aliases: ["small_red_triangle"],
    tags: []
  },
  {
    emoji: "🔻",
    description: "red triangle pointed down",
    category: "Symbols",
    aliases: ["small_red_triangle_down"],
    tags: []
  },
  {
    emoji: "💠",
    description: "diamond with a dot",
    category: "Symbols",
    aliases: ["diamond_shape_with_a_dot_inside"],
    tags: []
  },
  {
    emoji: "🔘",
    description: "radio button",
    category: "Symbols",
    aliases: ["radio_button"],
    tags: []
  },
  {
    emoji: "🔳",
    description: "white square button",
    category: "Symbols",
    aliases: ["white_square_button"],
    tags: []
  },
  {
    emoji: "🔲",
    description: "black square button",
    category: "Symbols",
    aliases: ["black_square_button"],
    tags: []
  },
  {
    emoji: "🏁",
    description: "chequered flag",
    category: "Flags",
    aliases: ["checkered_flag"],
    tags: ["milestone", "finish"]
  },
  {
    emoji: "🚩",
    description: "triangular flag",
    category: "Flags",
    aliases: ["triangular_flag_on_post"],
    tags: []
  },
  {
    emoji: "🎌",
    description: "crossed flags",
    category: "Flags",
    aliases: ["crossed_flags"],
    tags: []
  },
  {
    emoji: "🏴",
    description: "black flag",
    category: "Flags",
    aliases: ["black_flag"],
    tags: []
  },
  {
    emoji: "🏳️",
    description: "white flag",
    category: "Flags",
    aliases: ["white_flag"],
    tags: []
  },
  {
    emoji: "🏳️‍🌈",
    description: "rainbow flag",
    category: "Flags",
    aliases: ["rainbow_flag"],
    tags: ["pride"]
  },
  {
    emoji: "🏳️‍⚧️",
    description: "transgender flag",
    category: "Flags",
    aliases: ["transgender_flag"],
    tags: []
  },
  {
    emoji: "🏴‍☠️",
    description: "pirate flag",
    category: "Flags",
    aliases: ["pirate_flag"],
    tags: []
  },
  {
    emoji: "🇦🇨",
    description: "flag: Ascension Island",
    category: "Flags",
    aliases: ["ascension_island"],
    tags: []
  },
  {
    emoji: "🇦🇩",
    description: "flag: Andorra",
    category: "Flags",
    aliases: ["andorra"],
    tags: []
  },
  {
    emoji: "🇦🇪",
    description: "flag: United Arab Emirates",
    category: "Flags",
    aliases: ["united_arab_emirates"],
    tags: []
  },
  {
    emoji: "🇦🇫",
    description: "flag: Afghanistan",
    category: "Flags",
    aliases: ["afghanistan"],
    tags: []
  },
  {
    emoji: "🇦🇬",
    description: "flag: Antigua & Barbuda",
    category: "Flags",
    aliases: ["antigua_barbuda"],
    tags: []
  },
  {
    emoji: "🇦🇮",
    description: "flag: Anguilla",
    category: "Flags",
    aliases: ["anguilla"],
    tags: []
  },
  {
    emoji: "🇦🇱",
    description: "flag: Albania",
    category: "Flags",
    aliases: ["albania"],
    tags: []
  },
  {
    emoji: "🇦🇲",
    description: "flag: Armenia",
    category: "Flags",
    aliases: ["armenia"],
    tags: []
  },
  {
    emoji: "🇦🇴",
    description: "flag: Angola",
    category: "Flags",
    aliases: ["angola"],
    tags: []
  },
  {
    emoji: "🇦🇶",
    description: "flag: Antarctica",
    category: "Flags",
    aliases: ["antarctica"],
    tags: []
  },
  {
    emoji: "🇦🇷",
    description: "flag: Argentina",
    category: "Flags",
    aliases: ["argentina"],
    tags: []
  },
  {
    emoji: "🇦🇸",
    description: "flag: American Samoa",
    category: "Flags",
    aliases: ["american_samoa"],
    tags: []
  },
  {
    emoji: "🇦🇹",
    description: "flag: Austria",
    category: "Flags",
    aliases: ["austria"],
    tags: []
  },
  {
    emoji: "🇦🇺",
    description: "flag: Australia",
    category: "Flags",
    aliases: ["australia"],
    tags: []
  },
  {
    emoji: "🇦🇼",
    description: "flag: Aruba",
    category: "Flags",
    aliases: ["aruba"],
    tags: []
  },
  {
    emoji: "🇦🇽",
    description: "flag: Åland Islands",
    category: "Flags",
    aliases: ["aland_islands"],
    tags: []
  },
  {
    emoji: "🇦🇿",
    description: "flag: Azerbaijan",
    category: "Flags",
    aliases: ["azerbaijan"],
    tags: []
  },
  {
    emoji: "🇧🇦",
    description: "flag: Bosnia & Herzegovina",
    category: "Flags",
    aliases: ["bosnia_herzegovina"],
    tags: []
  },
  {
    emoji: "🇧🇧",
    description: "flag: Barbados",
    category: "Flags",
    aliases: ["barbados"],
    tags: []
  },
  {
    emoji: "🇧🇩",
    description: "flag: Bangladesh",
    category: "Flags",
    aliases: ["bangladesh"],
    tags: []
  },
  {
    emoji: "🇧🇪",
    description: "flag: Belgium",
    category: "Flags",
    aliases: ["belgium"],
    tags: []
  },
  {
    emoji: "🇧🇫",
    description: "flag: Burkina Faso",
    category: "Flags",
    aliases: ["burkina_faso"],
    tags: []
  },
  {
    emoji: "🇧🇬",
    description: "flag: Bulgaria",
    category: "Flags",
    aliases: ["bulgaria"],
    tags: []
  },
  {
    emoji: "🇧🇭",
    description: "flag: Bahrain",
    category: "Flags",
    aliases: ["bahrain"],
    tags: []
  },
  {
    emoji: "🇧🇮",
    description: "flag: Burundi",
    category: "Flags",
    aliases: ["burundi"],
    tags: []
  },
  {
    emoji: "🇧🇯",
    description: "flag: Benin",
    category: "Flags",
    aliases: ["benin"],
    tags: []
  },
  {
    emoji: "🇧🇱",
    description: "flag: St. Barthélemy",
    category: "Flags",
    aliases: ["st_barthelemy"],
    tags: []
  },
  {
    emoji: "🇧🇲",
    description: "flag: Bermuda",
    category: "Flags",
    aliases: ["bermuda"],
    tags: []
  },
  {
    emoji: "🇧🇳",
    description: "flag: Brunei",
    category: "Flags",
    aliases: ["brunei"],
    tags: []
  },
  {
    emoji: "🇧🇴",
    description: "flag: Bolivia",
    category: "Flags",
    aliases: ["bolivia"],
    tags: []
  },
  {
    emoji: "🇧🇶",
    description: "flag: Caribbean Netherlands",
    category: "Flags",
    aliases: ["caribbean_netherlands"],
    tags: []
  },
  {
    emoji: "🇧🇷",
    description: "flag: Brazil",
    category: "Flags",
    aliases: ["brazil"],
    tags: []
  },
  {
    emoji: "🇧🇸",
    description: "flag: Bahamas",
    category: "Flags",
    aliases: ["bahamas"],
    tags: []
  },
  {
    emoji: "🇧🇹",
    description: "flag: Bhutan",
    category: "Flags",
    aliases: ["bhutan"],
    tags: []
  },
  {
    emoji: "🇧🇻",
    description: "flag: Bouvet Island",
    category: "Flags",
    aliases: ["bouvet_island"],
    tags: []
  },
  {
    emoji: "🇧🇼",
    description: "flag: Botswana",
    category: "Flags",
    aliases: ["botswana"],
    tags: []
  },
  {
    emoji: "🇧🇾",
    description: "flag: Belarus",
    category: "Flags",
    aliases: ["belarus"],
    tags: []
  },
  {
    emoji: "🇧🇿",
    description: "flag: Belize",
    category: "Flags",
    aliases: ["belize"],
    tags: []
  },
  {
    emoji: "🇨🇦",
    description: "flag: Canada",
    category: "Flags",
    aliases: ["canada"],
    tags: []
  },
  {
    emoji: "🇨🇨",
    description: "flag: Cocos (Keeling) Islands",
    category: "Flags",
    aliases: ["cocos_islands"],
    tags: ["keeling"]
  },
  {
    emoji: "🇨🇩",
    description: "flag: Congo - Kinshasa",
    category: "Flags",
    aliases: ["congo_kinshasa"],
    tags: []
  },
  {
    emoji: "🇨🇫",
    description: "flag: Central African Republic",
    category: "Flags",
    aliases: ["central_african_republic"],
    tags: []
  },
  {
    emoji: "🇨🇬",
    description: "flag: Congo - Brazzaville",
    category: "Flags",
    aliases: ["congo_brazzaville"],
    tags: []
  },
  {
    emoji: "🇨🇭",
    description: "flag: Switzerland",
    category: "Flags",
    aliases: ["switzerland"],
    tags: []
  },
  {
    emoji: "🇨🇮",
    description: "flag: Côte d’Ivoire",
    category: "Flags",
    aliases: ["cote_divoire"],
    tags: ["ivory"]
  },
  {
    emoji: "🇨🇰",
    description: "flag: Cook Islands",
    category: "Flags",
    aliases: ["cook_islands"],
    tags: []
  },
  {
    emoji: "🇨🇱",
    description: "flag: Chile",
    category: "Flags",
    aliases: ["chile"],
    tags: []
  },
  {
    emoji: "🇨🇲",
    description: "flag: Cameroon",
    category: "Flags",
    aliases: ["cameroon"],
    tags: []
  },
  {
    emoji: "🇨🇳",
    description: "flag: China",
    category: "Flags",
    aliases: ["cn"],
    tags: ["china"]
  },
  {
    emoji: "🇨🇴",
    description: "flag: Colombia",
    category: "Flags",
    aliases: ["colombia"],
    tags: []
  },
  {
    emoji: "🇨🇵",
    description: "flag: Clipperton Island",
    category: "Flags",
    aliases: ["clipperton_island"],
    tags: []
  },
  {
    emoji: "🇨🇷",
    description: "flag: Costa Rica",
    category: "Flags",
    aliases: ["costa_rica"],
    tags: []
  },
  {
    emoji: "🇨🇺",
    description: "flag: Cuba",
    category: "Flags",
    aliases: ["cuba"],
    tags: []
  },
  {
    emoji: "🇨🇻",
    description: "flag: Cape Verde",
    category: "Flags",
    aliases: ["cape_verde"],
    tags: []
  },
  {
    emoji: "🇨🇼",
    description: "flag: Curaçao",
    category: "Flags",
    aliases: ["curacao"],
    tags: []
  },
  {
    emoji: "🇨🇽",
    description: "flag: Christmas Island",
    category: "Flags",
    aliases: ["christmas_island"],
    tags: []
  },
  {
    emoji: "🇨🇾",
    description: "flag: Cyprus",
    category: "Flags",
    aliases: ["cyprus"],
    tags: []
  },
  {
    emoji: "🇨🇿",
    description: "flag: Czechia",
    category: "Flags",
    aliases: ["czech_republic"],
    tags: []
  },
  {
    emoji: "🇩🇪",
    description: "flag: Germany",
    category: "Flags",
    aliases: ["de"],
    tags: ["flag", "germany"]
  },
  {
    emoji: "🇩🇬",
    description: "flag: Diego Garcia",
    category: "Flags",
    aliases: ["diego_garcia"],
    tags: []
  },
  {
    emoji: "🇩🇯",
    description: "flag: Djibouti",
    category: "Flags",
    aliases: ["djibouti"],
    tags: []
  },
  {
    emoji: "🇩🇰",
    description: "flag: Denmark",
    category: "Flags",
    aliases: ["denmark"],
    tags: []
  },
  {
    emoji: "🇩🇲",
    description: "flag: Dominica",
    category: "Flags",
    aliases: ["dominica"],
    tags: []
  },
  {
    emoji: "🇩🇴",
    description: "flag: Dominican Republic",
    category: "Flags",
    aliases: ["dominican_republic"],
    tags: []
  },
  {
    emoji: "🇩🇿",
    description: "flag: Algeria",
    category: "Flags",
    aliases: ["algeria"],
    tags: []
  },
  {
    emoji: "🇪🇦",
    description: "flag: Ceuta & Melilla",
    category: "Flags",
    aliases: ["ceuta_melilla"],
    tags: []
  },
  {
    emoji: "🇪🇨",
    description: "flag: Ecuador",
    category: "Flags",
    aliases: ["ecuador"],
    tags: []
  },
  {
    emoji: "🇪🇪",
    description: "flag: Estonia",
    category: "Flags",
    aliases: ["estonia"],
    tags: []
  },
  {
    emoji: "🇪🇬",
    description: "flag: Egypt",
    category: "Flags",
    aliases: ["egypt"],
    tags: []
  },
  {
    emoji: "🇪🇭",
    description: "flag: Western Sahara",
    category: "Flags",
    aliases: ["western_sahara"],
    tags: []
  },
  {
    emoji: "🇪🇷",
    description: "flag: Eritrea",
    category: "Flags",
    aliases: ["eritrea"],
    tags: []
  },
  {
    emoji: "🇪🇸",
    description: "flag: Spain",
    category: "Flags",
    aliases: ["es"],
    tags: ["spain"]
  },
  {
    emoji: "🇪🇹",
    description: "flag: Ethiopia",
    category: "Flags",
    aliases: ["ethiopia"],
    tags: []
  },
  {
    emoji: "🇪🇺",
    description: "flag: European Union",
    category: "Flags",
    aliases: ["eu", "european_union"],
    tags: []
  },
  {
    emoji: "🇫🇮",
    description: "flag: Finland",
    category: "Flags",
    aliases: ["finland"],
    tags: []
  },
  {
    emoji: "🇫🇯",
    description: "flag: Fiji",
    category: "Flags",
    aliases: ["fiji"],
    tags: []
  },
  {
    emoji: "🇫🇰",
    description: "flag: Falkland Islands",
    category: "Flags",
    aliases: ["falkland_islands"],
    tags: []
  },
  {
    emoji: "🇫🇲",
    description: "flag: Micronesia",
    category: "Flags",
    aliases: ["micronesia"],
    tags: []
  },
  {
    emoji: "🇫🇴",
    description: "flag: Faroe Islands",
    category: "Flags",
    aliases: ["faroe_islands"],
    tags: []
  },
  {
    emoji: "🇫🇷",
    description: "flag: France",
    category: "Flags",
    aliases: ["fr"],
    tags: ["france", "french"]
  },
  {
    emoji: "🇬🇦",
    description: "flag: Gabon",
    category: "Flags",
    aliases: ["gabon"],
    tags: []
  },
  {
    emoji: "🇬🇧",
    description: "flag: United Kingdom",
    category: "Flags",
    aliases: ["gb", "uk"],
    tags: ["flag", "british"]
  },
  {
    emoji: "🇬🇩",
    description: "flag: Grenada",
    category: "Flags",
    aliases: ["grenada"],
    tags: []
  },
  {
    emoji: "🇬🇪",
    description: "flag: Georgia",
    category: "Flags",
    aliases: ["georgia"],
    tags: []
  },
  {
    emoji: "🇬🇫",
    description: "flag: French Guiana",
    category: "Flags",
    aliases: ["french_guiana"],
    tags: []
  },
  {
    emoji: "🇬🇬",
    description: "flag: Guernsey",
    category: "Flags",
    aliases: ["guernsey"],
    tags: []
  },
  {
    emoji: "🇬🇭",
    description: "flag: Ghana",
    category: "Flags",
    aliases: ["ghana"],
    tags: []
  },
  {
    emoji: "🇬🇮",
    description: "flag: Gibraltar",
    category: "Flags",
    aliases: ["gibraltar"],
    tags: []
  },
  {
    emoji: "🇬🇱",
    description: "flag: Greenland",
    category: "Flags",
    aliases: ["greenland"],
    tags: []
  },
  {
    emoji: "🇬🇲",
    description: "flag: Gambia",
    category: "Flags",
    aliases: ["gambia"],
    tags: []
  },
  {
    emoji: "🇬🇳",
    description: "flag: Guinea",
    category: "Flags",
    aliases: ["guinea"],
    tags: []
  },
  {
    emoji: "🇬🇵",
    description: "flag: Guadeloupe",
    category: "Flags",
    aliases: ["guadeloupe"],
    tags: []
  },
  {
    emoji: "🇬🇶",
    description: "flag: Equatorial Guinea",
    category: "Flags",
    aliases: ["equatorial_guinea"],
    tags: []
  },
  {
    emoji: "🇬🇷",
    description: "flag: Greece",
    category: "Flags",
    aliases: ["greece"],
    tags: []
  },
  {
    emoji: "🇬🇸",
    description: "flag: South Georgia & South Sandwich Islands",
    category: "Flags",
    aliases: ["south_georgia_south_sandwich_islands"],
    tags: []
  },
  {
    emoji: "🇬🇹",
    description: "flag: Guatemala",
    category: "Flags",
    aliases: ["guatemala"],
    tags: []
  },
  {
    emoji: "🇬🇺",
    description: "flag: Guam",
    category: "Flags",
    aliases: ["guam"],
    tags: []
  },
  {
    emoji: "🇬🇼",
    description: "flag: Guinea-Bissau",
    category: "Flags",
    aliases: ["guinea_bissau"],
    tags: []
  },
  {
    emoji: "🇬🇾",
    description: "flag: Guyana",
    category: "Flags",
    aliases: ["guyana"],
    tags: []
  },
  {
    emoji: "🇭🇰",
    description: "flag: Hong Kong SAR China",
    category: "Flags",
    aliases: ["hong_kong"],
    tags: []
  },
  {
    emoji: "🇭🇲",
    description: "flag: Heard & McDonald Islands",
    category: "Flags",
    aliases: ["heard_mcdonald_islands"],
    tags: []
  },
  {
    emoji: "🇭🇳",
    description: "flag: Honduras",
    category: "Flags",
    aliases: ["honduras"],
    tags: []
  },
  {
    emoji: "🇭🇷",
    description: "flag: Croatia",
    category: "Flags",
    aliases: ["croatia"],
    tags: []
  },
  {
    emoji: "🇭🇹",
    description: "flag: Haiti",
    category: "Flags",
    aliases: ["haiti"],
    tags: []
  },
  {
    emoji: "🇭🇺",
    description: "flag: Hungary",
    category: "Flags",
    aliases: ["hungary"],
    tags: []
  },
  {
    emoji: "🇮🇨",
    description: "flag: Canary Islands",
    category: "Flags",
    aliases: ["canary_islands"],
    tags: []
  },
  {
    emoji: "🇮🇩",
    description: "flag: Indonesia",
    category: "Flags",
    aliases: ["indonesia"],
    tags: []
  },
  {
    emoji: "🇮🇪",
    description: "flag: Ireland",
    category: "Flags",
    aliases: ["ireland"],
    tags: []
  },
  {
    emoji: "🇮🇱",
    description: "flag: Israel",
    category: "Flags",
    aliases: ["israel"],
    tags: []
  },
  {
    emoji: "🇮🇲",
    description: "flag: Isle of Man",
    category: "Flags",
    aliases: ["isle_of_man"],
    tags: []
  },
  {
    emoji: "🇮🇳",
    description: "flag: India",
    category: "Flags",
    aliases: ["india"],
    tags: []
  },
  {
    emoji: "🇮🇴",
    description: "flag: British Indian Ocean Territory",
    category: "Flags",
    aliases: ["british_indian_ocean_territory"],
    tags: []
  },
  {
    emoji: "🇮🇶",
    description: "flag: Iraq",
    category: "Flags",
    aliases: ["iraq"],
    tags: []
  },
  {
    emoji: "🇮🇷",
    description: "flag: Iran",
    category: "Flags",
    aliases: ["iran"],
    tags: []
  },
  {
    emoji: "🇮🇸",
    description: "flag: Iceland",
    category: "Flags",
    aliases: ["iceland"],
    tags: []
  },
  {
    emoji: "🇮🇹",
    description: "flag: Italy",
    category: "Flags",
    aliases: ["it"],
    tags: ["italy"]
  },
  {
    emoji: "🇯🇪",
    description: "flag: Jersey",
    category: "Flags",
    aliases: ["jersey"],
    tags: []
  },
  {
    emoji: "🇯🇲",
    description: "flag: Jamaica",
    category: "Flags",
    aliases: ["jamaica"],
    tags: []
  },
  {
    emoji: "🇯🇴",
    description: "flag: Jordan",
    category: "Flags",
    aliases: ["jordan"],
    tags: []
  },
  {
    emoji: "🇯🇵",
    description: "flag: Japan",
    category: "Flags",
    aliases: ["jp"],
    tags: ["japan"]
  },
  {
    emoji: "🇰🇪",
    description: "flag: Kenya",
    category: "Flags",
    aliases: ["kenya"],
    tags: []
  },
  {
    emoji: "🇰🇬",
    description: "flag: Kyrgyzstan",
    category: "Flags",
    aliases: ["kyrgyzstan"],
    tags: []
  },
  {
    emoji: "🇰🇭",
    description: "flag: Cambodia",
    category: "Flags",
    aliases: ["cambodia"],
    tags: []
  },
  {
    emoji: "🇰🇮",
    description: "flag: Kiribati",
    category: "Flags",
    aliases: ["kiribati"],
    tags: []
  },
  {
    emoji: "🇰🇲",
    description: "flag: Comoros",
    category: "Flags",
    aliases: ["comoros"],
    tags: []
  },
  {
    emoji: "🇰🇳",
    description: "flag: St. Kitts & Nevis",
    category: "Flags",
    aliases: ["st_kitts_nevis"],
    tags: []
  },
  {
    emoji: "🇰🇵",
    description: "flag: North Korea",
    category: "Flags",
    aliases: ["north_korea"],
    tags: []
  },
  {
    emoji: "🇰🇷",
    description: "flag: South Korea",
    category: "Flags",
    aliases: ["kr"],
    tags: ["korea"]
  },
  {
    emoji: "🇰🇼",
    description: "flag: Kuwait",
    category: "Flags",
    aliases: ["kuwait"],
    tags: []
  },
  {
    emoji: "🇰🇾",
    description: "flag: Cayman Islands",
    category: "Flags",
    aliases: ["cayman_islands"],
    tags: []
  },
  {
    emoji: "🇰🇿",
    description: "flag: Kazakhstan",
    category: "Flags",
    aliases: ["kazakhstan"],
    tags: []
  },
  {
    emoji: "🇱🇦",
    description: "flag: Laos",
    category: "Flags",
    aliases: ["laos"],
    tags: []
  },
  {
    emoji: "🇱🇧",
    description: "flag: Lebanon",
    category: "Flags",
    aliases: ["lebanon"],
    tags: []
  },
  {
    emoji: "🇱🇨",
    description: "flag: St. Lucia",
    category: "Flags",
    aliases: ["st_lucia"],
    tags: []
  },
  {
    emoji: "🇱🇮",
    description: "flag: Liechtenstein",
    category: "Flags",
    aliases: ["liechtenstein"],
    tags: []
  },
  {
    emoji: "🇱🇰",
    description: "flag: Sri Lanka",
    category: "Flags",
    aliases: ["sri_lanka"],
    tags: []
  },
  {
    emoji: "🇱🇷",
    description: "flag: Liberia",
    category: "Flags",
    aliases: ["liberia"],
    tags: []
  },
  {
    emoji: "🇱🇸",
    description: "flag: Lesotho",
    category: "Flags",
    aliases: ["lesotho"],
    tags: []
  },
  {
    emoji: "🇱🇹",
    description: "flag: Lithuania",
    category: "Flags",
    aliases: ["lithuania"],
    tags: []
  },
  {
    emoji: "🇱🇺",
    description: "flag: Luxembourg",
    category: "Flags",
    aliases: ["luxembourg"],
    tags: []
  },
  {
    emoji: "🇱🇻",
    description: "flag: Latvia",
    category: "Flags",
    aliases: ["latvia"],
    tags: []
  },
  {
    emoji: "🇱🇾",
    description: "flag: Libya",
    category: "Flags",
    aliases: ["libya"],
    tags: []
  },
  {
    emoji: "🇲🇦",
    description: "flag: Morocco",
    category: "Flags",
    aliases: ["morocco"],
    tags: []
  },
  {
    emoji: "🇲🇨",
    description: "flag: Monaco",
    category: "Flags",
    aliases: ["monaco"],
    tags: []
  },
  {
    emoji: "🇲🇩",
    description: "flag: Moldova",
    category: "Flags",
    aliases: ["moldova"],
    tags: []
  },
  {
    emoji: "🇲🇪",
    description: "flag: Montenegro",
    category: "Flags",
    aliases: ["montenegro"],
    tags: []
  },
  {
    emoji: "🇲🇫",
    description: "flag: St. Martin",
    category: "Flags",
    aliases: ["st_martin"],
    tags: []
  },
  {
    emoji: "🇲🇬",
    description: "flag: Madagascar",
    category: "Flags",
    aliases: ["madagascar"],
    tags: []
  },
  {
    emoji: "🇲🇭",
    description: "flag: Marshall Islands",
    category: "Flags",
    aliases: ["marshall_islands"],
    tags: []
  },
  {
    emoji: "🇲🇰",
    description: "flag: North Macedonia",
    category: "Flags",
    aliases: ["macedonia"],
    tags: []
  },
  {
    emoji: "🇲🇱",
    description: "flag: Mali",
    category: "Flags",
    aliases: ["mali"],
    tags: []
  },
  {
    emoji: "🇲🇲",
    description: "flag: Myanmar (Burma)",
    category: "Flags",
    aliases: ["myanmar"],
    tags: ["burma"]
  },
  {
    emoji: "🇲🇳",
    description: "flag: Mongolia",
    category: "Flags",
    aliases: ["mongolia"],
    tags: []
  },
  {
    emoji: "🇲🇴",
    description: "flag: Macao SAR China",
    category: "Flags",
    aliases: ["macau"],
    tags: []
  },
  {
    emoji: "🇲🇵",
    description: "flag: Northern Mariana Islands",
    category: "Flags",
    aliases: ["northern_mariana_islands"],
    tags: []
  },
  {
    emoji: "🇲🇶",
    description: "flag: Martinique",
    category: "Flags",
    aliases: ["martinique"],
    tags: []
  },
  {
    emoji: "🇲🇷",
    description: "flag: Mauritania",
    category: "Flags",
    aliases: ["mauritania"],
    tags: []
  },
  {
    emoji: "🇲🇸",
    description: "flag: Montserrat",
    category: "Flags",
    aliases: ["montserrat"],
    tags: []
  },
  {
    emoji: "🇲🇹",
    description: "flag: Malta",
    category: "Flags",
    aliases: ["malta"],
    tags: []
  },
  {
    emoji: "🇲🇺",
    description: "flag: Mauritius",
    category: "Flags",
    aliases: ["mauritius"],
    tags: []
  },
  {
    emoji: "🇲🇻",
    description: "flag: Maldives",
    category: "Flags",
    aliases: ["maldives"],
    tags: []
  },
  {
    emoji: "🇲🇼",
    description: "flag: Malawi",
    category: "Flags",
    aliases: ["malawi"],
    tags: []
  },
  {
    emoji: "🇲🇽",
    description: "flag: Mexico",
    category: "Flags",
    aliases: ["mexico"],
    tags: []
  },
  {
    emoji: "🇲🇾",
    description: "flag: Malaysia",
    category: "Flags",
    aliases: ["malaysia"],
    tags: []
  },
  {
    emoji: "🇲🇿",
    description: "flag: Mozambique",
    category: "Flags",
    aliases: ["mozambique"],
    tags: []
  },
  {
    emoji: "🇳🇦",
    description: "flag: Namibia",
    category: "Flags",
    aliases: ["namibia"],
    tags: []
  },
  {
    emoji: "🇳🇨",
    description: "flag: New Caledonia",
    category: "Flags",
    aliases: ["new_caledonia"],
    tags: []
  },
  {
    emoji: "🇳🇪",
    description: "flag: Niger",
    category: "Flags",
    aliases: ["niger"],
    tags: []
  },
  {
    emoji: "🇳🇫",
    description: "flag: Norfolk Island",
    category: "Flags",
    aliases: ["norfolk_island"],
    tags: []
  },
  {
    emoji: "🇳🇬",
    description: "flag: Nigeria",
    category: "Flags",
    aliases: ["nigeria"],
    tags: []
  },
  {
    emoji: "🇳🇮",
    description: "flag: Nicaragua",
    category: "Flags",
    aliases: ["nicaragua"],
    tags: []
  },
  {
    emoji: "🇳🇱",
    description: "flag: Netherlands",
    category: "Flags",
    aliases: ["netherlands"],
    tags: []
  },
  {
    emoji: "🇳🇴",
    description: "flag: Norway",
    category: "Flags",
    aliases: ["norway"],
    tags: []
  },
  {
    emoji: "🇳🇵",
    description: "flag: Nepal",
    category: "Flags",
    aliases: ["nepal"],
    tags: []
  },
  {
    emoji: "🇳🇷",
    description: "flag: Nauru",
    category: "Flags",
    aliases: ["nauru"],
    tags: []
  },
  {
    emoji: "🇳🇺",
    description: "flag: Niue",
    category: "Flags",
    aliases: ["niue"],
    tags: []
  },
  {
    emoji: "🇳🇿",
    description: "flag: New Zealand",
    category: "Flags",
    aliases: ["new_zealand"],
    tags: []
  },
  {
    emoji: "🇴🇲",
    description: "flag: Oman",
    category: "Flags",
    aliases: ["oman"],
    tags: []
  },
  {
    emoji: "🇵🇦",
    description: "flag: Panama",
    category: "Flags",
    aliases: ["panama"],
    tags: []
  },
  {
    emoji: "🇵🇪",
    description: "flag: Peru",
    category: "Flags",
    aliases: ["peru"],
    tags: []
  },
  {
    emoji: "🇵🇫",
    description: "flag: French Polynesia",
    category: "Flags",
    aliases: ["french_polynesia"],
    tags: []
  },
  {
    emoji: "🇵🇬",
    description: "flag: Papua New Guinea",
    category: "Flags",
    aliases: ["papua_new_guinea"],
    tags: []
  },
  {
    emoji: "🇵🇭",
    description: "flag: Philippines",
    category: "Flags",
    aliases: ["philippines"],
    tags: []
  },
  {
    emoji: "🇵🇰",
    description: "flag: Pakistan",
    category: "Flags",
    aliases: ["pakistan"],
    tags: []
  },
  {
    emoji: "🇵🇱",
    description: "flag: Poland",
    category: "Flags",
    aliases: ["poland"],
    tags: []
  },
  {
    emoji: "🇵🇲",
    description: "flag: St. Pierre & Miquelon",
    category: "Flags",
    aliases: ["st_pierre_miquelon"],
    tags: []
  },
  {
    emoji: "🇵🇳",
    description: "flag: Pitcairn Islands",
    category: "Flags",
    aliases: ["pitcairn_islands"],
    tags: []
  },
  {
    emoji: "🇵🇷",
    description: "flag: Puerto Rico",
    category: "Flags",
    aliases: ["puerto_rico"],
    tags: []
  },
  {
    emoji: "🇵🇸",
    description: "flag: Palestinian Territories",
    category: "Flags",
    aliases: ["palestinian_territories"],
    tags: []
  },
  {
    emoji: "🇵🇹",
    description: "flag: Portugal",
    category: "Flags",
    aliases: ["portugal"],
    tags: []
  },
  {
    emoji: "🇵🇼",
    description: "flag: Palau",
    category: "Flags",
    aliases: ["palau"],
    tags: []
  },
  {
    emoji: "🇵🇾",
    description: "flag: Paraguay",
    category: "Flags",
    aliases: ["paraguay"],
    tags: []
  },
  {
    emoji: "🇶🇦",
    description: "flag: Qatar",
    category: "Flags",
    aliases: ["qatar"],
    tags: []
  },
  {
    emoji: "🇷🇪",
    description: "flag: Réunion",
    category: "Flags",
    aliases: ["reunion"],
    tags: []
  },
  {
    emoji: "🇷🇴",
    description: "flag: Romania",
    category: "Flags",
    aliases: ["romania"],
    tags: []
  },
  {
    emoji: "🇷🇸",
    description: "flag: Serbia",
    category: "Flags",
    aliases: ["serbia"],
    tags: []
  },
  {
    emoji: "🇷🇺",
    description: "flag: Russia",
    category: "Flags",
    aliases: ["ru"],
    tags: ["russia"]
  },
  {
    emoji: "🇷🇼",
    description: "flag: Rwanda",
    category: "Flags",
    aliases: ["rwanda"],
    tags: []
  },
  {
    emoji: "🇸🇦",
    description: "flag: Saudi Arabia",
    category: "Flags",
    aliases: ["saudi_arabia"],
    tags: []
  },
  {
    emoji: "🇸🇧",
    description: "flag: Solomon Islands",
    category: "Flags",
    aliases: ["solomon_islands"],
    tags: []
  },
  {
    emoji: "🇸🇨",
    description: "flag: Seychelles",
    category: "Flags",
    aliases: ["seychelles"],
    tags: []
  },
  {
    emoji: "🇸🇩",
    description: "flag: Sudan",
    category: "Flags",
    aliases: ["sudan"],
    tags: []
  },
  {
    emoji: "🇸🇪",
    description: "flag: Sweden",
    category: "Flags",
    aliases: ["sweden"],
    tags: []
  },
  {
    emoji: "🇸🇬",
    description: "flag: Singapore",
    category: "Flags",
    aliases: ["singapore"],
    tags: []
  },
  {
    emoji: "🇸🇭",
    description: "flag: St. Helena",
    category: "Flags",
    aliases: ["st_helena"],
    tags: []
  },
  {
    emoji: "🇸🇮",
    description: "flag: Slovenia",
    category: "Flags",
    aliases: ["slovenia"],
    tags: []
  },
  {
    emoji: "🇸🇯",
    description: "flag: Svalbard & Jan Mayen",
    category: "Flags",
    aliases: ["svalbard_jan_mayen"],
    tags: []
  },
  {
    emoji: "🇸🇰",
    description: "flag: Slovakia",
    category: "Flags",
    aliases: ["slovakia"],
    tags: []
  },
  {
    emoji: "🇸🇱",
    description: "flag: Sierra Leone",
    category: "Flags",
    aliases: ["sierra_leone"],
    tags: []
  },
  {
    emoji: "🇸🇲",
    description: "flag: San Marino",
    category: "Flags",
    aliases: ["san_marino"],
    tags: []
  },
  {
    emoji: "🇸🇳",
    description: "flag: Senegal",
    category: "Flags",
    aliases: ["senegal"],
    tags: []
  },
  {
    emoji: "🇸🇴",
    description: "flag: Somalia",
    category: "Flags",
    aliases: ["somalia"],
    tags: []
  },
  {
    emoji: "🇸🇷",
    description: "flag: Suriname",
    category: "Flags",
    aliases: ["suriname"],
    tags: []
  },
  {
    emoji: "🇸🇸",
    description: "flag: South Sudan",
    category: "Flags",
    aliases: ["south_sudan"],
    tags: []
  },
  {
    emoji: "🇸🇹",
    description: "flag: São Tomé & Príncipe",
    category: "Flags",
    aliases: ["sao_tome_principe"],
    tags: []
  },
  {
    emoji: "🇸🇻",
    description: "flag: El Salvador",
    category: "Flags",
    aliases: ["el_salvador"],
    tags: []
  },
  {
    emoji: "🇸🇽",
    description: "flag: Sint Maarten",
    category: "Flags",
    aliases: ["sint_maarten"],
    tags: []
  },
  {
    emoji: "🇸🇾",
    description: "flag: Syria",
    category: "Flags",
    aliases: ["syria"],
    tags: []
  },
  {
    emoji: "🇸🇿",
    description: "flag: Eswatini",
    category: "Flags",
    aliases: ["swaziland"],
    tags: []
  },
  {
    emoji: "🇹🇦",
    description: "flag: Tristan da Cunha",
    category: "Flags",
    aliases: ["tristan_da_cunha"],
    tags: []
  },
  {
    emoji: "🇹🇨",
    description: "flag: Turks & Caicos Islands",
    category: "Flags",
    aliases: ["turks_caicos_islands"],
    tags: []
  },
  {
    emoji: "🇹🇩",
    description: "flag: Chad",
    category: "Flags",
    aliases: ["chad"],
    tags: []
  },
  {
    emoji: "🇹🇫",
    description: "flag: French Southern Territories",
    category: "Flags",
    aliases: ["french_southern_territories"],
    tags: []
  },
  {
    emoji: "🇹🇬",
    description: "flag: Togo",
    category: "Flags",
    aliases: ["togo"],
    tags: []
  },
  {
    emoji: "🇹🇭",
    description: "flag: Thailand",
    category: "Flags",
    aliases: ["thailand"],
    tags: []
  },
  {
    emoji: "🇹🇯",
    description: "flag: Tajikistan",
    category: "Flags",
    aliases: ["tajikistan"],
    tags: []
  },
  {
    emoji: "🇹🇰",
    description: "flag: Tokelau",
    category: "Flags",
    aliases: ["tokelau"],
    tags: []
  },
  {
    emoji: "🇹🇱",
    description: "flag: Timor-Leste",
    category: "Flags",
    aliases: ["timor_leste"],
    tags: []
  },
  {
    emoji: "🇹🇲",
    description: "flag: Turkmenistan",
    category: "Flags",
    aliases: ["turkmenistan"],
    tags: []
  },
  {
    emoji: "🇹🇳",
    description: "flag: Tunisia",
    category: "Flags",
    aliases: ["tunisia"],
    tags: []
  },
  {
    emoji: "🇹🇴",
    description: "flag: Tonga",
    category: "Flags",
    aliases: ["tonga"],
    tags: []
  },
  {
    emoji: "🇹🇷",
    description: "flag: Turkey",
    category: "Flags",
    aliases: ["tr"],
    tags: ["turkey"]
  },
  {
    emoji: "🇹🇹",
    description: "flag: Trinidad & Tobago",
    category: "Flags",
    aliases: ["trinidad_tobago"],
    tags: []
  },
  {
    emoji: "🇹🇻",
    description: "flag: Tuvalu",
    category: "Flags",
    aliases: ["tuvalu"],
    tags: []
  },
  {
    emoji: "🇹🇼",
    description: "flag: Taiwan",
    category: "Flags",
    aliases: ["taiwan"],
    tags: []
  },
  {
    emoji: "🇹🇿",
    description: "flag: Tanzania",
    category: "Flags",
    aliases: ["tanzania"],
    tags: []
  },
  {
    emoji: "🇺🇦",
    description: "flag: Ukraine",
    category: "Flags",
    aliases: ["ukraine"],
    tags: []
  },
  {
    emoji: "🇺🇬",
    description: "flag: Uganda",
    category: "Flags",
    aliases: ["uganda"],
    tags: []
  },
  {
    emoji: "🇺🇲",
    description: "flag: U.S. Outlying Islands",
    category: "Flags",
    aliases: ["us_outlying_islands"],
    tags: []
  },
  {
    emoji: "🇺🇳",
    description: "flag: United Nations",
    category: "Flags",
    aliases: ["united_nations"],
    tags: []
  },
  {
    emoji: "🇺🇸",
    description: "flag: United States",
    category: "Flags",
    aliases: ["us"],
    tags: ["flag", "united", "america"]
  },
  {
    emoji: "🇺🇾",
    description: "flag: Uruguay",
    category: "Flags",
    aliases: ["uruguay"],
    tags: []
  },
  {
    emoji: "🇺🇿",
    description: "flag: Uzbekistan",
    category: "Flags",
    aliases: ["uzbekistan"],
    tags: []
  },
  {
    emoji: "🇻🇦",
    description: "flag: Vatican City",
    category: "Flags",
    aliases: ["vatican_city"],
    tags: []
  },
  {
    emoji: "🇻🇨",
    description: "flag: St. Vincent & Grenadines",
    category: "Flags",
    aliases: ["st_vincent_grenadines"],
    tags: []
  },
  {
    emoji: "🇻🇪",
    description: "flag: Venezuela",
    category: "Flags",
    aliases: ["venezuela"],
    tags: []
  },
  {
    emoji: "🇻🇬",
    description: "flag: British Virgin Islands",
    category: "Flags",
    aliases: ["british_virgin_islands"],
    tags: []
  },
  {
    emoji: "🇻🇮",
    description: "flag: U.S. Virgin Islands",
    category: "Flags",
    aliases: ["us_virgin_islands"],
    tags: []
  },
  {
    emoji: "🇻🇳",
    description: "flag: Vietnam",
    category: "Flags",
    aliases: ["vietnam"],
    tags: []
  },
  {
    emoji: "🇻🇺",
    description: "flag: Vanuatu",
    category: "Flags",
    aliases: ["vanuatu"],
    tags: []
  },
  {
    emoji: "🇼🇫",
    description: "flag: Wallis & Futuna",
    category: "Flags",
    aliases: ["wallis_futuna"],
    tags: []
  },
  {
    emoji: "🇼🇸",
    description: "flag: Samoa",
    category: "Flags",
    aliases: ["samoa"],
    tags: []
  },
  {
    emoji: "🇽🇰",
    description: "flag: Kosovo",
    category: "Flags",
    aliases: ["kosovo"],
    tags: []
  },
  {
    emoji: "🇾🇪",
    description: "flag: Yemen",
    category: "Flags",
    aliases: ["yemen"],
    tags: []
  },
  {
    emoji: "🇾🇹",
    description: "flag: Mayotte",
    category: "Flags",
    aliases: ["mayotte"],
    tags: []
  },
  {
    emoji: "🇿🇦",
    description: "flag: South Africa",
    category: "Flags",
    aliases: ["south_africa"],
    tags: []
  },
  {
    emoji: "🇿🇲",
    description: "flag: Zambia",
    category: "Flags",
    aliases: ["zambia"],
    tags: []
  },
  {
    emoji: "🇿🇼",
    description: "flag: Zimbabwe",
    category: "Flags",
    aliases: ["zimbabwe"],
    tags: []
  },
  {
    emoji: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    description: "flag: England",
    category: "Flags",
    aliases: ["england"],
    tags: []
  },
  {
    emoji: "🏴󠁧󠁢󠁳󠁣󠁴󠁿",
    description: "flag: Scotland",
    category: "Flags",
    aliases: ["scotland"],
    tags: []
  },
  {
    emoji: "🏴󠁧󠁢󠁷󠁬󠁳󠁿",
    description: "flag: Wales",
    category: "Flags",
    aliases: ["wales"],
    tags: []
  }
];
export {
  Bl as $,
  jc as A,
  lc as B,
  Le as C,
  bc as D,
  yc as E,
  kc as F,
  vc as G,
  Nl as H,
  f0 as I,
  S0 as J,
  dc as K,
  fs as L,
  gc as M,
  Ts as N,
  b0 as O,
  hc as P,
  Fi as Q,
  Ll as R,
  Ho as S,
  Wl as T,
  pc as U,
  Xl as V,
  Gl as W,
  Vl as X,
  Jl as Y,
  cc as Z,
  mc as _,
  nc as a,
  $l as a0,
  Mi as a1,
  oc as a2,
  rc as a3,
  Ml as a4,
  sc as a5,
  ic as a6,
  ac as a7,
  tc as a8,
  ec as a9,
  Ol as aa,
  vi as ab,
  Ql as ac,
  wc as ad,
  n0 as ae,
  Dl as b,
  As as c,
  ql as d,
  Cl as e,
  Il as f,
  El as g,
  Ss as h,
  zl as i,
  Fl as j,
  Sl as k,
  We as l,
  Zl as m,
  g0 as n,
  Pl as o,
  Kl as p,
  Rl as q,
  Ao as r,
  Hl as s,
  Lo as t,
  u0 as u,
  fc as v,
  uc as w,
  ei as x,
  Yl as y,
  Ul as z
};
