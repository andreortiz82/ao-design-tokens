(function () {
  const F = document.createElement("link").relList;
  if (F && F.supports && F.supports("modulepreload")) return;
  for (const U of document.querySelectorAll('link[rel="modulepreload"]')) Ee(U);
  new MutationObserver((U) => {
    for (const W of U)
      if (W.type === "childList")
        for (const oe of W.addedNodes)
          oe.tagName === "LINK" && oe.rel === "modulepreload" && Ee(oe);
  }).observe(document, { childList: !0, subtree: !0 });
  function d(U) {
    const W = {};
    return (
      U.integrity && (W.integrity = U.integrity),
      U.referrerPolicy && (W.referrerPolicy = U.referrerPolicy),
      U.crossOrigin === "use-credentials"
        ? (W.credentials = "include")
        : U.crossOrigin === "anonymous"
          ? (W.credentials = "omit")
          : (W.credentials = "same-origin"),
      W
    );
  }
  function Ee(U) {
    if (U.ep) return;
    U.ep = !0;
    const W = d(U);
    fetch(U.href, W);
  }
})();
var x0 = { exports: {} },
  vt = {},
  E0 = { exports: {} },
  M = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Eu;
function Ls() {
  if (Eu) return M;
  Eu = 1;
  var L = Symbol.for("react.element"),
    F = Symbol.for("react.portal"),
    d = Symbol.for("react.fragment"),
    Ee = Symbol.for("react.strict_mode"),
    U = Symbol.for("react.profiler"),
    W = Symbol.for("react.provider"),
    oe = Symbol.for("react.context"),
    ie = Symbol.for("react.forward_ref"),
    O = Symbol.for("react.suspense"),
    ze = Symbol.for("react.memo"),
    ve = Symbol.for("react.lazy"),
    re = Symbol.iterator;
  function Z(p) {
    return p === null || typeof p != "object"
      ? null
      : ((p = (re && p[re]) || p["@@iterator"]),
        typeof p == "function" ? p : null);
  }
  var He = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    $e = Object.assign,
    J = {};
  function Q(p, m, j) {
    (this.props = p),
      (this.context = m),
      (this.refs = J),
      (this.updater = j || He);
  }
  (Q.prototype.isReactComponent = {}),
    (Q.prototype.setState = function (p, m) {
      if (typeof p != "object" && typeof p != "function" && p != null)
        throw Error(
          "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, p, m, "setState");
    }),
    (Q.prototype.forceUpdate = function (p) {
      this.updater.enqueueForceUpdate(this, p, "forceUpdate");
    });
  function mr() {}
  mr.prototype = Q.prototype;
  function ur(p, m, j) {
    (this.props = p),
      (this.context = m),
      (this.refs = J),
      (this.updater = j || He);
  }
  var Je = (ur.prototype = new mr());
  (Je.constructor = ur), $e(Je, Q.prototype), (Je.isPureReactComponent = !0);
  var be = Array.isArray,
    qe = Object.prototype.hasOwnProperty,
    Ce = { current: null },
    Pe = { key: !0, ref: !0, __self: !0, __source: !0 };
  function We(p, m, j) {
    var D,
      A = {},
      V = null,
      K = null;
    if (m != null)
      for (D in (m.ref !== void 0 && (K = m.ref),
      m.key !== void 0 && (V = "" + m.key),
      m))
        qe.call(m, D) && !Pe.hasOwnProperty(D) && (A[D] = m[D]);
    var H = arguments.length - 2;
    if (H === 1) A.children = j;
    else if (1 < H) {
      for (var q = Array(H), Fe = 0; Fe < H; Fe++) q[Fe] = arguments[Fe + 2];
      A.children = q;
    }
    if (p && p.defaultProps)
      for (D in ((H = p.defaultProps), H)) A[D] === void 0 && (A[D] = H[D]);
    return {
      $$typeof: L,
      type: p,
      key: V,
      ref: K,
      props: A,
      _owner: Ce.current,
    };
  }
  function Cr(p, m) {
    return {
      $$typeof: L,
      type: p.type,
      key: m,
      ref: p.ref,
      props: p.props,
      _owner: p._owner,
    };
  }
  function yr(p) {
    return typeof p == "object" && p !== null && p.$$typeof === L;
  }
  function Qr(p) {
    var m = { "=": "=0", ":": "=2" };
    return (
      "$" +
      p.replace(/[=:]/g, function (j) {
        return m[j];
      })
    );
  }
  var sr = /\/+/g;
  function Ie(p, m) {
    return typeof p == "object" && p !== null && p.key != null
      ? Qr("" + p.key)
      : m.toString(36);
  }
  function er(p, m, j, D, A) {
    var V = typeof p;
    (V === "undefined" || V === "boolean") && (p = null);
    var K = !1;
    if (p === null) K = !0;
    else
      switch (V) {
        case "string":
        case "number":
          K = !0;
          break;
        case "object":
          switch (p.$$typeof) {
            case L:
            case F:
              K = !0;
          }
      }
    if (K)
      return (
        (K = p),
        (A = A(K)),
        (p = D === "" ? "." + Ie(K, 0) : D),
        be(A)
          ? ((j = ""),
            p != null && (j = p.replace(sr, "$&/") + "/"),
            er(A, m, j, "", function (Fe) {
              return Fe;
            }))
          : A != null &&
            (yr(A) &&
              (A = Cr(
                A,
                j +
                  (!A.key || (K && K.key === A.key)
                    ? ""
                    : ("" + A.key).replace(sr, "$&/") + "/") +
                  p,
              )),
            m.push(A)),
        1
      );
    if (((K = 0), (D = D === "" ? "." : D + ":"), be(p)))
      for (var H = 0; H < p.length; H++) {
        V = p[H];
        var q = D + Ie(V, H);
        K += er(V, m, j, q, A);
      }
    else if (((q = Z(p)), typeof q == "function"))
      for (p = q.call(p), H = 0; !(V = p.next()).done; )
        (V = V.value), (q = D + Ie(V, H++)), (K += er(V, m, j, q, A));
    else if (V === "object")
      throw (
        ((m = String(p)),
        Error(
          "Objects are not valid as a React child (found: " +
            (m === "[object Object]"
              ? "object with keys {" + Object.keys(p).join(", ") + "}"
              : m) +
            "). If you meant to render a collection of children, use an array instead.",
        ))
      );
    return K;
  }
  function pr(p, m, j) {
    if (p == null) return p;
    var D = [],
      A = 0;
    return (
      er(p, D, "", "", function (V) {
        return m.call(j, V, A++);
      }),
      D
    );
  }
  function Te(p) {
    if (p._status === -1) {
      var m = p._result;
      (m = m()),
        m.then(
          function (j) {
            (p._status === 0 || p._status === -1) &&
              ((p._status = 1), (p._result = j));
          },
          function (j) {
            (p._status === 0 || p._status === -1) &&
              ((p._status = 2), (p._result = j));
          },
        ),
        p._status === -1 && ((p._status = 0), (p._result = m));
    }
    if (p._status === 1) return p._result.default;
    throw p._result;
  }
  var ae = { current: null },
    w = { transition: null },
    P = {
      ReactCurrentDispatcher: ae,
      ReactCurrentBatchConfig: w,
      ReactCurrentOwner: Ce,
    };
  function x() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return (
    (M.Children = {
      map: pr,
      forEach: function (p, m, j) {
        pr(
          p,
          function () {
            m.apply(this, arguments);
          },
          j,
        );
      },
      count: function (p) {
        var m = 0;
        return (
          pr(p, function () {
            m++;
          }),
          m
        );
      },
      toArray: function (p) {
        return (
          pr(p, function (m) {
            return m;
          }) || []
        );
      },
      only: function (p) {
        if (!yr(p))
          throw Error(
            "React.Children.only expected to receive a single React element child.",
          );
        return p;
      },
    }),
    (M.Component = Q),
    (M.Fragment = d),
    (M.Profiler = U),
    (M.PureComponent = ur),
    (M.StrictMode = Ee),
    (M.Suspense = O),
    (M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = P),
    (M.act = x),
    (M.cloneElement = function (p, m, j) {
      if (p == null)
        throw Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            p +
            ".",
        );
      var D = $e({}, p.props),
        A = p.key,
        V = p.ref,
        K = p._owner;
      if (m != null) {
        if (
          (m.ref !== void 0 && ((V = m.ref), (K = Ce.current)),
          m.key !== void 0 && (A = "" + m.key),
          p.type && p.type.defaultProps)
        )
          var H = p.type.defaultProps;
        for (q in m)
          qe.call(m, q) &&
            !Pe.hasOwnProperty(q) &&
            (D[q] = m[q] === void 0 && H !== void 0 ? H[q] : m[q]);
      }
      var q = arguments.length - 2;
      if (q === 1) D.children = j;
      else if (1 < q) {
        H = Array(q);
        for (var Fe = 0; Fe < q; Fe++) H[Fe] = arguments[Fe + 2];
        D.children = H;
      }
      return { $$typeof: L, type: p.type, key: A, ref: V, props: D, _owner: K };
    }),
    (M.createContext = function (p) {
      return (
        (p = {
          $$typeof: oe,
          _currentValue: p,
          _currentValue2: p,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (p.Provider = { $$typeof: W, _context: p }),
        (p.Consumer = p)
      );
    }),
    (M.createElement = We),
    (M.createFactory = function (p) {
      var m = We.bind(null, p);
      return (m.type = p), m;
    }),
    (M.createRef = function () {
      return { current: null };
    }),
    (M.forwardRef = function (p) {
      return { $$typeof: ie, render: p };
    }),
    (M.isValidElement = yr),
    (M.lazy = function (p) {
      return { $$typeof: ve, _payload: { _status: -1, _result: p }, _init: Te };
    }),
    (M.memo = function (p, m) {
      return { $$typeof: ze, type: p, compare: m === void 0 ? null : m };
    }),
    (M.startTransition = function (p) {
      var m = w.transition;
      w.transition = {};
      try {
        p();
      } finally {
        w.transition = m;
      }
    }),
    (M.unstable_act = x),
    (M.useCallback = function (p, m) {
      return ae.current.useCallback(p, m);
    }),
    (M.useContext = function (p) {
      return ae.current.useContext(p);
    }),
    (M.useDebugValue = function () {}),
    (M.useDeferredValue = function (p) {
      return ae.current.useDeferredValue(p);
    }),
    (M.useEffect = function (p, m) {
      return ae.current.useEffect(p, m);
    }),
    (M.useId = function () {
      return ae.current.useId();
    }),
    (M.useImperativeHandle = function (p, m, j) {
      return ae.current.useImperativeHandle(p, m, j);
    }),
    (M.useInsertionEffect = function (p, m) {
      return ae.current.useInsertionEffect(p, m);
    }),
    (M.useLayoutEffect = function (p, m) {
      return ae.current.useLayoutEffect(p, m);
    }),
    (M.useMemo = function (p, m) {
      return ae.current.useMemo(p, m);
    }),
    (M.useReducer = function (p, m, j) {
      return ae.current.useReducer(p, m, j);
    }),
    (M.useRef = function (p) {
      return ae.current.useRef(p);
    }),
    (M.useState = function (p) {
      return ae.current.useState(p);
    }),
    (M.useSyncExternalStore = function (p, m, j) {
      return ae.current.useSyncExternalStore(p, m, j);
    }),
    (M.useTransition = function () {
      return ae.current.useTransition();
    }),
    (M.version = "18.3.1"),
    M
  );
}
var zu;
function N0() {
  return zu || ((zu = 1), (E0.exports = Ls())), E0.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Cu;
function Rs() {
  if (Cu) return vt;
  Cu = 1;
  var L = N0(),
    F = Symbol.for("react.element"),
    d = Symbol.for("react.fragment"),
    Ee = Object.prototype.hasOwnProperty,
    U = L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    W = { key: !0, ref: !0, __self: !0, __source: !0 };
  function oe(ie, O, ze) {
    var ve,
      re = {},
      Z = null,
      He = null;
    ze !== void 0 && (Z = "" + ze),
      O.key !== void 0 && (Z = "" + O.key),
      O.ref !== void 0 && (He = O.ref);
    for (ve in O) Ee.call(O, ve) && !W.hasOwnProperty(ve) && (re[ve] = O[ve]);
    if (ie && ie.defaultProps)
      for (ve in ((O = ie.defaultProps), O))
        re[ve] === void 0 && (re[ve] = O[ve]);
    return {
      $$typeof: F,
      type: ie,
      key: Z,
      ref: He,
      props: re,
      _owner: U.current,
    };
  }
  return (vt.Fragment = d), (vt.jsx = oe), (vt.jsxs = oe), vt;
}
var _u;
function js() {
  return _u || ((_u = 1), (x0.exports = Rs())), x0.exports;
}
var R = js(),
  Mu = N0(),
  Pa = {},
  z0 = { exports: {} },
  De = {},
  C0 = { exports: {} },
  _0 = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Nu;
function Ms() {
  return (
    Nu ||
      ((Nu = 1),
      (function (L) {
        function F(w, P) {
          var x = w.length;
          w.push(P);
          e: for (; 0 < x; ) {
            var p = (x - 1) >>> 1,
              m = w[p];
            if (0 < U(m, P)) (w[p] = P), (w[x] = m), (x = p);
            else break e;
          }
        }
        function d(w) {
          return w.length === 0 ? null : w[0];
        }
        function Ee(w) {
          if (w.length === 0) return null;
          var P = w[0],
            x = w.pop();
          if (x !== P) {
            w[0] = x;
            e: for (var p = 0, m = w.length, j = m >>> 1; p < j; ) {
              var D = 2 * (p + 1) - 1,
                A = w[D],
                V = D + 1,
                K = w[V];
              if (0 > U(A, x))
                V < m && 0 > U(K, A)
                  ? ((w[p] = K), (w[V] = x), (p = V))
                  : ((w[p] = A), (w[D] = x), (p = D));
              else if (V < m && 0 > U(K, x)) (w[p] = K), (w[V] = x), (p = V);
              else break e;
            }
          }
          return P;
        }
        function U(w, P) {
          var x = w.sortIndex - P.sortIndex;
          return x !== 0 ? x : w.id - P.id;
        }
        if (
          typeof performance == "object" &&
          typeof performance.now == "function"
        ) {
          var W = performance;
          L.unstable_now = function () {
            return W.now();
          };
        } else {
          var oe = Date,
            ie = oe.now();
          L.unstable_now = function () {
            return oe.now() - ie;
          };
        }
        var O = [],
          ze = [],
          ve = 1,
          re = null,
          Z = 3,
          He = !1,
          $e = !1,
          J = !1,
          Q = typeof setTimeout == "function" ? setTimeout : null,
          mr = typeof clearTimeout == "function" ? clearTimeout : null,
          ur = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function Je(w) {
          for (var P = d(ze); P !== null; ) {
            if (P.callback === null) Ee(ze);
            else if (P.startTime <= w)
              Ee(ze), (P.sortIndex = P.expirationTime), F(O, P);
            else break;
            P = d(ze);
          }
        }
        function be(w) {
          if (((J = !1), Je(w), !$e))
            if (d(O) !== null) ($e = !0), Te(qe);
            else {
              var P = d(ze);
              P !== null && ae(be, P.startTime - w);
            }
        }
        function qe(w, P) {
          ($e = !1), J && ((J = !1), mr(We), (We = -1)), (He = !0);
          var x = Z;
          try {
            for (
              Je(P), re = d(O);
              re !== null && (!(re.expirationTime > P) || (w && !Qr()));

            ) {
              var p = re.callback;
              if (typeof p == "function") {
                (re.callback = null), (Z = re.priorityLevel);
                var m = p(re.expirationTime <= P);
                (P = L.unstable_now()),
                  typeof m == "function"
                    ? (re.callback = m)
                    : re === d(O) && Ee(O),
                  Je(P);
              } else Ee(O);
              re = d(O);
            }
            if (re !== null) var j = !0;
            else {
              var D = d(ze);
              D !== null && ae(be, D.startTime - P), (j = !1);
            }
            return j;
          } finally {
            (re = null), (Z = x), (He = !1);
          }
        }
        var Ce = !1,
          Pe = null,
          We = -1,
          Cr = 5,
          yr = -1;
        function Qr() {
          return !(L.unstable_now() - yr < Cr);
        }
        function sr() {
          if (Pe !== null) {
            var w = L.unstable_now();
            yr = w;
            var P = !0;
            try {
              P = Pe(!0, w);
            } finally {
              P ? Ie() : ((Ce = !1), (Pe = null));
            }
          } else Ce = !1;
        }
        var Ie;
        if (typeof ur == "function")
          Ie = function () {
            ur(sr);
          };
        else if (typeof MessageChannel < "u") {
          var er = new MessageChannel(),
            pr = er.port2;
          (er.port1.onmessage = sr),
            (Ie = function () {
              pr.postMessage(null);
            });
        } else
          Ie = function () {
            Q(sr, 0);
          };
        function Te(w) {
          (Pe = w), Ce || ((Ce = !0), Ie());
        }
        function ae(w, P) {
          We = Q(function () {
            w(L.unstable_now());
          }, P);
        }
        (L.unstable_IdlePriority = 5),
          (L.unstable_ImmediatePriority = 1),
          (L.unstable_LowPriority = 4),
          (L.unstable_NormalPriority = 3),
          (L.unstable_Profiling = null),
          (L.unstable_UserBlockingPriority = 2),
          (L.unstable_cancelCallback = function (w) {
            w.callback = null;
          }),
          (L.unstable_continueExecution = function () {
            $e || He || (($e = !0), Te(qe));
          }),
          (L.unstable_forceFrameRate = function (w) {
            0 > w || 125 < w
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (Cr = 0 < w ? Math.floor(1e3 / w) : 5);
          }),
          (L.unstable_getCurrentPriorityLevel = function () {
            return Z;
          }),
          (L.unstable_getFirstCallbackNode = function () {
            return d(O);
          }),
          (L.unstable_next = function (w) {
            switch (Z) {
              case 1:
              case 2:
              case 3:
                var P = 3;
                break;
              default:
                P = Z;
            }
            var x = Z;
            Z = P;
            try {
              return w();
            } finally {
              Z = x;
            }
          }),
          (L.unstable_pauseExecution = function () {}),
          (L.unstable_requestPaint = function () {}),
          (L.unstable_runWithPriority = function (w, P) {
            switch (w) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                w = 3;
            }
            var x = Z;
            Z = w;
            try {
              return P();
            } finally {
              Z = x;
            }
          }),
          (L.unstable_scheduleCallback = function (w, P, x) {
            var p = L.unstable_now();
            switch (
              (typeof x == "object" && x !== null
                ? ((x = x.delay),
                  (x = typeof x == "number" && 0 < x ? p + x : p))
                : (x = p),
              w)
            ) {
              case 1:
                var m = -1;
                break;
              case 2:
                m = 250;
                break;
              case 5:
                m = 1073741823;
                break;
              case 4:
                m = 1e4;
                break;
              default:
                m = 5e3;
            }
            return (
              (m = x + m),
              (w = {
                id: ve++,
                callback: P,
                priorityLevel: w,
                startTime: x,
                expirationTime: m,
                sortIndex: -1,
              }),
              x > p
                ? ((w.sortIndex = x),
                  F(ze, w),
                  d(O) === null &&
                    w === d(ze) &&
                    (J ? (mr(We), (We = -1)) : (J = !0), ae(be, x - p)))
                : ((w.sortIndex = m), F(O, w), $e || He || (($e = !0), Te(qe))),
              w
            );
          }),
          (L.unstable_shouldYield = Qr),
          (L.unstable_wrapCallback = function (w) {
            var P = Z;
            return function () {
              var x = Z;
              Z = P;
              try {
                return w.apply(this, arguments);
              } finally {
                Z = x;
              }
            };
          });
      })(_0)),
    _0
  );
}
var Pu;
function Os() {
  return Pu || ((Pu = 1), (C0.exports = Ms())), C0.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Tu;
function Ds() {
  if (Tu) return De;
  Tu = 1;
  var L = N0(),
    F = Os();
  function d(e) {
    for (
      var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
        n = 1;
      n < arguments.length;
      n++
    )
      r += "&args[]=" + encodeURIComponent(arguments[n]);
    return (
      "Minified React error #" +
      e +
      "; visit " +
      r +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  var Ee = new Set(),
    U = {};
  function W(e, r) {
    oe(e, r), oe(e + "Capture", r);
  }
  function oe(e, r) {
    for (U[e] = r, e = 0; e < r.length; e++) Ee.add(r[e]);
  }
  var ie = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    O = Object.prototype.hasOwnProperty,
    ze =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    ve = {},
    re = {};
  function Z(e) {
    return O.call(re, e)
      ? !0
      : O.call(ve, e)
        ? !1
        : ze.test(e)
          ? (re[e] = !0)
          : ((ve[e] = !0), !1);
  }
  function He(e, r, n, t) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof r) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return t
          ? !1
          : n !== null
            ? !n.acceptsBooleans
            : ((e = e.toLowerCase().slice(0, 5)),
              e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function $e(e, r, n, t) {
    if (r === null || typeof r > "u" || He(e, r, n, t)) return !0;
    if (t) return !1;
    if (n !== null)
      switch (n.type) {
        case 3:
          return !r;
        case 4:
          return r === !1;
        case 5:
          return isNaN(r);
        case 6:
          return isNaN(r) || 1 > r;
      }
    return !1;
  }
  function J(e, r, n, t, a, l, o) {
    (this.acceptsBooleans = r === 2 || r === 3 || r === 4),
      (this.attributeName = t),
      (this.attributeNamespace = a),
      (this.mustUseProperty = n),
      (this.propertyName = e),
      (this.type = r),
      (this.sanitizeURL = l),
      (this.removeEmptyString = o);
  }
  var Q = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
      Q[e] = new J(e, 0, !1, e, null, !1, !1);
    }),
    [
      ["acceptCharset", "accept-charset"],
      ["className", "class"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
    ].forEach(function (e) {
      var r = e[0];
      Q[r] = new J(r, 1, !1, e[1], null, !1, !1);
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(
      function (e) {
        Q[e] = new J(e, 2, !1, e.toLowerCase(), null, !1, !1);
      },
    ),
    [
      "autoReverse",
      "externalResourcesRequired",
      "focusable",
      "preserveAlpha",
    ].forEach(function (e) {
      Q[e] = new J(e, 2, !1, e, null, !1, !1);
    }),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
      .split(" ")
      .forEach(function (e) {
        Q[e] = new J(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ["checked", "multiple", "muted", "selected"].forEach(function (e) {
      Q[e] = new J(e, 3, !0, e, null, !1, !1);
    }),
    ["capture", "download"].forEach(function (e) {
      Q[e] = new J(e, 4, !1, e, null, !1, !1);
    }),
    ["cols", "rows", "size", "span"].forEach(function (e) {
      Q[e] = new J(e, 6, !1, e, null, !1, !1);
    }),
    ["rowSpan", "start"].forEach(function (e) {
      Q[e] = new J(e, 5, !1, e.toLowerCase(), null, !1, !1);
    });
  var mr = /[\-:]([a-z])/g;
  function ur(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
      var r = e.replace(mr, ur);
      Q[r] = new J(r, 1, !1, e, null, !1, !1);
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function (e) {
        var r = e.replace(mr, ur);
        Q[r] = new J(r, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
      }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
      var r = e.replace(mr, ur);
      Q[r] = new J(r, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
    }),
    ["tabIndex", "crossOrigin"].forEach(function (e) {
      Q[e] = new J(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (Q.xlinkHref = new J(
      "xlinkHref",
      1,
      !1,
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      !1,
    )),
    ["src", "href", "action", "formAction"].forEach(function (e) {
      Q[e] = new J(e, 1, !1, e.toLowerCase(), null, !0, !0);
    });
  function Je(e, r, n, t) {
    var a = Q.hasOwnProperty(r) ? Q[r] : null;
    (a !== null
      ? a.type !== 0
      : t ||
        !(2 < r.length) ||
        (r[0] !== "o" && r[0] !== "O") ||
        (r[1] !== "n" && r[1] !== "N")) &&
      ($e(r, n, a, t) && (n = null),
      t || a === null
        ? Z(r) &&
          (n === null ? e.removeAttribute(r) : e.setAttribute(r, "" + n))
        : a.mustUseProperty
          ? (e[a.propertyName] = n === null ? (a.type === 3 ? !1 : "") : n)
          : ((r = a.attributeName),
            (t = a.attributeNamespace),
            n === null
              ? e.removeAttribute(r)
              : ((a = a.type),
                (n = a === 3 || (a === 4 && n === !0) ? "" : "" + n),
                t ? e.setAttributeNS(t, r, n) : e.setAttribute(r, n))));
  }
  var be = L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    qe = Symbol.for("react.element"),
    Ce = Symbol.for("react.portal"),
    Pe = Symbol.for("react.fragment"),
    We = Symbol.for("react.strict_mode"),
    Cr = Symbol.for("react.profiler"),
    yr = Symbol.for("react.provider"),
    Qr = Symbol.for("react.context"),
    sr = Symbol.for("react.forward_ref"),
    Ie = Symbol.for("react.suspense"),
    er = Symbol.for("react.suspense_list"),
    pr = Symbol.for("react.memo"),
    Te = Symbol.for("react.lazy"),
    ae = Symbol.for("react.offscreen"),
    w = Symbol.iterator;
  function P(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (w && e[w]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var x = Object.assign,
    p;
  function m(e) {
    if (p === void 0)
      try {
        throw Error();
      } catch (n) {
        var r = n.stack.trim().match(/\n( *(at )?)/);
        p = (r && r[1]) || "";
      }
    return (
      `
` +
      p +
      e
    );
  }
  var j = !1;
  function D(e, r) {
    if (!e || j) return "";
    j = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (r)
        if (
          ((r = function () {
            throw Error();
          }),
          Object.defineProperty(r.prototype, "props", {
            set: function () {
              throw Error();
            },
          }),
          typeof Reflect == "object" && Reflect.construct)
        ) {
          try {
            Reflect.construct(r, []);
          } catch (g) {
            var t = g;
          }
          Reflect.construct(e, [], r);
        } else {
          try {
            r.call();
          } catch (g) {
            t = g;
          }
          e.call(r.prototype);
        }
      else {
        try {
          throw Error();
        } catch (g) {
          t = g;
        }
        e();
      }
    } catch (g) {
      if (g && t && typeof g.stack == "string") {
        for (
          var a = g.stack.split(`
`),
            l = t.stack.split(`
`),
            o = a.length - 1,
            i = l.length - 1;
          1 <= o && 0 <= i && a[o] !== l[i];

        )
          i--;
        for (; 1 <= o && 0 <= i; o--, i--)
          if (a[o] !== l[i]) {
            if (o !== 1 || i !== 1)
              do
                if ((o--, i--, 0 > i || a[o] !== l[i])) {
                  var u =
                    `
` + a[o].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      u.includes("<anonymous>") &&
                      (u = u.replace("<anonymous>", e.displayName)),
                    u
                  );
                }
              while (1 <= o && 0 <= i);
            break;
          }
      }
    } finally {
      (j = !1), (Error.prepareStackTrace = n);
    }
    return (e = e ? e.displayName || e.name : "") ? m(e) : "";
  }
  function A(e) {
    switch (e.tag) {
      case 5:
        return m(e.type);
      case 16:
        return m("Lazy");
      case 13:
        return m("Suspense");
      case 19:
        return m("SuspenseList");
      case 0:
      case 2:
      case 15:
        return (e = D(e.type, !1)), e;
      case 11:
        return (e = D(e.type.render, !1)), e;
      case 1:
        return (e = D(e.type, !0)), e;
      default:
        return "";
    }
  }
  function V(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case Pe:
        return "Fragment";
      case Ce:
        return "Portal";
      case Cr:
        return "Profiler";
      case We:
        return "StrictMode";
      case Ie:
        return "Suspense";
      case er:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Qr:
          return (e.displayName || "Context") + ".Consumer";
        case yr:
          return (e._context.displayName || "Context") + ".Provider";
        case sr:
          var r = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = r.displayName || r.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case pr:
          return (
            (r = e.displayName || null), r !== null ? r : V(e.type) || "Memo"
          );
        case Te:
          (r = e._payload), (e = e._init);
          try {
            return V(e(r));
          } catch {}
      }
    return null;
  }
  function K(e) {
    var r = e.type;
    switch (e.tag) {
      case 24:
        return "Cache";
      case 9:
        return (r.displayName || "Context") + ".Consumer";
      case 10:
        return (r._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return (
          (e = r.render),
          (e = e.displayName || e.name || ""),
          r.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
        );
      case 7:
        return "Fragment";
      case 5:
        return r;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return V(r);
      case 8:
        return r === We ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof r == "function") return r.displayName || r.name || null;
        if (typeof r == "string") return r;
    }
    return null;
  }
  function H(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function q(e) {
    var r = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (r === "checkbox" || r === "radio")
    );
  }
  function Fe(e) {
    var r = q(e) ? "checked" : "value",
      n = Object.getOwnPropertyDescriptor(e.constructor.prototype, r),
      t = "" + e[r];
    if (
      !e.hasOwnProperty(r) &&
      typeof n < "u" &&
      typeof n.get == "function" &&
      typeof n.set == "function"
    ) {
      var a = n.get,
        l = n.set;
      return (
        Object.defineProperty(e, r, {
          configurable: !0,
          get: function () {
            return a.call(this);
          },
          set: function (o) {
            (t = "" + o), l.call(this, o);
          },
        }),
        Object.defineProperty(e, r, { enumerable: n.enumerable }),
        {
          getValue: function () {
            return t;
          },
          setValue: function (o) {
            t = "" + o;
          },
          stopTracking: function () {
            (e._valueTracker = null), delete e[r];
          },
        }
      );
    }
  }
  function bt(e) {
    e._valueTracker || (e._valueTracker = Fe(e));
  }
  function P0(e) {
    if (!e) return !1;
    var r = e._valueTracker;
    if (!r) return !0;
    var n = r.getValue(),
      t = "";
    return (
      e && (t = q(e) ? (e.checked ? "true" : "false") : e.value),
      (e = t),
      e !== n ? (r.setValue(e), !0) : !1
    );
  }
  function wt(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Ta(e, r) {
    var n = r.checked;
    return x({}, r, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: n ?? e._wrapperState.initialChecked,
    });
  }
  function T0(e, r) {
    var n = r.defaultValue == null ? "" : r.defaultValue,
      t = r.checked != null ? r.checked : r.defaultChecked;
    (n = H(r.value != null ? r.value : n)),
      (e._wrapperState = {
        initialChecked: t,
        initialValue: n,
        controlled:
          r.type === "checkbox" || r.type === "radio"
            ? r.checked != null
            : r.value != null,
      });
  }
  function L0(e, r) {
    (r = r.checked), r != null && Je(e, "checked", r, !1);
  }
  function La(e, r) {
    L0(e, r);
    var n = H(r.value),
      t = r.type;
    if (n != null)
      t === "number"
        ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
        : e.value !== "" + n && (e.value = "" + n);
    else if (t === "submit" || t === "reset") {
      e.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value")
      ? Ra(e, r.type, n)
      : r.hasOwnProperty("defaultValue") && Ra(e, r.type, H(r.defaultValue)),
      r.checked == null &&
        r.defaultChecked != null &&
        (e.defaultChecked = !!r.defaultChecked);
  }
  function R0(e, r, n) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var t = r.type;
      if (
        !(
          (t !== "submit" && t !== "reset") ||
          (r.value !== void 0 && r.value !== null)
        )
      )
        return;
      (r = "" + e._wrapperState.initialValue),
        n || r === e.value || (e.value = r),
        (e.defaultValue = r);
    }
    (n = e.name),
      n !== "" && (e.name = ""),
      (e.defaultChecked = !!e._wrapperState.initialChecked),
      n !== "" && (e.name = n);
  }
  function Ra(e, r, n) {
    (r !== "number" || wt(e.ownerDocument) !== e) &&
      (n == null
        ? (e.defaultValue = "" + e._wrapperState.initialValue)
        : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var jn = Array.isArray;
  function on(e, r, n, t) {
    if (((e = e.options), r)) {
      r = {};
      for (var a = 0; a < n.length; a++) r["$" + n[a]] = !0;
      for (n = 0; n < e.length; n++)
        (a = r.hasOwnProperty("$" + e[n].value)),
          e[n].selected !== a && (e[n].selected = a),
          a && t && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + H(n), r = null, a = 0; a < e.length; a++) {
        if (e[a].value === n) {
          (e[a].selected = !0), t && (e[a].defaultSelected = !0);
          return;
        }
        r !== null || e[a].disabled || (r = e[a]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function ja(e, r) {
    if (r.dangerouslySetInnerHTML != null) throw Error(d(91));
    return x({}, r, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue,
    });
  }
  function j0(e, r) {
    var n = r.value;
    if (n == null) {
      if (((n = r.children), (r = r.defaultValue), n != null)) {
        if (r != null) throw Error(d(92));
        if (jn(n)) {
          if (1 < n.length) throw Error(d(93));
          n = n[0];
        }
        r = n;
      }
      r == null && (r = ""), (n = r);
    }
    e._wrapperState = { initialValue: H(n) };
  }
  function M0(e, r) {
    var n = H(r.value),
      t = H(r.defaultValue);
    n != null &&
      ((n = "" + n),
      n !== e.value && (e.value = n),
      r.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
      t != null && (e.defaultValue = "" + t);
  }
  function O0(e) {
    var r = e.textContent;
    r === e._wrapperState.initialValue &&
      r !== "" &&
      r !== null &&
      (e.value = r);
  }
  function D0(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Ma(e, r) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
      ? D0(r)
      : e === "http://www.w3.org/2000/svg" && r === "foreignObject"
        ? "http://www.w3.org/1999/xhtml"
        : e;
  }
  var kt,
    I0 = (function (e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
        ? function (r, n, t, a) {
            MSApp.execUnsafeLocalFunction(function () {
              return e(r, n, t, a);
            });
          }
        : e;
    })(function (e, r) {
      if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
        e.innerHTML = r;
      else {
        for (
          kt = kt || document.createElement("div"),
            kt.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>",
            r = kt.firstChild;
          e.firstChild;

        )
          e.removeChild(e.firstChild);
        for (; r.firstChild; ) e.appendChild(r.firstChild);
      }
    });
  function Mn(e, r) {
    if (r) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = r;
        return;
      }
    }
    e.textContent = r;
  }
  var On = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0,
    },
    Ou = ["Webkit", "ms", "Moz", "O"];
  Object.keys(On).forEach(function (e) {
    Ou.forEach(function (r) {
      (r = r + e.charAt(0).toUpperCase() + e.substring(1)), (On[r] = On[e]);
    });
  });
  function F0(e, r, n) {
    return r == null || typeof r == "boolean" || r === ""
      ? ""
      : n || typeof r != "number" || r === 0 || (On.hasOwnProperty(e) && On[e])
        ? ("" + r).trim()
        : r + "px";
  }
  function U0(e, r) {
    e = e.style;
    for (var n in r)
      if (r.hasOwnProperty(n)) {
        var t = n.indexOf("--") === 0,
          a = F0(n, r[n], t);
        n === "float" && (n = "cssFloat"), t ? e.setProperty(n, a) : (e[n] = a);
      }
  }
  var Du = x(
    { menuitem: !0 },
    {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0,
    },
  );
  function Oa(e, r) {
    if (r) {
      if (Du[e] && (r.children != null || r.dangerouslySetInnerHTML != null))
        throw Error(d(137, e));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null) throw Error(d(60));
        if (
          typeof r.dangerouslySetInnerHTML != "object" ||
          !("__html" in r.dangerouslySetInnerHTML)
        )
          throw Error(d(61));
      }
      if (r.style != null && typeof r.style != "object") throw Error(d(62));
    }
  }
  function Da(e, r) {
    if (e.indexOf("-") === -1) return typeof r.is == "string";
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Ia = null;
  function Fa(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var Ua = null,
    un = null,
    sn = null;
  function A0(e) {
    if ((e = tt(e))) {
      if (typeof Ua != "function") throw Error(d(280));
      var r = e.stateNode;
      r && ((r = $t(r)), Ua(e.stateNode, e.type, r));
    }
  }
  function V0(e) {
    un ? (sn ? sn.push(e) : (sn = [e])) : (un = e);
  }
  function B0() {
    if (un) {
      var e = un,
        r = sn;
      if (((sn = un = null), A0(e), r)) for (e = 0; e < r.length; e++) A0(r[e]);
    }
  }
  function H0(e, r) {
    return e(r);
  }
  function $0() {}
  var Aa = !1;
  function W0(e, r, n) {
    if (Aa) return e(r, n);
    Aa = !0;
    try {
      return H0(e, r, n);
    } finally {
      (Aa = !1), (un !== null || sn !== null) && ($0(), B0());
    }
  }
  function Dn(e, r) {
    var n = e.stateNode;
    if (n === null) return null;
    var t = $t(n);
    if (t === null) return null;
    n = t[r];
    e: switch (r) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (t = !t.disabled) ||
          ((e = e.type),
          (t = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !t);
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(d(231, r, typeof n));
    return n;
  }
  var Va = !1;
  if (ie)
    try {
      var In = {};
      Object.defineProperty(In, "passive", {
        get: function () {
          Va = !0;
        },
      }),
        window.addEventListener("test", In, In),
        window.removeEventListener("test", In, In);
    } catch {
      Va = !1;
    }
  function Iu(e, r, n, t, a, l, o, i, u) {
    var g = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(n, g);
    } catch (y) {
      this.onError(y);
    }
  }
  var Fn = !1,
    St = null,
    xt = !1,
    Ba = null,
    Fu = {
      onError: function (e) {
        (Fn = !0), (St = e);
      },
    };
  function Uu(e, r, n, t, a, l, o, i, u) {
    (Fn = !1), (St = null), Iu.apply(Fu, arguments);
  }
  function Au(e, r, n, t, a, l, o, i, u) {
    if ((Uu.apply(this, arguments), Fn)) {
      if (Fn) {
        var g = St;
        (Fn = !1), (St = null);
      } else throw Error(d(198));
      xt || ((xt = !0), (Ba = g));
    }
  }
  function Kr(e) {
    var r = e,
      n = e;
    if (e.alternate) for (; r.return; ) r = r.return;
    else {
      e = r;
      do (r = e), r.flags & 4098 && (n = r.return), (e = r.return);
      while (e);
    }
    return r.tag === 3 ? n : null;
  }
  function Q0(e) {
    if (e.tag === 13) {
      var r = e.memoizedState;
      if (
        (r === null && ((e = e.alternate), e !== null && (r = e.memoizedState)),
        r !== null)
      )
        return r.dehydrated;
    }
    return null;
  }
  function K0(e) {
    if (Kr(e) !== e) throw Error(d(188));
  }
  function Vu(e) {
    var r = e.alternate;
    if (!r) {
      if (((r = Kr(e)), r === null)) throw Error(d(188));
      return r !== e ? null : e;
    }
    for (var n = e, t = r; ; ) {
      var a = n.return;
      if (a === null) break;
      var l = a.alternate;
      if (l === null) {
        if (((t = a.return), t !== null)) {
          n = t;
          continue;
        }
        break;
      }
      if (a.child === l.child) {
        for (l = a.child; l; ) {
          if (l === n) return K0(a), e;
          if (l === t) return K0(a), r;
          l = l.sibling;
        }
        throw Error(d(188));
      }
      if (n.return !== t.return) (n = a), (t = l);
      else {
        for (var o = !1, i = a.child; i; ) {
          if (i === n) {
            (o = !0), (n = a), (t = l);
            break;
          }
          if (i === t) {
            (o = !0), (t = a), (n = l);
            break;
          }
          i = i.sibling;
        }
        if (!o) {
          for (i = l.child; i; ) {
            if (i === n) {
              (o = !0), (n = l), (t = a);
              break;
            }
            if (i === t) {
              (o = !0), (t = l), (n = a);
              break;
            }
            i = i.sibling;
          }
          if (!o) throw Error(d(189));
        }
      }
      if (n.alternate !== t) throw Error(d(190));
    }
    if (n.tag !== 3) throw Error(d(188));
    return n.stateNode.current === n ? e : r;
  }
  function Y0(e) {
    return (e = Vu(e)), e !== null ? X0(e) : null;
  }
  function X0(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var r = X0(e);
      if (r !== null) return r;
      e = e.sibling;
    }
    return null;
  }
  var G0 = F.unstable_scheduleCallback,
    Z0 = F.unstable_cancelCallback,
    Bu = F.unstable_shouldYield,
    Hu = F.unstable_requestPaint,
    ue = F.unstable_now,
    $u = F.unstable_getCurrentPriorityLevel,
    Ha = F.unstable_ImmediatePriority,
    J0 = F.unstable_UserBlockingPriority,
    Et = F.unstable_NormalPriority,
    Wu = F.unstable_LowPriority,
    q0 = F.unstable_IdlePriority,
    zt = null,
    cr = null;
  function Qu(e) {
    if (cr && typeof cr.onCommitFiberRoot == "function")
      try {
        cr.onCommitFiberRoot(zt, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var rr = Math.clz32 ? Math.clz32 : Xu,
    Ku = Math.log,
    Yu = Math.LN2;
  function Xu(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((Ku(e) / Yu) | 0)) | 0;
  }
  var Ct = 64,
    _t = 4194304;
  function Un(e) {
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e;
    }
  }
  function Nt(e, r) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var t = 0,
      a = e.suspendedLanes,
      l = e.pingedLanes,
      o = n & 268435455;
    if (o !== 0) {
      var i = o & ~a;
      i !== 0 ? (t = Un(i)) : ((l &= o), l !== 0 && (t = Un(l)));
    } else (o = n & ~a), o !== 0 ? (t = Un(o)) : l !== 0 && (t = Un(l));
    if (t === 0) return 0;
    if (
      r !== 0 &&
      r !== t &&
      !(r & a) &&
      ((a = t & -t), (l = r & -r), a >= l || (a === 16 && (l & 4194240) !== 0))
    )
      return r;
    if ((t & 4 && (t |= n & 16), (r = e.entangledLanes), r !== 0))
      for (e = e.entanglements, r &= t; 0 < r; )
        (n = 31 - rr(r)), (a = 1 << n), (t |= e[n]), (r &= ~a);
    return t;
  }
  function Gu(e, r) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return r + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return r + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Zu(e, r) {
    for (
      var n = e.suspendedLanes,
        t = e.pingedLanes,
        a = e.expirationTimes,
        l = e.pendingLanes;
      0 < l;

    ) {
      var o = 31 - rr(l),
        i = 1 << o,
        u = a[o];
      u === -1
        ? (!(i & n) || i & t) && (a[o] = Gu(i, r))
        : u <= r && (e.expiredLanes |= i),
        (l &= ~i);
    }
  }
  function $a(e) {
    return (
      (e = e.pendingLanes & -1073741825),
      e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    );
  }
  function eo() {
    var e = Ct;
    return (Ct <<= 1), !(Ct & 4194240) && (Ct = 64), e;
  }
  function Wa(e) {
    for (var r = [], n = 0; 31 > n; n++) r.push(e);
    return r;
  }
  function An(e, r, n) {
    (e.pendingLanes |= r),
      r !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (r = 31 - rr(r)),
      (e[r] = n);
  }
  function Ju(e, r) {
    var n = e.pendingLanes & ~r;
    (e.pendingLanes = r),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.expiredLanes &= r),
      (e.mutableReadLanes &= r),
      (e.entangledLanes &= r),
      (r = e.entanglements);
    var t = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var a = 31 - rr(n),
        l = 1 << a;
      (r[a] = 0), (t[a] = -1), (e[a] = -1), (n &= ~l);
    }
  }
  function Qa(e, r) {
    var n = (e.entangledLanes |= r);
    for (e = e.entanglements; n; ) {
      var t = 31 - rr(n),
        a = 1 << t;
      (a & r) | (e[t] & r) && (e[t] |= r), (n &= ~a);
    }
  }
  var $ = 0;
  function ro(e) {
    return (
      (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
    );
  }
  var no,
    Ka,
    to,
    ao,
    lo,
    Ya = !1,
    Pt = [],
    _r = null,
    Nr = null,
    Pr = null,
    Vn = new Map(),
    Bn = new Map(),
    Tr = [],
    qu =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " ",
      );
  function oo(e, r) {
    switch (e) {
      case "focusin":
      case "focusout":
        _r = null;
        break;
      case "dragenter":
      case "dragleave":
        Nr = null;
        break;
      case "mouseover":
      case "mouseout":
        Pr = null;
        break;
      case "pointerover":
      case "pointerout":
        Vn.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Bn.delete(r.pointerId);
    }
  }
  function Hn(e, r, n, t, a, l) {
    return e === null || e.nativeEvent !== l
      ? ((e = {
          blockedOn: r,
          domEventName: n,
          eventSystemFlags: t,
          nativeEvent: l,
          targetContainers: [a],
        }),
        r !== null && ((r = tt(r)), r !== null && Ka(r)),
        e)
      : ((e.eventSystemFlags |= t),
        (r = e.targetContainers),
        a !== null && r.indexOf(a) === -1 && r.push(a),
        e);
  }
  function e1(e, r, n, t, a) {
    switch (r) {
      case "focusin":
        return (_r = Hn(_r, e, r, n, t, a)), !0;
      case "dragenter":
        return (Nr = Hn(Nr, e, r, n, t, a)), !0;
      case "mouseover":
        return (Pr = Hn(Pr, e, r, n, t, a)), !0;
      case "pointerover":
        var l = a.pointerId;
        return Vn.set(l, Hn(Vn.get(l) || null, e, r, n, t, a)), !0;
      case "gotpointercapture":
        return (
          (l = a.pointerId), Bn.set(l, Hn(Bn.get(l) || null, e, r, n, t, a)), !0
        );
    }
    return !1;
  }
  function io(e) {
    var r = Yr(e.target);
    if (r !== null) {
      var n = Kr(r);
      if (n !== null) {
        if (((r = n.tag), r === 13)) {
          if (((r = Q0(n)), r !== null)) {
            (e.blockedOn = r),
              lo(e.priority, function () {
                to(n);
              });
            return;
          }
        } else if (r === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Tt(e) {
    if (e.blockedOn !== null) return !1;
    for (var r = e.targetContainers; 0 < r.length; ) {
      var n = Ga(e.domEventName, e.eventSystemFlags, r[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var t = new n.constructor(n.type, n);
        (Ia = t), n.target.dispatchEvent(t), (Ia = null);
      } else return (r = tt(n)), r !== null && Ka(r), (e.blockedOn = n), !1;
      r.shift();
    }
    return !0;
  }
  function uo(e, r, n) {
    Tt(e) && n.delete(r);
  }
  function r1() {
    (Ya = !1),
      _r !== null && Tt(_r) && (_r = null),
      Nr !== null && Tt(Nr) && (Nr = null),
      Pr !== null && Tt(Pr) && (Pr = null),
      Vn.forEach(uo),
      Bn.forEach(uo);
  }
  function $n(e, r) {
    e.blockedOn === r &&
      ((e.blockedOn = null),
      Ya ||
        ((Ya = !0),
        F.unstable_scheduleCallback(F.unstable_NormalPriority, r1)));
  }
  function Wn(e) {
    function r(a) {
      return $n(a, e);
    }
    if (0 < Pt.length) {
      $n(Pt[0], e);
      for (var n = 1; n < Pt.length; n++) {
        var t = Pt[n];
        t.blockedOn === e && (t.blockedOn = null);
      }
    }
    for (
      _r !== null && $n(_r, e),
        Nr !== null && $n(Nr, e),
        Pr !== null && $n(Pr, e),
        Vn.forEach(r),
        Bn.forEach(r),
        n = 0;
      n < Tr.length;
      n++
    )
      (t = Tr[n]), t.blockedOn === e && (t.blockedOn = null);
    for (; 0 < Tr.length && ((n = Tr[0]), n.blockedOn === null); )
      io(n), n.blockedOn === null && Tr.shift();
  }
  var pn = be.ReactCurrentBatchConfig,
    Lt = !0;
  function n1(e, r, n, t) {
    var a = $,
      l = pn.transition;
    pn.transition = null;
    try {
      ($ = 1), Xa(e, r, n, t);
    } finally {
      ($ = a), (pn.transition = l);
    }
  }
  function t1(e, r, n, t) {
    var a = $,
      l = pn.transition;
    pn.transition = null;
    try {
      ($ = 4), Xa(e, r, n, t);
    } finally {
      ($ = a), (pn.transition = l);
    }
  }
  function Xa(e, r, n, t) {
    if (Lt) {
      var a = Ga(e, r, n, t);
      if (a === null) gl(e, r, t, Rt, n), oo(e, t);
      else if (e1(a, e, r, n, t)) t.stopPropagation();
      else if ((oo(e, t), r & 4 && -1 < qu.indexOf(e))) {
        for (; a !== null; ) {
          var l = tt(a);
          if (
            (l !== null && no(l),
            (l = Ga(e, r, n, t)),
            l === null && gl(e, r, t, Rt, n),
            l === a)
          )
            break;
          a = l;
        }
        a !== null && t.stopPropagation();
      } else gl(e, r, t, null, n);
    }
  }
  var Rt = null;
  function Ga(e, r, n, t) {
    if (((Rt = null), (e = Fa(t)), (e = Yr(e)), e !== null))
      if (((r = Kr(e)), r === null)) e = null;
      else if (((n = r.tag), n === 13)) {
        if (((e = Q0(r)), e !== null)) return e;
        e = null;
      } else if (n === 3) {
        if (r.stateNode.current.memoizedState.isDehydrated)
          return r.tag === 3 ? r.stateNode.containerInfo : null;
        e = null;
      } else r !== e && (e = null);
    return (Rt = e), null;
  }
  function so(e) {
    switch (e) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch ($u()) {
          case Ha:
            return 1;
          case J0:
            return 4;
          case Et:
          case Wu:
            return 16;
          case q0:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Lr = null,
    Za = null,
    jt = null;
  function po() {
    if (jt) return jt;
    var e,
      r = Za,
      n = r.length,
      t,
      a = "value" in Lr ? Lr.value : Lr.textContent,
      l = a.length;
    for (e = 0; e < n && r[e] === a[e]; e++);
    var o = n - e;
    for (t = 1; t <= o && r[n - t] === a[l - t]; t++);
    return (jt = a.slice(e, 1 < t ? 1 - t : void 0));
  }
  function Mt(e) {
    var r = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && r === 13 && (e = 13))
        : (e = r),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function Ot() {
    return !0;
  }
  function co() {
    return !1;
  }
  function Ue(e) {
    function r(n, t, a, l, o) {
      (this._reactName = n),
        (this._targetInst = a),
        (this.type = t),
        (this.nativeEvent = l),
        (this.target = o),
        (this.currentTarget = null);
      for (var i in e)
        e.hasOwnProperty(i) && ((n = e[i]), (this[i] = n ? n(l) : l[i]));
      return (
        (this.isDefaultPrevented = (
          l.defaultPrevented != null ? l.defaultPrevented : l.returnValue === !1
        )
          ? Ot
          : co),
        (this.isPropagationStopped = co),
        this
      );
    }
    return (
      x(r.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            (this.isDefaultPrevented = Ot));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            (this.isPropagationStopped = Ot));
        },
        persist: function () {},
        isPersistent: Ot,
      }),
      r
    );
  }
  var cn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Ja = Ue(cn),
    Qn = x({}, cn, { view: 0, detail: 0 }),
    a1 = Ue(Qn),
    qa,
    el,
    Kn,
    Dt = x({}, Qn, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: nl,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return "movementX" in e
          ? e.movementX
          : (e !== Kn &&
              (Kn && e.type === "mousemove"
                ? ((qa = e.screenX - Kn.screenX), (el = e.screenY - Kn.screenY))
                : (el = qa = 0),
              (Kn = e)),
            qa);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : el;
      },
    }),
    fo = Ue(Dt),
    l1 = x({}, Dt, { dataTransfer: 0 }),
    o1 = Ue(l1),
    i1 = x({}, Qn, { relatedTarget: 0 }),
    rl = Ue(i1),
    u1 = x({}, cn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    s1 = Ue(u1),
    p1 = x({}, cn, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    c1 = Ue(p1),
    f1 = x({}, cn, { data: 0 }),
    go = Ue(f1),
    g1 = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    d1 = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    h1 = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function m1(e) {
    var r = this.nativeEvent;
    return r.getModifierState
      ? r.getModifierState(e)
      : (e = h1[e])
        ? !!r[e]
        : !1;
  }
  function nl() {
    return m1;
  }
  var y1 = x({}, Qn, {
      key: function (e) {
        if (e.key) {
          var r = g1[e.key] || e.key;
          if (r !== "Unidentified") return r;
        }
        return e.type === "keypress"
          ? ((e = Mt(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
            ? d1[e.keyCode] || "Unidentified"
            : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: nl,
      charCode: function (e) {
        return e.type === "keypress" ? Mt(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? Mt(e)
          : e.type === "keydown" || e.type === "keyup"
            ? e.keyCode
            : 0;
      },
    }),
    v1 = Ue(y1),
    b1 = x({}, Dt, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    ho = Ue(b1),
    w1 = x({}, Qn, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: nl,
    }),
    k1 = Ue(w1),
    S1 = x({}, cn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    x1 = Ue(S1),
    E1 = x({}, Dt, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
            ? -e.wheelDeltaX
            : 0;
      },
      deltaY: function (e) {
        return "deltaY" in e
          ? e.deltaY
          : "wheelDeltaY" in e
            ? -e.wheelDeltaY
            : "wheelDelta" in e
              ? -e.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    z1 = Ue(E1),
    C1 = [9, 13, 27, 32],
    tl = ie && "CompositionEvent" in window,
    Yn = null;
  ie && "documentMode" in document && (Yn = document.documentMode);
  var _1 = ie && "TextEvent" in window && !Yn,
    mo = ie && (!tl || (Yn && 8 < Yn && 11 >= Yn)),
    yo = " ",
    vo = !1;
  function bo(e, r) {
    switch (e) {
      case "keyup":
        return C1.indexOf(r.keyCode) !== -1;
      case "keydown":
        return r.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function wo(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
  }
  var fn = !1;
  function N1(e, r) {
    switch (e) {
      case "compositionend":
        return wo(r);
      case "keypress":
        return r.which !== 32 ? null : ((vo = !0), yo);
      case "textInput":
        return (e = r.data), e === yo && vo ? null : e;
      default:
        return null;
    }
  }
  function P1(e, r) {
    if (fn)
      return e === "compositionend" || (!tl && bo(e, r))
        ? ((e = po()), (jt = Za = Lr = null), (fn = !1), e)
        : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(r.ctrlKey || r.altKey || r.metaKey) || (r.ctrlKey && r.altKey)) {
          if (r.char && 1 < r.char.length) return r.char;
          if (r.which) return String.fromCharCode(r.which);
        }
        return null;
      case "compositionend":
        return mo && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var T1 = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function ko(e) {
    var r = e && e.nodeName && e.nodeName.toLowerCase();
    return r === "input" ? !!T1[e.type] : r === "textarea";
  }
  function So(e, r, n, t) {
    V0(t),
      (r = Vt(r, "onChange")),
      0 < r.length &&
        ((n = new Ja("onChange", "change", null, n, t)),
        e.push({ event: n, listeners: r }));
  }
  var Xn = null,
    Gn = null;
  function L1(e) {
    Ao(e, 0);
  }
  function It(e) {
    var r = yn(e);
    if (P0(r)) return e;
  }
  function R1(e, r) {
    if (e === "change") return r;
  }
  var xo = !1;
  if (ie) {
    var al;
    if (ie) {
      var ll = "oninput" in document;
      if (!ll) {
        var Eo = document.createElement("div");
        Eo.setAttribute("oninput", "return;"),
          (ll = typeof Eo.oninput == "function");
      }
      al = ll;
    } else al = !1;
    xo = al && (!document.documentMode || 9 < document.documentMode);
  }
  function zo() {
    Xn && (Xn.detachEvent("onpropertychange", Co), (Gn = Xn = null));
  }
  function Co(e) {
    if (e.propertyName === "value" && It(Gn)) {
      var r = [];
      So(r, Gn, e, Fa(e)), W0(L1, r);
    }
  }
  function j1(e, r, n) {
    e === "focusin"
      ? (zo(), (Xn = r), (Gn = n), Xn.attachEvent("onpropertychange", Co))
      : e === "focusout" && zo();
  }
  function M1(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return It(Gn);
  }
  function O1(e, r) {
    if (e === "click") return It(r);
  }
  function D1(e, r) {
    if (e === "input" || e === "change") return It(r);
  }
  function I1(e, r) {
    return (e === r && (e !== 0 || 1 / e === 1 / r)) || (e !== e && r !== r);
  }
  var nr = typeof Object.is == "function" ? Object.is : I1;
  function Zn(e, r) {
    if (nr(e, r)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof r != "object" ||
      r === null
    )
      return !1;
    var n = Object.keys(e),
      t = Object.keys(r);
    if (n.length !== t.length) return !1;
    for (t = 0; t < n.length; t++) {
      var a = n[t];
      if (!O.call(r, a) || !nr(e[a], r[a])) return !1;
    }
    return !0;
  }
  function _o(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function No(e, r) {
    var n = _o(e);
    e = 0;
    for (var t; n; ) {
      if (n.nodeType === 3) {
        if (((t = e + n.textContent.length), e <= r && t >= r))
          return { node: n, offset: r - e };
        e = t;
      }
      e: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break e;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = _o(n);
    }
  }
  function Po(e, r) {
    return e && r
      ? e === r
        ? !0
        : e && e.nodeType === 3
          ? !1
          : r && r.nodeType === 3
            ? Po(e, r.parentNode)
            : "contains" in e
              ? e.contains(r)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(r) & 16)
                : !1
      : !1;
  }
  function To() {
    for (var e = window, r = wt(); r instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof r.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = r.contentWindow;
      else break;
      r = wt(e.document);
    }
    return r;
  }
  function ol(e) {
    var r = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      r &&
      ((r === "input" &&
        (e.type === "text" ||
          e.type === "search" ||
          e.type === "tel" ||
          e.type === "url" ||
          e.type === "password")) ||
        r === "textarea" ||
        e.contentEditable === "true")
    );
  }
  function F1(e) {
    var r = To(),
      n = e.focusedElem,
      t = e.selectionRange;
    if (
      r !== n &&
      n &&
      n.ownerDocument &&
      Po(n.ownerDocument.documentElement, n)
    ) {
      if (t !== null && ol(n)) {
        if (
          ((r = t.start),
          (e = t.end),
          e === void 0 && (e = r),
          "selectionStart" in n)
        )
          (n.selectionStart = r),
            (n.selectionEnd = Math.min(e, n.value.length));
        else if (
          ((e = ((r = n.ownerDocument || document) && r.defaultView) || window),
          e.getSelection)
        ) {
          e = e.getSelection();
          var a = n.textContent.length,
            l = Math.min(t.start, a);
          (t = t.end === void 0 ? l : Math.min(t.end, a)),
            !e.extend && l > t && ((a = t), (t = l), (l = a)),
            (a = No(n, l));
          var o = No(n, t);
          a &&
            o &&
            (e.rangeCount !== 1 ||
              e.anchorNode !== a.node ||
              e.anchorOffset !== a.offset ||
              e.focusNode !== o.node ||
              e.focusOffset !== o.offset) &&
            ((r = r.createRange()),
            r.setStart(a.node, a.offset),
            e.removeAllRanges(),
            l > t
              ? (e.addRange(r), e.extend(o.node, o.offset))
              : (r.setEnd(o.node, o.offset), e.addRange(r)));
        }
      }
      for (r = [], e = n; (e = e.parentNode); )
        e.nodeType === 1 &&
          r.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < r.length; n++)
        (e = r[n]),
          (e.element.scrollLeft = e.left),
          (e.element.scrollTop = e.top);
    }
  }
  var U1 = ie && "documentMode" in document && 11 >= document.documentMode,
    gn = null,
    il = null,
    Jn = null,
    ul = !1;
  function Lo(e, r, n) {
    var t =
      n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    ul ||
      gn == null ||
      gn !== wt(t) ||
      ((t = gn),
      "selectionStart" in t && ol(t)
        ? (t = { start: t.selectionStart, end: t.selectionEnd })
        : ((t = (
            (t.ownerDocument && t.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (t = {
            anchorNode: t.anchorNode,
            anchorOffset: t.anchorOffset,
            focusNode: t.focusNode,
            focusOffset: t.focusOffset,
          })),
      (Jn && Zn(Jn, t)) ||
        ((Jn = t),
        (t = Vt(il, "onSelect")),
        0 < t.length &&
          ((r = new Ja("onSelect", "select", null, r, n)),
          e.push({ event: r, listeners: t }),
          (r.target = gn))));
  }
  function Ft(e, r) {
    var n = {};
    return (
      (n[e.toLowerCase()] = r.toLowerCase()),
      (n["Webkit" + e] = "webkit" + r),
      (n["Moz" + e] = "moz" + r),
      n
    );
  }
  var dn = {
      animationend: Ft("Animation", "AnimationEnd"),
      animationiteration: Ft("Animation", "AnimationIteration"),
      animationstart: Ft("Animation", "AnimationStart"),
      transitionend: Ft("Transition", "TransitionEnd"),
    },
    sl = {},
    Ro = {};
  ie &&
    ((Ro = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete dn.animationend.animation,
      delete dn.animationiteration.animation,
      delete dn.animationstart.animation),
    "TransitionEvent" in window || delete dn.transitionend.transition);
  function Ut(e) {
    if (sl[e]) return sl[e];
    if (!dn[e]) return e;
    var r = dn[e],
      n;
    for (n in r) if (r.hasOwnProperty(n) && n in Ro) return (sl[e] = r[n]);
    return e;
  }
  var jo = Ut("animationend"),
    Mo = Ut("animationiteration"),
    Oo = Ut("animationstart"),
    Do = Ut("transitionend"),
    Io = new Map(),
    Fo =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  function Rr(e, r) {
    Io.set(e, r), W(r, [e]);
  }
  for (var pl = 0; pl < Fo.length; pl++) {
    var cl = Fo[pl],
      A1 = cl.toLowerCase(),
      V1 = cl[0].toUpperCase() + cl.slice(1);
    Rr(A1, "on" + V1);
  }
  Rr(jo, "onAnimationEnd"),
    Rr(Mo, "onAnimationIteration"),
    Rr(Oo, "onAnimationStart"),
    Rr("dblclick", "onDoubleClick"),
    Rr("focusin", "onFocus"),
    Rr("focusout", "onBlur"),
    Rr(Do, "onTransitionEnd"),
    oe("onMouseEnter", ["mouseout", "mouseover"]),
    oe("onMouseLeave", ["mouseout", "mouseover"]),
    oe("onPointerEnter", ["pointerout", "pointerover"]),
    oe("onPointerLeave", ["pointerout", "pointerover"]),
    W(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " ",
      ),
    ),
    W(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    W("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    W(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" "),
    ),
    W(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    W(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    );
  var qn =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    B1 = new Set(
      "cancel close invalid load scroll toggle".split(" ").concat(qn),
    );
  function Uo(e, r, n) {
    var t = e.type || "unknown-event";
    (e.currentTarget = n), Au(t, r, void 0, e), (e.currentTarget = null);
  }
  function Ao(e, r) {
    r = (r & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var t = e[n],
        a = t.event;
      t = t.listeners;
      e: {
        var l = void 0;
        if (r)
          for (var o = t.length - 1; 0 <= o; o--) {
            var i = t[o],
              u = i.instance,
              g = i.currentTarget;
            if (((i = i.listener), u !== l && a.isPropagationStopped()))
              break e;
            Uo(a, i, g), (l = u);
          }
        else
          for (o = 0; o < t.length; o++) {
            if (
              ((i = t[o]),
              (u = i.instance),
              (g = i.currentTarget),
              (i = i.listener),
              u !== l && a.isPropagationStopped())
            )
              break e;
            Uo(a, i, g), (l = u);
          }
      }
    }
    if (xt) throw ((e = Ba), (xt = !1), (Ba = null), e);
  }
  function X(e, r) {
    var n = r[bl];
    n === void 0 && (n = r[bl] = new Set());
    var t = e + "__bubble";
    n.has(t) || (Vo(r, e, 2, !1), n.add(t));
  }
  function fl(e, r, n) {
    var t = 0;
    r && (t |= 4), Vo(n, e, t, r);
  }
  var At = "_reactListening" + Math.random().toString(36).slice(2);
  function et(e) {
    if (!e[At]) {
      (e[At] = !0),
        Ee.forEach(function (n) {
          n !== "selectionchange" && (B1.has(n) || fl(n, !1, e), fl(n, !0, e));
        });
      var r = e.nodeType === 9 ? e : e.ownerDocument;
      r === null || r[At] || ((r[At] = !0), fl("selectionchange", !1, r));
    }
  }
  function Vo(e, r, n, t) {
    switch (so(r)) {
      case 1:
        var a = n1;
        break;
      case 4:
        a = t1;
        break;
      default:
        a = Xa;
    }
    (n = a.bind(null, r, n, e)),
      (a = void 0),
      !Va ||
        (r !== "touchstart" && r !== "touchmove" && r !== "wheel") ||
        (a = !0),
      t
        ? a !== void 0
          ? e.addEventListener(r, n, { capture: !0, passive: a })
          : e.addEventListener(r, n, !0)
        : a !== void 0
          ? e.addEventListener(r, n, { passive: a })
          : e.addEventListener(r, n, !1);
  }
  function gl(e, r, n, t, a) {
    var l = t;
    if (!(r & 1) && !(r & 2) && t !== null)
      e: for (;;) {
        if (t === null) return;
        var o = t.tag;
        if (o === 3 || o === 4) {
          var i = t.stateNode.containerInfo;
          if (i === a || (i.nodeType === 8 && i.parentNode === a)) break;
          if (o === 4)
            for (o = t.return; o !== null; ) {
              var u = o.tag;
              if (
                (u === 3 || u === 4) &&
                ((u = o.stateNode.containerInfo),
                u === a || (u.nodeType === 8 && u.parentNode === a))
              )
                return;
              o = o.return;
            }
          for (; i !== null; ) {
            if (((o = Yr(i)), o === null)) return;
            if (((u = o.tag), u === 5 || u === 6)) {
              t = l = o;
              continue e;
            }
            i = i.parentNode;
          }
        }
        t = t.return;
      }
    W0(function () {
      var g = l,
        y = Fa(n),
        v = [];
      e: {
        var h = Io.get(e);
        if (h !== void 0) {
          var k = Ja,
            E = e;
          switch (e) {
            case "keypress":
              if (Mt(n) === 0) break e;
            case "keydown":
            case "keyup":
              k = v1;
              break;
            case "focusin":
              (E = "focus"), (k = rl);
              break;
            case "focusout":
              (E = "blur"), (k = rl);
              break;
            case "beforeblur":
            case "afterblur":
              k = rl;
              break;
            case "click":
              if (n.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              k = fo;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              k = o1;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              k = k1;
              break;
            case jo:
            case Mo:
            case Oo:
              k = s1;
              break;
            case Do:
              k = x1;
              break;
            case "scroll":
              k = a1;
              break;
            case "wheel":
              k = z1;
              break;
            case "copy":
            case "cut":
            case "paste":
              k = c1;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              k = ho;
          }
          var z = (r & 4) !== 0,
            se = !z && e === "scroll",
            c = z ? (h !== null ? h + "Capture" : null) : h;
          z = [];
          for (var s = g, f; s !== null; ) {
            f = s;
            var b = f.stateNode;
            if (
              (f.tag === 5 &&
                b !== null &&
                ((f = b),
                c !== null &&
                  ((b = Dn(s, c)), b != null && z.push(rt(s, b, f)))),
              se)
            )
              break;
            s = s.return;
          }
          0 < z.length &&
            ((h = new k(h, E, null, n, y)), v.push({ event: h, listeners: z }));
        }
      }
      if (!(r & 7)) {
        e: {
          if (
            ((h = e === "mouseover" || e === "pointerover"),
            (k = e === "mouseout" || e === "pointerout"),
            h &&
              n !== Ia &&
              (E = n.relatedTarget || n.fromElement) &&
              (Yr(E) || E[vr]))
          )
            break e;
          if (
            (k || h) &&
            ((h =
              y.window === y
                ? y
                : (h = y.ownerDocument)
                  ? h.defaultView || h.parentWindow
                  : window),
            k
              ? ((E = n.relatedTarget || n.toElement),
                (k = g),
                (E = E ? Yr(E) : null),
                E !== null &&
                  ((se = Kr(E)), E !== se || (E.tag !== 5 && E.tag !== 6)) &&
                  (E = null))
              : ((k = null), (E = g)),
            k !== E)
          ) {
            if (
              ((z = fo),
              (b = "onMouseLeave"),
              (c = "onMouseEnter"),
              (s = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((z = ho),
                (b = "onPointerLeave"),
                (c = "onPointerEnter"),
                (s = "pointer")),
              (se = k == null ? h : yn(k)),
              (f = E == null ? h : yn(E)),
              (h = new z(b, s + "leave", k, n, y)),
              (h.target = se),
              (h.relatedTarget = f),
              (b = null),
              Yr(y) === g &&
                ((z = new z(c, s + "enter", E, n, y)),
                (z.target = f),
                (z.relatedTarget = se),
                (b = z)),
              (se = b),
              k && E)
            )
              r: {
                for (z = k, c = E, s = 0, f = z; f; f = hn(f)) s++;
                for (f = 0, b = c; b; b = hn(b)) f++;
                for (; 0 < s - f; ) (z = hn(z)), s--;
                for (; 0 < f - s; ) (c = hn(c)), f--;
                for (; s--; ) {
                  if (z === c || (c !== null && z === c.alternate)) break r;
                  (z = hn(z)), (c = hn(c));
                }
                z = null;
              }
            else z = null;
            k !== null && Bo(v, h, k, z, !1),
              E !== null && se !== null && Bo(v, se, E, z, !0);
          }
        }
        e: {
          if (
            ((h = g ? yn(g) : window),
            (k = h.nodeName && h.nodeName.toLowerCase()),
            k === "select" || (k === "input" && h.type === "file"))
          )
            var C = R1;
          else if (ko(h))
            if (xo) C = D1;
            else {
              C = M1;
              var _ = j1;
            }
          else
            (k = h.nodeName) &&
              k.toLowerCase() === "input" &&
              (h.type === "checkbox" || h.type === "radio") &&
              (C = O1);
          if (C && (C = C(e, g))) {
            So(v, C, n, y);
            break e;
          }
          _ && _(e, h, g),
            e === "focusout" &&
              (_ = h._wrapperState) &&
              _.controlled &&
              h.type === "number" &&
              Ra(h, "number", h.value);
        }
        switch (((_ = g ? yn(g) : window), e)) {
          case "focusin":
            (ko(_) || _.contentEditable === "true") &&
              ((gn = _), (il = g), (Jn = null));
            break;
          case "focusout":
            Jn = il = gn = null;
            break;
          case "mousedown":
            ul = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (ul = !1), Lo(v, n, y);
            break;
          case "selectionchange":
            if (U1) break;
          case "keydown":
          case "keyup":
            Lo(v, n, y);
        }
        var N;
        if (tl)
          e: {
            switch (e) {
              case "compositionstart":
                var T = "onCompositionStart";
                break e;
              case "compositionend":
                T = "onCompositionEnd";
                break e;
              case "compositionupdate":
                T = "onCompositionUpdate";
                break e;
            }
            T = void 0;
          }
        else
          fn
            ? bo(e, n) && (T = "onCompositionEnd")
            : e === "keydown" &&
              n.keyCode === 229 &&
              (T = "onCompositionStart");
        T &&
          (mo &&
            n.locale !== "ko" &&
            (fn || T !== "onCompositionStart"
              ? T === "onCompositionEnd" && fn && (N = po())
              : ((Lr = y),
                (Za = "value" in Lr ? Lr.value : Lr.textContent),
                (fn = !0))),
          (_ = Vt(g, T)),
          0 < _.length &&
            ((T = new go(T, e, null, n, y)),
            v.push({ event: T, listeners: _ }),
            N ? (T.data = N) : ((N = wo(n)), N !== null && (T.data = N)))),
          (N = _1 ? N1(e, n) : P1(e, n)) &&
            ((g = Vt(g, "onBeforeInput")),
            0 < g.length &&
              ((y = new go("onBeforeInput", "beforeinput", null, n, y)),
              v.push({ event: y, listeners: g }),
              (y.data = N)));
      }
      Ao(v, r);
    });
  }
  function rt(e, r, n) {
    return { instance: e, listener: r, currentTarget: n };
  }
  function Vt(e, r) {
    for (var n = r + "Capture", t = []; e !== null; ) {
      var a = e,
        l = a.stateNode;
      a.tag === 5 &&
        l !== null &&
        ((a = l),
        (l = Dn(e, n)),
        l != null && t.unshift(rt(e, l, a)),
        (l = Dn(e, r)),
        l != null && t.push(rt(e, l, a))),
        (e = e.return);
    }
    return t;
  }
  function hn(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Bo(e, r, n, t, a) {
    for (var l = r._reactName, o = []; n !== null && n !== t; ) {
      var i = n,
        u = i.alternate,
        g = i.stateNode;
      if (u !== null && u === t) break;
      i.tag === 5 &&
        g !== null &&
        ((i = g),
        a
          ? ((u = Dn(n, l)), u != null && o.unshift(rt(n, u, i)))
          : a || ((u = Dn(n, l)), u != null && o.push(rt(n, u, i)))),
        (n = n.return);
    }
    o.length !== 0 && e.push({ event: r, listeners: o });
  }
  var H1 = /\r\n?/g,
    $1 = /\u0000|\uFFFD/g;
  function Ho(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        H1,
        `
`,
      )
      .replace($1, "");
  }
  function Bt(e, r, n) {
    if (((r = Ho(r)), Ho(e) !== r && n)) throw Error(d(425));
  }
  function Ht() {}
  var dl = null,
    hl = null;
  function ml(e, r) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof r.children == "string" ||
      typeof r.children == "number" ||
      (typeof r.dangerouslySetInnerHTML == "object" &&
        r.dangerouslySetInnerHTML !== null &&
        r.dangerouslySetInnerHTML.__html != null)
    );
  }
  var yl = typeof setTimeout == "function" ? setTimeout : void 0,
    W1 = typeof clearTimeout == "function" ? clearTimeout : void 0,
    $o = typeof Promise == "function" ? Promise : void 0,
    Q1 =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof $o < "u"
          ? function (e) {
              return $o.resolve(null).then(e).catch(K1);
            }
          : yl;
  function K1(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function vl(e, r) {
    var n = r,
      t = 0;
    do {
      var a = n.nextSibling;
      if ((e.removeChild(n), a && a.nodeType === 8))
        if (((n = a.data), n === "/$")) {
          if (t === 0) {
            e.removeChild(a), Wn(r);
            return;
          }
          t--;
        } else (n !== "$" && n !== "$?" && n !== "$!") || t++;
      n = a;
    } while (n);
    Wn(r);
  }
  function jr(e) {
    for (; e != null; e = e.nextSibling) {
      var r = e.nodeType;
      if (r === 1 || r === 3) break;
      if (r === 8) {
        if (((r = e.data), r === "$" || r === "$!" || r === "$?")) break;
        if (r === "/$") return null;
      }
    }
    return e;
  }
  function Wo(e) {
    e = e.previousSibling;
    for (var r = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "$" || n === "$!" || n === "$?") {
          if (r === 0) return e;
          r--;
        } else n === "/$" && r++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var mn = Math.random().toString(36).slice(2),
    fr = "__reactFiber$" + mn,
    nt = "__reactProps$" + mn,
    vr = "__reactContainer$" + mn,
    bl = "__reactEvents$" + mn,
    Y1 = "__reactListeners$" + mn,
    X1 = "__reactHandles$" + mn;
  function Yr(e) {
    var r = e[fr];
    if (r) return r;
    for (var n = e.parentNode; n; ) {
      if ((r = n[vr] || n[fr])) {
        if (
          ((n = r.alternate),
          r.child !== null || (n !== null && n.child !== null))
        )
          for (e = Wo(e); e !== null; ) {
            if ((n = e[fr])) return n;
            e = Wo(e);
          }
        return r;
      }
      (e = n), (n = e.parentNode);
    }
    return null;
  }
  function tt(e) {
    return (
      (e = e[fr] || e[vr]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
        ? null
        : e
    );
  }
  function yn(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(d(33));
  }
  function $t(e) {
    return e[nt] || null;
  }
  var wl = [],
    vn = -1;
  function Mr(e) {
    return { current: e };
  }
  function G(e) {
    0 > vn || ((e.current = wl[vn]), (wl[vn] = null), vn--);
  }
  function Y(e, r) {
    vn++, (wl[vn] = e.current), (e.current = r);
  }
  var Or = {},
    we = Mr(Or),
    Le = Mr(!1),
    Xr = Or;
  function bn(e, r) {
    var n = e.type.contextTypes;
    if (!n) return Or;
    var t = e.stateNode;
    if (t && t.__reactInternalMemoizedUnmaskedChildContext === r)
      return t.__reactInternalMemoizedMaskedChildContext;
    var a = {},
      l;
    for (l in n) a[l] = r[l];
    return (
      t &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = r),
        (e.__reactInternalMemoizedMaskedChildContext = a)),
      a
    );
  }
  function Re(e) {
    return (e = e.childContextTypes), e != null;
  }
  function Wt() {
    G(Le), G(we);
  }
  function Qo(e, r, n) {
    if (we.current !== Or) throw Error(d(168));
    Y(we, r), Y(Le, n);
  }
  function Ko(e, r, n) {
    var t = e.stateNode;
    if (((r = r.childContextTypes), typeof t.getChildContext != "function"))
      return n;
    t = t.getChildContext();
    for (var a in t) if (!(a in r)) throw Error(d(108, K(e) || "Unknown", a));
    return x({}, n, t);
  }
  function Qt(e) {
    return (
      (e =
        ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
        Or),
      (Xr = we.current),
      Y(we, e),
      Y(Le, Le.current),
      !0
    );
  }
  function Yo(e, r, n) {
    var t = e.stateNode;
    if (!t) throw Error(d(169));
    n
      ? ((e = Ko(e, r, Xr)),
        (t.__reactInternalMemoizedMergedChildContext = e),
        G(Le),
        G(we),
        Y(we, e))
      : G(Le),
      Y(Le, n);
  }
  var br = null,
    Kt = !1,
    kl = !1;
  function Xo(e) {
    br === null ? (br = [e]) : br.push(e);
  }
  function G1(e) {
    (Kt = !0), Xo(e);
  }
  function Dr() {
    if (!kl && br !== null) {
      kl = !0;
      var e = 0,
        r = $;
      try {
        var n = br;
        for ($ = 1; e < n.length; e++) {
          var t = n[e];
          do t = t(!0);
          while (t !== null);
        }
        (br = null), (Kt = !1);
      } catch (a) {
        throw (br !== null && (br = br.slice(e + 1)), G0(Ha, Dr), a);
      } finally {
        ($ = r), (kl = !1);
      }
    }
    return null;
  }
  var wn = [],
    kn = 0,
    Yt = null,
    Xt = 0,
    Qe = [],
    Ke = 0,
    Gr = null,
    wr = 1,
    kr = "";
  function Zr(e, r) {
    (wn[kn++] = Xt), (wn[kn++] = Yt), (Yt = e), (Xt = r);
  }
  function Go(e, r, n) {
    (Qe[Ke++] = wr), (Qe[Ke++] = kr), (Qe[Ke++] = Gr), (Gr = e);
    var t = wr;
    e = kr;
    var a = 32 - rr(t) - 1;
    (t &= ~(1 << a)), (n += 1);
    var l = 32 - rr(r) + a;
    if (30 < l) {
      var o = a - (a % 5);
      (l = (t & ((1 << o) - 1)).toString(32)),
        (t >>= o),
        (a -= o),
        (wr = (1 << (32 - rr(r) + a)) | (n << a) | t),
        (kr = l + e);
    } else (wr = (1 << l) | (n << a) | t), (kr = e);
  }
  function Sl(e) {
    e.return !== null && (Zr(e, 1), Go(e, 1, 0));
  }
  function xl(e) {
    for (; e === Yt; )
      (Yt = wn[--kn]), (wn[kn] = null), (Xt = wn[--kn]), (wn[kn] = null);
    for (; e === Gr; )
      (Gr = Qe[--Ke]),
        (Qe[Ke] = null),
        (kr = Qe[--Ke]),
        (Qe[Ke] = null),
        (wr = Qe[--Ke]),
        (Qe[Ke] = null);
  }
  var Ae = null,
    Ve = null,
    ee = !1,
    tr = null;
  function Zo(e, r) {
    var n = Ze(5, null, null, 0);
    (n.elementType = "DELETED"),
      (n.stateNode = r),
      (n.return = e),
      (r = e.deletions),
      r === null ? ((e.deletions = [n]), (e.flags |= 16)) : r.push(n);
  }
  function Jo(e, r) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return (
          (r =
            r.nodeType !== 1 || n.toLowerCase() !== r.nodeName.toLowerCase()
              ? null
              : r),
          r !== null
            ? ((e.stateNode = r), (Ae = e), (Ve = jr(r.firstChild)), !0)
            : !1
        );
      case 6:
        return (
          (r = e.pendingProps === "" || r.nodeType !== 3 ? null : r),
          r !== null ? ((e.stateNode = r), (Ae = e), (Ve = null), !0) : !1
        );
      case 13:
        return (
          (r = r.nodeType !== 8 ? null : r),
          r !== null
            ? ((n = Gr !== null ? { id: wr, overflow: kr } : null),
              (e.memoizedState = {
                dehydrated: r,
                treeContext: n,
                retryLane: 1073741824,
              }),
              (n = Ze(18, null, null, 0)),
              (n.stateNode = r),
              (n.return = e),
              (e.child = n),
              (Ae = e),
              (Ve = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function El(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function zl(e) {
    if (ee) {
      var r = Ve;
      if (r) {
        var n = r;
        if (!Jo(e, r)) {
          if (El(e)) throw Error(d(418));
          r = jr(n.nextSibling);
          var t = Ae;
          r && Jo(e, r)
            ? Zo(t, n)
            : ((e.flags = (e.flags & -4097) | 2), (ee = !1), (Ae = e));
        }
      } else {
        if (El(e)) throw Error(d(418));
        (e.flags = (e.flags & -4097) | 2), (ee = !1), (Ae = e);
      }
    }
  }
  function qo(e) {
    for (
      e = e.return;
      e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;

    )
      e = e.return;
    Ae = e;
  }
  function Gt(e) {
    if (e !== Ae) return !1;
    if (!ee) return qo(e), (ee = !0), !1;
    var r;
    if (
      ((r = e.tag !== 3) &&
        !(r = e.tag !== 5) &&
        ((r = e.type),
        (r = r !== "head" && r !== "body" && !ml(e.type, e.memoizedProps))),
      r && (r = Ve))
    ) {
      if (El(e)) throw (ei(), Error(d(418)));
      for (; r; ) Zo(e, r), (r = jr(r.nextSibling));
    }
    if ((qo(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(d(317));
      e: {
        for (e = e.nextSibling, r = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (r === 0) {
                Ve = jr(e.nextSibling);
                break e;
              }
              r--;
            } else (n !== "$" && n !== "$!" && n !== "$?") || r++;
          }
          e = e.nextSibling;
        }
        Ve = null;
      }
    } else Ve = Ae ? jr(e.stateNode.nextSibling) : null;
    return !0;
  }
  function ei() {
    for (var e = Ve; e; ) e = jr(e.nextSibling);
  }
  function Sn() {
    (Ve = Ae = null), (ee = !1);
  }
  function Cl(e) {
    tr === null ? (tr = [e]) : tr.push(e);
  }
  var Z1 = be.ReactCurrentBatchConfig;
  function at(e, r, n) {
    if (
      ((e = n.ref),
      e !== null && typeof e != "function" && typeof e != "object")
    ) {
      if (n._owner) {
        if (((n = n._owner), n)) {
          if (n.tag !== 1) throw Error(d(309));
          var t = n.stateNode;
        }
        if (!t) throw Error(d(147, e));
        var a = t,
          l = "" + e;
        return r !== null &&
          r.ref !== null &&
          typeof r.ref == "function" &&
          r.ref._stringRef === l
          ? r.ref
          : ((r = function (o) {
              var i = a.refs;
              o === null ? delete i[l] : (i[l] = o);
            }),
            (r._stringRef = l),
            r);
      }
      if (typeof e != "string") throw Error(d(284));
      if (!n._owner) throw Error(d(290, e));
    }
    return e;
  }
  function Zt(e, r) {
    throw (
      ((e = Object.prototype.toString.call(r)),
      Error(
        d(
          31,
          e === "[object Object]"
            ? "object with keys {" + Object.keys(r).join(", ") + "}"
            : e,
        ),
      ))
    );
  }
  function ri(e) {
    var r = e._init;
    return r(e._payload);
  }
  function ni(e) {
    function r(c, s) {
      if (e) {
        var f = c.deletions;
        f === null ? ((c.deletions = [s]), (c.flags |= 16)) : f.push(s);
      }
    }
    function n(c, s) {
      if (!e) return null;
      for (; s !== null; ) r(c, s), (s = s.sibling);
      return null;
    }
    function t(c, s) {
      for (c = new Map(); s !== null; )
        s.key !== null ? c.set(s.key, s) : c.set(s.index, s), (s = s.sibling);
      return c;
    }
    function a(c, s) {
      return (c = $r(c, s)), (c.index = 0), (c.sibling = null), c;
    }
    function l(c, s, f) {
      return (
        (c.index = f),
        e
          ? ((f = c.alternate),
            f !== null
              ? ((f = f.index), f < s ? ((c.flags |= 2), s) : f)
              : ((c.flags |= 2), s))
          : ((c.flags |= 1048576), s)
      );
    }
    function o(c) {
      return e && c.alternate === null && (c.flags |= 2), c;
    }
    function i(c, s, f, b) {
      return s === null || s.tag !== 6
        ? ((s = y0(f, c.mode, b)), (s.return = c), s)
        : ((s = a(s, f)), (s.return = c), s);
    }
    function u(c, s, f, b) {
      var C = f.type;
      return C === Pe
        ? y(c, s, f.props.children, b, f.key)
        : s !== null &&
            (s.elementType === C ||
              (typeof C == "object" &&
                C !== null &&
                C.$$typeof === Te &&
                ri(C) === s.type))
          ? ((b = a(s, f.props)), (b.ref = at(c, s, f)), (b.return = c), b)
          : ((b = ka(f.type, f.key, f.props, null, c.mode, b)),
            (b.ref = at(c, s, f)),
            (b.return = c),
            b);
    }
    function g(c, s, f, b) {
      return s === null ||
        s.tag !== 4 ||
        s.stateNode.containerInfo !== f.containerInfo ||
        s.stateNode.implementation !== f.implementation
        ? ((s = v0(f, c.mode, b)), (s.return = c), s)
        : ((s = a(s, f.children || [])), (s.return = c), s);
    }
    function y(c, s, f, b, C) {
      return s === null || s.tag !== 7
        ? ((s = ln(f, c.mode, b, C)), (s.return = c), s)
        : ((s = a(s, f)), (s.return = c), s);
    }
    function v(c, s, f) {
      if ((typeof s == "string" && s !== "") || typeof s == "number")
        return (s = y0("" + s, c.mode, f)), (s.return = c), s;
      if (typeof s == "object" && s !== null) {
        switch (s.$$typeof) {
          case qe:
            return (
              (f = ka(s.type, s.key, s.props, null, c.mode, f)),
              (f.ref = at(c, null, s)),
              (f.return = c),
              f
            );
          case Ce:
            return (s = v0(s, c.mode, f)), (s.return = c), s;
          case Te:
            var b = s._init;
            return v(c, b(s._payload), f);
        }
        if (jn(s) || P(s))
          return (s = ln(s, c.mode, f, null)), (s.return = c), s;
        Zt(c, s);
      }
      return null;
    }
    function h(c, s, f, b) {
      var C = s !== null ? s.key : null;
      if ((typeof f == "string" && f !== "") || typeof f == "number")
        return C !== null ? null : i(c, s, "" + f, b);
      if (typeof f == "object" && f !== null) {
        switch (f.$$typeof) {
          case qe:
            return f.key === C ? u(c, s, f, b) : null;
          case Ce:
            return f.key === C ? g(c, s, f, b) : null;
          case Te:
            return (C = f._init), h(c, s, C(f._payload), b);
        }
        if (jn(f) || P(f)) return C !== null ? null : y(c, s, f, b, null);
        Zt(c, f);
      }
      return null;
    }
    function k(c, s, f, b, C) {
      if ((typeof b == "string" && b !== "") || typeof b == "number")
        return (c = c.get(f) || null), i(s, c, "" + b, C);
      if (typeof b == "object" && b !== null) {
        switch (b.$$typeof) {
          case qe:
            return (
              (c = c.get(b.key === null ? f : b.key) || null), u(s, c, b, C)
            );
          case Ce:
            return (
              (c = c.get(b.key === null ? f : b.key) || null), g(s, c, b, C)
            );
          case Te:
            var _ = b._init;
            return k(c, s, f, _(b._payload), C);
        }
        if (jn(b) || P(b)) return (c = c.get(f) || null), y(s, c, b, C, null);
        Zt(s, b);
      }
      return null;
    }
    function E(c, s, f, b) {
      for (
        var C = null, _ = null, N = s, T = (s = 0), he = null;
        N !== null && T < f.length;
        T++
      ) {
        N.index > T ? ((he = N), (N = null)) : (he = N.sibling);
        var B = h(c, N, f[T], b);
        if (B === null) {
          N === null && (N = he);
          break;
        }
        e && N && B.alternate === null && r(c, N),
          (s = l(B, s, T)),
          _ === null ? (C = B) : (_.sibling = B),
          (_ = B),
          (N = he);
      }
      if (T === f.length) return n(c, N), ee && Zr(c, T), C;
      if (N === null) {
        for (; T < f.length; T++)
          (N = v(c, f[T], b)),
            N !== null &&
              ((s = l(N, s, T)),
              _ === null ? (C = N) : (_.sibling = N),
              (_ = N));
        return ee && Zr(c, T), C;
      }
      for (N = t(c, N); T < f.length; T++)
        (he = k(N, c, T, f[T], b)),
          he !== null &&
            (e &&
              he.alternate !== null &&
              N.delete(he.key === null ? T : he.key),
            (s = l(he, s, T)),
            _ === null ? (C = he) : (_.sibling = he),
            (_ = he));
      return (
        e &&
          N.forEach(function (Wr) {
            return r(c, Wr);
          }),
        ee && Zr(c, T),
        C
      );
    }
    function z(c, s, f, b) {
      var C = P(f);
      if (typeof C != "function") throw Error(d(150));
      if (((f = C.call(f)), f == null)) throw Error(d(151));
      for (
        var _ = (C = null), N = s, T = (s = 0), he = null, B = f.next();
        N !== null && !B.done;
        T++, B = f.next()
      ) {
        N.index > T ? ((he = N), (N = null)) : (he = N.sibling);
        var Wr = h(c, N, B.value, b);
        if (Wr === null) {
          N === null && (N = he);
          break;
        }
        e && N && Wr.alternate === null && r(c, N),
          (s = l(Wr, s, T)),
          _ === null ? (C = Wr) : (_.sibling = Wr),
          (_ = Wr),
          (N = he);
      }
      if (B.done) return n(c, N), ee && Zr(c, T), C;
      if (N === null) {
        for (; !B.done; T++, B = f.next())
          (B = v(c, B.value, b)),
            B !== null &&
              ((s = l(B, s, T)),
              _ === null ? (C = B) : (_.sibling = B),
              (_ = B));
        return ee && Zr(c, T), C;
      }
      for (N = t(c, N); !B.done; T++, B = f.next())
        (B = k(N, c, T, B.value, b)),
          B !== null &&
            (e && B.alternate !== null && N.delete(B.key === null ? T : B.key),
            (s = l(B, s, T)),
            _ === null ? (C = B) : (_.sibling = B),
            (_ = B));
      return (
        e &&
          N.forEach(function (Ts) {
            return r(c, Ts);
          }),
        ee && Zr(c, T),
        C
      );
    }
    function se(c, s, f, b) {
      if (
        (typeof f == "object" &&
          f !== null &&
          f.type === Pe &&
          f.key === null &&
          (f = f.props.children),
        typeof f == "object" && f !== null)
      ) {
        switch (f.$$typeof) {
          case qe:
            e: {
              for (var C = f.key, _ = s; _ !== null; ) {
                if (_.key === C) {
                  if (((C = f.type), C === Pe)) {
                    if (_.tag === 7) {
                      n(c, _.sibling),
                        (s = a(_, f.props.children)),
                        (s.return = c),
                        (c = s);
                      break e;
                    }
                  } else if (
                    _.elementType === C ||
                    (typeof C == "object" &&
                      C !== null &&
                      C.$$typeof === Te &&
                      ri(C) === _.type)
                  ) {
                    n(c, _.sibling),
                      (s = a(_, f.props)),
                      (s.ref = at(c, _, f)),
                      (s.return = c),
                      (c = s);
                    break e;
                  }
                  n(c, _);
                  break;
                } else r(c, _);
                _ = _.sibling;
              }
              f.type === Pe
                ? ((s = ln(f.props.children, c.mode, b, f.key)),
                  (s.return = c),
                  (c = s))
                : ((b = ka(f.type, f.key, f.props, null, c.mode, b)),
                  (b.ref = at(c, s, f)),
                  (b.return = c),
                  (c = b));
            }
            return o(c);
          case Ce:
            e: {
              for (_ = f.key; s !== null; ) {
                if (s.key === _)
                  if (
                    s.tag === 4 &&
                    s.stateNode.containerInfo === f.containerInfo &&
                    s.stateNode.implementation === f.implementation
                  ) {
                    n(c, s.sibling),
                      (s = a(s, f.children || [])),
                      (s.return = c),
                      (c = s);
                    break e;
                  } else {
                    n(c, s);
                    break;
                  }
                else r(c, s);
                s = s.sibling;
              }
              (s = v0(f, c.mode, b)), (s.return = c), (c = s);
            }
            return o(c);
          case Te:
            return (_ = f._init), se(c, s, _(f._payload), b);
        }
        if (jn(f)) return E(c, s, f, b);
        if (P(f)) return z(c, s, f, b);
        Zt(c, f);
      }
      return (typeof f == "string" && f !== "") || typeof f == "number"
        ? ((f = "" + f),
          s !== null && s.tag === 6
            ? (n(c, s.sibling), (s = a(s, f)), (s.return = c), (c = s))
            : (n(c, s), (s = y0(f, c.mode, b)), (s.return = c), (c = s)),
          o(c))
        : n(c, s);
    }
    return se;
  }
  var xn = ni(!0),
    ti = ni(!1),
    Jt = Mr(null),
    qt = null,
    En = null,
    _l = null;
  function Nl() {
    _l = En = qt = null;
  }
  function Pl(e) {
    var r = Jt.current;
    G(Jt), (e._currentValue = r);
  }
  function Tl(e, r, n) {
    for (; e !== null; ) {
      var t = e.alternate;
      if (
        ((e.childLanes & r) !== r
          ? ((e.childLanes |= r), t !== null && (t.childLanes |= r))
          : t !== null && (t.childLanes & r) !== r && (t.childLanes |= r),
        e === n)
      )
        break;
      e = e.return;
    }
  }
  function zn(e, r) {
    (qt = e),
      (_l = En = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        (e.lanes & r && (je = !0), (e.firstContext = null));
  }
  function Ye(e) {
    var r = e._currentValue;
    if (_l !== e)
      if (((e = { context: e, memoizedValue: r, next: null }), En === null)) {
        if (qt === null) throw Error(d(308));
        (En = e), (qt.dependencies = { lanes: 0, firstContext: e });
      } else En = En.next = e;
    return r;
  }
  var Jr = null;
  function Ll(e) {
    Jr === null ? (Jr = [e]) : Jr.push(e);
  }
  function ai(e, r, n, t) {
    var a = r.interleaved;
    return (
      a === null ? ((n.next = n), Ll(r)) : ((n.next = a.next), (a.next = n)),
      (r.interleaved = n),
      Sr(e, t)
    );
  }
  function Sr(e, r) {
    e.lanes |= r;
    var n = e.alternate;
    for (n !== null && (n.lanes |= r), n = e, e = e.return; e !== null; )
      (e.childLanes |= r),
        (n = e.alternate),
        n !== null && (n.childLanes |= r),
        (n = e),
        (e = e.return);
    return n.tag === 3 ? n.stateNode : null;
  }
  var Ir = !1;
  function Rl(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function li(e, r) {
    (e = e.updateQueue),
      r.updateQueue === e &&
        (r.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          effects: e.effects,
        });
  }
  function xr(e, r) {
    return {
      eventTime: e,
      lane: r,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
    };
  }
  function Fr(e, r, n) {
    var t = e.updateQueue;
    if (t === null) return null;
    if (((t = t.shared), I & 2)) {
      var a = t.pending;
      return (
        a === null ? (r.next = r) : ((r.next = a.next), (a.next = r)),
        (t.pending = r),
        Sr(e, n)
      );
    }
    return (
      (a = t.interleaved),
      a === null ? ((r.next = r), Ll(t)) : ((r.next = a.next), (a.next = r)),
      (t.interleaved = r),
      Sr(e, n)
    );
  }
  function ea(e, r, n) {
    if (
      ((r = r.updateQueue), r !== null && ((r = r.shared), (n & 4194240) !== 0))
    ) {
      var t = r.lanes;
      (t &= e.pendingLanes), (n |= t), (r.lanes = n), Qa(e, n);
    }
  }
  function oi(e, r) {
    var n = e.updateQueue,
      t = e.alternate;
    if (t !== null && ((t = t.updateQueue), n === t)) {
      var a = null,
        l = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var o = {
            eventTime: n.eventTime,
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: n.callback,
            next: null,
          };
          l === null ? (a = l = o) : (l = l.next = o), (n = n.next);
        } while (n !== null);
        l === null ? (a = l = r) : (l = l.next = r);
      } else a = l = r;
      (n = {
        baseState: t.baseState,
        firstBaseUpdate: a,
        lastBaseUpdate: l,
        shared: t.shared,
        effects: t.effects,
      }),
        (e.updateQueue = n);
      return;
    }
    (e = n.lastBaseUpdate),
      e === null ? (n.firstBaseUpdate = r) : (e.next = r),
      (n.lastBaseUpdate = r);
  }
  function ra(e, r, n, t) {
    var a = e.updateQueue;
    Ir = !1;
    var l = a.firstBaseUpdate,
      o = a.lastBaseUpdate,
      i = a.shared.pending;
    if (i !== null) {
      a.shared.pending = null;
      var u = i,
        g = u.next;
      (u.next = null), o === null ? (l = g) : (o.next = g), (o = u);
      var y = e.alternate;
      y !== null &&
        ((y = y.updateQueue),
        (i = y.lastBaseUpdate),
        i !== o &&
          (i === null ? (y.firstBaseUpdate = g) : (i.next = g),
          (y.lastBaseUpdate = u)));
    }
    if (l !== null) {
      var v = a.baseState;
      (o = 0), (y = g = u = null), (i = l);
      do {
        var h = i.lane,
          k = i.eventTime;
        if ((t & h) === h) {
          y !== null &&
            (y = y.next =
              {
                eventTime: k,
                lane: 0,
                tag: i.tag,
                payload: i.payload,
                callback: i.callback,
                next: null,
              });
          e: {
            var E = e,
              z = i;
            switch (((h = r), (k = n), z.tag)) {
              case 1:
                if (((E = z.payload), typeof E == "function")) {
                  v = E.call(k, v, h);
                  break e;
                }
                v = E;
                break e;
              case 3:
                E.flags = (E.flags & -65537) | 128;
              case 0:
                if (
                  ((E = z.payload),
                  (h = typeof E == "function" ? E.call(k, v, h) : E),
                  h == null)
                )
                  break e;
                v = x({}, v, h);
                break e;
              case 2:
                Ir = !0;
            }
          }
          i.callback !== null &&
            i.lane !== 0 &&
            ((e.flags |= 64),
            (h = a.effects),
            h === null ? (a.effects = [i]) : h.push(i));
        } else
          (k = {
            eventTime: k,
            lane: h,
            tag: i.tag,
            payload: i.payload,
            callback: i.callback,
            next: null,
          }),
            y === null ? ((g = y = k), (u = v)) : (y = y.next = k),
            (o |= h);
        if (((i = i.next), i === null)) {
          if (((i = a.shared.pending), i === null)) break;
          (h = i),
            (i = h.next),
            (h.next = null),
            (a.lastBaseUpdate = h),
            (a.shared.pending = null);
        }
      } while (!0);
      if (
        (y === null && (u = v),
        (a.baseState = u),
        (a.firstBaseUpdate = g),
        (a.lastBaseUpdate = y),
        (r = a.shared.interleaved),
        r !== null)
      ) {
        a = r;
        do (o |= a.lane), (a = a.next);
        while (a !== r);
      } else l === null && (a.shared.lanes = 0);
      (rn |= o), (e.lanes = o), (e.memoizedState = v);
    }
  }
  function ii(e, r, n) {
    if (((e = r.effects), (r.effects = null), e !== null))
      for (r = 0; r < e.length; r++) {
        var t = e[r],
          a = t.callback;
        if (a !== null) {
          if (((t.callback = null), (t = n), typeof a != "function"))
            throw Error(d(191, a));
          a.call(t);
        }
      }
  }
  var lt = {},
    gr = Mr(lt),
    ot = Mr(lt),
    it = Mr(lt);
  function qr(e) {
    if (e === lt) throw Error(d(174));
    return e;
  }
  function jl(e, r) {
    switch ((Y(it, r), Y(ot, e), Y(gr, lt), (e = r.nodeType), e)) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : Ma(null, "");
        break;
      default:
        (e = e === 8 ? r.parentNode : r),
          (r = e.namespaceURI || null),
          (e = e.tagName),
          (r = Ma(r, e));
    }
    G(gr), Y(gr, r);
  }
  function Cn() {
    G(gr), G(ot), G(it);
  }
  function ui(e) {
    qr(it.current);
    var r = qr(gr.current),
      n = Ma(r, e.type);
    r !== n && (Y(ot, e), Y(gr, n));
  }
  function Ml(e) {
    ot.current === e && (G(gr), G(ot));
  }
  var ne = Mr(0);
  function na(e) {
    for (var r = e; r !== null; ) {
      if (r.tag === 13) {
        var n = r.memoizedState;
        if (
          n !== null &&
          ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
        )
          return r;
      } else if (r.tag === 19 && r.memoizedProps.revealOrder !== void 0) {
        if (r.flags & 128) return r;
      } else if (r.child !== null) {
        (r.child.return = r), (r = r.child);
        continue;
      }
      if (r === e) break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === e) return null;
        r = r.return;
      }
      (r.sibling.return = r.return), (r = r.sibling);
    }
    return null;
  }
  var Ol = [];
  function Dl() {
    for (var e = 0; e < Ol.length; e++)
      Ol[e]._workInProgressVersionPrimary = null;
    Ol.length = 0;
  }
  var ta = be.ReactCurrentDispatcher,
    Il = be.ReactCurrentBatchConfig,
    en = 0,
    te = null,
    ce = null,
    ge = null,
    aa = !1,
    ut = !1,
    st = 0,
    J1 = 0;
  function ke() {
    throw Error(d(321));
  }
  function Fl(e, r) {
    if (r === null) return !1;
    for (var n = 0; n < r.length && n < e.length; n++)
      if (!nr(e[n], r[n])) return !1;
    return !0;
  }
  function Ul(e, r, n, t, a, l) {
    if (
      ((en = l),
      (te = r),
      (r.memoizedState = null),
      (r.updateQueue = null),
      (r.lanes = 0),
      (ta.current = e === null || e.memoizedState === null ? ns : ts),
      (e = n(t, a)),
      ut)
    ) {
      l = 0;
      do {
        if (((ut = !1), (st = 0), 25 <= l)) throw Error(d(301));
        (l += 1),
          (ge = ce = null),
          (r.updateQueue = null),
          (ta.current = as),
          (e = n(t, a));
      } while (ut);
    }
    if (
      ((ta.current = ia),
      (r = ce !== null && ce.next !== null),
      (en = 0),
      (ge = ce = te = null),
      (aa = !1),
      r)
    )
      throw Error(d(300));
    return e;
  }
  function Al() {
    var e = st !== 0;
    return (st = 0), e;
  }
  function dr() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return ge === null ? (te.memoizedState = ge = e) : (ge = ge.next = e), ge;
  }
  function Xe() {
    if (ce === null) {
      var e = te.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = ce.next;
    var r = ge === null ? te.memoizedState : ge.next;
    if (r !== null) (ge = r), (ce = e);
    else {
      if (e === null) throw Error(d(310));
      (ce = e),
        (e = {
          memoizedState: ce.memoizedState,
          baseState: ce.baseState,
          baseQueue: ce.baseQueue,
          queue: ce.queue,
          next: null,
        }),
        ge === null ? (te.memoizedState = ge = e) : (ge = ge.next = e);
    }
    return ge;
  }
  function pt(e, r) {
    return typeof r == "function" ? r(e) : r;
  }
  function Vl(e) {
    var r = Xe(),
      n = r.queue;
    if (n === null) throw Error(d(311));
    n.lastRenderedReducer = e;
    var t = ce,
      a = t.baseQueue,
      l = n.pending;
    if (l !== null) {
      if (a !== null) {
        var o = a.next;
        (a.next = l.next), (l.next = o);
      }
      (t.baseQueue = a = l), (n.pending = null);
    }
    if (a !== null) {
      (l = a.next), (t = t.baseState);
      var i = (o = null),
        u = null,
        g = l;
      do {
        var y = g.lane;
        if ((en & y) === y)
          u !== null &&
            (u = u.next =
              {
                lane: 0,
                action: g.action,
                hasEagerState: g.hasEagerState,
                eagerState: g.eagerState,
                next: null,
              }),
            (t = g.hasEagerState ? g.eagerState : e(t, g.action));
        else {
          var v = {
            lane: y,
            action: g.action,
            hasEagerState: g.hasEagerState,
            eagerState: g.eagerState,
            next: null,
          };
          u === null ? ((i = u = v), (o = t)) : (u = u.next = v),
            (te.lanes |= y),
            (rn |= y);
        }
        g = g.next;
      } while (g !== null && g !== l);
      u === null ? (o = t) : (u.next = i),
        nr(t, r.memoizedState) || (je = !0),
        (r.memoizedState = t),
        (r.baseState = o),
        (r.baseQueue = u),
        (n.lastRenderedState = t);
    }
    if (((e = n.interleaved), e !== null)) {
      a = e;
      do (l = a.lane), (te.lanes |= l), (rn |= l), (a = a.next);
      while (a !== e);
    } else a === null && (n.lanes = 0);
    return [r.memoizedState, n.dispatch];
  }
  function Bl(e) {
    var r = Xe(),
      n = r.queue;
    if (n === null) throw Error(d(311));
    n.lastRenderedReducer = e;
    var t = n.dispatch,
      a = n.pending,
      l = r.memoizedState;
    if (a !== null) {
      n.pending = null;
      var o = (a = a.next);
      do (l = e(l, o.action)), (o = o.next);
      while (o !== a);
      nr(l, r.memoizedState) || (je = !0),
        (r.memoizedState = l),
        r.baseQueue === null && (r.baseState = l),
        (n.lastRenderedState = l);
    }
    return [l, t];
  }
  function si() {}
  function pi(e, r) {
    var n = te,
      t = Xe(),
      a = r(),
      l = !nr(t.memoizedState, a);
    if (
      (l && ((t.memoizedState = a), (je = !0)),
      (t = t.queue),
      Hl(gi.bind(null, n, t, e), [e]),
      t.getSnapshot !== r || l || (ge !== null && ge.memoizedState.tag & 1))
    ) {
      if (
        ((n.flags |= 2048),
        ct(9, fi.bind(null, n, t, a, r), void 0, null),
        de === null)
      )
        throw Error(d(349));
      en & 30 || ci(n, r, a);
    }
    return a;
  }
  function ci(e, r, n) {
    (e.flags |= 16384),
      (e = { getSnapshot: r, value: n }),
      (r = te.updateQueue),
      r === null
        ? ((r = { lastEffect: null, stores: null }),
          (te.updateQueue = r),
          (r.stores = [e]))
        : ((n = r.stores), n === null ? (r.stores = [e]) : n.push(e));
  }
  function fi(e, r, n, t) {
    (r.value = n), (r.getSnapshot = t), di(r) && hi(e);
  }
  function gi(e, r, n) {
    return n(function () {
      di(r) && hi(e);
    });
  }
  function di(e) {
    var r = e.getSnapshot;
    e = e.value;
    try {
      var n = r();
      return !nr(e, n);
    } catch {
      return !0;
    }
  }
  function hi(e) {
    var r = Sr(e, 1);
    r !== null && ir(r, e, 1, -1);
  }
  function mi(e) {
    var r = dr();
    return (
      typeof e == "function" && (e = e()),
      (r.memoizedState = r.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: pt,
        lastRenderedState: e,
      }),
      (r.queue = e),
      (e = e.dispatch = rs.bind(null, te, e)),
      [r.memoizedState, e]
    );
  }
  function ct(e, r, n, t) {
    return (
      (e = { tag: e, create: r, destroy: n, deps: t, next: null }),
      (r = te.updateQueue),
      r === null
        ? ((r = { lastEffect: null, stores: null }),
          (te.updateQueue = r),
          (r.lastEffect = e.next = e))
        : ((n = r.lastEffect),
          n === null
            ? (r.lastEffect = e.next = e)
            : ((t = n.next), (n.next = e), (e.next = t), (r.lastEffect = e))),
      e
    );
  }
  function yi() {
    return Xe().memoizedState;
  }
  function la(e, r, n, t) {
    var a = dr();
    (te.flags |= e),
      (a.memoizedState = ct(1 | r, n, void 0, t === void 0 ? null : t));
  }
  function oa(e, r, n, t) {
    var a = Xe();
    t = t === void 0 ? null : t;
    var l = void 0;
    if (ce !== null) {
      var o = ce.memoizedState;
      if (((l = o.destroy), t !== null && Fl(t, o.deps))) {
        a.memoizedState = ct(r, n, l, t);
        return;
      }
    }
    (te.flags |= e), (a.memoizedState = ct(1 | r, n, l, t));
  }
  function vi(e, r) {
    return la(8390656, 8, e, r);
  }
  function Hl(e, r) {
    return oa(2048, 8, e, r);
  }
  function bi(e, r) {
    return oa(4, 2, e, r);
  }
  function wi(e, r) {
    return oa(4, 4, e, r);
  }
  function ki(e, r) {
    if (typeof r == "function")
      return (
        (e = e()),
        r(e),
        function () {
          r(null);
        }
      );
    if (r != null)
      return (
        (e = e()),
        (r.current = e),
        function () {
          r.current = null;
        }
      );
  }
  function Si(e, r, n) {
    return (
      (n = n != null ? n.concat([e]) : null), oa(4, 4, ki.bind(null, r, e), n)
    );
  }
  function $l() {}
  function xi(e, r) {
    var n = Xe();
    r = r === void 0 ? null : r;
    var t = n.memoizedState;
    return t !== null && r !== null && Fl(r, t[1])
      ? t[0]
      : ((n.memoizedState = [e, r]), e);
  }
  function Ei(e, r) {
    var n = Xe();
    r = r === void 0 ? null : r;
    var t = n.memoizedState;
    return t !== null && r !== null && Fl(r, t[1])
      ? t[0]
      : ((e = e()), (n.memoizedState = [e, r]), e);
  }
  function zi(e, r, n) {
    return en & 21
      ? (nr(n, r) ||
          ((n = eo()), (te.lanes |= n), (rn |= n), (e.baseState = !0)),
        r)
      : (e.baseState && ((e.baseState = !1), (je = !0)), (e.memoizedState = n));
  }
  function q1(e, r) {
    var n = $;
    ($ = n !== 0 && 4 > n ? n : 4), e(!0);
    var t = Il.transition;
    Il.transition = {};
    try {
      e(!1), r();
    } finally {
      ($ = n), (Il.transition = t);
    }
  }
  function Ci() {
    return Xe().memoizedState;
  }
  function es(e, r, n) {
    var t = Br(e);
    if (
      ((n = {
        lane: t,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      _i(e))
    )
      Ni(r, n);
    else if (((n = ai(e, r, n, t)), n !== null)) {
      var a = Ne();
      ir(n, e, t, a), Pi(n, r, t);
    }
  }
  function rs(e, r, n) {
    var t = Br(e),
      a = {
        lane: t,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
    if (_i(e)) Ni(r, a);
    else {
      var l = e.alternate;
      if (
        e.lanes === 0 &&
        (l === null || l.lanes === 0) &&
        ((l = r.lastRenderedReducer), l !== null)
      )
        try {
          var o = r.lastRenderedState,
            i = l(o, n);
          if (((a.hasEagerState = !0), (a.eagerState = i), nr(i, o))) {
            var u = r.interleaved;
            u === null
              ? ((a.next = a), Ll(r))
              : ((a.next = u.next), (u.next = a)),
              (r.interleaved = a);
            return;
          }
        } catch {
        } finally {
        }
      (n = ai(e, r, a, t)),
        n !== null && ((a = Ne()), ir(n, e, t, a), Pi(n, r, t));
    }
  }
  function _i(e) {
    var r = e.alternate;
    return e === te || (r !== null && r === te);
  }
  function Ni(e, r) {
    ut = aa = !0;
    var n = e.pending;
    n === null ? (r.next = r) : ((r.next = n.next), (n.next = r)),
      (e.pending = r);
  }
  function Pi(e, r, n) {
    if (n & 4194240) {
      var t = r.lanes;
      (t &= e.pendingLanes), (n |= t), (r.lanes = n), Qa(e, n);
    }
  }
  var ia = {
      readContext: Ye,
      useCallback: ke,
      useContext: ke,
      useEffect: ke,
      useImperativeHandle: ke,
      useInsertionEffect: ke,
      useLayoutEffect: ke,
      useMemo: ke,
      useReducer: ke,
      useRef: ke,
      useState: ke,
      useDebugValue: ke,
      useDeferredValue: ke,
      useTransition: ke,
      useMutableSource: ke,
      useSyncExternalStore: ke,
      useId: ke,
      unstable_isNewReconciler: !1,
    },
    ns = {
      readContext: Ye,
      useCallback: function (e, r) {
        return (dr().memoizedState = [e, r === void 0 ? null : r]), e;
      },
      useContext: Ye,
      useEffect: vi,
      useImperativeHandle: function (e, r, n) {
        return (
          (n = n != null ? n.concat([e]) : null),
          la(4194308, 4, ki.bind(null, r, e), n)
        );
      },
      useLayoutEffect: function (e, r) {
        return la(4194308, 4, e, r);
      },
      useInsertionEffect: function (e, r) {
        return la(4, 2, e, r);
      },
      useMemo: function (e, r) {
        var n = dr();
        return (
          (r = r === void 0 ? null : r),
          (e = e()),
          (n.memoizedState = [e, r]),
          e
        );
      },
      useReducer: function (e, r, n) {
        var t = dr();
        return (
          (r = n !== void 0 ? n(r) : r),
          (t.memoizedState = t.baseState = r),
          (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: r,
          }),
          (t.queue = e),
          (e = e.dispatch = es.bind(null, te, e)),
          [t.memoizedState, e]
        );
      },
      useRef: function (e) {
        var r = dr();
        return (e = { current: e }), (r.memoizedState = e);
      },
      useState: mi,
      useDebugValue: $l,
      useDeferredValue: function (e) {
        return (dr().memoizedState = e);
      },
      useTransition: function () {
        var e = mi(!1),
          r = e[0];
        return (e = q1.bind(null, e[1])), (dr().memoizedState = e), [r, e];
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, r, n) {
        var t = te,
          a = dr();
        if (ee) {
          if (n === void 0) throw Error(d(407));
          n = n();
        } else {
          if (((n = r()), de === null)) throw Error(d(349));
          en & 30 || ci(t, r, n);
        }
        a.memoizedState = n;
        var l = { value: n, getSnapshot: r };
        return (
          (a.queue = l),
          vi(gi.bind(null, t, l, e), [e]),
          (t.flags |= 2048),
          ct(9, fi.bind(null, t, l, n, r), void 0, null),
          n
        );
      },
      useId: function () {
        var e = dr(),
          r = de.identifierPrefix;
        if (ee) {
          var n = kr,
            t = wr;
          (n = (t & ~(1 << (32 - rr(t) - 1))).toString(32) + n),
            (r = ":" + r + "R" + n),
            (n = st++),
            0 < n && (r += "H" + n.toString(32)),
            (r += ":");
        } else (n = J1++), (r = ":" + r + "r" + n.toString(32) + ":");
        return (e.memoizedState = r);
      },
      unstable_isNewReconciler: !1,
    },
    ts = {
      readContext: Ye,
      useCallback: xi,
      useContext: Ye,
      useEffect: Hl,
      useImperativeHandle: Si,
      useInsertionEffect: bi,
      useLayoutEffect: wi,
      useMemo: Ei,
      useReducer: Vl,
      useRef: yi,
      useState: function () {
        return Vl(pt);
      },
      useDebugValue: $l,
      useDeferredValue: function (e) {
        var r = Xe();
        return zi(r, ce.memoizedState, e);
      },
      useTransition: function () {
        var e = Vl(pt)[0],
          r = Xe().memoizedState;
        return [e, r];
      },
      useMutableSource: si,
      useSyncExternalStore: pi,
      useId: Ci,
      unstable_isNewReconciler: !1,
    },
    as = {
      readContext: Ye,
      useCallback: xi,
      useContext: Ye,
      useEffect: Hl,
      useImperativeHandle: Si,
      useInsertionEffect: bi,
      useLayoutEffect: wi,
      useMemo: Ei,
      useReducer: Bl,
      useRef: yi,
      useState: function () {
        return Bl(pt);
      },
      useDebugValue: $l,
      useDeferredValue: function (e) {
        var r = Xe();
        return ce === null ? (r.memoizedState = e) : zi(r, ce.memoizedState, e);
      },
      useTransition: function () {
        var e = Bl(pt)[0],
          r = Xe().memoizedState;
        return [e, r];
      },
      useMutableSource: si,
      useSyncExternalStore: pi,
      useId: Ci,
      unstable_isNewReconciler: !1,
    };
  function ar(e, r) {
    if (e && e.defaultProps) {
      (r = x({}, r)), (e = e.defaultProps);
      for (var n in e) r[n] === void 0 && (r[n] = e[n]);
      return r;
    }
    return r;
  }
  function Wl(e, r, n, t) {
    (r = e.memoizedState),
      (n = n(t, r)),
      (n = n == null ? r : x({}, r, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var ua = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? Kr(e) === e : !1;
    },
    enqueueSetState: function (e, r, n) {
      e = e._reactInternals;
      var t = Ne(),
        a = Br(e),
        l = xr(t, a);
      (l.payload = r),
        n != null && (l.callback = n),
        (r = Fr(e, l, a)),
        r !== null && (ir(r, e, a, t), ea(r, e, a));
    },
    enqueueReplaceState: function (e, r, n) {
      e = e._reactInternals;
      var t = Ne(),
        a = Br(e),
        l = xr(t, a);
      (l.tag = 1),
        (l.payload = r),
        n != null && (l.callback = n),
        (r = Fr(e, l, a)),
        r !== null && (ir(r, e, a, t), ea(r, e, a));
    },
    enqueueForceUpdate: function (e, r) {
      e = e._reactInternals;
      var n = Ne(),
        t = Br(e),
        a = xr(n, t);
      (a.tag = 2),
        r != null && (a.callback = r),
        (r = Fr(e, a, t)),
        r !== null && (ir(r, e, t, n), ea(r, e, t));
    },
  };
  function Ti(e, r, n, t, a, l, o) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(t, l, o)
        : r.prototype && r.prototype.isPureReactComponent
          ? !Zn(n, t) || !Zn(a, l)
          : !0
    );
  }
  function Li(e, r, n) {
    var t = !1,
      a = Or,
      l = r.contextType;
    return (
      typeof l == "object" && l !== null
        ? (l = Ye(l))
        : ((a = Re(r) ? Xr : we.current),
          (t = r.contextTypes),
          (l = (t = t != null) ? bn(e, a) : Or)),
      (r = new r(n, l)),
      (e.memoizedState =
        r.state !== null && r.state !== void 0 ? r.state : null),
      (r.updater = ua),
      (e.stateNode = r),
      (r._reactInternals = e),
      t &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = a),
        (e.__reactInternalMemoizedMaskedChildContext = l)),
      r
    );
  }
  function Ri(e, r, n, t) {
    (e = r.state),
      typeof r.componentWillReceiveProps == "function" &&
        r.componentWillReceiveProps(n, t),
      typeof r.UNSAFE_componentWillReceiveProps == "function" &&
        r.UNSAFE_componentWillReceiveProps(n, t),
      r.state !== e && ua.enqueueReplaceState(r, r.state, null);
  }
  function Ql(e, r, n, t) {
    var a = e.stateNode;
    (a.props = n), (a.state = e.memoizedState), (a.refs = {}), Rl(e);
    var l = r.contextType;
    typeof l == "object" && l !== null
      ? (a.context = Ye(l))
      : ((l = Re(r) ? Xr : we.current), (a.context = bn(e, l))),
      (a.state = e.memoizedState),
      (l = r.getDerivedStateFromProps),
      typeof l == "function" && (Wl(e, r, l, n), (a.state = e.memoizedState)),
      typeof r.getDerivedStateFromProps == "function" ||
        typeof a.getSnapshotBeforeUpdate == "function" ||
        (typeof a.UNSAFE_componentWillMount != "function" &&
          typeof a.componentWillMount != "function") ||
        ((r = a.state),
        typeof a.componentWillMount == "function" && a.componentWillMount(),
        typeof a.UNSAFE_componentWillMount == "function" &&
          a.UNSAFE_componentWillMount(),
        r !== a.state && ua.enqueueReplaceState(a, a.state, null),
        ra(e, n, a, t),
        (a.state = e.memoizedState)),
      typeof a.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function _n(e, r) {
    try {
      var n = "",
        t = r;
      do (n += A(t)), (t = t.return);
      while (t);
      var a = n;
    } catch (l) {
      a =
        `
Error generating stack: ` +
        l.message +
        `
` +
        l.stack;
    }
    return { value: e, source: r, stack: a, digest: null };
  }
  function Kl(e, r, n) {
    return { value: e, source: null, stack: n ?? null, digest: r ?? null };
  }
  function Yl(e, r) {
    try {
      console.error(r.value);
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  var ls = typeof WeakMap == "function" ? WeakMap : Map;
  function ji(e, r, n) {
    (n = xr(-1, n)), (n.tag = 3), (n.payload = { element: null });
    var t = r.value;
    return (
      (n.callback = function () {
        ha || ((ha = !0), (s0 = t)), Yl(e, r);
      }),
      n
    );
  }
  function Mi(e, r, n) {
    (n = xr(-1, n)), (n.tag = 3);
    var t = e.type.getDerivedStateFromError;
    if (typeof t == "function") {
      var a = r.value;
      (n.payload = function () {
        return t(a);
      }),
        (n.callback = function () {
          Yl(e, r);
        });
    }
    var l = e.stateNode;
    return (
      l !== null &&
        typeof l.componentDidCatch == "function" &&
        (n.callback = function () {
          Yl(e, r),
            typeof t != "function" &&
              (Ar === null ? (Ar = new Set([this])) : Ar.add(this));
          var o = r.stack;
          this.componentDidCatch(r.value, {
            componentStack: o !== null ? o : "",
          });
        }),
      n
    );
  }
  function Oi(e, r, n) {
    var t = e.pingCache;
    if (t === null) {
      t = e.pingCache = new ls();
      var a = new Set();
      t.set(r, a);
    } else (a = t.get(r)), a === void 0 && ((a = new Set()), t.set(r, a));
    a.has(n) || (a.add(n), (e = bs.bind(null, e, r, n)), r.then(e, e));
  }
  function Di(e) {
    do {
      var r;
      if (
        ((r = e.tag === 13) &&
          ((r = e.memoizedState),
          (r = r !== null ? r.dehydrated !== null : !0)),
        r)
      )
        return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function Ii(e, r, n, t, a) {
    return e.mode & 1
      ? ((e.flags |= 65536), (e.lanes = a), e)
      : (e === r
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (n.flags |= 131072),
            (n.flags &= -52805),
            n.tag === 1 &&
              (n.alternate === null
                ? (n.tag = 17)
                : ((r = xr(-1, 1)), (r.tag = 2), Fr(n, r, 1))),
            (n.lanes |= 1)),
        e);
  }
  var os = be.ReactCurrentOwner,
    je = !1;
  function _e(e, r, n, t) {
    r.child = e === null ? ti(r, null, n, t) : xn(r, e.child, n, t);
  }
  function Fi(e, r, n, t, a) {
    n = n.render;
    var l = r.ref;
    return (
      zn(r, a),
      (t = Ul(e, r, n, t, l, a)),
      (n = Al()),
      e !== null && !je
        ? ((r.updateQueue = e.updateQueue),
          (r.flags &= -2053),
          (e.lanes &= ~a),
          Er(e, r, a))
        : (ee && n && Sl(r), (r.flags |= 1), _e(e, r, t, a), r.child)
    );
  }
  function Ui(e, r, n, t, a) {
    if (e === null) {
      var l = n.type;
      return typeof l == "function" &&
        !m0(l) &&
        l.defaultProps === void 0 &&
        n.compare === null &&
        n.defaultProps === void 0
        ? ((r.tag = 15), (r.type = l), Ai(e, r, l, t, a))
        : ((e = ka(n.type, null, t, r, r.mode, a)),
          (e.ref = r.ref),
          (e.return = r),
          (r.child = e));
    }
    if (((l = e.child), !(e.lanes & a))) {
      var o = l.memoizedProps;
      if (
        ((n = n.compare), (n = n !== null ? n : Zn), n(o, t) && e.ref === r.ref)
      )
        return Er(e, r, a);
    }
    return (
      (r.flags |= 1),
      (e = $r(l, t)),
      (e.ref = r.ref),
      (e.return = r),
      (r.child = e)
    );
  }
  function Ai(e, r, n, t, a) {
    if (e !== null) {
      var l = e.memoizedProps;
      if (Zn(l, t) && e.ref === r.ref)
        if (((je = !1), (r.pendingProps = t = l), (e.lanes & a) !== 0))
          e.flags & 131072 && (je = !0);
        else return (r.lanes = e.lanes), Er(e, r, a);
    }
    return Xl(e, r, n, t, a);
  }
  function Vi(e, r, n) {
    var t = r.pendingProps,
      a = t.children,
      l = e !== null ? e.memoizedState : null;
    if (t.mode === "hidden")
      if (!(r.mode & 1))
        (r.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          Y(Pn, Be),
          (Be |= n);
      else {
        if (!(n & 1073741824))
          return (
            (e = l !== null ? l.baseLanes | n : n),
            (r.lanes = r.childLanes = 1073741824),
            (r.memoizedState = {
              baseLanes: e,
              cachePool: null,
              transitions: null,
            }),
            (r.updateQueue = null),
            Y(Pn, Be),
            (Be |= e),
            null
          );
        (r.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          (t = l !== null ? l.baseLanes : n),
          Y(Pn, Be),
          (Be |= t);
      }
    else
      l !== null ? ((t = l.baseLanes | n), (r.memoizedState = null)) : (t = n),
        Y(Pn, Be),
        (Be |= t);
    return _e(e, r, a, n), r.child;
  }
  function Bi(e, r) {
    var n = r.ref;
    ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
      ((r.flags |= 512), (r.flags |= 2097152));
  }
  function Xl(e, r, n, t, a) {
    var l = Re(n) ? Xr : we.current;
    return (
      (l = bn(r, l)),
      zn(r, a),
      (n = Ul(e, r, n, t, l, a)),
      (t = Al()),
      e !== null && !je
        ? ((r.updateQueue = e.updateQueue),
          (r.flags &= -2053),
          (e.lanes &= ~a),
          Er(e, r, a))
        : (ee && t && Sl(r), (r.flags |= 1), _e(e, r, n, a), r.child)
    );
  }
  function Hi(e, r, n, t, a) {
    if (Re(n)) {
      var l = !0;
      Qt(r);
    } else l = !1;
    if ((zn(r, a), r.stateNode === null))
      pa(e, r), Li(r, n, t), Ql(r, n, t, a), (t = !0);
    else if (e === null) {
      var o = r.stateNode,
        i = r.memoizedProps;
      o.props = i;
      var u = o.context,
        g = n.contextType;
      typeof g == "object" && g !== null
        ? (g = Ye(g))
        : ((g = Re(n) ? Xr : we.current), (g = bn(r, g)));
      var y = n.getDerivedStateFromProps,
        v =
          typeof y == "function" ||
          typeof o.getSnapshotBeforeUpdate == "function";
      v ||
        (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
          typeof o.componentWillReceiveProps != "function") ||
        ((i !== t || u !== g) && Ri(r, o, t, g)),
        (Ir = !1);
      var h = r.memoizedState;
      (o.state = h),
        ra(r, t, o, a),
        (u = r.memoizedState),
        i !== t || h !== u || Le.current || Ir
          ? (typeof y == "function" && (Wl(r, n, y, t), (u = r.memoizedState)),
            (i = Ir || Ti(r, n, i, t, h, u, g))
              ? (v ||
                  (typeof o.UNSAFE_componentWillMount != "function" &&
                    typeof o.componentWillMount != "function") ||
                  (typeof o.componentWillMount == "function" &&
                    o.componentWillMount(),
                  typeof o.UNSAFE_componentWillMount == "function" &&
                    o.UNSAFE_componentWillMount()),
                typeof o.componentDidMount == "function" &&
                  (r.flags |= 4194308))
              : (typeof o.componentDidMount == "function" &&
                  (r.flags |= 4194308),
                (r.memoizedProps = t),
                (r.memoizedState = u)),
            (o.props = t),
            (o.state = u),
            (o.context = g),
            (t = i))
          : (typeof o.componentDidMount == "function" && (r.flags |= 4194308),
            (t = !1));
    } else {
      (o = r.stateNode),
        li(e, r),
        (i = r.memoizedProps),
        (g = r.type === r.elementType ? i : ar(r.type, i)),
        (o.props = g),
        (v = r.pendingProps),
        (h = o.context),
        (u = n.contextType),
        typeof u == "object" && u !== null
          ? (u = Ye(u))
          : ((u = Re(n) ? Xr : we.current), (u = bn(r, u)));
      var k = n.getDerivedStateFromProps;
      (y =
        typeof k == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function") ||
        (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
          typeof o.componentWillReceiveProps != "function") ||
        ((i !== v || h !== u) && Ri(r, o, t, u)),
        (Ir = !1),
        (h = r.memoizedState),
        (o.state = h),
        ra(r, t, o, a);
      var E = r.memoizedState;
      i !== v || h !== E || Le.current || Ir
        ? (typeof k == "function" && (Wl(r, n, k, t), (E = r.memoizedState)),
          (g = Ir || Ti(r, n, g, t, h, E, u) || !1)
            ? (y ||
                (typeof o.UNSAFE_componentWillUpdate != "function" &&
                  typeof o.componentWillUpdate != "function") ||
                (typeof o.componentWillUpdate == "function" &&
                  o.componentWillUpdate(t, E, u),
                typeof o.UNSAFE_componentWillUpdate == "function" &&
                  o.UNSAFE_componentWillUpdate(t, E, u)),
              typeof o.componentDidUpdate == "function" && (r.flags |= 4),
              typeof o.getSnapshotBeforeUpdate == "function" &&
                (r.flags |= 1024))
            : (typeof o.componentDidUpdate != "function" ||
                (i === e.memoizedProps && h === e.memoizedState) ||
                (r.flags |= 4),
              typeof o.getSnapshotBeforeUpdate != "function" ||
                (i === e.memoizedProps && h === e.memoizedState) ||
                (r.flags |= 1024),
              (r.memoizedProps = t),
              (r.memoizedState = E)),
          (o.props = t),
          (o.state = E),
          (o.context = u),
          (t = g))
        : (typeof o.componentDidUpdate != "function" ||
            (i === e.memoizedProps && h === e.memoizedState) ||
            (r.flags |= 4),
          typeof o.getSnapshotBeforeUpdate != "function" ||
            (i === e.memoizedProps && h === e.memoizedState) ||
            (r.flags |= 1024),
          (t = !1));
    }
    return Gl(e, r, n, t, l, a);
  }
  function Gl(e, r, n, t, a, l) {
    Bi(e, r);
    var o = (r.flags & 128) !== 0;
    if (!t && !o) return a && Yo(r, n, !1), Er(e, r, l);
    (t = r.stateNode), (os.current = r);
    var i =
      o && typeof n.getDerivedStateFromError != "function" ? null : t.render();
    return (
      (r.flags |= 1),
      e !== null && o
        ? ((r.child = xn(r, e.child, null, l)), (r.child = xn(r, null, i, l)))
        : _e(e, r, i, l),
      (r.memoizedState = t.state),
      a && Yo(r, n, !0),
      r.child
    );
  }
  function $i(e) {
    var r = e.stateNode;
    r.pendingContext
      ? Qo(e, r.pendingContext, r.pendingContext !== r.context)
      : r.context && Qo(e, r.context, !1),
      jl(e, r.containerInfo);
  }
  function Wi(e, r, n, t, a) {
    return Sn(), Cl(a), (r.flags |= 256), _e(e, r, n, t), r.child;
  }
  var Zl = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Jl(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Qi(e, r, n) {
    var t = r.pendingProps,
      a = ne.current,
      l = !1,
      o = (r.flags & 128) !== 0,
      i;
    if (
      ((i = o) ||
        (i = e !== null && e.memoizedState === null ? !1 : (a & 2) !== 0),
      i
        ? ((l = !0), (r.flags &= -129))
        : (e === null || e.memoizedState !== null) && (a |= 1),
      Y(ne, a & 1),
      e === null)
    )
      return (
        zl(r),
        (e = r.memoizedState),
        e !== null && ((e = e.dehydrated), e !== null)
          ? (r.mode & 1
              ? e.data === "$!"
                ? (r.lanes = 8)
                : (r.lanes = 1073741824)
              : (r.lanes = 1),
            null)
          : ((o = t.children),
            (e = t.fallback),
            l
              ? ((t = r.mode),
                (l = r.child),
                (o = { mode: "hidden", children: o }),
                !(t & 1) && l !== null
                  ? ((l.childLanes = 0), (l.pendingProps = o))
                  : (l = Sa(o, t, 0, null)),
                (e = ln(e, t, n, null)),
                (l.return = r),
                (e.return = r),
                (l.sibling = e),
                (r.child = l),
                (r.child.memoizedState = Jl(n)),
                (r.memoizedState = Zl),
                e)
              : ql(r, o))
      );
    if (((a = e.memoizedState), a !== null && ((i = a.dehydrated), i !== null)))
      return is(e, r, o, t, i, a, n);
    if (l) {
      (l = t.fallback), (o = r.mode), (a = e.child), (i = a.sibling);
      var u = { mode: "hidden", children: t.children };
      return (
        !(o & 1) && r.child !== a
          ? ((t = r.child),
            (t.childLanes = 0),
            (t.pendingProps = u),
            (r.deletions = null))
          : ((t = $r(a, u)), (t.subtreeFlags = a.subtreeFlags & 14680064)),
        i !== null ? (l = $r(i, l)) : ((l = ln(l, o, n, null)), (l.flags |= 2)),
        (l.return = r),
        (t.return = r),
        (t.sibling = l),
        (r.child = t),
        (t = l),
        (l = r.child),
        (o = e.child.memoizedState),
        (o =
          o === null
            ? Jl(n)
            : {
                baseLanes: o.baseLanes | n,
                cachePool: null,
                transitions: o.transitions,
              }),
        (l.memoizedState = o),
        (l.childLanes = e.childLanes & ~n),
        (r.memoizedState = Zl),
        t
      );
    }
    return (
      (l = e.child),
      (e = l.sibling),
      (t = $r(l, { mode: "visible", children: t.children })),
      !(r.mode & 1) && (t.lanes = n),
      (t.return = r),
      (t.sibling = null),
      e !== null &&
        ((n = r.deletions),
        n === null ? ((r.deletions = [e]), (r.flags |= 16)) : n.push(e)),
      (r.child = t),
      (r.memoizedState = null),
      t
    );
  }
  function ql(e, r) {
    return (
      (r = Sa({ mode: "visible", children: r }, e.mode, 0, null)),
      (r.return = e),
      (e.child = r)
    );
  }
  function sa(e, r, n, t) {
    return (
      t !== null && Cl(t),
      xn(r, e.child, null, n),
      (e = ql(r, r.pendingProps.children)),
      (e.flags |= 2),
      (r.memoizedState = null),
      e
    );
  }
  function is(e, r, n, t, a, l, o) {
    if (n)
      return r.flags & 256
        ? ((r.flags &= -257), (t = Kl(Error(d(422)))), sa(e, r, o, t))
        : r.memoizedState !== null
          ? ((r.child = e.child), (r.flags |= 128), null)
          : ((l = t.fallback),
            (a = r.mode),
            (t = Sa({ mode: "visible", children: t.children }, a, 0, null)),
            (l = ln(l, a, o, null)),
            (l.flags |= 2),
            (t.return = r),
            (l.return = r),
            (t.sibling = l),
            (r.child = t),
            r.mode & 1 && xn(r, e.child, null, o),
            (r.child.memoizedState = Jl(o)),
            (r.memoizedState = Zl),
            l);
    if (!(r.mode & 1)) return sa(e, r, o, null);
    if (a.data === "$!") {
      if (((t = a.nextSibling && a.nextSibling.dataset), t)) var i = t.dgst;
      return (
        (t = i), (l = Error(d(419))), (t = Kl(l, t, void 0)), sa(e, r, o, t)
      );
    }
    if (((i = (o & e.childLanes) !== 0), je || i)) {
      if (((t = de), t !== null)) {
        switch (o & -o) {
          case 4:
            a = 2;
            break;
          case 16:
            a = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            a = 32;
            break;
          case 536870912:
            a = 268435456;
            break;
          default:
            a = 0;
        }
        (a = a & (t.suspendedLanes | o) ? 0 : a),
          a !== 0 &&
            a !== l.retryLane &&
            ((l.retryLane = a), Sr(e, a), ir(t, e, a, -1));
      }
      return h0(), (t = Kl(Error(d(421)))), sa(e, r, o, t);
    }
    return a.data === "$?"
      ? ((r.flags |= 128),
        (r.child = e.child),
        (r = ws.bind(null, e)),
        (a._reactRetry = r),
        null)
      : ((e = l.treeContext),
        (Ve = jr(a.nextSibling)),
        (Ae = r),
        (ee = !0),
        (tr = null),
        e !== null &&
          ((Qe[Ke++] = wr),
          (Qe[Ke++] = kr),
          (Qe[Ke++] = Gr),
          (wr = e.id),
          (kr = e.overflow),
          (Gr = r)),
        (r = ql(r, t.children)),
        (r.flags |= 4096),
        r);
  }
  function Ki(e, r, n) {
    e.lanes |= r;
    var t = e.alternate;
    t !== null && (t.lanes |= r), Tl(e.return, r, n);
  }
  function e0(e, r, n, t, a) {
    var l = e.memoizedState;
    l === null
      ? (e.memoizedState = {
          isBackwards: r,
          rendering: null,
          renderingStartTime: 0,
          last: t,
          tail: n,
          tailMode: a,
        })
      : ((l.isBackwards = r),
        (l.rendering = null),
        (l.renderingStartTime = 0),
        (l.last = t),
        (l.tail = n),
        (l.tailMode = a));
  }
  function Yi(e, r, n) {
    var t = r.pendingProps,
      a = t.revealOrder,
      l = t.tail;
    if ((_e(e, r, t.children, n), (t = ne.current), t & 2))
      (t = (t & 1) | 2), (r.flags |= 128);
    else {
      if (e !== null && e.flags & 128)
        e: for (e = r.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && Ki(e, n, r);
          else if (e.tag === 19) Ki(e, n, r);
          else if (e.child !== null) {
            (e.child.return = e), (e = e.child);
            continue;
          }
          if (e === r) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === r) break e;
            e = e.return;
          }
          (e.sibling.return = e.return), (e = e.sibling);
        }
      t &= 1;
    }
    if ((Y(ne, t), !(r.mode & 1))) r.memoizedState = null;
    else
      switch (a) {
        case "forwards":
          for (n = r.child, a = null; n !== null; )
            (e = n.alternate),
              e !== null && na(e) === null && (a = n),
              (n = n.sibling);
          (n = a),
            n === null
              ? ((a = r.child), (r.child = null))
              : ((a = n.sibling), (n.sibling = null)),
            e0(r, !1, a, n, l);
          break;
        case "backwards":
          for (n = null, a = r.child, r.child = null; a !== null; ) {
            if (((e = a.alternate), e !== null && na(e) === null)) {
              r.child = a;
              break;
            }
            (e = a.sibling), (a.sibling = n), (n = a), (a = e);
          }
          e0(r, !0, n, null, l);
          break;
        case "together":
          e0(r, !1, null, null, void 0);
          break;
        default:
          r.memoizedState = null;
      }
    return r.child;
  }
  function pa(e, r) {
    !(r.mode & 1) &&
      e !== null &&
      ((e.alternate = null), (r.alternate = null), (r.flags |= 2));
  }
  function Er(e, r, n) {
    if (
      (e !== null && (r.dependencies = e.dependencies),
      (rn |= r.lanes),
      !(n & r.childLanes))
    )
      return null;
    if (e !== null && r.child !== e.child) throw Error(d(153));
    if (r.child !== null) {
      for (
        e = r.child, n = $r(e, e.pendingProps), r.child = n, n.return = r;
        e.sibling !== null;

      )
        (e = e.sibling),
          (n = n.sibling = $r(e, e.pendingProps)),
          (n.return = r);
      n.sibling = null;
    }
    return r.child;
  }
  function us(e, r, n) {
    switch (r.tag) {
      case 3:
        $i(r), Sn();
        break;
      case 5:
        ui(r);
        break;
      case 1:
        Re(r.type) && Qt(r);
        break;
      case 4:
        jl(r, r.stateNode.containerInfo);
        break;
      case 10:
        var t = r.type._context,
          a = r.memoizedProps.value;
        Y(Jt, t._currentValue), (t._currentValue = a);
        break;
      case 13:
        if (((t = r.memoizedState), t !== null))
          return t.dehydrated !== null
            ? (Y(ne, ne.current & 1), (r.flags |= 128), null)
            : n & r.child.childLanes
              ? Qi(e, r, n)
              : (Y(ne, ne.current & 1),
                (e = Er(e, r, n)),
                e !== null ? e.sibling : null);
        Y(ne, ne.current & 1);
        break;
      case 19:
        if (((t = (n & r.childLanes) !== 0), e.flags & 128)) {
          if (t) return Yi(e, r, n);
          r.flags |= 128;
        }
        if (
          ((a = r.memoizedState),
          a !== null &&
            ((a.rendering = null), (a.tail = null), (a.lastEffect = null)),
          Y(ne, ne.current),
          t)
        )
          break;
        return null;
      case 22:
      case 23:
        return (r.lanes = 0), Vi(e, r, n);
    }
    return Er(e, r, n);
  }
  var Xi, r0, Gi, Zi;
  (Xi = function (e, r) {
    for (var n = r.child; n !== null; ) {
      if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
      else if (n.tag !== 4 && n.child !== null) {
        (n.child.return = n), (n = n.child);
        continue;
      }
      if (n === r) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === r) return;
        n = n.return;
      }
      (n.sibling.return = n.return), (n = n.sibling);
    }
  }),
    (r0 = function () {}),
    (Gi = function (e, r, n, t) {
      var a = e.memoizedProps;
      if (a !== t) {
        (e = r.stateNode), qr(gr.current);
        var l = null;
        switch (n) {
          case "input":
            (a = Ta(e, a)), (t = Ta(e, t)), (l = []);
            break;
          case "select":
            (a = x({}, a, { value: void 0 })),
              (t = x({}, t, { value: void 0 })),
              (l = []);
            break;
          case "textarea":
            (a = ja(e, a)), (t = ja(e, t)), (l = []);
            break;
          default:
            typeof a.onClick != "function" &&
              typeof t.onClick == "function" &&
              (e.onclick = Ht);
        }
        Oa(n, t);
        var o;
        n = null;
        for (g in a)
          if (!t.hasOwnProperty(g) && a.hasOwnProperty(g) && a[g] != null)
            if (g === "style") {
              var i = a[g];
              for (o in i) i.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
            } else
              g !== "dangerouslySetInnerHTML" &&
                g !== "children" &&
                g !== "suppressContentEditableWarning" &&
                g !== "suppressHydrationWarning" &&
                g !== "autoFocus" &&
                (U.hasOwnProperty(g)
                  ? l || (l = [])
                  : (l = l || []).push(g, null));
        for (g in t) {
          var u = t[g];
          if (
            ((i = a != null ? a[g] : void 0),
            t.hasOwnProperty(g) && u !== i && (u != null || i != null))
          )
            if (g === "style")
              if (i) {
                for (o in i)
                  !i.hasOwnProperty(o) ||
                    (u && u.hasOwnProperty(o)) ||
                    (n || (n = {}), (n[o] = ""));
                for (o in u)
                  u.hasOwnProperty(o) &&
                    i[o] !== u[o] &&
                    (n || (n = {}), (n[o] = u[o]));
              } else n || (l || (l = []), l.push(g, n)), (n = u);
            else
              g === "dangerouslySetInnerHTML"
                ? ((u = u ? u.__html : void 0),
                  (i = i ? i.__html : void 0),
                  u != null && i !== u && (l = l || []).push(g, u))
                : g === "children"
                  ? (typeof u != "string" && typeof u != "number") ||
                    (l = l || []).push(g, "" + u)
                  : g !== "suppressContentEditableWarning" &&
                    g !== "suppressHydrationWarning" &&
                    (U.hasOwnProperty(g)
                      ? (u != null && g === "onScroll" && X("scroll", e),
                        l || i === u || (l = []))
                      : (l = l || []).push(g, u));
        }
        n && (l = l || []).push("style", n);
        var g = l;
        (r.updateQueue = g) && (r.flags |= 4);
      }
    }),
    (Zi = function (e, r, n, t) {
      n !== t && (r.flags |= 4);
    });
  function ft(e, r) {
    if (!ee)
      switch (e.tailMode) {
        case "hidden":
          r = e.tail;
          for (var n = null; r !== null; )
            r.alternate !== null && (n = r), (r = r.sibling);
          n === null ? (e.tail = null) : (n.sibling = null);
          break;
        case "collapsed":
          n = e.tail;
          for (var t = null; n !== null; )
            n.alternate !== null && (t = n), (n = n.sibling);
          t === null
            ? r || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (t.sibling = null);
      }
  }
  function Se(e) {
    var r = e.alternate !== null && e.alternate.child === e.child,
      n = 0,
      t = 0;
    if (r)
      for (var a = e.child; a !== null; )
        (n |= a.lanes | a.childLanes),
          (t |= a.subtreeFlags & 14680064),
          (t |= a.flags & 14680064),
          (a.return = e),
          (a = a.sibling);
    else
      for (a = e.child; a !== null; )
        (n |= a.lanes | a.childLanes),
          (t |= a.subtreeFlags),
          (t |= a.flags),
          (a.return = e),
          (a = a.sibling);
    return (e.subtreeFlags |= t), (e.childLanes = n), r;
  }
  function ss(e, r, n) {
    var t = r.pendingProps;
    switch ((xl(r), r.tag)) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Se(r), null;
      case 1:
        return Re(r.type) && Wt(), Se(r), null;
      case 3:
        return (
          (t = r.stateNode),
          Cn(),
          G(Le),
          G(we),
          Dl(),
          t.pendingContext &&
            ((t.context = t.pendingContext), (t.pendingContext = null)),
          (e === null || e.child === null) &&
            (Gt(r)
              ? (r.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && !(r.flags & 256)) ||
                ((r.flags |= 1024), tr !== null && (f0(tr), (tr = null)))),
          r0(e, r),
          Se(r),
          null
        );
      case 5:
        Ml(r);
        var a = qr(it.current);
        if (((n = r.type), e !== null && r.stateNode != null))
          Gi(e, r, n, t, a),
            e.ref !== r.ref && ((r.flags |= 512), (r.flags |= 2097152));
        else {
          if (!t) {
            if (r.stateNode === null) throw Error(d(166));
            return Se(r), null;
          }
          if (((e = qr(gr.current)), Gt(r))) {
            (t = r.stateNode), (n = r.type);
            var l = r.memoizedProps;
            switch (((t[fr] = r), (t[nt] = l), (e = (r.mode & 1) !== 0), n)) {
              case "dialog":
                X("cancel", t), X("close", t);
                break;
              case "iframe":
              case "object":
              case "embed":
                X("load", t);
                break;
              case "video":
              case "audio":
                for (a = 0; a < qn.length; a++) X(qn[a], t);
                break;
              case "source":
                X("error", t);
                break;
              case "img":
              case "image":
              case "link":
                X("error", t), X("load", t);
                break;
              case "details":
                X("toggle", t);
                break;
              case "input":
                T0(t, l), X("invalid", t);
                break;
              case "select":
                (t._wrapperState = { wasMultiple: !!l.multiple }),
                  X("invalid", t);
                break;
              case "textarea":
                j0(t, l), X("invalid", t);
            }
            Oa(n, l), (a = null);
            for (var o in l)
              if (l.hasOwnProperty(o)) {
                var i = l[o];
                o === "children"
                  ? typeof i == "string"
                    ? t.textContent !== i &&
                      (l.suppressHydrationWarning !== !0 &&
                        Bt(t.textContent, i, e),
                      (a = ["children", i]))
                    : typeof i == "number" &&
                      t.textContent !== "" + i &&
                      (l.suppressHydrationWarning !== !0 &&
                        Bt(t.textContent, i, e),
                      (a = ["children", "" + i]))
                  : U.hasOwnProperty(o) &&
                    i != null &&
                    o === "onScroll" &&
                    X("scroll", t);
              }
            switch (n) {
              case "input":
                bt(t), R0(t, l, !0);
                break;
              case "textarea":
                bt(t), O0(t);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof l.onClick == "function" && (t.onclick = Ht);
            }
            (t = a), (r.updateQueue = t), t !== null && (r.flags |= 4);
          } else {
            (o = a.nodeType === 9 ? a : a.ownerDocument),
              e === "http://www.w3.org/1999/xhtml" && (e = D0(n)),
              e === "http://www.w3.org/1999/xhtml"
                ? n === "script"
                  ? ((e = o.createElement("div")),
                    (e.innerHTML = "<script><\/script>"),
                    (e = e.removeChild(e.firstChild)))
                  : typeof t.is == "string"
                    ? (e = o.createElement(n, { is: t.is }))
                    : ((e = o.createElement(n)),
                      n === "select" &&
                        ((o = e),
                        t.multiple
                          ? (o.multiple = !0)
                          : t.size && (o.size = t.size)))
                : (e = o.createElementNS(e, n)),
              (e[fr] = r),
              (e[nt] = t),
              Xi(e, r, !1, !1),
              (r.stateNode = e);
            e: {
              switch (((o = Da(n, t)), n)) {
                case "dialog":
                  X("cancel", e), X("close", e), (a = t);
                  break;
                case "iframe":
                case "object":
                case "embed":
                  X("load", e), (a = t);
                  break;
                case "video":
                case "audio":
                  for (a = 0; a < qn.length; a++) X(qn[a], e);
                  a = t;
                  break;
                case "source":
                  X("error", e), (a = t);
                  break;
                case "img":
                case "image":
                case "link":
                  X("error", e), X("load", e), (a = t);
                  break;
                case "details":
                  X("toggle", e), (a = t);
                  break;
                case "input":
                  T0(e, t), (a = Ta(e, t)), X("invalid", e);
                  break;
                case "option":
                  a = t;
                  break;
                case "select":
                  (e._wrapperState = { wasMultiple: !!t.multiple }),
                    (a = x({}, t, { value: void 0 })),
                    X("invalid", e);
                  break;
                case "textarea":
                  j0(e, t), (a = ja(e, t)), X("invalid", e);
                  break;
                default:
                  a = t;
              }
              Oa(n, a), (i = a);
              for (l in i)
                if (i.hasOwnProperty(l)) {
                  var u = i[l];
                  l === "style"
                    ? U0(e, u)
                    : l === "dangerouslySetInnerHTML"
                      ? ((u = u ? u.__html : void 0), u != null && I0(e, u))
                      : l === "children"
                        ? typeof u == "string"
                          ? (n !== "textarea" || u !== "") && Mn(e, u)
                          : typeof u == "number" && Mn(e, "" + u)
                        : l !== "suppressContentEditableWarning" &&
                          l !== "suppressHydrationWarning" &&
                          l !== "autoFocus" &&
                          (U.hasOwnProperty(l)
                            ? u != null && l === "onScroll" && X("scroll", e)
                            : u != null && Je(e, l, u, o));
                }
              switch (n) {
                case "input":
                  bt(e), R0(e, t, !1);
                  break;
                case "textarea":
                  bt(e), O0(e);
                  break;
                case "option":
                  t.value != null && e.setAttribute("value", "" + H(t.value));
                  break;
                case "select":
                  (e.multiple = !!t.multiple),
                    (l = t.value),
                    l != null
                      ? on(e, !!t.multiple, l, !1)
                      : t.defaultValue != null &&
                        on(e, !!t.multiple, t.defaultValue, !0);
                  break;
                default:
                  typeof a.onClick == "function" && (e.onclick = Ht);
              }
              switch (n) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  t = !!t.autoFocus;
                  break e;
                case "img":
                  t = !0;
                  break e;
                default:
                  t = !1;
              }
            }
            t && (r.flags |= 4);
          }
          r.ref !== null && ((r.flags |= 512), (r.flags |= 2097152));
        }
        return Se(r), null;
      case 6:
        if (e && r.stateNode != null) Zi(e, r, e.memoizedProps, t);
        else {
          if (typeof t != "string" && r.stateNode === null) throw Error(d(166));
          if (((n = qr(it.current)), qr(gr.current), Gt(r))) {
            if (
              ((t = r.stateNode),
              (n = r.memoizedProps),
              (t[fr] = r),
              (l = t.nodeValue !== n) && ((e = Ae), e !== null))
            )
              switch (e.tag) {
                case 3:
                  Bt(t.nodeValue, n, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    Bt(t.nodeValue, n, (e.mode & 1) !== 0);
              }
            l && (r.flags |= 4);
          } else
            (t = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(t)),
              (t[fr] = r),
              (r.stateNode = t);
        }
        return Se(r), null;
      case 13:
        if (
          (G(ne),
          (t = r.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (ee && Ve !== null && r.mode & 1 && !(r.flags & 128))
            ei(), Sn(), (r.flags |= 98560), (l = !1);
          else if (((l = Gt(r)), t !== null && t.dehydrated !== null)) {
            if (e === null) {
              if (!l) throw Error(d(318));
              if (
                ((l = r.memoizedState),
                (l = l !== null ? l.dehydrated : null),
                !l)
              )
                throw Error(d(317));
              l[fr] = r;
            } else
              Sn(),
                !(r.flags & 128) && (r.memoizedState = null),
                (r.flags |= 4);
            Se(r), (l = !1);
          } else tr !== null && (f0(tr), (tr = null)), (l = !0);
          if (!l) return r.flags & 65536 ? r : null;
        }
        return r.flags & 128
          ? ((r.lanes = n), r)
          : ((t = t !== null),
            t !== (e !== null && e.memoizedState !== null) &&
              t &&
              ((r.child.flags |= 8192),
              r.mode & 1 &&
                (e === null || ne.current & 1 ? fe === 0 && (fe = 3) : h0())),
            r.updateQueue !== null && (r.flags |= 4),
            Se(r),
            null);
      case 4:
        return (
          Cn(),
          r0(e, r),
          e === null && et(r.stateNode.containerInfo),
          Se(r),
          null
        );
      case 10:
        return Pl(r.type._context), Se(r), null;
      case 17:
        return Re(r.type) && Wt(), Se(r), null;
      case 19:
        if ((G(ne), (l = r.memoizedState), l === null)) return Se(r), null;
        if (((t = (r.flags & 128) !== 0), (o = l.rendering), o === null))
          if (t) ft(l, !1);
          else {
            if (fe !== 0 || (e !== null && e.flags & 128))
              for (e = r.child; e !== null; ) {
                if (((o = na(e)), o !== null)) {
                  for (
                    r.flags |= 128,
                      ft(l, !1),
                      t = o.updateQueue,
                      t !== null && ((r.updateQueue = t), (r.flags |= 4)),
                      r.subtreeFlags = 0,
                      t = n,
                      n = r.child;
                    n !== null;

                  )
                    (l = n),
                      (e = t),
                      (l.flags &= 14680066),
                      (o = l.alternate),
                      o === null
                        ? ((l.childLanes = 0),
                          (l.lanes = e),
                          (l.child = null),
                          (l.subtreeFlags = 0),
                          (l.memoizedProps = null),
                          (l.memoizedState = null),
                          (l.updateQueue = null),
                          (l.dependencies = null),
                          (l.stateNode = null))
                        : ((l.childLanes = o.childLanes),
                          (l.lanes = o.lanes),
                          (l.child = o.child),
                          (l.subtreeFlags = 0),
                          (l.deletions = null),
                          (l.memoizedProps = o.memoizedProps),
                          (l.memoizedState = o.memoizedState),
                          (l.updateQueue = o.updateQueue),
                          (l.type = o.type),
                          (e = o.dependencies),
                          (l.dependencies =
                            e === null
                              ? null
                              : {
                                  lanes: e.lanes,
                                  firstContext: e.firstContext,
                                })),
                      (n = n.sibling);
                  return Y(ne, (ne.current & 1) | 2), r.child;
                }
                e = e.sibling;
              }
            l.tail !== null &&
              ue() > Tn &&
              ((r.flags |= 128), (t = !0), ft(l, !1), (r.lanes = 4194304));
          }
        else {
          if (!t)
            if (((e = na(o)), e !== null)) {
              if (
                ((r.flags |= 128),
                (t = !0),
                (n = e.updateQueue),
                n !== null && ((r.updateQueue = n), (r.flags |= 4)),
                ft(l, !0),
                l.tail === null &&
                  l.tailMode === "hidden" &&
                  !o.alternate &&
                  !ee)
              )
                return Se(r), null;
            } else
              2 * ue() - l.renderingStartTime > Tn &&
                n !== 1073741824 &&
                ((r.flags |= 128), (t = !0), ft(l, !1), (r.lanes = 4194304));
          l.isBackwards
            ? ((o.sibling = r.child), (r.child = o))
            : ((n = l.last),
              n !== null ? (n.sibling = o) : (r.child = o),
              (l.last = o));
        }
        return l.tail !== null
          ? ((r = l.tail),
            (l.rendering = r),
            (l.tail = r.sibling),
            (l.renderingStartTime = ue()),
            (r.sibling = null),
            (n = ne.current),
            Y(ne, t ? (n & 1) | 2 : n & 1),
            r)
          : (Se(r), null);
      case 22:
      case 23:
        return (
          d0(),
          (t = r.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== t && (r.flags |= 8192),
          t && r.mode & 1
            ? Be & 1073741824 &&
              (Se(r), r.subtreeFlags & 6 && (r.flags |= 8192))
            : Se(r),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(d(156, r.tag));
  }
  function ps(e, r) {
    switch ((xl(r), r.tag)) {
      case 1:
        return (
          Re(r.type) && Wt(),
          (e = r.flags),
          e & 65536 ? ((r.flags = (e & -65537) | 128), r) : null
        );
      case 3:
        return (
          Cn(),
          G(Le),
          G(we),
          Dl(),
          (e = r.flags),
          e & 65536 && !(e & 128) ? ((r.flags = (e & -65537) | 128), r) : null
        );
      case 5:
        return Ml(r), null;
      case 13:
        if (
          (G(ne), (e = r.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (r.alternate === null) throw Error(d(340));
          Sn();
        }
        return (
          (e = r.flags), e & 65536 ? ((r.flags = (e & -65537) | 128), r) : null
        );
      case 19:
        return G(ne), null;
      case 4:
        return Cn(), null;
      case 10:
        return Pl(r.type._context), null;
      case 22:
      case 23:
        return d0(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var ca = !1,
    xe = !1,
    cs = typeof WeakSet == "function" ? WeakSet : Set,
    S = null;
  function Nn(e, r) {
    var n = e.ref;
    if (n !== null)
      if (typeof n == "function")
        try {
          n(null);
        } catch (t) {
          le(e, r, t);
        }
      else n.current = null;
  }
  function n0(e, r, n) {
    try {
      n();
    } catch (t) {
      le(e, r, t);
    }
  }
  var Ji = !1;
  function fs(e, r) {
    if (((dl = Lt), (e = To()), ol(e))) {
      if ("selectionStart" in e)
        var n = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          n = ((n = e.ownerDocument) && n.defaultView) || window;
          var t = n.getSelection && n.getSelection();
          if (t && t.rangeCount !== 0) {
            n = t.anchorNode;
            var a = t.anchorOffset,
              l = t.focusNode;
            t = t.focusOffset;
            try {
              n.nodeType, l.nodeType;
            } catch {
              n = null;
              break e;
            }
            var o = 0,
              i = -1,
              u = -1,
              g = 0,
              y = 0,
              v = e,
              h = null;
            r: for (;;) {
              for (
                var k;
                v !== n || (a !== 0 && v.nodeType !== 3) || (i = o + a),
                  v !== l || (t !== 0 && v.nodeType !== 3) || (u = o + t),
                  v.nodeType === 3 && (o += v.nodeValue.length),
                  (k = v.firstChild) !== null;

              )
                (h = v), (v = k);
              for (;;) {
                if (v === e) break r;
                if (
                  (h === n && ++g === a && (i = o),
                  h === l && ++y === t && (u = o),
                  (k = v.nextSibling) !== null)
                )
                  break;
                (v = h), (h = v.parentNode);
              }
              v = k;
            }
            n = i === -1 || u === -1 ? null : { start: i, end: u };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (
      hl = { focusedElem: e, selectionRange: n }, Lt = !1, S = r;
      S !== null;

    )
      if (((r = S), (e = r.child), (r.subtreeFlags & 1028) !== 0 && e !== null))
        (e.return = r), (S = e);
      else
        for (; S !== null; ) {
          r = S;
          try {
            var E = r.alternate;
            if (r.flags & 1024)
              switch (r.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (E !== null) {
                    var z = E.memoizedProps,
                      se = E.memoizedState,
                      c = r.stateNode,
                      s = c.getSnapshotBeforeUpdate(
                        r.elementType === r.type ? z : ar(r.type, z),
                        se,
                      );
                    c.__reactInternalSnapshotBeforeUpdate = s;
                  }
                  break;
                case 3:
                  var f = r.stateNode.containerInfo;
                  f.nodeType === 1
                    ? (f.textContent = "")
                    : f.nodeType === 9 &&
                      f.documentElement &&
                      f.removeChild(f.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(d(163));
              }
          } catch (b) {
            le(r, r.return, b);
          }
          if (((e = r.sibling), e !== null)) {
            (e.return = r.return), (S = e);
            break;
          }
          S = r.return;
        }
    return (E = Ji), (Ji = !1), E;
  }
  function gt(e, r, n) {
    var t = r.updateQueue;
    if (((t = t !== null ? t.lastEffect : null), t !== null)) {
      var a = (t = t.next);
      do {
        if ((a.tag & e) === e) {
          var l = a.destroy;
          (a.destroy = void 0), l !== void 0 && n0(r, n, l);
        }
        a = a.next;
      } while (a !== t);
    }
  }
  function fa(e, r) {
    if (
      ((r = r.updateQueue), (r = r !== null ? r.lastEffect : null), r !== null)
    ) {
      var n = (r = r.next);
      do {
        if ((n.tag & e) === e) {
          var t = n.create;
          n.destroy = t();
        }
        n = n.next;
      } while (n !== r);
    }
  }
  function t0(e) {
    var r = e.ref;
    if (r !== null) {
      var n = e.stateNode;
      switch (e.tag) {
        case 5:
          e = n;
          break;
        default:
          e = n;
      }
      typeof r == "function" ? r(e) : (r.current = e);
    }
  }
  function qi(e) {
    var r = e.alternate;
    r !== null && ((e.alternate = null), qi(r)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((r = e.stateNode),
        r !== null &&
          (delete r[fr],
          delete r[nt],
          delete r[bl],
          delete r[Y1],
          delete r[X1])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  function eu(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function ru(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || eu(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

      ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        (e.child.return = e), (e = e.child);
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function a0(e, r, n) {
    var t = e.tag;
    if (t === 5 || t === 6)
      (e = e.stateNode),
        r
          ? n.nodeType === 8
            ? n.parentNode.insertBefore(e, r)
            : n.insertBefore(e, r)
          : (n.nodeType === 8
              ? ((r = n.parentNode), r.insertBefore(e, n))
              : ((r = n), r.appendChild(e)),
            (n = n._reactRootContainer),
            n != null || r.onclick !== null || (r.onclick = Ht));
    else if (t !== 4 && ((e = e.child), e !== null))
      for (a0(e, r, n), e = e.sibling; e !== null; )
        a0(e, r, n), (e = e.sibling);
  }
  function l0(e, r, n) {
    var t = e.tag;
    if (t === 5 || t === 6)
      (e = e.stateNode), r ? n.insertBefore(e, r) : n.appendChild(e);
    else if (t !== 4 && ((e = e.child), e !== null))
      for (l0(e, r, n), e = e.sibling; e !== null; )
        l0(e, r, n), (e = e.sibling);
  }
  var me = null,
    lr = !1;
  function Ur(e, r, n) {
    for (n = n.child; n !== null; ) nu(e, r, n), (n = n.sibling);
  }
  function nu(e, r, n) {
    if (cr && typeof cr.onCommitFiberUnmount == "function")
      try {
        cr.onCommitFiberUnmount(zt, n);
      } catch {}
    switch (n.tag) {
      case 5:
        xe || Nn(n, r);
      case 6:
        var t = me,
          a = lr;
        (me = null),
          Ur(e, r, n),
          (me = t),
          (lr = a),
          me !== null &&
            (lr
              ? ((e = me),
                (n = n.stateNode),
                e.nodeType === 8
                  ? e.parentNode.removeChild(n)
                  : e.removeChild(n))
              : me.removeChild(n.stateNode));
        break;
      case 18:
        me !== null &&
          (lr
            ? ((e = me),
              (n = n.stateNode),
              e.nodeType === 8
                ? vl(e.parentNode, n)
                : e.nodeType === 1 && vl(e, n),
              Wn(e))
            : vl(me, n.stateNode));
        break;
      case 4:
        (t = me),
          (a = lr),
          (me = n.stateNode.containerInfo),
          (lr = !0),
          Ur(e, r, n),
          (me = t),
          (lr = a);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (
          !xe &&
          ((t = n.updateQueue), t !== null && ((t = t.lastEffect), t !== null))
        ) {
          a = t = t.next;
          do {
            var l = a,
              o = l.destroy;
            (l = l.tag),
              o !== void 0 && (l & 2 || l & 4) && n0(n, r, o),
              (a = a.next);
          } while (a !== t);
        }
        Ur(e, r, n);
        break;
      case 1:
        if (
          !xe &&
          (Nn(n, r),
          (t = n.stateNode),
          typeof t.componentWillUnmount == "function")
        )
          try {
            (t.props = n.memoizedProps),
              (t.state = n.memoizedState),
              t.componentWillUnmount();
          } catch (i) {
            le(n, r, i);
          }
        Ur(e, r, n);
        break;
      case 21:
        Ur(e, r, n);
        break;
      case 22:
        n.mode & 1
          ? ((xe = (t = xe) || n.memoizedState !== null), Ur(e, r, n), (xe = t))
          : Ur(e, r, n);
        break;
      default:
        Ur(e, r, n);
    }
  }
  function tu(e) {
    var r = e.updateQueue;
    if (r !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new cs()),
        r.forEach(function (t) {
          var a = ks.bind(null, e, t);
          n.has(t) || (n.add(t), t.then(a, a));
        });
    }
  }
  function or(e, r) {
    var n = r.deletions;
    if (n !== null)
      for (var t = 0; t < n.length; t++) {
        var a = n[t];
        try {
          var l = e,
            o = r,
            i = o;
          e: for (; i !== null; ) {
            switch (i.tag) {
              case 5:
                (me = i.stateNode), (lr = !1);
                break e;
              case 3:
                (me = i.stateNode.containerInfo), (lr = !0);
                break e;
              case 4:
                (me = i.stateNode.containerInfo), (lr = !0);
                break e;
            }
            i = i.return;
          }
          if (me === null) throw Error(d(160));
          nu(l, o, a), (me = null), (lr = !1);
          var u = a.alternate;
          u !== null && (u.return = null), (a.return = null);
        } catch (g) {
          le(a, r, g);
        }
      }
    if (r.subtreeFlags & 12854)
      for (r = r.child; r !== null; ) au(r, e), (r = r.sibling);
  }
  function au(e, r) {
    var n = e.alternate,
      t = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((or(r, e), hr(e), t & 4)) {
          try {
            gt(3, e, e.return), fa(3, e);
          } catch (z) {
            le(e, e.return, z);
          }
          try {
            gt(5, e, e.return);
          } catch (z) {
            le(e, e.return, z);
          }
        }
        break;
      case 1:
        or(r, e), hr(e), t & 512 && n !== null && Nn(n, n.return);
        break;
      case 5:
        if (
          (or(r, e),
          hr(e),
          t & 512 && n !== null && Nn(n, n.return),
          e.flags & 32)
        ) {
          var a = e.stateNode;
          try {
            Mn(a, "");
          } catch (z) {
            le(e, e.return, z);
          }
        }
        if (t & 4 && ((a = e.stateNode), a != null)) {
          var l = e.memoizedProps,
            o = n !== null ? n.memoizedProps : l,
            i = e.type,
            u = e.updateQueue;
          if (((e.updateQueue = null), u !== null))
            try {
              i === "input" && l.type === "radio" && l.name != null && L0(a, l),
                Da(i, o);
              var g = Da(i, l);
              for (o = 0; o < u.length; o += 2) {
                var y = u[o],
                  v = u[o + 1];
                y === "style"
                  ? U0(a, v)
                  : y === "dangerouslySetInnerHTML"
                    ? I0(a, v)
                    : y === "children"
                      ? Mn(a, v)
                      : Je(a, y, v, g);
              }
              switch (i) {
                case "input":
                  La(a, l);
                  break;
                case "textarea":
                  M0(a, l);
                  break;
                case "select":
                  var h = a._wrapperState.wasMultiple;
                  a._wrapperState.wasMultiple = !!l.multiple;
                  var k = l.value;
                  k != null
                    ? on(a, !!l.multiple, k, !1)
                    : h !== !!l.multiple &&
                      (l.defaultValue != null
                        ? on(a, !!l.multiple, l.defaultValue, !0)
                        : on(a, !!l.multiple, l.multiple ? [] : "", !1));
              }
              a[nt] = l;
            } catch (z) {
              le(e, e.return, z);
            }
        }
        break;
      case 6:
        if ((or(r, e), hr(e), t & 4)) {
          if (e.stateNode === null) throw Error(d(162));
          (a = e.stateNode), (l = e.memoizedProps);
          try {
            a.nodeValue = l;
          } catch (z) {
            le(e, e.return, z);
          }
        }
        break;
      case 3:
        if (
          (or(r, e), hr(e), t & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            Wn(r.containerInfo);
          } catch (z) {
            le(e, e.return, z);
          }
        break;
      case 4:
        or(r, e), hr(e);
        break;
      case 13:
        or(r, e),
          hr(e),
          (a = e.child),
          a.flags & 8192 &&
            ((l = a.memoizedState !== null),
            (a.stateNode.isHidden = l),
            !l ||
              (a.alternate !== null && a.alternate.memoizedState !== null) ||
              (u0 = ue())),
          t & 4 && tu(e);
        break;
      case 22:
        if (
          ((y = n !== null && n.memoizedState !== null),
          e.mode & 1 ? ((xe = (g = xe) || y), or(r, e), (xe = g)) : or(r, e),
          hr(e),
          t & 8192)
        ) {
          if (
            ((g = e.memoizedState !== null),
            (e.stateNode.isHidden = g) && !y && e.mode & 1)
          )
            for (S = e, y = e.child; y !== null; ) {
              for (v = S = y; S !== null; ) {
                switch (((h = S), (k = h.child), h.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    gt(4, h, h.return);
                    break;
                  case 1:
                    Nn(h, h.return);
                    var E = h.stateNode;
                    if (typeof E.componentWillUnmount == "function") {
                      (t = h), (n = h.return);
                      try {
                        (r = t),
                          (E.props = r.memoizedProps),
                          (E.state = r.memoizedState),
                          E.componentWillUnmount();
                      } catch (z) {
                        le(t, n, z);
                      }
                    }
                    break;
                  case 5:
                    Nn(h, h.return);
                    break;
                  case 22:
                    if (h.memoizedState !== null) {
                      iu(v);
                      continue;
                    }
                }
                k !== null ? ((k.return = h), (S = k)) : iu(v);
              }
              y = y.sibling;
            }
          e: for (y = null, v = e; ; ) {
            if (v.tag === 5) {
              if (y === null) {
                y = v;
                try {
                  (a = v.stateNode),
                    g
                      ? ((l = a.style),
                        typeof l.setProperty == "function"
                          ? l.setProperty("display", "none", "important")
                          : (l.display = "none"))
                      : ((i = v.stateNode),
                        (u = v.memoizedProps.style),
                        (o =
                          u != null && u.hasOwnProperty("display")
                            ? u.display
                            : null),
                        (i.style.display = F0("display", o)));
                } catch (z) {
                  le(e, e.return, z);
                }
              }
            } else if (v.tag === 6) {
              if (y === null)
                try {
                  v.stateNode.nodeValue = g ? "" : v.memoizedProps;
                } catch (z) {
                  le(e, e.return, z);
                }
            } else if (
              ((v.tag !== 22 && v.tag !== 23) ||
                v.memoizedState === null ||
                v === e) &&
              v.child !== null
            ) {
              (v.child.return = v), (v = v.child);
              continue;
            }
            if (v === e) break e;
            for (; v.sibling === null; ) {
              if (v.return === null || v.return === e) break e;
              y === v && (y = null), (v = v.return);
            }
            y === v && (y = null),
              (v.sibling.return = v.return),
              (v = v.sibling);
          }
        }
        break;
      case 19:
        or(r, e), hr(e), t & 4 && tu(e);
        break;
      case 21:
        break;
      default:
        or(r, e), hr(e);
    }
  }
  function hr(e) {
    var r = e.flags;
    if (r & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (eu(n)) {
              var t = n;
              break e;
            }
            n = n.return;
          }
          throw Error(d(160));
        }
        switch (t.tag) {
          case 5:
            var a = t.stateNode;
            t.flags & 32 && (Mn(a, ""), (t.flags &= -33));
            var l = ru(e);
            l0(e, l, a);
            break;
          case 3:
          case 4:
            var o = t.stateNode.containerInfo,
              i = ru(e);
            a0(e, i, o);
            break;
          default:
            throw Error(d(161));
        }
      } catch (u) {
        le(e, e.return, u);
      }
      e.flags &= -3;
    }
    r & 4096 && (e.flags &= -4097);
  }
  function gs(e, r, n) {
    (S = e), lu(e);
  }
  function lu(e, r, n) {
    for (var t = (e.mode & 1) !== 0; S !== null; ) {
      var a = S,
        l = a.child;
      if (a.tag === 22 && t) {
        var o = a.memoizedState !== null || ca;
        if (!o) {
          var i = a.alternate,
            u = (i !== null && i.memoizedState !== null) || xe;
          i = ca;
          var g = xe;
          if (((ca = o), (xe = u) && !g))
            for (S = a; S !== null; )
              (o = S),
                (u = o.child),
                o.tag === 22 && o.memoizedState !== null
                  ? uu(a)
                  : u !== null
                    ? ((u.return = o), (S = u))
                    : uu(a);
          for (; l !== null; ) (S = l), lu(l), (l = l.sibling);
          (S = a), (ca = i), (xe = g);
        }
        ou(e);
      } else
        a.subtreeFlags & 8772 && l !== null ? ((l.return = a), (S = l)) : ou(e);
    }
  }
  function ou(e) {
    for (; S !== null; ) {
      var r = S;
      if (r.flags & 8772) {
        var n = r.alternate;
        try {
          if (r.flags & 8772)
            switch (r.tag) {
              case 0:
              case 11:
              case 15:
                xe || fa(5, r);
                break;
              case 1:
                var t = r.stateNode;
                if (r.flags & 4 && !xe)
                  if (n === null) t.componentDidMount();
                  else {
                    var a =
                      r.elementType === r.type
                        ? n.memoizedProps
                        : ar(r.type, n.memoizedProps);
                    t.componentDidUpdate(
                      a,
                      n.memoizedState,
                      t.__reactInternalSnapshotBeforeUpdate,
                    );
                  }
                var l = r.updateQueue;
                l !== null && ii(r, l, t);
                break;
              case 3:
                var o = r.updateQueue;
                if (o !== null) {
                  if (((n = null), r.child !== null))
                    switch (r.child.tag) {
                      case 5:
                        n = r.child.stateNode;
                        break;
                      case 1:
                        n = r.child.stateNode;
                    }
                  ii(r, o, n);
                }
                break;
              case 5:
                var i = r.stateNode;
                if (n === null && r.flags & 4) {
                  n = i;
                  var u = r.memoizedProps;
                  switch (r.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      u.autoFocus && n.focus();
                      break;
                    case "img":
                      u.src && (n.src = u.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (r.memoizedState === null) {
                  var g = r.alternate;
                  if (g !== null) {
                    var y = g.memoizedState;
                    if (y !== null) {
                      var v = y.dehydrated;
                      v !== null && Wn(v);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(d(163));
            }
          xe || (r.flags & 512 && t0(r));
        } catch (h) {
          le(r, r.return, h);
        }
      }
      if (r === e) {
        S = null;
        break;
      }
      if (((n = r.sibling), n !== null)) {
        (n.return = r.return), (S = n);
        break;
      }
      S = r.return;
    }
  }
  function iu(e) {
    for (; S !== null; ) {
      var r = S;
      if (r === e) {
        S = null;
        break;
      }
      var n = r.sibling;
      if (n !== null) {
        (n.return = r.return), (S = n);
        break;
      }
      S = r.return;
    }
  }
  function uu(e) {
    for (; S !== null; ) {
      var r = S;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var n = r.return;
            try {
              fa(4, r);
            } catch (u) {
              le(r, n, u);
            }
            break;
          case 1:
            var t = r.stateNode;
            if (typeof t.componentDidMount == "function") {
              var a = r.return;
              try {
                t.componentDidMount();
              } catch (u) {
                le(r, a, u);
              }
            }
            var l = r.return;
            try {
              t0(r);
            } catch (u) {
              le(r, l, u);
            }
            break;
          case 5:
            var o = r.return;
            try {
              t0(r);
            } catch (u) {
              le(r, o, u);
            }
        }
      } catch (u) {
        le(r, r.return, u);
      }
      if (r === e) {
        S = null;
        break;
      }
      var i = r.sibling;
      if (i !== null) {
        (i.return = r.return), (S = i);
        break;
      }
      S = r.return;
    }
  }
  var ds = Math.ceil,
    ga = be.ReactCurrentDispatcher,
    o0 = be.ReactCurrentOwner,
    Ge = be.ReactCurrentBatchConfig,
    I = 0,
    de = null,
    pe = null,
    ye = 0,
    Be = 0,
    Pn = Mr(0),
    fe = 0,
    dt = null,
    rn = 0,
    da = 0,
    i0 = 0,
    ht = null,
    Me = null,
    u0 = 0,
    Tn = 1 / 0,
    zr = null,
    ha = !1,
    s0 = null,
    Ar = null,
    ma = !1,
    Vr = null,
    ya = 0,
    mt = 0,
    p0 = null,
    va = -1,
    ba = 0;
  function Ne() {
    return I & 6 ? ue() : va !== -1 ? va : (va = ue());
  }
  function Br(e) {
    return e.mode & 1
      ? I & 2 && ye !== 0
        ? ye & -ye
        : Z1.transition !== null
          ? (ba === 0 && (ba = eo()), ba)
          : ((e = $),
            e !== 0 ||
              ((e = window.event), (e = e === void 0 ? 16 : so(e.type))),
            e)
      : 1;
  }
  function ir(e, r, n, t) {
    if (50 < mt) throw ((mt = 0), (p0 = null), Error(d(185)));
    An(e, n, t),
      (!(I & 2) || e !== de) &&
        (e === de && (!(I & 2) && (da |= n), fe === 4 && Hr(e, ye)),
        Oe(e, t),
        n === 1 && I === 0 && !(r.mode & 1) && ((Tn = ue() + 500), Kt && Dr()));
  }
  function Oe(e, r) {
    var n = e.callbackNode;
    Zu(e, r);
    var t = Nt(e, e === de ? ye : 0);
    if (t === 0)
      n !== null && Z0(n), (e.callbackNode = null), (e.callbackPriority = 0);
    else if (((r = t & -t), e.callbackPriority !== r)) {
      if ((n != null && Z0(n), r === 1))
        e.tag === 0 ? G1(pu.bind(null, e)) : Xo(pu.bind(null, e)),
          Q1(function () {
            !(I & 6) && Dr();
          }),
          (n = null);
      else {
        switch (ro(t)) {
          case 1:
            n = Ha;
            break;
          case 4:
            n = J0;
            break;
          case 16:
            n = Et;
            break;
          case 536870912:
            n = q0;
            break;
          default:
            n = Et;
        }
        n = vu(n, su.bind(null, e));
      }
      (e.callbackPriority = r), (e.callbackNode = n);
    }
  }
  function su(e, r) {
    if (((va = -1), (ba = 0), I & 6)) throw Error(d(327));
    var n = e.callbackNode;
    if (Ln() && e.callbackNode !== n) return null;
    var t = Nt(e, e === de ? ye : 0);
    if (t === 0) return null;
    if (t & 30 || t & e.expiredLanes || r) r = wa(e, t);
    else {
      r = t;
      var a = I;
      I |= 2;
      var l = fu();
      (de !== e || ye !== r) && ((zr = null), (Tn = ue() + 500), tn(e, r));
      do
        try {
          ys();
          break;
        } catch (i) {
          cu(e, i);
        }
      while (!0);
      Nl(),
        (ga.current = l),
        (I = a),
        pe !== null ? (r = 0) : ((de = null), (ye = 0), (r = fe));
    }
    if (r !== 0) {
      if (
        (r === 2 && ((a = $a(e)), a !== 0 && ((t = a), (r = c0(e, a)))),
        r === 1)
      )
        throw ((n = dt), tn(e, 0), Hr(e, t), Oe(e, ue()), n);
      if (r === 6) Hr(e, t);
      else {
        if (
          ((a = e.current.alternate),
          !(t & 30) &&
            !hs(a) &&
            ((r = wa(e, t)),
            r === 2 && ((l = $a(e)), l !== 0 && ((t = l), (r = c0(e, l)))),
            r === 1))
        )
          throw ((n = dt), tn(e, 0), Hr(e, t), Oe(e, ue()), n);
        switch (((e.finishedWork = a), (e.finishedLanes = t), r)) {
          case 0:
          case 1:
            throw Error(d(345));
          case 2:
            an(e, Me, zr);
            break;
          case 3:
            if (
              (Hr(e, t),
              (t & 130023424) === t && ((r = u0 + 500 - ue()), 10 < r))
            ) {
              if (Nt(e, 0) !== 0) break;
              if (((a = e.suspendedLanes), (a & t) !== t)) {
                Ne(), (e.pingedLanes |= e.suspendedLanes & a);
                break;
              }
              e.timeoutHandle = yl(an.bind(null, e, Me, zr), r);
              break;
            }
            an(e, Me, zr);
            break;
          case 4:
            if ((Hr(e, t), (t & 4194240) === t)) break;
            for (r = e.eventTimes, a = -1; 0 < t; ) {
              var o = 31 - rr(t);
              (l = 1 << o), (o = r[o]), o > a && (a = o), (t &= ~l);
            }
            if (
              ((t = a),
              (t = ue() - t),
              (t =
                (120 > t
                  ? 120
                  : 480 > t
                    ? 480
                    : 1080 > t
                      ? 1080
                      : 1920 > t
                        ? 1920
                        : 3e3 > t
                          ? 3e3
                          : 4320 > t
                            ? 4320
                            : 1960 * ds(t / 1960)) - t),
              10 < t)
            ) {
              e.timeoutHandle = yl(an.bind(null, e, Me, zr), t);
              break;
            }
            an(e, Me, zr);
            break;
          case 5:
            an(e, Me, zr);
            break;
          default:
            throw Error(d(329));
        }
      }
    }
    return Oe(e, ue()), e.callbackNode === n ? su.bind(null, e) : null;
  }
  function c0(e, r) {
    var n = ht;
    return (
      e.current.memoizedState.isDehydrated && (tn(e, r).flags |= 256),
      (e = wa(e, r)),
      e !== 2 && ((r = Me), (Me = n), r !== null && f0(r)),
      e
    );
  }
  function f0(e) {
    Me === null ? (Me = e) : Me.push.apply(Me, e);
  }
  function hs(e) {
    for (var r = e; ; ) {
      if (r.flags & 16384) {
        var n = r.updateQueue;
        if (n !== null && ((n = n.stores), n !== null))
          for (var t = 0; t < n.length; t++) {
            var a = n[t],
              l = a.getSnapshot;
            a = a.value;
            try {
              if (!nr(l(), a)) return !1;
            } catch {
              return !1;
            }
          }
      }
      if (((n = r.child), r.subtreeFlags & 16384 && n !== null))
        (n.return = r), (r = n);
      else {
        if (r === e) break;
        for (; r.sibling === null; ) {
          if (r.return === null || r.return === e) return !0;
          r = r.return;
        }
        (r.sibling.return = r.return), (r = r.sibling);
      }
    }
    return !0;
  }
  function Hr(e, r) {
    for (
      r &= ~i0,
        r &= ~da,
        e.suspendedLanes |= r,
        e.pingedLanes &= ~r,
        e = e.expirationTimes;
      0 < r;

    ) {
      var n = 31 - rr(r),
        t = 1 << n;
      (e[n] = -1), (r &= ~t);
    }
  }
  function pu(e) {
    if (I & 6) throw Error(d(327));
    Ln();
    var r = Nt(e, 0);
    if (!(r & 1)) return Oe(e, ue()), null;
    var n = wa(e, r);
    if (e.tag !== 0 && n === 2) {
      var t = $a(e);
      t !== 0 && ((r = t), (n = c0(e, t)));
    }
    if (n === 1) throw ((n = dt), tn(e, 0), Hr(e, r), Oe(e, ue()), n);
    if (n === 6) throw Error(d(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = r),
      an(e, Me, zr),
      Oe(e, ue()),
      null
    );
  }
  function g0(e, r) {
    var n = I;
    I |= 1;
    try {
      return e(r);
    } finally {
      (I = n), I === 0 && ((Tn = ue() + 500), Kt && Dr());
    }
  }
  function nn(e) {
    Vr !== null && Vr.tag === 0 && !(I & 6) && Ln();
    var r = I;
    I |= 1;
    var n = Ge.transition,
      t = $;
    try {
      if (((Ge.transition = null), ($ = 1), e)) return e();
    } finally {
      ($ = t), (Ge.transition = n), (I = r), !(I & 6) && Dr();
    }
  }
  function d0() {
    (Be = Pn.current), G(Pn);
  }
  function tn(e, r) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var n = e.timeoutHandle;
    if ((n !== -1 && ((e.timeoutHandle = -1), W1(n)), pe !== null))
      for (n = pe.return; n !== null; ) {
        var t = n;
        switch ((xl(t), t.tag)) {
          case 1:
            (t = t.type.childContextTypes), t != null && Wt();
            break;
          case 3:
            Cn(), G(Le), G(we), Dl();
            break;
          case 5:
            Ml(t);
            break;
          case 4:
            Cn();
            break;
          case 13:
            G(ne);
            break;
          case 19:
            G(ne);
            break;
          case 10:
            Pl(t.type._context);
            break;
          case 22:
          case 23:
            d0();
        }
        n = n.return;
      }
    if (
      ((de = e),
      (pe = e = $r(e.current, null)),
      (ye = Be = r),
      (fe = 0),
      (dt = null),
      (i0 = da = rn = 0),
      (Me = ht = null),
      Jr !== null)
    ) {
      for (r = 0; r < Jr.length; r++)
        if (((n = Jr[r]), (t = n.interleaved), t !== null)) {
          n.interleaved = null;
          var a = t.next,
            l = n.pending;
          if (l !== null) {
            var o = l.next;
            (l.next = a), (t.next = o);
          }
          n.pending = t;
        }
      Jr = null;
    }
    return e;
  }
  function cu(e, r) {
    do {
      var n = pe;
      try {
        if ((Nl(), (ta.current = ia), aa)) {
          for (var t = te.memoizedState; t !== null; ) {
            var a = t.queue;
            a !== null && (a.pending = null), (t = t.next);
          }
          aa = !1;
        }
        if (
          ((en = 0),
          (ge = ce = te = null),
          (ut = !1),
          (st = 0),
          (o0.current = null),
          n === null || n.return === null)
        ) {
          (fe = 1), (dt = r), (pe = null);
          break;
        }
        e: {
          var l = e,
            o = n.return,
            i = n,
            u = r;
          if (
            ((r = ye),
            (i.flags |= 32768),
            u !== null && typeof u == "object" && typeof u.then == "function")
          ) {
            var g = u,
              y = i,
              v = y.tag;
            if (!(y.mode & 1) && (v === 0 || v === 11 || v === 15)) {
              var h = y.alternate;
              h
                ? ((y.updateQueue = h.updateQueue),
                  (y.memoizedState = h.memoizedState),
                  (y.lanes = h.lanes))
                : ((y.updateQueue = null), (y.memoizedState = null));
            }
            var k = Di(o);
            if (k !== null) {
              (k.flags &= -257),
                Ii(k, o, i, l, r),
                k.mode & 1 && Oi(l, g, r),
                (r = k),
                (u = g);
              var E = r.updateQueue;
              if (E === null) {
                var z = new Set();
                z.add(u), (r.updateQueue = z);
              } else E.add(u);
              break e;
            } else {
              if (!(r & 1)) {
                Oi(l, g, r), h0();
                break e;
              }
              u = Error(d(426));
            }
          } else if (ee && i.mode & 1) {
            var se = Di(o);
            if (se !== null) {
              !(se.flags & 65536) && (se.flags |= 256),
                Ii(se, o, i, l, r),
                Cl(_n(u, i));
              break e;
            }
          }
          (l = u = _n(u, i)),
            fe !== 4 && (fe = 2),
            ht === null ? (ht = [l]) : ht.push(l),
            (l = o);
          do {
            switch (l.tag) {
              case 3:
                (l.flags |= 65536), (r &= -r), (l.lanes |= r);
                var c = ji(l, u, r);
                oi(l, c);
                break e;
              case 1:
                i = u;
                var s = l.type,
                  f = l.stateNode;
                if (
                  !(l.flags & 128) &&
                  (typeof s.getDerivedStateFromError == "function" ||
                    (f !== null &&
                      typeof f.componentDidCatch == "function" &&
                      (Ar === null || !Ar.has(f))))
                ) {
                  (l.flags |= 65536), (r &= -r), (l.lanes |= r);
                  var b = Mi(l, i, r);
                  oi(l, b);
                  break e;
                }
            }
            l = l.return;
          } while (l !== null);
        }
        du(n);
      } catch (C) {
        (r = C), pe === n && n !== null && (pe = n = n.return);
        continue;
      }
      break;
    } while (!0);
  }
  function fu() {
    var e = ga.current;
    return (ga.current = ia), e === null ? ia : e;
  }
  function h0() {
    (fe === 0 || fe === 3 || fe === 2) && (fe = 4),
      de === null || (!(rn & 268435455) && !(da & 268435455)) || Hr(de, ye);
  }
  function wa(e, r) {
    var n = I;
    I |= 2;
    var t = fu();
    (de !== e || ye !== r) && ((zr = null), tn(e, r));
    do
      try {
        ms();
        break;
      } catch (a) {
        cu(e, a);
      }
    while (!0);
    if ((Nl(), (I = n), (ga.current = t), pe !== null)) throw Error(d(261));
    return (de = null), (ye = 0), fe;
  }
  function ms() {
    for (; pe !== null; ) gu(pe);
  }
  function ys() {
    for (; pe !== null && !Bu(); ) gu(pe);
  }
  function gu(e) {
    var r = yu(e.alternate, e, Be);
    (e.memoizedProps = e.pendingProps),
      r === null ? du(e) : (pe = r),
      (o0.current = null);
  }
  function du(e) {
    var r = e;
    do {
      var n = r.alternate;
      if (((e = r.return), r.flags & 32768)) {
        if (((n = ps(n, r)), n !== null)) {
          (n.flags &= 32767), (pe = n);
          return;
        }
        if (e !== null)
          (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
        else {
          (fe = 6), (pe = null);
          return;
        }
      } else if (((n = ss(n, r, Be)), n !== null)) {
        pe = n;
        return;
      }
      if (((r = r.sibling), r !== null)) {
        pe = r;
        return;
      }
      pe = r = e;
    } while (r !== null);
    fe === 0 && (fe = 5);
  }
  function an(e, r, n) {
    var t = $,
      a = Ge.transition;
    try {
      (Ge.transition = null), ($ = 1), vs(e, r, n, t);
    } finally {
      (Ge.transition = a), ($ = t);
    }
    return null;
  }
  function vs(e, r, n, t) {
    do Ln();
    while (Vr !== null);
    if (I & 6) throw Error(d(327));
    n = e.finishedWork;
    var a = e.finishedLanes;
    if (n === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
      throw Error(d(177));
    (e.callbackNode = null), (e.callbackPriority = 0);
    var l = n.lanes | n.childLanes;
    if (
      (Ju(e, l),
      e === de && ((pe = de = null), (ye = 0)),
      (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
        ma ||
        ((ma = !0),
        vu(Et, function () {
          return Ln(), null;
        })),
      (l = (n.flags & 15990) !== 0),
      n.subtreeFlags & 15990 || l)
    ) {
      (l = Ge.transition), (Ge.transition = null);
      var o = $;
      $ = 1;
      var i = I;
      (I |= 4),
        (o0.current = null),
        fs(e, n),
        au(n, e),
        F1(hl),
        (Lt = !!dl),
        (hl = dl = null),
        (e.current = n),
        gs(n),
        Hu(),
        (I = i),
        ($ = o),
        (Ge.transition = l);
    } else e.current = n;
    if (
      (ma && ((ma = !1), (Vr = e), (ya = a)),
      (l = e.pendingLanes),
      l === 0 && (Ar = null),
      Qu(n.stateNode),
      Oe(e, ue()),
      r !== null)
    )
      for (t = e.onRecoverableError, n = 0; n < r.length; n++)
        (a = r[n]), t(a.value, { componentStack: a.stack, digest: a.digest });
    if (ha) throw ((ha = !1), (e = s0), (s0 = null), e);
    return (
      ya & 1 && e.tag !== 0 && Ln(),
      (l = e.pendingLanes),
      l & 1 ? (e === p0 ? mt++ : ((mt = 0), (p0 = e))) : (mt = 0),
      Dr(),
      null
    );
  }
  function Ln() {
    if (Vr !== null) {
      var e = ro(ya),
        r = Ge.transition,
        n = $;
      try {
        if (((Ge.transition = null), ($ = 16 > e ? 16 : e), Vr === null))
          var t = !1;
        else {
          if (((e = Vr), (Vr = null), (ya = 0), I & 6)) throw Error(d(331));
          var a = I;
          for (I |= 4, S = e.current; S !== null; ) {
            var l = S,
              o = l.child;
            if (S.flags & 16) {
              var i = l.deletions;
              if (i !== null) {
                for (var u = 0; u < i.length; u++) {
                  var g = i[u];
                  for (S = g; S !== null; ) {
                    var y = S;
                    switch (y.tag) {
                      case 0:
                      case 11:
                      case 15:
                        gt(8, y, l);
                    }
                    var v = y.child;
                    if (v !== null) (v.return = y), (S = v);
                    else
                      for (; S !== null; ) {
                        y = S;
                        var h = y.sibling,
                          k = y.return;
                        if ((qi(y), y === g)) {
                          S = null;
                          break;
                        }
                        if (h !== null) {
                          (h.return = k), (S = h);
                          break;
                        }
                        S = k;
                      }
                  }
                }
                var E = l.alternate;
                if (E !== null) {
                  var z = E.child;
                  if (z !== null) {
                    E.child = null;
                    do {
                      var se = z.sibling;
                      (z.sibling = null), (z = se);
                    } while (z !== null);
                  }
                }
                S = l;
              }
            }
            if (l.subtreeFlags & 2064 && o !== null) (o.return = l), (S = o);
            else
              e: for (; S !== null; ) {
                if (((l = S), l.flags & 2048))
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      gt(9, l, l.return);
                  }
                var c = l.sibling;
                if (c !== null) {
                  (c.return = l.return), (S = c);
                  break e;
                }
                S = l.return;
              }
          }
          var s = e.current;
          for (S = s; S !== null; ) {
            o = S;
            var f = o.child;
            if (o.subtreeFlags & 2064 && f !== null) (f.return = o), (S = f);
            else
              e: for (o = s; S !== null; ) {
                if (((i = S), i.flags & 2048))
                  try {
                    switch (i.tag) {
                      case 0:
                      case 11:
                      case 15:
                        fa(9, i);
                    }
                  } catch (C) {
                    le(i, i.return, C);
                  }
                if (i === o) {
                  S = null;
                  break e;
                }
                var b = i.sibling;
                if (b !== null) {
                  (b.return = i.return), (S = b);
                  break e;
                }
                S = i.return;
              }
          }
          if (
            ((I = a), Dr(), cr && typeof cr.onPostCommitFiberRoot == "function")
          )
            try {
              cr.onPostCommitFiberRoot(zt, e);
            } catch {}
          t = !0;
        }
        return t;
      } finally {
        ($ = n), (Ge.transition = r);
      }
    }
    return !1;
  }
  function hu(e, r, n) {
    (r = _n(n, r)),
      (r = ji(e, r, 1)),
      (e = Fr(e, r, 1)),
      (r = Ne()),
      e !== null && (An(e, 1, r), Oe(e, r));
  }
  function le(e, r, n) {
    if (e.tag === 3) hu(e, e, n);
    else
      for (; r !== null; ) {
        if (r.tag === 3) {
          hu(r, e, n);
          break;
        } else if (r.tag === 1) {
          var t = r.stateNode;
          if (
            typeof r.type.getDerivedStateFromError == "function" ||
            (typeof t.componentDidCatch == "function" &&
              (Ar === null || !Ar.has(t)))
          ) {
            (e = _n(n, e)),
              (e = Mi(r, e, 1)),
              (r = Fr(r, e, 1)),
              (e = Ne()),
              r !== null && (An(r, 1, e), Oe(r, e));
            break;
          }
        }
        r = r.return;
      }
  }
  function bs(e, r, n) {
    var t = e.pingCache;
    t !== null && t.delete(r),
      (r = Ne()),
      (e.pingedLanes |= e.suspendedLanes & n),
      de === e &&
        (ye & n) === n &&
        (fe === 4 || (fe === 3 && (ye & 130023424) === ye && 500 > ue() - u0)
          ? tn(e, 0)
          : (i0 |= n)),
      Oe(e, r);
  }
  function mu(e, r) {
    r === 0 &&
      (e.mode & 1
        ? ((r = _t), (_t <<= 1), !(_t & 130023424) && (_t = 4194304))
        : (r = 1));
    var n = Ne();
    (e = Sr(e, r)), e !== null && (An(e, r, n), Oe(e, n));
  }
  function ws(e) {
    var r = e.memoizedState,
      n = 0;
    r !== null && (n = r.retryLane), mu(e, n);
  }
  function ks(e, r) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var t = e.stateNode,
          a = e.memoizedState;
        a !== null && (n = a.retryLane);
        break;
      case 19:
        t = e.stateNode;
        break;
      default:
        throw Error(d(314));
    }
    t !== null && t.delete(r), mu(e, n);
  }
  var yu;
  yu = function (e, r, n) {
    if (e !== null)
      if (e.memoizedProps !== r.pendingProps || Le.current) je = !0;
      else {
        if (!(e.lanes & n) && !(r.flags & 128)) return (je = !1), us(e, r, n);
        je = !!(e.flags & 131072);
      }
    else (je = !1), ee && r.flags & 1048576 && Go(r, Xt, r.index);
    switch (((r.lanes = 0), r.tag)) {
      case 2:
        var t = r.type;
        pa(e, r), (e = r.pendingProps);
        var a = bn(r, we.current);
        zn(r, n), (a = Ul(null, r, t, e, a, n));
        var l = Al();
        return (
          (r.flags |= 1),
          typeof a == "object" &&
          a !== null &&
          typeof a.render == "function" &&
          a.$$typeof === void 0
            ? ((r.tag = 1),
              (r.memoizedState = null),
              (r.updateQueue = null),
              Re(t) ? ((l = !0), Qt(r)) : (l = !1),
              (r.memoizedState =
                a.state !== null && a.state !== void 0 ? a.state : null),
              Rl(r),
              (a.updater = ua),
              (r.stateNode = a),
              (a._reactInternals = r),
              Ql(r, t, e, n),
              (r = Gl(null, r, t, !0, l, n)))
            : ((r.tag = 0), ee && l && Sl(r), _e(null, r, a, n), (r = r.child)),
          r
        );
      case 16:
        t = r.elementType;
        e: {
          switch (
            (pa(e, r),
            (e = r.pendingProps),
            (a = t._init),
            (t = a(t._payload)),
            (r.type = t),
            (a = r.tag = xs(t)),
            (e = ar(t, e)),
            a)
          ) {
            case 0:
              r = Xl(null, r, t, e, n);
              break e;
            case 1:
              r = Hi(null, r, t, e, n);
              break e;
            case 11:
              r = Fi(null, r, t, e, n);
              break e;
            case 14:
              r = Ui(null, r, t, ar(t.type, e), n);
              break e;
          }
          throw Error(d(306, t, ""));
        }
        return r;
      case 0:
        return (
          (t = r.type),
          (a = r.pendingProps),
          (a = r.elementType === t ? a : ar(t, a)),
          Xl(e, r, t, a, n)
        );
      case 1:
        return (
          (t = r.type),
          (a = r.pendingProps),
          (a = r.elementType === t ? a : ar(t, a)),
          Hi(e, r, t, a, n)
        );
      case 3:
        e: {
          if (($i(r), e === null)) throw Error(d(387));
          (t = r.pendingProps),
            (l = r.memoizedState),
            (a = l.element),
            li(e, r),
            ra(r, t, null, n);
          var o = r.memoizedState;
          if (((t = o.element), l.isDehydrated))
            if (
              ((l = {
                element: t,
                isDehydrated: !1,
                cache: o.cache,
                pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
                transitions: o.transitions,
              }),
              (r.updateQueue.baseState = l),
              (r.memoizedState = l),
              r.flags & 256)
            ) {
              (a = _n(Error(d(423)), r)), (r = Wi(e, r, t, n, a));
              break e;
            } else if (t !== a) {
              (a = _n(Error(d(424)), r)), (r = Wi(e, r, t, n, a));
              break e;
            } else
              for (
                Ve = jr(r.stateNode.containerInfo.firstChild),
                  Ae = r,
                  ee = !0,
                  tr = null,
                  n = ti(r, null, t, n),
                  r.child = n;
                n;

              )
                (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
          else {
            if ((Sn(), t === a)) {
              r = Er(e, r, n);
              break e;
            }
            _e(e, r, t, n);
          }
          r = r.child;
        }
        return r;
      case 5:
        return (
          ui(r),
          e === null && zl(r),
          (t = r.type),
          (a = r.pendingProps),
          (l = e !== null ? e.memoizedProps : null),
          (o = a.children),
          ml(t, a) ? (o = null) : l !== null && ml(t, l) && (r.flags |= 32),
          Bi(e, r),
          _e(e, r, o, n),
          r.child
        );
      case 6:
        return e === null && zl(r), null;
      case 13:
        return Qi(e, r, n);
      case 4:
        return (
          jl(r, r.stateNode.containerInfo),
          (t = r.pendingProps),
          e === null ? (r.child = xn(r, null, t, n)) : _e(e, r, t, n),
          r.child
        );
      case 11:
        return (
          (t = r.type),
          (a = r.pendingProps),
          (a = r.elementType === t ? a : ar(t, a)),
          Fi(e, r, t, a, n)
        );
      case 7:
        return _e(e, r, r.pendingProps, n), r.child;
      case 8:
        return _e(e, r, r.pendingProps.children, n), r.child;
      case 12:
        return _e(e, r, r.pendingProps.children, n), r.child;
      case 10:
        e: {
          if (
            ((t = r.type._context),
            (a = r.pendingProps),
            (l = r.memoizedProps),
            (o = a.value),
            Y(Jt, t._currentValue),
            (t._currentValue = o),
            l !== null)
          )
            if (nr(l.value, o)) {
              if (l.children === a.children && !Le.current) {
                r = Er(e, r, n);
                break e;
              }
            } else
              for (l = r.child, l !== null && (l.return = r); l !== null; ) {
                var i = l.dependencies;
                if (i !== null) {
                  o = l.child;
                  for (var u = i.firstContext; u !== null; ) {
                    if (u.context === t) {
                      if (l.tag === 1) {
                        (u = xr(-1, n & -n)), (u.tag = 2);
                        var g = l.updateQueue;
                        if (g !== null) {
                          g = g.shared;
                          var y = g.pending;
                          y === null
                            ? (u.next = u)
                            : ((u.next = y.next), (y.next = u)),
                            (g.pending = u);
                        }
                      }
                      (l.lanes |= n),
                        (u = l.alternate),
                        u !== null && (u.lanes |= n),
                        Tl(l.return, n, r),
                        (i.lanes |= n);
                      break;
                    }
                    u = u.next;
                  }
                } else if (l.tag === 10) o = l.type === r.type ? null : l.child;
                else if (l.tag === 18) {
                  if (((o = l.return), o === null)) throw Error(d(341));
                  (o.lanes |= n),
                    (i = o.alternate),
                    i !== null && (i.lanes |= n),
                    Tl(o, n, r),
                    (o = l.sibling);
                } else o = l.child;
                if (o !== null) o.return = l;
                else
                  for (o = l; o !== null; ) {
                    if (o === r) {
                      o = null;
                      break;
                    }
                    if (((l = o.sibling), l !== null)) {
                      (l.return = o.return), (o = l);
                      break;
                    }
                    o = o.return;
                  }
                l = o;
              }
          _e(e, r, a.children, n), (r = r.child);
        }
        return r;
      case 9:
        return (
          (a = r.type),
          (t = r.pendingProps.children),
          zn(r, n),
          (a = Ye(a)),
          (t = t(a)),
          (r.flags |= 1),
          _e(e, r, t, n),
          r.child
        );
      case 14:
        return (
          (t = r.type),
          (a = ar(t, r.pendingProps)),
          (a = ar(t.type, a)),
          Ui(e, r, t, a, n)
        );
      case 15:
        return Ai(e, r, r.type, r.pendingProps, n);
      case 17:
        return (
          (t = r.type),
          (a = r.pendingProps),
          (a = r.elementType === t ? a : ar(t, a)),
          pa(e, r),
          (r.tag = 1),
          Re(t) ? ((e = !0), Qt(r)) : (e = !1),
          zn(r, n),
          Li(r, t, a),
          Ql(r, t, a, n),
          Gl(null, r, t, !0, e, n)
        );
      case 19:
        return Yi(e, r, n);
      case 22:
        return Vi(e, r, n);
    }
    throw Error(d(156, r.tag));
  };
  function vu(e, r) {
    return G0(e, r);
  }
  function Ss(e, r, n, t) {
    (this.tag = e),
      (this.key = n),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.ref = null),
      (this.pendingProps = r),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = t),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function Ze(e, r, n, t) {
    return new Ss(e, r, n, t);
  }
  function m0(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function xs(e) {
    if (typeof e == "function") return m0(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === sr)) return 11;
      if (e === pr) return 14;
    }
    return 2;
  }
  function $r(e, r) {
    var n = e.alternate;
    return (
      n === null
        ? ((n = Ze(e.tag, r, e.key, e.mode)),
          (n.elementType = e.elementType),
          (n.type = e.type),
          (n.stateNode = e.stateNode),
          (n.alternate = e),
          (e.alternate = n))
        : ((n.pendingProps = r),
          (n.type = e.type),
          (n.flags = 0),
          (n.subtreeFlags = 0),
          (n.deletions = null)),
      (n.flags = e.flags & 14680064),
      (n.childLanes = e.childLanes),
      (n.lanes = e.lanes),
      (n.child = e.child),
      (n.memoizedProps = e.memoizedProps),
      (n.memoizedState = e.memoizedState),
      (n.updateQueue = e.updateQueue),
      (r = e.dependencies),
      (n.dependencies =
        r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }),
      (n.sibling = e.sibling),
      (n.index = e.index),
      (n.ref = e.ref),
      n
    );
  }
  function ka(e, r, n, t, a, l) {
    var o = 2;
    if (((t = e), typeof e == "function")) m0(e) && (o = 1);
    else if (typeof e == "string") o = 5;
    else
      e: switch (e) {
        case Pe:
          return ln(n.children, a, l, r);
        case We:
          (o = 8), (a |= 8);
          break;
        case Cr:
          return (
            (e = Ze(12, n, r, a | 2)), (e.elementType = Cr), (e.lanes = l), e
          );
        case Ie:
          return (e = Ze(13, n, r, a)), (e.elementType = Ie), (e.lanes = l), e;
        case er:
          return (e = Ze(19, n, r, a)), (e.elementType = er), (e.lanes = l), e;
        case ae:
          return Sa(n, a, l, r);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case yr:
                o = 10;
                break e;
              case Qr:
                o = 9;
                break e;
              case sr:
                o = 11;
                break e;
              case pr:
                o = 14;
                break e;
              case Te:
                (o = 16), (t = null);
                break e;
            }
          throw Error(d(130, e == null ? e : typeof e, ""));
      }
    return (
      (r = Ze(o, n, r, a)), (r.elementType = e), (r.type = t), (r.lanes = l), r
    );
  }
  function ln(e, r, n, t) {
    return (e = Ze(7, e, t, r)), (e.lanes = n), e;
  }
  function Sa(e, r, n, t) {
    return (
      (e = Ze(22, e, t, r)),
      (e.elementType = ae),
      (e.lanes = n),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function y0(e, r, n) {
    return (e = Ze(6, e, null, r)), (e.lanes = n), e;
  }
  function v0(e, r, n) {
    return (
      (r = Ze(4, e.children !== null ? e.children : [], e.key, r)),
      (r.lanes = n),
      (r.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      r
    );
  }
  function Es(e, r, n, t, a) {
    (this.tag = r),
      (this.containerInfo = e),
      (this.finishedWork =
        this.pingCache =
        this.current =
        this.pendingChildren =
          null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = Wa(0)),
      (this.expirationTimes = Wa(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Wa(0)),
      (this.identifierPrefix = t),
      (this.onRecoverableError = a),
      (this.mutableSourceEagerHydrationData = null);
  }
  function b0(e, r, n, t, a, l, o, i, u) {
    return (
      (e = new Es(e, r, n, i, u)),
      r === 1 ? ((r = 1), l === !0 && (r |= 8)) : (r = 0),
      (l = Ze(3, null, null, r)),
      (e.current = l),
      (l.stateNode = e),
      (l.memoizedState = {
        element: t,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      Rl(l),
      e
    );
  }
  function zs(e, r, n) {
    var t =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: Ce,
      key: t == null ? null : "" + t,
      children: e,
      containerInfo: r,
      implementation: n,
    };
  }
  function bu(e) {
    if (!e) return Or;
    e = e._reactInternals;
    e: {
      if (Kr(e) !== e || e.tag !== 1) throw Error(d(170));
      var r = e;
      do {
        switch (r.tag) {
          case 3:
            r = r.stateNode.context;
            break e;
          case 1:
            if (Re(r.type)) {
              r = r.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        r = r.return;
      } while (r !== null);
      throw Error(d(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (Re(n)) return Ko(e, n, r);
    }
    return r;
  }
  function wu(e, r, n, t, a, l, o, i, u) {
    return (
      (e = b0(n, t, !0, e, a, l, o, i, u)),
      (e.context = bu(null)),
      (n = e.current),
      (t = Ne()),
      (a = Br(n)),
      (l = xr(t, a)),
      (l.callback = r ?? null),
      Fr(n, l, a),
      (e.current.lanes = a),
      An(e, a, t),
      Oe(e, t),
      e
    );
  }
  function xa(e, r, n, t) {
    var a = r.current,
      l = Ne(),
      o = Br(a);
    return (
      (n = bu(n)),
      r.context === null ? (r.context = n) : (r.pendingContext = n),
      (r = xr(l, o)),
      (r.payload = { element: e }),
      (t = t === void 0 ? null : t),
      t !== null && (r.callback = t),
      (e = Fr(a, r, o)),
      e !== null && (ir(e, a, o, l), ea(e, a, o)),
      o
    );
  }
  function Ea(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function ku(e, r) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < r ? n : r;
    }
  }
  function w0(e, r) {
    ku(e, r), (e = e.alternate) && ku(e, r);
  }
  function Cs() {
    return null;
  }
  var Su =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          console.error(e);
        };
  function k0(e) {
    this._internalRoot = e;
  }
  (za.prototype.render = k0.prototype.render =
    function (e) {
      var r = this._internalRoot;
      if (r === null) throw Error(d(409));
      xa(e, r, null, null);
    }),
    (za.prototype.unmount = k0.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var r = e.containerInfo;
          nn(function () {
            xa(null, e, null, null);
          }),
            (r[vr] = null);
        }
      });
  function za(e) {
    this._internalRoot = e;
  }
  za.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var r = ao();
      e = { blockedOn: null, target: e, priority: r };
      for (var n = 0; n < Tr.length && r !== 0 && r < Tr[n].priority; n++);
      Tr.splice(n, 0, e), n === 0 && io(e);
    }
  };
  function S0(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function Ca(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    );
  }
  function xu() {}
  function _s(e, r, n, t, a) {
    if (a) {
      if (typeof t == "function") {
        var l = t;
        t = function () {
          var g = Ea(o);
          l.call(g);
        };
      }
      var o = wu(r, t, e, 0, null, !1, !1, "", xu);
      return (
        (e._reactRootContainer = o),
        (e[vr] = o.current),
        et(e.nodeType === 8 ? e.parentNode : e),
        nn(),
        o
      );
    }
    for (; (a = e.lastChild); ) e.removeChild(a);
    if (typeof t == "function") {
      var i = t;
      t = function () {
        var g = Ea(u);
        i.call(g);
      };
    }
    var u = b0(e, 0, !1, null, null, !1, !1, "", xu);
    return (
      (e._reactRootContainer = u),
      (e[vr] = u.current),
      et(e.nodeType === 8 ? e.parentNode : e),
      nn(function () {
        xa(r, u, n, t);
      }),
      u
    );
  }
  function _a(e, r, n, t, a) {
    var l = n._reactRootContainer;
    if (l) {
      var o = l;
      if (typeof a == "function") {
        var i = a;
        a = function () {
          var u = Ea(o);
          i.call(u);
        };
      }
      xa(r, o, e, a);
    } else o = _s(n, r, e, a, t);
    return Ea(o);
  }
  (no = function (e) {
    switch (e.tag) {
      case 3:
        var r = e.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var n = Un(r.pendingLanes);
          n !== 0 &&
            (Qa(r, n | 1), Oe(r, ue()), !(I & 6) && ((Tn = ue() + 500), Dr()));
        }
        break;
      case 13:
        nn(function () {
          var t = Sr(e, 1);
          if (t !== null) {
            var a = Ne();
            ir(t, e, 1, a);
          }
        }),
          w0(e, 1);
    }
  }),
    (Ka = function (e) {
      if (e.tag === 13) {
        var r = Sr(e, 134217728);
        if (r !== null) {
          var n = Ne();
          ir(r, e, 134217728, n);
        }
        w0(e, 134217728);
      }
    }),
    (to = function (e) {
      if (e.tag === 13) {
        var r = Br(e),
          n = Sr(e, r);
        if (n !== null) {
          var t = Ne();
          ir(n, e, r, t);
        }
        w0(e, r);
      }
    }),
    (ao = function () {
      return $;
    }),
    (lo = function (e, r) {
      var n = $;
      try {
        return ($ = e), r();
      } finally {
        $ = n;
      }
    }),
    (Ua = function (e, r, n) {
      switch (r) {
        case "input":
          if ((La(e, n), (r = n.name), n.type === "radio" && r != null)) {
            for (n = e; n.parentNode; ) n = n.parentNode;
            for (
              n = n.querySelectorAll(
                "input[name=" + JSON.stringify("" + r) + '][type="radio"]',
              ),
                r = 0;
              r < n.length;
              r++
            ) {
              var t = n[r];
              if (t !== e && t.form === e.form) {
                var a = $t(t);
                if (!a) throw Error(d(90));
                P0(t), La(t, a);
              }
            }
          }
          break;
        case "textarea":
          M0(e, n);
          break;
        case "select":
          (r = n.value), r != null && on(e, !!n.multiple, r, !1);
      }
    }),
    (H0 = g0),
    ($0 = nn);
  var Ns = { usingClientEntryPoint: !1, Events: [tt, yn, $t, V0, B0, g0] },
    yt = {
      findFiberByHostInstance: Yr,
      bundleType: 0,
      version: "18.3.1",
      rendererPackageName: "react-dom",
    },
    Ps = {
      bundleType: yt.bundleType,
      version: yt.version,
      rendererPackageName: yt.rendererPackageName,
      rendererConfig: yt.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: be.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return (e = Y0(e)), e === null ? null : e.stateNode;
      },
      findFiberByHostInstance: yt.findFiberByHostInstance || Cs,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Na = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Na.isDisabled && Na.supportsFiber)
      try {
        (zt = Na.inject(Ps)), (cr = Na);
      } catch {}
  }
  return (
    (De.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ns),
    (De.createPortal = function (e, r) {
      var n =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!S0(r)) throw Error(d(200));
      return zs(e, r, null, n);
    }),
    (De.createRoot = function (e, r) {
      if (!S0(e)) throw Error(d(299));
      var n = !1,
        t = "",
        a = Su;
      return (
        r != null &&
          (r.unstable_strictMode === !0 && (n = !0),
          r.identifierPrefix !== void 0 && (t = r.identifierPrefix),
          r.onRecoverableError !== void 0 && (a = r.onRecoverableError)),
        (r = b0(e, 1, !1, null, null, n, !1, t, a)),
        (e[vr] = r.current),
        et(e.nodeType === 8 ? e.parentNode : e),
        new k0(r)
      );
    }),
    (De.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var r = e._reactInternals;
      if (r === void 0)
        throw typeof e.render == "function"
          ? Error(d(188))
          : ((e = Object.keys(e).join(",")), Error(d(268, e)));
      return (e = Y0(r)), (e = e === null ? null : e.stateNode), e;
    }),
    (De.flushSync = function (e) {
      return nn(e);
    }),
    (De.hydrate = function (e, r, n) {
      if (!Ca(r)) throw Error(d(200));
      return _a(null, e, r, !0, n);
    }),
    (De.hydrateRoot = function (e, r, n) {
      if (!S0(e)) throw Error(d(405));
      var t = (n != null && n.hydratedSources) || null,
        a = !1,
        l = "",
        o = Su;
      if (
        (n != null &&
          (n.unstable_strictMode === !0 && (a = !0),
          n.identifierPrefix !== void 0 && (l = n.identifierPrefix),
          n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
        (r = wu(r, null, e, 1, n ?? null, a, !1, l, o)),
        (e[vr] = r.current),
        et(e),
        t)
      )
        for (e = 0; e < t.length; e++)
          (n = t[e]),
            (a = n._getVersion),
            (a = a(n._source)),
            r.mutableSourceEagerHydrationData == null
              ? (r.mutableSourceEagerHydrationData = [n, a])
              : r.mutableSourceEagerHydrationData.push(n, a);
      return new za(r);
    }),
    (De.render = function (e, r, n) {
      if (!Ca(r)) throw Error(d(200));
      return _a(null, e, r, !1, n);
    }),
    (De.unmountComponentAtNode = function (e) {
      if (!Ca(e)) throw Error(d(40));
      return e._reactRootContainer
        ? (nn(function () {
            _a(null, null, e, !1, function () {
              (e._reactRootContainer = null), (e[vr] = null);
            });
          }),
          !0)
        : !1;
    }),
    (De.unstable_batchedUpdates = g0),
    (De.unstable_renderSubtreeIntoContainer = function (e, r, n, t) {
      if (!Ca(n)) throw Error(d(200));
      if (e == null || e._reactInternals === void 0) throw Error(d(38));
      return _a(e, r, n, !1, t);
    }),
    (De.version = "18.3.1-next-f1338f8080-20240426"),
    De
  );
}
var Lu;
function Is() {
  if (Lu) return z0.exports;
  Lu = 1;
  function L() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(L);
      } catch (F) {
        console.error(F);
      }
  }
  return L(), (z0.exports = Ds()), z0.exports;
}
var Ru;
function Fs() {
  if (Ru) return Pa;
  Ru = 1;
  var L = Is();
  return (Pa.createRoot = L.createRoot), (Pa.hydrateRoot = L.hydrateRoot), Pa;
}
var Us = Fs();
const As = {
    "effects-shadow-lg":
      "0 10px 15px -3px rgba(0, 0, 0, 0.1),     0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    "effects-shadow-md":
      "0 4px 6px -1px rgba(0, 0, 0, 0.1),     0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    "effects-shadow-sm": "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    "effects-shadow-focus": "0px 0px 0px 4px rgba(0, 145, 255, 0.25);",
  },
  ju = {
    light: {
      "red-1": "rgba(255, 252, 252, 1)",
      "red-2": "rgba(255, 248, 248, 1)",
      "red-3": "rgba(255, 239, 239, 1)",
      "red-4": "rgba(255, 229, 229, 1)",
      "red-5": "rgba(253, 216, 216, 1)",
      "red-6": "rgba(249, 198, 198, 1)",
      "red-7": "rgba(243, 174, 175, 1)",
      "red-8": "rgba(235, 144, 145, 1)",
      "red-9": "rgba(229, 72, 77, 1)",
      "red-10": "rgba(220, 61, 67, 1)",
      "red-11": "rgba(205, 43, 49, 1)",
      "red-12": "rgba(56, 19, 22, 1)",
      "tomato-alpha-1": "rgba(255, 5, 5, 0.012000000104308128)",
      "tomato-alpha-2": "rgba(255, 38, 5, 0.03200000151991844)",
      "tomato-alpha-3": "rgba(255, 31, 1, 0.06700000166893005)",
      "tomato-alpha-4": "rgba(255, 34, 1, 0.11400000005960464)",
      "tomato-alpha-5": "rgba(244, 30, 1, 0.17299999296665192)",
      "tomato-alpha-6": "rgba(236, 35, 0, 0.2549999952316284)",
      "tomato-alpha-7": "rgba(222, 37, 0, 0.36500000953674316)",
      "tomato-alpha-8": "rgba(213, 36, 1, 0.49900001287460327)",
      "tomato-alpha-9": "rgba(223, 37, 0, 0.8199999928474426)",
      "tomato-alpha-10": "rgba(213, 36, 0, 0.859000027179718)",
      "tomato-alpha-11": "rgba(198, 33, 0, 0.921999990940094)",
      "tomato-alpha-12": "rgba(38, 6, 0, 0.9340000152587891)",
      "tomato-1": "rgba(255, 252, 252, 1)",
      "tomato-2": "rgba(255, 248, 247, 1)",
      "tomato-3": "rgba(255, 240, 238, 1)",
      "tomato-4": "rgba(255, 230, 226, 1)",
      "tomato-5": "rgba(253, 216, 211, 1)",
      "tomato-6": "rgba(250, 199, 190, 1)",
      "tomato-7": "rgba(243, 176, 162, 1)",
      "tomato-8": "rgba(234, 146, 128, 1)",
      "tomato-9": "rgba(229, 77, 46, 1)",
      "tomato-10": "rgba(219, 67, 36, 1)",
      "tomato-11": "rgba(202, 50, 20, 1)",
      "tomato-12": "rgba(52, 23, 17, 1)",
      "red-alpha-1": "rgba(255, 5, 5, 0.012000000104308128)",
      "red-alpha-2": "rgba(255, 5, 5, 0.03200000151991844)",
      "red-alpha-3": "rgba(255, 1, 1, 0.06300000101327896)",
      "red-alpha-4": "rgba(255, 0, 0, 0.10199999809265137)",
      "red-alpha-5": "rgba(242, 0, 0, 0.15299999713897705)",
      "red-alpha-6": "rgba(228, 1, 1, 0.2240000069141388)",
      "red-alpha-7": "rgba(217, 0, 4, 0.3179999887943268)",
      "red-alpha-8": "rgba(209, 0, 4, 0.4359999895095825)",
      "red-alpha-9": "rgba(219, 0, 7, 0.7179999947547913)",
      "red-alpha-10": "rgba(209, 0, 7, 0.7609999775886536)",
      "red-alpha-11": "rgba(195, 0, 7, 0.8320000171661377)",
      "red-alpha-12": "rgba(40, 0, 3, 0.9259999990463257)",
      "crimson-1": "rgba(255, 252, 253, 1)",
      "crimson-2": "rgba(255, 247, 251, 1)",
      "crimson-3": "rgba(254, 239, 246, 1)",
      "crimson-4": "rgba(252, 229, 240, 1)",
      "crimson-5": "rgba(249, 216, 231, 1)",
      "crimson-6": "rgba(244, 198, 219, 1)",
      "crimson-7": "rgba(237, 173, 200, 1)",
      "crimson-8": "rgba(229, 143, 177, 1)",
      "crimson-9": "rgba(233, 61, 130, 1)",
      "crimson-10": "rgba(224, 49, 119, 1)",
      "crimson-11": "rgba(211, 30, 102, 1)",
      "crimson-12": "rgba(61, 13, 29, 1)",
      "crimson-alpha-1": "rgba(255, 5, 88, 0.012000000104308128)",
      "crimson-alpha-2": "rgba(255, 5, 130, 0.03200000151991844)",
      "crimson-alpha-3": "rgba(239, 1, 112, 0.06300000101327896)",
      "crimson-alpha-4": "rgba(226, 0, 109, 0.10199999809265137)",
      "crimson-alpha-5": "rgba(216, 0, 97, 0.15299999713897705)",
      "crimson-alpha-6": "rgba(206, 1, 93, 0.2240000069141388)",
      "crimson-alpha-7": "rgba(199, 0, 83, 0.32199999690055847)",
      "crimson-alpha-8": "rgba(196, 0, 79, 0.4399999976158142)",
      "crimson-alpha-9": "rgba(226, 0, 90, 0.7609999775886536)",
      "crimson-alpha-10": "rgba(217, 0, 87, 0.8080000281333923)",
      "crimson-alpha-11": "rgba(205, 0, 82, 0.8830000162124634)",
      "crimson-alpha-12": "rgba(51, 0, 17, 0.949999988079071)",
      "pink-1": "rgba(255, 252, 254, 1)",
      "pink-2": "rgba(255, 247, 252, 1)",
      "pink-3": "rgba(254, 238, 248, 1)",
      "pink-4": "rgba(252, 229, 243, 1)",
      "pink-5": "rgba(249, 216, 236, 1)",
      "pink-6": "rgba(243, 198, 226, 1)",
      "pink-7": "rgba(236, 173, 212, 1)",
      "pink-8": "rgba(227, 142, 195, 1)",
      "pink-9": "rgba(214, 64, 159, 1)",
      "pink-10": "rgba(210, 49, 151, 1)",
      "pink-11": "rgba(205, 29, 141, 1)",
      "pink-12": "rgba(59, 10, 42, 1)",
      "pink-alpha-1": "rgba(255, 5, 172, 0.012000000104308128)",
      "pink-alpha-2": "rgba(255, 5, 159, 0.03200000151991844)",
      "pink-alpha-3": "rgba(240, 1, 148, 0.06300000101327896)",
      "pink-alpha-4": "rgba(226, 0, 139, 0.10199999809265137)",
      "pink-alpha-5": "rgba(216, 0, 129, 0.15299999713897705)",
      "pink-alpha-6": "rgba(201, 1, 124, 0.2240000069141388)",
      "pink-alpha-7": "rgba(196, 0, 121, 0.32199999690055847)",
      "pink-alpha-8": "rgba(192, 0, 118, 0.4440000057220459)",
      "pink-alpha-9": "rgba(200, 0, 127, 0.75)",
      "pink-alpha-10": "rgba(199, 0, 126, 0.8080000281333923)",
      "pink-alpha-11": "rgba(199, 0, 126, 0.8870000243186951)",
      "pink-alpha-12": "rgba(51, 0, 33, 0.9610000252723694)",
      "plum-1": "rgba(254, 252, 255, 1)",
      "plum-2": "rgba(255, 248, 255, 1)",
      "plum-3": "rgba(252, 239, 252, 1)",
      "plum-4": "rgba(249, 229, 249, 1)",
      "plum-5": "rgba(243, 217, 244, 1)",
      "plum-6": "rgba(235, 200, 237, 1)",
      "plum-7": "rgba(223, 175, 227, 1)",
      "plum-8": "rgba(207, 145, 216, 1)",
      "plum-9": "rgba(171, 74, 186, 1)",
      "plum-10": "rgba(164, 60, 180, 1)",
      "plum-11": "rgba(156, 43, 173, 1)",
      "plum-12": "rgba(52, 12, 59, 1)",
      "plum-alpha-1": "rgba(172, 5, 255, 0.012000000104308128)",
      "plum-alpha-2": "rgba(255, 5, 255, 0.02800000086426735)",
      "plum-alpha-3": "rgba(208, 1, 208, 0.06300000101327896)",
      "plum-alpha-4": "rgba(196, 0, 196, 0.10199999809265137)",
      "plum-alpha-5": "rgba(175, 2, 181, 0.15000000596046448)",
      "plum-alpha-6": "rgba(163, 0, 172, 0.2160000056028366)",
      "plum-alpha-7": "rgba(152, 0, 166, 0.3140000104904175)",
      "plum-alpha-8": "rgba(143, 0, 165, 0.4320000112056732)",
      "plum-alpha-9": "rgba(137, 0, 158, 0.7099999785423279)",
      "plum-alpha-10": "rgba(136, 0, 157, 0.7649999856948853)",
      "plum-alpha-11": "rgba(136, 0, 156, 0.8320000171661377)",
      "plum-alpha-12": "rgba(42, 0, 49, 0.953000009059906)",
      "slate-1": "rgba(251, 252, 253, 1)",
      "slate-2": "rgba(248, 249, 250, 1)",
      "slate-3": "rgba(241, 243, 245, 1)",
      "slate-4": "rgba(236, 238, 240, 1)",
      "slate-5": "rgba(230, 232, 235, 1)",
      "slate-6": "rgba(223, 227, 230, 1)",
      "slate-7": "rgba(215, 219, 223, 1)",
      "slate-8": "rgba(193, 200, 205, 1)",
      "slate-9": "rgba(136, 144, 150, 1)",
      "slate-10": "rgba(126, 134, 140, 1)",
      "slate-11": "rgba(104, 112, 118, 1)",
      "slate-12": "rgba(17, 24, 28, 1)",
      "slate-alpha-1": "rgba(5, 68, 130, 0.01600000075995922)",
      "slate-alpha-2": "rgba(5, 41, 77, 0.02800000086426735)",
      "slate-alpha-3": "rgba(0, 37, 73, 0.054999999701976776)",
      "slate-alpha-4": "rgba(2, 28, 55, 0.07500000298023224)",
      "slate-alpha-5": "rgba(2, 23, 53, 0.0989999994635582)",
      "slate-alpha-6": "rgba(1, 33, 57, 0.12600000202655792)",
      "slate-alpha-7": "rgba(0, 26, 51, 0.15700000524520874)",
      "slate-alpha-8": "rgba(1, 30, 50, 0.24400000274181366)",
      "slate-alpha-9": "rgba(0, 17, 30, 0.46700000762939453)",
      "slate-alpha-10": "rgba(0, 16, 27, 0.5059999823570251)",
      "slate-alpha-11": "rgba(0, 14, 24, 0.5929999947547913)",
      "slate-alpha-12": "rgba(0, 8, 12, 0.9340000152587891)",
      "purple-1": "rgba(254, 252, 254, 1)",
      "purple-2": "rgba(253, 250, 255, 1)",
      "purple-3": "rgba(249, 241, 254, 1)",
      "purple-4": "rgba(243, 231, 252, 1)",
      "purple-5": "rgba(237, 219, 249, 1)",
      "purple-6": "rgba(227, 204, 244, 1)",
      "purple-7": "rgba(211, 180, 237, 1)",
      "purple-8": "rgba(190, 147, 228, 1)",
      "purple-9": "rgba(142, 78, 198, 1)",
      "purple-10": "rgba(132, 69, 188, 1)",
      "purple-11": "rgba(121, 58, 175, 1)",
      "purple-12": "rgba(43, 14, 68, 1)",
      "purple-alpha-1": "rgba(171, 5, 171, 0.012000000104308128)",
      "purple-alpha-2": "rgba(155, 5, 255, 0.019999999552965164)",
      "purple-alpha-3": "rgba(146, 0, 237, 0.054999999701976776)",
      "purple-alpha-4": "rgba(128, 2, 224, 0.0949999988079071)",
      "purple-alpha-5": "rgba(128, 1, 213, 0.1420000046491623)",
      "purple-alpha-6": "rgba(117, 0, 200, 0.20000000298023224)",
      "purple-alpha-7": "rgba(107, 1, 194, 0.29499998688697815)",
      "purple-alpha-8": "rgba(102, 0, 191, 0.42399999499320984)",
      "purple-alpha-9": "rgba(92, 0, 173, 0.6949999928474426)",
      "purple-alpha-10": "rgba(87, 0, 163, 0.7300000190734863)",
      "purple-alpha-11": "rgba(81, 0, 151, 0.7630000114440918)",
      "purple-alpha-12": "rgba(31, 0, 57, 0.9459999799728394)",
      "violet-1": "rgba(253, 252, 254, 1)",
      "violet-2": "rgba(251, 250, 255, 1)",
      "violet-3": "rgba(245, 242, 255, 1)",
      "violet-4": "rgba(237, 233, 254, 1)",
      "violet-5": "rgba(228, 222, 252, 1)",
      "violet-6": "rgba(215, 207, 249, 1)",
      "violet-7": "rgba(196, 184, 243, 1)",
      "violet-8": "rgba(170, 153, 236, 1)",
      "violet-9": "rgba(110, 86, 207, 1)",
      "violet-10": "rgba(100, 79, 193, 1)",
      "violet-11": "rgba(87, 70, 175, 1)",
      "violet-12": "rgba(32, 19, 75, 1)",
      "violet-alpha-1": "rgba(88, 5, 171, 0.012000000104308128)",
      "violet-alpha-2": "rgba(55, 5, 255, 0.019999999552965164)",
      "violet-alpha-3": "rgba(60, 0, 255, 0.050999999046325684)",
      "violet-alpha-4": "rgba(46, 2, 244, 0.08699999749660492)",
      "violet-alpha-5": "rgba(47, 1, 232, 0.12999999523162842)",
      "violet-alpha-6": "rgba(42, 1, 223, 0.1889999955892563)",
      "violet-alpha-7": "rgba(43, 1, 212, 0.27900001406669617)",
      "violet-alpha-8": "rgba(42, 0, 208, 0.4000000059604645)",
      "violet-alpha-9": "rgba(37, 0, 182, 0.6629999876022339)",
      "violet-alpha-10": "rgba(31, 0, 165, 0.6909999847412109)",
      "violet-alpha-11": "rgba(24, 0, 145, 0.7260000109672546)",
      "violet-alpha-12": "rgba(14, 0, 61, 0.9259999990463257)",
      "indigo-1": "rgba(253, 253, 254, 1)",
      "indigo-2": "rgba(248, 250, 255, 1)",
      "indigo-3": "rgba(240, 244, 255, 1)",
      "indigo-4": "rgba(230, 237, 254, 1)",
      "indigo-5": "rgba(217, 226, 252, 1)",
      "indigo-6": "rgba(198, 212, 249, 1)",
      "indigo-7": "rgba(174, 192, 245, 1)",
      "indigo-8": "rgba(141, 164, 239, 1)",
      "indigo-9": "rgba(62, 99, 221, 1)",
      "indigo-10": "rgba(58, 92, 204, 1)",
      "indigo-11": "rgba(52, 81, 178, 1)",
      "indigo-12": "rgba(16, 29, 70, 1)",
      "indigo-alpha-1": "rgba(5, 5, 130, 0.00800000037997961)",
      "indigo-alpha-2": "rgba(5, 76, 255, 0.02800000086426735)",
      "indigo-alpha-3": "rgba(1, 68, 255, 0.05900000035762787)",
      "indigo-alpha-4": "rgba(2, 71, 245, 0.0989999994635582)",
      "indigo-alpha-5": "rgba(2, 60, 235, 0.15000000596046448)",
      "indigo-alpha-6": "rgba(1, 61, 228, 0.2240000069141388)",
      "indigo-alpha-7": "rgba(0, 56, 224, 0.3179999887943268)",
      "indigo-alpha-8": "rgba(1, 52, 219, 0.4480000138282776)",
      "indigo-alpha-9": "rgba(0, 49, 210, 0.7570000290870667)",
      "indigo-alpha-10": "rgba(0, 44, 189, 0.7730000019073486)",
      "indigo-alpha-11": "rgba(0, 37, 158, 0.796999990940094)",
      "indigo-alpha-12": "rgba(0, 14, 58, 0.9380000233650208)",
      "blue-1": "rgba(251, 253, 255, 1)",
      "blue-2": "rgba(245, 250, 255, 1)",
      "blue-3": "rgba(237, 246, 255, 1)",
      "blue-4": "rgba(225, 240, 255, 1)",
      "blue-5": "rgba(206, 231, 254, 1)",
      "blue-6": "rgba(183, 217, 248, 1)",
      "blue-7": "rgba(150, 199, 242, 1)",
      "blue-8": "rgba(94, 176, 239, 1)",
      "blue-9": "rgba(0, 145, 255, 1)",
      "blue-10": "rgba(0, 129, 241, 1)",
      "blue-11": "rgba(0, 106, 220, 1)",
      "blue-12": "rgba(0, 37, 77, 1)",
      "blue-alpha-1": "rgba(5, 130, 255, 0.01600000075995922)",
      "blue-alpha-2": "rgba(5, 130, 255, 0.03999999910593033)",
      "blue-alpha-3": "rgba(2, 128, 255, 0.07100000232458115)",
      "blue-alpha-4": "rgba(1, 128, 255, 0.11800000071525574)",
      "blue-alpha-5": "rgba(1, 128, 239, 0.1889999955892563)",
      "blue-alpha-6": "rgba(1, 119, 230, 0.28299999237060547)",
      "blue-alpha-7": "rgba(0, 119, 223, 0.41200000047683716)",
      "blue-alpha-8": "rgba(0, 130, 230, 0.6320000290870667)",
      "blue-alpha-9": "rgba(0, 145, 255, 0.9800000190734863)",
      "blue-alpha-10": "rgba(0, 128, 241, 0.9800000190734863)",
      "blue-alpha-11": "rgba(0, 102, 219, 0.9800000190734863)",
      "blue-alpha-12": "rgba(0, 33, 73, 0.9800000190734863)",
      "cyan-1": "rgba(250, 253, 254, 1)",
      "cyan-2": "rgba(242, 252, 253, 1)",
      "cyan-3": "rgba(231, 249, 251, 1)",
      "cyan-4": "rgba(216, 243, 246, 1)",
      "cyan-5": "rgba(196, 234, 239, 1)",
      "cyan-6": "rgba(170, 222, 230, 1)",
      "cyan-7": "rgba(132, 205, 218, 1)",
      "cyan-8": "rgba(61, 185, 207, 1)",
      "cyan-9": "rgba(5, 162, 194, 1)",
      "cyan-10": "rgba(8, 148, 179, 1)",
      "cyan-11": "rgba(12, 119, 146, 1)",
      "cyan-12": "rgba(4, 49, 60, 1)",
      "cyan-alpha-1": "rgba(5, 155, 205, 0.019999999552965164)",
      "cyan-alpha-2": "rgba(0, 198, 216, 0.050999999046325684)",
      "cyan-alpha-3": "rgba(2, 192, 213, 0.0949999988079071)",
      "cyan-alpha-4": "rgba(0, 177, 196, 0.15299999713897705)",
      "cyan-alpha-5": "rgba(1, 164, 186, 0.23199999332427979)",
      "cyan-alpha-6": "rgba(1, 156, 180, 0.33399999141693115)",
      "cyan-alpha-7": "rgba(0, 151, 178, 0.4830000102519989)",
      "cyan-alpha-8": "rgba(0, 163, 192, 0.7609999775886536)",
      "cyan-alpha-9": "rgba(0, 161, 193, 0.9800000190734863)",
      "cyan-alpha-10": "rgba(0, 144, 176, 0.968999981880188)",
      "cyan-alpha-11": "rgba(0, 113, 141, 0.953000009059906)",
      "cyan-alpha-12": "rgba(0, 45, 56, 0.9800000190734863)",
      "teal-1": "rgba(250, 254, 253, 1)",
      "teal-2": "rgba(241, 252, 250, 1)",
      "teal-3": "rgba(231, 249, 245, 1)",
      "teal-4": "rgba(217, 243, 238, 1)",
      "teal-5": "rgba(199, 235, 229, 1)",
      "teal-6": "rgba(175, 223, 215, 1)",
      "teal-7": "rgba(141, 206, 195, 1)",
      "teal-8": "rgba(83, 185, 171, 1)",
      "teal-9": "rgba(18, 165, 148, 1)",
      "teal-10": "rgba(14, 152, 136, 1)",
      "teal-11": "rgba(6, 122, 111, 1)",
      "teal-12": "rgba(16, 48, 43, 1)",
      "teal-alpha-1": "rgba(5, 205, 155, 0.019999999552965164)",
      "teal-alpha-2": "rgba(1, 200, 164, 0.054999999701976776)",
      "teal-alpha-3": "rgba(2, 192, 151, 0.0949999988079071)",
      "teal-alpha-4": "rgba(2, 175, 140, 0.15000000596046448)",
      "teal-alpha-5": "rgba(0, 164, 137, 0.2199999988079071)",
      "teal-alpha-6": "rgba(0, 153, 128, 0.3140000104904175)",
      "teal-alpha-7": "rgba(1, 146, 122, 0.4480000138282776)",
      "teal-alpha-8": "rgba(0, 151, 131, 0.675000011920929)",
      "teal-alpha-9": "rgba(0, 158, 140, 0.9300000071525574)",
      "teal-alpha-10": "rgba(0, 146, 129, 0.9459999799728394)",
      "teal-alpha-11": "rgba(0, 119, 107, 0.9769999980926514)",
      "teal-alpha-12": "rgba(0, 34, 29, 0.9380000233650208)",
      "green-1": "rgba(251, 254, 252, 1)",
      "green-2": "rgba(242, 252, 245, 1)",
      "green-3": "rgba(233, 249, 238, 1)",
      "green-4": "rgba(221, 243, 228, 1)",
      "green-5": "rgba(204, 235, 215, 1)",
      "green-6": "rgba(180, 223, 196, 1)",
      "green-7": "rgba(146, 206, 172, 1)",
      "green-8": "rgba(91, 185, 140, 1)",
      "green-9": "rgba(48, 164, 108, 1)",
      "green-10": "rgba(41, 151, 100, 1)",
      "green-11": "rgba(24, 121, 78, 1)",
      "green-12": "rgba(21, 50, 38, 1)",
      "green-alpha-1": "rgba(5, 192, 67, 0.01600000075995922)",
      "green-alpha-2": "rgba(0, 196, 59, 0.050999999046325684)",
      "green-alpha-3": "rgba(2, 186, 60, 0.08699999749660492)",
      "green-alpha-4": "rgba(1, 166, 53, 0.1340000033378601)",
      "green-alpha-5": "rgba(0, 155, 54, 0.20000000298023224)",
      "green-alpha-6": "rgba(1, 147, 54, 0.29499998688697815)",
      "green-alpha-7": "rgba(0, 140, 61, 0.42800000309944153)",
      "green-alpha-8": "rgba(0, 147, 76, 0.6439999938011169)",
      "green-alpha-9": "rgba(0, 143, 74, 0.8119999766349792)",
      "green-alpha-10": "rgba(0, 131, 70, 0.8399999737739563)",
      "green-alpha-11": "rgba(0, 107, 59, 0.906000018119812)",
      "green-alpha-12": "rgba(0, 32, 18, 0.9179999828338623)",
      "grass-1": "rgba(251, 254, 251, 1)",
      "grass-2": "rgba(243, 252, 243, 1)",
      "grass-3": "rgba(235, 249, 235, 1)",
      "grass-4": "rgba(223, 243, 223, 1)",
      "grass-5": "rgba(206, 235, 207, 1)",
      "grass-6": "rgba(183, 223, 186, 1)",
      "grass-7": "rgba(151, 207, 156, 1)",
      "grass-8": "rgba(101, 186, 117, 1)",
      "grass-9": "rgba(70, 167, 88, 1)",
      "grass-10": "rgba(61, 154, 80, 1)",
      "grass-11": "rgba(41, 124, 59, 1)",
      "grass-12": "rgba(27, 49, 30, 1)",
      "grass-alpha-1": "rgba(5, 192, 5, 0.01600000075995922)",
      "grass-alpha-2": "rgba(5, 192, 5, 0.04800000041723251)",
      "grass-alpha-3": "rgba(2, 179, 2, 0.07900000363588333)",
      "grass-alpha-4": "rgba(1, 160, 1, 0.12600000202655792)",
      "grass-alpha-5": "rgba(1, 151, 6, 0.19300000369548798)",
      "grass-alpha-6": "rgba(1, 142, 12, 0.28299999237060547)",
      "grass-alpha-7": "rgba(0, 138, 12, 0.40799999237060547)",
      "grass-alpha-8": "rgba(0, 141, 26, 0.6039999723434448)",
      "grass-alpha-9": "rgba(0, 134, 25, 0.7260000109672546)",
      "grass-alpha-10": "rgba(0, 122, 25, 0.7609999775886536)",
      "grass-alpha-11": "rgba(0, 99, 22, 0.8399999737739563)",
      "grass-alpha-12": "rgba(0, 25, 4, 0.8949999809265137)",
      "orange-1": "rgba(254, 252, 251, 1)",
      "orange-2": "rgba(254, 248, 244, 1)",
      "orange-3": "rgba(255, 241, 231, 1)",
      "orange-4": "rgba(255, 232, 215, 1)",
      "orange-5": "rgba(255, 220, 195, 1)",
      "orange-6": "rgba(255, 204, 167, 1)",
      "orange-7": "rgba(255, 179, 129, 1)",
      "orange-8": "rgba(250, 147, 78, 1)",
      "orange-9": "rgba(247, 104, 8, 1)",
      "orange-10": "rgba(237, 95, 0, 1)",
      "orange-11": "rgba(189, 75, 0, 1)",
      "orange-12": "rgba(69, 30, 17, 1)",
      "orange-alpha-1": "rgba(192, 67, 5, 0.01600000075995922)",
      "orange-alpha-2": "rgba(232, 96, 5, 0.04399999976158142)",
      "orange-alpha-3": "rgba(255, 108, 3, 0.0949999988079071)",
      "orange-alpha-4": "rgba(255, 110, 0, 0.15700000524520874)",
      "orange-alpha-5": "rgba(255, 107, 1, 0.23600000143051147)",
      "orange-alpha-6": "rgba(255, 107, 1, 0.34599998593330383)",
      "orange-alpha-7": "rgba(255, 102, 1, 0.4950000047683716)",
      "orange-alpha-8": "rgba(248, 99, 0, 0.6949999928474426)",
      "orange-alpha-9": "rgba(247, 99, 0, 0.968999981880188)",
      "orange-alpha-10": "rgba(237, 91, 0, 0.9800000190734863)",
      "orange-alpha-11": "rgba(188, 72, 0, 0.9800000190734863)",
      "orange-alpha-12": "rgba(56, 14, 0, 0.9340000152587891)",
      "brown-1": "rgba(254, 253, 252, 1)",
      "brown-2": "rgba(252, 249, 246, 1)",
      "brown-3": "rgba(248, 241, 234, 1)",
      "brown-4": "rgba(244, 233, 221, 1)",
      "brown-5": "rgba(239, 221, 204, 1)",
      "brown-6": "rgba(232, 205, 181, 1)",
      "brown-7": "rgba(221, 184, 150, 1)",
      "brown-8": "rgba(208, 158, 114, 1)",
      "brown-9": "rgba(173, 127, 88, 1)",
      "brown-10": "rgba(160, 118, 83, 1)",
      "brown-11": "rgba(136, 99, 73, 1)",
      "brown-12": "rgba(63, 44, 34, 1)",
      "brown-alpha-1": "rgba(171, 88, 5, 0.012000000104308128)",
      "brown-alpha-2": "rgba(171, 88, 5, 0.035999998450279236)",
      "brown-alpha-3": "rgba(171, 86, 2, 0.08299999684095383)",
      "brown-alpha-4": "rgba(173, 90, 1, 0.1340000033378601)",
      "brown-alpha-5": "rgba(175, 85, 0, 0.20000000298023224)",
      "brown-alpha-6": "rgba(176, 82, 1, 0.29100000858306885)",
      "brown-alpha-7": "rgba(172, 83, 0, 0.41200000047683716)",
      "brown-alpha-8": "rgba(170, 79, 0, 0.5529999732971191)",
      "brown-alpha-9": "rgba(130, 61, 0, 0.6549999713897705)",
      "brown-alpha-10": "rgba(114, 51, 0, 0.675000011920929)",
      "brown-alpha-11": "rgba(88, 37, 0, 0.7139999866485596)",
      "brown-alpha-12": "rgba(34, 12, 0, 0.8669999837875366)",
      "sky-1": "rgba(249, 254, 255, 1)",
      "sky-2": "rgba(241, 252, 255, 1)",
      "sky-3": "rgba(228, 249, 255, 1)",
      "sky-4": "rgba(213, 244, 253, 1)",
      "sky-5": "rgba(193, 236, 249, 1)",
      "sky-6": "rgba(164, 223, 241, 1)",
      "sky-7": "rgba(121, 207, 234, 1)",
      "sky-8": "rgba(46, 189, 229, 1)",
      "sky-9": "rgba(104, 221, 253, 1)",
      "sky-10": "rgba(95, 212, 244, 1)",
      "sky-11": "rgba(0, 120, 161, 1)",
      "sky-12": "rgba(0, 50, 66, 1)",
      "sky-alpha-1": "rgba(5, 213, 255, 0.024000000208616257)",
      "sky-alpha-2": "rgba(1, 200, 255, 0.054999999701976776)",
      "sky-alpha-3": "rgba(1, 200, 255, 0.10599999874830246)",
      "sky-alpha-4": "rgba(0, 186, 243, 0.16500000655651093)",
      "sky-alpha-5": "rgba(1, 177, 231, 0.24400000274181366)",
      "sky-alpha-6": "rgba(0, 165, 216, 0.3569999933242798)",
      "sky-alpha-7": "rgba(0, 165, 215, 0.5260000228881836)",
      "sky-alpha-8": "rgba(0, 175, 223, 0.8199999928474426)",
      "sky-alpha-9": "rgba(0, 197, 252, 0.5929999947547913)",
      "sky-alpha-10": "rgba(0, 186, 237, 0.628000020980835)",
      "sky-alpha-11": "rgba(0, 117, 159, 0.9800000190734863)",
      "sky-alpha-12": "rgba(0, 46, 62, 0.9800000190734863)",
      "mint-1": "rgba(249, 254, 253, 1)",
      "mint-2": "rgba(239, 254, 250, 1)",
      "mint-3": "rgba(225, 251, 244, 1)",
      "mint-4": "rgba(210, 247, 237, 1)",
      "mint-5": "rgba(192, 239, 227, 1)",
      "mint-6": "rgba(165, 228, 212, 1)",
      "mint-7": "rgba(125, 212, 192, 1)",
      "mint-8": "rgba(64, 196, 170, 1)",
      "mint-9": "rgba(112, 225, 200, 1)",
      "mint-10": "rgba(105, 217, 193, 1)",
      "mint-11": "rgba(20, 125, 111, 1)",
      "mint-12": "rgba(9, 52, 46, 1)",
      "mint-alpha-1": "rgba(5, 213, 172, 0.024000000208616257)",
      "mint-alpha-2": "rgba(1, 239, 176, 0.06300000101327896)",
      "mint-alpha-3": "rgba(1, 221, 162, 0.11800000071525574)",
      "mint-alpha-4": "rgba(1, 210, 154, 0.1770000010728836)",
      "mint-alpha-5": "rgba(1, 190, 143, 0.24799999594688416)",
      "mint-alpha-6": "rgba(0, 179, 134, 0.3529999852180481)",
      "mint-alpha-7": "rgba(0, 171, 131, 0.5099999904632568)",
      "mint-alpha-8": "rgba(0, 176, 141, 0.75)",
      "mint-alpha-9": "rgba(0, 201, 158, 0.5609999895095825)",
      "mint-alpha-10": "rgba(0, 190, 149, 0.5889999866485596)",
      "mint-alpha-11": "rgba(0, 114, 99, 0.921999990940094)",
      "mint-alpha-12": "rgba(0, 45, 39, 0.9649999737739563)",
      "lime-1": "rgba(252, 253, 250, 1)",
      "lime-2": "rgba(247, 252, 240, 1)",
      "lime-3": "rgba(238, 250, 220, 1)",
      "lime-4": "rgba(228, 247, 199, 1)",
      "lime-5": "rgba(215, 242, 176, 1)",
      "lime-6": "rgba(201, 232, 148, 1)",
      "lime-7": "rgba(177, 209, 106, 1)",
      "lime-8": "rgba(148, 186, 44, 1)",
      "lime-9": "rgba(153, 213, 42, 1)",
      "lime-10": "rgba(147, 201, 38, 1)",
      "lime-11": "rgba(93, 119, 13, 1)",
      "lime-12": "rgba(38, 50, 9, 1)",
      "lime-alpha-1": "rgba(105, 155, 5, 0.019999999552965164)",
      "lime-alpha-2": "rgba(119, 204, 1, 0.05900000035762787)",
      "lime-alpha-3": "rgba(132, 219, 1, 0.1379999965429306)",
      "lime-alpha-4": "rgba(131, 219, 0, 0.2199999988079071)",
      "lime-alpha-5": "rgba(124, 213, 0, 0.3100000023841858)",
      "lime-alpha-6": "rgba(127, 200, 0, 0.41999998688697815)",
      "lime-alpha-7": "rgba(120, 176, 0, 0.5849999785423279)",
      "lime-alpha-8": "rgba(126, 172, 0, 0.828000009059906)",
      "lime-alpha-9": "rgba(133, 205, 0, 0.8360000252723694)",
      "lime-alpha-10": "rgba(128, 192, 0, 0.8510000109672546)",
      "lime-alpha-11": "rgba(84, 112, 0, 0.949999988079071)",
      "lime-alpha-12": "rgba(30, 43, 0, 0.9649999737739563)",
      "yellow-1": "rgba(253, 253, 249, 1)",
      "yellow-2": "rgba(255, 252, 232, 1)",
      "yellow-3": "rgba(255, 251, 209, 1)",
      "yellow-4": "rgba(255, 248, 187, 1)",
      "yellow-5": "rgba(254, 242, 164, 1)",
      "yellow-6": "rgba(249, 230, 140, 1)",
      "yellow-7": "rgba(239, 211, 108, 1)",
      "yellow-8": "rgba(235, 188, 0, 1)",
      "yellow-9": "rgba(245, 217, 10, 1)",
      "yellow-10": "rgba(247, 206, 0, 1)",
      "yellow-11": "rgba(148, 104, 0, 1)",
      "yellow-12": "rgba(53, 41, 15, 1)",
      "yellow-alpha-1": "rgba(171, 171, 5, 0.024000000208616257)",
      "yellow-alpha-2": "rgba(255, 221, 2, 0.09099999815225601)",
      "yellow-alpha-3": "rgba(255, 234, 1, 0.1809999942779541)",
      "yellow-alpha-4": "rgba(255, 230, 1, 0.2669999897480011)",
      "yellow-alpha-5": "rgba(252, 219, 0, 0.3569999933242798)",
      "yellow-alpha-6": "rgba(242, 201, 0, 0.45100000500679016)",
      "yellow-alpha-7": "rgba(227, 178, 0, 0.5770000219345093)",
      "yellow-alpha-8": "rgba(235, 188, 0, 0.9800000190734863)",
      "yellow-alpha-9": "rgba(245, 216, 0, 0.9610000252723694)",
      "yellow-alpha-10": "rgba(247, 206, 0, 0.9800000190734863)",
      "yellow-alpha-11": "rgba(146, 102, 0, 0.9800000190734863)",
      "yellow-alpha-12": "rgba(41, 28, 0, 0.9419999718666077)",
      "amber-1": "rgba(254, 253, 251, 1)",
      "amber-2": "rgba(255, 249, 237, 1)",
      "amber-3": "rgba(255, 244, 213, 1)",
      "amber-4": "rgba(255, 236, 188, 1)",
      "amber-5": "rgba(255, 227, 162, 1)",
      "amber-6": "rgba(255, 211, 134, 1)",
      "amber-7": "rgba(243, 186, 99, 1)",
      "amber-8": "rgba(238, 157, 43, 1)",
      "amber-9": "rgba(255, 178, 36, 1)",
      "amber-10": "rgba(255, 160, 28, 1)",
      "amber-11": "rgba(173, 87, 0, 1)",
      "amber-12": "rgba(78, 32, 9, 1)",
      "amber-alpha-1": "rgba(192, 130, 5, 0.01600000075995922)",
      "amber-alpha-2": "rgba(255, 171, 2, 0.07100000232458115)",
      "amber-alpha-3": "rgba(255, 187, 1, 0.16500000655651093)",
      "amber-alpha-4": "rgba(255, 183, 0, 0.2630000114440918)",
      "amber-alpha-5": "rgba(255, 179, 0, 0.36500000953674316)",
      "amber-alpha-6": "rgba(255, 162, 1, 0.4749999940395355)",
      "amber-alpha-7": "rgba(236, 141, 0, 0.6119999885559082)",
      "amber-alpha-8": "rgba(234, 137, 0, 0.8320000171661377)",
      "amber-alpha-9": "rgba(255, 166, 0, 0.859000027179718)",
      "amber-alpha-10": "rgba(255, 149, 0, 0.890999972820282)",
      "amber-alpha-11": "rgba(171, 83, 0, 0.9800000190734863)",
      "amber-alpha-12": "rgba(72, 24, 0, 0.9649999737739563)",
      "gray-1": "rgba(252, 252, 252, 1)",
      "gray-2": "rgba(248, 248, 248, 1)",
      "gray-3": "rgba(243, 243, 243, 1)",
      "gray-4": "rgba(237, 237, 237, 1)",
      "gray-5": "rgba(232, 232, 232, 1)",
      "gray-6": "rgba(226, 226, 226, 1)",
      "gray-7": "rgba(219, 219, 219, 1)",
      "gray-8": "rgba(199, 199, 199, 1)",
      "gray-9": "rgba(143, 143, 143, 1)",
      "gray-10": "rgba(133, 133, 133, 1)",
      "gray-11": "rgba(111, 111, 111, 1)",
      "gray-12": "rgba(23, 23, 23, 1)",
      "gray-alpha-1": "rgba(0, 0, 0, 0.012000000104308128)",
      "gray-alpha-2": "rgba(0, 0, 0, 0.027000000700354576)",
      "gray-alpha-3": "rgba(0, 0, 0, 0.04699999839067459)",
      "gray-alpha-4": "rgba(0, 0, 0, 0.07100000232458115)",
      "gray-alpha-5": "rgba(0, 0, 0, 0.09000000357627869)",
      "gray-alpha-6": "rgba(0, 0, 0, 0.11400000005960464)",
      "gray-alpha-7": "rgba(0, 0, 0, 0.14100000262260437)",
      "gray-alpha-8": "rgba(0, 0, 0, 0.2199999988079071)",
      "gray-alpha-9": "rgba(0, 0, 0, 0.42899999022483826)",
      "gray-alpha-10": "rgba(0, 0, 0, 0.4779999852180481)",
      "gray-alpha-11": "rgba(0, 0, 0, 0.5649999976158142)",
      "gray-alpha-12": "rgba(0, 0, 0, 0.9100000262260437)",
      "mauve-1": "rgba(253, 252, 253, 1)",
      "mauve-2": "rgba(249, 248, 249, 1)",
      "mauve-3": "rgba(244, 242, 244, 1)",
      "mauve-4": "rgba(238, 237, 239, 1)",
      "mauve-5": "rgba(233, 232, 234, 1)",
      "mauve-6": "rgba(228, 226, 228, 1)",
      "mauve-7": "rgba(220, 219, 221, 1)",
      "mauve-8": "rgba(200, 199, 203, 1)",
      "mauve-9": "rgba(144, 142, 150, 1)",
      "mauve-10": "rgba(134, 132, 141, 1)",
      "mauve-11": "rgba(111, 110, 119, 1)",
      "mauve-12": "rgba(26, 21, 35, 1)",
      "mauve-alpha-1": "rgba(88, 5, 88, 0.012000000104308128)",
      "mauve-alpha-2": "rgba(41, 5, 41, 0.02800000086426735)",
      "mauve-alpha-3": "rgba(39, 0, 39, 0.050999999046325684)",
      "mauve-alpha-4": "rgba(16, 1, 30, 0.07100000232458115)",
      "mauve-alpha-5": "rgba(13, 2, 24, 0.09099999815225601)",
      "mauve-alpha-6": "rgba(18, 1, 18, 0.11400000005960464)",
      "mauve-alpha-7": "rgba(8, 1, 15, 0.1420000046491623)",
      "mauve-alpha-8": "rgba(5, 0, 18, 0.2199999988079071)",
      "mauve-alpha-9": "rgba(5, 0, 18, 0.4440000057220459)",
      "mauve-alpha-10": "rgba(4, 0, 19, 0.4830000102519989)",
      "mauve-alpha-11": "rgba(2, 0, 16, 0.5690000057220459)",
      "mauve-alpha-12": "rgba(5, 0, 15, 0.9179999828338623)",
      "sage-1": "rgba(251, 253, 252, 1)",
      "sage-2": "rgba(248, 250, 249, 1)",
      "sage-3": "rgba(241, 244, 243, 1)",
      "sage-4": "rgba(236, 239, 237, 1)",
      "sage-5": "rgba(230, 233, 232, 1)",
      "sage-6": "rgba(223, 228, 226, 1)",
      "sage-7": "rgba(215, 220, 218, 1)",
      "sage-8": "rgba(194, 201, 198, 1)",
      "sage-9": "rgba(138, 145, 142, 1)",
      "sage-10": "rgba(128, 135, 132, 1)",
      "sage-11": "rgba(106, 113, 110, 1)",
      "sage-12": "rgba(17, 28, 24, 1)",
      "sage-alpha-1": "rgba(5, 130, 68, 0.012000000104308128)",
      "sage-alpha-2": "rgba(5, 77, 41, 0.02800000086426735)",
      "sage-alpha-3": "rgba(0, 55, 37, 0.054999999701976776)",
      "sage-alpha-4": "rgba(2, 42, 15, 0.07500000298023224)",
      "sage-alpha-5": "rgba(2, 33, 23, 0.0989999994635582)",
      "sage-alpha-6": "rgba(1, 41, 25, 0.12600000202655792)",
      "sage-alpha-7": "rgba(0, 32, 19, 0.15700000524520874)",
      "sage-alpha-8": "rgba(1, 30, 17, 0.23999999463558197)",
      "sage-alpha-9": "rgba(0, 15, 9, 0.45899999141693115)",
      "sage-alpha-10": "rgba(0, 14, 8, 0.49900001287460327)",
      "sage-alpha-11": "rgba(0, 12, 7, 0.5849999785423279)",
      "sage-alpha-12": "rgba(0, 12, 8, 0.9340000152587891)",
      "olive-1": "rgba(252, 253, 252, 1)",
      "olive-2": "rgba(248, 250, 248, 1)",
      "olive-3": "rgba(242, 244, 242, 1)",
      "olive-4": "rgba(236, 239, 236, 1)",
      "olive-5": "rgba(230, 233, 230, 1)",
      "olive-6": "rgba(224, 228, 224, 1)",
      "olive-7": "rgba(216, 220, 216, 1)",
      "olive-8": "rgba(195, 200, 194, 1)",
      "olive-9": "rgba(139, 145, 138, 1)",
      "olive-10": "rgba(129, 135, 128, 1)",
      "olive-11": "rgba(107, 113, 106, 1)",
      "olive-12": "rgba(20, 30, 18, 1)",
      "olive-alpha-1": "rgba(5, 88, 5, 0.012000000104308128)",
      "olive-alpha-2": "rgba(5, 77, 5, 0.02800000086426735)",
      "olive-alpha-3": "rgba(0, 39, 0, 0.050999999046325684)",
      "olive-alpha-4": "rgba(2, 42, 2, 0.07500000298023224)",
      "olive-alpha-5": "rgba(2, 33, 2, 0.0989999994635582)",
      "olive-alpha-6": "rgba(1, 34, 1, 0.12200000137090683)",
      "olive-alpha-7": "rgba(0, 26, 0, 0.15299999713897705)",
      "olive-alpha-8": "rgba(5, 26, 1, 0.23999999463558197)",
      "olive-alpha-9": "rgba(2, 15, 0, 0.45899999141693115)",
      "olive-alpha-10": "rgba(3, 14, 0, 0.49900001287460327)",
      "olive-alpha-11": "rgba(2, 12, 0, 0.5849999785423279)",
      "olive-alpha-12": "rgba(2, 13, 0, 0.9300000071525574)",
      "sand-1": "rgba(253, 253, 252, 1)",
      "sand-2": "rgba(249, 249, 248, 1)",
      "sand-3": "rgba(243, 243, 242, 1)",
      "sand-4": "rgba(238, 238, 236, 1)",
      "sand-5": "rgba(233, 233, 230, 1)",
      "sand-6": "rgba(227, 227, 224, 1)",
      "sand-7": "rgba(219, 219, 215, 1)",
      "sand-8": "rgba(200, 199, 193, 1)",
      "sand-9": "rgba(144, 144, 140, 1)",
      "sand-10": "rgba(134, 134, 130, 1)",
      "sand-11": "rgba(112, 111, 108, 1)",
      "sand-12": "rgba(27, 27, 24, 1)",
      "sand-alpha-1": "rgba(88, 88, 5, 0.012000000104308128)",
      "sand-alpha-2": "rgba(41, 41, 5, 0.02800000086426735)",
      "sand-alpha-3": "rgba(20, 20, 0, 0.050999999046325684)",
      "sand-alpha-4": "rgba(28, 28, 2, 0.07500000298023224)",
      "sand-alpha-5": "rgba(33, 33, 2, 0.0989999994635582)",
      "sand-alpha-6": "rgba(26, 26, 1, 0.12200000137090683)",
      "sand-alpha-7": "rgba(26, 26, 0, 0.15700000524520874)",
      "sand-alpha-8": "rgba(30, 25, 1, 0.24400000274181366)",
      "sand-alpha-9": "rgba(9, 9, 0, 0.45100000500679016)",
      "sand-alpha-10": "rgba(9, 9, 0, 0.4909999966621399)",
      "sand-alpha-11": "rgba(7, 6, 0, 0.5770000219345093)",
      "sand-alpha-12": "rgba(4, 4, 0, 0.906000018119812)",
      "bronze-1": "rgba(253, 252, 252, 1)",
      "bronze-2": "rgba(253, 248, 246, 1)",
      "bronze-3": "rgba(248, 241, 238, 1)",
      "bronze-4": "rgba(242, 232, 228, 1)",
      "bronze-5": "rgba(234, 221, 215, 1)",
      "bronze-6": "rgba(224, 206, 199, 1)",
      "bronze-7": "rgba(209, 185, 176, 1)",
      "bronze-8": "rgba(191, 160, 148, 1)",
      "bronze-9": "rgba(161, 128, 114, 1)",
      "bronze-10": "rgba(151, 118, 105, 1)",
      "bronze-11": "rgba(132, 99, 88, 1)",
      "bronze-12": "rgba(67, 48, 43, 1)",
      "bronze-alpha-1": "rgba(88, 5, 5, 0.012000000104308128)",
      "bronze-alpha-2": "rgba(199, 60, 5, 0.035999998450279236)",
      "bronze-alpha-3": "rgba(151, 46, 1, 0.06700000166893005)",
      "bronze-alpha-4": "rgba(132, 38, 0, 0.10599999874830246)",
      "bronze-alpha-5": "rgba(121, 39, 0, 0.15700000524520874)",
      "bronze-alpha-6": "rgba(114, 33, 0, 0.2199999988079071)",
      "bronze-alpha-7": "rgba(110, 33, 0, 0.3100000023841858)",
      "bronze-alpha-8": "rgba(103, 29, 0, 0.41999998688697815)",
      "bronze-alpha-9": "rgba(85, 26, 0, 0.5529999732971191)",
      "bronze-alpha-10": "rgba(78, 22, 0, 0.5889999866485596)",
      "bronze-alpha-11": "rgba(67, 17, 0, 0.6549999713897705)",
      "bronze-alpha-12": "rgba(29, 6, 0, 0.8320000171661377)",
      "gold-1": "rgba(253, 253, 252, 1)",
      "gold-2": "rgba(251, 249, 242, 1)",
      "gold-3": "rgba(245, 242, 233, 1)",
      "gold-4": "rgba(238, 234, 221, 1)",
      "gold-5": "rgba(229, 223, 208, 1)",
      "gold-6": "rgba(218, 209, 189, 1)",
      "gold-7": "rgba(203, 189, 164, 1)",
      "gold-8": "rgba(184, 163, 131, 1)",
      "gold-9": "rgba(151, 131, 101, 1)",
      "gold-10": "rgba(140, 121, 93, 1)",
      "gold-11": "rgba(119, 103, 80, 1)",
      "gold-12": "rgba(59, 53, 43, 1)",
      "gold-alpha-1": "rgba(88, 88, 5, 0.012000000104308128)",
      "gold-alpha-2": "rgba(176, 138, 0, 0.050999999046325684)",
      "gold-alpha-3": "rgba(140, 106, 2, 0.08699999749660492)",
      "gold-alpha-4": "rgba(128, 99, 1, 0.1340000033378601)",
      "gold-alpha-5": "rgba(114, 82, 1, 0.1850000023841858)",
      "gold-alpha-6": "rgba(112, 77, 0, 0.2590000033378601)",
      "gold-alpha-7": "rgba(110, 69, 0, 0.3569999933242798)",
      "gold-alpha-8": "rgba(109, 66, 0, 0.4869999885559082)",
      "gold-alpha-9": "rgba(83, 50, 0, 0.6039999723434448)",
      "gold-alpha-10": "rgba(74, 45, 0, 0.6359999775886536)",
      "gold-alpha-11": "rgba(57, 33, 0, 0.6869999766349792)",
      "gold-alpha-12": "rgba(19, 12, 0, 0.8320000171661377)",
      "black-1": "rgba(0, 0, 0, 0.012000000104308128)",
      "black-2": "rgba(0, 0, 0, 0.027000000700354576)",
      "black-3": "rgba(0, 0, 0, 0.04699999839067459)",
      "black-4": "rgba(0, 0, 0, 0.07100000232458115)",
      "black-5": "rgba(0, 0, 0, 0.09000000357627869)",
      "black-6": "rgba(0, 0, 0, 0.11400000005960464)",
      "black-7": "rgba(0, 0, 0, 0.14100000262260437)",
      "black-8": "rgba(0, 0, 0, 0.2199999988079071)",
      "black-9": "rgba(0, 0, 0, 0.4390000104904175)",
      "black-10": "rgba(0, 0, 0, 0.4779999852180481)",
      "black-11": "rgba(0, 0, 0, 0.5649999976158142)",
      "black-12": "rgba(0, 0, 0, 0.9100000262260437)",
      "white-1": "rgba(255, 255, 255, 0)",
      "white-2": "rgba(255, 255, 255, 0.013000000268220901)",
      "white-3": "rgba(255, 255, 255, 0.03400000184774399)",
      "white-4": "rgba(255, 255, 255, 0.0560000017285347)",
      "white-5": "rgba(255, 255, 255, 0.0860000029206276)",
      "white-6": "rgba(255, 255, 255, 0.12399999797344208)",
      "white-7": "rgba(255, 255, 255, 0.17599999904632568)",
      "white-8": "rgba(255, 255, 255, 0.24899999797344208)",
      "white-9": "rgba(255, 255, 255, 0.38600000739097595)",
      "white-10": "rgba(255, 255, 255, 0.44600000977516174)",
      "white-11": "rgba(255, 255, 255, 0.5920000076293945)",
      "white-12": "rgba(255, 255, 255, 0.9229999780654907)",
    },
    dark: {
      "red-1": "rgba(31, 19, 21, 1)",
      "red-2": "rgba(41, 20, 21, 1)",
      "red-3": "rgba(60, 24, 26, 1)",
      "red-4": "rgba(72, 26, 29, 1)",
      "red-5": "rgba(84, 27, 31, 1)",
      "red-6": "rgba(103, 30, 34, 1)",
      "red-7": "rgba(130, 32, 37, 1)",
      "red-8": "rgba(170, 36, 41, 1)",
      "red-9": "rgba(229, 72, 77, 1)",
      "red-10": "rgba(242, 85, 90, 1)",
      "red-11": "rgba(255, 99, 105, 1)",
      "red-12": "rgba(254, 236, 238, 1)",
      "tomato-alpha-1": "rgba(0, 0, 0, 0)",
      "tomato-alpha-2": "rgba(253, 21, 0, 0.057999998331069946)",
      "tomato-alpha-3": "rgba(255, 48, 25, 0.13300000131130219)",
      "tomato-alpha-4": "rgba(254, 51, 28, 0.19099999964237213)",
      "tomato-alpha-5": "rgba(254, 53, 30, 0.24400000274181366)",
      "tomato-alpha-6": "rgba(255, 57, 30, 0.3190000057220459)",
      "tomato-alpha-7": "rgba(255, 55, 25, 0.4339999854564667)",
      "tomato-alpha-8": "rgba(255, 58, 18, 0.5979999899864197)",
      "tomato-alpha-9": "rgba(255, 84, 49, 0.8849999904632568)",
      "tomato-alpha-10": "rgba(255, 100, 69, 0.9160000085830688)",
      "tomato-alpha-11": "rgba(255, 112, 84, 0.9390000104904175)",
      "tomato-alpha-12": "rgba(255, 243, 240, 0.9800000190734863)",
      "tomato-1": "rgba(29, 20, 18, 1)",
      "tomato-2": "rgba(42, 20, 16, 1)",
      "tomato-3": "rgba(59, 24, 19, 1)",
      "tomato-4": "rgba(72, 26, 20, 1)",
      "tomato-5": "rgba(84, 28, 21, 1)",
      "tomato-6": "rgba(101, 32, 22, 1)",
      "tomato-7": "rgba(127, 35, 21, 1)",
      "tomato-8": "rgba(164, 42, 18, 1)",
      "tomato-9": "rgba(229, 77, 46, 1)",
      "tomato-10": "rgba(236, 94, 65, 1)",
      "tomato-11": "rgba(241, 106, 80, 1)",
      "tomato-12": "rgba(254, 239, 236, 1)",
      "red-alpha-1": "rgba(0, 0, 0, 0)",
      "red-alpha-2": "rgba(253, 40, 21, 0.04500000178813934)",
      "red-alpha-3": "rgba(254, 58, 61, 0.12999999523162842)",
      "red-alpha-4": "rgba(254, 57, 64, 0.18400000035762787)",
      "red-alpha-5": "rgba(255, 53, 63, 0.2370000034570694)",
      "red-alpha-6": "rgba(255, 53, 60, 0.32199999690055847)",
      "red-alpha-7": "rgba(255, 48, 59, 0.44200000166893005)",
      "red-alpha-8": "rgba(255, 47, 54, 0.6209999918937683)",
      "red-alpha-9": "rgba(255, 79, 85, 0.8840000033378601)",
      "red-alpha-10": "rgba(255, 89, 95, 0.9419999718666077)",
      "red-alpha-11": "rgba(255, 100, 106, 0.9800000190734863)",
      "red-alpha-12": "rgba(255, 240, 242, 0.9800000190734863)",
      "crimson-1": "rgba(29, 20, 24, 1)",
      "crimson-2": "rgba(39, 20, 28, 1)",
      "crimson-3": "rgba(60, 24, 39, 1)",
      "crimson-4": "rgba(72, 26, 45, 1)",
      "crimson-5": "rgba(84, 27, 51, 1)",
      "crimson-6": "rgba(100, 29, 59, 1)",
      "crimson-7": "rgba(128, 29, 69, 1)",
      "crimson-8": "rgba(174, 25, 85, 1)",
      "crimson-9": "rgba(233, 61, 130, 1)",
      "crimson-10": "rgba(240, 79, 136, 1)",
      "crimson-11": "rgba(247, 97, 144, 1)",
      "crimson-12": "rgba(254, 236, 244, 1)",
      "crimson-alpha-1": "rgba(0, 0, 0, 0)",
      "crimson-alpha-2": "rgba(251, 20, 113, 0.04500000178813934)",
      "crimson-alpha-3": "rgba(254, 49, 134, 0.1379999965429306)",
      "crimson-alpha-4": "rgba(254, 51, 132, 0.19099999964237213)",
      "crimson-alpha-5": "rgba(254, 49, 134, 0.24400000274181366)",
      "crimson-alpha-6": "rgba(254, 49, 134, 0.3149999976158142)",
      "crimson-alpha-7": "rgba(254, 40, 126, 0.4390000104904175)",
      "crimson-alpha-8": "rgba(255, 28, 119, 0.6420000195503235)",
      "crimson-alpha-9": "rgba(255, 65, 141, 0.902999997138977)",
      "crimson-alpha-10": "rgba(255, 83, 143, 0.9340000152587891)",
      "crimson-alpha-11": "rgba(255, 100, 149, 0.9649999737739563)",
      "crimson-alpha-12": "rgba(255, 240, 248, 0.9800000190734863)",
      "pink-1": "rgba(31, 18, 27, 1)",
      "pink-2": "rgba(39, 20, 33, 1)",
      "pink-3": "rgba(58, 24, 47, 1)",
      "pink-4": "rgba(69, 26, 55, 1)",
      "pink-5": "rgba(80, 27, 63, 1)",
      "pink-6": "rgba(96, 29, 72, 1)",
      "pink-7": "rgba(122, 29, 90, 1)",
      "pink-8": "rgba(167, 24, 115, 1)",
      "pink-9": "rgba(214, 64, 159, 1)",
      "pink-10": "rgba(227, 75, 169, 1)",
      "pink-11": "rgba(246, 92, 182, 1)",
      "pink-12": "rgba(254, 235, 247, 1)",
      "pink-alpha-1": "rgba(0, 0, 0, 0)",
      "pink-alpha-2": "rgba(253, 74, 193, 0.035999998450279236)",
      "pink-alpha-3": "rgba(254, 68, 192, 0.12099999934434891)",
      "pink-alpha-4": "rgba(255, 65, 191, 0.17000000178813934)",
      "pink-alpha-5": "rgba(255, 59, 193, 0.21899999678134918)",
      "pink-alpha-6": "rgba(254, 56, 182, 0.29100000858306885)",
      "pink-alpha-7": "rgba(255, 45, 181, 0.40700000524520874)",
      "pink-alpha-8": "rgba(255, 28, 172, 0.6079999804496765)",
      "pink-alpha-9": "rgba(255, 74, 189, 0.8169999718666077)",
      "pink-alpha-10": "rgba(255, 83, 189, 0.875)",
      "pink-alpha-11": "rgba(255, 95, 188, 0.9599999785423279)",
      "pink-alpha-12": "rgba(255, 239, 251, 0.9800000190734863)",
      "plum-1": "rgba(29, 19, 29, 1)",
      "plum-2": "rgba(37, 20, 37, 1)",
      "plum-3": "rgba(52, 26, 52, 1)",
      "plum-4": "rgba(62, 29, 64, 1)",
      "plum-5": "rgba(72, 33, 75, 1)",
      "plum-6": "rgba(84, 38, 88, 1)",
      "plum-7": "rgba(105, 45, 111, 1)",
      "plum-8": "rgba(136, 56, 148, 1)",
      "plum-9": "rgba(171, 74, 186, 1)",
      "plum-10": "rgba(189, 84, 198, 1)",
      "plum-11": "rgba(216, 100, 216, 1)",
      "plum-12": "rgba(251, 236, 252, 1)",
      "plum-alpha-1": "rgba(0, 0, 0, 0)",
      "plum-alpha-2": "rgba(251, 47, 251, 0.035999998450279236)",
      "plum-alpha-3": "rgba(254, 88, 254, 0.10199999809265137)",
      "plum-alpha-4": "rgba(241, 83, 255, 0.1550000011920929)",
      "plum-alpha-5": "rgba(241, 88, 254, 0.20399999618530273)",
      "plum-alpha-6": "rgba(238, 92, 254, 0.2619999945163727)",
      "plum-alpha-7": "rgba(238, 90, 255, 0.3630000054836273)",
      "plum-alpha-8": "rgba(233, 89, 255, 0.5270000100135803)",
      "plum-alpha-9": "rgba(234, 98, 255, 0.6949999928474426)",
      "plum-alpha-10": "rgba(243, 106, 255, 0.7480000257492065)",
      "plum-alpha-11": "rgba(255, 117, 255, 0.828000009059906)",
      "plum-alpha-12": "rgba(255, 240, 255, 0.9800000190734863)",
      "slate-1": "rgba(21, 23, 24, 1)",
      "slate-2": "rgba(26, 29, 30, 1)",
      "slate-3": "rgba(32, 36, 37, 1)",
      "slate-4": "rgba(38, 41, 43, 1)",
      "slate-5": "rgba(43, 47, 49, 1)",
      "slate-6": "rgba(49, 53, 56, 1)",
      "slate-7": "rgba(58, 63, 66, 1)",
      "slate-8": "rgba(76, 81, 85, 1)",
      "slate-9": "rgba(105, 113, 119, 1)",
      "slate-10": "rgba(120, 127, 133, 1)",
      "slate-11": "rgba(155, 161, 166, 1)",
      "slate-12": "rgba(236, 237, 238, 1)",
      "slate-alpha-1": "rgba(0, 0, 0, 0)",
      "slate-alpha-2": "rgba(213, 254, 255, 0.026000000536441803)",
      "slate-alpha-3": "rgba(214, 251, 252, 0.05700000002980232)",
      "slate-alpha-4": "rgba(226, 240, 253, 0.08299999684095383)",
      "slate-alpha-5": "rgba(223, 243, 253, 0.10899999737739563)",
      "slate-alpha-6": "rgba(223, 239, 254, 0.13899999856948853)",
      "slate-alpha-7": "rgba(224, 243, 255, 0.18199999630451202)",
      "slate-alpha-8": "rgba(229, 242, 254, 0.26499998569488525)",
      "slate-alpha-9": "rgba(225, 241, 255, 0.41200000047683716)",
      "slate-alpha-10": "rgba(231, 243, 255, 0.47200000286102295)",
      "slate-alpha-11": "rgba(239, 247, 255, 0.6150000095367432)",
      "slate-alpha-12": "rgba(253, 254, 255, 0.9269999861717224)",
      "purple-1": "rgba(27, 20, 29, 1)",
      "purple-2": "rgba(34, 21, 39, 1)",
      "purple-3": "rgba(48, 26, 58, 1)",
      "purple-4": "rgba(58, 30, 72, 1)",
      "purple-5": "rgba(67, 33, 85, 1)",
      "purple-6": "rgba(78, 38, 103, 1)",
      "purple-7": "rgba(95, 45, 132, 1)",
      "purple-8": "rgba(121, 56, 178, 1)",
      "purple-9": "rgba(142, 78, 198, 1)",
      "purple-10": "rgba(157, 91, 210, 1)",
      "purple-11": "rgba(191, 122, 240, 1)",
      "purple-12": "rgba(247, 236, 252, 1)",
      "purple-alpha-1": "rgba(0, 0, 0, 0)",
      "purple-alpha-2": "rgba(181, 42, 251, 0.04500000178813934)",
      "purple-alpha-3": "rgba(188, 67, 254, 0.1289999932050705)",
      "purple-alpha-4": "rgba(190, 72, 254, 0.19099999964237213)",
      "purple-alpha-5": "rgba(188, 73, 255, 0.24799999594688416)",
      "purple-alpha-6": "rgba(183, 75, 255, 0.328000009059906)",
      "purple-alpha-7": "rgba(177, 74, 255, 0.4560000002384186)",
      "purple-alpha-8": "rgba(171, 75, 255, 0.6600000262260437)",
      "purple-alpha-9": "rgba(181, 97, 255, 0.7580000162124634)",
      "purple-alpha-10": "rgba(189, 109, 255, 0.8009999990463257)",
      "purple-alpha-11": "rgba(203, 129, 255, 0.9340000152587891)",
      "purple-alpha-12": "rgba(252, 240, 255, 0.9800000190734863)",
      "violet-1": "rgba(23, 21, 31, 1)",
      "violet-2": "rgba(28, 23, 43, 1)",
      "violet-3": "rgba(37, 30, 64, 1)",
      "violet-4": "rgba(44, 34, 80, 1)",
      "violet-5": "rgba(50, 39, 95, 1)",
      "violet-6": "rgba(57, 44, 114, 1)",
      "violet-7": "rgba(68, 53, 146, 1)",
      "violet-8": "rgba(88, 66, 195, 1)",
      "violet-9": "rgba(110, 86, 207, 1)",
      "violet-10": "rgba(124, 102, 220, 1)",
      "violet-11": "rgba(158, 140, 252, 1)",
      "violet-12": "rgba(241, 238, 254, 1)",
      "violet-alpha-1": "rgba(0, 0, 0, 0)",
      "violet-alpha-2": "rgba(116, 58, 253, 0.05400000140070915)",
      "violet-alpha-3": "rgba(116, 82, 254, 0.14800000190734863)",
      "violet-alpha-4": "rgba(118, 80, 255, 0.21899999678134918)",
      "violet-alpha-5": "rgba(118, 84, 255, 0.28600001335144043)",
      "violet-alpha-6": "rgba(114, 83, 255, 0.3709999918937683)",
      "violet-alpha-7": "rgba(112, 83, 255, 0.5139999985694885)",
      "violet-alpha-8": "rgba(111, 82, 255, 0.7329999804496765)",
      "violet-alpha-9": "rgba(134, 104, 255, 0.7860000133514404)",
      "violet-alpha-10": "rgba(142, 117, 255, 0.843999981880188)",
      "violet-alpha-11": "rgba(161, 142, 255, 0.9800000190734863)",
      "violet-alpha-12": "rgba(245, 242, 255, 0.9800000190734863)",
      "indigo-1": "rgba(19, 22, 32, 1)",
      "indigo-2": "rgba(21, 25, 45, 1)",
      "indigo-3": "rgba(25, 33, 64, 1)",
      "indigo-4": "rgba(28, 39, 79, 1)",
      "indigo-5": "rgba(31, 44, 92, 1)",
      "indigo-6": "rgba(34, 52, 110, 1)",
      "indigo-7": "rgba(39, 62, 137, 1)",
      "indigo-8": "rgba(47, 78, 178, 1)",
      "indigo-9": "rgba(62, 99, 221, 1)",
      "indigo-10": "rgba(83, 115, 231, 1)",
      "indigo-11": "rgba(132, 157, 255, 1)",
      "indigo-12": "rgba(238, 241, 253, 1)",
      "indigo-alpha-1": "rgba(0, 0, 0, 0)",
      "indigo-alpha-2": "rgba(53, 73, 252, 0.05900000035762787)",
      "indigo-alpha-3": "rgba(60, 99, 254, 0.14399999380111694)",
      "indigo-alpha-4": "rgba(61, 103, 255, 0.210999995470047)",
      "indigo-alpha-5": "rgba(63, 105, 254, 0.27000001072883606)",
      "indigo-alpha-6": "rgba(62, 107, 255, 0.3499999940395355)",
      "indigo-alpha-7": "rgba(61, 106, 255, 0.47099998593330383)",
      "indigo-alpha-8": "rgba(62, 107, 255, 0.6549999713897705)",
      "indigo-alpha-9": "rgba(69, 113, 255, 0.8479999899864197)",
      "indigo-alpha-10": "rgba(90, 126, 255, 0.8930000066757202)",
      "indigo-alpha-11": "rgba(134, 160, 255, 0.9800000190734863)",
      "indigo-alpha-12": "rgba(242, 245, 255, 0.9800000190734863)",
      "blue-1": "rgba(15, 23, 32, 1)",
      "blue-2": "rgba(15, 27, 45, 1)",
      "blue-3": "rgba(16, 36, 62, 1)",
      "blue-4": "rgba(16, 42, 76, 1)",
      "blue-5": "rgba(15, 48, 88, 1)",
      "blue-6": "rgba(13, 56, 104, 1)",
      "blue-7": "rgba(10, 68, 129, 1)",
      "blue-8": "rgba(9, 84, 165, 1)",
      "blue-9": "rgba(0, 145, 255, 1)",
      "blue-10": "rgba(54, 158, 255, 1)",
      "blue-11": "rgba(82, 169, 255, 1)",
      "blue-12": "rgba(234, 246, 255, 1)",
      "blue-alpha-1": "rgba(0, 0, 0, 0)",
      "blue-alpha-2": "rgba(15, 90, 252, 0.05900000035762787)",
      "blue-alpha-3": "rgba(22, 119, 254, 0.13500000536441803)",
      "blue-alpha-4": "rgba(20, 118, 254, 0.1979999989271164)",
      "blue-alpha-5": "rgba(15, 123, 254, 0.25200000405311584)",
      "blue-alpha-6": "rgba(9, 124, 255, 0.3230000138282776)",
      "blue-alpha-7": "rgba(4, 125, 255, 0.4350000023841858)",
      "blue-alpha-8": "rgba(5, 126, 255, 0.597000002861023)",
      "blue-alpha-9": "rgba(0, 149, 255, 0.9800000190734863)",
      "blue-alpha-10": "rgba(55, 161, 255, 0.9800000190734863)",
      "blue-alpha-11": "rgba(83, 172, 255, 0.9800000190734863)",
      "blue-alpha-12": "rgba(239, 251, 255, 0.9800000190734863)",
      "cyan-1": "rgba(7, 25, 29, 1)",
      "cyan-2": "rgba(6, 30, 36, 1)",
      "cyan-3": "rgba(7, 40, 48, 1)",
      "cyan-4": "rgba(7, 48, 59, 1)",
      "cyan-5": "rgba(7, 56, 68, 1)",
      "cyan-6": "rgba(6, 65, 80, 1)",
      "cyan-7": "rgba(4, 80, 99, 1)",
      "cyan-8": "rgba(0, 100, 125, 1)",
      "cyan-9": "rgba(5, 162, 194, 1)",
      "cyan-10": "rgba(0, 177, 204, 1)",
      "cyan-11": "rgba(0, 194, 215, 1)",
      "cyan-12": "rgba(225, 248, 250, 1)",
      "cyan-alpha-1": "rgba(0, 0, 0, 0)",
      "cyan-alpha-2": "rgba(0, 187, 255, 0.03099999949336052)",
      "cyan-alpha-3": "rgba(7, 203, 252, 0.08500000089406967)",
      "cyan-alpha-4": "rgba(7, 197, 255, 0.13300000131130219)",
      "cyan-alpha-5": "rgba(7, 205, 254, 0.17299999296665192)",
      "cyan-alpha-6": "rgba(2, 200, 255, 0.22599999606609344)",
      "cyan-alpha-7": "rgba(0, 204, 255, 0.3100000023841858)",
      "cyan-alpha-8": "rgba(0, 200, 255, 0.42500001192092896)",
      "cyan-alpha-9": "rgba(4, 213, 255, 0.7310000061988831)",
      "cyan-alpha-10": "rgba(0, 221, 255, 0.7749999761581421)",
      "cyan-alpha-11": "rgba(0, 229, 254, 0.8240000009536743)",
      "cyan-alpha-12": "rgba(230, 253, 255, 0.9779999852180481)",
      "teal-1": "rgba(9, 25, 21, 1)",
      "teal-2": "rgba(4, 32, 27, 1)",
      "teal-3": "rgba(6, 41, 35, 1)",
      "teal-4": "rgba(7, 49, 43, 1)",
      "teal-5": "rgba(8, 57, 50, 1)",
      "teal-6": "rgba(9, 68, 60, 1)",
      "teal-7": "rgba(11, 84, 74, 1)",
      "teal-8": "rgba(12, 109, 98, 1)",
      "teal-9": "rgba(18, 165, 148, 1)",
      "teal-10": "rgba(16, 179, 163, 1)",
      "teal-11": "rgba(10, 197, 179, 1)",
      "teal-12": "rgba(225, 250, 244, 1)",
      "teal-alpha-1": "rgba(0, 0, 0, 0)",
      "teal-alpha-2": "rgba(0, 251, 213, 0.03099999949336052)",
      "teal-alpha-3": "rgba(0, 253, 220, 0.07000000029802322)",
      "teal-alpha-4": "rgba(0, 253, 232, 0.10499999672174454)",
      "teal-alpha-5": "rgba(2, 254, 228, 0.14000000059604645)",
      "teal-alpha-6": "rgba(9, 255, 230, 0.18700000643730164)",
      "teal-alpha-7": "rgba(17, 255, 227, 0.25699999928474426)",
      "teal-alpha-8": "rgba(17, 255, 231, 0.3659999966621399)",
      "teal-alpha-9": "rgba(24, 255, 228, 0.609000027179718)",
      "teal-alpha-10": "rgba(19, 255, 231, 0.6700000166893005)",
      "teal-alpha-11": "rgba(10, 255, 231, 0.7480000257492065)",
      "teal-alpha-12": "rgba(230, 255, 249, 0.9789999723434448)",
      "green-1": "rgba(13, 25, 18, 1)",
      "green-2": "rgba(12, 31, 23, 1)",
      "green-3": "rgba(15, 41, 30, 1)",
      "green-4": "rgba(17, 49, 35, 1)",
      "green-5": "rgba(19, 57, 41, 1)",
      "green-6": "rgba(22, 68, 48, 1)",
      "green-7": "rgba(27, 84, 58, 1)",
      "green-8": "rgba(35, 110, 74, 1)",
      "green-9": "rgba(48, 164, 108, 1)",
      "green-10": "rgba(60, 177, 121, 1)",
      "green-11": "rgba(76, 195, 138, 1)",
      "green-12": "rgba(229, 251, 235, 1)",
      "green-alpha-1": "rgba(0, 0, 0, 0)",
      "green-alpha-2": "rgba(0, 247, 202, 0.02199999988079071)",
      "green-alpha-3": "rgba(42, 254, 190, 0.06599999964237213)",
      "green-alpha-4": "rgba(51, 254, 179, 0.10000000149011612)",
      "green-alpha-5": "rgba(56, 254, 181, 0.14000000059604645)",
      "green-alpha-6": "rgba(61, 255, 177, 0.18700000643730164)",
      "green-alpha-7": "rgba(67, 255, 173, 0.26100000739097595)",
      "green-alpha-8": "rgba(73, 255, 170, 0.3700000047683716)",
      "green-alpha-9": "rgba(71, 255, 166, 0.6179999709129333)",
      "green-alpha-10": "rgba(84, 255, 175, 0.6740000247955322)",
      "green-alpha-11": "rgba(98, 255, 179, 0.7310000061988831)",
      "green-alpha-12": "rgba(234, 255, 240, 0.9800000190734863)",
      "grass-1": "rgba(13, 25, 18, 1)",
      "grass-2": "rgba(15, 30, 19, 1)",
      "grass-3": "rgba(19, 40, 25, 1)",
      "grass-4": "rgba(22, 48, 29, 1)",
      "grass-5": "rgba(25, 57, 33, 1)",
      "grass-6": "rgba(29, 68, 39, 1)",
      "grass-7": "rgba(36, 85, 48, 1)",
      "grass-8": "rgba(47, 110, 59, 1)",
      "grass-9": "rgba(70, 167, 88, 1)",
      "grass-10": "rgba(85, 180, 103, 1)",
      "grass-11": "rgba(99, 193, 116, 1)",
      "grass-12": "rgba(229, 251, 235, 1)",
      "grass-alpha-1": "rgba(0, 0, 0, 0)",
      "grass-alpha-2": "rgba(104, 252, 63, 0.02199999988079071)",
      "grass-alpha-3": "rgba(104, 252, 123, 0.06599999964237213)",
      "grass-alpha-4": "rgba(103, 255, 128, 0.10000000149011612)",
      "grass-alpha-5": "rgba(99, 254, 125, 0.14000000059604645)",
      "grass-alpha-6": "rgba(99, 255, 130, 0.18700000643730164)",
      "grass-alpha-7": "rgba(101, 255, 132, 0.26100000739097595)",
      "grass-alpha-8": "rgba(105, 255, 130, 0.3700000047683716)",
      "grass-alpha-9": "rgba(105, 255, 130, 0.6179999709129333)",
      "grass-alpha-10": "rgba(120, 255, 145, 0.6740000247955322)",
      "grass-alpha-11": "rgba(131, 255, 151, 0.7310000061988831)",
      "grass-alpha-12": "rgba(234, 255, 240, 0.9800000190734863)",
      "orange-1": "rgba(31, 18, 6, 1)",
      "orange-2": "rgba(43, 20, 0, 1)",
      "orange-3": "rgba(57, 26, 3, 1)",
      "orange-4": "rgba(68, 31, 4, 1)",
      "orange-5": "rgba(79, 35, 5, 1)",
      "orange-6": "rgba(95, 42, 6, 1)",
      "orange-7": "rgba(118, 50, 5, 1)",
      "orange-8": "rgba(148, 62, 0, 1)",
      "orange-9": "rgba(247, 104, 8, 1)",
      "orange-10": "rgba(255, 128, 43, 1)",
      "orange-11": "rgba(255, 139, 62, 1)",
      "orange-12": "rgba(254, 234, 221, 1)",
      "orange-alpha-1": "rgba(0, 0, 0, 0)",
      "orange-alpha-2": "rgba(253, 55, 0, 0.05400000140070915)",
      "orange-alpha-3": "rgba(253, 84, 0, 0.11699999868869781)",
      "orange-alpha-4": "rgba(254, 97, 0, 0.16599999368190765)",
      "orange-alpha-5": "rgba(254, 98, 1, 0.2150000035762787)",
      "orange-alpha-6": "rgba(255, 101, 6, 0.28600001335144043)",
      "orange-alpha-7": "rgba(255, 100, 3, 0.3889999985694885)",
      "orange-alpha-8": "rgba(254, 102, 0, 0.5230000019073486)",
      "orange-alpha-9": "rgba(255, 107, 8, 0.9649999737739563)",
      "orange-alpha-10": "rgba(255, 132, 44, 0.9800000190734863)",
      "orange-alpha-11": "rgba(255, 140, 63, 0.9800000190734863)",
      "orange-alpha-12": "rgba(255, 238, 225, 0.9800000190734863)",
      "brown-1": "rgba(25, 21, 19, 1)",
      "brown-2": "rgba(34, 24, 19, 1)",
      "brown-3": "rgba(46, 32, 26, 1)",
      "brown-4": "rgba(54, 38, 30, 1)",
      "brown-5": "rgba(62, 44, 34, 1)",
      "brown-6": "rgba(73, 53, 40, 1)",
      "brown-7": "rgba(92, 67, 50, 1)",
      "brown-8": "rgba(119, 89, 64, 1)",
      "brown-9": "rgba(173, 127, 88, 1)",
      "brown-10": "rgba(189, 139, 96, 1)",
      "brown-11": "rgba(219, 161, 110, 1)",
      "brown-12": "rgba(250, 240, 229, 1)",
      "brown-alpha-1": "rgba(0, 0, 0, 0)",
      "brown-alpha-2": "rgba(255, 105, 19, 0.03500000014901161)",
      "brown-alpha-3": "rgba(253, 145, 99, 0.08799999952316284)",
      "brown-alpha-4": "rgba(254, 159, 108, 0.12300000339746475)",
      "brown-alpha-5": "rgba(254, 172, 114, 0.15800000727176666)",
      "brown-alpha-6": "rgba(254, 176, 121, 0.20600000023841858)",
      "brown-alpha-7": "rgba(254, 180, 126, 0.289000004529953)",
      "brown-alpha-8": "rgba(254, 188, 130, 0.40700000524520874)",
      "brown-alpha-9": "rgba(255, 186, 126, 0.6420000195503235)",
      "brown-alpha-10": "rgba(255, 187, 127, 0.7120000123977661)",
      "brown-alpha-11": "rgba(255, 187, 127, 0.8429999947547913)",
      "brown-alpha-12": "rgba(255, 245, 233, 0.9789999723434448)",
      "sky-1": "rgba(12, 24, 32, 1)",
      "sky-2": "rgba(7, 29, 42, 1)",
      "sky-3": "rgba(8, 38, 54, 1)",
      "sky-4": "rgba(8, 45, 65, 1)",
      "sky-5": "rgba(8, 53, 76, 1)",
      "sky-6": "rgba(8, 62, 89, 1)",
      "sky-7": "rgba(6, 75, 107, 1)",
      "sky-8": "rgba(0, 93, 133, 1)",
      "sky-9": "rgba(104, 221, 253, 1)",
      "sky-10": "rgba(138, 232, 255, 1)",
      "sky-11": "rgba(46, 200, 238, 1)",
      "sky-12": "rgba(234, 248, 255, 1)",
      "sky-alpha-1": "rgba(0, 0, 0, 0)",
      "sky-alpha-2": "rgba(0, 135, 254, 0.04500000178813934)",
      "sky-alpha-3": "rgba(0, 165, 254, 0.0989999994635582)",
      "sky-alpha-4": "rgba(0, 166, 255, 0.14800000190734863)",
      "sky-alpha-5": "rgba(0, 169, 254, 0.1979999989271164)",
      "sky-alpha-6": "rgba(0, 174, 254, 0.25600001215934753)",
      "sky-alpha-7": "rgba(0, 174, 254, 0.3370000123977661)",
      "sky-alpha-8": "rgba(0, 174, 255, 0.453000009059906)",
      "sky-alpha-9": "rgba(106, 225, 255, 0.9800000190734863)",
      "sky-alpha-10": "rgba(141, 236, 255, 0.9800000190734863)",
      "sky-alpha-11": "rgba(49, 214, 255, 0.9240000247955322)",
      "sky-alpha-12": "rgba(239, 253, 255, 0.9800000190734863)",
      "mint-1": "rgba(8, 25, 23, 1)",
      "mint-2": "rgba(5, 32, 30, 1)",
      "mint-3": "rgba(5, 41, 38, 1)",
      "mint-4": "rgba(4, 49, 44, 1)",
      "mint-5": "rgba(3, 58, 52, 1)",
      "mint-6": "rgba(1, 69, 61, 1)",
      "mint-7": "rgba(0, 86, 74, 1)",
      "mint-8": "rgba(0, 109, 91, 1)",
      "mint-9": "rgba(112, 225, 200, 1)",
      "mint-10": "rgba(149, 243, 217, 1)",
      "mint-11": "rgba(37, 208, 171, 1)",
      "mint-12": "rgba(231, 252, 247, 1)",
      "mint-alpha-1": "rgba(0, 0, 0, 0)",
      "mint-alpha-2": "rgba(0, 251, 251, 0.03099999949336052)",
      "mint-alpha-3": "rgba(0, 253, 237, 0.07000000029802322)",
      "mint-alpha-4": "rgba(0, 253, 224, 0.10499999672174454)",
      "mint-alpha-5": "rgba(0, 254, 224, 0.14399999380111694)",
      "mint-alpha-6": "rgba(0, 254, 220, 0.19200000166893005)",
      "mint-alpha-7": "rgba(0, 254, 216, 0.26600000262260437)",
      "mint-alpha-8": "rgba(0, 254, 208, 0.3659999966621399)",
      "mint-alpha-9": "rgba(128, 255, 227, 0.8700000047683716)",
      "mint-alpha-10": "rgba(157, 255, 227, 0.9480000138282776)",
      "mint-alpha-11": "rgba(44, 255, 209, 0.7960000038146973)",
      "mint-alpha-12": "rgba(236, 255, 251, 0.9800000190734863)",
      "lime-1": "rgba(20, 24, 7, 1)",
      "lime-2": "rgba(24, 29, 8, 1)",
      "lime-3": "rgba(30, 38, 13, 1)",
      "lime-4": "rgba(37, 46, 15, 1)",
      "lime-5": "rgba(43, 55, 17, 1)",
      "lime-6": "rgba(52, 66, 19, 1)",
      "lime-7": "rgba(65, 82, 21, 1)",
      "lime-8": "rgba(83, 103, 22, 1)",
      "lime-9": "rgba(153, 213, 42, 1)",
      "lime-10": "rgba(196, 240, 66, 1)",
      "lime-11": "rgba(135, 190, 34, 1)",
      "lime-12": "rgba(239, 251, 221, 1)",
      "lime-alpha-1": "rgba(20, 24, 7, 0)",
      "lime-alpha-2": "rgba(202, 251, 53, 0.02199999988079071)",
      "lime-alpha-3": "rgba(184, 253, 106, 0.061000000685453415)",
      "lime-alpha-4": "rgba(196, 253, 91, 0.09600000083446503)",
      "lime-alpha-5": "rgba(190, 254, 81, 0.13500000536441803)",
      "lime-alpha-6": "rgba(197, 255, 73, 0.18199999630451202)",
      "lime-alpha-7": "rgba(200, 254, 63, 0.25200000405311584)",
      "lime-alpha-8": "rgba(204, 255, 51, 0.34200000762939453)",
      "lime-alpha-9": "rgba(183, 255, 50, 0.8190000057220459)",
      "lime-alpha-10": "rgba(209, 255, 70, 0.9359999895095825)",
      "lime-alpha-11": "rgba(181, 255, 44, 0.718999981880188)",
      "lime-alpha-12": "rgba(244, 255, 225, 0.9800000190734863)",
      "yellow-1": "rgba(28, 21, 0, 1)",
      "yellow-2": "rgba(34, 26, 0, 1)",
      "yellow-3": "rgba(44, 33, 0, 1)",
      "yellow-4": "rgba(53, 40, 0, 1)",
      "yellow-5": "rgba(62, 48, 0, 1)",
      "yellow-6": "rgba(73, 60, 0, 1)",
      "yellow-7": "rgba(89, 74, 5, 1)",
      "yellow-8": "rgba(112, 94, 0, 1)",
      "yellow-9": "rgba(245, 217, 10, 1)",
      "yellow-10": "rgba(255, 239, 92, 1)",
      "yellow-11": "rgba(240, 192, 0, 1)",
      "yellow-12": "rgba(255, 250, 209, 1)",
      "yellow-alpha-1": "rgba(20, 24, 7, 0)",
      "yellow-alpha-2": "rgba(250, 205, 0, 0.027000000700354576)",
      "yellow-alpha-3": "rgba(253, 190, 0, 0.07100000232458115)",
      "yellow-alpha-4": "rgba(253, 194, 0, 0.11100000143051147)",
      "yellow-alpha-5": "rgba(254, 199, 0, 0.15000000596046448)",
      "yellow-alpha-6": "rgba(254, 216, 0, 0.19900000095367432)",
      "yellow-alpha-7": "rgba(255, 219, 19, 0.26899999380111694)",
      "yellow-alpha-8": "rgba(254, 216, 0, 0.3709999918937683)",
      "yellow-alpha-9": "rgba(255, 226, 10, 0.9559999704360962)",
      "yellow-alpha-10": "rgba(255, 244, 94, 0.9800000190734863)",
      "yellow-alpha-11": "rgba(255, 204, 0, 0.9340000152587891)",
      "yellow-alpha-12": "rgba(255, 255, 213, 0.9800000190734863)",
      "amber-1": "rgba(31, 19, 0, 1)",
      "amber-2": "rgba(39, 23, 0, 1)",
      "amber-3": "rgba(52, 28, 0, 1)",
      "amber-4": "rgba(63, 34, 0, 1)",
      "amber-5": "rgba(74, 41, 0, 1)",
      "amber-6": "rgba(87, 51, 0, 1)",
      "amber-7": "rgba(105, 63, 5, 1)",
      "amber-8": "rgba(130, 78, 0, 1)",
      "amber-9": "rgba(255, 178, 36, 1)",
      "amber-10": "rgba(255, 203, 71, 1)",
      "amber-11": "rgba(241, 161, 13, 1)",
      "amber-12": "rgba(254, 243, 221, 1)",
      "amber-alpha-1": "rgba(20, 24, 7, 0)",
      "amber-alpha-2": "rgba(253, 131, 0, 0.035999998450279236)",
      "amber-alpha-3": "rgba(254, 115, 0, 0.09399999678134918)",
      "amber-alpha-4": "rgba(255, 123, 0, 0.14300000667572021)",
      "amber-alpha-5": "rgba(255, 132, 0, 0.19200000166893005)",
      "amber-alpha-6": "rgba(255, 149, 0, 0.25)",
      "amber-alpha-7": "rgba(255, 151, 15, 0.3310000002384186)",
      "amber-alpha-8": "rgba(255, 153, 0, 0.44200000166893005)",
      "amber-alpha-9": "rgba(255, 182, 37, 0.9800000190734863)",
      "amber-alpha-10": "rgba(255, 206, 72, 0.9800000190734863)",
      "amber-alpha-11": "rgba(255, 171, 14, 0.9380000233650208)",
      "amber-alpha-12": "rgba(255, 248, 225, 0.9800000190734863)",
      "gray-1": "rgba(22, 22, 22, 1)",
      "gray-2": "rgba(28, 28, 28, 1)",
      "gray-3": "rgba(35, 35, 35, 1)",
      "gray-4": "rgba(40, 40, 40, 1)",
      "gray-5": "rgba(46, 46, 46, 1)",
      "gray-6": "rgba(52, 52, 52, 1)",
      "gray-7": "rgba(62, 62, 62, 1)",
      "gray-8": "rgba(80, 80, 80, 1)",
      "gray-9": "rgba(112, 112, 112, 1)",
      "gray-10": "rgba(126, 126, 126, 1)",
      "gray-11": "rgba(160, 160, 160, 1)",
      "gray-12": "rgba(237, 237, 237, 1)",
      "gray-alpha-1": "rgba(255, 255, 255, 0)",
      "gray-alpha-2": "rgba(255, 255, 255, 0.026000000536441803)",
      "gray-alpha-3": "rgba(255, 255, 255, 0.0560000017285347)",
      "gray-alpha-4": "rgba(255, 255, 255, 0.07699999958276749)",
      "gray-alpha-5": "rgba(255, 255, 255, 0.10300000011920929)",
      "gray-alpha-6": "rgba(255, 255, 255, 0.1289999932050705)",
      "gray-alpha-7": "rgba(255, 255, 255, 0.1720000058412552)",
      "gray-alpha-8": "rgba(255, 255, 255, 0.24899999797344208)",
      "gray-alpha-9": "rgba(255, 255, 255, 0.38600000739097595)",
      "gray-alpha-10": "rgba(255, 255, 255, 0.44600000977516174)",
      "gray-alpha-11": "rgba(255, 255, 255, 0.5920000076293945)",
      "gray-alpha-12": "rgba(255, 255, 255, 0.9229999780654907)",
      "mauve-1": "rgba(22, 22, 24, 1)",
      "mauve-2": "rgba(28, 28, 31, 1)",
      "mauve-3": "rgba(35, 35, 38, 1)",
      "mauve-4": "rgba(40, 40, 44, 1)",
      "mauve-5": "rgba(46, 46, 50, 1)",
      "mauve-6": "rgba(52, 52, 58, 1)",
      "mauve-7": "rgba(62, 62, 68, 1)",
      "mauve-8": "rgba(80, 79, 87, 1)",
      "mauve-9": "rgba(112, 111, 120, 1)",
      "mauve-10": "rgba(126, 125, 134, 1)",
      "mauve-11": "rgba(160, 159, 166, 1)",
      "mauve-12": "rgba(237, 237, 239, 1)",
      "mauve-alpha-1": "rgba(0, 0, 0, 0)",
      "mauve-alpha-2": "rgba(215, 215, 250, 0.03099999949336052)",
      "mauve-alpha-3": "rgba(235, 235, 254, 0.061000000685453415)",
      "mauve-alpha-4": "rgba(229, 229, 254, 0.08699999749660492)",
      "mauve-alpha-5": "rgba(234, 234, 254, 0.11299999803304672)",
      "mauve-alpha-6": "rgba(225, 225, 254, 0.14800000190734863)",
      "mauve-alpha-7": "rgba(232, 232, 254, 0.19099999964237213)",
      "mauve-alpha-8": "rgba(234, 231, 255, 0.27300000190734863)",
      "mauve-alpha-9": "rgba(238, 236, 255, 0.41600000858306885)",
      "mauve-alpha-10": "rgba(240, 238, 255, 0.47699999809265137)",
      "mauve-alpha-11": "rgba(247, 245, 255, 0.6150000095367432)",
      "mauve-alpha-12": "rgba(253, 253, 255, 0.9309999942779541)",
      "sage-1": "rgba(20, 23, 22, 1)",
      "sage-2": "rgba(25, 29, 27, 1)",
      "sage-3": "rgba(31, 36, 33, 1)",
      "sage-4": "rgba(37, 42, 39, 1)",
      "sage-5": "rgba(42, 47, 44, 1)",
      "sage-6": "rgba(48, 54, 51, 1)",
      "sage-7": "rgba(57, 63, 60, 1)",
      "sage-8": "rgba(74, 82, 78, 1)",
      "sage-9": "rgba(102, 115, 109, 1)",
      "sage-10": "rgba(117, 129, 123, 1)",
      "sage-11": "rgba(153, 162, 158, 1)",
      "sage-12": "rgba(236, 238, 237, 1)",
      "sage-alpha-1": "rgba(0, 0, 0, 0)",
      "sage-alpha-2": "rgba(212, 254, 214, 0.026000000536441803)",
      "sage-alpha-3": "rgba(213, 251, 215, 0.05700000002980232)",
      "sage-alpha-4": "rgba(227, 255, 229, 0.0820000022649765)",
      "sage-alpha-5": "rgba(232, 254, 234, 0.10400000214576721)",
      "sage-alpha-6": "rgba(229, 254, 238, 0.1340000033378601)",
      "sage-alpha-7": "rgba(234, 254, 242, 0.17299999296665192)",
      "sage-alpha-8": "rgba(232, 254, 242, 0.2549999952316284)",
      "sage-alpha-9": "rgba(227, 255, 241, 0.3970000147819519)",
      "sage-alpha-10": "rgba(232, 255, 243, 0.4569999873638153)",
      "sage-alpha-11": "rgba(242, 255, 249, 0.6000000238418579)",
      "sage-alpha-12": "rgba(253, 255, 254, 0.9269999861717224)",
      "olive-1": "rgba(21, 23, 21, 1)",
      "olive-2": "rgba(26, 29, 25, 1)",
      "olive-3": "rgba(32, 36, 31, 1)",
      "olive-4": "rgba(38, 41, 37, 1)",
      "olive-5": "rgba(43, 47, 42, 1)",
      "olive-6": "rgba(49, 53, 48, 1)",
      "olive-7": "rgba(59, 63, 58, 1)",
      "olive-8": "rgba(76, 81, 75, 1)",
      "olive-9": "rgba(104, 115, 102, 1)",
      "olive-10": "rgba(119, 129, 117, 1)",
      "olive-11": "rgba(154, 162, 153, 1)",
      "olive-12": "rgba(236, 238, 236, 1)",
      "olive-alpha-1": "rgba(0, 0, 0, 0)",
      "olive-alpha-2": "rgba(213, 254, 175, 0.026000000536441803)",
      "olive-alpha-3": "rgba(214, 251, 196, 0.05700000002980232)",
      "olive-alpha-4": "rgba(239, 254, 226, 0.07800000160932541)",
      "olive-alpha-5": "rgba(233, 254, 223, 0.10400000214576721)",
      "olive-alpha-6": "rgba(236, 254, 229, 0.12999999523162842)",
      "olive-alpha-7": "rgba(241, 254, 235, 0.17299999296665192)",
      "olive-alpha-8": "rgba(241, 255, 237, 0.25)",
      "olive-alpha-9": "rgba(230, 255, 225, 0.3970000147819519)",
      "olive-alpha-10": "rgba(235, 255, 231, 0.4569999873638153)",
      "olive-alpha-11": "rgba(243, 255, 241, 0.6000000238418579)",
      "olive-alpha-12": "rgba(253, 255, 253, 0.9269999861717224)",
      "sand-1": "rgba(22, 22, 21, 1)",
      "sand-2": "rgba(28, 28, 26, 1)",
      "sand-3": "rgba(35, 35, 32, 1)",
      "sand-4": "rgba(40, 40, 38, 1)",
      "sand-5": "rgba(46, 46, 43, 1)",
      "sand-6": "rgba(53, 52, 49, 1)",
      "sand-7": "rgba(62, 62, 58, 1)",
      "sand-8": "rgba(81, 80, 75, 1)",
      "sand-9": "rgba(113, 112, 105, 1)",
      "sand-10": "rgba(127, 126, 119, 1)",
      "sand-11": "rgba(161, 160, 154, 1)",
      "sand-12": "rgba(237, 237, 236, 1)",
      "sand-alpha-1": "rgba(0, 0, 0, 0)",
      "sand-alpha-2": "rgba(253, 253, 213, 0.026000000536441803)",
      "sand-alpha-3": "rgba(254, 254, 218, 0.0560000017285347)",
      "sand-alpha-4": "rgba(253, 253, 239, 0.07800000160932541)",
      "sand-alpha-5": "rgba(253, 253, 233, 0.10400000214576721)",
      "sand-alpha-6": "rgba(253, 246, 230, 0.1340000033378601)",
      "sand-alpha-7": "rgba(255, 255, 236, 0.1720000058412552)",
      "sand-alpha-8": "rgba(254, 251, 234, 0.2540000081062317)",
      "sand-alpha-9": "rgba(255, 252, 236, 0.39100000262260437)",
      "sand-alpha-10": "rgba(255, 253, 238, 0.45100000500679016)",
      "sand-alpha-11": "rgba(255, 253, 244, 0.597000002861023)",
      "sand-alpha-12": "rgba(255, 255, 254, 0.9229999780654907)",
      "bronze-1": "rgba(25, 21, 20, 1)",
      "bronze-2": "rgba(31, 25, 23, 1)",
      "bronze-3": "rgba(42, 33, 31, 1)",
      "bronze-4": "rgba(51, 40, 36, 1)",
      "bronze-5": "rgba(59, 46, 41, 1)",
      "bronze-6": "rgba(69, 53, 48, 1)",
      "bronze-7": "rgba(87, 67, 60, 1)",
      "bronze-8": "rgba(116, 89, 78, 1)",
      "bronze-9": "rgba(161, 128, 114, 1)",
      "bronze-10": "rgba(176, 140, 125, 1)",
      "bronze-11": "rgba(203, 163, 147, 1)",
      "bronze-12": "rgba(249, 237, 231, 1)",
      "bronze-alpha-1": "rgba(0, 0, 0, 0)",
      "bronze-alpha-2": "rgba(247, 170, 131, 0.027000000700354576)",
      "bronze-alpha-3": "rgba(255, 183, 169, 0.07400000095367432)",
      "bronze-alpha-4": "rgba(253, 188, 160, 0.11400000005960464)",
      "bronze-alpha-5": "rgba(255, 190, 162, 0.14800000190734863)",
      "bronze-alpha-6": "rgba(254, 188, 166, 0.19200000166893005)",
      "bronze-alpha-7": "rgba(255, 191, 168, 0.27000001072883606)",
      "bronze-alpha-8": "rgba(255, 193, 166, 0.3959999978542328)",
      "bronze-alpha-9": "rgba(255, 202, 179, 0.5920000076293945)",
      "bronze-alpha-10": "rgba(255, 202, 180, 0.6570000052452087)",
      "bronze-alpha-11": "rgba(255, 204, 184, 0.7739999890327454)",
      "bronze-alpha-12": "rgba(255, 243, 237, 0.9739999771118164)",
      "gold-1": "rgba(23, 22, 19, 1)",
      "gold-2": "rgba(28, 26, 21, 1)",
      "gold-3": "rgba(38, 35, 28, 1)",
      "gold-4": "rgba(46, 42, 33, 1)",
      "gold-5": "rgba(53, 48, 38, 1)",
      "gold-6": "rgba(62, 56, 44, 1)",
      "gold-7": "rgba(80, 71, 55, 1)",
      "gold-8": "rgba(107, 93, 72, 1)",
      "gold-9": "rgba(151, 131, 101, 1)",
      "gold-10": "rgba(165, 144, 113, 1)",
      "gold-11": "rgba(191, 168, 136, 1)",
      "gold-12": "rgba(247, 244, 231, 1)",
      "gold-alpha-1": "rgba(0, 0, 0, 0)",
      "gold-alpha-2": "rgba(250, 203, 110, 0.02199999988079071)",
      "gold-alpha-3": "rgba(254, 222, 157, 0.06499999761581421)",
      "gold-alpha-4": "rgba(253, 222, 159, 0.10000000149011612)",
      "gold-alpha-5": "rgba(254, 221, 165, 0.12999999523162842)",
      "gold-alpha-6": "rgba(254, 223, 167, 0.16899999976158142)",
      "gold-alpha-7": "rgba(255, 221, 166, 0.2460000067949295)",
      "gold-alpha-8": "rgba(254, 217, 165, 0.3630000054836273)",
      "gold-alpha-9": "rgba(255, 220, 167, 0.5519999861717224)",
      "gold-alpha-10": "rgba(255, 220, 172, 0.6129999756813049)",
      "gold-alpha-11": "rgba(255, 224, 180, 0.7250000238418579)",
      "gold-alpha-12": "rgba(255, 252, 238, 0.9660000205039978)",
      "black-1": "rgba(0, 0, 0, 0.012000000104308128)",
      "black-2": "rgba(0, 0, 0, 0.027000000700354576)",
      "black-3": "rgba(0, 0, 0, 0.04699999839067459)",
      "black-4": "rgba(0, 0, 0, 0.07100000232458115)",
      "black-5": "rgba(0, 0, 0, 0.09000000357627869)",
      "black-6": "rgba(0, 0, 0, 0.11400000005960464)",
      "black-7": "rgba(0, 0, 0, 0.14100000262260437)",
      "black-8": "rgba(0, 0, 0, 0.2199999988079071)",
      "black-9": "rgba(0, 0, 0, 0.4390000104904175)",
      "black-10": "rgba(0, 0, 0, 0.4779999852180481)",
      "black-11": "rgba(0, 0, 0, 0.5649999976158142)",
      "black-12": "rgba(0, 0, 0, 0.9100000262260437)",
      "white-1": "rgba(255, 255, 255, 0)",
      "white-2": "rgba(255, 255, 255, 0.013000000268220901)",
      "white-3": "rgba(255, 255, 255, 0.03400000184774399)",
      "white-4": "rgba(255, 255, 255, 0.0560000017285347)",
      "white-5": "rgba(255, 255, 255, 0.0860000029206276)",
      "white-6": "rgba(255, 255, 255, 0.12399999797344208)",
      "white-7": "rgba(255, 255, 255, 0.17599999904632568)",
      "white-8": "rgba(255, 255, 255, 0.24899999797344208)",
      "white-9": "rgba(255, 255, 255, 0.38600000739097595)",
      "white-10": "rgba(255, 255, 255, 0.44600000977516174)",
      "white-11": "rgba(255, 255, 255, 0.5920000076293945)",
      "white-12": "rgba(255, 255, 255, 0.9229999780654907)",
    },
  },
  Vs = {
    default: "var(--slate-7)",
    base: "var(--gray-1)",
    secondary: "var(--slate-6)",
    "base-subtle": "var(--slate-2)",
    disabled: "var(--slate-5)",
    "component-text-disabled": "var(--slate-8)",
    active: "var(--slate-4)",
    "component-text-default": "var(--slate-12)",
    "component-text-secondary": "var(--slate-11)",
    "component-text-tertiary": "var(--slate-10)",
    info: "var(--cyan-9)",
    success: "var(--green-9)",
    warning: "var(--amber-9)",
    danger: "var(--red-9)",
    link: "var(--blue-9)",
    invert: "var(--gray-1)",
    tertiary: "var(--slate-5)",
    focus: "var(--blue-9)",
    "component-border-active": "var(--blue-9)",
    "component-border-disabled": "var(--slate-5)",
    placeholder: "var(--slate-8)",
    primary: "var(--slate-12)",
    "component-border-focus": "var(--blue-9)",
    "component-border-default": "var(--slate-7)",
    "component-border-secondary": "var(--slate-6)",
    "component-border-tertiary": "var(--slate-5)",
    "component-raduis": "var(--rounded-md)",
  },
  Bs = {
    "size-8": "20px",
    "size-7": "16px",
    "size-6": "12px",
    "size-5-xl": "64px",
    "size-27": "260px",
    "size-3-xl": "48px",
    "size-2-xl": "40px",
    "size-33": "380px",
    "size-xl": "32px",
    "size-6-xl": "72px",
    "size-5": "8px",
    "size-none": "0px",
    "size-0": "0px",
    "size-4": "6px",
    "size-xs": "4px",
    "size-39": "500px",
    "size-25": "220px",
    "size-38": "480px",
    "size-18": "88px",
    "size-40": "520px",
    "size-37": "460px",
    "size-28": "280px",
    "size-36": "440px",
    "size-35": "420px",
    "size-2": "2px",
    "size-sm": "8px",
    "size-3": "4px",
    "size-32": "360px",
    "size-34": "400px",
    "size-31": "340px",
    "size-30": "320px",
    "size-10": "28px",
    "size-md": "16px",
    "size-22": "140px",
    "size-21": "128px",
    "size-12": "40px",
    "size-20": "104px",
    "size-19": "96px",
    "size-26": "240px",
    "size-14": "56px",
    "size-24": "200px",
    "size-9": "24px",
    "size-lg": "24px",
    "size-29": "300px",
    "size-17": "80px",
    "size-16": "72px",
    "size-4-xl": "56px",
    "size-15": "64px",
    "size-13": "48px",
    "size-11": "32px",
    "size-23": "160px",
    "size-1": "1px",
    "size-rounded-none": "0px",
    "size-rounded-full": "1000px",
    "size-rounded-md": "4px",
    "size-rounded-sm": "2px",
    "size-rounded-lg": "8px",
    "size-rounded-lx": "16px",
  },
  Hs = {
    "typography-font-type-system":
      "Inter, system-ui, Avenir, Helvetica, Arial, sans-serif",
    "typography-font-paragraph-spacing-none": "0",
    "typography-font-letter-spacing-tighter": "0",
    "typography-font-size-3-xl": "33.18000030517578px",
    "typography-font-size-xl": "23.040000915527344px",
    "typography-font-size-lg": "19.200000762939453px",
    "typography-font-size-4-xl": "39.810001373291016px",
    "typography-font-size-5-xl": "47.779998779296875px",
    "typography-font-line-height-none": "0",
    "typography-font-size-sm": "13.329999923706055px",
    "typography-font-h-3": "2rem",
    "typography-font-size-xs": "11.109999656677246px",
    "typography-font-weight-bold": "700",
    "typography-font-rem-9": "2.25rem",
    "typography-font-line-height-tight": "24",
    "typography-font-size-base": "16px",
    "typography-font-rem-7": "1.75rem",
    "typography-font-rem-5": "1.25rem",
    "typography-font-body": "1rem",
    "typography-font-rem-38": "9.5rem",
    "typography-font-rem-22": " 5.5rem",
    "typography-font-rem-35": "8.75rem",
    "typography-font-rem-6": "1.5rem",
    "typography-font-rem-23": "5.75rem",
    "typography-font-rem-31": "7.75rem",
    "typography-font-type-sans":
      "Inter, system-ui, Avenir, Helvetica, Arial, sans-serif",
    "typography-font-rem-11": "2.75rem",
    "typography-font-rem-30": "7.5rem",
    "typography-font-h-4": "1.5rem",
    "typography-font-rem-4": "1rem",
    "typography-font-rem-3": "0.75rem",
    "typography-font-rem-39": "9.75rem",
    "typography-font-rem-34": "8.5rem",
    "typography-font-rem-24": "6rem",
    "typography-font-rem-28": "7rem",
    "typography-font-rem-1": "0.25rem",
    "typography-font-rem-37": "9.25rem",
    "typography-font-weight-normal": "400",
    "typography-font-rem-25": "6.25rem",
    "typography-font-rem-18": "4.5rem",
    "typography-font-rem-10": "2.5rem",
    "typography-font-rem-19": "4.75rem",
    "typography-font-rem-17": "4.25rem",
    "typography-font-rem-29": "7.25rem",
    "typography-font-h-1": "3rem",
    "typography-font-rem-14": "3.5rem",
    "typography-font-size-2-xl": "27.649999618530273px",
    "typography-font-rem-26": "6.5rem",
    "typography-font-paragraph-indent-none": "0",
    "typography-font-type-serif":
      "Georgia, Cambria, Times New Roman, Times, serif",
    "typography-font-rem-16": "4rem",
    "typography-font-rem-36": "9rem",
    "typography-font-rem-32": "8rem",
    "typography-font-rem-33": "8.25rem",
    "typography-font-rem-15": "3.75rem",
    "typography-font-rem-20": "5rem",
    "typography-font-caption": "0.75rem",
    "typography-font-footnote": "0.8rem",
    "typography-font-rem-13": "3.25rem",
    "typography-font-rem-27": "6.75rem",
    "typography-font-h-2": "2.5rem",
    "typography-font-h-5": "1.25rem",
    "typography-font-type-code":
      "Menlo, Monaco, Consolas, Liberation Mono, Courier New,     monospace",
    "typography-font-rem-8": "2rem",
    "typography-font-rem-12": "3rem",
    "typography-font-rem-2": " 0.5rem",
    "typography-font-rem-0": "0",
    "typography-font-rem-21": " 5.25rem",
    "typography-font-weight-medium": "500",
  },
  $s = () =>
    R.jsx("div", {
      className:
        "fixed top-4 right-4 bg-black text-white px-4 py-2 rounded shadow-lg",
      children: "Copied to clipboard",
    }),
  Rn = (L) => {
    const { title: F, data: d, type: Ee, hash: U } = L,
      [W, oe] = Mu.useState(null),
      ie = (O) => {
        console.log(O),
          navigator.clipboard.writeText(O),
          oe(!0),
          setTimeout(() => {
            oe(null);
          }, 1e3);
      };
    return R.jsxs("article", {
      className: "flex flex-col gap-4",
      id: U,
      children: [
        W && R.jsx($s, {}),
        R.jsx("h2", { className: "text-3xl", children: F }),
        R.jsxs("table", {
          className: "table-auto w-full",
          children: [
            R.jsxs("thead", {
              className: "text-left",
              children: [
                R.jsx("th", { className: "p-2 bg-base", children: "Token" }),
                R.jsx("th", { className: "p-2 bg-base", children: "Value" }),
              ],
            }),
            R.jsx("tbody", {
              children: Object.keys(d).map((O) =>
                R.jsxs(
                  "tr",
                  {
                    className: "even:bg-secondary",
                    children: [
                      R.jsx("td", {
                        onClick: () => ie(`var(--${O})`),
                        className:
                          "p-2 font-mono cursor-pointer hover:underline",
                        children: `var(--${O})`,
                      }),
                      R.jsx("td", {
                        className: "p-2 cursor-pointer hover:underline",
                        onClick: () => ie(d[O]),
                        children: R.jsxs("div", {
                          className: "flex gap-2 items-center",
                          children: [
                            R.jsx("span", {
                              className: "w-10 h-10 rounded-md",
                              style: { background: d[O] },
                            }),
                            R.jsx("span", {
                              className: "font-mono",
                              children: d[O],
                            }),
                          ],
                        }),
                      }),
                    ],
                  },
                  O,
                ),
              ),
            }),
          ],
        }),
      ],
    });
  },
  Ws = ({ alt: L }) => {
    const F = "dark:fill-zinc-100 fill-zinc-900";
    return R.jsx("div", {
      className: "w-[80px]",
      title: L,
      children: R.jsxs("svg", {
        className: "w-full h-full",
        width: "100",
        height: "50",
        viewBox: "0 0 100 50",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
          R.jsx("path", {
            className: F,
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M28.169 0L56.338 49.2537H0L28.169 0ZM13.2639 41.5578L28.169 15.4962L43.0741 41.5578H13.2639Z",
          }),
          R.jsx("path", {
            className: F,
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M100 24.6269C100 38.2279 88.9648 49.2537 75.3521 49.2537C61.7395 49.2537 50.7042 38.2279 50.7042 24.6269C50.7042 11.0258 61.7395 0 75.3521 0C88.9648 0 100 11.0258 100 24.6269ZM92.3077 24.6269C92.3077 33.968 84.726 41.5578 75.3521 41.5578C65.9782 41.5578 58.3965 33.968 58.3965 24.6269C58.3965 15.2857 65.9782 7.6959 75.3521 7.6959C84.726 7.6959 92.3077 15.2857 92.3077 24.6269Z",
          }),
        ],
      }),
    });
  };
function Qs() {
  return R.jsxs("main", {
    className: "w-3/4 m-auto",
    children: [
      R.jsxs("header", {
        className:
          "sticky top-0 bg-base pb-8 pt-4 flex justify-between items-center",
        children: [
          R.jsx("a", {
            href: "/ao-design-tokens/",
            children: R.jsx(Ws, { alt: "AO Design Tokens" }),
          }),
          R.jsxs("nav", {
            className: "flex gap-6",
            children: [
              R.jsx("span", {
                className: "opacity-50",
                children: "Token Groups",
              }),
              R.jsx("a", {
                className: "font-bold",
                href: "#light",
                children: "Foundation Light",
              }),
              R.jsx("a", {
                className: "font-bold",
                href: "#dark",
                children: "Foundation Dark",
              }),
              R.jsx("a", {
                className: "font-bold",
                href: "#semantic",
                children: "Semantic",
              }),
              R.jsx("a", {
                className: "font-bold",
                href: "#size",
                children: "Size",
              }),
              R.jsx("a", {
                className: "font-bold",
                href: "#typography",
                children: "Typography",
              }),
              R.jsx("a", {
                className: "font-bold",
                href: "#effects",
                children: "Effects",
              }),
            ],
          }),
        ],
      }),
      R.jsxs("section", {
        className: "flex flex-col gap-4",
        children: [
          R.jsx(Rn, {
            title: "Foundation Light",
            data: ju.light,
            type: "foundation",
            hash: "light",
          }),
          R.jsx(Rn, {
            title: "Foundation Dark",
            data: ju.dark,
            type: "foundation",
            hash: "dark",
          }),
          R.jsx(Rn, {
            title: "Semantic",
            data: Vs,
            type: "semantic",
            hash: "semantic",
          }),
          R.jsx(Rn, { title: "Size", data: Bs, type: "size", hash: "size" }),
          R.jsx(Rn, {
            title: "Typography",
            data: Hs,
            type: "typography",
            hash: "typography",
          }),
          R.jsx(Rn, {
            title: "Effects",
            data: As,
            type: "effects",
            hash: "effects",
          }),
        ],
      }),
    ],
  });
}
Us.createRoot(document.getElementById("root")).render(
  R.jsx(Mu.StrictMode, { children: R.jsx(Qs, {}) }),
);
