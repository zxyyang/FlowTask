Prism.languages.parigp = {
  comment: /\/\*[\s\S]*?\*\/|\\\\.*/,
  string: {
    pattern: /"(?:[^"\\\r\n]|\\.)*"/,
    greedy: !0
  },
  // PARI/GP does not care about white spaces at all
  // so let's process the keywords to build an appropriate regexp
  // (e.g. "b *r *e *a *k", etc.)
  keyword: function() {
    var r = [
      "breakpoint",
      "break",
      "dbg_down",
      "dbg_err",
      "dbg_up",
      "dbg_x",
      "forcomposite",
      "fordiv",
      "forell",
      "forpart",
      "forprime",
      "forstep",
      "forsubgroup",
      "forvec",
      "for",
      "iferr",
      "if",
      "local",
      "my",
      "next",
      "return",
      "until",
      "while"
    ];
    return r = r.map(function(e) {
      return e.split("").join(" *");
    }).join("|"), RegExp("\\b(?:" + r + ")\\b");
  }(),
  function: /\b\w(?:[\w ]*\w)?(?= *\()/,
  number: {
    // The lookbehind and the negative lookahead prevent from breaking the .. operator
    pattern: /((?:\. *\. *)?)(?:\b\d(?: *\d)*(?: *(?!\. *\.)\.(?: *\d)*)?|\. *\d(?: *\d)*)(?: *e *(?:[+-] *)?\d(?: *\d)*)?/i,
    lookbehind: !0
  },
  operator: /\. *\.|[*\/!](?: *=)?|%(?: *=|(?: *#)?(?: *')*)?|\+(?: *[+=])?|-(?: *[-=>])?|<(?: *>|(?: *<)?(?: *=)?)?|>(?: *>)?(?: *=)?|=(?: *=){0,2}|\\(?: *\/)?(?: *=)?|&(?: *&)?|\| *\||['#~^]/,
  punctuation: /[\[\]{}().,:;|]/
};
