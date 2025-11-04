var hE = { exports: {} }, Jp = {}, mE = { exports: {} }, gt = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ZR;
function ak() {
  if (ZR) return gt;
  ZR = 1;
  var Q = Symbol.for("react.element"), F = Symbol.for("react.portal"), _ = Symbol.for("react.fragment"), Oe = Symbol.for("react.strict_mode"), qe = Symbol.for("react.profiler"), be = Symbol.for("react.provider"), S = Symbol.for("react.context"), pt = Symbol.for("react.forward_ref"), ue = Symbol.for("react.suspense"), oe = Symbol.for("react.memo"), st = Symbol.for("react.lazy"), ee = Symbol.iterator;
  function Ce(k) {
    return k === null || typeof k != "object" ? null : (k = ee && k[ee] || k["@@iterator"], typeof k == "function" ? k : null);
  }
  var se = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, Qe = Object.assign, St = {};
  function ht(k, V, Pe) {
    this.props = k, this.context = V, this.refs = St, this.updater = Pe || se;
  }
  ht.prototype.isReactComponent = {}, ht.prototype.setState = function(k, V) {
    if (typeof k != "object" && typeof k != "function" && k != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, k, V, "setState");
  }, ht.prototype.forceUpdate = function(k) {
    this.updater.enqueueForceUpdate(this, k, "forceUpdate");
  };
  function cn() {
  }
  cn.prototype = ht.prototype;
  function vt(k, V, Pe) {
    this.props = k, this.context = V, this.refs = St, this.updater = Pe || se;
  }
  var We = vt.prototype = new cn();
  We.constructor = vt, Qe(We, ht.prototype), We.isPureReactComponent = !0;
  var mt = Array.isArray, _e = Object.prototype.hasOwnProperty, ct = { current: null }, He = { key: !0, ref: !0, __self: !0, __source: !0 };
  function rn(k, V, Pe) {
    var Fe, it = {}, tt = null, Ze = null;
    if (V != null) for (Fe in V.ref !== void 0 && (Ze = V.ref), V.key !== void 0 && (tt = "" + V.key), V) _e.call(V, Fe) && !He.hasOwnProperty(Fe) && (it[Fe] = V[Fe]);
    var nt = arguments.length - 2;
    if (nt === 1) it.children = Pe;
    else if (1 < nt) {
      for (var lt = Array(nt), Vt = 0; Vt < nt; Vt++) lt[Vt] = arguments[Vt + 2];
      it.children = lt;
    }
    if (k && k.defaultProps) for (Fe in nt = k.defaultProps, nt) it[Fe] === void 0 && (it[Fe] = nt[Fe]);
    return { $$typeof: Q, type: k, key: tt, ref: Ze, props: it, _owner: ct.current };
  }
  function jt(k, V) {
    return { $$typeof: Q, type: k.type, key: V, ref: k.ref, props: k.props, _owner: k._owner };
  }
  function Xt(k) {
    return typeof k == "object" && k !== null && k.$$typeof === Q;
  }
  function an(k) {
    var V = { "=": "=0", ":": "=2" };
    return "$" + k.replace(/[=:]/g, function(Pe) {
      return V[Pe];
    });
  }
  var xt = /\/+/g;
  function Le(k, V) {
    return typeof k == "object" && k !== null && k.key != null ? an("" + k.key) : V.toString(36);
  }
  function At(k, V, Pe, Fe, it) {
    var tt = typeof k;
    (tt === "undefined" || tt === "boolean") && (k = null);
    var Ze = !1;
    if (k === null) Ze = !0;
    else switch (tt) {
      case "string":
      case "number":
        Ze = !0;
        break;
      case "object":
        switch (k.$$typeof) {
          case Q:
          case F:
            Ze = !0;
        }
    }
    if (Ze) return Ze = k, it = it(Ze), k = Fe === "" ? "." + Le(Ze, 0) : Fe, mt(it) ? (Pe = "", k != null && (Pe = k.replace(xt, "$&/") + "/"), At(it, V, Pe, "", function(Vt) {
      return Vt;
    })) : it != null && (Xt(it) && (it = jt(it, Pe + (!it.key || Ze && Ze.key === it.key ? "" : ("" + it.key).replace(xt, "$&/") + "/") + k)), V.push(it)), 1;
    if (Ze = 0, Fe = Fe === "" ? "." : Fe + ":", mt(k)) for (var nt = 0; nt < k.length; nt++) {
      tt = k[nt];
      var lt = Fe + Le(tt, nt);
      Ze += At(tt, V, Pe, lt, it);
    }
    else if (lt = Ce(k), typeof lt == "function") for (k = lt.call(k), nt = 0; !(tt = k.next()).done; ) tt = tt.value, lt = Fe + Le(tt, nt++), Ze += At(tt, V, Pe, lt, it);
    else if (tt === "object") throw V = String(k), Error("Objects are not valid as a React child (found: " + (V === "[object Object]" ? "object with keys {" + Object.keys(k).join(", ") + "}" : V) + "). If you meant to render a collection of children, use an array instead.");
    return Ze;
  }
  function _t(k, V, Pe) {
    if (k == null) return k;
    var Fe = [], it = 0;
    return At(k, Fe, "", "", function(tt) {
      return V.call(Pe, tt, it++);
    }), Fe;
  }
  function Dt(k) {
    if (k._status === -1) {
      var V = k._result;
      V = V(), V.then(function(Pe) {
        (k._status === 0 || k._status === -1) && (k._status = 1, k._result = Pe);
      }, function(Pe) {
        (k._status === 0 || k._status === -1) && (k._status = 2, k._result = Pe);
      }), k._status === -1 && (k._status = 0, k._result = V);
    }
    if (k._status === 1) return k._result.default;
    throw k._result;
  }
  var Ee = { current: null }, J = { transition: null }, Re = { ReactCurrentDispatcher: Ee, ReactCurrentBatchConfig: J, ReactCurrentOwner: ct };
  function ne() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return gt.Children = { map: _t, forEach: function(k, V, Pe) {
    _t(k, function() {
      V.apply(this, arguments);
    }, Pe);
  }, count: function(k) {
    var V = 0;
    return _t(k, function() {
      V++;
    }), V;
  }, toArray: function(k) {
    return _t(k, function(V) {
      return V;
    }) || [];
  }, only: function(k) {
    if (!Xt(k)) throw Error("React.Children.only expected to receive a single React element child.");
    return k;
  } }, gt.Component = ht, gt.Fragment = _, gt.Profiler = qe, gt.PureComponent = vt, gt.StrictMode = Oe, gt.Suspense = ue, gt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Re, gt.act = ne, gt.cloneElement = function(k, V, Pe) {
    if (k == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + k + ".");
    var Fe = Qe({}, k.props), it = k.key, tt = k.ref, Ze = k._owner;
    if (V != null) {
      if (V.ref !== void 0 && (tt = V.ref, Ze = ct.current), V.key !== void 0 && (it = "" + V.key), k.type && k.type.defaultProps) var nt = k.type.defaultProps;
      for (lt in V) _e.call(V, lt) && !He.hasOwnProperty(lt) && (Fe[lt] = V[lt] === void 0 && nt !== void 0 ? nt[lt] : V[lt]);
    }
    var lt = arguments.length - 2;
    if (lt === 1) Fe.children = Pe;
    else if (1 < lt) {
      nt = Array(lt);
      for (var Vt = 0; Vt < lt; Vt++) nt[Vt] = arguments[Vt + 2];
      Fe.children = nt;
    }
    return { $$typeof: Q, type: k.type, key: it, ref: tt, props: Fe, _owner: Ze };
  }, gt.createContext = function(k) {
    return k = { $$typeof: S, _currentValue: k, _currentValue2: k, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, k.Provider = { $$typeof: be, _context: k }, k.Consumer = k;
  }, gt.createElement = rn, gt.createFactory = function(k) {
    var V = rn.bind(null, k);
    return V.type = k, V;
  }, gt.createRef = function() {
    return { current: null };
  }, gt.forwardRef = function(k) {
    return { $$typeof: pt, render: k };
  }, gt.isValidElement = Xt, gt.lazy = function(k) {
    return { $$typeof: st, _payload: { _status: -1, _result: k }, _init: Dt };
  }, gt.memo = function(k, V) {
    return { $$typeof: oe, type: k, compare: V === void 0 ? null : V };
  }, gt.startTransition = function(k) {
    var V = J.transition;
    J.transition = {};
    try {
      k();
    } finally {
      J.transition = V;
    }
  }, gt.unstable_act = ne, gt.useCallback = function(k, V) {
    return Ee.current.useCallback(k, V);
  }, gt.useContext = function(k) {
    return Ee.current.useContext(k);
  }, gt.useDebugValue = function() {
  }, gt.useDeferredValue = function(k) {
    return Ee.current.useDeferredValue(k);
  }, gt.useEffect = function(k, V) {
    return Ee.current.useEffect(k, V);
  }, gt.useId = function() {
    return Ee.current.useId();
  }, gt.useImperativeHandle = function(k, V, Pe) {
    return Ee.current.useImperativeHandle(k, V, Pe);
  }, gt.useInsertionEffect = function(k, V) {
    return Ee.current.useInsertionEffect(k, V);
  }, gt.useLayoutEffect = function(k, V) {
    return Ee.current.useLayoutEffect(k, V);
  }, gt.useMemo = function(k, V) {
    return Ee.current.useMemo(k, V);
  }, gt.useReducer = function(k, V, Pe) {
    return Ee.current.useReducer(k, V, Pe);
  }, gt.useRef = function(k) {
    return Ee.current.useRef(k);
  }, gt.useState = function(k) {
    return Ee.current.useState(k);
  }, gt.useSyncExternalStore = function(k, V, Pe) {
    return Ee.current.useSyncExternalStore(k, V, Pe);
  }, gt.useTransition = function() {
    return Ee.current.useTransition();
  }, gt.version = "18.3.1", gt;
}
var ev = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
ev.exports;
var eT;
function ik() {
  return eT || (eT = 1, function(Q, F) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ != "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var _ = "18.3.1", Oe = Symbol.for("react.element"), qe = Symbol.for("react.portal"), be = Symbol.for("react.fragment"), S = Symbol.for("react.strict_mode"), pt = Symbol.for("react.profiler"), ue = Symbol.for("react.provider"), oe = Symbol.for("react.context"), st = Symbol.for("react.forward_ref"), ee = Symbol.for("react.suspense"), Ce = Symbol.for("react.suspense_list"), se = Symbol.for("react.memo"), Qe = Symbol.for("react.lazy"), St = Symbol.for("react.offscreen"), ht = Symbol.iterator, cn = "@@iterator";
      function vt(h) {
        if (h === null || typeof h != "object")
          return null;
        var C = ht && h[ht] || h[cn];
        return typeof C == "function" ? C : null;
      }
      var We = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, mt = {
        transition: null
      }, _e = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, ct = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, He = {}, rn = null;
      function jt(h) {
        rn = h;
      }
      He.setExtraStackFrame = function(h) {
        rn = h;
      }, He.getCurrentStack = null, He.getStackAddendum = function() {
        var h = "";
        rn && (h += rn);
        var C = He.getCurrentStack;
        return C && (h += C() || ""), h;
      };
      var Xt = !1, an = !1, xt = !1, Le = !1, At = !1, _t = {
        ReactCurrentDispatcher: We,
        ReactCurrentBatchConfig: mt,
        ReactCurrentOwner: ct
      };
      _t.ReactDebugCurrentFrame = He, _t.ReactCurrentActQueue = _e;
      function Dt(h) {
        {
          for (var C = arguments.length, z = new Array(C > 1 ? C - 1 : 0), j = 1; j < C; j++)
            z[j - 1] = arguments[j];
          J("warn", h, z);
        }
      }
      function Ee(h) {
        {
          for (var C = arguments.length, z = new Array(C > 1 ? C - 1 : 0), j = 1; j < C; j++)
            z[j - 1] = arguments[j];
          J("error", h, z);
        }
      }
      function J(h, C, z) {
        {
          var j = _t.ReactDebugCurrentFrame, X = j.getStackAddendum();
          X !== "" && (C += "%s", z = z.concat([X]));
          var Me = z.map(function(re) {
            return String(re);
          });
          Me.unshift("Warning: " + C), Function.prototype.apply.call(console[h], console, Me);
        }
      }
      var Re = {};
      function ne(h, C) {
        {
          var z = h.constructor, j = z && (z.displayName || z.name) || "ReactClass", X = j + "." + C;
          if (Re[X])
            return;
          Ee("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", C, j), Re[X] = !0;
        }
      }
      var k = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function(h) {
          return !1;
        },
        /**
         * Forces an update. This should only be invoked when it is known with
         * certainty that we are **not** in a DOM transaction.
         *
         * You may want to call this when you know that some deeper aspect of the
         * component's state has changed but `setState` was not called.
         *
         * This will not invoke `shouldComponentUpdate`, but it will invoke
         * `componentWillUpdate` and `componentDidUpdate`.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueForceUpdate: function(h, C, z) {
          ne(h, "forceUpdate");
        },
        /**
         * Replaces all of the state. Always use this or `setState` to mutate state.
         * You should treat `this.state` as immutable.
         *
         * There is no guarantee that `this.state` will be immediately updated, so
         * accessing `this.state` after calling this method may return the old value.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} completeState Next state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueReplaceState: function(h, C, z, j) {
          ne(h, "replaceState");
        },
        /**
         * Sets a subset of the state. This only exists because _pendingState is
         * internal. This provides a merging strategy that is not available to deep
         * properties which is confusing. TODO: Expose pendingState or don't use it
         * during the merge.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} partialState Next partial state to be merged with state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} Name of the calling function in the public API.
         * @internal
         */
        enqueueSetState: function(h, C, z, j) {
          ne(h, "setState");
        }
      }, V = Object.assign, Pe = {};
      Object.freeze(Pe);
      function Fe(h, C, z) {
        this.props = h, this.context = C, this.refs = Pe, this.updater = z || k;
      }
      Fe.prototype.isReactComponent = {}, Fe.prototype.setState = function(h, C) {
        if (typeof h != "object" && typeof h != "function" && h != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, h, C, "setState");
      }, Fe.prototype.forceUpdate = function(h) {
        this.updater.enqueueForceUpdate(this, h, "forceUpdate");
      };
      {
        var it = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, tt = function(h, C) {
          Object.defineProperty(Fe.prototype, h, {
            get: function() {
              Dt("%s(...) is deprecated in plain JavaScript React classes. %s", C[0], C[1]);
            }
          });
        };
        for (var Ze in it)
          it.hasOwnProperty(Ze) && tt(Ze, it[Ze]);
      }
      function nt() {
      }
      nt.prototype = Fe.prototype;
      function lt(h, C, z) {
        this.props = h, this.context = C, this.refs = Pe, this.updater = z || k;
      }
      var Vt = lt.prototype = new nt();
      Vt.constructor = lt, V(Vt, Fe.prototype), Vt.isPureReactComponent = !0;
      function Dn() {
        var h = {
          current: null
        };
        return Object.seal(h), h;
      }
      var br = Array.isArray;
      function En(h) {
        return br(h);
      }
      function nr(h) {
        {
          var C = typeof Symbol == "function" && Symbol.toStringTag, z = C && h[Symbol.toStringTag] || h.constructor.name || "Object";
          return z;
        }
      }
      function Pn(h) {
        try {
          return Vn(h), !1;
        } catch {
          return !0;
        }
      }
      function Vn(h) {
        return "" + h;
      }
      function Ir(h) {
        if (Pn(h))
          return Ee("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", nr(h)), Vn(h);
      }
      function si(h, C, z) {
        var j = h.displayName;
        if (j)
          return j;
        var X = C.displayName || C.name || "";
        return X !== "" ? z + "(" + X + ")" : z;
      }
      function oa(h) {
        return h.displayName || "Context";
      }
      function Gn(h) {
        if (h == null)
          return null;
        if (typeof h.tag == "number" && Ee("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof h == "function")
          return h.displayName || h.name || null;
        if (typeof h == "string")
          return h;
        switch (h) {
          case be:
            return "Fragment";
          case qe:
            return "Portal";
          case pt:
            return "Profiler";
          case S:
            return "StrictMode";
          case ee:
            return "Suspense";
          case Ce:
            return "SuspenseList";
        }
        if (typeof h == "object")
          switch (h.$$typeof) {
            case oe:
              var C = h;
              return oa(C) + ".Consumer";
            case ue:
              var z = h;
              return oa(z._context) + ".Provider";
            case st:
              return si(h, h.render, "ForwardRef");
            case se:
              var j = h.displayName || null;
              return j !== null ? j : Gn(h.type) || "Memo";
            case Qe: {
              var X = h, Me = X._payload, re = X._init;
              try {
                return Gn(re(Me));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var Cn = Object.prototype.hasOwnProperty, Bn = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, gr, Ia, On;
      On = {};
      function Sr(h) {
        if (Cn.call(h, "ref")) {
          var C = Object.getOwnPropertyDescriptor(h, "ref").get;
          if (C && C.isReactWarning)
            return !1;
        }
        return h.ref !== void 0;
      }
      function sa(h) {
        if (Cn.call(h, "key")) {
          var C = Object.getOwnPropertyDescriptor(h, "key").get;
          if (C && C.isReactWarning)
            return !1;
        }
        return h.key !== void 0;
      }
      function Ya(h, C) {
        var z = function() {
          gr || (gr = !0, Ee("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", C));
        };
        z.isReactWarning = !0, Object.defineProperty(h, "key", {
          get: z,
          configurable: !0
        });
      }
      function ci(h, C) {
        var z = function() {
          Ia || (Ia = !0, Ee("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", C));
        };
        z.isReactWarning = !0, Object.defineProperty(h, "ref", {
          get: z,
          configurable: !0
        });
      }
      function Z(h) {
        if (typeof h.ref == "string" && ct.current && h.__self && ct.current.stateNode !== h.__self) {
          var C = Gn(ct.current.type);
          On[C] || (Ee('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', C, h.ref), On[C] = !0);
        }
      }
      var Te = function(h, C, z, j, X, Me, re) {
        var Ue = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: Oe,
          // Built-in properties that belong on the element
          type: h,
          key: C,
          ref: z,
          props: re,
          // Record the component responsible for creating this element.
          _owner: Me
        };
        return Ue._store = {}, Object.defineProperty(Ue._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(Ue, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: j
        }), Object.defineProperty(Ue, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: X
        }), Object.freeze && (Object.freeze(Ue.props), Object.freeze(Ue)), Ue;
      };
      function rt(h, C, z) {
        var j, X = {}, Me = null, re = null, Ue = null, dt = null;
        if (C != null) {
          Sr(C) && (re = C.ref, Z(C)), sa(C) && (Ir(C.key), Me = "" + C.key), Ue = C.__self === void 0 ? null : C.__self, dt = C.__source === void 0 ? null : C.__source;
          for (j in C)
            Cn.call(C, j) && !Bn.hasOwnProperty(j) && (X[j] = C[j]);
        }
        var bt = arguments.length - 2;
        if (bt === 1)
          X.children = z;
        else if (bt > 1) {
          for (var tn = Array(bt), Yt = 0; Yt < bt; Yt++)
            tn[Yt] = arguments[Yt + 2];
          Object.freeze && Object.freeze(tn), X.children = tn;
        }
        if (h && h.defaultProps) {
          var at = h.defaultProps;
          for (j in at)
            X[j] === void 0 && (X[j] = at[j]);
        }
        if (Me || re) {
          var Qt = typeof h == "function" ? h.displayName || h.name || "Unknown" : h;
          Me && Ya(X, Qt), re && ci(X, Qt);
        }
        return Te(h, Me, re, Ue, dt, ct.current, X);
      }
      function Ft(h, C) {
        var z = Te(h.type, C, h.ref, h._self, h._source, h._owner, h.props);
        return z;
      }
      function Jt(h, C, z) {
        if (h == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + h + ".");
        var j, X = V({}, h.props), Me = h.key, re = h.ref, Ue = h._self, dt = h._source, bt = h._owner;
        if (C != null) {
          Sr(C) && (re = C.ref, bt = ct.current), sa(C) && (Ir(C.key), Me = "" + C.key);
          var tn;
          h.type && h.type.defaultProps && (tn = h.type.defaultProps);
          for (j in C)
            Cn.call(C, j) && !Bn.hasOwnProperty(j) && (C[j] === void 0 && tn !== void 0 ? X[j] = tn[j] : X[j] = C[j]);
        }
        var Yt = arguments.length - 2;
        if (Yt === 1)
          X.children = z;
        else if (Yt > 1) {
          for (var at = Array(Yt), Qt = 0; Qt < Yt; Qt++)
            at[Qt] = arguments[Qt + 2];
          X.children = at;
        }
        return Te(h.type, Me, re, Ue, dt, bt, X);
      }
      function pn(h) {
        return typeof h == "object" && h !== null && h.$$typeof === Oe;
      }
      var ln = ".", qn = ":";
      function Zt(h) {
        var C = /[=:]/g, z = {
          "=": "=0",
          ":": "=2"
        }, j = h.replace(C, function(X) {
          return z[X];
        });
        return "$" + j;
      }
      var Bt = !1, $t = /\/+/g;
      function ca(h) {
        return h.replace($t, "$&/");
      }
      function Er(h, C) {
        return typeof h == "object" && h !== null && h.key != null ? (Ir(h.key), Zt("" + h.key)) : C.toString(36);
      }
      function Ta(h, C, z, j, X) {
        var Me = typeof h;
        (Me === "undefined" || Me === "boolean") && (h = null);
        var re = !1;
        if (h === null)
          re = !0;
        else
          switch (Me) {
            case "string":
            case "number":
              re = !0;
              break;
            case "object":
              switch (h.$$typeof) {
                case Oe:
                case qe:
                  re = !0;
              }
          }
        if (re) {
          var Ue = h, dt = X(Ue), bt = j === "" ? ln + Er(Ue, 0) : j;
          if (En(dt)) {
            var tn = "";
            bt != null && (tn = ca(bt) + "/"), Ta(dt, C, tn, "", function(Kf) {
              return Kf;
            });
          } else dt != null && (pn(dt) && (dt.key && (!Ue || Ue.key !== dt.key) && Ir(dt.key), dt = Ft(
            dt,
            // Keep both the (mapped) and old keys if they differ, just as
            // traverseAllChildren used to do for objects as children
            z + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
            (dt.key && (!Ue || Ue.key !== dt.key) ? (
              // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
              // eslint-disable-next-line react-internal/safe-string-coercion
              ca("" + dt.key) + "/"
            ) : "") + bt
          )), C.push(dt));
          return 1;
        }
        var Yt, at, Qt = 0, vn = j === "" ? ln : j + qn;
        if (En(h))
          for (var Cl = 0; Cl < h.length; Cl++)
            Yt = h[Cl], at = vn + Er(Yt, Cl), Qt += Ta(Yt, C, z, at, X);
        else {
          var qo = vt(h);
          if (typeof qo == "function") {
            var Vi = h;
            qo === Vi.entries && (Bt || Dt("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Bt = !0);
            for (var Ko = qo.call(Vi), ou, qf = 0; !(ou = Ko.next()).done; )
              Yt = ou.value, at = vn + Er(Yt, qf++), Qt += Ta(Yt, C, z, at, X);
          } else if (Me === "object") {
            var oc = String(h);
            throw new Error("Objects are not valid as a React child (found: " + (oc === "[object Object]" ? "object with keys {" + Object.keys(h).join(", ") + "}" : oc) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return Qt;
      }
      function ji(h, C, z) {
        if (h == null)
          return h;
        var j = [], X = 0;
        return Ta(h, j, "", "", function(Me) {
          return C.call(z, Me, X++);
        }), j;
      }
      function Zl(h) {
        var C = 0;
        return ji(h, function() {
          C++;
        }), C;
      }
      function eu(h, C, z) {
        ji(h, function() {
          C.apply(this, arguments);
        }, z);
      }
      function dl(h) {
        return ji(h, function(C) {
          return C;
        }) || [];
      }
      function pl(h) {
        if (!pn(h))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return h;
      }
      function tu(h) {
        var C = {
          $$typeof: oe,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: h,
          _currentValue2: h,
          // Used to track how many concurrent renderers this context currently
          // supports within in a single renderer. Such as parallel server rendering.
          _threadCount: 0,
          // These are circular
          Provider: null,
          Consumer: null,
          // Add these to use same hidden class in VM as ServerContext
          _defaultValue: null,
          _globalName: null
        };
        C.Provider = {
          $$typeof: ue,
          _context: C
        };
        var z = !1, j = !1, X = !1;
        {
          var Me = {
            $$typeof: oe,
            _context: C
          };
          Object.defineProperties(Me, {
            Provider: {
              get: function() {
                return j || (j = !0, Ee("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), C.Provider;
              },
              set: function(re) {
                C.Provider = re;
              }
            },
            _currentValue: {
              get: function() {
                return C._currentValue;
              },
              set: function(re) {
                C._currentValue = re;
              }
            },
            _currentValue2: {
              get: function() {
                return C._currentValue2;
              },
              set: function(re) {
                C._currentValue2 = re;
              }
            },
            _threadCount: {
              get: function() {
                return C._threadCount;
              },
              set: function(re) {
                C._threadCount = re;
              }
            },
            Consumer: {
              get: function() {
                return z || (z = !0, Ee("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), C.Consumer;
              }
            },
            displayName: {
              get: function() {
                return C.displayName;
              },
              set: function(re) {
                X || (Dt("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", re), X = !0);
              }
            }
          }), C.Consumer = Me;
        }
        return C._currentRenderer = null, C._currentRenderer2 = null, C;
      }
      var xr = -1, _r = 0, rr = 1, fi = 2;
      function Qa(h) {
        if (h._status === xr) {
          var C = h._result, z = C();
          if (z.then(function(Me) {
            if (h._status === _r || h._status === xr) {
              var re = h;
              re._status = rr, re._result = Me;
            }
          }, function(Me) {
            if (h._status === _r || h._status === xr) {
              var re = h;
              re._status = fi, re._result = Me;
            }
          }), h._status === xr) {
            var j = h;
            j._status = _r, j._result = z;
          }
        }
        if (h._status === rr) {
          var X = h._result;
          return X === void 0 && Ee(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, X), "default" in X || Ee(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, X), X.default;
        } else
          throw h._result;
      }
      function di(h) {
        var C = {
          // We use these fields to store the result.
          _status: xr,
          _result: h
        }, z = {
          $$typeof: Qe,
          _payload: C,
          _init: Qa
        };
        {
          var j, X;
          Object.defineProperties(z, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return j;
              },
              set: function(Me) {
                Ee("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), j = Me, Object.defineProperty(z, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return X;
              },
              set: function(Me) {
                Ee("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), X = Me, Object.defineProperty(z, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return z;
      }
      function pi(h) {
        h != null && h.$$typeof === se ? Ee("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof h != "function" ? Ee("forwardRef requires a render function but was given %s.", h === null ? "null" : typeof h) : h.length !== 0 && h.length !== 2 && Ee("forwardRef render functions accept exactly two parameters: props and ref. %s", h.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), h != null && (h.defaultProps != null || h.propTypes != null) && Ee("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var C = {
          $$typeof: st,
          render: h
        };
        {
          var z;
          Object.defineProperty(C, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return z;
            },
            set: function(j) {
              z = j, !h.name && !h.displayName && (h.displayName = j);
            }
          });
        }
        return C;
      }
      var R;
      R = Symbol.for("react.module.reference");
      function $(h) {
        return !!(typeof h == "string" || typeof h == "function" || h === be || h === pt || At || h === S || h === ee || h === Ce || Le || h === St || Xt || an || xt || typeof h == "object" && h !== null && (h.$$typeof === Qe || h.$$typeof === se || h.$$typeof === ue || h.$$typeof === oe || h.$$typeof === st || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        h.$$typeof === R || h.getModuleId !== void 0));
      }
      function ae(h, C) {
        $(h) || Ee("memo: The first argument must be a component. Instead received: %s", h === null ? "null" : typeof h);
        var z = {
          $$typeof: se,
          type: h,
          compare: C === void 0 ? null : C
        };
        {
          var j;
          Object.defineProperty(z, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return j;
            },
            set: function(X) {
              j = X, !h.name && !h.displayName && (h.displayName = X);
            }
          });
        }
        return z;
      }
      function he() {
        var h = We.current;
        return h === null && Ee(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), h;
      }
      function Ke(h) {
        var C = he();
        if (h._context !== void 0) {
          var z = h._context;
          z.Consumer === h ? Ee("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : z.Provider === h && Ee("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return C.useContext(h);
      }
      function Ie(h) {
        var C = he();
        return C.useState(h);
      }
      function ft(h, C, z) {
        var j = he();
        return j.useReducer(h, C, z);
      }
      function ut(h) {
        var C = he();
        return C.useRef(h);
      }
      function Rn(h, C) {
        var z = he();
        return z.useEffect(h, C);
      }
      function en(h, C) {
        var z = he();
        return z.useInsertionEffect(h, C);
      }
      function un(h, C) {
        var z = he();
        return z.useLayoutEffect(h, C);
      }
      function ar(h, C) {
        var z = he();
        return z.useCallback(h, C);
      }
      function Wa(h, C) {
        var z = he();
        return z.useMemo(h, C);
      }
      function Ga(h, C, z) {
        var j = he();
        return j.useImperativeHandle(h, C, z);
      }
      function Xe(h, C) {
        {
          var z = he();
          return z.useDebugValue(h, C);
        }
      }
      function et() {
        var h = he();
        return h.useTransition();
      }
      function qa(h) {
        var C = he();
        return C.useDeferredValue(h);
      }
      function nu() {
        var h = he();
        return h.useId();
      }
      function ru(h, C, z) {
        var j = he();
        return j.useSyncExternalStore(h, C, z);
      }
      var vl = 0, Wu, hl, Yr, Yo, kr, lc, uc;
      function Gu() {
      }
      Gu.__reactDisabledLog = !0;
      function ml() {
        {
          if (vl === 0) {
            Wu = console.log, hl = console.info, Yr = console.warn, Yo = console.error, kr = console.group, lc = console.groupCollapsed, uc = console.groupEnd;
            var h = {
              configurable: !0,
              enumerable: !0,
              value: Gu,
              writable: !0
            };
            Object.defineProperties(console, {
              info: h,
              log: h,
              warn: h,
              error: h,
              group: h,
              groupCollapsed: h,
              groupEnd: h
            });
          }
          vl++;
        }
      }
      function fa() {
        {
          if (vl--, vl === 0) {
            var h = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: V({}, h, {
                value: Wu
              }),
              info: V({}, h, {
                value: hl
              }),
              warn: V({}, h, {
                value: Yr
              }),
              error: V({}, h, {
                value: Yo
              }),
              group: V({}, h, {
                value: kr
              }),
              groupCollapsed: V({}, h, {
                value: lc
              }),
              groupEnd: V({}, h, {
                value: uc
              })
            });
          }
          vl < 0 && Ee("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var Ka = _t.ReactCurrentDispatcher, Xa;
      function qu(h, C, z) {
        {
          if (Xa === void 0)
            try {
              throw Error();
            } catch (X) {
              var j = X.stack.trim().match(/\n( *(at )?)/);
              Xa = j && j[1] || "";
            }
          return `
` + Xa + h;
        }
      }
      var au = !1, yl;
      {
        var Ku = typeof WeakMap == "function" ? WeakMap : Map;
        yl = new Ku();
      }
      function Xu(h, C) {
        if (!h || au)
          return "";
        {
          var z = yl.get(h);
          if (z !== void 0)
            return z;
        }
        var j;
        au = !0;
        var X = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var Me;
        Me = Ka.current, Ka.current = null, ml();
        try {
          if (C) {
            var re = function() {
              throw Error();
            };
            if (Object.defineProperty(re.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(re, []);
              } catch (vn) {
                j = vn;
              }
              Reflect.construct(h, [], re);
            } else {
              try {
                re.call();
              } catch (vn) {
                j = vn;
              }
              h.call(re.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (vn) {
              j = vn;
            }
            h();
          }
        } catch (vn) {
          if (vn && j && typeof vn.stack == "string") {
            for (var Ue = vn.stack.split(`
`), dt = j.stack.split(`
`), bt = Ue.length - 1, tn = dt.length - 1; bt >= 1 && tn >= 0 && Ue[bt] !== dt[tn]; )
              tn--;
            for (; bt >= 1 && tn >= 0; bt--, tn--)
              if (Ue[bt] !== dt[tn]) {
                if (bt !== 1 || tn !== 1)
                  do
                    if (bt--, tn--, tn < 0 || Ue[bt] !== dt[tn]) {
                      var Yt = `
` + Ue[bt].replace(" at new ", " at ");
                      return h.displayName && Yt.includes("<anonymous>") && (Yt = Yt.replace("<anonymous>", h.displayName)), typeof h == "function" && yl.set(h, Yt), Yt;
                    }
                  while (bt >= 1 && tn >= 0);
                break;
              }
          }
        } finally {
          au = !1, Ka.current = Me, fa(), Error.prepareStackTrace = X;
        }
        var at = h ? h.displayName || h.name : "", Qt = at ? qu(at) : "";
        return typeof h == "function" && yl.set(h, Qt), Qt;
      }
      function Hi(h, C, z) {
        return Xu(h, !1);
      }
      function Wf(h) {
        var C = h.prototype;
        return !!(C && C.isReactComponent);
      }
      function Pi(h, C, z) {
        if (h == null)
          return "";
        if (typeof h == "function")
          return Xu(h, Wf(h));
        if (typeof h == "string")
          return qu(h);
        switch (h) {
          case ee:
            return qu("Suspense");
          case Ce:
            return qu("SuspenseList");
        }
        if (typeof h == "object")
          switch (h.$$typeof) {
            case st:
              return Hi(h.render);
            case se:
              return Pi(h.type, C, z);
            case Qe: {
              var j = h, X = j._payload, Me = j._init;
              try {
                return Pi(Me(X), C, z);
              } catch {
              }
            }
          }
        return "";
      }
      var Ot = {}, Ju = _t.ReactDebugCurrentFrame;
      function wt(h) {
        if (h) {
          var C = h._owner, z = Pi(h.type, h._source, C ? C.type : null);
          Ju.setExtraStackFrame(z);
        } else
          Ju.setExtraStackFrame(null);
      }
      function Qo(h, C, z, j, X) {
        {
          var Me = Function.call.bind(Cn);
          for (var re in h)
            if (Me(h, re)) {
              var Ue = void 0;
              try {
                if (typeof h[re] != "function") {
                  var dt = Error((j || "React class") + ": " + z + " type `" + re + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof h[re] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw dt.name = "Invariant Violation", dt;
                }
                Ue = h[re](C, re, j, z, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (bt) {
                Ue = bt;
              }
              Ue && !(Ue instanceof Error) && (wt(X), Ee("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", j || "React class", z, re, typeof Ue), wt(null)), Ue instanceof Error && !(Ue.message in Ot) && (Ot[Ue.message] = !0, wt(X), Ee("Failed %s type: %s", z, Ue.message), wt(null));
            }
        }
      }
      function vi(h) {
        if (h) {
          var C = h._owner, z = Pi(h.type, h._source, C ? C.type : null);
          jt(z);
        } else
          jt(null);
      }
      var $e;
      $e = !1;
      function Zu() {
        if (ct.current) {
          var h = Gn(ct.current.type);
          if (h)
            return `

Check the render method of \`` + h + "`.";
        }
        return "";
      }
      function ir(h) {
        if (h !== void 0) {
          var C = h.fileName.replace(/^.*[\\\/]/, ""), z = h.lineNumber;
          return `

Check your code at ` + C + ":" + z + ".";
        }
        return "";
      }
      function hi(h) {
        return h != null ? ir(h.__source) : "";
      }
      var Dr = {};
      function mi(h) {
        var C = Zu();
        if (!C) {
          var z = typeof h == "string" ? h : h.displayName || h.name;
          z && (C = `

Check the top-level render call using <` + z + ">.");
        }
        return C;
      }
      function on(h, C) {
        if (!(!h._store || h._store.validated || h.key != null)) {
          h._store.validated = !0;
          var z = mi(C);
          if (!Dr[z]) {
            Dr[z] = !0;
            var j = "";
            h && h._owner && h._owner !== ct.current && (j = " It was passed a child from " + Gn(h._owner.type) + "."), vi(h), Ee('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', z, j), vi(null);
          }
        }
      }
      function It(h, C) {
        if (typeof h == "object") {
          if (En(h))
            for (var z = 0; z < h.length; z++) {
              var j = h[z];
              pn(j) && on(j, C);
            }
          else if (pn(h))
            h._store && (h._store.validated = !0);
          else if (h) {
            var X = vt(h);
            if (typeof X == "function" && X !== h.entries)
              for (var Me = X.call(h), re; !(re = Me.next()).done; )
                pn(re.value) && on(re.value, C);
          }
        }
      }
      function gl(h) {
        {
          var C = h.type;
          if (C == null || typeof C == "string")
            return;
          var z;
          if (typeof C == "function")
            z = C.propTypes;
          else if (typeof C == "object" && (C.$$typeof === st || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          C.$$typeof === se))
            z = C.propTypes;
          else
            return;
          if (z) {
            var j = Gn(C);
            Qo(z, h.props, "prop", j, h);
          } else if (C.PropTypes !== void 0 && !$e) {
            $e = !0;
            var X = Gn(C);
            Ee("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", X || "Unknown");
          }
          typeof C.getDefaultProps == "function" && !C.getDefaultProps.isReactClassApproved && Ee("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function $n(h) {
        {
          for (var C = Object.keys(h.props), z = 0; z < C.length; z++) {
            var j = C[z];
            if (j !== "children" && j !== "key") {
              vi(h), Ee("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", j), vi(null);
              break;
            }
          }
          h.ref !== null && (vi(h), Ee("Invalid attribute `ref` supplied to `React.Fragment`."), vi(null));
        }
      }
      function Or(h, C, z) {
        var j = $(h);
        if (!j) {
          var X = "";
          (h === void 0 || typeof h == "object" && h !== null && Object.keys(h).length === 0) && (X += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Me = hi(C);
          Me ? X += Me : X += Zu();
          var re;
          h === null ? re = "null" : En(h) ? re = "array" : h !== void 0 && h.$$typeof === Oe ? (re = "<" + (Gn(h.type) || "Unknown") + " />", X = " Did you accidentally export a JSX literal instead of a component?") : re = typeof h, Ee("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", re, X);
        }
        var Ue = rt.apply(this, arguments);
        if (Ue == null)
          return Ue;
        if (j)
          for (var dt = 2; dt < arguments.length; dt++)
            It(arguments[dt], h);
        return h === be ? $n(Ue) : gl(Ue), Ue;
      }
      var wa = !1;
      function iu(h) {
        var C = Or.bind(null, h);
        return C.type = h, wa || (wa = !0, Dt("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(C, "type", {
          enumerable: !1,
          get: function() {
            return Dt("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: h
            }), h;
          }
        }), C;
      }
      function Wo(h, C, z) {
        for (var j = Jt.apply(this, arguments), X = 2; X < arguments.length; X++)
          It(arguments[X], j.type);
        return gl(j), j;
      }
      function Go(h, C) {
        var z = mt.transition;
        mt.transition = {};
        var j = mt.transition;
        mt.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          h();
        } finally {
          if (mt.transition = z, z === null && j._updatedFibers) {
            var X = j._updatedFibers.size;
            X > 10 && Dt("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), j._updatedFibers.clear();
          }
        }
      }
      var Sl = !1, lu = null;
      function Gf(h) {
        if (lu === null)
          try {
            var C = ("require" + Math.random()).slice(0, 7), z = Q && Q[C];
            lu = z.call(Q, "timers").setImmediate;
          } catch {
            lu = function(X) {
              Sl === !1 && (Sl = !0, typeof MessageChannel == "undefined" && Ee("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var Me = new MessageChannel();
              Me.port1.onmessage = X, Me.port2.postMessage(void 0);
            };
          }
        return lu(h);
      }
      var ba = 0, Ja = !1;
      function yi(h) {
        {
          var C = ba;
          ba++, _e.current === null && (_e.current = []);
          var z = _e.isBatchingLegacy, j;
          try {
            if (_e.isBatchingLegacy = !0, j = h(), !z && _e.didScheduleLegacyUpdate) {
              var X = _e.current;
              X !== null && (_e.didScheduleLegacyUpdate = !1, El(X));
            }
          } catch (at) {
            throw xa(C), at;
          } finally {
            _e.isBatchingLegacy = z;
          }
          if (j !== null && typeof j == "object" && typeof j.then == "function") {
            var Me = j, re = !1, Ue = {
              then: function(at, Qt) {
                re = !0, Me.then(function(vn) {
                  xa(C), ba === 0 ? eo(vn, at, Qt) : at(vn);
                }, function(vn) {
                  xa(C), Qt(vn);
                });
              }
            };
            return !Ja && typeof Promise != "undefined" && Promise.resolve().then(function() {
            }).then(function() {
              re || (Ja = !0, Ee("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), Ue;
          } else {
            var dt = j;
            if (xa(C), ba === 0) {
              var bt = _e.current;
              bt !== null && (El(bt), _e.current = null);
              var tn = {
                then: function(at, Qt) {
                  _e.current === null ? (_e.current = [], eo(dt, at, Qt)) : at(dt);
                }
              };
              return tn;
            } else {
              var Yt = {
                then: function(at, Qt) {
                  at(dt);
                }
              };
              return Yt;
            }
          }
        }
      }
      function xa(h) {
        h !== ba - 1 && Ee("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), ba = h;
      }
      function eo(h, C, z) {
        {
          var j = _e.current;
          if (j !== null)
            try {
              El(j), Gf(function() {
                j.length === 0 ? (_e.current = null, C(h)) : eo(h, C, z);
              });
            } catch (X) {
              z(X);
            }
          else
            C(h);
        }
      }
      var to = !1;
      function El(h) {
        if (!to) {
          to = !0;
          var C = 0;
          try {
            for (; C < h.length; C++) {
              var z = h[C];
              do
                z = z(!0);
              while (z !== null);
            }
            h.length = 0;
          } catch (j) {
            throw h = h.slice(C + 1), j;
          } finally {
            to = !1;
          }
        }
      }
      var uu = Or, no = Wo, ro = iu, Za = {
        map: ji,
        forEach: eu,
        count: Zl,
        toArray: dl,
        only: pl
      };
      F.Children = Za, F.Component = Fe, F.Fragment = be, F.Profiler = pt, F.PureComponent = lt, F.StrictMode = S, F.Suspense = ee, F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = _t, F.act = yi, F.cloneElement = no, F.createContext = tu, F.createElement = uu, F.createFactory = ro, F.createRef = Dn, F.forwardRef = pi, F.isValidElement = pn, F.lazy = di, F.memo = ae, F.startTransition = Go, F.unstable_act = yi, F.useCallback = ar, F.useContext = Ke, F.useDebugValue = Xe, F.useDeferredValue = qa, F.useEffect = Rn, F.useId = nu, F.useImperativeHandle = Ga, F.useInsertionEffect = en, F.useLayoutEffect = un, F.useMemo = Wa, F.useReducer = ft, F.useRef = ut, F.useState = Ie, F.useSyncExternalStore = ru, F.useTransition = et, F.version = _, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ != "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(ev, ev.exports)), ev.exports;
}
process.env.NODE_ENV === "production" ? mE.exports = ak() : mE.exports = ik();
var Jl = mE.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tT;
function lk() {
  if (tT) return Jp;
  tT = 1;
  var Q = Jl, F = Symbol.for("react.element"), _ = Symbol.for("react.fragment"), Oe = Object.prototype.hasOwnProperty, qe = Q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, be = { key: !0, ref: !0, __self: !0, __source: !0 };
  function S(pt, ue, oe) {
    var st, ee = {}, Ce = null, se = null;
    oe !== void 0 && (Ce = "" + oe), ue.key !== void 0 && (Ce = "" + ue.key), ue.ref !== void 0 && (se = ue.ref);
    for (st in ue) Oe.call(ue, st) && !be.hasOwnProperty(st) && (ee[st] = ue[st]);
    if (pt && pt.defaultProps) for (st in ue = pt.defaultProps, ue) ee[st] === void 0 && (ee[st] = ue[st]);
    return { $$typeof: F, type: pt, key: Ce, ref: se, props: ee, _owner: qe.current };
  }
  return Jp.Fragment = _, Jp.jsx = S, Jp.jsxs = S, Jp;
}
var Zp = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var nT;
function uk() {
  return nT || (nT = 1, process.env.NODE_ENV !== "production" && function() {
    var Q = Jl, F = Symbol.for("react.element"), _ = Symbol.for("react.portal"), Oe = Symbol.for("react.fragment"), qe = Symbol.for("react.strict_mode"), be = Symbol.for("react.profiler"), S = Symbol.for("react.provider"), pt = Symbol.for("react.context"), ue = Symbol.for("react.forward_ref"), oe = Symbol.for("react.suspense"), st = Symbol.for("react.suspense_list"), ee = Symbol.for("react.memo"), Ce = Symbol.for("react.lazy"), se = Symbol.for("react.offscreen"), Qe = Symbol.iterator, St = "@@iterator";
    function ht(R) {
      if (R === null || typeof R != "object")
        return null;
      var $ = Qe && R[Qe] || R[St];
      return typeof $ == "function" ? $ : null;
    }
    var cn = Q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function vt(R) {
      {
        for (var $ = arguments.length, ae = new Array($ > 1 ? $ - 1 : 0), he = 1; he < $; he++)
          ae[he - 1] = arguments[he];
        We("error", R, ae);
      }
    }
    function We(R, $, ae) {
      {
        var he = cn.ReactDebugCurrentFrame, Ke = he.getStackAddendum();
        Ke !== "" && ($ += "%s", ae = ae.concat([Ke]));
        var Ie = ae.map(function(ft) {
          return String(ft);
        });
        Ie.unshift("Warning: " + $), Function.prototype.apply.call(console[R], console, Ie);
      }
    }
    var mt = !1, _e = !1, ct = !1, He = !1, rn = !1, jt;
    jt = Symbol.for("react.module.reference");
    function Xt(R) {
      return !!(typeof R == "string" || typeof R == "function" || R === Oe || R === be || rn || R === qe || R === oe || R === st || He || R === se || mt || _e || ct || typeof R == "object" && R !== null && (R.$$typeof === Ce || R.$$typeof === ee || R.$$typeof === S || R.$$typeof === pt || R.$$typeof === ue || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      R.$$typeof === jt || R.getModuleId !== void 0));
    }
    function an(R, $, ae) {
      var he = R.displayName;
      if (he)
        return he;
      var Ke = $.displayName || $.name || "";
      return Ke !== "" ? ae + "(" + Ke + ")" : ae;
    }
    function xt(R) {
      return R.displayName || "Context";
    }
    function Le(R) {
      if (R == null)
        return null;
      if (typeof R.tag == "number" && vt("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof R == "function")
        return R.displayName || R.name || null;
      if (typeof R == "string")
        return R;
      switch (R) {
        case Oe:
          return "Fragment";
        case _:
          return "Portal";
        case be:
          return "Profiler";
        case qe:
          return "StrictMode";
        case oe:
          return "Suspense";
        case st:
          return "SuspenseList";
      }
      if (typeof R == "object")
        switch (R.$$typeof) {
          case pt:
            var $ = R;
            return xt($) + ".Consumer";
          case S:
            var ae = R;
            return xt(ae._context) + ".Provider";
          case ue:
            return an(R, R.render, "ForwardRef");
          case ee:
            var he = R.displayName || null;
            return he !== null ? he : Le(R.type) || "Memo";
          case Ce: {
            var Ke = R, Ie = Ke._payload, ft = Ke._init;
            try {
              return Le(ft(Ie));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var At = Object.assign, _t = 0, Dt, Ee, J, Re, ne, k, V;
    function Pe() {
    }
    Pe.__reactDisabledLog = !0;
    function Fe() {
      {
        if (_t === 0) {
          Dt = console.log, Ee = console.info, J = console.warn, Re = console.error, ne = console.group, k = console.groupCollapsed, V = console.groupEnd;
          var R = {
            configurable: !0,
            enumerable: !0,
            value: Pe,
            writable: !0
          };
          Object.defineProperties(console, {
            info: R,
            log: R,
            warn: R,
            error: R,
            group: R,
            groupCollapsed: R,
            groupEnd: R
          });
        }
        _t++;
      }
    }
    function it() {
      {
        if (_t--, _t === 0) {
          var R = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: At({}, R, {
              value: Dt
            }),
            info: At({}, R, {
              value: Ee
            }),
            warn: At({}, R, {
              value: J
            }),
            error: At({}, R, {
              value: Re
            }),
            group: At({}, R, {
              value: ne
            }),
            groupCollapsed: At({}, R, {
              value: k
            }),
            groupEnd: At({}, R, {
              value: V
            })
          });
        }
        _t < 0 && vt("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var tt = cn.ReactCurrentDispatcher, Ze;
    function nt(R, $, ae) {
      {
        if (Ze === void 0)
          try {
            throw Error();
          } catch (Ke) {
            var he = Ke.stack.trim().match(/\n( *(at )?)/);
            Ze = he && he[1] || "";
          }
        return `
` + Ze + R;
      }
    }
    var lt = !1, Vt;
    {
      var Dn = typeof WeakMap == "function" ? WeakMap : Map;
      Vt = new Dn();
    }
    function br(R, $) {
      if (!R || lt)
        return "";
      {
        var ae = Vt.get(R);
        if (ae !== void 0)
          return ae;
      }
      var he;
      lt = !0;
      var Ke = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Ie;
      Ie = tt.current, tt.current = null, Fe();
      try {
        if ($) {
          var ft = function() {
            throw Error();
          };
          if (Object.defineProperty(ft.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(ft, []);
            } catch (Xe) {
              he = Xe;
            }
            Reflect.construct(R, [], ft);
          } else {
            try {
              ft.call();
            } catch (Xe) {
              he = Xe;
            }
            R.call(ft.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Xe) {
            he = Xe;
          }
          R();
        }
      } catch (Xe) {
        if (Xe && he && typeof Xe.stack == "string") {
          for (var ut = Xe.stack.split(`
`), Rn = he.stack.split(`
`), en = ut.length - 1, un = Rn.length - 1; en >= 1 && un >= 0 && ut[en] !== Rn[un]; )
            un--;
          for (; en >= 1 && un >= 0; en--, un--)
            if (ut[en] !== Rn[un]) {
              if (en !== 1 || un !== 1)
                do
                  if (en--, un--, un < 0 || ut[en] !== Rn[un]) {
                    var ar = `
` + ut[en].replace(" at new ", " at ");
                    return R.displayName && ar.includes("<anonymous>") && (ar = ar.replace("<anonymous>", R.displayName)), typeof R == "function" && Vt.set(R, ar), ar;
                  }
                while (en >= 1 && un >= 0);
              break;
            }
        }
      } finally {
        lt = !1, tt.current = Ie, it(), Error.prepareStackTrace = Ke;
      }
      var Wa = R ? R.displayName || R.name : "", Ga = Wa ? nt(Wa) : "";
      return typeof R == "function" && Vt.set(R, Ga), Ga;
    }
    function En(R, $, ae) {
      return br(R, !1);
    }
    function nr(R) {
      var $ = R.prototype;
      return !!($ && $.isReactComponent);
    }
    function Pn(R, $, ae) {
      if (R == null)
        return "";
      if (typeof R == "function")
        return br(R, nr(R));
      if (typeof R == "string")
        return nt(R);
      switch (R) {
        case oe:
          return nt("Suspense");
        case st:
          return nt("SuspenseList");
      }
      if (typeof R == "object")
        switch (R.$$typeof) {
          case ue:
            return En(R.render);
          case ee:
            return Pn(R.type, $, ae);
          case Ce: {
            var he = R, Ke = he._payload, Ie = he._init;
            try {
              return Pn(Ie(Ke), $, ae);
            } catch {
            }
          }
        }
      return "";
    }
    var Vn = Object.prototype.hasOwnProperty, Ir = {}, si = cn.ReactDebugCurrentFrame;
    function oa(R) {
      if (R) {
        var $ = R._owner, ae = Pn(R.type, R._source, $ ? $.type : null);
        si.setExtraStackFrame(ae);
      } else
        si.setExtraStackFrame(null);
    }
    function Gn(R, $, ae, he, Ke) {
      {
        var Ie = Function.call.bind(Vn);
        for (var ft in R)
          if (Ie(R, ft)) {
            var ut = void 0;
            try {
              if (typeof R[ft] != "function") {
                var Rn = Error((he || "React class") + ": " + ae + " type `" + ft + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof R[ft] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Rn.name = "Invariant Violation", Rn;
              }
              ut = R[ft]($, ft, he, ae, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (en) {
              ut = en;
            }
            ut && !(ut instanceof Error) && (oa(Ke), vt("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", he || "React class", ae, ft, typeof ut), oa(null)), ut instanceof Error && !(ut.message in Ir) && (Ir[ut.message] = !0, oa(Ke), vt("Failed %s type: %s", ae, ut.message), oa(null));
          }
      }
    }
    var Cn = Array.isArray;
    function Bn(R) {
      return Cn(R);
    }
    function gr(R) {
      {
        var $ = typeof Symbol == "function" && Symbol.toStringTag, ae = $ && R[Symbol.toStringTag] || R.constructor.name || "Object";
        return ae;
      }
    }
    function Ia(R) {
      try {
        return On(R), !1;
      } catch {
        return !0;
      }
    }
    function On(R) {
      return "" + R;
    }
    function Sr(R) {
      if (Ia(R))
        return vt("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", gr(R)), On(R);
    }
    var sa = cn.ReactCurrentOwner, Ya = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ci, Z;
    function Te(R) {
      if (Vn.call(R, "ref")) {
        var $ = Object.getOwnPropertyDescriptor(R, "ref").get;
        if ($ && $.isReactWarning)
          return !1;
      }
      return R.ref !== void 0;
    }
    function rt(R) {
      if (Vn.call(R, "key")) {
        var $ = Object.getOwnPropertyDescriptor(R, "key").get;
        if ($ && $.isReactWarning)
          return !1;
      }
      return R.key !== void 0;
    }
    function Ft(R, $) {
      typeof R.ref == "string" && sa.current;
    }
    function Jt(R, $) {
      {
        var ae = function() {
          ci || (ci = !0, vt("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", $));
        };
        ae.isReactWarning = !0, Object.defineProperty(R, "key", {
          get: ae,
          configurable: !0
        });
      }
    }
    function pn(R, $) {
      {
        var ae = function() {
          Z || (Z = !0, vt("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", $));
        };
        ae.isReactWarning = !0, Object.defineProperty(R, "ref", {
          get: ae,
          configurable: !0
        });
      }
    }
    var ln = function(R, $, ae, he, Ke, Ie, ft) {
      var ut = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: F,
        // Built-in properties that belong on the element
        type: R,
        key: $,
        ref: ae,
        props: ft,
        // Record the component responsible for creating this element.
        _owner: Ie
      };
      return ut._store = {}, Object.defineProperty(ut._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(ut, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: he
      }), Object.defineProperty(ut, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Ke
      }), Object.freeze && (Object.freeze(ut.props), Object.freeze(ut)), ut;
    };
    function qn(R, $, ae, he, Ke) {
      {
        var Ie, ft = {}, ut = null, Rn = null;
        ae !== void 0 && (Sr(ae), ut = "" + ae), rt($) && (Sr($.key), ut = "" + $.key), Te($) && (Rn = $.ref, Ft($, Ke));
        for (Ie in $)
          Vn.call($, Ie) && !Ya.hasOwnProperty(Ie) && (ft[Ie] = $[Ie]);
        if (R && R.defaultProps) {
          var en = R.defaultProps;
          for (Ie in en)
            ft[Ie] === void 0 && (ft[Ie] = en[Ie]);
        }
        if (ut || Rn) {
          var un = typeof R == "function" ? R.displayName || R.name || "Unknown" : R;
          ut && Jt(ft, un), Rn && pn(ft, un);
        }
        return ln(R, ut, Rn, Ke, he, sa.current, ft);
      }
    }
    var Zt = cn.ReactCurrentOwner, Bt = cn.ReactDebugCurrentFrame;
    function $t(R) {
      if (R) {
        var $ = R._owner, ae = Pn(R.type, R._source, $ ? $.type : null);
        Bt.setExtraStackFrame(ae);
      } else
        Bt.setExtraStackFrame(null);
    }
    var ca;
    ca = !1;
    function Er(R) {
      return typeof R == "object" && R !== null && R.$$typeof === F;
    }
    function Ta() {
      {
        if (Zt.current) {
          var R = Le(Zt.current.type);
          if (R)
            return `

Check the render method of \`` + R + "`.";
        }
        return "";
      }
    }
    function ji(R) {
      return "";
    }
    var Zl = {};
    function eu(R) {
      {
        var $ = Ta();
        if (!$) {
          var ae = typeof R == "string" ? R : R.displayName || R.name;
          ae && ($ = `

Check the top-level render call using <` + ae + ">.");
        }
        return $;
      }
    }
    function dl(R, $) {
      {
        if (!R._store || R._store.validated || R.key != null)
          return;
        R._store.validated = !0;
        var ae = eu($);
        if (Zl[ae])
          return;
        Zl[ae] = !0;
        var he = "";
        R && R._owner && R._owner !== Zt.current && (he = " It was passed a child from " + Le(R._owner.type) + "."), $t(R), vt('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', ae, he), $t(null);
      }
    }
    function pl(R, $) {
      {
        if (typeof R != "object")
          return;
        if (Bn(R))
          for (var ae = 0; ae < R.length; ae++) {
            var he = R[ae];
            Er(he) && dl(he, $);
          }
        else if (Er(R))
          R._store && (R._store.validated = !0);
        else if (R) {
          var Ke = ht(R);
          if (typeof Ke == "function" && Ke !== R.entries)
            for (var Ie = Ke.call(R), ft; !(ft = Ie.next()).done; )
              Er(ft.value) && dl(ft.value, $);
        }
      }
    }
    function tu(R) {
      {
        var $ = R.type;
        if ($ == null || typeof $ == "string")
          return;
        var ae;
        if (typeof $ == "function")
          ae = $.propTypes;
        else if (typeof $ == "object" && ($.$$typeof === ue || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        $.$$typeof === ee))
          ae = $.propTypes;
        else
          return;
        if (ae) {
          var he = Le($);
          Gn(ae, R.props, "prop", he, R);
        } else if ($.PropTypes !== void 0 && !ca) {
          ca = !0;
          var Ke = Le($);
          vt("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Ke || "Unknown");
        }
        typeof $.getDefaultProps == "function" && !$.getDefaultProps.isReactClassApproved && vt("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function xr(R) {
      {
        for (var $ = Object.keys(R.props), ae = 0; ae < $.length; ae++) {
          var he = $[ae];
          if (he !== "children" && he !== "key") {
            $t(R), vt("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", he), $t(null);
            break;
          }
        }
        R.ref !== null && ($t(R), vt("Invalid attribute `ref` supplied to `React.Fragment`."), $t(null));
      }
    }
    var _r = {};
    function rr(R, $, ae, he, Ke, Ie) {
      {
        var ft = Xt(R);
        if (!ft) {
          var ut = "";
          (R === void 0 || typeof R == "object" && R !== null && Object.keys(R).length === 0) && (ut += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Rn = ji();
          Rn ? ut += Rn : ut += Ta();
          var en;
          R === null ? en = "null" : Bn(R) ? en = "array" : R !== void 0 && R.$$typeof === F ? (en = "<" + (Le(R.type) || "Unknown") + " />", ut = " Did you accidentally export a JSX literal instead of a component?") : en = typeof R, vt("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", en, ut);
        }
        var un = qn(R, $, ae, Ke, Ie);
        if (un == null)
          return un;
        if (ft) {
          var ar = $.children;
          if (ar !== void 0)
            if (he)
              if (Bn(ar)) {
                for (var Wa = 0; Wa < ar.length; Wa++)
                  pl(ar[Wa], R);
                Object.freeze && Object.freeze(ar);
              } else
                vt("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              pl(ar, R);
        }
        if (Vn.call($, "key")) {
          var Ga = Le(R), Xe = Object.keys($).filter(function(nu) {
            return nu !== "key";
          }), et = Xe.length > 0 ? "{key: someKey, " + Xe.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!_r[Ga + et]) {
            var qa = Xe.length > 0 ? "{" + Xe.join(": ..., ") + ": ...}" : "{}";
            vt(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, et, Ga, qa, Ga), _r[Ga + et] = !0;
          }
        }
        return R === Oe ? xr(un) : tu(un), un;
      }
    }
    function fi(R, $, ae) {
      return rr(R, $, ae, !0);
    }
    function Qa(R, $, ae) {
      return rr(R, $, ae, !1);
    }
    var di = Qa, pi = fi;
    Zp.Fragment = Oe, Zp.jsx = di, Zp.jsxs = pi;
  }()), Zp;
}
process.env.NODE_ENV === "production" ? hE.exports = lk() : hE.exports = uk();
var tr = hE.exports, yE = { exports: {} }, Ba = {}, Qm = { exports: {} }, pE = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var rT;
function ok() {
  return rT || (rT = 1, function(Q) {
    function F(J, Re) {
      var ne = J.length;
      J.push(Re);
      e: for (; 0 < ne; ) {
        var k = ne - 1 >>> 1, V = J[k];
        if (0 < qe(V, Re)) J[k] = Re, J[ne] = V, ne = k;
        else break e;
      }
    }
    function _(J) {
      return J.length === 0 ? null : J[0];
    }
    function Oe(J) {
      if (J.length === 0) return null;
      var Re = J[0], ne = J.pop();
      if (ne !== Re) {
        J[0] = ne;
        e: for (var k = 0, V = J.length, Pe = V >>> 1; k < Pe; ) {
          var Fe = 2 * (k + 1) - 1, it = J[Fe], tt = Fe + 1, Ze = J[tt];
          if (0 > qe(it, ne)) tt < V && 0 > qe(Ze, it) ? (J[k] = Ze, J[tt] = ne, k = tt) : (J[k] = it, J[Fe] = ne, k = Fe);
          else if (tt < V && 0 > qe(Ze, ne)) J[k] = Ze, J[tt] = ne, k = tt;
          else break e;
        }
      }
      return Re;
    }
    function qe(J, Re) {
      var ne = J.sortIndex - Re.sortIndex;
      return ne !== 0 ? ne : J.id - Re.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var be = performance;
      Q.unstable_now = function() {
        return be.now();
      };
    } else {
      var S = Date, pt = S.now();
      Q.unstable_now = function() {
        return S.now() - pt;
      };
    }
    var ue = [], oe = [], st = 1, ee = null, Ce = 3, se = !1, Qe = !1, St = !1, ht = typeof setTimeout == "function" ? setTimeout : null, cn = typeof clearTimeout == "function" ? clearTimeout : null, vt = typeof setImmediate != "undefined" ? setImmediate : null;
    typeof navigator != "undefined" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function We(J) {
      for (var Re = _(oe); Re !== null; ) {
        if (Re.callback === null) Oe(oe);
        else if (Re.startTime <= J) Oe(oe), Re.sortIndex = Re.expirationTime, F(ue, Re);
        else break;
        Re = _(oe);
      }
    }
    function mt(J) {
      if (St = !1, We(J), !Qe) if (_(ue) !== null) Qe = !0, Dt(_e);
      else {
        var Re = _(oe);
        Re !== null && Ee(mt, Re.startTime - J);
      }
    }
    function _e(J, Re) {
      Qe = !1, St && (St = !1, cn(rn), rn = -1), se = !0;
      var ne = Ce;
      try {
        for (We(Re), ee = _(ue); ee !== null && (!(ee.expirationTime > Re) || J && !an()); ) {
          var k = ee.callback;
          if (typeof k == "function") {
            ee.callback = null, Ce = ee.priorityLevel;
            var V = k(ee.expirationTime <= Re);
            Re = Q.unstable_now(), typeof V == "function" ? ee.callback = V : ee === _(ue) && Oe(ue), We(Re);
          } else Oe(ue);
          ee = _(ue);
        }
        if (ee !== null) var Pe = !0;
        else {
          var Fe = _(oe);
          Fe !== null && Ee(mt, Fe.startTime - Re), Pe = !1;
        }
        return Pe;
      } finally {
        ee = null, Ce = ne, se = !1;
      }
    }
    var ct = !1, He = null, rn = -1, jt = 5, Xt = -1;
    function an() {
      return !(Q.unstable_now() - Xt < jt);
    }
    function xt() {
      if (He !== null) {
        var J = Q.unstable_now();
        Xt = J;
        var Re = !0;
        try {
          Re = He(!0, J);
        } finally {
          Re ? Le() : (ct = !1, He = null);
        }
      } else ct = !1;
    }
    var Le;
    if (typeof vt == "function") Le = function() {
      vt(xt);
    };
    else if (typeof MessageChannel != "undefined") {
      var At = new MessageChannel(), _t = At.port2;
      At.port1.onmessage = xt, Le = function() {
        _t.postMessage(null);
      };
    } else Le = function() {
      ht(xt, 0);
    };
    function Dt(J) {
      He = J, ct || (ct = !0, Le());
    }
    function Ee(J, Re) {
      rn = ht(function() {
        J(Q.unstable_now());
      }, Re);
    }
    Q.unstable_IdlePriority = 5, Q.unstable_ImmediatePriority = 1, Q.unstable_LowPriority = 4, Q.unstable_NormalPriority = 3, Q.unstable_Profiling = null, Q.unstable_UserBlockingPriority = 2, Q.unstable_cancelCallback = function(J) {
      J.callback = null;
    }, Q.unstable_continueExecution = function() {
      Qe || se || (Qe = !0, Dt(_e));
    }, Q.unstable_forceFrameRate = function(J) {
      0 > J || 125 < J ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : jt = 0 < J ? Math.floor(1e3 / J) : 5;
    }, Q.unstable_getCurrentPriorityLevel = function() {
      return Ce;
    }, Q.unstable_getFirstCallbackNode = function() {
      return _(ue);
    }, Q.unstable_next = function(J) {
      switch (Ce) {
        case 1:
        case 2:
        case 3:
          var Re = 3;
          break;
        default:
          Re = Ce;
      }
      var ne = Ce;
      Ce = Re;
      try {
        return J();
      } finally {
        Ce = ne;
      }
    }, Q.unstable_pauseExecution = function() {
    }, Q.unstable_requestPaint = function() {
    }, Q.unstable_runWithPriority = function(J, Re) {
      switch (J) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          J = 3;
      }
      var ne = Ce;
      Ce = J;
      try {
        return Re();
      } finally {
        Ce = ne;
      }
    }, Q.unstable_scheduleCallback = function(J, Re, ne) {
      var k = Q.unstable_now();
      switch (typeof ne == "object" && ne !== null ? (ne = ne.delay, ne = typeof ne == "number" && 0 < ne ? k + ne : k) : ne = k, J) {
        case 1:
          var V = -1;
          break;
        case 2:
          V = 250;
          break;
        case 5:
          V = 1073741823;
          break;
        case 4:
          V = 1e4;
          break;
        default:
          V = 5e3;
      }
      return V = ne + V, J = { id: st++, callback: Re, priorityLevel: J, startTime: ne, expirationTime: V, sortIndex: -1 }, ne > k ? (J.sortIndex = ne, F(oe, J), _(ue) === null && J === _(oe) && (St ? (cn(rn), rn = -1) : St = !0, Ee(mt, ne - k))) : (J.sortIndex = V, F(ue, J), Qe || se || (Qe = !0, Dt(_e))), J;
    }, Q.unstable_shouldYield = an, Q.unstable_wrapCallback = function(J) {
      var Re = Ce;
      return function() {
        var ne = Ce;
        Ce = Re;
        try {
          return J.apply(this, arguments);
        } finally {
          Ce = ne;
        }
      };
    };
  }(pE)), pE;
}
var vE = {};
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var aT;
function sk() {
  return aT || (aT = 1, function(Q) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ != "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var F = !1, _ = 5;
      function Oe(Z, Te) {
        var rt = Z.length;
        Z.push(Te), S(Z, Te, rt);
      }
      function qe(Z) {
        return Z.length === 0 ? null : Z[0];
      }
      function be(Z) {
        if (Z.length === 0)
          return null;
        var Te = Z[0], rt = Z.pop();
        return rt !== Te && (Z[0] = rt, pt(Z, rt, 0)), Te;
      }
      function S(Z, Te, rt) {
        for (var Ft = rt; Ft > 0; ) {
          var Jt = Ft - 1 >>> 1, pn = Z[Jt];
          if (ue(pn, Te) > 0)
            Z[Jt] = Te, Z[Ft] = pn, Ft = Jt;
          else
            return;
        }
      }
      function pt(Z, Te, rt) {
        for (var Ft = rt, Jt = Z.length, pn = Jt >>> 1; Ft < pn; ) {
          var ln = (Ft + 1) * 2 - 1, qn = Z[ln], Zt = ln + 1, Bt = Z[Zt];
          if (ue(qn, Te) < 0)
            Zt < Jt && ue(Bt, qn) < 0 ? (Z[Ft] = Bt, Z[Zt] = Te, Ft = Zt) : (Z[Ft] = qn, Z[ln] = Te, Ft = ln);
          else if (Zt < Jt && ue(Bt, Te) < 0)
            Z[Ft] = Bt, Z[Zt] = Te, Ft = Zt;
          else
            return;
        }
      }
      function ue(Z, Te) {
        var rt = Z.sortIndex - Te.sortIndex;
        return rt !== 0 ? rt : Z.id - Te.id;
      }
      var oe = 1, st = 2, ee = 3, Ce = 4, se = 5;
      function Qe(Z, Te) {
      }
      var St = typeof performance == "object" && typeof performance.now == "function";
      if (St) {
        var ht = performance;
        Q.unstable_now = function() {
          return ht.now();
        };
      } else {
        var cn = Date, vt = cn.now();
        Q.unstable_now = function() {
          return cn.now() - vt;
        };
      }
      var We = 1073741823, mt = -1, _e = 250, ct = 5e3, He = 1e4, rn = We, jt = [], Xt = [], an = 1, xt = null, Le = ee, At = !1, _t = !1, Dt = !1, Ee = typeof setTimeout == "function" ? setTimeout : null, J = typeof clearTimeout == "function" ? clearTimeout : null, Re = typeof setImmediate != "undefined" ? setImmediate : null;
      typeof navigator != "undefined" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function ne(Z) {
        for (var Te = qe(Xt); Te !== null; ) {
          if (Te.callback === null)
            be(Xt);
          else if (Te.startTime <= Z)
            be(Xt), Te.sortIndex = Te.expirationTime, Oe(jt, Te);
          else
            return;
          Te = qe(Xt);
        }
      }
      function k(Z) {
        if (Dt = !1, ne(Z), !_t)
          if (qe(jt) !== null)
            _t = !0, On(V);
          else {
            var Te = qe(Xt);
            Te !== null && Sr(k, Te.startTime - Z);
          }
      }
      function V(Z, Te) {
        _t = !1, Dt && (Dt = !1, sa()), At = !0;
        var rt = Le;
        try {
          var Ft;
          if (!F) return Pe(Z, Te);
        } finally {
          xt = null, Le = rt, At = !1;
        }
      }
      function Pe(Z, Te) {
        var rt = Te;
        for (ne(rt), xt = qe(jt); xt !== null && !(xt.expirationTime > rt && (!Z || si())); ) {
          var Ft = xt.callback;
          if (typeof Ft == "function") {
            xt.callback = null, Le = xt.priorityLevel;
            var Jt = xt.expirationTime <= rt, pn = Ft(Jt);
            rt = Q.unstable_now(), typeof pn == "function" ? xt.callback = pn : xt === qe(jt) && be(jt), ne(rt);
          } else
            be(jt);
          xt = qe(jt);
        }
        if (xt !== null)
          return !0;
        var ln = qe(Xt);
        return ln !== null && Sr(k, ln.startTime - rt), !1;
      }
      function Fe(Z, Te) {
        switch (Z) {
          case oe:
          case st:
          case ee:
          case Ce:
          case se:
            break;
          default:
            Z = ee;
        }
        var rt = Le;
        Le = Z;
        try {
          return Te();
        } finally {
          Le = rt;
        }
      }
      function it(Z) {
        var Te;
        switch (Le) {
          case oe:
          case st:
          case ee:
            Te = ee;
            break;
          default:
            Te = Le;
            break;
        }
        var rt = Le;
        Le = Te;
        try {
          return Z();
        } finally {
          Le = rt;
        }
      }
      function tt(Z) {
        var Te = Le;
        return function() {
          var rt = Le;
          Le = Te;
          try {
            return Z.apply(this, arguments);
          } finally {
            Le = rt;
          }
        };
      }
      function Ze(Z, Te, rt) {
        var Ft = Q.unstable_now(), Jt;
        if (typeof rt == "object" && rt !== null) {
          var pn = rt.delay;
          typeof pn == "number" && pn > 0 ? Jt = Ft + pn : Jt = Ft;
        } else
          Jt = Ft;
        var ln;
        switch (Z) {
          case oe:
            ln = mt;
            break;
          case st:
            ln = _e;
            break;
          case se:
            ln = rn;
            break;
          case Ce:
            ln = He;
            break;
          case ee:
          default:
            ln = ct;
            break;
        }
        var qn = Jt + ln, Zt = {
          id: an++,
          callback: Te,
          priorityLevel: Z,
          startTime: Jt,
          expirationTime: qn,
          sortIndex: -1
        };
        return Jt > Ft ? (Zt.sortIndex = Jt, Oe(Xt, Zt), qe(jt) === null && Zt === qe(Xt) && (Dt ? sa() : Dt = !0, Sr(k, Jt - Ft))) : (Zt.sortIndex = qn, Oe(jt, Zt), !_t && !At && (_t = !0, On(V))), Zt;
      }
      function nt() {
      }
      function lt() {
        !_t && !At && (_t = !0, On(V));
      }
      function Vt() {
        return qe(jt);
      }
      function Dn(Z) {
        Z.callback = null;
      }
      function br() {
        return Le;
      }
      var En = !1, nr = null, Pn = -1, Vn = _, Ir = -1;
      function si() {
        var Z = Q.unstable_now() - Ir;
        return !(Z < Vn);
      }
      function oa() {
      }
      function Gn(Z) {
        if (Z < 0 || Z > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        Z > 0 ? Vn = Math.floor(1e3 / Z) : Vn = _;
      }
      var Cn = function() {
        if (nr !== null) {
          var Z = Q.unstable_now();
          Ir = Z;
          var Te = !0, rt = !0;
          try {
            rt = nr(Te, Z);
          } finally {
            rt ? Bn() : (En = !1, nr = null);
          }
        } else
          En = !1;
      }, Bn;
      if (typeof Re == "function")
        Bn = function() {
          Re(Cn);
        };
      else if (typeof MessageChannel != "undefined") {
        var gr = new MessageChannel(), Ia = gr.port2;
        gr.port1.onmessage = Cn, Bn = function() {
          Ia.postMessage(null);
        };
      } else
        Bn = function() {
          Ee(Cn, 0);
        };
      function On(Z) {
        nr = Z, En || (En = !0, Bn());
      }
      function Sr(Z, Te) {
        Pn = Ee(function() {
          Z(Q.unstable_now());
        }, Te);
      }
      function sa() {
        J(Pn), Pn = -1;
      }
      var Ya = oa, ci = null;
      Q.unstable_IdlePriority = se, Q.unstable_ImmediatePriority = oe, Q.unstable_LowPriority = Ce, Q.unstable_NormalPriority = ee, Q.unstable_Profiling = ci, Q.unstable_UserBlockingPriority = st, Q.unstable_cancelCallback = Dn, Q.unstable_continueExecution = lt, Q.unstable_forceFrameRate = Gn, Q.unstable_getCurrentPriorityLevel = br, Q.unstable_getFirstCallbackNode = Vt, Q.unstable_next = it, Q.unstable_pauseExecution = nt, Q.unstable_requestPaint = Ya, Q.unstable_runWithPriority = Fe, Q.unstable_scheduleCallback = Ze, Q.unstable_shouldYield = si, Q.unstable_wrapCallback = tt, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ != "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(vE)), vE;
}
var iT;
function fT() {
  return iT || (iT = 1, process.env.NODE_ENV === "production" ? Qm.exports = ok() : Qm.exports = sk()), Qm.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lT;
function ck() {
  if (lT) return Ba;
  lT = 1;
  var Q = Jl, F = fT();
  function _(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, l = 1; l < arguments.length; l++) r += "&args[]=" + encodeURIComponent(arguments[l]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var Oe = /* @__PURE__ */ new Set(), qe = {};
  function be(n, r) {
    S(n, r), S(n + "Capture", r);
  }
  function S(n, r) {
    for (qe[n] = r, n = 0; n < r.length; n++) Oe.add(r[n]);
  }
  var pt = !(typeof window == "undefined" || typeof window.document == "undefined" || typeof window.document.createElement == "undefined"), ue = Object.prototype.hasOwnProperty, oe = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, st = {}, ee = {};
  function Ce(n) {
    return ue.call(ee, n) ? !0 : ue.call(st, n) ? !1 : oe.test(n) ? ee[n] = !0 : (st[n] = !0, !1);
  }
  function se(n, r, l, o) {
    if (l !== null && l.type === 0) return !1;
    switch (typeof r) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return o ? !1 : l !== null ? !l.acceptsBooleans : (n = n.toLowerCase().slice(0, 5), n !== "data-" && n !== "aria-");
      default:
        return !1;
    }
  }
  function Qe(n, r, l, o) {
    if (r === null || typeof r == "undefined" || se(n, r, l, o)) return !0;
    if (o) return !1;
    if (l !== null) switch (l.type) {
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
  function St(n, r, l, o, c, d, m) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = o, this.attributeNamespace = c, this.mustUseProperty = l, this.propertyName = n, this.type = r, this.sanitizeURL = d, this.removeEmptyString = m;
  }
  var ht = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    ht[n] = new St(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    ht[r] = new St(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    ht[n] = new St(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    ht[n] = new St(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    ht[n] = new St(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    ht[n] = new St(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    ht[n] = new St(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    ht[n] = new St(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    ht[n] = new St(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var cn = /[\-:]([a-z])/g;
  function vt(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      cn,
      vt
    );
    ht[r] = new St(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(cn, vt);
    ht[r] = new St(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(cn, vt);
    ht[r] = new St(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    ht[n] = new St(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), ht.xlinkHref = new St("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    ht[n] = new St(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function We(n, r, l, o) {
    var c = ht.hasOwnProperty(r) ? ht[r] : null;
    (c !== null ? c.type !== 0 : o || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (Qe(r, l, c, o) && (l = null), o || c === null ? Ce(r) && (l === null ? n.removeAttribute(r) : n.setAttribute(r, "" + l)) : c.mustUseProperty ? n[c.propertyName] = l === null ? c.type === 3 ? !1 : "" : l : (r = c.attributeName, o = c.attributeNamespace, l === null ? n.removeAttribute(r) : (c = c.type, l = c === 3 || c === 4 && l === !0 ? "" : "" + l, o ? n.setAttributeNS(o, r, l) : n.setAttribute(r, l))));
  }
  var mt = Q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, _e = Symbol.for("react.element"), ct = Symbol.for("react.portal"), He = Symbol.for("react.fragment"), rn = Symbol.for("react.strict_mode"), jt = Symbol.for("react.profiler"), Xt = Symbol.for("react.provider"), an = Symbol.for("react.context"), xt = Symbol.for("react.forward_ref"), Le = Symbol.for("react.suspense"), At = Symbol.for("react.suspense_list"), _t = Symbol.for("react.memo"), Dt = Symbol.for("react.lazy"), Ee = Symbol.for("react.offscreen"), J = Symbol.iterator;
  function Re(n) {
    return n === null || typeof n != "object" ? null : (n = J && n[J] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var ne = Object.assign, k;
  function V(n) {
    if (k === void 0) try {
      throw Error();
    } catch (l) {
      var r = l.stack.trim().match(/\n( *(at )?)/);
      k = r && r[1] || "";
    }
    return `
` + k + n;
  }
  var Pe = !1;
  function Fe(n, r) {
    if (!n || Pe) return "";
    Pe = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (r) if (r = function() {
        throw Error();
      }, Object.defineProperty(r.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(r, []);
        } catch (U) {
          var o = U;
        }
        Reflect.construct(n, [], r);
      } else {
        try {
          r.call();
        } catch (U) {
          o = U;
        }
        n.call(r.prototype);
      }
      else {
        try {
          throw Error();
        } catch (U) {
          o = U;
        }
        n();
      }
    } catch (U) {
      if (U && o && typeof U.stack == "string") {
        for (var c = U.stack.split(`
`), d = o.stack.split(`
`), m = c.length - 1, E = d.length - 1; 1 <= m && 0 <= E && c[m] !== d[E]; ) E--;
        for (; 1 <= m && 0 <= E; m--, E--) if (c[m] !== d[E]) {
          if (m !== 1 || E !== 1)
            do
              if (m--, E--, 0 > E || c[m] !== d[E]) {
                var T = `
` + c[m].replace(" at new ", " at ");
                return n.displayName && T.includes("<anonymous>") && (T = T.replace("<anonymous>", n.displayName)), T;
              }
            while (1 <= m && 0 <= E);
          break;
        }
      }
    } finally {
      Pe = !1, Error.prepareStackTrace = l;
    }
    return (n = n ? n.displayName || n.name : "") ? V(n) : "";
  }
  function it(n) {
    switch (n.tag) {
      case 5:
        return V(n.type);
      case 16:
        return V("Lazy");
      case 13:
        return V("Suspense");
      case 19:
        return V("SuspenseList");
      case 0:
      case 2:
      case 15:
        return n = Fe(n.type, !1), n;
      case 11:
        return n = Fe(n.type.render, !1), n;
      case 1:
        return n = Fe(n.type, !0), n;
      default:
        return "";
    }
  }
  function tt(n) {
    if (n == null) return null;
    if (typeof n == "function") return n.displayName || n.name || null;
    if (typeof n == "string") return n;
    switch (n) {
      case He:
        return "Fragment";
      case ct:
        return "Portal";
      case jt:
        return "Profiler";
      case rn:
        return "StrictMode";
      case Le:
        return "Suspense";
      case At:
        return "SuspenseList";
    }
    if (typeof n == "object") switch (n.$$typeof) {
      case an:
        return (n.displayName || "Context") + ".Consumer";
      case Xt:
        return (n._context.displayName || "Context") + ".Provider";
      case xt:
        var r = n.render;
        return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
      case _t:
        return r = n.displayName || null, r !== null ? r : tt(n.type) || "Memo";
      case Dt:
        r = n._payload, n = n._init;
        try {
          return tt(n(r));
        } catch {
        }
    }
    return null;
  }
  function Ze(n) {
    var r = n.type;
    switch (n.tag) {
      case 24:
        return "Cache";
      case 9:
        return (r.displayName || "Context") + ".Consumer";
      case 10:
        return (r._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return n = r.render, n = n.displayName || n.name || "", r.displayName || (n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef");
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
        return tt(r);
      case 8:
        return r === rn ? "StrictMode" : "Mode";
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
  function nt(n) {
    switch (typeof n) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return n;
      case "object":
        return n;
      default:
        return "";
    }
  }
  function lt(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function Vt(n) {
    var r = lt(n) ? "checked" : "value", l = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), o = "" + n[r];
    if (!n.hasOwnProperty(r) && typeof l != "undefined" && typeof l.get == "function" && typeof l.set == "function") {
      var c = l.get, d = l.set;
      return Object.defineProperty(n, r, { configurable: !0, get: function() {
        return c.call(this);
      }, set: function(m) {
        o = "" + m, d.call(this, m);
      } }), Object.defineProperty(n, r, { enumerable: l.enumerable }), { getValue: function() {
        return o;
      }, setValue: function(m) {
        o = "" + m;
      }, stopTracking: function() {
        n._valueTracker = null, delete n[r];
      } };
    }
  }
  function Dn(n) {
    n._valueTracker || (n._valueTracker = Vt(n));
  }
  function br(n) {
    if (!n) return !1;
    var r = n._valueTracker;
    if (!r) return !0;
    var l = r.getValue(), o = "";
    return n && (o = lt(n) ? n.checked ? "true" : "false" : n.value), n = o, n !== l ? (r.setValue(n), !0) : !1;
  }
  function En(n) {
    if (n = n || (typeof document != "undefined" ? document : void 0), typeof n == "undefined") return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function nr(n, r) {
    var l = r.checked;
    return ne({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: l != null ? l : n._wrapperState.initialChecked });
  }
  function Pn(n, r) {
    var l = r.defaultValue == null ? "" : r.defaultValue, o = r.checked != null ? r.checked : r.defaultChecked;
    l = nt(r.value != null ? r.value : l), n._wrapperState = { initialChecked: o, initialValue: l, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function Vn(n, r) {
    r = r.checked, r != null && We(n, "checked", r, !1);
  }
  function Ir(n, r) {
    Vn(n, r);
    var l = nt(r.value), o = r.type;
    if (l != null) o === "number" ? (l === 0 && n.value === "" || n.value != l) && (n.value = "" + l) : n.value !== "" + l && (n.value = "" + l);
    else if (o === "submit" || o === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? oa(n, r.type, l) : r.hasOwnProperty("defaultValue") && oa(n, r.type, nt(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  function si(n, r, l) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var o = r.type;
      if (!(o !== "submit" && o !== "reset" || r.value !== void 0 && r.value !== null)) return;
      r = "" + n._wrapperState.initialValue, l || r === n.value || (n.value = r), n.defaultValue = r;
    }
    l = n.name, l !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, l !== "" && (n.name = l);
  }
  function oa(n, r, l) {
    (r !== "number" || En(n.ownerDocument) !== n) && (l == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + l && (n.defaultValue = "" + l));
  }
  var Gn = Array.isArray;
  function Cn(n, r, l, o) {
    if (n = n.options, r) {
      r = {};
      for (var c = 0; c < l.length; c++) r["$" + l[c]] = !0;
      for (l = 0; l < n.length; l++) c = r.hasOwnProperty("$" + n[l].value), n[l].selected !== c && (n[l].selected = c), c && o && (n[l].defaultSelected = !0);
    } else {
      for (l = "" + nt(l), r = null, c = 0; c < n.length; c++) {
        if (n[c].value === l) {
          n[c].selected = !0, o && (n[c].defaultSelected = !0);
          return;
        }
        r !== null || n[c].disabled || (r = n[c]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function Bn(n, r) {
    if (r.dangerouslySetInnerHTML != null) throw Error(_(91));
    return ne({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function gr(n, r) {
    var l = r.value;
    if (l == null) {
      if (l = r.children, r = r.defaultValue, l != null) {
        if (r != null) throw Error(_(92));
        if (Gn(l)) {
          if (1 < l.length) throw Error(_(93));
          l = l[0];
        }
        r = l;
      }
      r == null && (r = ""), l = r;
    }
    n._wrapperState = { initialValue: nt(l) };
  }
  function Ia(n, r) {
    var l = nt(r.value), o = nt(r.defaultValue);
    l != null && (l = "" + l, l !== n.value && (n.value = l), r.defaultValue == null && n.defaultValue !== l && (n.defaultValue = l)), o != null && (n.defaultValue = "" + o);
  }
  function On(n) {
    var r = n.textContent;
    r === n._wrapperState.initialValue && r !== "" && r !== null && (n.value = r);
  }
  function Sr(n) {
    switch (n) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function sa(n, r) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? Sr(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var Ya, ci = function(n) {
    return typeof MSApp != "undefined" && MSApp.execUnsafeLocalFunction ? function(r, l, o, c) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(r, l, o, c);
      });
    } : n;
  }(function(n, r) {
    if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n) n.innerHTML = r;
    else {
      for (Ya = Ya || document.createElement("div"), Ya.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = Ya.firstChild; n.firstChild; ) n.removeChild(n.firstChild);
      for (; r.firstChild; ) n.appendChild(r.firstChild);
    }
  });
  function Z(n, r) {
    if (r) {
      var l = n.firstChild;
      if (l && l === n.lastChild && l.nodeType === 3) {
        l.nodeValue = r;
        return;
      }
    }
    n.textContent = r;
  }
  var Te = {
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
    strokeWidth: !0
  }, rt = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Te).forEach(function(n) {
    rt.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), Te[r] = Te[n];
    });
  });
  function Ft(n, r, l) {
    return r == null || typeof r == "boolean" || r === "" ? "" : l || typeof r != "number" || r === 0 || Te.hasOwnProperty(n) && Te[n] ? ("" + r).trim() : r + "px";
  }
  function Jt(n, r) {
    n = n.style;
    for (var l in r) if (r.hasOwnProperty(l)) {
      var o = l.indexOf("--") === 0, c = Ft(l, r[l], o);
      l === "float" && (l = "cssFloat"), o ? n.setProperty(l, c) : n[l] = c;
    }
  }
  var pn = ne({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function ln(n, r) {
    if (r) {
      if (pn[n] && (r.children != null || r.dangerouslySetInnerHTML != null)) throw Error(_(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null) throw Error(_(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML)) throw Error(_(61));
      }
      if (r.style != null && typeof r.style != "object") throw Error(_(62));
    }
  }
  function qn(n, r) {
    if (n.indexOf("-") === -1) return typeof r.is == "string";
    switch (n) {
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
  var Zt = null;
  function Bt(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var $t = null, ca = null, Er = null;
  function Ta(n) {
    if (n = ke(n)) {
      if (typeof $t != "function") throw Error(_(280));
      var r = n.stateNode;
      r && (r = hn(r), $t(n.stateNode, n.type, r));
    }
  }
  function ji(n) {
    ca ? Er ? Er.push(n) : Er = [n] : ca = n;
  }
  function Zl() {
    if (ca) {
      var n = ca, r = Er;
      if (Er = ca = null, Ta(n), r) for (n = 0; n < r.length; n++) Ta(r[n]);
    }
  }
  function eu(n, r) {
    return n(r);
  }
  function dl() {
  }
  var pl = !1;
  function tu(n, r, l) {
    if (pl) return n(r, l);
    pl = !0;
    try {
      return eu(n, r, l);
    } finally {
      pl = !1, (ca !== null || Er !== null) && (dl(), Zl());
    }
  }
  function xr(n, r) {
    var l = n.stateNode;
    if (l === null) return null;
    var o = hn(l);
    if (o === null) return null;
    l = o[r];
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
        (o = !o.disabled) || (n = n.type, o = !(n === "button" || n === "input" || n === "select" || n === "textarea")), n = !o;
        break e;
      default:
        n = !1;
    }
    if (n) return null;
    if (l && typeof l != "function") throw Error(_(231, r, typeof l));
    return l;
  }
  var _r = !1;
  if (pt) try {
    var rr = {};
    Object.defineProperty(rr, "passive", { get: function() {
      _r = !0;
    } }), window.addEventListener("test", rr, rr), window.removeEventListener("test", rr, rr);
  } catch {
    _r = !1;
  }
  function fi(n, r, l, o, c, d, m, E, T) {
    var U = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(l, U);
    } catch (W) {
      this.onError(W);
    }
  }
  var Qa = !1, di = null, pi = !1, R = null, $ = { onError: function(n) {
    Qa = !0, di = n;
  } };
  function ae(n, r, l, o, c, d, m, E, T) {
    Qa = !1, di = null, fi.apply($, arguments);
  }
  function he(n, r, l, o, c, d, m, E, T) {
    if (ae.apply(this, arguments), Qa) {
      if (Qa) {
        var U = di;
        Qa = !1, di = null;
      } else throw Error(_(198));
      pi || (pi = !0, R = U);
    }
  }
  function Ke(n) {
    var r = n, l = n;
    if (n.alternate) for (; r.return; ) r = r.return;
    else {
      n = r;
      do
        r = n, r.flags & 4098 && (l = r.return), n = r.return;
      while (n);
    }
    return r.tag === 3 ? l : null;
  }
  function Ie(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null) return r.dehydrated;
    }
    return null;
  }
  function ft(n) {
    if (Ke(n) !== n) throw Error(_(188));
  }
  function ut(n) {
    var r = n.alternate;
    if (!r) {
      if (r = Ke(n), r === null) throw Error(_(188));
      return r !== n ? null : n;
    }
    for (var l = n, o = r; ; ) {
      var c = l.return;
      if (c === null) break;
      var d = c.alternate;
      if (d === null) {
        if (o = c.return, o !== null) {
          l = o;
          continue;
        }
        break;
      }
      if (c.child === d.child) {
        for (d = c.child; d; ) {
          if (d === l) return ft(c), n;
          if (d === o) return ft(c), r;
          d = d.sibling;
        }
        throw Error(_(188));
      }
      if (l.return !== o.return) l = c, o = d;
      else {
        for (var m = !1, E = c.child; E; ) {
          if (E === l) {
            m = !0, l = c, o = d;
            break;
          }
          if (E === o) {
            m = !0, o = c, l = d;
            break;
          }
          E = E.sibling;
        }
        if (!m) {
          for (E = d.child; E; ) {
            if (E === l) {
              m = !0, l = d, o = c;
              break;
            }
            if (E === o) {
              m = !0, o = d, l = c;
              break;
            }
            E = E.sibling;
          }
          if (!m) throw Error(_(189));
        }
      }
      if (l.alternate !== o) throw Error(_(190));
    }
    if (l.tag !== 3) throw Error(_(188));
    return l.stateNode.current === l ? n : r;
  }
  function Rn(n) {
    return n = ut(n), n !== null ? en(n) : null;
  }
  function en(n) {
    if (n.tag === 5 || n.tag === 6) return n;
    for (n = n.child; n !== null; ) {
      var r = en(n);
      if (r !== null) return r;
      n = n.sibling;
    }
    return null;
  }
  var un = F.unstable_scheduleCallback, ar = F.unstable_cancelCallback, Wa = F.unstable_shouldYield, Ga = F.unstable_requestPaint, Xe = F.unstable_now, et = F.unstable_getCurrentPriorityLevel, qa = F.unstable_ImmediatePriority, nu = F.unstable_UserBlockingPriority, ru = F.unstable_NormalPriority, vl = F.unstable_LowPriority, Wu = F.unstable_IdlePriority, hl = null, Yr = null;
  function Yo(n) {
    if (Yr && typeof Yr.onCommitFiberRoot == "function") try {
      Yr.onCommitFiberRoot(hl, n, void 0, (n.current.flags & 128) === 128);
    } catch {
    }
  }
  var kr = Math.clz32 ? Math.clz32 : Gu, lc = Math.log, uc = Math.LN2;
  function Gu(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (lc(n) / uc | 0) | 0;
  }
  var ml = 64, fa = 4194304;
  function Ka(n) {
    switch (n & -n) {
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
        return n & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return n & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return n;
    }
  }
  function Xa(n, r) {
    var l = n.pendingLanes;
    if (l === 0) return 0;
    var o = 0, c = n.suspendedLanes, d = n.pingedLanes, m = l & 268435455;
    if (m !== 0) {
      var E = m & ~c;
      E !== 0 ? o = Ka(E) : (d &= m, d !== 0 && (o = Ka(d)));
    } else m = l & ~c, m !== 0 ? o = Ka(m) : d !== 0 && (o = Ka(d));
    if (o === 0) return 0;
    if (r !== 0 && r !== o && !(r & c) && (c = o & -o, d = r & -r, c >= d || c === 16 && (d & 4194240) !== 0)) return r;
    if (o & 4 && (o |= l & 16), r = n.entangledLanes, r !== 0) for (n = n.entanglements, r &= o; 0 < r; ) l = 31 - kr(r), c = 1 << l, o |= n[l], r &= ~c;
    return o;
  }
  function qu(n, r) {
    switch (n) {
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
  function au(n, r) {
    for (var l = n.suspendedLanes, o = n.pingedLanes, c = n.expirationTimes, d = n.pendingLanes; 0 < d; ) {
      var m = 31 - kr(d), E = 1 << m, T = c[m];
      T === -1 ? (!(E & l) || E & o) && (c[m] = qu(E, r)) : T <= r && (n.expiredLanes |= E), d &= ~E;
    }
  }
  function yl(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function Ku() {
    var n = ml;
    return ml <<= 1, !(ml & 4194240) && (ml = 64), n;
  }
  function Xu(n) {
    for (var r = [], l = 0; 31 > l; l++) r.push(n);
    return r;
  }
  function Hi(n, r, l) {
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - kr(r), n[r] = l;
  }
  function Wf(n, r) {
    var l = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var o = n.eventTimes;
    for (n = n.expirationTimes; 0 < l; ) {
      var c = 31 - kr(l), d = 1 << c;
      r[c] = 0, o[c] = -1, n[c] = -1, l &= ~d;
    }
  }
  function Pi(n, r) {
    var l = n.entangledLanes |= r;
    for (n = n.entanglements; l; ) {
      var o = 31 - kr(l), c = 1 << o;
      c & r | n[o] & r && (n[o] |= r), l &= ~c;
    }
  }
  var Ot = 0;
  function Ju(n) {
    return n &= -n, 1 < n ? 4 < n ? n & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var wt, Qo, vi, $e, Zu, ir = !1, hi = [], Dr = null, mi = null, on = null, It = /* @__PURE__ */ new Map(), gl = /* @__PURE__ */ new Map(), $n = [], Or = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function wa(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        Dr = null;
        break;
      case "dragenter":
      case "dragleave":
        mi = null;
        break;
      case "mouseover":
      case "mouseout":
        on = null;
        break;
      case "pointerover":
      case "pointerout":
        It.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        gl.delete(r.pointerId);
    }
  }
  function iu(n, r, l, o, c, d) {
    return n === null || n.nativeEvent !== d ? (n = { blockedOn: r, domEventName: l, eventSystemFlags: o, nativeEvent: d, targetContainers: [c] }, r !== null && (r = ke(r), r !== null && Qo(r)), n) : (n.eventSystemFlags |= o, r = n.targetContainers, c !== null && r.indexOf(c) === -1 && r.push(c), n);
  }
  function Wo(n, r, l, o, c) {
    switch (r) {
      case "focusin":
        return Dr = iu(Dr, n, r, l, o, c), !0;
      case "dragenter":
        return mi = iu(mi, n, r, l, o, c), !0;
      case "mouseover":
        return on = iu(on, n, r, l, o, c), !0;
      case "pointerover":
        var d = c.pointerId;
        return It.set(d, iu(It.get(d) || null, n, r, l, o, c)), !0;
      case "gotpointercapture":
        return d = c.pointerId, gl.set(d, iu(gl.get(d) || null, n, r, l, o, c)), !0;
    }
    return !1;
  }
  function Go(n) {
    var r = vu(n.target);
    if (r !== null) {
      var l = Ke(r);
      if (l !== null) {
        if (r = l.tag, r === 13) {
          if (r = Ie(l), r !== null) {
            n.blockedOn = r, Zu(n.priority, function() {
              vi(l);
            });
            return;
          }
        } else if (r === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          n.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    n.blockedOn = null;
  }
  function Sl(n) {
    if (n.blockedOn !== null) return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var l = no(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (l === null) {
        l = n.nativeEvent;
        var o = new l.constructor(l.type, l);
        Zt = o, l.target.dispatchEvent(o), Zt = null;
      } else return r = ke(l), r !== null && Qo(r), n.blockedOn = l, !1;
      r.shift();
    }
    return !0;
  }
  function lu(n, r, l) {
    Sl(n) && l.delete(r);
  }
  function Gf() {
    ir = !1, Dr !== null && Sl(Dr) && (Dr = null), mi !== null && Sl(mi) && (mi = null), on !== null && Sl(on) && (on = null), It.forEach(lu), gl.forEach(lu);
  }
  function ba(n, r) {
    n.blockedOn === r && (n.blockedOn = null, ir || (ir = !0, F.unstable_scheduleCallback(F.unstable_NormalPriority, Gf)));
  }
  function Ja(n) {
    function r(c) {
      return ba(c, n);
    }
    if (0 < hi.length) {
      ba(hi[0], n);
      for (var l = 1; l < hi.length; l++) {
        var o = hi[l];
        o.blockedOn === n && (o.blockedOn = null);
      }
    }
    for (Dr !== null && ba(Dr, n), mi !== null && ba(mi, n), on !== null && ba(on, n), It.forEach(r), gl.forEach(r), l = 0; l < $n.length; l++) o = $n[l], o.blockedOn === n && (o.blockedOn = null);
    for (; 0 < $n.length && (l = $n[0], l.blockedOn === null); ) Go(l), l.blockedOn === null && $n.shift();
  }
  var yi = mt.ReactCurrentBatchConfig, xa = !0;
  function eo(n, r, l, o) {
    var c = Ot, d = yi.transition;
    yi.transition = null;
    try {
      Ot = 1, El(n, r, l, o);
    } finally {
      Ot = c, yi.transition = d;
    }
  }
  function to(n, r, l, o) {
    var c = Ot, d = yi.transition;
    yi.transition = null;
    try {
      Ot = 4, El(n, r, l, o);
    } finally {
      Ot = c, yi.transition = d;
    }
  }
  function El(n, r, l, o) {
    if (xa) {
      var c = no(n, r, l, o);
      if (c === null) Sc(n, r, o, uu, l), wa(n, o);
      else if (Wo(c, n, r, l, o)) o.stopPropagation();
      else if (wa(n, o), r & 4 && -1 < Or.indexOf(n)) {
        for (; c !== null; ) {
          var d = ke(c);
          if (d !== null && wt(d), d = no(n, r, l, o), d === null && Sc(n, r, o, uu, l), d === c) break;
          c = d;
        }
        c !== null && o.stopPropagation();
      } else Sc(n, r, o, null, l);
    }
  }
  var uu = null;
  function no(n, r, l, o) {
    if (uu = null, n = Bt(o), n = vu(n), n !== null) if (r = Ke(n), r === null) n = null;
    else if (l = r.tag, l === 13) {
      if (n = Ie(r), n !== null) return n;
      n = null;
    } else if (l === 3) {
      if (r.stateNode.current.memoizedState.isDehydrated) return r.tag === 3 ? r.stateNode.containerInfo : null;
      n = null;
    } else r !== n && (n = null);
    return uu = n, null;
  }
  function ro(n) {
    switch (n) {
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
        switch (et()) {
          case qa:
            return 1;
          case nu:
            return 4;
          case ru:
          case vl:
            return 16;
          case Wu:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Za = null, h = null, C = null;
  function z() {
    if (C) return C;
    var n, r = h, l = r.length, o, c = "value" in Za ? Za.value : Za.textContent, d = c.length;
    for (n = 0; n < l && r[n] === c[n]; n++) ;
    var m = l - n;
    for (o = 1; o <= m && r[l - o] === c[d - o]; o++) ;
    return C = c.slice(n, 1 < o ? 1 - o : void 0);
  }
  function j(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function X() {
    return !0;
  }
  function Me() {
    return !1;
  }
  function re(n) {
    function r(l, o, c, d, m) {
      this._reactName = l, this._targetInst = c, this.type = o, this.nativeEvent = d, this.target = m, this.currentTarget = null;
      for (var E in n) n.hasOwnProperty(E) && (l = n[E], this[E] = l ? l(d) : d[E]);
      return this.isDefaultPrevented = (d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1) ? X : Me, this.isPropagationStopped = Me, this;
    }
    return ne(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var l = this.nativeEvent;
      l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = X);
    }, stopPropagation: function() {
      var l = this.nativeEvent;
      l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = X);
    }, persist: function() {
    }, isPersistent: X }), r;
  }
  var Ue = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, dt = re(Ue), bt = ne({}, Ue, { view: 0, detail: 0 }), tn = re(bt), Yt, at, Qt, vn = ne({}, bt, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Zf, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== Qt && (Qt && n.type === "mousemove" ? (Yt = n.screenX - Qt.screenX, at = n.screenY - Qt.screenY) : at = Yt = 0, Qt = n), Yt);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : at;
  } }), Cl = re(vn), qo = ne({}, vn, { dataTransfer: 0 }), Vi = re(qo), Ko = ne({}, bt, { relatedTarget: 0 }), ou = re(Ko), qf = ne({}, Ue, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), oc = re(qf), Kf = ne({}, Ue, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), tv = re(Kf), Xf = ne({}, Ue, { data: 0 }), Jf = re(Xf), nv = {
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
  }, rv = {
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
  }, Xm = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Bi(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = Xm[n]) ? !!r[n] : !1;
  }
  function Zf() {
    return Bi;
  }
  var ed = ne({}, bt, { key: function(n) {
    if (n.key) {
      var r = nv[n.key] || n.key;
      if (r !== "Unidentified") return r;
    }
    return n.type === "keypress" ? (n = j(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? rv[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Zf, charCode: function(n) {
    return n.type === "keypress" ? j(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? j(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), td = re(ed), nd = ne({}, vn, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), av = re(nd), sc = ne({}, bt, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Zf }), iv = re(sc), Qr = ne({}, Ue, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), $i = re(Qr), Ln = ne({}, vn, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Ii = re(Ln), rd = [9, 13, 27, 32], ao = pt && "CompositionEvent" in window, Xo = null;
  pt && "documentMode" in document && (Xo = document.documentMode);
  var Jo = pt && "TextEvent" in window && !Xo, lv = pt && (!ao || Xo && 8 < Xo && 11 >= Xo), uv = " ", cc = !1;
  function ov(n, r) {
    switch (n) {
      case "keyup":
        return rd.indexOf(r.keyCode) !== -1;
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
  function sv(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var io = !1;
  function cv(n, r) {
    switch (n) {
      case "compositionend":
        return sv(r);
      case "keypress":
        return r.which !== 32 ? null : (cc = !0, uv);
      case "textInput":
        return n = r.data, n === uv && cc ? null : n;
      default:
        return null;
    }
  }
  function Jm(n, r) {
    if (io) return n === "compositionend" || !ao && ov(n, r) ? (n = z(), C = h = Za = null, io = !1, n) : null;
    switch (n) {
      case "paste":
        return null;
      case "keypress":
        if (!(r.ctrlKey || r.altKey || r.metaKey) || r.ctrlKey && r.altKey) {
          if (r.char && 1 < r.char.length) return r.char;
          if (r.which) return String.fromCharCode(r.which);
        }
        return null;
      case "compositionend":
        return lv && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var Zm = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function fv(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!Zm[n.type] : r === "textarea";
  }
  function ad(n, r, l, o) {
    ji(o), r = as(r, "onChange"), 0 < r.length && (l = new dt("onChange", "change", null, l, o), n.push({ event: l, listeners: r }));
  }
  var gi = null, su = null;
  function dv(n) {
    du(n, 0);
  }
  function Zo(n) {
    var r = ti(n);
    if (br(r)) return n;
  }
  function ey(n, r) {
    if (n === "change") return r;
  }
  var pv = !1;
  if (pt) {
    var id;
    if (pt) {
      var ld = "oninput" in document;
      if (!ld) {
        var vv = document.createElement("div");
        vv.setAttribute("oninput", "return;"), ld = typeof vv.oninput == "function";
      }
      id = ld;
    } else id = !1;
    pv = id && (!document.documentMode || 9 < document.documentMode);
  }
  function hv() {
    gi && (gi.detachEvent("onpropertychange", mv), su = gi = null);
  }
  function mv(n) {
    if (n.propertyName === "value" && Zo(su)) {
      var r = [];
      ad(r, su, n, Bt(n)), tu(dv, r);
    }
  }
  function ty(n, r, l) {
    n === "focusin" ? (hv(), gi = r, su = l, gi.attachEvent("onpropertychange", mv)) : n === "focusout" && hv();
  }
  function yv(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown") return Zo(su);
  }
  function ny(n, r) {
    if (n === "click") return Zo(r);
  }
  function gv(n, r) {
    if (n === "input" || n === "change") return Zo(r);
  }
  function ry(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var ei = typeof Object.is == "function" ? Object.is : ry;
  function es(n, r) {
    if (ei(n, r)) return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null) return !1;
    var l = Object.keys(n), o = Object.keys(r);
    if (l.length !== o.length) return !1;
    for (o = 0; o < l.length; o++) {
      var c = l[o];
      if (!ue.call(r, c) || !ei(n[c], r[c])) return !1;
    }
    return !0;
  }
  function Sv(n) {
    for (; n && n.firstChild; ) n = n.firstChild;
    return n;
  }
  function fc(n, r) {
    var l = Sv(n);
    n = 0;
    for (var o; l; ) {
      if (l.nodeType === 3) {
        if (o = n + l.textContent.length, n <= r && o >= r) return { node: l, offset: r - n };
        n = o;
      }
      e: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break e;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = Sv(l);
    }
  }
  function Rl(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? Rl(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function ts() {
    for (var n = window, r = En(); r instanceof n.HTMLIFrameElement; ) {
      try {
        var l = typeof r.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) n = r.contentWindow;
      else break;
      r = En(n.document);
    }
    return r;
  }
  function dc(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function lo(n) {
    var r = ts(), l = n.focusedElem, o = n.selectionRange;
    if (r !== l && l && l.ownerDocument && Rl(l.ownerDocument.documentElement, l)) {
      if (o !== null && dc(l)) {
        if (r = o.start, n = o.end, n === void 0 && (n = r), "selectionStart" in l) l.selectionStart = r, l.selectionEnd = Math.min(n, l.value.length);
        else if (n = (r = l.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var c = l.textContent.length, d = Math.min(o.start, c);
          o = o.end === void 0 ? d : Math.min(o.end, c), !n.extend && d > o && (c = o, o = d, d = c), c = fc(l, d);
          var m = fc(
            l,
            o
          );
          c && m && (n.rangeCount !== 1 || n.anchorNode !== c.node || n.anchorOffset !== c.offset || n.focusNode !== m.node || n.focusOffset !== m.offset) && (r = r.createRange(), r.setStart(c.node, c.offset), n.removeAllRanges(), d > o ? (n.addRange(r), n.extend(m.node, m.offset)) : (r.setEnd(m.node, m.offset), n.addRange(r)));
        }
      }
      for (r = [], n = l; n = n.parentNode; ) n.nodeType === 1 && r.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof l.focus == "function" && l.focus(), l = 0; l < r.length; l++) n = r[l], n.element.scrollLeft = n.left, n.element.scrollTop = n.top;
    }
  }
  var ay = pt && "documentMode" in document && 11 >= document.documentMode, uo = null, ud = null, ns = null, od = !1;
  function sd(n, r, l) {
    var o = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    od || uo == null || uo !== En(o) || (o = uo, "selectionStart" in o && dc(o) ? o = { start: o.selectionStart, end: o.selectionEnd } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(), o = { anchorNode: o.anchorNode, anchorOffset: o.anchorOffset, focusNode: o.focusNode, focusOffset: o.focusOffset }), ns && es(ns, o) || (ns = o, o = as(ud, "onSelect"), 0 < o.length && (r = new dt("onSelect", "select", null, r, l), n.push({ event: r, listeners: o }), r.target = uo)));
  }
  function pc(n, r) {
    var l = {};
    return l[n.toLowerCase()] = r.toLowerCase(), l["Webkit" + n] = "webkit" + r, l["Moz" + n] = "moz" + r, l;
  }
  var cu = { animationend: pc("Animation", "AnimationEnd"), animationiteration: pc("Animation", "AnimationIteration"), animationstart: pc("Animation", "AnimationStart"), transitionend: pc("Transition", "TransitionEnd") }, lr = {}, cd = {};
  pt && (cd = document.createElement("div").style, "AnimationEvent" in window || (delete cu.animationend.animation, delete cu.animationiteration.animation, delete cu.animationstart.animation), "TransitionEvent" in window || delete cu.transitionend.transition);
  function vc(n) {
    if (lr[n]) return lr[n];
    if (!cu[n]) return n;
    var r = cu[n], l;
    for (l in r) if (r.hasOwnProperty(l) && l in cd) return lr[n] = r[l];
    return n;
  }
  var Ev = vc("animationend"), Cv = vc("animationiteration"), Rv = vc("animationstart"), Tv = vc("transitionend"), fd = /* @__PURE__ */ new Map(), hc = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function _a(n, r) {
    fd.set(n, r), be(r, [n]);
  }
  for (var dd = 0; dd < hc.length; dd++) {
    var fu = hc[dd], iy = fu.toLowerCase(), ly = fu[0].toUpperCase() + fu.slice(1);
    _a(iy, "on" + ly);
  }
  _a(Ev, "onAnimationEnd"), _a(Cv, "onAnimationIteration"), _a(Rv, "onAnimationStart"), _a("dblclick", "onDoubleClick"), _a("focusin", "onFocus"), _a("focusout", "onBlur"), _a(Tv, "onTransitionEnd"), S("onMouseEnter", ["mouseout", "mouseover"]), S("onMouseLeave", ["mouseout", "mouseover"]), S("onPointerEnter", ["pointerout", "pointerover"]), S("onPointerLeave", ["pointerout", "pointerover"]), be("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), be("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), be("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), be("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), be("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), be("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var rs = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), pd = new Set("cancel close invalid load scroll toggle".split(" ").concat(rs));
  function mc(n, r, l) {
    var o = n.type || "unknown-event";
    n.currentTarget = l, he(o, r, void 0, n), n.currentTarget = null;
  }
  function du(n, r) {
    r = (r & 4) !== 0;
    for (var l = 0; l < n.length; l++) {
      var o = n[l], c = o.event;
      o = o.listeners;
      e: {
        var d = void 0;
        if (r) for (var m = o.length - 1; 0 <= m; m--) {
          var E = o[m], T = E.instance, U = E.currentTarget;
          if (E = E.listener, T !== d && c.isPropagationStopped()) break e;
          mc(c, E, U), d = T;
        }
        else for (m = 0; m < o.length; m++) {
          if (E = o[m], T = E.instance, U = E.currentTarget, E = E.listener, T !== d && c.isPropagationStopped()) break e;
          mc(c, E, U), d = T;
        }
      }
    }
    if (pi) throw n = R, pi = !1, R = null, n;
  }
  function Ht(n, r) {
    var l = r[us];
    l === void 0 && (l = r[us] = /* @__PURE__ */ new Set());
    var o = n + "__bubble";
    l.has(o) || (wv(r, n, 2, !1), l.add(o));
  }
  function yc(n, r, l) {
    var o = 0;
    r && (o |= 4), wv(l, n, o, r);
  }
  var gc = "_reactListening" + Math.random().toString(36).slice(2);
  function oo(n) {
    if (!n[gc]) {
      n[gc] = !0, Oe.forEach(function(l) {
        l !== "selectionchange" && (pd.has(l) || yc(l, !1, n), yc(l, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[gc] || (r[gc] = !0, yc("selectionchange", !1, r));
    }
  }
  function wv(n, r, l, o) {
    switch (ro(r)) {
      case 1:
        var c = eo;
        break;
      case 4:
        c = to;
        break;
      default:
        c = El;
    }
    l = c.bind(null, r, l, n), c = void 0, !_r || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (c = !0), o ? c !== void 0 ? n.addEventListener(r, l, { capture: !0, passive: c }) : n.addEventListener(r, l, !0) : c !== void 0 ? n.addEventListener(r, l, { passive: c }) : n.addEventListener(r, l, !1);
  }
  function Sc(n, r, l, o, c) {
    var d = o;
    if (!(r & 1) && !(r & 2) && o !== null) e: for (; ; ) {
      if (o === null) return;
      var m = o.tag;
      if (m === 3 || m === 4) {
        var E = o.stateNode.containerInfo;
        if (E === c || E.nodeType === 8 && E.parentNode === c) break;
        if (m === 4) for (m = o.return; m !== null; ) {
          var T = m.tag;
          if ((T === 3 || T === 4) && (T = m.stateNode.containerInfo, T === c || T.nodeType === 8 && T.parentNode === c)) return;
          m = m.return;
        }
        for (; E !== null; ) {
          if (m = vu(E), m === null) return;
          if (T = m.tag, T === 5 || T === 6) {
            o = d = m;
            continue e;
          }
          E = E.parentNode;
        }
      }
      o = o.return;
    }
    tu(function() {
      var U = d, W = Bt(l), q = [];
      e: {
        var Y = fd.get(n);
        if (Y !== void 0) {
          var fe = dt, me = n;
          switch (n) {
            case "keypress":
              if (j(l) === 0) break e;
            case "keydown":
            case "keyup":
              fe = td;
              break;
            case "focusin":
              me = "focus", fe = ou;
              break;
            case "focusout":
              me = "blur", fe = ou;
              break;
            case "beforeblur":
            case "afterblur":
              fe = ou;
              break;
            case "click":
              if (l.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              fe = Cl;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              fe = Vi;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              fe = iv;
              break;
            case Ev:
            case Cv:
            case Rv:
              fe = oc;
              break;
            case Tv:
              fe = $i;
              break;
            case "scroll":
              fe = tn;
              break;
            case "wheel":
              fe = Ii;
              break;
            case "copy":
            case "cut":
            case "paste":
              fe = tv;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              fe = av;
          }
          var Se = (r & 4) !== 0, _n = !Se && n === "scroll", D = Se ? Y !== null ? Y + "Capture" : null : Y;
          Se = [];
          for (var b = U, M; b !== null; ) {
            M = b;
            var G = M.stateNode;
            if (M.tag === 5 && G !== null && (M = G, D !== null && (G = xr(b, D), G != null && Se.push(so(b, G, M)))), _n) break;
            b = b.return;
          }
          0 < Se.length && (Y = new fe(Y, me, null, l, W), q.push({ event: Y, listeners: Se }));
        }
      }
      if (!(r & 7)) {
        e: {
          if (Y = n === "mouseover" || n === "pointerover", fe = n === "mouseout" || n === "pointerout", Y && l !== Zt && (me = l.relatedTarget || l.fromElement) && (vu(me) || me[Yi])) break e;
          if ((fe || Y) && (Y = W.window === W ? W : (Y = W.ownerDocument) ? Y.defaultView || Y.parentWindow : window, fe ? (me = l.relatedTarget || l.toElement, fe = U, me = me ? vu(me) : null, me !== null && (_n = Ke(me), me !== _n || me.tag !== 5 && me.tag !== 6) && (me = null)) : (fe = null, me = U), fe !== me)) {
            if (Se = Cl, G = "onMouseLeave", D = "onMouseEnter", b = "mouse", (n === "pointerout" || n === "pointerover") && (Se = av, G = "onPointerLeave", D = "onPointerEnter", b = "pointer"), _n = fe == null ? Y : ti(fe), M = me == null ? Y : ti(me), Y = new Se(G, b + "leave", fe, l, W), Y.target = _n, Y.relatedTarget = M, G = null, vu(W) === U && (Se = new Se(D, b + "enter", me, l, W), Se.target = M, Se.relatedTarget = _n, G = Se), _n = G, fe && me) t: {
              for (Se = fe, D = me, b = 0, M = Se; M; M = Tl(M)) b++;
              for (M = 0, G = D; G; G = Tl(G)) M++;
              for (; 0 < b - M; ) Se = Tl(Se), b--;
              for (; 0 < M - b; ) D = Tl(D), M--;
              for (; b--; ) {
                if (Se === D || D !== null && Se === D.alternate) break t;
                Se = Tl(Se), D = Tl(D);
              }
              Se = null;
            }
            else Se = null;
            fe !== null && bv(q, Y, fe, Se, !1), me !== null && _n !== null && bv(q, _n, me, Se, !0);
          }
        }
        e: {
          if (Y = U ? ti(U) : window, fe = Y.nodeName && Y.nodeName.toLowerCase(), fe === "select" || fe === "input" && Y.type === "file") var ye = ey;
          else if (fv(Y)) if (pv) ye = gv;
          else {
            ye = yv;
            var ze = ty;
          }
          else (fe = Y.nodeName) && fe.toLowerCase() === "input" && (Y.type === "checkbox" || Y.type === "radio") && (ye = ny);
          if (ye && (ye = ye(n, U))) {
            ad(q, ye, l, W);
            break e;
          }
          ze && ze(n, Y, U), n === "focusout" && (ze = Y._wrapperState) && ze.controlled && Y.type === "number" && oa(Y, "number", Y.value);
        }
        switch (ze = U ? ti(U) : window, n) {
          case "focusin":
            (fv(ze) || ze.contentEditable === "true") && (uo = ze, ud = U, ns = null);
            break;
          case "focusout":
            ns = ud = uo = null;
            break;
          case "mousedown":
            od = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            od = !1, sd(q, l, W);
            break;
          case "selectionchange":
            if (ay) break;
          case "keydown":
          case "keyup":
            sd(q, l, W);
        }
        var Ae;
        if (ao) e: {
          switch (n) {
            case "compositionstart":
              var Be = "onCompositionStart";
              break e;
            case "compositionend":
              Be = "onCompositionEnd";
              break e;
            case "compositionupdate":
              Be = "onCompositionUpdate";
              break e;
          }
          Be = void 0;
        }
        else io ? ov(n, l) && (Be = "onCompositionEnd") : n === "keydown" && l.keyCode === 229 && (Be = "onCompositionStart");
        Be && (lv && l.locale !== "ko" && (io || Be !== "onCompositionStart" ? Be === "onCompositionEnd" && io && (Ae = z()) : (Za = W, h = "value" in Za ? Za.value : Za.textContent, io = !0)), ze = as(U, Be), 0 < ze.length && (Be = new Jf(Be, n, null, l, W), q.push({ event: Be, listeners: ze }), Ae ? Be.data = Ae : (Ae = sv(l), Ae !== null && (Be.data = Ae)))), (Ae = Jo ? cv(n, l) : Jm(n, l)) && (U = as(U, "onBeforeInput"), 0 < U.length && (W = new Jf("onBeforeInput", "beforeinput", null, l, W), q.push({ event: W, listeners: U }), W.data = Ae));
      }
      du(q, r);
    });
  }
  function so(n, r, l) {
    return { instance: n, listener: r, currentTarget: l };
  }
  function as(n, r) {
    for (var l = r + "Capture", o = []; n !== null; ) {
      var c = n, d = c.stateNode;
      c.tag === 5 && d !== null && (c = d, d = xr(n, l), d != null && o.unshift(so(n, d, c)), d = xr(n, r), d != null && o.push(so(n, d, c))), n = n.return;
    }
    return o;
  }
  function Tl(n) {
    if (n === null) return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function bv(n, r, l, o, c) {
    for (var d = r._reactName, m = []; l !== null && l !== o; ) {
      var E = l, T = E.alternate, U = E.stateNode;
      if (T !== null && T === o) break;
      E.tag === 5 && U !== null && (E = U, c ? (T = xr(l, d), T != null && m.unshift(so(l, T, E))) : c || (T = xr(l, d), T != null && m.push(so(l, T, E)))), l = l.return;
    }
    m.length !== 0 && n.push({ event: r, listeners: m });
  }
  var xv = /\r\n?/g, uy = /\u0000|\uFFFD/g;
  function _v(n) {
    return (typeof n == "string" ? n : "" + n).replace(xv, `
`).replace(uy, "");
  }
  function Ec(n, r, l) {
    if (r = _v(r), _v(n) !== r && l) throw Error(_(425));
  }
  function wl() {
  }
  var is = null, pu = null;
  function Cc(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var Rc = typeof setTimeout == "function" ? setTimeout : void 0, vd = typeof clearTimeout == "function" ? clearTimeout : void 0, kv = typeof Promise == "function" ? Promise : void 0, co = typeof queueMicrotask == "function" ? queueMicrotask : typeof kv != "undefined" ? function(n) {
    return kv.resolve(null).then(n).catch(Tc);
  } : Rc;
  function Tc(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function fo(n, r) {
    var l = r, o = 0;
    do {
      var c = l.nextSibling;
      if (n.removeChild(l), c && c.nodeType === 8) if (l = c.data, l === "/$") {
        if (o === 0) {
          n.removeChild(c), Ja(r);
          return;
        }
        o--;
      } else l !== "$" && l !== "$?" && l !== "$!" || o++;
      l = c;
    } while (l);
    Ja(r);
  }
  function Si(n) {
    for (; n != null; n = n.nextSibling) {
      var r = n.nodeType;
      if (r === 1 || r === 3) break;
      if (r === 8) {
        if (r = n.data, r === "$" || r === "$!" || r === "$?") break;
        if (r === "/$") return null;
      }
    }
    return n;
  }
  function Dv(n) {
    n = n.previousSibling;
    for (var r = 0; n; ) {
      if (n.nodeType === 8) {
        var l = n.data;
        if (l === "$" || l === "$!" || l === "$?") {
          if (r === 0) return n;
          r--;
        } else l === "/$" && r++;
      }
      n = n.previousSibling;
    }
    return null;
  }
  var bl = Math.random().toString(36).slice(2), Ei = "__reactFiber$" + bl, ls = "__reactProps$" + bl, Yi = "__reactContainer$" + bl, us = "__reactEvents$" + bl, po = "__reactListeners$" + bl, oy = "__reactHandles$" + bl;
  function vu(n) {
    var r = n[Ei];
    if (r) return r;
    for (var l = n.parentNode; l; ) {
      if (r = l[Yi] || l[Ei]) {
        if (l = r.alternate, r.child !== null || l !== null && l.child !== null) for (n = Dv(n); n !== null; ) {
          if (l = n[Ei]) return l;
          n = Dv(n);
        }
        return r;
      }
      n = l, l = n.parentNode;
    }
    return null;
  }
  function ke(n) {
    return n = n[Ei] || n[Yi], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function ti(n) {
    if (n.tag === 5 || n.tag === 6) return n.stateNode;
    throw Error(_(33));
  }
  function hn(n) {
    return n[ls] || null;
  }
  var Et = [], ka = -1;
  function Da(n) {
    return { current: n };
  }
  function nn(n) {
    0 > ka || (n.current = Et[ka], Et[ka] = null, ka--);
  }
  function xe(n, r) {
    ka++, Et[ka] = n.current, n.current = r;
  }
  var Cr = {}, Sn = Da(Cr), In = Da(!1), Wr = Cr;
  function Gr(n, r) {
    var l = n.type.contextTypes;
    if (!l) return Cr;
    var o = n.stateNode;
    if (o && o.__reactInternalMemoizedUnmaskedChildContext === r) return o.__reactInternalMemoizedMaskedChildContext;
    var c = {}, d;
    for (d in l) c[d] = r[d];
    return o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = c), c;
  }
  function Mn(n) {
    return n = n.childContextTypes, n != null;
  }
  function vo() {
    nn(In), nn(Sn);
  }
  function Ov(n, r, l) {
    if (Sn.current !== Cr) throw Error(_(168));
    xe(Sn, r), xe(In, l);
  }
  function os(n, r, l) {
    var o = n.stateNode;
    if (r = r.childContextTypes, typeof o.getChildContext != "function") return l;
    o = o.getChildContext();
    for (var c in o) if (!(c in r)) throw Error(_(108, Ze(n) || "Unknown", c));
    return ne({}, l, o);
  }
  function Kn(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || Cr, Wr = Sn.current, xe(Sn, n), xe(In, In.current), !0;
  }
  function wc(n, r, l) {
    var o = n.stateNode;
    if (!o) throw Error(_(169));
    l ? (n = os(n, r, Wr), o.__reactInternalMemoizedMergedChildContext = n, nn(In), nn(Sn), xe(Sn, n)) : nn(In), xe(In, l);
  }
  var Ci = null, ho = !1, Qi = !1;
  function bc(n) {
    Ci === null ? Ci = [n] : Ci.push(n);
  }
  function xl(n) {
    ho = !0, bc(n);
  }
  function Ri() {
    if (!Qi && Ci !== null) {
      Qi = !0;
      var n = 0, r = Ot;
      try {
        var l = Ci;
        for (Ot = 1; n < l.length; n++) {
          var o = l[n];
          do
            o = o(!0);
          while (o !== null);
        }
        Ci = null, ho = !1;
      } catch (c) {
        throw Ci !== null && (Ci = Ci.slice(n + 1)), un(qa, Ri), c;
      } finally {
        Ot = r, Qi = !1;
      }
    }
    return null;
  }
  var _l = [], kl = 0, Dl = null, Wi = 0, Nn = [], Oa = 0, da = null, Ti = 1, wi = "";
  function hu(n, r) {
    _l[kl++] = Wi, _l[kl++] = Dl, Dl = n, Wi = r;
  }
  function Lv(n, r, l) {
    Nn[Oa++] = Ti, Nn[Oa++] = wi, Nn[Oa++] = da, da = n;
    var o = Ti;
    n = wi;
    var c = 32 - kr(o) - 1;
    o &= ~(1 << c), l += 1;
    var d = 32 - kr(r) + c;
    if (30 < d) {
      var m = c - c % 5;
      d = (o & (1 << m) - 1).toString(32), o >>= m, c -= m, Ti = 1 << 32 - kr(r) + c | l << c | o, wi = d + n;
    } else Ti = 1 << d | l << c | o, wi = n;
  }
  function xc(n) {
    n.return !== null && (hu(n, 1), Lv(n, 1, 0));
  }
  function _c(n) {
    for (; n === Dl; ) Dl = _l[--kl], _l[kl] = null, Wi = _l[--kl], _l[kl] = null;
    for (; n === da; ) da = Nn[--Oa], Nn[Oa] = null, wi = Nn[--Oa], Nn[Oa] = null, Ti = Nn[--Oa], Nn[Oa] = null;
  }
  var qr = null, Kr = null, fn = !1, La = null;
  function hd(n, r) {
    var l = Aa(5, null, null, 0);
    l.elementType = "DELETED", l.stateNode = r, l.return = n, r = n.deletions, r === null ? (n.deletions = [l], n.flags |= 16) : r.push(l);
  }
  function Mv(n, r) {
    switch (n.tag) {
      case 5:
        var l = n.type;
        return r = r.nodeType !== 1 || l.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, qr = n, Kr = Si(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, qr = n, Kr = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (l = da !== null ? { id: Ti, overflow: wi } : null, n.memoizedState = { dehydrated: r, treeContext: l, retryLane: 1073741824 }, l = Aa(18, null, null, 0), l.stateNode = r, l.return = n, n.child = l, qr = n, Kr = null, !0) : !1;
      default:
        return !1;
    }
  }
  function md(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function yd(n) {
    if (fn) {
      var r = Kr;
      if (r) {
        var l = r;
        if (!Mv(n, r)) {
          if (md(n)) throw Error(_(418));
          r = Si(l.nextSibling);
          var o = qr;
          r && Mv(n, r) ? hd(o, l) : (n.flags = n.flags & -4097 | 2, fn = !1, qr = n);
        }
      } else {
        if (md(n)) throw Error(_(418));
        n.flags = n.flags & -4097 | 2, fn = !1, qr = n;
      }
    }
  }
  function Yn(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; ) n = n.return;
    qr = n;
  }
  function kc(n) {
    if (n !== qr) return !1;
    if (!fn) return Yn(n), fn = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !Cc(n.type, n.memoizedProps)), r && (r = Kr)) {
      if (md(n)) throw ss(), Error(_(418));
      for (; r; ) hd(n, r), r = Si(r.nextSibling);
    }
    if (Yn(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(_(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var l = n.data;
            if (l === "/$") {
              if (r === 0) {
                Kr = Si(n.nextSibling);
                break e;
              }
              r--;
            } else l !== "$" && l !== "$!" && l !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        Kr = null;
      }
    } else Kr = qr ? Si(n.stateNode.nextSibling) : null;
    return !0;
  }
  function ss() {
    for (var n = Kr; n; ) n = Si(n.nextSibling);
  }
  function Ol() {
    Kr = qr = null, fn = !1;
  }
  function Gi(n) {
    La === null ? La = [n] : La.push(n);
  }
  var sy = mt.ReactCurrentBatchConfig;
  function mu(n, r, l) {
    if (n = l.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (l._owner) {
        if (l = l._owner, l) {
          if (l.tag !== 1) throw Error(_(309));
          var o = l.stateNode;
        }
        if (!o) throw Error(_(147, n));
        var c = o, d = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === d ? r.ref : (r = function(m) {
          var E = c.refs;
          m === null ? delete E[d] : E[d] = m;
        }, r._stringRef = d, r);
      }
      if (typeof n != "string") throw Error(_(284));
      if (!l._owner) throw Error(_(290, n));
    }
    return n;
  }
  function Dc(n, r) {
    throw n = Object.prototype.toString.call(r), Error(_(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function Nv(n) {
    var r = n._init;
    return r(n._payload);
  }
  function yu(n) {
    function r(D, b) {
      if (n) {
        var M = D.deletions;
        M === null ? (D.deletions = [b], D.flags |= 16) : M.push(b);
      }
    }
    function l(D, b) {
      if (!n) return null;
      for (; b !== null; ) r(D, b), b = b.sibling;
      return null;
    }
    function o(D, b) {
      for (D = /* @__PURE__ */ new Map(); b !== null; ) b.key !== null ? D.set(b.key, b) : D.set(b.index, b), b = b.sibling;
      return D;
    }
    function c(D, b) {
      return D = jl(D, b), D.index = 0, D.sibling = null, D;
    }
    function d(D, b, M) {
      return D.index = M, n ? (M = D.alternate, M !== null ? (M = M.index, M < b ? (D.flags |= 2, b) : M) : (D.flags |= 2, b)) : (D.flags |= 1048576, b);
    }
    function m(D) {
      return n && D.alternate === null && (D.flags |= 2), D;
    }
    function E(D, b, M, G) {
      return b === null || b.tag !== 6 ? (b = Gd(M, D.mode, G), b.return = D, b) : (b = c(b, M), b.return = D, b);
    }
    function T(D, b, M, G) {
      var ye = M.type;
      return ye === He ? W(D, b, M.props.children, G, M.key) : b !== null && (b.elementType === ye || typeof ye == "object" && ye !== null && ye.$$typeof === Dt && Nv(ye) === b.type) ? (G = c(b, M.props), G.ref = mu(D, b, M), G.return = D, G) : (G = Hs(M.type, M.key, M.props, null, D.mode, G), G.ref = mu(D, b, M), G.return = D, G);
    }
    function U(D, b, M, G) {
      return b === null || b.tag !== 4 || b.stateNode.containerInfo !== M.containerInfo || b.stateNode.implementation !== M.implementation ? (b = sf(M, D.mode, G), b.return = D, b) : (b = c(b, M.children || []), b.return = D, b);
    }
    function W(D, b, M, G, ye) {
      return b === null || b.tag !== 7 ? (b = el(M, D.mode, G, ye), b.return = D, b) : (b = c(b, M), b.return = D, b);
    }
    function q(D, b, M) {
      if (typeof b == "string" && b !== "" || typeof b == "number") return b = Gd("" + b, D.mode, M), b.return = D, b;
      if (typeof b == "object" && b !== null) {
        switch (b.$$typeof) {
          case _e:
            return M = Hs(b.type, b.key, b.props, null, D.mode, M), M.ref = mu(D, null, b), M.return = D, M;
          case ct:
            return b = sf(b, D.mode, M), b.return = D, b;
          case Dt:
            var G = b._init;
            return q(D, G(b._payload), M);
        }
        if (Gn(b) || Re(b)) return b = el(b, D.mode, M, null), b.return = D, b;
        Dc(D, b);
      }
      return null;
    }
    function Y(D, b, M, G) {
      var ye = b !== null ? b.key : null;
      if (typeof M == "string" && M !== "" || typeof M == "number") return ye !== null ? null : E(D, b, "" + M, G);
      if (typeof M == "object" && M !== null) {
        switch (M.$$typeof) {
          case _e:
            return M.key === ye ? T(D, b, M, G) : null;
          case ct:
            return M.key === ye ? U(D, b, M, G) : null;
          case Dt:
            return ye = M._init, Y(
              D,
              b,
              ye(M._payload),
              G
            );
        }
        if (Gn(M) || Re(M)) return ye !== null ? null : W(D, b, M, G, null);
        Dc(D, M);
      }
      return null;
    }
    function fe(D, b, M, G, ye) {
      if (typeof G == "string" && G !== "" || typeof G == "number") return D = D.get(M) || null, E(b, D, "" + G, ye);
      if (typeof G == "object" && G !== null) {
        switch (G.$$typeof) {
          case _e:
            return D = D.get(G.key === null ? M : G.key) || null, T(b, D, G, ye);
          case ct:
            return D = D.get(G.key === null ? M : G.key) || null, U(b, D, G, ye);
          case Dt:
            var ze = G._init;
            return fe(D, b, M, ze(G._payload), ye);
        }
        if (Gn(G) || Re(G)) return D = D.get(M) || null, W(b, D, G, ye, null);
        Dc(b, G);
      }
      return null;
    }
    function me(D, b, M, G) {
      for (var ye = null, ze = null, Ae = b, Be = b = 0, Zn = null; Ae !== null && Be < M.length; Be++) {
        Ae.index > Be ? (Zn = Ae, Ae = null) : Zn = Ae.sibling;
        var Nt = Y(D, Ae, M[Be], G);
        if (Nt === null) {
          Ae === null && (Ae = Zn);
          break;
        }
        n && Ae && Nt.alternate === null && r(D, Ae), b = d(Nt, b, Be), ze === null ? ye = Nt : ze.sibling = Nt, ze = Nt, Ae = Zn;
      }
      if (Be === M.length) return l(D, Ae), fn && hu(D, Be), ye;
      if (Ae === null) {
        for (; Be < M.length; Be++) Ae = q(D, M[Be], G), Ae !== null && (b = d(Ae, b, Be), ze === null ? ye = Ae : ze.sibling = Ae, ze = Ae);
        return fn && hu(D, Be), ye;
      }
      for (Ae = o(D, Ae); Be < M.length; Be++) Zn = fe(Ae, D, Be, M[Be], G), Zn !== null && (n && Zn.alternate !== null && Ae.delete(Zn.key === null ? Be : Zn.key), b = d(Zn, b, Be), ze === null ? ye = Zn : ze.sibling = Zn, ze = Zn);
      return n && Ae.forEach(function(Vl) {
        return r(D, Vl);
      }), fn && hu(D, Be), ye;
    }
    function Se(D, b, M, G) {
      var ye = Re(M);
      if (typeof ye != "function") throw Error(_(150));
      if (M = ye.call(M), M == null) throw Error(_(151));
      for (var ze = ye = null, Ae = b, Be = b = 0, Zn = null, Nt = M.next(); Ae !== null && !Nt.done; Be++, Nt = M.next()) {
        Ae.index > Be ? (Zn = Ae, Ae = null) : Zn = Ae.sibling;
        var Vl = Y(D, Ae, Nt.value, G);
        if (Vl === null) {
          Ae === null && (Ae = Zn);
          break;
        }
        n && Ae && Vl.alternate === null && r(D, Ae), b = d(Vl, b, Be), ze === null ? ye = Vl : ze.sibling = Vl, ze = Vl, Ae = Zn;
      }
      if (Nt.done) return l(
        D,
        Ae
      ), fn && hu(D, Be), ye;
      if (Ae === null) {
        for (; !Nt.done; Be++, Nt = M.next()) Nt = q(D, Nt.value, G), Nt !== null && (b = d(Nt, b, Be), ze === null ? ye = Nt : ze.sibling = Nt, ze = Nt);
        return fn && hu(D, Be), ye;
      }
      for (Ae = o(D, Ae); !Nt.done; Be++, Nt = M.next()) Nt = fe(Ae, D, Be, Nt.value, G), Nt !== null && (n && Nt.alternate !== null && Ae.delete(Nt.key === null ? Be : Nt.key), b = d(Nt, b, Be), ze === null ? ye = Nt : ze.sibling = Nt, ze = Nt);
      return n && Ae.forEach(function(hh) {
        return r(D, hh);
      }), fn && hu(D, Be), ye;
    }
    function _n(D, b, M, G) {
      if (typeof M == "object" && M !== null && M.type === He && M.key === null && (M = M.props.children), typeof M == "object" && M !== null) {
        switch (M.$$typeof) {
          case _e:
            e: {
              for (var ye = M.key, ze = b; ze !== null; ) {
                if (ze.key === ye) {
                  if (ye = M.type, ye === He) {
                    if (ze.tag === 7) {
                      l(D, ze.sibling), b = c(ze, M.props.children), b.return = D, D = b;
                      break e;
                    }
                  } else if (ze.elementType === ye || typeof ye == "object" && ye !== null && ye.$$typeof === Dt && Nv(ye) === ze.type) {
                    l(D, ze.sibling), b = c(ze, M.props), b.ref = mu(D, ze, M), b.return = D, D = b;
                    break e;
                  }
                  l(D, ze);
                  break;
                } else r(D, ze);
                ze = ze.sibling;
              }
              M.type === He ? (b = el(M.props.children, D.mode, G, M.key), b.return = D, D = b) : (G = Hs(M.type, M.key, M.props, null, D.mode, G), G.ref = mu(D, b, M), G.return = D, D = G);
            }
            return m(D);
          case ct:
            e: {
              for (ze = M.key; b !== null; ) {
                if (b.key === ze) if (b.tag === 4 && b.stateNode.containerInfo === M.containerInfo && b.stateNode.implementation === M.implementation) {
                  l(D, b.sibling), b = c(b, M.children || []), b.return = D, D = b;
                  break e;
                } else {
                  l(D, b);
                  break;
                }
                else r(D, b);
                b = b.sibling;
              }
              b = sf(M, D.mode, G), b.return = D, D = b;
            }
            return m(D);
          case Dt:
            return ze = M._init, _n(D, b, ze(M._payload), G);
        }
        if (Gn(M)) return me(D, b, M, G);
        if (Re(M)) return Se(D, b, M, G);
        Dc(D, M);
      }
      return typeof M == "string" && M !== "" || typeof M == "number" ? (M = "" + M, b !== null && b.tag === 6 ? (l(D, b.sibling), b = c(b, M), b.return = D, D = b) : (l(D, b), b = Gd(M, D.mode, G), b.return = D, D = b), m(D)) : l(D, b);
    }
    return _n;
  }
  var Tn = yu(!0), ie = yu(!1), pa = Da(null), Xr = null, mo = null, gd = null;
  function Sd() {
    gd = mo = Xr = null;
  }
  function Ed(n) {
    var r = pa.current;
    nn(pa), n._currentValue = r;
  }
  function Cd(n, r, l) {
    for (; n !== null; ) {
      var o = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, o !== null && (o.childLanes |= r)) : o !== null && (o.childLanes & r) !== r && (o.childLanes |= r), n === l) break;
      n = n.return;
    }
  }
  function mn(n, r) {
    Xr = n, gd = mo = null, n = n.dependencies, n !== null && n.firstContext !== null && (n.lanes & r && (Un = !0), n.firstContext = null);
  }
  function Ma(n) {
    var r = n._currentValue;
    if (gd !== n) if (n = { context: n, memoizedValue: r, next: null }, mo === null) {
      if (Xr === null) throw Error(_(308));
      mo = n, Xr.dependencies = { lanes: 0, firstContext: n };
    } else mo = mo.next = n;
    return r;
  }
  var gu = null;
  function Rd(n) {
    gu === null ? gu = [n] : gu.push(n);
  }
  function Td(n, r, l, o) {
    var c = r.interleaved;
    return c === null ? (l.next = l, Rd(r)) : (l.next = c.next, c.next = l), r.interleaved = l, va(n, o);
  }
  function va(n, r) {
    n.lanes |= r;
    var l = n.alternate;
    for (l !== null && (l.lanes |= r), l = n, n = n.return; n !== null; ) n.childLanes |= r, l = n.alternate, l !== null && (l.childLanes |= r), l = n, n = n.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var ha = !1;
  function wd(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function zv(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function qi(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function Ll(n, r, l) {
    var o = n.updateQueue;
    if (o === null) return null;
    if (o = o.shared, Ct & 2) {
      var c = o.pending;
      return c === null ? r.next = r : (r.next = c.next, c.next = r), o.pending = r, va(n, l);
    }
    return c = o.interleaved, c === null ? (r.next = r, Rd(o)) : (r.next = c.next, c.next = r), o.interleaved = r, va(n, l);
  }
  function Oc(n, r, l) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (l & 4194240) !== 0)) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, Pi(n, l);
    }
  }
  function Uv(n, r) {
    var l = n.updateQueue, o = n.alternate;
    if (o !== null && (o = o.updateQueue, l === o)) {
      var c = null, d = null;
      if (l = l.firstBaseUpdate, l !== null) {
        do {
          var m = { eventTime: l.eventTime, lane: l.lane, tag: l.tag, payload: l.payload, callback: l.callback, next: null };
          d === null ? c = d = m : d = d.next = m, l = l.next;
        } while (l !== null);
        d === null ? c = d = r : d = d.next = r;
      } else c = d = r;
      l = { baseState: o.baseState, firstBaseUpdate: c, lastBaseUpdate: d, shared: o.shared, effects: o.effects }, n.updateQueue = l;
      return;
    }
    n = l.lastBaseUpdate, n === null ? l.firstBaseUpdate = r : n.next = r, l.lastBaseUpdate = r;
  }
  function cs(n, r, l, o) {
    var c = n.updateQueue;
    ha = !1;
    var d = c.firstBaseUpdate, m = c.lastBaseUpdate, E = c.shared.pending;
    if (E !== null) {
      c.shared.pending = null;
      var T = E, U = T.next;
      T.next = null, m === null ? d = U : m.next = U, m = T;
      var W = n.alternate;
      W !== null && (W = W.updateQueue, E = W.lastBaseUpdate, E !== m && (E === null ? W.firstBaseUpdate = U : E.next = U, W.lastBaseUpdate = T));
    }
    if (d !== null) {
      var q = c.baseState;
      m = 0, W = U = T = null, E = d;
      do {
        var Y = E.lane, fe = E.eventTime;
        if ((o & Y) === Y) {
          W !== null && (W = W.next = {
            eventTime: fe,
            lane: 0,
            tag: E.tag,
            payload: E.payload,
            callback: E.callback,
            next: null
          });
          e: {
            var me = n, Se = E;
            switch (Y = r, fe = l, Se.tag) {
              case 1:
                if (me = Se.payload, typeof me == "function") {
                  q = me.call(fe, q, Y);
                  break e;
                }
                q = me;
                break e;
              case 3:
                me.flags = me.flags & -65537 | 128;
              case 0:
                if (me = Se.payload, Y = typeof me == "function" ? me.call(fe, q, Y) : me, Y == null) break e;
                q = ne({}, q, Y);
                break e;
              case 2:
                ha = !0;
            }
          }
          E.callback !== null && E.lane !== 0 && (n.flags |= 64, Y = c.effects, Y === null ? c.effects = [E] : Y.push(E));
        } else fe = { eventTime: fe, lane: Y, tag: E.tag, payload: E.payload, callback: E.callback, next: null }, W === null ? (U = W = fe, T = q) : W = W.next = fe, m |= Y;
        if (E = E.next, E === null) {
          if (E = c.shared.pending, E === null) break;
          Y = E, E = Y.next, Y.next = null, c.lastBaseUpdate = Y, c.shared.pending = null;
        }
      } while (!0);
      if (W === null && (T = q), c.baseState = T, c.firstBaseUpdate = U, c.lastBaseUpdate = W, r = c.shared.interleaved, r !== null) {
        c = r;
        do
          m |= c.lane, c = c.next;
        while (c !== r);
      } else d === null && (c.shared.lanes = 0);
      Di |= m, n.lanes = m, n.memoizedState = q;
    }
  }
  function bd(n, r, l) {
    if (n = r.effects, r.effects = null, n !== null) for (r = 0; r < n.length; r++) {
      var o = n[r], c = o.callback;
      if (c !== null) {
        if (o.callback = null, o = l, typeof c != "function") throw Error(_(191, c));
        c.call(o);
      }
    }
  }
  var fs = {}, bi = Da(fs), ds = Da(fs), ps = Da(fs);
  function Su(n) {
    if (n === fs) throw Error(_(174));
    return n;
  }
  function xd(n, r) {
    switch (xe(ps, r), xe(ds, n), xe(bi, fs), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : sa(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = sa(r, n);
    }
    nn(bi), xe(bi, r);
  }
  function Eu() {
    nn(bi), nn(ds), nn(ps);
  }
  function Av(n) {
    Su(ps.current);
    var r = Su(bi.current), l = sa(r, n.type);
    r !== l && (xe(ds, n), xe(bi, l));
  }
  function Lc(n) {
    ds.current === n && (nn(bi), nn(ds));
  }
  var yn = Da(0);
  function Mc(n) {
    for (var r = n; r !== null; ) {
      if (r.tag === 13) {
        var l = r.memoizedState;
        if (l !== null && (l = l.dehydrated, l === null || l.data === "$?" || l.data === "$!")) return r;
      } else if (r.tag === 19 && r.memoizedProps.revealOrder !== void 0) {
        if (r.flags & 128) return r;
      } else if (r.child !== null) {
        r.child.return = r, r = r.child;
        continue;
      }
      if (r === n) break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === n) return null;
        r = r.return;
      }
      r.sibling.return = r.return, r = r.sibling;
    }
    return null;
  }
  var vs = [];
  function De() {
    for (var n = 0; n < vs.length; n++) vs[n]._workInProgressVersionPrimary = null;
    vs.length = 0;
  }
  var ot = mt.ReactCurrentDispatcher, Lt = mt.ReactCurrentBatchConfig, Wt = 0, Mt = null, zn = null, Xn = null, Nc = !1, hs = !1, Cu = 0, I = 0;
  function kt() {
    throw Error(_(321));
  }
  function je(n, r) {
    if (r === null) return !1;
    for (var l = 0; l < r.length && l < n.length; l++) if (!ei(n[l], r[l])) return !1;
    return !0;
  }
  function Ml(n, r, l, o, c, d) {
    if (Wt = d, Mt = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, ot.current = n === null || n.memoizedState === null ? Gc : Cs, n = l(o, c), hs) {
      d = 0;
      do {
        if (hs = !1, Cu = 0, 25 <= d) throw Error(_(301));
        d += 1, Xn = zn = null, r.updateQueue = null, ot.current = qc, n = l(o, c);
      } while (hs);
    }
    if (ot.current = xu, r = zn !== null && zn.next !== null, Wt = 0, Xn = zn = Mt = null, Nc = !1, r) throw Error(_(300));
    return n;
  }
  function ni() {
    var n = Cu !== 0;
    return Cu = 0, n;
  }
  function Rr() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Xn === null ? Mt.memoizedState = Xn = n : Xn = Xn.next = n, Xn;
  }
  function wn() {
    if (zn === null) {
      var n = Mt.alternate;
      n = n !== null ? n.memoizedState : null;
    } else n = zn.next;
    var r = Xn === null ? Mt.memoizedState : Xn.next;
    if (r !== null) Xn = r, zn = n;
    else {
      if (n === null) throw Error(_(310));
      zn = n, n = { memoizedState: zn.memoizedState, baseState: zn.baseState, baseQueue: zn.baseQueue, queue: zn.queue, next: null }, Xn === null ? Mt.memoizedState = Xn = n : Xn = Xn.next = n;
    }
    return Xn;
  }
  function Ki(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function Nl(n) {
    var r = wn(), l = r.queue;
    if (l === null) throw Error(_(311));
    l.lastRenderedReducer = n;
    var o = zn, c = o.baseQueue, d = l.pending;
    if (d !== null) {
      if (c !== null) {
        var m = c.next;
        c.next = d.next, d.next = m;
      }
      o.baseQueue = c = d, l.pending = null;
    }
    if (c !== null) {
      d = c.next, o = o.baseState;
      var E = m = null, T = null, U = d;
      do {
        var W = U.lane;
        if ((Wt & W) === W) T !== null && (T = T.next = { lane: 0, action: U.action, hasEagerState: U.hasEagerState, eagerState: U.eagerState, next: null }), o = U.hasEagerState ? U.eagerState : n(o, U.action);
        else {
          var q = {
            lane: W,
            action: U.action,
            hasEagerState: U.hasEagerState,
            eagerState: U.eagerState,
            next: null
          };
          T === null ? (E = T = q, m = o) : T = T.next = q, Mt.lanes |= W, Di |= W;
        }
        U = U.next;
      } while (U !== null && U !== d);
      T === null ? m = o : T.next = E, ei(o, r.memoizedState) || (Un = !0), r.memoizedState = o, r.baseState = m, r.baseQueue = T, l.lastRenderedState = o;
    }
    if (n = l.interleaved, n !== null) {
      c = n;
      do
        d = c.lane, Mt.lanes |= d, Di |= d, c = c.next;
      while (c !== n);
    } else c === null && (l.lanes = 0);
    return [r.memoizedState, l.dispatch];
  }
  function Ru(n) {
    var r = wn(), l = r.queue;
    if (l === null) throw Error(_(311));
    l.lastRenderedReducer = n;
    var o = l.dispatch, c = l.pending, d = r.memoizedState;
    if (c !== null) {
      l.pending = null;
      var m = c = c.next;
      do
        d = n(d, m.action), m = m.next;
      while (m !== c);
      ei(d, r.memoizedState) || (Un = !0), r.memoizedState = d, r.baseQueue === null && (r.baseState = d), l.lastRenderedState = d;
    }
    return [d, o];
  }
  function zc() {
  }
  function Uc(n, r) {
    var l = Mt, o = wn(), c = r(), d = !ei(o.memoizedState, c);
    if (d && (o.memoizedState = c, Un = !0), o = o.queue, ms(jc.bind(null, l, o, n), [n]), o.getSnapshot !== r || d || Xn !== null && Xn.memoizedState.tag & 1) {
      if (l.flags |= 2048, Tu(9, Fc.bind(null, l, o, c, r), void 0, null), Qn === null) throw Error(_(349));
      Wt & 30 || Ac(l, r, c);
    }
    return c;
  }
  function Ac(n, r, l) {
    n.flags |= 16384, n = { getSnapshot: r, value: l }, r = Mt.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Mt.updateQueue = r, r.stores = [n]) : (l = r.stores, l === null ? r.stores = [n] : l.push(n));
  }
  function Fc(n, r, l, o) {
    r.value = l, r.getSnapshot = o, Hc(r) && Pc(n);
  }
  function jc(n, r, l) {
    return l(function() {
      Hc(r) && Pc(n);
    });
  }
  function Hc(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var l = r();
      return !ei(n, l);
    } catch {
      return !0;
    }
  }
  function Pc(n) {
    var r = va(n, 1);
    r !== null && zr(r, n, 1, -1);
  }
  function Vc(n) {
    var r = Rr();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Ki, lastRenderedState: n }, r.queue = n, n = n.dispatch = bu.bind(null, Mt, n), [r.memoizedState, n];
  }
  function Tu(n, r, l, o) {
    return n = { tag: n, create: r, destroy: l, deps: o, next: null }, r = Mt.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Mt.updateQueue = r, r.lastEffect = n.next = n) : (l = r.lastEffect, l === null ? r.lastEffect = n.next = n : (o = l.next, l.next = n, n.next = o, r.lastEffect = n)), n;
  }
  function Bc() {
    return wn().memoizedState;
  }
  function yo(n, r, l, o) {
    var c = Rr();
    Mt.flags |= n, c.memoizedState = Tu(1 | r, l, void 0, o === void 0 ? null : o);
  }
  function go(n, r, l, o) {
    var c = wn();
    o = o === void 0 ? null : o;
    var d = void 0;
    if (zn !== null) {
      var m = zn.memoizedState;
      if (d = m.destroy, o !== null && je(o, m.deps)) {
        c.memoizedState = Tu(r, l, d, o);
        return;
      }
    }
    Mt.flags |= n, c.memoizedState = Tu(1 | r, l, d, o);
  }
  function $c(n, r) {
    return yo(8390656, 8, n, r);
  }
  function ms(n, r) {
    return go(2048, 8, n, r);
  }
  function Ic(n, r) {
    return go(4, 2, n, r);
  }
  function ys(n, r) {
    return go(4, 4, n, r);
  }
  function wu(n, r) {
    if (typeof r == "function") return n = n(), r(n), function() {
      r(null);
    };
    if (r != null) return n = n(), r.current = n, function() {
      r.current = null;
    };
  }
  function Yc(n, r, l) {
    return l = l != null ? l.concat([n]) : null, go(4, 4, wu.bind(null, r, n), l);
  }
  function gs() {
  }
  function Qc(n, r) {
    var l = wn();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && je(r, o[1]) ? o[0] : (l.memoizedState = [n, r], n);
  }
  function Wc(n, r) {
    var l = wn();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && je(r, o[1]) ? o[0] : (n = n(), l.memoizedState = [n, r], n);
  }
  function _d(n, r, l) {
    return Wt & 21 ? (ei(l, r) || (l = Ku(), Mt.lanes |= l, Di |= l, n.baseState = !0), r) : (n.baseState && (n.baseState = !1, Un = !0), n.memoizedState = l);
  }
  function Ss(n, r) {
    var l = Ot;
    Ot = l !== 0 && 4 > l ? l : 4, n(!0);
    var o = Lt.transition;
    Lt.transition = {};
    try {
      n(!1), r();
    } finally {
      Ot = l, Lt.transition = o;
    }
  }
  function kd() {
    return wn().memoizedState;
  }
  function Es(n, r, l) {
    var o = Oi(n);
    if (l = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null }, Jr(n)) Fv(r, l);
    else if (l = Td(n, r, l, o), l !== null) {
      var c = jn();
      zr(l, n, o, c), Kt(l, r, o);
    }
  }
  function bu(n, r, l) {
    var o = Oi(n), c = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null };
    if (Jr(n)) Fv(r, c);
    else {
      var d = n.alternate;
      if (n.lanes === 0 && (d === null || d.lanes === 0) && (d = r.lastRenderedReducer, d !== null)) try {
        var m = r.lastRenderedState, E = d(m, l);
        if (c.hasEagerState = !0, c.eagerState = E, ei(E, m)) {
          var T = r.interleaved;
          T === null ? (c.next = c, Rd(r)) : (c.next = T.next, T.next = c), r.interleaved = c;
          return;
        }
      } catch {
      } finally {
      }
      l = Td(n, r, c, o), l !== null && (c = jn(), zr(l, n, o, c), Kt(l, r, o));
    }
  }
  function Jr(n) {
    var r = n.alternate;
    return n === Mt || r !== null && r === Mt;
  }
  function Fv(n, r) {
    hs = Nc = !0;
    var l = n.pending;
    l === null ? r.next = r : (r.next = l.next, l.next = r), n.pending = r;
  }
  function Kt(n, r, l) {
    if (l & 4194240) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, Pi(n, l);
    }
  }
  var xu = { readContext: Ma, useCallback: kt, useContext: kt, useEffect: kt, useImperativeHandle: kt, useInsertionEffect: kt, useLayoutEffect: kt, useMemo: kt, useReducer: kt, useRef: kt, useState: kt, useDebugValue: kt, useDeferredValue: kt, useTransition: kt, useMutableSource: kt, useSyncExternalStore: kt, useId: kt, unstable_isNewReconciler: !1 }, Gc = { readContext: Ma, useCallback: function(n, r) {
    return Rr().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: Ma, useEffect: $c, useImperativeHandle: function(n, r, l) {
    return l = l != null ? l.concat([n]) : null, yo(
      4194308,
      4,
      wu.bind(null, r, n),
      l
    );
  }, useLayoutEffect: function(n, r) {
    return yo(4194308, 4, n, r);
  }, useInsertionEffect: function(n, r) {
    return yo(4, 2, n, r);
  }, useMemo: function(n, r) {
    var l = Rr();
    return r = r === void 0 ? null : r, n = n(), l.memoizedState = [n, r], n;
  }, useReducer: function(n, r, l) {
    var o = Rr();
    return r = l !== void 0 ? l(r) : r, o.memoizedState = o.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, o.queue = n, n = n.dispatch = Es.bind(null, Mt, n), [o.memoizedState, n];
  }, useRef: function(n) {
    var r = Rr();
    return n = { current: n }, r.memoizedState = n;
  }, useState: Vc, useDebugValue: gs, useDeferredValue: function(n) {
    return Rr().memoizedState = n;
  }, useTransition: function() {
    var n = Vc(!1), r = n[0];
    return n = Ss.bind(null, n[1]), Rr().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, l) {
    var o = Mt, c = Rr();
    if (fn) {
      if (l === void 0) throw Error(_(407));
      l = l();
    } else {
      if (l = r(), Qn === null) throw Error(_(349));
      Wt & 30 || Ac(o, r, l);
    }
    c.memoizedState = l;
    var d = { value: l, getSnapshot: r };
    return c.queue = d, $c(jc.bind(
      null,
      o,
      d,
      n
    ), [n]), o.flags |= 2048, Tu(9, Fc.bind(null, o, d, l, r), void 0, null), l;
  }, useId: function() {
    var n = Rr(), r = Qn.identifierPrefix;
    if (fn) {
      var l = wi, o = Ti;
      l = (o & ~(1 << 32 - kr(o) - 1)).toString(32) + l, r = ":" + r + "R" + l, l = Cu++, 0 < l && (r += "H" + l.toString(32)), r += ":";
    } else l = I++, r = ":" + r + "r" + l.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, Cs = {
    readContext: Ma,
    useCallback: Qc,
    useContext: Ma,
    useEffect: ms,
    useImperativeHandle: Yc,
    useInsertionEffect: Ic,
    useLayoutEffect: ys,
    useMemo: Wc,
    useReducer: Nl,
    useRef: Bc,
    useState: function() {
      return Nl(Ki);
    },
    useDebugValue: gs,
    useDeferredValue: function(n) {
      var r = wn();
      return _d(r, zn.memoizedState, n);
    },
    useTransition: function() {
      var n = Nl(Ki)[0], r = wn().memoizedState;
      return [n, r];
    },
    useMutableSource: zc,
    useSyncExternalStore: Uc,
    useId: kd,
    unstable_isNewReconciler: !1
  }, qc = { readContext: Ma, useCallback: Qc, useContext: Ma, useEffect: ms, useImperativeHandle: Yc, useInsertionEffect: Ic, useLayoutEffect: ys, useMemo: Wc, useReducer: Ru, useRef: Bc, useState: function() {
    return Ru(Ki);
  }, useDebugValue: gs, useDeferredValue: function(n) {
    var r = wn();
    return zn === null ? r.memoizedState = n : _d(r, zn.memoizedState, n);
  }, useTransition: function() {
    var n = Ru(Ki)[0], r = wn().memoizedState;
    return [n, r];
  }, useMutableSource: zc, useSyncExternalStore: Uc, useId: kd, unstable_isNewReconciler: !1 };
  function ri(n, r) {
    if (n && n.defaultProps) {
      r = ne({}, r), n = n.defaultProps;
      for (var l in n) r[l] === void 0 && (r[l] = n[l]);
      return r;
    }
    return r;
  }
  function Dd(n, r, l, o) {
    r = n.memoizedState, l = l(o, r), l = l == null ? r : ne({}, r, l), n.memoizedState = l, n.lanes === 0 && (n.updateQueue.baseState = l);
  }
  var Kc = { isMounted: function(n) {
    return (n = n._reactInternals) ? Ke(n) === n : !1;
  }, enqueueSetState: function(n, r, l) {
    n = n._reactInternals;
    var o = jn(), c = Oi(n), d = qi(o, c);
    d.payload = r, l != null && (d.callback = l), r = Ll(n, d, c), r !== null && (zr(r, n, c, o), Oc(r, n, c));
  }, enqueueReplaceState: function(n, r, l) {
    n = n._reactInternals;
    var o = jn(), c = Oi(n), d = qi(o, c);
    d.tag = 1, d.payload = r, l != null && (d.callback = l), r = Ll(n, d, c), r !== null && (zr(r, n, c, o), Oc(r, n, c));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var l = jn(), o = Oi(n), c = qi(l, o);
    c.tag = 2, r != null && (c.callback = r), r = Ll(n, c, o), r !== null && (zr(r, n, o, l), Oc(r, n, o));
  } };
  function jv(n, r, l, o, c, d, m) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(o, d, m) : r.prototype && r.prototype.isPureReactComponent ? !es(l, o) || !es(c, d) : !0;
  }
  function Xc(n, r, l) {
    var o = !1, c = Cr, d = r.contextType;
    return typeof d == "object" && d !== null ? d = Ma(d) : (c = Mn(r) ? Wr : Sn.current, o = r.contextTypes, d = (o = o != null) ? Gr(n, c) : Cr), r = new r(l, d), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = Kc, n.stateNode = r, r._reactInternals = n, o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = c, n.__reactInternalMemoizedMaskedChildContext = d), r;
  }
  function Hv(n, r, l, o) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(l, o), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(l, o), r.state !== n && Kc.enqueueReplaceState(r, r.state, null);
  }
  function Rs(n, r, l, o) {
    var c = n.stateNode;
    c.props = l, c.state = n.memoizedState, c.refs = {}, wd(n);
    var d = r.contextType;
    typeof d == "object" && d !== null ? c.context = Ma(d) : (d = Mn(r) ? Wr : Sn.current, c.context = Gr(n, d)), c.state = n.memoizedState, d = r.getDerivedStateFromProps, typeof d == "function" && (Dd(n, r, d, l), c.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (r = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), r !== c.state && Kc.enqueueReplaceState(c, c.state, null), cs(n, l, c, o), c.state = n.memoizedState), typeof c.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function _u(n, r) {
    try {
      var l = "", o = r;
      do
        l += it(o), o = o.return;
      while (o);
      var c = l;
    } catch (d) {
      c = `
Error generating stack: ` + d.message + `
` + d.stack;
    }
    return { value: n, source: r, stack: c, digest: null };
  }
  function Od(n, r, l) {
    return { value: n, source: null, stack: l != null ? l : null, digest: r != null ? r : null };
  }
  function Ld(n, r) {
    try {
      console.error(r.value);
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  var Jc = typeof WeakMap == "function" ? WeakMap : Map;
  function Pv(n, r, l) {
    l = qi(-1, l), l.tag = 3, l.payload = { element: null };
    var o = r.value;
    return l.callback = function() {
      wo || (wo = !0, Ou = o), Ld(n, r);
    }, l;
  }
  function Md(n, r, l) {
    l = qi(-1, l), l.tag = 3;
    var o = n.type.getDerivedStateFromError;
    if (typeof o == "function") {
      var c = r.value;
      l.payload = function() {
        return o(c);
      }, l.callback = function() {
        Ld(n, r);
      };
    }
    var d = n.stateNode;
    return d !== null && typeof d.componentDidCatch == "function" && (l.callback = function() {
      Ld(n, r), typeof o != "function" && (Al === null ? Al = /* @__PURE__ */ new Set([this]) : Al.add(this));
      var m = r.stack;
      this.componentDidCatch(r.value, { componentStack: m !== null ? m : "" });
    }), l;
  }
  function Nd(n, r, l) {
    var o = n.pingCache;
    if (o === null) {
      o = n.pingCache = new Jc();
      var c = /* @__PURE__ */ new Set();
      o.set(r, c);
    } else c = o.get(r), c === void 0 && (c = /* @__PURE__ */ new Set(), o.set(r, c));
    c.has(l) || (c.add(l), n = my.bind(null, n, r, l), r.then(n, n));
  }
  function Vv(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r) return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function zl(n, r, l, o, c) {
    return n.mode & 1 ? (n.flags |= 65536, n.lanes = c, n) : (n === r ? n.flags |= 65536 : (n.flags |= 128, l.flags |= 131072, l.flags &= -52805, l.tag === 1 && (l.alternate === null ? l.tag = 17 : (r = qi(-1, 1), r.tag = 2, Ll(l, r, 1))), l.lanes |= 1), n);
  }
  var Ts = mt.ReactCurrentOwner, Un = !1;
  function ur(n, r, l, o) {
    r.child = n === null ? ie(r, null, l, o) : Tn(r, n.child, l, o);
  }
  function Zr(n, r, l, o, c) {
    l = l.render;
    var d = r.ref;
    return mn(r, c), o = Ml(n, r, l, o, d, c), l = ni(), n !== null && !Un ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, za(n, r, c)) : (fn && l && xc(r), r.flags |= 1, ur(n, r, o, c), r.child);
  }
  function ku(n, r, l, o, c) {
    if (n === null) {
      var d = l.type;
      return typeof d == "function" && !Wd(d) && d.defaultProps === void 0 && l.compare === null && l.defaultProps === void 0 ? (r.tag = 15, r.type = d, Je(n, r, d, o, c)) : (n = Hs(l.type, null, o, r, r.mode, c), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (d = n.child, !(n.lanes & c)) {
      var m = d.memoizedProps;
      if (l = l.compare, l = l !== null ? l : es, l(m, o) && n.ref === r.ref) return za(n, r, c);
    }
    return r.flags |= 1, n = jl(d, o), n.ref = r.ref, n.return = r, r.child = n;
  }
  function Je(n, r, l, o, c) {
    if (n !== null) {
      var d = n.memoizedProps;
      if (es(d, o) && n.ref === r.ref) if (Un = !1, r.pendingProps = o = d, (n.lanes & c) !== 0) n.flags & 131072 && (Un = !0);
      else return r.lanes = n.lanes, za(n, r, c);
    }
    return Bv(n, r, l, o, c);
  }
  function ws(n, r, l) {
    var o = r.pendingProps, c = o.children, d = n !== null ? n.memoizedState : null;
    if (o.mode === "hidden") if (!(r.mode & 1)) r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, xe(Co, ma), ma |= l;
    else {
      if (!(l & 1073741824)) return n = d !== null ? d.baseLanes | l : l, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, xe(Co, ma), ma |= n, null;
      r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, o = d !== null ? d.baseLanes : l, xe(Co, ma), ma |= o;
    }
    else d !== null ? (o = d.baseLanes | l, r.memoizedState = null) : o = l, xe(Co, ma), ma |= o;
    return ur(n, r, c, l), r.child;
  }
  function zd(n, r) {
    var l = r.ref;
    (n === null && l !== null || n !== null && n.ref !== l) && (r.flags |= 512, r.flags |= 2097152);
  }
  function Bv(n, r, l, o, c) {
    var d = Mn(l) ? Wr : Sn.current;
    return d = Gr(r, d), mn(r, c), l = Ml(n, r, l, o, d, c), o = ni(), n !== null && !Un ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, za(n, r, c)) : (fn && o && xc(r), r.flags |= 1, ur(n, r, l, c), r.child);
  }
  function $v(n, r, l, o, c) {
    if (Mn(l)) {
      var d = !0;
      Kn(r);
    } else d = !1;
    if (mn(r, c), r.stateNode === null) Na(n, r), Xc(r, l, o), Rs(r, l, o, c), o = !0;
    else if (n === null) {
      var m = r.stateNode, E = r.memoizedProps;
      m.props = E;
      var T = m.context, U = l.contextType;
      typeof U == "object" && U !== null ? U = Ma(U) : (U = Mn(l) ? Wr : Sn.current, U = Gr(r, U));
      var W = l.getDerivedStateFromProps, q = typeof W == "function" || typeof m.getSnapshotBeforeUpdate == "function";
      q || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (E !== o || T !== U) && Hv(r, m, o, U), ha = !1;
      var Y = r.memoizedState;
      m.state = Y, cs(r, o, m, c), T = r.memoizedState, E !== o || Y !== T || In.current || ha ? (typeof W == "function" && (Dd(r, l, W, o), T = r.memoizedState), (E = ha || jv(r, l, E, o, Y, T, U)) ? (q || typeof m.UNSAFE_componentWillMount != "function" && typeof m.componentWillMount != "function" || (typeof m.componentWillMount == "function" && m.componentWillMount(), typeof m.UNSAFE_componentWillMount == "function" && m.UNSAFE_componentWillMount()), typeof m.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof m.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = o, r.memoizedState = T), m.props = o, m.state = T, m.context = U, o = E) : (typeof m.componentDidMount == "function" && (r.flags |= 4194308), o = !1);
    } else {
      m = r.stateNode, zv(n, r), E = r.memoizedProps, U = r.type === r.elementType ? E : ri(r.type, E), m.props = U, q = r.pendingProps, Y = m.context, T = l.contextType, typeof T == "object" && T !== null ? T = Ma(T) : (T = Mn(l) ? Wr : Sn.current, T = Gr(r, T));
      var fe = l.getDerivedStateFromProps;
      (W = typeof fe == "function" || typeof m.getSnapshotBeforeUpdate == "function") || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (E !== q || Y !== T) && Hv(r, m, o, T), ha = !1, Y = r.memoizedState, m.state = Y, cs(r, o, m, c);
      var me = r.memoizedState;
      E !== q || Y !== me || In.current || ha ? (typeof fe == "function" && (Dd(r, l, fe, o), me = r.memoizedState), (U = ha || jv(r, l, U, o, Y, me, T) || !1) ? (W || typeof m.UNSAFE_componentWillUpdate != "function" && typeof m.componentWillUpdate != "function" || (typeof m.componentWillUpdate == "function" && m.componentWillUpdate(o, me, T), typeof m.UNSAFE_componentWillUpdate == "function" && m.UNSAFE_componentWillUpdate(o, me, T)), typeof m.componentDidUpdate == "function" && (r.flags |= 4), typeof m.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof m.componentDidUpdate != "function" || E === n.memoizedProps && Y === n.memoizedState || (r.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || E === n.memoizedProps && Y === n.memoizedState || (r.flags |= 1024), r.memoizedProps = o, r.memoizedState = me), m.props = o, m.state = me, m.context = T, o = U) : (typeof m.componentDidUpdate != "function" || E === n.memoizedProps && Y === n.memoizedState || (r.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || E === n.memoizedProps && Y === n.memoizedState || (r.flags |= 1024), o = !1);
    }
    return bs(n, r, l, o, d, c);
  }
  function bs(n, r, l, o, c, d) {
    zd(n, r);
    var m = (r.flags & 128) !== 0;
    if (!o && !m) return c && wc(r, l, !1), za(n, r, d);
    o = r.stateNode, Ts.current = r;
    var E = m && typeof l.getDerivedStateFromError != "function" ? null : o.render();
    return r.flags |= 1, n !== null && m ? (r.child = Tn(r, n.child, null, d), r.child = Tn(r, null, E, d)) : ur(n, r, E, d), r.memoizedState = o.state, c && wc(r, l, !0), r.child;
  }
  function So(n) {
    var r = n.stateNode;
    r.pendingContext ? Ov(n, r.pendingContext, r.pendingContext !== r.context) : r.context && Ov(n, r.context, !1), xd(n, r.containerInfo);
  }
  function Iv(n, r, l, o, c) {
    return Ol(), Gi(c), r.flags |= 256, ur(n, r, l, o), r.child;
  }
  var Zc = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Ud(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function ef(n, r, l) {
    var o = r.pendingProps, c = yn.current, d = !1, m = (r.flags & 128) !== 0, E;
    if ((E = m) || (E = n !== null && n.memoizedState === null ? !1 : (c & 2) !== 0), E ? (d = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (c |= 1), xe(yn, c & 1), n === null)
      return yd(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (r.mode & 1 ? n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (m = o.children, n = o.fallback, d ? (o = r.mode, d = r.child, m = { mode: "hidden", children: m }, !(o & 1) && d !== null ? (d.childLanes = 0, d.pendingProps = m) : d = Hl(m, o, 0, null), n = el(n, o, l, null), d.return = r, n.return = r, d.sibling = n, r.child = d, r.child.memoizedState = Ud(l), r.memoizedState = Zc, n) : Ad(r, m));
    if (c = n.memoizedState, c !== null && (E = c.dehydrated, E !== null)) return Yv(n, r, m, o, E, c, l);
    if (d) {
      d = o.fallback, m = r.mode, c = n.child, E = c.sibling;
      var T = { mode: "hidden", children: o.children };
      return !(m & 1) && r.child !== c ? (o = r.child, o.childLanes = 0, o.pendingProps = T, r.deletions = null) : (o = jl(c, T), o.subtreeFlags = c.subtreeFlags & 14680064), E !== null ? d = jl(E, d) : (d = el(d, m, l, null), d.flags |= 2), d.return = r, o.return = r, o.sibling = d, r.child = o, o = d, d = r.child, m = n.child.memoizedState, m = m === null ? Ud(l) : { baseLanes: m.baseLanes | l, cachePool: null, transitions: m.transitions }, d.memoizedState = m, d.childLanes = n.childLanes & ~l, r.memoizedState = Zc, o;
    }
    return d = n.child, n = d.sibling, o = jl(d, { mode: "visible", children: o.children }), !(r.mode & 1) && (o.lanes = l), o.return = r, o.sibling = null, n !== null && (l = r.deletions, l === null ? (r.deletions = [n], r.flags |= 16) : l.push(n)), r.child = o, r.memoizedState = null, o;
  }
  function Ad(n, r) {
    return r = Hl({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function xs(n, r, l, o) {
    return o !== null && Gi(o), Tn(r, n.child, null, l), n = Ad(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function Yv(n, r, l, o, c, d, m) {
    if (l)
      return r.flags & 256 ? (r.flags &= -257, o = Od(Error(_(422))), xs(n, r, m, o)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (d = o.fallback, c = r.mode, o = Hl({ mode: "visible", children: o.children }, c, 0, null), d = el(d, c, m, null), d.flags |= 2, o.return = r, d.return = r, o.sibling = d, r.child = o, r.mode & 1 && Tn(r, n.child, null, m), r.child.memoizedState = Ud(m), r.memoizedState = Zc, d);
    if (!(r.mode & 1)) return xs(n, r, m, null);
    if (c.data === "$!") {
      if (o = c.nextSibling && c.nextSibling.dataset, o) var E = o.dgst;
      return o = E, d = Error(_(419)), o = Od(d, o, void 0), xs(n, r, m, o);
    }
    if (E = (m & n.childLanes) !== 0, Un || E) {
      if (o = Qn, o !== null) {
        switch (m & -m) {
          case 4:
            c = 2;
            break;
          case 16:
            c = 8;
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
            c = 32;
            break;
          case 536870912:
            c = 268435456;
            break;
          default:
            c = 0;
        }
        c = c & (o.suspendedLanes | m) ? 0 : c, c !== 0 && c !== d.retryLane && (d.retryLane = c, va(n, c), zr(o, n, c, -1));
      }
      return Qd(), o = Od(Error(_(421))), xs(n, r, m, o);
    }
    return c.data === "$?" ? (r.flags |= 128, r.child = n.child, r = yy.bind(null, n), c._reactRetry = r, null) : (n = d.treeContext, Kr = Si(c.nextSibling), qr = r, fn = !0, La = null, n !== null && (Nn[Oa++] = Ti, Nn[Oa++] = wi, Nn[Oa++] = da, Ti = n.id, wi = n.overflow, da = r), r = Ad(r, o.children), r.flags |= 4096, r);
  }
  function Fd(n, r, l) {
    n.lanes |= r;
    var o = n.alternate;
    o !== null && (o.lanes |= r), Cd(n.return, r, l);
  }
  function Lr(n, r, l, o, c) {
    var d = n.memoizedState;
    d === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: o, tail: l, tailMode: c } : (d.isBackwards = r, d.rendering = null, d.renderingStartTime = 0, d.last = o, d.tail = l, d.tailMode = c);
  }
  function xi(n, r, l) {
    var o = r.pendingProps, c = o.revealOrder, d = o.tail;
    if (ur(n, r, o.children, l), o = yn.current, o & 2) o = o & 1 | 2, r.flags |= 128;
    else {
      if (n !== null && n.flags & 128) e: for (n = r.child; n !== null; ) {
        if (n.tag === 13) n.memoizedState !== null && Fd(n, l, r);
        else if (n.tag === 19) Fd(n, l, r);
        else if (n.child !== null) {
          n.child.return = n, n = n.child;
          continue;
        }
        if (n === r) break e;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === r) break e;
          n = n.return;
        }
        n.sibling.return = n.return, n = n.sibling;
      }
      o &= 1;
    }
    if (xe(yn, o), !(r.mode & 1)) r.memoizedState = null;
    else switch (c) {
      case "forwards":
        for (l = r.child, c = null; l !== null; ) n = l.alternate, n !== null && Mc(n) === null && (c = l), l = l.sibling;
        l = c, l === null ? (c = r.child, r.child = null) : (c = l.sibling, l.sibling = null), Lr(r, !1, c, l, d);
        break;
      case "backwards":
        for (l = null, c = r.child, r.child = null; c !== null; ) {
          if (n = c.alternate, n !== null && Mc(n) === null) {
            r.child = c;
            break;
          }
          n = c.sibling, c.sibling = l, l = c, c = n;
        }
        Lr(r, !0, l, null, d);
        break;
      case "together":
        Lr(r, !1, null, null, void 0);
        break;
      default:
        r.memoizedState = null;
    }
    return r.child;
  }
  function Na(n, r) {
    !(r.mode & 1) && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function za(n, r, l) {
    if (n !== null && (r.dependencies = n.dependencies), Di |= r.lanes, !(l & r.childLanes)) return null;
    if (n !== null && r.child !== n.child) throw Error(_(153));
    if (r.child !== null) {
      for (n = r.child, l = jl(n, n.pendingProps), r.child = l, l.return = r; n.sibling !== null; ) n = n.sibling, l = l.sibling = jl(n, n.pendingProps), l.return = r;
      l.sibling = null;
    }
    return r.child;
  }
  function _s(n, r, l) {
    switch (r.tag) {
      case 3:
        So(r), Ol();
        break;
      case 5:
        Av(r);
        break;
      case 1:
        Mn(r.type) && Kn(r);
        break;
      case 4:
        xd(r, r.stateNode.containerInfo);
        break;
      case 10:
        var o = r.type._context, c = r.memoizedProps.value;
        xe(pa, o._currentValue), o._currentValue = c;
        break;
      case 13:
        if (o = r.memoizedState, o !== null)
          return o.dehydrated !== null ? (xe(yn, yn.current & 1), r.flags |= 128, null) : l & r.child.childLanes ? ef(n, r, l) : (xe(yn, yn.current & 1), n = za(n, r, l), n !== null ? n.sibling : null);
        xe(yn, yn.current & 1);
        break;
      case 19:
        if (o = (l & r.childLanes) !== 0, n.flags & 128) {
          if (o) return xi(n, r, l);
          r.flags |= 128;
        }
        if (c = r.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), xe(yn, yn.current), o) break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, ws(n, r, l);
    }
    return za(n, r, l);
  }
  var Ua, An, Qv, Wv;
  Ua = function(n, r) {
    for (var l = r.child; l !== null; ) {
      if (l.tag === 5 || l.tag === 6) n.appendChild(l.stateNode);
      else if (l.tag !== 4 && l.child !== null) {
        l.child.return = l, l = l.child;
        continue;
      }
      if (l === r) break;
      for (; l.sibling === null; ) {
        if (l.return === null || l.return === r) return;
        l = l.return;
      }
      l.sibling.return = l.return, l = l.sibling;
    }
  }, An = function() {
  }, Qv = function(n, r, l, o) {
    var c = n.memoizedProps;
    if (c !== o) {
      n = r.stateNode, Su(bi.current);
      var d = null;
      switch (l) {
        case "input":
          c = nr(n, c), o = nr(n, o), d = [];
          break;
        case "select":
          c = ne({}, c, { value: void 0 }), o = ne({}, o, { value: void 0 }), d = [];
          break;
        case "textarea":
          c = Bn(n, c), o = Bn(n, o), d = [];
          break;
        default:
          typeof c.onClick != "function" && typeof o.onClick == "function" && (n.onclick = wl);
      }
      ln(l, o);
      var m;
      l = null;
      for (U in c) if (!o.hasOwnProperty(U) && c.hasOwnProperty(U) && c[U] != null) if (U === "style") {
        var E = c[U];
        for (m in E) E.hasOwnProperty(m) && (l || (l = {}), l[m] = "");
      } else U !== "dangerouslySetInnerHTML" && U !== "children" && U !== "suppressContentEditableWarning" && U !== "suppressHydrationWarning" && U !== "autoFocus" && (qe.hasOwnProperty(U) ? d || (d = []) : (d = d || []).push(U, null));
      for (U in o) {
        var T = o[U];
        if (E = c != null ? c[U] : void 0, o.hasOwnProperty(U) && T !== E && (T != null || E != null)) if (U === "style") if (E) {
          for (m in E) !E.hasOwnProperty(m) || T && T.hasOwnProperty(m) || (l || (l = {}), l[m] = "");
          for (m in T) T.hasOwnProperty(m) && E[m] !== T[m] && (l || (l = {}), l[m] = T[m]);
        } else l || (d || (d = []), d.push(
          U,
          l
        )), l = T;
        else U === "dangerouslySetInnerHTML" ? (T = T ? T.__html : void 0, E = E ? E.__html : void 0, T != null && E !== T && (d = d || []).push(U, T)) : U === "children" ? typeof T != "string" && typeof T != "number" || (d = d || []).push(U, "" + T) : U !== "suppressContentEditableWarning" && U !== "suppressHydrationWarning" && (qe.hasOwnProperty(U) ? (T != null && U === "onScroll" && Ht("scroll", n), d || E === T || (d = [])) : (d = d || []).push(U, T));
      }
      l && (d = d || []).push("style", l);
      var U = d;
      (r.updateQueue = U) && (r.flags |= 4);
    }
  }, Wv = function(n, r, l, o) {
    l !== o && (r.flags |= 4);
  };
  function ks(n, r) {
    if (!fn) switch (n.tailMode) {
      case "hidden":
        r = n.tail;
        for (var l = null; r !== null; ) r.alternate !== null && (l = r), r = r.sibling;
        l === null ? n.tail = null : l.sibling = null;
        break;
      case "collapsed":
        l = n.tail;
        for (var o = null; l !== null; ) l.alternate !== null && (o = l), l = l.sibling;
        o === null ? r || n.tail === null ? n.tail = null : n.tail.sibling = null : o.sibling = null;
    }
  }
  function Jn(n) {
    var r = n.alternate !== null && n.alternate.child === n.child, l = 0, o = 0;
    if (r) for (var c = n.child; c !== null; ) l |= c.lanes | c.childLanes, o |= c.subtreeFlags & 14680064, o |= c.flags & 14680064, c.return = n, c = c.sibling;
    else for (c = n.child; c !== null; ) l |= c.lanes | c.childLanes, o |= c.subtreeFlags, o |= c.flags, c.return = n, c = c.sibling;
    return n.subtreeFlags |= o, n.childLanes = l, r;
  }
  function Gv(n, r, l) {
    var o = r.pendingProps;
    switch (_c(r), r.tag) {
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
        return Jn(r), null;
      case 1:
        return Mn(r.type) && vo(), Jn(r), null;
      case 3:
        return o = r.stateNode, Eu(), nn(In), nn(Sn), De(), o.pendingContext && (o.context = o.pendingContext, o.pendingContext = null), (n === null || n.child === null) && (kc(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, La !== null && (Lu(La), La = null))), An(n, r), Jn(r), null;
      case 5:
        Lc(r);
        var c = Su(ps.current);
        if (l = r.type, n !== null && r.stateNode != null) Qv(n, r, l, o, c), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!o) {
            if (r.stateNode === null) throw Error(_(166));
            return Jn(r), null;
          }
          if (n = Su(bi.current), kc(r)) {
            o = r.stateNode, l = r.type;
            var d = r.memoizedProps;
            switch (o[Ei] = r, o[ls] = d, n = (r.mode & 1) !== 0, l) {
              case "dialog":
                Ht("cancel", o), Ht("close", o);
                break;
              case "iframe":
              case "object":
              case "embed":
                Ht("load", o);
                break;
              case "video":
              case "audio":
                for (c = 0; c < rs.length; c++) Ht(rs[c], o);
                break;
              case "source":
                Ht("error", o);
                break;
              case "img":
              case "image":
              case "link":
                Ht(
                  "error",
                  o
                ), Ht("load", o);
                break;
              case "details":
                Ht("toggle", o);
                break;
              case "input":
                Pn(o, d), Ht("invalid", o);
                break;
              case "select":
                o._wrapperState = { wasMultiple: !!d.multiple }, Ht("invalid", o);
                break;
              case "textarea":
                gr(o, d), Ht("invalid", o);
            }
            ln(l, d), c = null;
            for (var m in d) if (d.hasOwnProperty(m)) {
              var E = d[m];
              m === "children" ? typeof E == "string" ? o.textContent !== E && (d.suppressHydrationWarning !== !0 && Ec(o.textContent, E, n), c = ["children", E]) : typeof E == "number" && o.textContent !== "" + E && (d.suppressHydrationWarning !== !0 && Ec(
                o.textContent,
                E,
                n
              ), c = ["children", "" + E]) : qe.hasOwnProperty(m) && E != null && m === "onScroll" && Ht("scroll", o);
            }
            switch (l) {
              case "input":
                Dn(o), si(o, d, !0);
                break;
              case "textarea":
                Dn(o), On(o);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof d.onClick == "function" && (o.onclick = wl);
            }
            o = c, r.updateQueue = o, o !== null && (r.flags |= 4);
          } else {
            m = c.nodeType === 9 ? c : c.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = Sr(l)), n === "http://www.w3.org/1999/xhtml" ? l === "script" ? (n = m.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof o.is == "string" ? n = m.createElement(l, { is: o.is }) : (n = m.createElement(l), l === "select" && (m = n, o.multiple ? m.multiple = !0 : o.size && (m.size = o.size))) : n = m.createElementNS(n, l), n[Ei] = r, n[ls] = o, Ua(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (m = qn(l, o), l) {
                case "dialog":
                  Ht("cancel", n), Ht("close", n), c = o;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Ht("load", n), c = o;
                  break;
                case "video":
                case "audio":
                  for (c = 0; c < rs.length; c++) Ht(rs[c], n);
                  c = o;
                  break;
                case "source":
                  Ht("error", n), c = o;
                  break;
                case "img":
                case "image":
                case "link":
                  Ht(
                    "error",
                    n
                  ), Ht("load", n), c = o;
                  break;
                case "details":
                  Ht("toggle", n), c = o;
                  break;
                case "input":
                  Pn(n, o), c = nr(n, o), Ht("invalid", n);
                  break;
                case "option":
                  c = o;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!o.multiple }, c = ne({}, o, { value: void 0 }), Ht("invalid", n);
                  break;
                case "textarea":
                  gr(n, o), c = Bn(n, o), Ht("invalid", n);
                  break;
                default:
                  c = o;
              }
              ln(l, c), E = c;
              for (d in E) if (E.hasOwnProperty(d)) {
                var T = E[d];
                d === "style" ? Jt(n, T) : d === "dangerouslySetInnerHTML" ? (T = T ? T.__html : void 0, T != null && ci(n, T)) : d === "children" ? typeof T == "string" ? (l !== "textarea" || T !== "") && Z(n, T) : typeof T == "number" && Z(n, "" + T) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (qe.hasOwnProperty(d) ? T != null && d === "onScroll" && Ht("scroll", n) : T != null && We(n, d, T, m));
              }
              switch (l) {
                case "input":
                  Dn(n), si(n, o, !1);
                  break;
                case "textarea":
                  Dn(n), On(n);
                  break;
                case "option":
                  o.value != null && n.setAttribute("value", "" + nt(o.value));
                  break;
                case "select":
                  n.multiple = !!o.multiple, d = o.value, d != null ? Cn(n, !!o.multiple, d, !1) : o.defaultValue != null && Cn(
                    n,
                    !!o.multiple,
                    o.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof c.onClick == "function" && (n.onclick = wl);
              }
              switch (l) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  o = !!o.autoFocus;
                  break e;
                case "img":
                  o = !0;
                  break e;
                default:
                  o = !1;
              }
            }
            o && (r.flags |= 4);
          }
          r.ref !== null && (r.flags |= 512, r.flags |= 2097152);
        }
        return Jn(r), null;
      case 6:
        if (n && r.stateNode != null) Wv(n, r, n.memoizedProps, o);
        else {
          if (typeof o != "string" && r.stateNode === null) throw Error(_(166));
          if (l = Su(ps.current), Su(bi.current), kc(r)) {
            if (o = r.stateNode, l = r.memoizedProps, o[Ei] = r, (d = o.nodeValue !== l) && (n = qr, n !== null)) switch (n.tag) {
              case 3:
                Ec(o.nodeValue, l, (n.mode & 1) !== 0);
                break;
              case 5:
                n.memoizedProps.suppressHydrationWarning !== !0 && Ec(o.nodeValue, l, (n.mode & 1) !== 0);
            }
            d && (r.flags |= 4);
          } else o = (l.nodeType === 9 ? l : l.ownerDocument).createTextNode(o), o[Ei] = r, r.stateNode = o;
        }
        return Jn(r), null;
      case 13:
        if (nn(yn), o = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (fn && Kr !== null && r.mode & 1 && !(r.flags & 128)) ss(), Ol(), r.flags |= 98560, d = !1;
          else if (d = kc(r), o !== null && o.dehydrated !== null) {
            if (n === null) {
              if (!d) throw Error(_(318));
              if (d = r.memoizedState, d = d !== null ? d.dehydrated : null, !d) throw Error(_(317));
              d[Ei] = r;
            } else Ol(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
            Jn(r), d = !1;
          } else La !== null && (Lu(La), La = null), d = !0;
          if (!d) return r.flags & 65536 ? r : null;
        }
        return r.flags & 128 ? (r.lanes = l, r) : (o = o !== null, o !== (n !== null && n.memoizedState !== null) && o && (r.child.flags |= 8192, r.mode & 1 && (n === null || yn.current & 1 ? xn === 0 && (xn = 3) : Qd())), r.updateQueue !== null && (r.flags |= 4), Jn(r), null);
      case 4:
        return Eu(), An(n, r), n === null && oo(r.stateNode.containerInfo), Jn(r), null;
      case 10:
        return Ed(r.type._context), Jn(r), null;
      case 17:
        return Mn(r.type) && vo(), Jn(r), null;
      case 19:
        if (nn(yn), d = r.memoizedState, d === null) return Jn(r), null;
        if (o = (r.flags & 128) !== 0, m = d.rendering, m === null) if (o) ks(d, !1);
        else {
          if (xn !== 0 || n !== null && n.flags & 128) for (n = r.child; n !== null; ) {
            if (m = Mc(n), m !== null) {
              for (r.flags |= 128, ks(d, !1), o = m.updateQueue, o !== null && (r.updateQueue = o, r.flags |= 4), r.subtreeFlags = 0, o = l, l = r.child; l !== null; ) d = l, n = o, d.flags &= 14680066, m = d.alternate, m === null ? (d.childLanes = 0, d.lanes = n, d.child = null, d.subtreeFlags = 0, d.memoizedProps = null, d.memoizedState = null, d.updateQueue = null, d.dependencies = null, d.stateNode = null) : (d.childLanes = m.childLanes, d.lanes = m.lanes, d.child = m.child, d.subtreeFlags = 0, d.deletions = null, d.memoizedProps = m.memoizedProps, d.memoizedState = m.memoizedState, d.updateQueue = m.updateQueue, d.type = m.type, n = m.dependencies, d.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), l = l.sibling;
              return xe(yn, yn.current & 1 | 2), r.child;
            }
            n = n.sibling;
          }
          d.tail !== null && Xe() > To && (r.flags |= 128, o = !0, ks(d, !1), r.lanes = 4194304);
        }
        else {
          if (!o) if (n = Mc(m), n !== null) {
            if (r.flags |= 128, o = !0, l = n.updateQueue, l !== null && (r.updateQueue = l, r.flags |= 4), ks(d, !0), d.tail === null && d.tailMode === "hidden" && !m.alternate && !fn) return Jn(r), null;
          } else 2 * Xe() - d.renderingStartTime > To && l !== 1073741824 && (r.flags |= 128, o = !0, ks(d, !1), r.lanes = 4194304);
          d.isBackwards ? (m.sibling = r.child, r.child = m) : (l = d.last, l !== null ? l.sibling = m : r.child = m, d.last = m);
        }
        return d.tail !== null ? (r = d.tail, d.rendering = r, d.tail = r.sibling, d.renderingStartTime = Xe(), r.sibling = null, l = yn.current, xe(yn, o ? l & 1 | 2 : l & 1), r) : (Jn(r), null);
      case 22:
      case 23:
        return Yd(), o = r.memoizedState !== null, n !== null && n.memoizedState !== null !== o && (r.flags |= 8192), o && r.mode & 1 ? ma & 1073741824 && (Jn(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : Jn(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(_(156, r.tag));
  }
  function tf(n, r) {
    switch (_c(r), r.tag) {
      case 1:
        return Mn(r.type) && vo(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return Eu(), nn(In), nn(Sn), De(), n = r.flags, n & 65536 && !(n & 128) ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return Lc(r), null;
      case 13:
        if (nn(yn), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null) throw Error(_(340));
          Ol();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return nn(yn), null;
      case 4:
        return Eu(), null;
      case 10:
        return Ed(r.type._context), null;
      case 22:
      case 23:
        return Yd(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Ds = !1, Tr = !1, cy = typeof WeakSet == "function" ? WeakSet : Set, ve = null;
  function Eo(n, r) {
    var l = n.ref;
    if (l !== null) if (typeof l == "function") try {
      l(null);
    } catch (o) {
      dn(n, r, o);
    }
    else l.current = null;
  }
  function nf(n, r, l) {
    try {
      l();
    } catch (o) {
      dn(n, r, o);
    }
  }
  var qv = !1;
  function Kv(n, r) {
    if (is = xa, n = ts(), dc(n)) {
      if ("selectionStart" in n) var l = { start: n.selectionStart, end: n.selectionEnd };
      else e: {
        l = (l = n.ownerDocument) && l.defaultView || window;
        var o = l.getSelection && l.getSelection();
        if (o && o.rangeCount !== 0) {
          l = o.anchorNode;
          var c = o.anchorOffset, d = o.focusNode;
          o = o.focusOffset;
          try {
            l.nodeType, d.nodeType;
          } catch {
            l = null;
            break e;
          }
          var m = 0, E = -1, T = -1, U = 0, W = 0, q = n, Y = null;
          t: for (; ; ) {
            for (var fe; q !== l || c !== 0 && q.nodeType !== 3 || (E = m + c), q !== d || o !== 0 && q.nodeType !== 3 || (T = m + o), q.nodeType === 3 && (m += q.nodeValue.length), (fe = q.firstChild) !== null; )
              Y = q, q = fe;
            for (; ; ) {
              if (q === n) break t;
              if (Y === l && ++U === c && (E = m), Y === d && ++W === o && (T = m), (fe = q.nextSibling) !== null) break;
              q = Y, Y = q.parentNode;
            }
            q = fe;
          }
          l = E === -1 || T === -1 ? null : { start: E, end: T };
        } else l = null;
      }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (pu = { focusedElem: n, selectionRange: l }, xa = !1, ve = r; ve !== null; ) if (r = ve, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null) n.return = r, ve = n;
    else for (; ve !== null; ) {
      r = ve;
      try {
        var me = r.alternate;
        if (r.flags & 1024) switch (r.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (me !== null) {
              var Se = me.memoizedProps, _n = me.memoizedState, D = r.stateNode, b = D.getSnapshotBeforeUpdate(r.elementType === r.type ? Se : ri(r.type, Se), _n);
              D.__reactInternalSnapshotBeforeUpdate = b;
            }
            break;
          case 3:
            var M = r.stateNode.containerInfo;
            M.nodeType === 1 ? M.textContent = "" : M.nodeType === 9 && M.documentElement && M.removeChild(M.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(_(163));
        }
      } catch (G) {
        dn(r, r.return, G);
      }
      if (n = r.sibling, n !== null) {
        n.return = r.return, ve = n;
        break;
      }
      ve = r.return;
    }
    return me = qv, qv = !1, me;
  }
  function Os(n, r, l) {
    var o = r.updateQueue;
    if (o = o !== null ? o.lastEffect : null, o !== null) {
      var c = o = o.next;
      do {
        if ((c.tag & n) === n) {
          var d = c.destroy;
          c.destroy = void 0, d !== void 0 && nf(r, l, d);
        }
        c = c.next;
      } while (c !== o);
    }
  }
  function Ls(n, r) {
    if (r = r.updateQueue, r = r !== null ? r.lastEffect : null, r !== null) {
      var l = r = r.next;
      do {
        if ((l.tag & n) === n) {
          var o = l.create;
          l.destroy = o();
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function jd(n) {
    var r = n.ref;
    if (r !== null) {
      var l = n.stateNode;
      switch (n.tag) {
        case 5:
          n = l;
          break;
        default:
          n = l;
      }
      typeof r == "function" ? r(n) : r.current = n;
    }
  }
  function rf(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, rf(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[Ei], delete r[ls], delete r[us], delete r[po], delete r[oy])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function Ms(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function Xi(n) {
    e: for (; ; ) {
      for (; n.sibling === null; ) {
        if (n.return === null || Ms(n.return)) return null;
        n = n.return;
      }
      for (n.sibling.return = n.return, n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 18; ) {
        if (n.flags & 2 || n.child === null || n.tag === 4) continue e;
        n.child.return = n, n = n.child;
      }
      if (!(n.flags & 2)) return n.stateNode;
    }
  }
  function _i(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6) n = n.stateNode, r ? l.nodeType === 8 ? l.parentNode.insertBefore(n, r) : l.insertBefore(n, r) : (l.nodeType === 8 ? (r = l.parentNode, r.insertBefore(n, l)) : (r = l, r.appendChild(n)), l = l._reactRootContainer, l != null || r.onclick !== null || (r.onclick = wl));
    else if (o !== 4 && (n = n.child, n !== null)) for (_i(n, r, l), n = n.sibling; n !== null; ) _i(n, r, l), n = n.sibling;
  }
  function ki(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6) n = n.stateNode, r ? l.insertBefore(n, r) : l.appendChild(n);
    else if (o !== 4 && (n = n.child, n !== null)) for (ki(n, r, l), n = n.sibling; n !== null; ) ki(n, r, l), n = n.sibling;
  }
  var bn = null, Mr = !1;
  function Nr(n, r, l) {
    for (l = l.child; l !== null; ) Xv(n, r, l), l = l.sibling;
  }
  function Xv(n, r, l) {
    if (Yr && typeof Yr.onCommitFiberUnmount == "function") try {
      Yr.onCommitFiberUnmount(hl, l);
    } catch {
    }
    switch (l.tag) {
      case 5:
        Tr || Eo(l, r);
      case 6:
        var o = bn, c = Mr;
        bn = null, Nr(n, r, l), bn = o, Mr = c, bn !== null && (Mr ? (n = bn, l = l.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(l) : n.removeChild(l)) : bn.removeChild(l.stateNode));
        break;
      case 18:
        bn !== null && (Mr ? (n = bn, l = l.stateNode, n.nodeType === 8 ? fo(n.parentNode, l) : n.nodeType === 1 && fo(n, l), Ja(n)) : fo(bn, l.stateNode));
        break;
      case 4:
        o = bn, c = Mr, bn = l.stateNode.containerInfo, Mr = !0, Nr(n, r, l), bn = o, Mr = c;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Tr && (o = l.updateQueue, o !== null && (o = o.lastEffect, o !== null))) {
          c = o = o.next;
          do {
            var d = c, m = d.destroy;
            d = d.tag, m !== void 0 && (d & 2 || d & 4) && nf(l, r, m), c = c.next;
          } while (c !== o);
        }
        Nr(n, r, l);
        break;
      case 1:
        if (!Tr && (Eo(l, r), o = l.stateNode, typeof o.componentWillUnmount == "function")) try {
          o.props = l.memoizedProps, o.state = l.memoizedState, o.componentWillUnmount();
        } catch (E) {
          dn(l, r, E);
        }
        Nr(n, r, l);
        break;
      case 21:
        Nr(n, r, l);
        break;
      case 22:
        l.mode & 1 ? (Tr = (o = Tr) || l.memoizedState !== null, Nr(n, r, l), Tr = o) : Nr(n, r, l);
        break;
      default:
        Nr(n, r, l);
    }
  }
  function Jv(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var l = n.stateNode;
      l === null && (l = n.stateNode = new cy()), r.forEach(function(o) {
        var c = uh.bind(null, n, o);
        l.has(o) || (l.add(o), o.then(c, c));
      });
    }
  }
  function ai(n, r) {
    var l = r.deletions;
    if (l !== null) for (var o = 0; o < l.length; o++) {
      var c = l[o];
      try {
        var d = n, m = r, E = m;
        e: for (; E !== null; ) {
          switch (E.tag) {
            case 5:
              bn = E.stateNode, Mr = !1;
              break e;
            case 3:
              bn = E.stateNode.containerInfo, Mr = !0;
              break e;
            case 4:
              bn = E.stateNode.containerInfo, Mr = !0;
              break e;
          }
          E = E.return;
        }
        if (bn === null) throw Error(_(160));
        Xv(d, m, c), bn = null, Mr = !1;
        var T = c.alternate;
        T !== null && (T.return = null), c.return = null;
      } catch (U) {
        dn(c, r, U);
      }
    }
    if (r.subtreeFlags & 12854) for (r = r.child; r !== null; ) Hd(r, n), r = r.sibling;
  }
  function Hd(n, r) {
    var l = n.alternate, o = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (ai(r, n), ea(n), o & 4) {
          try {
            Os(3, n, n.return), Ls(3, n);
          } catch (Se) {
            dn(n, n.return, Se);
          }
          try {
            Os(5, n, n.return);
          } catch (Se) {
            dn(n, n.return, Se);
          }
        }
        break;
      case 1:
        ai(r, n), ea(n), o & 512 && l !== null && Eo(l, l.return);
        break;
      case 5:
        if (ai(r, n), ea(n), o & 512 && l !== null && Eo(l, l.return), n.flags & 32) {
          var c = n.stateNode;
          try {
            Z(c, "");
          } catch (Se) {
            dn(n, n.return, Se);
          }
        }
        if (o & 4 && (c = n.stateNode, c != null)) {
          var d = n.memoizedProps, m = l !== null ? l.memoizedProps : d, E = n.type, T = n.updateQueue;
          if (n.updateQueue = null, T !== null) try {
            E === "input" && d.type === "radio" && d.name != null && Vn(c, d), qn(E, m);
            var U = qn(E, d);
            for (m = 0; m < T.length; m += 2) {
              var W = T[m], q = T[m + 1];
              W === "style" ? Jt(c, q) : W === "dangerouslySetInnerHTML" ? ci(c, q) : W === "children" ? Z(c, q) : We(c, W, q, U);
            }
            switch (E) {
              case "input":
                Ir(c, d);
                break;
              case "textarea":
                Ia(c, d);
                break;
              case "select":
                var Y = c._wrapperState.wasMultiple;
                c._wrapperState.wasMultiple = !!d.multiple;
                var fe = d.value;
                fe != null ? Cn(c, !!d.multiple, fe, !1) : Y !== !!d.multiple && (d.defaultValue != null ? Cn(
                  c,
                  !!d.multiple,
                  d.defaultValue,
                  !0
                ) : Cn(c, !!d.multiple, d.multiple ? [] : "", !1));
            }
            c[ls] = d;
          } catch (Se) {
            dn(n, n.return, Se);
          }
        }
        break;
      case 6:
        if (ai(r, n), ea(n), o & 4) {
          if (n.stateNode === null) throw Error(_(162));
          c = n.stateNode, d = n.memoizedProps;
          try {
            c.nodeValue = d;
          } catch (Se) {
            dn(n, n.return, Se);
          }
        }
        break;
      case 3:
        if (ai(r, n), ea(n), o & 4 && l !== null && l.memoizedState.isDehydrated) try {
          Ja(r.containerInfo);
        } catch (Se) {
          dn(n, n.return, Se);
        }
        break;
      case 4:
        ai(r, n), ea(n);
        break;
      case 13:
        ai(r, n), ea(n), c = n.child, c.flags & 8192 && (d = c.memoizedState !== null, c.stateNode.isHidden = d, !d || c.alternate !== null && c.alternate.memoizedState !== null || (Bd = Xe())), o & 4 && Jv(n);
        break;
      case 22:
        if (W = l !== null && l.memoizedState !== null, n.mode & 1 ? (Tr = (U = Tr) || W, ai(r, n), Tr = U) : ai(r, n), ea(n), o & 8192) {
          if (U = n.memoizedState !== null, (n.stateNode.isHidden = U) && !W && n.mode & 1) for (ve = n, W = n.child; W !== null; ) {
            for (q = ve = W; ve !== null; ) {
              switch (Y = ve, fe = Y.child, Y.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Os(4, Y, Y.return);
                  break;
                case 1:
                  Eo(Y, Y.return);
                  var me = Y.stateNode;
                  if (typeof me.componentWillUnmount == "function") {
                    o = Y, l = Y.return;
                    try {
                      r = o, me.props = r.memoizedProps, me.state = r.memoizedState, me.componentWillUnmount();
                    } catch (Se) {
                      dn(o, l, Se);
                    }
                  }
                  break;
                case 5:
                  Eo(Y, Y.return);
                  break;
                case 22:
                  if (Y.memoizedState !== null) {
                    Ns(q);
                    continue;
                  }
              }
              fe !== null ? (fe.return = Y, ve = fe) : Ns(q);
            }
            W = W.sibling;
          }
          e: for (W = null, q = n; ; ) {
            if (q.tag === 5) {
              if (W === null) {
                W = q;
                try {
                  c = q.stateNode, U ? (d = c.style, typeof d.setProperty == "function" ? d.setProperty("display", "none", "important") : d.display = "none") : (E = q.stateNode, T = q.memoizedProps.style, m = T != null && T.hasOwnProperty("display") ? T.display : null, E.style.display = Ft("display", m));
                } catch (Se) {
                  dn(n, n.return, Se);
                }
              }
            } else if (q.tag === 6) {
              if (W === null) try {
                q.stateNode.nodeValue = U ? "" : q.memoizedProps;
              } catch (Se) {
                dn(n, n.return, Se);
              }
            } else if ((q.tag !== 22 && q.tag !== 23 || q.memoizedState === null || q === n) && q.child !== null) {
              q.child.return = q, q = q.child;
              continue;
            }
            if (q === n) break e;
            for (; q.sibling === null; ) {
              if (q.return === null || q.return === n) break e;
              W === q && (W = null), q = q.return;
            }
            W === q && (W = null), q.sibling.return = q.return, q = q.sibling;
          }
        }
        break;
      case 19:
        ai(r, n), ea(n), o & 4 && Jv(n);
        break;
      case 21:
        break;
      default:
        ai(
          r,
          n
        ), ea(n);
    }
  }
  function ea(n) {
    var r = n.flags;
    if (r & 2) {
      try {
        e: {
          for (var l = n.return; l !== null; ) {
            if (Ms(l)) {
              var o = l;
              break e;
            }
            l = l.return;
          }
          throw Error(_(160));
        }
        switch (o.tag) {
          case 5:
            var c = o.stateNode;
            o.flags & 32 && (Z(c, ""), o.flags &= -33);
            var d = Xi(n);
            ki(n, d, c);
            break;
          case 3:
          case 4:
            var m = o.stateNode.containerInfo, E = Xi(n);
            _i(n, E, m);
            break;
          default:
            throw Error(_(161));
        }
      } catch (T) {
        dn(n, n.return, T);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function fy(n, r, l) {
    ve = n, Pd(n);
  }
  function Pd(n, r, l) {
    for (var o = (n.mode & 1) !== 0; ve !== null; ) {
      var c = ve, d = c.child;
      if (c.tag === 22 && o) {
        var m = c.memoizedState !== null || Ds;
        if (!m) {
          var E = c.alternate, T = E !== null && E.memoizedState !== null || Tr;
          E = Ds;
          var U = Tr;
          if (Ds = m, (Tr = T) && !U) for (ve = c; ve !== null; ) m = ve, T = m.child, m.tag === 22 && m.memoizedState !== null ? Vd(c) : T !== null ? (T.return = m, ve = T) : Vd(c);
          for (; d !== null; ) ve = d, Pd(d), d = d.sibling;
          ve = c, Ds = E, Tr = U;
        }
        Zv(n);
      } else c.subtreeFlags & 8772 && d !== null ? (d.return = c, ve = d) : Zv(n);
    }
  }
  function Zv(n) {
    for (; ve !== null; ) {
      var r = ve;
      if (r.flags & 8772) {
        var l = r.alternate;
        try {
          if (r.flags & 8772) switch (r.tag) {
            case 0:
            case 11:
            case 15:
              Tr || Ls(5, r);
              break;
            case 1:
              var o = r.stateNode;
              if (r.flags & 4 && !Tr) if (l === null) o.componentDidMount();
              else {
                var c = r.elementType === r.type ? l.memoizedProps : ri(r.type, l.memoizedProps);
                o.componentDidUpdate(c, l.memoizedState, o.__reactInternalSnapshotBeforeUpdate);
              }
              var d = r.updateQueue;
              d !== null && bd(r, d, o);
              break;
            case 3:
              var m = r.updateQueue;
              if (m !== null) {
                if (l = null, r.child !== null) switch (r.child.tag) {
                  case 5:
                    l = r.child.stateNode;
                    break;
                  case 1:
                    l = r.child.stateNode;
                }
                bd(r, m, l);
              }
              break;
            case 5:
              var E = r.stateNode;
              if (l === null && r.flags & 4) {
                l = E;
                var T = r.memoizedProps;
                switch (r.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    T.autoFocus && l.focus();
                    break;
                  case "img":
                    T.src && (l.src = T.src);
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
                var U = r.alternate;
                if (U !== null) {
                  var W = U.memoizedState;
                  if (W !== null) {
                    var q = W.dehydrated;
                    q !== null && Ja(q);
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
              throw Error(_(163));
          }
          Tr || r.flags & 512 && jd(r);
        } catch (Y) {
          dn(r, r.return, Y);
        }
      }
      if (r === n) {
        ve = null;
        break;
      }
      if (l = r.sibling, l !== null) {
        l.return = r.return, ve = l;
        break;
      }
      ve = r.return;
    }
  }
  function Ns(n) {
    for (; ve !== null; ) {
      var r = ve;
      if (r === n) {
        ve = null;
        break;
      }
      var l = r.sibling;
      if (l !== null) {
        l.return = r.return, ve = l;
        break;
      }
      ve = r.return;
    }
  }
  function Vd(n) {
    for (; ve !== null; ) {
      var r = ve;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var l = r.return;
            try {
              Ls(4, r);
            } catch (T) {
              dn(r, l, T);
            }
            break;
          case 1:
            var o = r.stateNode;
            if (typeof o.componentDidMount == "function") {
              var c = r.return;
              try {
                o.componentDidMount();
              } catch (T) {
                dn(r, c, T);
              }
            }
            var d = r.return;
            try {
              jd(r);
            } catch (T) {
              dn(r, d, T);
            }
            break;
          case 5:
            var m = r.return;
            try {
              jd(r);
            } catch (T) {
              dn(r, m, T);
            }
        }
      } catch (T) {
        dn(r, r.return, T);
      }
      if (r === n) {
        ve = null;
        break;
      }
      var E = r.sibling;
      if (E !== null) {
        E.return = r.return, ve = E;
        break;
      }
      ve = r.return;
    }
  }
  var dy = Math.ceil, Ul = mt.ReactCurrentDispatcher, Du = mt.ReactCurrentOwner, or = mt.ReactCurrentBatchConfig, Ct = 0, Qn = null, Fn = null, sr = 0, ma = 0, Co = Da(0), xn = 0, zs = null, Di = 0, Ro = 0, af = 0, Us = null, ta = null, Bd = 0, To = 1 / 0, ya = null, wo = !1, Ou = null, Al = null, lf = !1, Ji = null, As = 0, Fl = 0, bo = null, Fs = -1, wr = 0;
  function jn() {
    return Ct & 6 ? Xe() : Fs !== -1 ? Fs : Fs = Xe();
  }
  function Oi(n) {
    return n.mode & 1 ? Ct & 2 && sr !== 0 ? sr & -sr : sy.transition !== null ? (wr === 0 && (wr = Ku()), wr) : (n = Ot, n !== 0 || (n = window.event, n = n === void 0 ? 16 : ro(n.type)), n) : 1;
  }
  function zr(n, r, l, o) {
    if (50 < Fl) throw Fl = 0, bo = null, Error(_(185));
    Hi(n, l, o), (!(Ct & 2) || n !== Qn) && (n === Qn && (!(Ct & 2) && (Ro |= l), xn === 4 && ii(n, sr)), na(n, o), l === 1 && Ct === 0 && !(r.mode & 1) && (To = Xe() + 500, ho && Ri()));
  }
  function na(n, r) {
    var l = n.callbackNode;
    au(n, r);
    var o = Xa(n, n === Qn ? sr : 0);
    if (o === 0) l !== null && ar(l), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = o & -o, n.callbackPriority !== r) {
      if (l != null && ar(l), r === 1) n.tag === 0 ? xl($d.bind(null, n)) : bc($d.bind(null, n)), co(function() {
        !(Ct & 6) && Ri();
      }), l = null;
      else {
        switch (Ju(o)) {
          case 1:
            l = qa;
            break;
          case 4:
            l = nu;
            break;
          case 16:
            l = ru;
            break;
          case 536870912:
            l = Wu;
            break;
          default:
            l = ru;
        }
        l = sh(l, uf.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = l;
    }
  }
  function uf(n, r) {
    if (Fs = -1, wr = 0, Ct & 6) throw Error(_(327));
    var l = n.callbackNode;
    if (xo() && n.callbackNode !== l) return null;
    var o = Xa(n, n === Qn ? sr : 0);
    if (o === 0) return null;
    if (o & 30 || o & n.expiredLanes || r) r = of(n, o);
    else {
      r = o;
      var c = Ct;
      Ct |= 2;
      var d = th();
      (Qn !== n || sr !== r) && (ya = null, To = Xe() + 500, Zi(n, r));
      do
        try {
          nh();
          break;
        } catch (E) {
          eh(n, E);
        }
      while (!0);
      Sd(), Ul.current = d, Ct = c, Fn !== null ? r = 0 : (Qn = null, sr = 0, r = xn);
    }
    if (r !== 0) {
      if (r === 2 && (c = yl(n), c !== 0 && (o = c, r = js(n, c))), r === 1) throw l = zs, Zi(n, 0), ii(n, o), na(n, Xe()), l;
      if (r === 6) ii(n, o);
      else {
        if (c = n.current.alternate, !(o & 30) && !py(c) && (r = of(n, o), r === 2 && (d = yl(n), d !== 0 && (o = d, r = js(n, d))), r === 1)) throw l = zs, Zi(n, 0), ii(n, o), na(n, Xe()), l;
        switch (n.finishedWork = c, n.finishedLanes = o, r) {
          case 0:
          case 1:
            throw Error(_(345));
          case 2:
            Nu(n, ta, ya);
            break;
          case 3:
            if (ii(n, o), (o & 130023424) === o && (r = Bd + 500 - Xe(), 10 < r)) {
              if (Xa(n, 0) !== 0) break;
              if (c = n.suspendedLanes, (c & o) !== o) {
                jn(), n.pingedLanes |= n.suspendedLanes & c;
                break;
              }
              n.timeoutHandle = Rc(Nu.bind(null, n, ta, ya), r);
              break;
            }
            Nu(n, ta, ya);
            break;
          case 4:
            if (ii(n, o), (o & 4194240) === o) break;
            for (r = n.eventTimes, c = -1; 0 < o; ) {
              var m = 31 - kr(o);
              d = 1 << m, m = r[m], m > c && (c = m), o &= ~d;
            }
            if (o = c, o = Xe() - o, o = (120 > o ? 120 : 480 > o ? 480 : 1080 > o ? 1080 : 1920 > o ? 1920 : 3e3 > o ? 3e3 : 4320 > o ? 4320 : 1960 * dy(o / 1960)) - o, 10 < o) {
              n.timeoutHandle = Rc(Nu.bind(null, n, ta, ya), o);
              break;
            }
            Nu(n, ta, ya);
            break;
          case 5:
            Nu(n, ta, ya);
            break;
          default:
            throw Error(_(329));
        }
      }
    }
    return na(n, Xe()), n.callbackNode === l ? uf.bind(null, n) : null;
  }
  function js(n, r) {
    var l = Us;
    return n.current.memoizedState.isDehydrated && (Zi(n, r).flags |= 256), n = of(n, r), n !== 2 && (r = ta, ta = l, r !== null && Lu(r)), n;
  }
  function Lu(n) {
    ta === null ? ta = n : ta.push.apply(ta, n);
  }
  function py(n) {
    for (var r = n; ; ) {
      if (r.flags & 16384) {
        var l = r.updateQueue;
        if (l !== null && (l = l.stores, l !== null)) for (var o = 0; o < l.length; o++) {
          var c = l[o], d = c.getSnapshot;
          c = c.value;
          try {
            if (!ei(d(), c)) return !1;
          } catch {
            return !1;
          }
        }
      }
      if (l = r.child, r.subtreeFlags & 16384 && l !== null) l.return = r, r = l;
      else {
        if (r === n) break;
        for (; r.sibling === null; ) {
          if (r.return === null || r.return === n) return !0;
          r = r.return;
        }
        r.sibling.return = r.return, r = r.sibling;
      }
    }
    return !0;
  }
  function ii(n, r) {
    for (r &= ~af, r &= ~Ro, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var l = 31 - kr(r), o = 1 << l;
      n[l] = -1, r &= ~o;
    }
  }
  function $d(n) {
    if (Ct & 6) throw Error(_(327));
    xo();
    var r = Xa(n, 0);
    if (!(r & 1)) return na(n, Xe()), null;
    var l = of(n, r);
    if (n.tag !== 0 && l === 2) {
      var o = yl(n);
      o !== 0 && (r = o, l = js(n, o));
    }
    if (l === 1) throw l = zs, Zi(n, 0), ii(n, r), na(n, Xe()), l;
    if (l === 6) throw Error(_(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, Nu(n, ta, ya), na(n, Xe()), null;
  }
  function Id(n, r) {
    var l = Ct;
    Ct |= 1;
    try {
      return n(r);
    } finally {
      Ct = l, Ct === 0 && (To = Xe() + 500, ho && Ri());
    }
  }
  function Mu(n) {
    Ji !== null && Ji.tag === 0 && !(Ct & 6) && xo();
    var r = Ct;
    Ct |= 1;
    var l = or.transition, o = Ot;
    try {
      if (or.transition = null, Ot = 1, n) return n();
    } finally {
      Ot = o, or.transition = l, Ct = r, !(Ct & 6) && Ri();
    }
  }
  function Yd() {
    ma = Co.current, nn(Co);
  }
  function Zi(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var l = n.timeoutHandle;
    if (l !== -1 && (n.timeoutHandle = -1, vd(l)), Fn !== null) for (l = Fn.return; l !== null; ) {
      var o = l;
      switch (_c(o), o.tag) {
        case 1:
          o = o.type.childContextTypes, o != null && vo();
          break;
        case 3:
          Eu(), nn(In), nn(Sn), De();
          break;
        case 5:
          Lc(o);
          break;
        case 4:
          Eu();
          break;
        case 13:
          nn(yn);
          break;
        case 19:
          nn(yn);
          break;
        case 10:
          Ed(o.type._context);
          break;
        case 22:
        case 23:
          Yd();
      }
      l = l.return;
    }
    if (Qn = n, Fn = n = jl(n.current, null), sr = ma = r, xn = 0, zs = null, af = Ro = Di = 0, ta = Us = null, gu !== null) {
      for (r = 0; r < gu.length; r++) if (l = gu[r], o = l.interleaved, o !== null) {
        l.interleaved = null;
        var c = o.next, d = l.pending;
        if (d !== null) {
          var m = d.next;
          d.next = c, o.next = m;
        }
        l.pending = o;
      }
      gu = null;
    }
    return n;
  }
  function eh(n, r) {
    do {
      var l = Fn;
      try {
        if (Sd(), ot.current = xu, Nc) {
          for (var o = Mt.memoizedState; o !== null; ) {
            var c = o.queue;
            c !== null && (c.pending = null), o = o.next;
          }
          Nc = !1;
        }
        if (Wt = 0, Xn = zn = Mt = null, hs = !1, Cu = 0, Du.current = null, l === null || l.return === null) {
          xn = 1, zs = r, Fn = null;
          break;
        }
        e: {
          var d = n, m = l.return, E = l, T = r;
          if (r = sr, E.flags |= 32768, T !== null && typeof T == "object" && typeof T.then == "function") {
            var U = T, W = E, q = W.tag;
            if (!(W.mode & 1) && (q === 0 || q === 11 || q === 15)) {
              var Y = W.alternate;
              Y ? (W.updateQueue = Y.updateQueue, W.memoizedState = Y.memoizedState, W.lanes = Y.lanes) : (W.updateQueue = null, W.memoizedState = null);
            }
            var fe = Vv(m);
            if (fe !== null) {
              fe.flags &= -257, zl(fe, m, E, d, r), fe.mode & 1 && Nd(d, U, r), r = fe, T = U;
              var me = r.updateQueue;
              if (me === null) {
                var Se = /* @__PURE__ */ new Set();
                Se.add(T), r.updateQueue = Se;
              } else me.add(T);
              break e;
            } else {
              if (!(r & 1)) {
                Nd(d, U, r), Qd();
                break e;
              }
              T = Error(_(426));
            }
          } else if (fn && E.mode & 1) {
            var _n = Vv(m);
            if (_n !== null) {
              !(_n.flags & 65536) && (_n.flags |= 256), zl(_n, m, E, d, r), Gi(_u(T, E));
              break e;
            }
          }
          d = T = _u(T, E), xn !== 4 && (xn = 2), Us === null ? Us = [d] : Us.push(d), d = m;
          do {
            switch (d.tag) {
              case 3:
                d.flags |= 65536, r &= -r, d.lanes |= r;
                var D = Pv(d, T, r);
                Uv(d, D);
                break e;
              case 1:
                E = T;
                var b = d.type, M = d.stateNode;
                if (!(d.flags & 128) && (typeof b.getDerivedStateFromError == "function" || M !== null && typeof M.componentDidCatch == "function" && (Al === null || !Al.has(M)))) {
                  d.flags |= 65536, r &= -r, d.lanes |= r;
                  var G = Md(d, E, r);
                  Uv(d, G);
                  break e;
                }
            }
            d = d.return;
          } while (d !== null);
        }
        ah(l);
      } catch (ye) {
        r = ye, Fn === l && l !== null && (Fn = l = l.return);
        continue;
      }
      break;
    } while (!0);
  }
  function th() {
    var n = Ul.current;
    return Ul.current = xu, n === null ? xu : n;
  }
  function Qd() {
    (xn === 0 || xn === 3 || xn === 2) && (xn = 4), Qn === null || !(Di & 268435455) && !(Ro & 268435455) || ii(Qn, sr);
  }
  function of(n, r) {
    var l = Ct;
    Ct |= 2;
    var o = th();
    (Qn !== n || sr !== r) && (ya = null, Zi(n, r));
    do
      try {
        vy();
        break;
      } catch (c) {
        eh(n, c);
      }
    while (!0);
    if (Sd(), Ct = l, Ul.current = o, Fn !== null) throw Error(_(261));
    return Qn = null, sr = 0, xn;
  }
  function vy() {
    for (; Fn !== null; ) rh(Fn);
  }
  function nh() {
    for (; Fn !== null && !Wa(); ) rh(Fn);
  }
  function rh(n) {
    var r = oh(n.alternate, n, ma);
    n.memoizedProps = n.pendingProps, r === null ? ah(n) : Fn = r, Du.current = null;
  }
  function ah(n) {
    var r = n;
    do {
      var l = r.alternate;
      if (n = r.return, r.flags & 32768) {
        if (l = tf(l, r), l !== null) {
          l.flags &= 32767, Fn = l;
          return;
        }
        if (n !== null) n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          xn = 6, Fn = null;
          return;
        }
      } else if (l = Gv(l, r, ma), l !== null) {
        Fn = l;
        return;
      }
      if (r = r.sibling, r !== null) {
        Fn = r;
        return;
      }
      Fn = r = n;
    } while (r !== null);
    xn === 0 && (xn = 5);
  }
  function Nu(n, r, l) {
    var o = Ot, c = or.transition;
    try {
      or.transition = null, Ot = 1, hy(n, r, l, o);
    } finally {
      or.transition = c, Ot = o;
    }
    return null;
  }
  function hy(n, r, l, o) {
    do
      xo();
    while (Ji !== null);
    if (Ct & 6) throw Error(_(327));
    l = n.finishedWork;
    var c = n.finishedLanes;
    if (l === null) return null;
    if (n.finishedWork = null, n.finishedLanes = 0, l === n.current) throw Error(_(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var d = l.lanes | l.childLanes;
    if (Wf(n, d), n === Qn && (Fn = Qn = null, sr = 0), !(l.subtreeFlags & 2064) && !(l.flags & 2064) || lf || (lf = !0, sh(ru, function() {
      return xo(), null;
    })), d = (l.flags & 15990) !== 0, l.subtreeFlags & 15990 || d) {
      d = or.transition, or.transition = null;
      var m = Ot;
      Ot = 1;
      var E = Ct;
      Ct |= 4, Du.current = null, Kv(n, l), Hd(l, n), lo(pu), xa = !!is, pu = is = null, n.current = l, fy(l), Ga(), Ct = E, Ot = m, or.transition = d;
    } else n.current = l;
    if (lf && (lf = !1, Ji = n, As = c), d = n.pendingLanes, d === 0 && (Al = null), Yo(l.stateNode), na(n, Xe()), r !== null) for (o = n.onRecoverableError, l = 0; l < r.length; l++) c = r[l], o(c.value, { componentStack: c.stack, digest: c.digest });
    if (wo) throw wo = !1, n = Ou, Ou = null, n;
    return As & 1 && n.tag !== 0 && xo(), d = n.pendingLanes, d & 1 ? n === bo ? Fl++ : (Fl = 0, bo = n) : Fl = 0, Ri(), null;
  }
  function xo() {
    if (Ji !== null) {
      var n = Ju(As), r = or.transition, l = Ot;
      try {
        if (or.transition = null, Ot = 16 > n ? 16 : n, Ji === null) var o = !1;
        else {
          if (n = Ji, Ji = null, As = 0, Ct & 6) throw Error(_(331));
          var c = Ct;
          for (Ct |= 4, ve = n.current; ve !== null; ) {
            var d = ve, m = d.child;
            if (ve.flags & 16) {
              var E = d.deletions;
              if (E !== null) {
                for (var T = 0; T < E.length; T++) {
                  var U = E[T];
                  for (ve = U; ve !== null; ) {
                    var W = ve;
                    switch (W.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Os(8, W, d);
                    }
                    var q = W.child;
                    if (q !== null) q.return = W, ve = q;
                    else for (; ve !== null; ) {
                      W = ve;
                      var Y = W.sibling, fe = W.return;
                      if (rf(W), W === U) {
                        ve = null;
                        break;
                      }
                      if (Y !== null) {
                        Y.return = fe, ve = Y;
                        break;
                      }
                      ve = fe;
                    }
                  }
                }
                var me = d.alternate;
                if (me !== null) {
                  var Se = me.child;
                  if (Se !== null) {
                    me.child = null;
                    do {
                      var _n = Se.sibling;
                      Se.sibling = null, Se = _n;
                    } while (Se !== null);
                  }
                }
                ve = d;
              }
            }
            if (d.subtreeFlags & 2064 && m !== null) m.return = d, ve = m;
            else e: for (; ve !== null; ) {
              if (d = ve, d.flags & 2048) switch (d.tag) {
                case 0:
                case 11:
                case 15:
                  Os(9, d, d.return);
              }
              var D = d.sibling;
              if (D !== null) {
                D.return = d.return, ve = D;
                break e;
              }
              ve = d.return;
            }
          }
          var b = n.current;
          for (ve = b; ve !== null; ) {
            m = ve;
            var M = m.child;
            if (m.subtreeFlags & 2064 && M !== null) M.return = m, ve = M;
            else e: for (m = b; ve !== null; ) {
              if (E = ve, E.flags & 2048) try {
                switch (E.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Ls(9, E);
                }
              } catch (ye) {
                dn(E, E.return, ye);
              }
              if (E === m) {
                ve = null;
                break e;
              }
              var G = E.sibling;
              if (G !== null) {
                G.return = E.return, ve = G;
                break e;
              }
              ve = E.return;
            }
          }
          if (Ct = c, Ri(), Yr && typeof Yr.onPostCommitFiberRoot == "function") try {
            Yr.onPostCommitFiberRoot(hl, n);
          } catch {
          }
          o = !0;
        }
        return o;
      } finally {
        Ot = l, or.transition = r;
      }
    }
    return !1;
  }
  function ih(n, r, l) {
    r = _u(l, r), r = Pv(n, r, 1), n = Ll(n, r, 1), r = jn(), n !== null && (Hi(n, 1, r), na(n, r));
  }
  function dn(n, r, l) {
    if (n.tag === 3) ih(n, n, l);
    else for (; r !== null; ) {
      if (r.tag === 3) {
        ih(r, n, l);
        break;
      } else if (r.tag === 1) {
        var o = r.stateNode;
        if (typeof r.type.getDerivedStateFromError == "function" || typeof o.componentDidCatch == "function" && (Al === null || !Al.has(o))) {
          n = _u(l, n), n = Md(r, n, 1), r = Ll(r, n, 1), n = jn(), r !== null && (Hi(r, 1, n), na(r, n));
          break;
        }
      }
      r = r.return;
    }
  }
  function my(n, r, l) {
    var o = n.pingCache;
    o !== null && o.delete(r), r = jn(), n.pingedLanes |= n.suspendedLanes & l, Qn === n && (sr & l) === l && (xn === 4 || xn === 3 && (sr & 130023424) === sr && 500 > Xe() - Bd ? Zi(n, 0) : af |= l), na(n, r);
  }
  function lh(n, r) {
    r === 0 && (n.mode & 1 ? (r = fa, fa <<= 1, !(fa & 130023424) && (fa = 4194304)) : r = 1);
    var l = jn();
    n = va(n, r), n !== null && (Hi(n, r, l), na(n, l));
  }
  function yy(n) {
    var r = n.memoizedState, l = 0;
    r !== null && (l = r.retryLane), lh(n, l);
  }
  function uh(n, r) {
    var l = 0;
    switch (n.tag) {
      case 13:
        var o = n.stateNode, c = n.memoizedState;
        c !== null && (l = c.retryLane);
        break;
      case 19:
        o = n.stateNode;
        break;
      default:
        throw Error(_(314));
    }
    o !== null && o.delete(r), lh(n, l);
  }
  var oh;
  oh = function(n, r, l) {
    if (n !== null) if (n.memoizedProps !== r.pendingProps || In.current) Un = !0;
    else {
      if (!(n.lanes & l) && !(r.flags & 128)) return Un = !1, _s(n, r, l);
      Un = !!(n.flags & 131072);
    }
    else Un = !1, fn && r.flags & 1048576 && Lv(r, Wi, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var o = r.type;
        Na(n, r), n = r.pendingProps;
        var c = Gr(r, Sn.current);
        mn(r, l), c = Ml(null, r, o, n, c, l);
        var d = ni();
        return r.flags |= 1, typeof c == "object" && c !== null && typeof c.render == "function" && c.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, Mn(o) ? (d = !0, Kn(r)) : d = !1, r.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, wd(r), c.updater = Kc, r.stateNode = c, c._reactInternals = r, Rs(r, o, n, l), r = bs(null, r, o, !0, d, l)) : (r.tag = 0, fn && d && xc(r), ur(null, r, c, l), r = r.child), r;
      case 16:
        o = r.elementType;
        e: {
          switch (Na(n, r), n = r.pendingProps, c = o._init, o = c(o._payload), r.type = o, c = r.tag = Sy(o), n = ri(o, n), c) {
            case 0:
              r = Bv(null, r, o, n, l);
              break e;
            case 1:
              r = $v(null, r, o, n, l);
              break e;
            case 11:
              r = Zr(null, r, o, n, l);
              break e;
            case 14:
              r = ku(null, r, o, ri(o.type, n), l);
              break e;
          }
          throw Error(_(
            306,
            o,
            ""
          ));
        }
        return r;
      case 0:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ri(o, c), Bv(n, r, o, c, l);
      case 1:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ri(o, c), $v(n, r, o, c, l);
      case 3:
        e: {
          if (So(r), n === null) throw Error(_(387));
          o = r.pendingProps, d = r.memoizedState, c = d.element, zv(n, r), cs(r, o, null, l);
          var m = r.memoizedState;
          if (o = m.element, d.isDehydrated) if (d = { element: o, isDehydrated: !1, cache: m.cache, pendingSuspenseBoundaries: m.pendingSuspenseBoundaries, transitions: m.transitions }, r.updateQueue.baseState = d, r.memoizedState = d, r.flags & 256) {
            c = _u(Error(_(423)), r), r = Iv(n, r, o, l, c);
            break e;
          } else if (o !== c) {
            c = _u(Error(_(424)), r), r = Iv(n, r, o, l, c);
            break e;
          } else for (Kr = Si(r.stateNode.containerInfo.firstChild), qr = r, fn = !0, La = null, l = ie(r, null, o, l), r.child = l; l; ) l.flags = l.flags & -3 | 4096, l = l.sibling;
          else {
            if (Ol(), o === c) {
              r = za(n, r, l);
              break e;
            }
            ur(n, r, o, l);
          }
          r = r.child;
        }
        return r;
      case 5:
        return Av(r), n === null && yd(r), o = r.type, c = r.pendingProps, d = n !== null ? n.memoizedProps : null, m = c.children, Cc(o, c) ? m = null : d !== null && Cc(o, d) && (r.flags |= 32), zd(n, r), ur(n, r, m, l), r.child;
      case 6:
        return n === null && yd(r), null;
      case 13:
        return ef(n, r, l);
      case 4:
        return xd(r, r.stateNode.containerInfo), o = r.pendingProps, n === null ? r.child = Tn(r, null, o, l) : ur(n, r, o, l), r.child;
      case 11:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ri(o, c), Zr(n, r, o, c, l);
      case 7:
        return ur(n, r, r.pendingProps, l), r.child;
      case 8:
        return ur(n, r, r.pendingProps.children, l), r.child;
      case 12:
        return ur(n, r, r.pendingProps.children, l), r.child;
      case 10:
        e: {
          if (o = r.type._context, c = r.pendingProps, d = r.memoizedProps, m = c.value, xe(pa, o._currentValue), o._currentValue = m, d !== null) if (ei(d.value, m)) {
            if (d.children === c.children && !In.current) {
              r = za(n, r, l);
              break e;
            }
          } else for (d = r.child, d !== null && (d.return = r); d !== null; ) {
            var E = d.dependencies;
            if (E !== null) {
              m = d.child;
              for (var T = E.firstContext; T !== null; ) {
                if (T.context === o) {
                  if (d.tag === 1) {
                    T = qi(-1, l & -l), T.tag = 2;
                    var U = d.updateQueue;
                    if (U !== null) {
                      U = U.shared;
                      var W = U.pending;
                      W === null ? T.next = T : (T.next = W.next, W.next = T), U.pending = T;
                    }
                  }
                  d.lanes |= l, T = d.alternate, T !== null && (T.lanes |= l), Cd(
                    d.return,
                    l,
                    r
                  ), E.lanes |= l;
                  break;
                }
                T = T.next;
              }
            } else if (d.tag === 10) m = d.type === r.type ? null : d.child;
            else if (d.tag === 18) {
              if (m = d.return, m === null) throw Error(_(341));
              m.lanes |= l, E = m.alternate, E !== null && (E.lanes |= l), Cd(m, l, r), m = d.sibling;
            } else m = d.child;
            if (m !== null) m.return = d;
            else for (m = d; m !== null; ) {
              if (m === r) {
                m = null;
                break;
              }
              if (d = m.sibling, d !== null) {
                d.return = m.return, m = d;
                break;
              }
              m = m.return;
            }
            d = m;
          }
          ur(n, r, c.children, l), r = r.child;
        }
        return r;
      case 9:
        return c = r.type, o = r.pendingProps.children, mn(r, l), c = Ma(c), o = o(c), r.flags |= 1, ur(n, r, o, l), r.child;
      case 14:
        return o = r.type, c = ri(o, r.pendingProps), c = ri(o.type, c), ku(n, r, o, c, l);
      case 15:
        return Je(n, r, r.type, r.pendingProps, l);
      case 17:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ri(o, c), Na(n, r), r.tag = 1, Mn(o) ? (n = !0, Kn(r)) : n = !1, mn(r, l), Xc(r, o, c), Rs(r, o, c, l), bs(null, r, o, !0, n, l);
      case 19:
        return xi(n, r, l);
      case 22:
        return ws(n, r, l);
    }
    throw Error(_(156, r.tag));
  };
  function sh(n, r) {
    return un(n, r);
  }
  function gy(n, r, l, o) {
    this.tag = n, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = o, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Aa(n, r, l, o) {
    return new gy(n, r, l, o);
  }
  function Wd(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function Sy(n) {
    if (typeof n == "function") return Wd(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === xt) return 11;
      if (n === _t) return 14;
    }
    return 2;
  }
  function jl(n, r) {
    var l = n.alternate;
    return l === null ? (l = Aa(n.tag, r, n.key, n.mode), l.elementType = n.elementType, l.type = n.type, l.stateNode = n.stateNode, l.alternate = n, n.alternate = l) : (l.pendingProps = r, l.type = n.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = n.flags & 14680064, l.childLanes = n.childLanes, l.lanes = n.lanes, l.child = n.child, l.memoizedProps = n.memoizedProps, l.memoizedState = n.memoizedState, l.updateQueue = n.updateQueue, r = n.dependencies, l.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, l.sibling = n.sibling, l.index = n.index, l.ref = n.ref, l;
  }
  function Hs(n, r, l, o, c, d) {
    var m = 2;
    if (o = n, typeof n == "function") Wd(n) && (m = 1);
    else if (typeof n == "string") m = 5;
    else e: switch (n) {
      case He:
        return el(l.children, c, d, r);
      case rn:
        m = 8, c |= 8;
        break;
      case jt:
        return n = Aa(12, l, r, c | 2), n.elementType = jt, n.lanes = d, n;
      case Le:
        return n = Aa(13, l, r, c), n.elementType = Le, n.lanes = d, n;
      case At:
        return n = Aa(19, l, r, c), n.elementType = At, n.lanes = d, n;
      case Ee:
        return Hl(l, c, d, r);
      default:
        if (typeof n == "object" && n !== null) switch (n.$$typeof) {
          case Xt:
            m = 10;
            break e;
          case an:
            m = 9;
            break e;
          case xt:
            m = 11;
            break e;
          case _t:
            m = 14;
            break e;
          case Dt:
            m = 16, o = null;
            break e;
        }
        throw Error(_(130, n == null ? n : typeof n, ""));
    }
    return r = Aa(m, l, r, c), r.elementType = n, r.type = o, r.lanes = d, r;
  }
  function el(n, r, l, o) {
    return n = Aa(7, n, o, r), n.lanes = l, n;
  }
  function Hl(n, r, l, o) {
    return n = Aa(22, n, o, r), n.elementType = Ee, n.lanes = l, n.stateNode = { isHidden: !1 }, n;
  }
  function Gd(n, r, l) {
    return n = Aa(6, n, null, r), n.lanes = l, n;
  }
  function sf(n, r, l) {
    return r = Aa(4, n.children !== null ? n.children : [], n.key, r), r.lanes = l, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function ch(n, r, l, o, c) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Xu(0), this.expirationTimes = Xu(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Xu(0), this.identifierPrefix = o, this.onRecoverableError = c, this.mutableSourceEagerHydrationData = null;
  }
  function cf(n, r, l, o, c, d, m, E, T) {
    return n = new ch(n, r, l, E, T), r === 1 ? (r = 1, d === !0 && (r |= 8)) : r = 0, d = Aa(3, null, null, r), n.current = d, d.stateNode = n, d.memoizedState = { element: o, isDehydrated: l, cache: null, transitions: null, pendingSuspenseBoundaries: null }, wd(d), n;
  }
  function Ey(n, r, l) {
    var o = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: ct, key: o == null ? null : "" + o, children: n, containerInfo: r, implementation: l };
  }
  function qd(n) {
    if (!n) return Cr;
    n = n._reactInternals;
    e: {
      if (Ke(n) !== n || n.tag !== 1) throw Error(_(170));
      var r = n;
      do {
        switch (r.tag) {
          case 3:
            r = r.stateNode.context;
            break e;
          case 1:
            if (Mn(r.type)) {
              r = r.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        r = r.return;
      } while (r !== null);
      throw Error(_(171));
    }
    if (n.tag === 1) {
      var l = n.type;
      if (Mn(l)) return os(n, l, r);
    }
    return r;
  }
  function fh(n, r, l, o, c, d, m, E, T) {
    return n = cf(l, o, !0, n, c, d, m, E, T), n.context = qd(null), l = n.current, o = jn(), c = Oi(l), d = qi(o, c), d.callback = r != null ? r : null, Ll(l, d, c), n.current.lanes = c, Hi(n, c, o), na(n, o), n;
  }
  function ff(n, r, l, o) {
    var c = r.current, d = jn(), m = Oi(c);
    return l = qd(l), r.context === null ? r.context = l : r.pendingContext = l, r = qi(d, m), r.payload = { element: n }, o = o === void 0 ? null : o, o !== null && (r.callback = o), n = Ll(c, r, m), n !== null && (zr(n, c, m, d), Oc(n, c, m)), m;
  }
  function df(n) {
    if (n = n.current, !n.child) return null;
    switch (n.child.tag) {
      case 5:
        return n.child.stateNode;
      default:
        return n.child.stateNode;
    }
  }
  function Kd(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var l = n.retryLane;
      n.retryLane = l !== 0 && l < r ? l : r;
    }
  }
  function pf(n, r) {
    Kd(n, r), (n = n.alternate) && Kd(n, r);
  }
  function dh() {
    return null;
  }
  var zu = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function Xd(n) {
    this._internalRoot = n;
  }
  vf.prototype.render = Xd.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null) throw Error(_(409));
    ff(n, r, null, null);
  }, vf.prototype.unmount = Xd.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      Mu(function() {
        ff(null, n, null, null);
      }), r[Yi] = null;
    }
  };
  function vf(n) {
    this._internalRoot = n;
  }
  vf.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = $e();
      n = { blockedOn: null, target: n, priority: r };
      for (var l = 0; l < $n.length && r !== 0 && r < $n[l].priority; l++) ;
      $n.splice(l, 0, n), l === 0 && Go(n);
    }
  };
  function Jd(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function hf(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function ph() {
  }
  function Cy(n, r, l, o, c) {
    if (c) {
      if (typeof o == "function") {
        var d = o;
        o = function() {
          var U = df(m);
          d.call(U);
        };
      }
      var m = fh(r, o, n, 0, null, !1, !1, "", ph);
      return n._reactRootContainer = m, n[Yi] = m.current, oo(n.nodeType === 8 ? n.parentNode : n), Mu(), m;
    }
    for (; c = n.lastChild; ) n.removeChild(c);
    if (typeof o == "function") {
      var E = o;
      o = function() {
        var U = df(T);
        E.call(U);
      };
    }
    var T = cf(n, 0, !1, null, null, !1, !1, "", ph);
    return n._reactRootContainer = T, n[Yi] = T.current, oo(n.nodeType === 8 ? n.parentNode : n), Mu(function() {
      ff(r, T, l, o);
    }), T;
  }
  function Ps(n, r, l, o, c) {
    var d = l._reactRootContainer;
    if (d) {
      var m = d;
      if (typeof c == "function") {
        var E = c;
        c = function() {
          var T = df(m);
          E.call(T);
        };
      }
      ff(r, m, n, c);
    } else m = Cy(l, r, n, c, o);
    return df(m);
  }
  wt = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var l = Ka(r.pendingLanes);
          l !== 0 && (Pi(r, l | 1), na(r, Xe()), !(Ct & 6) && (To = Xe() + 500, Ri()));
        }
        break;
      case 13:
        Mu(function() {
          var o = va(n, 1);
          if (o !== null) {
            var c = jn();
            zr(o, n, 1, c);
          }
        }), pf(n, 1);
    }
  }, Qo = function(n) {
    if (n.tag === 13) {
      var r = va(n, 134217728);
      if (r !== null) {
        var l = jn();
        zr(r, n, 134217728, l);
      }
      pf(n, 134217728);
    }
  }, vi = function(n) {
    if (n.tag === 13) {
      var r = Oi(n), l = va(n, r);
      if (l !== null) {
        var o = jn();
        zr(l, n, r, o);
      }
      pf(n, r);
    }
  }, $e = function() {
    return Ot;
  }, Zu = function(n, r) {
    var l = Ot;
    try {
      return Ot = n, r();
    } finally {
      Ot = l;
    }
  }, $t = function(n, r, l) {
    switch (r) {
      case "input":
        if (Ir(n, l), r = l.name, l.type === "radio" && r != null) {
          for (l = n; l.parentNode; ) l = l.parentNode;
          for (l = l.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < l.length; r++) {
            var o = l[r];
            if (o !== n && o.form === n.form) {
              var c = hn(o);
              if (!c) throw Error(_(90));
              br(o), Ir(o, c);
            }
          }
        }
        break;
      case "textarea":
        Ia(n, l);
        break;
      case "select":
        r = l.value, r != null && Cn(n, !!l.multiple, r, !1);
    }
  }, eu = Id, dl = Mu;
  var Ry = { usingClientEntryPoint: !1, Events: [ke, ti, hn, ji, Zl, Id] }, Vs = { findFiberByHostInstance: vu, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, vh = { bundleType: Vs.bundleType, version: Vs.version, rendererPackageName: Vs.rendererPackageName, rendererConfig: Vs.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: mt.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = Rn(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: Vs.findFiberByHostInstance || dh, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ != "undefined") {
    var Pl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Pl.isDisabled && Pl.supportsFiber) try {
      hl = Pl.inject(vh), Yr = Pl;
    } catch {
    }
  }
  return Ba.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ry, Ba.createPortal = function(n, r) {
    var l = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Jd(r)) throw Error(_(200));
    return Ey(n, r, null, l);
  }, Ba.createRoot = function(n, r) {
    if (!Jd(n)) throw Error(_(299));
    var l = !1, o = "", c = zu;
    return r != null && (r.unstable_strictMode === !0 && (l = !0), r.identifierPrefix !== void 0 && (o = r.identifierPrefix), r.onRecoverableError !== void 0 && (c = r.onRecoverableError)), r = cf(n, 1, !1, null, null, l, !1, o, c), n[Yi] = r.current, oo(n.nodeType === 8 ? n.parentNode : n), new Xd(r);
  }, Ba.findDOMNode = function(n) {
    if (n == null) return null;
    if (n.nodeType === 1) return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(_(188)) : (n = Object.keys(n).join(","), Error(_(268, n)));
    return n = Rn(r), n = n === null ? null : n.stateNode, n;
  }, Ba.flushSync = function(n) {
    return Mu(n);
  }, Ba.hydrate = function(n, r, l) {
    if (!hf(r)) throw Error(_(200));
    return Ps(null, n, r, !0, l);
  }, Ba.hydrateRoot = function(n, r, l) {
    if (!Jd(n)) throw Error(_(405));
    var o = l != null && l.hydratedSources || null, c = !1, d = "", m = zu;
    if (l != null && (l.unstable_strictMode === !0 && (c = !0), l.identifierPrefix !== void 0 && (d = l.identifierPrefix), l.onRecoverableError !== void 0 && (m = l.onRecoverableError)), r = fh(r, null, n, 1, l != null ? l : null, c, !1, d, m), n[Yi] = r.current, oo(n), o) for (n = 0; n < o.length; n++) l = o[n], c = l._getVersion, c = c(l._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [l, c] : r.mutableSourceEagerHydrationData.push(
      l,
      c
    );
    return new vf(r);
  }, Ba.render = function(n, r, l) {
    if (!hf(r)) throw Error(_(200));
    return Ps(null, n, r, !1, l);
  }, Ba.unmountComponentAtNode = function(n) {
    if (!hf(n)) throw Error(_(40));
    return n._reactRootContainer ? (Mu(function() {
      Ps(null, null, n, !1, function() {
        n._reactRootContainer = null, n[Yi] = null;
      });
    }), !0) : !1;
  }, Ba.unstable_batchedUpdates = Id, Ba.unstable_renderSubtreeIntoContainer = function(n, r, l, o) {
    if (!hf(l)) throw Error(_(200));
    if (n == null || n._reactInternals === void 0) throw Error(_(38));
    return Ps(n, r, l, !1, o);
  }, Ba.version = "18.3.1-next-f1338f8080-20240426", Ba;
}
var $a = {};
/**
 * @license React
 * react-dom.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var uT;
function fk() {
  return uT || (uT = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ != "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var Q = Jl, F = fT(), _ = Q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Oe = !1;
    function qe(e) {
      Oe = e;
    }
    function be(e) {
      if (!Oe) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        pt("warn", e, a);
      }
    }
    function S(e) {
      if (!Oe) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        pt("error", e, a);
      }
    }
    function pt(e, t, a) {
      {
        var i = _.ReactDebugCurrentFrame, u = i.getStackAddendum();
        u !== "" && (t += "%s", a = a.concat([u]));
        var s = a.map(function(f) {
          return String(f);
        });
        s.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var ue = 0, oe = 1, st = 2, ee = 3, Ce = 4, se = 5, Qe = 6, St = 7, ht = 8, cn = 9, vt = 10, We = 11, mt = 12, _e = 13, ct = 14, He = 15, rn = 16, jt = 17, Xt = 18, an = 19, xt = 21, Le = 22, At = 23, _t = 24, Dt = 25, Ee = !0, J = !1, Re = !1, ne = !1, k = !1, V = !0, Pe = !0, Fe = !0, it = !0, tt = /* @__PURE__ */ new Set(), Ze = {}, nt = {};
    function lt(e, t) {
      Vt(e, t), Vt(e + "Capture", t);
    }
    function Vt(e, t) {
      Ze[e] && S("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), Ze[e] = t;
      {
        var a = e.toLowerCase();
        nt[a] = e, e === "onDoubleClick" && (nt.ondblclick = e);
      }
      for (var i = 0; i < t.length; i++)
        tt.add(t[i]);
    }
    var Dn = typeof window != "undefined" && typeof window.document != "undefined" && typeof window.document.createElement != "undefined", br = Object.prototype.hasOwnProperty;
    function En(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, a = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function nr(e) {
      try {
        return Pn(e), !1;
      } catch {
        return !0;
      }
    }
    function Pn(e) {
      return "" + e;
    }
    function Vn(e, t) {
      if (nr(e))
        return S("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, En(e)), Pn(e);
    }
    function Ir(e) {
      if (nr(e))
        return S("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", En(e)), Pn(e);
    }
    function si(e, t) {
      if (nr(e))
        return S("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, En(e)), Pn(e);
    }
    function oa(e, t) {
      if (nr(e))
        return S("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, En(e)), Pn(e);
    }
    function Gn(e) {
      if (nr(e))
        return S("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", En(e)), Pn(e);
    }
    function Cn(e) {
      if (nr(e))
        return S("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", En(e)), Pn(e);
    }
    var Bn = 0, gr = 1, Ia = 2, On = 3, Sr = 4, sa = 5, Ya = 6, ci = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", Z = ci + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", Te = new RegExp("^[" + ci + "][" + Z + "]*$"), rt = {}, Ft = {};
    function Jt(e) {
      return br.call(Ft, e) ? !0 : br.call(rt, e) ? !1 : Te.test(e) ? (Ft[e] = !0, !0) : (rt[e] = !0, S("Invalid attribute name: `%s`", e), !1);
    }
    function pn(e, t, a) {
      return t !== null ? t.type === Bn : a ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function ln(e, t, a, i) {
      if (a !== null && a.type === Bn)
        return !1;
      switch (typeof t) {
        case "function":
        case "symbol":
          return !0;
        case "boolean": {
          if (i)
            return !1;
          if (a !== null)
            return !a.acceptsBooleans;
          var u = e.toLowerCase().slice(0, 5);
          return u !== "data-" && u !== "aria-";
        }
        default:
          return !1;
      }
    }
    function qn(e, t, a, i) {
      if (t === null || typeof t == "undefined" || ln(e, t, a, i))
        return !0;
      if (i)
        return !1;
      if (a !== null)
        switch (a.type) {
          case On:
            return !t;
          case Sr:
            return t === !1;
          case sa:
            return isNaN(t);
          case Ya:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function Zt(e) {
      return $t.hasOwnProperty(e) ? $t[e] : null;
    }
    function Bt(e, t, a, i, u, s, f) {
      this.acceptsBooleans = t === Ia || t === On || t === Sr, this.attributeName = i, this.attributeNamespace = u, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = f;
    }
    var $t = {}, ca = [
      "children",
      "dangerouslySetInnerHTML",
      // TODO: This prevents the assignment of defaultValue to regular
      // elements (not just inputs). Now that ReactDOMInput assigns to the
      // defaultValue property -- do we need this?
      "defaultValue",
      "defaultChecked",
      "innerHTML",
      "suppressContentEditableWarning",
      "suppressHydrationWarning",
      "style"
    ];
    ca.forEach(function(e) {
      $t[e] = new Bt(
        e,
        Bn,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
      var t = e[0], a = e[1];
      $t[t] = new Bt(
        t,
        gr,
        !1,
        // mustUseProperty
        a,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
      $t[e] = new Bt(
        e,
        Ia,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
      $t[e] = new Bt(
        e,
        Ia,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "allowFullScreen",
      "async",
      // Note: there is a special case that prevents it from being written to the DOM
      // on the client side because the browsers are inconsistent. Instead we call focus().
      "autoFocus",
      "autoPlay",
      "controls",
      "default",
      "defer",
      "disabled",
      "disablePictureInPicture",
      "disableRemotePlayback",
      "formNoValidate",
      "hidden",
      "loop",
      "noModule",
      "noValidate",
      "open",
      "playsInline",
      "readOnly",
      "required",
      "reversed",
      "scoped",
      "seamless",
      // Microdata
      "itemScope"
    ].forEach(function(e) {
      $t[e] = new Bt(
        e,
        On,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "checked",
      // Note: `option.selected` is not updated if `select.multiple` is
      // disabled with `removeAttribute`. We have special logic for handling this.
      "multiple",
      "muted",
      "selected"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      $t[e] = new Bt(
        e,
        On,
        !0,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "capture",
      "download"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      $t[e] = new Bt(
        e,
        Sr,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "cols",
      "rows",
      "size",
      "span"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      $t[e] = new Bt(
        e,
        Ya,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["rowSpan", "start"].forEach(function(e) {
      $t[e] = new Bt(
        e,
        sa,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var Er = /[\-\:]([a-z])/g, Ta = function(e) {
      return e[1].toUpperCase();
    };
    [
      "accent-height",
      "alignment-baseline",
      "arabic-form",
      "baseline-shift",
      "cap-height",
      "clip-path",
      "clip-rule",
      "color-interpolation",
      "color-interpolation-filters",
      "color-profile",
      "color-rendering",
      "dominant-baseline",
      "enable-background",
      "fill-opacity",
      "fill-rule",
      "flood-color",
      "flood-opacity",
      "font-family",
      "font-size",
      "font-size-adjust",
      "font-stretch",
      "font-style",
      "font-variant",
      "font-weight",
      "glyph-name",
      "glyph-orientation-horizontal",
      "glyph-orientation-vertical",
      "horiz-adv-x",
      "horiz-origin-x",
      "image-rendering",
      "letter-spacing",
      "lighting-color",
      "marker-end",
      "marker-mid",
      "marker-start",
      "overline-position",
      "overline-thickness",
      "paint-order",
      "panose-1",
      "pointer-events",
      "rendering-intent",
      "shape-rendering",
      "stop-color",
      "stop-opacity",
      "strikethrough-position",
      "strikethrough-thickness",
      "stroke-dasharray",
      "stroke-dashoffset",
      "stroke-linecap",
      "stroke-linejoin",
      "stroke-miterlimit",
      "stroke-opacity",
      "stroke-width",
      "text-anchor",
      "text-decoration",
      "text-rendering",
      "underline-position",
      "underline-thickness",
      "unicode-bidi",
      "unicode-range",
      "units-per-em",
      "v-alphabetic",
      "v-hanging",
      "v-ideographic",
      "v-mathematical",
      "vector-effect",
      "vert-adv-y",
      "vert-origin-x",
      "vert-origin-y",
      "word-spacing",
      "writing-mode",
      "xmlns:xlink",
      "x-height"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(Er, Ta);
      $t[t] = new Bt(
        t,
        gr,
        !1,
        // mustUseProperty
        e,
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xlink:actuate",
      "xlink:arcrole",
      "xlink:role",
      "xlink:show",
      "xlink:title",
      "xlink:type"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(Er, Ta);
      $t[t] = new Bt(
        t,
        gr,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/1999/xlink",
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xml:base",
      "xml:lang",
      "xml:space"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(Er, Ta);
      $t[t] = new Bt(
        t,
        gr,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      $t[e] = new Bt(
        e,
        gr,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var ji = "xlinkHref";
    $t[ji] = new Bt(
      "xlinkHref",
      gr,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      $t[e] = new Bt(
        e,
        gr,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !0,
        // sanitizeURL
        !0
      );
    });
    var Zl = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, eu = !1;
    function dl(e) {
      !eu && Zl.test(e) && (eu = !0, S("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function pl(e, t, a, i) {
      if (i.mustUseProperty) {
        var u = i.propertyName;
        return e[u];
      } else {
        Vn(a, t), i.sanitizeURL && dl("" + a);
        var s = i.attributeName, f = null;
        if (i.type === Sr) {
          if (e.hasAttribute(s)) {
            var p = e.getAttribute(s);
            return p === "" ? !0 : qn(t, a, i, !1) ? p : p === "" + a ? a : p;
          }
        } else if (e.hasAttribute(s)) {
          if (qn(t, a, i, !1))
            return e.getAttribute(s);
          if (i.type === On)
            return a;
          f = e.getAttribute(s);
        }
        return qn(t, a, i, !1) ? f === null ? a : f : f === "" + a ? a : f;
      }
    }
    function tu(e, t, a, i) {
      {
        if (!Jt(t))
          return;
        if (!e.hasAttribute(t))
          return a === void 0 ? void 0 : null;
        var u = e.getAttribute(t);
        return Vn(a, t), u === "" + a ? a : u;
      }
    }
    function xr(e, t, a, i) {
      var u = Zt(t);
      if (!pn(t, u, i)) {
        if (qn(t, a, u, i) && (a = null), i || u === null) {
          if (Jt(t)) {
            var s = t;
            a === null ? e.removeAttribute(s) : (Vn(a, t), e.setAttribute(s, "" + a));
          }
          return;
        }
        var f = u.mustUseProperty;
        if (f) {
          var p = u.propertyName;
          if (a === null) {
            var v = u.type;
            e[p] = v === On ? !1 : "";
          } else
            e[p] = a;
          return;
        }
        var y = u.attributeName, g = u.attributeNamespace;
        if (a === null)
          e.removeAttribute(y);
        else {
          var x = u.type, w;
          x === On || x === Sr && a === !0 ? w = "" : (Vn(a, y), w = "" + a, u.sanitizeURL && dl(w.toString())), g ? e.setAttributeNS(g, y, w) : e.setAttribute(y, w);
        }
      }
    }
    var _r = Symbol.for("react.element"), rr = Symbol.for("react.portal"), fi = Symbol.for("react.fragment"), Qa = Symbol.for("react.strict_mode"), di = Symbol.for("react.profiler"), pi = Symbol.for("react.provider"), R = Symbol.for("react.context"), $ = Symbol.for("react.forward_ref"), ae = Symbol.for("react.suspense"), he = Symbol.for("react.suspense_list"), Ke = Symbol.for("react.memo"), Ie = Symbol.for("react.lazy"), ft = Symbol.for("react.scope"), ut = Symbol.for("react.debug_trace_mode"), Rn = Symbol.for("react.offscreen"), en = Symbol.for("react.legacy_hidden"), un = Symbol.for("react.cache"), ar = Symbol.for("react.tracing_marker"), Wa = Symbol.iterator, Ga = "@@iterator";
    function Xe(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = Wa && e[Wa] || e[Ga];
      return typeof t == "function" ? t : null;
    }
    var et = Object.assign, qa = 0, nu, ru, vl, Wu, hl, Yr, Yo;
    function kr() {
    }
    kr.__reactDisabledLog = !0;
    function lc() {
      {
        if (qa === 0) {
          nu = console.log, ru = console.info, vl = console.warn, Wu = console.error, hl = console.group, Yr = console.groupCollapsed, Yo = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: kr,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        qa++;
      }
    }
    function uc() {
      {
        if (qa--, qa === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: et({}, e, {
              value: nu
            }),
            info: et({}, e, {
              value: ru
            }),
            warn: et({}, e, {
              value: vl
            }),
            error: et({}, e, {
              value: Wu
            }),
            group: et({}, e, {
              value: hl
            }),
            groupCollapsed: et({}, e, {
              value: Yr
            }),
            groupEnd: et({}, e, {
              value: Yo
            })
          });
        }
        qa < 0 && S("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Gu = _.ReactCurrentDispatcher, ml;
    function fa(e, t, a) {
      {
        if (ml === void 0)
          try {
            throw Error();
          } catch (u) {
            var i = u.stack.trim().match(/\n( *(at )?)/);
            ml = i && i[1] || "";
          }
        return `
` + ml + e;
      }
    }
    var Ka = !1, Xa;
    {
      var qu = typeof WeakMap == "function" ? WeakMap : Map;
      Xa = new qu();
    }
    function au(e, t) {
      if (!e || Ka)
        return "";
      {
        var a = Xa.get(e);
        if (a !== void 0)
          return a;
      }
      var i;
      Ka = !0;
      var u = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = Gu.current, Gu.current = null, lc();
      try {
        if (t) {
          var f = function() {
            throw Error();
          };
          if (Object.defineProperty(f.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(f, []);
            } catch (A) {
              i = A;
            }
            Reflect.construct(e, [], f);
          } else {
            try {
              f.call();
            } catch (A) {
              i = A;
            }
            e.call(f.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (A) {
            i = A;
          }
          e();
        }
      } catch (A) {
        if (A && i && typeof A.stack == "string") {
          for (var p = A.stack.split(`
`), v = i.stack.split(`
`), y = p.length - 1, g = v.length - 1; y >= 1 && g >= 0 && p[y] !== v[g]; )
            g--;
          for (; y >= 1 && g >= 0; y--, g--)
            if (p[y] !== v[g]) {
              if (y !== 1 || g !== 1)
                do
                  if (y--, g--, g < 0 || p[y] !== v[g]) {
                    var x = `
` + p[y].replace(" at new ", " at ");
                    return e.displayName && x.includes("<anonymous>") && (x = x.replace("<anonymous>", e.displayName)), typeof e == "function" && Xa.set(e, x), x;
                  }
                while (y >= 1 && g >= 0);
              break;
            }
        }
      } finally {
        Ka = !1, Gu.current = s, uc(), Error.prepareStackTrace = u;
      }
      var w = e ? e.displayName || e.name : "", N = w ? fa(w) : "";
      return typeof e == "function" && Xa.set(e, N), N;
    }
    function yl(e, t, a) {
      return au(e, !0);
    }
    function Ku(e, t, a) {
      return au(e, !1);
    }
    function Xu(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function Hi(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return au(e, Xu(e));
      if (typeof e == "string")
        return fa(e);
      switch (e) {
        case ae:
          return fa("Suspense");
        case he:
          return fa("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case $:
            return Ku(e.render);
          case Ke:
            return Hi(e.type, t, a);
          case Ie: {
            var i = e, u = i._payload, s = i._init;
            try {
              return Hi(s(u), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    function Wf(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case se:
          return fa(e.type);
        case rn:
          return fa("Lazy");
        case _e:
          return fa("Suspense");
        case an:
          return fa("SuspenseList");
        case ue:
        case st:
        case He:
          return Ku(e.type);
        case We:
          return Ku(e.type.render);
        case oe:
          return yl(e.type);
        default:
          return "";
      }
    }
    function Pi(e) {
      try {
        var t = "", a = e;
        do
          t += Wf(a), a = a.return;
        while (a);
        return t;
      } catch (i) {
        return `
Error generating stack: ` + i.message + `
` + i.stack;
      }
    }
    function Ot(e, t, a) {
      var i = e.displayName;
      if (i)
        return i;
      var u = t.displayName || t.name || "";
      return u !== "" ? a + "(" + u + ")" : a;
    }
    function Ju(e) {
      return e.displayName || "Context";
    }
    function wt(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && S("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case fi:
          return "Fragment";
        case rr:
          return "Portal";
        case di:
          return "Profiler";
        case Qa:
          return "StrictMode";
        case ae:
          return "Suspense";
        case he:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case R:
            var t = e;
            return Ju(t) + ".Consumer";
          case pi:
            var a = e;
            return Ju(a._context) + ".Provider";
          case $:
            return Ot(e, e.render, "ForwardRef");
          case Ke:
            var i = e.displayName || null;
            return i !== null ? i : wt(e.type) || "Memo";
          case Ie: {
            var u = e, s = u._payload, f = u._init;
            try {
              return wt(f(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    function Qo(e, t, a) {
      var i = t.displayName || t.name || "";
      return e.displayName || (i !== "" ? a + "(" + i + ")" : a);
    }
    function vi(e) {
      return e.displayName || "Context";
    }
    function $e(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case _t:
          return "Cache";
        case cn:
          var i = a;
          return vi(i) + ".Consumer";
        case vt:
          var u = a;
          return vi(u._context) + ".Provider";
        case Xt:
          return "DehydratedFragment";
        case We:
          return Qo(a, a.render, "ForwardRef");
        case St:
          return "Fragment";
        case se:
          return a;
        case Ce:
          return "Portal";
        case ee:
          return "Root";
        case Qe:
          return "Text";
        case rn:
          return wt(a);
        case ht:
          return a === Qa ? "StrictMode" : "Mode";
        case Le:
          return "Offscreen";
        case mt:
          return "Profiler";
        case xt:
          return "Scope";
        case _e:
          return "Suspense";
        case an:
          return "SuspenseList";
        case Dt:
          return "TracingMarker";
        case oe:
        case ue:
        case jt:
        case st:
        case ct:
        case He:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var Zu = _.ReactDebugCurrentFrame, ir = null, hi = !1;
    function Dr() {
      {
        if (ir === null)
          return null;
        var e = ir._debugOwner;
        if (e !== null && typeof e != "undefined")
          return $e(e);
      }
      return null;
    }
    function mi() {
      return ir === null ? "" : Pi(ir);
    }
    function on() {
      Zu.getCurrentStack = null, ir = null, hi = !1;
    }
    function It(e) {
      Zu.getCurrentStack = e === null ? null : mi, ir = e, hi = !1;
    }
    function gl() {
      return ir;
    }
    function $n(e) {
      hi = e;
    }
    function Or(e) {
      return "" + e;
    }
    function wa(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return Cn(e), e;
        default:
          return "";
      }
    }
    var iu = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function Wo(e, t) {
      iu[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || S("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || S("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function Go(e) {
      var t = e.type, a = e.nodeName;
      return a && a.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function Sl(e) {
      return e._valueTracker;
    }
    function lu(e) {
      e._valueTracker = null;
    }
    function Gf(e) {
      var t = "";
      return e && (Go(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function ba(e) {
      var t = Go(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      Cn(e[t]);
      var i = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof a == "undefined" || typeof a.get != "function" || typeof a.set != "function")) {
        var u = a.get, s = a.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return u.call(this);
          },
          set: function(p) {
            Cn(p), i = "" + p, s.call(this, p);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        });
        var f = {
          getValue: function() {
            return i;
          },
          setValue: function(p) {
            Cn(p), i = "" + p;
          },
          stopTracking: function() {
            lu(e), delete e[t];
          }
        };
        return f;
      }
    }
    function Ja(e) {
      Sl(e) || (e._valueTracker = ba(e));
    }
    function yi(e) {
      if (!e)
        return !1;
      var t = Sl(e);
      if (!t)
        return !0;
      var a = t.getValue(), i = Gf(e);
      return i !== a ? (t.setValue(i), !0) : !1;
    }
    function xa(e) {
      if (e = e || (typeof document != "undefined" ? document : void 0), typeof e == "undefined")
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var eo = !1, to = !1, El = !1, uu = !1;
    function no(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function ro(e, t) {
      var a = e, i = t.checked, u = et({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: i != null ? i : a._wrapperState.initialChecked
      });
      return u;
    }
    function Za(e, t) {
      Wo("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !to && (S("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Dr() || "A component", t.type), to = !0), t.value !== void 0 && t.defaultValue !== void 0 && !eo && (S("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Dr() || "A component", t.type), eo = !0);
      var a = e, i = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: wa(t.value != null ? t.value : i),
        controlled: no(t)
      };
    }
    function h(e, t) {
      var a = e, i = t.checked;
      i != null && xr(a, "checked", i, !1);
    }
    function C(e, t) {
      var a = e;
      {
        var i = no(t);
        !a._wrapperState.controlled && i && !uu && (S("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), uu = !0), a._wrapperState.controlled && !i && !El && (S("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), El = !0);
      }
      h(e, t);
      var u = wa(t.value), s = t.type;
      if (u != null)
        s === "number" ? (u === 0 && a.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        a.value != u) && (a.value = Or(u)) : a.value !== Or(u) && (a.value = Or(u));
      else if (s === "submit" || s === "reset") {
        a.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? Me(a, t.type, u) : t.hasOwnProperty("defaultValue") && Me(a, t.type, wa(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function z(e, t, a) {
      var i = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var u = t.type, s = u === "submit" || u === "reset";
        if (s && (t.value === void 0 || t.value === null))
          return;
        var f = Or(i._wrapperState.initialValue);
        a || f !== i.value && (i.value = f), i.defaultValue = f;
      }
      var p = i.name;
      p !== "" && (i.name = ""), i.defaultChecked = !i.defaultChecked, i.defaultChecked = !!i._wrapperState.initialChecked, p !== "" && (i.name = p);
    }
    function j(e, t) {
      var a = e;
      C(a, t), X(a, t);
    }
    function X(e, t) {
      var a = t.name;
      if (t.type === "radio" && a != null) {
        for (var i = e; i.parentNode; )
          i = i.parentNode;
        Vn(a, "name");
        for (var u = i.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), s = 0; s < u.length; s++) {
          var f = u[s];
          if (!(f === e || f.form !== e.form)) {
            var p = Mh(f);
            if (!p)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            yi(f), C(f, p);
          }
        }
      }
    }
    function Me(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || xa(e.ownerDocument) !== e) && (a == null ? e.defaultValue = Or(e._wrapperState.initialValue) : e.defaultValue !== Or(a) && (e.defaultValue = Or(a)));
    }
    var re = !1, Ue = !1, dt = !1;
    function bt(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? Q.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || Ue || (Ue = !0, S("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (dt || (dt = !0, S("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !re && (S("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), re = !0);
    }
    function tn(e, t) {
      t.value != null && e.setAttribute("value", Or(wa(t.value)));
    }
    var Yt = Array.isArray;
    function at(e) {
      return Yt(e);
    }
    var Qt;
    Qt = !1;
    function vn() {
      var e = Dr();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var Cl = ["value", "defaultValue"];
    function qo(e) {
      {
        Wo("select", e);
        for (var t = 0; t < Cl.length; t++) {
          var a = Cl[t];
          if (e[a] != null) {
            var i = at(e[a]);
            e.multiple && !i ? S("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, vn()) : !e.multiple && i && S("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, vn());
          }
        }
      }
    }
    function Vi(e, t, a, i) {
      var u = e.options;
      if (t) {
        for (var s = a, f = {}, p = 0; p < s.length; p++)
          f["$" + s[p]] = !0;
        for (var v = 0; v < u.length; v++) {
          var y = f.hasOwnProperty("$" + u[v].value);
          u[v].selected !== y && (u[v].selected = y), y && i && (u[v].defaultSelected = !0);
        }
      } else {
        for (var g = Or(wa(a)), x = null, w = 0; w < u.length; w++) {
          if (u[w].value === g) {
            u[w].selected = !0, i && (u[w].defaultSelected = !0);
            return;
          }
          x === null && !u[w].disabled && (x = u[w]);
        }
        x !== null && (x.selected = !0);
      }
    }
    function Ko(e, t) {
      return et({}, t, {
        value: void 0
      });
    }
    function ou(e, t) {
      var a = e;
      qo(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !Qt && (S("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), Qt = !0);
    }
    function qf(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var i = t.value;
      i != null ? Vi(a, !!t.multiple, i, !1) : t.defaultValue != null && Vi(a, !!t.multiple, t.defaultValue, !0);
    }
    function oc(e, t) {
      var a = e, i = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var u = t.value;
      u != null ? Vi(a, !!t.multiple, u, !1) : i !== !!t.multiple && (t.defaultValue != null ? Vi(a, !!t.multiple, t.defaultValue, !0) : Vi(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function Kf(e, t) {
      var a = e, i = t.value;
      i != null && Vi(a, !!t.multiple, i, !1);
    }
    var tv = !1;
    function Xf(e, t) {
      var a = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var i = et({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: Or(a._wrapperState.initialValue)
      });
      return i;
    }
    function Jf(e, t) {
      var a = e;
      Wo("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !tv && (S("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", Dr() || "A component"), tv = !0);
      var i = t.value;
      if (i == null) {
        var u = t.children, s = t.defaultValue;
        if (u != null) {
          S("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (s != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (at(u)) {
              if (u.length > 1)
                throw new Error("<textarea> can only have at most one child.");
              u = u[0];
            }
            s = u;
          }
        }
        s == null && (s = ""), i = s;
      }
      a._wrapperState = {
        initialValue: wa(i)
      };
    }
    function nv(e, t) {
      var a = e, i = wa(t.value), u = wa(t.defaultValue);
      if (i != null) {
        var s = Or(i);
        s !== a.value && (a.value = s), t.defaultValue == null && a.defaultValue !== s && (a.defaultValue = s);
      }
      u != null && (a.defaultValue = Or(u));
    }
    function rv(e, t) {
      var a = e, i = a.textContent;
      i === a._wrapperState.initialValue && i !== "" && i !== null && (a.value = i);
    }
    function Xm(e, t) {
      nv(e, t);
    }
    var Bi = "http://www.w3.org/1999/xhtml", Zf = "http://www.w3.org/1998/Math/MathML", ed = "http://www.w3.org/2000/svg";
    function td(e) {
      switch (e) {
        case "svg":
          return ed;
        case "math":
          return Zf;
        default:
          return Bi;
      }
    }
    function nd(e, t) {
      return e == null || e === Bi ? td(t) : e === ed && t === "foreignObject" ? Bi : e;
    }
    var av = function(e) {
      return typeof MSApp != "undefined" && MSApp.execUnsafeLocalFunction ? function(t, a, i, u) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, i, u);
        });
      } : e;
    }, sc, iv = av(function(e, t) {
      if (e.namespaceURI === ed && !("innerHTML" in e)) {
        sc = sc || document.createElement("div"), sc.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = sc.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), Qr = 1, $i = 3, Ln = 8, Ii = 9, rd = 11, ao = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === $i) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, Xo = {
      animation: ["animationDelay", "animationDirection", "animationDuration", "animationFillMode", "animationIterationCount", "animationName", "animationPlayState", "animationTimingFunction"],
      background: ["backgroundAttachment", "backgroundClip", "backgroundColor", "backgroundImage", "backgroundOrigin", "backgroundPositionX", "backgroundPositionY", "backgroundRepeat", "backgroundSize"],
      backgroundPosition: ["backgroundPositionX", "backgroundPositionY"],
      border: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth", "borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth", "borderLeftColor", "borderLeftStyle", "borderLeftWidth", "borderRightColor", "borderRightStyle", "borderRightWidth", "borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderBlockEnd: ["borderBlockEndColor", "borderBlockEndStyle", "borderBlockEndWidth"],
      borderBlockStart: ["borderBlockStartColor", "borderBlockStartStyle", "borderBlockStartWidth"],
      borderBottom: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth"],
      borderColor: ["borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor"],
      borderImage: ["borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth"],
      borderInlineEnd: ["borderInlineEndColor", "borderInlineEndStyle", "borderInlineEndWidth"],
      borderInlineStart: ["borderInlineStartColor", "borderInlineStartStyle", "borderInlineStartWidth"],
      borderLeft: ["borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
      borderRadius: ["borderBottomLeftRadius", "borderBottomRightRadius", "borderTopLeftRadius", "borderTopRightRadius"],
      borderRight: ["borderRightColor", "borderRightStyle", "borderRightWidth"],
      borderStyle: ["borderBottomStyle", "borderLeftStyle", "borderRightStyle", "borderTopStyle"],
      borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderWidth: ["borderBottomWidth", "borderLeftWidth", "borderRightWidth", "borderTopWidth"],
      columnRule: ["columnRuleColor", "columnRuleStyle", "columnRuleWidth"],
      columns: ["columnCount", "columnWidth"],
      flex: ["flexBasis", "flexGrow", "flexShrink"],
      flexFlow: ["flexDirection", "flexWrap"],
      font: ["fontFamily", "fontFeatureSettings", "fontKerning", "fontLanguageOverride", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition", "fontWeight", "lineHeight"],
      fontVariant: ["fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition"],
      gap: ["columnGap", "rowGap"],
      grid: ["gridAutoColumns", "gridAutoFlow", "gridAutoRows", "gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      gridArea: ["gridColumnEnd", "gridColumnStart", "gridRowEnd", "gridRowStart"],
      gridColumn: ["gridColumnEnd", "gridColumnStart"],
      gridColumnGap: ["columnGap"],
      gridGap: ["columnGap", "rowGap"],
      gridRow: ["gridRowEnd", "gridRowStart"],
      gridRowGap: ["rowGap"],
      gridTemplate: ["gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      listStyle: ["listStyleImage", "listStylePosition", "listStyleType"],
      margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
      marker: ["markerEnd", "markerMid", "markerStart"],
      mask: ["maskClip", "maskComposite", "maskImage", "maskMode", "maskOrigin", "maskPositionX", "maskPositionY", "maskRepeat", "maskSize"],
      maskPosition: ["maskPositionX", "maskPositionY"],
      outline: ["outlineColor", "outlineStyle", "outlineWidth"],
      overflow: ["overflowX", "overflowY"],
      padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"],
      placeContent: ["alignContent", "justifyContent"],
      placeItems: ["alignItems", "justifyItems"],
      placeSelf: ["alignSelf", "justifySelf"],
      textDecoration: ["textDecorationColor", "textDecorationLine", "textDecorationStyle"],
      textEmphasis: ["textEmphasisColor", "textEmphasisStyle"],
      transition: ["transitionDelay", "transitionDuration", "transitionProperty", "transitionTimingFunction"],
      wordWrap: ["overflowWrap"]
    }, Jo = {
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
      // SVG-related properties
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0
    };
    function lv(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var uv = ["Webkit", "ms", "Moz", "O"];
    Object.keys(Jo).forEach(function(e) {
      uv.forEach(function(t) {
        Jo[lv(t, e)] = Jo[e];
      });
    });
    function cc(e, t, a) {
      var i = t == null || typeof t == "boolean" || t === "";
      return i ? "" : !a && typeof t == "number" && t !== 0 && !(Jo.hasOwnProperty(e) && Jo[e]) ? t + "px" : (oa(t, e), ("" + t).trim());
    }
    var ov = /([A-Z])/g, sv = /^ms-/;
    function io(e) {
      return e.replace(ov, "-$1").toLowerCase().replace(sv, "-ms-");
    }
    var cv = function() {
    };
    {
      var Jm = /^(?:webkit|moz|o)[A-Z]/, Zm = /^-ms-/, fv = /-(.)/g, ad = /;\s*$/, gi = {}, su = {}, dv = !1, Zo = !1, ey = function(e) {
        return e.replace(fv, function(t, a) {
          return a.toUpperCase();
        });
      }, pv = function(e) {
        gi.hasOwnProperty(e) && gi[e] || (gi[e] = !0, S(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          ey(e.replace(Zm, "ms-"))
        ));
      }, id = function(e) {
        gi.hasOwnProperty(e) && gi[e] || (gi[e] = !0, S("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, ld = function(e, t) {
        su.hasOwnProperty(t) && su[t] || (su[t] = !0, S(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(ad, "")));
      }, vv = function(e, t) {
        dv || (dv = !0, S("`NaN` is an invalid value for the `%s` css style property.", e));
      }, hv = function(e, t) {
        Zo || (Zo = !0, S("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      cv = function(e, t) {
        e.indexOf("-") > -1 ? pv(e) : Jm.test(e) ? id(e) : ad.test(t) && ld(e, t), typeof t == "number" && (isNaN(t) ? vv(e, t) : isFinite(t) || hv(e, t));
      };
    }
    var mv = cv;
    function ty(e) {
      {
        var t = "", a = "";
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var u = e[i];
            if (u != null) {
              var s = i.indexOf("--") === 0;
              t += a + (s ? i : io(i)) + ":", t += cc(i, u, s), a = ";";
            }
          }
        return t || null;
      }
    }
    function yv(e, t) {
      var a = e.style;
      for (var i in t)
        if (t.hasOwnProperty(i)) {
          var u = i.indexOf("--") === 0;
          u || mv(i, t[i]);
          var s = cc(i, t[i], u);
          i === "float" && (i = "cssFloat"), u ? a.setProperty(i, s) : a[i] = s;
        }
    }
    function ny(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function gv(e) {
      var t = {};
      for (var a in e)
        for (var i = Xo[a] || [a], u = 0; u < i.length; u++)
          t[i[u]] = a;
      return t;
    }
    function ry(e, t) {
      {
        if (!t)
          return;
        var a = gv(e), i = gv(t), u = {};
        for (var s in a) {
          var f = a[s], p = i[s];
          if (p && f !== p) {
            var v = f + "," + p;
            if (u[v])
              continue;
            u[v] = !0, S("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", ny(e[f]) ? "Removing" : "Updating", f, p);
          }
        }
      }
    }
    var ei = {
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
      wbr: !0
      // NOTE: menuitem's close tag should be omitted, but that causes problems.
    }, es = et({
      menuitem: !0
    }, ei), Sv = "__html";
    function fc(e, t) {
      if (t) {
        if (es[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(Sv in t.dangerouslySetInnerHTML))
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && S("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
          throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    function Rl(e, t) {
      if (e.indexOf("-") === -1)
        return typeof t.is == "string";
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
    var ts = {
      // HTML
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      // SVG
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, dc = {
      "aria-current": 0,
      // state
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      // state
      "aria-hidden": 0,
      // state
      "aria-invalid": 0,
      // state
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      // Widget Attributes
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      // Live Region Attributes
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      // Drag-and-Drop Attributes
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      // Relationship Attributes
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0
    }, lo = {}, ay = new RegExp("^(aria)-[" + Z + "]*$"), uo = new RegExp("^(aria)[A-Z][" + Z + "]*$");
    function ud(e, t) {
      {
        if (br.call(lo, t) && lo[t])
          return !0;
        if (uo.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), i = dc.hasOwnProperty(a) ? a : null;
          if (i == null)
            return S("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), lo[t] = !0, !0;
          if (t !== i)
            return S("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), lo[t] = !0, !0;
        }
        if (ay.test(t)) {
          var u = t.toLowerCase(), s = dc.hasOwnProperty(u) ? u : null;
          if (s == null)
            return lo[t] = !0, !1;
          if (t !== s)
            return S("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, s), lo[t] = !0, !0;
        }
      }
      return !0;
    }
    function ns(e, t) {
      {
        var a = [];
        for (var i in t) {
          var u = ud(e, i);
          u || a.push(i);
        }
        var s = a.map(function(f) {
          return "`" + f + "`";
        }).join(", ");
        a.length === 1 ? S("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e) : a.length > 1 && S("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e);
      }
    }
    function od(e, t) {
      Rl(e, t) || ns(e, t);
    }
    var sd = !1;
    function pc(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !sd && (sd = !0, e === "select" && t.multiple ? S("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : S("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var cu = function() {
    };
    {
      var lr = {}, cd = /^on./, vc = /^on[^A-Z]/, Ev = new RegExp("^(aria)-[" + Z + "]*$"), Cv = new RegExp("^(aria)[A-Z][" + Z + "]*$");
      cu = function(e, t, a, i) {
        if (br.call(lr, t) && lr[t])
          return !0;
        var u = t.toLowerCase();
        if (u === "onfocusin" || u === "onfocusout")
          return S("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), lr[t] = !0, !0;
        if (i != null) {
          var s = i.registrationNameDependencies, f = i.possibleRegistrationNames;
          if (s.hasOwnProperty(t))
            return !0;
          var p = f.hasOwnProperty(u) ? f[u] : null;
          if (p != null)
            return S("Invalid event handler property `%s`. Did you mean `%s`?", t, p), lr[t] = !0, !0;
          if (cd.test(t))
            return S("Unknown event handler property `%s`. It will be ignored.", t), lr[t] = !0, !0;
        } else if (cd.test(t))
          return vc.test(t) && S("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), lr[t] = !0, !0;
        if (Ev.test(t) || Cv.test(t))
          return !0;
        if (u === "innerhtml")
          return S("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), lr[t] = !0, !0;
        if (u === "aria")
          return S("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), lr[t] = !0, !0;
        if (u === "is" && a !== null && a !== void 0 && typeof a != "string")
          return S("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), lr[t] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return S("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), lr[t] = !0, !0;
        var v = Zt(t), y = v !== null && v.type === Bn;
        if (ts.hasOwnProperty(u)) {
          var g = ts[u];
          if (g !== t)
            return S("Invalid DOM property `%s`. Did you mean `%s`?", t, g), lr[t] = !0, !0;
        } else if (!y && t !== u)
          return S("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, u), lr[t] = !0, !0;
        return typeof a == "boolean" && ln(t, a, v, !1) ? (a ? S('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : S('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), lr[t] = !0, !0) : y ? !0 : ln(t, a, v, !1) ? (lr[t] = !0, !1) : ((a === "false" || a === "true") && v !== null && v.type === On && (S("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), lr[t] = !0), !0);
      };
    }
    var Rv = function(e, t, a) {
      {
        var i = [];
        for (var u in t) {
          var s = cu(e, u, t[u], a);
          s || i.push(u);
        }
        var f = i.map(function(p) {
          return "`" + p + "`";
        }).join(", ");
        i.length === 1 ? S("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e) : i.length > 1 && S("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e);
      }
    };
    function Tv(e, t, a) {
      Rl(e, t) || Rv(e, t, a);
    }
    var fd = 1, hc = 2, _a = 4, dd = fd | hc | _a, fu = null;
    function iy(e) {
      fu !== null && S("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), fu = e;
    }
    function ly() {
      fu === null && S("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), fu = null;
    }
    function rs(e) {
      return e === fu;
    }
    function pd(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === $i ? t.parentNode : t;
    }
    var mc = null, du = null, Ht = null;
    function yc(e) {
      var t = Do(e);
      if (t) {
        if (typeof mc != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var i = Mh(a);
          mc(t.stateNode, t.type, i);
        }
      }
    }
    function gc(e) {
      mc = e;
    }
    function oo(e) {
      du ? Ht ? Ht.push(e) : Ht = [e] : du = e;
    }
    function wv() {
      return du !== null || Ht !== null;
    }
    function Sc() {
      if (du) {
        var e = du, t = Ht;
        if (du = null, Ht = null, yc(e), t)
          for (var a = 0; a < t.length; a++)
            yc(t[a]);
      }
    }
    var so = function(e, t) {
      return e(t);
    }, as = function() {
    }, Tl = !1;
    function bv() {
      var e = wv();
      e && (as(), Sc());
    }
    function xv(e, t, a) {
      if (Tl)
        return e(t, a);
      Tl = !0;
      try {
        return so(e, t, a);
      } finally {
        Tl = !1, bv();
      }
    }
    function uy(e, t, a) {
      so = e, as = a;
    }
    function _v(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function Ec(e, t, a) {
      switch (e) {
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
          return !!(a.disabled && _v(t));
        default:
          return !1;
      }
    }
    function wl(e, t) {
      var a = e.stateNode;
      if (a === null)
        return null;
      var i = Mh(a);
      if (i === null)
        return null;
      var u = i[t];
      if (Ec(t, e.type, i))
        return null;
      if (u && typeof u != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof u + "` type.");
      return u;
    }
    var is = !1;
    if (Dn)
      try {
        var pu = {};
        Object.defineProperty(pu, "passive", {
          get: function() {
            is = !0;
          }
        }), window.addEventListener("test", pu, pu), window.removeEventListener("test", pu, pu);
      } catch {
        is = !1;
      }
    function Cc(e, t, a, i, u, s, f, p, v) {
      var y = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, y);
      } catch (g) {
        this.onError(g);
      }
    }
    var Rc = Cc;
    if (typeof window != "undefined" && typeof window.dispatchEvent == "function" && typeof document != "undefined" && typeof document.createEvent == "function") {
      var vd = document.createElement("react");
      Rc = function(t, a, i, u, s, f, p, v, y) {
        if (typeof document == "undefined" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var g = document.createEvent("Event"), x = !1, w = !0, N = window.event, A = Object.getOwnPropertyDescriptor(window, "event");
        function H() {
          vd.removeEventListener(P, Ne, !1), typeof window.event != "undefined" && window.hasOwnProperty("event") && (window.event = N);
        }
        var le = Array.prototype.slice.call(arguments, 3);
        function Ne() {
          x = !0, H(), a.apply(i, le), w = !1;
        }
        var we, Tt = !1, yt = !1;
        function O(L) {
          if (we = L.error, Tt = !0, we === null && L.colno === 0 && L.lineno === 0 && (yt = !0), L.defaultPrevented && we != null && typeof we == "object")
            try {
              we._suppressLogging = !0;
            } catch {
            }
        }
        var P = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", O), vd.addEventListener(P, Ne, !1), g.initEvent(P, !1, !1), vd.dispatchEvent(g), A && Object.defineProperty(window, "event", A), x && w && (Tt ? yt && (we = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : we = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(we)), window.removeEventListener("error", O), !x)
          return H(), Cc.apply(this, arguments);
      };
    }
    var kv = Rc, co = !1, Tc = null, fo = !1, Si = null, Dv = {
      onError: function(e) {
        co = !0, Tc = e;
      }
    };
    function bl(e, t, a, i, u, s, f, p, v) {
      co = !1, Tc = null, kv.apply(Dv, arguments);
    }
    function Ei(e, t, a, i, u, s, f, p, v) {
      if (bl.apply(this, arguments), co) {
        var y = us();
        fo || (fo = !0, Si = y);
      }
    }
    function ls() {
      if (fo) {
        var e = Si;
        throw fo = !1, Si = null, e;
      }
    }
    function Yi() {
      return co;
    }
    function us() {
      if (co) {
        var e = Tc;
        return co = !1, Tc = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function po(e) {
      return e._reactInternals;
    }
    function oy(e) {
      return e._reactInternals !== void 0;
    }
    function vu(e, t) {
      e._reactInternals = t;
    }
    var ke = (
      /*                      */
      0
    ), ti = (
      /*                */
      1
    ), hn = (
      /*                    */
      2
    ), Et = (
      /*                       */
      4
    ), ka = (
      /*                */
      16
    ), Da = (
      /*                 */
      32
    ), nn = (
      /*                     */
      64
    ), xe = (
      /*                   */
      128
    ), Cr = (
      /*            */
      256
    ), Sn = (
      /*                          */
      512
    ), In = (
      /*                     */
      1024
    ), Wr = (
      /*                      */
      2048
    ), Gr = (
      /*                    */
      4096
    ), Mn = (
      /*                   */
      8192
    ), vo = (
      /*             */
      16384
    ), Ov = (
      /*               */
      32767
    ), os = (
      /*                   */
      32768
    ), Kn = (
      /*                */
      65536
    ), wc = (
      /* */
      131072
    ), Ci = (
      /*                       */
      1048576
    ), ho = (
      /*                    */
      2097152
    ), Qi = (
      /*                 */
      4194304
    ), bc = (
      /*                */
      8388608
    ), xl = (
      /*               */
      16777216
    ), Ri = (
      /*              */
      33554432
    ), _l = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      Et | In | 0
    ), kl = hn | Et | ka | Da | Sn | Gr | Mn, Dl = Et | nn | Sn | Mn, Wi = Wr | ka, Nn = Qi | bc | ho, Oa = _.ReactCurrentOwner;
    function da(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & (hn | Gr)) !== ke && (a = t.return), i = t.return;
        while (i);
      }
      return t.tag === ee ? a : null;
    }
    function Ti(e) {
      if (e.tag === _e) {
        var t = e.memoizedState;
        if (t === null) {
          var a = e.alternate;
          a !== null && (t = a.memoizedState);
        }
        if (t !== null)
          return t.dehydrated;
      }
      return null;
    }
    function wi(e) {
      return e.tag === ee ? e.stateNode.containerInfo : null;
    }
    function hu(e) {
      return da(e) === e;
    }
    function Lv(e) {
      {
        var t = Oa.current;
        if (t !== null && t.tag === oe) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || S("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", $e(a) || "A component"), i._warnedAboutRefsInRender = !0;
        }
      }
      var u = po(e);
      return u ? da(u) === u : !1;
    }
    function xc(e) {
      if (da(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function _c(e) {
      var t = e.alternate;
      if (!t) {
        var a = da(e);
        if (a === null)
          throw new Error("Unable to find node on an unmounted component.");
        return a !== e ? null : e;
      }
      for (var i = e, u = t; ; ) {
        var s = i.return;
        if (s === null)
          break;
        var f = s.alternate;
        if (f === null) {
          var p = s.return;
          if (p !== null) {
            i = u = p;
            continue;
          }
          break;
        }
        if (s.child === f.child) {
          for (var v = s.child; v; ) {
            if (v === i)
              return xc(s), e;
            if (v === u)
              return xc(s), t;
            v = v.sibling;
          }
          throw new Error("Unable to find node on an unmounted component.");
        }
        if (i.return !== u.return)
          i = s, u = f;
        else {
          for (var y = !1, g = s.child; g; ) {
            if (g === i) {
              y = !0, i = s, u = f;
              break;
            }
            if (g === u) {
              y = !0, u = s, i = f;
              break;
            }
            g = g.sibling;
          }
          if (!y) {
            for (g = f.child; g; ) {
              if (g === i) {
                y = !0, i = f, u = s;
                break;
              }
              if (g === u) {
                y = !0, u = f, i = s;
                break;
              }
              g = g.sibling;
            }
            if (!y)
              throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (i.alternate !== u)
          throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (i.tag !== ee)
        throw new Error("Unable to find node on an unmounted component.");
      return i.stateNode.current === i ? e : t;
    }
    function qr(e) {
      var t = _c(e);
      return t !== null ? Kr(t) : null;
    }
    function Kr(e) {
      if (e.tag === se || e.tag === Qe)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = Kr(t);
        if (a !== null)
          return a;
        t = t.sibling;
      }
      return null;
    }
    function fn(e) {
      var t = _c(e);
      return t !== null ? La(t) : null;
    }
    function La(e) {
      if (e.tag === se || e.tag === Qe)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== Ce) {
          var a = La(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var hd = F.unstable_scheduleCallback, Mv = F.unstable_cancelCallback, md = F.unstable_shouldYield, yd = F.unstable_requestPaint, Yn = F.unstable_now, kc = F.unstable_getCurrentPriorityLevel, ss = F.unstable_ImmediatePriority, Ol = F.unstable_UserBlockingPriority, Gi = F.unstable_NormalPriority, sy = F.unstable_LowPriority, mu = F.unstable_IdlePriority, Dc = F.unstable_yieldValue, Nv = F.unstable_setDisableYieldValue, yu = null, Tn = null, ie = null, pa = !1, Xr = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ != "undefined";
    function mo(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ == "undefined")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return S("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        Pe && (e = et({}, e, {
          getLaneLabelMap: gu,
          injectProfilingHooks: Ma
        })), yu = t.inject(e), Tn = t;
      } catch (a) {
        S("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function gd(e, t) {
      if (Tn && typeof Tn.onScheduleFiberRoot == "function")
        try {
          Tn.onScheduleFiberRoot(yu, e, t);
        } catch (a) {
          pa || (pa = !0, S("React instrumentation encountered an error: %s", a));
        }
    }
    function Sd(e, t) {
      if (Tn && typeof Tn.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & xe) === xe;
          if (Fe) {
            var i;
            switch (t) {
              case Lr:
                i = ss;
                break;
              case xi:
                i = Ol;
                break;
              case Na:
                i = Gi;
                break;
              case za:
                i = mu;
                break;
              default:
                i = Gi;
                break;
            }
            Tn.onCommitFiberRoot(yu, e, i, a);
          }
        } catch (u) {
          pa || (pa = !0, S("React instrumentation encountered an error: %s", u));
        }
    }
    function Ed(e) {
      if (Tn && typeof Tn.onPostCommitFiberRoot == "function")
        try {
          Tn.onPostCommitFiberRoot(yu, e);
        } catch (t) {
          pa || (pa = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function Cd(e) {
      if (Tn && typeof Tn.onCommitFiberUnmount == "function")
        try {
          Tn.onCommitFiberUnmount(yu, e);
        } catch (t) {
          pa || (pa = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function mn(e) {
      if (typeof Dc == "function" && (Nv(e), qe(e)), Tn && typeof Tn.setStrictMode == "function")
        try {
          Tn.setStrictMode(yu, e);
        } catch (t) {
          pa || (pa = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function Ma(e) {
      ie = e;
    }
    function gu() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < Cu; a++) {
          var i = Fv(t);
          e.set(t, i), t *= 2;
        }
        return e;
      }
    }
    function Rd(e) {
      ie !== null && typeof ie.markCommitStarted == "function" && ie.markCommitStarted(e);
    }
    function Td() {
      ie !== null && typeof ie.markCommitStopped == "function" && ie.markCommitStopped();
    }
    function va(e) {
      ie !== null && typeof ie.markComponentRenderStarted == "function" && ie.markComponentRenderStarted(e);
    }
    function ha() {
      ie !== null && typeof ie.markComponentRenderStopped == "function" && ie.markComponentRenderStopped();
    }
    function wd(e) {
      ie !== null && typeof ie.markComponentPassiveEffectMountStarted == "function" && ie.markComponentPassiveEffectMountStarted(e);
    }
    function zv() {
      ie !== null && typeof ie.markComponentPassiveEffectMountStopped == "function" && ie.markComponentPassiveEffectMountStopped();
    }
    function qi(e) {
      ie !== null && typeof ie.markComponentPassiveEffectUnmountStarted == "function" && ie.markComponentPassiveEffectUnmountStarted(e);
    }
    function Ll() {
      ie !== null && typeof ie.markComponentPassiveEffectUnmountStopped == "function" && ie.markComponentPassiveEffectUnmountStopped();
    }
    function Oc(e) {
      ie !== null && typeof ie.markComponentLayoutEffectMountStarted == "function" && ie.markComponentLayoutEffectMountStarted(e);
    }
    function Uv() {
      ie !== null && typeof ie.markComponentLayoutEffectMountStopped == "function" && ie.markComponentLayoutEffectMountStopped();
    }
    function cs(e) {
      ie !== null && typeof ie.markComponentLayoutEffectUnmountStarted == "function" && ie.markComponentLayoutEffectUnmountStarted(e);
    }
    function bd() {
      ie !== null && typeof ie.markComponentLayoutEffectUnmountStopped == "function" && ie.markComponentLayoutEffectUnmountStopped();
    }
    function fs(e, t, a) {
      ie !== null && typeof ie.markComponentErrored == "function" && ie.markComponentErrored(e, t, a);
    }
    function bi(e, t, a) {
      ie !== null && typeof ie.markComponentSuspended == "function" && ie.markComponentSuspended(e, t, a);
    }
    function ds(e) {
      ie !== null && typeof ie.markLayoutEffectsStarted == "function" && ie.markLayoutEffectsStarted(e);
    }
    function ps() {
      ie !== null && typeof ie.markLayoutEffectsStopped == "function" && ie.markLayoutEffectsStopped();
    }
    function Su(e) {
      ie !== null && typeof ie.markPassiveEffectsStarted == "function" && ie.markPassiveEffectsStarted(e);
    }
    function xd() {
      ie !== null && typeof ie.markPassiveEffectsStopped == "function" && ie.markPassiveEffectsStopped();
    }
    function Eu(e) {
      ie !== null && typeof ie.markRenderStarted == "function" && ie.markRenderStarted(e);
    }
    function Av() {
      ie !== null && typeof ie.markRenderYielded == "function" && ie.markRenderYielded();
    }
    function Lc() {
      ie !== null && typeof ie.markRenderStopped == "function" && ie.markRenderStopped();
    }
    function yn(e) {
      ie !== null && typeof ie.markRenderScheduled == "function" && ie.markRenderScheduled(e);
    }
    function Mc(e, t) {
      ie !== null && typeof ie.markForceUpdateScheduled == "function" && ie.markForceUpdateScheduled(e, t);
    }
    function vs(e, t) {
      ie !== null && typeof ie.markStateUpdateScheduled == "function" && ie.markStateUpdateScheduled(e, t);
    }
    var De = (
      /*                         */
      0
    ), ot = (
      /*                 */
      1
    ), Lt = (
      /*                    */
      2
    ), Wt = (
      /*               */
      8
    ), Mt = (
      /*              */
      16
    ), zn = Math.clz32 ? Math.clz32 : hs, Xn = Math.log, Nc = Math.LN2;
    function hs(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (Xn(t) / Nc | 0) | 0;
    }
    var Cu = 31, I = (
      /*                        */
      0
    ), kt = (
      /*                          */
      0
    ), je = (
      /*                        */
      1
    ), Ml = (
      /*    */
      2
    ), ni = (
      /*             */
      4
    ), Rr = (
      /*            */
      8
    ), wn = (
      /*                     */
      16
    ), Ki = (
      /*                */
      32
    ), Nl = (
      /*                       */
      4194240
    ), Ru = (
      /*                        */
      64
    ), zc = (
      /*                        */
      128
    ), Uc = (
      /*                        */
      256
    ), Ac = (
      /*                        */
      512
    ), Fc = (
      /*                        */
      1024
    ), jc = (
      /*                        */
      2048
    ), Hc = (
      /*                        */
      4096
    ), Pc = (
      /*                        */
      8192
    ), Vc = (
      /*                        */
      16384
    ), Tu = (
      /*                       */
      32768
    ), Bc = (
      /*                       */
      65536
    ), yo = (
      /*                       */
      131072
    ), go = (
      /*                       */
      262144
    ), $c = (
      /*                       */
      524288
    ), ms = (
      /*                       */
      1048576
    ), Ic = (
      /*                       */
      2097152
    ), ys = (
      /*                            */
      130023424
    ), wu = (
      /*                             */
      4194304
    ), Yc = (
      /*                             */
      8388608
    ), gs = (
      /*                             */
      16777216
    ), Qc = (
      /*                             */
      33554432
    ), Wc = (
      /*                             */
      67108864
    ), _d = wu, Ss = (
      /*          */
      134217728
    ), kd = (
      /*                          */
      268435455
    ), Es = (
      /*               */
      268435456
    ), bu = (
      /*                        */
      536870912
    ), Jr = (
      /*                   */
      1073741824
    );
    function Fv(e) {
      {
        if (e & je)
          return "Sync";
        if (e & Ml)
          return "InputContinuousHydration";
        if (e & ni)
          return "InputContinuous";
        if (e & Rr)
          return "DefaultHydration";
        if (e & wn)
          return "Default";
        if (e & Ki)
          return "TransitionHydration";
        if (e & Nl)
          return "Transition";
        if (e & ys)
          return "Retry";
        if (e & Ss)
          return "SelectiveHydration";
        if (e & Es)
          return "IdleHydration";
        if (e & bu)
          return "Idle";
        if (e & Jr)
          return "Offscreen";
      }
    }
    var Kt = -1, xu = Ru, Gc = wu;
    function Cs(e) {
      switch (zl(e)) {
        case je:
          return je;
        case Ml:
          return Ml;
        case ni:
          return ni;
        case Rr:
          return Rr;
        case wn:
          return wn;
        case Ki:
          return Ki;
        case Ru:
        case zc:
        case Uc:
        case Ac:
        case Fc:
        case jc:
        case Hc:
        case Pc:
        case Vc:
        case Tu:
        case Bc:
        case yo:
        case go:
        case $c:
        case ms:
        case Ic:
          return e & Nl;
        case wu:
        case Yc:
        case gs:
        case Qc:
        case Wc:
          return e & ys;
        case Ss:
          return Ss;
        case Es:
          return Es;
        case bu:
          return bu;
        case Jr:
          return Jr;
        default:
          return S("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function qc(e, t) {
      var a = e.pendingLanes;
      if (a === I)
        return I;
      var i = I, u = e.suspendedLanes, s = e.pingedLanes, f = a & kd;
      if (f !== I) {
        var p = f & ~u;
        if (p !== I)
          i = Cs(p);
        else {
          var v = f & s;
          v !== I && (i = Cs(v));
        }
      } else {
        var y = a & ~u;
        y !== I ? i = Cs(y) : s !== I && (i = Cs(s));
      }
      if (i === I)
        return I;
      if (t !== I && t !== i && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & u) === I) {
        var g = zl(i), x = zl(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          g >= x || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          g === wn && (x & Nl) !== I
        )
          return t;
      }
      (i & ni) !== I && (i |= a & wn);
      var w = e.entangledLanes;
      if (w !== I)
        for (var N = e.entanglements, A = i & w; A > 0; ) {
          var H = Un(A), le = 1 << H;
          i |= N[H], A &= ~le;
        }
      return i;
    }
    function ri(e, t) {
      for (var a = e.eventTimes, i = Kt; t > 0; ) {
        var u = Un(t), s = 1 << u, f = a[u];
        f > i && (i = f), t &= ~s;
      }
      return i;
    }
    function Dd(e, t) {
      switch (e) {
        case je:
        case Ml:
        case ni:
          return t + 250;
        case Rr:
        case wn:
        case Ki:
        case Ru:
        case zc:
        case Uc:
        case Ac:
        case Fc:
        case jc:
        case Hc:
        case Pc:
        case Vc:
        case Tu:
        case Bc:
        case yo:
        case go:
        case $c:
        case ms:
        case Ic:
          return t + 5e3;
        case wu:
        case Yc:
        case gs:
        case Qc:
        case Wc:
          return Kt;
        case Ss:
        case Es:
        case bu:
        case Jr:
          return Kt;
        default:
          return S("Should have found matching lanes. This is a bug in React."), Kt;
      }
    }
    function Kc(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, u = e.pingedLanes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = Un(f), v = 1 << p, y = s[p];
        y === Kt ? ((v & i) === I || (v & u) !== I) && (s[p] = Dd(v, t)) : y <= t && (e.expiredLanes |= v), f &= ~v;
      }
    }
    function jv(e) {
      return Cs(e.pendingLanes);
    }
    function Xc(e) {
      var t = e.pendingLanes & ~Jr;
      return t !== I ? t : t & Jr ? Jr : I;
    }
    function Hv(e) {
      return (e & je) !== I;
    }
    function Rs(e) {
      return (e & kd) !== I;
    }
    function _u(e) {
      return (e & ys) === e;
    }
    function Od(e) {
      var t = je | ni | wn;
      return (e & t) === I;
    }
    function Ld(e) {
      return (e & Nl) === e;
    }
    function Jc(e, t) {
      var a = Ml | ni | Rr | wn;
      return (t & a) !== I;
    }
    function Pv(e, t) {
      return (t & e.expiredLanes) !== I;
    }
    function Md(e) {
      return (e & Nl) !== I;
    }
    function Nd() {
      var e = xu;
      return xu <<= 1, (xu & Nl) === I && (xu = Ru), e;
    }
    function Vv() {
      var e = Gc;
      return Gc <<= 1, (Gc & ys) === I && (Gc = wu), e;
    }
    function zl(e) {
      return e & -e;
    }
    function Ts(e) {
      return zl(e);
    }
    function Un(e) {
      return 31 - zn(e);
    }
    function ur(e) {
      return Un(e);
    }
    function Zr(e, t) {
      return (e & t) !== I;
    }
    function ku(e, t) {
      return (e & t) === t;
    }
    function Je(e, t) {
      return e | t;
    }
    function ws(e, t) {
      return e & ~t;
    }
    function zd(e, t) {
      return e & t;
    }
    function Bv(e) {
      return e;
    }
    function $v(e, t) {
      return e !== kt && e < t ? e : t;
    }
    function bs(e) {
      for (var t = [], a = 0; a < Cu; a++)
        t.push(e);
      return t;
    }
    function So(e, t, a) {
      e.pendingLanes |= t, t !== bu && (e.suspendedLanes = I, e.pingedLanes = I);
      var i = e.eventTimes, u = ur(t);
      i[u] = a;
    }
    function Iv(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, i = t; i > 0; ) {
        var u = Un(i), s = 1 << u;
        a[u] = Kt, i &= ~s;
      }
    }
    function Zc(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function Ud(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = I, e.pingedLanes = I, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, u = e.eventTimes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = Un(f), v = 1 << p;
        i[p] = I, u[p] = Kt, s[p] = Kt, f &= ~v;
      }
    }
    function ef(e, t) {
      for (var a = e.entangledLanes |= t, i = e.entanglements, u = a; u; ) {
        var s = Un(u), f = 1 << s;
        // Is this one of the newly entangled lanes?
        f & t | // Is this lane transitively entangled with the newly entangled lanes?
        i[s] & t && (i[s] |= t), u &= ~f;
      }
    }
    function Ad(e, t) {
      var a = zl(t), i;
      switch (a) {
        case ni:
          i = Ml;
          break;
        case wn:
          i = Rr;
          break;
        case Ru:
        case zc:
        case Uc:
        case Ac:
        case Fc:
        case jc:
        case Hc:
        case Pc:
        case Vc:
        case Tu:
        case Bc:
        case yo:
        case go:
        case $c:
        case ms:
        case Ic:
        case wu:
        case Yc:
        case gs:
        case Qc:
        case Wc:
          i = Ki;
          break;
        case bu:
          i = Es;
          break;
        default:
          i = kt;
          break;
      }
      return (i & (e.suspendedLanes | t)) !== kt ? kt : i;
    }
    function xs(e, t, a) {
      if (Xr)
        for (var i = e.pendingUpdatersLaneMap; a > 0; ) {
          var u = ur(a), s = 1 << u, f = i[u];
          f.add(t), a &= ~s;
        }
    }
    function Yv(e, t) {
      if (Xr)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; t > 0; ) {
          var u = ur(t), s = 1 << u, f = a[u];
          f.size > 0 && (f.forEach(function(p) {
            var v = p.alternate;
            (v === null || !i.has(v)) && i.add(p);
          }), f.clear()), t &= ~s;
        }
    }
    function Fd(e, t) {
      return null;
    }
    var Lr = je, xi = ni, Na = wn, za = bu, _s = kt;
    function Ua() {
      return _s;
    }
    function An(e) {
      _s = e;
    }
    function Qv(e, t) {
      var a = _s;
      try {
        return _s = e, t();
      } finally {
        _s = a;
      }
    }
    function Wv(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function ks(e, t) {
      return e > t ? e : t;
    }
    function Jn(e, t) {
      return e !== 0 && e < t;
    }
    function Gv(e) {
      var t = zl(e);
      return Jn(Lr, t) ? Jn(xi, t) ? Rs(t) ? Na : za : xi : Lr;
    }
    function tf(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var Ds;
    function Tr(e) {
      Ds = e;
    }
    function cy(e) {
      Ds(e);
    }
    var ve;
    function Eo(e) {
      ve = e;
    }
    var nf;
    function qv(e) {
      nf = e;
    }
    var Kv;
    function Os(e) {
      Kv = e;
    }
    var Ls;
    function jd(e) {
      Ls = e;
    }
    var rf = !1, Ms = [], Xi = null, _i = null, ki = null, bn = /* @__PURE__ */ new Map(), Mr = /* @__PURE__ */ new Map(), Nr = [], Xv = [
      "mousedown",
      "mouseup",
      "touchcancel",
      "touchend",
      "touchstart",
      "auxclick",
      "dblclick",
      "pointercancel",
      "pointerdown",
      "pointerup",
      "dragend",
      "dragstart",
      "drop",
      "compositionend",
      "compositionstart",
      "keydown",
      "keypress",
      "keyup",
      "input",
      "textInput",
      // Intentionally camelCase
      "copy",
      "cut",
      "paste",
      "click",
      "change",
      "contextmenu",
      "reset",
      "submit"
    ];
    function Jv(e) {
      return Xv.indexOf(e) > -1;
    }
    function ai(e, t, a, i, u) {
      return {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: a,
        nativeEvent: u,
        targetContainers: [i]
      };
    }
    function Hd(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          Xi = null;
          break;
        case "dragenter":
        case "dragleave":
          _i = null;
          break;
        case "mouseover":
        case "mouseout":
          ki = null;
          break;
        case "pointerover":
        case "pointerout": {
          var a = t.pointerId;
          bn.delete(a);
          break;
        }
        case "gotpointercapture":
        case "lostpointercapture": {
          var i = t.pointerId;
          Mr.delete(i);
          break;
        }
      }
    }
    function ea(e, t, a, i, u, s) {
      if (e === null || e.nativeEvent !== s) {
        var f = ai(t, a, i, u, s);
        if (t !== null) {
          var p = Do(t);
          p !== null && ve(p);
        }
        return f;
      }
      e.eventSystemFlags |= i;
      var v = e.targetContainers;
      return u !== null && v.indexOf(u) === -1 && v.push(u), e;
    }
    function fy(e, t, a, i, u) {
      switch (t) {
        case "focusin": {
          var s = u;
          return Xi = ea(Xi, e, t, a, i, s), !0;
        }
        case "dragenter": {
          var f = u;
          return _i = ea(_i, e, t, a, i, f), !0;
        }
        case "mouseover": {
          var p = u;
          return ki = ea(ki, e, t, a, i, p), !0;
        }
        case "pointerover": {
          var v = u, y = v.pointerId;
          return bn.set(y, ea(bn.get(y) || null, e, t, a, i, v)), !0;
        }
        case "gotpointercapture": {
          var g = u, x = g.pointerId;
          return Mr.set(x, ea(Mr.get(x) || null, e, t, a, i, g)), !0;
        }
      }
      return !1;
    }
    function Pd(e) {
      var t = Is(e.target);
      if (t !== null) {
        var a = da(t);
        if (a !== null) {
          var i = a.tag;
          if (i === _e) {
            var u = Ti(a);
            if (u !== null) {
              e.blockedOn = u, Ls(e.priority, function() {
                nf(a);
              });
              return;
            }
          } else if (i === ee) {
            var s = a.stateNode;
            if (tf(s)) {
              e.blockedOn = wi(a);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function Zv(e) {
      for (var t = Kv(), a = {
        blockedOn: null,
        target: e,
        priority: t
      }, i = 0; i < Nr.length && Jn(t, Nr[i].priority); i++)
        ;
      Nr.splice(i, 0, a), i === 0 && Pd(a);
    }
    function Ns(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], i = Ro(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (i === null) {
          var u = e.nativeEvent, s = new u.constructor(u.type, u);
          iy(s), u.target.dispatchEvent(s), ly();
        } else {
          var f = Do(i);
          return f !== null && ve(f), e.blockedOn = i, !1;
        }
        t.shift();
      }
      return !0;
    }
    function Vd(e, t, a) {
      Ns(e) && a.delete(t);
    }
    function dy() {
      rf = !1, Xi !== null && Ns(Xi) && (Xi = null), _i !== null && Ns(_i) && (_i = null), ki !== null && Ns(ki) && (ki = null), bn.forEach(Vd), Mr.forEach(Vd);
    }
    function Ul(e, t) {
      e.blockedOn === t && (e.blockedOn = null, rf || (rf = !0, F.unstable_scheduleCallback(F.unstable_NormalPriority, dy)));
    }
    function Du(e) {
      if (Ms.length > 0) {
        Ul(Ms[0], e);
        for (var t = 1; t < Ms.length; t++) {
          var a = Ms[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      Xi !== null && Ul(Xi, e), _i !== null && Ul(_i, e), ki !== null && Ul(ki, e);
      var i = function(p) {
        return Ul(p, e);
      };
      bn.forEach(i), Mr.forEach(i);
      for (var u = 0; u < Nr.length; u++) {
        var s = Nr[u];
        s.blockedOn === e && (s.blockedOn = null);
      }
      for (; Nr.length > 0; ) {
        var f = Nr[0];
        if (f.blockedOn !== null)
          break;
        Pd(f), f.blockedOn === null && Nr.shift();
      }
    }
    var or = _.ReactCurrentBatchConfig, Ct = !0;
    function Qn(e) {
      Ct = !!e;
    }
    function Fn() {
      return Ct;
    }
    function sr(e, t, a) {
      var i = af(t), u;
      switch (i) {
        case Lr:
          u = ma;
          break;
        case xi:
          u = Co;
          break;
        case Na:
        default:
          u = xn;
          break;
      }
      return u.bind(null, t, a, e);
    }
    function ma(e, t, a, i) {
      var u = Ua(), s = or.transition;
      or.transition = null;
      try {
        An(Lr), xn(e, t, a, i);
      } finally {
        An(u), or.transition = s;
      }
    }
    function Co(e, t, a, i) {
      var u = Ua(), s = or.transition;
      or.transition = null;
      try {
        An(xi), xn(e, t, a, i);
      } finally {
        An(u), or.transition = s;
      }
    }
    function xn(e, t, a, i) {
      Ct && zs(e, t, a, i);
    }
    function zs(e, t, a, i) {
      var u = Ro(e, t, a, i);
      if (u === null) {
        Dy(e, t, i, Di, a), Hd(e, i);
        return;
      }
      if (fy(u, e, t, a, i)) {
        i.stopPropagation();
        return;
      }
      if (Hd(e, i), t & _a && Jv(e)) {
        for (; u !== null; ) {
          var s = Do(u);
          s !== null && cy(s);
          var f = Ro(e, t, a, i);
          if (f === null && Dy(e, t, i, Di, a), f === u)
            break;
          u = f;
        }
        u !== null && i.stopPropagation();
        return;
      }
      Dy(e, t, i, null, a);
    }
    var Di = null;
    function Ro(e, t, a, i) {
      Di = null;
      var u = pd(i), s = Is(u);
      if (s !== null) {
        var f = da(s);
        if (f === null)
          s = null;
        else {
          var p = f.tag;
          if (p === _e) {
            var v = Ti(f);
            if (v !== null)
              return v;
            s = null;
          } else if (p === ee) {
            var y = f.stateNode;
            if (tf(y))
              return wi(f);
            s = null;
          } else f !== s && (s = null);
        }
      }
      return Di = s, null;
    }
    function af(e) {
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
          return Lr;
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
          return xi;
        case "message": {
          var t = kc();
          switch (t) {
            case ss:
              return Lr;
            case Ol:
              return xi;
            case Gi:
            case sy:
              return Na;
            case mu:
              return za;
            default:
              return Na;
          }
        }
        default:
          return Na;
      }
    }
    function Us(e, t, a) {
      return e.addEventListener(t, a, !1), a;
    }
    function ta(e, t, a) {
      return e.addEventListener(t, a, !0), a;
    }
    function Bd(e, t, a, i) {
      return e.addEventListener(t, a, {
        capture: !0,
        passive: i
      }), a;
    }
    function To(e, t, a, i) {
      return e.addEventListener(t, a, {
        passive: i
      }), a;
    }
    var ya = null, wo = null, Ou = null;
    function Al(e) {
      return ya = e, wo = As(), !0;
    }
    function lf() {
      ya = null, wo = null, Ou = null;
    }
    function Ji() {
      if (Ou)
        return Ou;
      var e, t = wo, a = t.length, i, u = As(), s = u.length;
      for (e = 0; e < a && t[e] === u[e]; e++)
        ;
      var f = a - e;
      for (i = 1; i <= f && t[a - i] === u[s - i]; i++)
        ;
      var p = i > 1 ? 1 - i : void 0;
      return Ou = u.slice(e, p), Ou;
    }
    function As() {
      return "value" in ya ? ya.value : ya.textContent;
    }
    function Fl(e) {
      var t, a = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function bo() {
      return !0;
    }
    function Fs() {
      return !1;
    }
    function wr(e) {
      function t(a, i, u, s, f) {
        this._reactName = a, this._targetInst = u, this.type = i, this.nativeEvent = s, this.target = f, this.currentTarget = null;
        for (var p in e)
          if (e.hasOwnProperty(p)) {
            var v = e[p];
            v ? this[p] = v(s) : this[p] = s[p];
          }
        var y = s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1;
        return y ? this.isDefaultPrevented = bo : this.isDefaultPrevented = Fs, this.isPropagationStopped = Fs, this;
      }
      return et(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = bo);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = bo);
        },
        /**
         * We release all dispatched `SyntheticEvent`s after each event loop, adding
         * them back into the pool. This allows a way to hold onto a reference that
         * won't be added back into the pool.
         */
        persist: function() {
        },
        /**
         * Checks if this event should be released back into the pool.
         *
         * @return {boolean} True if this should not be released, false otherwise.
         */
        isPersistent: bo
      }), t;
    }
    var jn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, Oi = wr(jn), zr = et({}, jn, {
      view: 0,
      detail: 0
    }), na = wr(zr), uf, js, Lu;
    function py(e) {
      e !== Lu && (Lu && e.type === "mousemove" ? (uf = e.screenX - Lu.screenX, js = e.screenY - Lu.screenY) : (uf = 0, js = 0), Lu = e);
    }
    var ii = et({}, zr, {
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
      getModifierState: dn,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (py(e), uf);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : js;
      }
    }), $d = wr(ii), Id = et({}, ii, {
      dataTransfer: 0
    }), Mu = wr(Id), Yd = et({}, zr, {
      relatedTarget: 0
    }), Zi = wr(Yd), eh = et({}, jn, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), th = wr(eh), Qd = et({}, jn, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), of = wr(Qd), vy = et({}, jn, {
      data: 0
    }), nh = wr(vy), rh = nh, ah = {
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
    }, Nu = {
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
    };
    function hy(e) {
      if (e.key) {
        var t = ah[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var a = Fl(e);
        return a === 13 ? "Enter" : String.fromCharCode(a);
      }
      return e.type === "keydown" || e.type === "keyup" ? Nu[e.keyCode] || "Unidentified" : "";
    }
    var xo = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function ih(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var i = xo[e];
      return i ? !!a[i] : !1;
    }
    function dn(e) {
      return ih;
    }
    var my = et({}, zr, {
      key: hy,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: dn,
      // Legacy Interface
      charCode: function(e) {
        return e.type === "keypress" ? Fl(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? Fl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), lh = wr(my), yy = et({}, ii, {
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
    }), uh = wr(yy), oh = et({}, zr, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: dn
    }), sh = wr(oh), gy = et({}, jn, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Aa = wr(gy), Wd = et({}, ii, {
      deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : (
          // Fallback to `wheelDeltaX` for Webkit and normalize (right is positive).
          "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        );
      },
      deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : (
          // Fallback to `wheelDeltaY` for Webkit and normalize (down is positive).
          "wheelDeltaY" in e ? -e.wheelDeltaY : (
            // Fallback to `wheelDelta` for IE<9 and normalize (down is positive).
            "wheelDelta" in e ? -e.wheelDelta : 0
          )
        );
      },
      deltaZ: 0,
      // Browsers without "deltaMode" is reporting in raw wheel delta where one
      // notch on the scroll is always +/- 120, roughly equivalent to pixels.
      // A good approximation of DOM_DELTA_LINE (1) is 5% of viewport size or
      // ~40 pixels, for DOM_DELTA_SCREEN (2) it is 87.5% of viewport size.
      deltaMode: 0
    }), Sy = wr(Wd), jl = [9, 13, 27, 32], Hs = 229, el = Dn && "CompositionEvent" in window, Hl = null;
    Dn && "documentMode" in document && (Hl = document.documentMode);
    var Gd = Dn && "TextEvent" in window && !Hl, sf = Dn && (!el || Hl && Hl > 8 && Hl <= 11), ch = 32, cf = String.fromCharCode(ch);
    function Ey() {
      lt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), lt("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), lt("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), lt("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var qd = !1;
    function fh(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function ff(e) {
      switch (e) {
        case "compositionstart":
          return "onCompositionStart";
        case "compositionend":
          return "onCompositionEnd";
        case "compositionupdate":
          return "onCompositionUpdate";
      }
    }
    function df(e, t) {
      return e === "keydown" && t.keyCode === Hs;
    }
    function Kd(e, t) {
      switch (e) {
        case "keyup":
          return jl.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== Hs;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function pf(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function dh(e) {
      return e.locale === "ko";
    }
    var zu = !1;
    function Xd(e, t, a, i, u) {
      var s, f;
      if (el ? s = ff(t) : zu ? Kd(t, i) && (s = "onCompositionEnd") : df(t, i) && (s = "onCompositionStart"), !s)
        return null;
      sf && !dh(i) && (!zu && s === "onCompositionStart" ? zu = Al(u) : s === "onCompositionEnd" && zu && (f = Ji()));
      var p = Sh(a, s);
      if (p.length > 0) {
        var v = new nh(s, t, null, i, u);
        if (e.push({
          event: v,
          listeners: p
        }), f)
          v.data = f;
        else {
          var y = pf(i);
          y !== null && (v.data = y);
        }
      }
    }
    function vf(e, t) {
      switch (e) {
        case "compositionend":
          return pf(t);
        case "keypress":
          var a = t.which;
          return a !== ch ? null : (qd = !0, cf);
        case "textInput":
          var i = t.data;
          return i === cf && qd ? null : i;
        default:
          return null;
      }
    }
    function Jd(e, t) {
      if (zu) {
        if (e === "compositionend" || !el && Kd(e, t)) {
          var a = Ji();
          return lf(), zu = !1, a;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!fh(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return sf && !dh(t) ? null : t.data;
        default:
          return null;
      }
    }
    function hf(e, t, a, i, u) {
      var s;
      if (Gd ? s = vf(t, i) : s = Jd(t, i), !s)
        return null;
      var f = Sh(a, "onBeforeInput");
      if (f.length > 0) {
        var p = new rh("onBeforeInput", "beforeinput", null, i, u);
        e.push({
          event: p,
          listeners: f
        }), p.data = s;
      }
    }
    function ph(e, t, a, i, u, s, f) {
      Xd(e, t, a, i, u), hf(e, t, a, i, u);
    }
    var Cy = {
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
    function Ps(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!Cy[e.type] : t === "textarea";
    }
    /**
     * Checks if an event is supported in the current execution environment.
     *
     * NOTE: This will not work correctly for non-generic events such as `change`,
     * `reset`, `load`, `error`, and `select`.
     *
     * Borrows from Modernizr.
     *
     * @param {string} eventNameSuffix Event name, e.g. "click".
     * @return {boolean} True if the event is supported.
     * @internal
     * @license Modernizr 3.0.0pre (Custom Build) | MIT
     */
    function Ry(e) {
      if (!Dn)
        return !1;
      var t = "on" + e, a = t in document;
      if (!a) {
        var i = document.createElement("div");
        i.setAttribute(t, "return;"), a = typeof i[t] == "function";
      }
      return a;
    }
    function Vs() {
      lt("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function vh(e, t, a, i) {
      oo(i);
      var u = Sh(t, "onChange");
      if (u.length > 0) {
        var s = new Oi("onChange", "change", null, a, i);
        e.push({
          event: s,
          listeners: u
        });
      }
    }
    var Pl = null, n = null;
    function r(e) {
      var t = e.nodeName && e.nodeName.toLowerCase();
      return t === "select" || t === "input" && e.type === "file";
    }
    function l(e) {
      var t = [];
      vh(t, n, e, pd(e)), xv(o, t);
    }
    function o(e) {
      OE(e, 0);
    }
    function c(e) {
      var t = Cf(e);
      if (yi(t))
        return e;
    }
    function d(e, t) {
      if (e === "change")
        return t;
    }
    var m = !1;
    Dn && (m = Ry("input") && (!document.documentMode || document.documentMode > 9));
    function E(e, t) {
      Pl = e, n = t, Pl.attachEvent("onpropertychange", U);
    }
    function T() {
      Pl && (Pl.detachEvent("onpropertychange", U), Pl = null, n = null);
    }
    function U(e) {
      e.propertyName === "value" && c(n) && l(e);
    }
    function W(e, t, a) {
      e === "focusin" ? (T(), E(t, a)) : e === "focusout" && T();
    }
    function q(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return c(n);
    }
    function Y(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function fe(e, t) {
      if (e === "click")
        return c(t);
    }
    function me(e, t) {
      if (e === "input" || e === "change")
        return c(t);
    }
    function Se(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || Me(e, "number", e.value);
    }
    function _n(e, t, a, i, u, s, f) {
      var p = a ? Cf(a) : window, v, y;
      if (r(p) ? v = d : Ps(p) ? m ? v = me : (v = q, y = W) : Y(p) && (v = fe), v) {
        var g = v(t, a);
        if (g) {
          vh(e, g, i, u);
          return;
        }
      }
      y && y(t, p, a), t === "focusout" && Se(p);
    }
    function D() {
      Vt("onMouseEnter", ["mouseout", "mouseover"]), Vt("onMouseLeave", ["mouseout", "mouseover"]), Vt("onPointerEnter", ["pointerout", "pointerover"]), Vt("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function b(e, t, a, i, u, s, f) {
      var p = t === "mouseover" || t === "pointerover", v = t === "mouseout" || t === "pointerout";
      if (p && !rs(i)) {
        var y = i.relatedTarget || i.fromElement;
        if (y && (Is(y) || dp(y)))
          return;
      }
      if (!(!v && !p)) {
        var g;
        if (u.window === u)
          g = u;
        else {
          var x = u.ownerDocument;
          x ? g = x.defaultView || x.parentWindow : g = window;
        }
        var w, N;
        if (v) {
          var A = i.relatedTarget || i.toElement;
          if (w = a, N = A ? Is(A) : null, N !== null) {
            var H = da(N);
            (N !== H || N.tag !== se && N.tag !== Qe) && (N = null);
          }
        } else
          w = null, N = a;
        if (w !== N) {
          var le = $d, Ne = "onMouseLeave", we = "onMouseEnter", Tt = "mouse";
          (t === "pointerout" || t === "pointerover") && (le = uh, Ne = "onPointerLeave", we = "onPointerEnter", Tt = "pointer");
          var yt = w == null ? g : Cf(w), O = N == null ? g : Cf(N), P = new le(Ne, Tt + "leave", w, i, u);
          P.target = yt, P.relatedTarget = O;
          var L = null, K = Is(u);
          if (K === a) {
            var pe = new le(we, Tt + "enter", N, i, u);
            pe.target = O, pe.relatedTarget = yt, L = pe;
          }
          AT(e, P, L, w, N);
        }
      }
    }
    function M(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var G = typeof Object.is == "function" ? Object.is : M;
    function ye(e, t) {
      if (G(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length)
        return !1;
      for (var u = 0; u < a.length; u++) {
        var s = a[u];
        if (!br.call(t, s) || !G(e[s], t[s]))
          return !1;
      }
      return !0;
    }
    function ze(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function Ae(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function Be(e, t) {
      for (var a = ze(e), i = 0, u = 0; a; ) {
        if (a.nodeType === $i) {
          if (u = i + a.textContent.length, i <= t && u >= t)
            return {
              node: a,
              offset: t - i
            };
          i = u;
        }
        a = ze(Ae(a));
      }
    }
    function Zn(e) {
      var t = e.ownerDocument, a = t && t.defaultView || window, i = a.getSelection && a.getSelection();
      if (!i || i.rangeCount === 0)
        return null;
      var u = i.anchorNode, s = i.anchorOffset, f = i.focusNode, p = i.focusOffset;
      try {
        u.nodeType, f.nodeType;
      } catch {
        return null;
      }
      return Nt(e, u, s, f, p);
    }
    function Nt(e, t, a, i, u) {
      var s = 0, f = -1, p = -1, v = 0, y = 0, g = e, x = null;
      e: for (; ; ) {
        for (var w = null; g === t && (a === 0 || g.nodeType === $i) && (f = s + a), g === i && (u === 0 || g.nodeType === $i) && (p = s + u), g.nodeType === $i && (s += g.nodeValue.length), (w = g.firstChild) !== null; )
          x = g, g = w;
        for (; ; ) {
          if (g === e)
            break e;
          if (x === t && ++v === a && (f = s), x === i && ++y === u && (p = s), (w = g.nextSibling) !== null)
            break;
          g = x, x = g.parentNode;
        }
        g = w;
      }
      return f === -1 || p === -1 ? null : {
        start: f,
        end: p
      };
    }
    function Vl(e, t) {
      var a = e.ownerDocument || document, i = a && a.defaultView || window;
      if (i.getSelection) {
        var u = i.getSelection(), s = e.textContent.length, f = Math.min(t.start, s), p = t.end === void 0 ? f : Math.min(t.end, s);
        if (!u.extend && f > p) {
          var v = p;
          p = f, f = v;
        }
        var y = Be(e, f), g = Be(e, p);
        if (y && g) {
          if (u.rangeCount === 1 && u.anchorNode === y.node && u.anchorOffset === y.offset && u.focusNode === g.node && u.focusOffset === g.offset)
            return;
          var x = a.createRange();
          x.setStart(y.node, y.offset), u.removeAllRanges(), f > p ? (u.addRange(x), u.extend(g.node, g.offset)) : (x.setEnd(g.node, g.offset), u.addRange(x));
        }
      }
    }
    function hh(e) {
      return e && e.nodeType === $i;
    }
    function SE(e, t) {
      return !e || !t ? !1 : e === t ? !0 : hh(e) ? !1 : hh(t) ? SE(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function gT(e) {
      return e && e.ownerDocument && SE(e.ownerDocument.documentElement, e);
    }
    function ST(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function EE() {
      for (var e = window, t = xa(); t instanceof e.HTMLIFrameElement; ) {
        if (ST(t))
          e = t.contentWindow;
        else
          return t;
        t = xa(e.document);
      }
      return t;
    }
    function Ty(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function ET() {
      var e = EE();
      return {
        focusedElem: e,
        selectionRange: Ty(e) ? RT(e) : null
      };
    }
    function CT(e) {
      var t = EE(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && gT(a)) {
        i !== null && Ty(a) && TT(a, i);
        for (var u = [], s = a; s = s.parentNode; )
          s.nodeType === Qr && u.push({
            element: s,
            left: s.scrollLeft,
            top: s.scrollTop
          });
        typeof a.focus == "function" && a.focus();
        for (var f = 0; f < u.length; f++) {
          var p = u[f];
          p.element.scrollLeft = p.left, p.element.scrollTop = p.top;
        }
      }
    }
    function RT(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = Zn(e), t || {
        start: 0,
        end: 0
      };
    }
    function TT(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : Vl(e, t);
    }
    var wT = Dn && "documentMode" in document && document.documentMode <= 11;
    function bT() {
      lt("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var mf = null, wy = null, Zd = null, by = !1;
    function xT(e) {
      if ("selectionStart" in e && Ty(e))
        return {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      var t = e.ownerDocument && e.ownerDocument.defaultView || window, a = t.getSelection();
      return {
        anchorNode: a.anchorNode,
        anchorOffset: a.anchorOffset,
        focusNode: a.focusNode,
        focusOffset: a.focusOffset
      };
    }
    function _T(e) {
      return e.window === e ? e.document : e.nodeType === Ii ? e : e.ownerDocument;
    }
    function CE(e, t, a) {
      var i = _T(a);
      if (!(by || mf == null || mf !== xa(i))) {
        var u = xT(mf);
        if (!Zd || !ye(Zd, u)) {
          Zd = u;
          var s = Sh(wy, "onSelect");
          if (s.length > 0) {
            var f = new Oi("onSelect", "select", null, t, a);
            e.push({
              event: f,
              listeners: s
            }), f.target = mf;
          }
        }
      }
    }
    function kT(e, t, a, i, u, s, f) {
      var p = a ? Cf(a) : window;
      switch (t) {
        case "focusin":
          (Ps(p) || p.contentEditable === "true") && (mf = p, wy = a, Zd = null);
          break;
        case "focusout":
          mf = null, wy = null, Zd = null;
          break;
        case "mousedown":
          by = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          by = !1, CE(e, i, u);
          break;
        case "selectionchange":
          if (wT)
            break;
        case "keydown":
        case "keyup":
          CE(e, i, u);
      }
    }
    function mh(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    var yf = {
      animationend: mh("Animation", "AnimationEnd"),
      animationiteration: mh("Animation", "AnimationIteration"),
      animationstart: mh("Animation", "AnimationStart"),
      transitionend: mh("Transition", "TransitionEnd")
    }, xy = {}, RE = {};
    Dn && (RE = document.createElement("div").style, "AnimationEvent" in window || (delete yf.animationend.animation, delete yf.animationiteration.animation, delete yf.animationstart.animation), "TransitionEvent" in window || delete yf.transitionend.transition);
    function yh(e) {
      if (xy[e])
        return xy[e];
      if (!yf[e])
        return e;
      var t = yf[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in RE)
          return xy[e] = t[a];
      return e;
    }
    var TE = yh("animationend"), wE = yh("animationiteration"), bE = yh("animationstart"), xE = yh("transitionend"), _E = /* @__PURE__ */ new Map(), kE = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function _o(e, t) {
      _E.set(e, t), lt(t, [e]);
    }
    function DT() {
      for (var e = 0; e < kE.length; e++) {
        var t = kE[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        _o(a, "on" + i);
      }
      _o(TE, "onAnimationEnd"), _o(wE, "onAnimationIteration"), _o(bE, "onAnimationStart"), _o("dblclick", "onDoubleClick"), _o("focusin", "onFocus"), _o("focusout", "onBlur"), _o(xE, "onTransitionEnd");
    }
    function OT(e, t, a, i, u, s, f) {
      var p = _E.get(t);
      if (p !== void 0) {
        var v = Oi, y = t;
        switch (t) {
          case "keypress":
            if (Fl(i) === 0)
              return;
          case "keydown":
          case "keyup":
            v = lh;
            break;
          case "focusin":
            y = "focus", v = Zi;
            break;
          case "focusout":
            y = "blur", v = Zi;
            break;
          case "beforeblur":
          case "afterblur":
            v = Zi;
            break;
          case "click":
            if (i.button === 2)
              return;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            v = $d;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = Mu;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = sh;
            break;
          case TE:
          case wE:
          case bE:
            v = th;
            break;
          case xE:
            v = Aa;
            break;
          case "scroll":
            v = na;
            break;
          case "wheel":
            v = Sy;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = of;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = uh;
            break;
        }
        var g = (s & _a) !== 0;
        {
          var x = !g && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", w = zT(a, p, i.type, g, x);
          if (w.length > 0) {
            var N = new v(p, y, null, i, u);
            e.push({
              event: N,
              listeners: w
            });
          }
        }
      }
    }
    DT(), D(), Vs(), bT(), Ey();
    function LT(e, t, a, i, u, s, f) {
      OT(e, t, a, i, u, s);
      var p = (s & dd) === 0;
      p && (b(e, t, a, i, u), _n(e, t, a, i, u), kT(e, t, a, i, u), ph(e, t, a, i, u));
    }
    var ep = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], _y = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(ep));
    function DE(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, Ei(i, t, void 0, e), e.currentTarget = null;
    }
    function MT(e, t, a) {
      var i;
      if (a)
        for (var u = t.length - 1; u >= 0; u--) {
          var s = t[u], f = s.instance, p = s.currentTarget, v = s.listener;
          if (f !== i && e.isPropagationStopped())
            return;
          DE(e, v, p), i = f;
        }
      else
        for (var y = 0; y < t.length; y++) {
          var g = t[y], x = g.instance, w = g.currentTarget, N = g.listener;
          if (x !== i && e.isPropagationStopped())
            return;
          DE(e, N, w), i = x;
        }
    }
    function OE(e, t) {
      for (var a = (t & _a) !== 0, i = 0; i < e.length; i++) {
        var u = e[i], s = u.event, f = u.listeners;
        MT(s, f, a);
      }
      ls();
    }
    function NT(e, t, a, i, u) {
      var s = pd(a), f = [];
      LT(f, e, i, a, s, t), OE(f, t);
    }
    function gn(e, t) {
      _y.has(e) || S('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = s1(t), u = FT(e);
      i.has(u) || (LE(t, e, hc, a), i.add(u));
    }
    function ky(e, t, a) {
      _y.has(e) && !t && S('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= _a), LE(a, e, i, t);
    }
    var gh = "_reactListening" + Math.random().toString(36).slice(2);
    function tp(e) {
      if (!e[gh]) {
        e[gh] = !0, tt.forEach(function(a) {
          a !== "selectionchange" && (_y.has(a) || ky(a, !1, e), ky(a, !0, e));
        });
        var t = e.nodeType === Ii ? e : e.ownerDocument;
        t !== null && (t[gh] || (t[gh] = !0, ky("selectionchange", !1, t)));
      }
    }
    function LE(e, t, a, i, u) {
      var s = sr(e, t, a), f = void 0;
      is && (t === "touchstart" || t === "touchmove" || t === "wheel") && (f = !0), e = e, i ? f !== void 0 ? Bd(e, t, s, f) : ta(e, t, s) : f !== void 0 ? To(e, t, s, f) : Us(e, t, s);
    }
    function ME(e, t) {
      return e === t || e.nodeType === Ln && e.parentNode === t;
    }
    function Dy(e, t, a, i, u) {
      var s = i;
      if (!(t & fd) && !(t & hc)) {
        var f = u;
        if (i !== null) {
          var p = i;
          e: for (; ; ) {
            if (p === null)
              return;
            var v = p.tag;
            if (v === ee || v === Ce) {
              var y = p.stateNode.containerInfo;
              if (ME(y, f))
                break;
              if (v === Ce)
                for (var g = p.return; g !== null; ) {
                  var x = g.tag;
                  if (x === ee || x === Ce) {
                    var w = g.stateNode.containerInfo;
                    if (ME(w, f))
                      return;
                  }
                  g = g.return;
                }
              for (; y !== null; ) {
                var N = Is(y);
                if (N === null)
                  return;
                var A = N.tag;
                if (A === se || A === Qe) {
                  p = s = N;
                  continue e;
                }
                y = y.parentNode;
              }
            }
            p = p.return;
          }
        }
      }
      xv(function() {
        return NT(e, t, a, s);
      });
    }
    function np(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function zT(e, t, a, i, u, s) {
      for (var f = t !== null ? t + "Capture" : null, p = i ? f : t, v = [], y = e, g = null; y !== null; ) {
        var x = y, w = x.stateNode, N = x.tag;
        if (N === se && w !== null && (g = w, p !== null)) {
          var A = wl(y, p);
          A != null && v.push(np(y, A, g));
        }
        if (u)
          break;
        y = y.return;
      }
      return v;
    }
    function Sh(e, t) {
      for (var a = t + "Capture", i = [], u = e; u !== null; ) {
        var s = u, f = s.stateNode, p = s.tag;
        if (p === se && f !== null) {
          var v = f, y = wl(u, a);
          y != null && i.unshift(np(u, y, v));
          var g = wl(u, t);
          g != null && i.push(np(u, g, v));
        }
        u = u.return;
      }
      return i;
    }
    function gf(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== se);
      return e || null;
    }
    function UT(e, t) {
      for (var a = e, i = t, u = 0, s = a; s; s = gf(s))
        u++;
      for (var f = 0, p = i; p; p = gf(p))
        f++;
      for (; u - f > 0; )
        a = gf(a), u--;
      for (; f - u > 0; )
        i = gf(i), f--;
      for (var v = u; v--; ) {
        if (a === i || i !== null && a === i.alternate)
          return a;
        a = gf(a), i = gf(i);
      }
      return null;
    }
    function NE(e, t, a, i, u) {
      for (var s = t._reactName, f = [], p = a; p !== null && p !== i; ) {
        var v = p, y = v.alternate, g = v.stateNode, x = v.tag;
        if (y !== null && y === i)
          break;
        if (x === se && g !== null) {
          var w = g;
          if (u) {
            var N = wl(p, s);
            N != null && f.unshift(np(p, N, w));
          } else if (!u) {
            var A = wl(p, s);
            A != null && f.push(np(p, A, w));
          }
        }
        p = p.return;
      }
      f.length !== 0 && e.push({
        event: t,
        listeners: f
      });
    }
    function AT(e, t, a, i, u) {
      var s = i && u ? UT(i, u) : null;
      i !== null && NE(e, t, i, s, !1), u !== null && a !== null && NE(e, a, u, s, !0);
    }
    function FT(e, t) {
      return e + "__bubble";
    }
    var Fa = !1, rp = "dangerouslySetInnerHTML", Eh = "suppressContentEditableWarning", ko = "suppressHydrationWarning", zE = "autoFocus", Bs = "children", $s = "style", Ch = "__html", Oy, Rh, ap, UE, Th, AE, FE;
    Oy = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, Rh = function(e, t) {
      od(e, t), pc(e, t), Tv(e, t, {
        registrationNameDependencies: Ze,
        possibleRegistrationNames: nt
      });
    }, AE = Dn && !document.documentMode, ap = function(e, t, a) {
      if (!Fa) {
        var i = wh(a), u = wh(t);
        u !== i && (Fa = !0, S("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(u), JSON.stringify(i)));
      }
    }, UE = function(e) {
      if (!Fa) {
        Fa = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), S("Extra attributes from the server: %s", t);
      }
    }, Th = function(e, t) {
      t === !1 ? S("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : S("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, FE = function(e, t) {
      var a = e.namespaceURI === Bi ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var jT = /\r\n?/g, HT = /\u0000|\uFFFD/g;
    function wh(e) {
      Gn(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(jT, `
`).replace(HT, "");
    }
    function bh(e, t, a, i) {
      var u = wh(t), s = wh(e);
      if (s !== u && (i && (Fa || (Fa = !0, S('Text content did not match. Server: "%s" Client: "%s"', s, u))), a && Ee))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function jE(e) {
      return e.nodeType === Ii ? e : e.ownerDocument;
    }
    function PT() {
    }
    function xh(e) {
      e.onclick = PT;
    }
    function VT(e, t, a, i, u) {
      for (var s in i)
        if (i.hasOwnProperty(s)) {
          var f = i[s];
          if (s === $s)
            f && Object.freeze(f), yv(t, f);
          else if (s === rp) {
            var p = f ? f[Ch] : void 0;
            p != null && iv(t, p);
          } else if (s === Bs)
            if (typeof f == "string") {
              var v = e !== "textarea" || f !== "";
              v && ao(t, f);
            } else typeof f == "number" && ao(t, "" + f);
          else s === Eh || s === ko || s === zE || (Ze.hasOwnProperty(s) ? f != null && (typeof f != "function" && Th(s, f), s === "onScroll" && gn("scroll", t)) : f != null && xr(t, s, f, u));
        }
    }
    function BT(e, t, a, i) {
      for (var u = 0; u < t.length; u += 2) {
        var s = t[u], f = t[u + 1];
        s === $s ? yv(e, f) : s === rp ? iv(e, f) : s === Bs ? ao(e, f) : xr(e, s, f, i);
      }
    }
    function $T(e, t, a, i) {
      var u, s = jE(a), f, p = i;
      if (p === Bi && (p = td(e)), p === Bi) {
        if (u = Rl(e, t), !u && e !== e.toLowerCase() && S("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
          var v = s.createElement("div");
          v.innerHTML = "<script><\/script>";
          var y = v.firstChild;
          f = v.removeChild(y);
        } else if (typeof t.is == "string")
          f = s.createElement(e, {
            is: t.is
          });
        else if (f = s.createElement(e), e === "select") {
          var g = f;
          t.multiple ? g.multiple = !0 : t.size && (g.size = t.size);
        }
      } else
        f = s.createElementNS(p, e);
      return p === Bi && !u && Object.prototype.toString.call(f) === "[object HTMLUnknownElement]" && !br.call(Oy, e) && (Oy[e] = !0, S("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), f;
    }
    function IT(e, t) {
      return jE(t).createTextNode(e);
    }
    function YT(e, t, a, i) {
      var u = Rl(t, a);
      Rh(t, a);
      var s;
      switch (t) {
        case "dialog":
          gn("cancel", e), gn("close", e), s = a;
          break;
        case "iframe":
        case "object":
        case "embed":
          gn("load", e), s = a;
          break;
        case "video":
        case "audio":
          for (var f = 0; f < ep.length; f++)
            gn(ep[f], e);
          s = a;
          break;
        case "source":
          gn("error", e), s = a;
          break;
        case "img":
        case "image":
        case "link":
          gn("error", e), gn("load", e), s = a;
          break;
        case "details":
          gn("toggle", e), s = a;
          break;
        case "input":
          Za(e, a), s = ro(e, a), gn("invalid", e);
          break;
        case "option":
          bt(e, a), s = a;
          break;
        case "select":
          ou(e, a), s = Ko(e, a), gn("invalid", e);
          break;
        case "textarea":
          Jf(e, a), s = Xf(e, a), gn("invalid", e);
          break;
        default:
          s = a;
      }
      switch (fc(t, s), VT(t, e, i, s, u), t) {
        case "input":
          Ja(e), z(e, a, !1);
          break;
        case "textarea":
          Ja(e), rv(e);
          break;
        case "option":
          tn(e, a);
          break;
        case "select":
          qf(e, a);
          break;
        default:
          typeof s.onClick == "function" && xh(e);
          break;
      }
    }
    function QT(e, t, a, i, u) {
      Rh(t, i);
      var s = null, f, p;
      switch (t) {
        case "input":
          f = ro(e, a), p = ro(e, i), s = [];
          break;
        case "select":
          f = Ko(e, a), p = Ko(e, i), s = [];
          break;
        case "textarea":
          f = Xf(e, a), p = Xf(e, i), s = [];
          break;
        default:
          f = a, p = i, typeof f.onClick != "function" && typeof p.onClick == "function" && xh(e);
          break;
      }
      fc(t, p);
      var v, y, g = null;
      for (v in f)
        if (!(p.hasOwnProperty(v) || !f.hasOwnProperty(v) || f[v] == null))
          if (v === $s) {
            var x = f[v];
            for (y in x)
              x.hasOwnProperty(y) && (g || (g = {}), g[y] = "");
          } else v === rp || v === Bs || v === Eh || v === ko || v === zE || (Ze.hasOwnProperty(v) ? s || (s = []) : (s = s || []).push(v, null));
      for (v in p) {
        var w = p[v], N = f != null ? f[v] : void 0;
        if (!(!p.hasOwnProperty(v) || w === N || w == null && N == null))
          if (v === $s)
            if (w && Object.freeze(w), N) {
              for (y in N)
                N.hasOwnProperty(y) && (!w || !w.hasOwnProperty(y)) && (g || (g = {}), g[y] = "");
              for (y in w)
                w.hasOwnProperty(y) && N[y] !== w[y] && (g || (g = {}), g[y] = w[y]);
            } else
              g || (s || (s = []), s.push(v, g)), g = w;
          else if (v === rp) {
            var A = w ? w[Ch] : void 0, H = N ? N[Ch] : void 0;
            A != null && H !== A && (s = s || []).push(v, A);
          } else v === Bs ? (typeof w == "string" || typeof w == "number") && (s = s || []).push(v, "" + w) : v === Eh || v === ko || (Ze.hasOwnProperty(v) ? (w != null && (typeof w != "function" && Th(v, w), v === "onScroll" && gn("scroll", e)), !s && N !== w && (s = [])) : (s = s || []).push(v, w));
      }
      return g && (ry(g, p[$s]), (s = s || []).push($s, g)), s;
    }
    function WT(e, t, a, i, u) {
      a === "input" && u.type === "radio" && u.name != null && h(e, u);
      var s = Rl(a, i), f = Rl(a, u);
      switch (BT(e, t, s, f), a) {
        case "input":
          C(e, u);
          break;
        case "textarea":
          nv(e, u);
          break;
        case "select":
          oc(e, u);
          break;
      }
    }
    function GT(e) {
      {
        var t = e.toLowerCase();
        return ts.hasOwnProperty(t) && ts[t] || null;
      }
    }
    function qT(e, t, a, i, u, s, f) {
      var p, v;
      switch (p = Rl(t, a), Rh(t, a), t) {
        case "dialog":
          gn("cancel", e), gn("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          gn("load", e);
          break;
        case "video":
        case "audio":
          for (var y = 0; y < ep.length; y++)
            gn(ep[y], e);
          break;
        case "source":
          gn("error", e);
          break;
        case "img":
        case "image":
        case "link":
          gn("error", e), gn("load", e);
          break;
        case "details":
          gn("toggle", e);
          break;
        case "input":
          Za(e, a), gn("invalid", e);
          break;
        case "option":
          bt(e, a);
          break;
        case "select":
          ou(e, a), gn("invalid", e);
          break;
        case "textarea":
          Jf(e, a), gn("invalid", e);
          break;
      }
      fc(t, a);
      {
        v = /* @__PURE__ */ new Set();
        for (var g = e.attributes, x = 0; x < g.length; x++) {
          var w = g[x].name.toLowerCase();
          switch (w) {
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              v.add(g[x].name);
          }
        }
      }
      var N = null;
      for (var A in a)
        if (a.hasOwnProperty(A)) {
          var H = a[A];
          if (A === Bs)
            typeof H == "string" ? e.textContent !== H && (a[ko] !== !0 && bh(e.textContent, H, s, f), N = [Bs, H]) : typeof H == "number" && e.textContent !== "" + H && (a[ko] !== !0 && bh(e.textContent, H, s, f), N = [Bs, "" + H]);
          else if (Ze.hasOwnProperty(A))
            H != null && (typeof H != "function" && Th(A, H), A === "onScroll" && gn("scroll", e));
          else if (f && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof p == "boolean") {
            var le = void 0, Ne = Zt(A);
            if (a[ko] !== !0) {
              if (!(A === Eh || A === ko || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              A === "value" || A === "checked" || A === "selected")) {
                if (A === rp) {
                  var we = e.innerHTML, Tt = H ? H[Ch] : void 0;
                  if (Tt != null) {
                    var yt = FE(e, Tt);
                    yt !== we && ap(A, we, yt);
                  }
                } else if (A === $s) {
                  if (v.delete(A), AE) {
                    var O = ty(H);
                    le = e.getAttribute("style"), O !== le && ap(A, le, O);
                  }
                } else if (p && !k)
                  v.delete(A.toLowerCase()), le = tu(e, A, H), H !== le && ap(A, le, H);
                else if (!pn(A, Ne, p) && !qn(A, H, Ne, p)) {
                  var P = !1;
                  if (Ne !== null)
                    v.delete(Ne.attributeName), le = pl(e, A, H, Ne);
                  else {
                    var L = i;
                    if (L === Bi && (L = td(t)), L === Bi)
                      v.delete(A.toLowerCase());
                    else {
                      var K = GT(A);
                      K !== null && K !== A && (P = !0, v.delete(K)), v.delete(A);
                    }
                    le = tu(e, A, H);
                  }
                  var pe = k;
                  !pe && H !== le && !P && ap(A, le, H);
                }
              }
            }
          }
        }
      switch (f && // $FlowFixMe - Should be inferred as not undefined.
      v.size > 0 && a[ko] !== !0 && UE(v), t) {
        case "input":
          Ja(e), z(e, a, !0);
          break;
        case "textarea":
          Ja(e), rv(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof a.onClick == "function" && xh(e);
          break;
      }
      return N;
    }
    function KT(e, t, a) {
      var i = e.nodeValue !== t;
      return i;
    }
    function Ly(e, t) {
      {
        if (Fa)
          return;
        Fa = !0, S("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function My(e, t) {
      {
        if (Fa)
          return;
        Fa = !0, S('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function Ny(e, t, a) {
      {
        if (Fa)
          return;
        Fa = !0, S("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function zy(e, t) {
      {
        if (t === "" || Fa)
          return;
        Fa = !0, S('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function XT(e, t, a) {
      switch (t) {
        case "input":
          j(e, a);
          return;
        case "textarea":
          Xm(e, a);
          return;
        case "select":
          Kf(e, a);
          return;
      }
    }
    var ip = function() {
    }, lp = function() {
    };
    {
      var JT = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], HE = [
        "applet",
        "caption",
        "html",
        "table",
        "td",
        "th",
        "marquee",
        "object",
        "template",
        // https://html.spec.whatwg.org/multipage/syntax.html#html-integration-point
        // TODO: Distinguish by namespace here -- for <title>, including it here
        // errs on the side of fewer warnings
        "foreignObject",
        "desc",
        "title"
      ], ZT = HE.concat(["button"]), ew = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], PE = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      lp = function(e, t) {
        var a = et({}, e || PE), i = {
          tag: t
        };
        return HE.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), ZT.indexOf(t) !== -1 && (a.pTagInButtonScope = null), JT.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
      };
      var tw = function(e, t) {
        switch (t) {
          case "select":
            return e === "option" || e === "optgroup" || e === "#text";
          case "optgroup":
            return e === "option" || e === "#text";
          case "option":
            return e === "#text";
          case "tr":
            return e === "th" || e === "td" || e === "style" || e === "script" || e === "template";
          case "tbody":
          case "thead":
          case "tfoot":
            return e === "tr" || e === "style" || e === "script" || e === "template";
          case "colgroup":
            return e === "col" || e === "template";
          case "table":
            return e === "caption" || e === "colgroup" || e === "tbody" || e === "tfoot" || e === "thead" || e === "style" || e === "script" || e === "template";
          case "head":
            return e === "base" || e === "basefont" || e === "bgsound" || e === "link" || e === "meta" || e === "title" || e === "noscript" || e === "noframes" || e === "style" || e === "script" || e === "template";
          case "html":
            return e === "head" || e === "body" || e === "frameset";
          case "frameset":
            return e === "frame";
          case "#document":
            return e === "html";
        }
        switch (e) {
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t !== "h1" && t !== "h2" && t !== "h3" && t !== "h4" && t !== "h5" && t !== "h6";
          case "rp":
          case "rt":
            return ew.indexOf(t) === -1;
          case "body":
          case "caption":
          case "col":
          case "colgroup":
          case "frameset":
          case "frame":
          case "head":
          case "html":
          case "tbody":
          case "td":
          case "tfoot":
          case "th":
          case "thead":
          case "tr":
            return t == null;
        }
        return !0;
      }, nw = function(e, t) {
        switch (e) {
          case "address":
          case "article":
          case "aside":
          case "blockquote":
          case "center":
          case "details":
          case "dialog":
          case "dir":
          case "div":
          case "dl":
          case "fieldset":
          case "figcaption":
          case "figure":
          case "footer":
          case "header":
          case "hgroup":
          case "main":
          case "menu":
          case "nav":
          case "ol":
          case "p":
          case "section":
          case "summary":
          case "ul":
          case "pre":
          case "listing":
          case "table":
          case "hr":
          case "xmp":
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t.pTagInButtonScope;
          case "form":
            return t.formTag || t.pTagInButtonScope;
          case "li":
            return t.listItemTagAutoclosing;
          case "dd":
          case "dt":
            return t.dlItemTagAutoclosing;
          case "button":
            return t.buttonTagInScope;
          case "a":
            return t.aTagInScope;
          case "nobr":
            return t.nobrTagInScope;
        }
        return null;
      }, VE = {};
      ip = function(e, t, a) {
        a = a || PE;
        var i = a.current, u = i && i.tag;
        t != null && (e != null && S("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var s = tw(e, u) ? null : i, f = s ? null : nw(e, a), p = s || f;
        if (p) {
          var v = p.tag, y = !!s + "|" + e + "|" + v;
          if (!VE[y]) {
            VE[y] = !0;
            var g = e, x = "";
            if (e === "#text" ? /\S/.test(t) ? g = "Text nodes" : (g = "Whitespace text nodes", x = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : g = "<" + e + ">", s) {
              var w = "";
              v === "table" && e === "tr" && (w += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), S("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", g, v, x, w);
            } else
              S("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", g, v);
          }
        }
      };
    }
    var _h = "suppressHydrationWarning", kh = "$", Dh = "/$", up = "$?", op = "$!", rw = "style", Uy = null, Ay = null;
    function aw(e) {
      var t, a, i = e.nodeType;
      switch (i) {
        case Ii:
        case rd: {
          t = i === Ii ? "#document" : "#fragment";
          var u = e.documentElement;
          a = u ? u.namespaceURI : nd(null, "");
          break;
        }
        default: {
          var s = i === Ln ? e.parentNode : e, f = s.namespaceURI || null;
          t = s.tagName, a = nd(f, t);
          break;
        }
      }
      {
        var p = t.toLowerCase(), v = lp(null, p);
        return {
          namespace: a,
          ancestorInfo: v
        };
      }
    }
    function iw(e, t, a) {
      {
        var i = e, u = nd(i.namespace, t), s = lp(i.ancestorInfo, t);
        return {
          namespace: u,
          ancestorInfo: s
        };
      }
    }
    function bk(e) {
      return e;
    }
    function lw(e) {
      Uy = Fn(), Ay = ET();
      var t = null;
      return Qn(!1), t;
    }
    function uw(e) {
      CT(Ay), Qn(Uy), Uy = null, Ay = null;
    }
    function ow(e, t, a, i, u) {
      var s;
      {
        var f = i;
        if (ip(e, null, f.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var p = "" + t.children, v = lp(f.ancestorInfo, e);
          ip(null, p, v);
        }
        s = f.namespace;
      }
      var y = $T(e, t, a, s);
      return fp(u, y), Iy(y, t), y;
    }
    function sw(e, t) {
      e.appendChild(t);
    }
    function cw(e, t, a, i, u) {
      switch (YT(e, t, a, i), t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          return !!a.autoFocus;
        case "img":
          return !0;
        default:
          return !1;
      }
    }
    function fw(e, t, a, i, u, s) {
      {
        var f = s;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var p = "" + i.children, v = lp(f.ancestorInfo, t);
          ip(null, p, v);
        }
      }
      return QT(e, t, a, i);
    }
    function Fy(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function dw(e, t, a, i) {
      {
        var u = a;
        ip(null, e, u.ancestorInfo);
      }
      var s = IT(e, t);
      return fp(i, s), s;
    }
    function pw() {
      var e = window.event;
      return e === void 0 ? Na : af(e.type);
    }
    var jy = typeof setTimeout == "function" ? setTimeout : void 0, vw = typeof clearTimeout == "function" ? clearTimeout : void 0, Hy = -1, BE = typeof Promise == "function" ? Promise : void 0, hw = typeof queueMicrotask == "function" ? queueMicrotask : typeof BE != "undefined" ? function(e) {
      return BE.resolve(null).then(e).catch(mw);
    } : jy;
    function mw(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function yw(e, t, a, i) {
      switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && e.focus();
          return;
        case "img": {
          a.src && (e.src = a.src);
          return;
        }
      }
    }
    function gw(e, t, a, i, u, s) {
      WT(e, t, a, i, u), Iy(e, u);
    }
    function $E(e) {
      ao(e, "");
    }
    function Sw(e, t, a) {
      e.nodeValue = a;
    }
    function Ew(e, t) {
      e.appendChild(t);
    }
    function Cw(e, t) {
      var a;
      e.nodeType === Ln ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && xh(a);
    }
    function Rw(e, t, a) {
      e.insertBefore(t, a);
    }
    function Tw(e, t, a) {
      e.nodeType === Ln ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function ww(e, t) {
      e.removeChild(t);
    }
    function bw(e, t) {
      e.nodeType === Ln ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function Py(e, t) {
      var a = t, i = 0;
      do {
        var u = a.nextSibling;
        if (e.removeChild(a), u && u.nodeType === Ln) {
          var s = u.data;
          if (s === Dh)
            if (i === 0) {
              e.removeChild(u), Du(t);
              return;
            } else
              i--;
          else (s === kh || s === up || s === op) && i++;
        }
        a = u;
      } while (a);
      Du(t);
    }
    function xw(e, t) {
      e.nodeType === Ln ? Py(e.parentNode, t) : e.nodeType === Qr && Py(e, t), Du(e);
    }
    function _w(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function kw(e) {
      e.nodeValue = "";
    }
    function Dw(e, t) {
      e = e;
      var a = t[rw], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = cc("display", i);
    }
    function Ow(e, t) {
      e.nodeValue = t;
    }
    function Lw(e) {
      e.nodeType === Qr ? e.textContent = "" : e.nodeType === Ii && e.documentElement && e.removeChild(e.documentElement);
    }
    function Mw(e, t, a) {
      return e.nodeType !== Qr || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function Nw(e, t) {
      return t === "" || e.nodeType !== $i ? null : e;
    }
    function zw(e) {
      return e.nodeType !== Ln ? null : e;
    }
    function IE(e) {
      return e.data === up;
    }
    function Vy(e) {
      return e.data === op;
    }
    function Uw(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, i, u;
      return t && (a = t.dgst, i = t.msg, u = t.stck), {
        message: i,
        digest: a,
        stack: u
      };
    }
    function Aw(e, t) {
      e._reactRetry = t;
    }
    function Oh(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === Qr || t === $i)
          break;
        if (t === Ln) {
          var a = e.data;
          if (a === kh || a === op || a === up)
            break;
          if (a === Dh)
            return null;
        }
      }
      return e;
    }
    function sp(e) {
      return Oh(e.nextSibling);
    }
    function Fw(e) {
      return Oh(e.firstChild);
    }
    function jw(e) {
      return Oh(e.firstChild);
    }
    function Hw(e) {
      return Oh(e.nextSibling);
    }
    function Pw(e, t, a, i, u, s, f) {
      fp(s, e), Iy(e, a);
      var p;
      {
        var v = u;
        p = v.namespace;
      }
      var y = (s.mode & ot) !== De;
      return qT(e, t, a, p, i, y, f);
    }
    function Vw(e, t, a, i) {
      return fp(a, e), a.mode & ot, KT(e, t);
    }
    function Bw(e, t) {
      fp(t, e);
    }
    function $w(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === Ln) {
          var i = t.data;
          if (i === Dh) {
            if (a === 0)
              return sp(t);
            a--;
          } else (i === kh || i === op || i === up) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function YE(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === Ln) {
          var i = t.data;
          if (i === kh || i === op || i === up) {
            if (a === 0)
              return t;
            a--;
          } else i === Dh && a++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function Iw(e) {
      Du(e);
    }
    function Yw(e) {
      Du(e);
    }
    function Qw(e) {
      return e !== "head" && e !== "body";
    }
    function Ww(e, t, a, i) {
      var u = !0;
      bh(t.nodeValue, a, i, u);
    }
    function Gw(e, t, a, i, u, s) {
      if (t[_h] !== !0) {
        var f = !0;
        bh(i.nodeValue, u, s, f);
      }
    }
    function qw(e, t) {
      t.nodeType === Qr ? Ly(e, t) : t.nodeType === Ln || My(e, t);
    }
    function Kw(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === Qr ? Ly(a, t) : t.nodeType === Ln || My(a, t));
      }
    }
    function Xw(e, t, a, i, u) {
      (u || t[_h] !== !0) && (i.nodeType === Qr ? Ly(a, i) : i.nodeType === Ln || My(a, i));
    }
    function Jw(e, t, a) {
      Ny(e, t);
    }
    function Zw(e, t) {
      zy(e, t);
    }
    function e1(e, t, a) {
      {
        var i = e.parentNode;
        i !== null && Ny(i, t);
      }
    }
    function t1(e, t) {
      {
        var a = e.parentNode;
        a !== null && zy(a, t);
      }
    }
    function n1(e, t, a, i, u, s) {
      (s || t[_h] !== !0) && Ny(a, i);
    }
    function r1(e, t, a, i, u) {
      (u || t[_h] !== !0) && zy(a, i);
    }
    function a1(e) {
      S("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function i1(e) {
      tp(e);
    }
    var Sf = Math.random().toString(36).slice(2), Ef = "__reactFiber$" + Sf, By = "__reactProps$" + Sf, cp = "__reactContainer$" + Sf, $y = "__reactEvents$" + Sf, l1 = "__reactListeners$" + Sf, u1 = "__reactHandles$" + Sf;
    function o1(e) {
      delete e[Ef], delete e[By], delete e[$y], delete e[l1], delete e[u1];
    }
    function fp(e, t) {
      t[Ef] = e;
    }
    function Lh(e, t) {
      t[cp] = e;
    }
    function QE(e) {
      e[cp] = null;
    }
    function dp(e) {
      return !!e[cp];
    }
    function Is(e) {
      var t = e[Ef];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[cp] || a[Ef], t) {
          var i = t.alternate;
          if (t.child !== null || i !== null && i.child !== null)
            for (var u = YE(e); u !== null; ) {
              var s = u[Ef];
              if (s)
                return s;
              u = YE(u);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function Do(e) {
      var t = e[Ef] || e[cp];
      return t && (t.tag === se || t.tag === Qe || t.tag === _e || t.tag === ee) ? t : null;
    }
    function Cf(e) {
      if (e.tag === se || e.tag === Qe)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function Mh(e) {
      return e[By] || null;
    }
    function Iy(e, t) {
      e[By] = t;
    }
    function s1(e) {
      var t = e[$y];
      return t === void 0 && (t = e[$y] = /* @__PURE__ */ new Set()), t;
    }
    var WE = {}, GE = _.ReactDebugCurrentFrame;
    function Nh(e) {
      if (e) {
        var t = e._owner, a = Hi(e.type, e._source, t ? t.type : null);
        GE.setExtraStackFrame(a);
      } else
        GE.setExtraStackFrame(null);
    }
    function tl(e, t, a, i, u) {
      {
        var s = Function.call.bind(br);
        for (var f in e)
          if (s(e, f)) {
            var p = void 0;
            try {
              if (typeof e[f] != "function") {
                var v = Error((i || "React class") + ": " + a + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw v.name = "Invariant Violation", v;
              }
              p = e[f](t, f, i, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (y) {
              p = y;
            }
            p && !(p instanceof Error) && (Nh(u), S("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, f, typeof p), Nh(null)), p instanceof Error && !(p.message in WE) && (WE[p.message] = !0, Nh(u), S("Failed %s type: %s", a, p.message), Nh(null));
          }
      }
    }
    var Yy = [], zh;
    zh = [];
    var Uu = -1;
    function Oo(e) {
      return {
        current: e
      };
    }
    function ra(e, t) {
      if (Uu < 0) {
        S("Unexpected pop.");
        return;
      }
      t !== zh[Uu] && S("Unexpected Fiber popped."), e.current = Yy[Uu], Yy[Uu] = null, zh[Uu] = null, Uu--;
    }
    function aa(e, t, a) {
      Uu++, Yy[Uu] = e.current, zh[Uu] = a, e.current = t;
    }
    var Qy;
    Qy = {};
    var li = {};
    Object.freeze(li);
    var Au = Oo(li), Bl = Oo(!1), Wy = li;
    function Rf(e, t, a) {
      return a && $l(t) ? Wy : Au.current;
    }
    function qE(e, t, a) {
      {
        var i = e.stateNode;
        i.__reactInternalMemoizedUnmaskedChildContext = t, i.__reactInternalMemoizedMaskedChildContext = a;
      }
    }
    function Tf(e, t) {
      {
        var a = e.type, i = a.contextTypes;
        if (!i)
          return li;
        var u = e.stateNode;
        if (u && u.__reactInternalMemoizedUnmaskedChildContext === t)
          return u.__reactInternalMemoizedMaskedChildContext;
        var s = {};
        for (var f in i)
          s[f] = t[f];
        {
          var p = $e(e) || "Unknown";
          tl(i, s, "context", p);
        }
        return u && qE(e, t, s), s;
      }
    }
    function Uh() {
      return Bl.current;
    }
    function $l(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function Ah(e) {
      ra(Bl, e), ra(Au, e);
    }
    function Gy(e) {
      ra(Bl, e), ra(Au, e);
    }
    function KE(e, t, a) {
      {
        if (Au.current !== li)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        aa(Au, t, e), aa(Bl, a, e);
      }
    }
    function XE(e, t, a) {
      {
        var i = e.stateNode, u = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var s = $e(e) || "Unknown";
            Qy[s] || (Qy[s] = !0, S("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", s, s));
          }
          return a;
        }
        var f = i.getChildContext();
        for (var p in f)
          if (!(p in u))
            throw new Error(($e(e) || "Unknown") + '.getChildContext(): key "' + p + '" is not defined in childContextTypes.');
        {
          var v = $e(e) || "Unknown";
          tl(u, f, "child context", v);
        }
        return et({}, a, f);
      }
    }
    function Fh(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || li;
        return Wy = Au.current, aa(Au, a, e), aa(Bl, Bl.current, e), !0;
      }
    }
    function JE(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var u = XE(e, t, Wy);
          i.__reactInternalMemoizedMergedChildContext = u, ra(Bl, e), ra(Au, e), aa(Au, u, e), aa(Bl, a, e);
        } else
          ra(Bl, e), aa(Bl, a, e);
      }
    }
    function c1(e) {
      {
        if (!hu(e) || e.tag !== oe)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case ee:
              return t.stateNode.context;
            case oe: {
              var a = t.type;
              if ($l(a))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var Lo = 0, jh = 1, Fu = null, qy = !1, Ky = !1;
    function ZE(e) {
      Fu === null ? Fu = [e] : Fu.push(e);
    }
    function f1(e) {
      qy = !0, ZE(e);
    }
    function eC() {
      qy && Mo();
    }
    function Mo() {
      if (!Ky && Fu !== null) {
        Ky = !0;
        var e = 0, t = Ua();
        try {
          var a = !0, i = Fu;
          for (An(Lr); e < i.length; e++) {
            var u = i[e];
            do
              u = u(a);
            while (u !== null);
          }
          Fu = null, qy = !1;
        } catch (s) {
          throw Fu !== null && (Fu = Fu.slice(e + 1)), hd(ss, Mo), s;
        } finally {
          An(t), Ky = !1;
        }
      }
      return null;
    }
    var wf = [], bf = 0, Hh = null, Ph = 0, Li = [], Mi = 0, Ys = null, ju = 1, Hu = "";
    function d1(e) {
      return Ws(), (e.flags & Ci) !== ke;
    }
    function p1(e) {
      return Ws(), Ph;
    }
    function v1() {
      var e = Hu, t = ju, a = t & ~h1(t);
      return a.toString(32) + e;
    }
    function Qs(e, t) {
      Ws(), wf[bf++] = Ph, wf[bf++] = Hh, Hh = e, Ph = t;
    }
    function tC(e, t, a) {
      Ws(), Li[Mi++] = ju, Li[Mi++] = Hu, Li[Mi++] = Ys, Ys = e;
      var i = ju, u = Hu, s = Vh(i) - 1, f = i & ~(1 << s), p = a + 1, v = Vh(t) + s;
      if (v > 30) {
        var y = s - s % 5, g = (1 << y) - 1, x = (f & g).toString(32), w = f >> y, N = s - y, A = Vh(t) + N, H = p << N, le = H | w, Ne = x + u;
        ju = 1 << A | le, Hu = Ne;
      } else {
        var we = p << s, Tt = we | f, yt = u;
        ju = 1 << v | Tt, Hu = yt;
      }
    }
    function Xy(e) {
      Ws();
      var t = e.return;
      if (t !== null) {
        var a = 1, i = 0;
        Qs(e, a), tC(e, a, i);
      }
    }
    function Vh(e) {
      return 32 - zn(e);
    }
    function h1(e) {
      return 1 << Vh(e) - 1;
    }
    function Jy(e) {
      for (; e === Hh; )
        Hh = wf[--bf], wf[bf] = null, Ph = wf[--bf], wf[bf] = null;
      for (; e === Ys; )
        Ys = Li[--Mi], Li[Mi] = null, Hu = Li[--Mi], Li[Mi] = null, ju = Li[--Mi], Li[Mi] = null;
    }
    function m1() {
      return Ws(), Ys !== null ? {
        id: ju,
        overflow: Hu
      } : null;
    }
    function y1(e, t) {
      Ws(), Li[Mi++] = ju, Li[Mi++] = Hu, Li[Mi++] = Ys, ju = t.id, Hu = t.overflow, Ys = e;
    }
    function Ws() {
      Ar() || S("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var Ur = null, Ni = null, nl = !1, Gs = !1, No = null;
    function g1() {
      nl && S("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function nC() {
      Gs = !0;
    }
    function S1() {
      return Gs;
    }
    function E1(e) {
      var t = e.stateNode.containerInfo;
      return Ni = jw(t), Ur = e, nl = !0, No = null, Gs = !1, !0;
    }
    function C1(e, t, a) {
      return Ni = Hw(t), Ur = e, nl = !0, No = null, Gs = !1, a !== null && y1(e, a), !0;
    }
    function rC(e, t) {
      switch (e.tag) {
        case ee: {
          qw(e.stateNode.containerInfo, t);
          break;
        }
        case se: {
          var a = (e.mode & ot) !== De;
          Xw(
            e.type,
            e.memoizedProps,
            e.stateNode,
            t,
            // TODO: Delete this argument when we remove the legacy root API.
            a
          );
          break;
        }
        case _e: {
          var i = e.memoizedState;
          i.dehydrated !== null && Kw(i.dehydrated, t);
          break;
        }
      }
    }
    function aC(e, t) {
      rC(e, t);
      var a = b_();
      a.stateNode = t, a.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [a], e.flags |= ka) : i.push(a);
    }
    function Zy(e, t) {
      {
        if (Gs)
          return;
        switch (e.tag) {
          case ee: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case se:
                var i = t.type;
                t.pendingProps, Jw(a, i);
                break;
              case Qe:
                var u = t.pendingProps;
                Zw(a, u);
                break;
            }
            break;
          }
          case se: {
            var s = e.type, f = e.memoizedProps, p = e.stateNode;
            switch (t.tag) {
              case se: {
                var v = t.type, y = t.pendingProps, g = (e.mode & ot) !== De;
                n1(
                  s,
                  f,
                  p,
                  v,
                  y,
                  // TODO: Delete this argument when we remove the legacy root API.
                  g
                );
                break;
              }
              case Qe: {
                var x = t.pendingProps, w = (e.mode & ot) !== De;
                r1(
                  s,
                  f,
                  p,
                  x,
                  // TODO: Delete this argument when we remove the legacy root API.
                  w
                );
                break;
              }
            }
            break;
          }
          case _e: {
            var N = e.memoizedState, A = N.dehydrated;
            if (A !== null) switch (t.tag) {
              case se:
                var H = t.type;
                t.pendingProps, e1(A, H);
                break;
              case Qe:
                var le = t.pendingProps;
                t1(A, le);
                break;
            }
            break;
          }
          default:
            return;
        }
      }
    }
    function iC(e, t) {
      t.flags = t.flags & ~Gr | hn, Zy(e, t);
    }
    function lC(e, t) {
      switch (e.tag) {
        case se: {
          var a = e.type;
          e.pendingProps;
          var i = Mw(t, a);
          return i !== null ? (e.stateNode = i, Ur = e, Ni = Fw(i), !0) : !1;
        }
        case Qe: {
          var u = e.pendingProps, s = Nw(t, u);
          return s !== null ? (e.stateNode = s, Ur = e, Ni = null, !0) : !1;
        }
        case _e: {
          var f = zw(t);
          if (f !== null) {
            var p = {
              dehydrated: f,
              treeContext: m1(),
              retryLane: Jr
            };
            e.memoizedState = p;
            var v = x_(f);
            return v.return = e, e.child = v, Ur = e, Ni = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function eg(e) {
      return (e.mode & ot) !== De && (e.flags & xe) === ke;
    }
    function tg(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function ng(e) {
      if (nl) {
        var t = Ni;
        if (!t) {
          eg(e) && (Zy(Ur, e), tg()), iC(Ur, e), nl = !1, Ur = e;
          return;
        }
        var a = t;
        if (!lC(e, t)) {
          eg(e) && (Zy(Ur, e), tg()), t = sp(a);
          var i = Ur;
          if (!t || !lC(e, t)) {
            iC(Ur, e), nl = !1, Ur = e;
            return;
          }
          aC(i, a);
        }
      }
    }
    function R1(e, t, a) {
      var i = e.stateNode, u = !Gs, s = Pw(i, e.type, e.memoizedProps, t, a, e, u);
      return e.updateQueue = s, s !== null;
    }
    function T1(e) {
      var t = e.stateNode, a = e.memoizedProps, i = Vw(t, a, e);
      if (i) {
        var u = Ur;
        if (u !== null)
          switch (u.tag) {
            case ee: {
              var s = u.stateNode.containerInfo, f = (u.mode & ot) !== De;
              Ww(
                s,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                f
              );
              break;
            }
            case se: {
              var p = u.type, v = u.memoizedProps, y = u.stateNode, g = (u.mode & ot) !== De;
              Gw(
                p,
                v,
                y,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                g
              );
              break;
            }
          }
      }
      return i;
    }
    function w1(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      Bw(a, e);
    }
    function b1(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return $w(a);
    }
    function uC(e) {
      for (var t = e.return; t !== null && t.tag !== se && t.tag !== ee && t.tag !== _e; )
        t = t.return;
      Ur = t;
    }
    function Bh(e) {
      if (e !== Ur)
        return !1;
      if (!nl)
        return uC(e), nl = !0, !1;
      if (e.tag !== ee && (e.tag !== se || Qw(e.type) && !Fy(e.type, e.memoizedProps))) {
        var t = Ni;
        if (t)
          if (eg(e))
            oC(e), tg();
          else
            for (; t; )
              aC(e, t), t = sp(t);
      }
      return uC(e), e.tag === _e ? Ni = b1(e) : Ni = Ur ? sp(e.stateNode) : null, !0;
    }
    function x1() {
      return nl && Ni !== null;
    }
    function oC(e) {
      for (var t = Ni; t; )
        rC(e, t), t = sp(t);
    }
    function xf() {
      Ur = null, Ni = null, nl = !1, Gs = !1;
    }
    function sC() {
      No !== null && (nR(No), No = null);
    }
    function Ar() {
      return nl;
    }
    function rg(e) {
      No === null ? No = [e] : No.push(e);
    }
    var _1 = _.ReactCurrentBatchConfig, k1 = null;
    function D1() {
      return _1.transition;
    }
    var rl = {
      recordUnsafeLifecycleWarnings: function(e, t) {
      },
      flushPendingUnsafeLifecycleWarnings: function() {
      },
      recordLegacyContextWarning: function(e, t) {
      },
      flushLegacyContextWarning: function() {
      },
      discardPendingWarnings: function() {
      }
    };
    {
      var O1 = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & Wt && (t = a), a = a.return;
        return t;
      }, qs = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, pp = [], vp = [], hp = [], mp = [], yp = [], gp = [], Ks = /* @__PURE__ */ new Set();
      rl.recordUnsafeLifecycleWarnings = function(e, t) {
        Ks.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && pp.push(e), e.mode & Wt && typeof t.UNSAFE_componentWillMount == "function" && vp.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && hp.push(e), e.mode & Wt && typeof t.UNSAFE_componentWillReceiveProps == "function" && mp.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && yp.push(e), e.mode & Wt && typeof t.UNSAFE_componentWillUpdate == "function" && gp.push(e));
      }, rl.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        pp.length > 0 && (pp.forEach(function(w) {
          e.add($e(w) || "Component"), Ks.add(w.type);
        }), pp = []);
        var t = /* @__PURE__ */ new Set();
        vp.length > 0 && (vp.forEach(function(w) {
          t.add($e(w) || "Component"), Ks.add(w.type);
        }), vp = []);
        var a = /* @__PURE__ */ new Set();
        hp.length > 0 && (hp.forEach(function(w) {
          a.add($e(w) || "Component"), Ks.add(w.type);
        }), hp = []);
        var i = /* @__PURE__ */ new Set();
        mp.length > 0 && (mp.forEach(function(w) {
          i.add($e(w) || "Component"), Ks.add(w.type);
        }), mp = []);
        var u = /* @__PURE__ */ new Set();
        yp.length > 0 && (yp.forEach(function(w) {
          u.add($e(w) || "Component"), Ks.add(w.type);
        }), yp = []);
        var s = /* @__PURE__ */ new Set();
        if (gp.length > 0 && (gp.forEach(function(w) {
          s.add($e(w) || "Component"), Ks.add(w.type);
        }), gp = []), t.size > 0) {
          var f = qs(t);
          S(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, f);
        }
        if (i.size > 0) {
          var p = qs(i);
          S(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, p);
        }
        if (s.size > 0) {
          var v = qs(s);
          S(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, v);
        }
        if (e.size > 0) {
          var y = qs(e);
          be(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, y);
        }
        if (a.size > 0) {
          var g = qs(a);
          be(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, g);
        }
        if (u.size > 0) {
          var x = qs(u);
          be(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, x);
        }
      };
      var $h = /* @__PURE__ */ new Map(), cC = /* @__PURE__ */ new Set();
      rl.recordLegacyContextWarning = function(e, t) {
        var a = O1(e);
        if (a === null) {
          S("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!cC.has(e.type)) {
          var i = $h.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], $h.set(a, i)), i.push(e));
        }
      }, rl.flushLegacyContextWarning = function() {
        $h.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(s) {
              i.add($e(s) || "Component"), cC.add(s.type);
            });
            var u = qs(i);
            try {
              It(a), S(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u);
            } finally {
              on();
            }
          }
        });
      }, rl.discardPendingWarnings = function() {
        pp = [], vp = [], hp = [], mp = [], yp = [], gp = [], $h = /* @__PURE__ */ new Map();
      };
    }
    var ag, ig, lg, ug, og, fC = function(e, t) {
    };
    ag = !1, ig = !1, lg = {}, ug = {}, og = {}, fC = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = $e(t) || "Component";
        ug[a] || (ug[a] = !0, S('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function L1(e) {
      return e.prototype && e.prototype.isReactComponent;
    }
    function Sp(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & Wt || V) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self) && // Will already throw with "Function components cannot have string refs"
        !(a._owner && a._owner.tag !== oe) && // Will already warn with "Function components cannot be given refs"
        !(typeof a.type == "function" && !L1(a.type)) && // Will already throw with "Element ref was specified as a string (someStringRef) but no owner was set"
        a._owner) {
          var u = $e(e) || "Component";
          lg[u] || (S('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', u, i), lg[u] = !0);
        }
        if (a._owner) {
          var s = a._owner, f;
          if (s) {
            var p = s;
            if (p.tag !== oe)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            f = p.stateNode;
          }
          if (!f)
            throw new Error("Missing owner for string ref " + i + ". This error is likely caused by a bug in React. Please file an issue.");
          var v = f;
          si(i, "ref");
          var y = "" + i;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === y)
            return t.ref;
          var g = function(x) {
            var w = v.refs;
            x === null ? delete w[y] : w[y] = x;
          };
          return g._stringRef = y, g;
        } else {
          if (typeof i != "string")
            throw new Error("Expected ref to be a function, a string, an object returned by React.createRef(), or null.");
          if (!a._owner)
            throw new Error("Element ref was specified as a string (" + i + `) but no owner was set. This could happen for one of the following reasons:
1. You may be adding a ref to a function component
2. You may be adding a ref to a component that was not created inside a component's render method
3. You have multiple copies of React loaded
See https://reactjs.org/link/refs-must-have-owner for more information.`);
        }
      }
      return i;
    }
    function Ih(e, t) {
      var a = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    function Yh(e) {
      {
        var t = $e(e) || "Component";
        if (og[t])
          return;
        og[t] = !0, S("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function dC(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function pC(e) {
      function t(O, P) {
        if (e) {
          var L = O.deletions;
          L === null ? (O.deletions = [P], O.flags |= ka) : L.push(P);
        }
      }
      function a(O, P) {
        if (!e)
          return null;
        for (var L = P; L !== null; )
          t(O, L), L = L.sibling;
        return null;
      }
      function i(O, P) {
        for (var L = /* @__PURE__ */ new Map(), K = P; K !== null; )
          K.key !== null ? L.set(K.key, K) : L.set(K.index, K), K = K.sibling;
        return L;
      }
      function u(O, P) {
        var L = ic(O, P);
        return L.index = 0, L.sibling = null, L;
      }
      function s(O, P, L) {
        if (O.index = L, !e)
          return O.flags |= Ci, P;
        var K = O.alternate;
        if (K !== null) {
          var pe = K.index;
          return pe < P ? (O.flags |= hn, P) : pe;
        } else
          return O.flags |= hn, P;
      }
      function f(O) {
        return e && O.alternate === null && (O.flags |= hn), O;
      }
      function p(O, P, L, K) {
        if (P === null || P.tag !== Qe) {
          var pe = rE(L, O.mode, K);
          return pe.return = O, pe;
        } else {
          var ce = u(P, L);
          return ce.return = O, ce;
        }
      }
      function v(O, P, L, K) {
        var pe = L.type;
        if (pe === fi)
          return g(O, P, L.props.children, K, L.key);
        if (P !== null && (P.elementType === pe || // Keep this check inline so it only runs on the false path:
        gR(P, L) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof pe == "object" && pe !== null && pe.$$typeof === Ie && dC(pe) === P.type)) {
          var ce = u(P, L.props);
          return ce.ref = Sp(O, P, L), ce.return = O, ce._debugSource = L._source, ce._debugOwner = L._owner, ce;
        }
        var Ve = nE(L, O.mode, K);
        return Ve.ref = Sp(O, P, L), Ve.return = O, Ve;
      }
      function y(O, P, L, K) {
        if (P === null || P.tag !== Ce || P.stateNode.containerInfo !== L.containerInfo || P.stateNode.implementation !== L.implementation) {
          var pe = aE(L, O.mode, K);
          return pe.return = O, pe;
        } else {
          var ce = u(P, L.children || []);
          return ce.return = O, ce;
        }
      }
      function g(O, P, L, K, pe) {
        if (P === null || P.tag !== St) {
          var ce = Io(L, O.mode, K, pe);
          return ce.return = O, ce;
        } else {
          var Ve = u(P, L);
          return Ve.return = O, Ve;
        }
      }
      function x(O, P, L) {
        if (typeof P == "string" && P !== "" || typeof P == "number") {
          var K = rE("" + P, O.mode, L);
          return K.return = O, K;
        }
        if (typeof P == "object" && P !== null) {
          switch (P.$$typeof) {
            case _r: {
              var pe = nE(P, O.mode, L);
              return pe.ref = Sp(O, null, P), pe.return = O, pe;
            }
            case rr: {
              var ce = aE(P, O.mode, L);
              return ce.return = O, ce;
            }
            case Ie: {
              var Ve = P._payload, Ge = P._init;
              return x(O, Ge(Ve), L);
            }
          }
          if (at(P) || Xe(P)) {
            var qt = Io(P, O.mode, L, null);
            return qt.return = O, qt;
          }
          Ih(O, P);
        }
        return typeof P == "function" && Yh(O), null;
      }
      function w(O, P, L, K) {
        var pe = P !== null ? P.key : null;
        if (typeof L == "string" && L !== "" || typeof L == "number")
          return pe !== null ? null : p(O, P, "" + L, K);
        if (typeof L == "object" && L !== null) {
          switch (L.$$typeof) {
            case _r:
              return L.key === pe ? v(O, P, L, K) : null;
            case rr:
              return L.key === pe ? y(O, P, L, K) : null;
            case Ie: {
              var ce = L._payload, Ve = L._init;
              return w(O, P, Ve(ce), K);
            }
          }
          if (at(L) || Xe(L))
            return pe !== null ? null : g(O, P, L, K, null);
          Ih(O, L);
        }
        return typeof L == "function" && Yh(O), null;
      }
      function N(O, P, L, K, pe) {
        if (typeof K == "string" && K !== "" || typeof K == "number") {
          var ce = O.get(L) || null;
          return p(P, ce, "" + K, pe);
        }
        if (typeof K == "object" && K !== null) {
          switch (K.$$typeof) {
            case _r: {
              var Ve = O.get(K.key === null ? L : K.key) || null;
              return v(P, Ve, K, pe);
            }
            case rr: {
              var Ge = O.get(K.key === null ? L : K.key) || null;
              return y(P, Ge, K, pe);
            }
            case Ie:
              var qt = K._payload, zt = K._init;
              return N(O, P, L, zt(qt), pe);
          }
          if (at(K) || Xe(K)) {
            var Wn = O.get(L) || null;
            return g(P, Wn, K, pe, null);
          }
          Ih(P, K);
        }
        return typeof K == "function" && Yh(P), null;
      }
      function A(O, P, L) {
        {
          if (typeof O != "object" || O === null)
            return P;
          switch (O.$$typeof) {
            case _r:
            case rr:
              fC(O, L);
              var K = O.key;
              if (typeof K != "string")
                break;
              if (P === null) {
                P = /* @__PURE__ */ new Set(), P.add(K);
                break;
              }
              if (!P.has(K)) {
                P.add(K);
                break;
              }
              S("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", K);
              break;
            case Ie:
              var pe = O._payload, ce = O._init;
              A(ce(pe), P, L);
              break;
          }
        }
        return P;
      }
      function H(O, P, L, K) {
        for (var pe = null, ce = 0; ce < L.length; ce++) {
          var Ve = L[ce];
          pe = A(Ve, pe, O);
        }
        for (var Ge = null, qt = null, zt = P, Wn = 0, Ut = 0, Hn = null; zt !== null && Ut < L.length; Ut++) {
          zt.index > Ut ? (Hn = zt, zt = null) : Hn = zt.sibling;
          var la = w(O, zt, L[Ut], K);
          if (la === null) {
            zt === null && (zt = Hn);
            break;
          }
          e && zt && la.alternate === null && t(O, zt), Wn = s(la, Wn, Ut), qt === null ? Ge = la : qt.sibling = la, qt = la, zt = Hn;
        }
        if (Ut === L.length) {
          if (a(O, zt), Ar()) {
            var $r = Ut;
            Qs(O, $r);
          }
          return Ge;
        }
        if (zt === null) {
          for (; Ut < L.length; Ut++) {
            var oi = x(O, L[Ut], K);
            oi !== null && (Wn = s(oi, Wn, Ut), qt === null ? Ge = oi : qt.sibling = oi, qt = oi);
          }
          if (Ar()) {
            var Ca = Ut;
            Qs(O, Ca);
          }
          return Ge;
        }
        for (var Ra = i(O, zt); Ut < L.length; Ut++) {
          var ua = N(Ra, O, Ut, L[Ut], K);
          ua !== null && (e && ua.alternate !== null && Ra.delete(ua.key === null ? Ut : ua.key), Wn = s(ua, Wn, Ut), qt === null ? Ge = ua : qt.sibling = ua, qt = ua);
        }
        if (e && Ra.forEach(function(Yf) {
          return t(O, Yf);
        }), Ar()) {
          var Qu = Ut;
          Qs(O, Qu);
        }
        return Ge;
      }
      function le(O, P, L, K) {
        var pe = Xe(L);
        if (typeof pe != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          L[Symbol.toStringTag] === "Generator" && (ig || S("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), ig = !0), L.entries === pe && (ag || S("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), ag = !0);
          var ce = pe.call(L);
          if (ce)
            for (var Ve = null, Ge = ce.next(); !Ge.done; Ge = ce.next()) {
              var qt = Ge.value;
              Ve = A(qt, Ve, O);
            }
        }
        var zt = pe.call(L);
        if (zt == null)
          throw new Error("An iterable object provided no iterator.");
        for (var Wn = null, Ut = null, Hn = P, la = 0, $r = 0, oi = null, Ca = zt.next(); Hn !== null && !Ca.done; $r++, Ca = zt.next()) {
          Hn.index > $r ? (oi = Hn, Hn = null) : oi = Hn.sibling;
          var Ra = w(O, Hn, Ca.value, K);
          if (Ra === null) {
            Hn === null && (Hn = oi);
            break;
          }
          e && Hn && Ra.alternate === null && t(O, Hn), la = s(Ra, la, $r), Ut === null ? Wn = Ra : Ut.sibling = Ra, Ut = Ra, Hn = oi;
        }
        if (Ca.done) {
          if (a(O, Hn), Ar()) {
            var ua = $r;
            Qs(O, ua);
          }
          return Wn;
        }
        if (Hn === null) {
          for (; !Ca.done; $r++, Ca = zt.next()) {
            var Qu = x(O, Ca.value, K);
            Qu !== null && (la = s(Qu, la, $r), Ut === null ? Wn = Qu : Ut.sibling = Qu, Ut = Qu);
          }
          if (Ar()) {
            var Yf = $r;
            Qs(O, Yf);
          }
          return Wn;
        }
        for (var Xp = i(O, Hn); !Ca.done; $r++, Ca = zt.next()) {
          var Xl = N(Xp, O, $r, Ca.value, K);
          Xl !== null && (e && Xl.alternate !== null && Xp.delete(Xl.key === null ? $r : Xl.key), la = s(Xl, la, $r), Ut === null ? Wn = Xl : Ut.sibling = Xl, Ut = Xl);
        }
        if (e && Xp.forEach(function(rk) {
          return t(O, rk);
        }), Ar()) {
          var nk = $r;
          Qs(O, nk);
        }
        return Wn;
      }
      function Ne(O, P, L, K) {
        if (P !== null && P.tag === Qe) {
          a(O, P.sibling);
          var pe = u(P, L);
          return pe.return = O, pe;
        }
        a(O, P);
        var ce = rE(L, O.mode, K);
        return ce.return = O, ce;
      }
      function we(O, P, L, K) {
        for (var pe = L.key, ce = P; ce !== null; ) {
          if (ce.key === pe) {
            var Ve = L.type;
            if (Ve === fi) {
              if (ce.tag === St) {
                a(O, ce.sibling);
                var Ge = u(ce, L.props.children);
                return Ge.return = O, Ge._debugSource = L._source, Ge._debugOwner = L._owner, Ge;
              }
            } else if (ce.elementType === Ve || // Keep this check inline so it only runs on the false path:
            gR(ce, L) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof Ve == "object" && Ve !== null && Ve.$$typeof === Ie && dC(Ve) === ce.type) {
              a(O, ce.sibling);
              var qt = u(ce, L.props);
              return qt.ref = Sp(O, ce, L), qt.return = O, qt._debugSource = L._source, qt._debugOwner = L._owner, qt;
            }
            a(O, ce);
            break;
          } else
            t(O, ce);
          ce = ce.sibling;
        }
        if (L.type === fi) {
          var zt = Io(L.props.children, O.mode, K, L.key);
          return zt.return = O, zt;
        } else {
          var Wn = nE(L, O.mode, K);
          return Wn.ref = Sp(O, P, L), Wn.return = O, Wn;
        }
      }
      function Tt(O, P, L, K) {
        for (var pe = L.key, ce = P; ce !== null; ) {
          if (ce.key === pe)
            if (ce.tag === Ce && ce.stateNode.containerInfo === L.containerInfo && ce.stateNode.implementation === L.implementation) {
              a(O, ce.sibling);
              var Ve = u(ce, L.children || []);
              return Ve.return = O, Ve;
            } else {
              a(O, ce);
              break;
            }
          else
            t(O, ce);
          ce = ce.sibling;
        }
        var Ge = aE(L, O.mode, K);
        return Ge.return = O, Ge;
      }
      function yt(O, P, L, K) {
        var pe = typeof L == "object" && L !== null && L.type === fi && L.key === null;
        if (pe && (L = L.props.children), typeof L == "object" && L !== null) {
          switch (L.$$typeof) {
            case _r:
              return f(we(O, P, L, K));
            case rr:
              return f(Tt(O, P, L, K));
            case Ie:
              var ce = L._payload, Ve = L._init;
              return yt(O, P, Ve(ce), K);
          }
          if (at(L))
            return H(O, P, L, K);
          if (Xe(L))
            return le(O, P, L, K);
          Ih(O, L);
        }
        return typeof L == "string" && L !== "" || typeof L == "number" ? f(Ne(O, P, "" + L, K)) : (typeof L == "function" && Yh(O), a(O, P));
      }
      return yt;
    }
    var _f = pC(!0), vC = pC(!1);
    function M1(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = ic(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = ic(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function N1(e, t) {
      for (var a = e.child; a !== null; )
        E_(a, t), a = a.sibling;
    }
    var sg = Oo(null), cg;
    cg = {};
    var Qh = null, kf = null, fg = null, Wh = !1;
    function Gh() {
      Qh = null, kf = null, fg = null, Wh = !1;
    }
    function hC() {
      Wh = !0;
    }
    function mC() {
      Wh = !1;
    }
    function yC(e, t, a) {
      aa(sg, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== cg && S("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = cg;
    }
    function dg(e, t) {
      var a = sg.current;
      ra(sg, t), e._currentValue = a;
    }
    function pg(e, t, a) {
      for (var i = e; i !== null; ) {
        var u = i.alternate;
        if (ku(i.childLanes, t) ? u !== null && !ku(u.childLanes, t) && (u.childLanes = Je(u.childLanes, t)) : (i.childLanes = Je(i.childLanes, t), u !== null && (u.childLanes = Je(u.childLanes, t))), i === a)
          break;
        i = i.return;
      }
      i !== a && S("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function z1(e, t, a) {
      U1(e, t, a);
    }
    function U1(e, t, a) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var u = void 0, s = i.dependencies;
        if (s !== null) {
          u = i.child;
          for (var f = s.firstContext; f !== null; ) {
            if (f.context === t) {
              if (i.tag === oe) {
                var p = Ts(a), v = Pu(Kt, p);
                v.tag = Kh;
                var y = i.updateQueue;
                if (y !== null) {
                  var g = y.shared, x = g.pending;
                  x === null ? v.next = v : (v.next = x.next, x.next = v), g.pending = v;
                }
              }
              i.lanes = Je(i.lanes, a);
              var w = i.alternate;
              w !== null && (w.lanes = Je(w.lanes, a)), pg(i.return, a, e), s.lanes = Je(s.lanes, a);
              break;
            }
            f = f.next;
          }
        } else if (i.tag === vt)
          u = i.type === e.type ? null : i.child;
        else if (i.tag === Xt) {
          var N = i.return;
          if (N === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          N.lanes = Je(N.lanes, a);
          var A = N.alternate;
          A !== null && (A.lanes = Je(A.lanes, a)), pg(N, a, e), u = i.sibling;
        } else
          u = i.child;
        if (u !== null)
          u.return = i;
        else
          for (u = i; u !== null; ) {
            if (u === e) {
              u = null;
              break;
            }
            var H = u.sibling;
            if (H !== null) {
              H.return = u.return, u = H;
              break;
            }
            u = u.return;
          }
        i = u;
      }
    }
    function Df(e, t) {
      Qh = e, kf = null, fg = null;
      var a = e.dependencies;
      if (a !== null) {
        var i = a.firstContext;
        i !== null && (Zr(a.lanes, t) && zp(), a.firstContext = null);
      }
    }
    function er(e) {
      Wh && S("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (fg !== e) {
        var a = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (kf === null) {
          if (Qh === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          kf = a, Qh.dependencies = {
            lanes: I,
            firstContext: a
          };
        } else
          kf = kf.next = a;
      }
      return t;
    }
    var Xs = null;
    function vg(e) {
      Xs === null ? Xs = [e] : Xs.push(e);
    }
    function A1() {
      if (Xs !== null) {
        for (var e = 0; e < Xs.length; e++) {
          var t = Xs[e], a = t.interleaved;
          if (a !== null) {
            t.interleaved = null;
            var i = a.next, u = t.pending;
            if (u !== null) {
              var s = u.next;
              u.next = i, a.next = s;
            }
            t.pending = a;
          }
        }
        Xs = null;
      }
    }
    function gC(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, vg(t)) : (a.next = u.next, u.next = a), t.interleaved = a, qh(e, i);
    }
    function F1(e, t, a, i) {
      var u = t.interleaved;
      u === null ? (a.next = a, vg(t)) : (a.next = u.next, u.next = a), t.interleaved = a;
    }
    function j1(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, vg(t)) : (a.next = u.next, u.next = a), t.interleaved = a, qh(e, i);
    }
    function ja(e, t) {
      return qh(e, t);
    }
    var H1 = qh;
    function qh(e, t) {
      e.lanes = Je(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = Je(a.lanes, t)), a === null && (e.flags & (hn | Gr)) !== ke && vR(e);
      for (var i = e, u = e.return; u !== null; )
        u.childLanes = Je(u.childLanes, t), a = u.alternate, a !== null ? a.childLanes = Je(a.childLanes, t) : (u.flags & (hn | Gr)) !== ke && vR(e), i = u, u = u.return;
      if (i.tag === ee) {
        var s = i.stateNode;
        return s;
      } else
        return null;
    }
    var SC = 0, EC = 1, Kh = 2, hg = 3, Xh = !1, mg, Jh;
    mg = !1, Jh = null;
    function yg(e) {
      var t = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: I
        },
        effects: null
      };
      e.updateQueue = t;
    }
    function CC(e, t) {
      var a = t.updateQueue, i = e.updateQueue;
      if (a === i) {
        var u = {
          baseState: i.baseState,
          firstBaseUpdate: i.firstBaseUpdate,
          lastBaseUpdate: i.lastBaseUpdate,
          shared: i.shared,
          effects: i.effects
        };
        t.updateQueue = u;
      }
    }
    function Pu(e, t) {
      var a = {
        eventTime: e,
        lane: t,
        tag: SC,
        payload: null,
        callback: null,
        next: null
      };
      return a;
    }
    function zo(e, t, a) {
      var i = e.updateQueue;
      if (i === null)
        return null;
      var u = i.shared;
      if (Jh === u && !mg && (S("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), mg = !0), Fx()) {
        var s = u.pending;
        return s === null ? t.next = t : (t.next = s.next, s.next = t), u.pending = t, H1(e, a);
      } else
        return j1(e, u, t, a);
    }
    function Zh(e, t, a) {
      var i = t.updateQueue;
      if (i !== null) {
        var u = i.shared;
        if (Md(a)) {
          var s = u.lanes;
          s = zd(s, e.pendingLanes);
          var f = Je(s, a);
          u.lanes = f, ef(e, f);
        }
      }
    }
    function gg(e, t) {
      var a = e.updateQueue, i = e.alternate;
      if (i !== null) {
        var u = i.updateQueue;
        if (a === u) {
          var s = null, f = null, p = a.firstBaseUpdate;
          if (p !== null) {
            var v = p;
            do {
              var y = {
                eventTime: v.eventTime,
                lane: v.lane,
                tag: v.tag,
                payload: v.payload,
                callback: v.callback,
                next: null
              };
              f === null ? s = f = y : (f.next = y, f = y), v = v.next;
            } while (v !== null);
            f === null ? s = f = t : (f.next = t, f = t);
          } else
            s = f = t;
          a = {
            baseState: u.baseState,
            firstBaseUpdate: s,
            lastBaseUpdate: f,
            shared: u.shared,
            effects: u.effects
          }, e.updateQueue = a;
          return;
        }
      }
      var g = a.lastBaseUpdate;
      g === null ? a.firstBaseUpdate = t : g.next = t, a.lastBaseUpdate = t;
    }
    function P1(e, t, a, i, u, s) {
      switch (a.tag) {
        case EC: {
          var f = a.payload;
          if (typeof f == "function") {
            hC();
            var p = f.call(s, i, u);
            {
              if (e.mode & Wt) {
                mn(!0);
                try {
                  f.call(s, i, u);
                } finally {
                  mn(!1);
                }
              }
              mC();
            }
            return p;
          }
          return f;
        }
        case hg:
          e.flags = e.flags & ~Kn | xe;
        case SC: {
          var v = a.payload, y;
          if (typeof v == "function") {
            hC(), y = v.call(s, i, u);
            {
              if (e.mode & Wt) {
                mn(!0);
                try {
                  v.call(s, i, u);
                } finally {
                  mn(!1);
                }
              }
              mC();
            }
          } else
            y = v;
          return y == null ? i : et({}, i, y);
        }
        case Kh:
          return Xh = !0, i;
      }
      return i;
    }
    function em(e, t, a, i) {
      var u = e.updateQueue;
      Xh = !1, Jh = u.shared;
      var s = u.firstBaseUpdate, f = u.lastBaseUpdate, p = u.shared.pending;
      if (p !== null) {
        u.shared.pending = null;
        var v = p, y = v.next;
        v.next = null, f === null ? s = y : f.next = y, f = v;
        var g = e.alternate;
        if (g !== null) {
          var x = g.updateQueue, w = x.lastBaseUpdate;
          w !== f && (w === null ? x.firstBaseUpdate = y : w.next = y, x.lastBaseUpdate = v);
        }
      }
      if (s !== null) {
        var N = u.baseState, A = I, H = null, le = null, Ne = null, we = s;
        do {
          var Tt = we.lane, yt = we.eventTime;
          if (ku(i, Tt)) {
            if (Ne !== null) {
              var P = {
                eventTime: yt,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: kt,
                tag: we.tag,
                payload: we.payload,
                callback: we.callback,
                next: null
              };
              Ne = Ne.next = P;
            }
            N = P1(e, u, we, N, t, a);
            var L = we.callback;
            if (L !== null && // If the update was already committed, we should not queue its
            // callback again.
            we.lane !== kt) {
              e.flags |= nn;
              var K = u.effects;
              K === null ? u.effects = [we] : K.push(we);
            }
          } else {
            var O = {
              eventTime: yt,
              lane: Tt,
              tag: we.tag,
              payload: we.payload,
              callback: we.callback,
              next: null
            };
            Ne === null ? (le = Ne = O, H = N) : Ne = Ne.next = O, A = Je(A, Tt);
          }
          if (we = we.next, we === null) {
            if (p = u.shared.pending, p === null)
              break;
            var pe = p, ce = pe.next;
            pe.next = null, we = ce, u.lastBaseUpdate = pe, u.shared.pending = null;
          }
        } while (!0);
        Ne === null && (H = N), u.baseState = H, u.firstBaseUpdate = le, u.lastBaseUpdate = Ne;
        var Ve = u.shared.interleaved;
        if (Ve !== null) {
          var Ge = Ve;
          do
            A = Je(A, Ge.lane), Ge = Ge.next;
          while (Ge !== Ve);
        } else s === null && (u.shared.lanes = I);
        Qp(A), e.lanes = A, e.memoizedState = N;
      }
      Jh = null;
    }
    function V1(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function RC() {
      Xh = !1;
    }
    function tm() {
      return Xh;
    }
    function TC(e, t, a) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u], f = s.callback;
          f !== null && (s.callback = null, V1(f, a));
        }
    }
    var Ep = {}, Uo = Oo(Ep), Cp = Oo(Ep), nm = Oo(Ep);
    function rm(e) {
      if (e === Ep)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function wC() {
      var e = rm(nm.current);
      return e;
    }
    function Sg(e, t) {
      aa(nm, t, e), aa(Cp, e, e), aa(Uo, Ep, e);
      var a = aw(t);
      ra(Uo, e), aa(Uo, a, e);
    }
    function Of(e) {
      ra(Uo, e), ra(Cp, e), ra(nm, e);
    }
    function Eg() {
      var e = rm(Uo.current);
      return e;
    }
    function bC(e) {
      rm(nm.current);
      var t = rm(Uo.current), a = iw(t, e.type);
      t !== a && (aa(Cp, e, e), aa(Uo, a, e));
    }
    function Cg(e) {
      Cp.current === e && (ra(Uo, e), ra(Cp, e));
    }
    var B1 = 0, xC = 1, _C = 1, Rp = 2, al = Oo(B1);
    function Rg(e, t) {
      return (e & t) !== 0;
    }
    function Lf(e) {
      return e & xC;
    }
    function Tg(e, t) {
      return e & xC | t;
    }
    function $1(e, t) {
      return e | t;
    }
    function Ao(e, t) {
      aa(al, t, e);
    }
    function Mf(e) {
      ra(al, e);
    }
    function I1(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function am(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === _e) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || IE(i) || Vy(i))
              return t;
          }
        } else if (t.tag === an && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var u = (t.flags & xe) !== ke;
          if (u)
            return t;
        } else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e)
          return null;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return null;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return null;
    }
    var Ha = (
      /*   */
      0
    ), cr = (
      /* */
      1
    ), Il = (
      /*  */
      2
    ), fr = (
      /*    */
      4
    ), Fr = (
      /*   */
      8
    ), wg = [];
    function bg() {
      for (var e = 0; e < wg.length; e++) {
        var t = wg[e];
        t._workInProgressVersionPrimary = null;
      }
      wg.length = 0;
    }
    function Y1(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var de = _.ReactCurrentDispatcher, Tp = _.ReactCurrentBatchConfig, xg, Nf;
    xg = /* @__PURE__ */ new Set();
    var Js = I, Gt = null, dr = null, pr = null, im = !1, wp = !1, bp = 0, Q1 = 0, W1 = 25, B = null, zi = null, Fo = -1, _g = !1;
    function Pt() {
      {
        var e = B;
        zi === null ? zi = [e] : zi.push(e);
      }
    }
    function te() {
      {
        var e = B;
        zi !== null && (Fo++, zi[Fo] !== e && G1(e));
      }
    }
    function zf(e) {
      e != null && !at(e) && S("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", B, typeof e);
    }
    function G1(e) {
      {
        var t = $e(Gt);
        if (!xg.has(t) && (xg.add(t), zi !== null)) {
          for (var a = "", i = 30, u = 0; u <= Fo; u++) {
            for (var s = zi[u], f = u === Fo ? e : s, p = u + 1 + ". " + s; p.length < i; )
              p += " ";
            p += f + `
`, a += p;
          }
          S(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`, t, a);
        }
      }
    }
    function ia() {
      throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    function kg(e, t) {
      if (_g)
        return !1;
      if (t === null)
        return S("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", B), !1;
      e.length !== t.length && S(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, B, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!G(e[a], t[a]))
          return !1;
      return !0;
    }
    function Uf(e, t, a, i, u, s) {
      Js = s, Gt = t, zi = e !== null ? e._debugHookTypes : null, Fo = -1, _g = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = I, e !== null && e.memoizedState !== null ? de.current = qC : zi !== null ? de.current = GC : de.current = WC;
      var f = a(i, u);
      if (wp) {
        var p = 0;
        do {
          if (wp = !1, bp = 0, p >= W1)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          p += 1, _g = !1, dr = null, pr = null, t.updateQueue = null, Fo = -1, de.current = KC, f = a(i, u);
        } while (wp);
      }
      de.current = gm, t._debugHookTypes = zi;
      var v = dr !== null && dr.next !== null;
      if (Js = I, Gt = null, dr = null, pr = null, B = null, zi = null, Fo = -1, e !== null && (e.flags & Nn) !== (t.flags & Nn) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & ot) !== De && S("Internal React error: Expected static flag was missing. Please notify the React team."), im = !1, v)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return f;
    }
    function Af() {
      var e = bp !== 0;
      return bp = 0, e;
    }
    function kC(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & Mt) !== De ? t.flags &= -50333701 : t.flags &= -2053, e.lanes = ws(e.lanes, a);
    }
    function DC() {
      if (de.current = gm, im) {
        for (var e = Gt.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        im = !1;
      }
      Js = I, Gt = null, dr = null, pr = null, zi = null, Fo = -1, B = null, BC = !1, wp = !1, bp = 0;
    }
    function Yl() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return pr === null ? Gt.memoizedState = pr = e : pr = pr.next = e, pr;
    }
    function Ui() {
      var e;
      if (dr === null) {
        var t = Gt.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = dr.next;
      var a;
      if (pr === null ? a = Gt.memoizedState : a = pr.next, a !== null)
        pr = a, a = pr.next, dr = e;
      else {
        if (e === null)
          throw new Error("Rendered more hooks than during the previous render.");
        dr = e;
        var i = {
          memoizedState: dr.memoizedState,
          baseState: dr.baseState,
          baseQueue: dr.baseQueue,
          queue: dr.queue,
          next: null
        };
        pr === null ? Gt.memoizedState = pr = i : pr = pr.next = i;
      }
      return pr;
    }
    function OC() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function Dg(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function Og(e, t, a) {
      var i = Yl(), u;
      a !== void 0 ? u = a(t) : u = t, i.memoizedState = i.baseState = u;
      var s = {
        pending: null,
        interleaved: null,
        lanes: I,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: u
      };
      i.queue = s;
      var f = s.dispatch = J1.bind(null, Gt, s);
      return [i.memoizedState, f];
    }
    function Lg(e, t, a) {
      var i = Ui(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var s = dr, f = s.baseQueue, p = u.pending;
      if (p !== null) {
        if (f !== null) {
          var v = f.next, y = p.next;
          f.next = y, p.next = v;
        }
        s.baseQueue !== f && S("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), s.baseQueue = f = p, u.pending = null;
      }
      if (f !== null) {
        var g = f.next, x = s.baseState, w = null, N = null, A = null, H = g;
        do {
          var le = H.lane;
          if (ku(Js, le)) {
            if (A !== null) {
              var we = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: kt,
                action: H.action,
                hasEagerState: H.hasEagerState,
                eagerState: H.eagerState,
                next: null
              };
              A = A.next = we;
            }
            if (H.hasEagerState)
              x = H.eagerState;
            else {
              var Tt = H.action;
              x = e(x, Tt);
            }
          } else {
            var Ne = {
              lane: le,
              action: H.action,
              hasEagerState: H.hasEagerState,
              eagerState: H.eagerState,
              next: null
            };
            A === null ? (N = A = Ne, w = x) : A = A.next = Ne, Gt.lanes = Je(Gt.lanes, le), Qp(le);
          }
          H = H.next;
        } while (H !== null && H !== g);
        A === null ? w = x : A.next = N, G(x, i.memoizedState) || zp(), i.memoizedState = x, i.baseState = w, i.baseQueue = A, u.lastRenderedState = x;
      }
      var yt = u.interleaved;
      if (yt !== null) {
        var O = yt;
        do {
          var P = O.lane;
          Gt.lanes = Je(Gt.lanes, P), Qp(P), O = O.next;
        } while (O !== yt);
      } else f === null && (u.lanes = I);
      var L = u.dispatch;
      return [i.memoizedState, L];
    }
    function Mg(e, t, a) {
      var i = Ui(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var s = u.dispatch, f = u.pending, p = i.memoizedState;
      if (f !== null) {
        u.pending = null;
        var v = f.next, y = v;
        do {
          var g = y.action;
          p = e(p, g), y = y.next;
        } while (y !== v);
        G(p, i.memoizedState) || zp(), i.memoizedState = p, i.baseQueue === null && (i.baseState = p), u.lastRenderedState = p;
      }
      return [p, s];
    }
    function xk(e, t, a) {
    }
    function _k(e, t, a) {
    }
    function Ng(e, t, a) {
      var i = Gt, u = Yl(), s, f = Ar();
      if (f) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        s = a(), Nf || s !== a() && (S("The result of getServerSnapshot should be cached to avoid an infinite loop"), Nf = !0);
      } else {
        if (s = t(), !Nf) {
          var p = t();
          G(s, p) || (S("The result of getSnapshot should be cached to avoid an infinite loop"), Nf = !0);
        }
        var v = Fm();
        if (v === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Jc(v, Js) || LC(i, t, s);
      }
      u.memoizedState = s;
      var y = {
        value: s,
        getSnapshot: t
      };
      return u.queue = y, cm(NC.bind(null, i, y, e), [e]), i.flags |= Wr, xp(cr | Fr, MC.bind(null, i, y, s, t), void 0, null), s;
    }
    function lm(e, t, a) {
      var i = Gt, u = Ui(), s = t();
      if (!Nf) {
        var f = t();
        G(s, f) || (S("The result of getSnapshot should be cached to avoid an infinite loop"), Nf = !0);
      }
      var p = u.memoizedState, v = !G(p, s);
      v && (u.memoizedState = s, zp());
      var y = u.queue;
      if (kp(NC.bind(null, i, y, e), [e]), y.getSnapshot !== t || v || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      pr !== null && pr.memoizedState.tag & cr) {
        i.flags |= Wr, xp(cr | Fr, MC.bind(null, i, y, s, t), void 0, null);
        var g = Fm();
        if (g === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Jc(g, Js) || LC(i, t, s);
      }
      return s;
    }
    function LC(e, t, a) {
      e.flags |= vo;
      var i = {
        getSnapshot: t,
        value: a
      }, u = Gt.updateQueue;
      if (u === null)
        u = OC(), Gt.updateQueue = u, u.stores = [i];
      else {
        var s = u.stores;
        s === null ? u.stores = [i] : s.push(i);
      }
    }
    function MC(e, t, a, i) {
      t.value = a, t.getSnapshot = i, zC(t) && UC(e);
    }
    function NC(e, t, a) {
      var i = function() {
        zC(t) && UC(e);
      };
      return a(i);
    }
    function zC(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var i = t();
        return !G(a, i);
      } catch {
        return !0;
      }
    }
    function UC(e) {
      var t = ja(e, je);
      t !== null && yr(t, e, je, Kt);
    }
    function um(e) {
      var t = Yl();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: I,
        dispatch: null,
        lastRenderedReducer: Dg,
        lastRenderedState: e
      };
      t.queue = a;
      var i = a.dispatch = Z1.bind(null, Gt, a);
      return [t.memoizedState, i];
    }
    function zg(e) {
      return Lg(Dg);
    }
    function Ug(e) {
      return Mg(Dg);
    }
    function xp(e, t, a, i) {
      var u = {
        tag: e,
        create: t,
        destroy: a,
        deps: i,
        // Circular
        next: null
      }, s = Gt.updateQueue;
      if (s === null)
        s = OC(), Gt.updateQueue = s, s.lastEffect = u.next = u;
      else {
        var f = s.lastEffect;
        if (f === null)
          s.lastEffect = u.next = u;
        else {
          var p = f.next;
          f.next = u, u.next = p, s.lastEffect = u;
        }
      }
      return u;
    }
    function Ag(e) {
      var t = Yl();
      {
        var a = {
          current: e
        };
        return t.memoizedState = a, a;
      }
    }
    function om(e) {
      var t = Ui();
      return t.memoizedState;
    }
    function _p(e, t, a, i) {
      var u = Yl(), s = i === void 0 ? null : i;
      Gt.flags |= e, u.memoizedState = xp(cr | t, a, void 0, s);
    }
    function sm(e, t, a, i) {
      var u = Ui(), s = i === void 0 ? null : i, f = void 0;
      if (dr !== null) {
        var p = dr.memoizedState;
        if (f = p.destroy, s !== null) {
          var v = p.deps;
          if (kg(s, v)) {
            u.memoizedState = xp(t, a, f, s);
            return;
          }
        }
      }
      Gt.flags |= e, u.memoizedState = xp(cr | t, a, f, s);
    }
    function cm(e, t) {
      return (Gt.mode & Mt) !== De ? _p(Ri | Wr | bc, Fr, e, t) : _p(Wr | bc, Fr, e, t);
    }
    function kp(e, t) {
      return sm(Wr, Fr, e, t);
    }
    function Fg(e, t) {
      return _p(Et, Il, e, t);
    }
    function fm(e, t) {
      return sm(Et, Il, e, t);
    }
    function jg(e, t) {
      var a = Et;
      return a |= Qi, (Gt.mode & Mt) !== De && (a |= xl), _p(a, fr, e, t);
    }
    function dm(e, t) {
      return sm(Et, fr, e, t);
    }
    function AC(e, t) {
      if (typeof t == "function") {
        var a = t, i = e();
        return a(i), function() {
          a(null);
        };
      } else if (t != null) {
        var u = t;
        u.hasOwnProperty("current") || S("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(u).join(", ") + "}");
        var s = e();
        return u.current = s, function() {
          u.current = null;
        };
      }
    }
    function Hg(e, t, a) {
      typeof t != "function" && S("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null, u = Et;
      return u |= Qi, (Gt.mode & Mt) !== De && (u |= xl), _p(u, fr, AC.bind(null, t, e), i);
    }
    function pm(e, t, a) {
      typeof t != "function" && S("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return sm(Et, fr, AC.bind(null, t, e), i);
    }
    function q1(e, t) {
    }
    var vm = q1;
    function Pg(e, t) {
      var a = Yl(), i = t === void 0 ? null : t;
      return a.memoizedState = [e, i], e;
    }
    function hm(e, t) {
      var a = Ui(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (kg(i, s))
          return u[0];
      }
      return a.memoizedState = [e, i], e;
    }
    function Vg(e, t) {
      var a = Yl(), i = t === void 0 ? null : t, u = e();
      return a.memoizedState = [u, i], u;
    }
    function mm(e, t) {
      var a = Ui(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (kg(i, s))
          return u[0];
      }
      var f = e();
      return a.memoizedState = [f, i], f;
    }
    function Bg(e) {
      var t = Yl();
      return t.memoizedState = e, e;
    }
    function FC(e) {
      var t = Ui(), a = dr, i = a.memoizedState;
      return HC(t, i, e);
    }
    function jC(e) {
      var t = Ui();
      if (dr === null)
        return t.memoizedState = e, e;
      var a = dr.memoizedState;
      return HC(t, a, e);
    }
    function HC(e, t, a) {
      var i = !Od(Js);
      if (i) {
        if (!G(a, t)) {
          var u = Nd();
          Gt.lanes = Je(Gt.lanes, u), Qp(u), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, zp()), e.memoizedState = a, a;
    }
    function K1(e, t, a) {
      var i = Ua();
      An(Wv(i, xi)), e(!0);
      var u = Tp.transition;
      Tp.transition = {};
      var s = Tp.transition;
      Tp.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (An(i), Tp.transition = u, u === null && s._updatedFibers) {
          var f = s._updatedFibers.size;
          f > 10 && be("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), s._updatedFibers.clear();
        }
      }
    }
    function $g() {
      var e = um(!1), t = e[0], a = e[1], i = K1.bind(null, a), u = Yl();
      return u.memoizedState = i, [t, i];
    }
    function PC() {
      var e = zg(), t = e[0], a = Ui(), i = a.memoizedState;
      return [t, i];
    }
    function VC() {
      var e = Ug(), t = e[0], a = Ui(), i = a.memoizedState;
      return [t, i];
    }
    var BC = !1;
    function X1() {
      return BC;
    }
    function Ig() {
      var e = Yl(), t = Fm(), a = t.identifierPrefix, i;
      if (Ar()) {
        var u = v1();
        i = ":" + a + "R" + u;
        var s = bp++;
        s > 0 && (i += "H" + s.toString(32)), i += ":";
      } else {
        var f = Q1++;
        i = ":" + a + "r" + f.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function ym() {
      var e = Ui(), t = e.memoizedState;
      return t;
    }
    function J1(e, t, a) {
      typeof arguments[3] == "function" && S("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Bo(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if ($C(e))
        IC(t, u);
      else {
        var s = gC(e, t, u, i);
        if (s !== null) {
          var f = Ea();
          yr(s, e, i, f), YC(s, t, i);
        }
      }
      QC(e, i);
    }
    function Z1(e, t, a) {
      typeof arguments[3] == "function" && S("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Bo(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if ($C(e))
        IC(t, u);
      else {
        var s = e.alternate;
        if (e.lanes === I && (s === null || s.lanes === I)) {
          var f = t.lastRenderedReducer;
          if (f !== null) {
            var p;
            p = de.current, de.current = il;
            try {
              var v = t.lastRenderedState, y = f(v, a);
              if (u.hasEagerState = !0, u.eagerState = y, G(y, v)) {
                F1(e, t, u, i);
                return;
              }
            } catch {
            } finally {
              de.current = p;
            }
          }
        }
        var g = gC(e, t, u, i);
        if (g !== null) {
          var x = Ea();
          yr(g, e, i, x), YC(g, t, i);
        }
      }
      QC(e, i);
    }
    function $C(e) {
      var t = e.alternate;
      return e === Gt || t !== null && t === Gt;
    }
    function IC(e, t) {
      wp = im = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function YC(e, t, a) {
      if (Md(a)) {
        var i = t.lanes;
        i = zd(i, e.pendingLanes);
        var u = Je(i, a);
        t.lanes = u, ef(e, u);
      }
    }
    function QC(e, t, a) {
      vs(e, t);
    }
    var gm = {
      readContext: er,
      useCallback: ia,
      useContext: ia,
      useEffect: ia,
      useImperativeHandle: ia,
      useInsertionEffect: ia,
      useLayoutEffect: ia,
      useMemo: ia,
      useReducer: ia,
      useRef: ia,
      useState: ia,
      useDebugValue: ia,
      useDeferredValue: ia,
      useTransition: ia,
      useMutableSource: ia,
      useSyncExternalStore: ia,
      useId: ia,
      unstable_isNewReconciler: J
    }, WC = null, GC = null, qC = null, KC = null, Ql = null, il = null, Sm = null;
    {
      var Yg = function() {
        S("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, Ye = function() {
        S("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      WC = {
        readContext: function(e) {
          return er(e);
        },
        useCallback: function(e, t) {
          return B = "useCallback", Pt(), zf(t), Pg(e, t);
        },
        useContext: function(e) {
          return B = "useContext", Pt(), er(e);
        },
        useEffect: function(e, t) {
          return B = "useEffect", Pt(), zf(t), cm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return B = "useImperativeHandle", Pt(), zf(a), Hg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return B = "useInsertionEffect", Pt(), zf(t), Fg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return B = "useLayoutEffect", Pt(), zf(t), jg(e, t);
        },
        useMemo: function(e, t) {
          B = "useMemo", Pt(), zf(t);
          var a = de.current;
          de.current = Ql;
          try {
            return Vg(e, t);
          } finally {
            de.current = a;
          }
        },
        useReducer: function(e, t, a) {
          B = "useReducer", Pt();
          var i = de.current;
          de.current = Ql;
          try {
            return Og(e, t, a);
          } finally {
            de.current = i;
          }
        },
        useRef: function(e) {
          return B = "useRef", Pt(), Ag(e);
        },
        useState: function(e) {
          B = "useState", Pt();
          var t = de.current;
          de.current = Ql;
          try {
            return um(e);
          } finally {
            de.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return B = "useDebugValue", Pt(), void 0;
        },
        useDeferredValue: function(e) {
          return B = "useDeferredValue", Pt(), Bg(e);
        },
        useTransition: function() {
          return B = "useTransition", Pt(), $g();
        },
        useMutableSource: function(e, t, a) {
          return B = "useMutableSource", Pt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return B = "useSyncExternalStore", Pt(), Ng(e, t, a);
        },
        useId: function() {
          return B = "useId", Pt(), Ig();
        },
        unstable_isNewReconciler: J
      }, GC = {
        readContext: function(e) {
          return er(e);
        },
        useCallback: function(e, t) {
          return B = "useCallback", te(), Pg(e, t);
        },
        useContext: function(e) {
          return B = "useContext", te(), er(e);
        },
        useEffect: function(e, t) {
          return B = "useEffect", te(), cm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return B = "useImperativeHandle", te(), Hg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return B = "useInsertionEffect", te(), Fg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return B = "useLayoutEffect", te(), jg(e, t);
        },
        useMemo: function(e, t) {
          B = "useMemo", te();
          var a = de.current;
          de.current = Ql;
          try {
            return Vg(e, t);
          } finally {
            de.current = a;
          }
        },
        useReducer: function(e, t, a) {
          B = "useReducer", te();
          var i = de.current;
          de.current = Ql;
          try {
            return Og(e, t, a);
          } finally {
            de.current = i;
          }
        },
        useRef: function(e) {
          return B = "useRef", te(), Ag(e);
        },
        useState: function(e) {
          B = "useState", te();
          var t = de.current;
          de.current = Ql;
          try {
            return um(e);
          } finally {
            de.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return B = "useDebugValue", te(), void 0;
        },
        useDeferredValue: function(e) {
          return B = "useDeferredValue", te(), Bg(e);
        },
        useTransition: function() {
          return B = "useTransition", te(), $g();
        },
        useMutableSource: function(e, t, a) {
          return B = "useMutableSource", te(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return B = "useSyncExternalStore", te(), Ng(e, t, a);
        },
        useId: function() {
          return B = "useId", te(), Ig();
        },
        unstable_isNewReconciler: J
      }, qC = {
        readContext: function(e) {
          return er(e);
        },
        useCallback: function(e, t) {
          return B = "useCallback", te(), hm(e, t);
        },
        useContext: function(e) {
          return B = "useContext", te(), er(e);
        },
        useEffect: function(e, t) {
          return B = "useEffect", te(), kp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return B = "useImperativeHandle", te(), pm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return B = "useInsertionEffect", te(), fm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return B = "useLayoutEffect", te(), dm(e, t);
        },
        useMemo: function(e, t) {
          B = "useMemo", te();
          var a = de.current;
          de.current = il;
          try {
            return mm(e, t);
          } finally {
            de.current = a;
          }
        },
        useReducer: function(e, t, a) {
          B = "useReducer", te();
          var i = de.current;
          de.current = il;
          try {
            return Lg(e, t, a);
          } finally {
            de.current = i;
          }
        },
        useRef: function(e) {
          return B = "useRef", te(), om();
        },
        useState: function(e) {
          B = "useState", te();
          var t = de.current;
          de.current = il;
          try {
            return zg(e);
          } finally {
            de.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return B = "useDebugValue", te(), vm();
        },
        useDeferredValue: function(e) {
          return B = "useDeferredValue", te(), FC(e);
        },
        useTransition: function() {
          return B = "useTransition", te(), PC();
        },
        useMutableSource: function(e, t, a) {
          return B = "useMutableSource", te(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return B = "useSyncExternalStore", te(), lm(e, t);
        },
        useId: function() {
          return B = "useId", te(), ym();
        },
        unstable_isNewReconciler: J
      }, KC = {
        readContext: function(e) {
          return er(e);
        },
        useCallback: function(e, t) {
          return B = "useCallback", te(), hm(e, t);
        },
        useContext: function(e) {
          return B = "useContext", te(), er(e);
        },
        useEffect: function(e, t) {
          return B = "useEffect", te(), kp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return B = "useImperativeHandle", te(), pm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return B = "useInsertionEffect", te(), fm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return B = "useLayoutEffect", te(), dm(e, t);
        },
        useMemo: function(e, t) {
          B = "useMemo", te();
          var a = de.current;
          de.current = Sm;
          try {
            return mm(e, t);
          } finally {
            de.current = a;
          }
        },
        useReducer: function(e, t, a) {
          B = "useReducer", te();
          var i = de.current;
          de.current = Sm;
          try {
            return Mg(e, t, a);
          } finally {
            de.current = i;
          }
        },
        useRef: function(e) {
          return B = "useRef", te(), om();
        },
        useState: function(e) {
          B = "useState", te();
          var t = de.current;
          de.current = Sm;
          try {
            return Ug(e);
          } finally {
            de.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return B = "useDebugValue", te(), vm();
        },
        useDeferredValue: function(e) {
          return B = "useDeferredValue", te(), jC(e);
        },
        useTransition: function() {
          return B = "useTransition", te(), VC();
        },
        useMutableSource: function(e, t, a) {
          return B = "useMutableSource", te(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return B = "useSyncExternalStore", te(), lm(e, t);
        },
        useId: function() {
          return B = "useId", te(), ym();
        },
        unstable_isNewReconciler: J
      }, Ql = {
        readContext: function(e) {
          return Yg(), er(e);
        },
        useCallback: function(e, t) {
          return B = "useCallback", Ye(), Pt(), Pg(e, t);
        },
        useContext: function(e) {
          return B = "useContext", Ye(), Pt(), er(e);
        },
        useEffect: function(e, t) {
          return B = "useEffect", Ye(), Pt(), cm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return B = "useImperativeHandle", Ye(), Pt(), Hg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return B = "useInsertionEffect", Ye(), Pt(), Fg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return B = "useLayoutEffect", Ye(), Pt(), jg(e, t);
        },
        useMemo: function(e, t) {
          B = "useMemo", Ye(), Pt();
          var a = de.current;
          de.current = Ql;
          try {
            return Vg(e, t);
          } finally {
            de.current = a;
          }
        },
        useReducer: function(e, t, a) {
          B = "useReducer", Ye(), Pt();
          var i = de.current;
          de.current = Ql;
          try {
            return Og(e, t, a);
          } finally {
            de.current = i;
          }
        },
        useRef: function(e) {
          return B = "useRef", Ye(), Pt(), Ag(e);
        },
        useState: function(e) {
          B = "useState", Ye(), Pt();
          var t = de.current;
          de.current = Ql;
          try {
            return um(e);
          } finally {
            de.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return B = "useDebugValue", Ye(), Pt(), void 0;
        },
        useDeferredValue: function(e) {
          return B = "useDeferredValue", Ye(), Pt(), Bg(e);
        },
        useTransition: function() {
          return B = "useTransition", Ye(), Pt(), $g();
        },
        useMutableSource: function(e, t, a) {
          return B = "useMutableSource", Ye(), Pt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return B = "useSyncExternalStore", Ye(), Pt(), Ng(e, t, a);
        },
        useId: function() {
          return B = "useId", Ye(), Pt(), Ig();
        },
        unstable_isNewReconciler: J
      }, il = {
        readContext: function(e) {
          return Yg(), er(e);
        },
        useCallback: function(e, t) {
          return B = "useCallback", Ye(), te(), hm(e, t);
        },
        useContext: function(e) {
          return B = "useContext", Ye(), te(), er(e);
        },
        useEffect: function(e, t) {
          return B = "useEffect", Ye(), te(), kp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return B = "useImperativeHandle", Ye(), te(), pm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return B = "useInsertionEffect", Ye(), te(), fm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return B = "useLayoutEffect", Ye(), te(), dm(e, t);
        },
        useMemo: function(e, t) {
          B = "useMemo", Ye(), te();
          var a = de.current;
          de.current = il;
          try {
            return mm(e, t);
          } finally {
            de.current = a;
          }
        },
        useReducer: function(e, t, a) {
          B = "useReducer", Ye(), te();
          var i = de.current;
          de.current = il;
          try {
            return Lg(e, t, a);
          } finally {
            de.current = i;
          }
        },
        useRef: function(e) {
          return B = "useRef", Ye(), te(), om();
        },
        useState: function(e) {
          B = "useState", Ye(), te();
          var t = de.current;
          de.current = il;
          try {
            return zg(e);
          } finally {
            de.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return B = "useDebugValue", Ye(), te(), vm();
        },
        useDeferredValue: function(e) {
          return B = "useDeferredValue", Ye(), te(), FC(e);
        },
        useTransition: function() {
          return B = "useTransition", Ye(), te(), PC();
        },
        useMutableSource: function(e, t, a) {
          return B = "useMutableSource", Ye(), te(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return B = "useSyncExternalStore", Ye(), te(), lm(e, t);
        },
        useId: function() {
          return B = "useId", Ye(), te(), ym();
        },
        unstable_isNewReconciler: J
      }, Sm = {
        readContext: function(e) {
          return Yg(), er(e);
        },
        useCallback: function(e, t) {
          return B = "useCallback", Ye(), te(), hm(e, t);
        },
        useContext: function(e) {
          return B = "useContext", Ye(), te(), er(e);
        },
        useEffect: function(e, t) {
          return B = "useEffect", Ye(), te(), kp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return B = "useImperativeHandle", Ye(), te(), pm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return B = "useInsertionEffect", Ye(), te(), fm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return B = "useLayoutEffect", Ye(), te(), dm(e, t);
        },
        useMemo: function(e, t) {
          B = "useMemo", Ye(), te();
          var a = de.current;
          de.current = il;
          try {
            return mm(e, t);
          } finally {
            de.current = a;
          }
        },
        useReducer: function(e, t, a) {
          B = "useReducer", Ye(), te();
          var i = de.current;
          de.current = il;
          try {
            return Mg(e, t, a);
          } finally {
            de.current = i;
          }
        },
        useRef: function(e) {
          return B = "useRef", Ye(), te(), om();
        },
        useState: function(e) {
          B = "useState", Ye(), te();
          var t = de.current;
          de.current = il;
          try {
            return Ug(e);
          } finally {
            de.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return B = "useDebugValue", Ye(), te(), vm();
        },
        useDeferredValue: function(e) {
          return B = "useDeferredValue", Ye(), te(), jC(e);
        },
        useTransition: function() {
          return B = "useTransition", Ye(), te(), VC();
        },
        useMutableSource: function(e, t, a) {
          return B = "useMutableSource", Ye(), te(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return B = "useSyncExternalStore", Ye(), te(), lm(e, t);
        },
        useId: function() {
          return B = "useId", Ye(), te(), ym();
        },
        unstable_isNewReconciler: J
      };
    }
    var jo = F.unstable_now, XC = 0, Em = -1, Dp = -1, Cm = -1, Qg = !1, Rm = !1;
    function JC() {
      return Qg;
    }
    function eb() {
      Rm = !0;
    }
    function tb() {
      Qg = !1, Rm = !1;
    }
    function nb() {
      Qg = Rm, Rm = !1;
    }
    function ZC() {
      return XC;
    }
    function e0() {
      XC = jo();
    }
    function Wg(e) {
      Dp = jo(), e.actualStartTime < 0 && (e.actualStartTime = jo());
    }
    function t0(e) {
      Dp = -1;
    }
    function Tm(e, t) {
      if (Dp >= 0) {
        var a = jo() - Dp;
        e.actualDuration += a, t && (e.selfBaseDuration = a), Dp = -1;
      }
    }
    function Wl(e) {
      if (Em >= 0) {
        var t = jo() - Em;
        Em = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case ee:
              var i = a.stateNode;
              i.effectDuration += t;
              return;
            case mt:
              var u = a.stateNode;
              u.effectDuration += t;
              return;
          }
          a = a.return;
        }
      }
    }
    function Gg(e) {
      if (Cm >= 0) {
        var t = jo() - Cm;
        Cm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case ee:
              var i = a.stateNode;
              i !== null && (i.passiveEffectDuration += t);
              return;
            case mt:
              var u = a.stateNode;
              u !== null && (u.passiveEffectDuration += t);
              return;
          }
          a = a.return;
        }
      }
    }
    function Gl() {
      Em = jo();
    }
    function qg() {
      Cm = jo();
    }
    function Kg(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function ll(e, t) {
      if (e && e.defaultProps) {
        var a = et({}, t), i = e.defaultProps;
        for (var u in i)
          a[u] === void 0 && (a[u] = i[u]);
        return a;
      }
      return t;
    }
    var Xg = {}, Jg, Zg, eS, tS, nS, n0, wm, rS, aS, iS, Op;
    {
      Jg = /* @__PURE__ */ new Set(), Zg = /* @__PURE__ */ new Set(), eS = /* @__PURE__ */ new Set(), tS = /* @__PURE__ */ new Set(), rS = /* @__PURE__ */ new Set(), nS = /* @__PURE__ */ new Set(), aS = /* @__PURE__ */ new Set(), iS = /* @__PURE__ */ new Set(), Op = /* @__PURE__ */ new Set();
      var r0 = /* @__PURE__ */ new Set();
      wm = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          r0.has(a) || (r0.add(a), S("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, n0 = function(e, t) {
        if (t === void 0) {
          var a = wt(e) || "Component";
          nS.has(a) || (nS.add(a), S("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      }, Object.defineProperty(Xg, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(Xg);
    }
    function lS(e, t, a, i) {
      var u = e.memoizedState, s = a(i, u);
      {
        if (e.mode & Wt) {
          mn(!0);
          try {
            s = a(i, u);
          } finally {
            mn(!1);
          }
        }
        n0(t, s);
      }
      var f = s == null ? u : et({}, u, s);
      if (e.memoizedState = f, e.lanes === I) {
        var p = e.updateQueue;
        p.baseState = f;
      }
    }
    var uS = {
      isMounted: Lv,
      enqueueSetState: function(e, t, a) {
        var i = po(e), u = Ea(), s = Bo(i), f = Pu(u, s);
        f.payload = t, a != null && (wm(a, "setState"), f.callback = a);
        var p = zo(i, f, s);
        p !== null && (yr(p, i, s, u), Zh(p, i, s)), vs(i, s);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = po(e), u = Ea(), s = Bo(i), f = Pu(u, s);
        f.tag = EC, f.payload = t, a != null && (wm(a, "replaceState"), f.callback = a);
        var p = zo(i, f, s);
        p !== null && (yr(p, i, s, u), Zh(p, i, s)), vs(i, s);
      },
      enqueueForceUpdate: function(e, t) {
        var a = po(e), i = Ea(), u = Bo(a), s = Pu(i, u);
        s.tag = Kh, t != null && (wm(t, "forceUpdate"), s.callback = t);
        var f = zo(a, s, u);
        f !== null && (yr(f, a, u, i), Zh(f, a, u)), Mc(a, u);
      }
    };
    function a0(e, t, a, i, u, s, f) {
      var p = e.stateNode;
      if (typeof p.shouldComponentUpdate == "function") {
        var v = p.shouldComponentUpdate(i, s, f);
        {
          if (e.mode & Wt) {
            mn(!0);
            try {
              v = p.shouldComponentUpdate(i, s, f);
            } finally {
              mn(!1);
            }
          }
          v === void 0 && S("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", wt(t) || "Component");
        }
        return v;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !ye(a, i) || !ye(u, s) : !0;
    }
    function rb(e, t, a) {
      var i = e.stateNode;
      {
        var u = wt(t) || "Component", s = i.render;
        s || (t.prototype && typeof t.prototype.render == "function" ? S("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", u) : S("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", u)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && S("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", u), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && S("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", u), i.propTypes && S("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", u), i.contextType && S("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", u), t.childContextTypes && !Op.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & Wt) === De && (Op.add(t), S(`%s uses the legacy childContextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() instead

.Learn more about this warning here: https://reactjs.org/link/legacy-context`, u)), t.contextTypes && !Op.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & Wt) === De && (Op.add(t), S(`%s uses the legacy contextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() with static contextType instead.

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u)), i.contextTypes && S("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", u), t.contextType && t.contextTypes && !aS.has(t) && (aS.add(t), S("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", u)), typeof i.componentShouldUpdate == "function" && S("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", u), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate != "undefined" && S("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", wt(t) || "A pure component"), typeof i.componentDidUnmount == "function" && S("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", u), typeof i.componentDidReceiveProps == "function" && S("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", u), typeof i.componentWillRecieveProps == "function" && S("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", u), typeof i.UNSAFE_componentWillRecieveProps == "function" && S("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", u);
        var f = i.props !== a;
        i.props !== void 0 && f && S("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", u, u), i.defaultProps && S("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", u, u), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !eS.has(t) && (eS.add(t), S("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", wt(t))), typeof i.getDerivedStateFromProps == "function" && S("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof i.getDerivedStateFromError == "function" && S("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof t.getSnapshotBeforeUpdate == "function" && S("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", u);
        var p = i.state;
        p && (typeof p != "object" || at(p)) && S("%s.state: must be set to an object or null", u), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && S("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", u);
      }
    }
    function i0(e, t) {
      t.updater = uS, e.stateNode = t, vu(t, e), t._reactInternalInstance = Xg;
    }
    function l0(e, t, a) {
      var i = !1, u = li, s = li, f = t.contextType;
      if ("contextType" in t) {
        var p = (
          // Allow null for conditional declaration
          f === null || f !== void 0 && f.$$typeof === R && f._context === void 0
        );
        if (!p && !iS.has(t)) {
          iS.add(t);
          var v = "";
          f === void 0 ? v = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? v = " However, it is set to a " + typeof f + "." : f.$$typeof === pi ? v = " Did you accidentally pass the Context.Provider instead?" : f._context !== void 0 ? v = " Did you accidentally pass the Context.Consumer instead?" : v = " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", S("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", wt(t) || "Component", v);
        }
      }
      if (typeof f == "object" && f !== null)
        s = er(f);
      else {
        u = Rf(e, t, !0);
        var y = t.contextTypes;
        i = y != null, s = i ? Tf(e, u) : li;
      }
      var g = new t(a, s);
      if (e.mode & Wt) {
        mn(!0);
        try {
          g = new t(a, s);
        } finally {
          mn(!1);
        }
      }
      var x = e.memoizedState = g.state !== null && g.state !== void 0 ? g.state : null;
      i0(e, g);
      {
        if (typeof t.getDerivedStateFromProps == "function" && x === null) {
          var w = wt(t) || "Component";
          Zg.has(w) || (Zg.add(w), S("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", w, g.state === null ? "null" : "undefined", w));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof g.getSnapshotBeforeUpdate == "function") {
          var N = null, A = null, H = null;
          if (typeof g.componentWillMount == "function" && g.componentWillMount.__suppressDeprecationWarning !== !0 ? N = "componentWillMount" : typeof g.UNSAFE_componentWillMount == "function" && (N = "UNSAFE_componentWillMount"), typeof g.componentWillReceiveProps == "function" && g.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? A = "componentWillReceiveProps" : typeof g.UNSAFE_componentWillReceiveProps == "function" && (A = "UNSAFE_componentWillReceiveProps"), typeof g.componentWillUpdate == "function" && g.componentWillUpdate.__suppressDeprecationWarning !== !0 ? H = "componentWillUpdate" : typeof g.UNSAFE_componentWillUpdate == "function" && (H = "UNSAFE_componentWillUpdate"), N !== null || A !== null || H !== null) {
            var le = wt(t) || "Component", Ne = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            tS.has(le) || (tS.add(le), S(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, le, Ne, N !== null ? `
  ` + N : "", A !== null ? `
  ` + A : "", H !== null ? `
  ` + H : ""));
          }
        }
      }
      return i && qE(e, u, s), g;
    }
    function ab(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (S("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", $e(e) || "Component"), uS.enqueueReplaceState(t, t.state, null));
    }
    function u0(e, t, a, i) {
      var u = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== u) {
        {
          var s = $e(e) || "Component";
          Jg.has(s) || (Jg.add(s), S("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", s));
        }
        uS.enqueueReplaceState(t, t.state, null);
      }
    }
    function oS(e, t, a, i) {
      rb(e, t, a);
      var u = e.stateNode;
      u.props = a, u.state = e.memoizedState, u.refs = {}, yg(e);
      var s = t.contextType;
      if (typeof s == "object" && s !== null)
        u.context = er(s);
      else {
        var f = Rf(e, t, !0);
        u.context = Tf(e, f);
      }
      {
        if (u.state === a) {
          var p = wt(t) || "Component";
          rS.has(p) || (rS.add(p), S("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", p));
        }
        e.mode & Wt && rl.recordLegacyContextWarning(e, u), rl.recordUnsafeLifecycleWarnings(e, u);
      }
      u.state = e.memoizedState;
      var v = t.getDerivedStateFromProps;
      if (typeof v == "function" && (lS(e, t, v, a), u.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof u.getSnapshotBeforeUpdate != "function" && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (ab(e, u), em(e, a, u, i), u.state = e.memoizedState), typeof u.componentDidMount == "function") {
        var y = Et;
        y |= Qi, (e.mode & Mt) !== De && (y |= xl), e.flags |= y;
      }
    }
    function ib(e, t, a, i) {
      var u = e.stateNode, s = e.memoizedProps;
      u.props = s;
      var f = u.context, p = t.contextType, v = li;
      if (typeof p == "object" && p !== null)
        v = er(p);
      else {
        var y = Rf(e, t, !0);
        v = Tf(e, y);
      }
      var g = t.getDerivedStateFromProps, x = typeof g == "function" || typeof u.getSnapshotBeforeUpdate == "function";
      !x && (typeof u.UNSAFE_componentWillReceiveProps == "function" || typeof u.componentWillReceiveProps == "function") && (s !== a || f !== v) && u0(e, u, a, v), RC();
      var w = e.memoizedState, N = u.state = w;
      if (em(e, a, u, i), N = e.memoizedState, s === a && w === N && !Uh() && !tm()) {
        if (typeof u.componentDidMount == "function") {
          var A = Et;
          A |= Qi, (e.mode & Mt) !== De && (A |= xl), e.flags |= A;
        }
        return !1;
      }
      typeof g == "function" && (lS(e, t, g, a), N = e.memoizedState);
      var H = tm() || a0(e, t, s, a, w, N, v);
      if (H) {
        if (!x && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function") {
          var le = Et;
          le |= Qi, (e.mode & Mt) !== De && (le |= xl), e.flags |= le;
        }
      } else {
        if (typeof u.componentDidMount == "function") {
          var Ne = Et;
          Ne |= Qi, (e.mode & Mt) !== De && (Ne |= xl), e.flags |= Ne;
        }
        e.memoizedProps = a, e.memoizedState = N;
      }
      return u.props = a, u.state = N, u.context = v, H;
    }
    function lb(e, t, a, i, u) {
      var s = t.stateNode;
      CC(e, t);
      var f = t.memoizedProps, p = t.type === t.elementType ? f : ll(t.type, f);
      s.props = p;
      var v = t.pendingProps, y = s.context, g = a.contextType, x = li;
      if (typeof g == "object" && g !== null)
        x = er(g);
      else {
        var w = Rf(t, a, !0);
        x = Tf(t, w);
      }
      var N = a.getDerivedStateFromProps, A = typeof N == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !A && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (f !== v || y !== x) && u0(t, s, i, x), RC();
      var H = t.memoizedState, le = s.state = H;
      if (em(t, i, s, u), le = t.memoizedState, f === v && H === le && !Uh() && !tm() && !Re)
        return typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || H !== e.memoizedState) && (t.flags |= Et), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || H !== e.memoizedState) && (t.flags |= In), !1;
      typeof N == "function" && (lS(t, a, N, i), le = t.memoizedState);
      var Ne = tm() || a0(t, a, p, i, H, le, x) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      Re;
      return Ne ? (!A && (typeof s.UNSAFE_componentWillUpdate == "function" || typeof s.componentWillUpdate == "function") && (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, le, x), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, le, x)), typeof s.componentDidUpdate == "function" && (t.flags |= Et), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= In)) : (typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || H !== e.memoizedState) && (t.flags |= Et), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || H !== e.memoizedState) && (t.flags |= In), t.memoizedProps = i, t.memoizedState = le), s.props = i, s.state = le, s.context = x, Ne;
    }
    function Zs(e, t) {
      return {
        value: e,
        source: t,
        stack: Pi(t),
        digest: null
      };
    }
    function sS(e, t, a) {
      return {
        value: e,
        source: null,
        stack: a != null ? a : null,
        digest: t != null ? t : null
      };
    }
    function ub(e, t) {
      return !0;
    }
    function cS(e, t) {
      try {
        var a = ub(e, t);
        if (a === !1)
          return;
        var i = t.value, u = t.source, s = t.stack, f = s !== null ? s : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === oe)
            return;
          console.error(i);
        }
        var p = u ? $e(u) : null, v = p ? "The above error occurred in the <" + p + "> component:" : "The above error occurred in one of your React components:", y;
        if (e.tag === ee)
          y = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var g = $e(e) || "Anonymous";
          y = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + g + ".");
        }
        var x = v + `
` + f + `

` + ("" + y);
        console.error(x);
      } catch (w) {
        setTimeout(function() {
          throw w;
        });
      }
    }
    var ob = typeof WeakMap == "function" ? WeakMap : Map;
    function o0(e, t, a) {
      var i = Pu(Kt, a);
      i.tag = hg, i.payload = {
        element: null
      };
      var u = t.value;
      return i.callback = function() {
        e_(u), cS(e, t);
      }, i;
    }
    function fS(e, t, a) {
      var i = Pu(Kt, a);
      i.tag = hg;
      var u = e.type.getDerivedStateFromError;
      if (typeof u == "function") {
        var s = t.value;
        i.payload = function() {
          return u(s);
        }, i.callback = function() {
          SR(e), cS(e, t);
        };
      }
      var f = e.stateNode;
      return f !== null && typeof f.componentDidCatch == "function" && (i.callback = function() {
        SR(e), cS(e, t), typeof u != "function" && Jx(this);
        var v = t.value, y = t.stack;
        this.componentDidCatch(v, {
          componentStack: y !== null ? y : ""
        }), typeof u != "function" && (Zr(e.lanes, je) || S("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", $e(e) || "Unknown"));
      }), i;
    }
    function s0(e, t, a) {
      var i = e.pingCache, u;
      if (i === null ? (i = e.pingCache = new ob(), u = /* @__PURE__ */ new Set(), i.set(t, u)) : (u = i.get(t), u === void 0 && (u = /* @__PURE__ */ new Set(), i.set(t, u))), !u.has(a)) {
        u.add(a);
        var s = t_.bind(null, e, t, a);
        Xr && Wp(e, a), t.then(s, s);
      }
    }
    function sb(e, t, a, i) {
      var u = e.updateQueue;
      if (u === null) {
        var s = /* @__PURE__ */ new Set();
        s.add(a), e.updateQueue = s;
      } else
        u.add(a);
    }
    function cb(e, t) {
      var a = e.tag;
      if ((e.mode & ot) === De && (a === ue || a === We || a === He)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function c0(e) {
      var t = e;
      do {
        if (t.tag === _e && I1(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function f0(e, t, a, i, u) {
      if ((e.mode & ot) === De) {
        if (e === t)
          e.flags |= Kn;
        else {
          if (e.flags |= xe, a.flags |= wc, a.flags &= -52805, a.tag === oe) {
            var s = a.alternate;
            if (s === null)
              a.tag = jt;
            else {
              var f = Pu(Kt, je);
              f.tag = Kh, zo(a, f, je);
            }
          }
          a.lanes = Je(a.lanes, je);
        }
        return e;
      }
      return e.flags |= Kn, e.lanes = u, e;
    }
    function fb(e, t, a, i, u) {
      if (a.flags |= os, Xr && Wp(e, u), i !== null && typeof i == "object" && typeof i.then == "function") {
        var s = i;
        cb(a), Ar() && a.mode & ot && nC();
        var f = c0(t);
        if (f !== null) {
          f.flags &= ~Cr, f0(f, t, a, e, u), f.mode & ot && s0(e, s, u), sb(f, e, s);
          return;
        } else {
          if (!Hv(u)) {
            s0(e, s, u), IS();
            return;
          }
          var p = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = p;
        }
      } else if (Ar() && a.mode & ot) {
        nC();
        var v = c0(t);
        if (v !== null) {
          (v.flags & Kn) === ke && (v.flags |= Cr), f0(v, t, a, e, u), rg(Zs(i, a));
          return;
        }
      }
      i = Zs(i, a), Ix(i);
      var y = t;
      do {
        switch (y.tag) {
          case ee: {
            var g = i;
            y.flags |= Kn;
            var x = Ts(u);
            y.lanes = Je(y.lanes, x);
            var w = o0(y, g, x);
            gg(y, w);
            return;
          }
          case oe:
            var N = i, A = y.type, H = y.stateNode;
            if ((y.flags & xe) === ke && (typeof A.getDerivedStateFromError == "function" || H !== null && typeof H.componentDidCatch == "function" && !cR(H))) {
              y.flags |= Kn;
              var le = Ts(u);
              y.lanes = Je(y.lanes, le);
              var Ne = fS(y, N, le);
              gg(y, Ne);
              return;
            }
            break;
        }
        y = y.return;
      } while (y !== null);
    }
    function db() {
      return null;
    }
    var Lp = _.ReactCurrentOwner, ul = !1, dS, Mp, pS, vS, hS, ec, mS, bm, Np;
    dS = {}, Mp = {}, pS = {}, vS = {}, hS = {}, ec = !1, mS = {}, bm = {}, Np = {};
    function ga(e, t, a, i) {
      e === null ? t.child = vC(t, null, a, i) : t.child = _f(t, e.child, a, i);
    }
    function pb(e, t, a, i) {
      t.child = _f(t, e.child, null, i), t.child = _f(t, null, a, i);
    }
    function d0(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && tl(
          s,
          i,
          // Resolved props
          "prop",
          wt(a)
        );
      }
      var f = a.render, p = t.ref, v, y;
      Df(t, u), va(t);
      {
        if (Lp.current = t, $n(!0), v = Uf(e, t, f, i, p, u), y = Af(), t.mode & Wt) {
          mn(!0);
          try {
            v = Uf(e, t, f, i, p, u), y = Af();
          } finally {
            mn(!1);
          }
        }
        $n(!1);
      }
      return ha(), e !== null && !ul ? (kC(e, t, u), Vu(e, t, u)) : (Ar() && y && Xy(t), t.flags |= ti, ga(e, t, v, u), t.child);
    }
    function p0(e, t, a, i, u) {
      if (e === null) {
        var s = a.type;
        if (g_(s) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var f = s;
          return f = If(s), t.tag = He, t.type = f, SS(t, s), v0(e, t, f, i, u);
        }
        {
          var p = s.propTypes;
          if (p && tl(
            p,
            i,
            // Resolved props
            "prop",
            wt(s)
          ), a.defaultProps !== void 0) {
            var v = wt(s) || "Unknown";
            Np[v] || (S("%s: Support for defaultProps will be removed from memo components in a future major release. Use JavaScript default parameters instead.", v), Np[v] = !0);
          }
        }
        var y = tE(a.type, null, i, t, t.mode, u);
        return y.ref = t.ref, y.return = t, t.child = y, y;
      }
      {
        var g = a.type, x = g.propTypes;
        x && tl(
          x,
          i,
          // Resolved props
          "prop",
          wt(g)
        );
      }
      var w = e.child, N = bS(e, u);
      if (!N) {
        var A = w.memoizedProps, H = a.compare;
        if (H = H !== null ? H : ye, H(A, i) && e.ref === t.ref)
          return Vu(e, t, u);
      }
      t.flags |= ti;
      var le = ic(w, i);
      return le.ref = t.ref, le.return = t, t.child = le, le;
    }
    function v0(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = t.elementType;
        if (s.$$typeof === Ie) {
          var f = s, p = f._payload, v = f._init;
          try {
            s = v(p);
          } catch {
            s = null;
          }
          var y = s && s.propTypes;
          y && tl(
            y,
            i,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            wt(s)
          );
        }
      }
      if (e !== null) {
        var g = e.memoizedProps;
        if (ye(g, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (ul = !1, t.pendingProps = i = g, bS(e, u))
            (e.flags & wc) !== ke && (ul = !0);
          else return t.lanes = e.lanes, Vu(e, t, u);
      }
      return yS(e, t, a, i, u);
    }
    function h0(e, t, a) {
      var i = t.pendingProps, u = i.children, s = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || ne)
        if ((t.mode & ot) === De) {
          var f = {
            baseLanes: I,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = f, jm(t, a);
        } else if (Zr(a, Jr)) {
          var x = {
            baseLanes: I,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = x;
          var w = s !== null ? s.baseLanes : a;
          jm(t, w);
        } else {
          var p = null, v;
          if (s !== null) {
            var y = s.baseLanes;
            v = Je(y, a);
          } else
            v = a;
          t.lanes = t.childLanes = Jr;
          var g = {
            baseLanes: v,
            cachePool: p,
            transitions: null
          };
          return t.memoizedState = g, t.updateQueue = null, jm(t, v), null;
        }
      else {
        var N;
        s !== null ? (N = Je(s.baseLanes, a), t.memoizedState = null) : N = a, jm(t, N);
      }
      return ga(e, t, u, a), t.child;
    }
    function vb(e, t, a) {
      var i = t.pendingProps;
      return ga(e, t, i, a), t.child;
    }
    function hb(e, t, a) {
      var i = t.pendingProps.children;
      return ga(e, t, i, a), t.child;
    }
    function mb(e, t, a) {
      {
        t.flags |= Et;
        {
          var i = t.stateNode;
          i.effectDuration = 0, i.passiveEffectDuration = 0;
        }
      }
      var u = t.pendingProps, s = u.children;
      return ga(e, t, s, a), t.child;
    }
    function m0(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= Sn, t.flags |= ho);
    }
    function yS(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && tl(
          s,
          i,
          // Resolved props
          "prop",
          wt(a)
        );
      }
      var f;
      {
        var p = Rf(t, a, !0);
        f = Tf(t, p);
      }
      var v, y;
      Df(t, u), va(t);
      {
        if (Lp.current = t, $n(!0), v = Uf(e, t, a, i, f, u), y = Af(), t.mode & Wt) {
          mn(!0);
          try {
            v = Uf(e, t, a, i, f, u), y = Af();
          } finally {
            mn(!1);
          }
        }
        $n(!1);
      }
      return ha(), e !== null && !ul ? (kC(e, t, u), Vu(e, t, u)) : (Ar() && y && Xy(t), t.flags |= ti, ga(e, t, v, u), t.child);
    }
    function y0(e, t, a, i, u) {
      {
        switch (N_(t)) {
          case !1: {
            var s = t.stateNode, f = t.type, p = new f(t.memoizedProps, s.context), v = p.state;
            s.updater.enqueueSetState(s, v, null);
            break;
          }
          case !0: {
            t.flags |= xe, t.flags |= Kn;
            var y = new Error("Simulated error coming from DevTools"), g = Ts(u);
            t.lanes = Je(t.lanes, g);
            var x = fS(t, Zs(y, t), g);
            gg(t, x);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var w = a.propTypes;
          w && tl(
            w,
            i,
            // Resolved props
            "prop",
            wt(a)
          );
        }
      }
      var N;
      $l(a) ? (N = !0, Fh(t)) : N = !1, Df(t, u);
      var A = t.stateNode, H;
      A === null ? (_m(e, t), l0(t, a, i), oS(t, a, i, u), H = !0) : e === null ? H = ib(t, a, i, u) : H = lb(e, t, a, i, u);
      var le = gS(e, t, a, H, N, u);
      {
        var Ne = t.stateNode;
        H && Ne.props !== i && (ec || S("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", $e(t) || "a component"), ec = !0);
      }
      return le;
    }
    function gS(e, t, a, i, u, s) {
      m0(e, t);
      var f = (t.flags & xe) !== ke;
      if (!i && !f)
        return u && JE(t, a, !1), Vu(e, t, s);
      var p = t.stateNode;
      Lp.current = t;
      var v;
      if (f && typeof a.getDerivedStateFromError != "function")
        v = null, t0();
      else {
        va(t);
        {
          if ($n(!0), v = p.render(), t.mode & Wt) {
            mn(!0);
            try {
              p.render();
            } finally {
              mn(!1);
            }
          }
          $n(!1);
        }
        ha();
      }
      return t.flags |= ti, e !== null && f ? pb(e, t, v, s) : ga(e, t, v, s), t.memoizedState = p.state, u && JE(t, a, !0), t.child;
    }
    function g0(e) {
      var t = e.stateNode;
      t.pendingContext ? KE(e, t.pendingContext, t.pendingContext !== t.context) : t.context && KE(e, t.context, !1), Sg(e, t.containerInfo);
    }
    function yb(e, t, a) {
      if (g0(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var i = t.pendingProps, u = t.memoizedState, s = u.element;
      CC(e, t), em(t, i, null, a);
      var f = t.memoizedState;
      t.stateNode;
      var p = f.element;
      if (u.isDehydrated) {
        var v = {
          element: p,
          isDehydrated: !1,
          cache: f.cache,
          pendingSuspenseBoundaries: f.pendingSuspenseBoundaries,
          transitions: f.transitions
        }, y = t.updateQueue;
        if (y.baseState = v, t.memoizedState = v, t.flags & Cr) {
          var g = Zs(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return S0(e, t, p, a, g);
        } else if (p !== s) {
          var x = Zs(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return S0(e, t, p, a, x);
        } else {
          E1(t);
          var w = vC(t, null, p, a);
          t.child = w;
          for (var N = w; N; )
            N.flags = N.flags & ~hn | Gr, N = N.sibling;
        }
      } else {
        if (xf(), p === s)
          return Vu(e, t, a);
        ga(e, t, p, a);
      }
      return t.child;
    }
    function S0(e, t, a, i, u) {
      return xf(), rg(u), t.flags |= Cr, ga(e, t, a, i), t.child;
    }
    function gb(e, t, a) {
      bC(t), e === null && ng(t);
      var i = t.type, u = t.pendingProps, s = e !== null ? e.memoizedProps : null, f = u.children, p = Fy(i, u);
      return p ? f = null : s !== null && Fy(i, s) && (t.flags |= Da), m0(e, t), ga(e, t, f, a), t.child;
    }
    function Sb(e, t) {
      return e === null && ng(t), null;
    }
    function Eb(e, t, a, i) {
      _m(e, t);
      var u = t.pendingProps, s = a, f = s._payload, p = s._init, v = p(f);
      t.type = v;
      var y = t.tag = S_(v), g = ll(v, u), x;
      switch (y) {
        case ue:
          return SS(t, v), t.type = v = If(v), x = yS(null, t, v, g, i), x;
        case oe:
          return t.type = v = qS(v), x = y0(null, t, v, g, i), x;
        case We:
          return t.type = v = KS(v), x = d0(null, t, v, g, i), x;
        case ct: {
          if (t.type !== t.elementType) {
            var w = v.propTypes;
            w && tl(
              w,
              g,
              // Resolved for outer only
              "prop",
              wt(v)
            );
          }
          return x = p0(
            null,
            t,
            v,
            ll(v.type, g),
            // The inner type can have defaults too
            i
          ), x;
        }
      }
      var N = "";
      throw v !== null && typeof v == "object" && v.$$typeof === Ie && (N = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + v + ". " + ("Lazy element type must resolve to a class or function." + N));
    }
    function Cb(e, t, a, i, u) {
      _m(e, t), t.tag = oe;
      var s;
      return $l(a) ? (s = !0, Fh(t)) : s = !1, Df(t, u), l0(t, a, i), oS(t, a, i, u), gS(null, t, a, !0, s, u);
    }
    function Rb(e, t, a, i) {
      _m(e, t);
      var u = t.pendingProps, s;
      {
        var f = Rf(t, a, !1);
        s = Tf(t, f);
      }
      Df(t, i);
      var p, v;
      va(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var y = wt(a) || "Unknown";
          dS[y] || (S("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", y, y), dS[y] = !0);
        }
        t.mode & Wt && rl.recordLegacyContextWarning(t, null), $n(!0), Lp.current = t, p = Uf(null, t, a, u, s, i), v = Af(), $n(!1);
      }
      if (ha(), t.flags |= ti, typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0) {
        var g = wt(a) || "Unknown";
        Mp[g] || (S("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", g, g, g), Mp[g] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0
      ) {
        {
          var x = wt(a) || "Unknown";
          Mp[x] || (S("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", x, x, x), Mp[x] = !0);
        }
        t.tag = oe, t.memoizedState = null, t.updateQueue = null;
        var w = !1;
        return $l(a) ? (w = !0, Fh(t)) : w = !1, t.memoizedState = p.state !== null && p.state !== void 0 ? p.state : null, yg(t), i0(t, p), oS(t, a, u, i), gS(null, t, a, !0, w, i);
      } else {
        if (t.tag = ue, t.mode & Wt) {
          mn(!0);
          try {
            p = Uf(null, t, a, u, s, i), v = Af();
          } finally {
            mn(!1);
          }
        }
        return Ar() && v && Xy(t), ga(null, t, p, i), SS(t, a), t.child;
      }
    }
    function SS(e, t) {
      {
        if (t && t.childContextTypes && S("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", i = Dr();
          i && (a += `

Check the render method of \`` + i + "`.");
          var u = i || "", s = e._debugSource;
          s && (u = s.fileName + ":" + s.lineNumber), hS[u] || (hS[u] = !0, S("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (t.defaultProps !== void 0) {
          var f = wt(t) || "Unknown";
          Np[f] || (S("%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.", f), Np[f] = !0);
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var p = wt(t) || "Unknown";
          vS[p] || (S("%s: Function components do not support getDerivedStateFromProps.", p), vS[p] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var v = wt(t) || "Unknown";
          pS[v] || (S("%s: Function components do not support contextType.", v), pS[v] = !0);
        }
      }
    }
    var ES = {
      dehydrated: null,
      treeContext: null,
      retryLane: kt
    };
    function CS(e) {
      return {
        baseLanes: e,
        cachePool: db(),
        transitions: null
      };
    }
    function Tb(e, t) {
      var a = null;
      return {
        baseLanes: Je(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function wb(e, t, a, i) {
      if (t !== null) {
        var u = t.memoizedState;
        if (u === null)
          return !1;
      }
      return Rg(e, Rp);
    }
    function bb(e, t) {
      return ws(e.childLanes, t);
    }
    function E0(e, t, a) {
      var i = t.pendingProps;
      z_(t) && (t.flags |= xe);
      var u = al.current, s = !1, f = (t.flags & xe) !== ke;
      if (f || wb(u, e) ? (s = !0, t.flags &= ~xe) : (e === null || e.memoizedState !== null) && (u = $1(u, _C)), u = Lf(u), Ao(t, u), e === null) {
        ng(t);
        var p = t.memoizedState;
        if (p !== null) {
          var v = p.dehydrated;
          if (v !== null)
            return Ob(t, v);
        }
        var y = i.children, g = i.fallback;
        if (s) {
          var x = xb(t, y, g, a), w = t.child;
          return w.memoizedState = CS(a), t.memoizedState = ES, x;
        } else
          return RS(t, y);
      } else {
        var N = e.memoizedState;
        if (N !== null) {
          var A = N.dehydrated;
          if (A !== null)
            return Lb(e, t, f, i, A, N, a);
        }
        if (s) {
          var H = i.fallback, le = i.children, Ne = kb(e, t, le, H, a), we = t.child, Tt = e.child.memoizedState;
          return we.memoizedState = Tt === null ? CS(a) : Tb(Tt, a), we.childLanes = bb(e, a), t.memoizedState = ES, Ne;
        } else {
          var yt = i.children, O = _b(e, t, yt, a);
          return t.memoizedState = null, O;
        }
      }
    }
    function RS(e, t, a) {
      var i = e.mode, u = {
        mode: "visible",
        children: t
      }, s = TS(u, i);
      return s.return = e, e.child = s, s;
    }
    function xb(e, t, a, i) {
      var u = e.mode, s = e.child, f = {
        mode: "hidden",
        children: t
      }, p, v;
      return (u & ot) === De && s !== null ? (p = s, p.childLanes = I, p.pendingProps = f, e.mode & Lt && (p.actualDuration = 0, p.actualStartTime = -1, p.selfBaseDuration = 0, p.treeBaseDuration = 0), v = Io(a, u, i, null)) : (p = TS(f, u), v = Io(a, u, i, null)), p.return = e, v.return = e, p.sibling = v, e.child = p, v;
    }
    function TS(e, t, a) {
      return CR(e, t, I, null);
    }
    function C0(e, t) {
      return ic(e, t);
    }
    function _b(e, t, a, i) {
      var u = e.child, s = u.sibling, f = C0(u, {
        mode: "visible",
        children: a
      });
      if ((t.mode & ot) === De && (f.lanes = i), f.return = t, f.sibling = null, s !== null) {
        var p = t.deletions;
        p === null ? (t.deletions = [s], t.flags |= ka) : p.push(s);
      }
      return t.child = f, f;
    }
    function kb(e, t, a, i, u) {
      var s = t.mode, f = e.child, p = f.sibling, v = {
        mode: "hidden",
        children: a
      }, y;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (s & ot) === De && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== f
      ) {
        var g = t.child;
        y = g, y.childLanes = I, y.pendingProps = v, t.mode & Lt && (y.actualDuration = 0, y.actualStartTime = -1, y.selfBaseDuration = f.selfBaseDuration, y.treeBaseDuration = f.treeBaseDuration), t.deletions = null;
      } else
        y = C0(f, v), y.subtreeFlags = f.subtreeFlags & Nn;
      var x;
      return p !== null ? x = ic(p, i) : (x = Io(i, s, u, null), x.flags |= hn), x.return = t, y.return = t, y.sibling = x, t.child = y, x;
    }
    function xm(e, t, a, i) {
      i !== null && rg(i), _f(t, e.child, null, a);
      var u = t.pendingProps, s = u.children, f = RS(t, s);
      return f.flags |= hn, t.memoizedState = null, f;
    }
    function Db(e, t, a, i, u) {
      var s = t.mode, f = {
        mode: "visible",
        children: a
      }, p = TS(f, s), v = Io(i, s, u, null);
      return v.flags |= hn, p.return = t, v.return = t, p.sibling = v, t.child = p, (t.mode & ot) !== De && _f(t, e.child, null, u), v;
    }
    function Ob(e, t, a) {
      return (e.mode & ot) === De ? (S("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = je) : Vy(t) ? e.lanes = Rr : e.lanes = Jr, null;
    }
    function Lb(e, t, a, i, u, s, f) {
      if (a)
        if (t.flags & Cr) {
          t.flags &= ~Cr;
          var O = sS(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return xm(e, t, f, O);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= xe, null;
          var P = i.children, L = i.fallback, K = Db(e, t, P, L, f), pe = t.child;
          return pe.memoizedState = CS(f), t.memoizedState = ES, K;
        }
      else {
        if (g1(), (t.mode & ot) === De)
          return xm(
            e,
            t,
            f,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if (Vy(u)) {
          var p, v, y;
          {
            var g = Uw(u);
            p = g.digest, v = g.message, y = g.stack;
          }
          var x;
          v ? x = new Error(v) : x = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var w = sS(x, p, y);
          return xm(e, t, f, w);
        }
        var N = Zr(f, e.childLanes);
        if (ul || N) {
          var A = Fm();
          if (A !== null) {
            var H = Ad(A, f);
            if (H !== kt && H !== s.retryLane) {
              s.retryLane = H;
              var le = Kt;
              ja(e, H), yr(A, e, H, le);
            }
          }
          IS();
          var Ne = sS(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return xm(e, t, f, Ne);
        } else if (IE(u)) {
          t.flags |= xe, t.child = e.child;
          var we = n_.bind(null, e);
          return Aw(u, we), null;
        } else {
          C1(t, u, s.treeContext);
          var Tt = i.children, yt = RS(t, Tt);
          return yt.flags |= Gr, yt;
        }
      }
    }
    function R0(e, t, a) {
      e.lanes = Je(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = Je(i.lanes, t)), pg(e.return, t, a);
    }
    function Mb(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === _e) {
          var u = i.memoizedState;
          u !== null && R0(i, a, e);
        } else if (i.tag === an)
          R0(i, a, e);
        else if (i.child !== null) {
          i.child.return = i, i = i.child;
          continue;
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          i = i.return;
        }
        i.sibling.return = i.return, i = i.sibling;
      }
    }
    function Nb(e) {
      for (var t = e, a = null; t !== null; ) {
        var i = t.alternate;
        i !== null && am(i) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function zb(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !mS[e])
        if (mS[e] = !0, typeof e == "string")
          switch (e.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards": {
              S('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.', e, e.toLowerCase());
              break;
            }
            case "forward":
            case "backward": {
              S('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.', e, e.toLowerCase());
              break;
            }
            default:
              S('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
              break;
          }
        else
          S('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
    }
    function Ub(e, t) {
      e !== void 0 && !bm[e] && (e !== "collapsed" && e !== "hidden" ? (bm[e] = !0, S('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (bm[e] = !0, S('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function T0(e, t) {
      {
        var a = at(e), i = !a && typeof Xe(e) == "function";
        if (a || i) {
          var u = a ? "array" : "iterable";
          return S("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", u, t, u), !1;
        }
      }
      return !0;
    }
    function Ab(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (at(e)) {
          for (var a = 0; a < e.length; a++)
            if (!T0(e[a], a))
              return;
        } else {
          var i = Xe(e);
          if (typeof i == "function") {
            var u = i.call(e);
            if (u)
              for (var s = u.next(), f = 0; !s.done; s = u.next()) {
                if (!T0(s.value, f))
                  return;
                f++;
              }
          } else
            S('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function wS(e, t, a, i, u) {
      var s = e.memoizedState;
      s === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: a,
        tailMode: u
      } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = i, s.tail = a, s.tailMode = u);
    }
    function w0(e, t, a) {
      var i = t.pendingProps, u = i.revealOrder, s = i.tail, f = i.children;
      zb(u), Ub(s, u), Ab(f, u), ga(e, t, f, a);
      var p = al.current, v = Rg(p, Rp);
      if (v)
        p = Tg(p, Rp), t.flags |= xe;
      else {
        var y = e !== null && (e.flags & xe) !== ke;
        y && Mb(t, t.child, a), p = Lf(p);
      }
      if (Ao(t, p), (t.mode & ot) === De)
        t.memoizedState = null;
      else
        switch (u) {
          case "forwards": {
            var g = Nb(t.child), x;
            g === null ? (x = t.child, t.child = null) : (x = g.sibling, g.sibling = null), wS(
              t,
              !1,
              // isBackwards
              x,
              g,
              s
            );
            break;
          }
          case "backwards": {
            var w = null, N = t.child;
            for (t.child = null; N !== null; ) {
              var A = N.alternate;
              if (A !== null && am(A) === null) {
                t.child = N;
                break;
              }
              var H = N.sibling;
              N.sibling = w, w = N, N = H;
            }
            wS(
              t,
              !0,
              // isBackwards
              w,
              null,
              // last
              s
            );
            break;
          }
          case "together": {
            wS(
              t,
              !1,
              // isBackwards
              null,
              // tail
              null,
              // last
              void 0
            );
            break;
          }
          default:
            t.memoizedState = null;
        }
      return t.child;
    }
    function Fb(e, t, a) {
      Sg(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = _f(t, null, i, a) : ga(e, t, i, a), t.child;
    }
    var b0 = !1;
    function jb(e, t, a) {
      var i = t.type, u = i._context, s = t.pendingProps, f = t.memoizedProps, p = s.value;
      {
        "value" in s || b0 || (b0 = !0, S("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var v = t.type.propTypes;
        v && tl(v, s, "prop", "Context.Provider");
      }
      if (yC(t, u, p), f !== null) {
        var y = f.value;
        if (G(y, p)) {
          if (f.children === s.children && !Uh())
            return Vu(e, t, a);
        } else
          z1(t, u, a);
      }
      var g = s.children;
      return ga(e, t, g, a), t.child;
    }
    var x0 = !1;
    function Hb(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (x0 || (x0 = !0, S("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var u = t.pendingProps, s = u.children;
      typeof s != "function" && S("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), Df(t, a);
      var f = er(i);
      va(t);
      var p;
      return Lp.current = t, $n(!0), p = s(f), $n(!1), ha(), t.flags |= ti, ga(e, t, p, a), t.child;
    }
    function zp() {
      ul = !0;
    }
    function _m(e, t) {
      (t.mode & ot) === De && e !== null && (e.alternate = null, t.alternate = null, t.flags |= hn);
    }
    function Vu(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), t0(), Qp(t.lanes), Zr(a, t.childLanes) ? (M1(e, t), t.child) : null;
    }
    function Pb(e, t, a) {
      {
        var i = t.return;
        if (i === null)
          throw new Error("Cannot swap the root fiber.");
        if (e.alternate = null, t.alternate = null, a.index = t.index, a.sibling = t.sibling, a.return = t.return, a.ref = t.ref, t === i.child)
          i.child = a;
        else {
          var u = i.child;
          if (u === null)
            throw new Error("Expected parent to have a child.");
          for (; u.sibling !== t; )
            if (u = u.sibling, u === null)
              throw new Error("Expected to find the previous sibling.");
          u.sibling = a;
        }
        var s = i.deletions;
        return s === null ? (i.deletions = [e], i.flags |= ka) : s.push(e), a.flags |= hn, a;
      }
    }
    function bS(e, t) {
      var a = e.lanes;
      return !!Zr(a, t);
    }
    function Vb(e, t, a) {
      switch (t.tag) {
        case ee:
          g0(t), t.stateNode, xf();
          break;
        case se:
          bC(t);
          break;
        case oe: {
          var i = t.type;
          $l(i) && Fh(t);
          break;
        }
        case Ce:
          Sg(t, t.stateNode.containerInfo);
          break;
        case vt: {
          var u = t.memoizedProps.value, s = t.type._context;
          yC(t, s, u);
          break;
        }
        case mt:
          {
            var f = Zr(a, t.childLanes);
            f && (t.flags |= Et);
            {
              var p = t.stateNode;
              p.effectDuration = 0, p.passiveEffectDuration = 0;
            }
          }
          break;
        case _e: {
          var v = t.memoizedState;
          if (v !== null) {
            if (v.dehydrated !== null)
              return Ao(t, Lf(al.current)), t.flags |= xe, null;
            var y = t.child, g = y.childLanes;
            if (Zr(a, g))
              return E0(e, t, a);
            Ao(t, Lf(al.current));
            var x = Vu(e, t, a);
            return x !== null ? x.sibling : null;
          } else
            Ao(t, Lf(al.current));
          break;
        }
        case an: {
          var w = (e.flags & xe) !== ke, N = Zr(a, t.childLanes);
          if (w) {
            if (N)
              return w0(e, t, a);
            t.flags |= xe;
          }
          var A = t.memoizedState;
          if (A !== null && (A.rendering = null, A.tail = null, A.lastEffect = null), Ao(t, al.current), N)
            break;
          return null;
        }
        case Le:
        case At:
          return t.lanes = I, h0(e, t, a);
      }
      return Vu(e, t, a);
    }
    function _0(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return Pb(e, t, tE(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, u = t.pendingProps;
        if (i !== u || Uh() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          ul = !0;
        else {
          var s = bS(e, a);
          if (!s && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & xe) === ke)
            return ul = !1, Vb(e, t, a);
          (e.flags & wc) !== ke ? ul = !0 : ul = !1;
        }
      } else if (ul = !1, Ar() && d1(t)) {
        var f = t.index, p = p1();
        tC(t, p, f);
      }
      switch (t.lanes = I, t.tag) {
        case st:
          return Rb(e, t, t.type, a);
        case rn: {
          var v = t.elementType;
          return Eb(e, t, v, a);
        }
        case ue: {
          var y = t.type, g = t.pendingProps, x = t.elementType === y ? g : ll(y, g);
          return yS(e, t, y, x, a);
        }
        case oe: {
          var w = t.type, N = t.pendingProps, A = t.elementType === w ? N : ll(w, N);
          return y0(e, t, w, A, a);
        }
        case ee:
          return yb(e, t, a);
        case se:
          return gb(e, t, a);
        case Qe:
          return Sb(e, t);
        case _e:
          return E0(e, t, a);
        case Ce:
          return Fb(e, t, a);
        case We: {
          var H = t.type, le = t.pendingProps, Ne = t.elementType === H ? le : ll(H, le);
          return d0(e, t, H, Ne, a);
        }
        case St:
          return vb(e, t, a);
        case ht:
          return hb(e, t, a);
        case mt:
          return mb(e, t, a);
        case vt:
          return jb(e, t, a);
        case cn:
          return Hb(e, t, a);
        case ct: {
          var we = t.type, Tt = t.pendingProps, yt = ll(we, Tt);
          if (t.type !== t.elementType) {
            var O = we.propTypes;
            O && tl(
              O,
              yt,
              // Resolved for outer only
              "prop",
              wt(we)
            );
          }
          return yt = ll(we.type, yt), p0(e, t, we, yt, a);
        }
        case He:
          return v0(e, t, t.type, t.pendingProps, a);
        case jt: {
          var P = t.type, L = t.pendingProps, K = t.elementType === P ? L : ll(P, L);
          return Cb(e, t, P, K, a);
        }
        case an:
          return w0(e, t, a);
        case xt:
          break;
        case Le:
          return h0(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Ff(e) {
      e.flags |= Et;
    }
    function k0(e) {
      e.flags |= Sn, e.flags |= ho;
    }
    var D0, xS, O0, L0;
    D0 = function(e, t, a, i) {
      for (var u = t.child; u !== null; ) {
        if (u.tag === se || u.tag === Qe)
          sw(e, u.stateNode);
        else if (u.tag !== Ce) {
          if (u.child !== null) {
            u.child.return = u, u = u.child;
            continue;
          }
        }
        if (u === t)
          return;
        for (; u.sibling === null; ) {
          if (u.return === null || u.return === t)
            return;
          u = u.return;
        }
        u.sibling.return = u.return, u = u.sibling;
      }
    }, xS = function(e, t) {
    }, O0 = function(e, t, a, i, u) {
      var s = e.memoizedProps;
      if (s !== i) {
        var f = t.stateNode, p = Eg(), v = fw(f, a, s, i, u, p);
        t.updateQueue = v, v && Ff(t);
      }
    }, L0 = function(e, t, a, i) {
      a !== i && Ff(t);
    };
    function Up(e, t) {
      if (!Ar())
        switch (e.tailMode) {
          case "hidden": {
            for (var a = e.tail, i = null; a !== null; )
              a.alternate !== null && (i = a), a = a.sibling;
            i === null ? e.tail = null : i.sibling = null;
            break;
          }
          case "collapsed": {
            for (var u = e.tail, s = null; u !== null; )
              u.alternate !== null && (s = u), u = u.sibling;
            s === null ? !t && e.tail !== null ? e.tail.sibling = null : e.tail = null : s.sibling = null;
            break;
          }
        }
    }
    function jr(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = I, i = ke;
      if (t) {
        if ((e.mode & Lt) !== De) {
          for (var v = e.selfBaseDuration, y = e.child; y !== null; )
            a = Je(a, Je(y.lanes, y.childLanes)), i |= y.subtreeFlags & Nn, i |= y.flags & Nn, v += y.treeBaseDuration, y = y.sibling;
          e.treeBaseDuration = v;
        } else
          for (var g = e.child; g !== null; )
            a = Je(a, Je(g.lanes, g.childLanes)), i |= g.subtreeFlags & Nn, i |= g.flags & Nn, g.return = e, g = g.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & Lt) !== De) {
          for (var u = e.actualDuration, s = e.selfBaseDuration, f = e.child; f !== null; )
            a = Je(a, Je(f.lanes, f.childLanes)), i |= f.subtreeFlags, i |= f.flags, u += f.actualDuration, s += f.treeBaseDuration, f = f.sibling;
          e.actualDuration = u, e.treeBaseDuration = s;
        } else
          for (var p = e.child; p !== null; )
            a = Je(a, Je(p.lanes, p.childLanes)), i |= p.subtreeFlags, i |= p.flags, p.return = e, p = p.sibling;
        e.subtreeFlags |= i;
      }
      return e.childLanes = a, t;
    }
    function Bb(e, t, a) {
      if (x1() && (t.mode & ot) !== De && (t.flags & xe) === ke)
        return oC(t), xf(), t.flags |= Cr | os | Kn, !1;
      var i = Bh(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (w1(t), jr(t), (t.mode & Lt) !== De) {
            var u = a !== null;
            if (u) {
              var s = t.child;
              s !== null && (t.treeBaseDuration -= s.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (xf(), (t.flags & xe) === ke && (t.memoizedState = null), t.flags |= Et, jr(t), (t.mode & Lt) !== De) {
            var f = a !== null;
            if (f) {
              var p = t.child;
              p !== null && (t.treeBaseDuration -= p.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return sC(), !0;
    }
    function M0(e, t, a) {
      var i = t.pendingProps;
      switch (Jy(t), t.tag) {
        case st:
        case rn:
        case He:
        case ue:
        case We:
        case St:
        case ht:
        case mt:
        case cn:
        case ct:
          return jr(t), null;
        case oe: {
          var u = t.type;
          return $l(u) && Ah(t), jr(t), null;
        }
        case ee: {
          var s = t.stateNode;
          if (Of(t), Gy(t), bg(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), e === null || e.child === null) {
            var f = Bh(t);
            if (f)
              Ff(t);
            else if (e !== null) {
              var p = e.memoizedState;
              // Check if this is a client root
              (!p.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & Cr) !== ke) && (t.flags |= In, sC());
            }
          }
          return xS(e, t), jr(t), null;
        }
        case se: {
          Cg(t);
          var v = wC(), y = t.type;
          if (e !== null && t.stateNode != null)
            O0(e, t, y, i, v), e.ref !== t.ref && k0(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return jr(t), null;
            }
            var g = Eg(), x = Bh(t);
            if (x)
              R1(t, v, g) && Ff(t);
            else {
              var w = ow(y, i, v, g, t);
              D0(w, t, !1, !1), t.stateNode = w, cw(w, y, i, v) && Ff(t);
            }
            t.ref !== null && k0(t);
          }
          return jr(t), null;
        }
        case Qe: {
          var N = i;
          if (e && t.stateNode != null) {
            var A = e.memoizedProps;
            L0(e, t, A, N);
          } else {
            if (typeof N != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var H = wC(), le = Eg(), Ne = Bh(t);
            Ne ? T1(t) && Ff(t) : t.stateNode = dw(N, H, le, t);
          }
          return jr(t), null;
        }
        case _e: {
          Mf(t);
          var we = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var Tt = Bb(e, t, we);
            if (!Tt)
              return t.flags & Kn ? t : null;
          }
          if ((t.flags & xe) !== ke)
            return t.lanes = a, (t.mode & Lt) !== De && Kg(t), t;
          var yt = we !== null, O = e !== null && e.memoizedState !== null;
          if (yt !== O && yt) {
            var P = t.child;
            if (P.flags |= Mn, (t.mode & ot) !== De) {
              var L = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !0);
              L || Rg(al.current, _C) ? $x() : IS();
            }
          }
          var K = t.updateQueue;
          if (K !== null && (t.flags |= Et), jr(t), (t.mode & Lt) !== De && yt) {
            var pe = t.child;
            pe !== null && (t.treeBaseDuration -= pe.treeBaseDuration);
          }
          return null;
        }
        case Ce:
          return Of(t), xS(e, t), e === null && i1(t.stateNode.containerInfo), jr(t), null;
        case vt:
          var ce = t.type._context;
          return dg(ce, t), jr(t), null;
        case jt: {
          var Ve = t.type;
          return $l(Ve) && Ah(t), jr(t), null;
        }
        case an: {
          Mf(t);
          var Ge = t.memoizedState;
          if (Ge === null)
            return jr(t), null;
          var qt = (t.flags & xe) !== ke, zt = Ge.rendering;
          if (zt === null)
            if (qt)
              Up(Ge, !1);
            else {
              var Wn = Yx() && (e === null || (e.flags & xe) === ke);
              if (!Wn)
                for (var Ut = t.child; Ut !== null; ) {
                  var Hn = am(Ut);
                  if (Hn !== null) {
                    qt = !0, t.flags |= xe, Up(Ge, !1);
                    var la = Hn.updateQueue;
                    return la !== null && (t.updateQueue = la, t.flags |= Et), t.subtreeFlags = ke, N1(t, a), Ao(t, Tg(al.current, Rp)), t.child;
                  }
                  Ut = Ut.sibling;
                }
              Ge.tail !== null && Yn() > Z0() && (t.flags |= xe, qt = !0, Up(Ge, !1), t.lanes = _d);
            }
          else {
            if (!qt) {
              var $r = am(zt);
              if ($r !== null) {
                t.flags |= xe, qt = !0;
                var oi = $r.updateQueue;
                if (oi !== null && (t.updateQueue = oi, t.flags |= Et), Up(Ge, !0), Ge.tail === null && Ge.tailMode === "hidden" && !zt.alternate && !Ar())
                  return jr(t), null;
              } else // The time it took to render last row is greater than the remaining
              // time we have to render. So rendering one more row would likely
              // exceed it.
              Yn() * 2 - Ge.renderingStartTime > Z0() && a !== Jr && (t.flags |= xe, qt = !0, Up(Ge, !1), t.lanes = _d);
            }
            if (Ge.isBackwards)
              zt.sibling = t.child, t.child = zt;
            else {
              var Ca = Ge.last;
              Ca !== null ? Ca.sibling = zt : t.child = zt, Ge.last = zt;
            }
          }
          if (Ge.tail !== null) {
            var Ra = Ge.tail;
            Ge.rendering = Ra, Ge.tail = Ra.sibling, Ge.renderingStartTime = Yn(), Ra.sibling = null;
            var ua = al.current;
            return qt ? ua = Tg(ua, Rp) : ua = Lf(ua), Ao(t, ua), Ra;
          }
          return jr(t), null;
        }
        case xt:
          break;
        case Le:
        case At: {
          $S(t);
          var Qu = t.memoizedState, Yf = Qu !== null;
          if (e !== null) {
            var Xp = e.memoizedState, Xl = Xp !== null;
            Xl !== Yf && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !ne && (t.flags |= Mn);
          }
          return !Yf || (t.mode & ot) === De ? jr(t) : Zr(Kl, Jr) && (jr(t), t.subtreeFlags & (hn | Et) && (t.flags |= Mn)), null;
        }
        case _t:
          return null;
        case Dt:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function $b(e, t, a) {
      switch (Jy(t), t.tag) {
        case oe: {
          var i = t.type;
          $l(i) && Ah(t);
          var u = t.flags;
          return u & Kn ? (t.flags = u & ~Kn | xe, (t.mode & Lt) !== De && Kg(t), t) : null;
        }
        case ee: {
          t.stateNode, Of(t), Gy(t), bg();
          var s = t.flags;
          return (s & Kn) !== ke && (s & xe) === ke ? (t.flags = s & ~Kn | xe, t) : null;
        }
        case se:
          return Cg(t), null;
        case _e: {
          Mf(t);
          var f = t.memoizedState;
          if (f !== null && f.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            xf();
          }
          var p = t.flags;
          return p & Kn ? (t.flags = p & ~Kn | xe, (t.mode & Lt) !== De && Kg(t), t) : null;
        }
        case an:
          return Mf(t), null;
        case Ce:
          return Of(t), null;
        case vt:
          var v = t.type._context;
          return dg(v, t), null;
        case Le:
        case At:
          return $S(t), null;
        case _t:
          return null;
        default:
          return null;
      }
    }
    function N0(e, t, a) {
      switch (Jy(t), t.tag) {
        case oe: {
          var i = t.type.childContextTypes;
          i != null && Ah(t);
          break;
        }
        case ee: {
          t.stateNode, Of(t), Gy(t), bg();
          break;
        }
        case se: {
          Cg(t);
          break;
        }
        case Ce:
          Of(t);
          break;
        case _e:
          Mf(t);
          break;
        case an:
          Mf(t);
          break;
        case vt:
          var u = t.type._context;
          dg(u, t);
          break;
        case Le:
        case At:
          $S(t);
          break;
      }
    }
    var z0 = null;
    z0 = /* @__PURE__ */ new Set();
    var km = !1, Hr = !1, Ib = typeof WeakSet == "function" ? WeakSet : Set, ge = null, jf = null, Hf = null;
    function Yb(e) {
      bl(null, function() {
        throw e;
      }), us();
    }
    var Qb = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & Lt)
        try {
          Gl(), t.componentWillUnmount();
        } finally {
          Wl(e);
        }
      else
        t.componentWillUnmount();
    };
    function U0(e, t) {
      try {
        Ho(fr, e);
      } catch (a) {
        sn(e, t, a);
      }
    }
    function _S(e, t, a) {
      try {
        Qb(e, a);
      } catch (i) {
        sn(e, t, i);
      }
    }
    function Wb(e, t, a) {
      try {
        a.componentDidMount();
      } catch (i) {
        sn(e, t, i);
      }
    }
    function A0(e, t) {
      try {
        j0(e);
      } catch (a) {
        sn(e, t, a);
      }
    }
    function Pf(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var i;
          try {
            if (Fe && it && e.mode & Lt)
              try {
                Gl(), i = a(null);
              } finally {
                Wl(e);
              }
            else
              i = a(null);
          } catch (u) {
            sn(e, t, u);
          }
          typeof i == "function" && S("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", $e(e));
        } else
          a.current = null;
    }
    function Dm(e, t, a) {
      try {
        a();
      } catch (i) {
        sn(e, t, i);
      }
    }
    var F0 = !1;
    function Gb(e, t) {
      lw(e.containerInfo), ge = t, qb();
      var a = F0;
      return F0 = !1, a;
    }
    function qb() {
      for (; ge !== null; ) {
        var e = ge, t = e.child;
        (e.subtreeFlags & _l) !== ke && t !== null ? (t.return = e, ge = t) : Kb();
      }
    }
    function Kb() {
      for (; ge !== null; ) {
        var e = ge;
        It(e);
        try {
          Xb(e);
        } catch (a) {
          sn(e, e.return, a);
        }
        on();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, ge = t;
          return;
        }
        ge = e.return;
      }
    }
    function Xb(e) {
      var t = e.alternate, a = e.flags;
      if ((a & In) !== ke) {
        switch (It(e), e.tag) {
          case ue:
          case We:
          case He:
            break;
          case oe: {
            if (t !== null) {
              var i = t.memoizedProps, u = t.memoizedState, s = e.stateNode;
              e.type === e.elementType && !ec && (s.props !== e.memoizedProps && S("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", $e(e) || "instance"), s.state !== e.memoizedState && S("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", $e(e) || "instance"));
              var f = s.getSnapshotBeforeUpdate(e.elementType === e.type ? i : ll(e.type, i), u);
              {
                var p = z0;
                f === void 0 && !p.has(e.type) && (p.add(e.type), S("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", $e(e)));
              }
              s.__reactInternalSnapshotBeforeUpdate = f;
            }
            break;
          }
          case ee: {
            {
              var v = e.stateNode;
              Lw(v.containerInfo);
            }
            break;
          }
          case se:
          case Qe:
          case Ce:
          case jt:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        on();
      }
    }
    function ol(e, t, a) {
      var i = t.updateQueue, u = i !== null ? i.lastEffect : null;
      if (u !== null) {
        var s = u.next, f = s;
        do {
          if ((f.tag & e) === e) {
            var p = f.destroy;
            f.destroy = void 0, p !== void 0 && ((e & Fr) !== Ha ? qi(t) : (e & fr) !== Ha && cs(t), (e & Il) !== Ha && Gp(!0), Dm(t, a, p), (e & Il) !== Ha && Gp(!1), (e & Fr) !== Ha ? Ll() : (e & fr) !== Ha && bd());
          }
          f = f.next;
        } while (f !== s);
      }
    }
    function Ho(e, t) {
      var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
      if (i !== null) {
        var u = i.next, s = u;
        do {
          if ((s.tag & e) === e) {
            (e & Fr) !== Ha ? wd(t) : (e & fr) !== Ha && Oc(t);
            var f = s.create;
            (e & Il) !== Ha && Gp(!0), s.destroy = f(), (e & Il) !== Ha && Gp(!1), (e & Fr) !== Ha ? zv() : (e & fr) !== Ha && Uv();
            {
              var p = s.destroy;
              if (p !== void 0 && typeof p != "function") {
                var v = void 0;
                (s.tag & fr) !== ke ? v = "useLayoutEffect" : (s.tag & Il) !== ke ? v = "useInsertionEffect" : v = "useEffect";
                var y = void 0;
                p === null ? y = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof p.then == "function" ? y = `

It looks like you wrote ` + v + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + v + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : y = " You returned: " + p, S("%s must not return anything besides a function, which is used for clean-up.%s", v, y);
              }
            }
          }
          s = s.next;
        } while (s !== u);
      }
    }
    function Jb(e, t) {
      if ((t.flags & Et) !== ke)
        switch (t.tag) {
          case mt: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, u = i.id, s = i.onPostCommit, f = ZC(), p = t.alternate === null ? "mount" : "update";
            JC() && (p = "nested-update"), typeof s == "function" && s(u, p, a, f);
            var v = t.return;
            e: for (; v !== null; ) {
              switch (v.tag) {
                case ee:
                  var y = v.stateNode;
                  y.passiveEffectDuration += a;
                  break e;
                case mt:
                  var g = v.stateNode;
                  g.passiveEffectDuration += a;
                  break e;
              }
              v = v.return;
            }
            break;
          }
        }
    }
    function Zb(e, t, a, i) {
      if ((a.flags & Dl) !== ke)
        switch (a.tag) {
          case ue:
          case We:
          case He: {
            if (!Hr)
              if (a.mode & Lt)
                try {
                  Gl(), Ho(fr | cr, a);
                } finally {
                  Wl(a);
                }
              else
                Ho(fr | cr, a);
            break;
          }
          case oe: {
            var u = a.stateNode;
            if (a.flags & Et && !Hr)
              if (t === null)
                if (a.type === a.elementType && !ec && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", $e(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", $e(a) || "instance")), a.mode & Lt)
                  try {
                    Gl(), u.componentDidMount();
                  } finally {
                    Wl(a);
                  }
                else
                  u.componentDidMount();
              else {
                var s = a.elementType === a.type ? t.memoizedProps : ll(a.type, t.memoizedProps), f = t.memoizedState;
                if (a.type === a.elementType && !ec && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", $e(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", $e(a) || "instance")), a.mode & Lt)
                  try {
                    Gl(), u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    Wl(a);
                  }
                else
                  u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
              }
            var p = a.updateQueue;
            p !== null && (a.type === a.elementType && !ec && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", $e(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", $e(a) || "instance")), TC(a, p, u));
            break;
          }
          case ee: {
            var v = a.updateQueue;
            if (v !== null) {
              var y = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case se:
                    y = a.child.stateNode;
                    break;
                  case oe:
                    y = a.child.stateNode;
                    break;
                }
              TC(a, v, y);
            }
            break;
          }
          case se: {
            var g = a.stateNode;
            if (t === null && a.flags & Et) {
              var x = a.type, w = a.memoizedProps;
              yw(g, x, w);
            }
            break;
          }
          case Qe:
            break;
          case Ce:
            break;
          case mt: {
            {
              var N = a.memoizedProps, A = N.onCommit, H = N.onRender, le = a.stateNode.effectDuration, Ne = ZC(), we = t === null ? "mount" : "update";
              JC() && (we = "nested-update"), typeof H == "function" && H(a.memoizedProps.id, we, a.actualDuration, a.treeBaseDuration, a.actualStartTime, Ne);
              {
                typeof A == "function" && A(a.memoizedProps.id, we, le, Ne), Kx(a);
                var Tt = a.return;
                e: for (; Tt !== null; ) {
                  switch (Tt.tag) {
                    case ee:
                      var yt = Tt.stateNode;
                      yt.effectDuration += le;
                      break e;
                    case mt:
                      var O = Tt.stateNode;
                      O.effectDuration += le;
                      break e;
                  }
                  Tt = Tt.return;
                }
              }
            }
            break;
          }
          case _e: {
            ux(e, a);
            break;
          }
          case an:
          case jt:
          case xt:
          case Le:
          case At:
          case Dt:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      Hr || a.flags & Sn && j0(a);
    }
    function ex(e) {
      switch (e.tag) {
        case ue:
        case We:
        case He: {
          if (e.mode & Lt)
            try {
              Gl(), U0(e, e.return);
            } finally {
              Wl(e);
            }
          else
            U0(e, e.return);
          break;
        }
        case oe: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && Wb(e, e.return, t), A0(e, e.return);
          break;
        }
        case se: {
          A0(e, e.return);
          break;
        }
      }
    }
    function tx(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === se) {
          if (a === null) {
            a = i;
            try {
              var u = i.stateNode;
              t ? _w(u) : Dw(i.stateNode, i.memoizedProps);
            } catch (f) {
              sn(e, e.return, f);
            }
          }
        } else if (i.tag === Qe) {
          if (a === null)
            try {
              var s = i.stateNode;
              t ? kw(s) : Ow(s, i.memoizedProps);
            } catch (f) {
              sn(e, e.return, f);
            }
        } else if (!((i.tag === Le || i.tag === At) && i.memoizedState !== null && i !== e)) {
          if (i.child !== null) {
            i.child.return = i, i = i.child;
            continue;
          }
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          a === i && (a = null), i = i.return;
        }
        a === i && (a = null), i.sibling.return = i.return, i = i.sibling;
      }
    }
    function j0(e) {
      var t = e.ref;
      if (t !== null) {
        var a = e.stateNode, i;
        switch (e.tag) {
          case se:
            i = a;
            break;
          default:
            i = a;
        }
        if (typeof t == "function") {
          var u;
          if (e.mode & Lt)
            try {
              Gl(), u = t(i);
            } finally {
              Wl(e);
            }
          else
            u = t(i);
          typeof u == "function" && S("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", $e(e));
        } else
          t.hasOwnProperty("current") || S("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", $e(e)), t.current = i;
      }
    }
    function nx(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function H0(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, H0(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === se) {
          var a = e.stateNode;
          a !== null && o1(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function rx(e) {
      for (var t = e.return; t !== null; ) {
        if (P0(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function P0(e) {
      return e.tag === se || e.tag === ee || e.tag === Ce;
    }
    function V0(e) {
      var t = e;
      e: for (; ; ) {
        for (; t.sibling === null; ) {
          if (t.return === null || P0(t.return))
            return null;
          t = t.return;
        }
        for (t.sibling.return = t.return, t = t.sibling; t.tag !== se && t.tag !== Qe && t.tag !== Xt; ) {
          if (t.flags & hn || t.child === null || t.tag === Ce)
            continue e;
          t.child.return = t, t = t.child;
        }
        if (!(t.flags & hn))
          return t.stateNode;
      }
    }
    function ax(e) {
      var t = rx(e);
      switch (t.tag) {
        case se: {
          var a = t.stateNode;
          t.flags & Da && ($E(a), t.flags &= ~Da);
          var i = V0(e);
          DS(e, i, a);
          break;
        }
        case ee:
        case Ce: {
          var u = t.stateNode.containerInfo, s = V0(e);
          kS(e, s, u);
          break;
        }
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function kS(e, t, a) {
      var i = e.tag, u = i === se || i === Qe;
      if (u) {
        var s = e.stateNode;
        t ? Tw(a, s, t) : Cw(a, s);
      } else if (i !== Ce) {
        var f = e.child;
        if (f !== null) {
          kS(f, t, a);
          for (var p = f.sibling; p !== null; )
            kS(p, t, a), p = p.sibling;
        }
      }
    }
    function DS(e, t, a) {
      var i = e.tag, u = i === se || i === Qe;
      if (u) {
        var s = e.stateNode;
        t ? Rw(a, s, t) : Ew(a, s);
      } else if (i !== Ce) {
        var f = e.child;
        if (f !== null) {
          DS(f, t, a);
          for (var p = f.sibling; p !== null; )
            DS(p, t, a), p = p.sibling;
        }
      }
    }
    var Pr = null, sl = !1;
    function ix(e, t, a) {
      {
        var i = t;
        e: for (; i !== null; ) {
          switch (i.tag) {
            case se: {
              Pr = i.stateNode, sl = !1;
              break e;
            }
            case ee: {
              Pr = i.stateNode.containerInfo, sl = !0;
              break e;
            }
            case Ce: {
              Pr = i.stateNode.containerInfo, sl = !0;
              break e;
            }
          }
          i = i.return;
        }
        if (Pr === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        B0(e, t, a), Pr = null, sl = !1;
      }
      nx(a);
    }
    function Po(e, t, a) {
      for (var i = a.child; i !== null; )
        B0(e, t, i), i = i.sibling;
    }
    function B0(e, t, a) {
      switch (Cd(a), a.tag) {
        case se:
          Hr || Pf(a, t);
        case Qe: {
          {
            var i = Pr, u = sl;
            Pr = null, Po(e, t, a), Pr = i, sl = u, Pr !== null && (sl ? bw(Pr, a.stateNode) : ww(Pr, a.stateNode));
          }
          return;
        }
        case Xt: {
          Pr !== null && (sl ? xw(Pr, a.stateNode) : Py(Pr, a.stateNode));
          return;
        }
        case Ce: {
          {
            var s = Pr, f = sl;
            Pr = a.stateNode.containerInfo, sl = !0, Po(e, t, a), Pr = s, sl = f;
          }
          return;
        }
        case ue:
        case We:
        case ct:
        case He: {
          if (!Hr) {
            var p = a.updateQueue;
            if (p !== null) {
              var v = p.lastEffect;
              if (v !== null) {
                var y = v.next, g = y;
                do {
                  var x = g, w = x.destroy, N = x.tag;
                  w !== void 0 && ((N & Il) !== Ha ? Dm(a, t, w) : (N & fr) !== Ha && (cs(a), a.mode & Lt ? (Gl(), Dm(a, t, w), Wl(a)) : Dm(a, t, w), bd())), g = g.next;
                } while (g !== y);
              }
            }
          }
          Po(e, t, a);
          return;
        }
        case oe: {
          if (!Hr) {
            Pf(a, t);
            var A = a.stateNode;
            typeof A.componentWillUnmount == "function" && _S(a, t, A);
          }
          Po(e, t, a);
          return;
        }
        case xt: {
          Po(e, t, a);
          return;
        }
        case Le: {
          if (
            // TODO: Remove this dead flag
            a.mode & ot
          ) {
            var H = Hr;
            Hr = H || a.memoizedState !== null, Po(e, t, a), Hr = H;
          } else
            Po(e, t, a);
          break;
        }
        default: {
          Po(e, t, a);
          return;
        }
      }
    }
    function lx(e) {
      e.memoizedState;
    }
    function ux(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var i = t.alternate;
        if (i !== null) {
          var u = i.memoizedState;
          if (u !== null) {
            var s = u.dehydrated;
            s !== null && Yw(s);
          }
        }
      }
    }
    function $0(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new Ib()), t.forEach(function(i) {
          var u = r_.bind(null, e, i);
          if (!a.has(i)) {
            if (a.add(i), Xr)
              if (jf !== null && Hf !== null)
                Wp(Hf, jf);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            i.then(u, u);
          }
        });
      }
    }
    function ox(e, t, a) {
      jf = a, Hf = e, It(t), I0(t, e), It(t), jf = null, Hf = null;
    }
    function cl(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u];
          try {
            ix(e, t, s);
          } catch (v) {
            sn(s, t, v);
          }
        }
      var f = gl();
      if (t.subtreeFlags & kl)
        for (var p = t.child; p !== null; )
          It(p), I0(p, e), p = p.sibling;
      It(f);
    }
    function I0(e, t, a) {
      var i = e.alternate, u = e.flags;
      switch (e.tag) {
        case ue:
        case We:
        case ct:
        case He: {
          if (cl(t, e), ql(e), u & Et) {
            try {
              ol(Il | cr, e, e.return), Ho(Il | cr, e);
            } catch (Ve) {
              sn(e, e.return, Ve);
            }
            if (e.mode & Lt) {
              try {
                Gl(), ol(fr | cr, e, e.return);
              } catch (Ve) {
                sn(e, e.return, Ve);
              }
              Wl(e);
            } else
              try {
                ol(fr | cr, e, e.return);
              } catch (Ve) {
                sn(e, e.return, Ve);
              }
          }
          return;
        }
        case oe: {
          cl(t, e), ql(e), u & Sn && i !== null && Pf(i, i.return);
          return;
        }
        case se: {
          cl(t, e), ql(e), u & Sn && i !== null && Pf(i, i.return);
          {
            if (e.flags & Da) {
              var s = e.stateNode;
              try {
                $E(s);
              } catch (Ve) {
                sn(e, e.return, Ve);
              }
            }
            if (u & Et) {
              var f = e.stateNode;
              if (f != null) {
                var p = e.memoizedProps, v = i !== null ? i.memoizedProps : p, y = e.type, g = e.updateQueue;
                if (e.updateQueue = null, g !== null)
                  try {
                    gw(f, g, y, v, p, e);
                  } catch (Ve) {
                    sn(e, e.return, Ve);
                  }
              }
            }
          }
          return;
        }
        case Qe: {
          if (cl(t, e), ql(e), u & Et) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var x = e.stateNode, w = e.memoizedProps, N = i !== null ? i.memoizedProps : w;
            try {
              Sw(x, N, w);
            } catch (Ve) {
              sn(e, e.return, Ve);
            }
          }
          return;
        }
        case ee: {
          if (cl(t, e), ql(e), u & Et && i !== null) {
            var A = i.memoizedState;
            if (A.isDehydrated)
              try {
                Iw(t.containerInfo);
              } catch (Ve) {
                sn(e, e.return, Ve);
              }
          }
          return;
        }
        case Ce: {
          cl(t, e), ql(e);
          return;
        }
        case _e: {
          cl(t, e), ql(e);
          var H = e.child;
          if (H.flags & Mn) {
            var le = H.stateNode, Ne = H.memoizedState, we = Ne !== null;
            if (le.isHidden = we, we) {
              var Tt = H.alternate !== null && H.alternate.memoizedState !== null;
              Tt || Bx();
            }
          }
          if (u & Et) {
            try {
              lx(e);
            } catch (Ve) {
              sn(e, e.return, Ve);
            }
            $0(e);
          }
          return;
        }
        case Le: {
          var yt = i !== null && i.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & ot
          ) {
            var O = Hr;
            Hr = O || yt, cl(t, e), Hr = O;
          } else
            cl(t, e);
          if (ql(e), u & Mn) {
            var P = e.stateNode, L = e.memoizedState, K = L !== null, pe = e;
            if (P.isHidden = K, K && !yt && (pe.mode & ot) !== De) {
              ge = pe;
              for (var ce = pe.child; ce !== null; )
                ge = ce, cx(ce), ce = ce.sibling;
            }
            tx(pe, K);
          }
          return;
        }
        case an: {
          cl(t, e), ql(e), u & Et && $0(e);
          return;
        }
        case xt:
          return;
        default: {
          cl(t, e), ql(e);
          return;
        }
      }
    }
    function ql(e) {
      var t = e.flags;
      if (t & hn) {
        try {
          ax(e);
        } catch (a) {
          sn(e, e.return, a);
        }
        e.flags &= ~hn;
      }
      t & Gr && (e.flags &= ~Gr);
    }
    function sx(e, t, a) {
      jf = a, Hf = t, ge = e, Y0(e, t, a), jf = null, Hf = null;
    }
    function Y0(e, t, a) {
      for (var i = (e.mode & ot) !== De; ge !== null; ) {
        var u = ge, s = u.child;
        if (u.tag === Le && i) {
          var f = u.memoizedState !== null, p = f || km;
          if (p) {
            OS(e, t, a);
            continue;
          } else {
            var v = u.alternate, y = v !== null && v.memoizedState !== null, g = y || Hr, x = km, w = Hr;
            km = p, Hr = g, Hr && !w && (ge = u, fx(u));
            for (var N = s; N !== null; )
              ge = N, Y0(
                N,
                // New root; bubble back up to here and stop.
                t,
                a
              ), N = N.sibling;
            ge = u, km = x, Hr = w, OS(e, t, a);
            continue;
          }
        }
        (u.subtreeFlags & Dl) !== ke && s !== null ? (s.return = u, ge = s) : OS(e, t, a);
      }
    }
    function OS(e, t, a) {
      for (; ge !== null; ) {
        var i = ge;
        if ((i.flags & Dl) !== ke) {
          var u = i.alternate;
          It(i);
          try {
            Zb(t, u, i, a);
          } catch (f) {
            sn(i, i.return, f);
          }
          on();
        }
        if (i === e) {
          ge = null;
          return;
        }
        var s = i.sibling;
        if (s !== null) {
          s.return = i.return, ge = s;
          return;
        }
        ge = i.return;
      }
    }
    function cx(e) {
      for (; ge !== null; ) {
        var t = ge, a = t.child;
        switch (t.tag) {
          case ue:
          case We:
          case ct:
          case He: {
            if (t.mode & Lt)
              try {
                Gl(), ol(fr, t, t.return);
              } finally {
                Wl(t);
              }
            else
              ol(fr, t, t.return);
            break;
          }
          case oe: {
            Pf(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && _S(t, t.return, i);
            break;
          }
          case se: {
            Pf(t, t.return);
            break;
          }
          case Le: {
            var u = t.memoizedState !== null;
            if (u) {
              Q0(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, ge = a) : Q0(e);
      }
    }
    function Q0(e) {
      for (; ge !== null; ) {
        var t = ge;
        if (t === e) {
          ge = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, ge = a;
          return;
        }
        ge = t.return;
      }
    }
    function fx(e) {
      for (; ge !== null; ) {
        var t = ge, a = t.child;
        if (t.tag === Le) {
          var i = t.memoizedState !== null;
          if (i) {
            W0(e);
            continue;
          }
        }
        a !== null ? (a.return = t, ge = a) : W0(e);
      }
    }
    function W0(e) {
      for (; ge !== null; ) {
        var t = ge;
        It(t);
        try {
          ex(t);
        } catch (i) {
          sn(t, t.return, i);
        }
        if (on(), t === e) {
          ge = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, ge = a;
          return;
        }
        ge = t.return;
      }
    }
    function dx(e, t, a, i) {
      ge = t, px(t, e, a, i);
    }
    function px(e, t, a, i) {
      for (; ge !== null; ) {
        var u = ge, s = u.child;
        (u.subtreeFlags & Wi) !== ke && s !== null ? (s.return = u, ge = s) : vx(e, t, a, i);
      }
    }
    function vx(e, t, a, i) {
      for (; ge !== null; ) {
        var u = ge;
        if ((u.flags & Wr) !== ke) {
          It(u);
          try {
            hx(t, u, a, i);
          } catch (f) {
            sn(u, u.return, f);
          }
          on();
        }
        if (u === e) {
          ge = null;
          return;
        }
        var s = u.sibling;
        if (s !== null) {
          s.return = u.return, ge = s;
          return;
        }
        ge = u.return;
      }
    }
    function hx(e, t, a, i) {
      switch (t.tag) {
        case ue:
        case We:
        case He: {
          if (t.mode & Lt) {
            qg();
            try {
              Ho(Fr | cr, t);
            } finally {
              Gg(t);
            }
          } else
            Ho(Fr | cr, t);
          break;
        }
      }
    }
    function mx(e) {
      ge = e, yx();
    }
    function yx() {
      for (; ge !== null; ) {
        var e = ge, t = e.child;
        if ((ge.flags & ka) !== ke) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var u = a[i];
              ge = u, Ex(u, e);
            }
            {
              var s = e.alternate;
              if (s !== null) {
                var f = s.child;
                if (f !== null) {
                  s.child = null;
                  do {
                    var p = f.sibling;
                    f.sibling = null, f = p;
                  } while (f !== null);
                }
              }
            }
            ge = e;
          }
        }
        (e.subtreeFlags & Wi) !== ke && t !== null ? (t.return = e, ge = t) : gx();
      }
    }
    function gx() {
      for (; ge !== null; ) {
        var e = ge;
        (e.flags & Wr) !== ke && (It(e), Sx(e), on());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, ge = t;
          return;
        }
        ge = e.return;
      }
    }
    function Sx(e) {
      switch (e.tag) {
        case ue:
        case We:
        case He: {
          e.mode & Lt ? (qg(), ol(Fr | cr, e, e.return), Gg(e)) : ol(Fr | cr, e, e.return);
          break;
        }
      }
    }
    function Ex(e, t) {
      for (; ge !== null; ) {
        var a = ge;
        It(a), Rx(a, t), on();
        var i = a.child;
        i !== null ? (i.return = a, ge = i) : Cx(e);
      }
    }
    function Cx(e) {
      for (; ge !== null; ) {
        var t = ge, a = t.sibling, i = t.return;
        if (H0(t), t === e) {
          ge = null;
          return;
        }
        if (a !== null) {
          a.return = i, ge = a;
          return;
        }
        ge = i;
      }
    }
    function Rx(e, t) {
      switch (e.tag) {
        case ue:
        case We:
        case He: {
          e.mode & Lt ? (qg(), ol(Fr, e, t), Gg(e)) : ol(Fr, e, t);
          break;
        }
      }
    }
    function Tx(e) {
      switch (e.tag) {
        case ue:
        case We:
        case He: {
          try {
            Ho(fr | cr, e);
          } catch (a) {
            sn(e, e.return, a);
          }
          break;
        }
        case oe: {
          var t = e.stateNode;
          try {
            t.componentDidMount();
          } catch (a) {
            sn(e, e.return, a);
          }
          break;
        }
      }
    }
    function wx(e) {
      switch (e.tag) {
        case ue:
        case We:
        case He: {
          try {
            Ho(Fr | cr, e);
          } catch (t) {
            sn(e, e.return, t);
          }
          break;
        }
      }
    }
    function bx(e) {
      switch (e.tag) {
        case ue:
        case We:
        case He: {
          try {
            ol(fr | cr, e, e.return);
          } catch (a) {
            sn(e, e.return, a);
          }
          break;
        }
        case oe: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && _S(e, e.return, t);
          break;
        }
      }
    }
    function xx(e) {
      switch (e.tag) {
        case ue:
        case We:
        case He:
          try {
            ol(Fr | cr, e, e.return);
          } catch (t) {
            sn(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var Ap = Symbol.for;
      Ap("selector.component"), Ap("selector.has_pseudo_class"), Ap("selector.role"), Ap("selector.test_id"), Ap("selector.text");
    }
    var _x = [];
    function kx() {
      _x.forEach(function(e) {
        return e();
      });
    }
    var Dx = _.ReactCurrentActQueue;
    function Ox(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT != "undefined" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), a = typeof jest != "undefined";
        return a && t !== !1;
      }
    }
    function G0() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT != "undefined" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && Dx.current !== null && S("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var Lx = Math.ceil, LS = _.ReactCurrentDispatcher, MS = _.ReactCurrentOwner, Vr = _.ReactCurrentBatchConfig, fl = _.ReactCurrentActQueue, vr = (
      /*             */
      0
    ), q0 = (
      /*               */
      1
    ), Br = (
      /*                */
      2
    ), Ai = (
      /*                */
      4
    ), Bu = 0, Fp = 1, tc = 2, Om = 3, jp = 4, K0 = 5, NS = 6, Rt = vr, Sa = null, kn = null, hr = I, Kl = I, zS = Oo(I), mr = Bu, Hp = null, Lm = I, Pp = I, Mm = I, Vp = null, Pa = null, US = 0, X0 = 500, J0 = 1 / 0, Mx = 500, $u = null;
    function Bp() {
      J0 = Yn() + Mx;
    }
    function Z0() {
      return J0;
    }
    var Nm = !1, AS = null, Vf = null, nc = !1, Vo = null, $p = I, FS = [], jS = null, Nx = 50, Ip = 0, HS = null, PS = !1, zm = !1, zx = 50, Bf = 0, Um = null, Yp = Kt, Am = I, eR = !1;
    function Fm() {
      return Sa;
    }
    function Ea() {
      return (Rt & (Br | Ai)) !== vr ? Yn() : (Yp !== Kt || (Yp = Yn()), Yp);
    }
    function Bo(e) {
      var t = e.mode;
      if ((t & ot) === De)
        return je;
      if ((Rt & Br) !== vr && hr !== I)
        return Ts(hr);
      var a = D1() !== k1;
      if (a) {
        if (Vr.transition !== null) {
          var i = Vr.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return Am === kt && (Am = Nd()), Am;
      }
      var u = Ua();
      if (u !== kt)
        return u;
      var s = pw();
      return s;
    }
    function Ux(e) {
      var t = e.mode;
      return (t & ot) === De ? je : Vv();
    }
    function yr(e, t, a, i) {
      i_(), eR && S("useInsertionEffect must not schedule updates."), PS && (zm = !0), So(e, a, i), (Rt & Br) !== I && e === Sa ? o_(t) : (Xr && xs(e, t, a), s_(t), e === Sa && ((Rt & Br) === vr && (Pp = Je(Pp, a)), mr === jp && $o(e, hr)), Va(e, i), a === je && Rt === vr && (t.mode & ot) === De && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !fl.isBatchingLegacy && (Bp(), eC()));
    }
    function Ax(e, t, a) {
      var i = e.current;
      i.lanes = t, So(e, t, a), Va(e, a);
    }
    function Fx(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (Rt & Br) !== vr
      );
    }
    function Va(e, t) {
      var a = e.callbackNode;
      Kc(e, t);
      var i = qc(e, e === Sa ? hr : I);
      if (i === I) {
        a !== null && mR(a), e.callbackNode = null, e.callbackPriority = kt;
        return;
      }
      var u = zl(i), s = e.callbackPriority;
      if (s === u && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(fl.current !== null && a !== WS)) {
        a == null && s !== je && S("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && mR(a);
      var f;
      if (u === je)
        e.tag === Lo ? (fl.isBatchingLegacy !== null && (fl.didScheduleLegacyUpdate = !0), f1(rR.bind(null, e))) : ZE(rR.bind(null, e)), fl.current !== null ? fl.current.push(Mo) : hw(function() {
          (Rt & (Br | Ai)) === vr && Mo();
        }), f = null;
      else {
        var p;
        switch (Gv(i)) {
          case Lr:
            p = ss;
            break;
          case xi:
            p = Ol;
            break;
          case Na:
            p = Gi;
            break;
          case za:
            p = mu;
            break;
          default:
            p = Gi;
            break;
        }
        f = GS(p, tR.bind(null, e));
      }
      e.callbackPriority = u, e.callbackNode = f;
    }
    function tR(e, t) {
      if (tb(), Yp = Kt, Am = I, (Rt & (Br | Ai)) !== vr)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = Yu();
      if (i && e.callbackNode !== a)
        return null;
      var u = qc(e, e === Sa ? hr : I);
      if (u === I)
        return null;
      var s = !Jc(e, u) && !Pv(e, u) && !t, f = s ? Wx(e, u) : Hm(e, u);
      if (f !== Bu) {
        if (f === tc) {
          var p = Xc(e);
          p !== I && (u = p, f = VS(e, p));
        }
        if (f === Fp) {
          var v = Hp;
          throw rc(e, I), $o(e, u), Va(e, Yn()), v;
        }
        if (f === NS)
          $o(e, u);
        else {
          var y = !Jc(e, u), g = e.current.alternate;
          if (y && !Hx(g)) {
            if (f = Hm(e, u), f === tc) {
              var x = Xc(e);
              x !== I && (u = x, f = VS(e, x));
            }
            if (f === Fp) {
              var w = Hp;
              throw rc(e, I), $o(e, u), Va(e, Yn()), w;
            }
          }
          e.finishedWork = g, e.finishedLanes = u, jx(e, f, u);
        }
      }
      return Va(e, Yn()), e.callbackNode === a ? tR.bind(null, e) : null;
    }
    function VS(e, t) {
      var a = Vp;
      if (tf(e)) {
        var i = rc(e, t);
        i.flags |= Cr, a1(e.containerInfo);
      }
      var u = Hm(e, t);
      if (u !== tc) {
        var s = Pa;
        Pa = a, s !== null && nR(s);
      }
      return u;
    }
    function nR(e) {
      Pa === null ? Pa = e : Pa.push.apply(Pa, e);
    }
    function jx(e, t, a) {
      switch (t) {
        case Bu:
        case Fp:
          throw new Error("Root did not complete. This is a bug in React.");
        case tc: {
          ac(e, Pa, $u);
          break;
        }
        case Om: {
          if ($o(e, a), _u(a) && // do not delay if we're inside an act() scope
          !yR()) {
            var i = US + X0 - Yn();
            if (i > 10) {
              var u = qc(e, I);
              if (u !== I)
                break;
              var s = e.suspendedLanes;
              if (!ku(s, a)) {
                Ea(), Zc(e, s);
                break;
              }
              e.timeoutHandle = jy(ac.bind(null, e, Pa, $u), i);
              break;
            }
          }
          ac(e, Pa, $u);
          break;
        }
        case jp: {
          if ($o(e, a), Ld(a))
            break;
          if (!yR()) {
            var f = ri(e, a), p = f, v = Yn() - p, y = a_(v) - v;
            if (y > 10) {
              e.timeoutHandle = jy(ac.bind(null, e, Pa, $u), y);
              break;
            }
          }
          ac(e, Pa, $u);
          break;
        }
        case K0: {
          ac(e, Pa, $u);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function Hx(e) {
      for (var t = e; ; ) {
        if (t.flags & vo) {
          var a = t.updateQueue;
          if (a !== null) {
            var i = a.stores;
            if (i !== null)
              for (var u = 0; u < i.length; u++) {
                var s = i[u], f = s.getSnapshot, p = s.value;
                try {
                  if (!G(f(), p))
                    return !1;
                } catch {
                  return !1;
                }
              }
          }
        }
        var v = t.child;
        if (t.subtreeFlags & vo && v !== null) {
          v.return = t, t = v;
          continue;
        }
        if (t === e)
          return !0;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return !0;
    }
    function $o(e, t) {
      t = ws(t, Mm), t = ws(t, Pp), Iv(e, t);
    }
    function rR(e) {
      if (nb(), (Rt & (Br | Ai)) !== vr)
        throw new Error("Should not already be working.");
      Yu();
      var t = qc(e, I);
      if (!Zr(t, je))
        return Va(e, Yn()), null;
      var a = Hm(e, t);
      if (e.tag !== Lo && a === tc) {
        var i = Xc(e);
        i !== I && (t = i, a = VS(e, i));
      }
      if (a === Fp) {
        var u = Hp;
        throw rc(e, I), $o(e, t), Va(e, Yn()), u;
      }
      if (a === NS)
        throw new Error("Root did not complete. This is a bug in React.");
      var s = e.current.alternate;
      return e.finishedWork = s, e.finishedLanes = t, ac(e, Pa, $u), Va(e, Yn()), null;
    }
    function Px(e, t) {
      t !== I && (ef(e, Je(t, je)), Va(e, Yn()), (Rt & (Br | Ai)) === vr && (Bp(), Mo()));
    }
    function BS(e, t) {
      var a = Rt;
      Rt |= q0;
      try {
        return e(t);
      } finally {
        Rt = a, Rt === vr && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !fl.isBatchingLegacy && (Bp(), eC());
      }
    }
    function Vx(e, t, a, i, u) {
      var s = Ua(), f = Vr.transition;
      try {
        return Vr.transition = null, An(Lr), e(t, a, i, u);
      } finally {
        An(s), Vr.transition = f, Rt === vr && Bp();
      }
    }
    function Iu(e) {
      Vo !== null && Vo.tag === Lo && (Rt & (Br | Ai)) === vr && Yu();
      var t = Rt;
      Rt |= q0;
      var a = Vr.transition, i = Ua();
      try {
        return Vr.transition = null, An(Lr), e ? e() : void 0;
      } finally {
        An(i), Vr.transition = a, Rt = t, (Rt & (Br | Ai)) === vr && Mo();
      }
    }
    function aR() {
      return (Rt & (Br | Ai)) !== vr;
    }
    function jm(e, t) {
      aa(zS, Kl, e), Kl = Je(Kl, t);
    }
    function $S(e) {
      Kl = zS.current, ra(zS, e);
    }
    function rc(e, t) {
      e.finishedWork = null, e.finishedLanes = I;
      var a = e.timeoutHandle;
      if (a !== Hy && (e.timeoutHandle = Hy, vw(a)), kn !== null)
        for (var i = kn.return; i !== null; ) {
          var u = i.alternate;
          N0(u, i), i = i.return;
        }
      Sa = e;
      var s = ic(e.current, null);
      return kn = s, hr = Kl = t, mr = Bu, Hp = null, Lm = I, Pp = I, Mm = I, Vp = null, Pa = null, A1(), rl.discardPendingWarnings(), s;
    }
    function iR(e, t) {
      do {
        var a = kn;
        try {
          if (Gh(), DC(), on(), MS.current = null, a === null || a.return === null) {
            mr = Fp, Hp = t, kn = null;
            return;
          }
          if (Fe && a.mode & Lt && Tm(a, !0), Pe)
            if (ha(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              bi(a, i, hr);
            } else
              fs(a, t, hr);
          fb(e, a.return, a, t, hr), sR(a);
        } catch (u) {
          t = u, kn === a && a !== null ? (a = a.return, kn = a) : a = kn;
          continue;
        }
        return;
      } while (!0);
    }
    function lR() {
      var e = LS.current;
      return LS.current = gm, e === null ? gm : e;
    }
    function uR(e) {
      LS.current = e;
    }
    function Bx() {
      US = Yn();
    }
    function Qp(e) {
      Lm = Je(e, Lm);
    }
    function $x() {
      mr === Bu && (mr = Om);
    }
    function IS() {
      (mr === Bu || mr === Om || mr === tc) && (mr = jp), Sa !== null && (Rs(Lm) || Rs(Pp)) && $o(Sa, hr);
    }
    function Ix(e) {
      mr !== jp && (mr = tc), Vp === null ? Vp = [e] : Vp.push(e);
    }
    function Yx() {
      return mr === Bu;
    }
    function Hm(e, t) {
      var a = Rt;
      Rt |= Br;
      var i = lR();
      if (Sa !== e || hr !== t) {
        if (Xr) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Wp(e, hr), u.clear()), Yv(e, t);
        }
        $u = Fd(), rc(e, t);
      }
      Eu(t);
      do
        try {
          Qx();
          break;
        } catch (s) {
          iR(e, s);
        }
      while (!0);
      if (Gh(), Rt = a, uR(i), kn !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return Lc(), Sa = null, hr = I, mr;
    }
    function Qx() {
      for (; kn !== null; )
        oR(kn);
    }
    function Wx(e, t) {
      var a = Rt;
      Rt |= Br;
      var i = lR();
      if (Sa !== e || hr !== t) {
        if (Xr) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Wp(e, hr), u.clear()), Yv(e, t);
        }
        $u = Fd(), Bp(), rc(e, t);
      }
      Eu(t);
      do
        try {
          Gx();
          break;
        } catch (s) {
          iR(e, s);
        }
      while (!0);
      return Gh(), uR(i), Rt = a, kn !== null ? (Av(), Bu) : (Lc(), Sa = null, hr = I, mr);
    }
    function Gx() {
      for (; kn !== null && !md(); )
        oR(kn);
    }
    function oR(e) {
      var t = e.alternate;
      It(e);
      var a;
      (e.mode & Lt) !== De ? (Wg(e), a = YS(t, e, Kl), Tm(e, !0)) : a = YS(t, e, Kl), on(), e.memoizedProps = e.pendingProps, a === null ? sR(e) : kn = a, MS.current = null;
    }
    function sR(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & os) === ke) {
          It(t);
          var u = void 0;
          if ((t.mode & Lt) === De ? u = M0(a, t, Kl) : (Wg(t), u = M0(a, t, Kl), Tm(t, !1)), on(), u !== null) {
            kn = u;
            return;
          }
        } else {
          var s = $b(a, t);
          if (s !== null) {
            s.flags &= Ov, kn = s;
            return;
          }
          if ((t.mode & Lt) !== De) {
            Tm(t, !1);
            for (var f = t.actualDuration, p = t.child; p !== null; )
              f += p.actualDuration, p = p.sibling;
            t.actualDuration = f;
          }
          if (i !== null)
            i.flags |= os, i.subtreeFlags = ke, i.deletions = null;
          else {
            mr = NS, kn = null;
            return;
          }
        }
        var v = t.sibling;
        if (v !== null) {
          kn = v;
          return;
        }
        t = i, kn = t;
      } while (t !== null);
      mr === Bu && (mr = K0);
    }
    function ac(e, t, a) {
      var i = Ua(), u = Vr.transition;
      try {
        Vr.transition = null, An(Lr), qx(e, t, a, i);
      } finally {
        Vr.transition = u, An(i);
      }
      return null;
    }
    function qx(e, t, a, i) {
      do
        Yu();
      while (Vo !== null);
      if (l_(), (Rt & (Br | Ai)) !== vr)
        throw new Error("Should not already be working.");
      var u = e.finishedWork, s = e.finishedLanes;
      if (Rd(s), u === null)
        return Td(), null;
      if (s === I && S("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = I, u === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = kt;
      var f = Je(u.lanes, u.childLanes);
      Ud(e, f), e === Sa && (Sa = null, kn = null, hr = I), ((u.subtreeFlags & Wi) !== ke || (u.flags & Wi) !== ke) && (nc || (nc = !0, jS = a, GS(Gi, function() {
        return Yu(), null;
      })));
      var p = (u.subtreeFlags & (_l | kl | Dl | Wi)) !== ke, v = (u.flags & (_l | kl | Dl | Wi)) !== ke;
      if (p || v) {
        var y = Vr.transition;
        Vr.transition = null;
        var g = Ua();
        An(Lr);
        var x = Rt;
        Rt |= Ai, MS.current = null, Gb(e, u), e0(), ox(e, u, s), uw(e.containerInfo), e.current = u, ds(s), sx(u, e, s), ps(), yd(), Rt = x, An(g), Vr.transition = y;
      } else
        e.current = u, e0();
      var w = nc;
      if (nc ? (nc = !1, Vo = e, $p = s) : (Bf = 0, Um = null), f = e.pendingLanes, f === I && (Vf = null), w || pR(e.current, !1), Sd(u.stateNode, i), Xr && e.memoizedUpdaters.clear(), kx(), Va(e, Yn()), t !== null)
        for (var N = e.onRecoverableError, A = 0; A < t.length; A++) {
          var H = t[A], le = H.stack, Ne = H.digest;
          N(H.value, {
            componentStack: le,
            digest: Ne
          });
        }
      if (Nm) {
        Nm = !1;
        var we = AS;
        throw AS = null, we;
      }
      return Zr($p, je) && e.tag !== Lo && Yu(), f = e.pendingLanes, Zr(f, je) ? (eb(), e === HS ? Ip++ : (Ip = 0, HS = e)) : Ip = 0, Mo(), Td(), null;
    }
    function Yu() {
      if (Vo !== null) {
        var e = Gv($p), t = ks(Na, e), a = Vr.transition, i = Ua();
        try {
          return Vr.transition = null, An(t), Xx();
        } finally {
          An(i), Vr.transition = a;
        }
      }
      return !1;
    }
    function Kx(e) {
      FS.push(e), nc || (nc = !0, GS(Gi, function() {
        return Yu(), null;
      }));
    }
    function Xx() {
      if (Vo === null)
        return !1;
      var e = jS;
      jS = null;
      var t = Vo, a = $p;
      if (Vo = null, $p = I, (Rt & (Br | Ai)) !== vr)
        throw new Error("Cannot flush passive effects while already rendering.");
      PS = !0, zm = !1, Su(a);
      var i = Rt;
      Rt |= Ai, mx(t.current), dx(t, t.current, a, e);
      {
        var u = FS;
        FS = [];
        for (var s = 0; s < u.length; s++) {
          var f = u[s];
          Jb(t, f);
        }
      }
      xd(), pR(t.current, !0), Rt = i, Mo(), zm ? t === Um ? Bf++ : (Bf = 0, Um = t) : Bf = 0, PS = !1, zm = !1, Ed(t);
      {
        var p = t.current.stateNode;
        p.effectDuration = 0, p.passiveEffectDuration = 0;
      }
      return !0;
    }
    function cR(e) {
      return Vf !== null && Vf.has(e);
    }
    function Jx(e) {
      Vf === null ? Vf = /* @__PURE__ */ new Set([e]) : Vf.add(e);
    }
    function Zx(e) {
      Nm || (Nm = !0, AS = e);
    }
    var e_ = Zx;
    function fR(e, t, a) {
      var i = Zs(a, t), u = o0(e, i, je), s = zo(e, u, je), f = Ea();
      s !== null && (So(s, je, f), Va(s, f));
    }
    function sn(e, t, a) {
      if (Yb(a), Gp(!1), e.tag === ee) {
        fR(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === ee) {
          fR(i, e, a);
          return;
        } else if (i.tag === oe) {
          var u = i.type, s = i.stateNode;
          if (typeof u.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && !cR(s)) {
            var f = Zs(a, e), p = fS(i, f, je), v = zo(i, p, je), y = Ea();
            v !== null && (So(v, je, y), Va(v, y));
            return;
          }
        }
        i = i.return;
      }
      S(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function t_(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var u = Ea();
      Zc(e, a), c_(e), Sa === e && ku(hr, a) && (mr === jp || mr === Om && _u(hr) && Yn() - US < X0 ? rc(e, I) : Mm = Je(Mm, a)), Va(e, u);
    }
    function dR(e, t) {
      t === kt && (t = Ux(e));
      var a = Ea(), i = ja(e, t);
      i !== null && (So(i, t, a), Va(i, a));
    }
    function n_(e) {
      var t = e.memoizedState, a = kt;
      t !== null && (a = t.retryLane), dR(e, a);
    }
    function r_(e, t) {
      var a = kt, i;
      switch (e.tag) {
        case _e:
          i = e.stateNode;
          var u = e.memoizedState;
          u !== null && (a = u.retryLane);
          break;
        case an:
          i = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      i !== null && i.delete(t), dR(e, a);
    }
    function a_(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : Lx(e / 1960) * 1960;
    }
    function i_() {
      if (Ip > Nx)
        throw Ip = 0, HS = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      Bf > zx && (Bf = 0, Um = null, S("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function l_() {
      rl.flushLegacyContextWarning(), rl.flushPendingUnsafeLifecycleWarnings();
    }
    function pR(e, t) {
      It(e), Pm(e, xl, bx), t && Pm(e, Ri, xx), Pm(e, xl, Tx), t && Pm(e, Ri, wx), on();
    }
    function Pm(e, t, a) {
      for (var i = e, u = null; i !== null; ) {
        var s = i.subtreeFlags & t;
        i !== u && i.child !== null && s !== ke ? i = i.child : ((i.flags & t) !== ke && a(i), i.sibling !== null ? i = i.sibling : i = u = i.return);
      }
    }
    var Vm = null;
    function vR(e) {
      {
        if ((Rt & Br) !== vr || !(e.mode & ot))
          return;
        var t = e.tag;
        if (t !== st && t !== ee && t !== oe && t !== ue && t !== We && t !== ct && t !== He)
          return;
        var a = $e(e) || "ReactComponent";
        if (Vm !== null) {
          if (Vm.has(a))
            return;
          Vm.add(a);
        } else
          Vm = /* @__PURE__ */ new Set([a]);
        var i = ir;
        try {
          It(e), S("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          i ? It(e) : on();
        }
      }
    }
    var YS;
    {
      var u_ = null;
      YS = function(e, t, a) {
        var i = RR(u_, t);
        try {
          return _0(e, t, a);
        } catch (s) {
          if (S1() || s !== null && typeof s == "object" && typeof s.then == "function")
            throw s;
          if (Gh(), DC(), N0(e, t), RR(t, i), t.mode & Lt && Wg(t), bl(null, _0, null, e, t, a), Yi()) {
            var u = us();
            typeof u == "object" && u !== null && u._suppressLogging && typeof s == "object" && s !== null && !s._suppressLogging && (s._suppressLogging = !0);
          }
          throw s;
        }
      };
    }
    var hR = !1, QS;
    QS = /* @__PURE__ */ new Set();
    function o_(e) {
      if (hi && !X1())
        switch (e.tag) {
          case ue:
          case We:
          case He: {
            var t = kn && $e(kn) || "Unknown", a = t;
            if (!QS.has(a)) {
              QS.add(a);
              var i = $e(e) || "Unknown";
              S("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case oe: {
            hR || (S("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), hR = !0);
            break;
          }
        }
    }
    function Wp(e, t) {
      if (Xr) {
        var a = e.memoizedUpdaters;
        a.forEach(function(i) {
          xs(e, i, t);
        });
      }
    }
    var WS = {};
    function GS(e, t) {
      {
        var a = fl.current;
        return a !== null ? (a.push(t), WS) : hd(e, t);
      }
    }
    function mR(e) {
      if (e !== WS)
        return Mv(e);
    }
    function yR() {
      return fl.current !== null;
    }
    function s_(e) {
      {
        if (e.mode & ot) {
          if (!G0())
            return;
        } else if (!Ox() || Rt !== vr || e.tag !== ue && e.tag !== We && e.tag !== He)
          return;
        if (fl.current === null) {
          var t = ir;
          try {
            It(e), S(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, $e(e));
          } finally {
            t ? It(e) : on();
          }
        }
      }
    }
    function c_(e) {
      e.tag !== Lo && G0() && fl.current === null && S(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function Gp(e) {
      eR = e;
    }
    var Fi = null, $f = null, f_ = function(e) {
      Fi = e;
    };
    function If(e) {
      {
        if (Fi === null)
          return e;
        var t = Fi(e);
        return t === void 0 ? e : t.current;
      }
    }
    function qS(e) {
      return If(e);
    }
    function KS(e) {
      {
        if (Fi === null)
          return e;
        var t = Fi(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = If(e.render);
            if (e.render !== a) {
              var i = {
                $$typeof: $,
                render: a
              };
              return e.displayName !== void 0 && (i.displayName = e.displayName), i;
            }
          }
          return e;
        }
        return t.current;
      }
    }
    function gR(e, t) {
      {
        if (Fi === null)
          return !1;
        var a = e.elementType, i = t.type, u = !1, s = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case oe: {
            typeof i == "function" && (u = !0);
            break;
          }
          case ue: {
            (typeof i == "function" || s === Ie) && (u = !0);
            break;
          }
          case We: {
            (s === $ || s === Ie) && (u = !0);
            break;
          }
          case ct:
          case He: {
            (s === Ke || s === Ie) && (u = !0);
            break;
          }
          default:
            return !1;
        }
        if (u) {
          var f = Fi(a);
          if (f !== void 0 && f === Fi(i))
            return !0;
        }
        return !1;
      }
    }
    function SR(e) {
      {
        if (Fi === null || typeof WeakSet != "function")
          return;
        $f === null && ($f = /* @__PURE__ */ new WeakSet()), $f.add(e);
      }
    }
    var d_ = function(e, t) {
      {
        if (Fi === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        Yu(), Iu(function() {
          XS(e.current, i, a);
        });
      }
    }, p_ = function(e, t) {
      {
        if (e.context !== li)
          return;
        Yu(), Iu(function() {
          qp(t, e, null, null);
        });
      }
    };
    function XS(e, t, a) {
      {
        var i = e.alternate, u = e.child, s = e.sibling, f = e.tag, p = e.type, v = null;
        switch (f) {
          case ue:
          case He:
          case oe:
            v = p;
            break;
          case We:
            v = p.render;
            break;
        }
        if (Fi === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var y = !1, g = !1;
        if (v !== null) {
          var x = Fi(v);
          x !== void 0 && (a.has(x) ? g = !0 : t.has(x) && (f === oe ? g = !0 : y = !0));
        }
        if ($f !== null && ($f.has(e) || i !== null && $f.has(i)) && (g = !0), g && (e._debugNeedsRemount = !0), g || y) {
          var w = ja(e, je);
          w !== null && yr(w, e, je, Kt);
        }
        u !== null && !g && XS(u, t, a), s !== null && XS(s, t, a);
      }
    }
    var v_ = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), i = new Set(t.map(function(u) {
          return u.current;
        }));
        return JS(e.current, i, a), a;
      }
    };
    function JS(e, t, a) {
      {
        var i = e.child, u = e.sibling, s = e.tag, f = e.type, p = null;
        switch (s) {
          case ue:
          case He:
          case oe:
            p = f;
            break;
          case We:
            p = f.render;
            break;
        }
        var v = !1;
        p !== null && t.has(p) && (v = !0), v ? h_(e, a) : i !== null && JS(i, t, a), u !== null && JS(u, t, a);
      }
    }
    function h_(e, t) {
      {
        var a = m_(e, t);
        if (a)
          return;
        for (var i = e; ; ) {
          switch (i.tag) {
            case se:
              t.add(i.stateNode);
              return;
            case Ce:
              t.add(i.stateNode.containerInfo);
              return;
            case ee:
              t.add(i.stateNode.containerInfo);
              return;
          }
          if (i.return === null)
            throw new Error("Expected to reach root first.");
          i = i.return;
        }
      }
    }
    function m_(e, t) {
      for (var a = e, i = !1; ; ) {
        if (a.tag === se)
          i = !0, t.add(a.stateNode);
        else if (a.child !== null) {
          a.child.return = a, a = a.child;
          continue;
        }
        if (a === e)
          return i;
        for (; a.sibling === null; ) {
          if (a.return === null || a.return === e)
            return i;
          a = a.return;
        }
        a.sibling.return = a.return, a = a.sibling;
      }
      return !1;
    }
    var ZS;
    {
      ZS = !1;
      try {
        var ER = Object.preventExtensions({});
      } catch {
        ZS = !0;
      }
    }
    function y_(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = ke, this.subtreeFlags = ke, this.deletions = null, this.lanes = I, this.childLanes = I, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !ZS && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var ui = function(e, t, a, i) {
      return new y_(e, t, a, i);
    };
    function eE(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function g_(e) {
      return typeof e == "function" && !eE(e) && e.defaultProps === void 0;
    }
    function S_(e) {
      if (typeof e == "function")
        return eE(e) ? oe : ue;
      if (e != null) {
        var t = e.$$typeof;
        if (t === $)
          return We;
        if (t === Ke)
          return ct;
      }
      return st;
    }
    function ic(e, t) {
      var a = e.alternate;
      a === null ? (a = ui(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = ke, a.subtreeFlags = ke, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & Nn, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case st:
        case ue:
        case He:
          a.type = If(e.type);
          break;
        case oe:
          a.type = qS(e.type);
          break;
        case We:
          a.type = KS(e.type);
          break;
      }
      return a;
    }
    function E_(e, t) {
      e.flags &= Nn | hn;
      var a = e.alternate;
      if (a === null)
        e.childLanes = I, e.lanes = t, e.child = null, e.subtreeFlags = ke, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = ke, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type;
        var i = a.dependencies;
        e.dependencies = i === null ? null : {
          lanes: i.lanes,
          firstContext: i.firstContext
        }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration;
      }
      return e;
    }
    function C_(e, t, a) {
      var i;
      return e === jh ? (i = ot, t === !0 && (i |= Wt, i |= Mt)) : i = De, Xr && (i |= Lt), ui(ee, null, null, i);
    }
    function tE(e, t, a, i, u, s) {
      var f = st, p = e;
      if (typeof e == "function")
        eE(e) ? (f = oe, p = qS(p)) : p = If(p);
      else if (typeof e == "string")
        f = se;
      else
        e: switch (e) {
          case fi:
            return Io(a.children, u, s, t);
          case Qa:
            f = ht, u |= Wt, (u & ot) !== De && (u |= Mt);
            break;
          case di:
            return R_(a, u, s, t);
          case ae:
            return T_(a, u, s, t);
          case he:
            return w_(a, u, s, t);
          case Rn:
            return CR(a, u, s, t);
          case en:
          case ft:
          case un:
          case ar:
          case ut:
          default: {
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case pi:
                  f = vt;
                  break e;
                case R:
                  f = cn;
                  break e;
                case $:
                  f = We, p = KS(p);
                  break e;
                case Ke:
                  f = ct;
                  break e;
                case Ie:
                  f = rn, p = null;
                  break e;
              }
            var v = "";
            {
              (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (v += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
              var y = i ? $e(i) : null;
              y && (v += `

Check the render method of \`` + y + "`.");
            }
            throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + v));
          }
        }
      var g = ui(f, a, t, u);
      return g.elementType = e, g.type = p, g.lanes = s, g._debugOwner = i, g;
    }
    function nE(e, t, a) {
      var i = null;
      i = e._owner;
      var u = e.type, s = e.key, f = e.props, p = tE(u, s, f, i, t, a);
      return p._debugSource = e._source, p._debugOwner = e._owner, p;
    }
    function Io(e, t, a, i) {
      var u = ui(St, e, i, t);
      return u.lanes = a, u;
    }
    function R_(e, t, a, i) {
      typeof e.id != "string" && S('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var u = ui(mt, e, i, t | Lt);
      return u.elementType = di, u.lanes = a, u.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, u;
    }
    function T_(e, t, a, i) {
      var u = ui(_e, e, i, t);
      return u.elementType = ae, u.lanes = a, u;
    }
    function w_(e, t, a, i) {
      var u = ui(an, e, i, t);
      return u.elementType = he, u.lanes = a, u;
    }
    function CR(e, t, a, i) {
      var u = ui(Le, e, i, t);
      u.elementType = Rn, u.lanes = a;
      var s = {
        isHidden: !1
      };
      return u.stateNode = s, u;
    }
    function rE(e, t, a) {
      var i = ui(Qe, e, null, t);
      return i.lanes = a, i;
    }
    function b_() {
      var e = ui(se, null, null, De);
      return e.elementType = "DELETED", e;
    }
    function x_(e) {
      var t = ui(Xt, null, null, De);
      return t.stateNode = e, t;
    }
    function aE(e, t, a) {
      var i = e.children !== null ? e.children : [], u = ui(Ce, i, e.key, t);
      return u.lanes = a, u.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, u;
    }
    function RR(e, t) {
      return e === null && (e = ui(st, null, null, De)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function __(e, t, a, i, u) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = Hy, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = kt, this.eventTimes = bs(I), this.expirationTimes = bs(Kt), this.pendingLanes = I, this.suspendedLanes = I, this.pingedLanes = I, this.expiredLanes = I, this.mutableReadLanes = I, this.finishedLanes = I, this.entangledLanes = I, this.entanglements = bs(I), this.identifierPrefix = i, this.onRecoverableError = u, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var s = this.pendingUpdatersLaneMap = [], f = 0; f < Cu; f++)
          s.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case jh:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case Lo:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function TR(e, t, a, i, u, s, f, p, v, y) {
      var g = new __(e, t, a, p, v), x = C_(t, s);
      g.current = x, x.stateNode = g;
      {
        var w = {
          element: i,
          isDehydrated: a,
          cache: null,
          // not enabled yet
          transitions: null,
          pendingSuspenseBoundaries: null
        };
        x.memoizedState = w;
      }
      return yg(x), g;
    }
    var iE = "18.3.1";
    function k_(e, t, a) {
      var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return Ir(i), {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: rr,
        key: i == null ? null : "" + i,
        children: e,
        containerInfo: t,
        implementation: a
      };
    }
    var lE, uE;
    lE = !1, uE = {};
    function wR(e) {
      if (!e)
        return li;
      var t = po(e), a = c1(t);
      if (t.tag === oe) {
        var i = t.type;
        if ($l(i))
          return XE(t, i, a);
      }
      return a;
    }
    function D_(e, t) {
      {
        var a = po(e);
        if (a === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var i = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + i);
        }
        var u = qr(a);
        if (u === null)
          return null;
        if (u.mode & Wt) {
          var s = $e(a) || "Component";
          if (!uE[s]) {
            uE[s] = !0;
            var f = ir;
            try {
              It(u), a.mode & Wt ? S("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s) : S("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s);
            } finally {
              f ? It(f) : on();
            }
          }
        }
        return u.stateNode;
      }
    }
    function bR(e, t, a, i, u, s, f, p) {
      var v = !1, y = null;
      return TR(e, t, v, y, a, i, u, s, f);
    }
    function xR(e, t, a, i, u, s, f, p, v, y) {
      var g = !0, x = TR(a, i, g, e, u, s, f, p, v);
      x.context = wR(null);
      var w = x.current, N = Ea(), A = Bo(w), H = Pu(N, A);
      return H.callback = t != null ? t : null, zo(w, H, A), Ax(x, A, N), x;
    }
    function qp(e, t, a, i) {
      gd(t, e);
      var u = t.current, s = Ea(), f = Bo(u);
      yn(f);
      var p = wR(a);
      t.context === null ? t.context = p : t.pendingContext = p, hi && ir !== null && !lE && (lE = !0, S(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, $e(ir) || "Unknown"));
      var v = Pu(s, f);
      v.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && S("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), v.callback = i);
      var y = zo(u, v, f);
      return y !== null && (yr(y, u, f, s), Zh(y, u, f)), f;
    }
    function Bm(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case se:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function O_(e) {
      switch (e.tag) {
        case ee: {
          var t = e.stateNode;
          if (tf(t)) {
            var a = jv(t);
            Px(t, a);
          }
          break;
        }
        case _e: {
          Iu(function() {
            var u = ja(e, je);
            if (u !== null) {
              var s = Ea();
              yr(u, e, je, s);
            }
          });
          var i = je;
          oE(e, i);
          break;
        }
      }
    }
    function _R(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = $v(a.retryLane, t));
    }
    function oE(e, t) {
      _R(e, t);
      var a = e.alternate;
      a && _R(a, t);
    }
    function L_(e) {
      if (e.tag === _e) {
        var t = Ss, a = ja(e, t);
        if (a !== null) {
          var i = Ea();
          yr(a, e, t, i);
        }
        oE(e, t);
      }
    }
    function M_(e) {
      if (e.tag === _e) {
        var t = Bo(e), a = ja(e, t);
        if (a !== null) {
          var i = Ea();
          yr(a, e, t, i);
        }
        oE(e, t);
      }
    }
    function kR(e) {
      var t = fn(e);
      return t === null ? null : t.stateNode;
    }
    var DR = function(e) {
      return null;
    };
    function N_(e) {
      return DR(e);
    }
    var OR = function(e) {
      return !1;
    };
    function z_(e) {
      return OR(e);
    }
    var LR = null, MR = null, NR = null, zR = null, UR = null, AR = null, FR = null, jR = null, HR = null;
    {
      var PR = function(e, t, a) {
        var i = t[a], u = at(e) ? e.slice() : et({}, e);
        return a + 1 === t.length ? (at(u) ? u.splice(i, 1) : delete u[i], u) : (u[i] = PR(e[i], t, a + 1), u);
      }, VR = function(e, t) {
        return PR(e, t, 0);
      }, BR = function(e, t, a, i) {
        var u = t[i], s = at(e) ? e.slice() : et({}, e);
        if (i + 1 === t.length) {
          var f = a[i];
          s[f] = s[u], at(s) ? s.splice(u, 1) : delete s[u];
        } else
          s[u] = BR(
            // $FlowFixMe number or string is fine here
            e[u],
            t,
            a,
            i + 1
          );
        return s;
      }, $R = function(e, t, a) {
        if (t.length !== a.length) {
          be("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              be("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return BR(e, t, a, 0);
      }, IR = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var u = t[a], s = at(e) ? e.slice() : et({}, e);
        return s[u] = IR(e[u], t, a + 1, i), s;
      }, YR = function(e, t, a) {
        return IR(e, t, 0, a);
      }, sE = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      LR = function(e, t, a, i) {
        var u = sE(e, t);
        if (u !== null) {
          var s = YR(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = et({}, e.memoizedProps);
          var f = ja(e, je);
          f !== null && yr(f, e, je, Kt);
        }
      }, MR = function(e, t, a) {
        var i = sE(e, t);
        if (i !== null) {
          var u = VR(i.memoizedState, a);
          i.memoizedState = u, i.baseState = u, e.memoizedProps = et({}, e.memoizedProps);
          var s = ja(e, je);
          s !== null && yr(s, e, je, Kt);
        }
      }, NR = function(e, t, a, i) {
        var u = sE(e, t);
        if (u !== null) {
          var s = $R(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = et({}, e.memoizedProps);
          var f = ja(e, je);
          f !== null && yr(f, e, je, Kt);
        }
      }, zR = function(e, t, a) {
        e.pendingProps = YR(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = ja(e, je);
        i !== null && yr(i, e, je, Kt);
      }, UR = function(e, t) {
        e.pendingProps = VR(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = ja(e, je);
        a !== null && yr(a, e, je, Kt);
      }, AR = function(e, t, a) {
        e.pendingProps = $R(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = ja(e, je);
        i !== null && yr(i, e, je, Kt);
      }, FR = function(e) {
        var t = ja(e, je);
        t !== null && yr(t, e, je, Kt);
      }, jR = function(e) {
        DR = e;
      }, HR = function(e) {
        OR = e;
      };
    }
    function U_(e) {
      var t = qr(e);
      return t === null ? null : t.stateNode;
    }
    function A_(e) {
      return null;
    }
    function F_() {
      return ir;
    }
    function j_(e) {
      var t = e.findFiberByHostInstance, a = _.ReactCurrentDispatcher;
      return mo({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: LR,
        overrideHookStateDeletePath: MR,
        overrideHookStateRenamePath: NR,
        overrideProps: zR,
        overridePropsDeletePath: UR,
        overridePropsRenamePath: AR,
        setErrorHandler: jR,
        setSuspenseHandler: HR,
        scheduleUpdate: FR,
        currentDispatcherRef: a,
        findHostInstanceByFiber: U_,
        findFiberByHostInstance: t || A_,
        // React Refresh
        findHostInstancesForRefresh: v_,
        scheduleRefresh: d_,
        scheduleRoot: p_,
        setRefreshHandler: f_,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: F_,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: iE
      });
    }
    var QR = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function cE(e) {
      this._internalRoot = e;
    }
    $m.prototype.render = cE.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? S("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : Im(arguments[1]) ? S("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] != "undefined" && S("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== Ln) {
          var i = kR(t.current);
          i && i.parentNode !== a && S("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      qp(e, t, null, null);
    }, $m.prototype.unmount = cE.prototype.unmount = function() {
      typeof arguments[0] == "function" && S("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        aR() && S("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), Iu(function() {
          qp(null, e, null, null);
        }), QE(t);
      }
    };
    function H_(e, t) {
      if (!Im(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      WR(e);
      var a = !1, i = !1, u = "", s = QR;
      t != null && (t.hydrate ? be("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === _r && S(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (u = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var f = bR(e, jh, null, a, i, u, s);
      Lh(f.current, e);
      var p = e.nodeType === Ln ? e.parentNode : e;
      return tp(p), new cE(f);
    }
    function $m(e) {
      this._internalRoot = e;
    }
    function P_(e) {
      e && Zv(e);
    }
    $m.prototype.unstable_scheduleHydration = P_;
    function V_(e, t, a) {
      if (!Im(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      WR(e), t === void 0 && S("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a != null ? a : null, u = a != null && a.hydratedSources || null, s = !1, f = !1, p = "", v = QR;
      a != null && (a.unstable_strictMode === !0 && (s = !0), a.identifierPrefix !== void 0 && (p = a.identifierPrefix), a.onRecoverableError !== void 0 && (v = a.onRecoverableError));
      var y = xR(t, null, e, jh, i, s, f, p, v);
      if (Lh(y.current, e), tp(e), u)
        for (var g = 0; g < u.length; g++) {
          var x = u[g];
          Y1(y, x);
        }
      return new $m(y);
    }
    function Im(e) {
      return !!(e && (e.nodeType === Qr || e.nodeType === Ii || e.nodeType === rd));
    }
    function Kp(e) {
      return !!(e && (e.nodeType === Qr || e.nodeType === Ii || e.nodeType === rd || e.nodeType === Ln && e.nodeValue === " react-mount-point-unstable "));
    }
    function WR(e) {
      e.nodeType === Qr && e.tagName && e.tagName.toUpperCase() === "BODY" && S("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), dp(e) && (e._reactRootContainer ? S("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : S("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var B_ = _.ReactCurrentOwner, GR;
    GR = function(e) {
      if (e._reactRootContainer && e.nodeType !== Ln) {
        var t = kR(e._reactRootContainer.current);
        t && t.parentNode !== e && S("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = fE(e), u = !!(i && Do(i));
      u && !a && S("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === Qr && e.tagName && e.tagName.toUpperCase() === "BODY" && S("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function fE(e) {
      return e ? e.nodeType === Ii ? e.documentElement : e.firstChild : null;
    }
    function qR() {
    }
    function $_(e, t, a, i, u) {
      if (u) {
        if (typeof i == "function") {
          var s = i;
          i = function() {
            var w = Bm(f);
            s.call(w);
          };
        }
        var f = xR(
          t,
          i,
          e,
          Lo,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          qR
        );
        e._reactRootContainer = f, Lh(f.current, e);
        var p = e.nodeType === Ln ? e.parentNode : e;
        return tp(p), Iu(), f;
      } else {
        for (var v; v = e.lastChild; )
          e.removeChild(v);
        if (typeof i == "function") {
          var y = i;
          i = function() {
            var w = Bm(g);
            y.call(w);
          };
        }
        var g = bR(
          e,
          Lo,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          qR
        );
        e._reactRootContainer = g, Lh(g.current, e);
        var x = e.nodeType === Ln ? e.parentNode : e;
        return tp(x), Iu(function() {
          qp(t, g, a, i);
        }), g;
      }
    }
    function I_(e, t) {
      e !== null && typeof e != "function" && S("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function Ym(e, t, a, i, u) {
      GR(a), I_(u === void 0 ? null : u, "render");
      var s = a._reactRootContainer, f;
      if (!s)
        f = $_(a, t, e, u, i);
      else {
        if (f = s, typeof u == "function") {
          var p = u;
          u = function() {
            var v = Bm(f);
            p.call(v);
          };
        }
        qp(t, f, e, u);
      }
      return Bm(f);
    }
    var KR = !1;
    function Y_(e) {
      {
        KR || (KR = !0, S("findDOMNode is deprecated and will be removed in the next major release. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node"));
        var t = B_.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || S("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", wt(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === Qr ? e : D_(e, "findDOMNode");
    }
    function Q_(e, t, a) {
      if (S("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Kp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = dp(t) && t._reactRootContainer === void 0;
        i && S("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return Ym(null, e, t, !0, a);
    }
    function W_(e, t, a) {
      if (S("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Kp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = dp(t) && t._reactRootContainer === void 0;
        i && S("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return Ym(null, e, t, !1, a);
    }
    function G_(e, t, a, i) {
      if (S("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Kp(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !oy(e))
        throw new Error("parentComponent must be a valid React Component");
      return Ym(e, t, a, !1, i);
    }
    var XR = !1;
    function q_(e) {
      if (XR || (XR = !0, S("unmountComponentAtNode is deprecated and will be removed in the next major release. Switch to the createRoot API. Learn more: https://reactjs.org/link/switch-to-createroot")), !Kp(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = dp(e) && e._reactRootContainer === void 0;
        t && S("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = fE(e), i = a && !Do(a);
          i && S("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return Iu(function() {
          Ym(null, null, e, !1, function() {
            e._reactRootContainer = null, QE(e);
          });
        }), !0;
      } else {
        {
          var u = fE(e), s = !!(u && Do(u)), f = e.nodeType === Qr && Kp(e.parentNode) && !!e.parentNode._reactRootContainer;
          s && S("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", f ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    Tr(O_), Eo(L_), qv(M_), Os(Ua), jd(Qv), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && S("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), gc(XT), uy(BS, Vx, Iu);
    function K_(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Im(t))
        throw new Error("Target container is not a DOM element.");
      return k_(e, t, null, a);
    }
    function X_(e, t, a, i) {
      return G_(e, t, a, i);
    }
    var dE = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [Do, Cf, Mh, oo, Sc, BS]
    };
    function J_(e, t) {
      return dE.usingClientEntryPoint || S('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), H_(e, t);
    }
    function Z_(e, t, a) {
      return dE.usingClientEntryPoint || S('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), V_(e, t, a);
    }
    function ek(e) {
      return aR() && S("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), Iu(e);
    }
    var tk = j_({
      findFiberByHostInstance: Is,
      bundleType: 1,
      version: iE,
      rendererPackageName: "react-dom"
    });
    if (!tk && Dn && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var JR = window.location.protocol;
      /^(https?|file):$/.test(JR) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (JR === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    $a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = dE, $a.createPortal = K_, $a.createRoot = J_, $a.findDOMNode = Y_, $a.flushSync = ek, $a.hydrate = Q_, $a.hydrateRoot = Z_, $a.render = W_, $a.unmountComponentAtNode = q_, $a.unstable_batchedUpdates = BS, $a.unstable_renderSubtreeIntoContainer = X_, $a.version = iE, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ != "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), $a;
}
function dT() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ == "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
    if (process.env.NODE_ENV !== "production")
      throw new Error("^_^");
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(dT);
    } catch (Q) {
      console.error(Q);
    }
  }
}
process.env.NODE_ENV === "production" ? (dT(), yE.exports = ck()) : yE.exports = fk();
var dk = yE.exports, Km, Wm = dk;
if (process.env.NODE_ENV === "production")
  Km = Wm.createRoot, Wm.hydrateRoot;
else {
  var oT = Wm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  Km = function(Q, F) {
    oT.usingClientEntryPoint = !0;
    try {
      return Wm.createRoot(Q, F);
    } finally {
      oT.usingClientEntryPoint = !1;
    }
  };
}
function pk({
  heading: Q = "Notebook",
  items: F = [],
  selectedId: _,
  onSelect: Oe
}) {
  const qe = Jl.useMemo(() => F != null ? F : [], [F]);
  return /* @__PURE__ */ tr.jsxs("aside", { className: "react-sidebar", children: [
    /* @__PURE__ */ tr.jsx("h2", { className: "react-sidebar__heading", children: Q }),
    /* @__PURE__ */ tr.jsx("nav", { className: "react-sidebar__nav", children: /* @__PURE__ */ tr.jsx("ul", { className: "react-sidebar__list", children: qe.map((be) => /* @__PURE__ */ tr.jsx("li", { children: /* @__PURE__ */ tr.jsx(
      "button",
      {
        type: "button",
        className: "react-sidebar__item" + (be.id === _ ? " is-active" : ""),
        onClick: () => Oe == null ? void 0 : Oe(be.id),
        children: be.label
      }
    ) }, be.id)) }) })
  ] });
}
const Gm = "__reactBridgeSharedStore__", vk = "react-bridge:store-ready", hk = "react-bridge:state-changed", gE = "reactBridgeSharedState";
function Qf(Q) {
  return {
    selectedSection: Q.selectedSection,
    form: { ...Q.form }
  };
}
function pT() {
  return {
    selectedSection: "overview",
    form: {
      title: "Untitled note",
      description: "Start typing your notes in the React form.",
      lastUpdated: (/* @__PURE__ */ new Date()).toISOString()
    }
  };
}
function mk() {
  var Q;
  if (typeof window == "undefined") return null;
  try {
    const F = (Q = window.localStorage) == null ? void 0 : Q.getItem(gE);
    if (!F) return null;
    const _ = JSON.parse(F);
    return !_ || typeof _ != "object" ? null : vT(_);
  } catch {
    return null;
  }
}
function vT(Q) {
  var Oe, qe, be;
  const F = pT(), _ = {
    ...F.form,
    ...(Oe = Q.form) != null ? Oe : {}
  };
  return {
    selectedSection: (qe = Q.selectedSection) != null ? qe : F.selectedSection,
    form: {
      ..._,
      lastUpdated: (be = _.lastUpdated) != null ? be : (/* @__PURE__ */ new Date()).toISOString()
    }
  };
}
function sT(Q) {
  var F;
  if (typeof window != "undefined")
    try {
      (F = window.localStorage) == null || F.setItem(gE, JSON.stringify(Q));
    } catch {
    }
}
function yk(Q) {
  const F = mk();
  let _ = F ? Qf(F) : pT();
  const Oe = /* @__PURE__ */ new Set();
  sT(_);
  function qe() {
    const be = Qf(_);
    Oe.forEach((S) => S(be)), typeof window != "undefined" && window.dispatchEvent(
      new CustomEvent(hk, {
        detail: be
      })
    ), sT(be);
  }
  return {
    getState() {
      return Qf(_);
    },
    setState(be) {
      var oe;
      const S = be.form !== void 0, pt = S ? { ...be.form } : void 0, ue = S ? {
        ..._.form,
        ...pt,
        lastUpdated: (oe = pt == null ? void 0 : pt.lastUpdated) != null ? oe : (/* @__PURE__ */ new Date()).toISOString()
      } : _.form;
      return _ = {
        ..._,
        ...be,
        form: S ? ue : _.form
      }, qe(), Qf(_);
    },
    updateForm(be) {
      var pt;
      const S = {
        ..._.form,
        ...be,
        lastUpdated: (pt = be.lastUpdated) != null ? pt : (/* @__PURE__ */ new Date()).toISOString()
      };
      return _ = { ..._, form: S }, qe(), Qf(_);
    },
    subscribe(be) {
      return Oe.add(be), be(Qf(_)), () => Oe.delete(be);
    }
  };
}
function gk(Q) {
  if (typeof window == "undefined") return;
  const F = (_) => {
    if (_.key === gE)
      try {
        if (_.newValue == null) return;
        const Oe = JSON.parse(_.newValue), qe = vT(Oe);
        Q(qe);
      } catch {
      }
  };
  window.addEventListener("storage", F);
}
function Sk(Q) {
  if (!Q || typeof Q != "object") return !1;
  const F = Q;
  return typeof F.getState == "function" && typeof F.setState == "function" && typeof F.updateForm == "function" && typeof F.subscribe == "function";
}
function hT(Q = window) {
  if (Q[Gm] && Sk(Q[Gm]))
    return Q[Gm];
  const F = yk();
  return gk((_) => {
    F.setState(_);
  }), Object.defineProperty(Q, Gm, {
    value: F,
    enumerable: !1,
    configurable: !1,
    writable: !1
  }), typeof window != "undefined" && window.dispatchEvent(
    new CustomEvent(vk, {
      detail: F
    })
  ), F;
}
const qm = hT();
function Ek({ heading: Q = "Shared Note" }) {
  const [F, _] = Jl.useState(() => qm.getState().form), [Oe, qe] = Jl.useState(
    qm.getState().selectedSection
  );
  Jl.useEffect(() => qm.subscribe((S) => {
    _(S.form), qe(S.selectedSection);
  }), []);
  function be(S) {
    const pt = S.currentTarget, { name: ue, value: oe } = pt;
    qm.updateForm({ [ue]: oe });
  }
  return /* @__PURE__ */ tr.jsxs("section", { className: "react-shared-form", children: [
    /* @__PURE__ */ tr.jsxs("header", { className: "react-shared-form__header", children: [
      /* @__PURE__ */ tr.jsx("h2", { children: Q }),
      /* @__PURE__ */ tr.jsx("span", { className: "react-shared-form__chip", children: Oe })
    ] }),
    /* @__PURE__ */ tr.jsx("label", { className: "react-shared-form__label", htmlFor: "react-shared-form-title", children: "Title" }),
    /* @__PURE__ */ tr.jsx(
      "input",
      {
        id: "react-shared-form-title",
        className: "react-shared-form__input",
        name: "title",
        value: F.title,
        onInput: be
      }
    ),
    /* @__PURE__ */ tr.jsx(
      "label",
      {
        className: "react-shared-form__label",
        htmlFor: "react-shared-form-description",
        children: "Description"
      }
    ),
    /* @__PURE__ */ tr.jsx(
      "textarea",
      {
        id: "react-shared-form-description",
        className: "react-shared-form__textarea",
        name: "description",
        value: F.description,
        onInput: be,
        rows: 5
      }
    ),
    /* @__PURE__ */ tr.jsx("footer", { className: "react-shared-form__footer", children: /* @__PURE__ */ tr.jsxs("small", { children: [
      "Last updated: ",
      new Date(F.lastUpdated).toLocaleTimeString()
    ] }) })
  ] });
}
const Ck = `:host {
  display: block;
  font: 14px/1.4 system-ui, -apple-system, Segoe UI, Roboto, "Helvetica Neue", Arial;
}
.react-sidebar { padding: 8px 12px; border-right: 1px solid #e5e7eb; }
.react-sidebar__heading { margin: 0 0 8px; font-size: 14px; font-weight: 600; }
.react-sidebar__list { list-style: none; margin: 0; padding: 0; }
.react-sidebar__item { display: block; width: 100%; text-align: left; padding: 8px; border-radius: 8px; border: 0; cursor: pointer; background: transparent; }
.react-sidebar__item:hover { background: #f3f4f6; }
.react-sidebar__item.is-active { background: #e5e7eb; font-weight: 600; }
`, Rk = `.react-shared-form {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 16px;
  border: 1px solid #d1d5db;
  border-radius: 12px;
  background: #fafafa;
  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.08);
}

.react-shared-form__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.react-shared-form__chip {
  padding: 4px 10px;
  border-radius: 999px;
  background: #2563eb;
  color: #fff;
  font-size: 12px;
  font-weight: 600;
  text-transform: capitalize;
}

.react-shared-form__label {
  font-weight: 600;
  color: #374151;
  font-size: 13px;
}

.react-shared-form__input,
.react-shared-form__textarea {
  width: 100%;
  padding: 8px 10px;
  border: 1px solid #cbd5f5;
  border-radius: 8px;
  font-size: 14px;
  font-family: inherit;
  background: #fff;
}

.react-shared-form__textarea {
  resize: vertical;
  min-height: 120px;
}

.react-shared-form__footer {
  margin-top: 4px;
  color: #6b7280;
  font-size: 12px;
  text-align: right;
}
`, mT = new CSSStyleSheet();
mT.replaceSync(Ck);
const yT = new CSSStyleSheet();
yT.replaceSync(Rk);
const cT = hT();
class Tk extends HTMLElement {
  constructor() {
    super(...arguments), this.root = null, this.props = {}, this.shadowRootRef = null;
  }
  static get observedAttributes() {
    return ["heading", "items", "selected-id"];
  }
  connectedCallback() {
    var F, _;
    this.shadowRootRef || (this.shadowRootRef = this.attachShadow({ mode: "open" }), this.shadowRootRef.adoptedStyleSheets = [mT]), this.root || (this.root = Km(this.shadowRootRef)), this.props.heading = (F = this.getAttribute("heading")) != null ? F : void 0, this.props.selectedId = (_ = this.getAttribute("selected-id")) != null ? _ : void 0, this.props.items = this.parseItems(this.getAttribute("items")), this.render(), this.subscribeToSharedStore();
  }
  attributeChangedCallback(F, _, Oe) {
    F === "heading" && (this.props.heading = Oe != null ? Oe : void 0), F === "selected-id" && (this.props.selectedId = Oe != null ? Oe : void 0), F === "items" && (this.props.items = this.parseItems(Oe)), this.render();
  }
  disconnectedCallback() {
    var F, _;
    (F = this.unsubscribeFromStore) == null || F.call(this), this.unsubscribeFromStore = void 0, (_ = this.root) == null || _.unmount(), this.root = null, this.shadowRootRef = null;
  }
  parseItems(F) {
    if (!F) return [];
    try {
      const _ = JSON.parse(F);
      return Array.isArray(_) ? _ : [];
    } catch {
      return [];
    }
  }
  render() {
    if (!this.root) return;
    const F = (_) => {
      cT.setState({ selectedSection: _ }), this.dispatchEvent(new CustomEvent("sidebar-select", { detail: { id: _ }, bubbles: !0, composed: !0 }));
    };
    this.root.render(/* @__PURE__ */ tr.jsx(Jl.StrictMode, { children: /* @__PURE__ */ tr.jsx(pk, { heading: this.props.heading, items: this.props.items, selectedId: this.props.selectedId, onSelect: F }) }));
  }
  subscribeToSharedStore() {
    var F;
    (F = this.unsubscribeFromStore) == null || F.call(this), this.unsubscribeFromStore = cT.subscribe((_) => {
      this.props.selectedId !== _.selectedSection && (this.props.selectedId = _.selectedSection, this.render());
    });
  }
}
class wk extends HTMLElement {
  constructor() {
    super(...arguments), this.root = null, this.shadowRootRef = null;
  }
  static get observedAttributes() {
    return ["heading"];
  }
  connectedCallback() {
    var F;
    this.shadowRootRef || (this.shadowRootRef = this.attachShadow({ mode: "open" }), this.shadowRootRef.adoptedStyleSheets = [yT]), this.root || (this.root = Km(this.shadowRootRef)), this.heading = (F = this.getAttribute("heading")) != null ? F : void 0, this.render();
  }
  attributeChangedCallback(F, _, Oe) {
    this.heading = Oe != null ? Oe : void 0, this.render();
  }
  disconnectedCallback() {
    var F;
    (F = this.root) == null || F.unmount(), this.root = null, this.shadowRootRef = null;
  }
  render() {
    this.root && this.root.render(
      /* @__PURE__ */ tr.jsx(Jl.StrictMode, { children: /* @__PURE__ */ tr.jsx(Ek, { heading: this.heading }) })
    );
  }
}
window.customElements.get("react-notebook-sidebar") || window.customElements.define("react-notebook-sidebar", Tk);
window.customElements.get("react-shared-form") || window.customElements.define("react-shared-form", wk);
//# sourceMappingURL=react-notebook-sidebar.js.map
