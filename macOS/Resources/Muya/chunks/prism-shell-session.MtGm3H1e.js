(function(s) {
  var e = [
    // normal string
    /"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/.source,
    /'[^']*'/.source,
    /\$'(?:[^'\\]|\\[\s\S])*'/.source,
    // here doc
    // 2 capturing groups
    /<<-?\s*(["']?)(\w+)\1\s[\s\S]*?[\r\n]\2/.source
  ].join("|");
  s.languages["shell-session"] = {
    command: {
      pattern: RegExp(
        // user info
        /^/.source + "(?:" + // <user> ":" ( <path> )?
        (/[^\s@:$#%*!/\\]+@[^\r\n@:$#%*!/\\]+(?::[^\0-\x1F$#%*?"<>:;|]+)?/.source + "|" + // <path>
        // Since the path pattern is quite general, we will require it to start with a special character to
        // prevent false positives.
        /[/~.][^\0-\x1F$#%*?"<>@:;|]*/.source) + ")?" + // shell symbol
        /[$#%](?=\s)/.source + // bash command
        /(?:[^\\\r\n \t'"<$]|[ \t](?:(?!#)|#.*$)|\\(?:[^\r]|\r\n?)|\$(?!')|<(?!<)|<<str>>)+/.source.replace(/<<str>>/g, function() {
          return e;
        }),
        "m"
      ),
      greedy: !0,
      inside: {
        info: {
          // foo@bar:~/files$ exit
          // foo@bar$ exit
          // ~/files$ exit
          pattern: /^[^#$%]+/,
          alias: "punctuation",
          inside: {
            user: /^[^\s@:$#%*!/\\]+@[^\r\n@:$#%*!/\\]+/,
            punctuation: /:/,
            path: /[\s\S]+/
          }
        },
        bash: {
          pattern: /(^[$#%]\s*)\S[\s\S]*/,
          lookbehind: !0,
          alias: "language-bash",
          inside: s.languages.bash
        },
        "shell-symbol": {
          pattern: /^[$#%]/,
          alias: "important"
        }
      }
    },
    output: /.(?:.*(?:[\r\n]|.$))*/
  }, s.languages["sh-session"] = s.languages.shellsession = s.languages["shell-session"];
})(Prism);
