(function(E) {
  var n = /\b(?:ACT|ACTIFSUB|CARRAY|CASE|CLEARGIF|COA|COA_INT|CONSTANTS|CONTENT|CUR|EDITPANEL|EFFECT|EXT|FILE|FLUIDTEMPLATE|FORM|FRAME|FRAMESET|GIFBUILDER|GMENU|GMENU_FOLDOUT|GMENU_LAYERS|GP|HMENU|HRULER|HTML|IENV|IFSUB|IMAGE|IMGMENU|IMGMENUITEM|IMGTEXT|IMG_RESOURCE|INCLUDE_TYPOSCRIPT|JSMENU|JSMENUITEM|LLL|LOAD_REGISTER|NO|PAGE|RECORDS|RESTORE_REGISTER|TEMPLATE|TEXT|TMENU|TMENUITEM|TMENU_LAYERS|USER|USER_INT|_GIFBUILDER|global|globalString|globalVar)\b/;
  E.languages.typoscript = {
    comment: [
      {
        // multiline comments /* */
        pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
        lookbehind: !0
      },
      {
        // double-slash comments - ignored when backslashes or colon is found in front
        // also ignored whenever directly after an equal-sign, because it would probably be an url without protocol
        pattern: /(^|[^\\:= \t]|(?:^|[^= \t])[ \t]+)\/\/.*/,
        lookbehind: !0,
        greedy: !0
      },
      {
        // hash comments - ignored when leading quote is found for hex colors in strings
        pattern: /(^|[^"'])#.*/,
        lookbehind: !0,
        greedy: !0
      }
    ],
    function: [
      {
        // old include style
        pattern: /<INCLUDE_TYPOSCRIPT:\s*source\s*=\s*(?:"[^"\r\n]*"|'[^'\r\n]*')\s*>/,
        inside: {
          string: {
            pattern: /"[^"\r\n]*"|'[^'\r\n]*'/,
            inside: {
              keyword: n
            }
          },
          keyword: {
            pattern: /INCLUDE_TYPOSCRIPT/
          }
        }
      },
      {
        // new include style
        pattern: /@import\s*(?:"[^"\r\n]*"|'[^'\r\n]*')/,
        inside: {
          string: /"[^"\r\n]*"|'[^'\r\n]*'/
        }
      }
    ],
    string: {
      pattern: /^([^=]*=[< ]?)(?:(?!\]\n).)*/,
      lookbehind: !0,
      inside: {
        function: /\{\$.*\}/,
        // constants include
        keyword: n,
        number: /^\d+$/,
        punctuation: /[,|:]/
      }
    },
    keyword: n,
    number: {
      // special highlighting for indexes of arrays in tags
      pattern: /\b\d+\s*[.{=]/,
      inside: {
        operator: /[.{=]/
      }
    },
    tag: {
      pattern: /\.?[-\w\\]+\.?/,
      inside: {
        punctuation: /\./
      }
    },
    punctuation: /[{}[\];(),.:|]/,
    operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/
  }, E.languages.tsconfig = E.languages.typoscript;
})(Prism);
