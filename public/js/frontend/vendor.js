webpackJsonp([1],[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;var _extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(e,t){"object"===( false?"undefined":_typeof(exports))&&"undefined"!=typeof module?module.exports=t(): true?!(__WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):e.LazyLoad=t()}(this,function(){"use strict";var e={elements_selector:"img",container:window,threshold:300,throttle:150,data_src:"src",data_srcset:"srcset",class_loading:"loading",class_loaded:"loaded",class_error:"error",class_initial:"initial",skip_invisible:!0,callback_load:null,callback_error:null,callback_set:null,callback_processed:null,callback_enter:null},t=!("onscroll"in window)||/glebot/.test(navigator.userAgent),n=function(e,t){e&&e(t)},o=function(e){return e.getBoundingClientRect().top+window.pageYOffset-e.ownerDocument.documentElement.clientTop},i=function(e,t,n){return(t===window?window.innerHeight+window.pageYOffset:o(t)+t.offsetHeight)<=o(e)-n},s=function(e){return e.getBoundingClientRect().left+window.pageXOffset-e.ownerDocument.documentElement.clientLeft},r=function(e,t,n){var o=window.innerWidth;return(t===window?o+window.pageXOffset:s(t)+o)<=s(e)-n},l=function(e,t,n){return(t===window?window.pageYOffset:o(t))>=o(e)+n+e.offsetHeight},a=function(e,t,n){return(t===window?window.pageXOffset:s(t))>=s(e)+n+e.offsetWidth},c=function(e,t,n){return!(i(e,t,n)||l(e,t,n)||r(e,t,n)||a(e,t,n))},u=function(e,t){var n,o=new e(t);try{n=new CustomEvent("LazyLoad::Initialized",{detail:{instance:o}})}catch(e){(n=document.createEvent("CustomEvent")).initCustomEvent("LazyLoad::Initialized",!1,!1,{instance:o})}window.dispatchEvent(n)},d=function(e,t){return e.getAttribute("data-"+t)},h=function(e,t,n){return e.setAttribute("data-"+t,n)},_=function(e,t){var n=e.parentNode;if("PICTURE"===n.tagName)for(var o=0;o<n.children.length;o++){var i=n.children[o];if("SOURCE"===i.tagName){var s=d(i,t);s&&i.setAttribute("srcset",s)}}},f=function(e,t,n){var o=e.tagName,i=d(e,n);if("IMG"===o){_(e,t);var s=d(e,t);return s&&e.setAttribute("srcset",s),void(i&&e.setAttribute("src",i))}"IFRAME"!==o?i&&(e.style.backgroundImage='url("'+i+'")'):i&&e.setAttribute("src",i)},p="classList"in document.createElement("p"),m=function(e,t){p?e.classList.add(t):e.className+=(e.className?" ":"")+t},g=function(e,t){p?e.classList.remove(t):e.className=e.className.replace(new RegExp("(^|\\s+)"+t+"(\\s+|$)")," ").replace(/^\s+/,"").replace(/\s+$/,"")},v=function(t){this._settings=_extends({},e,t),this._queryOriginNode=this._settings.container===window?document:this._settings.container,this._previousLoopTime=0,this._loopTimeout=null,this._boundHandleScroll=this.handleScroll.bind(this),this._isFirstLoop=!0,window.addEventListener("resize",this._boundHandleScroll),this.update()};v.prototype={_reveal:function(e){var t=this._settings,o=function o(){t&&(e.removeEventListener("load",i),e.removeEventListener("error",o),g(e,t.class_loading),m(e,t.class_error),n(t.callback_error,e))},i=function i(){t&&(g(e,t.class_loading),m(e,t.class_loaded),e.removeEventListener("load",i),e.removeEventListener("error",o),n(t.callback_load,e))};n(t.callback_enter,e),"IMG"!==e.tagName&&"IFRAME"!==e.tagName||(e.addEventListener("load",i),e.addEventListener("error",o),m(e,t.class_loading)),f(e,t.data_srcset,t.data_src),n(t.callback_set,e)},_loopThroughElements:function(){var e=this._settings,o=this._elements,i=o?o.length:0,s=void 0,r=[],l=this._isFirstLoop;for(s=0;s<i;s++){var a=o[s];e.skip_invisible&&null===a.offsetParent||(t||c(a,e.container,e.threshold))&&(l&&m(a,e.class_initial),this._reveal(a),r.push(s),h(a,"was-processed",!0))}for(;r.length;)o.splice(r.pop(),1),n(e.callback_processed,o.length);0===i&&this._stopScrollHandler(),l&&(this._isFirstLoop=!1)},_purgeElements:function(){var e=this._elements,t=e.length,n=void 0,o=[];for(n=0;n<t;n++){var i=e[n];d(i,"was-processed")&&o.push(n)}for(;o.length>0;)e.splice(o.pop(),1)},_startScrollHandler:function(){this._isHandlingScroll||(this._isHandlingScroll=!0,this._settings.container.addEventListener("scroll",this._boundHandleScroll))},_stopScrollHandler:function(){this._isHandlingScroll&&(this._isHandlingScroll=!1,this._settings.container.removeEventListener("scroll",this._boundHandleScroll))},handleScroll:function(){var e=this._settings.throttle;if(0!==e){var t=Date.now(),n=e-(t-this._previousLoopTime);n<=0||n>e?(this._loopTimeout&&(clearTimeout(this._loopTimeout),this._loopTimeout=null),this._previousLoopTime=t,this._loopThroughElements()):this._loopTimeout||(this._loopTimeout=setTimeout(function(){this._previousLoopTime=Date.now(),this._loopTimeout=null,this._loopThroughElements()}.bind(this),n))}else this._loopThroughElements()},update:function(){this._elements=Array.prototype.slice.call(this._queryOriginNode.querySelectorAll(this._settings.elements_selector)),this._purgeElements(),this._loopThroughElements(),this._startScrollHandler()},destroy:function(){window.removeEventListener("resize",this._boundHandleScroll),this._loopTimeout&&(clearTimeout(this._loopTimeout),this._loopTimeout=null),this._stopScrollHandler(),this._elements=null,this._queryOriginNode=null,this._settings=null}};var w=window.lazyLoadOptions;return w&&function(e,t){var n=t.length;if(n)for(var o=0;o<n;o++)u(e,t[o]);else u(e,t)}(v,w),v});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!function(root, factory) {
     true ? // AMD. Register as an anonymous module unless amdModuleId is set
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
        return root.svg4everybody = factory();
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : "object" == typeof module && module.exports ? // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory() : root.svg4everybody = factory();
}(this, function() {
    /*! svg4everybody v2.1.9 | github.com/jonathantneal/svg4everybody */
    function embed(parent, svg, target) {
        // if the target exists
        if (target) {
            // create a document fragment to hold the contents of the target
            var fragment = document.createDocumentFragment(), viewBox = !svg.hasAttribute("viewBox") && target.getAttribute("viewBox");
            // conditionally set the viewBox on the svg
            viewBox && svg.setAttribute("viewBox", viewBox);
            // copy the contents of the clone into the fragment
            for (// clone the target
            var clone = target.cloneNode(!0); clone.childNodes.length; ) {
                fragment.appendChild(clone.firstChild);
            }
            // append the fragment into the svg
            parent.appendChild(fragment);
        }
    }
    function loadreadystatechange(xhr) {
        // listen to changes in the request
        xhr.onreadystatechange = function() {
            // if the request is ready
            if (4 === xhr.readyState) {
                // get the cached html document
                var cachedDocument = xhr._cachedDocument;
                // ensure the cached html document based on the xhr response
                cachedDocument || (cachedDocument = xhr._cachedDocument = document.implementation.createHTMLDocument(""), 
                cachedDocument.body.innerHTML = xhr.responseText, xhr._cachedTarget = {}), // clear the xhr embeds list and embed each item
                xhr._embeds.splice(0).map(function(item) {
                    // get the cached target
                    var target = xhr._cachedTarget[item.id];
                    // ensure the cached target
                    target || (target = xhr._cachedTarget[item.id] = cachedDocument.getElementById(item.id)), 
                    // embed the target into the svg
                    embed(item.parent, item.svg, target);
                });
            }
        }, // test the ready state change immediately
        xhr.onreadystatechange();
    }
    function svg4everybody(rawopts) {
        function oninterval() {
            // while the index exists in the live <use> collection
            for (// get the cached <use> index
            var index = 0; index < uses.length; ) {
                // get the current <use>
                var use = uses[index], parent = use.parentNode, svg = getSVGAncestor(parent), src = use.getAttribute("xlink:href") || use.getAttribute("href");
                if (!src && opts.attributeName && (src = use.getAttribute(opts.attributeName)), 
                svg && src) {
                    if (polyfill) {
                        if (!opts.validate || opts.validate(src, svg, use)) {
                            // remove the <use> element
                            parent.removeChild(use);
                            // parse the src and get the url and id
                            var srcSplit = src.split("#"), url = srcSplit.shift(), id = srcSplit.join("#");
                            // if the link is external
                            if (url.length) {
                                // get the cached xhr request
                                var xhr = requests[url];
                                // ensure the xhr request exists
                                xhr || (xhr = requests[url] = new XMLHttpRequest(), xhr.open("GET", url), xhr.send(), 
                                xhr._embeds = []), // add the svg and id as an item to the xhr embeds list
                                xhr._embeds.push({
                                    parent: parent,
                                    svg: svg,
                                    id: id
                                }), // prepare the xhr ready state change event
                                loadreadystatechange(xhr);
                            } else {
                                // embed the local id into the svg
                                embed(parent, svg, document.getElementById(id));
                            }
                        } else {
                            // increase the index when the previous value was not "valid"
                            ++index, ++numberOfSvgUseElementsToBypass;
                        }
                    }
                } else {
                    // increase the index when the previous value was not "valid"
                    ++index;
                }
            }
            // continue the interval
            (!uses.length || uses.length - numberOfSvgUseElementsToBypass > 0) && requestAnimationFrame(oninterval, 67);
        }
        var polyfill, opts = Object(rawopts), newerIEUA = /\bTrident\/[567]\b|\bMSIE (?:9|10)\.0\b/, webkitUA = /\bAppleWebKit\/(\d+)\b/, olderEdgeUA = /\bEdge\/12\.(\d+)\b/, edgeUA = /\bEdge\/.(\d+)\b/, inIframe = window.top !== window.self;
        polyfill = "polyfill" in opts ? opts.polyfill : newerIEUA.test(navigator.userAgent) || (navigator.userAgent.match(olderEdgeUA) || [])[1] < 10547 || (navigator.userAgent.match(webkitUA) || [])[1] < 537 || edgeUA.test(navigator.userAgent) && inIframe;
        // create xhr requests object
        var requests = {}, requestAnimationFrame = window.requestAnimationFrame || setTimeout, uses = document.getElementsByTagName("use"), numberOfSvgUseElementsToBypass = 0;
        // conditionally start the interval if the polyfill is active
        polyfill && oninterval();
    }
    function getSVGAncestor(node) {
        for (var svg = node; "svg" !== svg.nodeName.toLowerCase() && (svg = svg.parentNode); ) {}
        return svg;
    }
    return svg4everybody;
});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;

/*! cash-dom 1.3.5, https://github.com/kenwheeler/cash @license MIT */
;(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    module.exports = factory();
  } else {
    root.cash = root.$ = factory();
  }
})(this, function () {
  var doc = document, win = window, ArrayProto = Array.prototype, slice = ArrayProto.slice, filter = ArrayProto.filter, push = ArrayProto.push;

  var noop = function () {}, isFunction = function (item) {
    // @see https://crbug.com/568448
    return typeof item === typeof noop && item.call;
  }, isString = function (item) {
    return typeof item === typeof "";
  };

  var idMatch = /^#[\w-]*$/, classMatch = /^\.[\w-]*$/, htmlMatch = /<.+>/, singlet = /^\w+$/;

  function find(selector, context) {
    context = context || doc;
    var elems = (classMatch.test(selector) ? context.getElementsByClassName(selector.slice(1)) : singlet.test(selector) ? context.getElementsByTagName(selector) : context.querySelectorAll(selector));
    return elems;
  }

  var frag;
  function parseHTML(str) {
    if (!frag) {
      frag = doc.implementation.createHTMLDocument();
      var base = frag.createElement("base");
      base.href = doc.location.href;
      frag.head.appendChild(base);
    }

    frag.body.innerHTML = str;

    return frag.body.childNodes;
  }

  function onReady(fn) {
    if (doc.readyState !== "loading") {
      fn();
    } else {
      doc.addEventListener("DOMContentLoaded", fn);
    }
  }

  function Init(selector, context) {
    if (!selector) {
      return this;
    }

    // If already a cash collection, don't do any further processing
    if (selector.cash && selector !== win) {
      return selector;
    }

    var elems = selector, i = 0, length;

    if (isString(selector)) {
      elems = (idMatch.test(selector) ?
      // If an ID use the faster getElementById check
      doc.getElementById(selector.slice(1)) : htmlMatch.test(selector) ?
      // If HTML, parse it into real elements
      parseHTML(selector) :
      // else use `find`
      find(selector, context));

      // If function, use as shortcut for DOM ready
    } else if (isFunction(selector)) {
      onReady(selector);return this;
    }

    if (!elems) {
      return this;
    }

    // If a single DOM element is passed in or received via ID, return the single element
    if (elems.nodeType || elems === win) {
      this[0] = elems;
      this.length = 1;
    } else {
      // Treat like an array and loop through each item.
      length = this.length = elems.length;
      for (; i < length; i++) {
        this[i] = elems[i];
      }
    }

    return this;
  }

  function cash(selector, context) {
    return new Init(selector, context);
  }

  var fn = cash.fn = cash.prototype = Init.prototype = { // jshint ignore:line
    cash: true,
    length: 0,
    push: push,
    splice: ArrayProto.splice,
    map: ArrayProto.map,
    init: Init
  };

  Object.defineProperty(fn, "constructor", { value: cash });

  cash.parseHTML = parseHTML;
  cash.noop = noop;
  cash.isFunction = isFunction;
  cash.isString = isString;

  cash.extend = fn.extend = function (target) {
    target = target || {};

    var args = slice.call(arguments), length = args.length, i = 1;

    if (args.length === 1) {
      target = this;
      i = 0;
    }

    for (; i < length; i++) {
      if (!args[i]) {
        continue;
      }
      for (var key in args[i]) {
        if (args[i].hasOwnProperty(key)) {
          target[key] = args[i][key];
        }
      }
    }

    return target;
  };

  function each(collection, callback) {
    var l = collection.length, i = 0;

    for (; i < l; i++) {
      if (callback.call(collection[i], collection[i], i, collection) === false) {
        break;
      }
    }
  }

  function matches(el, selector) {
    var m = el && (el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector || el.oMatchesSelector);
    return !!m && m.call(el, selector);
  }

  function getCompareFunction(selector) {
    return (
    /* Use browser's `matches` function if string */
    isString(selector) ? matches :
    /* Match a cash element */
    selector.cash ? function (el) {
      return selector.is(el);
    } :
    /* Direct comparison */
    function (el, selector) {
      return el === selector;
    });
  }

  function unique(collection) {
    return cash(slice.call(collection).filter(function (item, index, self) {
      return self.indexOf(item) === index;
    }));
  }

  cash.extend({
    merge: function (first, second) {
      var len = +second.length, i = first.length, j = 0;

      for (; j < len; i++, j++) {
        first[i] = second[j];
      }

      first.length = i;
      return first;
    },

    each: each,
    matches: matches,
    unique: unique,
    isArray: Array.isArray,
    isNumeric: function (n) {
      return !isNaN(parseFloat(n)) && isFinite(n);
    }

  });

  var uid = cash.uid = "_cash" + Date.now();

  function getDataCache(node) {
    return (node[uid] = node[uid] || {});
  }

  function setData(node, key, value) {
    return (getDataCache(node)[key] = value);
  }

  function getData(node, key) {
    var c = getDataCache(node);
    if (c[key] === undefined) {
      c[key] = node.dataset ? node.dataset[key] : cash(node).attr("data-" + key);
    }
    return c[key];
  }

  function removeData(node, key) {
    var c = getDataCache(node);
    if (c) {
      delete c[key];
    } else if (node.dataset) {
      delete node.dataset[key];
    } else {
      cash(node).removeAttr("data-" + name);
    }
  }

  fn.extend({
    data: function (name, value) {
      if (isString(name)) {
        return (value === undefined ? getData(this[0], name) : this.each(function (v) {
          return setData(v, name, value);
        }));
      }

      for (var key in name) {
        this.data(key, name[key]);
      }

      return this;
    },

    removeData: function (key) {
      return this.each(function (v) {
        return removeData(v, key);
      });
    }

  });

  var notWhiteMatch = /\S+/g;

  function getClasses(c) {
    return isString(c) && c.match(notWhiteMatch);
  }

  function hasClass(v, c) {
    return (v.classList ? v.classList.contains(c) : new RegExp("(^| )" + c + "( |$)", "gi").test(v.className));
  }

  function addClass(v, c, spacedName) {
    if (v.classList) {
      v.classList.add(c);
    } else if (spacedName.indexOf(" " + c + " ")) {
      v.className += " " + c;
    }
  }

  function removeClass(v, c) {
    if (v.classList) {
      v.classList.remove(c);
    } else {
      v.className = v.className.replace(c, "");
    }
  }

  fn.extend({
    addClass: function (c) {
      var classes = getClasses(c);

      return (classes ? this.each(function (v) {
        var spacedName = " " + v.className + " ";
        each(classes, function (c) {
          addClass(v, c, spacedName);
        });
      }) : this);
    },

    attr: function (name, value) {
      if (!name) {
        return undefined;
      }

      if (isString(name)) {
        if (value === undefined) {
          return this[0] ? this[0].getAttribute ? this[0].getAttribute(name) : this[0][name] : undefined;
        }

        return this.each(function (v) {
          if (v.setAttribute) {
            v.setAttribute(name, value);
          } else {
            v[name] = value;
          }
        });
      }

      for (var key in name) {
        this.attr(key, name[key]);
      }

      return this;
    },

    hasClass: function (c) {
      var check = false, classes = getClasses(c);
      if (classes && classes.length) {
        this.each(function (v) {
          check = hasClass(v, classes[0]);
          return !check;
        });
      }
      return check;
    },

    prop: function (name, value) {
      if (isString(name)) {
        return (value === undefined ? this[0][name] : this.each(function (v) {
          v[name] = value;
        }));
      }

      for (var key in name) {
        this.prop(key, name[key]);
      }

      return this;
    },

    removeAttr: function (name) {
      return this.each(function (v) {
        if (v.removeAttribute) {
          v.removeAttribute(name);
        } else {
          delete v[name];
        }
      });
    },

    removeClass: function (c) {
      if (!arguments.length) {
        return this.attr("class", "");
      }
      var classes = getClasses(c);
      return (classes ? this.each(function (v) {
        each(classes, function (c) {
          removeClass(v, c);
        });
      }) : this);
    },

    removeProp: function (name) {
      return this.each(function (v) {
        delete v[name];
      });
    },

    toggleClass: function (c, state) {
      if (state !== undefined) {
        return this[state ? "addClass" : "removeClass"](c);
      }
      var classes = getClasses(c);
      return (classes ? this.each(function (v) {
        var spacedName = " " + v.className + " ";
        each(classes, function (c) {
          if (hasClass(v, c)) {
            removeClass(v, c);
          } else {
            addClass(v, c, spacedName);
          }
        });
      }) : this);
    } });

  fn.extend({
    add: function (selector, context) {
      return unique(cash.merge(this, cash(selector, context)));
    },

    each: function (callback) {
      each(this, callback);
      return this;
    },

    eq: function (index) {
      return cash(this.get(index));
    },

    filter: function (selector) {
      if (!selector) {
        return this;
      }

      var comparator = (isFunction(selector) ? selector : getCompareFunction(selector));

      return cash(filter.call(this, function (e) {
        return comparator(e, selector);
      }));
    },

    first: function () {
      return this.eq(0);
    },

    get: function (index) {
      if (index === undefined) {
        return slice.call(this);
      }
      return (index < 0 ? this[index + this.length] : this[index]);
    },

    index: function (elem) {
      var child = elem ? cash(elem)[0] : this[0], collection = elem ? this : cash(child).parent().children();
      return slice.call(collection).indexOf(child);
    },

    last: function () {
      return this.eq(-1);
    }

  });

  var camelCase = (function () {
    var camelRegex = /(?:^\w|[A-Z]|\b\w)/g, whiteSpace = /[\s-_]+/g;
    return function (str) {
      return str.replace(camelRegex, function (letter, index) {
        return letter[index === 0 ? "toLowerCase" : "toUpperCase"]();
      }).replace(whiteSpace, "");
    };
  }());

  var getPrefixedProp = (function () {
    var cache = {}, doc = document, div = doc.createElement("div"), style = div.style;

    return function (prop) {
      prop = camelCase(prop);
      if (cache[prop]) {
        return cache[prop];
      }

      var ucProp = prop.charAt(0).toUpperCase() + prop.slice(1), prefixes = ["webkit", "moz", "ms", "o"], props = (prop + " " + (prefixes).join(ucProp + " ") + ucProp).split(" ");

      each(props, function (p) {
        if (p in style) {
          cache[p] = prop = cache[prop] = p;
          return false;
        }
      });

      return cache[prop];
    };
  }());

  cash.prefixedProp = getPrefixedProp;
  cash.camelCase = camelCase;

  fn.extend({
    css: function (prop, value) {
      if (isString(prop)) {
        prop = getPrefixedProp(prop);
        return (arguments.length > 1 ? this.each(function (v) {
          return v.style[prop] = value;
        }) : win.getComputedStyle(this[0])[prop]);
      }

      for (var key in prop) {
        this.css(key, prop[key]);
      }

      return this;
    }

  });

  function compute(el, prop) {
    return parseInt(win.getComputedStyle(el[0], null)[prop], 10) || 0;
  }

  each(["Width", "Height"], function (v) {
    var lower = v.toLowerCase();

    fn[lower] = function () {
      return this[0].getBoundingClientRect()[lower];
    };

    fn["inner" + v] = function () {
      return this[0]["client" + v];
    };

    fn["outer" + v] = function (margins) {
      return this[0]["offset" + v] + (margins ? compute(this, "margin" + (v === "Width" ? "Left" : "Top")) + compute(this, "margin" + (v === "Width" ? "Right" : "Bottom")) : 0);
    };
  });

  function registerEvent(node, eventName, callback) {
    var eventCache = getData(node, "_cashEvents") || setData(node, "_cashEvents", {});
    eventCache[eventName] = eventCache[eventName] || [];
    eventCache[eventName].push(callback);
    node.addEventListener(eventName, callback);
  }

  function removeEvent(node, eventName, callback) {
    var events = getData(node, "_cashEvents"), eventCache = (events && events[eventName]), index;

    if (!eventCache) {
      return;
    }

    if (callback) {
      node.removeEventListener(eventName, callback);
      index = eventCache.indexOf(callback);
      if (index >= 0) {
        eventCache.splice(index, 1);
      }
    } else {
      each(eventCache, function (event) {
        node.removeEventListener(eventName, event);
      });
      eventCache = [];
    }
  }

  fn.extend({
    off: function (eventName, callback) {
      return this.each(function (v) {
        return removeEvent(v, eventName, callback);
      });
    },

    on: function (eventName, delegate, callback, runOnce) {
      // jshint ignore:line

      var originalCallback;

      if (!isString(eventName)) {
        for (var key in eventName) {
          this.on(key, delegate, eventName[key]);
        }
        return this;
      }

      if (isFunction(delegate)) {
        callback = delegate;
        delegate = null;
      }

      if (eventName === "ready") {
        onReady(callback);
        return this;
      }

      if (delegate) {
        originalCallback = callback;
        callback = function (e) {
          var t = e.target;

          while (!matches(t, delegate)) {
            if (t === this) {
              return (t = false);
            }
            t = t.parentNode;
          }

          if (t) {
            originalCallback.call(t, e);
          }
        };
      }

      return this.each(function (v) {
        var finalCallback = callback;
        if (runOnce) {
          finalCallback = function () {
            callback.apply(this, arguments);
            removeEvent(v, eventName, finalCallback);
          };
        }
        registerEvent(v, eventName, finalCallback);
      });
    },

    one: function (eventName, delegate, callback) {
      return this.on(eventName, delegate, callback, true);
    },

    ready: onReady,

    trigger: function (eventName, data) {
      var evt = doc.createEvent("HTMLEvents");
      evt.data = data;
      evt.initEvent(eventName, true, false);
      return this.each(function (v) {
        return v.dispatchEvent(evt);
      });
    }

  });

  function encode(name, value) {
    return "&" + encodeURIComponent(name) + "=" + encodeURIComponent(value).replace(/%20/g, "+");
  }

  function getSelectMultiple_(el) {
    var values = [];
    each(el.options, function (o) {
      if (o.selected) {
        values.push(o.value);
      }
    });
    return values.length ? values : null;
  }

  function getSelectSingle_(el) {
    var selectedIndex = el.selectedIndex;
    return selectedIndex >= 0 ? el.options[selectedIndex].value : null;
  }

  function getValue(el) {
    var type = el.type;
    if (!type) {
      return null;
    }
    switch (type.toLowerCase()) {
      case "select-one":
        return getSelectSingle_(el);
      case "select-multiple":
        return getSelectMultiple_(el);
      case "radio":
        return (el.checked) ? el.value : null;
      case "checkbox":
        return (el.checked) ? el.value : null;
      default:
        return el.value ? el.value : null;
    }
  }

  fn.extend({
    serialize: function () {
      var query = "";

      each(this[0].elements || this, function (el) {
        if (el.disabled || el.tagName === "FIELDSET") {
          return;
        }
        var name = el.name;
        switch (el.type.toLowerCase()) {
          case "file":
          case "reset":
          case "submit":
          case "button":
            break;
          case "select-multiple":
            var values = getValue(el);
            if (values !== null) {
              each(values, function (value) {
                query += encode(name, value);
              });
            }
            break;
          default:
            var value = getValue(el);
            if (value !== null) {
              query += encode(name, value);
            }
        }
      });

      return query.substr(1);
    },

    val: function (value) {
      if (value === undefined) {
        return getValue(this[0]);
      } else {
        return this.each(function (v) {
          return v.value = value;
        });
      }
    }

  });

  function insertElement(el, child, prepend) {
    if (prepend) {
      var first = el.childNodes[0];
      el.insertBefore(child, first);
    } else {
      el.appendChild(child);
    }
  }

  function insertContent(parent, child, prepend) {
    var str = isString(child);

    if (!str && child.length) {
      each(child, function (v) {
        return insertContent(parent, v, prepend);
      });
      return;
    }

    each(parent, str ? function (v) {
      return v.insertAdjacentHTML(prepend ? "afterbegin" : "beforeend", child);
    } : function (v, i) {
      return insertElement(v, (i === 0 ? child : child.cloneNode(true)), prepend);
    });
  }

  fn.extend({
    after: function (selector) {
      cash(selector).insertAfter(this);
      return this;
    },

    append: function (content) {
      insertContent(this, content);
      return this;
    },

    appendTo: function (parent) {
      insertContent(cash(parent), this);
      return this;
    },

    before: function (selector) {
      cash(selector).insertBefore(this);
      return this;
    },

    clone: function () {
      return cash(this.map(function (v) {
        return v.cloneNode(true);
      }));
    },

    empty: function () {
      this.html("");
      return this;
    },

    html: function (content) {
      if (content === undefined) {
        return this[0].innerHTML;
      }
      var source = (content.nodeType ? content[0].outerHTML : content);
      return this.each(function (v) {
        return v.innerHTML = source;
      });
    },

    insertAfter: function (selector) {
      var _this = this;


      cash(selector).each(function (el, i) {
        var parent = el.parentNode, sibling = el.nextSibling;
        _this.each(function (v) {
          parent.insertBefore((i === 0 ? v : v.cloneNode(true)), sibling);
        });
      });

      return this;
    },

    insertBefore: function (selector) {
      var _this2 = this;
      cash(selector).each(function (el, i) {
        var parent = el.parentNode;
        _this2.each(function (v) {
          parent.insertBefore((i === 0 ? v : v.cloneNode(true)), el);
        });
      });
      return this;
    },

    prepend: function (content) {
      insertContent(this, content, true);
      return this;
    },

    prependTo: function (parent) {
      insertContent(cash(parent), this, true);
      return this;
    },

    remove: function () {
      return this.each(function (v) {
        return v.parentNode.removeChild(v);
      });
    },

    text: function (content) {
      if (content === undefined) {
        return this[0].textContent;
      }
      return this.each(function (v) {
        return v.textContent = content;
      });
    }

  });

  var docEl = doc.documentElement;

  fn.extend({
    position: function () {
      var el = this[0];
      return {
        left: el.offsetLeft,
        top: el.offsetTop
      };
    },

    offset: function () {
      var rect = this[0].getBoundingClientRect();
      return {
        top: rect.top + win.pageYOffset - docEl.clientTop,
        left: rect.left + win.pageXOffset - docEl.clientLeft
      };
    },

    offsetParent: function () {
      return cash(this[0].offsetParent);
    }

  });

  fn.extend({
    children: function (selector) {
      var elems = [];
      this.each(function (el) {
        push.apply(elems, el.children);
      });
      elems = unique(elems);

      return (!selector ? elems : elems.filter(function (v) {
        return matches(v, selector);
      }));
    },

    closest: function (selector) {
      if (!selector || this.length < 1) {
        return cash();
      }
      if (this.is(selector)) {
        return this.filter(selector);
      }
      return this.parent().closest(selector);
    },

    is: function (selector) {
      if (!selector) {
        return false;
      }

      var match = false, comparator = getCompareFunction(selector);

      this.each(function (el) {
        match = comparator(el, selector);
        return !match;
      });

      return match;
    },

    find: function (selector) {
      if (!selector || selector.nodeType) {
        return cash(selector && this.has(selector).length ? selector : null);
      }

      var elems = [];
      this.each(function (el) {
        push.apply(elems, find(selector, el));
      });

      return unique(elems);
    },

    has: function (selector) {
      var comparator = (isString(selector) ? function (el) {
        return find(selector, el).length !== 0;
      } : function (el) {
        return el.contains(selector);
      });

      return this.filter(comparator);
    },

    next: function () {
      return cash(this[0].nextElementSibling);
    },

    not: function (selector) {
      if (!selector) {
        return this;
      }

      var comparator = getCompareFunction(selector);

      return this.filter(function (el) {
        return !comparator(el, selector);
      });
    },

    parent: function () {
      var result = [];

      this.each(function (item) {
        if (item && item.parentNode) {
          result.push(item.parentNode);
        }
      });

      return unique(result);
    },

    parents: function (selector) {
      var last, result = [];

      this.each(function (item) {
        last = item;

        while (last && last.parentNode && last !== doc.body.parentNode) {
          last = last.parentNode;

          if (!selector || (selector && matches(last, selector))) {
            result.push(last);
          }
        }
      });

      return unique(result);
    },

    prev: function () {
      return cash(this[0].previousElementSibling);
    },

    siblings: function () {
      var collection = this.parent().children(), el = this[0];

      return collection.filter(function (i) {
        return i !== el;
      });
    }

  });


  return cash;
});

/***/ }),
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(2);
__webpack_require__(1);
module.exports = __webpack_require__(0);


/***/ })
],[8]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdmFuaWxsYS1sYXp5bG9hZC9kaXN0L2xhenlsb2FkLm1pbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3ZnNGV2ZXJ5Ym9keS9kaXN0L3N2ZzRldmVyeWJvZHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nhc2gtZG9tL2Rpc3QvY2FzaC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsMEdBQXdDLFlBQVksbUJBQW1CLEtBQUssbUJBQW1CLHNFQUFzRSxTQUFTLGlGQUFpRixnQkFBZ0IsYUFBYSxxR0FBcUcsZUFBZTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9IQUFvTCxpQkFBaUIsYUFBYSxPQUFPLHlUQUF5VCw4RUFBOEUsUUFBUSxlQUFlLGtHQUFrRyxtQkFBbUIscUZBQXFGLGVBQWUsb0dBQW9HLG1CQUFtQix3QkFBd0IsdURBQXVELG1CQUFtQixrRUFBa0UsbUJBQW1CLGlFQUFpRSxtQkFBbUIsZ0RBQWdELGlCQUFpQixpQkFBaUIsSUFBSSwyQ0FBMkMsUUFBUSxZQUFZLEVBQUUsU0FBUyx1RkFBdUYsV0FBVyxFQUFFLHdCQUF3QixpQkFBaUIsaUNBQWlDLG1CQUFtQixtQ0FBbUMsaUJBQWlCLG1CQUFtQixxQ0FBcUMsb0JBQW9CLEtBQUssb0JBQW9CLHlCQUF5QixhQUFhLGdDQUFnQyxtQkFBbUIseUJBQXlCLGNBQWMsT0FBTyxhQUFhLHNFQUFzRSxvRkFBb0YsNkRBQTZELHlEQUF5RCxpQkFBaUIsdUlBQXVJLGVBQWUsMEJBQTBCLG1TQUFtUyxhQUFhLG9CQUFvQixvQ0FBb0Msb0lBQW9JLGdCQUFnQixxSUFBcUksbU1BQW1NLGlDQUFpQyx1RkFBdUYsUUFBUSxJQUFJLEtBQUssV0FBVyx3SkFBd0osS0FBSyxTQUFTLHNEQUFzRCwyREFBMkQsMkJBQTJCLDhDQUE4QyxRQUFRLElBQUksS0FBSyxXQUFXLGdDQUFnQyxLQUFLLFdBQVcscUJBQXFCLGdDQUFnQyxnSUFBZ0ksK0JBQStCLG1JQUFtSSx5QkFBeUIsOEJBQThCLFVBQVUsZ0RBQWdELHlNQUF5TSxxRkFBcUYsZ0JBQWdCLGlDQUFpQyxtQkFBbUIsaU1BQWlNLG9CQUFvQix3T0FBd08sNkJBQTZCLHdCQUF3QixlQUFlLGlCQUFpQixJQUFJLGNBQWMsWUFBWSxRQUFRLEU7Ozs7OztBQ0F2Nks7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQUE7QUFDTDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMseUJBQXlCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdGQUF3RjtBQUN4RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIscUJBQXFCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsZ0VBQWdFO0FBQzVGO0FBQ0E7QUFDQTtBQUNBLENBQUMsRTs7Ozs7OztrRUN6R0Q7O0FBRUE7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7O0FBRUEsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0wsd0JBQXdCO0FBQ3hCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWSxZQUFZO0FBQ3hCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSx3REFBd0Q7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsNENBQTRDLGNBQWM7O0FBRTFEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsVUFBVSxZQUFZO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsVUFBVSxPQUFPO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsWUFBWSxTQUFTO0FBQ3JCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRzs7QUFFSDs7QUFFQTtBQUNBLHVDQUF1QztBQUN2Qzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUEsR0FBRzs7QUFFSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1AsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUCxLQUFLLEVBQUU7O0FBRVA7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHOztBQUVIO0FBQ0Esa0JBQWtCOztBQUVsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0Esb0ZBQW9GO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLOztBQUVMO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87O0FBRVA7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUEsR0FBRzs7QUFFSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUEsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPOztBQUVQO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBLEdBQUc7OztBQUdIO0FBQ0EsQ0FBQyxFIiwiZmlsZSI6Ii9qcy9mcm9udGVuZC92ZW5kb3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX2V4dGVuZHM9T2JqZWN0LmFzc2lnbnx8ZnVuY3Rpb24oZSl7Zm9yKHZhciB0PTE7dDxhcmd1bWVudHMubGVuZ3RoO3QrKyl7dmFyIG49YXJndW1lbnRzW3RdO2Zvcih2YXIgbyBpbiBuKU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChuLG8pJiYoZVtvXT1uW29dKX1yZXR1cm4gZX0sX3R5cGVvZj1cImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJlwic3ltYm9sXCI9PXR5cGVvZiBTeW1ib2wuaXRlcmF0b3I/ZnVuY3Rpb24oZSl7cmV0dXJuIHR5cGVvZiBlfTpmdW5jdGlvbihlKXtyZXR1cm4gZSYmXCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZlLmNvbnN0cnVjdG9yPT09U3ltYm9sJiZlIT09U3ltYm9sLnByb3RvdHlwZT9cInN5bWJvbFwiOnR5cGVvZiBlfTshZnVuY3Rpb24oZSx0KXtcIm9iamVjdFwiPT09KFwidW5kZWZpbmVkXCI9PXR5cGVvZiBleHBvcnRzP1widW5kZWZpbmVkXCI6X3R5cGVvZihleHBvcnRzKSkmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9dCgpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUodCk6ZS5MYXp5TG9hZD10KCl9KHRoaXMsZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjt2YXIgZT17ZWxlbWVudHNfc2VsZWN0b3I6XCJpbWdcIixjb250YWluZXI6d2luZG93LHRocmVzaG9sZDozMDAsdGhyb3R0bGU6MTUwLGRhdGFfc3JjOlwic3JjXCIsZGF0YV9zcmNzZXQ6XCJzcmNzZXRcIixjbGFzc19sb2FkaW5nOlwibG9hZGluZ1wiLGNsYXNzX2xvYWRlZDpcImxvYWRlZFwiLGNsYXNzX2Vycm9yOlwiZXJyb3JcIixjbGFzc19pbml0aWFsOlwiaW5pdGlhbFwiLHNraXBfaW52aXNpYmxlOiEwLGNhbGxiYWNrX2xvYWQ6bnVsbCxjYWxsYmFja19lcnJvcjpudWxsLGNhbGxiYWNrX3NldDpudWxsLGNhbGxiYWNrX3Byb2Nlc3NlZDpudWxsLGNhbGxiYWNrX2VudGVyOm51bGx9LHQ9IShcIm9uc2Nyb2xsXCJpbiB3aW5kb3cpfHwvZ2xlYm90Ly50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpLG49ZnVuY3Rpb24oZSx0KXtlJiZlKHQpfSxvPWZ1bmN0aW9uKGUpe3JldHVybiBlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCt3aW5kb3cucGFnZVlPZmZzZXQtZS5vd25lckRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRUb3B9LGk9ZnVuY3Rpb24oZSx0LG4pe3JldHVybih0PT09d2luZG93P3dpbmRvdy5pbm5lckhlaWdodCt3aW5kb3cucGFnZVlPZmZzZXQ6byh0KSt0Lm9mZnNldEhlaWdodCk8PW8oZSktbn0scz1mdW5jdGlvbihlKXtyZXR1cm4gZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0K3dpbmRvdy5wYWdlWE9mZnNldC1lLm93bmVyRG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudExlZnR9LHI9ZnVuY3Rpb24oZSx0LG4pe3ZhciBvPXdpbmRvdy5pbm5lcldpZHRoO3JldHVybih0PT09d2luZG93P28rd2luZG93LnBhZ2VYT2Zmc2V0OnModCkrbyk8PXMoZSktbn0sbD1mdW5jdGlvbihlLHQsbil7cmV0dXJuKHQ9PT13aW5kb3c/d2luZG93LnBhZ2VZT2Zmc2V0Om8odCkpPj1vKGUpK24rZS5vZmZzZXRIZWlnaHR9LGE9ZnVuY3Rpb24oZSx0LG4pe3JldHVybih0PT09d2luZG93P3dpbmRvdy5wYWdlWE9mZnNldDpzKHQpKT49cyhlKStuK2Uub2Zmc2V0V2lkdGh9LGM9ZnVuY3Rpb24oZSx0LG4pe3JldHVybiEoaShlLHQsbil8fGwoZSx0LG4pfHxyKGUsdCxuKXx8YShlLHQsbikpfSx1PWZ1bmN0aW9uKGUsdCl7dmFyIG4sbz1uZXcgZSh0KTt0cnl7bj1uZXcgQ3VzdG9tRXZlbnQoXCJMYXp5TG9hZDo6SW5pdGlhbGl6ZWRcIix7ZGV0YWlsOntpbnN0YW5jZTpvfX0pfWNhdGNoKGUpeyhuPWRvY3VtZW50LmNyZWF0ZUV2ZW50KFwiQ3VzdG9tRXZlbnRcIikpLmluaXRDdXN0b21FdmVudChcIkxhenlMb2FkOjpJbml0aWFsaXplZFwiLCExLCExLHtpbnN0YW5jZTpvfSl9d2luZG93LmRpc3BhdGNoRXZlbnQobil9LGQ9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLVwiK3QpfSxoPWZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gZS5zZXRBdHRyaWJ1dGUoXCJkYXRhLVwiK3Qsbil9LF89ZnVuY3Rpb24oZSx0KXt2YXIgbj1lLnBhcmVudE5vZGU7aWYoXCJQSUNUVVJFXCI9PT1uLnRhZ05hbWUpZm9yKHZhciBvPTA7bzxuLmNoaWxkcmVuLmxlbmd0aDtvKyspe3ZhciBpPW4uY2hpbGRyZW5bb107aWYoXCJTT1VSQ0VcIj09PWkudGFnTmFtZSl7dmFyIHM9ZChpLHQpO3MmJmkuc2V0QXR0cmlidXRlKFwic3Jjc2V0XCIscyl9fX0sZj1mdW5jdGlvbihlLHQsbil7dmFyIG89ZS50YWdOYW1lLGk9ZChlLG4pO2lmKFwiSU1HXCI9PT1vKXtfKGUsdCk7dmFyIHM9ZChlLHQpO3JldHVybiBzJiZlLnNldEF0dHJpYnV0ZShcInNyY3NldFwiLHMpLHZvaWQoaSYmZS5zZXRBdHRyaWJ1dGUoXCJzcmNcIixpKSl9XCJJRlJBTUVcIiE9PW8/aSYmKGUuc3R5bGUuYmFja2dyb3VuZEltYWdlPSd1cmwoXCInK2krJ1wiKScpOmkmJmUuc2V0QXR0cmlidXRlKFwic3JjXCIsaSl9LHA9XCJjbGFzc0xpc3RcImluIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpLG09ZnVuY3Rpb24oZSx0KXtwP2UuY2xhc3NMaXN0LmFkZCh0KTplLmNsYXNzTmFtZSs9KGUuY2xhc3NOYW1lP1wiIFwiOlwiXCIpK3R9LGc9ZnVuY3Rpb24oZSx0KXtwP2UuY2xhc3NMaXN0LnJlbW92ZSh0KTplLmNsYXNzTmFtZT1lLmNsYXNzTmFtZS5yZXBsYWNlKG5ldyBSZWdFeHAoXCIoXnxcXFxccyspXCIrdCtcIihcXFxccyt8JClcIiksXCIgXCIpLnJlcGxhY2UoL15cXHMrLyxcIlwiKS5yZXBsYWNlKC9cXHMrJC8sXCJcIil9LHY9ZnVuY3Rpb24odCl7dGhpcy5fc2V0dGluZ3M9X2V4dGVuZHMoe30sZSx0KSx0aGlzLl9xdWVyeU9yaWdpbk5vZGU9dGhpcy5fc2V0dGluZ3MuY29udGFpbmVyPT09d2luZG93P2RvY3VtZW50OnRoaXMuX3NldHRpbmdzLmNvbnRhaW5lcix0aGlzLl9wcmV2aW91c0xvb3BUaW1lPTAsdGhpcy5fbG9vcFRpbWVvdXQ9bnVsbCx0aGlzLl9ib3VuZEhhbmRsZVNjcm9sbD10aGlzLmhhbmRsZVNjcm9sbC5iaW5kKHRoaXMpLHRoaXMuX2lzRmlyc3RMb29wPSEwLHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsdGhpcy5fYm91bmRIYW5kbGVTY3JvbGwpLHRoaXMudXBkYXRlKCl9O3YucHJvdG90eXBlPXtfcmV2ZWFsOmZ1bmN0aW9uKGUpe3ZhciB0PXRoaXMuX3NldHRpbmdzLG89ZnVuY3Rpb24gbygpe3QmJihlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsaSksZS5yZW1vdmVFdmVudExpc3RlbmVyKFwiZXJyb3JcIixvKSxnKGUsdC5jbGFzc19sb2FkaW5nKSxtKGUsdC5jbGFzc19lcnJvciksbih0LmNhbGxiYWNrX2Vycm9yLGUpKX0saT1mdW5jdGlvbiBpKCl7dCYmKGcoZSx0LmNsYXNzX2xvYWRpbmcpLG0oZSx0LmNsYXNzX2xvYWRlZCksZS5yZW1vdmVFdmVudExpc3RlbmVyKFwibG9hZFwiLGkpLGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsbyksbih0LmNhbGxiYWNrX2xvYWQsZSkpfTtuKHQuY2FsbGJhY2tfZW50ZXIsZSksXCJJTUdcIiE9PWUudGFnTmFtZSYmXCJJRlJBTUVcIiE9PWUudGFnTmFtZXx8KGUuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIixpKSxlLmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLG8pLG0oZSx0LmNsYXNzX2xvYWRpbmcpKSxmKGUsdC5kYXRhX3NyY3NldCx0LmRhdGFfc3JjKSxuKHQuY2FsbGJhY2tfc2V0LGUpfSxfbG9vcFRocm91Z2hFbGVtZW50czpmdW5jdGlvbigpe3ZhciBlPXRoaXMuX3NldHRpbmdzLG89dGhpcy5fZWxlbWVudHMsaT1vP28ubGVuZ3RoOjAscz12b2lkIDAscj1bXSxsPXRoaXMuX2lzRmlyc3RMb29wO2ZvcihzPTA7czxpO3MrKyl7dmFyIGE9b1tzXTtlLnNraXBfaW52aXNpYmxlJiZudWxsPT09YS5vZmZzZXRQYXJlbnR8fCh0fHxjKGEsZS5jb250YWluZXIsZS50aHJlc2hvbGQpKSYmKGwmJm0oYSxlLmNsYXNzX2luaXRpYWwpLHRoaXMuX3JldmVhbChhKSxyLnB1c2gocyksaChhLFwid2FzLXByb2Nlc3NlZFwiLCEwKSl9Zm9yKDtyLmxlbmd0aDspby5zcGxpY2Uoci5wb3AoKSwxKSxuKGUuY2FsbGJhY2tfcHJvY2Vzc2VkLG8ubGVuZ3RoKTswPT09aSYmdGhpcy5fc3RvcFNjcm9sbEhhbmRsZXIoKSxsJiYodGhpcy5faXNGaXJzdExvb3A9ITEpfSxfcHVyZ2VFbGVtZW50czpmdW5jdGlvbigpe3ZhciBlPXRoaXMuX2VsZW1lbnRzLHQ9ZS5sZW5ndGgsbj12b2lkIDAsbz1bXTtmb3Iobj0wO248dDtuKyspe3ZhciBpPWVbbl07ZChpLFwid2FzLXByb2Nlc3NlZFwiKSYmby5wdXNoKG4pfWZvcig7by5sZW5ndGg+MDspZS5zcGxpY2Uoby5wb3AoKSwxKX0sX3N0YXJ0U2Nyb2xsSGFuZGxlcjpmdW5jdGlvbigpe3RoaXMuX2lzSGFuZGxpbmdTY3JvbGx8fCh0aGlzLl9pc0hhbmRsaW5nU2Nyb2xsPSEwLHRoaXMuX3NldHRpbmdzLmNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsdGhpcy5fYm91bmRIYW5kbGVTY3JvbGwpKX0sX3N0b3BTY3JvbGxIYW5kbGVyOmZ1bmN0aW9uKCl7dGhpcy5faXNIYW5kbGluZ1Njcm9sbCYmKHRoaXMuX2lzSGFuZGxpbmdTY3JvbGw9ITEsdGhpcy5fc2V0dGluZ3MuY29udGFpbmVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIix0aGlzLl9ib3VuZEhhbmRsZVNjcm9sbCkpfSxoYW5kbGVTY3JvbGw6ZnVuY3Rpb24oKXt2YXIgZT10aGlzLl9zZXR0aW5ncy50aHJvdHRsZTtpZigwIT09ZSl7dmFyIHQ9RGF0ZS5ub3coKSxuPWUtKHQtdGhpcy5fcHJldmlvdXNMb29wVGltZSk7bjw9MHx8bj5lPyh0aGlzLl9sb29wVGltZW91dCYmKGNsZWFyVGltZW91dCh0aGlzLl9sb29wVGltZW91dCksdGhpcy5fbG9vcFRpbWVvdXQ9bnVsbCksdGhpcy5fcHJldmlvdXNMb29wVGltZT10LHRoaXMuX2xvb3BUaHJvdWdoRWxlbWVudHMoKSk6dGhpcy5fbG9vcFRpbWVvdXR8fCh0aGlzLl9sb29wVGltZW91dD1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7dGhpcy5fcHJldmlvdXNMb29wVGltZT1EYXRlLm5vdygpLHRoaXMuX2xvb3BUaW1lb3V0PW51bGwsdGhpcy5fbG9vcFRocm91Z2hFbGVtZW50cygpfS5iaW5kKHRoaXMpLG4pKX1lbHNlIHRoaXMuX2xvb3BUaHJvdWdoRWxlbWVudHMoKX0sdXBkYXRlOmZ1bmN0aW9uKCl7dGhpcy5fZWxlbWVudHM9QXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwodGhpcy5fcXVlcnlPcmlnaW5Ob2RlLnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5fc2V0dGluZ3MuZWxlbWVudHNfc2VsZWN0b3IpKSx0aGlzLl9wdXJnZUVsZW1lbnRzKCksdGhpcy5fbG9vcFRocm91Z2hFbGVtZW50cygpLHRoaXMuX3N0YXJ0U2Nyb2xsSGFuZGxlcigpfSxkZXN0cm95OmZ1bmN0aW9uKCl7d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIix0aGlzLl9ib3VuZEhhbmRsZVNjcm9sbCksdGhpcy5fbG9vcFRpbWVvdXQmJihjbGVhclRpbWVvdXQodGhpcy5fbG9vcFRpbWVvdXQpLHRoaXMuX2xvb3BUaW1lb3V0PW51bGwpLHRoaXMuX3N0b3BTY3JvbGxIYW5kbGVyKCksdGhpcy5fZWxlbWVudHM9bnVsbCx0aGlzLl9xdWVyeU9yaWdpbk5vZGU9bnVsbCx0aGlzLl9zZXR0aW5ncz1udWxsfX07dmFyIHc9d2luZG93LmxhenlMb2FkT3B0aW9ucztyZXR1cm4gdyYmZnVuY3Rpb24oZSx0KXt2YXIgbj10Lmxlbmd0aDtpZihuKWZvcih2YXIgbz0wO288bjtvKyspdShlLHRbb10pO2Vsc2UgdShlLHQpfSh2LHcpLHZ9KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92YW5pbGxhLWxhenlsb2FkL2Rpc3QvbGF6eWxvYWQubWluLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIiFmdW5jdGlvbihyb290LCBmYWN0b3J5KSB7XG4gICAgXCJmdW5jdGlvblwiID09IHR5cGVvZiBkZWZpbmUgJiYgZGVmaW5lLmFtZCA/IC8vIEFNRC4gUmVnaXN0ZXIgYXMgYW4gYW5vbnltb3VzIG1vZHVsZSB1bmxlc3MgYW1kTW9kdWxlSWQgaXMgc2V0XG4gICAgZGVmaW5lKFtdLCBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHJvb3Quc3ZnNGV2ZXJ5Ym9keSA9IGZhY3RvcnkoKTtcbiAgICB9KSA6IFwib2JqZWN0XCIgPT0gdHlwZW9mIG1vZHVsZSAmJiBtb2R1bGUuZXhwb3J0cyA/IC8vIE5vZGUuIERvZXMgbm90IHdvcmsgd2l0aCBzdHJpY3QgQ29tbW9uSlMsIGJ1dFxuICAgIC8vIG9ubHkgQ29tbW9uSlMtbGlrZSBlbnZpcm9ubWVudHMgdGhhdCBzdXBwb3J0IG1vZHVsZS5leHBvcnRzLFxuICAgIC8vIGxpa2UgTm9kZS5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKSA6IHJvb3Quc3ZnNGV2ZXJ5Ym9keSA9IGZhY3RvcnkoKTtcbn0odGhpcywgZnVuY3Rpb24oKSB7XG4gICAgLyohIHN2ZzRldmVyeWJvZHkgdjIuMS45IHwgZ2l0aHViLmNvbS9qb25hdGhhbnRuZWFsL3N2ZzRldmVyeWJvZHkgKi9cbiAgICBmdW5jdGlvbiBlbWJlZChwYXJlbnQsIHN2ZywgdGFyZ2V0KSB7XG4gICAgICAgIC8vIGlmIHRoZSB0YXJnZXQgZXhpc3RzXG4gICAgICAgIGlmICh0YXJnZXQpIHtcbiAgICAgICAgICAgIC8vIGNyZWF0ZSBhIGRvY3VtZW50IGZyYWdtZW50IHRvIGhvbGQgdGhlIGNvbnRlbnRzIG9mIHRoZSB0YXJnZXRcbiAgICAgICAgICAgIHZhciBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKSwgdmlld0JveCA9ICFzdmcuaGFzQXR0cmlidXRlKFwidmlld0JveFwiKSAmJiB0YXJnZXQuZ2V0QXR0cmlidXRlKFwidmlld0JveFwiKTtcbiAgICAgICAgICAgIC8vIGNvbmRpdGlvbmFsbHkgc2V0IHRoZSB2aWV3Qm94IG9uIHRoZSBzdmdcbiAgICAgICAgICAgIHZpZXdCb3ggJiYgc3ZnLnNldEF0dHJpYnV0ZShcInZpZXdCb3hcIiwgdmlld0JveCk7XG4gICAgICAgICAgICAvLyBjb3B5IHRoZSBjb250ZW50cyBvZiB0aGUgY2xvbmUgaW50byB0aGUgZnJhZ21lbnRcbiAgICAgICAgICAgIGZvciAoLy8gY2xvbmUgdGhlIHRhcmdldFxuICAgICAgICAgICAgdmFyIGNsb25lID0gdGFyZ2V0LmNsb25lTm9kZSghMCk7IGNsb25lLmNoaWxkTm9kZXMubGVuZ3RoOyApIHtcbiAgICAgICAgICAgICAgICBmcmFnbWVudC5hcHBlbmRDaGlsZChjbG9uZS5maXJzdENoaWxkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGFwcGVuZCB0aGUgZnJhZ21lbnQgaW50byB0aGUgc3ZnXG4gICAgICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoZnJhZ21lbnQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIGxvYWRyZWFkeXN0YXRlY2hhbmdlKHhocikge1xuICAgICAgICAvLyBsaXN0ZW4gdG8gY2hhbmdlcyBpbiB0aGUgcmVxdWVzdFxuICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAvLyBpZiB0aGUgcmVxdWVzdCBpcyByZWFkeVxuICAgICAgICAgICAgaWYgKDQgPT09IHhoci5yZWFkeVN0YXRlKSB7XG4gICAgICAgICAgICAgICAgLy8gZ2V0IHRoZSBjYWNoZWQgaHRtbCBkb2N1bWVudFxuICAgICAgICAgICAgICAgIHZhciBjYWNoZWREb2N1bWVudCA9IHhoci5fY2FjaGVkRG9jdW1lbnQ7XG4gICAgICAgICAgICAgICAgLy8gZW5zdXJlIHRoZSBjYWNoZWQgaHRtbCBkb2N1bWVudCBiYXNlZCBvbiB0aGUgeGhyIHJlc3BvbnNlXG4gICAgICAgICAgICAgICAgY2FjaGVkRG9jdW1lbnQgfHwgKGNhY2hlZERvY3VtZW50ID0geGhyLl9jYWNoZWREb2N1bWVudCA9IGRvY3VtZW50LmltcGxlbWVudGF0aW9uLmNyZWF0ZUhUTUxEb2N1bWVudChcIlwiKSwgXG4gICAgICAgICAgICAgICAgY2FjaGVkRG9jdW1lbnQuYm9keS5pbm5lckhUTUwgPSB4aHIucmVzcG9uc2VUZXh0LCB4aHIuX2NhY2hlZFRhcmdldCA9IHt9KSwgLy8gY2xlYXIgdGhlIHhociBlbWJlZHMgbGlzdCBhbmQgZW1iZWQgZWFjaCBpdGVtXG4gICAgICAgICAgICAgICAgeGhyLl9lbWJlZHMuc3BsaWNlKDApLm1hcChmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGdldCB0aGUgY2FjaGVkIHRhcmdldFxuICAgICAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0ID0geGhyLl9jYWNoZWRUYXJnZXRbaXRlbS5pZF07XG4gICAgICAgICAgICAgICAgICAgIC8vIGVuc3VyZSB0aGUgY2FjaGVkIHRhcmdldFxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQgfHwgKHRhcmdldCA9IHhoci5fY2FjaGVkVGFyZ2V0W2l0ZW0uaWRdID0gY2FjaGVkRG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaXRlbS5pZCkpLCBcbiAgICAgICAgICAgICAgICAgICAgLy8gZW1iZWQgdGhlIHRhcmdldCBpbnRvIHRoZSBzdmdcbiAgICAgICAgICAgICAgICAgICAgZW1iZWQoaXRlbS5wYXJlbnQsIGl0ZW0uc3ZnLCB0YXJnZXQpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCAvLyB0ZXN0IHRoZSByZWFkeSBzdGF0ZSBjaGFuZ2UgaW1tZWRpYXRlbHlcbiAgICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSgpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBzdmc0ZXZlcnlib2R5KHJhd29wdHMpIHtcbiAgICAgICAgZnVuY3Rpb24gb25pbnRlcnZhbCgpIHtcbiAgICAgICAgICAgIC8vIHdoaWxlIHRoZSBpbmRleCBleGlzdHMgaW4gdGhlIGxpdmUgPHVzZT4gY29sbGVjdGlvblxuICAgICAgICAgICAgZm9yICgvLyBnZXQgdGhlIGNhY2hlZCA8dXNlPiBpbmRleFxuICAgICAgICAgICAgdmFyIGluZGV4ID0gMDsgaW5kZXggPCB1c2VzLmxlbmd0aDsgKSB7XG4gICAgICAgICAgICAgICAgLy8gZ2V0IHRoZSBjdXJyZW50IDx1c2U+XG4gICAgICAgICAgICAgICAgdmFyIHVzZSA9IHVzZXNbaW5kZXhdLCBwYXJlbnQgPSB1c2UucGFyZW50Tm9kZSwgc3ZnID0gZ2V0U1ZHQW5jZXN0b3IocGFyZW50KSwgc3JjID0gdXNlLmdldEF0dHJpYnV0ZShcInhsaW5rOmhyZWZcIikgfHwgdXNlLmdldEF0dHJpYnV0ZShcImhyZWZcIik7XG4gICAgICAgICAgICAgICAgaWYgKCFzcmMgJiYgb3B0cy5hdHRyaWJ1dGVOYW1lICYmIChzcmMgPSB1c2UuZ2V0QXR0cmlidXRlKG9wdHMuYXR0cmlidXRlTmFtZSkpLCBcbiAgICAgICAgICAgICAgICBzdmcgJiYgc3JjKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwb2x5ZmlsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFvcHRzLnZhbGlkYXRlIHx8IG9wdHMudmFsaWRhdGUoc3JjLCBzdmcsIHVzZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyByZW1vdmUgdGhlIDx1c2U+IGVsZW1lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnQucmVtb3ZlQ2hpbGQodXNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBwYXJzZSB0aGUgc3JjIGFuZCBnZXQgdGhlIHVybCBhbmQgaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgc3JjU3BsaXQgPSBzcmMuc3BsaXQoXCIjXCIpLCB1cmwgPSBzcmNTcGxpdC5zaGlmdCgpLCBpZCA9IHNyY1NwbGl0LmpvaW4oXCIjXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmIHRoZSBsaW5rIGlzIGV4dGVybmFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHVybC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZ2V0IHRoZSBjYWNoZWQgeGhyIHJlcXVlc3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHhociA9IHJlcXVlc3RzW3VybF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGVuc3VyZSB0aGUgeGhyIHJlcXVlc3QgZXhpc3RzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhociB8fCAoeGhyID0gcmVxdWVzdHNbdXJsXSA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpLCB4aHIub3BlbihcIkdFVFwiLCB1cmwpLCB4aHIuc2VuZCgpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeGhyLl9lbWJlZHMgPSBbXSksIC8vIGFkZCB0aGUgc3ZnIGFuZCBpZCBhcyBhbiBpdGVtIHRvIHRoZSB4aHIgZW1iZWRzIGxpc3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeGhyLl9lbWJlZHMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnQ6IHBhcmVudCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN2Zzogc3ZnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLCAvLyBwcmVwYXJlIHRoZSB4aHIgcmVhZHkgc3RhdGUgY2hhbmdlIGV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRyZWFkeXN0YXRlY2hhbmdlKHhocik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZW1iZWQgdGhlIGxvY2FsIGlkIGludG8gdGhlIHN2Z1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbWJlZChwYXJlbnQsIHN2ZywgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGluY3JlYXNlIHRoZSBpbmRleCB3aGVuIHRoZSBwcmV2aW91cyB2YWx1ZSB3YXMgbm90IFwidmFsaWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICsraW5kZXgsICsrbnVtYmVyT2ZTdmdVc2VFbGVtZW50c1RvQnlwYXNzO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gaW5jcmVhc2UgdGhlIGluZGV4IHdoZW4gdGhlIHByZXZpb3VzIHZhbHVlIHdhcyBub3QgXCJ2YWxpZFwiXG4gICAgICAgICAgICAgICAgICAgICsraW5kZXg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gY29udGludWUgdGhlIGludGVydmFsXG4gICAgICAgICAgICAoIXVzZXMubGVuZ3RoIHx8IHVzZXMubGVuZ3RoIC0gbnVtYmVyT2ZTdmdVc2VFbGVtZW50c1RvQnlwYXNzID4gMCkgJiYgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKG9uaW50ZXJ2YWwsIDY3KTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcG9seWZpbGwsIG9wdHMgPSBPYmplY3QocmF3b3B0cyksIG5ld2VySUVVQSA9IC9cXGJUcmlkZW50XFwvWzU2N11cXGJ8XFxiTVNJRSAoPzo5fDEwKVxcLjBcXGIvLCB3ZWJraXRVQSA9IC9cXGJBcHBsZVdlYktpdFxcLyhcXGQrKVxcYi8sIG9sZGVyRWRnZVVBID0gL1xcYkVkZ2VcXC8xMlxcLihcXGQrKVxcYi8sIGVkZ2VVQSA9IC9cXGJFZGdlXFwvLihcXGQrKVxcYi8sIGluSWZyYW1lID0gd2luZG93LnRvcCAhPT0gd2luZG93LnNlbGY7XG4gICAgICAgIHBvbHlmaWxsID0gXCJwb2x5ZmlsbFwiIGluIG9wdHMgPyBvcHRzLnBvbHlmaWxsIDogbmV3ZXJJRVVBLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkgfHwgKG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2gob2xkZXJFZGdlVUEpIHx8IFtdKVsxXSA8IDEwNTQ3IHx8IChuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKHdlYmtpdFVBKSB8fCBbXSlbMV0gPCA1MzcgfHwgZWRnZVVBLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkgJiYgaW5JZnJhbWU7XG4gICAgICAgIC8vIGNyZWF0ZSB4aHIgcmVxdWVzdHMgb2JqZWN0XG4gICAgICAgIHZhciByZXF1ZXN0cyA9IHt9LCByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IHNldFRpbWVvdXQsIHVzZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInVzZVwiKSwgbnVtYmVyT2ZTdmdVc2VFbGVtZW50c1RvQnlwYXNzID0gMDtcbiAgICAgICAgLy8gY29uZGl0aW9uYWxseSBzdGFydCB0aGUgaW50ZXJ2YWwgaWYgdGhlIHBvbHlmaWxsIGlzIGFjdGl2ZVxuICAgICAgICBwb2x5ZmlsbCAmJiBvbmludGVydmFsKCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdldFNWR0FuY2VzdG9yKG5vZGUpIHtcbiAgICAgICAgZm9yICh2YXIgc3ZnID0gbm9kZTsgXCJzdmdcIiAhPT0gc3ZnLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgJiYgKHN2ZyA9IHN2Zy5wYXJlbnROb2RlKTsgKSB7fVxuICAgICAgICByZXR1cm4gc3ZnO1xuICAgIH1cbiAgICByZXR1cm4gc3ZnNGV2ZXJ5Ym9keTtcbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3N2ZzRldmVyeWJvZHkvZGlzdC9zdmc0ZXZlcnlib2R5LmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiEgY2FzaC1kb20gMS4zLjUsIGh0dHBzOi8vZ2l0aHViLmNvbS9rZW53aGVlbGVyL2Nhc2ggQGxpY2Vuc2UgTUlUICovXG47KGZ1bmN0aW9uIChyb290LCBmYWN0b3J5KSB7XG4gIGlmICh0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCkge1xuICAgIGRlZmluZShmYWN0b3J5KTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgZXhwb3J0cyAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuICB9IGVsc2Uge1xuICAgIHJvb3QuY2FzaCA9IHJvb3QuJCA9IGZhY3RvcnkoKTtcbiAgfVxufSkodGhpcywgZnVuY3Rpb24gKCkge1xuICB2YXIgZG9jID0gZG9jdW1lbnQsIHdpbiA9IHdpbmRvdywgQXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZSwgc2xpY2UgPSBBcnJheVByb3RvLnNsaWNlLCBmaWx0ZXIgPSBBcnJheVByb3RvLmZpbHRlciwgcHVzaCA9IEFycmF5UHJvdG8ucHVzaDtcblxuICB2YXIgbm9vcCA9IGZ1bmN0aW9uICgpIHt9LCBpc0Z1bmN0aW9uID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAvLyBAc2VlIGh0dHBzOi8vY3JidWcuY29tLzU2ODQ0OFxuICAgIHJldHVybiB0eXBlb2YgaXRlbSA9PT0gdHlwZW9mIG5vb3AgJiYgaXRlbS5jYWxsO1xuICB9LCBpc1N0cmluZyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBpdGVtID09PSB0eXBlb2YgXCJcIjtcbiAgfTtcblxuICB2YXIgaWRNYXRjaCA9IC9eI1tcXHctXSokLywgY2xhc3NNYXRjaCA9IC9eXFwuW1xcdy1dKiQvLCBodG1sTWF0Y2ggPSAvPC4rPi8sIHNpbmdsZXQgPSAvXlxcdyskLztcblxuICBmdW5jdGlvbiBmaW5kKHNlbGVjdG9yLCBjb250ZXh0KSB7XG4gICAgY29udGV4dCA9IGNvbnRleHQgfHwgZG9jO1xuICAgIHZhciBlbGVtcyA9IChjbGFzc01hdGNoLnRlc3Qoc2VsZWN0b3IpID8gY29udGV4dC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKHNlbGVjdG9yLnNsaWNlKDEpKSA6IHNpbmdsZXQudGVzdChzZWxlY3RvcikgPyBjb250ZXh0LmdldEVsZW1lbnRzQnlUYWdOYW1lKHNlbGVjdG9yKSA6IGNvbnRleHQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcikpO1xuICAgIHJldHVybiBlbGVtcztcbiAgfVxuXG4gIHZhciBmcmFnO1xuICBmdW5jdGlvbiBwYXJzZUhUTUwoc3RyKSB7XG4gICAgaWYgKCFmcmFnKSB7XG4gICAgICBmcmFnID0gZG9jLmltcGxlbWVudGF0aW9uLmNyZWF0ZUhUTUxEb2N1bWVudCgpO1xuICAgICAgdmFyIGJhc2UgPSBmcmFnLmNyZWF0ZUVsZW1lbnQoXCJiYXNlXCIpO1xuICAgICAgYmFzZS5ocmVmID0gZG9jLmxvY2F0aW9uLmhyZWY7XG4gICAgICBmcmFnLmhlYWQuYXBwZW5kQ2hpbGQoYmFzZSk7XG4gICAgfVxuXG4gICAgZnJhZy5ib2R5LmlubmVySFRNTCA9IHN0cjtcblxuICAgIHJldHVybiBmcmFnLmJvZHkuY2hpbGROb2RlcztcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uUmVhZHkoZm4pIHtcbiAgICBpZiAoZG9jLnJlYWR5U3RhdGUgIT09IFwibG9hZGluZ1wiKSB7XG4gICAgICBmbigpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb2MuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZm4pO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIEluaXQoc2VsZWN0b3IsIGNvbnRleHQpIHtcbiAgICBpZiAoIXNlbGVjdG9yKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvLyBJZiBhbHJlYWR5IGEgY2FzaCBjb2xsZWN0aW9uLCBkb24ndCBkbyBhbnkgZnVydGhlciBwcm9jZXNzaW5nXG4gICAgaWYgKHNlbGVjdG9yLmNhc2ggJiYgc2VsZWN0b3IgIT09IHdpbikge1xuICAgICAgcmV0dXJuIHNlbGVjdG9yO1xuICAgIH1cblxuICAgIHZhciBlbGVtcyA9IHNlbGVjdG9yLCBpID0gMCwgbGVuZ3RoO1xuXG4gICAgaWYgKGlzU3RyaW5nKHNlbGVjdG9yKSkge1xuICAgICAgZWxlbXMgPSAoaWRNYXRjaC50ZXN0KHNlbGVjdG9yKSA/XG4gICAgICAvLyBJZiBhbiBJRCB1c2UgdGhlIGZhc3RlciBnZXRFbGVtZW50QnlJZCBjaGVja1xuICAgICAgZG9jLmdldEVsZW1lbnRCeUlkKHNlbGVjdG9yLnNsaWNlKDEpKSA6IGh0bWxNYXRjaC50ZXN0KHNlbGVjdG9yKSA/XG4gICAgICAvLyBJZiBIVE1MLCBwYXJzZSBpdCBpbnRvIHJlYWwgZWxlbWVudHNcbiAgICAgIHBhcnNlSFRNTChzZWxlY3RvcikgOlxuICAgICAgLy8gZWxzZSB1c2UgYGZpbmRgXG4gICAgICBmaW5kKHNlbGVjdG9yLCBjb250ZXh0KSk7XG5cbiAgICAgIC8vIElmIGZ1bmN0aW9uLCB1c2UgYXMgc2hvcnRjdXQgZm9yIERPTSByZWFkeVxuICAgIH0gZWxzZSBpZiAoaXNGdW5jdGlvbihzZWxlY3RvcikpIHtcbiAgICAgIG9uUmVhZHkoc2VsZWN0b3IpO3JldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGlmICghZWxlbXMpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8vIElmIGEgc2luZ2xlIERPTSBlbGVtZW50IGlzIHBhc3NlZCBpbiBvciByZWNlaXZlZCB2aWEgSUQsIHJldHVybiB0aGUgc2luZ2xlIGVsZW1lbnRcbiAgICBpZiAoZWxlbXMubm9kZVR5cGUgfHwgZWxlbXMgPT09IHdpbikge1xuICAgICAgdGhpc1swXSA9IGVsZW1zO1xuICAgICAgdGhpcy5sZW5ndGggPSAxO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBUcmVhdCBsaWtlIGFuIGFycmF5IGFuZCBsb29wIHRocm91Z2ggZWFjaCBpdGVtLlxuICAgICAgbGVuZ3RoID0gdGhpcy5sZW5ndGggPSBlbGVtcy5sZW5ndGg7XG4gICAgICBmb3IgKDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHRoaXNbaV0gPSBlbGVtc1tpXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGZ1bmN0aW9uIGNhc2goc2VsZWN0b3IsIGNvbnRleHQpIHtcbiAgICByZXR1cm4gbmV3IEluaXQoc2VsZWN0b3IsIGNvbnRleHQpO1xuICB9XG5cbiAgdmFyIGZuID0gY2FzaC5mbiA9IGNhc2gucHJvdG90eXBlID0gSW5pdC5wcm90b3R5cGUgPSB7IC8vIGpzaGludCBpZ25vcmU6bGluZVxuICAgIGNhc2g6IHRydWUsXG4gICAgbGVuZ3RoOiAwLFxuICAgIHB1c2g6IHB1c2gsXG4gICAgc3BsaWNlOiBBcnJheVByb3RvLnNwbGljZSxcbiAgICBtYXA6IEFycmF5UHJvdG8ubWFwLFxuICAgIGluaXQ6IEluaXRcbiAgfTtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZm4sIFwiY29uc3RydWN0b3JcIiwgeyB2YWx1ZTogY2FzaCB9KTtcblxuICBjYXNoLnBhcnNlSFRNTCA9IHBhcnNlSFRNTDtcbiAgY2FzaC5ub29wID0gbm9vcDtcbiAgY2FzaC5pc0Z1bmN0aW9uID0gaXNGdW5jdGlvbjtcbiAgY2FzaC5pc1N0cmluZyA9IGlzU3RyaW5nO1xuXG4gIGNhc2guZXh0ZW5kID0gZm4uZXh0ZW5kID0gZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIHRhcmdldCA9IHRhcmdldCB8fCB7fTtcblxuICAgIHZhciBhcmdzID0gc2xpY2UuY2FsbChhcmd1bWVudHMpLCBsZW5ndGggPSBhcmdzLmxlbmd0aCwgaSA9IDE7XG5cbiAgICBpZiAoYXJncy5sZW5ndGggPT09IDEpIHtcbiAgICAgIHRhcmdldCA9IHRoaXM7XG4gICAgICBpID0gMDtcbiAgICB9XG5cbiAgICBmb3IgKDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoIWFyZ3NbaV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBmb3IgKHZhciBrZXkgaW4gYXJnc1tpXSkge1xuICAgICAgICBpZiAoYXJnc1tpXS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSBhcmdzW2ldW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuXG4gIGZ1bmN0aW9uIGVhY2goY29sbGVjdGlvbiwgY2FsbGJhY2spIHtcbiAgICB2YXIgbCA9IGNvbGxlY3Rpb24ubGVuZ3RoLCBpID0gMDtcblxuICAgIGZvciAoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBpZiAoY2FsbGJhY2suY2FsbChjb2xsZWN0aW9uW2ldLCBjb2xsZWN0aW9uW2ldLCBpLCBjb2xsZWN0aW9uKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gbWF0Y2hlcyhlbCwgc2VsZWN0b3IpIHtcbiAgICB2YXIgbSA9IGVsICYmIChlbC5tYXRjaGVzIHx8IGVsLndlYmtpdE1hdGNoZXNTZWxlY3RvciB8fCBlbC5tb3pNYXRjaGVzU2VsZWN0b3IgfHwgZWwubXNNYXRjaGVzU2VsZWN0b3IgfHwgZWwub01hdGNoZXNTZWxlY3Rvcik7XG4gICAgcmV0dXJuICEhbSAmJiBtLmNhbGwoZWwsIHNlbGVjdG9yKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldENvbXBhcmVGdW5jdGlvbihzZWxlY3Rvcikge1xuICAgIHJldHVybiAoXG4gICAgLyogVXNlIGJyb3dzZXIncyBgbWF0Y2hlc2AgZnVuY3Rpb24gaWYgc3RyaW5nICovXG4gICAgaXNTdHJpbmcoc2VsZWN0b3IpID8gbWF0Y2hlcyA6XG4gICAgLyogTWF0Y2ggYSBjYXNoIGVsZW1lbnQgKi9cbiAgICBzZWxlY3Rvci5jYXNoID8gZnVuY3Rpb24gKGVsKSB7XG4gICAgICByZXR1cm4gc2VsZWN0b3IuaXMoZWwpO1xuICAgIH0gOlxuICAgIC8qIERpcmVjdCBjb21wYXJpc29uICovXG4gICAgZnVuY3Rpb24gKGVsLCBzZWxlY3Rvcikge1xuICAgICAgcmV0dXJuIGVsID09PSBzZWxlY3RvcjtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVuaXF1ZShjb2xsZWN0aW9uKSB7XG4gICAgcmV0dXJuIGNhc2goc2xpY2UuY2FsbChjb2xsZWN0aW9uKS5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0sIGluZGV4LCBzZWxmKSB7XG4gICAgICByZXR1cm4gc2VsZi5pbmRleE9mKGl0ZW0pID09PSBpbmRleDtcbiAgICB9KSk7XG4gIH1cblxuICBjYXNoLmV4dGVuZCh7XG4gICAgbWVyZ2U6IGZ1bmN0aW9uIChmaXJzdCwgc2Vjb25kKSB7XG4gICAgICB2YXIgbGVuID0gK3NlY29uZC5sZW5ndGgsIGkgPSBmaXJzdC5sZW5ndGgsIGogPSAwO1xuXG4gICAgICBmb3IgKDsgaiA8IGxlbjsgaSsrLCBqKyspIHtcbiAgICAgICAgZmlyc3RbaV0gPSBzZWNvbmRbal07XG4gICAgICB9XG5cbiAgICAgIGZpcnN0Lmxlbmd0aCA9IGk7XG4gICAgICByZXR1cm4gZmlyc3Q7XG4gICAgfSxcblxuICAgIGVhY2g6IGVhY2gsXG4gICAgbWF0Y2hlczogbWF0Y2hlcyxcbiAgICB1bmlxdWU6IHVuaXF1ZSxcbiAgICBpc0FycmF5OiBBcnJheS5pc0FycmF5LFxuICAgIGlzTnVtZXJpYzogZnVuY3Rpb24gKG4pIHtcbiAgICAgIHJldHVybiAhaXNOYU4ocGFyc2VGbG9hdChuKSkgJiYgaXNGaW5pdGUobik7XG4gICAgfVxuXG4gIH0pO1xuXG4gIHZhciB1aWQgPSBjYXNoLnVpZCA9IFwiX2Nhc2hcIiArIERhdGUubm93KCk7XG5cbiAgZnVuY3Rpb24gZ2V0RGF0YUNhY2hlKG5vZGUpIHtcbiAgICByZXR1cm4gKG5vZGVbdWlkXSA9IG5vZGVbdWlkXSB8fCB7fSk7XG4gIH1cblxuICBmdW5jdGlvbiBzZXREYXRhKG5vZGUsIGtleSwgdmFsdWUpIHtcbiAgICByZXR1cm4gKGdldERhdGFDYWNoZShub2RlKVtrZXldID0gdmFsdWUpO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0RGF0YShub2RlLCBrZXkpIHtcbiAgICB2YXIgYyA9IGdldERhdGFDYWNoZShub2RlKTtcbiAgICBpZiAoY1trZXldID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNba2V5XSA9IG5vZGUuZGF0YXNldCA/IG5vZGUuZGF0YXNldFtrZXldIDogY2FzaChub2RlKS5hdHRyKFwiZGF0YS1cIiArIGtleSk7XG4gICAgfVxuICAgIHJldHVybiBjW2tleV07XG4gIH1cblxuICBmdW5jdGlvbiByZW1vdmVEYXRhKG5vZGUsIGtleSkge1xuICAgIHZhciBjID0gZ2V0RGF0YUNhY2hlKG5vZGUpO1xuICAgIGlmIChjKSB7XG4gICAgICBkZWxldGUgY1trZXldO1xuICAgIH0gZWxzZSBpZiAobm9kZS5kYXRhc2V0KSB7XG4gICAgICBkZWxldGUgbm9kZS5kYXRhc2V0W2tleV07XG4gICAgfSBlbHNlIHtcbiAgICAgIGNhc2gobm9kZSkucmVtb3ZlQXR0cihcImRhdGEtXCIgKyBuYW1lKTtcbiAgICB9XG4gIH1cblxuICBmbi5leHRlbmQoe1xuICAgIGRhdGE6IGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSkge1xuICAgICAgaWYgKGlzU3RyaW5nKG5hbWUpKSB7XG4gICAgICAgIHJldHVybiAodmFsdWUgPT09IHVuZGVmaW5lZCA/IGdldERhdGEodGhpc1swXSwgbmFtZSkgOiB0aGlzLmVhY2goZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgICByZXR1cm4gc2V0RGF0YSh2LCBuYW1lLCB2YWx1ZSk7XG4gICAgICAgIH0pKTtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIga2V5IGluIG5hbWUpIHtcbiAgICAgICAgdGhpcy5kYXRhKGtleSwgbmFtZVtrZXldKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIHJlbW92ZURhdGE6IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgcmV0dXJuIHJlbW92ZURhdGEodiwga2V5KTtcbiAgICAgIH0pO1xuICAgIH1cblxuICB9KTtcblxuICB2YXIgbm90V2hpdGVNYXRjaCA9IC9cXFMrL2c7XG5cbiAgZnVuY3Rpb24gZ2V0Q2xhc3NlcyhjKSB7XG4gICAgcmV0dXJuIGlzU3RyaW5nKGMpICYmIGMubWF0Y2gobm90V2hpdGVNYXRjaCk7XG4gIH1cblxuICBmdW5jdGlvbiBoYXNDbGFzcyh2LCBjKSB7XG4gICAgcmV0dXJuICh2LmNsYXNzTGlzdCA/IHYuY2xhc3NMaXN0LmNvbnRhaW5zKGMpIDogbmV3IFJlZ0V4cChcIihefCApXCIgKyBjICsgXCIoIHwkKVwiLCBcImdpXCIpLnRlc3Qodi5jbGFzc05hbWUpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZENsYXNzKHYsIGMsIHNwYWNlZE5hbWUpIHtcbiAgICBpZiAodi5jbGFzc0xpc3QpIHtcbiAgICAgIHYuY2xhc3NMaXN0LmFkZChjKTtcbiAgICB9IGVsc2UgaWYgKHNwYWNlZE5hbWUuaW5kZXhPZihcIiBcIiArIGMgKyBcIiBcIikpIHtcbiAgICAgIHYuY2xhc3NOYW1lICs9IFwiIFwiICsgYztcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZW1vdmVDbGFzcyh2LCBjKSB7XG4gICAgaWYgKHYuY2xhc3NMaXN0KSB7XG4gICAgICB2LmNsYXNzTGlzdC5yZW1vdmUoYyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHYuY2xhc3NOYW1lID0gdi5jbGFzc05hbWUucmVwbGFjZShjLCBcIlwiKTtcbiAgICB9XG4gIH1cblxuICBmbi5leHRlbmQoe1xuICAgIGFkZENsYXNzOiBmdW5jdGlvbiAoYykge1xuICAgICAgdmFyIGNsYXNzZXMgPSBnZXRDbGFzc2VzKGMpO1xuXG4gICAgICByZXR1cm4gKGNsYXNzZXMgPyB0aGlzLmVhY2goZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgdmFyIHNwYWNlZE5hbWUgPSBcIiBcIiArIHYuY2xhc3NOYW1lICsgXCIgXCI7XG4gICAgICAgIGVhY2goY2xhc3NlcywgZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgICBhZGRDbGFzcyh2LCBjLCBzcGFjZWROYW1lKTtcbiAgICAgICAgfSk7XG4gICAgICB9KSA6IHRoaXMpO1xuICAgIH0sXG5cbiAgICBhdHRyOiBmdW5jdGlvbiAobmFtZSwgdmFsdWUpIHtcbiAgICAgIGlmICghbmFtZSkge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXNTdHJpbmcobmFtZSkpIHtcbiAgICAgICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICByZXR1cm4gdGhpc1swXSA/IHRoaXNbMF0uZ2V0QXR0cmlidXRlID8gdGhpc1swXS5nZXRBdHRyaWJ1dGUobmFtZSkgOiB0aGlzWzBdW25hbWVdIDogdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAodikge1xuICAgICAgICAgIGlmICh2LnNldEF0dHJpYnV0ZSkge1xuICAgICAgICAgICAgdi5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2W25hbWVdID0gdmFsdWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIga2V5IGluIG5hbWUpIHtcbiAgICAgICAgdGhpcy5hdHRyKGtleSwgbmFtZVtrZXldKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIGhhc0NsYXNzOiBmdW5jdGlvbiAoYykge1xuICAgICAgdmFyIGNoZWNrID0gZmFsc2UsIGNsYXNzZXMgPSBnZXRDbGFzc2VzKGMpO1xuICAgICAgaWYgKGNsYXNzZXMgJiYgY2xhc3Nlcy5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5lYWNoKGZ1bmN0aW9uICh2KSB7XG4gICAgICAgICAgY2hlY2sgPSBoYXNDbGFzcyh2LCBjbGFzc2VzWzBdKTtcbiAgICAgICAgICByZXR1cm4gIWNoZWNrO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjaGVjaztcbiAgICB9LFxuXG4gICAgcHJvcDogZnVuY3Rpb24gKG5hbWUsIHZhbHVlKSB7XG4gICAgICBpZiAoaXNTdHJpbmcobmFtZSkpIHtcbiAgICAgICAgcmV0dXJuICh2YWx1ZSA9PT0gdW5kZWZpbmVkID8gdGhpc1swXVtuYW1lXSA6IHRoaXMuZWFjaChmdW5jdGlvbiAodikge1xuICAgICAgICAgIHZbbmFtZV0gPSB2YWx1ZTtcbiAgICAgICAgfSkpO1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBrZXkgaW4gbmFtZSkge1xuICAgICAgICB0aGlzLnByb3Aoa2V5LCBuYW1lW2tleV0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgcmVtb3ZlQXR0cjogZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgaWYgKHYucmVtb3ZlQXR0cmlidXRlKSB7XG4gICAgICAgICAgdi5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZGVsZXRlIHZbbmFtZV07XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0sXG5cbiAgICByZW1vdmVDbGFzczogZnVuY3Rpb24gKGMpIHtcbiAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hdHRyKFwiY2xhc3NcIiwgXCJcIik7XG4gICAgICB9XG4gICAgICB2YXIgY2xhc3NlcyA9IGdldENsYXNzZXMoYyk7XG4gICAgICByZXR1cm4gKGNsYXNzZXMgPyB0aGlzLmVhY2goZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgZWFjaChjbGFzc2VzLCBmdW5jdGlvbiAoYykge1xuICAgICAgICAgIHJlbW92ZUNsYXNzKHYsIGMpO1xuICAgICAgICB9KTtcbiAgICAgIH0pIDogdGhpcyk7XG4gICAgfSxcblxuICAgIHJlbW92ZVByb3A6IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICh2KSB7XG4gICAgICAgIGRlbGV0ZSB2W25hbWVdO1xuICAgICAgfSk7XG4gICAgfSxcblxuICAgIHRvZ2dsZUNsYXNzOiBmdW5jdGlvbiAoYywgc3RhdGUpIHtcbiAgICAgIGlmIChzdGF0ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiB0aGlzW3N0YXRlID8gXCJhZGRDbGFzc1wiIDogXCJyZW1vdmVDbGFzc1wiXShjKTtcbiAgICAgIH1cbiAgICAgIHZhciBjbGFzc2VzID0gZ2V0Q2xhc3NlcyhjKTtcbiAgICAgIHJldHVybiAoY2xhc3NlcyA/IHRoaXMuZWFjaChmdW5jdGlvbiAodikge1xuICAgICAgICB2YXIgc3BhY2VkTmFtZSA9IFwiIFwiICsgdi5jbGFzc05hbWUgKyBcIiBcIjtcbiAgICAgICAgZWFjaChjbGFzc2VzLCBmdW5jdGlvbiAoYykge1xuICAgICAgICAgIGlmIChoYXNDbGFzcyh2LCBjKSkge1xuICAgICAgICAgICAgcmVtb3ZlQ2xhc3ModiwgYyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFkZENsYXNzKHYsIGMsIHNwYWNlZE5hbWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KSA6IHRoaXMpO1xuICAgIH0gfSk7XG5cbiAgZm4uZXh0ZW5kKHtcbiAgICBhZGQ6IGZ1bmN0aW9uIChzZWxlY3RvciwgY29udGV4dCkge1xuICAgICAgcmV0dXJuIHVuaXF1ZShjYXNoLm1lcmdlKHRoaXMsIGNhc2goc2VsZWN0b3IsIGNvbnRleHQpKSk7XG4gICAgfSxcblxuICAgIGVhY2g6IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgZWFjaCh0aGlzLCBjYWxsYmFjayk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgZXE6IGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgcmV0dXJuIGNhc2godGhpcy5nZXQoaW5kZXgpKTtcbiAgICB9LFxuXG4gICAgZmlsdGVyOiBmdW5jdGlvbiAoc2VsZWN0b3IpIHtcbiAgICAgIGlmICghc2VsZWN0b3IpIHtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG5cbiAgICAgIHZhciBjb21wYXJhdG9yID0gKGlzRnVuY3Rpb24oc2VsZWN0b3IpID8gc2VsZWN0b3IgOiBnZXRDb21wYXJlRnVuY3Rpb24oc2VsZWN0b3IpKTtcblxuICAgICAgcmV0dXJuIGNhc2goZmlsdGVyLmNhbGwodGhpcywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgcmV0dXJuIGNvbXBhcmF0b3IoZSwgc2VsZWN0b3IpO1xuICAgICAgfSkpO1xuICAgIH0sXG5cbiAgICBmaXJzdDogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHRoaXMuZXEoMCk7XG4gICAgfSxcblxuICAgIGdldDogZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICBpZiAoaW5kZXggPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gc2xpY2UuY2FsbCh0aGlzKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiAoaW5kZXggPCAwID8gdGhpc1tpbmRleCArIHRoaXMubGVuZ3RoXSA6IHRoaXNbaW5kZXhdKTtcbiAgICB9LFxuXG4gICAgaW5kZXg6IGZ1bmN0aW9uIChlbGVtKSB7XG4gICAgICB2YXIgY2hpbGQgPSBlbGVtID8gY2FzaChlbGVtKVswXSA6IHRoaXNbMF0sIGNvbGxlY3Rpb24gPSBlbGVtID8gdGhpcyA6IGNhc2goY2hpbGQpLnBhcmVudCgpLmNoaWxkcmVuKCk7XG4gICAgICByZXR1cm4gc2xpY2UuY2FsbChjb2xsZWN0aW9uKS5pbmRleE9mKGNoaWxkKTtcbiAgICB9LFxuXG4gICAgbGFzdDogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHRoaXMuZXEoLTEpO1xuICAgIH1cblxuICB9KTtcblxuICB2YXIgY2FtZWxDYXNlID0gKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgY2FtZWxSZWdleCA9IC8oPzpeXFx3fFtBLVpdfFxcYlxcdykvZywgd2hpdGVTcGFjZSA9IC9bXFxzLV9dKy9nO1xuICAgIHJldHVybiBmdW5jdGlvbiAoc3RyKSB7XG4gICAgICByZXR1cm4gc3RyLnJlcGxhY2UoY2FtZWxSZWdleCwgZnVuY3Rpb24gKGxldHRlciwgaW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIGxldHRlcltpbmRleCA9PT0gMCA/IFwidG9Mb3dlckNhc2VcIiA6IFwidG9VcHBlckNhc2VcIl0oKTtcbiAgICAgIH0pLnJlcGxhY2Uod2hpdGVTcGFjZSwgXCJcIik7XG4gICAgfTtcbiAgfSgpKTtcblxuICB2YXIgZ2V0UHJlZml4ZWRQcm9wID0gKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgY2FjaGUgPSB7fSwgZG9jID0gZG9jdW1lbnQsIGRpdiA9IGRvYy5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLCBzdHlsZSA9IGRpdi5zdHlsZTtcblxuICAgIHJldHVybiBmdW5jdGlvbiAocHJvcCkge1xuICAgICAgcHJvcCA9IGNhbWVsQ2FzZShwcm9wKTtcbiAgICAgIGlmIChjYWNoZVtwcm9wXSkge1xuICAgICAgICByZXR1cm4gY2FjaGVbcHJvcF07XG4gICAgICB9XG5cbiAgICAgIHZhciB1Y1Byb3AgPSBwcm9wLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgcHJvcC5zbGljZSgxKSwgcHJlZml4ZXMgPSBbXCJ3ZWJraXRcIiwgXCJtb3pcIiwgXCJtc1wiLCBcIm9cIl0sIHByb3BzID0gKHByb3AgKyBcIiBcIiArIChwcmVmaXhlcykuam9pbih1Y1Byb3AgKyBcIiBcIikgKyB1Y1Byb3ApLnNwbGl0KFwiIFwiKTtcblxuICAgICAgZWFjaChwcm9wcywgZnVuY3Rpb24gKHApIHtcbiAgICAgICAgaWYgKHAgaW4gc3R5bGUpIHtcbiAgICAgICAgICBjYWNoZVtwXSA9IHByb3AgPSBjYWNoZVtwcm9wXSA9IHA7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIGNhY2hlW3Byb3BdO1xuICAgIH07XG4gIH0oKSk7XG5cbiAgY2FzaC5wcmVmaXhlZFByb3AgPSBnZXRQcmVmaXhlZFByb3A7XG4gIGNhc2guY2FtZWxDYXNlID0gY2FtZWxDYXNlO1xuXG4gIGZuLmV4dGVuZCh7XG4gICAgY3NzOiBmdW5jdGlvbiAocHJvcCwgdmFsdWUpIHtcbiAgICAgIGlmIChpc1N0cmluZyhwcm9wKSkge1xuICAgICAgICBwcm9wID0gZ2V0UHJlZml4ZWRQcm9wKHByb3ApO1xuICAgICAgICByZXR1cm4gKGFyZ3VtZW50cy5sZW5ndGggPiAxID8gdGhpcy5lYWNoKGZ1bmN0aW9uICh2KSB7XG4gICAgICAgICAgcmV0dXJuIHYuc3R5bGVbcHJvcF0gPSB2YWx1ZTtcbiAgICAgICAgfSkgOiB3aW4uZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzWzBdKVtwcm9wXSk7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGtleSBpbiBwcm9wKSB7XG4gICAgICAgIHRoaXMuY3NzKGtleSwgcHJvcFtrZXldKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gIH0pO1xuXG4gIGZ1bmN0aW9uIGNvbXB1dGUoZWwsIHByb3ApIHtcbiAgICByZXR1cm4gcGFyc2VJbnQod2luLmdldENvbXB1dGVkU3R5bGUoZWxbMF0sIG51bGwpW3Byb3BdLCAxMCkgfHwgMDtcbiAgfVxuXG4gIGVhY2goW1wiV2lkdGhcIiwgXCJIZWlnaHRcIl0sIGZ1bmN0aW9uICh2KSB7XG4gICAgdmFyIGxvd2VyID0gdi50b0xvd2VyQ2FzZSgpO1xuXG4gICAgZm5bbG93ZXJdID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHRoaXNbMF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClbbG93ZXJdO1xuICAgIH07XG5cbiAgICBmbltcImlubmVyXCIgKyB2XSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB0aGlzWzBdW1wiY2xpZW50XCIgKyB2XTtcbiAgICB9O1xuXG4gICAgZm5bXCJvdXRlclwiICsgdl0gPSBmdW5jdGlvbiAobWFyZ2lucykge1xuICAgICAgcmV0dXJuIHRoaXNbMF1bXCJvZmZzZXRcIiArIHZdICsgKG1hcmdpbnMgPyBjb21wdXRlKHRoaXMsIFwibWFyZ2luXCIgKyAodiA9PT0gXCJXaWR0aFwiID8gXCJMZWZ0XCIgOiBcIlRvcFwiKSkgKyBjb21wdXRlKHRoaXMsIFwibWFyZ2luXCIgKyAodiA9PT0gXCJXaWR0aFwiID8gXCJSaWdodFwiIDogXCJCb3R0b21cIikpIDogMCk7XG4gICAgfTtcbiAgfSk7XG5cbiAgZnVuY3Rpb24gcmVnaXN0ZXJFdmVudChub2RlLCBldmVudE5hbWUsIGNhbGxiYWNrKSB7XG4gICAgdmFyIGV2ZW50Q2FjaGUgPSBnZXREYXRhKG5vZGUsIFwiX2Nhc2hFdmVudHNcIikgfHwgc2V0RGF0YShub2RlLCBcIl9jYXNoRXZlbnRzXCIsIHt9KTtcbiAgICBldmVudENhY2hlW2V2ZW50TmFtZV0gPSBldmVudENhY2hlW2V2ZW50TmFtZV0gfHwgW107XG4gICAgZXZlbnRDYWNoZVtldmVudE5hbWVdLnB1c2goY2FsbGJhY2spO1xuICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGNhbGxiYWNrKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW92ZUV2ZW50KG5vZGUsIGV2ZW50TmFtZSwgY2FsbGJhY2spIHtcbiAgICB2YXIgZXZlbnRzID0gZ2V0RGF0YShub2RlLCBcIl9jYXNoRXZlbnRzXCIpLCBldmVudENhY2hlID0gKGV2ZW50cyAmJiBldmVudHNbZXZlbnROYW1lXSksIGluZGV4O1xuXG4gICAgaWYgKCFldmVudENhY2hlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICBub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBjYWxsYmFjayk7XG4gICAgICBpbmRleCA9IGV2ZW50Q2FjaGUuaW5kZXhPZihjYWxsYmFjayk7XG4gICAgICBpZiAoaW5kZXggPj0gMCkge1xuICAgICAgICBldmVudENhY2hlLnNwbGljZShpbmRleCwgMSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGVhY2goZXZlbnRDYWNoZSwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGV2ZW50KTtcbiAgICAgIH0pO1xuICAgICAgZXZlbnRDYWNoZSA9IFtdO1xuICAgIH1cbiAgfVxuXG4gIGZuLmV4dGVuZCh7XG4gICAgb2ZmOiBmdW5jdGlvbiAoZXZlbnROYW1lLCBjYWxsYmFjaykge1xuICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAodikge1xuICAgICAgICByZXR1cm4gcmVtb3ZlRXZlbnQodiwgZXZlbnROYW1lLCBjYWxsYmFjayk7XG4gICAgICB9KTtcbiAgICB9LFxuXG4gICAgb246IGZ1bmN0aW9uIChldmVudE5hbWUsIGRlbGVnYXRlLCBjYWxsYmFjaywgcnVuT25jZSkge1xuICAgICAgLy8ganNoaW50IGlnbm9yZTpsaW5lXG5cbiAgICAgIHZhciBvcmlnaW5hbENhbGxiYWNrO1xuXG4gICAgICBpZiAoIWlzU3RyaW5nKGV2ZW50TmFtZSkpIHtcbiAgICAgICAgZm9yICh2YXIga2V5IGluIGV2ZW50TmFtZSkge1xuICAgICAgICAgIHRoaXMub24oa2V5LCBkZWxlZ2F0ZSwgZXZlbnROYW1lW2tleV0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXNGdW5jdGlvbihkZWxlZ2F0ZSkpIHtcbiAgICAgICAgY2FsbGJhY2sgPSBkZWxlZ2F0ZTtcbiAgICAgICAgZGVsZWdhdGUgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICBpZiAoZXZlbnROYW1lID09PSBcInJlYWR5XCIpIHtcbiAgICAgICAgb25SZWFkeShjYWxsYmFjayk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuXG4gICAgICBpZiAoZGVsZWdhdGUpIHtcbiAgICAgICAgb3JpZ2luYWxDYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgICAgICBjYWxsYmFjayA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgdmFyIHQgPSBlLnRhcmdldDtcblxuICAgICAgICAgIHdoaWxlICghbWF0Y2hlcyh0LCBkZWxlZ2F0ZSkpIHtcbiAgICAgICAgICAgIGlmICh0ID09PSB0aGlzKSB7XG4gICAgICAgICAgICAgIHJldHVybiAodCA9IGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHQgPSB0LnBhcmVudE5vZGU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHQpIHtcbiAgICAgICAgICAgIG9yaWdpbmFsQ2FsbGJhY2suY2FsbCh0LCBlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgdmFyIGZpbmFsQ2FsbGJhY2sgPSBjYWxsYmFjaztcbiAgICAgICAgaWYgKHJ1bk9uY2UpIHtcbiAgICAgICAgICBmaW5hbENhbGxiYWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY2FsbGJhY2suYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgICAgIHJlbW92ZUV2ZW50KHYsIGV2ZW50TmFtZSwgZmluYWxDYWxsYmFjayk7XG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICByZWdpc3RlckV2ZW50KHYsIGV2ZW50TmFtZSwgZmluYWxDYWxsYmFjayk7XG4gICAgICB9KTtcbiAgICB9LFxuXG4gICAgb25lOiBmdW5jdGlvbiAoZXZlbnROYW1lLCBkZWxlZ2F0ZSwgY2FsbGJhY2spIHtcbiAgICAgIHJldHVybiB0aGlzLm9uKGV2ZW50TmFtZSwgZGVsZWdhdGUsIGNhbGxiYWNrLCB0cnVlKTtcbiAgICB9LFxuXG4gICAgcmVhZHk6IG9uUmVhZHksXG5cbiAgICB0cmlnZ2VyOiBmdW5jdGlvbiAoZXZlbnROYW1lLCBkYXRhKSB7XG4gICAgICB2YXIgZXZ0ID0gZG9jLmNyZWF0ZUV2ZW50KFwiSFRNTEV2ZW50c1wiKTtcbiAgICAgIGV2dC5kYXRhID0gZGF0YTtcbiAgICAgIGV2dC5pbml0RXZlbnQoZXZlbnROYW1lLCB0cnVlLCBmYWxzZSk7XG4gICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICh2KSB7XG4gICAgICAgIHJldHVybiB2LmRpc3BhdGNoRXZlbnQoZXZ0KTtcbiAgICAgIH0pO1xuICAgIH1cblxuICB9KTtcblxuICBmdW5jdGlvbiBlbmNvZGUobmFtZSwgdmFsdWUpIHtcbiAgICByZXR1cm4gXCImXCIgKyBlbmNvZGVVUklDb21wb25lbnQobmFtZSkgKyBcIj1cIiArIGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkucmVwbGFjZSgvJTIwL2csIFwiK1wiKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFNlbGVjdE11bHRpcGxlXyhlbCkge1xuICAgIHZhciB2YWx1ZXMgPSBbXTtcbiAgICBlYWNoKGVsLm9wdGlvbnMsIGZ1bmN0aW9uIChvKSB7XG4gICAgICBpZiAoby5zZWxlY3RlZCkge1xuICAgICAgICB2YWx1ZXMucHVzaChvLnZhbHVlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gdmFsdWVzLmxlbmd0aCA/IHZhbHVlcyA6IG51bGw7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRTZWxlY3RTaW5nbGVfKGVsKSB7XG4gICAgdmFyIHNlbGVjdGVkSW5kZXggPSBlbC5zZWxlY3RlZEluZGV4O1xuICAgIHJldHVybiBzZWxlY3RlZEluZGV4ID49IDAgPyBlbC5vcHRpb25zW3NlbGVjdGVkSW5kZXhdLnZhbHVlIDogbnVsbDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFZhbHVlKGVsKSB7XG4gICAgdmFyIHR5cGUgPSBlbC50eXBlO1xuICAgIGlmICghdHlwZSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHN3aXRjaCAodHlwZS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICBjYXNlIFwic2VsZWN0LW9uZVwiOlxuICAgICAgICByZXR1cm4gZ2V0U2VsZWN0U2luZ2xlXyhlbCk7XG4gICAgICBjYXNlIFwic2VsZWN0LW11bHRpcGxlXCI6XG4gICAgICAgIHJldHVybiBnZXRTZWxlY3RNdWx0aXBsZV8oZWwpO1xuICAgICAgY2FzZSBcInJhZGlvXCI6XG4gICAgICAgIHJldHVybiAoZWwuY2hlY2tlZCkgPyBlbC52YWx1ZSA6IG51bGw7XG4gICAgICBjYXNlIFwiY2hlY2tib3hcIjpcbiAgICAgICAgcmV0dXJuIChlbC5jaGVja2VkKSA/IGVsLnZhbHVlIDogbnVsbDtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBlbC52YWx1ZSA/IGVsLnZhbHVlIDogbnVsbDtcbiAgICB9XG4gIH1cblxuICBmbi5leHRlbmQoe1xuICAgIHNlcmlhbGl6ZTogZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHF1ZXJ5ID0gXCJcIjtcblxuICAgICAgZWFjaCh0aGlzWzBdLmVsZW1lbnRzIHx8IHRoaXMsIGZ1bmN0aW9uIChlbCkge1xuICAgICAgICBpZiAoZWwuZGlzYWJsZWQgfHwgZWwudGFnTmFtZSA9PT0gXCJGSUVMRFNFVFwiKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBuYW1lID0gZWwubmFtZTtcbiAgICAgICAgc3dpdGNoIChlbC50eXBlLnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgICAgICBjYXNlIFwiZmlsZVwiOlxuICAgICAgICAgIGNhc2UgXCJyZXNldFwiOlxuICAgICAgICAgIGNhc2UgXCJzdWJtaXRcIjpcbiAgICAgICAgICBjYXNlIFwiYnV0dG9uXCI6XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIFwic2VsZWN0LW11bHRpcGxlXCI6XG4gICAgICAgICAgICB2YXIgdmFsdWVzID0gZ2V0VmFsdWUoZWwpO1xuICAgICAgICAgICAgaWYgKHZhbHVlcyAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICBlYWNoKHZhbHVlcywgZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgcXVlcnkgKz0gZW5jb2RlKG5hbWUsIHZhbHVlKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgdmFyIHZhbHVlID0gZ2V0VmFsdWUoZWwpO1xuICAgICAgICAgICAgaWYgKHZhbHVlICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgIHF1ZXJ5ICs9IGVuY29kZShuYW1lLCB2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gcXVlcnkuc3Vic3RyKDEpO1xuICAgIH0sXG5cbiAgICB2YWw6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIGdldFZhbHVlKHRoaXNbMF0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAodikge1xuICAgICAgICAgIHJldHVybiB2LnZhbHVlID0gdmFsdWU7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICB9KTtcblxuICBmdW5jdGlvbiBpbnNlcnRFbGVtZW50KGVsLCBjaGlsZCwgcHJlcGVuZCkge1xuICAgIGlmIChwcmVwZW5kKSB7XG4gICAgICB2YXIgZmlyc3QgPSBlbC5jaGlsZE5vZGVzWzBdO1xuICAgICAgZWwuaW5zZXJ0QmVmb3JlKGNoaWxkLCBmaXJzdCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsLmFwcGVuZENoaWxkKGNoaWxkKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBpbnNlcnRDb250ZW50KHBhcmVudCwgY2hpbGQsIHByZXBlbmQpIHtcbiAgICB2YXIgc3RyID0gaXNTdHJpbmcoY2hpbGQpO1xuXG4gICAgaWYgKCFzdHIgJiYgY2hpbGQubGVuZ3RoKSB7XG4gICAgICBlYWNoKGNoaWxkLCBmdW5jdGlvbiAodikge1xuICAgICAgICByZXR1cm4gaW5zZXJ0Q29udGVudChwYXJlbnQsIHYsIHByZXBlbmQpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZWFjaChwYXJlbnQsIHN0ciA/IGZ1bmN0aW9uICh2KSB7XG4gICAgICByZXR1cm4gdi5pbnNlcnRBZGphY2VudEhUTUwocHJlcGVuZCA/IFwiYWZ0ZXJiZWdpblwiIDogXCJiZWZvcmVlbmRcIiwgY2hpbGQpO1xuICAgIH0gOiBmdW5jdGlvbiAodiwgaSkge1xuICAgICAgcmV0dXJuIGluc2VydEVsZW1lbnQodiwgKGkgPT09IDAgPyBjaGlsZCA6IGNoaWxkLmNsb25lTm9kZSh0cnVlKSksIHByZXBlbmQpO1xuICAgIH0pO1xuICB9XG5cbiAgZm4uZXh0ZW5kKHtcbiAgICBhZnRlcjogZnVuY3Rpb24gKHNlbGVjdG9yKSB7XG4gICAgICBjYXNoKHNlbGVjdG9yKS5pbnNlcnRBZnRlcih0aGlzKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICBhcHBlbmQ6IGZ1bmN0aW9uIChjb250ZW50KSB7XG4gICAgICBpbnNlcnRDb250ZW50KHRoaXMsIGNvbnRlbnQpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIGFwcGVuZFRvOiBmdW5jdGlvbiAocGFyZW50KSB7XG4gICAgICBpbnNlcnRDb250ZW50KGNhc2gocGFyZW50KSwgdGhpcyk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgYmVmb3JlOiBmdW5jdGlvbiAoc2VsZWN0b3IpIHtcbiAgICAgIGNhc2goc2VsZWN0b3IpLmluc2VydEJlZm9yZSh0aGlzKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICBjbG9uZTogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGNhc2godGhpcy5tYXAoZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgcmV0dXJuIHYuY2xvbmVOb2RlKHRydWUpO1xuICAgICAgfSkpO1xuICAgIH0sXG5cbiAgICBlbXB0eTogZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy5odG1sKFwiXCIpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIGh0bWw6IGZ1bmN0aW9uIChjb250ZW50KSB7XG4gICAgICBpZiAoY29udGVudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiB0aGlzWzBdLmlubmVySFRNTDtcbiAgICAgIH1cbiAgICAgIHZhciBzb3VyY2UgPSAoY29udGVudC5ub2RlVHlwZSA/IGNvbnRlbnRbMF0ub3V0ZXJIVE1MIDogY29udGVudCk7XG4gICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICh2KSB7XG4gICAgICAgIHJldHVybiB2LmlubmVySFRNTCA9IHNvdXJjZTtcbiAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBpbnNlcnRBZnRlcjogZnVuY3Rpb24gKHNlbGVjdG9yKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG5cbiAgICAgIGNhc2goc2VsZWN0b3IpLmVhY2goZnVuY3Rpb24gKGVsLCBpKSB7XG4gICAgICAgIHZhciBwYXJlbnQgPSBlbC5wYXJlbnROb2RlLCBzaWJsaW5nID0gZWwubmV4dFNpYmxpbmc7XG4gICAgICAgIF90aGlzLmVhY2goZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgICBwYXJlbnQuaW5zZXJ0QmVmb3JlKChpID09PSAwID8gdiA6IHYuY2xvbmVOb2RlKHRydWUpKSwgc2libGluZyk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICBpbnNlcnRCZWZvcmU6IGZ1bmN0aW9uIChzZWxlY3Rvcikge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG4gICAgICBjYXNoKHNlbGVjdG9yKS5lYWNoKGZ1bmN0aW9uIChlbCwgaSkge1xuICAgICAgICB2YXIgcGFyZW50ID0gZWwucGFyZW50Tm9kZTtcbiAgICAgICAgX3RoaXMyLmVhY2goZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgICBwYXJlbnQuaW5zZXJ0QmVmb3JlKChpID09PSAwID8gdiA6IHYuY2xvbmVOb2RlKHRydWUpKSwgZWwpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIHByZXBlbmQ6IGZ1bmN0aW9uIChjb250ZW50KSB7XG4gICAgICBpbnNlcnRDb250ZW50KHRoaXMsIGNvbnRlbnQsIHRydWUpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIHByZXBlbmRUbzogZnVuY3Rpb24gKHBhcmVudCkge1xuICAgICAgaW5zZXJ0Q29udGVudChjYXNoKHBhcmVudCksIHRoaXMsIHRydWUpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIHJlbW92ZTogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAodikge1xuICAgICAgICByZXR1cm4gdi5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHYpO1xuICAgICAgfSk7XG4gICAgfSxcblxuICAgIHRleHQ6IGZ1bmN0aW9uIChjb250ZW50KSB7XG4gICAgICBpZiAoY29udGVudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiB0aGlzWzBdLnRleHRDb250ZW50O1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAodikge1xuICAgICAgICByZXR1cm4gdi50ZXh0Q29udGVudCA9IGNvbnRlbnQ7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgfSk7XG5cbiAgdmFyIGRvY0VsID0gZG9jLmRvY3VtZW50RWxlbWVudDtcblxuICBmbi5leHRlbmQoe1xuICAgIHBvc2l0aW9uOiBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgZWwgPSB0aGlzWzBdO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbGVmdDogZWwub2Zmc2V0TGVmdCxcbiAgICAgICAgdG9wOiBlbC5vZmZzZXRUb3BcbiAgICAgIH07XG4gICAgfSxcblxuICAgIG9mZnNldDogZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHJlY3QgPSB0aGlzWzBdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdG9wOiByZWN0LnRvcCArIHdpbi5wYWdlWU9mZnNldCAtIGRvY0VsLmNsaWVudFRvcCxcbiAgICAgICAgbGVmdDogcmVjdC5sZWZ0ICsgd2luLnBhZ2VYT2Zmc2V0IC0gZG9jRWwuY2xpZW50TGVmdFxuICAgICAgfTtcbiAgICB9LFxuXG4gICAgb2Zmc2V0UGFyZW50OiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gY2FzaCh0aGlzWzBdLm9mZnNldFBhcmVudCk7XG4gICAgfVxuXG4gIH0pO1xuXG4gIGZuLmV4dGVuZCh7XG4gICAgY2hpbGRyZW46IGZ1bmN0aW9uIChzZWxlY3Rvcikge1xuICAgICAgdmFyIGVsZW1zID0gW107XG4gICAgICB0aGlzLmVhY2goZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgIHB1c2guYXBwbHkoZWxlbXMsIGVsLmNoaWxkcmVuKTtcbiAgICAgIH0pO1xuICAgICAgZWxlbXMgPSB1bmlxdWUoZWxlbXMpO1xuXG4gICAgICByZXR1cm4gKCFzZWxlY3RvciA/IGVsZW1zIDogZWxlbXMuZmlsdGVyKGZ1bmN0aW9uICh2KSB7XG4gICAgICAgIHJldHVybiBtYXRjaGVzKHYsIHNlbGVjdG9yKTtcbiAgICAgIH0pKTtcbiAgICB9LFxuXG4gICAgY2xvc2VzdDogZnVuY3Rpb24gKHNlbGVjdG9yKSB7XG4gICAgICBpZiAoIXNlbGVjdG9yIHx8IHRoaXMubGVuZ3RoIDwgMSkge1xuICAgICAgICByZXR1cm4gY2FzaCgpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuaXMoc2VsZWN0b3IpKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZpbHRlcihzZWxlY3Rvcik7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5wYXJlbnQoKS5jbG9zZXN0KHNlbGVjdG9yKTtcbiAgICB9LFxuXG4gICAgaXM6IGZ1bmN0aW9uIChzZWxlY3Rvcikge1xuICAgICAgaWYgKCFzZWxlY3Rvcikge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHZhciBtYXRjaCA9IGZhbHNlLCBjb21wYXJhdG9yID0gZ2V0Q29tcGFyZUZ1bmN0aW9uKHNlbGVjdG9yKTtcblxuICAgICAgdGhpcy5lYWNoKGZ1bmN0aW9uIChlbCkge1xuICAgICAgICBtYXRjaCA9IGNvbXBhcmF0b3IoZWwsIHNlbGVjdG9yKTtcbiAgICAgICAgcmV0dXJuICFtYXRjaDtcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gbWF0Y2g7XG4gICAgfSxcblxuICAgIGZpbmQ6IGZ1bmN0aW9uIChzZWxlY3Rvcikge1xuICAgICAgaWYgKCFzZWxlY3RvciB8fCBzZWxlY3Rvci5ub2RlVHlwZSkge1xuICAgICAgICByZXR1cm4gY2FzaChzZWxlY3RvciAmJiB0aGlzLmhhcyhzZWxlY3RvcikubGVuZ3RoID8gc2VsZWN0b3IgOiBudWxsKTtcbiAgICAgIH1cblxuICAgICAgdmFyIGVsZW1zID0gW107XG4gICAgICB0aGlzLmVhY2goZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgIHB1c2guYXBwbHkoZWxlbXMsIGZpbmQoc2VsZWN0b3IsIGVsKSk7XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIHVuaXF1ZShlbGVtcyk7XG4gICAgfSxcblxuICAgIGhhczogZnVuY3Rpb24gKHNlbGVjdG9yKSB7XG4gICAgICB2YXIgY29tcGFyYXRvciA9IChpc1N0cmluZyhzZWxlY3RvcikgPyBmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgcmV0dXJuIGZpbmQoc2VsZWN0b3IsIGVsKS5sZW5ndGggIT09IDA7XG4gICAgICB9IDogZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgIHJldHVybiBlbC5jb250YWlucyhzZWxlY3Rvcik7XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIHRoaXMuZmlsdGVyKGNvbXBhcmF0b3IpO1xuICAgIH0sXG5cbiAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gY2FzaCh0aGlzWzBdLm5leHRFbGVtZW50U2libGluZyk7XG4gICAgfSxcblxuICAgIG5vdDogZnVuY3Rpb24gKHNlbGVjdG9yKSB7XG4gICAgICBpZiAoIXNlbGVjdG9yKSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuXG4gICAgICB2YXIgY29tcGFyYXRvciA9IGdldENvbXBhcmVGdW5jdGlvbihzZWxlY3Rvcik7XG5cbiAgICAgIHJldHVybiB0aGlzLmZpbHRlcihmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgcmV0dXJuICFjb21wYXJhdG9yKGVsLCBzZWxlY3Rvcik7XG4gICAgICB9KTtcbiAgICB9LFxuXG4gICAgcGFyZW50OiBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgcmVzdWx0ID0gW107XG5cbiAgICAgIHRoaXMuZWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICBpZiAoaXRlbSAmJiBpdGVtLnBhcmVudE5vZGUpIHtcbiAgICAgICAgICByZXN1bHQucHVzaChpdGVtLnBhcmVudE5vZGUpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIHVuaXF1ZShyZXN1bHQpO1xuICAgIH0sXG5cbiAgICBwYXJlbnRzOiBmdW5jdGlvbiAoc2VsZWN0b3IpIHtcbiAgICAgIHZhciBsYXN0LCByZXN1bHQgPSBbXTtcblxuICAgICAgdGhpcy5lYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgIGxhc3QgPSBpdGVtO1xuXG4gICAgICAgIHdoaWxlIChsYXN0ICYmIGxhc3QucGFyZW50Tm9kZSAmJiBsYXN0ICE9PSBkb2MuYm9keS5wYXJlbnROb2RlKSB7XG4gICAgICAgICAgbGFzdCA9IGxhc3QucGFyZW50Tm9kZTtcblxuICAgICAgICAgIGlmICghc2VsZWN0b3IgfHwgKHNlbGVjdG9yICYmIG1hdGNoZXMobGFzdCwgc2VsZWN0b3IpKSkge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2gobGFzdCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIHVuaXF1ZShyZXN1bHQpO1xuICAgIH0sXG5cbiAgICBwcmV2OiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gY2FzaCh0aGlzWzBdLnByZXZpb3VzRWxlbWVudFNpYmxpbmcpO1xuICAgIH0sXG5cbiAgICBzaWJsaW5nczogZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGNvbGxlY3Rpb24gPSB0aGlzLnBhcmVudCgpLmNoaWxkcmVuKCksIGVsID0gdGhpc1swXTtcblxuICAgICAgcmV0dXJuIGNvbGxlY3Rpb24uZmlsdGVyKGZ1bmN0aW9uIChpKSB7XG4gICAgICAgIHJldHVybiBpICE9PSBlbDtcbiAgICAgIH0pO1xuICAgIH1cblxuICB9KTtcblxuXG4gIHJldHVybiBjYXNoO1xufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY2FzaC1kb20vZGlzdC9jYXNoLmpzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMSJdLCJzb3VyY2VSb290IjoiIn0=