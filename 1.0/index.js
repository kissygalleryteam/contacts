KISSY.add("gallery/contacts/1.0/underscore", function (S) {
var underscoreObj = {};

(function() {
    var n = this,
    t = n._,
    r = {},
    e = Array.prototype,
    u = Object.prototype,
    i = Function.prototype,
    a = e.push,
    o = e.slice,
    c = e.concat,
    l = u.toString,
    f = u.hasOwnProperty,
    s = e.forEach,
    p = e.map,
    v = e.reduce,
    h = e.reduceRight,
    g = e.filter,
    d = e.every,
    m = e.some,
    y = e.indexOf,
    b = e.lastIndexOf,
    x = Array.isArray,
    _ = Object.keys,
    j = i.bind,
    w = function(n) {
        return n instanceof w ? n: this instanceof w ? (this._wrapped = n, void 0) : new w(n)
    };
    "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = w), exports._ = w) : n._ = w,
    w.VERSION = "1.4.3";
    var A = w.each = w.forEach = function(n, t, e) {
        if (null != n) if (s && n.forEach === s) n.forEach(t, e);
        else if (n.length === +n.length) {
            for (var u = 0,
            i = n.length; i > u; u++) if (t.call(e, n[u], u, n) === r) return
        } else for (var a in n) if (w.has(n, a) && t.call(e, n[a], a, n) === r) return
    };
    w.map = w.collect = function(n, t, r) {
        var e = [];
        return null == n ? e: p && n.map === p ? n.map(t, r) : (A(n,
        function(n, u, i) {
            e[e.length] = t.call(r, n, u, i)
        }), e)
    };
    var O = "Reduce of empty array with no initial value";
    w.reduce = w.foldl = w.inject = function(n, t, r, e) {
        var u = arguments.length > 2;
        if (null == n && (n = []), v && n.reduce === v) return e && (t = w.bind(t, e)),
        u ? n.reduce(t, r) : n.reduce(t);
        if (A(n,
        function(n, i, a) {
            u ? r = t.call(e, r, n, i, a) : (r = n, u = !0)
        }), !u) throw new TypeError(O);
        return r
    },
    w.reduceRight = w.foldr = function(n, t, r, e) {
        var u = arguments.length > 2;
        if (null == n && (n = []), h && n.reduceRight === h) return e && (t = w.bind(t, e)),
        u ? n.reduceRight(t, r) : n.reduceRight(t);
        var i = n.length;
        if (i !== +i) {
            var a = w.keys(n);
            i = a.length
        }
        if (A(n,
        function(o, c, l) {
            c = a ? a[--i] : --i,
            u ? r = t.call(e, r, n[c], c, l) : (r = n[c], u = !0)
        }), !u) throw new TypeError(O);
        return r
    },
    w.find = w.detect = function(n, t, r) {
        var e;
        return E(n,
        function(n, u, i) {
            return t.call(r, n, u, i) ? (e = n, !0) : void 0
        }),
        e
    },
    w.filter = w.select = function(n, t, r) {
        var e = [];
        return null == n ? e: g && n.filter === g ? n.filter(t, r) : (A(n,
        function(n, u, i) {
            t.call(r, n, u, i) && (e[e.length] = n)
        }), e)
    },
    w.reject = function(n, t, r) {
        return w.filter(n,
        function(n, e, u) {
            return ! t.call(r, n, e, u)
        },
        r)
    },
    w.every = w.all = function(n, t, e) {
        t || (t = w.identity);
        var u = !0;
        return null == n ? u: d && n.every === d ? n.every(t, e) : (A(n,
        function(n, i, a) {
            return (u = u && t.call(e, n, i, a)) ? void 0 : r
        }), !!u)
    };
    var E = w.some = w.any = function(n, t, e) {
        t || (t = w.identity);
        var u = !1;
        return null == n ? u: m && n.some === m ? n.some(t, e) : (A(n,
        function(n, i, a) {
            return u || (u = t.call(e, n, i, a)) ? r: void 0
        }), !!u)
    };
    w.contains = w.include = function(n, t) {
        return null == n ? !1 : y && n.indexOf === y ? -1 != n.indexOf(t) : E(n,
        function(n) {
            return n === t
        })
    },
    w.invoke = function(n, t) {
        var r = o.call(arguments, 2);
        return w.map(n,
        function(n) {
            return (w.isFunction(t) ? t: n[t]).apply(n, r)
        })
    },
    w.pluck = function(n, t) {
        return w.map(n,
        function(n) {
            return n[t]
        })
    },
    w.where = function(n, t) {
        return w.isEmpty(t) ? [] : w.filter(n,
        function(n) {
            for (var r in t) if (t[r] !== n[r]) return ! 1;
            return ! 0
        })
    },
    w.max = function(n, t, r) {
        if (!t && w.isArray(n) && n[0] === +n[0] && 65535 > n.length) return Math.max.apply(Math, n);
        if (!t && w.isEmpty(n)) return - 1 / 0;
        var e = {
            computed: -1 / 0,
            value: -1 / 0
        };
        return A(n,
        function(n, u, i) {
            var a = t ? t.call(r, n, u, i) : n;
            a >= e.computed && (e = {
                value: n,
                computed: a
            })
        }),
        e.value
    },
    w.min = function(n, t, r) {
        if (!t && w.isArray(n) && n[0] === +n[0] && 65535 > n.length) return Math.min.apply(Math, n);
        if (!t && w.isEmpty(n)) return 1 / 0;
        var e = {
            computed: 1 / 0,
            value: 1 / 0
        };
        return A(n,
        function(n, u, i) {
            var a = t ? t.call(r, n, u, i) : n;
            e.computed > a && (e = {
                value: n,
                computed: a
            })
        }),
        e.value
    },
    w.shuffle = function(n) {
        var t, r = 0,
        e = [];
        return A(n,
        function(n) {
            t = w.random(r++),
            e[r - 1] = e[t],
            e[t] = n
        }),
        e
    };
    var F = function(n) {
        return w.isFunction(n) ? n: function(t) {
            return t[n]
        }
    };
    w.sortBy = function(n, t, r) {
        var e = F(t);
        return w.pluck(w.map(n,
        function(n, t, u) {
            return {
                value: n,
                index: t,
                criteria: e.call(r, n, t, u)
            }
        }).sort(function(n, t) {
            var r = n.criteria,
            e = t.criteria;
            if (r !== e) {
                if (r > e || void 0 === r) return 1;
                if (e > r || void 0 === e) return - 1
            }
            return n.index < t.index ? -1 : 1
        }), "value")
    };
    var k = function(n, t, r, e) {
        var u = {},
        i = F(t || w.identity);
        return A(n,
        function(t, a) {
            var o = i.call(r, t, a, n);
            e(u, o, t)
        }),
        u
    };
    w.groupBy = function(n, t, r) {
        return k(n, t, r,
        function(n, t, r) { (w.has(n, t) ? n[t] : n[t] = []).push(r)
        })
    },
    w.countBy = function(n, t, r) {
        return k(n, t, r,
        function(n, t) {
            w.has(n, t) || (n[t] = 0),
            n[t]++
        })
    },
    w.sortedIndex = function(n, t, r, e) {
        r = null == r ? w.identity: F(r);
        for (var u = r.call(e, t), i = 0, a = n.length; a > i;) {
            var o = i + a >>> 1;
            u > r.call(e, n[o]) ? i = o + 1 : a = o
        }
        return i
    },
    w.toArray = function(n) {
        return n ? w.isArray(n) ? o.call(n) : n.length === +n.length ? w.map(n, w.identity) : w.values(n) : []
    },
    w.size = function(n) {
        return null == n ? 0 : n.length === +n.length ? n.length: w.keys(n).length
    },
    w.first = w.head = w.take = function(n, t, r) {
        return null == n ? void 0 : null == t || r ? n[0] : o.call(n, 0, t)
    },
    w.initial = function(n, t, r) {
        return o.call(n, 0, n.length - (null == t || r ? 1 : t))
    },
    w.last = function(n, t, r) {
        return null == n ? void 0 : null == t || r ? n[n.length - 1] : o.call(n, Math.max(n.length - t, 0))
    },
    w.rest = w.tail = w.drop = function(n, t, r) {
        return o.call(n, null == t || r ? 1 : t)
    },
    w.compact = function(n) {
        return w.filter(n, w.identity)
    };
    var R = function(n, t, r) {
        return A(n,
        function(n) {
            w.isArray(n) ? t ? a.apply(r, n) : R(n, t, r) : r.push(n)
        }),
        r
    };
    w.flatten = function(n, t) {
        return R(n, t, [])
    },
    w.without = function(n) {
        return w.difference(n, o.call(arguments, 1))
    },
    w.uniq = w.unique = function(n, t, r, e) {
        w.isFunction(t) && (e = r, r = t, t = !1);
        var u = r ? w.map(n, r, e) : n,
        i = [],
        a = [];
        return A(u,
        function(r, e) { (t ? e && a[a.length - 1] === r: w.contains(a, r)) || (a.push(r), i.push(n[e]))
        }),
        i
    },
    w.union = function() {
        return w.uniq(c.apply(e, arguments))
    },
    w.intersection = function(n) {
        var t = o.call(arguments, 1);
        return w.filter(w.uniq(n),
        function(n) {
            return w.every(t,
            function(t) {
                return w.indexOf(t, n) >= 0
            })
        })
    },
    w.difference = function(n) {
        var t = c.apply(e, o.call(arguments, 1));
        return w.filter(n,
        function(n) {
            return ! w.contains(t, n)
        })
    },
    w.zip = function() {
        for (var n = o.call(arguments), t = w.max(w.pluck(n, "length")), r = Array(t), e = 0; t > e; e++) r[e] = w.pluck(n, "" + e);
        return r
    },
    w.object = function(n, t) {
        if (null == n) return {};
        for (var r = {},
        e = 0,
        u = n.length; u > e; e++) t ? r[n[e]] = t[e] : r[n[e][0]] = n[e][1];
        return r
    },
    w.indexOf = function(n, t, r) {
        if (null == n) return - 1;
        var e = 0,
        u = n.length;
        if (r) {
            if ("number" != typeof r) return e = w.sortedIndex(n, t),
            n[e] === t ? e: -1;
            e = 0 > r ? Math.max(0, u + r) : r
        }
        if (y && n.indexOf === y) return n.indexOf(t, r);
        for (; u > e; e++) if (n[e] === t) return e;
        return - 1
    },
    w.lastIndexOf = function(n, t, r) {
        if (null == n) return - 1;
        var e = null != r;
        if (b && n.lastIndexOf === b) return e ? n.lastIndexOf(t, r) : n.lastIndexOf(t);
        for (var u = e ? r: n.length; u--;) if (n[u] === t) return u;
        return - 1
    },
    w.range = function(n, t, r) {
        1 >= arguments.length && (t = n || 0, n = 0),
        r = arguments[2] || 1;
        for (var e = Math.max(Math.ceil((t - n) / r), 0), u = 0, i = Array(e); e > u;) i[u++] = n,
        n += r;
        return i
    };
    var I = function() {};
    w.bind = function(n, t) {
        var r, e;
        if (n.bind === j && j) return j.apply(n, o.call(arguments, 1));
        if (!w.isFunction(n)) throw new TypeError;
        return r = o.call(arguments, 2),
        e = function() {
            if (! (this instanceof e)) return n.apply(t, r.concat(o.call(arguments)));
            I.prototype = n.prototype;
            var u = new I;
            I.prototype = null;
            var i = n.apply(u, r.concat(o.call(arguments)));
            return Object(i) === i ? i: u
        }
    },
    w.bindAll = function(n) {
        var t = o.call(arguments, 1);
        return 0 == t.length && (t = w.functions(n)),
        A(t,
        function(t) {
            n[t] = w.bind(n[t], n)
        }),
        n
    },
    w.memoize = function(n, t) {
        var r = {};
        return t || (t = w.identity),
        function() {
            var e = t.apply(this, arguments);
            return w.has(r, e) ? r[e] : r[e] = n.apply(this, arguments)
        }
    },
    w.delay = function(n, t) {
        var r = o.call(arguments, 2);
        return setTimeout(function() {
            return n.apply(null, r)
        },
        t)
    },
    w.defer = function(n) {
        return w.delay.apply(w, [n, 1].concat(o.call(arguments, 1)))
    },
    w.throttle = function(n, t) {
        var r, e, u, i, a = 0,
        o = function() {
            a = new Date,
            u = null,
            i = n.apply(r, e)
        };
        return function() {
            var c = new Date,
            l = t - (c - a);
            return r = this,
            e = arguments,
            0 >= l ? (clearTimeout(u), u = null, a = c, i = n.apply(r, e)) : u || (u = setTimeout(o, l)),
            i
        }
    },
    w.debounce = function(n, t, r) {
        var e, u;
        return function() {
            var i = this,
            a = arguments,
            o = function() {
                e = null,
                r || (u = n.apply(i, a))
            },
            c = r && !e;
            return clearTimeout(e),
            e = setTimeout(o, t),
            c && (u = n.apply(i, a)),
            u
        }
    },
    w.once = function(n) {
        var t, r = !1;
        return function() {
            return r ? t: (r = !0, t = n.apply(this, arguments), n = null, t)
        }
    },
    w.wrap = function(n, t) {
        return function() {
            var r = [n];
            return a.apply(r, arguments),
            t.apply(this, r)
        }
    },
    w.compose = function() {
        var n = arguments;
        return function() {
            for (var t = arguments,
            r = n.length - 1; r >= 0; r--) t = [n[r].apply(this, t)];
            return t[0]
        }
    },
    w.after = function(n, t) {
        return 0 >= n ? t() : function() {
            return 1 > --n ? t.apply(this, arguments) : void 0
        }
    },
    w.keys = _ ||
    function(n) {
        if (n !== Object(n)) throw new TypeError("Invalid object");
        var t = [];
        for (var r in n) w.has(n, r) && (t[t.length] = r);
        return t
    },
    w.values = function(n) {
        var t = [];
        for (var r in n) w.has(n, r) && t.push(n[r]);
        return t
    },
    w.pairs = function(n) {
        var t = [];
        for (var r in n) w.has(n, r) && t.push([r, n[r]]);
        return t
    },
    w.invert = function(n) {
        var t = {};
        for (var r in n) w.has(n, r) && (t[n[r]] = r);
        return t
    },
    w.functions = w.methods = function(n) {
        var t = [];
        for (var r in n) w.isFunction(n[r]) && t.push(r);
        return t.sort()
    },
    w.extend = function(n) {
        return A(o.call(arguments, 1),
        function(t) {
            if (t) for (var r in t) n[r] = t[r]
        }),
        n
    },
    w.pick = function(n) {
        var t = {},
        r = c.apply(e, o.call(arguments, 1));
        return A(r,
        function(r) {
            r in n && (t[r] = n[r])
        }),
        t
    },
    w.omit = function(n) {
        var t = {},
        r = c.apply(e, o.call(arguments, 1));
        for (var u in n) w.contains(r, u) || (t[u] = n[u]);
        return t
    },
    w.defaults = function(n) {
        return A(o.call(arguments, 1),
        function(t) {
            if (t) for (var r in t) null == n[r] && (n[r] = t[r])
        }),
        n
    },
    w.clone = function(n) {
        return w.isObject(n) ? w.isArray(n) ? n.slice() : w.extend({},
        n) : n
    },
    w.tap = function(n, t) {
        return t(n),
        n
    };
    var S = function(n, t, r, e) {
        if (n === t) return 0 !== n || 1 / n == 1 / t;
        if (null == n || null == t) return n === t;
        n instanceof w && (n = n._wrapped),
        t instanceof w && (t = t._wrapped);
        var u = l.call(n);
        if (u != l.call(t)) return ! 1;
        switch (u) {
        case "[object String]":
            return n == t + "";
        case "[object Number]":
            return n != +n ? t != +t: 0 == n ? 1 / n == 1 / t: n == +t;
        case "[object Date]":
        case "[object Boolean]":
            return + n == +t;
        case "[object RegExp]":
            return n.source == t.source && n.global == t.global && n.multiline == t.multiline && n.ignoreCase == t.ignoreCase
        }
        if ("object" != typeof n || "object" != typeof t) return ! 1;
        for (var i = r.length; i--;) if (r[i] == n) return e[i] == t;
        r.push(n),
        e.push(t);
        var a = 0,
        o = !0;
        if ("[object Array]" == u) {
            if (a = n.length, o = a == t.length) for (; a--&&(o = S(n[a], t[a], r, e)););
        } else {
            var c = n.constructor,
            f = t.constructor;
            if (c !== f && !(w.isFunction(c) && c instanceof c && w.isFunction(f) && f instanceof f)) return ! 1;
            for (var s in n) if (w.has(n, s) && (a++, !(o = w.has(t, s) && S(n[s], t[s], r, e)))) break;
            if (o) {
                for (s in t) if (w.has(t, s) && !a--) break;
                o = !a
            }
        }
        return r.pop(),
        e.pop(),
        o
    };
    w.isEqual = function(n, t) {
        return S(n, t, [], [])
    },
    w.isEmpty = function(n) {
        if (null == n) return ! 0;
        if (w.isArray(n) || w.isString(n)) return 0 === n.length;
        for (var t in n) if (w.has(n, t)) return ! 1;
        return ! 0
    },
    w.isElement = function(n) {
        return ! (!n || 1 !== n.nodeType)
    },
    w.isArray = x ||
    function(n) {
        return "[object Array]" == l.call(n)
    },
    w.isObject = function(n) {
        return n === Object(n)
    },
    A(["Arguments", "Function", "String", "Number", "Date", "RegExp"],
    function(n) {
        w["is" + n] = function(t) {
            return l.call(t) == "[object " + n + "]"
        }
    }),
    w.isArguments(arguments) || (w.isArguments = function(n) {
        return ! (!n || !w.has(n, "callee"))
    }),
    w.isFunction = function(n) {
        return "function" == typeof n
    },
    w.isFinite = function(n) {
        return isFinite(n) && !isNaN(parseFloat(n))
    },
    w.isNaN = function(n) {
        return w.isNumber(n) && n != +n
    },
    w.isBoolean = function(n) {
        return n === !0 || n === !1 || "[object Boolean]" == l.call(n)
    },
    w.isNull = function(n) {
        return null === n
    },
    w.isUndefined = function(n) {
        return void 0 === n
    },
    w.has = function(n, t) {
        return f.call(n, t)
    },
    w.noConflict = function() {
        return n._ = t,
        this
    },
    w.identity = function(n) {
        return n
    },
    w.times = function(n, t, r) {
        for (var e = Array(n), u = 0; n > u; u++) e[u] = t.call(r, u);
        return e
    },
    w.random = function(n, t) {
        return null == t && (t = n, n = 0),
        n + (0 | Math.random() * (t - n + 1))
    };
    var T = {
        escape: {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;",
            "/": "&#x2F;"
        }
    };
    T.unescape = w.invert(T.escape);
    var M = {
        escape: RegExp("[" + w.keys(T.escape).join("") + "]", "g"),
        unescape: RegExp("(" + w.keys(T.unescape).join("|") + ")", "g")
    };
    w.each(["escape", "unescape"],
    function(n) {
        w[n] = function(t) {
            return null == t ? "": ("" + t).replace(M[n],
            function(t) {
                return T[n][t]
            })
        }
    }),
    w.result = function(n, t) {
        if (null == n) return null;
        var r = n[t];
        return w.isFunction(r) ? r.call(n) : r
    },
    w.mixin = function(n) {
        A(w.functions(n),
        function(t) {
            var r = w[t] = n[t];
            w.prototype[t] = function() {
                var n = [this._wrapped];
                return a.apply(n, arguments),
                z.call(this, r.apply(w, n))
            }
        })
    };
    var N = 0;
    w.uniqueId = function(n) {
        var t = "" + ++N;
        return n ? n + t: t
    },
    w.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    };
    var q = /(.)^/,
    B = {
        "'": "'",
        "\\": "\\",
        "\r": "r",
        "\n": "n",
        "	": "t",
        "\u2028": "u2028",
        "\u2029": "u2029"
    },
    D = /\\|'|\r|\n|\t|\u2028|\u2029/g;
    w.template = function(n, t, r) {
        r = w.defaults({},
        r, w.templateSettings);
        var e = RegExp([(r.escape || q).source, (r.interpolate || q).source, (r.evaluate || q).source].join("|") + "|$", "g"),
        u = 0,
        i = "__p+='";
        n.replace(e,
        function(t, r, e, a, o) {
            return i += n.slice(u, o).replace(D,
            function(n) {
                return "\\" + B[n]
            }),
            r && (i += "'+\n((__t=(" + r + "))==null?'':_.escape(__t))+\n'"),
            e && (i += "'+\n((__t=(" + e + "))==null?'':__t)+\n'"),
            a && (i += "';\n" + a + "\n__p+='"),
            u = o + t.length,
            t
        }),
        i += "';\n",
        r.variable || (i = "with(obj||{}){\n" + i + "}\n"),
        i = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + i + "return __p;\n";
        try {
            var a = Function(r.variable || "obj", "_", i)
        } catch(o) {
            throw o.source = i,
            o
        }
        if (t) return a(t, w);
        var c = function(n) {
            return a.call(this, n, w)
        };
        return c.source = "function(" + (r.variable || "obj") + "){\n" + i + "}",
        c
    },
    w.chain = function(n) {
        return w(n).chain()
    };
    var z = function(n) {
        return this._chain ? w(n).chain() : n
    };
    w.mixin(w),
    A(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"],
    function(n) {
        var t = e[n];
        w.prototype[n] = function() {
            var r = this._wrapped;
            return t.apply(r, arguments),
            "shift" != n && "splice" != n || 0 !== r.length || delete r[0],
            z.call(this, r)
        }
    }),
    A(["concat", "join", "slice"],
    function(n) {
        var t = e[n];
        w.prototype[n] = function() {
            return z.call(this, t.apply(this._wrapped, arguments))
        }
    }),
    w.extend(w.prototype, {
        chain: function() {
            return this._chain = !0,
            this
        },
        value: function() {
            return this._wrapped
        }
    });
    
    underscoreObj = w;
}).call(this);

return underscoreObj;

});



KISSY.add("gallery/contacts/1.0/zepto", function (S) {

//var _zepto;


/*pub-1|2012-09-14 10:56:27*/(function(A){String.prototype.trim===A&&(String.prototype.trim=function(){return this.replace(/^\s+/,"").replace(/\s+$/,"")}),Array.prototype.reduce===A&&(Array.prototype.reduce=function(B){if(this===void 0||this===null){throw new TypeError}var F=Object(this),E=F.length>>>0,D=0,C;if(typeof B!="function"){throw new TypeError}if(E==0&&arguments.length==1){throw new TypeError}if(arguments.length>=2){C=arguments[1]}else{do{if(D in F){C=F[D++];break}if(++D>=E){throw new TypeError}}while(!0)}while(D<E){D in F&&(C=B.call(A,C,F[D],D,F)),D++}return C})})();var Zepto=function(){function A(a){return v.call(a)=="[object Function]"}function B(a){return a instanceof Object}function C(b){var c,d;if(v.call(b)!=="[object Object]"){return !1}d=A(b.constructor)&&b.constructor.prototype;if(!d||!hasOwnProperty.call(d,"isPrototypeOf")){return !1}for(c in b){}return c===a||hasOwnProperty.call(b,c)}function D(a){return a instanceof Array}function E(a){return typeof a.length=="number"}function F(b){return b.filter(function(b){return b!==a&&b!==null})}function G(a){return a.length>0?[].concat.apply([],a):a}function H(a){return a.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function I(a){return a in i?i[a]:i[a]=new RegExp("(^|\\s)"+a+"(\\s|$)")}function J(a,b){return typeof b=="number"&&!k[H(a)]?b+"px":b}function K(a){var b,c;return h[a]||(b=g.createElement(a),g.body.appendChild(b),c=j(b,"").getPropertyValue("display"),b.parentNode.removeChild(b),c=="none"&&(c="block"),h[a]=c),h[a]}function L(b,d){return d===a?c(b):c(b).filter(d)}function M(a,b,c,d){return A(b)?b.call(a,c,d):b}function N(a,b,d){var e=a%2?b:b.parentNode;e?e.insertBefore(d,a?a==1?e.firstChild:a==2?b:null:b.nextSibling):c(d).remove()}function O(a,b){b(a);for(var c in a.childNodes){O(a.childNodes[c],b)}}var a,b,c,d,e=[],f=e.slice,g=window.document,h={},i={},j=g.defaultView.getComputedStyle,k={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},l=/^\s*<(\w+|!)[^>]*>/,m=[1,3,8,9,11],n=["after","prepend","before","append"],o=g.createElement("table"),p=g.createElement("tr"),q={tr:g.createElement("tbody"),tbody:o,thead:o,tfoot:o,td:p,th:p,"*":g.createElement("div")},r=/complete|loaded|interactive/,s=/^\.([\w-]+)$/,t=/^#([\w-]+)$/,u=/^[\w-]+$/,v={}.toString,w={},x,y,z=g.createElement("div");return w.matches=function(a,b){if(!a||a.nodeType!==1){return !1}var c=a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.matchesSelector;if(c){return c.call(a,b)}var d,e=a.parentNode,f=!e;return f&&(e=z).appendChild(a),d=~w.qsa(e,b).indexOf(a),f&&z.removeChild(a),d},x=function(a){return a.replace(/-+(.)?/g,function(a,b){return b?b.toUpperCase():""})},y=function(a){return a.filter(function(b,c){return a.indexOf(b)==c})},w.fragment=function(b,d){d===a&&(d=l.test(b)&&RegExp.$1),d in q||(d="*");var e=q[d];return e.innerHTML=""+b,c.each(f.call(e.childNodes),function(){e.removeChild(this)})},w.Z=function(a,b){return a=a||[],a.__proto__=arguments.callee.prototype,a.selector=b||"",a},w.isZ=function(a){return a instanceof w.Z},w.init=function(b,d){if(!b){return w.Z()}if(A(b)){return c(g).ready(b)}if(w.isZ(b)){return b}var e;if(D(b)){e=F(b)}else{if(C(b)){e=[c.extend({},b)],b=null}else{if(m.indexOf(b.nodeType)>=0||b===window){e=[b],b=null}else{if(l.test(b)){e=w.fragment(b.trim(),RegExp.$1),b=null}else{if(d!==a){return c(d).find(b)}e=w.qsa(g,b)}}}}return w.Z(e,b)},c=function(a,b){return w.init(a,b)},c.extend=function(c){return f.call(arguments,1).forEach(function(d){for(b in d){d[b]!==a&&(c[b]=d[b])}}),c},w.qsa=function(a,b){var c;return a===g&&t.test(b)?(c=a.getElementById(RegExp.$1))?[c]:e:a.nodeType!==1&&a.nodeType!==9?e:f.call(s.test(b)?a.getElementsByClassName(RegExp.$1):u.test(b)?a.getElementsByTagName(b):a.querySelectorAll(b))},c.isFunction=A,c.isObject=B,c.isArray=D,c.isPlainObject=C,c.inArray=function(a,b,c){return e.indexOf.call(b,a,c)},c.trim=function(a){return a.trim()},c.uuid=0,c.map=function(a,b){var c,d=[],e,f;if(E(a)){for(e=0;e<a.length;e++){c=b(a[e],e),c!=null&&d.push(c)}}else{for(f in a){c=b(a[f],f),c!=null&&d.push(c)}}return G(d)},c.each=function(a,b){var c,d;if(E(a)){for(c=0;c<a.length;c++){if(b.call(a[c],c,a[c])===!1){return a}}}else{for(d in a){if(b.call(a[d],d,a[d])===!1){return a}}}return a},c.fn={forEach:e.forEach,reduce:e.reduce,push:e.push,indexOf:e.indexOf,concat:e.concat,map:function(a){return c.map(this,function(b,c){return a.call(b,c,b)})},slice:function(){return c(f.apply(this,arguments))},ready:function(a){return r.test(g.readyState)?a(c):g.addEventListener("DOMContentLoaded",function(){a(c)},!1),this},get:function(b){return b===a?f.call(this):this[b]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){this.parentNode!=null&&this.parentNode.removeChild(this)})},each:function(a){return this.forEach(function(b,c){a.call(b,c,b)}),this},filter:function(a){return c([].filter.call(this,function(b){return w.matches(b,a)}))},add:function(a,b){return c(y(this.concat(c(a,b))))},is:function(a){return this.length>0&&w.matches(this[0],a)},not:function(b){var d=[];if(A(b)&&b.call!==a){this.each(function(a){b.call(this,a)||d.push(this)})}else{var e=typeof b=="string"?this.filter(b):E(b)&&A(b.item)?f.call(b):c(b);this.forEach(function(a){e.indexOf(a)<0&&d.push(a)})}return c(d)},eq:function(a){return a===-1?this.slice(a):this.slice(a,+a+1)},first:function(){var a=this[0];return a&&!B(a)?a:c(a)},last:function(){var a=this[this.length-1];return a&&!B(a)?a:c(a)},find:function(a){var b;return this.length==1?b=w.qsa(this[0],a):b=this.map(function(){return w.qsa(this,a)}),c(b)},closest:function(a,b){var d=this[0];while(d&&!w.matches(d,a)){d=d!==b&&d!==g&&d.parentNode}return c(d)},parents:function(a){var b=[],d=this;while(d.length>0){d=c.map(d,function(a){if((a=a.parentNode)&&a!==g&&b.indexOf(a)<0){return b.push(a),a}})}return L(b,a)},parent:function(a){return L(y(this.pluck("parentNode")),a)},children:function(a){return L(this.map(function(){return f.call(this.children)}),a)},siblings:function(a){return L(this.map(function(a,b){return f.call(b.parentNode.children).filter(function(a){return a!==b})}),a)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(a){return this.map(function(){return this[a]})},show:function(){return this.each(function(){this.style.display=="none"&&(this.style.display=null),j(this,"").getPropertyValue("display")=="none"&&(this.style.display=K(this.nodeName))})},replaceWith:function(a){return this.before(a).remove()},wrap:function(a){return this.each(function(){c(this).wrapAll(c(a)[0].cloneNode(!1))})},wrapAll:function(a){return this[0]&&(c(this[0]).before(a=c(a)),a.append(this)),this},unwrap:function(){return this.parent().each(function(){c(this).replaceWith(c(this).children())}),this},clone:function(){return c(this.map(function(){return this.cloneNode(!0)}))},hide:function(){return this.css("display","none")},toggle:function(b){return(b===a?this.css("display")=="none":b)?this.show():this.hide()},prev:function(){return c(this.pluck("previousElementSibling"))},next:function(){return c(this.pluck("nextElementSibling"))},html:function(b){return b===a?this.length>0?this[0].innerHTML:null:this.each(function(a){var d=this.innerHTML;c(this).empty().append(M(this,b,a,d))})},text:function(b){return b===a?this.length>0?this[0].textContent:null:this.each(function(){this.textContent=b})},attr:function(c,d){var e;return typeof c=="string"&&d===a?this.length==0||this[0].nodeType!==1?a:c=="value"&&this[0].nodeName=="INPUT"?this.val():!(e=this[0].getAttribute(c))&&c in this[0]?this[0][c]:e:this.each(function(a){if(this.nodeType!==1){return }if(B(c)){for(b in c){this.setAttribute(b,c[b])}}else{this.setAttribute(c,M(this,d,a,this.getAttribute(c)))}})},removeAttr:function(a){return this.each(function(){this.nodeType===1&&this.removeAttribute(a)})},prop:function(b,c){return c===a?this[0]?this[0][b]:a:this.each(function(a){this[b]=M(this,c,a,this[b])})},data:function(b,c){var d=this.attr("data-"+H(b),c);return d!==null?d:a},val:function(b){return b===a?this.length>0?this[0].value:a:this.each(function(a){this.value=M(this,b,a,this.value)})},offset:function(){if(this.length==0){return null}var a=this[0].getBoundingClientRect();return{left:a.left+window.pageXOffset,top:a.top+window.pageYOffset,width:a.width,height:a.height}},css:function(c,d){if(d===a&&typeof c=="string"){return this.length==0?a:this[0].style[x(c)]||j(this[0],"").getPropertyValue(c)}var e="";for(b in c){typeof c[b]=="string"&&c[b]==""?this.each(function(){this.style.removeProperty(H(b))}):e+=H(b)+":"+J(b,c[b])+";"}return typeof c=="string"&&(d==""?this.each(function(){this.style.removeProperty(H(c))}):e=H(c)+":"+J(c,d)),this.each(function(){this.style.cssText+=";"+e})},index:function(a){return a?this.indexOf(c(a)[0]):this.parent().children().indexOf(this[0])},hasClass:function(a){return this.length<1?!1:I(a).test(this[0].className)},addClass:function(a){return this.each(function(b){d=[];var e=this.className,f=M(this,a,b,e);f.split(/\s+/g).forEach(function(a){c(this).hasClass(a)||d.push(a)},this),d.length&&(this.className+=(e?" ":"")+d.join(" "))})},removeClass:function(b){return this.each(function(c){if(b===a){return this.className=""}d=this.className,M(this,b,c,d).split(/\s+/g).forEach(function(a){d=d.replace(I(a)," ")}),this.className=d.trim()})},toggleClass:function(b,d){return this.each(function(e){var f=M(this,b,e,this.className);(d===a?!c(this).hasClass(f):d)?c(this).addClass(f):c(this).removeClass(f)})}},["width","height"].forEach(function(b){c.fn[b]=function(d){var e,f=b.replace(/./,function(a){return a[0].toUpperCase()});return d===a?this[0]==window?window["inner"+f]:this[0]==g?g.documentElement["offset"+f]:(e=this.offset())&&e[b]:this.each(function(a){var e=c(this);e.css(b,M(this,d,a,e[b]()))})}}),n.forEach(function(a,b){c.fn[a]=function(){var a=c.map(arguments,function(a){return B(a)?a:w.fragment(a)});if(a.length<1){return this}var d=this.length,e=d>1,f=b<2;return this.each(function(c,g){for(var h=0;h<a.length;h++){var i=a[f?a.length-h-1:h];O(i,function(a){a.nodeName!=null&&a.nodeName.toUpperCase()==="SCRIPT"&&(!a.type||a.type==="text/javascript")&&window.eval.call(window,a.innerHTML)}),e&&c<d-1&&(i=i.cloneNode(!0)),N(b,g,i)}})},c.fn[b%2?a+"To":"insert"+(b?"Before":"After")]=function(b){return c(b)[a](this),this}}),w.Z.prototype=c.fn,w.camelize=x,w.uniq=y,c.zepto=w,c}();window.Zepto=Zepto,"$" in window||(window.$=Zepto),function(Q){function L(R){return R._zid||(R._zid=N++)}function K(S,R,V,U){R=J(R);if(R.ns){var T=I(R.ns)}return(O[L(S)]||[]).filter(function(W){return W&&(!R.e||W.e==R.e)&&(!R.ns||T.test(W.ns))&&(!V||L(W.fn)===L(V))&&(!U||W.sel==U)})}function J(S){var R=(""+S).split(".");return{e:R[0],ns:R.slice(1).sort().join(" ")}}function I(R){return new RegExp("(?:^| )"+R.replace(" "," .* ?")+"(?: |$)")}function H(R,T,S){Q.isObject(R)?Q.each(R,S):R.split(/\s/).forEach(function(U){S(U,T)})}function G(S,Y,X,W,V,U){U=!!U;var T=L(S),R=O[T]||(O[T]=[]);H(Y,X,function(i,h){var g=V&&V(h,i),b=g||h,a=function(d){var e=b.apply(S,[d].concat(d.data));return e===!1&&d.preventDefault(),e},Z=Q.extend(J(i),{fn:h,proxy:a,sel:W,del:g,i:R.length});R.push(Z),S.addEventListener(Z.e,a,U)})}function F(S,R,V,U){var T=L(S);H(R||"",V,function(W,X){K(S,W,X,U).forEach(function(Y){delete O[T][Y.i],S.removeEventListener(Y.e,Y.proxy,!1)})})}function B(R){var S=Q.extend({originalEvent:R},R);return Q.each(C,function(T,U){S[T]=function(){return this[U]=E,R[T].apply(R,arguments)},S[U]=D}),S}function A(S){if(!("defaultPrevented" in S)){S.defaultPrevented=!1;var R=S.preventDefault;S.preventDefault=function(){this.defaultPrevented=!0,R.call(this)}}}var P=Q.zepto.qsa,O={},N=1,M={};M.click=M.mousedown=M.mouseup=M.mousemove="MouseEvents",Q.event={add:G,remove:F},Q.proxy=function(R,T){if(Q.isFunction(R)){var S=function(){return R.apply(T,arguments)};return S._zid=L(R),S}if(typeof T=="string"){return Q.proxy(R[T],R)}throw new TypeError("expected function")},Q.fn.bind=function(S,R){return this.each(function(){G(this,S,R)})},Q.fn.unbind=function(S,R){return this.each(function(){F(this,S,R)})},Q.fn.one=function(S,R){return this.each(function(U,T){G(this,S,R,null,function(W,V){return function(){var X=W.apply(T,arguments);return F(T,V,W),X}})})};var E=function(){return !0},D=function(){return !1},C={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};Q.fn.delegate=function(R,U,T){var S=!1;if(U=="blur"||U=="focus"){Q.iswebkit?U=U=="blur"?"focusout":U=="focus"?"focusin":U:S=!0}return this.each(function(W,V){G(V,U,T,R,function(X){return function(a){var Z,Y=Q(a.target).closest(R,V).get(0);if(Y){return Z=Q.extend(B(a),{currentTarget:Y,liveFired:V}),X.apply(Y,[Z].concat([].slice.call(arguments,1)))}}},S)})},Q.fn.undelegate=function(S,R,T){return this.each(function(){F(this,R,T,S)})},Q.fn.live=function(R,S){return Q(document.body).delegate(this.selector,R,S),this},Q.fn.die=function(R,S){return Q(document.body).undelegate(this.selector,R,S),this},Q.fn.on=function(R,T,S){return T==undefined||Q.isFunction(T)?this.bind(R,T):this.delegate(T,R,S)},Q.fn.off=function(R,T,S){return T==undefined||Q.isFunction(T)?this.unbind(R,T):this.undelegate(T,R,S)},Q.fn.trigger=function(R,S){return typeof R=="string"&&(R=Q.Event(R)),A(R),R.data=S,this.each(function(){"dispatchEvent" in this&&this.dispatchEvent(R)})},Q.fn.triggerHandler=function(R,U){var T,S;return this.each(function(W,V){T=B(typeof R=="string"?Q.Event(R):R),T.data=U,T.target=V,Q.each(K(V,R.type||R),function(Y,X){S=X.proxy(T);if(T.isImmediatePropagationStopped()){return !1}})}),S},"focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout change select keydown keypress keyup error".split(" ").forEach(function(R){Q.fn[R]=function(S){return this.bind(R,S)}}),["focus","blur"].forEach(function(R){Q.fn[R]=function(S){if(S){this.bind(R,S)}else{if(this.length){try{this.get(0)[R]()}catch(T){}}}return this}}),Q.Event=function(S,R){var V=document.createEvent(M[S]||"Events"),U=!0;if(R){for(var T in R){T=="bubbles"?U=!!R[T]:V[T]=R[T]}}return V.initEvent(S,U,!0,null,null,null,null,null,null,null,null,null,null,null,null),V}}(Zepto),function(B){function A(N){var M=this.os={},L=this.browser={},K=N.match(/WebKit\/([\d.]+)/),J=N.match(/(Android)\s+([\d.]+)/),I=N.match(/(iPad).*OS\s([\d_]+)/),H=!I&&N.match(/(iPhone\sOS)\s([\d_]+)/),G=N.match(/(webOS|hpwOS)[\s\/]([\d.]+)/),F=G&&N.match(/TouchPad/),E=N.match(/Kindle\/([\d.]+)/),D=N.match(/Silk\/([\d._]+)/),C=N.match(/(BlackBerry).*Version\/([\d.]+)/);if(L.webkit=!!K){L.version=K[1]}J&&(M.android=!0,M.version=J[2]),H&&(M.ios=M.iphone=!0,M.version=H[2].replace(/_/g,".")),I&&(M.ios=M.ipad=!0,M.version=I[2].replace(/_/g,".")),G&&(M.webos=!0,M.version=G[2]),F&&(M.touchpad=!0),C&&(M.blackberry=!0,M.version=C[2]),E&&(M.kindle=!0,M.version=E[1]),D&&(L.silk=!0,L.version=D[1]),!D&&M.android&&N.match(/Kindle Fire/)&&(L.silk=!0)}A.call(B,navigator.userAgent),B.__detect=A}(Zepto),function(M,L){function B(N){return N.toLowerCase()}function A(N){return J?J+N:B(N)}var K="",J,I,H,G={Webkit:"webkit",Moz:"",O:"o",ms:"MS"},F=window.document,E=F.createElement("div"),D=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i,C={};M.each(G,function(N,O){if(E.style[N+"TransitionProperty"]!==L){return K="-"+B(N)+"-",J=O,!1}}),C[K+"transition-property"]=C[K+"transition-duration"]=C[K+"transition-timing-function"]=C[K+"animation-name"]=C[K+"animation-duration"]="",M.fx={off:J===L&&E.style.transitionProperty===L,cssPrefix:K,transitionEnd:A("TransitionEnd"),animationEnd:A("AnimationEnd")},M.fn.animate=function(N,Q,P,O){return M.isObject(Q)&&(P=Q.easing,O=Q.complete,Q=Q.duration),Q&&(Q/=1000),this.anim(N,Q,P,O)},M.fn.anim=function(W,V,U,T){var S,R={},Q,P=this,O,N=M.fx.transitionEnd;V===L&&(V=0.4),M.fx.off&&(V=0);if(typeof W=="string"){R[K+"animation-name"]=W,R[K+"animation-duration"]=V+"s",N=M.fx.animationEnd}else{for(Q in W){D.test(Q)?(S||(S=[]),S.push(Q+"("+W[Q]+")")):R[Q]=W[Q]}S&&(R[K+"transform"]=S.join(" ")),!M.fx.off&&typeof W=="object"&&(R[K+"transition-property"]=Object.keys(W).join(", "),R[K+"transition-duration"]=V+"s",R[K+"transition-timing-function"]=U||"linear")}return O=function(X){if(typeof X!="undefined"){if(X.target!==X.currentTarget){return }M(X.target).unbind(N,arguments.callee)}M(this).css(C),T&&T.call(this)},V>0&&this.bind(N,O),setTimeout(function(){P.css(R),V<=0&&setTimeout(function(){P.each(function(){O.call(this)})},0)},0),this},E=null}(Zepto),function($){function triggerAndReturn(a,b,c){var d=$.Event(b);return $(a).trigger(d,c),!d.defaultPrevented}function triggerGlobal(a,b,c,d){if(a.global){return triggerAndReturn(b||document,c,d)}}function ajaxStart(a){a.global&&$.active++===0&&triggerGlobal(a,null,"ajaxStart")}function ajaxStop(a){a.global&&!--$.active&&triggerGlobal(a,null,"ajaxStop")}function ajaxBeforeSend(a,b){var c=b.context;if(b.beforeSend.call(c,a,b)===!1||triggerGlobal(b,c,"ajaxBeforeSend",[a,b])===!1){return !1}triggerGlobal(b,c,"ajaxSend",[a,b])}function ajaxSuccess(a,b,c){var d=c.context,e="success";c.success.call(d,a,e,b),triggerGlobal(c,d,"ajaxSuccess",[b,c,a]),ajaxComplete(e,b,c)}function ajaxError(a,b,c,d){var e=d.context;d.error.call(e,c,b,a),triggerGlobal(d,e,"ajaxError",[c,d,a]),ajaxComplete(b,c,d)}function ajaxComplete(a,b,c){var d=c.context;c.complete.call(d,b,a),triggerGlobal(c,d,"ajaxComplete",[b,c]),ajaxStop(c)}function empty(){}function mimeToDataType(a){return a&&(a==htmlType?"html":a==jsonType?"json":scriptTypeRE.test(a)?"script":xmlTypeRE.test(a)&&"xml")||"text"}function appendQuery(a,b){return(a+"&"+b).replace(/[&?]{1,2}/,"?")}function serializeData(a){isObject(a.data)&&(a.data=$.param(a.data)),a.data&&(!a.type||a.type.toUpperCase()=="GET")&&(a.url=appendQuery(a.url,a.data))}function serialize(a,b,c,d){var e=$.isArray(b);$.each(b,function(b,f){d&&(b=c?d:d+"["+(e?"":b)+"]"),!d&&e?a.add(f.name,f.value):(c?$.isArray(f):isObject(f))?serialize(a,f,c,b):a.add(b,f)})}var jsonpID=0,isObject=$.isObject,document=window.document,key,name,rscript=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,scriptTypeRE=/^(?:text|application)\/javascript/i,xmlTypeRE=/^(?:text|application)\/xml/i,jsonType="application/json",htmlType="text/html",blankRE=/^\s*$/;$.active=0,$.ajaxJSONP=function(a){var b="jsonp"+ ++jsonpID,c=document.createElement("script"),d=function(){$(c).remove(),b in window&&(window[b]=empty),ajaxComplete("abort",e,a)},e={abort:d},f;return a.error&&(c.onerror=function(){e.abort(),a.error()}),window[b]=function(d){clearTimeout(f),$(c).remove(),delete window[b],ajaxSuccess(d,e,a)},serializeData(a),c.src=a.url.replace(/=\?/,"="+b),$("head").append(c),a.timeout>0&&(f=setTimeout(function(){e.abort(),ajaxComplete("timeout",e,a)},a.timeout)),e},$.ajaxSettings={type:"GET",beforeSend:empty,success:empty,error:empty,complete:empty,context:null,global:!0,xhr:function(){return new window.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript",json:jsonType,xml:"application/xml, text/xml",html:htmlType,text:"text/plain"},crossDomain:!1,timeout:0},$.ajax=function(options){var settings=$.extend({},options||{});for(key in $.ajaxSettings){settings[key]===undefined&&(settings[key]=$.ajaxSettings[key])}ajaxStart(settings),settings.crossDomain||(settings.crossDomain=/^([\w-]+:)?\/\/([^\/]+)/.test(settings.url)&&RegExp.$2!=window.location.host);var dataType=settings.dataType,hasPlaceholder=/=\?/.test(settings.url);if(dataType=="jsonp"||hasPlaceholder){return hasPlaceholder||(settings.url=appendQuery(settings.url,"callback=?")),$.ajaxJSONP(settings)}settings.url||(settings.url=window.location.toString()),serializeData(settings);var mime=settings.accepts[dataType],baseHeaders={},protocol=/^([\w-]+:)\/\//.test(settings.url)?RegExp.$1:window.location.protocol,xhr=$.ajaxSettings.xhr(),abortTimeout;settings.crossDomain||(baseHeaders["X-Requested-With"]="XMLHttpRequest"),mime&&(baseHeaders.Accept=mime,mime.indexOf(",")>-1&&(mime=mime.split(",",2)[0]),xhr.overrideMimeType&&xhr.overrideMimeType(mime));if(settings.contentType||settings.data&&settings.type.toUpperCase()!="GET"){baseHeaders["Content-Type"]=settings.contentType||"application/x-www-form-urlencoded"}settings.headers=$.extend(baseHeaders,settings.headers||{}),xhr.onreadystatechange=function(){if(xhr.readyState==4){clearTimeout(abortTimeout);var result,error=!1;if(xhr.status>=200&&xhr.status<300||xhr.status==304||xhr.status==0&&protocol=="file:"){dataType=dataType||mimeToDataType(xhr.getResponseHeader("content-type")),result=xhr.responseText;try{dataType=="script"?(1,eval)(result):dataType=="xml"?result=xhr.responseXML:dataType=="json"&&(result=blankRE.test(result)?null:JSON.parse(result))}catch(e){error=e}error?ajaxError(error,"parsererror",xhr,settings):ajaxSuccess(result,xhr,settings)}else{ajaxError(null,"error",xhr,settings)}}};var async="async" in settings?settings.async:!0;xhr.open(settings.type,settings.url,async);for(name in settings.headers){xhr.setRequestHeader(name,settings.headers[name])}return ajaxBeforeSend(xhr,settings)===!1?(xhr.abort(),!1):(settings.timeout>0&&(abortTimeout=setTimeout(function(){xhr.onreadystatechange=empty,xhr.abort(),ajaxError(null,"timeout",xhr,settings)},settings.timeout)),xhr.send(settings.data?settings.data:null),xhr)},$.get=function(a,b){return $.ajax({url:a,success:b})},$.post=function(a,b,c,d){return $.isFunction(b)&&(d=d||c,c=b,b=null),$.ajax({type:"POST",url:a,data:b,success:c,dataType:d})},$.getJSON=function(a,b){return $.ajax({url:a,success:b,dataType:"json"})},$.fn.load=function(a,b){if(!this.length){return this}var c=this,d=a.split(/\s/),e;return d.length>1&&(a=d[0],e=d[1]),$.get(a,function(a){c.html(e?$(document.createElement("div")).html(a.replace(rscript,"")).find(e).html():a),b&&b.call(c)}),this};var escape=encodeURIComponent;$.param=function(a,b){var c=[];return c.add=function(a,b){this.push(escape(a)+"="+escape(b))},serialize(c,a,b),c.join("&").replace("%20","+")}}(Zepto),function(A){A.fn.serializeArray=function(){var B=[],C;return A(Array.prototype.slice.call(this.get(0).elements)).each(function(){C=A(this);var D=C.attr("type");this.nodeName.toLowerCase()!="fieldset"&&!this.disabled&&D!="submit"&&D!="reset"&&D!="button"&&(D!="radio"&&D!="checkbox"||this.checked)&&B.push({name:C.attr("name"),value:C.val()})}),B},A.fn.serialize=function(){var B=[];return this.serializeArray().forEach(function(C){B.push(encodeURIComponent(C.name)+"="+encodeURIComponent(C.value))}),B.join("&")},A.fn.submit=function(B){if(B){this.bind("submit",B)}else{if(this.length){var C=A.Event("submit");this.eq(0).trigger(C),C.defaultPrevented||this.get(0).submit()}}return this}}(Zepto),function(I){function F(J){return"tagName" in J?J:J.parentNode}function E(K,J,O,N){var M=Math.abs(K-J),L=Math.abs(O-N);return M>=L?K-J>0?"Left":"Right":O-N>0?"Up":"Down"}function B(){C=null,H.last&&(H.el.trigger("longTap"),H={})}function A(){C&&clearTimeout(C),C=null}var H={},G,D=750,C;I(document).ready(function(){var K,J;I(document.body).bind("touchstart",function(L){K=Date.now(),J=K-(H.last||K),H.el=I(F(L.touches[0].target)),G&&clearTimeout(G),H.x1=L.touches[0].pageX,H.y1=L.touches[0].pageY,J>0&&J<=250&&(H.isDoubleTap=!0),H.last=K,C=setTimeout(B,D)}).bind("touchmove",function(L){A(),H.x2=L.touches[0].pageX,H.y2=L.touches[0].pageY}).bind("touchend",function(L){A(),H.isDoubleTap?(H.el.trigger("doubleTap"),H={}):H.x2&&Math.abs(H.x1-H.x2)>30||H.y2&&Math.abs(H.y1-H.y2)>30?(H.el.trigger("swipe")&&H.el.trigger("swipe"+E(H.x1,H.x2,H.y1,H.y2)),H={}):"last" in H&&(H.el.trigger("tap"),G=setTimeout(function(){G=null,H.el.trigger("singleTap"),H={}},250))}).bind("touchcancel",function(){G&&clearTimeout(G),C&&clearTimeout(C),C=G=null,H={}})}),["swipe","swipeLeft","swipeRight","swipeUp","swipeDown","doubleTap","tap","singleTap","longTap"].forEach(function(J){I.fn[J]=function(K){return this.bind(J,K)}})}(Zepto);

	//return _zepto;

});

KISSY.add("gallery/contacts/1.0/backbone", function (S , _ , $) {
var Backbones;
//     Backbone.js 1.0.0

//     (c) 2010-2013 Jeremy Ashkenas, DocumentCloud Inc.
//     Backbone may be freely distributed under the MIT license.
//     For all details and documentation:
//     http://backbonejs.org

// Backbone.js 0.9.2
// (c) 2010-2012 Jeremy Ashkenas, DocumentCloud Inc.
// Backbone may be freely distributed under the MIT license.
// For all details and documentation:
// http://backbonejs.org
(function() {
    var l = window,
    y = l.Backbone,
    z = Array.prototype.slice,
    A = Array.prototype.splice,
    g;
    g = "undefined" !== typeof exports ? exports: l.Backbone = {};
    g.VERSION = "0.9.2";
    var f = _; ! f && "undefined" !== typeof require && (f = require("underscore"));
    var i = l.jQuery || Zepto || l.ender;
    g.setDomLibrary = function(a) {
        i = a
    };
    g.noConflict = function() {
        l.Backbone = y;
        return this
    };
    g.emulateHTTP = !1;
    g.emulateJSON = !1;
    var p = /\s+/,
    k = g.Events = {
        on: function(a, b, c) {
            var d, e, f, g, j;
            if (!b) return this;
            a = a.split(p);
            for (d = this._callbacks || (this._callbacks = {}); e = a.shift();) f = (j = d[e]) ? j.tail: {},
            f.next = g = {},
            f.context = c,
            f.callback = b,
            d[e] = {
                tail: g,
                next: j ? j.next: f
            };
            return this
        },
        off: function(a, b, c) {
            var d, e, h, g, j, q;
            if (e = this._callbacks) {
                if (!a && !b && !c) return delete this._callbacks,
                this;
                for (a = a ? a.split(p) : f.keys(e); d = a.shift();) if (h = e[d], delete e[d], h && (b || c)) for (g = h.tail; (h = h.next) !== g;) if (j = h.callback, q = h.context, b && j !== b || c && q !== c) this.on(d, j, q);
                return this
            }
        },
        trigger: function(a) {
            var b, c, d, e, f, g;
            if (! (d = this._callbacks)) return this;
            f = d.all;
            a = a.split(p);
            for (g = z.call(arguments, 1); b = a.shift();) {
                if (c = d[b]) for (e = c.tail; (c = c.next) !== e;) c.callback.apply(c.context || this, g);
                if (c = f) {
                    e = c.tail;
                    for (b = [b].concat(g); (c = c.next) !== e;) c.callback.apply(c.context || this, b)
                }
            }
            return this
        }
    };
    k.bind = k.on;
    k.unbind = k.off;
    var o = g.Model = function(a, b) {
        var c;
        a || (a = {});
        b && b.parse && (a = this.parse(a));
        if (c = n(this, "defaults")) a = f.extend({},
        c, a);
        b && b.collection && (this.collection = b.collection);
        this.attributes = {};
        this._escapedAttributes = {};
        this.cid = f.uniqueId("c");
        this.changed = {};
        this._silent = {};
        this._pending = {};
        this.set(a, {
            silent: !0
        });
        this.changed = {};
        this._silent = {};
        this._pending = {};
        this._previousAttributes = f.clone(this.attributes);
        this.initialize.apply(this, arguments)
    };
    f.extend(o.prototype, k, {
        changed: null,
        _silent: null,
        _pending: null,
        idAttribute: "id",
        initialize: function() {},
        toJSON: function() {
            return f.clone(this.attributes)
        },
        get: function(a) {
            return this.attributes[a]
        },
        escape: function(a) {
            var b;
            if (b = this._escapedAttributes[a]) return b;
            b = this.get(a);
            return this._escapedAttributes[a] = f.escape(null == b ? "": "" + b)
        },
        has: function(a) {
            return null != this.get(a)
        },
        set: function(a, b, c) {
            var d, e;
            f.isObject(a) || null == a ? (d = a, c = b) : (d = {},
            d[a] = b);
            c || (c = {});
            if (!d) return this;
            d instanceof o && (d = d.attributes);
            if (c.unset) for (e in d) d[e] = void 0;
            if (!this._validate(d, c)) return ! 1;
            this.idAttribute in d && (this.id = d[this.idAttribute]);
            var b = c.changes = {},
            h = this.attributes,
            g = this._escapedAttributes,
            j = this._previousAttributes || {};
            for (e in d) {
                a = d[e];
                if (!f.isEqual(h[e], a) || c.unset && f.has(h, e)) delete g[e],
                (c.silent ? this._silent: b)[e] = !0;
                c.unset ? delete h[e] : h[e] = a; ! f.isEqual(j[e], a) || f.has(h, e) != f.has(j, e) ? (this.changed[e] = a, c.silent || (this._pending[e] = !0)) : (delete this.changed[e], delete this._pending[e])
            }
            c.silent || this.change(c);
            return this
        },
        unset: function(a, b) { (b || (b = {})).unset = !0;
            return this.set(a, null, b)
        },
        clear: function(a) { (a || (a = {})).unset = !0;
            return this.set(f.clone(this.attributes), a)
        },
        fetch: function(a) {
            var a = a ? f.clone(a) : {},
            b = this,
            c = a.success;
            a.success = function(d, e, f) {
                if (!b.set(b.parse(d, f), a)) return ! 1;
                c && c(b, d)
            };
            a.error = g.wrapError(a.error, b, a);
            return (this.sync || g.sync).call(this, "read", this, a)
        },
        save: function(a, b, c) {
            var d, e;
            f.isObject(a) || null == a ? (d = a, c = b) : (d = {},
            d[a] = b);
            c = c ? f.clone(c) : {};
            if (c.wait) {
                if (!this._validate(d, c)) return ! 1;
                e = f.clone(this.attributes)
            }
            a = f.extend({},
            c, {
                silent: !0
            });
            if (d && !this.set(d, c.wait ? a: c)) return ! 1;
            var h = this,
            i = c.success;
            c.success = function(a, b, e) {
                b = h.parse(a, e);
                if (c.wait) {
                    delete c.wait;
                    b = f.extend(d || {},
                    b)
                }
                if (!h.set(b, c)) return false;
                i ? i(h, a) : h.trigger("sync", h, a, c)
            };
            c.error = g.wrapError(c.error, h, c);
            b = this.isNew() ? "create": "update";
            b = (this.sync || g.sync).call(this, b, this, c);
            c.wait && this.set(e, a);
            return b
        },
        destroy: function(a) {
            var a = a ? f.clone(a) : {},
            b = this,
            c = a.success,
            d = function() {
                b.trigger("destroy", b, b.collection, a)
            };
            if (this.isNew()) return d(),
            !1;
            a.success = function(e) {
                a.wait && d();
                c ? c(b, e) : b.trigger("sync", b, e, a)
            };
            a.error = g.wrapError(a.error, b, a);
            var e = (this.sync || g.sync).call(this, "delete", this, a);
            a.wait || d();
            return e
        },
        url: function() {
            var a = n(this, "urlRoot") || n(this.collection, "url") || t();
            return this.isNew() ? a: a + ("/" == a.charAt(a.length - 1) ? "": "/") + encodeURIComponent(this.id)
        },
        parse: function(a) {
            return a
        },
        clone: function() {
            return new this.constructor(this.attributes)
        },
        isNew: function() {
            return null == this.id
        },
        change: function(a) {
            a || (a = {});
            var b = this._changing;
            this._changing = !0;
            for (var c in this._silent) this._pending[c] = !0;
            var d = f.extend({},
            a.changes, this._silent);
            this._silent = {};
            for (c in d) this.trigger("change:" + c, this, this.get(c), a);
            if (b) return this;
            for (; ! f.isEmpty(this._pending);) {
                this._pending = {};
                this.trigger("change", this, a);
                for (c in this.changed) ! this._pending[c] && !this._silent[c] && delete this.changed[c];
                this._previousAttributes = f.clone(this.attributes)
            }
            this._changing = !1;
            return this
        },
        hasChanged: function(a) {
            return ! arguments.length ? !f.isEmpty(this.changed) : f.has(this.changed, a)
        },
        changedAttributes: function(a) {
            if (!a) return this.hasChanged() ? f.clone(this.changed) : !1;
            var b, c = !1,
            d = this._previousAttributes,
            e;
            for (e in a) if (!f.isEqual(d[e], b = a[e]))(c || (c = {}))[e] = b;
            return c
        },
        previous: function(a) {
            return ! arguments.length || !this._previousAttributes ? null: this._previousAttributes[a]
        },
        previousAttributes: function() {
            return f.clone(this._previousAttributes)
        },
        isValid: function() {
            return ! this.validate(this.attributes)
        },
        _validate: function(a, b) {
            if (b.silent || !this.validate) return ! 0;
            var a = f.extend({},
            this.attributes, a),
            c = this.validate(a, b);
            if (!c) return ! 0;
            b && b.error ? b.error(this, c, b) : this.trigger("error", this, c, b);
            return ! 1
        }
    });
    var r = g.Collection = function(a, b) {
        b || (b = {});
        b.model && (this.model = b.model);
        b.comparator && (this.comparator = b.comparator);
        this._reset();
        this.initialize.apply(this, arguments);
        a && this.reset(a, {
            silent: !0,
            parse: b.parse
        })
    };
    f.extend(r.prototype, k, {
        model: o,
        initialize: function() {},
        toJSON: function(a) {
            return this.map(function(b) {
                return b.toJSON(a)
            })
        },
        add: function(a, b) {
            var c, d, e, g, i, j = {},
            k = {},
            l = [];
            b || (b = {});
            a = f.isArray(a) ? a.slice() : [a];
            c = 0;
            for (d = a.length; c < d; c++) {
                if (! (e = a[c] = this._prepareModel(a[c], b))) throw Error("Can't add an invalid model to a collection");
                g = e.cid;
                i = e.id;
                j[g] || this._byCid[g] || null != i && (k[i] || this._byId[i]) ? l.push(c) : j[g] = k[i] = e
            }
            for (c = l.length; c--;) a.splice(l[c], 1);
            c = 0;
            for (d = a.length; c < d; c++)(e = a[c]).on("all", this._onModelEvent, this),
            this._byCid[e.cid] = e,
            null != e.id && (this._byId[e.id] = e);
            this.length += d;
            A.apply(this.models, [null != b.at ? b.at: this.models.length, 0].concat(a));
            this.comparator && this.sort({
                silent: !0
            });
            if (b.silent) return this;
            c = 0;
            for (d = this.models.length; c < d; c++) if (j[(e = this.models[c]).cid]) b.index = c,
            e.trigger("add", e, this, b);
            return this
        },
        remove: function(a, b) {
            var c, d, e, g;
            b || (b = {});
            a = f.isArray(a) ? a.slice() : [a];
            c = 0;
            for (d = a.length; c < d; c++) if (g = this.getByCid(a[c]) || this.get(a[c])) delete this._byId[g.id],
            delete this._byCid[g.cid],
            e = this.indexOf(g),
            this.models.splice(e, 1),
            this.length--,
            b.silent || (b.index = e, g.trigger("remove", g, this, b)),
            this._removeReference(g);
            return this
        },
        push: function(a, b) {
            a = this._prepareModel(a, b);
            this.add(a, b);
            return a
        },
        pop: function(a) {
            var b = this.at(this.length - 1);
            this.remove(b, a);
            return b
        },
        unshift: function(a, b) {
            a = this._prepareModel(a, b);
            this.add(a, f.extend({
                at: 0
            },
            b));
            return a
        },
        shift: function(a) {
            var b = this.at(0);
            this.remove(b, a);
            return b
        },
        get: function(a) {
            return null == a ? void 0 : this._byId[null != a.id ? a.id: a]
        },
        getByCid: function(a) {
            return a && this._byCid[a.cid || a]
        },
        at: function(a) {
            return this.models[a]
        },
        where: function(a) {
            return f.isEmpty(a) ? [] : this.filter(function(b) {
                for (var c in a) if (a[c] !== b.get(c)) return ! 1;
                return ! 0
            })
        },
        sort: function(a) {
            a || (a = {});
            if (!this.comparator) throw Error("Cannot sort a set without a comparator");
            var b = f.bind(this.comparator, this);
            1 == this.comparator.length ? this.models = this.sortBy(b) : this.models.sort(b);
            a.silent || this.trigger("reset", this, a);
            return this
        },
        pluck: function(a) {
            return f.map(this.models,
            function(b) {
                return b.get(a)
            })
        },
        reset: function(a, b) {
            a || (a = []);
            b || (b = {});
            for (var c = 0,
            d = this.models.length; c < d; c++) this._removeReference(this.models[c]);
            this._reset();
            this.add(a, f.extend({
                silent: !0
            },
            b));
            b.silent || this.trigger("reset", this, b);
            return this
        },
        fetch: function(a) {
            a = a ? f.clone(a) : {};
            void 0 === a.parse && (a.parse = !0);
            var b = this,
            c = a.success;
            a.success = function(d, e, f) {
                b[a.add ? "add": "reset"](b.parse(d, f), a);
                c && c(b, d)
            };
            a.error = g.wrapError(a.error, b, a);
            return (this.sync || g.sync).call(this, "read", this, a)
        },
        create: function(a, b) {
            var c = this,
            b = b ? f.clone(b) : {},
            a = this._prepareModel(a, b);
            if (!a) return ! 1;
            b.wait || c.add(a, b);
            var d = b.success;
            b.success = function(e, f) {
                b.wait && c.add(e, b);
                d ? d(e, f) : e.trigger("sync", a, f, b)
            };
            a.save(null, b);
            return a
        },
        parse: function(a) {
            return a
        },
        chain: function() {
            return f(this.models).chain()
        },
        _reset: function() {
            this.length = 0;
            this.models = [];
            this._byId = {};
            this._byCid = {}
        },
        _prepareModel: function(a, b) {
            b || (b = {});
            a instanceof o ? a.collection || (a.collection = this) : (b.collection = this, a = new this.model(a, b), a._validate(a.attributes, b) || (a = !1));
            return a
        },
        _removeReference: function(a) {
            this == a.collection && delete a.collection;
            a.off("all", this._onModelEvent, this)
        },
        _onModelEvent: function(a, b, c, d) { ("add" == a || "remove" == a) && c != this || ("destroy" == a && this.remove(b, d), b && a === "change:" + b.idAttribute && (delete this._byId[b.previous(b.idAttribute)], this._byId[b.id] = b), this.trigger.apply(this, arguments))
        }
    });
    f.each("forEach,each,map,reduce,reduceRight,find,detect,filter,select,reject,every,all,some,any,include,contains,invoke,max,min,sortBy,sortedIndex,toArray,size,first,initial,rest,last,without,indexOf,shuffle,lastIndexOf,isEmpty,groupBy".split(","),
    function(a) {
        r.prototype[a] = function() {
            return f[a].apply(f, [this.models].concat(f.toArray(arguments)))
        }
    });
    var u = g.Router = function(a) {
        a || (a = {});
        a.routes && (this.routes = a.routes);
        this._bindRoutes();
        this.initialize.apply(this, arguments)
    },
    B = /:\w+/g,
    C = /\*\w+/g,
    D = /[-[\]{}()+?.,\\^$|#\s]/g;
    f.extend(u.prototype, k, {
        initialize: function() {},
        route: function(a, b, c) {
            g.history || (g.history = new m);
            f.isRegExp(a) || (a = this._routeToRegExp(a));
            c || (c = this[b]);
            g.history.route(a, f.bind(function(d) {
                d = this._extractParameters(a, d);
                c && c.apply(this, d);
                this.trigger.apply(this, ["route:" + b].concat(d));
                g.history.trigger("route", this, b, d)
            },
            this));
            return this
        },
        navigate: function(a, b) {
            g.history.navigate(a, b)
        },
        _bindRoutes: function() {
            if (this.routes) {
                var a = [],
                b;
                for (b in this.routes) a.unshift([b, this.routes[b]]);
                b = 0;
                for (var c = a.length; b < c; b++) this.route(a[b][0], a[b][1], this[a[b][1]])
            }
        },
        _routeToRegExp: function(a) {
            a = a.replace(D, "\\$&").replace(B, "([^/]+)").replace(C, "(.*?)");
            return RegExp("^" + a + "$")
        },
        _extractParameters: function(a, b) {
            return a.exec(b).slice(1)
        }
    });
    var m = g.History = function() {
        this.handlers = [];
        f.bindAll(this, "checkUrl")
    },
    s = /^[#\/]/,
    E = /msie [\w.]+/;
    m.started = !1;
    f.extend(m.prototype, k, {
        interval: 50,
        getHash: function(a) {
            return (a = (a ? a.location: window.location).href.match(/#(.*)$/)) ? a[1] : ""
        },
        getFragment: function(a, b) {
            if (null == a) if (this._hasPushState || b) {
                var a = window.location.pathname,
                c = window.location.search;
                c && (a += c)
            } else a = this.getHash();
            a.indexOf(this.options.root) || (a = a.substr(this.options.root.length));
            return a.replace(s, "")
        },
        start: function(a) {
            if (m.started) throw Error("Backbone.history has already been started");
            m.started = !0;
            this.options = f.extend({},
            {
                root: "/"
            },
            this.options, a);
            this._wantsHashChange = !1 !== this.options.hashChange;
            this._wantsPushState = !!this.options.pushState;
            this._hasPushState = !(!this.options.pushState || !window.history || !window.history.pushState);
            var a = this.getFragment(),
            b = document.documentMode;
            if (b = E.exec(navigator.userAgent.toLowerCase()) && (!b || 7 >= b)) this.iframe = i('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow,
            this.navigate(a);
            this._hasPushState ? i(window).bind("popstate", this.checkUrl) : this._wantsHashChange && "onhashchange" in window && !b ? i(window).bind("hashchange", this.checkUrl) : this._wantsHashChange && (this._checkUrlInterval = setInterval(this.checkUrl, this.interval));
            this.fragment = a;
            a = window.location;
            b = a.pathname == this.options.root;
            if (this._wantsHashChange && this._wantsPushState && !this._hasPushState && !b) return this.fragment = this.getFragment(null, !0),
            window.location.replace(this.options.root + "#" + this.fragment),
            !0;
            this._wantsPushState && this._hasPushState && b && a.hash && (this.fragment = this.getHash().replace(s, ""), window.history.replaceState({},
            document.title, a.protocol + "//" + a.host + this.options.root + this.fragment));
            if (!this.options.silent) return this.loadUrl()
        },
        stop: function() {
            i(window).unbind("popstate", this.checkUrl).unbind("hashchange", this.checkUrl);
            clearInterval(this._checkUrlInterval);
            m.started = !1
        },
        route: function(a, b) {
            this.handlers.unshift({
                route: a,
                callback: b
            })
        },
        checkUrl: function() {
            var a = this.getFragment();
            a == this.fragment && this.iframe && (a = this.getFragment(this.getHash(this.iframe)));
            if (a == this.fragment) return ! 1;
            this.iframe && this.navigate(a);
            this.loadUrl() || this.loadUrl(this.getHash())
        },
        loadUrl: function(a) {
            var b = this.fragment = this.getFragment(a);
            return f.any(this.handlers,
            function(a) {
                if (a.route.test(b)) return a.callback(b),
                !0
            })
        },
        navigate: function(a, b) {
            if (!m.started) return ! 1;
            if (!b || !0 === b) b = {
                trigger: b
            };
            var c = (a || "").replace(s, "");
            this.fragment != c && (this._hasPushState ? (0 != c.indexOf(this.options.root) && (c = this.options.root + c), this.fragment = c, window.history[b.replace ? "replaceState": "pushState"]({},
            document.title, c)) : this._wantsHashChange ? (this.fragment = c, this._updateHash(window.location, c, b.replace), this.iframe && c != this.getFragment(this.getHash(this.iframe)) && (b.replace || this.iframe.document.open().close(), this._updateHash(this.iframe.location, c, b.replace))) : window.location.assign(this.options.root + a), b.trigger && this.loadUrl(a))
        },
        _updateHash: function(a, b, c) {
            c ? a.replace(a.toString().replace(/(javascript:|#).*$/, "") + "#" + b) : a.hash = b
        }
    });
    var v = g.View = function(a) {
        this.cid = f.uniqueId("view");
        this._configure(a || {});
        this._ensureElement();
        this.initialize.apply(this, arguments);
        this.delegateEvents()
    },
    F = /^(\S+)\s*(.*)$/,
    w = "model,collection,el,id,attributes,className,tagName".split(",");
    f.extend(v.prototype, k, {
        tagName: "div",
        $: function(a) {
            return this.$el.find(a)
        },
        initialize: function() {},
        render: function() {
            return this
        },
        remove: function() {
            this.$el.remove();
            return this
        },
        make: function(a, b, c) {
            a = document.createElement(a);
            b && i(a).attr(b);
            c && i(a).html(c);
            return a
        },
        setElement: function(a, b) {
            this.$el && this.undelegateEvents();
            this.$el = a instanceof i ? a: i(a);
            this.el = this.$el[0]; ! 1 !== b && this.delegateEvents();
            return this
        },
        delegateEvents: function(a) {
            if (a || (a = n(this, "events"))) {
                this.undelegateEvents();
                for (var b in a) {
                    var c = a[b];
                    f.isFunction(c) || (c = this[a[b]]);
                    if (!c) throw Error('Method "' + a[b] + '" does not exist');
                    var d = b.match(F),
                    e = d[1],
                    d = d[2],
                    c = f.bind(c, this),
                    e = e + (".delegateEvents" + this.cid);
                    "" === d ? this.$el.bind(e, c) : this.$el.delegate(d, e, c)
                }
            }
        },
        undelegateEvents: function() {
            this.$el.unbind(".delegateEvents" + this.cid)
        },
        _configure: function(a) {
            this.options && (a = f.extend({},
            this.options, a));
            for (var b = 0,
            c = w.length; b < c; b++) {
                var d = w[b];
                a[d] && (this[d] = a[d])
            }
            this.options = a
        },
        _ensureElement: function() {
            if (this.el) this.setElement(this.el, !1);
            else {
                var a = n(this, "attributes") || {};
                this.id && (a.id = this.id);
                this.className && (a["class"] = this.className);
                this.setElement(this.make(this.tagName, a), !1)
            }
        }
    });
    o.extend = r.extend = u.extend = v.extend = function(a, b) {
        var c = G(this, a, b);
        c.extend = this.extend;
        return c
    };
    var H = {
        create: "POST",
        update: "PUT",
        "delete": "DELETE",
        read: "GET"
    };
    g.sync = function(a, b, c) {
        var d = H[a];
        c || (c = {});
        var e = {
            type: d,
            dataType: "json"
        };
        c.url || (e.url = n(b, "url") || t());
        if (!c.data && b && ("create" == a || "update" == a)) e.contentType = "application/json",
        e.data = JSON.stringify(b.toJSON());
        g.emulateJSON && (e.contentType = "application/x-www-form-urlencoded", e.data = e.data ? {
            model: e.data
        }: {});
        if (g.emulateHTTP && ("PUT" === d || "DELETE" === d)) g.emulateJSON && (e.data._method = d),
        e.type = "POST",
        e.beforeSend = function(a) {
            a.setRequestHeader("X-HTTP-Method-Override", d)
        };
        "GET" !== e.type && !g.emulateJSON && (e.processData = !1);
        return i.ajax(f.extend(e, c))
    };
    g.wrapError = function(a, b, c) {
        return function(d, e) {
            e = d === b ? e: d;
            a ? a(b, e, c) : b.trigger("error", b, e, c)
        }
    };
    var x = function() {},
    G = function(a, b, c) {
        var d;
        d = b && b.hasOwnProperty("constructor") ? b.constructor: function() {
            a.apply(this, arguments)
        };
        f.extend(d, a);
        x.prototype = a.prototype;
        d.prototype = new x;
        b && f.extend(d.prototype, b);
        c && f.extend(d, c);
        d.prototype.constructor = d;
        d.__super__ = a.prototype;
        return d
    },
    n = function(a, b) {
        return ! a || !a[b] ? null: f.isFunction(a[b]) ? a[b]() : a[b]
    },
    t = function() {
        throw Error('A "url" property or function must be specified');
    };
    
     Backbones = Backbone;
}).call(this);
  

return Backbones;

}, {
	requires: ['gallery/contacts/1.0/underscore' , 'gallery/contacts/1.0/zepto']
});

//iscroll
KISSY.add("gallery/contacts/1.0/iscroll", function (S) {

(function(){var m=Math,mround=function(r){return r>>0;},vendor=(/webkit/i).test(navigator.appVersion)?'webkit':(/firefox/i).test(navigator.userAgent)?'Moz':(/trident/i).test(navigator.userAgent)?'ms':'opera'in window?'O':'',isAndroid=(/android/gi).test(navigator.appVersion),isIDevice=(/iphone|ipad/gi).test(navigator.appVersion),isPlaybook=(/playbook/gi).test(navigator.appVersion),isTouchPad=(/hp-tablet/gi).test(navigator.appVersion),has3d='WebKitCSSMatrix'in window&&'m11'in new WebKitCSSMatrix(),hasTouch='ontouchstart'in window&&!isTouchPad,hasTransform=vendor+'Transform'in document.documentElement.style,hasTransitionEnd=isIDevice||isPlaybook,nextFrame=(function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(callback){return setTimeout(callback,1);}})(),cancelFrame=(function(){return window.cancelRequestAnimationFrame||window.webkitCancelAnimationFrame||window.webkitCancelRequestAnimationFrame||window.mozCancelRequestAnimationFrame||window.oCancelRequestAnimationFrame||window.msCancelRequestAnimationFrame||clearTimeout})(),RESIZE_EV='onorientationchange'in window?'orientationchange':'resize',START_EV=hasTouch?'touchstart':'mousedown',MOVE_EV=hasTouch?'touchmove':'mousemove',END_EV=hasTouch?'touchend':'mouseup',CANCEL_EV=hasTouch?'touchcancel':'mouseup',WHEEL_EV=vendor=='Moz'?'DOMMouseScroll':'mousewheel',trnOpen='translate'+(has3d?'3d(':'('),trnClose=has3d?',0)':')',iScroll=function(el,options){var that=this,doc=document,i;that.wrapper=typeof el=='object'?el:doc.getElementById(el);that.wrapper.style.overflow='hidden';that.scroller=that.wrapper.children[0];that.options={hScroll:true,vScroll:true,x:0,y:0,bounce:true,bounceLock:false,momentum:true,lockDirection:true,useTransform:true,useTransition:false,topOffset:0,checkDOMChanges:false,hScrollbar:true,vScrollbar:true,fixedScrollbar:isAndroid,hideScrollbar:isIDevice,fadeScrollbar:isIDevice&&has3d,scrollbarClass:'',zoom:false,zoomMin:1,zoomMax:4,doubleTapZoom:2,wheelAction:'scroll',snap:false,snapThreshold:1,onRefresh:null,onBeforeScrollStart:function(e){if(e.explicitOriginalTarget){var nodeType=e.explicitOriginalTarget.nodeName.toLowerCase();}else{var nodeType=e.target?e.target.nodeName.toLowerCase():'';}
if(nodeType!='select'&&nodeType!='option'&&nodeType!='input'&&nodeType!='textarea'){e.preventDefault();}},onScrollStart:null,onBeforeScrollMove:null,onScrollMove:null,onBeforeScrollEnd:null,onScrollEnd:null,onTouchEnd:null,onDestroy:null,onZoomStart:null,onZoom:null,onZoomEnd:null};for(i in options)that.options[i]=options[i];that.x=that.options.x;that.y=that.options.y;that.options.useTransform=hasTransform?that.options.useTransform:false;that.options.hScrollbar=that.options.hScroll&&that.options.hScrollbar;that.options.vScrollbar=that.options.vScroll&&that.options.vScrollbar;that.options.zoom=that.options.useTransform&&that.options.zoom;that.options.useTransition=hasTransitionEnd&&that.options.useTransition;if(that.options.zoom&&isAndroid){trnOpen='translate(';trnClose=')';}
that.scroller.style[vendor+'TransitionProperty']=that.options.useTransform?'-'+vendor.toLowerCase()+'-transform':'top left';that.scroller.style[vendor+'TransitionDuration']='0';that.scroller.style[vendor+'TransformOrigin']='0 0';if(that.options.useTransition)that.scroller.style[vendor+'TransitionTimingFunction']='cubic-bezier(0.33,0.66,0.66,1)';if(that.options.useTransform)that.scroller.style[vendor+'Transform']=trnOpen+that.x+'px,'+that.y+'px'+trnClose;else that.scroller.style.cssText+=';position:absolute;top:'+that.y+'px;left:'+that.x+'px';if(that.options.useTransition)that.options.fixedScrollbar=true;that.refresh();that._bind(RESIZE_EV,window);that._bind(START_EV);if(!hasTouch){that._bind('mouseout',that.wrapper);if(that.options.wheelAction!='none')
that._bind(WHEEL_EV);}
if(that.options.checkDOMChanges)that.checkDOMTime=setInterval(function(){that._checkDOMChanges();},500);};iScroll.prototype={enabled:true,x:0,y:0,steps:[],scale:1,currPageX:0,currPageY:0,pagesX:[],pagesY:[],aniTime:null,wheelZoomCount:0,handleEvent:function(e){var that=this;switch(e.type){case START_EV:if(!hasTouch&&e.button!==0)return;that._start(e);break;case MOVE_EV:that._move(e);break;case END_EV:case CANCEL_EV:that._end(e);break;case RESIZE_EV:that._resize();break;case WHEEL_EV:that._wheel(e);break;case'mouseout':that._mouseout(e);break;case'webkitTransitionEnd':that._transitionEnd(e);break;}},_checkDOMChanges:function(){if(this.moved||this.zoomed||this.animating||(this.scrollerW==this.scroller.offsetWidth*this.scale&&this.scrollerH==this.scroller.offsetHeight*this.scale))return;this.refresh();},_scrollbar:function(dir){var that=this,doc=document,bar;if(!that[dir+'Scrollbar']){if(that[dir+'ScrollbarWrapper']){if(hasTransform)that[dir+'ScrollbarIndicator'].style[vendor+'Transform']='';that[dir+'ScrollbarWrapper'].parentNode.removeChild(that[dir+'ScrollbarWrapper']);that[dir+'ScrollbarWrapper']=null;that[dir+'ScrollbarIndicator']=null;}
return;}
if(!that[dir+'ScrollbarWrapper']){bar=doc.createElement('div');if(that.options.scrollbarClass)bar.className=that.options.scrollbarClass+dir.toUpperCase();else bar.style.cssText='position:absolute;z-index:100;'+(dir=='h'?'height:7px;bottom:1px;left:2px;right:'+(that.vScrollbar?'7':'2')+'px':'width:7px;bottom:'+(that.hScrollbar?'7':'2')+'px;top:2px;right:1px');bar.style.cssText+=';pointer-events:none;-'+vendor+'-transition-property:opacity;-'+vendor+'-transition-duration:'+(that.options.fadeScrollbar?'350ms':'0')+';overflow:hidden;opacity:'+(that.options.hideScrollbar?'0':'1');that.wrapper.appendChild(bar);that[dir+'ScrollbarWrapper']=bar;bar=doc.createElement('div');if(!that.options.scrollbarClass){bar.style.cssText='position:absolute;z-index:100;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);-'+vendor+'-background-clip:padding-box;-'+vendor+'-box-sizing:border-box;'+(dir=='h'?'height:100%':'width:100%')+';-'+vendor+'-border-radius:3px;border-radius:3px';}
bar.style.cssText+=';pointer-events:none;-'+vendor+'-transition-property:-'+vendor+'-transform;-'+vendor+'-transition-timing-function:cubic-bezier(0.33,0.66,0.66,1);-'+vendor+'-transition-duration:0;-'+vendor+'-transform:'+trnOpen+'0,0'+trnClose;if(that.options.useTransition)bar.style.cssText+=';-'+vendor+'-transition-timing-function:cubic-bezier(0.33,0.66,0.66,1)';that[dir+'ScrollbarWrapper'].appendChild(bar);that[dir+'ScrollbarIndicator']=bar;}
if(dir=='h'){that.hScrollbarSize=that.hScrollbarWrapper.clientWidth;that.hScrollbarIndicatorSize=m.max(mround(that.hScrollbarSize*that.hScrollbarSize/that.scrollerW),8);that.hScrollbarIndicator.style.width=that.hScrollbarIndicatorSize+'px';that.hScrollbarMaxScroll=that.hScrollbarSize-that.hScrollbarIndicatorSize;that.hScrollbarProp=that.hScrollbarMaxScroll/that.maxScrollX;}else{that.vScrollbarSize=that.vScrollbarWrapper.clientHeight;that.vScrollbarIndicatorSize=m.max(mround(that.vScrollbarSize*that.vScrollbarSize/that.scrollerH),8);that.vScrollbarIndicator.style.height=that.vScrollbarIndicatorSize+'px';that.vScrollbarMaxScroll=that.vScrollbarSize-that.vScrollbarIndicatorSize;that.vScrollbarProp=that.vScrollbarMaxScroll/that.maxScrollY;}
that._scrollbarPos(dir,true);},_resize:function(){var that=this;setTimeout(function(){that.refresh();},isAndroid?200:0);},_pos:function(x,y){x=this.hScroll?x:0;y=this.vScroll?y:0;if(this.options.useTransform){this.scroller.style[vendor+'Transform']=trnOpen+x+'px,'+y+'px'+trnClose+' scale('+this.scale+')';}else{x=mround(x);y=mround(y);this.scroller.style.left=x+'px';this.scroller.style.top=y+'px';}
this.x=x;this.y=y;this._scrollbarPos('h');this._scrollbarPos('v');},_scrollbarPos:function(dir,hidden){var that=this,pos=dir=='h'?that.x:that.y,size;if(!that[dir+'Scrollbar'])return;pos=that[dir+'ScrollbarProp']*pos;if(pos<0){if(!that.options.fixedScrollbar){size=that[dir+'ScrollbarIndicatorSize']+mround(pos*3);if(size<8)size=8;that[dir+'ScrollbarIndicator'].style[dir=='h'?'width':'height']=size+'px';}
pos=0;}else if(pos>that[dir+'ScrollbarMaxScroll']){if(!that.options.fixedScrollbar){size=that[dir+'ScrollbarIndicatorSize']-mround((pos-that[dir+'ScrollbarMaxScroll'])*3);if(size<8)size=8;that[dir+'ScrollbarIndicator'].style[dir=='h'?'width':'height']=size+'px';pos=that[dir+'ScrollbarMaxScroll']+(that[dir+'ScrollbarIndicatorSize']-size);}else{pos=that[dir+'ScrollbarMaxScroll'];}}
that[dir+'ScrollbarWrapper'].style[vendor+'TransitionDelay']='0';that[dir+'ScrollbarWrapper'].style.opacity=hidden&&that.options.hideScrollbar?'0':'1';that[dir+'ScrollbarIndicator'].style[vendor+'Transform']=trnOpen+(dir=='h'?pos+'px,0':'0,'+pos+'px')+trnClose;},_start:function(e){var that=this,point=hasTouch?e.touches[0]:e,matrix,x,y,c1,c2;if(!that.enabled)return;if(that.options.onBeforeScrollStart)that.options.onBeforeScrollStart.call(that,e);if(that.options.useTransition||that.options.zoom)that._transitionTime(0);that.moved=false;that.animating=false;that.zoomed=false;that.distX=0;that.distY=0;that.absDistX=0;that.absDistY=0;that.dirX=0;that.dirY=0;if(that.options.zoom&&hasTouch&&e.touches.length>1){c1=m.abs(e.touches[0].pageX-e.touches[1].pageX);c2=m.abs(e.touches[0].pageY-e.touches[1].pageY);that.touchesDistStart=m.sqrt(c1*c1+c2*c2);that.originX=m.abs(e.touches[0].pageX+e.touches[1].pageX-that.wrapperOffsetLeft*2)/2-that.x;that.originY=m.abs(e.touches[0].pageY+e.touches[1].pageY-that.wrapperOffsetTop*2)/2-that.y;if(that.options.onZoomStart)that.options.onZoomStart.call(that,e);}
if(that.options.momentum){if(that.options.useTransform){matrix=getComputedStyle(that.scroller,null)[vendor+'Transform'].replace(/[^0-9-.,]/g,'').split(',');x=matrix[4]*1;y=matrix[5]*1;}else{x=getComputedStyle(that.scroller,null).left.replace(/[^0-9-]/g,'')*1;y=getComputedStyle(that.scroller,null).top.replace(/[^0-9-]/g,'')*1;}
if(x!=that.x||y!=that.y){if(that.options.useTransition)that._unbind('webkitTransitionEnd');else cancelFrame(that.aniTime);that.steps=[];that._pos(x,y);}}
that.absStartX=that.x;that.absStartY=that.y;that.startX=that.x;that.startY=that.y;that.pointX=point.pageX;that.pointY=point.pageY;that.startTime=e.timeStamp||Date.now();if(that.options.onScrollStart)that.options.onScrollStart.call(that,e);that._bind(MOVE_EV);that._bind(END_EV);that._bind(CANCEL_EV);},_move:function(e){var that=this,point=hasTouch?e.touches[0]:e,deltaX=point.pageX-that.pointX,deltaY=point.pageY-that.pointY,newX=that.x+deltaX,newY=that.y+deltaY,c1,c2,scale,timestamp=e.timeStamp||Date.now();if(that.options.onBeforeScrollMove)that.options.onBeforeScrollMove.call(that,e);if(that.options.zoom&&hasTouch&&e.touches.length>1){c1=m.abs(e.touches[0].pageX-e.touches[1].pageX);c2=m.abs(e.touches[0].pageY-e.touches[1].pageY);that.touchesDist=m.sqrt(c1*c1+c2*c2);that.zoomed=true;scale=1/that.touchesDistStart*that.touchesDist*this.scale;if(scale<that.options.zoomMin)scale=0.5*that.options.zoomMin*Math.pow(2.0,scale/that.options.zoomMin);else if(scale>that.options.zoomMax)scale=2.0*that.options.zoomMax*Math.pow(0.5,that.options.zoomMax/scale);that.lastScale=scale/this.scale;newX=this.originX-this.originX*that.lastScale+this.x,newY=this.originY-this.originY*that.lastScale+this.y;this.scroller.style[vendor+'Transform']=trnOpen+newX+'px,'+newY+'px'+trnClose+' scale('+scale+')';if(that.options.onZoom)that.options.onZoom.call(that,e);return;}
that.pointX=point.pageX;that.pointY=point.pageY;if(newX>0||newX<that.maxScrollX){newX=that.options.bounce?that.x+(deltaX/2):newX>=0||that.maxScrollX>=0?0:that.maxScrollX;}
if(newY>that.minScrollY||newY<that.maxScrollY){newY=that.options.bounce?that.y+(deltaY/2):newY>=that.minScrollY||that.maxScrollY>=0?that.minScrollY:that.maxScrollY;}
that.distX+=deltaX;that.distY+=deltaY;that.absDistX=m.abs(that.distX);that.absDistY=m.abs(that.distY);if(that.absDistX<6&&that.absDistY<6){return;}
if(that.options.lockDirection){if(that.absDistX>that.absDistY+5){newY=that.y;deltaY=0;}else if(that.absDistY>that.absDistX+5){newX=that.x;deltaX=0;}}
that.moved=true;that._pos(newX,newY);that.dirX=deltaX>0?-1:deltaX<0?1:0;that.dirY=deltaY>0?-1:deltaY<0?1:0;if(timestamp-that.startTime>300){that.startTime=timestamp;that.startX=that.x;that.startY=that.y;}
if(that.options.onScrollMove)that.options.onScrollMove.call(that,e);},_end:function(e){if(hasTouch&&e.touches.length!=0)return;var that=this,point=hasTouch?e.changedTouches[0]:e,target,ev,momentumX={dist:0,time:0},momentumY={dist:0,time:0},duration=(e.timeStamp||Date.now())-that.startTime,newPosX=that.x,newPosY=that.y,distX,distY,newDuration,snap,scale;that._unbind(MOVE_EV);that._unbind(END_EV);that._unbind(CANCEL_EV);if(that.options.onBeforeScrollEnd)that.options.onBeforeScrollEnd.call(that,e);if(that.zoomed){scale=that.scale*that.lastScale;scale=Math.max(that.options.zoomMin,scale);scale=Math.min(that.options.zoomMax,scale);that.lastScale=scale/that.scale;that.scale=scale;that.x=that.originX-that.originX*that.lastScale+that.x;that.y=that.originY-that.originY*that.lastScale+that.y;that.scroller.style[vendor+'TransitionDuration']='200ms';that.scroller.style[vendor+'Transform']=trnOpen+that.x+'px,'+that.y+'px'+trnClose+' scale('+that.scale+')';that.zoomed=false;that.refresh();if(that.options.onZoomEnd)that.options.onZoomEnd.call(that,e);return;}
if(!that.moved){if(hasTouch){if(that.doubleTapTimer&&that.options.zoom){clearTimeout(that.doubleTapTimer);that.doubleTapTimer=null;if(that.options.onZoomStart)that.options.onZoomStart.call(that,e);that.zoom(that.pointX,that.pointY,that.scale==1?that.options.doubleTapZoom:1);if(that.options.onZoomEnd){setTimeout(function(){that.options.onZoomEnd.call(that,e);},200);}}else{that.doubleTapTimer=setTimeout(function(){that.doubleTapTimer=null;target=point.target;while(target.nodeType!=1)target=target.parentNode;if(target.tagName!='SELECT'&&target.tagName!='INPUT'&&target.tagName!='TEXTAREA'){ev=document.createEvent('MouseEvents');ev.initMouseEvent('click',true,true,e.view,1,point.screenX,point.screenY,point.clientX,point.clientY,e.ctrlKey,e.altKey,e.shiftKey,e.metaKey,0,null);ev._fake=true;target.dispatchEvent(ev);}},that.options.zoom?250:0);}}
that._resetPos(200);if(that.options.onTouchEnd)that.options.onTouchEnd.call(that,e);return;}
if(duration<300&&that.options.momentum){momentumX=newPosX?that._momentum(newPosX-that.startX,duration,-that.x,that.scrollerW-that.wrapperW+that.x,that.options.bounce?that.wrapperW:0):momentumX;momentumY=newPosY?that._momentum(newPosY-that.startY,duration,-that.y,(that.maxScrollY<0?that.scrollerH-that.wrapperH+that.y-that.minScrollY:0),that.options.bounce?that.wrapperH:0):momentumY;newPosX=that.x+momentumX.dist;newPosY=that.y+momentumY.dist;if((that.x>0&&newPosX>0)||(that.x<that.maxScrollX&&newPosX<that.maxScrollX))momentumX={dist:0,time:0};if((that.y>that.minScrollY&&newPosY>that.minScrollY)||(that.y<that.maxScrollY&&newPosY<that.maxScrollY))momentumY={dist:0,time:0};}
if(momentumX.dist||momentumY.dist){newDuration=m.max(m.max(momentumX.time,momentumY.time),10);if(that.options.snap){distX=newPosX-that.absStartX;distY=newPosY-that.absStartY;if(m.abs(distX)<that.options.snapThreshold&&m.abs(distY)<that.options.snapThreshold){that.scrollTo(that.absStartX,that.absStartY,200);}
else{snap=that._snap(newPosX,newPosY);newPosX=snap.x;newPosY=snap.y;newDuration=m.max(snap.time,newDuration);}}
that.scrollTo(mround(newPosX),mround(newPosY),newDuration);if(that.options.onTouchEnd)that.options.onTouchEnd.call(that,e);return;}
if(that.options.snap){distX=newPosX-that.absStartX;distY=newPosY-that.absStartY;if(m.abs(distX)<that.options.snapThreshold&&m.abs(distY)<that.options.snapThreshold)that.scrollTo(that.absStartX,that.absStartY,200);else{snap=that._snap(that.x,that.y);if(snap.x!=that.x||snap.y!=that.y)that.scrollTo(snap.x,snap.y,snap.time);}
if(that.options.onTouchEnd)that.options.onTouchEnd.call(that,e);return;}
that._resetPos(200);if(that.options.onTouchEnd)that.options.onTouchEnd.call(that,e);},_resetPos:function(time){var that=this,resetX=that.x>=0?0:that.x<that.maxScrollX?that.maxScrollX:that.x,resetY=that.y>=that.minScrollY||that.maxScrollY>0?that.minScrollY:that.y<that.maxScrollY?that.maxScrollY:that.y;if(resetX==that.x&&resetY==that.y){if(that.moved){that.moved=false;if(that.options.onScrollEnd)that.options.onScrollEnd.call(that);}
if(that.hScrollbar&&that.options.hideScrollbar){if(vendor=='webkit')that.hScrollbarWrapper.style[vendor+'TransitionDelay']='300ms';that.hScrollbarWrapper.style.opacity='0';}
if(that.vScrollbar&&that.options.hideScrollbar){if(vendor=='webkit')that.vScrollbarWrapper.style[vendor+'TransitionDelay']='300ms';that.vScrollbarWrapper.style.opacity='0';}
return;}
that.scrollTo(resetX,resetY,time||0);},_wheel:function(e){var that=this,wheelDeltaX,wheelDeltaY,deltaX,deltaY,deltaScale;if('wheelDeltaX'in e){wheelDeltaX=e.wheelDeltaX/12;wheelDeltaY=e.wheelDeltaY/12;}else if('wheelDelta'in e){wheelDeltaX=wheelDeltaY=e.wheelDelta/12;}else if('detail'in e){wheelDeltaX=wheelDeltaY=-e.detail*3;}else{return;}
if(that.options.wheelAction=='zoom'){deltaScale=that.scale*Math.pow(2,1/3*(wheelDeltaY?wheelDeltaY/Math.abs(wheelDeltaY):0));if(deltaScale<that.options.zoomMin)deltaScale=that.options.zoomMin;if(deltaScale>that.options.zoomMax)deltaScale=that.options.zoomMax;if(deltaScale!=that.scale){if(!that.wheelZoomCount&&that.options.onZoomStart)that.options.onZoomStart.call(that,e);that.wheelZoomCount++;that.zoom(e.pageX,e.pageY,deltaScale,400);setTimeout(function(){that.wheelZoomCount--;if(!that.wheelZoomCount&&that.options.onZoomEnd)that.options.onZoomEnd.call(that,e);},400);}
return;}
deltaX=that.x+wheelDeltaX;deltaY=that.y+wheelDeltaY;if(deltaX>0)deltaX=0;else if(deltaX<that.maxScrollX)deltaX=that.maxScrollX;if(deltaY>that.minScrollY)deltaY=that.minScrollY;else if(deltaY<that.maxScrollY)deltaY=that.maxScrollY;that.scrollTo(deltaX,deltaY,0);},_mouseout:function(e){var t=e.relatedTarget;if(!t){this._end(e);return;}
while(t=t.parentNode)if(t==this.wrapper)return;this._end(e);},_transitionEnd:function(e){var that=this;if(e.target!=that.scroller)return;that._unbind('webkitTransitionEnd');that._startAni();},_startAni:function(){var that=this,startX=that.x,startY=that.y,startTime=Date.now(),step,easeOut,animate;if(that.animating)return;if(!that.steps.length){that._resetPos(400);return;}
step=that.steps.shift();if(step.x==startX&&step.y==startY)step.time=0;that.animating=true;that.moved=true;if(that.options.useTransition){that._transitionTime(step.time);that._pos(step.x,step.y);that.animating=false;if(step.time)that._bind('webkitTransitionEnd');else that._resetPos(0);return;}
animate=function(){var now=Date.now(),newX,newY;if(now>=startTime+step.time){that._pos(step.x,step.y);that.animating=false;if(that.options.onAnimationEnd)that.options.onAnimationEnd.call(that);that._startAni();return;}
now=(now-startTime)/step.time-1;easeOut=m.sqrt(1-now*now);newX=(step.x-startX)*easeOut+startX;newY=(step.y-startY)*easeOut+startY;that._pos(newX,newY);if(that.animating)that.aniTime=nextFrame(animate);};animate();},_transitionTime:function(time){time+='ms';this.scroller.style[vendor+'TransitionDuration']=time;if(this.hScrollbar)this.hScrollbarIndicator.style[vendor+'TransitionDuration']=time;if(this.vScrollbar)this.vScrollbarIndicator.style[vendor+'TransitionDuration']=time;},_momentum:function(dist,time,maxDistUpper,maxDistLower,size){var deceleration=0.0006,speed=m.abs(dist)/time,newDist=(speed*speed)/(2*deceleration),newTime=0,outsideDist=0;if(dist>0&&newDist>maxDistUpper){outsideDist=size/(6/(newDist/speed*deceleration));maxDistUpper=maxDistUpper+outsideDist;speed=speed*maxDistUpper/newDist;newDist=maxDistUpper;}else if(dist<0&&newDist>maxDistLower){outsideDist=size/(6/(newDist/speed*deceleration));maxDistLower=maxDistLower+outsideDist;speed=speed*maxDistLower/newDist;newDist=maxDistLower;}
newDist=newDist*(dist<0?-1:1);newTime=speed/deceleration;return{dist:newDist,time:mround(newTime)};},_offset:function(el){var left=-el.offsetLeft,top=-el.offsetTop;while(el=el.offsetParent){left-=el.offsetLeft;top-=el.offsetTop;}
if(el!=this.wrapper){left*=this.scale;top*=this.scale;}
return{left:left,top:top};},_snap:function(x,y){var that=this,i,l,page,time,sizeX,sizeY;page=that.pagesX.length-1;for(i=0,l=that.pagesX.length;i<l;i++){if(x>=that.pagesX[i]){page=i;break;}}
if(page==that.currPageX&&page>0&&that.dirX<0)page--;x=that.pagesX[page];sizeX=m.abs(x-that.pagesX[that.currPageX]);sizeX=sizeX?m.abs(that.x-x)/sizeX*500:0;that.currPageX=page;page=that.pagesY.length-1;for(i=0;i<page;i++){if(y>=that.pagesY[i]){page=i;break;}}
if(page==that.currPageY&&page>0&&that.dirY<0)page--;y=that.pagesY[page];sizeY=m.abs(y-that.pagesY[that.currPageY]);sizeY=sizeY?m.abs(that.y-y)/sizeY*500:0;that.currPageY=page;time=mround(m.max(sizeX,sizeY))||200;return{x:x,y:y,time:time};},_bind:function(type,el,bubble){(el||this.scroller).addEventListener(type,this,!!bubble);},_unbind:function(type,el,bubble){(el||this.scroller).removeEventListener(type,this,!!bubble);},destroy:function(){var that=this;that.scroller.style[vendor+'Transform']='';that.hScrollbar=false;that.vScrollbar=false;that._scrollbar('h');that._scrollbar('v');that._unbind(RESIZE_EV,window);that._unbind(START_EV);that._unbind(MOVE_EV);that._unbind(END_EV);that._unbind(CANCEL_EV);if(!that.options.hasTouch){that._unbind('mouseout',that.wrapper);that._unbind(WHEEL_EV);}
if(that.options.useTransition)that._unbind('webkitTransitionEnd');if(that.options.checkDOMChanges)clearInterval(that.checkDOMTime);if(that.options.onDestroy)that.options.onDestroy.call(that);},refresh:function(){var that=this,offset,i,l,els,pos=0,page=0;if(that.scale<that.options.zoomMin)that.scale=that.options.zoomMin;that.wrapperW=that.wrapper.clientWidth||1;that.wrapperH=that.wrapper.clientHeight||1;that.minScrollY=-that.options.topOffset||0;that.scrollerW=mround(that.scroller.offsetWidth*that.scale);that.scrollerH=mround((that.scroller.offsetHeight+that.minScrollY)*that.scale);that.maxScrollX=that.wrapperW-that.scrollerW;that.maxScrollY=that.wrapperH-that.scrollerH+that.minScrollY;that.dirX=0;that.dirY=0;if(that.options.onRefresh)that.options.onRefresh.call(that);that.hScroll=that.options.hScroll&&that.maxScrollX<0;that.vScroll=that.options.vScroll&&(!that.options.bounceLock&&!that.hScroll||that.scrollerH>that.wrapperH);that.hScrollbar=that.hScroll&&that.options.hScrollbar;that.vScrollbar=that.vScroll&&that.options.vScrollbar&&that.scrollerH>that.wrapperH;offset=that._offset(that.wrapper);that.wrapperOffsetLeft=-offset.left;that.wrapperOffsetTop=-offset.top;if(typeof that.options.snap=='string'){that.pagesX=[];that.pagesY=[];els=that.scroller.querySelectorAll(that.options.snap);for(i=0,l=els.length;i<l;i++){pos=that._offset(els[i]);pos.left+=that.wrapperOffsetLeft;pos.top+=that.wrapperOffsetTop;that.pagesX[i]=pos.left<that.maxScrollX?that.maxScrollX:pos.left*that.scale;that.pagesY[i]=pos.top<that.maxScrollY?that.maxScrollY:pos.top*that.scale;}}else if(that.options.snap){that.pagesX=[];while(pos>=that.maxScrollX){that.pagesX[page]=pos;pos=pos-that.wrapperW;page++;}
if(that.maxScrollX%that.wrapperW)that.pagesX[that.pagesX.length]=that.maxScrollX-that.pagesX[that.pagesX.length-1]+that.pagesX[that.pagesX.length-1];pos=0;page=0;that.pagesY=[];while(pos>=that.maxScrollY){that.pagesY[page]=pos;pos=pos-that.wrapperH;page++;}
if(that.maxScrollY%that.wrapperH)that.pagesY[that.pagesY.length]=that.maxScrollY-that.pagesY[that.pagesY.length-1]+that.pagesY[that.pagesY.length-1];}
that._scrollbar('h');that._scrollbar('v');if(!that.zoomed){that.scroller.style[vendor+'TransitionDuration']='0';that._resetPos(200);}},scrollTo:function(x,y,time,relative){var that=this,step=x,i,l;that.stop();if(!step.length)step=[{x:x,y:y,time:time,relative:relative}];for(i=0,l=step.length;i<l;i++){if(step[i].relative){step[i].x=that.x-step[i].x;step[i].y=that.y-step[i].y;}
that.steps.push({x:step[i].x,y:step[i].y,time:step[i].time||0});}
that._startAni();},scrollToElement:function(el,time){var that=this,pos;el=el.nodeType?el:that.scroller.querySelector(el);if(!el)return;pos=that._offset(el);pos.left+=that.wrapperOffsetLeft;pos.top+=that.wrapperOffsetTop;pos.left=pos.left>0?0:pos.left<that.maxScrollX?that.maxScrollX:pos.left;pos.top=pos.top>that.minScrollY?that.minScrollY:pos.top<that.maxScrollY?that.maxScrollY:pos.top;time=time===undefined?m.max(m.abs(pos.left)*2,m.abs(pos.top)*2):time;that.scrollTo(pos.left,pos.top,time);},scrollToPage:function(pageX,pageY,time){var that=this,x,y;time=time===undefined?400:time;if(that.options.onScrollStart)that.options.onScrollStart.call(that);if(that.options.snap){pageX=pageX=='next'?that.currPageX+1:pageX=='prev'?that.currPageX-1:pageX;pageY=pageY=='next'?that.currPageY+1:pageY=='prev'?that.currPageY-1:pageY;pageX=pageX<0?0:pageX>that.pagesX.length-1?that.pagesX.length-1:pageX;pageY=pageY<0?0:pageY>that.pagesY.length-1?that.pagesY.length-1:pageY;that.currPageX=pageX;that.currPageY=pageY;x=that.pagesX[pageX];y=that.pagesY[pageY];}else{x=-that.wrapperW*pageX;y=-that.wrapperH*pageY;if(x<that.maxScrollX)x=that.maxScrollX;if(y<that.maxScrollY)y=that.maxScrollY;}
that.scrollTo(x,y,time);},disable:function(){this.stop();this._resetPos(0);this.enabled=false;this._unbind(MOVE_EV);this._unbind(END_EV);this._unbind(CANCEL_EV);},enable:function(){this.enabled=true;},stop:function(){if(this.options.useTransition)this._unbind('webkitTransitionEnd');else cancelFrame(this.aniTime);this.steps=[];this.moved=false;this.animating=false;},zoom:function(x,y,scale,time){var that=this,relScale=scale/that.scale;if(!that.options.useTransform)return;that.zoomed=true;time=time===undefined?200:time;x=x-that.wrapperOffsetLeft-that.x;y=y-that.wrapperOffsetTop-that.y;that.x=x-x*relScale+that.x;that.y=y-y*relScale+that.y;that.scale=scale;that.refresh();that.x=that.x>0?0:that.x<that.maxScrollX?that.maxScrollX:that.x;that.y=that.y>that.minScrollY?that.minScrollY:that.y<that.maxScrollY?that.maxScrollY:that.y;that.scroller.style[vendor+'TransitionDuration']=time+'ms';that.scroller.style[vendor+'Transform']=trnOpen+that.x+'px,'+that.y+'px'+trnClose+' scale('+scale+')';that.zoomed=false;},isReady:function(){return!this.moved&&!this.zoomed&&!this.animating;}};if(typeof exports!=='undefined')exports.iScroll=iScroll;else window.iScroll=iScroll;})();

return iScroll;
});

KISSY.add('gallery/contacts/1.0/pinyin' , function (S) {
	var Pinyin = function (options) {
		this.initialize(options);
	};
	
	Pinyin.prototype = {
		//Implements:[Options],
		options:{
			checkPolyphone: false,
			charcase: 'default'
		},
		
		initialize: function(options){
			//this.setOptions(options);
			this.char_dict = "YDYQSXMWZSSXJBYMGCCZQPSSQBYCDSCDQLDYLYBSSJGYZZJJFKCCLZDHWDWZJLJPFYYNWJJTMYHZWZHFLZPPQHGSCYYYNJQYXXGJHHSDSJNKKTMOMLCRXYPSNQSECCQZGGLLYJLMYZZSECYKYYHQWJSSGGYXYZYJWWKDJHYCHMYXJTLXJYQBYXZLDWRDJRWYSRLDZJPCBZJJBRCFTLECZSTZFXXZHTRQHYBDLYCZSSYMMRFMYQZPWWJJYFCRWFDFZQPYDDWYXKYJAWJFFXYPSFTZYHHYZYSWCJYXSCLCXXWZZXNBGNNXBXLZSZSBSGPYSYZDHMDZBQBZCWDZZYYTZHBTSYYBZGNTNXQYWQSKBPHHLXGYBFMJEBJHHGQTJCYSXSTKZHLYCKGLYSMZXYALMELDCCXGZYRJXSDLTYZCQKCNNJWHJTZZCQLJSTSTBNXBTYXCEQXGKWJYFLZQLYHYXSPSFXLMPBYSXXXYDJCZYLLLSJXFHJXPJBTFFYABYXBHZZBJYZLWLCZGGBTSSMDTJZXPTHYQTGLJSCQFZKJZJQNLZWLSLHDZBWJNCJZYZSQQYCQYRZCJJWYBRTWPYFTWEXCSKDZCTBZHYZZYYJXZCFFZZMJYXXSDZZOTTBZLQWFCKSZSXFYRLNYJMBDTHJXSQQCCSBXYYTSYFBXDZTGBCNSLCYZZPSAZYZZSCJCSHZQYDXLBPJLLMQXTYDZXSQJTZPXLCGLQTZWJBHCTSYJSFXYEJJTLBGXSXJMYJQQPFZASYJNTYDJXKJCDJSZCBARTDCLYJQMWNQNCLLLKBYBZZSYHQQLTWLCCXTXLLZNTYLNEWYZYXCZXXGRKRMTCNDNJTSYYSSDQDGHSDBJGHRWRQLYBGLXHLGTGXBQJDZPYJSJYJCTMRNYMGRZJCZGJMZMGXMPRYXKJNYMSGMZJYMKMFXMLDTGFBHCJHKYLPFMDXLQJJSMTQGZSJLQDLDGJYCALCMZCSDJLLNXDJFFFFJCZFMZFFPFKHKGDPSXKTACJDHHZDDCRRCFQYJKQCCWJDXHWJLYLLZGCFCQDSMLZPBJJPLSBCJGGDCKKDEZSQCCKJGCGKDJTJDLZYCXKLQSCGJCLTFPCQCZGWPJDQYZJJBYJHSJDZWGFSJGZKQCCZLLPSPKJGQJHZZLJPLGJGJJTHJJYJZCZMLZLYQBGJWMLJKXZDZNJQSYZMLJLLJKYWXMKJLHSKJGBMCLYYMKXJQLBMLLKMDXXKWYXYSLMLPSJQQJQXYXFJTJDXMXXLLCXQBSYJBGWYMBGGBCYXPJYGPEPFGDJGBHBNSQJYZJKJKHXQFGQZKFHYGKHDKLLSDJQXPQYKYBNQSXQNSZSWHBSXWHXWBZZXDMNSJBSBKBBZKLYLXGWXDRWYQZMYWSJQLCJXXJXKJEQXSCYETLZHLYYYSDZPAQYZCMTLSHTZCFYZYXYLJSDCJQAGYSLCQLYYYSHMRQQKLDXZSCSSSYDYCJYSFSJBFRSSZQSBXXPXJYSDRCKGJLGDKZJZBDKTCSYQPYHSTCLDJDHMXMCGXYZHJDDTMHLTXZXYLYMOHYJCLTYFBQQXPFBDFHHTKSQHZYYWCNXXCRWHOWGYJLEGWDQCWGFJYCSNTMYTOLBYGWQWESJPWNMLRYDZSZTXYQPZGCWXHNGPYXSHMYQJXZTDPPBFYHZHTJYFDZWKGKZBLDNTSXHQEEGZZYLZMMZYJZGXZXKHKSTXNXXWYLYAPSTHXDWHZYMPXAGKYDXBHNHXKDPJNMYHYLPMGOCSLNZHKXXLPZZLBMLSFBHHGYGYYGGBHSCYAQTYWLXTZQCEZYDQDQMMHTKLLSZHLSJZWFYHQSWSCWLQAZYNYTLSXTHAZNKZZSZZLAXXZWWCTGQQTDDYZTCCHYQZFLXPSLZYGPZSZNGLNDQTBDLXGTCTAJDKYWNSYZLJHHZZCWNYYZYWMHYCHHYXHJKZWSXHZYXLYSKQYSPSLYZWMYPPKBYGLKZHTYXAXQSYSHXASMCHKDSCRSWJPWXSGZJLWWSCHSJHSQNHCSEGNDAQTBAALZZMSSTDQJCJKTSCJAXPLGGXHHGXXZCXPDMMHLDGTYBYSJMXHMRCPXXJZCKZXSHMLQXXTTHXWZFKHCCZDYTCJYXQHLXDHYPJQXYLSYYDZOZJNYXQEZYSQYAYXWYPDGXDDXSPPYZNDLTWRHXYDXZZJHTCXMCZLHPYYYYMHZLLHNXMYLLLMDCPPXHMXDKYCYRDLTXJCHHZZXZLCCLYLNZSHZJZZLNNRLWHYQSNJHXYNTTTKYJPYCHHYEGKCTTWLGQRLGGTGTYGYHPYHYLQYQGCWYQKPYYYTTTTLHYHLLTYTTSPLKYZXGZWGPYDSSZZDQXSKCQNMJJZZBXYQMJRTFFBTKHZKBXLJJKDXJTLBWFZPPTKQTZTGPDGNTPJYFALQMKGXBDCLZFHZCLLLLADPMXDJHLCCLGYHDZFGYDDGCYYFGYDXKSSEBDHYKDKDKHNAXXYBPBYYHXZQGAFFQYJXDMLJCSQZLLPCHBSXGJYNDYBYQSPZWJLZKSDDTACTBXZDYZYPJZQSJNKKTKNJDJGYYPGTLFYQKASDNTCYHBLWDZHBBYDWJRYGKZYHEYYFJMSDTYFZJJHGCXPLXHLDWXXJKYTCYKSSSMTWCTTQZLPBSZDZWZXGZAGYKTYWXLHLSPBCLLOQMMZSSLCMBJCSZZKYDCZJGQQDSMCYTZQQLWZQZXSSFPTTFQMDDZDSHDTDWFHTDYZJYQJQKYPBDJYYXTLJHDRQXXXHAYDHRJLKLYTWHLLRLLRCXYLBWSRSZZSYMKZZHHKYHXKSMDSYDYCJPBZBSQLFCXXXNXKXWYWSDZYQOGGQMMYHCDZTTFJYYBGSTTTYBYKJDHKYXBELHTYPJQNFXFDYKZHQKZBYJTZBXHFDXKDASWTAWAJLDYJSFHBLDNNTNQJTJNCHXFJSRFWHZFMDRYJYJWZPDJKZYJYMPCYZNYNXFBYTFYFWYGDBNZZZDNYTXZEMMQBSQEHXFZMBMFLZZSRXYMJGSXWZJSPRYDJSJGXHJJGLJJYNZZJXHGXKYMLPYYYCXYTWQZSWHWLYRJLPXSLSXMFSWWKLCTNXNYNPSJSZHDZEPTXMYYWXYYSYWLXJQZQXZDCLEEELMCPJPCLWBXSQHFWWTFFJTNQJHJQDXHWLBYZNFJLALKYYJLDXHHYCSTYYWNRJYXYWTRMDRQHWQCMFJDYZMHMYYXJWMYZQZXTLMRSPWWCHAQBXYGZYPXYYRRCLMPYMGKSJSZYSRMYJSNXTPLNBAPPYPYLXYYZKYNLDZYJZCZNNLMZHHARQMPGWQTZMXXMLLHGDZXYHXKYXYCJMFFYYHJFSBSSQLXXNDYCANNMTCJCYPRRNYTYQNYYMBMSXNDLYLYSLJRLXYSXQMLLYZLZJJJKYZZCSFBZXXMSTBJGNXYZHLXNMCWSCYZYFZLXBRNNNYLBNRTGZQYSATSWRYHYJZMZDHZGZDWYBSSCSKXSYHYTXXGCQGXZZSHYXJSCRHMKKBXCZJYJYMKQHZJFNBHMQHYSNJNZYBKNQMCLGQHWLZNZSWXKHLJHYYBQLBFCDSXDLDSPFZPSKJYZWZXZDDXJSMMEGJSCSSMGCLXXKYYYLNYPWWWGYDKZJGGGZGGSYCKNJWNJPCXBJJTQTJWDSSPJXZXNZXUMELPXFSXTLLXCLJXJJLJZXCTPSWXLYDHLYQRWHSYCSQYYBYAYWJJJQFWQCQQCJQGXALDBZZYJGKGXPLTZYFXJLTPADKYQHPMATLCPDCKBMTXYBHKLENXDLEEGQDYMSAWHZMLJTWYGXLYQZLJEEYYBQQFFNLYXRDSCTGJGXYYNKLLYQKCCTLHJLQMKKZGCYYGLLLJDZGYDHZWXPYSJBZKDZGYZZHYWYFQYTYZSZYEZZLYMHJJHTSMQWYZLKYYWZCSRKQYTLTDXWCTYJKLWSQZWBDCQYNCJSRSZJLKCDCDTLZZZACQQZZDDXYPLXZBQJYLZLLLQDDZQJYJYJZYXNYYYNYJXKXDAZWYRDLJYYYRJLXLLDYXJCYWYWNQCCLDDNYYYNYCKCZHXXCCLGZQJGKWPPCQQJYSBZZXYJSQPXJPZBSBDSFNSFPZXHDWZTDWPPTFLZZBZDMYYPQJRSDZSQZSQXBDGCPZSWDWCSQZGMDHZXMWWFYBPDGPHTMJTHZSMMBGZMBZJCFZWFZBBZMQCFMBDMCJXLGPNJBBXGYHYYJGPTZGZMQBQTCGYXJXLWZKYDPDYMGCFTPFXYZTZXDZXTGKMTYBBCLBJASKYTSSQYYMSZXFJEWLXLLSZBQJJJAKLYLXLYCCTSXMCWFKKKBSXLLLLJYXTYLTJYYTDPJHNHNNKBYQNFQYYZBYYESSESSGDYHFHWTCJBSDZZTFDMXHCNJZYMQWSRYJDZJQPDQBBSTJGGFBKJBXTGQHNGWJXJGDLLTHZHHYYYYYYSXWTYYYCCBDBPYPZYCCZYJPZYWCBDLFWZCWJDXXHYHLHWZZXJTCZLCDPXUJCZZZLYXJJTXPHFXWPYWXZPTDZZBDZCYHJHMLXBQXSBYLRDTGJRRCTTTHYTCZWMXFYTWWZCWJWXJYWCSKYBZSCCTZQNHXNWXXKHKFHTSWOCCJYBCMPZZYKBNNZPBZHHZDLSYDDYTYFJPXYNGFXBYQXCBHXCPSXTYZDMKYSNXSXLHKMZXLYHDHKWHXXSSKQYHHCJYXGLHZXCSNHEKDTGZXQYPKDHEXTYKCNYMYYYPKQYYYKXZLTHJQTBYQHXBMYHSQCKWWYLLHCYYLNNEQXQWMCFBDCCMLJGGXDQKTLXKGNQCDGZJWYJJLYHHQTTTNWCHMXCXWHWSZJYDJCCDBQCDGDNYXZTHCQRXCBHZTQCBXWGQWYYBXHMBYMYQTYEXMQKYAQYRGYZSLFYKKQHYSSQYSHJGJCNXKZYCXSBXYXHYYLSTYCXQTHYSMGSCPMMGCCCCCMTZTASMGQZJHKLOSQYLSWTMXSYQKDZLJQQYPLSYCZTCQQPBBQJZCLPKHQZYYXXDTDDTSJCXFFLLCHQXMJLWCJCXTSPYCXNDTJSHJWXDQQJSKXYAMYLSJHMLALYKXCYYDMNMDQMXMCZNNCYBZKKYFLMCHCMLHXRCJJHSYLNMTJZGZGYWJXSRXCWJGJQHQZDQJDCJJZKJKGDZQGJJYJYLXZXXCDQHHHEYTMHLFSBDJSYYSHFYSTCZQLPBDRFRZTZYKYWHSZYQKWDQZRKMSYNBCRXQBJYFAZPZZEDZCJYWBCJWHYJBQSZYWRYSZPTDKZPFPBNZTKLQYHBBZPNPPTYZZYBQNYDCPJMMCYCQMCYFZZDCMNLFPBPLNGQJTBTTNJZPZBBZNJKLJQYLNBZQHKSJZNGGQSZZKYXSHPZSNBCGZKDDZQANZHJKDRTLZLSWJLJZLYWTJNDJZJHXYAYNCBGTZCSSQMNJPJYTYSWXZFKWJQTKHTZPLBHSNJZSYZBWZZZZLSYLSBJHDWWQPSLMMFBJDWAQYZTCJTBNNWZXQXCDSLQGDSDPDZHJTQQPSWLYYJZLGYXYZLCTCBJTKTYCZJTQKBSJLGMGZDMCSGPYNJZYQYYKNXRPWSZXMTNCSZZYXYBYHYZAXYWQCJTLLCKJJTJHGDXDXYQYZZBYWDLWQCGLZGJGQRQZCZSSBCRPCSKYDZNXJSQGXSSJMYDNSTZTPBDLTKZWXQWQTZEXNQCZGWEZKSSBYBRTSSSLCCGBPSZQSZLCCGLLLZXHZQTHCZMQGYZQZNMCOCSZJMMZSQPJYGQLJYJPPLDXRGZYXCCSXHSHGTZNLZWZKJCXTCFCJXLBMQBCZZWPQDNHXLJCTHYZLGYLNLSZZPCXDSCQQHJQKSXZPBAJYEMSMJTZDXLCJYRYYNWJBNGZZTMJXLTBSLYRZPYLSSCNXPHLLHYLLQQZQLXYMRSYCXZLMMCZLTZSDWTJJLLNZGGQXPFSKYGYGHBFZPDKMWGHCXMSGDXJMCJZDYCABXJDLNBCDQYGSKYDQTXDJJYXMSZQAZDZFSLQXYJSJZYLBTXXWXQQZBJZUFBBLYLWDSLJHXJYZJWTDJCZFQZQZZDZSXZZQLZCDZFJHYSPYMPQZMLPPLFFXJJNZZYLSJEYQZFPFZKSYWJJJHRDJZZXTXXGLGHYDXCSKYSWMMZCWYBAZBJKSHFHJCXMHFQHYXXYZFTSJYZFXYXPZLCHMZMBXHZZSXYFYMNCWDABAZLXKTCSHHXKXJJZJSTHYGXSXYYHHHJWXKZXSSBZZWHHHCWTZZZPJXSNXQQJGZYZYWLLCWXZFXXYXYHXMKYYSWSQMNLNAYCYSPMJKHWCQHYLAJJMZXHMMCNZHBHXCLXTJPLTXYJHDYYLTTXFSZHYXXSJBJYAYRSMXYPLCKDUYHLXRLNLLSTYZYYQYGYHHSCCSMZCTZQXKYQFPYYRPFFLKQUNTSZLLZMWWTCQQYZWTLLMLMPWMBZSSTZRBPDDTLQJJBXZCSRZQQYGWCSXFWZLXCCRSZDZMCYGGDZQSGTJSWLJMYMMZYHFBJDGYXCCPSHXNZCSBSJYJGJMPPWAFFYFNXHYZXZYLREMZGZCYZSSZDLLJCSQFNXZKPTXZGXJJGFMYYYSNBTYLBNLHPFZDCYFBMGQRRSSSZXYSGTZRNYDZZCDGPJAFJFZKNZBLCZSZPSGCYCJSZLMLRSZBZZLDLSLLYSXSQZQLYXZLSKKBRXBRBZCYCXZZZEEYFGKLZLYYHGZSGZLFJHGTGWKRAAJYZKZQTSSHJJXDCYZUYJLZYRZDQQHGJZXSSZBYKJPBFRTJXLLFQWJHYLQTYMBLPZDXTZYGBDHZZRBGXHWNJTJXLKSCFSMWLSDQYSJTXKZSCFWJLBXFTZLLJZLLQBLSQMQQCGCZFPBPHZCZJLPYYGGDTGWDCFCZQYYYQYSSCLXZSKLZZZGFFCQNWGLHQYZJJCZLQZZYJPJZZBPDCCMHJGXDQDGDLZQMFGPSYTSDYFWWDJZJYSXYYCZCYHZWPBYKXRYLYBHKJKSFXTZJMMCKHLLTNYYMSYXYZPYJQYCSYCWMTJJKQYRHLLQXPSGTLYYCLJSCPXJYZFNMLRGJJTYZBXYZMSJYJHHFZQMSYXRSZCWTLRTQZSSTKXGQKGSPTGCZNJSJCQCXHMXGGZTQYDJKZDLBZSXJLHYQGGGTHQSZPYHJHHGYYGKGGCWJZZYLCZLXQSFTGZSLLLMLJSKCTBLLZZSZMMNYTPZSXQHJCJYQXYZXZQZCPSHKZZYSXCDFGMWQRLLQXRFZTLYSTCTMJCXJJXHJNXTNRZTZFQYHQGLLGCXSZSJDJLJCYDSJTLNYXHSZXCGJZYQPYLFHDJSBPCCZHJJJQZJQDYBSSLLCMYTTMQTBHJQNNYGKYRQYQMZGCJKPDCGMYZHQLLSLLCLMHOLZGDYYFZSLJCQZLYLZQJESHNYLLJXGJXLYSYYYXNBZLJSSZCQQCJYLLZLTJYLLZLLBNYLGQCHXYYXOXCXQKYJXXXYKLXSXXYQXCYKQXQCSGYXXYQXYGYTQOHXHXPYXXXULCYEYCHZZCBWQBBWJQZSCSZSSLZYLKDESJZWMYMCYTSDSXXSCJPQQSQYLYYZYCMDJDZYWCBTJSYDJKCYDDJLBDJJSODZYSYXQQYXDHHGQQYQHDYXWGMMMAJDYBBBPPBCMUUPLJZSMTXERXJMHQNUTPJDCBSSMSSSTKJTSSMMTRCPLZSZMLQDSDMJMQPNQDXCFYNBFSDQXYXHYAYKQYDDLQYYYSSZBYDSLNTFQTZQPZMCHDHCZCWFDXTMYQSPHQYYXSRGJCWTJTZZQMGWJJTJHTQJBBHWZPXXHYQFXXQYWYYHYSCDYDHHQMNMTMWCPBSZPPZZGLMZFOLLCFWHMMSJZTTDHZZYFFYTZZGZYSKYJXQYJZQBHMBZZLYGHGFMSHPZFZSNCLPBQSNJXZSLXXFPMTYJYGBXLLDLXPZJYZJYHHZCYWHJYLSJEXFSZZYWXKZJLUYDTMLYMQJPWXYHXSKTQJEZRPXXZHHMHWQPWQLYJJQJJZSZCPHJLCHHNXJLQWZJHBMZYXBDHHYPZLHLHLGFWLCHYYTLHJXCJMSCPXSTKPNHQXSRTYXXTESYJCTLSSLSTDLLLWWYHDHRJZSFGXTSYCZYNYHTDHWJSLHTZDQDJZXXQHGYLTZPHCSQFCLNJTCLZPFSTPDYNYLGMJLLYCQHYSSHCHYLHQYQTMZYPBYWRFQYKQSYSLZDQJMPXYYSSRHZJNYWTQDFZBWWTWWRXCWHGYHXMKMYYYQMSMZHNGCEPMLQQMTCWCTMMPXJPJJHFXYYZSXZHTYBMSTSYJTTQQQYYLHYNPYQZLCYZHZWSMYLKFJXLWGXYPJYTYSYXYMZCKTTWLKSMZSYLMPWLZWXWQZSSAQSYXYRHSSNTSRAPXCPWCMGDXHXZDZYFJHGZTTSBJHGYZSZYSMYCLLLXBTYXHBBZJKSSDMALXHYCFYGMQYPJYCQXJLLLJGSLZGQLYCJCCZOTYXMTMTTLLWTGPXYMZMKLPSZZZXHKQYSXCTYJZYHXSHYXZKXLZWPSQPYHJWPJPWXQQYLXSDHMRSLZZYZWTTCYXYSZZSHBSCCSTPLWSSCJCHNLCGCHSSPHYLHFHHXJSXYLLNYLSZDHZXYLSXLWZYKCLDYAXZCMDDYSPJTQJZLNWQPSSSWCTSTSZLBLNXSMNYYMJQBQHRZWTYYDCHQLXKPZWBGQYBKFCMZWPZLLYYLSZYDWHXPSBCMLJBSCGBHXLQHYRLJXYSWXWXZSLDFHLSLYNJLZYFLYJYCDRJLFSYZFSLLCQYQFGJYHYXZLYLMSTDJCYHBZLLNWLXXYGYYHSMGDHXXHHLZZJZXCZZZCYQZFNGWPYLCPKPYYPMCLQKDGXZGGWQBDXZZKZFBXXLZXJTPJPTTBYTSZZDWSLCHZHSLTYXHQLHYXXXYYZYSWTXZKHLXZXZPYHGCHKCFSYHUTJRLXFJXPTZTWHPLYXFCRHXSHXKYXXYHZQDXQWULHYHMJTBFLKHTXCWHJFWJCFPQRYQXCYYYQYGRPYWSGSUNGWCHKZDXYFLXXHJJBYZWTSXXNCYJJYMSWZJQRMHXZWFQSYLZJZGBHYNSLBGTTCSYBYXXWXYHXYYXNSQYXMQYWRGYQLXBBZLJSYLPSYTJZYHYZAWLRORJMKSCZJXXXYXCHDYXRYXXJDTSQFXLYLTSFFYXLMTYJMJUYYYXLTZCSXQZQHZXLYYXZHDNBRXXXJCTYHLBRLMBRLLAXKYLLLJLYXXLYCRYLCJTGJCMTLZLLCYZZPZPCYAWHJJFYBDYYZSMPCKZDQYQPBPCJPDCYZMDPBCYYDYCNNPLMTMLRMFMMGWYZBSJGYGSMZQQQZTXMKQWGXLLPJGZBQCDJJJFPKJKCXBLJMSWMDTQJXLDLPPBXCWRCQFBFQJCZAHZGMYKPHYYHZYKNDKZMBPJYXPXYHLFPNYYGXJDBKXNXHJMZJXSTRSTLDXSKZYSYBZXJLXYSLBZYSLHXJPFXPQNBYLLJQKYGZMCYZZYMCCSLCLHZFWFWYXZMWSXTYNXJHPYYMCYSPMHYSMYDYSHQYZCHMJJMZCAAGCFJBBHPLYZYLXXSDJGXDHKXXTXXNBHRMLYJSLTXMRHNLXQJXYZLLYSWQGDLBJHDCGJYQYCMHWFMJYBMBYJYJWYMDPWHXQLDYGPDFXXBCGJSPCKRSSYZJMSLBZZJFLJJJLGXZGYXYXLSZQYXBEXYXHGCXBPLDYHWETTWWCJMBTXCHXYQXLLXFLYXLLJLSSFWDPZSMYJCLMWYTCZPCHQEKCQBWLCQYDPLQPPQZQFJQDJHYMMCXTXDRMJWRHXCJZYLQXDYYNHYYHRSLSRSYWWZJYMTLTLLGTQCJZYABTCKZCJYCCQLJZQXALMZYHYWLWDXZXQDLLQSHGPJFJLJHJABCQZDJGTKHSSTCYJLPSWZLXZXRWGLDLZRLZXTGSLLLLZLYXXWGDZYGBDPHZPBRLWSXQBPFDWOFMWHLYPCBJCCLDMBZPBZZLCYQXLDOMZBLZWPDWYYGDSTTHCSQSCCRSSSYSLFYBFNTYJSZDFNDPDHDZZMBBLSLCMYFFGTJJQWFTMTPJWFNLBZCMMJTGBDZLQLPYFHYYMJYLSDCHDZJWJCCTLJCLDTLJJCPDDSQDSSZYBNDBJLGGJZXSXNLYCYBJXQYCBYLZCFZPPGKCXZDZFZTJJFJSJXZBNZYJQTTYJYHTYCZHYMDJXTTMPXSPLZCDWSLSHXYPZGTFMLCJTYCBPMGDKWYCYZCDSZZYHFLYCTYGWHKJYYLSJCXGYWJCBLLCSNDDBTZBSCLYZCZZSSQDLLMQYYHFSLQLLXFTYHABXGWNYWYYPLLSDLDLLBJCYXJZMLHLJDXYYQYTDLLLBUGBFDFBBQJZZMDPJHGCLGMJJPGAEHHBWCQXAXHHHZCHXYPHJAXHLPHJPGPZJQCQZGJJZZUZDMQYYBZZPHYHYBWHAZYJHYKFGDPFQSDLZMLJXKXGALXZDAGLMDGXMWZQYXXDXXPFDMMSSYMPFMDMMKXKSYZYSHDZKXSYSMMZZZMSYDNZZCZXFPLSTMZDNMXCKJMZTYYMZMZZMSXHHDCZJEMXXKLJSTLWLSQLYJZLLZJSSDPPMHNLZJCZYHMXXHGZCJMDHXTKGRMXFWMCGMWKDTKSXQMMMFZZYDKMSCLCMPCGMHSPXQPZDSSLCXKYXTWLWJYAHZJGZQMCSNXYYMMPMLKJXMHLMLQMXCTKZMJQYSZJSYSZHSYJZJCDAJZYBSDQJZGWZQQXFKDMSDJLFWEHKZQKJPEYPZYSZCDWYJFFMZZYLTTDZZEFMZLBNPPLPLPEPSZALLTYLKCKQZKGENQLWAGYXYDPXLHSXQQWQCQXQCLHYXXMLYCCWLYMQYSKGCHLCJNSZKPYZKCQZQLJPDMDZHLASXLBYDWQLWDNBQCRYDDZTJYBKBWSZDXDTNPJDTCTQDFXQQMGNXECLTTBKPWSLCTYQLPWYZZKLPYGZCQQPLLKCCYLPQMZCZQCLJSLQZDJXLDDHPZQDLJJXZQDXYZQKZLJCYQDYJPPYPQYKJYRMPCBYMCXKLLZLLFQPYLLLMBSGLCYSSLRSYSQTMXYXZQZFDZUYSYZTFFMZZSMZQHZSSCCMLYXWTPZGXZJGZGSJSGKDDHTQGGZLLBJDZLCBCHYXYZHZFYWXYZYMSDBZZYJGTSMTFXQYXQSTDGSLNXDLRYZZLRYYLXQHTXSRTZNGZXBNQQZFMYKMZJBZYMKBPNLYZPBLMCNQYZZZSJZHJCTZKHYZZJRDYZHNPXGLFZTLKGJTCTSSYLLGZRZBBQZZKLPKLCZYSSUYXBJFPNJZZXCDWXZYJXZZDJJKGGRSRJKMSMZJLSJYWQSKYHQJSXPJZZZLSNSHRNYPZTWCHKLPSRZLZXYJQXQKYSJYCZTLQZYBBYBWZPQDWWYZCYTJCJXCKCWDKKZXSGKDZXWWYYJQYYTCYTDLLXWKCZKKLCCLZCQQDZLQLCSFQCHQHSFSMQZZLNBJJZBSJHTSZDYSJQJPDLZCDCWJKJZZLPYCGMZWDJJBSJQZSYZYHHXJPBJYDSSXDZNCGLQMBTSFSBPDZDLZNFGFJGFSMPXJQLMBLGQCYYXBQKDJJQYRFKZTJDHCZKLBSDZCFJTPLLJGXHYXZCSSZZXSTJYGKGCKGYOQXJPLZPBPGTGYJZGHZQZZLBJLSQFZGKQQJZGYCZBZQTLDXRJXBSXXPZXHYZYCLWDXJJHXMFDZPFZHQHQMQGKSLYHTYCGFRZGNQXCLPDLBZCSCZQLLJBLHBZCYPZZPPDYMZZSGYHCKCPZJGSLJLNSCDSLDLXBMSTLDDFJMKDJDHZLZXLSZQPQPGJLLYBDSZGQLBZLSLKYYHZTTNTJYQTZZPSZQZTLLJTYYLLQLLQYZQLBDZLSLYYZYMDFSZSNHLXZNCZQZPBWSKRFBSYZMTHBLGJPMCZZLSTLXSHTCSYZLZBLFEQHLXFLCJLYLJQCBZLZJHHSSTBRMHXZHJZCLXFNBGXGTQJCZTMSFZKJMSSNXLJKBHSJXNTNLZDNTLMSJXGZJYJCZXYJYJWRWWQNZTNFJSZPZSHZJFYRDJSFSZJZBJFZQZZHZLXFYSBZQLZSGYFTZDCSZXZJBQMSZKJRHYJZCKMJKHCHGTXKXQGLXPXFXTRTYLXJXHDTSJXHJZJXZWZLCQSBTXWXGXTXXHXFTSDKFJHZYJFJXRZSDLLLTQSQQZQWZXSYQTWGWBZCGZLLYZBCLMQQTZHZXZXLJFRMYZFLXYSQXXJKXRMQDZDMMYYBSQBHGZMWFWXGMXLZPYYTGZYCCDXYZXYWGSYJYZNBHPZJSQSYXSXRTFYZGRHZTXSZZTHCBFCLSYXZLZQMZLMPLMXZJXSFLBYZMYQHXJSXRXSQZZZSSLYFRCZJRCRXHHZXQYDYHXSJJHZCXZBTYNSYSXJBQLPXZQPYMLXZKYXLXCJLCYSXXZZLXDLLLJJYHZXGYJWKJRWYHCPSGNRZLFZWFZZNSXGXFLZSXZZZBFCSYJDBRJKRDHHGXJLJJTGXJXXSTJTJXLYXQFCSGSWMSBCTLQZZWLZZKXJMLTMJYHSDDBXGZHDLBMYJFRZFSGCLYJBPMLYSMSXLSZJQQHJZFXGFQFQBPXZGYYQXGZTCQWYLTLGWSGWHRLFSFGZJMGMGBGTJFSYZZGZYZAFLSSPMLPFLCWBJZCLJJMZLPJJLYMQDMYYYFBGYGYZMLYZDXQYXRQQQHSYYYQXYLJTYXFSFSLLGNQCYHYCWFHCCCFXPYLYPLLZYXXXXXKQHHXSHJZCFZSCZJXCPZWHHHHHAPYLQALPQAFYHXDYLUKMZQGGGDDESRNNZLTZGCHYPPYSQJJHCLLJTOLNJPZLJLHYMHEYDYDSQYCDDHGZUNDZCLZYZLLZNTNYZGSLHSLPJJBDGWXPCDUTJCKLKCLWKLLCASSTKZZDNQNTTLYYZSSYSSZZRYLJQKCQDHHCRXRZYDGRGCWCGZQFFFPPJFZYNAKRGYWYQPQXXFKJTSZZXSWZDDFBBXTBGTZKZNPZZPZXZPJSZBMQHKCYXYLDKLJNYPKYGHGDZJXXEAHPNZKZTZCMXCXMMJXNKSZQNMNLWBWWXJKYHCPSTMCSQTZJYXTPCTPDTNNPGLLLZSJLSPBLPLQHDTNJNLYYRSZFFJFQWDPHZDWMRZCCLODAXNSSNYZRESTYJWJYJDBCFXNMWTTBYLWSTSZGYBLJPXGLBOCLHPCBJLTMXZLJYLZXCLTPNCLCKXTPZJSWCYXSFYSZDKNTLBYJCYJLLSTGQCBXRYZXBXKLYLHZLQZLNZCXWJZLJZJNCJHXMNZZGJZZXTZJXYCYYCXXJYYXJJXSSSJSTSSTTPPGQTCSXWZDCSYFPTFBFHFBBLZJCLZZDBXGCXLQPXKFZFLSYLTUWBMQJHSZBMDDBCYSCCLDXYCDDQLYJJWMQLLCSGLJJSYFPYYCCYLTJANTJJPWYCMMGQYYSXDXQMZHSZXPFTWWZQSWQRFKJLZJQQYFBRXJHHFWJJZYQAZMYFRHCYYBYQWLPEXCCZSTYRLTTDMQLYKMBBGMYYJPRKZNPBSXYXBHYZDJDNGHPMFSGMWFZMFQMMBCMZZCJJLCNUXYQLMLRYGQZCYXZLWJGCJCGGMCJNFYZZJHYCPRRCMTZQZXHFQGTJXCCJEAQCRJYHPLQLSZDJRBCQHQDYRHYLYXJSYMHZYDWLDFRYHBPYDTSSCNWBXGLPZMLZZTQSSCPJMXXYCSJYTYCGHYCJWYRXXLFEMWJNMKLLSWTXHYYYNCMMCWJDQDJZGLLJWJRKHPZGGFLCCSCZMCBLTBHBQJXQDSPDJZZGKGLFQYWBZYZJLTSTDHQHCTCBCHFLQMPWDSHYYTQWCNZZJTLBYMBPDYYYXSQKXWYYFLXXNCWCXYPMAELYKKJMZZZBRXYYQJFLJPFHHHYTZZXSGQQMHSPGDZQWBWPJHZJDYSCQWZKTXXSQLZYYMYSDZGRXCKKUJLWPYSYSCSYZLRMLQSYLJXBCXTLWDQZPCYCYKPPPNSXFYZJJRCEMHSZMSXLXGLRWGCSTLRSXBZGBZGZTCPLUJLSLYLYMTXMTZPALZXPXJTJWTCYYZLBLXBZLQMYLXPGHDSLSSDMXMBDZZSXWHAMLCZCPJMCNHJYSNSYGCHSKQMZZQDLLKABLWJXSFMOCDXJRRLYQZKJMYBYQLYHETFJZFRFKSRYXFJTWDSXXSYSQJYSLYXWJHSNLXYYXHBHAWHHJZXWMYLJCSSLKYDZTXBZSYFDXGXZJKHSXXYBSSXDPYNZWRPTQZCZENYGCXQFJYKJBZMLJCMQQXUOXSLYXXLYLLJDZBTYMHPFSTTQQWLHOKYBLZZALZXQLHZWRRQHLSTMYPYXJJXMQSJFNBXYXYJXXYQYLTHYLQYFMLKLJTMLLHSZWKZHLJMLHLJKLJSTLQXYLMBHHLNLZXQJHXCFXXLHYHJJGBYZZKBXSCQDJQDSUJZYYHZHHMGSXCSYMXFEBCQWWRBPYYJQTYZCYQYQQZYHMWFFHGZFRJFCDPXNTQYZPDYKHJLFRZXPPXZDBBGZQSTLGDGYLCQMLCHHMFYWLZYXKJLYPQHSYWMQQGQZMLZJNSQXJQSYJYCBEHSXFSZPXZWFLLBCYYJDYTDTHWZSFJMQQYJLMQXXLLDTTKHHYBFPWTYYSQQWNQWLGWDEBZWCMYGCULKJXTMXMYJSXHYBRWFYMWFRXYQMXYSZTZZTFYKMLDHQDXWYYNLCRYJBLPSXCXYWLSPRRJWXHQYPHTYDNXHHMMYWYTZCSQMTSSCCDALWZTCPQPYJLLQZYJSWXMZZMMYLMXCLMXCZMXMZSQTZPPQQBLPGXQZHFLJJHYTJSRXWZXSCCDLXTYJDCQJXSLQYCLZXLZZXMXQRJMHRHZJBHMFLJLMLCLQNLDXZLLLPYPSYJYSXCQQDCMQJZZXHNPNXZMEKMXHYKYQLXSXTXJYYHWDCWDZHQYYBGYBCYSCFGPSJNZDYZZJZXRZRQJJYMCANYRJTLDPPYZBSTJKXXZYPFDWFGZZRPYMTNGXZQBYXNBUFNQKRJQZMJEGRZGYCLKXZDSKKNSXKCLJSPJYYZLQQJYBZSSQLLLKJXTBKTYLCCDDBLSPPFYLGYDTZJYQGGKQTTFZXBDKTYYHYBBFYTYYBCLPDYTGDHRYRNJSPTCSNYJQHKLLLZSLYDXXWBCJQSPXBPJZJCJDZFFXXBRMLAZHCSNDLBJDSZBLPRZTSWSBXBCLLXXLZDJZSJPYLYXXYFTFFFBHJJXGBYXJPMMMPSSJZJMTLYZJXSWXTYLEDQPJMYGQZJGDJLQJWJQLLSJGJGYGMSCLJJXDTYGJQJQJCJZCJGDZZSXQGSJGGCXHQXSNQLZZBXHSGZXCXYLJXYXYYDFQQJHJFXDHCTXJYRXYSQTJXYEFYYSSYYJXNCYZXFXMSYSZXYYSCHSHXZZZGZZZGFJDLTYLNPZGYJYZYYQZPBXQBDZTZCZYXXYHHSQXSHDHGQHJHGYWSZTMZMLHYXGEBTYLZKQWYTJZRCLEKYSTDBCYKQQSAYXCJXWWGSBHJYZYDHCSJKQCXSWXFLTYNYZPZCCZJQTZWJQDZZZQZLJJXLSBHPYXXPSXSHHEZTXFPTLQYZZXHYTXNCFZYYHXGNXMYWXTZSJPTHHGYMXMXQZXTSBCZYJYXXTYYZYPCQLMMSZMJZZLLZXGXZAAJZYXJMZXWDXZSXZDZXLEYJJZQBHZWZZZQTZPSXZTDSXJJJZNYAZPHXYYSRNQDTHZHYYKYJHDZXZLSWCLYBZYECWCYCRYLCXNHZYDZYDYJDFRJJHTRSQTXYXJRJHOJYNXELXSFSFJZGHPZSXZSZDZCQZBYYKLSGSJHCZSHDGQGXYZGXCHXZJWYQWGYHKSSEQZZNDZFKWYSSTCLZSTSYMCDHJXXYWEYXCZAYDMPXMDSXYBSQMJMZJMTZQLPJYQZCGQHXJHHLXXHLHDLDJQCLDWBSXFZZYYSCHTYTYYBHECXHYKGJPXHHYZJFXHWHBDZFYZBCAPNPGNYDMSXHMMMMAMYNBYJTMPXYYMCTHJBZYFCGTYHWPHFTWZZEZSBZEGPFMTSKFTYCMHFLLHGPZJXZJGZJYXZSBBQSCZZLZCCSTPGXMJSFTCCZJZDJXCYBZLFCJSYZFGSZLYBCWZZBYZDZYPSWYJZXZBDSYUXLZZBZFYGCZXBZHZFTPBGZGEJBSTGKDMFHYZZJHZLLZZGJQZLSFDJSSCBZGPDLFZFZSZYZYZSYGCXSNXXCHCZXTZZLJFZGQSQYXZJQDCCZTQCDXZJYQJQCHXZTDLGSCXZSYQJQTZWLQDQZTQCHQQJZYEZZZPBWKDJFCJPZTYPQYQTTYNLMBDKTJZPQZQZZFPZSBNJLGYJDXJDZZKZGQKXDLPZJTCJDQBXDJQJSTCKNXBXZMSLYJCQMTJQWWCJQNJNLLLHJCWQTBZQYDZCZPZZDZYDDCYZZZCCJTTJFZDPRRTZTJDCQTQZDTJNPLZBCLLCTZSXKJZQZPZLBZRBTJDCXFCZDBCCJJLTQQPLDCGZDBBZJCQDCJWYNLLZYZCCDWLLXWZLXRXNTQQCZXKQLSGDFQTDDGLRLAJJTKUYMKQLLTZYTDYYCZGJWYXDXFRSKSTQTENQMRKQZHHQKDLDAZFKYPBGGPZREBZZYKZZSPEGJXGYKQZZZSLYSYYYZWFQZYLZZLZHWCHKYPQGNPGBLPLRRJYXCCSYYHSFZFYBZYYTGZXYLXCZWXXZJZBLFFLGSKHYJZEYJHLPLLLLCZGXDRZELRHGKLZZYHZLYQSZZJZQLJZFLNBHGWLCZCFJYSPYXZLZLXGCCPZBLLCYBBBBUBBCBPCRNNZCZYRBFSRLDCGQYYQXYGMQZWTZYTYJXYFWTEHZZJYWLCCNTZYJJZDEDPZDZTSYQJHDYMBJNYJZLXTSSTPHNDJXXBYXQTZQDDTJTDYYTGWSCSZQFLSHLGLBCZPHDLYZJYCKWTYTYLBNYTSDSYCCTYSZYYEBHEXHQDTWNYGYCLXTSZYSTQMYGZAZCCSZZDSLZCLZRQXYYELJSBYMXSXZTEMBBLLYYLLYTDQYSHYMRQWKFKBFXNXSBYCHXBWJYHTQBPBSBWDZYLKGZSKYHXQZJXHXJXGNLJKZLYYCDXLFYFGHLJGJYBXQLYBXQPQGZTZPLNCYPXDJYQYDYMRBESJYYHKXXSTMXRCZZYWXYQYBMCLLYZHQYZWQXDBXBZWZMSLPDMYSKFMZKLZCYQYCZLQXFZZYDQZPZYGYJYZMZXDZFYFYTTQTZHGSPCZMLCCYTZXJCYTJMKSLPZHYSNZLLYTPZCTZZCKTXDHXXTQCYFKSMQCCYYAZHTJPCYLZLYJBJXTPNYLJYYNRXSYLMMNXJSMYBCSYSYLZYLXJJQYLDZLPQBFZZBLFNDXQKCZFYWHGQMRDSXYCYTXNQQJZYYPFZXDYZFPRXEJDGYQBXRCNFYYQPGHYJDYZXGRHTKYLNWDZNTSMPKLBTHBPYSZBZTJZSZZJTYYXZPHSSZZBZCZPTQFZMYFLYPYBBJQXZMXXDJMTSYSKKBJZXHJCKLPSMKYJZCXTMLJYXRZZQSLXXQPYZXMKYXXXJCLJPRMYYGADYSKQLSNDHYZKQXZYZTCGHZTLMLWZYBWSYCTBHJHJFCWZTXWYTKZLXQSHLYJZJXTMPLPYCGLTBZZTLZJCYJGDTCLKLPLLQPJMZPAPXYZLKKTKDZCZZBNZDYDYQZJYJGMCTXLTGXSZLMLHBGLKFWNWZHDXUHLFMKYSLGXDTWWFRJEJZTZHYDXYKSHWFZCQSHKTMQQHTZHYMJDJSKHXZJZBZZXYMPAGQMSTPXLSKLZYNWRTSQLSZBPSPSGZWYHTLKSSSWHZZLYYTNXJGMJSZSUFWNLSOZTXGXLSAMMLBWLDSZYLAKQCQCTMYCFJBSLXCLZZCLXXKSBZQCLHJPSQPLSXXCKSLNHPSFQQYTXYJZLQLDXZQJZDYYDJNZPTUZDSKJFSLJHYLZSQZLBTXYDGTQFDBYAZXDZHZJNHHQBYKNXJJQCZMLLJZKSPLDYCLBBLXKLELXJLBQYCXJXGCNLCQPLZLZYJTZLJGYZDZPLTQCSXFDMNYCXGBTJDCZNBGBQYQJWGKFHTNPYQZQGBKPBBYZMTJDYTBLSQMPSXTBNPDXKLEMYYCJYNZCTLDYKZZXDDXHQSHDGMZSJYCCTAYRZLPYLTLKXSLZCGGEXCLFXLKJRTLQJAQZNCMBYDKKCXGLCZJZXJHPTDJJMZQYKQSECQZDSHHADMLZFMMZBGNTJNNLGBYJBRBTMLBYJDZXLCJLPLDLPCQDHLXZLYCBLCXZZJADJLNZMMSSSMYBHBSQKBHRSXXJMXSDZNZPXLGBRHWGGFCXGMSKLLTSJYYCQLTSKYWYYHYWXBXQYWPYWYKQLSQPTNTKHQCWDQKTWPXXHCPTHTWUMSSYHBWCRWXHJMKMZNGWTMLKFGHKJYLSYYCXWHYECLQHKQHTTQKHFZLDXQWYZYYDESBPKYRZPJFYYZJCEQDZZDLATZBBFJLLCXDLMJSSXEGYGSJQXCWBXSSZPDYZCXDNYXPPZYDLYJCZPLTXLSXYZYRXCYYYDYLWWNZSAHJSYQYHGYWWAXTJZDAXYSRLTDPSSYYFNEJDXYZHLXLLLZQZSJNYQYQQXYJGHZGZCYJCHZLYCDSHWSHJZYJXCLLNXZJJYYXNFXMWFPYLCYLLABWDDHWDXJMCXZTZPMLQZHSFHZYNZTLLDYWLSLXHYMMYLMBWWKYXYADTXYLLDJPYBPWUXJMWMLLSAFDLLYFLBHHHBQQLTZJCQJLDJTFFKMMMBYTHYGDCQRDDWRQJXNBYSNWZDBYYTBJHPYBYTTJXAAHGQDQTMYSTQXKBTZPKJLZRBEQQSSMJJBDJOTGTBXPGBKTLHQXJJJCTHXQDWJLWRFWQGWSHCKRYSWGFTGYGBXSDWDWRFHWYTJJXXXJYZYSLPYYYPAYXHYDQKXSHXYXGSKQHYWFDDDPPLCJLQQEEWXKSYYKDYPLTJTHKJLTCYYHHJTTPLTZZCDLTHQKZXQYSTEEYWYYZYXXYYSTTJKLLPZMCYHQGXYHSRMBXPLLNQYDQHXSXXWGDQBSHYLLPJJJTHYJKYPPTHYYKTYEZYENMDSHLCRPQFDGFXZPSFTLJXXJBSWYYSKSFLXLPPLBBBLBSFXFYZBSJSSYLPBBFFFFSSCJDSTZSXZRYYSYFFSYZYZBJTBCTSBSDHRTJJBYTCXYJEYLXCBNEBJDSYXYKGSJZBXBYTFZWGENYHHTHZHHXFWGCSTBGXKLSXYWMTMBYXJSTZSCDYQRCYTWXZFHMYMCXLZNSDJTTTXRYCFYJSBSDYERXJLJXBBDEYNJGHXGCKGSCYMBLXJMSZNSKGXFBNBPTHFJAAFXYXFPXMYPQDTZCXZZPXRSYWZDLYBBKTYQPQJPZYPZJZNJPZJLZZFYSBTTSLMPTZRTDXQSJEHBZYLZDHLJSQMLHTXTJECXSLZZSPKTLZKQQYFSYGYWPCPQFHQHYTQXZKRSGTTSQCZLPTXCDYYZXSQZSLXLZMYCPCQBZYXHBSXLZDLTCDXTYLZJYYZPZYZLTXJSJXHLPMYTXCQRBLZSSFJZZTNJYTXMYJHLHPPLCYXQJQQKZZSCPZKSWALQSBLCCZJSXGWWWYGYKTJBBZTDKHXHKGTGPBKQYSLPXPJCKBMLLXDZSTBKLGGQKQLSBKKTFXRMDKBFTPZFRTBBRFERQGXYJPZSSTLBZTPSZQZSJDHLJQLZBPMSMMSXLQQNHKNBLRDDNXXDHDDJCYYGYLXGZLXSYGMQQGKHBPMXYXLYTQWLWGCPBMQXCYZYDRJBHTDJYHQSHTMJSBYPLWHLZFFNYPMHXXHPLTBQPFBJWQDBYGPNZTPFZJGSDDTQSHZEAWZZYLLTYYBWJKXXGHLFKXDJTMSZSQYNZGGSWQSPHTLSSKMCLZXYSZQZXNCJDQGZDLFNYKLJCJLLZLMZZNHYDSSHTHZZLZZBBHQZWWYCRZHLYQQJBEYFXXXWHSRXWQHWPSLMSSKZTTYGYQQWRSLALHMJTQJSMXQBJJZJXZYZKXBYQXBJXSHZTSFJLXMXZXFGHKZSZGGYLCLSARJYHSLLLMZXELGLXYDJYTLFBHBPNLYZFBBHPTGJKWETZHKJJXZXXGLLJLSTGSHJJYQLQZFKCGNNDJSSZFDBCTWWSEQFHQJBSAQTGYPQLBXBMMYWXGSLZHGLZGQYFLZBYFZJFRYSFMBYZHQGFWZSYFYJJPHZBYYZFFWODGRLMFTWLBZGYCQXCDJYGZYYYYTYTYDWEGAZYHXJLZYYHLRMGRXXZCLHNELJJTJTPWJYBJJBXJJTJTEEKHWSLJPLPSFYZPQQBDLQJJTYYQLYZKDKSQJYYQZLDQTGJQYZJSUCMRYQTHTEJMFCTYHYPKMHYZWJDQFHYYXWSHCTXRLJHQXHCCYYYJLTKTTYTMXGTCJTZAYYOCZLYLBSZYWJYTSJYHBYSHFJLYGJXXTMZYYLTXXYPZLXYJZYZYYPNHMYMDYYLBLHLSYYQQLLNJJYMSOYQBZGDLYXYLCQYXTSZEGXHZGLHWBLJHEYXTWQMAKBPQCGYSHHEGQCMWYYWLJYJHYYZLLJJYLHZYHMGSLJLJXCJJYCLYCJPCPZJZJMMYLCQLNQLJQJSXYJMLSZLJQLYCMMHCFMMFPQQMFYLQMCFFQMMMMHMZNFHHJGTTHHKHSLNCHHYQDXTMMQDCYZYXYQMYQYLTDCYYYZAZZCYMZYDLZFFFMMYCQZWZZMABTBYZTDMNZZGGDFTYPCGQYTTSSFFWFDTZQSSYSTWXJHXYTSXXYLBYQHWWKXHZXWZNNZZJZJJQJCCCHYYXBZXZCYZTLLCQXYNJYCYYCYNZZQYYYEWYCZDCJYCCHYJLBTZYYCQWMPWPYMLGKDLDLGKQQBGYCHJXY"
			this.full_dict = {"a":"\u554a\u963f\u9515","ai":"\u57c3\u6328\u54ce\u5509\u54c0\u7691\u764c\u853c\u77ee\u827e\u788d\u7231\u9698\u8bf6\u6371\u55f3\u55cc\u5ad2\u7477\u66a7\u7839\u953f\u972d","an":"\u978d\u6c28\u5b89\u4ffa\u6309\u6697\u5cb8\u80fa\u6848\u8c19\u57ef\u63de\u72b4\u5eb5\u6849\u94f5\u9e4c\u9878\u9eef","ang":"\u80ae\u6602\u76ce","ao":"\u51f9\u6556\u71ac\u7ff1\u8884\u50b2\u5965\u61ca\u6fb3\u5773\u62d7\u55f7\u5662\u5c99\u5ed2\u9068\u5aaa\u9a9c\u8071\u87af\u93ca\u9ccc\u93d6","ba":"\u82ad\u634c\u6252\u53ed\u5427\u7b06\u516b\u75a4\u5df4\u62d4\u8dcb\u9776\u628a\u8019\u575d\u9738\u7f62\u7238\u8307\u83dd\u8406\u636d\u5c9c\u705e\u6777\u94af\u7c91\u9c85\u9b43","bai":"\u767d\u67cf\u767e\u6446\u4f70\u8d25\u62dc\u7a17\u859c\u63b0\u97b4","ban":"\u6591\u73ed\u642c\u6273\u822c\u9881\u677f\u7248\u626e\u62cc\u4f34\u74e3\u534a\u529e\u7eca\u962a\u5742\u8c73\u94a3\u7622\u764d\u8228","bang":"\u90a6\u5e2e\u6886\u699c\u8180\u7ed1\u68d2\u78c5\u868c\u9551\u508d\u8c24\u84a1\u8783","bao":"\u82de\u80de\u5305\u8912\u96f9\u4fdd\u5821\u9971\u5b9d\u62b1\u62a5\u66b4\u8c79\u9c8d\u7206\u52f9\u8446\u5b80\u5b62\u7172\u9e28\u8913\u8db5\u9f85","bo":"\u5265\u8584\u73bb\u83e0\u64ad\u62e8\u94b5\u6ce2\u535a\u52c3\u640f\u94c2\u7b94\u4f2f\u5e1b\u8236\u8116\u818a\u6e24\u6cca\u9a73\u4eb3\u8543\u5575\u997d\u6a97\u64d8\u7934\u94b9\u9e41\u7c38\u8ddb","bei":"\u676f\u7891\u60b2\u5351\u5317\u8f88\u80cc\u8d1d\u94a1\u500d\u72c8\u5907\u60eb\u7119\u88ab\u5b5b\u9642\u90b6\u57e4\u84d3\u5457\u602b\u6096\u789a\u9e4e\u8919\u943e","ben":"\u5954\u82ef\u672c\u7b28\u755a\u574c\u951b","beng":"\u5d29\u7ef7\u752d\u6cf5\u8e66\u8ff8\u552a\u5623\u750f","bi":"\u903c\u9f3b\u6bd4\u9119\u7b14\u5f7c\u78a7\u84d6\u853d\u6bd5\u6bd9\u6bd6\u5e01\u5e87\u75f9\u95ed\u655d\u5f0a\u5fc5\u8f9f\u58c1\u81c2\u907f\u965b\u5315\u4ef3\u4ffe\u8298\u835c\u8378\u5421\u54d4\u72f4\u5eb3\u610e\u6ed7\u6fde\u5f3c\u59a3\u5a62\u5b16\u74a7\u8d32\u7540\u94cb\u79d5\u88e8\u7b5a\u7b85\u7be6\u822d\u895e\u8df8\u9ac0","bian":"\u97ad\u8fb9\u7f16\u8d2c\u6241\u4fbf\u53d8\u535e\u8fa8\u8fa9\u8fab\u904d\u533e\u5f01\u82c4\u5fed\u6c74\u7f0f\u7178\u782d\u78a5\u7a39\u7a86\u8759\u7b3e\u9cca","biao":"\u6807\u5f6a\u8198\u8868\u5a4a\u9aa0\u98d1\u98d9\u98da\u706c\u9556\u9573\u762d\u88f1\u9cd4","bie":"\u9cd6\u618b\u522b\u762a\u8e69\u9cd8","bin":"\u5f6c\u658c\u6fd2\u6ee8\u5bbe\u6448\u50a7\u6d5c\u7f24\u73a2\u6ba1\u8191\u9554\u9acc\u9b13","bing":"\u5175\u51b0\u67c4\u4e19\u79c9\u997c\u70b3\u75c5\u5e76\u7980\u90b4\u6452\u7ee0\u678b\u69df\u71f9","bu":"\u6355\u535c\u54fa\u8865\u57e0\u4e0d\u5e03\u6b65\u7c3f\u90e8\u6016\u62ca\u535f\u900b\u74ff\u6661\u949a\u91ad","ca":"\u64e6\u5693\u7924","cai":"\u731c\u88c1\u6750\u624d\u8d22\u776c\u8e29\u91c7\u5f69\u83dc\u8521","can":"\u9910\u53c2\u8695\u6b8b\u60ed\u60e8\u707f\u9a96\u74a8\u7cb2\u9eea","cang":"\u82cd\u8231\u4ed3\u6ca7\u85cf\u4f27","cao":"\u64cd\u7cd9\u69fd\u66f9\u8349\u8279\u5608\u6f15\u87ac\u825a","ce":"\u5395\u7b56\u4fa7\u518c\u6d4b\u5202\u5e3b\u607b","ceng":"\u5c42\u8e6d\u564c","cha":"\u63d2\u53c9\u832c\u8336\u67e5\u78b4\u643d\u5bdf\u5c94\u5dee\u8be7\u7339\u9987\u6c4a\u59f9\u6748\u6942\u69ce\u6aab\u9497\u9538\u9572\u8869","chai":"\u62c6\u67f4\u8c7a\u4faa\u8308\u7625\u867f\u9f87","chan":"\u6400\u63ba\u8749\u998b\u8c17\u7f20\u94f2\u4ea7\u9610\u98a4\u5181\u8c04\u8c36\u8487\u5edb\u5fcf\u6f7a\u6fb6\u5b71\u7fbc\u5a75\u5b17\u9aa3\u89c7\u7985\u9561\u88e3\u87fe\u8e94","chang":"\u660c\u7316\u573a\u5c1d\u5e38\u957f\u507f\u80a0\u5382\u655e\u7545\u5531\u5021\u4f25\u9b2f\u82cc\u83d6\u5f9c\u6005\u60dd\u960a\u5a3c\u5ae6\u6636\u6c05\u9cb3","chao":"\u8d85\u6284\u949e\u671d\u5632\u6f6e\u5de2\u5435\u7092\u600a\u7ec9\u6641\u8016","che":"\u8f66\u626f\u64a4\u63a3\u5f7b\u6f88\u577c\u5c6e\u7817","chen":"\u90f4\u81e3\u8fb0\u5c18\u6668\u5ff1\u6c89\u9648\u8d81\u886c\u79f0\u8c0c\u62bb\u55d4\u5bb8\u741b\u6987\u809c\u80c2\u789c\u9f80","cheng":"\u6491\u57ce\u6a59\u6210\u5448\u4e58\u7a0b\u60e9\u6f84\u8bda\u627f\u901e\u9a8b\u79e4\u57d5\u5d4a\u5fb5\u6d48\u67a8\u67fd\u6a18\u665f\u584d\u77a0\u94d6\u88ce\u86cf\u9172","chi":"\u5403\u75f4\u6301\u5319\u6c60\u8fdf\u5f1b\u9a70\u803b\u9f7f\u4f88\u5c3a\u8d64\u7fc5\u65a5\u70bd\u50ba\u5880\u82aa\u830c\u640b\u53f1\u54e7\u557b\u55e4\u5f73\u996c\u6cb2\u5ab8\u6555\u80dd\u7719\u7735\u9e31\u761b\u892b\u86a9\u87ad\u7b1e\u7bea\u8c49\u8e05\u8e1f\u9b51","chong":"\u5145\u51b2\u866b\u5d07\u5ba0\u833a\u5fe1\u61a7\u94f3\u825f","chou":"\u62bd\u916c\u7574\u8e0c\u7a20\u6101\u7b79\u4ec7\u7ef8\u7785\u4e11\u4fe6\u5733\u5e31\u60c6\u6eb4\u59af\u7633\u96e0\u9c8b","chu":"\u81ed\u521d\u51fa\u6a71\u53a8\u8e87\u9504\u96cf\u6ec1\u9664\u695a\u7840\u50a8\u77d7\u6410\u89e6\u5904\u4e8d\u520d\u61b7\u7ecc\u6775\u696e\u6a17\u870d\u8e70\u9edc","chuan":"\u63e3\u5ddd\u7a7f\u693d\u4f20\u8239\u5598\u4e32\u63be\u821b\u60f4\u9044\u5ddb\u6c1a\u948f\u9569\u8221","chuang":"\u75ae\u7a97\u5e62\u5e8a\u95ef\u521b\u6006","chui":"\u5439\u708a\u6376\u9524\u5782\u9672\u68f0\u69cc","chun":"\u6625\u693f\u9187\u5507\u6df3\u7eaf\u8822\u4fc3\u83bc\u6c8c\u80ab\u6710\u9e51\u877d","chuo":"\u6233\u7ef0\u851f\u8fb6\u8f8d\u955e\u8e14\u9f8a","ci":"\u75b5\u8328\u78c1\u96cc\u8f9e\u6148\u74f7\u8bcd\u6b64\u523a\u8d50\u6b21\u8360\u5472\u5d6f\u9e5a\u8785\u7ccd\u8d91","cong":"\u806a\u8471\u56f1\u5306\u4ece\u4e1b\u506c\u82c1\u6dd9\u9aa2\u742e\u7481\u679e","cu":"\u51d1\u7c97\u918b\u7c07\u731d\u6b82\u8e59","cuan":"\u8e7f\u7be1\u7a9c\u6c46\u64ba\u6615\u7228","cui":"\u6467\u5d14\u50ac\u8106\u7601\u7cb9\u6dec\u7fe0\u8403\u60b4\u7480\u69b1\u96b9","cun":"\u6751\u5b58\u5bf8\u78cb\u5fd6\u76b4","cuo":"\u64ae\u6413\u63aa\u632b\u9519\u539d\u811e\u9509\u77ec\u75e4\u9e7e\u8e49\u8e9c","da":"\u642d\u8fbe\u7b54\u7629\u6253\u5927\u8037\u54d2\u55d2\u601b\u59b2\u75b8\u8921\u7b2a\u977c\u9791","dai":"\u5446\u6b79\u50a3\u6234\u5e26\u6b86\u4ee3\u8d37\u888b\u5f85\u902e\u6020\u57ed\u7519\u5454\u5cb1\u8fe8\u902f\u9a80\u7ed0\u73b3\u9edb","dan":"\u803d\u62c5\u4e39\u5355\u90f8\u63b8\u80c6\u65e6\u6c2e\u4f46\u60ee\u6de1\u8bde\u5f39\u86cb\u4ebb\u510b\u5369\u840f\u5556\u6fb9\u6a90\u6b9a\u8d55\u7708\u7605\u8043\u7baa","dang":"\u5f53\u6321\u515a\u8361\u6863\u8c20\u51fc\u83ea\u5b95\u7800\u94db\u88c6","dao":"\u5200\u6363\u8e48\u5012\u5c9b\u7977\u5bfc\u5230\u7a3b\u60bc\u9053\u76d7\u53e8\u5541\u5fc9\u6d2e\u6c18\u7118\u5fd1\u7e9b","de":"\u5fb7\u5f97\u7684\u951d","deng":"\u8e6c\u706f\u767b\u7b49\u77aa\u51f3\u9093\u5654\u5d9d\u6225\u78f4\u956b\u7c26","di":"\u5824\u4f4e\u6ef4\u8fea\u654c\u7b1b\u72c4\u6da4\u7fdf\u5ae1\u62b5\u5e95\u5730\u8482\u7b2c\u5e1d\u5f1f\u9012\u7f14\u6c10\u7c74\u8bcb\u8c1b\u90b8\u577b\u839c\u837b\u5600\u5a23\u67e2\u68e3\u89cc\u7825\u78b2\u7747\u955d\u7f9d\u9ab6","dian":"\u98a0\u6382\u6ec7\u7898\u70b9\u5178\u975b\u57ab\u7535\u4f43\u7538\u5e97\u60e6\u5960\u6dc0\u6bbf\u4e36\u963d\u576b\u57dd\u5dc5\u73b7\u765c\u766b\u7c1f\u8e2e","diao":"\u7889\u53fc\u96d5\u51cb\u5201\u6389\u540a\u9493\u8c03\u8f7a\u94de\u8729\u7c9c\u8c82","die":"\u8dcc\u7239\u789f\u8776\u8fed\u8c0d\u53e0\u4f5a\u57a4\u581e\u63f2\u558b\u6e2b\u8f76\u7252\u74de\u8936\u800b\u8e40\u9cbd\u9cce","ding":"\u4e01\u76ef\u53ee\u9489\u9876\u9f0e\u952d\u5b9a\u8ba2\u4e22\u4ec3\u5576\u738e\u815a\u7887\u753a\u94e4\u7594\u8035\u914a","dong":"\u4e1c\u51ac\u8463\u61c2\u52a8\u680b\u4f97\u606b\u51bb\u6d1e\u578c\u549a\u5cbd\u5cd2\u5902\u6c21\u80e8\u80f4\u7850\u9e2b","dou":"\u515c\u6296\u6597\u9661\u8c46\u9017\u75d8\u8538\u94ad\u7aa6\u7aac\u86aa\u7bfc\u9161","du":"\u90fd\u7763\u6bd2\u728a\u72ec\u8bfb\u5835\u7779\u8d4c\u675c\u9540\u809a\u5ea6\u6e21\u5992\u828f\u561f\u6e0e\u691f\u6a50\u724d\u8839\u7b03\u9ad1\u9ee9","duan":"\u7aef\u77ed\u953b\u6bb5\u65ad\u7f0e\u5f56\u6934\u7145\u7c16","dui":"\u5806\u5151\u961f\u5bf9\u603c\u619d\u7893","dun":"\u58a9\u5428\u8e72\u6566\u987f\u56e4\u949d\u76fe\u9041\u7096\u7818\u7905\u76f9\u9566\u8db8","duo":"\u6387\u54c6\u591a\u593a\u579b\u8eb2\u6735\u8dfa\u8235\u5241\u60f0\u5815\u5484\u54da\u7f0d\u67c1\u94ce\u88f0\u8e31","e":"\u86fe\u5ce8\u9e45\u4fc4\u989d\u8bb9\u5a25\u6076\u5384\u627c\u904f\u9102\u997f\u5669\u8c14\u57a9\u57ad\u82ca\u83aa\u843c\u5443\u6115\u5c59\u5a40\u8f6d\u66f7\u816d\u786a\u9507\u9537\u9e57\u989a\u9cc4","en":"\u6069\u84bd\u6441\u5514\u55ef","er":"\u800c\u513f\u8033\u5c14\u9975\u6d31\u4e8c\u8d30\u8fe9\u73e5\u94d2\u9e38\u9c95","fa":"\u53d1\u7f5a\u7b4f\u4f10\u4e4f\u9600\u6cd5\u73d0\u57a1\u781d","fan":"\u85e9\u5e06\u756a\u7ffb\u6a0a\u77fe\u9492\u7e41\u51e1\u70e6\u53cd\u8fd4\u8303\u8d29\u72af\u996d\u6cdb\u8629\u5e61\u72ad\u68b5\u6535\u71d4\u7548\u8e6f","fang":"\u574a\u82b3\u65b9\u80aa\u623f\u9632\u59a8\u4eff\u8bbf\u7eba\u653e\u531a\u90a1\u5f77\u94ab\u822b\u9c82","fei":"\u83f2\u975e\u5561\u98de\u80a5\u532a\u8bfd\u5420\u80ba\u5e9f\u6cb8\u8d39\u82be\u72d2\u60b1\u6ddd\u5983\u7ecb\u7eef\u69a7\u8153\u6590\u6249\u7953\u7829\u9544\u75f1\u871a\u7bda\u7fe1\u970f\u9cb1","fen":"\u82ac\u915a\u5429\u6c1b\u5206\u7eb7\u575f\u711a\u6c7e\u7c89\u594b\u4efd\u5fff\u6124\u7caa\u507e\u7035\u68fc\u610d\u9cbc\u9f22","feng":"\u4e30\u5c01\u67ab\u8702\u5cf0\u950b\u98ce\u75af\u70fd\u9022\u51af\u7f1d\u8bbd\u5949\u51e4\u4ff8\u9146\u8451\u6ca3\u781c","fu":"\u4f5b\u5426\u592b\u6577\u80a4\u5b75\u6276\u62c2\u8f90\u5e45\u6c1f\u7b26\u4f0f\u4fd8\u670d\u6d6e\u6daa\u798f\u88b1\u5f17\u752b\u629a\u8f85\u4fef\u91dc\u65a7\u812f\u8151\u5e9c\u8150\u8d74\u526f\u8986\u8d4b\u590d\u5085\u4ed8\u961c\u7236\u8179\u8d1f\u5bcc\u8ba3\u9644\u5987\u7f1a\u5490\u5310\u51eb\u90db\u8299\u82fb\u832f\u83a9\u83d4\u544b\u5e5e\u6ecf\u8274\u5b5a\u9a78\u7ec2\u6874\u8d59\u9efb\u9efc\u7f58\u7a03\u99a5\u864d\u86a8\u8709\u8760\u876e\u9eb8\u8dba\u8dd7\u9cc6","ga":"\u5676\u560e\u86e4\u5c2c\u5477\u5c15\u5c1c\u65ee\u9486","gai":"\u8be5\u6539\u6982\u9499\u76d6\u6e89\u4e10\u9654\u5793\u6224\u8d45\u80f2","gan":"\u5e72\u7518\u6746\u67d1\u7aff\u809d\u8d76\u611f\u79c6\u6562\u8d63\u5769\u82f7\u5c34\u64c0\u6cd4\u6de6\u6f89\u7ec0\u6a44\u65f0\u77f8\u75b3\u9150","gang":"\u5188\u521a\u94a2\u7f38\u809b\u7eb2\u5c97\u6e2f\u6206\u7f61\u9883\u7b7b","gong":"\u6760\u5de5\u653b\u529f\u606d\u9f9a\u4f9b\u8eac\u516c\u5bab\u5f13\u5de9\u6c5e\u62f1\u8d21\u5171\u857b\u5efe\u54a3\u73d9\u80b1\u86a3\u86e9\u89e5","gao":"\u7bd9\u768b\u9ad8\u818f\u7f94\u7cd5\u641e\u9550\u7a3f\u544a\u777e\u8bf0\u90dc\u84bf\u85c1\u7f1f\u69d4\u69c1\u6772\u9506","ge":"\u54e5\u6b4c\u6401\u6208\u9e3d\u80f3\u7599\u5272\u9769\u845b\u683c\u9601\u9694\u94ec\u4e2a\u5404\u9b32\u4ee1\u54ff\u5865\u55dd\u7ea5\u643f\u8188\u784c\u94ea\u9549\u88bc\u988c\u867c\u8238\u9abc\u9ac2","gei":"\u7ed9","gen":"\u6839\u8ddf\u4e98\u831b\u54cf\u826e","geng":"\u8015\u66f4\u5e9a\u7fb9\u57c2\u803f\u6897\u54fd\u8d53\u9ca0","gou":"\u94a9\u52fe\u6c9f\u82df\u72d7\u57a2\u6784\u8d2d\u591f\u4f5d\u8bdf\u5ca3\u9058\u5abe\u7f11\u89cf\u5f40\u9e32\u7b31\u7bdd\u97b2","gu":"\u8f9c\u83c7\u5495\u7b8d\u4f30\u6cbd\u5b64\u59d1\u9f13\u53e4\u86ca\u9aa8\u8c37\u80a1\u6545\u987e\u56fa\u96c7\u560f\u8bc2\u83f0\u54cc\u5d2e\u6c69\u688f\u8f71\u726f\u727f\u80cd\u81cc\u6bc2\u77bd\u7f5f\u94b4\u9522\u74e0\u9e2a\u9e44\u75fc\u86c4\u9164\u89da\u9cb4\u9ab0\u9e58","gua":"\u522e\u74dc\u5250\u5be1\u6302\u8902\u5366\u8bd6\u5471\u681d\u9e39","guai":"\u4e56\u62d0\u602a\u54d9","guan":"\u68fa\u5173\u5b98\u51a0\u89c2\u7ba1\u9986\u7f50\u60ef\u704c\u8d2f\u500c\u839e\u63bc\u6dab\u76e5\u9e73\u9ccf","guang":"\u5149\u5e7f\u901b\u72b7\u6844\u80f1\u7592","gui":"\u7470\u89c4\u572d\u7845\u5f52\u9f9f\u95fa\u8f68\u9b3c\u8be1\u7678\u6842\u67dc\u8dea\u8d35\u523d\u5326\u523f\u5e8b\u5b84\u59ab\u6867\u7085\u6677\u7688\u7c0b\u9c91\u9cdc","gun":"\u8f8a\u6eda\u68cd\u4e28\u886e\u7ef2\u78d9\u9ca7","guo":"\u9505\u90ed\u56fd\u679c\u88f9\u8fc7\u9998\u8803\u57da\u63b4\u5459\u56d7\u5e3c\u5d1e\u7313\u6901\u8662\u951e\u8052\u872e\u873e\u8748","ha":"\u54c8","hai":"\u9ab8\u5b69\u6d77\u6c26\u4ea5\u5bb3\u9a87\u54b4\u55e8\u988f\u91a2","han":"\u9163\u61a8\u90af\u97e9\u542b\u6db5\u5bd2\u51fd\u558a\u7f55\u7ff0\u64bc\u634d\u65f1\u61be\u608d\u710a\u6c57\u6c49\u9097\u83e1\u6496\u961a\u701a\u6657\u7113\u9894\u86b6\u9f3e","hen":"\u592f\u75d5\u5f88\u72e0\u6068","hang":"\u676d\u822a\u6c86\u7ed7\u73e9\u6841","hao":"\u58d5\u568e\u8c6a\u6beb\u90dd\u597d\u8017\u53f7\u6d69\u8585\u55e5\u5686\u6fe0\u704f\u660a\u7693\u98a2\u869d","he":"\u5475\u559d\u8377\u83cf\u6838\u79be\u548c\u4f55\u5408\u76d2\u8c89\u9602\u6cb3\u6db8\u8d6b\u8910\u9e64\u8d3a\u8bc3\u52be\u58d1\u85ff\u55d1\u55ec\u9616\u76cd\u86b5\u7fee","hei":"\u563f\u9ed1","heng":"\u54fc\u4ea8\u6a2a\u8861\u6052\u8a07\u8605","hong":"\u8f70\u54c4\u70d8\u8679\u9e3f\u6d2a\u5b8f\u5f18\u7ea2\u9ec9\u8ba7\u836d\u85a8\u95f3\u6cd3","hou":"\u5589\u4faf\u7334\u543c\u539a\u5019\u540e\u5820\u5f8c\u9005\u760a\u7bcc\u7cc7\u9c8e\u9aba","hu":"\u547c\u4e4e\u5ffd\u745a\u58f6\u846b\u80e1\u8774\u72d0\u7cca\u6e56\u5f27\u864e\u552c\u62a4\u4e92\u6caa\u6237\u51b1\u553f\u56eb\u5cb5\u7322\u6019\u60da\u6d52\u6ef9\u7425\u69f2\u8f77\u89f3\u70c0\u7173\u623d\u6248\u795c\u9e55\u9e71\u7b0f\u9190\u659b","hua":"\u82b1\u54d7\u534e\u733e\u6ed1\u753b\u5212\u5316\u8bdd\u5290\u6d4d\u9a85\u6866\u94e7\u7a1e","huai":"\u69d0\u5f8a\u6000\u6dee\u574f\u8fd8\u8e1d","huan":"\u6b22\u73af\u6853\u7f13\u6362\u60a3\u5524\u75ea\u8c62\u7115\u6da3\u5ba6\u5e7b\u90c7\u5942\u57b8\u64d0\u571c\u6d39\u6d63\u6f36\u5bf0\u902d\u7f33\u953e\u9ca9\u9b1f","huang":"\u8352\u614c\u9ec4\u78fa\u8757\u7c27\u7687\u51f0\u60f6\u714c\u6643\u5e4c\u604d\u8c0e\u968d\u5fa8\u6e5f\u6f62\u9051\u749c\u8093\u7640\u87e5\u7bc1\u9cc7","hui":"\u7070\u6325\u8f89\u5fbd\u6062\u86d4\u56de\u6bc1\u6094\u6167\u5349\u60e0\u6666\u8d3f\u79fd\u4f1a\u70e9\u6c47\u8bb3\u8bf2\u7ed8\u8bd9\u8334\u835f\u8559\u54d5\u5599\u96b3\u6d04\u5f57\u7f0b\u73f2\u6656\u605a\u867a\u87ea\u9ebe","hun":"\u8364\u660f\u5a5a\u9b42\u6d51\u6df7\u8be8\u9984\u960d\u6eb7\u7f17","huo":"\u8c41\u6d3b\u4f19\u706b\u83b7\u6216\u60d1\u970d\u8d27\u7978\u6509\u56af\u5925\u94ac\u952a\u956c\u8020\u8816","ji":"\u51fb\u573e\u57fa\u673a\u7578\u7a3d\u79ef\u7b95\u808c\u9965\u8ff9\u6fc0\u8ba5\u9e21\u59ec\u7ee9\u7f09\u5409\u6781\u68d8\u8f91\u7c4d\u96c6\u53ca\u6025\u75be\u6c72\u5373\u5ac9\u7ea7\u6324\u51e0\u810a\u5df1\u84df\u6280\u5180\u5b63\u4f0e\u796d\u5242\u60b8\u6d4e\u5bc4\u5bc2\u8ba1\u8bb0\u65e2\u5fcc\u9645\u5993\u7ee7\u7eaa\u5c45\u4e0c\u4e69\u525e\u4f76\u4f74\u8114\u58bc\u82a8\u82b0\u8401\u84ba\u857a\u638e\u53fd\u54ad\u54dc\u5527\u5c8c\u5d74\u6d0e\u5f50\u5c50\u9aa5\u757f\u7391\u696b\u6b9b\u621f\u6222\u8d4d\u89ca\u7284\u9f51\u77f6\u7f81\u5d47\u7a37\u7620\u7635\u866e\u7b08\u7b04\u66a8\u8dfb\u8dfd\u9701\u9c9a\u9cab\u9afb\u9e82","jia":"\u5609\u67b7\u5939\u4f73\u5bb6\u52a0\u835a\u988a\u8d3e\u7532\u94be\u5047\u7a3c\u4ef7\u67b6\u9a7e\u5ac1\u4f3d\u90cf\u62ee\u5cac\u6d43\u8fe6\u73c8\u621b\u80db\u605d\u94d7\u9553\u75c2\u86f1\u7b33\u8888\u8dcf","jian":"\u6b7c\u76d1\u575a\u5c16\u7b3a\u95f4\u714e\u517c\u80a9\u8270\u5978\u7f04\u8327\u68c0\u67ec\u78b1\u7877\u62e3\u6361\u7b80\u4fed\u526a\u51cf\u8350\u69db\u9274\u8df5\u8d31\u89c1\u952e\u7bad\u4ef6\u5065\u8230\u5251\u996f\u6e10\u6e85\u6da7\u5efa\u50ed\u8c0f\u8c2b\u83c5\u84b9\u641b\u56dd\u6e54\u8e47\u8b07\u7f23\u67a7\u67d9\u6957\u620b\u622c\u726e\u728d\u6bfd\u8171\u7751\u950f\u9e63\u88e5\u7b15\u7bb4\u7fe6\u8dbc\u8e3a\u9ca3\u97af","jiang":"\u50f5\u59dc\u5c06\u6d46\u6c5f\u7586\u848b\u6868\u5956\u8bb2\u5320\u9171\u964d\u8333\u6d1a\u7edb\u7f30\u729f\u7913\u8029\u7ce8\u8c47","jiao":"\u8549\u6912\u7901\u7126\u80f6\u4ea4\u90ca\u6d47\u9a84\u5a07\u56bc\u6405\u94f0\u77eb\u4fa5\u811a\u72e1\u89d2\u997a\u7f34\u7ede\u527f\u6559\u9175\u8f7f\u8f83\u53eb\u4f7c\u50ec\u832d\u6322\u564d\u5ce4\u5fbc\u59e3\u7e9f\u656b\u768e\u9e6a\u86df\u91ae\u8de4\u9c9b","jie":"\u7a96\u63ed\u63a5\u7686\u79f8\u8857\u9636\u622a\u52ab\u8282\u6854\u6770\u6377\u776b\u7aed\u6d01\u7ed3\u89e3\u59d0\u6212\u85c9\u82a5\u754c\u501f\u4ecb\u75a5\u8beb\u5c4a\u5048\u8ba6\u8bd8\u5588\u55df\u736c\u5a55\u5b51\u6840\u7352\u78a3\u9534\u7596\u88b7\u9889\u86a7\u7faf\u9c92\u9ab1\u9aeb","jin":"\u5dfe\u7b4b\u65a4\u91d1\u4eca\u6d25\u895f\u7d27\u9526\u4ec5\u8c28\u8fdb\u9773\u664b\u7981\u8fd1\u70ec\u6d78\u5c3d\u537a\u8369\u5807\u5664\u9991\u5ed1\u5997\u7f19\u747e\u69ff\u8d46\u89d0\u9485\u9513\u887f\u77dc","jing":"\u52b2\u8346\u5162\u830e\u775b\u6676\u9cb8\u4eac\u60ca\u7cbe\u7cb3\u7ecf\u4e95\u8b66\u666f\u9888\u9759\u5883\u656c\u955c\u5f84\u75c9\u9756\u7adf\u7ade\u51c0\u522d\u5106\u9631\u83c1\u734d\u61ac\u6cfe\u8ff3\u5f2a\u5a67\u80bc\u80eb\u8148\u65cc","jiong":"\u70af\u7a98\u5182\u8fe5\u6243","jiu":"\u63ea\u7a76\u7ea0\u7396\u97ed\u4e45\u7078\u4e5d\u9152\u53a9\u6551\u65e7\u81fc\u8205\u548e\u5c31\u759a\u50e6\u557e\u9604\u67e9\u6855\u9e6b\u8d73\u9b0f","ju":"\u97a0\u62d8\u72d9\u75bd\u9a79\u83ca\u5c40\u5480\u77e9\u4e3e\u6cae\u805a\u62d2\u636e\u5de8\u5177\u8ddd\u8e1e\u952f\u4ff1\u53e5\u60e7\u70ac\u5267\u5028\u8bb5\u82e3\u82f4\u8392\u63ac\u907d\u5c66\u741a\u67b8\u6910\u6998\u6989\u6a58\u728b\u98d3\u949c\u9514\u7aad\u88fe\u8d84\u91b5\u8e3d\u9f83\u96ce\u97ab","juan":"\u6350\u9e43\u5a1f\u5026\u7737\u5377\u7ee2\u9104\u72f7\u6d93\u684a\u8832\u9529\u954c\u96bd","jue":"\u6485\u652b\u6289\u6398\u5014\u7235\u89c9\u51b3\u8bc0\u7edd\u53a5\u5282\u8c32\u77cd\u8568\u5658\u5d1b\u7357\u5b53\u73cf\u6877\u6a5b\u721d\u9562\u8e76\u89d6","jun":"\u5747\u83cc\u94a7\u519b\u541b\u5cfb\u4fca\u7ae3\u6d5a\u90e1\u9a8f\u6343\u72fb\u76b2\u7b60\u9e87","ka":"\u5580\u5496\u5361\u4f67\u5494\u80e9","ke":"\u54af\u5777\u82db\u67ef\u68f5\u78d5\u9897\u79d1\u58f3\u54b3\u53ef\u6e34\u514b\u523b\u5ba2\u8bfe\u5ca2\u606a\u6e98\u9a92\u7f02\u73c2\u8f72\u6c2a\u778c\u94b6\u75b4\u7aa0\u874c\u9ac1","kai":"\u5f00\u63e9\u6977\u51ef\u6168\u5240\u57b2\u8488\u5ffe\u607a\u94e0\u950e","kan":"\u520a\u582a\u52d8\u574e\u780d\u770b\u4f83\u51f5\u83b0\u83b6\u6221\u9f9b\u77b0","kang":"\u5eb7\u6177\u7ce0\u625b\u6297\u4ea2\u7095\u5751\u4f09\u95f6\u94aa","kao":"\u8003\u62f7\u70e4\u9760\u5c3b\u6832\u7292\u94d0","ken":"\u80af\u5543\u57a6\u6073\u57a0\u88c9\u9880","keng":"\u542d\u5fd0\u94ff","kong":"\u7a7a\u6050\u5b54\u63a7\u5025\u5d06\u7b9c","kou":"\u62a0\u53e3\u6263\u5bc7\u82a4\u853b\u53e9\u770d\u7b58","ku":"\u67af\u54ed\u7a9f\u82e6\u9177\u5e93\u88e4\u5233\u5800\u55be\u7ed4\u9ab7","kua":"\u5938\u57ae\u630e\u8de8\u80ef\u4f89","kuai":"\u5757\u7b77\u4fa9\u5feb\u84af\u90d0\u8489\u72ef\u810d","kuan":"\u5bbd\u6b3e\u9acb","kuang":"\u5321\u7b50\u72c2\u6846\u77ff\u7736\u65f7\u51b5\u8bd3\u8bf3\u909d\u5739\u593c\u54d0\u7ea9\u8d36","kui":"\u4e8f\u76d4\u5cbf\u7aa5\u8475\u594e\u9b41\u5080\u9988\u6127\u6e83\u9997\u532e\u5914\u9697\u63c6\u55b9\u559f\u609d\u6126\u9615\u9035\u668c\u777d\u8069\u8770\u7bd1\u81fe\u8dec","kun":"\u5764\u6606\u6346\u56f0\u6083\u9603\u7428\u951f\u918c\u9cb2\u9ae1","kuo":"\u62ec\u6269\u5ed3\u9614\u86de","la":"\u5783\u62c9\u5587\u8721\u814a\u8fa3\u5566\u524c\u647a\u908b\u65ef\u782c\u760c","lai":"\u83b1\u6765\u8d56\u5d03\u5f95\u6d9e\u6fd1\u8d49\u7750\u94fc\u765e\u7c41","lan":"\u84dd\u5a6a\u680f\u62e6\u7bee\u9611\u5170\u6f9c\u8c30\u63fd\u89c8\u61d2\u7f06\u70c2\u6ee5\u5549\u5c9a\u61d4\u6f24\u6984\u6593\u7f71\u9567\u8934","lang":"\u7405\u6994\u72fc\u5eca\u90ce\u6717\u6d6a\u83a8\u8497\u5577\u9606\u9512\u7a02\u8782","lao":"\u635e\u52b3\u7262\u8001\u4f6c\u59e5\u916a\u70d9\u6d9d\u5520\u5d02\u6833\u94d1\u94f9\u75e8\u91aa","le":"\u52d2\u4e50\u808b\u4ec2\u53fb\u561e\u6cd0\u9cd3","lei":"\u96f7\u956d\u857e\u78ca\u7d2f\u5121\u5792\u64c2\u7c7b\u6cea\u7fb8\u8bd4\u837d\u54a7\u6f2f\u5ad8\u7f27\u6a91\u8012\u9179","ling":"\u68f1\u51b7\u62ce\u73b2\u83f1\u96f6\u9f84\u94c3\u4f36\u7f9a\u51cc\u7075\u9675\u5cad\u9886\u53e6\u4ee4\u9143\u5844\u82d3\u5464\u56f9\u6ce0\u7eeb\u67c3\u68c2\u74f4\u8046\u86c9\u7fce\u9cae","leng":"\u695e\u6123","li":"\u5398\u68a8\u7281\u9ece\u7bf1\u72f8\u79bb\u6f13\u7406\u674e\u91cc\u9ca4\u793c\u8389\u8354\u540f\u6817\u4e3d\u5389\u52b1\u783e\u5386\u5229\u5088\u4f8b\u4fd0\u75e2\u7acb\u7c92\u6ca5\u96b6\u529b\u7483\u54e9\u4fea\u4fda\u90e6\u575c\u82c8\u8385\u84e0\u85dc\u6369\u5456\u5533\u55b1\u7301\u6ea7\u6fa7\u9026\u5a0c\u5ae0\u9a8a\u7f21\u73de\u67a5\u680e\u8f79\u623e\u783a\u8a48\u7f79\u9502\u9e42\u75a0\u75ac\u86ce\u870a\u8821\u7b20\u7be5\u7c9d\u91b4\u8dde\u96f3\u9ca1\u9ce2\u9ee7","lian":"\u4fe9\u8054\u83b2\u8fde\u9570\u5ec9\u601c\u6d9f\u5e18\u655b\u8138\u94fe\u604b\u70bc\u7ec3\u631b\u8539\u5941\u6f4b\u6fc2\u5a08\u740f\u695d\u6b93\u81c1\u81a6\u88e2\u880a\u9ca2","liang":"\u7cae\u51c9\u6881\u7cb1\u826f\u4e24\u8f86\u91cf\u667e\u4eae\u8c05\u589a\u690b\u8e09\u9753\u9b49","liao":"\u64a9\u804a\u50da\u7597\u71ce\u5be5\u8fbd\u6f66\u4e86\u6482\u9563\u5ed6\u6599\u84fc\u5c25\u5639\u7360\u5bee\u7f2d\u948c\u9e69\u8022","lie":"\u5217\u88c2\u70c8\u52a3\u730e\u51bd\u57d2\u6d0c\u8d94\u8e90\u9b23","lin":"\u7433\u6797\u78f7\u9716\u4e34\u90bb\u9cde\u6dcb\u51db\u8d41\u541d\u853a\u5d99\u5eea\u9074\u6aa9\u8f9a\u77b5\u7cbc\u8e8f\u9e9f","liu":"\u6e9c\u7409\u69b4\u786b\u998f\u7559\u5218\u7624\u6d41\u67f3\u516d\u62a1\u507b\u848c\u6cd6\u6d4f\u905b\u9a9d\u7efa\u65d2\u7198\u950d\u954f\u9e68\u938f","long":"\u9f99\u804b\u5499\u7b3c\u7abf\u9686\u5784\u62e2\u9647\u5f04\u5785\u830f\u6cf7\u73d1\u680a\u80e7\u783b\u7643","lou":"\u697c\u5a04\u6402\u7bd3\u6f0f\u964b\u55bd\u5d5d\u9542\u7618\u8027\u877c\u9ac5","lu":"\u82a6\u5362\u9885\u5e90\u7089\u63b3\u5364\u864f\u9c81\u9e93\u788c\u9732\u8def\u8d42\u9e7f\u6f5e\u7984\u5f55\u9646\u622e\u5786\u6445\u64b8\u565c\u6cf8\u6e0c\u6f09\u7490\u680c\u6a79\u8f73\u8f82\u8f98\u6c07\u80ea\u9565\u9e2c\u9e6d\u7c0f\u823b\u9c88","lv":"\u9a74\u5415\u94dd\u4fa3\u65c5\u5c65\u5c61\u7f15\u8651\u6c2f\u5f8b\u7387\u6ee4\u7eff\u634b\u95fe\u6988\u8182\u7a06\u891b","luan":"\u5ce6\u5b6a\u6ee6\u5375\u4e71\u683e\u9e3e\u92ae","lue":"\u63a0\u7565\u950a","lun":"\u8f6e\u4f26\u4ed1\u6ca6\u7eb6\u8bba\u56f5","luo":"\u841d\u87ba\u7f57\u903b\u9523\u7ba9\u9aa1\u88f8\u843d\u6d1b\u9a86\u7edc\u502e\u8366\u645e\u7321\u6cfa\u6924\u8136\u9559\u7630\u96d2","ma":"\u5988\u9ebb\u739b\u7801\u8682\u9a6c\u9a82\u561b\u5417\u551b\u72b8\u5b37\u6769\u9ebd","mai":"\u57cb\u4e70\u9ea6\u5356\u8fc8\u8109\u52a2\u836c\u54aa\u973e","man":"\u7792\u9992\u86ee\u6ee1\u8513\u66fc\u6162\u6f2b\u8c29\u5881\u5e54\u7f26\u71b3\u9558\u989f\u87a8\u9cd7\u9794","mang":"\u8292\u832b\u76f2\u5fd9\u83bd\u9099\u6f2d\u6726\u786d\u87d2","meng":"\u6c13\u840c\u8499\u6aac\u76df\u9530\u731b\u68a6\u5b5f\u52d0\u750d\u77a2\u61f5\u791e\u867b\u8722\u8813\u824b\u8268\u9efe","miao":"\u732b\u82d7\u63cf\u7784\u85d0\u79d2\u6e3a\u5e99\u5999\u55b5\u9088\u7f08\u7f2a\u676a\u6dfc\u7707\u9e4b\u8731","mao":"\u8305\u951a\u6bdb\u77db\u94c6\u536f\u8302\u5192\u5e3d\u8c8c\u8d38\u4f94\u88a4\u52d6\u8306\u5cc1\u7441\u6634\u7266\u8004\u65c4\u61cb\u7780\u86d1\u8765\u87ca\u9ae6","me":"\u4e48","mei":"\u73ab\u679a\u6885\u9176\u9709\u7164\u6ca1\u7709\u5a92\u9541\u6bcf\u7f8e\u6627\u5bd0\u59b9\u5a9a\u5776\u8393\u5d4b\u7338\u6d7c\u6e44\u6963\u9545\u9e5b\u8882\u9b45","men":"\u95e8\u95f7\u4eec\u626a\u739f\u7116\u61d1\u9494","mi":"\u772f\u919a\u9761\u7cdc\u8ff7\u8c1c\u5f25\u7c73\u79d8\u89c5\u6ccc\u871c\u5bc6\u5e42\u8288\u5196\u8c27\u863c\u5627\u7315\u736f\u6c68\u5b93\u5f2d\u8112\u6549\u7cf8\u7e3b\u9e8b","mian":"\u68c9\u7720\u7ef5\u5195\u514d\u52c9\u5a29\u7f05\u9762\u6c94\u6e4e\u817c\u7704","mie":"\u8511\u706d\u54a9\u881b\u7bfe","min":"\u6c11\u62bf\u76bf\u654f\u60af\u95fd\u82e0\u5cb7\u95f5\u6cef\u73c9","ming":"\u660e\u879f\u9e23\u94ed\u540d\u547d\u51a5\u8317\u6e9f\u669d\u7791\u9169","miu":"\u8c2c","mo":"\u6478\u6479\u8611\u6a21\u819c\u78e8\u6469\u9b54\u62b9\u672b\u83ab\u58a8\u9ed8\u6cab\u6f20\u5bde\u964c\u8c1f\u8309\u84e6\u998d\u5aeb\u9546\u79e3\u763c\u8031\u87c6\u8c8a\u8c98","mou":"\u8c0b\u725f\u67d0\u53b6\u54de\u5a7a\u7738\u936a","mu":"\u62c7\u7261\u4ea9\u59c6\u6bcd\u5893\u66ae\u5e55\u52df\u6155\u6728\u76ee\u7766\u7267\u7a46\u4eeb\u82dc\u5452\u6c90\u6bea\u94bc","na":"\u62ff\u54ea\u5450\u94a0\u90a3\u5a1c\u7eb3\u5185\u637a\u80ad\u954e\u8872\u7bac","nai":"\u6c16\u4e43\u5976\u8010\u5948\u9f10\u827f\u8418\u67f0","nan":"\u5357\u7537\u96be\u56ca\u5583\u56e1\u6960\u8169\u877b\u8d67","nao":"\u6320\u8111\u607c\u95f9\u5b6c\u57b4\u7331\u7459\u7847\u94d9\u86f2","ne":"\u6dd6\u5462\u8bb7","nei":"\u9981","nen":"\u5ae9\u80fd\u6798\u6041","ni":"\u59ae\u9713\u502a\u6ce5\u5c3c\u62df\u4f60\u533f\u817b\u9006\u6eba\u4f32\u576d\u730a\u6029\u6ee0\u6635\u65ce\u7962\u615d\u7768\u94cc\u9cb5","nian":"\u852b\u62c8\u5e74\u78be\u64b5\u637b\u5ff5\u5eff\u8f87\u9ecf\u9c87\u9cb6","niang":"\u5a18\u917f","niao":"\u9e1f\u5c3f\u8311\u5b32\u8132\u8885","nie":"\u634f\u8042\u5b7d\u556e\u954a\u954d\u6d85\u4e5c\u9667\u8616\u55eb\u8080\u989e\u81ec\u8e51","nin":"\u60a8\u67e0","ning":"\u72de\u51dd\u5b81\u62e7\u6cde\u4f5e\u84e5\u549b\u752f\u804d","niu":"\u725b\u626d\u94ae\u7ebd\u72c3\u5ff8\u599e\u86b4","nong":"\u8113\u6d53\u519c\u4fac","nu":"\u5974\u52aa\u6012\u5476\u5e11\u5f29\u80ec\u5b65\u9a7d","nv":"\u5973\u6067\u9495\u8844","nuan":"\u6696","nuenue":"\u8650","nue":"\u759f\u8c11","nuo":"\u632a\u61e6\u7cef\u8bfa\u50a9\u6426\u558f\u9518","ou":"\u54e6\u6b27\u9e25\u6bb4\u85d5\u5455\u5076\u6ca4\u6004\u74ef\u8026","pa":"\u556a\u8db4\u722c\u5e15\u6015\u7436\u8469\u7b62","pai":"\u62cd\u6392\u724c\u5f98\u6e43\u6d3e\u4ff3\u848e","pan":"\u6500\u6f58\u76d8\u78d0\u76fc\u7554\u5224\u53db\u723f\u6cee\u88a2\u897b\u87e0\u8e52","pang":"\u4e53\u5e9e\u65c1\u802a\u80d6\u6ec2\u9004","pao":"\u629b\u5486\u5228\u70ae\u888d\u8dd1\u6ce1\u530f\u72cd\u5e96\u812c\u75b1","pei":"\u5478\u80da\u57f9\u88f4\u8d54\u966a\u914d\u4f69\u6c9b\u638a\u8f94\u5e14\u6de0\u65c6\u952b\u9185\u9708","pen":"\u55b7\u76c6\u6e53","peng":"\u7830\u62a8\u70f9\u6f8e\u5f6d\u84ec\u68da\u787c\u7bf7\u81a8\u670b\u9e4f\u6367\u78b0\u576f\u580b\u562d\u6026\u87db","pi":"\u7812\u9739\u6279\u62ab\u5288\u7435\u6bd7\u5564\u813e\u75b2\u76ae\u5339\u75de\u50fb\u5c41\u8b6c\u4e15\u9674\u90b3\u90eb\u572e\u9f19\u64d7\u567c\u5e80\u5ab2\u7eb0\u6787\u7513\u7765\u7f74\u94cd\u75e6\u7656\u758b\u868d\u8c94","pian":"\u7bc7\u504f\u7247\u9a97\u8c1d\u9a88\u728f\u80fc\u890a\u7fe9\u8e41","piao":"\u98d8\u6f02\u74e2\u7968\u527d\u560c\u5ad6\u7f25\u6b8d\u779f\u87b5","pie":"\u6487\u77a5\u4e3f\u82e4\u6c15","pin":"\u62fc\u9891\u8d2b\u54c1\u8058\u62da\u59d8\u5ad4\u6980\u725d\u98a6","ping":"\u4e52\u576a\u82f9\u840d\u5e73\u51ed\u74f6\u8bc4\u5c4f\u4fdc\u5a09\u67b0\u9c86","po":"\u5761\u6cfc\u9887\u5a46\u7834\u9b44\u8feb\u7c95\u53f5\u9131\u6ea5\u73c0\u948b\u94b7\u76a4\u7b38","pou":"\u5256\u88d2\u8e23","pu":"\u6251\u94fa\u4ec6\u8386\u8461\u83e9\u84b2\u57d4\u6734\u5703\u666e\u6d66\u8c31\u66dd\u7011\u530d\u5657\u6fee\u749e\u6c06\u9564\u9568\u8e7c","qi":"\u671f\u6b3a\u6816\u621a\u59bb\u4e03\u51c4\u6f06\u67d2\u6c8f\u5176\u68cb\u5947\u6b67\u7566\u5d0e\u8110\u9f50\u65d7\u7948\u7941\u9a91\u8d77\u5c82\u4e5e\u4f01\u542f\u5951\u780c\u5668\u6c14\u8fc4\u5f03\u6c7d\u6ce3\u8bab\u4e9f\u4e93\u573b\u8291\u840b\u847a\u5601\u5c7a\u5c90\u6c54\u6dc7\u9a90\u7eee\u742a\u7426\u675e\u6864\u69ed\u6b39\u797a\u61a9\u789b\u86f4\u871e\u7da6\u7dae\u8dbf\u8e4a\u9ccd\u9e92","qia":"\u6390\u6070\u6d3d\u845c","qian":"\u7275\u6266\u948e\u94c5\u5343\u8fc1\u7b7e\u4edf\u8c26\u4e7e\u9ed4\u94b1\u94b3\u524d\u6f5c\u9063\u6d45\u8c34\u5811\u5d4c\u6b20\u6b49\u4f65\u9621\u828a\u82a1\u8368\u63ae\u5c8d\u60ad\u614a\u9a9e\u6434\u8930\u7f31\u6920\u80b7\u6106\u94a4\u8654\u7b9d","qiang":"\u67aa\u545b\u8154\u7f8c\u5899\u8537\u5f3a\u62a2\u5af1\u6a2f\u6217\u709d\u9516\u9535\u956a\u8941\u8723\u7f9f\u8deb\u8dc4","qiao":"\u6a47\u9539\u6572\u6084\u6865\u77a7\u4e54\u4fa8\u5de7\u9798\u64ac\u7fd8\u5ced\u4fcf\u7a8d\u5281\u8bee\u8c2f\u835e\u6100\u6194\u7f32\u6a35\u6bf3\u7857\u8df7\u9792","qie":"\u5207\u8304\u4e14\u602f\u7a83\u90c4\u553c\u60ec\u59be\u6308\u9532\u7ba7","qin":"\u94a6\u4fb5\u4eb2\u79e6\u7434\u52e4\u82b9\u64d2\u79bd\u5bdd\u6c81\u82a9\u84c1\u8572\u63ff\u5423\u55ea\u5659\u6eb1\u6a8e\u8793\u887e","qing":"\u9752\u8f7b\u6c22\u503e\u537f\u6e05\u64ce\u6674\u6c30\u60c5\u9877\u8bf7\u5e86\u5029\u82d8\u570a\u6aa0\u78ec\u873b\u7f44\u7b90\u8b26\u9cad\u9ee5","qiong":"\u743c\u7a77\u909b\u8315\u7a79\u7b47\u928e","qiu":"\u79cb\u4e18\u90b1\u7403\u6c42\u56da\u914b\u6cc5\u4fc5\u6c3d\u5def\u827d\u72b0\u6e6b\u9011\u9052\u6978\u8d47\u9e20\u866c\u86af\u8764\u88d8\u7cd7\u9cc5\u9f3d","qu":"\u8d8b\u533a\u86c6\u66f2\u8eaf\u5c48\u9a71\u6e20\u53d6\u5a36\u9f8b\u8da3\u53bb\u8bce\u52ac\u8556\u8627\u5c96\u8862\u9612\u74a9\u89d1\u6c0d\u795b\u78f2\u766f\u86d0\u883c\u9eb4\u77bf\u9ee2","quan":"\u5708\u98a7\u6743\u919b\u6cc9\u5168\u75ca\u62f3\u72ac\u5238\u529d\u8be0\u8343\u737e\u609b\u7efb\u8f81\u754e\u94e8\u8737\u7b4c\u9b08","que":"\u7f3a\u7094\u7638\u5374\u9e4a\u69b7\u786e\u96c0\u9619\u60ab","qun":"\u88d9\u7fa4\u9021","ran":"\u7136\u71c3\u5189\u67d3\u82d2\u9aef","rang":"\u74e4\u58e4\u6518\u56b7\u8ba9\u79b3\u7a70","rao":"\u9976\u6270\u7ed5\u835b\u5a06\u6861","ruo":"\u60f9\u82e5\u5f31","re":"\u70ed\u504c","ren":"\u58ec\u4ec1\u4eba\u5fcd\u97e7\u4efb\u8ba4\u5203\u598a\u7eab\u4ede\u834f\u845a\u996a\u8f6b\u7a14\u887d","reng":"\u6254\u4ecd","ri":"\u65e5","rong":"\u620e\u8338\u84c9\u8363\u878d\u7194\u6eb6\u5bb9\u7ed2\u5197\u5d58\u72e8\u7f1b\u6995\u877e","rou":"\u63c9\u67d4\u8089\u7cc5\u8e42\u97a3","ru":"\u8339\u8815\u5112\u5b7a\u5982\u8fb1\u4e73\u6c5d\u5165\u8925\u84d0\u85b7\u5685\u6d33\u6ebd\u6fe1\u94f7\u8966\u98a5","ruan":"\u8f6f\u962e\u670a","rui":"\u854a\u745e\u9510\u82ae\u8564\u777f\u868b","run":"\u95f0\u6da6","sa":"\u6492\u6d12\u8428\u5345\u4ee8\u6332\u98d2","sai":"\u816e\u9cc3\u585e\u8d5b\u567b","san":"\u4e09\u53c1\u4f1e\u6563\u5f61\u9993\u6c35\u6bf5\u7cc1\u9730","sang":"\u6851\u55d3\u4e27\u6421\u78c9\u98a1","sao":"\u6414\u9a9a\u626b\u5ac2\u57fd\u81ca\u7619\u9ccb","se":"\u745f\u8272\u6da9\u556c\u94e9\u94ef\u7a51","sen":"\u68ee","seng":"\u50e7","sha":"\u838e\u7802\u6740\u5239\u6c99\u7eb1\u50bb\u5565\u715e\u810e\u6b43\u75e7\u88df\u970e\u9ca8","shai":"\u7b5b\u6652\u917e","shan":"\u73ca\u82eb\u6749\u5c71\u5220\u717d\u886b\u95ea\u9655\u64c5\u8d61\u81b3\u5584\u6c55\u6247\u7f2e\u5261\u8baa\u912f\u57cf\u829f\u6f78\u59d7\u9a9f\u81bb\u9490\u759d\u87ee\u8222\u8dda\u9cdd","shang":"\u5892\u4f24\u5546\u8d4f\u664c\u4e0a\u5c1a\u88f3\u57a7\u7ef1\u6b87\u71b5\u89de","shao":"\u68a2\u634e\u7a0d\u70e7\u828d\u52fa\u97f6\u5c11\u54e8\u90b5\u7ecd\u52ad\u82d5\u6f72\u86f8\u7b24\u7b72\u8244","she":"\u5962\u8d4a\u86c7\u820c\u820d\u8d66\u6444\u5c04\u6151\u6d89\u793e\u8bbe\u538d\u4f58\u731e\u7572\u9e9d","shen":"\u7837\u7533\u547b\u4f38\u8eab\u6df1\u5a20\u7ec5\u795e\u6c88\u5ba1\u5a76\u751a\u80be\u614e\u6e17\u8bdc\u8c02\u5432\u54c2\u6e16\u6939\u77e7\u8703","sheng":"\u58f0\u751f\u7525\u7272\u5347\u7ef3\u7701\u76db\u5269\u80dc\u5723\u4e1e\u6e11\u5ab5\u771a\u7b19","shi":"\u5e08\u5931\u72ee\u65bd\u6e7f\u8bd7\u5c38\u8671\u5341\u77f3\u62fe\u65f6\u4ec0\u98df\u8680\u5b9e\u8bc6\u53f2\u77e2\u4f7f\u5c4e\u9a76\u59cb\u5f0f\u793a\u58eb\u4e16\u67ff\u4e8b\u62ed\u8a93\u901d\u52bf\u662f\u55dc\u566c\u9002\u4ed5\u4f8d\u91ca\u9970\u6c0f\u5e02\u6043\u5ba4\u89c6\u8bd5\u8c25\u57d8\u83b3\u84cd\u5f11\u5511\u9963\u8f7c\u8006\u8d33\u70bb\u793b\u94c8\u94ca\u87ab\u8210\u7b6e\u8c55\u9ca5\u9cba","shou":"\u6536\u624b\u9996\u5b88\u5bff\u6388\u552e\u53d7\u7626\u517d\u624c\u72e9\u7ef6\u824f","shu":"\u852c\u67a2\u68b3\u6b8a\u6292\u8f93\u53d4\u8212\u6dd1\u758f\u4e66\u8d4e\u5b70\u719f\u85af\u6691\u66d9\u7f72\u8700\u9ecd\u9f20\u5c5e\u672f\u8ff0\u6811\u675f\u620d\u7ad6\u5885\u5eb6\u6570\u6f31\u6055\u500f\u587e\u83fd\u5fc4\u6cad\u6d91\u6f8d\u59dd\u7ebe\u6bf9\u8167\u6bb3\u956f\u79eb\u9e6c","shua":"\u5237\u800d\u5530\u6dae","shuai":"\u6454\u8870\u7529\u5e05\u87c0","shuan":"\u6813\u62f4\u95e9","shuang":"\u971c\u53cc\u723d\u5b40","shui":"\u8c01\u6c34\u7761\u7a0e","shun":"\u542e\u77ac\u987a\u821c\u6042","shuo":"\u8bf4\u7855\u6714\u70c1\u84b4\u6420\u55cd\u6fef\u5981\u69ca\u94c4","si":"\u65af\u6495\u5636\u601d\u79c1\u53f8\u4e1d\u6b7b\u8086\u5bfa\u55e3\u56db\u4f3a\u4f3c\u9972\u5df3\u53ae\u4fdf\u5155\u83e5\u549d\u6c5c\u6cd7\u6f8c\u59d2\u9a77\u7f0c\u7940\u7960\u9536\u9e36\u801c\u86f3\u7b25","song":"\u677e\u8038\u6002\u9882\u9001\u5b8b\u8bbc\u8bf5\u51c7\u83d8\u5d27\u5d69\u5fea\u609a\u6dde\u7ae6","sou":"\u641c\u8258\u64de\u55fd\u53df\u55d6\u55fe\u998a\u6eb2\u98d5\u778d\u953c\u878b","su":"\u82cf\u9165\u4fd7\u7d20\u901f\u7c9f\u50f3\u5851\u6eaf\u5bbf\u8bc9\u8083\u5919\u8c21\u850c\u55c9\u612b\u7c0c\u89eb\u7a23","suan":"\u9178\u849c\u7b97","sui":"\u867d\u968b\u968f\u7ee5\u9ad3\u788e\u5c81\u7a57\u9042\u96a7\u795f\u84d1\u51ab\u8c07\u6fc9\u9083\u71e7\u772d\u7762","sun":"\u5b59\u635f\u7b0b\u836a\u72f2\u98e7\u69ab\u8de3\u96bc","suo":"\u68ad\u5506\u7f29\u7410\u7d22\u9501\u6240\u5522\u55e6\u5a11\u686b\u7743\u7fa7","ta":"\u584c\u4ed6\u5b83\u5979\u5854\u736d\u631e\u8e4b\u8e0f\u95fc\u6ebb\u9062\u69bb\u6c93","tai":"\u80ce\u82d4\u62ac\u53f0\u6cf0\u915e\u592a\u6001\u6c70\u90b0\u85b9\u80bd\u70b1\u949b\u8dc6\u9c90","tan":"\u574d\u644a\u8d2a\u762b\u6ee9\u575b\u6a80\u75f0\u6f6d\u8c2d\u8c08\u5766\u6bef\u8892\u78b3\u63a2\u53f9\u70ad\u90ef\u8548\u6619\u94bd\u952c\u8983","tang":"\u6c64\u5858\u642a\u5802\u68e0\u819b\u5510\u7cd6\u50a5\u9967\u6e8f\u746d\u94f4\u9557\u8025\u8797\u87b3\u7fb0\u91a3","thang":"\u5018\u8eba\u6dcc","theng":"\u8d9f\u70eb","tao":"\u638f\u6d9b\u6ed4\u7ee6\u8404\u6843\u9003\u6dd8\u9676\u8ba8\u5957\u6311\u9f17\u5555\u97ec\u9955","te":"\u7279","teng":"\u85e4\u817e\u75bc\u8a8a\u6ed5","ti":"\u68af\u5254\u8e22\u9511\u63d0\u9898\u8e44\u557c\u4f53\u66ff\u568f\u60d5\u6d95\u5243\u5c49\u8351\u608c\u9016\u7ee8\u7f07\u9e48\u88fc\u918d","tian":"\u5929\u6dfb\u586b\u7530\u751c\u606c\u8214\u8146\u63ad\u5fdd\u9617\u6b84\u754b\u94bf\u86ba","tiao":"\u6761\u8fe2\u773a\u8df3\u4f7b\u7967\u94eb\u7a95\u9f86\u9ca6","tie":"\u8d34\u94c1\u5e16\u841c\u992e","ting":"\u5385\u542c\u70c3\u6c40\u5ef7\u505c\u4ead\u5ead\u633a\u8247\u839b\u8476\u5a77\u6883\u8713\u9706","tong":"\u901a\u6850\u916e\u77b3\u540c\u94dc\u5f64\u7ae5\u6876\u6345\u7b52\u7edf\u75db\u4f5f\u50ee\u4edd\u833c\u55f5\u6078\u6f7c\u783c","tou":"\u5077\u6295\u5934\u900f\u4ea0","tu":"\u51f8\u79c3\u7a81\u56fe\u5f92\u9014\u6d82\u5c60\u571f\u5410\u5154\u580d\u837c\u83df\u948d\u9174","tuan":"\u6e4d\u56e2\u7583","tui":"\u63a8\u9893\u817f\u8715\u892a\u9000\u5fd2\u717a","tun":"\u541e\u5c6f\u81c0\u9968\u66be\u8c5a\u7a80","tuo":"\u62d6\u6258\u8131\u9e35\u9640\u9a6e\u9a7c\u692d\u59a5\u62d3\u553e\u4e47\u4f57\u5768\u5eb9\u6cb1\u67dd\u7823\u7ba8\u8204\u8dce\u9f0d","wa":"\u6316\u54c7\u86d9\u6d3c\u5a03\u74e6\u889c\u4f64\u5a32\u817d","wai":"\u6b6a\u5916","wan":"\u8c4c\u5f2f\u6e7e\u73a9\u987d\u4e38\u70f7\u5b8c\u7897\u633d\u665a\u7696\u60cb\u5b9b\u5a49\u4e07\u8155\u525c\u8284\u82cb\u83c0\u7ea8\u7efe\u742c\u8118\u7579\u873f\u7ba2","wang":"\u6c6a\u738b\u4ea1\u6789\u7f51\u5f80\u65fa\u671b\u5fd8\u5984\u7f54\u5c22\u60d8\u8f8b\u9b4d","wei":"\u5a01\u5dcd\u5fae\u5371\u97e6\u8fdd\u6845\u56f4\u552f\u60df\u4e3a\u6f4d\u7ef4\u82c7\u840e\u59d4\u4f1f\u4f2a\u5c3e\u7eac\u672a\u851a\u5473\u754f\u80c3\u5582\u9b4f\u4f4d\u6e2d\u8c13\u5c09\u6170\u536b\u502d\u504e\u8bff\u9688\u8473\u8587\u5e0f\u5e37\u5d34\u5d6c\u7325\u732c\u95f1\u6ca9\u6d27\u6da0\u9036\u5a13\u73ae\u97ea\u8ece\u709c\u7168\u71a8\u75ff\u8249\u9c94","wen":"\u761f\u6e29\u868a\u6587\u95fb\u7eb9\u543b\u7a33\u7d0a\u95ee\u520e\u6120\u960c\u6c76\u74ba\u97eb\u6b81\u96ef","weng":"\u55e1\u7fc1\u74ee\u84ca\u8579","wo":"\u631d\u8717\u6da1\u7a9d\u6211\u65a1\u5367\u63e1\u6c83\u83b4\u5e44\u6e25\u674c\u809f\u9f8c","wu":"\u5deb\u545c\u94a8\u4e4c\u6c61\u8bec\u5c4b\u65e0\u829c\u68a7\u543e\u5434\u6bcb\u6b66\u4e94\u6342\u5348\u821e\u4f0d\u4fae\u575e\u620a\u96fe\u6664\u7269\u52ff\u52a1\u609f\u8bef\u5140\u4ef5\u9622\u90ac\u572c\u82b4\u5e91\u6003\u5fe4\u6d6f\u5be4\u8fd5\u59a9\u9a9b\u727e\u7110\u9e49\u9e5c\u8708\u92c8\u9f2f","xi":"\u6614\u7199\u6790\u897f\u7852\u77fd\u6670\u563b\u5438\u9521\u727a\u7a00\u606f\u5e0c\u6089\u819d\u5915\u60dc\u7184\u70ef\u6eaa\u6c50\u7280\u6a84\u88ad\u5e2d\u4e60\u5ab3\u559c\u94e3\u6d17\u7cfb\u9699\u620f\u7ec6\u50d6\u516e\u96b0\u90d7\u831c\u8478\u84f0\u595a\u550f\u5f99\u9969\u960b\u6d60\u6dc5\u5c63\u5b09\u73ba\u6a28\u66e6\u89cb\u6b37\u71b9\u798a\u79a7\u94b8\u7699\u7a78\u8725\u87cb\u823e\u7fb2\u7c9e\u7fd5\u91af\u9f37","xia":"\u778e\u867e\u5323\u971e\u8f96\u6687\u5ce1\u4fa0\u72ed\u4e0b\u53a6\u590f\u5413\u6380\u846d\u55c4\u72ce\u9050\u7455\u7856\u7615\u7f45\u9ee0","xian":"\u9528\u5148\u4ed9\u9c9c\u7ea4\u54b8\u8d24\u8854\u8237\u95f2\u6d8e\u5f26\u5acc\u663e\u9669\u73b0\u732e\u53bf\u817a\u9985\u7fa1\u5baa\u9677\u9650\u7ebf\u51bc\u85d3\u5c98\u7303\u66b9\u5a34\u6c19\u7946\u9e47\u75eb\u86ac\u7b45\u7c7c\u9170\u8df9","xiang":"\u76f8\u53a2\u9576\u9999\u7bb1\u8944\u6e58\u4e61\u7fd4\u7965\u8be6\u60f3\u54cd\u4eab\u9879\u5df7\u6a61\u50cf\u5411\u8c61\u8297\u8459\u9977\u5ea0\u9aa7\u7f03\u87d3\u9c9e\u98e8","xiao":"\u8427\u785d\u9704\u524a\u54ee\u56a3\u9500\u6d88\u5bb5\u6dc6\u6653\u5c0f\u5b5d\u6821\u8096\u5578\u7b11\u6548\u54d3\u54bb\u5d24\u6f47\u900d\u9a81\u7ee1\u67ad\u67b5\u7b71\u7bab\u9b48","xie":"\u6954\u4e9b\u6b47\u874e\u978b\u534f\u631f\u643a\u90aa\u659c\u80c1\u8c10\u5199\u68b0\u5378\u87f9\u61c8\u6cc4\u6cfb\u8c22\u5c51\u5055\u4eb5\u52f0\u71ee\u85a4\u64b7\u5ee8\u7023\u9082\u7ec1\u7f2c\u69ad\u698d\u6b59\u8e9e","xin":"\u85aa\u82af\u950c\u6b23\u8f9b\u65b0\u5ffb\u5fc3\u4fe1\u8845\u56df\u99a8\u8398\u6b46\u94fd\u946b","xing":"\u661f\u8165\u7329\u60fa\u5174\u5211\u578b\u5f62\u90a2\u884c\u9192\u5e78\u674f\u6027\u59d3\u9649\u8347\u8365\u64e4\u60bb\u784e","xiong":"\u5144\u51f6\u80f8\u5308\u6c79\u96c4\u718a\u828e","xiu":"\u4f11\u4fee\u7f9e\u673d\u55c5\u9508\u79c0\u8896\u7ee3\u83a0\u5cab\u9990\u5ea5\u9e3a\u8c85\u9af9","xu":"\u589f\u620c\u9700\u865a\u5618\u987b\u5f90\u8bb8\u84c4\u9157\u53d9\u65ed\u5e8f\u755c\u6064\u7d6e\u5a7f\u7eea\u7eed\u8bb4\u8be9\u5729\u84ff\u6035\u6d2b\u6e86\u987c\u6829\u7166\u7809\u76f1\u80e5\u7cc8\u9191","xuan":"\u8f69\u55a7\u5ba3\u60ac\u65cb\u7384\u9009\u7663\u7729\u7eda\u5107\u8c16\u8431\u63ce\u9994\u6ceb\u6d35\u6e32\u6f29\u7487\u6966\u6684\u70ab\u714a\u78b9\u94c9\u955f\u75c3","xue":"\u9774\u859b\u5b66\u7a74\u96ea\u8840\u5671\u6cf6\u9cd5","xun":"\u52cb\u718f\u5faa\u65ec\u8be2\u5bfb\u9a6f\u5de1\u6b89\u6c5b\u8bad\u8baf\u900a\u8fc5\u5dfd\u57d9\u8340\u85b0\u5ccb\u5f87\u6d54\u66db\u7aa8\u91ba\u9c9f","ya":"\u538b\u62bc\u9e26\u9e2d\u5440\u4e2b\u82bd\u7259\u869c\u5d16\u8859\u6daf\u96c5\u54d1\u4e9a\u8bb6\u4f22\u63e0\u5416\u5c88\u8fd3\u5a05\u740a\u6860\u6c29\u7811\u775a\u75d6","yan":"\u7109\u54bd\u9609\u70df\u6df9\u76d0\u4e25\u7814\u8712\u5ca9\u5ef6\u8a00\u989c\u960e\u708e\u6cbf\u5944\u63a9\u773c\u884d\u6f14\u8273\u5830\u71d5\u538c\u781a\u96c1\u5501\u5f66\u7130\u5bb4\u8c1a\u9a8c\u53a3\u9765\u8d5d\u4fe8\u5043\u5156\u8ba0\u8c33\u90fe\u9122\u82ab\u83f8\u5d26\u6079\u95eb\u960f\u6d07\u6e6e\u6edf\u598d\u5ae3\u7430\u664f\u80ed\u814c\u7131\u7f68\u7b75\u917d\u9b47\u990d\u9f39","yang":"\u6b83\u592e\u9e2f\u79e7\u6768\u626c\u4f6f\u75a1\u7f8a\u6d0b\u9633\u6c27\u4ef0\u75d2\u517b\u6837\u6f3e\u5f89\u600f\u6cf1\u7080\u70ca\u6059\u86d8\u9785","yao":"\u9080\u8170\u5996\u7476\u6447\u5c27\u9065\u7a91\u8c23\u59da\u54ac\u8200\u836f\u8981\u8000\u592d\u723b\u5406\u5d3e\u5fad\u7039\u5e7a\u73e7\u6773\u66dc\u80b4\u9e5e\u7a88\u7e47\u9cd0","ye":"\u6930\u564e\u8036\u7237\u91ce\u51b6\u4e5f\u9875\u6396\u4e1a\u53f6\u66f3\u814b\u591c\u6db2\u8c12\u90ba\u63f6\u9980\u6654\u70e8\u94d8","yi":"\u4e00\u58f9\u533b\u63d6\u94f1\u4f9d\u4f0a\u8863\u9890\u5937\u9057\u79fb\u4eea\u80f0\u7591\u6c82\u5b9c\u59e8\u5f5d\u6905\u8681\u501a\u5df2\u4e59\u77e3\u4ee5\u827a\u6291\u6613\u9091\u5c79\u4ebf\u5f79\u81c6\u9038\u8084\u75ab\u4ea6\u88d4\u610f\u6bc5\u5fc6\u4e49\u76ca\u6ea2\u8be3\u8bae\u8c0a\u8bd1\u5f02\u7ffc\u7fcc\u7ece\u5208\u5293\u4f7e\u8bd2\u572a\u572f\u57f8\u61ff\u82e1\u858f\u5f08\u5955\u6339\u5f0b\u5453\u54a6\u54bf\u566b\u5cc4\u5db7\u7317\u9974\u603f\u6021\u6092\u6f2a\u8fe4\u9a7f\u7f22\u6baa\u8d3b\u65d6\u71a0\u9487\u9552\u9571\u75cd\u7617\u7654\u7fca\u8864\u8734\u8223\u7fbf\u7ff3\u914f\u9edf","yin":"\u8335\u836b\u56e0\u6bb7\u97f3\u9634\u59fb\u541f\u94f6\u6deb\u5bc5\u996e\u5c39\u5f15\u9690\u5370\u80e4\u911e\u5819\u831a\u5591\u72fa\u5924\u6c24\u94df\u763e\u8693\u972a\u9f88","ying":"\u82f1\u6a31\u5a74\u9e70\u5e94\u7f28\u83b9\u8424\u8425\u8367\u8747\u8fce\u8d62\u76c8\u5f71\u9896\u786c\u6620\u5b34\u90e2\u8314\u83ba\u8426\u6484\u5624\u81ba\u6ee2\u6f46\u701b\u745b\u748e\u6979\u9e66\u763f\u988d\u7f42","yo":"\u54df\u5537","yong":"\u62e5\u4f63\u81c3\u75c8\u5eb8\u96cd\u8e0a\u86f9\u548f\u6cf3\u6d8c\u6c38\u607f\u52c7\u7528\u4fd1\u58c5\u5889\u6175\u9095\u955b\u752c\u9cd9\u9954","you":"\u5e7d\u4f18\u60a0\u5fe7\u5c24\u7531\u90ae\u94c0\u72b9\u6cb9\u6e38\u9149\u6709\u53cb\u53f3\u4f51\u91c9\u8bf1\u53c8\u5e7c\u5363\u6538\u4f91\u83b8\u5466\u56ff\u5ba5\u67da\u7337\u7256\u94d5\u75a3\u8763\u9c7f\u9edd\u9f2c","yu":"\u8fc2\u6de4\u4e8e\u76c2\u6986\u865e\u611a\u8206\u4f59\u4fde\u903e\u9c7c\u6109\u6e1d\u6e14\u9685\u4e88\u5a31\u96e8\u4e0e\u5c7f\u79b9\u5b87\u8bed\u7fbd\u7389\u57df\u828b\u90c1\u5401\u9047\u55bb\u5cea\u5fa1\u6108\u6b32\u72f1\u80b2\u8a89\u6d74\u5bd3\u88d5\u9884\u8c6b\u9a6d\u79ba\u6bd3\u4f1b\u4fe3\u8c00\u8c15\u8438\u84e3\u63c4\u5581\u5704\u5709\u5d5b\u72f3\u996b\u5ebe\u9608\u59aa\u59a4\u7ea1\u745c\u6631\u89ce\u8174\u6b24\u65bc\u715c\u71e0\u807f\u94b0\u9e46\u7610\u7600\u7ab3\u8753\u7afd\u8201\u96e9\u9f89","yuan":"\u9e33\u6e0a\u51a4\u5143\u57a3\u8881\u539f\u63f4\u8f95\u56ed\u5458\u5706\u733f\u6e90\u7f18\u8fdc\u82d1\u613f\u6028\u9662\u586c\u6c85\u5a9b\u7457\u6a7c\u7230\u7722\u9e22\u8788\u9f0b","yue":"\u66f0\u7ea6\u8d8a\u8dc3\u94a5\u5cb3\u7ca4\u6708\u60a6\u9605\u9fa0\u6a3e\u5216\u94ba","yun":"\u8018\u4e91\u90e7\u5300\u9668\u5141\u8fd0\u8574\u915d\u6655\u97f5\u5b55\u90d3\u82b8\u72c1\u607d\u7ead\u6b92\u6600\u6c32","za":"\u531d\u7838\u6742\u62f6\u5482","zai":"\u683d\u54c9\u707e\u5bb0\u8f7d\u518d\u5728\u54b1\u5d3d\u753e","zan":"\u6512\u6682\u8d5e\u74d2\u661d\u7c2a\u7ccc\u8db1\u933e","zang":"\u8d43\u810f\u846c\u5958\u6215\u81e7","zao":"\u906d\u7cdf\u51ff\u85fb\u67a3\u65e9\u6fa1\u86a4\u8e81\u566a\u9020\u7682\u7076\u71e5\u5523\u7f2b","ze":"\u8d23\u62e9\u5219\u6cfd\u4ec4\u8d5c\u5567\u8fee\u6603\u7b2e\u7ba6\u8234","zei":"\u8d3c","zen":"\u600e\u8c2e","zeng":"\u589e\u618e\u66fe\u8d60\u7f2f\u7511\u7f7e\u9503","zha":"\u624e\u55b3\u6e23\u672d\u8f67\u94e1\u95f8\u7728\u6805\u69a8\u548b\u4e4d\u70b8\u8bc8\u63f8\u5412\u54a4\u54f3\u600d\u781f\u75c4\u86b1\u9f44","zhai":"\u6458\u658b\u5b85\u7a84\u503a\u5be8\u7826","zhan":"\u77bb\u6be1\u8a79\u7c98\u6cbe\u76cf\u65a9\u8f97\u5d2d\u5c55\u8638\u6808\u5360\u6218\u7ad9\u6e5b\u7efd\u8c35\u640c\u65c3","zhang":"\u6a1f\u7ae0\u5f70\u6f33\u5f20\u638c\u6da8\u6756\u4e08\u5e10\u8d26\u4ed7\u80c0\u7634\u969c\u4ec9\u9123\u5e5b\u5d82\u7350\u5adc\u748b\u87d1","zhao":"\u62db\u662d\u627e\u6cbc\u8d75\u7167\u7f69\u5146\u8087\u53ec\u722a\u8bcf\u68f9\u948a\u7b0a","zhe":"\u906e\u6298\u54f2\u86f0\u8f99\u8005\u9517\u8517\u8fd9\u6d59\u8c2a\u966c\u67d8\u8f84\u78d4\u9e67\u891a\u8707\u8d6d","zhen":"\u73cd\u659f\u771f\u7504\u7827\u81fb\u8d1e\u9488\u4fa6\u6795\u75b9\u8bca\u9707\u632f\u9547\u9635\u7f1c\u6862\u699b\u8f78\u8d48\u80d7\u6715\u796f\u755b\u9e29","zheng":"\u84b8\u6323\u7741\u5f81\u72f0\u4e89\u6014\u6574\u62ef\u6b63\u653f\u5e27\u75c7\u90d1\u8bc1\u8be4\u5ce5\u94b2\u94ee\u7b5d","zhi":"\u829d\u679d\u652f\u5431\u8718\u77e5\u80a2\u8102\u6c41\u4e4b\u7ec7\u804c\u76f4\u690d\u6b96\u6267\u503c\u4f84\u5740\u6307\u6b62\u8dbe\u53ea\u65e8\u7eb8\u5fd7\u631a\u63b7\u81f3\u81f4\u7f6e\u5e1c\u5cd9\u5236\u667a\u79e9\u7a1a\u8d28\u7099\u75d4\u6ede\u6cbb\u7a92\u536e\u965f\u90c5\u57f4\u82b7\u646d\u5e19\u5fee\u5f58\u54ab\u9a98\u6809\u67b3\u6800\u684e\u8f75\u8f7e\u6534\u8d3d\u81a3\u7949\u7957\u9ef9\u96c9\u9e37\u75e3\u86ed\u7d77\u916f\u8dd6\u8e2c\u8e2f\u8c78\u89ef","zhong":"\u4e2d\u76c5\u5fe0\u949f\u8877\u7ec8\u79cd\u80bf\u91cd\u4ef2\u4f17\u51a2\u953a\u87bd\u8202\u822f\u8e35","zhou":"\u821f\u5468\u5dde\u6d32\u8bcc\u7ca5\u8f74\u8098\u5e1a\u5492\u76b1\u5b99\u663c\u9aa4\u5544\u7740\u501c\u8bf9\u836e\u9b3b\u7ea3\u80c4\u78a1\u7c40\u8233\u914e\u9cb7","zhu":"\u73e0\u682a\u86db\u6731\u732a\u8bf8\u8bdb\u9010\u7af9\u70db\u716e\u62c4\u77a9\u5631\u4e3b\u8457\u67f1\u52a9\u86c0\u8d2e\u94f8\u7b51\u4f4f\u6ce8\u795d\u9a7b\u4f2b\u4f8f\u90be\u82ce\u8331\u6d19\u6e1a\u6f74\u9a7a\u677c\u69e0\u6a65\u70b7\u94e2\u75b0\u7603\u86b0\u7afa\u7bb8\u7fe5\u8e85\u9e88","zhua":"\u6293","zhuai":"\u62fd","zhuan":"\u4e13\u7816\u8f6c\u64b0\u8d5a\u7bc6\u629f\u556d\u989b","zhuang":"\u6869\u5e84\u88c5\u5986\u649e\u58ee\u72b6\u4e2c","zhui":"\u690e\u9525\u8ffd\u8d58\u5760\u7f00\u8411\u9a93\u7f12","zhun":"\u8c06\u51c6","zhuo":"\u6349\u62d9\u5353\u684c\u7422\u8301\u914c\u707c\u6d4a\u502c\u8bfc\u5ef4\u855e\u64e2\u555c\u6d5e\u6dbf\u6753\u712f\u799a\u65ab","zi":"\u5179\u54a8\u8d44\u59ff\u6ecb\u6dc4\u5b5c\u7d2b\u4ed4\u7c7d\u6ed3\u5b50\u81ea\u6e0d\u5b57\u8c18\u5d6b\u59ca\u5b73\u7f01\u6893\u8f8e\u8d40\u6063\u7726\u9531\u79ed\u8014\u7b2b\u7ca2\u89dc\u8a3e\u9cbb\u9aed","zong":"\u9b03\u68d5\u8e2a\u5b97\u7efc\u603b\u7eb5\u8159\u7cbd","zou":"\u90b9\u8d70\u594f\u63cd\u9139\u9cb0","zu":"\u79df\u8db3\u5352\u65cf\u7956\u8bc5\u963b\u7ec4\u4fce\u83f9\u5550\u5f82\u9a75\u8e74","zuan":"\u94bb\u7e82\u6525\u7f35","zui":"\u5634\u9189\u6700\u7f6a","zun":"\u5c0a\u9075\u6499\u6a3d\u9cdf","zuo":"\u6628\u5de6\u4f50\u67de\u505a\u4f5c\u5750\u5ea7\u961d\u963c\u80d9\u795a\u9162","cou":"\u85ae\u6971\u8f8f\u8160","nang":"\u652e\u54dd\u56d4\u9995\u66e9","o":"\u5594","dia":"\u55f2","chuai":"\u562c\u81aa\u8e39","cen":"\u5c91\u6d94","diu":"\u94e5","nou":"\u8028","fou":"\u7f36","bia":"\u9adf"};	
			this.polyphone = {"19969":"DZ","19975":"WM","19988":"QJ","20048":"YL","20056":"SC","20060":"NM","20094":"QG","20127":"QJ","20167":"QC","20193":"YG","20250":"KH","20256":"ZC","20282":"SC","20285":"QJG","20291":"TD","20314":"YD","20340":"NE","20375":"TD","20389":"YJ","20391":"CZ","20415":"PB","20446":"YS","20447":"SQ","20504":"TC","20608":"KG","20854":"QJ","20857":"ZC","20911":"PF","20504":"TC","20608":"KG","20854":"QJ","20857":"ZC","20911":"PF","20985":"AW","21032":"PB","21048":"XQ","21049":"SC","21089":"YS","21119":"JC","21242":"SB","21273":"SC","21305":"YP","21306":"QO","21330":"ZC","21333":"SDC","21345":"QK","21378":"CA","21397":"SC","21414":"XS","21442":"SC","21477":"JG","21480":"TD","21484":"ZS","21494":"YX","21505":"YX","21512":"HG","21523":"XH","21537":"PB","21542":"PF","21549":"KH","21571":"E","21574":"DA","21588":"TD","21589":"O","21618":"ZC","21621":"KHA","21632":"ZJ","21654":"KG","21679":"LKG","21683":"KH","21710":"A","21719":"YH","21734":"WOE","21769":"A","21780":"WN","21804":"XH","21834":"A","21899":"ZD","21903":"RN","21908":"WO","21939":"ZC","21956":"SA","21964":"YA","21970":"TD","22003":"A","22031":"JG","22040":"XS","22060":"ZC","22066":"ZC","22079":"MH","22129":"XJ","22179":"XA","22237":"NJ","22244":"TD","22280":"JQ","22300":"YH","22313":"XW","22331":"YQ","22343":"YJ","22351":"PH","22395":"DC","22412":"TD","22484":"PB","22500":"PB","22534":"ZD","22549":"DH","22561":"PB","22612":"TD","22771":"KQ","22831":"HB","22841":"JG","22855":"QJ","22865":"XQ","23013":"ML","23081":"WM","23487":"SX","23558":"QJ","23561":"YW","23586":"YW","23614":"YW","23615":"SN","23631":"PB","23646":"ZS","23663":"ZT","23673":"YG","23762":"TD","23769":"ZS","23780":"QJ","23884":"QK","24055":"XH","24113":"DC","24162":"ZC","24191":"GA","24273":"QJ","24324":"NL","24377":"TD","24378":"QJ","24439":"PF","24554":"ZS","24683":"TD","24694":"WE","24733":"LK","24925":"TN","25094":"ZG","25100":"XQ","25103":"XH","25153":"PB","25170":"PB","25179":"KG","25203":"PB","25240":"ZS","25282":"FB","25303":"NA","25324":"KG","25341":"ZY","25373":"WZ","25375":"XJ","25384":"A","25457":"A","25528":"SD","25530":"SC","25552":"TD","25774":"ZC","25874":"ZC","26044":"YW","26080":"WM","26292":"PB","26333":"PB","26355":"ZY","26366":"CZ","26397":"ZC","26399":"QJ","26415":"ZS","26451":"SB","26526":"ZC","26552":"JG","26561":"TD","26588":"JG","26597":"CZ","26629":"ZS","26638":"YL","26646":"XQ","26653":"KG","26657":"XJ","26727":"HG","26894":"ZC","26937":"ZS","26946":"ZC","26999":"KJ","27099":"KJ","27449":"YQ","27481":"XS","27542":"ZS","27663":"ZS","27748":"TS","27784":"SC","27788":"ZD","27795":"TD","27812":"O","27850":"PB","27852":"MB","27895":"SL","27898":"PL","27973":"QJ","27981":"KH","27986":"HX","27994":"XJ","28044":"YC","28065":"WG","28177":"SM","28267":"QJ","28291":"KH","28337":"ZQ","28463":"TL","28548":"DC","28601":"TD","28689":"PB","28805":"JG","28820":"QG","28846":"PB","28952":"TD","28975":"ZC","29100":"A","29325":"QJ","29575":"SL","29602":"FB","30010":"TD","30044":"CX","30058":"PF","30091":"YSP","30111":"YN","30229":"XJ","30427":"SC","30465":"SX","30631":"YQ","30655":"QJ","30684":"QJG","30707":"SD","30729":"XH","30796":"LG","30917":"PB","31074":"NM","31085":"JZ","31109":"SC","31181":"ZC","31192":"MLB","31293":"JQ","31400":"YX","31584":"YJ","31896":"ZN","31909":"ZY","31995":"XJ","32321":"PF","32327":"ZY","32418":"HG","32420":"XQ","32421":"HG","32438":"LG","32473":"GJ","32488":"TD","32521":"QJ","32527":"PB","32562":"ZSQ","32564":"JZ","32735":"ZD","32793":"PB","33071":"PF","33098":"XL","33100":"YA","33152":"PB","33261":"CX","33324":"BP","33333":"TD","33406":"YA","33426":"WM","33432":"PB","33445":"JG","33486":"ZN","33493":"TS","33507":"QJ","33540":"QJ","33544":"ZC","33564":"XQ","33617":"YT","33632":"QJ","33636":"XH","33637":"YX","33694":"WG","33705":"PF","33728":"YW","33882":"SR","34067":"WM","34074":"YW","34121":"QJ","34255":"ZC","34259":"XL","34425":"JH","34430":"XH","34485":"KH","34503":"YS","34532":"HG","34552":"XS","34558":"YE","34593":"ZL","34660":"YQ","34892":"XH","34928":"SC","34999":"QJ","35048":"PB","35059":"SC","35098":"ZC","35203":"TQ","35265":"JX","35299":"JX","35782":"SZ","35828":"YS","35830":"E","35843":"TD","35895":"YG","35977":"MH","36158":"JG","36228":"QJ","36426":"XQ","36466":"DC","36710":"JC","36711":"ZYG","36767":"PB","36866":"SK","36951":"YW","37034":"YX","37063":"XH","37218":"ZC","37325":"ZC","38063":"PB","38079":"TD","38085":"QY","38107":"DC","38116":"TD","38123":"YD","38224":"HG","38241":"XTC","38271":"ZC","38415":"YE","38426":"KH","38461":"YD","38463":"AE","38466":"PB","38477":"XJ","38518":"YT","38551":"WK","38585":"ZC","38704":"XS","38739":"LJ","38761":"GJ","38808":"SQ","39048":"JG","39049":"XJ","39052":"HG","39076":"CZ","39271":"XT","39534":"TD","39552":"TD","39584":"PB","39647":"SB","39730":"LG","39748":"TPB","40109":"ZQ","40479":"ND","40516":"HG","40536":"HG","40583":"QJ","40765":"YQ","40784":"QJ","40840":"YK","40863":"QJG"};
		},
		
		getCamelChars: function(str) {
			if(typeof(str) != "string")
				throw new Error(-1,"函数getFisrt需要字符串类型参数!");
			var chars = new Array(); //保存中间结果的数组
			for(var i=0,len=str.length;i<len;i++){
				//获得unicode码
				var ch = str.charAt(i);
				//检查该unicode码是否在处理范围之内,在则返回该码对映汉字的拼音首字母,不在则调用其它函数处理
				chars.push(this._getChar(ch));
			}
			//处理arrResult,返回所有可能的拼音首字母串数组
			return this._getResult(chars);
		},
		
		getFullChars: function(str) {
			var len = str.length;
		    var result = "";
		    var reg = new RegExp('[a-zA-Z0-9\- ]');
		    for (var i=0; i<len; i++) {
		        var ch = str.substr(i,1);
		        var unicode = ch.charCodeAt(0);
				//如果不在汉字处理范围之内,返回原字符,也可以调用自己的处理函数
				if(unicode > 40869 || unicode < 19968) {
		            result += ch;
		        } else {
			        var name = this._getFullChar(ch);
			        if (name!==false) {
		            	result += name;
			        }
		        }
		    }
		    return result;
		},
		
		_getFullChar: function(str){
		    for (var key in this.full_dict){
		        if (this.full_dict[key].indexOf(str)!=-1) {
		            return this._capitalize(key); break;
		        }
		    }
		    return false;
		},
		// 首字母大写
		_capitalize: function(str){
		    if (str.length>0) {
		        var first = str.substr(0,1).toUpperCase();
		        var spare = str.substr(1,str.length);
		        return first + spare;
		    }
		},
		
		_getChar: function(ch){
			var unicode = ch.charCodeAt(0);
			//如果不在汉字处理范围之内,返回原字符,也可以调用自己的处理函数
			if(unicode > 40869 || unicode < 19968)
				return ch; //dealWithOthers(ch);
			//检查是否是多音字,是按多音字处理,不是就直接在strChineseFirstPY字符串中找对应的首字母
			if (!this.options.checkPolyphone) 
				return this.char_dict.charAt(unicode-19968);
			return this.polyphone[unicode] ? this.polyphone[unicode] : this.char_dict.charAt(unicode-19968);
		},
		
		_getResult: function(chars){
			if (!this.options.checkPolyphone)
				return chars.join('');
			var result = [''];
			for(var i=0,len=chars.length;i<len;i++){
				var str = chars[i];
				var strlen = str.length;
				if(strlen == 1){
					for(var j=0; j < result.length; j++){
						result[k] += str;
					}
				}else{
					var swap1 = result.slice(0);
					result = [];
					for(var j=0; j < strlen; j++){
						//复制一个相同的arrRslt
						var swap2 = swap1.slice(0);
						//把当前字符str[k]添加到每个元素末尾
						for(var k=0; k < swap2.length; k++){
							swap2[k] += str.charAt(j);
						}
						//把复制并修改后的数组连接到arrRslt上
						result = result.concat(swap2);
					}
				}
			}
			return result;
		}
	};
	
	return Pinyin;
	
});

/**
 * @fileoverview 
 * @author 栋寒<donghan@taobao.com>
 * @module confirm
 **/
KISSY.add('gallery/contacts/1.0/confirm' , function (S, Node , Base) {
	
	'use strict';

    var EMPTY = '';

    var $ = Node.all;

    /**
     * 
     * @class Confirm
     * @constructor
     * @extends Base
     */
    function Confirm(cfg) {
        var self = this;
        //调用父类构造函数
        Confirm.superclass.constructor.call(self, cfg);
		self.init(cfg);
    }

    S.extend(Confirm, Base, {
		
		init : function () {
			this.buildDom().bindEvent();
		},
		
		// 获得弹窗内部的dom字符串
		getDomStr : function () {
			var self = this , type = self.get('type') , tip = self.get('tip') , wrap = self.get('wrap').replace('#' , '');
			var arr = [
				'<div id="' + wrap  + '" class="ks-w-confirm" style="visibility: hidden;">',
					'<div class="mask"></div>',
					'<div class="box">',
						'<div class="content">' + tip + '</div>',
						'<div class="action">' + (type === 'confirm' ? ' <em class="cancel">取消</em>' : '') + '<em class="confirm">确定</em></div>',
					'</div>',
				'</div>'
			];	

			return arr.join('');
		},

		// 构建dom结构
		buildDom : function () {
			var domStr = this.getDomStr();
			var confirmBox = this.confirmBox = $(domStr);
			$('body').append(confirmBox);
			this.maskZoom().calcPos();

			return this;
		},

		// 确定弹窗的位置（margin值）
		calcPos : function () {
			var box = this.confirmBox.one('.box');	
			var size = box.height();
			var scrolltop = document.body.scrollTop;
			var viewSize = window.innerHeight;

			box.css('margin-top' , (scrolltop + (viewSize - size ) /2)  + 'px');
			this.confirmBox.css('visibility' , 'visible');

			return this;
		},
		
		// 初始化蒙层的边界，这里主要是高度
		maskZoom : function () {
			var viewSize = window.innerHeight , bodySize = document.body.offsetHeight;
			var mask = this.confirmBox.one('.mask');

			if (viewSize >= bodySize) {
				mask.css('height' , viewSize + 'px');	
			} else {
				mask.css('height' , bodySize + 'px');	
			}

			return this;
		},

		// 代理事件
		bindEvent : function () {
			var self = this;
			var box = this.confirmBox;

			box.delegate('click' , '.cancel' , function (e) {
				self.get('onCancel')();
				self.fire('cancel');
				self.destroy();
			}).delegate('click' , '.confirm' , function (e) {
				self.get('onConfirm')();
				self.fire('confirm');
				self.destroy();
			}).delegate('touchstart' , 'em' , function (e) {
				$(e.currentTarget).addClass('press');
			}).delegate('touchend' , 'em' , function (e) {
				$(e.currentTarget).removeClass('press');
			});
		},

		// 销毁弹窗
		destroy : function () {
			var self = this;
			self.confirmBox.remove();
			self = null;
		}


    } , {
		ATTRS : {
			
			wrap : {
				value : '#ks-w-confirm'
			},
			type : {
				value : 'confirm'	
			},
			tip : {
				value : '弹窗'	
			},
			onConfirm : {
				value : function () {}	
			},
			onCancel : {
				value : function () {}	
			}
		}
	});

    return Confirm;

} , {
	requires : ['node', 'base']
});

/**
 * @fileoverview 
 * @author 栋寒<donghan@taobao.com>
 * @module contacts
 **/
KISSY.add("gallery/contacts/1.0/index" , function (S , _ , Backbone , Iscroll , Pinyin , Confirm) {
	
	'use strict';

	window['C'] = {};
	
	var hook = {
		phonesbox : $('#phones .box'),
		getMorePhone : $('#getMore'),
		phonetmp : $('#phoneTmp'),
		showPhones : $('#showPhones .box'),
		sidebar : $('#sidebar'),
		selectNo : $('#toolbar em'),
		holder : $('#holder'),
		loading: $('#loading')
	};

	var timer;
	
	// 联系人数据元
	var PhoneModel = Backbone.Model.extend({});

	var SelectPhoneModel = Backbone.Model.extend({});

	// 联系人集合
	var PhoneCollection = Backbone.Collection.extend({
		model : PhoneModel,
		initialize : function () {
			this.frag = document.createDocumentFragment();
			this.bind('add' , this.addOne , false);		
		},
		
		// 数据集合中增加单条数据元的回调
		addOne : function (data , s , option) {
			var phoneview = new PhoneView({
				model : data	
			});	
			var el = phoneview.render().$el;
			$(this.frag).append(el);

			if (option.index === (s.length - 1)) {
				hook.getMorePhone.before(this.frag);
				hook.getMorePhone.removeClass('hidden');

				// 防止多次refresh
				timer && clearTimeout(timer);
				timer = setTimeout(function () {
					C.phoneScroll.refresh();
				} , 100);
			}
		},

		// 根据电话号码检索集合中是否存在数据元
		// 如存在，则返回name值；否则返回false
		getModelByAttr : function (phone) {
			var obj;
			this.each(function (v , index) {
				var number = v.get('phone');
				if (number === phone) {
					obj = {
						model : v,
						index : index
					};
					return false;
				}
			});				
			return obj;
		}
	});

	var phonecollection = new PhoneCollection();

	// 已选择联系人集合
	var SelectPhoneCollection = Backbone.Collection.extend({
		model : SelectPhoneModel,
		initialize : function () { 
			this.bind('add' , this.addOne , false);	
		},

		// 已经联系人集合增加单条数据的回调
		addOne : function (data) {
			var selectview = new SelectPhoneView({
				model : data	
			});
			selectview.render();
		},
		
		// 根据联系人视图中的数据元删除已选联系人中的数据
		_remove : function (data) {
			var _index;
			this.each(function (v , index) {
				if (v.get('name') === data.name) {
					_index = index;	
				}
			});	

			this.at(_index).destroy();
		},

		syncPhoneStatus : function (data) {
			var name = data.name;	
			phonecollection.each(function (v , index) {
				if (v.get('name') === name) {
					v.set('checked' , false);	
					return false;
				}	
			});
		}
		
	});

	// 创建已选择联系人集合的实例对象
	var selectphones = new SelectPhoneCollection();
	
	// 联系人视图
	var PhoneView = Backbone.View.extend({
		events : {
			'tap' : 'statusToggle'
		},

		initialize : function () {
			var self = this;
			var model = this.model;
			model.bind('change:checked' , this.checkedStatus , this);
		},
		
		// 当联系人被操作后,显示状态变化
		checkedStatus : function () {
			var model = this.model;
			var checked = model.get('checked'),
				checkbox = this.$el.find('.checkbox');
			checked ? checkbox.addClass('selected') : checkbox.removeClass('selected');
		},

		// 渲染单个联系人视图
		render : function () {
			var obj = this.model.toJSON() , renderTmp;
			if (typeof obj.index !== 'undefined') {
				this.$el.addClass('title');
				renderTmp = '<div><%= index %></div>';
			} else {
				this.$el.addClass('phoneItem');	
				renderTmp = hook.phonetmp.html();
			}

			var domStr = _.template(renderTmp , obj);
			this.$el.html(domStr);

			return this;
		},

		// 操作单个联系人回调
		statusToggle : function (e) {
			var self = this;
			var count = selectphones.length;

			var index = this.model.get('index');
			// 不是首字母项 
			if (typeof index === 'undefined') {
				var checked = this.model.get('checked');
				if (checked) {
					this.model.set('checked' , false);	
					selectphones._remove(this.model.toJSON());
				} else {
					var maxSelect = this.model.get('maxSelect');
					if (count < maxSelect) {
						this.model.set('checked' , true);	
						selectphones.add(this.model.toJSON());
					} else {
						new Confirm({
							tip : '最多只能添加' + maxSelect + '位好友',
							type : 'alert'
						});
					}
				}
			}
			
		}

	});
	
	// 已选联系人视图
	var SelectPhoneView = Backbone.View.extend({
		tagName : 'span',
		events : {
			//'longTap' : 'showDel',
			'click' : 'showDel',
			'touchstart' : 'press',
			'touchend' : 'press'
		},
		
		initialize : function () {
			this.model.bind('destroy' , this.remove , this);	
		},

		press : function (e) {
			var span = $(e.currentTarget);	
			span.toggleClass('press')
		},

		// 删除单个已选联系人
		remove : function () {
			this.$el.remove();	
			hook.selectNo.html(this.model.collection.length - 1);
			this.autoZoom();
			this.changeHolder(1);
		},

		// 提示删除已选赠送人
		showDel : function () {
			var self = this;
			var model = this.model;
			var data = model.toJSON();

			new Confirm({
				onConfirm: function(){
					self.model.collection.syncPhoneStatus(data);
					model.destroy();
				},
				tip: '取消对此人的赠送?'
			});
		},

		// 渲染单个已选联系人
		render : function () {
			var data = this.model.toJSON();
			var domStr = _.template('<%= name %>' , data);
			this.changeHolder(0);
			hook.holder.before(this.$el.html(domStr));
			hook.selectNo.html(this.model.collection.length);
			this.autoZoom();
		},
		
		// 修改已选联系人中的输入框的显示状态
		changeHolder : function (bug) {
			var mode = this.model , holder = hook.holder;
			var count = this.model.collection.length;
			// 当已选联系人为空时
			if (count > bug) {
				holder.attr({
					'placeholder' : ''
				}).val('').addClass('hidden').blur();
			} else {
				holder.attr({
					'placeholder' : '可输入手机号码',
				}).val('').removeClass('hidden').blur();
			}
		},
		
		// 已选择联系人区域自动缩放并做适当scroll,以保证最新添加的联系人显示在视图中 
		autoZoom : function () {
			var spans = hook.showPhones.find('span');	
			var totalWidth = 0 , maxWidth = $('body').width();

			for (var i = spans.length ; i -- ;) {
				totalWidth += spans.eq(i).width() + 5;	
			}
			totalWidth += 45;
			
			C.phoneScroll.refresh();
			// 如果已经超过一行
			if (totalWidth > maxWidth) {
				C.selectPhoneScroll.refresh();
				C.selectPhoneScroll.scrollToElement(spans[spans.length - 1]);
			} else {
				if (!C.selectPhoneScroll) {
					C.selectPhoneScroll = new Iscroll('showPhones' , {
						vScrollbar : false,
						bounce : false
					});	
				}	
			}
		}

	});

	// 联系人应用入口
	var PhoneApp = Backbone.View.extend({
		el : '#wrap',
		pageIndex : 0,

		events : {
			'click #sidebar li' : 'skipToIndex',
			'click #showPhones' : 'showHolder',
			'input #holder' : 'listen',
			'click #delall' : 'delall',
			'touchstart #delall' : 'press',
			'touchend #delall' : 'press',
			'touchstart #confirm' : 'press',
			'touchend #confirm' : 'press',
			'click #confirm' : 'done',
			'click #getMore' : 'pushData'
		},

		initialize : function (cfg) {
			var self = this;
			var data = (typeof cfg.data === 'undefined') ? [] : cfg.data;
			this.pageSize = (typeof cfg.pageSize === 'undefined') ? 50 : cfg.pageSize;
			var preSelectArr = (typeof cfg.preSelectArr === 'undefined') ? [] : cfg.preSelectArr;
			this.maxSelect = (typeof cfg.maxSelect === 'undefined') ? 20 : cfg.maxSelect;
			var normalDataOptions = this.getPhoneDataNormal(data)

			var normalData = this.normalData = normalDataOptions.normalData;

			this.buildPhoneScroll();

			this.pushData();

			// 保证后触发事件
			_.delay(function () {
				self.prevSelectPhones(preSelectArr);	
			} , 0);
			
				
		},

		// 初始化已经选择的联系人
		// 通常是从增彩页带过来的数据
		prevSelectPhones : function (prevSelectArr) {

			if (prevSelectArr) {
				prevSelectArr.forEach(function (v , index) {
					var inPhoneList = false;
					phonecollection.each(function (val , i) {
						var phone = val.get('phone');
						if (v === phone) {
							inPhoneList = i;
						}	
					});
					if (inPhoneList) {
						phonecollection.at(inPhoneList).set('checked' , true);
						selectphones.add(phonecollection.at(inPhoneList).toJSON());
					} else {
						selectphones.add({
							name : v,
							phone: v
						});
					}
				});

			}
			this.trigger('readAfter');
		},
		
		// 添加联系人完成
		done : function () {
			var arr = [] , localstr;
			if (selectphones.length === 0) {
				new Confirm({
					tip : '您还未选择联系人',
					type : 'alert'
				});
				return;
			}
			this.trigger('selectDone' ,  selectphones.toJSON());
		},

		// 各种按钮的二态
		press : function (e) {
			var obj = $(e.currentTarget);
			obj.toggleClass('press');
		},

		// 清空所有已选联系人
		delall : function () {
			new Confirm({
				onConfirm: function(){
					for (var i = selectphones.length ; i -- ;) {
						selectphones.syncPhoneStatus(selectphones.at(i).toJSON());
						selectphones.at(i).destroy();	
					}
				},
				tip : '清空所有已选联系人?'
			});
		},
		
		
		// 输入手机号监听
		listen : function (e) {
			var obj = $(e.currentTarget);	 
			var val = obj.val() , data = {};
			if (val.length === 11) {
				var matchRes = phonecollection.getModelByAttr(val);
				if (matchRes) {
					data.name = matchRes.model.get('name');
					phonecollection.at(matchRes.index).set('checked' , true);
				} else {
					data.name = val;
				}
				data.phone = val;
				selectphones.add(data);
			}
		},

		// 已经联系人区域点击回调
		showHolder : function (e) {
			var obj = $(e.target);
			if (obj.hasClass('box')) {
				hook.holder.removeClass('hidden').attr('placeholder' , '可输入手机号码');
			}
		},
		
		// 创建联系人视图滚动
		// 载入真实数据后只需进行refresh即可
		buildPhoneScroll : function () {
			C.phoneScroll = new Iscroll ('phones' , {
				vScrollbar : false	
			});	
		},
		
		// 向联系人集合推送数据元
		pushData : function () {
			var self = this;
			var arr = [] , normalData = this.normalData;
			hook.loading.addClass('hidden');

			var len = normalData.length;
			var maxIndex = Math.ceil(len / (this.pageSize));
			
			var firstChatArr = [];

			if (this.pageIndex >= maxIndex) {
				new Confirm({
					tip : '没有更多联系人',
					type : 'alert'
				});
				return;
			}

			var curData = normalData.slice(this.pageIndex * this.pageSize , (this.pageIndex++ + 1) * this.pageSize);

			curData.forEach(function (v , index) {
				if (typeof v === 'string') {
					arr.push({
						index : v
					});
					firstChatArr.push(v);
				} else {
					for (var i in v) {
						arr.push({
							name : i,
							phone : v[i],
							maxSelect : self.maxSelect
						});
					}
				}
			});
			
			phonecollection.add(arr);
			this.createIndex(firstChatArr);
		},

		

		// 处理源数据返回正确的格式
		// 比如: 
		// {
		//		a : {
		//			'阿欢' : '13345678765',
		//			'阿福' : '15112344321'
		//		},
		//		b : {
		//			'比伯' : '14612344321'	
		//		}
		// }
		getPhoneDataNormal : function (data) {
			var firstChatArry = [] , normalData = {} , formatData = {} , formatIndexData = [];
			var arr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

			data.forEach(function (v , index) {
				var pinyin = new Pinyin();
				var firstchat = pinyin.getFullChars(v.name[0]).toUpperCase();
				firstChatArry.push(firstchat[0]);

				if (typeof normalData[firstchat[0]] === 'undefined') {
					normalData[firstchat[0]] = {};		
				}
				normalData[firstchat[0]][v.name.length > 6 ? v.name.substr(0 , 6) : v.name] = v.phone;
			});

			firstChatArry = S.unique(firstChatArry);
			
			arr.forEach(function (val , i) {
				if (typeof normalData[val] !== 'undefined') {
					formatData[val] = normalData[val];
				}
				if (firstChatArry.indexOf(val) >= 0) {
					formatIndexData.push(val);
				}
			});
			
			var lastResult = [];

			for (var i in formatData) {
				var val = formatData[i];
				lastResult.push(i);
				for (var j in val) {
					var obj = {};
					obj[j] = val[j];
					lastResult.push(obj);
				}
			}

			return {
				normalData : lastResult
			};
		},

		// 创建右侧首字母检索
		createIndex : function (arr) {
			var str = '';
			var sidebar = hook.sidebar;

			arr.forEach(function (v) {
				str += '<li>' + v + '</li>';	
			});

			sidebar.append(str);
			sidebar.css('height' , S.one('body').height() - 95 + 'px');

		} , 

		// 点击右侧检索字母,联系人跳转到相应位置
		skipToIndex : function (e) {
			var index = $(e.currentTarget).html();
			var dts = hook.phonesbox.find('.title') , _index;
			for (var i = dts.length ; i-- ; ) {
				var div = dts.eq(i).find('div');
				if (div.html() === index) {
					_index = i;
					break;
				}	
			}
			C.phoneScroll.scrollToElement(dts[_index]);
		}

	});


	return PhoneApp;

} , {
	
	requires : ['gallery/contacts/1.0/underscore' , 'gallery/contacts/1.0/backbone' , 'gallery/contacts/1.0/iscroll' , 'gallery/contacts/1.0/pinyin' , 'gallery/contacts/1.0/confirm' , 'base']

});



