Prism.languages.bicep = {
  comment: [
    {
      // multiline comments eg /* ASDF */
      pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
      lookbehind: !0,
      greedy: !0
    },
    {
      // singleline comments eg // ASDF
      pattern: /(^|[^\\:])\/\/.*/,
      lookbehind: !0,
      greedy: !0
    }
  ],
  property: [
    {
      pattern: /([\r\n][ \t]*)[a-z_]\w*(?=[ \t]*:)/i,
      lookbehind: !0
    },
    {
      pattern: /([\r\n][ \t]*)'(?:\\.|\$(?!\{)|[^'\\\r\n$])*'(?=[ \t]*:)/,
      lookbehind: !0,
      greedy: !0
    }
  ],
  string: [
    {
      pattern: /'''[^'][\s\S]*?'''/,
      greedy: !0
    },
    {
      pattern: /(^|[^\\'])'(?:\\.|\$(?!\{)|[^'\\\r\n$])*'/,
      lookbehind: !0,
      greedy: !0
    }
  ],
  "interpolated-string": {
    pattern: /(^|[^\\'])'(?:\\.|\$(?:(?!\{)|\{[^{}\r\n]*\})|[^'\\\r\n$])*'/,
    lookbehind: !0,
    greedy: !0,
    inside: {
      interpolation: {
        pattern: /\$\{[^{}\r\n]*\}/,
        inside: {
          expression: {
            pattern: /(^\$\{)[\s\S]+(?=\}$)/,
            lookbehind: !0
          },
          punctuation: /^\$\{|\}$/
        }
      },
      string: /[\s\S]+/
    }
  },
  datatype: {
    pattern: /(\b(?:output|param)\b[ \t]+\w+[ \t]+)\w+\b/,
    lookbehind: !0,
    alias: "class-name"
  },
  boolean: /\b(?:false|true)\b/,
  // https://github.com/Azure/bicep/blob/114a3251b4e6e30082a58729f19a8cc4e374ffa6/src/textmate/bicep.tmlanguage#L184
  keyword: /\b(?:existing|for|if|in|module|null|output|param|resource|targetScope|var)\b/,
  decorator: /@\w+\b/,
  function: /\b[a-z_]\w*(?=[ \t]*\()/i,
  number: /(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:E[+-]?\d+)?/i,
  operator: /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/,
  punctuation: /[{}[\];(),.:]/
};
Prism.languages.bicep["interpolated-string"].inside.interpolation.inside.expression.inside = Prism.languages.bicep;
