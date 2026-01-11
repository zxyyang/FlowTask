(function(a) {
  a.languages.insertBefore("javascript", "function-variable", {
    "method-variable": {
      pattern: RegExp("(\\.\\s*)" + a.languages.javascript["function-variable"].pattern.source),
      lookbehind: !0,
      alias: ["function-variable", "method", "function", "property-access"]
    }
  }), a.languages.insertBefore("javascript", "function", {
    method: {
      pattern: RegExp("(\\.\\s*)" + a.languages.javascript.function.source),
      lookbehind: !0,
      alias: ["function", "property-access"]
    }
  }), a.languages.insertBefore("javascript", "constant", {
    "known-class-name": [
      {
        // standard built-ins
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects
        pattern: /\b(?:(?:Float(?:32|64)|(?:Int|Uint)(?:8|16|32)|Uint8Clamped)?Array|ArrayBuffer|BigInt|Boolean|DataView|Date|Error|Function|Intl|JSON|(?:Weak)?(?:Map|Set)|Math|Number|Object|Promise|Proxy|Reflect|RegExp|String|Symbol|WebAssembly)\b/,
        alias: "class-name"
      },
      {
        // errors
        pattern: /\b(?:[A-Z]\w*)Error\b/,
        alias: "class-name"
      }
    ]
  });
  function t(i, l) {
    return RegExp(
      i.replace(/<ID>/g, function() {
        return /(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/.source;
      }),
      l
    );
  }
  a.languages.insertBefore("javascript", "keyword", {
    imports: {
      // https://tc39.es/ecma262/#sec-imports
      pattern: t(/(\bimport\b\s*)(?:<ID>(?:\s*,\s*(?:\*\s*as\s+<ID>|\{[^{}]*\}))?|\*\s*as\s+<ID>|\{[^{}]*\})(?=\s*\bfrom\b)/.source),
      lookbehind: !0,
      inside: a.languages.javascript
    },
    exports: {
      // https://tc39.es/ecma262/#sec-exports
      pattern: t(/(\bexport\b\s*)(?:\*(?:\s*as\s+<ID>)?(?=\s*\bfrom\b)|\{[^{}]*\})/.source),
      lookbehind: !0,
      inside: a.languages.javascript
    }
  }), a.languages.javascript.keyword.unshift(
    {
      pattern: /\b(?:as|default|export|from|import)\b/,
      alias: "module"
    },
    {
      pattern: /\b(?:await|break|catch|continue|do|else|finally|for|if|return|switch|throw|try|while|yield)\b/,
      alias: "control-flow"
    },
    {
      pattern: /\bnull\b/,
      alias: ["null", "nil"]
    },
    {
      pattern: /\bundefined\b/,
      alias: "nil"
    }
  ), a.languages.insertBefore("javascript", "operator", {
    spread: {
      pattern: /\.{3}/,
      alias: "operator"
    },
    arrow: {
      pattern: /=>/,
      alias: "operator"
    }
  }), a.languages.insertBefore("javascript", "punctuation", {
    "property-access": {
      pattern: t(/(\.\s*)#?<ID>/.source),
      lookbehind: !0
    },
    "maybe-class-name": {
      pattern: /(^|[^$\w\xA0-\uFFFF])[A-Z][$\w\xA0-\uFFFF]+/,
      lookbehind: !0
    },
    dom: {
      // this contains only a few commonly used DOM variables
      pattern: /\b(?:document|(?:local|session)Storage|location|navigator|performance|window)\b/,
      alias: "variable"
    },
    console: {
      pattern: /\bconsole(?=\s*\.)/,
      alias: "class-name"
    }
  });
  for (var n = ["function", "function-variable", "method", "method-variable", "property-access"], r = 0; r < n.length; r++) {
    var s = n[r], e = a.languages.javascript[s];
    a.util.type(e) === "RegExp" && (e = a.languages.javascript[s] = {
      pattern: e
    });
    var o = e.inside || {};
    e.inside = o, o["maybe-class-name"] = /^[A-Z][\s\S]*/;
  }
})(Prism);
