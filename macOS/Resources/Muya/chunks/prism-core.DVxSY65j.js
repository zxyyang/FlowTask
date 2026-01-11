import { Q as N, c as J } from "./emojis.bYhmvyOg.js";
function ee(m, C) {
  for (var w = 0; w < C.length; w++) {
    const g = C[w];
    if (typeof g != "string" && !Array.isArray(g)) {
      for (const d in g)
        if (d !== "default" && !(d in m)) {
          const b = Object.getOwnPropertyDescriptor(g, d);
          b && Object.defineProperty(m, d, b.get ? b : {
            enumerable: !0,
            get: () => g[d]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(m, Symbol.toStringTag, { value: "Module" }));
}
var U = { exports: {} };
(function(m) {
  var C = typeof window < "u" ? window : typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope ? self : {};
  /**
   * Prism: Lightweight, robust, elegant syntax highlighting
   *
   * @license MIT <https://opensource.org/licenses/MIT>
   * @author Lea Verou <https://lea.verou.me>
   * @namespace
   * @public
   */
  var w = function(g) {
    var d = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i, b = 0, S = {}, t = {
      /**
       * By default, Prism will attempt to highlight all code elements (by calling {@link Prism.highlightAll}) on the
       * current page after the page finished loading. This might be a problem if e.g. you wanted to asynchronously load
       * additional languages or plugins yourself.
       *
       * By setting this value to `true`, Prism will not automatically highlight all code elements on the page.
       *
       * You obviously have to change this value before the automatic highlighting started. To do this, you can add an
       * empty Prism object into the global scope before loading the Prism script like this:
       *
       * ```js
       * window.Prism = window.Prism || {};
       * Prism.manual = true;
       * // add a new <script> to load Prism's script
       * ```
       *
       * @default false
       * @type {boolean}
       * @memberof Prism
       * @public
       */
      manual: g.Prism && g.Prism.manual,
      /**
       * By default, if Prism is in a web worker, it assumes that it is in a worker it created itself, so it uses
       * `addEventListener` to communicate with its parent instance. However, if you're using Prism manually in your
       * own worker, you don't want it to do this.
       *
       * By setting this value to `true`, Prism will not add its own listeners to the worker.
       *
       * You obviously have to change this value before Prism executes. To do this, you can add an
       * empty Prism object into the global scope before loading the Prism script like this:
       *
       * ```js
       * window.Prism = window.Prism || {};
       * Prism.disableWorkerMessageHandler = true;
       * // Load Prism's script
       * ```
       *
       * @default false
       * @type {boolean}
       * @memberof Prism
       * @public
       */
      disableWorkerMessageHandler: g.Prism && g.Prism.disableWorkerMessageHandler,
      /**
       * A namespace for utility methods.
       *
       * All function in this namespace that are not explicitly marked as _public_ are for __internal use only__ and may
       * change or disappear at any time.
       *
       * @namespace
       * @memberof Prism
       */
      util: {
        encode: function a(e) {
          return e instanceof p ? new p(e.type, a(e.content), e.alias) : Array.isArray(e) ? e.map(a) : e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
        },
        /**
         * Returns the name of the type of the given value.
         *
         * @param {any} o
         * @returns {string}
         * @example
         * type(null)      === 'Null'
         * type(undefined) === 'Undefined'
         * type(123)       === 'Number'
         * type('foo')     === 'String'
         * type(true)      === 'Boolean'
         * type([1, 2])    === 'Array'
         * type({})        === 'Object'
         * type(String)    === 'Function'
         * type(/abc+/)    === 'RegExp'
         */
        type: function(a) {
          return Object.prototype.toString.call(a).slice(8, -1);
        },
        /**
         * Returns a unique number for the given object. Later calls will still return the same number.
         *
         * @param {Object} obj
         * @returns {number}
         */
        objId: function(a) {
          return a.__id || Object.defineProperty(a, "__id", { value: ++b }), a.__id;
        },
        /**
         * Creates a deep clone of the given object.
         *
         * The main intended use of this function is to clone language definitions.
         *
         * @param {T} o
         * @param {Record<number, any>} [visited]
         * @returns {T}
         * @template T
         */
        clone: function a(e, r) {
          r = r || {};
          var n, i;
          switch (t.util.type(e)) {
            case "Object":
              if (i = t.util.objId(e), r[i])
                return r[i];
              n = /** @type {Record<string, any>} */
              {}, r[i] = n;
              for (var l in e)
                e.hasOwnProperty(l) && (n[l] = a(e[l], r));
              return (
                /** @type {any} */
                n
              );
            case "Array":
              return i = t.util.objId(e), r[i] ? r[i] : (n = [], r[i] = n, /** @type {Array} */
              /** @type {any} */
              e.forEach(function(o, u) {
                n[u] = a(o, r);
              }), /** @type {any} */
              n);
            default:
              return e;
          }
        },
        /**
         * Returns the Prism language of the given element set by a `language-xxxx` or `lang-xxxx` class.
         *
         * If no language is set for the element or the element is `null` or `undefined`, `none` will be returned.
         *
         * @param {Element} element
         * @returns {string}
         */
        getLanguage: function(a) {
          for (; a; ) {
            var e = d.exec(a.className);
            if (e)
              return e[1].toLowerCase();
            a = a.parentElement;
          }
          return "none";
        },
        /**
         * Sets the Prism `language-xxxx` class of the given element.
         *
         * @param {Element} element
         * @param {string} language
         * @returns {void}
         */
        setLanguage: function(a, e) {
          a.className = a.className.replace(RegExp(d, "gi"), ""), a.classList.add("language-" + e);
        },
        /**
         * Returns the script element that is currently executing.
         *
         * This does __not__ work for line script element.
         *
         * @returns {HTMLScriptElement | null}
         */
        currentScript: function() {
          if (typeof document > "u")
            return null;
          if ("currentScript" in document && 1 < 2)
            return (
              /** @type {any} */
              document.currentScript
            );
          try {
            throw new Error();
          } catch (n) {
            var a = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(n.stack) || [])[1];
            if (a) {
              var e = document.getElementsByTagName("script");
              for (var r in e)
                if (e[r].src == a)
                  return e[r];
            }
            return null;
          }
        },
        /**
         * Returns whether a given class is active for `element`.
         *
         * The class can be activated if `element` or one of its ancestors has the given class and it can be deactivated
         * if `element` or one of its ancestors has the negated version of the given class. The _negated version_ of the
         * given class is just the given class with a `no-` prefix.
         *
         * Whether the class is active is determined by the closest ancestor of `element` (where `element` itself is
         * closest ancestor) that has the given class or the negated version of it. If neither `element` nor any of its
         * ancestors have the given class or the negated version of it, then the default activation will be returned.
         *
         * In the paradoxical situation where the closest ancestor contains __both__ the given class and the negated
         * version of it, the class is considered active.
         *
         * @param {Element} element
         * @param {string} className
         * @param {boolean} [defaultActivation=false]
         * @returns {boolean}
         */
        isActive: function(a, e, r) {
          for (var n = "no-" + e; a; ) {
            var i = a.classList;
            if (i.contains(e))
              return !0;
            if (i.contains(n))
              return !1;
            a = a.parentElement;
          }
          return !!r;
        }
      },
      /**
       * This namespace contains all currently loaded languages and the some helper functions to create and modify languages.
       *
       * @namespace
       * @memberof Prism
       * @public
       */
      languages: {
        /**
         * The grammar for plain, unformatted text.
         */
        plain: S,
        plaintext: S,
        text: S,
        txt: S,
        /**
         * Creates a deep copy of the language with the given id and appends the given tokens.
         *
         * If a token in `redef` also appears in the copied language, then the existing token in the copied language
         * will be overwritten at its original position.
         *
         * ## Best practices
         *
         * Since the position of overwriting tokens (token in `redef` that overwrite tokens in the copied language)
         * doesn't matter, they can technically be in any order. However, this can be confusing to others that trying to
         * understand the language definition because, normally, the order of tokens matters in Prism grammars.
         *
         * Therefore, it is encouraged to order overwriting tokens according to the positions of the overwritten tokens.
         * Furthermore, all non-overwriting tokens should be placed after the overwriting ones.
         *
         * @param {string} id The id of the language to extend. This has to be a key in `Prism.languages`.
         * @param {Grammar} redef The new tokens to append.
         * @returns {Grammar} The new language created.
         * @public
         * @example
         * Prism.languages['css-with-colors'] = Prism.languages.extend('css', {
         *     // Prism.languages.css already has a 'comment' token, so this token will overwrite CSS' 'comment' token
         *     // at its original position
         *     'comment': { ... },
         *     // CSS doesn't have a 'color' token, so this token will be appended
         *     'color': /\b(?:red|green|blue)\b/
         * });
         */
        extend: function(a, e) {
          var r = t.util.clone(t.languages[a]);
          for (var n in e)
            r[n] = e[n];
          return r;
        },
        /**
         * Inserts tokens _before_ another token in a language definition or any other grammar.
         *
         * ## Usage
         *
         * This helper method makes it easy to modify existing languages. For example, the CSS language definition
         * not only defines CSS highlighting for CSS documents, but also needs to define highlighting for CSS embedded
         * in HTML through `<style>` elements. To do this, it needs to modify `Prism.languages.markup` and add the
         * appropriate tokens. However, `Prism.languages.markup` is a regular JavaScript object literal, so if you do
         * this:
         *
         * ```js
         * Prism.languages.markup.style = {
         *     // token
         * };
         * ```
         *
         * then the `style` token will be added (and processed) at the end. `insertBefore` allows you to insert tokens
         * before existing tokens. For the CSS example above, you would use it like this:
         *
         * ```js
         * Prism.languages.insertBefore('markup', 'cdata', {
         *     'style': {
         *         // token
         *     }
         * });
         * ```
         *
         * ## Special cases
         *
         * If the grammars of `inside` and `insert` have tokens with the same name, the tokens in `inside`'s grammar
         * will be ignored.
         *
         * This behavior can be used to insert tokens after `before`:
         *
         * ```js
         * Prism.languages.insertBefore('markup', 'comment', {
         *     'comment': Prism.languages.markup.comment,
         *     // tokens after 'comment'
         * });
         * ```
         *
         * ## Limitations
         *
         * The main problem `insertBefore` has to solve is iteration order. Since ES2015, the iteration order for object
         * properties is guaranteed to be the insertion order (except for integer keys) but some browsers behave
         * differently when keys are deleted and re-inserted. So `insertBefore` can't be implemented by temporarily
         * deleting properties which is necessary to insert at arbitrary positions.
         *
         * To solve this problem, `insertBefore` doesn't actually insert the given tokens into the target object.
         * Instead, it will create a new object and replace all references to the target object with the new one. This
         * can be done without temporarily deleting properties, so the iteration order is well-defined.
         *
         * However, only references that can be reached from `Prism.languages` or `insert` will be replaced. I.e. if
         * you hold the target object in a variable, then the value of the variable will not change.
         *
         * ```js
         * var oldMarkup = Prism.languages.markup;
         * var newMarkup = Prism.languages.insertBefore('markup', 'comment', { ... });
         *
         * assert(oldMarkup !== Prism.languages.markup);
         * assert(newMarkup === Prism.languages.markup);
         * ```
         *
         * @param {string} inside The property of `root` (e.g. a language id in `Prism.languages`) that contains the
         * object to be modified.
         * @param {string} before The key to insert before.
         * @param {Grammar} insert An object containing the key-value pairs to be inserted.
         * @param {Object<string, any>} [root] The object containing `inside`, i.e. the object that contains the
         * object to be modified.
         *
         * Defaults to `Prism.languages`.
         * @returns {Grammar} The new grammar object.
         * @public
         */
        insertBefore: function(a, e, r, n) {
          n = n || /** @type {any} */
          t.languages;
          var i = n[a], l = {};
          for (var o in i)
            if (i.hasOwnProperty(o)) {
              if (o == e)
                for (var u in r)
                  r.hasOwnProperty(u) && (l[u] = r[u]);
              r.hasOwnProperty(o) || (l[o] = i[o]);
            }
          var f = n[a];
          return n[a] = l, t.languages.DFS(t.languages, function(s, y) {
            y === f && s != a && (this[s] = l);
          }), l;
        },
        // Traverse a language definition with Depth First Search
        DFS: function a(e, r, n, i) {
          i = i || {};
          var l = t.util.objId;
          for (var o in e)
            if (e.hasOwnProperty(o)) {
              r.call(e, o, e[o], n || o);
              var u = e[o], f = t.util.type(u);
              f === "Object" && !i[l(u)] ? (i[l(u)] = !0, a(u, r, null, i)) : f === "Array" && !i[l(u)] && (i[l(u)] = !0, a(u, r, o, i));
            }
        }
      },
      plugins: {},
      /**
       * This is the most high-level function in Prism’s API.
       * It fetches all the elements that have a `.language-xxxx` class and then calls {@link Prism.highlightElement} on
       * each one of them.
       *
       * This is equivalent to `Prism.highlightAllUnder(document, async, callback)`.
       *
       * @param {boolean} [async=false] Same as in {@link Prism.highlightAllUnder}.
       * @param {HighlightCallback} [callback] Same as in {@link Prism.highlightAllUnder}.
       * @memberof Prism
       * @public
       */
      highlightAll: function(a, e) {
        t.highlightAllUnder(document, a, e);
      },
      /**
       * Fetches all the descendants of `container` that have a `.language-xxxx` class and then calls
       * {@link Prism.highlightElement} on each one of them.
       *
       * The following hooks will be run:
       * 1. `before-highlightall`
       * 2. `before-all-elements-highlight`
       * 3. All hooks of {@link Prism.highlightElement} for each element.
       *
       * @param {ParentNode} container The root element, whose descendants that have a `.language-xxxx` class will be highlighted.
       * @param {boolean} [async=false] Whether each element is to be highlighted asynchronously using Web Workers.
       * @param {HighlightCallback} [callback] An optional callback to be invoked on each element after its highlighting is done.
       * @memberof Prism
       * @public
       */
      highlightAllUnder: function(a, e, r) {
        var n = {
          callback: r,
          container: a,
          selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
        };
        t.hooks.run("before-highlightall", n), n.elements = Array.prototype.slice.apply(n.container.querySelectorAll(n.selector)), t.hooks.run("before-all-elements-highlight", n);
        for (var i = 0, l; l = n.elements[i++]; )
          t.highlightElement(l, e === !0, n.callback);
      },
      /**
       * Highlights the code inside a single element.
       *
       * The following hooks will be run:
       * 1. `before-sanity-check`
       * 2. `before-highlight`
       * 3. All hooks of {@link Prism.highlight}. These hooks will be run by an asynchronous worker if `async` is `true`.
       * 4. `before-insert`
       * 5. `after-highlight`
       * 6. `complete`
       *
       * Some the above hooks will be skipped if the element doesn't contain any text or there is no grammar loaded for
       * the element's language.
       *
       * @param {Element} element The element containing the code.
       * It must have a class of `language-xxxx` to be processed, where `xxxx` is a valid language identifier.
       * @param {boolean} [async=false] Whether the element is to be highlighted asynchronously using Web Workers
       * to improve performance and avoid blocking the UI when highlighting very large chunks of code. This option is
       * [disabled by default](https://prismjs.com/faq.html#why-is-asynchronous-highlighting-disabled-by-default).
       *
       * Note: All language definitions required to highlight the code must be included in the main `prism.js` file for
       * asynchronous highlighting to work. You can build your own bundle on the
       * [Download page](https://prismjs.com/download.html).
       * @param {HighlightCallback} [callback] An optional callback to be invoked after the highlighting is done.
       * Mostly useful when `async` is `true`, since in that case, the highlighting is done asynchronously.
       * @memberof Prism
       * @public
       */
      highlightElement: function(a, e, r) {
        var n = t.util.getLanguage(a), i = t.languages[n];
        t.util.setLanguage(a, n);
        var l = a.parentElement;
        l && l.nodeName.toLowerCase() === "pre" && t.util.setLanguage(l, n);
        var o = a.textContent, u = {
          element: a,
          language: n,
          grammar: i,
          code: o
        };
        function f(y) {
          u.highlightedCode = y, t.hooks.run("before-insert", u), u.element.innerHTML = u.highlightedCode, t.hooks.run("after-highlight", u), t.hooks.run("complete", u), r && r.call(u.element);
        }
        if (t.hooks.run("before-sanity-check", u), l = u.element.parentElement, l && l.nodeName.toLowerCase() === "pre" && !l.hasAttribute("tabindex") && l.setAttribute("tabindex", "0"), !u.code) {
          t.hooks.run("complete", u), r && r.call(u.element);
          return;
        }
        if (t.hooks.run("before-highlight", u), !u.grammar) {
          f(t.util.encode(u.code));
          return;
        }
        if (e && g.Worker) {
          var s = new Worker(t.filename);
          s.onmessage = function(y) {
            f(y.data);
          }, s.postMessage(JSON.stringify({
            language: u.language,
            code: u.code,
            immediateClose: !0
          }));
        } else
          f(t.highlight(u.code, u.grammar, u.language));
      },
      /**
       * Low-level function, only use if you know what you’re doing. It accepts a string of text as input
       * and the language definitions to use, and returns a string with the HTML produced.
       *
       * The following hooks will be run:
       * 1. `before-tokenize`
       * 2. `after-tokenize`
       * 3. `wrap`: On each {@link Token}.
       *
       * @param {string} text A string with the code to be highlighted.
       * @param {Grammar} grammar An object containing the tokens to use.
       *
       * Usually a language definition like `Prism.languages.markup`.
       * @param {string} language The name of the language definition passed to `grammar`.
       * @returns {string} The highlighted HTML.
       * @memberof Prism
       * @public
       * @example
       * Prism.highlight('var foo = true;', Prism.languages.javascript, 'javascript');
       */
      highlight: function(a, e, r) {
        var n = {
          code: a,
          grammar: e,
          language: r
        };
        if (t.hooks.run("before-tokenize", n), !n.grammar)
          throw new Error('The language "' + n.language + '" has no grammar.');
        return n.tokens = t.tokenize(n.code, n.grammar), t.hooks.run("after-tokenize", n), p.stringify(t.util.encode(n.tokens), n.language);
      },
      /**
       * This is the heart of Prism, and the most low-level function you can use. It accepts a string of text as input
       * and the language definitions to use, and returns an array with the tokenized code.
       *
       * When the language definition includes nested tokens, the function is called recursively on each of these tokens.
       *
       * This method could be useful in other contexts as well, as a very crude parser.
       *
       * @param {string} text A string with the code to be highlighted.
       * @param {Grammar} grammar An object containing the tokens to use.
       *
       * Usually a language definition like `Prism.languages.markup`.
       * @returns {TokenStream} An array of strings and tokens, a token stream.
       * @memberof Prism
       * @public
       * @example
       * let code = `var foo = 0;`;
       * let tokens = Prism.tokenize(code, Prism.languages.javascript);
       * tokens.forEach(token => {
       *     if (token instanceof Prism.Token && token.type === 'number') {
       *         console.log(`Found numeric literal: ${token.content}`);
       *     }
       * });
       */
      tokenize: function(a, e) {
        var r = e.rest;
        if (r) {
          for (var n in r)
            e[n] = r[n];
          delete e.rest;
        }
        var i = new Q();
        return L(i, i.head, a), T(a, i, e, i.head, 0), K(i);
      },
      /**
       * @namespace
       * @memberof Prism
       * @public
       */
      hooks: {
        all: {},
        /**
         * Adds the given callback to the list of callbacks for the given hook.
         *
         * The callback will be invoked when the hook it is registered for is run.
         * Hooks are usually directly run by a highlight function but you can also run hooks yourself.
         *
         * One callback function can be registered to multiple hooks and the same hook multiple times.
         *
         * @param {string} name The name of the hook.
         * @param {HookCallback} callback The callback function which is given environment variables.
         * @public
         */
        add: function(a, e) {
          var r = t.hooks.all;
          r[a] = r[a] || [], r[a].push(e);
        },
        /**
         * Runs a hook invoking all registered callbacks with the given environment variables.
         *
         * Callbacks will be invoked synchronously and in the order in which they were registered.
         *
         * @param {string} name The name of the hook.
         * @param {Object<string, any>} env The environment variables of the hook passed to all callbacks registered.
         * @public
         */
        run: function(a, e) {
          var r = t.hooks.all[a];
          if (!(!r || !r.length))
            for (var n = 0, i; i = r[n++]; )
              i(e);
        }
      },
      Token: p
    };
    g.Prism = t;
    function p(a, e, r, n) {
      this.type = a, this.content = e, this.alias = r, this.length = (n || "").length | 0;
    }
    p.stringify = function a(e, r) {
      if (typeof e == "string")
        return e;
      if (Array.isArray(e)) {
        var n = "";
        return e.forEach(function(f) {
          n += a(f, r);
        }), n;
      }
      var i = {
        type: e.type,
        content: a(e.content, r),
        tag: "span",
        classes: ["token", e.type],
        attributes: {},
        language: r
      }, l = e.alias;
      l && (Array.isArray(l) ? Array.prototype.push.apply(i.classes, l) : i.classes.push(l)), t.hooks.run("wrap", i);
      var o = "";
      for (var u in i.attributes)
        o += " " + u + '="' + (i.attributes[u] || "").replace(/"/g, "&quot;") + '"';
      return "<" + i.tag + ' class="' + i.classes.join(" ") + '"' + o + ">" + i.content + "</" + i.tag + ">";
    };
    function H(a, e, r, n) {
      a.lastIndex = e;
      var i = a.exec(r);
      if (i && n && i[1]) {
        var l = i[1].length;
        i.index += l, i[0] = i[0].slice(l);
      }
      return i;
    }
    function T(a, e, r, n, i, l) {
      for (var o in r)
        if (!(!r.hasOwnProperty(o) || !r[o])) {
          var u = r[o];
          u = Array.isArray(u) ? u : [u];
          for (var f = 0; f < u.length; ++f) {
            if (l && l.cause == o + "," + f)
              return;
            var s = u[f], y = s.inside, F = !!s.lookbehind, _ = !!s.greedy, V = s.alias;
            if (_ && !s.pattern.global) {
              var X = s.pattern.toString().match(/[imsuy]*$/)[0];
              s.pattern = RegExp(s.pattern.source, X + "g");
            }
            for (var k = s.pattern || s, c = n.next, v = i; c !== e.tail && !(l && v >= l.reach); v += c.value.length, c = c.next) {
              var A = c.value;
              if (e.length > a.length)
                return;
              if (!(A instanceof p)) {
                var O = 1, h;
                if (_) {
                  if (h = H(k, v, a, F), !h || h.index >= a.length)
                    break;
                  var M = h.index, Y = h.index + h[0].length, x = v;
                  for (x += c.value.length; M >= x; )
                    c = c.next, x += c.value.length;
                  if (x -= c.value.length, v = x, c.value instanceof p)
                    continue;
                  for (var P = c; P !== e.tail && (x < Y || typeof P.value == "string"); P = P.next)
                    O++, x += P.value.length;
                  O--, A = a.slice(v, x), h.index -= v;
                } else if (h = H(k, 0, A, F), !h)
                  continue;
                var M = h.index, I = h[0], D = A.slice(0, M), B = A.slice(M + I.length), q = v + A.length;
                l && q > l.reach && (l.reach = q);
                var W = c.prev;
                D && (W = L(e, W, D), v += D.length), R(e, W, O);
                var Z = new p(o, y ? t.tokenize(I, y) : I, V, I);
                if (c = L(e, W, Z), B && L(e, c, B), O > 1) {
                  var G = {
                    cause: o + "," + f,
                    reach: q
                  };
                  T(a, e, r, c.prev, v, G), l && G.reach > l.reach && (l.reach = G.reach);
                }
              }
            }
          }
        }
    }
    function Q() {
      var a = { value: null, prev: null, next: null }, e = { value: null, prev: a, next: null };
      a.next = e, this.head = a, this.tail = e, this.length = 0;
    }
    function L(a, e, r) {
      var n = e.next, i = { value: r, prev: e, next: n };
      return e.next = i, n.prev = i, a.length++, i;
    }
    function R(a, e, r) {
      for (var n = e.next, i = 0; i < r && n !== a.tail; i++)
        n = n.next;
      e.next = n, n.prev = e, a.length -= i;
    }
    function K(a) {
      for (var e = [], r = a.head.next; r !== a.tail; )
        e.push(r.value), r = r.next;
      return e;
    }
    if (!g.document)
      return g.addEventListener && (t.disableWorkerMessageHandler || g.addEventListener("message", function(a) {
        var e = JSON.parse(a.data), r = e.language, n = e.code, i = e.immediateClose;
        g.postMessage(t.highlight(n, t.languages[r], r)), i && g.close();
      }, !1)), t;
    var E = t.util.currentScript();
    E && (t.filename = E.src, E.hasAttribute("data-manual") && (t.manual = !0));
    function z() {
      t.manual || t.highlightAll();
    }
    if (!t.manual) {
      var $ = document.readyState;
      $ === "loading" || $ === "interactive" && E && E.defer ? document.addEventListener("DOMContentLoaded", z) : window.requestAnimationFrame ? window.requestAnimationFrame(z) : window.setTimeout(z, 16);
    }
    return t;
  }(C);
  m.exports && (m.exports = w), typeof J < "u" && (J.Prism = w);
})(U);
var j = U.exports;
const ae = /* @__PURE__ */ N(j), ne = /* @__PURE__ */ ee({
  __proto__: null,
  default: ae
}, [j]);
export {
  ne as p
};
