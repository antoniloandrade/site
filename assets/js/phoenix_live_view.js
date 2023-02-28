!function (e, t) {
	"object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.phoenix_live_view = t() : e.phoenix_live_view = t()
}(this, function () {
	return function (e) {
		var t = {};
		function n(i) {
			if (t[i])
				return t[i].exports;
			var r = t[i] = {
				i: i,
				l: !1,
				exports: {}
			};
			return e[i].call(r.exports, r, r.exports, n),
				r.l = !0,
				r.exports
		}
		return n.m = e,
			n.c = t,
			n.d = function (e, t, i) {
				n.o(e, t) || Object.defineProperty(e, t, {
					configurable: !1,
					enumerable: !0,
					get: i
				})
			}
			,
			n.r = function (e) {
				Object.defineProperty(e, "__esModule", {
					value: !0
				})
			}
			,
			n.n = function (e) {
				var t = e && e.__esModule ? function () {
					return e.default
				}
					: function () {
						return e
					}
					;
				return n.d(t, "a", t),
					t
			}
			,
			n.o = function (e, t) {
				return Object.prototype.hasOwnProperty.call(e, t)
			}
			,
			n.p = "",
			n(n.s = 2)
	}([function (e, t, n) {
		"use strict";
		n.r(t);
		var i, r = 11;
		var o = "http://www.w3.org/1999/xhtml"
			, a = "undefined" == typeof document ? void 0 : document
			, u = !!a && "content" in a.createElement("template")
			, s = !!a && a.createRange && "createContextualFragment" in a.createRange();
		function c(e) {
			return e = e.trim(),
				u ? function (e) {
					var t = a.createElement("template");
					return t.innerHTML = e,
						t.content.childNodes[0]
				}(e) : s ? function (e) {
					return i || (i = a.createRange()).selectNode(a.body),
						i.createContextualFragment(e).childNodes[0]
				}(e) : function (e) {
					var t = a.createElement("body");
					return t.innerHTML = e,
						t.childNodes[0]
				}(e)
		}
		function l(e, t) {
			var n, i, r = e.nodeName, o = t.nodeName;
			return r === o || (n = r.charCodeAt(0),
				i = o.charCodeAt(0),
				n <= 90 && i >= 97 ? r === o.toUpperCase() : i <= 90 && n >= 97 && o === r.toUpperCase())
		}
		function d(e, t, n) {
			e[n] !== t[n] && (e[n] = t[n],
				e[n] ? e.setAttribute(n, "") : e.removeAttribute(n))
		}
		var h = {
			OPTION: function (e, t) {
				var n = e.parentNode;
				if (n) {
					var i = n.nodeName.toUpperCase();
					"OPTGROUP" === i && (i = (n = n.parentNode) && n.nodeName.toUpperCase()),
						"SELECT" !== i || n.hasAttribute("multiple") || (e.hasAttribute("selected") && !t.selected && (e.setAttribute("selected", "selected"),
							e.removeAttribute("selected")),
							n.selectedIndex = -1)
				}
				d(e, t, "selected")
			},
			INPUT: function (e, t) {
				d(e, t, "checked"),
					d(e, t, "disabled"),
					e.value !== t.value && (e.value = t.value),
					t.hasAttribute("value") || e.removeAttribute("value")
			},
			TEXTAREA: function (e, t) {
				var n = t.value;
				e.value !== n && (e.value = n);
				var i = e.firstChild;
				if (i) {
					var r = i.nodeValue;
					if (r == n || !n && r == e.placeholder)
						return;
					i.nodeValue = n
				}
			},
			SELECT: function (e, t) {
				if (!t.hasAttribute("multiple")) {
					for (var n, i, r = -1, o = 0, a = e.firstChild; a;)
						if ("OPTGROUP" === (i = a.nodeName && a.nodeName.toUpperCase()))
							a = (n = a).firstChild;
						else {
							if ("OPTION" === i) {
								if (a.hasAttribute("selected")) {
									r = o;
									break
								}
								o++
							}
							!(a = a.nextSibling) && n && (a = n.nextSibling,
								n = null)
						}
					e.selectedIndex = r
				}
			}
		}
			, f = 1
			, v = 11
			, p = 3
			, g = 8;
		function m() { }
		function y(e) {
			if (e)
				return e.getAttribute && e.getAttribute("id") || e.id
		}
		var b = function (e) {
			return function (t, n, i) {
				if (i || (i = {}),
					"string" == typeof n)
					if ("#document" === t.nodeName || "HTML" === t.nodeName || "BODY" === t.nodeName) {
						var r = n;
						(n = a.createElement("html")).innerHTML = r
					} else
						n = c(n);
				var u = i.getNodeKey || y
					, s = i.onBeforeNodeAdded || m
					, d = i.onNodeAdded || m
					, b = i.onBeforeElUpdated || m
					, k = i.onElUpdated || m
					, w = i.onBeforeNodeDiscarded || m
					, A = i.onNodeDiscarded || m
					, E = i.onBeforeElChildrenUpdated || m
					, S = !0 === i.childrenOnly
					, x = Object.create(null)
					, C = [];
				function P(e) {
					C.push(e)
				}
				function L(e, t, n) {
					!1 !== w(e) && (t && t.removeChild(e),
						A(e),
						function e(t, n) {
							if (t.nodeType === f)
								for (var i = t.firstChild; i;) {
									var r = void 0;
									n && (r = u(i)) ? P(r) : (A(i),
										i.firstChild && e(i, n)),
										i = i.nextSibling
								}
						}(e, n))
				}
				function I(e) {
					d(e);
					for (var t = e.firstChild; t;) {
						var n = t.nextSibling
							, i = u(t);
						if (i) {
							var r = x[i];
							r && l(t, r) ? (t.parentNode.replaceChild(r, t),
								T(r, t)) : I(t)
						} else
							I(t);
						t = n
					}
				}
				function T(t, n, i) {
					var r = u(n);
					if (r && delete x[r],
						!i) {
						if (!1 === b(t, n))
							return;
						if (e(t, n),
							k(t),
							!1 === E(t, n))
							return
					}
					"TEXTAREA" !== t.nodeName ? function (e, t) {
						var n, i, r, o, c, d = t.firstChild, v = e.firstChild;
						e: for (; d;) {
							for (o = d.nextSibling,
								n = u(d); v;) {
								if (r = v.nextSibling,
									d.isSameNode && d.isSameNode(v)) {
									d = o,
										v = r;
									continue e
								}
								i = u(v);
								var m = v.nodeType
									, y = void 0;
								if (m === d.nodeType && (m === f ? (n ? n !== i && ((c = x[n]) ? r === c ? y = !1 : (e.insertBefore(c, v),
									i ? P(i) : L(v, e, !0),
									v = c) : y = !1) : i && (y = !1),
									(y = !1 !== y && l(v, d)) && T(v, d)) : m !== p && m != g || (y = !0,
										v.nodeValue !== d.nodeValue && (v.nodeValue = d.nodeValue))),
									y) {
									d = o,
										v = r;
									continue e
								}
								i ? P(i) : L(v, e, !0),
									v = r
							}
							if (n && (c = x[n]) && l(c, d))
								e.appendChild(c),
									T(c, d);
							else {
								var b = s(d);
								!1 !== b && (b && (d = b),
									d.actualize && (d = d.actualize(e.ownerDocument || a)),
									e.appendChild(d),
									I(d))
							}
							d = o,
								v = r
						}
						!function (e, t, n) {
							for (; t;) {
								var i = t.nextSibling;
								(n = u(t)) ? P(n) : L(t, e, !0),
									t = i
							}
						}(e, v, i);
						var k = h[e.nodeName];
						k && k(e, t)
					}(t, n) : h.TEXTAREA(t, n)
				}
				!function e(t) {
					if (t.nodeType === f || t.nodeType === v)
						for (var n = t.firstChild; n;) {
							var i = u(n);
							i && (x[i] = n),
								e(n),
								n = n.nextSibling
						}
				}(t);
				var _ = t
					, D = _.nodeType
					, R = n.nodeType;
				if (!S)
					if (D === f)
						R === f ? l(t, n) || (A(t),
							_ = function (e, t) {
								for (var n = e.firstChild; n;) {
									var i = n.nextSibling;
									t.appendChild(n),
										n = i
								}
								return t
							}(t, function (e, t) {
								return t && t !== o ? a.createElementNS(t, e) : a.createElement(e)
							}(n.nodeName, n.namespaceURI))) : _ = n;
					else if (D === p || D === g) {
						if (R === D)
							return _.nodeValue !== n.nodeValue && (_.nodeValue = n.nodeValue),
								_;
						_ = n
					}
				if (_ === n)
					A(t);
				else {
					if (n.isSameNode && n.isSameNode(_))
						return;
					if (T(_, n, S),
						C)
						for (var N = 0, O = C.length; N < O; N++) {
							var H = x[C[N]];
							H && L(H, H.parentNode, !1)
						}
				}
				return !S && _ !== t && t.parentNode && (_.actualize && (_ = _.actualize(t.ownerDocument || a)),
					t.parentNode.replaceChild(_, t)),
					_
			}
		}(function (e, t) {
			var n, i, o, a, u = t.attributes;
			if (t.nodeType !== r && e.nodeType !== r) {
				for (var s = u.length - 1; s >= 0; s--)
					i = (n = u[s]).name,
						o = n.namespaceURI,
						a = n.value,
						o ? (i = n.localName || i,
							e.getAttributeNS(o, i) !== a && ("xmlns" === n.prefix && (i = n.name),
								e.setAttributeNS(o, i, a))) : e.getAttribute(i) !== a && e.setAttribute(i, a);
				for (var c = e.attributes, l = c.length - 1; l >= 0; l--)
					i = (n = c[l]).name,
						(o = n.namespaceURI) ? (i = n.localName || i,
							t.hasAttributeNS(o, i) || e.removeAttributeNS(o, i)) : t.hasAttribute(i) || e.removeAttribute(i)
			}
		});
		function k(e) {
			return P(e) || S(e) || L(e) || C()
		}
		function w(e, t) {
			var n = Object.keys(e);
			if (Object.getOwnPropertySymbols) {
				var i = Object.getOwnPropertySymbols(e);
				t && (i = i.filter(function (t) {
					return Object.getOwnPropertyDescriptor(e, t).enumerable
				})),
					n.push.apply(n, i)
			}
			return n
		}
		function A(e, t, n) {
			return t in e ? Object.defineProperty(e, t, {
				value: n,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : e[t] = n,
				e
		}
		function E(e) {
			return function (e) {
				if (Array.isArray(e))
					return I(e)
			}(e) || S(e) || L(e) || function () {
				throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
			}()
		}
		function S(e) {
			if ("undefined" != typeof Symbol && Symbol.iterator in Object(e))
				return Array.from(e)
		}
		function x(e, t) {
			return P(e) || function (e, t) {
				if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))
					return;
				var n = []
					, i = !0
					, r = !1
					, o = void 0;
				try {
					for (var a, u = e[Symbol.iterator](); !(i = (a = u.next()).done) && (n.push(a.value),
						!t || n.length !== t); i = !0)
						;
				} catch (e) {
					r = !0,
						o = e
				} finally {
					try {
						i || null == u.return || u.return()
					} finally {
						if (r)
							throw o
					}
				}
				return n
			}(e, t) || L(e, t) || C()
		}
		function C() {
			throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
		}
		function P(e) {
			if (Array.isArray(e))
				return e
		}
		function L(e, t) {
			if (e) {
				if ("string" == typeof e)
					return I(e, t);
				var n = Object.prototype.toString.call(e).slice(8, -1);
				return "Object" === n && e.constructor && (n = e.constructor.name),
					"Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? I(e, t) : void 0
			}
		}
		function I(e, t) {
			(null == t || t > e.length) && (t = e.length);
			for (var n = 0, i = new Array(t); n < t; n++)
				i[n] = e[n];
			return i
		}
		function T(e, t) {
			if (!(e instanceof t))
				throw new TypeError("Cannot call a class as a function")
		}
		function _(e, t) {
			for (var n = 0; n < t.length; n++) {
				var i = t[n];
				i.enumerable = i.enumerable || !1,
					i.configurable = !0,
					"value" in i && (i.writable = !0),
					Object.defineProperty(e, i.key, i)
			}
		}
		function D(e, t, n) {
			return t && _(e.prototype, t),
				n && _(e, n),
				e
		}
		function R(e) {
			"@babel/helpers - typeof";
			return (R = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
				return typeof e
			}
				: function (e) {
					return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
				}
			)(e)
		}
		n.d(t, "debug", function () {
			return K
		}),
			n.d(t, "Rendered", function () {
				return ue
			}),
			n.d(t, "LiveSocket", function () {
				return se
			}),
			n.d(t, "Browser", function () {
				return ce
			}),
			n.d(t, "DOM", function () {
				return le
			}),
			n.d(t, "View", function () {
				return fe
			});
		var N = [1e3, 3e3]
			, O = "data-phx-view"
			, H = ["phx-click-loading", "phx-change-loading", "phx-submit-loading", "phx-keydown-loading", "phx-keyup-loading", "phx-blur-loading", "phx-focus-loading"]
			, j = "data-phx-component"
			, F = "data-phx-ref"
			, M = "[".concat(O, "]")
			, B = ["text", "textarea", "number", "email", "password", "search", "tel", "url", "date", "time"]
			, U = ["checkbox", "radio"]
			, J = "data-phx-static"
			, V = 1
			, W = "phx-"
			, q = {
				debounce: 300,
				throttle: 300
			}
			, z = function (e, t) {
				return console.error && console.error(e, t)
			};
		var K = function (e, t, n, i) {
			e.liveSocket.isDebugEnabled() && console.log("".concat(e.id, " ").concat(t, ": ").concat(n, " - "), i)
		}
			, $ = function (e) {
				return "function" == typeof e ? e : function () {
					return e
				}
			}
			, X = function (e) {
				return JSON.parse(JSON.stringify(e))
			}
			, G = function (e, t, n) {
				do {
					if (e.matches("[".concat(t, "]")))
						return e;
					e = e.parentElement || e.parentNode
				} while (null !== e && 1 === e.nodeType && !(n && n.isSameNode(e) || e.matches(M)));
				return null
			}
			, Y = function (e) {
				return null !== e && "object" === R(e) && !(e instanceof Array)
			}
			, Q = function (e) {
				for (var t in e)
					return !1;
				return !0
			}
			, Z = function (e, t) {
				return e && t(e)
			}
			, ee = function () {
				function e(t, n, i) {
					T(this, e),
						this.ref = ie.genFileRef(n),
						this.fileEl = t,
						this.file = n,
						this.view = i,
						this.meta = null,
						this._isCancelled = !1,
						this._isDone = !1,
						this._progress = 0,
						this._onDone = function () { }
				}
				return D(e, null, [{
					key: "isActive",
					value: function (e, t) {
						var n = void 0 === t._phxRef
							, i = e.getAttribute("data-phx-active-refs").split(",").indexOf(ie.genFileRef(t)) >= 0;
						return t.size > 0 && (n || i)
					}
				}, {
					key: "isPreflighted",
					value: function (e, t) {
						var n = e.getAttribute("data-phx-preflighted-refs").split(",").indexOf(ie.genFileRef(t)) >= 0;
						return n && this.isActive(e, t)
					}
				}]),
					D(e, [{
						key: "metadata",
						value: function () {
							return this.meta
						}
					}, {
						key: "progress",
						value: function (e) {
							var t = this;
							this._progress = Math.floor(e),
								this._progress >= 100 ? (this._progress = 100,
									this._isDone = !0,
									this.view.pushFileProgress(this.fileEl, this.ref, 100, function () {
										ie.untrackFile(t.fileEl, t.file),
											t._onDone()
									})) : this.view.pushFileProgress(this.fileEl, this.ref, this._progress)
						}
					}, {
						key: "cancel",
						value: function () {
							this._isCancelled = !0,
								this._isDone = !0,
								this._onDone()
						}
					}, {
						key: "isDone",
						value: function () {
							return this._isDone
						}
					}, {
						key: "error",
						value: function () {
							var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "failed";
							this.view.pushFileProgress(this.fileEl, this.ref, {
								error: e
							})
						}
					}, {
						key: "onDone",
						value: function (e) {
							this._onDone = e
						}
					}, {
						key: "toPreflightPayload",
						value: function () {
							return {
								last_modified: this.file.lastModified,
								name: this.file.name,
								size: this.file.size,
								type: this.file.type,
								ref: this.ref
							}
						}
					}, {
						key: "uploader",
						value: function (e) {
							if (this.meta.uploader) {
								var t = e[this.meta.uploader] || z("no uploader configured for ".concat(this.meta.uploader));
								return {
									name: this.meta.uploader,
									callback: t
								}
							}
							return {
								name: "channel",
								callback: re
							}
						}
					}, {
						key: "zipPostFlight",
						value: function (e) {
							this.meta = e.entries[this.ref],
								this.meta || z("no preflight upload response returned with ref ".concat(this.ref), {
									input: this.fileEl,
									response: e
								})
						}
					}]),
					e
			}()
			, te = {
				LiveFileUpload: {
					preflightedRefs: function () {
						return this.el.getAttribute("data-phx-preflighted-refs")
					},
					mounted: function () {
						this.preflightedWas = this.preflightedRefs()
					},
					updated: function () {
						var e = this.preflightedRefs();
						this.preflightedWas !== e && (this.preflightedWas = e,
							"" === e && this.__view.cancelSubmit(this.el.form))
					}
				}
			};
		te.LiveImgPreview = {
			mounted: function () {
				var e = this;
				this.ref = this.el.getAttribute("data-phx-entry-ref"),
					this.inputEl = document.getElementById(this.el.getAttribute("data-phx-upload-ref")),
					ie.getEntryDataURL(this.inputEl, this.ref, function (t) {
						return e.el.src = t
					})
			}
		};
		var ne = 0
			, ie = function () {
				function e(t, n, i) {
					T(this, e),
						this.view = n,
						this.onComplete = i,
						this._entries = Array.from(e.filesAwaitingPreflight(t) || []).map(function (e) {
							return new ee(t, e, n)
						}),
						this.numEntriesInProgress = this._entries.length
				}
				return D(e, null, [{
					key: "genFileRef",
					value: function (e) {
						var t = e._phxRef;
						return void 0 !== t ? t : (e._phxRef = (ne++).toString(),
							e._phxRef)
					}
				}, {
					key: "getEntryDataURL",
					value: function (e, t, n) {
						var i = this
							, r = this.activeFiles(e).find(function (e) {
								return i.genFileRef(e) === t
							})
							, o = new FileReader;
						o.onload = function (e) {
							return n(e.target.result)
						}
							,
							o.readAsDataURL(r)
					}
				}, {
					key: "hasUploadsInProgress",
					value: function (e) {
						var t = 0;
						return le.all(e, 'input[type="file"]', function (e) {
							e.getAttribute("data-phx-preflighted-refs") !== e.getAttribute("data-phx-done-refs") && t++
						}),
							t > 0
					}
				}, {
					key: "serializeUploads",
					value: function (e) {
						var t = this
							, n = {};
						return this.activeFiles(e, "serialize").forEach(function (i) {
							var r = {
								path: e.name
							}
								, o = e.getAttribute("data-phx-upload-ref");
							n[o] = n[o] || [],
								r.ref = t.genFileRef(i),
								r.name = i.name,
								r.type = i.type,
								r.size = i.size,
								n[o].push(r)
						}),
							n
					}
				}, {
					key: "clearFiles",
					value: function (e) {
						e.value = null,
							le.putPrivate(e, "files", [])
					}
				}, {
					key: "untrackFile",
					value: function (e, t) {
						le.putPrivate(e, "files", le.private(e, "files").filter(function (e) {
							return !Object.is(e, t)
						}))
					}
				}, {
					key: "trackFiles",
					value: function (e, t) {
						var n = this;
						if (null !== e.getAttribute("multiple")) {
							var i = t.filter(function (t) {
								return !n.activeFiles(e).find(function (e) {
									return Object.is(e, t)
								})
							});
							le.putPrivate(e, "files", this.activeFiles(e).concat(i)),
								e.value = null
						} else
							le.putPrivate(e, "files", t)
					}
				}, {
					key: "activeFileInputs",
					value: function (e) {
						var t = this
							, n = e.querySelectorAll('input[type="file"]');
						return Array.from(n).filter(function (e) {
							return e.files && t.activeFiles(e).length > 0
						})
					}
				}, {
					key: "activeFiles",
					value: function (e) {
						return (le.private(e, "files") || []).filter(function (t) {
							return ee.isActive(e, t)
						})
					}
				}, {
					key: "inputsAwaitingPreflight",
					value: function (e) {
						var t = this
							, n = e.querySelectorAll('input[type="file"]');
						return Array.from(n).filter(function (e) {
							return t.filesAwaitingPreflight(e).length > 0
						})
					}
				}, {
					key: "filesAwaitingPreflight",
					value: function (e) {
						return this.activeFiles(e).filter(function (t) {
							return !ee.isPreflighted(e, t)
						})
					}
				}]),
					D(e, [{
						key: "entries",
						value: function () {
							return this._entries
						}
					}, {
						key: "initAdapterUpload",
						value: function (e, t, n) {
							var i = this;
							this._entries = this._entries.map(function (t) {
								return t.zipPostFlight(e),
									t.onDone(function () {
										i.numEntriesInProgress--,
											0 === i.numEntriesInProgress && i.onComplete()
									}),
									t
							});
							var r = this._entries.reduce(function (e, t) {
								var i = t.uploader(n.uploaders)
									, r = i.name
									, o = i.callback;
								return e[r] = e[r] || {
									callback: o,
									entries: []
								},
									e[r].entries.push(t),
									e
							}, {});
							for (var o in r) {
								var a = r[o];
								(0,
									a.callback)(a.entries, t, e, n)
							}
						}
					}]),
					e
			}()
			, re = function (e, t, n, i) {
				e.forEach(function (e) {
					new oe(e, n.config.chunk_size, i).upload()
				})
			}
			, oe = function () {
				function e(t, n, i) {
					T(this, e),
						this.liveSocket = i,
						this.entry = t,
						this.offset = 0,
						this.chunkSize = n,
						this.uploadChannel = i.channel("lvu:".concat(t.ref), {
							token: t.metadata()
						})
				}
				return D(e, [{
					key: "upload",
					value: function () {
						var e = this;
						this.uploadChannel.join().receive("ok", function (t) {
							return e.readNextChunk()
						}).receive("error", function (t) {
							e.uploadChannel.leave(),
								e.entry.error()
						})
					}
				}, {
					key: "isDone",
					value: function () {
						return this.offset >= this.entry.file.size
					}
				}, {
					key: "readNextChunk",
					value: function () {
						var e = this
							, t = new window.FileReader
							, n = this.entry.file.slice(this.offset, this.chunkSize + this.offset);
						t.onload = function (t) {
							if (null !== t.target.error)
								return z("Read error: " + t.target.error);
							e.offset += t.target.result.byteLength,
								e.pushChunk(t.target.result)
						}
							,
							t.readAsArrayBuffer(n)
					}
				}, {
					key: "pushChunk",
					value: function (e) {
						var t = this;
						this.uploadChannel.isJoined() && this.uploadChannel.push("chunk", e).receive("ok", function () {
							t.entry.progress(t.offset / t.entry.file.size * 100),
								t.isDone() || setTimeout(function () {
									return t.readNextChunk()
								}, t.liveSocket.getLatencySim() || 0)
						})
					}
				}]),
					e
			}()
			, ae = function (e) {
				var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
					, n = new FormData(e)
					, i = [];
				n.forEach(function (e, t, n) {
					e instanceof File && i.push(t)
				}),
					i.forEach(function (e) {
						return n.delete(e)
					});
				var r, o = new URLSearchParams, a = function (e) {
					if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
						if (Array.isArray(e) || (e = L(e))) {
							var t = 0
								, n = function () { };
							return {
								s: n,
								n: function () {
									return t >= e.length ? {
										done: !0
									} : {
										done: !1,
										value: e[t++]
									}
								},
								e: function (e) {
									throw e
								},
								f: n
							}
						}
						throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
					}
					var i, r, o = !0, a = !1;
					return {
						s: function () {
							i = e[Symbol.iterator]()
						},
						n: function () {
							var e = i.next();
							return o = e.done,
								e
						},
						e: function (e) {
							a = !0,
								r = e
						},
						f: function () {
							try {
								o || null == i.return || i.return()
							} finally {
								if (a)
									throw r
							}
						}
					}
				}(n.entries());
				try {
					for (a.s(); !(r = a.n()).done;) {
						var u = x(r.value, 2)
							, s = u[0]
							, c = u[1];
						o.append(s, c)
					}
				} catch (e) {
					a.e(e)
				} finally {
					a.f()
				}
				for (var l in t)
					o.append(l, t[l]);
				return o.toString()
			}
			, ue = function () {
				function e(t, n) {
					T(this, e),
						this.viewId = t,
						this.rendered = {},
						this.mergeDiff(n)
				}
				return D(e, null, [{
					key: "extract",
					value: function (e) {
						var t = e.r
							, n = e.e
							, i = e.t;
						return delete e.r,
							delete e.e,
							delete e.t,
						{
							diff: e,
							title: i,
							reply: t || null,
							events: n || []
						}
					}
				}]),
					D(e, [{
						key: "parentViewId",
						value: function () {
							return this.viewId
						}
					}, {
						key: "toString",
						value: function (e) {
							return this.recursiveToString(this.rendered, this.rendered.c, e)
						}
					}, {
						key: "recursiveToString",
						value: function (e) {
							var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e.c
								, n = arguments.length > 2 ? arguments[2] : void 0
								, i = {
									buffer: "",
									components: t,
									onlyCids: n = n ? new Set(n) : null
								};
							return this.toOutputBuffer(e, i),
								i.buffer
						}
					}, {
						key: "componentCIDs",
						value: function (e) {
							return Object.keys(e.c || {}).map(function (e) {
								return parseInt(e)
							})
						}
					}, {
						key: "isComponentOnlyDiff",
						value: function (e) {
							return !!e.c && 1 === Object.keys(e).length
						}
					}, {
						key: "getComponent",
						value: function (e, t) {
							return e.c[t]
						}
					}, {
						key: "mergeDiff",
						value: function (e) {
							var t = e.c;
							if (delete e.c,
								this.rendered = this.recursiveMerge(this.rendered, e),
								this.rendered.c = this.rendered.c || {},
								t) {
								var n = this.rendered.c;
								for (var i in t) {
									var r = t[i]
										, o = r
										, a = o.s;
									if ("number" == typeof a) {
										for (; "number" == typeof a;)
											a = (o = a > 0 ? t[a] : n[-a]).s;
										o = X(o),
											this.doRecursiveMerge(o, r),
											o.s = a
									} else
										o = n[i] || {},
											o = this.recursiveMerge(o, r);
									t[i] = o
								}
								for (var u in t)
									n[u] = t[u];
								e.c = t
							}
						}
					}, {
						key: "recursiveMerge",
						value: function (e, t) {
							return void 0 !== t.s ? t : (this.doRecursiveMerge(e, t),
								e)
						}
					}, {
						key: "doRecursiveMerge",
						value: function (e, t) {
							for (var n in t) {
								var i = t[n]
									, r = e[n];
								Y(i) && void 0 === i.s && Y(r) ? this.doRecursiveMerge(r, i) : e[n] = i
							}
						}
					}, {
						key: "componentToString",
						value: function (e) {
							return this.recursiveCIDToString(this.rendered.c, e)
						}
					}, {
						key: "pruneCIDs",
						value: function (e) {
							var t = this;
							e.forEach(function (e) {
								return delete t.rendered.c[e]
							})
						}
					}, {
						key: "get",
						value: function () {
							return this.rendered
						}
					}, {
						key: "isNewFingerprint",
						value: function () {
							return !!(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).s
						}
					}, {
						key: "toOutputBuffer",
						value: function (e, t) {
							if (e.d)
								return this.comprehensionToBuffer(e, t);
							var n = e.s;
							t.buffer += n[0];
							for (var i = 1; i < n.length; i++)
								this.dynamicToBuffer(e[i - 1], t),
									t.buffer += n[i]
						}
					}, {
						key: "comprehensionToBuffer",
						value: function (e, t) {
							for (var n = e.d, i = e.s, r = 0; r < n.length; r++) {
								var o = n[r];
								t.buffer += i[0];
								for (var a = 1; a < i.length; a++)
									this.dynamicToBuffer(o[a - 1], t),
										t.buffer += i[a]
							}
						}
					}, {
						key: "dynamicToBuffer",
						value: function (e, t) {
							"number" == typeof e ? t.buffer += this.recursiveCIDToString(t.components, e, t.onlyCids) : Y(e) ? this.toOutputBuffer(e, t) : t.buffer += e
						}
					}, {
						key: "recursiveCIDToString",
						value: function (e, t, n) {
							var i = this
								, r = e[t] || z("no component for CID ".concat(t), e)
								, o = document.createElement("template");
							o.innerHTML = this.recursiveToString(r, e, n);
							var a = o.content
								, u = n && !n.has(t)
								, s = x(Array.from(a.childNodes).reduce(function (e, n, r) {
									var a = x(e, 2)
										, s = a[0]
										, c = a[1];
									return n.nodeType === Node.ELEMENT_NODE ? n.getAttribute(j) ? [s, !0] : (n.setAttribute(j, t),
										n.id || (n.id = "".concat(i.parentViewId(), "-").concat(t, "-").concat(r)),
										u && (n.setAttribute("data-phx-skip", ""),
											n.innerHTML = ""),
										[!0, c]) : "" !== n.nodeValue.trim() ? (z("only HTML element tags are allowed at the root of components.\n\n" + 'got: "'.concat(n.nodeValue.trim(), '"\n\n') + "within:\n", o.innerHTML.trim()),
											n.replaceWith(i.createSpan(n.nodeValue, t)),
											[!0, c]) : (n.remove(),
												[s, c])
								}, [!1, !1]), 2)
								, c = s[0]
								, l = s[1];
							return c || l ? !c && l ? (z("expected at least one HTML element tag directly inside a component, but only subcomponents were found. A component must render at least one HTML tag directly inside itself.", o.innerHTML.trim()),
								o.innerHTML) : o.innerHTML : (z("expected at least one HTML element tag inside a component, but the component is empty:\n", o.innerHTML.trim()),
									this.createSpan("", t).outerHTML)
						}
					}, {
						key: "createSpan",
						value: function (e, t) {
							var n = document.createElement("span");
							return n.innerText = e,
								n.setAttribute(j, t),
								n
						}
					}]),
					e
			}()
			, se = function () {
				function e(t, n) {
					var i = this
						, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
					if (T(this, e),
						this.unloaded = !1,
						!n || "Object" === n.constructor.name)
						throw new Error('\n      a phoenix Socket must be provided as the second argument to the LiveSocket constructor. For example:\n\n          import {Socket} from "phoenix"\n          import {LiveSocket} from "phoenix_live_view"\n          let liveSocket = new LiveSocket("/live", Socket, {...})\n      ');
					this.socket = new n(t, r),
						this.bindingPrefix = r.bindingPrefix || W,
						this.opts = r,
						this.params = $(r.params || {}),
						this.viewLogger = r.viewLogger,
						this.metadataCallbacks = r.metadata || {},
						this.defaults = Object.assign(X(q), r.defaults || {}),
						this.activeElement = null,
						this.prevActive = null,
						this.silenced = !1,
						this.main = null,
						this.linkRef = 0,
						this.roots = {},
						this.href = window.location.href,
						this.pendingLink = null,
						this.currentLocation = X(window.location),
						this.hooks = r.hooks || {},
						this.uploaders = r.uploaders || {},
						this.loaderTimeout = r.loaderTimeout || V,
						this.boundTopLevelEvents = !1,
						this.domCallbacks = Object.assign({
							onNodeAdded: $(),
							onBeforeElUpdated: $()
						}, r.dom || {}),
						window.addEventListener("unload", function (e) {
							i.unloaded = !0
						}),
						this.socket.onOpen(function () {
							i.isUnloaded() && window.location.reload()
						})
				}
				return D(e, [{
					key: "isProfileEnabled",
					value: function () {
						return "true" === sessionStorage.getItem("phx:live-socket:profiling")
					}
				}, {
					key: "isDebugEnabled",
					value: function () {
						return "true" === sessionStorage.getItem("phx:live-socket:debug")
					}
				}, {
					key: "enableDebug",
					value: function () {
						sessionStorage.setItem("phx:live-socket:debug", "true")
					}
				}, {
					key: "enableProfiling",
					value: function () {
						sessionStorage.setItem("phx:live-socket:profiling", "true")
					}
				}, {
					key: "disableDebug",
					value: function () {
						sessionStorage.removeItem("phx:live-socket:debug")
					}
				}, {
					key: "disableProfiling",
					value: function () {
						sessionStorage.removeItem("phx:live-socket:profiling")
					}
				}, {
					key: "enableLatencySim",
					value: function (e) {
						this.enableDebug(),
							console.log("latency simulator enabled for the duration of this browser session. Call disableLatencySim() to disable"),
							sessionStorage.setItem("phx:live-socket:latency-sim", e)
					}
				}, {
					key: "disableLatencySim",
					value: function () {
						sessionStorage.removeItem("phx:live-socket:latency-sim")
					}
				}, {
					key: "getLatencySim",
					value: function () {
						var e = sessionStorage.getItem("phx:live-socket:latency-sim");
						return e ? parseInt(e) : null
					}
				}, {
					key: "getSocket",
					value: function () {
						return this.socket
					}
				}, {
					key: "connect",
					value: function () {
						var e = this
							, t = function () {
								e.joinRootViews() && (e.bindTopLevelEvents(),
									e.socket.connect())
							};
						["complete", "loaded", "interactive"].indexOf(document.readyState) >= 0 ? t() : document.addEventListener("DOMContentLoaded", function () {
							return t()
						})
					}
				}, {
					key: "disconnect",
					value: function (e) {
						this.socket.disconnect(e)
					}
				}, {
					key: "triggerDOM",
					value: function (e, t) {
						var n;
						(n = this.domCallbacks)[e].apply(n, E(t))
					}
				}, {
					key: "time",
					value: function (e, t) {
						if (!this.isProfileEnabled() || !console.time)
							return t();
						console.time(e);
						var n = t();
						return console.timeEnd(e),
							n
					}
				}, {
					key: "log",
					value: function (e, t, n) {
						if (this.viewLogger) {
							var i = x(n(), 2)
								, r = i[0]
								, o = i[1];
							this.viewLogger(e, t, r, o)
						} else if (this.isDebugEnabled()) {
							var a = x(n(), 2)
								, u = a[0]
								, s = a[1];
							K(e, t, u, s)
						}
					}
				}, {
					key: "onChannel",
					value: function (e, t, n) {
						var i = this;
						e.on(t, function (e) {
							var t = i.getLatencySim();
							t ? (console.log("simulating ".concat(t, "ms of latency from server to client")),
								setTimeout(function () {
									return n(e)
								}, t)) : n(e)
						})
					}
				}, {
					key: "wrapPush",
					value: function (e, t, n) {
						var i = this
							, r = this.getLatencySim();
						if (!r)
							return t.timeout ? n().receive("timeout", function () {
								e.isDestroyed() || i.reloadWithJitter(e, function () {
									i.log(e, "timeout", function () {
										return ["received timeout while communicating with server. Falling back to hard refresh for recovery"]
									})
								})
							}) : n();
						console.log("simulating ".concat(r, "ms of latency from client to server"));
						var o = {
							receives: [],
							receive: function (e, t) {
								this.receives.push([e, t])
							}
						};
						return setTimeout(function () {
							o.receives.reduce(function (e, t) {
								var n = x(t, 2)
									, i = n[0]
									, r = n[1];
								return e.receive(i, r)
							}, n())
						}, r),
							o
					}
				}, {
					key: "reloadWithJitter",
					value: function (e, t) {
						var n = this;
						e.destroy(),
							this.disconnect();
						var i = N[0]
							, r = N[1]
							, o = Math.floor(Math.random() * (r - i + 1)) + i
							, a = ce.updateLocal(e.name(), "consecutive-reloads", 0, function (e) {
								return e + 1
							});
						t ? t() : this.log(e, "join", function () {
							return ["encountered ".concat(a, " consecutive reloads")]
						}),
							a > 10 && (this.log(e, "join", function () {
								return ["exceeded ".concat(10, " consecutive reloads. Entering failsafe mode")]
							}),
								o = 3e4),
							setTimeout(function () {
								n.hasPendingLink() ? window.location = n.pendingLink : window.location.reload()
							}, o)
					}
				}, {
					key: "getHookCallbacks",
					value: function (e) {
						return e && e.startsWith("Phoenix.") ? te[e.split(".")[1]] : this.hooks[e]
					}
				}, {
					key: "isUnloaded",
					value: function () {
						return this.unloaded
					}
				}, {
					key: "isConnected",
					value: function () {
						return this.socket.isConnected()
					}
				}, {
					key: "getBindingPrefix",
					value: function () {
						return this.bindingPrefix
					}
				}, {
					key: "binding",
					value: function (e) {
						return "".concat(this.getBindingPrefix()).concat(e)
					}
				}, {
					key: "channel",
					value: function (e, t) {
						return this.socket.channel(e, t)
					}
				}, {
					key: "joinRootViews",
					value: function () {
						var e = this
							, t = !1;
						return le.all(document, "".concat(M, ":not([").concat("data-phx-parent-id", "])"), function (n) {
							if (!e.getRootById(n.id)) {
								var i = e.joinRootView(n, e.getHref());
								e.root = e.root || i,
									n.getAttribute("data-phx-main") && (e.main = i)
							}
							t = !0
						}),
							t
					}
				}, {
					key: "redirect",
					value: function (e, t) {
						this.disconnect(),
							ce.redirect(e, t)
					}
				}, {
					key: "replaceMain",
					value: function (e, t) {
						var n = this
							, i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null
							, r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.setPendingLink(e)
							, o = this.main.el;
						this.main.showLoader(this.loaderTimeout),
							this.main.destroy(),
							ce.fetchPage(e, function (a, u) {
								if (200 !== a)
									return n.redirect(e);
								var s = document.createElement("template");
								s.innerHTML = u;
								var c = s.content.childNodes[0];
								if (!c || !n.isPhxView(c))
									return n.redirect(e);
								n.joinRootView(c, e, t, function (e, t) {
									1 === t && (n.commitPendingLink(r) ? (o.replaceWith(e.el),
										n.main = e,
										i && i()) : e.destroy())
								})
							})
					}
				}, {
					key: "isPhxView",
					value: function (e) {
						return e.getAttribute && null !== e.getAttribute(O)
					}
				}, {
					key: "joinRootView",
					value: function (e, t, n, i) {
						var r = new fe(e, this, null, t, n);
						return this.roots[r.id] = r,
							r.join(i),
							r
					}
				}, {
					key: "owner",
					value: function (e, t) {
						var n = this
							, i = Z(e.closest(M), function (e) {
								return n.getViewByEl(e)
							});
						i && t(i)
					}
				}, {
					key: "withinOwners",
					value: function (e, t) {
						var n = this;
						this.owner(e, function (i) {
							var r = e.getAttribute(n.binding("target"));
							null === r ? t(i, e) : i.withinTargets(r, t)
						})
					}
				}, {
					key: "getViewByEl",
					value: function (e) {
						var t = e.getAttribute("data-phx-root-id");
						return Z(this.getRootById(t), function (t) {
							return t.getDescendentByEl(e)
						})
					}
				}, {
					key: "getRootById",
					value: function (e) {
						return this.roots[e]
					}
				}, {
					key: "destroyAllViews",
					value: function () {
						for (var e in this.roots)
							this.roots[e].destroy(),
								delete this.roots[e]
					}
				}, {
					key: "destroyViewByEl",
					value: function (e) {
						var t = this.getRootById(e.getAttribute("data-phx-root-id"));
						t && t.destroyDescendent(e.id)
					}
				}, {
					key: "setActiveElement",
					value: function (e) {
						var t = this;
						if (this.activeElement !== e) {
							this.activeElement = e;
							var n = function () {
								e === t.activeElement && (t.activeElement = null),
									e.removeEventListener("mouseup", t),
									e.removeEventListener("touchend", t)
							};
							e.addEventListener("mouseup", n),
								e.addEventListener("touchend", n)
						}
					}
				}, {
					key: "getActiveElement",
					value: function () {
						return document.activeElement === document.body ? this.activeElement || document.activeElement : document.activeElement || document.body
					}
				}, {
					key: "dropActiveElement",
					value: function (e) {
						this.prevActive && e.ownsElement(this.prevActive) && (this.prevActive = null)
					}
				}, {
					key: "restorePreviouslyActiveFocus",
					value: function () {
						this.prevActive && this.prevActive !== document.body && this.prevActive.focus()
					}
				}, {
					key: "blurActiveElement",
					value: function () {
						this.prevActive = this.getActiveElement(),
							this.prevActive !== document.body && this.prevActive.blur()
					}
				}, {
					key: "bindTopLevelEvents",
					value: function () {
						var e = this;
						this.boundTopLevelEvents || (this.boundTopLevelEvents = !0,
							window.addEventListener("pageshow", function (t) {
								t.persisted && (e.withPageLoading({
									to: window.location.href,
									kind: "redirect"
								}),
									window.location.reload())
							}),
							this.bindClicks(),
							this.bindNav(),
							this.bindForms(),
							this.bind({
								keyup: "keyup",
								keydown: "keydown"
							}, function (t, n, i, r, o, a, u) {
								var s = r.getAttribute(e.binding("key"))
									, c = t.key && t.key.toLowerCase();
								s && s.toLowerCase() !== c || i.pushKey(r, o, n, a, function (e) {
									for (var t = 1; t < arguments.length; t++) {
										var n = null != arguments[t] ? arguments[t] : {};
										t % 2 ? w(Object(n), !0).forEach(function (t) {
											A(e, t, n[t])
										}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : w(Object(n)).forEach(function (t) {
											Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
										})
									}
									return e
								}({
									key: t.key
								}, e.eventMeta(n, t, r)))
							}),
							this.bind({
								blur: "focusout",
								focus: "focusin"
							}, function (t, n, i, r, o, a, u) {
								u || i.pushEvent(n, r, o, a, e.eventMeta(n, t, r))
							}),
							this.bind({
								blur: "blur",
								focus: "focus"
							}, function (t, n, i, r, o, a, u) {
								u && "window" !== !u && i.pushEvent(n, r, o, a, e.eventMeta(n, t, r))
							}),
							window.addEventListener("dragover", function (e) {
								return e.preventDefault()
							}),
							window.addEventListener("drop", function (t) {
								t.preventDefault();
								var n = Z(G(t.target, e.binding("drop-target")), function (t) {
									return t.getAttribute(e.binding("drop-target"))
								})
									, i = n && document.getElementById(n)
									, r = Array.from(t.dataTransfer.files || []);
								i && !i.disabled && 0 !== r.length && i.files instanceof FileList && (ie.trackFiles(i, r),
									i.dispatchEvent(new Event("input", {
										bubbles: !0
									})))
							}))
					}
				}, {
					key: "eventMeta",
					value: function (e, t, n) {
						var i = this.metadataCallbacks[e];
						return i ? i(t, n) : {}
					}
				}, {
					key: "setPendingLink",
					value: function (e) {
						return this.linkRef++,
							this.pendingLink = e,
							this.linkRef
					}
				}, {
					key: "commitPendingLink",
					value: function (e) {
						return this.linkRef === e && (this.href = this.pendingLink,
							this.pendingLink = null,
							!0)
					}
				}, {
					key: "getHref",
					value: function () {
						return this.href
					}
				}, {
					key: "hasPendingLink",
					value: function () {
						return !!this.pendingLink
					}
				}, {
					key: "bind",
					value: function (e, t) {
						var n = this
							, i = function (i) {
								var r = e[i];
								n.on(r, function (e) {
									var r = n.binding(i)
										, o = n.binding("window-".concat(i))
										, a = e.target.getAttribute && e.target.getAttribute(r);
									a ? n.debounce(e.target, e, function () {
										n.withinOwners(e.target, function (n, r) {
											t(e, i, n, e.target, r, a, null)
										})
									}) : le.all(document, "[".concat(o, "]"), function (r) {
										var a = r.getAttribute(o);
										n.debounce(r, e, function () {
											n.withinOwners(r, function (n, o) {
												t(e, i, n, r, o, a, "window")
											})
										})
									})
								})
							};
						for (var r in e)
							i(r)
					}
				}, {
					key: "bindClicks",
					value: function () {
						var e = this;
						[!0, !1].forEach(function (t) {
							var n = t ? e.binding("capture-click") : e.binding("click");
							window.addEventListener("click", function (i) {
								var r = null
									, o = (r = t ? i.target.matches("[".concat(n, "]")) ? i.target : i.target.querySelector("[".concat(n, "]")) : G(i.target, n)) && r.getAttribute(n);
								o && ("#" === r.getAttribute("href") && i.preventDefault(),
									e.debounce(r, i, function () {
										e.withinOwners(r, function (t, n) {
											t.pushEvent("click", r, n, o, e.eventMeta("click", i, r))
										})
									}))
							}, t)
						})
					}
				}, {
					key: "bindNav",
					value: function () {
						var e = this;
						if (ce.canPushState()) {
							history.scrollRestoration && (history.scrollRestoration = "manual");
							var t = null;
							window.addEventListener("scroll", function (e) {
								clearTimeout(t),
									t = setTimeout(function () {
										ce.updateCurrentState(function (e) {
											return Object.assign(e, {
												scroll: window.scrollY
											})
										})
									}, 100)
							}),
								window.addEventListener("popstate", function (t) {
									if (e.registerNewLocation(window.location)) {
										var n = t.state || {}
											, i = n.type
											, r = n.id
											, o = n.root
											, a = n.scroll
											, u = window.location.href;
										e.main.isConnected() && "patch" === i && r === e.main.id ? e.main.pushLinkPatch(u, null) : e.replaceMain(u, null, function () {
											o && e.replaceRootHistory(),
												"number" == typeof a && setTimeout(function () {
													window.scrollTo(0, a)
												}, 0)
										})
									}
								}, !1),
								window.addEventListener("click", function (t) {
									var n = G(t.target, "data-phx-link")
										, i = n && n.getAttribute("data-phx-link")
										, r = t.metaKey || t.ctrlKey || 1 === t.button;
									if (i && e.isConnected() && e.main && !r) {
										var o = n.href
											, a = n.getAttribute("data-phx-link-state");
										if (t.preventDefault(),
											e.pendingLink !== o)
											if ("patch" === i)
												e.pushHistoryPatch(o, a, n);
											else {
												if ("redirect" !== i)
													throw new Error("expected ".concat("data-phx-link", ' to be "patch" or "redirect", got: ').concat(i));
												e.historyRedirect(o, a)
											}
									}
								}, !1)
						}
					}
				}, {
					key: "withPageLoading",
					value: function (e, t) {
						le.dispatchEvent(window, "phx:page-loading-start", e);
						var n = function () {
							return le.dispatchEvent(window, "phx:page-loading-stop", e)
						};
						return t ? t(n) : n
					}
				}, {
					key: "pushHistoryPatch",
					value: function (e, t, n) {
						var i = this;
						this.withPageLoading({
							to: e,
							kind: "patch"
						}, function (r) {
							i.main.pushLinkPatch(e, n, function () {
								i.historyPatch(e, t),
									r()
							})
						})
					}
				}, {
					key: "historyPatch",
					value: function (e, t) {
						ce.pushState(t, {
							type: "patch",
							id: this.main.id
						}, e),
							this.registerNewLocation(window.location)
					}
				}, {
					key: "historyRedirect",
					value: function (e, t, n) {
						var i = this
							, r = window.scrollY;
						this.withPageLoading({
							to: e,
							kind: "redirect"
						}, function (o) {
							i.replaceMain(e, n, function () {
								ce.pushState(t, {
									type: "redirect",
									id: i.main.id,
									scroll: r
								}, e),
									i.registerNewLocation(window.location),
									o()
							})
						})
					}
				}, {
					key: "replaceRootHistory",
					value: function () {
						ce.pushState("replace", {
							root: !0,
							type: "patch",
							id: this.main.id
						})
					}
				}, {
					key: "registerNewLocation",
					value: function (e) {
						var t = this.currentLocation;
						return t.pathname + t.search !== e.pathname + e.search && (this.currentLocation = X(e),
							!0)
					}
				}, {
					key: "bindForms",
					value: function () {
						var e = this
							, t = 0;
						this.on("submit", function (t) {
							var n = t.target.getAttribute(e.binding("submit"));
							n && (t.preventDefault(),
								t.target.disabled = !0,
								e.withinOwners(t.target, function (e, i) {
									return e.submitForm(t.target, i, n)
								}))
						}, !1);
						for (var n = function () {
							var n = r[i];
							e.on(n, function (i) {
								var r = i.target
									, o = r.form && r.form.getAttribute(e.binding("change"));
								if (o && ("number" !== r.type || !r.validity || !r.validity.badInput)) {
									var a = t;
									t++;
									var u = le.private(r, "prev-iteration") || {}
										, s = u.at
										, c = u.type;
									s === a - 1 && n !== c || (le.putPrivate(r, "prev-iteration", {
										at: a,
										type: n
									}),
										e.debounce(r, i, function () {
											e.withinOwners(r.form, function (t, n) {
												le.putPrivate(r, "phx-has-focused", !0),
													le.isTextualInput(r) || e.setActiveElement(r),
													t.pushInput(r, n, o, i.target)
											})
										}))
								}
							}, !1)
						}, i = 0, r = ["change", "input"]; i < r.length; i++)
							n()
					}
				}, {
					key: "debounce",
					value: function (e, t, n) {
						var i = this.binding("debounce")
							, r = this.binding("throttle")
							, o = this.defaults.debounce.toString()
							, a = this.defaults.throttle.toString();
						le.debounce(e, t, i, o, r, a, n)
					}
				}, {
					key: "silenceEvents",
					value: function (e) {
						this.silenced = !0,
							e(),
							this.silenced = !1
					}
				}, {
					key: "on",
					value: function (e, t) {
						var n = this;
						window.addEventListener(e, function (e) {
							n.silenced || t(e)
						})
					}
				}]),
					e
			}()
			, ce = {
				canPushState: function () {
					return void 0 !== history.pushState
				},
				dropLocal: function (e, t) {
					return window.localStorage.removeItem(this.localKey(e, t))
				},
				updateLocal: function (e, t, n, i) {
					var r = this.getLocal(e, t)
						, o = this.localKey(e, t)
						, a = null === r ? n : i(r);
					return window.localStorage.setItem(o, JSON.stringify(a)),
						a
				},
				getLocal: function (e, t) {
					return JSON.parse(window.localStorage.getItem(this.localKey(e, t)))
				},
				fetchPage: function (e, t) {
					var n = new XMLHttpRequest;
					n.open("GET", e, !0),
						n.timeout = 3e4,
						n.setRequestHeader("content-type", "text/html"),
						n.setRequestHeader("cache-control", "max-age=0, no-cache, no-store, must-revalidate, post-check=0, pre-check=0"),
						n.setRequestHeader("x-requested-with", "live-link"),
						n.onerror = function () {
							return t(400)
						}
						,
						n.ontimeout = function () {
							return t(504)
						}
						,
						n.onreadystatechange = function () {
							if (4 === n.readyState) {
								var i = new URL(e)
									, r = i.pathname + i.search
									, o = Z(n.getResponseHeader("x-response-url") || n.responseURL, function (e) {
										return new URL(e)
									})
									, a = o ? o.pathname + o.search : null;
								return "live-link" !== n.getResponseHeader("x-requested-with") ? t(400) : null === o || a != r ? t(302) : 200 !== n.status ? t(n.status) : void t(200, n.responseText)
							}
						}
						,
						n.send()
				},
				updateCurrentState: function (e) {
					this.canPushState() && history.replaceState(e(history.state || {}), "", window.location.href)
				},
				pushState: function (e, t, n) {
					if (this.canPushState()) {
						if (n !== window.location.href) {
							if ("redirect" == t.type && t.scroll) {
								var i = history.state || {};
								i.scroll = t.scroll,
									history.replaceState(i, "", window.location.href)
							}
							delete t.scroll,
								history[e + "State"](t, "", n || null);
							var r = this.getHashTargetEl(window.location.hash);
							r ? r.scrollIntoView() : "redirect" === t.type && window.scroll(0, 0)
						}
					} else
						this.redirect(n)
				},
				setCookie: function (e, t) {
					document.cookie = "".concat(e, "=").concat(t)
				},
				getCookie: function (e) {
					return document.cookie.replace(new RegExp("(?:(?:^|.*;s*)".concat(e, "s*=s*([^;]*).*$)|^.*$")), "$1")
				},
				redirect: function (e, t) {
					t && ce.setCookie("__phoenix_flash__", t + "; max-age=60000; path=/"),
						window.location = e
				},
				localKey: function (e, t) {
					return "".concat(e, "-").concat(t)
				},
				getHashTargetEl: function (e) {
					var t = e.toString().substring(1);
					if ("" !== t)
						return document.getElementById(t) || document.querySelector('a[name="'.concat(t, '"]'))
				}
			}
			, le = {
				byId: function (e) {
					return document.getElementById(e) || z("no id found for ".concat(e))
				},
				removeClass: function (e, t) {
					e.classList.remove(t),
						0 === e.classList.length && e.removeAttribute("class")
				},
				all: function (e, t, n) {
					var i = Array.from(e.querySelectorAll(t));
					return n ? i.forEach(n) : i
				},
				findComponentNodeList: function (e, t) {
					return this.filterWithinSameLiveView(this.all(e, "[".concat(j, '="').concat(t, '"]')), e)
				},
				findPhxChildrenInFragment: function (e, t) {
					var n = document.createElement("template");
					return n.innerHTML = e,
						this.findPhxChildren(n.content, t)
				},
				isIgnored: function (e, t) {
					return "ignore" === (e.getAttribute(t) || e.getAttribute("data-phx-update"))
				},
				isPhxUpdate: function (e, t, n) {
					return e.getAttribute && n.indexOf(e.getAttribute(t)) >= 0
				},
				findPhxChildren: function (e, t) {
					return this.all(e, "".concat(M, "[").concat("data-phx-parent-id", '="').concat(t, '"]'))
				},
				findParentCIDs: function (e, t) {
					var n = this
						, i = new Set(t);
					return t.reduce(function (t, i) {
						var r = "[".concat(j, '="').concat(i, '"] [').concat(j, "]");
						return n.filterWithinSameLiveView(n.all(e, r), e).map(function (e) {
							return parseInt(e.getAttribute(j))
						}).forEach(function (e) {
							return t.delete(e)
						}),
							t
					}, i)
				},
				filterWithinSameLiveView: function (e, t) {
					var n = this;
					return t.querySelector(M) ? e.filter(function (e) {
						return n.withinSameLiveView(e, t)
					}) : e
				},
				withinSameLiveView: function (e, t) {
					for (; e = e.parentNode;) {
						if (e.isSameNode(t))
							return !0;
						if (e.getAttribute(O))
							return !1
					}
				},
				private: function (e, t) {
					return e.phxPrivate && e.phxPrivate[t]
				},
				deletePrivate: function (e, t) {
					e.phxPrivate && delete e.phxPrivate[t]
				},
				putPrivate: function (e, t, n) {
					e.phxPrivate || (e.phxPrivate = {}),
						e.phxPrivate[t] = n
				},
				copyPrivates: function (e, t) {
					t.phxPrivate && (e.phxPrivate = X(t.phxPrivate))
				},
				putTitle: function (e) {
					var t = document.querySelector("title").dataset
						, n = t.prefix
						, i = t.suffix;
					document.title = "".concat(n || "").concat(e).concat(i || "")
				},
				debounce: function (e, t, n, i, r, o, a) {
					var u = this
						, s = e.getAttribute(n)
						, c = e.getAttribute(r);
					"" === s && (s = i),
						"" === c && (c = o);
					var l = s || c;
					switch (l) {
						case null:
							return a();
						case "blur":
							return void (this.once(e, "debounce-blur") && e.addEventListener("blur", function () {
								return a()
							}));
						default:
							var d = parseInt(l)
								, h = this.incCycle(e, "debounce-trigger", function () {
									return c ? u.deletePrivate(e, "throttled") : a()
								});
							if (isNaN(d))
								return z("invalid throttle/debounce value: ".concat(l));
							if (c) {
								var f = !1;
								if ("keydown" === t.type) {
									var v = this.private(e, "debounce-prev-key");
									this.putPrivate(e, "debounce-prev-key", t.key),
										f = v !== t.key
								}
								if (!f && this.private(e, "throttled"))
									return !1;
								a(),
									this.putPrivate(e, "throttled", !0),
									setTimeout(function () {
										return u.triggerCycle(e, "debounce-trigger")
									}, d)
							} else
								setTimeout(function () {
									return u.triggerCycle(e, "debounce-trigger", h)
								}, d);
							e.form && this.once(e.form, "bind-debounce") && e.form.addEventListener("submit", function (t) {
								Array.from(new FormData(e.form).entries(), function (t) {
									var n = x(t, 2)
										, i = n[0]
										, r = (n[1],
											e.form.querySelector('[name="'.concat(i, '"]')));
									u.incCycle(r, "debounce-trigger"),
										u.deletePrivate(r, "throttled")
								})
							}),
								this.once(e, "bind-debounce") && e.addEventListener("blur", function (t) {
									return u.triggerCycle(e, "debounce-trigger")
								})
					}
				},
				triggerCycle: function (e, t, n) {
					var i = x(this.private(e, t), 2)
						, r = i[0]
						, o = i[1];
					n || (n = r),
						n === r && (this.incCycle(e, t),
							o())
				},
				once: function (e, t) {
					return !0 !== this.private(e, t) && (this.putPrivate(e, t, !0),
						!0)
				},
				incCycle: function (e, t) {
					var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function () { }
						, i = x(this.private(e, t) || [0, n], 2)
						, r = i[0];
					i[1];
					return r++,
						this.putPrivate(e, t, [r, n]),
						r
				},
				discardError: function (e, t, n) {
					var i = t.getAttribute && t.getAttribute(n)
						, r = i && e.querySelector("#".concat(i));
					r && (this.private(r, "phx-has-focused") || this.private(r.form, "phx-has-submitted") || t.classList.add("phx-no-feedback"))
				},
				isPhxChild: function (e) {
					return e.getAttribute && e.getAttribute("data-phx-parent-id")
				},
				dispatchEvent: function (e, t) {
					var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
						, i = new CustomEvent(t, {
							bubbles: !0,
							cancelable: !0,
							detail: n
						});
					e.dispatchEvent(i)
				},
				cloneNode: function (e, t) {
					if (void 0 === t)
						return e.cloneNode(!0);
					var n = e.cloneNode(!1);
					return n.innerHTML = t,
						n
				},
				mergeAttrs: function (e, t) {
					for (var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, i = n.exclude || [], r = n.isIgnored, o = t.attributes, a = o.length - 1; a >= 0; a--) {
						var u = o[a].name;
						i.indexOf(u) < 0 && e.setAttribute(u, t.getAttribute(u))
					}
					for (var s = e.attributes, c = s.length - 1; c >= 0; c--) {
						var l = s[c].name;
						r ? l.startsWith("data-") && !t.hasAttribute(l) && e.removeAttribute(l) : t.hasAttribute(l) || e.removeAttribute(l)
					}
				},
				mergeFocusedInput: function (e, t) {
					e instanceof HTMLSelectElement || le.mergeAttrs(e, t, {
						except: ["value"]
					}),
						t.readOnly ? e.setAttribute("readonly", !0) : e.removeAttribute("readonly")
				},
				hasSelectionRange: function (e) {
					return e.setSelectionRange && ("text" === e.type || "textarea" === e.type)
				},
				restoreFocus: function (e, t, n) {
					if (le.isTextualInput(e)) {
						var i = e.matches(":focus");
						e.readOnly && e.blur(),
							i || e.focus(),
							this.hasSelectionRange(e) && e.setSelectionRange(t, n)
					}
				},
				isFormInput: function (e) {
					return /^(?:input|select|textarea)$/i.test(e.tagName) && "button" !== e.type
				},
				syncAttrsToProps: function (e) {
					e instanceof HTMLInputElement && U.indexOf(e.type.toLocaleLowerCase()) >= 0 && (e.checked = null !== e.getAttribute("checked"))
				},
				isTextualInput: function (e) {
					return B.indexOf(e.type) >= 0
				},
				isNowTriggerFormExternal: function (e, t) {
					return e.getAttribute && null !== e.getAttribute(t)
				},
				syncPendingRef: function (e, t, n) {
					var i = e.getAttribute(F);
					return null === i || (le.isFormInput(e) || null !== e.getAttribute(n) ? ("file" === e.type && le.mergeAttrs(e, t, {
						isIgnored: !0
					}),
						le.putPrivate(e, F, t),
						!1) : (H.forEach(function (n) {
							e.classList.contains(n) && t.classList.add(n)
						}),
							t.setAttribute(F, i),
							!0))
				},
				cleanChildNodes: function (e, t) {
					if (le.isPhxUpdate(e, t, ["append", "prepend"])) {
						var n = [];
						e.childNodes.forEach(function (e) {
							e.id || (e.nodeType === Node.TEXT_NODE && "" === e.nodeValue.trim() || z("only HTML element tags with an id are allowed inside containers with phx-update.\n\n" + 'removing illegal node: "'.concat((e.outerHTML || e.nodeValue).trim(), '"\n\n')),
								n.push(e))
						}),
							n.forEach(function (e) {
								return e.remove()
							})
					}
				}
			}
			, de = function () {
				function e(t, n, i) {
					T(this, e);
					var r = new Set
						, o = new Set(E(n.children).map(function (e) {
							return e.id
						}))
						, a = [];
					Array.from(t.children).forEach(function (e) {
						if (e.id && (r.add(e.id),
							o.has(e.id))) {
							var t = e.previousElementSibling && e.previousElementSibling.id;
							a.push({
								elementId: e.id,
								previousElementId: t
							})
						}
					}),
						this.containerId = n.id,
						this.updateType = i,
						this.elementsToModify = a,
						this.elementIdsToAdd = E(o).filter(function (e) {
							return !r.has(e)
						})
				}
				return D(e, [{
					key: "perform",
					value: function () {
						var e = le.byId(this.containerId);
						this.elementsToModify.forEach(function (t) {
							t.previousElementId ? Z(document.getElementById(t.previousElementId), function (e) {
								Z(document.getElementById(t.elementId), function (t) {
									t.previousElementSibling && t.previousElementSibling.id == e.id || e.insertAdjacentElement("afterend", t)
								})
							}) : Z(document.getElementById(t.elementId), function (t) {
								null == t.previousElementSibling || e.insertAdjacentElement("afterbegin", t)
							})
						}),
							"prepend" == this.updateType && this.elementIdsToAdd.reverse().forEach(function (t) {
								Z(document.getElementById(t), function (t) {
									return e.insertAdjacentElement("afterbegin", t)
								})
							})
					}
				}]),
					e
			}()
			, he = function () {
				function e(t, n, i, r, o) {
					T(this, e),
						this.view = t,
						this.liveSocket = t.liveSocket,
						this.container = n,
						this.id = i,
						this.rootID = t.root.id,
						this.html = r,
						this.targetCID = o,
						this.cidPatch = "number" == typeof this.targetCID,
						this.callbacks = {
							beforeadded: [],
							beforeupdated: [],
							beforediscarded: [],
							beforephxChildAdded: [],
							afteradded: [],
							afterupdated: [],
							afterdiscarded: [],
							afterphxChildAdded: []
						}
				}
				return D(e, null, [{
					key: "patchEl",
					value: function (e, t, n) {
						b(e, t, {
							childrenOnly: !1,
							onBeforeElUpdated: function (e, t) {
								if (n && n.isSameNode(e) && le.isFormInput(e))
									return le.mergeFocusedInput(e, t),
										!1
							}
						})
					}
				}]),
					D(e, [{
						key: "before",
						value: function (e, t) {
							this.callbacks["before".concat(e)].push(t)
						}
					}, {
						key: "after",
						value: function (e, t) {
							this.callbacks["after".concat(e)].push(t)
						}
					}, {
						key: "trackBefore",
						value: function (e) {
							for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
								n[i - 1] = arguments[i];
							this.callbacks["before".concat(e)].forEach(function (e) {
								return e.apply(void 0, n)
							})
						}
					}, {
						key: "trackAfter",
						value: function (e) {
							for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
								n[i - 1] = arguments[i];
							this.callbacks["after".concat(e)].forEach(function (e) {
								return e.apply(void 0, n)
							})
						}
					}, {
						key: "markPrunableContentForRemoval",
						value: function () {
							le.all(this.container, "[phx-update=append] > *, [phx-update=prepend] > *", function (e) {
								e.setAttribute("data-phx-remove", "")
							})
						}
					}, {
						key: "perform",
						value: function () {
							var e = this
								, t = this.view
								, n = this.liveSocket
								, i = this.container
								, r = this.html
								, o = this.isCIDPatch() ? this.targetCIDContainer() : i;
							if (!this.isCIDPatch() || o) {
								var a = n.getActiveElement()
									, u = a && le.hasSelectionRange(a) ? a : {}
									, s = u.selectionStart
									, c = u.selectionEnd
									, l = n.binding("update")
									, d = n.binding("feedback-for")
									, h = n.binding("disable-with")
									, f = n.binding("trigger-action")
									, v = []
									, p = []
									, g = []
									, m = null
									, y = n.time("premorph container prep", function () {
										return e.buildDiffHTML(i, r, l, o)
									});
								return this.trackBefore("added", i),
									this.trackBefore("updated", i, i),
									n.time("morphdom", function () {
										b(o, y, {
											childrenOnly: null === o.getAttribute(j),
											onBeforeNodeAdded: function (t) {
												return le.discardError(o, t, d),
													e.trackBefore("added", t),
													t
											},
											onNodeAdded: function (n) {
												le.isNowTriggerFormExternal(n, f) && (m = n),
													le.isPhxChild(n) && t.ownsElement(n) && e.trackAfter("phxChildAdded", n),
													v.push(n)
											},
											onNodeDiscarded: function (t) {
												le.isPhxChild(t) && n.destroyViewByEl(t),
													e.trackAfter("discarded", t)
											},
											onBeforeNodeDiscarded: function (t) {
												return !(!t.getAttribute || null === t.getAttribute("data-phx-remove")) || (null === t.parentNode || !le.isPhxUpdate(t.parentNode, l, ["append", "prepend"]) || !t.id) && (!e.skipCIDSibling(t) && (e.trackBefore("discarded", t),
													!0))
											},
											onElUpdated: function (e) {
												le.isNowTriggerFormExternal(e, f) && (m = e),
													p.push(e)
											},
											onBeforeElUpdated: function (t, n) {
												if (le.cleanChildNodes(n, l),
													e.skipCIDSibling(n))
													return !1;
												if (le.isIgnored(t, l))
													return e.trackBefore("updated", t, n),
														le.mergeAttrs(t, n, {
															isIgnored: !0
														}),
														p.push(t),
														!1;
												if ("number" === t.type && t.validity && t.validity.badInput)
													return !1;
												if (!le.syncPendingRef(t, n, h))
													return "file" === t.type && (e.trackBefore("updated", t, n),
														p.push(t)),
														!1;
												if (le.isPhxChild(n)) {
													var i = t.getAttribute(J);
													return le.mergeAttrs(t, n),
														t.setAttribute(J, i),
														t.setAttribute("data-phx-root-id", e.rootID),
														!1
												}
												return le.copyPrivates(n, t),
													le.discardError(o, n, d),
													a && t.isSameNode(a) && le.isFormInput(t) && !e.forceFocusedSelectUpdate(t, n) ? (e.trackBefore("updated", t, n),
														le.mergeFocusedInput(t, n),
														le.syncAttrsToProps(t),
														p.push(t),
														!1) : (le.isPhxUpdate(n, l, ["append", "prepend"]) && g.push(new de(t, n, n.getAttribute(l))),
															le.syncAttrsToProps(n),
															e.trackBefore("updated", t, n),
															!0)
											}
										})
									}),
									n.isDebugEnabled() && function () {
										for (var e = new Set, t = document.querySelectorAll("*[id]"), n = 0, i = t.length; n < i; n++)
											e.has(t[n].id) ? console.error("Multiple IDs detected: ".concat(t[n].id, ". Ensure unique element ids.")) : e.add(t[n].id)
									}(),
									g.length > 0 && n.time("post-morph append/prepend restoration", function () {
										g.forEach(function (e) {
											return e.perform()
										})
									}),
									n.silenceEvents(function () {
										return le.restoreFocus(a, s, c)
									}),
									le.dispatchEvent(document, "phx:update"),
									v.forEach(function (t) {
										return e.trackAfter("added", t)
									}),
									p.forEach(function (t) {
										return e.trackAfter("updated", t)
									}),
									m && (n.disconnect(),
										m.submit()),
									!0
							}
						}
					}, {
						key: "forceFocusedSelectUpdate",
						value: function (e, t) {
							return !0 === e.multiple || e.innerHTML != t.innerHTML
						}
					}, {
						key: "isCIDPatch",
						value: function () {
							return this.cidPatch
						}
					}, {
						key: "skipCIDSibling",
						value: function (e) {
							return e.nodeType === Node.ELEMENT_NODE && null !== e.getAttribute("data-phx-skip")
						}
					}, {
						key: "targetCIDContainer",
						value: function () {
							if (this.isCIDPatch()) {
								var e = k(le.findComponentNodeList(this.container, this.targetCID))
									, t = e[0];
								return 0 === e.slice(1).length ? t : t && t.parentNode
							}
						}
					}, {
						key: "buildDiffHTML",
						value: function (e, t, n, i) {
							var r = this
								, o = this.isCIDPatch()
								, a = o && i.getAttribute(j) === this.targetCID.toString();
							if (!o || a)
								return t;
							var u = null
								, s = document.createElement("template");
							u = le.cloneNode(i);
							var c = k(le.findComponentNodeList(u, this.targetCID))
								, l = c[0]
								, d = c.slice(1);
							return s.innerHTML = t,
								d.forEach(function (e) {
									return e.remove()
								}),
								Array.from(u.childNodes).forEach(function (e) {
									e.id && e.nodeType === Node.ELEMENT_NODE && e.getAttribute(j) !== r.targetCID.toString() && (e.setAttribute("data-phx-skip", ""),
										e.innerHTML = "")
								}),
								Array.from(s.content.childNodes).forEach(function (e) {
									return u.insertBefore(e, l)
								}),
								l.remove(),
								u.outerHTML
						}
					}]),
					e
			}()
			, fe = function () {
				function e(t, n, i, r, o) {
					var a = this;
					T(this, e),
						this.liveSocket = n,
						this.flash = o,
						this.parent = i,
						this.root = i ? i.root : this,
						this.el = t,
						this.id = this.el.id,
						this.view = this.el.getAttribute(O),
						this.ref = 0,
						this.childJoins = 0,
						this.loaderTimer = null,
						this.pendingDiffs = [],
						this.pruningCIDs = [],
						this.href = r,
						this.joinCount = this.parent ? this.parent.joinCount - 1 : 0,
						this.joinPending = !0,
						this.destroyed = !1,
						this.joinCallback = function () { }
						,
						this.stopCallback = function () { }
						,
						this.pendingJoinOps = this.parent ? null : [],
						this.viewHooks = {},
						this.uploaders = {},
						this.formSubmits = [],
						this.children = this.parent ? null : {},
						this.root.children[this.id] = {},
						this.channel = this.liveSocket.channel("lv:".concat(this.id), function () {
							return {
								url: a.href,
								params: a.connectParams(),
								session: a.getSession(),
								static: a.getStatic(),
								flash: a.flash
							}
						}),
						this.showLoader(this.liveSocket.loaderTimeout),
						this.bindChannel()
				}
				return D(e, [{
					key: "isMain",
					value: function () {
						return this.liveSocket.main === this
					}
				}, {
					key: "connectParams",
					value: function () {
						var e = this.liveSocket.params(this.view)
							, t = le.all(document, "[".concat(this.binding("track-static"), "]")).map(function (e) {
								return e.src || e.href
							}).filter(function (e) {
								return "string" == typeof e
							});
						return t.length > 0 && (e._track_static = t),
							e._mounts = this.joinCount,
							e
					}
				}, {
					key: "name",
					value: function () {
						return this.view
					}
				}, {
					key: "isConnected",
					value: function () {
						return this.channel.canPush()
					}
				}, {
					key: "getSession",
					value: function () {
						return this.el.getAttribute("data-phx-session")
					}
				}, {
					key: "getStatic",
					value: function () {
						var e = this.el.getAttribute(J);
						return "" === e ? null : e
					}
				}, {
					key: "destroy",
					value: function () {
						var e = this
							, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function () { }
							;
						this.destroyAllChildren(),
							this.destroyed = !0,
							delete this.root.children[this.id],
							this.parent && delete this.root.children[this.parent.id][this.id],
							clearTimeout(this.loaderTimer);
						var n = function () {
							for (var n in t(),
								e.viewHooks)
								e.viewHooks[n].__trigger__("beforeDestroy"),
									e.destroyHook(e.viewHooks[n])
						};
						this.log("destroyed", function () {
							return ["the child has been removed from the parent"]
						}),
							this.channel.leave().receive("ok", n).receive("error", n).receive("timeout", n)
					}
				}, {
					key: "setContainerClasses",
					value: function () {
						var e;
						this.el.classList.remove("phx-connected", "phx-disconnected", "phx-error"),
							(e = this.el.classList).add.apply(e, arguments)
					}
				}, {
					key: "isLoading",
					value: function () {
						return this.el.classList.contains("phx-disconnected")
					}
				}, {
					key: "showLoader",
					value: function (e) {
						var t = this;
						if (clearTimeout(this.loaderTimer),
							e)
							this.loaderTimer = setTimeout(function () {
								return t.showLoader()
							}, e);
						else {
							for (var n in this.viewHooks)
								this.viewHooks[n].__trigger__("disconnected");
							this.setContainerClasses("phx-disconnected")
						}
					}
				}, {
					key: "hideLoader",
					value: function () {
						clearTimeout(this.loaderTimer),
							this.setContainerClasses("phx-connected")
					}
				}, {
					key: "triggerReconnected",
					value: function () {
						for (var e in this.viewHooks)
							this.viewHooks[e].__trigger__("reconnected")
					}
				}, {
					key: "log",
					value: function (e, t) {
						this.liveSocket.log(this, e, t)
					}
				}, {
					key: "withinTargets",
					value: function (e, t) {
						var n = this;
						if (/^(0|[1-9]\d*)$/.test(e)) {
							var i = le.findComponentNodeList(this.el, e);
							0 === i.length ? z("no component found matching phx-target of ".concat(e)) : t(this, i[0])
						} else {
							var r = Array.from(document.querySelectorAll(e));
							0 === r.length && z('nothing found matching the phx-target selector "'.concat(e, '"')),
								r.forEach(function (e) {
									return n.liveSocket.owner(e, function (n) {
										return t(n, e)
									})
								})
						}
					}
				}, {
					key: "applyDiff",
					value: function (e, t, n) {
						this.log(e, function () {
							return ["", X(t)]
						});
						var i = ue.extract(t)
							, r = i.diff
							, o = i.reply
							, a = i.events
							, u = i.title;
						return u && le.putTitle(u),
							n({
								diff: r,
								reply: o,
								events: a
							}),
							o
					}
				}, {
					key: "onJoin",
					value: function (e) {
						var t = this
							, n = e.rendered;
						this.childJoins = 0,
							this.joinPending = !0,
							this.flash = null,
							ce.dropLocal(this.name(), "consecutive-reloads"),
							this.applyDiff("mount", n, function (n) {
								var i = n.diff
									, r = n.events;
								t.rendered = new ue(t.id, i);
								var o = t.renderContainer(null, "join");
								t.dropPendingRefs();
								var a = t.formsForRecovery(o);
								t.joinCount++,
									a.length > 0 ? a.forEach(function (e, n) {
										t.pushFormRecovery(e, function (e) {
											n === a.length - 1 && t.onJoinComplete(e, o, r)
										})
									}) : t.onJoinComplete(e, o, r)
							})
					}
				}, {
					key: "dropPendingRefs",
					value: function () {
						le.all(this.el, "[".concat(F, "]"), function (e) {
							return e.removeAttribute(F)
						})
					}
				}, {
					key: "onJoinComplete",
					value: function (e, t, n) {
						var i = this
							, r = e.live_patch;
						if (this.joinCount > 1 || this.parent && !this.parent.isJoinPending())
							return this.applyJoinPatch(r, t, n);
						0 === le.findPhxChildrenInFragment(t, this.id).filter(function (e) {
							var t = e.id && i.el.querySelector("#".concat(e.id))
								, n = t && t.getAttribute(J);
							return n && e.setAttribute(J, n),
								i.joinChild(e)
						}).length ? this.parent ? (this.root.pendingJoinOps.push([this, function () {
							return i.applyJoinPatch(r, t, n)
						}
						]),
							this.parent.ackJoin(this)) : (this.onAllChildJoinsComplete(),
								this.applyJoinPatch(r, t, n)) : this.root.pendingJoinOps.push([this, function () {
									return i.applyJoinPatch(r, t, n)
								}
								])
					}
				}, {
					key: "attachTrueDocEl",
					value: function () {
						this.el = le.byId(this.id),
							this.el.setAttribute("data-phx-root-id", this.root.id)
					}
				}, {
					key: "dispatchEvents",
					value: function (e) {
						e.forEach(function (e) {
							var t = x(e, 2)
								, n = t[0]
								, i = t[1];
							window.dispatchEvent(new CustomEvent("phx:hook:".concat(n), {
								detail: i
							}))
						})
					}
				}, {
					key: "applyJoinPatch",
					value: function (e, t, n) {
						var i = this;
						this.attachTrueDocEl();
						var r = new he(this, this.el, this.id, t, null);
						if (r.markPrunableContentForRemoval(),
							this.performPatch(r, !1),
							this.joinNewChildren(),
							le.all(this.el, "[".concat(this.binding("hook"), "], [data-phx-").concat("hook", "]"), function (e) {
								var t = i.addHook(e);
								t && t.__trigger__("mounted")
							}),
							this.joinPending = !1,
							this.dispatchEvents(n),
							this.applyPendingUpdates(),
							e) {
							var o = e.kind
								, a = e.to;
							this.liveSocket.historyPatch(a, o)
						}
						this.hideLoader(),
							this.joinCount > 1 && this.triggerReconnected(),
							this.stopCallback()
					}
				}, {
					key: "triggerBeforeUpdateHook",
					value: function (e, t) {
						this.liveSocket.triggerDOM("onBeforeElUpdated", [e, t]);
						var n = this.getHook(e)
							, i = n && le.isIgnored(e, this.binding("update"));
						if (n && !e.isEqualNode(t) && (!i || !function (e, t) {
							return JSON.stringify(e) === JSON.stringify(t)
						}(e.dataset, t.dataset)))
							return n.__trigger__("beforeUpdate"),
								n
					}
				}, {
					key: "triggerUpdatedHook",
					value: function (e) {
						e.__trigger__("updated")
					}
				}, {
					key: "performPatch",
					value: function (e, t) {
						var n = this
							, i = []
							, r = !1
							, o = new Set;
						return e.after("added", function (e) {
							n.liveSocket.triggerDOM("onNodeAdded", [e]);
							var t = n.addHook(e);
							t && t.__trigger__("mounted")
						}),
							e.after("phxChildAdded", function (e) {
								return r = !0
							}),
							e.before("updated", function (e, t) {
								n.triggerBeforeUpdateHook(e, t) && o.add(e.id)
							}),
							e.after("updated", function (e) {
								o.has(e.id) && n.triggerUpdatedHook(n.getHook(e))
							}),
							e.before("discarded", function (e) {
								var t = n.getHook(e);
								t && t.__trigger__("beforeDestroy")
							}),
							e.after("discarded", function (e) {
								var t = n.componentID(e);
								"number" == typeof t && -1 === i.indexOf(t) && i.push(t);
								var r = n.getHook(e);
								r && n.destroyHook(r)
							}),
							e.perform(),
							t && this.maybePushComponentsDestroyed(i),
							r
					}
				}, {
					key: "joinNewChildren",
					value: function () {
						var e = this;
						le.findPhxChildren(this.el, this.id).forEach(function (t) {
							return e.joinChild(t)
						})
					}
				}, {
					key: "getChildById",
					value: function (e) {
						return this.root.children[this.id][e]
					}
				}, {
					key: "getDescendentByEl",
					value: function (e) {
						return e.id === this.id ? this : this.children[e.getAttribute("data-phx-parent-id")][e.id]
					}
				}, {
					key: "destroyDescendent",
					value: function (e) {
						for (var t in this.root.children)
							for (var n in this.root.children[t])
								if (n === e)
									return this.root.children[t][n].destroy()
					}
				}, {
					key: "joinChild",
					value: function (t) {
						if (!this.getChildById(t.id)) {
							var n = new e(t, this.liveSocket, this);
							return this.root.children[this.id][n.id] = n,
								n.join(),
								this.childJoins++,
								!0
						}
					}
				}, {
					key: "isJoinPending",
					value: function () {
						return this.joinPending
					}
				}, {
					key: "ackJoin",
					value: function (e) {
						this.childJoins--,
							0 === this.childJoins && (this.parent ? this.parent.ackJoin(this) : this.onAllChildJoinsComplete())
					}
				}, {
					key: "onAllChildJoinsComplete",
					value: function () {
						this.joinCallback(),
							this.pendingJoinOps.forEach(function (e) {
								var t = x(e, 2)
									, n = t[0]
									, i = t[1];
								n.isDestroyed() || i()
							}),
							this.pendingJoinOps = []
					}
				}, {
					key: "update",
					value: function (e, t) {
						var n = this;
						if (this.isJoinPending() || this.liveSocket.hasPendingLink())
							return this.pendingDiffs.push({
								diff: e,
								events: t
							});
						this.rendered.mergeDiff(e);
						var i = !1;
						this.rendered.isComponentOnlyDiff(e) ? this.liveSocket.time("component patch complete", function () {
							le.findParentCIDs(n.el, n.rendered.componentCIDs(e)).forEach(function (t) {
								n.componentPatch(n.rendered.getComponent(e, t), t) && (i = !0)
							})
						}) : Q(e) || this.liveSocket.time("full patch complete", function () {
							var t = n.renderContainer(e, "update")
								, r = new he(n, n.el, n.id, t, null);
							i = n.performPatch(r, !0)
						}),
							this.dispatchEvents(t),
							i && this.joinNewChildren()
					}
				}, {
					key: "renderContainer",
					value: function (e, t) {
						var n = this;
						return this.liveSocket.time("toString diff (".concat(t, ")"), function () {
							var t = n.el.tagName
								, i = e ? n.rendered.componentCIDs(e).concat(n.pruningCIDs) : null
								, r = n.rendered.toString(i);
							return "<".concat(t, ">").concat(r, "</").concat(t, ">")
						})
					}
				}, {
					key: "componentPatch",
					value: function (e, t) {
						if (Q(e))
							return !1;
						var n = this.rendered.componentToString(t)
							, i = new he(this, this.el, this.id, n, t);
						return this.performPatch(i, !0)
					}
				}, {
					key: "getHook",
					value: function (e) {
						return this.viewHooks[pe.elementID(e)]
					}
				}, {
					key: "addHook",
					value: function (e) {
						if (!pe.elementID(e) && e.getAttribute) {
							var t = e.getAttribute("data-phx-".concat("hook")) || e.getAttribute(this.binding("hook"));
							if (!t || this.ownsElement(e)) {
								var n = this.liveSocket.getHookCallbacks(t);
								if (n) {
									e.id || z('no DOM ID for hook "'.concat(t, '". Hooks require a unique ID on each element.'), e);
									var i = new pe(this, e, n);
									return this.viewHooks[pe.elementID(i.el)] = i,
										i
								}
								null !== t && z('unknown hook found for "'.concat(t, '"'), e)
							}
						}
					}
				}, {
					key: "destroyHook",
					value: function (e) {
						e.__trigger__("destroyed"),
							e.__cleanup__(),
							delete this.viewHooks[pe.elementID(e.el)]
					}
				}, {
					key: "applyPendingUpdates",
					value: function () {
						var e = this;
						this.pendingDiffs.forEach(function (t) {
							var n = t.diff
								, i = t.events;
							return e.update(n, i)
						}),
							this.pendingDiffs = []
					}
				}, {
					key: "onChannel",
					value: function (e, t) {
						var n = this;
						this.liveSocket.onChannel(this.channel, e, function (e) {
							n.isJoinPending() ? n.root.pendingJoinOps.push([n, function () {
								return t(e)
							}
							]) : t(e)
						})
					}
				}, {
					key: "bindChannel",
					value: function () {
						var e = this;
						this.liveSocket.onChannel(this.channel, "diff", function (t) {
							e.applyDiff("update", t, function (t) {
								var n = t.diff
									, i = t.events;
								return e.update(n, i)
							})
						}),
							this.onChannel("redirect", function (t) {
								var n = t.to
									, i = t.flash;
								return e.onRedirect({
									to: n,
									flash: i
								})
							}),
							this.onChannel("live_patch", function (t) {
								return e.onLivePatch(t)
							}),
							this.onChannel("live_redirect", function (t) {
								return e.onLiveRedirect(t)
							}),
							this.channel.onError(function (t) {
								return e.onError(t)
							}),
							this.channel.onClose(function (t) {
								return e.onClose(t)
							})
					}
				}, {
					key: "destroyAllChildren",
					value: function () {
						for (var e in this.root.children[this.id])
							this.getChildById(e).destroy()
					}
				}, {
					key: "onLiveRedirect",
					value: function (e) {
						var t = e.to
							, n = e.kind
							, i = e.flash
							, r = this.expandURL(t);
						this.liveSocket.historyRedirect(r, n, i)
					}
				}, {
					key: "onLivePatch",
					value: function (e) {
						var t = e.to
							, n = e.kind;
						this.href = this.expandURL(t),
							this.liveSocket.historyPatch(t, n)
					}
				}, {
					key: "expandURL",
					value: function (e) {
						return e.startsWith("/") ? "".concat(window.location.protocol, "//").concat(window.location.host).concat(e) : e
					}
				}, {
					key: "onRedirect",
					value: function (e) {
						var t = e.to
							, n = e.flash;
						this.liveSocket.redirect(t, n)
					}
				}, {
					key: "isDestroyed",
					value: function () {
						return this.destroyed
					}
				}, {
					key: "join",
					value: function (e) {
						var t = this;
						this.parent || (this.stopCallback = this.liveSocket.withPageLoading({
							to: this.href,
							kind: "initial"
						})),
							this.joinCallback = function () {
								return e && e(t, t.joinCount)
							}
							,
							this.liveSocket.wrapPush(this, {
								timeout: !1
							}, function () {
								return t.channel.join().receive("ok", function (e) {
									return t.onJoin(e)
								}).receive("error", function (e) {
									return t.onJoinError(e)
								}).receive("timeout", function () {
									return t.onJoinError({
										reason: "timeout"
									})
								})
							})
					}
				}, {
					key: "onJoinError",
					value: function (e) {
						return (e.redirect || e.live_redirect) && (this.joinPending = !1,
							this.channel.leave()),
							e.redirect ? this.onRedirect(e.redirect) : e.live_redirect ? this.onLiveRedirect(e.live_redirect) : (this.log("error", function () {
								return ["unable to join", e]
							}),
								this.liveSocket.reloadWithJitter(this))
					}
				}, {
					key: "onClose",
					value: function (e) {
						if (!this.isDestroyed()) {
							if (this.isJoinPending() || this.liveSocket.hasPendingLink() && "leave" !== e)
								return this.liveSocket.reloadWithJitter(this);
							this.destroyAllChildren(),
								this.liveSocket.dropActiveElement(this),
								document.activeElement && document.activeElement.blur(),
								this.liveSocket.isUnloaded() && this.showLoader(200)
						}
					}
				}, {
					key: "onError",
					value: function (e) {
						this.onClose(e),
							this.log("error", function () {
								return ["view crashed", e]
							}),
							this.liveSocket.isUnloaded() || this.displayError()
					}
				}, {
					key: "displayError",
					value: function () {
						this.isMain() && le.dispatchEvent(window, "phx:page-loading-start", {
							to: this.href,
							kind: "error"
						}),
							this.showLoader(),
							this.setContainerClasses("phx-disconnected", "phx-error")
					}
				}, {
					key: "pushWithReply",
					value: function (e, t, n) {
						var i = this
							, r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : function () { }
							, o = x(e ? e() : [null, []], 2)
							, a = o[0]
							, u = x(o[1], 1)[0]
							, s = function () { };
						return u && null !== u.getAttribute(this.binding("page-loading")) && (s = this.liveSocket.withPageLoading({
							kind: "element",
							target: u
						})),
							"number" != typeof n.cid && delete n.cid,
							this.liveSocket.wrapPush(this, {
								timeout: !0
							}, function () {
								return i.channel.push(t, n, 3e4).receive("ok", function (e) {
									var t = null;
									null !== a && i.undoRefs(a),
										e.diff && (t = i.applyDiff("update", e.diff, function (e) {
											var t = e.diff
												, n = e.events;
											i.update(t, n)
										})),
										e.redirect && i.onRedirect(e.redirect),
										e.live_patch && i.onLivePatch(e.live_patch),
										e.live_redirect && i.onLiveRedirect(e.live_redirect),
										s(),
										r(e, t)
								})
							})
					}
				}, {
					key: "undoRefs",
					value: function (e) {
						var t = this;
						le.all(this.el, "[".concat(F, '="').concat(e, '"]'), function (e) {
							e.removeAttribute(F),
								null !== e.getAttribute("data-phx-readonly") && (e.readOnly = !1,
									e.removeAttribute("data-phx-readonly")),
								null !== e.getAttribute("data-phx-disabled") && (e.disabled = !1,
									e.removeAttribute("data-phx-disabled")),
								H.forEach(function (t) {
									return le.removeClass(e, t)
								});
							var n = e.getAttribute("data-phx-disable-with-restore");
							null !== n && (e.innerText = n,
								e.removeAttribute("data-phx-disable-with-restore"));
							var i = le.private(e, F);
							if (i) {
								var r = t.triggerBeforeUpdateHook(e, i);
								he.patchEl(e, i, t.liveSocket.getActiveElement()),
									r && t.triggerUpdatedHook(r),
									le.deletePrivate(e, F)
							}
						})
					}
				}, {
					key: "putRef",
					value: function (e, t) {
						var n = this.ref++
							, i = this.binding("disable-with");
						return e.forEach(function (e) {
							e.classList.add("phx-".concat(t, "-loading")),
								e.setAttribute(F, n);
							var r = e.getAttribute(i);
							null !== r && (e.getAttribute("data-phx-disable-with-restore") || e.setAttribute("data-phx-disable-with-restore", e.innerText),
								e.innerText = r)
						}),
							[n, e]
					}
				}, {
					key: "componentID",
					value: function (e) {
						var t = e.getAttribute && e.getAttribute(j);
						return t ? parseInt(t) : null
					}
				}, {
					key: "targetComponentID",
					value: function (e, t) {
						return e.getAttribute(this.binding("target")) ? this.closestComponentID(t) : null
					}
				}, {
					key: "closestComponentID",
					value: function (e) {
						var t = this;
						return e ? Z(e.closest("[".concat(j, "]")), function (e) {
							return t.ownsElement(e) && t.componentID(e)
						}) : null
					}
				}, {
					key: "pushHookEvent",
					value: function (e, t, n, i) {
						var r = x(this.putRef([], "hook"), 2)
							, o = r[0]
							, a = r[1];
						return this.pushWithReply(function () {
							return [o, a]
						}, "event", {
							type: "hook",
							event: t,
							value: n,
							cid: this.closestComponentID(e)
						}, function (e, t) {
							return i(t, o)
						}),
							o
					}
				}, {
					key: "extractMeta",
					value: function (e, t) {
						for (var n = this.binding("value-"), i = 0; i < e.attributes.length; i++) {
							var r = e.attributes[i].name;
							r.startsWith(n) && (t[r.replace(n, "")] = e.getAttribute(r))
						}
						return void 0 !== e.value && (t.value = e.value,
							"INPUT" === e.tagName && U.indexOf(e.type) >= 0 && !e.checked && delete t.value),
							t
					}
				}, {
					key: "pushEvent",
					value: function (e, t, n, i, r) {
						var o = this;
						this.pushWithReply(function () {
							return o.putRef([t], e)
						}, "event", {
							type: e,
							event: i,
							value: this.extractMeta(t, r),
							cid: this.targetComponentID(t, n)
						})
					}
				}, {
					key: "pushKey",
					value: function (e, t, n, i, r) {
						var o = this;
						this.pushWithReply(function () {
							return o.putRef([e], n)
						}, "event", {
							type: n,
							event: i,
							value: this.extractMeta(e, r),
							cid: this.targetComponentID(e, t)
						})
					}
				}, {
					key: "pushFileProgress",
					value: function (e, t, n) {
						var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : function () { }
							;
						this.liveSocket.withinOwners(e.form, function (r, o) {
							r.pushWithReply(null, "progress", {
								event: e.getAttribute(r.binding("progress")),
								ref: e.getAttribute("data-phx-upload-ref"),
								entry_ref: t,
								progress: n,
								cid: r.targetComponentID(e.form, o)
							}, i)
						})
					}
				}, {
					key: "pushInput",
					value: function (e, t, n, i, r) {
						var o = this
							, a = this.targetComponentID(e.form, t)
							, u = function () {
								return o.putRef([e, e.form], "change")
							}
							, s = ae(e.form, {
								_target: i.name
							});
						e.files && e.files.length > 0 && ie.trackFiles(e, Array.from(e.files));
						var c = {
							type: "form",
							event: n,
							value: s,
							uploads: ie.serializeUploads(e),
							cid: a
						};
						this.pushWithReply(u, "event", c, function (n) {
							if ("file" === e.type && null !== e.getAttribute("data-phx-auto-upload")) {
								if (ie.filesAwaitingPreflight(e).length > 0) {
									var i = x(u(), 2)
										, s = i[0];
									i[1];
									o.uploadFiles(e.form, t, s, a, function (t) {
										r && r(n),
											o.triggerAwaitingSubmit(e.form)
									})
								}
							} else
								r && r(n)
						})
					}
				}, {
					key: "triggerAwaitingSubmit",
					value: function (e) {
						var t = this.getScheduledSubmit(e);
						if (t) {
							var n = x(t, 3)
								, i = (n[0],
									n[1],
									n[2]);
							this.cancelSubmit(e),
								i()
						}
					}
				}, {
					key: "getScheduledSubmit",
					value: function (e) {
						return this.formSubmits.find(function (t) {
							var n = x(t, 2)
								, i = n[0];
							n[1];
							return i.isSameNode(e)
						})
					}
				}, {
					key: "scheduleSubmit",
					value: function (e, t, n) {
						if (this.getScheduledSubmit(e))
							return !0;
						this.formSubmits.push([e, t, n])
					}
				}, {
					key: "cancelSubmit",
					value: function (e) {
						var t = this;
						this.formSubmits = this.formSubmits.filter(function (n) {
							var i = x(n, 3)
								, r = i[0]
								, o = i[1];
							i[2];
							return !r.isSameNode(e) || (t.undoRefs(o),
								!1)
						})
					}
				}, {
					key: "pushFormSubmit",
					value: function (e, t, n, i) {
						var r = this
							, o = function (e) {
								return !(G(e, "".concat(r.binding("update"), "=ignore"), e.form) || G(e, "data-phx-update=ignore", e.form))
							}
							, a = function () {
								var t = le.all(e, "[".concat(r.binding("disable-with"), "]"))
									, n = le.all(e, "button").filter(o)
									, i = le.all(e, "input,textarea,select").filter(o);
								return n.forEach(function (e) {
									e.setAttribute("data-phx-disabled", e.disabled),
										e.disabled = !0
								}),
									i.forEach(function (e) {
										e.setAttribute("data-phx-readonly", e.readOnly),
											e.readOnly = !0,
											e.files && (e.setAttribute("data-phx-disabled", e.disabled),
												e.disabled = !0)
									}),
									e.setAttribute(r.binding("page-loading"), ""),
									r.putRef([e].concat(t).concat(n).concat(i), "submit")
							}
							, u = this.targetComponentID(e, t);
						if (ie.hasUploadsInProgress(e)) {
							var s = x(a(), 2)
								, c = s[0];
							s[1];
							return this.scheduleSubmit(e, c, function () {
								return r.pushFormSubmit(e, t, n, i)
							})
						}
						if (ie.inputsAwaitingPreflight(e).length > 0) {
							var l = x(a(), 2)
								, d = l[0]
								, h = l[1]
								, f = function () {
									return [d, h]
								};
							this.uploadFiles(e, t, d, u, function (t) {
								var o = ae(e, {});
								r.pushWithReply(f, "event", {
									type: "form",
									event: n,
									value: o,
									cid: u
								}, i)
							})
						} else {
							var v = ae(e);
							this.pushWithReply(a, "event", {
								type: "form",
								event: n,
								value: v,
								cid: u
							}, i)
						}
					}
				}, {
					key: "uploadFiles",
					value: function (e, t, n, i, r) {
						var o = this
							, a = this.joinCount;
						ie.activeFileInputs(e).forEach(function (e) {
							var i = new ie(e, o, r);
							o.uploaders[e] = i;
							var u = i.entries().map(function (e) {
								return e.toPreflightPayload()
							})
								, s = {
									ref: e.getAttribute("data-phx-upload-ref"),
									entries: u,
									cid: o.targetComponentID(e.form, t)
								};
							o.log("upload", function () {
								return ["sending preflight request", s]
							}),
								o.pushWithReply(null, "allow_upload", s, function (e) {
									if (o.log("upload", function () {
										return ["got preflight response", e]
									}),
										e.error) {
										o.undoRefs(n);
										var t = x(e.error, 2)
											, r = t[0]
											, u = t[1];
										o.log("upload", function () {
											return ["error for entry ".concat(r), u]
										})
									} else {
										i.initAdapterUpload(e, function (e) {
											o.channel.onError(function () {
												o.joinCount === a && e()
											})
										}, o.liveSocket)
									}
								})
						})
					}
				}, {
					key: "pushFormRecovery",
					value: function (e, t) {
						var n = this;
						this.liveSocket.withinOwners(e, function (i, r) {
							var o = e.elements[0]
								, a = e.getAttribute(n.binding("auto-recover")) || e.getAttribute(n.binding("change"));
							i.pushInput(o, r, a, o, t)
						})
					}
				}, {
					key: "pushLinkPatch",
					value: function (e, t, n) {
						var i = this
							, r = this.liveSocket.setPendingLink(e)
							, o = t ? function () {
								return i.putRef([t], "click")
							}
								: null;
						this.pushWithReply(o, "link", {
							url: e
						}, function (t) {
							t.link_redirect ? i.liveSocket.replaceMain(e, null, n, r) : i.liveSocket.commitPendingLink(r) && (i.href = e,
								i.applyPendingUpdates(),
								n && n())
						}).receive("timeout", function () {
							return i.liveSocket.redirect(window.location.href)
						})
					}
				}, {
					key: "formsForRecovery",
					value: function (e) {
						var t = this;
						if (this.joinCount <= 1)
							return [];
						var n = this.binding("change")
							, i = document.createElement("template");
						return i.innerHTML = e,
							le.all(this.el, "form[".concat(n, "]")).filter(function (e) {
								return t.ownsElement(e)
							}).filter(function (e) {
								return e.elements.length > 0
							}).filter(function (e) {
								return "ignore" !== e.getAttribute(t.binding("auto-recover"))
							}).filter(function (e) {
								return i.content.querySelector("form[".concat(n, '="').concat(e.getAttribute(n), '"]'))
							})
					}
				}, {
					key: "maybePushComponentsDestroyed",
					value: function (e) {
						var t, n = this, i = e.filter(function (e) {
							return 0 === le.findComponentNodeList(n.el, e).length
						});
						i.length > 0 && ((t = this.pruningCIDs).push.apply(t, E(i)),
							this.pushWithReply(null, "cids_will_destroy", {
								cids: i
							}, function () {
								n.pruningCIDs = n.pruningCIDs.filter(function (e) {
									return -1 !== i.indexOf(e)
								});
								var e = i.filter(function (e) {
									return 0 === le.findComponentNodeList(n.el, e).length
								});
								e.length > 0 && n.pushWithReply(null, "cids_destroyed", {
									cids: e
								}, function (e) {
									n.rendered.pruneCIDs(e.cids)
								})
							}))
					}
				}, {
					key: "ownsElement",
					value: function (e) {
						return e.getAttribute("data-phx-parent-id") === this.id || Z(e.closest(M), function (e) {
							return e.id
						}) === this.id
					}
				}, {
					key: "submitForm",
					value: function (e, t, n) {
						var i = this;
						le.putPrivate(e, "phx-has-submitted", !0),
							this.liveSocket.blurActiveElement(this),
							this.pushFormSubmit(e, t, n, function () {
								i.liveSocket.restorePreviouslyActiveFocus()
							})
					}
				}, {
					key: "binding",
					value: function (e) {
						return this.liveSocket.binding(e)
					}
				}]),
					e
			}()
			, ve = 1
			, pe = function () {
				function e(t, n, i) {
					for (var r in T(this, e),
						this.__view = t,
						this.__liveSocket = t.liveSocket,
						this.__callbacks = i,
						this.__listeners = new Set,
						this.el = n,
						this.viewName = t.name(),
						this.el.phxHookId = this.constructor.makeID(),
						this.__callbacks)
						this[r] = this.__callbacks[r]
				}
				return D(e, null, [{
					key: "makeID",
					value: function () {
						return ve++
					}
				}, {
					key: "elementID",
					value: function (e) {
						return e.phxHookId
					}
				}]),
					D(e, [{
						key: "pushEvent",
						value: function (e) {
							var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
								, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function () { }
								;
							return this.__view.pushHookEvent(null, e, t, n)
						}
					}, {
						key: "pushEventTo",
						value: function (e, t) {
							var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
								, i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : function () { }
								;
							return this.__view.withinTargets(e, function (e, r) {
								return e.pushHookEvent(r, t, n, i)
							})
						}
					}, {
						key: "handleEvent",
						value: function (e, t) {
							var n = function (n, i) {
								return i ? e : t(n.detail)
							};
							return window.addEventListener("phx:hook:".concat(e), n),
								this.__listeners.add(n),
								n
						}
					}, {
						key: "removeHandleEvent",
						value: function (e) {
							var t = e(null, !0);
							window.removeEventListener("phx:hook:".concat(t), e),
								this.__listeners.delete(e)
						}
					}, {
						key: "__cleanup__",
						value: function () {
							var e = this;
							this.__listeners.forEach(function (t) {
								return e.removeHandleEvent(t)
							})
						}
					}, {
						key: "__trigger__",
						value: function (e) {
							var t = this.__callbacks[e];
							t && t.call(this)
						}
					}]),
					e
			}();
		t.default = se
	}
		, function (e, t) {
			var n;
			n = function () {
				return this
			}();
			try {
				n = n || Function("return this")() || (0,
					eval)("this")
			} catch (e) {
				"object" == typeof window && (n = window)
			}
			e.exports = n
		}
		, function (e, t, n) {
			(function (t) {
				t.Phoenix || (t.Phoenix = {}),
					e.exports = t.Phoenix.LiveView = n(0)
			}
			).call(this, n(1))
		}
	])
});
