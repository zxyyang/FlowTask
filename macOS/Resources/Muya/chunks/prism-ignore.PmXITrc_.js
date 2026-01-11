(function(n) {
  n.languages.ignore = {
    // https://git-scm.com/docs/gitignore
    comment: /^#.*/m,
    entry: {
      pattern: /\S(?:.*(?:(?:\\ )|\S))?/,
      alias: "string",
      inside: {
        operator: /^!|\*\*?|\?/,
        regex: {
          pattern: /(^|[^\\])\[[^\[\]]*\]/,
          lookbehind: !0
        },
        punctuation: /\//
      }
    }
  }, n.languages.gitignore = n.languages.ignore, n.languages.hgignore = n.languages.ignore, n.languages.npmignore = n.languages.ignore;
})(Prism);
