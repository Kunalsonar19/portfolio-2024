!(function () {
  var t,
    e,
    i,
    r =
      "undefined" != typeof globalThis
        ? globalThis
        : "undefined" != typeof self
        ? self
        : "undefined" != typeof window
        ? window
        : "undefined" != typeof global
        ? global
        : {},
    n = !1;
  function s(t) {
    for (var i = Object.keys(t), r = 0; r < i.length; r++) e[i[r]] = t[i[r]];
  }
  function o(t) {
    var i = e[t];
    if (null == i) throw new Error("Could not resolve bundle with id " + t);
    return i;
  }
  function a() {
    return (
      n ||
        ((n = !0), (e = {}), ((t = {}).register = s), (i = o), (t.resolve = i)),
      t
    );
  }
  function l(t, e) {
    if (!(t instanceof e))
      throw new TypeError("Cannot call a class as a function");
  }
  function u(t, e) {
    for (var i = 0; i < e.length; i++) {
      var r = e[i];
      (r.enumerable = r.enumerable || !1),
        (r.configurable = !0),
        "value" in r && (r.writable = !0),
        Object.defineProperty(t, r.key, r);
    }
  }
  function c(t, e, i) {
    return e && u(t.prototype, e), i && u(t, i), t;
  }
  function h(t, e, i) {
    return (
      e in t
        ? Object.defineProperty(t, e, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (t[e] = i),
      t
    );
  }
  function d(t, e) {
    var i = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(t);
      e &&
        (r = r.filter(function (e) {
          return Object.getOwnPropertyDescriptor(t, e).enumerable;
        })),
        i.push.apply(i, r);
    }
    return i;
  }
  function f(t) {
    for (var e = 1; e < arguments.length; e++) {
      var i = null != arguments[e] ? arguments[e] : {};
      e % 2
        ? d(Object(i), !0).forEach(function (e) {
            h(t, e, i[e]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i))
        : d(Object(i)).forEach(function (e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e));
          });
    }
    return t;
  }
  function p(t, e) {
    if ("function" != typeof e && null !== e)
      throw new TypeError("Super expression must either be null or a function");
    (t.prototype = Object.create(e && e.prototype, {
      constructor: { value: t, writable: !0, configurable: !0 },
    })),
      e && g(t, e);
  }
  function D(t) {
    return (D = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (t) {
          return t.__proto__ || Object.getPrototypeOf(t);
        })(t);
  }
  function g(t, e) {
    return (g =
      Object.setPrototypeOf ||
      function (t, e) {
        return (t.__proto__ = e), t;
      })(t, e);
  }
  function m(t) {
    if (void 0 === t)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return t;
  }
  function v(t, e) {
    return !e || ("object" != typeof e && "function" != typeof e) ? m(t) : e;
  }
  function y(t) {
    var e = (function () {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;
      try {
        return (
          Date.prototype.toString.call(
            Reflect.construct(Date, [], function () {})
          ),
          !0
        );
      } catch (t) {
        return !1;
      }
    })();
    return function () {
      var i,
        r = D(t);
      if (e) {
        var n = D(this).constructor;
        i = Reflect.construct(r, arguments, n);
      } else i = r.apply(this, arguments);
      return v(this, i);
    };
  }
  function _(t, e, i) {
    return (_ =
      "undefined" != typeof Reflect && Reflect.get
        ? Reflect.get
        : function (t, e, i) {
            var r = (function (t, e) {
              for (
                ;
                !Object.prototype.hasOwnProperty.call(t, e) &&
                null !== (t = D(t));

              );
              return t;
            })(t, e);
            if (r) {
              var n = Object.getOwnPropertyDescriptor(r, e);
              return n.get ? n.get.call(i) : n.value;
            }
          })(t, e, i || t);
  }
  function w(t, e) {
    return (
      (function (t) {
        if (Array.isArray(t)) return t;
      })(t) ||
      (function (t, e) {
        if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(t)))
          return;
        var i = [],
          r = !0,
          n = !1,
          s = void 0;
        try {
          for (
            var o, a = t[Symbol.iterator]();
            !(r = (o = a.next()).done) &&
            (i.push(o.value), !e || i.length !== e);
            r = !0
          );
        } catch (t) {
          (n = !0), (s = t);
        } finally {
          try {
            r || null == a.return || a.return();
          } finally {
            if (n) throw s;
          }
        }
        return i;
      })(t, e) ||
      x(t, e) ||
      (function () {
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      })()
    );
  }
  function b(t) {
    return (
      (function (t) {
        if (Array.isArray(t)) return C(t);
      })(t) ||
      (function (t) {
        if ("undefined" != typeof Symbol && Symbol.iterator in Object(t))
          return Array.from(t);
      })(t) ||
      x(t) ||
      (function () {
        throw new TypeError(
          "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      })()
    );
  }
  function x(t, e) {
    if (t) {
      if ("string" == typeof t) return C(t, e);
      var i = Object.prototype.toString.call(t).slice(8, -1);
      return (
        "Object" === i && t.constructor && (i = t.constructor.name),
        "Map" === i || "Set" === i
          ? Array.from(t)
          : "Arguments" === i ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)
          ? C(t, e)
          : void 0
      );
    }
  }
  function C(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for (var i = 0, r = new Array(e); i < e; i++) r[i] = t[i];
    return r;
  }
  a().register(
    JSON.parse(
      '{"KAtDQ":"playbook.bd225655.js","2j8SH":"cate1.012f66c0.png","7G9gf":"cate2.7ea52d9e.png","72luJ":"cate3.474cc3f5.png"}'
    )
  );
  var E = {
      el: document,
      name: "scroll",
      offset: [0, 0],
      repeat: !1,
      smooth: !1,
      initPosition: { x: 0, y: 0 },
      direction: "vertical",
      gestureDirection: "vertical",
      reloadOnContextChange: !1,
      lerp: 0.1,
      class: "is-inview",
      scrollbarContainer: !1,
      scrollbarClass: "c-scrollbar",
      scrollingClass: "has-scroll-scrolling",
      draggingClass: "has-scroll-dragging",
      smoothClass: "has-scroll-smooth",
      initClass: "has-scroll-init",
      getSpeed: !1,
      getDirection: !1,
      scrollFromAnywhere: !1,
      multiplier: 1,
      firefoxMultiplier: 50,
      touchMultiplier: 2,
      resetNativeScroll: !0,
      tablet: {
        smooth: !1,
        direction: "vertical",
        gestureDirection: "vertical",
        breakpoint: 1024,
      },
      smartphone: {
        smooth: !1,
        direction: "vertical",
        gestureDirection: "vertical",
      },
    },
    F = (function () {
      function t() {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        l(this, t),
          Object.assign(this, E, e),
          (this.smartphone = E.smartphone),
          e.smartphone && Object.assign(this.smartphone, e.smartphone),
          (this.tablet = E.tablet),
          e.tablet && Object.assign(this.tablet, e.tablet),
          (this.namespace = "locomotive"),
          (this.html = document.documentElement),
          (this.windowHeight = window.innerHeight),
          (this.windowWidth = window.innerWidth),
          (this.windowMiddle = {
            x: this.windowWidth / 2,
            y: this.windowHeight / 2,
          }),
          (this.els = {}),
          (this.currentElements = {}),
          (this.listeners = {}),
          (this.hasScrollTicking = !1),
          (this.hasCallEventSet = !1),
          (this.checkScroll = this.checkScroll.bind(this)),
          (this.checkResize = this.checkResize.bind(this)),
          (this.checkEvent = this.checkEvent.bind(this)),
          (this.instance = {
            scroll: { x: 0, y: 0 },
            limit: { x: this.html.offsetWidth, y: this.html.offsetHeight },
            currentElements: this.currentElements,
          }),
          this.isMobile
            ? this.isTablet
              ? (this.context = "tablet")
              : (this.context = "smartphone")
            : (this.context = "desktop"),
          this.isMobile && (this.direction = this[this.context].direction),
          "horizontal" === this.direction
            ? (this.directionAxis = "x")
            : (this.directionAxis = "y"),
          this.getDirection && (this.instance.direction = null),
          this.getDirection && (this.instance.speed = 0),
          this.html.classList.add(this.initClass),
          window.addEventListener("resize", this.checkResize, !1);
      }
      return (
        c(t, [
          {
            key: "init",
            value: function () {
              this.initEvents();
            },
          },
          {
            key: "checkScroll",
            value: function () {
              this.dispatchScroll();
            },
          },
          {
            key: "checkResize",
            value: function () {
              var t = this;
              this.resizeTick ||
                ((this.resizeTick = !0),
                requestAnimationFrame(function () {
                  t.resize(), (t.resizeTick = !1);
                }));
            },
          },
          { key: "resize", value: function () {} },
          {
            key: "checkContext",
            value: function () {
              if (this.reloadOnContextChange) {
                (this.isMobile =
                  /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                    navigator.userAgent
                  ) ||
                  ("MacIntel" === navigator.platform &&
                    navigator.maxTouchPoints > 1) ||
                  this.windowWidth < this.tablet.breakpoint),
                  (this.isTablet =
                    this.isMobile &&
                    this.windowWidth >= this.tablet.breakpoint);
                var t = this.context;
                if (
                  (this.isMobile
                    ? this.isTablet
                      ? (this.context = "tablet")
                      : (this.context = "smartphone")
                    : (this.context = "desktop"),
                  t != this.context)
                )
                  ("desktop" == t ? this.smooth : this[t].smooth) !=
                    ("desktop" == this.context
                      ? this.smooth
                      : this[this.context].smooth) && window.location.reload();
              }
            },
          },
          {
            key: "initEvents",
            value: function () {
              var t = this;
              (this.scrollToEls = this.el.querySelectorAll(
                "[data-".concat(this.name, "-to]")
              )),
                (this.setScrollTo = this.setScrollTo.bind(this)),
                this.scrollToEls.forEach(function (e) {
                  e.addEventListener("click", t.setScrollTo, !1);
                });
            },
          },
          {
            key: "setScrollTo",
            value: function (t) {
              t.preventDefault(),
                this.scrollTo(
                  t.currentTarget.getAttribute(
                    "data-".concat(this.name, "-href")
                  ) || t.currentTarget.getAttribute("href"),
                  {
                    offset: t.currentTarget.getAttribute(
                      "data-".concat(this.name, "-offset")
                    ),
                  }
                );
            },
          },
          { key: "addElements", value: function () {} },
          {
            key: "detectElements",
            value: function (t) {
              var e = this,
                i = this.instance.scroll.y,
                r = i + this.windowHeight,
                n = this.instance.scroll.x,
                s = n + this.windowWidth;
              Object.entries(this.els).forEach(function (o) {
                var a = w(o, 2),
                  l = a[0],
                  u = a[1];
                if (
                  (!u ||
                    (u.inView && !t) ||
                    ("horizontal" === e.direction
                      ? s >= u.left && n < u.right && e.setInView(u, l)
                      : r >= u.top && i < u.bottom && e.setInView(u, l)),
                  u && u.inView)
                )
                  if ("horizontal" === e.direction) {
                    var c = u.right - u.left;
                    (u.progress =
                      (e.instance.scroll.x - (u.left - e.windowWidth)) /
                      (c + e.windowWidth)),
                      (s < u.left || n > u.right) && e.setOutOfView(u, l);
                  } else {
                    var h = u.bottom - u.top;
                    (u.progress =
                      (e.instance.scroll.y - (u.top - e.windowHeight)) /
                      (h + e.windowHeight)),
                      (r < u.top || i > u.bottom) && e.setOutOfView(u, l);
                  }
              }),
                (this.hasScrollTicking = !1);
            },
          },
          {
            key: "setInView",
            value: function (t, e) {
              (this.els[e].inView = !0),
                t.el.classList.add(t.class),
                (this.currentElements[e] = t),
                t.call &&
                  this.hasCallEventSet &&
                  (this.dispatchCall(t, "enter"),
                  t.repeat || (this.els[e].call = !1));
            },
          },
          {
            key: "setOutOfView",
            value: function (t, e) {
              var i = this;
              (this.els[e].inView = !1),
                Object.keys(this.currentElements).forEach(function (t) {
                  t === e && delete i.currentElements[t];
                }),
                t.call && this.hasCallEventSet && this.dispatchCall(t, "exit"),
                t.repeat && t.el.classList.remove(t.class);
            },
          },
          {
            key: "dispatchCall",
            value: function (t, e) {
              (this.callWay = e),
                (this.callValue = t.call.split(",").map(function (t) {
                  return t.trim();
                })),
                (this.callObj = t),
                1 == this.callValue.length &&
                  (this.callValue = this.callValue[0]);
              var i = new Event(this.namespace + "call");
              this.el.dispatchEvent(i);
            },
          },
          {
            key: "dispatchScroll",
            value: function () {
              var t = new Event(this.namespace + "scroll");
              this.el.dispatchEvent(t);
            },
          },
          {
            key: "setEvents",
            value: function (t, e) {
              this.listeners[t] || (this.listeners[t] = []);
              var i = this.listeners[t];
              i.push(e),
                1 === i.length &&
                  this.el.addEventListener(
                    this.namespace + t,
                    this.checkEvent,
                    !1
                  ),
                "call" === t &&
                  ((this.hasCallEventSet = !0), this.detectElements(!0));
            },
          },
          {
            key: "unsetEvents",
            value: function (t, e) {
              if (this.listeners[t]) {
                var i = this.listeners[t],
                  r = i.indexOf(e);
                r < 0 ||
                  (i.splice(r, 1),
                  0 === i.index &&
                    this.el.removeEventListener(
                      this.namespace + t,
                      this.checkEvent,
                      !1
                    ));
              }
            },
          },
          {
            key: "checkEvent",
            value: function (t) {
              var e = this,
                i = t.type.replace(this.namespace, ""),
                r = this.listeners[i];
              r &&
                0 !== r.length &&
                r.forEach(function (t) {
                  switch (i) {
                    case "scroll":
                      return t(e.instance);
                    case "call":
                      return t(e.callValue, e.callWay, e.callObj);
                    default:
                      return t();
                  }
                });
            },
          },
          { key: "startScroll", value: function () {} },
          { key: "stopScroll", value: function () {} },
          {
            key: "setScroll",
            value: function (t, e) {
              this.instance.scroll = { x: 0, y: 0 };
            },
          },
          {
            key: "destroy",
            value: function () {
              var t = this;
              window.removeEventListener("resize", this.checkResize, !1),
                Object.keys(this.listeners).forEach(function (e) {
                  t.el.removeEventListener(t.namespace + e, t.checkEvent, !1);
                }),
                (this.listeners = {}),
                this.scrollToEls.forEach(function (e) {
                  e.removeEventListener("click", t.setScrollTo, !1);
                }),
                this.html.classList.remove(this.initClass);
            },
          },
        ]),
        t
      );
    })(),
    T =
      "undefined" != typeof globalThis
        ? globalThis
        : "undefined" != typeof window
        ? window
        : void 0 !== r
        ? r
        : "undefined" != typeof self
        ? self
        : {};
  function S(t, e) {
    return t((e = { exports: {} }), e.exports), e.exports;
  }
  var A = S(function (t, e) {
      t.exports = {
        polyfill: function () {
          var t = window,
            e = document;
          if (
            !("scrollBehavior" in e.documentElement.style) ||
            !0 === t.__forceSmoothScrollPolyfill__
          ) {
            var i,
              r = t.HTMLElement || t.Element,
              n = {
                scroll: t.scroll || t.scrollTo,
                scrollBy: t.scrollBy,
                elementScroll: r.prototype.scroll || a,
                scrollIntoView: r.prototype.scrollIntoView,
              },
              s =
                t.performance && t.performance.now
                  ? t.performance.now.bind(t.performance)
                  : Date.now,
              o =
                ((i = t.navigator.userAgent),
                new RegExp(["MSIE ", "Trident/", "Edge/"].join("|")).test(i)
                  ? 1
                  : 0);
            (t.scroll = t.scrollTo =
              function () {
                void 0 !== arguments[0] &&
                  (!0 !== l(arguments[0])
                    ? p.call(
                        t,
                        e.body,
                        void 0 !== arguments[0].left
                          ? ~~arguments[0].left
                          : t.scrollX || t.pageXOffset,
                        void 0 !== arguments[0].top
                          ? ~~arguments[0].top
                          : t.scrollY || t.pageYOffset
                      )
                    : n.scroll.call(
                        t,
                        void 0 !== arguments[0].left
                          ? arguments[0].left
                          : "object" != typeof arguments[0]
                          ? arguments[0]
                          : t.scrollX || t.pageXOffset,
                        void 0 !== arguments[0].top
                          ? arguments[0].top
                          : void 0 !== arguments[1]
                          ? arguments[1]
                          : t.scrollY || t.pageYOffset
                      ));
              }),
              (t.scrollBy = function () {
                void 0 !== arguments[0] &&
                  (l(arguments[0])
                    ? n.scrollBy.call(
                        t,
                        void 0 !== arguments[0].left
                          ? arguments[0].left
                          : "object" != typeof arguments[0]
                          ? arguments[0]
                          : 0,
                        void 0 !== arguments[0].top
                          ? arguments[0].top
                          : void 0 !== arguments[1]
                          ? arguments[1]
                          : 0
                      )
                    : p.call(
                        t,
                        e.body,
                        ~~arguments[0].left + (t.scrollX || t.pageXOffset),
                        ~~arguments[0].top + (t.scrollY || t.pageYOffset)
                      ));
              }),
              (r.prototype.scroll = r.prototype.scrollTo =
                function () {
                  if (void 0 !== arguments[0])
                    if (!0 !== l(arguments[0])) {
                      var t = arguments[0].left,
                        e = arguments[0].top;
                      p.call(
                        this,
                        this,
                        void 0 === t ? this.scrollLeft : ~~t,
                        void 0 === e ? this.scrollTop : ~~e
                      );
                    } else {
                      if (
                        "number" == typeof arguments[0] &&
                        void 0 === arguments[1]
                      )
                        throw new SyntaxError("Value could not be converted");
                      n.elementScroll.call(
                        this,
                        void 0 !== arguments[0].left
                          ? ~~arguments[0].left
                          : "object" != typeof arguments[0]
                          ? ~~arguments[0]
                          : this.scrollLeft,
                        void 0 !== arguments[0].top
                          ? ~~arguments[0].top
                          : void 0 !== arguments[1]
                          ? ~~arguments[1]
                          : this.scrollTop
                      );
                    }
                }),
              (r.prototype.scrollBy = function () {
                void 0 !== arguments[0] &&
                  (!0 !== l(arguments[0])
                    ? this.scroll({
                        left: ~~arguments[0].left + this.scrollLeft,
                        top: ~~arguments[0].top + this.scrollTop,
                        behavior: arguments[0].behavior,
                      })
                    : n.elementScroll.call(
                        this,
                        void 0 !== arguments[0].left
                          ? ~~arguments[0].left + this.scrollLeft
                          : ~~arguments[0] + this.scrollLeft,
                        void 0 !== arguments[0].top
                          ? ~~arguments[0].top + this.scrollTop
                          : ~~arguments[1] + this.scrollTop
                      ));
              }),
              (r.prototype.scrollIntoView = function () {
                if (!0 !== l(arguments[0])) {
                  var i = d(this),
                    r = i.getBoundingClientRect(),
                    s = this.getBoundingClientRect();
                  i !== e.body
                    ? (p.call(
                        this,
                        i,
                        i.scrollLeft + s.left - r.left,
                        i.scrollTop + s.top - r.top
                      ),
                      "fixed" !== t.getComputedStyle(i).position &&
                        t.scrollBy({
                          left: r.left,
                          top: r.top,
                          behavior: "smooth",
                        }))
                    : t.scrollBy({
                        left: s.left,
                        top: s.top,
                        behavior: "smooth",
                      });
                } else
                  n.scrollIntoView.call(
                    this,
                    void 0 === arguments[0] || arguments[0]
                  );
              });
          }
          function a(t, e) {
            (this.scrollLeft = t), (this.scrollTop = e);
          }
          function l(t) {
            if (
              null === t ||
              "object" != typeof t ||
              void 0 === t.behavior ||
              "auto" === t.behavior ||
              "instant" === t.behavior
            )
              return !0;
            if ("object" == typeof t && "smooth" === t.behavior) return !1;
            throw new TypeError(
              "behavior member of ScrollOptions " +
                t.behavior +
                " is not a valid value for enumeration ScrollBehavior."
            );
          }
          function u(t, e) {
            return "Y" === e
              ? t.clientHeight + o < t.scrollHeight
              : "X" === e
              ? t.clientWidth + o < t.scrollWidth
              : void 0;
          }
          function c(e, i) {
            var r = t.getComputedStyle(e, null)["overflow" + i];
            return "auto" === r || "scroll" === r;
          }
          function h(t) {
            var e = u(t, "Y") && c(t, "Y"),
              i = u(t, "X") && c(t, "X");
            return e || i;
          }
          function d(t) {
            for (; t !== e.body && !1 === h(t); ) t = t.parentNode || t.host;
            return t;
          }
          function f(e) {
            var i,
              r,
              n,
              o,
              a = (s() - e.startTime) / 468;
            (o = a = a > 1 ? 1 : a),
              (i = 0.5 * (1 - Math.cos(Math.PI * o))),
              (r = e.startX + (e.x - e.startX) * i),
              (n = e.startY + (e.y - e.startY) * i),
              e.method.call(e.scrollable, r, n),
              (r === e.x && n === e.y) || t.requestAnimationFrame(f.bind(t, e));
          }
          function p(i, r, o) {
            var l,
              u,
              c,
              h,
              d = s();
            i === e.body
              ? ((l = t),
                (u = t.scrollX || t.pageXOffset),
                (c = t.scrollY || t.pageYOffset),
                (h = n.scroll))
              : ((l = i), (u = i.scrollLeft), (c = i.scrollTop), (h = a)),
              f({
                scrollable: l,
                method: h,
                startTime: d,
                startX: u,
                startY: c,
                x: r,
                y: o,
              });
          }
        },
      };
    }),
    k =
      (A.polyfill,
      (function (t) {
        p(i, t);
        var e = y(i);
        function i() {
          var t,
            r =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
          return (
            l(this, i),
            (t = e.call(this, r)).resetNativeScroll &&
              (history.scrollRestoration &&
                (history.scrollRestoration = "manual"),
              window.scrollTo(0, 0)),
            window.addEventListener("scroll", t.checkScroll, !1),
            void 0 === window.smoothscrollPolyfill &&
              ((window.smoothscrollPolyfill = A),
              window.smoothscrollPolyfill.polyfill()),
            t
          );
        }
        return (
          c(i, [
            {
              key: "init",
              value: function () {
                (this.instance.scroll.y = window.pageYOffset),
                  this.addElements(),
                  this.detectElements(),
                  _(D(i.prototype), "init", this).call(this);
              },
            },
            {
              key: "checkScroll",
              value: function () {
                var t = this;
                _(D(i.prototype), "checkScroll", this).call(this),
                  this.getDirection && this.addDirection(),
                  this.getSpeed &&
                    (this.addSpeed(), (this.speedTs = Date.now())),
                  (this.instance.scroll.y = window.pageYOffset),
                  Object.entries(this.els).length &&
                    (this.hasScrollTicking ||
                      (requestAnimationFrame(function () {
                        t.detectElements();
                      }),
                      (this.hasScrollTicking = !0)));
              },
            },
            {
              key: "addDirection",
              value: function () {
                window.pageYOffset > this.instance.scroll.y
                  ? "down" !== this.instance.direction &&
                    (this.instance.direction = "down")
                  : window.pageYOffset < this.instance.scroll.y &&
                    "up" !== this.instance.direction &&
                    (this.instance.direction = "up");
              },
            },
            {
              key: "addSpeed",
              value: function () {
                window.pageYOffset != this.instance.scroll.y
                  ? (this.instance.speed =
                      (window.pageYOffset - this.instance.scroll.y) /
                      Math.max(1, Date.now() - this.speedTs))
                  : (this.instance.speed = 0);
              },
            },
            {
              key: "resize",
              value: function () {
                Object.entries(this.els).length &&
                  ((this.windowHeight = window.innerHeight),
                  this.updateElements());
              },
            },
            {
              key: "addElements",
              value: function () {
                var t = this;
                (this.els = {}),
                  this.el
                    .querySelectorAll("[data-" + this.name + "]")
                    .forEach(function (e, i) {
                      e.getBoundingClientRect();
                      var r,
                        n,
                        s,
                        o = e.dataset[t.name + "Class"] || t.class,
                        a =
                          "string" == typeof e.dataset[t.name + "Id"]
                            ? e.dataset[t.name + "Id"]
                            : i,
                        l =
                          "string" == typeof e.dataset[t.name + "Offset"]
                            ? e.dataset[t.name + "Offset"].split(",")
                            : t.offset,
                        u = e.dataset[t.name + "Repeat"],
                        c = e.dataset[t.name + "Call"],
                        h = e.dataset[t.name + "Target"],
                        d = (s =
                          void 0 !== h
                            ? document.querySelector("".concat(h))
                            : e).getBoundingClientRect();
                      (r = d.top + t.instance.scroll.y),
                        (n = d.left + t.instance.scroll.x);
                      var f = r + s.offsetHeight,
                        p = n + s.offsetWidth;
                      u = "false" != u && (null != u || t.repeat);
                      var D = t.getRelativeOffset(l),
                        g = {
                          el: e,
                          targetEl: s,
                          id: a,
                          class: o,
                          top: (r += D[0]),
                          bottom: (f -= D[1]),
                          left: n,
                          right: p,
                          offset: l,
                          progress: 0,
                          repeat: u,
                          inView: !1,
                          call: c,
                        };
                      (t.els[a] = g),
                        e.classList.contains(o) && t.setInView(t.els[a], a);
                    });
              },
            },
            {
              key: "updateElements",
              value: function () {
                var t = this;
                Object.entries(this.els).forEach(function (e) {
                  var i = w(e, 2),
                    r = i[0],
                    n = i[1],
                    s =
                      n.targetEl.getBoundingClientRect().top +
                      t.instance.scroll.y,
                    o = s + n.targetEl.offsetHeight,
                    a = t.getRelativeOffset(n.offset);
                  (t.els[r].top = s + a[0]), (t.els[r].bottom = o - a[1]);
                }),
                  (this.hasScrollTicking = !1);
              },
            },
            {
              key: "getRelativeOffset",
              value: function (t) {
                var e = [0, 0];
                if (t)
                  for (var i = 0; i < t.length; i++)
                    "string" == typeof t[i]
                      ? t[i].includes("%")
                        ? (e[i] = parseInt(
                            (t[i].replace("%", "") * this.windowHeight) / 100
                          ))
                        : (e[i] = parseInt(t[i]))
                      : (e[i] = t[i]);
                return e;
              },
            },
            {
              key: "scrollTo",
              value: function (t) {
                var e =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {},
                  i = parseInt(e.offset) || 0,
                  r = !!e.callback && e.callback;
                if ("string" == typeof t) {
                  if ("top" === t) t = this.html;
                  else if ("bottom" === t)
                    t = this.html.offsetHeight - window.innerHeight;
                  else if (!(t = document.querySelector(t))) return;
                } else if ("number" == typeof t) t = parseInt(t);
                else if (!t || !t.tagName)
                  return void console.warn("`target` parameter is not valid");
                i =
                  "number" != typeof t
                    ? t.getBoundingClientRect().top + i + this.instance.scroll.y
                    : t + i;
                var n = function () {
                  return parseInt(window.pageYOffset) === parseInt(i);
                };
                if (r) {
                  if (n()) return void r();
                  var s = function t() {
                    n() && (window.removeEventListener("scroll", t), r());
                  };
                  window.addEventListener("scroll", s);
                }
                window.scrollTo({ top: i, behavior: "smooth" });
              },
            },
            {
              key: "update",
              value: function () {
                this.addElements(), this.detectElements();
              },
            },
            {
              key: "destroy",
              value: function () {
                _(D(i.prototype), "destroy", this).call(this),
                  window.removeEventListener("scroll", this.checkScroll, !1);
              },
            },
          ]),
          i
        );
      })(F)),
    O = Object.getOwnPropertySymbols,
    M = Object.prototype.hasOwnProperty,
    B = Object.prototype.propertyIsEnumerable;
  function L(t) {
    if (null == t)
      throw new TypeError(
        "Object.assign cannot be called with null or undefined"
      );
    return Object(t);
  }
  var P = (function () {
    try {
      if (!Object.assign) return !1;
      var t = new String("abc");
      if (((t[5] = "de"), "5" === Object.getOwnPropertyNames(t)[0])) return !1;
      for (var e = {}, i = 0; i < 10; i++) e["_" + String.fromCharCode(i)] = i;
      if (
        "0123456789" !==
        Object.getOwnPropertyNames(e)
          .map(function (t) {
            return e[t];
          })
          .join("")
      )
        return !1;
      var r = {};
      return (
        "abcdefghijklmnopqrst".split("").forEach(function (t) {
          r[t] = t;
        }),
        "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, r)).join("")
      );
    } catch (t) {
      return !1;
    }
  })()
    ? Object.assign
    : function (t, e) {
        for (var i, r, n = L(t), s = 1; s < arguments.length; s++) {
          for (var o in (i = Object(arguments[s])))
            M.call(i, o) && (n[o] = i[o]);
          if (O) {
            r = O(i);
            for (var a = 0; a < r.length; a++)
              B.call(i, r[a]) && (n[r[a]] = i[r[a]]);
          }
        }
        return n;
      };
  function R() {}
  R.prototype = {
    on: function (t, e, i) {
      var r = this.e || (this.e = {});
      return (r[t] || (r[t] = [])).push({ fn: e, ctx: i }), this;
    },
    once: function (t, e, i) {
      var r = this;
      function n() {
        r.off(t, n), e.apply(i, arguments);
      }
      return (n._ = e), this.on(t, n, i);
    },
    emit: function (t) {
      for (
        var e = [].slice.call(arguments, 1),
          i = ((this.e || (this.e = {}))[t] || []).slice(),
          r = 0,
          n = i.length;
        r < n;
        r++
      )
        i[r].fn.apply(i[r].ctx, e);
      return this;
    },
    off: function (t, e) {
      var i = this.e || (this.e = {}),
        r = i[t],
        n = [];
      if (r && e)
        for (var s = 0, o = r.length; s < o; s++)
          r[s].fn !== e && r[s].fn._ !== e && n.push(r[s]);
      return n.length ? (i[t] = n) : delete i[t], this;
    },
  };
  var j = R,
    q = S(function (t, e) {
      (function () {
        (null !== e ? e : this).Lethargy = (function () {
          function t(t, e, i, r) {
            (this.stability = null != t ? Math.abs(t) : 8),
              (this.sensitivity = null != e ? 1 + Math.abs(e) : 100),
              (this.tolerance = null != i ? 1 + Math.abs(i) : 1.1),
              (this.delay = null != r ? r : 150),
              (this.lastUpDeltas = function () {
                var t, e, i;
                for (
                  i = [], t = 1, e = 2 * this.stability;
                  1 <= e ? t <= e : t >= e;
                  1 <= e ? t++ : t--
                )
                  i.push(null);
                return i;
              }.call(this)),
              (this.lastDownDeltas = function () {
                var t, e, i;
                for (
                  i = [], t = 1, e = 2 * this.stability;
                  1 <= e ? t <= e : t >= e;
                  1 <= e ? t++ : t--
                )
                  i.push(null);
                return i;
              }.call(this)),
              (this.deltasTimestamp = function () {
                var t, e, i;
                for (
                  i = [], t = 1, e = 2 * this.stability;
                  1 <= e ? t <= e : t >= e;
                  1 <= e ? t++ : t--
                )
                  i.push(null);
                return i;
              }.call(this));
          }
          return (
            (t.prototype.check = function (t) {
              var e;
              return (
                null != (t = t.originalEvent || t).wheelDelta
                  ? (e = t.wheelDelta)
                  : null != t.deltaY
                  ? (e = -40 * t.deltaY)
                  : (null == t.detail && 0 !== t.detail) ||
                    (e = -40 * t.detail),
                this.deltasTimestamp.push(Date.now()),
                this.deltasTimestamp.shift(),
                e > 0
                  ? (this.lastUpDeltas.push(e),
                    this.lastUpDeltas.shift(),
                    this.isInertia(1))
                  : (this.lastDownDeltas.push(e),
                    this.lastDownDeltas.shift(),
                    this.isInertia(-1))
              );
            }),
            (t.prototype.isInertia = function (t) {
              var e, i, r, n, s, o, a;
              return null ===
                (e = -1 === t ? this.lastDownDeltas : this.lastUpDeltas)[0]
                ? t
                : !(
                    this.deltasTimestamp[2 * this.stability - 2] + this.delay >
                      Date.now() && e[0] === e[2 * this.stability - 1]
                  ) &&
                    ((r = e.slice(0, this.stability)),
                    (i = e.slice(this.stability, 2 * this.stability)),
                    (a = r.reduce(function (t, e) {
                      return t + e;
                    })),
                    (s = i.reduce(function (t, e) {
                      return t + e;
                    })),
                    (o = a / r.length),
                    (n = s / i.length),
                    Math.abs(o) < Math.abs(n * this.tolerance) &&
                      this.sensitivity < Math.abs(n) &&
                      t);
            }),
            (t.prototype.showLastUpDeltas = function () {
              return this.lastUpDeltas;
            }),
            (t.prototype.showLastDownDeltas = function () {
              return this.lastDownDeltas;
            }),
            t
          );
        })();
      }).call(T);
    }),
    z = {
      hasWheelEvent: "onwheel" in document,
      hasMouseWheelEvent: "onmousewheel" in document,
      hasTouch:
        "ontouchstart" in window ||
        window.TouchEvent ||
        (window.DocumentTouch && document instanceof DocumentTouch),
      hasTouchWin: navigator.msMaxTouchPoints && navigator.msMaxTouchPoints > 1,
      hasPointer: !!window.navigator.msPointerEnabled,
      hasKeyDown: "onkeydown" in document,
      isFirefox: navigator.userAgent.indexOf("Firefox") > -1,
    },
    I = Object.prototype.toString,
    H = Object.prototype.hasOwnProperty;
  function V(t, e) {
    return function () {
      return t.apply(e, arguments);
    };
  }
  var W = q.Lethargy,
    N = "virtualscroll",
    Y = Q,
    X = 37,
    G = 38,
    U = 39,
    K = 40,
    $ = 32;
  function Q(t) {
    !(function (t) {
      if (!t) return console.warn("bindAll requires at least one argument.");
      var e = Array.prototype.slice.call(arguments, 1);
      if (0 === e.length)
        for (var i in t)
          H.call(t, i) &&
            "function" == typeof t[i] &&
            "[object Function]" == I.call(t[i]) &&
            e.push(i);
      for (var r = 0; r < e.length; r++) {
        var n = e[r];
        t[n] = V(t[n], t);
      }
    })(
      this,
      "_onWheel",
      "_onMouseWheel",
      "_onTouchStart",
      "_onTouchMove",
      "_onKeyDown"
    ),
      (this.el = window),
      t && t.el && ((this.el = t.el), delete t.el),
      (this.options = P(
        {
          mouseMultiplier: 1,
          touchMultiplier: 2,
          firefoxMultiplier: 15,
          keyStep: 120,
          preventTouch: !1,
          unpreventTouchClass: "vs-touchmove-allowed",
          limitInertia: !1,
          useKeyboard: !0,
          useTouch: !0,
        },
        t
      )),
      this.options.limitInertia && (this._lethargy = new W()),
      (this._emitter = new j()),
      (this._event = { y: 0, x: 0, deltaX: 0, deltaY: 0 }),
      (this.touchStartX = null),
      (this.touchStartY = null),
      (this.bodyTouchAction = null),
      void 0 !== this.options.passive &&
        (this.listenerOptions = { passive: this.options.passive });
  }
  function Z(t, e, i) {
    return (1 - i) * t + i * e;
  }
  function J(t) {
    var e = {};
    if (window.getComputedStyle) {
      var i = getComputedStyle(t),
        r = i.transform || i.webkitTransform || i.mozTransform,
        n = r.match(/^matrix3d\((.+)\)$/);
      return (
        n
          ? ((e.x = n ? parseFloat(n[1].split(", ")[12]) : 0),
            (e.y = n ? parseFloat(n[1].split(", ")[13]) : 0))
          : ((n = r.match(/^matrix\((.+)\)$/)),
            (e.x = n ? parseFloat(n[1].split(", ")[4]) : 0),
            (e.y = n ? parseFloat(n[1].split(", ")[5]) : 0)),
        e
      );
    }
  }
  function tt(t) {
    for (var e = []; t && t !== document; t = t.parentNode) e.push(t);
    return e;
  }
  (Q.prototype._notify = function (t) {
    var e = this._event;
    (e.x += e.deltaX),
      (e.y += e.deltaY),
      this._emitter.emit(N, {
        x: e.x,
        y: e.y,
        deltaX: e.deltaX,
        deltaY: e.deltaY,
        originalEvent: t,
      });
  }),
    (Q.prototype._onWheel = function (t) {
      var e = this.options;
      if (!this._lethargy || !1 !== this._lethargy.check(t)) {
        var i = this._event;
        (i.deltaX = t.wheelDeltaX || -1 * t.deltaX),
          (i.deltaY = t.wheelDeltaY || -1 * t.deltaY),
          z.isFirefox &&
            1 == t.deltaMode &&
            ((i.deltaX *= e.firefoxMultiplier),
            (i.deltaY *= e.firefoxMultiplier)),
          (i.deltaX *= e.mouseMultiplier),
          (i.deltaY *= e.mouseMultiplier),
          this._notify(t);
      }
    }),
    (Q.prototype._onMouseWheel = function (t) {
      if (!this.options.limitInertia || !1 !== this._lethargy.check(t)) {
        var e = this._event;
        (e.deltaX = t.wheelDeltaX ? t.wheelDeltaX : 0),
          (e.deltaY = t.wheelDeltaY ? t.wheelDeltaY : t.wheelDelta),
          this._notify(t);
      }
    }),
    (Q.prototype._onTouchStart = function (t) {
      var e = t.targetTouches ? t.targetTouches[0] : t;
      (this.touchStartX = e.pageX), (this.touchStartY = e.pageY);
    }),
    (Q.prototype._onTouchMove = function (t) {
      var e = this.options;
      e.preventTouch &&
        !t.target.classList.contains(e.unpreventTouchClass) &&
        t.preventDefault();
      var i = this._event,
        r = t.targetTouches ? t.targetTouches[0] : t;
      (i.deltaX = (r.pageX - this.touchStartX) * e.touchMultiplier),
        (i.deltaY = (r.pageY - this.touchStartY) * e.touchMultiplier),
        (this.touchStartX = r.pageX),
        (this.touchStartY = r.pageY),
        this._notify(t);
    }),
    (Q.prototype._onKeyDown = function (t) {
      var e = this._event;
      e.deltaX = e.deltaY = 0;
      var i = window.innerHeight - 40;
      switch (t.keyCode) {
        case X:
        case G:
          e.deltaY = this.options.keyStep;
          break;
        case U:
        case K:
          e.deltaY = -this.options.keyStep;
          break;
        case t.shiftKey:
          e.deltaY = i;
          break;
        case $:
          e.deltaY = -i;
          break;
        default:
          return;
      }
      this._notify(t);
    }),
    (Q.prototype._bind = function () {
      z.hasWheelEvent &&
        this.el.addEventListener("wheel", this._onWheel, this.listenerOptions),
        z.hasMouseWheelEvent &&
          this.el.addEventListener(
            "mousewheel",
            this._onMouseWheel,
            this.listenerOptions
          ),
        z.hasTouch &&
          this.options.useTouch &&
          (this.el.addEventListener(
            "touchstart",
            this._onTouchStart,
            this.listenerOptions
          ),
          this.el.addEventListener(
            "touchmove",
            this._onTouchMove,
            this.listenerOptions
          )),
        z.hasPointer &&
          z.hasTouchWin &&
          ((this.bodyTouchAction = document.body.style.msTouchAction),
          (document.body.style.msTouchAction = "none"),
          this.el.addEventListener("MSPointerDown", this._onTouchStart, !0),
          this.el.addEventListener("MSPointerMove", this._onTouchMove, !0)),
        z.hasKeyDown &&
          this.options.useKeyboard &&
          document.addEventListener("keydown", this._onKeyDown);
    }),
    (Q.prototype._unbind = function () {
      z.hasWheelEvent && this.el.removeEventListener("wheel", this._onWheel),
        z.hasMouseWheelEvent &&
          this.el.removeEventListener("mousewheel", this._onMouseWheel),
        z.hasTouch &&
          (this.el.removeEventListener("touchstart", this._onTouchStart),
          this.el.removeEventListener("touchmove", this._onTouchMove)),
        z.hasPointer &&
          z.hasTouchWin &&
          ((document.body.style.msTouchAction = this.bodyTouchAction),
          this.el.removeEventListener("MSPointerDown", this._onTouchStart, !0),
          this.el.removeEventListener("MSPointerMove", this._onTouchMove, !0)),
        z.hasKeyDown &&
          this.options.useKeyboard &&
          document.removeEventListener("keydown", this._onKeyDown);
    }),
    (Q.prototype.on = function (t, e) {
      this._emitter.on(N, t, e);
      var i = this._emitter.e;
      i && i.virtualscroll && 1 === i.virtualscroll.length && this._bind();
    }),
    (Q.prototype.off = function (t, e) {
      this._emitter.off(N, t, e);
      var i = this._emitter.e;
      (!i.virtualscroll || i.virtualscroll.length <= 0) && this._unbind();
    }),
    (Q.prototype.reset = function () {
      var t = this._event;
      (t.x = 0), (t.y = 0);
    }),
    (Q.prototype.destroy = function () {
      this._emitter.off(), this._unbind();
    });
  var et = 0.1,
    it = "function" == typeof Float32Array;
  function rt(t, e) {
    return 1 - 3 * e + 3 * t;
  }
  function nt(t, e) {
    return 3 * e - 6 * t;
  }
  function st(t) {
    return 3 * t;
  }
  function ot(t, e, i) {
    return ((rt(e, i) * t + nt(e, i)) * t + st(e)) * t;
  }
  function at(t, e, i) {
    return 3 * rt(e, i) * t * t + 2 * nt(e, i) * t + st(e);
  }
  function lt(t) {
    return t;
  }
  var ut = function (t, e, i, r) {
      if (!(0 <= t && t <= 1 && 0 <= i && i <= 1))
        throw new Error("bezier x values must be in [0, 1] range");
      if (t === e && i === r) return lt;
      for (
        var n = it ? new Float32Array(11) : new Array(11), s = 0;
        s < 11;
        ++s
      )
        n[s] = ot(s * et, t, i);
      function o(e) {
        for (var r = 0, s = 1; 10 !== s && n[s] <= e; ++s) r += et;
        --s;
        var o = r + ((e - n[s]) / (n[s + 1] - n[s])) * et,
          a = at(o, t, i);
        return a >= 0.001
          ? (function (t, e, i, r) {
              for (var n = 0; n < 4; ++n) {
                var s = at(e, i, r);
                if (0 === s) return e;
                e -= (ot(e, i, r) - t) / s;
              }
              return e;
            })(e, o, t, i)
          : 0 === a
          ? o
          : (function (t, e, i, r, n) {
              var s,
                o,
                a = 0;
              do {
                (s = ot((o = e + (i - e) / 2), r, n) - t) > 0
                  ? (i = o)
                  : (e = o);
              } while (Math.abs(s) > 1e-7 && ++a < 10);
              return o;
            })(e, r, r + et, t, i);
      }
      return function (t) {
        return 0 === t ? 0 : 1 === t ? 1 : ot(o(t), e, r);
      };
    },
    ct = 38,
    ht = 40,
    dt = 32,
    ft = 9,
    pt = 33,
    Dt = 34,
    gt = 36,
    mt = 35,
    vt = (function (t) {
      p(i, t);
      var e = y(i);
      function i() {
        var t,
          r =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return (
          l(this, i),
          history.scrollRestoration && (history.scrollRestoration = "manual"),
          window.scrollTo(0, 0),
          (t = e.call(this, r)).inertia && (t.lerp = 0.1 * t.inertia),
          (t.isScrolling = !1),
          (t.isDraggingScrollbar = !1),
          (t.isTicking = !1),
          (t.hasScrollTicking = !1),
          (t.parallaxElements = {}),
          (t.stop = !1),
          (t.scrollbarContainer = r.scrollbarContainer),
          (t.checkKey = t.checkKey.bind(m(t))),
          window.addEventListener("keydown", t.checkKey, !1),
          t
        );
      }
      return (
        c(i, [
          {
            key: "init",
            value: function () {
              var t = this;
              this.html.classList.add(this.smoothClass),
                this.html.setAttribute(
                  "data-".concat(this.name, "-direction"),
                  this.direction
                ),
                (this.instance = f(
                  {
                    delta: { x: this.initPosition.x, y: this.initPosition.y },
                    scroll: { x: this.initPosition.x, y: this.initPosition.y },
                  },
                  this.instance
                )),
                (this.vs = new Y({
                  el: this.scrollFromAnywhere ? document : this.el,
                  mouseMultiplier:
                    navigator.platform.indexOf("Win") > -1 ? 1 : 0.4,
                  firefoxMultiplier: this.firefoxMultiplier,
                  touchMultiplier: this.touchMultiplier,
                  useKeyboard: !1,
                  passive: !0,
                })),
                this.vs.on(function (e) {
                  t.stop ||
                    t.isDraggingScrollbar ||
                    requestAnimationFrame(function () {
                      t.updateDelta(e), t.isScrolling || t.startScrolling();
                    });
                }),
                this.setScrollLimit(),
                this.initScrollBar(),
                this.addSections(),
                this.addElements(),
                this.checkScroll(!0),
                this.transformElements(!0, !0),
                _(D(i.prototype), "init", this).call(this);
            },
          },
          {
            key: "setScrollLimit",
            value: function () {
              if (
                ((this.instance.limit.y =
                  this.el.offsetHeight - this.windowHeight),
                "horizontal" === this.direction)
              ) {
                for (var t = 0, e = this.el.children, i = 0; i < e.length; i++)
                  t += e[i].offsetWidth;
                this.instance.limit.x = t - this.windowWidth;
              }
            },
          },
          {
            key: "startScrolling",
            value: function () {
              (this.startScrollTs = Date.now()),
                (this.isScrolling = !0),
                this.checkScroll(),
                this.html.classList.add(this.scrollingClass);
            },
          },
          {
            key: "stopScrolling",
            value: function () {
              cancelAnimationFrame(this.checkScrollRaf),
                this.scrollToRaf &&
                  (cancelAnimationFrame(this.scrollToRaf),
                  (this.scrollToRaf = null)),
                (this.isScrolling = !1),
                (this.instance.scroll.y = Math.round(this.instance.scroll.y)),
                this.html.classList.remove(this.scrollingClass);
            },
          },
          {
            key: "checkKey",
            value: function (t) {
              var e = this;
              if (this.stop)
                t.keyCode == ft &&
                  requestAnimationFrame(function () {
                    (e.html.scrollTop = 0),
                      (document.body.scrollTop = 0),
                      (e.html.scrollLeft = 0),
                      (document.body.scrollLeft = 0);
                  });
              else {
                switch (t.keyCode) {
                  case ft:
                    requestAnimationFrame(function () {
                      (e.html.scrollTop = 0),
                        (document.body.scrollTop = 0),
                        (e.html.scrollLeft = 0),
                        (document.body.scrollLeft = 0),
                        e.scrollTo(document.activeElement, {
                          offset: -window.innerHeight / 2,
                        });
                    });
                    break;
                  case ct:
                    this.instance.delta[this.directionAxis] -= 240;
                    break;
                  case ht:
                    this.instance.delta[this.directionAxis] += 240;
                    break;
                  case pt:
                    this.instance.delta[this.directionAxis] -=
                      window.innerHeight;
                    break;
                  case Dt:
                    this.instance.delta[this.directionAxis] +=
                      window.innerHeight;
                    break;
                  case gt:
                    this.instance.delta[this.directionAxis] -=
                      this.instance.limit[this.directionAxis];
                    break;
                  case mt:
                    this.instance.delta[this.directionAxis] +=
                      this.instance.limit[this.directionAxis];
                    break;
                  case dt:
                    document.activeElement instanceof HTMLInputElement ||
                      document.activeElement instanceof HTMLTextAreaElement ||
                      (t.shiftKey
                        ? (this.instance.delta[this.directionAxis] -=
                            window.innerHeight)
                        : (this.instance.delta[this.directionAxis] +=
                            window.innerHeight));
                    break;
                  default:
                    return;
                }
                this.instance.delta[this.directionAxis] < 0 &&
                  (this.instance.delta[this.directionAxis] = 0),
                  this.instance.delta[this.directionAxis] >
                    this.instance.limit[this.directionAxis] &&
                    (this.instance.delta[this.directionAxis] =
                      this.instance.limit[this.directionAxis]),
                  this.stopScrolling(),
                  (this.isScrolling = !0),
                  this.checkScroll(),
                  this.html.classList.add(this.scrollingClass);
              }
            },
          },
          {
            key: "checkScroll",
            value: function () {
              var t = this,
                e =
                  arguments.length > 0 &&
                  void 0 !== arguments[0] &&
                  arguments[0];
              if (e || this.isScrolling || this.isDraggingScrollbar) {
                this.hasScrollTicking ||
                  ((this.checkScrollRaf = requestAnimationFrame(function () {
                    return t.checkScroll();
                  })),
                  (this.hasScrollTicking = !0)),
                  this.updateScroll();
                var r = Math.abs(
                    this.instance.delta[this.directionAxis] -
                      this.instance.scroll[this.directionAxis]
                  ),
                  n = Date.now() - this.startScrollTs;
                if (
                  (!this.animatingScroll &&
                    n > 100 &&
                    ((r < 0.5 &&
                      0 != this.instance.delta[this.directionAxis]) ||
                      (r < 0.5 &&
                        0 == this.instance.delta[this.directionAxis])) &&
                    this.stopScrolling(),
                  Object.entries(this.sections).forEach(function (i) {
                    var r = w(i, 2),
                      n = (r[0], r[1]);
                    n.persistent ||
                    (t.instance.scroll[t.directionAxis] >
                      n.offset[t.directionAxis] &&
                      t.instance.scroll[t.directionAxis] <
                        n.limit[t.directionAxis])
                      ? ("horizontal" === t.direction
                          ? t.transform(
                              n.el,
                              -t.instance.scroll[t.directionAxis],
                              0
                            )
                          : t.transform(
                              n.el,
                              0,
                              -t.instance.scroll[t.directionAxis]
                            ),
                        n.inView ||
                          ((n.inView = !0),
                          (n.el.style.opacity = 1),
                          (n.el.style.pointerEvents = "all"),
                          n.el.setAttribute(
                            "data-".concat(t.name, "-section-inview"),
                            ""
                          )))
                      : ((n.inView || e) &&
                          ((n.inView = !1),
                          (n.el.style.opacity = 0),
                          (n.el.style.pointerEvents = "none"),
                          n.el.removeAttribute(
                            "data-".concat(t.name, "-section-inview")
                          )),
                        t.transform(n.el, 0, 0));
                  }),
                  this.getDirection && this.addDirection(),
                  this.getSpeed &&
                    (this.addSpeed(), (this.speedTs = Date.now())),
                  this.detectElements(),
                  this.transformElements(),
                  this.hasScrollbar)
                ) {
                  var s =
                    (this.instance.scroll[this.directionAxis] /
                      this.instance.limit[this.directionAxis]) *
                    this.scrollBarLimit[this.directionAxis];
                  "horizontal" === this.direction
                    ? this.transform(this.scrollbarThumb, s, 0)
                    : this.transform(this.scrollbarThumb, 0, s);
                }
                _(D(i.prototype), "checkScroll", this).call(this),
                  (this.hasScrollTicking = !1);
              }
            },
          },
          {
            key: "resize",
            value: function () {
              (this.windowHeight = window.innerHeight),
                (this.windowWidth = window.innerWidth),
                this.checkContext(),
                (this.windowMiddle = {
                  x: this.windowWidth / 2,
                  y: this.windowHeight / 2,
                }),
                this.update();
            },
          },
          {
            key: "updateDelta",
            value: function (t) {
              var e,
                i =
                  this[this.context] && this[this.context].gestureDirection
                    ? this[this.context].gestureDirection
                    : this.gestureDirection;
              (e =
                "both" === i
                  ? t.deltaX + t.deltaY
                  : "vertical" === i
                  ? t.deltaY
                  : "horizontal" === i
                  ? t.deltaX
                  : t.deltaY),
                (this.instance.delta[this.directionAxis] -=
                  e * this.multiplier),
                this.instance.delta[this.directionAxis] < 0 &&
                  (this.instance.delta[this.directionAxis] = 0),
                this.instance.delta[this.directionAxis] >
                  this.instance.limit[this.directionAxis] &&
                  (this.instance.delta[this.directionAxis] =
                    this.instance.limit[this.directionAxis]);
            },
          },
          {
            key: "updateScroll",
            value: function (t) {
              this.isScrolling || this.isDraggingScrollbar
                ? (this.instance.scroll[this.directionAxis] = Z(
                    this.instance.scroll[this.directionAxis],
                    this.instance.delta[this.directionAxis],
                    this.lerp
                  ))
                : this.instance.scroll[this.directionAxis] >
                  this.instance.limit[this.directionAxis]
                ? this.setScroll(
                    this.instance.scroll[this.directionAxis],
                    this.instance.limit[this.directionAxis]
                  )
                : this.instance.scroll.y < 0
                ? this.setScroll(this.instance.scroll[this.directionAxis], 0)
                : this.setScroll(
                    this.instance.scroll[this.directionAxis],
                    this.instance.delta[this.directionAxis]
                  );
            },
          },
          {
            key: "addDirection",
            value: function () {
              this.instance.delta.y > this.instance.scroll.y
                ? "down" !== this.instance.direction &&
                  (this.instance.direction = "down")
                : this.instance.delta.y < this.instance.scroll.y &&
                  "up" !== this.instance.direction &&
                  (this.instance.direction = "up"),
                this.instance.delta.x > this.instance.scroll.x
                  ? "right" !== this.instance.direction &&
                    (this.instance.direction = "right")
                  : this.instance.delta.x < this.instance.scroll.x &&
                    "left" !== this.instance.direction &&
                    (this.instance.direction = "left");
            },
          },
          {
            key: "addSpeed",
            value: function () {
              this.instance.delta[this.directionAxis] !=
              this.instance.scroll[this.directionAxis]
                ? (this.instance.speed =
                    (this.instance.delta[this.directionAxis] -
                      this.instance.scroll[this.directionAxis]) /
                    Math.max(1, Date.now() - this.speedTs))
                : (this.instance.speed = 0);
            },
          },
          {
            key: "initScrollBar",
            value: function () {
              if (
                ((this.scrollbar = document.createElement("span")),
                (this.scrollbarThumb = document.createElement("span")),
                this.scrollbar.classList.add("".concat(this.scrollbarClass)),
                this.scrollbarThumb.classList.add(
                  "".concat(this.scrollbarClass, "_thumb")
                ),
                this.scrollbar.append(this.scrollbarThumb),
                this.scrollbarContainer
                  ? this.scrollbarContainer.append(this.scrollbar)
                  : document.body.append(this.scrollbar),
                (this.getScrollBar = this.getScrollBar.bind(this)),
                (this.releaseScrollBar = this.releaseScrollBar.bind(this)),
                (this.moveScrollBar = this.moveScrollBar.bind(this)),
                this.scrollbarThumb.addEventListener(
                  "mousedown",
                  this.getScrollBar
                ),
                window.addEventListener("mouseup", this.releaseScrollBar),
                window.addEventListener("mousemove", this.moveScrollBar),
                (this.hasScrollbar = !1),
                "horizontal" == this.direction)
              ) {
                if (
                  this.instance.limit.x + this.windowWidth <=
                  this.windowWidth
                )
                  return;
              } else if (
                this.instance.limit.y + this.windowHeight <=
                this.windowHeight
              )
                return;
              (this.hasScrollbar = !0),
                (this.scrollbarBCR = this.scrollbar.getBoundingClientRect()),
                (this.scrollbarHeight = this.scrollbarBCR.height),
                (this.scrollbarWidth = this.scrollbarBCR.width),
                "horizontal" === this.direction
                  ? (this.scrollbarThumb.style.width = "".concat(
                      (this.scrollbarWidth * this.scrollbarWidth) /
                        (this.instance.limit.x + this.scrollbarWidth),
                      "px"
                    ))
                  : (this.scrollbarThumb.style.height = "".concat(
                      (this.scrollbarHeight * this.scrollbarHeight) /
                        (this.instance.limit.y + this.scrollbarHeight),
                      "px"
                    )),
                (this.scrollbarThumbBCR =
                  this.scrollbarThumb.getBoundingClientRect()),
                (this.scrollBarLimit = {
                  x: this.scrollbarWidth - this.scrollbarThumbBCR.width,
                  y: this.scrollbarHeight - this.scrollbarThumbBCR.height,
                });
            },
          },
          {
            key: "reinitScrollBar",
            value: function () {
              if (((this.hasScrollbar = !1), "horizontal" == this.direction)) {
                if (
                  this.instance.limit.x + this.windowWidth <=
                  this.windowWidth
                )
                  return;
              } else if (
                this.instance.limit.y + this.windowHeight <=
                this.windowHeight
              )
                return;
              (this.hasScrollbar = !0),
                (this.scrollbarBCR = this.scrollbar.getBoundingClientRect()),
                (this.scrollbarHeight = this.scrollbarBCR.height),
                (this.scrollbarWidth = this.scrollbarBCR.width),
                "horizontal" === this.direction
                  ? (this.scrollbarThumb.style.width = "".concat(
                      (this.scrollbarWidth * this.scrollbarWidth) /
                        (this.instance.limit.x + this.scrollbarWidth),
                      "px"
                    ))
                  : (this.scrollbarThumb.style.height = "".concat(
                      (this.scrollbarHeight * this.scrollbarHeight) /
                        (this.instance.limit.y + this.scrollbarHeight),
                      "px"
                    )),
                (this.scrollbarThumbBCR =
                  this.scrollbarThumb.getBoundingClientRect()),
                (this.scrollBarLimit = {
                  x: this.scrollbarWidth - this.scrollbarThumbBCR.width,
                  y: this.scrollbarHeight - this.scrollbarThumbBCR.height,
                });
            },
          },
          {
            key: "destroyScrollBar",
            value: function () {
              this.scrollbarThumb.removeEventListener(
                "mousedown",
                this.getScrollBar
              ),
                window.removeEventListener("mouseup", this.releaseScrollBar),
                window.removeEventListener("mousemove", this.moveScrollBar),
                this.scrollbar.remove();
            },
          },
          {
            key: "getScrollBar",
            value: function (t) {
              (this.isDraggingScrollbar = !0),
                this.checkScroll(),
                this.html.classList.remove(this.scrollingClass),
                this.html.classList.add(this.draggingClass);
            },
          },
          {
            key: "releaseScrollBar",
            value: function (t) {
              (this.isDraggingScrollbar = !1),
                this.html.classList.add(this.scrollingClass),
                this.html.classList.remove(this.draggingClass);
            },
          },
          {
            key: "moveScrollBar",
            value: function (t) {
              var e = this;
              this.isDraggingScrollbar &&
                requestAnimationFrame(function () {
                  var i =
                      (((100 * (t.clientX - e.scrollbarBCR.left)) /
                        e.scrollbarWidth) *
                        e.instance.limit.x) /
                      100,
                    r =
                      (((100 * (t.clientY - e.scrollbarBCR.top)) /
                        e.scrollbarHeight) *
                        e.instance.limit.y) /
                      100;
                  r > 0 && r < e.instance.limit.y && (e.instance.delta.y = r),
                    i > 0 && i < e.instance.limit.x && (e.instance.delta.x = i);
                });
            },
          },
          {
            key: "addElements",
            value: function () {
              var t = this;
              (this.els = {}),
                (this.parallaxElements = {}),
                this.el
                  .querySelectorAll("[data-".concat(this.name, "]"))
                  .forEach(function (e, i) {
                    var r,
                      n,
                      s,
                      o = tt(e),
                      a = Object.entries(t.sections)
                        .map(function (t) {
                          var e = w(t, 2);
                          e[0];
                          return e[1];
                        })
                        .find(function (t) {
                          return o.includes(t.el);
                        }),
                      l = e.dataset[t.name + "Class"] || t.class,
                      u =
                        "string" == typeof e.dataset[t.name + "Id"]
                          ? e.dataset[t.name + "Id"]
                          : "el" + i,
                      c = e.dataset[t.name + "Repeat"],
                      h = e.dataset[t.name + "Call"],
                      d = e.dataset[t.name + "Position"],
                      f = e.dataset[t.name + "Delay"],
                      p = e.dataset[t.name + "Direction"],
                      D = "string" == typeof e.dataset[t.name + "Sticky"],
                      g =
                        !!e.dataset[t.name + "Speed"] &&
                        parseFloat(e.dataset[t.name + "Speed"]) / 10,
                      m =
                        "string" == typeof e.dataset[t.name + "Offset"]
                          ? e.dataset[t.name + "Offset"].split(",")
                          : t.offset,
                      v = e.dataset[t.name + "Target"],
                      y = (s =
                        void 0 !== v
                          ? document.querySelector("".concat(v))
                          : e).getBoundingClientRect();
                    null === a || a.inView
                      ? ((r = y.top + t.instance.scroll.y - J(s).y),
                        (n = y.left + t.instance.scroll.x - J(s).x))
                      : ((r = y.top - J(a.el).y - J(s).y),
                        (n = y.left - J(a.el).x - J(s).x));
                    var _ = r + s.offsetHeight,
                      b = n + s.offsetWidth,
                      x = { x: (b - n) / 2 + n, y: (_ - r) / 2 + r };
                    if (D) {
                      var C = e.getBoundingClientRect(),
                        E = C.top,
                        F = C.left,
                        T = { x: F - n, y: E - r };
                      (r += window.innerHeight),
                        (n += window.innerWidth),
                        (_ =
                          E +
                          s.offsetHeight -
                          e.offsetHeight -
                          T[t.directionAxis]),
                        (x = {
                          x:
                            ((b =
                              F +
                              s.offsetWidth -
                              e.offsetWidth -
                              T[t.directionAxis]) -
                              n) /
                              2 +
                            n,
                          y: (_ - r) / 2 + r,
                        });
                    }
                    c = "false" != c && (null != c || t.repeat);
                    var S = [0, 0];
                    if (m)
                      if ("horizontal" === t.direction) {
                        for (var A = 0; A < m.length; A++)
                          "string" == typeof m[A]
                            ? m[A].includes("%")
                              ? (S[A] = parseInt(
                                  (m[A].replace("%", "") * t.windowWidth) / 100
                                ))
                              : (S[A] = parseInt(m[A]))
                            : (S[A] = m[A]);
                        (n += S[0]), (b -= S[1]);
                      } else {
                        for (A = 0; A < m.length; A++)
                          "string" == typeof m[A]
                            ? m[A].includes("%")
                              ? (S[A] = parseInt(
                                  (m[A].replace("%", "") * t.windowHeight) / 100
                                ))
                              : (S[A] = parseInt(m[A]))
                            : (S[A] = m[A]);
                        (r += S[0]), (_ -= S[1]);
                      }
                    var k = {
                      el: e,
                      id: u,
                      class: l,
                      section: a,
                      top: r,
                      middle: x,
                      bottom: _,
                      left: n,
                      right: b,
                      offset: m,
                      progress: 0,
                      repeat: c,
                      inView: !1,
                      call: h,
                      speed: g,
                      delay: f,
                      position: d,
                      target: s,
                      direction: p,
                      sticky: D,
                    };
                    (t.els[u] = k),
                      e.classList.contains(l) && t.setInView(t.els[u], u),
                      (!1 !== g || D) && (t.parallaxElements[u] = k);
                  });
            },
          },
          {
            key: "addSections",
            value: function () {
              var t = this;
              this.sections = {};
              var e = this.el.querySelectorAll(
                "[data-".concat(this.name, "-section]")
              );
              0 === e.length && (e = [this.el]),
                e.forEach(function (e, i) {
                  var r =
                      "string" == typeof e.dataset[t.name + "Id"]
                        ? e.dataset[t.name + "Id"]
                        : "section" + i,
                    n = e.getBoundingClientRect(),
                    s = {
                      x: n.left - 1.5 * window.innerWidth - J(e).x,
                      y: n.top - 1.5 * window.innerHeight - J(e).y,
                    },
                    o = {
                      x: s.x + n.width + 2 * window.innerWidth,
                      y: s.y + n.height + 2 * window.innerHeight,
                    },
                    a = "string" == typeof e.dataset[t.name + "Persistent"];
                  e.setAttribute("data-scroll-section-id", r);
                  var l = {
                    el: e,
                    offset: s,
                    limit: o,
                    inView: !1,
                    persistent: a,
                    id: r,
                  };
                  t.sections[r] = l;
                });
            },
          },
          {
            key: "transform",
            value: function (t, e, i, r) {
              var n;
              if (r) {
                var s = J(t),
                  o = Z(s.x, e, r),
                  a = Z(s.y, i, r);
                n = "matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,"
                  .concat(o, ",")
                  .concat(a, ",0,1)");
              } else
                n = "matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,"
                  .concat(e, ",")
                  .concat(i, ",0,1)");
              (t.style.webkitTransform = n),
                (t.style.msTransform = n),
                (t.style.transform = n);
            },
          },
          {
            key: "transformElements",
            value: function (t) {
              var e = this,
                i =
                  arguments.length > 1 &&
                  void 0 !== arguments[1] &&
                  arguments[1],
                r = this.instance.scroll.x + this.windowWidth,
                n = this.instance.scroll.y + this.windowHeight,
                s = {
                  x: this.instance.scroll.x + this.windowMiddle.x,
                  y: this.instance.scroll.y + this.windowMiddle.y,
                };
              Object.entries(this.parallaxElements).forEach(function (o) {
                var a = w(o, 2),
                  l = (a[0], a[1]),
                  u = !1;
                if ((t && (u = 0), l.inView || i))
                  switch (l.position) {
                    case "top":
                      u = e.instance.scroll[e.directionAxis] * -l.speed;
                      break;
                    case "elementTop":
                      u = (n - l.top) * -l.speed;
                      break;
                    case "bottom":
                      u =
                        (e.instance.limit[e.directionAxis] -
                          n +
                          e.windowHeight) *
                        l.speed;
                      break;
                    case "left":
                      u = e.instance.scroll[e.directionAxis] * -l.speed;
                      break;
                    case "elementLeft":
                      u = (r - l.left) * -l.speed;
                      break;
                    case "right":
                      u =
                        (e.instance.limit[e.directionAxis] -
                          r +
                          e.windowHeight) *
                        l.speed;
                      break;
                    default:
                      u =
                        (s[e.directionAxis] - l.middle[e.directionAxis]) *
                        -l.speed;
                  }
                l.sticky &&
                  (u = l.inView
                    ? "horizontal" === e.direction
                      ? e.instance.scroll.x - l.left + window.innerWidth
                      : e.instance.scroll.y - l.top + window.innerHeight
                    : "horizontal" === e.direction
                    ? e.instance.scroll.x < l.left - window.innerWidth &&
                      e.instance.scroll.x < l.left - window.innerWidth / 2
                      ? 0
                      : e.instance.scroll.x > l.right &&
                        e.instance.scroll.x > l.right + 100 &&
                        l.right - l.left + window.innerWidth
                    : e.instance.scroll.y < l.top - window.innerHeight &&
                      e.instance.scroll.y < l.top - window.innerHeight / 2
                    ? 0
                    : e.instance.scroll.y > l.bottom &&
                      e.instance.scroll.y > l.bottom + 100 &&
                      l.bottom - l.top + window.innerHeight),
                  !1 !== u &&
                    ("horizontal" === l.direction ||
                    ("horizontal" === e.direction && "vertical" !== l.direction)
                      ? e.transform(l.el, u, 0, !t && l.delay)
                      : e.transform(l.el, 0, u, !t && l.delay));
              });
            },
          },
          {
            key: "scrollTo",
            value: function (t) {
              var e = this,
                i =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {},
                r = parseInt(i.offset) || 0,
                n = isNaN(parseInt(i.duration)) ? 1e3 : parseInt(i.duration),
                s = i.easing || [0.25, 0, 0.35, 1],
                o = !!i.disableLerp,
                a = !!i.callback && i.callback;
              if (((s = ut.apply(void 0, b(s))), "string" == typeof t)) {
                if ("top" === t) t = 0;
                else if ("bottom" === t) t = this.instance.limit.y;
                else if ("left" === t) t = 0;
                else if ("right" === t) t = this.instance.limit.x;
                else if (!(t = document.querySelector(t))) return;
              } else if ("number" == typeof t) t = parseInt(t);
              else if (!t || !t.tagName)
                return void console.warn("`target` parameter is not valid");
              if ("number" != typeof t) {
                var l = tt(t).includes(this.el);
                if (!l) return;
                var u = t.getBoundingClientRect(),
                  c = u.top,
                  h = u.left,
                  d = tt(t),
                  f = d.find(function (t) {
                    return Object.entries(e.sections)
                      .map(function (t) {
                        var e = w(t, 2);
                        e[0];
                        return e[1];
                      })
                      .find(function (e) {
                        return e.el == t;
                      });
                  }),
                  p = 0;
                (p = f
                  ? J(f)[this.directionAxis]
                  : -this.instance.scroll[this.directionAxis]),
                  (r = "horizontal" === this.direction ? h + r - p : c + r - p);
              } else r = t + r;
              var D = parseFloat(this.instance.delta[this.directionAxis]),
                g = Math.max(
                  0,
                  Math.min(r, this.instance.limit[this.directionAxis])
                ),
                m = g - D,
                v = function (t) {
                  o
                    ? "horizontal" === e.direction
                      ? e.setScroll(D + m * t, e.instance.delta.y)
                      : e.setScroll(e.instance.delta.x, D + m * t)
                    : (e.instance.delta[e.directionAxis] = D + m * t);
                };
              (this.animatingScroll = !0),
                this.stopScrolling(),
                this.startScrolling();
              var y = Date.now(),
                _ = function t() {
                  var i = (Date.now() - y) / n;
                  i > 1
                    ? (v(1),
                      (e.animatingScroll = !1),
                      0 == n && e.update(),
                      a && a())
                    : ((e.scrollToRaf = requestAnimationFrame(t)), v(s(i)));
                };
              _();
            },
          },
          {
            key: "update",
            value: function () {
              this.setScrollLimit(),
                this.addSections(),
                this.addElements(),
                this.detectElements(),
                this.updateScroll(),
                this.transformElements(!0),
                this.reinitScrollBar(),
                this.checkScroll(!0);
            },
          },
          {
            key: "startScroll",
            value: function () {
              this.stop = !1;
            },
          },
          {
            key: "stopScroll",
            value: function () {
              this.stop = !0;
            },
          },
          {
            key: "setScroll",
            value: function (t, e) {
              this.instance = f(
                f({}, this.instance),
                {},
                { scroll: { x: t, y: e }, delta: { x: t, y: e }, speed: 0 }
              );
            },
          },
          {
            key: "destroy",
            value: function () {
              _(D(i.prototype), "destroy", this).call(this),
                this.stopScrolling(),
                this.html.classList.remove(this.smoothClass),
                this.vs.destroy(),
                this.destroyScrollBar(),
                window.removeEventListener("keydown", this.checkKey, !1);
            },
          },
        ]),
        i
      );
    })(F),
    yt = (function () {
      function t() {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        l(this, t),
          (this.options = e),
          Object.assign(this, E, e),
          (this.smartphone = E.smartphone),
          e.smartphone && Object.assign(this.smartphone, e.smartphone),
          (this.tablet = E.tablet),
          e.tablet && Object.assign(this.tablet, e.tablet),
          this.smooth ||
            "horizontal" != this.direction ||
            console.warn(
              "🚨 `smooth:false` & `horizontal` direction are not yet compatible"
            ),
          this.tablet.smooth ||
            "horizontal" != this.tablet.direction ||
            console.warn(
              "🚨 `smooth:false` & `horizontal` direction are not yet compatible (tablet)"
            ),
          this.smartphone.smooth ||
            "horizontal" != this.smartphone.direction ||
            console.warn(
              "🚨 `smooth:false` & `horizontal` direction are not yet compatible (smartphone)"
            ),
          this.init();
      }
      return (
        c(t, [
          {
            key: "init",
            value: function () {
              if (
                ((this.options.isMobile =
                  /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                    navigator.userAgent
                  ) ||
                  ("MacIntel" === navigator.platform &&
                    navigator.maxTouchPoints > 1) ||
                  window.innerWidth < this.tablet.breakpoint),
                (this.options.isTablet =
                  this.options.isMobile &&
                  window.innerWidth >= this.tablet.breakpoint),
                (this.smooth && !this.options.isMobile) ||
                (this.tablet.smooth && this.options.isTablet) ||
                (this.smartphone.smooth &&
                  this.options.isMobile &&
                  !this.options.isTablet)
                  ? (this.scroll = new vt(this.options))
                  : (this.scroll = new k(this.options)),
                this.scroll.init(),
                window.location.hash)
              ) {
                var t = window.location.hash.slice(
                    1,
                    window.location.hash.length
                  ),
                  e = document.getElementById(t);
                e && this.scroll.scrollTo(e);
              }
            },
          },
          {
            key: "update",
            value: function () {
              this.scroll.update();
            },
          },
          {
            key: "start",
            value: function () {
              this.scroll.startScroll();
            },
          },
          {
            key: "stop",
            value: function () {
              this.scroll.stopScroll();
            },
          },
          {
            key: "scrollTo",
            value: function (t, e) {
              this.scroll.scrollTo(t, e);
            },
          },
          {
            key: "setScroll",
            value: function (t, e) {
              this.scroll.setScroll(t, e);
            },
          },
          {
            key: "on",
            value: function (t, e) {
              this.scroll.setEvents(t, e);
            },
          },
          {
            key: "off",
            value: function (t, e) {
              this.scroll.unsetEvents(t, e);
            },
          },
          {
            key: "destroy",
            value: function () {
              this.scroll.destroy();
            },
          },
        ]),
        t
      );
    })();
  const _t = new yt({
      el: document.querySelector("#js-scroll"),
      smooth: !0,
      lerp: 0.06,
    }),
    wt = {
      index: 0,
      first: !0,
      slider: document.querySelector("#js-slider"),
      prog: document.querySelector("#js-prog"),
      query: document.querySelectorAll("#js-slider > div"),
      count: document.querySelector("#js-count span"),
      back: document.querySelector("#js-back"),
      count_div: document.querySelector("#js-count"),
      send: document.querySelector("#js-submit"),
      skip: document.querySelector("#js-skip"),
      show: function (t) {
        t.classList.add("--visible"), t.classList.remove("--hidden");
      },
      hide: function (t) {
        t.classList.remove("--visible"),
          t.classList.add("--hidden"),
          setTimeout(() => {
            t.classList.remove("--hidden");
          }, 600);
      },
      next_query: function () {
        (this.slider.style.transform = `translateX(${-100 * this.index}%)`),
          setTimeout(() => {
            this.count.innerHTML = this.index - 1;
          }, 700),
          this.index >= 2 && this.index <= 7
            ? (this.back.style = "")
            : (this.back.style = "visibility: hidden; opacity: 0"),
          this.index >= 1 && this.index <= 7
            ? (this.count_div.style = "")
            : (this.count_div.style = "opacity: 0"),
          7 == this.index
            ? (this.send.style = "visibility: visible; opacity: 1")
            : (this.send.style = ""),
          6 == this.index
            ? (this.skip.style = "visibility: visible; opacity: 1")
            : (this.skip.style = ""),
          this.index >= 1 &&
            this.index <= 7 &&
            (this.prog.style.transform = `scaleX(${this.index / 7})`),
          0 != this.index
            ? this.hide(this.query[this.index - 1])
            : (this.slider.style.transform = `translateX(${
                -100 * this.index
              }%)`),
          setTimeout(() => {
            this.show(this.query[this.index - 1]);
          }, 900),
          this.index++;
      },
      prev_query: function () {
        this.index > 2 &&
          ((this.index -= 2),
          this.hide(this.query[this.index + 1]),
          this.next_query());
      },
      open: function () {
        document.querySelector("#js-overlay").classList.add("--visible"),
          document.querySelector("#js-contact").classList.add("--visible"),
          setTimeout(() => {
            this.show(this.query[this.index - 1]);
          }, 1200);
      },
      close: function () {
        setTimeout(() => {
          document.querySelector("#js-contact").classList.remove("--visible");
        }, 600),
          setTimeout(() => {
            document.querySelector("#js-overlay").classList.remove("--visible");
          }, 1200),
          this.hide(this.query[this.index - 1]);
      },
    };
  function bt() {}
  bt.prototype = {
    on: function (t, e, i) {
      var r = this.e || (this.e = {});
      return (r[t] || (r[t] = [])).push({ fn: e, ctx: i }), this;
    },
    once: function (t, e, i) {
      var r = this;
      function n() {
        r.off(t, n), e.apply(i, arguments);
      }
      return (n._ = e), this.on(t, n, i);
    },
    emit: function (t) {
      for (
        var e = [].slice.call(arguments, 1),
          i = ((this.e || (this.e = {}))[t] || []).slice(),
          r = 0,
          n = i.length;
        r < n;
        r++
      )
        i[r].fn.apply(i[r].ctx, e);
      return this;
    },
    off: function (t, e) {
      var i = this.e || (this.e = {}),
        r = i[t],
        n = [];
      if (r && e)
        for (var s = 0, o = r.length; s < o; s++)
          r[s].fn !== e && r[s].fn._ !== e && n.push(r[s]);
      return n.length ? (i[t] = n) : delete i[t], this;
    },
  };
  var xt = bt;
  xt.TinyEmitter = bt;
  var Ct = function (t) {
    (this.wrap = document.querySelector("[data-router-wrapper]")),
      (this.properties = t),
      (this.Transition = t.transition
        ? new t.transition.class(this.wrap, t.transition.name)
        : null);
  };
  (Ct.prototype.setup = function () {
    this.onEnter && this.onEnter(),
      this.onEnterCompleted && this.onEnterCompleted();
  }),
    (Ct.prototype.add = function () {
      this.wrap.insertAdjacentHTML("beforeend", this.properties.view.outerHTML);
    }),
    (Ct.prototype.update = function () {
      document.title = this.properties.page.title;
    }),
    (Ct.prototype.show = function (t) {
      var e = this;
      return new Promise(function (i) {
        try {
          function r(t) {
            e.onEnterCompleted && e.onEnterCompleted(), i();
          }
          return (
            e.update(),
            e.onEnter && e.onEnter(),
            Promise.resolve(
              e.Transition ? Promise.resolve(e.Transition.show(t)).then(r) : r()
            )
          );
        } catch (t) {
          return Promise.reject(t);
        }
      });
    }),
    (Ct.prototype.hide = function (t) {
      var e = this;
      return new Promise(function (i) {
        try {
          function r(t) {
            e.onLeaveCompleted && e.onLeaveCompleted(), i();
          }
          return (
            e.onLeave && e.onLeave(),
            Promise.resolve(
              e.Transition ? Promise.resolve(e.Transition.hide(t)).then(r) : r()
            )
          );
        } catch (t) {
          return Promise.reject(t);
        }
      });
    });
  var Et = new window.DOMParser(),
    Ft = function (t, e) {
      (this.renderers = t), (this.transitions = e);
    };
  (Ft.prototype.getOrigin = function (t) {
    var e = t.match(/(https?:\/\/[\w\-.]+)/);
    return e ? e[1].replace(/https?:\/\//, "") : null;
  }),
    (Ft.prototype.getPathname = function (t) {
      var e = t.match(/https?:\/\/.*?(\/[\w_\-./]+)/);
      return e ? e[1] : "/";
    }),
    (Ft.prototype.getAnchor = function (t) {
      var e = t.match(/(#.*)$/);
      return e ? e[1] : null;
    }),
    (Ft.prototype.getParams = function (t) {
      var e = t.match(/\?([\w_\-.=&]+)/);
      if (!e) return null;
      for (var i = e[1].split("&"), r = {}, n = 0; n < i.length; n++) {
        var s = i[n].split("=");
        r[s[0]] = s[1];
      }
      return r;
    }),
    (Ft.prototype.getDOM = function (t) {
      return "string" == typeof t ? Et.parseFromString(t, "text/html") : t;
    }),
    (Ft.prototype.getView = function (t) {
      return t.querySelector("[data-router-view]");
    }),
    (Ft.prototype.getSlug = function (t) {
      return t.getAttribute("data-router-view");
    }),
    (Ft.prototype.getRenderer = function (t) {
      if (!this.renderers) return Promise.resolve(Ct);
      if (t in this.renderers) {
        var e = this.renderers[t];
        return "function" != typeof e || Ct.isPrototypeOf(e)
          ? "function" == typeof e.then
            ? Promise.resolve(e).then(function (t) {
                return t.default;
              })
            : Promise.resolve(e)
          : Promise.resolve(e()).then(function (t) {
              return t.default;
            });
      }
      return Promise.resolve(Ct);
    }),
    (Ft.prototype.getTransition = function (t) {
      return this.transitions
        ? t in this.transitions
          ? { class: this.transitions[t], name: t }
          : "default" in this.transitions
          ? { class: this.transitions.default, name: "default" }
          : null
        : null;
    }),
    (Ft.prototype.getProperties = function (t) {
      var e = this.getDOM(t),
        i = this.getView(e),
        r = this.getSlug(i);
      return {
        page: e,
        view: i,
        slug: r,
        renderer: this.getRenderer(r, this.renderers),
        transition: this.getTransition(r, this.transitions),
      };
    }),
    (Ft.prototype.getLocation = function (t) {
      return {
        href: t,
        anchor: this.getAnchor(t),
        origin: this.getOrigin(t),
        params: this.getParams(t),
        pathname: this.getPathname(t),
      };
    });
  var Tt = (function (t) {
      function e(e) {
        var i = this;
        void 0 === e && (e = {});
        var r = e.renderers,
          n = e.transitions;
        t.call(this),
          (this.Helpers = new Ft(r, n)),
          (this.Transitions = n),
          (this.Contextual = !1),
          (this.location = this.Helpers.getLocation(window.location.href)),
          (this.properties = this.Helpers.getProperties(
            document.cloneNode(!0)
          )),
          (this.popping = !1),
          (this.running = !1),
          (this.trigger = null),
          (this.cache = new Map()),
          this.cache.set(this.location.href, this.properties),
          this.properties.renderer.then(function (t) {
            (i.From = new t(i.properties)), i.From.setup();
          }),
          (this._navigate = this.navigate.bind(this)),
          window.addEventListener("popstate", this.popState.bind(this)),
          (this.links = document.querySelectorAll(
            "a:not([target]):not([data-router-disabled])"
          )),
          this.attach(this.links);
      }
      return (
        t && (e.__proto__ = t),
        ((e.prototype = Object.create(t && t.prototype)).constructor = e),
        (e.prototype.attach = function (t) {
          for (var e = 0, i = t; e < i.length; e += 1)
            i[e].addEventListener("click", this._navigate);
        }),
        (e.prototype.detach = function (t) {
          for (var e = 0, i = t; e < i.length; e += 1)
            i[e].removeEventListener("click", this._navigate);
        }),
        (e.prototype.navigate = function (t) {
          if (!t.metaKey && !t.ctrlKey) {
            t.preventDefault();
            var e =
              !!t.currentTarget.hasAttribute("data-transition") &&
              t.currentTarget.dataset.transition;
            this.redirect(t.currentTarget.href, e, t.currentTarget);
          }
        }),
        (e.prototype.redirect = function (t, e, i) {
          if (
            (void 0 === e && (e = !1),
            void 0 === i && (i = "script"),
            (this.trigger = i),
            !this.running && t !== this.location.href)
          ) {
            var r = this.Helpers.getLocation(t);
            (this.Contextual = !1),
              e &&
                ((this.Contextual = this.Transitions[e].prototype),
                (this.Contextual.name = e)),
              r.origin !== this.location.origin ||
              (r.anchor && r.pathname === this.location.pathname)
                ? (window.location.href = t)
                : ((this.location = r), this.beforeFetch());
          }
        }),
        (e.prototype.popState = function () {
          (this.trigger = "popstate"), (this.Contextual = !1);
          var t = this.Helpers.getLocation(window.location.href);
          this.location.pathname !== t.pathname ||
          (!this.location.anchor && !t.anchor)
            ? ((this.popping = !0), (this.location = t), this.beforeFetch())
            : (this.location = t);
        }),
        (e.prototype.pushState = function () {
          this.popping ||
            window.history.pushState(this.location, "", this.location.href);
        }),
        (e.prototype.fetch = function () {
          try {
            var t = this;
            return Promise.resolve(
              fetch(t.location.href, {
                mode: "same-origin",
                method: "GET",
                headers: { "X-Requested-With": "Highway" },
                credentials: "same-origin",
              })
            ).then(function (e) {
              if (e.status >= 200 && e.status < 300) return e.text();
              window.location.href = t.location.href;
            });
          } catch (t) {
            return Promise.reject(t);
          }
        }),
        (e.prototype.beforeFetch = function () {
          try {
            var t = this;
            function e() {
              t.afterFetch();
            }
            t.pushState(),
              (t.running = !0),
              t.emit("NAVIGATE_OUT", {
                from: {
                  page: t.From.properties.page,
                  view: t.From.properties.view,
                },
                trigger: t.trigger,
                location: t.location,
              });
            var i = { trigger: t.trigger, contextual: t.Contextual },
              r = t.cache.has(t.location.href)
                ? Promise.resolve(t.From.hide(i)).then(function () {
                    t.properties = t.cache.get(t.location.href);
                  })
                : Promise.resolve(
                    Promise.all([t.fetch(), t.From.hide(i)])
                  ).then(function (e) {
                    (t.properties = t.Helpers.getProperties(e[0])),
                      t.cache.set(t.location.href, t.properties);
                  });
            return Promise.resolve(r && r.then ? r.then(e) : e());
          } catch (t) {
            return Promise.reject(t);
          }
        }),
        (e.prototype.afterFetch = function () {
          try {
            var t = this;
            return Promise.resolve(t.properties.renderer).then(function (e) {
              return (
                (t.To = new e(t.properties)),
                t.To.add(),
                t.emit("NAVIGATE_IN", {
                  to: {
                    page: t.To.properties.page,
                    view: t.To.wrap.lastElementChild,
                  },
                  trigger: t.trigger,
                  location: t.location,
                }),
                Promise.resolve(
                  t.To.show({ trigger: t.trigger, contextual: t.Contextual })
                ).then(function () {
                  (t.popping = !1),
                    (t.running = !1),
                    t.detach(t.links),
                    (t.links = document.querySelectorAll(
                      "a:not([target]):not([data-router-disabled])"
                    )),
                    t.attach(t.links),
                    t.emit("NAVIGATE_END", {
                      to: {
                        page: t.To.properties.page,
                        view: t.To.wrap.lastElementChild,
                      },
                      from: {
                        page: t.From.properties.page,
                        view: t.From.properties.view,
                      },
                      trigger: t.trigger,
                      location: t.location,
                    }),
                    (t.From = t.To),
                    (t.trigger = null);
                })
              );
            });
          } catch (t) {
            return Promise.reject(t);
          }
        }),
        e
      );
    })(xt),
    St = function (t, e) {
      (this.wrap = t), (this.name = e);
    };
  (St.prototype.show = function (t) {
    var e = this,
      i = t.trigger,
      r = t.contextual,
      n = this.wrap.lastElementChild,
      s = this.wrap.firstElementChild;
    return new Promise(function (t) {
      r
        ? (n.setAttribute("data-transition-in", r.name),
          n.removeAttribute("data-transition-out", r.name),
          r.in && r.in({ to: n, from: s, trigger: i, done: t }))
        : (n.setAttribute("data-transition-in", e.name),
          n.removeAttribute("data-transition-out", e.name),
          e.in && e.in({ to: n, from: s, trigger: i, done: t }));
    });
  }),
    (St.prototype.hide = function (t) {
      var e = this,
        i = t.trigger,
        r = t.contextual,
        n = this.wrap.firstElementChild;
      return new Promise(function (t) {
        r
          ? (n.setAttribute("data-transition-out", r.name),
            n.removeAttribute("data-transition-in", r.name),
            r.out && r.out({ from: n, trigger: i, done: t }))
          : (n.setAttribute("data-transition-out", e.name),
            n.removeAttribute("data-transition-in", e.name),
            e.out && e.out({ from: n, trigger: i, done: t }));
      });
    }),
    console.log("Highway v2.2.0");
  var At = { Core: Tt, Helpers: Ft, Renderer: Ct, Transition: St };
  function kt(t) {
    if (void 0 === t)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return t;
  }
  function Ot(t, e) {
    (t.prototype = Object.create(e.prototype)),
      (t.prototype.constructor = t),
      (t.__proto__ = e);
  }
  /*!
   * GSAP 3.6.1
   * https://greensock.com
   *
   * @license Copyright 2008-2021, GreenSock. All rights reserved.
   * Subject to the terms at https://greensock.com/standard-license or for
   * Club GreenSock members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
   */ var Mt,
    Bt,
    Lt,
    Pt,
    Rt,
    jt,
    qt,
    zt,
    It,
    Ht,
    Vt,
    Wt,
    Nt,
    Yt,
    Xt,
    Gt,
    Ut,
    Kt,
    $t,
    Qt,
    Zt,
    Jt,
    te,
    ee,
    ie,
    re,
    ne,
    se,
    oe = {
      autoSleep: 120,
      force3D: "auto",
      nullTargetWarn: 1,
      units: { lineHeight: "" },
    },
    ae = { duration: 0.5, overwrite: !1, delay: 0 },
    le = 1e8,
    ue = 1e-8,
    ce = 2 * Math.PI,
    he = ce / 4,
    de = 0,
    fe = Math.sqrt,
    pe = Math.cos,
    De = Math.sin,
    ge = function (t) {
      return "string" == typeof t;
    },
    me = function (t) {
      return "function" == typeof t;
    },
    ve = function (t) {
      return "number" == typeof t;
    },
    ye = function (t) {
      return void 0 === t;
    },
    _e = function (t) {
      return "object" == typeof t;
    },
    we = function (t) {
      return !1 !== t;
    },
    be = function () {
      return "undefined" != typeof window;
    },
    xe = function (t) {
      return me(t) || ge(t);
    },
    Ce =
      ("function" == typeof ArrayBuffer && ArrayBuffer.isView) ||
      function () {},
    Ee = Array.isArray,
    Fe = /(?:-?\.?\d|\.)+/gi,
    Te = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
    Se = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
    Ae = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
    ke = /[+-]=-?[.\d]+/,
    Oe = /[#\-+.]*\b[a-z\d-=+%.]+/gi,
    Me = /[\d.+\-=]+(?:e[-+]\d*)*/i,
    Be = {},
    Le = {},
    Pe = function (t) {
      return (Le = ai(t, Be)) && Yr;
    },
    Re = function (t, e) {
      return console.warn(
        "Invalid property",
        t,
        "set to",
        e,
        "Missing plugin? gsap.registerPlugin()"
      );
    },
    je = function (t, e) {
      return !e && console.warn(t);
    },
    qe = function (t, e) {
      return (t && (Be[t] = e) && Le && (Le[t] = e)) || Be;
    },
    ze = function () {
      return 0;
    },
    Ie = {},
    He = [],
    Ve = {},
    We = {},
    Ne = {},
    Ye = 30,
    Xe = [],
    Ge = "",
    Ue = function (t) {
      var e,
        i,
        r = t[0];
      if ((_e(r) || me(r) || (t = [t]), !(e = (r._gsap || {}).harness))) {
        for (i = Xe.length; i-- && !Xe[i].targetTest(r); );
        e = Xe[i];
      }
      for (i = t.length; i--; )
        (t[i] && (t[i]._gsap || (t[i]._gsap = new gr(t[i], e)))) ||
          t.splice(i, 1);
      return t;
    },
    Ke = function (t) {
      return t._gsap || Ue(Pi(t))[0]._gsap;
    },
    $e = function (t, e, i) {
      return (i = t[e]) && me(i)
        ? t[e]()
        : (ye(i) && t.getAttribute && t.getAttribute(e)) || i;
    },
    Qe = function (t, e) {
      return (t = t.split(",")).forEach(e) || t;
    },
    Ze = function (t) {
      return Math.round(1e5 * t) / 1e5 || 0;
    },
    Je = function (t, e) {
      for (var i = e.length, r = 0; t.indexOf(e[r]) < 0 && ++r < i; );
      return r < i;
    },
    ti = function (t, e, i) {
      var r,
        n = ve(t[1]),
        s = (n ? 2 : 1) + (e < 2 ? 0 : 1),
        o = t[s];
      if ((n && (o.duration = t[1]), (o.parent = i), e)) {
        for (r = o; i && !("immediateRender" in r); )
          (r = i.vars.defaults || {}), (i = we(i.vars.inherit) && i.parent);
        (o.immediateRender = we(r.immediateRender)),
          e < 2 ? (o.runBackwards = 1) : (o.startAt = t[s - 1]);
      }
      return o;
    },
    ei = function () {
      var t,
        e,
        i = He.length,
        r = He.slice(0);
      for (Ve = {}, He.length = 0, t = 0; t < i; t++)
        (e = r[t]) &&
          e._lazy &&
          (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0);
    },
    ii = function (t, e, i, r) {
      He.length && ei(), t.render(e, i, r), He.length && ei();
    },
    ri = function (t) {
      var e = parseFloat(t);
      return (e || 0 === e) && (t + "").match(Oe).length < 2
        ? e
        : ge(t)
        ? t.trim()
        : t;
    },
    ni = function (t) {
      return t;
    },
    si = function (t, e) {
      for (var i in e) i in t || (t[i] = e[i]);
      return t;
    },
    oi = function (t, e) {
      for (var i in e)
        i in t || "duration" === i || "ease" === i || (t[i] = e[i]);
    },
    ai = function (t, e) {
      for (var i in e) t[i] = e[i];
      return t;
    },
    li = function t(e, i) {
      for (var r in i)
        "__proto__" !== r &&
          "constructor" !== r &&
          "prototype" !== r &&
          (e[r] = _e(i[r]) ? t(e[r] || (e[r] = {}), i[r]) : i[r]);
      return e;
    },
    ui = function (t, e) {
      var i,
        r = {};
      for (i in t) i in e || (r[i] = t[i]);
      return r;
    },
    ci = function (t) {
      var e = t.parent || Bt,
        i = t.keyframes ? oi : si;
      if (we(t.inherit))
        for (; e; ) i(t, e.vars.defaults), (e = e.parent || e._dp);
      return t;
    },
    hi = function (t, e, i, r) {
      void 0 === i && (i = "_first"), void 0 === r && (r = "_last");
      var n = e._prev,
        s = e._next;
      n ? (n._next = s) : t[i] === e && (t[i] = s),
        s ? (s._prev = n) : t[r] === e && (t[r] = n),
        (e._next = e._prev = e.parent = null);
    },
    di = function (t, e) {
      t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove(t),
        (t._act = 0);
    },
    fi = function (t, e) {
      if (t && (!e || e._end > t._dur || e._start < 0))
        for (var i = t; i; ) (i._dirty = 1), (i = i.parent);
      return t;
    },
    pi = function (t) {
      for (var e = t.parent; e && e.parent; )
        (e._dirty = 1), e.totalDuration(), (e = e.parent);
      return t;
    },
    Di = function t(e) {
      return !e || (e._ts && t(e.parent));
    },
    gi = function (t) {
      return t._repeat ? mi(t._tTime, (t = t.duration() + t._rDelay)) * t : 0;
    },
    mi = function (t, e) {
      var i = Math.floor((t /= e));
      return t && i === t ? i - 1 : i;
    },
    vi = function (t, e) {
      return (
        (t - e._start) * e._ts +
        (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur)
      );
    },
    yi = function (t) {
      return (t._end = Ze(
        t._start + (t._tDur / Math.abs(t._ts || t._rts || ue) || 0)
      ));
    },
    _i = function (t, e) {
      var i = t._dp;
      return (
        i &&
          i.smoothChildTiming &&
          t._ts &&
          ((t._start = Ze(
            i._time -
              (t._ts > 0
                ? e / t._ts
                : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)
          )),
          yi(t),
          i._dirty || fi(i, t)),
        t
      );
    },
    wi = function (t, e) {
      var i;
      if (
        ((e._time || (e._initted && !e._dur)) &&
          ((i = vi(t.rawTime(), e)),
          (!e._dur || Oi(0, e.totalDuration(), i) - e._tTime > ue) &&
            e.render(i, !0)),
        fi(t, e)._dp && t._initted && t._time >= t._dur && t._ts)
      ) {
        if (t._dur < t.duration())
          for (i = t; i._dp; )
            i.rawTime() >= 0 && i.totalTime(i._tTime), (i = i._dp);
        t._zTime = -1e-8;
      }
    },
    bi = function (t, e, i, r) {
      return (
        e.parent && di(e),
        (e._start = Ze(i + e._delay)),
        (e._end = Ze(
          e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)
        )),
        (function (t, e, i, r, n) {
          void 0 === i && (i = "_first"), void 0 === r && (r = "_last");
          var s,
            o = t[r];
          if (n) for (s = e[n]; o && o[n] > s; ) o = o._prev;
          o
            ? ((e._next = o._next), (o._next = e))
            : ((e._next = t[i]), (t[i] = e)),
            e._next ? (e._next._prev = e) : (t[r] = e),
            (e._prev = o),
            (e.parent = e._dp = t);
        })(t, e, "_first", "_last", t._sort ? "_start" : 0),
        (t._recent = e),
        r || wi(t, e),
        t
      );
    },
    xi = function (t, e) {
      return (
        (Be.ScrollTrigger || Re("scrollTrigger", e)) &&
        Be.ScrollTrigger.create(e, t)
      );
    },
    Ci = function (t, e, i, r) {
      return (
        xr(t, e),
        t._initted
          ? !i &&
            t._pt &&
            ((t._dur && !1 !== t.vars.lazy) || (!t._dur && t.vars.lazy)) &&
            qt !== rr.frame
            ? (He.push(t), (t._lazy = [e, r]), 1)
            : void 0
          : 1
      );
    },
    Ei = function t(e) {
      var i = e.parent;
      return i && i._ts && i._initted && !i._lock && (i.rawTime() < 0 || t(i));
    },
    Fi = function (t, e, i, r) {
      var n = t._repeat,
        s = Ze(e) || 0,
        o = t._tTime / t._tDur;
      return (
        o && !r && (t._time *= s / t._dur),
        (t._dur = s),
        (t._tDur = n ? (n < 0 ? 1e10 : Ze(s * (n + 1) + t._rDelay * n)) : s),
        o && !r ? _i(t, (t._tTime = t._tDur * o)) : t.parent && yi(t),
        i || fi(t.parent, t),
        t
      );
    },
    Ti = function (t) {
      return t instanceof vr ? fi(t) : Fi(t, t._dur);
    },
    Si = { _start: 0, endTime: ze },
    Ai = function t(e, i) {
      var r,
        n,
        s = e.labels,
        o = e._recent || Si,
        a = e.duration() >= le ? o.endTime(!1) : e._dur;
      return ge(i) && (isNaN(i) || i in s)
        ? "<" === (r = i.charAt(0)) || ">" === r
          ? ("<" === r ? o._start : o.endTime(o._repeat >= 0)) +
            (parseFloat(i.substr(1)) || 0)
          : (r = i.indexOf("=")) < 0
          ? (i in s || (s[i] = a), s[i])
          : ((n = +(i.charAt(r - 1) + i.substr(r + 1))),
            r > 1 ? t(e, i.substr(0, r - 1)) + n : a + n)
        : null == i
        ? a
        : +i;
    },
    ki = function (t, e) {
      return t || 0 === t ? e(t) : e;
    },
    Oi = function (t, e, i) {
      return i < t ? t : i > e ? e : i;
    },
    Mi = function (t) {
      if ("string" != typeof t) return "";
      var e = Me.exec(t);
      return e ? t.substr(e.index + e[0].length) : "";
    },
    Bi = [].slice,
    Li = function (t, e) {
      return (
        t &&
        _e(t) &&
        "length" in t &&
        ((!e && !t.length) || (t.length - 1 in t && _e(t[0]))) &&
        !t.nodeType &&
        t !== Lt
      );
    },
    Pi = function (t, e) {
      return !ge(t) || e || (!Pt && nr())
        ? Ee(t)
          ? (function (t, e, i) {
              return (
                void 0 === i && (i = []),
                t.forEach(function (t) {
                  var r;
                  return (ge(t) && !e) || Li(t, 1)
                    ? (r = i).push.apply(r, Pi(t))
                    : i.push(t);
                }) || i
              );
            })(t, e)
          : Li(t)
          ? Bi.call(t, 0)
          : t
          ? [t]
          : []
        : Bi.call(Rt.querySelectorAll(t), 0);
    },
    Ri = function (t) {
      return t.sort(function () {
        return 0.5 - Math.random();
      });
    },
    ji = function (t) {
      if (me(t)) return t;
      var e = _e(t) ? t : { each: t },
        i = hr(e.ease),
        r = e.from || 0,
        n = parseFloat(e.base) || 0,
        s = {},
        o = r > 0 && r < 1,
        a = isNaN(r) || o,
        l = e.axis,
        u = r,
        c = r;
      return (
        ge(r)
          ? (u = c = { center: 0.5, edges: 0.5, end: 1 }[r] || 0)
          : !o && a && ((u = r[0]), (c = r[1])),
        function (t, o, h) {
          var d,
            f,
            p,
            D,
            g,
            m,
            v,
            y,
            _,
            w = (h || e).length,
            b = s[w];
          if (!b) {
            if (!(_ = "auto" === e.grid ? 0 : (e.grid || [1, le])[1])) {
              for (
                v = -1e8;
                v < (v = h[_++].getBoundingClientRect().left) && _ < w;

              );
              _--;
            }
            for (
              b = s[w] = [],
                d = a ? Math.min(_, w) * u - 0.5 : r % _,
                f = a ? (w * c) / _ - 0.5 : (r / _) | 0,
                v = 0,
                y = le,
                m = 0;
              m < w;
              m++
            )
              (p = (m % _) - d),
                (D = f - ((m / _) | 0)),
                (b[m] = g =
                  l ? Math.abs("y" === l ? D : p) : fe(p * p + D * D)),
                g > v && (v = g),
                g < y && (y = g);
            "random" === r && Ri(b),
              (b.max = v - y),
              (b.min = y),
              (b.v = w =
                (parseFloat(e.amount) ||
                  parseFloat(e.each) *
                    (_ > w
                      ? w - 1
                      : l
                      ? "y" === l
                        ? w / _
                        : _
                      : Math.max(_, w / _)) ||
                  0) * ("edges" === r ? -1 : 1)),
              (b.b = w < 0 ? n - w : n),
              (b.u = Mi(e.amount || e.each) || 0),
              (i = i && w < 0 ? ur(i) : i);
          }
          return (
            (w = (b[t] - b.min) / b.max || 0),
            Ze(b.b + (i ? i(w) : w) * b.v) + b.u
          );
        }
      );
    },
    qi = function (t) {
      var e = t < 1 ? Math.pow(10, (t + "").length - 2) : 1;
      return function (i) {
        var r = Math.round(parseFloat(i) / t) * t * e;
        return (r - (r % 1)) / e + (ve(i) ? 0 : Mi(i));
      };
    },
    zi = function (t, e) {
      var i,
        r,
        n = Ee(t);
      return (
        !n &&
          _e(t) &&
          ((i = n = t.radius || le),
          t.values
            ? ((t = Pi(t.values)), (r = !ve(t[0])) && (i *= i))
            : (t = qi(t.increment))),
        ki(
          e,
          n
            ? me(t)
              ? function (e) {
                  return (r = t(e)), Math.abs(r - e) <= i ? r : e;
                }
              : function (e) {
                  for (
                    var n,
                      s,
                      o = parseFloat(r ? e.x : e),
                      a = parseFloat(r ? e.y : 0),
                      l = le,
                      u = 0,
                      c = t.length;
                    c--;

                  )
                    (n = r
                      ? (n = t[c].x - o) * n + (s = t[c].y - a) * s
                      : Math.abs(t[c] - o)) < l && ((l = n), (u = c));
                  return (
                    (u = !i || l <= i ? t[u] : e),
                    r || u === e || ve(e) ? u : u + Mi(e)
                  );
                }
            : qi(t)
        )
      );
    },
    Ii = function (t, e, i, r) {
      return ki(Ee(t) ? !e : !0 === i ? !!(i = 0) : !r, function () {
        return Ee(t)
          ? t[~~(Math.random() * t.length)]
          : (i = i || 1e-5) &&
              (r = i < 1 ? Math.pow(10, (i + "").length - 2) : 1) &&
              Math.floor(
                Math.round(
                  (t - i / 2 + Math.random() * (e - t + 0.99 * i)) / i
                ) *
                  i *
                  r
              ) / r;
      });
    },
    Hi = function (t, e, i) {
      return ki(i, function (i) {
        return t[~~e(i)];
      });
    },
    Vi = function (t) {
      for (var e, i, r, n, s = 0, o = ""; ~(e = t.indexOf("random(", s)); )
        (r = t.indexOf(")", e)),
          (n = "[" === t.charAt(e + 7)),
          (i = t.substr(e + 7, r - e - 7).match(n ? Oe : Fe)),
          (o +=
            t.substr(s, e - s) +
            Ii(n ? i : +i[0], n ? 0 : +i[1], +i[2] || 1e-5)),
          (s = r + 1);
      return o + t.substr(s, t.length - s);
    },
    Wi = function (t, e, i, r, n) {
      var s = e - t,
        o = r - i;
      return ki(n, function (e) {
        return i + (((e - t) / s) * o || 0);
      });
    },
    Ni = function (t, e, i) {
      var r,
        n,
        s,
        o = t.labels,
        a = le;
      for (r in o)
        (n = o[r] - e) < 0 == !!i &&
          n &&
          a > (n = Math.abs(n)) &&
          ((s = r), (a = n));
      return s;
    },
    Yi = function (t, e, i) {
      var r,
        n,
        s = t.vars,
        o = s[e];
      if (o)
        return (
          (r = s[e + "Params"]),
          (n = s.callbackScope || t),
          i && He.length && ei(),
          r ? o.apply(n, r) : o.call(n)
        );
    },
    Xi = function (t) {
      return (
        di(t),
        t.scrollTrigger && t.scrollTrigger.kill(!1),
        t.progress() < 1 && Yi(t, "onInterrupt"),
        t
      );
    },
    Gi = function (t) {
      var e = (t = (!t.name && t.default) || t).name,
        i = me(t),
        r =
          e && !i && t.init
            ? function () {
                this._props = [];
              }
            : t,
        n = {
          init: ze,
          render: Rr,
          add: wr,
          kill: qr,
          modifier: jr,
          rawVars: 0,
        },
        s = { targetTest: 0, get: 0, getSetter: Mr, aliases: {}, register: 0 };
      if ((nr(), t !== r)) {
        if (We[e]) return;
        si(r, si(ui(t, n), s)),
          ai(r.prototype, ai(n, ui(t, s))),
          (We[(r.prop = e)] = r),
          t.targetTest && (Xe.push(r), (Ie[e] = 1)),
          (e =
            ("css" === e ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) +
            "Plugin");
      }
      qe(e, r), t.register && t.register(Yr, r, Hr);
    },
    Ui = 255,
    Ki = {
      aqua: [0, Ui, Ui],
      lime: [0, Ui, 0],
      silver: [192, 192, 192],
      black: [0, 0, 0],
      maroon: [128, 0, 0],
      teal: [0, 128, 128],
      blue: [0, 0, Ui],
      navy: [0, 0, 128],
      white: [Ui, Ui, Ui],
      olive: [128, 128, 0],
      yellow: [Ui, Ui, 0],
      orange: [Ui, 165, 0],
      gray: [128, 128, 128],
      purple: [128, 0, 128],
      green: [0, 128, 0],
      red: [Ui, 0, 0],
      pink: [Ui, 192, 203],
      cyan: [0, Ui, Ui],
      transparent: [Ui, Ui, Ui, 0],
    },
    $i = function (t, e, i) {
      return (
        ((6 * (t = t < 0 ? t + 1 : t > 1 ? t - 1 : t) < 1
          ? e + (i - e) * t * 6
          : t < 0.5
          ? i
          : 3 * t < 2
          ? e + (i - e) * (2 / 3 - t) * 6
          : e) *
          Ui +
          0.5) |
        0
      );
    },
    Qi = function (t, e, i) {
      var r,
        n,
        s,
        o,
        a,
        l,
        u,
        c,
        h,
        d,
        f = t ? (ve(t) ? [t >> 16, (t >> 8) & Ui, t & Ui] : 0) : Ki.black;
      if (!f) {
        if (("," === t.substr(-1) && (t = t.substr(0, t.length - 1)), Ki[t]))
          f = Ki[t];
        else if ("#" === t.charAt(0)) {
          if (
            (t.length < 6 &&
              ((r = t.charAt(1)),
              (n = t.charAt(2)),
              (s = t.charAt(3)),
              (t =
                "#" +
                r +
                r +
                n +
                n +
                s +
                s +
                (5 === t.length ? t.charAt(4) + t.charAt(4) : ""))),
            9 === t.length)
          )
            return [
              (f = parseInt(t.substr(1, 6), 16)) >> 16,
              (f >> 8) & Ui,
              f & Ui,
              parseInt(t.substr(7), 16) / 255,
            ];
          f = [(t = parseInt(t.substr(1), 16)) >> 16, (t >> 8) & Ui, t & Ui];
        } else if ("hsl" === t.substr(0, 3))
          if (((f = d = t.match(Fe)), e)) {
            if (~t.indexOf("="))
              return (f = t.match(Te)), i && f.length < 4 && (f[3] = 1), f;
          } else
            (o = (+f[0] % 360) / 360),
              (a = +f[1] / 100),
              (r =
                2 * (l = +f[2] / 100) -
                (n = l <= 0.5 ? l * (a + 1) : l + a - l * a)),
              f.length > 3 && (f[3] *= 1),
              (f[0] = $i(o + 1 / 3, r, n)),
              (f[1] = $i(o, r, n)),
              (f[2] = $i(o - 1 / 3, r, n));
        else f = t.match(Fe) || Ki.transparent;
        f = f.map(Number);
      }
      return (
        e &&
          !d &&
          ((r = f[0] / Ui),
          (n = f[1] / Ui),
          (s = f[2] / Ui),
          (l = ((u = Math.max(r, n, s)) + (c = Math.min(r, n, s))) / 2),
          u === c
            ? (o = a = 0)
            : ((h = u - c),
              (a = l > 0.5 ? h / (2 - u - c) : h / (u + c)),
              (o =
                u === r
                  ? (n - s) / h + (n < s ? 6 : 0)
                  : u === n
                  ? (s - r) / h + 2
                  : (r - n) / h + 4),
              (o *= 60)),
          (f[0] = ~~(o + 0.5)),
          (f[1] = ~~(100 * a + 0.5)),
          (f[2] = ~~(100 * l + 0.5))),
        i && f.length < 4 && (f[3] = 1),
        f
      );
    },
    Zi = function (t) {
      var e = [],
        i = [],
        r = -1;
      return (
        t.split(tr).forEach(function (t) {
          var n = t.match(Se) || [];
          e.push.apply(e, n), i.push((r += n.length + 1));
        }),
        (e.c = i),
        e
      );
    },
    Ji = function (t, e, i) {
      var r,
        n,
        s,
        o,
        a = "",
        l = (t + a).match(tr),
        u = e ? "hsla(" : "rgba(",
        c = 0;
      if (!l) return t;
      if (
        ((l = l.map(function (t) {
          return (
            (t = Qi(t, e, 1)) &&
            u +
              (e
                ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3]
                : t.join(",")) +
              ")"
          );
        })),
        i && ((s = Zi(t)), (r = i.c).join(a) !== s.c.join(a)))
      )
        for (o = (n = t.replace(tr, "1").split(Se)).length - 1; c < o; c++)
          a +=
            n[c] +
            (~r.indexOf(c)
              ? l.shift() || u + "0,0,0,0)"
              : (s.length ? s : l.length ? l : i).shift());
      if (!n)
        for (o = (n = t.split(tr)).length - 1; c < o; c++) a += n[c] + l[c];
      return a + n[o];
    },
    tr = (function () {
      var t,
        e =
          "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
      for (t in Ki) e += "|" + t + "\\b";
      return new RegExp(e + ")", "gi");
    })(),
    er = /hsl[a]?\(/,
    ir = function (t) {
      var e,
        i = t.join(" ");
      if (((tr.lastIndex = 0), tr.test(i)))
        return (
          (e = er.test(i)),
          (t[1] = Ji(t[1], e)),
          (t[0] = Ji(t[0], e, Zi(t[1]))),
          !0
        );
    },
    rr =
      ((Gt = Date.now),
      (Ut = 500),
      (Kt = 33),
      ($t = Gt()),
      (Qt = $t),
      (Jt = Zt = 1e3 / 240),
      (ee = function t(e) {
        var i,
          r,
          n,
          s,
          o = Gt() - Qt,
          a = !0 === e;
        if (
          (o > Ut && ($t += o - Kt),
          ((i = (n = (Qt += o) - $t) - Jt) > 0 || a) &&
            ((s = ++Nt.frame),
            (Yt = n - 1e3 * Nt.time),
            (Nt.time = n /= 1e3),
            (Jt += i + (i >= Zt ? 4 : Zt - i)),
            (r = 1)),
          a || (Ht = Vt(t)),
          r)
        )
          for (Xt = 0; Xt < te.length; Xt++) te[Xt](n, Yt, s, e);
      }),
      (Nt = {
        time: 0,
        frame: 0,
        tick: function () {
          ee(!0);
        },
        deltaRatio: function (t) {
          return Yt / (1e3 / (t || 60));
        },
        wake: function () {
          jt &&
            (!Pt &&
              be() &&
              ((Lt = Pt = window),
              (Rt = Lt.document || {}),
              (Be.gsap = Yr),
              (Lt.gsapVersions || (Lt.gsapVersions = [])).push(Yr.version),
              Pe(Le || Lt.GreenSockGlobals || (!Lt.gsap && Lt) || {}),
              (Wt = Lt.requestAnimationFrame)),
            Ht && Nt.sleep(),
            (Vt =
              Wt ||
              function (t) {
                return setTimeout(t, (Jt - 1e3 * Nt.time + 1) | 0);
              }),
            (It = 1),
            ee(2));
        },
        sleep: function () {
          (Wt ? Lt.cancelAnimationFrame : clearTimeout)(Ht),
            (It = 0),
            (Vt = ze);
        },
        lagSmoothing: function (t, e) {
          (Ut = t || 1e8), (Kt = Math.min(e, Ut, 0));
        },
        fps: function (t) {
          (Zt = 1e3 / (t || 240)), (Jt = 1e3 * Nt.time + Zt);
        },
        add: function (t) {
          te.indexOf(t) < 0 && te.push(t), nr();
        },
        remove: function (t) {
          var e;
          ~(e = te.indexOf(t)) && te.splice(e, 1) && Xt >= e && Xt--;
        },
        _listeners: (te = []),
      })),
    nr = function () {
      return !It && rr.wake();
    },
    sr = {},
    or = /^[\d.\-M][\d.\-,\s]/,
    ar = /["']/g,
    lr = function (t) {
      for (
        var e,
          i,
          r,
          n = {},
          s = t.substr(1, t.length - 3).split(":"),
          o = s[0],
          a = 1,
          l = s.length;
        a < l;
        a++
      )
        (i = s[a]),
          (e = a !== l - 1 ? i.lastIndexOf(",") : i.length),
          (r = i.substr(0, e)),
          (n[o] = isNaN(r) ? r.replace(ar, "").trim() : +r),
          (o = i.substr(e + 1).trim());
      return n;
    },
    ur = function (t) {
      return function (e) {
        return 1 - t(1 - e);
      };
    },
    cr = function t(e, i) {
      for (var r, n = e._first; n; )
        n instanceof vr
          ? t(n, i)
          : !n.vars.yoyoEase ||
            (n._yoyo && n._repeat) ||
            n._yoyo === i ||
            (n.timeline
              ? t(n.timeline, i)
              : ((r = n._ease),
                (n._ease = n._yEase),
                (n._yEase = r),
                (n._yoyo = i))),
          (n = n._next);
    },
    hr = function (t, e) {
      return (
        (t &&
          (me(t)
            ? t
            : sr[t] ||
              (function (t) {
                var e,
                  i,
                  r,
                  n,
                  s = (t + "").split("("),
                  o = sr[s[0]];
                return o && s.length > 1 && o.config
                  ? o.config.apply(
                      null,
                      ~t.indexOf("{")
                        ? [lr(s[1])]
                        : ((e = t),
                          (i = e.indexOf("(") + 1),
                          (r = e.indexOf(")")),
                          (n = e.indexOf("(", i)),
                          e.substring(
                            i,
                            ~n && n < r ? e.indexOf(")", r + 1) : r
                          ))
                            .split(",")
                            .map(ri)
                    )
                  : sr._CE && or.test(t)
                  ? sr._CE("", t)
                  : o;
              })(t))) ||
        e
      );
    },
    dr = function (t, e, i, r) {
      void 0 === i &&
        (i = function (t) {
          return 1 - e(1 - t);
        }),
        void 0 === r &&
          (r = function (t) {
            return t < 0.5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2;
          });
      var n,
        s = { easeIn: e, easeOut: i, easeInOut: r };
      return (
        Qe(t, function (t) {
          for (var e in ((sr[t] = Be[t] = s),
          (sr[(n = t.toLowerCase())] = i),
          s))
            sr[
              n + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")
            ] = sr[t + "." + e] = s[e];
        }),
        s
      );
    },
    fr = function (t) {
      return function (e) {
        return e < 0.5 ? (1 - t(1 - 2 * e)) / 2 : 0.5 + t(2 * (e - 0.5)) / 2;
      };
    },
    pr = function t(e, i, r) {
      var n = i >= 1 ? i : 1,
        s = (r || (e ? 0.3 : 0.45)) / (i < 1 ? i : 1),
        o = (s / ce) * (Math.asin(1 / n) || 0),
        a = function (t) {
          return 1 === t ? 1 : n * Math.pow(2, -10 * t) * De((t - o) * s) + 1;
        },
        l =
          "out" === e
            ? a
            : "in" === e
            ? function (t) {
                return 1 - a(1 - t);
              }
            : fr(a);
      return (
        (s = ce / s),
        (l.config = function (i, r) {
          return t(e, i, r);
        }),
        l
      );
    },
    Dr = function t(e, i) {
      void 0 === i && (i = 1.70158);
      var r = function (t) {
          return t ? --t * t * ((i + 1) * t + i) + 1 : 0;
        },
        n =
          "out" === e
            ? r
            : "in" === e
            ? function (t) {
                return 1 - r(1 - t);
              }
            : fr(r);
      return (
        (n.config = function (i) {
          return t(e, i);
        }),
        n
      );
    };
  Qe("Linear,Quad,Cubic,Quart,Quint,Strong", function (t, e) {
    var i = e < 5 ? e + 1 : e;
    dr(
      t + ",Power" + (i - 1),
      e
        ? function (t) {
            return Math.pow(t, i);
          }
        : function (t) {
            return t;
          },
      function (t) {
        return 1 - Math.pow(1 - t, i);
      },
      function (t) {
        return t < 0.5
          ? Math.pow(2 * t, i) / 2
          : 1 - Math.pow(2 * (1 - t), i) / 2;
      }
    );
  }),
    (sr.Linear.easeNone = sr.none = sr.Linear.easeIn),
    dr("Elastic", pr("in"), pr("out"), pr()),
    (ie = 7.5625),
    (ne = 1 / (re = 2.75)),
    dr(
      "Bounce",
      function (t) {
        return 1 - se(1 - t);
      },
      (se = function (t) {
        return t < ne
          ? ie * t * t
          : t < 0.7272727272727273
          ? ie * Math.pow(t - 1.5 / re, 2) + 0.75
          : t < 0.9090909090909092
          ? ie * (t -= 2.25 / re) * t + 0.9375
          : ie * Math.pow(t - 2.625 / re, 2) + 0.984375;
      })
    ),
    dr("Expo", function (t) {
      return t ? Math.pow(2, 10 * (t - 1)) : 0;
    }),
    dr("Circ", function (t) {
      return -(fe(1 - t * t) - 1);
    }),
    dr("Sine", function (t) {
      return 1 === t ? 1 : 1 - pe(t * he);
    }),
    dr("Back", Dr("in"), Dr("out"), Dr()),
    (sr.SteppedEase =
      sr.steps =
      Be.SteppedEase =
        {
          config: function (t, e) {
            void 0 === t && (t = 1);
            var i = 1 / t,
              r = t + (e ? 0 : 1),
              n = e ? 1 : 0;
            return function (t) {
              return (((r * Oi(0, 0.99999999, t)) | 0) + n) * i;
            };
          },
        }),
    (ae.ease = sr["quad.out"]),
    Qe(
      "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
      function (t) {
        return (Ge += t + "," + t + "Params,");
      }
    );
  var gr = function (t, e) {
      (this.id = de++),
        (t._gsap = this),
        (this.target = t),
        (this.harness = e),
        (this.get = e ? e.get : $e),
        (this.set = e ? e.getSetter : Mr);
    },
    mr = (function () {
      function t(t, e) {
        var i = t.parent || Bt;
        (this.vars = t),
          (this._delay = +t.delay || 0),
          (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) &&
            ((this._rDelay = t.repeatDelay || 0),
            (this._yoyo = !!t.yoyo || !!t.yoyoEase)),
          (this._ts = 1),
          Fi(this, +t.duration, 1, 1),
          (this.data = t.data),
          It || rr.wake(),
          i && bi(i, this, e || 0 === e ? e : i._time, 1),
          t.reversed && this.reverse(),
          t.paused && this.paused(!0);
      }
      var e = t.prototype;
      return (
        (e.delay = function (t) {
          return t || 0 === t
            ? (this.parent &&
                this.parent.smoothChildTiming &&
                this.startTime(this._start + t - this._delay),
              (this._delay = t),
              this)
            : this._delay;
        }),
        (e.duration = function (t) {
          return arguments.length
            ? this.totalDuration(
                this._repeat > 0 ? t + (t + this._rDelay) * this._repeat : t
              )
            : this.totalDuration() && this._dur;
        }),
        (e.totalDuration = function (t) {
          return arguments.length
            ? ((this._dirty = 0),
              Fi(
                this,
                this._repeat < 0
                  ? t
                  : (t - this._repeat * this._rDelay) / (this._repeat + 1)
              ))
            : this._tDur;
        }),
        (e.totalTime = function (t, e) {
          if ((nr(), !arguments.length)) return this._tTime;
          var i = this._dp;
          if (i && i.smoothChildTiming && this._ts) {
            for (_i(this, t), !i._dp || i.parent || wi(i, this); i.parent; )
              i.parent._time !==
                i._start +
                  (i._ts >= 0
                    ? i._tTime / i._ts
                    : (i.totalDuration() - i._tTime) / -i._ts) &&
                i.totalTime(i._tTime, !0),
                (i = i.parent);
            !this.parent &&
              this._dp.autoRemoveChildren &&
              ((this._ts > 0 && t < this._tDur) ||
                (this._ts < 0 && t > 0) ||
                (!this._tDur && !t)) &&
              bi(this._dp, this, this._start - this._delay);
          }
          return (
            (this._tTime !== t ||
              (!this._dur && !e) ||
              (this._initted && Math.abs(this._zTime) === ue) ||
              (!t && !this._initted && (this.add || this._ptLookup))) &&
              (this._ts || (this._pTime = t), ii(this, t, e)),
            this
          );
        }),
        (e.time = function (t, e) {
          return arguments.length
            ? this.totalTime(
                Math.min(this.totalDuration(), t + gi(this)) % this._dur ||
                  (t ? this._dur : 0),
                e
              )
            : this._time;
        }),
        (e.totalProgress = function (t, e) {
          return arguments.length
            ? this.totalTime(this.totalDuration() * t, e)
            : this.totalDuration()
            ? Math.min(1, this._tTime / this._tDur)
            : this.ratio;
        }),
        (e.progress = function (t, e) {
          return arguments.length
            ? this.totalTime(
                this.duration() *
                  (!this._yoyo || 1 & this.iteration() ? t : 1 - t) +
                  gi(this),
                e
              )
            : this.duration()
            ? Math.min(1, this._time / this._dur)
            : this.ratio;
        }),
        (e.iteration = function (t, e) {
          var i = this.duration() + this._rDelay;
          return arguments.length
            ? this.totalTime(this._time + (t - 1) * i, e)
            : this._repeat
            ? mi(this._tTime, i) + 1
            : 1;
        }),
        (e.timeScale = function (t) {
          if (!arguments.length) return -1e-8 === this._rts ? 0 : this._rts;
          if (this._rts === t) return this;
          var e =
            this.parent && this._ts ? vi(this.parent._time, this) : this._tTime;
          return (
            (this._rts = +t || 0),
            (this._ts = this._ps || -1e-8 === t ? 0 : this._rts),
            pi(this.totalTime(Oi(-this._delay, this._tDur, e), !0))
          );
        }),
        (e.paused = function (t) {
          return arguments.length
            ? (this._ps !== t &&
                ((this._ps = t),
                t
                  ? ((this._pTime =
                      this._tTime || Math.max(-this._delay, this.rawTime())),
                    (this._ts = this._act = 0))
                  : (nr(),
                    (this._ts = this._rts),
                    this.totalTime(
                      this.parent && !this.parent.smoothChildTiming
                        ? this.rawTime()
                        : this._tTime || this._pTime,
                      1 === this.progress() &&
                        (this._tTime -= ue) &&
                        Math.abs(this._zTime) !== ue
                    ))),
              this)
            : this._ps;
        }),
        (e.startTime = function (t) {
          if (arguments.length) {
            this._start = t;
            var e = this.parent || this._dp;
            return (
              e && (e._sort || !this.parent) && bi(e, this, t - this._delay),
              this
            );
          }
          return this._start;
        }),
        (e.endTime = function (t) {
          return (
            this._start +
            (we(t) ? this.totalDuration() : this.duration()) /
              Math.abs(this._ts)
          );
        }),
        (e.rawTime = function (t) {
          var e = this.parent || this._dp;
          return e
            ? t &&
              (!this._ts ||
                (this._repeat && this._time && this.totalProgress() < 1))
              ? this._tTime % (this._dur + this._rDelay)
              : this._ts
              ? vi(e.rawTime(t), this)
              : this._tTime
            : this._tTime;
        }),
        (e.globalTime = function (t) {
          for (var e = this, i = arguments.length ? t : e.rawTime(); e; )
            (i = e._start + i / (e._ts || 1)), (e = e._dp);
          return i;
        }),
        (e.repeat = function (t) {
          return arguments.length
            ? ((this._repeat = t === 1 / 0 ? -2 : t), Ti(this))
            : -2 === this._repeat
            ? 1 / 0
            : this._repeat;
        }),
        (e.repeatDelay = function (t) {
          return arguments.length
            ? ((this._rDelay = t), Ti(this))
            : this._rDelay;
        }),
        (e.yoyo = function (t) {
          return arguments.length ? ((this._yoyo = t), this) : this._yoyo;
        }),
        (e.seek = function (t, e) {
          return this.totalTime(Ai(this, t), we(e));
        }),
        (e.restart = function (t, e) {
          return this.play().totalTime(t ? -this._delay : 0, we(e));
        }),
        (e.play = function (t, e) {
          return null != t && this.seek(t, e), this.reversed(!1).paused(!1);
        }),
        (e.reverse = function (t, e) {
          return (
            null != t && this.seek(t || this.totalDuration(), e),
            this.reversed(!0).paused(!1)
          );
        }),
        (e.pause = function (t, e) {
          return null != t && this.seek(t, e), this.paused(!0);
        }),
        (e.resume = function () {
          return this.paused(!1);
        }),
        (e.reversed = function (t) {
          return arguments.length
            ? (!!t !== this.reversed() &&
                this.timeScale(-this._rts || (t ? -1e-8 : 0)),
              this)
            : this._rts < 0;
        }),
        (e.invalidate = function () {
          return (this._initted = this._act = 0), (this._zTime = -1e-8), this;
        }),
        (e.isActive = function () {
          var t,
            e = this.parent || this._dp,
            i = this._start;
          return !(
            e &&
            !(
              this._ts &&
              this._initted &&
              e.isActive() &&
              (t = e.rawTime(!0)) >= i &&
              t < this.endTime(!0) - ue
            )
          );
        }),
        (e.eventCallback = function (t, e, i) {
          var r = this.vars;
          return arguments.length > 1
            ? (e
                ? ((r[t] = e),
                  i && (r[t + "Params"] = i),
                  "onUpdate" === t && (this._onUpdate = e))
                : delete r[t],
              this)
            : r[t];
        }),
        (e.then = function (t) {
          var e = this;
          return new Promise(function (i) {
            var r = me(t) ? t : ni,
              n = function () {
                var t = e.then;
                (e.then = null),
                  me(r) && (r = r(e)) && (r.then || r === e) && (e.then = t),
                  i(r),
                  (e.then = t);
              };
            (e._initted && 1 === e.totalProgress() && e._ts >= 0) ||
            (!e._tTime && e._ts < 0)
              ? n()
              : (e._prom = n);
          });
        }),
        (e.kill = function () {
          Xi(this);
        }),
        t
      );
    })();
  si(mr.prototype, {
    _time: 0,
    _start: 0,
    _end: 0,
    _tTime: 0,
    _tDur: 0,
    _dirty: 0,
    _repeat: 0,
    _yoyo: !1,
    parent: null,
    _initted: !1,
    _rDelay: 0,
    _ts: 1,
    _dp: 0,
    ratio: 0,
    _zTime: -1e-8,
    _prom: 0,
    _ps: !1,
    _rts: 1,
  });
  var vr = (function (t) {
    function e(e, i) {
      var r;
      return (
        void 0 === e && (e = {}),
        ((r = t.call(this, e, i) || this).labels = {}),
        (r.smoothChildTiming = !!e.smoothChildTiming),
        (r.autoRemoveChildren = !!e.autoRemoveChildren),
        (r._sort = we(e.sortChildren)),
        r.parent && wi(r.parent, kt(r)),
        e.scrollTrigger && xi(kt(r), e.scrollTrigger),
        r
      );
    }
    Ot(e, t);
    var i = e.prototype;
    return (
      (i.to = function (t, e, i) {
        return (
          new Tr(t, ti(arguments, 0, this), Ai(this, ve(e) ? arguments[3] : i)),
          this
        );
      }),
      (i.from = function (t, e, i) {
        return (
          new Tr(t, ti(arguments, 1, this), Ai(this, ve(e) ? arguments[3] : i)),
          this
        );
      }),
      (i.fromTo = function (t, e, i, r) {
        return (
          new Tr(t, ti(arguments, 2, this), Ai(this, ve(e) ? arguments[4] : r)),
          this
        );
      }),
      (i.set = function (t, e, i) {
        return (
          (e.duration = 0),
          (e.parent = this),
          ci(e).repeatDelay || (e.repeat = 0),
          (e.immediateRender = !!e.immediateRender),
          new Tr(t, e, Ai(this, i), 1),
          this
        );
      }),
      (i.call = function (t, e, i) {
        return bi(this, Tr.delayedCall(0, t, e), Ai(this, i));
      }),
      (i.staggerTo = function (t, e, i, r, n, s, o) {
        return (
          (i.duration = e),
          (i.stagger = i.stagger || r),
          (i.onComplete = s),
          (i.onCompleteParams = o),
          (i.parent = this),
          new Tr(t, i, Ai(this, n)),
          this
        );
      }),
      (i.staggerFrom = function (t, e, i, r, n, s, o) {
        return (
          (i.runBackwards = 1),
          (ci(i).immediateRender = we(i.immediateRender)),
          this.staggerTo(t, e, i, r, n, s, o)
        );
      }),
      (i.staggerFromTo = function (t, e, i, r, n, s, o, a) {
        return (
          (r.startAt = i),
          (ci(r).immediateRender = we(r.immediateRender)),
          this.staggerTo(t, e, r, n, s, o, a)
        );
      }),
      (i.render = function (t, e, i) {
        var r,
          n,
          s,
          o,
          a,
          l,
          u,
          c,
          h,
          d,
          f,
          p,
          D = this._time,
          g = this._dirty ? this.totalDuration() : this._tDur,
          m = this._dur,
          v = this !== Bt && t > g - ue && t >= 0 ? g : t < ue ? 0 : t,
          y = this._zTime < 0 != t < 0 && (this._initted || !m);
        if (v !== this._tTime || i || y) {
          if (
            (D !== this._time &&
              m &&
              ((v += this._time - D), (t += this._time - D)),
            (r = v),
            (h = this._start),
            (l = !(c = this._ts)),
            y && (m || (D = this._zTime), (t || !e) && (this._zTime = t)),
            this._repeat)
          ) {
            if (
              ((f = this._yoyo),
              (a = m + this._rDelay),
              this._repeat < -1 && t < 0)
            )
              return this.totalTime(100 * a + t, e, i);
            if (
              ((r = Ze(v % a)),
              v === g
                ? ((o = this._repeat), (r = m))
                : ((o = ~~(v / a)) && o === v / a && ((r = m), o--),
                  r > m && (r = m)),
              (d = mi(this._tTime, a)),
              !D && this._tTime && d !== o && (d = o),
              f && 1 & o && ((r = m - r), (p = 1)),
              o !== d && !this._lock)
            ) {
              var _ = f && 1 & d,
                w = _ === (f && 1 & o);
              if (
                (o < d && (_ = !_),
                (D = _ ? 0 : m),
                (this._lock = 1),
                (this.render(D || (p ? 0 : Ze(o * a)), e, !m)._lock = 0),
                !e && this.parent && Yi(this, "onRepeat"),
                this.vars.repeatRefresh && !p && (this.invalidate()._lock = 1),
                (D && D !== this._time) ||
                  l !== !this._ts ||
                  (this.vars.onRepeat && !this.parent && !this._act))
              )
                return this;
              if (
                ((m = this._dur),
                (g = this._tDur),
                w &&
                  ((this._lock = 2), (D = _ ? m : -1e-4), this.render(D, !0)),
                (this._lock = 0),
                !this._ts && !l)
              )
                return this;
              cr(this, p);
            }
          }
          if (
            (this._hasPause &&
              !this._forcing &&
              this._lock < 2 &&
              (u = (function (t, e, i) {
                var r;
                if (i > e)
                  for (r = t._first; r && r._start <= i; ) {
                    if (!r._dur && "isPause" === r.data && r._start > e)
                      return r;
                    r = r._next;
                  }
                else
                  for (r = t._last; r && r._start >= i; ) {
                    if (!r._dur && "isPause" === r.data && r._start < e)
                      return r;
                    r = r._prev;
                  }
              })(this, Ze(D), Ze(r))) &&
              (v -= r - (r = u._start)),
            (this._tTime = v),
            (this._time = r),
            (this._act = !c),
            this._initted ||
              ((this._onUpdate = this.vars.onUpdate),
              (this._initted = 1),
              (this._zTime = t),
              (D = 0)),
            !D && r && !e && Yi(this, "onStart"),
            r >= D && t >= 0)
          )
            for (n = this._first; n; ) {
              if (
                ((s = n._next), (n._act || r >= n._start) && n._ts && u !== n)
              ) {
                if (n.parent !== this) return this.render(t, e, i);
                if (
                  (n.render(
                    n._ts > 0
                      ? (r - n._start) * n._ts
                      : (n._dirty ? n.totalDuration() : n._tDur) +
                          (r - n._start) * n._ts,
                    e,
                    i
                  ),
                  r !== this._time || (!this._ts && !l))
                ) {
                  (u = 0), s && (v += this._zTime = -1e-8);
                  break;
                }
              }
              n = s;
            }
          else {
            n = this._last;
            for (var b = t < 0 ? t : r; n; ) {
              if (
                ((s = n._prev), (n._act || b <= n._end) && n._ts && u !== n)
              ) {
                if (n.parent !== this) return this.render(t, e, i);
                if (
                  (n.render(
                    n._ts > 0
                      ? (b - n._start) * n._ts
                      : (n._dirty ? n.totalDuration() : n._tDur) +
                          (b - n._start) * n._ts,
                    e,
                    i
                  ),
                  r !== this._time || (!this._ts && !l))
                ) {
                  (u = 0), s && (v += this._zTime = b ? -1e-8 : ue);
                  break;
                }
              }
              n = s;
            }
          }
          if (
            u &&
            !e &&
            (this.pause(),
            (u.render(r >= D ? 0 : -1e-8)._zTime = r >= D ? 1 : -1),
            this._ts)
          )
            return (this._start = h), yi(this), this.render(t, e, i);
          this._onUpdate && !e && Yi(this, "onUpdate", !0),
            ((v === g && g >= this.totalDuration()) || (!v && D)) &&
              ((h !== this._start && Math.abs(c) === Math.abs(this._ts)) ||
                this._lock ||
                ((t || !m) &&
                  ((v === g && this._ts > 0) || (!v && this._ts < 0)) &&
                  di(this, 1),
                e ||
                  (t < 0 && !D) ||
                  (!v && !D) ||
                  (Yi(this, v === g ? "onComplete" : "onReverseComplete", !0),
                  this._prom &&
                    !(v < g && this.timeScale() > 0) &&
                    this._prom())));
        }
        return this;
      }),
      (i.add = function (t, e) {
        var i = this;
        if ((ve(e) || (e = Ai(this, e)), !(t instanceof mr))) {
          if (Ee(t))
            return (
              t.forEach(function (t) {
                return i.add(t, e);
              }),
              this
            );
          if (ge(t)) return this.addLabel(t, e);
          if (!me(t)) return this;
          t = Tr.delayedCall(0, t);
        }
        return this !== t ? bi(this, t, e) : this;
      }),
      (i.getChildren = function (t, e, i, r) {
        void 0 === t && (t = !0),
          void 0 === e && (e = !0),
          void 0 === i && (i = !0),
          void 0 === r && (r = -1e8);
        for (var n = [], s = this._first; s; )
          s._start >= r &&
            (s instanceof Tr
              ? e && n.push(s)
              : (i && n.push(s),
                t && n.push.apply(n, s.getChildren(!0, e, i)))),
            (s = s._next);
        return n;
      }),
      (i.getById = function (t) {
        for (var e = this.getChildren(1, 1, 1), i = e.length; i--; )
          if (e[i].vars.id === t) return e[i];
      }),
      (i.remove = function (t) {
        return ge(t)
          ? this.removeLabel(t)
          : me(t)
          ? this.killTweensOf(t)
          : (hi(this, t),
            t === this._recent && (this._recent = this._last),
            fi(this));
      }),
      (i.totalTime = function (e, i) {
        return arguments.length
          ? ((this._forcing = 1),
            !this._dp &&
              this._ts &&
              (this._start = Ze(
                rr.time -
                  (this._ts > 0
                    ? e / this._ts
                    : (this.totalDuration() - e) / -this._ts)
              )),
            t.prototype.totalTime.call(this, e, i),
            (this._forcing = 0),
            this)
          : this._tTime;
      }),
      (i.addLabel = function (t, e) {
        return (this.labels[t] = Ai(this, e)), this;
      }),
      (i.removeLabel = function (t) {
        return delete this.labels[t], this;
      }),
      (i.addPause = function (t, e, i) {
        var r = Tr.delayedCall(0, e || ze, i);
        return (
          (r.data = "isPause"), (this._hasPause = 1), bi(this, r, Ai(this, t))
        );
      }),
      (i.removePause = function (t) {
        var e = this._first;
        for (t = Ai(this, t); e; )
          e._start === t && "isPause" === e.data && di(e), (e = e._next);
      }),
      (i.killTweensOf = function (t, e, i) {
        for (var r = this.getTweensOf(t, i), n = r.length; n--; )
          yr !== r[n] && r[n].kill(t, e);
        return this;
      }),
      (i.getTweensOf = function (t, e) {
        for (var i, r = [], n = Pi(t), s = this._first, o = ve(e); s; )
          s instanceof Tr
            ? Je(s._targets, n) &&
              (o
                ? (!yr || (s._initted && s._ts)) &&
                  s.globalTime(0) <= e &&
                  s.globalTime(s.totalDuration()) > e
                : !e || s.isActive()) &&
              r.push(s)
            : (i = s.getTweensOf(n, e)).length && r.push.apply(r, i),
            (s = s._next);
        return r;
      }),
      (i.tweenTo = function (t, e) {
        e = e || {};
        var i = this,
          r = Ai(i, t),
          n = e,
          s = n.startAt,
          o = n.onStart,
          a = n.onStartParams,
          l = n.immediateRender,
          u = Tr.to(
            i,
            si(
              {
                ease: e.ease || "none",
                lazy: !1,
                immediateRender: !1,
                time: r,
                overwrite: "auto",
                duration:
                  e.duration ||
                  Math.abs(
                    (r - (s && "time" in s ? s.time : i._time)) / i.timeScale()
                  ) ||
                  ue,
                onStart: function () {
                  i.pause();
                  var t = e.duration || Math.abs((r - i._time) / i.timeScale());
                  u._dur !== t && Fi(u, t, 0, 1).render(u._time, !0, !0),
                    o && o.apply(u, a || []);
                },
              },
              e
            )
          );
        return l ? u.render(0) : u;
      }),
      (i.tweenFromTo = function (t, e, i) {
        return this.tweenTo(e, si({ startAt: { time: Ai(this, t) } }, i));
      }),
      (i.recent = function () {
        return this._recent;
      }),
      (i.nextLabel = function (t) {
        return void 0 === t && (t = this._time), Ni(this, Ai(this, t));
      }),
      (i.previousLabel = function (t) {
        return void 0 === t && (t = this._time), Ni(this, Ai(this, t), 1);
      }),
      (i.currentLabel = function (t) {
        return arguments.length
          ? this.seek(t, !0)
          : this.previousLabel(this._time + ue);
      }),
      (i.shiftChildren = function (t, e, i) {
        void 0 === i && (i = 0);
        for (var r, n = this._first, s = this.labels; n; )
          n._start >= i && ((n._start += t), (n._end += t)), (n = n._next);
        if (e) for (r in s) s[r] >= i && (s[r] += t);
        return fi(this);
      }),
      (i.invalidate = function () {
        var e = this._first;
        for (this._lock = 0; e; ) e.invalidate(), (e = e._next);
        return t.prototype.invalidate.call(this);
      }),
      (i.clear = function (t) {
        void 0 === t && (t = !0);
        for (var e, i = this._first; i; )
          (e = i._next), this.remove(i), (i = e);
        return (
          this._dp && (this._time = this._tTime = this._pTime = 0),
          t && (this.labels = {}),
          fi(this)
        );
      }),
      (i.totalDuration = function (t) {
        var e,
          i,
          r,
          n = 0,
          s = this,
          o = s._last,
          a = le;
        if (arguments.length)
          return s.timeScale(
            (s._repeat < 0 ? s.duration() : s.totalDuration()) /
              (s.reversed() ? -t : t)
          );
        if (s._dirty) {
          for (r = s.parent; o; )
            (e = o._prev),
              o._dirty && o.totalDuration(),
              (i = o._start) > a && s._sort && o._ts && !s._lock
                ? ((s._lock = 1), (bi(s, o, i - o._delay, 1)._lock = 0))
                : (a = i),
              i < 0 &&
                o._ts &&
                ((n -= i),
                ((!r && !s._dp) || (r && r.smoothChildTiming)) &&
                  ((s._start += i / s._ts), (s._time -= i), (s._tTime -= i)),
                s.shiftChildren(-i, !1, -Infinity),
                (a = 0)),
              o._end > n && o._ts && (n = o._end),
              (o = e);
          Fi(s, s === Bt && s._time > n ? s._time : n, 1, 1), (s._dirty = 0);
        }
        return s._tDur;
      }),
      (e.updateRoot = function (t) {
        if ((Bt._ts && (ii(Bt, vi(t, Bt)), (qt = rr.frame)), rr.frame >= Ye)) {
          Ye += oe.autoSleep || 120;
          var e = Bt._first;
          if ((!e || !e._ts) && oe.autoSleep && rr._listeners.length < 2) {
            for (; e && !e._ts; ) e = e._next;
            e || rr.sleep();
          }
        }
      }),
      e
    );
  })(mr);
  si(vr.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
  var yr,
    _r = function (t, e, i, r, n, s, o) {
      var a,
        l,
        u,
        c,
        h,
        d,
        f,
        p,
        D = new Hr(this._pt, t, e, 0, 1, Pr, null, n),
        g = 0,
        m = 0;
      for (
        D.b = i,
          D.e = r,
          i += "",
          (f = ~(r += "").indexOf("random(")) && (r = Vi(r)),
          s && (s((p = [i, r]), t, e), (i = p[0]), (r = p[1])),
          l = i.match(Ae) || [];
        (a = Ae.exec(r));

      )
        (c = a[0]),
          (h = r.substring(g, a.index)),
          u ? (u = (u + 1) % 5) : "rgba(" === h.substr(-5) && (u = 1),
          c !== l[m++] &&
            ((d = parseFloat(l[m - 1]) || 0),
            (D._pt = {
              _next: D._pt,
              p: h || 1 === m ? h : ",",
              s: d,
              c:
                "=" === c.charAt(1)
                  ? parseFloat(c.substr(2)) * ("-" === c.charAt(0) ? -1 : 1)
                  : parseFloat(c) - d,
              m: u && u < 4 ? Math.round : 0,
            }),
            (g = Ae.lastIndex));
      return (
        (D.c = g < r.length ? r.substring(g, r.length) : ""),
        (D.fp = o),
        (ke.test(r) || f) && (D.e = 0),
        (this._pt = D),
        D
      );
    },
    wr = function (t, e, i, r, n, s, o, a, l) {
      me(r) && (r = r(n || 0, t, s));
      var u,
        c = t[e],
        h =
          "get" !== i
            ? i
            : me(c)
            ? l
              ? t[
                  e.indexOf("set") || !me(t["get" + e.substr(3)])
                    ? e
                    : "get" + e.substr(3)
                ](l)
              : t[e]()
            : c,
        d = me(c) ? (l ? kr : Ar) : Sr;
      if (
        (ge(r) &&
          (~r.indexOf("random(") && (r = Vi(r)),
          "=" === r.charAt(1) &&
            (r =
              parseFloat(h) +
              parseFloat(r.substr(2)) * ("-" === r.charAt(0) ? -1 : 1) +
              (Mi(h) || 0))),
        h !== r)
      )
        return isNaN(h * r)
          ? (!c && !(e in t) && Re(e, r),
            _r.call(this, t, e, h, r, d, a || oe.stringFilter, l))
          : ((u = new Hr(
              this._pt,
              t,
              e,
              +h || 0,
              r - (h || 0),
              "boolean" == typeof c ? Lr : Br,
              0,
              d
            )),
            l && (u.fp = l),
            o && u.modifier(o, this, t),
            (this._pt = u));
    },
    br = function (t, e, i, r, n, s) {
      var o, a, l, u;
      if (
        We[t] &&
        !1 !==
          (o = new We[t]()).init(
            n,
            o.rawVars
              ? e[t]
              : (function (t, e, i, r, n) {
                  if (
                    (me(t) && (t = Cr(t, n, e, i, r)),
                    !_e(t) || (t.style && t.nodeType) || Ee(t) || Ce(t))
                  )
                    return ge(t) ? Cr(t, n, e, i, r) : t;
                  var s,
                    o = {};
                  for (s in t) o[s] = Cr(t[s], n, e, i, r);
                  return o;
                })(e[t], r, n, s, i),
            i,
            r,
            s
          ) &&
        ((i._pt = a = new Hr(i._pt, n, t, 0, 1, o.render, o, 0, o.priority)),
        i !== zt)
      )
        for (l = i._ptLookup[i._targets.indexOf(n)], u = o._props.length; u--; )
          l[o._props[u]] = a;
      return o;
    },
    xr = function t(e, i) {
      var r,
        n,
        s,
        o,
        a,
        l,
        u,
        c,
        h,
        d,
        f,
        p,
        D,
        g = e.vars,
        m = g.ease,
        v = g.startAt,
        y = g.immediateRender,
        _ = g.lazy,
        w = g.onUpdate,
        b = g.onUpdateParams,
        x = g.callbackScope,
        C = g.runBackwards,
        E = g.yoyoEase,
        F = g.keyframes,
        T = g.autoRevert,
        S = e._dur,
        A = e._startAt,
        k = e._targets,
        O = e.parent,
        M = O && "nested" === O.data ? O.parent._targets : k,
        B = "auto" === e._overwrite && !Mt,
        L = e.timeline;
      if (
        (L && (!F || !m) && (m = "none"),
        (e._ease = hr(m, ae.ease)),
        (e._yEase = E ? ur(hr(!0 === E ? m : E, ae.ease)) : 0),
        E &&
          e._yoyo &&
          !e._repeat &&
          ((E = e._yEase), (e._yEase = e._ease), (e._ease = E)),
        !L)
      ) {
        if (
          ((p = (c = k[0] ? Ke(k[0]).harness : 0) && g[c.prop]),
          (r = ui(g, Ie)),
          A && A.render(-1, !0).kill(),
          v)
        )
          if (
            (di(
              (e._startAt = Tr.set(
                k,
                si(
                  {
                    data: "isStart",
                    overwrite: !1,
                    parent: O,
                    immediateRender: !0,
                    lazy: we(_),
                    startAt: null,
                    delay: 0,
                    onUpdate: w,
                    onUpdateParams: b,
                    callbackScope: x,
                    stagger: 0,
                  },
                  v
                )
              ))
            ),
            y)
          ) {
            if (i > 0) T || (e._startAt = 0);
            else if (S && !(i < 0 && A)) return void (i && (e._zTime = i));
          } else !1 === T && (e._startAt = 0);
        else if (C && S)
          if (A) !T && (e._startAt = 0);
          else if (
            (i && (y = !1),
            (s = si(
              {
                overwrite: !1,
                data: "isFromStart",
                lazy: y && we(_),
                immediateRender: y,
                stagger: 0,
                parent: O,
              },
              r
            )),
            p && (s[c.prop] = p),
            di((e._startAt = Tr.set(k, s))),
            y)
          ) {
            if (!i) return;
          } else t(e._startAt, ue);
        for (
          e._pt = 0, _ = (S && we(_)) || (_ && !S), n = 0;
          n < k.length;
          n++
        ) {
          if (
            ((u = (a = k[n])._gsap || Ue(k)[n]._gsap),
            (e._ptLookup[n] = d = {}),
            Ve[u.id] && He.length && ei(),
            (f = M === k ? n : M.indexOf(a)),
            c &&
              !1 !== (h = new c()).init(a, p || r, e, f, M) &&
              ((e._pt = o =
                new Hr(e._pt, a, h.name, 0, 1, h.render, h, 0, h.priority)),
              h._props.forEach(function (t) {
                d[t] = o;
              }),
              h.priority && (l = 1)),
            !c || p)
          )
            for (s in r)
              We[s] && (h = br(s, r, e, f, a, M))
                ? h.priority && (l = 1)
                : (d[s] = o =
                    wr.call(e, a, s, "get", r[s], f, M, 0, g.stringFilter));
          e._op && e._op[n] && e.kill(a, e._op[n]),
            B &&
              e._pt &&
              ((yr = e),
              Bt.killTweensOf(a, d, e.globalTime(0)),
              (D = !e.parent),
              (yr = 0)),
            e._pt && _ && (Ve[u.id] = 1);
        }
        l && Ir(e), e._onInit && e._onInit(e);
      }
      (e._from = !L && !!g.runBackwards),
        (e._onUpdate = w),
        (e._initted = (!e._op || e._pt) && !D);
    },
    Cr = function (t, e, i, r, n) {
      return me(t)
        ? t.call(e, i, r, n)
        : ge(t) && ~t.indexOf("random(")
        ? Vi(t)
        : t;
    },
    Er = Ge + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase",
    Fr = (Er + ",id,stagger,delay,duration,paused,scrollTrigger").split(","),
    Tr = (function (t) {
      function e(e, i, r, n) {
        var s;
        "number" == typeof i && ((r.duration = i), (i = r), (r = null));
        var o,
          a,
          l,
          u,
          c,
          h,
          d,
          f,
          p = (s = t.call(this, n ? i : ci(i), r) || this).vars,
          D = p.duration,
          g = p.delay,
          m = p.immediateRender,
          v = p.stagger,
          y = p.overwrite,
          _ = p.keyframes,
          w = p.defaults,
          b = p.scrollTrigger,
          x = p.yoyoEase,
          C = s.parent,
          E = (Ee(e) || Ce(e) ? ve(e[0]) : "length" in i) ? [e] : Pi(e);
        if (
          ((s._targets = E.length
            ? Ue(E)
            : je(
                "GSAP target " + e + " not found. https://greensock.com",
                !oe.nullTargetWarn
              ) || []),
          (s._ptLookup = []),
          (s._overwrite = y),
          _ || v || xe(D) || xe(g))
        ) {
          if (
            ((i = s.vars),
            (o = s.timeline =
              new vr({ data: "nested", defaults: w || {} })).kill(),
            (o.parent = o._dp = kt(s)),
            (o._start = 0),
            _)
          )
            si(o.vars.defaults, { ease: "none" }),
              _.forEach(function (t) {
                return o.to(E, t, ">");
              });
          else {
            if (((u = E.length), (d = v ? ji(v) : ze), _e(v)))
              for (c in v) ~Er.indexOf(c) && (f || (f = {}), (f[c] = v[c]));
            for (a = 0; a < u; a++) {
              for (c in ((l = {}), i)) Fr.indexOf(c) < 0 && (l[c] = i[c]);
              (l.stagger = 0),
                x && (l.yoyoEase = x),
                f && ai(l, f),
                (h = E[a]),
                (l.duration = +Cr(D, kt(s), a, h, E)),
                (l.delay = (+Cr(g, kt(s), a, h, E) || 0) - s._delay),
                !v &&
                  1 === u &&
                  l.delay &&
                  ((s._delay = g = l.delay), (s._start += g), (l.delay = 0)),
                o.to(h, l, d(a, h, E));
            }
            o.duration() ? (D = g = 0) : (s.timeline = 0);
          }
          D || s.duration((D = o.duration()));
        } else s.timeline = 0;
        return (
          !0 !== y || Mt || ((yr = kt(s)), Bt.killTweensOf(E), (yr = 0)),
          C && wi(C, kt(s)),
          (m ||
            (!D &&
              !_ &&
              s._start === Ze(C._time) &&
              we(m) &&
              Di(kt(s)) &&
              "nested" !== C.data)) &&
            ((s._tTime = -1e-8), s.render(Math.max(0, -g))),
          b && xi(kt(s), b),
          s
        );
      }
      Ot(e, t);
      var i = e.prototype;
      return (
        (i.render = function (t, e, i) {
          var r,
            n,
            s,
            o,
            a,
            l,
            u,
            c,
            h,
            d = this._time,
            f = this._tDur,
            p = this._dur,
            D = t > f - ue && t >= 0 ? f : t < ue ? 0 : t;
          if (p) {
            if (
              D !== this._tTime ||
              !t ||
              i ||
              (!this._initted && this._tTime) ||
              (this._startAt && this._zTime < 0 != t < 0)
            ) {
              if (((r = D), (c = this.timeline), this._repeat)) {
                if (((o = p + this._rDelay), this._repeat < -1 && t < 0))
                  return this.totalTime(100 * o + t, e, i);
                if (
                  ((r = Ze(D % o)),
                  D === f
                    ? ((s = this._repeat), (r = p))
                    : ((s = ~~(D / o)) && s === D / o && ((r = p), s--),
                      r > p && (r = p)),
                  (l = this._yoyo && 1 & s) && ((h = this._yEase), (r = p - r)),
                  (a = mi(this._tTime, o)),
                  r === d && !i && this._initted)
                )
                  return this;
                s !== a &&
                  (c && this._yEase && cr(c, l),
                  !this.vars.repeatRefresh ||
                    l ||
                    this._lock ||
                    ((this._lock = i = 1),
                    (this.render(Ze(o * s), !0).invalidate()._lock = 0)));
              }
              if (!this._initted) {
                if (Ci(this, t < 0 ? t : r, i, e))
                  return (this._tTime = 0), this;
                if (p !== this._dur) return this.render(t, e, i);
              }
              for (
                this._tTime = D,
                  this._time = r,
                  !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
                  this.ratio = u = (h || this._ease)(r / p),
                  this._from && (this.ratio = u = 1 - u),
                  r && !d && !e && Yi(this, "onStart"),
                  n = this._pt;
                n;

              )
                n.r(u, n.d), (n = n._next);
              (c && c.render(t < 0 ? t : !r && l ? -1e-8 : c._dur * u, e, i)) ||
                (this._startAt && (this._zTime = t)),
                this._onUpdate &&
                  !e &&
                  (t < 0 && this._startAt && this._startAt.render(t, !0, i),
                  Yi(this, "onUpdate")),
                this._repeat &&
                  s !== a &&
                  this.vars.onRepeat &&
                  !e &&
                  this.parent &&
                  Yi(this, "onRepeat"),
                (D !== this._tDur && D) ||
                  this._tTime !== D ||
                  (t < 0 &&
                    this._startAt &&
                    !this._onUpdate &&
                    this._startAt.render(t, !0, !0),
                  (t || !p) &&
                    ((D === this._tDur && this._ts > 0) ||
                      (!D && this._ts < 0)) &&
                    di(this, 1),
                  e ||
                    (t < 0 && !d) ||
                    (!D && !d) ||
                    (Yi(this, D === f ? "onComplete" : "onReverseComplete", !0),
                    this._prom &&
                      !(D < f && this.timeScale() > 0) &&
                      this._prom()));
            }
          } else
            !(function (t, e, i, r) {
              var n,
                s,
                o,
                a = t.ratio,
                l =
                  e < 0 ||
                  (!e &&
                    ((!t._start && Ei(t)) ||
                      ((t._ts < 0 || t._dp._ts < 0) &&
                        "isFromStart" !== t.data &&
                        "isStart" !== t.data)))
                    ? 0
                    : 1,
                u = t._rDelay,
                c = 0;
              if (
                (u &&
                  t._repeat &&
                  ((c = Oi(0, t._tDur, e)),
                  (s = mi(c, u)),
                  (o = mi(t._tTime, u)),
                  t._yoyo && 1 & s && (l = 1 - l),
                  s !== o &&
                    ((a = 1 - l),
                    t.vars.repeatRefresh && t._initted && t.invalidate())),
                l !== a || r || t._zTime === ue || (!e && t._zTime))
              ) {
                if (!t._initted && Ci(t, e, r, i)) return;
                for (
                  o = t._zTime,
                    t._zTime = e || (i ? ue : 0),
                    i || (i = e && !o),
                    t.ratio = l,
                    t._from && (l = 1 - l),
                    t._time = 0,
                    t._tTime = c,
                    n = t._pt;
                  n;

                )
                  n.r(l, n.d), (n = n._next);
                t._startAt && e < 0 && t._startAt.render(e, !0, !0),
                  t._onUpdate && !i && Yi(t, "onUpdate"),
                  c && t._repeat && !i && t.parent && Yi(t, "onRepeat"),
                  (e >= t._tDur || e < 0) &&
                    t.ratio === l &&
                    (l && di(t, 1),
                    i ||
                      (Yi(t, l ? "onComplete" : "onReverseComplete", !0),
                      t._prom && t._prom()));
              } else t._zTime || (t._zTime = e);
            })(this, t, e, i);
          return this;
        }),
        (i.targets = function () {
          return this._targets;
        }),
        (i.invalidate = function () {
          return (
            (this._pt =
              this._op =
              this._startAt =
              this._onUpdate =
              this._lazy =
              this.ratio =
                0),
            (this._ptLookup = []),
            this.timeline && this.timeline.invalidate(),
            t.prototype.invalidate.call(this)
          );
        }),
        (i.kill = function (t, e) {
          if ((void 0 === e && (e = "all"), !(t || (e && "all" !== e))))
            return (this._lazy = this._pt = 0), this.parent ? Xi(this) : this;
          if (this.timeline) {
            var i = this.timeline.totalDuration();
            return (
              this.timeline.killTweensOf(t, e, yr && !0 !== yr.vars.overwrite)
                ._first || Xi(this),
              this.parent &&
                i !== this.timeline.totalDuration() &&
                Fi(this, (this._dur * this.timeline._tDur) / i, 0, 1),
              this
            );
          }
          var r,
            n,
            s,
            o,
            a,
            l,
            u,
            c = this._targets,
            h = t ? Pi(t) : c,
            d = this._ptLookup,
            f = this._pt;
          if (
            (!e || "all" === e) &&
            (function (t, e) {
              for (
                var i = t.length, r = i === e.length;
                r && i-- && t[i] === e[i];

              );
              return i < 0;
            })(c, h)
          )
            return "all" === e && (this._pt = 0), Xi(this);
          for (
            r = this._op = this._op || [],
              "all" !== e &&
                (ge(e) &&
                  ((a = {}),
                  Qe(e, function (t) {
                    return (a[t] = 1);
                  }),
                  (e = a)),
                (e = (function (t, e) {
                  var i,
                    r,
                    n,
                    s,
                    o = t[0] ? Ke(t[0]).harness : 0,
                    a = o && o.aliases;
                  if (!a) return e;
                  for (r in ((i = ai({}, e)), a))
                    if ((r in i))
                      for (n = (s = a[r].split(",")).length; n--; )
                        i[s[n]] = i[r];
                  return i;
                })(c, e))),
              u = c.length;
            u--;

          )
            if (~h.indexOf(c[u]))
              for (a in ((n = d[u]),
              "all" === e
                ? ((r[u] = e), (o = n), (s = {}))
                : ((s = r[u] = r[u] || {}), (o = e)),
              o))
                (l = n && n[a]) &&
                  (("kill" in l.d && !0 !== l.d.kill(a)) || hi(this, l, "_pt"),
                  delete n[a]),
                  "all" !== s && (s[a] = 1);
          return this._initted && !this._pt && f && Xi(this), this;
        }),
        (e.to = function (t, i) {
          return new e(t, i, arguments[2]);
        }),
        (e.from = function (t, i) {
          return new e(t, ti(arguments, 1));
        }),
        (e.delayedCall = function (t, i, r, n) {
          return new e(i, 0, {
            immediateRender: !1,
            lazy: !1,
            overwrite: !1,
            delay: t,
            onComplete: i,
            onReverseComplete: i,
            onCompleteParams: r,
            onReverseCompleteParams: r,
            callbackScope: n,
          });
        }),
        (e.fromTo = function (t, i, r) {
          return new e(t, ti(arguments, 2));
        }),
        (e.set = function (t, i) {
          return (i.duration = 0), i.repeatDelay || (i.repeat = 0), new e(t, i);
        }),
        (e.killTweensOf = function (t, e, i) {
          return Bt.killTweensOf(t, e, i);
        }),
        e
      );
    })(mr);
  si(Tr.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 }),
    Qe("staggerTo,staggerFrom,staggerFromTo", function (t) {
      Tr[t] = function () {
        var e = new vr(),
          i = Bi.call(arguments, 0);
        return i.splice("staggerFromTo" === t ? 5 : 4, 0, 0), e[t].apply(e, i);
      };
    });
  var Sr = function (t, e, i) {
      return (t[e] = i);
    },
    Ar = function (t, e, i) {
      return t[e](i);
    },
    kr = function (t, e, i, r) {
      return t[e](r.fp, i);
    },
    Or = function (t, e, i) {
      return t.setAttribute(e, i);
    },
    Mr = function (t, e) {
      return me(t[e]) ? Ar : ye(t[e]) && t.setAttribute ? Or : Sr;
    },
    Br = function (t, e) {
      return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4, e);
    },
    Lr = function (t, e) {
      return e.set(e.t, e.p, !!(e.s + e.c * t), e);
    },
    Pr = function (t, e) {
      var i = e._pt,
        r = "";
      if (!t && e.b) r = e.b;
      else if (1 === t && e.e) r = e.e;
      else {
        for (; i; )
          (r =
            i.p +
            (i.m
              ? i.m(i.s + i.c * t)
              : Math.round(1e4 * (i.s + i.c * t)) / 1e4) +
            r),
            (i = i._next);
        r += e.c;
      }
      e.set(e.t, e.p, r, e);
    },
    Rr = function (t, e) {
      for (var i = e._pt; i; ) i.r(t, i.d), (i = i._next);
    },
    jr = function (t, e, i, r) {
      for (var n, s = this._pt; s; )
        (n = s._next), s.p === r && s.modifier(t, e, i), (s = n);
    },
    qr = function (t) {
      for (var e, i, r = this._pt; r; )
        (i = r._next),
          (r.p === t && !r.op) || r.op === t
            ? hi(this, r, "_pt")
            : r.dep || (e = 1),
          (r = i);
      return !e;
    },
    zr = function (t, e, i, r) {
      r.mSet(t, e, r.m.call(r.tween, i, r.mt), r);
    },
    Ir = function (t) {
      for (var e, i, r, n, s = t._pt; s; ) {
        for (e = s._next, i = r; i && i.pr > s.pr; ) i = i._next;
        (s._prev = i ? i._prev : n) ? (s._prev._next = s) : (r = s),
          (s._next = i) ? (i._prev = s) : (n = s),
          (s = e);
      }
      t._pt = r;
    },
    Hr = (function () {
      function t(t, e, i, r, n, s, o, a, l) {
        (this.t = e),
          (this.s = r),
          (this.c = n),
          (this.p = i),
          (this.r = s || Br),
          (this.d = o || this),
          (this.set = a || Sr),
          (this.pr = l || 0),
          (this._next = t),
          t && (t._prev = this);
      }
      return (
        (t.prototype.modifier = function (t, e, i) {
          (this.mSet = this.mSet || this.set),
            (this.set = zr),
            (this.m = t),
            (this.mt = i),
            (this.tween = e);
        }),
        t
      );
    })();
  Qe(
    Ge +
      "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
    function (t) {
      return (Ie[t] = 1);
    }
  ),
    (Be.TweenMax = Be.TweenLite = Tr),
    (Be.TimelineLite = Be.TimelineMax = vr),
    (Bt = new vr({
      sortChildren: !1,
      defaults: ae,
      autoRemoveChildren: !0,
      id: "root",
      smoothChildTiming: !0,
    })),
    (oe.stringFilter = ir);
  var Vr = {
    registerPlugin: function () {
      for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
        e[i] = arguments[i];
      e.forEach(function (t) {
        return Gi(t);
      });
    },
    timeline: function (t) {
      return new vr(t);
    },
    getTweensOf: function (t, e) {
      return Bt.getTweensOf(t, e);
    },
    getProperty: function (t, e, i, r) {
      ge(t) && (t = Pi(t)[0]);
      var n = Ke(t || {}).get,
        s = i ? ni : ri;
      return (
        "native" === i && (i = ""),
        t
          ? e
            ? s(((We[e] && We[e].get) || n)(t, e, i, r))
            : function (e, i, r) {
                return s(((We[e] && We[e].get) || n)(t, e, i, r));
              }
          : t
      );
    },
    quickSetter: function (t, e, i) {
      if ((t = Pi(t)).length > 1) {
        var r = t.map(function (t) {
            return Yr.quickSetter(t, e, i);
          }),
          n = r.length;
        return function (t) {
          for (var e = n; e--; ) r[e](t);
        };
      }
      t = t[0] || {};
      var s = We[e],
        o = Ke(t),
        a = (o.harness && (o.harness.aliases || {})[e]) || e,
        l = s
          ? function (e) {
              var r = new s();
              (zt._pt = 0),
                r.init(t, i ? e + i : e, zt, 0, [t]),
                r.render(1, r),
                zt._pt && Rr(1, zt);
            }
          : o.set(t, a);
      return s
        ? l
        : function (e) {
            return l(t, a, i ? e + i : e, o, 1);
          };
    },
    isTweening: function (t) {
      return Bt.getTweensOf(t, !0).length > 0;
    },
    defaults: function (t) {
      return t && t.ease && (t.ease = hr(t.ease, ae.ease)), li(ae, t || {});
    },
    config: function (t) {
      return li(oe, t || {});
    },
    registerEffect: function (t) {
      var e = t.name,
        i = t.effect,
        r = t.plugins,
        n = t.defaults,
        s = t.extendTimeline;
      (r || "").split(",").forEach(function (t) {
        return (
          t && !We[t] && !Be[t] && je(e + " effect requires " + t + " plugin.")
        );
      }),
        (Ne[e] = function (t, e, r) {
          return i(Pi(t), si(e || {}, n), r);
        }),
        s &&
          (vr.prototype[e] = function (t, i, r) {
            return this.add(Ne[e](t, _e(i) ? i : (r = i) && {}, this), r);
          });
    },
    registerEase: function (t, e) {
      sr[t] = hr(e);
    },
    parseEase: function (t, e) {
      return arguments.length ? hr(t, e) : sr;
    },
    getById: function (t) {
      return Bt.getById(t);
    },
    exportRoot: function (t, e) {
      void 0 === t && (t = {});
      var i,
        r,
        n = new vr(t);
      for (
        n.smoothChildTiming = we(t.smoothChildTiming),
          Bt.remove(n),
          n._dp = 0,
          n._time = n._tTime = Bt._time,
          i = Bt._first;
        i;

      )
        (r = i._next),
          (!e &&
            !i._dur &&
            i instanceof Tr &&
            i.vars.onComplete === i._targets[0]) ||
            bi(n, i, i._start - i._delay),
          (i = r);
      return bi(Bt, n, 0), n;
    },
    utils: {
      wrap: function t(e, i, r) {
        var n = i - e;
        return Ee(e)
          ? Hi(e, t(0, e.length), i)
          : ki(r, function (t) {
              return ((n + ((t - e) % n)) % n) + e;
            });
      },
      wrapYoyo: function t(e, i, r) {
        var n = i - e,
          s = 2 * n;
        return Ee(e)
          ? Hi(e, t(0, e.length - 1), i)
          : ki(r, function (t) {
              return e + ((t = (s + ((t - e) % s)) % s || 0) > n ? s - t : t);
            });
      },
      distribute: ji,
      random: Ii,
      snap: zi,
      normalize: function (t, e, i) {
        return Wi(t, e, 0, 1, i);
      },
      getUnit: Mi,
      clamp: function (t, e, i) {
        return ki(i, function (i) {
          return Oi(t, e, i);
        });
      },
      splitColor: Qi,
      toArray: Pi,
      mapRange: Wi,
      pipe: function () {
        for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
          e[i] = arguments[i];
        return function (t) {
          return e.reduce(function (t, e) {
            return e(t);
          }, t);
        };
      },
      unitize: function (t, e) {
        return function (i) {
          return t(parseFloat(i)) + (e || Mi(i));
        };
      },
      interpolate: function t(e, i, r, n) {
        var s = isNaN(e + i)
          ? 0
          : function (t) {
              return (1 - t) * e + t * i;
            };
        if (!s) {
          var o,
            a,
            l,
            u,
            c,
            h = ge(e),
            d = {};
          if ((!0 === r && (n = 1) && (r = null), h))
            (e = { p: e }), (i = { p: i });
          else if (Ee(e) && !Ee(i)) {
            for (l = [], u = e.length, c = u - 2, a = 1; a < u; a++)
              l.push(t(e[a - 1], e[a]));
            u--,
              (s = function (t) {
                t *= u;
                var e = Math.min(c, ~~t);
                return l[e](t - e);
              }),
              (r = i);
          } else n || (e = ai(Ee(e) ? [] : {}, e));
          if (!l) {
            for (o in i) wr.call(d, e, o, "get", i[o]);
            s = function (t) {
              return Rr(t, d) || (h ? e.p : e);
            };
          }
        }
        return ki(r, s);
      },
      shuffle: Ri,
    },
    install: Pe,
    effects: Ne,
    ticker: rr,
    updateRoot: vr.updateRoot,
    plugins: We,
    globalTimeline: Bt,
    core: {
      PropTween: Hr,
      globals: qe,
      Tween: Tr,
      Timeline: vr,
      Animation: mr,
      getCache: Ke,
      _removeLinkedListItem: hi,
      suppressOverwrites: function (t) {
        return (Mt = t);
      },
    },
  };
  Qe("to,from,fromTo,delayedCall,set,killTweensOf", function (t) {
    return (Vr[t] = Tr[t]);
  }),
    rr.add(vr.updateRoot),
    (zt = Vr.to({}, { duration: 0 }));
  var Wr = function (t, e) {
      for (var i = t._pt; i && i.p !== e && i.op !== e && i.fp !== e; )
        i = i._next;
      return i;
    },
    Nr = function (t, e) {
      return {
        name: t,
        rawVars: 1,
        init: function (t, i, r) {
          r._onInit = function (t) {
            var r, n;
            if (
              (ge(i) &&
                ((r = {}),
                Qe(i, function (t) {
                  return (r[t] = 1);
                }),
                (i = r)),
              e)
            ) {
              for (n in ((r = {}), i)) r[n] = e(i[n]);
              i = r;
            }
            !(function (t, e) {
              var i,
                r,
                n,
                s = t._targets;
              for (i in e)
                for (r = s.length; r--; )
                  (n = t._ptLookup[r][i]) &&
                    (n = n.d) &&
                    (n._pt && (n = Wr(n, i)),
                    n && n.modifier && n.modifier(e[i], t, s[r], i));
            })(t, i);
          };
        },
      };
    },
    Yr =
      Vr.registerPlugin(
        {
          name: "attr",
          init: function (t, e, i, r, n) {
            var s, o;
            for (s in e)
              (o = this.add(
                t,
                "setAttribute",
                (t.getAttribute(s) || 0) + "",
                e[s],
                r,
                n,
                0,
                0,
                s
              )) && (o.op = s),
                this._props.push(s);
          },
        },
        {
          name: "endArray",
          init: function (t, e) {
            for (var i = e.length; i--; ) this.add(t, i, t[i] || 0, e[i]);
          },
        },
        Nr("roundProps", qi),
        Nr("modifiers"),
        Nr("snap", zi)
      ) || Vr;
  (Tr.version = vr.version = Yr.version = "3.6.1"), (jt = 1), be() && nr();
  sr.Power0,
    sr.Power1,
    sr.Power2,
    sr.Power3,
    sr.Power4,
    sr.Linear,
    sr.Quad,
    sr.Cubic,
    sr.Quart,
    sr.Quint,
    sr.Strong,
    sr.Elastic,
    sr.Back,
    sr.SteppedEase,
    sr.Bounce,
    sr.Sine,
    sr.Expo,
    sr.Circ;
  var Xr,
    Gr,
    Ur,
    Kr,
    $r,
    Qr,
    Zr,
    Jr = {},
    tn = 180 / Math.PI,
    en = Math.PI / 180,
    rn = Math.atan2,
    nn = /([A-Z])/g,
    sn = /(?:left|right|width|margin|padding|x)/i,
    on = /[\s,\(]\S/,
    an = {
      autoAlpha: "opacity,visibility",
      scale: "scaleX,scaleY",
      alpha: "opacity",
    },
    ln = function (t, e) {
      return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e);
    },
    un = function (t, e) {
      return e.set(
        e.t,
        e.p,
        1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u,
        e
      );
    },
    cn = function (t, e) {
      return e.set(
        e.t,
        e.p,
        t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b,
        e
      );
    },
    hn = function (t, e) {
      var i = e.s + e.c * t;
      e.set(e.t, e.p, ~~(i + (i < 0 ? -0.5 : 0.5)) + e.u, e);
    },
    dn = function (t, e) {
      return e.set(e.t, e.p, t ? e.e : e.b, e);
    },
    fn = function (t, e) {
      return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e);
    },
    pn = function (t, e, i) {
      return (t.style[e] = i);
    },
    Dn = function (t, e, i) {
      return t.style.setProperty(e, i);
    },
    gn = function (t, e, i) {
      return (t._gsap[e] = i);
    },
    mn = function (t, e, i) {
      return (t._gsap.scaleX = t._gsap.scaleY = i);
    },
    vn = function (t, e, i, r, n) {
      var s = t._gsap;
      (s.scaleX = s.scaleY = i), s.renderTransform(n, s);
    },
    yn = function (t, e, i, r, n) {
      var s = t._gsap;
      (s[e] = i), s.renderTransform(n, s);
    },
    _n = "transform",
    wn = _n + "Origin",
    bn = function (t, e) {
      var i = Gr.createElementNS
        ? Gr.createElementNS(
            (e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
            t
          )
        : Gr.createElement(t);
      return i.style ? i : Gr.createElement(t);
    },
    xn = function t(e, i, r) {
      var n = getComputedStyle(e);
      return (
        n[i] ||
        n.getPropertyValue(i.replace(nn, "-$1").toLowerCase()) ||
        n.getPropertyValue(i) ||
        (!r && t(e, En(i) || i, 1)) ||
        ""
      );
    },
    Cn = "O,Moz,ms,Ms,Webkit".split(","),
    En = function (t, e, i) {
      var r = (e || $r).style,
        n = 5;
      if (t in r && !i) return t;
      for (
        t = t.charAt(0).toUpperCase() + t.substr(1);
        n-- && !(Cn[n] + t in r);

      );
      return n < 0 ? null : (3 === n ? "ms" : n >= 0 ? Cn[n] : "") + t;
    },
    Fn = function () {
      "undefined" != typeof window &&
        window.document &&
        ((Xr = window),
        (Gr = Xr.document),
        (Ur = Gr.documentElement),
        ($r = bn("div") || { style: {} }),
        bn("div"),
        (_n = En(_n)),
        (wn = _n + "Origin"),
        ($r.style.cssText =
          "border-width:0;line-height:0;position:absolute;padding:0"),
        (Zr = !!En("perspective")),
        (Kr = 1));
    },
    Tn = function t(e) {
      var i,
        r = bn(
          "svg",
          (this.ownerSVGElement &&
            this.ownerSVGElement.getAttribute("xmlns")) ||
            "http://www.w3.org/2000/svg"
        ),
        n = this.parentNode,
        s = this.nextSibling,
        o = this.style.cssText;
      if (
        (Ur.appendChild(r),
        r.appendChild(this),
        (this.style.display = "block"),
        e)
      )
        try {
          (i = this.getBBox()),
            (this._gsapBBox = this.getBBox),
            (this.getBBox = t);
        } catch (t) {}
      else this._gsapBBox && (i = this._gsapBBox());
      return (
        n && (s ? n.insertBefore(this, s) : n.appendChild(this)),
        Ur.removeChild(r),
        (this.style.cssText = o),
        i
      );
    },
    Sn = function (t, e) {
      for (var i = e.length; i--; )
        if (t.hasAttribute(e[i])) return t.getAttribute(e[i]);
    },
    An = function (t) {
      var e;
      try {
        e = t.getBBox();
      } catch (i) {
        e = Tn.call(t, !0);
      }
      return (
        (e && (e.width || e.height)) ||
          t.getBBox === Tn ||
          (e = Tn.call(t, !0)),
        !e || e.width || e.x || e.y
          ? e
          : {
              x: +Sn(t, ["x", "cx", "x1"]) || 0,
              y: +Sn(t, ["y", "cy", "y1"]) || 0,
              width: 0,
              height: 0,
            }
      );
    },
    kn = function (t) {
      return !(!t.getCTM || (t.parentNode && !t.ownerSVGElement) || !An(t));
    },
    On = function (t, e) {
      if (e) {
        var i = t.style;
        e in Jr && e !== wn && (e = _n),
          i.removeProperty
            ? (("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6)) ||
                (e = "-" + e),
              i.removeProperty(e.replace(nn, "-$1").toLowerCase()))
            : i.removeAttribute(e);
      }
    },
    Mn = function (t, e, i, r, n, s) {
      var o = new Hr(t._pt, e, i, 0, 1, s ? fn : dn);
      return (t._pt = o), (o.b = r), (o.e = n), t._props.push(i), o;
    },
    Bn = { deg: 1, rad: 1, turn: 1 },
    Ln = function t(e, i, r, n) {
      var s,
        o,
        a,
        l,
        u = parseFloat(r) || 0,
        c = (r + "").trim().substr((u + "").length) || "px",
        h = $r.style,
        d = sn.test(i),
        f = "svg" === e.tagName.toLowerCase(),
        p = (f ? "client" : "offset") + (d ? "Width" : "Height"),
        D = 100,
        g = "px" === n,
        m = "%" === n;
      return n === c || !u || Bn[n] || Bn[c]
        ? u
        : ("px" !== c && !g && (u = t(e, i, r, "px")),
          (l = e.getCTM && kn(e)),
          (!m && "%" !== c) || (!Jr[i] && !~i.indexOf("adius"))
            ? ((h[d ? "width" : "height"] = D + (g ? c : n)),
              (o =
                ~i.indexOf("adius") || ("em" === n && e.appendChild && !f)
                  ? e
                  : e.parentNode),
              l && (o = (e.ownerSVGElement || {}).parentNode),
              (o && o !== Gr && o.appendChild) || (o = Gr.body),
              (a = o._gsap) && m && a.width && d && a.time === rr.time
                ? Ze((u / a.width) * D)
                : ((m || "%" === c) && (h.position = xn(e, "position")),
                  o === e && (h.position = "static"),
                  o.appendChild($r),
                  (s = $r[p]),
                  o.removeChild($r),
                  (h.position = "absolute"),
                  d && m && (((a = Ke(o)).time = rr.time), (a.width = o[p])),
                  Ze(g ? (s * u) / D : s && u ? (D / s) * u : 0)))
            : ((s = l ? e.getBBox()[d ? "width" : "height"] : e[p]),
              Ze(m ? (u / s) * D : (u / 100) * s)));
    },
    Pn = function (t, e, i, r) {
      var n;
      return (
        Kr || Fn(),
        e in an &&
          "transform" !== e &&
          ~(e = an[e]).indexOf(",") &&
          (e = e.split(",")[0]),
        Jr[e] && "transform" !== e
          ? ((n = Xn(t, r)),
            (n =
              "transformOrigin" !== e
                ? n[e]
                : Gn(xn(t, wn)) + " " + n.zOrigin + "px"))
          : (!(n = t.style[e]) ||
              "auto" === n ||
              r ||
              ~(n + "").indexOf("calc(")) &&
            (n =
              (zn[e] && zn[e](t, e, i)) ||
              xn(t, e) ||
              $e(t, e) ||
              ("opacity" === e ? 1 : 0)),
        i && !~(n + "").trim().indexOf(" ") ? Ln(t, e, n, i) + i : n
      );
    },
    Rn = function (t, e, i, r) {
      if (!i || "none" === i) {
        var n = En(e, t, 1),
          s = n && xn(t, n, 1);
        s && s !== i
          ? ((e = n), (i = s))
          : "borderColor" === e && (i = xn(t, "borderTopColor"));
      }
      var o,
        a,
        l,
        u,
        c,
        h,
        d,
        f,
        p,
        D,
        g,
        m,
        v = new Hr(this._pt, t.style, e, 0, 1, Pr),
        y = 0,
        _ = 0;
      if (
        ((v.b = i),
        (v.e = r),
        (i += ""),
        "auto" === (r += "") &&
          ((t.style[e] = r), (r = xn(t, e) || r), (t.style[e] = i)),
        ir((o = [i, r])),
        (r = o[1]),
        (l = (i = o[0]).match(Se) || []),
        (r.match(Se) || []).length)
      ) {
        for (; (a = Se.exec(r)); )
          (d = a[0]),
            (p = r.substring(y, a.index)),
            c
              ? (c = (c + 1) % 5)
              : ("rgba(" !== p.substr(-5) && "hsla(" !== p.substr(-5)) ||
                (c = 1),
            d !== (h = l[_++] || "") &&
              ((u = parseFloat(h) || 0),
              (g = h.substr((u + "").length)),
              (m = "=" === d.charAt(1) ? +(d.charAt(0) + "1") : 0) &&
                (d = d.substr(2)),
              (f = parseFloat(d)),
              (D = d.substr((f + "").length)),
              (y = Se.lastIndex - D.length),
              D ||
                ((D = D || oe.units[e] || g),
                y === r.length && ((r += D), (v.e += D))),
              g !== D && (u = Ln(t, e, h, D) || 0),
              (v._pt = {
                _next: v._pt,
                p: p || 1 === _ ? p : ",",
                s: u,
                c: m ? m * f : f - u,
                m: (c && c < 4) || "zIndex" === e ? Math.round : 0,
              }));
        v.c = y < r.length ? r.substring(y, r.length) : "";
      } else v.r = "display" === e && "none" === r ? fn : dn;
      return ke.test(r) && (v.e = 0), (this._pt = v), v;
    },
    jn = {
      top: "0%",
      bottom: "100%",
      left: "0%",
      right: "100%",
      center: "50%",
    },
    qn = function (t, e) {
      if (e.tween && e.tween._time === e.tween._dur) {
        var i,
          r,
          n,
          s = e.t,
          o = s.style,
          a = e.u,
          l = s._gsap;
        if ("all" === a || !0 === a) (o.cssText = ""), (r = 1);
        else
          for (n = (a = a.split(",")).length; --n > -1; )
            (i = a[n]),
              Jr[i] && ((r = 1), (i = "transformOrigin" === i ? wn : _n)),
              On(s, i);
        r &&
          (On(s, _n),
          l &&
            (l.svg && s.removeAttribute("transform"),
            Xn(s, 1),
            (l.uncache = 1)));
      }
    },
    zn = {
      clearProps: function (t, e, i, r, n) {
        if ("isFromStart" !== n.data) {
          var s = (t._pt = new Hr(t._pt, e, i, 0, 0, qn));
          return (s.u = r), (s.pr = -10), (s.tween = n), t._props.push(i), 1;
        }
      },
    },
    In = [1, 0, 0, 1, 0, 0],
    Hn = {},
    Vn = function (t) {
      return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t;
    },
    Wn = function (t) {
      var e = xn(t, _n);
      return Vn(e) ? In : e.substr(7).match(Te).map(Ze);
    },
    Nn = function (t, e) {
      var i,
        r,
        n,
        s,
        o = t._gsap || Ke(t),
        a = t.style,
        l = Wn(t);
      return o.svg && t.getAttribute("transform")
        ? "1,0,0,1,0,0" ===
          (l = [
            (n = t.transform.baseVal.consolidate().matrix).a,
            n.b,
            n.c,
            n.d,
            n.e,
            n.f,
          ]).join(",")
          ? In
          : l
        : (l !== In ||
            t.offsetParent ||
            t === Ur ||
            o.svg ||
            ((n = a.display),
            (a.display = "block"),
            ((i = t.parentNode) && t.offsetParent) ||
              ((s = 1), (r = t.nextSibling), Ur.appendChild(t)),
            (l = Wn(t)),
            n ? (a.display = n) : On(t, "display"),
            s &&
              (r
                ? i.insertBefore(t, r)
                : i
                ? i.appendChild(t)
                : Ur.removeChild(t))),
          e && l.length > 6 ? [l[0], l[1], l[4], l[5], l[12], l[13]] : l);
    },
    Yn = function (t, e, i, r, n, s) {
      var o,
        a,
        l,
        u = t._gsap,
        c = n || Nn(t, !0),
        h = u.xOrigin || 0,
        d = u.yOrigin || 0,
        f = u.xOffset || 0,
        p = u.yOffset || 0,
        D = c[0],
        g = c[1],
        m = c[2],
        v = c[3],
        y = c[4],
        _ = c[5],
        w = e.split(" "),
        b = parseFloat(w[0]) || 0,
        x = parseFloat(w[1]) || 0;
      i
        ? c !== In &&
          (a = D * v - g * m) &&
          ((l = b * (-g / a) + x * (D / a) - (D * _ - g * y) / a),
          (b = b * (v / a) + x * (-m / a) + (m * _ - v * y) / a),
          (x = l))
        : ((b = (o = An(t)).x + (~w[0].indexOf("%") ? (b / 100) * o.width : b)),
          (x =
            o.y + (~(w[1] || w[0]).indexOf("%") ? (x / 100) * o.height : x))),
        r || (!1 !== r && u.smooth)
          ? ((y = b - h),
            (_ = x - d),
            (u.xOffset = f + (y * D + _ * m) - y),
            (u.yOffset = p + (y * g + _ * v) - _))
          : (u.xOffset = u.yOffset = 0),
        (u.xOrigin = b),
        (u.yOrigin = x),
        (u.smooth = !!r),
        (u.origin = e),
        (u.originIsAbsolute = !!i),
        (t.style[wn] = "0px 0px"),
        s &&
          (Mn(s, u, "xOrigin", h, b),
          Mn(s, u, "yOrigin", d, x),
          Mn(s, u, "xOffset", f, u.xOffset),
          Mn(s, u, "yOffset", p, u.yOffset)),
        t.setAttribute("data-svg-origin", b + " " + x);
    },
    Xn = function (t, e) {
      var i = t._gsap || new gr(t);
      if ("x" in i && !e && !i.uncache) return i;
      var r,
        n,
        s,
        o,
        a,
        l,
        u,
        c,
        h,
        d,
        f,
        p,
        D,
        g,
        m,
        v,
        y,
        _,
        w,
        b,
        x,
        C,
        E,
        F,
        T,
        S,
        A,
        k,
        O,
        M,
        B,
        L,
        P = t.style,
        R = i.scaleX < 0,
        j = "px",
        q = "deg",
        z = xn(t, wn) || "0";
      return (
        (r = n = s = l = u = c = h = d = f = 0),
        (o = a = 1),
        (i.svg = !(!t.getCTM || !kn(t))),
        (g = Nn(t, i.svg)),
        i.svg &&
          ((F = !i.uncache && !e && t.getAttribute("data-svg-origin")),
          Yn(t, F || z, !!F || i.originIsAbsolute, !1 !== i.smooth, g)),
        (p = i.xOrigin || 0),
        (D = i.yOrigin || 0),
        g !== In &&
          ((_ = g[0]),
          (w = g[1]),
          (b = g[2]),
          (x = g[3]),
          (r = C = g[4]),
          (n = E = g[5]),
          6 === g.length
            ? ((o = Math.sqrt(_ * _ + w * w)),
              (a = Math.sqrt(x * x + b * b)),
              (l = _ || w ? rn(w, _) * tn : 0),
              (h = b || x ? rn(b, x) * tn + l : 0) &&
                (a *= Math.abs(Math.cos(h * en))),
              i.svg && ((r -= p - (p * _ + D * b)), (n -= D - (p * w + D * x))))
            : ((L = g[6]),
              (M = g[7]),
              (A = g[8]),
              (k = g[9]),
              (O = g[10]),
              (B = g[11]),
              (r = g[12]),
              (n = g[13]),
              (s = g[14]),
              (u = (m = rn(L, O)) * tn),
              m &&
                ((F = C * (v = Math.cos(-m)) + A * (y = Math.sin(-m))),
                (T = E * v + k * y),
                (S = L * v + O * y),
                (A = C * -y + A * v),
                (k = E * -y + k * v),
                (O = L * -y + O * v),
                (B = M * -y + B * v),
                (C = F),
                (E = T),
                (L = S)),
              (c = (m = rn(-b, O)) * tn),
              m &&
                ((v = Math.cos(-m)),
                (B = x * (y = Math.sin(-m)) + B * v),
                (_ = F = _ * v - A * y),
                (w = T = w * v - k * y),
                (b = S = b * v - O * y)),
              (l = (m = rn(w, _)) * tn),
              m &&
                ((F = _ * (v = Math.cos(m)) + w * (y = Math.sin(m))),
                (T = C * v + E * y),
                (w = w * v - _ * y),
                (E = E * v - C * y),
                (_ = F),
                (C = T)),
              u &&
                Math.abs(u) + Math.abs(l) > 359.9 &&
                ((u = l = 0), (c = 180 - c)),
              (o = Ze(Math.sqrt(_ * _ + w * w + b * b))),
              (a = Ze(Math.sqrt(E * E + L * L))),
              (m = rn(C, E)),
              (h = Math.abs(m) > 2e-4 ? m * tn : 0),
              (f = B ? 1 / (B < 0 ? -B : B) : 0)),
          i.svg &&
            ((F = t.getAttribute("transform")),
            (i.forceCSS = t.setAttribute("transform", "") || !Vn(xn(t, _n))),
            F && t.setAttribute("transform", F))),
        Math.abs(h) > 90 &&
          Math.abs(h) < 270 &&
          (R
            ? ((o *= -1),
              (h += l <= 0 ? 180 : -180),
              (l += l <= 0 ? 180 : -180))
            : ((a *= -1), (h += h <= 0 ? 180 : -180))),
        (i.x =
          r -
          ((i.xPercent =
            r &&
            (i.xPercent ||
              (Math.round(t.offsetWidth / 2) === Math.round(-r) ? -50 : 0)))
            ? (t.offsetWidth * i.xPercent) / 100
            : 0) +
          j),
        (i.y =
          n -
          ((i.yPercent =
            n &&
            (i.yPercent ||
              (Math.round(t.offsetHeight / 2) === Math.round(-n) ? -50 : 0)))
            ? (t.offsetHeight * i.yPercent) / 100
            : 0) +
          j),
        (i.z = s + j),
        (i.scaleX = Ze(o)),
        (i.scaleY = Ze(a)),
        (i.rotation = Ze(l) + q),
        (i.rotationX = Ze(u) + q),
        (i.rotationY = Ze(c) + q),
        (i.skewX = h + q),
        (i.skewY = d + q),
        (i.transformPerspective = f + j),
        (i.zOrigin = parseFloat(z.split(" ")[2]) || 0) && (P[wn] = Gn(z)),
        (i.xOffset = i.yOffset = 0),
        (i.force3D = oe.force3D),
        (i.renderTransform = i.svg ? ts : Zr ? Jn : Kn),
        (i.uncache = 0),
        i
      );
    },
    Gn = function (t) {
      return (t = t.split(" "))[0] + " " + t[1];
    },
    Un = function (t, e, i) {
      var r = Mi(e);
      return Ze(parseFloat(e) + parseFloat(Ln(t, "x", i + "px", r))) + r;
    },
    Kn = function (t, e) {
      (e.z = "0px"),
        (e.rotationY = e.rotationX = "0deg"),
        (e.force3D = 0),
        Jn(t, e);
    },
    $n = "0deg",
    Qn = "0px",
    Zn = ") ",
    Jn = function (t, e) {
      var i = e || this,
        r = i.xPercent,
        n = i.yPercent,
        s = i.x,
        o = i.y,
        a = i.z,
        l = i.rotation,
        u = i.rotationY,
        c = i.rotationX,
        h = i.skewX,
        d = i.skewY,
        f = i.scaleX,
        p = i.scaleY,
        D = i.transformPerspective,
        g = i.force3D,
        m = i.target,
        v = i.zOrigin,
        y = "",
        _ = ("auto" === g && t && 1 !== t) || !0 === g;
      if (v && (c !== $n || u !== $n)) {
        var w,
          b = parseFloat(u) * en,
          x = Math.sin(b),
          C = Math.cos(b);
        (b = parseFloat(c) * en),
          (w = Math.cos(b)),
          (s = Un(m, s, x * w * -v)),
          (o = Un(m, o, -Math.sin(b) * -v)),
          (a = Un(m, a, C * w * -v + v));
      }
      D !== Qn && (y += "perspective(" + D + Zn),
        (r || n) && (y += "translate(" + r + "%, " + n + "%) "),
        (_ || s !== Qn || o !== Qn || a !== Qn) &&
          (y +=
            a !== Qn || _
              ? "translate3d(" + s + ", " + o + ", " + a + ") "
              : "translate(" + s + ", " + o + Zn),
        l !== $n && (y += "rotate(" + l + Zn),
        u !== $n && (y += "rotateY(" + u + Zn),
        c !== $n && (y += "rotateX(" + c + Zn),
        (h === $n && d === $n) || (y += "skew(" + h + ", " + d + Zn),
        (1 === f && 1 === p) || (y += "scale(" + f + ", " + p + Zn),
        (m.style[_n] = y || "translate(0, 0)");
    },
    ts = function (t, e) {
      var i,
        r,
        n,
        s,
        o,
        a = e || this,
        l = a.xPercent,
        u = a.yPercent,
        c = a.x,
        h = a.y,
        d = a.rotation,
        f = a.skewX,
        p = a.skewY,
        D = a.scaleX,
        g = a.scaleY,
        m = a.target,
        v = a.xOrigin,
        y = a.yOrigin,
        _ = a.xOffset,
        w = a.yOffset,
        b = a.forceCSS,
        x = parseFloat(c),
        C = parseFloat(h);
      (d = parseFloat(d)),
        (f = parseFloat(f)),
        (p = parseFloat(p)) && ((f += p = parseFloat(p)), (d += p)),
        d || f
          ? ((d *= en),
            (f *= en),
            (i = Math.cos(d) * D),
            (r = Math.sin(d) * D),
            (n = Math.sin(d - f) * -g),
            (s = Math.cos(d - f) * g),
            f &&
              ((p *= en),
              (o = Math.tan(f - p)),
              (n *= o = Math.sqrt(1 + o * o)),
              (s *= o),
              p &&
                ((o = Math.tan(p)), (i *= o = Math.sqrt(1 + o * o)), (r *= o))),
            (i = Ze(i)),
            (r = Ze(r)),
            (n = Ze(n)),
            (s = Ze(s)))
          : ((i = D), (s = g), (r = n = 0)),
        ((x && !~(c + "").indexOf("px")) || (C && !~(h + "").indexOf("px"))) &&
          ((x = Ln(m, "x", c, "px")), (C = Ln(m, "y", h, "px"))),
        (v || y || _ || w) &&
          ((x = Ze(x + v - (v * i + y * n) + _)),
          (C = Ze(C + y - (v * r + y * s) + w))),
        (l || u) &&
          ((o = m.getBBox()),
          (x = Ze(x + (l / 100) * o.width)),
          (C = Ze(C + (u / 100) * o.height))),
        (o =
          "matrix(" +
          i +
          "," +
          r +
          "," +
          n +
          "," +
          s +
          "," +
          x +
          "," +
          C +
          ")"),
        m.setAttribute("transform", o),
        b && (m.style[_n] = o);
    },
    es = function (t, e, i, r, n, s) {
      var o,
        a,
        l = 360,
        u = ge(n),
        c = parseFloat(n) * (u && ~n.indexOf("rad") ? tn : 1),
        h = s ? c * s : c - r,
        d = r + h + "deg";
      return (
        u &&
          ("short" === (o = n.split("_")[1]) &&
            (h %= l) !== h % 180 &&
            (h += h < 0 ? l : -360),
          "cw" === o && h < 0
            ? (h = ((h + 36e9) % l) - ~~(h / l) * l)
            : "ccw" === o && h > 0 && (h = ((h - 36e9) % l) - ~~(h / l) * l)),
        (t._pt = a = new Hr(t._pt, e, i, r, h, un)),
        (a.e = d),
        (a.u = "deg"),
        t._props.push(i),
        a
      );
    },
    is = function (t, e) {
      for (var i in e) t[i] = e[i];
      return t;
    },
    rs = function (t, e, i) {
      var r,
        n,
        s,
        o,
        a,
        l,
        u,
        c = is({}, i._gsap),
        h = i.style;
      for (n in (c.svg
        ? ((s = i.getAttribute("transform")),
          i.setAttribute("transform", ""),
          (h[_n] = e),
          (r = Xn(i, 1)),
          On(i, _n),
          i.setAttribute("transform", s))
        : ((s = getComputedStyle(i)[_n]),
          (h[_n] = e),
          (r = Xn(i, 1)),
          (h[_n] = s)),
      Jr))
        (s = c[n]) !== (o = r[n]) &&
          "perspective,force3D,transformOrigin,svgOrigin".indexOf(n) < 0 &&
          ((a = Mi(s) !== (u = Mi(o)) ? Ln(i, n, s, u) : parseFloat(s)),
          (l = parseFloat(o)),
          (t._pt = new Hr(t._pt, r, n, a, l - a, ln)),
          (t._pt.u = u || 0),
          t._props.push(n));
      is(r, c);
    };
  Qe("padding,margin,Width,Radius", function (t, e) {
    var i = "Top",
      r = "Right",
      n = "Bottom",
      s = "Left",
      o = (e < 3 ? [i, r, n, s] : [i + s, i + r, n + r, n + s]).map(function (
        i
      ) {
        return e < 2 ? t + i : "border" + i + t;
      });
    zn[e > 1 ? "border" + t : t] = function (t, e, i, r, n) {
      var s, a;
      if (arguments.length < 4)
        return (
          (s = o.map(function (e) {
            return Pn(t, e, i);
          })),
          5 === (a = s.join(" ")).split(s[0]).length ? s[0] : a
        );
      (s = (r + "").split(" ")),
        (a = {}),
        o.forEach(function (t, e) {
          return (a[t] = s[e] = s[e] || s[((e - 1) / 2) | 0]);
        }),
        t.init(e, a, n);
    };
  });
  var ns,
    ss,
    os,
    as = {
      name: "css",
      register: Fn,
      targetTest: function (t) {
        return t.style && t.nodeType;
      },
      init: function (t, e, i, r, n) {
        var s,
          o,
          a,
          l,
          u,
          c,
          h,
          d,
          f,
          p,
          D,
          g,
          m,
          v,
          y,
          _,
          w,
          b,
          x,
          C = this._props,
          E = t.style,
          F = i.vars.startAt;
        for (h in (Kr || Fn(), e))
          if (
            "autoRound" !== h &&
            ((o = e[h]), !We[h] || !br(h, e, i, r, t, n))
          )
            if (
              ((u = typeof o),
              (c = zn[h]),
              "function" === u && (u = typeof (o = o.call(i, r, t, n))),
              "string" === u && ~o.indexOf("random(") && (o = Vi(o)),
              c)
            )
              c(this, t, h, o, i) && (y = 1);
            else if ("--" === h.substr(0, 2))
              (s = (getComputedStyle(t).getPropertyValue(h) + "").trim()),
                (o += ""),
                (tr.lastIndex = 0),
                tr.test(s) || ((d = Mi(s)), (f = Mi(o))),
                f ? d !== f && (s = Ln(t, h, s, f) + f) : d && (o += d),
                this.add(E, "setProperty", s, o, r, n, 0, 0, h);
            else if ("undefined" !== u) {
              if (
                (F && h in F
                  ? ((s =
                      "function" == typeof F[h] ? F[h].call(i, r, t, n) : F[h]),
                    h in oe.units && !Mi(s) && (s += oe.units[h]),
                    "=" === (s + "").charAt(1) && (s = Pn(t, h)))
                  : (s = Pn(t, h)),
                (l = parseFloat(s)),
                (p =
                  "string" === u && "=" === o.charAt(1)
                    ? +(o.charAt(0) + "1")
                    : 0) && (o = o.substr(2)),
                (a = parseFloat(o)),
                h in an &&
                  ("autoAlpha" === h &&
                    (1 === l &&
                      "hidden" === Pn(t, "visibility") &&
                      a &&
                      (l = 0),
                    Mn(
                      this,
                      E,
                      "visibility",
                      l ? "inherit" : "hidden",
                      a ? "inherit" : "hidden",
                      !a
                    )),
                  "scale" !== h &&
                    "transform" !== h &&
                    ~(h = an[h]).indexOf(",") &&
                    (h = h.split(",")[0])),
                (D = h in Jr))
              )
                if (
                  (g ||
                    (((m = t._gsap).renderTransform && !e.parseTransform) ||
                      Xn(t, e.parseTransform),
                    (v = !1 !== e.smoothOrigin && m.smooth),
                    ((g = this._pt =
                      new Hr(
                        this._pt,
                        E,
                        _n,
                        0,
                        1,
                        m.renderTransform,
                        m,
                        0,
                        -1
                      )).dep = 1)),
                  "scale" === h)
                )
                  (this._pt = new Hr(
                    this._pt,
                    m,
                    "scaleY",
                    m.scaleY,
                    p ? p * a : a - m.scaleY
                  )),
                    C.push("scaleY", h),
                    (h += "X");
                else {
                  if ("transformOrigin" === h) {
                    (w = void 0),
                      (b = void 0),
                      (x = void 0),
                      (w = (_ = o).split(" ")),
                      (b = w[0]),
                      (x = w[1] || "50%"),
                      ("top" !== b &&
                        "bottom" !== b &&
                        "left" !== x &&
                        "right" !== x) ||
                        ((_ = b), (b = x), (x = _)),
                      (w[0] = jn[b] || b),
                      (w[1] = jn[x] || x),
                      (o = w.join(" ")),
                      m.svg
                        ? Yn(t, o, 0, v, 0, this)
                        : ((f = parseFloat(o.split(" ")[2]) || 0) !==
                            m.zOrigin && Mn(this, m, "zOrigin", m.zOrigin, f),
                          Mn(this, E, h, Gn(s), Gn(o)));
                    continue;
                  }
                  if ("svgOrigin" === h) {
                    Yn(t, o, 1, v, 0, this);
                    continue;
                  }
                  if (h in Hn) {
                    es(this, m, h, l, o, p);
                    continue;
                  }
                  if ("smoothOrigin" === h) {
                    Mn(this, m, "smooth", m.smooth, o);
                    continue;
                  }
                  if ("force3D" === h) {
                    m[h] = o;
                    continue;
                  }
                  if ("transform" === h) {
                    rs(this, o, t);
                    continue;
                  }
                }
              else h in E || (h = En(h) || h);
              if (
                D ||
                ((a || 0 === a) && (l || 0 === l) && !on.test(o) && h in E)
              )
                a || (a = 0),
                  (d = (s + "").substr((l + "").length)) !==
                    (f = Mi(o) || (h in oe.units ? oe.units[h] : d)) &&
                    (l = Ln(t, h, s, f)),
                  (this._pt = new Hr(
                    this._pt,
                    D ? m : E,
                    h,
                    l,
                    p ? p * a : a - l,
                    D || ("px" !== f && "zIndex" !== h) || !1 === e.autoRound
                      ? ln
                      : hn
                  )),
                  (this._pt.u = f || 0),
                  d !== f && ((this._pt.b = s), (this._pt.r = cn));
              else if (h in E) Rn.call(this, t, h, s, o);
              else {
                if (!(h in t)) {
                  Re(h, o);
                  continue;
                }
                this.add(t, h, t[h], o, r, n);
              }
              C.push(h);
            }
        y && Ir(this);
      },
      get: Pn,
      aliases: an,
      getSetter: function (t, e, i) {
        var r = an[e];
        return (
          r && r.indexOf(",") < 0 && (e = r),
          e in Jr && e !== wn && (t._gsap.x || Pn(t, "x"))
            ? i && Qr === i
              ? "scale" === e
                ? mn
                : gn
              : (Qr = i || {}) && ("scale" === e ? vn : yn)
            : t.style && !ye(t.style[e])
            ? pn
            : ~e.indexOf("-")
            ? Dn
            : Mr(t, e)
        );
      },
      core: { _removeProperty: On, _getMatrix: Nn },
    };
  (Yr.utils.checkPrefix = En),
    (os = Qe(
      (ns = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent") +
        "," +
        (ss = "rotation,rotationX,rotationY,skewX,skewY") +
        ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
      function (t) {
        Jr[t] = 1;
      }
    )),
    Qe(ss, function (t) {
      (oe.units[t] = "deg"), (Hn[t] = 1);
    }),
    (an[os[13]] = ns + "," + ss),
    Qe(
      "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY",
      function (t) {
        var e = t.split(":");
        an[e[1]] = os[e[0]];
      }
    ),
    Qe(
      "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
      function (t) {
        oe.units[t] = "px";
      }
    ),
    Yr.registerPlugin(as);
  var ls = Yr.registerPlugin(as) || Yr,
    us = (ls.core.Tween, /[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi),
    cs = /[\+\-]?\d*\.?\d+e[\+\-]?\d+/gi,
    hs = Math.PI / 180,
    ds = (Math.PI, Math.sin),
    fs = Math.cos,
    ps = Math.abs,
    Ds = Math.sqrt,
    gs = (Math.atan2, 1e5),
    ms = function (t) {
      return Math.round(t * gs) / gs || 0;
    };
  /*!
   * paths 3.6.1
   * https://greensock.com
   *
   * Copyright 2008-2021, GreenSock. All rights reserved.
   * Subject to the terms at https://greensock.com/standard-license or for
   * Club GreenSock members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
   */ function vs(t, e, i, r, n, s, o, a, l) {
    if (t !== a || e !== l) {
      (i = ps(i)), (r = ps(r));
      var u = (n % 360) * hs,
        c = fs(u),
        h = ds(u),
        d = Math.PI,
        f = 2 * d,
        p = (t - a) / 2,
        D = (e - l) / 2,
        g = c * p + h * D,
        m = -h * p + c * D,
        v = g * g,
        y = m * m,
        _ = v / (i * i) + y / (r * r);
      _ > 1 && ((i = Ds(_) * i), (r = Ds(_) * r));
      var w = i * i,
        b = r * r,
        x = (w * b - w * y - b * v) / (w * y + b * v);
      x < 0 && (x = 0);
      var C = (s === o ? -1 : 1) * Ds(x),
        E = C * ((i * m) / r),
        F = C * ((-r * g) / i),
        T = (t + a) / 2 + (c * E - h * F),
        S = (e + l) / 2 + (h * E + c * F),
        A = (g - E) / i,
        k = (m - F) / r,
        O = (-g - E) / i,
        M = (-m - F) / r,
        B = A * A + k * k,
        L = (k < 0 ? -1 : 1) * Math.acos(A / Ds(B)),
        P =
          (A * M - k * O < 0 ? -1 : 1) *
          Math.acos((A * O + k * M) / Ds(B * (O * O + M * M)));
      isNaN(P) && (P = d),
        !o && P > 0 ? (P -= f) : o && P < 0 && (P += f),
        (L %= f),
        (P %= f);
      var R,
        j = Math.ceil(ps(P) / (f / 4)),
        q = [],
        z = P / j,
        I = ((4 / 3) * ds(z / 2)) / (1 + fs(z / 2)),
        H = c * i,
        V = h * i,
        W = h * -r,
        N = c * r;
      for (R = 0; R < j; R++)
        (g = fs((n = L + R * z))),
          (m = ds(n)),
          (A = fs((n += z))),
          (k = ds(n)),
          q.push(g - I * m, m + I * g, A + I * k, k - I * A, A, k);
      for (R = 0; R < q.length; R += 2)
        (g = q[R]),
          (m = q[R + 1]),
          (q[R] = g * H + m * W + T),
          (q[R + 1] = g * V + m * N + S);
      return (q[R - 2] = a), (q[R - 1] = l), q;
    }
  }
  var ys,
    _s,
    ws = function () {
      return (
        ys ||
        ("undefined" != typeof window &&
          (ys = window.gsap) &&
          ys.registerPlugin &&
          ys)
      );
    },
    bs = function () {
      (ys = ws())
        ? (ys.registerEase("_CE", Ts.create), (_s = 1))
        : console.warn("Please gsap.registerPlugin(CustomEase)");
    },
    xs = function (t) {
      return ~~(1e3 * t + (t < 0 ? -0.5 : 0.5)) / 1e3;
    },
    Cs = /[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,
    Es = /[cLlsSaAhHvVtTqQ]/g,
    Fs = function t(e, i, r, n, s, o, a, l, u, c, h) {
      var d,
        f = (e + r) / 2,
        p = (i + n) / 2,
        D = (r + s) / 2,
        g = (n + o) / 2,
        m = (s + a) / 2,
        v = (o + l) / 2,
        y = (f + D) / 2,
        _ = (p + g) / 2,
        w = (D + m) / 2,
        b = (g + v) / 2,
        x = (y + w) / 2,
        C = (_ + b) / 2,
        E = a - e,
        F = l - i,
        T = Math.abs((r - a) * F - (n - l) * E),
        S = Math.abs((s - a) * F - (o - l) * E);
      return (
        c ||
          ((c = [
            { x: e, y: i },
            { x: a, y: l },
          ]),
          (h = 1)),
        c.splice(h || c.length - 1, 0, { x: x, y: C }),
        (T + S) * (T + S) > u * (E * E + F * F) &&
          ((d = c.length),
          t(e, i, f, p, y, _, x, C, u, c, h),
          t(x, C, w, b, m, v, a, l, u, c, h + 1 + (c.length - d))),
        c
      );
    },
    Ts = (function () {
      function t(t, e, i) {
        _s || bs(), (this.id = t), this.setData(e, i);
      }
      var e = t.prototype;
      return (
        (e.setData = function (t, e) {
          e = e || {};
          var i,
            r,
            n,
            s,
            o,
            a,
            l,
            u,
            c,
            h = (t = t || "0,0,1,1").match(Cs),
            d = 1,
            f = [],
            p = [],
            D = e.precision || 1,
            g = D <= 1;
          if (
            ((this.data = t),
            (Es.test(t) || (~t.indexOf("M") && t.indexOf("C") < 0)) &&
              (h = (function (t) {
                var e,
                  i,
                  r,
                  n,
                  s,
                  o,
                  a,
                  l,
                  u,
                  c,
                  h,
                  d,
                  f,
                  p,
                  D,
                  g =
                    (t + "")
                      .replace(cs, function (t) {
                        var e = +t;
                        return e < 1e-4 && e > -1e-4 ? 0 : e;
                      })
                      .match(us) || [],
                  m = [],
                  v = 0,
                  y = 0,
                  _ = 2 / 3,
                  w = g.length,
                  b = 0,
                  x = "ERROR: malformed path: " + t,
                  C = function (t, e, i, r) {
                    (c = (i - t) / 3),
                      (h = (r - e) / 3),
                      a.push(t + c, e + h, i - c, r - h, i, r);
                  };
                if (!t || !isNaN(g[0]) || isNaN(g[1])) return console.log(x), m;
                for (e = 0; e < w; e++)
                  if (
                    ((f = s),
                    isNaN(g[e]) ? (o = (s = g[e].toUpperCase()) !== g[e]) : e--,
                    (r = +g[e + 1]),
                    (n = +g[e + 2]),
                    o && ((r += v), (n += y)),
                    e || ((l = r), (u = n)),
                    "M" === s)
                  )
                    a && (a.length < 8 ? (m.length -= 1) : (b += a.length)),
                      (v = l = r),
                      (y = u = n),
                      (a = [r, n]),
                      m.push(a),
                      (e += 2),
                      (s = "L");
                  else if ("C" === s)
                    a || (a = [0, 0]),
                      o || (v = y = 0),
                      a.push(
                        r,
                        n,
                        v + 1 * g[e + 3],
                        y + 1 * g[e + 4],
                        (v += 1 * g[e + 5]),
                        (y += 1 * g[e + 6])
                      ),
                      (e += 6);
                  else if ("S" === s)
                    (c = v),
                      (h = y),
                      ("C" !== f && "S" !== f) ||
                        ((c += v - a[a.length - 4]),
                        (h += y - a[a.length - 3])),
                      o || (v = y = 0),
                      a.push(
                        c,
                        h,
                        r,
                        n,
                        (v += 1 * g[e + 3]),
                        (y += 1 * g[e + 4])
                      ),
                      (e += 4);
                  else if ("Q" === s)
                    (c = v + (r - v) * _),
                      (h = y + (n - y) * _),
                      o || (v = y = 0),
                      (v += 1 * g[e + 3]),
                      (y += 1 * g[e + 4]),
                      a.push(c, h, v + (r - v) * _, y + (n - y) * _, v, y),
                      (e += 4);
                  else if ("T" === s)
                    (c = v - a[a.length - 4]),
                      (h = y - a[a.length - 3]),
                      a.push(
                        v + c,
                        y + h,
                        r + (v + 1.5 * c - r) * _,
                        n + (y + 1.5 * h - n) * _,
                        (v = r),
                        (y = n)
                      ),
                      (e += 2);
                  else if ("H" === s) C(v, y, (v = r), y), (e += 1);
                  else if ("V" === s)
                    C(v, y, v, (y = r + (o ? y - v : 0))), (e += 1);
                  else if ("L" === s || "Z" === s)
                    "Z" === s && ((r = l), (n = u), (a.closed = !0)),
                      ("L" === s || ps(v - r) > 0.5 || ps(y - n) > 0.5) &&
                        (C(v, y, r, n), "L" === s && (e += 2)),
                      (v = r),
                      (y = n);
                  else if ("A" === s) {
                    if (
                      ((p = g[e + 4]),
                      (D = g[e + 5]),
                      (c = g[e + 6]),
                      (h = g[e + 7]),
                      (i = 7),
                      p.length > 1 &&
                        (p.length < 3
                          ? ((h = c), (c = D), i--)
                          : ((h = D), (c = p.substr(2)), (i -= 2)),
                        (D = p.charAt(1)),
                        (p = p.charAt(0))),
                      (d = vs(
                        v,
                        y,
                        +g[e + 1],
                        +g[e + 2],
                        +g[e + 3],
                        +p,
                        +D,
                        (o ? v : 0) + 1 * c,
                        (o ? y : 0) + 1 * h
                      )),
                      (e += i),
                      d)
                    )
                      for (i = 0; i < d.length; i++) a.push(d[i]);
                    (v = a[a.length - 2]), (y = a[a.length - 1]);
                  } else console.log(x);
                return (
                  (e = a.length) < 6
                    ? (m.pop(), (e = 0))
                    : a[0] === a[e - 2] && a[1] === a[e - 1] && (a.closed = !0),
                  (m.totalPoints = b + e),
                  m
                );
              })(t)[0]),
            4 === (i = h.length))
          )
            h.unshift(0, 0), h.push(1, 1), (i = 8);
          else if ((i - 2) % 6) throw "Invalid CustomEase";
          for (
            (0 == +h[0] && 1 == +h[i - 2]) ||
              (function (t, e, i) {
                i || 0 === i || (i = Math.max(+t[t.length - 1], +t[1]));
                var r,
                  n = -1 * +t[0],
                  s = -i,
                  o = t.length,
                  a = 1 / (+t[o - 2] + n),
                  l =
                    -e ||
                    (Math.abs(+t[o - 1] - +t[1]) < 0.01 * (+t[o - 2] - +t[0])
                      ? (function (t) {
                          var e,
                            i = t.length,
                            r = 1e20;
                          for (e = 1; e < i; e += 6) +t[e] < r && (r = +t[e]);
                          return r;
                        })(t) + s
                      : +t[o - 1] + s);
                for (l = l ? 1 / l : -a, r = 0; r < o; r += 2)
                  (t[r] = (+t[r] + n) * a), (t[r + 1] = (+t[r + 1] + s) * l);
              })(h, e.height, e.originY),
              this.segment = h,
              s = 2;
            s < i;
            s += 6
          )
            (r = { x: +h[s - 2], y: +h[s - 1] }),
              (n = { x: +h[s + 4], y: +h[s + 5] }),
              f.push(r, n),
              Fs(
                r.x,
                r.y,
                +h[s],
                +h[s + 1],
                +h[s + 2],
                +h[s + 3],
                n.x,
                n.y,
                1 / (2e5 * D),
                f,
                f.length - 1
              );
          for (i = f.length, s = 0; s < i; s++)
            (l = f[s]),
              (u = f[s - 1] || l),
              (l.x > u.x || (u.y !== l.y && u.x === l.x) || l === u) && l.x <= 1
                ? ((u.cx = l.x - u.x),
                  (u.cy = l.y - u.y),
                  (u.n = l),
                  (u.nx = l.x),
                  g &&
                    s > 1 &&
                    Math.abs(u.cy / u.cx - f[s - 2].cy / f[s - 2].cx) > 2 &&
                    (g = 0),
                  u.cx < d &&
                    (u.cx
                      ? (d = u.cx)
                      : ((u.cx = 0.001),
                        s === i - 1 &&
                          ((u.x -= 0.001), (d = Math.min(d, 0.001)), (g = 0)))))
                : (f.splice(s--, 1), i--);
          if (((o = 1 / (i = (1 / d + 1) | 0)), (a = 0), (l = f[0]), g)) {
            for (s = 0; s < i; s++)
              (c = s * o),
                l.nx < c && (l = f[++a]),
                (r = l.y + ((c - l.x) / l.cx) * l.cy),
                (p[s] = { x: c, cx: o, y: r, cy: 0, nx: 9 }),
                s && (p[s - 1].cy = r - p[s - 1].y);
            p[i - 1].cy = f[f.length - 1].y - r;
          } else {
            for (s = 0; s < i; s++) l.nx < s * o && (l = f[++a]), (p[s] = l);
            a < f.length - 1 && (p[s - 1] = f[f.length - 2]);
          }
          return (
            (this.ease = function (t) {
              var e = p[(t * i) | 0] || p[i - 1];
              return e.nx < t && (e = e.n), e.y + ((t - e.x) / e.cx) * e.cy;
            }),
            (this.ease.custom = this),
            this.id && ys.registerEase(this.id, this.ease),
            this
          );
        }),
        (e.getSVGData = function (e) {
          return t.getSVGData(this, e);
        }),
        (t.create = function (e, i, r) {
          return new t(e, i, r).ease;
        }),
        (t.register = function (t) {
          (ys = t), bs();
        }),
        (t.get = function (t) {
          return ys.parseEase(t);
        }),
        (t.getSVGData = function (e, i) {
          var r,
            n,
            s,
            o,
            a,
            l,
            u,
            c,
            h,
            d,
            f = (i = i || {}).width || 100,
            p = i.height || 100,
            D = i.x || 0,
            g = (i.y || 0) + p,
            m = ys.utils.toArray(i.path)[0];
          if (
            (i.invert && ((p = -p), (g = 0)),
            "string" == typeof e && (e = ys.parseEase(e)),
            e.custom && (e = e.custom),
            e instanceof t)
          )
            r = (function (t) {
              "number" == typeof t[0] && (t = [t]);
              var e,
                i,
                r,
                n,
                s = "",
                o = t.length;
              for (i = 0; i < o; i++) {
                for (
                  n = t[i],
                    s += "M" + ms(n[0]) + "," + ms(n[1]) + " C",
                    e = n.length,
                    r = 2;
                  r < e;
                  r++
                )
                  s +=
                    ms(n[r++]) +
                    "," +
                    ms(n[r++]) +
                    " " +
                    ms(n[r++]) +
                    "," +
                    ms(n[r++]) +
                    " " +
                    ms(n[r++]) +
                    "," +
                    ms(n[r]) +
                    " ";
                n.closed && (s += "z");
              }
              return s;
            })(
              (function (t, e, i, r, n, s, o) {
                for (var a, l, u, c, h, d = t.length; --d > -1; )
                  for (l = (a = t[d]).length, u = 0; u < l; u += 2)
                    (c = a[u]),
                      (h = a[u + 1]),
                      (a[u] = c * e + h * r + s),
                      (a[u + 1] = c * i + h * n + o);
                return (t._dirty = 1), t;
              })([e.segment], f, 0, 0, -p, D, g)
            );
          else {
            for (
              r = [D, g],
                o = 1 / (u = Math.max(5, 200 * (i.precision || 1))),
                c = 5 / (u += 2),
                h = xs(D + o * f),
                n = ((d = xs(g + e(o) * -p)) - g) / (h - D),
                s = 2;
              s < u;
              s++
            )
              (a = xs(D + s * o * f)),
                (l = xs(g + e(s * o) * -p)),
                (Math.abs((l - d) / (a - h) - n) > c || s === u - 1) &&
                  (r.push(h, d), (n = (l - d) / (a - h))),
                (h = a),
                (d = l);
            r = "M" + r.join(",");
          }
          return m && m.setAttribute("d", r), r;
        }),
        t
      );
    })();
  ws() && ys.registerPlugin(Ts), (Ts.version = "3.6.1"), ls.registerPlugin(Ts);
  let Ss = Ts.create(
    "smooth",
    "M0,0 C0.084,0.514 0.208,0.69 0.3,0.8 0.422,0.92 0.496,1 1,1"
  );
  /*!
   * DrawSVGPlugin 3.4.0
   * https://greensock.com
   *
   * @license Copyright 2008-2020, GreenSock. All rights reserved.
   * Subject to the terms at https://greensock.com/standard-license or for
   * Club GreenSock members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
   */ var As,
    ks,
    Os,
    Ms,
    Bs,
    Ls = function () {
      return "undefined" != typeof window;
    },
    Ps = function () {
      return As || (Ls() && (As = window.gsap) && As.registerPlugin && As);
    },
    Rs = /[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,
    js = {
      rect: ["width", "height"],
      circle: ["r", "r"],
      ellipse: ["rx", "ry"],
      line: ["x2", "y2"],
    },
    qs = function (t) {
      return Math.round(1e4 * t) / 1e4;
    },
    zs = function (t) {
      return parseFloat(t || 0);
    },
    Is = function (t, e) {
      return zs(t.getAttribute(e));
    },
    Hs = Math.sqrt,
    Vs = function (t, e, i, r, n, s) {
      return Hs(
        Math.pow((zs(i) - zs(t)) * n, 2) + Math.pow((zs(r) - zs(e)) * s, 2)
      );
    },
    Ws = function (t) {
      return console.warn(t);
    },
    Ns = function (t) {
      return "non-scaling-stroke" === t.getAttribute("vector-effect");
    },
    Ys = function (t) {
      if (!(t = ks(t)[0])) return 0;
      var e,
        i,
        r,
        n,
        s,
        o,
        a,
        l = t.tagName.toLowerCase(),
        u = t.style,
        c = 1,
        h = 1;
      Ns(t) &&
        ((h = t.getScreenCTM()),
        (c = Hs(h.a * h.a + h.b * h.b)),
        (h = Hs(h.d * h.d + h.c * h.c)));
      try {
        i = t.getBBox();
      } catch (t) {
        Ws(
          "Some browsers won't measure invisible elements (like display:none or masks inside defs)."
        );
      }
      var d = i || { x: 0, y: 0, width: 0, height: 0 },
        f = d.x,
        p = d.y,
        D = d.width,
        g = d.height;
      if (
        ((i && (D || g)) ||
          !js[l] ||
          ((D = Is(t, js[l][0])),
          (g = Is(t, js[l][1])),
          "rect" !== l && "line" !== l && ((D *= 2), (g *= 2)),
          "line" === l &&
            ((f = Is(t, "x1")),
            (p = Is(t, "y1")),
            (D = Math.abs(D - f)),
            (g = Math.abs(g - p)))),
        "path" === l)
      )
        (n = u.strokeDasharray),
          (u.strokeDasharray = "none"),
          (e = t.getTotalLength() || 0),
          c !== h &&
            Ws(
              "Warning: <path> length cannot be measured when vector-effect is non-scaling-stroke and the element isn't proportionally scaled."
            ),
          (e *= (c + h) / 2),
          (u.strokeDasharray = n);
      else if ("rect" === l) e = 2 * D * c + 2 * g * h;
      else if ("line" === l) e = Vs(f, p, f + D, p + g, c, h);
      else if ("polyline" === l || "polygon" === l)
        for (
          r = t.getAttribute("points").match(Rs) || [],
            "polygon" === l && r.push(r[0], r[1]),
            e = 0,
            s = 2;
          s < r.length;
          s += 2
        )
          e += Vs(r[s - 2], r[s - 1], r[s], r[s + 1], c, h) || 0;
      else
        ("circle" !== l && "ellipse" !== l) ||
          ((o = (D / 2) * c),
          (a = (g / 2) * h),
          (e = Math.PI * (3 * (o + a) - Hs((3 * o + a) * (o + 3 * a)))));
      return e || 0;
    },
    Xs = function (t, e) {
      if (!(t = ks(t)[0])) return [0, 0];
      e || (e = Ys(t) + 1);
      var i = Os.getComputedStyle(t),
        r = i.strokeDasharray || "",
        n = zs(i.strokeDashoffset),
        s = r.indexOf(",");
      return (
        s < 0 && (s = r.indexOf(" ")),
        (r = s < 0 ? e : zs(r.substr(0, s)) || 1e-5) > e && (r = e),
        [Math.max(0, -n), Math.max(0, r - n)]
      );
    },
    Gs = function () {
      Ls() &&
        (document,
        (Os = window),
        (Bs = As = Ps()),
        (ks = As.utils.toArray),
        (Ms = -1 !== ((Os.navigator || {}).userAgent || "").indexOf("Edge")));
    },
    Us = {
      version: "3.4.0",
      name: "drawSVG",
      register: function (t) {
        (As = t), Gs();
      },
      init: function (t, e, i, r, n) {
        if (!t.getBBox) return !1;
        Bs || Gs();
        var s,
          o,
          a,
          l,
          u = Ys(t) + 1;
        return (
          (this._style = t.style),
          (this._target = t),
          e + "" == "true"
            ? (e = "0 100%")
            : e
            ? -1 === (e + "").indexOf(" ") && (e = "0 " + e)
            : (e = "0 0"),
          (o = (function (t, e, i) {
            var r,
              n,
              s = t.indexOf(" ");
            return (
              s < 0
                ? ((r = void 0 !== i ? i + "" : t), (n = t))
                : ((r = t.substr(0, s)), (n = t.substr(s + 1))),
              (r = ~r.indexOf("%") ? (zs(r) / 100) * e : zs(r)) >
              (n = ~n.indexOf("%") ? (zs(n) / 100) * e : zs(n))
                ? [n, r]
                : [r, n]
            );
          })(e, u, (s = Xs(t, u))[0])),
          (this._length = qs(u + 10)),
          0 === s[0] && 0 === o[0]
            ? ((a = Math.max(1e-5, o[1] - u)),
              (this._dash = qs(u + a)),
              (this._offset = qs(u - s[1] + a)),
              (this._offsetPT = this.add(
                this,
                "_offset",
                this._offset,
                qs(u - o[1] + a)
              )))
            : ((this._dash = qs(s[1] - s[0]) || 1e-6),
              (this._offset = qs(-s[0])),
              (this._dashPT = this.add(
                this,
                "_dash",
                this._dash,
                qs(o[1] - o[0]) || 1e-5
              )),
              (this._offsetPT = this.add(
                this,
                "_offset",
                this._offset,
                qs(-o[0])
              ))),
          Ms &&
            (l = Os.getComputedStyle(t)).strokeLinecap !== l.strokeLinejoin &&
            ((o = zs(l.strokeMiterlimit)),
            this.add(t.style, "strokeMiterlimit", o, o + 0.01)),
          (this._live = Ns(t) || ~(e + "").indexOf("live")),
          this._props.push("drawSVG"),
          1
        );
      },
      render: function (t, e) {
        var i,
          r,
          n,
          s,
          o = e._pt,
          a = e._style;
        if (o) {
          for (
            e._live &&
            (i = Ys(e._target) + 11) !== e._length &&
            ((r = i / e._length),
            (e._length = i),
            (e._offsetPT.s *= r),
            (e._offsetPT.c *= r),
            e._dashPT
              ? ((e._dashPT.s *= r), (e._dashPT.c *= r))
              : (e._dash *= r));
            o;

          )
            o.r(t, o.d), (o = o._next);
          (n = e._dash),
            (s = e._offset),
            (i = e._length),
            (a.strokeDashoffset = e._offset),
            1 !== t && t
              ? (a.strokeDasharray = n + "px," + i + "px")
              : (n - s < 0.001 && i - n <= 10 && (a.strokeDashoffset = s + 1),
                (a.strokeDasharray =
                  s < 0.001 && i - n <= 10
                    ? "none"
                    : s === n
                    ? "0px, 999999px"
                    : n + "px," + i + "px"));
        }
      },
      getLength: Ys,
      getPosition: Xs,
    };
  Ps() && As.registerPlugin(Us);
  class Ks extends At.Transition {
    in({ from: t, to: e, trigger: i, done: r }) {
      ls.registerPlugin(Us),
        document.querySelector(".c-play__bg").classList.remove("--play");
      ls.timeline({ defaults: { ease: Ss } })
        .set(".c-home__bg", { zIndex: 1, opacity: 0, pointerEvents: "none" })
        .fromTo(
          e,
          { opacity: 0, y: "2.2%" },
          { opacity: 1, y: 0, duration: 0.8 }
        )
        .set(".c-play__bg", {
          y: "100%",
          clearProps: "zIndex",
          onComplete: () => {
            r();
          },
        })
        .from(
          ".js-hero-title .line-child",
          { y: "100%", stagger: 0.2, duration: 1.4 },
          "-=.8"
        )
        .from(".c-visual-line", { scaleX: 0, duration: 0.5 }, "-=1.2")
        .fromTo(
          "#v_path",
          { drawSVG: 0 },
          { drawSVG: "100%", duration: 0.5, ease: "power1.out" },
          "-=.8"
        )
        .fromTo(
          "#i_path",
          { drawSVG: 0 },
          { drawSVG: "100%", duration: 0.6, ease: "power1.out" },
          "-=.7"
        )
        .fromTo(
          "#s_path",
          { drawSVG: 0 },
          { drawSVG: "100%", duration: 0.8, ease: "power1.out" },
          "-=.6"
        )
        .fromTo(
          "#u_path",
          { drawSVG: 0 },
          { drawSVG: "100%", duration: 0.9, ease: "power1.out" },
          "-=.7"
        )
        .fromTo(
          "#a_path",
          { drawSVG: 0 },
          { drawSVG: "100%", duration: 1, ease: "power1.out" },
          "-=.4"
        )
        .fromTo(
          "#l_path",
          { drawSVG: 0 },
          { drawSVG: "100%", duration: 1.2, ease: Ss },
          "-=.5"
        )
        .fromTo(
          "#dot_path",
          { drawSVG: 0 },
          { drawSVG: "100%", duration: 0.3, ease: "power1.out" }
        )
        .from(
          ".c-title .o-title-small .line-child",
          { y: "100%", duration: 0.8, stagger: 0.14 },
          "-=2.8"
        );
    }
    out({ from: t, done: e }) {
      ls.timeline({ defaults: { ease: Ss } })
        .set(".c-play__bg", { opacity: 1 })
        .to(t, {
          y: "-2%",
          opacity: 0.2,
          duration: 0.7,
          ease: "Power4.out",
          onComplete: () => {
            _t.scrollTo(".c-play-title", { duration: 0, disableLerp: !0 }),
              _t.stop();
          },
        })
        .to(".c-play__bg", { y: 0, duration: 0.7 }, "-=.6")
        .set(".c-play__bg", {
          opacity: 1,
          onComplete: () => {
            t.remove(), _t.update(), e();
          },
        });
    }
  }
  class $s extends At.Transition {
    in({ from: t, to: e, trigger: i, done: r }) {
      ls.timeline({ defaults: { ease: Ss } })
        .fromTo(e, { opacity: 0 }, { opacity: 1 })
        .set(".c-play__bg", { zIndex: 1, opacity: 1 })
        .set(".c-home__bg", {
          y: "100%",
          opacity: 0,
          clearProps: "zIndex",
          onComplete: () => {
            r();
          },
        })
        .fromTo(
          ".js-hero-title .line-child",
          { y: "100%" },
          { y: "0", duration: 1 }
        )
        .fromTo(
          ".c-play-title > a",
          { x: "20%", opacity: 0 },
          { x: 0, opacity: 1, duration: 0.6 },
          "-=1"
        )
        .fromTo(
          ".js-play-row",
          { y: "50%", opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          "-=.5"
        );
    }
    out({ from: t, done: e }) {
      ls.timeline({ defaults: { ease: Ss } })
        .set(".c-home__bg", { zIndex: 9, opacity: 1 })
        .to(t, {
          y: "-2%",
          opacity: 0.2,
          duration: 0.9,
          onComplete: () => {
            _t.scrollTo(".c-title", { duration: 0, disableLerp: !0 }),
              _t.stop();
          },
        })
        .to(".c-home__bg", { y: "0", duration: 0.7 }, "-=.8")
        .set(".c-home__bg", { opacity: 1, pointerEvents: "none" })
        .set(".c-play__bg", {
          y: "0",
          opacity: 0,
          pointerEvents: "none",
          onComplete: () => {
            t.remove(), _t.update(), e();
          },
        });
    }
  }
  /*!
   * strings: 3.6.1
   * https://greensock.com
   *
   * Copyright 2008-2021, GreenSock. All rights reserved.
   * Subject to the terms at https://greensock.com/standard-license or for
   * Club GreenSock members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
   */ var Qs =
    /([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/;
  function Zs(t) {
    var e = t.nodeType,
      i = "";
    if (1 === e || 9 === e || 11 === e) {
      if ("string" == typeof t.textContent) return t.textContent;
      for (t = t.firstChild; t; t = t.nextSibling) i += Zs(t);
    } else if (3 === e || 4 === e) return t.nodeValue;
    return i;
  }
  var Js,
    to,
    eo,
    io = /(?:\r|\n|\t\t)/g,
    ro = /(?:\s\s+)/g,
    no = function (t) {
      return to.getComputedStyle(t);
    },
    so = Array.isArray,
    oo = [].slice,
    ao = function (t, e) {
      var i;
      return so(t)
        ? t
        : "string" == (i = typeof t) && !e && t
        ? oo.call(Js.querySelectorAll(t), 0)
        : t && "object" === i && "length" in t
        ? oo.call(t, 0)
        : t
        ? [t]
        : [];
    },
    lo = function (t) {
      return "absolute" === t.position || !0 === t.absolute;
    },
    uo = function (t, e) {
      for (var i, r = e.length; --r > -1; )
        if (((i = e[r]), t.substr(0, i.length) === i)) return i.length;
    },
    co = function (t, e) {
      void 0 === t && (t = "");
      var i = ~t.indexOf("++"),
        r = 1;
      return (
        i && (t = t.split("++").join("")),
        function () {
          return (
            "<" +
            e +
            " style='position:relative;display:inline-block;'" +
            (t ? " class='" + t + (i ? r++ : "") + "'>" : ">")
          );
        }
      );
    },
    ho = function t(e, i, r) {
      var n = e.nodeType;
      if (1 === n || 9 === n || 11 === n)
        for (e = e.firstChild; e; e = e.nextSibling) t(e, i, r);
      else (3 !== n && 4 !== n) || (e.nodeValue = e.nodeValue.split(i).join(r));
    },
    fo = function (t, e) {
      for (var i = e.length; --i > -1; ) t.push(e[i]);
    },
    po = function (t, e, i) {
      for (var r; t && t !== e; ) {
        if ((r = t._next || t.nextSibling))
          return r.textContent.charAt(0) === i;
        t = t.parentNode || t._parent;
      }
    },
    Do = function t(e) {
      var i,
        r,
        n = ao(e.childNodes),
        s = n.length;
      for (i = 0; i < s; i++)
        (r = n[i])._isSplit
          ? t(r)
          : (i && 3 === r.previousSibling.nodeType
              ? (r.previousSibling.nodeValue +=
                  3 === r.nodeType ? r.nodeValue : r.firstChild.nodeValue)
              : 3 !== r.nodeType && e.insertBefore(r.firstChild, r),
            e.removeChild(r));
    },
    go = function (t, e) {
      return parseFloat(e[t]) || 0;
    },
    mo = function (t, e, i, r, n, s, o) {
      var a,
        l,
        u,
        c,
        h,
        d,
        f,
        p,
        D,
        g,
        m,
        v,
        y = no(t),
        _ = go("paddingLeft", y),
        w = -999,
        b = go("borderBottomWidth", y) + go("borderTopWidth", y),
        x = go("borderLeftWidth", y) + go("borderRightWidth", y),
        C = go("paddingTop", y) + go("paddingBottom", y),
        E = go("paddingLeft", y) + go("paddingRight", y),
        F = 0.2 * go("fontSize", y),
        T = y.textAlign,
        S = [],
        A = [],
        k = [],
        O = e.wordDelimiter || " ",
        M = e.tag ? e.tag : e.span ? "span" : "div",
        B = e.type || e.split || "chars,words,lines",
        L = n && ~B.indexOf("lines") ? [] : null,
        P = ~B.indexOf("words"),
        R = ~B.indexOf("chars"),
        j = lo(e),
        q = e.linesClass,
        z = ~(q || "").indexOf("++"),
        I = [];
      for (
        z && (q = q.split("++").join("")),
          u = (l = t.getElementsByTagName("*")).length,
          h = [],
          a = 0;
        a < u;
        a++
      )
        h[a] = l[a];
      if (L || j)
        for (a = 0; a < u; a++)
          ((d = (c = h[a]).parentNode === t) || j || (R && !P)) &&
            ((v = c.offsetTop),
            L &&
              d &&
              Math.abs(v - w) > F &&
              ("BR" !== c.nodeName || 0 === a) &&
              ((f = []), L.push(f), (w = v)),
            j &&
              ((c._x = c.offsetLeft),
              (c._y = v),
              (c._w = c.offsetWidth),
              (c._h = c.offsetHeight)),
            L &&
              (((c._isSplit && d) ||
                (!R && d) ||
                (P && d) ||
                (!P &&
                  c.parentNode.parentNode === t &&
                  !c.parentNode._isSplit)) &&
                (f.push(c), (c._x -= _), po(c, t, O) && (c._wordEnd = !0)),
              "BR" === c.nodeName &&
                ((c.nextSibling && "BR" === c.nextSibling.nodeName) ||
                  0 === a) &&
                L.push([])));
      for (a = 0; a < u; a++)
        (d = (c = h[a]).parentNode === t),
          "BR" !== c.nodeName
            ? (j &&
                ((D = c.style),
                P ||
                  d ||
                  ((c._x += c.parentNode._x), (c._y += c.parentNode._y)),
                (D.left = c._x + "px"),
                (D.top = c._y + "px"),
                (D.position = "absolute"),
                (D.display = "block"),
                (D.width = c._w + 1 + "px"),
                (D.height = c._h + "px")),
              !P && R
                ? c._isSplit
                  ? ((c._next = c.nextSibling), c.parentNode.appendChild(c))
                  : c.parentNode._isSplit
                  ? ((c._parent = c.parentNode),
                    !c.previousSibling &&
                      c.firstChild &&
                      (c.firstChild._isFirst = !0),
                    c.nextSibling &&
                      " " === c.nextSibling.textContent &&
                      !c.nextSibling.nextSibling &&
                      I.push(c.nextSibling),
                    (c._next =
                      c.nextSibling && c.nextSibling._isFirst
                        ? null
                        : c.nextSibling),
                    c.parentNode.removeChild(c),
                    h.splice(a--, 1),
                    u--)
                  : d ||
                    ((v = !c.nextSibling && po(c.parentNode, t, O)),
                    c.parentNode._parent && c.parentNode._parent.appendChild(c),
                    v && c.parentNode.appendChild(Js.createTextNode(" ")),
                    "span" === M && (c.style.display = "inline"),
                    S.push(c))
                : c.parentNode._isSplit && !c._isSplit && "" !== c.innerHTML
                ? A.push(c)
                : R &&
                  !c._isSplit &&
                  ("span" === M && (c.style.display = "inline"), S.push(c)))
            : L || j
            ? (c.parentNode && c.parentNode.removeChild(c),
              h.splice(a--, 1),
              u--)
            : P || t.appendChild(c);
      for (a = I.length; --a > -1; ) I[a].parentNode.removeChild(I[a]);
      if (L) {
        for (
          j &&
            ((g = Js.createElement(M)),
            t.appendChild(g),
            (m = g.offsetWidth + "px"),
            (v = g.offsetParent === t ? 0 : t.offsetLeft),
            t.removeChild(g)),
            D = t.style.cssText,
            t.style.cssText = "display:none;";
          t.firstChild;

        )
          t.removeChild(t.firstChild);
        for (p = " " === O && (!j || (!P && !R)), a = 0; a < L.length; a++) {
          for (
            f = L[a],
              (g = Js.createElement(M)).style.cssText =
                "display:block;text-align:" +
                T +
                ";position:" +
                (j ? "absolute;" : "relative;"),
              q && (g.className = q + (z ? a + 1 : "")),
              k.push(g),
              u = f.length,
              l = 0;
            l < u;
            l++
          )
            "BR" !== f[l].nodeName &&
              ((c = f[l]),
              g.appendChild(c),
              p && c._wordEnd && g.appendChild(Js.createTextNode(" ")),
              j &&
                (0 === l &&
                  ((g.style.top = c._y + "px"), (g.style.left = _ + v + "px")),
                (c.style.top = "0px"),
                v && (c.style.left = c._x - v + "px")));
          0 === u
            ? (g.innerHTML = "&nbsp;")
            : P || R || (Do(g), ho(g, String.fromCharCode(160), " ")),
            j && ((g.style.width = m), (g.style.height = c._h + "px")),
            t.appendChild(g);
        }
        t.style.cssText = D;
      }
      j &&
        (o > t.clientHeight &&
          ((t.style.height = o - C + "px"),
          t.clientHeight < o && (t.style.height = o + b + "px")),
        s > t.clientWidth &&
          ((t.style.width = s - E + "px"),
          t.clientWidth < s && (t.style.width = s + x + "px"))),
        fo(i, S),
        P && fo(r, A),
        fo(n, k);
    },
    vo = function (t, e, i, r) {
      var n,
        s,
        o,
        a,
        l,
        u,
        c,
        h,
        d = e.tag ? e.tag : e.span ? "span" : "div",
        f = ~(e.type || e.split || "chars,words,lines").indexOf("chars"),
        p = lo(e),
        D = e.wordDelimiter || " ",
        g = " " !== D ? "" : p ? "&#173; " : " ",
        m = "</" + d + ">",
        v = 1,
        y = e.specialChars
          ? "function" == typeof e.specialChars
            ? e.specialChars
            : uo
          : null,
        _ = Js.createElement("div"),
        w = t.parentNode;
      for (
        w.insertBefore(_, t),
          _.textContent = t.nodeValue,
          w.removeChild(t),
          c = -1 !== (n = Zs((t = _))).indexOf("<"),
          !1 !== e.reduceWhiteSpace && (n = n.replace(ro, " ").replace(io, "")),
          c && (n = n.split("<").join("{{LT}}")),
          l = n.length,
          s = (" " === n.charAt(0) ? g : "") + i(),
          o = 0;
        o < l;
        o++
      )
        if (((u = n.charAt(o)), y && (h = y(n.substr(o), e.specialChars))))
          (u = n.substr(o, h || 1)),
            (s += f && " " !== u ? r() + u + "</" + d + ">" : u),
            (o += h - 1);
        else if (u === D && n.charAt(o - 1) !== D && o) {
          for (s += v ? m : "", v = 0; n.charAt(o + 1) === D; ) (s += g), o++;
          o === l - 1
            ? (s += g)
            : ")" !== n.charAt(o + 1) && ((s += g + i()), (v = 1));
        } else
          "{" === u && "{{LT}}" === n.substr(o, 6)
            ? ((s += f ? r() + "{{LT}}</" + d + ">" : "{{LT}}"), (o += 5))
            : (u.charCodeAt(0) >= 55296 && u.charCodeAt(0) <= 56319) ||
              (n.charCodeAt(o + 1) >= 65024 && n.charCodeAt(o + 1) <= 65039)
            ? ((a = ((n.substr(o, 12).split(Qs) || [])[1] || "").length || 2),
              (s +=
                f && " " !== u
                  ? r() + n.substr(o, a) + "</" + d + ">"
                  : n.substr(o, a)),
              (o += a - 1))
            : (s += f && " " !== u ? r() + u + "</" + d + ">" : u);
      (t.outerHTML = s + (v ? m : "")), c && ho(w, "{{LT}}", "<");
    },
    yo = function t(e, i, r, n) {
      var s,
        o,
        a = ao(e.childNodes),
        l = a.length,
        u = lo(i);
      if (3 !== e.nodeType || l > 1) {
        for (i.absolute = !1, s = 0; s < l; s++)
          (3 !== (o = a[s]).nodeType || /\S+/.test(o.nodeValue)) &&
            (u &&
              3 !== o.nodeType &&
              "inline" === no(o).display &&
              ((o.style.display = "inline-block"),
              (o.style.position = "relative")),
            (o._isSplit = !0),
            t(o, i, r, n));
        return (i.absolute = u), void (e._isSplit = !0);
      }
      vo(e, i, r, n);
    },
    _o = (function () {
      function t(t, e) {
        eo || ((Js = document), (to = window), (eo = 1)),
          (this.elements = ao(t)),
          (this.chars = []),
          (this.words = []),
          (this.lines = []),
          (this._originals = []),
          (this.vars = e || {}),
          this.split(e);
      }
      var e = t.prototype;
      return (
        (e.split = function (t) {
          this.isSplit && this.revert(),
            (this.vars = t = t || this.vars),
            (this._originals.length =
              this.chars.length =
              this.words.length =
              this.lines.length =
                0);
          for (
            var e,
              i,
              r,
              n = this.elements.length,
              s = t.tag ? t.tag : t.span ? "span" : "div",
              o = co(t.wordsClass, s),
              a = co(t.charsClass, s);
            --n > -1;

          )
            (r = this.elements[n]),
              (this._originals[n] = r.innerHTML),
              (e = r.clientHeight),
              (i = r.clientWidth),
              yo(r, t, o, a),
              mo(r, t, this.chars, this.words, this.lines, i, e);
          return (
            this.chars.reverse(),
            this.words.reverse(),
            this.lines.reverse(),
            (this.isSplit = !0),
            this
          );
        }),
        (e.revert = function () {
          var t = this._originals;
          if (!t) throw "revert() call wasn't scoped properly.";
          return (
            this.elements.forEach(function (e, i) {
              return (e.innerHTML = t[i]);
            }),
            (this.chars = []),
            (this.words = []),
            (this.lines = []),
            (this.isSplit = !1),
            this
          );
        }),
        (t.create = function (e, i) {
          return new t(e, i);
        }),
        t
      );
    })();
  _o.version = "3.4.0";
  var wo,
    bo,
    xo = !1;
  function Co() {
    return (
      bo ||
        (bo = (function () {
          try {
            throw new Error();
          } catch (e) {
            var t = ("" + e.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);
            if (t)
              return (
                ("" + t[0]).replace(
                  /^((?:https?|file|ftp):\/\/.+)\/[^/]+$/,
                  "$1"
                ) + "/"
              );
          }
          return "/";
        })()),
      bo
    );
  }
  function Eo() {
    return xo || ((xo = !0), (bo = null), ((wo = {}).getBundleURL = Co)), wo;
  }
  var Fo,
    To,
    So,
    Ao,
    ko = !1;
  function Oo(t) {
    if ("" === t) return ".";
    var e = "/" === t[t.length - 1] ? t.slice(0, t.length - 1) : t,
      i = e.lastIndexOf("/");
    return -1 === i ? "." : e.slice(0, i);
  }
  function Mo(t, e) {
    if (t === e) return "";
    var i = t.split("/");
    "." === i[0] && i.shift();
    var r,
      n,
      s = e.split("/");
    for (
      "." === s[0] && s.shift(), r = 0;
      (r < s.length || r < i.length) && null == n;
      r++
    )
      i[r] !== s[r] && (n = r);
    var o = [];
    for (r = 0; r < i.length - n; r++) o.push("..");
    return s.length > n && o.push.apply(o, s.slice(n)), o.join("/");
  }
  function Bo() {
    return (
      ko ||
        ((ko = !0),
        (Fo = {}),
        (To = a().resolve),
        (Fo = function (t, e) {
          return Mo(Oo(To(t)), To(e));
        }),
        (So = Oo),
        (Fo._dirname = So),
        (Ao = Mo),
        (Fo._relative = Ao)),
      Fo
    );
  }
  var Lo,
    Po = !1;
  function Ro() {
    return (
      Po ||
        ((Po = !0),
        (Lo = {}),
        (Lo = Eo().getBundleURL() + Bo()("KAtDQ", "2j8SH"))),
      Lo
    );
  }
  var jo,
    qo = !1;
  function zo() {
    return (
      qo ||
        ((qo = !0),
        (jo = {}),
        (jo = Eo().getBundleURL() + Bo()("KAtDQ", "7G9gf"))),
      jo
    );
  }
  var Io,
    Ho = !1;
  function Vo() {
    return (
      Ho ||
        ((Ho = !0),
        (Io = {}),
        (Io = Eo().getBundleURL() + Bo()("KAtDQ", "72luJ"))),
      Io
    );
  }
  /*!
   * ScrollTrigger 3.6.1
   * https://greensock.com
   *
   * @license Copyright 2008-2021, GreenSock. All rights reserved.
   * Subject to the terms at https://greensock.com/standard-license or for
   * Club GreenSock members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
   */ var Wo,
    No,
    Yo,
    Xo,
    Go,
    Uo,
    Ko,
    $o,
    Qo,
    Zo,
    Jo,
    ta,
    ea,
    ia,
    ra,
    na,
    sa,
    oa,
    aa,
    la,
    ua,
    ca,
    ha,
    da,
    fa,
    pa,
    Da,
    ga = 1,
    ma = [],
    va = [],
    ya = Date.now,
    _a = ya(),
    wa = 0,
    ba = 1,
    xa = function (t) {
      return t;
    },
    Ca = function (t) {
      return Math.round(1e5 * t) / 1e5 || 0;
    },
    Ea = function () {
      return "undefined" != typeof window;
    },
    Fa = function () {
      return Wo || (Ea() && (Wo = window.gsap) && Wo.registerPlugin && Wo);
    },
    Ta = function (t) {
      return !!~Ko.indexOf(t);
    },
    Sa = function (t, e) {
      return ~ma.indexOf(t) && ma[ma.indexOf(t) + 1][e];
    },
    Aa = function (t, e) {
      var i = e.s,
        r = e.sc,
        n = va.indexOf(t),
        s = r === nl.sc ? 1 : 2;
      return (
        !~n && (n = va.push(t) - 1),
        va[n + s] ||
          (va[n + s] =
            Sa(t, i) ||
            (Ta(t)
              ? r
              : function (e) {
                  return arguments.length ? (t[i] = e) : t[i];
                }))
      );
    },
    ka = function (t) {
      return (
        Sa(t, "getBoundingClientRect") ||
        (Ta(t)
          ? function () {
              return (
                (Wl.width = Yo.innerWidth), (Wl.height = Yo.innerHeight), Wl
              );
            }
          : function () {
              return al(t);
            })
      );
    },
    Oa = function (t, e) {
      var i = e.s,
        r = e.d2,
        n = e.d,
        s = e.a;
      return (i = "scroll" + r) && (s = Sa(t, i))
        ? s() - ka(t)()[n]
        : Ta(t)
        ? Math.max(Go[i], Uo[i]) -
          (Yo["inner" + r] || Go["client" + r] || Uo["client" + r])
        : t[i] - t["offset" + r];
    },
    Ma = function (t, e) {
      for (var i = 0; i < ua.length; i += 3)
        (!e || ~e.indexOf(ua[i + 1])) && t(ua[i], ua[i + 1], ua[i + 2]);
    },
    Ba = function (t) {
      return "string" == typeof t;
    },
    La = function (t) {
      return "function" == typeof t;
    },
    Pa = function (t) {
      return "number" == typeof t;
    },
    Ra = function (t) {
      return "object" == typeof t;
    },
    ja = function (t) {
      return La(t) && t();
    },
    qa = function (t, e) {
      return function () {
        var i = ja(t),
          r = ja(e);
        return function () {
          ja(i), ja(r);
        };
      };
    },
    za = Math.abs,
    Ia = "scrollLeft",
    Ha = "scrollTop",
    Va = "left",
    Wa = "top",
    Na = "right",
    Ya = "bottom",
    Xa = "width",
    Ga = "height",
    Ua = "Right",
    Ka = "Left",
    $a = "Top",
    Qa = "Bottom",
    Za = "padding",
    Ja = "margin",
    tl = "Width",
    el = "Height",
    il = "px",
    rl = {
      s: Ia,
      p: Va,
      p2: Ka,
      os: Na,
      os2: Ua,
      d: Xa,
      d2: tl,
      a: "x",
      sc: function (t) {
        return arguments.length
          ? Yo.scrollTo(t, nl.sc())
          : Yo.pageXOffset ||
              Xo.scrollLeft ||
              Go.scrollLeft ||
              Uo.scrollLeft ||
              0;
      },
    },
    nl = {
      s: Ha,
      p: Wa,
      p2: $a,
      os: Ya,
      os2: Qa,
      d: Ga,
      d2: el,
      a: "y",
      op: rl,
      sc: function (t) {
        return arguments.length
          ? Yo.scrollTo(rl.sc(), t)
          : Yo.pageYOffset || Xo.scrollTop || Go.scrollTop || Uo.scrollTop || 0;
      },
    },
    sl = function (t) {
      return Yo.getComputedStyle(t);
    },
    ol = function (t, e) {
      for (var i in e) i in t || (t[i] = e[i]);
      return t;
    },
    al = function (t, e) {
      var i =
          e &&
          "matrix(1, 0, 0, 1, 0, 0)" !== sl(t)[sa] &&
          Wo.to(t, {
            x: 0,
            y: 0,
            xPercent: 0,
            yPercent: 0,
            rotation: 0,
            rotationX: 0,
            rotationY: 0,
            scale: 1,
            skewX: 0,
            skewY: 0,
          }).progress(1),
        r = t.getBoundingClientRect();
      return i && i.progress(0).kill(), r;
    },
    ll = function (t, e) {
      var i = e.d2;
      return t["offset" + i] || t["client" + i] || 0;
    },
    ul = function (t) {
      var e,
        i = [],
        r = t.labels,
        n = t.duration();
      for (e in r) i.push(r[e] / n);
      return i;
    },
    cl = function (t, e, i, r) {
      return i.split(",").forEach(function (i) {
        return t(e, i, r);
      });
    },
    hl = function (t, e, i) {
      return t.addEventListener(e, i, { passive: !0 });
    },
    dl = function (t, e, i) {
      return t.removeEventListener(e, i);
    },
    fl = {
      startColor: "green",
      endColor: "red",
      indent: 0,
      fontSize: "16px",
      fontWeight: "normal",
    },
    pl = { toggleActions: "play", anticipatePin: 0 },
    Dl = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
    gl = function (t, e) {
      if (Ba(t)) {
        var i = t.indexOf("="),
          r = ~i ? +(t.charAt(i - 1) + 1) * parseFloat(t.substr(i + 1)) : 0;
        ~i && (t.indexOf("%") > i && (r *= e / 100), (t = t.substr(0, i - 1))),
          (t =
            r +
            (t in Dl
              ? Dl[t] * e
              : ~t.indexOf("%")
              ? (parseFloat(t) * e) / 100
              : parseFloat(t) || 0));
      }
      return t;
    },
    ml = function (t, e, i, r, n, s, o) {
      var a = n.startColor,
        l = n.endColor,
        u = n.fontSize,
        c = n.indent,
        h = n.fontWeight,
        d = Xo.createElement("div"),
        f = Ta(i) || "fixed" === Sa(i, "pinType"),
        p = -1 !== t.indexOf("scroller"),
        D = f ? Uo : i,
        g = -1 !== t.indexOf("start"),
        m = g ? a : l,
        v =
          "border-color:" +
          m +
          ";font-size:" +
          u +
          ";color:" +
          m +
          ";font-weight:" +
          h +
          ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
      return (
        (v += "position:" + (p && f ? "fixed;" : "absolute;")),
        (p || !f) &&
          (v += (r === nl ? Na : Ya) + ":" + (s + parseFloat(c)) + "px;"),
        o &&
          (v +=
            "box-sizing:border-box;text-align:left;width:" +
            o.offsetWidth +
            "px;"),
        (d._isStart = g),
        d.setAttribute("class", "gsap-marker-" + t),
        (d.style.cssText = v),
        (d.innerText = e || 0 === e ? t + "-" + e : t),
        D.children[0] ? D.insertBefore(d, D.children[0]) : D.appendChild(d),
        (d._offset = d["offset" + r.op.d2]),
        vl(d, 0, r, g),
        d
      );
    },
    vl = function (t, e, i, r) {
      var n = { display: "block" },
        s = i[r ? "os2" : "p2"],
        o = i[r ? "p2" : "os2"];
      (t._isFlipped = r),
        (n[i.a + "Percent"] = r ? -100 : 0),
        (n[i.a] = r ? "1px" : 0),
        (n["border" + s + tl] = 1),
        (n["border" + o + tl] = 0),
        (n[i.p] = e + "px"),
        Wo.set(t, n);
    },
    yl = [],
    _l = {},
    wl = function () {
      return Zo || (Zo = Qo(Rl));
    },
    bl = function () {
      Zo || ((Zo = Qo(Rl)), wa || Al("scrollStart"), (wa = ya()));
    },
    xl = function () {
      return !ra && !da && !Xo.fullscreenElement && $o.restart(!0);
    },
    Cl = {},
    El = [],
    Fl = [],
    Tl = function (t) {
      var e,
        i = Wo.ticker.frame,
        r = [],
        n = 0;
      if (Da !== i || ga) {
        for (Ml(); n < Fl.length; n += 4)
          (e = Yo.matchMedia(Fl[n]).matches) !== Fl[n + 3] &&
            ((Fl[n + 3] = e),
            e ? r.push(n) : Ml(1, Fl[n]) || (La(Fl[n + 2]) && Fl[n + 2]()));
        for (Ol(), n = 0; n < r.length; n++)
          (e = r[n]), (pa = Fl[e]), (Fl[e + 2] = Fl[e + 1](t));
        (pa = 0), No && Bl(0, 1), (Da = i), Al("matchMedia");
      }
    },
    Sl = function t() {
      return dl(Ul, "scrollEnd", t) || Bl(!0);
    },
    Al = function (t) {
      return (
        (Cl[t] &&
          Cl[t].map(function (t) {
            return t();
          })) ||
        El
      );
    },
    kl = [],
    Ol = function (t) {
      for (var e = 0; e < kl.length; e += 4)
        (t && kl[e + 3] !== t) ||
          ((kl[e].style.cssText = kl[e + 1]), (kl[e + 2].uncache = 1));
    },
    Ml = function (t, e) {
      var i;
      for (oa = 0; oa < yl.length; oa++)
        (i = yl[oa]),
          (e && i.media !== e) ||
            (t
              ? i.kill(1)
              : (i.scroll.rec || (i.scroll.rec = i.scroll()), i.revert()));
      Ol(e), e || Al("revert");
    },
    Bl = function (t, e) {
      if (!wa || t) {
        var i = Al("refreshInit");
        for (ca && Ul.sort(), e || Ml(), oa = 0; oa < yl.length; oa++)
          yl[oa].refresh();
        for (
          i.forEach(function (t) {
            return t && t.render && t.render(-1);
          }),
            oa = yl.length;
          oa--;

        )
          yl[oa].scroll.rec = 0;
        $o.pause(), Al("refresh");
      } else hl(Ul, "scrollEnd", Sl);
    },
    Ll = 0,
    Pl = 1,
    Rl = function () {
      var t = yl.length,
        e = ya(),
        i = e - _a >= 50,
        r = t && yl[0].scroll();
      if (
        ((Pl = Ll > r ? -1 : 1),
        (Ll = r),
        i &&
          (wa && !na && e - wa > 200 && ((wa = 0), Al("scrollEnd")),
          (ea = _a),
          (_a = e)),
        Pl < 0)
      ) {
        for (oa = t; oa-- > 0; ) yl[oa] && yl[oa].update(0, i);
        Pl = 1;
      } else for (oa = 0; oa < t; oa++) yl[oa] && yl[oa].update(0, i);
      Zo = 0;
    },
    jl = [
      Va,
      Wa,
      Ya,
      Na,
      "marginBottom",
      "marginRight",
      "marginTop",
      "marginLeft",
      "display",
      "flexShrink",
      "float",
      "zIndex",
    ],
    ql = jl.concat([
      Xa,
      Ga,
      "boxSizing",
      "maxWidth",
      "maxHeight",
      "position",
      Ja,
      Za,
      "paddingTop",
      "paddingRight",
      "paddingBottom",
      "paddingLeft",
    ]),
    zl = function (t, e, i, r) {
      if (t.parentNode !== e) {
        for (var n, s = jl.length, o = e.style, a = t.style; s--; )
          o[(n = jl[s])] = i[n];
        (o.position = "absolute" === i.position ? "absolute" : "relative"),
          "inline" === i.display && (o.display = "inline-block"),
          (a.bottom = a.right = "auto"),
          (o.overflow = "visible"),
          (o.boxSizing = "border-box"),
          (o.width = ll(t, rl) + il),
          (o.height = ll(t, nl) + il),
          (o.padding = a.margin = a.top = a.left = "0"),
          Hl(r),
          (a.width = a.maxWidth = i.width),
          (a.height = a.maxHeight = i.height),
          (a.padding = i.padding),
          t.parentNode.insertBefore(e, t),
          e.appendChild(t);
      }
    },
    Il = /([A-Z])/g,
    Hl = function (t) {
      if (t) {
        var e,
          i,
          r = t.t.style,
          n = t.length,
          s = 0;
        for ((t.t._gsap || Wo.core.getCache(t.t)).uncache = 1; s < n; s += 2)
          (i = t[s + 1]),
            (e = t[s]),
            i
              ? (r[e] = i)
              : r[e] && r.removeProperty(e.replace(Il, "-$1").toLowerCase());
      }
    },
    Vl = function (t) {
      for (var e = ql.length, i = t.style, r = [], n = 0; n < e; n++)
        r.push(ql[n], i[ql[n]]);
      return (r.t = t), r;
    },
    Wl = { left: 0, top: 0 },
    Nl = function (t, e, i, r, n, s, o, a, l, u, c, h) {
      if (
        (La(t) && (t = t(a)),
        Ba(t) &&
          "max" === t.substr(0, 3) &&
          (t = h + ("=" === t.charAt(4) ? gl("0" + t.substr(3), i) : 0)),
        Pa(t))
      )
        o && vl(o, i, r, !0);
      else {
        La(e) && (e = e(a));
        var d,
          f,
          p,
          D = Jo(e)[0] || Uo,
          g = al(D) || {},
          m = t.split(" ");
        (g && (g.left || g.top)) ||
          "none" !== sl(D).display ||
          ((p = D.style.display),
          (D.style.display = "block"),
          (g = al(D)),
          p ? (D.style.display = p) : D.style.removeProperty("display")),
          (d = gl(m[0], g[r.d])),
          (f = gl(m[1] || "0", i)),
          (t = g[r.p] - l[r.p] - u + d + n - f),
          o && vl(o, f, r, i - f < 20 || (o._isStart && f > 20)),
          (i -= i - f);
      }
      if (s) {
        var v = t + i,
          y = s._isStart;
        (h = "scroll" + r.d2),
          vl(
            s,
            v,
            r,
            (y && v > 20) ||
              (!y && (c ? Math.max(Uo[h], Go[h]) : s.parentNode[h]) <= v + 1)
          ),
          c &&
            ((l = al(o)),
            c && (s.style[r.op.p] = l[r.op.p] - r.op.m - s._offset + il));
      }
      return Math.round(t);
    },
    Yl = /(?:webkit|moz|length|cssText|inset)/i,
    Xl = function (t, e, i, r) {
      if (t.parentNode !== e) {
        var n,
          s,
          o = t.style;
        if (e === Uo) {
          for (n in ((t._stOrig = o.cssText), (s = sl(t))))
            +n ||
              Yl.test(n) ||
              !s[n] ||
              "string" != typeof o[n] ||
              "0" === n ||
              (o[n] = s[n]);
          (o.top = i), (o.left = r);
        } else o.cssText = t._stOrig;
        (Wo.core.getCache(t).uncache = 1), e.appendChild(t);
      }
    },
    Gl = function (t, e) {
      var i,
        r,
        n = Aa(t, e),
        s = "_scroll" + e.p2,
        o = function e(o, a, l, u, c) {
          var h = e.tween,
            d = a.onComplete,
            f = {};
          return (
            h && h.kill(),
            (i = Math.round(l)),
            (a[s] = o),
            (a.modifiers = f),
            (f[s] = function (t) {
              return (
                (t = Ca(n())) !== i && t !== r && Math.abs(t - i) > 2
                  ? (h.kill(), (e.tween = 0))
                  : (t = l + u * h.ratio + c * h.ratio * h.ratio),
                (r = i),
                (i = Ca(t))
              );
            }),
            (a.onComplete = function () {
              (e.tween = 0), d && d.call(h);
            }),
            (h = e.tween = Wo.to(t, a))
          );
        };
      return (
        (t[s] = n),
        t.addEventListener("wheel", function () {
          return o.tween && o.tween.kill() && (o.tween = 0);
        }),
        o
      );
    };
  rl.op = nl;
  var Ul = (function () {
    function t(e, i) {
      No ||
        t.register(Wo) ||
        console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
        this.init(e, i);
    }
    return (
      (t.prototype.init = function (e, i) {
        if (((this.progress = this.start = 0), this.vars && this.kill(1), ba)) {
          var r,
            n,
            s,
            o,
            a,
            l,
            u,
            c,
            h,
            d,
            f,
            p,
            D,
            g,
            m,
            v,
            y,
            _,
            w,
            b,
            x,
            C,
            E,
            F,
            T,
            S,
            A,
            k,
            O,
            M,
            B,
            L,
            P,
            R,
            j,
            q,
            z,
            I,
            H,
            V = (e = ol(Ba(e) || Pa(e) || e.nodeType ? { trigger: e } : e, pl))
              .horizontal
              ? rl
              : nl,
            W = e,
            N = W.onUpdate,
            Y = W.toggleClass,
            X = W.id,
            G = W.onToggle,
            U = W.onRefresh,
            K = W.scrub,
            $ = W.trigger,
            Q = W.pin,
            Z = W.pinSpacing,
            J = W.invalidateOnRefresh,
            tt = W.anticipatePin,
            et = W.onScrubComplete,
            it = W.onSnapComplete,
            rt = W.once,
            nt = W.snap,
            st = W.pinReparent,
            ot = !K && 0 !== K,
            at = Jo(e.scroller || Yo)[0],
            lt = Wo.core.getCache(at),
            ut = Ta(at),
            ct =
              "pinType" in e
                ? "fixed" === e.pinType
                : ut || "fixed" === Sa(at, "pinType"),
            ht = [e.onEnter, e.onLeave, e.onEnterBack, e.onLeaveBack],
            dt = ot && e.toggleActions.split(" "),
            ft = "markers" in e ? e.markers : pl.markers,
            pt = ut ? 0 : parseFloat(sl(at)["border" + V.p2 + tl]) || 0,
            Dt = this,
            gt =
              e.onRefreshInit &&
              function () {
                return e.onRefreshInit(Dt);
              },
            mt = (function (t, e, i) {
              var r = i.d,
                n = i.d2,
                s = i.a;
              return (s = Sa(t, "getBoundingClientRect"))
                ? function () {
                    return s()[r];
                  }
                : function () {
                    return (e ? Yo["inner" + n] : t["client" + n]) || 0;
                  };
            })(at, ut, V),
            vt = (function (t, e) {
              return !e || ~ma.indexOf(t)
                ? ka(t)
                : function () {
                    return Wl;
                  };
            })(at, ut);
          (Dt.media = pa),
            (tt *= 45),
            yl.push(Dt),
            (Dt.scroller = at),
            (Dt.scroll = Aa(at, V)),
            (a = Dt.scroll()),
            (Dt.vars = e),
            (i = i || e.animation),
            "refreshPriority" in e && (ca = 1),
            (lt.tweenScroll = lt.tweenScroll || {
              top: Gl(at, nl),
              left: Gl(at, rl),
            }),
            (Dt.tweenTo = r = lt.tweenScroll[V.p]),
            i &&
              ((i.vars.lazy = !1),
              i._initted ||
                (!1 !== i.vars.immediateRender &&
                  !1 !== e.immediateRender &&
                  i.render(0, !0, !0)),
              (Dt.animation = i.pause()),
              (i.scrollTrigger = Dt),
              (L = Pa(K) && K) &&
                (B = Wo.to(i, {
                  ease: "power3",
                  duration: L,
                  onComplete: function () {
                    return et && et(Dt);
                  },
                })),
              (O = 0),
              X || (X = i.vars.id)),
            nt &&
              (Ra(nt) || (nt = { snapTo: nt }),
              "scrollBehavior" in Uo.style &&
                Wo.set(ut ? [Uo, Go] : at, { scrollBehavior: "auto" }),
              (s = La(nt.snapTo)
                ? nt.snapTo
                : "labels" === nt.snapTo
                ? (function (t) {
                    return function (e) {
                      return Wo.utils.snap(ul(t), e);
                    };
                  })(i)
                : "labelsDirectional" === nt.snapTo
                ? ((I = i),
                  function (t, e) {
                    var i,
                      r = ul(I);
                    if (
                      (r.sort(function (t, e) {
                        return t - e;
                      }),
                      e.direction > 0)
                    ) {
                      for (t -= 1e-4, i = 0; i < r.length; i++)
                        if (r[i] >= t) return r[i];
                      return r.pop();
                    }
                    for (i = r.length, t += 1e-4; i--; )
                      if (r[i] <= t) return r[i];
                    return r[0];
                  })
                : Wo.utils.snap(nt.snapTo)),
              (P = nt.duration || { min: 0.1, max: 2 }),
              (P = Ra(P) ? ta(P.min, P.max) : ta(P, P)),
              (R = Wo.delayedCall(nt.delay || L / 2 || 0.1, function () {
                if (Math.abs(Dt.getVelocity()) < 10 && !na) {
                  var t = i && !ot ? i.totalProgress() : Dt.progress,
                    e = ((t - M) / (ya() - ea)) * 1e3 || 0,
                    n = (za(e / 2) * e) / 0.185,
                    o = t + (!1 === nt.inertia ? 0 : n),
                    a = ta(0, 1, s(o, Dt)),
                    l = Dt.scroll(),
                    h = Math.round(u + a * g),
                    d = nt,
                    f = d.onStart,
                    p = d.onInterrupt,
                    D = d.onComplete,
                    m = r.tween;
                  if (l <= c && l >= u && h !== l) {
                    if (m && !m._initted && m.data <= Math.abs(h - l)) return;
                    r(
                      h,
                      {
                        duration: P(
                          za(
                            (0.185 * Math.max(za(o - t), za(a - t))) /
                              e /
                              0.05 || 0
                          )
                        ),
                        ease: nt.ease || "power3",
                        data: Math.abs(h - l),
                        onInterrupt: function () {
                          return R.restart(!0) && p && p(Dt);
                        },
                        onComplete: function () {
                          (O = M = i && !ot ? i.totalProgress() : Dt.progress),
                            it && it(Dt),
                            D && D(Dt);
                        },
                      },
                      l,
                      n * g,
                      h - l - n * g
                    ),
                      f && f(Dt, r.tween);
                  }
                } else Dt.isActive && R.restart(!0);
              }).pause())),
            X && (_l[X] = Dt),
            ($ = Dt.trigger = Jo($ || Q)[0]),
            (Q = !0 === Q ? $ : Jo(Q)[0]),
            Ba(Y) && (Y = { targets: $, className: Y }),
            Q &&
              (!1 === Z ||
                Z === Ja ||
                (Z = !(!Z && "flex" === sl(Q.parentNode).display) && Za),
              (Dt.pin = Q),
              !1 !== e.force3D && Wo.set(Q, { force3D: !0 }),
              (n = Wo.core.getCache(Q)).spacer
                ? (m = n.pinState)
                : ((n.spacer = _ = Xo.createElement("div")),
                  _.setAttribute(
                    "class",
                    "pin-spacer" + (X ? " pin-spacer-" + X : "")
                  ),
                  (n.pinState = m = Vl(Q))),
              (Dt.spacer = _ = n.spacer),
              (k = sl(Q)),
              (F = k[Z + V.os2]),
              (b = Wo.getProperty(Q)),
              (x = Wo.quickSetter(Q, V.a, il)),
              zl(Q, _, k),
              (y = Vl(Q))),
            ft &&
              ((D = Ra(ft) ? ol(ft, fl) : fl),
              (f = ml("scroller-start", X, at, V, D, 0)),
              (p = ml("scroller-end", X, at, V, D, 0, f)),
              (w = f["offset" + V.op.d2]),
              (h = ml("start", X, at, V, D, w)),
              (d = ml("end", X, at, V, D, w)),
              ct ||
                (((H = ut ? Uo : at).style.position =
                  "absolute" === sl(H).position ? "absolute" : "relative"),
                Wo.set([f, p], { force3D: !0 }),
                (S = Wo.quickSetter(f, V.a, il)),
                (A = Wo.quickSetter(p, V.a, il)))),
            (Dt.revert = function (t) {
              var e = !1 !== t || !Dt.enabled,
                r = ra;
              e !== o &&
                (e &&
                  ((q = Math.max(Dt.scroll(), Dt.scroll.rec || 0)),
                  (j = Dt.progress),
                  (z = i && i.progress())),
                h &&
                  [h, d, f, p].forEach(function (t) {
                    return (t.style.display = e ? "none" : "block");
                  }),
                e && (ra = 1),
                Dt.update(e),
                (ra = r),
                Q &&
                  (e
                    ? (function (t, e, i) {
                        if ((Hl(i), t.parentNode === e)) {
                          var r = e.parentNode;
                          r && (r.insertBefore(t, e), r.removeChild(e));
                        }
                      })(Q, _, m)
                    : (!st || !Dt.isActive) && zl(Q, _, sl(Q), T)),
                (o = e));
            }),
            (Dt.refresh = function (r, n) {
              if ((!ra && Dt.enabled) || n)
                if (Q && r && wa) hl(t, "scrollEnd", Sl);
                else {
                  (ra = 1),
                    B && B.pause(),
                    J && i && i.progress(0).invalidate(),
                    o || Dt.revert();
                  for (
                    var s,
                      D,
                      w,
                      x,
                      F,
                      S,
                      A,
                      k,
                      O,
                      M = mt(),
                      L = vt(),
                      P = Oa(at, V),
                      R = 0,
                      I = 0,
                      H = e.end,
                      W = e.endTrigger || $,
                      N =
                        e.start ||
                        (0 !== e.start && $ ? (Q ? "0 0" : "0 100%") : 0),
                      Y = ($ && Math.max(0, yl.indexOf(Dt))) || 0,
                      X = Y;
                    X--;

                  )
                    (S = yl[X]).end || S.refresh(0, 1) || (ra = 1),
                      (A = S.pin) && (A === $ || A === Q) && S.revert();
                  for (
                    u =
                      Nl(N, $, M, V, Dt.scroll(), h, f, Dt, L, pt, ct, P) ||
                      (Q ? -0.001 : 0),
                      La(H) && (H = H(Dt)),
                      Ba(H) &&
                        !H.indexOf("+=") &&
                        (~H.indexOf(" ")
                          ? (H = (Ba(N) ? N.split(" ")[0] : "") + H)
                          : ((R = gl(H.substr(2), M)),
                            (H = Ba(N) ? N : u + R),
                            (W = $))),
                      c =
                        Math.max(
                          u,
                          Nl(
                            H || (W ? "100% 0" : P),
                            W,
                            M,
                            V,
                            Dt.scroll() + R,
                            d,
                            p,
                            Dt,
                            L,
                            pt,
                            ct,
                            P
                          )
                        ) || -0.001,
                      g = c - u || ((u -= 0.01) && 0.001),
                      R = 0,
                      X = Y;
                    X--;

                  )
                    (A = (S = yl[X]).pin) &&
                      S.start - S._pinPush < u &&
                      ((s = S.end - S.start),
                      A === $ && (R += s),
                      A === Q && (I += s));
                  if (
                    ((u += R),
                    (c += R),
                    (Dt._pinPush = I),
                    h && R && (((s = {})[V.a] = "+=" + R), Wo.set([h, d], s)),
                    Q)
                  )
                    (s = sl(Q)),
                      (x = V === nl),
                      (w = Dt.scroll()),
                      (C = parseFloat(b(V.a)) + I),
                      !P &&
                        c > 1 &&
                        ((ut ? Uo : at).style["overflow-" + V.a] = "scroll"),
                      zl(Q, _, s),
                      (y = Vl(Q)),
                      (D = al(Q, !0)),
                      (k = ct && Aa(at, x ? rl : nl)()),
                      Z &&
                        (((T = [Z + V.os2, g + I + il]).t = _),
                        (X = Z === Za ? ll(Q, V) + g + I : 0) &&
                          T.push(V.d, X + il),
                        Hl(T),
                        ct && Dt.scroll(q)),
                      ct &&
                        (((F = {
                          top: D.top + (x ? w - u : k) + il,
                          left: D.left + (x ? k : w - u) + il,
                          boxSizing: "border-box",
                          position: "fixed",
                        }).width = F.maxWidth =
                          Math.ceil(D.width) + il),
                        (F.height = F.maxHeight = Math.ceil(D.height) + il),
                        (F.margin =
                          F.marginTop =
                          F.marginRight =
                          F.marginBottom =
                          F.marginLeft =
                            "0"),
                        (F.padding = s.padding),
                        (F.paddingTop = s.paddingTop),
                        (F.paddingRight = s.paddingRight),
                        (F.paddingBottom = s.paddingBottom),
                        (F.paddingLeft = s.paddingLeft),
                        (v = (function (t, e, i) {
                          for (
                            var r, n = [], s = t.length, o = i ? 8 : 0;
                            o < s;
                            o += 2
                          )
                            (r = t[o]), n.push(r, r in e ? e[r] : t[o + 1]);
                          return (n.t = t.t), n;
                        })(m, F, st))),
                      i
                        ? ((O = i._initted),
                          ha(1),
                          i.progress(1, !0),
                          (E = b(V.a) - C + g + I),
                          g !== E && v.splice(v.length - 2, 2),
                          i.progress(0, !0),
                          O || i.invalidate(),
                          ha(0))
                        : (E = g);
                  else if ($ && Dt.scroll())
                    for (D = $.parentNode; D && D !== Uo; )
                      D._pinOffset &&
                        ((u -= D._pinOffset), (c -= D._pinOffset)),
                        (D = D.parentNode);
                  for (X = 0; X < Y; X++)
                    (S = yl[X].pin) && (S === $ || S === Q) && yl[X].revert(!1);
                  (Dt.start = u),
                    (Dt.end = c),
                    (a = l = Dt.scroll()) < q && Dt.scroll(q),
                    Dt.revert(!1),
                    (ra = 0),
                    i &&
                      ot &&
                      i._initted &&
                      i.progress(z, !0).render(i.time(), !0, !0),
                    j !== Dt.progress &&
                      (B && i.totalProgress(j, !0),
                      (Dt.progress = j),
                      Dt.update()),
                    Q && Z && (_._pinOffset = Math.round(Dt.progress * E)),
                    U && U(Dt);
                }
            }),
            (Dt.getVelocity = function () {
              return ((Dt.scroll() - l) / (ya() - ea)) * 1e3 || 0;
            }),
            (Dt.update = function (t, e) {
              var n,
                s,
                o,
                h,
                d,
                p = Dt.scroll(),
                D = t ? 0 : (p - u) / g,
                m = D < 0 ? 0 : D > 1 ? 1 : D || 0,
                w = Dt.progress;
              if (
                (e &&
                  ((l = a),
                  (a = p),
                  nt && ((M = O), (O = i && !ot ? i.totalProgress() : m))),
                tt &&
                  !m &&
                  Q &&
                  !ra &&
                  !ga &&
                  wa &&
                  u < p + ((p - l) / (ya() - ea)) * tt &&
                  (m = 1e-4),
                m !== w && Dt.enabled)
              ) {
                if (
                  ((h =
                    (d = (n = Dt.isActive = !!m && m < 1) !== (!!w && w < 1)) ||
                    !!m != !!w),
                  (Dt.direction = m > w ? 1 : -1),
                  (Dt.progress = m),
                  ot ||
                    (!B || ra || ga
                      ? i && i.totalProgress(m, !!ra)
                      : ((B.vars.totalProgress = m), B.invalidate().restart())),
                  Q)
                )
                  if ((t && Z && (_.style[Z + V.os2] = F), ct)) {
                    if (h) {
                      if (
                        ((o = !t && m > w && c + 1 > p && p + 1 >= Oa(at, V)),
                        st)
                      )
                        if (t || (!n && !o)) Xl(Q, _);
                        else {
                          var b = al(Q, !0),
                            T = p - u;
                          Xl(
                            Q,
                            Uo,
                            b.top + (V === nl ? T : 0) + il,
                            b.left + (V === nl ? 0 : T) + il
                          );
                        }
                      Hl(n || o ? v : y),
                        (E !== g && m < 1 && n) ||
                          x(C + (1 !== m || o ? 0 : E));
                    }
                  } else x(C + E * m);
                nt && !r.tween && !ra && !ga && R.restart(!0),
                  Y &&
                    (d || (rt && m && (m < 1 || !fa))) &&
                    Jo(Y.targets).forEach(function (t) {
                      return t.classList[n || rt ? "add" : "remove"](
                        Y.className
                      );
                    }),
                  N && !ot && !t && N(Dt),
                  h && !ra
                    ? ((s = m && !w ? 0 : 1 === m ? 1 : 1 === w ? 2 : 3),
                      ot &&
                        ((o =
                          (!d && "none" !== dt[s + 1] && dt[s + 1]) || dt[s]),
                        i &&
                          ("complete" === o || "reset" === o || o in i) &&
                          ("complete" === o
                            ? i.pause().totalProgress(1)
                            : "reset" === o
                            ? i.restart(!0).pause()
                            : i[o]()),
                        N && N(Dt)),
                      (!d && fa) ||
                        (G && d && G(Dt),
                        ht[s] && ht[s](Dt),
                        rt && (1 === m ? Dt.kill(!1, 1) : (ht[s] = 0)),
                        d || (ht[(s = 1 === m ? 1 : 3)] && ht[s](Dt))))
                    : ot && N && !ra && N(Dt);
              }
              A && (S(p + (f._isFlipped ? 1 : 0)), A(p));
            }),
            (Dt.enable = function () {
              Dt.enabled ||
                ((Dt.enabled = !0),
                hl(at, "resize", xl),
                hl(at, "scroll", bl),
                gt && hl(t, "refreshInit", gt),
                i && i.add
                  ? Wo.delayedCall(0.01, function () {
                      return u || c || Dt.refresh();
                    }) &&
                    (g = 0.01) &&
                    (u = c = 0)
                  : Dt.refresh());
            }),
            (Dt.disable = function (e, i) {
              if (
                Dt.enabled &&
                (!1 !== e && Dt.revert(),
                (Dt.enabled = Dt.isActive = !1),
                i || (B && B.pause()),
                (q = 0),
                n && (n.uncache = 1),
                gt && dl(t, "refreshInit", gt),
                R && (R.pause(), r.tween && r.tween.kill() && (r.tween = 0)),
                !ut)
              ) {
                for (var s = yl.length; s--; )
                  if (yl[s].scroller === at && yl[s] !== Dt) return;
                dl(at, "resize", xl), dl(at, "scroll", bl);
              }
            }),
            (Dt.kill = function (t, e) {
              Dt.disable(t, e), X && delete _l[X];
              var r = yl.indexOf(Dt);
              yl.splice(r, 1),
                r === oa && Pl > 0 && oa--,
                i &&
                  ((i.scrollTrigger = null), t && i.render(-1), e || i.kill()),
                h &&
                  [h, d, f, p].forEach(function (t) {
                    return t.parentNode.removeChild(t);
                  }),
                Q &&
                  (n && (n.uncache = 1),
                  (r = 0),
                  yl.forEach(function (t) {
                    return t.pin === Q && r++;
                  }),
                  r || (n.spacer = 0));
            }),
            Dt.enable();
        } else this.update = this.refresh = this.kill = xa;
      }),
      (t.register = function (e) {
        if (
          !No &&
          ((Wo = e || Fa()),
          Ea() &&
            window.document &&
            ((Yo = window),
            (Xo = document),
            (Go = Xo.documentElement),
            (Uo = Xo.body)),
          Wo &&
            ((Jo = Wo.utils.toArray),
            (ta = Wo.utils.clamp),
            (ha = Wo.core.suppressOverwrites || xa),
            Wo.core.globals("ScrollTrigger", t),
            Uo))
        ) {
          (Qo =
            Yo.requestAnimationFrame ||
            function (t) {
              return setTimeout(t, 16);
            }),
            hl(Yo, "wheel", bl),
            (Ko = [Yo, Xo, Go, Uo]),
            hl(Xo, "scroll", bl);
          var i,
            r = Uo.style,
            n = r.borderTop;
          (r.borderTop = "1px solid #000"),
            (i = al(Uo)),
            (nl.m = Math.round(i.top + nl.sc()) || 0),
            (rl.m = Math.round(i.left + rl.sc()) || 0),
            n ? (r.borderTop = n) : r.removeProperty("border-top"),
            (ia = setInterval(wl, 200)),
            Wo.delayedCall(0.5, function () {
              return (ga = 0);
            }),
            hl(Xo, "touchcancel", xa),
            hl(Uo, "touchstart", xa),
            cl(hl, Xo, "pointerdown,touchstart,mousedown", function () {
              return (na = 1);
            }),
            cl(hl, Xo, "pointerup,touchend,mouseup", function () {
              return (na = 0);
            }),
            (sa = Wo.utils.checkPrefix("transform")),
            ql.push(sa),
            (No = ya()),
            ($o = Wo.delayedCall(0.2, Bl).pause()),
            (ua = [
              Xo,
              "visibilitychange",
              function () {
                var t = Yo.innerWidth,
                  e = Yo.innerHeight;
                Xo.hidden
                  ? ((aa = t), (la = e))
                  : (aa === t && la === e) || xl();
              },
              Xo,
              "DOMContentLoaded",
              Bl,
              Yo,
              "load",
              function () {
                return wa || Bl();
              },
              Yo,
              "resize",
              xl,
            ]),
            Ma(hl);
        }
        return No;
      }),
      (t.defaults = function (t) {
        for (var e in t) pl[e] = t[e];
      }),
      (t.kill = function () {
        (ba = 0),
          yl.slice(0).forEach(function (t) {
            return t.kill(1);
          });
      }),
      (t.config = function (t) {
        "limitCallbacks" in t && (fa = !!t.limitCallbacks);
        var e = t.syncInterval;
        (e && clearInterval(ia)) || ((ia = e) && setInterval(wl, e)),
          "autoRefreshEvents" in t &&
            (Ma(dl) || Ma(hl, t.autoRefreshEvents || "none"),
            (da = -1 === (t.autoRefreshEvents + "").indexOf("resize")));
      }),
      (t.scrollerProxy = function (t, e) {
        var i = Jo(t)[0],
          r = va.indexOf(i),
          n = Ta(i);
        ~r && va.splice(r, n ? 6 : 2),
          n ? ma.unshift(Yo, e, Uo, e, Go, e) : ma.unshift(i, e);
      }),
      (t.matchMedia = function (t) {
        var e, i, r, n, s;
        for (i in t)
          (r = Fl.indexOf(i)),
            (n = t[i]),
            (pa = i),
            "all" === i
              ? n()
              : (e = Yo.matchMedia(i)) &&
                (e.matches && (s = n()),
                ~r
                  ? ((Fl[r + 1] = qa(Fl[r + 1], n)),
                    (Fl[r + 2] = qa(Fl[r + 2], s)))
                  : ((r = Fl.length),
                    Fl.push(i, n, s),
                    e.addListener
                      ? e.addListener(Tl)
                      : e.addEventListener("change", Tl)),
                (Fl[r + 3] = e.matches)),
            (pa = 0);
        return Fl;
      }),
      (t.clearMatchMedia = function (t) {
        t || (Fl.length = 0), (t = Fl.indexOf(t)) >= 0 && Fl.splice(t, 4);
      }),
      t
    );
  })();
  (Ul.version = "3.6.1"),
    (Ul.saveStyles = function (t) {
      return t
        ? Jo(t).forEach(function (t) {
            if (t && t.style) {
              var e = kl.indexOf(t);
              e >= 0 && kl.splice(e, 4),
                kl.push(t, t.style.cssText, Wo.core.getCache(t), pa);
            }
          })
        : kl;
    }),
    (Ul.revert = function (t, e) {
      return Ml(!t, e);
    }),
    (Ul.create = function (t, e) {
      return new Ul(t, e);
    }),
    (Ul.refresh = function (t) {
      return t ? xl() : Bl(!0);
    }),
    (Ul.update = Rl),
    (Ul.maxScroll = function (t, e) {
      return Oa(t, e ? rl : nl);
    }),
    (Ul.getScrollFunc = function (t, e) {
      return Aa(Jo(t)[0], e ? rl : nl);
    }),
    (Ul.getById = function (t) {
      return _l[t];
    }),
    (Ul.getAll = function () {
      return yl.slice(0);
    }),
    (Ul.isScrolling = function () {
      return !!wa;
    }),
    (Ul.addEventListener = function (t, e) {
      var i = Cl[t] || (Cl[t] = []);
      ~i.indexOf(e) || i.push(e);
    }),
    (Ul.removeEventListener = function (t, e) {
      var i = Cl[t],
        r = i && i.indexOf(e);
      r >= 0 && i.splice(r, 1);
    }),
    (Ul.batch = function (t, e) {
      var i,
        r = [],
        n = {},
        s = e.interval || 0.016,
        o = e.batchMax || 1e9,
        a = function (t, e) {
          var i = [],
            r = [],
            n = Wo.delayedCall(s, function () {
              e(i, r), (i = []), (r = []);
            }).pause();
          return function (t) {
            i.length || n.restart(!0),
              i.push(t.trigger),
              r.push(t),
              o <= i.length && n.progress(1);
          };
        };
      for (i in e)
        n[i] =
          "on" === i.substr(0, 2) && La(e[i]) && "onRefreshInit" !== i
            ? a(0, e[i])
            : e[i];
      return (
        La(o) &&
          ((o = o()),
          hl(Ul, "refresh", function () {
            return (o = e.batchMax());
          })),
        Jo(t).forEach(function (t) {
          var e = {};
          for (i in n) e[i] = n[i];
          (e.trigger = t), r.push(Ul.create(e));
        }),
        r
      );
    }),
    (Ul.sort = function (t) {
      return yl.sort(
        t ||
          function (t, e) {
            return (
              -1e6 * (t.vars.refreshPriority || 0) +
              t.start -
              (e.start + -1e6 * (e.vars.refreshPriority || 0))
            );
          }
      );
    }),
    Fa() && Wo.registerPlugin(Ul);
  class Kl extends At.Renderer {
    onEnter() {
      ls.registerPlugin(Us),
        ls.registerPlugin(Ul),
        document.querySelectorAll(".c-project").forEach(function (e) {
          e.addEventListener("mouseenter", () => {
            t.set(e.querySelector("#line1"), { drawSVG: "100%" })
              .set(e.querySelector("#line2"), { drawSVG: 0 })
              .set(e.querySelector("#arrow-head-1"), { drawSVG: "100%" })
              .set(e.querySelector("#arrow-head-2"), { drawSVG: 0 })
              .to(e.querySelector("#line1"), {
                drawSVG: "100% 100%",
                duration: 0.2,
              })
              .to(e.querySelector("#arrow-head-1"), {
                drawSVG: "100% 100%",
                duration: 0.2,
              })
              .to(e.querySelector("#arrow-head-2"), {
                drawSVG: "100%",
                duration: 0.4,
              })
              .to(e.querySelector("#line2"), {
                drawSVG: "100%",
                duration: 0.2,
              });
          });
        });
      let t = ls.timeline();
      if (
        ((window.onload = () => {
          let t = document.querySelector(".c-loader");
          t.classList.remove("is-loading"),
            t.classList.add("is-loaded"),
            ls
              .timeline({ delay: 0.6, defaults: { ease: Ss } })
              .from(
                ".js-hero-title .line-child",
                { y: "40%", rotateX: "-90deg", stagger: 0.2, duration: 1.9 },
                "+=.1"
              )
              .from(".c-visual-line", { scaleX: 0, duration: 0.5 }, "-=1.2")
              .fromTo(
                "#v_path",
                { drawSVG: 0 },
                { drawSVG: "100%", duration: 0.5, ease: "power1.out" },
                "-=.8"
              )
              .fromTo(
                "#i_path",
                { drawSVG: 0 },
                { drawSVG: "100%", duration: 0.6, ease: "power1.out" },
                "-=.7"
              )
              .fromTo(
                "#s_path",
                { drawSVG: 0 },
                { drawSVG: "100%", duration: 0.8, ease: "power1.out" },
                "-=.6"
              )
              .fromTo(
                "#u_path",
                { drawSVG: 0 },
                { drawSVG: "100%", duration: 0.9, ease: "power1.out" },
                "-=.5"
              )
              .fromTo(
                "#a_path",
                { drawSVG: 0 },
                { drawSVG: "100%", duration: 1, ease: "power1.out" },
                "-=.4"
              )
              .fromTo(
                "#l_path",
                { drawSVG: 0 },
                { drawSVG: "100%", duration: 1.2, ease: Ss },
                "-=.3"
              )
              .fromTo(
                "#dot_path",
                { drawSVG: 0 },
                { drawSVG: "100%", duration: 0.3, ease: "power1.out" }
              )
              .from(
                ".c-title .o-title-small .line-child",
                { y: "100%", duration: 0.8, stagger: 0.14 },
                "-=2.8"
              );
        }),
        _t.on("scroll", Ul.update),
        Ul.scrollerProxy("#js-scroll", {
          scrollTop: function (t) {
            return arguments.length
              ? _t.scrollTo(t, 0, 0)
              : _t.scroll.instance.scroll.y;
          },
          getBoundingClientRect: function () {
            return {
              top: 0,
              left: 0,
              width: window.innerWidth,
              height: window.innerHeight,
            };
          },
          pinType: document.querySelector("#js-scroll").style.transform
            ? "transform"
            : "fixed",
        }),
        ls.utils.toArray(".js-reveal").forEach((t) => {
          ls.from(t.querySelectorAll(".line-child"), {
            scrollTrigger: { trigger: t, scroller: "#js-scroll" },
            y: "100%",
            ease: Ss,
            delay: 0.1,
            duration: 1.2,
            stagger: 0.1,
          });
        }),
        ls.utils.toArray(".c-honors__list").forEach((t) => {
          ls.from(t.querySelectorAll(".c-honors__list p > span"), {
            scrollTrigger: {
              trigger: t,
              scroller: "#js-scroll",
              start: "10 center",
            },
            y: "100%",
            duration: 1.2,
            stagger: 0.1,
            ease: Ss,
          });
        }),
        ls.utils.toArray(".c-honors__list").forEach((t) => {
          ls.from(t.querySelectorAll(".c-honors__list li a"), {
            scrollTrigger: {
              trigger: t,
              scroller: "#js-scroll",
              start: "10 center",
            },
            x: "-90%",
            opacity: 0,
            duration: 1.2,
            stagger: 0.1,
            ease: Ss,
          });
        }),
        window.innerWidth > 1e3)
      ) {
        let t = document.querySelectorAll(".js-cards > div");
        ls.from(t[0], {
          scrollTrigger: { trigger: t[0], scroller: "#js-scroll", scrub: !0 },
          y: "-18%",
          duration: 2.8,
          rotate: "-20deg",
        }),
          ls.from(t[1], {
            scrollTrigger: { trigger: t[1], scroller: "#js-scroll", scrub: !0 },
            y: "-12%",
            duration: 2.8,
            rotate: "-10deg",
          }),
          ls.from(t[2], {
            scrollTrigger: { trigger: t[2], scroller: "#js-scroll", scrub: !0 },
            y: "-6%",
            duration: 2.8,
            rotate: "-5deg",
          });
      }
      if (window.innerWidth < 1e3) {
        let t = document.querySelectorAll(".js-cards > div");
        ls.from(t[0], {
          scrollTrigger: {
            trigger: t[0],
            scroller: "#js-scroll",
            end: "bottom 0",
            ease: "Power0.easeNone",
            scrub: !0,
          },
          y: "-35%",
        }),
          ls.from(t[1], {
            scrollTrigger: {
              trigger: t[1],
              scroller: "#js-scroll",
              end: "bottom 0",
              ease: "Power0.easeNone",
              scrub: !0,
            },
            y: "-22%",
          }),
          ls.from(t[2], {
            scrollTrigger: {
              trigger: t[2],
              scroller: "#js-scroll",
              end: "bottom 0",
              ease: "Power0.easeNone",
              scrub: !0,
            },
            y: "-10%",
          });
      }
      function e() {
        document.querySelector("nav").classList.add("--white");
      }
      function i() {
        document.querySelector("nav").classList.remove("--white");
      }
      Ul.create({
        trigger: "footer",
        scroller: "#js-scroll",
        start: "top 50",
        onEnter: e,
        onLeave: i,
        onEnterBack: e,
        onLeaveBack: i,
      }),
        ls.from("#c-circle", {
          scrollTrigger: {
            trigger: "footer",
            scroller: "#js-scroll",
            scrub: !0,
          },
          y: "-70%",
          duration: 2,
          ease: Ss,
        }),
        Ul.addEventListener("refresh", () => _t.update()),
        Ul.refresh();
      var r = [
        ["#FFA372", "#96C1C8", "#261F20", "#171113"],
        ["#8668E3", "#FFA372", "#F5F5F5", "#961EFD"],
        ["#BF8845", "#E5CFC2", "#B2D925", "#678C18"],
        ["#57B0BB", "#DD1E2E", "#BFC07C", "#BF6060"],
        ["#8C5642", "#B5433E", "#40281F", "#961EFD"],
      ];
      let n = document.querySelectorAll(".js-project"),
        s = document.querySelector("#js-cursor"),
        o = document.querySelector("#js-work-bg"),
        a = document.querySelectorAll("#js-cursor > div");
      function l(t) {
        let e = new Date(),
          i = e.getTime() + 6e4 * e.getTimezoneOffset(),
          r = new Date(i + 36e5 * t);
        return (
          r.getHours() + ":" + ((n = r.getMinutes()) < 10 && (n = "0" + n), n)
        );
        var n;
      }
      function u() {
        wt.open(),
          1 == wt.first &&
            (setTimeout(() => {
              wt.next_query();
            }, 1e3),
            setTimeout(() => {
              wt.next_query();
            }, 4500),
            (wt.first = !1));
      }
      n.forEach((t, e) => {
        t.addEventListener("mouseenter", (t) => {
          a[e].classList.add("--visible"),
            o.classList.add("--transparent"),
            (o.style = `--clr1:${r[e][0]};--clr2:${r[e][1]};--clr3:${r[e][0]};--clr4:${r[e][1]}`);
        }),
          t.addEventListener("mouseleave", (t) => {
            a[e].classList.remove("--visible"),
              o.classList.remove("--transparent");
          });
      }),
        document
          .querySelector("#js-work")
          .addEventListener("mousemove", (t) => {
            ls.to(s, { x: t.clientX - 18, y: t.clientY - 10, duration: 0.5 });
          }),
        document.querySelectorAll(".js-year").forEach((t) => {
          t.innerHTML = "©" + new Date().getFullYear();
        }),
        (document.querySelectorAll(".js-time")[0].innerHTML = l(5.5)),
        (document.querySelectorAll(".js-time")[1].innerHTML = l(5.5)),
        setInterval(() => {
          let t = document.querySelectorAll(".js-time");
          for (let e of t) e.innerHTML = l(5.5);
        }, 6e4);
      let c,
        h = document.querySelector(".c-cate"),
        d = document.querySelector(".c-cate > img"),
        f = document.querySelectorAll(".c-cate > div > button");
      document.querySelector("#contact_btn").addEventListener("click", () => {
        var t, e;
        (t = 0),
          (e = 6),
          (t = Math.ceil(t)),
          (e = Math.floor(e)),
          (c = Math.floor(Math.random() * (e - t + 1)) + t),
          (document.querySelector(".c-cate > div").style.display = ""),
          (d.src = Ro()),
          4 == c
            ? ((h.style = "display: block"),
              f[0].addEventListener("click", () => {
                (document.querySelector(".c-cate > div").style.display =
                  "none"),
                  (d.src = zo()),
                  setTimeout(() => {
                    (h.style = "display: none"), u();
                  }, 3e3);
              }),
              f[1].addEventListener("click", () => {
                (document.querySelector(".c-cate > div").style.display =
                  "none"),
                  (d.src = Vo()),
                  setTimeout(() => {
                    (h.style = "display: none"), u();
                  }, 3e3);
              }))
            : u();
      }),
        window.matchMedia("(max-width: 900px)").matches &&
          window.scrollTo(0, 0),
        document
          .querySelector(".c-footer-credit")
          .addEventListener("click", () => {
            document.querySelector(".c-credits").classList.toggle("--visible");
          });
    }
    onLeave() {
      window.clearTimeout();
    }
  }
  class $l extends At.Renderer {
    onEnter() {
      function t() {
        wt.open(),
          1 == wt.first &&
            (setTimeout(() => {
              wt.next_query();
            }, 1e3),
            setTimeout(() => {
              wt.next_query();
            }, 4500),
            (wt.first = !1));
      }
      window.matchMedia("(max-width: 900px)").matches && window.scrollTo(0, 0),
        document.querySelectorAll(".js-year").forEach((t) => {
          t.innerHTML = "©" + new Date().getFullYear();
        }),
        ls.registerPlugin(Ul),
        setTimeout(() => {
          Ul.refresh();
        }, 2e3);
      let e,
        i = document.querySelector(".c-cate"),
        r = document.querySelector(".c-cate > img"),
        n = document.querySelectorAll(".c-cate > div > button");
      function s() {
        document.querySelector("nav").classList.add("--white");
      }
      function o() {
        document.querySelector("nav").classList.remove("--white");
      }
      document.querySelector("#contact_btn").addEventListener("click", () => {
        var s, o;
        (s = 0),
          (o = 6),
          (s = Math.ceil(s)),
          (o = Math.floor(o)),
          (e = Math.floor(Math.random() * (o - s + 1)) + s),
          (document.querySelector(".c-cate > div").style.display = ""),
          (r.src = Ro()),
          4 == e
            ? ((i.style = "display: block"),
              n[0].addEventListener("click", () => {
                (document.querySelector(".c-cate > div").style.display =
                  "none"),
                  (r.src = zo()),
                  setTimeout(() => {
                    (i.style = "display: none"), t();
                  }, 3e3);
              }),
              n[1].addEventListener("click", () => {
                (document.querySelector(".c-cate > div").style.display =
                  "none"),
                  (r.src = Vo()),
                  setTimeout(() => {
                    (i.style = "display: none"), t();
                  }, 3e3);
              }))
            : t();
      }),
        Ul.create({
          trigger: "footer",
          scroller: "#js-scroll",
          start: "top 50",
          onEnter: s,
          onLeave: o,
          onEnterBack: s,
          onLeaveBack: o,
        }),
        ls.from("#c-circle", {
          scrollTrigger: {
            trigger: "footer",
            scroller: "#js-scroll",
            scrub: !0,
          },
          y: "-70%",
          duration: 2,
          ease: Ss,
        }),
        document
          .querySelector(".c-footer-credit")
          .addEventListener("click", () => {
            document.querySelector(".c-credits").classList.toggle("--visible");
          });
    }
  }
  new At.Core({
    renderers: { home: Kl, play: $l },
    transitions: { home: Ks, play: $s },
  }).on("NAVIGATE_END", () => {
    _t.start(), _t.update();
  });
  new _o(".js-split", { type: "lines", linesClass: "line-parent" }),
    new _o(".js-split > .line-parent", {
      type: "lines",
      linesClass: "line-child",
    });
  (window.onload = () => {
    let t = document.querySelector(".c-loader");
    t.classList.remove("is-loading"), t.classList.add("is-loaded"), _t.update();
  }),
    wt.skip.addEventListener("click", () => {
      wt.next_query();
    }),
    wt.back.addEventListener("click", () => {
      wt.prev_query();
    }),
    document.querySelector(".c-close").addEventListener("click", () => {
      wt.close();
    }),
    wt.send.addEventListener("click", function (t) {
      wt.next_query();
    });
  const Ql = document.querySelectorAll("#js-slider > div label"),
    Zl = document.querySelectorAll("#js-slider .s-text input");
  for (let t of Ql)
    t.addEventListener("click", function () {
      wt.next_query();
    });
  for (let t of Zl)
    t.addEventListener("keydown", function (e) {
      var i = t.checkValidity();
      ("Enter" != e.key && 9 != e.keyCode) ||
        (e.preventDefault(),
        0 == i
          ? document.querySelector(".c-error").classList.add("--visible")
          : (wt.next_query(),
            document.querySelector(".c-error").classList.remove("--visible")));
    });
  document
    .querySelector(".c-credits > div:last-child")
    .addEventListener("click", () => {
      document.querySelector(".c-credits").classList.toggle("--visible");
    });
  const Jl = document.querySelector("#contact");
  Jl.addEventListener("submit", (t) => {
    t.preventDefault(),
      fetch(
        "https://script.google.com/macros/s/AKfycbzE7Rx8DVF_c26eXn5UNvFD1dGMH4iv5-1hx7vIa0zEzZlfv7K2HtZpyoavnFsm0s-4/exec",
        { method: "POST", body: new FormData(Jl) }
      )
        .then((t) => console.log("Success!", t))
        .catch((t) => console.error("Error!", t.message));
  }),
    console.log("Designed and Developed by Kalyani Mali");
})();
//# sourceMappingURL=playbook.bd225655.js.map
