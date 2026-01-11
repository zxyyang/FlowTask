(function(e) {
  function t(i, o) {
    return o <= 0 ? /[]/.source : i.replace(/<SELF>/g, function() {
      return t(i, o - 1);
    });
  }
  var r = /'[{}:=,](?:[^']|'')*'(?!')/, n = {
    pattern: /''/,
    greedy: !0,
    alias: "operator"
  }, u = {
    pattern: r,
    greedy: !0,
    inside: {
      escape: n
    }
  }, a = t(
    /\{(?:[^{}']|'(?![{},'])|''|<STR>|<SELF>)*\}/.source.replace(/<STR>/g, function() {
      return r.source;
    }),
    8
  ), s = {
    pattern: RegExp(a),
    inside: {
      message: {
        pattern: /^(\{)[\s\S]+(?=\}$)/,
        lookbehind: !0,
        inside: null
        // see below
      },
      "message-delimiter": {
        pattern: /./,
        alias: "punctuation"
      }
    }
  };
  e.languages["icu-message-format"] = {
    argument: {
      pattern: RegExp(a),
      greedy: !0,
      inside: {
        content: {
          pattern: /^(\{)[\s\S]+(?=\}$)/,
          lookbehind: !0,
          inside: {
            "argument-name": {
              pattern: /^(\s*)[^{}:=,\s]+/,
              lookbehind: !0
            },
            "choice-style": {
              // https://unicode-org.github.io/icu-docs/apidoc/released/icu4c/classicu_1_1ChoiceFormat.html#details
              pattern: /^(\s*,\s*choice\s*,\s*)\S(?:[\s\S]*\S)?/,
              lookbehind: !0,
              inside: {
                punctuation: /\|/,
                range: {
                  pattern: /^(\s*)[+-]?(?:\d+(?:\.\d*)?|\u221e)\s*[<#\u2264]/,
                  lookbehind: !0,
                  inside: {
                    operator: /[<#\u2264]/,
                    number: /\S+/
                  }
                },
                rest: null
                // see below
              }
            },
            "plural-style": {
              // https://unicode-org.github.io/icu-docs/apidoc/released/icu4j/com/ibm/icu/text/PluralFormat.html#:~:text=Patterns%20and%20Their%20Interpretation
              pattern: /^(\s*,\s*(?:plural|selectordinal)\s*,\s*)\S(?:[\s\S]*\S)?/,
              lookbehind: !0,
              inside: {
                offset: /^offset:\s*\d+/,
                "nested-message": s,
                selector: {
                  pattern: /=\d+|[^{}:=,\s]+/,
                  inside: {
                    keyword: /^(?:few|many|one|other|two|zero)$/
                  }
                }
              }
            },
            "select-style": {
              // https://unicode-org.github.io/icu-docs/apidoc/released/icu4j/com/ibm/icu/text/SelectFormat.html#:~:text=Patterns%20and%20Their%20Interpretation
              pattern: /^(\s*,\s*select\s*,\s*)\S(?:[\s\S]*\S)?/,
              lookbehind: !0,
              inside: {
                "nested-message": s,
                selector: {
                  pattern: /[^{}:=,\s]+/,
                  inside: {
                    keyword: /^other$/
                  }
                }
              }
            },
            keyword: /\b(?:choice|plural|select|selectordinal)\b/,
            "arg-type": {
              pattern: /\b(?:date|duration|number|ordinal|spellout|time)\b/,
              alias: "keyword"
            },
            "arg-skeleton": {
              pattern: /(,\s*)::[^{}:=,\s]+/,
              lookbehind: !0
            },
            "arg-style": {
              pattern: /(,\s*)(?:currency|full|integer|long|medium|percent|short)(?=\s*$)/,
              lookbehind: !0
            },
            "arg-style-text": {
              pattern: RegExp(/(^\s*,\s*(?=\S))/.source + t(/(?:[^{}']|'[^']*'|\{(?:<SELF>)?\})+/.source, 8) + "$"),
              lookbehind: !0,
              alias: "string"
            },
            punctuation: /,/
          }
        },
        "argument-delimiter": {
          pattern: /./,
          alias: "operator"
        }
      }
    },
    escape: n,
    string: u
  }, s.inside.message.inside = e.languages["icu-message-format"], e.languages["icu-message-format"].argument.inside.content.inside["choice-style"].inside.rest = e.languages["icu-message-format"];
})(Prism);
