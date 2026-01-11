(function(e) {
  var n = /#(?!\{).+/, t = {
    pattern: /#\{[^}]+\}/,
    alias: "variable"
  };
  e.languages.coffeescript = e.languages.extend("javascript", {
    comment: n,
    string: [
      // Strings are multiline
      {
        pattern: /'(?:\\[\s\S]|[^\\'])*'/,
        greedy: !0
      },
      {
        // Strings are multiline
        pattern: /"(?:\\[\s\S]|[^\\"])*"/,
        greedy: !0,
        inside: {
          interpolation: t
        }
      }
    ],
    keyword: /\b(?:and|break|by|catch|class|continue|debugger|delete|do|each|else|extend|extends|false|finally|for|if|in|instanceof|is|isnt|let|loop|namespace|new|no|not|null|of|off|on|or|own|return|super|switch|then|this|throw|true|try|typeof|undefined|unless|until|when|while|window|with|yes|yield)\b/,
    "class-member": {
      pattern: /@(?!\d)\w+/,
      alias: "variable"
    }
  }), e.languages.insertBefore("coffeescript", "comment", {
    "multiline-comment": {
      pattern: /###[\s\S]+?###/,
      alias: "comment"
    },
    // Block regexp can contain comments and interpolation
    "block-regex": {
      pattern: /\/{3}[\s\S]*?\/{3}/,
      alias: "regex",
      inside: {
        comment: n,
        interpolation: t
      }
    }
  }), e.languages.insertBefore("coffeescript", "string", {
    "inline-javascript": {
      pattern: /`(?:\\[\s\S]|[^\\`])*`/,
      inside: {
        delimiter: {
          pattern: /^`|`$/,
          alias: "punctuation"
        },
        script: {
          pattern: /[\s\S]+/,
          alias: "language-javascript",
          inside: e.languages.javascript
        }
      }
    },
    // Block strings
    "multiline-string": [
      {
        pattern: /'''[\s\S]*?'''/,
        greedy: !0,
        alias: "string"
      },
      {
        pattern: /"""[\s\S]*?"""/,
        greedy: !0,
        alias: "string",
        inside: {
          interpolation: t
        }
      }
    ]
  }), e.languages.insertBefore("coffeescript", "keyword", {
    // Object property
    property: /(?!\d)\w+(?=\s*:(?!:))/
  }), delete e.languages.coffeescript["template-string"], e.languages.coffee = e.languages.coffeescript;
})(Prism);
