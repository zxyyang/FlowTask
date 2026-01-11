(function(t) {
  function r(n) {
    return RegExp("(^(?:" + n + "):[ 	]*(?![ 	]))[^]+", "i");
  }
  t.languages.http = {
    "request-line": {
      pattern: /^(?:CONNECT|DELETE|GET|HEAD|OPTIONS|PATCH|POST|PRI|PUT|SEARCH|TRACE)\s(?:https?:\/\/|\/)\S*\sHTTP\/[\d.]+/m,
      inside: {
        // HTTP Method
        method: {
          pattern: /^[A-Z]+\b/,
          alias: "property"
        },
        // Request Target e.g. http://example.com, /path/to/file
        "request-target": {
          pattern: /^(\s)(?:https?:\/\/|\/)\S*(?=\s)/,
          lookbehind: !0,
          alias: "url",
          inside: t.languages.uri
        },
        // HTTP Version
        "http-version": {
          pattern: /^(\s)HTTP\/[\d.]+/,
          lookbehind: !0,
          alias: "property"
        }
      }
    },
    "response-status": {
      pattern: /^HTTP\/[\d.]+ \d+ .+/m,
      inside: {
        // HTTP Version
        "http-version": {
          pattern: /^HTTP\/[\d.]+/,
          alias: "property"
        },
        // Status Code
        "status-code": {
          pattern: /^(\s)\d+(?=\s)/,
          lookbehind: !0,
          alias: "number"
        },
        // Reason Phrase
        "reason-phrase": {
          pattern: /^(\s).+/,
          lookbehind: !0,
          alias: "string"
        }
      }
    },
    header: {
      pattern: /^[\w-]+:.+(?:(?:\r\n?|\n)[ \t].+)*/m,
      inside: {
        "header-value": [
          {
            pattern: r(/Content-Security-Policy/.source),
            lookbehind: !0,
            alias: ["csp", "languages-csp"],
            inside: t.languages.csp
          },
          {
            pattern: r(/Public-Key-Pins(?:-Report-Only)?/.source),
            lookbehind: !0,
            alias: ["hpkp", "languages-hpkp"],
            inside: t.languages.hpkp
          },
          {
            pattern: r(/Strict-Transport-Security/.source),
            lookbehind: !0,
            alias: ["hsts", "languages-hsts"],
            inside: t.languages.hsts
          },
          {
            pattern: r(/[^:]+/.source),
            lookbehind: !0
          }
        ],
        "header-name": {
          pattern: /^[^:]+/,
          alias: "keyword"
        },
        punctuation: /^:/
      }
    }
  };
  var e = t.languages, i = {
    "application/javascript": e.javascript,
    "application/json": e.json || e.javascript,
    "application/xml": e.xml,
    "text/xml": e.xml,
    "text/html": e.html,
    "text/css": e.css,
    "text/plain": e.plain
  }, p = {
    "application/json": !0,
    "application/xml": !0
  };
  function l(n) {
    var o = n.replace(/^[a-z]+\//, ""), d = "\\w+/(?:[\\w.-]+\\+)+" + o + "(?![+\\w.-])";
    return "(?:" + n + "|" + d + ")";
  }
  var s;
  for (var a in i)
    if (i[a]) {
      s = s || {};
      var u = p[a] ? l(a) : a;
      s[a.replace(/\//g, "-")] = {
        pattern: RegExp(
          "(" + /content-type:\s*/.source + u + /(?:(?:\r\n?|\n)[\w-].*)*(?:\r(?:\n|(?!\n))|\n)/.source + ")" + // This is a little interesting:
          // The HTTP format spec required 1 empty line before the body to make everything unambiguous.
          // However, when writing code by hand (e.g. to display on a website) people can forget about this,
          // so we want to be liberal here. We will allow the empty line to be omitted if the first line of
          // the body does not start with a [\w-] character (as headers do).
          /[^ \t\w-][\s\S]*/.source,
          "i"
        ),
        lookbehind: !0,
        inside: i[a]
      };
    }
  s && t.languages.insertBefore("http", "header", s);
})(Prism);
