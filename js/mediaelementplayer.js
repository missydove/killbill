/*!
 * MediaElement.js
 * http://www.mediaelement.com/
 *
 * Wrapper that mimics native HTML5 MediaElement (audio and video)
 * using a variety of technologies (pure JavaScript, Flash, iframe)
 *
 * Copyright 2010-2017, John Dyer (http://j.hn/)
 * License: MIT
 *
 */
! function a(b, c, d) {
    function e(g, h) {
        if (!c[g]) {
            if (!b[g]) {
                var i = "function" == typeof require && require;
                if (!h && i) return i(g, !0);
                if (f) return f(g, !0);
                var j = new Error("Cannot find module '" + g + "'");
                throw j.code = "MODULE_NOT_FOUND", j
            }
            var k = c[g] = {
                exports: {}
            };
            b[g][0].call(k.exports, function (a) {
                var c = b[g][1][a];
                return e(c ? c : a)
            }, k, k.exports, a, b, c, d)
        }
        return c[g].exports
    }
    for (var f = "function" == typeof require && require, g = 0; g < d.length; g++) e(d[g]);
    return e
}({
    1: [function (a, b, c) {}, {}],
    2: [function (a, b, c) {
        (function (c) {
            var d = "undefined" != typeof c ? c : "undefined" != typeof window ? window : {},
                e = a(1);
            if ("undefined" != typeof document) b.exports = document;
            else {
                var f = d["__GLOBAL_DOCUMENT_CACHE@4"];
                f || (f = d["__GLOBAL_DOCUMENT_CACHE@4"] = e), b.exports = f
            }
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        1: 1
    }],
    3: [function (a, b, c) {
        (function (a) {
            "undefined" != typeof window ? b.exports = window : "undefined" != typeof a ? b.exports = a : "undefined" != typeof self ? b.exports = self : b.exports = {}
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {}],
    4: [function (a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {
                "default": a
            }
        }
        Object.defineProperty(c, "__esModule", {
            value: !0
        });
        var e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (a) {
                return typeof a
            } : function (a) {
                return a && "function" == typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a
            },
            f = a(6),
            g = d(f),
            h = a(14),
            i = a(21),
            j = {
                lang: "en",
                en: h.EN
            };
        j.language = function () {
            for (var a = arguments.length, b = Array(a), c = 0; a > c; c++) b[c] = arguments[c];
            if (null !== b && void 0 !== b && b.length) {
                if ("string" != typeof b[0]) throw new TypeError("Language code must be a string value");
                if (!b[0].match(/^[a-z]{2}(\-[a-z]{2})?$/i)) throw new TypeError("Language code must have format `xx` or `xx-xx`");
                j.lang = b[0], void 0 === j[b[0]] ? (b[1] = null !== b[1] && void 0 !== b[1] && "object" === e(b[1]) ? b[1] : {}, j[b[0]] = i.isObjectEmpty(b[1]) ? h.EN : b[1]) : null !== b[1] && void 0 !== b[1] && "object" === e(b[1]) && (j[b[0]] = b[1])
            }
            return j.lang
        }, j.t = function (a) {
            var b = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            if ("string" == typeof a && a.length) {
                var c = void 0,
                    d = void 0,
                    f = j.language(),
                    g = function (a, b, c) {
                        if ("object" !== ("undefined" == typeof a ? "undefined" : e(a)) || "number" != typeof b || "number" != typeof c) return a;
                        var d = function () {
                            return [function () {
                                return arguments.length <= 1 ? void 0 : arguments[1]
                            }, function () {
                                return 1 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 1 ? void 0 : arguments[1] : arguments.length <= 2 ? void 0 : arguments[2]
                            }, function () {
                                return 0 === (arguments.length <= 0 ? void 0 : arguments[0]) || 1 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 1 ? void 0 : arguments[1] : arguments.length <= 2 ? void 0 : arguments[2]
                            }, function () {
                                return (arguments.length <= 0 ? void 0 : arguments[0]) % 10 === 1 && (arguments.length <= 0 ? void 0 : arguments[0]) % 100 !== 11 ? arguments.length <= 1 ? void 0 : arguments[1] : 0 !== (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 2 ? void 0 : arguments[2] : arguments.length <= 3 ? void 0 : arguments[3]
                            }, function () {
                                return 1 === (arguments.length <= 0 ? void 0 : arguments[0]) || 11 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 1 ? void 0 : arguments[1] : 2 === (arguments.length <= 0 ? void 0 : arguments[0]) || 12 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 2 ? void 0 : arguments[2] : (arguments.length <= 0 ? void 0 : arguments[0]) > 2 && (arguments.length <= 0 ? void 0 : arguments[0]) < 20 ? arguments.length <= 3 ? void 0 : arguments[3] : arguments.length <= 4 ? void 0 : arguments[4]
                            }, function () {
                                return 1 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 1 ? void 0 : arguments[1] : 0 === (arguments.length <= 0 ? void 0 : arguments[0]) || (arguments.length <= 0 ? void 0 : arguments[0]) % 100 > 0 && (arguments.length <= 0 ? void 0 : arguments[0]) % 100 < 20 ? arguments.length <= 2 ? void 0 : arguments[2] : arguments.length <= 3 ? void 0 : arguments[3]
                            }, function () {
                                return (arguments.length <= 0 ? void 0 : arguments[0]) % 10 === 1 && (arguments.length <= 0 ? void 0 : arguments[0]) % 100 !== 11 ? arguments.length <= 1 ? void 0 : arguments[1] : (arguments.length <= 0 ? void 0 : arguments[0]) % 10 >= 2 && ((arguments.length <= 0 ? void 0 : arguments[0]) % 100 < 10 || (arguments.length <= 0 ? void 0 : arguments[0]) % 100 >= 20) ? arguments.length <= 2 ? void 0 : arguments[2] : [3]
                            }, function () {
                                return (arguments.length <= 0 ? void 0 : arguments[0]) % 10 === 1 && (arguments.length <= 0 ? void 0 : arguments[0]) % 100 !== 11 ? arguments.length <= 1 ? void 0 : arguments[1] : (arguments.length <= 0 ? void 0 : arguments[0]) % 10 >= 2 && (arguments.length <= 0 ? void 0 : arguments[0]) % 10 <= 4 && ((arguments.length <= 0 ? void 0 : arguments[0]) % 100 < 10 || (arguments.length <= 0 ? void 0 : arguments[0]) % 100 >= 20) ? arguments.length <= 2 ? void 0 : arguments[2] : arguments.length <= 3 ? void 0 : arguments[3]
                            }, function () {
                                return 1 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 1 ? void 0 : arguments[1] : (arguments.length <= 0 ? void 0 : arguments[0]) >= 2 && (arguments.length <= 0 ? void 0 : arguments[0]) <= 4 ? arguments.length <= 2 ? void 0 : arguments[2] : arguments.length <= 3 ? void 0 : arguments[3]
                            }, function () {
                                return 1 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 1 ? void 0 : arguments[1] : (arguments.length <= 0 ? void 0 : arguments[0]) % 10 >= 2 && (arguments.length <= 0 ? void 0 : arguments[0]) % 10 <= 4 && ((arguments.length <= 0 ? void 0 : arguments[0]) % 100 < 10 || (arguments.length <= 0 ? void 0 : arguments[0]) % 100 >= 20) ? arguments.length <= 2 ? void 0 : arguments[2] : arguments.length <= 3 ? void 0 : arguments[3]
                            }, function () {
                                return (arguments.length <= 0 ? void 0 : arguments[0]) % 100 === 1 ? arguments.length <= 2 ? void 0 : arguments[2] : (arguments.length <= 0 ? void 0 : arguments[0]) % 100 === 2 ? arguments.length <= 3 ? void 0 : arguments[3] : (arguments.length <= 0 ? void 0 : arguments[0]) % 100 === 3 || (arguments.length <= 0 ? void 0 : arguments[0]) % 100 === 4 ? arguments.length <= 4 ? void 0 : arguments[4] : arguments.length <= 1 ? void 0 : arguments[1]
                            }, function () {
                                return 1 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 1 ? void 0 : arguments[1] : 2 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 2 ? void 0 : arguments[2] : (arguments.length <= 0 ? void 0 : arguments[0]) > 2 && (arguments.length <= 0 ? void 0 : arguments[0]) < 7 ? arguments.length <= 3 ? void 0 : arguments[3] : (arguments.length <= 0 ? void 0 : arguments[0]) > 6 && (arguments.length <= 0 ? void 0 : arguments[0]) < 11 ? arguments.length <= 4 ? void 0 : arguments[4] : arguments.length <= 5 ? void 0 : arguments[5]
                            }, function () {
                                return 0 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 1 ? void 0 : arguments[1] : 1 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 2 ? void 0 : arguments[2] : 2 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 3 ? void 0 : arguments[3] : (arguments.length <= 0 ? void 0 : arguments[0]) % 100 >= 3 && (arguments.length <= 0 ? void 0 : arguments[0]) % 100 <= 10 ? arguments.length <= 4 ? void 0 : arguments[4] : (arguments.length <= 0 ? void 0 : arguments[0]) % 100 >= 11 ? arguments.length <= 5 ? void 0 : arguments[5] : arguments.length <= 6 ? void 0 : arguments[6]
                            }, function () {
                                return 1 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 1 ? void 0 : arguments[1] : 0 === (arguments.length <= 0 ? void 0 : arguments[0]) || (arguments.length <= 0 ? void 0 : arguments[0]) % 100 > 1 && (arguments.length <= 0 ? void 0 : arguments[0]) % 100 < 11 ? arguments.length <= 2 ? void 0 : arguments[2] : (arguments.length <= 0 ? void 0 : arguments[0]) % 100 > 10 && (arguments.length <= 0 ? void 0 : arguments[0]) % 100 < 20 ? arguments.length <= 3 ? void 0 : arguments[3] : arguments.length <= 4 ? void 0 : arguments[4]
                            }, function () {
                                return (arguments.length <= 0 ? void 0 : arguments[0]) % 10 === 1 ? arguments.length <= 1 ? void 0 : arguments[1] : (arguments.length <= 0 ? void 0 : arguments[0]) % 10 === 2 ? arguments.length <= 2 ? void 0 : arguments[2] : arguments.length <= 3 ? void 0 : arguments[3]
                            }, function () {
                                return 11 !== (arguments.length <= 0 ? void 0 : arguments[0]) && (arguments.length <= 0 ? void 0 : arguments[0]) % 10 === 1 ? arguments.length <= 1 ? void 0 : arguments[1] : arguments.length <= 2 ? void 0 : arguments[2]
                            }, function () {
                                return 1 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 1 ? void 0 : arguments[1] : (arguments.length <= 0 ? void 0 : arguments[0]) % 10 >= 2 && (arguments.length <= 0 ? void 0 : arguments[0]) % 10 <= 4 && ((arguments.length <= 0 ? void 0 : arguments[0]) % 100 < 10 || (arguments.length <= 0 ? void 0 : arguments[0]) % 100 >= 20) ? arguments.length <= 2 ? void 0 : arguments[2] : arguments.length <= 3 ? void 0 : arguments[3]
                            }, function () {
                                return 1 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 1 ? void 0 : arguments[1] : 2 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 2 ? void 0 : arguments[2] : 8 !== (arguments.length <= 0 ? void 0 : arguments[0]) && 11 !== (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 3 ? void 0 : arguments[3] : arguments.length <= 4 ? void 0 : arguments[4]
                            }, function () {
                                return 0 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 1 ? void 0 : arguments[1] : arguments.length <= 2 ? void 0 : arguments[2]
                            }, function () {
                                return 1 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 1 ? void 0 : arguments[1] : 2 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 2 ? void 0 : arguments[2] : 3 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 3 ? void 0 : arguments[3] : arguments.length <= 4 ? void 0 : arguments[4]
                            }, function () {
                                return 0 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 1 ? void 0 : arguments[1] : 1 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 2 ? void 0 : arguments[2] : arguments.length <= 3 ? void 0 : arguments[3]
                            }]
                        }();
                        return d[c].apply(null, [b].concat(a))
                    };
                return void 0 !== j[f] && (c = j[f][a], null !== b && "number" == typeof b && (d = j[f]["mejs.plural-form"], c = g.apply(null, [c, b, d]))), !c && j.en && (c = j.en[a], null !== b && "number" == typeof b && (d = j.en["mejs.plural-form"], c = g.apply(null, [c, b, d]))), c = c || a, null !== b && "number" == typeof b && (c = c.replace("%1", b)), i.escapeHTML(c)
            }
            return a
        }, g["default"].i18n = j, "undefined" != typeof mejsL10n && g["default"].i18n.language(mejsL10n.language, mejsL10n.strings), c["default"] = j
    }, {
        14: 14,
        21: 21,
        6: 6
    }],
    5: [function (a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {
                "default": a
            }
        }

        function e(a, b) {
            if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(c, "__esModule", {
            value: !0
        });
        var f = a(3),
            g = d(f),
            h = a(2),
            i = d(h),
            j = a(6),
            k = d(j),
            l = a(22),
            m = a(7),
            n = function o(a, b) {
                var c = this;
                e(this, o);
                var d = this;
                d.defaults = {
                    renderers: [],
                    fakeNodeName: "mediaelementwrapper",
                    pluginPath: "build/"
                }, b = Object.assign(d.defaults, b), d.mediaElement = i["default"].createElement(b.fakeNodeName), d.mediaElement.options = b;
                var f = a,
                    g = void 0,
                    h = void 0;
                "string" == typeof a ? d.mediaElement.originalNode = i["default"].getElementById(a) : (d.mediaElement.originalNode = a, f = a.id), f = f || "mejs_" + Math.random().toString().slice(2), void 0 !== d.mediaElement.originalNode && null !== d.mediaElement.originalNode && d.mediaElement.appendChild && (d.mediaElement.originalNode.setAttribute("id", f + "_from_mejs"), d.mediaElement.originalNode.parentNode.insertBefore(d.mediaElement, d.mediaElement.originalNode), d.mediaElement.appendChild(d.mediaElement.originalNode)), d.mediaElement.id = f, d.mediaElement.renderers = {}, d.mediaElement.renderer = null, d.mediaElement.rendererName = null, d.mediaElement.changeRenderer = function (a, b) {
                    var d = c;
                    if (void 0 !== d.mediaElement.renderer && null !== d.mediaElement.renderer && d.mediaElement.renderer.name === a) return d.mediaElement.renderer.pause(), d.mediaElement.renderer.stop && d.mediaElement.renderer.stop(), d.mediaElement.renderer.show(), d.mediaElement.renderer.setSrc(b[0].src), !0;
                    void 0 !== d.mediaElement.renderer && null !== d.mediaElement.renderer && (d.mediaElement.renderer.pause(), d.mediaElement.renderer.stop && d.mediaElement.renderer.stop(), d.mediaElement.renderer.hide());
                    var e = d.mediaElement.renderers[a],
                        f = null;
                    if (void 0 !== e && null !== e) return e.show(), e.setSrc(b[0].src), d.mediaElement.renderer = e, d.mediaElement.rendererName = a, !0;
                    var i = d.mediaElement.options.renderers.length ? d.mediaElement.options.renderers : m.renderer.order;
                    for (g = 0, h = i.length; h > g; g++) {
                        var j = i[g];
                        if (j === a) {
                            var k = m.renderer.renderers;
                            f = k[j];
                            var l = Object.assign(f.options, d.mediaElement.options);
                            return e = f.create(d.mediaElement, l, b), e.name = a, d.mediaElement.renderers[f.name] = e, d.mediaElement.renderer = e, d.mediaElement.rendererName = a, e.show(), !0
                        }
                    }
                    return !1
                }, d.mediaElement.setSize = function (a, b) {
                    void 0 !== d.mediaElement.renderer && null !== d.mediaElement.renderer && d.mediaElement.renderer.setSize(a, b)
                };
                var j = k["default"].html5media.properties,
                    n = k["default"].html5media.methods,
                    p = function (a, b, c, d) {
                        var e = a[b],
                            f = function () {
                                return c.apply(a, [e])
                            },
                            g = function (b) {
                                return e = d.apply(a, [b])
                            };
                        Object.defineProperty ? Object.defineProperty(a, b, {
                            get: f,
                            set: g
                        }) : a.__defineGetter__ && (a.__defineGetter__(b, f), a.__defineSetter__(b, g))
                    },
                    q = function (a) {
                        "src" !== a && ! function () {
                            var b = "" + a.substring(0, 1).toUpperCase() + a.substring(1),
                                c = function () {
                                    return void 0 !== d.mediaElement.renderer && null !== d.mediaElement.renderer ? d.mediaElement.renderer["get" + b]() : null
                                },
                                e = function (a) {
                                    void 0 !== d.mediaElement.renderer && null !== d.mediaElement.renderer && d.mediaElement.renderer["set" + b](a)
                                };
                            p(d.mediaElement, a, c, e), d.mediaElement["get" + b] = c, d.mediaElement["set" + b] = e
                        }()
                    },
                    r = function () {
                        return void 0 !== d.mediaElement.renderer && null !== d.mediaElement.renderer ? d.mediaElement.renderer.getSrc() : null
                    },
                    s = function (a) {
                        var b = [];
                        if ("string" == typeof a) b.push({
                            src: a,
                            type: a ? l.getTypeFromFile(a) : ""
                        });
                        else
                            for (g = 0, h = a.length; h > g; g++) {
                                var c = l.absolutizeUrl(a[g].src),
                                    e = a[g].type;
                                b.push({
                                    src: c,
                                    type: "" !== e && null !== e && void 0 !== e || !c ? e : l.getTypeFromFile(c)
                                })
                            }
                        var f = m.renderer.select(b, d.mediaElement.options.renderers.length ? d.mediaElement.options.renderers : []),
                            j = void 0;
                        return d.mediaElement.originalNode.setAttribute("src", b[0].src || ""), null === f ? (j = i["default"].createEvent("HTMLEvents"), j.initEvent("error", !1, !1), j.message = "No renderer found", void d.mediaElement.dispatchEvent(j)) : (d.mediaElement.changeRenderer(f.rendererName, b), void((void 0 === d.mediaElement.renderer || null === d.mediaElement.renderer) && (j = i["default"].createEvent("HTMLEvents"), j.initEvent("error", !1, !1), j.message = "Error creating renderer", d.mediaElement.dispatchEvent(j))))
                    },
                    t = function (a) {
                        d.mediaElement[a] = function () {
                            for (var b = arguments.length, c = Array(b), e = 0; b > e; e++) c[e] = arguments[e];
                            return void 0 !== d.mediaElement.renderer && null !== d.mediaElement.renderer && "function" == typeof d.mediaElement.renderer[a] ? d.mediaElement.renderer[a](c) : null
                        }
                    };
                for (p(d.mediaElement, "src", r, s), d.mediaElement.getSrc = r, d.mediaElement.setSrc = s, g = 0, h = j.length; h > g; g++) q(j[g]);
                for (g = 0, h = n.length; h > g; g++) t(n[g]);
                if (d.mediaElement.addEventListener || (d.mediaElement.events = {}, d.mediaElement.addEventListener = function (a, b) {
                        d.mediaElement.events[a] = d.mediaElement.events[a] || [], d.mediaElement.events[a].push(b)
                    }, d.mediaElement.removeEventListener = function (a, b) {
                        if (!a) return d.mediaElement.events = {}, !0;
                        var c = d.mediaElement.events[a];
                        if (!c) return !0;
                        if (!b) return d.mediaElement.events[a] = [], !0;
                        for (var e = 0, f = c.length; f > e; e++)
                            if (c[e] === b) return d.mediaElement.events[a].splice(e, 1), !0;
                        return !1
                    }, d.mediaElement.dispatchEvent = function (a) {
                        var b = d.mediaElement.events[a.type];
                        if (b)
                            for (g = 0, h = b.length; h > g; g++) b[g].apply(null, [a])
                    }), null !== d.mediaElement.originalNode) {
                    var u = [];
                    switch (d.mediaElement.originalNode.nodeName.toLowerCase()) {
                    case "iframe":
                        u.push({
                            type: "",
                            src: d.mediaElement.originalNode.getAttribute("src")
                        });
                        break;
                    case "audio":
                    case "video":
                        var v = void 0,
                            w = void 0,
                            x = void 0,
                            y = d.mediaElement.originalNode.childNodes.length,
                            z = d.mediaElement.originalNode.getAttribute("src");
                        if (z) {
                            var A = d.mediaElement.originalNode;
                            u.push({
                                type: l.formatType(z, A.getAttribute("type")),
                                src: z
                            })
                        }
                        for (g = 0; y > g; g++) v = d.mediaElement.originalNode.childNodes[g], v.nodeType === Node.ELEMENT_NODE && "source" === v.tagName.toLowerCase() && (w = v.getAttribute("src"), x = l.formatType(w, v.getAttribute("type")), u.push({
                            type: x,
                            src: w
                        }))
                    }
                    u.length > 0 && (d.mediaElement.src = u)
                }
                return d.mediaElement.options.success && d.mediaElement.options.success(d.mediaElement, d.mediaElement.originalNode), d.mediaElement
            };
        g["default"].MediaElement = n, c["default"] = n
    }, {
        2: 2,
        22: 22,
        3: 3,
        6: 6,
        7: 7
    }],
    6: [function (a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {
                "default": a
            }
        }
        Object.defineProperty(c, "__esModule", {
            value: !0
        });
        var e = a(3),
            f = d(e),
            g = {};
        g.version = "3.1.1", g.html5media = {
            properties: ["volume", "src", "currentTime", "muted", "duration", "paused", "ended", "buffered", "error", "networkState", "readyState", "seeking", "seekable", "currentSrc", "preload", "bufferedBytes", "bufferedTime", "initialTime", "startOffsetTime", "defaultPlaybackRate", "playbackRate", "played", "autoplay", "loop", "controls"],
            readOnlyProperties: ["duration", "paused", "ended", "buffered", "error", "networkState", "readyState", "seeking", "seekable"],
            methods: ["load", "play", "pause", "canPlayType"],
            events: ["loadstart", "progress", "suspend", "abort", "error", "emptied", "stalled", "play", "pause", "loadedmetadata", "loadeddata", "waiting", "playing", "canplay", "canplaythrough", "seeking", "seeked", "timeupdate", "ended", "ratechange", "durationchange", "volumechange"],
            mediaTypes: ["audio/mp3", "audio/ogg", "audio/oga", "audio/wav", "audio/x-wav", "audio/wave", "audio/x-pn-wav", "audio/mpeg", "audio/mp4", "video/mp4", "video/webm", "video/ogg"]
        }, f["default"].mejs = g, c["default"] = g
    }, {
        3: 3
    }],
    7: [function (a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {
                "default": a
            }
        }

        function e(a, b) {
            if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(c, "__esModule", {
            value: !0
        }), c.renderer = void 0;
        var f = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (a) {
                return typeof a
            } : function (a) {
                return a && "function" == typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a
            },
            g = function () {
                function a(a, b) {
                    for (var c = 0; c < b.length; c++) {
                        var d = b[c];
                        d.enumerable = d.enumerable || !1, d.configurable = !0, "value" in d && (d.writable = !0), Object.defineProperty(a, d.key, d)
                    }
                }
                return function (b, c, d) {
                    return c && a(b.prototype, c), d && a(b, d), b
                }
            }(),
            h = a(6),
            i = d(h),
            j = function () {
                function a() {
                    e(this, a), this.renderers = {}, this.order = []
                }
                return g(a, [{
                    key: "add",
                    value: function (a) {
                        if (void 0 === a.name) throw new TypeError("renderer must contain at least `name` property");
                        this.renderers[a.name] = a, this.order.push(a.name)
                    }
                }, {
                    key: "select",
                    value: function (a) {
                        var b = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                        b = b.length ? b : this.order;
                        for (var c = 0, d = b.length; d > c; c++) {
                            var e = b[c],
                                f = this.renderers[e];
                            if (null !== f && void 0 !== f)
                                for (var g = 0, h = a.length; h > g; g++)
                                    if ("function" == typeof f.canPlayType && "string" == typeof a[g].type && f.canPlayType(a[g].type)) return {
                                        rendererName: f.name,
                                        src: a[g].src
                                    }
                        }
                        return null
                    }
                }, {
                    key: "order",
                    set: function (a) {
                        if (!Array.isArray(a)) throw new TypeError("order must be an array of strings.");
                        this._order = a
                    },
                    get: function () {
                        return this._order
                    }
                }, {
                    key: "renderers",
                    set: function (a) {
                        if (null !== a && "object" !== ("undefined" == typeof a ? "undefined" : f(a))) throw new TypeError("renderers must be an array of objects.");
                        this._renderers = a
                    },
                    get: function () {
                        return this._renderers
                    }
                }]), a
            }(),
            k = c.renderer = new j;
        i["default"].Renderers = k
    }, {
        6: 6
    }],
    8: [function (a, b, c) {
        "use strict";

        function d(a) {
            if (a && a.__esModule) return a;
            var b = {};
            if (null != a)
                for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && (b[c] = a[c]);
            return b["default"] = a, b
        }

        function e(a) {
            return a && a.__esModule ? a : {
                "default": a
            }
        }
        var f = a(3),
            g = e(f),
            h = a(2),
            i = e(h),
            j = a(6),
            k = (e(j), a(4)),
            l = e(k),
            m = a(16),
            n = e(m),
            o = a(19),
            p = d(o);
        Object.assign(m.config, {
            usePluginFullScreen: !0,
            fullscreenText: ""
        }), Object.assign(n["default"].prototype, {
            isFullScreen: !1,
            isNativeFullScreen: !1,
            isInIframe: !1,
            isPluginClickThroughCreated: !1,
            fullscreenMode: "",
            containerSizeTimeout: null,
            buildfullscreen: function (a, b, c, d) {
                if (a.isVideo) {
                    a.isInIframe = g["default"].location !== g["default"].parent.location, d.addEventListener("loadstart", function () {
                        a.detectFullscreenMode()
                    });
                    var e = this,
                        f = null,
                        h = e.options.fullscreenText ? e.options.fullscreenText : l["default"].t("mejs.fullscreen"),
                        i = $('<div class="' + e.options.classPrefix + "button " + e.options.classPrefix + 'fullscreen-button">' + ('<button type="button" aria-controls="' + e.id + '" title="' + h + '" aria-label="' + h + '"></button>') + "</div>").appendTo(b).on("click", function () {
                            var b = p.HAS_TRUE_NATIVE_FULLSCREEN && p.IS_FULLSCREEN || a.isFullScreen;
                            b ? a.exitFullScreen() : a.enterFullScreen()
                        }).on("mouseover", function () {
                            if ("plugin-hover" === e.fullscreenMode) {
                                null !== f && (clearTimeout(f), f = null);
                                var b = i.offset(),
                                    c = a.container.offset();
                                d.positionFullscreenButton(b.left - c.left, b.top - c.top, !0)
                            }
                        }).on("mouseout", function () {
                            "plugin-hover" === e.fullscreenMode && (null !== f && clearTimeout(f), f = setTimeout(function () {
                                d.hideFullscreenButton()
                            }, 1500))
                        });
                    if (a.fullscreenBtn = i, e.globalBind("keydown", function (b) {
                            var c = b.which || b.keyCode || 0;
                            27 === c && (p.HAS_TRUE_NATIVE_FULLSCREEN && p.IS_FULLSCREEN || e.isFullScreen) && a.exitFullScreen()
                        }), e.normalHeight = 0, e.normalWidth = 0, p.HAS_TRUE_NATIVE_FULLSCREEN) {
                        var j = function () {
                            a.isFullScreen && (p.isFullScreen() ? (a.isNativeFullScreen = !0, a.setControlsSize()) : (a.isNativeFullScreen = !1, a.exitFullScreen()))
                        };
                        a.globalBind(p.FULLSCREEN_EVENT_NAME, j)
                    }
                }
            },
            detectFullscreenMode: function () {
                var a = this,
                    b = "",
                    c = null !== a.media.rendererName && null !== a.media.rendererName.match(/(native|html5)/);
                return p.HAS_TRUE_NATIVE_FULLSCREEN && c ? b = "native-native" : p.HAS_TRUE_NATIVE_FULLSCREEN && !c ? b = "plugin-native" : a.usePluginFullScreen ? p.SUPPORT_POINTER_EVENTS ? (b = "plugin-click", a.createPluginClickThrough()) : b = "plugin-hover" : b = "fullwindow", a.fullscreenMode = b, b
            },
            createPluginClickThrough: function () {
                var a = this;
                if (!a.isPluginClickThroughCreated) {
                    var b = !1,
                        c = function () {
                            if (b) {
                                for (var c in d) d[c].hide();
                                a.fullscreenBtn.css("pointer-events", ""), a.controls.css("pointer-events", ""), a.media.removeEventListener("click", a.clickToPlayPauseCallback), b = !1
                            }
                        },
                        d = {},
                        e = ["top", "left", "right", "bottom"],
                        f = function () {
                            var b = fullscreenBtn.offset().left - a.container.offset().left,
                                c = fullscreenBtn.offset().top - a.container.offset().top,
                                e = fullscreenBtn.outerWidth(!0),
                                f = fullscreenBtn.outerHeight(!0),
                                g = a.container.width(),
                                h = a.container.height();
                            for (var i in d) i.css({
                                position: "absolute",
                                top: 0,
                                left: 0
                            });
                            d.top.width(g).height(c), d.left.width(b).height(f).css({
                                top: c
                            }), d.right.width(g - b - e).height(f).css({
                                top: c,
                                left: b + e
                            }), d.bottom.width(g).height(h - f - c).css({
                                top: c + f
                            })
                        };
                    a.globalBind("resize", function () {
                        f()
                    });
                    for (var g = 0, h = e.length; h > g; g++) d[e[g]] = $('<div class="' + a.options.classPrefix + 'fullscreen-hover" />').appendTo(a.container).mouseover(c).hide();
                    fullscreenBtn.on("mouseover", function () {
                        if (!a.isFullScreen) {
                            var c = fullscreenBtn.offset(),
                                e = player.container.offset();
                            media.positionFullscreenButton(c.left - e.left, c.top - e.top, !1), a.fullscreenBtn.css("pointer-events", "none"), a.controls.css("pointer-events", "none"), a.media.addEventListener("click", a.clickToPlayPauseCallback);
                            for (var g in d) d[g].show();
                            f(), b = !0
                        }
                    }), media.addEventListener("fullscreenchange", function () {
                        a.isFullScreen = !a.isFullScreen, a.isFullScreen ? a.media.removeEventListener("click", a.clickToPlayPauseCallback) : a.media.addEventListener("click", a.clickToPlayPauseCallback), c()
                    }), a.globalBind("mousemove", function (c) {
                        if (b) {
                            var d = fullscreenBtn.offset();
                            (c.pageY < d.top || c.pageY > d.top + fullscreenBtn.outerHeight(!0) || c.pageX < d.left || c.pageX > d.left + fullscreenBtn.outerWidth(!0)) && (fullscreenBtn.css("pointer-events", ""), a.controls.css("pointer-events", ""), b = !1)
                        }
                    }), a.isPluginClickThroughCreated = !0
                }
            },
            cleanfullscreen: function (a) {
                a.exitFullScreen()
            },
            enterFullScreen: function () {
                var a = this,
                    b = null !== a.media.rendererName && null !== a.media.rendererName.match(/(html5|native)/);
                if (p.IS_IOS && p.HAS_IOS_FULLSCREEN && "function" == typeof a.media.webkitEnterFullscreen) return void a.media.webkitEnterFullscreen();
                $(i["default"].documentElement).addClass(a.options.classPrefix + "fullscreen"), a.normalHeight = a.container.height(), a.normalWidth = a.container.width(), "native-native" === a.fullscreenMode || "plugin-native" === a.fullscreenMode ? (p.requestFullScreen(a.container[0]), a.isInIframe && setTimeout(function d() {
                    if (a.isNativeFullScreen) {
                        var b = .002,
                            c = $(g["default"]).width(),
                            e = screen.width,
                            f = Math.abs(e - c),
                            h = e * b;
                        f > h ? a.exitFullScreen() : setTimeout(d, 500)
                    }
                }, 1e3)) : "fullwindow" === a.fullscreeMode, a.container.addClass(a.options.classPrefix + "container-fullscreen").width("100%").height("100%"), a.containerSizeTimeout = setTimeout(function () {
                    a.container.css({
                        width: "100%",
                        height: "100%"
                    }), a.setControlsSize()
                }, 500), b ? a.$media.width("100%").height("100%") : a.container.find("iframe, embed, object, video").width("100%").height("100%"), a.options.setDimensions && "function" == typeof a.media.setSize && a.media.setSize(screen.width, screen.height), a.layers.children("div").width("100%").height("100%"), a.fullscreenBtn && a.fullscreenBtn.removeClass(a.options.classPrefix + "fullscreen").addClass(a.options.classPrefix + "unfullscreen"), a.setControlsSize(), a.isFullScreen = !0;
                var c = Math.min(screen.width / a.width, screen.height / a.height);
                a.container.find("." + a.options.classPrefix + "captions-text").css("font-size", 100 * c + "%"), a.container.find("." + a.options.classPrefix + "captions-text").css("line-height", "normal"), a.container.find("." + a.options.classPrefix + "captions-position").css("bottom", "45px"), a.container.trigger("enteredfullscreen")
            },
            exitFullScreen: function () {
                var a = this,
                    b = null !== a.media.rendererName && null !== a.media.rendererName.match(/(native|html5)/);
                clearTimeout(a.containerSizeTimeout), p.HAS_TRUE_NATIVE_FULLSCREEN && (p.IS_FULLSCREEN || a.isFullScreen) && p.cancelFullScreen(), $(i["default"].documentElement).removeClass(a.options.classPrefix + "fullscreen"), a.container.removeClass(a.options.classPrefix + "container-fullscreen"), a.options.setDimensions && (a.container.width(a.normalWidth).height(a.normalHeight), b ? a.$media.width(a.normalWidth).height(a.normalHeight) : a.container.find("iframe, embed, object, video").width(a.normalWidth).height(a.normalHeight), "function" == typeof a.media.setSize && a.media.setSize(a.normalWidth, a.normalHeight), a.layers.children("div").width(a.normalWidth).height(a.normalHeight)), a.fullscreenBtn.removeClass(a.options.classPrefix + "unfullscreen").addClass(a.options.classPrefix + "fullscreen"), a.setControlsSize(), a.isFullScreen = !1, a.container.find("." + a.options.classPrefix + "captions-text").css("font-size", ""), a.container.find("." + a.options.classPrefix + "captions-text").css("line-height", ""), a.container.find("." + a.options.classPrefix + "captions-position").css("bottom", ""), a.container.trigger("exitedfullscreen")
            }
        })
    }, {
        16: 16,
        19: 19,
        2: 2,
        3: 3,
        4: 4,
        6: 6
    }],
    9: [function (a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {
                "default": a
            }
        }
        var e = a(16),
            f = d(e),
            g = a(4),
            h = d(g);
        Object.assign(e.config, {
            playText: "",
            pauseText: ""
        }), Object.assign(f["default"].prototype, {
            buildplaypause: function (a, b, c, d) {
                function e(a) {
                    "play" === a ? (k.removeClass(f.options.classPrefix + "play").removeClass(f.options.classPrefix + "replay").addClass(f.options.classPrefix + "pause"), l.attr({
                        title: j,
                        "aria-label": j
                    })) : (k.removeClass(f.options.classPrefix + "pause").removeClass(f.options.classPrefix + "replay").addClass(f.options.classPrefix + "play"), l.attr({
                        title: i,
                        "aria-label": i
                    }))
                }
                var f = this,
                    g = f.options,
                    i = g.playText ? g.playText : h["default"].t("mejs.play"),
                    j = g.pauseText ? g.pauseText : h["default"].t("mejs.pause"),
                    k = $('<div class="' + f.options.classPrefix + "button " + f.options.classPrefix + "playpause-button " + (f.options.classPrefix + 'play">') + ('<button type="button" aria-controls="' + f.id + '" title="' + i + '" aria-label="' + j + '"></button>') + "</div>").appendTo(b).click(function () {
                        d.paused ? d.play() : d.pause()
                    }),
                    l = k.find("button");
                e("pse"), d.addEventListener("play", function () {
                    e("play")
                }, !1), d.addEventListener("playing", function () {
                    e("play")
                }, !1), d.addEventListener("pause", function () {
                    e("pse")
                }, !1), d.addEventListener("paused", function () {
                    e("pse")
                }, !1), d.addEventListener("ended", function () {
                    a.options.loop || k.removeClass(f.options.classPrefix + "pause").removeClass(f.options.classPrefix + "play").addClass(f.options.classPrefix + "replay")
                }, !1)
            }
        })
    }, {
        16: 16,
        4: 4
    }],
    10: [function (a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {
                "default": a
            }
        }
        var e = a(16),
            f = d(e),
            g = a(4),
            h = d(g),
            i = a(19),
            j = a(24);
        Object.assign(e.config, {
            enableProgressTooltip: !0
        }), Object.assign(f["default"].prototype, {
            buildprogress: function (a, b, c, d) {
                var e = this,
                    f = !1,
                    g = !1,
                    k = 0,
                    l = !1,
                    m = a.options.autoRewind,
                    n = a.options.enableProgressTooltip ? '<span class="' + e.options.classPrefix + 'time-float">' + ('<span class="' + e.options.classPrefix + 'time-float-current">00:00</span>') + ('<span class="' + e.options.classPrefix + 'time-float-corner"></span>') + "</span>" : "";
                $('<div class="' + e.options.classPrefix + 'time-rail">' + ('<span class="' + e.options.classPrefix + "time-total " + e.options.classPrefix + 'time-slider">') + ('<span class="' + e.options.classPrefix + 'time-buffering"></span>') + ('<span class="' + e.options.classPrefix + 'time-loaded"></span>') + ('<span class="' + e.options.classPrefix + 'time-current"></span>') + ('<span class="' + e.options.classPrefix + 'time-handle"></span>') + ("" + n) + "</span></div>").appendTo(b), b.find("." + e.options.classPrefix + "time-buffering").hide(), e.rail = b.find("." + e.options.classPrefix + "time-rail"), e.total = b.find("." + e.options.classPrefix + "time-total"), e.loaded = b.find("." + e.options.classPrefix + "time-loaded"), e.current = b.find("." + e.options.classPrefix + "time-current"), e.handle = b.find("." + e.options.classPrefix + "time-handle"), e.timefloat = b.find("." + e.options.classPrefix + "time-float"), e.timefloatcurrent = b.find("." + e.options.classPrefix + "time-float-current"), e.slider = b.find("." + e.options.classPrefix + "time-slider"), e.newTime = 0, e.forcedHandlePause = !1;
                var o = function (b) {
                        var c = e.total.offset(),
                            g = e.total.width(),
                            h = 0,
                            k = 0,
                            l = void 0;
                        l = b.originalEvent && b.originalEvent.changedTouches ? b.originalEvent.changedTouches[0].pageX : b.changedTouches ? b.changedTouches[0].pageX : b.pageX, d.duration && (l < c.left ? l = c.left : l > g + c.left && (l = g + c.left), k = l - c.left, h = k / g, e.newTime = .02 >= h ? 0 : h * d.duration, f && e.newTime.toFixed(4) !== d.currentTime.toFixed(4) && (e.setCurrentRailHandle(e.newTime), e.updateCurrent(e.newTime)), i.IS_IOS || i.IS_ANDROID || (e.timefloat.css("left", k), e.timefloatcurrent.html(j.secondsToTimeCode(e.newTime, a.options.alwaysShowHours)), e.timefloat.show()))
                    },
                    p = function () {
                        var b = d.currentTime,
                            c = h["default"].t("mejs.time-slider"),
                            f = j.secondsToTimeCode(b, a.options.alwaysShowHours),
                            g = d.duration;
                        e.slider.attr({
                            role: "slider",
                            tabindex: 0
                        }), d.paused ? e.slider.attr({
                            "aria-label": c,
                            "aria-valuemin": 0,
                            "aria-valuemax": g,
                            "aria-valuenow": b,
                            "aria-valuetext": f
                        }) : e.slider.removeAttr("aria-label aria-valuemin aria-valuemax aria-valuenow aria-valuetext")
                    },
                    q = function () {
                        var a = new Date;
                        a - k >= 1e3 && d.play()
                    },
                    r = function () {
                        e.forcedHandlePause && e.media.play(), f && e.newTime.toFixed(4) !== d.currentTime.toFixed(4) && (d.setCurrentTime(e.newTime), a.setCurrentRail(), e.updateCurrent(e.newTime)), e.forcedHandlePause = !1
                    };
                e.slider.on("focus", function () {
                    a.options.autoRewind = !1
                }).on("blur", function () {
                    a.options.autoRewind = m
                }).on("keydown", function (b) {
                    if (new Date - k >= 1e3 && (l = d.paused), e.options.keyActions.length) {
                        var c = b.which || b.keyCode || 0,
                            f = d.duration,
                            g = d.currentTime,
                            h = a.options.defaultSeekForwardInterval(d),
                            j = a.options.defaultSeekBackwardInterval(d);
                        switch (c) {
                        case 37:
                        case 40:
                            d.duration !== 1 / 0 && (g -= j);
                            break;
                        case 39:
                        case 38:
                            d.duration !== 1 / 0 && (g += h);
                            break;
                        case 36:
                            g = 0;
                            break;
                        case 35:
                            g = f;
                            break;
                        case 32:
                            return void(i.IS_FIREFOX || (d.paused ? d.play() : d.pause()));
                        case 13:
                            return void(d.paused ? d.play() : d.pause());
                        default:
                            return
                        }
                        g = 0 > g ? 0 : g >= f ? f : Math.floor(g), k = new Date, l || d.pause(), g < d.duration && !l && setTimeout(q, 1100), d.setCurrentTime(g), b.preventDefault(), b.stopPropagation()
                    }
                }).on("click", function (a) {
                    if (d.duration !== 1 / 0) {
                        var b = d.paused;
                        b || d.pause(), o(a), b || d.play()
                    }
                    a.preventDefault(), a.stopPropagation()
                }), e.rail.on("mousedown touchstart", function (a) {
                    e.forcedHandlePause = !1, d.duration !== 1 / 0 && (1 === a.which || 0 === a.which) && (d.paused || (e.media.pause(), e.forcedHandlePause = !0), f = !0, o(a), e.globalBind("mousemove.dur touchmove.dur", function (a) {
                        o(a)
                    }), e.globalBind("mouseup.dur touchend.dur", function () {
                        r(), f = !1, void 0 !== e.timefloat && e.timefloat.hide(), e.globalUnbind("mousemove.dur touchmove.dur mouseup.dur touchend.dur")
                    }))
                }).on("mouseenter", function (a) {
                    d.duration !== 1 / 0 && (g = !0, e.globalBind("mousemove.dur", function (a) {
                        o(a)
                    }), void 0 === e.timefloat || i.IS_IOS || i.IS_ANDROID || e.timefloat.show())
                }).on("mouseleave", function () {
                    d.duration !== 1 / 0 && (g = !1, f || (e.globalUnbind("mousemove.dur"), void 0 !== e.timefloat && e.timefloat.hide()))
                }), d.addEventListener("progress", function (c) {
                    d.duration !== 1 / 0 ? (a.setProgressRail(c), e.forcedHandlePause || a.setCurrentRail(c)) : b.find("." + e.options.classPrefix + "broadcast").length || b.find("." + e.options.classPrefix + "time-rail").empty().html('<span class="' + e.options.classPrefix + 'broadcast">' + mejs.i18n.t("mejs.live-broadcast") + "</span>")
                }, !1), d.addEventListener("timeupdate", function (c) {
                    d.duration !== 1 / 0 ? (a.setProgressRail(c), e.forcedHandlePause || a.setCurrentRail(c), p(c)) : b.find("." + e.options.classPrefix + "broadcast").length || b.find("." + e.options.classPrefix + "time-rail").empty().html('<span class="' + e.options.classPrefix + 'broadcast">' + mejs.i18n.t("mejs.live-broadcast") + "</span>");
                }, !1), e.container.on("controlsresize", function (b) {
                    d.duration !== 1 / 0 && (a.setProgressRail(b), e.forcedHandlePause || a.setCurrentRail(b))
                })
            },
            setProgressRail: function (a) {
                var b = this,
                    c = void 0 !== a ? a.target : b.media,
                    d = null;
                c && c.buffered && c.buffered.length > 0 && c.buffered.end && c.duration ? d = c.buffered.end(c.buffered.length - 1) / c.duration : c && void 0 !== c.bytesTotal && c.bytesTotal > 0 && void 0 !== c.bufferedBytes ? d = c.bufferedBytes / c.bytesTotal : a && a.lengthComputable && 0 !== a.total && (d = a.loaded / a.total), null !== d && (d = Math.min(1, Math.max(0, d)), b.loaded && b.total && b.loaded.width(100 * d + "%"))
            },
            setCurrentRailHandle: function (a) {
                var b = this;
                b.setCurrentRailMain(b, a)
            },
            setCurrentRail: function () {
                var a = this;
                a.setCurrentRailMain(a)
            },
            setCurrentRailMain: function (a, b) {
                if (void 0 !== a.media.currentTime && a.media.duration) {
                    var c = "undefined" == typeof b ? a.media.currentTime : b;
                    if (a.total && a.handle) {
                        var d = Math.round(a.total.width() * c / a.media.duration),
                            e = d - Math.round(a.handle.outerWidth(!0) / 2);
                        d = c / a.media.duration * 100, a.current.width(d + "%"), a.handle.css("left", e)
                    }
                }
            }
        })
    }, {
        16: 16,
        19: 19,
        24: 24,
        4: 4
    }],
    11: [function (a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {
                "default": a
            }
        }
        var e = a(16),
            f = d(e),
            g = a(24);
        Object.assign(e.config, {
            duration: 0,
            timeAndDurationSeparator: "<span> | </span>"
        }), Object.assign(f["default"].prototype, {
            buildcurrent: function (a, b, c, d) {
                var e = this;
                $('<div class="' + e.options.classPrefix + 'time" role="timer" aria-live="off">' + ('<span class="' + e.options.classPrefix + 'currenttime">' + g.secondsToTimeCode(0, a.options.alwaysShowHours) + "</span>") + "</div>").appendTo(b), e.currenttime = e.controls.find("." + e.options.classPrefix + "currenttime"), d.addEventListener("timeupdate", function () {
                    e.controlsAreVisible && a.updateCurrent()
                }, !1)
            },
            buildduration: function (a, b, c, d) {
                var e = this;
                b.children().last().find("." + e.options.classPrefix + "currenttime").length > 0 ? $(e.options.timeAndDurationSeparator + '<span class="' + e.options.classPrefix + 'duration">' + (g.secondsToTimeCode(e.options.duration, e.options.alwaysShowHours) + "</span>")).appendTo(b.find("." + e.options.classPrefix + "time")) : (b.find("." + e.options.classPrefix + "currenttime").parent().addClass(e.options.classPrefix + "currenttime-container"), $('<div class="' + e.options.classPrefix + "time " + e.options.classPrefix + 'duration-container">' + ('<span class="' + e.options.classPrefix + 'duration">') + (g.secondsToTimeCode(e.options.duration, e.options.alwaysShowHours) + "</span>") + "</div>").appendTo(b)), e.durationD = e.controls.find("." + e.options.classPrefix + "duration"), d.addEventListener("timeupdate", function () {
                    e.controlsAreVisible && a.updateDuration()
                }, !1)
            },
            updateCurrent: function () {
                var a = this,
                    b = a.media.currentTime;
                isNaN(b) && (b = 0), a.currenttime && a.currenttime.html(g.secondsToTimeCode(b, a.options.alwaysShowHours))
            },
            updateDuration: function () {
                var a = this,
                    b = a.media.duration;
                (isNaN(b) || b === 1 / 0 || 0 > b) && (a.media.duration = a.options.duration = b = 0), a.options.duration > 0 && (b = a.options.duration), a.container.toggleClass(a.options.classPrefix + "long-video", b > 3600), a.durationD && b > 0 && a.durationD.html(g.secondsToTimeCode(b, a.options.alwaysShowHours))
            }
        })
    }, {
        16: 16,
        24: 24
    }],
    12: [function (a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {
                "default": a
            }
        }
        var e = a(6),
            f = d(e),
            g = a(4),
            h = d(g),
            i = a(16),
            j = d(i),
            k = a(24);
        Object.assign(i.config, {
            startLanguage: "",
            tracksText: "",
            tracksAriaLive: !1,
            hideCaptionsButtonWhenEmpty: !0,
            toggleCaptionsButtonWhenOnlyOne: !1,
            slidesSelector: ""
        }), Object.assign(j["default"].prototype, {
            hasChapters: !1,
            buildtracks: function (a, b, c, d) {
                if (0 !== a.tracks.length) {
                    var e = this,
                        f = e.options.tracksAriaLive ? ' role="log" aria-live="assertive" aria-atomic="false"' : "",
                        g = e.options.tracksText ? e.options.tracksText : h["default"].t("mejs.captions-subtitles"),
                        i = void 0,
                        j = void 0;
                    if (e.domNode.textTracks)
                        for (i = e.domNode.textTracks.length - 1; i >= 0; i--) e.domNode.textTracks[i].mode = "hidden";
                    e.cleartracks(a), a.chapters = $('<div class="' + e.options.classPrefix + "chapters " + e.options.classPrefix + 'layer"></div>').prependTo(c).hide(), a.captions = $('<div class="' + e.options.classPrefix + "captions-layer " + e.options.classPrefix + 'layer">' + ('<div class="' + e.options.classPrefix + "captions-position " + e.options.classPrefix + 'captions-position-hover"' + f + ">") + ('<span class="' + e.options.classPrefix + 'captions-text"></span>') + "</div></div>").prependTo(c).hide(), a.captionsText = a.captions.find("." + e.options.classPrefix + "captions-text"), a.captionsButton = $('<div class="' + e.options.classPrefix + "button " + e.options.classPrefix + 'captions-button">' + ('<button type="button" aria-controls="' + e.id + '" title="' + g + '" aria-label="' + g + '"></button>') + ('<div class="' + e.options.classPrefix + "captions-selector " + e.options.classPrefix + 'offscreen">') + ('<ul class="' + e.options.classPrefix + 'captions-selector-list">') + ('<li class="' + e.options.classPrefix + 'captions-selector-list-item">') + ('<input type="radio" class="' + e.options.classPrefix + 'captions-selector-input" ') + ('name="' + a.id + '_captions" id="' + a.id + '_captions_none" ') + 'value="none" checked="checked" />' + ('<label class="' + e.options.classPrefix + "captions-selector-label ") + (e.options.classPrefix + 'captions-selected" ') + ('for="' + a.id + '_captions_none">' + h["default"].t("mejs.none") + "</label>") + "</li></ul></div></div>").appendTo(b);
                    var k = 0,
                        l = a.tracks.length;
                    for (i = 0; l > i; i++) j = a.tracks[i].kind, ("subtitles" === j || "captions" === j) && k++;
                    for (e.options.toggleCaptionsButtonWhenOnlyOne && 1 === k ? a.captionsButton.on("click", function () {
                            var b = "none";
                            null === a.selectedTrack && (b = a.tracks[0].trackId), a.setTrack(b)
                        }) : a.captionsButton.on("mouseenter focusin", function () {
                            $(this).find("." + e.options.classPrefix + "captions-selector").removeClass(e.options.classPrefix + "offscreen")
                        }).on("mouseleave focusout", function () {
                            $(this).find("." + e.options.classPrefix + "captions-selector").addClass(e.options.classPrefix + "offscreen")
                        }).on("click", "input[type=radio]", function () {
                            a.setTrack(this.value)
                        }).on("click", "." + e.options.classPrefix + "captions-selector-label", function () {
                            $(this).siblings('input[type="radio"]').trigger("click")
                        }).on("keydown", function (a) {
                            a.stopPropagation()
                        }), a.options.alwaysShowControls ? a.container.find("." + e.options.classPrefix + "captions-position").addClass(e.options.classPrefix + "captions-position-hover") : a.container.on("controlsshown", function () {
                            a.container.find("." + e.options.classPrefix + "captions-position").addClass(e.options.classPrefix + "captions-position-hover")
                        }).on("controlshidden", function () {
                            d.paused || a.container.find("." + e.options.classPrefix + "captions-position").removeClass(e.options.classPrefix + "captions-position-hover")
                        }), a.trackToLoad = -1, a.selectedTrack = null, a.isLoadingTrack = !1, i = 0; l > i; i++) j = a.tracks[i].kind, ("subtitles" === j || "captions" === j) && a.addTrackButton(a.tracks[i].trackId, a.tracks[i].srclang, a.tracks[i].label);
                    a.loadNextTrack(), d.addEventListener("timeupdate", function () {
                        a.displayCaptions()
                    }, !1), "" !== a.options.slidesSelector && (a.slidesContainer = $(a.options.slidesSelector), d.addEventListener("timeupdate", function () {
                        a.displaySlides()
                    }, !1)), d.addEventListener("loadedmetadata", function () {
                        a.displayChapters()
                    }, !1), a.container.hover(function () {
                        a.hasChapters && (a.chapters.removeClass(e.options.classPrefix + "offscreen"), a.chapters.fadeIn(200, function () {
                            var a = $(this);
                            a.height(a.find("." + e.options.classPrefix + "chapter").outerHeight())
                        }))
                    }, function () {
                        a.hasChapters && (d.paused ? a.chapters.fadeOut(200, function () {
                            $(this).addClass(e.options.classPrefix + "offscreen")
                        }) : a.chapters.show())
                    }), e.container.on("controlsresize", function () {
                        e.adjustLanguageBox()
                    }), null !== a.node.getAttribute("autoplay") && a.chapters.addClass(e.options.classPrefix + "offscreen")
                }
            },
            cleartracks: function (a) {
                a && (a.captions && a.captions.remove(), a.chapters && a.chapters.remove(), a.captionsText && a.captionsText.remove(), a.captionsButton && a.captionsButton.remove())
            },
            rebuildtracks: function () {
                var a = this;
                a.findTracks(), a.buildtracks(a, a.controls, a.layers, a.media)
            },
            findTracks: function () {
                var a = this,
                    b = a.$media.find("track");
                a.tracks = [], b.each(function (b, c) {
                    c = $(c);
                    var d = c.attr("srclang") ? c.attr("srclang").toLowerCase() : "",
                        e = a.id + "_track_" + b + "_" + c.attr("kind") + "_" + d;
                    a.tracks.push({
                        trackId: e,
                        srclang: d,
                        src: c.attr("src"),
                        kind: c.attr("kind"),
                        label: c.attr("label") || "",
                        entries: [],
                        isLoaded: !1
                    })
                })
            },
            setTrack: function (a) {
                var b = this,
                    c = void 0;
                if (b.captionsButton.find('input[type="radio"]').prop("checked", !1).end().find("." + b.options.classPrefix + "captions-selected").removeClass(b.options.classPrefix + "captions-selected").end().find('input[value="' + a + '"]').prop("checked", !0).siblings("." + b.options.classPrefix + "captions-selector-label").addClass(b.options.classPrefix + "captions-selected"), "none" === a) return b.selectedTrack = null, void b.captionsButton.removeClass(b.options.classPrefix + "captions-enabled");
                for (c = 0; c < b.tracks.length; c++) {
                    var d = b.tracks[c];
                    if (d.trackId === a) {
                        null === b.selectedTrack && b.captionsButton.addClass(b.options.classPrefix + "captions-enabled"), b.selectedTrack = d, b.captions.attr("lang", b.selectedTrack.srclang), b.displayCaptions();
                        break
                    }
                }
            },
            loadNextTrack: function () {
                var a = this;
                a.trackToLoad++, a.trackToLoad < a.tracks.length ? (a.isLoadingTrack = !0, a.loadTrack(a.trackToLoad)) : (a.isLoadingTrack = !1, a.checkForTracks())
            },
            loadTrack: function (a) {
                var b = this,
                    c = b.tracks[a],
                    d = function () {
                        c.isLoaded = !0, b.enableTrackButton(c), b.loadNextTrack()
                    };
                void 0 === c || void 0 === c.src && "" === c.src || $.ajax({
                    url: c.src,
                    dataType: "text",
                    success: function (a) {
                        "string" == typeof a && /<tt\s+xml/gi.exec(a) ? c.entries = f["default"].TrackFormatParser.dfxp.parse(a) : c.entries = f["default"].TrackFormatParser.webvtt.parse(a), d(), "chapters" === c.kind && b.media.addEventListener("play", function () {
                            b.media.duration > 0 && b.displayChapters()
                        }, !1), "slides" === c.kind && b.setupSlides(c)
                    },
                    error: function () {
                        b.removeTrackButton(c.trackId), b.loadNextTrack()
                    }
                })
            },
            enableTrackButton: function (a) {
                var b = this,
                    c = a.srclang,
                    d = a.label,
                    e = $("#" + a.trackId);
                "" === d && (d = h["default"].t(f["default"].language.codes[c]) || c), e.prop("disabled", !1).siblings("." + b.options.classPrefix + "captions-selector-label").html(d), b.options.startLanguage === c && e.prop("checked", !0).trigger("click"), b.adjustLanguageBox()
            },
            removeTrackButton: function (a) {
                var b = this;
                b.captionsButton.find("input[id=" + a + "]").closest("li").remove(), b.adjustLanguageBox()
            },
            addTrackButton: function (a, b, c) {
                var d = this;
                "" === c && (c = h["default"].t(f["default"].language.codes[b]) || b), d.captionsButton.find("ul").append($('<li class="' + d.options.classPrefix + 'captions-selector-list-item">' + ('<input type="radio" class="' + d.options.classPrefix + 'captions-selector-input"') + ('name="' + d.id + '_captions" id="' + a + '" value="' + a + '" disabled="disabled" />') + ('<label class="' + d.options.classPrefix + 'captions-selector-label">' + c + " (loading)</label>") + "</li>")), d.adjustLanguageBox(), d.container.find("." + d.options.classPrefix + "captions-translations option[value=" + b + "]").remove()
            },
            adjustLanguageBox: function () {
                var a = this;
                a.captionsButton.find("." + a.options.classPrefix + "captions-selector").height(a.captionsButton.find("." + a.options.classPrefix + "captions-selector-list").outerHeight(!0) + a.captionsButton.find("." + a.options.classPrefix + "captions-translations").outerHeight(!0))
            },
            checkForTracks: function () {
                var a = this,
                    b = !1;
                if (a.options.hideCaptionsButtonWhenEmpty) {
                    for (var c = 0, d = a.tracks.length; d > c; c++) {
                        var e = a.tracks[c].kind;
                        if (("subtitles" === e || "captions" === e) && a.tracks[c].isLoaded) {
                            b = !0;
                            break
                        }
                    }
                    b || (a.captionsButton.hide(), a.setControlsSize())
                }
            },
            displayCaptions: function () {
                if (void 0 !== this.tracks) {
                    var a = this,
                        b = a.selectedTrack,
                        c = void 0;
                    if (null !== b && b.isLoaded) {
                        if (c = a.searchTrackPosition(b.entries, a.media.currentTime), c > -1) return a.captionsText.html(b.entries[c].text).attr("class", a.options.classPrefix + "captions-text " + (b.entries[c].identifier || "")), void a.captions.show().height(0);
                        a.captions.hide()
                    } else a.captions.hide()
                }
            },
            setupSlides: function (a) {
                var b = this;
                b.slides = a, b.slides.entries.imgs = [b.slides.entries.length], b.showSlide(0)
            },
            showSlide: function (a) {
                if (void 0 !== this.tracks && void 0 !== this.slidesContainer) {
                    var b = this,
                        c = b.slides.entries[a].text,
                        d = b.slides.entries[a].imgs;
                    void 0 === d || void 0 === d.fadeIn ? b.slides.entries[a].imgs = d = $('<img src="' + c + '">').on("load", function () {
                        d.appendTo(b.slidesContainer).hide().fadeIn().siblings(":visible").fadeOut()
                    }) : d.is(":visible") || d.is(":animated") || d.fadeIn().siblings(":visible").fadeOut()
                }
            },
            displaySlides: function () {
                if (void 0 !== this.slides) {
                    var a = this,
                        b = a.slides,
                        c = a.searchTrackPosition(b.entries, a.media.currentTime);
                    return c > -1 ? void a.showSlide(c) : void 0
                }
            },
            displayChapters: function () {
                for (var a = this, b = 0, c = a.tracks.length; c > b; b++)
                    if ("chapters" === a.tracks[b].kind && a.tracks[b].isLoaded) {
                        a.drawChapters(a.tracks[b]), a.hasChapters = !0;
                        break
                    }
            },
            drawChapters: function (a) {
                var b = this,
                    c = void 0,
                    d = void 0,
                    e = 0,
                    f = 0,
                    g = a.entries.length;
                for (b.chapters.empty(), c = 0; g > c; c++) d = a.entries[c].stop - a.entries[c].start, e = Math.floor(d / b.media.duration * 100), (e + f > 100 || c === a.entries.length - 1 && 100 > e + f) && (e = 100 - f), b.chapters.append($('<div class="' + b.options.classPrefix + 'chapter" rel="' + a.entries[c].start + '" style="left: ' + f.toString() + "%; width: " + e.toString() + '%;">' + ('<div class="' + b.options.classPrefix + "chapter-block") + ((c === a.entries.length - 1 ? " " + b.options.classPrefix + "chapter-block-last" : "") + '">') + ('<span class="ch-title">' + a.entries[c].text + "</span>") + '<span class="ch-time">' + k.secondsToTimeCode(a.entries[c].start, b.options.alwaysShowHours) + "&ndash;" + k.secondsToTimeCode(a.entries[c].stop, b.options.alwaysShowHours) + "</span></div></div>")), f += e;
                b.chapters.find("." + b.options.classPrefix + "chapter").click(function () {
                    b.media.setCurrentTime(parseFloat($(this).attr("rel"))), b.media.paused && b.media.play()
                }), b.chapters.show()
            },
            searchTrackPosition: function (a, b) {
                for (var c = 0, d = a.length - 1, e = void 0, f = void 0, g = void 0; d >= c;) {
                    if (e = c + d >> 1, f = a[e].start, g = a[e].stop, b >= f && g > b) return e;
                    b > f ? c = e + 1 : f > b && (d = e - 1)
                }
                return -1
            }
        }), f["default"].language = {
            codes: {
                af: "mejs.afrikaans",
                sq: "mejs.albanian",
                ar: "mejs.arabic",
                be: "mejs.belarusian",
                bg: "mejs.bulgarian",
                ca: "mejs.catalan",
                zh: "mejs.chinese",
                "zh-cn": "mejs.chinese-simplified",
                "zh-tw": "mejs.chines-traditional",
                hr: "mejs.croatian",
                cs: "mejs.czech",
                da: "mejs.danish",
                nl: "mejs.dutch",
                en: "mejs.english",
                et: "mejs.estonian",
                fl: "mejs.filipino",
                fi: "mejs.finnish",
                fr: "mejs.french",
                gl: "mejs.galician",
                de: "mejs.german",
                el: "mejs.greek",
                ht: "mejs.haitian-creole",
                iw: "mejs.hebrew",
                hi: "mejs.hindi",
                hu: "mejs.hungarian",
                is: "mejs.icelandic",
                id: "mejs.indonesian",
                ga: "mejs.irish",
                it: "mejs.italian",
                ja: "mejs.japanese",
                ko: "mejs.korean",
                lv: "mejs.latvian",
                lt: "mejs.lithuanian",
                mk: "mejs.macedonian",
                ms: "mejs.malay",
                mt: "mejs.maltese",
                no: "mejs.norwegian",
                fa: "mejs.persian",
                pl: "mejs.polish",
                pt: "mejs.portuguese",
                ro: "mejs.romanian",
                ru: "mejs.russian",
                sr: "mejs.serbian",
                sk: "mejs.slovak",
                sl: "mejs.slovenian",
                es: "mejs.spanish",
                sw: "mejs.swahili",
                sv: "mejs.swedish",
                tl: "mejs.tagalog",
                th: "mejs.thai",
                tr: "mejs.turkish",
                uk: "mejs.ukrainian",
                vi: "mejs.vietnamese",
                cy: "mejs.welsh",
                yi: "mejs.yiddish"
            }
        }, f["default"].TrackFormatParser = {
            webvtt: {
                pattern_timecode: /^((?:[0-9]{1,2}:)?[0-9]{2}:[0-9]{2}([,.][0-9]{1,3})?) --\> ((?:[0-9]{1,2}:)?[0-9]{2}:[0-9]{2}([,.][0-9]{3})?)(.*)$/,
                parse: function (a) {
                    for (var b = 0, c = f["default"].TrackFormatParser.split2(a, /\r?\n/), d = [], e = void 0, g = void 0, h = void 0; b < c.length; b++) {
                        if (e = this.pattern_timecode.exec(c[b]), e && b < c.length) {
                            for (b - 1 >= 0 && "" !== c[b - 1] && (h = c[b - 1]), b++, g = c[b], b++;
                                "" !== c[b] && b < c.length;) g = g + "\n" + c[b], b++;
                            g = $.trim(g).replace(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi, "<a href='$1' target='_blank'>$1</a>"), d.push({
                                identifier: h,
                                start: 0 === k.convertSMPTEtoSeconds(e[1]) ? .2 : k.convertSMPTEtoSeconds(e[1]),
                                stop: k.convertSMPTEtoSeconds(e[3]),
                                text: g,
                                settings: e[5]
                            })
                        }
                        h = ""
                    }
                    return d
                }
            },
            dfxp: {
                parse: function (a) {
                    a = $(a).filter("tt");
                    var b = a.children("div").eq(0),
                        c = b.find("p"),
                        d = a.find("#" + b.attr("style")),
                        e = void 0,
                        f = [],
                        g = void 0;
                    if (d.length) {
                        var h = d.removeAttr("id").get(0).attributes;
                        if (h.length)
                            for (e = {}, g = 0; g < h.length; g++) e[h[g].name.split(":")[1]] = h[g].value
                    }
                    for (g = 0; g < c.length; g++) {
                        var i = void 0,
                            j = {
                                start: null,
                                stop: null,
                                style: null,
                                text: null
                            };
                        if (c.eq(g).attr("begin") && (j.start = k.convertSMPTEtoSeconds(c.eq(g).attr("begin"))), !j.start && c.eq(g - 1).attr("end") && (j.start = k.convertSMPTEtoSeconds(c.eq(g - 1).attr("end"))), c.eq(g).attr("end") && (j.stop = k.convertSMPTEtoSeconds(c.eq(g).attr("end"))), !j.stop && c.eq(g + 1).attr("begin") && (j.stop = k.convertSMPTEtoSeconds(c.eq(g + 1).attr("begin"))), e) {
                            i = "";
                            for (var l in e) i += l + ":" + e[l] + ";"
                        }
                        i && (j.style = i), 0 === j.start && (j.start = .2), j.text = $.trim(c.eq(g).html()).replace(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi, "<a href='$1' target='_blank'>$1</a>"), f.push(j)
                    }
                    return f
                }
            },
            split2: function (a, b) {
                return a.split(b)
            }
        }, 3 !== "x\n\ny".split(/\n/gi).length && (f["default"].TrackFormatParser.split2 = function (a, b) {
            var c = [],
                d = "",
                e = void 0;
            for (e = 0; e < a.length; e++) d += a.substring(e, e + 1), b.test(d) && (c.push(d.replace(b, "")), d = "");
            return c.push(d), c
        })
    }, {
        16: 16,
        24: 24,
        4: 4,
        6: 6
    }],
    13: [function (a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {
                "default": a
            }
        }
        var e = a(16),
            f = d(e),
            g = a(4),
            h = d(g),
            i = a(19);
        Object.assign(e.config, {
            muteText: "",
            allyVolumeControlText: "",
            hideVolumeOnTouchDevices: !0,
            audioVolume: "horizontal",
            videoVolume: "vertical"
        }), Object.assign(f["default"].prototype, {
            buildvolume: function (a, b, c, d) {
                if (!i.IS_ANDROID && !i.IS_IOS || !this.options.hideVolumeOnTouchDevices) {
                    var e = this,
                        f = e.isVideo ? e.options.videoVolume : e.options.audioVolume,
                        g = e.options.muteText ? e.options.muteText : h["default"].t("mejs.mute-toggle"),
                        j = e.options.allyVolumeControlText ? e.options.allyVolumeControlText : h["default"].t("mejs.volume-help-text"),
                        k = "horizontal" === f ? $('<div class="' + e.options.classPrefix + "button " + e.options.classPrefix + "volume-button " + e.options.classPrefix + 'mute">' + ('<button type="button" aria-controls="' + e.id + '" title="' + g + '" aria-label="' + g + '"></button>') + "</div>" + ('<a href="javascript:void(0);" class="' + e.options.classPrefix + 'horizontal-volume-slider">') + ('<span class="' + e.options.classPrefix + 'offscreen">' + j + "</span>") + ('<div class="' + e.options.classPrefix + 'horizontal-volume-total">') + ('<div class="' + e.options.classPrefix + 'horizontal-volume-current"></div>') + ('<div class="' + e.options.classPrefix + 'horizontal-volume-handle"></div>') + "</div></a>").appendTo(b) : $('<div class="' + e.options.classPrefix + "button " + e.options.classPrefix + "volume-button " + e.options.classPrefix + 'mute">' + ('<button type="button" aria-controls="' + e.id + '" title="' + g + '" aria-label="' + g + '"></button>') + ('<a href="javascript:void(0);" class="' + e.options.classPrefix + 'volume-slider">') + ('<span class="' + e.options.classPrefix + 'offscreen">' + j + "</span>") + ('<div class="' + e.options.classPrefix + 'volume-total">') + ('<div class="' + e.options.classPrefix + 'volume-current"></div>') + ('<div class="' + e.options.classPrefix + 'volume-handle"></div>') + "</div></a></div>").appendTo(b),
                        l = e.container.find("." + e.options.classPrefix + "volume-slider, \n				." + e.options.classPrefix + "horizontal-volume-slider"),
                        m = e.container.find("." + e.options.classPrefix + "volume-total, \n				." + e.options.classPrefix + "horizontal-volume-total"),
                        n = e.container.find("." + e.options.classPrefix + "volume-current, \n				." + e.options.classPrefix + "horizontal-volume-current"),
                        o = e.container.find("." + e.options.classPrefix + "volume-handle, \n				." + e.options.classPrefix + "horizontal-volume-handle"),
                        p = function (a) {
                            a = Math.max(0, a), a = Math.min(a, 1), 0 === a ? (k.removeClass(e.options.classPrefix + "mute").addClass(e.options.classPrefix + "unmute"), k.children("button").attr({
                                title: h["default"].t("mejs.unmute"),
                                "aria-label": h["default"].t("mejs.unmute")
                            })) : (k.removeClass(e.options.classPrefix + "unmute").addClass(e.options.classPrefix + "mute"), k.children("button").attr({
                                title: h["default"].t("mejs.mute"),
                                "aria-label": h["default"].t("mejs.mute")
                            }));
                            var b = 100 * a + "%";
                            "vertical" === f ? (n.css({
                                bottom: "0",
                                height: b
                            }), o.css({
                                bottom: b,
                                marginBottom: -o.height() / 2 + "px"
                            })) : (n.css({
                                left: "0",
                                width: b
                            }), o.css({
                                left: b,
                                marginLeft: -o.width() / 2 + "px"
                            }))
                        },
                        q = function (a) {
                            var b = null,
                                c = m.offset();
                            if ("vertical" === f) {
                                var e = m.height(),
                                    g = a.pageY - c.top;
                                if (b = (e - g) / e, 0 === c.top || 0 === c.left) return
                            } else {
                                var h = m.width(),
                                    i = a.pageX - c.left;
                                b = i / h
                            }
                            b = Math.max(0, b), b = Math.min(b, 1), p(b), 0 === b ? d.setMuted(!0) : d.setMuted(!1), d.setVolume(b)
                        },
                        r = !1,
                        s = !1;
                    k.on("mouseenter focusin", function () {
                        l.show(), s = !0
                    }).on("mouseleave focusout", function () {
                        s = !1, r || "vertical" !== f || l.hide()
                    });
                    var t = function () {
                        var a = Math.floor(100 * d.volume);
                        l.attr({
                            "aria-label": h["default"].t("mejs.volume-slider"),
                            "aria-valuemin": 0,
                            "aria-valuemax": 100,
                            "aria-valuenow": a,
                            "aria-valuetext": a + "%",
                            role: "slider",
                            tabindex: -1
                        })
                    };
                    l.on("mouseover", function () {
                        s = !0
                    }).on("mousedown", function (a) {
                        return q(a), e.globalBind("mousemove.vol", function (a) {
                            q(a)
                        }), e.globalBind("mouseup.vol", function () {
                            r = !1, e.globalUnbind("mousemove.vol mouseup.vol"), s || "vertical" !== f || l.hide()
                        }), r = !0, !1
                    }).on("keydown", function (a) {
                        if (e.options.keyActions.length) {
                            var b = a.which || a.keyCode || 0,
                                c = d.volume;
                            switch (b) {
                            case 38:
                                c = Math.min(c + .1, 1);
                                break;
                            case 40:
                                c = Math.max(0, c - .1);
                                break;
                            default:
                                return !0
                            }
                            return r = !1, p(c), d.setVolume(c), !1
                        }
                    }), k.find("button").on("click", function () {
                        d.setMuted(!d.muted)
                    }).on("focus", function () {
                        "vertical" === f && l.show()
                    }).on("blur", function () {
                        "vertical" === f && l.hide()
                    }), d.addEventListener("volumechange", function (a) {
                        r || (d.muted ? (p(0), k.removeClass(e.options.classPrefix + "mute").addClass(e.options.classPrefix + "unmute")) : (p(d.volume), k.removeClass(e.options.classPrefix + "unmute").addClass(e.options.classPrefix + "mute"))), t(a)
                    }, !1), 0 === a.options.startVolume && d.setMuted(!0);
                    var u = null !== e.media.rendererName && null !== e.media.rendererName.match(/(native|html5)/);
                    u && d.setVolume(a.options.startVolume), e.container.on("controlsresize", function () {
                        d.muted ? (p(0), k.removeClass(e.options.classPrefix + "mute").addClass(e.options.classPrefix + "unmute")) : (p(d.volume), k.removeClass(e.options.classPrefix + "unmute").addClass(e.options.classPrefix + "mute"))
                    })
                }
            }
        })
    }, {
        16: 16,
        19: 19,
        4: 4
    }],
    14: [function (a, b, c) {
        "use strict";
        /*!
         * This is a `i18n` language object.
         *
         * English; This can serve as a template for other languages to translate
         *
         * @author
         *   TBD
         *   Sascha Greuel (Twitter: @SoftCreatR)
         *
         * @see core/i18n.js
         */
        Object.defineProperty(c, "__esModule", {
            value: !0
        });
        c.EN = {
            "mejs.plural-form": 1,
            "mejs.install-flash": "You are using a browser that does not have Flash player enabled or installed. Please turn on your Flash player plugin or download the latest version from https://get.adobe.com/flashplayer/",
            "mejs.fullscreen-off": "Turn off Fullscreen",
            "mejs.fullscreen-on": "Go Fullscreen",
            "mejs.download-video": "Download Video",
            "mejs.fullscreen": "Fullscreen",
            "mejs.time-jump-forward": ["Jump forward 1 second", "Jump forward %1 seconds"],
            "mejs.loop": "Toggle Loop",
            "mejs.play": "Play",
            "mejs.pause": "Pause",
            "mejs.close": "Close",
            "mejs.time-slider": "Time Slider",
            "mejs.time-help-text": "Use Left/Right Arrow keys to advance one second, Up/Down arrows to advance ten seconds.",
            "mejs.time-skip-back": ["Skip back 1 second", "Skip back %1 seconds"],
            "mejs.captions-subtitles": "Captions/Subtitles",
            "mejs.none": "None",
            "mejs.mute-toggle": "Mute Toggle",
            "mejs.volume-help-text": "Use Up/Down Arrow keys to increase or decrease volume.",
            "mejs.unmute": "Unmute",
            "mejs.mute": "Mute",
            "mejs.volume-slider": "Volume Slider",
            "mejs.video-player": "Video Player",
            "mejs.audio-player": "Audio Player",
            "mejs.ad-skip": "Skip ad",
            "mejs.ad-skip-info": ["Skip in 1 second", "Skip in %1 seconds"],
            "mejs.source-chooser": "Source Chooser",
            "mejs.stop": "Stop",
            "mejs.speed-rate": "Speed Rate",
            "mejs.live-broadcast": "Live Broadcast",
            "mejs.afrikaans": "Afrikaans",
            "mejs.albanian": "Albanian",
            "mejs.arabic": "Arabic",
            "mejs.belarusian": "Belarusian",
            "mejs.bulgarian": "Bulgarian",
            "mejs.catalan": "Catalan",
            "mejs.chinese": "Chinese",
            "mejs.chinese-simplified": "Chinese (Simplified)",
            "mejs.chinese-traditional": "Chinese (Traditional)",
            "mejs.croatian": "Croatian",
            "mejs.czech": "Czech",
            "mejs.danish": "Danish",
            "mejs.dutch": "Dutch",
            "mejs.english": "English",
            "mejs.estonian": "Estonian",
            "mejs.filipino": "Filipino",
            "mejs.finnish": "Finnish",
            "mejs.french": "French",
            "mejs.galician": "Galician",
            "mejs.german": "German",
            "mejs.greek": "Greek",
            "mejs.haitian-creole": "Haitian Creole",
            "mejs.hebrew": "Hebrew",
            "mejs.hindi": "Hindi",
            "mejs.hungarian": "Hungarian",
            "mejs.icelandic": "Icelandic",
            "mejs.indonesian": "Indonesian",
            "mejs.irish": "Irish",
            "mejs.italian": "Italian",
            "mejs.japanese": "Japanese",
            "mejs.korean": "Korean",
            "mejs.latvian": "Latvian",
            "mejs.lithuanian": "Lithuanian",
            "mejs.macedonian": "Macedonian",
            "mejs.malay": "Malay",
            "mejs.maltese": "Maltese",
            "mejs.norwegian": "Norwegian",
            "mejs.persian": "Persian",
            "mejs.polish": "Polish",
            "mejs.portuguese": "Portuguese",
            "mejs.romanian": "Romanian",
            "mejs.russian": "Russian",
            "mejs.serbian": "Serbian",
            "mejs.slovak": "Slovak",
            "mejs.slovenian": "Slovenian",
            "mejs.spanish": "Spanish",
            "mejs.swahili": "Swahili",
            "mejs.swedish": "Swedish",
            "mejs.tagalog": "Tagalog",
            "mejs.thai": "Thai",
            "mejs.turkish": "Turkish",
            "mejs.ukrainian": "Ukrainian",
            "mejs.vietnamese": "Vietnamese",
            "mejs.welsh": "Welsh",
            "mejs.yiddish": "Yiddish"
        }
    }, {}],
    15: [function (a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {
                "default": a
            }
        }
        var e = a(3),
            f = d(e),
            g = a(6),
            h = d(g);
        "undefined" != typeof jQuery ? h["default"].$ = f["default"].jQuery = f["default"].$ = jQuery : "undefined" != typeof Zepto ? (h["default"].$ = f["default"].Zepto = f["default"].$ = Zepto, Zepto.fn.outerWidth = function (a) {
            var b = $(this).width();
            return a && (b += parseInt($(this).css("margin-right"), 10), b += parseInt($(this).css("margin-left"), 10)), b
        }) : "undefined" != typeof ender && (h["default"].$ = f["default"].ender = f["default"].$ = ender)
    }, {
        3: 3,
        6: 6
    }],
    16: [function (a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {
                "default": a
            }
        }

        function e(a, b) {
            if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(c, "__esModule", {
            value: !0
        }), c.config = void 0;
        var f = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (a) {
                return typeof a
            } : function (a) {
                return a && "function" == typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a
            },
            g = function () {
                function a(a, b) {
                    for (var c = 0; c < b.length; c++) {
                        var d = b[c];
                        d.enumerable = d.enumerable || !1, d.configurable = !0, "value" in d && (d.writable = !0), Object.defineProperty(a, d.key, d)
                    }
                }
                return function (b, c, d) {
                    return c && a(b.prototype, c), d && a(b, d), b
                }
            }(),
            h = a(3),
            i = d(h),
            j = a(2),
            k = d(j),
            l = a(6),
            m = d(l),
            n = a(5),
            o = d(n),
            p = a(4),
            q = d(p),
            r = a(19),
            s = a(21),
            t = a(24),
            u = a(20),
            v = a(22);
        m["default"].mepIndex = 0, m["default"].players = {};
        var w = c.config = {
            poster: "",
            showPosterWhenEnded: !1,
            showPosterWhenPaused: !1,
            defaultVideoWidth: 480,
            defaultVideoHeight: 270,
            videoWidth: -1,
            videoHeight: -1,
            defaultAudioWidth: 400,
            defaultAudioHeight: 40,
            defaultSeekBackwardInterval: function (a) {
                return .05 * a.duration
            },
            defaultSeekForwardInterval: function (a) {
                return .05 * a.duration
            },
            setDimensions: !0,
            audioWidth: -1,
            audioHeight: -1,
            startVolume: .8,
            loop: !1,
            autoRewind: !0,
            enableAutosize: !0,
            timeFormat: "",
            alwaysShowHours: !1,
            showTimecodeFrameCount: !1,
            framesPerSecond: 25,
            alwaysShowControls: !1,
            hideVideoControlsOnLoad: !1,
            hideVideoControlsOnPause: !1,
            clickToPlayPause: !0,
            controlsTimeoutDefault: 1500,
            controlsTimeoutMouseEnter: 2500,
            controlsTimeoutMouseLeave: 1e3,
            iPadUseNativeControls: !1,
            iPhoneUseNativeControls: !1,
            AndroidUseNativeControls: !1,
            features: ["playpause", "current", "progress", "duration", "tracks", "volume", "fullscreen"],
            isVideo: !0,
            stretching: "auto",
            classPrefix: "mejs__",
            enableKeyboard: !0,
            pauseOtherPlayers: !0,
            keyActions: [{
                keys: [32, 179],
                action: function (a, b) {
                    r.IS_FIREFOX || (b.paused || b.ended ? b.play() : b.pause())
                }
            }, {
                keys: [38],
                action: function (a, b) {
                    (a.container.find("." + w.classPrefix + "volume-button>button").is(":focus") || a.container.find("." + w.classPrefix + "volume-slider").is(":focus")) && a.container.find("." + w.classPrefix + "volume-slider").css("display", "block"), a.isVideo && (a.showControls(), a.startControlsTimer());
                    var c = Math.min(b.volume + .1, 1);
                    b.setVolume(c), c > 0 && b.setMuted(!1)
                }
            }, {
                keys: [40],
                action: function (a, b) {
                    (a.container.find("." + w.classPrefix + "volume-button>button").is(":focus") || a.container.find("." + w.classPrefix + "volume-slider").is(":focus")) && a.container.find("." + w.classPrefix + "volume-slider").css("display", "block"), a.isVideo && (a.showControls(), a.startControlsTimer());
                    var c = Math.max(b.volume - .1, 0);
                    b.setVolume(c), .1 >= c && b.setMuted(!0)
                }
            }, {
                keys: [37, 227],
                action: function (a, b) {
                    if (!isNaN(b.duration) && b.duration > 0) {
                        a.isVideo && (a.showControls(), a.startControlsTimer());
                        var c = Math.max(b.currentTime - a.options.defaultSeekBackwardInterval(b), 0);
                        b.setCurrentTime(c)
                    }
                }
            }, {
                keys: [39, 228],
                action: function (a, b) {
                    if (!isNaN(b.duration) && b.duration > 0) {
                        a.isVideo && (a.showControls(), a.startControlsTimer());
                        var c = Math.min(b.currentTime + a.options.defaultSeekForwardInterval(b), b.duration);
                        b.setCurrentTime(c)
                    }
                }
            }, {
                keys: [70],
                action: function (a, b, c, d) {
                    d.ctrlKey || "undefined" != typeof a.enterFullScreen && (a.isFullScreen ? a.exitFullScreen() : a.enterFullScreen())
                }
            }, {
                keys: [77],
                action: function (a) {
                    a.container.find("." + w.classPrefix + "volume-slider").css("display", "block"), a.isVideo && (a.showControls(), a.startControlsTimer()), a.media.muted ? a.setMuted(!1) : a.setMuted(!0)
                }
            }]
        };
        m["default"].MepDefaults = w;
        var x = function () {
            function a(b, c) {
                e(this, a);
                var d = this;
                if (d.hasFocus = !1, d.controlsAreVisible = !0, d.controlsEnabled = !0, d.controlsTimer = null, !(d instanceof a)) return new a(b, c);
                if (d.$media = d.$node = $(b), d.node = d.media = d.$media[0], d.node) {
                    if (void 0 !== d.node.player) return d.node.player;
                    void 0 === c && (c = d.$node.data("mejsoptions")), d.options = Object.assign({}, w, c), d.options.timeFormat || (d.options.timeFormat = "mm:ss", d.options.alwaysShowHours && (d.options.timeFormat = "hh:mm:ss"), d.options.showTimecodeFrameCount && (d.options.timeFormat += ":ff")), t.calculateTimeFormat(0, d.options, d.options.framesPerSecond || 25), d.id = "mep_" + m["default"].mepIndex++, m["default"].players[d.id] = d;
                    var f = Object.assign({}, d.options, {
                            success: function (a, b) {
                                d._meReady(a, b)
                            },
                            error: function (a) {
                                d._handleError(a)
                            }
                        }),
                        g = d.media.tagName.toLowerCase();
                    if (d.isDynamic = "audio" !== g && "video" !== g, d.isVideo = d.isDynamic ? d.options.isVideo : "audio" !== g && d.options.isVideo, r.IS_IPAD && d.options.iPadUseNativeControls || r.IS_IPHONE && d.options.iPhoneUseNativeControls) d.$media.attr("controls", "controls"), r.IS_IPAD && d.media.getAttribute("autoplay") && d.play();
                    else if (r.IS_ANDROID && d.options.AndroidUseNativeControls);
                    else if (d.isVideo || !d.isVideo && d.options.features.length) {
                        d.$media.removeAttr("controls");
                        var h = d.isVideo ? q["default"].t("mejs.video-player") : q["default"].t("mejs.audio-player");
                        $('<span class="' + d.options.classPrefix + 'offscreen">' + h + "</span>").insertBefore(d.$media), d.container = $('<div id="' + d.id + '" class="' + d.options.classPrefix + "container " + d.options.classPrefix + 'container-keyboard-inactive"' + ('tabindex="0" role="application" aria-label="' + h + '">') + ('<div class="' + d.options.classPrefix + 'inner">') + ('<div class="' + d.options.classPrefix + 'mediaelement"></div>') + ('<div class="' + d.options.classPrefix + 'layers"></div>') + ('<div class="' + d.options.classPrefix + 'controls"></div>') + ('<div class="' + d.options.classPrefix + 'clear"></div>') + "</div></div>").addClass(d.$media[0].className).insertBefore(d.$media).focus(function (a) {
                            if (!d.controlsAreVisible && !d.hasFocus && d.controlsEnabled && (d.showControls(!0), !r.HAS_MS_NATIVE_FULLSCREEN)) {
                                var b = "." + d.options.classPrefix + "playpause-button > button";
                                u.isNodeAfter(a.relatedTarget, d.container[0]) && (b = "." + d.options.classPrefix + "controls ." + d.options.classPrefix + "button:last-child > button");
                                var c = d.container.find(b);
                                c.focus()
                            }
                        }), d.options.features.length || d.container.css("background", "transparent").find("." + d.options.classPrefix + "controls").hide(), d.isVideo && "fill" === d.options.stretching && !d.container.parent("." + d.options.classPrefix + "fill-container").length && (d.outerContainer = d.$media.parent(), d.container.wrap('<div class="' + d.options.classPrefix + 'fill-container"/>')), d.container.addClass((r.IS_ANDROID ? d.options.classPrefix + "android " : "") + (r.IS_IOS ? d.options.classPrefix + "ios " : "") + (r.IS_IPAD ? d.options.classPrefix + "ipad " : "") + (r.IS_IPHONE ? d.options.classPrefix + "iphone " : "") + (d.isVideo ? d.options.classPrefix + "video " : d.options.classPrefix + "audio ")), d.container.find("." + d.options.classPrefix + "mediaelement").append(d.$media), d.node.player = d, d.controls = d.container.find("." + d.options.classPrefix + "controls"), d.layers = d.container.find("." + d.options.classPrefix + "layers");
                        var i = d.isVideo ? "video" : "audio",
                            j = i.substring(0, 1).toUpperCase() + i.substring(1);
                        d.options[i + "Width"] > 0 || d.options[i + "Width"].toString().indexOf("%") > -1 ? d.width = d.options[i + "Width"] : "" !== d.media.style.width && null !== d.media.style.width ? d.width = d.media.style.width : d.media.getAttribute("width") ? d.width = d.$media.attr("width") : d.width = d.options["default" + j + "Width"], d.options[i + "Height"] > 0 || d.options[i + "Height"].toString().indexOf("%") > -1 ? d.height = d.options[i + "Height"] : "" !== d.media.style.height && null !== d.media.style.height ? d.height = d.media.style.height : d.$media[0].getAttribute("height") ? d.height = d.$media.attr("height") : d.height = d.options["default" + j + "Height"], d.initialAspectRatio = d.height >= d.width ? d.width / d.height : d.height / d.width, d.setPlayerSize(d.width, d.height), f.pluginWidth = d.width, f.pluginHeight = d.height
                    } else d.isVideo || d.options.features.length || d.$media.hide();
                    return new o["default"](d.$media[0], f), void 0 !== d.container && d.options.features.length && d.controlsAreVisible && !d.options.hideVideoControlsOnLoad && d.container.trigger("controlsshown"), d
                }
            }
            return g(a, [{
                key: "showControls",
                value: function (a) {
                    var b = this;
                    a = void 0 === a || a, b.controlsAreVisible || (a ? (b.controls.removeClass(b.options.classPrefix + "offscreen").stop(!0, !0).fadeIn(200, function () {
                        b.controlsAreVisible = !0, b.container.trigger("controlsshown")
                    }), b.container.find("." + b.options.classPrefix + "control").removeClass(b.options.classPrefix + "offscreen").stop(!0, !0).fadeIn(200, function () {
                        b.controlsAreVisible = !0
                    })) : (b.controls.removeClass(b.options.classPrefix + "offscreen").css("display", "block"), b.container.find("." + b.options.classPrefix + "control").removeClass(b.options.classPrefix + "offscreen").css("display", "block"), b.controlsAreVisible = !0, b.container.trigger("controlsshown")), b.setControlsSize())
                }
            }, {
                key: "hideControls",
                value: function (a) {
                    var b = this;
                    a = void 0 === a || a, !b.controlsAreVisible || b.options.alwaysShowControls || b.keyboardAction || b.media.paused && 4 === b.media.readyState && (!b.options.hideVideoControlsOnLoad && b.media.currentTime <= 0 || !b.options.hideVideoControlsOnPause && b.media.currentTime > 0) || b.isVideo && !b.options.hideVideoControlsOnLoad && !b.media.readyState || b.media.ended || (a ? (b.controls.stop(!0, !0).fadeOut(200, function () {
                        $(this).addClass(b.options.classPrefix + "offscreen").css("display", "block"), b.controlsAreVisible = !1, b.container.trigger("controlshidden")
                    }), b.container.find("." + b.options.classPrefix + "control").stop(!0, !0).fadeOut(200, function () {
                        $(this).addClass(b.options.classPrefix + "offscreen").css("display", "block")
                    })) : (b.controls.addClass(b.options.classPrefix + "offscreen").css("display", "block"), b.container.find("." + b.options.classPrefix + "control").addClass(b.options.classPrefix + "offscreen").css("display", "block"), b.controlsAreVisible = !1, b.container.trigger("controlshidden")))
                }
            }, {
                key: "startControlsTimer",
                value: function (a) {
                    var b = this;
                    a = "undefined" != typeof a ? a : b.options.controlsTimeoutDefault, b.killControlsTimer("start"), b.controlsTimer = setTimeout(function () {
                        b.hideControls(), b.killControlsTimer("hide")
                    }, a)
                }
            }, {
                key: "killControlsTimer",
                value: function () {
                    var a = this;
                    null !== a.controlsTimer && (clearTimeout(a.controlsTimer), delete a.controlsTimer, a.controlsTimer = null)
                }
            }, {
                key: "disableControls",
                value: function () {
                    var a = this;
                    a.killControlsTimer(), a.hideControls(!1), this.controlsEnabled = !1
                }
            }, {
                key: "enableControls",
                value: function () {
                    var a = this;
                    a.showControls(!1), a.controlsEnabled = !0
                }
            }, {
                key: "_meReady",
                value: function (a, b) {
                    var c = this,
                        d = b.getAttribute("autoplay"),
                        e = !(void 0 === d || null === d || "false" === d),
                        g = null !== a.rendererName && null !== a.rendererName.match(/(native|html5)/);
                    if (!c.created) {
                        if (c.created = !0, c.media = a, c.domNode = b, !(r.IS_ANDROID && c.options.AndroidUseNativeControls || r.IS_IPAD && c.options.iPadUseNativeControls || r.IS_IPHONE && c.options.iPhoneUseNativeControls)) {
                            var h = function () {
                                if (!c.isVideo && !c.options.features.length) return e && g && c.play(), c.options.success && ("string" == typeof c.options.success ? i["default"][c.options.success](c.media, c.domNode, c) : c.options.success(c.media, c.domNode, c)), {
                                    v: void 0
                                };
                                c.buildposter(c, c.controls, c.layers, c.media), c.buildkeyboard(c, c.controls, c.layers, c.media), c.buildoverlays(c, c.controls, c.layers, c.media), c.findTracks();
                                for (var a in c.options.features) {
                                    var b = c.options.features[a];
                                    if (c["build" + b]) try {
                                        c["build" + b](c, c.controls, c.layers, c.media)
                                    } catch (d) {
                                        console.error("error building " + b, d)
                                    }
                                }
                                c.container.trigger("controlsready"), c.setPlayerSize(c.width, c.height), c.setControlsSize(), c.isVideo && (!r.IS_ANDROID && !r.IS_IOS || c.options.alwaysShowControls ? (c.clickToPlayPauseCallback = function () {
                                    if (c.options.clickToPlayPause) {
                                        var a = c.$media.closest("." + c.options.classPrefix + "container").find("." + c.options.classPrefix + "overlay-button"),
                                            b = a.attr("aria-pressed");
                                        c.media.paused && b ? c.pause() : c.media.paused ? c.play() : c.pause(), a.attr("aria-pressed", !b)
                                    }
                                }, c.media.addEventListener("click", c.clickToPlayPauseCallback, !1), c.container.on("mouseenter", function () {
                                    c.controlsEnabled && (c.options.alwaysShowControls || (c.killControlsTimer("enter"), c.showControls(), c.startControlsTimer(c.options.controlsTimeoutMouseEnter)))
                                }).on("mousemove", function () {
                                    c.controlsEnabled && (c.controlsAreVisible || c.showControls(), c.options.alwaysShowControls || c.startControlsTimer(c.options.controlsTimeoutMouseEnter))
                                }).on("mouseleave", function () {
                                    c.controlsEnabled && (c.media.paused || c.options.alwaysShowControls || c.startControlsTimer(c.options.controlsTimeoutMouseLeave))
                                })) : c.$media.on("touchstart", function () {
                                    c.controlsAreVisible ? c.hideControls(!1) : c.controlsEnabled && c.showControls(!1)
                                }), c.options.hideVideoControlsOnLoad && c.hideControls(!1), e && !c.options.alwaysShowControls && c.hideControls(), c.options.enableAutosize && c.media.addEventListener("loadedmetadata", function (a) {
                                    c.options.videoHeight <= 0 && !c.domNode.getAttribute("height") && !isNaN(a.target.videoHeight) && (c.setPlayerSize(a.target.videoWidth, a.target.videoHeight), c.setControlsSize(), c.media.setSize(a.target.videoWidth, a.target.videoHeight))
                                }, !1)), c.media.addEventListener("play", function () {
                                    c.hasFocus = !0;
                                    for (var a in m["default"].players) {
                                        var b = m["default"].players[a];
                                        b.id === c.id || !c.options.pauseOtherPlayers || b.paused || b.ended || (b.pause(), b.hasFocus = !1)
                                    }
                                }, !1), c.media.addEventListener("ended", function () {
                                    if (c.options.autoRewind) try {
                                        c.media.setCurrentTime(0), i["default"].setTimeout(function () {
                                            $(c.container).find("." + c.options.classPrefix + "overlay-loading").parent().hide()
                                        }, 20)
                                    } catch (a) {}
                                    "function" == typeof c.media.stop ? c.media.stop() : c.media.pause(), c.setProgressRail && c.setProgressRail(), c.setCurrentRail && c.setCurrentRail(), c.options.loop ? c.play() : !c.options.alwaysShowControls && c.controlsEnabled && c.showControls()
                                }, !1), c.media.addEventListener("loadedmetadata", function () {
                                    t.calculateTimeFormat(c.duration, c.options, c.options.framesPerSecond || 25), c.updateDuration && c.updateDuration(), c.updateCurrent && c.updateCurrent(), c.isFullScreen || (c.setPlayerSize(c.width, c.height), c.setControlsSize())
                                }, !1);
                                var f = null;
                                c.media.addEventListener("timeupdate", function () {
                                    f !== c.media.duration && (f = c.media.duration, t.calculateTimeFormat(f, c.options, c.options.framesPerSecond || 25), c.updateDuration && c.updateDuration(), c.updateCurrent && c.updateCurrent(), c.setControlsSize())
                                }, !1), c.container.focusout(function (a) {
                                    if (a.relatedTarget) {
                                        var b = $(a.relatedTarget);
                                        c.keyboardAction && 0 === b.parents("." + c.options.classPrefix + "container").length && (c.keyboardAction = !1, c.isVideo && !c.options.alwaysShowControls && c.hideControls(!0))
                                    }
                                }), setTimeout(function () {
                                    c.setPlayerSize(c.width, c.height), c.setControlsSize()
                                }, 50), c.globalBind("resize", function () {
                                    c.isFullScreen || r.HAS_TRUE_NATIVE_FULLSCREEN && k["default"].webkitIsFullScreen || c.setPlayerSize(c.width, c.height), c.setControlsSize()
                                }), c.globalBind("click", function (a) {
                                    $(a.target).is("." + c.options.classPrefix + "container") ? $(a.target).addClass(c.options.classPrefix + "container-keyboard-inactive") : $(a.target).closest("." + c.options.classPrefix + "container").length && $(a.target).closest("." + c.options.classPrefix + "container").addClass(c.options.classPrefix + "container-keyboard-inactive")
                                }), c.globalBind("keydown", function (a) {
                                    $(a.target).is("." + c.options.classPrefix + "container") ? $(a.target).removeClass(c.options.classPrefix + "container-keyboard-inactive") : $(a.target).closest("." + c.options.classPrefix + "container").length && $(a.target).closest("." + c.options.classPrefix + "container").removeClass(c.options.classPrefix + "container-keyboard-inactive")
                                }), null !== c.media.rendererName && c.media.rendererName.match(/youtube/) && (r.IS_IOS || r.IS_ANDROID) && (c.container.find("." + c.options.classPrefix + "overlay-play").hide(), c.container.find("." + c.options.classPrefix + "poster").hide())
                            }();
                            if ("object" === ("undefined" == typeof h ? "undefined" : f(h))) return h.v
                        }
                        e && g && c.play(), c.options.success && ("string" == typeof c.options.success ? i["default"][c.options.success](c.media, c.domNode, c) : c.options.success(c.media, c.domNode, c))
                    }
                }
            }, {
                key: "_handleError",
                value: function (a) {
                    var b = this;
                    b.controls && b.disableControls(), b.options.error && b.options.error(a)
                }
            }, {
                key: "setPlayerSize",
                value: function (a, b) {
                    var c = this;
                    if (!c.options.setDimensions) return !1;
                    if ("undefined" != typeof a && (c.width = a), "undefined" != typeof b && (c.height = b), "undefined" != typeof FB && c.isVideo) {
                        FB.Event.subscribe("xfbml.ready", function () {
                            var a = $(c.media).children(".fb-video");
                            return c.width = a.width(), c.height = a.height(), c.setDimensions(c.width, c.height), !1
                        });
                        var d = $(c.media).children(".fb-video");
                        d.length && (c.width = d.width(), c.height = d.height())
                    }
                    switch (c.options.stretching) {
                    case "fill":
                        c.isVideo ? c.setFillMode() : c.setDimensions(c.width, c.height);
                        break;
                    case "responsive":
                        c.setResponsiveMode();
                        break;
                    case "none":
                        c.setDimensions(c.width, c.height);
                        break;
                    default:
                        c.hasFluidMode() === !0 ? c.setResponsiveMode() : c.setDimensions(c.width, c.height)
                    }
                }
            }, {
                key: "hasFluidMode",
                value: function () {
                    var a = this;
                    return a.height.toString().includes("%") || "none" !== a.$node.css("max-width") && a.$node.css("max-width") !== a.width || a.$node[0].currentStyle && "100%" === a.$node[0].currentStyle.maxWidth
                }
            }, {
                key: "setResponsiveMode",
                value: function () {
                    var a = this,
                        b = function () {
                            return a.isVideo ? a.media.videoWidth && a.media.videoWidth > 0 ? a.media.videoWidth : a.media.getAttribute("width") ? a.media.getAttribute("width") : a.options.defaultVideoWidth : a.options.defaultAudioWidth
                        }(),
                        c = function () {
                            return a.isVideo ? a.media.videoHeight && a.media.videoHeight > 0 ? a.media.videoHeight : a.media.getAttribute("height") ? a.media.getAttribute("height") : a.options.defaultVideoHeight : a.options.defaultAudioHeight
                        }(),
                        d = function () {
                            var b = 1;
                            return a.isVideo ? (b = a.media.videoWidth && a.media.videoWidth > 0 && a.media.videoHeight && a.media.videoHeight > 0 ? a.height >= a.width ? a.media.videoWidth / a.media.videoHeight : a.media.videoHeight / a.media.videoWidth : a.initialAspectRatio, (isNaN(b) || .01 > b || b > 100) && (b = 1), b) : b
                        }(),
                        e = a.container.parent().closest(":visible").width(),
                        f = a.container.parent().closest(":visible").height(),
                        g = void 0;
                    g = a.isVideo ? "100%" === a.height ? parseInt(e * c / b, 10) : a.height >= a.width ? parseInt(e / d, 10) : parseInt(e * d, 10) : c, isNaN(g) && (g = f), a.container.parent().length > 0 && "body" === a.container.parent()[0].tagName.toLowerCase() && (e = $(i["default"]).width(), g = $(i["default"]).height()), g && e && (a.container.width(e).height(g), a.$media.width("100%").height("100%"), a.isVideo && a.media.setSize && a.media.setSize(e, g), a.layers.children("." + a.options.classPrefix + "layer").width("100%").height("100%"))
                }
            }, {
                key: "setFillMode",
                value: function () {
                    var a = this,
                        b = a.outerContainer;
                    "none" !== a.$node.css("height") && a.$node.css("height") !== a.height && a.$node.css("height", ""), "none" !== a.$node.css("max-width") && a.$node.css("max-width") !== a.width && a.$node.css("max-width", ""), "none" !== a.$node.css("max-height") && a.$node.css("max-height") !== a.height && a.$node.css("max-height", ""), a.$node[0].currentStyle && ("100%" === a.$node[0].currentStyle.height && (a.$node[0].currentStyle.height = ""), "100%" === a.$node[0].currentStyle.maxWidth && (a.$node[0].currentStyle.maxWidth = ""), "100%" === a.$node[0].currentStyle.maxHeight && (a.$node[0].currentStyle.maxHeight = "")), b.width() || b.height(a.$media.width()), b.height() || b.height(a.$media.height());
                    var c = b.width(),
                        d = b.height();
                    a.setDimensions("100%", "100%"), a.container.find("." + a.options.classPrefix + "poster img").css("display", "block");
                    var e = a.container.find("object, embed, iframe, video"),
                        f = a.height,
                        g = a.width,
                        h = c,
                        i = f * c / g,
                        j = g * d / f,
                        k = d,
                        l = j > c == !1,
                        m = l ? Math.floor(h) : Math.floor(j),
                        n = l ? Math.floor(i) : Math.floor(k);
                    l ? (e.height(n).width(c), a.media.setSize && a.media.setSize(c, n)) : (e.height(d).width(m), a.media.setSize && a.media.setSize(m, d)), e.css({
                        "margin-left": Math.floor((c - m) / 2),
                        "margin-top": 0
                    })
                }
            }, {
                key: "setDimensions",
                value: function (a, b) {
                    var c = this;
                    c.container.width(a).height(b), c.layers.children("." + c.options.classPrefix + "layer").width(a).height(b)
                }
            }, {
                key: "setControlsSize",
                value: function () {
                    var a = this;
                    if (a.container.is(":visible") && a.rail && a.rail.length && a.rail.is(":visible")) {
                        var b = parseFloat(a.rail.css("margin-left")) + parseFloat(a.rail.css("margin-right")),
                            c = parseFloat(a.total.css("margin-left")) + parseFloat(a.total.css("margin-right")) || 0,
                            d = 0;
                        a.rail.siblings().each(function (a, b) {
                            d += parseFloat($(b).outerWidth(!0))
                        }), d += c + b + 1, a.rail.width(a.controls.width() - d), a.container.trigger("controlsresize")
                    }
                }
            }, {
                key: "resetSize",
                value: function () {
                    var a = this;
                    setTimeout(function () {
                        a.setPlayerSize(a.width, a.height), a.setControlsSize()
                    }, 50)
                }
            }, {
                key: "setPoster",
                value: function (a) {
                    var b = this,
                        c = b.container.find("." + b.options.classPrefix + "poster"),
                        d = c.find("img");
                    0 === d.length && (d = $('<img class="' + b.options.classPrefix + 'poster-img" width="100%" height="100%" alt="" />').appendTo(c)), d.attr("src", a), c.css({
                        "background-image": 'url("' + a + '")'
                    })
                }
            }, {
                key: "changeSkin",
                value: function (a) {
                    var b = this;
                    b.container[0].className = b.options.classPrefix + "container " + a, b.setPlayerSize(b.width, b.height), b.setControlsSize()
                }
            }, {
                key: "globalBind",
                value: function (a, b, c) {
                    var d = this,
                        e = d.node ? d.node.ownerDocument : k["default"];
                    a = s.splitEvents(a, d.id), a.d && $(e).on(a.d, b, c), a.w && $(i["default"]).on(a.w, b, c)
                }
            }, {
                key: "globalUnbind",
                value: function (a, b) {
                    var c = this,
                        d = c.node ? c.node.ownerDocument : k["default"];
                    a = s.splitEvents(a, c.id), a.d && $(d).off(a.d, b), a.w && $(i["default"]).off(a.w, b)
                }
            }, {
                key: "buildposter",
                value: function (a, b, c, d) {
                    var e = this,
                        f = $('<div class="' + e.options.classPrefix + "poster " + e.options.classPrefix + 'layer"></div>').appendTo(c),
                        g = a.$media.attr("poster");
                    "" !== a.options.poster && (g = a.options.poster), g ? e.setPoster(g) : f.hide(), d.addEventListener("play", function () {
                        f.hide()
                    }, !1), a.options.showPosterWhenEnded && a.options.autoRewind && d.addEventListener("ended", function () {
                        f.show()
                    }, !1), a.options.showPosterWhenPaused && d.addEventListener("pause", function () {
                        d.ended || f.show()
                    }, !1)
                }
            }, {
                key: "buildoverlays",
                value: function (a, b, c, d) {
                    if (a.isVideo) {
                        var e = this,
                            f = $('<div class="' + e.options.classPrefix + "overlay " + e.options.classPrefix + 'layer">' + ('<div class="' + e.options.classPrefix + 'overlay-loading">') + ('<span class="' + e.options.classPrefix + 'overlay-loading-bg-img"></span>') + "</div></div>").hide().appendTo(c),
                            g = $('<div class="' + e.options.classPrefix + "overlay " + e.options.classPrefix + 'layer">' + ('<div class="' + e.options.classPrefix + 'overlay-error"></div>') + "</div>").hide().appendTo(c),
                            h = $('<div class="' + e.options.classPrefix + "overlay " + e.options.classPrefix + "layer " + e.options.classPrefix + 'overlay-play">' + ('<div class="' + e.options.classPrefix + 'overlay-button" role="button" ') + ('aria-label="' + q["default"].t("mejs.play") + '" aria-pressed="false">') + "</div></div>").appendTo(c).on("click", function () {
                                if (e.options.clickToPlayPause) {
                                    var a = e.$media.closest("." + e.options.classPrefix + "container").find("." + e.options.classPrefix + "overlay-button"),
                                        b = a.attr("aria-pressed");
                                    d.paused ? d.play() : d.pause(), a.attr("aria-pressed", !!b)
                                }
                            });
                        null !== e.media.rendererName && e.media.rendererName.match(/(youtube|facebook)/) && h.hide(), d.addEventListener("play", function () {
                            h.hide(), f.hide(), b.find("." + e.options.classPrefix + "time-buffering").hide(), g.hide()
                        }, !1), d.addEventListener("playing", function () {
                            h.hide(), f.hide(), b.find("." + e.options.classPrefix + "time-buffering").hide(), g.hide()
                        }, !1), d.addEventListener("seeking", function () {
                            f.show(), b.find("." + e.options.classPrefix + "time-buffering").show()
                        }, !1), d.addEventListener("seeked", function () {
                            f.hide(), b.find("." + e.options.classPrefix + "time-buffering").hide()
                        }, !1), d.addEventListener("pause", function () {
                            h.show()
                        }, !1), d.addEventListener("waiting", function () {
                            f.show(), b.find("." + e.options.classPrefix + "time-buffering").show()
                        }, !1), d.addEventListener("loadeddata", function () {
                            f.show(), b.find("." + e.options.classPrefix + "time-buffering").show(), r.IS_ANDROID && (d.canplayTimeout = i["default"].setTimeout(function () {
                                if (k["default"].createEvent) {
                                    var a = k["default"].createEvent("HTMLEvents");
                                    return a.initEvent("canplay", !0, !0), d.dispatchEvent(a)
                                }
                            }, 300))
                        }, !1), d.addEventListener("canplay", function () {
                            f.hide(), b.find("." + e.options.classPrefix + "time-buffering").hide(), clearTimeout(d.canplayTimeout)
                        }, !1), d.addEventListener("error", function (a) {
                            e._handleError(a), f.hide(), h.hide(), g.show(), g.find("." + e.options.classPrefix + "overlay-error").html(a.message)
                        }, !1), d.addEventListener("keydown", function (b) {
                            e.onkeydown(a, d, b)
                        }, !1)
                    }
                }
            }, {
                key: "buildkeyboard",
                value: function (a, b, c, d) {
                    var e = this;
                    e.container.keydown(function () {
                        e.keyboardAction = !0
                    }), e.globalBind("keydown", function (b) {
                        var c = $(b.target).closest("." + e.options.classPrefix + "container");
                        return a.hasFocus = 0 !== c.length && c.attr("id") === a.$media.closest("." + e.options.classPrefix + "container").attr("id"), e.onkeydown(a, d, b)
                    }), e.globalBind("click", function (b) {
                        a.hasFocus = 0 !== $(b.target).closest("." + e.options.classPrefix + "container").length
                    })
                }
            }, {
                key: "onkeydown",
                value: function (a, b, c) {
                    if (a.hasFocus && a.options.enableKeyboard)
                        for (var d = 0, e = a.options.keyActions.length; e > d; d++)
                            for (var f = a.options.keyActions[d], g = 0, h = f.keys.length; h > g; g++)
                                if (c.keyCode === f.keys[g]) return f.action(a, b, c.keyCode, c), !1;
                    return !0
                }
            }, {
                key: "play",
                value: function () {
                    var a = this;
                    a.media.getCurrentTime() <= 0 && a.load(), a.media.play()
                }
            }, {
                key: "pause",
                value: function () {
                    try {
                        this.media.pause()
                    } catch (a) {}
                }
            }, {
                key: "load",
                value: function () {
                    var a = this;
                    a.isLoaded || a.media.load(), a.isLoaded = !0
                }
            }, {
                key: "setMuted",
                value: function (a) {
                    this.media.setMuted(a)
                }
            }, {
                key: "setCurrentTime",
                value: function (a) {
                    this.media.setCurrentTime(a)
                }
            }, {
                key: "getCurrentTime",
                value: function () {
                    return this.media.currentTime
                }
            }, {
                key: "setVolume",
                value: function (a) {
                    this.media.setVolume(a)
                }
            }, {
                key: "getVolume",
                value: function () {
                    return this.media.volume
                }
            }, {
                key: "setSrc",
                value: function (a) {
                    this.media.setSrc(a)
                }
            }, {
                key: "remove",
                value: function () {
                    var a = this,
                        b = a.media.rendererName;
                    a.media.paused || a.media.pause();
                    var c = a.media.originalNode.getAttribute("src");
                    a.media.setSrc("");
                    for (var d in a.options.features) {
                        var e = a.options.features[d];
                        if (a["clean" + e]) try {
                            a["clean" + e](a)
                        } catch (g) {
                            console.error("error cleaning " + e, g)
                        }
                    }
                    a.$node.css({
                        width: a.$node.attr("width") || "auto",
                        height: a.$node.attr("height") || "auto"
                    }), a.isDynamic ? a.$node.insertBefore(a.container) : (a.$media.prop("controls", !0), a.$node.attr("id", a.$node.attr("id").replace("_" + b, "")), a.$node.attr("id", a.$node.attr("id").replace("_from_mejs", "")), a.$node.removeProp("autoplay"), a.media.canPlayType(v.getTypeFromFile(c)) && a.$node.attr("src", c), a.$node.clone().insertBefore(a.container).show(), a.$node.remove()), "function" == typeof a.media.destroy && a.media.destroy(), delete m["default"].players[a.id], "object" === f(a.container) && (a.container.prev("." + a.options.classPrefix + "offscreen").remove(), a.container.remove()), a.globalUnbind(), delete a.node.player
                }
            }]), a
        }();
        i["default"].MediaElementPlayer = x, c["default"] = x,
            function (a) {
                "undefined" != typeof a && (a.fn.mediaelementplayer = function (b) {
                    return b === !1 ? this.each(function () {
                        var b = a(this).data("mediaelementplayer");
                        b && b.remove(), a(this).removeData("mediaelementplayer")
                    }) : this.each(function () {
                        a(this).data("mediaelementplayer", new x(this, b))
                    }), this
                }, a(k["default"]).ready(function () {
                    a("." + w.classPrefix + "player").mediaelementplayer()
                }))
            }(m["default"].$)
    }, {
        19: 19,
        2: 2,
        20: 20,
        21: 21,
        22: 22,
        24: 24,
        3: 3,
        4: 4,
        5: 5,
        6: 6
    }],
    17: [function (a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {
                "default": a
            }
        }
        Object.defineProperty(c, "__esModule", {
            value: !0
        }), c.PluginDetector = void 0;
        var e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (a) {
                return typeof a
            } : function (a) {
                return a && "function" == typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a
            },
            f = a(3),
            g = d(f),
            h = a(2),
            i = d(h),
            j = a(6),
            k = d(j),
            l = a(4),
            m = d(l),
            n = a(7),
            o = a(20),
            p = a(19),
            q = a(22),
            r = c.PluginDetector = {
                plugins: [],
                hasPluginVersion: function (a, b) {
                    var c = r.plugins[a];
                    return b[1] = b[1] || 0, b[2] = b[2] || 0, c[0] > b[0] || c[0] === b[0] && c[1] > b[1] || c[0] === b[0] && c[1] === b[1] && c[2] >= b[2]
                },
                addPlugin: function (a, b, c, d, e) {
                    r.plugins[a] = r.detectPlugin(b, c, d, e)
                },
                detectPlugin: function (a, b, c, d) {
                    var f = [0, 0, 0],
                        h = void 0,
                        i = void 0;
                    if (void 0 !== p.NAV.plugins && "object" === e(p.NAV.plugins[a])) {
                        if (h = p.NAV.plugins[a].description, h && ("undefined" == typeof p.NAV.mimeTypes || !p.NAV.mimeTypes[b] || p.NAV.mimeTypes[b].enabledPlugin)) {
                            f = h.replace(a, "").replace(/^\s+/, "").replace(/\sr/gi, ".").split(".");
                            for (var j = 0; j < f.length; j++) f[j] = parseInt(f[j].match(/\d+/), 10)
                        }
                    } else if (void 0 !== g["default"].ActiveXObject) try {
                        i = new ActiveXObject(c), i && (f = d(i))
                    } catch (k) {}
                    return f
                }
            };
        r.addPlugin("flash", "Shockwave Flash", "application/x-shockwave-flash", "ShockwaveFlash.ShockwaveFlash", function (a) {
            var b = [],
                c = a.GetVariable("$version");
            return c && (c = c.split(" ")[1].split(","), b = [parseInt(c[0], 10), parseInt(c[1], 10), parseInt(c[2], 10)]), b
        });
        var s = {
                create: function (a, b, c) {
                    var d = {},
                        f = void 0,
                        h = void 0;
                    d.options = b, d.id = a.id + "_" + d.options.prefix, d.mediaElement = a, d.flashState = {}, d.flashApi = null, d.flashApiStack = [];
                    var j = k["default"].html5media.properties,
                        l = function (a) {
                            d.flashState[a] = null;
                            var b = "" + a.substring(0, 1).toUpperCase() + a.substring(1);
                            d["get" + b] = function () {
                                if (null === d.flashApi) return null;
                                if (void 0 === d.flashApi["get_" + a]) return null;
                                var b = function () {
                                    var b = d.flashApi["get_" + a]();
                                    return "buffered" === a ? {
                                        v: {
                                            start: function () {
                                                return 0
                                            },
                                            end: function () {
                                                return b
                                            },
                                            length: 1
                                        }
                                    } : {
                                        v: b
                                    }
                                }();
                                return "object" === ("undefined" == typeof b ? "undefined" : e(b)) ? b.v : void 0
                            }, d["set" + b] = function (b) {
                                "src" === a && (b = q.absolutizeUrl(b)), null !== d.flashApi && void 0 !== d.flashApi["set_" + a] ? d.flashApi["set_" + a](b) : d.flashApiStack.push({
                                    type: "set",
                                    propName: a,
                                    value: b
                                })
                            }
                        };
                    for (f = 0, h = j.length; h > f; f++) l(j[f]);
                    var r = k["default"].html5media.methods,
                        s = function (a) {
                            d[a] = function () {
                                if (null !== d.flashApi) {
                                    if (d.flashApi["fire_" + a]) try {
                                        d.flashApi["fire_" + a]()
                                    } catch (b) {}
                                } else d.flashApiStack.push({
                                    type: "call",
                                    methodName: a
                                })
                            }
                        };
                    for (r.push("stop"), f = 0, h = r.length; h > f; f++) s(r[f]);
                    var t = ["rendererready", "loadeddata", "loadedmetadata", "canplay"];
                    for (f = 0, h = t.length; h > f; f++) {
                        var u = o.createEvent(t[f], d);
                        a.dispatchEvent(u)
                    }
                    g["default"]["__ready__" + d.id] = function () {
                        if (d.flashReady = !0, d.flashApi = i["default"].getElementById("__" + d.id), d.flashApiStack.length)
                            for (var a = 0, b = d.flashApiStack.length; b > a; a++) {
                                var c = d.flashApiStack[a];
                                if ("set" === c.type) {
                                    var e = c.propName,
                                        f = "" + e.substring(0, 1).toUpperCase() + e.substring(1);
                                    d["set" + f](c.value)
                                } else "call" === c.type && d[c.methodName]()
                            }
                    }, g["default"]["__event__" + d.id] = function (a, b) {
                        var c = o.createEvent(a, d);
                        c.message = b || "", d.mediaElement.dispatchEvent(c)
                    }, d.flashWrapper = i["default"].createElement("div");
                    var v = !!a.getAttribute("autoplay"),
                        w = ["uid=" + d.id, "autoplay=" + v],
                        x = null !== a.originalNode && "video" === a.originalNode.tagName.toLowerCase(),
                        y = x ? a.originalNode.height : 1,
                        z = x ? a.originalNode.width : 1;
                    a.originalNode.currentSrc.length && w.push("src=" + a.originalNode.currentSrc), d.options.enablePseudoStreaming === !0 && (w.push("pseudostreamstart=" + d.options.pseudoStreamingStartQueryParam), w.push("pseudostreamtype=" + d.options.pseudoStreamingType)), a.appendChild(d.flashWrapper), null !== a.originalNode && (a.originalNode.style.display = "none");
                    var A = [];
                    if (p.IS_IE) {
                        var B = i["default"].createElement("div");
                        d.flashWrapper.appendChild(B), A = ['classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"', 'codebase="//download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab"', 'id="__' + d.id + '"', 'width="' + z + '"', 'height="' + y + '"'], x || A.push('style="clip: rect(0 0 0 0); position: absolute;"'), B.outerHTML = "<object " + A.join(" ") + ">" + ('<param name="movie" value="' + d.options.pluginPath + d.options.filename + "?x=" + new Date + '" />') + ('<param name="flashvars" value="' + w.join("&amp;") + '" />') + '<param name="quality" value="high" /><param name="bgcolor" value="#000000" /><param name="wmode" value="transparent" /><param name="allowScriptAccess" value="always" /><param name="allowFullScreen" value="true" />' + ("<div>" + m["default"].t("mejs.install-flash") + "</div>") + "</object>"
                    } else A = ['id="__' + d.id + '"', 'name="__' + d.id + '"', 'play="true"', 'loop="false"', 'quality="high"', 'bgcolor="#000000"', 'wmode="transparent"', 'allowScriptAccess="always"', 'allowFullScreen="true"', 'type="application/x-shockwave-flash"', 'pluginspage="//www.macromedia.com/go/getflashplayer"', 'src="' + d.options.pluginPath + d.options.filename + '"', 'flashvars="' + w.join("&") + '"', 'width="' + z + '"', 'height="' + y + '"'], x || A.push('style="clip: rect(0 0 0 0); position: absolute;"'), d.flashWrapper.innerHTML = "<embed " + A.join(" ") + ">";
                    if (d.flashNode = d.flashWrapper.lastChild, d.hide = function () {
                            if (x) {
                                d.flashNode.style.position = "absolute", d.flashNode.style.width = "1px", d.flashNode.style.height = "1px";
                                try {
                                    d.flashNode.style.clip = "rect(0 0 0 0);"
                                } catch (a) {}
                            }
                        }, d.show = function () {
                            if (x) {
                                d.flashNode.style.position = "", d.flashNode.style.width = "", d.flashNode.style.height = "";
                                try {
                                    d.flashNode.style.clip = ""
                                } catch (a) {}
                            }
                        }, d.setSize = function (a, b) {
                            d.flashNode.style.width = a + "px", d.flashNode.style.height = b + "px", null !== d.flashApi && "function" == typeof d.flashApi.fire_setSize && d.flashApi.fire_setSize(a, b)
                        }, d.destroy = function () {
                            d.flashNode.parentNode.removeChild(d.flashNode)
                        }, c && c.length > 0)
                        for (f = 0, h = c.length; h > f; f++)
                            if (n.renderer.renderers[b.prefix].canPlayType(c[f].type)) {
                                d.setSrc(c[f].src);
                                break
                            }
                    return d
                }
            },
            t = r.hasPluginVersion("flash", [10, 0, 0]);
        if (t) {
            q.typeChecks.push(function (a) {
                return a = a.toLowerCase(), a.startsWith("rtmp") ? a.includes(".mp3") ? "audio/rtmp" : "video/rtmp" : a.includes(".oga") || a.includes(".ogg") ? "audio/ogg" : p.HAS_MSE || p.SUPPORTS_NATIVE_HLS || !a.includes(".m3u8") ? !p.HAS_MSE && a.includes(".mpd") ? "application/dash+xml" : null : "application/x-mpegURL"
            });
            var u = {
                name: "flash_video",
                options: {
                    prefix: "flash_video",
                    filename: "mediaelement-flash-video.swf",
                    enablePseudoStreaming: !1,
                    pseudoStreamingStartQueryParam: "start",
                    pseudoStreamingType: "byte"
                },
                canPlayType: function (a) {
                    return t && ["video/mp4", "video/flv", "video/rtmp", "audio/rtmp", "rtmp/mp4", "audio/mp4"].includes(a)
                },
                create: s.create
            };
            n.renderer.add(u);
            var v = {
                name: "flash_hls",
                options: {
                    prefix: "flash_hls",
                    filename: "mediaelement-flash-video-hls.swf"
                },
                canPlayType: function (a) {
                    return !p.HAS_MSE && t && ["application/x-mpegurl", "vnd.apple.mpegurl", "audio/mpegurl", "audio/hls", "video/hls"].includes(a.toLowerCase())
                },
                create: s.create
            };
            n.renderer.add(v);
            var w = {
                name: "flash_dash",
                options: {
                    prefix: "flash_dash",
                    filename: "mediaelement-flash-video-mdash.swf"
                },
                canPlayType: function (a) {
                    return !p.HAS_MSE && t && ["application/dash+xml"].includes(a)
                },
                create: s.create
            };
            n.renderer.add(w);
            var x = {
                name: "flash_audio",
                options: {
                    prefix: "flash_audio",
                    filename: "mediaelement-flash-audio.swf"
                },
                canPlayType: function (a) {
                    return t && ["audio/mp3"].includes(a)
                },
                create: s.create
            };
            n.renderer.add(x);
            var y = {
                name: "flash_audio_ogg",
                options: {
                    prefix: "flash_audio_ogg",
                    filename: "mediaelement-flash-audio-ogg.swf"
                },
                canPlayType: function (a) {
                    return t && ["audio/ogg", "audio/oga", "audio/ogv"].includes(a)
                },
                create: s.create
            };
            n.renderer.add(y)
        }
    }, {
        19: 19,
        2: 2,
        20: 20,
        22: 22,
        3: 3,
        4: 4,
        6: 6,
        7: 7
    }],
    18: [function (a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {
                "default": a
            }
        }
        var e = a(3),
            f = d(e),
            g = a(2),
            h = d(g),
            i = a(6),
            j = d(i),
            k = a(7),
            l = a(20),
            m = a(19),
            n = {
                name: "html5",
                options: {
                    prefix: "html5"
                },
                canPlayType: function (a) {
                    var b = h["default"].createElement("video");
                    return m.IS_ANDROID && null !== a.match(/\/mp(3|4)$/gi) || ["application/x-mpegurl", "vnd.apple.mpegurl", "audio/mpegurl", "audio/hls", "video/hls"].includes(a.toLowerCase()) && m.SUPPORTS_NATIVE_HLS ? "yes" : b.canPlayType ? b.canPlayType(a).replace(/no/, "") : ""
                },
                create: function (a, b, c) {
                    var d = null,
                        e = a.id + "_" + b.prefix,
                        f = void 0,
                        g = void 0;
                    void 0 === a.originalNode || null === a.originalNode ? (d = h["default"].createElement("audio"), a.appendChild(d)) : d = a.originalNode, d.setAttribute("id", e);
                    var i = j["default"].html5media.properties,
                        m = function (a) {
                            var b = "" + a.substring(0, 1).toUpperCase() + a.substring(1);
                            d["get" + b] = function () {
                                return d[a]
                            }, d["set" + b] = function (b) {
                                j["default"].html5media.readOnlyProperties.includes(a) || (d[a] = b)
                            }
                        };
                    for (f = 0, g = i.length; g > f; f++) m(i[f]);
                    var n = j["default"].html5media.events.concat(["click", "mouseover", "mouseout"]),
                        o = function (b) {
                            d.addEventListener(b, function (b) {
                                var c = h["default"].createEvent("HTMLEvents");
                                c.initEvent(b.type, b.bubbles, b.cancelable), a.dispatchEvent(c)
                            })
                        };
                    for (f = 0, g = n.length; g > f; f++) o(n[f]);
                    if (d.setSize = function (a, b) {
                            return d.style.width = a + "px", d.style.height = b + "px", d
                        }, d.hide = function () {
                            return d.style.display = "none", d
                        }, d.show = function () {
                            return d.style.display = "", d
                        }, c && c.length > 0)
                        for (f = 0, g = c.length; g > f; f++)
                            if (k.renderer.renderers[b.prefix].canPlayType(c[f].type)) {
                                d.setAttribute("src", c[f].src);
                                break
                            }
                    var p = l.createEvent("rendererready", d);
                    return a.dispatchEvent(p), d
                }
            };
        f["default"].HtmlMediaElement = j["default"].HtmlMediaElement = n, k.renderer.add(n)
    }, {
        19: 19,
        2: 2,
        20: 20,
        3: 3,
        6: 6,
        7: 7
    }],
    19: [function (a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {
                "default": a
            }
        }
        Object.defineProperty(c, "__esModule", {
            value: !0
        }), c.cancelFullScreen = c.requestFullScreen = c.isFullScreen = c.FULLSCREEN_EVENT_NAME = c.HAS_NATIVE_FULLSCREEN_ENABLED = c.HAS_TRUE_NATIVE_FULLSCREEN = c.HAS_IOS_FULLSCREEN = c.HAS_MS_NATIVE_FULLSCREEN = c.HAS_MOZ_NATIVE_FULLSCREEN = c.HAS_WEBKIT_NATIVE_FULLSCREEN = c.HAS_NATIVE_FULLSCREEN = c.SUPPORTS_NATIVE_HLS = c.SUPPORTS_MEDIA_TAG = c.SUPPORT_POINTER_EVENTS = c.HAS_MSE = c.IS_STOCK_ANDROID = c.IS_SAFARI = c.IS_FIREFOX = c.IS_CHROME = c.IS_IE = c.IS_ANDROID = c.IS_IOS = c.IS_IPHONE = c.IS_IPAD = c.UA = c.NAV = void 0;
        for (var e = a(3), f = d(e), g = a(2), h = d(g), i = a(6), j = d(i), k = c.NAV = f["default"].navigator, l = c.UA = k.userAgent.toLowerCase(), m = c.IS_IPAD = null !== l.match(/ipad/i), n = c.IS_IPHONE = null !== l.match(/iphone/i), o = (c.IS_IOS = n || m, c.IS_ANDROID = null !== l.match(/android/i)), p = c.IS_IE = k.appName.toLowerCase().includes("microsoft") || null !== k.appName.toLowerCase().match(/trident/gi), q = c.IS_CHROME = null !== l.match(/chrome/gi), r = c.IS_FIREFOX = null !== l.match(/firefox/gi), s = c.IS_SAFARI = null !== l.match(/safari/gi) && !q, t = c.IS_STOCK_ANDROID = null !== l.match(/^mozilla\/\d+\.\d+\s\(linux;\su;/gi), u = (c.HAS_MSE = "MediaSource" in f["default"]), v = (c.SUPPORT_POINTER_EVENTS = function () {
                var a = h["default"].createElement("x"),
                    b = h["default"].documentElement,
                    c = f["default"].getComputedStyle,
                    d = void 0;
                return "pointerEvents" in a.style ? (a.style.pointerEvents = "auto", a.style.pointerEvents = "x", b.appendChild(a), d = c && "auto" === c(a, "").pointerEvents, b.removeChild(a), !!d) : !1
            }()), w = ["source", "track", "audio", "video"], x = void 0, y = 0, z = w.length; z > y; y++) x = h["default"].createElement(w[y]);
        var A = c.SUPPORTS_MEDIA_TAG = void 0 !== x.canPlayType || u,
            B = c.SUPPORTS_NATIVE_HLS = s || o && (q || t) || p && null !== l.match(/edge/gi),
            C = void 0 !== x.webkitEnterFullscreen,
            D = void 0 !== x.requestFullscreen;
        C && l.match(/mac os x 10_5/i) && (D = !1, C = !1);
        var E = void 0 !== x.webkitRequestFullScreen,
            F = void 0 !== x.mozRequestFullScreen,
            G = void 0 !== x.msRequestFullscreen,
            H = E || F || G,
            I = H,
            J = "",
            K = void 0,
            L = void 0,
            M = void 0;
        F ? I = h["default"].mozFullScreenEnabled : G && (I = h["default"].msFullscreenEnabled), q && (C = !1), H && (E ? J = "webkitfullscreenchange" : F ? J = "mozfullscreenchange" : G && (J = "MSFullscreenChange"), c.isFullScreen = K = function () {
            return F ? h["default"].mozFullScreen : E ? h["default"].webkitIsFullScreen : G ? null !== h["default"].msFullscreenElement : void 0
        }, c.requestFullScreen = L = function (a) {
            E ? a.webkitRequestFullScreen() : F ? a.mozRequestFullScreen() : G && a.msRequestFullscreen()
        }, c.cancelFullScreen = M = function () {
            E ? h["default"].webkitCancelFullScreen() : F ? h["default"].mozCancelFullScreen() : G && h["default"].msExitFullscreen()
        });
        var N = c.HAS_NATIVE_FULLSCREEN = D,
            O = c.HAS_WEBKIT_NATIVE_FULLSCREEN = E,
            P = c.HAS_MOZ_NATIVE_FULLSCREEN = F,
            Q = c.HAS_MS_NATIVE_FULLSCREEN = G,
            R = c.HAS_IOS_FULLSCREEN = C,
            S = c.HAS_TRUE_NATIVE_FULLSCREEN = H,
            T = c.HAS_NATIVE_FULLSCREEN_ENABLED = I,
            U = c.FULLSCREEN_EVENT_NAME = J;
        c.isFullScreen = K, c.requestFullScreen = L, c.cancelFullScreen = M, j["default"].Features = j["default"].Features || {}, j["default"].Features.isiPad = m, j["default"].Features.isiPhone = n, j["default"].Features.isiOS = j["default"].Features.isiPhone || j["default"].Features.isiPad, j["default"].Features.isAndroid = o, j["default"].Features.isIE = p, j["default"].Features.isChrome = q, j["default"].Features.isFirefox = r, j["default"].Features.isSafari = s, j["default"].Features.isStockAndroid = t, j["default"].Features.hasMSE = u, j["default"].Features.supportsMediaTag = A, j["default"].Features.supportsNativeHLS = B, j["default"].Features.supportsPointerEvents = v, j["default"].Features.hasiOSFullScreen = R, j["default"].Features.hasNativeFullscreen = N, j["default"].Features.hasWebkitNativeFullScreen = O, j["default"].Features.hasMozNativeFullScreen = P, j["default"].Features.hasMsNativeFullScreen = Q, j["default"].Features.hasTrueNativeFullScreen = S, j["default"].Features.nativeFullScreenEnabled = T, j["default"].Features.fullScreenEventName = U, j["default"].Features.isFullScreen = K, j["default"].Features.requestFullScreen = L, j["default"].Features.cancelFullScreen = M
    }, {
        2: 2,
        3: 3,
        6: 6
    }],
    20: [function (a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {
                "default": a
            }
        }

        function e(a, b) {
            if ("string" != typeof a) throw new Error("Event name must be a string");
            var c = void 0;
            return j["default"].createEvent ? (c = j["default"].createEvent("Event"), c.initEvent(a, !0, !1)) : (c = {}, c.type = a, c.target = b, c.canceleable = !0, c.bubbable = !1), c
        }

        function f(a, b, c) {
            a.addEventListener ? a.addEventListener(b, c, !1) : a.attachEvent && (a["e" + b + c] = c, a["" + b + c] = function () {
                a["e" + b + c](window.event)
            }, a.attachEvent("on" + b, a["" + b + c]))
        }

        function g(a, b, c) {
            a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent && (a.detachEvent("on" + b, a["" + b + c]), a["" + b + c] = null)
        }

        function h(a, b) {
            return !!(a && b && a.compareDocumentPosition(b) && Node.DOCUMENT_POSITION_PRECEDING)
        }
        Object.defineProperty(c, "__esModule", {
            value: !0
        }), c.createEvent = e, c.addEvent = f, c.removeEvent = g, c.isNodeAfter = h;
        var i = a(2),
            j = d(i),
            k = a(6),
            l = d(k);
        l["default"].Utils = l["default"].Utils || {}, l["default"].Utils.createEvent = e, l["default"].Utils.removeEvent = g, l["default"].Utils.isNodeAfter = h
    }, {
        2: 2,
        6: 6
    }],
    21: [function (a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {
                "default": a
            }
        }

        function e(a) {
            if ("string" != typeof a) throw new Error("Argument passed must be a string");
            var b = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;"
            };
            return a.replace(/[&<>"]/g, function (a) {
                return b[a]
            })
        }

        function f(a, b) {
            var c = this,
                d = arguments,
                e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : !1;
            if ("function" != typeof a) throw new Error("First argument must be a function");
            if ("number" != typeof b) throw new Error("Second argument must be a numeric value");
            var f = void 0;
            return function () {
                var g = c,
                    h = d,
                    i = function () {
                        f = null, e || a.apply(g, h)
                    },
                    j = e && !f;
                clearTimeout(f), f = setTimeout(i, b), j && a.apply(g, h)
            }
        }

        function g(a) {
            return Object.getOwnPropertyNames(a).length <= 0
        }

        function h(a, b) {
            var c = /^((after|before)print|(before)?unload|hashchange|message|o(ff|n)line|page(hide|show)|popstate|resize|storage)\b/,
                d = {
                    d: [],
                    w: []
                };
            return (a || "").split(" ").forEach(function (a) {
                var e = a + "." + b;
                e.startsWith(".") ? (d.d.push(e), d.w.push(e)) : d[c.test(a) ? "w" : "d"].push(e)
            }), d.d = d.d.join(" "), d.w = d.w.join(" "), d
        }

        function j(a, b, c) {
            if ((void 0 === b || null === b) && (b = l["default"]), void 0 !== b.getElementsByClassName && null !== b.getElementsByClassName) return b.getElementsByClassName(a);
            (void 0 === c || null === c) && (c = "*");
            var d = [],
                e = 0,
                f = void 0,
                g = b.getElementsByTagName(c),
                h = g.length;
            for (i = 0; i < h; i++) g[i].className.indexOf(a) > -1 && (f = "," + g[i].className.split(" ").join(",") + ",", f.indexOf("," + a + ",") > -1 && (d[e] = g[i], e++));
            return d
        }
        Object.defineProperty(c, "__esModule", {
            value: !0
        }), c.escapeHTML = e, c.debounce = f, c.isObjectEmpty = g, c.splitEvents = h, c.getElementsByClassName = j;
        var k = a(2),
            l = d(k),
            m = a(6),
            n = d(m);
        n["default"].Utils = n["default"].Utils || {}, n["default"].Utils.escapeHTML = e, n["default"].Utils.debounce = f, n["default"].Utils.isObjectEmpty = g, n["default"].Utils.splitEvents = h, n["default"].Utils.getElementsByClassName = j
    }, {
        2: 2,
        6: 6
    }],
    22: [function (a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {
                "default": a
            }
        }

        function e(a) {
            if ("string" != typeof a) throw new Error("`url` argument must be a string");
            var b = document.createElement("div");
            return b.innerHTML = '<a href="' + m.escapeHTML(a) + '">x</a>', b.firstChild.href
        }

        function f(a) {
            var b = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
            return a && !b ? h(a) : g(b)
        }

        function g(a) {
            if ("string" != typeof a) throw new Error("`type` argument must be a string");
            return a && ~a.indexOf(";") ? a.substr(0, a.indexOf(";")) : a
        }

        function h(a) {
            if ("string" != typeof a) throw new Error("`url` argument must be a string");
            var b = void 0;
            if (!Array.isArray(n)) throw new Error("`typeChecks` must be an array");
            if (n.length)
                for (var c = 0, d = n.length; d > c; c++) {
                    var e = n[c];
                    if ("function" != typeof e) throw new Error("Element in array must be a function")
                }
            for (var f = 0, g = n.length; g > f; f++)
                if (b = n[f](a), void 0 !== b && null !== b) return b;
            var h = i(a),
                k = j(h);
            return (/(mp4|m4v|ogg|ogv|webm|webmv|flv|wmv|mpeg|mov)/gi.test(h) ? "video" : "audio") + "/" + k
        }

        function i(a) {
            if ("string" != typeof a) throw new Error("`url` argument must be a string");
            var b = a.split("?")[0];
            return ~b.indexOf(".") ? b.substring(b.lastIndexOf(".") + 1) : ""
        }

        function j(a) {
            if ("string" != typeof a) throw new Error("`extension` argument must be a string");
            switch (a) {
            case "mp4":
            case "m4v":
                return "mp4";
            case "webm":
            case "webma":
            case "webmv":
                return "webm";
            case "ogg":
            case "oga":
            case "ogv":
                return "ogg";
            default:
                return a
            }
        }
        Object.defineProperty(c, "__esModule", {
            value: !0
        }), c.typeChecks = void 0, c.absolutizeUrl = e, c.formatType = f, c.getMimeFromType = g, c.getTypeFromFile = h, c.getExtension = i, c.normalizeExtension = j;
        var k = a(6),
            l = d(k),
            m = a(21),
            n = c.typeChecks = [];
        l["default"].Utils = l["default"].Utils || {}, l["default"].Utils.absolutizeUrl = e, l["default"].Utils.formatType = f, l["default"].Utils.getMimeFromType = g, l["default"].Utils.getTypeFromFile = h, l["default"].Utils.getExtension = i, l["default"].Utils.normalizeExtension = j
    }, {
        21: 21,
        6: 6
    }],
    23: [function (a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {
                "default": a
            }
        }
        var e = a(2),
            f = d(e);
        Array.prototype.indexOf || (Array.prototype.indexOf = function (a, b) {
            throw new TypeError('"this" is null or not defined')
        }), void 0 === f["default"].createEvent && (f["default"].createEvent = function () {
            var a = void 0;
            return a = f["default"].createEventObject(), a.timeStamp = (new Date).getTime(), a.enumerable = !0, a.writable = !0, a.configurable = !0, a.initEvent = function (a, b, c) {
                (void 0).type = a, (void 0).bubbles = !!b, (void 0).cancelable = !!c, (void 0).bubbles || ((void 0).stopPropagation = function () {
                    (void 0).stoppedPropagation = !0, (void 0).cancelBubble = !0
                })
            }, a
        }), "function" != typeof Object.assign && (Object.assign = function (a, b) {
            if (null === a || void 0 === a) throw new TypeError("Cannot convert undefined or null to object");
            for (var c = Object(a), d = 1; d < arguments.length; d++) {
                var e = arguments[d];
                if (null !== e)
                    for (var f in e) Object.prototype.hasOwnProperty.call(e, f) && (c[f] = e[f])
            }
            return c
        }), Array.prototype.includes || Object.defineProperty(Array.prototype, "includes", {
            value: function (a, b) {
                if (null === this || void 0 === this) throw new TypeError('"this" is null or not defined');
                var c = Object(this),
                    d = c.length >>> 0;
                if (0 === d) return !1;
                for (var e = 0 | b, f = Math.max(e >= 0 ? e : d - Math.abs(e), 0); d > f;) {
                    if (c[f] === a) return !0;
                    f++
                }
                return !1
            }
        }), String.prototype.includes || (String.prototype.includes = function () {
            return -1 !== String.prototype.indexOf.apply(this, arguments)
        }), String.prototype.startsWith || (String.prototype.startsWith = function (a, b) {
            return b = b || 0, this.substr(b, a.length) === a
        })
    }, {
        2: 2
    }],
    24: [function (a, b, c) {
        "use strict";

        function d(a) {
            return a && a.__esModule ? a : {
                "default": a
            }
        }

        function e(a) {
            var b = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : !1,
                c = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : !1,
                d = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 25;
            a = !a || "number" != typeof a || 0 > a ? 0 : a;
            var e = Math.floor(a / 3600) % 24,
                f = Math.floor(a / 60) % 60,
                g = Math.floor(a % 60),
                h = Math.floor((a % 1 * d).toFixed(3));
            e = 0 >= e ? 0 : e, f = 0 >= f ? 0 : f, g = 0 >= g ? 0 : g;
            var i = b || e > 0 ? (10 > e ? "0" + e : e) + ":" : "";
            return i += (10 > f ? "0" + f : f) + ":", i += "" + (10 > g ? "0" + g : g), i += "" + (c ? ":" + (10 > h ? "0" + h : h) : "")
        }

        function f(a) {
            var b = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : !1,
                c = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 25;
            if ("string" != typeof a) throw new TypeError("Time must be a string");
            if (!a.match(/\d{2}(\:\d{2}){0,3}/)) throw new TypeError("Time code must have the format `00:00:00`");
            var d = a.split(":"),
                e = 0,
                f = 0,
                g = 0,
                h = 0,
                i = void 0;
            switch (d.length) {
                default:
                case 1:
                    h = parseInt(d[0], 10);
                break;
            case 2:
                    f = parseInt(d[0], 10),
                h = parseInt(d[1], 10);
                break;
            case 3:
                case 4:
                    e = parseInt(d[0], 10),
                f = parseInt(d[1], 10),
                h = parseInt(d[2], 10),
                g = b ? parseInt(d[3]) / c : 0
            }
            return i = 3600 * e + 60 * f + h + g, parseFloat(i.toFixed(3))
        }

        function g(a, b) {
            var c = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 25;
            a = !a || "number" != typeof a || 0 > a ? 0 : a;
            for (var d = !1, e = b.timeFormat, f = e[0], g = e[1] === e[0], h = g ? 2 : 1, i = e.length < h ? e[h] : ":", j = Math.floor(a / 3600) % 24, k = Math.floor(a / 60) % 60, l = Math.floor(a % 60), m = Math.floor((a % 1 * c).toFixed(3)), n = [[m, "f"], [l, "s"], [k, "m"], [j, "h"]], o = 0, p = n.length; p > o; o++)
                if (e.indexOf(n[o][1]) > -1) d = !0;
                else if (d) {
                for (var q = !1, r = o; p > r; r++)
                    if (n[r][0] > 0) {
                        q = !0;
                        break
                    }
                if (!q) break;
                g || (e = f + e), e = n[o][1] + i + e, g && (e = n[o][1] + e), f = n[o][1]
            }
            b.currentTimeFormat = e
        }

        function h(a) {
            if ("string" != typeof a) throw new TypeError("Argument must be a string value");
            a = a.replace(",", ".");
            var b = 0,
                c = a.indexOf(".") > -1 ? a.split(".")[1].length : 0,
                d = 1;
            a = a.split(":").reverse();
            for (var e = 0; e < a.length; e++) d = 1, e > 0 && (d = Math.pow(60, e)), b += Number(a[e]) * d;
            return Number(b.toFixed(c))
        }
        Object.defineProperty(c, "__esModule", {
            value: !0
        }), c.secondsToTimeCode = e, c.timeCodeToSeconds = f, c.calculateTimeFormat = g, c.convertSMPTEtoSeconds = h;
        var i = a(6),
            j = d(i);
        j["default"].Utils = j["default"].Utils || {}, j["default"].Utils.secondsToTimeCode = e, j["default"].Utils.timeCodeToSeconds = f, j["default"].Utils.calculateTimeFormat = g, j["default"].Utils.convertSMPTEtoSeconds = h
    }, {
        6: 6
    }]
}, {}, [23, 5, 4, 14, 18, 17, 15, 16, 8, 9, 10, 11, 12, 13]);