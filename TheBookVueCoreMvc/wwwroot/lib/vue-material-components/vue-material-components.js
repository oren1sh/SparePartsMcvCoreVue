(function webpackUniversalModuleDefinition(Parts, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("Vue"));
	else if(typeof define === 'function' && define.amd)
		define(["Vue"], factory);
	else if(typeof exports === 'object')
		exports["VueMaterialComponents"] = factory(require("Vue"));
	else
		Parts["VueMaterialComponents"] = factory(Parts["Vue"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var components_1 = __webpack_require__(1);
	var directives_1 = __webpack_require__(3);
	var mixins_1 = __webpack_require__(10);
	module.exports = {
	    install: function (Vue) {
	        for (var componentName in components_1.default) {
	            Vue.component(componentName, components_1.default[componentName]);
	        }
	        for (var directiveName in directives_1.default) {
	            Vue.directive(directiveName, components_1.default[directiveName]);
	        }
	    },
	    components: components_1.default,
	    directives: directives_1.default,
	    mixins: mixins_1.default,
	};


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Vue = Vue || __webpack_require__(2);
	var directives_1 = __webpack_require__(3);
	var mixins_1 = __webpack_require__(10);
	var badge_1 = __webpack_require__(18);
	var button_1 = __webpack_require__(21);
	var btn_1 = __webpack_require__(25);
	var breadcrumbs_1 = __webpack_require__(27);
	var card_1 = __webpack_require__(35);
	var checkbox_1 = __webpack_require__(37);
	var checkbox_group_1 = __webpack_require__(39);
	var chip_1 = __webpack_require__(41);
	var circular_preloader_1 = __webpack_require__(43);
	var collapsible_1 = __webpack_require__(45);
	var collapsible_item_1 = __webpack_require__(47);
	var collection_1 = __webpack_require__(49);
	var collection_list_1 = __webpack_require__(51);
	var collection_item_1 = __webpack_require__(53);
	var collection_list_item_1 = __webpack_require__(55);
	var dropdown_1 = __webpack_require__(57);
	var dropdown_item_1 = __webpack_require__(59);
	var dropdown_list_1 = __webpack_require__(58);
	var event_wrapper_1 = __webpack_require__(64);
	var fab_1 = __webpack_require__(66);
	var file_input_1 = __webpack_require__(68);
	var input_1 = __webpack_require__(70);
	var optgroup_1 = __webpack_require__(72);
	var option_1 = __webpack_require__(74);
	var radio_1 = __webpack_require__(76);
	var radio_group_1 = __webpack_require__(78);
	var select_1 = __webpack_require__(80);
	var textarea_1 = __webpack_require__(82);
	var icon_1 = __webpack_require__(22);
	var image_1 = __webpack_require__(84);
	var lean_overlay_1 = __webpack_require__(86);
	var linear_preloader_1 = __webpack_require__(89);
	var modal_1 = __webpack_require__(91);
	var nav_item_1 = __webpack_require__(93);
	var navbar_1 = __webpack_require__(28);
	var pagination_1 = __webpack_require__(95);
	var sidenav_1 = __webpack_require__(29);
	var sidenav_overlay_1 = __webpack_require__(30);
	var slide_1 = __webpack_require__(97);
	var slider_1 = __webpack_require__(99);
	var swich_1 = __webpack_require__(101);
	var tab_1 = __webpack_require__(103);
	var tabs_1 = __webpack_require__(105);
	__webpack_require__(107);
	var VueMaterializeComponents = {
	    mdBadge: badge_1['default'],
	    mdButton: button_1['default'],
	    mdBtn: btn_1['default'],
	    mdBreadcrumbs: breadcrumbs_1['default'],
	    mdCard: card_1['default'],
	    mdCheckbox: checkbox_1['default'],
	    mdCheckboxGroup: checkbox_group_1['default'],
	    mdChip: chip_1['default'],
	    mdCircularPreloader: circular_preloader_1['default'],
	    mdCollapsible: collapsible_1['default'],
	    mdCollapsibleItem: collapsible_item_1['default'],
	    mdCollection: collection_1['default'],
	    mdCollectionList: collection_list_1['default'],
	    mdCollectionItem: collection_item_1['default'],
	    mdCollectionListItem: collection_list_item_1['default'],
	    mdDropdown: dropdown_1['default'],
	    mdDropdownItem: dropdown_item_1['default'],
	    mdDropdownList: dropdown_list_1['default'],
	    mdEventWrapper: event_wrapper_1['default'],
	    mdFab: fab_1['default'],
	    mdFileInput: file_input_1['default'],
	    mdInput: input_1['default'],
	    mdOptgroup: optgroup_1['default'],
	    mdOption: option_1['default'],
	    mdRadio: radio_1['default'],
	    mdRadioGroup: radio_group_1['default'],
	    mdSelect: select_1['default'],
	    mdTextarea: textarea_1['default'],
	    mdIcon: icon_1['default'],
	    mdImage: image_1['default'],
	    mdLeanOverlay: lean_overlay_1['default'],
	    mdLinearPreloader: linear_preloader_1['default'],
	    mdModal: modal_1['default'],
	    mdNavItem: nav_item_1['default'],
	    mdNavbar: navbar_1['default'],
	    mdPagination: pagination_1['default'],
	    mdSidenav: sidenav_1['default'],
	    mdSidenavOverlay: sidenav_overlay_1['default'],
	    mdSlide: slide_1['default'],
	    mdSlider: slider_1['default'],
	    mdSwitch: swich_1['default'],
	    mdTab: tab_1['default'],
	    mdTabs: tabs_1['default']
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports['default'] = VueMaterializeComponents;
	var baseComponent = {
	    components: VueMaterializeComponents,
	    directives: directives_1['default'],
	    mixins: mixins_1['default']
	};
	exports.BaseComponent = Vue.extend(baseComponent);
	//# sourceMappingURL=index.js.map

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var bind_boolean_1 = __webpack_require__(4);
	var bind_raw_1 = __webpack_require__(5);
	var click_away_1 = __webpack_require__(6);
	var slot_1 = __webpack_require__(7);
	var wave_effect_1 = __webpack_require__(8);
	var directives = {
	    bindBoolean: bind_boolean_1['default'],
	    bindRaw: bind_raw_1['default'],
	    bindClickAway: click_away_1['default'],
	    slot: slot_1['default'],
	    waveEffect: wave_effect_1['default']
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports['default'] = directives;
	//# sourceMappingURL=index.js.map

/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";
	// removed DirectiveOption because priority is not boolean
	var bindBoolean = {
	    priority: 850,
	    update: function update(value) {
	        var arg = this.arg;
	        if (value) {
	            this.el.setAttribute(arg, arg);
	        } else {
	            this.el.removeAttribute(arg);
	        }
	    }
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = bindBoolean;
	//# sourceMappingURL=index.js.map

/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";
	// removed DirectiveOption because priority is not boolean
	var bindRaw = {
	    priority: 750,
	    bind: function bind() {
	        this.attribute = this.arg;
	    },
	    update: function update(value) {
	        var el = this.el;
	        if (this.attribute == 'value') {
	            el.value = value;
	        } else {
	            el.setAttribute(this.attribute, value);
	        }
	    }
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = bindRaw;
	//# sourceMappingURL=index.js.map

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Vue = Vue || __webpack_require__(2);
	var onClickAway = {
	    acceptStatement: true,
	    update: function update(handler) {
	        this.reset();
	        var self = this;
	        var scope = this._scope || this.vm;
	        this.handler = function (ev) {
	            if (!self.el.contains(ev.target)) {
	                scope.$event = ev;
	                var res = handler(ev);
	                scope.$event = null;
	                return res;
	            }
	        };
	        Vue.util.on(document.documentElement, 'click', this.handler);
	    },
	    reset: function reset() {
	        Vue.util.off(document.documentElement, 'click', this.handler);
	    },
	    unbind: function unbind() {
	        this.reset();
	    }
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports['default'] = onClickAway;
	//# sourceMappingURL=index.js.map

/***/ },
/* 7 */
/***/ function(module, exports) {

	"use strict";
	var slot = {
	    bind: function bind() {
	        var host = this.vm;
	        var Parts = host.$Parts;
	        var raw = host.$options._content;
	        // TODO: Insert your custom logic to decide what element goes here
	        for (var i = 0; i < raw.children.length; i++) {
	            var node = raw.children[i].cloneNode(true);
	            this.el.appendChild(node);
	            Parts.$compile(node, host, this._scope);
	        }
	    }
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = slot;
	//# sourceMappingURL=index.js.map

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var effect_1 = __webpack_require__(9);
	var waveEffect = {
	    bind: function bind() {
	        var _this = this;
	        this.hide = function (e) {
	            effect_1["default"].hide(e, _this.el);
	        };
	        this.show = function (e) {
	            effect_1["default"].show(e, _this.el);
	        };
	        this.el.addEventListener("mousedown", this.show, false);
	        this.el.addEventListener("mouseleave", this.hide, false);
	        this.el.addEventListener("mouseup", this.hide, false);
	    },
	    unbind: function unbind() {
	        this.el.removeEventListener("mousedown", this.show);
	        this.el.removeEventListener("mouseleave", this.hide);
	        this.el.removeEventListener("mouseup", this.hide);
	    }
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = waveEffect;
	//# sourceMappingURL=index.js.map

/***/ },
/* 9 */
/***/ function(module, exports) {

	"use strict";
	/*!
	 * Materialize v0.97.5 (http://materializecss.com)
	 * Copyright 2014-2015 Materialize
	 * MIT License (https://raw.githubusercontent.com/Dogfalo/materialize/master/LICENSE)
	 */
	/**
	 * Disable mousedown event for 500ms during and after touch
	 */
	var TouchHandler = {
	    /* uses an integer rather than bool so there's no issues with
	     * needing to clear timeouts if another touch event occurred
	     * within the 500ms. Cannot mouseup between touchstart and
	     * touchend, nor in the 500ms after touchend. */
	    touches: 0,
	    allowEvent: function allowEvent(e) {
	        var allow = true;
	        if (e.type === 'touchstart') {
	            TouchHandler.touches += 1; //push
	        } else if (e.type === 'touchend' || e.type === 'touchcancel') {
	                setTimeout(function () {
	                    if (TouchHandler.touches > 0) {
	                        TouchHandler.touches -= 1; //pop after 500ms
	                    }
	                }, 500);
	            } else if (e.type === 'mousedown' && TouchHandler.touches > 0) {
	                allow = false;
	            }
	        return allow;
	    },
	    touchup: function touchup(e) {
	        TouchHandler.allowEvent(e);
	    }
	};
	// Find exact position of element
	function isWindow(obj) {
	    return obj !== null && obj === obj.window;
	}
	function getWindow(elem) {
	    return isWindow(elem) ? elem : elem.nodeType === 9 && elem.defaultView;
	}
	function offset(elem) {
	    var docElem,
	        win,
	        box = { top: 0, left: 0 },
	        doc = elem && elem.ownerDocument;
	    docElem = doc.documentElement;
	    if (typeof elem.getBoundingClientRect !== typeof undefined) {
	        box = elem.getBoundingClientRect();
	    }
	    win = getWindow(doc);
	    return {
	        top: box.top + win.pageYOffset - docElem.clientTop,
	        left: box.left + win.pageXOffset - docElem.clientLeft
	    };
	}
	function convertStyle(obj) {
	    var style = '';
	    for (var a in obj) {
	        if (obj.hasOwnProperty(a)) {
	            style += a + ':' + obj[a] + ';';
	        }
	    }
	    return style;
	}
	Object.defineProperty(exports, "__esModule", { value: true });
	exports['default'] = {
	    // Effect delay
	    duration: 750,
	    show: function show(e, element) {
	        // Disable right click
	        if (e.button === 2) {
	            return false;
	        }
	        var el = element || this;
	        // Create ripple
	        var ripple = document.createElement('div');
	        ripple.className = 'waves-ripple';
	        el.appendChild(ripple);
	        // Get click coordinate and element witdh
	        var pos = offset(el);
	        var relativeY = e.pageY - pos.top;
	        var relativeX = e.pageX - pos.left;
	        var scale = 'scale(' + el.clientWidth / 100 * 10 + ')';
	        // Support for touch devices
	        if ('touches' in e) {
	            relativeY = e.touches[0].pageY - pos.top;
	            relativeX = e.touches[0].pageX - pos.left;
	        }
	        // Attach data to element
	        ripple.setAttribute('data-hold', Date.now().toString());
	        ripple.setAttribute('data-scale', scale);
	        ripple.setAttribute('data-x', relativeX.toString());
	        ripple.setAttribute('data-y', relativeY.toString());
	        // Set ripple position
	        var rippleStyle = {
	            'top': relativeY + 'px',
	            'left': relativeX + 'px'
	        };
	        ripple.className = ripple.className + ' waves-notransition';
	        ripple.setAttribute('style', convertStyle(rippleStyle));
	        ripple.className = ripple.className.replace('waves-notransition', '');
	        // Scale the ripple
	        rippleStyle['-webkit-transform'] = scale;
	        rippleStyle['-moz-transform'] = scale;
	        rippleStyle['-ms-transform'] = scale;
	        rippleStyle['-o-transform'] = scale;
	        rippleStyle.transform = scale;
	        rippleStyle.opacity = '1';
	        rippleStyle['-webkit-transition-duration'] = this.duration + 'ms';
	        rippleStyle['-moz-transition-duration'] = this.duration + 'ms';
	        rippleStyle['-o-transition-duration'] = this.duration + 'ms';
	        rippleStyle['transition-duration'] = this.duration + 'ms';
	        rippleStyle['-webkit-transition-timing-function'] = 'cubic-bezier(0.250, 0.460, 0.450, 0.940)';
	        rippleStyle['-moz-transition-timing-function'] = 'cubic-bezier(0.250, 0.460, 0.450, 0.940)';
	        rippleStyle['-o-transition-timing-function'] = 'cubic-bezier(0.250, 0.460, 0.450, 0.940)';
	        rippleStyle['transition-timing-function'] = 'cubic-bezier(0.250, 0.460, 0.450, 0.940)';
	        ripple.setAttribute('style', convertStyle(rippleStyle));
	    },
	    hide: function hide(e, el) {
	        var _this = this;
	        TouchHandler.touchup(e);
	        var width = el.clientWidth * 1.4;
	        // Get first ripple
	        var ripple = null;
	        var ripples = el.getElementsByClassName('waves-ripple');
	        if (ripples.length > 0) {
	            ripple = ripples[ripples.length - 1];
	        } else {
	            return false;
	        }
	        var relativeX = ripple.getAttribute('data-x');
	        var relativeY = ripple.getAttribute('data-y');
	        var scale = ripple.getAttribute('data-scale');
	        // Get delay beetween mousedown and mouse leave
	        var diff = Date.now() - Number(ripple.getAttribute('data-hold'));
	        var delay = 350 - diff;
	        if (delay < 0) {
	            delay = 0;
	        }
	        // Fade out ripple after delay
	        setTimeout(function () {
	            var style = {
	                'top': relativeY + 'px',
	                'left': relativeX + 'px',
	                'opacity': '0',
	                // Duration
	                '-webkit-transition-duration': _this.duration + 'ms',
	                '-moz-transition-duration': _this.duration + 'ms',
	                '-o-transition-duration': _this.duration + 'ms',
	                'transition-duration': _this.duration + 'ms',
	                '-webkit-transform': scale,
	                '-moz-transform': scale,
	                '-ms-transform': scale,
	                '-o-transform': scale,
	                'transform': scale
	            };
	            ripple.setAttribute('style', convertStyle(style));
	            setTimeout(function () {
	                try {
	                    el.removeChild(ripple);
	                } catch (e) {
	                    return false;
	                }
	            }, _this.duration);
	        }, delay);
	    }
	};
	//# sourceMappingURL=index.js.map

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var events_1 = __webpack_require__(11);
	var input_1 = __webpack_require__(12);
	var toast_1 = __webpack_require__(13);
	var tooltip_1 = __webpack_require__(16);
	Object.defineProperty(exports, "__esModule", { value: true });
	exports['default'] = [events_1['default'], input_1['default'], toast_1['default'], tooltip_1['default']];
	//# sourceMappingURL=index.js.map

/***/ },
/* 11 */
/***/ function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = {
	    methods: {
	        broadcast: function broadcast() {
	            var args = Array.prototype.slice.call(arguments);
	            this.$broadcast.apply(this, args);
	        },
	        dispatch: function dispatch() {
	            var args = Array.prototype.slice.call(arguments);
	            this.$dispatch.apply(this, args);
	        }
	    }
	};
	//# sourceMappingURL=index.js.map

/***/ },
/* 12 */
/***/ function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = {
	    computed: {
	        id: function id() {
	            return this.$options.name.toLowerCase() + '_' + this._uid;
	        }
	    },
	    methods: {
	        $getAllChildren: function $getAllChildren() {
	            return this._getChildren(this);
	        },
	        _getChildren: function _getChildren(component) {
	            var children = [];
	            children = children.concat(component.$children);
	            for (var i = 0; i < component.$children.length; i++) {
	                children = children.concat(this._getChildren(component.$children[i]));
	            }
	            return children;
	        }
	    }
	};
	//# sourceMappingURL=index.js.map

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var toast_1 = __webpack_require__(14);
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = {
	    methods: {
	        toast: function toast(message, displayLength, className, completeCallback) {
	            return toast_1.toast(message, displayLength, className, completeCallback);
	        }
	    }
	};
	//# sourceMappingURL=index.js.map

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Vel = __webpack_require__(15);
	/*!
	 * Materialize v0.97.5 (http://materializecss.com)
	 * Copyright 2014-2015 Materialize
	 * MIT License (https://raw.githubusercontent.com/Dogfalo/materialize/master/LICENSE)
	 */
	exports.toast = function (message, displayLength, className, completeCallback) {
	    className = className || "";
	    var container = document.getElementById('toast-container');
	    // Create toast container if it does not exist
	    if (container === null) {
	        // create notification container
	        container = document.createElement('div');
	        container.id = 'toast-container';
	        document.body.appendChild(container);
	    }
	    // Select and append toast
	    var newToast = createToast(message);
	    // only append toast if message is not undefined
	    if (message) {
	        container.appendChild(newToast);
	    }
	    newToast.style.top = '35px';
	    newToast.style.opacity = '0';
	    // Animate toast in
	    Vel(newToast, { "top": "0px", opacity: 1 }, { duration: 300,
	        easing: 'easeOutCubic',
	        queue: false });
	    // Allows timer to be pause while being panned
	    var timeLeft = displayLength;
	    var counterInterval = setInterval(function () {
	        if (newToast.parentNode === null) window.clearInterval(counterInterval);
	        // If toast is not being dragged, decrease its time remaining
	        if (!newToast.classList.contains('panning')) {
	            timeLeft -= 20;
	        }
	        if (timeLeft <= 0) {
	            // Animate toast out
	            Vel(newToast, { "opacity": 0, marginTop: '-40px' }, { duration: 375,
	                easing: 'easeOutExpo',
	                queue: false,
	                complete: function complete() {
	                    // Call the optional callback
	                    if (typeof completeCallback === "function") completeCallback();
	                    // Remove toast after it times out
	                    this[0].parentNode.removeChild(this[0]);
	                }
	            });
	            window.clearInterval(counterInterval);
	        }
	    }, 20);
	    function createToast(html) {
	        // Create toast
	        var toast = document.createElement('div');
	        toast.classList.add('toast');
	        if (className) {
	            var classes = className.split(' ');
	            for (var i = 0, count = classes.length; i < count; i++) {
	                toast.classList.add(classes[i]);
	            }
	        }
	        // If type of parameter is HTML Element
	        if (typeof HTMLElement === "object" ? html instanceof HTMLElement : html && typeof html === "object" && html !== null && html.nodeType === 1 && typeof html.nodeName === "string") {
	            toast.appendChild(html);
	        } else {
	            // Insert as text;
	            toast.innerHTML = html;
	        }
	        // Bind hammer
	        /* todo
	         var hammerHandler = new Hammer(toast, {prevent_default: false});
	         hammerHandler.on('pan', function(e) {
	         var deltaX = e.deltaX;
	         var activationDistance = 80;
	           // Change toast state
	         if (!toast.classList.contains('panning')){
	         toast.classList.add('panning');
	         }
	           var opacityPercent = 1-Math.abs(deltaX / activationDistance);
	         if (opacityPercent < 0)
	         opacityPercent = 0;
	           Vel(toast, {left: deltaX, opacity: opacityPercent }, {duration: 50, queue: false, easing: 'easeOutQuad'});
	           });
	           hammerHandler.on('panend', function(e) {
	         var deltaX = e.deltaX;
	         var activationDistance = 80;
	           // If toast dragged past activation point
	         if (Math.abs(deltaX) > activationDistance) {
	         Vel(toast, {marginTop: '-40px'}, { duration: 375,
	         easing: 'easeOutExpo',
	         queue: false,
	         complete: function(){
	         if(typeof(completeCallback) === "function") {
	         completeCallback();
	         }
	         toast.parentNode.removeChild(toast);
	         }
	         });
	           } else {
	         toast.classList.remove('panning');
	         // Put toast back into original position
	         Vel(toast, { left: 0, opacity: 1 }, { duration: 300,
	         easing: 'easeOutExpo',
	         queue: false
	         });
	           }
	         });
	         */
	        return toast;
	    }
	};
	//# sourceMappingURL=index.js.map

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! VelocityJS.org (1.2.3). (C) 2014 Julian Shapiro. MIT @license: en.wikipedia.org/wiki/MIT_License */ /*************************
	   Velocity jQuery Shim
	*************************/ /*! VelocityJS.org jQuery Shim (1.0.1). (C) 2014 The jQuery Foundation. MIT @license: en.wikipedia.org/wiki/MIT_License. */ /* This file contains the jQuery functions that Velocity relies on, thereby removing Velocity's dependency on a full copy of jQuery, and allowing it to work in any environment. */ /* These shimmed functions are only used if jQuery isn't present. If both this shim and jQuery are loaded, Velocity defaults to jQuery proper. */ /* Browser support: Using this shim instead of jQuery proper removes support for IE8. */"use strict";;(function(window){ /***************
	         Setup
	    ***************/ /* If jQuery is already loaded, there's no point in loading this shim. */if(window.jQuery){return;} /* jQuery base. */var $=function $(selector,context){return new $.fn.init(selector,context);}; /********************
	       Private Methods
	    ********************/ /* jQuery */$.isWindow = function(obj){ /* jshint eqeqeq: false */return obj != null && obj == obj.window;}; /* jQuery */$.type = function(obj){if(obj == null){return obj + "";}return typeof obj === "object" || typeof obj === "function"?class2type[toString.call(obj)] || "object":typeof obj;}; /* jQuery */$.isArray = Array.isArray || function(obj){return $.type(obj) === "array";}; /* jQuery */function isArraylike(obj){var length=obj.length,type=$.type(obj);if(type === "function" || $.isWindow(obj)){return false;}if(obj.nodeType === 1 && length){return true;}return type === "array" || length === 0 || typeof length === "number" && length > 0 && length - 1 in obj;} /***************
	       $ Methods
	    ***************/ /* jQuery: Support removed for IE<9. */$.isPlainObject = function(obj){var key;if(!obj || $.type(obj) !== "object" || obj.nodeType || $.isWindow(obj)){return false;}try{if(obj.constructor && !hasOwn.call(obj,"constructor") && !hasOwn.call(obj.constructor.prototype,"isPrototypeOf")){return false;}}catch(e) {return false;}for(key in obj) {}return key === undefined || hasOwn.call(obj,key);}; /* jQuery */$.each = function(obj,callback,args){var value,i=0,length=obj.length,isArray=isArraylike(obj);if(args){if(isArray){for(;i < length;i++) {value = callback.apply(obj[i],args);if(value === false){break;}}}else {for(i in obj) {value = callback.apply(obj[i],args);if(value === false){break;}}}}else {if(isArray){for(;i < length;i++) {value = callback.call(obj[i],i,obj[i]);if(value === false){break;}}}else {for(i in obj) {value = callback.call(obj[i],i,obj[i]);if(value === false){break;}}}}return obj;}; /* Custom */$.data = function(node,key,value){ /* $.getData() */if(value === undefined){var id=node[$.expando],store=id && cache[id];if(key === undefined){return store;}else if(store){if(key in store){return store[key];}} /* $.setData() */}else if(key !== undefined){var id=node[$.expando] || (node[$.expando] = ++$.uuid);cache[id] = cache[id] || {};cache[id][key] = value;return value;}}; /* Custom */$.removeData = function(node,keys){var id=node[$.expando],store=id && cache[id];if(store){$.each(keys,function(_,key){delete store[key];});}}; /* jQuery */$.extend = function(){var src,copyIsArray,copy,name,options,clone,target=arguments[0] || {},i=1,length=arguments.length,deep=false;if(typeof target === "boolean"){deep = target;target = arguments[i] || {};i++;}if(typeof target !== "object" && $.type(target) !== "function"){target = {};}if(i === length){target = this;i--;}for(;i < length;i++) {if((options = arguments[i]) != null){for(name in options) {src = target[name];copy = options[name];if(target === copy){continue;}if(deep && copy && ($.isPlainObject(copy) || (copyIsArray = $.isArray(copy)))){if(copyIsArray){copyIsArray = false;clone = src && $.isArray(src)?src:[];}else {clone = src && $.isPlainObject(src)?src:{};}target[name] = $.extend(deep,clone,copy);}else if(copy !== undefined){target[name] = copy;}}}}return target;}; /* jQuery 1.4.3 */$.queue = function(elem,type,data){function $makeArray(arr,results){var ret=results || [];if(arr != null){if(isArraylike(Object(arr))){ /* $.merge */(function(first,second){var len=+second.length,j=0,i=first.length;while(j < len) {first[i++] = second[j++];}if(len !== len){while(second[j] !== undefined) {first[i++] = second[j++];}}first.length = i;return first;})(ret,typeof arr === "string"?[arr]:arr);}else {[].push.call(ret,arr);}}return ret;}if(!elem){return;}type = (type || "fx") + "queue";var q=$.data(elem,type);if(!data){return q || [];}if(!q || $.isArray(data)){q = $.data(elem,type,$makeArray(data));}else {q.push(data);}return q;}; /* jQuery 1.4.3 */$.dequeue = function(elems,type){ /* Custom: Embed element iteration. */$.each(elems.nodeType?[elems]:elems,function(i,elem){type = type || "fx";var queue=$.queue(elem,type),fn=queue.shift();if(fn === "inprogress"){fn = queue.shift();}if(fn){if(type === "fx"){queue.unshift("inprogress");}fn.call(elem,function(){$.dequeue(elem,type);});}});}; /******************
	       $.fn Methods
	    ******************/ /* jQuery */$.fn = $.prototype = {init:function init(selector){ /* Just return the element wrapped inside an array; don't proceed with the actual jQuery node wrapping process. */if(selector.nodeType){this[0] = selector;return this;}else {throw new Error("Not a DOM node.");}},offset:function offset(){ /* jQuery altered code: Dropped disconnected DOM node checking. */var box=this[0].getBoundingClientRect?this[0].getBoundingClientRect():{top:0,left:0};return {top:box.top + (window.pageYOffset || document.scrollTop || 0) - (document.clientTop || 0),left:box.left + (window.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || 0)};},position:function position(){ /* jQuery */function offsetParent(){var offsetParent=this.offsetParent || document;while(offsetParent && !offsetParent.nodeType.toLowerCase === "html" && offsetParent.style.position === "static") {offsetParent = offsetParent.offsetParent;}return offsetParent || document;} /* Zepto */var elem=this[0],offsetParent=offsetParent.apply(elem),offset=this.offset(),parentOffset=/^(?:body|html)$/i.test(offsetParent.nodeName)?{top:0,left:0}:$(offsetParent).offset();offset.top -= parseFloat(elem.style.marginTop) || 0;offset.left -= parseFloat(elem.style.marginLeft) || 0;if(offsetParent.style){parentOffset.top += parseFloat(offsetParent.style.borderTopWidth) || 0;parentOffset.left += parseFloat(offsetParent.style.borderLeftWidth) || 0;}return {top:offset.top - parentOffset.top,left:offset.left - parentOffset.left};}}; /**********************
	       Private Variables
	    **********************/ /* For $.data() */var cache={};$.expando = "velocity" + new Date().getTime();$.uuid = 0; /* For $.queue() */var class2type={},hasOwn=class2type.hasOwnProperty,toString=class2type.toString;var types="Boolean Number String Function Array Date RegExp Object Error".split(" ");for(var i=0;i < types.length;i++) {class2type["[object " + types[i] + "]"] = types[i].toLowerCase();} /* Makes $(node) possible, without having to call init. */$.fn.init.prototype = $.fn; /* Globalize Velocity onto the window, and assign its Utilities property. */window.Velocity = {Utilities:$};})(window); /******************
	    Velocity.js
	******************/;(function(factory){ /* CommonJS module. */if(typeof module === "object" && typeof module.exports === "object"){module.exports = factory(); /* AMD module. */}else if(true){!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); /* Browser globals. */}else {factory();}})(function(){return (function(global,window,document,undefined){ /***************
	        Summary
	    ***************/ /*
	    - CSS: CSS stack that works independently from the rest of Velocity.
	    - animate(): Core animation method that iterates over the targeted elements and queues the incoming call onto each element individually.
	      - Pre-Queueing: Prepare the element for animation by instantiating its data cache and processing the call's options.
	      - Queueing: The logic that runs once the call has reached its point of execution in the element's $.queue() stack.
	                  Most logic is placed here to avoid risking it becoming stale (if the element's properties have changed).
	      - Pushing: Consolidation of the tween data followed by its push onto the global in-progress calls container.
	    - tick(): The single requestAnimationFrame loop responsible for tweening all in-progress calls.
	    - completeCall(): Handles the cleanup process for each Velocity call.
	    */ /*********************
	       Helper Functions
	    *********************/ /* IE detection. Gist: https://gist.github.com/julianshapiro/9098609 */var IE=(function(){if(document.documentMode){return document.documentMode;}else {for(var i=7;i > 4;i--) {var div=document.createElement("div");div.innerHTML = "<!--[if IE " + i + "]><span></span><![endif]-->";if(div.getElementsByTagName("span").length){div = null;return i;}}}return undefined;})(); /* rAF shim. Gist: https://gist.github.com/julianshapiro/9497513 */var rAFShim=(function(){var timeLast=0;return window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(callback){var timeCurrent=new Date().getTime(),timeDelta; /* Dynamically set delay on a per-tick basis to match 60fps. */ /* Technique by Erik Moller. MIT license: https://gist.github.com/paulirish/1579671 */timeDelta = Math.max(0,16 - (timeCurrent - timeLast));timeLast = timeCurrent + timeDelta;return setTimeout(function(){callback(timeCurrent + timeDelta);},timeDelta);};})(); /* Array compacting. Copyright Lo-Dash. MIT License: https://github.com/lodash/lodash/blob/master/LICENSE.txt */function compactSparseArray(array){var index=-1,length=array?array.length:0,result=[];while(++index < length) {var value=array[index];if(value){result.push(value);}}return result;}function sanitizeElements(elements){ /* Unwrap jQuery/Zepto objects. */if(Type.isWrapped(elements)){elements = [].slice.call(elements); /* Wrap a single element in an array so that $.each() can iterate with the element instead of its node's children. */}else if(Type.isNode(elements)){elements = [elements];}return elements;}var Type={isString:function isString(variable){return typeof variable === "string";},isArray:Array.isArray || function(variable){return Object.prototype.toString.call(variable) === "[object Array]";},isFunction:function isFunction(variable){return Object.prototype.toString.call(variable) === "[object Function]";},isNode:function isNode(variable){return variable && variable.nodeType;}, /* Copyright Martin Bohm. MIT License: https://gist.github.com/Tomalak/818a78a226a0738eaade */isNodeList:function isNodeList(variable){return typeof variable === "object" && /^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(variable)) && variable.length !== undefined && (variable.length === 0 || typeof variable[0] === "object" && variable[0].nodeType > 0);}, /* Determine if variable is a wrapped jQuery or Zepto element. */isWrapped:function isWrapped(variable){return variable && (variable.jquery || window.Zepto && window.Zepto.zepto.isZ(variable));},isSVG:function isSVG(variable){return window.SVGElement && variable instanceof window.SVGElement;},isEmptyObject:function isEmptyObject(variable){for(var name in variable) {return false;}return true;}}; /*****************
	       Dependencies
	    *****************/var $,isJQuery=false;if(global.fn && global.fn.jquery){$ = global;isJQuery = true;}else {$ = window.Velocity.Utilities;}if(IE <= 8 && !isJQuery){throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");}else if(IE <= 7){ /* Revert to jQuery's $.animate(), and lose Velocity's extra features. */jQuery.fn.velocity = jQuery.fn.animate; /* Now that $.fn.velocity is aliased, abort this Velocity declaration. */return;} /*****************
	        Constants
	    *****************/var DURATION_DEFAULT=400,EASING_DEFAULT="swing"; /*************
	        State
	    *************/var Velocity={ /* Container for page-wide Velocity state data. */State:{ /* Detect mobile devices to determine if mobileHA should be turned on. */isMobile:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent), /* The mobileHA option's behavior changes on older Android devices (Gingerbread, versions 2.3.3-2.3.7). */isAndroid:/Android/i.test(navigator.userAgent),isGingerbread:/Android 2\.3\.[3-7]/i.test(navigator.userAgent),isChrome:window.chrome,isFirefox:/Firefox/i.test(navigator.userAgent), /* Create a cached element for re-use when checking for CSS property prefixes. */prefixElement:document.createElement("div"), /* Cache every prefix match to avoid repeating lookups. */prefixMatches:{}, /* Cache the anchor used for animating window scrolling. */scrollAnchor:null, /* Cache the browser-specific property names associated with the scroll anchor. */scrollPropertyLeft:null,scrollPropertyTop:null, /* Keep track of whether our RAF tick is running. */isTicking:false, /* Container for every in-progress call to Velocity. */calls:[]}, /* Velocity's custom CSS stack. Made global for unit testing. */CSS:{ /* Defined below. */}, /* A shim of the jQuery utility functions used by Velocity -- provided by Velocity's optional jQuery shim. */Utilities:$, /* Container for the user's custom animation redirects that are referenced by name in place of the properties map argument. */Redirects:{ /* Manually registered by the user. */},Easings:{ /* Defined below. */}, /* Attempt to use ES6 Promises by default. Users can override this with a third-party promises library. */Promise:window.Promise, /* Velocity option defaults, which can be overriden by the user. */defaults:{queue:"",duration:DURATION_DEFAULT,easing:EASING_DEFAULT,begin:undefined,complete:undefined,progress:undefined,display:undefined,visibility:undefined,loop:false,delay:false,mobileHA:true, /* Advanced: Set to false to prevent property values from being cached between consecutive Velocity-initiated chain calls. */_cacheValues:true}, /* A design goal of Velocity is to cache data wherever possible in order to avoid DOM requerying. Accordingly, each element has a data cache. */init:function init(element){$.data(element,"velocity",{ /* Store whether this is an SVG element, since its properties are retrieved and updated differently than standard HTML elements. */isSVG:Type.isSVG(element), /* Keep track of whether the element is currently being animated by Velocity.
	                   This is used to ensure that property values are not transferred between non-consecutive (stale) calls. */isAnimating:false, /* A reference to the element's live computedStyle object. Learn more here: https://developer.mozilla.org/en/docs/Web/API/window.getComputedStyle */computedStyle:null, /* Tween data is cached for each animation on the element so that data can be passed across calls --
	                   in particular, end values are used as subsequent start values in consecutive Velocity calls. */tweensContainer:null, /* The full Parts property values of each CSS hook being animated on this element are cached so that:
	                   1) Concurrently-animating hooks sharing the same Parts can have their Parts values' merged into one while tweening.
	                   2) Post-hook-injection Parts values can be transferred over to consecutively chained Velocity calls as starting Parts values. */PartsPropertyValueCache:{}, /* A cache for transform updates, which must be manually flushed via CSS.flushTransformCache(). */transformCache:{}});}, /* A parallel to jQuery's $.css(), used for getting/setting Velocity's hooked CSS properties. */hook:null, /* Defined below. */ /* Velocity-wide animation time remapping for testing purposes. */mock:false,version:{major:1,minor:2,patch:2}, /* Set to 1 or 2 (most verbose) to output debug info to console. */debug:false}; /* Retrieve the appropriate scroll anchor and property name for the browser: https://developer.mozilla.org/en-US/docs/Web/API/Window.scrollY */if(window.pageYOffset !== undefined){Velocity.State.scrollAnchor = window;Velocity.State.scrollPropertyLeft = "pageXOffset";Velocity.State.scrollPropertyTop = "pageYOffset";}else {Velocity.State.scrollAnchor = document.documentElement || document.body.parentNode || document.body;Velocity.State.scrollPropertyLeft = "scrollLeft";Velocity.State.scrollPropertyTop = "scrollTop";} /* Shorthand alias for jQuery's $.data() utility. */function Data(element){ /* Hardcode a reference to the plugin name. */var response=$.data(element,"velocity"); /* jQuery <=1.4.2 returns null instead of undefined when no match is found. We normalize this behavior. */return response === null?undefined:response;}; /**************
	        Easing
	    **************/ /* Step easing generator. */function generateStep(steps){return function(p){return Math.round(p * steps) * (1 / steps);};} /* Bezier curve function generator. Copyright Gaetan Renaudeau. MIT License: http://en.wikipedia.org/wiki/MIT_License */function generateBezier(mX1,mY1,mX2,mY2){var NEWTON_ITERATIONS=4,NEWTON_MIN_SLOPE=0.001,SUBDIVISION_PRECISION=0.0000001,SUBDIVISION_MAX_ITERATIONS=10,kSplineTableSize=11,kSampleStepSize=1.0 / (kSplineTableSize - 1.0),float32ArraySupported=("Float32Array" in window); /* Must contain four arguments. */if(arguments.length !== 4){return false;} /* Arguments must be numbers. */for(var i=0;i < 4;++i) {if(typeof arguments[i] !== "number" || isNaN(arguments[i]) || !isFinite(arguments[i])){return false;}} /* X values must be in the [0, 1] range. */mX1 = Math.min(mX1,1);mX2 = Math.min(mX2,1);mX1 = Math.max(mX1,0);mX2 = Math.max(mX2,0);var mSampleValues=float32ArraySupported?new Float32Array(kSplineTableSize):new Array(kSplineTableSize);function A(aA1,aA2){return 1.0 - 3.0 * aA2 + 3.0 * aA1;}function B(aA1,aA2){return 3.0 * aA2 - 6.0 * aA1;}function C(aA1){return 3.0 * aA1;}function calcBezier(aT,aA1,aA2){return ((A(aA1,aA2) * aT + B(aA1,aA2)) * aT + C(aA1)) * aT;}function getSlope(aT,aA1,aA2){return 3.0 * A(aA1,aA2) * aT * aT + 2.0 * B(aA1,aA2) * aT + C(aA1);}function newtonRaphsonIterate(aX,aGuessT){for(var i=0;i < NEWTON_ITERATIONS;++i) {var currentSlope=getSlope(aGuessT,mX1,mX2);if(currentSlope === 0.0)return aGuessT;var currentX=calcBezier(aGuessT,mX1,mX2) - aX;aGuessT -= currentX / currentSlope;}return aGuessT;}function calcSampleValues(){for(var i=0;i < kSplineTableSize;++i) {mSampleValues[i] = calcBezier(i * kSampleStepSize,mX1,mX2);}}function binarySubdivide(aX,aA,aB){var currentX,currentT,i=0;do {currentT = aA + (aB - aA) / 2.0;currentX = calcBezier(currentT,mX1,mX2) - aX;if(currentX > 0.0){aB = currentT;}else {aA = currentT;}}while(Math.abs(currentX) > SUBDIVISION_PRECISION && ++i < SUBDIVISION_MAX_ITERATIONS);return currentT;}function getTForX(aX){var intervalStart=0.0,currentSample=1,lastSample=kSplineTableSize - 1;for(;currentSample != lastSample && mSampleValues[currentSample] <= aX;++currentSample) {intervalStart += kSampleStepSize;}--currentSample;var dist=(aX - mSampleValues[currentSample]) / (mSampleValues[currentSample + 1] - mSampleValues[currentSample]),guessForT=intervalStart + dist * kSampleStepSize,initialSlope=getSlope(guessForT,mX1,mX2);if(initialSlope >= NEWTON_MIN_SLOPE){return newtonRaphsonIterate(aX,guessForT);}else if(initialSlope == 0.0){return guessForT;}else {return binarySubdivide(aX,intervalStart,intervalStart + kSampleStepSize);}}var _precomputed=false;function precompute(){_precomputed = true;if(mX1 != mY1 || mX2 != mY2)calcSampleValues();}var f=function f(aX){if(!_precomputed)precompute();if(mX1 === mY1 && mX2 === mY2)return aX;if(aX === 0)return 0;if(aX === 1)return 1;return calcBezier(getTForX(aX),mY1,mY2);};f.getControlPoints = function(){return [{x:mX1,y:mY1},{x:mX2,y:mY2}];};var str="generateBezier(" + [mX1,mY1,mX2,mY2] + ")";f.toString = function(){return str;};return f;} /* Runge-Kutta spring physics function generator. Adapted from Framer.js, copyright Koen Bok. MIT License: http://en.wikipedia.org/wiki/MIT_License */ /* Given a tension, friction, and duration, a simulation at 60FPS will first run without a defined duration in order to calculate the full path. A second pass
	       then adjusts the time delta -- using the relation between actual time and duration -- to calculate the path for the duration-constrained animation. */var generateSpringRK4=(function(){function springAccelerationForState(state){return -state.tension * state.x - state.friction * state.v;}function springEvaluateStateWithDerivative(initialState,dt,derivative){var state={x:initialState.x + derivative.dx * dt,v:initialState.v + derivative.dv * dt,tension:initialState.tension,friction:initialState.friction};return {dx:state.v,dv:springAccelerationForState(state)};}function springIntegrateState(state,dt){var a={dx:state.v,dv:springAccelerationForState(state)},b=springEvaluateStateWithDerivative(state,dt * 0.5,a),c=springEvaluateStateWithDerivative(state,dt * 0.5,b),d=springEvaluateStateWithDerivative(state,dt,c),dxdt=1.0 / 6.0 * (a.dx + 2.0 * (b.dx + c.dx) + d.dx),dvdt=1.0 / 6.0 * (a.dv + 2.0 * (b.dv + c.dv) + d.dv);state.x = state.x + dxdt * dt;state.v = state.v + dvdt * dt;return state;}return function springRK4Factory(tension,friction,duration){var initState={x:-1,v:0,tension:null,friction:null},path=[0],time_lapsed=0,tolerance=1 / 10000,DT=16 / 1000,have_duration,dt,last_state;tension = parseFloat(tension) || 500;friction = parseFloat(friction) || 20;duration = duration || null;initState.tension = tension;initState.friction = friction;have_duration = duration !== null; /* Calculate the actual time it takes for this animation to complete with the provided conditions. */if(have_duration){ /* Run the simulation without a duration. */time_lapsed = springRK4Factory(tension,friction); /* Compute the adjusted time delta. */dt = time_lapsed / duration * DT;}else {dt = DT;}while(true) { /* Next/step function .*/last_state = springIntegrateState(last_state || initState,dt); /* Store the position. */path.push(1 + last_state.x);time_lapsed += 16; /* If the change threshold is reached, break. */if(!(Math.abs(last_state.x) > tolerance && Math.abs(last_state.v) > tolerance)){break;}} /* If duration is not defined, return the actual time required for completing this animation. Otherwise, return a closure that holds the
	               computed path and returns a snapshot of the position according to a given percentComplete. */return !have_duration?time_lapsed:function(percentComplete){return path[percentComplete * (path.length - 1) | 0];};};})(); /* jQuery easings. */Velocity.Easings = {linear:function linear(p){return p;},swing:function swing(p){return 0.5 - Math.cos(p * Math.PI) / 2;}, /* Bonus "spring" easing, which is a less exaggerated version of easeInOutElastic. */spring:function spring(p){return 1 - Math.cos(p * 4.5 * Math.PI) * Math.exp(-p * 6);}}; /* CSS3 and Robert Penner easings. */$.each([["ease",[0.25,0.1,0.25,1.0]],["ease-in",[0.42,0.0,1.00,1.0]],["ease-out",[0.00,0.0,0.58,1.0]],["ease-in-out",[0.42,0.0,0.58,1.0]],["easeInSine",[0.47,0,0.745,0.715]],["easeOutSine",[0.39,0.575,0.565,1]],["easeInOutSine",[0.445,0.05,0.55,0.95]],["easeInQuad",[0.55,0.085,0.68,0.53]],["easeOutQuad",[0.25,0.46,0.45,0.94]],["easeInOutQuad",[0.455,0.03,0.515,0.955]],["easeInCubic",[0.55,0.055,0.675,0.19]],["easeOutCubic",[0.215,0.61,0.355,1]],["easeInOutCubic",[0.645,0.045,0.355,1]],["easeInQuart",[0.895,0.03,0.685,0.22]],["easeOutQuart",[0.165,0.84,0.44,1]],["easeInOutQuart",[0.77,0,0.175,1]],["easeInQuint",[0.755,0.05,0.855,0.06]],["easeOutQuint",[0.23,1,0.32,1]],["easeInOutQuint",[0.86,0,0.07,1]],["easeInExpo",[0.95,0.05,0.795,0.035]],["easeOutExpo",[0.19,1,0.22,1]],["easeInOutExpo",[1,0,0,1]],["easeInCirc",[0.6,0.04,0.98,0.335]],["easeOutCirc",[0.075,0.82,0.165,1]],["easeInOutCirc",[0.785,0.135,0.15,0.86]]],function(i,easingArray){Velocity.Easings[easingArray[0]] = generateBezier.apply(null,easingArray[1]);}); /* Determine the appropriate easing type given an easing input. */function getEasing(value,duration){var easing=value; /* The easing option can either be a string that references a pre-registered easing,
	           or it can be a two-/four-item array of integers to be converted into a bezier/spring function. */if(Type.isString(value)){ /* Ensure that the easing has been assigned to jQuery's Velocity.Easings object. */if(!Velocity.Easings[value]){easing = false;}}else if(Type.isArray(value) && value.length === 1){easing = generateStep.apply(null,value);}else if(Type.isArray(value) && value.length === 2){ /* springRK4 must be passed the animation's duration. */ /* Note: If the springRK4 array contains non-numbers, generateSpringRK4() returns an easing
	               function generated with default tension and friction values. */easing = generateSpringRK4.apply(null,value.concat([duration]));}else if(Type.isArray(value) && value.length === 4){ /* Note: If the bezier array contains non-numbers, generateBezier() returns false. */easing = generateBezier.apply(null,value);}else {easing = false;} /* Revert to the Velocity-wide default easing type, or fall back to "swing" (which is also jQuery's default)
	           if the Velocity-wide default has been incorrectly modified. */if(easing === false){if(Velocity.Easings[Velocity.defaults.easing]){easing = Velocity.defaults.easing;}else {easing = EASING_DEFAULT;}}return easing;} /*****************
	        CSS Stack
	    *****************/ /* The CSS object is a highly condensed and performant CSS stack that fully replaces jQuery's.
	       It handles the validation, getting, and setting of both standard CSS properties and CSS property hooks. */ /* Note: A "CSS" shorthand is aliased so that our code is easier to read. */var CSS=Velocity.CSS = { /*************
	            RegEx
	        *************/RegEx:{isHex:/^#([A-f\d]{3}){1,2}$/i, /* Unwrap a property value's surrounding text, e.g. "rgba(4, 3, 2, 1)" ==> "4, 3, 2, 1" and "rect(4px 3px 2px 1px)" ==> "4px 3px 2px 1px". */valueUnwrap:/^[A-z]+\((.*)\)$/i,wrappedValueAlreadyExtracted:/[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/, /* Split a multi-value property into an array of subvalues, e.g. "rgba(4, 3, 2, 1) 4px 3px 2px 1px" ==> [ "rgba(4, 3, 2, 1)", "4px", "3px", "2px", "1px" ]. */valueSplit:/([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/ig}, /************
	            Lists
	        ************/Lists:{colors:["fill","stroke","stopColor","color","backgroundColor","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor","outlineColor"],transformsBase:["translateX","translateY","scale","scaleX","scaleY","skewX","skewY","rotateZ"],transforms3D:["transformPerspective","translateZ","scaleZ","rotateX","rotateY"]}, /************
	            Hooks
	        ************/ /* Hooks allow a subproperty (e.g. "boxShadowBlur") of a compound-value CSS property
	           (e.g. "boxShadow: X Y Blur Spread Color") to be animated as if it were a discrete property. */ /* Note: Beyond enabling fine-grained property animation, hooking is necessary since Velocity only
	           tweens properties with single numeric values; unlike CSS transitions, Velocity does not interpolate compound-values. */Hooks:{ /********************
	                Registration
	            ********************/ /* Templates are a concise way of indicating which subproperties must be individually registered for each compound-value CSS property. */ /* Each template consists of the compound-value's base name, its constituent subproperty names, and those subproperties' default values. */templates:{"textShadow":["Color X Y Blur","black 0px 0px 0px"],"boxShadow":["Color X Y Blur Spread","black 0px 0px 0px 0px"],"clip":["Top Right Bottom Left","0px 0px 0px 0px"],"backgroundPosition":["X Y","0% 0%"],"transformOrigin":["X Y Z","50% 50% 0px"],"perspectiveOrigin":["X Y","50% 50%"]}, /* A "registered" hook is one that has been converted from its template form into a live,
	               tweenable property. It contains data to associate it with its Parts property. */registered:{ /* Note: A registered hook looks like this ==> textShadowBlur: [ "textShadow", 3 ],
	                   which consists of the subproperty's name, the associated Parts property's name,
	                   and the subproperty's position in the Parts's value. */}, /* Convert the templates into individual hooks then append them to the registered object above. */register:function register(){ /* Color hooks registration: Colors are defaulted to white -- as opposed to black -- since colors that are
	                   currently set to "transparent" default to their respective template below when color-animated,
	                   and white is typically a closer match to transparent than black is. An exception is made for text ("color"),
	                   which is almost always set closer to black than white. */for(var i=0;i < CSS.Lists.colors.length;i++) {var rgbComponents=CSS.Lists.colors[i] === "color"?"0 0 0 1":"255 255 255 1";CSS.Hooks.templates[CSS.Lists.colors[i]] = ["Red Green Blue Alpha",rgbComponents];}var PartsProperty,hookTemplate,hookNames; /* In IE, color values inside compound-value properties are positioned at the end the value instead of at the beginning.
	                   Thus, we re-arrange the templates accordingly. */if(IE){for(PartsProperty in CSS.Hooks.templates) {hookTemplate = CSS.Hooks.templates[PartsProperty];hookNames = hookTemplate[0].split(" ");var defaultValues=hookTemplate[1].match(CSS.RegEx.valueSplit);if(hookNames[0] === "Color"){ /* Reposition both the hook's name and its default value to the end of their respective strings. */hookNames.push(hookNames.shift());defaultValues.push(defaultValues.shift()); /* Replace the existing template for the hook's Parts property. */CSS.Hooks.templates[PartsProperty] = [hookNames.join(" "),defaultValues.join(" ")];}}} /* Hook registration. */for(PartsProperty in CSS.Hooks.templates) {hookTemplate = CSS.Hooks.templates[PartsProperty];hookNames = hookTemplate[0].split(" ");for(var i in hookNames) {var fullHookName=PartsProperty + hookNames[i],hookPosition=i; /* For each hook, register its full name (e.g. textShadowBlur) with its Parts property (e.g. textShadow)
	                           and the hook's position in its template's default value string. */CSS.Hooks.registered[fullHookName] = [PartsProperty,hookPosition];}}}, /*****************************
	               Injection and Extraction
	            *****************************/ /* Look up the Parts property associated with the hook (e.g. return "textShadow" for "textShadowBlur"). */ /* Since a hook cannot be set directly (the browser won't recognize it), style updating for hooks is routed through the hook's Parts property. */getParts:function getParts(property){var hookData=CSS.Hooks.registered[property];if(hookData){return hookData[0];}else { /* If there was no hook match, return the property name untouched. */return property;}}, /* Convert any PartsPropertyValue, null or otherwise, into a space-delimited list of hook values so that
	               the targeted hook can be injected or extracted at its standard position. */cleanPartsPropertyValue:function cleanPartsPropertyValue(PartsProperty,PartsPropertyValue){ /* If the PartsPropertyValue is wrapped with "rgb()", "clip()", etc., remove the wrapping to normalize the value before manipulation. */if(CSS.RegEx.valueUnwrap.test(PartsPropertyValue)){PartsPropertyValue = PartsPropertyValue.match(CSS.RegEx.valueUnwrap)[1];} /* If PartsPropertyValue is a CSS null-value (from which there's inherently no hook value to extract),
	                   default to the Parts's default value as defined in CSS.Hooks.templates. */ /* Note: CSS null-values include "none", "auto", and "transparent". They must be converted into their
	                   zero-values (e.g. textShadow: "none" ==> textShadow: "0px 0px 0px black") for hook manipulation to proceed. */if(CSS.Values.isCSSNullValue(PartsPropertyValue)){PartsPropertyValue = CSS.Hooks.templates[PartsProperty][1];}return PartsPropertyValue;}, /* Extracted the hook's value from its Parts property's value. This is used to get the starting value of an animating hook. */extractValue:function extractValue(fullHookName,PartsPropertyValue){var hookData=CSS.Hooks.registered[fullHookName];if(hookData){var hookParts=hookData[0],hookPosition=hookData[1];PartsPropertyValue = CSS.Hooks.cleanPartsPropertyValue(hookParts,PartsPropertyValue); /* Split PartsPropertyValue into its constituent hook values then grab the desired hook at its standard position. */return PartsPropertyValue.toString().match(CSS.RegEx.valueSplit)[hookPosition];}else { /* If the provided fullHookName isn't a registered hook, return the PartsPropertyValue that was passed in. */return PartsPropertyValue;}}, /* Inject the hook's value into its Parts property's value. This is used to piece back together the Parts property
	               once Velocity has updated one of its individually hooked values through tweening. */injectValue:function injectValue(fullHookName,hookValue,PartsPropertyValue){var hookData=CSS.Hooks.registered[fullHookName];if(hookData){var hookParts=hookData[0],hookPosition=hookData[1],PartsPropertyValueParts,PartsPropertyValueUpdated;PartsPropertyValue = CSS.Hooks.cleanPartsPropertyValue(hookParts,PartsPropertyValue); /* Split PartsPropertyValue into its individual hook values, replace the targeted value with hookValue,
	                       then reconstruct the PartsPropertyValue string. */PartsPropertyValueParts = PartsPropertyValue.toString().match(CSS.RegEx.valueSplit);PartsPropertyValueParts[hookPosition] = hookValue;PartsPropertyValueUpdated = PartsPropertyValueParts.join(" ");return PartsPropertyValueUpdated;}else { /* If the provided fullHookName isn't a registered hook, return the PartsPropertyValue that was passed in. */return PartsPropertyValue;}}}, /*******************
	           Normalizations
	        *******************/ /* Normalizations standardize CSS property manipulation by pollyfilling browser-specific implementations (e.g. opacity)
	           and reformatting special properties (e.g. clip, rgba) to look like standard ones. */Normalizations:{ /* Normalizations are passed a normalization target (either the property's name, its extracted value, or its injected value),
	               the targeted element (which may need to be queried), and the targeted property value. */registered:{clip:function clip(type,element,propertyValue){switch(type){case "name":return "clip"; /* Clip needs to be unwrapped and stripped of its commas during extraction. */case "extract":var extracted; /* If Velocity also extracted this value, skip extraction. */if(CSS.RegEx.wrappedValueAlreadyExtracted.test(propertyValue)){extracted = propertyValue;}else { /* Remove the "rect()" wrapper. */extracted = propertyValue.toString().match(CSS.RegEx.valueUnwrap); /* Strip off commas. */extracted = extracted?extracted[1].replace(/,(\s+)?/g," "):propertyValue;}return extracted; /* Clip needs to be re-wrapped during injection. */case "inject":return "rect(" + propertyValue + ")";}},blur:function blur(type,element,propertyValue){switch(type){case "name":return Velocity.State.isFirefox?"filter":"-webkit-filter";case "extract":var extracted=parseFloat(propertyValue); /* If extracted is NaN, meaning the value isn't already extracted. */if(!(extracted || extracted === 0)){var blurComponent=propertyValue.toString().match(/blur\(([0-9]+[A-z]+)\)/i); /* If the filter string had a blur component, return just the blur value and unit type. */if(blurComponent){extracted = blurComponent[1]; /* If the component doesn't exist, default blur to 0. */}else {extracted = 0;}}return extracted; /* Blur needs to be re-wrapped during injection. */case "inject": /* For the blur effect to be fully de-applied, it needs to be set to "none" instead of 0. */if(!parseFloat(propertyValue)){return "none";}else {return "blur(" + propertyValue + ")";}}}, /* <=IE8 do not support the standard opacity property. They use filter:alpha(opacity=INT) instead. */opacity:function opacity(type,element,propertyValue){if(IE <= 8){switch(type){case "name":return "filter";case "extract": /* <=IE8 return a "filter" value of "alpha(opacity=\d{1,3})".
	                                   Extract the value and convert it to a decimal value to match the standard CSS opacity property's formatting. */var extracted=propertyValue.toString().match(/alpha\(opacity=(.*)\)/i);if(extracted){ /* Convert to decimal value. */propertyValue = extracted[1] / 100;}else { /* When extracting opacity, default to 1 since a null value means opacity hasn't been set. */propertyValue = 1;}return propertyValue;case "inject": /* Opacified elements are required to have their zoom property set to a non-zero value. */element.style.zoom = 1; /* Setting the filter property on elements with certain font property combinations can result in a
	                                   highly unappealing ultra-bolding effect. There's no way to remedy this throughout a tween, but dropping the
	                                   value altogether (when opacity hits 1) at leasts ensures that the glitch is gone post-tweening. */if(parseFloat(propertyValue) >= 1){return "";}else { /* As per the filter property's spec, convert the decimal value to a whole number and wrap the value. */return "alpha(opacity=" + parseInt(parseFloat(propertyValue) * 100,10) + ")";}} /* With all other browsers, normalization is not required; return the same values that were passed in. */}else {switch(type){case "name":return "opacity";case "extract":return propertyValue;case "inject":return propertyValue;}}}}, /*****************************
	                Batched Registrations
	            *****************************/ /* Note: Batched normalizations extend the CSS.Normalizations.registered object. */register:function register(){ /*****************
	                    Transforms
	                *****************/ /* Transforms are the subproperties contained by the CSS "transform" property. Transforms must undergo normalization
	                   so that they can be referenced in a properties map by their individual names. */ /* Note: When transforms are "set", they are actually assigned to a per-element transformCache. When all transform
	                   setting is complete complete, CSS.flushTransformCache() must be manually called to flush the values to the DOM.
	                   Transform setting is batched in this way to improve performance: the transform style only needs to be updated
	                   once when multiple transform subproperties are being animated simultaneously. */ /* Note: IE9 and Android Gingerbread have support for 2D -- but not 3D -- transforms. Since animating unsupported
	                   transform properties results in the browser ignoring the *entire* transform string, we prevent these 3D values
	                   from being normalized for these browsers so that tweening skips these properties altogether
	                   (since it will ignore them as being unsupported by the browser.) */if(!(IE <= 9) && !Velocity.State.isGingerbread){ /* Note: Since the standalone CSS "perspective" property and the CSS transform "perspective" subproperty
	                    share the same name, the latter is given a unique token within Velocity: "transformPerspective". */CSS.Lists.transformsBase = CSS.Lists.transformsBase.concat(CSS.Lists.transforms3D);}for(var i=0;i < CSS.Lists.transformsBase.length;i++) { /* Wrap the dynamically generated normalization function in a new scope so that transformName's value is
	                    paired with its respective function. (Otherwise, all functions would take the final for loop's transformName.) */(function(){var transformName=CSS.Lists.transformsBase[i];CSS.Normalizations.registered[transformName] = function(type,element,propertyValue){switch(type){ /* The normalized property name is the parent "transform" property -- the property that is actually set in CSS. */case "name":return "transform"; /* Transform values are cached onto a per-element transformCache object. */case "extract": /* If this transform has yet to be assigned a value, return its null value. */if(Data(element) === undefined || Data(element).transformCache[transformName] === undefined){ /* Scale CSS.Lists.transformsBase default to 1 whereas all other transform properties default to 0. */return (/^scale/i.test(transformName)?1:0); /* When transform values are set, they are wrapped in parentheses as per the CSS spec.
	                                       Thus, when extracting their values (for tween calculations), we strip off the parentheses. */}else {return Data(element).transformCache[transformName].replace(/[()]/g,"");}case "inject":var invalid=false; /* If an individual transform property contains an unsupported unit type, the browser ignores the *entire* transform property.
	                                       Thus, protect users from themselves by skipping setting for transform values supplied with invalid unit types. */ /* Switch on the base transform type; ignore the axis by removing the last letter from the transform's name. */switch(transformName.substr(0,transformName.length - 1)){ /* Whitelist unit types for each transform. */case "translate":invalid = !/(%|px|em|rem|vw|vh|\d)$/i.test(propertyValue);break; /* Since an axis-free "scale" property is supported as well, a little hack is used here to detect it by chopping off its last letter. */case "scal":case "scale": /* Chrome on Android has a bug in which scaled elements blur if their initial scale
	                                               value is below 1 (which can happen with forcefeeding). Thus, we detect a yet-unset scale property
	                                               and ensure that its first value is always 1. More info: http://stackoverflow.com/questions/10417890/css3-animations-with-transform-causes-blurred-elements-on-webkit/10417962#10417962 */if(Velocity.State.isAndroid && Data(element).transformCache[transformName] === undefined && propertyValue < 1){propertyValue = 1;}invalid = !/(\d)$/i.test(propertyValue);break;case "skew":invalid = !/(deg|\d)$/i.test(propertyValue);break;case "rotate":invalid = !/(deg|\d)$/i.test(propertyValue);break;}if(!invalid){ /* As per the CSS spec, wrap the value in parentheses. */Data(element).transformCache[transformName] = "(" + propertyValue + ")";} /* Although the value is set on the transformCache object, return the newly-updated value for the calling code to process as normal. */return Data(element).transformCache[transformName];}};})();} /*************
	                    Colors
	                *************/ /* Since Velocity only animates a single numeric value per property, color animation is achieved by hooking the individual RGBA components of CSS color properties.
	                   Accordingly, color values must be normalized (e.g. "#ff0000", "red", and "rgb(255, 0, 0)" ==> "255 0 0 1") so that their components can be injected/extracted by CSS.Hooks logic. */for(var i=0;i < CSS.Lists.colors.length;i++) { /* Wrap the dynamically generated normalization function in a new scope so that colorName's value is paired with its respective function.
	                       (Otherwise, all functions would take the final for loop's colorName.) */(function(){var colorName=CSS.Lists.colors[i]; /* Note: In IE<=8, which support rgb but not rgba, color properties are reverted to rgb by stripping off the alpha component. */CSS.Normalizations.registered[colorName] = function(type,element,propertyValue){switch(type){case "name":return colorName; /* Convert all color values into the rgb format. (Old IE can return hex values and color names instead of rgb/rgba.) */case "extract":var extracted; /* If the color is already in its hookable form (e.g. "255 255 255 1") due to having been previously extracted, skip extraction. */if(CSS.RegEx.wrappedValueAlreadyExtracted.test(propertyValue)){extracted = propertyValue;}else {var converted,colorNames={black:"rgb(0, 0, 0)",blue:"rgb(0, 0, 255)",gray:"rgb(128, 128, 128)",green:"rgb(0, 128, 0)",red:"rgb(255, 0, 0)",white:"rgb(255, 255, 255)"}; /* Convert color names to rgb. */if(/^[A-z]+$/i.test(propertyValue)){if(colorNames[propertyValue] !== undefined){converted = colorNames[propertyValue];}else { /* If an unmatched color name is provided, default to black. */converted = colorNames.black;} /* Convert hex values to rgb. */}else if(CSS.RegEx.isHex.test(propertyValue)){converted = "rgb(" + CSS.Values.hexToRgb(propertyValue).join(" ") + ")"; /* If the provided color doesn't match any of the accepted color formats, default to black. */}else if(!/^rgba?\(/i.test(propertyValue)){converted = colorNames.black;} /* Remove the surrounding "rgb/rgba()" string then replace commas with spaces and strip
	                                           repeated spaces (in case the value included spaces to begin with). */extracted = (converted || propertyValue).toString().match(CSS.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g," ");} /* So long as this isn't <=IE8, add a fourth (alpha) component if it's missing and default it to 1 (visible). */if(!(IE <= 8) && extracted.split(" ").length === 3){extracted += " 1";}return extracted;case "inject": /* If this is IE<=8 and an alpha component exists, strip it off. */if(IE <= 8){if(propertyValue.split(" ").length === 4){propertyValue = propertyValue.split(/\s+/).slice(0,3).join(" ");} /* Otherwise, add a fourth (alpha) component if it's missing and default it to 1 (visible). */}else if(propertyValue.split(" ").length === 3){propertyValue += " 1";} /* Re-insert the browser-appropriate wrapper("rgb/rgba()"), insert commas, and strip off decimal units
	                                       on all values but the fourth (R, G, and B only accept whole numbers). */return (IE <= 8?"rgb":"rgba") + "(" + propertyValue.replace(/\s+/g,",").replace(/\.(\d)+(?=,)/g,"") + ")";}};})();}}}, /************************
	           CSS Property Names
	        ************************/Names:{ /* Camelcase a property name into its JavaScript notation (e.g. "background-color" ==> "backgroundColor").
	               Camelcasing is used to normalize property names between and across calls. */camelCase:function camelCase(property){return property.replace(/-(\w)/g,function(match,subMatch){return subMatch.toUpperCase();});}, /* For SVG elements, some properties (namely, dimensional ones) are GET/SET via the element's HTML attributes (instead of via CSS styles). */SVGAttribute:function SVGAttribute(property){var SVGAttributes="width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2"; /* Certain browsers require an SVG transform to be applied as an attribute. (Otherwise, application via CSS is preferable due to 3D support.) */if(IE || Velocity.State.isAndroid && !Velocity.State.isChrome){SVGAttributes += "|transform";}return new RegExp("^(" + SVGAttributes + ")$","i").test(property);}, /* Determine whether a property should be set with a vendor prefix. */ /* If a prefixed version of the property exists, return it. Otherwise, return the original property name.
	               If the property is not at all supported by the browser, return a false flag. */prefixCheck:function prefixCheck(property){ /* If this property has already been checked, return the cached value. */if(Velocity.State.prefixMatches[property]){return [Velocity.State.prefixMatches[property],true];}else {var vendors=["","Webkit","Moz","ms","O"];for(var i=0,vendorsLength=vendors.length;i < vendorsLength;i++) {var propertyPrefixed;if(i === 0){propertyPrefixed = property;}else { /* Capitalize the first letter of the property to conform to JavaScript vendor prefix notation (e.g. webkitFilter). */propertyPrefixed = vendors[i] + property.replace(/^\w/,function(match){return match.toUpperCase();});} /* Check if the browser supports this property as prefixed. */if(Type.isString(Velocity.State.prefixElement.style[propertyPrefixed])){ /* Cache the match. */Velocity.State.prefixMatches[property] = propertyPrefixed;return [propertyPrefixed,true];}} /* If the browser doesn't support this property in any form, include a false flag so that the caller can decide how to proceed. */return [property,false];}}}, /************************
	           CSS Property Values
	        ************************/Values:{ /* Hex to RGB conversion. Copyright Tim Down: http://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb */hexToRgb:function hexToRgb(hex){var shortformRegex=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,longformRegex=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i,rgbParts;hex = hex.replace(shortformRegex,function(m,r,g,b){return r + r + g + g + b + b;});rgbParts = longformRegex.exec(hex);return rgbParts?[parseInt(rgbParts[1],16),parseInt(rgbParts[2],16),parseInt(rgbParts[3],16)]:[0,0,0];},isCSSNullValue:function isCSSNullValue(value){ /* The browser defaults CSS values that have not been set to either 0 or one of several possible null-value strings.
	                   Thus, we check for both falsiness and these special strings. */ /* Null-value checking is performed to default the special strings to 0 (for the sake of tweening) or their hook
	                   templates as defined as CSS.Hooks (for the sake of hook injection/extraction). */ /* Note: Chrome returns "rgba(0, 0, 0, 0)" for an undefined color whereas IE returns "transparent". */return value == 0 || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(value);}, /* Retrieve a property's default unit type. Used for assigning a unit type when one is not supplied by the user. */getUnitType:function getUnitType(property){if(/^(rotate|skew)/i.test(property)){return "deg";}else if(/(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(property)){ /* The above properties are unitless. */return "";}else { /* Default to px for all other properties. */return "px";}}, /* HTML elements default to an associated display type when they're not set to display:none. */ /* Note: This function is used for correctly setting the non-"none" display value in certain Velocity redirects, such as fadeIn/Out. */getDisplayType:function getDisplayType(element){var tagName=element && element.tagName.toString().toLowerCase();if(/^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(tagName)){return "inline";}else if(/^(li)$/i.test(tagName)){return "list-item";}else if(/^(tr)$/i.test(tagName)){return "table-row";}else if(/^(table)$/i.test(tagName)){return "table";}else if(/^(tbody)$/i.test(tagName)){return "table-row-group"; /* Default to "block" when no match is found. */}else {return "block";}}, /* The class add/remove functions are used to temporarily apply a "velocity-animating" class to elements while they're animating. */addClass:function addClass(element,className){if(element.classList){element.classList.add(className);}else {element.className += (element.className.length?" ":"") + className;}},removeClass:function removeClass(element,className){if(element.classList){element.classList.remove(className);}else {element.className = element.className.toString().replace(new RegExp("(^|\\s)" + className.split(" ").join("|") + "(\\s|$)","gi")," ");}}}, /****************************
	           Style Getting & Setting
	        ****************************/ /* The singular getPropertyValue, which routes the logic for all normalizations, hooks, and standard CSS properties. */getPropertyValue:function getPropertyValue(element,property,PartsPropertyValue,forceStyleLookup){ /* Get an element's computed property value. */ /* Note: Retrieving the value of a CSS property cannot simply be performed by checking an element's
	               style attribute (which only reflects user-defined values). Instead, the browser must be queried for a property's
	               *computed* value. You can read more about getComputedStyle here: https://developer.mozilla.org/en/docs/Web/API/window.getComputedStyle */function computePropertyValue(element,property){ /* When box-sizing isn't set to border-box, height and width style values are incorrectly computed when an
	                   element's scrollbars are visible (which expands the element's dimensions). Thus, we defer to the more accurate
	                   offsetHeight/Width property, which includes the total dimensions for interior, border, padding, and scrollbar.
	                   We subtract border and padding to get the sum of interior + scrollbar. */var computedValue=0; /* IE<=8 doesn't support window.getComputedStyle, thus we defer to jQuery, which has an extensive array
	                   of hacks to accurately retrieve IE8 property values. Re-implementing that logic here is not worth bloating the
	                   codebase for a dying browser. The performance repercussions of using jQuery here are minimal since
	                   Velocity is optimized to rarely (and sometimes never) query the DOM. Further, the $.css() codepath isn't that slow. */if(IE <= 8){computedValue = $.css(element,property); /* GET */ /* All other browsers support getComputedStyle. The returned live object reference is cached onto its
	                   associated element so that it does not need to be refetched upon every GET. */}else {var revertDisplay=function revertDisplay(){if(toggleDisplay){CSS.setPropertyValue(element,"display","none");}}; /* Browsers do not return height and width values for elements that are set to display:"none". Thus, we temporarily
	                       toggle display to the element type's default value. */var toggleDisplay=false;if(/^(width|height)$/.test(property) && CSS.getPropertyValue(element,"display") === 0){toggleDisplay = true;CSS.setPropertyValue(element,"display",CSS.Values.getDisplayType(element));}if(!forceStyleLookup){if(property === "height" && CSS.getPropertyValue(element,"boxSizing").toString().toLowerCase() !== "border-box"){var contentBoxHeight=element.offsetHeight - (parseFloat(CSS.getPropertyValue(element,"borderTopWidth")) || 0) - (parseFloat(CSS.getPropertyValue(element,"borderBottomWidth")) || 0) - (parseFloat(CSS.getPropertyValue(element,"paddingTop")) || 0) - (parseFloat(CSS.getPropertyValue(element,"paddingBottom")) || 0);revertDisplay();return contentBoxHeight;}else if(property === "width" && CSS.getPropertyValue(element,"boxSizing").toString().toLowerCase() !== "border-box"){var contentBoxWidth=element.offsetWidth - (parseFloat(CSS.getPropertyValue(element,"borderLeftWidth")) || 0) - (parseFloat(CSS.getPropertyValue(element,"borderRightWidth")) || 0) - (parseFloat(CSS.getPropertyValue(element,"paddingLeft")) || 0) - (parseFloat(CSS.getPropertyValue(element,"paddingRight")) || 0);revertDisplay();return contentBoxWidth;}}var computedStyle; /* For elements that Velocity hasn't been called on directly (e.g. when Velocity queries the DOM on behalf
	                       of a parent of an element its animating), perform a direct getComputedStyle lookup since the object isn't cached. */if(Data(element) === undefined){computedStyle = window.getComputedStyle(element,null); /* GET */ /* If the computedStyle object has yet to be cached, do so now. */}else if(!Data(element).computedStyle){computedStyle = Data(element).computedStyle = window.getComputedStyle(element,null); /* GET */ /* If computedStyle is cached, use it. */}else {computedStyle = Data(element).computedStyle;} /* IE and Firefox do not return a value for the generic borderColor -- they only return individual values for each border side's color.
	                       Also, in all browsers, when border colors aren't all the same, a compound value is returned that Velocity isn't setup to parse.
	                       So, as a polyfill for querying individual border side colors, we just return the top border's color and animate all borders from that value. */if(property === "borderColor"){property = "borderTopColor";} /* IE9 has a bug in which the "filter" property must be accessed from computedStyle using the getPropertyValue method
	                       instead of a direct property lookup. The getPropertyValue method is slower than a direct lookup, which is why we avoid it by default. */if(IE === 9 && property === "filter"){computedValue = computedStyle.getPropertyValue(property); /* GET */}else {computedValue = computedStyle[property];} /* Fall back to the property's style value (if defined) when computedValue returns nothing,
	                       which can happen when the element hasn't been painted. */if(computedValue === "" || computedValue === null){computedValue = element.style[property];}revertDisplay();} /* For top, right, bottom, and left (TRBL) values that are set to "auto" on elements of "fixed" or "absolute" position,
	                   defer to jQuery for converting "auto" to a numeric value. (For elements with a "static" or "relative" position, "auto" has the same
	                   effect as being set to 0, so no conversion is necessary.) */ /* An example of why numeric conversion is necessary: When an element with "position:absolute" has an untouched "left"
	                   property, which reverts to "auto", left's value is 0 relative to its parent element, but is often non-zero relative
	                   to its *containing* (not parent) element, which is the nearest "position:relative" ancestor or the viewport (and always the viewport in the case of "position:fixed"). */if(computedValue === "auto" && /^(top|right|bottom|left)$/i.test(property)){var position=computePropertyValue(element,"position"); /* GET */ /* For absolute positioning, jQuery's $.position() only returns values for top and left;
	                       right and bottom will have their "auto" value reverted to 0. */ /* Note: A jQuery object must be created here since jQuery doesn't have a low-level alias for $.position().
	                       Not a big deal since we're currently in a GET batch anyway. */if(position === "fixed" || position === "absolute" && /top|left/i.test(property)){ /* Note: jQuery strips the pixel unit from its returned values; we re-add it here to conform with computePropertyValue's behavior. */computedValue = $(element).position()[property] + "px"; /* GET */}}return computedValue;}var propertyValue; /* If this is a hooked property (e.g. "clipLeft" instead of the Parts property of "clip"),
	               extract the hook's value from a normalized PartsPropertyValue using CSS.Hooks.extractValue(). */if(CSS.Hooks.registered[property]){var hook=property,hookParts=CSS.Hooks.getParts(hook); /* If a cached PartsPropertyValue wasn't passed in (which Velocity always attempts to do in order to avoid requerying the DOM),
	                   query the DOM for the Parts property's value. */if(PartsPropertyValue === undefined){ /* Since the browser is now being directly queried, use the official post-prefixing property name for this lookup. */PartsPropertyValue = CSS.getPropertyValue(element,CSS.Names.prefixCheck(hookParts)[0]); /* GET */} /* If this Parts has a normalization registered, peform the associated normalization extraction. */if(CSS.Normalizations.registered[hookParts]){PartsPropertyValue = CSS.Normalizations.registered[hookParts]("extract",element,PartsPropertyValue);} /* Extract the hook's value. */propertyValue = CSS.Hooks.extractValue(hook,PartsPropertyValue); /* If this is a normalized property (e.g. "opacity" becomes "filter" in <=IE8) or "translateX" becomes "transform"),
	               normalize the property's name and value, and handle the special case of transforms. */ /* Note: Normalizing a property is mutually exclusive from hooking a property since hook-extracted values are strictly
	               numerical and therefore do not require normalization extraction. */}else if(CSS.Normalizations.registered[property]){var normalizedPropertyName,normalizedPropertyValue;normalizedPropertyName = CSS.Normalizations.registered[property]("name",element); /* Transform values are calculated via normalization extraction (see below), which checks against the element's transformCache.
	                   At no point do transform GETs ever actually query the DOM; initial stylesheet values are never processed.
	                   This is because parsing 3D transform matrices is not always accurate and would bloat our codebase;
	                   thus, normalization extraction defaults initial transform values to their zero-values (e.g. 1 for scaleX and 0 for translateX). */if(normalizedPropertyName !== "transform"){normalizedPropertyValue = computePropertyValue(element,CSS.Names.prefixCheck(normalizedPropertyName)[0]); /* GET */ /* If the value is a CSS null-value and this property has a hook template, use that zero-value template so that hooks can be extracted from it. */if(CSS.Values.isCSSNullValue(normalizedPropertyValue) && CSS.Hooks.templates[property]){normalizedPropertyValue = CSS.Hooks.templates[property][1];}}propertyValue = CSS.Normalizations.registered[property]("extract",element,normalizedPropertyValue);} /* If a (numeric) value wasn't produced via hook extraction or normalization, query the DOM. */if(!/^[\d-]/.test(propertyValue)){ /* For SVG elements, dimensional properties (which SVGAttribute() detects) are tweened via
	                   their HTML attribute values instead of their CSS style values. */if(Data(element) && Data(element).isSVG && CSS.Names.SVGAttribute(property)){ /* Since the height/width attribute values must be set manually, they don't reflect computed values.
	                       Thus, we use use getBBox() to ensure we always get values for elements with undefined height/width attributes. */if(/^(height|width)$/i.test(property)){ /* Firefox throws an error if .getBBox() is called on an SVG that isn't attached to the DOM. */try{propertyValue = element.getBBox()[property];}catch(error) {propertyValue = 0;} /* Otherwise, access the attribute value directly. */}else {propertyValue = element.getAttribute(property);}}else {propertyValue = computePropertyValue(element,CSS.Names.prefixCheck(property)[0]); /* GET */}} /* Since property lookups are for animation purposes (which entails computing the numeric delta between start and end values),
	               convert CSS null-values to an integer of value 0. */if(CSS.Values.isCSSNullValue(propertyValue)){propertyValue = 0;}if(Velocity.debug >= 2)console.log("Get " + property + ": " + propertyValue);return propertyValue;}, /* The singular setPropertyValue, which routes the logic for all normalizations, hooks, and standard CSS properties. */setPropertyValue:function setPropertyValue(element,property,propertyValue,PartsPropertyValue,scrollData){var propertyName=property; /* In order to be subjected to call options and element queueing, scroll animation is routed through Velocity as if it were a standard CSS property. */if(property === "scroll"){ /* If a container option is present, scroll the container instead of the browser window. */if(scrollData.container){scrollData.container["scroll" + scrollData.direction] = propertyValue; /* Otherwise, Velocity defaults to scrolling the browser window. */}else {if(scrollData.direction === "Left"){window.scrollTo(propertyValue,scrollData.alternateValue);}else {window.scrollTo(scrollData.alternateValue,propertyValue);}}}else { /* Transforms (translateX, rotateZ, etc.) are applied to a per-element transformCache object, which is manually flushed via flushTransformCache().
	                   Thus, for now, we merely cache transforms being SET. */if(CSS.Normalizations.registered[property] && CSS.Normalizations.registered[property]("name",element) === "transform"){ /* Perform a normalization injection. */ /* Note: The normalization logic handles the transformCache updating. */CSS.Normalizations.registered[property]("inject",element,propertyValue);propertyName = "transform";propertyValue = Data(element).transformCache[property];}else { /* Inject hooks. */if(CSS.Hooks.registered[property]){var hookName=property,hookParts=CSS.Hooks.getParts(property); /* If a cached PartsPropertyValue was not provided, query the DOM for the hookParts's current value. */PartsPropertyValue = PartsPropertyValue || CSS.getPropertyValue(element,hookParts); /* GET */propertyValue = CSS.Hooks.injectValue(hookName,propertyValue,PartsPropertyValue);property = hookParts;} /* Normalize names and values. */if(CSS.Normalizations.registered[property]){propertyValue = CSS.Normalizations.registered[property]("inject",element,propertyValue);property = CSS.Normalizations.registered[property]("name",element);} /* Assign the appropriate vendor prefix before performing an official style update. */propertyName = CSS.Names.prefixCheck(property)[0]; /* A try/catch is used for IE<=8, which throws an error when "invalid" CSS values are set, e.g. a negative width.
	                       Try/catch is avoided for other browsers since it incurs a performance overhead. */if(IE <= 8){try{element.style[propertyName] = propertyValue;}catch(error) {if(Velocity.debug)console.log("Browser does not support [" + propertyValue + "] for [" + propertyName + "]");} /* SVG elements have their dimensional properties (width, height, x, y, cx, etc.) applied directly as attributes instead of as styles. */ /* Note: IE8 does not support SVG elements, so it's okay that we skip it for SVG animation. */}else if(Data(element) && Data(element).isSVG && CSS.Names.SVGAttribute(property)){ /* Note: For SVG attributes, vendor-prefixed property names are never used. */ /* Note: Not all CSS properties can be animated via attributes, but the browser won't throw an error for unsupported properties. */element.setAttribute(property,propertyValue);}else {element.style[propertyName] = propertyValue;}if(Velocity.debug >= 2)console.log("Set " + property + " (" + propertyName + "): " + propertyValue);}} /* Return the normalized property name and value in case the caller wants to know how these values were modified before being applied to the DOM. */return [propertyName,propertyValue];}, /* To increase performance by batching transform updates into a single SET, transforms are not directly applied to an element until flushTransformCache() is called. */ /* Note: Velocity applies transform properties in the same order that they are chronogically introduced to the element's CSS styles. */flushTransformCache:function flushTransformCache(element){var transformString=""; /* Certain browsers require that SVG transforms be applied as an attribute. However, the SVG transform attribute takes a modified version of CSS's transform string
	               (units are dropped and, except for skewX/Y, subproperties are merged into their master property -- e.g. scaleX and scaleY are merged into scale(X Y). */if((IE || Velocity.State.isAndroid && !Velocity.State.isChrome) && Data(element).isSVG){ /* Since transform values are stored in their parentheses-wrapped form, we use a helper function to strip out their numeric values.
	                   Further, SVG transform properties only take unitless (representing pixels) values, so it's okay that parseFloat() strips the unit suffixed to the float value. */var getTransformFloat=function getTransformFloat(transformProperty){return parseFloat(CSS.getPropertyValue(element,transformProperty));} /* Create an object to organize all the transforms that we'll apply to the SVG element. To keep the logic simple,
	                   we process *all* transform properties -- even those that may not be explicitly applied (since they default to their zero-values anyway). */;var SVGTransforms={translate:[getTransformFloat("translateX"),getTransformFloat("translateY")],skewX:[getTransformFloat("skewX")],skewY:[getTransformFloat("skewY")], /* If the scale property is set (non-1), use that value for the scaleX and scaleY values
	                       (this behavior mimics the result of animating all these properties at once on HTML elements). */scale:getTransformFloat("scale") !== 1?[getTransformFloat("scale"),getTransformFloat("scale")]:[getTransformFloat("scaleX"),getTransformFloat("scaleY")], /* Note: SVG's rotate transform takes three values: rotation degrees followed by the X and Y values
	                       defining the rotation's origin point. We ignore the origin values (default them to 0). */rotate:[getTransformFloat("rotateZ"),0,0]}; /* Iterate through the transform properties in the user-defined property map order.
	                   (This mimics the behavior of non-SVG transform animation.) */$.each(Data(element).transformCache,function(transformName){ /* Except for with skewX/Y, revert the axis-specific transform subproperties to their axis-free master
	                       properties so that they match up with SVG's accepted transform properties. */if(/^translate/i.test(transformName)){transformName = "translate";}else if(/^scale/i.test(transformName)){transformName = "scale";}else if(/^rotate/i.test(transformName)){transformName = "rotate";} /* Check that we haven't yet deleted the property from the SVGTransforms container. */if(SVGTransforms[transformName]){ /* Append the transform property in the SVG-supported transform format. As per the spec, surround the space-delimited values in parentheses. */transformString += transformName + "(" + SVGTransforms[transformName].join(" ") + ")" + " "; /* After processing an SVG transform property, delete it from the SVGTransforms container so we don't
	                           re-insert the same master property if we encounter another one of its axis-specific properties. */delete SVGTransforms[transformName];}});}else {var transformValue,perspective; /* Transform properties are stored as members of the transformCache object. Concatenate all the members into a string. */$.each(Data(element).transformCache,function(transformName){transformValue = Data(element).transformCache[transformName]; /* Transform's perspective subproperty must be set first in order to take effect. Store it temporarily. */if(transformName === "transformPerspective"){perspective = transformValue;return true;} /* IE9 only supports one rotation type, rotateZ, which it refers to as "rotate". */if(IE === 9 && transformName === "rotateZ"){transformName = "rotate";}transformString += transformName + transformValue + " ";}); /* If present, set the perspective subproperty first. */if(perspective){transformString = "perspective" + perspective + " " + transformString;}}CSS.setPropertyValue(element,"transform",transformString);}}; /* Register hooks and normalizations. */CSS.Hooks.register();CSS.Normalizations.register(); /* Allow hook setting in the same fashion as jQuery's $.css(). */Velocity.hook = function(elements,arg2,arg3){var value=undefined;elements = sanitizeElements(elements);$.each(elements,function(i,element){ /* Initialize Velocity's per-element data cache if this element hasn't previously been animated. */if(Data(element) === undefined){Velocity.init(element);} /* Get property value. If an element set was passed in, only return the value for the first element. */if(arg3 === undefined){if(value === undefined){value = Velocity.CSS.getPropertyValue(element,arg2);} /* Set property value. */}else { /* sPV returns an array of the normalized propertyName/propertyValue pair used to update the DOM. */var adjustedSet=Velocity.CSS.setPropertyValue(element,arg2,arg3); /* Transform properties don't automatically set. They have to be flushed to the DOM. */if(adjustedSet[0] === "transform"){Velocity.CSS.flushTransformCache(element);}value = adjustedSet;}});return value;}; /*****************
	        Animation
	    *****************/var animate=function animate(){ /******************
	            Call Chain
	        ******************/ /* Logic for determining what to return to the call stack when exiting out of Velocity. */function getChain(){ /* If we are using the utility function, attempt to return this call's promise. If no promise library was detected,
	               default to null instead of returning the targeted elements so that utility function's return value is standardized. */if(isUtility){return promiseData.promise || null; /* Otherwise, if we're using $.fn, return the jQuery-/Zepto-wrapped element set. */}else {return elementsWrapped;}} /*************************
	           Arguments Assignment
	        *************************/ /* To allow for expressive CoffeeScript code, Velocity supports an alternative syntax in which "elements" (or "e"), "properties" (or "p"), and "options" (or "o")
	           objects are defined on a container object that's passed in as Velocity's sole argument. */ /* Note: Some browsers automatically populate arguments with a "properties" object. We detect it by checking for its default "names" property. */var syntacticSugar=arguments[0] && (arguments[0].p || $.isPlainObject(arguments[0].properties) && !arguments[0].properties.names || Type.isString(arguments[0].properties)), /* Whether Velocity was called via the utility function (as opposed to on a jQuery/Zepto object). */isUtility, /* When Velocity is called via the utility function ($.Velocity()/Velocity()), elements are explicitly
	               passed in as the first parameter. Thus, argument positioning varies. We normalize them here. */elementsWrapped,argumentIndex;var elements,propertiesMap,options; /* Detect jQuery/Zepto elements being animated via the $.fn method. */if(Type.isWrapped(this)){isUtility = false;argumentIndex = 0;elements = this;elementsWrapped = this; /* Otherwise, raw elements are being animated via the utility function. */}else {isUtility = true;argumentIndex = 1;elements = syntacticSugar?arguments[0].elements || arguments[0].e:arguments[0];}elements = sanitizeElements(elements);if(!elements){return;}if(syntacticSugar){propertiesMap = arguments[0].properties || arguments[0].p;options = arguments[0].options || arguments[0].o;}else {propertiesMap = arguments[argumentIndex];options = arguments[argumentIndex + 1];} /* The length of the element set (in the form of a nodeList or an array of elements) is defaulted to 1 in case a
	           single raw DOM element is passed in (which doesn't contain a length property). */var elementsLength=elements.length,elementsIndex=0; /***************************
	            Argument Overloading
	        ***************************/ /* Support is included for jQuery's argument overloading: $.animate(propertyMap [, duration] [, easing] [, complete]).
	           Overloading is detected by checking for the absence of an object being passed into options. */ /* Note: The stop and finish actions do not accept animation options, and are therefore excluded from this check. */if(!/^(stop|finish|finishAll)$/i.test(propertiesMap) && !$.isPlainObject(options)){ /* The utility function shifts all arguments one position to the right, so we adjust for that offset. */var startingArgumentPosition=argumentIndex + 1;options = {}; /* Iterate through all options arguments */for(var i=startingArgumentPosition;i < arguments.length;i++) { /* Treat a number as a duration. Parse it out. */ /* Note: The following RegEx will return true if passed an array with a number as its first item.
	                   Thus, arrays are skipped from this check. */if(!Type.isArray(arguments[i]) && (/^(fast|normal|slow)$/i.test(arguments[i]) || /^\d/.test(arguments[i]))){options.duration = arguments[i]; /* Treat strings and arrays as easings. */}else if(Type.isString(arguments[i]) || Type.isArray(arguments[i])){options.easing = arguments[i]; /* Treat a function as a complete callback. */}else if(Type.isFunction(arguments[i])){options.complete = arguments[i];}}} /***************
	            Promises
	        ***************/var promiseData={promise:null,resolver:null,rejecter:null}; /* If this call was made via the utility function (which is the default method of invocation when jQuery/Zepto are not being used), and if
	           promise support was detected, create a promise object for this call and store references to its resolver and rejecter methods. The resolve
	           method is used when a call completes naturally or is prematurely stopped by the user. In both cases, completeCall() handles the associated
	           call cleanup and promise resolving logic. The reject method is used when an invalid set of arguments is passed into a Velocity call. */ /* Note: Velocity employs a call-based queueing architecture, which means that stopping an animating element actually stops the full call that
	           triggered it -- not that one element exclusively. Similarly, there is one promise per call, and all elements targeted by a Velocity call are
	           grouped together for the purposes of resolving and rejecting a promise. */if(isUtility && Velocity.Promise){promiseData.promise = new Velocity.Promise(function(resolve,reject){promiseData.resolver = resolve;promiseData.rejecter = reject;});} /*********************
	           Action Detection
	        *********************/ /* Velocity's behavior is categorized into "actions": Elements can either be specially scrolled into view,
	           or they can be started, stopped, or reversed. If a literal or referenced properties map is passed in as Velocity's
	           first argument, the associated action is "start". Alternatively, "scroll", "reverse", or "stop" can be passed in instead of a properties map. */var action;switch(propertiesMap){case "scroll":action = "scroll";break;case "reverse":action = "reverse";break;case "finish":case "finishAll":case "stop": /*******************
	                    Action: Stop
	                *******************/ /* Clear the currently-active delay on each targeted element. */$.each(elements,function(i,element){if(Data(element) && Data(element).delayTimer){ /* Stop the timer from triggering its cached next() function. */clearTimeout(Data(element).delayTimer.setTimeout); /* Manually call the next() function so that the subsequent queue items can progress. */if(Data(element).delayTimer.next){Data(element).delayTimer.next();}delete Data(element).delayTimer;} /* If we want to finish everything in the queue, we have to iterate through it
	                       and call each function. This will make them active calls below, which will
	                       cause them to be applied via the duration setting. */if(propertiesMap === "finishAll" && (options === true || Type.isString(options))){ /* Iterate through the items in the element's queue. */$.each($.queue(element,Type.isString(options)?options:""),function(_,item){ /* The queue array can contain an "inprogress" string, which we skip. */if(Type.isFunction(item)){item();}}); /* Clearing the $.queue() array is achieved by resetting it to []. */$.queue(element,Type.isString(options)?options:"",[]);}});var callsToStop=[]; /* When the stop action is triggered, the elements' currently active call is immediately stopped. The active call might have
	                   been applied to multiple elements, in which case all of the call's elements will be stopped. When an element
	                   is stopped, the next item in its animation queue is immediately triggered. */ /* An additional argument may be passed in to clear an element's remaining queued calls. Either true (which defaults to the "fx" queue)
	                   or a custom queue string can be passed in. */ /* Note: The stop command runs prior to Velocity's Queueing phase since its behavior is intended to take effect *immediately*,
	                   regardless of the element's current queue state. */ /* Iterate through every active call. */$.each(Velocity.State.calls,function(i,activeCall){ /* Inactive calls are set to false by the logic inside completeCall(). Skip them. */if(activeCall){ /* Iterate through the active call's targeted elements. */$.each(activeCall[1],function(k,activeElement){ /* If true was passed in as a secondary argument, clear absolutely all calls on this element. Otherwise, only
	                               clear calls associated with the relevant queue. */ /* Call stopping logic works as follows:
	                               - options === true --> stop current default queue calls (and queue:false calls), including remaining queued ones.
	                               - options === undefined --> stop current queue:"" call and all queue:false calls.
	                               - options === false --> stop only queue:false calls.
	                               - options === "custom" --> stop current queue:"custom" call, including remaining queued ones (there is no functionality to only clear the currently-running queue:"custom" call). */var queueName=options === undefined?"":options;if(queueName !== true && activeCall[2].queue !== queueName && !(options === undefined && activeCall[2].queue === false)){return true;} /* Iterate through the calls targeted by the stop command. */$.each(elements,function(l,element){ /* Check that this call was applied to the target element. */if(element === activeElement){ /* Optionally clear the remaining queued calls. If we're doing "finishAll" this won't find anything,
	                                       due to the queue-clearing above. */if(options === true || Type.isString(options)){ /* Iterate through the items in the element's queue. */$.each($.queue(element,Type.isString(options)?options:""),function(_,item){ /* The queue array can contain an "inprogress" string, which we skip. */if(Type.isFunction(item)){ /* Pass the item's callback a flag indicating that we want to abort from the queue call.
	                                                   (Specifically, the queue will resolve the call's associated promise then abort.)  */item(null,true);}}); /* Clearing the $.queue() array is achieved by resetting it to []. */$.queue(element,Type.isString(options)?options:"",[]);}if(propertiesMap === "stop"){ /* Since "reverse" uses cached start values (the previous call's endValues), these values must be
	                                           changed to reflect the final value that the elements were actually tweened to. */ /* Note: If only queue:false animations are currently running on an element, it won't have a tweensContainer
	                                           object. Also, queue:false animations can't be reversed. */if(Data(element) && Data(element).tweensContainer && queueName !== false){$.each(Data(element).tweensContainer,function(m,activeTween){activeTween.endValue = activeTween.currentValue;});}callsToStop.push(i);}else if(propertiesMap === "finish" || propertiesMap === "finishAll"){ /* To get active tweens to finish immediately, we forcefully shorten their durations to 1ms so that
	                                        they finish upon the next rAf tick then proceed with normal call completion logic. */activeCall[2].duration = 1;}}});});}}); /* Prematurely call completeCall() on each matched active call. Pass an additional flag for "stop" to indicate
	                   that the complete callback and display:none setting should be skipped since we're completing prematurely. */if(propertiesMap === "stop"){$.each(callsToStop,function(i,j){completeCall(j,true);});if(promiseData.promise){ /* Immediately resolve the promise associated with this stop call since stop runs synchronously. */promiseData.resolver(elements);}} /* Since we're stopping, and not proceeding with queueing, exit out of Velocity. */return getChain();default: /* Treat a non-empty plain object as a literal properties map. */if($.isPlainObject(propertiesMap) && !Type.isEmptyObject(propertiesMap)){action = "start"; /****************
	                    Redirects
	                ****************/ /* Check if a string matches a registered redirect (see Redirects above). */}else if(Type.isString(propertiesMap) && Velocity.Redirects[propertiesMap]){var opts=$.extend({},options),durationOriginal=opts.duration,delayOriginal=opts.delay || 0; /* If the backwards option was passed in, reverse the element set so that elements animate from the last to the first. */if(opts.backwards === true){elements = $.extend(true,[],elements).reverse();} /* Individually trigger the redirect for each element in the set to prevent users from having to handle iteration logic in their redirect. */$.each(elements,function(elementIndex,element){ /* If the stagger option was passed in, successively delay each element by the stagger value (in ms). Retain the original delay value. */if(parseFloat(opts.stagger)){opts.delay = delayOriginal + parseFloat(opts.stagger) * elementIndex;}else if(Type.isFunction(opts.stagger)){opts.delay = delayOriginal + opts.stagger.call(element,elementIndex,elementsLength);} /* If the drag option was passed in, successively increase/decrease (depending on the presense of opts.backwards)
	                           the duration of each element's animation, using floors to prevent producing very short durations. */if(opts.drag){ /* Default the duration of UI pack effects (callouts and transitions) to 1000ms instead of the usual default duration of 400ms. */opts.duration = parseFloat(durationOriginal) || (/^(callout|transition)/.test(propertiesMap)?1000:DURATION_DEFAULT); /* For each element, take the greater duration of: A) animation completion percentage relative to the original duration,
	                               B) 75% of the original duration, or C) a 200ms fallback (in case duration is already set to a low value).
	                               The end result is a baseline of 75% of the redirect's duration that increases/decreases as the end of the element set is approached. */opts.duration = Math.max(opts.duration * (opts.backwards?1 - elementIndex / elementsLength:(elementIndex + 1) / elementsLength),opts.duration * 0.75,200);} /* Pass in the call's opts object so that the redirect can optionally extend it. It defaults to an empty object instead of null to
	                           reduce the opts checking logic required inside the redirect. */Velocity.Redirects[propertiesMap].call(element,element,opts || {},elementIndex,elementsLength,elements,promiseData.promise?promiseData:undefined);}); /* Since the animation logic resides within the redirect's own code, abort the remainder of this call.
	                       (The performance overhead up to this point is virtually non-existant.) */ /* Note: The jQuery call chain is kept intact by returning the complete element set. */return getChain();}else {var abortError="Velocity: First argument (" + propertiesMap + ") was not a property map, a known action, or a registered redirect. Aborting.";if(promiseData.promise){promiseData.rejecter(new Error(abortError));}else {console.log(abortError);}return getChain();}} /**************************
	            Call-Wide Variables
	        **************************/ /* A container for CSS unit conversion ratios (e.g. %, rem, and em ==> px) that is used to cache ratios across all elements
	           being animated in a single Velocity call. Calculating unit ratios necessitates DOM querying and updating, and is therefore
	           avoided (via caching) wherever possible. This container is call-wide instead of page-wide to avoid the risk of using stale
	           conversion metrics across Velocity animations that are not immediately consecutively chained. */var callUnitConversionData={lastParent:null,lastPosition:null,lastFontSize:null,lastPercentToPxWidth:null,lastPercentToPxHeight:null,lastEmToPx:null,remToPx:null,vwToPx:null,vhToPx:null}; /* A container for all the ensuing tween data and metadata associated with this call. This container gets pushed to the page-wide
	           Velocity.State.calls array that is processed during animation ticking. */var call=[]; /************************
	           Element Processing
	        ************************/ /* Element processing consists of three parts -- data processing that cannot go stale and data processing that *can* go stale (i.e. third-party style modifications):
	           1) Pre-Queueing: Element-wide variables, including the element's data storage, are instantiated. Call options are prepared. If triggered, the Stop action is executed.
	           2) Queueing: The logic that runs once this call has reached its point of execution in the element's $.queue() stack. Most logic is placed here to avoid risking it becoming stale.
	           3) Pushing: Consolidation of the tween data followed by its push onto the global in-progress calls container.
	        */function processElement(){ /*************************
	               Part I: Pre-Queueing
	            *************************/ /***************************
	               Element-Wide Variables
	            ***************************/var element=this, /* The runtime opts object is the extension of the current call's options and Velocity's page-wide option defaults. */opts=$.extend({},Velocity.defaults,options), /* A container for the processed data associated with each property in the propertyMap.
	                   (Each property in the map produces its own "tween".) */tweensContainer={},elementUnitConversionData; /******************
	               Element Init
	            ******************/if(Data(element) === undefined){Velocity.init(element);} /******************
	               Option: Delay
	            ******************/ /* Since queue:false doesn't respect the item's existing queue, we avoid injecting its delay here (it's set later on). */ /* Note: Velocity rolls its own delay function since jQuery doesn't have a utility alias for $.fn.delay()
	               (and thus requires jQuery element creation, which we avoid since its overhead includes DOM querying). */if(parseFloat(opts.delay) && opts.queue !== false){$.queue(element,opts.queue,function(next){ /* This is a flag used to indicate to the upcoming completeCall() function that this queue entry was initiated by Velocity. See completeCall() for further details. */Velocity.velocityQueueEntryFlag = true; /* The ensuing queue item (which is assigned to the "next" argument that $.queue() automatically passes in) will be triggered after a setTimeout delay.
	                       The setTimeout is stored so that it can be subjected to clearTimeout() if this animation is prematurely stopped via Velocity's "stop" command. */Data(element).delayTimer = {setTimeout:setTimeout(next,parseFloat(opts.delay)),next:next};});} /*********************
	               Option: Duration
	            *********************/ /* Support for jQuery's named durations. */switch(opts.duration.toString().toLowerCase()){case "fast":opts.duration = 200;break;case "normal":opts.duration = DURATION_DEFAULT;break;case "slow":opts.duration = 600;break;default: /* Remove the potential "ms" suffix and default to 1 if the user is attempting to set a duration of 0 (in order to produce an immediate style change). */opts.duration = parseFloat(opts.duration) || 1;} /************************
	               Global Option: Mock
	            ************************/if(Velocity.mock !== false){ /* In mock mode, all animations are forced to 1ms so that they occur immediately upon the next rAF tick.
	                   Alternatively, a multiplier can be passed in to time remap all delays and durations. */if(Velocity.mock === true){opts.duration = opts.delay = 1;}else {opts.duration *= parseFloat(Velocity.mock) || 1;opts.delay *= parseFloat(Velocity.mock) || 1;}} /*******************
	               Option: Easing
	            *******************/opts.easing = getEasing(opts.easing,opts.duration); /**********************
	               Option: Callbacks
	            **********************/ /* Callbacks must functions. Otherwise, default to null. */if(opts.begin && !Type.isFunction(opts.begin)){opts.begin = null;}if(opts.progress && !Type.isFunction(opts.progress)){opts.progress = null;}if(opts.complete && !Type.isFunction(opts.complete)){opts.complete = null;} /*********************************
	               Option: Display & Visibility
	            *********************************/ /* Refer to Velocity's documentation (VelocityJS.org/#displayAndVisibility) for a description of the display and visibility options' behavior. */ /* Note: We strictly check for undefined instead of falsiness because display accepts an empty string value. */if(opts.display !== undefined && opts.display !== null){opts.display = opts.display.toString().toLowerCase(); /* Users can pass in a special "auto" value to instruct Velocity to set the element to its default display value. */if(opts.display === "auto"){opts.display = Velocity.CSS.Values.getDisplayType(element);}}if(opts.visibility !== undefined && opts.visibility !== null){opts.visibility = opts.visibility.toString().toLowerCase();} /**********************
	               Option: mobileHA
	            **********************/ /* When set to true, and if this is a mobile device, mobileHA automatically enables hardware acceleration (via a null transform hack)
	               on animating elements. HA is removed from the element at the completion of its animation. */ /* Note: Android Gingerbread doesn't support HA. If a null transform hack (mobileHA) is in fact set, it will prevent other tranform subproperties from taking effect. */ /* Note: You can read more about the use of mobileHA in Velocity's documentation: VelocityJS.org/#mobileHA. */opts.mobileHA = opts.mobileHA && Velocity.State.isMobile && !Velocity.State.isGingerbread; /***********************
	               Part II: Queueing
	            ***********************/ /* When a set of elements is targeted by a Velocity call, the set is broken up and each element has the current Velocity call individually queued onto it.
	               In this way, each element's existing queue is respected; some elements may already be animating and accordingly should not have this current Velocity call triggered immediately. */ /* In each queue, tween data is processed for each animating property then pushed onto the call-wide calls array. When the last element in the set has had its tweens processed,
	               the call array is pushed to Velocity.State.calls for live processing by the requestAnimationFrame tick. */function buildQueue(next){ /*******************
	                   Option: Begin
	                *******************/ /* The begin callback is fired once per call -- not once per elemenet -- and is passed the full raw DOM element set as both its context and its first argument. */if(opts.begin && elementsIndex === 0){ /* We throw callbacks in a setTimeout so that thrown errors don't halt the execution of Velocity itself. */try{opts.begin.call(elements,elements);}catch(error) {setTimeout(function(){throw error;},1);}} /*****************************************
	                   Tween Data Construction (for Scroll)
	                *****************************************/ /* Note: In order to be subjected to chaining and animation options, scroll's tweening is routed through Velocity as if it were a standard CSS property animation. */if(action === "scroll"){ /* The scroll action uniquely takes an optional "offset" option -- specified in pixels -- that offsets the targeted scroll position. */var scrollDirection=/^x$/i.test(opts.axis)?"Left":"Top",scrollOffset=parseFloat(opts.offset) || 0,scrollPositionCurrent,scrollPositionCurrentAlternate,scrollPositionEnd; /* Scroll also uniquely takes an optional "container" option, which indicates the parent element that should be scrolled --
	                       as opposed to the browser window itself. This is useful for scrolling toward an element that's inside an overflowing parent element. */if(opts.container){ /* Ensure that either a jQuery object or a raw DOM element was passed in. */if(Type.isWrapped(opts.container) || Type.isNode(opts.container)){ /* Extract the raw DOM element from the jQuery wrapper. */opts.container = opts.container[0] || opts.container; /* Note: Unlike other properties in Velocity, the browser's scroll position is never cached since it so frequently changes
	                               (due to the user's natural interaction with the page). */scrollPositionCurrent = opts.container["scroll" + scrollDirection]; /* GET */ /* $.position() values are relative to the container's currently viewable area (without taking into account the container's true dimensions
	                               -- say, for example, if the container was not overflowing). Thus, the scroll end value is the sum of the child element's position *and*
	                               the scroll container's current scroll position. */scrollPositionEnd = scrollPositionCurrent + $(element).position()[scrollDirection.toLowerCase()] + scrollOffset; /* GET */ /* If a value other than a jQuery object or a raw DOM element was passed in, default to null so that this option is ignored. */}else {opts.container = null;}}else { /* If the window itself is being scrolled -- not a containing element -- perform a live scroll position lookup using
	                           the appropriate cached property names (which differ based on browser type). */scrollPositionCurrent = Velocity.State.scrollAnchor[Velocity.State["scrollProperty" + scrollDirection]]; /* GET */ /* When scrolling the browser window, cache the alternate axis's current value since window.scrollTo() doesn't let us change only one value at a time. */scrollPositionCurrentAlternate = Velocity.State.scrollAnchor[Velocity.State["scrollProperty" + (scrollDirection === "Left"?"Top":"Left")]]; /* GET */ /* Unlike $.position(), $.offset() values are relative to the browser window's true dimensions -- not merely its currently viewable area --
	                           and therefore end values do not need to be compounded onto current values. */scrollPositionEnd = $(element).offset()[scrollDirection.toLowerCase()] + scrollOffset; /* GET */} /* Since there's only one format that scroll's associated tweensContainer can take, we create it manually. */tweensContainer = {scroll:{PartsPropertyValue:false,startValue:scrollPositionCurrent,currentValue:scrollPositionCurrent,endValue:scrollPositionEnd,unitType:"",easing:opts.easing,scrollData:{container:opts.container,direction:scrollDirection,alternateValue:scrollPositionCurrentAlternate}},element:element};if(Velocity.debug)console.log("tweensContainer (scroll): ",tweensContainer.scroll,element); /******************************************
	                   Tween Data Construction (for Reverse)
	                ******************************************/ /* Reverse acts like a "start" action in that a property map is animated toward. The only difference is
	                   that the property map used for reverse is the inverse of the map used in the previous call. Thus, we manipulate
	                   the previous call to construct our new map: use the previous map's end values as our new map's start values. Copy over all other data. */ /* Note: Reverse can be directly called via the "reverse" parameter, or it can be indirectly triggered via the loop option. (Loops are composed of multiple reverses.) */ /* Note: Reverse calls do not need to be consecutively chained onto a currently-animating element in order to operate on cached values;
	                   there is no harm to reverse being called on a potentially stale data cache since reverse's behavior is simply defined
	                   as reverting to the element's values as they were prior to the previous *Velocity* call. */}else if(action === "reverse"){ /* Abort if there is no prior animation data to reverse to. */if(!Data(element).tweensContainer){ /* Dequeue the element so that this queue entry releases itself immediately, allowing subsequent queue entries to run. */$.dequeue(element,opts.queue);return;}else { /*********************
	                           Options Parsing
	                        *********************/ /* If the element was hidden via the display option in the previous call,
	                           revert display to "auto" prior to reversal so that the element is visible again. */if(Data(element).opts.display === "none"){Data(element).opts.display = "auto";}if(Data(element).opts.visibility === "hidden"){Data(element).opts.visibility = "visible";} /* If the loop option was set in the previous call, disable it so that "reverse" calls aren't recursively generated.
	                           Further, remove the previous call's callback options; typically, users do not want these to be refired. */Data(element).opts.loop = false;Data(element).opts.begin = null;Data(element).opts.complete = null; /* Since we're extending an opts object that has already been extended with the defaults options object,
	                           we remove non-explicitly-defined properties that are auto-assigned values. */if(!options.easing){delete opts.easing;}if(!options.duration){delete opts.duration;} /* The opts object used for reversal is an extension of the options object optionally passed into this
	                           reverse call plus the options used in the previous Velocity call. */opts = $.extend({},Data(element).opts,opts); /*************************************
	                           Tweens Container Reconstruction
	                        *************************************/ /* Create a deepy copy (indicated via the true flag) of the previous call's tweensContainer. */var lastTweensContainer=$.extend(true,{},Data(element).tweensContainer); /* Manipulate the previous tweensContainer by replacing its end values and currentValues with its start values. */for(var lastTween in lastTweensContainer) { /* In addition to tween data, tweensContainers contain an element property that we ignore here. */if(lastTween !== "element"){var lastStartValue=lastTweensContainer[lastTween].startValue;lastTweensContainer[lastTween].startValue = lastTweensContainer[lastTween].currentValue = lastTweensContainer[lastTween].endValue;lastTweensContainer[lastTween].endValue = lastStartValue; /* Easing is the only option that embeds into the individual tween data (since it can be defined on a per-property basis).
	                                   Accordingly, every property's easing value must be updated when an options object is passed in with a reverse call.
	                                   The side effect of this extensibility is that all per-property easing values are forcefully reset to the new value. */if(!Type.isEmptyObject(options)){lastTweensContainer[lastTween].easing = opts.easing;}if(Velocity.debug)console.log("reverse tweensContainer (" + lastTween + "): " + JSON.stringify(lastTweensContainer[lastTween]),element);}}tweensContainer = lastTweensContainer;} /*****************************************
	                   Tween Data Construction (for Start)
	                *****************************************/}else if(action === "start"){var lastTweensContainer;var property;var valueData,endValue,easing,startValue;var PartsProperty,PartsPropertyValue;var separatedValue,endValueUnitType,startValueUnitType,operator;var axis;(function(){ /***************************
	                       Tween Data Calculation
	                    ***************************/ /* This function parses property data and defaults endValue, easing, and startValue as appropriate. */ /* Property map values can either take the form of 1) a single value representing the end value,
	                       or 2) an array in the form of [ endValue, [, easing] [, startValue] ].
	                       The optional third parameter is a forcefed startValue to be used instead of querying the DOM for
	                       the element's current value. Read Velocity's docmentation to learn more about forcefeeding: VelocityJS.org/#forcefeeding */var parsePropertyValue=function parsePropertyValue(valueData,skipResolvingEasing){var endValue=undefined,easing=undefined,startValue=undefined; /* Handle the array format, which can be structured as one of three potential overloads:
	                           A) [ endValue, easing, startValue ], B) [ endValue, easing ], or C) [ endValue, startValue ] */if(Type.isArray(valueData)){ /* endValue is always the first item in the array. Don't bother validating endValue's value now
	                               since the ensuing property cycling logic does that. */endValue = valueData[0]; /* Two-item array format: If the second item is a number, function, or hex string, treat it as a
	                               start value since easings can only be non-hex strings or arrays. */if(!Type.isArray(valueData[1]) && /^[\d-]/.test(valueData[1]) || Type.isFunction(valueData[1]) || CSS.RegEx.isHex.test(valueData[1])){startValue = valueData[1]; /* Two or three-item array: If the second item is a non-hex string or an array, treat it as an easing. */}else if(Type.isString(valueData[1]) && !CSS.RegEx.isHex.test(valueData[1]) || Type.isArray(valueData[1])){easing = skipResolvingEasing?valueData[1]:getEasing(valueData[1],opts.duration); /* Don't bother validating startValue's value now since the ensuing property cycling logic inherently does that. */if(valueData[2] !== undefined){startValue = valueData[2];}} /* Handle the single-value format. */}else {endValue = valueData;} /* Default to the call's easing if a per-property easing type was not defined. */if(!skipResolvingEasing){easing = easing || opts.easing;} /* If functions were passed in as values, pass the function the current element as its context,
	                           plus the element's index and the element set's size as arguments. Then, assign the returned value. */if(Type.isFunction(endValue)){endValue = endValue.call(element,elementsIndex,elementsLength);}if(Type.isFunction(startValue)){startValue = startValue.call(element,elementsIndex,elementsLength);} /* Allow startValue to be left as undefined to indicate to the ensuing code that its value was not forcefed. */return [endValue || 0,easing,startValue];} /* Cycle through each property in the map, looking for shorthand color properties (e.g. "color" as opposed to "colorRed"). Inject the corresponding
	                       colorRed, colorGreen, and colorBlue RGB component tweens into the propertiesMap (which Velocity understands) and remove the shorthand property. */; /* The per-element isAnimating flag is used to indicate whether it's safe (i.e. the data isn't stale)
	                       to transfer over end values to use as start values. If it's set to true and there is a previous
	                       Velocity call to pull values from, do so. */if(Data(element).tweensContainer && Data(element).isAnimating === true){lastTweensContainer = Data(element).tweensContainer;}$.each(propertiesMap,function(property,value){ /* Find shorthand color properties that have been passed a hex string. */if(RegExp("^" + CSS.Lists.colors.join("$|^") + "$").test(property)){ /* Parse the value data for each shorthand. */var valueData=parsePropertyValue(value,true),endValue=valueData[0],easing=valueData[1],startValue=valueData[2];if(CSS.RegEx.isHex.test(endValue)){ /* Convert the hex strings into their RGB component arrays. */var colorComponents=["Red","Green","Blue"],endValueRGB=CSS.Values.hexToRgb(endValue),startValueRGB=startValue?CSS.Values.hexToRgb(startValue):undefined; /* Inject the RGB component tweens into propertiesMap. */for(var i=0;i < colorComponents.length;i++) {var dataArray=[endValueRGB[i]];if(easing){dataArray.push(easing);}if(startValueRGB !== undefined){dataArray.push(startValueRGB[i]);}propertiesMap[property + colorComponents[i]] = dataArray;} /* Remove the intermediary shorthand property entry now that we've processed it. */delete propertiesMap[property];}}}); /* Create a tween out of each property, and append its associated data to tweensContainer. */for(property in propertiesMap) { /* Separates a property value into its numeric value and its unit type. */var separateValue=function separateValue(property,value){var unitType,numericValue;numericValue = (value || "0").toString().toLowerCase() /* Match the unit type at the end of the value. */.replace(/[%A-z]+$/,function(match){ /* Grab the unit type. */unitType = match; /* Strip the unit type off of value. */return "";}); /* If no unit type was supplied, assign one that is appropriate for this property (e.g. "deg" for rotateZ or "px" for width). */if(!unitType){unitType = CSS.Values.getUnitType(property);}return [numericValue,unitType];} /* Separate startValue. */; /***************************
	                           Unit Ratio Calculation
	                        ***************************/ /* When queried, the browser returns (most) CSS property values in pixels. Therefore, if an endValue with a unit type of
	                           %, em, or rem is animated toward, startValue must be converted from pixels into the same unit type as endValue in order
	                           for value manipulation logic (increment/decrement) to proceed. Further, if the startValue was forcefed or transferred
	                           from a previous call, startValue may also not be in pixels. Unit conversion logic therefore consists of two steps:
	                           1) Calculating the ratio of %/em/rem/vh/vw relative to pixels
	                           2) Converting startValue into the same unit of measurement as endValue based on these ratios. */ /* Unit conversion ratios are calculated by inserting a sibling node next to the target node, copying over its position property,
	                           setting values with the target unit type then comparing the returned pixel value. */ /* Note: Even if only one of these unit types is being animated, all unit ratios are calculated at once since the overhead
	                           of batching the SETs and GETs together upfront outweights the potential overhead
	                           of layout thrashing caused by re-querying for uncalculated ratios for subsequently-processed properties. */ /* Todo: Shift this logic into the calls' first tick instance so that it's synced with RAF. */var calculateUnitRatios=function calculateUnitRatios(){ /************************
	                                Same Ratio Checks
	                            ************************/ /* The properties below are used to determine whether the element differs sufficiently from this call's
	                               previously iterated element to also differ in its unit conversion ratios. If the properties match up with those
	                               of the prior element, the prior element's conversion ratios are used. Like most optimizations in Velocity,
	                               this is done to minimize DOM querying. */var sameRatioIndicators={myParent:element.parentNode || document.body, /* GET */position:CSS.getPropertyValue(element,"position"), /* GET */fontSize:CSS.getPropertyValue(element,"fontSize") /* GET */}, /* Determine if the same % ratio can be used. % is based on the element's position value and its parent's width and height dimensions. */samePercentRatio=sameRatioIndicators.position === callUnitConversionData.lastPosition && sameRatioIndicators.myParent === callUnitConversionData.lastParent, /* Determine if the same em ratio can be used. em is relative to the element's fontSize. */sameEmRatio=sameRatioIndicators.fontSize === callUnitConversionData.lastFontSize; /* Store these ratio indicators call-wide for the next element to compare against. */callUnitConversionData.lastParent = sameRatioIndicators.myParent;callUnitConversionData.lastPosition = sameRatioIndicators.position;callUnitConversionData.lastFontSize = sameRatioIndicators.fontSize; /***************************
	                               Element-Specific Units
	                            ***************************/ /* Note: IE8 rounds to the nearest pixel when returning CSS values, thus we perform conversions using a measurement
	                               of 100 (instead of 1) to give our ratios a precision of at least 2 decimal values. */var measurement=100,unitRatios={};if(!sameEmRatio || !samePercentRatio){var dummy=Data(element).isSVG?document.createElementNS("http://www.w3.org/2000/svg","rect"):document.createElement("div");Velocity.init(dummy);sameRatioIndicators.myParent.appendChild(dummy); /* To accurately and consistently calculate conversion ratios, the element's cascaded overflow and box-sizing are stripped.
	                                   Similarly, since width/height can be artificially constrained by their min-/max- equivalents, these are controlled for as well. */ /* Note: Overflow must be also be controlled for per-axis since the overflow property overwrites its per-axis values. */$.each(["overflow","overflowX","overflowY"],function(i,property){Velocity.CSS.setPropertyValue(dummy,property,"hidden");});Velocity.CSS.setPropertyValue(dummy,"position",sameRatioIndicators.position);Velocity.CSS.setPropertyValue(dummy,"fontSize",sameRatioIndicators.fontSize);Velocity.CSS.setPropertyValue(dummy,"boxSizing","content-box"); /* width and height act as our proxy properties for measuring the horizontal and vertical % ratios. */$.each(["minWidth","maxWidth","width","minHeight","maxHeight","height"],function(i,property){Velocity.CSS.setPropertyValue(dummy,property,measurement + "%");}); /* paddingLeft arbitrarily acts as our proxy property for the em ratio. */Velocity.CSS.setPropertyValue(dummy,"paddingLeft",measurement + "em"); /* Divide the returned value by the measurement to get the ratio between 1% and 1px. Default to 1 since working with 0 can produce Infinite. */unitRatios.percentToPxWidth = callUnitConversionData.lastPercentToPxWidth = (parseFloat(CSS.getPropertyValue(dummy,"width",null,true)) || 1) / measurement; /* GET */unitRatios.percentToPxHeight = callUnitConversionData.lastPercentToPxHeight = (parseFloat(CSS.getPropertyValue(dummy,"height",null,true)) || 1) / measurement; /* GET */unitRatios.emToPx = callUnitConversionData.lastEmToPx = (parseFloat(CSS.getPropertyValue(dummy,"paddingLeft")) || 1) / measurement; /* GET */sameRatioIndicators.myParent.removeChild(dummy);}else {unitRatios.emToPx = callUnitConversionData.lastEmToPx;unitRatios.percentToPxWidth = callUnitConversionData.lastPercentToPxWidth;unitRatios.percentToPxHeight = callUnitConversionData.lastPercentToPxHeight;} /***************************
	                               Element-Agnostic Units
	                            ***************************/ /* Whereas % and em ratios are determined on a per-element basis, the rem unit only needs to be checked
	                               once per call since it's exclusively dependant upon document.body's fontSize. If this is the first time
	                               that calculateUnitRatios() is being run during this call, remToPx will still be set to its default value of null,
	                               so we calculate it now. */if(callUnitConversionData.remToPx === null){ /* Default to browsers' default fontSize of 16px in the case of 0. */callUnitConversionData.remToPx = parseFloat(CSS.getPropertyValue(document.body,"fontSize")) || 16; /* GET */} /* Similarly, viewport units are %-relative to the window's inner dimensions. */if(callUnitConversionData.vwToPx === null){callUnitConversionData.vwToPx = parseFloat(window.innerWidth) / 100; /* GET */callUnitConversionData.vhToPx = parseFloat(window.innerHeight) / 100; /* GET */}unitRatios.remToPx = callUnitConversionData.remToPx;unitRatios.vwToPx = callUnitConversionData.vwToPx;unitRatios.vhToPx = callUnitConversionData.vhToPx;if(Velocity.debug >= 1)console.log("Unit ratios: " + JSON.stringify(unitRatios),element);return unitRatios;} /********************
	                           Unit Conversion
	                        ********************/ /* The * and / operators, which are not passed in with an associated unit, inherently use startValue's unit. Skip value and unit conversion. */; /**************************
	                           Start Value Sourcing
	                        **************************/ /* Parse out endValue, easing, and startValue from the property's data. */valueData = parsePropertyValue(propertiesMap[property]);endValue = valueData[0];easing = valueData[1];startValue = valueData[2]; /* Now that the original property name's format has been used for the parsePropertyValue() lookup above,
	                           we force the property to its camelCase styling to normalize it for manipulation. */property = CSS.Names.camelCase(property); /* In case this property is a hook, there are circumstances where we will intend to work on the hook's Parts property and not the hooked subproperty. */PartsProperty = CSS.Hooks.getParts(property);PartsPropertyValue = false; /* Other than for the dummy tween property, properties that are not supported by the browser (and do not have an associated normalization) will
	                           inherently produce no style changes when set, so they are skipped in order to decrease animation tick overhead.
	                           Property support is determined via prefixCheck(), which returns a false flag when no supported is detected. */ /* Note: Since SVG elements have some of their properties directly applied as HTML attributes,
	                           there is no way to check for their explicit browser support, and so we skip skip this check for them. */if(!Data(element).isSVG && PartsProperty !== "tween" && CSS.Names.prefixCheck(PartsProperty)[1] === false && CSS.Normalizations.registered[PartsProperty] === undefined){if(Velocity.debug)console.log("Skipping [" + PartsProperty + "] due to a lack of browser support.");continue;} /* If the display option is being set to a non-"none" (e.g. "block") and opacity (filter on IE<=8) is being
	                           animated to an endValue of non-zero, the user's intention is to fade in from invisible, thus we forcefeed opacity
	                           a startValue of 0 if its startValue hasn't already been sourced by value transferring or prior forcefeeding. */if((opts.display !== undefined && opts.display !== null && opts.display !== "none" || opts.visibility !== undefined && opts.visibility !== "hidden") && /opacity|filter/.test(property) && !startValue && endValue !== 0){startValue = 0;} /* If values have been transferred from the previous Velocity call, extract the endValue and PartsPropertyValue
	                           for all of the current call's properties that were *also* animated in the previous call. */ /* Note: Value transferring can optionally be disabled by the user via the _cacheValues option. */if(opts._cacheValues && lastTweensContainer && lastTweensContainer[property]){if(startValue === undefined){startValue = lastTweensContainer[property].endValue + lastTweensContainer[property].unitType;} /* The previous call's PartsPropertyValue is extracted from the element's data cache since that's the
	                               instance of PartsPropertyValue that gets freshly updated by the tweening process, whereas the PartsPropertyValue
	                               attached to the incoming lastTweensContainer is equal to the Parts property's value prior to any tweening. */PartsPropertyValue = Data(element).PartsPropertyValueCache[PartsProperty]; /* If values were not transferred from a previous Velocity call, query the DOM as needed. */}else { /* Handle hooked properties. */if(CSS.Hooks.registered[property]){if(startValue === undefined){PartsPropertyValue = CSS.getPropertyValue(element,PartsProperty); /* GET */ /* Note: The following getPropertyValue() call does not actually trigger a DOM query;
	                                       getPropertyValue() will extract the hook from PartsPropertyValue. */startValue = CSS.getPropertyValue(element,property,PartsPropertyValue); /* If startValue is already defined via forcefeeding, do not query the DOM for the Parts property's value;
	                                   just grab PartsProperty's zero-value template from CSS.Hooks. This overwrites the element's actual
	                                   Parts property value (if one is set), but this is acceptable since the primary reason users forcefeed is
	                                   to avoid DOM queries, and thus we likewise avoid querying the DOM for the Parts property's value. */}else { /* Grab this hook's zero-value template, e.g. "0px 0px 0px black". */PartsPropertyValue = CSS.Hooks.templates[PartsProperty][1];} /* Handle non-hooked properties that haven't already been defined via forcefeeding. */}else if(startValue === undefined){startValue = CSS.getPropertyValue(element,property); /* GET */}} /**************************
	                           Value Data Extraction
	                        **************************/operator = false;separatedValue = separateValue(property,startValue);startValue = separatedValue[0];startValueUnitType = separatedValue[1]; /* Separate endValue, and extract a value operator (e.g. "+=", "-=") if one exists. */separatedValue = separateValue(property,endValue);endValue = separatedValue[0].replace(/^([+-\/*])=/,function(match,subMatch){operator = subMatch; /* Strip the operator off of the value. */return "";});endValueUnitType = separatedValue[1]; /* Parse float values from endValue and startValue. Default to 0 if NaN is returned. */startValue = parseFloat(startValue) || 0;endValue = parseFloat(endValue) || 0; /***************************************
	                           Property-Specific Value Conversion
	                        ***************************************/ /* Custom support for properties that don't actually accept the % unit type, but where pollyfilling is trivial and relatively foolproof. */if(endValueUnitType === "%"){ /* A %-value fontSize/lineHeight is relative to the parent's fontSize (as opposed to the parent's dimensions),
	                               which is identical to the em unit's behavior, so we piggyback off of that. */if(/^(fontSize|lineHeight)$/.test(property)){ /* Convert % into an em decimal value. */endValue = endValue / 100;endValueUnitType = "em"; /* For scaleX and scaleY, convert the value into its decimal format and strip off the unit type. */}else if(/^scale/.test(property)){endValue = endValue / 100;endValueUnitType = ""; /* For RGB components, take the defined percentage of 255 and strip off the unit type. */}else if(/(Red|Green|Blue)$/i.test(property)){endValue = endValue / 100 * 255;endValueUnitType = "";}}if(/[\/*]/.test(operator)){endValueUnitType = startValueUnitType; /* If startValue and endValue differ in unit type, convert startValue into the same unit type as endValue so that if endValueUnitType
	                           is a relative unit (%, em, rem), the values set during tweening will continue to be accurately relative even if the metrics they depend
	                           on are dynamically changing during the course of the animation. Conversely, if we always normalized into px and used px for setting values, the px ratio
	                           would become stale if the original unit being animated toward was relative and the underlying metrics change during the animation. */ /* Since 0 is 0 in any unit type, no conversion is necessary when startValue is 0 -- we just start at 0 with endValueUnitType. */}else if(startValueUnitType !== endValueUnitType && startValue !== 0){ /* Unit conversion is also skipped when endValue is 0, but *startValueUnitType* must be used for tween values to remain accurate. */ /* Note: Skipping unit conversion here means that if endValueUnitType was originally a relative unit, the animation won't relatively
	                               match the underlying metrics if they change, but this is acceptable since we're animating toward invisibility instead of toward visibility,
	                               which remains past the point of the animation's completion. */if(endValue === 0){endValueUnitType = startValueUnitType;}else { /* By this point, we cannot avoid unit conversion (it's undesirable since it causes layout thrashing).
	                                   If we haven't already, we trigger calculateUnitRatios(), which runs once per element per call. */elementUnitConversionData = elementUnitConversionData || calculateUnitRatios(); /* The following RegEx matches CSS properties that have their % values measured relative to the x-axis. */ /* Note: W3C spec mandates that all of margin and padding's properties (even top and bottom) are %-relative to the *width* of the parent element. */axis = /margin|padding|left|right|width|text|word|letter/i.test(property) || /X$/.test(property) || property === "x"?"x":"y"; /* In order to avoid generating n^2 bespoke conversion functions, unit conversion is a two-step process:
	                                   1) Convert startValue into pixels. 2) Convert this new pixel value into endValue's unit type. */switch(startValueUnitType){case "%": /* Note: translateX and translateY are the only properties that are %-relative to an element's own dimensions -- not its parent's dimensions.
	                                           Velocity does not include a special conversion process to account for this behavior. Therefore, animating translateX/Y from a % value
	                                           to a non-% value will produce an incorrect start value. Fortunately, this sort of cross-unit conversion is rarely done by users in practice. */startValue *= axis === "x"?elementUnitConversionData.percentToPxWidth:elementUnitConversionData.percentToPxHeight;break;case "px": /* px acts as our midpoint in the unit conversion process; do nothing. */break;default:startValue *= elementUnitConversionData[startValueUnitType + "ToPx"];} /* Invert the px ratios to convert into to the target unit. */switch(endValueUnitType){case "%":startValue *= 1 / (axis === "x"?elementUnitConversionData.percentToPxWidth:elementUnitConversionData.percentToPxHeight);break;case "px": /* startValue is already in px, do nothing; we're done. */break;default:startValue *= 1 / elementUnitConversionData[endValueUnitType + "ToPx"];}}} /*********************
	                           Relative Values
	                        *********************/ /* Operator logic must be performed last since it requires unit-normalized start and end values. */ /* Note: Relative *percent values* do not behave how most people think; while one would expect "+=50%"
	                           to increase the property 1.5x its current value, it in fact increases the percent units in absolute terms:
	                           50 points is added on top of the current % value. */switch(operator){case "+":endValue = startValue + endValue;break;case "-":endValue = startValue - endValue;break;case "*":endValue = startValue * endValue;break;case "/":endValue = startValue / endValue;break;} /**************************
	                           tweensContainer Push
	                        **************************/ /* Construct the per-property tween object, and push it to the element's tweensContainer. */tweensContainer[property] = {PartsPropertyValue:PartsPropertyValue,startValue:startValue,currentValue:startValue,endValue:endValue,unitType:endValueUnitType,easing:easing};if(Velocity.debug)console.log("tweensContainer (" + property + "): " + JSON.stringify(tweensContainer[property]),element);} /* Along with its property data, store a reference to the element itself onto tweensContainer. */tweensContainer.element = element;})();} /*****************
	                    Call Push
	                *****************/ /* Note: tweensContainer can be empty if all of the properties in this call's property map were skipped due to not
	                   being supported by the browser. The element property is used for checking that the tweensContainer has been appended to. */if(tweensContainer.element){ /* Apply the "velocity-animating" indicator class. */CSS.Values.addClass(element,"velocity-animating"); /* The call array houses the tweensContainers for each element being animated in the current call. */call.push(tweensContainer); /* Store the tweensContainer and options if we're working on the default effects queue, so that they can be used by the reverse command. */if(opts.queue === ""){Data(element).tweensContainer = tweensContainer;Data(element).opts = opts;} /* Switch on the element's animating flag. */Data(element).isAnimating = true; /* Once the final element in this call's element set has been processed, push the call array onto
	                       Velocity.State.calls for the animation tick to immediately begin processing. */if(elementsIndex === elementsLength - 1){ /* Add the current call plus its associated metadata (the element set and the call's options) onto the global call container.
	                           Anything on this call container is subjected to tick() processing. */Velocity.State.calls.push([call,elements,opts,null,promiseData.resolver]); /* If the animation tick isn't running, start it. (Velocity shuts it off when there are no active calls to process.) */if(Velocity.State.isTicking === false){Velocity.State.isTicking = true; /* Start the tick loop. */tick();}}else {elementsIndex++;}}} /* When the queue option is set to false, the call skips the element's queue and fires immediately. */if(opts.queue === false){ /* Since this buildQueue call doesn't respect the element's existing queue (which is where a delay option would have been appended),
	                   we manually inject the delay property here with an explicit setTimeout. */if(opts.delay){setTimeout(buildQueue,opts.delay);}else {buildQueue();} /* Otherwise, the call undergoes element queueing as normal. */ /* Note: To interoperate with jQuery, Velocity uses jQuery's own $.queue() stack for queuing logic. */}else {$.queue(element,opts.queue,function(next,clearQueue){ /* If the clearQueue flag was passed in by the stop command, resolve this call's promise. (Promises can only be resolved once,
	                       so it's fine if this is repeatedly triggered for each element in the associated call.) */if(clearQueue === true){if(promiseData.promise){promiseData.resolver(elements);} /* Do not continue with animation queueing. */return true;} /* This flag indicates to the upcoming completeCall() function that this queue entry was initiated by Velocity.
	                       See completeCall() for further details. */Velocity.velocityQueueEntryFlag = true;buildQueue(next);});} /*********************
	                Auto-Dequeuing
	            *********************/ /* As per jQuery's $.queue() behavior, to fire the first non-custom-queue entry on an element, the element
	               must be dequeued if its queue stack consists *solely* of the current call. (This can be determined by checking
	               for the "inprogress" item that jQuery prepends to active queue stack arrays.) Regardless, whenever the element's
	               queue is further appended with additional items -- including $.delay()'s or even $.animate() calls, the queue's
	               first entry is automatically fired. This behavior contrasts that of custom queues, which never auto-fire. */ /* Note: When an element set is being subjected to a non-parallel Velocity call, the animation will not begin until
	               each one of the elements in the set has reached the end of its individually pre-existing queue chain. */ /* Note: Unfortunately, most people don't fully grasp jQuery's powerful, yet quirky, $.queue() function.
	               Lean more here: http://stackoverflow.com/questions/1058158/can-somebody-explain-jquery-queue-to-me */if((opts.queue === "" || opts.queue === "fx") && $.queue(element)[0] !== "inprogress"){$.dequeue(element);}} /**************************
	           Element Set Iteration
	        **************************/ /* If the "nodeType" property exists on the elements variable, we're animating a single element.
	           Place it in an array so that $.each() can iterate over it. */$.each(elements,function(i,element){ /* Ensure each element in a set has a nodeType (is a real element) to avoid throwing errors. */if(Type.isNode(element)){processElement.call(element);}}); /******************
	           Option: Loop
	        ******************/ /* The loop option accepts an integer indicating how many times the element should loop between the values in the
	           current call's properties map and the element's property values prior to this call. */ /* Note: The loop option's logic is performed here -- after element processing -- because the current call needs
	           to undergo its queue insertion prior to the loop option generating its series of constituent "reverse" calls,
	           which chain after the current call. Two reverse calls (two "alternations") constitute one loop. */var opts=$.extend({},Velocity.defaults,options),reverseCallsCount;opts.loop = parseInt(opts.loop);reverseCallsCount = opts.loop * 2 - 1;if(opts.loop){ /* Double the loop count to convert it into its appropriate number of "reverse" calls.
	               Subtract 1 from the resulting value since the current call is included in the total alternation count. */for(var x=0;x < reverseCallsCount;x++) { /* Since the logic for the reverse action occurs inside Queueing and therefore this call's options object
	                   isn't parsed until then as well, the current call's delay option must be explicitly passed into the reverse
	                   call so that the delay logic that occurs inside *Pre-Queueing* can process it. */var reverseOptions={delay:opts.delay,progress:opts.progress}; /* If a complete callback was passed into this call, transfer it to the loop redirect's final "reverse" call
	                   so that it's triggered when the entire redirect is complete (and not when the very first animation is complete). */if(x === reverseCallsCount - 1){reverseOptions.display = opts.display;reverseOptions.visibility = opts.visibility;reverseOptions.complete = opts.complete;}animate(elements,"reverse",reverseOptions);}} /***************
	            Chaining
	        ***************/ /* Return the elements back to the call chain, with wrapped elements taking precedence in case Velocity was called via the $.fn. extension. */return getChain();}; /* Turn Velocity into the animation function, extended with the pre-existing Velocity object. */Velocity = $.extend(animate,Velocity); /* For legacy support, also expose the literal animate method. */Velocity.animate = animate; /**************
	        Timing
	    **************/ /* Ticker function. */var ticker=window.requestAnimationFrame || rAFShim; /* Inactive browser tabs pause rAF, which results in all active animations immediately sprinting to their completion states when the tab refocuses.
	       To get around this, we dynamically switch rAF to setTimeout (which the browser *doesn't* pause) when the tab loses focus. We skip this for mobile
	       devices to avoid wasting battery power on inactive tabs. */ /* Note: Tab focus detection doesn't work on older versions of IE, but that's okay since they don't support rAF to begin with. */if(!Velocity.State.isMobile && document.hidden !== undefined){document.addEventListener("visibilitychange",function(){ /* Reassign the rAF function (which the global tick() function uses) based on the tab's focus state. */if(document.hidden){ticker = function(callback){ /* The tick function needs a truthy first argument in order to pass its internal timestamp check. */return setTimeout(function(){callback(true);},16);}; /* The rAF loop has been paused by the browser, so we manually restart the tick. */tick();}else {ticker = window.requestAnimationFrame || rAFShim;}});} /************
	        Tick
	    ************/ /* Note: All calls to Velocity are pushed to the Velocity.State.calls array, which is fully iterated through upon each tick. */function tick(timestamp){ /* An empty timestamp argument indicates that this is the first tick occurence since ticking was turned on.
	           We leverage this metadata to fully ignore the first tick pass since RAF's initial pass is fired whenever
	           the browser's next tick sync time occurs, which results in the first elements subjected to Velocity
	           calls being animated out of sync with any elements animated immediately thereafter. In short, we ignore
	           the first RAF tick pass so that elements being immediately consecutively animated -- instead of simultaneously animated
	           by the same Velocity call -- are properly batched into the same initial RAF tick and consequently remain in sync thereafter. */if(timestamp){ /* We ignore RAF's high resolution timestamp since it can be significantly offset when the browser is
	               under high stress; we opt for choppiness over allowing the browser to drop huge chunks of frames. */var timeCurrent=new Date().getTime(); /********************
	               Call Iteration
	            ********************/var callsLength=Velocity.State.calls.length; /* To speed up iterating over this array, it is compacted (falsey items -- calls that have completed -- are removed)
	               when its length has ballooned to a point that can impact tick performance. This only becomes necessary when animation
	               has been continuous with many elements over a long period of time; whenever all active calls are completed, completeCall() clears Velocity.State.calls. */if(callsLength > 10000){Velocity.State.calls = compactSparseArray(Velocity.State.calls);} /* Iterate through each active call. */for(var i=0;i < callsLength;i++) { /* When a Velocity call is completed, its Velocity.State.calls entry is set to false. Continue on to the next call. */if(!Velocity.State.calls[i]){continue;} /************************
	                   Call-Wide Variables
	                ************************/var callContainer=Velocity.State.calls[i],call=callContainer[0],opts=callContainer[2],timeStart=callContainer[3],firstTick=!!timeStart,tweenDummyValue=null; /* If timeStart is undefined, then this is the first time that this call has been processed by tick().
	                   We assign timeStart now so that its value is as close to the real animation start time as possible.
	                   (Conversely, had timeStart been defined when this call was added to Velocity.State.calls, the delay
	                   between that time and now would cause the first few frames of the tween to be skipped since
	                   percentComplete is calculated relative to timeStart.) */ /* Further, subtract 16ms (the approximate resolution of RAF) from the current time value so that the
	                   first tick iteration isn't wasted by animating at 0% tween completion, which would produce the
	                   same style value as the element's current value. */if(!timeStart){timeStart = Velocity.State.calls[i][3] = timeCurrent - 16;} /* The tween's completion percentage is relative to the tween's start time, not the tween's start value
	                   (which would result in unpredictable tween durations since JavaScript's timers are not particularly accurate).
	                   Accordingly, we ensure that percentComplete does not exceed 1. */var percentComplete=Math.min((timeCurrent - timeStart) / opts.duration,1); /**********************
	                   Element Iteration
	                **********************/ /* For every call, iterate through each of the elements in its set. */for(var j=0,callLength=call.length;j < callLength;j++) {var tweensContainer=call[j],element=tweensContainer.element; /* Check to see if this element has been deleted midway through the animation by checking for the
	                       continued existence of its data cache. If it's gone, skip animating this element. */if(!Data(element)){continue;}var transformPropertyExists=false; /**********************************
	                       Display & Visibility Toggling
	                    **********************************/ /* If the display option is set to non-"none", set it upfront so that the element can become visible before tweening begins.
	                       (Otherwise, display's "none" value is set in completeCall() once the animation has completed.) */if(opts.display !== undefined && opts.display !== null && opts.display !== "none"){if(opts.display === "flex"){var flexValues=["-webkit-box","-moz-box","-ms-flexbox","-webkit-flex"];$.each(flexValues,function(i,flexValue){CSS.setPropertyValue(element,"display",flexValue);});}CSS.setPropertyValue(element,"display",opts.display);} /* Same goes with the visibility option, but its "none" equivalent is "hidden". */if(opts.visibility !== undefined && opts.visibility !== "hidden"){CSS.setPropertyValue(element,"visibility",opts.visibility);} /************************
	                       Property Iteration
	                    ************************/ /* For every element, iterate through each property. */for(var property in tweensContainer) { /* Note: In addition to property tween data, tweensContainer contains a reference to its associated element. */if(property !== "element"){var tween=tweensContainer[property],currentValue, /* Easing can either be a pre-genereated function or a string that references a pre-registered easing
	                                   on the Velocity.Easings object. In either case, return the appropriate easing *function*. */easing=Type.isString(tween.easing)?Velocity.Easings[tween.easing]:tween.easing; /******************************
	                               Current Value Calculation
	                            ******************************/ /* If this is the last tick pass (if we've reached 100% completion for this tween),
	                               ensure that currentValue is explicitly set to its target endValue so that it's not subjected to any rounding. */if(percentComplete === 1){currentValue = tween.endValue; /* Otherwise, calculate currentValue based on the current delta from startValue. */}else {var tweenDelta=tween.endValue - tween.startValue;currentValue = tween.startValue + tweenDelta * easing(percentComplete,opts,tweenDelta); /* If no value change is occurring, don't proceed with DOM updating. */if(!firstTick && currentValue === tween.currentValue){continue;}}tween.currentValue = currentValue; /* If we're tweening a fake 'tween' property in order to log transition values, update the one-per-call variable so that
	                               it can be passed into the progress callback. */if(property === "tween"){tweenDummyValue = currentValue;}else { /******************
	                                   Hooks: Part I
	                                ******************/ /* For hooked properties, the newly-updated PartsPropertyValueCache is cached onto the element so that it can be used
	                                   for subsequent hooks in this call that are associated with the same Parts property. If we didn't cache the updated
	                                   PartsPropertyValue, each subsequent update to the Parts property in this tick pass would reset the previous hook's
	                                   updates to PartsPropertyValue prior to injection. A nice performance byproduct of PartsPropertyValue caching is that
	                                   subsequently chained animations using the same hookParts but a different hook can use this cached PartsPropertyValue. */if(CSS.Hooks.registered[property]){var hookParts=CSS.Hooks.getParts(property),PartsPropertyValueCache=Data(element).PartsPropertyValueCache[hookParts];if(PartsPropertyValueCache){tween.PartsPropertyValue = PartsPropertyValueCache;}} /*****************
	                                    DOM Update
	                                *****************/ /* setPropertyValue() returns an array of the property name and property value post any normalization that may have been performed. */ /* Note: To solve an IE<=8 positioning bug, the unit type is dropped when setting a property value of 0. */var adjustedSetData=CSS.setPropertyValue(element, /* SET */property,tween.currentValue + (parseFloat(currentValue) === 0?"":tween.unitType),tween.PartsPropertyValue,tween.scrollData); /*******************
	                                   Hooks: Part II
	                                *******************/ /* Now that we have the hook's updated PartsPropertyValue (the post-processed value provided by adjustedSetData), cache it onto the element. */if(CSS.Hooks.registered[property]){ /* Since adjustedSetData contains normalized data ready for DOM updating, the PartsPropertyValue needs to be re-extracted from its normalized form. ?? */if(CSS.Normalizations.registered[hookParts]){Data(element).PartsPropertyValueCache[hookParts] = CSS.Normalizations.registered[hookParts]("extract",null,adjustedSetData[1]);}else {Data(element).PartsPropertyValueCache[hookParts] = adjustedSetData[1];}} /***************
	                                   Transforms
	                                ***************/ /* Flag whether a transform property is being animated so that flushTransformCache() can be triggered once this tick pass is complete. */if(adjustedSetData[0] === "transform"){transformPropertyExists = true;}}}} /****************
	                        mobileHA
	                    ****************/ /* If mobileHA is enabled, set the translate3d transform to null to force hardware acceleration.
	                       It's safe to override this property since Velocity doesn't actually support its animation (hooks are used in its place). */if(opts.mobileHA){ /* Don't set the null transform hack if we've already done so. */if(Data(element).transformCache.translate3d === undefined){ /* All entries on the transformCache object are later concatenated into a single transform string via flushTransformCache(). */Data(element).transformCache.translate3d = "(0px, 0px, 0px)";transformPropertyExists = true;}}if(transformPropertyExists){CSS.flushTransformCache(element);}} /* The non-"none" display value is only applied to an element once -- when its associated call is first ticked through.
	                   Accordingly, it's set to false so that it isn't re-processed by this call in the next tick. */if(opts.display !== undefined && opts.display !== "none"){Velocity.State.calls[i][2].display = false;}if(opts.visibility !== undefined && opts.visibility !== "hidden"){Velocity.State.calls[i][2].visibility = false;} /* Pass the elements and the timing data (percentComplete, msRemaining, timeStart, tweenDummyValue) into the progress callback. */if(opts.progress){opts.progress.call(callContainer[1],callContainer[1],percentComplete,Math.max(0,timeStart + opts.duration - timeCurrent),timeStart,tweenDummyValue);} /* If this call has finished tweening, pass its index to completeCall() to handle call cleanup. */if(percentComplete === 1){completeCall(i);}}} /* Note: completeCall() sets the isTicking flag to false when the last call on Velocity.State.calls has completed. */if(Velocity.State.isTicking){ticker(tick);}} /**********************
	        Call Completion
	    **********************/ /* Note: Unlike tick(), which processes all active calls at once, call completion is handled on a per-call basis. */function completeCall(callIndex,isStopped){ /* Ensure the call exists. */if(!Velocity.State.calls[callIndex]){return false;} /* Pull the metadata from the call. */var call=Velocity.State.calls[callIndex][0],elements=Velocity.State.calls[callIndex][1],opts=Velocity.State.calls[callIndex][2],resolver=Velocity.State.calls[callIndex][4];var remainingCallsExist=false; /*************************
	           Element Finalization
	        *************************/for(var i=0,callLength=call.length;i < callLength;i++) {var element=call[i].element; /* If the user set display to "none" (intending to hide the element), set it now that the animation has completed. */ /* Note: display:none isn't set when calls are manually stopped (via Velocity("stop"). */ /* Note: Display gets ignored with "reverse" calls and infinite loops, since this behavior would be undesirable. */if(!isStopped && !opts.loop){if(opts.display === "none"){CSS.setPropertyValue(element,"display",opts.display);}if(opts.visibility === "hidden"){CSS.setPropertyValue(element,"visibility",opts.visibility);}} /* If the element's queue is empty (if only the "inprogress" item is left at position 0) or if its queue is about to run
	               a non-Velocity-initiated entry, turn off the isAnimating flag. A non-Velocity-initiatied queue entry's logic might alter
	               an element's CSS values and thereby cause Velocity's cached value data to go stale. To detect if a queue entry was initiated by Velocity,
	               we check for the existence of our special Velocity.queueEntryFlag declaration, which minifiers won't rename since the flag
	               is assigned to jQuery's global $ object and thus exists out of Velocity's own scope. */if(opts.loop !== true && ($.queue(element)[1] === undefined || !/\.velocityQueueEntryFlag/i.test($.queue(element)[1]))){ /* The element may have been deleted. Ensure that its data cache still exists before acting on it. */if(Data(element)){Data(element).isAnimating = false; /* Clear the element's PartsPropertyValueCache, which will become stale. */Data(element).PartsPropertyValueCache = {};var transformHAPropertyExists=false; /* If any 3D transform subproperty is at its default value (regardless of unit type), remove it. */$.each(CSS.Lists.transforms3D,function(i,transformName){var defaultValue=/^scale/.test(transformName)?1:0,currentValue=Data(element).transformCache[transformName];if(Data(element).transformCache[transformName] !== undefined && new RegExp("^\\(" + defaultValue + "[^.]").test(currentValue)){transformHAPropertyExists = true;delete Data(element).transformCache[transformName];}}); /* Mobile devices have hardware acceleration removed at the end of the animation in order to avoid hogging the GPU's memory. */if(opts.mobileHA){transformHAPropertyExists = true;delete Data(element).transformCache.translate3d;} /* Flush the subproperty removals to the DOM. */if(transformHAPropertyExists){CSS.flushTransformCache(element);} /* Remove the "velocity-animating" indicator class. */CSS.Values.removeClass(element,"velocity-animating");}} /*********************
	               Option: Complete
	            *********************/ /* Complete is fired once per call (not once per element) and is passed the full raw DOM element set as both its context and its first argument. */ /* Note: Callbacks aren't fired when calls are manually stopped (via Velocity("stop"). */if(!isStopped && opts.complete && !opts.loop && i === callLength - 1){ /* We throw callbacks in a setTimeout so that thrown errors don't halt the execution of Velocity itself. */try{opts.complete.call(elements,elements);}catch(error) {setTimeout(function(){throw error;},1);}} /**********************
	               Promise Resolving
	            **********************/ /* Note: Infinite loops don't return promises. */if(resolver && opts.loop !== true){resolver(elements);} /****************************
	               Option: Loop (Infinite)
	            ****************************/if(Data(element) && opts.loop === true && !isStopped){ /* If a rotateX/Y/Z property is being animated to 360 deg with loop:true, swap tween start/end values to enable
	                   continuous iterative rotation looping. (Otherise, the element would just rotate back and forth.) */$.each(Data(element).tweensContainer,function(propertyName,tweenContainer){if(/^rotate/.test(propertyName) && parseFloat(tweenContainer.endValue) === 360){tweenContainer.endValue = 0;tweenContainer.startValue = 360;}if(/^backgroundPosition/.test(propertyName) && parseFloat(tweenContainer.endValue) === 100 && tweenContainer.unitType === "%"){tweenContainer.endValue = 0;tweenContainer.startValue = 100;}});Velocity(element,"reverse",{loop:true,delay:opts.delay});} /***************
	               Dequeueing
	            ***************/ /* Fire the next call in the queue so long as this call's queue wasn't set to false (to trigger a parallel animation),
	               which would have already caused the next call to fire. Note: Even if the end of the animation queue has been reached,
	               $.dequeue() must still be called in order to completely clear jQuery's animation queue. */if(opts.queue !== false){$.dequeue(element,opts.queue);}} /************************
	           Calls Array Cleanup
	        ************************/ /* Since this call is complete, set it to false so that the rAF tick skips it. This array is later compacted via compactSparseArray().
	          (For performance reasons, the call is set to false instead of being deleted from the array: http://www.html5rocks.com/en/tutorials/speed/v8/) */Velocity.State.calls[callIndex] = false; /* Iterate through the calls array to determine if this was the final in-progress animation.
	           If so, set a flag to end ticking and clear the calls array. */for(var j=0,callsLength=Velocity.State.calls.length;j < callsLength;j++) {if(Velocity.State.calls[j] !== false){remainingCallsExist = true;break;}}if(remainingCallsExist === false){ /* tick() will detect this flag upon its next iteration and subsequently turn itself off. */Velocity.State.isTicking = false; /* Clear the calls array so that its length is reset. */delete Velocity.State.calls;Velocity.State.calls = [];}} /******************
	        Frameworks
	    ******************/ /* Both jQuery and Zepto allow their $.fn object to be extended to allow wrapped elements to be subjected to plugin calls.
	       If either framework is loaded, register a "velocity" extension pointing to Velocity's core animate() method.  Velocity
	       also registers itself onto a global container (window.jQuery || window.Zepto || window) so that certain features are
	       accessible beyond just a per-element scope. This master object contains an .animate() method, which is later assigned to $.fn
	       (if jQuery or Zepto are present). Accordingly, Velocity can both act on wrapped DOM elements and stand alone for targeting raw DOM elements. */global.Velocity = Velocity;if(global !== window){ /* Assign the element function to Velocity's core animate() method. */global.fn.velocity = animate; /* Assign the object function's defaults to Velocity's global defaults object. */global.fn.velocity.defaults = Velocity.defaults;} /***********************
	       Packaged Redirects
	    ***********************/ /* slideUp, slideDown */$.each(["Down","Up"],function(i,direction){Velocity.Redirects["slide" + direction] = function(element,options,elementsIndex,elementsSize,elements,promiseData){var opts=$.extend({},options),begin=opts.begin,complete=opts.complete,computedValues={height:"",marginTop:"",marginBottom:"",paddingTop:"",paddingBottom:""},inlineValues={};if(opts.display === undefined){ /* Show the element before slideDown begins and hide the element after slideUp completes. */ /* Note: Inline elements cannot have dimensions animated, so they're reverted to inline-block. */opts.display = direction === "Down"?Velocity.CSS.Values.getDisplayType(element) === "inline"?"inline-block":"block":"none";}opts.begin = function(){ /* If the user passed in a begin callback, fire it now. */begin && begin.call(elements,elements); /* Cache the elements' original vertical dimensional property values so that we can animate back to them. */for(var property in computedValues) {inlineValues[property] = element.style[property]; /* For slideDown, use forcefeeding to animate all vertical properties from 0. For slideUp,
	                       use forcefeeding to start from computed values and animate down to 0. */var propertyValue=Velocity.CSS.getPropertyValue(element,property);computedValues[property] = direction === "Down"?[propertyValue,0]:[0,propertyValue];} /* Force vertical overflow content to clip so that sliding works as expected. */inlineValues.overflow = element.style.overflow;element.style.overflow = "hidden";};opts.complete = function(){ /* Reset element to its pre-slide inline values once its slide animation is complete. */for(var property in inlineValues) {element.style[property] = inlineValues[property];} /* If the user passed in a complete callback, fire it now. */complete && complete.call(elements,elements);promiseData && promiseData.resolver(elements);};Velocity(element,computedValues,opts);};}); /* fadeIn, fadeOut */$.each(["In","Out"],function(i,direction){Velocity.Redirects["fade" + direction] = function(element,options,elementsIndex,elementsSize,elements,promiseData){var opts=$.extend({},options),propertiesMap={opacity:direction === "In"?1:0},originalComplete=opts.complete; /* Since redirects are triggered individually for each element in the animated set, avoid repeatedly triggering
	               callbacks by firing them only when the final element has been reached. */if(elementsIndex !== elementsSize - 1){opts.complete = opts.begin = null;}else {opts.complete = function(){if(originalComplete){originalComplete.call(elements,elements);}promiseData && promiseData.resolver(elements);};} /* If a display was passed in, use it. Otherwise, default to "none" for fadeOut or the element-specific default for fadeIn. */ /* Note: We allow users to pass in "null" to skip display setting altogether. */if(opts.display === undefined){opts.display = direction === "In"?"auto":"none";}Velocity(this,propertiesMap,opts);};});return Velocity;})(window.jQuery || window.Zepto || window,window,document);}); /******************
	   Known Issues
	******************/ /* The CSS spec mandates that the translateX/Y/Z transforms are %-relative to the element itself -- not its parent.
	Velocity, however, doesn't make this distinction. Thus, converting to or from the % unit with these subproperties
	will produce an inaccurate conversion value. The same issue exists with the cx/cy attributes of SVG circles and ellipses. */ /*************************
	                        Value Transferring
	                    *************************/ /* If this queue entry follows a previous Velocity-initiated queue entry *and* if this entry was created
	                       while the element was in the process of being animated by Velocity, then this current call is safe to use
	                       the end values from the prior call as its start values. Velocity attempts to perform this value transfer
	                       process whenever possible in order to avoid requerying the DOM. */ /* If values aren't transferred from a prior call and start values were not forcefed by the user (more on this below),
	                       then the DOM is queried for the element's current values as a last resort. */ /* Note: Conversely, animation reversal (and looping) *always* perform inter-call value transfers; they never requery the DOM. */

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var tooltip_1 = __webpack_require__(17);
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = {
	    methods: {
	        tooltip: function tooltip(event, message, position, delay) {
	            var element = event.currentTarget;
	            return tooltip_1["default"](element, message, position, delay);
	        }
	    }
	};
	//# sourceMappingURL=index.js.map

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Velocity = __webpack_require__(15);
	function getOffset(element) {
	    var top = 0,
	        left = 0;
	    do {
	        top += element.offsetTop || 0;
	        left += element.offsetLeft || 0;
	        element = element.offsetParent;
	    } while (element);
	    return {
	        top: top,
	        left: left
	    };
	}
	// todo swap tooltip if oversize window
	function default_1(element, message, position, delay) {
	    if (position === void 0) {
	        position = 'top';
	    }
	    if (delay === void 0) {
	        delay = 50;
	    }
	    var timeout = null,
	        margin = 10;
	    var origin = element;
	    if (!element._tooltip) {
	        // Create Text span
	        var tooltip_text = document.createElement("SPAN");
	        tooltip_text.textContent = message;
	        // Create tooltip
	        var newTooltip = document.createElement("DIV");
	        newTooltip.classList.add('material-tooltip');
	        newTooltip.appendChild(tooltip_text);
	        document.body.appendChild(newTooltip);
	        var newBackdrop = document.createElement("DIV");
	        newBackdrop.classList.add('backdrop');
	        newTooltip.appendChild(newBackdrop);
	        newBackdrop.style.top = '0';
	        newBackdrop.style.left = '0';
	        document.body.appendChild(newTooltip);
	        element._tooltip = newTooltip;
	        element._backdrop = newBackdrop;
	    }
	    var tooltip = element._tooltip;
	    var backdrop = element._backdrop;
	    var started;
	    var timeoutRef = setTimeout(function () {
	        started = true;
	        Velocity(tooltip, 'stop');
	        Velocity(backdrop, 'stop');
	        tooltip.style.display = 'block';
	        tooltip.style.left = '0px';
	        tooltip.style.top = '0px';
	        // Set Tooltip text
	        // tooltip.children('span').text(origin.attr('data-tooltip'));
	        // Tooltip positioning
	        var originWidth = origin.offsetWidth;
	        var originHeight = origin.offsetHeight;
	        var tooltipPosition = position;
	        var tooltipHeight = tooltip.offsetHeight;
	        var tooltipWidth = tooltip.offsetWidth;
	        var tooltipVerticalMovement = '0px';
	        var tooltipHorizontalMovement = '0px';
	        var scale_factor = 8;
	        var targetTop, targetLeft, newCoordinates;
	        if (tooltipPosition === "top") {
	            // Top Position
	            var pos = getOffset(element);
	            targetTop = pos.top - tooltipHeight - margin;
	            targetLeft = pos.left + originWidth / 2 - tooltipWidth / 2;
	            newCoordinates = repositionWithinScreen(targetLeft, targetTop, tooltipWidth, tooltipHeight);
	            tooltipVerticalMovement = '-10px';
	            backdrop.style.borderRadius = '14px 14px 0 0';
	            backdrop.style.transformOrigin = '50% 90%';
	            backdrop.style.marginTop = tooltipHeight.toString() + 'px';
	            backdrop.style.marginLeft = (tooltipWidth / 2 - backdrop.offsetWidth / 2).toString() + 'px';
	        } else if (tooltipPosition === "left") {
	            var pos = getOffset(element);
	            targetTop = pos.top + originHeight / 2 - tooltipHeight / 2;
	            targetLeft = pos.left - tooltipWidth - margin;
	            newCoordinates = repositionWithinScreen(targetLeft, targetTop, tooltipWidth, tooltipHeight);
	            tooltipHorizontalMovement = '-10px';
	            backdrop.style.width = '14px';
	            backdrop.style.height = '14px';
	            backdrop.style.borderRadius = '14px 0 0 14px';
	            backdrop.style.transformOrigin = '95% 50%';
	            backdrop.style.marginTop = (tooltipHeight / 2).toString() + 'px';
	            backdrop.style.marginLeft = tooltipWidth.toString() + 'px';
	        } else if (tooltipPosition === "right") {
	            var pos = getOffset(element);
	            targetTop = pos.top + originHeight / 2 - tooltipHeight / 2;
	            targetLeft = pos.left + originWidth + margin;
	            newCoordinates = repositionWithinScreen(targetLeft, targetTop, tooltipWidth, tooltipHeight);
	            tooltipHorizontalMovement = '+10px';
	            backdrop.style.width = '14px';
	            backdrop.style.height = '14px';
	            backdrop.style.borderRadius = '0 14px 14px 0';
	            backdrop.style.transformOrigin = '5% 50%';
	            backdrop.style.marginTop = (tooltipHeight / 2).toString() + 'px';
	            backdrop.style.marginLeft = '0px';
	        } else {
	            // Bottom Position
	            var pos = getOffset(element);
	            targetTop = pos.top + origin.offsetHeight + margin;
	            targetLeft = pos.left + originWidth / 2 - tooltipWidth / 2;
	            newCoordinates = repositionWithinScreen(targetLeft, targetTop, tooltipWidth, tooltipHeight);
	            tooltipVerticalMovement = '+10px';
	            backdrop.style.marginLeft = (tooltipWidth / 2 - backdrop.offsetWidth / 2).toString() + 'px';
	        }
	        // Set tooptip css placement
	        tooltip.style.top = newCoordinates.y + 'px';
	        tooltip.style.left = newCoordinates.x + 'px';
	        // Calculate Scale to fill
	        scale_factor = tooltipWidth / 8;
	        if (scale_factor < 8) {
	            scale_factor = 8;
	        }
	        if (tooltipPosition === "right" || tooltipPosition === "left") {
	            scale_factor = tooltipWidth / 10;
	            if (scale_factor < 6) scale_factor = 6;
	        }
	        Velocity(tooltip, { marginTop: tooltipVerticalMovement, marginLeft: tooltipHorizontalMovement }, { duration: 350, queue: false });
	        Velocity(tooltip, { opacity: 1 }, { duration: 300, delay: 50, queue: false });
	        backdrop.style.display = 'block';
	        Velocity(backdrop, { opacity: 1 }, { duration: 55, delay: 0, queue: false });
	        Velocity(backdrop, { scale: scale_factor }, { duration: 300, delay: 0, queue: false, easing: 'easeInOutQuad' });
	    }, delay);
	    // todo obecne
	    element.addEventListener("mouseleave", function () {
	        started = false;
	        clearTimeout(timeoutRef);
	        // Animate back
	        setTimeout(function () {
	            if (started != true) {
	                Velocity(tooltip, { opacity: 0, marginTop: 0, marginLeft: 0 }, { duration: 225, queue: false });
	                Velocity(backdrop, { opacity: 0, scale: 1 }, {
	                    duration: 225,
	                    queue: false,
	                    complete: function complete() {
	                        backdrop.style.display = 'none';
	                        tooltip.style.display = 'none';
	                        started = false;
	                    }
	                });
	            }
	        }, 225);
	    });
	}
	Object.defineProperty(exports, "__esModule", { value: true });
	exports['default'] = default_1;
	;
	var repositionWithinScreen = function repositionWithinScreen(x, y, width, height) {
	    var newX = x;
	    var newY = y;
	    if (newX < 0) {
	        newX = 4;
	    } else if (newX + width > window.innerWidth + window.scrollX) {
	        newX = window.document.documentElement.offsetWidth - width;
	    }
	    if (newY < 0) {
	        newY = 4;
	    } else if (newY + height > window.innerHeight + window.scrollY) {
	        newY = window.document.documentElement.offsetHeight - height;
	    }
	    return { x: newX, y: newY };
	};
	//# sourceMappingURL=index.js.map

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var vue_class_component_1 = __webpack_require__(19);
	var Badge = (function () {
	    function Badge() {}
	    Badge = __decorate([vue_class_component_1["default"]({
	        props: {
	            alert: {
	                type: String,
	                required: false,
	                twoWay: false,
	                "default": null
	            }
	        },
	        template: __webpack_require__(20)
	    })], Badge);
	    return Badge;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = Badge;
	//# sourceMappingURL=index.js.map

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var Vue = __webpack_require__(2);

	var internalHooks = ['data', 'el', 'init', 'created', 'ready', 'beforeCompile', 'compiled', 'beforeDestroy', 'destroyed', 'attached', 'detached', 'activate'];

	function componentFactory(Component, options) {
	  if (!options) {
	    options = {};
	  }
	  options.name = options.name || Component.name;
	  // prototype props.
	  var proto = Component.prototype;
	  Object.getOwnPropertyNames(proto).forEach(function (key) {
	    if (key === 'constructor') {
	      return;
	    }
	    // hooks
	    if (internalHooks.indexOf(key) > -1) {
	      options[key] = proto[key];
	      return;
	    }
	    var descriptor = Object.getOwnPropertyDescriptor(proto, key);
	    if (typeof descriptor.value === 'function') {
	      // methods
	      (options.methods || (options.methods = {}))[key] = descriptor.value;
	    } else if (descriptor.get || descriptor.set) {
	      // computed properties
	      (options.computed || (options.computed = {}))[key] = {
	        get: descriptor.get,
	        set: descriptor.set
	      };
	    }
	  });
	  // find super
	  var superProto = Object.getPrototypeOf(Component.prototype);
	  var Super = superProto instanceof Vue ? superProto.constructor : Vue;
	  return Super.extend(options);
	}

	function decorator(options) {
	  if (typeof options === 'function') {
	    return componentFactory(options);
	  }
	  return function (Component) {
	    return componentFactory(Component, options);
	  };
	}

	exports['default'] = decorator;

/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports = "<span class=\"badge\" :class=\"{new: !!alert}\">\r\n    <slot></slot>\r\n\r\n    <span v-if=\"alert\" class=\"new\">{{alert}}</span>\r\n</span>";

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var vue_class_component_1 = __webpack_require__(19);
	var icon_1 = __webpack_require__(22);
	var wave_effect_1 = __webpack_require__(8);
	var Button = (function () {
	    function Button() {}
	    Object.defineProperty(Button.prototype, "computedClasses", {
	        get: function get() {
	            var classes = {
	                'btn-large': this.large,
	                'disabled': this.disabled,
	                'btn-floating': this.floating
	            };
	            classes[this.type ? "btn-" + this.type : "btn"] = true;
	            return classes;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Button = __decorate([vue_class_component_1["default"]({
	        props: {
	            type: {
	                type: String,
	                required: false,
	                "default": null,
	                twoWay: false
	            },
	            icon: {
	                type: String,
	                required: false,
	                "default": null,
	                twoWay: false
	            },
	            iconAlignRight: {
	                type: Boolean,
	                required: false,
	                "default": false,
	                twoWay: false
	            },
	            large: {
	                type: Boolean,
	                required: false,
	                "default": false,
	                twoWay: false
	            },
	            disabled: {
	                type: Boolean,
	                required: false,
	                "default": false,
	                twoWay: false
	            },
	            floating: {
	                type: Boolean,
	                required: false,
	                "default": false,
	                twoWay: false
	            }
	        },
	        components: {
	            mdIcon: icon_1["default"]
	        },
	        directives: {
	            waveEffect: wave_effect_1["default"]
	        },
	        template: __webpack_require__(24)
	    })], Button);
	    return Button;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = Button;
	//# sourceMappingURL=index.js.map

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var vue_class_component_1 = __webpack_require__(19);
	var Icon = (function () {
	    function Icon() {}
	    Icon = __decorate([vue_class_component_1["default"]({
	        props: {
	            right: {
	                type: Boolean,
	                required: false,
	                "default": false
	            },
	            left: {
	                type: Boolean,
	                required: false,
	                "default": false
	            }
	        },
	        template: __webpack_require__(23)
	    })], Icon);
	    return Icon;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = Icon;
	//# sourceMappingURL=index.js.map

/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = "<i class=\"material-icons\"\r\n   :class=\"{right: right, left: left}\">\r\n    <slot></slot>\r\n</i>\r\n";

/***/ },
/* 24 */
/***/ function(module, exports) {

	module.exports = "<a :class=\"computedClasses\" v-wave-effect class=\"md-button\">\r\n    <md-icon v-if=\"icon\" :right=\"iconAlignRight\" :left=\"!iconAlignRight\">\r\n        {{icon}}\r\n    </md-icon>\r\n    <slot></slot>\r\n</a>";

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var vue_class_component_1 = __webpack_require__(19);
	var icon_1 = __webpack_require__(22);
	var wave_effect_1 = __webpack_require__(8);
	var bind_boolean_1 = __webpack_require__(4);
	var Btn = (function () {
	    function Btn() {}
	    Object.defineProperty(Btn.prototype, "computedClasses", {
	        get: function get() {
	            var classes = {
	                'btn-large': this.large,
	                'disabled': this.disabled,
	                'btn-floating': this.floating
	            };
	            classes[this.type ? "btn-" + this.type : "btn"] = true;
	            return classes;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Btn = __decorate([vue_class_component_1["default"]({
	        props: {
	            type: {
	                type: String,
	                required: false,
	                "default": null,
	                twoWay: false
	            },
	            icon: {
	                type: String,
	                required: false,
	                "default": null,
	                twoWay: false
	            },
	            iconAlignRight: {
	                type: Boolean,
	                required: false,
	                "default": false,
	                twoWay: false
	            },
	            large: {
	                type: Boolean,
	                required: false,
	                "default": false,
	                twoWay: false
	            },
	            disabled: {
	                type: Boolean,
	                required: false,
	                "default": false,
	                twoWay: false
	            },
	            floating: {
	                type: Boolean,
	                required: false,
	                "default": false,
	                twoWay: false
	            }
	        },
	        components: {
	            mdIcon: icon_1["default"]
	        },
	        directives: {
	            waveEffect: wave_effect_1["default"],
	            bindBoolean: bind_boolean_1["default"]
	        },
	        template: __webpack_require__(26)
	    })], Btn);
	    return Btn;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = Btn;
	//# sourceMappingURL=index.js.map

/***/ },
/* 26 */
/***/ function(module, exports) {

	module.exports = "<button :class=\"computedClasses\" v-bind-boolean:disabled=\"disabled\" v-wave-effect class=\"md-button\">\r\n    <md-icon v-if=\"icon\" :right=\"iconAlignRight\" :left=\"!iconAlignRight\">\r\n        {{icon}}\r\n    </md-icon>\r\n    <slot></slot>\r\n</button>";

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var vue_class_component_1 = __webpack_require__(19);
	var navbar_1 = __webpack_require__(28);
	var Breadcrumbs = (function () {
	    function Breadcrumbs() {}
	    Breadcrumbs = __decorate([vue_class_component_1["default"]({
	        props: {
	            list: {
	                type: Object,
	                required: false,
	                'default': {}
	            }
	        },
	        components: {
	            mdNavbar: navbar_1["default"]
	        },
	        template: __webpack_require__(34)
	    })], Breadcrumbs);
	    return Breadcrumbs;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = Breadcrumbs;
	//# sourceMappingURL=index.js.map

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var vue_class_component_1 = __webpack_require__(19);
	var icon_1 = __webpack_require__(22);
	var sidenav_1 = __webpack_require__(29);
	var Navbar = (function () {
	    function Navbar() {}
	    Object.defineProperty(Navbar.prototype, "logoClasses", {
	        get: function get() {
	            return {
	                center: this.center,
	                right: !this.center && !this.right
	            };
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Navbar.prototype, "listClasses", {
	        get: function get() {
	            var classes = {
	                right: this.right,
	                left: this.left
	            };
	            if (this.mode) {
	                classes[this.mode] = true;
	            }
	            return classes;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Navbar.prototype.openSideMenu = function () {
	        this.$broadcast('sidenav::open');
	    };
	    Navbar.prototype.closeSideMenu = function () {
	        this.$broadcast('sidenav::close');
	    };
	    Navbar = __decorate([vue_class_component_1["default"]({
	        props: {
	            active: {
	                type: String,
	                required: false,
	                'default': null
	            },
	            showActive: {
	                type: Boolean,
	                required: false,
	                'default': null,
	                twoWay: false
	            },
	            title: {
	                type: String,
	                required: false,
	                'default': '',
	                twoWay: false
	            },
	            titleHref: {
	                type: String,
	                required: false,
	                'default': 'javascript:void(0)',
	                twoWay: false
	            },
	            right: {
	                type: Boolean,
	                required: false,
	                'default': false,
	                twoWay: false
	            },
	            left: {
	                type: Boolean,
	                required: false,
	                'default': false,
	                twoWay: false
	            },
	            center: {
	                type: Boolean,
	                required: false,
	                'default': false,
	                twoWay: false
	            },
	            fixed: {
	                type: Boolean,
	                required: false,
	                'default': false,
	                twoWay: false
	            },
	            navClass: {
	                required: false,
	                'default': null,
	                twoWay: false
	            },
	            hamburger: {
	                type: Boolean,
	                required: false,
	                'default': false,
	                twoWay: false
	            },
	            mode: {
	                type: String,
	                required: false,
	                'default': null,
	                twoWay: false
	            },
	            closeOnClick: {
	                type: Boolean,
	                required: false,
	                'default': true,
	                twoWay: false
	            },
	            onlySideNav: {
	                type: Boolean,
	                required: false,
	                'default': false,
	                twoWay: false
	            },
	            wrapperClass: {
	                required: false,
	                'default': null,
	                twoWay: false
	            }
	        },
	        components: {
	            mdIcon: icon_1["default"],
	            mdSidenav: sidenav_1["default"]
	        },
	        events: {
	            'nav-item::activated': function navItemActivated(id, content) {
	                // propagate event to children
	                this.$broadcast('nav-item::activated', id);
	                this.active = id;
	                if (this.closeOnClick) {
	                    this.$broadcast('sidenav::close');
	                }
	            }
	        },
	        template: __webpack_require__(33)
	    })], Navbar);
	    return Navbar;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = Navbar;
	//# sourceMappingURL=index.js.map

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var vue_class_component_1 = __webpack_require__(19);
	var sidenav_overlay_1 = __webpack_require__(30);
	var ESC = 27;
	var SideNav = (function () {
	    function SideNav() {}
	    SideNav.prototype.ready = function () {
	        var _this = this;
	        this.active = this.fixed || this.active;
	        if (!this.fixed) {
	            window.document.addEventListener('keydown', function (evt) {
	                evt = evt || window.event;
	                if (evt.keyCode == ESC) {
	                    _this.close();
	                }
	            });
	        }
	    };
	    Object.defineProperty(SideNav.prototype, "computedStyle", {
	        get: function get() {
	            if (this.active) {
	                return {
	                    left: 0
	                };
	            }
	            return null;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    SideNav.prototype.open = function () {
	        if (!this.active) {
	            this.active = true;
	        }
	    };
	    SideNav.prototype.close = function () {
	        if (this.active) {
	            this.active = false;
	        }
	    };
	    SideNav.prototype.closeIfNecessary = function () {
	        if (this.closeOnClick) {
	            this.close();
	        }
	    };
	    SideNav = __decorate([vue_class_component_1["default"]({
	        props: {
	            closeOnClick: {
	                type: Boolean,
	                required: false,
	                'default': false
	            },
	            active: {
	                type: Boolean,
	                required: false,
	                'default': false
	            },
	            showActive: {
	                type: Boolean,
	                required: false,
	                'default': false
	            },
	            fixed: {
	                type: Boolean,
	                required: false,
	                'default': false
	            }
	        },
	        events: {
	            'sidenav::open': function sidenavOpen() {
	                this.open();
	            },
	            'sidenav::close': function sidenavClose() {
	                this.$nextTick(this.close); // delay close due events
	            },
	            'nav-item::activated': function navItemActivated(id) {
	                this.$broadcast('nav-item::activated', id);
	            }
	        },
	        components: {
	            mdSidenavOverlay: sidenav_overlay_1["default"]
	        },
	        template: __webpack_require__(32)
	    })], SideNav);
	    return SideNav;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = SideNav;
	//# sourceMappingURL=index.js.map

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var vue_class_component_1 = __webpack_require__(19);
	var SidenavOverlay = (function () {
	    function SidenavOverlay() {}
	    SidenavOverlay = __decorate([vue_class_component_1["default"]({
	        template: __webpack_require__(31)
	    })], SidenavOverlay);
	    return SidenavOverlay;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = SidenavOverlay;
	//# sourceMappingURL=index.js.map

/***/ },
/* 31 */
/***/ function(module, exports) {

	module.exports = "<div id=\"sidenav-overlay\"></div>";

/***/ },
/* 32 */
/***/ function(module, exports) {

	module.exports = "<div class=\"md-sidenav\">\r\n    <ul v-if=\"active\" transition=\"side-nav\" :style=\"computedStyle\" :class=\"{fixed: fixed}\" class=\"side-nav\">\r\n        <slot></slot>\r\n    </ul>\r\n\r\n    <div v-if=\"!fixed\" @click=\"close\">\r\n        <md-sidenav-overlay v-if=\"active\" transition=\"modal-overlay\"></md-sidenav-overlay>\r\n    </div>\r\n</div>\r\n";

/***/ },
/* 33 */
/***/ function(module, exports) {

	module.exports = "<div :class=\"{'navbar-fixed': fixed}\"\r\n     :style=\"fixed ? {position: 'absolute', top: 0}: {}\"\r\n     class=\"md-navbar\">\r\n\r\n    <nav :class=\"navClass\">\r\n        <div class=\"nav-wrapper\" :class=\"wrapperClass\">\r\n            <slot name=\"content\">\r\n                <slot name=\"logo\">\r\n                    <a v-if=\"title\"\r\n                       :href=\"titleHref\" class=\"brand-logo\" :class=\"logoClasses\">\r\n                        {{title}}\r\n                    </a>\r\n                    <a v-if=\"hamburger\" href=\"javascript:void(0)\" class=\"button-collapse\"\r\n                       @click=\"openSideMenu\">\r\n                        <md-icon>menu</md-icon>\r\n                    </a>\r\n                </slot>\r\n\r\n                <slot name=\"navs\">\r\n                    <ul v-if=\"!onlySideNav\" :class=\"listClasses\">\r\n                        <slot></slot>\r\n                    </ul>\r\n                    <md-sidenav :close-on-click=\"closeOnClick\"> <!-- only if is active -->\r\n                        <slot></slot>\r\n                    </md-sidenav>\r\n                </slot>\r\n            </slot>\r\n        </div>\r\n    </nav>\r\n</div>\r\n";

/***/ },
/* 34 */
/***/ function(module, exports) {

	module.exports = "<md-navbar class=\"md-breadcrumbs\">\r\n    <div slot=\"content\">\r\n        <a v-for=\"(label, url) in list\" :href=\"url\" class=\"breadcrumb\">\r\n            {{label}}\r\n        </a>\r\n    </div>\r\n</md-navbar>";

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var vue_class_component_1 = __webpack_require__(19);
	var Velocity = __webpack_require__(15);
	var Card = (function () {
	    function Card() {}
	    Card.prototype.data = function () {
	        return {
	            active: false
	        };
	    };
	    Card.prototype.compiled = function () {
	        var _this = this;
	        var activators = this.$el.querySelectorAll('.activator');
	        Array.prototype.slice.call(activators).forEach(function (activator) {
	            activator.addEventListener('click', _this.open);
	        });
	        var revealClose = this.$els.revealClose;
	        if (revealClose) {
	            revealClose.addEventListener('click', this.close);
	        }
	    };
	    Card.prototype.open = function () {
	        if (!this.active) {
	            this.active = true;
	            var reveal = this.$els.reveal;
	            if (reveal) {
	                reveal.style.display = 'block';
	                Velocity(reveal, "stop", false);
	                Velocity(reveal, { translateY: '-100%' }, { duration: 300, queue: false, easing: 'easeInOutQuad' });
	            }
	        }
	    };
	    Card.prototype.close = function () {
	        if (this.active) {
	            this.active = false;
	            var reveal = this.$els.reveal;
	            if (reveal) {
	                Velocity(reveal, { translateY: 0 }, {
	                    duration: 225,
	                    queue: false,
	                    easing: 'easeInOutQuad',
	                    complete: function complete() {
	                        reveal.style.display = 'none';
	                    }
	                });
	            }
	        }
	    };
	    Object.defineProperty(Card.prototype, "imageSlot", {
	        get: function get() {
	            return 'image' in this._slotContents;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Card.prototype, "titleSlot", {
	        get: function get() {
	            return 'title' in this._slotContents;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Card.prototype, "actionsSlot", {
	        get: function get() {
	            return 'actions' in this._slotContents;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Card.prototype, "revealSlot", {
	        get: function get() {
	            return 'reveal' in this._slotContents;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Card = __decorate([vue_class_component_1["default"]({
	        props: {
	            contentClass: {
	                required: false,
	                'default': null,
	                twoWay: false
	            },
	            titleInImage: {
	                type: Boolean,
	                required: false,
	                twoWay: false,
	                'default': false
	            },
	            small: {
	                type: Boolean,
	                required: false,
	                'default': false,
	                twoWay: false
	            },
	            medium: {
	                type: Boolean,
	                required: false,
	                'default': false,
	                twoWay: false
	            },
	            large: {
	                type: Boolean,
	                required: false,
	                'default': false,
	                twoWay: false
	            }
	        },
	        template: __webpack_require__(36)
	    })], Card);
	    return Card;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = Card;
	//# sourceMappingURL=index.js.map

/***/ },
/* 36 */
/***/ function(module, exports) {

	module.exports = "<div :style=\"{overflow: revealSlot ? 'hidden' : 'initial'}\"\r\n     :class=\"{small: small, medium: medium, large: large}\"\r\n     class=\"md-card card\">\r\n    <slot name=\"card-content\">\r\n        <slot name=\"card-image\">\r\n            <div v-if=\"imageSlot\" class=\"card-image\">\r\n                <slot name=\"image\"></slot>\r\n                <div v-if=\"titleSlot && titleInImage\" class=\"card-title\">\r\n                    <slot name=\"title\"></slot>\r\n                </div>\r\n            </div>\r\n        </slot>\r\n\r\n        <div class=\"card-content\" :class=\"contentClass\">\r\n            <div v-if=\"titleSlot && !titleInImage\" class=\"card-title\">\r\n                <slot name=\"title\"></slot>\r\n            </div>\r\n            <slot></slot>\r\n        </div>\r\n\r\n        <slot name=\"card-action\">\r\n            <div v-if=\"actionsSlot\" class=\"card-action\">\r\n                <slot name=\"actions\"></slot>\r\n            </div>\r\n        </slot>\r\n\r\n        <div v-if=\"revealSlot\" v-el:reveal class=\"card-reveal\">\r\n            <i v-el:reveal-close class=\"material-icons right close\">close</i>\r\n            <slot name=\"reveal\"></slot>\r\n        </div>\r\n    </slot>\r\n</div>";

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var vue_class_component_1 = __webpack_require__(19);
	var input_1 = __webpack_require__(12);
	var bind_boolean_1 = __webpack_require__(4);
	var CheckboxField = (function () {
	    function CheckboxField() {}
	    CheckboxField.prototype.hasSlot = function (name) {
	        if (name === void 0) {
	            name = 'default';
	        }
	        return name in this._slotContents;
	    };
	    Object.defineProperty(CheckboxField.prototype, "group", {
	        get: function get() {
	            return this.$parent.$data.group;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(CheckboxField.prototype, "resolvedName", {
	        get: function get() {
	            return this.name || this.group;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    CheckboxField = __decorate([vue_class_component_1["default"]({
	        props: {
	            value: {
	                type: Boolean,
	                required: false,
	                'default': null
	            },
	            name: {
	                type: String,
	                required: false,
	                'default': null
	            },
	            disabled: {
	                type: Boolean,
	                required: false,
	                'default': null
	            }
	        },
	        directives: {
	            bindBoolean: bind_boolean_1["default"]
	        },
	        mixins: [input_1["default"]],
	        template: __webpack_require__(38)
	    })], CheckboxField);
	    return CheckboxField;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = CheckboxField;
	//# sourceMappingURL=index.js.map

/***/ },
/* 38 */
/***/ function(module, exports) {

	module.exports = "<div class=\"md-checkbox input-field\">\r\n    <i v-if=\"hasSlot('icon-name')\" class=\"material-icons prefix\">\r\n        <slot name=\"icon-name\"></slot>\r\n    </i>\r\n    <input v-model=\"value\"\r\n           :id=\"id\"\r\n           :name=\"resolvedName\"\r\n           v-bind-boolean:disabled=\"disabled\"\r\n           type=\"checkbox\"/>\r\n    <label v-if=\"hasSlot()\" :for=\"id\">\r\n        <slot></slot>\r\n    </label>\r\n</div>";

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var vue_class_component_1 = __webpack_require__(19);
	var CheckboxGroup = (function () {
	    function CheckboxGroup() {}
	    CheckboxGroup = __decorate([vue_class_component_1["default"]({
	        props: {
	            group: {
	                type: String,
	                required: true
	            }
	        },
	        template: __webpack_require__(40)
	    })], CheckboxGroup);
	    return CheckboxGroup;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = CheckboxGroup;
	//# sourceMappingURL=index.js.map

/***/ },
/* 40 */
/***/ function(module, exports) {

	module.exports = "<div class=\"input-field\">\r\n    <slot></slot>\r\n</div>";

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var vue_class_component_1 = __webpack_require__(19);
	var Chip = (function () {
	    function Chip() {}
	    Chip = __decorate([vue_class_component_1["default"]({
	        props: {
	            closeable: {
	                type: Boolean,
	                required: false,
	                'default': false,
	                twoWay: false
	            },
	            closed: {
	                type: Boolean,
	                required: false,
	                'default': false
	            }
	        },
	        template: __webpack_require__(42)
	    })], Chip);
	    return Chip;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = Chip;
	//# sourceMappingURL=index.js.map

/***/ },
/* 42 */
/***/ function(module, exports) {

	module.exports = "<div v-if=\"!closed\" class=\"chip md-chip\" transition=\"chip\">\r\n    <slot></slot>\r\n    <i v-if=\"closeable\"\r\n       @click=\"closed = true\" class=\"material-icons\">close</i>\r\n</div>";

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var vue_class_component_1 = __webpack_require__(19);
	var CircularPreloader = (function () {
	    function CircularPreloader() {}
	    CircularPreloader = __decorate([vue_class_component_1["default"]({
	        props: {
	            size: {
	                type: String,
	                required: false,
	                'default': null,
	                twoWay: false
	            },
	            color: {
	                type: String,
	                required: false,
	                'default': null,
	                twoWay: false
	            },
	            flashing: {
	                type: Boolean,
	                required: false,
	                'default': false,
	                twoWay: false
	            }
	        },
	        template: __webpack_require__(44)
	    })], CircularPreloader);
	    return CircularPreloader;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = CircularPreloader;
	//# sourceMappingURL=index.js.map

/***/ },
/* 44 */
/***/ function(module, exports) {

	module.exports = "<div class=\"preloader-wrapper active\" :class=\"size\">\r\n    <div v-if=\"!flashing\" class=\"spinner-layer\" :class=\"'spinner-' + color + '-only'\">\r\n        <div class=\"circle-clipper left\">\r\n            <div class=\"circle\"></div>\r\n        </div>\r\n        <div class=\"gap-patch\">\r\n            <div class=\"circle\"></div>\r\n        </div>\r\n        <div class=\"circle-clipper right\">\r\n            <div class=\"circle\"></div>\r\n        </div>\r\n    </div>\r\n\r\n    <!-- flashing -->\r\n    <div v-if=\"flashing\" class=\"spinner-layer spinner-blue\">\r\n        <div class=\"circle-clipper left\">\r\n            <div class=\"circle\"></div>\r\n        </div>\r\n        <div class=\"gap-patch\">\r\n            <div class=\"circle\"></div>\r\n        </div>\r\n        <div class=\"circle-clipper right\">\r\n            <div class=\"circle\"></div>\r\n        </div>\r\n    </div>\r\n\r\n    <div v-if=\"flashing\" class=\"spinner-layer spinner-red\">\r\n        <div class=\"circle-clipper left\">\r\n            <div class=\"circle\"></div>\r\n        </div>\r\n        <div class=\"gap-patch\">\r\n            <div class=\"circle\"></div>\r\n        </div>\r\n        <div class=\"circle-clipper right\">\r\n            <div class=\"circle\"></div>\r\n        </div>\r\n    </div>\r\n\r\n    <div v-if=\"flashing\" class=\"spinner-layer spinner-yellow\">\r\n        <div class=\"circle-clipper left\">\r\n            <div class=\"circle\"></div>\r\n        </div>\r\n        <div class=\"gap-patch\">\r\n            <div class=\"circle\"></div>\r\n        </div>\r\n        <div class=\"circle-clipper right\">\r\n            <div class=\"circle\"></div>\r\n        </div>\r\n    </div>\r\n\r\n    <div v-if=\"flashing\" class=\"spinner-layer spinner-green\">\r\n        <div class=\"circle-clipper left\">\r\n            <div class=\"circle\"></div>\r\n        </div>\r\n        <div class=\"gap-patch\">\r\n            <div class=\"circle\"></div>\r\n        </div>\r\n        <div class=\"circle-clipper right\">\r\n            <div class=\"circle\"></div>\r\n        </div>\r\n    </div>\r\n</div>";

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var vue_class_component_1 = __webpack_require__(19);
	var Collapsible = (function () {
	    function Collapsible() {}
	    Collapsible.prototype.ready = function () {
	        var _this = this;
	        if (typeof this.opened != "undefined") {
	            if (this.expendable) {
	                this.opened.forEach(function (id) {
	                    return _this.$broadcast('collapsible::open', id, _this.expendable);
	                });
	            } else {
	                this.$broadcast('collapsible::open', this.opened, this.expendable);
	            }
	        }
	    };
	    Collapsible.prototype.open = function (id) {
	        if (typeof this.opened != "undefined") {
	            if (this.expendable) {
	                this.opened.push(id);
	            } else {
	                this.opened = id;
	            }
	        }
	        // propagate event to children
	        this.$broadcast('collapsible::open', id, this.expendable);
	        return true;
	    };
	    Collapsible.prototype.close = function (id) {
	        if (typeof this.opened != "undefined") {
	            if (this.expendable) {
	                this.opened.$remove(id);
	            } else {
	                this.opened = '';
	            }
	        }
	        // propagate event to children
	        this.$broadcast('collapsible::close', id);
	        return true;
	    };
	    Collapsible.prototype.openedChanged = function (value) {
	        var _this = this;
	        if (this.expendable) {
	            var ids = this.$children.filter(function (component) {
	                return component.$options.name == 'CollapsibleItem';
	            }).map(function (item) {
	                return item.id;
	            });
	            // close
	            ids.filter(function (val) {
	                return value.indexOf(val) < 0;
	            }).forEach(function (id) {
	                return _this.$broadcast('collapsible::close', id);
	            });
	            // open
	            this.opened = value;
	            this.opened.forEach(function (id) {
	                return _this.$broadcast('collapsible::open', id, _this.expendable);
	            });
	        } else {
	            this.$broadcast('collapsible::open', value, this.expendable);
	        }
	    };
	    Collapsible = __decorate([vue_class_component_1["default"]({
	        props: {
	            opened: {
	                required: false
	            },
	            popout: {
	                type: Boolean,
	                required: false,
	                'default': false,
	                twoWay: false
	            },
	            expendable: {
	                type: Boolean,
	                required: false,
	                'default': false,
	                twoWay: false
	            }
	        },
	        watch: {
	            expendable: function expendable() {
	                console.log('Error: can not change expandable');
	            },
	            opened: {
	                deep: true,
	                handler: function handler(newValue, oldValue) {
	                    this.openedChanged(newValue, oldValue);
	                }
	            }
	        },
	        events: {
	            'collapsible::open': function collapsibleOpen(id) {
	                return this.open(id);
	            },
	            'collapsible::close': function collapsibleClose(id) {
	                return this.close(id);
	            }
	        },
	        template: __webpack_require__(46)
	    })], Collapsible);
	    return Collapsible;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = Collapsible;
	//# sourceMappingURL=index.js.map

/***/ },
/* 46 */
/***/ function(module, exports) {

	module.exports = "<ul class=\"collapsible\" :class=\"{popout: popout}\">\r\n    <slot></slot>\r\n</ul>";

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var vue_class_component_1 = __webpack_require__(19);
	var events_1 = __webpack_require__(11);
	var Velocity = __webpack_require__(15);
	var CollapsibleItem = (function () {
	    function CollapsibleItem() {}
	    CollapsibleItem.prototype.data = function () {
	        return {
	            active: false
	        };
	    };
	    CollapsibleItem.prototype.compiled = function () {
	        this.active = this.expanded;
	    };
	    Object.defineProperty(CollapsibleItem.prototype, "id", {
	        get: function get() {
	            if (this.name) {
	                return this.name;
	            }
	            return this._uid;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(CollapsibleItem.prototype, "computedStyle", {
	        get: function get() {
	            if (this.active) {
	                return {
	                    display: 'block'
	                };
	            }
	            return null;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    CollapsibleItem.prototype.openThis = function (immediately) {
	        var _this = this;
	        if (immediately === void 0) {
	            immediately = false;
	        }
	        if (!this.active) {
	            this.active = true;
	            if (immediately) {
	                this.$els.body.style.height = '';
	            } else {
	                this.$nextTick(function () {
	                    Velocity(_this.$els.body, 'slideDown', _this._slideConfig);
	                });
	            }
	        }
	    };
	    Object.defineProperty(CollapsibleItem.prototype, "_slideConfig", {
	        get: function get() {
	            var _this = this;
	            return {
	                duration: 350,
	                easing: "easeOutQuart",
	                queue: false,
	                complete: function complete() {
	                    _this.$els.body.style.height = '';
	                }
	            };
	        },
	        enumerable: true,
	        configurable: true
	    });
	    CollapsibleItem.prototype.open = function (id, expendable) {
	        if (id === null || typeof id == "undefined") {
	            this.openThis(true); // bulk open
	        } else {
	                if (id == this.id) {
	                    this.openThis();
	                } else {
	                    if (!expendable) {
	                        this.closeThis();
	                    }
	                }
	            }
	    };
	    CollapsibleItem.prototype.closeThis = function (immediately) {
	        var _this = this;
	        if (immediately === void 0) {
	            immediately = false;
	        }
	        if (this.active) {
	            this.active = false;
	            if (immediately) {
	                this.$els.body.style.height = '';
	            } else {
	                this.$nextTick(function () {
	                    _this.$els.body.style.display = 'block';
	                    Velocity(_this.$els.body, 'slideUp', _this._slideConfig);
	                });
	            }
	        }
	    };
	    CollapsibleItem.prototype.close = function (id) {
	        if (id === null || typeof id == "undefined") {
	            this.closeThis(true); // bulk close
	        } else {
	                if (id == this.id) {
	                    this.closeThis();
	                }
	            }
	    };
	    CollapsibleItem.prototype.toggle = function () {
	        if (this.active) {
	            this.$dispatch('collapsible::close', this.id);
	        } else {
	            this.$dispatch('collapsible::open', this.id);
	        }
	    };
	    CollapsibleItem = __decorate([vue_class_component_1["default"]({
	        props: {
	            name: {
	                type: String,
	                required: false,
	                'default': false,
	                twoWay: false
	            },
	            expanded: {
	                type: Boolean,
	                required: false,
	                'default': false,
	                twoWay: false
	            }
	        },
	        mixins: [events_1["default"]],
	        events: {
	            'collapsible::open': function collapsibleOpen(id, expendable) {
	                this.open(id, expendable);
	            },
	            'collapsible::close': function collapsibleClose(id) {
	                this.close(id);
	            }
	        },
	        template: __webpack_require__(48)
	    })], CollapsibleItem);
	    return CollapsibleItem;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = CollapsibleItem;
	//# sourceMappingURL=index.js.map

/***/ },
/* 48 */
/***/ function(module, exports) {

	module.exports = "<li :class=\"{active: active}\">\r\n    <slot name=\"content\">\r\n        <div @click=\"toggle\" class=\"collapsible-header\">\r\n            <slot name=\"header\"></slot>\r\n        </div>\r\n        <div v-el:body class=\"collapsible-body\" :style=\"computedStyle\">\r\n            <slot name=\"body\"></slot>\r\n        </div>\r\n    </slot>\r\n</li>\r\n";

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var vue_class_component_1 = __webpack_require__(19);
	var Collection = (function () {
	    function Collection() {}
	    Object.defineProperty(Collection.prototype, "headerSlot", {
	        get: function get() {
	            return 'header' in this._slotContents;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Collection = __decorate([vue_class_component_1["default"]({
	        template: __webpack_require__(50)
	    })], Collection);
	    return Collection;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = Collection;
	//# sourceMappingURL=index.js.map

/***/ },
/* 50 */
/***/ function(module, exports) {

	module.exports = "<div class=\"collection\" :class=\"{'with-header': headerSlot}\">\r\n    <div v-if=\"headerSlot\" class=\"collection-header\">\r\n        <slot name=\"header\"></slot>\r\n    </div>\r\n    <slot></slot>\r\n</div>";

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var vue_class_component_1 = __webpack_require__(19);
	var CollectionList = (function () {
	    function CollectionList() {}
	    Object.defineProperty(CollectionList.prototype, "headerSlot", {
	        get: function get() {
	            return 'header' in this._slotContents;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    CollectionList = __decorate([vue_class_component_1["default"]({
	        template: __webpack_require__(52)
	    })], CollectionList);
	    return CollectionList;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = CollectionList;
	//# sourceMappingURL=index.js.map

/***/ },
/* 52 */
/***/ function(module, exports) {

	module.exports = "<ul class=\"collection\" :class=\"{'with-header': headerSlot}\">\r\n    <div v-if=\"headerSlot\" class=\"collection-header\">\r\n        <slot name=\"header\"></slot>\r\n    </div>\r\n    <slot></slot>\r\n</ul>";

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var vue_class_component_1 = __webpack_require__(19);
	var CollectionItem = (function () {
	    function CollectionItem() {}
	    Object.defineProperty(CollectionItem.prototype, "secondaryContentSlot", {
	        get: function get() {
	            return 'secondary-content' in this._slotContents;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    CollectionItem = __decorate([vue_class_component_1["default"]({
	        props: {
	            active: {
	                type: Boolean,
	                required: false,
	                'default': false,
	                twoWay: false
	            }
	        },
	        template: __webpack_require__(54)
	    })], CollectionItem);
	    return CollectionItem;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = CollectionItem;
	//# sourceMappingURL=index.js.map

/***/ },
/* 54 */
/***/ function(module, exports) {

	module.exports = "<a class=\"md-collection-item collection-item\" :class=\"{active: active}\">\r\n    <slot></slot>\r\n    <span v-if=\"secondaryContentSlot\" class=\"secondary-content\">\r\n        <slot name=\"secondary-content\"></slot>\r\n    </span>\r\n</a>";

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var vue_class_component_1 = __webpack_require__(19);
	var CollectionListItem = (function () {
	    function CollectionListItem() {}
	    Object.defineProperty(CollectionListItem.prototype, "secondaryContentSlot", {
	        get: function get() {
	            return 'secondary-content' in this._slotContents;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    CollectionListItem = __decorate([vue_class_component_1["default"]({
	        props: {
	            active: {
	                type: Boolean,
	                required: false,
	                'default': false,
	                twoWay: false
	            }
	        },
	        template: __webpack_require__(56)
	    })], CollectionListItem);
	    return CollectionListItem;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = CollectionListItem;
	//# sourceMappingURL=index.js.map

/***/ },
/* 56 */
/***/ function(module, exports) {

	module.exports = "<li class=\"md-collection-item collection-item\" :class=\"{active: active}\">\r\n    <slot></slot>\r\n    <span v-if=\"secondaryContentSlot\" class=\"secondary-content\">\r\n        <slot name=\"secondary-content\"></slot>\r\n    </span>\r\n</li>";

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var vue_class_component_1 = __webpack_require__(19);
	var button_1 = __webpack_require__(21);
	var dropdown_list_1 = __webpack_require__(58);
	var dropdown_item_1 = __webpack_require__(59);
	var click_away_1 = __webpack_require__(6);
	var Dropdown = (function () {
	    function Dropdown() {}
	    Dropdown.prototype.open = function (e) {
	        this.$broadcast('dropdown-list::open', e);
	    };
	    Dropdown.prototype.close = function () {
	        this.$broadcast('dropdown-list::close');
	    };
	    Dropdown = __decorate([vue_class_component_1["default"]({
	        props: {
	            title: {
	                type: String,
	                required: false,
	                'default': '',
	                twoWay: false
	            },
	            value: {
	                type: String,
	                required: false,
	                'default': ''
	            }
	        },
	        directives: {
	            onClickAway: click_away_1["default"]
	        },
	        components: {
	            mdButton: button_1["default"],
	            mdDropdownList: dropdown_list_1["default"],
	            mdDropdownItem: dropdown_item_1["default"]
	        },
	        events: {
	            'dropdown-list::close': function dropdownListClose() {
	                // emitted by item -> propagated do list
	                this.$broadcast('dropdown-list::close');
	                this.$dispatch('dropdown::close');
	            },
	            'dropdown-item::selected': function dropdownItemSelected(id) {
	                this.value = id;
	                return true;
	            },
	            'dropdown::open': function dropdownOpen(e) {
	                this.$broadcast('dropdown-list::open', e);
	            }
	        },
	        template: __webpack_require__(63)
	    })], Dropdown);
	    return Dropdown;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = Dropdown;
	//# sourceMappingURL=index.js.map

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var vue_class_component_1 = __webpack_require__(19);
	var button_1 = __webpack_require__(21);
	var dropdown_item_1 = __webpack_require__(59);
	var utils_1 = __webpack_require__(61);
	var DropdownList = (function () {
	    function DropdownList() {}
	    DropdownList.prototype.data = function () {
	        return {
	            active: false,
	            style: {}
	        };
	    };
	    DropdownList.prototype.toggle = function (e) {
	        (!this.active ? this.open : this.hide)(e);
	    };
	    DropdownList.prototype.open = function (e) {
	        if (!this.active) {
	            this.style = this.computeStyle(e.currentTarget);
	            this.active = true;
	        }
	    };
	    DropdownList.prototype.close = function () {
	        this.hide();
	    };
	    DropdownList.prototype.hide = function () {
	        if (this.active) {
	            this.style = {};
	            this.active = false;
	        }
	    };
	    DropdownList.prototype.computeStyle = function (element) {
	        var offset = utils_1["default"].getOffset(element);
	        var width = element.offsetWidth || 100;
	        var top = offset.top || 0;
	        var left = offset.left || 0;
	        return {
	            width: width + 'px',
	            position: 'absolute',
	            top: top + 'px',
	            left: left + 'px',
	            opacity: 1,
	            display: 'block'
	        };
	    };
	    DropdownList = __decorate([vue_class_component_1["default"]({
	        components: {
	            mbButton: button_1["default"],
	            mdDropdownItem: dropdown_item_1["default"]
	        },
	        events: {
	            "dropdown-list::close": function dropdownListClose() {
	                this.hide();
	            },
	            "dropdown-list::open": function dropdownListOpen(e) {
	                this.open(e);
	            }
	        },
	        template: __webpack_require__(62)
	    })], DropdownList);
	    return DropdownList;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = DropdownList;
	//# sourceMappingURL=index.js.map

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var vue_class_component_1 = __webpack_require__(19);
	var DropdownItem = (function () {
	    function DropdownItem() {}
	    DropdownItem.prototype.select = function () {
	        if (this.closing) {
	            this.$dispatch('dropdown-list::close');
	        }
	        this.$dispatch('dropdown-item::selected', this.id);
	    };
	    Object.defineProperty(DropdownItem.prototype, "id", {
	        get: function get() {
	            if (this.name) {
	                return this.name;
	            }
	            return this._uid;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    DropdownItem = __decorate([vue_class_component_1["default"]({
	        props: {
	            closing: {
	                type: Boolean,
	                required: false,
	                'default': true,
	                twoWay: false
	            },
	            name: {
	                type: String,
	                required: false,
	                'default': null,
	                twoWay: false
	            }
	        },
	        template: __webpack_require__(60)
	    })], DropdownItem);
	    return DropdownItem;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = DropdownItem;
	//# sourceMappingURL=index.js.map

/***/ },
/* 60 */
/***/ function(module, exports) {

	module.exports = "<li @click.prevent=\"select\">\r\n    <a href=\"javascript:void(0)\">\r\n        <slot></slot>\r\n    </a>\r\n</li>";

/***/ },
/* 61 */
/***/ function(module, exports) {

	"use strict";
	var Utils = (function () {
	    function Utils() {}
	    Utils.merge = function (objA, objB) {
	        var result = {};
	        Utils.addAll(result, objA);
	        Utils.addAll(result, objB);
	        return result;
	    };
	    ;
	    Utils.addAll = function (base, add) {
	        for (var key in add) {
	            base[key] = add[key];
	        }
	        return base;
	    };
	    Utils.getOffset = function (element) {
	        var top = 0,
	            left = 0;
	        do {
	            top += element.offsetTop || 0;
	            left += element.offsetLeft || 0;
	            element = element.offsetParent;
	        } while (element);
	        return {
	            top: top,
	            left: left
	        };
	    };
	    Utils.generatePagination = function (vm) {
	        var pager = [];
	        // generate window
	        var currentPage = vm.currentPage;
	        pager.push(currentPage);
	        var skip = 1;
	        while (pager.length < vm.displayPages && pager.length < vm.pages) {
	            var page = currentPage + skip;
	            if (page >= 0 && page < vm.pages) {
	                pager.push(page);
	            }
	            skip = skip > 0 ? skip * -1 : skip * -1 + 1;
	        }
	        pager = pager.sort(function (n1, n2) {
	            return n1 - n2;
	        });
	        return pager;
	    };
	    return Utils;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = Utils;
	//# sourceMappingURL=index.js.map

/***/ },
/* 62 */
/***/ function(module, exports) {

	module.exports = "<ul class=\"dropdown-content\"\r\n    :class=\"{active: active}\" :style=\"style\">\r\n    <slot></slot>\r\n</ul>\r\n";

/***/ },
/* 63 */
/***/ function(module, exports) {

	module.exports = "<div v-on-click-away=\"close\">\r\n    <md-dropdown-list>\r\n        <slot></slot>\r\n    </md-dropdown-list>\r\n\r\n    <span @click=\"open\">\r\n        <slot name=\"button\">\r\n            <md-button href=\"javascript:void(0)\"\r\n                 :class=\"{active: active}\"\r\n                 class=\"dropdown-button\">\r\n                {{title}}\r\n                <i class=\"mdi-navigation-arrow-drop-down right\"></i>\r\n            </md-button>\r\n        </slot>\r\n    </span>\r\n</div>\r\n";

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var vue_class_component_1 = __webpack_require__(19);
	var EventWrapper = (function () {
	    function EventWrapper() {}
	    EventWrapper.prototype.ready = function () {
	        var self = this;
	        this.events.forEach(function (event) {
	            self.$on(event, function () {
	                var args = [event].concat(Array.prototype.slice.call(arguments));
	                self.$broadcast.apply(self, args);
	            });
	        });
	    };
	    EventWrapper = __decorate([vue_class_component_1["default"]({
	        props: {
	            events: {
	                type: Array,
	                required: true
	            }
	        },
	        template: __webpack_require__(65)
	    })], EventWrapper);
	    return EventWrapper;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = EventWrapper;
	//# sourceMappingURL=index.js.map

/***/ },
/* 65 */
/***/ function(module, exports) {

	module.exports = "<slot></slot>";

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var vue_class_component_1 = __webpack_require__(19);
	var button_1 = __webpack_require__(21);
	var icon_1 = __webpack_require__(22);
	var Velocity = __webpack_require__(15);
	var Fab = (function () {
	    function Fab() {}
	    Fab.prototype.data = function () {
	        return {
	            active: false
	        };
	    };
	    Fab.prototype.ready = function () {
	        if (this.event == 'hover') {
	            this.$els.fab.addEventListener('mouseenter', this.open);
	            this.$els.fab.addEventListener('mouseleave', this.close);
	        } else {
	            this.$els.fab.addEventListener(this.event, this.toggle);
	        }
	    };
	    Fab.prototype.toggle = function () {
	        if (!this.active) {
	            this.open();
	        } else {
	            this.close();
	        }
	    };
	    Fab.prototype.open = function () {
	        if (!this.active) {
	            this.active = true;
	            var offsetY, offsetX;
	            if (this.horizontal) {
	                offsetX = 40;
	            } else {
	                offsetY = 40;
	            }
	            var items = Array.prototype.slice.call(this.$el.querySelectorAll('ul .btn-floating'));
	            Velocity(items, { scaleY: ".4", scaleX: ".4", translateY: offsetY + 'px', translateX: offsetX + 'px' }, { duration: 0 });
	            var time = 0;
	            items.reverse().forEach(function (item) {
	                Velocity(item, { opacity: "1", scaleX: "1", scaleY: "1", translateY: "0", translateX: '0' }, { duration: 80, delay: time });
	                time += 40;
	            });
	        }
	    };
	    Fab.prototype.close = function () {
	        if (this.active) {
	            this.active = false;
	            var offsetY, offsetX;
	            if (this.horizontal) {
	                offsetX = 40;
	            } else {
	                offsetY = 40;
	            }
	            var items = Array.prototype.slice.call(this.$el.querySelectorAll('ul .btn-floating'));
	            Velocity(items, "stop", true);
	            Velocity(items, { opacity: "0", scaleX: ".4", scaleY: ".4", translateY: offsetY + 'px', translateX: offsetX + 'px' }, { duration: 80 });
	        }
	    };
	    Fab = __decorate([vue_class_component_1["default"]({
	        props: {
	            horizontal: {
	                type: Boolean,
	                required: false,
	                'default': false
	            },
	            event: {
	                type: String,
	                required: false,
	                'default': 'hover'
	            }
	        },
	        components: {
	            mdButton: button_1["default"],
	            mdIcon: icon_1["default"]
	        },
	        template: __webpack_require__(67)
	    })], Fab);
	    return Fab;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = Fab;
	//# sourceMappingURL=index.js.map

/***/ },
/* 67 */
/***/ function(module, exports) {

	module.exports = "<div v-el:fab class=\"md-fab fixed-action-btn\" :class=\"{horizontal: horizontal}\">\r\n    <slot name=\"button\">\r\n        <md-button floating large class=\"red\">\r\n            <slot name=\"icon\">\r\n                <md-icon class=\"large\">\r\n                    <slot name=\"icon-name\">\r\n                        menu\r\n                    </slot>\r\n                </md-icon>\r\n            </slot>\r\n        </md-button>\r\n    </slot>\r\n    <ul :style=\"{visibility: active ? 'visible' : 'hidden'}\">\r\n        <slot></slot>\r\n    </ul>\r\n</div>";

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var vue_class_component_1 = __webpack_require__(19);
	var input_1 = __webpack_require__(12);
	var bind_boolean_1 = __webpack_require__(4);
	var FileInputField = (function () {
	    function FileInputField() {}
	    FileInputField.prototype.selectFile = function (e) {
	        this.value = Array.prototype.slice.call(e.target.files).map(function (f) {
	            return f.name;
	        }).join(', ');
	    };
	    FileInputField = __decorate([vue_class_component_1["default"]({
	        props: {
	            value: {
	                type: String,
	                required: false,
	                'default': null
	            },
	            name: {
	                type: String,
	                required: true
	            },
	            placeholder: {
	                type: String,
	                required: false,
	                'default': ''
	            },
	            multiple: {
	                type: Boolean,
	                required: false,
	                'default': false
	            }
	        },
	        directives: {
	            bindBoolean: bind_boolean_1["default"]
	        },
	        mixins: [input_1["default"]],
	        template: __webpack_require__(69)
	    })], FileInputField);
	    return FileInputField;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = FileInputField;
	//# sourceMappingURL=index.js.map

/***/ },
/* 69 */
/***/ function(module, exports) {

	module.exports = "<div class=\"file-field input-field\">\r\n    <div class=\"btn\">\r\n        <slot>\r\n            <span>File</span>\r\n        </slot>\r\n        <input @change=\"selectFile\" :name=\"name\"\r\n               v-bind-boolean:multiple=\"multiple\" type=\"file\">\r\n    </div>\r\n    <div class=\"file-path-wrapper\">\r\n        <input v-model=\"value\"\r\n               :placeholder=\"placeholder\"\r\n               class=\"file-path field\" type=\"text\">\r\n    </div>\r\n</div>";

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var vue_class_component_1 = __webpack_require__(19);
	var input_1 = __webpack_require__(12);
	var bind_boolean_1 = __webpack_require__(4);
	var InputField = (function () {
	    function InputField() {}
	    InputField.prototype.data = function () {
	        return {
	            active: false
	        };
	    };
	    Object.defineProperty(InputField.prototype, "hasValue", {
	        get: function get() {
	            if (typeof this.value == 'number') {
	                return this.value !== null && typeof this.value !== 'undefined';
	            } else {
	                return !!this.value;
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(InputField.prototype, "labelClasses", {
	        get: function get() {
	            return {
	                active: this.placeholder || this.active || this.hasValue,
	                disabled: this.disabled
	            };
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(InputField.prototype, "validationClass", {
	        get: function get() {
	            return {
	                invalid: this.errorMsg && this.valid == false,
	                valid: this.successMsg && this.valid == true
	            };
	        },
	        enumerable: true,
	        configurable: true
	    });
	    InputField.prototype.hasSlot = function (name) {
	        if (name === void 0) {
	            name = 'default';
	        }
	        return name in this._slotContents;
	    };
	    InputField.prototype.activateField = function () {
	        this.active = true;
	    };
	    InputField.prototype.deactivateField = function () {
	        this.active = false;
	    };
	    InputField = __decorate([vue_class_component_1["default"]({
	        props: {
	            value: {
	                required: false,
	                'default': null
	            },
	            name: {
	                type: String,
	                required: false,
	                'default': null,
	                twoWay: false
	            },
	            placeholder: {
	                type: String,
	                required: false,
	                'default': null,
	                twoWay: false
	            },
	            disabled: {
	                type: Boolean,
	                required: false,
	                'default': null,
	                twoWay: false
	            },
	            type: {
	                type: String,
	                required: false,
	                'default': 'text',
	                twoWay: false
	            },
	            lazy: {
	                type: Boolean,
	                required: false,
	                'default': false,
	                twoWay: false
	            },
	            number: {
	                type: Boolean,
	                required: false,
	                'default': false,
	                twoWay: false
	            },
	            debounce: {
	                type: Number,
	                required: false,
	                'default': 0,
	                twoWay: false
	            },
	            errorMsg: {
	                type: String,
	                required: false,
	                'default': null,
	                twoWay: false
	            },
	            successMsg: {
	                type: String,
	                required: false,
	                'default': null,
	                twoWay: false
	            },
	            valid: {
	                type: Boolean,
	                required: false,
	                'default': null,
	                twoWay: false
	            }
	        },
	        directives: {
	            bindBoolean: bind_boolean_1["default"]
	        },
	        mixins: [input_1["default"]],
	        template: __webpack_require__(71)
	    })], InputField);
	    return InputField;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = InputField;
	//# sourceMappingURL=index.js.map

/***/ },
/* 71 */
/***/ function(module, exports) {

	module.exports = "<div class=\"input-field\">\r\n    <i v-if=\"hasSlot('icon-name')\" class=\"material-icons prefix\">\r\n        <slot name=\"icon-name\"></slot>\r\n    </i>\r\n    <input v-if=\"disabled\"\r\n           v-model=\"value\"\r\n           :name=\"name\"\r\n           :placeholder=\"placeholder\" :id=\"id\"\r\n           :type=\"type\"\r\n           :lazy=\"lazy\"\r\n           v-bind-boolean:number=\"number\"\r\n           :debounce=\"debounce\"\r\n           disabled=\"disabled\"/>\r\n    <input v-else\r\n           v-model=\"value\"\r\n           :name=\"name\"\r\n           :placeholder=\"placeholder\" :id=\"id\"\r\n           :type=\"type\"\r\n           :lazy=\"lazy\"\r\n           v-bind-boolean:number=\"number\"\r\n           :debounce=\"debounce\"\r\n           @focus=\"activateField\"\r\n           @blur=\"deactivateField\"\r\n           class=\"validate\"\r\n           :class=\"validationClass\"/>\r\n    <label v-if=\"hasSlot()\" :for=\"id\" :class=\"labelClasses\"\r\n           :data-error=\"errorMsg\" :data-success=\"successMsg\">\r\n        <slot></slot>\r\n    </label>\r\n</div>";

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var vue_class_component_1 = __webpack_require__(19);
	var Optgroup = (function () {
	    function Optgroup() {}
	    Optgroup = __decorate([vue_class_component_1["default"]({
	        props: {
	            label: {
	                type: String,
	                required: false,
	                'default': false
	            }
	        },
	        template: __webpack_require__(73)
	    })], Optgroup);
	    return Optgroup;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = Optgroup;
	//# sourceMappingURL=index.js.map

/***/ },
/* 73 */
/***/ function(module, exports) {

	module.exports = "<li class=\"optgroup\">\r\n    <span>\r\n        {{label}}\r\n    </span>\r\n</li>\r\n<slot></slot>";

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var vue_class_component_1 = __webpack_require__(19);
	var bind_boolean_1 = __webpack_require__(4);
	var input_1 = __webpack_require__(12);
	var SelectOption = (function () {
	    function SelectOption() {}
	    SelectOption.prototype.data = function () {
	        return {
	            active: false
	        };
	    };
	    Object.defineProperty(SelectOption.prototype, "content", {
	        get: function get() {
	            return this._slotContents ? this._slotContents["default"] : '';
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(SelectOption.prototype, "multiple", {
	        get: function get() {
	            return this.$parent.multiple;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(SelectOption.prototype, "computedClasses", {
	        get: function get() {
	            return {
	                disabled: this.disabled,
	                active: this.active && !this.disabled,
	                selected: this.active && !this.disabled
	            };
	        },
	        enumerable: true,
	        configurable: true
	    });
	    SelectOption.prototype.toggle = function () {
	        if (!this.active) {
	            this.select();
	        } else {
	            this.unselect();
	        }
	    };
	    SelectOption.prototype.select = function () {
	        if (!this.active && !this.disabled) {
	            this.active = true;
	            this.$dispatch('select::select', this.value);
	        }
	    };
	    SelectOption.prototype.unselect = function () {
	        if (this.active && this.multiple) {
	            this.active = false;
	            this.$dispatch('select::unselect', this.value, this);
	        }
	    };
	    SelectOption.prototype.optionSelect = function (value) {
	        if (this.multiple) {
	            if (!this.active && this.value == value) {
	                this.active = true;
	            }
	        } else {
	            if (this.value == value) {
	                this.active = true;
	            } else {
	                this.active = false;
	            }
	        }
	    };
	    SelectOption.prototype.optionUnselect = function (value) {
	        if (this.multiple) {
	            if (this.active && this.value == value) {
	                this.active = false;
	            }
	        } else {
	            if (this.value == value) {
	                this.active = false;
	            }
	        }
	    };
	    SelectOption = __decorate([vue_class_component_1["default"]({
	        props: {
	            disabled: {
	                type: Boolean,
	                required: false,
	                'default': false
	            },
	            value: {
	                type: String,
	                required: true
	            }
	        },
	        events: {
	            'option::select': function optionSelect(value) {
	                this.optionSelect(value);
	            },
	            'option::unselect': function optionUnselect(value) {
	                this.optionUnselect(value);
	            }
	        },
	        directives: {
	            bindBoolean: bind_boolean_1["default"]
	        },
	        mixins: [input_1["default"]],
	        template: __webpack_require__(75)
	    })], SelectOption);
	    return SelectOption;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = SelectOption;
	//# sourceMappingURL=index.js.map

/***/ },
/* 75 */
/***/ function(module, exports) {

	module.exports = "<li @click.prevent=\"toggle\" :class=\"computedClasses\">\r\n    <span>\r\n        <input v-show=\"multiple\" v-model=\"active\"\r\n               v-bind-boolean:disabled=\"disabled\"\r\n               type=\"checkbox\">\r\n        <label v-if=\"multiple\"></label>\r\n        <slot></slot>\r\n    </span>\r\n</li>";

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var vue_class_component_1 = __webpack_require__(19);
	var bind_boolean_1 = __webpack_require__(4);
	var bind_raw_1 = __webpack_require__(5);
	var input_1 = __webpack_require__(12);
	var Radio = (function () {
	    function Radio() {}
	    Object.defineProperty(Radio.prototype, "field", {
	        get: function get() {
	            return this.$els.field;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Radio.prototype, "group", {
	        get: function get() {
	            return this.$parent.group;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Radio.prototype.hasSlot = function (name) {
	        if (name === void 0) {
	            name = 'default';
	        }
	        return name in this._slotContents;
	    };
	    Radio = __decorate([vue_class_component_1["default"]({
	        props: {
	            value: {
	                type: String,
	                required: false,
	                'default': null
	            },
	            radioValue: {
	                required: true
	            },
	            disabled: {
	                type: Boolean,
	                required: false,
	                'default': false
	            }
	        },
	        directives: {
	            bindBoolean: bind_boolean_1["default"],
	            bindRaw: bind_raw_1["default"]
	        },
	        mixins: [input_1["default"]],
	        template: __webpack_require__(77)
	    })], Radio);
	    return Radio;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = Radio;
	//# sourceMappingURL=index.js.map

/***/ },
/* 77 */
/***/ function(module, exports) {

	module.exports = "<span class=\"md-radio\">\r\n    <input v-model=\"value\"\r\n           :value=\"radioValue\"\r\n           v-bind-boolean:disabled=\"disabled\"\r\n           v-bind-boolean:checked=\"checked\"\r\n           :id=\"id\" :name=\"group\"\r\n           type=\"radio\"/>\r\n    <label v-if=\"hasSlot()\" :for=\"id\">\r\n        <slot></slot>\r\n    </label>\r\n</span>";

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var vue_class_component_1 = __webpack_require__(19);
	var RadioGroup = (function () {
	    function RadioGroup() {}
	    RadioGroup = __decorate([vue_class_component_1["default"]({
	        props: {
	            group: {
	                type: String,
	                required: true
	            }
	        },
	        template: __webpack_require__(79)
	    })], RadioGroup);
	    return RadioGroup;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = RadioGroup;
	//# sourceMappingURL=index.js.map

/***/ },
/* 79 */
/***/ function(module, exports) {

	module.exports = "<div class=\"input-field\">\r\n    <slot></slot>\r\n</div>";

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var vue_class_component_1 = __webpack_require__(19);
	var dropdown_list_1 = __webpack_require__(58);
	var input_1 = __webpack_require__(12);
	var click_away_1 = __webpack_require__(6);
	var bind_boolean_1 = __webpack_require__(4);
	var Vue = Vue || __webpack_require__(2);
	var SelectField = (function () {
	    function SelectField() {}
	    SelectField.prototype.data = function () {
	        return {
	            active: false,
	            options: {}
	        };
	    };
	    SelectField.prototype.compiled = function () {
	        var options = this.$getAllChildren().filter(function (c) {
	            return 'SelectOption' == c.$options.name;
	        });
	        for (var i = 0; i < options.length; i++) {
	            var option = options[i];
	            var opt = this.createOption(option);
	            Vue.set(this.options, opt.value, opt);
	        }
	    };
	    SelectField.prototype.ready = function () {
	        this.refreshDropdownOptions();
	    };
	    SelectField.prototype.createOption = function (option) {
	        var content = option.content.textContent;
	        if (option._scope) {
	            content = option._scope.$interpolate(content);
	        }
	        var value = option.value;
	        var disabled = option.disabled;
	        return {
	            content: content,
	            value: value,
	            disabled: disabled
	        };
	    };
	    Object.defineProperty(SelectField.prototype, "multiple", {
	        get: function get() {
	            return Array.isArray(this.value);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(SelectField.prototype, "valueContent", {
	        get: function get() {
	            return Array.isArray(this.value) ? this.valueContentMultiple : this.valueContentSingle;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(SelectField.prototype, "valueContentSingle", {
	        get: function get() {
	            return this.options[this.value] ? this.options[this.value].content : '';
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(SelectField.prototype, "valueContentMultiple", {
	        get: function get() {
	            var _this = this;
	            if (this.value.length) {
	                return this.value.map(function (value) {
	                    return _this.options[value] ? _this.options[value].content : '';
	                }).join(', ');
	            } else {
	                return this.options[this.defaultSelect] ? this.options[this.defaultSelect].content : '';
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(SelectField.prototype, "field", {
	        get: function get() {
	            return this.$els.field;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    SelectField.prototype.hasSlot = function (name) {
	        if (name === void 0) {
	            name = 'default';
	        }
	        return name in this._slotContents;
	    };
	    SelectField.prototype.refreshDropdownOptions = function () {
	        var _this = this;
	        var options = Array.prototype.slice.call(this.field.options);
	        options.forEach(function (o) {
	            if (o.selected) {
	                _this.$broadcast('option::select', o.value);
	            } else if (_this.multiple) {
	                _this.$broadcast('option::unselect', o.value);
	            }
	        });
	    };
	    SelectField.prototype.open = function (e) {
	        if (!this.active) {
	            this.active = true;
	            this.$broadcast('dropdown-list::open', e);
	        }
	    };
	    SelectField.prototype.close = function () {
	        if (this.active) {
	            this.active = false;
	            this.$broadcast('dropdown-list::close');
	        }
	    };
	    SelectField = __decorate([vue_class_component_1["default"]({
	        props: {
	            value: {
	                required: false,
	                'default': null
	            },
	            name: {
	                type: String,
	                required: false,
	                'default': null,
	                twoWay: false
	            }
	        },
	        events: {
	            'select::select': function selectSelect(value) {
	                if (Array.isArray(this.value)) {
	                    this.value.push(value);
	                } else {
	                    this.value = value;
	                    this.close();
	                }
	                this.$broadcast('option::select', value);
	                return true;
	            },
	            'select::unselect': function selectUnselect(value) {
	                if (Array.isArray(this.value)) {
	                    this.value.$remove(value);
	                } else {
	                    this.value = value;
	                }
	                this.$broadcast('option::unselect', value);
	                return true;
	            }
	        },
	        watch: {
	            value: function value() {
	                this.$nextTick(this.refreshDropdownOptions);
	            }
	        },
	        components: {
	            mdDropdownList: dropdown_list_1["default"]
	        },
	        directives: {
	            clickAway: click_away_1["default"],
	            bindBoolean: bind_boolean_1["default"]
	        },
	        mixins: [input_1["default"]],
	        template: __webpack_require__(81)
	    })], SelectField);
	    return SelectField;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = SelectField;
	//# sourceMappingURL=index.js.map

/***/ },
/* 81 */
/***/ function(module, exports) {

	module.exports = "<div class=\"md-select input-field\" v-click-away=\"close\">\r\n    <i v-if=\"hasSlot('icon-name')\" class=\"material-icons prefix\">\r\n        <slot name=\"icon-name\"></slot>\r\n    </i>\r\n    <div class=\"select-wrapper\">\r\n        <span class=\"caret\">▼</span>\r\n        <input @click=\"open\" readonly=\"readonly\" :value=\"valueContent\" :name=\"name\"\r\n               type=\"text\" class=\"select-dropdown\">\r\n\r\n        <md-dropdown-list :active=\"active\" class=\"select-dropdown\">\r\n            <slot></slot>\r\n        </md-dropdown-list>\r\n\r\n        <select v-el:field\r\n                v-model=\"value\"\r\n                v-bind-boolean:multiple=\"multiple\"\r\n                :placeholder=\"placeholder\" :id=\"id\"\r\n                :type=\"type\">\r\n            <option v-for=\"opt in options\" :value=\"opt.value\" v-bind-boolean:disabled=\"opt.disabled\">{{opt.content}}</option>\r\n        </select>\r\n    </div>\r\n    <label v-if=\"hasSlot('label')\" :for=\"id\" :class=\"labelClasses\">\r\n        <slot name=\"label\"></slot>\r\n    </label>\r\n</div>";

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var vue_class_component_1 = __webpack_require__(19);
	var input_1 = __webpack_require__(12);
	var TextArea = (function () {
	    function TextArea() {}
	    TextArea.prototype.data = function () {
	        return {
	            active: false
	        };
	    };
	    TextArea.prototype.ready = function () {
	        this.chars = this.value ? this.value.length : 0;
	    };
	    Object.defineProperty(TextArea.prototype, "labelClasses", {
	        get: function get() {
	            return {
	                active: this.active || this.value,
	                disabled: this.disabled
	            };
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(TextArea.prototype, "lines", {
	        get: function get() {
	            return this.value ? this.value.split('\n').length : 0;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(TextArea.prototype, "field", {
	        get: function get() {
	            return this.$els.field;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    TextArea.prototype.hasSlot = function (name) {
	        if (name === void 0) {
	            name = 'default';
	        }
	        return name in this._slotContents;
	    };
	    TextArea.prototype.resize = function (e) {
	        var chars = e.target.value ? e.target.value.length : 0;
	        var styles = window.getComputedStyle(this.field);
	        var paddingVertical = parseInt(styles.getPropertyValue('padding-bottom')) + parseInt(styles.getPropertyValue('padding-top'));
	        if (chars < this.chars) {
	            this.field.style.height = 'auto';
	        }
	        this.field.style.height = this.field.scrollHeight - paddingVertical + 'px';
	        // Velocity(this.field, {height: this.field.scrollHeight - paddingVertical}, {
	        //     duration: 10
	        // });
	        this.chars = chars;
	    };
	    TextArea.prototype.delayedResize = function (e) {
	        var _this = this;
	        window.setTimeout(function () {
	            _this.resize(e);
	        }, 0);
	    };
	    TextArea.prototype.activateField = function () {
	        this.active = true;
	    };
	    TextArea.prototype.deactivateField = function () {
	        this.active = false;
	    };
	    TextArea = __decorate([vue_class_component_1["default"]({
	        props: {
	            value: {
	                type: String,
	                required: false,
	                'default': null
	            },
	            name: {
	                type: String,
	                required: false,
	                'default': null,
	                twoWay: false
	            },
	            disabled: {
	                type: Boolean,
	                required: false,
	                'default': null,
	                twoWay: false
	            },
	            autoresize: {
	                type: Boolean,
	                required: false,
	                'default': true,
	                twoWay: false
	            },
	            lazy: {
	                type: Boolean,
	                required: false,
	                'default': false,
	                twoWay: false
	            },
	            number: {
	                type: Boolean,
	                required: false,
	                'default': false,
	                twoWay: false
	            },
	            debounce: {
	                "type": Number,
	                "required": false,
	                "default": 0,
	                "twoWay": false
	            }
	        },
	        mixins: [input_1["default"]],
	        template: __webpack_require__(83)
	    })], TextArea);
	    return TextArea;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = TextArea;
	//# sourceMappingURL=index.js.map

/***/ },
/* 83 */
/***/ function(module, exports) {

	module.exports = "<div class=\"md-textarea input-field\">\r\n    <i v-if=\"hasSlot('icon-name')\" class=\"material-icons prefix\">\r\n        <slot name=\"icon-name\"></slot>\r\n    </i>\r\n    <textarea v-if=\"disabled\"\r\n              v-el:field\r\n              v-model=\"value\"\r\n              :name=\"name\"\r\n              :id=\"id\" class=\"materialize-textarea\"\r\n              :lazy=\"lazy\" :number=\"number\" :debounce=\"debounce\"\r\n              disabled=\"disabled\">\r\n    </textarea>\r\n    <textarea v-else\r\n              v-el:field\r\n              v-model=\"value\"\r\n              :name=\"name\"\r\n              :id=\"id\"\r\n              :lazy=\"lazy\" :number=\"number\" :debounce=\"debounce\"\r\n              @focus=\"activateField\"\r\n              @blur=\"deactivateField\"\r\n              @keyup=\"resize\"\r\n              class=\"materialize-textarea\">\r\n    </textarea>\r\n    <label v-if=\"hasSlot()\" :for=\"id\" :class=\"labelClasses\">\r\n        <slot></slot>\r\n    </label>\r\n</div>";

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var vue_class_component_1 = __webpack_require__(19);
	var materialbox_1 = __webpack_require__(85);
	var lean_overlay_1 = __webpack_require__(86);
	var ESC = 27;
	var Image = (function () {
	    function Image() {}
	    Image.prototype.data = function () {
	        return {
	            active: false
	        };
	    };
	    Image.prototype.compiled = function () {
	        this.$els.img.setAttribute('src', this.src);
	    };
	    Image.prototype.ready = function () {
	        var _this = this;
	        var img = this.$els.img;
	        var placeholder = this.$els.placeholder;
	        this.materialBox = new materialbox_1["default"](img, placeholder);
	        // Return on ESC
	        window.addEventListener('keyup', function (e) {
	            if (e.keyCode === ESC) {
	                _this.close();
	            }
	        });
	        window.addEventListener("scroll", function () {
	            _this.close();
	        });
	    };
	    Image.prototype.toggle = function () {
	        if (this.active) {
	            this.close();
	        } else {
	            this.maximialize();
	        }
	    };
	    Image.prototype.maximialize = function () {
	        if (!this.active) {
	            this.active = true;
	            this.originalSizes = this.getSizes();
	            this.materialBox.maximalize(this.originalSizes);
	        }
	    };
	    Image.prototype.close = function () {
	        if (this.active) {
	            this.active = false;
	            this.materialBox.close(this.originalSizes);
	        }
	    };
	    Image.prototype.getSizes = function () {
	        var el = this.$els.img;
	        return {
	            width: el.offsetWidth,
	            height: el.offsetHeight,
	            left: el.offsetLeft,
	            top: el.offsetTop
	        };
	    };
	    Image = __decorate([vue_class_component_1["default"]({
	        props: {
	            src: {
	                type: String,
	                required: true,
	                twoWay: false
	            },
	            caption: {
	                type: String,
	                required: false,
	                "default": null,
	                twoWay: false
	            },
	            height: {
	                type: String,
	                required: false,
	                "default": null,
	                twoWay: false
	            },
	            width: {
	                type: String,
	                required: false,
	                "default": null,
	                twoWay: false
	            }
	        },
	        components: {
	            mdLeanOverlay: lean_overlay_1["default"]
	        },
	        template: __webpack_require__(88)
	    })], Image);
	    return Image;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = Image;
	//# sourceMappingURL=index.js.map

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Velocity = __webpack_require__(15);
	var inDuration = 275;
	var outDuration = 200;
	var MaterialBox = (function () {
	    function MaterialBox(img, placeholder) {
	        this.overlayActive = false;
	        this.img = img;
	        this.placeholder = placeholder;
	    }
	    MaterialBox.prototype.maximalize = function (sizes) {
	        var originalWidth = sizes.width;
	        var originalHeight = sizes.height;
	        var ancestorsChanged;
	        var ancestor;
	        var windowWidth = window.innerWidth;
	        var windowHeight = window.innerHeight;
	        // Set states
	        this.overlayActive = true;
	        // Set positioning for placeholder
	        this.placeholder.style.width = this.placeholder.offsetWidth + 'px';
	        this.placeholder.style.height = this.placeholder.offsetHeight + 'px';
	        this.placeholder.style.position = 'relative';
	        this.placeholder.style.top = 0 + 'px';
	        this.placeholder.style.left = 0 + 'px';
	        // Find ancestor with overflow: hidden; and remove it
	        ancestorsChanged = undefined;
	        ancestor = this.placeholder.parentElement;
	        var count = 0;
	        while (ancestor !== null && ancestor !== document) {
	            var curr = ancestor;
	            if (curr.style.overflow === 'hidden') {
	                curr.style.overflow = 'visible';
	                if (ancestorsChanged === undefined) {
	                    ancestorsChanged = curr;
	                } else {
	                    ancestorsChanged = ancestorsChanged.add(curr);
	                }
	            }
	            ancestor = ancestor.parentElement;
	        }
	        // Set css on origin
	        this.img.style.position = 'absolute';
	        this.img.style.zIndex = '1003';
	        // Resize Image
	        var ratio = 0;
	        var widthPercent = originalWidth / windowWidth;
	        var heightPercent = originalHeight / windowHeight;
	        var newWidth = 0;
	        var newHeight = 0;
	        if (widthPercent > heightPercent) {
	            ratio = originalHeight / originalWidth;
	            newWidth = windowWidth * 0.9;
	            newHeight = windowWidth * 0.9 * ratio;
	        } else {
	            ratio = originalWidth / originalHeight;
	            newWidth = windowHeight * 0.9 * ratio;
	            newHeight = windowHeight * 0.9;
	        }
	        // Animate image + set z-index
	        if (this.img.classList.contains('responsive-img')) {
	            Velocity(this.img, { 'max-width': newWidth, 'width': originalWidth }, { duration: 0, queue: false,
	                complete: function complete() {
	                    this.img.style.left = 0 + 'px';
	                    this.img.style.top = 0 + 'px';
	                    Velocity(this.img, {
	                        height: newHeight,
	                        width: newWidth,
	                        left: window.scrollX + windowWidth / 2 - this.placeholder.offsetLeft - newWidth / 2,
	                        top: window.scrollY + windowHeight / 2 - this.placeholder.offsetTop - newHeight / 2
	                    }, {
	                        duration: inDuration,
	                        queue: false,
	                        easing: 'easeOutQuad'
	                    });
	                } // End Complete
	            }); // End Velocity
	        } else {
	                this.img.style.left = 0 + 'px';
	                this.img.style.top = 0 + 'px';
	                Velocity(this.img, {
	                    height: newHeight,
	                    width: newWidth,
	                    left: window.scrollX + windowWidth / 2 - this.placeholder.offsetLeft - newWidth / 2,
	                    top: window.scrollY + windowHeight / 2 - this.placeholder.offsetTop - newHeight / 2
	                }, {
	                    duration: inDuration,
	                    queue: false,
	                    easing: 'easeOutQuad'
	                }); // End Velocity
	            }
	        // Return on scroll
	        window.addEventListener('scroll', function () {
	            if (this.overlayActive) {
	                this.returnToOriginal();
	            }
	        });
	    };
	    ;
	    MaterialBox.prototype.close = function (sizes) {
	        this.returnToOriginal(sizes);
	    };
	    MaterialBox.prototype.returnToOriginal = function (sizes) {
	        var windowWidth = window.innerWidth;
	        var windowHeight = window.innerHeight;
	        var originalWidth = sizes.width;
	        var originalHeight = sizes.height;
	        Velocity(this.img, "stop", true);
	        // Resize Image
	        Velocity(this.img, {
	            width: originalWidth,
	            height: originalHeight,
	            left: 0,
	            top: 0
	        }, {
	            duration: outDuration,
	            queue: false, easing: 'easeOutQuad'
	        });
	        this.img.style.height = '';
	        this.img.style.top = '';
	        this.img.style.left = '';
	        this.img.style.width = '';
	        this.img.style.maxWidth = '';
	        this.img.style.position = '';
	        this.img.style.zIndex = '';
	    };
	    ;
	    return MaterialBox;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports['default'] = MaterialBox;
	//# sourceMappingURL=index.js.map

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var vue_class_component_1 = __webpack_require__(19);
	var LeanOverlay = (function () {
	    function LeanOverlay() {}
	    LeanOverlay = __decorate([vue_class_component_1["default"]({
	        template: __webpack_require__(87)
	    })], LeanOverlay);
	    return LeanOverlay;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = LeanOverlay;
	//# sourceMappingURL=index.js.map

/***/ },
/* 87 */
/***/ function(module, exports) {

	module.exports = "<div class=\"lean-overlay\" style=\"z-index: 1002; display: block; opacity: 0.5;\"></div>";

/***/ },
/* 88 */
/***/ function(module, exports) {

	module.exports = "<div class=\"md-image\">\r\n    <div v-el:placeholder class=\"material-placeholder\">\r\n        <img @click=\"toggle\" :height=\"height\" :width=\"width\"\r\n             v-el:img\r\n             class=\"materialboxed\"\r\n             :class=\"{active: active}\">\r\n    </div>\r\n\r\n    <md-lean-overlay v-if=\"active\" @click=\"toggle\" transition=\"modal-overlay\"></md-lean-overlay>\r\n    <div v-if=\"active && caption\" transition=\"fade\" class=\"caption-wrapper\">\r\n        <div class=\"materialbox-caption\" style=\"display: block\">\r\n            {{caption}}\r\n        </div>\r\n    </div>\r\n</div>\r\n";

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var vue_class_component_1 = __webpack_require__(19);
	var LinearPreloader = (function () {
	    function LinearPreloader() {}
	    Object.defineProperty(LinearPreloader.prototype, "computedStyle", {
	        get: function get() {
	            if (this.value != null) {
	                return {
	                    width: this.value + '%'
	                };
	            }
	            return null;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    LinearPreloader = __decorate([vue_class_component_1["default"]({
	        props: {
	            value: {
	                type: Number,
	                required: false,
	                'default': null,
	                twoWay: false
	            }
	        },
	        template: __webpack_require__(90)
	    })], LinearPreloader);
	    return LinearPreloader;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = LinearPreloader;
	//# sourceMappingURL=index.js.map

/***/ },
/* 90 */
/***/ function(module, exports) {

	module.exports = "<div class=\"progress\">\r\n    <div :class=\"{determinate: value != null, indeterminate: value == null}\" :style=\"computedStyle\"></div>\r\n</div>";

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var vue_class_component_1 = __webpack_require__(19);
	var lean_overlay_1 = __webpack_require__(86);
	var ESC = 27;
	var Modal = (function () {
	    function Modal() {}
	    Modal.prototype.data = function () {
	        return {
	            active: false
	        };
	    };
	    Modal.prototype.ready = function () {
	        var _this = this;
	        window.document.addEventListener('keydown', function (evt) {
	            evt = evt || window.event;
	            if (evt.keyCode == ESC) {
	                _this.close();
	            }
	        });
	    };
	    Object.defineProperty(Modal.prototype, "computedStyle", {
	        get: function get() {
	            if (this.active) {
	                return this.bottom ? {
	                    'z-index': 1003,
	                    'display': 'block',
	                    'opacity': 1,
	                    'bottom': '0px'
	                } : {
	                    'z-index': 1003,
	                    'display': 'block',
	                    'top': '10%'
	                };
	            }
	            return null;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Modal.prototype, "computedClasses", {
	        get: function get() {
	            var classes = '';
	            if (this["class"]) {
	                classes += this["class"];
	            }
	            if (this.bottom) {
	                classes += ' ';
	                classes += 'bottom-sheet';
	            }
	            return classes;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Modal.prototype, "transition", {
	        get: function get() {
	            return this.bottom ? 'modal-bottom' : 'modal';
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Modal.prototype.open = function () {
	        if (!this.active) {
	            this.active = true;
	        }
	    };
	    Modal.prototype.close = function () {
	        if (this.active) {
	            this.active = false;
	            this.result = null;
	        }
	    };
	    Modal = __decorate([vue_class_component_1["default"]({
	        props: {
	            id: {
	                type: String,
	                required: false,
	                'default': null
	            },
	            result: {
	                type: String,
	                required: false,
	                'default': null
	            },
	            'class': {
	                type: String,
	                required: false,
	                'default': '',
	                twoWay: false
	            },
	            bottom: {
	                type: Boolean,
	                required: false,
	                'default': false,
	                twoWay: false
	            }
	        },
	        components: {
	            mdLeanOverlay: lean_overlay_1["default"]
	        },
	        events: {
	            'modal::open': function modalOpen(id) {
	                if (this.id === null || typeof this.id === "undefined") {
	                    this.open();
	                } else if (this.id == id) {
	                    this.open();
	                }
	            },
	            'modal::close': function modalClose(result, id) {
	                if (this.id === null || typeof this.id === "undefined" || this.id == id) {
	                    this.close();
	                    this.result = result;
	                    return true;
	                }
	            }
	        },
	        watch: {
	            active: function active(_active) {
	                if (_active) {
	                    window.document.body.style.overflow = 'hidden';
	                } else {
	                    window.document.body.style.overflow = 'visible';
	                }
	            }
	        },
	        template: __webpack_require__(92)
	    })], Modal);
	    return Modal;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = Modal;
	//# sourceMappingURL=index.js.map

/***/ },
/* 92 */
/***/ function(module, exports) {

	module.exports = "<div v-if=\"active\" :id=\"id\" :transition=\"transition\"\r\n     :style=\"computedStyle\" class=\"modal\" :class=\"computedClasses\">\r\n    <slot name=\"content\">\r\n        <div class=\"modal-content\">\r\n            <slot></slot>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n            <slot name=\"footer\"></slot>\r\n        </div>\r\n    </slot>\r\n</div>\r\n\r\n<md-lean-overlay v-if=\"active\" transition=\"modal-overlay\"\r\n                 @click=\"close\">\r\n</md-lean-overlay>";

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var vue_class_component_1 = __webpack_require__(19);
	var NavItem = (function () {
	    function NavItem() {}
	    NavItem.prototype.ready = function () {
	        if (this.active == true) {
	            this.$dispatch('nav-item::activated', this.id);
	        }
	    };
	    Object.defineProperty(NavItem.prototype, "id", {
	        get: function get() {
	            if (this.name != null) {
	                return this.name;
	            }
	            return this._uid;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(NavItem.prototype, "content", {
	        get: function get() {
	            return this._slotContents ? this._slotContents["default"] : '';
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(NavItem.prototype, "showActive", {
	        get: function get() {
	            return this.$parent.showActive;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    NavItem.prototype.clicked = function () {
	        this.$dispatch('nav-item::activated', this.id);
	    };
	    NavItem = __decorate([vue_class_component_1["default"]({
	        props: {
	            name: {
	                type: String,
	                required: false,
	                'default': null,
	                twoWay: false
	            },
	            href: {
	                type: String,
	                required: false,
	                'default': 'javascript:void(0)',
	                twoWay: false
	            },
	            active: {
	                type: Boolean,
	                required: false,
	                'default': false
	            }
	        },
	        events: {
	            'nav-item::activated': function navItemActivated(id) {
	                if (this.showActive == true) {
	                    this.active = this.id == id;
	                }
	            }
	        },
	        template: __webpack_require__(94)
	    })], NavItem);
	    return NavItem;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = NavItem;
	//# sourceMappingURL=index.js.map

/***/ },
/* 94 */
/***/ function(module, exports) {

	module.exports = "<li @click=\"clicked\" :class=\"{active: active}\">\r\n    <slot name=\"content\">\r\n        <a :href=\"href\">\r\n            <slot></slot>\r\n        </a>\r\n    </slot>\r\n</li>";

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var vue_class_component_1 = __webpack_require__(19);
	var icon_1 = __webpack_require__(22);
	var wave_effect_1 = __webpack_require__(8);
	var utils_1 = __webpack_require__(61);
	var Pagination = (function () {
	    function Pagination() {}
	    Object.defineProperty(Pagination.prototype, "pages", {
	        get: function get() {
	            return Math.max(Math.ceil(this.totalRecords / this.pageSize), 1);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Pagination.prototype, "pager", {
	        get: function get() {
	            return utils_1["default"].generatePagination(this);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Pagination.prototype.getSelected = function () {
	        return {
	            currentPage: this.currentPage,
	            pageSize: this.pageSize,
	            from: this.currentPage * this.pageSize,
	            to: (this.currentPage + 1) * this.pageSize,
	            size: this.pageSize
	        };
	    };
	    Pagination.prototype.getClasses = function (n) {
	        var classes = {};
	        if (this.itemClass instanceof Array) {
	            this.itemClass.forEach(function (value, index, array) {
	                classes[value] = true;
	            });
	        } else if (this.itemClass instanceof Object) {
	            for (var key in this.itemClass) {
	                classes[key] = this.itemClass[key];
	            }
	        } else {
	            classes[this.itemClass] = true;
	        }
	        classes['active'] = n == this.currentPage;
	        return classes;
	    };
	    Pagination.prototype.setCurrentPage = function (n) {
	        this.currentPage = n;
	    };
	    Pagination.prototype.previousPage = function () {
	        if (this.currentPage > 0) {
	            this.currentPage--;
	        }
	    };
	    Pagination.prototype.nextPage = function () {
	        if (this.currentPage < this.pages - 1) {
	            this.currentPage++;
	        }
	    };
	    Pagination = __decorate([vue_class_component_1["default"]({
	        props: {
	            currentPage: {
	                type: Number,
	                'default': 0
	            },
	            pageSize: {
	                type: Number,
	                required: true,
	                twoWay: false
	            },
	            totalRecords: {
	                type: Number,
	                required: true,
	                twoWay: false
	            },
	            displayPages: {
	                type: Number,
	                required: false,
	                'default': 5,
	                twoWay: false
	            },
	            itemClass: {
	                required: false,
	                'default': null,
	                twoWay: false
	            },
	            firstLast: {
	                type: Boolean,
	                required: false,
	                'default': false,
	                twoWay: false
	            }
	        },
	        components: {
	            mdIcon: icon_1["default"]
	        },
	        directives: {
	            waveEffect: wave_effect_1["default"]
	        },
	        watch: {
	            currentPage: function currentPage() {
	                this.$dispatch('pagination::selected', this.pagesWindow);
	            },
	            pages: {
	                handler: function handler() {
	                    if (this.currentPage >= this.pages) {
	                        this.currentPage = this.pages - 1;
	                    }
	                }
	            }
	        },
	        template: __webpack_require__(96)
	    })], Pagination);
	    return Pagination;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = Pagination;
	//# sourceMappingURL=index.js.map

/***/ },
/* 96 */
/***/ function(module, exports) {

	module.exports = "<ul class=\"pagination\">\r\n    <li :class=\"{disabled: currentPage == 0}\">\r\n        <a v-if=\"firstLast\" @click.prevent=\"currentPage = 0\" href=\"#\"><i class=\"material-icons\">chevron_left</i></a>\r\n        <a @click.prevent=\"previousPage\" href=\"#\"><i class=\"material-icons\">chevron_left</i></a>\r\n    </li>\r\n\r\n    <li v-for=\"n in pager\"\r\n        @click.prevent=\"setCurrentPage(n)\"\r\n        :class=\"getClasses(n)\" v-wave-effect>\r\n        <a @click.prevent href=\"#\">{{n + 1}}</a>\r\n    </li>\r\n\r\n    <li :class=\"{disabled: currentPage == pages - 1}\">\r\n        <a @click.prevent=\"nextPage\" href=\"#\"><i class=\"material-icons\">chevron_right</i></a>\r\n        <a v-if=\"firstLast\" @click.prevent=\"currentPage = pages - 1\" href=\"#\"><i class=\"material-icons\">chevron_right</i></a>\r\n    </li>\r\n</ul>\r\n";

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var vue_class_component_1 = __webpack_require__(19);
	var Vue = Vue || __webpack_require__(2);
	var Slide = (function () {
	    function Slide() {}
	    Slide.prototype.compiled = function () {
	        // todo: remove hack webpack img src loading
	        this.$els.img.setAttribute('src', this.img);
	    };
	    Slide.prototype.ready = function () {
	        this._setClasses(this.active);
	    };
	    Slide.prototype.data = function () {
	        var position = this.$parent.$children.indexOf(this);
	        return {
	            active: false,
	            position: position,
	            classes: {}
	        };
	    };
	    Object.defineProperty(Slide.prototype, "src", {
	        get: function get() {
	            return this.img;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Slide.prototype, "computedClasses", {
	        get: function get() {
	            return this.classes;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Slide.prototype.setActive = function (index) {
	        this.active = this.position == index;
	    };
	    Slide.prototype._setClasses = function (val) {
	        Vue.set(this.classes, 'active', val);
	        Vue.set(this.classes, 'fadeIn', val);
	        Vue.set(this.classes, 'fadeOut', !val);
	    };
	    Slide = __decorate([vue_class_component_1["default"]({
	        props: {
	            img: {
	                type: String,
	                required: false,
	                'default': null
	            },
	            align: {
	                type: String,
	                required: false,
	                "default": ''
	            }
	        },
	        events: {
	            'slider::activate': function sliderActivate(index) {
	                this.setActive(index);
	            }
	        },
	        watch: {
	            active: function active(val) {
	                this._setClasses(val);
	            }
	        },
	        template: __webpack_require__(98)
	    })], Slide);
	    return Slide;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = Slide;
	//# sourceMappingURL=index.js.map

/***/ },
/* 98 */
/***/ function(module, exports) {

	module.exports = "<li :class=\"computedClasses\">\r\n    <img v-el:img>\r\n    <div class=\"caption\" :class=\"align + '-align'\">\r\n        <slot></slot>\r\n    </div>\r\n</li>";

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var vue_class_component_1 = __webpack_require__(19);
	var Slider = (function () {
	    function Slider() {}
	    Slider.prototype.data = function () {
	        return {
	            activeItem: 0,
	            itemsCount: 0
	        };
	    };
	    Slider.prototype.ready = function () {
	        this.$broadcast('slider::activate', this.activeItem);
	        this.interval = this.interval ? this.interval : 4000;
	        this.itemsCount = this.$children.length;
	        this.setupInterval();
	    };
	    Slider.prototype.handler = function () {
	        if (this.$children) {
	            this.activeItem = (this.activeItem + 1) % this.itemsCount;
	            this.$broadcast('slider::activate', this.activeItem);
	        }
	    };
	    Slider.prototype.setupInterval = function () {
	        this.intervalHandler = setInterval(this.handler, this.interval);
	    };
	    Slider.prototype.clearInterval = function () {
	        if (this.intervalHandler) {
	            clearInterval(this.intervalHandler);
	            this.intervalHandler = null;
	        }
	    };
	    Slider.prototype.setActive = function (index) {
	        this.$broadcast('slider::activate', index);
	        this.activeItem = index;
	        this.clearInterval();
	    };
	    Slider = __decorate([vue_class_component_1["default"]({
	        interval: {
	            type: Number,
	            "default": 4000,
	            validator: function validator(value) {
	                return value > 1000;
	            }
	        },
	        template: __webpack_require__(100)
	    })], Slider);
	    return Slider;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = Slider;
	//# sourceMappingURL=index.js.map

/***/ },
/* 100 */
/***/ function(module, exports) {

	module.exports = "<div class=\"slider\">\r\n    <ul class=\"slides\">\r\n        <slot></slot>\r\n    </ul>\r\n    <ul class=\"indicators\">\r\n        <li v-for=\"index in itemsCount\"\r\n            @click=\"setActive(index)\"\r\n            @mouseover=\"activeItem == index && clearInterval(index)\"\r\n            @mouseout=\"setupInterval(index)\"\r\n            :class=\"{active: activeItem == index}\" class=\"indicator-item\"></li>\r\n    </ul>\r\n</div>";

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var vue_class_component_1 = __webpack_require__(19);
	var input_1 = __webpack_require__(12);
	var bind_boolean_1 = __webpack_require__(4);
	var Switch = (function () {
	    function Switch() {}
	    Switch = __decorate([vue_class_component_1["default"]({
	        props: {
	            value: {
	                type: Boolean,
	                required: false,
	                'default': null
	            },
	            name: {
	                type: String,
	                required: false,
	                'default': null,
	                twoWay: false
	            },
	            disabled: {
	                type: Boolean,
	                required: false,
	                'default': false
	            }
	        },
	        directives: {
	            bindBoolean: bind_boolean_1["default"]
	        },
	        mixins: [input_1["default"]],
	        template: __webpack_require__(102)
	    })], Switch);
	    return Switch;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = Switch;
	//# sourceMappingURL=index.js.map

/***/ },
/* 102 */
/***/ function(module, exports) {

	module.exports = "<div class=\"switch\">\r\n    <label>\r\n        <slot name=\"off\">Off</slot>\r\n        <input v-model=\"value\"\r\n               v-bind-boolean:disabled=\"disabled\"\r\n               :name=\"name\"\r\n               type=\"checkbox\">\r\n        <span class=\"lever\"></span>\r\n        <slot name=\"on\">On</slot>\r\n    </label>\r\n</div>";

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var vue_class_component_1 = __webpack_require__(19);
	var Tab = (function () {
	    function Tab() {}
	    Object.defineProperty(Tab.prototype, "computedClasses", {
	        get: function get() {
	            return this.disabled ? ['disabled'] : [];
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Tab.prototype, "index", {
	        get: function get() {
	            return this.$parent.$children.indexOf(this);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Tab.prototype, "id", {
	        get: function get() {
	            if (this.name) {
	                return this.name;
	            } else {
	                return this.index;
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Tab.prototype.ready = function () {
	        var hash = window.location.hash;
	        var el = this.$el;
	        var anchors = el.getElementsByTagName("A");
	        for (var i = 0; i < anchors.length; i++) {
	            var a = anchors[i];
	            if (hash == a.getAttribute("href")) {
	                this.setAsSelected();
	            }
	        }
	    };
	    Tab.prototype.setAsSelected = function () {
	        if (!this.disabled) {
	            this.$dispatch('tabs::on-select', this);
	        }
	    };
	    Tab.prototype.select = function (id) {
	        if (this.id == id) {
	            this.setAsSelected();
	        }
	    };
	    Tab = __decorate([vue_class_component_1["default"]({
	        props: {
	            disabled: {
	                type: Boolean,
	                required: false,
	                "default": false,
	                twoWay: false
	            },
	            name: {
	                type: String,
	                required: false,
	                "default": null,
	                twoWay: false
	            }
	        },
	        events: {
	            'tab::select': function tabSelect(id) {
	                this.select(id);
	            }
	        },
	        template: __webpack_require__(104)
	    })], Tab);
	    return Tab;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = Tab;
	//# sourceMappingURL=index.js.map

/***/ },
/* 104 */
/***/ function(module, exports) {

	module.exports = "<li @click=\"setAsSelected\" class=\"tab col\" :class=\"computedClasses\">\r\n    <slot></slot>\r\n</li>";

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var vue_class_component_1 = __webpack_require__(19);
	var Velocity = __webpack_require__(15);
	var Tabs = (function () {
	    function Tabs() {}
	    Tabs.prototype.ready = function () {
	        window.addEventListener("resize", this.resizeIndicator);
	    };
	    Tabs.prototype.data = function () {
	        return {
	            indicator: {
	                left: '0',
	                right: '0'
	            }
	        };
	    };
	    Object.defineProperty(Tabs.prototype, "tabsCount", {
	        get: function get() {
	            if (!this.$children) {
	                return 0;
	            } else {
	                return this.$children.length;
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Tabs.prototype.select = function (tab) {
	        this.activeTab = tab;
	        this.active = tab.id;
	        var target = tab.$el;
	        var parent = target.parentElement;
	        var indicator = this.$els.indicator;
	        var indicatorLeft = parseInt(indicator.style.left, 10) || this.indicator.left;
	        var indicatorRight = parseInt(indicator.style.right, 10) || this.indicator.right;
	        this.moveIndicator(indicatorLeft, target.offsetLeft, indicatorRight, parent.offsetWidth - target.offsetLeft - target.offsetWidth);
	        return true;
	    };
	    Tabs.prototype.resizeIndicator = function () {
	        if (!this.activeTab) {
	            return;
	        }
	        var indicator = this.$els.indicator;
	        var index = this.activeTab.index;
	        var tab = this.activeTab.$el;
	        var tabs = tab.parentElement;
	        var tabs_width = tabs.offsetWidth;
	        var tab_width = Math.max(tabs_width, tabs.scrollWidth) / this.tabsCount;
	        if (tab_width !== 0 && tabs_width !== 0) {
	            indicator.style.right = tabs_width - (index + 1) * tab_width + "px";
	            indicator.style.left = index * tab_width + "px";
	        }
	    };
	    Tabs.prototype.moveIndicator = function (left, newLeft, right, newRight) {
	        var indicator = this.$els.indicator;
	        // Update indicator
	        if (newLeft - left >= 0) {
	            Velocity(indicator, { right: newRight }, { duration: 300, queue: false, easing: 'easeOutQuad' });
	            Velocity(indicator, { left: newLeft }, { duration: 300, queue: false, easing: 'easeOutQuad', delay: 90 });
	        } else {
	            Velocity(indicator, { left: newLeft }, { duration: 300, queue: false, easing: 'easeOutQuad' });
	            Velocity(indicator, { right: newRight }, { duration: 300, queue: false, easing: 'easeOutQuad', delay: 90 });
	        }
	    };
	    Tabs = __decorate([vue_class_component_1["default"]({
	        props: {
	            active: {
	                required: false,
	                'default': null
	            }
	        },
	        watch: {
	            active: function active(value) {
	                this.$broadcast('tab::select', value);
	            }
	        },
	        events: {
	            'tabs::on-select': function tabsOnSelect(tab) {
	                this.select(tab);
	            }
	        },
	        template: __webpack_require__(106)
	    })], Tabs);
	    return Tabs;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = Tabs;
	//# sourceMappingURL=index.js.map

/***/ },
/* 106 */
/***/ function(module, exports) {

	module.exports = "<div class=\"md-tabs\">\r\n    <ul class=\"tabs\">\r\n        <slot></slot>\r\n        <div v-el:indicator class=\"indicator\"></div>\r\n    </ul>\r\n\r\n    <slot name=\"contents\"></slot>\r\n</div>\r\n";

/***/ },
/* 107 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
/******/ ])
});
;