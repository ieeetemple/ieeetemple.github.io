var C0 = { exports: {} }, Nn = {};
var em;
function nh() {
  if (em) return Nn;
  em = 1;
  var N = /* @__PURE__ */ Symbol.for("react.transitional.element"), I = /* @__PURE__ */ Symbol.for("react.fragment");
  function cl(r, zl, Ml) {
    var ut = null;
    if (Ml !== void 0 && (ut = "" + Ml), zl.key !== void 0 && (ut = "" + zl.key), "key" in zl) {
      Ml = {};
      for (var gt in zl)
        gt !== "key" && (Ml[gt] = zl[gt]);
    } else Ml = zl;
    return zl = Ml.ref, {
      $$typeof: N,
      type: r,
      key: ut,
      ref: zl !== void 0 ? zl : null,
      props: Ml
    };
  }
  return Nn.Fragment = I, Nn.jsx = cl, Nn.jsxs = cl, Nn;
}
var nm;
function fh() {
  return nm || (nm = 1, C0.exports = nh()), C0.exports;
}
var x0 = fh(), R0 = { exports: {} }, p = {};
var fm;
function ih() {
  if (fm) return p;
  fm = 1;
  var N = /* @__PURE__ */ Symbol.for("react.transitional.element"), I = /* @__PURE__ */ Symbol.for("react.portal"), cl = /* @__PURE__ */ Symbol.for("react.fragment"), r = /* @__PURE__ */ Symbol.for("react.strict_mode"), zl = /* @__PURE__ */ Symbol.for("react.profiler"), Ml = /* @__PURE__ */ Symbol.for("react.consumer"), ut = /* @__PURE__ */ Symbol.for("react.context"), gt = /* @__PURE__ */ Symbol.for("react.forward_ref"), _l = /* @__PURE__ */ Symbol.for("react.suspense"), Xl = /* @__PURE__ */ Symbol.for("react.memo"), X = /* @__PURE__ */ Symbol.for("react.lazy"), S = /* @__PURE__ */ Symbol.for("react.activity"), x = /* @__PURE__ */ Symbol.for("react.view_transition"), Hl = Symbol.iterator;
  function ct(v) {
    return v === null || typeof v != "object" ? null : (v = Hl && v[Hl] || v["@@iterator"], typeof v == "function" ? v : null);
  }
  var Zl = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, ol = Object.assign, ot = {};
  function vt(v, z, U) {
    this.props = v, this.context = z, this.refs = ot, this.updater = U || Zl;
  }
  vt.prototype.isReactComponent = {}, vt.prototype.setState = function(v, z) {
    if (typeof v != "object" && typeof v != "function" && v != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, v, z, "setState");
  }, vt.prototype.forceUpdate = function(v) {
    this.updater.enqueueForceUpdate(this, v, "forceUpdate");
  };
  function ru() {
  }
  ru.prototype = vt.prototype;
  function At(v, z, U) {
    this.props = v, this.context = z, this.refs = ot, this.updater = U || Zl;
  }
  var Nt = At.prototype = new ru();
  Nt.constructor = At, ol(Nt, vt.prototype), Nt.isPureReactComponent = !0;
  var at = Array.isArray;
  function j() {
  }
  var ul = { H: null, A: null, T: null, S: null }, Ql = Object.prototype.hasOwnProperty;
  function et(v, z, U) {
    var R = U.ref;
    return {
      $$typeof: N,
      type: v,
      key: z,
      ref: R !== void 0 ? R : null,
      props: U
    };
  }
  function rt(v, z) {
    return et(v.type, z, v.props);
  }
  function st(v) {
    return typeof v == "object" && v !== null && v.$$typeof === N;
  }
  function Dl(v) {
    var z = { "=": "=0", ":": "=2" };
    return "$" + v.replace(/[=:]/g, function(U) {
      return z[U];
    });
  }
  var eu = /\/+/g;
  function Yl(v, z) {
    return typeof v == "object" && v !== null && v.key != null ? Dl("" + v.key) : z.toString(36);
  }
  function O(v) {
    switch (v.status) {
      case "fulfilled":
        return v.value;
      case "rejected":
        throw v.reason;
      default:
        switch (typeof v.status == "string" ? v.then(j, j) : (v.status = "pending", v.then(
          function(z) {
            v.status === "pending" && (v.status = "fulfilled", v.value = z);
          },
          function(z) {
            v.status === "pending" && (v.status = "rejected", v.reason = z);
          }
        )), v.status) {
          case "fulfilled":
            return v.value;
          case "rejected":
            throw v.reason;
        }
    }
    throw v;
  }
  function H(v, z, U, R, K) {
    var k = typeof v;
    (k === "undefined" || k === "boolean") && (v = null);
    var P = !1;
    if (v === null) P = !0;
    else
      switch (k) {
        case "bigint":
        case "string":
        case "number":
          P = !0;
          break;
        case "object":
          switch (v.$$typeof) {
            case N:
            case I:
              P = !0;
              break;
            case X:
              return P = v._init, H(
                P(v._payload),
                z,
                U,
                R,
                K
              );
          }
      }
    if (P)
      return K = K(v), P = R === "" ? "." + Yl(v, 0) : R, at(K) ? (U = "", P != null && (U = P.replace(eu, "$&/") + "/"), H(K, z, U, "", function(Qt) {
        return Qt;
      })) : K != null && (st(K) && (K = rt(
        K,
        U + (K.key == null || v && v.key === K.key ? "" : ("" + K.key).replace(
          eu,
          "$&/"
        ) + "/") + P
      )), z.push(K)), 1;
    P = 0;
    var C = R === "" ? "." : R + ":";
    if (at(v))
      for (var q = 0; q < v.length; q++)
        R = v[q], k = C + Yl(R, q), P += H(
          R,
          z,
          U,
          k,
          K
        );
    else if (q = ct(v), typeof q == "function")
      for (v = q.call(v), q = 0; !(R = v.next()).done; )
        R = R.value, k = C + Yl(R, q++), P += H(
          R,
          z,
          U,
          k,
          K
        );
    else if (k === "object") {
      if (typeof v.then == "function")
        return H(
          O(v),
          z,
          U,
          R,
          K
        );
      throw z = String(v), Error(
        "Objects are not valid as a React child (found: " + (z === "[object Object]" ? "object with keys {" + Object.keys(v).join(", ") + "}" : z) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return P;
  }
  function A(v, z, U) {
    if (v == null) return v;
    var R = [], K = 0;
    return H(v, R, "", "", function(k) {
      return z.call(U, k, K++);
    }), R;
  }
  function b(v) {
    if (v._status === -1) {
      var z = v._result, U = z();
      U.then(
        function(R) {
          (v._status === 0 || v._status === -1) && (v._status = 1, v._result = R, U.status === void 0 && (U.status = "fulfilled", U.value = R));
        },
        function(R) {
          (v._status === 0 || v._status === -1) && (v._status = 2, v._result = R, U.status === void 0 && (U.status = "rejected", U.reason = R));
        }
      ), v._status === -1 && (v._status = 0, v._result = U);
    }
    if (v._status === 1) return v._result.default;
    throw v._result;
  }
  var L = typeof reportError == "function" ? reportError : function(v) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var z = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof v == "object" && v !== null && typeof v.message == "string" ? String(v.message) : String(v),
        error: v
      });
      if (!window.dispatchEvent(z)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", v);
      return;
    }
    console.error(v);
  };
  function wl(v) {
    var z = ul.T, U = {};
    U.types = z !== null ? z.types : null, ul.T = U;
    try {
      var R = v(), K = ul.S;
      K !== null && K(U, R), typeof R == "object" && R !== null && typeof R.then == "function" && R.then(j, L);
    } catch (k) {
      L(k);
    } finally {
      z !== null && U.types !== null && (z.types = U.types), ul.T = z;
    }
  }
  function Xt(v) {
    var z = ul.T;
    if (z !== null) {
      var U = z.types;
      U === null ? z.types = [v] : U.indexOf(v) === -1 && U.push(v);
    } else wl(Xt.bind(null, v));
  }
  var Ul = {
    map: A,
    forEach: function(v, z, U) {
      A(
        v,
        function() {
          z.apply(this, arguments);
        },
        U
      );
    },
    count: function(v) {
      var z = 0;
      return A(v, function() {
        z++;
      }), z;
    },
    toArray: function(v) {
      return A(v, function(z) {
        return z;
      }) || [];
    },
    only: function(v) {
      if (!st(v))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return v;
    }
  };
  return p.Activity = S, p.Children = Ul, p.Component = vt, p.Fragment = cl, p.Profiler = zl, p.PureComponent = At, p.StrictMode = r, p.Suspense = _l, p.ViewTransition = x, p.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = ul, p.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(v) {
      return ul.H.useMemoCache(v);
    }
  }, p.addTransitionType = Xt, p.cache = function(v) {
    return function() {
      return v.apply(null, arguments);
    };
  }, p.cacheSignal = function() {
    return null;
  }, p.cloneElement = function(v, z, U) {
    if (v == null)
      throw Error(
        "The argument must be a React element, but you passed " + v + "."
      );
    var R = ol({}, v.props), K = v.key;
    if (z != null)
      for (k in z.key !== void 0 && (K = "" + z.key), z)
        !Ql.call(z, k) || k === "key" || k === "__self" || k === "__source" || k === "ref" && z.ref === void 0 || (R[k] = z[k]);
    var k = arguments.length - 2;
    if (k === 1) R.children = U;
    else if (1 < k) {
      for (var P = Array(k), C = 0; C < k; C++)
        P[C] = arguments[C + 2];
      R.children = P;
    }
    return et(v.type, K, R);
  }, p.createContext = function(v) {
    return v = {
      $$typeof: ut,
      _currentValue: v,
      _currentValue2: v,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, v.Provider = v, v.Consumer = {
      $$typeof: Ml,
      _context: v
    }, v;
  }, p.createElement = function(v, z, U) {
    var R, K = {}, k = null;
    if (z != null)
      for (R in z.key !== void 0 && (k = "" + z.key), z)
        Ql.call(z, R) && R !== "key" && R !== "__self" && R !== "__source" && (K[R] = z[R]);
    var P = arguments.length - 2;
    if (P === 1) K.children = U;
    else if (1 < P) {
      for (var C = Array(P), q = 0; q < P; q++)
        C[q] = arguments[q + 2];
      K.children = C;
    }
    if (v && v.defaultProps)
      for (R in P = v.defaultProps, P)
        K[R] === void 0 && (K[R] = P[R]);
    return et(v, k, K);
  }, p.createRef = function() {
    return { current: null };
  }, p.forwardRef = function(v) {
    return { $$typeof: gt, render: v };
  }, p.isValidElement = st, p.lazy = function(v) {
    return {
      $$typeof: X,
      _payload: { _status: -1, _result: v },
      _init: b
    };
  }, p.memo = function(v, z) {
    return {
      $$typeof: Xl,
      type: v,
      compare: z === void 0 ? null : z
    };
  }, p.startTransition = wl, p.unstable_useCacheRefresh = function() {
    return ul.H.useCacheRefresh();
  }, p.use = function(v) {
    return ul.H.use(v);
  }, p.useActionState = function(v, z, U) {
    return ul.H.useActionState(v, z, U);
  }, p.useCallback = function(v, z) {
    return ul.H.useCallback(v, z);
  }, p.useContext = function(v) {
    return ul.H.useContext(v);
  }, p.useDebugValue = function() {
  }, p.useDeferredValue = function(v, z) {
    return ul.H.useDeferredValue(v, z);
  }, p.useEffect = function(v, z) {
    return ul.H.useEffect(v, z);
  }, p.useEffectEvent = function(v) {
    return ul.H.useEffectEvent(v);
  }, p.useId = function() {
    return ul.H.useId();
  }, p.useImperativeHandle = function(v, z, U) {
    return ul.H.useImperativeHandle(v, z, U);
  }, p.useInsertionEffect = function(v, z) {
    return ul.H.useInsertionEffect(v, z);
  }, p.useLayoutEffect = function(v, z) {
    return ul.H.useLayoutEffect(v, z);
  }, p.useMemo = function(v, z) {
    return ul.H.useMemo(v, z);
  }, p.useOptimistic = function(v, z) {
    return ul.H.useOptimistic(v, z);
  }, p.useReducer = function(v, z, U) {
    return ul.H.useReducer(v, z, U);
  }, p.useRef = function(v) {
    return ul.H.useRef(v);
  }, p.useState = function(v) {
    return ul.H.useState(v);
  }, p.useSyncExternalStore = function(v, z, U) {
    return ul.H.useSyncExternalStore(
      v,
      z,
      U
    );
  }, p.useTransition = function() {
    return ul.H.useTransition();
  }, p.version = "19.3.0", p;
}
var im;
function G0() {
  return im || (im = 1, R0.exports = ih()), R0.exports;
}
var ui = G0(), H0 = { exports: {} }, Mn = {}, Y0 = { exports: {} }, q0 = {};
var cm;
function ch() {
  return cm || (cm = 1, (function(N) {
    function I(O, H) {
      var A = O.length;
      O.push(H);
      l: for (; 0 < A; ) {
        var b = A - 1 >>> 1, L = O[b];
        if (0 < zl(L, H))
          O[b] = H, O[A] = L, A = b;
        else break l;
      }
    }
    function cl(O) {
      return O.length === 0 ? null : O[0];
    }
    function r(O) {
      if (O.length === 0) return null;
      var H = O[0], A = O.pop();
      if (A !== H) {
        O[0] = A;
        l: for (var b = 0, L = O.length, wl = L >>> 1; b < wl; ) {
          var Xt = 2 * (b + 1) - 1, Ul = O[Xt], v = Xt + 1, z = O[v];
          if (0 > zl(Ul, A))
            v < L && 0 > zl(z, Ul) ? (O[b] = z, O[v] = A, b = v) : (O[b] = Ul, O[Xt] = A, b = Xt);
          else if (v < L && 0 > zl(z, A))
            O[b] = z, O[v] = A, b = v;
          else break l;
        }
      }
      return H;
    }
    function zl(O, H) {
      var A = O.sortIndex - H.sortIndex;
      return A !== 0 ? A : O.id - H.id;
    }
    if (N.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var Ml = performance;
      N.unstable_now = function() {
        return Ml.now();
      };
    } else {
      var ut = Date, gt = ut.now();
      N.unstable_now = function() {
        return ut.now() - gt;
      };
    }
    var _l = [], Xl = [], X = 1, S = null, x = 3, Hl = !1, ct = !1, Zl = !1, ol = !1, ot = typeof setTimeout == "function" ? setTimeout : null, vt = typeof clearTimeout == "function" ? clearTimeout : null, ru = typeof setImmediate < "u" ? setImmediate : null;
    function At(O) {
      for (var H = cl(Xl); H !== null; ) {
        if (H.callback === null) r(Xl);
        else if (H.startTime <= O)
          r(Xl), H.sortIndex = H.expirationTime, I(_l, H);
        else break;
        H = cl(Xl);
      }
    }
    function Nt(O) {
      if (Zl = !1, At(O), !ct)
        if (cl(_l) !== null)
          ct = !0, at || (at = !0, st());
        else {
          var H = cl(Xl);
          H !== null && Yl(Nt, H.startTime - O);
        }
    }
    var at = !1, j = -1, ul = 5, Ql = -1;
    function et() {
      return ol ? !0 : !(N.unstable_now() - Ql < ul);
    }
    function rt() {
      if (ol = !1, at) {
        var O = N.unstable_now();
        Ql = O;
        var H = !0;
        try {
          l: {
            ct = !1, Zl && (Zl = !1, vt(j), j = -1), Hl = !0;
            var A = x;
            try {
              t: {
                for (At(O), S = cl(_l); S !== null && !(S.expirationTime > O && et()); ) {
                  var b = S.callback;
                  if (typeof b == "function") {
                    S.callback = null, x = S.priorityLevel;
                    var L = b(
                      S.expirationTime <= O
                    );
                    if (O = N.unstable_now(), typeof L == "function") {
                      S.callback = L, At(O), H = !0;
                      break t;
                    }
                    S === cl(_l) && r(_l), At(O);
                  } else r(_l);
                  S = cl(_l);
                }
                if (S !== null) H = !0;
                else {
                  var wl = cl(Xl);
                  wl !== null && Yl(
                    Nt,
                    wl.startTime - O
                  ), H = !1;
                }
              }
              break l;
            } finally {
              S = null, x = A, Hl = !1;
            }
            H = void 0;
          }
        } finally {
          H ? st() : at = !1;
        }
      }
    }
    var st;
    if (typeof ru == "function")
      st = function() {
        ru(rt);
      };
    else if (typeof MessageChannel < "u") {
      var Dl = new MessageChannel(), eu = Dl.port2;
      Dl.port1.onmessage = rt, st = function() {
        eu.postMessage(null);
      };
    } else
      st = function() {
        ot(rt, 0);
      };
    function Yl(O, H) {
      j = ot(function() {
        O(N.unstable_now());
      }, H);
    }
    N.unstable_IdlePriority = 5, N.unstable_ImmediatePriority = 1, N.unstable_LowPriority = 4, N.unstable_NormalPriority = 3, N.unstable_Profiling = null, N.unstable_UserBlockingPriority = 2, N.unstable_cancelCallback = function(O) {
      O.callback = null;
    }, N.unstable_forceFrameRate = function(O) {
      0 > O || 125 < O ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : ul = 0 < O ? Math.floor(1e3 / O) : 5;
    }, N.unstable_getCurrentPriorityLevel = function() {
      return x;
    }, N.unstable_next = function(O) {
      switch (x) {
        case 1:
        case 2:
        case 3:
          var H = 3;
          break;
        default:
          H = x;
      }
      var A = x;
      x = H;
      try {
        return O();
      } finally {
        x = A;
      }
    }, N.unstable_requestPaint = function() {
      ol = !0;
    }, N.unstable_runWithPriority = function(O, H) {
      switch (O) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          O = 3;
      }
      var A = x;
      x = O;
      try {
        return H();
      } finally {
        x = A;
      }
    }, N.unstable_scheduleCallback = function(O, H, A) {
      var b = N.unstable_now();
      switch (typeof A == "object" && A !== null ? (A = A.delay, A = typeof A == "number" && 0 < A ? b + A : b) : A = b, O) {
        case 1:
          var L = -1;
          break;
        case 2:
          L = 250;
          break;
        case 5:
          L = 1073741823;
          break;
        case 4:
          L = 1e4;
          break;
        default:
          L = 5e3;
      }
      return L = A + L, O = {
        id: X++,
        callback: H,
        priorityLevel: O,
        startTime: A,
        expirationTime: L,
        sortIndex: -1
      }, A > b ? (O.sortIndex = A, I(Xl, O), cl(_l) === null && O === cl(Xl) && (Zl ? (vt(j), j = -1) : Zl = !0, Yl(Nt, A - b))) : (O.sortIndex = L, I(_l, O), ct || Hl || (ct = !0, at || (at = !0, st()))), O;
    }, N.unstable_shouldYield = et, N.unstable_wrapCallback = function(O) {
      var H = x;
      return function() {
        var A = x;
        x = H;
        try {
          return O.apply(this, arguments);
        } finally {
          x = A;
        }
      };
    };
  })(q0)), q0;
}
var om;
function oh() {
  return om || (om = 1, Y0.exports = ch()), Y0.exports;
}
var B0 = { exports: {} }, tt = {};
var vm;
function vh() {
  if (vm) return tt;
  vm = 1;
  var N = G0();
  function I(X) {
    var S = "https://react.dev/errors/" + X;
    if (1 < arguments.length) {
      S += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var x = 2; x < arguments.length; x++)
        S += "&args[]=" + encodeURIComponent(arguments[x]);
    }
    return "Minified React error #" + X + "; visit " + S + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function cl() {
  }
  var r = {
    d: {
      f: cl,
      r: function() {
        throw Error(I(522));
      },
      D: cl,
      C: cl,
      L: cl,
      m: cl,
      X: cl,
      S: cl,
      M: cl
    },
    p: 0,
    findDOMNode: null
  }, zl = /* @__PURE__ */ Symbol.for("react.portal"), Ml = /* @__PURE__ */ Symbol.for("react.recoverable"), ut = /* @__PURE__ */ Symbol.for("react.optimistic_key");
  function gt(X, S, x) {
    var Hl = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: zl,
      key: Hl == null ? null : Hl === ut ? ut : "" + Hl,
      children: X,
      containerInfo: S,
      implementation: x
    };
  }
  var _l = N.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function Xl(X, S) {
    if (X === "font") return "";
    if (typeof S == "string")
      return S === "use-credentials" ? S : "";
  }
  return tt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = r, tt.browser = function(X) {
    return { $$typeof: Ml, _reason: X };
  }, tt.createPortal = function(X, S) {
    var x = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!S || S.nodeType !== 1 && S.nodeType !== 9 && S.nodeType !== 11)
      throw Error(I(299));
    return gt(X, S, null, x);
  }, tt.flushSync = function(X) {
    var S = _l.T, x = r.p;
    try {
      if (_l.T = null, r.p = 2, X) return X();
    } finally {
      _l.T = S, r.p = x, r.d.f();
    }
  }, tt.preconnect = function(X, S) {
    typeof X == "string" && (S ? (S = S.crossOrigin, S = typeof S == "string" ? S === "use-credentials" ? S : "" : void 0) : S = null, r.d.C(X, S));
  }, tt.prefetchDNS = function(X) {
    typeof X == "string" && r.d.D(X);
  }, tt.preinit = function(X, S) {
    if (typeof X == "string" && S && typeof S.as == "string") {
      var x = S.as, Hl = Xl(x, S.crossOrigin), ct = typeof S.integrity == "string" ? S.integrity : void 0, Zl = typeof S.fetchPriority == "string" ? S.fetchPriority : void 0;
      x === "style" ? r.d.S(
        X,
        typeof S.precedence == "string" ? S.precedence : void 0,
        {
          crossOrigin: Hl,
          integrity: ct,
          fetchPriority: Zl
        }
      ) : x === "script" && r.d.X(X, {
        crossOrigin: Hl,
        integrity: ct,
        fetchPriority: Zl,
        nonce: typeof S.nonce == "string" ? S.nonce : void 0
      });
    }
  }, tt.preinitModule = function(X, S) {
    if (typeof X == "string")
      if (typeof S == "object" && S !== null) {
        if (S.as == null || S.as === "script") {
          var x = Xl(
            S.as,
            S.crossOrigin
          );
          r.d.M(X, {
            crossOrigin: x,
            integrity: typeof S.integrity == "string" ? S.integrity : void 0,
            nonce: typeof S.nonce == "string" ? S.nonce : void 0,
            fetchPriority: typeof S.fetchPriority == "string" ? S.fetchPriority : void 0
          });
        }
      } else S == null && r.d.M(X);
  }, tt.preload = function(X, S) {
    if (typeof X == "string" && typeof S == "object" && S !== null && typeof S.as == "string") {
      var x = S.as, Hl = Xl(x, S.crossOrigin);
      r.d.L(X, x, {
        crossOrigin: Hl,
        integrity: typeof S.integrity == "string" ? S.integrity : void 0,
        nonce: typeof S.nonce == "string" ? S.nonce : void 0,
        type: typeof S.type == "string" ? S.type : void 0,
        fetchPriority: typeof S.fetchPriority == "string" ? S.fetchPriority : void 0,
        referrerPolicy: typeof S.referrerPolicy == "string" ? S.referrerPolicy : void 0,
        imageSrcSet: typeof S.imageSrcSet == "string" ? S.imageSrcSet : void 0,
        imageSizes: typeof S.imageSizes == "string" ? S.imageSizes : void 0,
        media: typeof S.media == "string" ? S.media : void 0
      });
    }
  }, tt.preloadModule = function(X, S) {
    if (typeof X == "string")
      if (S) {
        var x = Xl(S.as, S.crossOrigin);
        r.d.m(X, {
          as: typeof S.as == "string" && S.as !== "script" ? S.as : void 0,
          crossOrigin: x,
          integrity: typeof S.integrity == "string" ? S.integrity : void 0,
          nonce: typeof S.nonce == "string" ? S.nonce : void 0,
          fetchPriority: typeof S.fetchPriority == "string" ? S.fetchPriority : void 0
        });
      } else r.d.m(X);
  }, tt.requestFormReset = function(X) {
    r.d.r(X);
  }, tt.unstable_batchedUpdates = function(X, S) {
    return X(S);
  }, tt.useFormState = function(X, S, x) {
    return _l.H.useFormState(X, S, x);
  }, tt.useFormStatus = function() {
    return _l.H.useHostTransitionStatus();
  }, tt.version = "19.3.0", tt;
}
var sm;
function sh() {
  if (sm) return B0.exports;
  sm = 1;
  function N() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(N);
      } catch (I) {
        console.error(I);
      }
  }
  return N(), B0.exports = vh(), B0.exports;
}
var ym;
function yh() {
  if (ym) return Mn;
  ym = 1;
  var N = oh(), I = G0(), cl = sh();
  function r(l) {
    var t = "https://react.dev/errors/" + l;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var u = 2; u < arguments.length; u++)
        t += "&args[]=" + encodeURIComponent(arguments[u]);
    }
    return "Minified React error #" + l + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function zl(l) {
    return !(!l || l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11);
  }
  function Ml(l) {
    for (var t = l, u = t; u && !u.alternate; )
      t = u, (t.flags & 4098) !== 0 && (l = t.return), u = t.return;
    for (; t.return; ) t = t.return;
    return t.tag === 3 ? l : null;
  }
  function ut(l) {
    if (l.tag === 13) {
      var t = l.memoizedState;
      if (t === null && (l = l.alternate, l !== null && (t = l.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function gt(l) {
    if (l.tag === 31) {
      var t = l.memoizedState;
      if (t === null && (l = l.alternate, l !== null && (t = l.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function _l(l) {
    if (Ml(l) !== l)
      throw Error(r(188));
  }
  function Xl(l) {
    var t = l.alternate;
    if (!t) {
      if (t = Ml(l), t === null) throw Error(r(188));
      return t !== l ? null : l;
    }
    for (var u = l, a = t; ; ) {
      var e = u.return;
      if (e === null) break;
      var n = e.alternate;
      if (n === null) {
        if (a = e.return, a !== null) {
          u = a;
          continue;
        }
        break;
      }
      if (e.child === n.child) {
        for (n = e.child; n; ) {
          if (n === u) return _l(e), l;
          if (n === a) return _l(e), t;
          n = n.sibling;
        }
        throw Error(r(188));
      }
      if (u.return !== a.return) u = e, a = n;
      else {
        for (var f = !1, i = e.child; i; ) {
          if (i === u) {
            f = !0, u = e, a = n;
            break;
          }
          if (i === a) {
            f = !0, a = e, u = n;
            break;
          }
          i = i.sibling;
        }
        if (!f) {
          for (i = n.child; i; ) {
            if (i === u) {
              f = !0, u = n, a = e;
              break;
            }
            if (i === a) {
              f = !0, a = n, u = e;
              break;
            }
            i = i.sibling;
          }
          if (!f) throw Error(r(189));
        }
      }
      if (u.alternate !== a) throw Error(r(190));
    }
    if (u.tag !== 3) throw Error(r(188));
    return u.stateNode.current === u ? l : t;
  }
  function X(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l;
    for (l = l.child; l !== null; ) {
      if (t = X(l), t !== null) return t;
      l = l.sibling;
    }
    return null;
  }
  function S(l, t, u, a, e, n) {
    for (; l !== null; ) {
      if ((l.tag === 5 || l.tag === 27 || l.tag === 6) && u(l, a, e, n) || (l.tag !== 22 || l.memoizedState === null) && (t || l.tag !== 5 && l.tag !== 27) && S(
        l.child,
        t,
        u,
        a,
        e,
        n
      ))
        return !0;
      l = l.sibling;
    }
    return !1;
  }
  function x(l) {
    for (l = l.return; l !== null; ) {
      if (l.tag === 3 || l.tag === 5 || l.tag === 27) return l;
      l = l.return;
    }
    return null;
  }
  function Hl(l) {
    var t = !1;
    for (l = l.return; l !== null && (l.tag === 4 && (t = !0), !(l.tag === 3 || l.tag === 5 || l.tag === 27)); )
      l = l.return;
    return t;
  }
  function ct(l) {
    var t = [null, null], u = x(l);
    return u === null || Zl(
      t,
      l,
      u.child,
      { foundSelf: !1 }
    ), t;
  }
  function Zl(l, t, u, a) {
    for (; u !== null; ) {
      if (u === t) a.foundSelf = !0;
      else if (u.tag === 5 || u.tag === 27 || u.tag === 6) {
        if (a.foundSelf) return l[1] = u, !0;
        l[0] = u;
      } else if ((u.tag !== 22 || u.memoizedState === null) && Zl(
        l,
        t,
        u.child,
        a
      ))
        return !0;
      u = u.sibling;
    }
    return !1;
  }
  function ol(l) {
    switch (l.tag) {
      case 5:
      case 27:
      case 6:
        return l.stateNode;
      case 3:
        return l.stateNode.containerInfo;
      default:
        throw Error(r(559));
    }
  }
  var ot = null, vt = null;
  function ru(l, t, u) {
    return l === u ? !0 : l === t ? (ot = l, !0) : !1;
  }
  function At(l, t, u) {
    return l === u ? (vt = l, !1) : l === t ? (vt !== null && (ot = l), !0) : !1;
  }
  function Nt(l) {
    if (l === null) return null;
    do
      l = l === null ? null : l.return;
    while (l && l.tag !== 5 && l.tag !== 27 && l.tag !== 3);
    return l || null;
  }
  function at(l, t, u) {
    for (var a = 0, e = l; e; e = u(e)) a++;
    e = 0;
    for (var n = t; n; n = u(n)) e++;
    for (; 0 < a - e; ) l = u(l), a--;
    for (; 0 < e - a; ) t = u(t), e--;
    for (; a--; ) {
      if (l === t || t !== null && l === t.alternate)
        return l;
      l = u(l), t = u(t);
    }
    return null;
  }
  var j = Object.assign, ul = /* @__PURE__ */ Symbol.for("react.element"), Ql = /* @__PURE__ */ Symbol.for("react.transitional.element"), et = /* @__PURE__ */ Symbol.for("react.portal"), rt = /* @__PURE__ */ Symbol.for("react.fragment"), st = /* @__PURE__ */ Symbol.for("react.strict_mode"), Dl = /* @__PURE__ */ Symbol.for("react.profiler"), eu = /* @__PURE__ */ Symbol.for("react.consumer"), Yl = /* @__PURE__ */ Symbol.for("react.context"), O = /* @__PURE__ */ Symbol.for("react.forward_ref"), H = /* @__PURE__ */ Symbol.for("react.suspense"), A = /* @__PURE__ */ Symbol.for("react.suspense_list"), b = /* @__PURE__ */ Symbol.for("react.memo"), L = /* @__PURE__ */ Symbol.for("react.lazy"), wl = /* @__PURE__ */ Symbol.for("react.activity"), Xt = /* @__PURE__ */ Symbol.for("react.legacy_hidden"), Ul = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), v = /* @__PURE__ */ Symbol.for("react.view_transition"), z = /* @__PURE__ */ Symbol.for("react.recoverable"), U = Symbol.iterator;
  function R(l) {
    return l === null || typeof l != "object" ? null : (l = U && l[U] || l["@@iterator"], typeof l == "function" ? l : null);
  }
  var K = /* @__PURE__ */ Symbol.for("react.client.reference");
  function k(l) {
    if (l == null) return null;
    if (typeof l == "function")
      return l.$$typeof === K ? null : l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case rt:
        return "Fragment";
      case Dl:
        return "Profiler";
      case st:
        return "StrictMode";
      case H:
        return "Suspense";
      case A:
        return "SuspenseList";
      case wl:
        return "Activity";
      case v:
        return "ViewTransition";
    }
    if (typeof l == "object")
      switch (l.$$typeof) {
        case et:
          return "Portal";
        case Yl:
          return l.displayName || "Context";
        case eu:
          return (l._context.displayName || "Context") + ".Consumer";
        case O:
          var t = l.render;
          return l = l.displayName, l || (l = t.displayName || t.name || "", l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef"), l;
        case b:
          return t = l.displayName || null, t !== null ? t : k(l.type) || "Memo";
        case L:
          t = l._payload, l = l._init;
          try {
            return k(l(t));
          } catch {
          }
      }
    return null;
  }
  var P = Array.isArray, C = I.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, q = cl.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Qt = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, pa = [], xu = -1;
  function St(l) {
    return { current: l };
  }
  function Cl(l) {
    0 > xu || (l.current = pa[xu], pa[xu] = null, xu--);
  }
  function ml(l, t) {
    xu++, pa[xu] = l.current, l.current = t;
  }
  var Mt = St(null), Gu = St(null), pt = St(null), Su = St(null);
  function ma(l, t) {
    switch (ml(pt, t), ml(Gu, l), ml(Mt, null), t.nodeType) {
      case 9:
      case 11:
        l = (l = t.documentElement) && (l = l.namespaceURI) ? my(l) : 0;
        break;
      default:
        if (l = t.tagName, t = t.namespaceURI)
          t = my(t), l = dy(t, l);
        else
          switch (l) {
            case "svg":
              l = 1;
              break;
            case "math":
              l = 2;
              break;
            default:
              l = 0;
          }
    }
    Cl(Mt), ml(Mt, l);
  }
  function G() {
    Cl(Mt), Cl(Gu), Cl(pt);
  }
  function B(l) {
    var t = l.memoizedState;
    t !== null && (Ue._currentValue = t.memoizedState, ml(Su, l)), t = Mt.current;
    var u = dy(t, l.type);
    t !== u && (ml(Gu, l), ml(Mt, u));
  }
  function el(l) {
    Gu.current === l && (Cl(Mt), Cl(Gu)), Su.current === l && (Cl(Su), Ue._currentValue = Qt);
  }
  var ll, rl;
  function nl(l) {
    if (ll === void 0)
      try {
        throw Error();
      } catch (u) {
        var t = u.stack.trim().match(/\n( *(at )?)/);
        ll = t && t[1] || "", rl = -1 < u.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < u.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + ll + l + rl;
  }
  var jt = !1;
  function It(l, t) {
    if (!l || jt) return "";
    jt = !0;
    var u = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function() {
          try {
            if (t) {
              var E = function() {
                throw Error();
              };
              if (Object.defineProperty(E.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(E, []);
                } catch (_) {
                  var s = _;
                }
                Reflect.construct(l, [], E);
              } else {
                try {
                  E.call();
                } catch (_) {
                  s = _;
                }
                E = !1;
                try {
                  var h = Object.getOwnPropertyDescriptor(
                    l.prototype,
                    "props"
                  );
                  Object.defineProperty(l.prototype, "props", {
                    configurable: !0,
                    set: function() {
                      throw Error();
                    }
                  }), E = !0, new l();
                } finally {
                  E && (h !== void 0 ? Object.defineProperty(l.prototype, "props", h) : delete l.prototype.props);
                }
              }
            } else {
              try {
                throw Error();
              } catch (_) {
                s = _;
              }
              (E = l()) && typeof E.catch == "function" && E.catch(function() {
              });
            }
          } catch (_) {
            if (_ && s && typeof _.stack == "string")
              return [_.stack, s.stack];
          }
          return [null, null];
        }
      };
      a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var e = Object.getOwnPropertyDescriptor(
        a.DetermineComponentFrameRoot,
        "name"
      );
      e && e.configurable && Object.defineProperty(
        a.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var n = a.DetermineComponentFrameRoot(), f = n[0], i = n[1];
      if (f && i) {
        var c = f.split(`
`), m = i.split(`
`);
        for (e = a = 0; a < c.length && !c[a].includes("DetermineComponentFrameRoot"); )
          a++;
        for (; e < m.length && !m[e].includes(
          "DetermineComponentFrameRoot"
        ); )
          e++;
        if (a === c.length || e === m.length)
          for (a = c.length - 1, e = m.length - 1; 1 <= a && 0 <= e && c[a] !== m[e]; )
            e--;
        for (; 1 <= a && 0 <= e; a--, e--)
          if (c[a] !== m[e]) {
            if (a !== 1 || e !== 1)
              do
                if (a--, e--, 0 > e || c[a] !== m[e]) {
                  var g = `
` + c[a].replace(" at new ", " at ");
                  return l.displayName && g.includes("<anonymous>") && (g = g.replace("<anonymous>", l.displayName)), g;
                }
              while (1 <= a && 0 <= e);
            break;
          }
      }
    } finally {
      jt = !1, Error.prepareStackTrace = u;
    }
    return (u = l ? l.displayName || l.name : "") ? nl(u) : "";
  }
  function He(l, t) {
    switch (l.tag) {
      case 26:
      case 27:
      case 5:
        return nl(l.type);
      case 16:
        return nl("Lazy");
      case 13:
        return l.child !== t && t !== null ? nl("Suspense Fallback") : nl("Suspense");
      case 19:
        return nl("SuspenseList");
      case 0:
      case 15:
        return It(l.type, !1);
      case 11:
        return It(l.type.render, !1);
      case 1:
        return It(l.type, !0);
      case 31:
        return nl("Activity");
      case 30:
        return nl("ViewTransition");
      default:
        return "";
    }
  }
  function ja(l) {
    try {
      var t = "", u = null;
      do
        t += He(l, u), u = l, l = l.return;
      while (l);
      return t;
    } catch (a) {
      return `
Error generating stack: ` + a.message + `
` + a.stack;
    }
  }
  var pl = Object.prototype.hasOwnProperty, $l = N.unstable_scheduleCallback, Tu = N.unstable_cancelCallback, nt = N.unstable_shouldYield, dl = N.unstable_requestPaint, Ol = N.unstable_now, da = N.unstable_getCurrentPriorityLevel, Xu = N.unstable_ImmediatePriority, nu = N.unstable_UserBlockingPriority, Dt = N.unstable_NormalPriority, ha = N.unstable_LowPriority, Qu = N.unstable_IdlePriority, Eu = N.log, Za = N.unstable_setDisableYieldValue, ga = null, ft = null;
  function pu(l) {
    if (typeof Eu == "function" && Za(l), ft && typeof ft.setStrictMode == "function")
      try {
        ft.setStrictMode(ga, l);
      } catch {
      }
  }
  var Ut = Math.clz32 ? Math.clz32 : Sm, gm = Math.log, rm = Math.LN2;
  function Sm(l) {
    return l >>>= 0, l === 0 ? 32 : 31 - (gm(l) / rm | 0) | 0;
  }
  var Un = 256, Cn = 262144, Rn = 4194304;
  function ra(l) {
    var t = l & 42;
    if (t !== 0) return t;
    switch (l & -l) {
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
        return l & -l;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return l & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return l & 62914560;
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
        return l;
    }
  }
  function Hn(l, t, u) {
    var a = l.pendingLanes;
    if (a === 0) return 0;
    var e = 0, n = l.suspendedLanes, f = l.pingedLanes;
    l = l.warmLanes;
    var i = a & 134217727;
    return i !== 0 ? (a = i & ~n, a !== 0 ? e = ra(a) : (f &= i, f !== 0 ? e = ra(f) : u || (u = i & ~l, u !== 0 && (e = ra(u))))) : (i = a & ~n, i !== 0 ? e = ra(i) : f !== 0 ? e = ra(f) : u || (u = a & ~l, u !== 0 && (e = ra(u)))), e === 0 ? 0 : t !== 0 && t !== e && (t & n) === 0 && (n = e & -e, u = t & -t, n >= u || n === 32 && (u & 4194048) !== 0) ? t : e;
  }
  function Ye(l, t) {
    return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & t) === 0;
  }
  function X0(l, t) {
    (t & 8) !== 0 && (t |= t & 32);
    var u = l.entangledLanes;
    if (u !== 0)
      for (l = l.entanglements, u &= t; 0 < u; ) {
        var a = 31 - Ut(u), e = 1 << a;
        t |= l[a], u &= ~e;
      }
    return t;
  }
  function Tm(l, t) {
    switch (l) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
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
        return t + 5e3;
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
  function Q0() {
    var l = Rn;
    return Rn <<= 1, (Rn & 62914560) === 0 && (Rn = 4194304), l;
  }
  function ai(l) {
    for (var t = [], u = 0; 31 > u; u++) t.push(l);
    return t;
  }
  function qe(l, t) {
    l.pendingLanes |= t, t !== 268435456 && (l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0);
  }
  function Em(l, t, u, a, e, n) {
    var f = l.pendingLanes;
    l.pendingLanes = u, l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0, l.expiredLanes &= u, l.entangledLanes &= u, l.errorRecoveryDisabledLanes &= u, l.shellSuspendCounter = 0;
    var i = l.entanglements, c = l.expirationTimes, m = l.hiddenUpdates;
    for (u = f & ~u; 0 < u; ) {
      var g = 31 - Ut(u), E = 1 << g;
      i[g] = 0, c[g] = -1;
      var s = m[g];
      if (s !== null)
        for (m[g] = null, g = 0; g < s.length; g++) {
          var h = s[g];
          h !== null && (h.lane &= -536870913);
        }
      u &= ~E;
    }
    a !== 0 && p0(l, a, 0), n !== 0 && e === 0 && l.tag !== 0 && (l.suspendedLanes |= n & ~(f & ~t));
  }
  function p0(l, t, u) {
    l.pendingLanes |= t, l.suspendedLanes &= ~t;
    var a = 31 - Ut(t);
    l.entangledLanes |= t, l.entanglements[a] = l.entanglements[a] | 1073741824 | u & 261930;
  }
  function j0(l, t) {
    var u = l.entangledLanes |= t;
    for (l = l.entanglements; u; ) {
      var a = 31 - Ut(u), e = 1 << a;
      e & t | l[a] & t && (l[a] |= t), u &= ~e;
    }
  }
  function Z0(l, t) {
    var u = t & -t;
    return u = (u & 42) !== 0 ? 1 : ei(u), (u & (l.suspendedLanes | t)) !== 0 ? 0 : u;
  }
  function ei(l) {
    switch (l) {
      case 2:
        l = 1;
        break;
      case 8:
        l = 4;
        break;
      case 32:
        l = 16;
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
        l = 128;
        break;
      case 268435456:
        l = 134217728;
        break;
      default:
        l = 0;
    }
    return l;
  }
  function ni(l) {
    return l &= -l, 2 < l ? 8 < l ? (l & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function V0() {
    var l = q.p;
    return l !== 0 ? l : (l = window.event, l === void 0 ? 32 : Iy(l.type));
  }
  function L0(l, t) {
    var u = q.p;
    try {
      return q.p = l, t();
    } finally {
      q.p = u;
    }
  }
  var zu = Math.random().toString(36).slice(2), Fl = "__reactFiber$" + zu, Tt = "__reactProps$" + zu, Va = "__reactContainer$" + zu, K0 = "__reactEvents$" + zu, zm = "__reactListeners$" + zu, bm = "__reactHandles$" + zu, J0 = "__reactResources$" + zu, Be = "__reactMarker$" + zu, Yn = "__reactLoad$" + zu;
  function qn(l) {
    delete l[Fl], delete l[Tt], delete l[zm], delete l[bm];
  }
  function Sa(l) {
    var t;
    if (t = l[Fl]) return t;
    for (var u = l.parentNode; u; ) {
      if (t = u[Va] || u[Fl]) {
        if (u = t.alternate, t.child !== null || u !== null && u.child !== null)
          for (l = Ry(l); l !== null; ) {
            if (u = l[Fl]) return u;
            l = Ry(l);
          }
        return t;
      }
      l = u, u = l.parentNode;
    }
    return null;
  }
  function La(l) {
    if (l = l[Fl] || l[Va]) {
      var t = l.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3)
        return l;
    }
    return null;
  }
  function xe(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l.stateNode;
    throw Error(r(33));
  }
  function Ka(l) {
    var t = l[J0];
    return t || (t = l[J0] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function Vl(l) {
    l[Be] = !0;
  }
  function w0(l) {
    l[Yn] = void 0;
  }
  var $0 = /* @__PURE__ */ new Set(), F0 = {};
  function Ta(l, t) {
    Ja(l, t), Ja(l + "Capture", t);
  }
  function Ja(l, t) {
    for (F0[l] = t, l = 0; l < t.length; l++)
      $0.add(t[l]);
  }
  var _m = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), W0 = {}, I0 = {};
  function Om(l) {
    return pl.call(I0, l) ? !0 : pl.call(W0, l) ? !1 : _m.test(l) ? I0[l] = !0 : (W0[l] = !0, !1);
  }
  var al = !1;
  function k0() {
    var l = al;
    return al = !1, l;
  }
  function Bn(l, t, u) {
    if (Om(t))
      if (u === null) l.removeAttribute(t);
      else {
        switch (typeof u) {
          case "undefined":
          case "function":
          case "symbol":
            l.removeAttribute(t);
            return;
          case "boolean":
            var a = t.toLowerCase().slice(0, 5);
            if (a !== "data-" && a !== "aria-") {
              l.removeAttribute(t);
              return;
            }
        }
        l.setAttribute(t, u);
      }
  }
  function xn(l, t, u) {
    if (u === null) l.removeAttribute(t);
    else {
      switch (typeof u) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(t);
          return;
      }
      l.setAttribute(t, u);
    }
  }
  function bu(l, t, u, a) {
    if (a === null) l.removeAttribute(u);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(u);
          return;
      }
      l.setAttributeNS(t, u, a);
    }
  }
  function Ct(l) {
    switch (typeof l) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return l;
      case "object":
        return l;
      default:
        return "";
    }
  }
  function P0(l) {
    var t = l.type;
    return (l = l.nodeName) && l.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function Am(l, t, u) {
    var a = Object.getOwnPropertyDescriptor(
      l.constructor.prototype,
      t
    );
    if (!l.hasOwnProperty(t) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
      var e = a.get, n = a.set;
      return Object.defineProperty(l, t, {
        configurable: !0,
        get: function() {
          return e.call(this);
        },
        set: function(f) {
          u = "" + f, n.call(this, f);
        }
      }), Object.defineProperty(l, t, {
        enumerable: a.enumerable
      }), {
        getValue: function() {
          return u;
        },
        setValue: function(f) {
          u = "" + f;
        },
        stopTracking: function() {
          l._valueTracker = null, delete l[t];
        }
      };
    }
  }
  function fi(l) {
    if (!l._valueTracker) {
      var t = P0(l) ? "checked" : "value";
      l._valueTracker = Am(
        l,
        t,
        "" + l[t]
      );
    }
  }
  function lo(l) {
    if (!l) return !1;
    var t = l._valueTracker;
    if (!t) return !0;
    var u = t.getValue(), a = "";
    return l && (a = P0(l) ? l.checked ? "true" : "false" : l.value), l = a, l !== u ? (t.setValue(l), !0) : !1;
  }
  var Nm = /[\n"\\]/g;
  function Zt(l) {
    return l.replace(
      Nm,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function ii(l, t, u, a, e, n, f, i) {
    l.name = "", f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" ? l.type = f : l.removeAttribute("type"), t != null ? f === "number" ? (t === 0 && l.value === "" || l.value != t) && (l.value = "" + Ct(t)) : l.value !== "" + Ct(t) && (l.value = "" + Ct(t)) : f !== "submit" && f !== "reset" || l.removeAttribute("value"), t != null ? f === "number" && l.value == t ? ci(l, Ct(l.value)) : ci(l, Ct(t)) : u != null ? ci(l, Ct(u)) : a != null && l.removeAttribute("value"), e == null && n != null && (l.defaultChecked = !!n), e != null && (l.checked = e && typeof e != "function" && typeof e != "symbol"), i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" ? l.name = "" + Ct(i) : l.removeAttribute("name");
  }
  function to(l, t, u, a, e, n, f, i) {
    if (n != null && typeof n != "function" && typeof n != "symbol" && typeof n != "boolean" && (l.type = n), t != null || u != null) {
      if (!(n !== "submit" && n !== "reset" || t != null)) {
        fi(l);
        return;
      }
      u = u != null ? "" + Ct(u) : "", t = t != null ? "" + Ct(t) : u, i || t === l.value || (l.value = t), l.defaultValue = t;
    }
    a = a ?? e, a = typeof a != "function" && typeof a != "symbol" && !!a, l.checked = i ? l.checked : !!a, l.defaultChecked = !!a, f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (l.name = f), fi(l);
  }
  function ci(l, t) {
    l.defaultValue !== "" + t && (l.defaultValue = "" + t);
  }
  function wa(l, t, u, a) {
    if (l = l.options, t) {
      t = {};
      for (var e = 0; e < u.length; e++)
        t["$" + u[e]] = !0;
      for (u = 0; u < l.length; u++)
        e = t.hasOwnProperty("$" + l[u].value), l[u].selected !== e && (l[u].selected = e), e && a && (l[u].defaultSelected = !0);
    } else {
      for (u = "" + Ct(u), t = null, e = 0; e < l.length; e++) {
        if (l[e].value === u) {
          l[e].selected = !0, a && (l[e].defaultSelected = !0);
          return;
        }
        t !== null || l[e].disabled || (t = l[e]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function uo(l, t, u) {
    if (t != null && (t = "" + Ct(t), t !== l.value && (l.value = t), u == null)) {
      l.defaultValue !== t && (l.defaultValue = t);
      return;
    }
    l.defaultValue = u != null ? "" + Ct(u) : "";
  }
  function ao(l, t, u, a) {
    if (t == null) {
      if (a != null) {
        if (u != null) throw Error(r(92));
        if (P(a)) {
          if (1 < a.length) throw Error(r(93));
          a = a[0];
        }
        u = a;
      }
      u == null && (u = ""), t = u;
    }
    u = Ct(t), l.defaultValue = u, a = l.textContent, a === u && a !== "" && a !== null && (l.value = a), fi(l);
  }
  function $a(l, t) {
    if (t) {
      var u = l.firstChild;
      if (u && u === l.lastChild && u.nodeType === 3) {
        u.nodeValue = t;
        return;
      }
    }
    l.textContent = t;
  }
  var Mm = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function eo(l, t, u) {
    var a = t.indexOf("--") === 0;
    u == null || typeof u == "boolean" || u === "" ? a ? l.setProperty(t, "") : t === "float" ? l.cssFloat = "" : l[t] = "" : a ? l.setProperty(t, u) : typeof u != "number" || u === 0 || Mm.has(t) ? t === "float" ? l.cssFloat = u : l[t] = ("" + u).trim() : l[t] = u + "px";
  }
  function no(l, t, u) {
    if (t != null && typeof t != "object")
      throw Error(r(62));
    if (l = l.style, u != null) {
      for (var a in u)
        !u.hasOwnProperty(a) || t != null && t.hasOwnProperty(a) || (a.indexOf("--") === 0 ? l.setProperty(a, "") : a === "float" ? l.cssFloat = "" : l[a] = "", al = !0);
      for (var e in t)
        a = t[e], t.hasOwnProperty(e) && u[e] !== a && (eo(l, e, a), al = !0);
    } else
      for (var n in t)
        t.hasOwnProperty(n) && eo(l, n, t[n]);
  }
  function oi(l) {
    if (l.indexOf("-") === -1) return !1;
    switch (l) {
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
  var Dm = /* @__PURE__ */ new Map([
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
  ]), Um = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Gn(l) {
    return Um.test("" + l) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : l;
  }
  function fu() {
  }
  var vi = null;
  function si(l) {
    return l = l.target || l.srcElement || window, l.correspondingUseElement && (l = l.correspondingUseElement), l.nodeType === 3 ? l.parentNode : l;
  }
  var Fa = null, Wa = null;
  function fo(l) {
    var t = La(l);
    if (t && (l = t.stateNode)) {
      var u = l[Tt] || null;
      l: switch (l = t.stateNode, t.type) {
        case "input":
          if (ii(
            l,
            u.value,
            u.defaultValue,
            u.defaultValue,
            u.checked,
            u.defaultChecked,
            u.type,
            u.name
          ), t = u.name, u.type === "radio" && t != null) {
            for (u = l; u.parentNode; ) u = u.parentNode;
            for (u = u.querySelectorAll(
              'input[name="' + Zt(
                "" + t
              ) + '"][type="radio"]'
            ), t = 0; t < u.length; t++) {
              var a = u[t];
              if (a !== l && a.form === l.form) {
                var e = a[Tt] || null;
                if (!e) throw Error(r(90));
                ii(
                  a,
                  e.value,
                  e.defaultValue,
                  e.defaultValue,
                  e.checked,
                  e.defaultChecked,
                  e.type,
                  e.name
                );
              }
            }
            for (t = 0; t < u.length; t++)
              a = u[t], a.form === l.form && lo(a);
          }
          break l;
        case "textarea":
          uo(l, u.value, u.defaultValue);
          break l;
        case "select":
          t = u.value, t != null && wa(l, !!u.multiple, t, !1);
      }
    }
  }
  var yi = !1;
  function io(l, t, u) {
    if (yi) return l(t, u);
    yi = !0;
    try {
      var a = l(t);
      return a;
    } finally {
      if (yi = !1, (Fa !== null || Wa !== null) && (Xf(), Fa && (t = Fa, l = Wa, Wa = Fa = null, fo(t), l)))
        for (t = 0; t < l.length; t++) fo(l[t]);
    }
  }
  function Ge(l, t) {
    var u = l.stateNode;
    if (u === null) return null;
    var a = u[Tt] || null;
    if (a === null) return null;
    u = a[t];
    l: switch (t) {
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
        (a = !a.disabled) || (l = l.type, a = !(l === "button" || l === "input" || l === "select" || l === "textarea")), l = !a;
        break l;
      default:
        l = !1;
    }
    if (l) return null;
    if (u && typeof u != "function")
      throw Error(
        r(231, t, typeof u)
      );
    return u;
  }
  var _u = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), mi = !1;
  if (_u)
    try {
      var Xe = {};
      Object.defineProperty(Xe, "passive", {
        get: function() {
          mi = !0;
        }
      }), window.addEventListener("test", Xe, Xe), window.removeEventListener("test", Xe, Xe);
    } catch {
      mi = !1;
    }
  var ju = null, di = null, Xn = null;
  function co() {
    if (Xn) return Xn;
    var l, t = di, u = t.length, a, e = "value" in ju ? ju.value : ju.textContent, n = e.length;
    for (l = 0; l < u && t[l] === e[l]; l++) ;
    var f = u - l;
    for (a = 1; a <= f && t[u - a] === e[n - a]; a++) ;
    return Xn = e.slice(l, 1 < a ? 1 - a : void 0);
  }
  function Qn(l) {
    var t = l.keyCode;
    return "charCode" in l ? (l = l.charCode, l === 0 && t === 13 && (l = 13)) : l = t, l === 10 && (l = 13), 32 <= l || l === 13 ? l : 0;
  }
  function pn() {
    return !0;
  }
  function oo() {
    return !1;
  }
  function yt(l) {
    function t(u, a, e, n, f) {
      this._reactName = u, this._targetInst = e, this.type = a, this.nativeEvent = n, this.target = f, this.currentTarget = null;
      for (var i in l)
        l.hasOwnProperty(i) && (u = l[i], this[i] = u ? u(n) : n[i]);
      return this.isDefaultPrevented = (n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === !1) ? pn : oo, this.isPropagationStopped = oo, this;
    }
    return j(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var u = this.nativeEvent;
        u && (u.preventDefault ? u.preventDefault() : typeof u.returnValue != "unknown" && (u.returnValue = !1), this.isDefaultPrevented = pn);
      },
      stopPropagation: function() {
        var u = this.nativeEvent;
        u && (u.stopPropagation ? u.stopPropagation() : typeof u.cancelBubble != "unknown" && (u.cancelBubble = !0), this.isPropagationStopped = pn);
      },
      persist: function() {
      },
      isPersistent: pn
    }), t;
  }
  var Zu = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(l) {
      return l.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, jn = yt(Zu), Qe = j({}, Zu, { view: 0, detail: 0 }), Cm = yt(Qe), hi, gi, pe, Zn = j({}, Qe, {
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
    getModifierState: Si,
    button: 0,
    buttons: 0,
    relatedTarget: function(l) {
      return l.relatedTarget === void 0 ? l.fromElement === l.srcElement ? l.toElement : l.fromElement : l.relatedTarget;
    },
    movementX: function(l) {
      return "movementX" in l ? l.movementX : (l !== pe && (pe && l.type === "mousemove" ? (hi = l.screenX - pe.screenX, gi = l.screenY - pe.screenY) : gi = hi = 0, pe = l), hi);
    },
    movementY: function(l) {
      return "movementY" in l ? l.movementY : gi;
    }
  }), vo = yt(Zn), Rm = j({}, Zn, { dataTransfer: 0 }), Hm = yt(Rm), Ym = j({}, Qe, { relatedTarget: 0 }), ri = yt(Ym), qm = j({}, Zu, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Bm = yt(qm), xm = j({}, Zu, {
    clipboardData: function(l) {
      return "clipboardData" in l ? l.clipboardData : window.clipboardData;
    }
  }), Gm = yt(xm), Xm = j({}, Zu, { data: 0 }), so = yt(Xm), Qm = {
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
  }, pm = {
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
  }, jm = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function Zm(l) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(l) : (l = jm[l]) ? !!t[l] : !1;
  }
  function Si() {
    return Zm;
  }
  var Vm = j({}, Qe, {
    key: function(l) {
      if (l.key) {
        var t = Qm[l.key] || l.key;
        if (t !== "Unidentified") return t;
      }
      return l.type === "keypress" ? (l = Qn(l), l === 13 ? "Enter" : String.fromCharCode(l)) : l.type === "keydown" || l.type === "keyup" ? pm[l.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Si,
    charCode: function(l) {
      return l.type === "keypress" ? Qn(l) : 0;
    },
    keyCode: function(l) {
      return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    },
    which: function(l) {
      return l.type === "keypress" ? Qn(l) : l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    }
  }), Lm = yt(Vm), Km = j({}, Zn, {
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
  }), yo = yt(Km), Jm = j({}, Zu, { submitter: 0 }), wm = yt(Jm), $m = j({}, Qe, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Si
  }), Fm = yt($m), Wm = j({}, Zu, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Im = yt(Wm), km = j({}, Zn, {
    deltaX: function(l) {
      return "deltaX" in l ? l.deltaX : "wheelDeltaX" in l ? -l.wheelDeltaX : 0;
    },
    deltaY: function(l) {
      return "deltaY" in l ? l.deltaY : "wheelDeltaY" in l ? -l.wheelDeltaY : "wheelDelta" in l ? -l.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Pm = yt(km), l1 = j({}, Zu, {
    newState: 0,
    oldState: 0,
    source: 0
  }), t1 = yt(l1), u1 = [9, 13, 27, 32], Ti = _u && "CompositionEvent" in window, je = null;
  _u && "documentMode" in document && (je = document.documentMode);
  var a1 = _u && "TextEvent" in window && !je, mo = _u && (!Ti || je && 8 < je && 11 >= je), ho = " ", go = !1;
  function ro(l, t) {
    switch (l) {
      case "keyup":
        return u1.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function So(l) {
    return l = l.detail, typeof l == "object" && "data" in l ? l.data : null;
  }
  var Ia = !1;
  function e1(l, t) {
    switch (l) {
      case "compositionend":
        return So(t);
      case "keypress":
        return t.which !== 32 ? null : (go = !0, ho);
      case "textInput":
        return l = t.data, l === ho && go ? null : l;
      default:
        return null;
    }
  }
  function n1(l, t) {
    if (Ia)
      return l === "compositionend" || !Ti && ro(l, t) ? (l = co(), Xn = di = ju = null, Ia = !1, l) : null;
    switch (l) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
          if (t.char && 1 < t.char.length)
            return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return mo && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var f1 = {
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
  function To(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t === "input" ? !!f1[l.type] : t === "textarea";
  }
  function Eo(l, t, u, a) {
    Fa ? Wa ? Wa.push(a) : Wa = [a] : Fa = a, t = Lf(t, "onChange"), 0 < t.length && (u = new jn(
      "onChange",
      "change",
      null,
      u,
      a
    ), l.push({ event: u, listeners: t }));
  }
  var Ze = null, Ve = null;
  function i1(l) {
    iy(l, 0);
  }
  function Vn(l) {
    var t = xe(l);
    if (lo(t)) return l;
  }
  function zo(l, t) {
    if (l === "change") return t;
  }
  var bo = !1;
  if (_u) {
    var Ei;
    if (_u) {
      var zi = "oninput" in document;
      if (!zi) {
        var _o = document.createElement("div");
        _o.setAttribute("oninput", "return;"), zi = typeof _o.oninput == "function";
      }
      Ei = zi;
    } else Ei = !1;
    bo = Ei && (!document.documentMode || 9 < document.documentMode);
  }
  function Oo() {
    Ze && (Ze.detachEvent("onpropertychange", Ao), Ve = Ze = null);
  }
  function Ao(l) {
    if (l.propertyName === "value" && Vn(Ve)) {
      var t = [];
      Eo(
        t,
        Ve,
        l,
        si(l)
      ), io(i1, t);
    }
  }
  function c1(l, t, u) {
    l === "focusin" ? (Oo(), Ze = t, Ve = u, Ze.attachEvent("onpropertychange", Ao)) : l === "focusout" && Oo();
  }
  function o1(l) {
    if (l === "selectionchange" || l === "keyup" || l === "keydown")
      return Vn(Ve);
  }
  function v1(l, t) {
    if (l === "click") return Vn(t);
  }
  function s1(l, t) {
    if (l === "input" || l === "change")
      return Vn(t);
  }
  function y1(l, t) {
    return l === t && (l !== 0 || 1 / l === 1 / t) || l !== l && t !== t;
  }
  var Rt = typeof Object.is == "function" ? Object.is : y1;
  function Le(l, t) {
    if (Rt(l, t)) return !0;
    if (typeof l != "object" || l === null || typeof t != "object" || t === null)
      return !1;
    var u = Object.keys(l), a = Object.keys(t);
    if (u.length !== a.length) return !1;
    for (a = 0; a < u.length; a++) {
      var e = u[a];
      if (!pl.call(t, e) || !Rt(l[e], t[e]))
        return !1;
    }
    return !0;
  }
  function bi(l) {
    if (l = l || (typeof document < "u" ? document : void 0), typeof l > "u") return null;
    try {
      return l.activeElement || l.body;
    } catch {
      return l.body;
    }
  }
  function No(l) {
    for (; l && l.firstChild; ) l = l.firstChild;
    return l;
  }
  function Mo(l, t) {
    var u = No(l);
    l = 0;
    for (var a; u; ) {
      if (u.nodeType === 3) {
        if (a = l + u.textContent.length, l <= t && a >= t)
          return { node: u, offset: t - l };
        l = a;
      }
      l: {
        for (; u; ) {
          if (u.nextSibling) {
            u = u.nextSibling;
            break l;
          }
          u = u.parentNode;
        }
        u = void 0;
      }
      u = No(u);
    }
  }
  function Do(l, t) {
    return l && t ? l === t ? !0 : l && l.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Do(l, t.parentNode) : "contains" in l ? l.contains(t) : l.compareDocumentPosition ? !!(l.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function Uo(l) {
    l = l != null && l.ownerDocument != null && l.ownerDocument.defaultView != null ? l.ownerDocument.defaultView : window;
    for (var t = bi(l.document); t instanceof l.HTMLIFrameElement; ) {
      try {
        var u = typeof t.contentWindow.location.href == "string";
      } catch {
        u = !1;
      }
      if (u) l = t.contentWindow;
      else break;
      t = bi(l.document);
    }
    return t;
  }
  function _i(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t && (t === "input" && (l.type === "text" || l.type === "search" || l.type === "tel" || l.type === "url" || l.type === "password") || t === "textarea" || l.contentEditable === "true");
  }
  var m1 = _u && "documentMode" in document && 11 >= document.documentMode, ka = null, Oi = null, Ke = null, Ai = !1;
  function Co(l, t, u) {
    var a = u.window === u ? u.document : u.nodeType === 9 ? u : u.ownerDocument;
    Ai || ka == null || ka !== bi(a) || (a = ka, "selectionStart" in a && _i(a) ? a = { start: a.selectionStart, end: a.selectionEnd } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
      anchorNode: a.anchorNode,
      anchorOffset: a.anchorOffset,
      focusNode: a.focusNode,
      focusOffset: a.focusOffset
    }), Ke && Le(Ke, a) || (Ke = a, a = Lf(Oi, "onSelect"), 0 < a.length && (t = new jn(
      "onSelect",
      "select",
      null,
      t,
      u
    ), l.push({ event: t, listeners: a }), t.target = ka)));
  }
  function Ea(l, t) {
    var u = {};
    return u[l.toLowerCase()] = t.toLowerCase(), u["Webkit" + l] = "webkit" + t, u["Moz" + l] = "moz" + t, u;
  }
  var Pa = {
    animationend: Ea("Animation", "AnimationEnd"),
    animationiteration: Ea("Animation", "AnimationIteration"),
    animationstart: Ea("Animation", "AnimationStart"),
    transitionrun: Ea("Transition", "TransitionRun"),
    transitionstart: Ea("Transition", "TransitionStart"),
    transitioncancel: Ea("Transition", "TransitionCancel"),
    transitionend: Ea("Transition", "TransitionEnd")
  }, Ni = {}, Ro = {};
  _u && (Ro = document.createElement("div").style, "AnimationEvent" in window || (delete Pa.animationend.animation, delete Pa.animationiteration.animation, delete Pa.animationstart.animation), "TransitionEvent" in window || delete Pa.transitionend.transition);
  function za(l) {
    if (Ni[l]) return Ni[l];
    if (!Pa[l]) return l;
    var t = Pa[l], u;
    for (u in t)
      if (t.hasOwnProperty(u) && u in Ro)
        return Ni[l] = t[u];
    return l;
  }
  var Ho = za("animationend"), Yo = za("animationiteration"), qo = za("animationstart"), d1 = za("transitionrun"), h1 = za("transitionstart"), g1 = za("transitioncancel"), Bo = za("transitionend"), xo = /* @__PURE__ */ new Map(), Mi = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  Mi.push("scrollEnd");
  function kt(l, t) {
    xo.set(l, t), Ta(t, [l]);
  }
  var r1 = 0;
  function Ou(l, t) {
    if (l.name != null && l.name !== "auto") return l.name;
    if (t.autoName !== null) return t.autoName;
    l = uu.identifierPrefix;
    var u = r1++;
    return l = "_" + l + "t_" + u.toString(32) + "_", t.autoName = l;
  }
  function Go(l) {
    if (l == null || typeof l == "string")
      return l;
    var t = null, u = Te;
    if (u !== null)
      for (var a = 0; a < u.length; a++) {
        var e = l[u[a]];
        if (e != null) {
          if (e === "none") return "none";
          t = t == null ? e : t + (" " + e);
        }
      }
    return t ?? l.default;
  }
  function Au(l, t) {
    return l = Go(l), t = Go(t), t == null ? l === "auto" ? null : l : t === "auto" ? null : t;
  }
  var Ln = typeof reportError == "function" ? reportError : function(l) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var t = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof l == "object" && l !== null && typeof l.message == "string" ? String(l.message) : String(l),
        error: l
      });
      if (!window.dispatchEvent(t)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", l);
      return;
    }
    console.error(l);
  }, Vt = [], le = 0, Di = 0;
  function Kn() {
    for (var l = le, t = Di = le = 0; t < l; ) {
      var u = Vt[t];
      Vt[t++] = null;
      var a = Vt[t];
      Vt[t++] = null;
      var e = Vt[t];
      Vt[t++] = null;
      var n = Vt[t];
      if (Vt[t++] = null, a !== null && e !== null) {
        var f = a.pending;
        f === null ? e.next = e : (e.next = f.next, f.next = e), a.pending = e;
      }
      n !== 0 && Xo(u, e, n);
    }
  }
  function Jn(l, t, u, a) {
    Vt[le++] = l, Vt[le++] = t, Vt[le++] = u, Vt[le++] = a, Di |= a, l.lanes |= a, l = l.alternate, l !== null && (l.lanes |= a);
  }
  function Ui(l, t, u, a) {
    return Jn(l, t, u, a), wn(l);
  }
  function ba(l, t) {
    return Jn(l, null, null, t), wn(l);
  }
  function Xo(l, t, u) {
    l.lanes |= u;
    var a = l.alternate;
    a !== null && (a.lanes |= u);
    for (var e = !1, n = l.return; n !== null; )
      n.childLanes |= u, a = n.alternate, a !== null && (a.childLanes |= u), n.tag === 22 && (l = n.stateNode, l === null || l._visibility & 1 || (e = !0)), l = n, n = n.return;
    return l.tag === 3 ? (n = l.stateNode, e && t !== null && (e = 31 - Ut(u), l = n.hiddenUpdates, a = l[e], a === null ? l[e] = [t] : a.push(t), t.lane = u | 536870912), n) : null;
  }
  function wn(l) {
    if (50 < dn)
      throw dn = 0, Gf = null, Error(r(185));
    for (var t = l.return; t !== null; )
      l = t, t = l.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var te = {};
  function S1(l, t, u, a) {
    this.tag = l, this.key = u, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Et(l, t, u, a) {
    return new S1(l, t, u, a);
  }
  function Ci(l) {
    return l = l.prototype, !(!l || !l.isReactComponent);
  }
  function Nu(l, t) {
    var u = l.alternate;
    return u === null ? (u = Et(
      l.tag,
      t,
      l.key,
      l.mode
    ), u.elementType = l.elementType, u.type = l.type, u.stateNode = l.stateNode, u.alternate = l, l.alternate = u) : (u.pendingProps = t, u.type = l.type, u.flags = 0, u.subtreeFlags = 0, u.deletions = null), u.flags = l.flags & 1206910976, u.childLanes = l.childLanes, u.lanes = l.lanes, u.child = l.child, u.memoizedProps = l.memoizedProps, u.memoizedState = l.memoizedState, u.updateQueue = l.updateQueue, t = l.dependencies, u.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, u.sibling = l.sibling, u.index = l.index, u.ref = l.ref, u.refCleanup = l.refCleanup, u;
  }
  function Qo(l, t) {
    l.flags &= 1206910978;
    var u = l.alternate;
    return u === null ? (l.childLanes = 0, l.lanes = t, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = u.childLanes, l.lanes = u.lanes, l.child = u.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = u.memoizedProps, l.memoizedState = u.memoizedState, l.updateQueue = u.updateQueue, l.type = u.type, t = u.dependencies, l.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), l;
  }
  function $n(l, t, u, a, e, n) {
    var f = 0;
    if (a = l, typeof a == "function") Ci(a) && (f = 1);
    else if (typeof a == "string")
      f = Jd(
        l,
        u,
        Mt.current
      ) ? 26 : l === "html" || l === "head" || l === "body" ? 27 : 5;
    else
      l: switch (a) {
        case wl:
          return l = Et(31, u, t, e), l.elementType = wl, l.lanes = n, l;
        case rt:
          return _a(u.children, e, n, t);
        case st:
          f = 8, e |= 24;
          break;
        case Dl:
          return l = Et(12, u, t, e | 2), l.elementType = Dl, l.lanes = n, l;
        case H:
          return l = Et(13, u, t, e), l.elementType = H, l.lanes = n, l;
        case A:
          return l = Et(19, u, t, e), l.elementType = A, l.lanes = n, l;
        case Xt:
        case v:
          return l = e | 32, l = Et(30, u, t, l), l.elementType = v, l.lanes = n, l.stateNode = {
            autoName: null,
            paired: null,
            clones: null,
            ref: null
          }, l;
        default:
          if (typeof a == "object" && a !== null)
            switch (a.$$typeof) {
              case Yl:
                f = 10;
                break l;
              case eu:
                f = 9;
                break l;
              case O:
                f = 11;
                break l;
              case b:
                f = 14;
                break l;
              case L:
                f = 16, a = null;
                break l;
            }
          f = 29, u = Error(
            r(130, l === null ? "null" : typeof l, "")
          ), a = null;
      }
    return t = Et(f, u, t, e), t.elementType = l, t.type = a, t.lanes = n, t;
  }
  function _a(l, t, u, a) {
    return l = Et(7, l, a, t), l.lanes = u, l;
  }
  function Ri(l, t, u) {
    return l = Et(6, l, null, t), l.lanes = u, l;
  }
  function po(l) {
    var t = Et(18, null, null, 0);
    return t.stateNode = l, t;
  }
  function Hi(l, t, u) {
    return t = Et(
      4,
      l.children !== null ? l.children : [],
      l.key,
      t
    ), t.lanes = u, t.stateNode = {
      containerInfo: l.containerInfo,
      pendingChildren: null,
      implementation: l.implementation
    }, t;
  }
  var jo = /* @__PURE__ */ new WeakMap();
  function Lt(l, t) {
    if (typeof l == "object" && l !== null) {
      var u = jo.get(l);
      return u !== void 0 ? u : (t = {
        value: l,
        source: t,
        stack: ja(t)
      }, jo.set(l, t), t);
    }
    return {
      value: l,
      source: t,
      stack: ja(t)
    };
  }
  var ue = [], ae = 0, Fn = null, Je = 0, Kt = [], Jt = 0, Vu = null, iu = 1, cu = "";
  function Mu(l, t) {
    ue[ae++] = Je, ue[ae++] = Fn, Fn = l, Je = t;
  }
  function Zo(l, t, u) {
    Kt[Jt++] = iu, Kt[Jt++] = cu, Kt[Jt++] = Vu, Vu = l;
    var a = iu;
    l = cu;
    var e = 32 - Ut(a) - 1;
    a &= ~(1 << e), u += 1;
    var n = 32 - Ut(t) + e;
    if (30 < n) {
      var f = e - e % 5;
      n = (a & (1 << f) - 1).toString(32), a >>= f, e -= f, iu = 1 << 32 - Ut(t) + e | u << e | a, cu = n + l;
    } else
      iu = 1 << n | u << e | a, cu = l;
  }
  function Wn(l) {
    l.return !== null && (Mu(l, 1), Zo(l, 1, 0));
  }
  function Yi(l) {
    for (; l === Fn; )
      Fn = ue[--ae], ue[ae] = null, Je = ue[--ae], ue[ae] = null;
    for (; l === Vu; )
      Vu = Kt[--Jt], Kt[Jt] = null, cu = Kt[--Jt], Kt[Jt] = null, iu = Kt[--Jt], Kt[Jt] = null;
  }
  function Vo(l, t) {
    Kt[Jt++] = iu, Kt[Jt++] = cu, Kt[Jt++] = Vu, iu = t.id, cu = t.overflow, Vu = l;
  }
  var Ll = null, Sl = null, J = !1, Lu = null, wt = !1, qi = Error(r(519));
  function Ku(l) {
    var t = Error(
      r(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw we(Lt(t, l)), qi;
  }
  function Lo(l) {
    var t = l.stateNode, u = l.type, a = l.memoizedProps;
    switch (t[Fl] = l, t[Tt] = a, u) {
      case "dialog":
        $("cancel", t), $("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        $("load", t);
        break;
      case "video":
      case "audio":
        for (u = 0; u < gn.length; u++)
          $(gn[u], t);
        break;
      case "source":
        $("error", t);
        break;
      case "img":
      case "image":
      case "link":
        $("error", t), $("load", t);
        break;
      case "details":
        $("toggle", t);
        break;
      case "input":
        $("invalid", t), to(
          t,
          a.value,
          a.defaultValue,
          a.checked,
          a.defaultChecked,
          a.type,
          a.name,
          !0
        );
        break;
      case "select":
        $("invalid", t);
        break;
      case "textarea":
        $("invalid", t), ao(t, a.value, a.defaultValue, a.children);
    }
    u = a.children, typeof u != "string" && typeof u != "number" && typeof u != "bigint" || t.textContent === "" + u || a.suppressHydrationWarning === !0 || sy(t.textContent, u) ? (a.popover != null && ($("beforetoggle", t), $("toggle", t)), a.onScroll != null && $("scroll", t), a.onScrollEnd != null && $("scrollend", t), a.onClick != null && (t.onclick = fu), t = !0) : t = !1, t || Ku(l, !0);
  }
  function In(l) {
    for (Ll = l.return; Ll; )
      switch (Ll.tag) {
        case 5:
        case 31:
        case 13:
          wt = !1;
          return;
        case 27:
        case 3:
          wt = !0;
          return;
        default:
          Ll = Ll.return;
      }
  }
  function ee(l) {
    if (l !== Ll) return !1;
    if (!J) return In(l), J = !0, !1;
    var t = l.tag, u;
    if ((u = t !== 3 && t !== 27) && ((u = t === 5) && (u = l.type, u = !(u !== "form" && u !== "button") || v0(l.type, l.memoizedProps)), u = !u), u && Sl && Ku(l), In(l), t === 13) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(r(317));
      Sl = Cy(l);
    } else if (t === 31) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(r(317));
      Sl = Cy(l);
    } else
      t === 27 ? (t = Sl, ia(l.type) ? (l = T0, T0 = null, Sl = l) : Sl = t) : Sl = Ll ? Ft(l.stateNode.nextSibling) : null;
    return !0;
  }
  function Oa() {
    Sl = Ll = null, J = !1;
  }
  function Bi() {
    var l = Lu;
    return l !== null && (_t === null ? _t = l : _t.push.apply(
      _t,
      l
    ), Lu = null), l;
  }
  function we(l) {
    Lu === null ? Lu = [l] : Lu.push(l);
  }
  var xi = St(null), Aa = null, Du = null;
  function Ju(l, t, u) {
    ml(xi, t._currentValue), t._currentValue = u;
  }
  function Uu(l) {
    l._currentValue = xi.current, Cl(xi);
  }
  function kn(l, t, u) {
    for (; l !== null; ) {
      var a = l.alternate;
      if ((l.childLanes & t) !== t ? (l.childLanes |= t, a !== null && (a.childLanes |= t)) : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t), l === u) break;
      l = l.return;
    }
  }
  function Gi(l, t, u, a) {
    var e = l.child;
    for (e !== null && (e.return = l); e !== null; ) {
      var n = e.dependencies;
      if (n !== null) {
        var f = e.child;
        n = n.firstContext;
        l: for (; n !== null; ) {
          var i = n;
          n = e;
          for (var c = 0; c < t.length; c++)
            if (i.context === t[c]) {
              n.lanes |= u, i = n.alternate, i !== null && (i.lanes |= u), kn(
                n.return,
                u,
                l
              ), a || (f = null);
              break l;
            }
          n = i.next;
        }
      } else if (e.tag === 18) {
        if (f = e.return, f === null) throw Error(r(341));
        f.lanes |= u, n = f.alternate, n !== null && (n.lanes |= u), kn(f, u, l), f = null;
      } else
        e.tag === 13 && e.memoizedState !== null && e.memoizedState.dehydrated === null ? (e.lanes |= u, f = e.alternate, f !== null && (f.lanes |= u), kn(
          e.return,
          u,
          l
        ), f = e.child, f = f !== null ? f.sibling : null) : f = e.child;
      if (f !== null) f.return = e;
      else
        for (f = e; f !== null; ) {
          if (f === l) {
            f = null;
            break;
          }
          if (e = f.sibling, e !== null) {
            e.return = f.return, f = e;
            break;
          }
          f = f.return;
        }
      e = f;
    }
  }
  function Na(l, t, u, a) {
    l = null;
    for (var e = t, n = !1; e !== null; ) {
      if (!n) {
        if ((e.flags & 524288) !== 0) n = !0;
        else if ((e.flags & 262144) !== 0) break;
      }
      if (e.tag === 10) {
        var f = e.alternate;
        if (f === null) throw Error(r(387));
        if (f = f.memoizedProps, f !== null) {
          var i = e.type;
          Rt(e.pendingProps.value, f.value) || (l !== null ? l.push(i) : l = [i]);
        }
      } else if (e === Su.current) {
        if (f = e.alternate, f === null) throw Error(r(387));
        f.memoizedState.memoizedState !== e.memoizedState.memoizedState && (l !== null ? l.push(Ue) : l = [Ue]);
      }
      e = e.return;
    }
    return l !== null && Gi(
      t,
      l,
      u,
      a
    ), t.flags |= 262144, l !== null;
  }
  function Pn(l) {
    for (l = l.firstContext; l !== null; ) {
      if (!Rt(
        l.context._currentValue,
        l.memoizedValue
      ))
        return !0;
      l = l.next;
    }
    return !1;
  }
  function Ma(l) {
    Aa = l, Du = null, l = l.dependencies, l !== null && (l.firstContext = null);
  }
  function Wl(l) {
    return Ko(Aa, l);
  }
  function lf(l, t) {
    return Aa === null && Ma(l), Ko(l, t);
  }
  function Ko(l, t) {
    var u = t._currentValue;
    if (t = { context: t, memoizedValue: u, next: null }, Du === null) {
      if (l === null) throw Error(r(308));
      Du = t, l.dependencies = { lanes: 0, firstContext: t }, l.flags |= 524288;
    } else Du = Du.next = t;
    return u;
  }
  var T1 = typeof AbortController < "u" ? AbortController : function() {
    var l = [], t = this.signal = {
      aborted: !1,
      addEventListener: function(u, a) {
        l.push(a);
      }
    };
    this.abort = function() {
      t.aborted = !0, l.forEach(function(u) {
        return u();
      });
    };
  }, E1 = N.unstable_scheduleCallback, z1 = N.unstable_NormalPriority, ql = {
    $$typeof: Yl,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Xi() {
    return {
      controller: new T1(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function $e(l) {
    l.refCount--, l.refCount === 0 && E1(z1, function() {
      l.controller.abort();
    });
  }
  function Jo(l, t) {
    if ((l.pendingLanes & 4194048) !== 0) {
      var u = l.transitionTypes;
      for (u === null && (u = l.transitionTypes = []), l = 0; l < t.length; l++) {
        var a = t[l];
        u.indexOf(a) === -1 && u.push(a);
      }
    }
  }
  var Fe = null;
  function b1(l) {
    var t = l.transitionTypes;
    return l.transitionTypes = null, t;
  }
  var We = null, Qi = 0, Da = 0, ne = null;
  function _1(l, t) {
    if (We === null) {
      var u = We = [];
      Qi = 0, Da = t0(), ne = {
        status: "pending",
        value: void 0,
        then: function(a) {
          u.push(a);
        }
      };
    }
    return Qi++, t.then(wo, wo), t;
  }
  function wo() {
    if (--Qi === 0 && (Fe = null, We !== null)) {
      ne !== null && (ne.status = "fulfilled");
      var l = We;
      We = null, Da = 0, ne = null;
      for (var t = 0; t < l.length; t++) (0, l[t])();
    }
  }
  function O1(l, t) {
    var u = [], a = {
      status: "pending",
      value: null,
      reason: null,
      then: function(e) {
        u.push(e);
      }
    };
    return l.then(
      function() {
        a.status = "fulfilled", a.value = t;
        for (var e = 0; e < u.length; e++) (0, u[e])(t);
      },
      function(e) {
        for (a.status = "rejected", a.reason = e, e = 0; e < u.length; e++)
          (0, u[e])(void 0);
      }
    ), a;
  }
  var $o = C.S;
  C.S = function(l, t) {
    if (ps = Ol(), typeof t == "object" && t !== null && typeof t.then == "function" && _1(l, t), Fe !== null)
      for (var u = _e; u !== null; )
        Jo(u, Fe), u = u.next;
    if (u = l.types, u !== null) {
      for (var a = _e; a !== null; )
        Jo(a, u), a = a.next;
      if (Da !== 0) {
        a = Fe, a === null && (a = Fe = []);
        for (var e = 0; e < u.length; e++) {
          var n = u[e];
          a.indexOf(n) === -1 && a.push(n);
        }
      }
    }
    $o !== null && $o(l, t);
  };
  var Ua = St(null);
  function pi() {
    var l = Ua.current;
    return l !== null ? l : gl.pooledCache;
  }
  function tf(l, t) {
    t === null ? ml(Ua, Ua.current) : ml(Ua, t.pool);
  }
  function Fo() {
    var l = pi();
    return l === null ? null : { parent: ql._currentValue, pool: l };
  }
  var fe = Error(r(460)), ji = Error(r(474)), uf = Error(r(542)), af = { then: function() {
  } };
  function Wo(l) {
    return l = l.status, l === "fulfilled" || l === "rejected";
  }
  function Io(l, t, u) {
    switch (u = l[u], u === void 0 ? l.push(t) : u !== t && (t.then(fu, fu), t = u), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw l = t.reason, Po(l), l === void 0 && !("reason" in t) ? Error(r(600)) : l;
      default:
        if (typeof t.status == "string") t.then(fu, fu);
        else {
          if (l = gl, l !== null && 100 < l.shellSuspendCounter)
            throw Error(r(482));
          l = t, l.status = "pending", l.then(
            function(a) {
              if (t.status === "pending") {
                var e = t;
                e.status = "fulfilled", e.value = a;
              }
            },
            function(a) {
              if (t.status === "pending") {
                var e = t;
                e.status = "rejected", e.reason = a;
              }
            }
          );
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw l = t.reason, Po(l), l;
        }
        throw Ra = t, fe;
    }
  }
  function Ca(l) {
    try {
      var t = l._init;
      return t(l._payload);
    } catch (u) {
      throw u !== null && typeof u == "object" && typeof u.then == "function" ? (Ra = u, fe) : u;
    }
  }
  var Ra = null;
  function ko() {
    if (Ra === null) throw Error(r(459));
    var l = Ra;
    return Ra = null, l;
  }
  function Po(l) {
    if (l === fe || l === uf)
      throw Error(r(483));
  }
  var ie = null, Ie = 0;
  function ef(l) {
    var t = Ie;
    return Ie += 1, ie === null && (ie = []), Io(ie, l, t);
  }
  function wu(l, t) {
    t = t.props.ref, l.ref = t !== void 0 ? t : null;
  }
  function nf(l, t) {
    throw t.$$typeof === ul ? Error(r(525)) : (l = Object.prototype.toString.call(t), Error(
      r(
        31,
        l === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : l
      )
    ));
  }
  function lv(l) {
    function t(y, o) {
      if (l) {
        var d = y.deletions;
        d === null ? (y.deletions = [o], y.flags |= 16) : d.push(o);
      }
    }
    function u(y, o) {
      if (!l) return null;
      for (; o !== null; )
        t(y, o), o = o.sibling;
      return null;
    }
    function a(y) {
      for (var o = /* @__PURE__ */ new Map(); y !== null; )
        y.key === null ? o.set(y.index, y) : o.set(y.key, y), y = y.sibling;
      return o;
    }
    function e(y, o) {
      return y = Nu(y, o), y.index = 0, y.sibling = null, y;
    }
    function n(y, o, d) {
      return y.index = d, l ? (d = y.alternate, d !== null ? (d = d.index, d < o ? (y.flags |= 2, o) : d) : (y.flags |= 134217730, o)) : (y.flags |= 1048576, o);
    }
    function f(y) {
      return l && y.alternate === null && (y.flags |= 134217730), y;
    }
    function i(y, o, d, T) {
      return o === null || o.tag !== 6 ? (o = Ri(d, y.mode, T), o.return = y, o) : (o = e(o, d), o.return = y, o);
    }
    function c(y, o, d, T) {
      var M = d.type;
      return M === rt ? (y = g(
        y,
        o,
        d.props.children,
        T,
        d.key
      ), wu(y, d), y) : o !== null && (o.elementType === M || typeof M == "object" && M !== null && M.$$typeof === L && Ca(M) === o.type) ? (o = e(o, d.props), wu(o, d), o.return = y, o) : (o = $n(
        d.type,
        d.key,
        d.props,
        null,
        y.mode,
        T
      ), wu(o, d), o.return = y, o);
    }
    function m(y, o, d, T) {
      return o === null || o.tag !== 4 || o.stateNode.containerInfo !== d.containerInfo || o.stateNode.implementation !== d.implementation ? (o = Hi(d, y.mode, T), o.return = y, o) : (o = e(o, d.children || []), o.return = y, o);
    }
    function g(y, o, d, T, M) {
      return o === null || o.tag !== 7 ? (o = _a(
        d,
        y.mode,
        T,
        M
      ), o.return = y, o) : (o = e(o, d), o.return = y, o);
    }
    function E(y, o, d) {
      if (typeof o == "string" && o !== "" || typeof o == "number" || typeof o == "bigint")
        return o = Ri(
          "" + o,
          y.mode,
          d
        ), o.return = y, o;
      if (typeof o == "object" && o !== null) {
        switch (o.$$typeof) {
          case Ql:
            return d = $n(
              o.type,
              o.key,
              o.props,
              null,
              y.mode,
              d
            ), wu(d, o), d.return = y, d;
          case et:
            return o = Hi(
              o,
              y.mode,
              d
            ), o.return = y, o;
          case L:
            return o = Ca(o), E(y, o, d);
        }
        if (P(o) || R(o))
          return o = _a(
            o,
            y.mode,
            d,
            null
          ), o.return = y, o;
        if (typeof o.then == "function")
          return E(y, ef(o), d);
        if (o.$$typeof === Yl)
          return E(
            y,
            lf(y, o),
            d
          );
        nf(y, o);
      }
      return null;
    }
    function s(y, o, d, T) {
      var M = o !== null ? o.key : null;
      if (typeof d == "string" && d !== "" || typeof d == "number" || typeof d == "bigint")
        return M !== null ? null : i(y, o, "" + d, T);
      if (typeof d == "object" && d !== null) {
        switch (d.$$typeof) {
          case Ql:
            return d.key === M ? c(y, o, d, T) : null;
          case et:
            return d.key === M ? m(y, o, d, T) : null;
          case L:
            return d = Ca(d), s(y, o, d, T);
        }
        if (P(d) || R(d))
          return M !== null ? null : g(y, o, d, T, null);
        if (typeof d.then == "function")
          return s(
            y,
            o,
            ef(d),
            T
          );
        if (d.$$typeof === Yl)
          return s(
            y,
            o,
            lf(y, d),
            T
          );
        nf(y, d);
      }
      return null;
    }
    function h(y, o, d, T, M) {
      if (typeof T == "string" && T !== "" || typeof T == "number" || typeof T == "bigint")
        return y = y.get(d) || null, i(o, y, "" + T, M);
      if (typeof T == "object" && T !== null) {
        switch (T.$$typeof) {
          case Ql:
            return y = y.get(
              T.key === null ? d : T.key
            ) || null, c(o, y, T, M);
          case et:
            return y = y.get(
              T.key === null ? d : T.key
            ) || null, m(o, y, T, M);
          case L:
            return T = Ca(T), h(
              y,
              o,
              d,
              T,
              M
            );
        }
        if (P(T) || R(T))
          return y = y.get(d) || null, g(o, y, T, M, null);
        if (typeof T.then == "function")
          return h(
            y,
            o,
            d,
            ef(T),
            M
          );
        if (T.$$typeof === Yl)
          return h(
            y,
            o,
            d,
            lf(o, T),
            M
          );
        nf(o, T);
      }
      return null;
    }
    function _(y, o, d, T) {
      for (var M = null, W = null, Y = o, Q = o = 0, Gl = null; Y !== null && Q < d.length; Q++) {
        Y.index > Q ? (Gl = Y, Y = null) : Gl = Y.sibling;
        var tl = s(
          y,
          Y,
          d[Q],
          T
        );
        if (tl === null) {
          Y === null && (Y = Gl);
          break;
        }
        l && Y && tl.alternate === null && t(y, Y), o = n(tl, o, Q), W === null ? M = tl : W.sibling = tl, W = tl, Y = Gl;
      }
      if (Q === d.length)
        return u(y, Y), J && Mu(y, Q), M;
      if (Y === null) {
        for (; Q < d.length; Q++)
          Y = E(y, d[Q], T), Y !== null && (o = n(
            Y,
            o,
            Q
          ), W === null ? M = Y : W.sibling = Y, W = Y);
        return J && Mu(y, Q), M;
      }
      for (Y = a(Y); Q < d.length; Q++)
        Gl = h(
          Y,
          y,
          Q,
          d[Q],
          T
        ), Gl !== null && (l && (tl = Gl.alternate, tl !== null && Y.delete(tl.key === null ? Q : tl.key)), o = n(
          Gl,
          o,
          Q
        ), W === null ? M = Gl : W.sibling = Gl, W = Gl);
      return l && Y.forEach(function(ya) {
        return t(y, ya);
      }), J && Mu(y, Q), M;
    }
    function D(y, o, d, T) {
      if (d == null) throw Error(r(151));
      for (var M = null, W = null, Y = o, Q = o = 0, Gl = null, tl = d.next(); Y !== null && !tl.done; Q++, tl = d.next()) {
        Y.index > Q ? (Gl = Y, Y = null) : Gl = Y.sibling;
        var ya = s(y, Y, tl.value, T);
        if (ya === null) {
          Y === null && (Y = Gl);
          break;
        }
        l && Y && ya.alternate === null && t(y, Y), o = n(ya, o, Q), W === null ? M = ya : W.sibling = ya, W = ya, Y = Gl;
      }
      if (tl.done)
        return u(y, Y), J && Mu(y, Q), M;
      if (Y === null) {
        for (; !tl.done; Q++, tl = d.next())
          tl = E(y, tl.value, T), tl !== null && (o = n(tl, o, Q), W === null ? M = tl : W.sibling = tl, W = tl);
        return J && Mu(y, Q), M;
      }
      for (Y = a(Y); !tl.done; Q++, tl = d.next())
        tl = h(Y, y, Q, tl.value, T), tl !== null && (l && (Gl = tl.alternate, Gl !== null && Y.delete(
          Gl.key === null ? Q : Gl.key
        )), o = n(tl, o, Q), W === null ? M = tl : W.sibling = tl, W = tl);
      return l && Y.forEach(function(eh) {
        return t(y, eh);
      }), J && Mu(y, Q), M;
    }
    function V(y, o, d, T) {
      if (typeof d == "object" && d !== null && d.type === rt && d.key === null && d.props.ref === void 0 && (d = d.props.children), typeof d == "object" && d !== null) {
        switch (d.$$typeof) {
          case Ql:
            l: {
              for (var M = d.key; o !== null; ) {
                if (o.key === M) {
                  if (M = d.type, M === rt) {
                    if (o.tag === 7) {
                      u(
                        y,
                        o.sibling
                      ), T = e(
                        o,
                        d.props.children
                      ), wu(T, d), T.return = y, y = T;
                      break l;
                    }
                  } else if (o.elementType === M || typeof M == "object" && M !== null && M.$$typeof === L && Ca(M) === o.type) {
                    u(
                      y,
                      o.sibling
                    ), T = e(o, d.props), wu(T, d), T.return = y, y = T;
                    break l;
                  }
                  u(y, o);
                  break;
                } else t(y, o);
                o = o.sibling;
              }
              d.type === rt ? (T = _a(
                d.props.children,
                y.mode,
                T,
                d.key
              ), wu(T, d), T.return = y, y = T) : (T = $n(
                d.type,
                d.key,
                d.props,
                null,
                y.mode,
                T
              ), wu(T, d), T.return = y, y = T);
            }
            return f(y);
          case et:
            l: {
              for (M = d.key; o !== null; ) {
                if (o.key === M)
                  if (o.tag === 4 && o.stateNode.containerInfo === d.containerInfo && o.stateNode.implementation === d.implementation) {
                    u(
                      y,
                      o.sibling
                    ), T = e(o, d.children || []), T.return = y, y = T;
                    break l;
                  } else {
                    u(y, o);
                    break;
                  }
                else t(y, o);
                o = o.sibling;
              }
              T = Hi(d, y.mode, T), T.return = y, y = T;
            }
            return f(y);
          case L:
            return d = Ca(d), V(
              y,
              o,
              d,
              T
            );
        }
        if (P(d))
          return _(
            y,
            o,
            d,
            T
          );
        if (R(d)) {
          if (M = R(d), typeof M != "function") throw Error(r(150));
          return d = M.call(d), D(
            y,
            o,
            d,
            T
          );
        }
        if (typeof d.then == "function")
          return V(
            y,
            o,
            ef(d),
            T
          );
        if (d.$$typeof === Yl)
          return V(
            y,
            o,
            lf(y, d),
            T
          );
        nf(y, d);
      }
      return typeof d == "string" && d !== "" || typeof d == "number" || typeof d == "bigint" ? (d = "" + d, o !== null && o.tag === 6 ? (u(y, o.sibling), T = e(o, d), T.return = y, y = T) : (u(y, o), T = Ri(d, y.mode, T), T.return = y, y = T), f(y)) : u(y, o);
    }
    return function(y, o, d, T) {
      try {
        Ie = 0;
        var M = V(
          y,
          o,
          d,
          T
        );
        return ie = null, M;
      } catch (Y) {
        if (Y === fe || Y === uf) throw Y;
        var W = Et(29, Y, null, y.mode);
        return W.lanes = T, W.return = y, W;
      }
    };
  }
  var Ha = lv(!0), tv = lv(!1), $u = !1;
  function Zi(l) {
    l.updateQueue = {
      baseState: l.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Vi(l, t) {
    l = l.updateQueue, t.updateQueue === l && (t.updateQueue = {
      baseState: l.baseState,
      firstBaseUpdate: l.firstBaseUpdate,
      lastBaseUpdate: l.lastBaseUpdate,
      shared: l.shared,
      callbacks: null
    });
  }
  function Fu(l) {
    return { lane: l, tag: 0, payload: null, callback: null, next: null };
  }
  function Wu(l, t, u) {
    var a = l.updateQueue;
    if (a === null) return null;
    if (a = a.shared, (fl & 2) !== 0) {
      var e = a.pending;
      return e === null ? t.next = t : (t.next = e.next, e.next = t), a.pending = t, t = wn(l), Xo(l, null, u), t;
    }
    return Jn(l, a, t, u), wn(l);
  }
  function ke(l, t, u) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (u & 4194048) !== 0)) {
      var a = t.lanes;
      a &= l.pendingLanes, u |= a, t.lanes = u, j0(l, u);
    }
  }
  function Li(l, t) {
    var u = l.updateQueue, a = l.alternate;
    if (a !== null && (a = a.updateQueue, u === a)) {
      var e = null, n = null;
      if (u = u.firstBaseUpdate, u !== null) {
        do {
          var f = {
            lane: u.lane,
            tag: u.tag,
            payload: u.payload,
            callback: null,
            next: null
          };
          n === null ? e = n = f : n = n.next = f, u = u.next;
        } while (u !== null);
        n === null ? e = n = t : n = n.next = t;
      } else e = n = t;
      u = {
        baseState: a.baseState,
        firstBaseUpdate: e,
        lastBaseUpdate: n,
        shared: a.shared,
        callbacks: a.callbacks
      }, l.updateQueue = u;
      return;
    }
    l = u.lastBaseUpdate, l === null ? u.firstBaseUpdate = t : l.next = t, u.lastBaseUpdate = t;
  }
  var Ki = !1;
  function Pe() {
    if (Ki) {
      var l = ne;
      if (l !== null) throw l;
    }
  }
  function ln(l, t, u, a) {
    Ki = !1;
    var e = l.updateQueue;
    $u = !1;
    var n = e.firstBaseUpdate, f = e.lastBaseUpdate, i = e.shared.pending;
    if (i !== null) {
      e.shared.pending = null;
      var c = i, m = c.next;
      c.next = null, f === null ? n = m : f.next = m, f = c;
      var g = l.alternate;
      g !== null && (g = g.updateQueue, i = g.lastBaseUpdate, i !== f && (i === null ? g.firstBaseUpdate = m : i.next = m, g.lastBaseUpdate = c));
    }
    if (n !== null) {
      var E = e.baseState;
      f = 0, g = m = c = null, i = n;
      do {
        var s = i.lane & -536870913, h = s !== i.lane;
        if (h ? (F & s) === s : (a & s) === s) {
          s !== 0 && s === Da && (Ki = !0), g !== null && (g = g.next = {
            lane: 0,
            tag: i.tag,
            payload: i.payload,
            callback: null,
            next: null
          });
          l: {
            var _ = l, D = i;
            s = t;
            var V = u;
            switch (D.tag) {
              case 1:
                if (_ = D.payload, typeof _ == "function") {
                  E = _.call(V, E, s);
                  break l;
                }
                E = _;
                break l;
              case 3:
                _.flags = _.flags & -65537 | 128;
              case 0:
                if (_ = D.payload, s = typeof _ == "function" ? _.call(V, E, s) : _, s == null) break l;
                E = j({}, E, s);
                break l;
              case 2:
                $u = !0;
            }
          }
          s = i.callback, s !== null && (l.flags |= 64, h && (l.flags |= 8192), h = e.callbacks, h === null ? e.callbacks = [s] : h.push(s));
        } else
          h = {
            lane: s,
            tag: i.tag,
            payload: i.payload,
            callback: i.callback,
            next: null
          }, g === null ? (m = g = h, c = E) : g = g.next = h, f |= s;
        if (i = i.next, i === null) {
          if (i = e.shared.pending, i === null)
            break;
          h = i, i = h.next, h.next = null, e.lastBaseUpdate = h, e.shared.pending = null;
        }
      } while (!0);
      g === null && (c = E), e.baseState = c, e.firstBaseUpdate = m, e.lastBaseUpdate = g, n === null && (e.shared.lanes = 0), aa |= f, l.lanes = f, l.memoizedState = E;
    }
  }
  function uv(l, t) {
    if (typeof l != "function")
      throw Error(r(191, l));
    l.call(t);
  }
  function av(l, t) {
    var u = l.callbacks;
    if (u !== null)
      for (l.callbacks = null, l = 0; l < u.length; l++)
        uv(u[l], t);
  }
  var Iu = St(null), ff = St(0);
  function ev(l, t) {
    l = qu, ml(ff, l), ml(Iu, t), qu = l | t.baseLanes;
  }
  function Ji() {
    ml(ff, qu), ml(Iu, Iu.current);
  }
  function wi() {
    qu = ff.current, Cl(Iu), Cl(ff);
  }
  var Il = St(null), it = null;
  function ku(l) {
    var t = l.alternate;
    ml(kl, kl.current & 1), ml(Il, l), it === null && (t === null || Iu.current !== null || t.memoizedState !== null) && (it = l);
  }
  function $i(l) {
    ml(kl, kl.current), ml(Il, l), it === null && (it = l);
  }
  function nv(l) {
    l.tag === 22 ? (ml(kl, kl.current), ml(Il, l), it === null && (it = l)) : Pu();
  }
  function Pu() {
    ml(kl, kl.current), ml(Il, Il.current);
  }
  function Ht(l) {
    Cl(Il), it === l && (it = null), Cl(kl);
  }
  var kl = St(0);
  function tn(l, t) {
    ml(Il, Il.current), ml(kl, t);
  }
  function Fi(l) {
    Cl(kl), Cl(Il), it === l && (it = null);
  }
  function cf(l) {
    for (var t = l; t !== null; ) {
      if (t.tag === 13) {
        var u = t.memoizedState;
        if (u !== null && (u = u.dehydrated, u === null || r0(u) || S0(u)))
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== "independent") {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === l) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === l) return null;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    return null;
  }
  var Cu = 0, Z = null, hl = null, Bl = null, of = !1, ce = !1, Ya = !1, vf = 0, un = 0, oe = null, A1 = 0;
  function Al() {
    throw Error(r(321));
  }
  function Wi(l, t) {
    if (t === null) return !1;
    for (var u = 0; u < t.length && u < l.length; u++)
      if (!Rt(l[u], t[u])) return !1;
    return !0;
  }
  function Ii(l, t, u, a, e, n) {
    return Cu = n, Z = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, C.H = l === null || l.memoizedState === null ? Zv : Vv, Ya = !1, n = u(a, e), Ya = !1, ce && (n = iv(
      t,
      u,
      a,
      e
    )), fv(l), n;
  }
  function fv(l) {
    C.H = rf;
    var t = hl !== null && hl.next !== null;
    if (Cu = 0, Bl = hl = Z = null, of = !1, un = 0, oe = null, t) throw Error(r(300));
    l === null || xl || (l = l.dependencies, l !== null && Pn(l) && (xl = !0));
  }
  function iv(l, t, u, a) {
    Z = l;
    var e = 0;
    do {
      if (ce && (oe = null), un = 0, ce = !1, 25 <= e) throw Error(r(301));
      if (e += 1, Bl = hl = null, l.updateQueue != null) {
        var n = l.updateQueue;
        n.lastEffect = null, n.events = null, n.stores = null, n.memoCache != null && (n.memoCache.index = 0);
      }
      C.H = Y1, n = t(u, a);
    } while (ce);
    return n;
  }
  function N1() {
    var l = C.H, t = l.useState()[0];
    return t = typeof t.then == "function" ? an(t) : t, l = l.useState()[0], (hl !== null ? hl.memoizedState : null) !== l && (Z.flags |= 1024), t;
  }
  function ki() {
    var l = vf !== 0;
    return vf = 0, l;
  }
  function Pi(l, t, u) {
    t.updateQueue = l.updateQueue, t.flags &= -2053, l.lanes &= ~u;
  }
  function lc(l) {
    if (of) {
      for (l = l.memoizedState; l !== null; ) {
        var t = l.queue;
        t !== null && (t.pending = null), l = l.next;
      }
      of = !1;
    }
    Cu = 0, Bl = hl = Z = null, ce = !1, un = vf = 0, oe = null;
  }
  function mt() {
    var l = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Bl === null ? Z.memoizedState = Bl = l : Bl = Bl.next = l, Bl;
  }
  function Rl() {
    if (hl === null) {
      var l = Z.alternate;
      l = l !== null ? l.memoizedState : null;
    } else l = hl.next;
    var t = Bl === null ? Z.memoizedState : Bl.next;
    if (t !== null)
      Bl = t, hl = l;
    else {
      if (l === null)
        throw Z.alternate === null ? Error(r(467)) : Error(r(310));
      hl = l, l = {
        memoizedState: hl.memoizedState,
        baseState: hl.baseState,
        baseQueue: hl.baseQueue,
        queue: hl.queue,
        next: null
      }, Bl === null ? Z.memoizedState = Bl = l : Bl = Bl.next = l;
    }
    return Bl;
  }
  function sf() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function an(l) {
    var t = un;
    return un += 1, oe === null && (oe = []), l = Io(oe, l, t), t = Z, (Bl === null ? t.memoizedState : Bl.next) === null && (t = t.alternate, C.H = t === null || t.memoizedState === null ? Zv : Vv), l;
  }
  function yf(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return an(l);
      if (l.$$typeof === z) return;
      if (l.$$typeof === Yl) return Wl(l);
    }
    throw Error(r(438, String(l)));
  }
  function tc(l) {
    var t = null, u = Z.updateQueue;
    if (u !== null && (t = u.memoCache), t == null) {
      var a = Z.alternate;
      a !== null && (a = a.updateQueue, a !== null && (a = a.memoCache, a != null && (t = {
        data: a.data.map(function(e) {
          return e.slice();
        }),
        index: 0
      })));
    }
    if (t == null && (t = { data: [], index: 0 }), u === null && (u = sf(), Z.updateQueue = u), u.memoCache = t, u = t.data[t.index], u === void 0)
      for (u = t.data[t.index] = Array(l), a = 0; a < l; a++)
        u[a] = Ul;
    return t.index++, u;
  }
  function Ru(l, t) {
    return typeof t == "function" ? t(l) : t;
  }
  function mf(l) {
    var t = Rl();
    return uc(t, hl, l);
  }
  function uc(l, t, u) {
    var a = l.queue;
    if (a === null) throw Error(r(311));
    a.lastRenderedReducer = u;
    var e = l.baseQueue, n = a.pending;
    if (n !== null) {
      if (e !== null) {
        var f = e.next;
        e.next = n.next, n.next = f;
      }
      t.baseQueue = e = n, a.pending = null;
    }
    if (n = l.baseState, e === null) l.memoizedState = n;
    else {
      t = e.next;
      var i = f = null, c = null, m = t, g = !1;
      do {
        var E = m.lane & -536870913;
        if (E !== m.lane ? (F & E) === E : (Cu & E) === E) {
          var s = m.revertLane;
          if (s === 0)
            c !== null && (c = c.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: m.action,
              hasEagerState: m.hasEagerState,
              eagerState: m.eagerState,
              next: null
            }), E === Da && (g = !0);
          else if ((Cu & s) === s) {
            m = m.next, s === Da && (g = !0);
            continue;
          } else
            E = {
              lane: 0,
              revertLane: m.revertLane,
              gesture: null,
              action: m.action,
              hasEagerState: m.hasEagerState,
              eagerState: m.eagerState,
              next: null
            }, c === null ? (i = c = E, f = n) : c = c.next = E, Z.lanes |= s, aa |= s;
          E = m.action, Ya && u(n, E), n = m.hasEagerState ? m.eagerState : u(n, E);
        } else
          s = {
            lane: E,
            revertLane: m.revertLane,
            gesture: m.gesture,
            action: m.action,
            hasEagerState: m.hasEagerState,
            eagerState: m.eagerState,
            next: null
          }, c === null ? (i = c = s, f = n) : c = c.next = s, Z.lanes |= E, aa |= E;
        m = m.next;
      } while (m !== null && m !== t);
      if (c === null ? f = n : c.next = i, !Rt(n, l.memoizedState) && (xl = !0, g && (u = ne, u !== null)))
        throw u;
      l.memoizedState = n, l.baseState = f, l.baseQueue = c, a.lastRenderedState = n;
    }
    return e === null && (a.lanes = 0), [l.memoizedState, a.dispatch];
  }
  function ac(l) {
    var t = Rl(), u = t.queue;
    if (u === null) throw Error(r(311));
    u.lastRenderedReducer = l;
    var a = u.dispatch, e = u.pending, n = t.memoizedState;
    if (e !== null) {
      u.pending = null;
      var f = e = e.next;
      do
        n = l(n, f.action), f = f.next;
      while (f !== e);
      Rt(n, t.memoizedState) || (xl = !0), t.memoizedState = n, t.baseQueue === null && (t.baseState = n), u.lastRenderedState = n;
    }
    return [n, a];
  }
  function cv(l, t, u) {
    var a = Z, e = Rl(), n = J;
    if (n) {
      if (u === void 0) throw Error(r(407));
      u = u();
    } else u = t();
    var f = !Rt(
      (hl || e).memoizedState,
      u
    );
    if (f && (e.memoizedState = u, xl = !0), e = e.queue, fc(sv.bind(null, a, e, l), [
      l
    ]), l = e.getSnapshot !== t || f || Bl !== null && (Bl.memoizedState.tag & 1) !== 0, ve(
      l ? 9 : 8,
      { destroy: void 0 },
      vv.bind(null, a, e, u, t),
      null
    ), l) {
      if (a.flags |= 2048, gl === null) throw Error(r(349));
      n || (Cu & 127) !== 0 || ov(a, t, u);
    }
    return u;
  }
  function ov(l, t, u) {
    l.flags |= 16384, l = { getSnapshot: t, value: u }, t = Z.updateQueue, t === null ? (t = sf(), Z.updateQueue = t, t.stores = [l]) : (u = t.stores, u === null ? t.stores = [l] : u.push(l));
  }
  function vv(l, t, u, a) {
    t.value = u, t.getSnapshot = a, yv(t) && mv(l);
  }
  function sv(l, t, u) {
    return u(function() {
      yv(t) && mv(l);
    });
  }
  function yv(l) {
    var t = l.getSnapshot;
    l = l.value;
    try {
      var u = t();
      return !Rt(l, u);
    } catch {
      return !0;
    }
  }
  function mv(l) {
    var t = ba(l, 2);
    t !== null && Ot(t, l, 2);
  }
  function ec(l) {
    var t = mt();
    if (typeof l == "function") {
      var u = l;
      if (l = u(), Ya) {
        pu(!0);
        try {
          u();
        } finally {
          pu(!1);
        }
      }
    }
    return t.memoizedState = t.baseState = l, t.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Ru,
      lastRenderedState: l
    }, t;
  }
  function dv(l, t, u, a) {
    return l.baseState = u, uc(
      l,
      hl,
      typeof a == "function" ? a : Ru
    );
  }
  function M1(l, t, u, a, e) {
    if (gf(l)) throw Error(r(485));
    if (l = t.action, l !== null) {
      var n = {
        payload: e,
        action: l,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(f) {
          n.listeners.push(f);
        }
      };
      C.T !== null ? u(!0) : n.isTransition = !1, a(n), u = t.pending, u === null ? (n.next = t.pending = n, hv(t, n)) : (n.next = u.next, t.pending = u.next = n);
    }
  }
  function hv(l, t) {
    var u = t.action, a = t.payload, e = l.state;
    if (t.isTransition) {
      var n = C.T, f = {};
      f.types = n !== null ? n.types : null, C.T = f;
      try {
        var i = u(e, a), c = C.S;
        c !== null && c(f, i), gv(l, t, i);
      } catch (m) {
        nc(l, t, m);
      } finally {
        n !== null && f.types !== null && (n.types = f.types), C.T = n;
      }
    } else
      try {
        n = u(e, a), gv(l, t, n);
      } catch (m) {
        nc(l, t, m);
      }
  }
  function gv(l, t, u) {
    u !== null && typeof u == "object" && typeof u.then == "function" ? u.then(
      function(a) {
        rv(l, t, a);
      },
      function(a) {
        return nc(l, t, a);
      }
    ) : rv(l, t, u);
  }
  function rv(l, t, u) {
    t.status = "fulfilled", t.value = u, Sv(t), l.state = u, t = l.pending, t !== null && (u = t.next, u === t ? l.pending = null : (u = u.next, t.next = u, hv(l, u)));
  }
  function nc(l, t, u) {
    var a = l.pending;
    if (l.pending = null, a !== null) {
      a = a.next;
      do
        t.status = "rejected", t.reason = u, Sv(t), t = t.next;
      while (t !== a);
    }
    l.action = null;
  }
  function Sv(l) {
    l = l.listeners;
    for (var t = 0; t < l.length; t++) (0, l[t])();
  }
  function Tv(l, t) {
    return t;
  }
  function Ev(l, t) {
    if (J) {
      var u = gl.formState;
      if (u !== null) {
        l: {
          var a = Z;
          if (J) {
            if (Sl) {
              t: {
                for (var e = Sl, n = wt; e.nodeType !== 8; ) {
                  if (!n) {
                    e = null;
                    break t;
                  }
                  if (e = Ft(
                    e.nextSibling
                  ), e === null) {
                    e = null;
                    break t;
                  }
                }
                n = e.data, e = n === "F!" || n === "F" ? e : null;
              }
              if (e) {
                Sl = Ft(
                  e.nextSibling
                ), a = e.data === "F!";
                break l;
              }
            }
            Ku(a);
          }
          a = !1;
        }
        a && (t = u[0]);
      }
    }
    return u = mt(), u.memoizedState = u.baseState = t, a = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Tv,
      lastRenderedState: t
    }, u.queue = a, u = Qv.bind(
      null,
      Z,
      a
    ), a.dispatch = u, a = ec(!1), n = sc.bind(
      null,
      Z,
      !1,
      a.queue
    ), a = mt(), e = {
      state: t,
      dispatch: null,
      action: l,
      pending: null
    }, a.queue = e, u = M1.bind(
      null,
      Z,
      e,
      n,
      u
    ), e.dispatch = u, a.memoizedState = l, [t, u, !1];
  }
  function zv(l) {
    var t = Rl();
    return bv(t, hl, l);
  }
  function bv(l, t, u) {
    if (t = uc(
      l,
      t,
      Tv
    )[0], l = mf(Ru)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var a = an(t);
      } catch (f) {
        throw f === fe ? uf : f;
      }
    else a = t;
    t = Rl();
    var e = t.queue, n = e.dispatch;
    return u !== t.memoizedState && (Z.flags |= 2048, ve(
      9,
      { destroy: void 0 },
      D1.bind(null, e, u),
      null
    )), [a, n, l];
  }
  function D1(l, t) {
    l.action = t;
  }
  function _v(l) {
    var t = Rl(), u = hl;
    if (u !== null)
      return bv(t, u, l);
    Rl(), t = t.memoizedState, u = Rl();
    var a = u.queue.dispatch;
    return u.memoizedState = l, [t, a, !1];
  }
  function ve(l, t, u, a) {
    return l = { tag: l, create: u, deps: a, inst: t, next: null }, t = Z.updateQueue, t === null && (t = sf(), Z.updateQueue = t), u = t.lastEffect, u === null ? t.lastEffect = l.next = l : (a = u.next, u.next = l, l.next = a, t.lastEffect = l), l;
  }
  function Ov() {
    return Rl().memoizedState;
  }
  function df(l, t, u, a) {
    var e = mt();
    Z.flags |= l, e.memoizedState = ve(
      1 | t,
      { destroy: void 0 },
      u,
      a === void 0 ? null : a
    );
  }
  function hf(l, t, u, a) {
    var e = Rl();
    a = a === void 0 ? null : a;
    var n = e.memoizedState.inst;
    hl !== null && a !== null && Wi(a, hl.memoizedState.deps) ? e.memoizedState = ve(t, n, u, a) : (Z.flags |= l, e.memoizedState = ve(
      1 | t,
      n,
      u,
      a
    ));
  }
  function Av(l, t) {
    df(8390656, 8, l, t);
  }
  function fc(l, t) {
    hf(2048, 8, l, t);
  }
  function U1(l) {
    Z.flags |= 4;
    var t = Z.updateQueue;
    if (t === null)
      t = sf(), Z.updateQueue = t, t.events = [l];
    else {
      var u = t.events;
      u === null ? t.events = [l] : u.push(l);
    }
  }
  function Nv(l) {
    var t = Rl().memoizedState;
    return U1({ ref: t, nextImpl: l }), function() {
      if ((fl & 2) !== 0) throw Error(r(440));
      return t.impl.apply(void 0, arguments);
    };
  }
  function Mv(l, t) {
    return hf(4, 2, l, t);
  }
  function Dv(l, t) {
    return hf(4, 4, l, t);
  }
  function Uv(l, t) {
    if (typeof t == "function") {
      l = l();
      var u = t(l);
      return function() {
        typeof u == "function" ? u() : t(null);
      };
    }
    if (t != null)
      return l = l(), t.current = l, function() {
        t.current = null;
      };
  }
  function Cv(l, t, u) {
    u = u != null ? u.concat([l]) : null, hf(4, 4, Uv.bind(null, t, l), u);
  }
  function ic() {
  }
  function Rv(l, t) {
    var u = Rl();
    t = t === void 0 ? null : t;
    var a = u.memoizedState;
    return t !== null && Wi(t, a[1]) ? a[0] : (u.memoizedState = [l, t], l);
  }
  function Hv(l, t) {
    var u = Rl();
    t = t === void 0 ? null : t;
    var a = u.memoizedState;
    if (t !== null && Wi(t, a[1]))
      return a[0];
    if (a = l(), Ya) {
      pu(!0);
      try {
        l();
      } finally {
        pu(!1);
      }
    }
    return u.memoizedState = [a, t], a;
  }
  function cc(l, t, u) {
    return u === void 0 || (Cu & 1073741824) !== 0 && (F & 261930) === 0 ? l.memoizedState = t : (l.memoizedState = u, l = Zs(), Z.lanes |= l, aa |= l, u);
  }
  function Yv(l, t, u, a) {
    return Rt(u, t) ? u : Iu.current !== null ? (l = cc(l, u, a), Rt(l, t) || (xl = !0), l) : (Cu & 106) === 0 || (Cu & 1073741824) !== 0 && (F & 261930) === 0 ? (xl = !0, l.memoizedState = u) : (l = Zs(), Z.lanes |= l, aa |= l, t);
  }
  function qv(l, t, u, a, e) {
    var n = q.p;
    q.p = n !== 0 && 8 > n ? n : 8;
    var f = C.T, i = {};
    i.types = f !== null ? f.types : null, C.T = i, sc(l, !1, t, u);
    try {
      var c = e(), m = C.S;
      if (m !== null && m(i, c), c !== null && typeof c == "object" && typeof c.then == "function") {
        var g = O1(
          c,
          a
        );
        en(
          l,
          t,
          g,
          xt(l)
        );
      } else
        en(
          l,
          t,
          a,
          xt(l)
        );
    } catch (E) {
      en(
        l,
        t,
        { then: function() {
        }, status: "rejected", reason: E },
        xt()
      );
    } finally {
      q.p = n, f !== null && i.types !== null && (f.types = i.types), C.T = f;
    }
  }
  function C1() {
  }
  function oc(l, t, u, a) {
    if (l.tag !== 5) throw Error(r(476));
    var e = Bv(l).queue;
    qv(
      l,
      e,
      t,
      Qt,
      u === null ? C1 : function() {
        return xv(l), u(a);
      }
    );
  }
  function Bv(l) {
    var t = l.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: Qt,
      baseState: Qt,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ru,
        lastRenderedState: Qt
      },
      next: null
    };
    var u = {};
    return t.next = {
      memoizedState: u,
      baseState: u,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ru,
        lastRenderedState: u
      },
      next: null
    }, l.memoizedState = t, l = l.alternate, l !== null && (l.memoizedState = t), t;
  }
  function xv(l) {
    var t = Bv(l);
    t.next === null && (t = l.alternate.memoizedState), en(
      l,
      t.next.queue,
      {},
      xt()
    );
  }
  function vc() {
    return Wl(Ue);
  }
  function Gv() {
    return Rl().memoizedState;
  }
  function Xv() {
    return Rl().memoizedState;
  }
  function R1(l) {
    for (var t = l.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var u = xt();
          l = Fu(u);
          var a = Wu(t, l, u);
          a !== null && (Ot(a, t, u), ke(a, t, u)), t = { cache: Xi() }, l.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function H1(l, t, u) {
    var a = xt();
    u = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, gf(l) ? pv(t, u) : (u = Ui(l, t, u, a), u !== null && (Ot(u, l, a), jv(u, t, a)));
  }
  function Qv(l, t, u) {
    var a = xt();
    en(l, t, u, a);
  }
  function en(l, t, u, a) {
    var e = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (gf(l)) pv(t, e);
    else {
      var n = l.alternate;
      if (l.lanes === 0 && (n === null || n.lanes === 0) && (n = t.lastRenderedReducer, n !== null))
        try {
          var f = t.lastRenderedState, i = n(f, u);
          if (e.hasEagerState = !0, e.eagerState = i, Rt(i, f))
            return Jn(l, t, e, 0), gl === null && Kn(), !1;
        } catch {
        }
      if (u = Ui(l, t, e, a), u !== null)
        return Ot(u, l, a), jv(u, t, a), !0;
    }
    return !1;
  }
  function sc(l, t, u, a) {
    if (a = {
      lane: 2,
      revertLane: t0(),
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, gf(l)) {
      if (t) throw Error(r(479));
    } else
      t = Ui(
        l,
        u,
        a,
        2
      ), t !== null && Ot(t, l, 2);
  }
  function gf(l) {
    var t = l.alternate;
    return l === Z || t !== null && t === Z;
  }
  function pv(l, t) {
    ce = of = !0;
    var u = l.pending;
    u === null ? t.next = t : (t.next = u.next, u.next = t), l.pending = t;
  }
  function jv(l, t, u) {
    if ((u & 4194048) !== 0) {
      var a = t.lanes;
      a &= l.pendingLanes, u |= a, t.lanes = u, j0(l, u);
    }
  }
  var rf = {
    readContext: Wl,
    use: yf,
    useCallback: Al,
    useContext: Al,
    useEffect: Al,
    useImperativeHandle: Al,
    useLayoutEffect: Al,
    useInsertionEffect: Al,
    useMemo: Al,
    useReducer: Al,
    useRef: Al,
    useState: Al,
    useDebugValue: Al,
    useDeferredValue: Al,
    useTransition: Al,
    useSyncExternalStore: Al,
    useId: Al,
    useHostTransitionStatus: Al,
    useFormState: Al,
    useActionState: Al,
    useOptimistic: Al,
    useMemoCache: Al,
    useCacheRefresh: Al,
    useEffectEvent: Al
  }, Zv = {
    readContext: Wl,
    use: yf,
    useCallback: function(l, t) {
      return mt().memoizedState = [
        l,
        t === void 0 ? null : t
      ], l;
    },
    useContext: Wl,
    useEffect: Av,
    useImperativeHandle: function(l, t, u) {
      u = u != null ? u.concat([l]) : null, df(
        4194308,
        4,
        Uv.bind(null, t, l),
        u
      );
    },
    useLayoutEffect: function(l, t) {
      return df(4194308, 4, l, t);
    },
    useInsertionEffect: function(l, t) {
      df(4, 2, l, t);
    },
    useMemo: function(l, t) {
      var u = mt();
      t = t === void 0 ? null : t;
      var a = l();
      if (Ya) {
        pu(!0);
        try {
          l();
        } finally {
          pu(!1);
        }
      }
      return u.memoizedState = [a, t], a;
    },
    useReducer: function(l, t, u) {
      var a = mt();
      if (u !== void 0) {
        var e = u(t);
        if (Ya) {
          pu(!0);
          try {
            u(t);
          } finally {
            pu(!1);
          }
        }
      } else e = t;
      return a.memoizedState = a.baseState = e, l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: l,
        lastRenderedState: e
      }, a.queue = l, l = l.dispatch = H1.bind(
        null,
        Z,
        l
      ), [a.memoizedState, l];
    },
    useRef: function(l) {
      var t = mt();
      return l = { current: l }, t.memoizedState = l;
    },
    useState: function(l) {
      l = ec(l);
      var t = l.queue, u = Qv.bind(null, Z, t);
      return t.dispatch = u, [l.memoizedState, u];
    },
    useDebugValue: ic,
    useDeferredValue: function(l, t) {
      var u = mt();
      return cc(u, l, t);
    },
    useTransition: function() {
      var l = ec(!1);
      return l = qv.bind(
        null,
        Z,
        l.queue,
        !0,
        !1
      ), mt().memoizedState = l, [!1, l];
    },
    useSyncExternalStore: function(l, t, u) {
      var a = Z, e = mt();
      if (J) {
        if (u === void 0)
          throw Error(r(407));
        u = u();
      } else {
        if (u = t(), gl === null)
          throw Error(r(349));
        (F & 127) !== 0 || ov(a, t, u);
      }
      e.memoizedState = u;
      var n = { value: u, getSnapshot: t };
      return e.queue = n, Av(sv.bind(null, a, n, l), [
        l
      ]), a.flags |= 2048, ve(
        9,
        { destroy: void 0 },
        vv.bind(
          null,
          a,
          n,
          u,
          t
        ),
        null
      ), u;
    },
    useId: function() {
      var l = mt(), t = gl.identifierPrefix;
      if (J) {
        var u = cu, a = iu;
        u = (a & ~(1 << 32 - Ut(a) - 1)).toString(32) + u, t = "_" + t + "R_" + u, u = vf++, 0 < u && (t += "H" + u.toString(32)), t += "_";
      } else
        u = A1++, t = "_" + t + "r_" + u.toString(32) + "_";
      return l.memoizedState = t;
    },
    useHostTransitionStatus: vc,
    useFormState: Ev,
    useActionState: Ev,
    useOptimistic: function(l) {
      var t = mt();
      t.memoizedState = t.baseState = l;
      var u = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = u, t = sc.bind(
        null,
        Z,
        !0,
        u
      ), u.dispatch = t, [l, t];
    },
    useMemoCache: tc,
    useCacheRefresh: function() {
      return mt().memoizedState = R1.bind(
        null,
        Z
      );
    },
    useEffectEvent: function(l) {
      var t = mt(), u = { impl: l };
      return t.memoizedState = u, function() {
        if ((fl & 2) !== 0)
          throw Error(r(440));
        return u.impl.apply(void 0, arguments);
      };
    }
  }, Vv = {
    readContext: Wl,
    use: yf,
    useCallback: Rv,
    useContext: Wl,
    useEffect: fc,
    useImperativeHandle: Cv,
    useInsertionEffect: Mv,
    useLayoutEffect: Dv,
    useMemo: Hv,
    useReducer: mf,
    useRef: Ov,
    useState: function() {
      return mf(Ru);
    },
    useDebugValue: ic,
    useDeferredValue: function(l, t) {
      var u = Rl();
      return Yv(
        u,
        hl.memoizedState,
        l,
        t
      );
    },
    useTransition: function() {
      var l = mf(Ru)[0], t = Rl().memoizedState;
      return [
        typeof l == "boolean" ? l : an(l),
        t
      ];
    },
    useSyncExternalStore: cv,
    useId: Gv,
    useHostTransitionStatus: vc,
    useFormState: zv,
    useActionState: zv,
    useOptimistic: function(l, t) {
      var u = Rl();
      return dv(u, hl, l, t);
    },
    useMemoCache: tc,
    useCacheRefresh: Xv,
    useEffectEvent: Nv
  }, Y1 = {
    readContext: Wl,
    use: yf,
    useCallback: Rv,
    useContext: Wl,
    useEffect: fc,
    useImperativeHandle: Cv,
    useInsertionEffect: Mv,
    useLayoutEffect: Dv,
    useMemo: Hv,
    useReducer: ac,
    useRef: Ov,
    useState: function() {
      return ac(Ru);
    },
    useDebugValue: ic,
    useDeferredValue: function(l, t) {
      var u = Rl();
      return hl === null ? cc(u, l, t) : Yv(
        u,
        hl.memoizedState,
        l,
        t
      );
    },
    useTransition: function() {
      var l = ac(Ru)[0], t = Rl().memoizedState;
      return [
        typeof l == "boolean" ? l : an(l),
        t
      ];
    },
    useSyncExternalStore: cv,
    useId: Gv,
    useHostTransitionStatus: vc,
    useFormState: _v,
    useActionState: _v,
    useOptimistic: function(l, t) {
      var u = Rl();
      return hl !== null ? dv(u, hl, l, t) : (u.baseState = l, [l, u.queue.dispatch]);
    },
    useMemoCache: tc,
    useCacheRefresh: Xv,
    useEffectEvent: Nv
  };
  function yc(l, t, u, a) {
    t = l.memoizedState, u = u(a, t), u = u == null ? t : j({}, t, u), l.memoizedState = u, l.lanes === 0 && (l.updateQueue.baseState = u);
  }
  var mc = {
    enqueueSetState: function(l, t, u) {
      l = l._reactInternals;
      var a = xt(), e = Fu(a);
      e.payload = t, u != null && (e.callback = u), t = Wu(l, e, a), t !== null && (Ot(t, l, a), ke(t, l, a));
    },
    enqueueReplaceState: function(l, t, u) {
      l = l._reactInternals;
      var a = xt(), e = Fu(a);
      e.tag = 1, e.payload = t, u != null && (e.callback = u), t = Wu(l, e, a), t !== null && (Ot(t, l, a), ke(t, l, a));
    },
    enqueueForceUpdate: function(l, t) {
      l = l._reactInternals;
      var u = xt(), a = Fu(u);
      a.tag = 2, t != null && (a.callback = t), t = Wu(l, a, u), t !== null && (Ot(t, l, u), ke(t, l, u));
    }
  };
  function Lv(l, t, u, a, e, n, f) {
    return l = l.stateNode, typeof l.shouldComponentUpdate == "function" ? l.shouldComponentUpdate(a, n, f) : t.prototype && t.prototype.isPureReactComponent ? !Le(u, a) || !Le(e, n) : !0;
  }
  function Kv(l, t, u, a) {
    l = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(u, a), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(u, a), t.state !== l && mc.enqueueReplaceState(t, t.state, null);
  }
  function qa(l, t) {
    var u = t;
    if ("ref" in t) {
      u = {};
      for (var a in t)
        a !== "ref" && (u[a] = t[a]);
    }
    if (l = l.defaultProps) {
      u === t && (u = j({}, u));
      for (var e in l)
        u[e] === void 0 && (u[e] = l[e]);
    }
    return u;
  }
  function Jv(l) {
    Ln(l);
  }
  function wv(l) {
    console.error(l);
  }
  function $v(l) {
    Ln(l);
  }
  function Sf(l, t) {
    try {
      var u = l.onUncaughtError;
      u(t.value, { componentStack: t.stack });
    } catch (a) {
      setTimeout(function() {
        throw a;
      });
    }
  }
  function Fv(l, t, u) {
    try {
      var a = l.onCaughtError;
      a(u.value, {
        componentStack: u.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null
      });
    } catch (e) {
      setTimeout(function() {
        throw e;
      });
    }
  }
  function dc(l, t, u) {
    return u = Fu(u), u.tag = 3, u.payload = { element: null }, u.callback = function() {
      Sf(l, t);
    }, u;
  }
  function Wv(l) {
    return l = Fu(l), l.tag = 3, l;
  }
  function Iv(l, t, u, a) {
    var e = u.type.getDerivedStateFromError;
    if (typeof e == "function") {
      var n = a.value;
      l.payload = function() {
        return e(n);
      }, l.callback = function() {
        Fv(t, u, a);
      };
    }
    var f = u.stateNode;
    f !== null && typeof f.componentDidCatch == "function" && (l.callback = function() {
      Fv(t, u, a), typeof e != "function" && (ea === null ? ea = /* @__PURE__ */ new Set([this]) : ea.add(this));
      var i = a.stack;
      this.componentDidCatch(a.value, {
        componentStack: i !== null ? i : ""
      });
    });
  }
  function q1(l, t, u, a, e) {
    if (u.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
      if (t = u.alternate, t !== null && Na(
        t,
        u,
        e,
        !0
      ), u = Il.current, u !== null) {
        switch (u.tag) {
          case 31:
          case 13:
          case 19:
            return it === null ? Qf() : u.alternate === null && Nl === 0 && (Nl = 3), u.flags &= -257, u.flags |= 65536, u.lanes = e, a === af ? u.flags |= 16384 : (t = u.updateQueue, t === null ? u.updateQueue = /* @__PURE__ */ new Set([a]) : t.add(a), kc(l, a, e)), !1;
          case 22:
            return u.flags |= 65536, a === af ? u.flags |= 16384 : (t = u.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([a])
            }, u.updateQueue = t) : (u = t.retryQueue, u === null ? t.retryQueue = /* @__PURE__ */ new Set([a]) : u.add(a)), kc(l, a, e)), !1;
        }
        throw Error(r(435, u.tag));
      }
      return kc(l, a, e), Qf(), !1;
    }
    if (J)
      return t = Il.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = e, a !== qi && (l = Error(r(422), { cause: a }), we(Lt(l, u)))) : (a !== qi && (t = Error(r(423), {
        cause: a
      }), we(
        Lt(t, u)
      )), l = l.current.alternate, l.flags |= 65536, e &= -e, l.lanes |= e, a = Lt(a, u), e = dc(
        l.stateNode,
        a,
        e
      ), Li(l, e), Nl !== 4 && (Nl = 2)), !1;
    var n = Error(r(520), { cause: a });
    if (n = Lt(n, u), mn === null ? mn = [n] : mn.push(n), Nl !== 4 && (Nl = 2), t === null) return !0;
    a = Lt(a, u), u = t;
    do {
      switch (u.tag) {
        case 3:
          return u.flags |= 65536, l = e & -e, u.lanes |= l, l = dc(u.stateNode, a, l), Li(u, l), !1;
        case 1:
          if (t = u.type, n = u.stateNode, (u.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || n !== null && typeof n.componentDidCatch == "function" && (ea === null || !ea.has(n))))
            return u.flags |= 65536, e &= -e, u.lanes |= e, e = Wv(e), Iv(
              e,
              l,
              u,
              a
            ), Li(u, e), !1;
          break;
        case 22:
          if (u.memoizedState !== null)
            return u.flags |= 65536, !1;
      }
      u = u.return;
    } while (u !== null);
    return !1;
  }
  var hc = Error(r(461)), xl = !1;
  function jl(l, t, u, a) {
    t.child = l === null ? tv(t, null, u, a) : Ha(
      t,
      l.child,
      u,
      a
    );
  }
  function kv(l, t, u, a, e) {
    u = u.render;
    var n = t.ref;
    if ("ref" in a) {
      var f = {};
      for (var i in a)
        i !== "ref" && (f[i] = a[i]);
    } else f = a;
    return Ma(t), a = Ii(
      l,
      t,
      u,
      f,
      n,
      e
    ), i = ki(), l !== null && !xl ? (Pi(l, t, e), Hu(l, t, e)) : (J && i && Wn(t), t.flags |= 1, jl(l, t, a, e), t.child);
  }
  function Pv(l, t, u, a, e) {
    if (l === null) {
      var n = u.type;
      return typeof n == "function" && !Ci(n) && n.defaultProps === void 0 && u.compare === null ? (t.tag = 15, t.type = n, ls(
        l,
        t,
        n,
        a,
        e
      )) : (l = $n(
        u.type,
        null,
        a,
        t,
        t.mode,
        e
      ), l.ref = t.ref, l.return = t, t.child = l);
    }
    if (n = l.child, !_c(l, e)) {
      var f = n.memoizedProps;
      if (u = u.compare, u = u !== null ? u : Le, u(f, a) && l.ref === t.ref)
        return Hu(l, t, e);
    }
    return t.flags |= 1, l = Nu(n, a), l.ref = t.ref, l.return = t, t.child = l;
  }
  function ls(l, t, u, a, e) {
    if (l !== null) {
      var n = l.memoizedProps;
      if (Le(n, a) && l.ref === t.ref)
        if (xl = !1, t.pendingProps = a = n, _c(l, e))
          (l.flags & 131072) !== 0 && (xl = !0);
        else
          return t.lanes = l.lanes, Hu(l, t, e);
    }
    return gc(
      l,
      t,
      u,
      a,
      e
    );
  }
  function ts(l, t, u, a) {
    var e = a.children, n = l !== null ? l.memoizedState : null;
    if (l === null && t.stateNode === null && (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), a.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (n = n !== null ? n.baseLanes | u : u, l !== null) {
          for (a = t.child = l.child, e = 0; a !== null; )
            e = e | a.lanes | a.childLanes, a = a.sibling;
          a = e & ~n;
        } else a = 0, t.child = null;
        return us(
          l,
          t,
          n,
          u,
          a
        );
      }
      if ((u & 536870912) !== 0)
        t.memoizedState = { baseLanes: 0, cachePool: null }, l !== null && tf(
          t,
          n !== null ? n.cachePool : null
        ), n !== null ? ev(t, n) : Ji(), nv(t);
      else
        return a = t.lanes = 536870912, us(
          l,
          t,
          n !== null ? n.baseLanes | u : u,
          u,
          a
        );
    } else
      n !== null ? (tf(t, n.cachePool), ev(t, n), Pu(), t.memoizedState = null) : (l !== null && tf(t, null), Ji(), Pu());
    return jl(l, t, e, u), t.child;
  }
  function nn(l, t) {
    return l !== null && l.tag === 22 || t.stateNode !== null || (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), t.sibling;
  }
  function us(l, t, u, a, e) {
    var n = pi();
    return n = n === null ? null : { parent: ql._currentValue, pool: n }, t.memoizedState = {
      baseLanes: u,
      cachePool: n
    }, l !== null && tf(t, null), Ji(), nv(t), l !== null && Na(l, t, a, !0), t.childLanes = e, null;
  }
  function Tf(l, t) {
    return t = Ef(
      { mode: t.mode, children: t.children },
      l.mode
    ), t.ref = l.ref, l.child = t, t.return = l, t;
  }
  function as(l, t, u) {
    return Ha(t, l.child, null, u), l = Tf(t, t.pendingProps), l.flags |= 2, Ht(t), t.memoizedState = null, l;
  }
  function B1(l, t, u) {
    var a = t.pendingProps, e = (t.flags & 128) !== 0;
    if (t.flags &= -129, l === null) {
      if (J) {
        if (a.mode === "hidden")
          return l = Tf(t, a), t.lanes = 536870912, l.memoizedState = { baseLanes: 0, cachePool: null }, nn(null, l);
        if ($i(t), (l = Sl) ? (l = Uy(
          l,
          wt
        ), l = l !== null && l.data === "&" ? l : null, l !== null && (t.memoizedState = {
          dehydrated: l,
          treeContext: Vu !== null ? { id: iu, overflow: cu } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, u = po(l), u.return = t, t.child = u, Ll = t, Sl = null)) : l = null, l === null) throw Ku(t);
        return t.lanes = 536870912, null;
      }
      return Tf(t, a);
    }
    var n = l.memoizedState;
    if (n !== null) {
      var f = n.dehydrated;
      if ($i(t), e)
        if (t.flags & 256)
          t.flags &= -257, t = as(
            l,
            t,
            u
          );
        else if (t.memoizedState !== null)
          t.child = l.child, t.flags |= 128, t = null;
        else throw Error(r(558));
      else if (xl || Na(l, t, u, !1), e = (u & l.childLanes) !== 0, xl || e) {
        if (Iu.current === null) {
          if (a = gl, a !== null && (f = Z0(a, u), f !== 0 && f !== n.retryLane))
            throw n.retryLane = f, ba(l, f), Ot(a, l, f), hc;
          Qf();
        }
        t = as(
          l,
          t,
          u
        );
      } else
        l = n.treeContext, Sl = Ft(f.nextSibling), Ll = t, J = !0, Lu = null, wt = !1, l !== null && Vo(t, l), t = Tf(t, a), t.flags |= 134221824;
      return t;
    }
    return l = Nu(l.child, {
      mode: a.mode,
      children: a.children
    }), l.ref = t.ref, t.child = l, l.return = t, l;
  }
  function se(l, t) {
    var u = t.ref;
    if (u === null)
      l !== null && l.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof u != "function" && typeof u != "object")
        throw Error(r(284));
      (l === null || l.ref !== u) && (t.flags |= 4194816);
    }
  }
  function gc(l, t, u, a, e) {
    return Ma(t), u = Ii(
      l,
      t,
      u,
      a,
      void 0,
      e
    ), a = ki(), l !== null && !xl ? (Pi(l, t, e), Hu(l, t, e)) : (J && a && Wn(t), t.flags |= 1, jl(l, t, u, e), t.child);
  }
  function es(l, t, u, a, e, n) {
    return Ma(t), t.updateQueue = null, u = iv(
      t,
      a,
      u,
      e
    ), fv(l), a = ki(), l !== null && !xl ? (Pi(l, t, n), Hu(l, t, n)) : (J && a && Wn(t), t.flags |= 1, jl(l, t, u, n), t.child);
  }
  function ns(l, t, u, a, e) {
    if (Ma(t), t.stateNode === null) {
      var n = te, f = u.contextType;
      typeof f == "object" && f !== null && (n = Wl(f)), n = new u(a, n), t.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, n.updater = mc, t.stateNode = n, n._reactInternals = t, n = t.stateNode, n.props = a, n.state = t.memoizedState, n.refs = {}, Zi(t), f = u.contextType, n.context = typeof f == "object" && f !== null ? Wl(f) : te, n.state = t.memoizedState, f = u.getDerivedStateFromProps, typeof f == "function" && (yc(
        t,
        u,
        f,
        a
      ), n.state = t.memoizedState), typeof u.getDerivedStateFromProps == "function" || typeof n.getSnapshotBeforeUpdate == "function" || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (f = n.state, typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount(), f !== n.state && mc.enqueueReplaceState(n, n.state, null), ln(t, a, n, e), Pe(), n.state = t.memoizedState), typeof n.componentDidMount == "function" && (t.flags |= 4194308), a = !0;
    } else if (l === null) {
      n = t.stateNode;
      var i = t.memoizedProps, c = qa(u, i);
      n.props = c;
      var m = n.context, g = u.contextType;
      f = te, typeof g == "object" && g !== null && (f = Wl(g));
      var E = u.getDerivedStateFromProps;
      g = typeof E == "function" || typeof n.getSnapshotBeforeUpdate == "function", i = t.pendingProps !== i, g || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (i || m !== f) && Kv(
        t,
        n,
        a,
        f
      ), $u = !1;
      var s = t.memoizedState;
      n.state = s, ln(t, a, n, e), Pe(), m = t.memoizedState, i || s !== m || $u ? (typeof E == "function" && (yc(
        t,
        u,
        E,
        a
      ), m = t.memoizedState), (c = $u || Lv(
        t,
        u,
        c,
        a,
        s,
        m,
        f
      )) ? (g || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount()), typeof n.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof n.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = a, t.memoizedState = m), n.props = a, n.state = m, n.context = f, a = c) : (typeof n.componentDidMount == "function" && (t.flags |= 4194308), a = !1);
    } else {
      n = t.stateNode, Vi(l, t), f = t.memoizedProps, g = qa(u, f), n.props = g, E = t.pendingProps, s = n.context, m = u.contextType, c = te, typeof m == "object" && m !== null && (c = Wl(m)), i = u.getDerivedStateFromProps, (m = typeof i == "function" || typeof n.getSnapshotBeforeUpdate == "function") || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (f !== E || s !== c) && Kv(
        t,
        n,
        a,
        c
      ), $u = !1, s = t.memoizedState, n.state = s, ln(t, a, n, e), Pe();
      var h = t.memoizedState;
      f !== E || s !== h || $u || l !== null && l.dependencies !== null && Pn(l.dependencies) ? (typeof i == "function" && (yc(
        t,
        u,
        i,
        a
      ), h = t.memoizedState), (g = $u || Lv(
        t,
        u,
        g,
        a,
        s,
        h,
        c
      ) || l !== null && l.dependencies !== null && Pn(l.dependencies)) ? (m || typeof n.UNSAFE_componentWillUpdate != "function" && typeof n.componentWillUpdate != "function" || (typeof n.componentWillUpdate == "function" && n.componentWillUpdate(a, h, c), typeof n.UNSAFE_componentWillUpdate == "function" && n.UNSAFE_componentWillUpdate(
        a,
        h,
        c
      )), typeof n.componentDidUpdate == "function" && (t.flags |= 4), typeof n.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof n.componentDidUpdate != "function" || f === l.memoizedProps && s === l.memoizedState || (t.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || f === l.memoizedProps && s === l.memoizedState || (t.flags |= 1024), t.memoizedProps = a, t.memoizedState = h), n.props = a, n.state = h, n.context = c, a = g) : (typeof n.componentDidUpdate != "function" || f === l.memoizedProps && s === l.memoizedState || (t.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || f === l.memoizedProps && s === l.memoizedState || (t.flags |= 1024), a = !1);
    }
    return n = a, se(l, t), a = (t.flags & 128) !== 0, n || a ? (n = t.stateNode, u = a && typeof u.getDerivedStateFromError != "function" ? null : n.render(), t.flags |= 1, l !== null && a ? (t.child = Ha(
      t,
      l.child,
      null,
      e
    ), t.child = Ha(
      t,
      null,
      u,
      e
    )) : jl(l, t, u, e), t.memoizedState = n.state, l = t.child) : l = Hu(
      l,
      t,
      e
    ), l;
  }
  function fs(l, t, u, a) {
    return Oa(), t.flags |= 256, jl(l, t, u, a), t.child;
  }
  var rc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function Sc(l) {
    return { baseLanes: l, cachePool: Fo() };
  }
  function Tc(l, t, u) {
    return l = l !== null ? l.childLanes & ~u : 0, t && (l |= Bt), l;
  }
  function is(l, t, u) {
    var a = t.pendingProps, e = !1, n = (t.flags & 128) !== 0, f;
    if ((f = n) || (f = l !== null && l.memoizedState === null ? !1 : (kl.current & 2) !== 0), f && (e = !0, t.flags &= -129), f = (t.flags & 32) !== 0, t.flags &= -33, l === null) {
      if (J) {
        if (e ? ku(t) : Pu(), (l = Sl) ? (l = Uy(
          l,
          wt
        ), l = l !== null && l.data !== "&" ? l : null, l !== null && (t.memoizedState = {
          dehydrated: l,
          treeContext: Vu !== null ? { id: iu, overflow: cu } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, u = po(l), u.return = t, t.child = u, Ll = t, Sl = null)) : l = null, l === null) throw Ku(t);
        return S0(l) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      return n = a.children, a = a.fallback, e ? (Pu(), e = t.mode, n = Ef(
        { mode: "hidden", children: n },
        e
      ), a = _a(
        a,
        e,
        u,
        null
      ), n.return = t, a.return = t, n.sibling = a, t.child = n, a = t.child, a.memoizedState = Sc(u), a.childLanes = Tc(
        l,
        f,
        u
      ), t.memoizedState = rc, nn(null, a)) : (ku(t), Ec(t, n));
    }
    var i = l.memoizedState;
    if (i !== null) {
      var c = i.dehydrated;
      if (c !== null)
        return x1(
          l,
          t,
          n,
          f,
          a,
          c,
          i,
          u
        );
    }
    return e ? (Pu(), e = a.fallback, n = t.mode, i = l.child, c = i.sibling, a = Nu(i, {
      mode: "hidden",
      children: a.children
    }), a.subtreeFlags = i.subtreeFlags & 1206910976, c !== null ? e = Nu(c, e) : (e = _a(
      e,
      n,
      u,
      null
    ), e.flags |= 2), e.return = t, a.return = t, a.sibling = e, t.child = a, nn(null, a), a = t.child, e = l.child.memoizedState, e === null ? e = Sc(u) : (n = e.cachePool, n !== null ? (i = ql._currentValue, n = n.parent !== i ? { parent: i, pool: i } : n) : n = Fo(), e = {
      baseLanes: e.baseLanes | u,
      cachePool: n
    }), a.memoizedState = e, a.childLanes = Tc(
      l,
      f,
      u
    ), t.memoizedState = rc, nn(l.child, a)) : (ku(t), u = l.child, l = u.sibling, u = Nu(u, {
      mode: "visible",
      children: a.children
    }), u.return = t, u.sibling = null, l !== null && (f = t.deletions, f === null ? (t.deletions = [l], t.flags |= 16) : f.push(l)), t.child = u, t.memoizedState = null, u);
  }
  function Ec(l, t) {
    return t = Ef(
      { mode: "visible", children: t },
      l.mode
    ), t.return = l, l.child = t;
  }
  function Ef(l, t) {
    return l = Et(22, l, null, t), l.lanes = 0, l;
  }
  function zf(l, t, u) {
    return Ha(t, l.child, null, u), l = Ec(
      t,
      t.pendingProps.children
    ), l.flags |= 2, t.memoizedState = null, l;
  }
  function x1(l, t, u, a, e, n, f, i) {
    if (u)
      return t.flags & 256 ? (ku(t), t.flags &= -257, zf(
        l,
        t,
        i
      )) : t.memoizedState !== null ? (Pu(), t.child = l.child, t.flags |= 128, null) : (Pu(), n = e.fallback, f = t.mode, e = Ef(
        { mode: "visible", children: e.children },
        f
      ), n = _a(
        n,
        f,
        i,
        null
      ), n.flags |= 2, e.return = t, n.return = t, e.sibling = n, t.child = e, Ha(t, l.child, null, i), e = t.child, e.memoizedState = Sc(i), e.childLanes = Tc(
        l,
        a,
        i
      ), t.memoizedState = rc, nn(null, e));
    if (ku(t), S0(n)) {
      if (a = n.nextSibling && n.nextSibling.dataset, a) var c = a.dgst;
      return a = c, a !== "" && (e = Error(r(419)), e.stack = "", e.digest = a, we({ value: e, source: null, stack: null })), zf(
        l,
        t,
        i
      );
    }
    if (xl || Na(l, t, i, !1), a = (i & l.childLanes) !== 0, xl || a) {
      if (Iu.current !== null)
        return zf(
          l,
          t,
          i
        );
      if (a = gl, a !== null && (e = Z0(
        a,
        i
      ), e !== 0 && e !== f.retryLane))
        throw f.retryLane = e, ba(l, e), Ot(a, l, e), hc;
      return r0(n) || Qf(), zf(
        l,
        t,
        i
      );
    }
    return r0(n) ? (t.flags |= 192, t.child = l.child, null) : (l = f.treeContext, Sl = Ft(n.nextSibling), Ll = t, J = !0, Lu = null, wt = !1, l !== null && Vo(t, l), t = Ec(
      t,
      e.children
    ), t.flags |= 134221824, t);
  }
  function cs(l, t, u) {
    l.lanes |= t;
    var a = l.alternate;
    a !== null && (a.lanes |= t), kn(l.return, t, u);
  }
  function os(l) {
    for (var t = null; l !== null; ) {
      var u = l.alternate;
      u !== null && cf(u) === null && (t = l), l = l.sibling;
    }
    return t;
  }
  function bf(l, t, u, a, e, n) {
    var f = l.memoizedState;
    f === null ? l.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: a,
      tail: u,
      tailMode: e,
      treeForkCount: n
    } : (f.isBackwards = t, f.rendering = null, f.renderingStartTime = 0, f.last = a, f.tail = u, f.tailMode = e, f.treeForkCount = n);
  }
  function zc(l) {
    var t = l.child;
    for (l.child = null; t !== null; ) {
      var u = t.sibling;
      t.sibling = l.child, l.child = t, t = u;
    }
  }
  function bc(l, t, u) {
    var a = t.pendingProps, e = a.revealOrder, n = a.tail;
    a = a.children;
    var f = kl.current;
    if (t.flags & 128)
      return tn(t, f), null;
    var i = (f & 2) !== 0;
    if (i ? (f = f & 1 | 2, t.flags |= 128) : f &= 1, tn(t, f), e === "backwards" && l !== null ? (zc(l), jl(l, t, a, u), zc(l)) : jl(l, t, a, u), a = J ? Je : 0, !i && l !== null && (l.flags & 128) !== 0)
      l: for (l = t.child; l !== null; ) {
        if (l.tag === 13)
          l.memoizedState !== null && cs(l, u, t);
        else if (l.tag === 19)
          cs(l, u, t);
        else if (l.child !== null) {
          l.child.return = l, l = l.child;
          continue;
        }
        if (l === t) break l;
        for (; l.sibling === null; ) {
          if (l.return === null || l.return === t)
            break l;
          l = l.return;
        }
        l.sibling.return = l.return, l = l.sibling;
      }
    switch (e) {
      case "backwards":
        u = os(t.child), u === null ? (e = t.child, t.child = null) : (e = u.sibling, u.sibling = null, zc(t)), bf(
          t,
          !0,
          e,
          null,
          n,
          a
        );
        break;
      case "unstable_legacy-backwards":
        for (u = null, e = t.child, t.child = null; e !== null; ) {
          if (l = e.alternate, l !== null && cf(l) === null) {
            t.child = e;
            break;
          }
          l = e.sibling, e.sibling = u, u = e, e = l;
        }
        bf(
          t,
          !0,
          u,
          null,
          n,
          a
        );
        break;
      case "together":
        bf(
          t,
          !1,
          null,
          null,
          void 0,
          a
        );
        break;
      case "independent":
        t.memoizedState = null;
        break;
      default:
        u = os(t.child), u === null ? (e = t.child, t.child = null) : (e = u.sibling, u.sibling = null), bf(
          t,
          !1,
          e,
          u,
          n,
          a
        );
    }
    return t.child;
  }
  function vs(l, t, u) {
    var a = t.pendingProps;
    return Ju(t, t.type, a.value), jl(l, t, a.children, u), t.child;
  }
  function Hu(l, t, u) {
    if (l !== null && (t.dependencies = l.dependencies), aa |= t.lanes, (u & t.childLanes) === 0)
      if (l !== null) {
        if (Na(
          l,
          t,
          u,
          !1
        ), (u & t.childLanes) === 0)
          return null;
      } else return null;
    if (l !== null && t.child !== l.child)
      throw Error(r(153));
    if (t.child !== null) {
      for (l = t.child, u = Nu(l, l.pendingProps), t.child = u, u.return = t; l.sibling !== null; )
        l = l.sibling, u = u.sibling = Nu(l, l.pendingProps), u.return = t;
      u.sibling = null;
    }
    return t.child;
  }
  function _c(l, t) {
    return (l.lanes & t) !== 0 ? !0 : (l = l.dependencies, !!(l !== null && Pn(l)));
  }
  function G1(l, t, u) {
    switch (t.tag) {
      case 3:
        ma(t, t.stateNode.containerInfo), Ju(t, ql, l.memoizedState.cache), Oa();
        break;
      case 27:
      case 5:
        B(t);
        break;
      case 4:
        ma(t, t.stateNode.containerInfo);
        break;
      case 10:
        Ju(
          t,
          t.type,
          t.memoizedProps.value
        );
        break;
      case 31:
        if (t.memoizedState !== null)
          return t.flags |= 128, $i(t), null;
        break;
      case 13:
        var a = t.memoizedState;
        if (a !== null) {
          if (a.dehydrated !== null)
            return ku(t), t.flags |= 128, null;
          a = Na(
            l,
            t,
            u,
            !1
          );
          var e = t.child.childLanes;
          return a || (u & e) !== 0 ? is(l, t, u) : (ku(t), l = Hu(
            l,
            t,
            u
          ), l !== null ? l.sibling : null);
        }
        ku(t);
        break;
      case 19:
        if (t.flags & 128)
          return bc(
            l,
            t,
            u
          );
        if (e = (l.flags & 128) !== 0, a = (u & t.childLanes) !== 0, a || (Na(
          l,
          t,
          u,
          !1
        ), a = (u & t.childLanes) !== 0), e) {
          if (a)
            return bc(
              l,
              t,
              u
            );
          t.flags |= 128;
        }
        if (e = t.memoizedState, e !== null && (e.rendering = null, e.tail = null, e.lastEffect = null), tn(t, kl.current), a) break;
        return null;
      case 22:
        return t.lanes = 0, ts(
          l,
          t,
          u,
          t.pendingProps
        );
      case 24:
        Ju(t, ql, l.memoizedState.cache);
    }
    return Hu(l, t, u);
  }
  function ss(l, t, u) {
    if (l !== null)
      if (l.memoizedProps !== t.pendingProps)
        xl = !0;
      else {
        if (!_c(l, u) && (t.flags & 128) === 0)
          return xl = !1, G1(
            l,
            t,
            u
          );
        xl = (l.flags & 131072) !== 0;
      }
    else
      xl = !1, J && (t.flags & 1048576) !== 0 && Zo(t, Je, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        l: {
          var a = t.pendingProps;
          if (l = Ca(t.elementType), t.type = l, typeof l == "function")
            Ci(l) ? (a = qa(l, a), t.tag = 1, t = ns(
              null,
              t,
              l,
              a,
              u
            )) : (t.tag = 0, t = gc(
              null,
              t,
              l,
              a,
              u
            ));
          else {
            if (l != null) {
              var e = l.$$typeof;
              if (e === O) {
                t.tag = 11, t = kv(
                  null,
                  t,
                  l,
                  a,
                  u
                );
                break l;
              } else if (e === b) {
                t.tag = 14, t = Pv(
                  null,
                  t,
                  l,
                  a,
                  u
                );
                break l;
              } else if (e === Yl) {
                t.tag = 10, t.type = l, t = vs(
                  null,
                  t,
                  u
                );
                break l;
              }
            }
            throw t = k(l) || l, Error(r(306, t, ""));
          }
        }
        return t;
      case 0:
        return gc(
          l,
          t,
          t.type,
          t.pendingProps,
          u
        );
      case 1:
        return a = t.type, e = qa(
          a,
          t.pendingProps
        ), ns(
          l,
          t,
          a,
          e,
          u
        );
      case 3:
        l: {
          if (ma(
            t,
            t.stateNode.containerInfo
          ), l === null) throw Error(r(387));
          a = t.pendingProps;
          var n = t.memoizedState;
          e = n.element, Vi(l, t), ln(t, a, null, u);
          var f = t.memoizedState;
          if (a = f.cache, Ju(t, ql, a), a !== n.cache && Gi(
            t,
            [ql],
            u,
            !0
          ), Pe(), a = f.element, n.isDehydrated)
            if (n = {
              element: a,
              isDehydrated: !1,
              cache: f.cache
            }, t.updateQueue.baseState = n, t.memoizedState = n, t.flags & 256) {
              t = fs(
                l,
                t,
                a,
                u
              );
              break l;
            } else if (a !== e) {
              e = Lt(
                Error(r(424)),
                t
              ), we(e), t = fs(
                l,
                t,
                a,
                u
              );
              break l;
            } else
              for (l = t.stateNode.containerInfo, l.nodeType === 9 ? l = l.body : l = l.nodeName === "HTML" ? l.ownerDocument.body : l, Sl = Ft(l.firstChild), Ll = t, J = !0, Lu = null, wt = !0, u = tv(
                t,
                null,
                a,
                u
              ), t.child = u; u; )
                u.flags = u.flags & -3 | 134221824, u = u.sibling;
          else {
            if (Oa(), a === e) {
              t = Hu(
                l,
                t,
                u
              );
              break l;
            }
            jl(l, t, a, u);
          }
          t = t.child;
        }
        return t;
      case 26:
        return se(l, t), l === null ? (u = xy(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = u : J || (t.stateNode = hy(
          t.type,
          t.pendingProps,
          pt.current,
          t
        )) : t.memoizedState = xy(
          t.type,
          l.memoizedProps,
          t.pendingProps,
          l.memoizedState
        ), null;
      case 27:
        return B(t), l === null && J && (a = t.stateNode = Hy(
          t.type,
          t.pendingProps,
          pt.current
        ), Ll = t, wt = !0, e = Sl, ia(t.type) ? (T0 = e, Sl = Ft(a.firstChild)) : Sl = e), jl(
          l,
          t,
          t.pendingProps.children,
          u
        ), se(l, t), l === null && (t.flags |= 4194304), t.child;
      case 5:
        return l === null && J && ((e = a = Sl) && (a = Rd(
          a,
          t.type,
          t.pendingProps,
          wt
        ), a !== null ? (t.stateNode = a, Ll = t, Sl = Ft(a.firstChild), wt = !1, e = !0) : e = !1), e || Ku(t)), B(t), e = t.type, n = t.pendingProps, f = l !== null ? l.memoizedProps : null, a = n.children, v0(e, n) ? a = null : f !== null && v0(e, f) && (t.flags |= 32), t.memoizedState !== null && (e = Ii(
          l,
          t,
          N1,
          null,
          null,
          u
        ), Ue._currentValue = e), se(l, t), jl(l, t, a, u), t.child;
      case 6:
        return l === null && J && ((l = u = Sl) && (u = Hd(
          u,
          t.pendingProps,
          wt
        ), u !== null ? (t.stateNode = u, Ll = t, Sl = null, l = !0) : l = !1), l || Ku(t)), null;
      case 13:
        return is(l, t, u);
      case 4:
        return ma(
          t,
          t.stateNode.containerInfo
        ), a = t.pendingProps, l === null ? t.child = Ha(
          t,
          null,
          a,
          u
        ) : jl(l, t, a, u), t.child;
      case 11:
        return kv(
          l,
          t,
          t.type,
          t.pendingProps,
          u
        );
      case 7:
        return a = t.pendingProps, se(l, t), jl(l, t, a, u), t.child;
      case 8:
        return jl(
          l,
          t,
          t.pendingProps.children,
          u
        ), t.child;
      case 12:
        return jl(
          l,
          t,
          t.pendingProps.children,
          u
        ), t.child;
      case 10:
        return vs(l, t, u);
      case 9:
        return e = t.type._context, a = t.pendingProps.children, Ma(t), e = Wl(e), a = a(e), t.flags |= 1, jl(l, t, a, u), t.child;
      case 14:
        return Pv(
          l,
          t,
          t.type,
          t.pendingProps,
          u
        );
      case 15:
        return ls(
          l,
          t,
          t.type,
          t.pendingProps,
          u
        );
      case 19:
        return bc(l, t, u);
      case 31:
        return B1(l, t, u);
      case 22:
        return ts(
          l,
          t,
          u,
          t.pendingProps
        );
      case 24:
        return Ma(t), a = Wl(ql), l === null ? (e = pi(), e === null && (e = gl, n = Xi(), e.pooledCache = n, n.refCount++, n !== null && (e.pooledCacheLanes |= u), e = n), t.memoizedState = { parent: a, cache: e }, Zi(t), Ju(t, ql, e)) : ((l.lanes & u) !== 0 && (Vi(l, t), ln(t, null, null, u), Pe()), e = l.memoizedState, n = t.memoizedState, e.parent !== a ? (e = { parent: a, cache: a }, t.memoizedState = e, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = e), Ju(t, ql, a)) : (a = n.cache, Ju(t, ql, a), a !== e.cache && Gi(
          t,
          [ql],
          u,
          !0
        ))), jl(
          l,
          t,
          t.pendingProps.children,
          u
        ), t.child;
      case 30:
        return t.stateNode === null && (t.stateNode = {
          autoName: null,
          paired: null,
          clones: null,
          ref: null
        }), a = t.pendingProps, a.name != null && a.name !== "auto" ? t.flags |= l === null ? 18882560 : 18874368 : J && Wn(t), l !== null && l.memoizedProps.name !== a.name ? t.flags |= 4194816 : se(l, t), jl(l, t, a.children, u), t.child;
      case 29:
        throw t.pendingProps;
    }
    throw Error(r(156, t.tag));
  }
  function Yu(l) {
    l.flags |= 4;
  }
  function Oc(l, t, u, a, e) {
    var n;
    if ((n = (l.mode & 32) !== 0) && (n = u === null ? py(t, a) : py(t, a) && (a.src !== u.src || a.srcSet !== u.srcSet)), n) {
      if (l.flags |= 16777216, (e & 335544128) === e)
        if (l.stateNode.complete) l.flags |= 8192;
        else if (Js()) l.flags |= 8192;
        else
          throw Ra = af, ji;
    } else l.flags &= -16777217;
  }
  function ys(l, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      l.flags &= -16777217;
    else if (l.flags |= 16777216, !jy(t))
      if (Js()) l.flags |= 8192;
      else
        throw Ra = af, ji;
  }
  function _f(l, t) {
    t !== null && (l.flags |= 4), l.flags & 16384 && (t = l.tag !== 22 ? Q0() : 536870912, l.lanes |= t, ge |= t);
  }
  function fn(l, t) {
    if (!J)
      switch (l.tailMode) {
        case "visible":
          break;
        case "collapsed":
          for (var u = l.tail, a = null; u !== null; )
            u.alternate !== null && (a = u), u = u.sibling;
          a === null ? t || l.tail === null ? l.tail = null : l.tail.sibling = null : a.sibling = null;
          break;
        default:
          for (t = l.tail, u = null; t !== null; )
            t.alternate !== null && (u = t), t = t.sibling;
          u === null ? l.tail = null : u.sibling = null;
      }
  }
  function Tl(l) {
    var t = l.alternate !== null && l.alternate.child === l.child, u = 0, a = 0;
    if (t)
      for (var e = l.child; e !== null; )
        u |= e.lanes | e.childLanes, a |= e.subtreeFlags & 1206910976, a |= e.flags & 1206910976, e.return = l, e = e.sibling;
    else
      for (e = l.child; e !== null; )
        u |= e.lanes | e.childLanes, a |= e.subtreeFlags, a |= e.flags, e.return = l, e = e.sibling;
    return l.subtreeFlags |= a, l.childLanes = u, t;
  }
  function X1(l, t, u) {
    var a = t.pendingProps;
    switch (Yi(t), t.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Tl(t), null;
      case 1:
        return Tl(t), null;
      case 3:
        return u = t.stateNode, a = null, l !== null && (a = l.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), Uu(ql), G(), u.pendingContext && (u.context = u.pendingContext, u.pendingContext = null), (l === null || l.child === null) && (ee(t) ? Yu(t) : l === null || l.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Bi())), Tl(t), null;
      case 26:
        var e = t.type, n = t.memoizedState;
        return l === null ? (Yu(t), n !== null ? (Tl(t), ys(t, n)) : (Tl(t), Oc(
          t,
          e,
          null,
          a,
          u
        ))) : n ? n !== l.memoizedState ? (Yu(t), Tl(t), ys(t, n)) : (Tl(t), t.flags &= -16777217) : (l = l.memoizedProps, l !== a && Yu(t), Tl(t), Oc(
          t,
          e,
          l,
          a,
          u
        )), null;
      case 27:
        if (el(t), u = pt.current, e = t.type, l !== null && t.stateNode != null)
          l.memoizedProps !== a && Yu(t);
        else {
          if (!a) {
            if (t.stateNode === null)
              throw Error(r(166));
            return Tl(t), t.subtreeFlags &= -33554433, null;
          }
          l = Mt.current, ee(t) ? Lo(t) : (l = Hy(e, a, u), t.stateNode = l, Yu(t));
        }
        return Tl(t), t.subtreeFlags &= -33554433, null;
      case 5:
        if (el(t), e = t.type, l !== null && t.stateNode != null)
          l.memoizedProps !== a && Yu(t);
        else {
          if (!a) {
            if (t.stateNode === null)
              throw Error(r(166));
            return Tl(t), t.subtreeFlags &= -33554433, null;
          }
          if (n = Mt.current, ee(t))
            Lo(t);
          else {
            var f = Sn(
              pt.current
            );
            switch (n) {
              case 1:
                n = f.createElementNS(
                  "http://www.w3.org/2000/svg",
                  e
                );
                break;
              case 2:
                n = f.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  e
                );
                break;
              default:
                switch (e) {
                  case "svg":
                    n = f.createElementNS(
                      "http://www.w3.org/2000/svg",
                      e
                    );
                    break;
                  case "math":
                    n = f.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      e
                    );
                    break;
                  case "script":
                    n = f.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(
                      n.firstChild
                    );
                    break;
                  case "select":
                    n = typeof a.is == "string" ? f.createElement("select", {
                      is: a.is
                    }) : f.createElement("select"), a.multiple ? n.multiple = !0 : a.size && (n.size = a.size);
                    break;
                  default:
                    n = typeof a.is == "string" ? f.createElement(e, { is: a.is }) : f.createElement(e);
                }
            }
            n[Fl] = t, n[Tt] = a;
            l: for (f = t.child; f !== null; ) {
              if (f.tag === 5 || f.tag === 6)
                n.appendChild(f.stateNode);
              else if (f.tag !== 4 && f.tag !== 27 && f.child !== null) {
                f.child.return = f, f = f.child;
                continue;
              }
              if (f === t) break l;
              for (; f.sibling === null; ) {
                if (f.return === null || f.return === t)
                  break l;
                f = f.return;
              }
              f.sibling.return = f.return, f = f.sibling;
            }
            t.stateNode = n;
            l: switch (lt(n, e, a), e) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                a = !!a.autoFocus;
                break l;
              case "img":
                a = !0;
                break l;
              default:
                a = !1;
            }
            a && Yu(t);
          }
        }
        return Tl(t), t.subtreeFlags &= -33554433, Oc(
          t,
          t.type,
          l === null ? null : l.memoizedProps,
          t.pendingProps,
          u
        ), null;
      case 6:
        if (l && t.stateNode != null)
          l.memoizedProps !== a && Yu(t);
        else {
          if (typeof a != "string" && t.stateNode === null)
            throw Error(r(166));
          if (l = pt.current, ee(t)) {
            if (l = t.stateNode, u = t.memoizedProps, a = null, e = Ll, e !== null)
              switch (e.tag) {
                case 27:
                case 5:
                  a = e.memoizedProps;
              }
            l[Fl] = t, l = !!(l.nodeValue === u || a !== null && a.suppressHydrationWarning === !0 || sy(l.nodeValue, u)), l || Ku(t, !0);
          } else
            l = Sn(l).createTextNode(
              a
            ), l[Fl] = t, t.stateNode = l;
        }
        return Tl(t), null;
      case 31:
        if (u = t.memoizedState, l === null || l.memoizedState !== null) {
          if (a = ee(t), u !== null) {
            if (l === null) {
              if (!a) throw Error(r(318));
              if (l = t.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(r(557));
              l[Fl] = t;
            } else
              Oa(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Tl(t), l = !1;
          } else
            u = Bi(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = u), l = !0;
          if (!l)
            return t.flags & 256 ? (Ht(t), t) : (Ht(t), null);
          if ((t.flags & 128) !== 0)
            throw Error(r(558));
        }
        return Tl(t), null;
      case 13:
        if (a = t.memoizedState, l === null || l.memoizedState !== null && l.memoizedState.dehydrated !== null) {
          if (e = ee(t), a !== null && a.dehydrated !== null) {
            if (l === null) {
              if (!e) throw Error(r(318));
              if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(r(317));
              e[Fl] = t;
            } else
              Oa(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Tl(t), e = !1;
          } else
            e = Bi(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = e), e = !0;
          if (!e)
            return t.flags & 256 ? (Ht(t), t) : (Ht(t), null);
        }
        return Ht(t), (t.flags & 128) !== 0 ? (t.lanes = u, t) : (u = a !== null, l = l !== null && l.memoizedState !== null, u && (a = t.child, e = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (e = a.alternate.memoizedState.cachePool.pool), n = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (n = a.memoizedState.cachePool.pool), n !== e && (a.flags |= 2048)), u !== l && u && (t.child.flags |= 8192), _f(t, t.updateQueue), Tl(t), null);
      case 4:
        return G(), l === null && n0(t.stateNode.containerInfo), t.flags |= 67108864, Tl(t), null;
      case 10:
        return Uu(t.type), Tl(t), null;
      case 19:
        if (Fi(t), a = t.memoizedState, a === null) return Tl(t), null;
        if (e = (t.flags & 128) !== 0, n = a.rendering, n === null)
          if (e) fn(a, !1);
          else {
            if (Nl !== 0 || l !== null && (l.flags & 128) !== 0)
              for (l = t.child; l !== null; ) {
                if (n = cf(l), n !== null) {
                  for (t.flags |= 128, fn(a, !1), l = n.updateQueue, t.updateQueue = l, _f(t, l), t.subtreeFlags = 0, l = u, u = t.child; u !== null; )
                    Qo(u, l), u = u.sibling;
                  return tn(
                    t,
                    kl.current & 1 | 2
                  ), J && Mu(t, a.treeForkCount), t.child;
                }
                l = l.sibling;
              }
            a.tail !== null && Ol() > Bf && (t.flags |= 128, e = !0, fn(a, !1), t.lanes = 4194304);
          }
        else {
          if (!e)
            if (l = cf(n), l !== null) {
              if (t.flags |= 128, e = !0, l = l.updateQueue, t.updateQueue = l, _f(t, l), fn(a, !0), a.tail === null && a.tailMode !== "collapsed" && a.tailMode !== "visible" && !n.alternate && !J)
                return Tl(t), null;
            } else
              2 * Ol() - a.renderingStartTime > Bf && u !== 536870912 && (t.flags |= 128, e = !0, fn(a, !1), t.lanes = 4194304);
          a.isBackwards ? (n.sibling = t.child, t.child = n) : (l = a.last, l !== null ? l.sibling = n : t.child = n, a.last = n);
        }
        if (a.tail !== null) {
          l = a.tail;
          l: {
            for (u = l; u !== null; ) {
              if (u.alternate !== null) {
                u = !1;
                break l;
              }
              u = u.sibling;
            }
            u = !0;
          }
          return a.rendering = l, a.tail = l.sibling, a.renderingStartTime = Ol(), l.sibling = null, n = kl.current, n = e ? n & 1 | 2 : n & 1, a.tailMode === "visible" || a.tailMode === "collapsed" || !u || J ? tn(t, n) : (u = n, ml(Il, t), ml(kl, u), it === null && (it = t)), J && Mu(t, a.treeForkCount), l;
        }
        return Tl(t), null;
      case 22:
      case 23:
        return Ht(t), wi(), a = t.memoizedState !== null, l !== null ? l.memoizedState !== null !== a && (t.flags |= 8192) : a && (t.flags |= 8192), a ? (u & 536870912) !== 0 && (t.flags & 128) === 0 && (Tl(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Tl(t), u = t.updateQueue, u !== null && _f(t, u.retryQueue), u = null, l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), a = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), a !== u && (t.flags |= 2048), l !== null && Cl(Ua), null;
      case 24:
        return u = null, l !== null && (u = l.memoizedState.cache), t.memoizedState.cache !== u && (t.flags |= 2048), Uu(ql), Tl(t), null;
      case 25:
        return null;
      case 30:
        return t.flags |= 33554432, Tl(t), null;
    }
    throw Error(r(156, t.tag));
  }
  function Q1(l, t) {
    switch (Yi(t), t.tag) {
      case 1:
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 3:
        return Uu(ql), G(), l = t.flags, (l & 65536) !== 0 && (l & 128) === 0 ? (t.flags = l & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return el(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if (Ht(t), t.alternate === null)
            throw Error(r(340));
          Oa();
        }
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 13:
        if (Ht(t), l = t.memoizedState, l !== null && l.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(r(340));
          Oa();
        }
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 19:
        return Fi(t), l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null), t.flags |= 4, t) : null;
      case 4:
        return G(), null;
      case 10:
        return Uu(t.type), null;
      case 22:
      case 23:
        return Ht(t), wi(), l !== null && Cl(Ua), l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 24:
        return Uu(ql), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function ms(l, t) {
    switch (Yi(t), t.tag) {
      case 3:
        Uu(ql), G();
        break;
      case 26:
      case 27:
      case 5:
        el(t);
        break;
      case 4:
        G();
        break;
      case 31:
        t.memoizedState !== null && Ht(t);
        break;
      case 13:
        Ht(t);
        break;
      case 19:
        Fi(t);
        break;
      case 10:
        Uu(t.type);
        break;
      case 22:
      case 23:
        Ht(t), wi(), l !== null && Cl(Ua);
        break;
      case 24:
        Uu(ql);
    }
  }
  function cn(l, t) {
    try {
      var u = t.updateQueue, a = u !== null ? u.lastEffect : null;
      if (a !== null) {
        var e = a.next;
        u = e;
        do {
          if ((u.tag & l) === l) {
            a = void 0;
            var n = u.create, f = u.inst;
            a = n(), f.destroy = a;
          }
          u = u.next;
        } while (u !== e);
      }
    } catch (i) {
      sl(t, t.return, i);
    }
  }
  function la(l, t, u) {
    try {
      var a = t.updateQueue, e = a !== null ? a.lastEffect : null;
      if (e !== null) {
        var n = e.next;
        a = n;
        do {
          if ((a.tag & l) === l) {
            var f = a.inst, i = f.destroy;
            if (i !== void 0) {
              f.destroy = void 0, e = t;
              var c = u, m = i;
              try {
                m();
              } catch (g) {
                sl(
                  e,
                  c,
                  g
                );
              }
            }
          }
          a = a.next;
        } while (a !== n);
      }
    } catch (g) {
      sl(t, t.return, g);
    }
  }
  function ds(l) {
    var t = l.updateQueue;
    if (t !== null) {
      var u = l.stateNode;
      try {
        av(t, u);
      } catch (a) {
        sl(l, l.return, a);
      }
    }
  }
  function hs(l, t, u) {
    u.props = qa(
      l.type,
      l.memoizedProps
    ), u.state = l.memoizedState;
    try {
      u.componentWillUnmount();
    } catch (a) {
      sl(l, t, a);
    }
  }
  function ou(l, t) {
    try {
      var u = l.ref;
      if (u !== null) {
        switch (l.tag) {
          case 26:
          case 27:
          case 5:
            var a = l.stateNode;
            break;
          case 30:
            var e = l.stateNode, n = Ou(l.memoizedProps, e);
            (e.ref === null || e.ref.name !== n) && (e.ref = by(n)), a = e.ref;
            break;
          case 7:
            if (l.stateNode === null) {
              var f = new Gt(l);
              S(
                l.child,
                !1,
                Ud,
                f,
                void 0,
                void 0
              ), l.stateNode = f;
            }
            a = l.stateNode;
            break;
          default:
            a = l.stateNode;
        }
        typeof u == "function" ? l.refCleanup = u(a) : u.current = a;
      }
    } catch (i) {
      sl(l, t, i);
    }
  }
  function Pl(l, t) {
    var u = l.ref, a = l.refCleanup;
    if (u !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (e) {
          sl(l, t, e);
        } finally {
          l.refCleanup = null, l = l.alternate, l != null && (l.refCleanup = null);
        }
      else if (typeof u == "function")
        try {
          u(null);
        } catch (e) {
          sl(l, t, e);
        }
      else u.current = null;
  }
  function Of(l, t) {
    if ((l.tag === 5 || l.tag === 27 || l.tag === 6) && l.alternate === null && t !== null)
      for (var u = 0; u < t.length; u++)
        Dy(
          l.stateNode,
          t[u]
        );
  }
  function gs(l) {
    for (var t = l.return; t !== null && (Nc(t) && Dy(l.stateNode, t.stateNode), !Ac(t)); )
      t = t.return;
  }
  function on(l) {
    for (var t = l.return; t !== null && (Nc(t) && Cd(l.stateNode, t.stateNode), !Ac(t)); )
      t = t.return;
  }
  function Ac(l) {
    return l.tag === 5 || l.tag === 3 || l.tag === 27;
  }
  function Nc(l) {
    return l && l.tag === 7 && l.stateNode !== null;
  }
  function Mc(l) {
    var t = l.type, u = l.memoizedProps, a = l.stateNode;
    try {
      l: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          u.autoFocus && a.focus();
          break l;
        case "img":
          u.src ? a.src = u.src : u.srcSet && (a.srcset = u.srcSet);
      }
    } catch (e) {
      sl(l, l.return, e);
    }
  }
  function Dc(l, t, u) {
    try {
      var a = l.stateNode;
      sd(a, l.type, u, t), a[Tt] = t;
    } catch (e) {
      sl(l, l.return, e);
    }
  }
  function rs(l) {
    return l.tag === 5 || l.tag === 3 || l.tag === 26 || l.tag === 27 && ia(l.type) || l.tag === 4;
  }
  function Uc(l) {
    l: for (; ; ) {
      for (; l.sibling === null; ) {
        if (l.return === null || rs(l.return)) return null;
        l = l.return;
      }
      for (l.sibling.return = l.return, l = l.sibling; l.tag !== 5 && l.tag !== 6 && l.tag !== 18; ) {
        if (l.tag === 27 && ia(l.type) || l.flags & 2 || l.child === null || l.tag === 4) continue l;
        l.child.return = l, l = l.child;
      }
      if (!(l.flags & 2)) return l.stateNode;
    }
  }
  function Cc(l, t, u, a) {
    var e = l.tag;
    if (e === 5 || e === 6)
      e = l.stateNode, t ? (u.nodeType === 9 ? u.body : u.nodeName === "HTML" ? u.ownerDocument.body : u).insertBefore(e, t) : (t = u.nodeType === 9 ? u.body : u.nodeName === "HTML" ? u.ownerDocument.body : u, t.appendChild(e), u = u._reactRootContainer, u != null || t.onclick !== null || (t.onclick = fu)), Of(l, a), al = !0;
    else if (e !== 4 && (e === 27 && (Of(l, a), a = null, ia(l.type) && (u = l.stateNode, t = null)), l = l.child, l !== null))
      for (Cc(
        l,
        t,
        u,
        a
      ), l = l.sibling; l !== null; )
        Cc(
          l,
          t,
          u,
          a
        ), l = l.sibling;
  }
  function Af(l, t, u, a) {
    var e = l.tag;
    if (e === 5 || e === 6)
      e = l.stateNode, t ? u.insertBefore(e, t) : u.appendChild(e), Of(l, a), al = !0;
    else if (e !== 4 && (e === 27 && (Of(l, a), a = null, ia(l.type) && (u = l.stateNode)), l = l.child, l !== null))
      for (Af(
        l,
        t,
        u,
        a
      ), l = l.sibling; l !== null; )
        Af(
          l,
          t,
          u,
          a
        ), l = l.sibling;
  }
  function Ss(l) {
    var t = l.stateNode, u = l.memoizedProps;
    try {
      for (var a = l.type, e = t.attributes; e.length; )
        t.removeAttributeNode(e[0]);
      lt(t, a, u), t[Fl] = l, t[Tt] = u;
    } catch (n) {
      sl(l, l.return, n);
    }
  }
  var Nf = !1, Yt = null;
  function Ts(l) {
    (l.tag === 30 || (l.subtreeFlags & 33554432) !== 0) && (Nf = !0);
  }
  var vu = null;
  function Es() {
    var l = vu;
    return vu = null, l;
  }
  var zt = 0;
  function ye(l, t, u, a, e) {
    return zt = 0, zs(
      l.child,
      t,
      u,
      a,
      e
    );
  }
  function zs(l, t, u, a, e) {
    for (var n = !1; l !== null; ) {
      if (l.tag === 5) {
        var f = l.stateNode;
        if (a !== null) {
          var i = m0(f);
          a.push(i), i.view && (n = !0);
        } else
          n || m0(f).view && (n = !0);
        Nf = !0, Ey(
          f,
          zt === 0 ? t : t + "_" + zt,
          u
        ), zt++;
      } else (l.tag !== 22 || l.memoizedState === null) && (l.tag === 30 && e || zs(
        l.child,
        t,
        u,
        a,
        e
      ) && (n = !0));
      l = l.sibling;
    }
    return n;
  }
  function su(l, t) {
    for (; l !== null; )
      l.tag === 5 ? zy(l.stateNode, l.memoizedProps) : (l.tag !== 22 || l.memoizedState === null) && (l.tag === 30 && t || su(
        l.child,
        t
      )), l = l.sibling;
  }
  function Mf(l) {
    if ((l.subtreeFlags & 18874368) !== 0)
      for (l = l.child; l !== null; ) {
        if ((l.tag !== 22 || l.memoizedState === null) && (Mf(l), l.tag === 30 && (l.flags & 18874368) !== 0 && l.stateNode.paired)) {
          var t = l.memoizedProps;
          if (t.name == null || t.name === "auto")
            throw Error(r(544));
          var u = t.name;
          t = Au(t.default, t.share), t !== "none" && (ye(
            l,
            u,
            t,
            null,
            !1
          ) || su(l.child, !1));
        }
        l = l.sibling;
      }
  }
  function Rc(l, t) {
    if (l.tag === 30) {
      var u = l.stateNode, a = l.memoizedProps, e = Ou(a, u), n = Au(
        a.default,
        u.paired ? a.share : a.enter
      );
      n !== "none" ? ye(l, e, n, null, !1) ? (Mf(l), u.paired || t || Ee(l, a.onEnter)) : su(l.child, !1) : Mf(l);
    } else if ((l.subtreeFlags & 33554432) !== 0)
      for (l = l.child; l !== null; )
        Rc(l, t), l = l.sibling;
    else Mf(l);
  }
  function Hc(l) {
    if (Yt !== null && Yt.size !== 0) {
      var t = Yt;
      if ((l.subtreeFlags & 18874368) !== 0)
        for (l = l.child; l !== null; ) {
          if (l.tag !== 22 || l.memoizedState === null) {
            if (l.tag === 30 && (l.flags & 18874368) !== 0) {
              var u = l.memoizedProps, a = u.name;
              if (a != null && a !== "auto") {
                var e = t.get(a);
                if (e !== void 0) {
                  var n = Au(
                    u.default,
                    u.share
                  );
                  if (n !== "none" && (ye(
                    l,
                    a,
                    n,
                    null,
                    !1
                  ) ? (n = l.stateNode, e.paired = n, n.paired = e, Ee(l, u.onShare)) : su(l.child, !1)), t.delete(a), t.size === 0) break;
                }
              }
            }
            Hc(l);
          }
          l = l.sibling;
        }
    }
  }
  function Yc(l) {
    if (l.tag === 30) {
      var t = l.memoizedProps, u = Ou(t, l.stateNode), a = Yt !== null ? Yt.get(u) : void 0, e = Au(
        t.default,
        a !== void 0 ? t.share : t.exit
      );
      e !== "none" && (ye(l, u, e, null, !1) ? a !== void 0 ? (e = l.stateNode, a.paired = e, e.paired = a, Yt.delete(u), Ee(l, t.onShare)) : Ee(l, t.onExit) : su(l.child, !1)), Yt !== null && Hc(l);
    } else if ((l.subtreeFlags & 33554432) !== 0)
      for (l = l.child; l !== null; )
        Yc(l), l = l.sibling;
    else
      Yt !== null && Hc(l);
  }
  function bs(l) {
    for (l = l.child; l !== null; ) {
      if (l.tag === 30) {
        var t = l.memoizedProps, u = Ou(t, l.stateNode);
        t = Au(t.default, t.update), l.flags &= -5, t !== "none" && ye(
          l,
          u,
          t,
          l.memoizedState = [],
          !1
        );
      } else
        (l.subtreeFlags & 33554432) !== 0 && bs(l);
      l = l.sibling;
    }
  }
  function qc(l) {
    if ((l.subtreeFlags & 18874368) !== 0)
      for (l = l.child; l !== null; ) {
        if (l.tag !== 22 || l.memoizedState === null) {
          if (l.tag === 30 && (l.flags & 18874368) !== 0) {
            var t = l.stateNode;
            t.paired !== null && (t.paired = null, su(l.child, !1));
          }
          qc(l);
        }
        l = l.sibling;
      }
  }
  function Df(l) {
    if (l.tag === 30)
      l.stateNode.paired = null, su(l.child, !1), qc(l);
    else if ((l.subtreeFlags & 33554432) !== 0)
      for (l = l.child; l !== null; )
        Df(l), l = l.sibling;
    else qc(l);
  }
  function _s(l) {
    for (l = l.child; l !== null; )
      l.tag === 30 ? su(l.child, !1) : (l.subtreeFlags & 33554432) !== 0 && _s(l), l = l.sibling;
  }
  function Bc(l, t, u, a, e, n, f) {
    for (var i = !1; t !== null; ) {
      if (t.tag === 5) {
        var c = t.stateNode;
        if (n !== null && zt < n.length) {
          var m = n[zt], g = m0(c);
          (m.view || g.view) && (i = !0);
          var E;
          if (E = (l.flags & 4) === 0)
            if (g.clip) E = !0;
            else {
              E = m.rect;
              var s = g.rect;
              E = E.y !== s.y || E.x !== s.x || E.height !== s.height || E.width !== s.width;
            }
          E && (l.flags |= 4), g.abs ? g = !m.abs : (m = m.rect, g = g.rect, g = m.height !== g.height || m.width !== g.width), g && (l.flags |= 32);
        } else l.flags |= 32;
        (l.flags & 4) !== 0 && Ey(
          c,
          zt === 0 ? u : u + "_" + zt,
          e
        ), i && (l.flags & 4) !== 0 || (vu === null && (vu = []), vu.push(
          c,
          zt === 0 ? a : a + "_" + zt,
          t.memoizedProps
        )), zt++;
      } else (t.tag !== 22 || t.memoizedState === null) && (t.tag === 30 && f ? l.flags |= t.flags & 32 : Bc(
        l,
        t.child,
        u,
        a,
        e,
        n,
        f
      ) && (i = !0));
      t = t.sibling;
    }
    return i;
  }
  function Os(l, t) {
    for (l = l.child; l !== null; ) {
      if (l.tag === 30) {
        var u = l.memoizedProps, a = l.stateNode, e = Ou(u, a), n = Au(u.default, u.update), f;
        f = l.memoizedState, l.memoizedState = null, a = l;
        var i = l.child;
        zt = 0, e = Bc(
          a,
          i,
          e,
          e,
          n,
          f,
          !1
        ), (l.flags & 4) !== 0 && e && Ee(l, u.onUpdate);
      } else
        (l.subtreeFlags & 33554432) !== 0 && Os(l);
      l = l.sibling;
    }
  }
  var Kl = !1, il = !1, yu = !1, xc = !1, As = typeof WeakSet == "function" ? WeakSet : Set, Jl = null, mu = !1, vn = !1, Uf = !1, Gc = !1;
  function p1(l, t, u) {
    if (l = l.containerInfo, c0 = Ce, l = Uo(l), _i(l)) {
      if ("selectionStart" in l)
        var a = {
          start: l.selectionStart,
          end: l.selectionEnd
        };
      else
        l: {
          a = (a = l.ownerDocument) && a.defaultView || window;
          var e = a.getSelection && a.getSelection();
          if (e && e.rangeCount !== 0) {
            a = e.anchorNode;
            var n = e.anchorOffset, f = e.focusNode;
            e = e.focusOffset;
            try {
              a.nodeType, f.nodeType;
            } catch {
              a = null;
              break l;
            }
            var i = 0, c = -1, m = -1, g = 0, E = 0, s = l, h = null;
            t: for (; ; ) {
              for (var _; s !== a || n !== 0 && s.nodeType !== 3 || (c = i + n), s !== f || e !== 0 && s.nodeType !== 3 || (m = i + e), s.nodeType === 3 && (i += s.nodeValue.length), (_ = s.firstChild) !== null; )
                h = s, s = _;
              for (; ; ) {
                if (s === l) break t;
                if (h === a && ++g === n && (c = i), h === f && ++E === e && (m = i), (_ = s.nextSibling) !== null) break;
                s = h, h = s.parentNode;
              }
              s = _;
            }
            a = c === -1 || m === -1 ? null : { start: c, end: m };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (o0 = { focusedElem: l, selectionRange: a }, Ce = !1, u = (u & 335544064) === u, Jl = t, t = u ? 9270 : 1024; Jl !== null; ) {
      if (l = Jl, u && (a = l.deletions, a !== null))
        for (n = 0; n < a.length; n++)
          u && Yc(a[n]);
      if (l.alternate === null && (l.flags & 2) !== 0)
        u && Ts(l), Cf(u);
      else {
        if (l.tag === 22) {
          if (a = l.alternate, l.memoizedState !== null) {
            a !== null && a.memoizedState === null && u && Yc(a), Cf(u);
            continue;
          } else if (a !== null && a.memoizedState !== null) {
            u && Ts(l), Cf(u);
            continue;
          }
        }
        a = l.child, (l.subtreeFlags & t) !== 0 && a !== null ? (a.return = l, Jl = a) : (u && bs(l), Cf(u));
      }
    }
    Yt = null;
  }
  function Cf(l) {
    for (; Jl !== null; ) {
      var t = Jl, u = l, a = t.alternate, e = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if ((e & 1024) !== 0 && a !== null) {
            u = void 0, e = a.memoizedProps, a = a.memoizedState;
            var n = t.stateNode;
            try {
              var f = qa(
                t.type,
                e
              );
              u = n.getSnapshotBeforeUpdate(
                f,
                a
              ), n.__reactInternalSnapshotBeforeUpdate = u;
            } catch (i) {
              sl(t, t.return, i);
            }
          }
          break;
        case 3:
          if ((e & 1024) !== 0) {
            if (a = t.stateNode.containerInfo, u = a.nodeType, u === 9)
              g0(a);
            else if (u === 1)
              switch (a.nodeName) {
                case "HEAD":
                case "HTML":
                case "BODY":
                  g0(a);
                  break;
                default:
                  a.textContent = "";
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
          u && a !== null && (u = Ou(
            a.memoizedProps,
            a.stateNode
          ), e = t.memoizedProps, e = Au(e.default, e.update), e !== "none" && ye(
            a,
            u,
            e,
            a.memoizedState = [],
            !0
          ));
          break;
        default:
          if ((e & 1024) !== 0) throw Error(r(163));
      }
      if (a = t.sibling, a !== null) {
        a.return = t.return, Jl = a;
        break;
      }
      Jl = t.return;
    }
  }
  function Ns(l, t, u) {
    var a = u.flags;
    switch (u.tag) {
      case 0:
      case 11:
      case 15:
        du(l, u), a & 4 && cn(5, u);
        break;
      case 1:
        if (du(l, u), a & 4)
          if (l = u.stateNode, t === null)
            try {
              l.componentDidMount();
            } catch (f) {
              sl(u, u.return, f);
            }
          else {
            var e = qa(
              u.type,
              t.memoizedProps
            );
            t = t.memoizedState;
            try {
              l.componentDidUpdate(
                e,
                t,
                l.__reactInternalSnapshotBeforeUpdate
              );
            } catch (f) {
              sl(
                u,
                u.return,
                f
              );
            }
          }
        a & 64 && ds(u), a & 512 && ou(u, u.return);
        break;
      case 3:
        if (du(l, u), a & 64 && (l = u.updateQueue, l !== null)) {
          if (t = null, u.child !== null)
            switch (u.child.tag) {
              case 27:
              case 5:
                t = u.child.stateNode;
                break;
              case 1:
                t = u.child.stateNode;
            }
          try {
            av(l, t);
          } catch (f) {
            sl(u, u.return, f);
          }
        }
        break;
      case 27:
        t === null && a & 4 && Ss(u);
      case 26:
      case 5:
        du(l, u), t === null && a & 4 && Mc(u), a & 512 && ou(u, u.return);
        break;
      case 12:
        du(l, u);
        break;
      case 31:
        du(l, u), a & 4 && Cs(l, u);
        break;
      case 13:
        du(l, u), a & 4 && Rs(l, u), a & 64 && (l = u.memoizedState, l !== null && (l = l.dehydrated, l !== null && (u = k1.bind(
          null,
          u
        ), Yd(l, u))));
        break;
      case 22:
        if (a = u.memoizedState !== null || Kl, !a) {
          var n = t !== null && t.memoizedState !== null || il;
          t = Kl, e = il, Kl = a, (il = n) && !e ? (a = 2, (u.subtreeFlags & 8772) !== 0 && (a |= 1), tu(
            l,
            u,
            a
          )) : du(l, u), Kl = t, il = e;
        }
        break;
      case 30:
        du(l, u), a & 512 && ou(u, u.return);
        break;
      case 7:
        a & 512 && ou(u, u.return);
      default:
        du(l, u);
    }
  }
  function Xc(l, t) {
    for (l = l.child; l !== null; )
      Ms(l, t), l = l.sibling;
  }
  function Ms(l, t) {
    switch (l.tag) {
      case 5:
      case 26:
        try {
          var u = l.stateNode;
          if (t) {
            var a = u.style;
            typeof a.setProperty == "function" ? a.setProperty("display", "none", "important") : a.display = "none";
          } else {
            var e = l.stateNode, n = l.memoizedProps.style, f = n != null && n.hasOwnProperty("display") ? n.display : null;
            e.style.display = f == null || typeof f == "boolean" ? "" : ("" + f).trim();
          }
        } catch (c) {
          sl(l, l.return, c);
        }
        Qc(l, t);
        break;
      case 6:
        try {
          l.stateNode.nodeValue = t ? "" : l.memoizedProps, al = !0;
        } catch (c) {
          sl(l, l.return, c);
        }
        break;
      case 18:
        try {
          var i = l.stateNode;
          t ? Ty(i, !0) : Ty(l.stateNode, !1);
        } catch (c) {
          sl(l, l.return, c);
        }
        break;
      case 22:
      case 23:
        l.memoizedState === null && Xc(l, t);
        break;
      default:
        Xc(l, t);
    }
  }
  function Qc(l, t) {
    if (l.subtreeFlags & 67108864)
      for (l = l.child; l !== null; ) {
        l: {
          var u = l, a = t;
          switch (u.tag) {
            case 4:
              Ms(u, a);
              break l;
            case 22:
              u.memoizedState === null && Qc(u, a);
              break l;
            default:
              Qc(u, a);
          }
        }
        l = l.sibling;
      }
  }
  function Ds(l) {
    var t = l.alternate;
    t !== null && (l.alternate = null, Ds(t)), l.child = null, l.deletions = null, l.sibling = null, l.tag === 5 && (t = l.stateNode, t !== null && qn(t)), l.stateNode = null, l.return = null, l.dependencies = null, l.memoizedProps = null, l.memoizedState = null, l.pendingProps = null, l.stateNode = null, l.updateQueue = null;
  }
  var El = null, bt = !1;
  function Pt(l, t, u) {
    for (u = u.child; u !== null; )
      Us(l, t, u), u = u.sibling;
  }
  function Us(l, t, u) {
    if (ft && typeof ft.onCommitFiberUnmount == "function")
      try {
        ft.onCommitFiberUnmount(ga, u);
      } catch {
      }
    switch (u.tag) {
      case 26:
        il || Pl(u, t), Pt(
          l,
          t,
          u
        ), u.memoizedState ? u.memoizedState.count-- : u.stateNode && !il && (u = u.stateNode, u.parentNode.removeChild(u));
        break;
      case 27:
        il || Pl(u, t), on(u);
        var a = El, e = bt;
        ia(u.type) && (El = u.stateNode, bt = !1), Pt(
          l,
          t,
          u
        ), Yy(
          u.stateNode,
          u.type,
          u.memoizedProps
        ), El = a, bt = e;
        break;
      case 5:
        il || Pl(u, t), on(u);
      case 6:
        if (u.tag === 6 && on(u), a = El, e = bt, El = null, Pt(
          l,
          t,
          u
        ), El = a, bt = e, El !== null)
          if (bt)
            try {
              (El.nodeType === 9 ? El.body : El.nodeName === "HTML" ? El.ownerDocument.body : El).removeChild(u.stateNode), al = !0;
            } catch (n) {
              sl(
                u,
                t,
                n
              );
            }
          else
            try {
              El.removeChild(u.stateNode), al = !0;
            } catch (n) {
              sl(
                u,
                t,
                n
              );
            }
        break;
      case 18:
        El !== null && (bt ? (l = El, Sy(
          l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l,
          u.stateNode
        ), Re(l)) : Sy(El, u.stateNode));
        break;
      case 4:
        a = El, e = bt, El = u.stateNode.containerInfo, bt = !0, Pt(
          l,
          t,
          u
        ), El = a, bt = e;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        la(2, u, t), il || la(4, u, t), Pt(
          l,
          t,
          u
        );
        break;
      case 1:
        il || (Pl(u, t), a = u.stateNode, typeof a.componentWillUnmount == "function" && hs(
          u,
          t,
          a
        )), Pt(
          l,
          t,
          u
        );
        break;
      case 21:
        Pt(
          l,
          t,
          u
        );
        break;
      case 22:
        il = (a = il) || u.memoizedState !== null, Pt(
          l,
          t,
          u
        ), il = a;
        break;
      case 30:
        Pl(u, t), Pt(
          l,
          t,
          u
        );
        break;
      case 7:
        il || Pl(u, t), Pt(
          l,
          t,
          u
        );
        break;
      default:
        Pt(
          l,
          t,
          u
        );
    }
  }
  function Cs(l, t) {
    if (t.memoizedState === null && (l = t.alternate, l !== null && (l = l.memoizedState, l !== null))) {
      l = l.dehydrated;
      try {
        Re(l);
      } catch (u) {
        sl(t, t.return, u);
      }
    }
  }
  function Rs(l, t) {
    if (t.memoizedState === null && (l = t.alternate, l !== null && (l = l.memoizedState, l !== null && (l = l.dehydrated, l !== null))))
      try {
        Re(l);
      } catch (u) {
        sl(t, t.return, u);
      }
  }
  function j1(l) {
    switch (l.tag) {
      case 31:
      case 13:
      case 19:
        var t = l.stateNode;
        return t === null && (t = l.stateNode = new As()), t;
      case 22:
        return l = l.stateNode, t = l._retryCache, t === null && (t = l._retryCache = new As()), t;
      default:
        throw Error(r(435, l.tag));
    }
  }
  function Rf(l, t) {
    var u = j1(l);
    t.forEach(function(a) {
      if (!u.has(a)) {
        u.add(a);
        var e = P1.bind(null, l, a);
        a.then(e, e);
      }
    });
  }
  function dt(l, t, u) {
    var a = t.deletions;
    if (a !== null)
      for (var e = 0; e < a.length; e++) {
        var n = a[e], f = l, i = t, c = i;
        l: for (; c !== null; ) {
          switch (c.tag) {
            case 27:
              if (ia(c.type)) {
                El = c.stateNode, bt = !1;
                break l;
              }
              break;
            case 5:
              El = c.stateNode, bt = !1;
              break l;
            case 3:
            case 4:
              El = c.stateNode.containerInfo, bt = !0;
              break l;
          }
          c = c.return;
        }
        if (El === null) throw Error(r(160));
        Us(f, i, n), El = null, bt = !1, f = n.alternate, f !== null && (f.return = null), n.return = null;
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; )
        Hs(t, l, u), t = t.sibling;
  }
  var lu = null;
  function Hs(l, t, u) {
    var a = l.alternate, e = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (e & 4 && (a = l.updateQueue, a = a !== null ? a.events : null, a !== null))
          for (var n = 0; n < a.length; n++) {
            var f = a[n];
            f.ref.impl = f.nextImpl;
          }
        dt(t, l, u), ht(l), e & 4 && (la(3, l, l.return), cn(3, l), la(5, l, l.return));
        break;
      case 1:
        dt(t, l, u), ht(l), e & 512 && (il || a === null || Pl(a, a.return)), e & 64 && Kl && (l = l.updateQueue, l !== null && (t = l.callbacks, t !== null && (u = l.shared.hiddenCallbacks, l.shared.hiddenCallbacks = u === null ? t : u.concat(t))));
        break;
      case 26:
        if (n = lu, dt(t, l, u), ht(l), e & 512 && (il || a === null || Pl(a, a.return)), e & 4)
          if (e = a !== null ? a.memoizedState : null, u = l.memoizedState, a === null)
            if (u === null)
              if (l.stateNode === null)
                if (Kl)
                  l.stateNode = hy(
                    l.type,
                    l.memoizedProps,
                    t.containerInfo,
                    l
                  );
                else {
                  l: {
                    t = l.type, u = l.memoizedProps, e = n.ownerDocument || n;
                    t: switch (t) {
                      case "title":
                        a = e.getElementsByTagName("title")[0], (!a || a[Be] || a[Fl] || a.namespaceURI === "http://www.w3.org/2000/svg" || a.hasAttribute("itemprop")) && (a = e.createElement(t), e.head.insertBefore(
                          a,
                          e.querySelector("head > title")
                        )), lt(a, t, u), a[Fl] = l, Vl(a), t = a;
                        break l;
                      case "link":
                        if (n = Qy(
                          "link",
                          "href",
                          e
                        ).get(t + (u.href || ""))) {
                          for (f = 0; f < n.length; f++)
                            if (a = n[f], a.getAttribute("href") === (u.href == null || u.href === "" ? null : u.href) && a.getAttribute("rel") === (u.rel == null ? null : u.rel) && a.getAttribute("title") === (u.title == null ? null : u.title) && a.getAttribute("crossorigin") === (u.crossOrigin == null ? null : u.crossOrigin)) {
                              n.splice(f, 1);
                              break t;
                            }
                        }
                        a = e.createElement(t), lt(a, t, u), e.head.appendChild(a);
                        break;
                      case "meta":
                        if (n = Qy(
                          "meta",
                          "content",
                          e
                        ).get(t + (u.content || ""))) {
                          for (f = 0; f < n.length; f++)
                            if (a = n[f], a.getAttribute("content") === (u.content == null ? null : "" + u.content) && a.getAttribute("name") === (u.name == null ? null : u.name) && a.getAttribute("property") === (u.property == null ? null : u.property) && a.getAttribute("http-equiv") === (u.httpEquiv == null ? null : u.httpEquiv) && a.getAttribute("charset") === (u.charSet == null ? null : u.charSet)) {
                              n.splice(f, 1);
                              break t;
                            }
                        }
                        a = e.createElement(t), lt(a, t, u), e.head.appendChild(a);
                        break;
                      default:
                        throw Error(r(468, t));
                    }
                    a[Fl] = l, Vl(a), t = a;
                  }
                  l.stateNode = t;
                }
              else
                Kl || _0(n, l.type, l.stateNode);
            else
              l.stateNode = Xy(
                n,
                u,
                l.memoizedProps
              );
          else
            e !== u ? (e === null ? (t = a.stateNode, t === null || il || t.parentNode.removeChild(t)) : e.count--, u === null ? Kl || _0(n, l.type, l.stateNode) : Xy(n, u, l.memoizedProps)) : u === null && l.stateNode !== null && Dc(
              l,
              l.memoizedProps,
              a.memoizedProps
            );
        break;
      case 27:
        dt(t, l, u), ht(l), e & 512 && (il || a === null || Pl(a, a.return)), a !== null && e & 4 && Dc(
          l,
          l.memoizedProps,
          a.memoizedProps
        );
        break;
      case 5:
        if (n = yu, yu = !1, dt(t, l, u), yu = n, ht(l), e & 512 && (il || a === null || Pl(a, a.return)), l.flags & 32) {
          t = l.stateNode;
          try {
            $a(t, ""), al = !0;
          } catch (g) {
            sl(l, l.return, g);
          }
        }
        e & 4 && l.stateNode != null && (t = l.memoizedProps, Dc(
          l,
          t,
          a !== null ? a.memoizedProps : t
        )), e & 1024 && (xc = !0);
        break;
      case 6:
        if (dt(t, l, u), ht(l), e & 4) {
          if (l.stateNode === null)
            throw Error(r(162));
          t = l.memoizedProps, u = l.stateNode;
          try {
            u.nodeValue = t, al = !0;
          } catch (g) {
            sl(l, l.return, g);
          }
        }
        break;
      case 3:
        if (al = !1, Jf = null, n = lu, lu = Tn(t.containerInfo), dt(t, l, u), lu = n, ht(l), e & 4 && a !== null && a.memoizedState.isDehydrated)
          try {
            Re(t.containerInfo);
          } catch (g) {
            sl(l, l.return, g);
          }
        xc && (xc = !1, Ys(l)), al = !1;
        break;
      case 4:
        e = yu, yu = Kl, a = k0(), n = lu, lu = Tn(
          l.stateNode.containerInfo
        ), dt(t, l, u), ht(l), lu = n, al && vn && (Uf = !0), al = a, yu = e;
        break;
      case 12:
        dt(t, l, u), ht(l);
        break;
      case 31:
        dt(t, l, u), ht(l), e & 4 && (t = l.updateQueue, t !== null && (l.updateQueue = null, Rf(l, t)));
        break;
      case 13:
        dt(t, l, u), ht(l), l.child.flags & 8192 && l.memoizedState !== null != (a !== null && a.memoizedState !== null) && (qf = Ol()), e & 4 && (t = l.updateQueue, t !== null && (l.updateQueue = null, Rf(l, t)));
        break;
      case 22:
        n = l.memoizedState !== null, f = a !== null && a.memoizedState !== null;
        var i = Kl, c = il, m = yu;
        Kl = i || n, yu = m || n, il = c || f, dt(t, l, u), il = c, yu = m, Kl = i, ht(l), e & 8192 && (t = l.stateNode, t._visibility = n ? t._visibility & -2 : t._visibility | 1, !n || a === null || f || Kl || il || (t = f || il, u = Kl, a = il, Kl = n || Kl, il = t, ta(l, 2), Kl = u, il = a), !n && yu || Xc(l, n)), e & 4 && (t = l.updateQueue, t !== null && (u = t.retryQueue, u !== null && (t.retryQueue = null, Rf(l, u))));
        break;
      case 19:
        dt(t, l, u), ht(l), e & 4 && (t = l.updateQueue, t !== null && (l.updateQueue = null, Rf(l, t)));
        break;
      case 30:
        e & 512 && (il || a === null || Pl(a, a.return)), e = k0(), n = vn, f = (u & 335544064) === u, i = l.memoizedProps, vn = f && Au(
          i.default,
          i.update
        ) !== "none", dt(t, l, u), ht(l), f && a !== null && al && (l.flags |= 4), vn = n, al = e;
        break;
      case 21:
        break;
      case 7:
        e & 512 && (il || a === null || Pl(a, a.return)), a && a.stateNode !== null && (a.stateNode._fragmentFiber = l);
      default:
        dt(t, l, u), ht(l);
    }
  }
  function ht(l) {
    var t = l.flags;
    if (t & 2) {
      try {
        for (var u, a = l.return; a !== null; ) {
          if (rs(a)) {
            u = a;
            break;
          }
          a = a.return;
        }
        a = null;
        for (var e = l.return; e !== null; ) {
          if (Nc(e)) {
            var n = e.stateNode;
            a === null ? a = [n] : a.push(n);
          }
          if (Ac(e)) break;
          e = e.return;
        }
        var f = a;
        if (u == null) throw Error(r(160));
        switch (u.tag) {
          case 27:
            var i = u.stateNode, c = Uc(l);
            Af(
              l,
              c,
              i,
              f
            );
            break;
          case 5:
            var m = u.stateNode;
            u.flags & 32 && ($a(m, ""), u.flags &= -33);
            var g = Uc(l);
            Af(
              l,
              g,
              m,
              f
            );
            break;
          case 3:
          case 4:
            var E = u.stateNode.containerInfo, s = Uc(l);
            Cc(
              l,
              s,
              E,
              f
            );
            break;
          default:
            throw Error(r(161));
        }
      } catch (h) {
        sl(l, l.return, h);
      }
      l.flags &= -3;
    }
    t & 4096 && (l.flags &= -4097);
  }
  function Ys(l) {
    if (l.subtreeFlags & 1024)
      for (l = l.child; l !== null; ) {
        var t = l;
        Ys(t), t.tag === 5 && t.flags & 1024 && (t = t.stateNode, Ce = !0, t.reset(), Ce = !1), l = l.sibling;
      }
  }
  function me(l, t) {
    if (t.subtreeFlags & 9270)
      for (t = t.child; t !== null; )
        qs(t, l), t = t.sibling;
    else Os(t);
  }
  function qs(l, t) {
    var u = l.alternate;
    if (u === null) Rc(l, !1);
    else
      switch (l.tag) {
        case 3:
          if (Gc = mu = !1, Es(), me(t, l), !mu && !Uf) {
            if (l = vu, l !== null)
              for (var a = 0; a < l.length; a += 3) {
                u = l[a];
                var e = l[a + 1];
                zy(u, l[a + 2]), u = u.ownerDocument.documentElement, u !== null && u.animate(
                  { opacity: [0, 0], pointerEvents: ["none", "none"] },
                  {
                    duration: 0,
                    fill: "forwards",
                    pseudoElement: "::view-transition-group(" + e + ")"
                  }
                );
              }
            l = t.containerInfo, l = l.nodeType === 9 ? l.documentElement : l.ownerDocument.documentElement, l !== null && l.style.viewTransitionName === "" && (l.style.viewTransitionName = "none", l.animate(
              { opacity: [0, 0], pointerEvents: ["none", "none"] },
              {
                duration: 0,
                fill: "forwards",
                pseudoElement: "::view-transition-group(root)"
              }
            ), l.animate(
              { width: [0, 0], height: [0, 0] },
              {
                duration: 0,
                fill: "forwards",
                pseudoElement: "::view-transition"
              }
            )), Gc = !0;
          }
          vu = null;
          break;
        case 5:
          me(t, l);
          break;
        case 4:
          a = mu, mu = !1, me(t, l), mu && (Uf = !0), mu = a;
          break;
        case 22:
          l.memoizedState === null && (u.memoizedState !== null ? Rc(l, !1) : me(t, l));
          break;
        case 30:
          a = mu, e = Es(), mu = !1, me(t, l), mu && (l.flags |= 4);
          var n = l.memoizedProps, f = l.stateNode;
          t = Ou(n, f), f = Ou(u.memoizedProps, f);
          var i = Au(n.default, n.update);
          i === "none" ? t = !1 : (n = u.memoizedState, u.memoizedState = null, u = l.child, zt = 0, t = Bc(
            l,
            u,
            t,
            f,
            i,
            n,
            !0
          ), zt !== (n === null ? 0 : n.length) && (l.flags |= 32)), (l.flags & 4) !== 0 && t ? (Ee(
            l,
            l.memoizedProps.onUpdate
          ), vu = e) : e !== null && (e.push.apply(e, vu), vu = e), mu = (l.flags & 32) !== 0 ? !0 : a;
          break;
        default:
          me(t, l);
      }
  }
  function du(l, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        Ns(l, t.alternate, t), t = t.sibling;
  }
  function ta(l, t) {
    for (l = l.child; l !== null; ) {
      var u = l, a = t;
      switch (u.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          la(4, u, u.return), ta(
            u,
            a
          );
          break;
        case 1:
          Pl(u, u.return);
          var e = u.stateNode;
          typeof e.componentWillUnmount == "function" && hs(
            u,
            u.return,
            e
          ), ta(
            u,
            a
          );
          break;
        case 27:
          (a & 2) !== 0 && Yy(
            u.stateNode,
            u.type,
            u.memoizedProps
          );
        case 5:
          Pl(u, u.return), u.tag !== 5 && u.tag !== 27 || on(u), ta(
            u,
            a
          );
          break;
        case 6:
          on(u);
          break;
        case 26:
          Pl(u, u.return), e = u.stateNode, u.memoizedState !== null || e === null || il || e.parentNode.removeChild(e), ta(
            u,
            a
          );
          break;
        case 22:
          u.memoizedState === null && ta(
            u,
            a
          );
          break;
        case 30:
          Pl(u, u.return), ta(
            u,
            a
          );
          break;
        case 7:
          Pl(u, u.return);
        default:
          ta(
            u,
            a
          );
      }
      l = l.sibling;
    }
  }
  function tu(l, t, u) {
    for (u = (t.subtreeFlags & 8772) !== 0 ? u : u & -2, t = t.child; t !== null; ) {
      var a = t.alternate, e = l, n = t, f = n.flags, i = (u & 1) !== 0;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          tu(
            e,
            n,
            u
          ), cn(4, n);
          break;
        case 1:
          if (tu(
            e,
            n,
            u
          ), a = n, e = a.stateNode, typeof e.componentDidMount == "function")
            try {
              e.componentDidMount();
            } catch (g) {
              sl(a, a.return, g);
            }
          if (a = n, e = a.updateQueue, e !== null) {
            var c = a.stateNode;
            try {
              var m = e.shared.hiddenCallbacks;
              if (m !== null)
                for (e.shared.hiddenCallbacks = null, e = 0; e < m.length; e++)
                  uv(m[e], c);
            } catch (g) {
              sl(a, a.return, g);
            }
          }
          i && f & 64 && ds(n), ou(n, n.return);
          break;
        case 27:
          (u & 2) !== 0 && Ss(n);
        case 5:
          n.tag !== 5 && n.tag !== 27 || gs(n), tu(
            e,
            n,
            u
          ), i && a === null && f & 4 && Mc(n), ou(n, n.return);
          break;
        case 6:
          gs(n);
          break;
        case 26:
          c = n.stateNode, n.memoizedState !== null || c === null || Kl || _0(
            Tn(c.ownerDocument),
            n.type,
            c
          ), tu(
            e,
            n,
            u
          ), i && a === null && f & 4 && Mc(n), ou(n, n.return);
          break;
        case 12:
          tu(
            e,
            n,
            u
          );
          break;
        case 31:
          tu(
            e,
            n,
            u
          ), i && f & 4 && Cs(e, n);
          break;
        case 13:
          tu(
            e,
            n,
            u
          ), i && f & 4 && Rs(e, n);
          break;
        case 22:
          n.memoizedState === null && tu(
            e,
            n,
            u
          ), ou(n, n.return);
          break;
        case 30:
          tu(
            e,
            n,
            u
          ), ou(n, n.return);
          break;
        case 7:
          ou(n, n.return);
        default:
          tu(
            e,
            n,
            u
          );
      }
      t = t.sibling;
    }
  }
  function pc(l, t) {
    var u = null;
    l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), l = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), l !== u && (l != null && l.refCount++, u != null && $e(u));
  }
  function jc(l, t) {
    l = null, t.alternate !== null && (l = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== l && (t.refCount++, l != null && $e(l));
  }
  function $t(l, t, u, a) {
    var e = (u & 335544064) === u;
    if (t.subtreeFlags & (e ? 10262 : 10256))
      for (t = t.child; t !== null; )
        Bs(
          l,
          t,
          u,
          a
        ), t = t.sibling;
    else e && _s(t);
  }
  function Bs(l, t, u, a) {
    var e = (u & 335544064) === u;
    e && t.alternate === null && t.return !== null && t.return.alternate !== null && Df(t);
    var n = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        $t(
          l,
          t,
          u,
          a
        ), n & 2048 && cn(9, t);
        break;
      case 1:
        $t(
          l,
          t,
          u,
          a
        );
        break;
      case 3:
        $t(
          l,
          t,
          u,
          a
        ), e && Gc && (l = l.containerInfo, l = l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l, l.style.viewTransitionName === "root" && (l.style.viewTransitionName = ""), l = l.ownerDocument.documentElement, l !== null && l.style.viewTransitionName === "none" && (l.style.viewTransitionName = "")), n & 2048 && (n = null, t.alternate !== null && (n = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== n && (t.refCount++, n != null && $e(n)));
        break;
      case 12:
        if (n & 2048) {
          $t(
            l,
            t,
            u,
            a
          ), n = t.stateNode;
          try {
            var f = t.memoizedProps, i = f.id, c = f.onPostCommit;
            typeof c == "function" && c(
              i,
              t.alternate === null ? "mount" : "update",
              n.passiveEffectDuration,
              -0
            );
          } catch (m) {
            sl(t, t.return, m);
          }
        } else
          $t(
            l,
            t,
            u,
            a
          );
        break;
      case 31:
        $t(
          l,
          t,
          u,
          a
        );
        break;
      case 13:
        $t(
          l,
          t,
          u,
          a
        );
        break;
      case 23:
        break;
      case 22:
        f = t.stateNode, i = t.alternate, t.memoizedState !== null ? (e && i !== null && i.memoizedState === null && Df(i), f._visibility & 2 ? $t(
          l,
          t,
          u,
          a
        ) : sn(
          l,
          t
        )) : (e && i !== null && i.memoizedState !== null && Df(t), f._visibility & 2 ? $t(
          l,
          t,
          u,
          a
        ) : (f._visibility |= 2, de(
          l,
          t,
          u,
          a,
          (t.subtreeFlags & 10256) !== 0 || !1
        ))), n & 2048 && pc(i, t);
        break;
      case 24:
        $t(
          l,
          t,
          u,
          a
        ), n & 2048 && jc(t.alternate, t);
        break;
      case 30:
        e && (n = t.alternate, n !== null && (su(n.child, !0), su(t.child, !0))), $t(
          l,
          t,
          u,
          a
        );
        break;
      default:
        $t(
          l,
          t,
          u,
          a
        );
    }
  }
  function de(l, t, u, a, e) {
    for (e = e && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
      var n = l, f = t, i = u, c = a, m = f.flags;
      switch (f.tag) {
        case 0:
        case 11:
        case 15:
          de(
            n,
            f,
            i,
            c,
            e
          ), cn(8, f);
          break;
        case 23:
          break;
        case 22:
          var g = f.stateNode;
          f.memoizedState !== null ? g._visibility & 2 ? de(
            n,
            f,
            i,
            c,
            e
          ) : sn(
            n,
            f
          ) : (g._visibility |= 2, de(
            n,
            f,
            i,
            c,
            e
          )), e && m & 2048 && pc(
            f.alternate,
            f
          );
          break;
        case 24:
          de(
            n,
            f,
            i,
            c,
            e
          ), e && m & 2048 && jc(f.alternate, f);
          break;
        default:
          de(
            n,
            f,
            i,
            c,
            e
          );
      }
      t = t.sibling;
    }
  }
  function sn(l, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var u = l, a = t, e = a.flags;
        switch (a.tag) {
          case 22:
            sn(u, a), e & 2048 && pc(
              a.alternate,
              a
            );
            break;
          case 24:
            sn(u, a), e & 2048 && jc(a.alternate, a);
            break;
          default:
            sn(u, a);
        }
        t = t.sibling;
      }
  }
  var Ba = 8192;
  function xa(l, t, u) {
    if (l.subtreeFlags & Ba)
      for (l = l.child; l !== null; )
        xs(
          l,
          t,
          u
        ), l = l.sibling;
  }
  function xs(l, t, u) {
    switch (l.tag) {
      case 26:
        xa(
          l,
          t,
          u
        ), l.flags & Ba && (l.memoizedState !== null ? wd(
          u,
          lu,
          l.memoizedState,
          l.memoizedProps
        ) : (l = l.stateNode, (t & 335544128) === t && Vy(u, l)));
        break;
      case 5:
        xa(
          l,
          t,
          u
        ), l.flags & Ba && (l = l.stateNode, (t & 335544128) === t && Vy(u, l));
        break;
      case 3:
      case 4:
        var a = lu;
        lu = Tn(l.stateNode.containerInfo), xa(
          l,
          t,
          u
        ), lu = a;
        break;
      case 22:
        l.memoizedState === null && (a = l.alternate, a !== null && a.memoizedState !== null ? (a = Ba, Ba = 16777216, xa(
          l,
          t,
          u
        ), Ba = a) : xa(
          l,
          t,
          u
        ));
        break;
      case 30:
        if ((l.flags & Ba) !== 0 && (a = l.memoizedProps.name, a != null && a !== "auto")) {
          var e = l.stateNode;
          e.paired = null, Yt === null && (Yt = /* @__PURE__ */ new Map()), Yt.set(a, e);
        }
        xa(
          l,
          t,
          u
        );
        break;
      default:
        xa(
          l,
          t,
          u
        );
    }
  }
  function Gs(l) {
    var t = l.alternate;
    if (t !== null && (l = t.child, l !== null)) {
      t.child = null;
      do
        t = l.sibling, l.sibling = null, l = t;
      while (l !== null);
    }
  }
  function yn(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null)
        for (var u = 0; u < t.length; u++) {
          var a = t[u];
          Jl = a, Qs(
            a,
            l
          );
        }
      Gs(l);
    }
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; )
        Xs(l), l = l.sibling;
  }
  function Xs(l) {
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        yn(l), l.flags & 2048 && la(9, l, l.return);
        break;
      case 3:
        yn(l);
        break;
      case 12:
        yn(l);
        break;
      case 22:
        var t = l.stateNode;
        l.memoizedState !== null && t._visibility & 2 && (l.return === null || l.return.tag !== 13) ? (t._visibility &= -3, Hf(l)) : yn(l);
        break;
      default:
        yn(l);
    }
  }
  function Hf(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null)
        for (var u = 0; u < t.length; u++) {
          var a = t[u];
          Jl = a, Qs(
            a,
            l
          );
        }
      Gs(l);
    }
    for (l = l.child; l !== null; ) {
      switch (t = l, t.tag) {
        case 0:
        case 11:
        case 15:
          la(8, t, t.return), Hf(t);
          break;
        case 22:
          u = t.stateNode, u._visibility & 2 && (u._visibility &= -3, Hf(t));
          break;
        default:
          Hf(t);
      }
      l = l.sibling;
    }
  }
  function Qs(l, t) {
    for (; Jl !== null; ) {
      var u = Jl;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          la(8, u, t);
          break;
        case 23:
        case 22:
          if (u.memoizedState !== null && u.memoizedState.cachePool !== null) {
            var a = u.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          $e(u.memoizedState.cache);
      }
      if (a = u.child, a !== null) a.return = u, Jl = a;
      else
        l: for (u = l; Jl !== null; ) {
          a = Jl;
          var e = a.sibling, n = a.return;
          if (Ds(a), a === u) {
            Jl = null;
            break l;
          }
          if (e !== null) {
            e.return = n, Jl = e;
            break l;
          }
          Jl = n;
        }
    }
  }
  var Z1 = {
    getCacheForType: function(l) {
      var t = Wl(ql), u = t.data.get(l);
      return u === void 0 && (u = l(), t.data.set(l, u)), u;
    },
    cacheSignal: function() {
      return Wl(ql).controller.signal;
    }
  }, V1 = typeof WeakMap == "function" ? WeakMap : Map, fl = 0, gl = null, w = null, F = 0, vl = 0, qt = null, ua = !1, he = !1, Zc = !1, qu = 0, Nl = 0, aa = 0, Ga = 0, Yf = 0, Bt = 0, ge = 0, mn = null, _t = null, Vc = !1, qf = 0, ps = 0, Bf = 1 / 0, xf = null, ea = null, bl = 0, uu = null, Xa = null, hu = 0, Lc = 0, Kc = null, js = null, re = null, Se = null, Te = null, dn = 0, Gf = null;
  function xt() {
    return (fl & 2) !== 0 && F !== 0 ? F & -F : C.T !== null ? t0() : V0();
  }
  function Zs() {
    if (Bt === 0)
      if ((F & 536870912) === 0 || J) {
        var l = Cn;
        Cn <<= 1, (Cn & 3932160) === 0 && (Cn = 262144), Bt = l;
      } else Bt = 536870912;
    return l = Il.current, l !== null && (l.flags |= 32), Bt;
  }
  function Ee(l, t) {
    if (t != null) {
      var u = l.stateNode, a = u.ref;
      a === null && (a = u.ref = by(
        Ou(l.memoizedProps, u)
      )), Se === null && (Se = []), Se.push(t.bind(null, a));
    }
  }
  function Ot(l, t, u) {
    (l === gl && (vl === 2 || vl === 9) || l.cancelPendingCommit !== null) && (ze(l, 0), na(
      l,
      F,
      Bt,
      !1
    )), qe(l, u), ((fl & 2) === 0 || l !== gl) && (l === gl && ((fl & 2) === 0 && (Ga |= u), Nl === 4 && na(
      l,
      F,
      Bt,
      !1
    )), gu(l));
  }
  function Vs(l, t, u) {
    if ((fl & 6) !== 0) throw Error(r(327));
    var a = !u && (t & 127) === 0 && (t & l.expiredLanes) === 0 || Ye(l, t), e = a ? J1(l, t) : wc(l, t, !0), n = a;
    do {
      if (e === 0) {
        he && !a && na(l, t, 0, !1);
        break;
      } else {
        if (u = l.current.alternate, n && !L1(u)) {
          e = wc(l, t, !1), n = !1;
          continue;
        }
        if (e === 2) {
          if (n = t, l.errorRecoveryDisabledLanes & n)
            var f = 0;
          else
            f = l.pendingLanes & -536870913, f = f !== 0 ? f : f & 536870912 ? 536870912 : 0;
          if (f !== 0) {
            t = f;
            l: {
              var i = l;
              e = mn;
              var c = i.current.memoizedState.isDehydrated;
              if (c && (ze(i, f).flags |= 256), f = wc(
                i,
                f,
                !1
              ), f !== 2 && f !== 6) {
                if (Zc && !c) {
                  i.errorRecoveryDisabledLanes |= n, Ga |= n, e = 4;
                  break l;
                }
                n = _t, _t = e, n !== null && (_t === null ? _t = n : _t.push.apply(
                  _t,
                  n
                ));
              }
              e = f;
            }
            if (n = !1, e !== 2) continue;
          }
        }
        if (e === 1) {
          ze(l, 0), na(l, t, 0, !0);
          break;
        }
        l: {
          switch (a = l, n = e, n) {
            case 0:
            case 1:
              throw Error(r(345));
            case 4:
              if ((t & 4194048) !== t && (t & 62914560) !== t)
                break;
            case 6:
              na(
                a,
                t,
                Bt,
                !ua
              );
              break l;
            case 2:
              _t = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(r(329));
          }
          if ((t & 62914560) === t && (e = qf + 300 - Ol(), 10 < e)) {
            if (na(
              a,
              t,
              Bt,
              !ua
            ), Hn(a, 0, !0) !== 0) break l;
            hu = t, a.timeoutHandle = y0(
              Ls.bind(
                null,
                a,
                u,
                _t,
                xf,
                Vc,
                t,
                Bt,
                Ga,
                ge,
                ua,
                n,
                "Throttled",
                -0,
                0
              ),
              e
            );
            break l;
          }
          Ls(
            a,
            u,
            _t,
            xf,
            Vc,
            t,
            Bt,
            Ga,
            ge,
            ua,
            n,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    gu(l);
  }
  function Ls(l, t, u, a, e, n, f, i, c, m, g, E, s, h) {
    l.timeoutHandle = -1;
    var _ = t.subtreeFlags, D = (n & 335544064) === n;
    if (E = null, (D || _ & 8192 || (_ & 16785408) === 16785408) && (E = {
      stylesheets: null,
      count: 0,
      imgCount: 0,
      imgBytes: 0,
      suspenseyImages: [],
      waitingForImages: !0,
      waitingForViewTransition: !1,
      unsuspend: fu
    }, Yt = null, xs(
      t,
      n,
      E
    ), D && (_ = E, D = l.containerInfo, D = (D.nodeType === 9 ? D : D.ownerDocument).__reactViewTransition, D != null && (_.count++, _.waitingForViewTransition = !0, _ = bn.bind(_), D.finished.then(_, _))), _ = (n & 62914560) === n ? qf - Ol() : (n & 4194048) === n ? ps - Ol() : 0, _ = $d(
      E,
      _
    ), _ !== null)) {
      hu = n, l.cancelPendingCommit = _(
        ks.bind(
          null,
          l,
          t,
          n,
          u,
          a,
          e,
          f,
          i,
          c,
          m,
          g,
          E,
          null,
          s,
          h
        )
      ), na(l, n, f, !m);
      return;
    }
    ks(
      l,
      t,
      n,
      u,
      a,
      e,
      f,
      i,
      c,
      m,
      g,
      E
    );
  }
  function L1(l) {
    for (var t = l; ; ) {
      var u = t.tag;
      if ((u === 0 || u === 11 || u === 15) && t.flags & 16384 && (u = t.updateQueue, u !== null && (u = u.stores, u !== null)))
        for (var a = 0; a < u.length; a++) {
          var e = u[a], n = e.getSnapshot;
          e = e.value;
          try {
            if (!Rt(n(), e)) return !1;
          } catch {
            return !1;
          }
        }
      if (u = t.child, t.subtreeFlags & 16384 && u !== null)
        u.return = t, t = u;
      else {
        if (t === l) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === l) return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    }
    return !0;
  }
  function na(l, t, u, a) {
    t = X0(l, t), t &= ~Yf, t &= ~Ga, l.suspendedLanes |= t, l.pingedLanes &= ~t, a && (l.warmLanes |= t), a = l.expirationTimes;
    for (var e = t; 0 < e; ) {
      var n = 31 - Ut(e), f = 1 << n;
      a[n] = -1, e &= ~f;
    }
    u !== 0 && p0(l, u, t);
  }
  function Xf() {
    return (fl & 6) === 0 ? (hn(0), !1) : !0;
  }
  function Jc() {
    if (w !== null) {
      if (vl === 0)
        var l = w.return;
      else
        l = w, Du = Aa = null, lc(l), ie = null, Ie = 0, l = w;
      for (; l !== null; )
        ms(l.alternate, l), l = l.return;
      w = null;
    }
  }
  function ze(l, t) {
    var u = l.timeoutHandle;
    return u !== -1 && (l.timeoutHandle = -1, dd(u)), u = l.cancelPendingCommit, u !== null && (l.cancelPendingCommit = null, u()), hu = 0, Jc(), gl = l, w = u = Nu(l.current, null), F = t, vl = 0, qt = null, ua = !1, he = Ye(l, t), Zc = !1, ge = Bt = Yf = Ga = aa = Nl = 0, _t = mn = null, Vc = !1, qu = X0(l, t), Kn(), u;
  }
  function Ks(l, t) {
    Z = null, C.H = rf, t === fe || t === uf ? (t = ko(), vl = 3) : t === ji ? (t = ko(), vl = 4) : vl = t === hc ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, qt = t, w === null && (Nl = 1, Sf(
      l,
      Lt(t, l.current)
    ));
  }
  function Js() {
    var l = Il.current;
    return l === null ? !0 : (F & 4194048) === F ? it === null : (F & 62914560) === F || (F & 536870912) !== 0 ? l === it : !1;
  }
  function ws() {
    var l = C.H;
    return C.H = rf, l === null ? rf : l;
  }
  function $s() {
    var l = C.A;
    return C.A = Z1, l;
  }
  function Qf() {
    Nl = 4, ua || (F & 4194048) !== F && Il.current !== null || (he = !0), (aa & 134217727) === 0 && (Ga & 134217727) === 0 || gl === null || na(
      gl,
      F,
      Bt,
      !1
    );
  }
  function wc(l, t, u) {
    var a = fl;
    fl |= 2;
    var e = ws(), n = $s();
    (gl !== l || F !== t) && (xf = null, ze(l, t)), t = !1;
    var f = Nl;
    l: do
      try {
        if (vl !== 0 && w !== null) {
          var i = w, c = qt;
          switch (vl) {
            case 8:
              Jc(), f = 6;
              break l;
            case 3:
            case 2:
            case 9:
            case 6:
              Il.current === null && (t = !0);
              var m = vl;
              if (vl = 0, qt = null, be(l, i, c, m), u && he) {
                f = 0;
                break l;
              }
              break;
            default:
              m = vl, vl = 0, qt = null, be(l, i, c, m);
          }
        }
        K1(), f = Nl;
        break;
      } catch (g) {
        Ks(l, g);
      }
    while (!0);
    return t && l.shellSuspendCounter++, Du = Aa = null, fl = a, C.H = e, C.A = n, w === null && (gl = null, F = 0, Kn()), f;
  }
  function K1() {
    for (; w !== null; ) Fs(w);
  }
  function J1(l, t) {
    var u = fl;
    fl |= 2;
    var a = ws(), e = $s();
    gl !== l || F !== t ? (xf = null, Bf = Ol() + 500, ze(l, t)) : he = Ye(
      l,
      t
    );
    l: do
      try {
        if (vl !== 0 && w !== null) {
          t = w;
          var n = qt;
          t: switch (vl) {
            case 1:
              vl = 0, qt = null, be(l, t, n, 1);
              break;
            case 2:
            case 9:
              if (Wo(n)) {
                vl = 0, qt = null, Ws(t);
                break;
              }
              t = function() {
                vl !== 2 && vl !== 9 || gl !== l || (vl = 7), gu(l);
              }, n.then(t, t);
              break l;
            case 3:
              vl = 7;
              break l;
            case 4:
              vl = 5;
              break l;
            case 7:
              Wo(n) ? (vl = 0, qt = null, Ws(t)) : (vl = 0, qt = null, be(l, t, n, 7));
              break;
            case 5:
              var f = null;
              switch (w.tag) {
                case 26:
                  f = w.memoizedState;
                case 5:
                case 27:
                  var i = w;
                  if (f ? jy(f) : i.stateNode.complete) {
                    vl = 0, qt = null;
                    var c = i.sibling;
                    if (c !== null) w = c;
                    else {
                      var m = i.return;
                      m !== null ? (w = m, pf(m)) : w = null;
                    }
                    break t;
                  }
              }
              vl = 0, qt = null, be(l, t, n, 5);
              break;
            case 6:
              vl = 0, qt = null, be(l, t, n, 6);
              break;
            case 8:
              Jc(), Nl = 6;
              break l;
            default:
              throw Error(r(462));
          }
        }
        w1();
        break;
      } catch (g) {
        Ks(l, g);
      }
    while (!0);
    return Du = Aa = null, C.H = a, C.A = e, fl = u, w !== null ? 0 : (gl = null, F = 0, Kn(), Nl);
  }
  function w1() {
    for (; w !== null && !nt(); )
      Fs(w);
  }
  function Fs(l) {
    var t = ss(l.alternate, l, qu);
    l.memoizedProps = l.pendingProps, t === null ? pf(l) : w = t;
  }
  function Ws(l) {
    var t = l, u = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = es(
          u,
          t,
          t.pendingProps,
          t.type,
          void 0,
          F
        );
        break;
      case 11:
        t = es(
          u,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          F
        );
        break;
      case 5:
        lc(t);
        var a = t;
        a === Ll && (J ? (In(a), a.tag === 5 && a.stateNode != null && (Sl = a.stateNode)) : (In(a), J = !0));
      default:
        ms(u, t), t = w = Qo(t, qu), t = ss(u, t, qu);
    }
    l.memoizedProps = l.pendingProps, t === null ? pf(l) : w = t;
  }
  function be(l, t, u, a) {
    Du = Aa = null, lc(t), ie = null, Ie = 0;
    var e = t.return;
    try {
      if (q1(
        l,
        e,
        t,
        u,
        F
      )) {
        Nl = 1, Sf(
          l,
          Lt(u, l.current)
        ), w = null;
        return;
      }
    } catch (n) {
      if (e !== null) throw w = e, n;
      Nl = 1, Sf(
        l,
        Lt(u, l.current)
      ), w = null;
      return;
    }
    t.flags & 32768 ? (J || a === 1 ? l = !0 : he || (F & 536870912) !== 0 ? l = !1 : (ua = l = !0, (a === 2 || a === 9 || a === 3 || a === 6) && (a = Il.current, a !== null && a.tag === 13 && (a.flags |= 16384))), Is(t, l)) : pf(t);
  }
  function pf(l) {
    var t = l;
    do {
      if ((t.flags & 32768) !== 0) {
        Is(
          t,
          ua
        );
        return;
      }
      l = t.return;
      var u = X1(
        t.alternate,
        t,
        qu
      );
      if (u !== null) {
        w = u;
        return;
      }
      if (t = t.sibling, t !== null) {
        w = t;
        return;
      }
      w = t = l;
    } while (t !== null);
    Nl === 0 && (Nl = 5);
  }
  function Is(l, t) {
    do {
      var u = Q1(l.alternate, l);
      if (u !== null) {
        u.flags &= 32767, w = u;
        return;
      }
      if (u = l.return, u !== null && (u.flags |= 32768, u.subtreeFlags = 0, u.deletions = null), !t && (l = l.sibling, l !== null)) {
        w = l;
        return;
      }
      w = l = u;
    } while (l !== null);
    Nl = 6, w = null;
  }
  function ks(l, t, u, a, e, n, f, i, c, m, g, E) {
    l.cancelPendingCommit = null;
    do
      jf();
    while (bl !== 0);
    if ((fl & 6) !== 0) throw Error(r(327));
    if (t !== null) {
      if (t === l.current) throw Error(r(177));
      l === gl && (w = gl = null, F = 0), Xa = t, uu = l, hu = u, Kc = e, js = a, $1(
        l,
        t,
        u,
        f,
        i,
        c,
        E
      );
    }
  }
  function $1(l, t, u, a, e, n, f) {
    var i = t.lanes | t.childLanes;
    if (Lc = i, i |= Di, Em(
      l,
      u,
      i,
      a,
      e,
      n
    ), Se = null, (u & 335544064) === u ? (Te = b1(l), a = 10262) : (Te = null, a = 10256), (t.subtreeFlags & a) !== 0 || (t.flags & a) !== 0 ? (l.callbackNode = null, l.callbackPriority = 0, ld(Dt, function() {
      return Ic(), null;
    })) : (l.callbackNode = null, l.callbackPriority = 0), Nf = !1, a = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || a) {
      a = C.T, C.T = null, e = q.p, q.p = 2, n = fl, fl |= 4;
      try {
        p1(l, t, u);
      } finally {
        fl = n, q.p = e, C.T = a;
      }
    }
    bl = 1, Nf ? re = Ed(
      f,
      l.containerInfo,
      Te,
      $c,
      Fc,
      W1,
      Wc,
      Ic,
      F1
    ) : ($c(), Fc(), Wc());
  }
  function F1(l) {
    if (bl !== 0) {
      var t = uu.onRecoverableError;
      t(l, { componentStack: null });
    }
  }
  function W1() {
    bl === 3 && (bl = 0, qs(Xa, uu), bl = 4);
  }
  function $c() {
    if (bl === 1) {
      bl = 0;
      var l = uu, t = Xa, u = hu, a = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || a) {
        a = C.T, C.T = null;
        var e = q.p;
        q.p = 2;
        var n = fl;
        fl |= 4;
        try {
          vn = Uf = !1, Hs(t, l, u), u = o0;
          var f = Uo(l.containerInfo), i = u.focusedElem, c = u.selectionRange;
          if (f !== i && i && i.ownerDocument && Do(
            i.ownerDocument.documentElement,
            i
          )) {
            if (c !== null && _i(i)) {
              var m = c.start, g = c.end;
              if (g === void 0 && (g = m), "selectionStart" in i)
                i.selectionStart = m, i.selectionEnd = Math.min(
                  g,
                  i.value.length
                );
              else {
                var E = i.ownerDocument || document, s = E && E.defaultView || window;
                if (s.getSelection) {
                  var h = s.getSelection(), _ = i.textContent.length, D = Math.min(c.start, _), V = c.end === void 0 ? D : Math.min(c.end, _);
                  !h.extend && D > V && (f = V, V = D, D = f);
                  var y = Mo(
                    i,
                    D
                  ), o = Mo(
                    i,
                    V
                  );
                  if (y && o && (h.rangeCount !== 1 || h.anchorNode !== y.node || h.anchorOffset !== y.offset || h.focusNode !== o.node || h.focusOffset !== o.offset)) {
                    var d = E.createRange();
                    d.setStart(y.node, y.offset), h.removeAllRanges(), D > V ? (h.addRange(d), h.extend(o.node, o.offset)) : (d.setEnd(o.node, o.offset), h.addRange(d));
                  }
                }
              }
            }
            for (E = [], h = i; h = h.parentNode; )
              h.nodeType === 1 && E.push({
                element: h,
                left: h.scrollLeft,
                top: h.scrollTop
              });
            for (typeof i.focus == "function" && i.focus(), i = 0; i < E.length; i++) {
              var T = E[i];
              T.element.scrollLeft = T.left, T.element.scrollTop = T.top;
            }
          }
          Ce = !!c0, o0 = c0 = null;
        } finally {
          fl = n, q.p = e, C.T = a;
        }
      }
      l.current = t, bl = 2;
    }
  }
  function Fc() {
    if (bl === 2) {
      bl = 0;
      var l = uu, t = Xa, u = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || u) {
        u = C.T, C.T = null;
        var a = q.p;
        q.p = 2;
        var e = fl;
        fl |= 4;
        try {
          Ns(l, t.alternate, t);
        } finally {
          fl = e, q.p = a, C.T = u;
        }
      }
      bl = 3;
    }
  }
  function Wc() {
    if (bl === 4 || bl === 3) {
      bl = 0;
      var l = re;
      re = null, dl();
      var t = uu, u = Xa, a = hu, e = js, n = (a & 335544064) === a ? 10262 : 10256;
      if ((u.subtreeFlags & n) !== 0 || (u.flags & n) !== 0 ? bl = 5 : (bl = 0, Xa = uu = null, Ps(t, t.pendingLanes)), n = t.pendingLanes, n === 0 && (ea = null), ni(a), u = u.stateNode, ft && typeof ft.onCommitFiberRoot == "function")
        try {
          ft.onCommitFiberRoot(
            ga,
            u,
            void 0,
            (u.current.flags & 128) === 128
          );
        } catch {
        }
      if (e !== null) {
        u = C.T, n = q.p, q.p = 2, C.T = null;
        try {
          for (var f = t.onRecoverableError, i = 0; i < e.length; i++) {
            var c = e[i];
            f(c.value, {
              componentStack: c.stack
            });
          }
        } finally {
          C.T = u, q.p = n;
        }
      }
      if (e = Se, f = Te, Te = null, e !== null && (Se = null, f === null && (f = []), l !== null))
        for (c = 0; c < e.length; c++)
          u = (0, e[c])(
            f
          ), u !== void 0 && l.finished.finally(u);
      (hu & 3) !== 0 && jf(), gu(t), n = t.pendingLanes, (a & 261930) !== 0 && (n & 42) !== 0 ? t === Gf ? dn++ : (dn = 0, Gf = t) : (dn = 0, Gf = null), hn(0);
    }
  }
  function Ps(l, t) {
    (l.pooledCacheLanes &= t) === 0 && (t = l.pooledCache, t != null && (l.pooledCache = null, $e(t)));
  }
  function jf() {
    return re !== null && (re.skipTransition(), re = null), $c(), Fc(), Wc(), Ic();
  }
  function Ic() {
    if (bl !== 5) return !1;
    var l = uu, t = Lc;
    Lc = 0;
    var u = ni(hu), a = C.T, e = q.p;
    try {
      q.p = 32 > u ? 32 : u, C.T = null, u = Kc, Kc = null;
      var n = uu, f = hu;
      if (bl = 0, Xa = uu = null, hu = 0, (fl & 6) !== 0) throw Error(r(331));
      var i = fl;
      if (fl |= 4, Xs(n.current), Bs(
        n,
        n.current,
        f,
        u
      ), fl = i, hn(0, !1), ft && typeof ft.onPostCommitFiberRoot == "function")
        try {
          ft.onPostCommitFiberRoot(ga, n);
        } catch {
        }
      return !0;
    } finally {
      q.p = e, C.T = a, Ps(l, t);
    }
  }
  function ly(l, t, u) {
    t = Lt(u, t), t = dc(l.stateNode, t, 2), l = Wu(l, t, 2), l !== null && (qe(l, 2), gu(l));
  }
  function sl(l, t, u) {
    if (l.tag === 3)
      ly(l, l, u);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          ly(
            t,
            l,
            u
          );
          break;
        } else if (t.tag === 1) {
          var a = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (ea === null || !ea.has(a))) {
            l = Lt(u, l), u = Wv(2), a = Wu(t, u, 2), a !== null && (Iv(
              u,
              a,
              t,
              l
            ), qe(a, 2), gu(a));
            break;
          }
        }
        t = t.return;
      }
  }
  function kc(l, t, u) {
    var a = l.pingCache;
    if (a === null) {
      a = l.pingCache = new V1();
      var e = /* @__PURE__ */ new Set();
      a.set(t, e);
    } else
      e = a.get(t), e === void 0 && (e = /* @__PURE__ */ new Set(), a.set(t, e));
    e.has(u) || (Zc = !0, e.add(u), l = I1.bind(null, l, t, u), t.then(l, l));
  }
  function I1(l, t, u) {
    var a = l.pingCache;
    a !== null && a.delete(t), l.pingedLanes |= l.suspendedLanes & u, l.warmLanes &= ~u, gl === l && (F & u) === u && ((Nl === 4 || Nl === 3 && (F & 62914560) === F && 300 > Ol() - qf) && (fl & 2) === 0 ? ze(l, 0) : Yf |= u, ge === F && (ge = 0)), gu(l);
  }
  function ty(l, t) {
    t === 0 && (t = Q0()), l = ba(l, t), l !== null && (qe(l, t), gu(l));
  }
  function k1(l) {
    var t = l.memoizedState, u = 0;
    t !== null && (u = t.retryLane), ty(l, u);
  }
  function P1(l, t) {
    var u = 0;
    switch (l.tag) {
      case 31:
      case 13:
        var a = l.stateNode, e = l.memoizedState;
        e !== null && (u = e.retryLane);
        break;
      case 19:
        a = l.stateNode;
        break;
      case 22:
        a = l.stateNode._retryCache;
        break;
      default:
        throw Error(r(314));
    }
    a !== null && a.delete(t), ty(l, u);
  }
  function ld(l, t) {
    return $l(l, t);
  }
  var _e = null, Oe = null, Pc = !1, Zf = !1, l0 = !1, fa = 0;
  function gu(l) {
    l !== Oe && l.next === null && (Oe === null ? _e = Oe = l : Oe = Oe.next = l), Zf = !0, Pc || (Pc = !0, ud());
  }
  function hn(l, t) {
    if (!l0 && Zf) {
      l0 = !0;
      do
        for (var u = !1, a = _e; a !== null; ) {
          if (l !== 0) {
            var e = a.pendingLanes;
            if (e === 0) var n = 0;
            else {
              var f = a.suspendedLanes, i = a.pingedLanes;
              n = (1 << 31 - Ut(42 | l) + 1) - 1, n &= e & ~(f & ~i), n = n & 201326741 ? n & 201326741 | 1 : n ? n | 2 : 0;
            }
            n !== 0 && (u = !0, ny(a, n));
          } else
            n = F, n = Hn(
              a,
              a === gl ? n : 0,
              a.cancelPendingCommit !== null || a.timeoutHandle !== -1
            ), (n & 3) === 0 || Ye(a, n) || (u = !0, ny(a, n));
          a = a.next;
        }
      while (u);
      l0 = !1;
    }
  }
  function td() {
    uy();
  }
  function uy() {
    Zf = Pc = !1;
    var l = 0;
    fa !== 0 && md() && (l = fa);
    for (var t = Ol(), u = null, a = _e; a !== null; ) {
      var e = a.next, n = ay(a, t);
      n === 0 ? (a.next = null, u === null ? _e = e : u.next = e, e === null && (Oe = u)) : (u = a, (l !== 0 || (n & 3) !== 0) && (Zf = !0)), a = e;
    }
    bl !== 0 && bl !== 5 || hn(l), fa !== 0 && (fa = 0);
  }
  function ay(l, t) {
    for (var u = l.suspendedLanes, a = l.pingedLanes, e = l.expirationTimes, n = l.pendingLanes & -62914561; 0 < n; ) {
      var f = 31 - Ut(n), i = 1 << f, c = e[f];
      c === -1 ? ((i & u) === 0 || (i & a) !== 0) && (e[f] = Tm(i, t)) : c <= t && (l.expiredLanes |= i), n &= ~i;
    }
    if (t = gl, u = F, u = Hn(
      l,
      l === t ? u : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), a = l.callbackNode, u === 0 || l === t && (vl === 2 || vl === 9) || l.cancelPendingCommit !== null)
      return a !== null && a !== null && Tu(a), l.callbackNode = null, l.callbackPriority = 0;
    if ((u & 3) === 0 || Ye(l, u)) {
      if (t = u & -u, t === l.callbackPriority) return t;
      switch (a !== null && Tu(a), ni(u)) {
        case 2:
        case 8:
          u = nu;
          break;
        case 32:
          u = Dt;
          break;
        case 268435456:
          u = Qu;
          break;
        default:
          u = Dt;
      }
      return a = ey.bind(null, l), u = $l(u, a), l.callbackPriority = t, l.callbackNode = u, t;
    }
    return a !== null && a !== null && Tu(a), l.callbackPriority = 2, l.callbackNode = null, 2;
  }
  function ey(l, t) {
    if (bl !== 0 && bl !== 5)
      return l.callbackNode = null, l.callbackPriority = 0, null;
    var u = l.callbackNode;
    if (jf() && l.callbackNode !== u)
      return null;
    var a = F;
    return a = Hn(
      l,
      l === gl ? a : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), a === 0 ? null : (Vs(l, a, t), ay(l, Ol()), l.callbackNode != null && l.callbackNode === u ? ey.bind(null, l) : null);
  }
  function ny(l, t) {
    if (jf()) return null;
    Vs(l, t, !0);
  }
  function ud() {
    hd(function() {
      (fl & 6) !== 0 ? $l(
        Xu,
        td
      ) : uy();
    });
  }
  function t0() {
    if (fa === 0) {
      var l = Da;
      l === 0 && (l = Un, Un <<= 1, (Un & 261888) === 0 && (Un = 256)), fa = l;
    }
    return fa;
  }
  function fy(l) {
    return l == null || typeof l == "symbol" || typeof l == "boolean" ? null : typeof l == "function" ? l : Gn(l);
  }
  function ad(l, t, u, a, e) {
    if (t === "submit" && u && u.stateNode === e) {
      var n = fy(
        (e[Tt] || null).action
      ), f = a.submitter;
      f && (t = (t = f[Tt] || null) ? fy(t.formAction) : f.getAttribute("formAction"), t !== null && (n = t, f = null));
      var i = new jn(
        "action",
        "action",
        null,
        a,
        e
      );
      l.push({
        event: i,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (a.defaultPrevented) {
                if (fa !== 0) {
                  var c = new FormData(e, f);
                  oc(
                    u,
                    {
                      pending: !0,
                      data: c,
                      method: e.method,
                      action: n
                    },
                    null,
                    c
                  );
                }
              } else
                typeof n == "function" && (i.preventDefault(), c = new FormData(e, f), oc(
                  u,
                  {
                    pending: !0,
                    data: c,
                    method: e.method,
                    action: n
                  },
                  n,
                  c
                ));
            },
            currentTarget: e
          }
        ]
      });
    }
  }
  for (var u0 = 0; u0 < Mi.length; u0++) {
    var a0 = Mi[u0], ed = a0.toLowerCase(), nd = a0[0].toUpperCase() + a0.slice(1);
    kt(
      ed,
      "on" + nd
    );
  }
  kt(Ho, "onAnimationEnd"), kt(Yo, "onAnimationIteration"), kt(qo, "onAnimationStart"), kt("dblclick", "onDoubleClick"), kt("focusin", "onFocus"), kt("focusout", "onBlur"), kt(d1, "onTransitionRun"), kt(h1, "onTransitionStart"), kt(g1, "onTransitionCancel"), kt(Bo, "onTransitionEnd"), Ja("onMouseEnter", ["mouseout", "mouseover"]), Ja("onMouseLeave", ["mouseout", "mouseover"]), Ja("onPointerEnter", ["pointerout", "pointerover"]), Ja("onPointerLeave", ["pointerout", "pointerover"]), Ta(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), Ta(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), Ta("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), Ta(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), Ta(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), Ta(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var gn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), fd = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(gn)
  );
  function iy(l, t) {
    t = (t & 4) !== 0;
    for (var u = 0; u < l.length; u++) {
      var a = l[u], e = a.event;
      a = a.listeners;
      l: {
        var n = void 0;
        if (t)
          for (var f = a.length - 1; 0 <= f; f--) {
            var i = a[f], c = i.instance, m = i.currentTarget;
            if (i = i.listener, c !== n && e.isPropagationStopped())
              break l;
            n = i, e.currentTarget = m;
            try {
              n(e);
            } catch (g) {
              Ln(g);
            }
            e.currentTarget = null, n = c;
          }
        else
          for (f = 0; f < a.length; f++) {
            if (i = a[f], c = i.instance, m = i.currentTarget, i = i.listener, c !== n && e.isPropagationStopped())
              break l;
            n = i, e.currentTarget = m;
            try {
              n(e);
            } catch (g) {
              Ln(g);
            }
            e.currentTarget = null, n = c;
          }
      }
    }
  }
  function $(l, t) {
    var u = t[K0];
    u === void 0 && (u = t[K0] = /* @__PURE__ */ new Set());
    var a = l + "__bubble";
    u.has(a) || (cy(t, l, 2, !1), u.add(a));
  }
  function e0(l, t, u) {
    var a = 0;
    t && (a |= 4), cy(
      u,
      l,
      a,
      t
    );
  }
  var Vf = "_reactListening" + Math.random().toString(36).slice(2);
  function n0(l) {
    if (!l[Vf]) {
      l[Vf] = !0, $0.forEach(function(u) {
        u !== "selectionchange" && (fd.has(u) || e0(u, !1, l), e0(u, !0, l));
      });
      var t = l.nodeType === 9 ? l : l.ownerDocument;
      t === null || t[Vf] || (t[Vf] = !0, e0("selectionchange", !1, t));
    }
  }
  function cy(l, t, u, a) {
    switch (Iy(t)) {
      case 2:
        var e = kd;
        break;
      case 8:
        e = Pd;
        break;
      default:
        e = A0;
    }
    u = e.bind(
      null,
      t,
      u,
      l
    ), e = void 0, !mi || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (e = !0), a ? e !== void 0 ? l.addEventListener(t, u, {
      capture: !0,
      passive: e
    }) : l.addEventListener(t, u, !0) : e !== void 0 ? l.addEventListener(t, u, {
      passive: e
    }) : l.addEventListener(t, u, !1);
  }
  function f0(l, t, u, a, e) {
    var n = a;
    if ((t & 1) === 0 && (t & 2) === 0 && a !== null)
      l: for (; ; ) {
        if (a === null) return;
        var f = a.tag;
        if (f === 3 || f === 4) {
          var i = a.stateNode.containerInfo;
          if (i === e) break;
          if (f === 4)
            for (f = a.return; f !== null; ) {
              var c = f.tag;
              if ((c === 3 || c === 4) && f.stateNode.containerInfo === e)
                return;
              f = f.return;
            }
          for (; i !== null; ) {
            if (f = Sa(i), f === null) return;
            if (c = f.tag, c === 5 || c === 6 || c === 26 || c === 27) {
              a = n = f;
              continue l;
            }
            i = i.parentNode;
          }
        }
        a = a.return;
      }
    io(function() {
      var m = n, g = si(u), E = [];
      l: {
        var s = xo.get(l);
        if (s !== void 0) {
          var h = jn, _ = l;
          switch (l) {
            case "keypress":
              if (Qn(u) === 0) break l;
            case "keydown":
            case "keyup":
              h = Lm;
              break;
            case "focusin":
              _ = "focus", h = ri;
              break;
            case "focusout":
              _ = "blur", h = ri;
              break;
            case "beforeblur":
            case "afterblur":
              h = ri;
              break;
            case "click":
              if (u.button === 2) break l;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              h = vo;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              h = Hm;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              h = Fm;
              break;
            case Ho:
            case Yo:
            case qo:
              h = Bm;
              break;
            case Bo:
              h = Im;
              break;
            case "scroll":
            case "scrollend":
              h = Cm;
              break;
            case "wheel":
              h = Pm;
              break;
            case "copy":
            case "cut":
            case "paste":
              h = Gm;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              h = yo;
              break;
            case "submit":
              h = wm;
              break;
            case "toggle":
            case "beforetoggle":
              h = t1;
          }
          var D = (t & 4) !== 0, V = !D && (l === "scroll" || l === "scrollend"), y = D ? s !== null ? s + "Capture" : null : s;
          D = [];
          for (var o = m, d; o !== null; ) {
            var T = o;
            if (d = T.stateNode, T = T.tag, T !== 5 && T !== 26 && T !== 27 || d === null || y === null || (T = Ge(o, y), T != null && D.push(
              rn(o, T, d)
            )), V) break;
            o = o.return;
          }
          0 < D.length && (s = new h(
            s,
            _,
            null,
            u,
            g
          ), E.push({ event: s, listeners: D }));
        }
      }
      if ((t & 7) === 0) {
        l: {
          if (h = l === "mouseover" || l === "pointerover", s = l === "mouseout" || l === "pointerout", h && u !== vi && (_ = u.relatedTarget || u.fromElement) && (Sa(_) || _[Va]))
            break l;
          (s || h) && (_ = g.window === g ? g : (h = g.ownerDocument) ? h.defaultView || h.parentWindow : window, s ? (h = u.relatedTarget || u.toElement, s = m, h = h ? Sa(h) : null, h !== null && (V = Ml(h), D = h.tag, h !== V || D !== 5 && D !== 27 && D !== 6) && (h = null)) : (s = null, h = m), s !== h && (D = vo, T = "onMouseLeave", y = "onMouseEnter", o = "mouse", (l === "pointerout" || l === "pointerover") && (D = yo, T = "onPointerLeave", y = "onPointerEnter", o = "pointer"), V = s == null ? _ : xe(s), d = h == null ? _ : xe(h), _ = new D(
            T,
            o + "leave",
            s,
            u,
            g
          ), _.target = V, _.relatedTarget = d, T = null, Sa(g) === m && (D = new D(
            y,
            o + "enter",
            h,
            u,
            g
          ), D.target = d, D.relatedTarget = V, T = D), V = T, D = s && h ? at(
            s,
            h,
            id
          ) : null, s !== null && oy(
            E,
            _,
            s,
            D,
            !1
          ), h !== null && V !== null && oy(
            E,
            V,
            h,
            D,
            !0
          )));
        }
        l: {
          if (s = m ? xe(m) : window, h = s.nodeName && s.nodeName.toLowerCase(), h === "select" || h === "input" && s.type === "file")
            var M = zo;
          else if (To(s))
            if (bo)
              M = s1;
            else {
              M = o1;
              var W = c1;
            }
          else
            h = s.nodeName, !h || h.toLowerCase() !== "input" || s.type !== "checkbox" && s.type !== "radio" ? m && oi(m.elementType) && (M = zo) : M = v1;
          if (M && (M = M(l, m))) {
            Eo(
              E,
              M,
              u,
              g
            );
            break l;
          }
          W && W(l, s, m);
        }
        switch (W = m ? xe(m) : window, l) {
          case "focusin":
            (To(W) || W.contentEditable === "true") && (ka = W, Oi = m, Ke = null);
            break;
          case "focusout":
            Ke = Oi = ka = null;
            break;
          case "mousedown":
            Ai = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Ai = !1, Co(E, u, g);
            break;
          case "selectionchange":
            if (m1) break;
          case "keydown":
          case "keyup":
            Co(E, u, g);
        }
        var Y;
        if (Ti)
          l: {
            switch (l) {
              case "compositionstart":
                var Q = "onCompositionStart";
                break l;
              case "compositionend":
                Q = "onCompositionEnd";
                break l;
              case "compositionupdate":
                Q = "onCompositionUpdate";
                break l;
            }
            Q = void 0;
          }
        else
          Ia ? ro(l, u) && (Q = "onCompositionEnd") : l === "keydown" && u.keyCode === 229 && (Q = "onCompositionStart");
        Q && (mo && u.locale !== "ko" && (Ia || Q !== "onCompositionStart" ? Q === "onCompositionEnd" && Ia && (Y = co()) : (ju = g, di = "value" in ju ? ju.value : ju.textContent, Ia = !0)), W = Lf(m, Q), 0 < W.length && (Q = new so(
          Q,
          l,
          null,
          u,
          g
        ), E.push({ event: Q, listeners: W }), Y ? Q.data = Y : (Y = So(u), Y !== null && (Q.data = Y)))), (Y = a1 ? e1(l, u) : n1(l, u)) && (Q = Lf(m, "onBeforeInput"), 0 < Q.length && (W = new so(
          "onBeforeInput",
          "beforeinput",
          null,
          u,
          g
        ), E.push({
          event: W,
          listeners: Q
        }), W.data = Y)), ad(
          E,
          l,
          m,
          u,
          g
        );
      }
      iy(E, t);
    });
  }
  function rn(l, t, u) {
    return {
      instance: l,
      listener: t,
      currentTarget: u
    };
  }
  function Lf(l, t) {
    for (var u = t + "Capture", a = []; l !== null; ) {
      var e = l, n = e.stateNode;
      if (e = e.tag, e !== 5 && e !== 26 && e !== 27 || n === null || (e = Ge(l, u), e != null && a.unshift(
        rn(l, e, n)
      ), e = Ge(l, t), e != null && a.push(
        rn(l, e, n)
      )), l.tag === 3) return a;
      l = l.return;
    }
    return [];
  }
  function id(l) {
    if (l === null) return null;
    do
      l = l.return;
    while (l && l.tag !== 5 && l.tag !== 27);
    return l || null;
  }
  function oy(l, t, u, a, e) {
    for (var n = t._reactName, f = []; u !== null && u !== a; ) {
      var i = u, c = i.alternate, m = i.stateNode;
      if (i = i.tag, c !== null && c === a) break;
      i !== 5 && i !== 26 && i !== 27 || m === null || (c = m, e ? (m = Ge(u, n), m != null && f.unshift(
        rn(u, m, c)
      )) : e || (m = Ge(u, n), m != null && f.push(
        rn(u, m, c)
      ))), u = u.return;
    }
    f.length !== 0 && l.push({ event: t, listeners: f });
  }
  var cd = /\r\n?/g, od = /\u0000|\uFFFD/g;
  function vy(l) {
    return (typeof l == "string" ? l : "" + l).replace(cd, `
`).replace(od, "");
  }
  function sy(l, t) {
    return t = vy(t), vy(l) === t;
  }
  function yl(l, t, u, a, e, n) {
    switch (u) {
      case "children":
        if (typeof a == "string")
          t === "body" || t === "textarea" && a === "" || $a(l, a);
        else if (typeof a == "number" || typeof a == "bigint")
          t !== "body" && $a(l, "" + a);
        else return;
        break;
      case "className":
        xn(l, "class", a);
        break;
      case "tabIndex":
        xn(l, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        xn(l, u, a);
        break;
      case "style":
        no(l, a, n);
        return;
      case "data":
        if (t !== "object") {
          xn(l, "data", a);
          break;
        }
      case "src":
      case "href":
        if (a === "" && (t !== "a" || u !== "href")) {
          l.removeAttribute(u);
          break;
        }
        if (a == null || typeof a == "function" || typeof a == "symbol" || typeof a == "boolean") {
          l.removeAttribute(u);
          break;
        }
        a = Gn(a), l.setAttribute(u, a);
        break;
      case "action":
      case "formAction":
        if (typeof a == "function") {
          l.setAttribute(
            u,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof n == "function" && (u === "formAction" ? (t !== "input" && yl(l, t, "name", e.name, e, null), yl(
            l,
            t,
            "formEncType",
            e.formEncType,
            e,
            null
          ), yl(
            l,
            t,
            "formMethod",
            e.formMethod,
            e,
            null
          ), yl(
            l,
            t,
            "formTarget",
            e.formTarget,
            e,
            null
          )) : (yl(l, t, "encType", e.encType, e, null), yl(l, t, "method", e.method, e, null), yl(l, t, "target", e.target, e, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          l.removeAttribute(u);
          break;
        }
        a = Gn(a), l.setAttribute(u, a);
        break;
      case "onClick":
        a != null && (l.onclick = fu);
        return;
      case "onScroll":
        a != null && $("scroll", l);
        return;
      case "onScrollEnd":
        a != null && $("scrollend", l);
        return;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(r(61));
          if (u = a.__html, u != null) {
            if (e.children != null) throw Error(r(60));
            n?.__html !== u && (l.innerHTML = u);
          }
        }
        break;
      case "multiple":
        l.multiple = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "muted":
        l.muted = a && typeof a != "function" && typeof a != "symbol";
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
        if (a == null || typeof a == "function" || typeof a == "boolean" || typeof a == "symbol") {
          l.removeAttribute("xlink:href");
          break;
        }
        u = Gn(a), l.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          u
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
        a != null && typeof a != "function" && typeof a != "symbol" ? l.setAttribute(u, a) : l.removeAttribute(u);
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
        a && typeof a != "function" && typeof a != "symbol" ? l.setAttribute(u, "") : l.removeAttribute(u);
        break;
      case "capture":
      case "download":
        a === !0 ? l.setAttribute(u, "") : a !== !1 && a != null && typeof a != "function" && typeof a != "symbol" ? l.setAttribute(u, a) : l.removeAttribute(u);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        a != null && typeof a != "function" && typeof a != "symbol" && !isNaN(a) && 1 <= a ? l.setAttribute(u, a) : l.removeAttribute(u);
        break;
      case "rowSpan":
      case "start":
        a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a) ? l.removeAttribute(u) : l.setAttribute(u, a);
        break;
      case "popover":
        $("beforetoggle", l), $("toggle", l), Bn(l, "popover", a);
        break;
      case "xlinkActuate":
        bu(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          a
        );
        break;
      case "xlinkArcrole":
        bu(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          a
        );
        break;
      case "xlinkRole":
        bu(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          a
        );
        break;
      case "xlinkShow":
        bu(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          a
        );
        break;
      case "xlinkTitle":
        bu(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          a
        );
        break;
      case "xlinkType":
        bu(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          a
        );
        break;
      case "xmlBase":
        bu(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          a
        );
        break;
      case "xmlLang":
        bu(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          a
        );
        break;
      case "xmlSpace":
        bu(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          a
        );
        break;
      case "is":
        Bn(l, "is", a);
        break;
      case "innerText":
      case "textContent":
        return;
      default:
        if (!(2 < u.length) || u[0] !== "o" && u[0] !== "O" || u[1] !== "n" && u[1] !== "N")
          u = Dm.get(u) || u, Bn(l, u, a);
        else return;
    }
    al = !0;
  }
  function i0(l, t, u, a, e, n) {
    switch (u) {
      case "style":
        no(l, a, n);
        return;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(r(61));
          if (u = a.__html, u != null) {
            if (e.children != null) throw Error(r(60));
            n?.__html !== u && (l.innerHTML = u);
          }
        }
        break;
      case "children":
        if (typeof a == "string") $a(l, a);
        else if (typeof a == "number" || typeof a == "bigint")
          $a(l, "" + a);
        else return;
        break;
      case "onScroll":
        a != null && $("scroll", l);
        return;
      case "onScrollEnd":
        a != null && $("scrollend", l);
        return;
      case "onClick":
        a != null && (l.onclick = fu);
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
        if (!F0.hasOwnProperty(u))
          l: {
            if (u[0] === "o" && u[1] === "n" && (e = u.endsWith("Capture"), n = u.slice(2, e ? u.length - 7 : void 0), t = l[Tt] || null, t = t != null ? t[u] : null, typeof t == "function" && l.removeEventListener(n, t, e), typeof a == "function")) {
              typeof t != "function" && t !== null && (u in l ? l[u] = null : l.hasAttribute(u) && l.removeAttribute(u)), l.addEventListener(n, a, e);
              break l;
            }
            al = !0, u in l ? l[u] = a : a === !0 ? l.setAttribute(u, "") : Bn(l, u, a);
          }
        return;
    }
    al = !0;
  }
  function lt(l, t, u) {
    switch (t) {
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
        $("error", l), $("load", l);
        var a = !1, e = !1, n;
        for (n in u)
          if (u.hasOwnProperty(n)) {
            var f = u[n];
            if (f != null)
              switch (n) {
                case "src":
                  a = !0;
                  break;
                case "srcSet":
                  e = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(r(137, t));
                default:
                  yl(l, t, n, f, u, null);
              }
          }
        e && yl(l, t, "srcSet", u.srcSet, u, null), a && yl(l, t, "src", u.src, u, null);
        return;
      case "input":
        $("invalid", l);
        var i = n = f = e = null, c = null, m = null;
        for (a in u)
          if (u.hasOwnProperty(a)) {
            var g = u[a];
            if (g != null)
              switch (a) {
                case "name":
                  e = g;
                  break;
                case "type":
                  f = g;
                  break;
                case "checked":
                  c = g;
                  break;
                case "defaultChecked":
                  m = g;
                  break;
                case "value":
                  n = g;
                  break;
                case "defaultValue":
                  i = g;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (g != null)
                    throw Error(r(137, t));
                  break;
                default:
                  yl(l, t, a, g, u, null);
              }
          }
        to(
          l,
          n,
          i,
          c,
          m,
          f,
          e,
          !1
        );
        return;
      case "select":
        $("invalid", l), a = f = n = null;
        for (e in u)
          if (u.hasOwnProperty(e) && (i = u[e], i != null))
            switch (e) {
              case "value":
                n = i;
                break;
              case "defaultValue":
                f = i;
                break;
              case "multiple":
                a = i;
              default:
                yl(l, t, e, i, u, null);
            }
        t = n, u = f, l.multiple = !!a, t != null ? wa(l, !!a, t, !1) : u != null && wa(l, !!a, u, !0);
        return;
      case "textarea":
        $("invalid", l), n = e = a = null;
        for (f in u)
          if (u.hasOwnProperty(f) && (i = u[f], i != null))
            switch (f) {
              case "value":
                a = i;
                break;
              case "defaultValue":
                e = i;
                break;
              case "children":
                n = i;
                break;
              case "dangerouslySetInnerHTML":
                if (i != null) throw Error(r(91));
                break;
              default:
                yl(l, t, f, i, u, null);
            }
        ao(l, a, e, n);
        return;
      case "option":
        for (c in u)
          u.hasOwnProperty(c) && (a = u[c], a != null) && (c === "selected" ? l.selected = a && typeof a != "function" && typeof a != "symbol" : yl(l, t, c, a, u, null));
        return;
      case "dialog":
        $("beforetoggle", l), $("toggle", l), $("cancel", l), $("close", l);
        break;
      case "iframe":
      case "object":
        $("load", l);
        break;
      case "video":
      case "audio":
        for (a = 0; a < gn.length; a++)
          $(gn[a], l);
        break;
      case "image":
        $("error", l), $("load", l);
        break;
      case "details":
        $("toggle", l);
        break;
      case "embed":
      case "source":
      case "link":
        $("error", l), $("load", l);
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
        for (m in u)
          if (u.hasOwnProperty(m) && (a = u[m], a != null))
            switch (m) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(r(137, t));
              default:
                yl(l, t, m, a, u, null);
            }
        return;
      default:
        if (oi(t)) {
          for (g in u)
            u.hasOwnProperty(g) && (a = u[g], a !== void 0 && i0(
              l,
              t,
              g,
              a,
              u,
              void 0
            ));
          return;
        }
    }
    for (i in u)
      u.hasOwnProperty(i) && (a = u[i], a != null && yl(l, t, i, a, u, null));
  }
  var vd = {};
  function sd(l, t, u, a) {
    switch (t) {
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
        var e = null, n = null, f = null, i = null, c = null, m = null, g = null;
        for (h in u) {
          var E = u[h];
          if (u.hasOwnProperty(h) && E != null)
            switch (h) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                c = E;
              default:
                a.hasOwnProperty(h) || yl(l, t, h, null, a, E);
            }
        }
        for (var s in a) {
          var h = a[s];
          if (E = u[s], a.hasOwnProperty(s) && (h != null || E != null))
            switch (s) {
              case "type":
                h !== E && (al = !0), n = h;
                break;
              case "name":
                h !== E && (al = !0), e = h;
                break;
              case "checked":
                h !== E && (al = !0), m = h;
                break;
              case "defaultChecked":
                h !== E && (al = !0), g = h;
                break;
              case "value":
                h !== E && (al = !0), f = h;
                break;
              case "defaultValue":
                h !== E && (al = !0), i = h;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (h != null)
                  throw Error(r(137, t));
                break;
              default:
                h !== E && yl(
                  l,
                  t,
                  s,
                  h,
                  a,
                  E
                );
            }
        }
        ii(
          l,
          f,
          i,
          c,
          m,
          g,
          n,
          e
        );
        return;
      case "select":
        h = f = i = s = null;
        for (n in u)
          if (c = u[n], u.hasOwnProperty(n) && c != null)
            switch (n) {
              case "value":
                break;
              case "multiple":
                h = c;
              default:
                a.hasOwnProperty(n) || yl(
                  l,
                  t,
                  n,
                  null,
                  a,
                  c
                );
            }
        for (e in a)
          if (n = a[e], c = u[e], a.hasOwnProperty(e) && (n != null || c != null))
            switch (e) {
              case "value":
                n !== c && (al = !0), s = n;
                break;
              case "defaultValue":
                n !== c && (al = !0), i = n;
                break;
              case "multiple":
                n !== c && (al = !0), f = n;
              default:
                n !== c && yl(
                  l,
                  t,
                  e,
                  n,
                  a,
                  c
                );
            }
        t = i, u = f, a = h, s != null ? wa(l, !!u, s, !1) : !!a != !!u && (t != null ? wa(l, !!u, t, !0) : wa(l, !!u, u ? [] : "", !1));
        return;
      case "textarea":
        h = s = null;
        for (i in u)
          if (e = u[i], u.hasOwnProperty(i) && e != null && !a.hasOwnProperty(i))
            switch (i) {
              case "value":
                break;
              case "children":
                break;
              default:
                yl(l, t, i, null, a, e);
            }
        for (f in a)
          if (e = a[f], n = u[f], a.hasOwnProperty(f) && (e != null || n != null))
            switch (f) {
              case "value":
                e !== n && (al = !0), s = e;
                break;
              case "defaultValue":
                e !== n && (al = !0), h = e;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (e != null) throw Error(r(91));
                break;
              default:
                e !== n && yl(l, t, f, e, a, n);
            }
        uo(l, s, h);
        return;
      case "option":
        for (var _ in u)
          s = u[_], u.hasOwnProperty(_) && s != null && !a.hasOwnProperty(_) && (_ === "selected" ? l.selected = !1 : yl(
            l,
            t,
            _,
            null,
            a,
            s
          ));
        for (c in a)
          s = a[c], h = u[c], a.hasOwnProperty(c) && s !== h && (s != null || h != null) && (c === "selected" ? (s !== h && (al = !0), l.selected = s && typeof s != "function" && typeof s != "symbol") : yl(
            l,
            t,
            c,
            s,
            a,
            h
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
        for (var D in u)
          s = u[D], u.hasOwnProperty(D) && s != null && !a.hasOwnProperty(D) && yl(l, t, D, null, a, s);
        for (m in a)
          if (s = a[m], h = u[m], a.hasOwnProperty(m) && s !== h && (s != null || h != null))
            switch (m) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (s != null)
                  throw Error(r(137, t));
                break;
              default:
                yl(
                  l,
                  t,
                  m,
                  s,
                  a,
                  h
                );
            }
        return;
      default:
        if (oi(t)) {
          for (var V in u)
            s = u[V], u.hasOwnProperty(V) && s !== void 0 && !a.hasOwnProperty(V) && i0(
              l,
              t,
              V,
              void 0,
              a,
              s
            );
          for (g in a)
            s = a[g], h = u[g], !a.hasOwnProperty(g) || s === h || s === void 0 && h === void 0 || i0(
              l,
              t,
              g,
              s,
              a,
              h
            );
          return;
        }
    }
    for (var y in u)
      s = u[y], u.hasOwnProperty(y) && s != null && !a.hasOwnProperty(y) && yl(l, t, y, null, a, s);
    for (E in a)
      s = a[E], h = u[E], !a.hasOwnProperty(E) || s === h || s == null && h == null || yl(l, t, E, s, a, h);
  }
  function yy(l) {
    switch (l) {
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
  function yd() {
    if (typeof performance.getEntriesByType == "function") {
      for (var l = 0, t = 0, u = performance.getEntriesByType("resource"), a = 0; a < u.length; a++) {
        var e = u[a], n = e.transferSize, f = e.initiatorType, i = e.duration;
        if (n && i && yy(f)) {
          for (f = 0, i = e.responseEnd, a += 1; a < u.length; a++) {
            var c = u[a], m = c.startTime;
            if (m > i) break;
            var g = c.transferSize, E = c.initiatorType;
            g && yy(E) && (c = c.responseEnd, f += g * (c < i ? 1 : (i - m) / (c - m)));
          }
          if (--a, t += 8 * (n + f) / (e.duration / 1e3), l++, 10 < l) break;
        }
      }
      if (0 < l) return t / l / 1e6;
    }
    return navigator.connection && (l = navigator.connection.downlink, typeof l == "number") ? l : 5;
  }
  var c0 = null, o0 = null;
  function Sn(l) {
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  function my(l) {
    switch (l) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function dy(l, t) {
    if (l === 0)
      switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return l === 1 && t === "foreignObject" ? 0 : l;
  }
  function hy(l, t, u, a) {
    return u = Sn(
      u
    ).createElement(l), u[Fl] = a, u[Tt] = t, lt(u, l, t), Vl(u), u;
  }
  function v0(l, t) {
    return l === "textarea" || l === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var s0 = null;
  function md() {
    var l = window.event;
    return l && l.type === "popstate" ? l === s0 ? !1 : (s0 = l, !0) : (s0 = null, !1);
  }
  var y0 = typeof setTimeout == "function" ? setTimeout : void 0, dd = typeof clearTimeout == "function" ? clearTimeout : void 0, gy = typeof Promise == "function" ? Promise : void 0, ry = typeof requestAnimationFrame == "function" ? requestAnimationFrame : y0, hd = typeof queueMicrotask == "function" ? queueMicrotask : typeof gy < "u" ? function(l) {
    return gy.resolve(null).then(l).catch(gd);
  } : y0;
  function gd(l) {
    setTimeout(function() {
      throw l;
    });
  }
  function ia(l) {
    return l === "head";
  }
  function Sy(l, t) {
    var u = t, a = 0;
    do {
      var e = u.nextSibling;
      if (l.removeChild(u), e && e.nodeType === 8)
        if (u = e.data, u === "/$" || u === "/&") {
          if (a === 0) {
            l.removeChild(e), Re(t);
            return;
          }
          a--;
        } else if (u === "$" || u === "$?" || u === "$~" || u === "$!" || u === "&")
          a++;
        else if (u === "html")
          E0(
            l.ownerDocument.documentElement
          );
        else if (u === "head") {
          u = l.ownerDocument.head, E0(u);
          for (var n = u.firstChild; n; ) {
            var f = n.nextSibling, i = n.nodeName;
            n[Be] || i === "SCRIPT" || i === "STYLE" || i === "LINK" && n.rel.toLowerCase() === "stylesheet" || u.removeChild(n), n = f;
          }
        } else
          u === "body" && E0(l.ownerDocument.body);
      u = e;
    } while (u);
    Re(t);
  }
  function Ty(l, t) {
    var u = l;
    l = 0;
    do {
      var a = u.nextSibling;
      if (u.nodeType === 1 ? t ? (u._stashedDisplay = u.style.display, u.style.display = "none") : (u.style.display = u._stashedDisplay || "", u.getAttribute("style") === "" && u.removeAttribute("style")) : u.nodeType === 3 && (t ? (u._stashedText = u.nodeValue, u.nodeValue = "") : u.nodeValue = u._stashedText || ""), a && a.nodeType === 8)
        if (u = a.data, u === "/$") {
          if (l === 0) break;
          l--;
        } else
          u !== "$" && u !== "$?" && u !== "$~" && u !== "$!" || l++;
      u = a;
    } while (u);
  }
  function Ey(l, t, u) {
    if (t = CSS.escape(t) !== t ? "r-" + btoa(t).replace(/=/g, "") : t, l.style.viewTransitionName = t, u != null && (l.style.viewTransitionClass = u), u = getComputedStyle(l), u.display === "inline") {
      if (t = l.getClientRects(), t.length === 1) var a = 1;
      else
        for (var e = a = 0; e < t.length; e++) {
          var n = t[e];
          0 < n.width && 0 < n.height && a++;
        }
      a === 1 && (l = l.style, l.display = t.length === 1 ? "inline-block" : "block", l.marginTop = "-" + u.paddingTop, l.marginBottom = "-" + u.paddingBottom);
    }
  }
  function zy(l, t) {
    l = l.style, t = t.style;
    var u = t != null ? t.hasOwnProperty("viewTransitionName") ? t.viewTransitionName : t.hasOwnProperty("view-transition-name") ? t["view-transition-name"] : null : null;
    l.viewTransitionName = u == null || typeof u == "boolean" ? "" : ("" + u).trim(), u = t != null ? t.hasOwnProperty("viewTransitionClass") ? t.viewTransitionClass : t.hasOwnProperty("view-transition-class") ? t["view-transition-class"] : null : null, l.viewTransitionClass = u == null || typeof u == "boolean" ? "" : ("" + u).trim(), l.display === "inline-block" && (t == null ? l.display = l.margin = "" : (u = t.display, l.display = u == null || typeof u == "boolean" ? "" : u, u = t.margin, u != null ? l.margin = u : (u = t.hasOwnProperty("marginTop") ? t.marginTop : t["margin-top"], l.marginTop = u == null || typeof u == "boolean" ? "" : u, t = t.hasOwnProperty("marginBottom") ? t.marginBottom : t["margin-bottom"], l.marginBottom = t == null || typeof t == "boolean" ? "" : t)));
  }
  function rd(l, t, u) {
    return u = u.ownerDocument.defaultView, {
      rect: l,
      abs: t.position === "absolute" || t.position === "fixed",
      clip: t.clipPath !== "none" || t.overflow !== "visible" || t.filter !== "none" || t.mask !== "none" || t.mask !== "none" || t.borderRadius !== "0px",
      view: 0 <= l.bottom && 0 <= l.right && l.top <= u.innerHeight && l.left <= u.innerWidth
    };
  }
  function m0(l) {
    var t = l.getBoundingClientRect(), u = getComputedStyle(l);
    return rd(t, u, l);
  }
  function Sd(l) {
    return l.documentElement.clientHeight;
  }
  function Td(l) {
    this.addEventListener("load", l), this.addEventListener("error", l);
  }
  function Ed(l, t, u, a, e, n, f, i, c) {
    var m = t.nodeType === 9 ? t : t.ownerDocument;
    try {
      var g = m.startViewTransition({
        update: function() {
          var s = m.defaultView, h = s.navigation && s.navigation.transition, _ = m.fonts.status;
          a();
          var D = [];
          if (_ === "loaded" && (Sd(m), m.fonts.status === "loading" && D.push(m.fonts.ready)), _ = D.length, l !== null)
            for (var V = l.suspenseyImages, y = 0, o = 0; o < V.length; o++) {
              var d = V[o];
              if (!d.complete) {
                var T = d.getBoundingClientRect();
                if (0 < T.bottom && 0 < T.right && T.top < s.innerHeight && T.left < s.innerWidth) {
                  if (y += Zy(d), y > wf) {
                    D.length = _;
                    break;
                  }
                  d = new Promise(
                    Td.bind(d)
                  ), D.push(d);
                }
              }
            }
          if (0 < D.length)
            return s = Promise.race([
              Promise.all(D),
              new Promise(function(M) {
                return setTimeout(M, 500);
              })
            ]).then(e, e), (h ? Promise.allSettled([h.finished, s]) : s).then(n, n);
          if (e(), h)
            return h.finished.then(
              n,
              n
            );
          n();
        },
        types: u
      });
      m.__reactViewTransition = g;
      var E = [];
      return g.ready.then(
        function() {
          for (var s = m.documentElement.getAnimations({
            subtree: !0
          }), h = 0; h < s.length; h++) {
            var _ = s[h], D = _.effect, V = D.pseudoElement;
            if (V != null && V.startsWith("::view-transition")) {
              E.push(_), _ = D.getKeyframes();
              for (var y = V = void 0, o = !0, d = 0; d < _.length; d++) {
                var T = _[d], M = T.width;
                if (V === void 0) V = M;
                else if (V !== M) {
                  o = !1;
                  break;
                }
                if (M = T.height, y === void 0) y = M;
                else if (y !== M) {
                  o = !1;
                  break;
                }
                delete T.width, delete T.height, T.transform === "none" && delete T.transform;
              }
              o && V !== void 0 && y !== void 0 && (D.setKeyframes(_), o = getComputedStyle(
                D.target,
                D.pseudoElement
              ), o.width !== V || o.height !== y) && (o = _[0], o.width = V, o.height = y, o = _[_.length - 1], o.width = V, o.height = y, D.setKeyframes(_));
            }
          }
          f();
        },
        function(s) {
          m.__reactViewTransition === g && (m.__reactViewTransition = null);
          try {
            typeof s == "object" && s !== null && s.name === "InvalidStateError" && (s.message === "View transition was skipped because document visibility state is hidden." || s.message === "Skipping view transition because document visibility state has become hidden." || s.message === "Skipping view transition because viewport size changed." || s.message === "Transition was aborted because of invalid state") && (s = null), s !== null && c(s);
          } finally {
            a(), e(), f();
          }
        }
      ), g.finished.finally(function() {
        for (var s = 0; s < E.length; s++)
          E[s].cancel();
        m.__reactViewTransition === g && (m.__reactViewTransition = null), i();
      }), g;
    } catch {
      return a(), e(), f(), null;
    }
  }
  function Qa(l, t) {
    this._scope = document.documentElement, this._selector = "::view-transition-" + l + "(" + t + ")";
  }
  Qa.prototype.animate = function(l, t) {
    return t = typeof t == "number" ? { duration: t } : j({}, t), t.pseudoElement = this._selector, this._scope.animate(l, t);
  }, Qa.prototype.getAnimations = function() {
    for (var l = this._scope, t = this._selector, u = l.getAnimations({ subtree: !0 }), a = [], e = 0; e < u.length; e++) {
      var n = u[e].effect;
      n !== null && n.target === l && n.pseudoElement === t && a.push(u[e]);
    }
    return a;
  }, Qa.prototype.getComputedStyle = function() {
    return getComputedStyle(this._scope, this._selector);
  };
  function by(l) {
    return {
      name: l,
      group: new Qa("group", l),
      imagePair: new Qa("image-pair", l),
      old: new Qa("old", l),
      new: new Qa("new", l)
    };
  }
  function Gt(l) {
    this._fragmentFiber = l, this._observers = this._eventListeners = null;
  }
  Gt.prototype.addEventListener = function(l, t, u) {
    var a = null, e = null;
    if (!(u != null && typeof u != "boolean" && (a = u.signal || null, a !== null && a.aborted))) {
      this._eventListeners === null && (this._eventListeners = []);
      var n = this._eventListeners;
      if (Oy(n, l, t, u) === -1) {
        var f = this, i = t;
        u != null && typeof u != "boolean" && u.once === !0 && (i = function(c) {
          f.removeEventListener(
            l,
            t,
            u
          ), typeof t == "function" ? t.call(this, c) : t.handleEvent(c);
        }), a !== null && (e = f.removeEventListener.bind(
          f,
          l,
          t,
          u
        ), a.addEventListener("abort", e, { once: !0 }), e = a.removeEventListener.bind(a, "abort", e)), a = Ae(u), n.push({
          type: l,
          listener: t,
          optionsOrUseCapture: u,
          attachedListener: i,
          cleanup: e
        }), S(
          this._fragmentFiber.child,
          !1,
          zd,
          l,
          i,
          a
        );
      }
      this._eventListeners = n;
    }
  };
  function zd(l, t, u, a) {
    return ol(l).addEventListener(
      t,
      u,
      a
    ), !1;
  }
  Gt.prototype.removeEventListener = function(l, t, u) {
    var a = this._eventListeners;
    if (a !== null && (t = Oy(
      a,
      l,
      t,
      u
    ), t !== -1)) {
      var e = a[t];
      u = e.attachedListener;
      var n = e.cleanup;
      e = Ae(e.optionsOrUseCapture), S(
        this._fragmentFiber.child,
        !1,
        bd,
        l,
        u,
        e
      ), a.splice(t, 1), n !== null && n();
    }
  };
  function bd(l, t, u, a) {
    return ol(l).removeEventListener(
      t,
      u,
      a
    ), !1;
  }
  function Ae(l) {
    return l != null && typeof l != "boolean" && (l.once === !0 || l.signal instanceof AbortSignal) ? { capture: l.capture, passive: l.passive } : l;
  }
  function _y(l) {
    return l == null ? "c=0" : typeof l == "boolean" ? "c=" + (l ? "1" : "0") : "c=" + (l.capture ? "1" : "0");
  }
  function Oy(l, t, u, a) {
    if (l.length === 0) return -1;
    a = _y(a);
    for (var e = 0; e < l.length; e++) {
      var n = l[e];
      if (n.type === t && n.listener === u && _y(n.optionsOrUseCapture) === a)
        return e;
    }
    return -1;
  }
  Gt.prototype.dispatchEvent = function(l) {
    var t = x(
      this._fragmentFiber
    );
    if (t === null) return !0;
    t = ol(t);
    var u = this._eventListeners;
    if (u !== null && 0 < u.length || !l.bubbles) {
      var a = t.nodeType === 9 ? t.createComment("") : document.createTextNode("");
      if (u)
        for (var e = 0; e < u.length; e++) {
          var n = u[e];
          a.addEventListener(
            n.type,
            n.attachedListener,
            Ae(n.optionsOrUseCapture)
          );
        }
      if (t.appendChild(a), l = a.dispatchEvent(l), u)
        for (e = 0; e < u.length; e++)
          n = u[e], a.removeEventListener(
            n.type,
            n.attachedListener,
            Ae(n.optionsOrUseCapture)
          );
      return t.removeChild(a), l;
    }
    return t.dispatchEvent(l);
  }, Gt.prototype.focus = function(l) {
    S(
      this._fragmentFiber.child,
      !0,
      Ay,
      l,
      void 0,
      void 0
    );
  };
  function Ay(l, t) {
    return l.tag === 6 ? !1 : (l = ol(l), qd(l, t));
  }
  Gt.prototype.focusLast = function(l) {
    var t = [];
    S(
      this._fragmentFiber.child,
      !0,
      d0,
      t,
      void 0,
      void 0
    );
    for (var u = t.length - 1; 0 <= u && !Ay(t[u], l); u--) ;
  };
  function d0(l, t) {
    return t.push(l), !1;
  }
  Gt.prototype.blur = function() {
    var l = x(
      this._fragmentFiber
    );
    l !== null && (l = ol(l), l = Sn(l).activeElement, l !== null && S(
      this._fragmentFiber.child,
      !1,
      _d,
      l,
      void 0,
      void 0
    ));
  };
  function _d(l, t) {
    return l.tag === 6 ? !1 : (l = ol(l), l === t || l.contains(t) ? (t.blur(), !0) : !1);
  }
  Gt.prototype.observeUsing = function(l) {
    this._observers === null && (this._observers = /* @__PURE__ */ new Set()), this._observers.add(l), S(
      this._fragmentFiber.child,
      !1,
      Od,
      l,
      void 0,
      void 0
    );
  };
  function Od(l, t) {
    return l.tag === 6 || (l = ol(l), t.observe(l)), !1;
  }
  Gt.prototype.unobserveUsing = function(l) {
    var t = this._observers;
    if (t !== null && t.has(l)) {
      t.delete(l), S(
        this._fragmentFiber.child,
        !1,
        Ad,
        l,
        void 0,
        void 0
      );
      for (var u = t = 0; u < au.length; u++) {
        var a = au[u];
        a.fragmentInstance === this && a.observer === l ? l.unobserve(a.instance) : au[t++] = a;
      }
      au.length = t;
    }
  };
  function Ad(l, t) {
    return l.tag === 6 || (l = ol(l), t.unobserve(l)), !1;
  }
  var au = [], h0 = !1;
  function Nd(l, t, u) {
    au.push({
      fragmentInstance: l,
      observer: t,
      instance: u
    }), h0 || (h0 = !0, Bd(function() {
      h0 = !1;
      var a = au;
      au = [];
      for (var e = 0; e < a.length; e++) {
        var n = a[e];
        n.observer.unobserve(n.instance);
      }
    }));
  }
  Gt.prototype.getClientRects = function() {
    var l = [];
    return S(
      this._fragmentFiber.child,
      !1,
      Md,
      l,
      void 0,
      void 0
    ), l;
  };
  function Md(l, t) {
    if (l.tag === 6) {
      l = l.stateNode;
      var u = l.ownerDocument.createRange();
      u.selectNodeContents(l), t.push.apply(t, u.getClientRects());
    } else
      l = ol(l), t.push.apply(t, l.getClientRects());
    return !1;
  }
  Gt.prototype.getRootNode = function(l) {
    var t = x(
      this._fragmentFiber
    );
    return t === null ? this : ol(t).getRootNode(l);
  }, Gt.prototype.compareDocumentPosition = function(l) {
    var t = x(
      this._fragmentFiber
    );
    if (t === null) return Node.DOCUMENT_POSITION_DISCONNECTED;
    var u = [];
    S(
      this._fragmentFiber.child,
      !1,
      d0,
      u,
      void 0,
      void 0
    );
    var a = ol(t);
    if (u.length === 0) {
      if (u = a, Hl(this._fragmentFiber)) {
        l: {
          for (t = this._fragmentFiber.return; t !== null; ) {
            if (t.tag === 4) {
              t = t.stateNode.containerInfo;
              break l;
            }
            if (t.tag === 3 || t.tag === 5 || t.tag === 27)
              break;
            t = t.return;
          }
          t = null;
        }
        t != null && (u = t);
      }
      t = this._fragmentFiber;
      var e = a = u.compareDocumentPosition(l);
      return u === l ? e = Node.DOCUMENT_POSITION_CONTAINS : a & Node.DOCUMENT_POSITION_CONTAINED_BY && (u = ct(t)[1], u === null ? e = Node.DOCUMENT_POSITION_PRECEDING : (l = ol(u).compareDocumentPosition(
        l
      ), e = l === 0 || l & Node.DOCUMENT_POSITION_FOLLOWING ? Node.DOCUMENT_POSITION_FOLLOWING : Node.DOCUMENT_POSITION_PRECEDING)), e |= Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
    }
    t = ol(u[0]), e = ol(u[u.length - 1]);
    var n = Hl(this._fragmentFiber) ? t.parentElement : a;
    if (n == null)
      return Node.DOCUMENT_POSITION_DISCONNECTED;
    a = n.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_CONTAINED_BY, n = n.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_CONTAINED_BY;
    var f = t.compareDocumentPosition(l), i = e.compareDocumentPosition(l), c = f & Node.DOCUMENT_POSITION_CONTAINED_BY || i & Node.DOCUMENT_POSITION_CONTAINED_BY;
    return i = a && n && f & Node.DOCUMENT_POSITION_FOLLOWING && i & Node.DOCUMENT_POSITION_PRECEDING, t = a && t === l || n && e === l || c || i ? Node.DOCUMENT_POSITION_CONTAINED_BY : !a && t === l || !n && e === l ? Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC : f, t & Node.DOCUMENT_POSITION_DISCONNECTED || t & Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC || Dd(
      t,
      this._fragmentFiber,
      u[0],
      u[u.length - 1],
      l
    ) ? t : Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
  };
  function Dd(l, t, u, a, e) {
    var n = Sa(e);
    if (l & Node.DOCUMENT_POSITION_CONTAINED_BY) {
      if (u = !!n)
        l: {
          for (; n !== null; ) {
            if (n.tag === 7 && (n === t || n.alternate === t)) {
              u = !0;
              break l;
            }
            n = n.return;
          }
          u = !1;
        }
      return u;
    }
    if (l & Node.DOCUMENT_POSITION_CONTAINS) {
      if (n === null)
        return n = e.ownerDocument, e === n || e === n.documentElement || e === n.body;
      l: {
        for (n = t, t = x(t); n !== null; ) {
          if (!(n.tag !== 5 && n.tag !== 3 && n.tag !== 27 || n !== t && n.alternate !== t)) {
            n = !0;
            break l;
          }
          n = n.return;
        }
        n = !1;
      }
      return n;
    }
    return l & Node.DOCUMENT_POSITION_PRECEDING ? ((t = !!n) && !(t = n === u) && (t = at(
      u,
      n,
      Nt
    ), t === null ? t = !1 : (S(
      t,
      !0,
      ru,
      n,
      u
    ), n = ot, ot = null, t = n !== null)), t) : l & Node.DOCUMENT_POSITION_FOLLOWING ? ((t = !!n) && !(t = n === a) && (t = at(
      a,
      n,
      Nt
    ), t === null ? t = !1 : (S(
      t,
      !0,
      At,
      n,
      a
    ), n = ot, vt = ot = null, t = n !== null)), t) : !1;
  }
  function Ny(l, t) {
    var u = l.ownerDocument.createRange();
    u.selectNodeContents(l), l = u.getBoundingClientRect(), window.scrollTo(
      window.scrollX + l.left,
      t ? window.scrollY + l.top : window.scrollY + l.bottom - window.innerHeight
    );
  }
  Gt.prototype.scrollIntoView = function(l) {
    if (typeof l == "object") throw Error(r(566));
    var t = [];
    S(
      this._fragmentFiber.child,
      !1,
      d0,
      t,
      void 0,
      void 0
    );
    var u = l !== !1;
    if (t.length === 0) {
      var a = ct(
        this._fragmentFiber
      );
      if (a = u ? a[1] || a[0] || x(this._fragmentFiber) : a[0] || a[1], a === null) return;
      if (a.tag === 6) {
        l = ol(a), Ny(l, u);
        return;
      }
      if (a = ol(a), a.nodeType !== 9) {
        if (a.nodeType === 11) {
          u = "host" in a ? a.host : null, u !== null && u.scrollIntoView(l);
          return;
        }
        a.scrollIntoView(l);
      }
    }
    for (a = u ? t.length - 1 : 0; a !== (u ? -1 : t.length); ) {
      var e = t[a];
      e.tag === 6 ? (e = ol(e), Ny(e, u)) : ol(e).scrollIntoView(l), a += u ? -1 : 1;
    }
  };
  function Ud(l, t) {
    return l = ol(l), My(l, t), !1;
  }
  function My(l, t) {
    l.reactFragments == null && (l.reactFragments = /* @__PURE__ */ new Set()), l.reactFragments.add(t);
  }
  function Dy(l, t) {
    var u = t._eventListeners;
    if (u !== null)
      for (var a = 0; a < u.length; a++) {
        var e = u[a];
        l.addEventListener(
          e.type,
          e.attachedListener,
          Ae(e.optionsOrUseCapture)
        );
      }
    l.nodeType !== 3 && (u = t._observers, u !== null && u.forEach(function(n) {
      for (var f = 0, i = 0; i < au.length; i++) {
        var c = au[i];
        (c.fragmentInstance !== t || c.observer !== n || c.instance !== l) && (au[f++] = c);
      }
      au.length = f, n.observe(l);
    }), My(l, t));
  }
  function Cd(l, t) {
    var u = t._eventListeners;
    if (u !== null)
      for (var a = 0; a < u.length; a++) {
        var e = u[a];
        l.removeEventListener(
          e.type,
          e.attachedListener,
          Ae(e.optionsOrUseCapture)
        );
      }
    l.nodeType !== 3 && (u = t._observers, u !== null && u.forEach(function(n) {
      typeof n.rootMargin == "string" ? Nd(
        t,
        n,
        l
      ) : n.unobserve(l);
    }), l.reactFragments != null && l.reactFragments.delete(t));
  }
  function g0(l) {
    var t = l.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var u = t;
      switch (t = t.nextSibling, u.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          g0(u), qn(u);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (u.rel.toLowerCase() === "stylesheet") continue;
      }
      l.removeChild(u);
    }
  }
  function Rd(l, t, u, a) {
    for (; l.nodeType === 1; ) {
      var e = u;
      if (l.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!a && (l.nodeName !== "INPUT" || l.type !== "hidden"))
          break;
      } else if (a) {
        if (!l[Be])
          switch (t) {
            case "meta":
              if (!l.hasAttribute("itemprop")) break;
              return l;
            case "link":
              if (n = l.getAttribute("rel"), n === "stylesheet" && l.hasAttribute("data-precedence"))
                break;
              if (n !== e.rel || l.getAttribute("href") !== (e.href == null || e.href === "" ? null : e.href) || l.getAttribute("crossorigin") !== (e.crossOrigin == null ? null : e.crossOrigin) || l.getAttribute("title") !== (e.title == null ? null : e.title))
                break;
              return l;
            case "style":
              if (l.hasAttribute("data-precedence")) break;
              return l;
            case "script":
              if (n = l.getAttribute("src"), (n !== (e.src == null ? null : e.src) || l.getAttribute("type") !== (e.type == null ? null : e.type) || l.getAttribute("crossorigin") !== (e.crossOrigin == null ? null : e.crossOrigin)) && n && l.hasAttribute("async") && !l.hasAttribute("itemprop"))
                break;
              return l;
            default:
              return l;
          }
      } else if (t === "input" && l.type === "hidden") {
        var n = e.name == null ? null : "" + e.name;
        if (e.type === "hidden" && l.getAttribute("name") === n)
          return l;
      } else return l;
      if (l = Ft(l.nextSibling), l === null) break;
    }
    return null;
  }
  function Hd(l, t, u) {
    if (t === "") return null;
    for (; l.nodeType !== 3; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !u || (l = Ft(l.nextSibling), l === null)) return null;
    return l;
  }
  function Uy(l, t) {
    for (; l.nodeType !== 8; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !t || (l = Ft(l.nextSibling), l === null)) return null;
    return l;
  }
  function r0(l) {
    return l.data === "$?" || l.data === "$~";
  }
  function S0(l) {
    return l.data === "$!" || l.data === "$?" && l.ownerDocument.readyState !== "loading";
  }
  function Yd(l, t) {
    var u = l.ownerDocument;
    if (l.data === "$~") l._reactRetry = t;
    else if (l.data !== "$?" || u.readyState !== "loading")
      t();
    else {
      var a = function() {
        t(), u.removeEventListener("DOMContentLoaded", a);
      };
      u.addEventListener("DOMContentLoaded", a), l._reactRetry = a;
    }
  }
  function Ft(l) {
    for (; l != null; l = l.nextSibling) {
      var t = l.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (t = l.data, t === "$" || t === "$!" || t === "$?" || t === "$~" || t === "&" || t === "F!" || t === "F")
          break;
        if (t === "/$" || t === "/&") return null;
      }
    }
    return l;
  }
  var T0 = null;
  function Cy(l) {
    l = l.nextSibling;
    for (var t = 0; l; ) {
      if (l.nodeType === 8) {
        var u = l.data;
        if (u === "/$" || u === "/&") {
          if (t === 0)
            return Ft(l.nextSibling);
          t--;
        } else
          u !== "$" && u !== "$!" && u !== "$?" && u !== "$~" && u !== "&" || t++;
      }
      l = l.nextSibling;
    }
    return null;
  }
  function Ry(l) {
    l = l.previousSibling;
    for (var t = 0; l; ) {
      if (l.nodeType === 8) {
        var u = l.data;
        if (u === "$" || u === "$!" || u === "$?" || u === "$~" || u === "&") {
          if (t === 0) return l;
          t--;
        } else u !== "/$" && u !== "/&" || t++;
      }
      l = l.previousSibling;
    }
    return null;
  }
  function qd(l, t) {
    function u() {
      a = !0;
    }
    if (l.ownerDocument.activeElement === l) return !0;
    var a = !1;
    try {
      l.ownerDocument.addEventListener("focus", u, !0), (l.focus || HTMLElement.prototype.focus).call(l, t);
    } finally {
      l.ownerDocument.removeEventListener("focus", u, !0);
    }
    return a;
  }
  function Bd(l) {
    ry(function() {
      ry(function(t) {
        return l(t);
      });
    });
  }
  function Hy(l, t, u) {
    switch (t = Sn(u), l) {
      case "html":
        if (l = t.documentElement, !l) throw Error(r(452));
        return l;
      case "head":
        if (l = t.head, !l) throw Error(r(453));
        return l;
      case "body":
        if (l = t.body, !l) throw Error(r(454));
        return l;
      default:
        throw Error(r(451));
    }
  }
  function Yy(l, t, u) {
    for (var a in u) {
      var e = u[a];
      u.hasOwnProperty(a) && e != null && yl(l, t, a, null, vd, e);
    }
    u.dangerouslySetInnerHTML != null && (l.textContent = ""), l.onclick === fu && (l.onclick = null), qn(l);
  }
  function E0(l) {
    for (var t = l.attributes; t.length; )
      l.removeAttributeNode(t[0]);
    qn(l);
  }
  var Wt = /* @__PURE__ */ new Map(), qy = /* @__PURE__ */ new Set();
  function Tn(l) {
    if (typeof l.getRootNode == "function") {
      var t = l.getRootNode();
      if (t.nodeType === 9 || t.nodeType === 11) return t;
    }
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  var Bu = q.d;
  q.d = {
    f: xd,
    r: Gd,
    D: Xd,
    C: Qd,
    L: pd,
    m: jd,
    X: Vd,
    S: Zd,
    M: Ld
  };
  function xd() {
    var l = Bu.f(), t = Xf();
    return l || t;
  }
  function Gd(l) {
    var t = La(l);
    t !== null && t.tag === 5 && t.type === "form" ? xv(t) : Bu.r(l);
  }
  var Ne = typeof document > "u" ? null : document;
  function By(l, t, u) {
    var a = Ne;
    if (a && typeof t == "string" && t) {
      var e = Zt(t);
      e = 'link[rel="' + l + '"][href="' + e + '"]', typeof u == "string" && (e += '[crossorigin="' + u + '"]'), qy.has(e) || (qy.add(e), l = { rel: l, crossOrigin: u, href: t }, a.querySelector(e) === null && (t = a.createElement("link"), lt(t, "link", l), Vl(t), a.head.appendChild(t)));
    }
  }
  function Xd(l) {
    Bu.D(l), By("dns-prefetch", l, null);
  }
  function Qd(l, t) {
    Bu.C(l, t), By("preconnect", l, t);
  }
  function pd(l, t, u) {
    Bu.L(l, t, u);
    var a = Ne;
    if (a && l && t) {
      var e = 'link[rel="preload"][as="' + Zt(t) + '"]';
      t === "image" && u && u.imageSrcSet ? (e += '[imagesrcset="' + Zt(
        u.imageSrcSet
      ) + '"]', typeof u.imageSizes == "string" && (e += '[imagesizes="' + Zt(
        u.imageSizes
      ) + '"]')) : e += '[href="' + Zt(l) + '"]';
      var n = e;
      switch (t) {
        case "style":
          n = Me(l);
          break;
        case "script":
          n = De(l);
      }
      if (!(Wt.has(n) || (l = j(
        {
          rel: "preload",
          href: t === "image" && u && u.imageSrcSet ? void 0 : l,
          as: t
        },
        u
      ), Wt.set(n, l), a.querySelector(e) !== null || t === "style" && a.querySelector(En(n)) || t === "script" && a.querySelector(zn(n))))) {
        var f = a.createElement("link");
        lt(f, "link", l), t === "style" && (f[Yn] = !0, f.onload = f.onerror = function() {
          w0(f);
        }), Vl(f), a.head.appendChild(f);
      }
    }
  }
  function jd(l, t) {
    Bu.m(l, t);
    var u = Ne;
    if (u && l) {
      var a = t && typeof t.as == "string" ? t.as : "script", e = 'link[rel="modulepreload"][as="' + Zt(a) + '"][href="' + Zt(l) + '"]', n = e;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          n = De(l);
      }
      if (!Wt.has(n) && (l = j({ rel: "modulepreload", href: l }, t), Wt.set(n, l), u.querySelector(e) === null)) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (u.querySelector(zn(n)))
              return;
        }
        a = u.createElement("link"), lt(a, "link", l), Vl(a), u.head.appendChild(a);
      }
    }
  }
  function Zd(l, t, u) {
    Bu.S(l, t, u);
    var a = Ne;
    if (a && l) {
      var e = Ka(a).hoistableStyles, n = Me(l);
      t = t || "default";
      var f = e.get(n);
      if (!f) {
        var i = { loading: 0, preload: null };
        if (f = a.querySelector(
          En(n)
        ))
          i.loading = 5;
        else {
          l = j(
            { rel: "stylesheet", href: l, "data-precedence": t },
            u
          ), (u = Wt.get(n)) && z0(l, u);
          var c = f = a.createElement("link");
          Vl(c), lt(c, "link", l), c._p = new Promise(function(m, g) {
            c.onload = m, c.onerror = g;
          }), c.addEventListener("load", function() {
            i.loading |= 1;
          }), c.addEventListener("error", function() {
            i.loading |= 2;
          }), i.loading |= 4, Kf(f, t, a);
        }
        f = {
          type: "stylesheet",
          instance: f,
          count: 1,
          state: i
        }, e.set(n, f);
      }
    }
  }
  function Vd(l, t) {
    Bu.X(l, t);
    var u = Ne;
    if (u && l) {
      var a = Ka(u).hoistableScripts, e = De(l), n = a.get(e);
      n || (n = u.querySelector(zn(e)), n || (l = j({ src: l, async: !0 }, t), (t = Wt.get(e)) && b0(l, t), n = u.createElement("script"), Vl(n), lt(n, "link", l), u.head.appendChild(n)), n = {
        type: "script",
        instance: n,
        count: 1,
        state: null
      }, a.set(e, n));
    }
  }
  function Ld(l, t) {
    Bu.M(l, t);
    var u = Ne;
    if (u && l) {
      var a = Ka(u).hoistableScripts, e = De(l), n = a.get(e);
      n || (n = u.querySelector(zn(e)), n || (l = j({ src: l, async: !0, type: "module" }, t), (t = Wt.get(e)) && b0(l, t), n = u.createElement("script"), Vl(n), lt(n, "link", l), u.head.appendChild(n)), n = {
        type: "script",
        instance: n,
        count: 1,
        state: null
      }, a.set(e, n));
    }
  }
  function xy(l, t, u, a) {
    var e = (e = pt.current) ? Tn(e) : null;
    if (!e) throw Error(r(446));
    switch (l) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof u.precedence == "string" && typeof u.href == "string" ? (u = Me(u.href), t = Ka(
          e
        ).hoistableStyles, a = t.get(u), a || (a = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, t.set(u, a)), a) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (u.rel === "stylesheet" && typeof u.href == "string" && typeof u.precedence == "string") {
          l = Me(u.href);
          var n = Ka(
            e
          ).hoistableStyles, f = n.get(l);
          if (f || (e = e.ownerDocument || e, f = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, n.set(l, f), (n = e.querySelector(
            En(l)
          )) ? n._p || (f.instance = n, f.state.loading = 5) : (n = Wt.get(l), n || (n = {
            rel: "preload",
            as: "style",
            href: u.href,
            crossOrigin: u.crossOrigin,
            integrity: u.integrity,
            media: u.media,
            hrefLang: u.hrefLang,
            referrerPolicy: u.referrerPolicy
          }, Wt.set(l, n)), Kd(
            e,
            l,
            n,
            f.state
          ))), t && a === null)
            throw Error(r(528, ""));
          return f;
        }
        if (t && a !== null)
          throw Error(r(529, ""));
        return null;
      case "script":
        return t = u.async, u = u.src, typeof u == "string" && t && typeof t != "function" && typeof t != "symbol" ? (u = De(u), t = Ka(
          e
        ).hoistableScripts, a = t.get(u), a || (a = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, t.set(u, a)), a) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(r(444, l));
    }
  }
  function Me(l) {
    return 'href="' + Zt(l) + '"';
  }
  function En(l) {
    return 'link[rel="stylesheet"][' + l + "]";
  }
  function Gy(l) {
    return j({}, l, {
      "data-precedence": l.precedence,
      precedence: null
    });
  }
  function Kd(l, t, u, a) {
    if (t = l.querySelector(
      'link[rel="preload"][as="style"][' + t + "]"
    )) {
      if (t[Yn] !== !0) {
        a.loading = 1;
        return;
      }
    } else
      t = l.createElement("link"), t[Yn] = !0, t.onload = t.onerror = w0.bind(null, t), lt(t, "link", u), Vl(t), l.head.appendChild(t);
    a.preload = t, t.addEventListener("load", function() {
      return a.loading |= 1;
    }), t.addEventListener("error", function() {
      return a.loading |= 2;
    });
  }
  function De(l) {
    return '[src="' + Zt(l) + '"]';
  }
  function zn(l) {
    return "script[async]" + l;
  }
  function Xy(l, t, u) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var a = l.querySelector(
            'style[data-href~="' + Zt(u.href) + '"]'
          );
          if (a)
            return t.instance = a, Vl(a), a;
          var e = j({}, u, {
            "data-href": u.href,
            "data-precedence": u.precedence,
            href: null,
            precedence: null
          });
          return a = (l.ownerDocument || l).createElement(
            "style"
          ), Vl(a), lt(a, "style", e), Kf(a, u.precedence, l), t.instance = a;
        case "stylesheet":
          e = Me(u.href);
          var n = l.querySelector(
            En(e)
          );
          if (n)
            return t.state.loading |= 4, t.instance = n, Vl(n), n;
          a = Gy(u), (e = Wt.get(e)) && z0(a, e), n = (l.ownerDocument || l).createElement("link"), Vl(n);
          var f = n;
          return f._p = new Promise(function(i, c) {
            f.onload = i, f.onerror = c;
          }), lt(n, "link", a), t.state.loading |= 4, Kf(n, u.precedence, l), t.instance = n;
        case "script":
          return n = De(u.src), (e = l.querySelector(
            zn(n)
          )) ? (t.instance = e, Vl(e), e) : (a = u, (e = Wt.get(n)) && (a = j({}, u), b0(a, e)), l = l.ownerDocument || l, e = l.createElement("script"), Vl(e), lt(e, "link", a), l.head.appendChild(e), t.instance = e);
        case "void":
          return null;
        default:
          throw Error(r(443, t.type));
      }
    else
      t.type === "stylesheet" && (t.state.loading & 4) === 0 && (a = t.instance, t.state.loading |= 4, Kf(a, u.precedence, l));
    return t.instance;
  }
  function Kf(l, t, u) {
    for (var a = u.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), e = a.length ? a[a.length - 1] : null, n = e, f = 0; f < a.length; f++) {
      var i = a[f];
      if (i.dataset.precedence === t) n = i;
      else if (n !== e) break;
    }
    n ? n.parentNode.insertBefore(l, n.nextSibling) : (t = u.nodeType === 9 ? u.head : u, t.insertBefore(l, t.firstChild));
  }
  function z0(l, t) {
    l.crossOrigin == null && (l.crossOrigin = t.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy), l.title == null && (l.title = t.title);
  }
  function b0(l, t) {
    l.crossOrigin == null && (l.crossOrigin = t.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy), l.integrity == null && (l.integrity = t.integrity);
  }
  var Jf = null;
  function Qy(l, t, u) {
    if (Jf === null) {
      var a = /* @__PURE__ */ new Map(), e = Jf = /* @__PURE__ */ new Map();
      e.set(u, a);
    } else
      e = Jf, a = e.get(u), a || (a = /* @__PURE__ */ new Map(), e.set(u, a));
    if (a.has(l)) return a;
    for (a.set(l, null), u = u.getElementsByTagName(l), e = 0; e < u.length; e++) {
      var n = u[e];
      if (!(n[Be] || n[Fl] || l === "link" && n.getAttribute("rel") === "stylesheet") && n.namespaceURI !== "http://www.w3.org/2000/svg") {
        var f = n.getAttribute(t) || "";
        f = l + f;
        var i = a.get(f);
        i ? i.push(n) : a.set(f, [n]);
      }
    }
    return a;
  }
  function _0(l, t, u) {
    l = l.ownerDocument || l, l.head.insertBefore(
      u,
      t === "title" ? l.querySelector("head > title") : null
    );
  }
  function Jd(l, t, u) {
    if (u === 1 || t.itemProp != null) return !1;
    switch (l) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "")
          break;
        return !0;
      case "link":
        if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError)
          break;
        return t.rel === "stylesheet" ? (l = t.disabled, typeof t.precedence == "string" && l == null) : !0;
      case "script":
        if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string")
          return !0;
    }
    return !1;
  }
  function py(l, t) {
    return l === "img" && t.src != null && t.src !== "" && t.onLoad == null && t.loading !== "lazy";
  }
  function jy(l) {
    return !(l.type === "stylesheet" && (l.state.loading & 3) === 0);
  }
  function Zy(l) {
    return (l.width || 100) * (l.height || 100) * (typeof devicePixelRatio == "number" ? devicePixelRatio : 1) * 0.25;
  }
  function Vy(l, t) {
    typeof t.decode == "function" && (l.imgCount++, t.complete || (l.imgBytes += Zy(t), l.suspenseyImages.push(t)), l = Fd.bind(l), t.decode().then(l, l));
  }
  function wd(l, t, u, a) {
    if (u.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (u.state.loading & 4) === 0) {
      if (u.instance === null) {
        var e = Me(a.href), n = t.querySelector(
          En(e)
        );
        if (n) {
          t = n._p, t !== null && typeof t == "object" && typeof t.then == "function" && (l.count++, l = bn.bind(l), t.then(l, l)), u.state.loading |= 4, u.instance = n, Vl(n);
          return;
        }
        n = t.ownerDocument || t, a = Gy(a), (e = Wt.get(e)) && z0(a, e), n = n.createElement("link"), Vl(n);
        var f = n;
        f._p = new Promise(function(i, c) {
          f.onload = i, f.onerror = c;
        }), lt(n, "link", a), u.instance = n;
      }
      l.stylesheets === null && (l.stylesheets = /* @__PURE__ */ new Map()), l.stylesheets.set(u, t), (t = u.state.preload) && (u.state.loading & 3) === 0 && (l.count++, u = bn.bind(l), t.addEventListener("load", u), t.addEventListener("error", u));
    }
  }
  var wf = 0;
  function $d(l, t) {
    return l.stylesheets && l.count === 0 && Ff(l, l.stylesheets), 0 < l.count || 0 < l.imgCount ? function(u) {
      var a = setTimeout(function() {
        if (l.stylesheets && Ff(l, l.stylesheets), l.unsuspend) {
          var n = l.unsuspend;
          l.unsuspend = null, n();
        }
      }, 6e4 + t);
      0 < l.imgBytes && wf === 0 && (wf = 62500 * yd());
      var e = setTimeout(
        function() {
          if (l.waitingForImages = !1, l.count === 0 && (l.stylesheets && Ff(l, l.stylesheets), l.unsuspend)) {
            var n = l.unsuspend;
            l.unsuspend = null, n();
          }
        },
        (l.imgBytes > wf ? 50 : 800) + t
      );
      return l.unsuspend = u, function() {
        l.unsuspend = null, clearTimeout(a), clearTimeout(e);
      };
    } : null;
  }
  function Ly(l) {
    if (l.count === 0 && (l.imgCount === 0 || !l.waitingForImages)) {
      if (l.stylesheets) Ff(l, l.stylesheets);
      else if (l.unsuspend) {
        var t = l.unsuspend;
        l.unsuspend = null, t();
      }
    }
  }
  function bn() {
    this.count--, Ly(this);
  }
  function Fd() {
    this.imgCount--, Ly(this);
  }
  var $f = null;
  function Ff(l, t) {
    l.stylesheets = null, l.unsuspend !== null && (l.count++, $f = /* @__PURE__ */ new Map(), t.forEach(Wd, l), $f = null, bn.call(l));
  }
  function Wd(l, t) {
    if (!(t.state.loading & 4)) {
      var u = $f.get(l);
      if (u) var a = u.get(null);
      else {
        u = /* @__PURE__ */ new Map(), $f.set(l, u);
        for (var e = l.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), n = 0; n < e.length; n++) {
          var f = e[n];
          (f.nodeName === "LINK" || f.getAttribute("media") !== "not all") && (u.set(f.dataset.precedence, f), a = f);
        }
        a && u.set(null, a);
      }
      e = t.instance, f = e.getAttribute("data-precedence"), n = u.get(f) || a, n === a && u.set(null, e), u.set(f, e), this.count++, a = bn.bind(this), e.addEventListener("load", a), e.addEventListener("error", a), n ? n.parentNode.insertBefore(e, n.nextSibling) : (l = l.nodeType === 9 ? l.head : l, l.insertBefore(e, l.firstChild)), t.state.loading |= 4;
    }
  }
  var Ue = {
    $$typeof: Yl,
    Provider: null,
    Consumer: null,
    _currentValue: Qt,
    _currentValue2: Qt,
    _threadCount: 0
  };
  function Id(l, t, u, a, e, n, f, i, c) {
    this.tag = 1, this.containerInfo = l, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = ai(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ai(0), this.hiddenUpdates = ai(null), this.identifierPrefix = a, this.onUncaughtError = e, this.onCaughtError = n, this.onRecoverableError = f, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = c, this.transitionTypes = null, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Ky(l, t, u, a, e, n, f, i, c, m, g, E) {
    return l = new Id(
      l,
      t,
      u,
      f,
      c,
      m,
      g,
      E,
      i
    ), t = 1, n === !0 && (t |= 24), n = Et(3, null, null, t), l.current = n, n.stateNode = l, t = Xi(), t.refCount++, l.pooledCache = t, t.refCount++, n.memoizedState = {
      element: a,
      isDehydrated: u,
      cache: t
    }, Zi(n), l;
  }
  function Jy(l) {
    return l ? (l = te, l) : te;
  }
  function wy(l, t, u, a, e, n) {
    e = Jy(e), a.context === null ? a.context = e : a.pendingContext = e, a = Fu(t), a.payload = { element: u }, n = n === void 0 ? null : n, n !== null && (a.callback = n), u = Wu(l, a, t), u !== null && (Ot(u, l, t), ke(u, l, t));
  }
  function $y(l, t) {
    if (l = l.memoizedState, l !== null && l.dehydrated !== null) {
      var u = l.retryLane;
      l.retryLane = u !== 0 && u < t ? u : t;
    }
  }
  function O0(l, t) {
    $y(l, t), (l = l.alternate) && $y(l, t);
  }
  function Fy(l) {
    if (l.tag === 13 || l.tag === 31) {
      var t = ba(l, 67108864);
      t !== null && Ot(t, l, 67108864), O0(l, 67108864);
    }
  }
  function Wy(l) {
    if (l.tag === 13 || l.tag === 31) {
      var t = xt();
      t = ei(t);
      var u = ba(l, t);
      u !== null && Ot(u, l, t), O0(l, t);
    }
  }
  var Ce = !0;
  function kd(l, t, u, a) {
    var e = C.T;
    C.T = null;
    var n = q.p;
    try {
      q.p = 2, A0(l, t, u, a);
    } finally {
      q.p = n, C.T = e;
    }
  }
  function Pd(l, t, u, a) {
    var e = C.T;
    C.T = null;
    var n = q.p;
    try {
      q.p = 8, A0(l, t, u, a);
    } finally {
      q.p = n, C.T = e;
    }
  }
  function A0(l, t, u, a) {
    if (Ce) {
      var e = N0(a);
      if (e === null)
        f0(
          l,
          t,
          a,
          Wf,
          u
        ), ky(l, a);
      else if (th(
        e,
        l,
        t,
        u,
        a
      ))
        a.stopPropagation();
      else if (ky(l, a), t & 4 && -1 < lh.indexOf(l)) {
        for (; e !== null; ) {
          var n = La(e);
          if (n !== null)
            switch (n.tag) {
              case 3:
                if (n = n.stateNode, n.current.memoizedState.isDehydrated) {
                  var f = ra(n.pendingLanes);
                  if (f !== 0) {
                    var i = n;
                    for (i.pendingLanes |= 2, i.entangledLanes |= 2; f; ) {
                      var c = 1 << 31 - Ut(f);
                      i.entanglements[1] |= c, f &= ~c;
                    }
                    gu(n), (fl & 6) === 0 && (Bf = Ol() + 500, hn(0));
                  }
                }
                break;
              case 31:
              case 13:
                i = ba(n, 2), i !== null && Ot(i, n, 2), Xf(), O0(n, 2);
            }
          if (n = N0(a), n === null && f0(
            l,
            t,
            a,
            Wf,
            u
          ), n === e) break;
          e = n;
        }
        e !== null && a.stopPropagation();
      } else
        f0(
          l,
          t,
          a,
          null,
          u
        );
    }
  }
  function N0(l) {
    return l = si(l), M0(l);
  }
  var Wf = null;
  function M0(l) {
    if (Wf = null, l = Sa(l), l !== null) {
      var t = Ml(l);
      if (t === null) l = null;
      else {
        var u = t.tag;
        if (u === 13) {
          if (l = ut(t), l !== null) return l;
          l = null;
        } else if (u === 31) {
          if (l = gt(t), l !== null) return l;
          l = null;
        } else if (u === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          l = null;
        } else t !== l && (l = null);
      }
    }
    return Wf = l, null;
  }
  function Iy(l) {
    switch (l) {
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
        switch (da()) {
          case Xu:
            return 2;
          case nu:
            return 8;
          case Dt:
          case ha:
            return 32;
          case Qu:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var D0 = !1, ca = null, oa = null, va = null, _n = /* @__PURE__ */ new Map(), On = /* @__PURE__ */ new Map(), sa = [], lh = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function ky(l, t) {
    switch (l) {
      case "focusin":
      case "focusout":
        ca = null;
        break;
      case "dragenter":
      case "dragleave":
        oa = null;
        break;
      case "mouseover":
      case "mouseout":
        va = null;
        break;
      case "pointerover":
      case "pointerout":
        _n.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        On.delete(t.pointerId);
    }
  }
  function An(l, t, u, a, e, n) {
    return l === null || l.nativeEvent !== n ? (l = {
      blockedOn: t,
      domEventName: u,
      eventSystemFlags: a,
      nativeEvent: n,
      targetContainers: [e]
    }, t !== null && (t = La(t), t !== null && Fy(t)), l) : (l.eventSystemFlags |= a, t = l.targetContainers, e !== null && t.indexOf(e) === -1 && t.push(e), l);
  }
  function th(l, t, u, a, e) {
    switch (t) {
      case "focusin":
        return ca = An(
          ca,
          l,
          t,
          u,
          a,
          e
        ), !0;
      case "dragenter":
        return oa = An(
          oa,
          l,
          t,
          u,
          a,
          e
        ), !0;
      case "mouseover":
        return va = An(
          va,
          l,
          t,
          u,
          a,
          e
        ), !0;
      case "pointerover":
        var n = e.pointerId;
        return _n.set(
          n,
          An(
            _n.get(n) || null,
            l,
            t,
            u,
            a,
            e
          )
        ), !0;
      case "gotpointercapture":
        return n = e.pointerId, On.set(
          n,
          An(
            On.get(n) || null,
            l,
            t,
            u,
            a,
            e
          )
        ), !0;
    }
    return !1;
  }
  function Py(l) {
    var t = Sa(l.target);
    if (t !== null) {
      var u = Ml(t);
      if (u !== null) {
        if (t = u.tag, t === 13) {
          if (t = ut(u), t !== null) {
            l.blockedOn = t, L0(l.priority, function() {
              Wy(u);
            });
            return;
          }
        } else if (t === 31) {
          if (t = gt(u), t !== null) {
            l.blockedOn = t, L0(l.priority, function() {
              Wy(u);
            });
            return;
          }
        } else if (t === 3 && u.stateNode.current.memoizedState.isDehydrated) {
          l.blockedOn = u.tag === 3 ? u.stateNode.containerInfo : null;
          return;
        }
      }
    }
    l.blockedOn = null;
  }
  function If(l) {
    if (l.blockedOn !== null) return !1;
    for (var t = l.targetContainers; 0 < t.length; ) {
      var u = N0(l.nativeEvent);
      if (u === null) {
        u = l.nativeEvent;
        var a = new u.constructor(
          u.type,
          u
        );
        vi = a, u.target.dispatchEvent(a), vi = null;
      } else
        return t = La(u), t !== null && Fy(t), l.blockedOn = u, !1;
      t.shift();
    }
    return !0;
  }
  function lm(l, t, u) {
    If(l) && u.delete(t);
  }
  function uh() {
    D0 = !1, ca !== null && If(ca) && (ca = null), oa !== null && If(oa) && (oa = null), va !== null && If(va) && (va = null), _n.forEach(lm), On.forEach(lm);
  }
  function kf(l, t) {
    l.blockedOn === t && (l.blockedOn = null, D0 || (D0 = !0, N.unstable_scheduleCallback(
      N.unstable_NormalPriority,
      uh
    )));
  }
  var Pf = null;
  function tm(l) {
    Pf !== l && (Pf = l, N.unstable_scheduleCallback(
      N.unstable_NormalPriority,
      function() {
        Pf === l && (Pf = null);
        for (var t = 0; t < l.length; t += 3) {
          var u = l[t], a = l[t + 1], e = l[t + 2];
          if (typeof a != "function") {
            if (M0(a || u) === null)
              continue;
            break;
          }
          var n = La(u);
          n !== null && (l.splice(t, 3), t -= 3, oc(
            n,
            {
              pending: !0,
              data: e,
              method: u.method,
              action: a
            },
            a,
            e
          ));
        }
      }
    ));
  }
  function Re(l) {
    function t(c) {
      return kf(c, l);
    }
    ca !== null && kf(ca, l), oa !== null && kf(oa, l), va !== null && kf(va, l), _n.forEach(t), On.forEach(t);
    for (var u = 0; u < sa.length; u++) {
      var a = sa[u];
      a.blockedOn === l && (a.blockedOn = null);
    }
    for (; 0 < sa.length && (u = sa[0], u.blockedOn === null); )
      Py(u), u.blockedOn === null && sa.shift();
    if (u = (l.ownerDocument || l).$$reactFormReplay, u != null)
      for (a = 0; a < u.length; a += 3) {
        var e = u[a], n = u[a + 1], f = e[Tt] || null;
        if (typeof n == "function")
          f || tm(u);
        else if (f) {
          var i = null;
          if (n && n.hasAttribute("formAction")) {
            if (e = n, f = n[Tt] || null)
              i = f.formAction;
            else if (M0(e) !== null) continue;
          } else i = f.action;
          typeof i == "function" ? u[a + 1] = i : (u.splice(a, 3), a -= 3), tm(u);
        }
      }
  }
  function um() {
    function l(n) {
      n.canIntercept && n.info === "react-transition" && n.intercept({
        handler: function() {
          return new Promise(function(f) {
            return e = f;
          });
        },
        focusReset: "manual",
        scroll: "manual"
      });
    }
    function t() {
      e !== null && (e(), e = null), a || setTimeout(u, 20);
    }
    function u() {
      if (!a && !navigation.transition) {
        var n = navigation.currentEntry;
        n && n.url != null && navigation.navigate(n.url, {
          state: n.getState(),
          info: "react-transition",
          history: "replace"
        });
      }
    }
    if (typeof navigation == "object") {
      var a = !1, e = null;
      return navigation.addEventListener("navigate", l), navigation.addEventListener("navigatesuccess", t), navigation.addEventListener("navigateerror", t), setTimeout(u, 100), function() {
        a = !0, navigation.removeEventListener("navigate", l), navigation.removeEventListener("navigatesuccess", t), navigation.removeEventListener("navigateerror", t), e !== null && (e(), e = null);
      };
    }
  }
  function U0(l) {
    this._internalRoot = l;
  }
  li.prototype.render = U0.prototype.render = function(l) {
    var t = this._internalRoot;
    if (t === null) throw Error(r(409));
    var u = t.current, a = xt();
    wy(u, a, l, t, null, null);
  }, li.prototype.unmount = U0.prototype.unmount = function() {
    var l = this._internalRoot;
    if (l !== null) {
      this._internalRoot = null;
      var t = l.containerInfo;
      wy(l.current, 2, null, l, null, null), Xf(), t[Va] = null;
    }
  };
  function li(l) {
    this._internalRoot = l;
  }
  li.prototype.unstable_scheduleHydration = function(l) {
    if (l) {
      var t = V0();
      l = { blockedOn: null, target: l, priority: t };
      for (var u = 0; u < sa.length && t !== 0 && t < sa[u].priority; u++) ;
      sa.splice(u, 0, l), u === 0 && Py(l);
    }
  };
  var am = I.version;
  if (am !== "19.3.0")
    throw Error(
      r(
        527,
        am,
        "19.3.0"
      )
    );
  q.findDOMNode = function(l) {
    var t = l._reactInternals;
    if (t === void 0)
      throw typeof l.render == "function" ? Error(r(188)) : (l = Object.keys(l).join(","), Error(r(268, l)));
    return l = Xl(t), l = l !== null ? X(l) : null, l = l === null ? null : l.stateNode, l;
  };
  var ah = {
    bundleType: 0,
    version: "19.3.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: C,
    reconcilerVersion: "19.3.0"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var ti = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!ti.isDisabled && ti.supportsFiber)
      try {
        ga = ti.inject(
          ah
        ), ft = ti;
      } catch {
      }
  }
  return Mn.createRoot = function(l, t) {
    if (!zl(l)) throw Error(r(299));
    var u = !1, a = "", e = Jv, n = wv, f = $v;
    return t != null && (t.unstable_strictMode === !0 && (u = !0), t.identifierPrefix !== void 0 && (a = t.identifierPrefix), t.onUncaughtError !== void 0 && (e = t.onUncaughtError), t.onCaughtError !== void 0 && (n = t.onCaughtError), t.onRecoverableError !== void 0 && (f = t.onRecoverableError)), t = Ky(
      l,
      1,
      !1,
      null,
      null,
      u,
      a,
      null,
      e,
      n,
      f,
      um
    ), l[Va] = t.current, n0(l), new U0(t);
  }, Mn.hydrateRoot = function(l, t, u) {
    if (!zl(l)) throw Error(r(299));
    var a = !1, e = "", n = Jv, f = wv, i = $v, c = null;
    return u != null && (u.unstable_strictMode === !0 && (a = !0), u.identifierPrefix !== void 0 && (e = u.identifierPrefix), u.onUncaughtError !== void 0 && (n = u.onUncaughtError), u.onCaughtError !== void 0 && (f = u.onCaughtError), u.onRecoverableError !== void 0 && (i = u.onRecoverableError), u.formState !== void 0 && (c = u.formState)), t = Ky(
      l,
      1,
      !0,
      t,
      u ?? null,
      a,
      e,
      c,
      n,
      f,
      i,
      um
    ), t.context = Jy(null), u = t.current, a = xt(), a = ei(a), e = Fu(a), e.callback = null, Wu(u, e, a), u = a, t.current.lanes = u, qe(t, u), gu(t), l[Va] = t.current, n0(l), new li(t);
  }, Mn.version = "19.3.0", Mn;
}
var mm;
function mh() {
  if (mm) return H0.exports;
  mm = 1;
  function N() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(N);
      } catch (I) {
        console.error(I);
      }
  }
  return N(), H0.exports = yh(), H0.exports;
}
var dh = mh();
const Dn = (N) => {
  const I = Math.min(1, Math.max(0, N));
  return I * I * I * (I * (I * 6 - 15) + 10);
}, dm = (N) => {
  const I = Math.min(1, Math.max(0, N)) - 1;
  return 1 + I * I * (2.6 * I + 1.6);
}, hh = (N) => typeof Intl < "u" && Intl.Segmenter ? Array.from(new Intl.Segmenter(void 0, { granularity: "grapheme" }).segment(N), (I) => I.segment) : Array.from(N), gh = ({
  text: N = "Hello",
  mode: I = "stamp",
  spacing: cl = 88,
  maxPoints: r = 7,
  followMouseDirection: zl = !0,
  randomFloat: Ml = !0,
  exitDuration: ut = 0.5,
  removalInterval: gt = 30,
  shrink: _l = 0.5,
  fade: Xl = 0.6,
  smoothing: X = 0.3,
  popIn: S = !0,
  keepUpright: x = !0,
  hideCursor: Hl = !1,
  color: ct = "currentColor",
  fontSize: Zl = 28,
  fontWeight: ol = 600,
  fontFamily: ot = "inherit",
  className: vt = "",
  style: ru
}) => {
  const At = ui.useRef(null), Nt = ui.useRef(null), at = {
    spacing: cl,
    maxPoints: r,
    fontSize: Zl,
    followMouseDirection: zl,
    randomFloat: Ml,
    exitDuration: ut,
    removalInterval: gt,
    shrink: _l,
    fade: Xl,
    smoothing: X,
    popIn: S,
    keepUpright: x
  }, j = ui.useRef(at);
  j.current = at;
  const ul = I === "ribbon" ? `${cl}|${Zl}|${ol}|${ot}` : I === "chain" ? r : 0;
  return ui.useEffect(() => {
    const Ql = At.current, et = Nt.current;
    if (!Ql || !et) return;
    const rt = window.matchMedia("(prefers-reduced-motion: reduce)").matches, st = window.matchMedia("(pointer: coarse)").matches;
    if (rt || st) return;
    const Dl = I === "ribbon", eu = I === "chain", Yl = Dl ? hh(N) : [], O = [], H = [], A = [], b = { x: 0, y: 0, tx: 0, ty: 0, s: 0, live: !1, inside: !1 };
    let L = [], wl = 0, Xt = 0, Ul = 0, v = 0, z = 0, U = 0, R = 0, K = 0, k = !1;
    const P = (G) => {
      const B = O.pop() || document.createElement("span");
      return B.className = "text-cursor__item", B.textContent = G, B.style.opacity = "0", et.appendChild(B), B;
    }, C = (G) => {
      G.remove(), O.push(G);
    }, q = [];
    if (Dl)
      for (const G of Yl) q.push(P(G));
    else if (eu)
      for (let G = 0; G < Math.max(1, j.current.maxPoints); G++) q.push(P(N));
    const Qt = () => {
      if (!Dl) return;
      const G = Math.max(0, j.current.spacing);
      L = q.map((B) => B.offsetWidth + G), wl = L.reduce((B, el) => B + el, 0);
    };
    Qt(), document.fonts?.ready.then(() => {
      k || (Qt(), pt());
    });
    const pa = () => {
      const G = j.current;
      return Dl ? Xt + (L.length ? wl / L.length : 0) : Math.max(1, G.maxPoints) * Math.max(4, G.spacing);
    }, xu = (G) => {
      const B = b.s - G;
      if (A.length < 2 || B >= b.s) return { x: b.x, y: b.y, angle: Cl(b.s) };
      let el = 0, ll = A.length - 1;
      for (; ll - el > 1; ) {
        const It = el + ll >> 1;
        A[It].s <= B ? el = It : ll = It;
      }
      const rl = A[el], nl = A[ll], jt = nl.s > rl.s ? Math.min(1, Math.max(0, (B - rl.s) / (nl.s - rl.s))) : 0;
      return { x: rl.x + (nl.x - rl.x) * jt, y: rl.y + (nl.y - rl.y) * jt, angle: Cl(B) };
    }, St = (G) => {
      if (!A.length) return { x: b.x, y: b.y };
      if (G >= b.s) return { x: b.x, y: b.y };
      if (G <= A[0].s) return { x: A[0].x, y: A[0].y };
      let B = 0, el = A.length - 1;
      for (; el - B > 1; ) {
        const jt = B + el >> 1;
        A[jt].s <= G ? B = jt : el = jt;
      }
      const ll = A[B], rl = A[el], nl = rl.s > ll.s ? (G - ll.s) / (rl.s - ll.s) : 0;
      return { x: ll.x + (rl.x - ll.x) * nl, y: ll.y + (rl.y - ll.y) * nl };
    }, Cl = (G) => {
      const B = Math.max(6, j.current.spacing * 0.5), el = St(Math.min(b.s, G + B)), ll = St(G - B), rl = el.x - ll.x, nl = el.y - ll.y;
      return rl * rl + nl * nl > 0.01 ? Math.atan2(nl, rl) : 0;
    }, ml = () => {
      const G = A[A.length - 1], B = b.x - (G ? G.x : b.x), el = b.y - (G ? G.y : b.y), ll = Math.hypot(B, el);
      if (!G) {
        A.push({ x: b.x, y: b.y, s: b.s });
        return;
      }
      if (ll < 0.5) return;
      b.s += ll, A.push({ x: b.x, y: b.y, s: b.s });
      const rl = b.s - pa() - Math.max(40, j.current.spacing * 2);
      let nl = 0;
      for (; nl < A.length - 2 && A[nl + 1].s < rl; ) nl += 1;
      nl && A.splice(0, nl);
    }, Mt = (G, B, el, ll, rl, nl) => {
      G.style.transform = `translate3d(${B.toFixed(2)}px, ${el.toFixed(2)}px, 0) translate(-50%, -50%) rotate(${ll.toFixed(2)}deg) scale(${rl.toFixed(3)})`, G.style.opacity = nl.toFixed(3);
    }, Gu = (G) => {
      U = 0;
      const B = j.current, el = Math.min(0.05, (G - R) / 1e3 || 0);
      R = G, K += el;
      const ll = Math.max(4, B.spacing), rl = Math.max(0, B.smoothing) * 0.12;
      if (b.live) {
        const pl = rl > 0 ? 1 - Math.exp(-el / rl) : 1;
        b.x += (b.tx - b.x) * pl, b.y += (b.ty - b.y) * pl, ml();
      }
      const nl = !b.inside || G - z > 100;
      if (Dl) {
        let pl = 0;
        for (let $l = 0; $l < q.length; $l++)
          pl += (L[q.length - 1 - $l] || 0) * (1 - B.shrink * (pl / Math.max(1, wl)));
        Xt = pl;
      }
      const jt = pa();
      if (Ul = Math.max(Ul, b.s - jt), nl && b.live) {
        const pl = Dl && L.length ? wl / L.length : ll;
        Ul += pl / Math.max(5e-3, B.removalInterval / 1e3) * el;
      }
      Ul >= b.s && !b.inside && (b.live = !1), Ul = Math.min(Ul, b.s);
      const It = B.randomFloat, He = B.popIn;
      let ja = b.live && (!nl || Ul < b.s);
      if (!Dl && !eu) {
        for (; b.live && v <= b.s; ) {
          if (v >= Ul) {
            const nt = St(v);
            let dl = B.followMouseDirection ? Cl(v) * 180 / Math.PI : 0;
            B.keepUpright && Math.abs(dl) > 90 && (dl -= Math.sign(dl) * 180), H.push({
              element: P(N),
              x: nt.x,
              y: nt.y,
              s: v,
              angle: dl,
              born: G,
              died: 0,
              seed: Math.random() * Math.PI * 2
            });
          }
          v += ll;
        }
        const pl = Math.max(1, B.maxPoints);
        let $l = 0;
        for (let nt = H.length - 1; nt >= 0; nt--) {
          const dl = H[nt];
          !dl.died && (dl.s < Ul || $l >= pl) && (dl.died = G), dl.died || ($l += 1);
        }
        let Tu = 0;
        for (let nt = H.length - 1; nt >= 0; nt--) {
          const dl = H[nt], Ol = (G - dl.born) / 1e3, da = Math.min(1, Tu / Math.max(1, pl - 1));
          dl.died || (Tu += 1);
          let Xu = (1 - B.shrink * da) * (He ? dm(Ol / 0.42) : 1), nu = (1 - B.fade * da) * (He ? Dn(Ol / 0.12) : 1);
          if (dl.died) {
            const Eu = (G - dl.died) / 1e3 / Math.max(0.05, B.exitDuration);
            if (Eu >= 1) {
              C(dl.element), H.splice(nt, 1);
              continue;
            }
            const Za = Dn(Eu);
            Xu *= 1 - 0.55 * Za, nu *= 1 - Za;
          }
          let Dt = dl.x, ha = dl.y, Qu = dl.angle;
          if (It) {
            const Eu = Dn(Ol / 0.6) * B.fontSize * 0.14;
            Dt += Math.sin(K * 1.3 + dl.seed) * Eu, ha += Math.cos(K * 1.1 + dl.seed * 1.7) * Eu, Qu += Math.sin(K * 0.9 + dl.seed * 2.3) * 6 * Dn(Ol / 0.6);
          }
          Mt(dl.element, Dt, ha, Qu, Math.max(0, Xu), Math.max(0, nu));
        }
        H.length && (ja = !0);
      } else {
        let pl = 0;
        for (let $l = 0; $l < q.length; $l++) {
          const Tu = Dl ? q.length - 1 - $l : $l, nt = q[Tu], dl = Dl ? pl / Math.max(1, wl) : $l / Math.max(1, q.length - 1), Ol = Dl ? (L[Tu] || 0) * (1 - B.shrink * dl) : ll, da = Dl ? pl + Ol / 2 : $l * ll;
          pl += Ol;
          const Xu = b.s - da, nu = b.live ? Dn((Xu - Ul) / Math.max(4, Dl ? Ol : ll)) : 0;
          if (nu <= 1e-3) {
            nt.style.opacity = "0";
            continue;
          }
          const Dt = xu(da);
          let ha = Dt.x, Qu = Dt.y;
          if (It) {
            const ft = Math.sin(Xu / Math.max(30, B.fontSize * 2.2) - K * 3.2) * B.fontSize * 0.12;
            ha += -Math.sin(Dt.angle) * ft, Qu += Math.cos(Dt.angle) * ft;
          }
          const Eu = B.followMouseDirection ? Dt.angle * 180 / Math.PI : 0, Za = (1 - B.shrink * dl) * (He ? dm(nu) : nu), ga = (1 - B.fade * dl) * Math.min(1, nu * 1.6);
          Mt(nt, ha, Qu, Eu, Math.max(0, Za), Math.max(0, ga));
        }
        b.live && (ja = !0);
      }
      !b.live && !H.length && (A.length = 0, b.s = 0, Ul = 0, v = 0), (ja || It && H.length) && (U = requestAnimationFrame(Gu));
    }, pt = () => {
      U || (R = performance.now(), U = requestAnimationFrame(Gu));
    }, Su = (G) => {
      const B = Ql.getBoundingClientRect(), el = G.clientX - B.left, ll = G.clientY - B.top;
      b.live ? b.inside || (A.push({ x: el, y: ll, s: b.s }), Ul = b.s, v = b.s) : (b.s = 0, A.length = 0, Ul = 0, v = 0), (!b.live || !b.inside) && (b.x = el, b.y = ll, b.live = !0), b.tx = el, b.ty = ll, b.inside = !0, z = performance.now(), pt();
    }, ma = () => {
      b.inside = !1, pt();
    };
    return Ql.addEventListener("pointermove", Su), Ql.addEventListener("pointerdown", Su), Ql.addEventListener("pointerleave", ma), () => {
      k = !0, cancelAnimationFrame(U), Ql.removeEventListener("pointermove", Su), Ql.removeEventListener("pointerdown", Su), Ql.removeEventListener("pointerleave", ma), et.replaceChildren();
    };
  }, [I, N, ul]), /* @__PURE__ */ x0.jsx(
    "div",
    {
      ref: At,
      className: `text-cursor ${vt}`.trim(),
      style: { cursor: Hl ? "none" : void 0, ...ru },
      children: /* @__PURE__ */ x0.jsx(
        "div",
        {
          ref: Nt,
          className: "text-cursor__layer",
          "aria-hidden": "true",
          style: { color: ct, fontSize: Zl, fontWeight: ol, fontFamily: ot }
        }
      )
    }
  );
}, hm = document.getElementById("board-text-cursor-root");
hm && dh.createRoot(hm).render(
  /* @__PURE__ */ x0.jsx(
    gh,
    {
      text: "Scroll Down",
      mode: "stamp",
      fontSize: 25,
      spacing: 150,
      maxPoints: 4,
      shrink: 0.5,
      fade: 0.6,
      smoothing: 0.3,
      exitDuration: 0.5,
      removalInterval: 30,
      followMouseDirection: !0,
      keepUpright: !0,
      randomFloat: !0,
      popIn: !0,
      hideCursor: !0
    }
  )
);
