(function(i) {
  var a = {
    pattern: /(^[ \t]*)\[(?!\[)(?:(["'$`])(?:(?!\2)[^\\]|\\.)*\2|\[(?:[^\[\]\\]|\\.)*\]|[^\[\]\\"'$`]|\\.)*\]/m,
    lookbehind: !0,
    inside: {
      quoted: {
        pattern: /([$`])(?:(?!\1)[^\\]|\\.)*\1/,
        inside: {
          punctuation: /^[$`]|[$`]$/
        }
      },
      interpreted: {
        pattern: /'(?:[^'\\]|\\.)*'/,
        inside: {
          punctuation: /^'|'$/
          // See rest below
        }
      },
      string: /"(?:[^"\\]|\\.)*"/,
      variable: /\w+(?==)/,
      punctuation: /^\[|\]$|,/,
      operator: /=/,
      // The negative look-ahead prevents blank matches
      "attr-value": /(?!^\s+$).+/
    }
  }, n = i.languages.asciidoc = {
    "comment-block": {
      pattern: /^(\/{4,})$[\s\S]*?^\1/m,
      alias: "comment"
    },
    table: {
      pattern: /^\|={3,}(?:(?:\r?\n|\r(?!\n)).*)*?(?:\r?\n|\r)\|={3,}$/m,
      inside: {
        specifiers: {
          pattern: /(?:(?:(?:\d+(?:\.\d+)?|\.\d+)[+*](?:[<^>](?:\.[<^>])?|\.[<^>])?|[<^>](?:\.[<^>])?|\.[<^>])[a-z]*|[a-z]+)(?=\|)/,
          alias: "attr-value"
        },
        punctuation: {
          pattern: /(^|[^\\])[|!]=*/,
          lookbehind: !0
        }
        // See rest below
      }
    },
    "passthrough-block": {
      pattern: /^(\+{4,})$[\s\S]*?^\1$/m,
      inside: {
        punctuation: /^\++|\++$/
        // See rest below
      }
    },
    // Literal blocks and listing blocks
    "literal-block": {
      pattern: /^(-{4,}|\.{4,})$[\s\S]*?^\1$/m,
      inside: {
        punctuation: /^(?:-+|\.+)|(?:-+|\.+)$/
        // See rest below
      }
    },
    // Sidebar blocks, quote blocks, example blocks and open blocks
    "other-block": {
      pattern: /^(--|\*{4,}|_{4,}|={4,})$[\s\S]*?^\1$/m,
      inside: {
        punctuation: /^(?:-+|\*+|_+|=+)|(?:-+|\*+|_+|=+)$/
        // See rest below
      }
    },
    // list-punctuation and list-label must appear before indented-block
    "list-punctuation": {
      pattern: /(^[ \t]*)(?:-|\*{1,5}|\.{1,5}|(?:[a-z]|\d+)\.|[xvi]+\))(?= )/im,
      lookbehind: !0,
      alias: "punctuation"
    },
    "list-label": {
      pattern: /(^[ \t]*)[a-z\d].+(?::{2,4}|;;)(?=\s)/im,
      lookbehind: !0,
      alias: "symbol"
    },
    "indented-block": {
      pattern: /((\r?\n|\r)\2)([ \t]+)\S.*(?:(?:\r?\n|\r)\3.+)*(?=\2{2}|$)/,
      lookbehind: !0
    },
    comment: /^\/\/.*/m,
    title: {
      pattern: /^.+(?:\r?\n|\r)(?:={3,}|-{3,}|~{3,}|\^{3,}|\+{3,})$|^={1,5} .+|^\.(?![\s.]).*/m,
      alias: "important",
      inside: {
        punctuation: /^(?:\.|=+)|(?:=+|-+|~+|\^+|\++)$/
        // See rest below
      }
    },
    "attribute-entry": {
      pattern: /^:[^:\r\n]+:(?: .*?(?: \+(?:\r?\n|\r).*?)*)?$/m,
      alias: "tag"
    },
    attributes: a,
    hr: {
      pattern: /^'{3,}$/m,
      alias: "punctuation"
    },
    "page-break": {
      pattern: /^<{3,}$/m,
      alias: "punctuation"
    },
    admonition: {
      pattern: /^(?:CAUTION|IMPORTANT|NOTE|TIP|WARNING):/m,
      alias: "keyword"
    },
    callout: [
      {
        pattern: /(^[ \t]*)<?\d*>/m,
        lookbehind: !0,
        alias: "symbol"
      },
      {
        pattern: /<\d+>/,
        alias: "symbol"
      }
    ],
    macro: {
      pattern: /\b[a-z\d][a-z\d-]*::?(?:[^\s\[\]]*\[(?:[^\]\\"']|(["'])(?:(?!\1)[^\\]|\\.)*\1|\\.)*\])/,
      inside: {
        function: /^[a-z\d-]+(?=:)/,
        punctuation: /^::?/,
        attributes: {
          pattern: /(?:\[(?:[^\]\\"']|(["'])(?:(?!\1)[^\\]|\\.)*\1|\\.)*\])/,
          inside: a.inside
        }
      }
    },
    inline: {
      /*
      			The initial look-behind prevents the highlighting of escaped quoted text.
      
      			Quoted text can be multi-line but cannot span an empty line.
      			All quoted text can have attributes before [foobar, 'foobar', baz="bar"].
      
      			First, we handle the constrained quotes.
      			Those must be bounded by non-word chars and cannot have spaces between the delimiter and the first char.
      			They are, in order: _emphasis_, ``double quotes'', `single quotes', `monospace`, 'emphasis', *strong*, +monospace+ and #unquoted#
      
      			Then we handle the unconstrained quotes.
      			Those do not have the restrictions of the constrained quotes.
      			They are, in order: __emphasis__, **strong**, ++monospace++, +++passthrough+++, ##unquoted##, $$passthrough$$, ~subscript~, ^superscript^, {attribute-reference}, [[anchor]], [[[bibliography anchor]]], <<xref>>, (((indexes))) and ((indexes))
      			 */
      pattern: /(^|[^\\])(?:(?:\B\[(?:[^\]\\"']|(["'])(?:(?!\2)[^\\]|\\.)*\2|\\.)*\])?(?:\b_(?!\s)(?: _|[^_\\\r\n]|\\.)+(?:(?:\r?\n|\r)(?: _|[^_\\\r\n]|\\.)+)*_\b|\B``(?!\s).+?(?:(?:\r?\n|\r).+?)*''\B|\B`(?!\s)(?:[^`'\s]|\s+\S)+['`]\B|\B(['*+#])(?!\s)(?: \3|(?!\3)[^\\\r\n]|\\.)+(?:(?:\r?\n|\r)(?: \3|(?!\3)[^\\\r\n]|\\.)+)*\3\B)|(?:\[(?:[^\]\\"']|(["'])(?:(?!\4)[^\\]|\\.)*\4|\\.)*\])?(?:(__|\*\*|\+\+\+?|##|\$\$|[~^]).+?(?:(?:\r?\n|\r).+?)*\5|\{[^}\r\n]+\}|\[\[\[?.+?(?:(?:\r?\n|\r).+?)*\]?\]\]|<<.+?(?:(?:\r?\n|\r).+?)*>>|\(\(\(?.+?(?:(?:\r?\n|\r).+?)*\)?\)\)))/m,
      lookbehind: !0,
      inside: {
        attributes: a,
        url: {
          pattern: /^(?:\[\[\[?.+?\]?\]\]|<<.+?>>)$/,
          inside: {
            punctuation: /^(?:\[\[\[?|<<)|(?:\]\]\]?|>>)$/
          }
        },
        "attribute-ref": {
          pattern: /^\{.+\}$/,
          inside: {
            variable: {
              pattern: /(^\{)[a-z\d,+_-]+/,
              lookbehind: !0
            },
            operator: /^[=?!#%@$]|!(?=[:}])/,
            punctuation: /^\{|\}$|::?/
          }
        },
        italic: {
          pattern: /^(['_])[\s\S]+\1$/,
          inside: {
            punctuation: /^(?:''?|__?)|(?:''?|__?)$/
          }
        },
        bold: {
          pattern: /^\*[\s\S]+\*$/,
          inside: {
            punctuation: /^\*\*?|\*\*?$/
          }
        },
        punctuation: /^(?:``?|\+{1,3}|##?|\$\$|[~^]|\(\(\(?)|(?:''?|\+{1,3}|##?|\$\$|[~^`]|\)?\)\))$/
      }
    },
    replacement: {
      pattern: /\((?:C|R|TM)\)/,
      alias: "builtin"
    },
    entity: /&#?[\da-z]{1,8};/i,
    "line-continuation": {
      pattern: /(^| )\+$/m,
      lookbehind: !0,
      alias: "punctuation"
    }
  };
  function e(t) {
    t = t.split(" ");
    for (var o = {}, r = 0, l = t.length; r < l; r++)
      o[t[r]] = n[t[r]];
    return o;
  }
  a.inside.interpreted.inside.rest = e("macro inline replacement entity"), n["passthrough-block"].inside.rest = e("macro"), n["literal-block"].inside.rest = e("callout"), n.table.inside.rest = e("comment-block passthrough-block literal-block other-block list-punctuation indented-block comment title attribute-entry attributes hr page-break admonition list-label callout macro inline replacement entity line-continuation"), n["other-block"].inside.rest = e("table list-punctuation indented-block comment attribute-entry attributes hr page-break admonition list-label macro inline replacement entity line-continuation"), n.title.inside.rest = e("macro inline replacement entity"), i.hooks.add("wrap", function(t) {
    t.type === "entity" && (t.attributes.title = t.content.replace(/&amp;/, "&"));
  }), i.languages.adoc = i.languages.asciidoc;
})(Prism);
