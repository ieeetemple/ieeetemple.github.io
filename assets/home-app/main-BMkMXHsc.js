function tp(m) {
  return m && m.__esModule && Object.prototype.hasOwnProperty.call(m, "default") ? m.default : m;
}
var fo = { exports: {} }, yi = {};
var M_;
function ep() {
  if (M_) return yi;
  M_ = 1;
  var m = /* @__PURE__ */ Symbol.for("react.transitional.element"), u = /* @__PURE__ */ Symbol.for("react.fragment");
  function c(f, r, s) {
    var h = null;
    if (s !== void 0 && (h = "" + s), r.key !== void 0 && (h = "" + r.key), "key" in r) {
      s = {};
      for (var d in r)
        d !== "key" && (s[d] = r[d]);
    } else s = r;
    return r = s.ref, {
      $$typeof: m,
      type: f,
      key: h,
      ref: r !== void 0 ? r : null,
      props: s
    };
  }
  return yi.Fragment = u, yi.jsx = c, yi.jsxs = c, yi;
}
var D_;
function lp() {
  return D_ || (D_ = 1, fo.exports = ep()), fo.exports;
}
var yt = lp(), co = { exports: {} }, pi = {}, ro = { exports: {} }, so = {};
var N_;
function np() {
  return N_ || (N_ = 1, (function(m) {
    function u(L, K) {
      var W = L.length;
      L.push(K);
      t: for (; 0 < W; ) {
        var lt = W - 1 >>> 1, $ = L[lt];
        if (0 < r($, K))
          L[lt] = K, L[W] = $, W = lt;
        else break t;
      }
    }
    function c(L) {
      return L.length === 0 ? null : L[0];
    }
    function f(L) {
      if (L.length === 0) return null;
      var K = L[0], W = L.pop();
      if (W !== K) {
        L[0] = W;
        t: for (var lt = 0, $ = L.length, Dt = $ >>> 1; lt < Dt; ) {
          var pt = 2 * (lt + 1) - 1, se = L[pt], E = pt + 1, X = L[E];
          if (0 > r(se, W))
            E < $ && 0 > r(X, se) ? (L[lt] = X, L[E] = W, lt = E) : (L[lt] = se, L[pt] = W, lt = pt);
          else if (E < $ && 0 > r(X, W))
            L[lt] = X, L[E] = W, lt = E;
          else break t;
        }
      }
      return K;
    }
    function r(L, K) {
      var W = L.sortIndex - K.sortIndex;
      return W !== 0 ? W : L.id - K.id;
    }
    if (m.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var s = performance;
      m.unstable_now = function() {
        return s.now();
      };
    } else {
      var h = Date, d = h.now();
      m.unstable_now = function() {
        return h.now() - d;
      };
    }
    var g = [], y = [], v = 1, p = null, b = 3, D = !1, U = !1, S = !1, R = !1, V = typeof setTimeout == "function" ? setTimeout : null, w = typeof clearTimeout == "function" ? clearTimeout : null, Q = typeof setImmediate < "u" ? setImmediate : null;
    function Z(L) {
      for (var K = c(y); K !== null; ) {
        if (K.callback === null) f(y);
        else if (K.startTime <= L)
          f(y), K.sortIndex = K.expirationTime, u(g, K);
        else break;
        K = c(y);
      }
    }
    function G(L) {
      if (S = !1, Z(L), !U)
        if (c(g) !== null)
          U = !0, F || (F = !0, ut());
        else {
          var K = c(y);
          K !== null && ft(G, K.startTime - L);
        }
    }
    var F = !1, B = -1, H = 5, j = -1;
    function k() {
      return R ? !0 : !(m.unstable_now() - j < H);
    }
    function it() {
      if (R = !1, F) {
        var L = m.unstable_now();
        j = L;
        var K = !0;
        try {
          t: {
            U = !1, S && (S = !1, w(B), B = -1), D = !0;
            var W = b;
            try {
              e: {
                for (Z(L), p = c(g); p !== null && !(p.expirationTime > L && k()); ) {
                  var lt = p.callback;
                  if (typeof lt == "function") {
                    p.callback = null, b = p.priorityLevel;
                    var $ = lt(
                      p.expirationTime <= L
                    );
                    if (L = m.unstable_now(), typeof $ == "function") {
                      p.callback = $, Z(L), K = !0;
                      break e;
                    }
                    p === c(g) && f(g), Z(L);
                  } else f(g);
                  p = c(g);
                }
                if (p !== null) K = !0;
                else {
                  var Dt = c(y);
                  Dt !== null && ft(
                    G,
                    Dt.startTime - L
                  ), K = !1;
                }
              }
              break t;
            } finally {
              p = null, b = W, D = !1;
            }
            K = void 0;
          }
        } finally {
          K ? ut() : F = !1;
        }
      }
    }
    var ut;
    if (typeof Q == "function")
      ut = function() {
        Q(it);
      };
    else if (typeof MessageChannel < "u") {
      var st = new MessageChannel(), _t = st.port2;
      st.port1.onmessage = it, ut = function() {
        _t.postMessage(null);
      };
    } else
      ut = function() {
        V(it, 0);
      };
    function ft(L, K) {
      B = V(function() {
        L(m.unstable_now());
      }, K);
    }
    m.unstable_IdlePriority = 5, m.unstable_ImmediatePriority = 1, m.unstable_LowPriority = 4, m.unstable_NormalPriority = 3, m.unstable_Profiling = null, m.unstable_UserBlockingPriority = 2, m.unstable_cancelCallback = function(L) {
      L.callback = null;
    }, m.unstable_forceFrameRate = function(L) {
      0 > L || 125 < L ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : H = 0 < L ? Math.floor(1e3 / L) : 5;
    }, m.unstable_getCurrentPriorityLevel = function() {
      return b;
    }, m.unstable_next = function(L) {
      switch (b) {
        case 1:
        case 2:
        case 3:
          var K = 3;
          break;
        default:
          K = b;
      }
      var W = b;
      b = K;
      try {
        return L();
      } finally {
        b = W;
      }
    }, m.unstable_requestPaint = function() {
      R = !0;
    }, m.unstable_runWithPriority = function(L, K) {
      switch (L) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          L = 3;
      }
      var W = b;
      b = L;
      try {
        return K();
      } finally {
        b = W;
      }
    }, m.unstable_scheduleCallback = function(L, K, W) {
      var lt = m.unstable_now();
      switch (typeof W == "object" && W !== null ? (W = W.delay, W = typeof W == "number" && 0 < W ? lt + W : lt) : W = lt, L) {
        case 1:
          var $ = -1;
          break;
        case 2:
          $ = 250;
          break;
        case 5:
          $ = 1073741823;
          break;
        case 4:
          $ = 1e4;
          break;
        default:
          $ = 5e3;
      }
      return $ = W + $, L = {
        id: v++,
        callback: K,
        priorityLevel: L,
        startTime: W,
        expirationTime: $,
        sortIndex: -1
      }, W > lt ? (L.sortIndex = W, u(y, L), c(g) === null && L === c(y) && (S ? (w(B), B = -1) : S = !0, ft(G, W - lt))) : (L.sortIndex = $, u(g, L), U || D || (U = !0, F || (F = !0, ut()))), L;
    }, m.unstable_shouldYield = k, m.unstable_wrapCallback = function(L) {
      var K = b;
      return function() {
        var W = b;
        b = K;
        try {
          return L.apply(this, arguments);
        } finally {
          b = W;
        }
      };
    };
  })(so)), so;
}
var C_;
function ap() {
  return C_ || (C_ = 1, ro.exports = np()), ro.exports;
}
var oo = { exports: {} }, ht = {};
var R_;
function up() {
  if (R_) return ht;
  R_ = 1;
  var m = /* @__PURE__ */ Symbol.for("react.transitional.element"), u = /* @__PURE__ */ Symbol.for("react.portal"), c = /* @__PURE__ */ Symbol.for("react.fragment"), f = /* @__PURE__ */ Symbol.for("react.strict_mode"), r = /* @__PURE__ */ Symbol.for("react.profiler"), s = /* @__PURE__ */ Symbol.for("react.consumer"), h = /* @__PURE__ */ Symbol.for("react.context"), d = /* @__PURE__ */ Symbol.for("react.forward_ref"), g = /* @__PURE__ */ Symbol.for("react.suspense"), y = /* @__PURE__ */ Symbol.for("react.memo"), v = /* @__PURE__ */ Symbol.for("react.lazy"), p = /* @__PURE__ */ Symbol.for("react.activity"), b = /* @__PURE__ */ Symbol.for("react.view_transition"), D = Symbol.iterator;
  function U(E) {
    return E === null || typeof E != "object" ? null : (E = D && E[D] || E["@@iterator"], typeof E == "function" ? E : null);
  }
  var S = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, R = Object.assign, V = {};
  function w(E, X, nt) {
    this.props = E, this.context = X, this.refs = V, this.updater = nt || S;
  }
  w.prototype.isReactComponent = {}, w.prototype.setState = function(E, X) {
    if (typeof E != "object" && typeof E != "function" && E != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, E, X, "setState");
  }, w.prototype.forceUpdate = function(E) {
    this.updater.enqueueForceUpdate(this, E, "forceUpdate");
  };
  function Q() {
  }
  Q.prototype = w.prototype;
  function Z(E, X, nt) {
    this.props = E, this.context = X, this.refs = V, this.updater = nt || S;
  }
  var G = Z.prototype = new Q();
  G.constructor = Z, R(G, w.prototype), G.isPureReactComponent = !0;
  var F = Array.isArray;
  function B() {
  }
  var H = { H: null, A: null, T: null, S: null }, j = Object.prototype.hasOwnProperty;
  function k(E, X, nt) {
    var et = nt.ref;
    return {
      $$typeof: m,
      type: E,
      key: X,
      ref: et !== void 0 ? et : null,
      props: nt
    };
  }
  function it(E, X) {
    return k(E.type, X, E.props);
  }
  function ut(E) {
    return typeof E == "object" && E !== null && E.$$typeof === m;
  }
  function st(E) {
    var X = { "=": "=0", ":": "=2" };
    return "$" + E.replace(/[=:]/g, function(nt) {
      return X[nt];
    });
  }
  var _t = /\/+/g;
  function ft(E, X) {
    return typeof E == "object" && E !== null && E.key != null ? st("" + E.key) : X.toString(36);
  }
  function L(E) {
    switch (E.status) {
      case "fulfilled":
        return E.value;
      case "rejected":
        throw E.reason;
      default:
        switch (typeof E.status == "string" ? E.then(B, B) : (E.status = "pending", E.then(
          function(X) {
            E.status === "pending" && (E.status = "fulfilled", E.value = X);
          },
          function(X) {
            E.status === "pending" && (E.status = "rejected", E.reason = X);
          }
        )), E.status) {
          case "fulfilled":
            return E.value;
          case "rejected":
            throw E.reason;
        }
    }
    throw E;
  }
  function K(E, X, nt, et, vt) {
    var Ot = typeof E;
    (Ot === "undefined" || Ot === "boolean") && (E = null);
    var zt = !1;
    if (E === null) zt = !0;
    else
      switch (Ot) {
        case "bigint":
        case "string":
        case "number":
          zt = !0;
          break;
        case "object":
          switch (E.$$typeof) {
            case m:
            case u:
              zt = !0;
              break;
            case v:
              return zt = E._init, K(
                zt(E._payload),
                X,
                nt,
                et,
                vt
              );
          }
      }
    if (zt)
      return vt = vt(E), zt = et === "" ? "." + ft(E, 0) : et, F(vt) ? (nt = "", zt != null && (nt = zt.replace(_t, "$&/") + "/"), K(vt, X, nt, "", function(_l) {
        return _l;
      })) : vt != null && (ut(vt) && (vt = it(
        vt,
        nt + (vt.key == null || E && E.key === vt.key ? "" : ("" + vt.key).replace(
          _t,
          "$&/"
        ) + "/") + zt
      )), X.push(vt)), 1;
    zt = 0;
    var tt = et === "" ? "." : et + ":";
    if (F(E))
      for (var rt = 0; rt < E.length; rt++)
        et = E[rt], Ot = tt + ft(et, rt), zt += K(
          et,
          X,
          nt,
          Ot,
          vt
        );
    else if (rt = U(E), typeof rt == "function")
      for (E = rt.call(E), rt = 0; !(et = E.next()).done; )
        et = et.value, Ot = tt + ft(et, rt++), zt += K(
          et,
          X,
          nt,
          Ot,
          vt
        );
    else if (Ot === "object") {
      if (typeof E.then == "function")
        return K(
          L(E),
          X,
          nt,
          et,
          vt
        );
      throw X = String(E), Error(
        "Objects are not valid as a React child (found: " + (X === "[object Object]" ? "object with keys {" + Object.keys(E).join(", ") + "}" : X) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return zt;
  }
  function W(E, X, nt) {
    if (E == null) return E;
    var et = [], vt = 0;
    return K(E, et, "", "", function(Ot) {
      return X.call(nt, Ot, vt++);
    }), et;
  }
  function lt(E) {
    if (E._status === -1) {
      var X = E._result, nt = X();
      nt.then(
        function(et) {
          (E._status === 0 || E._status === -1) && (E._status = 1, E._result = et, nt.status === void 0 && (nt.status = "fulfilled", nt.value = et));
        },
        function(et) {
          (E._status === 0 || E._status === -1) && (E._status = 2, E._result = et, nt.status === void 0 && (nt.status = "rejected", nt.reason = et));
        }
      ), E._status === -1 && (E._status = 0, E._result = nt);
    }
    if (E._status === 1) return E._result.default;
    throw E._result;
  }
  var $ = typeof reportError == "function" ? reportError : function(E) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var X = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof E == "object" && E !== null && typeof E.message == "string" ? String(E.message) : String(E),
        error: E
      });
      if (!window.dispatchEvent(X)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", E);
      return;
    }
    console.error(E);
  };
  function Dt(E) {
    var X = H.T, nt = {};
    nt.types = X !== null ? X.types : null, H.T = nt;
    try {
      var et = E(), vt = H.S;
      vt !== null && vt(nt, et), typeof et == "object" && et !== null && typeof et.then == "function" && et.then(B, $);
    } catch (Ot) {
      $(Ot);
    } finally {
      X !== null && nt.types !== null && (X.types = nt.types), H.T = X;
    }
  }
  function pt(E) {
    var X = H.T;
    if (X !== null) {
      var nt = X.types;
      nt === null ? X.types = [E] : nt.indexOf(E) === -1 && nt.push(E);
    } else Dt(pt.bind(null, E));
  }
  var se = {
    map: W,
    forEach: function(E, X, nt) {
      W(
        E,
        function() {
          X.apply(this, arguments);
        },
        nt
      );
    },
    count: function(E) {
      var X = 0;
      return W(E, function() {
        X++;
      }), X;
    },
    toArray: function(E) {
      return W(E, function(X) {
        return X;
      }) || [];
    },
    only: function(E) {
      if (!ut(E))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return E;
    }
  };
  return ht.Activity = p, ht.Children = se, ht.Component = w, ht.Fragment = c, ht.Profiler = r, ht.PureComponent = Z, ht.StrictMode = f, ht.Suspense = g, ht.ViewTransition = b, ht.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = H, ht.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(E) {
      return H.H.useMemoCache(E);
    }
  }, ht.addTransitionType = pt, ht.cache = function(E) {
    return function() {
      return E.apply(null, arguments);
    };
  }, ht.cacheSignal = function() {
    return null;
  }, ht.cloneElement = function(E, X, nt) {
    if (E == null)
      throw Error(
        "The argument must be a React element, but you passed " + E + "."
      );
    var et = R({}, E.props), vt = E.key;
    if (X != null)
      for (Ot in X.key !== void 0 && (vt = "" + X.key), X)
        !j.call(X, Ot) || Ot === "key" || Ot === "__self" || Ot === "__source" || Ot === "ref" && X.ref === void 0 || (et[Ot] = X[Ot]);
    var Ot = arguments.length - 2;
    if (Ot === 1) et.children = nt;
    else if (1 < Ot) {
      for (var zt = Array(Ot), tt = 0; tt < Ot; tt++)
        zt[tt] = arguments[tt + 2];
      et.children = zt;
    }
    return k(E.type, vt, et);
  }, ht.createContext = function(E) {
    return E = {
      $$typeof: h,
      _currentValue: E,
      _currentValue2: E,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, E.Provider = E, E.Consumer = {
      $$typeof: s,
      _context: E
    }, E;
  }, ht.createElement = function(E, X, nt) {
    var et, vt = {}, Ot = null;
    if (X != null)
      for (et in X.key !== void 0 && (Ot = "" + X.key), X)
        j.call(X, et) && et !== "key" && et !== "__self" && et !== "__source" && (vt[et] = X[et]);
    var zt = arguments.length - 2;
    if (zt === 1) vt.children = nt;
    else if (1 < zt) {
      for (var tt = Array(zt), rt = 0; rt < zt; rt++)
        tt[rt] = arguments[rt + 2];
      vt.children = tt;
    }
    if (E && E.defaultProps)
      for (et in zt = E.defaultProps, zt)
        vt[et] === void 0 && (vt[et] = zt[et]);
    return k(E, Ot, vt);
  }, ht.createRef = function() {
    return { current: null };
  }, ht.forwardRef = function(E) {
    return { $$typeof: d, render: E };
  }, ht.isValidElement = ut, ht.lazy = function(E) {
    return {
      $$typeof: v,
      _payload: { _status: -1, _result: E },
      _init: lt
    };
  }, ht.memo = function(E, X) {
    return {
      $$typeof: y,
      type: E,
      compare: X === void 0 ? null : X
    };
  }, ht.startTransition = Dt, ht.unstable_useCacheRefresh = function() {
    return H.H.useCacheRefresh();
  }, ht.use = function(E) {
    return H.H.use(E);
  }, ht.useActionState = function(E, X, nt) {
    return H.H.useActionState(E, X, nt);
  }, ht.useCallback = function(E, X) {
    return H.H.useCallback(E, X);
  }, ht.useContext = function(E) {
    return H.H.useContext(E);
  }, ht.useDebugValue = function() {
  }, ht.useDeferredValue = function(E, X) {
    return H.H.useDeferredValue(E, X);
  }, ht.useEffect = function(E, X) {
    return H.H.useEffect(E, X);
  }, ht.useEffectEvent = function(E) {
    return H.H.useEffectEvent(E);
  }, ht.useId = function() {
    return H.H.useId();
  }, ht.useImperativeHandle = function(E, X, nt) {
    return H.H.useImperativeHandle(E, X, nt);
  }, ht.useInsertionEffect = function(E, X) {
    return H.H.useInsertionEffect(E, X);
  }, ht.useLayoutEffect = function(E, X) {
    return H.H.useLayoutEffect(E, X);
  }, ht.useMemo = function(E, X) {
    return H.H.useMemo(E, X);
  }, ht.useOptimistic = function(E, X) {
    return H.H.useOptimistic(E, X);
  }, ht.useReducer = function(E, X, nt) {
    return H.H.useReducer(E, X, nt);
  }, ht.useRef = function(E) {
    return H.H.useRef(E);
  }, ht.useState = function(E) {
    return H.H.useState(E);
  }, ht.useSyncExternalStore = function(E, X, nt) {
    return H.H.useSyncExternalStore(
      E,
      X,
      nt
    );
  }, ht.useTransition = function() {
    return H.H.useTransition();
  }, ht.version = "19.3.0", ht;
}
var x_;
function Yo() {
  return x_ || (x_ = 1, oo.exports = up()), oo.exports;
}
var ho = { exports: {} }, ye = {};
var U_;
function ip() {
  if (U_) return ye;
  U_ = 1;
  var m = Yo();
  function u(v) {
    var p = "https://react.dev/errors/" + v;
    if (1 < arguments.length) {
      p += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var b = 2; b < arguments.length; b++)
        p += "&args[]=" + encodeURIComponent(arguments[b]);
    }
    return "Minified React error #" + v + "; visit " + p + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function c() {
  }
  var f = {
    d: {
      f: c,
      r: function() {
        throw Error(u(522));
      },
      D: c,
      C: c,
      L: c,
      m: c,
      X: c,
      S: c,
      M: c
    },
    p: 0,
    findDOMNode: null
  }, r = /* @__PURE__ */ Symbol.for("react.portal"), s = /* @__PURE__ */ Symbol.for("react.recoverable"), h = /* @__PURE__ */ Symbol.for("react.optimistic_key");
  function d(v, p, b) {
    var D = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: r,
      key: D == null ? null : D === h ? h : "" + D,
      children: v,
      containerInfo: p,
      implementation: b
    };
  }
  var g = m.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function y(v, p) {
    if (v === "font") return "";
    if (typeof p == "string")
      return p === "use-credentials" ? p : "";
  }
  return ye.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = f, ye.browser = function(v) {
    return { $$typeof: s, _reason: v };
  }, ye.createPortal = function(v, p) {
    var b = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!p || p.nodeType !== 1 && p.nodeType !== 9 && p.nodeType !== 11)
      throw Error(u(299));
    return d(v, p, null, b);
  }, ye.flushSync = function(v) {
    var p = g.T, b = f.p;
    try {
      if (g.T = null, f.p = 2, v) return v();
    } finally {
      g.T = p, f.p = b, f.d.f();
    }
  }, ye.preconnect = function(v, p) {
    typeof v == "string" && (p ? (p = p.crossOrigin, p = typeof p == "string" ? p === "use-credentials" ? p : "" : void 0) : p = null, f.d.C(v, p));
  }, ye.prefetchDNS = function(v) {
    typeof v == "string" && f.d.D(v);
  }, ye.preinit = function(v, p) {
    if (typeof v == "string" && p && typeof p.as == "string") {
      var b = p.as, D = y(b, p.crossOrigin), U = typeof p.integrity == "string" ? p.integrity : void 0, S = typeof p.fetchPriority == "string" ? p.fetchPriority : void 0;
      b === "style" ? f.d.S(
        v,
        typeof p.precedence == "string" ? p.precedence : void 0,
        {
          crossOrigin: D,
          integrity: U,
          fetchPriority: S
        }
      ) : b === "script" && f.d.X(v, {
        crossOrigin: D,
        integrity: U,
        fetchPriority: S,
        nonce: typeof p.nonce == "string" ? p.nonce : void 0
      });
    }
  }, ye.preinitModule = function(v, p) {
    if (typeof v == "string")
      if (typeof p == "object" && p !== null) {
        if (p.as == null || p.as === "script") {
          var b = y(
            p.as,
            p.crossOrigin
          );
          f.d.M(v, {
            crossOrigin: b,
            integrity: typeof p.integrity == "string" ? p.integrity : void 0,
            nonce: typeof p.nonce == "string" ? p.nonce : void 0,
            fetchPriority: typeof p.fetchPriority == "string" ? p.fetchPriority : void 0
          });
        }
      } else p == null && f.d.M(v);
  }, ye.preload = function(v, p) {
    if (typeof v == "string" && typeof p == "object" && p !== null && typeof p.as == "string") {
      var b = p.as, D = y(b, p.crossOrigin);
      f.d.L(v, b, {
        crossOrigin: D,
        integrity: typeof p.integrity == "string" ? p.integrity : void 0,
        nonce: typeof p.nonce == "string" ? p.nonce : void 0,
        type: typeof p.type == "string" ? p.type : void 0,
        fetchPriority: typeof p.fetchPriority == "string" ? p.fetchPriority : void 0,
        referrerPolicy: typeof p.referrerPolicy == "string" ? p.referrerPolicy : void 0,
        imageSrcSet: typeof p.imageSrcSet == "string" ? p.imageSrcSet : void 0,
        imageSizes: typeof p.imageSizes == "string" ? p.imageSizes : void 0,
        media: typeof p.media == "string" ? p.media : void 0
      });
    }
  }, ye.preloadModule = function(v, p) {
    if (typeof v == "string")
      if (p) {
        var b = y(p.as, p.crossOrigin);
        f.d.m(v, {
          as: typeof p.as == "string" && p.as !== "script" ? p.as : void 0,
          crossOrigin: b,
          integrity: typeof p.integrity == "string" ? p.integrity : void 0,
          nonce: typeof p.nonce == "string" ? p.nonce : void 0,
          fetchPriority: typeof p.fetchPriority == "string" ? p.fetchPriority : void 0
        });
      } else f.d.m(v);
  }, ye.requestFormReset = function(v) {
    f.d.r(v);
  }, ye.unstable_batchedUpdates = function(v, p) {
    return v(p);
  }, ye.useFormState = function(v, p, b) {
    return g.H.useFormState(v, p, b);
  }, ye.useFormStatus = function() {
    return g.H.useHostTransitionStatus();
  }, ye.version = "19.3.0", ye;
}
var H_;
function fp() {
  if (H_) return ho.exports;
  H_ = 1;
  function m() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(m);
      } catch (u) {
        console.error(u);
      }
  }
  return m(), ho.exports = ip(), ho.exports;
}
var B_;
function cp() {
  if (B_) return pi;
  B_ = 1;
  var m = ap(), u = Yo(), c = fp();
  function f(t) {
    var e = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      e += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var l = 2; l < arguments.length; l++)
        e += "&args[]=" + encodeURIComponent(arguments[l]);
    }
    return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function r(t) {
    return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11);
  }
  function s(t) {
    for (var e = t, l = e; l && !l.alternate; )
      e = l, (e.flags & 4098) !== 0 && (t = e.return), l = e.return;
    for (; e.return; ) e = e.return;
    return e.tag === 3 ? t : null;
  }
  function h(t) {
    if (t.tag === 13) {
      var e = t.memoizedState;
      if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated;
    }
    return null;
  }
  function d(t) {
    if (t.tag === 31) {
      var e = t.memoizedState;
      if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated;
    }
    return null;
  }
  function g(t) {
    if (s(t) !== t)
      throw Error(f(188));
  }
  function y(t) {
    var e = t.alternate;
    if (!e) {
      if (e = s(t), e === null) throw Error(f(188));
      return e !== t ? null : t;
    }
    for (var l = t, n = e; ; ) {
      var a = l.return;
      if (a === null) break;
      var i = a.alternate;
      if (i === null) {
        if (n = a.return, n !== null) {
          l = n;
          continue;
        }
        break;
      }
      if (a.child === i.child) {
        for (i = a.child; i; ) {
          if (i === l) return g(a), t;
          if (i === n) return g(a), e;
          i = i.sibling;
        }
        throw Error(f(188));
      }
      if (l.return !== n.return) l = a, n = i;
      else {
        for (var o = !1, _ = a.child; _; ) {
          if (_ === l) {
            o = !0, l = a, n = i;
            break;
          }
          if (_ === n) {
            o = !0, n = a, l = i;
            break;
          }
          _ = _.sibling;
        }
        if (!o) {
          for (_ = i.child; _; ) {
            if (_ === l) {
              o = !0, l = i, n = a;
              break;
            }
            if (_ === n) {
              o = !0, n = i, l = a;
              break;
            }
            _ = _.sibling;
          }
          if (!o) throw Error(f(189));
        }
      }
      if (l.alternate !== n) throw Error(f(190));
    }
    if (l.tag !== 3) throw Error(f(188));
    return l.stateNode.current === l ? t : e;
  }
  function v(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t;
    for (t = t.child; t !== null; ) {
      if (e = v(t), e !== null) return e;
      t = t.sibling;
    }
    return null;
  }
  function p(t, e, l, n, a, i) {
    for (; t !== null; ) {
      if ((t.tag === 5 || t.tag === 27 || t.tag === 6) && l(t, n, a, i) || (t.tag !== 22 || t.memoizedState === null) && (e || t.tag !== 5 && t.tag !== 27) && p(
        t.child,
        e,
        l,
        n,
        a,
        i
      ))
        return !0;
      t = t.sibling;
    }
    return !1;
  }
  function b(t) {
    for (t = t.return; t !== null; ) {
      if (t.tag === 3 || t.tag === 5 || t.tag === 27) return t;
      t = t.return;
    }
    return null;
  }
  function D(t) {
    var e = !1;
    for (t = t.return; t !== null && (t.tag === 4 && (e = !0), !(t.tag === 3 || t.tag === 5 || t.tag === 27)); )
      t = t.return;
    return e;
  }
  function U(t) {
    var e = [null, null], l = b(t);
    return l === null || S(
      e,
      t,
      l.child,
      { foundSelf: !1 }
    ), e;
  }
  function S(t, e, l, n) {
    for (; l !== null; ) {
      if (l === e) n.foundSelf = !0;
      else if (l.tag === 5 || l.tag === 27 || l.tag === 6) {
        if (n.foundSelf) return t[1] = l, !0;
        t[0] = l;
      } else if ((l.tag !== 22 || l.memoizedState === null) && S(
        t,
        e,
        l.child,
        n
      ))
        return !0;
      l = l.sibling;
    }
    return !1;
  }
  function R(t) {
    switch (t.tag) {
      case 5:
      case 27:
      case 6:
        return t.stateNode;
      case 3:
        return t.stateNode.containerInfo;
      default:
        throw Error(f(559));
    }
  }
  var V = null, w = null;
  function Q(t, e, l) {
    return t === l ? !0 : t === e ? (V = t, !0) : !1;
  }
  function Z(t, e, l) {
    return t === l ? (w = t, !1) : t === e ? (w !== null && (V = t), !0) : !1;
  }
  function G(t) {
    if (t === null) return null;
    do
      t = t === null ? null : t.return;
    while (t && t.tag !== 5 && t.tag !== 27 && t.tag !== 3);
    return t || null;
  }
  function F(t, e, l) {
    for (var n = 0, a = t; a; a = l(a)) n++;
    a = 0;
    for (var i = e; i; i = l(i)) a++;
    for (; 0 < n - a; ) t = l(t), n--;
    for (; 0 < a - n; ) e = l(e), a--;
    for (; n--; ) {
      if (t === e || e !== null && t === e.alternate)
        return t;
      t = l(t), e = l(e);
    }
    return null;
  }
  var B = Object.assign, H = /* @__PURE__ */ Symbol.for("react.element"), j = /* @__PURE__ */ Symbol.for("react.transitional.element"), k = /* @__PURE__ */ Symbol.for("react.portal"), it = /* @__PURE__ */ Symbol.for("react.fragment"), ut = /* @__PURE__ */ Symbol.for("react.strict_mode"), st = /* @__PURE__ */ Symbol.for("react.profiler"), _t = /* @__PURE__ */ Symbol.for("react.consumer"), ft = /* @__PURE__ */ Symbol.for("react.context"), L = /* @__PURE__ */ Symbol.for("react.forward_ref"), K = /* @__PURE__ */ Symbol.for("react.suspense"), W = /* @__PURE__ */ Symbol.for("react.suspense_list"), lt = /* @__PURE__ */ Symbol.for("react.memo"), $ = /* @__PURE__ */ Symbol.for("react.lazy"), Dt = /* @__PURE__ */ Symbol.for("react.activity"), pt = /* @__PURE__ */ Symbol.for("react.legacy_hidden"), se = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), E = /* @__PURE__ */ Symbol.for("react.view_transition"), X = /* @__PURE__ */ Symbol.for("react.recoverable"), nt = Symbol.iterator;
  function et(t) {
    return t === null || typeof t != "object" ? null : (t = nt && t[nt] || t["@@iterator"], typeof t == "function" ? t : null);
  }
  var vt = /* @__PURE__ */ Symbol.for("react.client.reference");
  function Ot(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === vt ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case it:
        return "Fragment";
      case st:
        return "Profiler";
      case ut:
        return "StrictMode";
      case K:
        return "Suspense";
      case W:
        return "SuspenseList";
      case Dt:
        return "Activity";
      case E:
        return "ViewTransition";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case k:
          return "Portal";
        case ft:
          return t.displayName || "Context";
        case _t:
          return (t._context.displayName || "Context") + ".Consumer";
        case L:
          var e = t.render;
          return t = t.displayName, t || (t = e.displayName || e.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
        case lt:
          return e = t.displayName || null, e !== null ? e : Ot(t.type) || "Memo";
        case $:
          e = t._payload, t = t._init;
          try {
            return Ot(t(e));
          } catch {
          }
      }
    return null;
  }
  var zt = Array.isArray, tt = u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, rt = c.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, _l = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, Bi = [], Gl = -1;
  function bl(t) {
    return { current: t };
  }
  function oe(t) {
    0 > Gl || (t.current = Bi[Gl], Bi[Gl] = null, Gl--);
  }
  function Gt(t, e) {
    Gl++, Bi[Gl] = t.current, t.current = e;
  }
  var El = bl(null), Ou = bl(null), fn = bl(null), Yi = bl(null);
  function qi(t, e) {
    switch (Gt(fn, e), Gt(Ou, t), Gt(El, null), e.nodeType) {
      case 9:
      case 11:
        t = (t = e.documentElement) && (t = t.namespaceURI) ? Ym(t) : 0;
        break;
      default:
        if (t = e.tagName, e = e.namespaceURI)
          e = Ym(e), t = qm(e, t);
        else
          switch (t) {
            case "svg":
              t = 1;
              break;
            case "math":
              t = 2;
              break;
            default:
              t = 0;
          }
    }
    oe(El), Gt(El, t);
  }
  function Ea() {
    oe(El), oe(Ou), oe(fn);
  }
  function Mc(t) {
    var e = t.memoizedState;
    e !== null && (su._currentValue = e.memoizedState, Gt(Yi, t)), e = El.current;
    var l = qm(e, t.type);
    e !== l && (Gt(Ou, t), Gt(El, l));
  }
  function wi(t) {
    Ou.current === t && (oe(El), oe(Ou)), Yi.current === t && (oe(Yi), su._currentValue = _l);
  }
  var Dc, nh;
  function cn(t) {
    if (Dc === void 0)
      try {
        throw Error();
      } catch (l) {
        var e = l.stack.trim().match(/\n( *(at )?)/);
        Dc = e && e[1] || "", nh = -1 < l.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < l.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Dc + t + nh;
  }
  var Nc = !1;
  function Cc(t, e) {
    if (!t || Nc) return "";
    Nc = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var n = {
        DetermineComponentFrameRoot: function() {
          try {
            if (e) {
              var q = function() {
                throw Error();
              };
              if (Object.defineProperty(q.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(q, []);
                } catch (J) {
                  var z = J;
                }
                Reflect.construct(t, [], q);
              } else {
                try {
                  q.call();
                } catch (J) {
                  z = J;
                }
                q = !1;
                try {
                  var C = Object.getOwnPropertyDescriptor(
                    t.prototype,
                    "props"
                  );
                  Object.defineProperty(t.prototype, "props", {
                    configurable: !0,
                    set: function() {
                      throw Error();
                    }
                  }), q = !0, new t();
                } finally {
                  q && (C !== void 0 ? Object.defineProperty(t.prototype, "props", C) : delete t.prototype.props);
                }
              }
            } else {
              try {
                throw Error();
              } catch (J) {
                z = J;
              }
              (q = t()) && typeof q.catch == "function" && q.catch(function() {
              });
            }
          } catch (J) {
            if (J && z && typeof J.stack == "string")
              return [J.stack, z.stack];
          }
          return [null, null];
        }
      };
      n.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var a = Object.getOwnPropertyDescriptor(
        n.DetermineComponentFrameRoot,
        "name"
      );
      a && a.configurable && Object.defineProperty(
        n.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var i = n.DetermineComponentFrameRoot(), o = i[0], _ = i[1];
      if (o && _) {
        var T = o.split(`
`), M = _.split(`
`);
        for (a = n = 0; n < T.length && !T[n].includes("DetermineComponentFrameRoot"); )
          n++;
        for (; a < M.length && !M[a].includes(
          "DetermineComponentFrameRoot"
        ); )
          a++;
        if (n === T.length || a === M.length)
          for (n = T.length - 1, a = M.length - 1; 1 <= n && 0 <= a && T[n] !== M[a]; )
            a--;
        for (; 1 <= n && 0 <= a; n--, a--)
          if (T[n] !== M[a]) {
            if (n !== 1 || a !== 1)
              do
                if (n--, a--, 0 > a || T[n] !== M[a]) {
                  var x = `
` + T[n].replace(" at new ", " at ");
                  return t.displayName && x.includes("<anonymous>") && (x = x.replace("<anonymous>", t.displayName)), x;
                }
              while (1 <= n && 0 <= a);
            break;
          }
      }
    } finally {
      Nc = !1, Error.prepareStackTrace = l;
    }
    return (l = t ? t.displayName || t.name : "") ? cn(l) : "";
  }
  function ag(t, e) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return cn(t.type);
      case 16:
        return cn("Lazy");
      case 13:
        return t.child !== e && e !== null ? cn("Suspense Fallback") : cn("Suspense");
      case 19:
        return cn("SuspenseList");
      case 0:
      case 15:
        return Cc(t.type, !1);
      case 11:
        return Cc(t.type.render, !1);
      case 1:
        return Cc(t.type, !0);
      case 31:
        return cn("Activity");
      case 30:
        return cn("ViewTransition");
      default:
        return "";
    }
  }
  function ah(t) {
    try {
      var e = "", l = null;
      do
        e += ag(t, l), l = t, t = t.return;
      while (t);
      return e;
    } catch (n) {
      return `
Error generating stack: ` + n.message + `
` + n.stack;
    }
  }
  var Rc = Object.prototype.hasOwnProperty, xc = m.unstable_scheduleCallback, Uc = m.unstable_cancelCallback, ug = m.unstable_shouldYield, ig = m.unstable_requestPaint, Ge = m.unstable_now, fg = m.unstable_getCurrentPriorityLevel, uh = m.unstable_ImmediatePriority, ih = m.unstable_UserBlockingPriority, Gi = m.unstable_NormalPriority, cg = m.unstable_LowPriority, fh = m.unstable_IdlePriority, rg = m.log, sg = m.unstable_setDisableYieldValue, zu = null, je = null;
  function rn(t) {
    if (typeof rg == "function" && sg(t), je && typeof je.setStrictMode == "function")
      try {
        je.setStrictMode(zu, t);
      } catch {
      }
  }
  var Xe = Math.clz32 ? Math.clz32 : dg, og = Math.log, hg = Math.LN2;
  function dg(t) {
    return t >>>= 0, t === 0 ? 32 : 31 - (og(t) / hg | 0) | 0;
  }
  var ji = 256, Xi = 262144, Vi = 4194304;
  function Zn(t) {
    var e = t & 42;
    if (e !== 0) return e;
    switch (t & -t) {
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
        return 64;
      case 128:
        return 128;
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
        return t & -t;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return t & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return t;
    }
  }
  function Li(t, e, l) {
    var n = t.pendingLanes;
    if (n === 0) return 0;
    var a = 0, i = t.suspendedLanes, o = t.pingedLanes;
    t = t.warmLanes;
    var _ = n & 134217727;
    return _ !== 0 ? (n = _ & ~i, n !== 0 ? a = Zn(n) : (o &= _, o !== 0 ? a = Zn(o) : l || (l = _ & ~t, l !== 0 && (a = Zn(l))))) : (_ = n & ~i, _ !== 0 ? a = Zn(_) : o !== 0 ? a = Zn(o) : l || (l = n & ~t, l !== 0 && (a = Zn(l)))), a === 0 ? 0 : e !== 0 && e !== a && (e & i) === 0 && (i = a & -a, l = e & -e, i >= l || i === 32 && (l & 4194048) !== 0) ? e : a;
  }
  function Au(t, e) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
  }
  function ch(t, e) {
    (e & 8) !== 0 && (e |= e & 32);
    var l = t.entangledLanes;
    if (l !== 0)
      for (t = t.entanglements, l &= e; 0 < l; ) {
        var n = 31 - Xe(l), a = 1 << n;
        e |= t[n], l &= ~a;
      }
    return e;
  }
  function mg(t, e) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return e + 250;
      case 16:
      case 32:
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
        return e + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function rh() {
    var t = Vi;
    return Vi <<= 1, (Vi & 62914560) === 0 && (Vi = 4194304), t;
  }
  function Hc(t) {
    for (var e = [], l = 0; 31 > l; l++) e.push(t);
    return e;
  }
  function Mu(t, e) {
    t.pendingLanes |= e, e !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0);
  }
  function _g(t, e, l, n, a, i) {
    var o = t.pendingLanes;
    t.pendingLanes = l, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= l, t.entangledLanes &= l, t.errorRecoveryDisabledLanes &= l, t.shellSuspendCounter = 0;
    var _ = t.entanglements, T = t.expirationTimes, M = t.hiddenUpdates;
    for (l = o & ~l; 0 < l; ) {
      var x = 31 - Xe(l), q = 1 << x;
      _[x] = 0, T[x] = -1;
      var z = M[x];
      if (z !== null)
        for (M[x] = null, x = 0; x < z.length; x++) {
          var C = z[x];
          C !== null && (C.lane &= -536870913);
        }
      l &= ~q;
    }
    n !== 0 && sh(t, n, 0), i !== 0 && a === 0 && t.tag !== 0 && (t.suspendedLanes |= i & ~(o & ~e));
  }
  function sh(t, e, l) {
    t.pendingLanes |= e, t.suspendedLanes &= ~e;
    var n = 31 - Xe(e);
    t.entangledLanes |= e, t.entanglements[n] = t.entanglements[n] | 1073741824 | l & 261930;
  }
  function oh(t, e) {
    var l = t.entangledLanes |= e;
    for (t = t.entanglements; l; ) {
      var n = 31 - Xe(l), a = 1 << n;
      a & e | t[n] & e && (t[n] |= e), l &= ~a;
    }
  }
  function hh(t, e) {
    var l = e & -e;
    return l = (l & 42) !== 0 ? 1 : Bc(l), (l & (t.suspendedLanes | e)) !== 0 ? 0 : l;
  }
  function Bc(t) {
    switch (t) {
      case 2:
        t = 1;
        break;
      case 8:
        t = 4;
        break;
      case 32:
        t = 16;
        break;
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
        t = 128;
        break;
      case 268435456:
        t = 134217728;
        break;
      default:
        t = 0;
    }
    return t;
  }
  function Yc(t) {
    return t &= -t, 2 < t ? 8 < t ? (t & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function dh() {
    var t = rt.p;
    return t !== 0 ? t : (t = window.event, t === void 0 ? 32 : T_(t.type));
  }
  function mh(t, e) {
    var l = rt.p;
    try {
      return rt.p = t, e();
    } finally {
      rt.p = l;
    }
  }
  var jl = Math.random().toString(36).slice(2), he = "__reactFiber$" + jl, Me = "__reactProps$" + jl, Oa = "__reactContainer$" + jl, _h = "__reactEvents$" + jl, vg = "__reactListeners$" + jl, gg = "__reactHandles$" + jl, vh = "__reactResources$" + jl, Du = "__reactMarker$" + jl, Qi = "__reactLoad$" + jl;
  function Zi(t) {
    delete t[he], delete t[Me], delete t[vg], delete t[gg];
  }
  function Kn(t) {
    var e;
    if (e = t[he]) return e;
    for (var l = t.parentNode; l; ) {
      if (e = l[Oa] || l[he]) {
        if (l = e.alternate, e.child !== null || l !== null && l.child !== null)
          for (t = t_(t); t !== null; ) {
            if (l = t[he]) return l;
            t = t_(t);
          }
        return e;
      }
      t = l, l = t.parentNode;
    }
    return null;
  }
  function za(t) {
    if (t = t[he] || t[Oa]) {
      var e = t.tag;
      if (e === 5 || e === 6 || e === 13 || e === 31 || e === 26 || e === 27 || e === 3)
        return t;
    }
    return null;
  }
  function Nu(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
    throw Error(f(33));
  }
  function Aa(t) {
    var e = t[vh];
    return e || (e = t[vh] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), e;
  }
  function ue(t) {
    t[Du] = !0;
  }
  function gh(t) {
    t[Qi] = void 0;
  }
  var yh = /* @__PURE__ */ new Set(), ph = {};
  function Jn(t, e) {
    Ma(t, e), Ma(t + "Capture", e);
  }
  function Ma(t, e) {
    for (ph[t] = e, t = 0; t < e.length; t++)
      yh.add(e[t]);
  }
  var yg = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Th = {}, Sh = {};
  function pg(t) {
    return Rc.call(Sh, t) ? !0 : Rc.call(Th, t) ? !1 : yg.test(t) ? Sh[t] = !0 : (Th[t] = !0, !1);
  }
  var Nt = !1;
  function bh() {
    var t = Nt;
    return Nt = !1, t;
  }
  function Ki(t, e, l) {
    if (pg(e))
      if (l === null) t.removeAttribute(e);
      else {
        switch (typeof l) {
          case "undefined":
          case "function":
          case "symbol":
            t.removeAttribute(e);
            return;
          case "boolean":
            var n = e.toLowerCase().slice(0, 5);
            if (n !== "data-" && n !== "aria-") {
              t.removeAttribute(e);
              return;
            }
        }
        t.setAttribute(e, l);
      }
  }
  function Ji(t, e, l) {
    if (l === null) t.removeAttribute(e);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(e);
          return;
      }
      t.setAttribute(e, l);
    }
  }
  function Xl(t, e, l, n) {
    if (n === null) t.removeAttribute(l);
    else {
      switch (typeof n) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(l);
          return;
      }
      t.setAttributeNS(e, l, n);
    }
  }
  function Ve(t) {
    switch (typeof t) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return t;
      case "object":
        return t;
      default:
        return "";
    }
  }
  function Eh(t) {
    var e = t.type;
    return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio");
  }
  function Tg(t, e, l) {
    var n = Object.getOwnPropertyDescriptor(
      t.constructor.prototype,
      e
    );
    if (!t.hasOwnProperty(e) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
      var a = n.get, i = n.set;
      return Object.defineProperty(t, e, {
        configurable: !0,
        get: function() {
          return a.call(this);
        },
        set: function(o) {
          l = "" + o, i.call(this, o);
        }
      }), Object.defineProperty(t, e, {
        enumerable: n.enumerable
      }), {
        getValue: function() {
          return l;
        },
        setValue: function(o) {
          l = "" + o;
        },
        stopTracking: function() {
          t._valueTracker = null, delete t[e];
        }
      };
    }
  }
  function qc(t) {
    if (!t._valueTracker) {
      var e = Eh(t) ? "checked" : "value";
      t._valueTracker = Tg(
        t,
        e,
        "" + t[e]
      );
    }
  }
  function Oh(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var l = e.getValue(), n = "";
    return t && (n = Eh(t) ? t.checked ? "true" : "false" : t.value), t = n, t !== l ? (e.setValue(t), !0) : !1;
  }
  var Sg = /[\n"\\]/g;
  function nl(t) {
    return t.replace(
      Sg,
      function(e) {
        return "\\" + e.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function wc(t, e, l, n, a, i, o, _) {
    t.name = "", o != null && typeof o != "function" && typeof o != "symbol" && typeof o != "boolean" ? t.type = o : t.removeAttribute("type"), e != null ? o === "number" ? (e === 0 && t.value === "" || t.value != e) && (t.value = "" + Ve(e)) : t.value !== "" + Ve(e) && (t.value = "" + Ve(e)) : o !== "submit" && o !== "reset" || t.removeAttribute("value"), e != null ? o === "number" && t.value == e ? Gc(t, Ve(t.value)) : Gc(t, Ve(e)) : l != null ? Gc(t, Ve(l)) : n != null && t.removeAttribute("value"), a == null && i != null && (t.defaultChecked = !!i), a != null && (t.checked = a && typeof a != "function" && typeof a != "symbol"), _ != null && typeof _ != "function" && typeof _ != "symbol" && typeof _ != "boolean" ? t.name = "" + Ve(_) : t.removeAttribute("name");
  }
  function zh(t, e, l, n, a, i, o, _) {
    if (i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" && (t.type = i), e != null || l != null) {
      if (!(i !== "submit" && i !== "reset" || e != null)) {
        qc(t);
        return;
      }
      l = l != null ? "" + Ve(l) : "", e = e != null ? "" + Ve(e) : l, _ || e === t.value || (t.value = e), t.defaultValue = e;
    }
    n = n ?? a, n = typeof n != "function" && typeof n != "symbol" && !!n, t.checked = _ ? t.checked : !!n, t.defaultChecked = !!n, o != null && typeof o != "function" && typeof o != "symbol" && typeof o != "boolean" && (t.name = o), qc(t);
  }
  function Gc(t, e) {
    t.defaultValue !== "" + e && (t.defaultValue = "" + e);
  }
  function Da(t, e, l, n) {
    if (t = t.options, e) {
      e = {};
      for (var a = 0; a < l.length; a++)
        e["$" + l[a]] = !0;
      for (l = 0; l < t.length; l++)
        a = e.hasOwnProperty("$" + t[l].value), t[l].selected !== a && (t[l].selected = a), a && n && (t[l].defaultSelected = !0);
    } else {
      for (l = "" + Ve(l), e = null, a = 0; a < t.length; a++) {
        if (t[a].value === l) {
          t[a].selected = !0, n && (t[a].defaultSelected = !0);
          return;
        }
        e !== null || t[a].disabled || (e = t[a]);
      }
      e !== null && (e.selected = !0);
    }
  }
  function Ah(t, e, l) {
    if (e != null && (e = "" + Ve(e), e !== t.value && (t.value = e), l == null)) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = l != null ? "" + Ve(l) : "";
  }
  function Mh(t, e, l, n) {
    if (e == null) {
      if (n != null) {
        if (l != null) throw Error(f(92));
        if (zt(n)) {
          if (1 < n.length) throw Error(f(93));
          n = n[0];
        }
        l = n;
      }
      l == null && (l = ""), e = l;
    }
    l = Ve(e), t.defaultValue = l, n = t.textContent, n === l && n !== "" && n !== null && (t.value = n), qc(t);
  }
  function Na(t, e) {
    if (e) {
      var l = t.firstChild;
      if (l && l === t.lastChild && l.nodeType === 3) {
        l.nodeValue = e;
        return;
      }
    }
    t.textContent = e;
  }
  var bg = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Dh(t, e, l) {
    var n = e.indexOf("--") === 0;
    l == null || typeof l == "boolean" || l === "" ? n ? t.setProperty(e, "") : e === "float" ? t.cssFloat = "" : t[e] = "" : n ? t.setProperty(e, l) : typeof l != "number" || l === 0 || bg.has(e) ? e === "float" ? t.cssFloat = l : t[e] = ("" + l).trim() : t[e] = l + "px";
  }
  function Nh(t, e, l) {
    if (e != null && typeof e != "object")
      throw Error(f(62));
    if (t = t.style, l != null) {
      for (var n in l)
        !l.hasOwnProperty(n) || e != null && e.hasOwnProperty(n) || (n.indexOf("--") === 0 ? t.setProperty(n, "") : n === "float" ? t.cssFloat = "" : t[n] = "", Nt = !0);
      for (var a in e)
        n = e[a], e.hasOwnProperty(a) && l[a] !== n && (Dh(t, a, n), Nt = !0);
    } else
      for (var i in e)
        e.hasOwnProperty(i) && Dh(t, i, e[i]);
  }
  function jc(t) {
    if (t.indexOf("-") === -1) return !1;
    switch (t) {
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
  var Eg = /* @__PURE__ */ new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["maskType", "mask-type"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"]
  ]), Og = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Fi(t) {
    return Og.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t;
  }
  function Ol() {
  }
  var Xc = null;
  function Vc(t) {
    return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
  }
  var Ca = null, Ra = null;
  function Ch(t) {
    var e = za(t);
    if (e && (t = e.stateNode)) {
      var l = t[Me] || null;
      t: switch (t = e.stateNode, e.type) {
        case "input":
          if (wc(
            t,
            l.value,
            l.defaultValue,
            l.defaultValue,
            l.checked,
            l.defaultChecked,
            l.type,
            l.name
          ), e = l.name, l.type === "radio" && e != null) {
            for (l = t; l.parentNode; ) l = l.parentNode;
            for (l = l.querySelectorAll(
              'input[name="' + nl(
                "" + e
              ) + '"][type="radio"]'
            ), e = 0; e < l.length; e++) {
              var n = l[e];
              if (n !== t && n.form === t.form) {
                var a = n[Me] || null;
                if (!a) throw Error(f(90));
                wc(
                  n,
                  a.value,
                  a.defaultValue,
                  a.defaultValue,
                  a.checked,
                  a.defaultChecked,
                  a.type,
                  a.name
                );
              }
            }
            for (e = 0; e < l.length; e++)
              n = l[e], n.form === t.form && Oh(n);
          }
          break t;
        case "textarea":
          Ah(t, l.value, l.defaultValue);
          break t;
        case "select":
          e = l.value, e != null && Da(t, !!l.multiple, e, !1);
      }
    }
  }
  var Lc = !1;
  function Rh(t, e, l) {
    if (Lc) return t(e, l);
    Lc = !0;
    try {
      var n = t(e);
      return n;
    } finally {
      if (Lc = !1, (Ca !== null || Ra !== null) && (kf(), Ca && (e = Ca, t = Ra, Ra = Ca = null, Ch(e), t)))
        for (e = 0; e < t.length; e++) Ch(t[e]);
    }
  }
  function Cu(t, e) {
    var l = t.stateNode;
    if (l === null) return null;
    var n = l[Me] || null;
    if (n === null) return null;
    l = n[e];
    t: switch (e) {
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
        (n = !n.disabled) || (t = t.type, n = !(t === "button" || t === "input" || t === "select" || t === "textarea")), t = !n;
        break t;
      default:
        t = !1;
    }
    if (t) return null;
    if (l && typeof l != "function")
      throw Error(
        f(231, e, typeof l)
      );
    return l;
  }
  var Vl = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Qc = !1;
  if (Vl)
    try {
      var Ru = {};
      Object.defineProperty(Ru, "passive", {
        get: function() {
          Qc = !0;
        }
      }), window.addEventListener("test", Ru, Ru), window.removeEventListener("test", Ru, Ru);
    } catch {
      Qc = !1;
    }
  var sn = null, Zc = null, ki = null;
  function xh() {
    if (ki) return ki;
    var t, e = Zc, l = e.length, n, a = "value" in sn ? sn.value : sn.textContent, i = a.length;
    for (t = 0; t < l && e[t] === a[t]; t++) ;
    var o = l - t;
    for (n = 1; n <= o && e[l - n] === a[i - n]; n++) ;
    return ki = a.slice(t, 1 < n ? 1 - n : void 0);
  }
  function $i(t) {
    var e = t.keyCode;
    return "charCode" in t ? (t = t.charCode, t === 0 && e === 13 && (t = 13)) : t = e, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0;
  }
  function Wi() {
    return !0;
  }
  function Uh() {
    return !1;
  }
  function Ee(t) {
    function e(l, n, a, i, o) {
      this._reactName = l, this._targetInst = a, this.type = n, this.nativeEvent = i, this.target = o, this.currentTarget = null;
      for (var _ in t)
        t.hasOwnProperty(_) && (l = t[_], this[_] = l ? l(i) : i[_]);
      return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? Wi : Uh, this.isPropagationStopped = Uh, this;
    }
    return B(e.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var l = this.nativeEvent;
        l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = Wi);
      },
      stopPropagation: function() {
        var l = this.nativeEvent;
        l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = Wi);
      },
      persist: function() {
      },
      isPersistent: Wi
    }), e;
  }
  var on = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(t) {
      return t.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Ii = Ee(on), xu = B({}, on, { view: 0, detail: 0 }), zg = Ee(xu), Kc, Jc, Uu, Pi = B({}, xu, {
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
    getModifierState: kc,
    button: 0,
    buttons: 0,
    relatedTarget: function(t) {
      return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget;
    },
    movementX: function(t) {
      return "movementX" in t ? t.movementX : (t !== Uu && (Uu && t.type === "mousemove" ? (Kc = t.screenX - Uu.screenX, Jc = t.screenY - Uu.screenY) : Jc = Kc = 0, Uu = t), Kc);
    },
    movementY: function(t) {
      return "movementY" in t ? t.movementY : Jc;
    }
  }), Hh = Ee(Pi), Ag = B({}, Pi, { dataTransfer: 0 }), Mg = Ee(Ag), Dg = B({}, xu, { relatedTarget: 0 }), Fc = Ee(Dg), Ng = B({}, on, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Cg = Ee(Ng), Rg = B({}, on, {
    clipboardData: function(t) {
      return "clipboardData" in t ? t.clipboardData : window.clipboardData;
    }
  }), xg = Ee(Rg), Ug = B({}, on, { data: 0 }), Bh = Ee(Ug), Hg = {
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
    MozPrintableKey: "Unidentified"
  }, Bg = {
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
    224: "Meta"
  }, Yg = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function qg(t) {
    var e = this.nativeEvent;
    return e.getModifierState ? e.getModifierState(t) : (t = Yg[t]) ? !!e[t] : !1;
  }
  function kc() {
    return qg;
  }
  var wg = B({}, xu, {
    key: function(t) {
      if (t.key) {
        var e = Hg[t.key] || t.key;
        if (e !== "Unidentified") return e;
      }
      return t.type === "keypress" ? (t = $i(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? Bg[t.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: kc,
    charCode: function(t) {
      return t.type === "keypress" ? $i(t) : 0;
    },
    keyCode: function(t) {
      return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    },
    which: function(t) {
      return t.type === "keypress" ? $i(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    }
  }), Gg = Ee(wg), jg = B({}, Pi, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }), Yh = Ee(jg), Xg = B({}, on, { submitter: 0 }), Vg = Ee(Xg), Lg = B({}, xu, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: kc
  }), Qg = Ee(Lg), Zg = B({}, on, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Kg = Ee(Zg), Jg = B({}, Pi, {
    deltaX: function(t) {
      return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
    },
    deltaY: function(t) {
      return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Fg = Ee(Jg), kg = B({}, on, {
    newState: 0,
    oldState: 0,
    source: 0
  }), $g = Ee(kg), Wg = [9, 13, 27, 32], $c = Vl && "CompositionEvent" in window, Hu = null;
  Vl && "documentMode" in document && (Hu = document.documentMode);
  var Ig = Vl && "TextEvent" in window && !Hu, qh = Vl && (!$c || Hu && 8 < Hu && 11 >= Hu), wh = " ", Gh = !1;
  function jh(t, e) {
    switch (t) {
      case "keyup":
        return Wg.indexOf(e.keyCode) !== -1;
      case "keydown":
        return e.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Xh(t) {
    return t = t.detail, typeof t == "object" && "data" in t ? t.data : null;
  }
  var xa = !1;
  function Pg(t, e) {
    switch (t) {
      case "compositionend":
        return Xh(e);
      case "keypress":
        return e.which !== 32 ? null : (Gh = !0, wh);
      case "textInput":
        return t = e.data, t === wh && Gh ? null : t;
      default:
        return null;
    }
  }
  function t1(t, e) {
    if (xa)
      return t === "compositionend" || !$c && jh(t, e) ? (t = xh(), ki = Zc = sn = null, xa = !1, t) : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(e.ctrlKey || e.altKey || e.metaKey) || e.ctrlKey && e.altKey) {
          if (e.char && 1 < e.char.length)
            return e.char;
          if (e.which) return String.fromCharCode(e.which);
        }
        return null;
      case "compositionend":
        return qh && e.locale !== "ko" ? null : e.data;
      default:
        return null;
    }
  }
  var e1 = {
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
    week: !0
  };
  function Vh(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!e1[t.type] : e === "textarea";
  }
  function Lh(t, e, l, n) {
    Ca ? Ra ? Ra.push(n) : Ra = [n] : Ca = n, e = ec(e, "onChange"), 0 < e.length && (l = new Ii(
      "onChange",
      "change",
      null,
      l,
      n
    ), t.push({ event: l, listeners: e }));
  }
  var Bu = null, Yu = null;
  function l1(t) {
    Cm(t, 0);
  }
  function tf(t) {
    var e = Nu(t);
    if (Oh(e)) return t;
  }
  function Qh(t, e) {
    if (t === "change") return e;
  }
  var Zh = !1;
  if (Vl) {
    var Wc;
    if (Vl) {
      var Ic = "oninput" in document;
      if (!Ic) {
        var Kh = document.createElement("div");
        Kh.setAttribute("oninput", "return;"), Ic = typeof Kh.oninput == "function";
      }
      Wc = Ic;
    } else Wc = !1;
    Zh = Wc && (!document.documentMode || 9 < document.documentMode);
  }
  function Jh() {
    Bu && (Bu.detachEvent("onpropertychange", Fh), Yu = Bu = null);
  }
  function Fh(t) {
    if (t.propertyName === "value" && tf(Yu)) {
      var e = [];
      Lh(
        e,
        Yu,
        t,
        Vc(t)
      ), Rh(l1, e);
    }
  }
  function n1(t, e, l) {
    t === "focusin" ? (Jh(), Bu = e, Yu = l, Bu.attachEvent("onpropertychange", Fh)) : t === "focusout" && Jh();
  }
  function a1(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return tf(Yu);
  }
  function u1(t, e) {
    if (t === "click") return tf(e);
  }
  function i1(t, e) {
    if (t === "input" || t === "change")
      return tf(e);
  }
  function f1(t, e) {
    return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e;
  }
  var Le = typeof Object.is == "function" ? Object.is : f1;
  function qu(t, e) {
    if (Le(t, e)) return !0;
    if (typeof t != "object" || t === null || typeof e != "object" || e === null)
      return !1;
    var l = Object.keys(t), n = Object.keys(e);
    if (l.length !== n.length) return !1;
    for (n = 0; n < l.length; n++) {
      var a = l[n];
      if (!Rc.call(e, a) || !Le(t[a], e[a]))
        return !1;
    }
    return !0;
  }
  function Pc(t) {
    if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  function kh(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function $h(t, e) {
    var l = kh(t);
    t = 0;
    for (var n; l; ) {
      if (l.nodeType === 3) {
        if (n = t + l.textContent.length, t <= e && n >= e)
          return { node: l, offset: e - t };
        t = n;
      }
      t: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break t;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = kh(l);
    }
  }
  function Wh(t, e) {
    return t && e ? t === e ? !0 : t && t.nodeType === 3 ? !1 : e && e.nodeType === 3 ? Wh(t, e.parentNode) : "contains" in t ? t.contains(e) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16) : !1 : !1;
  }
  function Ih(t) {
    t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
    for (var e = Pc(t.document); e instanceof t.HTMLIFrameElement; ) {
      try {
        var l = typeof e.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) t = e.contentWindow;
      else break;
      e = Pc(t.document);
    }
    return e;
  }
  function tr(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true");
  }
  var c1 = Vl && "documentMode" in document && 11 >= document.documentMode, Ua = null, er = null, wu = null, lr = !1;
  function Ph(t, e, l) {
    var n = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    lr || Ua == null || Ua !== Pc(n) || (n = Ua, "selectionStart" in n && tr(n) ? n = { start: n.selectionStart, end: n.selectionEnd } : (n = (n.ownerDocument && n.ownerDocument.defaultView || window).getSelection(), n = {
      anchorNode: n.anchorNode,
      anchorOffset: n.anchorOffset,
      focusNode: n.focusNode,
      focusOffset: n.focusOffset
    }), wu && qu(wu, n) || (wu = n, n = ec(er, "onSelect"), 0 < n.length && (e = new Ii(
      "onSelect",
      "select",
      null,
      e,
      l
    ), t.push({ event: e, listeners: n }), e.target = Ua)));
  }
  function Fn(t, e) {
    var l = {};
    return l[t.toLowerCase()] = e.toLowerCase(), l["Webkit" + t] = "webkit" + e, l["Moz" + t] = "moz" + e, l;
  }
  var Ha = {
    animationend: Fn("Animation", "AnimationEnd"),
    animationiteration: Fn("Animation", "AnimationIteration"),
    animationstart: Fn("Animation", "AnimationStart"),
    transitionrun: Fn("Transition", "TransitionRun"),
    transitionstart: Fn("Transition", "TransitionStart"),
    transitioncancel: Fn("Transition", "TransitionCancel"),
    transitionend: Fn("Transition", "TransitionEnd")
  }, nr = {}, t0 = {};
  Vl && (t0 = document.createElement("div").style, "AnimationEvent" in window || (delete Ha.animationend.animation, delete Ha.animationiteration.animation, delete Ha.animationstart.animation), "TransitionEvent" in window || delete Ha.transitionend.transition);
  function kn(t) {
    if (nr[t]) return nr[t];
    if (!Ha[t]) return t;
    var e = Ha[t], l;
    for (l in e)
      if (e.hasOwnProperty(l) && l in t0)
        return nr[t] = e[l];
    return t;
  }
  var e0 = kn("animationend"), l0 = kn("animationiteration"), n0 = kn("animationstart"), r1 = kn("transitionrun"), s1 = kn("transitionstart"), o1 = kn("transitioncancel"), a0 = kn("transitionend"), u0 = /* @__PURE__ */ new Map(), ar = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  ar.push("scrollEnd");
  function vl(t, e) {
    u0.set(t, e), Jn(e, [t]);
  }
  var h1 = 0;
  function Ll(t, e) {
    if (t.name != null && t.name !== "auto") return t.name;
    if (e.autoName !== null) return e.autoName;
    t = Tl.identifierPrefix;
    var l = h1++;
    return t = "_" + t + "t_" + l.toString(32) + "_", e.autoName = t;
  }
  function i0(t) {
    if (t == null || typeof t == "string")
      return t;
    var e = null, l = tu;
    if (l !== null)
      for (var n = 0; n < l.length; n++) {
        var a = t[l[n]];
        if (a != null) {
          if (a === "none") return "none";
          e = e == null ? a : e + (" " + a);
        }
      }
    return e ?? t.default;
  }
  function Ql(t, e) {
    return t = i0(t), e = i0(e), e == null ? t === "auto" ? null : t : e === "auto" ? null : e;
  }
  var ef = typeof reportError == "function" ? reportError : function(t) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var e = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof t == "object" && t !== null && typeof t.message == "string" ? String(t.message) : String(t),
        error: t
      });
      if (!window.dispatchEvent(e)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", t);
      return;
    }
    console.error(t);
  }, al = [], Ba = 0, ur = 0;
  function lf() {
    for (var t = Ba, e = ur = Ba = 0; e < t; ) {
      var l = al[e];
      al[e++] = null;
      var n = al[e];
      al[e++] = null;
      var a = al[e];
      al[e++] = null;
      var i = al[e];
      if (al[e++] = null, n !== null && a !== null) {
        var o = n.pending;
        o === null ? a.next = a : (a.next = o.next, o.next = a), n.pending = a;
      }
      i !== 0 && f0(l, a, i);
    }
  }
  function nf(t, e, l, n) {
    al[Ba++] = t, al[Ba++] = e, al[Ba++] = l, al[Ba++] = n, ur |= n, t.lanes |= n, t = t.alternate, t !== null && (t.lanes |= n);
  }
  function ir(t, e, l, n) {
    return nf(t, e, l, n), af(t);
  }
  function $n(t, e) {
    return nf(t, null, null, e), af(t);
  }
  function f0(t, e, l) {
    t.lanes |= l;
    var n = t.alternate;
    n !== null && (n.lanes |= l);
    for (var a = !1, i = t.return; i !== null; )
      i.childLanes |= l, n = i.alternate, n !== null && (n.childLanes |= l), i.tag === 22 && (t = i.stateNode, t === null || t._visibility & 1 || (a = !0)), t = i, i = i.return;
    return t.tag === 3 ? (i = t.stateNode, a && e !== null && (a = 31 - Xe(l), t = i.hiddenUpdates, n = t[a], n === null ? t[a] = [e] : n.push(e), e.lane = l | 536870912), i) : null;
  }
  function af(t) {
    if (50 < ii)
      throw ii = 0, Ff = null, Error(f(185));
    for (var e = t.return; e !== null; )
      t = e, e = t.return;
    return t.tag === 3 ? t.stateNode : null;
  }
  var Ya = {};
  function d1(t, e, l, n) {
    this.tag = t, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = n, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function De(t, e, l, n) {
    return new d1(t, e, l, n);
  }
  function fr(t) {
    return t = t.prototype, !(!t || !t.isReactComponent);
  }
  function Zl(t, e) {
    var l = t.alternate;
    return l === null ? (l = De(
      t.tag,
      e,
      t.key,
      t.mode
    ), l.elementType = t.elementType, l.type = t.type, l.stateNode = t.stateNode, l.alternate = t, t.alternate = l) : (l.pendingProps = e, l.type = t.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = t.flags & 1206910976, l.childLanes = t.childLanes, l.lanes = t.lanes, l.child = t.child, l.memoizedProps = t.memoizedProps, l.memoizedState = t.memoizedState, l.updateQueue = t.updateQueue, e = t.dependencies, l.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }, l.sibling = t.sibling, l.index = t.index, l.ref = t.ref, l.refCleanup = t.refCleanup, l;
  }
  function c0(t, e) {
    t.flags &= 1206910978;
    var l = t.alternate;
    return l === null ? (t.childLanes = 0, t.lanes = e, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null) : (t.childLanes = l.childLanes, t.lanes = l.lanes, t.child = l.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = l.memoizedProps, t.memoizedState = l.memoizedState, t.updateQueue = l.updateQueue, t.type = l.type, e = l.dependencies, t.dependencies = e === null ? null : {
      lanes: e.lanes,
      firstContext: e.firstContext
    }), t;
  }
  function uf(t, e, l, n, a, i) {
    var o = 0;
    if (n = t, typeof n == "function") fr(n) && (o = 1);
    else if (typeof n == "string")
      o = Xy(
        t,
        l,
        El.current
      ) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
    else
      t: switch (n) {
        case Dt:
          return t = De(31, l, e, a), t.elementType = Dt, t.lanes = i, t;
        case it:
          return Wn(l.children, a, i, e);
        case ut:
          o = 8, a |= 24;
          break;
        case st:
          return t = De(12, l, e, a | 2), t.elementType = st, t.lanes = i, t;
        case K:
          return t = De(13, l, e, a), t.elementType = K, t.lanes = i, t;
        case W:
          return t = De(19, l, e, a), t.elementType = W, t.lanes = i, t;
        case pt:
        case E:
          return t = a | 32, t = De(30, l, e, t), t.elementType = E, t.lanes = i, t.stateNode = {
            autoName: null,
            paired: null,
            clones: null,
            ref: null
          }, t;
        default:
          if (typeof n == "object" && n !== null)
            switch (n.$$typeof) {
              case ft:
                o = 10;
                break t;
              case _t:
                o = 9;
                break t;
              case L:
                o = 11;
                break t;
              case lt:
                o = 14;
                break t;
              case $:
                o = 16, n = null;
                break t;
            }
          o = 29, l = Error(
            f(130, t === null ? "null" : typeof t, "")
          ), n = null;
      }
    return e = De(o, l, e, a), e.elementType = t, e.type = n, e.lanes = i, e;
  }
  function Wn(t, e, l, n) {
    return t = De(7, t, n, e), t.lanes = l, t;
  }
  function cr(t, e, l) {
    return t = De(6, t, null, e), t.lanes = l, t;
  }
  function r0(t) {
    var e = De(18, null, null, 0);
    return e.stateNode = t, e;
  }
  function rr(t, e, l) {
    return e = De(
      4,
      t.children !== null ? t.children : [],
      t.key,
      e
    ), e.lanes = l, e.stateNode = {
      containerInfo: t.containerInfo,
      pendingChildren: null,
      implementation: t.implementation
    }, e;
  }
  var s0 = /* @__PURE__ */ new WeakMap();
  function ul(t, e) {
    if (typeof t == "object" && t !== null) {
      var l = s0.get(t);
      return l !== void 0 ? l : (e = {
        value: t,
        source: e,
        stack: ah(e)
      }, s0.set(t, e), e);
    }
    return {
      value: t,
      source: e,
      stack: ah(e)
    };
  }
  var qa = [], wa = 0, ff = null, Gu = 0, il = [], fl = 0, hn = null, zl = 1, Al = "";
  function Kl(t, e) {
    qa[wa++] = Gu, qa[wa++] = ff, ff = t, Gu = e;
  }
  function o0(t, e, l) {
    il[fl++] = zl, il[fl++] = Al, il[fl++] = hn, hn = t;
    var n = zl;
    t = Al;
    var a = 32 - Xe(n) - 1;
    n &= ~(1 << a), l += 1;
    var i = 32 - Xe(e) + a;
    if (30 < i) {
      var o = a - a % 5;
      i = (n & (1 << o) - 1).toString(32), n >>= o, a -= o, zl = 1 << 32 - Xe(e) + a | l << a | n, Al = i + t;
    } else
      zl = 1 << i | l << a | n, Al = t;
  }
  function cf(t) {
    t.return !== null && (Kl(t, 1), o0(t, 1, 0));
  }
  function sr(t) {
    for (; t === ff; )
      ff = qa[--wa], qa[wa] = null, Gu = qa[--wa], qa[wa] = null;
    for (; t === hn; )
      hn = il[--fl], il[fl] = null, Al = il[--fl], il[fl] = null, zl = il[--fl], il[fl] = null;
  }
  function h0(t, e) {
    il[fl++] = zl, il[fl++] = Al, il[fl++] = hn, zl = e.id, Al = e.overflow, hn = t;
  }
  var ie = null, jt = null, gt = !1, dn = null, cl = !1, or = Error(f(519));
  function mn(t) {
    var e = Error(
      f(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw ju(ul(e, t)), or;
  }
  function d0(t) {
    var e = t.stateNode, l = t.type, n = t.memoizedProps;
    switch (e[he] = t, e[Me] = n, l) {
      case "dialog":
        St("cancel", e), St("close", e);
        break;
      case "iframe":
      case "object":
      case "embed":
        St("load", e);
        break;
      case "video":
      case "audio":
        for (l = 0; l < ci.length; l++)
          St(ci[l], e);
        break;
      case "source":
        St("error", e);
        break;
      case "img":
      case "image":
      case "link":
        St("error", e), St("load", e);
        break;
      case "details":
        St("toggle", e);
        break;
      case "input":
        St("invalid", e), zh(
          e,
          n.value,
          n.defaultValue,
          n.checked,
          n.defaultChecked,
          n.type,
          n.name,
          !0
        );
        break;
      case "select":
        St("invalid", e);
        break;
      case "textarea":
        St("invalid", e), Mh(e, n.value, n.defaultValue, n.children);
    }
    l = n.children, typeof l != "string" && typeof l != "number" && typeof l != "bigint" || e.textContent === "" + l || n.suppressHydrationWarning === !0 || Hm(e.textContent, l) ? (n.popover != null && (St("beforetoggle", e), St("toggle", e)), n.onScroll != null && St("scroll", e), n.onScrollEnd != null && St("scrollend", e), n.onClick != null && (e.onclick = Ol), e = !0) : e = !1, e || mn(t, !0);
  }
  function rf(t) {
    for (ie = t.return; ie; )
      switch (ie.tag) {
        case 5:
        case 31:
        case 13:
          cl = !1;
          return;
        case 27:
        case 3:
          cl = !0;
          return;
        default:
          ie = ie.return;
      }
  }
  function Ga(t) {
    if (t !== ie) return !1;
    if (!gt) return rf(t), gt = !0, !1;
    var e = t.tag, l;
    if ((l = e !== 3 && e !== 27) && ((l = e === 5) && (l = t.type, l = !(l !== "form" && l !== "button") || Xs(t.type, t.memoizedProps)), l = !l), l && jt && mn(t), rf(t), e === 13) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(f(317));
      jt = Pm(t);
    } else if (e === 31) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(f(317));
      jt = Pm(t);
    } else
      e === 27 ? (e = jt, Cn(t.type) ? (t = $s, $s = null, jt = t) : jt = e) : jt = ie ? sl(t.stateNode.nextSibling) : null;
    return !0;
  }
  function In() {
    jt = ie = null, gt = !1;
  }
  function hr() {
    var t = dn;
    return t !== null && (Re === null ? Re = t : Re.push.apply(
      Re,
      t
    ), dn = null), t;
  }
  function ju(t) {
    dn === null ? dn = [t] : dn.push(t);
  }
  var dr = bl(null), Pn = null, Jl = null;
  function _n(t, e, l) {
    Gt(dr, e._currentValue), e._currentValue = l;
  }
  function Fl(t) {
    t._currentValue = dr.current, oe(dr);
  }
  function sf(t, e, l) {
    for (; t !== null; ) {
      var n = t.alternate;
      if ((t.childLanes & e) !== e ? (t.childLanes |= e, n !== null && (n.childLanes |= e)) : n !== null && (n.childLanes & e) !== e && (n.childLanes |= e), t === l) break;
      t = t.return;
    }
  }
  function mr(t, e, l, n) {
    var a = t.child;
    for (a !== null && (a.return = t); a !== null; ) {
      var i = a.dependencies;
      if (i !== null) {
        var o = a.child;
        i = i.firstContext;
        t: for (; i !== null; ) {
          var _ = i;
          i = a;
          for (var T = 0; T < e.length; T++)
            if (_.context === e[T]) {
              i.lanes |= l, _ = i.alternate, _ !== null && (_.lanes |= l), sf(
                i.return,
                l,
                t
              ), n || (o = null);
              break t;
            }
          i = _.next;
        }
      } else if (a.tag === 18) {
        if (o = a.return, o === null) throw Error(f(341));
        o.lanes |= l, i = o.alternate, i !== null && (i.lanes |= l), sf(o, l, t), o = null;
      } else
        a.tag === 13 && a.memoizedState !== null && a.memoizedState.dehydrated === null ? (a.lanes |= l, o = a.alternate, o !== null && (o.lanes |= l), sf(
          a.return,
          l,
          t
        ), o = a.child, o = o !== null ? o.sibling : null) : o = a.child;
      if (o !== null) o.return = a;
      else
        for (o = a; o !== null; ) {
          if (o === t) {
            o = null;
            break;
          }
          if (a = o.sibling, a !== null) {
            a.return = o.return, o = a;
            break;
          }
          o = o.return;
        }
      a = o;
    }
  }
  function ta(t, e, l, n) {
    t = null;
    for (var a = e, i = !1; a !== null; ) {
      if (!i) {
        if ((a.flags & 524288) !== 0) i = !0;
        else if ((a.flags & 262144) !== 0) break;
      }
      if (a.tag === 10) {
        var o = a.alternate;
        if (o === null) throw Error(f(387));
        if (o = o.memoizedProps, o !== null) {
          var _ = a.type;
          Le(a.pendingProps.value, o.value) || (t !== null ? t.push(_) : t = [_]);
        }
      } else if (a === Yi.current) {
        if (o = a.alternate, o === null) throw Error(f(387));
        o.memoizedState.memoizedState !== a.memoizedState.memoizedState && (t !== null ? t.push(su) : t = [su]);
      }
      a = a.return;
    }
    return t !== null && mr(
      e,
      t,
      l,
      n
    ), e.flags |= 262144, t !== null;
  }
  function of(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!Le(
        t.context._currentValue,
        t.memoizedValue
      ))
        return !0;
      t = t.next;
    }
    return !1;
  }
  function ea(t) {
    Pn = t, Jl = null, t = t.dependencies, t !== null && (t.firstContext = null);
  }
  function de(t) {
    return m0(Pn, t);
  }
  function hf(t, e) {
    return Pn === null && ea(t), m0(t, e);
  }
  function m0(t, e) {
    var l = e._currentValue;
    if (e = { context: e, memoizedValue: l, next: null }, Jl === null) {
      if (t === null) throw Error(f(308));
      Jl = e, t.dependencies = { lanes: 0, firstContext: e }, t.flags |= 524288;
    } else Jl = Jl.next = e;
    return l;
  }
  var m1 = typeof AbortController < "u" ? AbortController : function() {
    var t = [], e = this.signal = {
      aborted: !1,
      addEventListener: function(l, n) {
        t.push(n);
      }
    };
    this.abort = function() {
      e.aborted = !0, t.forEach(function(l) {
        return l();
      });
    };
  }, _1 = m.unstable_scheduleCallback, v1 = m.unstable_NormalPriority, Pt = {
    $$typeof: ft,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function _r() {
    return {
      controller: new m1(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Xu(t) {
    t.refCount--, t.refCount === 0 && _1(v1, function() {
      t.controller.abort();
    });
  }
  function _0(t, e) {
    if ((t.pendingLanes & 4194048) !== 0) {
      var l = t.transitionTypes;
      for (l === null && (l = t.transitionTypes = []), t = 0; t < e.length; t++) {
        var n = e[t];
        l.indexOf(n) === -1 && l.push(n);
      }
    }
  }
  var Vu = null;
  function g1(t) {
    var e = t.transitionTypes;
    return t.transitionTypes = null, e;
  }
  var Lu = null, vr = 0, la = 0, ja = null;
  function y1(t, e) {
    if (Lu === null) {
      var l = Lu = [];
      vr = 0, la = xs(), ja = {
        status: "pending",
        value: void 0,
        then: function(n) {
          l.push(n);
        }
      };
    }
    return vr++, e.then(v0, v0), e;
  }
  function v0() {
    if (--vr === 0 && (Vu = null, Lu !== null)) {
      ja !== null && (ja.status = "fulfilled");
      var t = Lu;
      Lu = null, la = 0, ja = null;
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
  }
  function p1(t, e) {
    var l = [], n = {
      status: "pending",
      value: null,
      reason: null,
      then: function(a) {
        l.push(a);
      }
    };
    return t.then(
      function() {
        n.status = "fulfilled", n.value = e;
        for (var a = 0; a < l.length; a++) (0, l[a])(e);
      },
      function(a) {
        for (n.status = "rejected", n.reason = a, a = 0; a < l.length; a++)
          (0, l[a])(void 0);
      }
    ), n;
  }
  var g0 = tt.S;
  tt.S = function(t, e) {
    if (rm = Ge(), typeof e == "object" && e !== null && typeof e.then == "function" && y1(t, e), Vu !== null)
      for (var l = au; l !== null; )
        _0(l, Vu), l = l.next;
    if (l = t.types, l !== null) {
      for (var n = au; n !== null; )
        _0(n, l), n = n.next;
      if (la !== 0) {
        n = Vu, n === null && (n = Vu = []);
        for (var a = 0; a < l.length; a++) {
          var i = l[a];
          n.indexOf(i) === -1 && n.push(i);
        }
      }
    }
    g0 !== null && g0(t, e);
  };
  var na = bl(null);
  function gr() {
    var t = na.current;
    return t !== null ? t : Yt.pooledCache;
  }
  function df(t, e) {
    e === null ? Gt(na, na.current) : Gt(na, e.pool);
  }
  function y0() {
    var t = gr();
    return t === null ? null : { parent: Pt._currentValue, pool: t };
  }
  var Xa = Error(f(460)), yr = Error(f(474)), mf = Error(f(542)), _f = { then: function() {
  } };
  function p0(t) {
    return t = t.status, t === "fulfilled" || t === "rejected";
  }
  function T0(t, e, l) {
    switch (l = t[l], l === void 0 ? t.push(e) : l !== e && (e.then(Ol, Ol), e = l), e.status) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw t = e.reason, b0(t), t === void 0 && !("reason" in e) ? Error(f(600)) : t;
      default:
        if (typeof e.status == "string") e.then(Ol, Ol);
        else {
          if (t = Yt, t !== null && 100 < t.shellSuspendCounter)
            throw Error(f(482));
          t = e, t.status = "pending", t.then(
            function(n) {
              if (e.status === "pending") {
                var a = e;
                a.status = "fulfilled", a.value = n;
              }
            },
            function(n) {
              if (e.status === "pending") {
                var a = e;
                a.status = "rejected", a.reason = n;
              }
            }
          );
        }
        switch (e.status) {
          case "fulfilled":
            return e.value;
          case "rejected":
            throw t = e.reason, b0(t), t;
        }
        throw ua = e, Xa;
    }
  }
  function aa(t) {
    try {
      var e = t._init;
      return e(t._payload);
    } catch (l) {
      throw l !== null && typeof l == "object" && typeof l.then == "function" ? (ua = l, Xa) : l;
    }
  }
  var ua = null;
  function S0() {
    if (ua === null) throw Error(f(459));
    var t = ua;
    return ua = null, t;
  }
  function b0(t) {
    if (t === Xa || t === mf)
      throw Error(f(483));
  }
  var Va = null, Qu = 0;
  function vf(t) {
    var e = Qu;
    return Qu += 1, Va === null && (Va = []), T0(Va, t, e);
  }
  function vn(t, e) {
    e = e.props.ref, t.ref = e !== void 0 ? e : null;
  }
  function gf(t, e) {
    throw e.$$typeof === H ? Error(f(525)) : (t = Object.prototype.toString.call(e), Error(
      f(
        31,
        t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t
      )
    ));
  }
  function E0(t) {
    function e(A, O) {
      if (t) {
        var N = A.deletions;
        N === null ? (A.deletions = [O], A.flags |= 16) : N.push(O);
      }
    }
    function l(A, O) {
      if (!t) return null;
      for (; O !== null; )
        e(A, O), O = O.sibling;
      return null;
    }
    function n(A) {
      for (var O = /* @__PURE__ */ new Map(); A !== null; )
        A.key === null ? O.set(A.index, A) : O.set(A.key, A), A = A.sibling;
      return O;
    }
    function a(A, O) {
      return A = Zl(A, O), A.index = 0, A.sibling = null, A;
    }
    function i(A, O, N) {
      return A.index = N, t ? (N = A.alternate, N !== null ? (N = N.index, N < O ? (A.flags |= 2, O) : N) : (A.flags |= 134217730, O)) : (A.flags |= 1048576, O);
    }
    function o(A) {
      return t && A.alternate === null && (A.flags |= 134217730), A;
    }
    function _(A, O, N, Y) {
      return O === null || O.tag !== 6 ? (O = cr(N, A.mode, Y), O.return = A, O) : (O = a(O, N), O.return = A, O);
    }
    function T(A, O, N, Y) {
      var I = N.type;
      return I === it ? (A = x(
        A,
        O,
        N.props.children,
        Y,
        N.key
      ), vn(A, N), A) : O !== null && (O.elementType === I || typeof I == "object" && I !== null && I.$$typeof === $ && aa(I) === O.type) ? (O = a(O, N.props), vn(O, N), O.return = A, O) : (O = uf(
        N.type,
        N.key,
        N.props,
        null,
        A.mode,
        Y
      ), vn(O, N), O.return = A, O);
    }
    function M(A, O, N, Y) {
      return O === null || O.tag !== 4 || O.stateNode.containerInfo !== N.containerInfo || O.stateNode.implementation !== N.implementation ? (O = rr(N, A.mode, Y), O.return = A, O) : (O = a(O, N.children || []), O.return = A, O);
    }
    function x(A, O, N, Y, I) {
      return O === null || O.tag !== 7 ? (O = Wn(
        N,
        A.mode,
        Y,
        I
      ), O.return = A, O) : (O = a(O, N), O.return = A, O);
    }
    function q(A, O, N) {
      if (typeof O == "string" && O !== "" || typeof O == "number" || typeof O == "bigint")
        return O = cr(
          "" + O,
          A.mode,
          N
        ), O.return = A, O;
      if (typeof O == "object" && O !== null) {
        switch (O.$$typeof) {
          case j:
            return N = uf(
              O.type,
              O.key,
              O.props,
              null,
              A.mode,
              N
            ), vn(N, O), N.return = A, N;
          case k:
            return O = rr(
              O,
              A.mode,
              N
            ), O.return = A, O;
          case $:
            return O = aa(O), q(A, O, N);
        }
        if (zt(O) || et(O))
          return O = Wn(
            O,
            A.mode,
            N,
            null
          ), O.return = A, O;
        if (typeof O.then == "function")
          return q(A, vf(O), N);
        if (O.$$typeof === ft)
          return q(
            A,
            hf(A, O),
            N
          );
        gf(A, O);
      }
      return null;
    }
    function z(A, O, N, Y) {
      var I = O !== null ? O.key : null;
      if (typeof N == "string" && N !== "" || typeof N == "number" || typeof N == "bigint")
        return I !== null ? null : _(A, O, "" + N, Y);
      if (typeof N == "object" && N !== null) {
        switch (N.$$typeof) {
          case j:
            return N.key === I ? T(A, O, N, Y) : null;
          case k:
            return N.key === I ? M(A, O, N, Y) : null;
          case $:
            return N = aa(N), z(A, O, N, Y);
        }
        if (zt(N) || et(N))
          return I !== null ? null : x(A, O, N, Y, null);
        if (typeof N.then == "function")
          return z(
            A,
            O,
            vf(N),
            Y
          );
        if (N.$$typeof === ft)
          return z(
            A,
            O,
            hf(A, N),
            Y
          );
        gf(A, N);
      }
      return null;
    }
    function C(A, O, N, Y, I) {
      if (typeof Y == "string" && Y !== "" || typeof Y == "number" || typeof Y == "bigint")
        return A = A.get(N) || null, _(O, A, "" + Y, I);
      if (typeof Y == "object" && Y !== null) {
        switch (Y.$$typeof) {
          case j:
            return A = A.get(
              Y.key === null ? N : Y.key
            ) || null, T(O, A, Y, I);
          case k:
            return A = A.get(
              Y.key === null ? N : Y.key
            ) || null, M(O, A, Y, I);
          case $:
            return Y = aa(Y), C(
              A,
              O,
              N,
              Y,
              I
            );
        }
        if (zt(Y) || et(Y))
          return A = A.get(N) || null, x(O, A, Y, I, null);
        if (typeof Y.then == "function")
          return C(
            A,
            O,
            N,
            vf(Y),
            I
          );
        if (Y.$$typeof === ft)
          return C(
            A,
            O,
            N,
            hf(O, Y),
            I
          );
        gf(O, Y);
      }
      return null;
    }
    function J(A, O, N, Y) {
      for (var I = null, Et = null, at = O, ct = O = 0, le = null; at !== null && ct < N.length; ct++) {
        at.index > ct ? (le = at, at = null) : le = at.sibling;
        var Mt = z(
          A,
          at,
          N[ct],
          Y
        );
        if (Mt === null) {
          at === null && (at = le);
          break;
        }
        t && at && Mt.alternate === null && e(A, at), O = i(Mt, O, ct), Et === null ? I = Mt : Et.sibling = Mt, Et = Mt, at = le;
      }
      if (ct === N.length)
        return l(A, at), gt && Kl(A, ct), I;
      if (at === null) {
        for (; ct < N.length; ct++)
          at = q(A, N[ct], Y), at !== null && (O = i(
            at,
            O,
            ct
          ), Et === null ? I = at : Et.sibling = at, Et = at);
        return gt && Kl(A, ct), I;
      }
      for (at = n(at); ct < N.length; ct++)
        le = C(
          at,
          A,
          ct,
          N[ct],
          Y
        ), le !== null && (t && (Mt = le.alternate, Mt !== null && at.delete(Mt.key === null ? ct : Mt.key)), O = i(
          le,
          O,
          ct
        ), Et === null ? I = le : Et.sibling = le, Et = le);
      return t && at.forEach(function(Bn) {
        return e(A, Bn);
      }), gt && Kl(A, ct), I;
    }
    function P(A, O, N, Y) {
      if (N == null) throw Error(f(151));
      for (var I = null, Et = null, at = O, ct = O = 0, le = null, Mt = N.next(); at !== null && !Mt.done; ct++, Mt = N.next()) {
        at.index > ct ? (le = at, at = null) : le = at.sibling;
        var Bn = z(A, at, Mt.value, Y);
        if (Bn === null) {
          at === null && (at = le);
          break;
        }
        t && at && Bn.alternate === null && e(A, at), O = i(Bn, O, ct), Et === null ? I = Bn : Et.sibling = Bn, Et = Bn, at = le;
      }
      if (Mt.done)
        return l(A, at), gt && Kl(A, ct), I;
      if (at === null) {
        for (; !Mt.done; ct++, Mt = N.next())
          Mt = q(A, Mt.value, Y), Mt !== null && (O = i(Mt, O, ct), Et === null ? I = Mt : Et.sibling = Mt, Et = Mt);
        return gt && Kl(A, ct), I;
      }
      for (at = n(at); !Mt.done; ct++, Mt = N.next())
        Mt = C(at, A, ct, Mt.value, Y), Mt !== null && (t && (le = Mt.alternate, le !== null && at.delete(
          le.key === null ? ct : le.key
        )), O = i(Mt, O, ct), Et === null ? I = Mt : Et.sibling = Mt, Et = Mt);
      return t && at.forEach(function(Py) {
        return e(A, Py);
      }), gt && Kl(A, ct), I;
    }
    function mt(A, O, N, Y) {
      if (typeof N == "object" && N !== null && N.type === it && N.key === null && N.props.ref === void 0 && (N = N.props.children), typeof N == "object" && N !== null) {
        switch (N.$$typeof) {
          case j:
            t: {
              for (var I = N.key; O !== null; ) {
                if (O.key === I) {
                  if (I = N.type, I === it) {
                    if (O.tag === 7) {
                      l(
                        A,
                        O.sibling
                      ), Y = a(
                        O,
                        N.props.children
                      ), vn(Y, N), Y.return = A, A = Y;
                      break t;
                    }
                  } else if (O.elementType === I || typeof I == "object" && I !== null && I.$$typeof === $ && aa(I) === O.type) {
                    l(
                      A,
                      O.sibling
                    ), Y = a(O, N.props), vn(Y, N), Y.return = A, A = Y;
                    break t;
                  }
                  l(A, O);
                  break;
                } else e(A, O);
                O = O.sibling;
              }
              N.type === it ? (Y = Wn(
                N.props.children,
                A.mode,
                Y,
                N.key
              ), vn(Y, N), Y.return = A, A = Y) : (Y = uf(
                N.type,
                N.key,
                N.props,
                null,
                A.mode,
                Y
              ), vn(Y, N), Y.return = A, A = Y);
            }
            return o(A);
          case k:
            t: {
              for (I = N.key; O !== null; ) {
                if (O.key === I)
                  if (O.tag === 4 && O.stateNode.containerInfo === N.containerInfo && O.stateNode.implementation === N.implementation) {
                    l(
                      A,
                      O.sibling
                    ), Y = a(O, N.children || []), Y.return = A, A = Y;
                    break t;
                  } else {
                    l(A, O);
                    break;
                  }
                else e(A, O);
                O = O.sibling;
              }
              Y = rr(N, A.mode, Y), Y.return = A, A = Y;
            }
            return o(A);
          case $:
            return N = aa(N), mt(
              A,
              O,
              N,
              Y
            );
        }
        if (zt(N))
          return J(
            A,
            O,
            N,
            Y
          );
        if (et(N)) {
          if (I = et(N), typeof I != "function") throw Error(f(150));
          return N = I.call(N), P(
            A,
            O,
            N,
            Y
          );
        }
        if (typeof N.then == "function")
          return mt(
            A,
            O,
            vf(N),
            Y
          );
        if (N.$$typeof === ft)
          return mt(
            A,
            O,
            hf(A, N),
            Y
          );
        gf(A, N);
      }
      return typeof N == "string" && N !== "" || typeof N == "number" || typeof N == "bigint" ? (N = "" + N, O !== null && O.tag === 6 ? (l(A, O.sibling), Y = a(O, N), Y.return = A, A = Y) : (l(A, O), Y = cr(N, A.mode, Y), Y.return = A, A = Y), o(A)) : l(A, O);
    }
    return function(A, O, N, Y) {
      try {
        Qu = 0;
        var I = mt(
          A,
          O,
          N,
          Y
        );
        return Va = null, I;
      } catch (at) {
        if (at === Xa || at === mf) throw at;
        var Et = De(29, at, null, A.mode);
        return Et.lanes = Y, Et.return = A, Et;
      }
    };
  }
  var ia = E0(!0), O0 = E0(!1), gn = !1;
  function pr(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Tr(t, e) {
    t = t.updateQueue, e.updateQueue === t && (e.updateQueue = {
      baseState: t.baseState,
      firstBaseUpdate: t.firstBaseUpdate,
      lastBaseUpdate: t.lastBaseUpdate,
      shared: t.shared,
      callbacks: null
    });
  }
  function yn(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function pn(t, e, l) {
    var n = t.updateQueue;
    if (n === null) return null;
    if (n = n.shared, (Ct & 2) !== 0) {
      var a = n.pending;
      return a === null ? e.next = e : (e.next = a.next, a.next = e), n.pending = e, e = af(t), f0(t, null, l), e;
    }
    return nf(t, n, e, l), af(t);
  }
  function Zu(t, e, l) {
    if (e = e.updateQueue, e !== null && (e = e.shared, (l & 4194048) !== 0)) {
      var n = e.lanes;
      n &= t.pendingLanes, l |= n, e.lanes = l, oh(t, l);
    }
  }
  function Sr(t, e) {
    var l = t.updateQueue, n = t.alternate;
    if (n !== null && (n = n.updateQueue, l === n)) {
      var a = null, i = null;
      if (l = l.firstBaseUpdate, l !== null) {
        do {
          var o = {
            lane: l.lane,
            tag: l.tag,
            payload: l.payload,
            callback: null,
            next: null
          };
          i === null ? a = i = o : i = i.next = o, l = l.next;
        } while (l !== null);
        i === null ? a = i = e : i = i.next = e;
      } else a = i = e;
      l = {
        baseState: n.baseState,
        firstBaseUpdate: a,
        lastBaseUpdate: i,
        shared: n.shared,
        callbacks: n.callbacks
      }, t.updateQueue = l;
      return;
    }
    t = l.lastBaseUpdate, t === null ? l.firstBaseUpdate = e : t.next = e, l.lastBaseUpdate = e;
  }
  var br = !1;
  function Ku() {
    if (br) {
      var t = ja;
      if (t !== null) throw t;
    }
  }
  function Ju(t, e, l, n) {
    br = !1;
    var a = t.updateQueue;
    gn = !1;
    var i = a.firstBaseUpdate, o = a.lastBaseUpdate, _ = a.shared.pending;
    if (_ !== null) {
      a.shared.pending = null;
      var T = _, M = T.next;
      T.next = null, o === null ? i = M : o.next = M, o = T;
      var x = t.alternate;
      x !== null && (x = x.updateQueue, _ = x.lastBaseUpdate, _ !== o && (_ === null ? x.firstBaseUpdate = M : _.next = M, x.lastBaseUpdate = T));
    }
    if (i !== null) {
      var q = a.baseState;
      o = 0, x = M = T = null, _ = i;
      do {
        var z = _.lane & -536870913, C = z !== _.lane;
        if (C ? (bt & z) === z : (n & z) === z) {
          z !== 0 && z === la && (br = !0), x !== null && (x = x.next = {
            lane: 0,
            tag: _.tag,
            payload: _.payload,
            callback: null,
            next: null
          });
          t: {
            var J = t, P = _;
            z = e;
            var mt = l;
            switch (P.tag) {
              case 1:
                if (J = P.payload, typeof J == "function") {
                  q = J.call(mt, q, z);
                  break t;
                }
                q = J;
                break t;
              case 3:
                J.flags = J.flags & -65537 | 128;
              case 0:
                if (J = P.payload, z = typeof J == "function" ? J.call(mt, q, z) : J, z == null) break t;
                q = B({}, q, z);
                break t;
              case 2:
                gn = !0;
            }
          }
          z = _.callback, z !== null && (t.flags |= 64, C && (t.flags |= 8192), C = a.callbacks, C === null ? a.callbacks = [z] : C.push(z));
        } else
          C = {
            lane: z,
            tag: _.tag,
            payload: _.payload,
            callback: _.callback,
            next: null
          }, x === null ? (M = x = C, T = q) : x = x.next = C, o |= z;
        if (_ = _.next, _ === null) {
          if (_ = a.shared.pending, _ === null)
            break;
          C = _, _ = C.next, C.next = null, a.lastBaseUpdate = C, a.shared.pending = null;
        }
      } while (!0);
      x === null && (T = q), a.baseState = T, a.firstBaseUpdate = M, a.lastBaseUpdate = x, i === null && (a.shared.lanes = 0), An |= o, t.lanes = o, t.memoizedState = q;
    }
  }
  function z0(t, e) {
    if (typeof t != "function")
      throw Error(f(191, t));
    t.call(e);
  }
  function A0(t, e) {
    var l = t.callbacks;
    if (l !== null)
      for (t.callbacks = null, t = 0; t < l.length; t++)
        z0(l[t], e);
  }
  var Tn = bl(null), yf = bl(0);
  function M0(t, e) {
    t = Pl, Gt(yf, t), Gt(Tn, e), Pl = t | e.baseLanes;
  }
  function Er() {
    Gt(yf, Pl), Gt(Tn, Tn.current);
  }
  function Or() {
    Pl = yf.current, oe(Tn), oe(yf);
  }
  var me = bl(null), Te = null;
  function Sn(t) {
    var e = t.alternate;
    Gt(_e, _e.current & 1), Gt(me, t), Te === null && (e === null || Tn.current !== null || e.memoizedState !== null) && (Te = t);
  }
  function zr(t) {
    Gt(_e, _e.current), Gt(me, t), Te === null && (Te = t);
  }
  function D0(t) {
    t.tag === 22 ? (Gt(_e, _e.current), Gt(me, t), Te === null && (Te = t)) : bn();
  }
  function bn() {
    Gt(_e, _e.current), Gt(me, me.current);
  }
  function Qe(t) {
    oe(me), Te === t && (Te = null), oe(_e);
  }
  var _e = bl(0);
  function Fu(t, e) {
    Gt(me, me.current), Gt(_e, e);
  }
  function Ar(t) {
    oe(_e), oe(me), Te === t && (Te = null);
  }
  function pf(t) {
    for (var e = t; e !== null; ) {
      if (e.tag === 13) {
        var l = e.memoizedState;
        if (l !== null && (l = l.dehydrated, l === null || Fs(l) || ks(l)))
          return e;
      } else if (e.tag === 19 && e.memoizedProps.revealOrder !== "independent") {
        if ((e.flags & 128) !== 0) return e;
      } else if (e.child !== null) {
        e.child.return = e, e = e.child;
        continue;
      }
      if (e === t) break;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) return null;
        e = e.return;
      }
      e.sibling.return = e.return, e = e.sibling;
    }
    return null;
  }
  var kl = 0, dt = null, Bt = null, te = null, Tf = !1, La = !1, fa = !1, Sf = 0, ku = 0, Qa = null, T1 = 0;
  function Ft() {
    throw Error(f(321));
  }
  function Mr(t, e) {
    if (e === null) return !1;
    for (var l = 0; l < e.length && l < t.length; l++)
      if (!Le(t[l], e[l])) return !1;
    return !0;
  }
  function Dr(t, e, l, n, a, i) {
    return kl = i, dt = e, e.memoizedState = null, e.updateQueue = null, e.lanes = 0, tt.H = t === null || t.memoizedState === null ? od : hd, fa = !1, i = l(n, a), fa = !1, La && (i = C0(
      e,
      l,
      n,
      a
    )), N0(t), i;
  }
  function N0(t) {
    tt.H = Df;
    var e = Bt !== null && Bt.next !== null;
    if (kl = 0, te = Bt = dt = null, Tf = !1, ku = 0, Qa = null, e) throw Error(f(300));
    t === null || ee || (t = t.dependencies, t !== null && of(t) && (ee = !0));
  }
  function C0(t, e, l, n) {
    dt = t;
    var a = 0;
    do {
      if (La && (Qa = null), ku = 0, La = !1, 25 <= a) throw Error(f(301));
      if (a += 1, te = Bt = null, t.updateQueue != null) {
        var i = t.updateQueue;
        i.lastEffect = null, i.events = null, i.stores = null, i.memoCache != null && (i.memoCache.index = 0);
      }
      tt.H = D1, i = e(l, n);
    } while (La);
    return i;
  }
  function S1() {
    var t = tt.H, e = t.useState()[0];
    return e = typeof e.then == "function" ? $u(e) : e, t = t.useState()[0], (Bt !== null ? Bt.memoizedState : null) !== t && (dt.flags |= 1024), e;
  }
  function Nr() {
    var t = Sf !== 0;
    return Sf = 0, t;
  }
  function Cr(t, e, l) {
    e.updateQueue = t.updateQueue, e.flags &= -2053, t.lanes &= ~l;
  }
  function Rr(t) {
    if (Tf) {
      for (t = t.memoizedState; t !== null; ) {
        var e = t.queue;
        e !== null && (e.pending = null), t = t.next;
      }
      Tf = !1;
    }
    kl = 0, te = Bt = dt = null, La = !1, ku = Sf = 0, Qa = null;
  }
  function Oe() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return te === null ? dt.memoizedState = te = t : te = te.next = t, te;
  }
  function Wt() {
    if (Bt === null) {
      var t = dt.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = Bt.next;
    var e = te === null ? dt.memoizedState : te.next;
    if (e !== null)
      te = e, Bt = t;
    else {
      if (t === null)
        throw dt.alternate === null ? Error(f(467)) : Error(f(310));
      Bt = t, t = {
        memoizedState: Bt.memoizedState,
        baseState: Bt.baseState,
        baseQueue: Bt.baseQueue,
        queue: Bt.queue,
        next: null
      }, te === null ? dt.memoizedState = te = t : te = te.next = t;
    }
    return te;
  }
  function bf() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function $u(t) {
    var e = ku;
    return ku += 1, Qa === null && (Qa = []), t = T0(Qa, t, e), e = dt, (te === null ? e.memoizedState : te.next) === null && (e = e.alternate, tt.H = e === null || e.memoizedState === null ? od : hd), t;
  }
  function Ef(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return $u(t);
      if (t.$$typeof === X) return;
      if (t.$$typeof === ft) return de(t);
    }
    throw Error(f(438, String(t)));
  }
  function xr(t) {
    var e = null, l = dt.updateQueue;
    if (l !== null && (e = l.memoCache), e == null) {
      var n = dt.alternate;
      n !== null && (n = n.updateQueue, n !== null && (n = n.memoCache, n != null && (e = {
        data: n.data.map(function(a) {
          return a.slice();
        }),
        index: 0
      })));
    }
    if (e == null && (e = { data: [], index: 0 }), l === null && (l = bf(), dt.updateQueue = l), l.memoCache = e, l = e.data[e.index], l === void 0)
      for (l = e.data[e.index] = Array(t), n = 0; n < t; n++)
        l[n] = se;
    return e.index++, l;
  }
  function $l(t, e) {
    return typeof e == "function" ? e(t) : e;
  }
  function Of(t) {
    var e = Wt();
    return Ur(e, Bt, t);
  }
  function Ur(t, e, l) {
    var n = t.queue;
    if (n === null) throw Error(f(311));
    n.lastRenderedReducer = l;
    var a = t.baseQueue, i = n.pending;
    if (i !== null) {
      if (a !== null) {
        var o = a.next;
        a.next = i.next, i.next = o;
      }
      e.baseQueue = a = i, n.pending = null;
    }
    if (i = t.baseState, a === null) t.memoizedState = i;
    else {
      e = a.next;
      var _ = o = null, T = null, M = e, x = !1;
      do {
        var q = M.lane & -536870913;
        if (q !== M.lane ? (bt & q) === q : (kl & q) === q) {
          var z = M.revertLane;
          if (z === 0)
            T !== null && (T = T.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: M.action,
              hasEagerState: M.hasEagerState,
              eagerState: M.eagerState,
              next: null
            }), q === la && (x = !0);
          else if ((kl & z) === z) {
            M = M.next, z === la && (x = !0);
            continue;
          } else
            q = {
              lane: 0,
              revertLane: M.revertLane,
              gesture: null,
              action: M.action,
              hasEagerState: M.hasEagerState,
              eagerState: M.eagerState,
              next: null
            }, T === null ? (_ = T = q, o = i) : T = T.next = q, dt.lanes |= z, An |= z;
          q = M.action, fa && l(i, q), i = M.hasEagerState ? M.eagerState : l(i, q);
        } else
          z = {
            lane: q,
            revertLane: M.revertLane,
            gesture: M.gesture,
            action: M.action,
            hasEagerState: M.hasEagerState,
            eagerState: M.eagerState,
            next: null
          }, T === null ? (_ = T = z, o = i) : T = T.next = z, dt.lanes |= q, An |= q;
        M = M.next;
      } while (M !== null && M !== e);
      if (T === null ? o = i : T.next = _, !Le(i, t.memoizedState) && (ee = !0, x && (l = ja, l !== null)))
        throw l;
      t.memoizedState = i, t.baseState = o, t.baseQueue = T, n.lastRenderedState = i;
    }
    return a === null && (n.lanes = 0), [t.memoizedState, n.dispatch];
  }
  function Hr(t) {
    var e = Wt(), l = e.queue;
    if (l === null) throw Error(f(311));
    l.lastRenderedReducer = t;
    var n = l.dispatch, a = l.pending, i = e.memoizedState;
    if (a !== null) {
      l.pending = null;
      var o = a = a.next;
      do
        i = t(i, o.action), o = o.next;
      while (o !== a);
      Le(i, e.memoizedState) || (ee = !0), e.memoizedState = i, e.baseQueue === null && (e.baseState = i), l.lastRenderedState = i;
    }
    return [i, n];
  }
  function R0(t, e, l) {
    var n = dt, a = Wt(), i = gt;
    if (i) {
      if (l === void 0) throw Error(f(407));
      l = l();
    } else l = e();
    var o = !Le(
      (Bt || a).memoizedState,
      l
    );
    if (o && (a.memoizedState = l, ee = !0), a = a.queue, qr(H0.bind(null, n, a, t), [
      t
    ]), t = a.getSnapshot !== e || o || te !== null && (te.memoizedState.tag & 1) !== 0, Za(
      t ? 9 : 8,
      { destroy: void 0 },
      U0.bind(null, n, a, l, e),
      null
    ), t) {
      if (n.flags |= 2048, Yt === null) throw Error(f(349));
      i || (kl & 127) !== 0 || x0(n, e, l);
    }
    return l;
  }
  function x0(t, e, l) {
    t.flags |= 16384, t = { getSnapshot: e, value: l }, e = dt.updateQueue, e === null ? (e = bf(), dt.updateQueue = e, e.stores = [t]) : (l = e.stores, l === null ? e.stores = [t] : l.push(t));
  }
  function U0(t, e, l, n) {
    e.value = l, e.getSnapshot = n, B0(e) && Y0(t);
  }
  function H0(t, e, l) {
    return l(function() {
      B0(e) && Y0(t);
    });
  }
  function B0(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var l = e();
      return !Le(t, l);
    } catch {
      return !0;
    }
  }
  function Y0(t) {
    var e = $n(t, 2);
    e !== null && xe(e, t, 2);
  }
  function Br(t) {
    var e = Oe();
    if (typeof t == "function") {
      var l = t;
      if (t = l(), fa) {
        rn(!0);
        try {
          l();
        } finally {
          rn(!1);
        }
      }
    }
    return e.memoizedState = e.baseState = t, e.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: $l,
      lastRenderedState: t
    }, e;
  }
  function q0(t, e, l, n) {
    return t.baseState = l, Ur(
      t,
      Bt,
      typeof n == "function" ? n : $l
    );
  }
  function b1(t, e, l, n, a) {
    if (Mf(t)) throw Error(f(485));
    if (t = e.action, t !== null) {
      var i = {
        payload: a,
        action: t,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(o) {
          i.listeners.push(o);
        }
      };
      tt.T !== null ? l(!0) : i.isTransition = !1, n(i), l = e.pending, l === null ? (i.next = e.pending = i, w0(e, i)) : (i.next = l.next, e.pending = l.next = i);
    }
  }
  function w0(t, e) {
    var l = e.action, n = e.payload, a = t.state;
    if (e.isTransition) {
      var i = tt.T, o = {};
      o.types = i !== null ? i.types : null, tt.T = o;
      try {
        var _ = l(a, n), T = tt.S;
        T !== null && T(o, _), G0(t, e, _);
      } catch (M) {
        Yr(t, e, M);
      } finally {
        i !== null && o.types !== null && (i.types = o.types), tt.T = i;
      }
    } else
      try {
        i = l(a, n), G0(t, e, i);
      } catch (M) {
        Yr(t, e, M);
      }
  }
  function G0(t, e, l) {
    l !== null && typeof l == "object" && typeof l.then == "function" ? l.then(
      function(n) {
        j0(t, e, n);
      },
      function(n) {
        return Yr(t, e, n);
      }
    ) : j0(t, e, l);
  }
  function j0(t, e, l) {
    e.status = "fulfilled", e.value = l, X0(e), t.state = l, e = t.pending, e !== null && (l = e.next, l === e ? t.pending = null : (l = l.next, e.next = l, w0(t, l)));
  }
  function Yr(t, e, l) {
    var n = t.pending;
    if (t.pending = null, n !== null) {
      n = n.next;
      do
        e.status = "rejected", e.reason = l, X0(e), e = e.next;
      while (e !== n);
    }
    t.action = null;
  }
  function X0(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function V0(t, e) {
    return e;
  }
  function L0(t, e) {
    if (gt) {
      var l = Yt.formState;
      if (l !== null) {
        t: {
          var n = dt;
          if (gt) {
            if (jt) {
              e: {
                for (var a = jt, i = cl; a.nodeType !== 8; ) {
                  if (!i) {
                    a = null;
                    break e;
                  }
                  if (a = sl(
                    a.nextSibling
                  ), a === null) {
                    a = null;
                    break e;
                  }
                }
                i = a.data, a = i === "F!" || i === "F" ? a : null;
              }
              if (a) {
                jt = sl(
                  a.nextSibling
                ), n = a.data === "F!";
                break t;
              }
            }
            mn(n);
          }
          n = !1;
        }
        n && (e = l[0]);
      }
    }
    return l = Oe(), l.memoizedState = l.baseState = e, n = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: V0,
      lastRenderedState: e
    }, l.queue = n, l = cd.bind(
      null,
      dt,
      n
    ), n.dispatch = l, n = Br(!1), i = Vr.bind(
      null,
      dt,
      !1,
      n.queue
    ), n = Oe(), a = {
      state: e,
      dispatch: null,
      action: t,
      pending: null
    }, n.queue = a, l = b1.bind(
      null,
      dt,
      a,
      i,
      l
    ), a.dispatch = l, n.memoizedState = t, [e, l, !1];
  }
  function Q0(t) {
    var e = Wt();
    return Z0(e, Bt, t);
  }
  function Z0(t, e, l) {
    if (e = Ur(
      t,
      e,
      V0
    )[0], t = Of($l)[0], typeof e == "object" && e !== null && typeof e.then == "function")
      try {
        var n = $u(e);
      } catch (o) {
        throw o === Xa ? mf : o;
      }
    else n = e;
    e = Wt();
    var a = e.queue, i = a.dispatch;
    return l !== e.memoizedState && (dt.flags |= 2048, Za(
      9,
      { destroy: void 0 },
      E1.bind(null, a, l),
      null
    )), [n, i, t];
  }
  function E1(t, e) {
    t.action = e;
  }
  function K0(t) {
    var e = Wt(), l = Bt;
    if (l !== null)
      return Z0(e, l, t);
    Wt(), e = e.memoizedState, l = Wt();
    var n = l.queue.dispatch;
    return l.memoizedState = t, [e, n, !1];
  }
  function Za(t, e, l, n) {
    return t = { tag: t, create: l, deps: n, inst: e, next: null }, e = dt.updateQueue, e === null && (e = bf(), dt.updateQueue = e), l = e.lastEffect, l === null ? e.lastEffect = t.next = t : (n = l.next, l.next = t, t.next = n, e.lastEffect = t), t;
  }
  function J0() {
    return Wt().memoizedState;
  }
  function zf(t, e, l, n) {
    var a = Oe();
    dt.flags |= t, a.memoizedState = Za(
      1 | e,
      { destroy: void 0 },
      l,
      n === void 0 ? null : n
    );
  }
  function Af(t, e, l, n) {
    var a = Wt();
    n = n === void 0 ? null : n;
    var i = a.memoizedState.inst;
    Bt !== null && n !== null && Mr(n, Bt.memoizedState.deps) ? a.memoizedState = Za(e, i, l, n) : (dt.flags |= t, a.memoizedState = Za(
      1 | e,
      i,
      l,
      n
    ));
  }
  function F0(t, e) {
    zf(8390656, 8, t, e);
  }
  function qr(t, e) {
    Af(2048, 8, t, e);
  }
  function O1(t) {
    dt.flags |= 4;
    var e = dt.updateQueue;
    if (e === null)
      e = bf(), dt.updateQueue = e, e.events = [t];
    else {
      var l = e.events;
      l === null ? e.events = [t] : l.push(t);
    }
  }
  function k0(t) {
    var e = Wt().memoizedState;
    return O1({ ref: e, nextImpl: t }), function() {
      if ((Ct & 2) !== 0) throw Error(f(440));
      return e.impl.apply(void 0, arguments);
    };
  }
  function $0(t, e) {
    return Af(4, 2, t, e);
  }
  function W0(t, e) {
    return Af(4, 4, t, e);
  }
  function I0(t, e) {
    if (typeof e == "function") {
      t = t();
      var l = e(t);
      return function() {
        typeof l == "function" ? l() : e(null);
      };
    }
    if (e != null)
      return t = t(), e.current = t, function() {
        e.current = null;
      };
  }
  function P0(t, e, l) {
    l = l != null ? l.concat([t]) : null, Af(4, 4, I0.bind(null, e, t), l);
  }
  function wr() {
  }
  function td(t, e) {
    var l = Wt();
    e = e === void 0 ? null : e;
    var n = l.memoizedState;
    return e !== null && Mr(e, n[1]) ? n[0] : (l.memoizedState = [t, e], t);
  }
  function ed(t, e) {
    var l = Wt();
    e = e === void 0 ? null : e;
    var n = l.memoizedState;
    if (e !== null && Mr(e, n[1]))
      return n[0];
    if (n = t(), fa) {
      rn(!0);
      try {
        t();
      } finally {
        rn(!1);
      }
    }
    return l.memoizedState = [n, e], n;
  }
  function Gr(t, e, l) {
    return l === void 0 || (kl & 1073741824) !== 0 && (bt & 261930) === 0 ? t.memoizedState = e : (t.memoizedState = l, t = om(), dt.lanes |= t, An |= t, l);
  }
  function ld(t, e, l, n) {
    return Le(l, e) ? l : Tn.current !== null ? (t = Gr(t, l, n), Le(t, e) || (ee = !0), t) : (kl & 106) === 0 || (kl & 1073741824) !== 0 && (bt & 261930) === 0 ? (ee = !0, t.memoizedState = l) : (t = om(), dt.lanes |= t, An |= t, e);
  }
  function nd(t, e, l, n, a) {
    var i = rt.p;
    rt.p = i !== 0 && 8 > i ? i : 8;
    var o = tt.T, _ = {};
    _.types = o !== null ? o.types : null, tt.T = _, Vr(t, !1, e, l);
    try {
      var T = a(), M = tt.S;
      if (M !== null && M(_, T), T !== null && typeof T == "object" && typeof T.then == "function") {
        var x = p1(
          T,
          n
        );
        Wu(
          t,
          e,
          x,
          Fe(t)
        );
      } else
        Wu(
          t,
          e,
          n,
          Fe(t)
        );
    } catch (q) {
      Wu(
        t,
        e,
        { then: function() {
        }, status: "rejected", reason: q },
        Fe()
      );
    } finally {
      rt.p = i, o !== null && _.types !== null && (o.types = _.types), tt.T = o;
    }
  }
  function z1() {
  }
  function jr(t, e, l, n) {
    if (t.tag !== 5) throw Error(f(476));
    var a = ad(t).queue;
    nd(
      t,
      a,
      e,
      _l,
      l === null ? z1 : function() {
        return ud(t), l(n);
      }
    );
  }
  function ad(t) {
    var e = t.memoizedState;
    if (e !== null) return e;
    e = {
      memoizedState: _l,
      baseState: _l,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: $l,
        lastRenderedState: _l
      },
      next: null
    };
    var l = {};
    return e.next = {
      memoizedState: l,
      baseState: l,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: $l,
        lastRenderedState: l
      },
      next: null
    }, t.memoizedState = e, t = t.alternate, t !== null && (t.memoizedState = e), e;
  }
  function ud(t) {
    var e = ad(t);
    e.next === null && (e = t.alternate.memoizedState), Wu(
      t,
      e.next.queue,
      {},
      Fe()
    );
  }
  function Xr() {
    return de(su);
  }
  function id() {
    return Wt().memoizedState;
  }
  function fd() {
    return Wt().memoizedState;
  }
  function A1(t) {
    for (var e = t.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var l = Fe();
          t = yn(l);
          var n = pn(e, t, l);
          n !== null && (xe(n, e, l), Zu(n, e, l)), e = { cache: _r() }, t.payload = e;
          return;
      }
      e = e.return;
    }
  }
  function M1(t, e, l) {
    var n = Fe();
    l = {
      lane: n,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Mf(t) ? rd(e, l) : (l = ir(t, e, l, n), l !== null && (xe(l, t, n), sd(l, e, n)));
  }
  function cd(t, e, l) {
    var n = Fe();
    Wu(t, e, l, n);
  }
  function Wu(t, e, l, n) {
    var a = {
      lane: n,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Mf(t)) rd(e, a);
    else {
      var i = t.alternate;
      if (t.lanes === 0 && (i === null || i.lanes === 0) && (i = e.lastRenderedReducer, i !== null))
        try {
          var o = e.lastRenderedState, _ = i(o, l);
          if (a.hasEagerState = !0, a.eagerState = _, Le(_, o))
            return nf(t, e, a, 0), Yt === null && lf(), !1;
        } catch {
        }
      if (l = ir(t, e, a, n), l !== null)
        return xe(l, t, n), sd(l, e, n), !0;
    }
    return !1;
  }
  function Vr(t, e, l, n) {
    if (n = {
      lane: 2,
      revertLane: xs(),
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Mf(t)) {
      if (e) throw Error(f(479));
    } else
      e = ir(
        t,
        l,
        n,
        2
      ), e !== null && xe(e, t, 2);
  }
  function Mf(t) {
    var e = t.alternate;
    return t === dt || e !== null && e === dt;
  }
  function rd(t, e) {
    La = Tf = !0;
    var l = t.pending;
    l === null ? e.next = e : (e.next = l.next, l.next = e), t.pending = e;
  }
  function sd(t, e, l) {
    if ((l & 4194048) !== 0) {
      var n = e.lanes;
      n &= t.pendingLanes, l |= n, e.lanes = l, oh(t, l);
    }
  }
  var Df = {
    readContext: de,
    use: Ef,
    useCallback: Ft,
    useContext: Ft,
    useEffect: Ft,
    useImperativeHandle: Ft,
    useLayoutEffect: Ft,
    useInsertionEffect: Ft,
    useMemo: Ft,
    useReducer: Ft,
    useRef: Ft,
    useState: Ft,
    useDebugValue: Ft,
    useDeferredValue: Ft,
    useTransition: Ft,
    useSyncExternalStore: Ft,
    useId: Ft,
    useHostTransitionStatus: Ft,
    useFormState: Ft,
    useActionState: Ft,
    useOptimistic: Ft,
    useMemoCache: Ft,
    useCacheRefresh: Ft,
    useEffectEvent: Ft
  }, od = {
    readContext: de,
    use: Ef,
    useCallback: function(t, e) {
      return Oe().memoizedState = [
        t,
        e === void 0 ? null : e
      ], t;
    },
    useContext: de,
    useEffect: F0,
    useImperativeHandle: function(t, e, l) {
      l = l != null ? l.concat([t]) : null, zf(
        4194308,
        4,
        I0.bind(null, e, t),
        l
      );
    },
    useLayoutEffect: function(t, e) {
      return zf(4194308, 4, t, e);
    },
    useInsertionEffect: function(t, e) {
      zf(4, 2, t, e);
    },
    useMemo: function(t, e) {
      var l = Oe();
      e = e === void 0 ? null : e;
      var n = t();
      if (fa) {
        rn(!0);
        try {
          t();
        } finally {
          rn(!1);
        }
      }
      return l.memoizedState = [n, e], n;
    },
    useReducer: function(t, e, l) {
      var n = Oe();
      if (l !== void 0) {
        var a = l(e);
        if (fa) {
          rn(!0);
          try {
            l(e);
          } finally {
            rn(!1);
          }
        }
      } else a = e;
      return n.memoizedState = n.baseState = a, t = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: t,
        lastRenderedState: a
      }, n.queue = t, t = t.dispatch = M1.bind(
        null,
        dt,
        t
      ), [n.memoizedState, t];
    },
    useRef: function(t) {
      var e = Oe();
      return t = { current: t }, e.memoizedState = t;
    },
    useState: function(t) {
      t = Br(t);
      var e = t.queue, l = cd.bind(null, dt, e);
      return e.dispatch = l, [t.memoizedState, l];
    },
    useDebugValue: wr,
    useDeferredValue: function(t, e) {
      var l = Oe();
      return Gr(l, t, e);
    },
    useTransition: function() {
      var t = Br(!1);
      return t = nd.bind(
        null,
        dt,
        t.queue,
        !0,
        !1
      ), Oe().memoizedState = t, [!1, t];
    },
    useSyncExternalStore: function(t, e, l) {
      var n = dt, a = Oe();
      if (gt) {
        if (l === void 0)
          throw Error(f(407));
        l = l();
      } else {
        if (l = e(), Yt === null)
          throw Error(f(349));
        (bt & 127) !== 0 || x0(n, e, l);
      }
      a.memoizedState = l;
      var i = { value: l, getSnapshot: e };
      return a.queue = i, F0(H0.bind(null, n, i, t), [
        t
      ]), n.flags |= 2048, Za(
        9,
        { destroy: void 0 },
        U0.bind(
          null,
          n,
          i,
          l,
          e
        ),
        null
      ), l;
    },
    useId: function() {
      var t = Oe(), e = Yt.identifierPrefix;
      if (gt) {
        var l = Al, n = zl;
        l = (n & ~(1 << 32 - Xe(n) - 1)).toString(32) + l, e = "_" + e + "R_" + l, l = Sf++, 0 < l && (e += "H" + l.toString(32)), e += "_";
      } else
        l = T1++, e = "_" + e + "r_" + l.toString(32) + "_";
      return t.memoizedState = e;
    },
    useHostTransitionStatus: Xr,
    useFormState: L0,
    useActionState: L0,
    useOptimistic: function(t) {
      var e = Oe();
      e.memoizedState = e.baseState = t;
      var l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return e.queue = l, e = Vr.bind(
        null,
        dt,
        !0,
        l
      ), l.dispatch = e, [t, e];
    },
    useMemoCache: xr,
    useCacheRefresh: function() {
      return Oe().memoizedState = A1.bind(
        null,
        dt
      );
    },
    useEffectEvent: function(t) {
      var e = Oe(), l = { impl: t };
      return e.memoizedState = l, function() {
        if ((Ct & 2) !== 0)
          throw Error(f(440));
        return l.impl.apply(void 0, arguments);
      };
    }
  }, hd = {
    readContext: de,
    use: Ef,
    useCallback: td,
    useContext: de,
    useEffect: qr,
    useImperativeHandle: P0,
    useInsertionEffect: $0,
    useLayoutEffect: W0,
    useMemo: ed,
    useReducer: Of,
    useRef: J0,
    useState: function() {
      return Of($l);
    },
    useDebugValue: wr,
    useDeferredValue: function(t, e) {
      var l = Wt();
      return ld(
        l,
        Bt.memoizedState,
        t,
        e
      );
    },
    useTransition: function() {
      var t = Of($l)[0], e = Wt().memoizedState;
      return [
        typeof t == "boolean" ? t : $u(t),
        e
      ];
    },
    useSyncExternalStore: R0,
    useId: id,
    useHostTransitionStatus: Xr,
    useFormState: Q0,
    useActionState: Q0,
    useOptimistic: function(t, e) {
      var l = Wt();
      return q0(l, Bt, t, e);
    },
    useMemoCache: xr,
    useCacheRefresh: fd,
    useEffectEvent: k0
  }, D1 = {
    readContext: de,
    use: Ef,
    useCallback: td,
    useContext: de,
    useEffect: qr,
    useImperativeHandle: P0,
    useInsertionEffect: $0,
    useLayoutEffect: W0,
    useMemo: ed,
    useReducer: Hr,
    useRef: J0,
    useState: function() {
      return Hr($l);
    },
    useDebugValue: wr,
    useDeferredValue: function(t, e) {
      var l = Wt();
      return Bt === null ? Gr(l, t, e) : ld(
        l,
        Bt.memoizedState,
        t,
        e
      );
    },
    useTransition: function() {
      var t = Hr($l)[0], e = Wt().memoizedState;
      return [
        typeof t == "boolean" ? t : $u(t),
        e
      ];
    },
    useSyncExternalStore: R0,
    useId: id,
    useHostTransitionStatus: Xr,
    useFormState: K0,
    useActionState: K0,
    useOptimistic: function(t, e) {
      var l = Wt();
      return Bt !== null ? q0(l, Bt, t, e) : (l.baseState = t, [t, l.queue.dispatch]);
    },
    useMemoCache: xr,
    useCacheRefresh: fd,
    useEffectEvent: k0
  };
  function Lr(t, e, l, n) {
    e = t.memoizedState, l = l(n, e), l = l == null ? e : B({}, e, l), t.memoizedState = l, t.lanes === 0 && (t.updateQueue.baseState = l);
  }
  var Qr = {
    enqueueSetState: function(t, e, l) {
      t = t._reactInternals;
      var n = Fe(), a = yn(n);
      a.payload = e, l != null && (a.callback = l), e = pn(t, a, n), e !== null && (xe(e, t, n), Zu(e, t, n));
    },
    enqueueReplaceState: function(t, e, l) {
      t = t._reactInternals;
      var n = Fe(), a = yn(n);
      a.tag = 1, a.payload = e, l != null && (a.callback = l), e = pn(t, a, n), e !== null && (xe(e, t, n), Zu(e, t, n));
    },
    enqueueForceUpdate: function(t, e) {
      t = t._reactInternals;
      var l = Fe(), n = yn(l);
      n.tag = 2, e != null && (n.callback = e), e = pn(t, n, l), e !== null && (xe(e, t, l), Zu(e, t, l));
    }
  };
  function dd(t, e, l, n, a, i, o) {
    return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(n, i, o) : e.prototype && e.prototype.isPureReactComponent ? !qu(l, n) || !qu(a, i) : !0;
  }
  function md(t, e, l, n) {
    t = e.state, typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(l, n), typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(l, n), e.state !== t && Qr.enqueueReplaceState(e, e.state, null);
  }
  function ca(t, e) {
    var l = e;
    if ("ref" in e) {
      l = {};
      for (var n in e)
        n !== "ref" && (l[n] = e[n]);
    }
    if (t = t.defaultProps) {
      l === e && (l = B({}, l));
      for (var a in t)
        l[a] === void 0 && (l[a] = t[a]);
    }
    return l;
  }
  function _d(t) {
    ef(t);
  }
  function vd(t) {
    console.error(t);
  }
  function gd(t) {
    ef(t);
  }
  function Nf(t, e) {
    try {
      var l = t.onUncaughtError;
      l(e.value, { componentStack: e.stack });
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  function yd(t, e, l) {
    try {
      var n = t.onCaughtError;
      n(l.value, {
        componentStack: l.stack,
        errorBoundary: e.tag === 1 ? e.stateNode : null
      });
    } catch (a) {
      setTimeout(function() {
        throw a;
      });
    }
  }
  function Zr(t, e, l) {
    return l = yn(l), l.tag = 3, l.payload = { element: null }, l.callback = function() {
      Nf(t, e);
    }, l;
  }
  function pd(t) {
    return t = yn(t), t.tag = 3, t;
  }
  function Td(t, e, l, n) {
    var a = l.type.getDerivedStateFromError;
    if (typeof a == "function") {
      var i = n.value;
      t.payload = function() {
        return a(i);
      }, t.callback = function() {
        yd(e, l, n);
      };
    }
    var o = l.stateNode;
    o !== null && typeof o.componentDidCatch == "function" && (t.callback = function() {
      yd(e, l, n), typeof a != "function" && (Mn === null ? Mn = /* @__PURE__ */ new Set([this]) : Mn.add(this));
      var _ = n.stack;
      this.componentDidCatch(n.value, {
        componentStack: _ !== null ? _ : ""
      });
    });
  }
  function N1(t, e, l, n, a) {
    if (l.flags |= 32768, n !== null && typeof n == "object" && typeof n.then == "function") {
      if (e = l.alternate, e !== null && ta(
        e,
        l,
        a,
        !0
      ), l = me.current, l !== null) {
        switch (l.tag) {
          case 31:
          case 13:
          case 19:
            return Te === null ? $f() : l.alternate === null && kt === 0 && (kt = 3), l.flags &= -257, l.flags |= 65536, l.lanes = a, n === _f ? l.flags |= 16384 : (e = l.updateQueue, e === null ? l.updateQueue = /* @__PURE__ */ new Set([n]) : e.add(n), Ns(t, n, a)), !1;
          case 22:
            return l.flags |= 65536, n === _f ? l.flags |= 16384 : (e = l.updateQueue, e === null ? (e = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([n])
            }, l.updateQueue = e) : (l = e.retryQueue, l === null ? e.retryQueue = /* @__PURE__ */ new Set([n]) : l.add(n)), Ns(t, n, a)), !1;
        }
        throw Error(f(435, l.tag));
      }
      return Ns(t, n, a), $f(), !1;
    }
    if (gt)
      return e = me.current, e !== null ? ((e.flags & 65536) === 0 && (e.flags |= 256), e.flags |= 65536, e.lanes = a, n !== or && (t = Error(f(422), { cause: n }), ju(ul(t, l)))) : (n !== or && (e = Error(f(423), {
        cause: n
      }), ju(
        ul(e, l)
      )), t = t.current.alternate, t.flags |= 65536, a &= -a, t.lanes |= a, n = ul(n, l), a = Zr(
        t.stateNode,
        n,
        a
      ), Sr(t, a), kt !== 4 && (kt = 2)), !1;
    var i = Error(f(520), { cause: n });
    if (i = ul(i, l), ui === null ? ui = [i] : ui.push(i), kt !== 4 && (kt = 2), e === null) return !0;
    n = ul(n, l), l = e;
    do {
      switch (l.tag) {
        case 3:
          return l.flags |= 65536, t = a & -a, l.lanes |= t, t = Zr(l.stateNode, n, t), Sr(l, t), !1;
        case 1:
          if (e = l.type, i = l.stateNode, (l.flags & 128) === 0 && (typeof e.getDerivedStateFromError == "function" || i !== null && typeof i.componentDidCatch == "function" && (Mn === null || !Mn.has(i))))
            return l.flags |= 65536, a &= -a, l.lanes |= a, a = pd(a), Td(
              a,
              t,
              l,
              n
            ), Sr(l, a), !1;
          break;
        case 22:
          if (l.memoizedState !== null)
            return l.flags |= 65536, !1;
      }
      l = l.return;
    } while (l !== null);
    return !1;
  }
  var Kr = Error(f(461)), ee = !1;
  function ae(t, e, l, n) {
    e.child = t === null ? O0(e, null, l, n) : ia(
      e,
      t.child,
      l,
      n
    );
  }
  function Sd(t, e, l, n, a) {
    l = l.render;
    var i = e.ref;
    if ("ref" in n) {
      var o = {};
      for (var _ in n)
        _ !== "ref" && (o[_] = n[_]);
    } else o = n;
    return ea(e), n = Dr(
      t,
      e,
      l,
      o,
      i,
      a
    ), _ = Nr(), t !== null && !ee ? (Cr(t, e, a), Wl(t, e, a)) : (gt && _ && cf(e), e.flags |= 1, ae(t, e, n, a), e.child);
  }
  function bd(t, e, l, n, a) {
    if (t === null) {
      var i = l.type;
      return typeof i == "function" && !fr(i) && i.defaultProps === void 0 && l.compare === null ? (e.tag = 15, e.type = i, Ed(
        t,
        e,
        i,
        n,
        a
      )) : (t = uf(
        l.type,
        null,
        n,
        e,
        e.mode,
        a
      ), t.ref = e.ref, t.return = e, e.child = t);
    }
    if (i = t.child, !ts(t, a)) {
      var o = i.memoizedProps;
      if (l = l.compare, l = l !== null ? l : qu, l(o, n) && t.ref === e.ref)
        return Wl(t, e, a);
    }
    return e.flags |= 1, t = Zl(i, n), t.ref = e.ref, t.return = e, e.child = t;
  }
  function Ed(t, e, l, n, a) {
    if (t !== null) {
      var i = t.memoizedProps;
      if (qu(i, n) && t.ref === e.ref)
        if (ee = !1, e.pendingProps = n = i, ts(t, a))
          (t.flags & 131072) !== 0 && (ee = !0);
        else
          return e.lanes = t.lanes, Wl(t, e, a);
    }
    return Jr(
      t,
      e,
      l,
      n,
      a
    );
  }
  function Od(t, e, l, n) {
    var a = n.children, i = t !== null ? t.memoizedState : null;
    if (t === null && e.stateNode === null && (e.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), n.mode === "hidden") {
      if ((e.flags & 128) !== 0) {
        if (i = i !== null ? i.baseLanes | l : l, t !== null) {
          for (n = e.child = t.child, a = 0; n !== null; )
            a = a | n.lanes | n.childLanes, n = n.sibling;
          n = a & ~i;
        } else n = 0, e.child = null;
        return zd(
          t,
          e,
          i,
          l,
          n
        );
      }
      if ((l & 536870912) !== 0)
        e.memoizedState = { baseLanes: 0, cachePool: null }, t !== null && df(
          e,
          i !== null ? i.cachePool : null
        ), i !== null ? M0(e, i) : Er(), D0(e);
      else
        return n = e.lanes = 536870912, zd(
          t,
          e,
          i !== null ? i.baseLanes | l : l,
          l,
          n
        );
    } else
      i !== null ? (df(e, i.cachePool), M0(e, i), bn(), e.memoizedState = null) : (t !== null && df(e, null), Er(), bn());
    return ae(t, e, a, l), e.child;
  }
  function Iu(t, e) {
    return t !== null && t.tag === 22 || e.stateNode !== null || (e.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), e.sibling;
  }
  function zd(t, e, l, n, a) {
    var i = gr();
    return i = i === null ? null : { parent: Pt._currentValue, pool: i }, e.memoizedState = {
      baseLanes: l,
      cachePool: i
    }, t !== null && df(e, null), Er(), D0(e), t !== null && ta(t, e, n, !0), e.childLanes = a, null;
  }
  function Cf(t, e) {
    return e = Rf(
      { mode: e.mode, children: e.children },
      t.mode
    ), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function Ad(t, e, l) {
    return ia(e, t.child, null, l), t = Cf(e, e.pendingProps), t.flags |= 2, Qe(e), e.memoizedState = null, t;
  }
  function C1(t, e, l) {
    var n = e.pendingProps, a = (e.flags & 128) !== 0;
    if (e.flags &= -129, t === null) {
      if (gt) {
        if (n.mode === "hidden")
          return t = Cf(e, n), e.lanes = 536870912, t.memoizedState = { baseLanes: 0, cachePool: null }, Iu(null, t);
        if (zr(e), (t = jt) ? (t = Im(
          t,
          cl
        ), t = t !== null && t.data === "&" ? t : null, t !== null && (e.memoizedState = {
          dehydrated: t,
          treeContext: hn !== null ? { id: zl, overflow: Al } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, l = r0(t), l.return = e, e.child = l, ie = e, jt = null)) : t = null, t === null) throw mn(e);
        return e.lanes = 536870912, null;
      }
      return Cf(e, n);
    }
    var i = t.memoizedState;
    if (i !== null) {
      var o = i.dehydrated;
      if (zr(e), a)
        if (e.flags & 256)
          e.flags &= -257, e = Ad(
            t,
            e,
            l
          );
        else if (e.memoizedState !== null)
          e.child = t.child, e.flags |= 128, e = null;
        else throw Error(f(558));
      else if (ee || ta(t, e, l, !1), a = (l & t.childLanes) !== 0, ee || a) {
        if (Tn.current === null) {
          if (n = Yt, n !== null && (o = hh(n, l), o !== 0 && o !== i.retryLane))
            throw i.retryLane = o, $n(t, o), xe(n, t, o), Kr;
          $f();
        }
        e = Ad(
          t,
          e,
          l
        );
      } else
        t = i.treeContext, jt = sl(o.nextSibling), ie = e, gt = !0, dn = null, cl = !1, t !== null && h0(e, t), e = Cf(e, n), e.flags |= 134221824;
      return e;
    }
    return t = Zl(t.child, {
      mode: n.mode,
      children: n.children
    }), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function Ka(t, e) {
    var l = e.ref;
    if (l === null)
      t !== null && t.ref !== null && (e.flags |= 4194816);
    else {
      if (typeof l != "function" && typeof l != "object")
        throw Error(f(284));
      (t === null || t.ref !== l) && (e.flags |= 4194816);
    }
  }
  function Jr(t, e, l, n, a) {
    return ea(e), l = Dr(
      t,
      e,
      l,
      n,
      void 0,
      a
    ), n = Nr(), t !== null && !ee ? (Cr(t, e, a), Wl(t, e, a)) : (gt && n && cf(e), e.flags |= 1, ae(t, e, l, a), e.child);
  }
  function Md(t, e, l, n, a, i) {
    return ea(e), e.updateQueue = null, l = C0(
      e,
      n,
      l,
      a
    ), N0(t), n = Nr(), t !== null && !ee ? (Cr(t, e, i), Wl(t, e, i)) : (gt && n && cf(e), e.flags |= 1, ae(t, e, l, i), e.child);
  }
  function Dd(t, e, l, n, a) {
    if (ea(e), e.stateNode === null) {
      var i = Ya, o = l.contextType;
      typeof o == "object" && o !== null && (i = de(o)), i = new l(n, i), e.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, i.updater = Qr, e.stateNode = i, i._reactInternals = e, i = e.stateNode, i.props = n, i.state = e.memoizedState, i.refs = {}, pr(e), o = l.contextType, i.context = typeof o == "object" && o !== null ? de(o) : Ya, i.state = e.memoizedState, o = l.getDerivedStateFromProps, typeof o == "function" && (Lr(
        e,
        l,
        o,
        n
      ), i.state = e.memoizedState), typeof l.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (o = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), o !== i.state && Qr.enqueueReplaceState(i, i.state, null), Ju(e, n, i, a), Ku(), i.state = e.memoizedState), typeof i.componentDidMount == "function" && (e.flags |= 4194308), n = !0;
    } else if (t === null) {
      i = e.stateNode;
      var _ = e.memoizedProps, T = ca(l, _);
      i.props = T;
      var M = i.context, x = l.contextType;
      o = Ya, typeof x == "object" && x !== null && (o = de(x));
      var q = l.getDerivedStateFromProps;
      x = typeof q == "function" || typeof i.getSnapshotBeforeUpdate == "function", _ = e.pendingProps !== _, x || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (_ || M !== o) && md(
        e,
        i,
        n,
        o
      ), gn = !1;
      var z = e.memoizedState;
      i.state = z, Ju(e, n, i, a), Ku(), M = e.memoizedState, _ || z !== M || gn ? (typeof q == "function" && (Lr(
        e,
        l,
        q,
        n
      ), M = e.memoizedState), (T = gn || dd(
        e,
        l,
        T,
        n,
        z,
        M,
        o
      )) ? (x || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (e.flags |= 4194308), e.memoizedProps = n, e.memoizedState = M), i.props = n, i.state = M, i.context = o, n = T) : (typeof i.componentDidMount == "function" && (e.flags |= 4194308), n = !1);
    } else {
      i = e.stateNode, Tr(t, e), o = e.memoizedProps, x = ca(l, o), i.props = x, q = e.pendingProps, z = i.context, M = l.contextType, T = Ya, typeof M == "object" && M !== null && (T = de(M)), _ = l.getDerivedStateFromProps, (M = typeof _ == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (o !== q || z !== T) && md(
        e,
        i,
        n,
        T
      ), gn = !1, z = e.memoizedState, i.state = z, Ju(e, n, i, a), Ku();
      var C = e.memoizedState;
      o !== q || z !== C || gn || t !== null && t.dependencies !== null && of(t.dependencies) ? (typeof _ == "function" && (Lr(
        e,
        l,
        _,
        n
      ), C = e.memoizedState), (x = gn || dd(
        e,
        l,
        x,
        n,
        z,
        C,
        T
      ) || t !== null && t.dependencies !== null && of(t.dependencies)) ? (M || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(n, C, T), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(
        n,
        C,
        T
      )), typeof i.componentDidUpdate == "function" && (e.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || o === t.memoizedProps && z === t.memoizedState || (e.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || o === t.memoizedProps && z === t.memoizedState || (e.flags |= 1024), e.memoizedProps = n, e.memoizedState = C), i.props = n, i.state = C, i.context = T, n = x) : (typeof i.componentDidUpdate != "function" || o === t.memoizedProps && z === t.memoizedState || (e.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || o === t.memoizedProps && z === t.memoizedState || (e.flags |= 1024), n = !1);
    }
    return i = n, Ka(t, e), n = (e.flags & 128) !== 0, i || n ? (i = e.stateNode, l = n && typeof l.getDerivedStateFromError != "function" ? null : i.render(), e.flags |= 1, t !== null && n ? (e.child = ia(
      e,
      t.child,
      null,
      a
    ), e.child = ia(
      e,
      null,
      l,
      a
    )) : ae(t, e, l, a), e.memoizedState = i.state, t = e.child) : t = Wl(
      t,
      e,
      a
    ), t;
  }
  function Nd(t, e, l, n) {
    return In(), e.flags |= 256, ae(t, e, l, n), e.child;
  }
  var Fr = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function kr(t) {
    return { baseLanes: t, cachePool: y0() };
  }
  function $r(t, e, l) {
    return t = t !== null ? t.childLanes & ~l : 0, e && (t |= Je), t;
  }
  function Cd(t, e, l) {
    var n = e.pendingProps, a = !1, i = (e.flags & 128) !== 0, o;
    if ((o = i) || (o = t !== null && t.memoizedState === null ? !1 : (_e.current & 2) !== 0), o && (a = !0, e.flags &= -129), o = (e.flags & 32) !== 0, e.flags &= -33, t === null) {
      if (gt) {
        if (a ? Sn(e) : bn(), (t = jt) ? (t = Im(
          t,
          cl
        ), t = t !== null && t.data !== "&" ? t : null, t !== null && (e.memoizedState = {
          dehydrated: t,
          treeContext: hn !== null ? { id: zl, overflow: Al } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, l = r0(t), l.return = e, e.child = l, ie = e, jt = null)) : t = null, t === null) throw mn(e);
        return ks(t) ? e.lanes = 32 : e.lanes = 536870912, null;
      }
      return i = n.children, n = n.fallback, a ? (bn(), a = e.mode, i = Rf(
        { mode: "hidden", children: i },
        a
      ), n = Wn(
        n,
        a,
        l,
        null
      ), i.return = e, n.return = e, i.sibling = n, e.child = i, n = e.child, n.memoizedState = kr(l), n.childLanes = $r(
        t,
        o,
        l
      ), e.memoizedState = Fr, Iu(null, n)) : (Sn(e), Wr(e, i));
    }
    var _ = t.memoizedState;
    if (_ !== null) {
      var T = _.dehydrated;
      if (T !== null)
        return R1(
          t,
          e,
          i,
          o,
          n,
          T,
          _,
          l
        );
    }
    return a ? (bn(), a = n.fallback, i = e.mode, _ = t.child, T = _.sibling, n = Zl(_, {
      mode: "hidden",
      children: n.children
    }), n.subtreeFlags = _.subtreeFlags & 1206910976, T !== null ? a = Zl(T, a) : (a = Wn(
      a,
      i,
      l,
      null
    ), a.flags |= 2), a.return = e, n.return = e, n.sibling = a, e.child = n, Iu(null, n), n = e.child, a = t.child.memoizedState, a === null ? a = kr(l) : (i = a.cachePool, i !== null ? (_ = Pt._currentValue, i = i.parent !== _ ? { parent: _, pool: _ } : i) : i = y0(), a = {
      baseLanes: a.baseLanes | l,
      cachePool: i
    }), n.memoizedState = a, n.childLanes = $r(
      t,
      o,
      l
    ), e.memoizedState = Fr, Iu(t.child, n)) : (Sn(e), l = t.child, t = l.sibling, l = Zl(l, {
      mode: "visible",
      children: n.children
    }), l.return = e, l.sibling = null, t !== null && (o = e.deletions, o === null ? (e.deletions = [t], e.flags |= 16) : o.push(t)), e.child = l, e.memoizedState = null, l);
  }
  function Wr(t, e) {
    return e = Rf(
      { mode: "visible", children: e },
      t.mode
    ), e.return = t, t.child = e;
  }
  function Rf(t, e) {
    return t = De(22, t, null, e), t.lanes = 0, t;
  }
  function xf(t, e, l) {
    return ia(e, t.child, null, l), t = Wr(
      e,
      e.pendingProps.children
    ), t.flags |= 2, e.memoizedState = null, t;
  }
  function R1(t, e, l, n, a, i, o, _) {
    if (l)
      return e.flags & 256 ? (Sn(e), e.flags &= -257, xf(
        t,
        e,
        _
      )) : e.memoizedState !== null ? (bn(), e.child = t.child, e.flags |= 128, null) : (bn(), i = a.fallback, o = e.mode, a = Rf(
        { mode: "visible", children: a.children },
        o
      ), i = Wn(
        i,
        o,
        _,
        null
      ), i.flags |= 2, a.return = e, i.return = e, a.sibling = i, e.child = a, ia(e, t.child, null, _), a = e.child, a.memoizedState = kr(_), a.childLanes = $r(
        t,
        n,
        _
      ), e.memoizedState = Fr, Iu(null, a));
    if (Sn(e), ks(i)) {
      if (n = i.nextSibling && i.nextSibling.dataset, n) var T = n.dgst;
      return n = T, n !== "" && (a = Error(f(419)), a.stack = "", a.digest = n, ju({ value: a, source: null, stack: null })), xf(
        t,
        e,
        _
      );
    }
    if (ee || ta(t, e, _, !1), n = (_ & t.childLanes) !== 0, ee || n) {
      if (Tn.current !== null)
        return xf(
          t,
          e,
          _
        );
      if (n = Yt, n !== null && (a = hh(
        n,
        _
      ), a !== 0 && a !== o.retryLane))
        throw o.retryLane = a, $n(t, a), xe(n, t, a), Kr;
      return Fs(i) || $f(), xf(
        t,
        e,
        _
      );
    }
    return Fs(i) ? (e.flags |= 192, e.child = t.child, null) : (t = o.treeContext, jt = sl(i.nextSibling), ie = e, gt = !0, dn = null, cl = !1, t !== null && h0(e, t), e = Wr(
      e,
      a.children
    ), e.flags |= 134221824, e);
  }
  function Rd(t, e, l) {
    t.lanes |= e;
    var n = t.alternate;
    n !== null && (n.lanes |= e), sf(t.return, e, l);
  }
  function xd(t) {
    for (var e = null; t !== null; ) {
      var l = t.alternate;
      l !== null && pf(l) === null && (e = t), t = t.sibling;
    }
    return e;
  }
  function Uf(t, e, l, n, a, i) {
    var o = t.memoizedState;
    o === null ? t.memoizedState = {
      isBackwards: e,
      rendering: null,
      renderingStartTime: 0,
      last: n,
      tail: l,
      tailMode: a,
      treeForkCount: i
    } : (o.isBackwards = e, o.rendering = null, o.renderingStartTime = 0, o.last = n, o.tail = l, o.tailMode = a, o.treeForkCount = i);
  }
  function Ir(t) {
    var e = t.child;
    for (t.child = null; e !== null; ) {
      var l = e.sibling;
      e.sibling = t.child, t.child = e, e = l;
    }
  }
  function Pr(t, e, l) {
    var n = e.pendingProps, a = n.revealOrder, i = n.tail;
    n = n.children;
    var o = _e.current;
    if (e.flags & 128)
      return Fu(e, o), null;
    var _ = (o & 2) !== 0;
    if (_ ? (o = o & 1 | 2, e.flags |= 128) : o &= 1, Fu(e, o), a === "backwards" && t !== null ? (Ir(t), ae(t, e, n, l), Ir(t)) : ae(t, e, n, l), n = gt ? Gu : 0, !_ && t !== null && (t.flags & 128) !== 0)
      t: for (t = e.child; t !== null; ) {
        if (t.tag === 13)
          t.memoizedState !== null && Rd(t, l, e);
        else if (t.tag === 19)
          Rd(t, l, e);
        else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e) break t;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            break t;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    switch (a) {
      case "backwards":
        l = xd(e.child), l === null ? (a = e.child, e.child = null) : (a = l.sibling, l.sibling = null, Ir(e)), Uf(
          e,
          !0,
          a,
          null,
          i,
          n
        );
        break;
      case "unstable_legacy-backwards":
        for (l = null, a = e.child, e.child = null; a !== null; ) {
          if (t = a.alternate, t !== null && pf(t) === null) {
            e.child = a;
            break;
          }
          t = a.sibling, a.sibling = l, l = a, a = t;
        }
        Uf(
          e,
          !0,
          l,
          null,
          i,
          n
        );
        break;
      case "together":
        Uf(
          e,
          !1,
          null,
          null,
          void 0,
          n
        );
        break;
      case "independent":
        e.memoizedState = null;
        break;
      default:
        l = xd(e.child), l === null ? (a = e.child, e.child = null) : (a = l.sibling, l.sibling = null), Uf(
          e,
          !1,
          a,
          l,
          i,
          n
        );
    }
    return e.child;
  }
  function Ud(t, e, l) {
    var n = e.pendingProps;
    return _n(e, e.type, n.value), ae(t, e, n.children, l), e.child;
  }
  function Wl(t, e, l) {
    if (t !== null && (e.dependencies = t.dependencies), An |= e.lanes, (l & e.childLanes) === 0)
      if (t !== null) {
        if (ta(
          t,
          e,
          l,
          !1
        ), (l & e.childLanes) === 0)
          return null;
      } else return null;
    if (t !== null && e.child !== t.child)
      throw Error(f(153));
    if (e.child !== null) {
      for (t = e.child, l = Zl(t, t.pendingProps), e.child = l, l.return = e; t.sibling !== null; )
        t = t.sibling, l = l.sibling = Zl(t, t.pendingProps), l.return = e;
      l.sibling = null;
    }
    return e.child;
  }
  function ts(t, e) {
    return (t.lanes & e) !== 0 ? !0 : (t = t.dependencies, !!(t !== null && of(t)));
  }
  function x1(t, e, l) {
    switch (e.tag) {
      case 3:
        qi(e, e.stateNode.containerInfo), _n(e, Pt, t.memoizedState.cache), In();
        break;
      case 27:
      case 5:
        Mc(e);
        break;
      case 4:
        qi(e, e.stateNode.containerInfo);
        break;
      case 10:
        _n(
          e,
          e.type,
          e.memoizedProps.value
        );
        break;
      case 31:
        if (e.memoizedState !== null)
          return e.flags |= 128, zr(e), null;
        break;
      case 13:
        var n = e.memoizedState;
        if (n !== null) {
          if (n.dehydrated !== null)
            return Sn(e), e.flags |= 128, null;
          n = ta(
            t,
            e,
            l,
            !1
          );
          var a = e.child.childLanes;
          return n || (l & a) !== 0 ? Cd(t, e, l) : (Sn(e), t = Wl(
            t,
            e,
            l
          ), t !== null ? t.sibling : null);
        }
        Sn(e);
        break;
      case 19:
        if (e.flags & 128)
          return Pr(
            t,
            e,
            l
          );
        if (a = (t.flags & 128) !== 0, n = (l & e.childLanes) !== 0, n || (ta(
          t,
          e,
          l,
          !1
        ), n = (l & e.childLanes) !== 0), a) {
          if (n)
            return Pr(
              t,
              e,
              l
            );
          e.flags |= 128;
        }
        if (a = e.memoizedState, a !== null && (a.rendering = null, a.tail = null, a.lastEffect = null), Fu(e, _e.current), n) break;
        return null;
      case 22:
        return e.lanes = 0, Od(
          t,
          e,
          l,
          e.pendingProps
        );
      case 24:
        _n(e, Pt, t.memoizedState.cache);
    }
    return Wl(t, e, l);
  }
  function Hd(t, e, l) {
    if (t !== null)
      if (t.memoizedProps !== e.pendingProps)
        ee = !0;
      else {
        if (!ts(t, l) && (e.flags & 128) === 0)
          return ee = !1, x1(
            t,
            e,
            l
          );
        ee = (t.flags & 131072) !== 0;
      }
    else
      ee = !1, gt && (e.flags & 1048576) !== 0 && o0(e, Gu, e.index);
    switch (e.lanes = 0, e.tag) {
      case 16:
        t: {
          var n = e.pendingProps;
          if (t = aa(e.elementType), e.type = t, typeof t == "function")
            fr(t) ? (n = ca(t, n), e.tag = 1, e = Dd(
              null,
              e,
              t,
              n,
              l
            )) : (e.tag = 0, e = Jr(
              null,
              e,
              t,
              n,
              l
            ));
          else {
            if (t != null) {
              var a = t.$$typeof;
              if (a === L) {
                e.tag = 11, e = Sd(
                  null,
                  e,
                  t,
                  n,
                  l
                );
                break t;
              } else if (a === lt) {
                e.tag = 14, e = bd(
                  null,
                  e,
                  t,
                  n,
                  l
                );
                break t;
              } else if (a === ft) {
                e.tag = 10, e.type = t, e = Ud(
                  null,
                  e,
                  l
                );
                break t;
              }
            }
            throw e = Ot(t) || t, Error(f(306, e, ""));
          }
        }
        return e;
      case 0:
        return Jr(
          t,
          e,
          e.type,
          e.pendingProps,
          l
        );
      case 1:
        return n = e.type, a = ca(
          n,
          e.pendingProps
        ), Dd(
          t,
          e,
          n,
          a,
          l
        );
      case 3:
        t: {
          if (qi(
            e,
            e.stateNode.containerInfo
          ), t === null) throw Error(f(387));
          n = e.pendingProps;
          var i = e.memoizedState;
          a = i.element, Tr(t, e), Ju(e, n, null, l);
          var o = e.memoizedState;
          if (n = o.cache, _n(e, Pt, n), n !== i.cache && mr(
            e,
            [Pt],
            l,
            !0
          ), Ku(), n = o.element, i.isDehydrated)
            if (i = {
              element: n,
              isDehydrated: !1,
              cache: o.cache
            }, e.updateQueue.baseState = i, e.memoizedState = i, e.flags & 256) {
              e = Nd(
                t,
                e,
                n,
                l
              );
              break t;
            } else if (n !== a) {
              a = ul(
                Error(f(424)),
                e
              ), ju(a), e = Nd(
                t,
                e,
                n,
                l
              );
              break t;
            } else
              for (t = e.stateNode.containerInfo, t.nodeType === 9 ? t = t.body : t = t.nodeName === "HTML" ? t.ownerDocument.body : t, jt = sl(t.firstChild), ie = e, gt = !0, dn = null, cl = !0, l = O0(
                e,
                null,
                n,
                l
              ), e.child = l; l; )
                l.flags = l.flags & -3 | 134221824, l = l.sibling;
          else {
            if (In(), n === a) {
              e = Wl(
                t,
                e,
                l
              );
              break t;
            }
            ae(t, e, n, l);
          }
          e = e.child;
        }
        return e;
      case 26:
        return Ka(t, e), t === null ? (l = u_(
          e.type,
          null,
          e.pendingProps,
          null
        )) ? e.memoizedState = l : gt || (e.stateNode = wm(
          e.type,
          e.pendingProps,
          fn.current,
          e
        )) : e.memoizedState = u_(
          e.type,
          t.memoizedProps,
          e.pendingProps,
          t.memoizedState
        ), null;
      case 27:
        return Mc(e), t === null && gt && (n = e.stateNode = e_(
          e.type,
          e.pendingProps,
          fn.current
        ), ie = e, cl = !0, a = jt, Cn(e.type) ? ($s = a, jt = sl(n.firstChild)) : jt = a), ae(
          t,
          e,
          e.pendingProps.children,
          l
        ), Ka(t, e), t === null && (e.flags |= 4194304), e.child;
      case 5:
        return t === null && gt && ((a = n = jt) && (n = Ay(
          n,
          e.type,
          e.pendingProps,
          cl
        ), n !== null ? (e.stateNode = n, ie = e, jt = sl(n.firstChild), cl = !1, a = !0) : a = !1), a || mn(e)), Mc(e), a = e.type, i = e.pendingProps, o = t !== null ? t.memoizedProps : null, n = i.children, Xs(a, i) ? n = null : o !== null && Xs(a, o) && (e.flags |= 32), e.memoizedState !== null && (a = Dr(
          t,
          e,
          S1,
          null,
          null,
          l
        ), su._currentValue = a), Ka(t, e), ae(t, e, n, l), e.child;
      case 6:
        return t === null && gt && ((t = l = jt) && (l = My(
          l,
          e.pendingProps,
          cl
        ), l !== null ? (e.stateNode = l, ie = e, jt = null, t = !0) : t = !1), t || mn(e)), null;
      case 13:
        return Cd(t, e, l);
      case 4:
        return qi(
          e,
          e.stateNode.containerInfo
        ), n = e.pendingProps, t === null ? e.child = ia(
          e,
          null,
          n,
          l
        ) : ae(t, e, n, l), e.child;
      case 11:
        return Sd(
          t,
          e,
          e.type,
          e.pendingProps,
          l
        );
      case 7:
        return n = e.pendingProps, Ka(t, e), ae(t, e, n, l), e.child;
      case 8:
        return ae(
          t,
          e,
          e.pendingProps.children,
          l
        ), e.child;
      case 12:
        return ae(
          t,
          e,
          e.pendingProps.children,
          l
        ), e.child;
      case 10:
        return Ud(t, e, l);
      case 9:
        return a = e.type._context, n = e.pendingProps.children, ea(e), a = de(a), n = n(a), e.flags |= 1, ae(t, e, n, l), e.child;
      case 14:
        return bd(
          t,
          e,
          e.type,
          e.pendingProps,
          l
        );
      case 15:
        return Ed(
          t,
          e,
          e.type,
          e.pendingProps,
          l
        );
      case 19:
        return Pr(t, e, l);
      case 31:
        return C1(t, e, l);
      case 22:
        return Od(
          t,
          e,
          l,
          e.pendingProps
        );
      case 24:
        return ea(e), n = de(Pt), t === null ? (a = gr(), a === null && (a = Yt, i = _r(), a.pooledCache = i, i.refCount++, i !== null && (a.pooledCacheLanes |= l), a = i), e.memoizedState = { parent: n, cache: a }, pr(e), _n(e, Pt, a)) : ((t.lanes & l) !== 0 && (Tr(t, e), Ju(e, null, null, l), Ku()), a = t.memoizedState, i = e.memoizedState, a.parent !== n ? (a = { parent: n, cache: n }, e.memoizedState = a, e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = a), _n(e, Pt, n)) : (n = i.cache, _n(e, Pt, n), n !== a.cache && mr(
          e,
          [Pt],
          l,
          !0
        ))), ae(
          t,
          e,
          e.pendingProps.children,
          l
        ), e.child;
      case 30:
        return e.stateNode === null && (e.stateNode = {
          autoName: null,
          paired: null,
          clones: null,
          ref: null
        }), n = e.pendingProps, n.name != null && n.name !== "auto" ? e.flags |= t === null ? 18882560 : 18874368 : gt && cf(e), t !== null && t.memoizedProps.name !== n.name ? e.flags |= 4194816 : Ka(t, e), ae(t, e, n.children, l), e.child;
      case 29:
        throw e.pendingProps;
    }
    throw Error(f(156, e.tag));
  }
  function Il(t) {
    t.flags |= 4;
  }
  function es(t, e, l, n, a) {
    var i;
    if ((i = (t.mode & 32) !== 0) && (i = l === null ? r_(e, n) : r_(e, n) && (n.src !== l.src || n.srcSet !== l.srcSet)), i) {
      if (t.flags |= 16777216, (a & 335544128) === a)
        if (t.stateNode.complete) t.flags |= 8192;
        else if (_m()) t.flags |= 8192;
        else
          throw ua = _f, yr;
    } else t.flags &= -16777217;
  }
  function Bd(t, e) {
    if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (t.flags |= 16777216, !s_(e))
      if (_m()) t.flags |= 8192;
      else
        throw ua = _f, yr;
  }
  function Hf(t, e) {
    e !== null && (t.flags |= 4), t.flags & 16384 && (e = t.tag !== 22 ? rh() : 536870912, t.lanes |= e, Wa |= e);
  }
  function Pu(t, e) {
    if (!gt)
      switch (t.tailMode) {
        case "visible":
          break;
        case "collapsed":
          for (var l = t.tail, n = null; l !== null; )
            l.alternate !== null && (n = l), l = l.sibling;
          n === null ? e || t.tail === null ? t.tail = null : t.tail.sibling = null : n.sibling = null;
          break;
        default:
          for (e = t.tail, l = null; e !== null; )
            e.alternate !== null && (l = e), e = e.sibling;
          l === null ? t.tail = null : l.sibling = null;
      }
  }
  function Xt(t) {
    var e = t.alternate !== null && t.alternate.child === t.child, l = 0, n = 0;
    if (e)
      for (var a = t.child; a !== null; )
        l |= a.lanes | a.childLanes, n |= a.subtreeFlags & 1206910976, n |= a.flags & 1206910976, a.return = t, a = a.sibling;
    else
      for (a = t.child; a !== null; )
        l |= a.lanes | a.childLanes, n |= a.subtreeFlags, n |= a.flags, a.return = t, a = a.sibling;
    return t.subtreeFlags |= n, t.childLanes = l, e;
  }
  function U1(t, e, l) {
    var n = e.pendingProps;
    switch (sr(e), e.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Xt(e), null;
      case 1:
        return Xt(e), null;
      case 3:
        return l = e.stateNode, n = null, t !== null && (n = t.memoizedState.cache), e.memoizedState.cache !== n && (e.flags |= 2048), Fl(Pt), Ea(), l.pendingContext && (l.context = l.pendingContext, l.pendingContext = null), (t === null || t.child === null) && (Ga(e) ? Il(e) : t === null || t.memoizedState.isDehydrated && (e.flags & 256) === 0 || (e.flags |= 1024, hr())), Xt(e), null;
      case 26:
        var a = e.type, i = e.memoizedState;
        return t === null ? (Il(e), i !== null ? (Xt(e), Bd(e, i)) : (Xt(e), es(
          e,
          a,
          null,
          n,
          l
        ))) : i ? i !== t.memoizedState ? (Il(e), Xt(e), Bd(e, i)) : (Xt(e), e.flags &= -16777217) : (t = t.memoizedProps, t !== n && Il(e), Xt(e), es(
          e,
          a,
          t,
          n,
          l
        )), null;
      case 27:
        if (wi(e), l = fn.current, a = e.type, t !== null && e.stateNode != null)
          t.memoizedProps !== n && Il(e);
        else {
          if (!n) {
            if (e.stateNode === null)
              throw Error(f(166));
            return Xt(e), e.subtreeFlags &= -33554433, null;
          }
          t = El.current, Ga(e) ? d0(e) : (t = e_(a, n, l), e.stateNode = t, Il(e));
        }
        return Xt(e), e.subtreeFlags &= -33554433, null;
      case 5:
        if (wi(e), a = e.type, t !== null && e.stateNode != null)
          t.memoizedProps !== n && Il(e);
        else {
          if (!n) {
            if (e.stateNode === null)
              throw Error(f(166));
            return Xt(e), e.subtreeFlags &= -33554433, null;
          }
          if (i = El.current, Ga(e))
            d0(e);
          else {
            var o = si(
              fn.current
            );
            switch (i) {
              case 1:
                i = o.createElementNS(
                  "http://www.w3.org/2000/svg",
                  a
                );
                break;
              case 2:
                i = o.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  a
                );
                break;
              default:
                switch (a) {
                  case "svg":
                    i = o.createElementNS(
                      "http://www.w3.org/2000/svg",
                      a
                    );
                    break;
                  case "math":
                    i = o.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      a
                    );
                    break;
                  case "script":
                    i = o.createElement("div"), i.innerHTML = "<script><\/script>", i = i.removeChild(
                      i.firstChild
                    );
                    break;
                  case "select":
                    i = typeof n.is == "string" ? o.createElement("select", {
                      is: n.is
                    }) : o.createElement("select"), n.multiple ? i.multiple = !0 : n.size && (i.size = n.size);
                    break;
                  default:
                    i = typeof n.is == "string" ? o.createElement(a, { is: n.is }) : o.createElement(a);
                }
            }
            i[he] = e, i[Me] = n;
            t: for (o = e.child; o !== null; ) {
              if (o.tag === 5 || o.tag === 6)
                i.appendChild(o.stateNode);
              else if (o.tag !== 4 && o.tag !== 27 && o.child !== null) {
                o.child.return = o, o = o.child;
                continue;
              }
              if (o === e) break t;
              for (; o.sibling === null; ) {
                if (o.return === null || o.return === e)
                  break t;
                o = o.return;
              }
              o.sibling.return = o.return, o = o.sibling;
            }
            e.stateNode = i;
            t: switch (ge(i, a, n), a) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                n = !!n.autoFocus;
                break t;
              case "img":
                n = !0;
                break t;
              default:
                n = !1;
            }
            n && Il(e);
          }
        }
        return Xt(e), e.subtreeFlags &= -33554433, es(
          e,
          e.type,
          t === null ? null : t.memoizedProps,
          e.pendingProps,
          l
        ), null;
      case 6:
        if (t && e.stateNode != null)
          t.memoizedProps !== n && Il(e);
        else {
          if (typeof n != "string" && e.stateNode === null)
            throw Error(f(166));
          if (t = fn.current, Ga(e)) {
            if (t = e.stateNode, l = e.memoizedProps, n = null, a = ie, a !== null)
              switch (a.tag) {
                case 27:
                case 5:
                  n = a.memoizedProps;
              }
            t[he] = e, t = !!(t.nodeValue === l || n !== null && n.suppressHydrationWarning === !0 || Hm(t.nodeValue, l)), t || mn(e, !0);
          } else
            t = si(t).createTextNode(
              n
            ), t[he] = e, e.stateNode = t;
        }
        return Xt(e), null;
      case 31:
        if (l = e.memoizedState, t === null || t.memoizedState !== null) {
          if (n = Ga(e), l !== null) {
            if (t === null) {
              if (!n) throw Error(f(318));
              if (t = e.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(f(557));
              t[he] = e;
            } else
              In(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
            Xt(e), t = !1;
          } else
            l = hr(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = l), t = !0;
          if (!t)
            return e.flags & 256 ? (Qe(e), e) : (Qe(e), null);
          if ((e.flags & 128) !== 0)
            throw Error(f(558));
        }
        return Xt(e), null;
      case 13:
        if (n = e.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
          if (a = Ga(e), n !== null && n.dehydrated !== null) {
            if (t === null) {
              if (!a) throw Error(f(318));
              if (a = e.memoizedState, a = a !== null ? a.dehydrated : null, !a) throw Error(f(317));
              a[he] = e;
            } else
              In(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
            Xt(e), a = !1;
          } else
            a = hr(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = a), a = !0;
          if (!a)
            return e.flags & 256 ? (Qe(e), e) : (Qe(e), null);
        }
        return Qe(e), (e.flags & 128) !== 0 ? (e.lanes = l, e) : (l = n !== null, t = t !== null && t.memoizedState !== null, l && (n = e.child, a = null, n.alternate !== null && n.alternate.memoizedState !== null && n.alternate.memoizedState.cachePool !== null && (a = n.alternate.memoizedState.cachePool.pool), i = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (i = n.memoizedState.cachePool.pool), i !== a && (n.flags |= 2048)), l !== t && l && (e.child.flags |= 8192), Hf(e, e.updateQueue), Xt(e), null);
      case 4:
        return Ea(), t === null && Ys(e.stateNode.containerInfo), e.flags |= 67108864, Xt(e), null;
      case 10:
        return Fl(e.type), Xt(e), null;
      case 19:
        if (Ar(e), n = e.memoizedState, n === null) return Xt(e), null;
        if (a = (e.flags & 128) !== 0, i = n.rendering, i === null)
          if (a) Pu(n, !1);
          else {
            if (kt !== 0 || t !== null && (t.flags & 128) !== 0)
              for (t = e.child; t !== null; ) {
                if (i = pf(t), i !== null) {
                  for (e.flags |= 128, Pu(n, !1), t = i.updateQueue, e.updateQueue = t, Hf(e, t), e.subtreeFlags = 0, t = l, l = e.child; l !== null; )
                    c0(l, t), l = l.sibling;
                  return Fu(
                    e,
                    _e.current & 1 | 2
                  ), gt && Kl(e, n.treeForkCount), e.child;
                }
                t = t.sibling;
              }
            n.tail !== null && Ge() > Kf && (e.flags |= 128, a = !0, Pu(n, !1), e.lanes = 4194304);
          }
        else {
          if (!a)
            if (t = pf(i), t !== null) {
              if (e.flags |= 128, a = !0, t = t.updateQueue, e.updateQueue = t, Hf(e, t), Pu(n, !0), n.tail === null && n.tailMode !== "collapsed" && n.tailMode !== "visible" && !i.alternate && !gt)
                return Xt(e), null;
            } else
              2 * Ge() - n.renderingStartTime > Kf && l !== 536870912 && (e.flags |= 128, a = !0, Pu(n, !1), e.lanes = 4194304);
          n.isBackwards ? (i.sibling = e.child, e.child = i) : (t = n.last, t !== null ? t.sibling = i : e.child = i, n.last = i);
        }
        if (n.tail !== null) {
          t = n.tail;
          t: {
            for (l = t; l !== null; ) {
              if (l.alternate !== null) {
                l = !1;
                break t;
              }
              l = l.sibling;
            }
            l = !0;
          }
          return n.rendering = t, n.tail = t.sibling, n.renderingStartTime = Ge(), t.sibling = null, i = _e.current, i = a ? i & 1 | 2 : i & 1, n.tailMode === "visible" || n.tailMode === "collapsed" || !l || gt ? Fu(e, i) : (l = i, Gt(me, e), Gt(_e, l), Te === null && (Te = e)), gt && Kl(e, n.treeForkCount), t;
        }
        return Xt(e), null;
      case 22:
      case 23:
        return Qe(e), Or(), n = e.memoizedState !== null, t !== null ? t.memoizedState !== null !== n && (e.flags |= 8192) : n && (e.flags |= 8192), n ? (l & 536870912) !== 0 && (e.flags & 128) === 0 && (Xt(e), e.subtreeFlags & 6 && (e.flags |= 8192)) : Xt(e), l = e.updateQueue, l !== null && Hf(e, l.retryQueue), l = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), n = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), n !== l && (e.flags |= 2048), t !== null && oe(na), null;
      case 24:
        return l = null, t !== null && (l = t.memoizedState.cache), e.memoizedState.cache !== l && (e.flags |= 2048), Fl(Pt), Xt(e), null;
      case 25:
        return null;
      case 30:
        return e.flags |= 33554432, Xt(e), null;
    }
    throw Error(f(156, e.tag));
  }
  function H1(t, e) {
    switch (sr(e), e.tag) {
      case 1:
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 3:
        return Fl(Pt), Ea(), t = e.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (e.flags = t & -65537 | 128, e) : null;
      case 26:
      case 27:
      case 5:
        return wi(e), null;
      case 31:
        if (e.memoizedState !== null) {
          if (Qe(e), e.alternate === null)
            throw Error(f(340));
          In();
        }
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 13:
        if (Qe(e), t = e.memoizedState, t !== null && t.dehydrated !== null) {
          if (e.alternate === null)
            throw Error(f(340));
          In();
        }
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 19:
        return Ar(e), t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, t = e.memoizedState, t !== null && (t.rendering = null, t.tail = null), e.flags |= 4, e) : null;
      case 4:
        return Ea(), null;
      case 10:
        return Fl(e.type), null;
      case 22:
      case 23:
        return Qe(e), Or(), t !== null && oe(na), t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 24:
        return Fl(Pt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Yd(t, e) {
    switch (sr(e), e.tag) {
      case 3:
        Fl(Pt), Ea();
        break;
      case 26:
      case 27:
      case 5:
        wi(e);
        break;
      case 4:
        Ea();
        break;
      case 31:
        e.memoizedState !== null && Qe(e);
        break;
      case 13:
        Qe(e);
        break;
      case 19:
        Ar(e);
        break;
      case 10:
        Fl(e.type);
        break;
      case 22:
      case 23:
        Qe(e), Or(), t !== null && oe(na);
        break;
      case 24:
        Fl(Pt);
    }
  }
  function ti(t, e) {
    try {
      var l = e.updateQueue, n = l !== null ? l.lastEffect : null;
      if (n !== null) {
        var a = n.next;
        l = a;
        do {
          if ((l.tag & t) === t) {
            n = void 0;
            var i = l.create, o = l.inst;
            n = i(), o.destroy = n;
          }
          l = l.next;
        } while (l !== a);
      }
    } catch (_) {
      Ut(e, e.return, _);
    }
  }
  function En(t, e, l) {
    try {
      var n = e.updateQueue, a = n !== null ? n.lastEffect : null;
      if (a !== null) {
        var i = a.next;
        n = i;
        do {
          if ((n.tag & t) === t) {
            var o = n.inst, _ = o.destroy;
            if (_ !== void 0) {
              o.destroy = void 0, a = e;
              var T = l, M = _;
              try {
                M();
              } catch (x) {
                Ut(
                  a,
                  T,
                  x
                );
              }
            }
          }
          n = n.next;
        } while (n !== i);
      }
    } catch (x) {
      Ut(e, e.return, x);
    }
  }
  function qd(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var l = t.stateNode;
      try {
        A0(e, l);
      } catch (n) {
        Ut(t, t.return, n);
      }
    }
  }
  function wd(t, e, l) {
    l.props = ca(
      t.type,
      t.memoizedProps
    ), l.state = t.memoizedState;
    try {
      l.componentWillUnmount();
    } catch (n) {
      Ut(t, e, n);
    }
  }
  function Ml(t, e) {
    try {
      var l = t.ref;
      if (l !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var n = t.stateNode;
            break;
          case 30:
            var a = t.stateNode, i = Ll(t.memoizedProps, a);
            (a.ref === null || a.ref.name !== i) && (a.ref = Zm(i)), n = a.ref;
            break;
          case 7:
            if (t.stateNode === null) {
              var o = new ke(t);
              p(
                t.child,
                !1,
                Oy,
                o,
                void 0,
                void 0
              ), t.stateNode = o;
            }
            n = t.stateNode;
            break;
          default:
            n = t.stateNode;
        }
        typeof l == "function" ? t.refCleanup = l(n) : l.current = n;
      }
    } catch (_) {
      Ut(t, e, _);
    }
  }
  function ve(t, e) {
    var l = t.ref, n = t.refCleanup;
    if (l !== null)
      if (typeof n == "function")
        try {
          n();
        } catch (a) {
          Ut(t, e, a);
        } finally {
          t.refCleanup = null, t = t.alternate, t != null && (t.refCleanup = null);
        }
      else if (typeof l == "function")
        try {
          l(null);
        } catch (a) {
          Ut(t, e, a);
        }
      else l.current = null;
  }
  function Bf(t, e) {
    if ((t.tag === 5 || t.tag === 27 || t.tag === 6) && t.alternate === null && e !== null)
      for (var l = 0; l < e.length; l++)
        Wm(
          t.stateNode,
          e[l]
        );
  }
  function Gd(t) {
    for (var e = t.return; e !== null && (ns(e) && Wm(t.stateNode, e.stateNode), !ls(e)); )
      e = e.return;
  }
  function ei(t) {
    for (var e = t.return; e !== null && (ns(e) && zy(t.stateNode, e.stateNode), !ls(e)); )
      e = e.return;
  }
  function ls(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 27;
  }
  function ns(t) {
    return t && t.tag === 7 && t.stateNode !== null;
  }
  function as(t) {
    var e = t.type, l = t.memoizedProps, n = t.stateNode;
    try {
      t: switch (e) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          l.autoFocus && n.focus();
          break t;
        case "img":
          l.src ? n.src = l.src : l.srcSet && (n.srcset = l.srcSet);
      }
    } catch (a) {
      Ut(t, t.return, a);
    }
  }
  function us(t, e, l) {
    try {
      var n = t.stateNode;
      iy(n, t.type, l, e), n[Me] = e;
    } catch (a) {
      Ut(t, t.return, a);
    }
  }
  function jd(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && Cn(t.type) || t.tag === 4;
  }
  function is(t) {
    t: for (; ; ) {
      for (; t.sibling === null; ) {
        if (t.return === null || jd(t.return)) return null;
        t = t.return;
      }
      for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
        if (t.tag === 27 && Cn(t.type) || t.flags & 2 || t.child === null || t.tag === 4) continue t;
        t.child.return = t, t = t.child;
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function fs(t, e, l, n) {
    var a = t.tag;
    if (a === 5 || a === 6)
      a = t.stateNode, e ? (l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l).insertBefore(a, e) : (e = l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l, e.appendChild(a), l = l._reactRootContainer, l != null || e.onclick !== null || (e.onclick = Ol)), Bf(t, n), Nt = !0;
    else if (a !== 4 && (a === 27 && (Bf(t, n), n = null, Cn(t.type) && (l = t.stateNode, e = null)), t = t.child, t !== null))
      for (fs(
        t,
        e,
        l,
        n
      ), t = t.sibling; t !== null; )
        fs(
          t,
          e,
          l,
          n
        ), t = t.sibling;
  }
  function Yf(t, e, l, n) {
    var a = t.tag;
    if (a === 5 || a === 6)
      a = t.stateNode, e ? l.insertBefore(a, e) : l.appendChild(a), Bf(t, n), Nt = !0;
    else if (a !== 4 && (a === 27 && (Bf(t, n), n = null, Cn(t.type) && (l = t.stateNode)), t = t.child, t !== null))
      for (Yf(
        t,
        e,
        l,
        n
      ), t = t.sibling; t !== null; )
        Yf(
          t,
          e,
          l,
          n
        ), t = t.sibling;
  }
  function Xd(t) {
    var e = t.stateNode, l = t.memoizedProps;
    try {
      for (var n = t.type, a = e.attributes; a.length; )
        e.removeAttributeNode(a[0]);
      ge(e, n, l), e[he] = t, e[Me] = l;
    } catch (i) {
      Ut(t, t.return, i);
    }
  }
  var qf = !1, Ze = null;
  function Vd(t) {
    (t.tag === 30 || (t.subtreeFlags & 33554432) !== 0) && (qf = !0);
  }
  var Dl = null;
  function Ld() {
    var t = Dl;
    return Dl = null, t;
  }
  var Ne = 0;
  function Ja(t, e, l, n, a) {
    return Ne = 0, Qd(
      t.child,
      e,
      l,
      n,
      a
    );
  }
  function Qd(t, e, l, n, a) {
    for (var i = !1; t !== null; ) {
      if (t.tag === 5) {
        var o = t.stateNode;
        if (n !== null) {
          var _ = Qs(o);
          n.push(_), _.view && (i = !0);
        } else
          i || Qs(o).view && (i = !0);
        qf = !0, Lm(
          o,
          Ne === 0 ? e : e + "_" + Ne,
          l
        ), Ne++;
      } else (t.tag !== 22 || t.memoizedState === null) && (t.tag === 30 && a || Qd(
        t.child,
        e,
        l,
        n,
        a
      ) && (i = !0));
      t = t.sibling;
    }
    return i;
  }
  function Nl(t, e) {
    for (; t !== null; )
      t.tag === 5 ? Qm(t.stateNode, t.memoizedProps) : (t.tag !== 22 || t.memoizedState === null) && (t.tag === 30 && e || Nl(
        t.child,
        e
      )), t = t.sibling;
  }
  function wf(t) {
    if ((t.subtreeFlags & 18874368) !== 0)
      for (t = t.child; t !== null; ) {
        if ((t.tag !== 22 || t.memoizedState === null) && (wf(t), t.tag === 30 && (t.flags & 18874368) !== 0 && t.stateNode.paired)) {
          var e = t.memoizedProps;
          if (e.name == null || e.name === "auto")
            throw Error(f(544));
          var l = e.name;
          e = Ql(e.default, e.share), e !== "none" && (Ja(
            t,
            l,
            e,
            null,
            !1
          ) || Nl(t.child, !1));
        }
        t = t.sibling;
      }
  }
  function cs(t, e) {
    if (t.tag === 30) {
      var l = t.stateNode, n = t.memoizedProps, a = Ll(n, l), i = Ql(
        n.default,
        l.paired ? n.share : n.enter
      );
      i !== "none" ? Ja(t, a, i, null, !1) ? (wf(t), l.paired || e || eu(t, n.onEnter)) : Nl(t.child, !1) : wf(t);
    } else if ((t.subtreeFlags & 33554432) !== 0)
      for (t = t.child; t !== null; )
        cs(t, e), t = t.sibling;
    else wf(t);
  }
  function rs(t) {
    if (Ze !== null && Ze.size !== 0) {
      var e = Ze;
      if ((t.subtreeFlags & 18874368) !== 0)
        for (t = t.child; t !== null; ) {
          if (t.tag !== 22 || t.memoizedState === null) {
            if (t.tag === 30 && (t.flags & 18874368) !== 0) {
              var l = t.memoizedProps, n = l.name;
              if (n != null && n !== "auto") {
                var a = e.get(n);
                if (a !== void 0) {
                  var i = Ql(
                    l.default,
                    l.share
                  );
                  if (i !== "none" && (Ja(
                    t,
                    n,
                    i,
                    null,
                    !1
                  ) ? (i = t.stateNode, a.paired = i, i.paired = a, eu(t, l.onShare)) : Nl(t.child, !1)), e.delete(n), e.size === 0) break;
                }
              }
            }
            rs(t);
          }
          t = t.sibling;
        }
    }
  }
  function ss(t) {
    if (t.tag === 30) {
      var e = t.memoizedProps, l = Ll(e, t.stateNode), n = Ze !== null ? Ze.get(l) : void 0, a = Ql(
        e.default,
        n !== void 0 ? e.share : e.exit
      );
      a !== "none" && (Ja(t, l, a, null, !1) ? n !== void 0 ? (a = t.stateNode, n.paired = a, a.paired = n, Ze.delete(l), eu(t, e.onShare)) : eu(t, e.onExit) : Nl(t.child, !1)), Ze !== null && rs(t);
    } else if ((t.subtreeFlags & 33554432) !== 0)
      for (t = t.child; t !== null; )
        ss(t), t = t.sibling;
    else
      Ze !== null && rs(t);
  }
  function Zd(t) {
    for (t = t.child; t !== null; ) {
      if (t.tag === 30) {
        var e = t.memoizedProps, l = Ll(e, t.stateNode);
        e = Ql(e.default, e.update), t.flags &= -5, e !== "none" && Ja(
          t,
          l,
          e,
          t.memoizedState = [],
          !1
        );
      } else
        (t.subtreeFlags & 33554432) !== 0 && Zd(t);
      t = t.sibling;
    }
  }
  function os(t) {
    if ((t.subtreeFlags & 18874368) !== 0)
      for (t = t.child; t !== null; ) {
        if (t.tag !== 22 || t.memoizedState === null) {
          if (t.tag === 30 && (t.flags & 18874368) !== 0) {
            var e = t.stateNode;
            e.paired !== null && (e.paired = null, Nl(t.child, !1));
          }
          os(t);
        }
        t = t.sibling;
      }
  }
  function Gf(t) {
    if (t.tag === 30)
      t.stateNode.paired = null, Nl(t.child, !1), os(t);
    else if ((t.subtreeFlags & 33554432) !== 0)
      for (t = t.child; t !== null; )
        Gf(t), t = t.sibling;
    else os(t);
  }
  function Kd(t) {
    for (t = t.child; t !== null; )
      t.tag === 30 ? Nl(t.child, !1) : (t.subtreeFlags & 33554432) !== 0 && Kd(t), t = t.sibling;
  }
  function hs(t, e, l, n, a, i, o) {
    for (var _ = !1; e !== null; ) {
      if (e.tag === 5) {
        var T = e.stateNode;
        if (i !== null && Ne < i.length) {
          var M = i[Ne], x = Qs(T);
          (M.view || x.view) && (_ = !0);
          var q;
          if (q = (t.flags & 4) === 0)
            if (x.clip) q = !0;
            else {
              q = M.rect;
              var z = x.rect;
              q = q.y !== z.y || q.x !== z.x || q.height !== z.height || q.width !== z.width;
            }
          q && (t.flags |= 4), x.abs ? x = !M.abs : (M = M.rect, x = x.rect, x = M.height !== x.height || M.width !== x.width), x && (t.flags |= 32);
        } else t.flags |= 32;
        (t.flags & 4) !== 0 && Lm(
          T,
          Ne === 0 ? l : l + "_" + Ne,
          a
        ), _ && (t.flags & 4) !== 0 || (Dl === null && (Dl = []), Dl.push(
          T,
          Ne === 0 ? n : n + "_" + Ne,
          e.memoizedProps
        )), Ne++;
      } else (e.tag !== 22 || e.memoizedState === null) && (e.tag === 30 && o ? t.flags |= e.flags & 32 : hs(
        t,
        e.child,
        l,
        n,
        a,
        i,
        o
      ) && (_ = !0));
      e = e.sibling;
    }
    return _;
  }
  function Jd(t, e) {
    for (t = t.child; t !== null; ) {
      if (t.tag === 30) {
        var l = t.memoizedProps, n = t.stateNode, a = Ll(l, n), i = Ql(l.default, l.update), o;
        o = t.memoizedState, t.memoizedState = null, n = t;
        var _ = t.child;
        Ne = 0, a = hs(
          n,
          _,
          a,
          a,
          i,
          o,
          !1
        ), (t.flags & 4) !== 0 && a && eu(t, l.onUpdate);
      } else
        (t.subtreeFlags & 33554432) !== 0 && Jd(t);
      t = t.sibling;
    }
  }
  var fe = !1, Rt = !1, Cl = !1, ds = !1, Fd = typeof WeakSet == "function" ? WeakSet : Set, ce = null, Rl = !1, li = !1, jf = !1, ms = !1;
  function B1(t, e, l) {
    if (t = t.containerInfo, Gs = ou, t = Ih(t), tr(t)) {
      if ("selectionStart" in t)
        var n = {
          start: t.selectionStart,
          end: t.selectionEnd
        };
      else
        t: {
          n = (n = t.ownerDocument) && n.defaultView || window;
          var a = n.getSelection && n.getSelection();
          if (a && a.rangeCount !== 0) {
            n = a.anchorNode;
            var i = a.anchorOffset, o = a.focusNode;
            a = a.focusOffset;
            try {
              n.nodeType, o.nodeType;
            } catch {
              n = null;
              break t;
            }
            var _ = 0, T = -1, M = -1, x = 0, q = 0, z = t, C = null;
            e: for (; ; ) {
              for (var J; z !== n || i !== 0 && z.nodeType !== 3 || (T = _ + i), z !== o || a !== 0 && z.nodeType !== 3 || (M = _ + a), z.nodeType === 3 && (_ += z.nodeValue.length), (J = z.firstChild) !== null; )
                C = z, z = J;
              for (; ; ) {
                if (z === t) break e;
                if (C === n && ++x === i && (T = _), C === o && ++q === a && (M = _), (J = z.nextSibling) !== null) break;
                z = C, C = z.parentNode;
              }
              z = J;
            }
            n = T === -1 || M === -1 ? null : { start: T, end: M };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (js = { focusedElem: t, selectionRange: n }, ou = !1, l = (l & 335544064) === l, ce = e, e = l ? 9270 : 1024; ce !== null; ) {
      if (t = ce, l && (n = t.deletions, n !== null))
        for (i = 0; i < n.length; i++)
          l && ss(n[i]);
      if (t.alternate === null && (t.flags & 2) !== 0)
        l && Vd(t), Xf(l);
      else {
        if (t.tag === 22) {
          if (n = t.alternate, t.memoizedState !== null) {
            n !== null && n.memoizedState === null && l && ss(n), Xf(l);
            continue;
          } else if (n !== null && n.memoizedState !== null) {
            l && Vd(t), Xf(l);
            continue;
          }
        }
        n = t.child, (t.subtreeFlags & e) !== 0 && n !== null ? (n.return = t, ce = n) : (l && Zd(t), Xf(l));
      }
    }
    Ze = null;
  }
  function Xf(t) {
    for (; ce !== null; ) {
      var e = ce, l = t, n = e.alternate, a = e.flags;
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if ((a & 1024) !== 0 && n !== null) {
            l = void 0, a = n.memoizedProps, n = n.memoizedState;
            var i = e.stateNode;
            try {
              var o = ca(
                e.type,
                a
              );
              l = i.getSnapshotBeforeUpdate(
                o,
                n
              ), i.__reactInternalSnapshotBeforeUpdate = l;
            } catch (_) {
              Ut(e, e.return, _);
            }
          }
          break;
        case 3:
          if ((a & 1024) !== 0) {
            if (n = e.stateNode.containerInfo, l = n.nodeType, l === 9)
              Js(n);
            else if (l === 1)
              switch (n.nodeName) {
                case "HEAD":
                case "HTML":
                case "BODY":
                  Js(n);
                  break;
                default:
                  n.textContent = "";
              }
          }
          break;
        case 5:
        case 26:
        case 27:
        case 6:
        case 4:
        case 17:
          break;
        case 30:
          l && n !== null && (l = Ll(
            n.memoizedProps,
            n.stateNode
          ), a = e.memoizedProps, a = Ql(a.default, a.update), a !== "none" && Ja(
            n,
            l,
            a,
            n.memoizedState = [],
            !0
          ));
          break;
        default:
          if ((a & 1024) !== 0) throw Error(f(163));
      }
      if (n = e.sibling, n !== null) {
        n.return = e.return, ce = n;
        break;
      }
      ce = e.return;
    }
  }
  function kd(t, e, l) {
    var n = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        xl(t, l), n & 4 && ti(5, l);
        break;
      case 1:
        if (xl(t, l), n & 4)
          if (t = l.stateNode, e === null)
            try {
              t.componentDidMount();
            } catch (o) {
              Ut(l, l.return, o);
            }
          else {
            var a = ca(
              l.type,
              e.memoizedProps
            );
            e = e.memoizedState;
            try {
              t.componentDidUpdate(
                a,
                e,
                t.__reactInternalSnapshotBeforeUpdate
              );
            } catch (o) {
              Ut(
                l,
                l.return,
                o
              );
            }
          }
        n & 64 && qd(l), n & 512 && Ml(l, l.return);
        break;
      case 3:
        if (xl(t, l), n & 64 && (t = l.updateQueue, t !== null)) {
          if (e = null, l.child !== null)
            switch (l.child.tag) {
              case 27:
              case 5:
                e = l.child.stateNode;
                break;
              case 1:
                e = l.child.stateNode;
            }
          try {
            A0(t, e);
          } catch (o) {
            Ut(l, l.return, o);
          }
        }
        break;
      case 27:
        e === null && n & 4 && Xd(l);
      case 26:
      case 5:
        xl(t, l), e === null && n & 4 && as(l), n & 512 && Ml(l, l.return);
        break;
      case 12:
        xl(t, l);
        break;
      case 31:
        xl(t, l), n & 4 && Pd(t, l);
        break;
      case 13:
        xl(t, l), n & 4 && tm(t, l), n & 64 && (t = l.memoizedState, t !== null && (t = t.dehydrated, t !== null && (l = J1.bind(
          null,
          l
        ), Dy(t, l))));
        break;
      case 22:
        if (n = l.memoizedState !== null || fe, !n) {
          var i = e !== null && e.memoizedState !== null || Rt;
          e = fe, a = Rt, fe = n, (Rt = i) && !a ? (n = 2, (l.subtreeFlags & 8772) !== 0 && (n |= 1), pl(
            t,
            l,
            n
          )) : xl(t, l), fe = e, Rt = a;
        }
        break;
      case 30:
        xl(t, l), n & 512 && Ml(l, l.return);
        break;
      case 7:
        n & 512 && Ml(l, l.return);
      default:
        xl(t, l);
    }
  }
  function _s(t, e) {
    for (t = t.child; t !== null; )
      $d(t, e), t = t.sibling;
  }
  function $d(t, e) {
    switch (t.tag) {
      case 5:
      case 26:
        try {
          var l = t.stateNode;
          if (e) {
            var n = l.style;
            typeof n.setProperty == "function" ? n.setProperty("display", "none", "important") : n.display = "none";
          } else {
            var a = t.stateNode, i = t.memoizedProps.style, o = i != null && i.hasOwnProperty("display") ? i.display : null;
            a.style.display = o == null || typeof o == "boolean" ? "" : ("" + o).trim();
          }
        } catch (T) {
          Ut(t, t.return, T);
        }
        vs(t, e);
        break;
      case 6:
        try {
          t.stateNode.nodeValue = e ? "" : t.memoizedProps, Nt = !0;
        } catch (T) {
          Ut(t, t.return, T);
        }
        break;
      case 18:
        try {
          var _ = t.stateNode;
          e ? Vm(_, !0) : Vm(t.stateNode, !1);
        } catch (T) {
          Ut(t, t.return, T);
        }
        break;
      case 22:
      case 23:
        t.memoizedState === null && _s(t, e);
        break;
      default:
        _s(t, e);
    }
  }
  function vs(t, e) {
    if (t.subtreeFlags & 67108864)
      for (t = t.child; t !== null; ) {
        t: {
          var l = t, n = e;
          switch (l.tag) {
            case 4:
              $d(l, n);
              break t;
            case 22:
              l.memoizedState === null && vs(l, n);
              break t;
            default:
              vs(l, n);
          }
        }
        t = t.sibling;
      }
  }
  function Wd(t) {
    var e = t.alternate;
    e !== null && (t.alternate = null, Wd(e)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (e = t.stateNode, e !== null && Zi(e)), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
  }
  var Vt = null, Ce = !1;
  function gl(t, e, l) {
    for (l = l.child; l !== null; )
      Id(t, e, l), l = l.sibling;
  }
  function Id(t, e, l) {
    if (je && typeof je.onCommitFiberUnmount == "function")
      try {
        je.onCommitFiberUnmount(zu, l);
      } catch {
      }
    switch (l.tag) {
      case 26:
        Rt || ve(l, e), gl(
          t,
          e,
          l
        ), l.memoizedState ? l.memoizedState.count-- : l.stateNode && !Rt && (l = l.stateNode, l.parentNode.removeChild(l));
        break;
      case 27:
        Rt || ve(l, e), ei(l);
        var n = Vt, a = Ce;
        Cn(l.type) && (Vt = l.stateNode, Ce = !1), gl(
          t,
          e,
          l
        ), l_(
          l.stateNode,
          l.type,
          l.memoizedProps
        ), Vt = n, Ce = a;
        break;
      case 5:
        Rt || ve(l, e), ei(l);
      case 6:
        if (l.tag === 6 && ei(l), n = Vt, a = Ce, Vt = null, gl(
          t,
          e,
          l
        ), Vt = n, Ce = a, Vt !== null)
          if (Ce)
            try {
              (Vt.nodeType === 9 ? Vt.body : Vt.nodeName === "HTML" ? Vt.ownerDocument.body : Vt).removeChild(l.stateNode), Nt = !0;
            } catch (i) {
              Ut(
                l,
                e,
                i
              );
            }
          else
            try {
              Vt.removeChild(l.stateNode), Nt = !0;
            } catch (i) {
              Ut(
                l,
                e,
                i
              );
            }
        break;
      case 18:
        Vt !== null && (Ce ? (t = Vt, Xm(
          t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t,
          l.stateNode
        ), hu(t)) : Xm(Vt, l.stateNode));
        break;
      case 4:
        n = Vt, a = Ce, Vt = l.stateNode.containerInfo, Ce = !0, gl(
          t,
          e,
          l
        ), Vt = n, Ce = a;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        En(2, l, e), Rt || En(4, l, e), gl(
          t,
          e,
          l
        );
        break;
      case 1:
        Rt || (ve(l, e), n = l.stateNode, typeof n.componentWillUnmount == "function" && wd(
          l,
          e,
          n
        )), gl(
          t,
          e,
          l
        );
        break;
      case 21:
        gl(
          t,
          e,
          l
        );
        break;
      case 22:
        Rt = (n = Rt) || l.memoizedState !== null, gl(
          t,
          e,
          l
        ), Rt = n;
        break;
      case 30:
        ve(l, e), gl(
          t,
          e,
          l
        );
        break;
      case 7:
        Rt || ve(l, e), gl(
          t,
          e,
          l
        );
        break;
      default:
        gl(
          t,
          e,
          l
        );
    }
  }
  function Pd(t, e) {
    if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null))) {
      t = t.dehydrated;
      try {
        hu(t);
      } catch (l) {
        Ut(e, e.return, l);
      }
    }
  }
  function tm(t, e) {
    if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null))))
      try {
        hu(t);
      } catch (l) {
        Ut(e, e.return, l);
      }
  }
  function Y1(t) {
    switch (t.tag) {
      case 31:
      case 13:
      case 19:
        var e = t.stateNode;
        return e === null && (e = t.stateNode = new Fd()), e;
      case 22:
        return t = t.stateNode, e = t._retryCache, e === null && (e = t._retryCache = new Fd()), e;
      default:
        throw Error(f(435, t.tag));
    }
  }
  function Vf(t, e) {
    var l = Y1(t);
    e.forEach(function(n) {
      if (!l.has(n)) {
        l.add(n);
        var a = F1.bind(null, t, n);
        n.then(a, a);
      }
    });
  }
  function ze(t, e, l) {
    var n = e.deletions;
    if (n !== null)
      for (var a = 0; a < n.length; a++) {
        var i = n[a], o = t, _ = e, T = _;
        t: for (; T !== null; ) {
          switch (T.tag) {
            case 27:
              if (Cn(T.type)) {
                Vt = T.stateNode, Ce = !1;
                break t;
              }
              break;
            case 5:
              Vt = T.stateNode, Ce = !1;
              break t;
            case 3:
            case 4:
              Vt = T.stateNode.containerInfo, Ce = !0;
              break t;
          }
          T = T.return;
        }
        if (Vt === null) throw Error(f(160));
        Id(o, _, i), Vt = null, Ce = !1, o = i.alternate, o !== null && (o.return = null), i.return = null;
      }
    if (e.subtreeFlags & 13886)
      for (e = e.child; e !== null; )
        em(e, t, l), e = e.sibling;
  }
  var yl = null;
  function em(t, e, l) {
    var n = t.alternate, a = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (a & 4 && (n = t.updateQueue, n = n !== null ? n.events : null, n !== null))
          for (var i = 0; i < n.length; i++) {
            var o = n[i];
            o.ref.impl = o.nextImpl;
          }
        ze(e, t, l), Ae(t), a & 4 && (En(3, t, t.return), ti(3, t), En(5, t, t.return));
        break;
      case 1:
        ze(e, t, l), Ae(t), a & 512 && (Rt || n === null || ve(n, n.return)), a & 64 && fe && (t = t.updateQueue, t !== null && (e = t.callbacks, e !== null && (l = t.shared.hiddenCallbacks, t.shared.hiddenCallbacks = l === null ? e : l.concat(e))));
        break;
      case 26:
        if (i = yl, ze(e, t, l), Ae(t), a & 512 && (Rt || n === null || ve(n, n.return)), a & 4)
          if (a = n !== null ? n.memoizedState : null, l = t.memoizedState, n === null)
            if (l === null)
              if (t.stateNode === null)
                if (fe)
                  t.stateNode = wm(
                    t.type,
                    t.memoizedProps,
                    e.containerInfo,
                    t
                  );
                else {
                  t: {
                    e = t.type, l = t.memoizedProps, a = i.ownerDocument || i;
                    e: switch (e) {
                      case "title":
                        n = a.getElementsByTagName("title")[0], (!n || n[Du] || n[he] || n.namespaceURI === "http://www.w3.org/2000/svg" || n.hasAttribute("itemprop")) && (n = a.createElement(e), a.head.insertBefore(
                          n,
                          a.querySelector("head > title")
                        )), ge(n, e, l), n[he] = t, ue(n), e = n;
                        break t;
                      case "link":
                        if (i = c_(
                          "link",
                          "href",
                          a
                        ).get(e + (l.href || ""))) {
                          for (o = 0; o < i.length; o++)
                            if (n = i[o], n.getAttribute("href") === (l.href == null || l.href === "" ? null : l.href) && n.getAttribute("rel") === (l.rel == null ? null : l.rel) && n.getAttribute("title") === (l.title == null ? null : l.title) && n.getAttribute("crossorigin") === (l.crossOrigin == null ? null : l.crossOrigin)) {
                              i.splice(o, 1);
                              break e;
                            }
                        }
                        n = a.createElement(e), ge(n, e, l), a.head.appendChild(n);
                        break;
                      case "meta":
                        if (i = c_(
                          "meta",
                          "content",
                          a
                        ).get(e + (l.content || ""))) {
                          for (o = 0; o < i.length; o++)
                            if (n = i[o], n.getAttribute("content") === (l.content == null ? null : "" + l.content) && n.getAttribute("name") === (l.name == null ? null : l.name) && n.getAttribute("property") === (l.property == null ? null : l.property) && n.getAttribute("http-equiv") === (l.httpEquiv == null ? null : l.httpEquiv) && n.getAttribute("charset") === (l.charSet == null ? null : l.charSet)) {
                              i.splice(o, 1);
                              break e;
                            }
                        }
                        n = a.createElement(e), ge(n, e, l), a.head.appendChild(n);
                        break;
                      default:
                        throw Error(f(468, e));
                    }
                    n[he] = t, ue(n), e = n;
                  }
                  t.stateNode = e;
                }
              else
                fe || to(i, t.type, t.stateNode);
            else
              t.stateNode = f_(
                i,
                l,
                t.memoizedProps
              );
          else
            a !== l ? (a === null ? (e = n.stateNode, e === null || Rt || e.parentNode.removeChild(e)) : a.count--, l === null ? fe || to(i, t.type, t.stateNode) : f_(i, l, t.memoizedProps)) : l === null && t.stateNode !== null && us(
              t,
              t.memoizedProps,
              n.memoizedProps
            );
        break;
      case 27:
        ze(e, t, l), Ae(t), a & 512 && (Rt || n === null || ve(n, n.return)), n !== null && a & 4 && us(
          t,
          t.memoizedProps,
          n.memoizedProps
        );
        break;
      case 5:
        if (i = Cl, Cl = !1, ze(e, t, l), Cl = i, Ae(t), a & 512 && (Rt || n === null || ve(n, n.return)), t.flags & 32) {
          e = t.stateNode;
          try {
            Na(e, ""), Nt = !0;
          } catch (x) {
            Ut(t, t.return, x);
          }
        }
        a & 4 && t.stateNode != null && (e = t.memoizedProps, us(
          t,
          e,
          n !== null ? n.memoizedProps : e
        )), a & 1024 && (ds = !0);
        break;
      case 6:
        if (ze(e, t, l), Ae(t), a & 4) {
          if (t.stateNode === null)
            throw Error(f(162));
          e = t.memoizedProps, l = t.stateNode;
          try {
            l.nodeValue = e, Nt = !0;
          } catch (x) {
            Ut(t, t.return, x);
          }
        }
        break;
      case 3:
        if (Nt = !1, nc = null, i = yl, yl = oi(e.containerInfo), ze(e, t, l), yl = i, Ae(t), a & 4 && n !== null && n.memoizedState.isDehydrated)
          try {
            hu(e.containerInfo);
          } catch (x) {
            Ut(t, t.return, x);
          }
        ds && (ds = !1, lm(t)), Nt = !1;
        break;
      case 4:
        a = Cl, Cl = fe, n = bh(), i = yl, yl = oi(
          t.stateNode.containerInfo
        ), ze(e, t, l), Ae(t), yl = i, Nt && li && (jf = !0), Nt = n, Cl = a;
        break;
      case 12:
        ze(e, t, l), Ae(t);
        break;
      case 31:
        ze(e, t, l), Ae(t), a & 4 && (e = t.updateQueue, e !== null && (t.updateQueue = null, Vf(t, e)));
        break;
      case 13:
        ze(e, t, l), Ae(t), t.child.flags & 8192 && t.memoizedState !== null != (n !== null && n.memoizedState !== null) && (Zf = Ge()), a & 4 && (e = t.updateQueue, e !== null && (t.updateQueue = null, Vf(t, e)));
        break;
      case 22:
        i = t.memoizedState !== null, o = n !== null && n.memoizedState !== null;
        var _ = fe, T = Rt, M = Cl;
        fe = _ || i, Cl = M || i, Rt = T || o, ze(e, t, l), Rt = T, Cl = M, fe = _, Ae(t), a & 8192 && (e = t.stateNode, e._visibility = i ? e._visibility & -2 : e._visibility | 1, !i || n === null || o || fe || Rt || (e = o || Rt, l = fe, n = Rt, fe = i || fe, Rt = e, On(t, 2), fe = l, Rt = n), !i && Cl || _s(t, i)), a & 4 && (e = t.updateQueue, e !== null && (l = e.retryQueue, l !== null && (e.retryQueue = null, Vf(t, l))));
        break;
      case 19:
        ze(e, t, l), Ae(t), a & 4 && (e = t.updateQueue, e !== null && (t.updateQueue = null, Vf(t, e)));
        break;
      case 30:
        a & 512 && (Rt || n === null || ve(n, n.return)), a = bh(), i = li, o = (l & 335544064) === l, _ = t.memoizedProps, li = o && Ql(
          _.default,
          _.update
        ) !== "none", ze(e, t, l), Ae(t), o && n !== null && Nt && (t.flags |= 4), li = i, Nt = a;
        break;
      case 21:
        break;
      case 7:
        a & 512 && (Rt || n === null || ve(n, n.return)), n && n.stateNode !== null && (n.stateNode._fragmentFiber = t);
      default:
        ze(e, t, l), Ae(t);
    }
  }
  function Ae(t) {
    var e = t.flags;
    if (e & 2) {
      try {
        for (var l, n = t.return; n !== null; ) {
          if (jd(n)) {
            l = n;
            break;
          }
          n = n.return;
        }
        n = null;
        for (var a = t.return; a !== null; ) {
          if (ns(a)) {
            var i = a.stateNode;
            n === null ? n = [i] : n.push(i);
          }
          if (ls(a)) break;
          a = a.return;
        }
        var o = n;
        if (l == null) throw Error(f(160));
        switch (l.tag) {
          case 27:
            var _ = l.stateNode, T = is(t);
            Yf(
              t,
              T,
              _,
              o
            );
            break;
          case 5:
            var M = l.stateNode;
            l.flags & 32 && (Na(M, ""), l.flags &= -33);
            var x = is(t);
            Yf(
              t,
              x,
              M,
              o
            );
            break;
          case 3:
          case 4:
            var q = l.stateNode.containerInfo, z = is(t);
            fs(
              t,
              z,
              q,
              o
            );
            break;
          default:
            throw Error(f(161));
        }
      } catch (C) {
        Ut(t, t.return, C);
      }
      t.flags &= -3;
    }
    e & 4096 && (t.flags &= -4097);
  }
  function lm(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var e = t;
        lm(e), e.tag === 5 && e.flags & 1024 && (e = e.stateNode, ou = !0, e.reset(), ou = !1), t = t.sibling;
      }
  }
  function Fa(t, e) {
    if (e.subtreeFlags & 9270)
      for (e = e.child; e !== null; )
        nm(e, t), e = e.sibling;
    else Jd(e);
  }
  function nm(t, e) {
    var l = t.alternate;
    if (l === null) cs(t, !1);
    else
      switch (t.tag) {
        case 3:
          if (ms = Rl = !1, Ld(), Fa(e, t), !Rl && !jf) {
            if (t = Dl, t !== null)
              for (var n = 0; n < t.length; n += 3) {
                l = t[n];
                var a = t[n + 1];
                Qm(l, t[n + 2]), l = l.ownerDocument.documentElement, l !== null && l.animate(
                  { opacity: [0, 0], pointerEvents: ["none", "none"] },
                  {
                    duration: 0,
                    fill: "forwards",
                    pseudoElement: "::view-transition-group(" + a + ")"
                  }
                );
              }
            t = e.containerInfo, t = t.nodeType === 9 ? t.documentElement : t.ownerDocument.documentElement, t !== null && t.style.viewTransitionName === "" && (t.style.viewTransitionName = "none", t.animate(
              { opacity: [0, 0], pointerEvents: ["none", "none"] },
              {
                duration: 0,
                fill: "forwards",
                pseudoElement: "::view-transition-group(root)"
              }
            ), t.animate(
              { width: [0, 0], height: [0, 0] },
              {
                duration: 0,
                fill: "forwards",
                pseudoElement: "::view-transition"
              }
            )), ms = !0;
          }
          Dl = null;
          break;
        case 5:
          Fa(e, t);
          break;
        case 4:
          n = Rl, Rl = !1, Fa(e, t), Rl && (jf = !0), Rl = n;
          break;
        case 22:
          t.memoizedState === null && (l.memoizedState !== null ? cs(t, !1) : Fa(e, t));
          break;
        case 30:
          n = Rl, a = Ld(), Rl = !1, Fa(e, t), Rl && (t.flags |= 4);
          var i = t.memoizedProps, o = t.stateNode;
          e = Ll(i, o), o = Ll(l.memoizedProps, o);
          var _ = Ql(i.default, i.update);
          _ === "none" ? e = !1 : (i = l.memoizedState, l.memoizedState = null, l = t.child, Ne = 0, e = hs(
            t,
            l,
            e,
            o,
            _,
            i,
            !0
          ), Ne !== (i === null ? 0 : i.length) && (t.flags |= 32)), (t.flags & 4) !== 0 && e ? (eu(
            t,
            t.memoizedProps.onUpdate
          ), Dl = a) : a !== null && (a.push.apply(a, Dl), Dl = a), Rl = (t.flags & 32) !== 0 ? !0 : n;
          break;
        default:
          Fa(e, t);
      }
  }
  function xl(t, e) {
    if (e.subtreeFlags & 8772)
      for (e = e.child; e !== null; )
        kd(t, e.alternate, e), e = e.sibling;
  }
  function On(t, e) {
    for (t = t.child; t !== null; ) {
      var l = t, n = e;
      switch (l.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          En(4, l, l.return), On(
            l,
            n
          );
          break;
        case 1:
          ve(l, l.return);
          var a = l.stateNode;
          typeof a.componentWillUnmount == "function" && wd(
            l,
            l.return,
            a
          ), On(
            l,
            n
          );
          break;
        case 27:
          (n & 2) !== 0 && l_(
            l.stateNode,
            l.type,
            l.memoizedProps
          );
        case 5:
          ve(l, l.return), l.tag !== 5 && l.tag !== 27 || ei(l), On(
            l,
            n
          );
          break;
        case 6:
          ei(l);
          break;
        case 26:
          ve(l, l.return), a = l.stateNode, l.memoizedState !== null || a === null || Rt || a.parentNode.removeChild(a), On(
            l,
            n
          );
          break;
        case 22:
          l.memoizedState === null && On(
            l,
            n
          );
          break;
        case 30:
          ve(l, l.return), On(
            l,
            n
          );
          break;
        case 7:
          ve(l, l.return);
        default:
          On(
            l,
            n
          );
      }
      t = t.sibling;
    }
  }
  function pl(t, e, l) {
    for (l = (e.subtreeFlags & 8772) !== 0 ? l : l & -2, e = e.child; e !== null; ) {
      var n = e.alternate, a = t, i = e, o = i.flags, _ = (l & 1) !== 0;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          pl(
            a,
            i,
            l
          ), ti(4, i);
          break;
        case 1:
          if (pl(
            a,
            i,
            l
          ), n = i, a = n.stateNode, typeof a.componentDidMount == "function")
            try {
              a.componentDidMount();
            } catch (x) {
              Ut(n, n.return, x);
            }
          if (n = i, a = n.updateQueue, a !== null) {
            var T = n.stateNode;
            try {
              var M = a.shared.hiddenCallbacks;
              if (M !== null)
                for (a.shared.hiddenCallbacks = null, a = 0; a < M.length; a++)
                  z0(M[a], T);
            } catch (x) {
              Ut(n, n.return, x);
            }
          }
          _ && o & 64 && qd(i), Ml(i, i.return);
          break;
        case 27:
          (l & 2) !== 0 && Xd(i);
        case 5:
          i.tag !== 5 && i.tag !== 27 || Gd(i), pl(
            a,
            i,
            l
          ), _ && n === null && o & 4 && as(i), Ml(i, i.return);
          break;
        case 6:
          Gd(i);
          break;
        case 26:
          T = i.stateNode, i.memoizedState !== null || T === null || fe || to(
            oi(T.ownerDocument),
            i.type,
            T
          ), pl(
            a,
            i,
            l
          ), _ && n === null && o & 4 && as(i), Ml(i, i.return);
          break;
        case 12:
          pl(
            a,
            i,
            l
          );
          break;
        case 31:
          pl(
            a,
            i,
            l
          ), _ && o & 4 && Pd(a, i);
          break;
        case 13:
          pl(
            a,
            i,
            l
          ), _ && o & 4 && tm(a, i);
          break;
        case 22:
          i.memoizedState === null && pl(
            a,
            i,
            l
          ), Ml(i, i.return);
          break;
        case 30:
          pl(
            a,
            i,
            l
          ), Ml(i, i.return);
          break;
        case 7:
          Ml(i, i.return);
        default:
          pl(
            a,
            i,
            l
          );
      }
      e = e.sibling;
    }
  }
  function gs(t, e) {
    var l = null;
    t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), t = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool), t !== l && (t != null && t.refCount++, l != null && Xu(l));
  }
  function ys(t, e) {
    t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && Xu(t));
  }
  function rl(t, e, l, n) {
    var a = (l & 335544064) === l;
    if (e.subtreeFlags & (a ? 10262 : 10256))
      for (e = e.child; e !== null; )
        am(
          t,
          e,
          l,
          n
        ), e = e.sibling;
    else a && Kd(e);
  }
  function am(t, e, l, n) {
    var a = (l & 335544064) === l;
    a && e.alternate === null && e.return !== null && e.return.alternate !== null && Gf(e);
    var i = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        rl(
          t,
          e,
          l,
          n
        ), i & 2048 && ti(9, e);
        break;
      case 1:
        rl(
          t,
          e,
          l,
          n
        );
        break;
      case 3:
        rl(
          t,
          e,
          l,
          n
        ), a && ms && (t = t.containerInfo, t = t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t, t.style.viewTransitionName === "root" && (t.style.viewTransitionName = ""), t = t.ownerDocument.documentElement, t !== null && t.style.viewTransitionName === "none" && (t.style.viewTransitionName = "")), i & 2048 && (i = null, e.alternate !== null && (i = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== i && (e.refCount++, i != null && Xu(i)));
        break;
      case 12:
        if (i & 2048) {
          rl(
            t,
            e,
            l,
            n
          ), i = e.stateNode;
          try {
            var o = e.memoizedProps, _ = o.id, T = o.onPostCommit;
            typeof T == "function" && T(
              _,
              e.alternate === null ? "mount" : "update",
              i.passiveEffectDuration,
              -0
            );
          } catch (M) {
            Ut(e, e.return, M);
          }
        } else
          rl(
            t,
            e,
            l,
            n
          );
        break;
      case 31:
        rl(
          t,
          e,
          l,
          n
        );
        break;
      case 13:
        rl(
          t,
          e,
          l,
          n
        );
        break;
      case 23:
        break;
      case 22:
        o = e.stateNode, _ = e.alternate, e.memoizedState !== null ? (a && _ !== null && _.memoizedState === null && Gf(_), o._visibility & 2 ? rl(
          t,
          e,
          l,
          n
        ) : ni(
          t,
          e
        )) : (a && _ !== null && _.memoizedState !== null && Gf(e), o._visibility & 2 ? rl(
          t,
          e,
          l,
          n
        ) : (o._visibility |= 2, ka(
          t,
          e,
          l,
          n,
          (e.subtreeFlags & 10256) !== 0 || !1
        ))), i & 2048 && gs(_, e);
        break;
      case 24:
        rl(
          t,
          e,
          l,
          n
        ), i & 2048 && ys(e.alternate, e);
        break;
      case 30:
        a && (i = e.alternate, i !== null && (Nl(i.child, !0), Nl(e.child, !0))), rl(
          t,
          e,
          l,
          n
        );
        break;
      default:
        rl(
          t,
          e,
          l,
          n
        );
    }
  }
  function ka(t, e, l, n, a) {
    for (a = a && ((e.subtreeFlags & 10256) !== 0 || !1), e = e.child; e !== null; ) {
      var i = t, o = e, _ = l, T = n, M = o.flags;
      switch (o.tag) {
        case 0:
        case 11:
        case 15:
          ka(
            i,
            o,
            _,
            T,
            a
          ), ti(8, o);
          break;
        case 23:
          break;
        case 22:
          var x = o.stateNode;
          o.memoizedState !== null ? x._visibility & 2 ? ka(
            i,
            o,
            _,
            T,
            a
          ) : ni(
            i,
            o
          ) : (x._visibility |= 2, ka(
            i,
            o,
            _,
            T,
            a
          )), a && M & 2048 && gs(
            o.alternate,
            o
          );
          break;
        case 24:
          ka(
            i,
            o,
            _,
            T,
            a
          ), a && M & 2048 && ys(o.alternate, o);
          break;
        default:
          ka(
            i,
            o,
            _,
            T,
            a
          );
      }
      e = e.sibling;
    }
  }
  function ni(t, e) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) {
        var l = t, n = e, a = n.flags;
        switch (n.tag) {
          case 22:
            ni(l, n), a & 2048 && gs(
              n.alternate,
              n
            );
            break;
          case 24:
            ni(l, n), a & 2048 && ys(n.alternate, n);
            break;
          default:
            ni(l, n);
        }
        e = e.sibling;
      }
  }
  var ra = 8192;
  function sa(t, e, l) {
    if (t.subtreeFlags & ra)
      for (t = t.child; t !== null; )
        um(
          t,
          e,
          l
        ), t = t.sibling;
  }
  function um(t, e, l) {
    switch (t.tag) {
      case 26:
        sa(
          t,
          e,
          l
        ), t.flags & ra && (t.memoizedState !== null ? Vy(
          l,
          yl,
          t.memoizedState,
          t.memoizedProps
        ) : (t = t.stateNode, (e & 335544128) === e && h_(l, t)));
        break;
      case 5:
        sa(
          t,
          e,
          l
        ), t.flags & ra && (t = t.stateNode, (e & 335544128) === e && h_(l, t));
        break;
      case 3:
      case 4:
        var n = yl;
        yl = oi(t.stateNode.containerInfo), sa(
          t,
          e,
          l
        ), yl = n;
        break;
      case 22:
        t.memoizedState === null && (n = t.alternate, n !== null && n.memoizedState !== null ? (n = ra, ra = 16777216, sa(
          t,
          e,
          l
        ), ra = n) : sa(
          t,
          e,
          l
        ));
        break;
      case 30:
        if ((t.flags & ra) !== 0 && (n = t.memoizedProps.name, n != null && n !== "auto")) {
          var a = t.stateNode;
          a.paired = null, Ze === null && (Ze = /* @__PURE__ */ new Map()), Ze.set(n, a);
        }
        sa(
          t,
          e,
          l
        );
        break;
      default:
        sa(
          t,
          e,
          l
        );
    }
  }
  function im(t) {
    var e = t.alternate;
    if (e !== null && (t = e.child, t !== null)) {
      e.child = null;
      do
        e = t.sibling, t.sibling = null, t = e;
      while (t !== null);
    }
  }
  function ai(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var l = 0; l < e.length; l++) {
          var n = e[l];
          ce = n, cm(
            n,
            t
          );
        }
      im(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        fm(t), t = t.sibling;
  }
  function fm(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        ai(t), t.flags & 2048 && En(9, t, t.return);
        break;
      case 3:
        ai(t);
        break;
      case 12:
        ai(t);
        break;
      case 22:
        var e = t.stateNode;
        t.memoizedState !== null && e._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (e._visibility &= -3, Lf(t)) : ai(t);
        break;
      default:
        ai(t);
    }
  }
  function Lf(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var l = 0; l < e.length; l++) {
          var n = e[l];
          ce = n, cm(
            n,
            t
          );
        }
      im(t);
    }
    for (t = t.child; t !== null; ) {
      switch (e = t, e.tag) {
        case 0:
        case 11:
        case 15:
          En(8, e, e.return), Lf(e);
          break;
        case 22:
          l = e.stateNode, l._visibility & 2 && (l._visibility &= -3, Lf(e));
          break;
        default:
          Lf(e);
      }
      t = t.sibling;
    }
  }
  function cm(t, e) {
    for (; ce !== null; ) {
      var l = ce;
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          En(8, l, e);
          break;
        case 23:
        case 22:
          if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
            var n = l.memoizedState.cachePool.pool;
            n != null && n.refCount++;
          }
          break;
        case 24:
          Xu(l.memoizedState.cache);
      }
      if (n = l.child, n !== null) n.return = l, ce = n;
      else
        t: for (l = t; ce !== null; ) {
          n = ce;
          var a = n.sibling, i = n.return;
          if (Wd(n), n === l) {
            ce = null;
            break t;
          }
          if (a !== null) {
            a.return = i, ce = a;
            break t;
          }
          ce = i;
        }
    }
  }
  var q1 = {
    getCacheForType: function(t) {
      var e = de(Pt), l = e.data.get(t);
      return l === void 0 && (l = t(), e.data.set(t, l)), l;
    },
    cacheSignal: function() {
      return de(Pt).controller.signal;
    }
  }, w1 = typeof WeakMap == "function" ? WeakMap : Map, Ct = 0, Yt = null, Tt = null, bt = 0, xt = 0, Ke = null, zn = !1, $a = !1, ps = !1, Pl = 0, kt = 0, An = 0, oa = 0, Qf = 0, Je = 0, Wa = 0, ui = null, Re = null, Ts = !1, Zf = 0, rm = 0, Kf = 1 / 0, Jf = null, Mn = null, Qt = 0, Tl = null, ha = null, Ul = 0, Ss = 0, bs = null, sm = null, Ia = null, Pa = null, tu = null, ii = 0, Ff = null;
  function Fe() {
    return (Ct & 2) !== 0 && bt !== 0 ? bt & -bt : tt.T !== null ? xs() : dh();
  }
  function om() {
    if (Je === 0)
      if ((bt & 536870912) === 0 || gt) {
        var t = Xi;
        Xi <<= 1, (Xi & 3932160) === 0 && (Xi = 262144), Je = t;
      } else Je = 536870912;
    return t = me.current, t !== null && (t.flags |= 32), Je;
  }
  function eu(t, e) {
    if (e != null) {
      var l = t.stateNode, n = l.ref;
      n === null && (n = l.ref = Zm(
        Ll(t.memoizedProps, l)
      )), Pa === null && (Pa = []), Pa.push(e.bind(null, n));
    }
  }
  function xe(t, e, l) {
    (t === Yt && (xt === 2 || xt === 9) || t.cancelPendingCommit !== null) && (lu(t, 0), Dn(
      t,
      bt,
      Je,
      !1
    )), Mu(t, l), ((Ct & 2) === 0 || t !== Yt) && (t === Yt && ((Ct & 2) === 0 && (oa |= l), kt === 4 && Dn(
      t,
      bt,
      Je,
      !1
    )), Hl(t));
  }
  function hm(t, e, l) {
    if ((Ct & 6) !== 0) throw Error(f(327));
    var n = !l && (e & 127) === 0 && (e & t.expiredLanes) === 0 || Au(t, e), a = n ? X1(t, e) : Os(t, e, !0), i = n;
    do {
      if (a === 0) {
        $a && !n && Dn(t, e, 0, !1);
        break;
      } else {
        if (l = t.current.alternate, i && !G1(l)) {
          a = Os(t, e, !1), i = !1;
          continue;
        }
        if (a === 2) {
          if (i = e, t.errorRecoveryDisabledLanes & i)
            var o = 0;
          else
            o = t.pendingLanes & -536870913, o = o !== 0 ? o : o & 536870912 ? 536870912 : 0;
          if (o !== 0) {
            e = o;
            t: {
              var _ = t;
              a = ui;
              var T = _.current.memoizedState.isDehydrated;
              if (T && (lu(_, o).flags |= 256), o = Os(
                _,
                o,
                !1
              ), o !== 2 && o !== 6) {
                if (ps && !T) {
                  _.errorRecoveryDisabledLanes |= i, oa |= i, a = 4;
                  break t;
                }
                i = Re, Re = a, i !== null && (Re === null ? Re = i : Re.push.apply(
                  Re,
                  i
                ));
              }
              a = o;
            }
            if (i = !1, a !== 2) continue;
          }
        }
        if (a === 1) {
          lu(t, 0), Dn(t, e, 0, !0);
          break;
        }
        t: {
          switch (n = t, i = a, i) {
            case 0:
            case 1:
              throw Error(f(345));
            case 4:
              if ((e & 4194048) !== e && (e & 62914560) !== e)
                break;
            case 6:
              Dn(
                n,
                e,
                Je,
                !zn
              );
              break t;
            case 2:
              Re = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(f(329));
          }
          if ((e & 62914560) === e && (a = Zf + 300 - Ge(), 10 < a)) {
            if (Dn(
              n,
              e,
              Je,
              !zn
            ), Li(n, 0, !0) !== 0) break t;
            Ul = e, n.timeoutHandle = Ls(
              dm.bind(
                null,
                n,
                l,
                Re,
                Jf,
                Ts,
                e,
                Je,
                oa,
                Wa,
                zn,
                i,
                "Throttled",
                -0,
                0
              ),
              a
            );
            break t;
          }
          dm(
            n,
            l,
            Re,
            Jf,
            Ts,
            e,
            Je,
            oa,
            Wa,
            zn,
            i,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    Hl(t);
  }
  function dm(t, e, l, n, a, i, o, _, T, M, x, q, z, C) {
    t.timeoutHandle = -1;
    var J = e.subtreeFlags, P = (i & 335544064) === i;
    if (q = null, (P || J & 8192 || (J & 16785408) === 16785408) && (q = {
      stylesheets: null,
      count: 0,
      imgCount: 0,
      imgBytes: 0,
      suspenseyImages: [],
      waitingForImages: !0,
      waitingForViewTransition: !1,
      unsuspend: Ol
    }, Ze = null, um(
      e,
      i,
      q
    ), P && (J = q, P = t.containerInfo, P = (P.nodeType === 9 ? P : P.ownerDocument).__reactViewTransition, P != null && (J.count++, J.waitingForViewTransition = !0, J = mi.bind(J), P.finished.then(J, J))), J = (i & 62914560) === i ? Zf - Ge() : (i & 4194048) === i ? rm - Ge() : 0, J = Ly(
      q,
      J
    ), J !== null)) {
      Ul = i, t.cancelPendingCommit = J(
        Sm.bind(
          null,
          t,
          e,
          i,
          l,
          n,
          a,
          o,
          _,
          T,
          M,
          x,
          q,
          null,
          z,
          C
        )
      ), Dn(t, i, o, !M);
      return;
    }
    Sm(
      t,
      e,
      i,
      l,
      n,
      a,
      o,
      _,
      T,
      M,
      x,
      q
    );
  }
  function G1(t) {
    for (var e = t; ; ) {
      var l = e.tag;
      if ((l === 0 || l === 11 || l === 15) && e.flags & 16384 && (l = e.updateQueue, l !== null && (l = l.stores, l !== null)))
        for (var n = 0; n < l.length; n++) {
          var a = l[n], i = a.getSnapshot;
          a = a.value;
          try {
            if (!Le(i(), a)) return !1;
          } catch {
            return !1;
          }
        }
      if (l = e.child, e.subtreeFlags & 16384 && l !== null)
        l.return = e, e = l;
      else {
        if (e === t) break;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) return !0;
          e = e.return;
        }
        e.sibling.return = e.return, e = e.sibling;
      }
    }
    return !0;
  }
  function Dn(t, e, l, n) {
    e = ch(t, e), e &= ~Qf, e &= ~oa, t.suspendedLanes |= e, t.pingedLanes &= ~e, n && (t.warmLanes |= e), n = t.expirationTimes;
    for (var a = e; 0 < a; ) {
      var i = 31 - Xe(a), o = 1 << i;
      n[i] = -1, a &= ~o;
    }
    l !== 0 && sh(t, l, e);
  }
  function kf() {
    return (Ct & 6) === 0 ? (fi(0), !1) : !0;
  }
  function Es() {
    if (Tt !== null) {
      if (xt === 0)
        var t = Tt.return;
      else
        t = Tt, Jl = Pn = null, Rr(t), Va = null, Qu = 0, t = Tt;
      for (; t !== null; )
        Yd(t.alternate, t), t = t.return;
      Tt = null;
    }
  }
  function lu(t, e) {
    var l = t.timeoutHandle;
    return l !== -1 && (t.timeoutHandle = -1, ry(l)), l = t.cancelPendingCommit, l !== null && (t.cancelPendingCommit = null, l()), Ul = 0, Es(), Yt = t, Tt = l = Zl(t.current, null), bt = e, xt = 0, Ke = null, zn = !1, $a = Au(t, e), ps = !1, Wa = Je = Qf = oa = An = kt = 0, Re = ui = null, Ts = !1, Pl = ch(t, e), lf(), l;
  }
  function mm(t, e) {
    dt = null, tt.H = Df, e === Xa || e === mf ? (e = S0(), xt = 3) : e === yr ? (e = S0(), xt = 4) : xt = e === Kr ? 8 : e !== null && typeof e == "object" && typeof e.then == "function" ? 6 : 1, Ke = e, Tt === null && (kt = 1, Nf(
      t,
      ul(e, t.current)
    ));
  }
  function _m() {
    var t = me.current;
    return t === null ? !0 : (bt & 4194048) === bt ? Te === null : (bt & 62914560) === bt || (bt & 536870912) !== 0 ? t === Te : !1;
  }
  function vm() {
    var t = tt.H;
    return tt.H = Df, t === null ? Df : t;
  }
  function gm() {
    var t = tt.A;
    return tt.A = q1, t;
  }
  function $f() {
    kt = 4, zn || (bt & 4194048) !== bt && me.current !== null || ($a = !0), (An & 134217727) === 0 && (oa & 134217727) === 0 || Yt === null || Dn(
      Yt,
      bt,
      Je,
      !1
    );
  }
  function Os(t, e, l) {
    var n = Ct;
    Ct |= 2;
    var a = vm(), i = gm();
    (Yt !== t || bt !== e) && (Jf = null, lu(t, e)), e = !1;
    var o = kt;
    t: do
      try {
        if (xt !== 0 && Tt !== null) {
          var _ = Tt, T = Ke;
          switch (xt) {
            case 8:
              Es(), o = 6;
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              me.current === null && (e = !0);
              var M = xt;
              if (xt = 0, Ke = null, nu(t, _, T, M), l && $a) {
                o = 0;
                break t;
              }
              break;
            default:
              M = xt, xt = 0, Ke = null, nu(t, _, T, M);
          }
        }
        j1(), o = kt;
        break;
      } catch (x) {
        mm(t, x);
      }
    while (!0);
    return e && t.shellSuspendCounter++, Jl = Pn = null, Ct = n, tt.H = a, tt.A = i, Tt === null && (Yt = null, bt = 0, lf()), o;
  }
  function j1() {
    for (; Tt !== null; ) ym(Tt);
  }
  function X1(t, e) {
    var l = Ct;
    Ct |= 2;
    var n = vm(), a = gm();
    Yt !== t || bt !== e ? (Jf = null, Kf = Ge() + 500, lu(t, e)) : $a = Au(
      t,
      e
    );
    t: do
      try {
        if (xt !== 0 && Tt !== null) {
          e = Tt;
          var i = Ke;
          e: switch (xt) {
            case 1:
              xt = 0, Ke = null, nu(t, e, i, 1);
              break;
            case 2:
            case 9:
              if (p0(i)) {
                xt = 0, Ke = null, pm(e);
                break;
              }
              e = function() {
                xt !== 2 && xt !== 9 || Yt !== t || (xt = 7), Hl(t);
              }, i.then(e, e);
              break t;
            case 3:
              xt = 7;
              break t;
            case 4:
              xt = 5;
              break t;
            case 7:
              p0(i) ? (xt = 0, Ke = null, pm(e)) : (xt = 0, Ke = null, nu(t, e, i, 7));
              break;
            case 5:
              var o = null;
              switch (Tt.tag) {
                case 26:
                  o = Tt.memoizedState;
                case 5:
                case 27:
                  var _ = Tt;
                  if (o ? s_(o) : _.stateNode.complete) {
                    xt = 0, Ke = null;
                    var T = _.sibling;
                    if (T !== null) Tt = T;
                    else {
                      var M = _.return;
                      M !== null ? (Tt = M, Wf(M)) : Tt = null;
                    }
                    break e;
                  }
              }
              xt = 0, Ke = null, nu(t, e, i, 5);
              break;
            case 6:
              xt = 0, Ke = null, nu(t, e, i, 6);
              break;
            case 8:
              Es(), kt = 6;
              break t;
            default:
              throw Error(f(462));
          }
        }
        V1();
        break;
      } catch (x) {
        mm(t, x);
      }
    while (!0);
    return Jl = Pn = null, tt.H = n, tt.A = a, Ct = l, Tt !== null ? 0 : (Yt = null, bt = 0, lf(), kt);
  }
  function V1() {
    for (; Tt !== null && !ug(); )
      ym(Tt);
  }
  function ym(t) {
    var e = Hd(t.alternate, t, Pl);
    t.memoizedProps = t.pendingProps, e === null ? Wf(t) : Tt = e;
  }
  function pm(t) {
    var e = t, l = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = Md(
          l,
          e,
          e.pendingProps,
          e.type,
          void 0,
          bt
        );
        break;
      case 11:
        e = Md(
          l,
          e,
          e.pendingProps,
          e.type.render,
          e.ref,
          bt
        );
        break;
      case 5:
        Rr(e);
        var n = e;
        n === ie && (gt ? (rf(n), n.tag === 5 && n.stateNode != null && (jt = n.stateNode)) : (rf(n), gt = !0));
      default:
        Yd(l, e), e = Tt = c0(e, Pl), e = Hd(l, e, Pl);
    }
    t.memoizedProps = t.pendingProps, e === null ? Wf(t) : Tt = e;
  }
  function nu(t, e, l, n) {
    Jl = Pn = null, Rr(e), Va = null, Qu = 0;
    var a = e.return;
    try {
      if (N1(
        t,
        a,
        e,
        l,
        bt
      )) {
        kt = 1, Nf(
          t,
          ul(l, t.current)
        ), Tt = null;
        return;
      }
    } catch (i) {
      if (a !== null) throw Tt = a, i;
      kt = 1, Nf(
        t,
        ul(l, t.current)
      ), Tt = null;
      return;
    }
    e.flags & 32768 ? (gt || n === 1 ? t = !0 : $a || (bt & 536870912) !== 0 ? t = !1 : (zn = t = !0, (n === 2 || n === 9 || n === 3 || n === 6) && (n = me.current, n !== null && n.tag === 13 && (n.flags |= 16384))), Tm(e, t)) : Wf(e);
  }
  function Wf(t) {
    var e = t;
    do {
      if ((e.flags & 32768) !== 0) {
        Tm(
          e,
          zn
        );
        return;
      }
      t = e.return;
      var l = U1(
        e.alternate,
        e,
        Pl
      );
      if (l !== null) {
        Tt = l;
        return;
      }
      if (e = e.sibling, e !== null) {
        Tt = e;
        return;
      }
      Tt = e = t;
    } while (e !== null);
    kt === 0 && (kt = 5);
  }
  function Tm(t, e) {
    do {
      var l = H1(t.alternate, t);
      if (l !== null) {
        l.flags &= 32767, Tt = l;
        return;
      }
      if (l = t.return, l !== null && (l.flags |= 32768, l.subtreeFlags = 0, l.deletions = null), !e && (t = t.sibling, t !== null)) {
        Tt = t;
        return;
      }
      Tt = t = l;
    } while (t !== null);
    kt = 6, Tt = null;
  }
  function Sm(t, e, l, n, a, i, o, _, T, M, x, q) {
    t.cancelPendingCommit = null;
    do
      If();
    while (Qt !== 0);
    if ((Ct & 6) !== 0) throw Error(f(327));
    if (e !== null) {
      if (e === t.current) throw Error(f(177));
      t === Yt && (Tt = Yt = null, bt = 0), ha = e, Tl = t, Ul = l, bs = a, sm = n, L1(
        t,
        e,
        l,
        o,
        _,
        T,
        q
      );
    }
  }
  function L1(t, e, l, n, a, i, o) {
    var _ = e.lanes | e.childLanes;
    if (Ss = _, _ |= ur, _g(
      t,
      l,
      _,
      n,
      a,
      i
    ), Pa = null, (l & 335544064) === l ? (tu = g1(t), n = 10262) : (tu = null, n = 10256), (e.subtreeFlags & n) !== 0 || (e.flags & n) !== 0 ? (t.callbackNode = null, t.callbackPriority = 0, k1(Gi, function() {
      return Ds(), null;
    })) : (t.callbackNode = null, t.callbackPriority = 0), qf = !1, n = (e.flags & 13878) !== 0, (e.subtreeFlags & 13878) !== 0 || n) {
      n = tt.T, tt.T = null, a = rt.p, rt.p = 2, i = Ct, Ct |= 4;
      try {
        B1(t, e, l);
      } finally {
        Ct = i, rt.p = a, tt.T = n;
      }
    }
    Qt = 1, qf ? Ia = _y(
      o,
      t.containerInfo,
      tu,
      zs,
      As,
      Z1,
      Ms,
      Ds,
      Q1
    ) : (zs(), As(), Ms());
  }
  function Q1(t) {
    if (Qt !== 0) {
      var e = Tl.onRecoverableError;
      e(t, { componentStack: null });
    }
  }
  function Z1() {
    Qt === 3 && (Qt = 0, nm(ha, Tl), Qt = 4);
  }
  function zs() {
    if (Qt === 1) {
      Qt = 0;
      var t = Tl, e = ha, l = Ul, n = (e.flags & 13878) !== 0;
      if ((e.subtreeFlags & 13878) !== 0 || n) {
        n = tt.T, tt.T = null;
        var a = rt.p;
        rt.p = 2;
        var i = Ct;
        Ct |= 4;
        try {
          li = jf = !1, em(e, t, l), l = js;
          var o = Ih(t.containerInfo), _ = l.focusedElem, T = l.selectionRange;
          if (o !== _ && _ && _.ownerDocument && Wh(
            _.ownerDocument.documentElement,
            _
          )) {
            if (T !== null && tr(_)) {
              var M = T.start, x = T.end;
              if (x === void 0 && (x = M), "selectionStart" in _)
                _.selectionStart = M, _.selectionEnd = Math.min(
                  x,
                  _.value.length
                );
              else {
                var q = _.ownerDocument || document, z = q && q.defaultView || window;
                if (z.getSelection) {
                  var C = z.getSelection(), J = _.textContent.length, P = Math.min(T.start, J), mt = T.end === void 0 ? P : Math.min(T.end, J);
                  !C.extend && P > mt && (o = mt, mt = P, P = o);
                  var A = $h(
                    _,
                    P
                  ), O = $h(
                    _,
                    mt
                  );
                  if (A && O && (C.rangeCount !== 1 || C.anchorNode !== A.node || C.anchorOffset !== A.offset || C.focusNode !== O.node || C.focusOffset !== O.offset)) {
                    var N = q.createRange();
                    N.setStart(A.node, A.offset), C.removeAllRanges(), P > mt ? (C.addRange(N), C.extend(O.node, O.offset)) : (N.setEnd(O.node, O.offset), C.addRange(N));
                  }
                }
              }
            }
            for (q = [], C = _; C = C.parentNode; )
              C.nodeType === 1 && q.push({
                element: C,
                left: C.scrollLeft,
                top: C.scrollTop
              });
            for (typeof _.focus == "function" && _.focus(), _ = 0; _ < q.length; _++) {
              var Y = q[_];
              Y.element.scrollLeft = Y.left, Y.element.scrollTop = Y.top;
            }
          }
          ou = !!Gs, js = Gs = null;
        } finally {
          Ct = i, rt.p = a, tt.T = n;
        }
      }
      t.current = e, Qt = 2;
    }
  }
  function As() {
    if (Qt === 2) {
      Qt = 0;
      var t = Tl, e = ha, l = (e.flags & 8772) !== 0;
      if ((e.subtreeFlags & 8772) !== 0 || l) {
        l = tt.T, tt.T = null;
        var n = rt.p;
        rt.p = 2;
        var a = Ct;
        Ct |= 4;
        try {
          kd(t, e.alternate, e);
        } finally {
          Ct = a, rt.p = n, tt.T = l;
        }
      }
      Qt = 3;
    }
  }
  function Ms() {
    if (Qt === 4 || Qt === 3) {
      Qt = 0;
      var t = Ia;
      Ia = null, ig();
      var e = Tl, l = ha, n = Ul, a = sm, i = (n & 335544064) === n ? 10262 : 10256;
      if ((l.subtreeFlags & i) !== 0 || (l.flags & i) !== 0 ? Qt = 5 : (Qt = 0, ha = Tl = null, bm(e, e.pendingLanes)), i = e.pendingLanes, i === 0 && (Mn = null), Yc(n), l = l.stateNode, je && typeof je.onCommitFiberRoot == "function")
        try {
          je.onCommitFiberRoot(
            zu,
            l,
            void 0,
            (l.current.flags & 128) === 128
          );
        } catch {
        }
      if (a !== null) {
        l = tt.T, i = rt.p, rt.p = 2, tt.T = null;
        try {
          for (var o = e.onRecoverableError, _ = 0; _ < a.length; _++) {
            var T = a[_];
            o(T.value, {
              componentStack: T.stack
            });
          }
        } finally {
          tt.T = l, rt.p = i;
        }
      }
      if (a = Pa, o = tu, tu = null, a !== null && (Pa = null, o === null && (o = []), t !== null))
        for (T = 0; T < a.length; T++)
          l = (0, a[T])(
            o
          ), l !== void 0 && t.finished.finally(l);
      (Ul & 3) !== 0 && If(), Hl(e), i = e.pendingLanes, (n & 261930) !== 0 && (i & 42) !== 0 ? e === Ff ? ii++ : (ii = 0, Ff = e) : (ii = 0, Ff = null), fi(0);
    }
  }
  function bm(t, e) {
    (t.pooledCacheLanes &= e) === 0 && (e = t.pooledCache, e != null && (t.pooledCache = null, Xu(e)));
  }
  function If() {
    return Ia !== null && (Ia.skipTransition(), Ia = null), zs(), As(), Ms(), Ds();
  }
  function Ds() {
    if (Qt !== 5) return !1;
    var t = Tl, e = Ss;
    Ss = 0;
    var l = Yc(Ul), n = tt.T, a = rt.p;
    try {
      rt.p = 32 > l ? 32 : l, tt.T = null, l = bs, bs = null;
      var i = Tl, o = Ul;
      if (Qt = 0, ha = Tl = null, Ul = 0, (Ct & 6) !== 0) throw Error(f(331));
      var _ = Ct;
      if (Ct |= 4, fm(i.current), am(
        i,
        i.current,
        o,
        l
      ), Ct = _, fi(0, !1), je && typeof je.onPostCommitFiberRoot == "function")
        try {
          je.onPostCommitFiberRoot(zu, i);
        } catch {
        }
      return !0;
    } finally {
      rt.p = a, tt.T = n, bm(t, e);
    }
  }
  function Em(t, e, l) {
    e = ul(l, e), e = Zr(t.stateNode, e, 2), t = pn(t, e, 2), t !== null && (Mu(t, 2), Hl(t));
  }
  function Ut(t, e, l) {
    if (t.tag === 3)
      Em(t, t, l);
    else
      for (; e !== null; ) {
        if (e.tag === 3) {
          Em(
            e,
            t,
            l
          );
          break;
        } else if (e.tag === 1) {
          var n = e.stateNode;
          if (typeof e.type.getDerivedStateFromError == "function" || typeof n.componentDidCatch == "function" && (Mn === null || !Mn.has(n))) {
            t = ul(l, t), l = pd(2), n = pn(e, l, 2), n !== null && (Td(
              l,
              n,
              e,
              t
            ), Mu(n, 2), Hl(n));
            break;
          }
        }
        e = e.return;
      }
  }
  function Ns(t, e, l) {
    var n = t.pingCache;
    if (n === null) {
      n = t.pingCache = new w1();
      var a = /* @__PURE__ */ new Set();
      n.set(e, a);
    } else
      a = n.get(e), a === void 0 && (a = /* @__PURE__ */ new Set(), n.set(e, a));
    a.has(l) || (ps = !0, a.add(l), t = K1.bind(null, t, e, l), e.then(t, t));
  }
  function K1(t, e, l) {
    var n = t.pingCache;
    n !== null && n.delete(e), t.pingedLanes |= t.suspendedLanes & l, t.warmLanes &= ~l, Yt === t && (bt & l) === l && ((kt === 4 || kt === 3 && (bt & 62914560) === bt && 300 > Ge() - Zf) && (Ct & 2) === 0 ? lu(t, 0) : Qf |= l, Wa === bt && (Wa = 0)), Hl(t);
  }
  function Om(t, e) {
    e === 0 && (e = rh()), t = $n(t, e), t !== null && (Mu(t, e), Hl(t));
  }
  function J1(t) {
    var e = t.memoizedState, l = 0;
    e !== null && (l = e.retryLane), Om(t, l);
  }
  function F1(t, e) {
    var l = 0;
    switch (t.tag) {
      case 31:
      case 13:
        var n = t.stateNode, a = t.memoizedState;
        a !== null && (l = a.retryLane);
        break;
      case 19:
        n = t.stateNode;
        break;
      case 22:
        n = t.stateNode._retryCache;
        break;
      default:
        throw Error(f(314));
    }
    n !== null && n.delete(e), Om(t, l);
  }
  function k1(t, e) {
    return xc(t, e);
  }
  var au = null, uu = null, Cs = !1, Pf = !1, Rs = !1, Nn = 0;
  function Hl(t) {
    t !== uu && t.next === null && (uu === null ? au = uu = t : uu = uu.next = t), Pf = !0, Cs || (Cs = !0, W1());
  }
  function fi(t, e) {
    if (!Rs && Pf) {
      Rs = !0;
      do
        for (var l = !1, n = au; n !== null; ) {
          if (t !== 0) {
            var a = n.pendingLanes;
            if (a === 0) var i = 0;
            else {
              var o = n.suspendedLanes, _ = n.pingedLanes;
              i = (1 << 31 - Xe(42 | t) + 1) - 1, i &= a & ~(o & ~_), i = i & 201326741 ? i & 201326741 | 1 : i ? i | 2 : 0;
            }
            i !== 0 && (l = !0, Dm(n, i));
          } else
            i = bt, i = Li(
              n,
              n === Yt ? i : 0,
              n.cancelPendingCommit !== null || n.timeoutHandle !== -1
            ), (i & 3) === 0 || Au(n, i) || (l = !0, Dm(n, i));
          n = n.next;
        }
      while (l);
      Rs = !1;
    }
  }
  function $1() {
    zm();
  }
  function zm() {
    Pf = Cs = !1;
    var t = 0;
    Nn !== 0 && cy() && (t = Nn);
    for (var e = Ge(), l = null, n = au; n !== null; ) {
      var a = n.next, i = Am(n, e);
      i === 0 ? (n.next = null, l === null ? au = a : l.next = a, a === null && (uu = l)) : (l = n, (t !== 0 || (i & 3) !== 0) && (Pf = !0)), n = a;
    }
    Qt !== 0 && Qt !== 5 || fi(t), Nn !== 0 && (Nn = 0);
  }
  function Am(t, e) {
    for (var l = t.suspendedLanes, n = t.pingedLanes, a = t.expirationTimes, i = t.pendingLanes & -62914561; 0 < i; ) {
      var o = 31 - Xe(i), _ = 1 << o, T = a[o];
      T === -1 ? ((_ & l) === 0 || (_ & n) !== 0) && (a[o] = mg(_, e)) : T <= e && (t.expiredLanes |= _), i &= ~_;
    }
    if (e = Yt, l = bt, l = Li(
      t,
      t === e ? l : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), n = t.callbackNode, l === 0 || t === e && (xt === 2 || xt === 9) || t.cancelPendingCommit !== null)
      return n !== null && n !== null && Uc(n), t.callbackNode = null, t.callbackPriority = 0;
    if ((l & 3) === 0 || Au(t, l)) {
      if (e = l & -l, e === t.callbackPriority) return e;
      switch (n !== null && Uc(n), Yc(l)) {
        case 2:
        case 8:
          l = ih;
          break;
        case 32:
          l = Gi;
          break;
        case 268435456:
          l = fh;
          break;
        default:
          l = Gi;
      }
      return n = Mm.bind(null, t), l = xc(l, n), t.callbackPriority = e, t.callbackNode = l, e;
    }
    return n !== null && n !== null && Uc(n), t.callbackPriority = 2, t.callbackNode = null, 2;
  }
  function Mm(t, e) {
    if (Qt !== 0 && Qt !== 5)
      return t.callbackNode = null, t.callbackPriority = 0, null;
    var l = t.callbackNode;
    if (If() && t.callbackNode !== l)
      return null;
    var n = bt;
    return n = Li(
      t,
      t === Yt ? n : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), n === 0 ? null : (hm(t, n, e), Am(t, Ge()), t.callbackNode != null && t.callbackNode === l ? Mm.bind(null, t) : null);
  }
  function Dm(t, e) {
    if (If()) return null;
    hm(t, e, !0);
  }
  function W1() {
    sy(function() {
      (Ct & 6) !== 0 ? xc(
        uh,
        $1
      ) : zm();
    });
  }
  function xs() {
    if (Nn === 0) {
      var t = la;
      t === 0 && (t = ji, ji <<= 1, (ji & 261888) === 0 && (ji = 256)), Nn = t;
    }
    return Nn;
  }
  function Nm(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : Fi(t);
  }
  function I1(t, e, l, n, a) {
    if (e === "submit" && l && l.stateNode === a) {
      var i = Nm(
        (a[Me] || null).action
      ), o = n.submitter;
      o && (e = (e = o[Me] || null) ? Nm(e.formAction) : o.getAttribute("formAction"), e !== null && (i = e, o = null));
      var _ = new Ii(
        "action",
        "action",
        null,
        n,
        a
      );
      t.push({
        event: _,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (n.defaultPrevented) {
                if (Nn !== 0) {
                  var T = new FormData(a, o);
                  jr(
                    l,
                    {
                      pending: !0,
                      data: T,
                      method: a.method,
                      action: i
                    },
                    null,
                    T
                  );
                }
              } else
                typeof i == "function" && (_.preventDefault(), T = new FormData(a, o), jr(
                  l,
                  {
                    pending: !0,
                    data: T,
                    method: a.method,
                    action: i
                  },
                  i,
                  T
                ));
            },
            currentTarget: a
          }
        ]
      });
    }
  }
  for (var Us = 0; Us < ar.length; Us++) {
    var Hs = ar[Us], P1 = Hs.toLowerCase(), ty = Hs[0].toUpperCase() + Hs.slice(1);
    vl(
      P1,
      "on" + ty
    );
  }
  vl(e0, "onAnimationEnd"), vl(l0, "onAnimationIteration"), vl(n0, "onAnimationStart"), vl("dblclick", "onDoubleClick"), vl("focusin", "onFocus"), vl("focusout", "onBlur"), vl(r1, "onTransitionRun"), vl(s1, "onTransitionStart"), vl(o1, "onTransitionCancel"), vl(a0, "onTransitionEnd"), Ma("onMouseEnter", ["mouseout", "mouseover"]), Ma("onMouseLeave", ["mouseout", "mouseover"]), Ma("onPointerEnter", ["pointerout", "pointerover"]), Ma("onPointerLeave", ["pointerout", "pointerover"]), Jn(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), Jn(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), Jn("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), Jn(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), Jn(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), Jn(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var ci = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), ey = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ci)
  );
  function Cm(t, e) {
    e = (e & 4) !== 0;
    for (var l = 0; l < t.length; l++) {
      var n = t[l], a = n.event;
      n = n.listeners;
      t: {
        var i = void 0;
        if (e)
          for (var o = n.length - 1; 0 <= o; o--) {
            var _ = n[o], T = _.instance, M = _.currentTarget;
            if (_ = _.listener, T !== i && a.isPropagationStopped())
              break t;
            i = _, a.currentTarget = M;
            try {
              i(a);
            } catch (x) {
              ef(x);
            }
            a.currentTarget = null, i = T;
          }
        else
          for (o = 0; o < n.length; o++) {
            if (_ = n[o], T = _.instance, M = _.currentTarget, _ = _.listener, T !== i && a.isPropagationStopped())
              break t;
            i = _, a.currentTarget = M;
            try {
              i(a);
            } catch (x) {
              ef(x);
            }
            a.currentTarget = null, i = T;
          }
      }
    }
  }
  function St(t, e) {
    var l = e[_h];
    l === void 0 && (l = e[_h] = /* @__PURE__ */ new Set());
    var n = t + "__bubble";
    l.has(n) || (Rm(e, t, 2, !1), l.add(n));
  }
  function Bs(t, e, l) {
    var n = 0;
    e && (n |= 4), Rm(
      l,
      t,
      n,
      e
    );
  }
  var tc = "_reactListening" + Math.random().toString(36).slice(2);
  function Ys(t) {
    if (!t[tc]) {
      t[tc] = !0, yh.forEach(function(l) {
        l !== "selectionchange" && (ey.has(l) || Bs(l, !1, t), Bs(l, !0, t));
      });
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[tc] || (e[tc] = !0, Bs("selectionchange", !1, e));
    }
  }
  function Rm(t, e, l, n) {
    switch (T_(e)) {
      case 2:
        var a = Jy;
        break;
      case 8:
        a = Fy;
        break;
      default:
        a = lo;
    }
    l = a.bind(
      null,
      e,
      l,
      t
    ), a = void 0, !Qc || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (a = !0), n ? a !== void 0 ? t.addEventListener(e, l, {
      capture: !0,
      passive: a
    }) : t.addEventListener(e, l, !0) : a !== void 0 ? t.addEventListener(e, l, {
      passive: a
    }) : t.addEventListener(e, l, !1);
  }
  function qs(t, e, l, n, a) {
    var i = n;
    if ((e & 1) === 0 && (e & 2) === 0 && n !== null)
      t: for (; ; ) {
        if (n === null) return;
        var o = n.tag;
        if (o === 3 || o === 4) {
          var _ = n.stateNode.containerInfo;
          if (_ === a) break;
          if (o === 4)
            for (o = n.return; o !== null; ) {
              var T = o.tag;
              if ((T === 3 || T === 4) && o.stateNode.containerInfo === a)
                return;
              o = o.return;
            }
          for (; _ !== null; ) {
            if (o = Kn(_), o === null) return;
            if (T = o.tag, T === 5 || T === 6 || T === 26 || T === 27) {
              n = i = o;
              continue t;
            }
            _ = _.parentNode;
          }
        }
        n = n.return;
      }
    Rh(function() {
      var M = i, x = Vc(l), q = [];
      t: {
        var z = u0.get(t);
        if (z !== void 0) {
          var C = Ii, J = t;
          switch (t) {
            case "keypress":
              if ($i(l) === 0) break t;
            case "keydown":
            case "keyup":
              C = Gg;
              break;
            case "focusin":
              J = "focus", C = Fc;
              break;
            case "focusout":
              J = "blur", C = Fc;
              break;
            case "beforeblur":
            case "afterblur":
              C = Fc;
              break;
            case "click":
              if (l.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              C = Hh;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              C = Mg;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              C = Qg;
              break;
            case e0:
            case l0:
            case n0:
              C = Cg;
              break;
            case a0:
              C = Kg;
              break;
            case "scroll":
            case "scrollend":
              C = zg;
              break;
            case "wheel":
              C = Fg;
              break;
            case "copy":
            case "cut":
            case "paste":
              C = xg;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              C = Yh;
              break;
            case "submit":
              C = Vg;
              break;
            case "toggle":
            case "beforetoggle":
              C = $g;
          }
          var P = (e & 4) !== 0, mt = !P && (t === "scroll" || t === "scrollend"), A = P ? z !== null ? z + "Capture" : null : z;
          P = [];
          for (var O = M, N; O !== null; ) {
            var Y = O;
            if (N = Y.stateNode, Y = Y.tag, Y !== 5 && Y !== 26 && Y !== 27 || N === null || A === null || (Y = Cu(O, A), Y != null && P.push(
              ri(O, Y, N)
            )), mt) break;
            O = O.return;
          }
          0 < P.length && (z = new C(
            z,
            J,
            null,
            l,
            x
          ), q.push({ event: z, listeners: P }));
        }
      }
      if ((e & 7) === 0) {
        t: {
          if (C = t === "mouseover" || t === "pointerover", z = t === "mouseout" || t === "pointerout", C && l !== Xc && (J = l.relatedTarget || l.fromElement) && (Kn(J) || J[Oa]))
            break t;
          (z || C) && (J = x.window === x ? x : (C = x.ownerDocument) ? C.defaultView || C.parentWindow : window, z ? (C = l.relatedTarget || l.toElement, z = M, C = C ? Kn(C) : null, C !== null && (mt = s(C), P = C.tag, C !== mt || P !== 5 && P !== 27 && P !== 6) && (C = null)) : (z = null, C = M), z !== C && (P = Hh, Y = "onMouseLeave", A = "onMouseEnter", O = "mouse", (t === "pointerout" || t === "pointerover") && (P = Yh, Y = "onPointerLeave", A = "onPointerEnter", O = "pointer"), mt = z == null ? J : Nu(z), N = C == null ? J : Nu(C), J = new P(
            Y,
            O + "leave",
            z,
            l,
            x
          ), J.target = mt, J.relatedTarget = N, Y = null, Kn(x) === M && (P = new P(
            A,
            O + "enter",
            C,
            l,
            x
          ), P.target = N, P.relatedTarget = mt, Y = P), mt = Y, P = z && C ? F(
            z,
            C,
            ly
          ) : null, z !== null && xm(
            q,
            J,
            z,
            P,
            !1
          ), C !== null && mt !== null && xm(
            q,
            mt,
            C,
            P,
            !0
          )));
        }
        t: {
          if (z = M ? Nu(M) : window, C = z.nodeName && z.nodeName.toLowerCase(), C === "select" || C === "input" && z.type === "file")
            var I = Qh;
          else if (Vh(z))
            if (Zh)
              I = i1;
            else {
              I = a1;
              var Et = n1;
            }
          else
            C = z.nodeName, !C || C.toLowerCase() !== "input" || z.type !== "checkbox" && z.type !== "radio" ? M && jc(M.elementType) && (I = Qh) : I = u1;
          if (I && (I = I(t, M))) {
            Lh(
              q,
              I,
              l,
              x
            );
            break t;
          }
          Et && Et(t, z, M);
        }
        switch (Et = M ? Nu(M) : window, t) {
          case "focusin":
            (Vh(Et) || Et.contentEditable === "true") && (Ua = Et, er = M, wu = null);
            break;
          case "focusout":
            wu = er = Ua = null;
            break;
          case "mousedown":
            lr = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            lr = !1, Ph(q, l, x);
            break;
          case "selectionchange":
            if (c1) break;
          case "keydown":
          case "keyup":
            Ph(q, l, x);
        }
        var at;
        if ($c)
          t: {
            switch (t) {
              case "compositionstart":
                var ct = "onCompositionStart";
                break t;
              case "compositionend":
                ct = "onCompositionEnd";
                break t;
              case "compositionupdate":
                ct = "onCompositionUpdate";
                break t;
            }
            ct = void 0;
          }
        else
          xa ? jh(t, l) && (ct = "onCompositionEnd") : t === "keydown" && l.keyCode === 229 && (ct = "onCompositionStart");
        ct && (qh && l.locale !== "ko" && (xa || ct !== "onCompositionStart" ? ct === "onCompositionEnd" && xa && (at = xh()) : (sn = x, Zc = "value" in sn ? sn.value : sn.textContent, xa = !0)), Et = ec(M, ct), 0 < Et.length && (ct = new Bh(
          ct,
          t,
          null,
          l,
          x
        ), q.push({ event: ct, listeners: Et }), at ? ct.data = at : (at = Xh(l), at !== null && (ct.data = at)))), (at = Ig ? Pg(t, l) : t1(t, l)) && (ct = ec(M, "onBeforeInput"), 0 < ct.length && (Et = new Bh(
          "onBeforeInput",
          "beforeinput",
          null,
          l,
          x
        ), q.push({
          event: Et,
          listeners: ct
        }), Et.data = at)), I1(
          q,
          t,
          M,
          l,
          x
        );
      }
      Cm(q, e);
    });
  }
  function ri(t, e, l) {
    return {
      instance: t,
      listener: e,
      currentTarget: l
    };
  }
  function ec(t, e) {
    for (var l = e + "Capture", n = []; t !== null; ) {
      var a = t, i = a.stateNode;
      if (a = a.tag, a !== 5 && a !== 26 && a !== 27 || i === null || (a = Cu(t, l), a != null && n.unshift(
        ri(t, a, i)
      ), a = Cu(t, e), a != null && n.push(
        ri(t, a, i)
      )), t.tag === 3) return n;
      t = t.return;
    }
    return [];
  }
  function ly(t) {
    if (t === null) return null;
    do
      t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function xm(t, e, l, n, a) {
    for (var i = e._reactName, o = []; l !== null && l !== n; ) {
      var _ = l, T = _.alternate, M = _.stateNode;
      if (_ = _.tag, T !== null && T === n) break;
      _ !== 5 && _ !== 26 && _ !== 27 || M === null || (T = M, a ? (M = Cu(l, i), M != null && o.unshift(
        ri(l, M, T)
      )) : a || (M = Cu(l, i), M != null && o.push(
        ri(l, M, T)
      ))), l = l.return;
    }
    o.length !== 0 && t.push({ event: e, listeners: o });
  }
  var ny = /\r\n?/g, ay = /\u0000|\uFFFD/g;
  function Um(t) {
    return (typeof t == "string" ? t : "" + t).replace(ny, `
`).replace(ay, "");
  }
  function Hm(t, e) {
    return e = Um(e), Um(t) === e;
  }
  function Ht(t, e, l, n, a, i) {
    switch (l) {
      case "children":
        if (typeof n == "string")
          e === "body" || e === "textarea" && n === "" || Na(t, n);
        else if (typeof n == "number" || typeof n == "bigint")
          e !== "body" && Na(t, "" + n);
        else return;
        break;
      case "className":
        Ji(t, "class", n);
        break;
      case "tabIndex":
        Ji(t, "tabindex", n);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Ji(t, l, n);
        break;
      case "style":
        Nh(t, n, i);
        return;
      case "data":
        if (e !== "object") {
          Ji(t, "data", n);
          break;
        }
      case "src":
      case "href":
        if (n === "" && (e !== "a" || l !== "href")) {
          t.removeAttribute(l);
          break;
        }
        if (n == null || typeof n == "function" || typeof n == "symbol" || typeof n == "boolean") {
          t.removeAttribute(l);
          break;
        }
        n = Fi(n), t.setAttribute(l, n);
        break;
      case "action":
      case "formAction":
        if (typeof n == "function") {
          t.setAttribute(
            l,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof i == "function" && (l === "formAction" ? (e !== "input" && Ht(t, e, "name", a.name, a, null), Ht(
            t,
            e,
            "formEncType",
            a.formEncType,
            a,
            null
          ), Ht(
            t,
            e,
            "formMethod",
            a.formMethod,
            a,
            null
          ), Ht(
            t,
            e,
            "formTarget",
            a.formTarget,
            a,
            null
          )) : (Ht(t, e, "encType", a.encType, a, null), Ht(t, e, "method", a.method, a, null), Ht(t, e, "target", a.target, a, null)));
        if (n == null || typeof n == "symbol" || typeof n == "boolean") {
          t.removeAttribute(l);
          break;
        }
        n = Fi(n), t.setAttribute(l, n);
        break;
      case "onClick":
        n != null && (t.onclick = Ol);
        return;
      case "onScroll":
        n != null && St("scroll", t);
        return;
      case "onScrollEnd":
        n != null && St("scrollend", t);
        return;
      case "dangerouslySetInnerHTML":
        if (n != null) {
          if (typeof n != "object" || !("__html" in n))
            throw Error(f(61));
          if (l = n.__html, l != null) {
            if (a.children != null) throw Error(f(60));
            i?.__html !== l && (t.innerHTML = l);
          }
        }
        break;
      case "multiple":
        t.multiple = n && typeof n != "function" && typeof n != "symbol";
        break;
      case "muted":
        t.muted = n && typeof n != "function" && typeof n != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (n == null || typeof n == "function" || typeof n == "boolean" || typeof n == "symbol") {
          t.removeAttribute("xlink:href");
          break;
        }
        l = Fi(n), t.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          l
        );
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        n != null && typeof n != "function" && typeof n != "symbol" ? t.setAttribute(l, n) : t.removeAttribute(l);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "credentialless":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        n && typeof n != "function" && typeof n != "symbol" ? t.setAttribute(l, "") : t.removeAttribute(l);
        break;
      case "capture":
      case "download":
        n === !0 ? t.setAttribute(l, "") : n !== !1 && n != null && typeof n != "function" && typeof n != "symbol" ? t.setAttribute(l, n) : t.removeAttribute(l);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        n != null && typeof n != "function" && typeof n != "symbol" && !isNaN(n) && 1 <= n ? t.setAttribute(l, n) : t.removeAttribute(l);
        break;
      case "rowSpan":
      case "start":
        n == null || typeof n == "function" || typeof n == "symbol" || isNaN(n) ? t.removeAttribute(l) : t.setAttribute(l, n);
        break;
      case "popover":
        St("beforetoggle", t), St("toggle", t), Ki(t, "popover", n);
        break;
      case "xlinkActuate":
        Xl(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          n
        );
        break;
      case "xlinkArcrole":
        Xl(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          n
        );
        break;
      case "xlinkRole":
        Xl(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          n
        );
        break;
      case "xlinkShow":
        Xl(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          n
        );
        break;
      case "xlinkTitle":
        Xl(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          n
        );
        break;
      case "xlinkType":
        Xl(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          n
        );
        break;
      case "xmlBase":
        Xl(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          n
        );
        break;
      case "xmlLang":
        Xl(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          n
        );
        break;
      case "xmlSpace":
        Xl(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          n
        );
        break;
      case "is":
        Ki(t, "is", n);
        break;
      case "innerText":
      case "textContent":
        return;
      default:
        if (!(2 < l.length) || l[0] !== "o" && l[0] !== "O" || l[1] !== "n" && l[1] !== "N")
          l = Eg.get(l) || l, Ki(t, l, n);
        else return;
    }
    Nt = !0;
  }
  function ws(t, e, l, n, a, i) {
    switch (l) {
      case "style":
        Nh(t, n, i);
        return;
      case "dangerouslySetInnerHTML":
        if (n != null) {
          if (typeof n != "object" || !("__html" in n))
            throw Error(f(61));
          if (l = n.__html, l != null) {
            if (a.children != null) throw Error(f(60));
            i?.__html !== l && (t.innerHTML = l);
          }
        }
        break;
      case "children":
        if (typeof n == "string") Na(t, n);
        else if (typeof n == "number" || typeof n == "bigint")
          Na(t, "" + n);
        else return;
        break;
      case "onScroll":
        n != null && St("scroll", t);
        return;
      case "onScrollEnd":
        n != null && St("scrollend", t);
        return;
      case "onClick":
        n != null && (t.onclick = Ol);
        return;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        return;
      case "innerText":
      case "textContent":
        return;
      default:
        if (!ph.hasOwnProperty(l))
          t: {
            if (l[0] === "o" && l[1] === "n" && (a = l.endsWith("Capture"), i = l.slice(2, a ? l.length - 7 : void 0), e = t[Me] || null, e = e != null ? e[l] : null, typeof e == "function" && t.removeEventListener(i, e, a), typeof n == "function")) {
              typeof e != "function" && e !== null && (l in t ? t[l] = null : t.hasAttribute(l) && t.removeAttribute(l)), t.addEventListener(i, n, a);
              break t;
            }
            Nt = !0, l in t ? t[l] = n : n === !0 ? t.setAttribute(l, "") : Ki(t, l, n);
          }
        return;
    }
    Nt = !0;
  }
  function ge(t, e, l) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        St("error", t), St("load", t);
        var n = !1, a = !1, i;
        for (i in l)
          if (l.hasOwnProperty(i)) {
            var o = l[i];
            if (o != null)
              switch (i) {
                case "src":
                  n = !0;
                  break;
                case "srcSet":
                  a = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(f(137, e));
                default:
                  Ht(t, e, i, o, l, null);
              }
          }
        a && Ht(t, e, "srcSet", l.srcSet, l, null), n && Ht(t, e, "src", l.src, l, null);
        return;
      case "input":
        St("invalid", t);
        var _ = i = o = a = null, T = null, M = null;
        for (n in l)
          if (l.hasOwnProperty(n)) {
            var x = l[n];
            if (x != null)
              switch (n) {
                case "name":
                  a = x;
                  break;
                case "type":
                  o = x;
                  break;
                case "checked":
                  T = x;
                  break;
                case "defaultChecked":
                  M = x;
                  break;
                case "value":
                  i = x;
                  break;
                case "defaultValue":
                  _ = x;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (x != null)
                    throw Error(f(137, e));
                  break;
                default:
                  Ht(t, e, n, x, l, null);
              }
          }
        zh(
          t,
          i,
          _,
          T,
          M,
          o,
          a,
          !1
        );
        return;
      case "select":
        St("invalid", t), n = o = i = null;
        for (a in l)
          if (l.hasOwnProperty(a) && (_ = l[a], _ != null))
            switch (a) {
              case "value":
                i = _;
                break;
              case "defaultValue":
                o = _;
                break;
              case "multiple":
                n = _;
              default:
                Ht(t, e, a, _, l, null);
            }
        e = i, l = o, t.multiple = !!n, e != null ? Da(t, !!n, e, !1) : l != null && Da(t, !!n, l, !0);
        return;
      case "textarea":
        St("invalid", t), i = a = n = null;
        for (o in l)
          if (l.hasOwnProperty(o) && (_ = l[o], _ != null))
            switch (o) {
              case "value":
                n = _;
                break;
              case "defaultValue":
                a = _;
                break;
              case "children":
                i = _;
                break;
              case "dangerouslySetInnerHTML":
                if (_ != null) throw Error(f(91));
                break;
              default:
                Ht(t, e, o, _, l, null);
            }
        Mh(t, n, a, i);
        return;
      case "option":
        for (T in l)
          l.hasOwnProperty(T) && (n = l[T], n != null) && (T === "selected" ? t.selected = n && typeof n != "function" && typeof n != "symbol" : Ht(t, e, T, n, l, null));
        return;
      case "dialog":
        St("beforetoggle", t), St("toggle", t), St("cancel", t), St("close", t);
        break;
      case "iframe":
      case "object":
        St("load", t);
        break;
      case "video":
      case "audio":
        for (n = 0; n < ci.length; n++)
          St(ci[n], t);
        break;
      case "image":
        St("error", t), St("load", t);
        break;
      case "details":
        St("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        St("error", t), St("load", t);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (M in l)
          if (l.hasOwnProperty(M) && (n = l[M], n != null))
            switch (M) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(f(137, e));
              default:
                Ht(t, e, M, n, l, null);
            }
        return;
      default:
        if (jc(e)) {
          for (x in l)
            l.hasOwnProperty(x) && (n = l[x], n !== void 0 && ws(
              t,
              e,
              x,
              n,
              l,
              void 0
            ));
          return;
        }
    }
    for (_ in l)
      l.hasOwnProperty(_) && (n = l[_], n != null && Ht(t, e, _, n, l, null));
  }
  var uy = {};
  function iy(t, e, l, n) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var a = null, i = null, o = null, _ = null, T = null, M = null, x = null;
        for (C in l) {
          var q = l[C];
          if (l.hasOwnProperty(C) && q != null)
            switch (C) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                T = q;
              default:
                n.hasOwnProperty(C) || Ht(t, e, C, null, n, q);
            }
        }
        for (var z in n) {
          var C = n[z];
          if (q = l[z], n.hasOwnProperty(z) && (C != null || q != null))
            switch (z) {
              case "type":
                C !== q && (Nt = !0), i = C;
                break;
              case "name":
                C !== q && (Nt = !0), a = C;
                break;
              case "checked":
                C !== q && (Nt = !0), M = C;
                break;
              case "defaultChecked":
                C !== q && (Nt = !0), x = C;
                break;
              case "value":
                C !== q && (Nt = !0), o = C;
                break;
              case "defaultValue":
                C !== q && (Nt = !0), _ = C;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (C != null)
                  throw Error(f(137, e));
                break;
              default:
                C !== q && Ht(
                  t,
                  e,
                  z,
                  C,
                  n,
                  q
                );
            }
        }
        wc(
          t,
          o,
          _,
          T,
          M,
          x,
          i,
          a
        );
        return;
      case "select":
        C = o = _ = z = null;
        for (i in l)
          if (T = l[i], l.hasOwnProperty(i) && T != null)
            switch (i) {
              case "value":
                break;
              case "multiple":
                C = T;
              default:
                n.hasOwnProperty(i) || Ht(
                  t,
                  e,
                  i,
                  null,
                  n,
                  T
                );
            }
        for (a in n)
          if (i = n[a], T = l[a], n.hasOwnProperty(a) && (i != null || T != null))
            switch (a) {
              case "value":
                i !== T && (Nt = !0), z = i;
                break;
              case "defaultValue":
                i !== T && (Nt = !0), _ = i;
                break;
              case "multiple":
                i !== T && (Nt = !0), o = i;
              default:
                i !== T && Ht(
                  t,
                  e,
                  a,
                  i,
                  n,
                  T
                );
            }
        e = _, l = o, n = C, z != null ? Da(t, !!l, z, !1) : !!n != !!l && (e != null ? Da(t, !!l, e, !0) : Da(t, !!l, l ? [] : "", !1));
        return;
      case "textarea":
        C = z = null;
        for (_ in l)
          if (a = l[_], l.hasOwnProperty(_) && a != null && !n.hasOwnProperty(_))
            switch (_) {
              case "value":
                break;
              case "children":
                break;
              default:
                Ht(t, e, _, null, n, a);
            }
        for (o in n)
          if (a = n[o], i = l[o], n.hasOwnProperty(o) && (a != null || i != null))
            switch (o) {
              case "value":
                a !== i && (Nt = !0), z = a;
                break;
              case "defaultValue":
                a !== i && (Nt = !0), C = a;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (a != null) throw Error(f(91));
                break;
              default:
                a !== i && Ht(t, e, o, a, n, i);
            }
        Ah(t, z, C);
        return;
      case "option":
        for (var J in l)
          z = l[J], l.hasOwnProperty(J) && z != null && !n.hasOwnProperty(J) && (J === "selected" ? t.selected = !1 : Ht(
            t,
            e,
            J,
            null,
            n,
            z
          ));
        for (T in n)
          z = n[T], C = l[T], n.hasOwnProperty(T) && z !== C && (z != null || C != null) && (T === "selected" ? (z !== C && (Nt = !0), t.selected = z && typeof z != "function" && typeof z != "symbol") : Ht(
            t,
            e,
            T,
            z,
            n,
            C
          ));
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var P in l)
          z = l[P], l.hasOwnProperty(P) && z != null && !n.hasOwnProperty(P) && Ht(t, e, P, null, n, z);
        for (M in n)
          if (z = n[M], C = l[M], n.hasOwnProperty(M) && z !== C && (z != null || C != null))
            switch (M) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (z != null)
                  throw Error(f(137, e));
                break;
              default:
                Ht(
                  t,
                  e,
                  M,
                  z,
                  n,
                  C
                );
            }
        return;
      default:
        if (jc(e)) {
          for (var mt in l)
            z = l[mt], l.hasOwnProperty(mt) && z !== void 0 && !n.hasOwnProperty(mt) && ws(
              t,
              e,
              mt,
              void 0,
              n,
              z
            );
          for (x in n)
            z = n[x], C = l[x], !n.hasOwnProperty(x) || z === C || z === void 0 && C === void 0 || ws(
              t,
              e,
              x,
              z,
              n,
              C
            );
          return;
        }
    }
    for (var A in l)
      z = l[A], l.hasOwnProperty(A) && z != null && !n.hasOwnProperty(A) && Ht(t, e, A, null, n, z);
    for (q in n)
      z = n[q], C = l[q], !n.hasOwnProperty(q) || z === C || z == null && C == null || Ht(t, e, q, z, n, C);
  }
  function Bm(t) {
    switch (t) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function fy() {
    if (typeof performance.getEntriesByType == "function") {
      for (var t = 0, e = 0, l = performance.getEntriesByType("resource"), n = 0; n < l.length; n++) {
        var a = l[n], i = a.transferSize, o = a.initiatorType, _ = a.duration;
        if (i && _ && Bm(o)) {
          for (o = 0, _ = a.responseEnd, n += 1; n < l.length; n++) {
            var T = l[n], M = T.startTime;
            if (M > _) break;
            var x = T.transferSize, q = T.initiatorType;
            x && Bm(q) && (T = T.responseEnd, o += x * (T < _ ? 1 : (_ - M) / (T - M)));
          }
          if (--n, e += 8 * (i + o) / (a.duration / 1e3), t++, 10 < t) break;
        }
      }
      if (0 < t) return e / t / 1e6;
    }
    return navigator.connection && (t = navigator.connection.downlink, typeof t == "number") ? t : 5;
  }
  var Gs = null, js = null;
  function si(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function Ym(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function qm(t, e) {
    if (t === 0)
      switch (e) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return t === 1 && e === "foreignObject" ? 0 : t;
  }
  function wm(t, e, l, n) {
    return l = si(
      l
    ).createElement(t), l[he] = n, l[Me] = e, ge(l, t, e), ue(l), l;
  }
  function Xs(t, e) {
    return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.children == "bigint" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null;
  }
  var Vs = null;
  function cy() {
    var t = window.event;
    return t && t.type === "popstate" ? t === Vs ? !1 : (Vs = t, !0) : (Vs = null, !1);
  }
  var Ls = typeof setTimeout == "function" ? setTimeout : void 0, ry = typeof clearTimeout == "function" ? clearTimeout : void 0, Gm = typeof Promise == "function" ? Promise : void 0, jm = typeof requestAnimationFrame == "function" ? requestAnimationFrame : Ls, sy = typeof queueMicrotask == "function" ? queueMicrotask : typeof Gm < "u" ? function(t) {
    return Gm.resolve(null).then(t).catch(oy);
  } : Ls;
  function oy(t) {
    setTimeout(function() {
      throw t;
    });
  }
  function Cn(t) {
    return t === "head";
  }
  function Xm(t, e) {
    var l = e, n = 0;
    do {
      var a = l.nextSibling;
      if (t.removeChild(l), a && a.nodeType === 8)
        if (l = a.data, l === "/$" || l === "/&") {
          if (n === 0) {
            t.removeChild(a), hu(e);
            return;
          }
          n--;
        } else if (l === "$" || l === "$?" || l === "$~" || l === "$!" || l === "&")
          n++;
        else if (l === "html")
          Ws(
            t.ownerDocument.documentElement
          );
        else if (l === "head") {
          l = t.ownerDocument.head, Ws(l);
          for (var i = l.firstChild; i; ) {
            var o = i.nextSibling, _ = i.nodeName;
            i[Du] || _ === "SCRIPT" || _ === "STYLE" || _ === "LINK" && i.rel.toLowerCase() === "stylesheet" || l.removeChild(i), i = o;
          }
        } else
          l === "body" && Ws(t.ownerDocument.body);
      l = a;
    } while (l);
    hu(e);
  }
  function Vm(t, e) {
    var l = t;
    t = 0;
    do {
      var n = l.nextSibling;
      if (l.nodeType === 1 ? e ? (l._stashedDisplay = l.style.display, l.style.display = "none") : (l.style.display = l._stashedDisplay || "", l.getAttribute("style") === "" && l.removeAttribute("style")) : l.nodeType === 3 && (e ? (l._stashedText = l.nodeValue, l.nodeValue = "") : l.nodeValue = l._stashedText || ""), n && n.nodeType === 8)
        if (l = n.data, l === "/$") {
          if (t === 0) break;
          t--;
        } else
          l !== "$" && l !== "$?" && l !== "$~" && l !== "$!" || t++;
      l = n;
    } while (l);
  }
  function Lm(t, e, l) {
    if (e = CSS.escape(e) !== e ? "r-" + btoa(e).replace(/=/g, "") : e, t.style.viewTransitionName = e, l != null && (t.style.viewTransitionClass = l), l = getComputedStyle(t), l.display === "inline") {
      if (e = t.getClientRects(), e.length === 1) var n = 1;
      else
        for (var a = n = 0; a < e.length; a++) {
          var i = e[a];
          0 < i.width && 0 < i.height && n++;
        }
      n === 1 && (t = t.style, t.display = e.length === 1 ? "inline-block" : "block", t.marginTop = "-" + l.paddingTop, t.marginBottom = "-" + l.paddingBottom);
    }
  }
  function Qm(t, e) {
    t = t.style, e = e.style;
    var l = e != null ? e.hasOwnProperty("viewTransitionName") ? e.viewTransitionName : e.hasOwnProperty("view-transition-name") ? e["view-transition-name"] : null : null;
    t.viewTransitionName = l == null || typeof l == "boolean" ? "" : ("" + l).trim(), l = e != null ? e.hasOwnProperty("viewTransitionClass") ? e.viewTransitionClass : e.hasOwnProperty("view-transition-class") ? e["view-transition-class"] : null : null, t.viewTransitionClass = l == null || typeof l == "boolean" ? "" : ("" + l).trim(), t.display === "inline-block" && (e == null ? t.display = t.margin = "" : (l = e.display, t.display = l == null || typeof l == "boolean" ? "" : l, l = e.margin, l != null ? t.margin = l : (l = e.hasOwnProperty("marginTop") ? e.marginTop : e["margin-top"], t.marginTop = l == null || typeof l == "boolean" ? "" : l, e = e.hasOwnProperty("marginBottom") ? e.marginBottom : e["margin-bottom"], t.marginBottom = e == null || typeof e == "boolean" ? "" : e)));
  }
  function hy(t, e, l) {
    return l = l.ownerDocument.defaultView, {
      rect: t,
      abs: e.position === "absolute" || e.position === "fixed",
      clip: e.clipPath !== "none" || e.overflow !== "visible" || e.filter !== "none" || e.mask !== "none" || e.mask !== "none" || e.borderRadius !== "0px",
      view: 0 <= t.bottom && 0 <= t.right && t.top <= l.innerHeight && t.left <= l.innerWidth
    };
  }
  function Qs(t) {
    var e = t.getBoundingClientRect(), l = getComputedStyle(t);
    return hy(e, l, t);
  }
  function dy(t) {
    return t.documentElement.clientHeight;
  }
  function my(t) {
    this.addEventListener("load", t), this.addEventListener("error", t);
  }
  function _y(t, e, l, n, a, i, o, _, T) {
    var M = e.nodeType === 9 ? e : e.ownerDocument;
    try {
      var x = M.startViewTransition({
        update: function() {
          var z = M.defaultView, C = z.navigation && z.navigation.transition, J = M.fonts.status;
          n();
          var P = [];
          if (J === "loaded" && (dy(M), M.fonts.status === "loading" && P.push(M.fonts.ready)), J = P.length, t !== null)
            for (var mt = t.suspenseyImages, A = 0, O = 0; O < mt.length; O++) {
              var N = mt[O];
              if (!N.complete) {
                var Y = N.getBoundingClientRect();
                if (0 < Y.bottom && 0 < Y.right && Y.top < z.innerHeight && Y.left < z.innerWidth) {
                  if (A += o_(N), A > ac) {
                    P.length = J;
                    break;
                  }
                  N = new Promise(
                    my.bind(N)
                  ), P.push(N);
                }
              }
            }
          if (0 < P.length)
            return z = Promise.race([
              Promise.all(P),
              new Promise(function(I) {
                return setTimeout(I, 500);
              })
            ]).then(a, a), (C ? Promise.allSettled([C.finished, z]) : z).then(i, i);
          if (a(), C)
            return C.finished.then(
              i,
              i
            );
          i();
        },
        types: l
      });
      M.__reactViewTransition = x;
      var q = [];
      return x.ready.then(
        function() {
          for (var z = M.documentElement.getAnimations({
            subtree: !0
          }), C = 0; C < z.length; C++) {
            var J = z[C], P = J.effect, mt = P.pseudoElement;
            if (mt != null && mt.startsWith("::view-transition")) {
              q.push(J), J = P.getKeyframes();
              for (var A = mt = void 0, O = !0, N = 0; N < J.length; N++) {
                var Y = J[N], I = Y.width;
                if (mt === void 0) mt = I;
                else if (mt !== I) {
                  O = !1;
                  break;
                }
                if (I = Y.height, A === void 0) A = I;
                else if (A !== I) {
                  O = !1;
                  break;
                }
                delete Y.width, delete Y.height, Y.transform === "none" && delete Y.transform;
              }
              O && mt !== void 0 && A !== void 0 && (P.setKeyframes(J), O = getComputedStyle(
                P.target,
                P.pseudoElement
              ), O.width !== mt || O.height !== A) && (O = J[0], O.width = mt, O.height = A, O = J[J.length - 1], O.width = mt, O.height = A, P.setKeyframes(J));
            }
          }
          o();
        },
        function(z) {
          M.__reactViewTransition === x && (M.__reactViewTransition = null);
          try {
            typeof z == "object" && z !== null && z.name === "InvalidStateError" && (z.message === "View transition was skipped because document visibility state is hidden." || z.message === "Skipping view transition because document visibility state has become hidden." || z.message === "Skipping view transition because viewport size changed." || z.message === "Transition was aborted because of invalid state") && (z = null), z !== null && T(z);
          } finally {
            n(), a(), o();
          }
        }
      ), x.finished.finally(function() {
        for (var z = 0; z < q.length; z++)
          q[z].cancel();
        M.__reactViewTransition === x && (M.__reactViewTransition = null), _();
      }), x;
    } catch {
      return n(), a(), o(), null;
    }
  }
  function da(t, e) {
    this._scope = document.documentElement, this._selector = "::view-transition-" + t + "(" + e + ")";
  }
  da.prototype.animate = function(t, e) {
    return e = typeof e == "number" ? { duration: e } : B({}, e), e.pseudoElement = this._selector, this._scope.animate(t, e);
  }, da.prototype.getAnimations = function() {
    for (var t = this._scope, e = this._selector, l = t.getAnimations({ subtree: !0 }), n = [], a = 0; a < l.length; a++) {
      var i = l[a].effect;
      i !== null && i.target === t && i.pseudoElement === e && n.push(l[a]);
    }
    return n;
  }, da.prototype.getComputedStyle = function() {
    return getComputedStyle(this._scope, this._selector);
  };
  function Zm(t) {
    return {
      name: t,
      group: new da("group", t),
      imagePair: new da("image-pair", t),
      old: new da("old", t),
      new: new da("new", t)
    };
  }
  function ke(t) {
    this._fragmentFiber = t, this._observers = this._eventListeners = null;
  }
  ke.prototype.addEventListener = function(t, e, l) {
    var n = null, a = null;
    if (!(l != null && typeof l != "boolean" && (n = l.signal || null, n !== null && n.aborted))) {
      this._eventListeners === null && (this._eventListeners = []);
      var i = this._eventListeners;
      if (Jm(i, t, e, l) === -1) {
        var o = this, _ = e;
        l != null && typeof l != "boolean" && l.once === !0 && (_ = function(T) {
          o.removeEventListener(
            t,
            e,
            l
          ), typeof e == "function" ? e.call(this, T) : e.handleEvent(T);
        }), n !== null && (a = o.removeEventListener.bind(
          o,
          t,
          e,
          l
        ), n.addEventListener("abort", a, { once: !0 }), a = n.removeEventListener.bind(n, "abort", a)), n = iu(l), i.push({
          type: t,
          listener: e,
          optionsOrUseCapture: l,
          attachedListener: _,
          cleanup: a
        }), p(
          this._fragmentFiber.child,
          !1,
          vy,
          t,
          _,
          n
        );
      }
      this._eventListeners = i;
    }
  };
  function vy(t, e, l, n) {
    return R(t).addEventListener(
      e,
      l,
      n
    ), !1;
  }
  ke.prototype.removeEventListener = function(t, e, l) {
    var n = this._eventListeners;
    if (n !== null && (e = Jm(
      n,
      t,
      e,
      l
    ), e !== -1)) {
      var a = n[e];
      l = a.attachedListener;
      var i = a.cleanup;
      a = iu(a.optionsOrUseCapture), p(
        this._fragmentFiber.child,
        !1,
        gy,
        t,
        l,
        a
      ), n.splice(e, 1), i !== null && i();
    }
  };
  function gy(t, e, l, n) {
    return R(t).removeEventListener(
      e,
      l,
      n
    ), !1;
  }
  function iu(t) {
    return t != null && typeof t != "boolean" && (t.once === !0 || t.signal instanceof AbortSignal) ? { capture: t.capture, passive: t.passive } : t;
  }
  function Km(t) {
    return t == null ? "c=0" : typeof t == "boolean" ? "c=" + (t ? "1" : "0") : "c=" + (t.capture ? "1" : "0");
  }
  function Jm(t, e, l, n) {
    if (t.length === 0) return -1;
    n = Km(n);
    for (var a = 0; a < t.length; a++) {
      var i = t[a];
      if (i.type === e && i.listener === l && Km(i.optionsOrUseCapture) === n)
        return a;
    }
    return -1;
  }
  ke.prototype.dispatchEvent = function(t) {
    var e = b(
      this._fragmentFiber
    );
    if (e === null) return !0;
    e = R(e);
    var l = this._eventListeners;
    if (l !== null && 0 < l.length || !t.bubbles) {
      var n = e.nodeType === 9 ? e.createComment("") : document.createTextNode("");
      if (l)
        for (var a = 0; a < l.length; a++) {
          var i = l[a];
          n.addEventListener(
            i.type,
            i.attachedListener,
            iu(i.optionsOrUseCapture)
          );
        }
      if (e.appendChild(n), t = n.dispatchEvent(t), l)
        for (a = 0; a < l.length; a++)
          i = l[a], n.removeEventListener(
            i.type,
            i.attachedListener,
            iu(i.optionsOrUseCapture)
          );
      return e.removeChild(n), t;
    }
    return e.dispatchEvent(t);
  }, ke.prototype.focus = function(t) {
    p(
      this._fragmentFiber.child,
      !0,
      Fm,
      t,
      void 0,
      void 0
    );
  };
  function Fm(t, e) {
    return t.tag === 6 ? !1 : (t = R(t), Ny(t, e));
  }
  ke.prototype.focusLast = function(t) {
    var e = [];
    p(
      this._fragmentFiber.child,
      !0,
      Zs,
      e,
      void 0,
      void 0
    );
    for (var l = e.length - 1; 0 <= l && !Fm(e[l], t); l--) ;
  };
  function Zs(t, e) {
    return e.push(t), !1;
  }
  ke.prototype.blur = function() {
    var t = b(
      this._fragmentFiber
    );
    t !== null && (t = R(t), t = si(t).activeElement, t !== null && p(
      this._fragmentFiber.child,
      !1,
      yy,
      t,
      void 0,
      void 0
    ));
  };
  function yy(t, e) {
    return t.tag === 6 ? !1 : (t = R(t), t === e || t.contains(e) ? (e.blur(), !0) : !1);
  }
  ke.prototype.observeUsing = function(t) {
    this._observers === null && (this._observers = /* @__PURE__ */ new Set()), this._observers.add(t), p(
      this._fragmentFiber.child,
      !1,
      py,
      t,
      void 0,
      void 0
    );
  };
  function py(t, e) {
    return t.tag === 6 || (t = R(t), e.observe(t)), !1;
  }
  ke.prototype.unobserveUsing = function(t) {
    var e = this._observers;
    if (e !== null && e.has(t)) {
      e.delete(t), p(
        this._fragmentFiber.child,
        !1,
        Ty,
        t,
        void 0,
        void 0
      );
      for (var l = e = 0; l < Sl.length; l++) {
        var n = Sl[l];
        n.fragmentInstance === this && n.observer === t ? t.unobserve(n.instance) : Sl[e++] = n;
      }
      Sl.length = e;
    }
  };
  function Ty(t, e) {
    return t.tag === 6 || (t = R(t), e.unobserve(t)), !1;
  }
  var Sl = [], Ks = !1;
  function Sy(t, e, l) {
    Sl.push({
      fragmentInstance: t,
      observer: e,
      instance: l
    }), Ks || (Ks = !0, Cy(function() {
      Ks = !1;
      var n = Sl;
      Sl = [];
      for (var a = 0; a < n.length; a++) {
        var i = n[a];
        i.observer.unobserve(i.instance);
      }
    }));
  }
  ke.prototype.getClientRects = function() {
    var t = [];
    return p(
      this._fragmentFiber.child,
      !1,
      by,
      t,
      void 0,
      void 0
    ), t;
  };
  function by(t, e) {
    if (t.tag === 6) {
      t = t.stateNode;
      var l = t.ownerDocument.createRange();
      l.selectNodeContents(t), e.push.apply(e, l.getClientRects());
    } else
      t = R(t), e.push.apply(e, t.getClientRects());
    return !1;
  }
  ke.prototype.getRootNode = function(t) {
    var e = b(
      this._fragmentFiber
    );
    return e === null ? this : R(e).getRootNode(t);
  }, ke.prototype.compareDocumentPosition = function(t) {
    var e = b(
      this._fragmentFiber
    );
    if (e === null) return Node.DOCUMENT_POSITION_DISCONNECTED;
    var l = [];
    p(
      this._fragmentFiber.child,
      !1,
      Zs,
      l,
      void 0,
      void 0
    );
    var n = R(e);
    if (l.length === 0) {
      if (l = n, D(this._fragmentFiber)) {
        t: {
          for (e = this._fragmentFiber.return; e !== null; ) {
            if (e.tag === 4) {
              e = e.stateNode.containerInfo;
              break t;
            }
            if (e.tag === 3 || e.tag === 5 || e.tag === 27)
              break;
            e = e.return;
          }
          e = null;
        }
        e != null && (l = e);
      }
      e = this._fragmentFiber;
      var a = n = l.compareDocumentPosition(t);
      return l === t ? a = Node.DOCUMENT_POSITION_CONTAINS : n & Node.DOCUMENT_POSITION_CONTAINED_BY && (l = U(e)[1], l === null ? a = Node.DOCUMENT_POSITION_PRECEDING : (t = R(l).compareDocumentPosition(
        t
      ), a = t === 0 || t & Node.DOCUMENT_POSITION_FOLLOWING ? Node.DOCUMENT_POSITION_FOLLOWING : Node.DOCUMENT_POSITION_PRECEDING)), a |= Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
    }
    e = R(l[0]), a = R(l[l.length - 1]);
    var i = D(this._fragmentFiber) ? e.parentElement : n;
    if (i == null)
      return Node.DOCUMENT_POSITION_DISCONNECTED;
    n = i.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_CONTAINED_BY, i = i.compareDocumentPosition(a) & Node.DOCUMENT_POSITION_CONTAINED_BY;
    var o = e.compareDocumentPosition(t), _ = a.compareDocumentPosition(t), T = o & Node.DOCUMENT_POSITION_CONTAINED_BY || _ & Node.DOCUMENT_POSITION_CONTAINED_BY;
    return _ = n && i && o & Node.DOCUMENT_POSITION_FOLLOWING && _ & Node.DOCUMENT_POSITION_PRECEDING, e = n && e === t || i && a === t || T || _ ? Node.DOCUMENT_POSITION_CONTAINED_BY : !n && e === t || !i && a === t ? Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC : o, e & Node.DOCUMENT_POSITION_DISCONNECTED || e & Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC || Ey(
      e,
      this._fragmentFiber,
      l[0],
      l[l.length - 1],
      t
    ) ? e : Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
  };
  function Ey(t, e, l, n, a) {
    var i = Kn(a);
    if (t & Node.DOCUMENT_POSITION_CONTAINED_BY) {
      if (l = !!i)
        t: {
          for (; i !== null; ) {
            if (i.tag === 7 && (i === e || i.alternate === e)) {
              l = !0;
              break t;
            }
            i = i.return;
          }
          l = !1;
        }
      return l;
    }
    if (t & Node.DOCUMENT_POSITION_CONTAINS) {
      if (i === null)
        return i = a.ownerDocument, a === i || a === i.documentElement || a === i.body;
      t: {
        for (i = e, e = b(e); i !== null; ) {
          if (!(i.tag !== 5 && i.tag !== 3 && i.tag !== 27 || i !== e && i.alternate !== e)) {
            i = !0;
            break t;
          }
          i = i.return;
        }
        i = !1;
      }
      return i;
    }
    return t & Node.DOCUMENT_POSITION_PRECEDING ? ((e = !!i) && !(e = i === l) && (e = F(
      l,
      i,
      G
    ), e === null ? e = !1 : (p(
      e,
      !0,
      Q,
      i,
      l
    ), i = V, V = null, e = i !== null)), e) : t & Node.DOCUMENT_POSITION_FOLLOWING ? ((e = !!i) && !(e = i === n) && (e = F(
      n,
      i,
      G
    ), e === null ? e = !1 : (p(
      e,
      !0,
      Z,
      i,
      n
    ), i = V, w = V = null, e = i !== null)), e) : !1;
  }
  function km(t, e) {
    var l = t.ownerDocument.createRange();
    l.selectNodeContents(t), t = l.getBoundingClientRect(), window.scrollTo(
      window.scrollX + t.left,
      e ? window.scrollY + t.top : window.scrollY + t.bottom - window.innerHeight
    );
  }
  ke.prototype.scrollIntoView = function(t) {
    if (typeof t == "object") throw Error(f(566));
    var e = [];
    p(
      this._fragmentFiber.child,
      !1,
      Zs,
      e,
      void 0,
      void 0
    );
    var l = t !== !1;
    if (e.length === 0) {
      var n = U(
        this._fragmentFiber
      );
      if (n = l ? n[1] || n[0] || b(this._fragmentFiber) : n[0] || n[1], n === null) return;
      if (n.tag === 6) {
        t = R(n), km(t, l);
        return;
      }
      if (n = R(n), n.nodeType !== 9) {
        if (n.nodeType === 11) {
          l = "host" in n ? n.host : null, l !== null && l.scrollIntoView(t);
          return;
        }
        n.scrollIntoView(t);
      }
    }
    for (n = l ? e.length - 1 : 0; n !== (l ? -1 : e.length); ) {
      var a = e[n];
      a.tag === 6 ? (a = R(a), km(a, l)) : R(a).scrollIntoView(t), n += l ? -1 : 1;
    }
  };
  function Oy(t, e) {
    return t = R(t), $m(t, e), !1;
  }
  function $m(t, e) {
    t.reactFragments == null && (t.reactFragments = /* @__PURE__ */ new Set()), t.reactFragments.add(e);
  }
  function Wm(t, e) {
    var l = e._eventListeners;
    if (l !== null)
      for (var n = 0; n < l.length; n++) {
        var a = l[n];
        t.addEventListener(
          a.type,
          a.attachedListener,
          iu(a.optionsOrUseCapture)
        );
      }
    t.nodeType !== 3 && (l = e._observers, l !== null && l.forEach(function(i) {
      for (var o = 0, _ = 0; _ < Sl.length; _++) {
        var T = Sl[_];
        (T.fragmentInstance !== e || T.observer !== i || T.instance !== t) && (Sl[o++] = T);
      }
      Sl.length = o, i.observe(t);
    }), $m(t, e));
  }
  function zy(t, e) {
    var l = e._eventListeners;
    if (l !== null)
      for (var n = 0; n < l.length; n++) {
        var a = l[n];
        t.removeEventListener(
          a.type,
          a.attachedListener,
          iu(a.optionsOrUseCapture)
        );
      }
    t.nodeType !== 3 && (l = e._observers, l !== null && l.forEach(function(i) {
      typeof i.rootMargin == "string" ? Sy(
        e,
        i,
        t
      ) : i.unobserve(t);
    }), t.reactFragments != null && t.reactFragments.delete(e));
  }
  function Js(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
      var l = e;
      switch (e = e.nextSibling, l.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Js(l), Zi(l);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (l.rel.toLowerCase() === "stylesheet") continue;
      }
      t.removeChild(l);
    }
  }
  function Ay(t, e, l, n) {
    for (; t.nodeType === 1; ) {
      var a = l;
      if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
        if (!n && (t.nodeName !== "INPUT" || t.type !== "hidden"))
          break;
      } else if (n) {
        if (!t[Du])
          switch (e) {
            case "meta":
              if (!t.hasAttribute("itemprop")) break;
              return t;
            case "link":
              if (i = t.getAttribute("rel"), i === "stylesheet" && t.hasAttribute("data-precedence"))
                break;
              if (i !== a.rel || t.getAttribute("href") !== (a.href == null || a.href === "" ? null : a.href) || t.getAttribute("crossorigin") !== (a.crossOrigin == null ? null : a.crossOrigin) || t.getAttribute("title") !== (a.title == null ? null : a.title))
                break;
              return t;
            case "style":
              if (t.hasAttribute("data-precedence")) break;
              return t;
            case "script":
              if (i = t.getAttribute("src"), (i !== (a.src == null ? null : a.src) || t.getAttribute("type") !== (a.type == null ? null : a.type) || t.getAttribute("crossorigin") !== (a.crossOrigin == null ? null : a.crossOrigin)) && i && t.hasAttribute("async") && !t.hasAttribute("itemprop"))
                break;
              return t;
            default:
              return t;
          }
      } else if (e === "input" && t.type === "hidden") {
        var i = a.name == null ? null : "" + a.name;
        if (a.type === "hidden" && t.getAttribute("name") === i)
          return t;
      } else return t;
      if (t = sl(t.nextSibling), t === null) break;
    }
    return null;
  }
  function My(t, e, l) {
    if (e === "") return null;
    for (; t.nodeType !== 3; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !l || (t = sl(t.nextSibling), t === null)) return null;
    return t;
  }
  function Im(t, e) {
    for (; t.nodeType !== 8; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !e || (t = sl(t.nextSibling), t === null)) return null;
    return t;
  }
  function Fs(t) {
    return t.data === "$?" || t.data === "$~";
  }
  function ks(t) {
    return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState !== "loading";
  }
  function Dy(t, e) {
    var l = t.ownerDocument;
    if (t.data === "$~") t._reactRetry = e;
    else if (t.data !== "$?" || l.readyState !== "loading")
      e();
    else {
      var n = function() {
        e(), l.removeEventListener("DOMContentLoaded", n);
      };
      l.addEventListener("DOMContentLoaded", n), t._reactRetry = n;
    }
  }
  function sl(t) {
    for (; t != null; t = t.nextSibling) {
      var e = t.nodeType;
      if (e === 1 || e === 3) break;
      if (e === 8) {
        if (e = t.data, e === "$" || e === "$!" || e === "$?" || e === "$~" || e === "&" || e === "F!" || e === "F")
          break;
        if (e === "/$" || e === "/&") return null;
      }
    }
    return t;
  }
  var $s = null;
  function Pm(t) {
    t = t.nextSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var l = t.data;
        if (l === "/$" || l === "/&") {
          if (e === 0)
            return sl(t.nextSibling);
          e--;
        } else
          l !== "$" && l !== "$!" && l !== "$?" && l !== "$~" && l !== "&" || e++;
      }
      t = t.nextSibling;
    }
    return null;
  }
  function t_(t) {
    t = t.previousSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var l = t.data;
        if (l === "$" || l === "$!" || l === "$?" || l === "$~" || l === "&") {
          if (e === 0) return t;
          e--;
        } else l !== "/$" && l !== "/&" || e++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function Ny(t, e) {
    function l() {
      n = !0;
    }
    if (t.ownerDocument.activeElement === t) return !0;
    var n = !1;
    try {
      t.ownerDocument.addEventListener("focus", l, !0), (t.focus || HTMLElement.prototype.focus).call(t, e);
    } finally {
      t.ownerDocument.removeEventListener("focus", l, !0);
    }
    return n;
  }
  function Cy(t) {
    jm(function() {
      jm(function(e) {
        return t(e);
      });
    });
  }
  function e_(t, e, l) {
    switch (e = si(l), t) {
      case "html":
        if (t = e.documentElement, !t) throw Error(f(452));
        return t;
      case "head":
        if (t = e.head, !t) throw Error(f(453));
        return t;
      case "body":
        if (t = e.body, !t) throw Error(f(454));
        return t;
      default:
        throw Error(f(451));
    }
  }
  function l_(t, e, l) {
    for (var n in l) {
      var a = l[n];
      l.hasOwnProperty(n) && a != null && Ht(t, e, n, null, uy, a);
    }
    l.dangerouslySetInnerHTML != null && (t.textContent = ""), t.onclick === Ol && (t.onclick = null), Zi(t);
  }
  function Ws(t) {
    for (var e = t.attributes; e.length; )
      t.removeAttributeNode(e[0]);
    Zi(t);
  }
  var ol = /* @__PURE__ */ new Map(), n_ = /* @__PURE__ */ new Set();
  function oi(t) {
    if (typeof t.getRootNode == "function") {
      var e = t.getRootNode();
      if (e.nodeType === 9 || e.nodeType === 11) return e;
    }
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  var tn = rt.d;
  rt.d = {
    f: Ry,
    r: xy,
    D: Uy,
    C: Hy,
    L: By,
    m: Yy,
    X: wy,
    S: qy,
    M: Gy
  };
  function Ry() {
    var t = tn.f(), e = kf();
    return t || e;
  }
  function xy(t) {
    var e = za(t);
    e !== null && e.tag === 5 && e.type === "form" ? ud(e) : tn.r(t);
  }
  var fu = typeof document > "u" ? null : document;
  function a_(t, e, l) {
    var n = fu;
    if (n && typeof e == "string" && e) {
      var a = nl(e);
      a = 'link[rel="' + t + '"][href="' + a + '"]', typeof l == "string" && (a += '[crossorigin="' + l + '"]'), n_.has(a) || (n_.add(a), t = { rel: t, crossOrigin: l, href: e }, n.querySelector(a) === null && (e = n.createElement("link"), ge(e, "link", t), ue(e), n.head.appendChild(e)));
    }
  }
  function Uy(t) {
    tn.D(t), a_("dns-prefetch", t, null);
  }
  function Hy(t, e) {
    tn.C(t, e), a_("preconnect", t, e);
  }
  function By(t, e, l) {
    tn.L(t, e, l);
    var n = fu;
    if (n && t && e) {
      var a = 'link[rel="preload"][as="' + nl(e) + '"]';
      e === "image" && l && l.imageSrcSet ? (a += '[imagesrcset="' + nl(
        l.imageSrcSet
      ) + '"]', typeof l.imageSizes == "string" && (a += '[imagesizes="' + nl(
        l.imageSizes
      ) + '"]')) : a += '[href="' + nl(t) + '"]';
      var i = a;
      switch (e) {
        case "style":
          i = cu(t);
          break;
        case "script":
          i = ru(t);
      }
      if (!(ol.has(i) || (t = B(
        {
          rel: "preload",
          href: e === "image" && l && l.imageSrcSet ? void 0 : t,
          as: e
        },
        l
      ), ol.set(i, t), n.querySelector(a) !== null || e === "style" && n.querySelector(hi(i)) || e === "script" && n.querySelector(di(i))))) {
        var o = n.createElement("link");
        ge(o, "link", t), e === "style" && (o[Qi] = !0, o.onload = o.onerror = function() {
          gh(o);
        }), ue(o), n.head.appendChild(o);
      }
    }
  }
  function Yy(t, e) {
    tn.m(t, e);
    var l = fu;
    if (l && t) {
      var n = e && typeof e.as == "string" ? e.as : "script", a = 'link[rel="modulepreload"][as="' + nl(n) + '"][href="' + nl(t) + '"]', i = a;
      switch (n) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          i = ru(t);
      }
      if (!ol.has(i) && (t = B({ rel: "modulepreload", href: t }, e), ol.set(i, t), l.querySelector(a) === null)) {
        switch (n) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (l.querySelector(di(i)))
              return;
        }
        n = l.createElement("link"), ge(n, "link", t), ue(n), l.head.appendChild(n);
      }
    }
  }
  function qy(t, e, l) {
    tn.S(t, e, l);
    var n = fu;
    if (n && t) {
      var a = Aa(n).hoistableStyles, i = cu(t);
      e = e || "default";
      var o = a.get(i);
      if (!o) {
        var _ = { loading: 0, preload: null };
        if (o = n.querySelector(
          hi(i)
        ))
          _.loading = 5;
        else {
          t = B(
            { rel: "stylesheet", href: t, "data-precedence": e },
            l
          ), (l = ol.get(i)) && Is(t, l);
          var T = o = n.createElement("link");
          ue(T), ge(T, "link", t), T._p = new Promise(function(M, x) {
            T.onload = M, T.onerror = x;
          }), T.addEventListener("load", function() {
            _.loading |= 1;
          }), T.addEventListener("error", function() {
            _.loading |= 2;
          }), _.loading |= 4, lc(o, e, n);
        }
        o = {
          type: "stylesheet",
          instance: o,
          count: 1,
          state: _
        }, a.set(i, o);
      }
    }
  }
  function wy(t, e) {
    tn.X(t, e);
    var l = fu;
    if (l && t) {
      var n = Aa(l).hoistableScripts, a = ru(t), i = n.get(a);
      i || (i = l.querySelector(di(a)), i || (t = B({ src: t, async: !0 }, e), (e = ol.get(a)) && Ps(t, e), i = l.createElement("script"), ue(i), ge(i, "link", t), l.head.appendChild(i)), i = {
        type: "script",
        instance: i,
        count: 1,
        state: null
      }, n.set(a, i));
    }
  }
  function Gy(t, e) {
    tn.M(t, e);
    var l = fu;
    if (l && t) {
      var n = Aa(l).hoistableScripts, a = ru(t), i = n.get(a);
      i || (i = l.querySelector(di(a)), i || (t = B({ src: t, async: !0, type: "module" }, e), (e = ol.get(a)) && Ps(t, e), i = l.createElement("script"), ue(i), ge(i, "link", t), l.head.appendChild(i)), i = {
        type: "script",
        instance: i,
        count: 1,
        state: null
      }, n.set(a, i));
    }
  }
  function u_(t, e, l, n) {
    var a = (a = fn.current) ? oi(a) : null;
    if (!a) throw Error(f(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof l.precedence == "string" && typeof l.href == "string" ? (l = cu(l.href), e = Aa(
          a
        ).hoistableStyles, n = e.get(l), n || (n = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, e.set(l, n)), n) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (l.rel === "stylesheet" && typeof l.href == "string" && typeof l.precedence == "string") {
          t = cu(l.href);
          var i = Aa(
            a
          ).hoistableStyles, o = i.get(t);
          if (o || (a = a.ownerDocument || a, o = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, i.set(t, o), (i = a.querySelector(
            hi(t)
          )) ? i._p || (o.instance = i, o.state.loading = 5) : (i = ol.get(t), i || (i = {
            rel: "preload",
            as: "style",
            href: l.href,
            crossOrigin: l.crossOrigin,
            integrity: l.integrity,
            media: l.media,
            hrefLang: l.hrefLang,
            referrerPolicy: l.referrerPolicy
          }, ol.set(t, i)), jy(
            a,
            t,
            i,
            o.state
          ))), e && n === null)
            throw Error(f(528, ""));
          return o;
        }
        if (e && n !== null)
          throw Error(f(529, ""));
        return null;
      case "script":
        return e = l.async, l = l.src, typeof l == "string" && e && typeof e != "function" && typeof e != "symbol" ? (l = ru(l), e = Aa(
          a
        ).hoistableScripts, n = e.get(l), n || (n = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, e.set(l, n)), n) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(f(444, t));
    }
  }
  function cu(t) {
    return 'href="' + nl(t) + '"';
  }
  function hi(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function i_(t) {
    return B({}, t, {
      "data-precedence": t.precedence,
      precedence: null
    });
  }
  function jy(t, e, l, n) {
    if (e = t.querySelector(
      'link[rel="preload"][as="style"][' + e + "]"
    )) {
      if (e[Qi] !== !0) {
        n.loading = 1;
        return;
      }
    } else
      e = t.createElement("link"), e[Qi] = !0, e.onload = e.onerror = gh.bind(null, e), ge(e, "link", l), ue(e), t.head.appendChild(e);
    n.preload = e, e.addEventListener("load", function() {
      return n.loading |= 1;
    }), e.addEventListener("error", function() {
      return n.loading |= 2;
    });
  }
  function ru(t) {
    return '[src="' + nl(t) + '"]';
  }
  function di(t) {
    return "script[async]" + t;
  }
  function f_(t, e, l) {
    if (e.count++, e.instance === null)
      switch (e.type) {
        case "style":
          var n = t.querySelector(
            'style[data-href~="' + nl(l.href) + '"]'
          );
          if (n)
            return e.instance = n, ue(n), n;
          var a = B({}, l, {
            "data-href": l.href,
            "data-precedence": l.precedence,
            href: null,
            precedence: null
          });
          return n = (t.ownerDocument || t).createElement(
            "style"
          ), ue(n), ge(n, "style", a), lc(n, l.precedence, t), e.instance = n;
        case "stylesheet":
          a = cu(l.href);
          var i = t.querySelector(
            hi(a)
          );
          if (i)
            return e.state.loading |= 4, e.instance = i, ue(i), i;
          n = i_(l), (a = ol.get(a)) && Is(n, a), i = (t.ownerDocument || t).createElement("link"), ue(i);
          var o = i;
          return o._p = new Promise(function(_, T) {
            o.onload = _, o.onerror = T;
          }), ge(i, "link", n), e.state.loading |= 4, lc(i, l.precedence, t), e.instance = i;
        case "script":
          return i = ru(l.src), (a = t.querySelector(
            di(i)
          )) ? (e.instance = a, ue(a), a) : (n = l, (a = ol.get(i)) && (n = B({}, l), Ps(n, a)), t = t.ownerDocument || t, a = t.createElement("script"), ue(a), ge(a, "link", n), t.head.appendChild(a), e.instance = a);
        case "void":
          return null;
        default:
          throw Error(f(443, e.type));
      }
    else
      e.type === "stylesheet" && (e.state.loading & 4) === 0 && (n = e.instance, e.state.loading |= 4, lc(n, l.precedence, t));
    return e.instance;
  }
  function lc(t, e, l) {
    for (var n = l.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), a = n.length ? n[n.length - 1] : null, i = a, o = 0; o < n.length; o++) {
      var _ = n[o];
      if (_.dataset.precedence === e) i = _;
      else if (i !== a) break;
    }
    i ? i.parentNode.insertBefore(t, i.nextSibling) : (e = l.nodeType === 9 ? l.head : l, e.insertBefore(t, e.firstChild));
  }
  function Is(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.title == null && (t.title = e.title);
  }
  function Ps(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.integrity == null && (t.integrity = e.integrity);
  }
  var nc = null;
  function c_(t, e, l) {
    if (nc === null) {
      var n = /* @__PURE__ */ new Map(), a = nc = /* @__PURE__ */ new Map();
      a.set(l, n);
    } else
      a = nc, n = a.get(l), n || (n = /* @__PURE__ */ new Map(), a.set(l, n));
    if (n.has(t)) return n;
    for (n.set(t, null), l = l.getElementsByTagName(t), a = 0; a < l.length; a++) {
      var i = l[a];
      if (!(i[Du] || i[he] || t === "link" && i.getAttribute("rel") === "stylesheet") && i.namespaceURI !== "http://www.w3.org/2000/svg") {
        var o = i.getAttribute(e) || "";
        o = t + o;
        var _ = n.get(o);
        _ ? _.push(i) : n.set(o, [i]);
      }
    }
    return n;
  }
  function to(t, e, l) {
    t = t.ownerDocument || t, t.head.insertBefore(
      l,
      e === "title" ? t.querySelector("head > title") : null
    );
  }
  function Xy(t, e, l) {
    if (l === 1 || e.itemProp != null) return !1;
    switch (t) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof e.precedence != "string" || typeof e.href != "string" || e.href === "")
          break;
        return !0;
      case "link":
        if (typeof e.rel != "string" || typeof e.href != "string" || e.href === "" || e.onLoad || e.onError)
          break;
        return e.rel === "stylesheet" ? (t = e.disabled, typeof e.precedence == "string" && t == null) : !0;
      case "script":
        if (e.async && typeof e.async != "function" && typeof e.async != "symbol" && !e.onLoad && !e.onError && e.src && typeof e.src == "string")
          return !0;
    }
    return !1;
  }
  function r_(t, e) {
    return t === "img" && e.src != null && e.src !== "" && e.onLoad == null && e.loading !== "lazy";
  }
  function s_(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  function o_(t) {
    return (t.width || 100) * (t.height || 100) * (typeof devicePixelRatio == "number" ? devicePixelRatio : 1) * 0.25;
  }
  function h_(t, e) {
    typeof e.decode == "function" && (t.imgCount++, e.complete || (t.imgBytes += o_(e), t.suspenseyImages.push(e)), t = Qy.bind(t), e.decode().then(t, t));
  }
  function Vy(t, e, l, n) {
    if (l.type === "stylesheet" && (typeof n.media != "string" || matchMedia(n.media).matches !== !1) && (l.state.loading & 4) === 0) {
      if (l.instance === null) {
        var a = cu(n.href), i = e.querySelector(
          hi(a)
        );
        if (i) {
          e = i._p, e !== null && typeof e == "object" && typeof e.then == "function" && (t.count++, t = mi.bind(t), e.then(t, t)), l.state.loading |= 4, l.instance = i, ue(i);
          return;
        }
        i = e.ownerDocument || e, n = i_(n), (a = ol.get(a)) && Is(n, a), i = i.createElement("link"), ue(i);
        var o = i;
        o._p = new Promise(function(_, T) {
          o.onload = _, o.onerror = T;
        }), ge(i, "link", n), l.instance = i;
      }
      t.stylesheets === null && (t.stylesheets = /* @__PURE__ */ new Map()), t.stylesheets.set(l, e), (e = l.state.preload) && (l.state.loading & 3) === 0 && (t.count++, l = mi.bind(t), e.addEventListener("load", l), e.addEventListener("error", l));
    }
  }
  var ac = 0;
  function Ly(t, e) {
    return t.stylesheets && t.count === 0 && ic(t, t.stylesheets), 0 < t.count || 0 < t.imgCount ? function(l) {
      var n = setTimeout(function() {
        if (t.stylesheets && ic(t, t.stylesheets), t.unsuspend) {
          var i = t.unsuspend;
          t.unsuspend = null, i();
        }
      }, 6e4 + e);
      0 < t.imgBytes && ac === 0 && (ac = 62500 * fy());
      var a = setTimeout(
        function() {
          if (t.waitingForImages = !1, t.count === 0 && (t.stylesheets && ic(t, t.stylesheets), t.unsuspend)) {
            var i = t.unsuspend;
            t.unsuspend = null, i();
          }
        },
        (t.imgBytes > ac ? 50 : 800) + e
      );
      return t.unsuspend = l, function() {
        t.unsuspend = null, clearTimeout(n), clearTimeout(a);
      };
    } : null;
  }
  function d_(t) {
    if (t.count === 0 && (t.imgCount === 0 || !t.waitingForImages)) {
      if (t.stylesheets) ic(t, t.stylesheets);
      else if (t.unsuspend) {
        var e = t.unsuspend;
        t.unsuspend = null, e();
      }
    }
  }
  function mi() {
    this.count--, d_(this);
  }
  function Qy() {
    this.imgCount--, d_(this);
  }
  var uc = null;
  function ic(t, e) {
    t.stylesheets = null, t.unsuspend !== null && (t.count++, uc = /* @__PURE__ */ new Map(), e.forEach(Zy, t), uc = null, mi.call(t));
  }
  function Zy(t, e) {
    if (!(e.state.loading & 4)) {
      var l = uc.get(t);
      if (l) var n = l.get(null);
      else {
        l = /* @__PURE__ */ new Map(), uc.set(t, l);
        for (var a = t.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), i = 0; i < a.length; i++) {
          var o = a[i];
          (o.nodeName === "LINK" || o.getAttribute("media") !== "not all") && (l.set(o.dataset.precedence, o), n = o);
        }
        n && l.set(null, n);
      }
      a = e.instance, o = a.getAttribute("data-precedence"), i = l.get(o) || n, i === n && l.set(null, a), l.set(o, a), this.count++, n = mi.bind(this), a.addEventListener("load", n), a.addEventListener("error", n), i ? i.parentNode.insertBefore(a, i.nextSibling) : (t = t.nodeType === 9 ? t.head : t, t.insertBefore(a, t.firstChild)), e.state.loading |= 4;
    }
  }
  var su = {
    $$typeof: ft,
    Provider: null,
    Consumer: null,
    _currentValue: _l,
    _currentValue2: _l,
    _threadCount: 0
  };
  function Ky(t, e, l, n, a, i, o, _, T) {
    this.tag = 1, this.containerInfo = t, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Hc(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Hc(0), this.hiddenUpdates = Hc(null), this.identifierPrefix = n, this.onUncaughtError = a, this.onCaughtError = i, this.onRecoverableError = o, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = T, this.transitionTypes = null, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function m_(t, e, l, n, a, i, o, _, T, M, x, q) {
    return t = new Ky(
      t,
      e,
      l,
      o,
      T,
      M,
      x,
      q,
      _
    ), e = 1, i === !0 && (e |= 24), i = De(3, null, null, e), t.current = i, i.stateNode = t, e = _r(), e.refCount++, t.pooledCache = e, e.refCount++, i.memoizedState = {
      element: n,
      isDehydrated: l,
      cache: e
    }, pr(i), t;
  }
  function __(t) {
    return t ? (t = Ya, t) : Ya;
  }
  function v_(t, e, l, n, a, i) {
    a = __(a), n.context === null ? n.context = a : n.pendingContext = a, n = yn(e), n.payload = { element: l }, i = i === void 0 ? null : i, i !== null && (n.callback = i), l = pn(t, n, e), l !== null && (xe(l, t, e), Zu(l, t, e));
  }
  function g_(t, e) {
    if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
      var l = t.retryLane;
      t.retryLane = l !== 0 && l < e ? l : e;
    }
  }
  function eo(t, e) {
    g_(t, e), (t = t.alternate) && g_(t, e);
  }
  function y_(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = $n(t, 67108864);
      e !== null && xe(e, t, 67108864), eo(t, 67108864);
    }
  }
  function p_(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = Fe();
      e = Bc(e);
      var l = $n(t, e);
      l !== null && xe(l, t, e), eo(t, e);
    }
  }
  var ou = !0;
  function Jy(t, e, l, n) {
    var a = tt.T;
    tt.T = null;
    var i = rt.p;
    try {
      rt.p = 2, lo(t, e, l, n);
    } finally {
      rt.p = i, tt.T = a;
    }
  }
  function Fy(t, e, l, n) {
    var a = tt.T;
    tt.T = null;
    var i = rt.p;
    try {
      rt.p = 8, lo(t, e, l, n);
    } finally {
      rt.p = i, tt.T = a;
    }
  }
  function lo(t, e, l, n) {
    if (ou) {
      var a = no(n);
      if (a === null)
        qs(
          t,
          e,
          n,
          fc,
          l
        ), S_(t, n);
      else if ($y(
        a,
        t,
        e,
        l,
        n
      ))
        n.stopPropagation();
      else if (S_(t, n), e & 4 && -1 < ky.indexOf(t)) {
        for (; a !== null; ) {
          var i = za(a);
          if (i !== null)
            switch (i.tag) {
              case 3:
                if (i = i.stateNode, i.current.memoizedState.isDehydrated) {
                  var o = Zn(i.pendingLanes);
                  if (o !== 0) {
                    var _ = i;
                    for (_.pendingLanes |= 2, _.entangledLanes |= 2; o; ) {
                      var T = 1 << 31 - Xe(o);
                      _.entanglements[1] |= T, o &= ~T;
                    }
                    Hl(i), (Ct & 6) === 0 && (Kf = Ge() + 500, fi(0));
                  }
                }
                break;
              case 31:
              case 13:
                _ = $n(i, 2), _ !== null && xe(_, i, 2), kf(), eo(i, 2);
            }
          if (i = no(n), i === null && qs(
            t,
            e,
            n,
            fc,
            l
          ), i === a) break;
          a = i;
        }
        a !== null && n.stopPropagation();
      } else
        qs(
          t,
          e,
          n,
          null,
          l
        );
    }
  }
  function no(t) {
    return t = Vc(t), ao(t);
  }
  var fc = null;
  function ao(t) {
    if (fc = null, t = Kn(t), t !== null) {
      var e = s(t);
      if (e === null) t = null;
      else {
        var l = e.tag;
        if (l === 13) {
          if (t = h(e), t !== null) return t;
          t = null;
        } else if (l === 31) {
          if (t = d(e), t !== null) return t;
          t = null;
        } else if (l === 3) {
          if (e.stateNode.current.memoizedState.isDehydrated)
            return e.tag === 3 ? e.stateNode.containerInfo : null;
          t = null;
        } else e !== t && (t = null);
      }
    }
    return fc = t, null;
  }
  function T_(t) {
    switch (t) {
      case "beforetoggle":
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
      case "seeked":
      case "submit":
      case "toggle":
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
      case "fullscreenerror":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
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
      case "resize":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (fg()) {
          case uh:
            return 2;
          case ih:
            return 8;
          case Gi:
          case cg:
            return 32;
          case fh:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var uo = !1, Rn = null, xn = null, Un = null, _i = /* @__PURE__ */ new Map(), vi = /* @__PURE__ */ new Map(), Hn = [], ky = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function S_(t, e) {
    switch (t) {
      case "focusin":
      case "focusout":
        Rn = null;
        break;
      case "dragenter":
      case "dragleave":
        xn = null;
        break;
      case "mouseover":
      case "mouseout":
        Un = null;
        break;
      case "pointerover":
      case "pointerout":
        _i.delete(e.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        vi.delete(e.pointerId);
    }
  }
  function gi(t, e, l, n, a, i) {
    return t === null || t.nativeEvent !== i ? (t = {
      blockedOn: e,
      domEventName: l,
      eventSystemFlags: n,
      nativeEvent: i,
      targetContainers: [a]
    }, e !== null && (e = za(e), e !== null && y_(e)), t) : (t.eventSystemFlags |= n, e = t.targetContainers, a !== null && e.indexOf(a) === -1 && e.push(a), t);
  }
  function $y(t, e, l, n, a) {
    switch (e) {
      case "focusin":
        return Rn = gi(
          Rn,
          t,
          e,
          l,
          n,
          a
        ), !0;
      case "dragenter":
        return xn = gi(
          xn,
          t,
          e,
          l,
          n,
          a
        ), !0;
      case "mouseover":
        return Un = gi(
          Un,
          t,
          e,
          l,
          n,
          a
        ), !0;
      case "pointerover":
        var i = a.pointerId;
        return _i.set(
          i,
          gi(
            _i.get(i) || null,
            t,
            e,
            l,
            n,
            a
          )
        ), !0;
      case "gotpointercapture":
        return i = a.pointerId, vi.set(
          i,
          gi(
            vi.get(i) || null,
            t,
            e,
            l,
            n,
            a
          )
        ), !0;
    }
    return !1;
  }
  function b_(t) {
    var e = Kn(t.target);
    if (e !== null) {
      var l = s(e);
      if (l !== null) {
        if (e = l.tag, e === 13) {
          if (e = h(l), e !== null) {
            t.blockedOn = e, mh(t.priority, function() {
              p_(l);
            });
            return;
          }
        } else if (e === 31) {
          if (e = d(l), e !== null) {
            t.blockedOn = e, mh(t.priority, function() {
              p_(l);
            });
            return;
          }
        } else if (e === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function cc(t) {
    if (t.blockedOn !== null) return !1;
    for (var e = t.targetContainers; 0 < e.length; ) {
      var l = no(t.nativeEvent);
      if (l === null) {
        l = t.nativeEvent;
        var n = new l.constructor(
          l.type,
          l
        );
        Xc = n, l.target.dispatchEvent(n), Xc = null;
      } else
        return e = za(l), e !== null && y_(e), t.blockedOn = l, !1;
      e.shift();
    }
    return !0;
  }
  function E_(t, e, l) {
    cc(t) && l.delete(e);
  }
  function Wy() {
    uo = !1, Rn !== null && cc(Rn) && (Rn = null), xn !== null && cc(xn) && (xn = null), Un !== null && cc(Un) && (Un = null), _i.forEach(E_), vi.forEach(E_);
  }
  function rc(t, e) {
    t.blockedOn === e && (t.blockedOn = null, uo || (uo = !0, m.unstable_scheduleCallback(
      m.unstable_NormalPriority,
      Wy
    )));
  }
  var sc = null;
  function O_(t) {
    sc !== t && (sc = t, m.unstable_scheduleCallback(
      m.unstable_NormalPriority,
      function() {
        sc === t && (sc = null);
        for (var e = 0; e < t.length; e += 3) {
          var l = t[e], n = t[e + 1], a = t[e + 2];
          if (typeof n != "function") {
            if (ao(n || l) === null)
              continue;
            break;
          }
          var i = za(l);
          i !== null && (t.splice(e, 3), e -= 3, jr(
            i,
            {
              pending: !0,
              data: a,
              method: l.method,
              action: n
            },
            n,
            a
          ));
        }
      }
    ));
  }
  function hu(t) {
    function e(T) {
      return rc(T, t);
    }
    Rn !== null && rc(Rn, t), xn !== null && rc(xn, t), Un !== null && rc(Un, t), _i.forEach(e), vi.forEach(e);
    for (var l = 0; l < Hn.length; l++) {
      var n = Hn[l];
      n.blockedOn === t && (n.blockedOn = null);
    }
    for (; 0 < Hn.length && (l = Hn[0], l.blockedOn === null); )
      b_(l), l.blockedOn === null && Hn.shift();
    if (l = (t.ownerDocument || t).$$reactFormReplay, l != null)
      for (n = 0; n < l.length; n += 3) {
        var a = l[n], i = l[n + 1], o = a[Me] || null;
        if (typeof i == "function")
          o || O_(l);
        else if (o) {
          var _ = null;
          if (i && i.hasAttribute("formAction")) {
            if (a = i, o = i[Me] || null)
              _ = o.formAction;
            else if (ao(a) !== null) continue;
          } else _ = o.action;
          typeof _ == "function" ? l[n + 1] = _ : (l.splice(n, 3), n -= 3), O_(l);
        }
      }
  }
  function z_() {
    function t(i) {
      i.canIntercept && i.info === "react-transition" && i.intercept({
        handler: function() {
          return new Promise(function(o) {
            return a = o;
          });
        },
        focusReset: "manual",
        scroll: "manual"
      });
    }
    function e() {
      a !== null && (a(), a = null), n || setTimeout(l, 20);
    }
    function l() {
      if (!n && !navigation.transition) {
        var i = navigation.currentEntry;
        i && i.url != null && navigation.navigate(i.url, {
          state: i.getState(),
          info: "react-transition",
          history: "replace"
        });
      }
    }
    if (typeof navigation == "object") {
      var n = !1, a = null;
      return navigation.addEventListener("navigate", t), navigation.addEventListener("navigatesuccess", e), navigation.addEventListener("navigateerror", e), setTimeout(l, 100), function() {
        n = !0, navigation.removeEventListener("navigate", t), navigation.removeEventListener("navigatesuccess", e), navigation.removeEventListener("navigateerror", e), a !== null && (a(), a = null);
      };
    }
  }
  function io(t) {
    this._internalRoot = t;
  }
  oc.prototype.render = io.prototype.render = function(t) {
    var e = this._internalRoot;
    if (e === null) throw Error(f(409));
    var l = e.current, n = Fe();
    v_(l, n, t, e, null, null);
  }, oc.prototype.unmount = io.prototype.unmount = function() {
    var t = this._internalRoot;
    if (t !== null) {
      this._internalRoot = null;
      var e = t.containerInfo;
      v_(t.current, 2, null, t, null, null), kf(), e[Oa] = null;
    }
  };
  function oc(t) {
    this._internalRoot = t;
  }
  oc.prototype.unstable_scheduleHydration = function(t) {
    if (t) {
      var e = dh();
      t = { blockedOn: null, target: t, priority: e };
      for (var l = 0; l < Hn.length && e !== 0 && e < Hn[l].priority; l++) ;
      Hn.splice(l, 0, t), l === 0 && b_(t);
    }
  };
  var A_ = u.version;
  if (A_ !== "19.3.0")
    throw Error(
      f(
        527,
        A_,
        "19.3.0"
      )
    );
  rt.findDOMNode = function(t) {
    var e = t._reactInternals;
    if (e === void 0)
      throw typeof t.render == "function" ? Error(f(188)) : (t = Object.keys(t).join(","), Error(f(268, t)));
    return t = y(e), t = t !== null ? v(t) : null, t = t === null ? null : t.stateNode, t;
  };
  var Iy = {
    bundleType: 0,
    version: "19.3.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: tt,
    reconcilerVersion: "19.3.0"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var hc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!hc.isDisabled && hc.supportsFiber)
      try {
        zu = hc.inject(
          Iy
        ), je = hc;
      } catch {
      }
  }
  return pi.createRoot = function(t, e) {
    if (!r(t)) throw Error(f(299));
    var l = !1, n = "", a = _d, i = vd, o = gd;
    return e != null && (e.unstable_strictMode === !0 && (l = !0), e.identifierPrefix !== void 0 && (n = e.identifierPrefix), e.onUncaughtError !== void 0 && (a = e.onUncaughtError), e.onCaughtError !== void 0 && (i = e.onCaughtError), e.onRecoverableError !== void 0 && (o = e.onRecoverableError)), e = m_(
      t,
      1,
      !1,
      null,
      null,
      l,
      n,
      null,
      a,
      i,
      o,
      z_
    ), t[Oa] = e.current, Ys(t), new io(e);
  }, pi.hydrateRoot = function(t, e, l) {
    if (!r(t)) throw Error(f(299));
    var n = !1, a = "", i = _d, o = vd, _ = gd, T = null;
    return l != null && (l.unstable_strictMode === !0 && (n = !0), l.identifierPrefix !== void 0 && (a = l.identifierPrefix), l.onUncaughtError !== void 0 && (i = l.onUncaughtError), l.onCaughtError !== void 0 && (o = l.onCaughtError), l.onRecoverableError !== void 0 && (_ = l.onRecoverableError), l.formState !== void 0 && (T = l.formState)), e = m_(
      t,
      1,
      !0,
      e,
      l ?? null,
      n,
      a,
      T,
      i,
      o,
      _,
      z_
    ), e.context = __(null), l = e.current, n = Fe(), n = Bc(n), a = yn(n), a.callback = null, pn(l, a, n), l = n, e.current.lanes = l, Mu(e, l), Hl(e), t[Oa] = e.current, Ys(t), new oc(e);
  }, pi.version = "19.3.0", pi;
}
var Y_;
function rp() {
  if (Y_) return co.exports;
  Y_ = 1;
  function m() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(m);
      } catch (u) {
        console.error(u);
      }
  }
  return m(), co.exports = cp(), co.exports;
}
var qo = rp(), ot = Yo();
const qT = /* @__PURE__ */ tp(ot);
function ln(m) {
  if (m === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return m;
}
function iv(m, u) {
  m.prototype = Object.create(u.prototype), m.prototype.constructor = m, m.__proto__ = u;
}
var tl = {
  autoSleep: 120,
  force3D: "auto",
  nullTargetWarn: 1,
  units: {
    lineHeight: ""
  }
}, Ai = {
  duration: 0.5,
  overwrite: !1,
  delay: 0
}, wo, pe, Lt, dl = 1e8, wt = 1 / dl, bo = Math.PI * 2, sp = bo / 4, op = 0, fv = Math.sqrt, hp = Math.cos, dp = Math.sin, re = function(u) {
  return typeof u == "string";
}, $t = function(u) {
  return typeof u == "function";
}, an = function(u) {
  return typeof u == "number";
}, Go = function(u) {
  return typeof u > "u";
}, wl = function(u) {
  return typeof u == "object";
}, He = function(u) {
  return u !== !1;
}, jo = function() {
  return typeof window < "u";
}, dc = function(u) {
  return $t(u) || re(u);
}, cv = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function() {
}, be = Array.isArray, mp = /random\([^)]+\)/g, _p = /,\s*/g, q_ = /(?:-?\.?\d|\.)+/gi, rv = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, mu = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, mo = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, sv = /[+-]=-?[.\d]+/, vp = /[^,'"\[\]\s]+/gi, gp = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, Kt, Bl, Eo, Xo, el = {}, gc = {}, ov, hv = function(u) {
  return (gc = pu(u, el)) && we;
}, Vo = function(u, c) {
  return console.warn("Invalid property", u, "set to", c, "Missing plugin? gsap.registerPlugin()");
}, Mi = function(u, c) {
  return !c && console.warn(u);
}, dv = function(u, c) {
  return u && (el[u] = c) && gc && (gc[u] = c) || el;
}, Di = function() {
  return 0;
}, yp = {
  suppressEvents: !0,
  isStart: !0,
  kill: !1
}, mc = {
  suppressEvents: !0,
  kill: !1
}, pp = {
  suppressEvents: !0
}, Lo = {}, Gn = [], Oo = {}, mv, $e = {}, _o = {}, w_ = 30, _c = [], Qo = "", Zo = function(u) {
  var c = u[0], f, r;
  if (wl(c) || $t(c) || (u = [u]), !(f = (c._gsap || {}).harness)) {
    for (r = _c.length; r-- && !_c[r].targetTest(c); )
      ;
    f = _c[r];
  }
  for (r = u.length; r--; )
    u[r] && (u[r]._gsap || (u[r]._gsap = new Yv(u[r], f))) || u.splice(r, 1);
  return u;
}, ya = function(u) {
  return u._gsap || Zo(ml(u))[0]._gsap;
}, _v = function(u, c, f) {
  return (f = u[c]) && $t(f) ? u[c]() : Go(f) && u.getAttribute && u.getAttribute(c) || f;
}, Be = function(u, c) {
  return (u = u.split(",")).forEach(c) || u;
}, It = function(u) {
  return Math.round(u * 1e5) / 1e5 || 0;
}, Zt = function(u) {
  return Math.round(u * 1e7) / 1e7 || 0;
}, vu = function(u, c) {
  var f = c.charAt(0), r = parseFloat(c.substr(2));
  return u = parseFloat(u), f === "+" ? u + r : f === "-" ? u - r : f === "*" ? u * r : u / r;
}, Tp = function(u, c) {
  for (var f = c.length, r = 0; u.indexOf(c[r]) < 0 && ++r < f; )
    ;
  return r < f;
}, yc = function() {
  var u = Gn.length, c = Gn.slice(0), f, r;
  for (Oo = {}, Gn.length = 0, f = 0; f < u; f++)
    r = c[f], r && r._lazy && (r.render(r._lazy[0], r._lazy[1], !0)._lazy = 0);
}, Ko = function(u) {
  return !!(u._initted || u._startAt || u.add);
}, vv = function(u, c, f, r) {
  Gn.length && !pe && yc(), u.render(c, f, !!(pe && c < 0 && Ko(u))), Gn.length && !pe && yc();
}, gv = function(u) {
  var c = parseFloat(u);
  return (c || c === 0) && (u + "").match(vp).length < 2 ? c : re(u) ? u.trim() : u;
}, yv = function(u) {
  return u;
}, ll = function(u, c) {
  for (var f in c)
    f in u || (u[f] = c[f]);
  return u;
}, Sp = function(u) {
  return function(c, f) {
    for (var r in f)
      r in c || r === "duration" && u || r === "ease" || (c[r] = f[r]);
  };
}, pu = function(u, c) {
  for (var f in c)
    u[f] = c[f];
  return u;
}, G_ = function m(u, c) {
  for (var f in c)
    f !== "__proto__" && f !== "constructor" && f !== "prototype" && (u[f] = wl(c[f]) ? m(u[f] || (u[f] = {}), c[f]) : c[f]);
  return u;
}, pc = function(u, c) {
  var f = {}, r;
  for (r in u)
    r in c || (f[r] = u[r]);
  return f;
}, Ei = function(u) {
  var c = u.parent || Kt, f = u.keyframes ? Sp(be(u.keyframes)) : ll;
  if (He(u.inherit))
    for (; c; )
      f(u, c.vars.defaults), c = c.parent || c._dp;
  return u;
}, bp = function(u, c) {
  for (var f = u.length, r = f === c.length; r && f-- && u[f] === c[f]; )
    ;
  return f < 0;
}, pv = function(u, c, f, r, s) {
  var h = u[r], d;
  if (s)
    for (d = c[s]; h && h[s] > d; )
      h = h._prev;
  return h ? (c._next = h._next, h._next = c) : (c._next = u[f], u[f] = c), c._next ? c._next._prev = c : u[r] = c, c._prev = h, c.parent = c._dp = u, c;
}, Oc = function(u, c, f, r) {
  f === void 0 && (f = "_first"), r === void 0 && (r = "_last");
  var s = c._prev, h = c._next;
  s ? s._next = h : u[f] === c && (u[f] = h), h ? h._prev = s : u[r] === c && (u[r] = s), c._next = c._prev = c.parent = null;
}, Xn = function(u, c) {
  u.parent && (!c || u.parent.autoRemoveChildren) && u.parent.remove && u.parent.remove(u), u._act = 0;
}, pa = function(u, c) {
  if (u && (!c || c._end > u._dur || c._start < 0))
    for (var f = u; f; )
      f._dirty = 1, f = f.parent;
  return u;
}, Ep = function(u) {
  for (var c = u.parent; c && c.parent; )
    c._dirty = 1, c.totalDuration(), c = c.parent;
  return u;
}, zo = function(u, c, f, r) {
  return u._startAt && (pe ? u._startAt.revert(mc) : u.vars.immediateRender && !u.vars.autoRevert || u._startAt.render(c, !0, r));
}, Op = function m(u) {
  return !u || u._ts && m(u.parent);
}, j_ = function(u) {
  return u._repeat ? Tu(u._tTime, u = u.duration() + u._rDelay) * u : 0;
}, Tu = function(u, c) {
  var f = Math.floor(u = Zt(u / c));
  return u && f === u ? f - 1 : f;
}, Tc = function(u, c) {
  return (u - c._start) * c._ts + (c._ts >= 0 ? 0 : c._dirty ? c.totalDuration() : c._tDur);
}, zc = function(u) {
  return u._end = Zt(u._start + (u._tDur / Math.abs(u._ts || u._rts || wt) || 0));
}, Ac = function(u, c) {
  var f = u._dp;
  return f && f.smoothChildTiming && u._ts && (u._start = Zt(f._time - (u._ts > 0 ? c / u._ts : ((u._dirty ? u.totalDuration() : u._tDur) - c) / -u._ts)), zc(u), f._dirty || pa(f, u)), u;
}, Tv = function(u, c) {
  var f;
  if ((c._time || !c._dur && c._initted || c._start < u._time && (c._dur || !c.add)) && (f = Tc(u.rawTime(), c), (!c._dur || Hi(0, c.totalDuration(), f) - c._tTime > wt) && c.render(f, !0)), pa(u, c)._dp && u._initted && u._time >= u._dur && u._ts) {
    if (u._dur < u.duration())
      for (f = u; f._dp; )
        f.rawTime() >= 0 && f.totalTime(f._tTime), f = f._dp;
    u._zTime = -wt;
  }
}, Yl = function(u, c, f, r) {
  return c.parent && Xn(c), c._start = Zt((an(f) ? f : f || u !== Kt ? hl(u, f, c) : u._time) + c._delay), c._end = Zt(c._start + (c.totalDuration() / Math.abs(c.timeScale()) || 0)), pv(u, c, "_first", "_last", u._sort ? "_start" : 0), Ao(c) || (u._recent = c), r || Tv(u, c), u._ts < 0 && Ac(u, u._tTime), u;
}, Sv = function(u, c) {
  return (el.ScrollTrigger || Vo("scrollTrigger", c)) && el.ScrollTrigger.create(c, u);
}, bv = function(u, c, f, r, s) {
  if (Fo(u, c, s), !u._initted)
    return 1;
  if (!f && u._pt && !pe && (u._dur && u.vars.lazy !== !1 || !u._dur && u.vars.lazy) && mv !== We.frame)
    return Gn.push(u), u._lazy = [s, r], 1;
}, zp = function m(u) {
  var c = u.parent;
  return c && c._ts && c._initted && !c._lock && (c.rawTime() < 0 || m(c));
}, Ao = function(u) {
  var c = u.data;
  return c === "isFromStart" || c === "isStart";
}, Ap = function(u, c, f, r) {
  var s = u.ratio, h = c < 0 || !c && (!u._start && zp(u) && !(!u._initted && Ao(u)) || (u._ts < 0 || u._dp._ts < 0) && !Ao(u)) ? 0 : 1, d = u._rDelay, g = 0, y, v, p;
  if (d && u._repeat && (g = Hi(0, u._tDur, c), v = Tu(g, d), u._yoyo && v & 1 && (h = 1 - h), v !== Tu(u._tTime, d) && (s = 1 - h, u.vars.repeatRefresh && u._initted && u.invalidate())), h !== s || pe || r || u._zTime === wt || !c && u._zTime) {
    if (!u._initted && bv(u, c, r, f, g))
      return;
    for (p = u._zTime, u._zTime = c || (f ? wt : 0), f || (f = c && !p), u.ratio = h, u._from && (h = 1 - h), u._time = 0, u._tTime = g, y = u._pt; y; )
      y.r(h, y.d), y = y._next;
    c < 0 && zo(u, c, f, !0), u._onUpdate && !f && Ie(u, "onUpdate"), g && u._repeat && !f && u.parent && Ie(u, "onRepeat"), (c >= u._tDur || c < 0) && u.ratio === h && (h && Xn(u, 1), !f && !pe && (Ie(u, h ? "onComplete" : "onReverseComplete", !0), u._prom && u._prom()));
  } else u._zTime || (u._zTime = c);
}, Mp = function(u, c, f) {
  var r;
  if (f > c)
    for (r = u._first; r && r._start <= f; ) {
      if (r.data === "isPause" && r._start > c)
        return r;
      r = r._next;
    }
  else
    for (r = u._last; r && r._start >= f; ) {
      if (r.data === "isPause" && r._start < c)
        return r;
      r = r._prev;
    }
}, Su = function(u, c, f, r) {
  var s = u._repeat, h = Zt(c) || 0, d = u._tTime / u._tDur;
  return d && !r && (u._time *= h / u._dur), u._dur = h, u._tDur = s ? s < 0 ? 1e10 : Zt(h * (s + 1) + u._rDelay * s) : h, d > 0 && !r && Ac(u, u._tTime = u._tDur * d), u.parent && zc(u), f || pa(u.parent, u), u;
}, X_ = function(u) {
  return u instanceof Ue ? pa(u) : Su(u, u._dur);
}, Dp = {
  _start: 0,
  endTime: Di,
  totalDuration: Di
}, hl = function m(u, c, f) {
  var r = u.labels, s = u._recent || Dp, h = u.duration() >= dl ? s.endTime(!1) : u._dur, d, g, y;
  return re(c) && (isNaN(c) || c in r) ? (g = c.charAt(0), y = c.substr(-1) === "%", d = c.indexOf("="), g === "<" || g === ">" ? (d >= 0 && (c = c.replace(/=/, "")), (g === "<" ? s._start : s.endTime(s._repeat >= 0)) + (parseFloat(c.substr(1)) || 0) * (y ? (d < 0 ? s : f).totalDuration() / 100 : 1)) : d < 0 ? (c in r || (r[c] = h), r[c]) : (g = parseFloat(c.charAt(d - 1) + c.substr(d + 1)), y && f && (g = g / 100 * (be(f) ? f[0] : f).totalDuration()), d > 1 ? m(u, c.substr(0, d - 1), f) + g : h + g)) : c == null ? h : +c;
}, Oi = function(u, c, f) {
  var r = an(c[1]), s = (r ? 2 : 1) + (u < 2 ? 0 : 1), h = c[s], d, g;
  if (r && (h.duration = c[1]), h.parent = f, u) {
    for (d = h, g = f; g && !("immediateRender" in d); )
      d = g.vars.defaults || {}, g = He(g.vars.inherit) && g.parent;
    h.immediateRender = He(d.immediateRender), u < 2 ? h.runBackwards = 1 : h.startAt = c[s - 1];
  }
  return new ne(c[0], h, c[s + 1]);
}, Qn = function(u, c) {
  return u || u === 0 ? c(u) : c;
}, Hi = function(u, c, f) {
  return f < u ? u : f > c ? c : f;
}, Se = function(u, c) {
  return !re(u) || !(c = gp.exec(u)) ? "" : c[1];
}, Np = function(u, c, f) {
  return Qn(f, function(r) {
    return Hi(u, c, r);
  });
}, Mo = [].slice, Ev = function(u, c) {
  return u && wl(u) && "length" in u && (!c && !u.length || u.length - 1 in u && wl(u[0])) && !u.nodeType && u !== Bl;
}, Cp = function(u, c, f) {
  return f === void 0 && (f = []), u.forEach(function(r) {
    var s;
    return re(r) && !c || Ev(r, 1) ? (s = f).push.apply(s, ml(r)) : f.push(r);
  }) || f;
}, ml = function(u, c, f) {
  return Lt && !c && Lt.selector ? Lt.selector(u) : re(u) && !f && (Eo || !bu()) ? Mo.call((c || Xo).querySelectorAll(u), 0) : be(u) ? Cp(u, f) : Ev(u) ? Mo.call(u, 0) : u ? [u] : [];
}, Do = function(u) {
  return u = ml(u)[0] || Mi("Invalid scope") || {}, function(c) {
    var f = u.current || u.nativeElement || u;
    return ml(c, f.querySelectorAll ? f : f === u ? Mi("Invalid scope") || Xo.createElement("div") : u);
  };
}, Ov = function(u) {
  return u.sort(function() {
    return 0.5 - Math.random();
  });
}, zv = function(u) {
  if ($t(u))
    return u;
  var c = wl(u) ? u : {
    each: u
  }, f = Ta(c.ease), r = c.from || 0, s = parseFloat(c.base) || 0, h = {}, d = r > 0 && r < 1, g = isNaN(r) || d, y = c.axis, v = r, p = r;
  return re(r) ? v = p = {
    center: 0.5,
    edges: 0.5,
    end: 1
  }[r] || 0 : !d && g && (v = r[0], p = r[1]), function(b, D, U) {
    var S = (U || c).length, R = h[S], V, w, Q, Z, G, F, B, H, j;
    if (!R) {
      if (j = c.grid === "auto" ? 0 : (c.grid || [1, dl])[1], !j) {
        for (B = -dl; B < (B = U[j++].getBoundingClientRect().left) && j < S; )
          ;
        j < S && j--;
      }
      for (R = h[S] = [], V = g ? Math.min(j, S) * v - 0.5 : r % j, w = j === dl ? 0 : g ? S * p / j - 0.5 : r / j | 0, B = 0, H = dl, F = 0; F < S; F++)
        Q = F % j - V, Z = w - (F / j | 0), R[F] = G = y ? Math.abs(y === "y" ? Z : Q) : fv(Q * Q + Z * Z), G > B && (B = G), G < H && (H = G);
      r === "random" && Ov(R), R.max = B - H, R.min = H, R.v = S = (parseFloat(c.amount) || parseFloat(c.each) * (j > S ? S - 1 : y ? y === "y" ? S / j : j : Math.max(j, S / j)) || 0) * (r === "edges" ? -1 : 1), R.b = S < 0 ? s - S : s, R.u = Se(c.amount || c.each) || 0, f = f && S < 0 ? Lp(f) : f;
    }
    return S = (R[b] - R.min) / R.max || 0, Zt(R.b + (f ? f(S) : S) * R.v) + R.u;
  };
}, No = function(u) {
  var c = Math.pow(10, ((u + "").split(".")[1] || "").length);
  return function(f) {
    var r = Zt(Math.round(parseFloat(f) / u) * u * c);
    return (r - r % 1) / c + (an(f) ? 0 : Se(f));
  };
}, Av = function(u, c) {
  var f = be(u), r, s;
  return !f && wl(u) && (r = f = u.radius || dl, u.values ? (u = ml(u.values), (s = !an(u[0])) && (r *= r)) : u = No(u.increment)), Qn(c, f ? $t(u) ? function(h) {
    return s = u(h), Math.abs(s - h) <= r ? s : h;
  } : function(h) {
    for (var d = parseFloat(s ? h.x : h), g = parseFloat(s ? h.y : 0), y = dl, v = 0, p = u.length, b, D; p--; )
      s ? (b = u[p].x - d, D = u[p].y - g, b = b * b + D * D) : b = Math.abs(u[p] - d), b < y && (y = b, v = p);
    return v = !r || y <= r ? u[v] : h, s || v === h || an(h) ? v : v + Se(h);
  } : No(u));
}, Mv = function(u, c, f, r) {
  return Qn(be(u) ? !c : f === !0 ? !!(f = 0) : !r, function() {
    return be(u) ? u[~~(Math.random() * u.length)] : (f = f || 1e-5) && (r = f < 1 ? Math.pow(10, (f + "").length - 2) : 1) && Math.floor(Math.round((u - f / 2 + Math.random() * (c - u + f * 0.99)) / f) * f * r) / r;
  });
}, Rp = function() {
  for (var u = arguments.length, c = new Array(u), f = 0; f < u; f++)
    c[f] = arguments[f];
  return function(r) {
    return c.reduce(function(s, h) {
      return h(s);
    }, r);
  };
}, xp = function(u, c) {
  return function(f) {
    return u(parseFloat(f)) + (c || Se(f));
  };
}, Up = function(u, c, f) {
  return Nv(u, c, 0, 1, f);
}, Dv = function(u, c, f) {
  return Qn(f, function(r) {
    return u[~~c(r)];
  });
}, Hp = function m(u, c, f) {
  var r = c - u;
  return be(u) ? Dv(u, m(0, u.length), c) : Qn(f, function(s) {
    return (r + (s - u) % r) % r + u;
  });
}, Bp = function m(u, c, f) {
  var r = c - u, s = r * 2;
  return be(u) ? Dv(u, m(0, u.length - 1), c) : Qn(f, function(h) {
    return h = (s + (h - u) % s) % s || 0, u + (h > r ? s - h : h);
  });
}, Ni = function(u) {
  return u.replace(mp, function(c) {
    var f = c.indexOf("[") + 1, r = c.substring(f || 7, f ? c.indexOf("]") : c.length - 1).split(_p);
    return Mv(f ? r : +r[0], f ? 0 : +r[1], +r[2] || 1e-5);
  });
}, Nv = function(u, c, f, r, s) {
  var h = c - u, d = r - f;
  return Qn(s, function(g) {
    return f + ((g - u) / h * d || 0);
  });
}, Yp = function m(u, c, f, r) {
  var s = isNaN(u + c) ? 0 : function(D) {
    return (1 - D) * u + D * c;
  };
  if (!s) {
    var h = re(u), d = {}, g, y, v, p, b;
    if (f === !0 && (r = 1) && (f = null), h)
      u = {
        p: u
      }, c = {
        p: c
      };
    else if (be(u) && !be(c)) {
      for (v = [], p = u.length, b = p - 2, y = 1; y < p; y++)
        v.push(m(u[y - 1], u[y]));
      p--, s = function(U) {
        U *= p;
        var S = Math.min(b, ~~U);
        return v[S](U - S);
      }, f = c;
    } else r || (u = pu(be(u) ? [] : {}, u));
    if (!v) {
      for (g in c)
        Jo.call(d, u, g, "get", c[g]);
      s = function(U) {
        return Wo(U, d) || (h ? u.p : u);
      };
    }
  }
  return Qn(f, s);
}, V_ = function(u, c, f) {
  var r = u.labels, s = dl, h, d, g;
  for (h in r)
    d = r[h] - c, d < 0 == !!f && d && s > (d = Math.abs(d)) && (g = h, s = d);
  return g;
}, Ie = function(u, c, f) {
  var r = u.vars, s = r[c], h = Lt, d = u._ctx, g, y, v;
  if (s)
    return g = r[c + "Params"], y = r.callbackScope || u, f && Gn.length && yc(), d && (Lt = d), v = g ? s.apply(y, g) : s.call(y), Lt = h, v;
}, Si = function(u) {
  return Xn(u), u.scrollTrigger && u.scrollTrigger.kill(!!pe), u.progress() < 1 && Ie(u, "onInterrupt"), u;
}, _u, Cv = [], Rv = function(u) {
  if (u)
    if (u = !u.name && u.default || u, jo() || u.headless) {
      var c = u.name, f = $t(u), r = c && !f && u.init ? function() {
        this._props = [];
      } : u, s = {
        init: Di,
        render: Wo,
        add: Jo,
        kill: Pp,
        modifier: Ip,
        rawVars: 0
      }, h = {
        targetTest: 0,
        get: 0,
        getSetter: $o,
        aliases: {},
        register: 0
      };
      if (bu(), u !== r) {
        if ($e[c])
          return;
        ll(r, ll(pc(u, s), h)), pu(r.prototype, pu(s, pc(u, h))), $e[r.prop = c] = r, u.targetTest && (_c.push(r), Lo[c] = 1), c = (c === "css" ? "CSS" : c.charAt(0).toUpperCase() + c.substr(1)) + "Plugin";
      }
      dv(c, r), u.register && u.register(we, r, Ye);
    } else
      Cv.push(u);
}, qt = 255, bi = {
  aqua: [0, qt, qt],
  lime: [0, qt, 0],
  silver: [192, 192, 192],
  black: [0, 0, 0],
  maroon: [128, 0, 0],
  teal: [0, 128, 128],
  blue: [0, 0, qt],
  navy: [0, 0, 128],
  white: [qt, qt, qt],
  olive: [128, 128, 0],
  yellow: [qt, qt, 0],
  orange: [qt, 165, 0],
  gray: [128, 128, 128],
  purple: [128, 0, 128],
  green: [0, 128, 0],
  red: [qt, 0, 0],
  pink: [qt, 192, 203],
  cyan: [0, qt, qt],
  transparent: [qt, qt, qt, 0]
}, vo = function(u, c, f) {
  return u += u < 0 ? 1 : u > 1 ? -1 : 0, (u * 6 < 1 ? c + (f - c) * u * 6 : u < 0.5 ? f : u * 3 < 2 ? c + (f - c) * (2 / 3 - u) * 6 : c) * qt + 0.5 | 0;
}, xv = function(u, c, f) {
  var r = u ? an(u) ? [u >> 16, u >> 8 & qt, u & qt] : 0 : bi.black, s, h, d, g, y, v, p, b, D, U;
  if (!r) {
    if (u.substr(-1) === "," && (u = u.substr(0, u.length - 1)), bi[u])
      r = bi[u];
    else if (u.charAt(0) === "#") {
      if (u.length < 6 && (s = u.charAt(1), h = u.charAt(2), d = u.charAt(3), u = "#" + s + s + h + h + d + d + (u.length === 5 ? u.charAt(4) + u.charAt(4) : "")), u.length === 9)
        return r = parseInt(u.substr(1, 6), 16), [r >> 16, r >> 8 & qt, r & qt, parseInt(u.substr(7), 16) / 255];
      u = parseInt(u.substr(1), 16), r = [u >> 16, u >> 8 & qt, u & qt];
    } else if (u.substr(0, 3) === "hsl") {
      if (r = U = u.match(q_), !c)
        g = +r[0] % 360 / 360, y = +r[1] / 100, v = +r[2] / 100, h = v <= 0.5 ? v * (y + 1) : v + y - v * y, s = v * 2 - h, r.length > 3 && (r[3] *= 1), r[0] = vo(g + 1 / 3, s, h), r[1] = vo(g, s, h), r[2] = vo(g - 1 / 3, s, h);
      else if (~u.indexOf("="))
        return r = u.match(rv), f && r.length < 4 && (r[3] = 1), r;
    } else
      r = u.match(q_) || bi.transparent;
    r = r.map(Number);
  }
  return c && !U && (s = r[0] / qt, h = r[1] / qt, d = r[2] / qt, p = Math.max(s, h, d), b = Math.min(s, h, d), v = (p + b) / 2, p === b ? g = y = 0 : (D = p - b, y = v > 0.5 ? D / (2 - p - b) : D / (p + b), g = p === s ? (h - d) / D + (h < d ? 6 : 0) : p === h ? (d - s) / D + 2 : (s - h) / D + 4, g *= 60), r[0] = ~~(g + 0.5), r[1] = ~~(y * 100 + 0.5), r[2] = ~~(v * 100 + 0.5)), f && r.length < 4 && (r[3] = 1), r;
}, Uv = function(u) {
  var c = [], f = [], r = -1;
  return u.split(jn).forEach(function(s) {
    var h = s.match(mu) || [];
    c.push.apply(c, h), f.push(r += h.length + 1);
  }), c.c = f, c;
}, L_ = function(u, c, f) {
  var r = "", s = (u + r).match(jn), h = c ? "hsla(" : "rgba(", d = 0, g, y, v, p;
  if (!s)
    return u;
  if (s = s.map(function(b) {
    return (b = xv(b, c, 1)) && h + (c ? b[0] + "," + b[1] + "%," + b[2] + "%," + b[3] : b.join(",")) + ")";
  }), f && (v = Uv(u), g = f.c, g.join(r) !== v.c.join(r)))
    for (y = u.replace(jn, "1").split(mu), p = y.length - 1; d < p; d++)
      r += y[d] + (~g.indexOf(d) ? s.shift() || h + "0,0,0,0)" : (v.length ? v : s.length ? s : f).shift());
  if (!y)
    for (y = u.split(jn), p = y.length - 1; d < p; d++)
      r += y[d] + s[d];
  return r + y[p];
}, jn = (function() {
  var m = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", u;
  for (u in bi)
    m += "|" + u + "\\b";
  return new RegExp(m + ")", "gi");
})(), qp = /hsl[a]?\(/, Hv = function(u) {
  var c = u.join(" "), f;
  if (jn.lastIndex = 0, jn.test(c))
    return f = qp.test(c), u[1] = L_(u[1], f), u[0] = L_(u[0], f, Uv(u[1])), !0;
}, Ci, We = (function() {
  var m = Date.now, u = 500, c = 33, f = m(), r = f, s = 1e3 / 240, h = s, d = [], g, y, v, p, b, D, U = function S(R) {
    var V = m() - r, w = R === !0, Q, Z, G, F;
    if ((V > u || V < 0) && (f += V - c), r += V, G = r - f, Q = G - h, (Q > 0 || w) && (F = ++p.frame, b = G - p.time * 1e3, p.time = G = G / 1e3, h += Q + (Q >= s ? 4 : s - Q), Z = 1), w || (g = y(S)), Z)
      for (D = 0; D < d.length; D++)
        d[D](G, b, F, R);
  };
  return p = {
    time: 0,
    frame: 0,
    tick: function() {
      U(!0);
    },
    deltaRatio: function(R) {
      return b / (1e3 / (R || 60));
    },
    wake: function() {
      ov && (!Eo && jo() && (Bl = Eo = window, Xo = Bl.document || {}, el.gsap = we, (Bl.gsapVersions || (Bl.gsapVersions = [])).push(we.version), hv(gc || Bl.GreenSockGlobals || !Bl.gsap && Bl || {}), Cv.forEach(Rv)), v = typeof requestAnimationFrame < "u" && requestAnimationFrame, g && p.sleep(), y = v || function(R) {
        return setTimeout(R, h - p.time * 1e3 + 1 | 0);
      }, Ci = 1, U(2));
    },
    sleep: function() {
      (v ? cancelAnimationFrame : clearTimeout)(g), Ci = 0, y = Di;
    },
    lagSmoothing: function(R, V) {
      u = R || 1 / 0, c = Math.min(V || 33, u);
    },
    fps: function(R) {
      s = 1e3 / (R || 240), h = p.time * 1e3 + s;
    },
    add: function(R, V, w) {
      var Q = V ? function(Z, G, F, B) {
        R(Z, G, F, B), p.remove(Q);
      } : R;
      return p.remove(R), d[w ? "unshift" : "push"](Q), bu(), Q;
    },
    remove: function(R, V) {
      ~(V = d.indexOf(R)) && d.splice(V, 1) && D >= V && D--;
    },
    _listeners: d
  }, p;
})(), bu = function() {
  return !Ci && We.wake();
}, At = {}, wp = /^[\d.\-M][\d.\-,\s]/, Gp = /["']/g, jp = function(u) {
  for (var c = {}, f = u.substr(1, u.length - 3).split(":"), r = f[0], s = 1, h = f.length, d, g, y; s < h; s++)
    g = f[s], d = s !== h - 1 ? g.lastIndexOf(",") : g.length, y = g.substr(0, d), c[r] = isNaN(y) ? y.replace(Gp, "").trim() : +y, r = g.substr(d + 1).trim();
  return c;
}, Xp = function(u) {
  var c = u.indexOf("(") + 1, f = u.indexOf(")"), r = u.indexOf("(", c);
  return u.substring(c, ~r && r < f ? u.indexOf(")", f + 1) : f);
}, Vp = function(u) {
  var c = (u + "").split("("), f = At[c[0]];
  return f && c.length > 1 && f.config ? f.config.apply(null, ~u.indexOf("{") ? [jp(c[1])] : Xp(u).split(",").map(gv)) : At._CE && wp.test(u) ? At._CE("", u) : f;
}, Lp = function(u) {
  return function(c) {
    return 1 - u(1 - c);
  };
}, Ta = function(u, c) {
  return u && ($t(u) ? u : At[u] || Vp(u)) || c;
}, ba = function(u, c, f, r) {
  f === void 0 && (f = function(g) {
    return 1 - c(1 - g);
  }), r === void 0 && (r = function(g) {
    return g < 0.5 ? c(g * 2) / 2 : 1 - c((1 - g) * 2) / 2;
  });
  var s = {
    easeIn: c,
    easeOut: f,
    easeInOut: r
  }, h;
  return Be(u, function(d) {
    At[d] = el[d] = s, At[h = d.toLowerCase()] = f;
    for (var g in s)
      At[h + (g === "easeIn" ? ".in" : g === "easeOut" ? ".out" : ".inOut")] = At[d + "." + g] = s[g];
  }), s;
}, Bv = function(u) {
  return function(c) {
    return c < 0.5 ? (1 - u(1 - c * 2)) / 2 : 0.5 + u((c - 0.5) * 2) / 2;
  };
}, go = function m(u, c, f) {
  var r = c >= 1 ? c : 1, s = (f || (u ? 0.3 : 0.45)) / (c < 1 ? c : 1), h = s / bo * (Math.asin(1 / r) || 0), d = function(v) {
    return v === 1 ? 1 : r * Math.pow(2, -10 * v) * dp((v - h) * s) + 1;
  }, g = u === "out" ? d : u === "in" ? function(y) {
    return 1 - d(1 - y);
  } : Bv(d);
  return s = bo / s, g.config = function(y, v) {
    return m(u, y, v);
  }, g;
}, yo = function m(u, c) {
  c === void 0 && (c = 1.70158);
  var f = function(h) {
    return h ? --h * h * ((c + 1) * h + c) + 1 : 0;
  }, r = u === "out" ? f : u === "in" ? function(s) {
    return 1 - f(1 - s);
  } : Bv(f);
  return r.config = function(s) {
    return m(u, s);
  }, r;
};
Be("Linear,Quad,Cubic,Quart,Quint,Strong", function(m, u) {
  var c = u < 5 ? u + 1 : u;
  ba(m + ",Power" + (c - 1), u ? function(f) {
    return Math.pow(f, c);
  } : function(f) {
    return f;
  }, function(f) {
    return 1 - Math.pow(1 - f, c);
  }, function(f) {
    return f < 0.5 ? Math.pow(f * 2, c) / 2 : 1 - Math.pow((1 - f) * 2, c) / 2;
  });
});
At.Linear.easeNone = At.none = At.Linear.easeIn;
ba("Elastic", go("in"), go("out"), go());
(function(m, u) {
  var c = 1 / u, f = 2 * c, r = 2.5 * c, s = function(d) {
    return d < c ? m * d * d : d < f ? m * Math.pow(d - 1.5 / u, 2) + 0.75 : d < r ? m * (d -= 2.25 / u) * d + 0.9375 : m * Math.pow(d - 2.625 / u, 2) + 0.984375;
  };
  ba("Bounce", function(h) {
    return 1 - s(1 - h);
  }, s);
})(7.5625, 2.75);
ba("Expo", function(m) {
  return Math.pow(2, 10 * (m - 1)) * m + m * m * m * m * m * m * (1 - m);
});
ba("Circ", function(m) {
  return -(fv(1 - m * m) - 1);
});
ba("Sine", function(m) {
  return m === 1 ? 1 : -hp(m * sp) + 1;
});
ba("Back", yo("in"), yo("out"), yo());
At.SteppedEase = At.steps = el.SteppedEase = {
  config: function(u, c) {
    u === void 0 && (u = 1);
    var f = 1 / u, r = u + (c ? 0 : 1), s = c ? 1 : 0, h = 1 - wt;
    return function(d) {
      return ((r * Hi(0, h, d) | 0) + s) * f;
    };
  }
};
Ai.ease = At["quad.out"];
Be("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(m) {
  return Qo += m + "," + m + "Params,";
});
var Yv = function(u, c) {
  this.id = op++, u._gsap = this, this.target = u, this.harness = c, this.get = c ? c.get : _v, this.set = c ? c.getSetter : $o;
}, Ri = /* @__PURE__ */ (function() {
  function m(c) {
    this.vars = c, this._delay = +c.delay || 0, (this._repeat = c.repeat === 1 / 0 ? -2 : c.repeat || 0) && (this._rDelay = c.repeatDelay || 0, this._yoyo = !!c.yoyo || !!c.yoyoEase), this._ts = 1, Su(this, +c.duration, 1, 1), this.data = c.data, Lt && (this._ctx = Lt, Lt.data.push(this)), Ci || We.wake();
  }
  var u = m.prototype;
  return u.delay = function(f) {
    return f || f === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + f - this._delay), this._delay = f, this) : this._delay;
  }, u.duration = function(f) {
    return arguments.length ? this.totalDuration(this._repeat > 0 ? f + (f + this._rDelay) * this._repeat : f) : this.totalDuration() && this._dur;
  }, u.totalDuration = function(f) {
    return arguments.length ? (this._dirty = 0, Su(this, this._repeat < 0 ? f : (f - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur;
  }, u.totalTime = function(f, r) {
    if (bu(), !arguments.length)
      return this._tTime;
    var s = this._dp;
    if (s && s.smoothChildTiming && this._ts) {
      for (Ac(this, f), !s._dp || s.parent || Tv(s, this); s && s.parent; )
        s.parent._time !== s._start + (s._ts >= 0 ? s._tTime / s._ts : (s.totalDuration() - s._tTime) / -s._ts) && s.totalTime(s._tTime, !0), s = s.parent;
      !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && f < this._tDur || this._ts < 0 && f > 0 || !this._tDur && !f) && Yl(this._dp, this, this._start - this._delay);
    }
    return (this._tTime !== f || !this._dur && !r || this._initted && Math.abs(this._zTime) === wt || !this._initted && this._dur && f || !f && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = f), vv(this, f, r)), this;
  }, u.time = function(f, r) {
    return arguments.length ? this.totalTime(Math.min(this.totalDuration(), f + j_(this)) % (this._dur + this._rDelay) || (f ? this._dur : 0), r) : this._time;
  }, u.totalProgress = function(f, r) {
    return arguments.length ? this.totalTime(this.totalDuration() * f, r) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() >= 0 && this._initted ? 1 : 0;
  }, u.progress = function(f, r) {
    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - f : f) + j_(this), r) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0;
  }, u.iteration = function(f, r) {
    var s = this.duration() + this._rDelay;
    return arguments.length ? this.totalTime(this._time + (f - 1) * s, r) : this._repeat ? Tu(this._tTime, s) + 1 : 1;
  }, u.timeScale = function(f, r) {
    if (!arguments.length)
      return this._rts === -wt ? 0 : this._rts;
    if (this._rts === f)
      return this;
    var s = this.parent && this._ts ? Tc(this.parent._time, this) : this._tTime;
    return this._rts = +f || 0, this._ts = this._ps || f === -wt ? 0 : this._rts, this.totalTime(Hi(-Math.abs(this._delay), this.totalDuration(), s), r !== !1), zc(this), Ep(this);
  }, u.paused = function(f) {
    return arguments.length ? (this._ps !== f && (this._ps = f, f ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (bu(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== wt && (this._tTime -= wt)))), this) : this._ps;
  }, u.startTime = function(f) {
    if (arguments.length) {
      this._start = Zt(f);
      var r = this.parent || this._dp;
      return r && (r._sort || !this.parent) && Yl(r, this, this._start - this._delay), this;
    }
    return this._start;
  }, u.endTime = function(f) {
    return this._start + (He(f) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
  }, u.rawTime = function(f) {
    var r = this.parent || this._dp;
    return r ? f && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? Tc(r.rawTime(f), this) : this._tTime : this._tTime;
  }, u.revert = function(f) {
    f === void 0 && (f = pp);
    var r = pe;
    return pe = f, Ko(this) && (this.timeline && this.timeline.revert(f), this.totalTime(-0.01, f.suppressEvents)), this.data !== "nested" && f.kill !== !1 && this.kill(), pe = r, this;
  }, u.globalTime = function(f) {
    for (var r = this, s = arguments.length ? f : r.rawTime(); r; )
      s = r._start + s / (Math.abs(r._ts) || 1), r = r._dp;
    return !this.parent && this._sat ? this._sat.globalTime(f) : s;
  }, u.repeat = function(f) {
    return arguments.length ? (this._repeat = f === 1 / 0 ? -2 : f, X_(this)) : this._repeat === -2 ? 1 / 0 : this._repeat;
  }, u.repeatDelay = function(f) {
    if (arguments.length) {
      var r = this._time;
      return this._rDelay = f, X_(this), r ? this.time(r) : this;
    }
    return this._rDelay;
  }, u.yoyo = function(f) {
    return arguments.length ? (this._yoyo = f, this) : this._yoyo;
  }, u.seek = function(f, r) {
    return this.totalTime(hl(this, f), He(r));
  }, u.restart = function(f, r) {
    return this.play().totalTime(f ? -this._delay : 0, He(r)), this._dur || (this._zTime = -wt), this;
  }, u.play = function(f, r) {
    return f != null && this.seek(f, r), this.reversed(!1).paused(!1);
  }, u.reverse = function(f, r) {
    return f != null && this.seek(f || this.totalDuration(), r), this.reversed(!0).paused(!1);
  }, u.pause = function(f, r) {
    return f != null && this.seek(f, r), this.paused(!0);
  }, u.resume = function() {
    return this.paused(!1);
  }, u.reversed = function(f) {
    return arguments.length ? (!!f !== this.reversed() && this.timeScale(-this._rts || (f ? -wt : 0)), this) : this._rts < 0;
  }, u.invalidate = function() {
    return this._initted = this._act = 0, this._zTime = -wt, this;
  }, u.isActive = function() {
    var f = this.parent || this._dp, r = this._start, s;
    return !!(!f || this._ts && this._initted && f.isActive() && (s = f.rawTime(!0)) >= r && s < this.endTime(!0) - wt);
  }, u.eventCallback = function(f, r, s) {
    var h = this.vars;
    return arguments.length > 1 ? (r ? (h[f] = r, s && (h[f + "Params"] = s), f === "onUpdate" && (this._onUpdate = r)) : delete h[f], this) : h[f];
  }, u.then = function(f) {
    var r = this, s = r._prom;
    return new Promise(function(h) {
      var d = $t(f) ? f : yv, g = function() {
        var v = r.then;
        r.then = null, s && s(), $t(d) && (d = d(r)) && (d.then || d === r) && (r.then = v), h(d), r.then = v;
      };
      r._initted && r.totalProgress() === 1 && r._ts >= 0 || !r._tTime && r._ts < 0 ? g() : r._prom = g;
    });
  }, u.kill = function() {
    Si(this);
  }, m;
})();
ll(Ri.prototype, {
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
  _zTime: -wt,
  _prom: 0,
  _ps: !1,
  _rts: 1
});
var Ue = /* @__PURE__ */ (function(m) {
  iv(u, m);
  function u(f, r) {
    var s;
    return f === void 0 && (f = {}), s = m.call(this, f) || this, s.labels = {}, s.smoothChildTiming = !!f.smoothChildTiming, s.autoRemoveChildren = !!f.autoRemoveChildren, s._sort = He(f.sortChildren), Kt && Yl(f.parent || Kt, ln(s), r), f.reversed && s.reverse(), f.paused && s.paused(!0), f.scrollTrigger && Sv(ln(s), f.scrollTrigger), s;
  }
  var c = u.prototype;
  return c.to = function(r, s, h) {
    return Oi(0, arguments, this), this;
  }, c.from = function(r, s, h) {
    return Oi(1, arguments, this), this;
  }, c.fromTo = function(r, s, h, d) {
    return Oi(2, arguments, this), this;
  }, c.set = function(r, s, h) {
    return s.duration = 0, s.parent = this, Ei(s).repeatDelay || (s.repeat = 0), s.immediateRender = !!s.immediateRender, new ne(r, s, hl(this, h), 1), this;
  }, c.call = function(r, s, h) {
    return Yl(this, ne.delayedCall(0, r, s), h);
  }, c.staggerTo = function(r, s, h, d, g, y, v) {
    return h.duration = s, h.stagger = h.stagger || d, h.onComplete = y, h.onCompleteParams = v, h.parent = this, new ne(r, h, hl(this, g)), this;
  }, c.staggerFrom = function(r, s, h, d, g, y, v) {
    return h.runBackwards = 1, Ei(h).immediateRender = He(h.immediateRender), this.staggerTo(r, s, h, d, g, y, v);
  }, c.staggerFromTo = function(r, s, h, d, g, y, v, p) {
    return d.startAt = h, Ei(d).immediateRender = He(d.immediateRender), this.staggerTo(r, s, d, g, y, v, p);
  }, c.render = function(r, s, h) {
    var d = this._time, g = this._dirty ? this.totalDuration() : this._tDur, y = this._dur, v = r <= 0 ? 0 : Zt(r), p = this._zTime < 0 != r < 0 && (this._initted || !y), b, D, U, S, R, V, w, Q, Z, G, F, B;
    if (this !== Kt && v > g && r >= 0 && (v = g), v !== this._tTime || h || p) {
      if (d !== this._time && y && (v += this._time - d, r += this._time - d), b = v, Z = this._start, Q = this._ts, V = !Q, p && (y || (d = this._zTime), (r || !s) && (this._zTime = r)), this._repeat) {
        if (F = this._yoyo, R = y + this._rDelay, this._repeat < -1 && r < 0)
          return this.totalTime(R * 100 + r, s, h);
        if (b = Zt(v % R), v === g ? (S = this._repeat, b = y) : (G = Zt(v / R), S = ~~G, S && S === G && (b = y, S--), b > y && (b = y)), G = Tu(this._tTime, R), !d && this._tTime && G !== S && this._tTime - G * R - this._dur <= 0 && (G = S), F && S & 1 && (b = y - b, B = 1), S !== G && !this._lock) {
          var H = F && G & 1, j = H === (F && S & 1);
          if (S < G && (H = !H), d = H ? 0 : v % y ? y : v, this._lock = 1, this.render(d || (B ? 0 : Zt(S * R)), s, !y)._lock = 0, this._tTime = v, !s && this.parent && Ie(this, "onRepeat"), this.vars.repeatRefresh && !B && (this.invalidate()._lock = 1, G = S), d && d !== this._time || V !== !this._ts || this.vars.onRepeat && !this.parent && !this._act)
            return this;
          if (y = this._dur, g = this._tDur, j && (this._lock = 2, d = H ? y : -1e-4, this.render(d, !0), this.vars.repeatRefresh && !B && this.invalidate()), this._lock = 0, !this._ts && !V)
            return this;
        }
      }
      if (this._hasPause && !this._forcing && this._lock < 2 && (w = Mp(this, Zt(d), Zt(b)), w && (v -= b - (b = w._start))), this._tTime = v, this._time = b, this._act = !!Q, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = r, d = 0), !d && v && y && !s && !G && (Ie(this, "onStart"), this._tTime !== v))
        return this;
      if (b >= d && r >= 0)
        for (D = this._first; D; ) {
          if (U = D._next, (D._act || b >= D._start) && D._ts && w !== D) {
            if (D.parent !== this)
              return this.render(r, s, h);
            if (D.render(D._ts > 0 ? (b - D._start) * D._ts : (D._dirty ? D.totalDuration() : D._tDur) + (b - D._start) * D._ts, s, h), b !== this._time || !this._ts && !V) {
              w = 0, U && (v += this._zTime = -wt);
              break;
            }
          }
          D = U;
        }
      else {
        D = this._last;
        for (var k = r < 0 ? r : b; D; ) {
          if (U = D._prev, (D._act || k <= D._end) && D._ts && w !== D) {
            if (D.parent !== this)
              return this.render(r, s, h);
            if (D.render(D._ts > 0 ? (k - D._start) * D._ts : (D._dirty ? D.totalDuration() : D._tDur) + (k - D._start) * D._ts, s, h || pe && Ko(D)), b !== this._time || !this._ts && !V) {
              w = 0, U && (v += this._zTime = k ? -wt : wt);
              break;
            }
          }
          D = U;
        }
      }
      if (w && !s && (this.pause(), w.render(b >= d ? 0 : -wt)._zTime = b >= d ? 1 : -1, this._ts))
        return this._start = Z, zc(this), this.render(r, s, h);
      this._onUpdate && !s && Ie(this, "onUpdate", !0), (v === g && this._tTime >= this.totalDuration() || !v && d) && (Z === this._start || Math.abs(Q) !== Math.abs(this._ts)) && (this._lock || ((r || !y) && (v === g && this._ts > 0 || !v && this._ts < 0) && Xn(this, 1), !s && !(r < 0 && !d) && (v || d || !g) && (Ie(this, v === g && r >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(v < g && this.timeScale() > 0) && this._prom())));
    }
    return this;
  }, c.add = function(r, s) {
    var h = this;
    if (an(s) || (s = hl(this, s, r)), !(r instanceof Ri)) {
      if (be(r))
        return r.forEach(function(d) {
          return h.add(d, s);
        }), this;
      if (re(r))
        return this.addLabel(r, s);
      if ($t(r))
        r = ne.delayedCall(0, r);
      else
        return this;
    }
    return this !== r ? Yl(this, r, s) : this;
  }, c.getChildren = function(r, s, h, d) {
    r === void 0 && (r = !0), s === void 0 && (s = !0), h === void 0 && (h = !0), d === void 0 && (d = -dl);
    for (var g = [], y = this._first; y; )
      y._start >= d && (y instanceof ne ? s && g.push(y) : (h && g.push(y), r && g.push.apply(g, y.getChildren(!0, s, h)))), y = y._next;
    return g;
  }, c.getById = function(r) {
    for (var s = this.getChildren(1, 1, 1), h = s.length; h--; )
      if (s[h].vars.id === r)
        return s[h];
  }, c.remove = function(r) {
    return re(r) ? this.removeLabel(r) : $t(r) ? this.killTweensOf(r) : (r.parent === this && Oc(this, r), r === this._recent && (this._recent = this._last), pa(this));
  }, c.totalTime = function(r, s) {
    return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = Zt(We.time - (this._ts > 0 ? r / this._ts : (this.totalDuration() - r) / -this._ts))), m.prototype.totalTime.call(this, r, s), this._forcing = 0, this) : this._tTime;
  }, c.addLabel = function(r, s) {
    return this.labels[r] = hl(this, s), this;
  }, c.removeLabel = function(r) {
    return delete this.labels[r], this;
  }, c.addPause = function(r, s, h) {
    var d = ne.delayedCall(0, s || Di, h);
    return d.data = "isPause", this._hasPause = 1, Yl(this, d, hl(this, r));
  }, c.removePause = function(r) {
    var s = this._first;
    for (r = hl(this, r); s; )
      s._start === r && s.data === "isPause" && Xn(s), s = s._next;
  }, c.killTweensOf = function(r, s, h) {
    for (var d = this.getTweensOf(r, h), g = d.length; g--; )
      Yn !== d[g] && d[g].kill(r, s);
    return this;
  }, c.getTweensOf = function(r, s) {
    for (var h = [], d = ml(r), g = this._first, y = an(s), v; g; )
      g instanceof ne ? Tp(g._targets, d) && (y ? (!Yn || g._initted && g._ts) && g.globalTime(0) <= s && g.globalTime(g.totalDuration()) > s : !s || g.isActive()) && h.push(g) : (v = g.getTweensOf(d, s)).length && h.push.apply(h, v), g = g._next;
    return h;
  }, c.tweenTo = function(r, s) {
    s = s || {};
    var h = this, d = hl(h, r), g = s, y = g.startAt, v = g.onStart, p = g.onStartParams, b = g.immediateRender, D, U = ne.to(h, ll({
      ease: s.ease || "none",
      lazy: !1,
      immediateRender: !1,
      time: d,
      overwrite: "auto",
      duration: s.duration || Math.abs((d - (y && "time" in y ? y.time : h._time)) / h.timeScale()) || wt,
      onStart: function() {
        if (h.pause(), !D) {
          var R = s.duration || Math.abs((d - (y && "time" in y ? y.time : h._time)) / h.timeScale());
          U._dur !== R && Su(U, R, 0, 1).render(U._time, !0, !0), D = 1;
        }
        v && v.apply(U, p || []);
      }
    }, s));
    return b ? U.render(0) : U;
  }, c.tweenFromTo = function(r, s, h) {
    return this.tweenTo(s, ll({
      startAt: {
        time: hl(this, r)
      }
    }, h));
  }, c.recent = function() {
    return this._recent;
  }, c.nextLabel = function(r) {
    return r === void 0 && (r = this._time), V_(this, hl(this, r));
  }, c.previousLabel = function(r) {
    return r === void 0 && (r = this._time), V_(this, hl(this, r), 1);
  }, c.currentLabel = function(r) {
    return arguments.length ? this.seek(r, !0) : this.previousLabel(this._time + wt);
  }, c.shiftChildren = function(r, s, h) {
    h === void 0 && (h = 0);
    var d = this._first, g = this.labels, y;
    for (r = Zt(r); d; )
      d._start >= h && (d._start += r, d._end += r), d = d._next;
    if (s)
      for (y in g)
        g[y] >= h && (g[y] += r);
    return pa(this);
  }, c.invalidate = function(r) {
    var s = this._first;
    for (this._lock = 0; s; )
      s.invalidate(r), s = s._next;
    return m.prototype.invalidate.call(this, r);
  }, c.clear = function(r) {
    r === void 0 && (r = !0);
    for (var s = this._first, h; s; )
      h = s._next, this.remove(s), s = h;
    return this._dp && (this._time = this._tTime = this._pTime = 0), r && (this.labels = {}), pa(this);
  }, c.totalDuration = function(r) {
    var s = 0, h = this, d = h._last, g = dl, y, v, p;
    if (arguments.length)
      return h.timeScale((h._repeat < 0 ? h.duration() : h.totalDuration()) / (h.reversed() ? -r : r));
    if (h._dirty) {
      for (p = h.parent; d; )
        y = d._prev, d._dirty && d.totalDuration(), v = d._start, v > g && h._sort && d._ts && !h._lock ? (h._lock = 1, Yl(h, d, v - d._delay, 1)._lock = 0) : g = v, v < 0 && d._ts && (s -= v, (!p && !h._dp || p && p.smoothChildTiming) && (h._start += Zt(v / h._ts), h._time -= v, h._tTime -= v), h.shiftChildren(-v, !1, -1 / 0), g = 0), d._end > s && d._ts && (s = d._end), d = y;
      Su(h, h === Kt && h._time > s ? h._time : s, 1, 1), h._dirty = 0;
    }
    return h._tDur;
  }, u.updateRoot = function(r) {
    if (Kt._ts && (vv(Kt, Tc(r, Kt)), mv = We.frame), We.frame >= w_) {
      w_ += tl.autoSleep || 120;
      var s = Kt._first;
      if ((!s || !s._ts) && tl.autoSleep && We._listeners.length < 2) {
        for (; s && !s._ts; )
          s = s._next;
        s || We.sleep();
      }
    }
  }, u;
})(Ri);
ll(Ue.prototype, {
  _lock: 0,
  _hasPause: 0,
  _forcing: 0
});
var Qp = function(u, c, f, r, s, h, d) {
  var g = new Ye(this._pt, u, c, 0, 1, Vv, null, s), y = 0, v = 0, p, b, D, U, S, R, V, w;
  for (g.b = f, g.e = r, f += "", r += "", (V = ~r.indexOf("random(")) && (r = Ni(r)), h && (w = [f, r], h(w, u, c), f = w[0], r = w[1]), b = f.match(mo) || []; p = mo.exec(r); )
    U = p[0], S = r.substring(y, p.index), D ? D = (D + 1) % 5 : S.substr(-5) === "rgba(" && (D = 1), U !== b[v++] && (R = parseFloat(b[v - 1]) || 0, g._pt = {
      _next: g._pt,
      p: S || v === 1 ? S : ",",
      //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
      s: R,
      c: U.charAt(1) === "=" ? vu(R, U) - R : parseFloat(U) - R,
      m: D && D < 4 ? Math.round : 0
    }, y = mo.lastIndex);
  return g.c = y < r.length ? r.substring(y, r.length) : "", g.fp = d, (sv.test(r) || V) && (g.e = 0), this._pt = g, g;
}, Jo = function(u, c, f, r, s, h, d, g, y, v) {
  $t(r) && (r = r(s || 0, u, h));
  var p = u[c], b = f !== "get" ? f : $t(p) ? y ? u[c.indexOf("set") || !$t(u["get" + c.substr(3)]) ? c : "get" + c.substr(3)](y) : u[c]() : p, D = $t(p) ? y ? kp : jv : ko, U;
  if (re(r) && (~r.indexOf("random(") && (r = Ni(r)), r.charAt(1) === "=" && (U = vu(b, r) + (Se(b) || 0), (U || U === 0) && (r = U))), !v || b !== r || Co)
    return !isNaN(b * r) && r !== "" ? (U = new Ye(this._pt, u, c, +b || 0, r - (b || 0), typeof p == "boolean" ? Wp : Xv, 0, D), y && (U.fp = y), d && U.modifier(d, this, u), this._pt = U) : (!p && !(c in u) && Vo(c, r), Qp.call(this, u, c, b, r, D, g || tl.stringFilter, y));
}, Zp = function(u, c, f, r, s) {
  if ($t(u) && (u = zi(u, s, c, f, r)), !wl(u) || u.style && u.nodeType || be(u) || cv(u))
    return re(u) ? zi(u, s, c, f, r) : u;
  var h = {}, d;
  for (d in u)
    h[d] = zi(u[d], s, c, f, r);
  return h;
}, qv = function(u, c, f, r, s, h) {
  var d, g, y, v;
  if ($e[u] && (d = new $e[u]()).init(s, d.rawVars ? c[u] : Zp(c[u], r, s, h, f), f, r, h) !== !1 && (f._pt = g = new Ye(f._pt, s, u, 0, 1, d.render, d, 0, d.priority), f !== _u))
    for (y = f._ptLookup[f._targets.indexOf(s)], v = d._props.length; v--; )
      y[d._props[v]] = g;
  return d;
}, Yn, Co, Fo = function m(u, c, f) {
  var r = u.vars, s = r.ease, h = r.startAt, d = r.immediateRender, g = r.lazy, y = r.onUpdate, v = r.runBackwards, p = r.yoyoEase, b = r.keyframes, D = r.autoRevert, U = u._dur, S = u._startAt, R = u._targets, V = u.parent, w = V && V.data === "nested" ? V.vars.targets : R, Q = u._overwrite === "auto" && !wo, Z = u.timeline, G = r.easeReverse || p, F, B, H, j, k, it, ut, st, _t, ft, L, K, W;
  if (Z && (!b || !s) && (s = "none"), u._ease = Ta(s, Ai.ease), u._rEase = G && (Ta(G) || u._ease), u._from = !Z && !!r.runBackwards, u._from && (u.ratio = 1), !Z || b && !r.stagger) {
    if (st = R[0] ? ya(R[0]).harness : 0, K = st && r[st.prop], F = pc(r, Lo), S && (S._zTime < 0 && S.progress(1), c < 0 && v && d && !D ? S.render(-1, !0) : S.revert(v && U ? mc : yp), S._lazy = 0), h) {
      if (Xn(u._startAt = ne.set(R, ll({
        data: "isStart",
        overwrite: !1,
        parent: V,
        immediateRender: !0,
        lazy: !S && He(g),
        startAt: null,
        delay: 0,
        onUpdate: y && function() {
          return Ie(u, "onUpdate");
        },
        stagger: 0
      }, h))), u._startAt._dp = 0, u._startAt._sat = u, c < 0 && (pe || !d && !D) && u._startAt.revert(mc), d && U && c <= 0 && f <= 0) {
        c && (u._zTime = c);
        return;
      }
    } else if (v && U && !S) {
      if (c && (d = !1), H = ll({
        overwrite: !1,
        data: "isFromStart",
        //we tag the tween with as "isFromStart" so that if [inside a plugin] we need to only do something at the very END of a tween, we have a way of identifying this tween as merely the one that's setting the beginning values for a "from()" tween. For example, clearProps in CSSPlugin should only get applied at the very END of a tween and without this tag, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in.
        lazy: d && !S && He(g),
        immediateRender: d,
        //zero-duration tweens render immediately by default, but if we're not specifically instructed to render this tween immediately, we should skip this and merely _init() to record the starting values (rendering them immediately would push them to completion which is wasteful in that case - we'd have to render(-1) immediately after)
        stagger: 0,
        parent: V
        //ensures that nested tweens that had a stagger are handled properly, like gsap.from(".class", {y: gsap.utils.wrap([-100,100]), stagger: 0.5})
      }, F), K && (H[st.prop] = K), Xn(u._startAt = ne.set(R, H)), u._startAt._dp = 0, u._startAt._sat = u, c < 0 && (pe ? u._startAt.revert(mc) : u._startAt.render(-1, !0)), u._zTime = c, !d)
        m(u._startAt, wt, wt);
      else if (!c)
        return;
    }
    for (u._pt = u._ptCache = 0, g = U && He(g) || g && !U, B = 0; B < R.length; B++) {
      if (k = R[B], ut = k._gsap || Zo(R)[B]._gsap, u._ptLookup[B] = ft = {}, Oo[ut.id] && Gn.length && yc(), L = w === R ? B : w.indexOf(k), st && (_t = new st()).init(k, K || F, u, L, w) !== !1 && (u._pt = j = new Ye(u._pt, k, _t.name, 0, 1, _t.render, _t, 0, _t.priority), _t._props.forEach(function(lt) {
        ft[lt] = j;
      }), _t.priority && (it = 1)), !st || K)
        for (H in F)
          $e[H] && (_t = qv(H, F, u, L, k, w)) ? _t.priority && (it = 1) : ft[H] = j = Jo.call(u, k, H, "get", F[H], L, w, 0, r.stringFilter);
      u._op && u._op[B] && u.kill(k, u._op[B]), Q && u._pt && (Yn = u, Kt.killTweensOf(k, ft, u.globalTime(c)), W = !u.parent, Yn = 0), u._pt && g && (Oo[ut.id] = 1);
    }
    it && Lv(u), u._onInit && u._onInit(u);
  }
  u._onUpdate = y, u._initted = (!u._op || u._pt) && !W, b && c <= 0 && Z.render(dl, !0, !0);
}, Kp = function(u, c, f, r, s, h, d, g) {
  var y = (u._pt && u._ptCache || (u._ptCache = {}))[c], v, p, b, D;
  if (!y)
    for (y = u._ptCache[c] = [], b = u._ptLookup, D = u._targets.length; D--; ) {
      if (v = b[D][c], v && v.d && v.d._pt)
        for (v = v.d._pt; v && v.p !== c && v.fp !== c; )
          v = v._next;
      if (!v)
        return Co = 1, u.vars[c] = "+=0", Fo(u, d), Co = 0, g ? Mi(c + " not eligible for reset. Try splitting into individual properties") : 1;
      y.push(v);
    }
  for (D = y.length; D--; )
    p = y[D], v = p._pt || p, v.s = (r || r === 0) && !s ? r : v.s + (r || 0) + h * v.c, v.c = f - v.s, p.e && (p.e = It(f) + Se(p.e)), p.b && (p.b = v.s + Se(p.b));
}, Jp = function(u, c) {
  var f = u[0] ? ya(u[0]).harness : 0, r = f && f.aliases, s, h, d, g;
  if (!r)
    return c;
  s = pu({}, c);
  for (h in r)
    if (h in s)
      for (g = r[h].split(","), d = g.length; d--; )
        s[g[d]] = s[h];
  return s;
}, Fp = function(u, c, f, r) {
  var s = c.ease || r || "power1.inOut", h, d;
  if (be(c))
    d = f[u] || (f[u] = []), c.forEach(function(g, y) {
      return d.push({
        t: y / (c.length - 1) * 100,
        v: g,
        e: s
      });
    });
  else
    for (h in c)
      d = f[h] || (f[h] = []), h === "ease" || d.push({
        t: parseFloat(u),
        v: c[h],
        e: s
      });
}, zi = function(u, c, f, r, s) {
  return $t(u) ? u.call(c, f, r, s) : re(u) && ~u.indexOf("random(") ? Ni(u) : u;
}, wv = Qo + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert", Gv = {};
Be(wv + ",id,stagger,delay,duration,paused,scrollTrigger", function(m) {
  return Gv[m] = 1;
});
var ne = /* @__PURE__ */ (function(m) {
  iv(u, m);
  function u(f, r, s, h) {
    var d;
    typeof r == "number" && (s.duration = r, r = s, s = null), d = m.call(this, h ? r : Ei(r)) || this;
    var g = d.vars, y = g.duration, v = g.delay, p = g.immediateRender, b = g.stagger, D = g.overwrite, U = g.keyframes, S = g.defaults, R = g.scrollTrigger, V = r.parent || Kt, w = (be(f) || cv(f) ? an(f[0]) : "length" in r) ? [f] : ml(f), Q, Z, G, F, B, H, j, k;
    if (d._targets = w.length ? Zo(w) : Mi("GSAP target " + f + " not found. https://gsap.com", !tl.nullTargetWarn) || [], d._ptLookup = [], d._overwrite = D, U || b || dc(y) || dc(v)) {
      r = d.vars;
      var it = r.easeReverse || r.yoyoEase;
      if (Q = d.timeline = new Ue({
        data: "nested",
        defaults: S || {},
        targets: V && V.data === "nested" ? V.vars.targets : w
      }), Q.kill(), Q.parent = Q._dp = ln(d), Q._start = 0, b || dc(y) || dc(v)) {
        if (F = w.length, j = b && zv(b), wl(b))
          for (B in b)
            ~wv.indexOf(B) && (k || (k = {}), k[B] = b[B]);
        for (Z = 0; Z < F; Z++)
          G = pc(r, Gv), G.stagger = 0, it && (G.easeReverse = it), k && pu(G, k), H = w[Z], G.duration = +zi(y, ln(d), Z, H, w), G.delay = (+zi(v, ln(d), Z, H, w) || 0) - d._delay, !b && F === 1 && G.delay && (d._delay = v = G.delay, d._start += v, G.delay = 0), Q.to(H, G, j ? j(Z, H, w) : 0), Q._ease = At.none;
        Q.duration() ? y = v = 0 : d.timeline = 0;
      } else if (U) {
        Ei(ll(Q.vars.defaults, {
          ease: "none"
        })), Q._ease = Ta(U.ease || r.ease || "none");
        var ut = 0, st, _t, ft;
        if (be(U))
          U.forEach(function(L) {
            return Q.to(w, L, ">");
          }), Q.duration();
        else {
          G = {};
          for (B in U)
            B === "ease" || B === "easeEach" || Fp(B, U[B], G, U.easeEach);
          for (B in G)
            for (st = G[B].sort(function(L, K) {
              return L.t - K.t;
            }), ut = 0, Z = 0; Z < st.length; Z++)
              _t = st[Z], ft = {
                ease: _t.e,
                duration: (_t.t - (Z ? st[Z - 1].t : 0)) / 100 * y
              }, ft[B] = _t.v, Q.to(w, ft, ut), ut += ft.duration;
          Q.duration() < y && Q.to({}, {
            duration: y - Q.duration()
          });
        }
      }
      y || d.duration(y = Q.duration());
    } else
      d.timeline = 0;
    return D === !0 && !wo && (Yn = ln(d), Kt.killTweensOf(w), Yn = 0), Yl(V, ln(d), s), r.reversed && d.reverse(), r.paused && d.paused(!0), (p || !y && !U && d._start === Zt(V._time) && He(p) && Op(ln(d)) && V.data !== "nested") && (d._tTime = -wt, d.render(Math.max(0, -v) || 0)), R && Sv(ln(d), R), d;
  }
  var c = u.prototype;
  return c.render = function(r, s, h) {
    var d = this._time, g = this._tDur, y = this._dur, v = r < 0, p = r > g - wt && !v ? g : r < wt ? 0 : r, b, D, U, S, R, V, w, Q;
    if (!y)
      Ap(this, r, s, h);
    else if (p !== this._tTime || !r || h || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== v || this._lazy) {
      if (b = p, Q = this.timeline, this._repeat) {
        if (S = y + this._rDelay, this._repeat < -1 && v)
          return this.totalTime(S * 100 + r, s, h);
        if (b = Zt(p % S), p === g ? (U = this._repeat, b = y) : (R = Zt(p / S), U = ~~R, U && U === R ? (b = y, U--) : b > y && (b = y)), V = this._yoyo && U & 1, V && (b = y - b), R = Tu(this._tTime, S), b === d && !h && this._initted && U === R)
          return this._tTime = p, this;
        U !== R && this.vars.repeatRefresh && !V && !this._lock && b !== S && this._initted && (this._lock = h = 1, this.render(Zt(S * U), !0).invalidate()._lock = 0);
      }
      if (!this._initted) {
        if (bv(this, v ? r : b, h, s, p))
          return this._tTime = 0, this;
        if (d !== this._time && !(h && this.vars.repeatRefresh && U !== R))
          return this;
        if (y !== this._dur)
          return this.render(r, s, h);
      }
      if (this._rEase) {
        var Z = b < d;
        if (Z !== this._inv) {
          var G = Z ? d : y - d;
          this._inv = Z, this._from && (this.ratio = 1 - this.ratio), this._invRatio = this.ratio, this._invTime = d, this._invRecip = G ? (Z ? -1 : 1) / G : 0, this._invScale = Z ? -this.ratio : 1 - this.ratio, this._invEase = Z ? this._rEase : this._ease;
        }
        this.ratio = w = this._invRatio + this._invScale * this._invEase((b - this._invTime) * this._invRecip);
      } else
        this.ratio = w = this._ease(b / y);
      if (this._from && (this.ratio = w = 1 - w), this._tTime = p, this._time = b, !this._act && this._ts && (this._act = 1, this._lazy = 0), !d && p && !s && !R && (Ie(this, "onStart"), this._tTime !== p))
        return this;
      for (D = this._pt; D; )
        D.r(w, D.d), D = D._next;
      Q && Q.render(r < 0 ? r : Q._dur * Q._ease(b / this._dur), s, h) || this._startAt && (this._zTime = r), this._onUpdate && !s && (v && zo(this, r, s, h), Ie(this, "onUpdate")), this._repeat && U !== R && this.vars.onRepeat && !s && this.parent && Ie(this, "onRepeat"), (p === this._tDur || !p) && this._tTime === p && (v && !this._onUpdate && zo(this, r, !0, !0), (r || !y) && (p === this._tDur && this._ts > 0 || !p && this._ts < 0) && Xn(this, 1), !s && !(v && !d) && (p || d || V) && (Ie(this, p === g ? "onComplete" : "onReverseComplete", !0), this._prom && !(p < g && this.timeScale() > 0) && this._prom()));
    }
    return this;
  }, c.targets = function() {
    return this._targets;
  }, c.invalidate = function(r) {
    return (!r || !this.vars.runBackwards) && (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(r), m.prototype.invalidate.call(this, r);
  }, c.resetTo = function(r, s, h, d, g) {
    Ci || We.wake(), this._ts || this.play();
    var y = Math.min(this._dur, (this._dp._time - this._start) * this._ts), v;
    return this._initted || Fo(this, y), v = this._ease(y / this._dur), Kp(this, r, s, h, d, v, y, g) ? this.resetTo(r, s, h, d, 1) : (Ac(this, 0), this.parent || pv(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0));
  }, c.kill = function(r, s) {
    if (s === void 0 && (s = "all"), !r && (!s || s === "all"))
      return this._lazy = this._pt = 0, this.parent ? Si(this) : this.scrollTrigger && this.scrollTrigger.kill(!!pe), this;
    if (this.timeline) {
      var h = this.timeline.totalDuration();
      return this.timeline.killTweensOf(r, s, Yn && Yn.vars.overwrite !== !0)._first || Si(this), this.parent && h !== this.timeline.totalDuration() && Su(this, this._dur * this.timeline._tDur / h, 0, 1), this;
    }
    var d = this._targets, g = r ? ml(r) : d, y = this._ptLookup, v = this._pt, p, b, D, U, S, R, V;
    if ((!s || s === "all") && bp(d, g))
      return s === "all" && (this._pt = 0), Si(this);
    for (p = this._op = this._op || [], s !== "all" && (re(s) && (S = {}, Be(s, function(w) {
      return S[w] = 1;
    }), s = S), s = Jp(d, s)), V = d.length; V--; )
      if (~g.indexOf(d[V])) {
        b = y[V], s === "all" ? (p[V] = s, U = b, D = {}) : (D = p[V] = p[V] || {}, U = s);
        for (S in U)
          R = b && b[S], R && ((!("kill" in R.d) || R.d.kill(S) === !0) && Oc(this, R, "_pt"), delete b[S]), D !== "all" && (D[S] = 1);
      }
    return this._initted && !this._pt && v && Si(this), this;
  }, u.to = function(r, s) {
    return new u(r, s, arguments[2]);
  }, u.from = function(r, s) {
    return Oi(1, arguments);
  }, u.delayedCall = function(r, s, h, d) {
    return new u(s, 0, {
      immediateRender: !1,
      lazy: !1,
      overwrite: !1,
      delay: r,
      onComplete: s,
      onReverseComplete: s,
      onCompleteParams: h,
      onReverseCompleteParams: h,
      callbackScope: d
    });
  }, u.fromTo = function(r, s, h) {
    return Oi(2, arguments);
  }, u.set = function(r, s) {
    return s.duration = 0, s.repeatDelay || (s.repeat = 0), new u(r, s);
  }, u.killTweensOf = function(r, s, h) {
    return Kt.killTweensOf(r, s, h);
  }, u;
})(Ri);
ll(ne.prototype, {
  _targets: [],
  _lazy: 0,
  _startAt: 0,
  _op: 0,
  _onInit: 0
});
Be("staggerTo,staggerFrom,staggerFromTo", function(m) {
  ne[m] = function() {
    var u = new Ue(), c = Mo.call(arguments, 0);
    return c.splice(m === "staggerFromTo" ? 5 : 4, 0, 0), u[m].apply(u, c);
  };
});
var ko = function(u, c, f) {
  return u[c] = f;
}, jv = function(u, c, f) {
  return u[c](f);
}, kp = function(u, c, f, r) {
  return u[c](r.fp, f);
}, $p = function(u, c, f) {
  return u.setAttribute(c, f);
}, $o = function(u, c) {
  return $t(u[c]) ? jv : Go(u[c]) && u.setAttribute ? $p : ko;
}, Xv = function(u, c) {
  return c.set(c.t, c.p, Math.round((c.s + c.c * u) * 1e6) / 1e6, c);
}, Wp = function(u, c) {
  return c.set(c.t, c.p, !!(c.s + c.c * u), c);
}, Vv = function(u, c) {
  var f = c._pt, r = "";
  if (!u && c.b)
    r = c.b;
  else if (u === 1 && c.e)
    r = c.e;
  else {
    for (; f; )
      r = f.p + (f.m ? f.m(f.s + f.c * u) : Math.round((f.s + f.c * u) * 1e4) / 1e4) + r, f = f._next;
    r += c.c;
  }
  c.set(c.t, c.p, r, c);
}, Wo = function(u, c) {
  for (var f = c._pt; f; )
    f.r(u, f.d), f = f._next;
}, Ip = function(u, c, f, r) {
  for (var s = this._pt, h; s; )
    h = s._next, s.p === r && s.modifier(u, c, f), s = h;
}, Pp = function(u) {
  for (var c = this._pt, f, r; c; )
    r = c._next, c.p === u && !c.op || c.op === u ? Oc(this, c, "_pt") : c.dep || (f = 1), c = r;
  return !f;
}, tT = function(u, c, f, r) {
  r.mSet(u, c, r.m.call(r.tween, f, r.mt), r);
}, Lv = function(u) {
  for (var c = u._pt, f, r, s, h; c; ) {
    for (f = c._next, r = s; r && r.pr > c.pr; )
      r = r._next;
    (c._prev = r ? r._prev : h) ? c._prev._next = c : s = c, (c._next = r) ? r._prev = c : h = c, c = f;
  }
  u._pt = s;
}, Ye = /* @__PURE__ */ (function() {
  function m(c, f, r, s, h, d, g, y, v) {
    this.t = f, this.s = s, this.c = h, this.p = r, this.r = d || Xv, this.d = g || this, this.set = y || ko, this.pr = v || 0, this._next = c, c && (c._prev = this);
  }
  var u = m.prototype;
  return u.modifier = function(f, r, s) {
    this.mSet = this.mSet || this.set, this.set = tT, this.m = f, this.mt = s, this.tween = r;
  }, m;
})();
Be(Qo + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse", function(m) {
  return Lo[m] = 1;
});
el.TweenMax = el.TweenLite = ne;
el.TimelineLite = el.TimelineMax = Ue;
Kt = new Ue({
  sortChildren: !1,
  defaults: Ai,
  autoRemoveChildren: !0,
  id: "root",
  smoothChildTiming: !0
});
tl.stringFilter = Hv;
var Sa = [], vc = {}, eT = [], Q_ = 0, lT = 0, po = function(u) {
  return (vc[u] || eT).map(function(c) {
    return c();
  });
}, Ro = function() {
  var u = Date.now(), c = [];
  u - Q_ > 2 && (po("matchMediaInit"), Sa.forEach(function(f) {
    var r = f.queries, s = f.conditions, h, d, g, y;
    for (d in r)
      h = Bl.matchMedia(r[d]).matches, h && (g = 1), h !== s[d] && (s[d] = h, y = 1);
    y && (f.revert(), g && c.push(f));
  }), po("matchMediaRevert"), c.forEach(function(f) {
    return f.onMatch(f, function(r) {
      return f.add(null, r);
    });
  }), Q_ = u, po("matchMedia"));
}, Qv = /* @__PURE__ */ (function() {
  function m(c, f) {
    this.selector = f && Do(f), this.data = [], this._r = [], this.isReverted = !1, this.id = lT++, c && this.add(c);
  }
  var u = m.prototype;
  return u.add = function(f, r, s) {
    $t(f) && (s = r, r = f, f = $t);
    var h = this, d = function() {
      var y = Lt, v = h.selector, p;
      return y && y !== h && y.data.push(h), s && (h.selector = Do(s)), Lt = h, p = r.apply(h, arguments), $t(p) && h._r.push(p), Lt = y, h.selector = v, h.isReverted = !1, p;
    };
    return h.last = d, f === $t ? d(h, function(g) {
      return h.add(null, g);
    }) : f ? h[f] = d : d;
  }, u.ignore = function(f) {
    var r = Lt;
    Lt = null, f(this), Lt = r;
  }, u.getTweens = function() {
    var f = [];
    return this.data.forEach(function(r) {
      return r instanceof m ? f.push.apply(f, r.getTweens()) : r instanceof ne && !(r.parent && r.parent.data === "nested") && f.push(r);
    }), f;
  }, u.clear = function() {
    this._r.length = this.data.length = 0;
  }, u.kill = function(f, r) {
    var s = this;
    if (f ? (function() {
      for (var d = s.getTweens(), g = s.data.length, y; g--; )
        y = s.data[g], y.data === "isFlip" && (y.revert(), y.getChildren(!0, !0, !1).forEach(function(v) {
          return d.splice(d.indexOf(v), 1);
        }));
      for (d.map(function(v) {
        return {
          g: v._dur || v._delay || v._sat && !v._sat.vars.immediateRender ? v.globalTime(0) : -1 / 0,
          t: v
        };
      }).sort(function(v, p) {
        return p.g - v.g || -1 / 0;
      }).forEach(function(v) {
        return v.t.revert(f);
      }), g = s.data.length; g--; )
        y = s.data[g], y instanceof Ue ? y.data !== "nested" && (y.scrollTrigger && y.scrollTrigger.revert(), y.kill()) : !(y instanceof ne) && y.revert && y.revert(f);
      s._r.forEach(function(v) {
        return v(f, s);
      }), s.isReverted = !0;
    })() : this.data.forEach(function(d) {
      return d.kill && d.kill();
    }), this.clear(), r)
      for (var h = Sa.length; h--; )
        Sa[h].id === this.id && Sa.splice(h, 1);
  }, u.revert = function(f) {
    this.kill(f || {});
  }, m;
})(), nT = /* @__PURE__ */ (function() {
  function m(c) {
    this.contexts = [], this.scope = c, Lt && Lt.data.push(this);
  }
  var u = m.prototype;
  return u.add = function(f, r, s) {
    wl(f) || (f = {
      matches: f
    });
    var h = new Qv(0, s || this.scope), d = h.conditions = {}, g, y, v;
    Lt && !h.selector && (h.selector = Lt.selector), this.contexts.push(h), r = h.add("onMatch", r), h.queries = f;
    for (y in f)
      y === "all" ? v = 1 : (g = Bl.matchMedia(f[y]), g && (Sa.indexOf(h) < 0 && Sa.push(h), (d[y] = g.matches) && (v = 1), g.addListener ? g.addListener(Ro) : g.addEventListener("change", Ro)));
    return v && r(h, function(p) {
      return h.add(null, p);
    }), this;
  }, u.revert = function(f) {
    this.kill(f || {});
  }, u.kill = function(f) {
    this.contexts.forEach(function(r) {
      return r.kill(f, !0);
    });
  }, m;
})(), Sc = {
  registerPlugin: function() {
    for (var u = arguments.length, c = new Array(u), f = 0; f < u; f++)
      c[f] = arguments[f];
    c.forEach(function(r) {
      return Rv(r);
    });
  },
  timeline: function(u) {
    return new Ue(u);
  },
  getTweensOf: function(u, c) {
    return Kt.getTweensOf(u, c);
  },
  getProperty: function(u, c, f, r) {
    re(u) && (u = ml(u)[0]);
    var s = ya(u || {}).get, h = f ? yv : gv;
    return f === "native" && (f = ""), u && (c ? h(($e[c] && $e[c].get || s)(u, c, f, r)) : function(d, g, y) {
      return h(($e[d] && $e[d].get || s)(u, d, g, y));
    });
  },
  quickSetter: function(u, c, f) {
    if (u = ml(u), u.length > 1) {
      var r = u.map(function(v) {
        return we.quickSetter(v, c, f);
      }), s = r.length;
      return function(v) {
        for (var p = s; p--; )
          r[p](v);
      };
    }
    u = u[0] || {};
    var h = $e[c], d = ya(u), g = d.harness && (d.harness.aliases || {})[c] || c, y = h ? function(v) {
      var p = new h();
      _u._pt = 0, p.init(u, f ? v + f : v, _u, 0, [u]), p.render(1, p), _u._pt && Wo(1, _u);
    } : d.set(u, g);
    return h ? y : function(v) {
      return y(u, g, f ? v + f : v, d, 1);
    };
  },
  quickTo: function(u, c, f) {
    var r, s = we.to(u, ll((r = {}, r[c] = "+=0.1", r.paused = !0, r.stagger = 0, r), f || {})), h = function(g, y, v) {
      return s.resetTo(c, g, y, v);
    };
    return h.tween = s, h;
  },
  isTweening: function(u) {
    return Kt.getTweensOf(u, !0).length > 0;
  },
  defaults: function(u) {
    return u && u.ease && (u.ease = Ta(u.ease, Ai.ease)), G_(Ai, u || {});
  },
  config: function(u) {
    return G_(tl, u || {});
  },
  registerEffect: function(u) {
    var c = u.name, f = u.effect, r = u.plugins, s = u.defaults, h = u.extendTimeline;
    (r || "").split(",").forEach(function(d) {
      return d && !$e[d] && !el[d] && Mi(c + " effect requires " + d + " plugin.");
    }), _o[c] = function(d, g, y) {
      return f(ml(d), ll(g || {}, s), y);
    }, h && (Ue.prototype[c] = function(d, g, y) {
      return this.add(_o[c](d, wl(g) ? g : (y = g) && {}, this), y);
    });
  },
  registerEase: function(u, c) {
    At[u] = Ta(c);
  },
  parseEase: function(u, c) {
    return arguments.length ? Ta(u, c) : At;
  },
  getById: function(u) {
    return Kt.getById(u);
  },
  exportRoot: function(u, c) {
    u === void 0 && (u = {});
    var f = new Ue(u), r, s;
    for (f.smoothChildTiming = He(u.smoothChildTiming), Kt.remove(f), f._dp = 0, f._time = f._tTime = Kt._time, r = Kt._first; r; )
      s = r._next, (c || !(!r._dur && r instanceof ne && r.vars.onComplete === r._targets[0])) && Yl(f, r, r._start - r._delay), r = s;
    return Yl(Kt, f, 0), f;
  },
  context: function(u, c) {
    return u ? new Qv(u, c) : Lt;
  },
  matchMedia: function(u) {
    return new nT(u);
  },
  matchMediaRefresh: function() {
    return Sa.forEach(function(u) {
      var c = u.conditions, f, r;
      for (r in c)
        c[r] && (c[r] = !1, f = 1);
      f && u.revert();
    }) || Ro();
  },
  addEventListener: function(u, c) {
    var f = vc[u] || (vc[u] = []);
    ~f.indexOf(c) || f.push(c);
  },
  removeEventListener: function(u, c) {
    var f = vc[u], r = f && f.indexOf(c);
    r >= 0 && f.splice(r, 1);
  },
  utils: {
    wrap: Hp,
    wrapYoyo: Bp,
    distribute: zv,
    random: Mv,
    snap: Av,
    normalize: Up,
    getUnit: Se,
    clamp: Np,
    splitColor: xv,
    toArray: ml,
    selector: Do,
    mapRange: Nv,
    pipe: Rp,
    unitize: xp,
    interpolate: Yp,
    shuffle: Ov
  },
  install: hv,
  effects: _o,
  ticker: We,
  updateRoot: Ue.updateRoot,
  plugins: $e,
  globalTimeline: Kt,
  core: {
    PropTween: Ye,
    globals: dv,
    Tween: ne,
    Timeline: Ue,
    Animation: Ri,
    getCache: ya,
    _removeLinkedListItem: Oc,
    reverting: function() {
      return pe;
    },
    context: function(u) {
      return u && Lt && (Lt.data.push(u), u._ctx = Lt), Lt;
    },
    suppressOverwrites: function(u) {
      return wo = u;
    }
  }
};
Be("to,from,fromTo,delayedCall,set,killTweensOf", function(m) {
  return Sc[m] = ne[m];
});
We.add(Ue.updateRoot);
_u = Sc.to({}, {
  duration: 0
});
var aT = function(u, c) {
  for (var f = u._pt; f && f.p !== c && f.op !== c && f.fp !== c; )
    f = f._next;
  return f;
}, uT = function(u, c) {
  var f = u._targets, r, s, h;
  for (r in c)
    for (s = f.length; s--; )
      h = u._ptLookup[s][r], h && (h = h.d) && (h._pt && (h = aT(h, r)), h && h.modifier && h.modifier(c[r], u, f[s], r));
}, To = function(u, c) {
  return {
    name: u,
    headless: 1,
    rawVars: 1,
    //don't pre-process function-based values or "random()" strings.
    init: function(r, s, h) {
      h._onInit = function(d) {
        var g, y;
        if (re(s) && (g = {}, Be(s, function(v) {
          return g[v] = 1;
        }), s = g), c) {
          g = {};
          for (y in s)
            g[y] = c(s[y]);
          s = g;
        }
        uT(d, s);
      };
    }
  };
}, we = Sc.registerPlugin({
  name: "attr",
  init: function(u, c, f, r, s) {
    var h, d, g;
    this.tween = f;
    for (h in c)
      g = u.getAttribute(h) || "", d = this.add(u, "setAttribute", (g || 0) + "", c[h], r, s, 0, 0, h), d.op = h, d.b = g, this._props.push(h);
  },
  render: function(u, c) {
    for (var f = c._pt; f; )
      pe ? f.set(f.t, f.p, f.b, f) : f.r(u, f.d), f = f._next;
  }
}, {
  name: "endArray",
  headless: 1,
  init: function(u, c) {
    for (var f = c.length; f--; )
      this.add(u, f, u[f] || 0, c[f], 0, 0, 0, 0, 0, 1);
  }
}, To("roundProps", No), To("modifiers"), To("snap", Av)) || Sc;
ne.version = Ue.version = we.version = "3.15.0";
ov = 1;
jo() && bu();
At.Power0;
At.Power1;
At.Power2;
At.Power3;
At.Power4;
At.Linear;
At.Quad;
At.Cubic;
At.Quart;
At.Quint;
At.Strong;
At.Elastic;
At.Back;
At.SteppedEase;
At.Bounce;
At.Sine;
At.Expo;
At.Circ;
var Z_, qn, gu, Io, ga, K_, Po, iT = function() {
  return typeof window < "u";
}, un = {}, va = 180 / Math.PI, yu = Math.PI / 180, du = Math.atan2, J_ = 1e8, th = /([A-Z])/g, fT = /(left|right|width|margin|padding|x)/i, cT = /[\s,\(]\S/, ql = {
  autoAlpha: "opacity,visibility",
  scale: "scaleX,scaleY",
  alpha: "opacity"
}, xo = function(u, c) {
  return c.set(c.t, c.p, Math.round((c.s + c.c * u) * 1e4) / 1e4 + c.u, c);
}, rT = function(u, c) {
  return c.set(c.t, c.p, u === 1 ? c.e : Math.round((c.s + c.c * u) * 1e4) / 1e4 + c.u, c);
}, sT = function(u, c) {
  return c.set(c.t, c.p, u ? Math.round((c.s + c.c * u) * 1e4) / 1e4 + c.u : c.b, c);
}, oT = function(u, c) {
  return c.set(c.t, c.p, u === 1 ? c.e : u ? Math.round((c.s + c.c * u) * 1e4) / 1e4 + c.u : c.b, c);
}, hT = function(u, c) {
  var f = c.s + c.c * u;
  c.set(c.t, c.p, ~~(f + (f < 0 ? -0.5 : 0.5)) + c.u, c);
}, Zv = function(u, c) {
  return c.set(c.t, c.p, u ? c.e : c.b, c);
}, Kv = function(u, c) {
  return c.set(c.t, c.p, u !== 1 ? c.b : c.e, c);
}, dT = function(u, c, f) {
  return u.style[c] = f;
}, mT = function(u, c, f) {
  return u.style.setProperty(c, f);
}, _T = function(u, c, f) {
  return u._gsap[c] = f;
}, vT = function(u, c, f) {
  return u._gsap.scaleX = u._gsap.scaleY = f;
}, gT = function(u, c, f, r, s) {
  var h = u._gsap;
  h.scaleX = h.scaleY = f, h.renderTransform(s, h);
}, yT = function(u, c, f, r, s) {
  var h = u._gsap;
  h[c] = f, h.renderTransform(s, h);
}, Jt = "transform", qe = Jt + "Origin", pT = function m(u, c) {
  var f = this, r = this.target, s = r.style, h = r._gsap;
  if (u in un && s) {
    if (this.tfm = this.tfm || {}, u !== "transform")
      u = ql[u] || u, ~u.indexOf(",") ? u.split(",").forEach(function(d) {
        return f.tfm[d] = nn(r, d);
      }) : this.tfm[u] = h.x ? h[u] : nn(r, u), u === qe && (this.tfm.zOrigin = h.zOrigin);
    else
      return ql.transform.split(",").forEach(function(d) {
        return m.call(f, d, c);
      });
    if (this.props.indexOf(Jt) >= 0)
      return;
    h.svg && (this.svgo = r.getAttribute("data-svg-origin"), this.props.push(qe, c, "")), u = Jt;
  }
  (s || c) && this.props.push(u, c, s[u]);
}, Jv = function(u) {
  u.translate && (u.removeProperty("translate"), u.removeProperty("scale"), u.removeProperty("rotate"));
}, TT = function() {
  var u = this.props, c = this.target, f = c.style, r = c._gsap, s, h;
  for (s = 0; s < u.length; s += 3)
    u[s + 1] ? u[s + 1] === 2 ? c[u[s]](u[s + 2]) : c[u[s]] = u[s + 2] : u[s + 2] ? f[u[s]] = u[s + 2] : f.removeProperty(u[s].substr(0, 2) === "--" ? u[s] : u[s].replace(th, "-$1").toLowerCase());
  if (this.tfm) {
    for (h in this.tfm)
      r[h] = this.tfm[h];
    r.svg && (r.renderTransform(), c.setAttribute("data-svg-origin", this.svgo || "")), s = Po(), (!s || !s.isStart) && !f[Jt] && (Jv(f), r.zOrigin && f[qe] && (f[qe] += " " + r.zOrigin + "px", r.zOrigin = 0, r.renderTransform()), r.uncache = 1);
  }
}, Fv = function(u, c) {
  var f = {
    target: u,
    props: [],
    revert: TT,
    save: pT
  };
  return u._gsap || we.core.getCache(u), c && u.style && u.nodeType && c.split(",").forEach(function(r) {
    return f.save(r);
  }), f;
}, kv, Uo = function(u, c) {
  var f = qn.createElementNS ? qn.createElementNS((c || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), u) : qn.createElement(u);
  return f && f.style ? f : qn.createElement(u);
}, Pe = function m(u, c, f) {
  var r = getComputedStyle(u);
  return r[c] || r.getPropertyValue(c.replace(th, "-$1").toLowerCase()) || r.getPropertyValue(c) || !f && m(u, Eu(c) || c, 1) || "";
}, F_ = "O,Moz,ms,Ms,Webkit".split(","), Eu = function(u, c, f) {
  var r = c || ga, s = r.style, h = 5;
  if (u in s && !f)
    return u;
  for (u = u.charAt(0).toUpperCase() + u.substr(1); h-- && !(F_[h] + u in s); )
    ;
  return h < 0 ? null : (h === 3 ? "ms" : h >= 0 ? F_[h] : "") + u;
}, Ho = function() {
  iT() && window.document && (Z_ = window, qn = Z_.document, gu = qn.documentElement, ga = Uo("div") || {
    style: {}
  }, Uo("div"), Jt = Eu(Jt), qe = Jt + "Origin", ga.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", kv = !!Eu("perspective"), Po = we.core.reverting, Io = 1);
}, k_ = function(u) {
  var c = u.ownerSVGElement, f = Uo("svg", c && c.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), r = u.cloneNode(!0), s;
  r.style.display = "block", f.appendChild(r), gu.appendChild(f);
  try {
    s = r.getBBox();
  } catch {
  }
  return f.removeChild(r), gu.removeChild(f), s;
}, $_ = function(u, c) {
  for (var f = c.length; f--; )
    if (u.hasAttribute(c[f]))
      return u.getAttribute(c[f]);
}, $v = function(u) {
  var c, f;
  try {
    c = u.getBBox();
  } catch {
    c = k_(u), f = 1;
  }
  return c && (c.width || c.height) || f || (c = k_(u)), c && !c.width && !c.x && !c.y ? {
    x: +$_(u, ["x", "cx", "x1"]) || 0,
    y: +$_(u, ["y", "cy", "y1"]) || 0,
    width: 0,
    height: 0
  } : c;
}, Wv = function(u) {
  return !!(u.getCTM && (!u.parentNode || u.ownerSVGElement) && $v(u));
}, Vn = function(u, c) {
  if (c) {
    var f = u.style, r;
    c in un && c !== qe && (c = Jt), f.removeProperty ? (r = c.substr(0, 2), (r === "ms" || c.substr(0, 6) === "webkit") && (c = "-" + c), f.removeProperty(r === "--" ? c : c.replace(th, "-$1").toLowerCase())) : f.removeAttribute(c);
  }
}, wn = function(u, c, f, r, s, h) {
  var d = new Ye(u._pt, c, f, 0, 1, h ? Kv : Zv);
  return u._pt = d, d.b = r, d.e = s, u._props.push(f), d;
}, W_ = {
  deg: 1,
  rad: 1,
  turn: 1
}, ST = {
  grid: 1,
  flex: 1
}, Ln = function m(u, c, f, r) {
  var s = parseFloat(f) || 0, h = (f + "").trim().substr((s + "").length) || "px", d = ga.style, g = fT.test(c), y = u.tagName.toLowerCase() === "svg", v = (y ? "client" : "offset") + (g ? "Width" : "Height"), p = 100, b = r === "px", D = r === "%", U, S, R, V;
  if (r === h || !s || W_[r] || W_[h])
    return s;
  if (h !== "px" && !b && (s = m(u, c, f, "px")), V = u.getCTM && Wv(u), (D || h === "%") && (un[c] || ~c.indexOf("adius")))
    return U = V ? u.getBBox()[g ? "width" : "height"] : u[v], It(D ? s / U * p : s / 100 * U);
  if (d[g ? "width" : "height"] = p + (b ? h : r), S = r !== "rem" && ~c.indexOf("adius") || r === "em" && u.appendChild && !y ? u : u.parentNode, V && (S = (u.ownerSVGElement || {}).parentNode), (!S || S === qn || !S.appendChild) && (S = qn.body), R = S._gsap, R && D && R.width && g && R.time === We.time && !R.uncache)
    return It(s / R.width * p);
  if (D && (c === "height" || c === "width")) {
    var w = u.style[c];
    u.style[c] = p + r, U = u[v], w ? u.style[c] = w : Vn(u, c);
  } else
    (D || h === "%") && !ST[Pe(S, "display")] && (d.position = Pe(u, "position")), S === u && (d.position = "static"), S.appendChild(ga), U = ga[v], S.removeChild(ga), d.position = "absolute";
  return g && D && (R = ya(S), R.time = We.time, R.width = S[v]), It(b ? U * s / p : U && s ? p / U * s : 0);
}, nn = function(u, c, f, r) {
  var s;
  return Io || Ho(), c in ql && c !== "transform" && (c = ql[c], ~c.indexOf(",") && (c = c.split(",")[0])), un[c] && c !== "transform" ? (s = Ui(u, r), s = c !== "transformOrigin" ? s[c] : s.svg ? s.origin : Ec(Pe(u, qe)) + " " + s.zOrigin + "px") : (s = u.style[c], (!s || s === "auto" || r || ~(s + "").indexOf("calc(")) && (s = bc[c] && bc[c](u, c, f) || Pe(u, c) || _v(u, c) || (c === "opacity" ? 1 : 0))), f && !~(s + "").trim().indexOf(" ") ? Ln(u, c, s, f) + f : s;
}, bT = function(u, c, f, r) {
  if (!f || f === "none") {
    var s = Eu(c, u, 1), h = s && Pe(u, s, 1);
    h && h !== f ? (c = s, f = h) : c === "borderColor" && (f = Pe(u, "borderTopColor"));
  }
  var d = new Ye(this._pt, u.style, c, 0, 1, Vv), g = 0, y = 0, v, p, b, D, U, S, R, V, w, Q, Z, G;
  if (d.b = f, d.e = r, f += "", r += "", r.substring(0, 6) === "var(--" && (r = Pe(u, r.substring(4, r.indexOf(")")))), r === "auto" && (S = u.style[c], u.style[c] = r, r = Pe(u, c) || r, S ? u.style[c] = S : Vn(u, c)), v = [f, r], Hv(v), f = v[0], r = v[1], b = f.match(mu) || [], G = r.match(mu) || [], G.length) {
    for (; p = mu.exec(r); )
      R = p[0], w = r.substring(g, p.index), U ? U = (U + 1) % 5 : (w.substr(-5) === "rgba(" || w.substr(-5) === "hsla(") && (U = 1), R !== (S = b[y++] || "") && (D = parseFloat(S) || 0, Z = S.substr((D + "").length), R.charAt(1) === "=" && (R = vu(D, R) + Z), V = parseFloat(R), Q = R.substr((V + "").length), g = mu.lastIndex - Q.length, Q || (Q = Q || tl.units[c] || Z, g === r.length && (r += Q, d.e += Q)), Z !== Q && (D = Ln(u, c, S, Q) || 0), d._pt = {
        _next: d._pt,
        p: w || y === 1 ? w : ",",
        //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
        s: D,
        c: V - D,
        m: U && U < 4 || c === "zIndex" ? Math.round : 0
      });
    d.c = g < r.length ? r.substring(g, r.length) : "";
  } else
    d.r = c === "display" && r === "none" ? Kv : Zv;
  return sv.test(r) && (d.e = 0), this._pt = d, d;
}, I_ = {
  top: "0%",
  bottom: "100%",
  left: "0%",
  right: "100%",
  center: "50%"
}, ET = function(u) {
  var c = u.split(" "), f = c[0], r = c[1] || "50%";
  return (f === "top" || f === "bottom" || r === "left" || r === "right") && (u = f, f = r, r = u), c[0] = I_[f] || f, c[1] = I_[r] || r, c.join(" ");
}, OT = function(u, c) {
  if (c.tween && c.tween._time === c.tween._dur) {
    var f = c.t, r = f.style, s = c.u, h = f._gsap, d, g, y;
    if (s === "all" || s === !0)
      r.cssText = "", g = 1;
    else
      for (s = s.split(","), y = s.length; --y > -1; )
        d = s[y], un[d] && (g = 1, d = d === "transformOrigin" ? qe : Jt), Vn(f, d);
    g && (Vn(f, Jt), h && (h.svg && f.removeAttribute("transform"), r.scale = r.rotate = r.translate = "none", Ui(f, 1), h.uncache = 1, Jv(r)));
  }
}, bc = {
  clearProps: function(u, c, f, r, s) {
    if (s.data !== "isFromStart") {
      var h = u._pt = new Ye(u._pt, c, f, 0, 0, OT);
      return h.u = r, h.pr = -10, h.tween = s, u._props.push(f), 1;
    }
  }
  /* className feature (about 0.4kb gzipped).
  , className(plugin, target, property, endValue, tween) {
  	let _renderClassName = (ratio, data) => {
  			data.css.render(ratio, data.css);
  			if (!ratio || ratio === 1) {
  				let inline = data.rmv,
  					target = data.t,
  					p;
  				target.setAttribute("class", ratio ? data.e : data.b);
  				for (p in inline) {
  					_removeProperty(target, p);
  				}
  			}
  		},
  		_getAllStyles = (target) => {
  			let styles = {},
  				computed = getComputedStyle(target),
  				p;
  			for (p in computed) {
  				if (isNaN(p) && p !== "cssText" && p !== "length") {
  					styles[p] = computed[p];
  				}
  			}
  			_setDefaults(styles, _parseTransform(target, 1));
  			return styles;
  		},
  		startClassList = target.getAttribute("class"),
  		style = target.style,
  		cssText = style.cssText,
  		cache = target._gsap,
  		classPT = cache.classPT,
  		inlineToRemoveAtEnd = {},
  		data = {t:target, plugin:plugin, rmv:inlineToRemoveAtEnd, b:startClassList, e:(endValue.charAt(1) !== "=") ? endValue : startClassList.replace(new RegExp("(?:\\s|^)" + endValue.substr(2) + "(?![\\w-])"), "") + ((endValue.charAt(0) === "+") ? " " + endValue.substr(2) : "")},
  		changingVars = {},
  		startVars = _getAllStyles(target),
  		transformRelated = /(transform|perspective)/i,
  		endVars, p;
  	if (classPT) {
  		classPT.r(1, classPT.d);
  		_removeLinkedListItem(classPT.d.plugin, classPT, "_pt");
  	}
  	target.setAttribute("class", data.e);
  	endVars = _getAllStyles(target, true);
  	target.setAttribute("class", startClassList);
  	for (p in endVars) {
  		if (endVars[p] !== startVars[p] && !transformRelated.test(p)) {
  			changingVars[p] = endVars[p];
  			if (!style[p] && style[p] !== "0") {
  				inlineToRemoveAtEnd[p] = 1;
  			}
  		}
  	}
  	cache.classPT = plugin._pt = new PropTween(plugin._pt, target, "className", 0, 0, _renderClassName, data, 0, -11);
  	if (style.cssText !== cssText) { //only apply if things change. Otherwise, in cases like a background-image that's pulled dynamically, it could cause a refresh. See https://gsap.com/forums/topic/20368-possible-gsap-bug-switching-classnames-in-chrome/.
  		style.cssText = cssText; //we recorded cssText before we swapped classes and ran _getAllStyles() because in cases when a className tween is overwritten, we remove all the related tweening properties from that class change (otherwise class-specific stuff can't override properties we've directly set on the target's style object due to specificity).
  	}
  	_parseTransform(target, true); //to clear the caching of transforms
  	data.css = new gsap.plugins.css();
  	data.css.init(target, changingVars, tween);
  	plugin._props.push(...data.css._props);
  	return 1;
  }
  */
}, xi = [1, 0, 0, 1, 0, 0], Iv = {}, Pv = function(u) {
  return u === "matrix(1, 0, 0, 1, 0, 0)" || u === "none" || !u;
}, P_ = function(u) {
  var c = Pe(u, Jt);
  return Pv(c) ? xi : c.substr(7).match(rv).map(It);
}, eh = function(u, c) {
  var f = u._gsap || ya(u), r = u.style, s = P_(u), h, d, g, y;
  return f.svg && u.getAttribute("transform") ? (g = u.transform.baseVal.consolidate().matrix, s = [g.a, g.b, g.c, g.d, g.e, g.f], s.join(",") === "1,0,0,1,0,0" ? xi : s) : (s === xi && !u.offsetParent && u !== gu && !f.svg && (g = r.display, r.display = "block", h = u.parentNode, (!h || !u.offsetParent && !u.getBoundingClientRect().width) && (y = 1, d = u.nextElementSibling, gu.appendChild(u)), s = P_(u), g ? r.display = g : Vn(u, "display"), y && (d ? h.insertBefore(u, d) : h ? h.appendChild(u) : gu.removeChild(u))), c && s.length > 6 ? [s[0], s[1], s[4], s[5], s[12], s[13]] : s);
}, Bo = function(u, c, f, r, s, h) {
  var d = u._gsap, g = s || eh(u, !0), y = d.xOrigin || 0, v = d.yOrigin || 0, p = d.xOffset || 0, b = d.yOffset || 0, D = g[0], U = g[1], S = g[2], R = g[3], V = g[4], w = g[5], Q = c.split(" "), Z = parseFloat(Q[0]) || 0, G = parseFloat(Q[1]) || 0, F, B, H, j;
  f ? g !== xi && (B = D * R - U * S) && (H = Z * (R / B) + G * (-S / B) + (S * w - R * V) / B, j = Z * (-U / B) + G * (D / B) - (D * w - U * V) / B, Z = H, G = j) : (F = $v(u), Z = F.x + (~Q[0].indexOf("%") ? Z / 100 * F.width : Z), G = F.y + (~(Q[1] || Q[0]).indexOf("%") ? G / 100 * F.height : G)), r || r !== !1 && d.smooth ? (V = Z - y, w = G - v, d.xOffset = p + (V * D + w * S) - V, d.yOffset = b + (V * U + w * R) - w) : d.xOffset = d.yOffset = 0, d.xOrigin = Z, d.yOrigin = G, d.smooth = !!r, d.origin = c, d.originIsAbsolute = !!f, u.style[qe] = "0px 0px", h && (wn(h, d, "xOrigin", y, Z), wn(h, d, "yOrigin", v, G), wn(h, d, "xOffset", p, d.xOffset), wn(h, d, "yOffset", b, d.yOffset)), u.setAttribute("data-svg-origin", Z + " " + G);
}, Ui = function(u, c) {
  var f = u._gsap || new Yv(u);
  if ("x" in f && !c && !f.uncache)
    return f;
  var r = u.style, s = f.scaleX < 0, h = "px", d = "deg", g = getComputedStyle(u), y = Pe(u, qe) || "0", v, p, b, D, U, S, R, V, w, Q, Z, G, F, B, H, j, k, it, ut, st, _t, ft, L, K, W, lt, $, Dt, pt, se, E, X;
  return v = p = b = S = R = V = w = Q = Z = 0, D = U = 1, f.svg = !!(u.getCTM && Wv(u)), g.translate && ((g.translate !== "none" || g.scale !== "none" || g.rotate !== "none") && (r[Jt] = (g.translate !== "none" ? "translate3d(" + (g.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (g.rotate !== "none" ? "rotate(" + g.rotate + ") " : "") + (g.scale !== "none" ? "scale(" + g.scale.split(" ").join(",") + ") " : "") + (g[Jt] !== "none" ? g[Jt] : "")), r.scale = r.rotate = r.translate = "none"), B = eh(u, f.svg), f.svg && (f.uncache ? (W = u.getBBox(), y = f.xOrigin - W.x + "px " + (f.yOrigin - W.y) + "px", K = "") : K = !c && u.getAttribute("data-svg-origin"), Bo(u, K || y, !!K || f.originIsAbsolute, f.smooth !== !1, B)), G = f.xOrigin || 0, F = f.yOrigin || 0, B !== xi && (it = B[0], ut = B[1], st = B[2], _t = B[3], v = ft = B[4], p = L = B[5], B.length === 6 ? (D = Math.sqrt(it * it + ut * ut), U = Math.sqrt(_t * _t + st * st), S = it || ut ? du(ut, it) * va : 0, w = st || _t ? du(st, _t) * va + S : 0, w && (U *= Math.abs(Math.cos(w * yu))), f.svg && (v -= G - (G * it + F * st), p -= F - (G * ut + F * _t))) : (X = B[6], se = B[7], $ = B[8], Dt = B[9], pt = B[10], E = B[11], v = B[12], p = B[13], b = B[14], H = du(X, pt), R = H * va, H && (j = Math.cos(-H), k = Math.sin(-H), K = ft * j + $ * k, W = L * j + Dt * k, lt = X * j + pt * k, $ = ft * -k + $ * j, Dt = L * -k + Dt * j, pt = X * -k + pt * j, E = se * -k + E * j, ft = K, L = W, X = lt), H = du(-st, pt), V = H * va, H && (j = Math.cos(-H), k = Math.sin(-H), K = it * j - $ * k, W = ut * j - Dt * k, lt = st * j - pt * k, E = _t * k + E * j, it = K, ut = W, st = lt), H = du(ut, it), S = H * va, H && (j = Math.cos(H), k = Math.sin(H), K = it * j + ut * k, W = ft * j + L * k, ut = ut * j - it * k, L = L * j - ft * k, it = K, ft = W), R && Math.abs(R) + Math.abs(S) > 359.9 && (R = S = 0, V = 180 - V), D = It(Math.sqrt(it * it + ut * ut + st * st)), U = It(Math.sqrt(L * L + X * X)), H = du(ft, L), w = Math.abs(H) > 2e-4 ? H * va : 0, Z = E ? 1 / (E < 0 ? -E : E) : 0), f.svg && (K = u.getAttribute("transform"), f.forceCSS = u.setAttribute("transform", "") || !Pv(Pe(u, Jt)), K && u.setAttribute("transform", K))), Math.abs(w) > 90 && Math.abs(w) < 270 && (s ? (D *= -1, w += S <= 0 ? 180 : -180, S += S <= 0 ? 180 : -180) : (U *= -1, w += w <= 0 ? 180 : -180)), c = c || f.uncache, f.x = v - ((f.xPercent = v && (!c && f.xPercent || (Math.round(u.offsetWidth / 2) === Math.round(-v) ? -50 : 0))) ? u.offsetWidth * f.xPercent / 100 : 0) + h, f.y = p - ((f.yPercent = p && (!c && f.yPercent || (Math.round(u.offsetHeight / 2) === Math.round(-p) ? -50 : 0))) ? u.offsetHeight * f.yPercent / 100 : 0) + h, f.z = b + h, f.scaleX = It(D), f.scaleY = It(U), f.rotation = It(S) + d, f.rotationX = It(R) + d, f.rotationY = It(V) + d, f.skewX = w + d, f.skewY = Q + d, f.transformPerspective = Z + h, (f.zOrigin = parseFloat(y.split(" ")[2]) || !c && f.zOrigin || 0) && (r[qe] = Ec(y)), f.xOffset = f.yOffset = 0, f.force3D = tl.force3D, f.renderTransform = f.svg ? AT : kv ? tg : zT, f.uncache = 0, f;
}, Ec = function(u) {
  return (u = u.split(" "))[0] + " " + u[1];
}, So = function(u, c, f) {
  var r = Se(c);
  return It(parseFloat(c) + parseFloat(Ln(u, "x", f + "px", r))) + r;
}, zT = function(u, c) {
  c.z = "0px", c.rotationY = c.rotationX = "0deg", c.force3D = 0, tg(u, c);
}, ma = "0deg", Ti = "0px", _a = ") ", tg = function(u, c) {
  var f = c || this, r = f.xPercent, s = f.yPercent, h = f.x, d = f.y, g = f.z, y = f.rotation, v = f.rotationY, p = f.rotationX, b = f.skewX, D = f.skewY, U = f.scaleX, S = f.scaleY, R = f.transformPerspective, V = f.force3D, w = f.target, Q = f.zOrigin, Z = "", G = V === "auto" && u && u !== 1 || V === !0;
  if (Q && (p !== ma || v !== ma)) {
    var F = parseFloat(v) * yu, B = Math.sin(F), H = Math.cos(F), j;
    F = parseFloat(p) * yu, j = Math.cos(F), h = So(w, h, B * j * -Q), d = So(w, d, -Math.sin(F) * -Q), g = So(w, g, H * j * -Q + Q);
  }
  R !== Ti && (Z += "perspective(" + R + _a), (r || s) && (Z += "translate(" + r + "%, " + s + "%) "), (G || h !== Ti || d !== Ti || g !== Ti) && (Z += g !== Ti || G ? "translate3d(" + h + ", " + d + ", " + g + ") " : "translate(" + h + ", " + d + _a), y !== ma && (Z += "rotate(" + y + _a), v !== ma && (Z += "rotateY(" + v + _a), p !== ma && (Z += "rotateX(" + p + _a), (b !== ma || D !== ma) && (Z += "skew(" + b + ", " + D + _a), (U !== 1 || S !== 1) && (Z += "scale(" + U + ", " + S + _a), w.style[Jt] = Z || "translate(0, 0)";
}, AT = function(u, c) {
  var f = c || this, r = f.xPercent, s = f.yPercent, h = f.x, d = f.y, g = f.rotation, y = f.skewX, v = f.skewY, p = f.scaleX, b = f.scaleY, D = f.target, U = f.xOrigin, S = f.yOrigin, R = f.xOffset, V = f.yOffset, w = f.forceCSS, Q = parseFloat(h), Z = parseFloat(d), G, F, B, H, j;
  g = parseFloat(g), y = parseFloat(y), v = parseFloat(v), v && (v = parseFloat(v), y += v, g += v), g || y ? (g *= yu, y *= yu, G = Math.cos(g) * p, F = Math.sin(g) * p, B = Math.sin(g - y) * -b, H = Math.cos(g - y) * b, y && (v *= yu, j = Math.tan(y - v), j = Math.sqrt(1 + j * j), B *= j, H *= j, v && (j = Math.tan(v), j = Math.sqrt(1 + j * j), G *= j, F *= j)), G = It(G), F = It(F), B = It(B), H = It(H)) : (G = p, H = b, F = B = 0), (Q && !~(h + "").indexOf("px") || Z && !~(d + "").indexOf("px")) && (Q = Ln(D, "x", h, "px"), Z = Ln(D, "y", d, "px")), (U || S || R || V) && (Q = It(Q + U - (U * G + S * B) + R), Z = It(Z + S - (U * F + S * H) + V)), (r || s) && (j = D.getBBox(), Q = It(Q + r / 100 * j.width), Z = It(Z + s / 100 * j.height)), j = "matrix(" + G + "," + F + "," + B + "," + H + "," + Q + "," + Z + ")", D.setAttribute("transform", j), w && (D.style[Jt] = j);
}, MT = function(u, c, f, r, s) {
  var h = 360, d = re(s), g = parseFloat(s) * (d && ~s.indexOf("rad") ? va : 1), y = g - r, v = r + y + "deg", p, b;
  return d && (p = s.split("_")[1], p === "short" && (y %= h, y !== y % (h / 2) && (y += y < 0 ? h : -h)), p === "cw" && y < 0 ? y = (y + h * J_) % h - ~~(y / h) * h : p === "ccw" && y > 0 && (y = (y - h * J_) % h - ~~(y / h) * h)), u._pt = b = new Ye(u._pt, c, f, r, y, rT), b.e = v, b.u = "deg", u._props.push(f), b;
}, tv = function(u, c) {
  for (var f in c)
    u[f] = c[f];
  return u;
}, DT = function(u, c, f) {
  var r = tv({}, f._gsap), s = "perspective,force3D,transformOrigin,svgOrigin", h = f.style, d, g, y, v, p, b, D, U;
  r.svg ? (y = f.getAttribute("transform"), f.setAttribute("transform", ""), h[Jt] = c, d = Ui(f, 1), Vn(f, Jt), f.setAttribute("transform", y)) : (y = getComputedStyle(f)[Jt], h[Jt] = c, d = Ui(f, 1), h[Jt] = y);
  for (g in un)
    y = r[g], v = d[g], y !== v && s.indexOf(g) < 0 && (D = Se(y), U = Se(v), p = D !== U ? Ln(f, g, y, U) : parseFloat(y), b = parseFloat(v), u._pt = new Ye(u._pt, d, g, p, b - p, xo), u._pt.u = U || 0, u._props.push(g));
  tv(d, r);
};
Be("padding,margin,Width,Radius", function(m, u) {
  var c = "Top", f = "Right", r = "Bottom", s = "Left", h = (u < 3 ? [c, f, r, s] : [c + s, c + f, r + f, r + s]).map(function(d) {
    return u < 2 ? m + d : "border" + d + m;
  });
  bc[u > 1 ? "border" + m : m] = function(d, g, y, v, p) {
    var b, D;
    if (arguments.length < 4)
      return b = h.map(function(U) {
        return nn(d, U, y);
      }), D = b.join(" "), D.split(b[0]).length === 5 ? b[0] : D;
    b = (v + "").split(" "), D = {}, h.forEach(function(U, S) {
      return D[U] = b[S] = b[S] || b[(S - 1) / 2 | 0];
    }), d.init(g, D, p);
  };
});
var eg = {
  name: "css",
  register: Ho,
  targetTest: function(u) {
    return u.style && u.nodeType;
  },
  init: function(u, c, f, r, s) {
    var h = this._props, d = u.style, g = f.vars.startAt, y, v, p, b, D, U, S, R, V, w, Q, Z, G, F, B, H, j;
    Io || Ho(), this.styles = this.styles || Fv(u), H = this.styles.props, this.tween = f;
    for (S in c)
      if (S !== "autoRound" && (v = c[S], !($e[S] && qv(S, c, f, r, u, s)))) {
        if (D = typeof v, U = bc[S], D === "function" && (v = v.call(f, r, u, s), D = typeof v), D === "string" && ~v.indexOf("random(") && (v = Ni(v)), U)
          U(this, u, S, v, f) && (B = 1);
        else if (S.substr(0, 2) === "--")
          y = (getComputedStyle(u).getPropertyValue(S) + "").trim(), v += "", jn.lastIndex = 0, jn.test(y) || (R = Se(y), V = Se(v), V ? R !== V && (y = Ln(u, S, y, V) + V) : R && (v += R)), this.add(d, "setProperty", y, v, r, s, 0, 0, S), h.push(S), H.push(S, 0, d[S]);
        else if (D !== "undefined") {
          if (g && S in g ? (y = typeof g[S] == "function" ? g[S].call(f, r, u, s) : g[S], re(y) && ~y.indexOf("random(") && (y = Ni(y)), Se(y + "") || y === "auto" || (y += tl.units[S] || Se(nn(u, S)) || ""), (y + "").charAt(1) === "=" && (y = nn(u, S))) : y = nn(u, S), b = parseFloat(y), w = D === "string" && v.charAt(1) === "=" && v.substr(0, 2), w && (v = v.substr(2)), p = parseFloat(v), S in ql && (S === "autoAlpha" && (b === 1 && nn(u, "visibility") === "hidden" && p && (b = 0), H.push("visibility", 0, d.visibility), wn(this, d, "visibility", b ? "inherit" : "hidden", p ? "inherit" : "hidden", !p)), S !== "scale" && S !== "transform" && (S = ql[S], ~S.indexOf(",") && (S = S.split(",")[0]))), Q = S in un, Q) {
            if (this.styles.save(S), j = v, D === "string" && v.substring(0, 6) === "var(--") {
              if (v = Pe(u, v.substring(4, v.indexOf(")"))), v.substring(0, 5) === "calc(") {
                var k = u.style.perspective;
                u.style.perspective = v, v = Pe(u, "perspective"), k ? u.style.perspective = k : Vn(u, "perspective");
              }
              p = parseFloat(v);
            }
            if (Z || (G = u._gsap, G.renderTransform && !c.parseTransform || Ui(u, c.parseTransform), F = c.smoothOrigin !== !1 && G.smooth, Z = this._pt = new Ye(this._pt, d, Jt, 0, 1, G.renderTransform, G, 0, -1), Z.dep = 1), S === "scale")
              this._pt = new Ye(this._pt, G, "scaleY", G.scaleY, (w ? vu(G.scaleY, w + p) : p) - G.scaleY || 0, xo), this._pt.u = 0, h.push("scaleY", S), S += "X";
            else if (S === "transformOrigin") {
              H.push(qe, 0, d[qe]), v = ET(v), G.svg ? Bo(u, v, 0, F, 0, this) : (V = parseFloat(v.split(" ")[2]) || 0, V !== G.zOrigin && wn(this, G, "zOrigin", G.zOrigin, V), wn(this, d, S, Ec(y), Ec(v)));
              continue;
            } else if (S === "svgOrigin") {
              Bo(u, v, 1, F, 0, this);
              continue;
            } else if (S in Iv) {
              MT(this, G, S, b, w ? vu(b, w + v) : v);
              continue;
            } else if (S === "smoothOrigin") {
              wn(this, G, "smooth", G.smooth, v);
              continue;
            } else if (S === "force3D") {
              G[S] = v;
              continue;
            } else if (S === "transform") {
              DT(this, v, u);
              continue;
            }
          } else S in d || (S = Eu(S) || S);
          if (Q || (p || p === 0) && (b || b === 0) && !cT.test(v) && S in d)
            R = (y + "").substr((b + "").length), p || (p = 0), V = Se(v) || (S in tl.units ? tl.units[S] : R), R !== V && (b = Ln(u, S, y, V)), this._pt = new Ye(this._pt, Q ? G : d, S, b, (w ? vu(b, w + p) : p) - b, !Q && (V === "px" || S === "zIndex") && c.autoRound !== !1 ? hT : xo), this._pt.u = V || 0, Q && j !== v ? (this._pt.b = y, this._pt.e = j, this._pt.r = oT) : R !== V && V !== "%" && (this._pt.b = y, this._pt.r = sT);
          else if (S in d)
            bT.call(this, u, S, y, w ? w + v : v);
          else if (S in u)
            this.add(u, S, y || u[S], w ? w + v : v, r, s);
          else if (S !== "parseTransform") {
            Vo(S, v);
            continue;
          }
          Q || (S in d ? H.push(S, 0, d[S]) : typeof u[S] == "function" ? H.push(S, 2, u[S]()) : H.push(S, 1, y || u[S])), h.push(S);
        }
      }
    B && Lv(this);
  },
  render: function(u, c) {
    if (c.tween._time || !Po())
      for (var f = c._pt; f; )
        f.r(u, f.d), f = f._next;
    else
      c.styles.revert();
  },
  get: nn,
  aliases: ql,
  getSetter: function(u, c, f) {
    var r = ql[c];
    return r && r.indexOf(",") < 0 && (c = r), c in un && c !== qe && (u._gsap.x || nn(u, "x")) ? f && K_ === f ? c === "scale" ? vT : _T : (K_ = f || {}) && (c === "scale" ? gT : yT) : u.style && !Go(u.style[c]) ? dT : ~c.indexOf("-") ? mT : $o(u, c);
  },
  core: {
    _removeProperty: Vn,
    _getMatrix: eh
  }
};
we.utils.checkPrefix = Eu;
we.core.getStyleSaver = Fv;
(function(m, u, c, f) {
  var r = Be(m + "," + u + "," + c, function(s) {
    un[s] = 1;
  });
  Be(u, function(s) {
    tl.units[s] = "deg", Iv[s] = 1;
  }), ql[r[13]] = m + "," + u, Be(f, function(s) {
    var h = s.split(":");
    ql[h[1]] = r[h[0]];
  });
})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
Be("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(m) {
  tl.units[m] = "px";
});
we.registerPlugin(eg);
var lh = we.registerPlugin(eg) || we;
lh.core.Tween;
const lg = 1200, ng = 240, en = ng / 2, NT = 6;
function CT(m, u) {
  const c = Math.max(20, en - Math.max(0, u) / 2 - NT), f = Math.min(Math.max(0, m) * 2.2, c * 2);
  return `M -320 ${en} Q -160 ${en - f} 0 ${en} T 320 ${en} T 640 ${en} T 960 ${en} T 1280 ${en} T ${lg + 320} ${en}`;
}
function RT({
  text: m = "WORKSHOPS ✦ MENTORSHIP ✦ INNOVATION",
  shape: u = "wave",
  path: c,
  speed: f = 90,
  direction: r = "forward",
  separator: s = "✦",
  curviness: h = 90,
  fontSize: d = 44,
  fontWeight: g = 700,
  letterSpacing: y = 2,
  uppercase: v = !0,
  color: p = "#17394b",
  ribbon: b = !0,
  ribbonColor: D = "#f7fafc",
  ribbonWidth: U = 84,
  pauseOnHover: S = !0,
  className: R = "",
  style: V = {}
}) {
  const w = ot.useRef(null), Q = ot.useRef(null), Z = ot.useRef(null), G = ot.useRef(null), F = ot.useRef(null), [B, H] = ot.useState({ length: 0, reps: 1 }), j = "temple-loop-path", k = ot.useMemo(
    () => c || CT(h, U),
    [c, u, h, U]
  ), it = ot.useMemo(() => {
    const ft = v ? String(m).toUpperCase() : String(m), L = s ? ` ${s} ` : "   ";
    return `${ft}${L}`;
  }, [m, s, v]), ut = ot.useMemo(
    () => ({ fontSize: `${d}px`, fontWeight: g, letterSpacing: `${y}px` }),
    [d, g, y]
  );
  ot.useLayoutEffect(() => {
    let ft = !1;
    const L = () => {
      if (ft || !Q.current || !Z.current) return;
      const K = Q.current.getTotalLength(), W = Z.current.getComputedTextLength();
      if (!K) return;
      const lt = W > 0 ? Math.max(1, Math.round(K / W)) : 1;
      H(
        ($) => $.length === K && $.reps === lt ? $ : { length: K, reps: lt }
      );
    };
    return L(), document.fonts?.ready.then(L).catch(() => {
    }), () => {
      ft = !0;
    };
  }, [k, it, d, g, y]), ot.useEffect(() => {
    const { length: ft } = B, L = G.current, K = F.current;
    if (!L || !K || !ft) return;
    const W = (E) => {
      const X = E >= 0 ? E - ft : E + ft;
      L.setAttribute("startOffset", String(E)), K.setAttribute("startOffset", String(X));
    };
    if (W(0), window.matchMedia("(prefers-reduced-motion: reduce)").matches || f <= 0) return;
    const lt = { offset: 0 }, $ = lh.to(lt, {
      offset: r === "reverse" ? -ft : ft,
      duration: ft / f,
      ease: "none",
      repeat: -1,
      onUpdate: () => W(lt.offset)
    }), Dt = w.current, pt = () => $.pause(), se = () => $.resume();
    return S && Dt && (Dt.addEventListener("pointerenter", pt), Dt.addEventListener("pointerleave", se)), () => {
      $.kill(), Dt?.removeEventListener("pointerenter", pt), Dt?.removeEventListener("pointerleave", se);
    };
  }, [B, f, r, S]);
  const st = it.repeat(B.reps), _t = B.length || void 0;
  return /* @__PURE__ */ yt.jsx("div", { ref: w, className: `text-loop ${R}`.trim(), style: V, children: /* @__PURE__ */ yt.jsxs(
    "svg",
    {
      className: "text-loop-svg",
      viewBox: `0 0 ${lg} ${ng}`,
      preserveAspectRatio: "xMidYMid meet",
      role: "img",
      "aria-label": "Workshops, mentorship, innovation",
      children: [
        /* @__PURE__ */ yt.jsx(
          "path",
          {
            ref: Q,
            id: j,
            className: "text-loop-ribbon",
            d: k,
            fill: "none",
            stroke: b ? D : "none",
            strokeWidth: b ? U : 0,
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ yt.jsx("text", { ref: Z, className: "text-loop-measure", style: ut, "aria-hidden": "true", children: it }),
        [G, F].map((ft, L) => /* @__PURE__ */ yt.jsx(
          "text",
          {
            className: "text-loop-text",
            style: ut,
            fill: p,
            dominantBaseline: "central",
            "aria-hidden": "true",
            textLength: _t,
            lengthAdjust: "spacing",
            children: /* @__PURE__ */ yt.jsx("textPath", { ref: ft, href: `#${j}`, startOffset: "0", children: st })
          },
          L
        ))
      ]
    }
  ) });
}
const xT = ot.lazy(() => import("./Lanyard-CSRCaKN3.js"));
function UT() {
  const [m, u] = ot.useState(null), [c, f] = ot.useState(!0), [r, s] = ot.useState(() => !document.hidden), [h, d] = ot.useState(!1);
  ot.useEffect(() => {
    let y = !0;
    return fetch("/assets/data/upcomingevent.json").then((v) => {
      if (!v.ok) throw new Error(`Unable to load events (${v.status})`);
      return v.json();
    }).then((v) => {
      if (!y) return;
      const p = Array.isArray(v.upcoming) ? v.upcoming : [];
      u(p.find((b) => b.showOnHomeCard) ?? p[0] ?? null);
    }).catch((v) => console.error("Unable to load the home card event:", v)), () => {
      y = !1;
    };
  }, []), ot.useEffect(() => {
    const y = document.querySelector(".immersive-hero");
    if (!y || !("IntersectionObserver" in window)) return;
    const v = new IntersectionObserver(
      ([p]) => f(p.isIntersecting),
      { threshold: 0.01 }
    );
    return v.observe(y), () => v.disconnect();
  }, []), ot.useEffect(() => {
    const y = () => s(!document.hidden);
    return document.addEventListener("visibilitychange", y), () => document.removeEventListener("visibilitychange", y);
  }, []), ot.useEffect(() => {
    const y = () => d(!0);
    if ("requestIdleCallback" in window) {
      const p = window.requestIdleCallback(y, { timeout: 1e3 });
      return () => window.cancelIdleCallback(p);
    }
    const v = window.setTimeout(y, 200);
    return () => window.clearTimeout(v);
  }, []);
  const g = h && c && r;
  return /* @__PURE__ */ yt.jsxs(yt.Fragment, { children: [
    /* @__PURE__ */ yt.jsxs("div", { className: "immersive-content", children: [
      /* @__PURE__ */ yt.jsxs("h1", { id: "hero-title", className: "immersive-wordmark", children: [
        /* @__PURE__ */ yt.jsx("span", { children: "TEMPLE" }),
        /* @__PURE__ */ yt.jsx("span", { children: "IEEE" })
      ] }),
      /* @__PURE__ */ yt.jsx(
        RT,
        {
          text: "Workshop Innovation Mentorship",
          shape: "wave",
          speed: 50,
          direction: "forward",
          separator: "✦",
          curviness: 40,
          fontSize: 32,
          fontWeight: 700,
          letterSpacing: 3,
          uppercase: !0,
          color: "#ffffff",
          ribbon: !0,
          ribbonColor: "#17394b",
          ribbonWidth: 60,
          pauseOnHover: !1
        }
      )
    ] }),
    /* @__PURE__ */ yt.jsx("aside", { className: "hero-lanyard", "aria-label": "Click the Temple IEEE badge to flip it, or drag it down to continue", children: g && /* @__PURE__ */ yt.jsx(ot.Suspense, { fallback: null, children: /* @__PURE__ */ yt.jsx(
      xT,
      {
        position: [0, 0, 20],
        gravity: [0, -40, 0],
        frontImage: "/favicon.png",
        backImage: m?.image ?? null,
        frontCaption: "CLICK OR PULL DOWN",
        frontImageFit: "contain",
        backImageFit: "contain",
        lanyardWidth: 0.5,
        nextPageTarget: "#about"
      }
    ) }) })
  ] });
}
function HT({
  items: m,
  defaultIndex: u = 1,
  accentColor: c = "#ffffff",
  overlayColor: f = "#17394b",
  textColor: r = "#ffffff",
  height: s = 450,
  gap: h = 10,
  radius: d = 16,
  expandRatio: g = 0.52,
  orientation: y = "vertical",
  duration: v = 0.6,
  ease: p = "expo.out",
  parallax: b = 0.5,
  tilt: D = 8,
  stagger: U = 0.06,
  trigger: S = "hover",
  showLabels: R = !1,
  grayscale: V = !0,
  className: w = ""
}) {
  const Q = ot.useRef(null), Z = ot.useRef([]), G = ot.useRef([]), F = ot.useRef([]), B = ot.useRef([]), H = ot.useRef(null), j = ot.useRef(!0), k = ot.useRef(320), it = y === "vertical", ut = m.length, [st, _t] = ot.useState(Math.min(Math.max(u, 0), ut - 1)), ft = typeof window < "u" && window.matchMedia ? window.matchMedia("(prefers-reduced-motion: reduce)").matches : !1, L = ot.useCallback(
    (lt) => {
      const $ = Z.current;
      if (!$.length) return;
      const Dt = Math.min(Math.max(g, 0.2), 0.9), pt = ut > 1 ? Dt * (ut - 1) / (1 - Dt) : 1, se = k.current;
      H.current?.kill();
      const E = lt && !ft ? v : 0, X = lh.timeline();
      $.forEach((nt, et) => {
        if (!nt) return;
        const vt = et === st, Ot = G.current[et], zt = F.current[et], tt = B.current[et], rt = vt ? 0 : et < st ? D : -D, _l = it ? { rotateX: -rt } : { rotateY: rt };
        if (X.to(
          nt,
          { flexGrow: vt ? pt : 1, ..._l, duration: E, ease: p },
          0
        ), Ot) {
          const Gl = Math.max(-1.5, Math.min(1.5, st - et)) * b * se * 0.06;
          X.to(
            Ot,
            {
              xPercent: -50,
              yPercent: -50,
              x: it || vt ? 0 : Gl,
              y: it ? vt ? 0 : Gl : 0,
              "--ag-gray": V ? vt ? 0 : 0.4 : 0,
              "--ag-dim": vt ? 0 : 0.16,
              duration: E,
              ease: p
            },
            0
          );
        }
        R && zt && tt && (vt ? X.to(
          [zt, tt],
          { opacity: 1, x: 0, duration: E, ease: p, stagger: ft ? 0 : U },
          0
        ) : X.to(
          [zt, tt],
          { opacity: 0, x: -14, duration: E * 0.6, ease: p },
          0
        ));
      }), H.current = X;
    },
    [st, ut, v, p, g, V, b, ft, R, U, D, it]
  );
  ot.useEffect(() => {
    const lt = Q.current;
    if (!lt) return;
    const $ = () => {
      const pt = lt.getBoundingClientRect(), se = it ? pt.height : pt.width, E = Math.max(se - h * (ut - 1), 120), X = Math.max(140, E * Math.min(Math.max(g, 0.2), 0.9) * 1.22);
      k.current = X, lt.style.setProperty("--ag-media-size", `${X}px`), L(!j.current);
    };
    $();
    const Dt = new ResizeObserver($);
    return Dt.observe(lt), () => Dt.disconnect();
  }, [L, ut, g, h, it]), ot.useEffect(() => {
    L(!j.current), j.current = !1;
  }, [L]), ot.useEffect(() => () => H.current?.kill(), []);
  const K = (lt, $) => {
    lt !== st && ($.preventDefault(), _t(lt));
  }, W = (lt, $) => {
    $.key === "ArrowRight" || $.key === "ArrowDown" ? ($.preventDefault(), _t((lt + 1) % ut)) : ($.key === "ArrowLeft" || $.key === "ArrowUp") && ($.preventDefault(), _t((lt - 1 + ut) % ut));
  };
  return /* @__PURE__ */ yt.jsx(
    "div",
    {
      ref: Q,
      className: `accordion-gallery${it ? " accordion-gallery--vertical" : ""}${w ? ` ${w}` : ""}`,
      style: {
        "--ag-accent": c,
        "--ag-overlay": f,
        "--ag-text": r,
        "--ag-gap": `${h}px`,
        "--ag-radius": `${d}px`,
        height: it ? `${Math.round(s * 1.6)}px` : `${s}px`
      },
      role: "list",
      "aria-label": "Temple IEEE image accordion gallery",
      children: m.map((lt, $) => {
        const Dt = $ === st;
        return /* @__PURE__ */ yt.jsxs(
          "div",
          {
            ref: (pt) => {
              Z.current[$] = pt;
            },
            className: `ag-panel${Dt ? " ag-panel--active" : ""}`,
            onClick: (pt) => K($, pt),
            onMouseEnter: () => {
              S === "hover" && _t($);
            },
            onFocus: () => _t($),
            onKeyDown: (pt) => W($, pt),
            role: "listitem",
            tabIndex: 0,
            "aria-current": Dt ? "true" : void 0,
            "aria-label": lt.label || lt.alt,
            children: [
              /* @__PURE__ */ yt.jsxs("span", { className: "ag-panel__frame", children: [
                /* @__PURE__ */ yt.jsx("span", { className: "ag-panel__media", ref: (pt) => {
                  G.current[$] = pt;
                }, children: /* @__PURE__ */ yt.jsx(
                  "img",
                  {
                    src: lt.image,
                    alt: lt.alt || lt.label || "",
                    draggable: "false",
                    loading: "lazy",
                    decoding: "async"
                  }
                ) }),
                /* @__PURE__ */ yt.jsx("span", { className: "ag-panel__overlay", "aria-hidden": "true" })
              ] }),
              R && /* @__PURE__ */ yt.jsxs("span", { className: "ag-panel__label", "aria-hidden": "true", children: [
                /* @__PURE__ */ yt.jsx("span", { className: "ag-panel__bar", ref: (pt) => {
                  F.current[$] = pt;
                } }),
                /* @__PURE__ */ yt.jsx("span", { className: "ag-panel__text", ref: (pt) => {
                  B.current[$] = pt;
                }, children: lt.label })
              ] })
            ]
          },
          lt.image
        );
      })
    }
  );
}
const ev = {
  workshops: [
    { image: "/assets/images/home/workshops/soldering-1.png", label: "Soldering Workshop", alt: "Temple IEEE members at a soldering workshop" },
    { image: "/assets/images/home/workshops/soldering-with-nsbe.jpeg", label: "Soldering with NSBE", alt: "Temple IEEE soldering workshop in collaboration with NSBE" },
    { image: "/assets/images/home/workshops/celus-workshop.jpeg", label: "CELUS Workshop", alt: "Temple IEEE members at a CELUS workshop" },
    { image: "/assets/images/home/workshops/arduino.png", label: "Arduino Workshop", alt: "Temple IEEE Arduino workshop" }
  ],
  community: [
    { image: "/assets/images/home/community/potluck.png", label: "Student Potluck", alt: "Temple IEEE members at a student potluck" },
    { image: "/assets/images/home/community/potluck-1.png", label: "Community Potluck", alt: "Temple IEEE community gathering at a potluck" },
    { image: "/assets/images/home/community/mario-kart.png", label: "Mario Kart Social", alt: "Temple IEEE members at a Mario Kart social" },
    { image: "/assets/images/home/community/mario-kart-1.png", label: "Community Social", alt: "Temple IEEE community playing Mario Kart together" }
  ],
  career: [
    { image: "/assets/images/home/career-connections/career-lockheed-session.png", label: "Industry Session", alt: "Lockheed Martin information session" },
    { image: "/assets/images/home/career-connections/lockheed.png", label: "Career Connection", alt: "Temple IEEE members connecting with Lockheed Martin" },
    { image: "/assets/images/home/career-connections/resume-workshop.jpg", label: "Resume Workshop", alt: "Temple IEEE resume workshop" },
    { image: "/assets/images/home/career-connections/headshot-photoshoot.jpeg", label: "Headshot Photoshoot", alt: "Temple IEEE professional headshot photoshoot" }
  ]
}, lv = [
  { id: "workshops", gallery: "workshops" },
  { id: "community", gallery: "community" },
  { id: "career-connections", gallery: "career" }
];
function BT({ gallery: m = "auto" }) {
  const u = m === "auto", c = ev[m] ? m : "workshops", [f, r] = ot.useState(c);
  return ot.useEffect(() => {
    if (!u) {
      r(c);
      return;
    }
    let s = 0;
    const h = () => {
      s = 0;
      const g = window.innerHeight / 2;
      let y = lv[0], v = Number.POSITIVE_INFINITY;
      lv.forEach((p) => {
        const b = document.getElementById(p.id);
        if (!b) return;
        const D = b.getBoundingClientRect(), U = Math.abs(D.top + D.height / 2 - g);
        U < v && (y = p, v = U);
      }), r((p) => p === y.gallery ? p : y.gallery);
    }, d = () => {
      s || (s = window.requestAnimationFrame(h));
    };
    return h(), window.addEventListener("scroll", d, { passive: !0 }), window.addEventListener("resize", d), () => {
      window.removeEventListener("scroll", d), window.removeEventListener("resize", d), s && window.cancelAnimationFrame(s);
    };
  }, [u, c]), /* @__PURE__ */ yt.jsx("div", { className: "program-accordion-shell", children: /* @__PURE__ */ yt.jsx(
    HT,
    {
      items: ev[f],
      defaultIndex: 1,
      orientation: "vertical",
      height: 450,
      expandRatio: 0.68,
      ease: "expo.out",
      showLabels: !1,
      className: "program-accordion-gallery"
    }
  ) }, f);
}
const nv = 6;
function YT({
  target: m = "#discover",
  direction: u = "down",
  ariaLabel: c = "Explore Temple IEEE",
  className: f = ""
}) {
  const r = ot.useRef(null), s = ot.useRef(null), h = ot.useRef(null), d = ot.useRef(null), g = ot.useRef([]), y = ot.useRef(null), v = ot.useRef({ x: 0, y: 0 }), p = ot.useRef(!1), b = ot.useRef(!1), [D, U] = ot.useState(!1), [S, R] = ot.useState(!1), V = 74, w = 42, Q = (H, j) => {
    v.current = { x: H, y: j }, s.current && (s.current.style.transform = `translate(${H}px, ${j}px)`);
    for (const k of [h.current, d.current])
      k?.setAttribute("x2", String(90 + H)), k?.setAttribute("y2", String(90 + j));
    R(Math.hypot(H, j) >= w);
  }, Z = () => {
    document.querySelector(m)?.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
      block: "start"
    });
  }, G = (H, j) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const k = Math.atan2(j || 1, H || 0);
    g.current.forEach((it, ut) => {
      if (!it) return;
      const st = (ut - (nv - 1) / 2) * 0.18, _t = 42 + ut * 8;
      it.animate(
        [
          { transform: "translate(0, 0) scale(1)", opacity: 0.9 },
          {
            transform: `translate(${Math.cos(k + st) * _t}px, ${Math.sin(k + st) * _t}px) scale(0.25)`,
            opacity: 0
          }
        ],
        { duration: 360, delay: ut * 18, easing: "cubic-bezier(0.16, 1, 0.3, 1)" }
      );
    });
  }, F = (H) => {
    const j = v.current;
    U(!1), R(!1), s.current && (s.current.style.transition = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "none" : "transform 460ms cubic-bezier(0.16, 1, 0.3, 1)"), Q(0, 0), window.setTimeout(() => {
      s.current && (s.current.style.transition = "");
    }, 480), H && (G(j.x, j.y), Z());
  }, B = (H, j) => {
    const k = y.current;
    if (!k || H.pointerId !== k.id) return;
    const it = !j && Math.hypot(v.current.x, v.current.y) >= w;
    y.current = null, F(it);
  };
  return /* @__PURE__ */ yt.jsxs("div", { ref: r, className: `sling-control${f ? ` ${f}` : ""}${D ? " is-held" : ""}${S ? " is-armed" : ""}`, children: [
    /* @__PURE__ */ yt.jsxs("svg", { className: "sling-bands", viewBox: "0 0 180 180", "aria-hidden": "true", children: [
      /* @__PURE__ */ yt.jsx("line", { ref: h, className: "sling-band sling-band-left", x1: "74", y1: "90", x2: "90", y2: "90" }),
      /* @__PURE__ */ yt.jsx("line", { ref: d, className: "sling-band sling-band-right", x1: "106", y1: "90", x2: "90", y2: "90" }),
      /* @__PURE__ */ yt.jsx("circle", { className: "sling-well", cx: "90", cy: "90", r: "29" })
    ] }),
    /* @__PURE__ */ yt.jsx(
      "button",
      {
        ref: s,
        className: "sling-pad",
        type: "button",
        "aria-label": c,
        onPointerDown: (H) => {
          H.button === 0 && (y.current = { id: H.pointerId, x: H.clientX, y: H.clientY }, p.current = !1, H.currentTarget.setPointerCapture(H.pointerId), H.currentTarget.style.transition = "none", U(!0));
        },
        onPointerMove: (H) => {
          const j = y.current;
          if (!j || H.pointerId !== j.id) return;
          const k = H.clientX - j.x, it = H.clientY - j.y;
          Math.hypot(k, it) > 5 && (p.current = !0);
          const ut = (st) => st * V / (V + Math.abs(st));
          Q(ut(k), ut(it));
        },
        onPointerUp: (H) => {
          b.current = p.current, B(H, !1);
        },
        onPointerCancel: (H) => B(H, !0),
        onLostPointerCapture: (H) => {
          y.current && B(H, !0);
        },
        onClick: () => {
          if (b.current) {
            b.current = !1;
            return;
          }
          Z();
        },
        children: /* @__PURE__ */ yt.jsx("svg", { viewBox: "0 0 24 24", width: "20", height: "20", "aria-hidden": "true", children: /* @__PURE__ */ yt.jsx(
          "path",
          {
            d: u === "up" ? "M12 20V6m0 0 5 5m-5-5-5 5" : "M12 4v14m0 0 5-5m-5 5-5-5",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2.2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ) })
      }
    ),
    Array.from({ length: nv }, (H, j) => /* @__PURE__ */ yt.jsx(
      "span",
      {
        ref: (k) => {
          g.current[j] = k;
        },
        className: `sling-particle particle-${j + 1}`,
        "aria-hidden": "true"
      },
      j
    ))
  ] });
}
const av = document.getElementById("home-interactive-root");
av && qo.createRoot(av).render(/* @__PURE__ */ yt.jsx(UT, {}));
const uv = document.getElementById("back-to-top-root");
uv && qo.createRoot(uv).render(
  /* @__PURE__ */ yt.jsx(
    YT,
    {
      target: "#home",
      direction: "up",
      ariaLabel: "Back to the first page",
      className: "sling-control--return"
    }
  )
);
document.querySelectorAll("[data-program-gallery]").forEach((m) => {
  qo.createRoot(m).render(
    /* @__PURE__ */ yt.jsx(BT, { gallery: m.dataset.programGallery || "auto" })
  );
});
export {
  qT as R,
  ap as a,
  ot as b,
  tp as g,
  yt as j,
  Yo as r
};
