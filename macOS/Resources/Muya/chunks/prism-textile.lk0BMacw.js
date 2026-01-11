(function(a) {
  var u = /\([^|()\n]+\)|\[[^\]\n]+\]|\{[^}\n]+\}/.source, d = /\)|\((?![^|()\n]+\))/.source;
  function e(l, p) {
    return RegExp(
      l.replace(/<MOD>/g, function() {
        return "(?:" + u + ")";
      }).replace(/<PAR>/g, function() {
        return "(?:" + d + ")";
      }),
      p || ""
    );
  }
  var i = {
    css: {
      pattern: /\{[^{}]+\}/,
      inside: {
        rest: a.languages.css
      }
    },
    "class-id": {
      pattern: /(\()[^()]+(?=\))/,
      lookbehind: !0,
      alias: "attr-value"
    },
    lang: {
      pattern: /(\[)[^\[\]]+(?=\])/,
      lookbehind: !0,
      alias: "attr-value"
    },
    // Anything else is punctuation (the first pattern is for row/col spans inside tables)
    punctuation: /[\\\/]\d+|\S/
  }, s = a.languages.textile = a.languages.extend("markup", {
    phrase: {
      pattern: /(^|\r|\n)\S[\s\S]*?(?=$|\r?\n\r?\n|\r\r)/,
      lookbehind: !0,
      inside: {
        // h1. Header 1
        "block-tag": {
          pattern: e(/^[a-z]\w*(?:<MOD>|<PAR>|[<>=])*\./.source),
          inside: {
            modifier: {
              pattern: e(/(^[a-z]\w*)(?:<MOD>|<PAR>|[<>=])+(?=\.)/.source),
              lookbehind: !0,
              inside: i
            },
            tag: /^[a-z]\w*/,
            punctuation: /\.$/
          }
        },
        // # List item
        // * List item
        list: {
          pattern: e(/^[*#]+<MOD>*\s+\S.*/.source, "m"),
          inside: {
            modifier: {
              pattern: e(/(^[*#]+)<MOD>+/.source),
              lookbehind: !0,
              inside: i
            },
            punctuation: /^[*#]+/
          }
        },
        // | cell | cell | cell |
        table: {
          // Modifiers can be applied to the row: {color:red}.|1|2|3|
          // or the cell: |{color:red}.1|2|3|
          pattern: e(/^(?:(?:<MOD>|<PAR>|[<>=^~])+\.\s*)?(?:\|(?:(?:<MOD>|<PAR>|[<>=^~_]|[\\/]\d+)+\.|(?!(?:<MOD>|<PAR>|[<>=^~_]|[\\/]\d+)+\.))[^|]*)+\|/.source, "m"),
          inside: {
            modifier: {
              // Modifiers for rows after the first one are
              // preceded by a pipe and a line feed
              pattern: e(/(^|\|(?:\r?\n|\r)?)(?:<MOD>|<PAR>|[<>=^~_]|[\\/]\d+)+(?=\.)/.source),
              lookbehind: !0,
              inside: i
            },
            punctuation: /\||^\./
          }
        },
        inline: {
          // eslint-disable-next-line regexp/no-super-linear-backtracking
          pattern: e(/(^|[^a-zA-Z\d])(\*\*|__|\?\?|[*_%@+\-^~])<MOD>*.+?\2(?![a-zA-Z\d])/.source),
          lookbehind: !0,
          inside: {
            // Note: superscripts and subscripts are not handled specifically
            // *bold*, **bold**
            bold: {
              // eslint-disable-next-line regexp/no-super-linear-backtracking
              pattern: e(/(^(\*\*?)<MOD>*).+?(?=\2)/.source),
              lookbehind: !0
            },
            // _italic_, __italic__
            italic: {
              // eslint-disable-next-line regexp/no-super-linear-backtracking
              pattern: e(/(^(__?)<MOD>*).+?(?=\2)/.source),
              lookbehind: !0
            },
            // ??cite??
            cite: {
              // eslint-disable-next-line regexp/no-super-linear-backtracking
              pattern: e(/(^\?\?<MOD>*).+?(?=\?\?)/.source),
              lookbehind: !0,
              alias: "string"
            },
            // @code@
            code: {
              // eslint-disable-next-line regexp/no-super-linear-backtracking
              pattern: e(/(^@<MOD>*).+?(?=@)/.source),
              lookbehind: !0,
              alias: "keyword"
            },
            // +inserted+
            inserted: {
              // eslint-disable-next-line regexp/no-super-linear-backtracking
              pattern: e(/(^\+<MOD>*).+?(?=\+)/.source),
              lookbehind: !0
            },
            // -deleted-
            deleted: {
              // eslint-disable-next-line regexp/no-super-linear-backtracking
              pattern: e(/(^-<MOD>*).+?(?=-)/.source),
              lookbehind: !0
            },
            // %span%
            span: {
              // eslint-disable-next-line regexp/no-super-linear-backtracking
              pattern: e(/(^%<MOD>*).+?(?=%)/.source),
              lookbehind: !0
            },
            modifier: {
              pattern: e(/(^\*\*|__|\?\?|[*_%@+\-^~])<MOD>+/.source),
              lookbehind: !0,
              inside: i
            },
            punctuation: /[*_%?@+\-^~]+/
          }
        },
        // [alias]http://example.com
        "link-ref": {
          pattern: /^\[[^\]]+\]\S+$/m,
          inside: {
            string: {
              pattern: /(^\[)[^\]]+(?=\])/,
              lookbehind: !0
            },
            url: {
              pattern: /(^\])\S+$/,
              lookbehind: !0
            },
            punctuation: /[\[\]]/
          }
        },
        // "text":http://example.com
        // "text":link-ref
        link: {
          // eslint-disable-next-line regexp/no-super-linear-backtracking
          pattern: e(/"<MOD>*[^"]+":.+?(?=[^\w/]?(?:\s|$))/.source),
          inside: {
            text: {
              // eslint-disable-next-line regexp/no-super-linear-backtracking
              pattern: e(/(^"<MOD>*)[^"]+(?=")/.source),
              lookbehind: !0
            },
            modifier: {
              pattern: e(/(^")<MOD>+/.source),
              lookbehind: !0,
              inside: i
            },
            url: {
              pattern: /(:).+/,
              lookbehind: !0
            },
            punctuation: /[":]/
          }
        },
        // !image.jpg!
        // !image.jpg(Title)!:http://example.com
        image: {
          pattern: e(/!(?:<MOD>|<PAR>|[<>=])*(?![<>=])[^!\s()]+(?:\([^)]+\))?!(?::.+?(?=[^\w/]?(?:\s|$)))?/.source),
          inside: {
            source: {
              pattern: e(/(^!(?:<MOD>|<PAR>|[<>=])*)(?![<>=])[^!\s()]+(?:\([^)]+\))?(?=!)/.source),
              lookbehind: !0,
              alias: "url"
            },
            modifier: {
              pattern: e(/(^!)(?:<MOD>|<PAR>|[<>=])+/.source),
              lookbehind: !0,
              inside: i
            },
            url: {
              pattern: /(:).+/,
              lookbehind: !0
            },
            punctuation: /[!:]/
          }
        },
        // Footnote[1]
        footnote: {
          pattern: /\b\[\d+\]/,
          alias: "comment",
          inside: {
            punctuation: /\[|\]/
          }
        },
        // CSS(Cascading Style Sheet)
        acronym: {
          pattern: /\b[A-Z\d]+\([^)]+\)/,
          inside: {
            comment: {
              pattern: /(\()[^()]+(?=\))/,
              lookbehind: !0
            },
            punctuation: /[()]/
          }
        },
        // Prism(C)
        mark: {
          pattern: /\b\((?:C|R|TM)\)/,
          alias: "comment",
          inside: {
            punctuation: /[()]/
          }
        }
      }
    }
  }), t = s.phrase.inside, n = {
    inline: t.inline,
    link: t.link,
    image: t.image,
    footnote: t.footnote,
    acronym: t.acronym,
    mark: t.mark
  };
  s.tag.pattern = /<\/?(?!\d)[a-z0-9]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i;
  var o = t.inline.inside;
  o.bold.inside = n, o.italic.inside = n, o.inserted.inside = n, o.deleted.inside = n, o.span.inside = n;
  var r = t.table.inside;
  r.inline = n.inline, r.link = n.link, r.image = n.image, r.footnote = n.footnote, r.acronym = n.acronym, r.mark = n.mark;
})(Prism);
