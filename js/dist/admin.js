/******/ (() => { // webpackBootstrap
/******/ 	// runtime can't be in strict mode because a global variable is assign and maybe created.
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/html5sortable/dist/html5sortable.es.js":
/*!*************************************************************!*\
  !*** ./node_modules/html5sortable/dist/html5sortable.es.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/*
 * HTML5Sortable package
 * https://github.com/lukasoppermann/html5sortable
 *
 * Maintained by Lukas Oppermann <lukas@vea.re>
 *
 * Released under the MIT license.
 */
/**
 * Get or set data on element
 * @param {HTMLElement} element
 * @param {string} key
 * @param {any} value
 * @return {*}
 */
function addData(element, key, value) {
  if (value === undefined) {
    return element && element.h5s && element.h5s.data && element.h5s.data[key];
  } else {
    element.h5s = element.h5s || {};
    element.h5s.data = element.h5s.data || {};
    element.h5s.data[key] = value;
  }
}
/**
 * Remove data from element
 * @param {HTMLElement} element
 */
function removeData(element) {
  if (element.h5s) {
    delete element.h5s.data;
  }
}

/* eslint-env browser */
/**
 * Filter only wanted nodes
 * @param {NodeList|HTMLCollection|Array} nodes
 * @param {String} selector
 * @returns {Array}
 */
var _filter = function _filter(nodes, selector) {
  if (!(nodes instanceof NodeList || nodes instanceof HTMLCollection || nodes instanceof Array)) {
    throw new Error('You must provide a nodeList/HTMLCollection/Array of elements to be filtered.');
  }
  if (typeof selector !== 'string') {
    return Array.from(nodes);
  }
  return Array.from(nodes).filter(function (item) {
    return item.nodeType === 1 && item.matches(selector);
  });
};

/* eslint-env browser */
var stores = new Map();
/**
 * Stores data & configurations per Sortable
 * @param {Object} config
 */
var Store = /** @class */function () {
  function Store() {
    this._config = new Map(); // eslint-disable-line no-undef
    this._placeholder = undefined; // eslint-disable-line no-undef
    this._data = new Map(); // eslint-disable-line no-undef
  }

  Object.defineProperty(Store.prototype, "config", {
    /**
     * get the configuration map of a class instance
     * @method config
     * @return {object}
     */
    get: function get() {
      // transform Map to object
      var config = {};
      this._config.forEach(function (value, key) {
        config[key] = value;
      });
      // return object
      return config;
    },
    /**
     * set the configuration of a class instance
     * @method config
     * @param {object} config object of configurations
     */
    set: function set(config) {
      if (typeof config !== 'object') {
        throw new Error('You must provide a valid configuration object to the config setter.');
      }
      // combine config with default
      var mergedConfig = Object.assign({}, config);
      // add config to map
      this._config = new Map(Object.entries(mergedConfig));
    },
    enumerable: false,
    configurable: true
  });
  /**
   * set individual configuration of a class instance
   * @method setConfig
   * @param  key valid configuration key
   * @param  value any value
   * @return void
   */
  Store.prototype.setConfig = function (key, value) {
    if (!this._config.has(key)) {
      throw new Error("Trying to set invalid configuration item: " + key);
    }
    // set config
    this._config.set(key, value);
  };
  /**
   * get an individual configuration of a class instance
   * @method getConfig
   * @param  key valid configuration key
   * @return any configuration value
   */
  Store.prototype.getConfig = function (key) {
    if (!this._config.has(key)) {
      throw new Error("Invalid configuration item requested: " + key);
    }
    return this._config.get(key);
  };
  Object.defineProperty(Store.prototype, "placeholder", {
    /**
     * get the placeholder for a class instance
     * @method placeholder
     * @return {HTMLElement|null}
     */
    get: function get() {
      return this._placeholder;
    },
    /**
     * set the placeholder for a class instance
     * @method placeholder
     * @param {HTMLElement} placeholder
     * @return {void}
     */
    set: function set(placeholder) {
      if (!(placeholder instanceof HTMLElement) && placeholder !== null) {
        throw new Error('A placeholder must be an html element or null.');
      }
      this._placeholder = placeholder;
    },
    enumerable: false,
    configurable: true
  });
  /**
   * set an data entry
   * @method setData
   * @param {string} key
   * @param {any} value
   * @return {void}
   */
  Store.prototype.setData = function (key, value) {
    if (typeof key !== 'string') {
      throw new Error('The key must be a string.');
    }
    this._data.set(key, value);
  };
  /**
   * get an data entry
   * @method getData
   * @param {string} key an existing key
   * @return {any}
   */
  Store.prototype.getData = function (key) {
    if (typeof key !== 'string') {
      throw new Error('The key must be a string.');
    }
    return this._data.get(key);
  };
  /**
   * delete an data entry
   * @method deleteData
   * @param {string} key an existing key
   * @return {boolean}
   */
  Store.prototype.deleteData = function (key) {
    if (typeof key !== 'string') {
      throw new Error('The key must be a string.');
    }
    return this._data["delete"](key);
  };
  return Store;
}();
/**
 * @param {HTMLElement} sortableElement
 * @returns {Class: Store}
 */
var store = function store(sortableElement) {
  // if sortableElement is wrong type
  if (!(sortableElement instanceof HTMLElement)) {
    throw new Error('Please provide a sortable to the store function.');
  }
  // create new instance if not avilable
  if (!stores.has(sortableElement)) {
    stores.set(sortableElement, new Store());
  }
  // return instance
  return stores.get(sortableElement);
};

/**
 * @param {Array|HTMLElement} element
 * @param {Function} callback
 * @param {string} event
 */
function addEventListener(element, eventName, callback) {
  if (element instanceof Array) {
    for (var i = 0; i < element.length; ++i) {
      addEventListener(element[i], eventName, callback);
    }
    return;
  }
  element.addEventListener(eventName, callback);
  store(element).setData("event" + eventName, callback);
}
/**
 * @param {Array<HTMLElement>|HTMLElement} element
 * @param {string} eventName
 */
function removeEventListener(element, eventName) {
  if (element instanceof Array) {
    for (var i = 0; i < element.length; ++i) {
      removeEventListener(element[i], eventName);
    }
    return;
  }
  element.removeEventListener(eventName, store(element).getData("event" + eventName));
  store(element).deleteData("event" + eventName);
}

/**
 * @param {Array<HTMLElement>|HTMLElement} element
 * @param {string} attribute
 * @param {string} value
 */
function addAttribute(element, attribute, value) {
  if (element instanceof Array) {
    for (var i = 0; i < element.length; ++i) {
      addAttribute(element[i], attribute, value);
    }
    return;
  }
  element.setAttribute(attribute, value);
}
/**
 * @param {Array|HTMLElement} element
 * @param {string} attribute
 */
function removeAttribute(element, attribute) {
  if (element instanceof Array) {
    for (var i = 0; i < element.length; ++i) {
      removeAttribute(element[i], attribute);
    }
    return;
  }
  element.removeAttribute(attribute);
}

/**
 * @param {HTMLElement} element
 * @returns {Object}
 */
var _offset = function _offset(element) {
  if (!element.parentElement || element.getClientRects().length === 0) {
    throw new Error('target element must be part of the dom');
  }
  var rect = element.getClientRects()[0];
  return {
    left: rect.left + window.pageXOffset,
    right: rect.right + window.pageXOffset,
    top: rect.top + window.pageYOffset,
    bottom: rect.bottom + window.pageYOffset
  };
};

/**
 * Creates and returns a new debounced version of the passed function which will postpone its execution until after wait milliseconds have elapsed
 * @param {Function} func to debounce
 * @param {number} time to wait before calling function with latest arguments, 0 - no debounce
 * @returns {function} - debounced function
 */
var _debounce = function _debounce(func, wait) {
  if (wait === void 0) {
    wait = 0;
  }
  var timeout;
  return function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      func.apply(void 0, args);
    }, wait);
  };
};

/* eslint-env browser */
/**
 * Get position of the element relatively to its sibling elements
 * @param {HTMLElement} element
 * @returns {number}
 */
var _index = function _index(element, elementList) {
  if (!(element instanceof HTMLElement) || !(elementList instanceof NodeList || elementList instanceof HTMLCollection || elementList instanceof Array)) {
    throw new Error('You must provide an element and a list of elements.');
  }
  return Array.from(elementList).indexOf(element);
};

/* eslint-env browser */
/**
 * Test whether element is in DOM
 * @param {HTMLElement} element
 * @returns {boolean}
 */
var isInDom = function isInDom(element) {
  if (!(element instanceof HTMLElement)) {
    throw new Error('Element is not a node element.');
  }
  return element.parentNode !== null;
};

/* eslint-env browser */
/**
 * Insert node before or after target
 * @param {HTMLElement} referenceNode - reference element
 * @param {HTMLElement} newElement - element to be inserted
 * @param {String} position - insert before or after reference element
 */
var insertNode = function insertNode(referenceNode, newElement, position) {
  if (!(referenceNode instanceof HTMLElement) || !(referenceNode.parentElement instanceof HTMLElement)) {
    throw new Error('target and element must be a node');
  }
  referenceNode.parentElement.insertBefore(newElement, position === 'before' ? referenceNode : referenceNode.nextElementSibling);
};
/**
 * Insert before target
 * @param {HTMLElement} target
 * @param {HTMLElement} element
 */
var insertBefore = function insertBefore(target, element) {
  return insertNode(target, element, 'before');
};
/**
 * Insert after target
 * @param {HTMLElement} target
 * @param {HTMLElement} element
 */
var insertAfter = function insertAfter(target, element) {
  return insertNode(target, element, 'after');
};

/* eslint-env browser */
/**
 * Filter only wanted nodes
 * @param {HTMLElement} sortableContainer
 * @param {Function} customSerializer
 * @returns {Array}
 */
var _serialize = function _serialize(sortableContainer, customItemSerializer, customContainerSerializer) {
  if (customItemSerializer === void 0) {
    customItemSerializer = function customItemSerializer(serializedItem, sortableContainer) {
      return serializedItem;
    };
  }
  if (customContainerSerializer === void 0) {
    customContainerSerializer = function customContainerSerializer(serializedContainer) {
      return serializedContainer;
    };
  }
  // check for valid sortableContainer
  if (!(sortableContainer instanceof HTMLElement) || !sortableContainer.isSortable === true) {
    throw new Error('You need to provide a sortableContainer to be serialized.');
  }
  // check for valid serializers
  if (typeof customItemSerializer !== 'function' || typeof customContainerSerializer !== 'function') {
    throw new Error('You need to provide a valid serializer for items and the container.');
  }
  // get options
  var options = addData(sortableContainer, 'opts');
  var item = options.items;
  // serialize container
  var items = _filter(sortableContainer.children, item);
  var serializedItems = items.map(function (item) {
    return {
      parent: sortableContainer,
      node: item,
      html: item.outerHTML,
      index: _index(item, items)
    };
  });
  // serialize container
  var container = {
    node: sortableContainer,
    itemCount: serializedItems.length
  };
  return {
    container: customContainerSerializer(container),
    items: serializedItems.map(function (item) {
      return customItemSerializer(item, sortableContainer);
    })
  };
};

/* eslint-env browser */
/**
 * create a placeholder element
 * @param {HTMLElement} sortableElement a single sortable
 * @param {string|undefined} placeholder a string representing an html element
 * @param {string} placeholderClasses a string representing the classes that should be added to the placeholder
 */
var _makePlaceholder = function _makePlaceholder(sortableElement, placeholder, placeholderClass) {
  var _a;
  if (placeholderClass === void 0) {
    placeholderClass = 'sortable-placeholder';
  }
  if (!(sortableElement instanceof HTMLElement)) {
    throw new Error('You must provide a valid element as a sortable.');
  }
  // if placeholder is not an element
  if (!(placeholder instanceof HTMLElement) && placeholder !== undefined) {
    throw new Error('You must provide a valid element as a placeholder or set ot to undefined.');
  }
  // if no placeholder element is given
  if (placeholder === undefined) {
    if (['UL', 'OL'].includes(sortableElement.tagName)) {
      placeholder = document.createElement('li');
    } else if (['TABLE', 'TBODY'].includes(sortableElement.tagName)) {
      placeholder = document.createElement('tr');
      // set colspan to always all rows, otherwise the item can only be dropped in first column
      placeholder.innerHTML = '<td colspan="100"></td>';
    } else {
      placeholder = document.createElement('div');
    }
  }
  // add classes to placeholder
  if (typeof placeholderClass === 'string') {
    (_a = placeholder.classList).add.apply(_a, placeholderClass.split(' '));
  }
  return placeholder;
};

/* eslint-env browser */
/**
 * Get height of an element including padding
 * @param {HTMLElement} element an dom element
 */
var _getElementHeight = function _getElementHeight(element) {
  if (!(element instanceof HTMLElement)) {
    throw new Error('You must provide a valid dom element');
  }
  // get calculated style of element
  var style = window.getComputedStyle(element);
  // get only height if element has box-sizing: border-box specified
  if (style.getPropertyValue('box-sizing') === 'border-box') {
    return parseInt(style.getPropertyValue('height'), 10);
  }
  // pick applicable properties, convert to int and reduce by adding
  return ['height', 'padding-top', 'padding-bottom'].map(function (key) {
    var _int = parseInt(style.getPropertyValue(key), 10);
    return isNaN(_int) ? 0 : _int;
  }).reduce(function (sum, value) {
    return sum + value;
  });
};

/* eslint-env browser */
/**
 * Get width of an element including padding
 * @param {HTMLElement} element an dom element
 */
var _getElementWidth = function _getElementWidth(element) {
  if (!(element instanceof HTMLElement)) {
    throw new Error('You must provide a valid dom element');
  }
  // get calculated style of element
  var style = window.getComputedStyle(element);
  // pick applicable properties, convert to int and reduce by adding
  return ['width', 'padding-left', 'padding-right'].map(function (key) {
    var _int2 = parseInt(style.getPropertyValue(key), 10);
    return isNaN(_int2) ? 0 : _int2;
  }).reduce(function (sum, value) {
    return sum + value;
  });
};

/* eslint-env browser */
/**
 * get handle or return item
 * @param {Array<HTMLElement>} items
 * @param {string} selector
 */
var _getHandles = function _getHandles(items, selector) {
  if (!(items instanceof Array)) {
    throw new Error('You must provide a Array of HTMLElements to be filtered.');
  }
  if (typeof selector !== 'string') {
    return items;
  }
  return items
  // remove items without handle from array
  .filter(function (item) {
    return item.querySelector(selector) instanceof HTMLElement || item.shadowRoot && item.shadowRoot.querySelector(selector) instanceof HTMLElement;
  })
  // replace item with handle in array
  .map(function (item) {
    return item.querySelector(selector) || item.shadowRoot && item.shadowRoot.querySelector(selector);
  });
};

/**
 * @param {Event} event
 * @returns {HTMLElement}
 */
var getEventTarget = function getEventTarget(event) {
  return event.composedPath && event.composedPath()[0] || event.target;
};

/* eslint-env browser */
/**
 * defaultDragImage returns the current item as dragged image
 * @param {HTMLElement} draggedElement - the item that the user drags
 * @param {object} elementOffset - an object with the offsets top, left, right & bottom
 * @param {Event} event - the original drag event object
 * @return {object} with element, posX and posY properties
 */
var defaultDragImage = function defaultDragImage(draggedElement, elementOffset, event) {
  return {
    element: draggedElement,
    posX: event.pageX - elementOffset.left,
    posY: event.pageY - elementOffset.top
  };
};
/**
 * attaches an element as the drag image to an event
 * @param {Event} event - the original drag event object
 * @param {HTMLElement} draggedElement - the item that the user drags
 * @param {Function} customDragImage - function to create a custom dragImage
 * @return void
 */
var setDragImage = function setDragImage(event, draggedElement, customDragImage) {
  // check if event is provided
  if (!(event instanceof Event)) {
    throw new Error('setDragImage requires a DragEvent as the first argument.');
  }
  // check if draggedElement is provided
  if (!(draggedElement instanceof HTMLElement)) {
    throw new Error('setDragImage requires the dragged element as the second argument.');
  }
  // set default function of none provided
  if (!customDragImage) {
    customDragImage = defaultDragImage;
  }
  // check if setDragImage method is available
  if (event.dataTransfer && event.dataTransfer.setDragImage) {
    // get the elements offset
    var elementOffset = _offset(draggedElement);
    // get the dragImage
    var dragImage = customDragImage(draggedElement, elementOffset, event);
    // check if custom function returns correct values
    if (!(dragImage.element instanceof HTMLElement) || typeof dragImage.posX !== 'number' || typeof dragImage.posY !== 'number') {
      throw new Error('The customDragImage function you provided must return and object with the properties element[string], posX[integer], posY[integer].');
    }
    // needs to be set for HTML5 drag & drop to work
    event.dataTransfer.effectAllowed = 'copyMove';
    // Firefox requires it to use the event target's id for the data
    event.dataTransfer.setData('text/plain', getEventTarget(event).id);
    // set the drag image on the event
    event.dataTransfer.setDragImage(dragImage.element, dragImage.posX, dragImage.posY);
  }
};

/**
 * Check if curList accepts items from destList
 * @param {sortable} destination the container an item is move to
 * @param {sortable} origin the container an item comes from
 */
var _listsConnected = function _listsConnected(destination, origin) {
  // check if valid sortable
  if (destination.isSortable === true) {
    var acceptFrom = store(destination).getConfig('acceptFrom');
    // check if acceptFrom is valid
    if (acceptFrom !== null && acceptFrom !== false && typeof acceptFrom !== 'string') {
      throw new Error('HTML5Sortable: Wrong argument, "acceptFrom" must be "null", "false", or a valid selector string.');
    }
    if (acceptFrom !== null) {
      return acceptFrom !== false && acceptFrom.split(',').filter(function (sel) {
        return sel.length > 0 && origin.matches(sel);
      }).length > 0;
    }
    // drop in same list
    if (destination === origin) {
      return true;
    }
    // check if lists are connected with connectWith
    if (store(destination).getConfig('connectWith') !== undefined && store(destination).getConfig('connectWith') !== null) {
      return store(destination).getConfig('connectWith') === store(origin).getConfig('connectWith');
    }
  }
  return false;
};

/**
 * default configurations
 */
var defaultConfiguration = {
  items: null,
  // deprecated
  connectWith: null,
  // deprecated
  disableIEFix: null,
  acceptFrom: null,
  copy: false,
  placeholder: null,
  placeholderClass: 'sortable-placeholder',
  draggingClass: 'sortable-dragging',
  hoverClass: false,
  dropTargetContainerClass: false,
  debounce: 0,
  throttleTime: 100,
  maxItems: 0,
  itemSerializer: undefined,
  containerSerializer: undefined,
  customDragImage: null,
  orientation: 'vertical'
};

/**
 * make sure a function is only called once within the given amount of time
 * @param {Function} fn the function to throttle
 * @param {number} threshold time limit for throttling
 */
// must use function to keep this context
function _throttle(fn, threshold) {
  var _this = this;
  if (threshold === void 0) {
    threshold = 250;
  }
  // check function
  if (typeof fn !== 'function') {
    throw new Error('You must provide a function as the first argument for throttle.');
  }
  // check threshold
  if (typeof threshold !== 'number') {
    throw new Error('You must provide a number as the second argument for throttle.');
  }
  var lastEventTimestamp = null;
  return function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    var now = Date.now();
    if (lastEventTimestamp === null || now - lastEventTimestamp >= threshold) {
      lastEventTimestamp = now;
      fn.apply(_this, args);
    }
  };
}

/* eslint-env browser */
/**
 * enable or disable hoverClass on mouseenter/leave if container Items
 * @param {sortable} sortableContainer a valid sortableContainer
 * @param {boolean} enable enable or disable event
 */
// export default (sortableContainer: sortable, enable: boolean) => {
var enableHoverClass = function enableHoverClass(sortableContainer, enable) {
  if (typeof store(sortableContainer).getConfig('hoverClass') === 'string') {
    var hoverClasses_1 = store(sortableContainer).getConfig('hoverClass').split(' ');
    // add class on hover
    if (enable === true) {
      addEventListener(sortableContainer, 'mousemove', _throttle(function (event) {
        // check of no mouse button was pressed when mousemove started == no drag
        if (event.buttons === 0) {
          _filter(sortableContainer.children, store(sortableContainer).getConfig('items')).forEach(function (item) {
            var _a, _b;
            if (item !== event.target) {
              (_a = item.classList).remove.apply(_a, hoverClasses_1);
            } else {
              (_b = item.classList).add.apply(_b, hoverClasses_1);
            }
          });
        }
      }, store(sortableContainer).getConfig('throttleTime')));
      // remove class on leave
      addEventListener(sortableContainer, 'mouseleave', function () {
        _filter(sortableContainer.children, store(sortableContainer).getConfig('items')).forEach(function (item) {
          var _a;
          (_a = item.classList).remove.apply(_a, hoverClasses_1);
        });
      });
      // remove events
    } else {
      removeEventListener(sortableContainer, 'mousemove');
      removeEventListener(sortableContainer, 'mouseleave');
    }
  }
};

/* eslint-env browser */
/*
 * variables global to the plugin
 */
var dragging;
var draggingHeight;
var draggingWidth;
/*
 * Keeps track of the initialy selected list, where 'dragstart' event was triggered
 * It allows us to move the data in between individual Sortable List instances
 */
// Origin List - data from before any item was changed
var originContainer;
var originIndex;
var originElementIndex;
var originItemsBeforeUpdate;
// Previous Sortable Container - we dispatch as sortenter event when a
// dragged item enters a sortableContainer for the first time
var previousContainer;
// Destination List - data from before any item was changed
var destinationItemsBeforeUpdate;
/**
 * remove event handlers from items
 * @param {Array|NodeList} items
 */
var _removeItemEvents = function _removeItemEvents(items) {
  removeEventListener(items, 'dragstart');
  removeEventListener(items, 'dragend');
  removeEventListener(items, 'dragover');
  removeEventListener(items, 'dragenter');
  removeEventListener(items, 'drop');
  removeEventListener(items, 'mouseenter');
  removeEventListener(items, 'mouseleave');
};
// Remove container events
var _removeContainerEvents = function _removeContainerEvents(originContainer, previousContainer) {
  if (originContainer) {
    removeEventListener(originContainer, 'dragleave');
  }
  if (previousContainer && previousContainer !== originContainer) {
    removeEventListener(previousContainer, 'dragleave');
  }
};
/**
 * _getDragging returns the current element to drag or
 * a copy of the element.
 * Is Copy Active for sortable
 * @param {HTMLElement} draggedItem - the item that the user drags
 * @param {HTMLElement} sortable a single sortable
 */
var _getDragging = function _getDragging(draggedItem, sortable) {
  var ditem = draggedItem;
  if (store(sortable).getConfig('copy') === true) {
    ditem = draggedItem.cloneNode(true);
    addAttribute(ditem, 'aria-copied', 'true');
    draggedItem.parentElement.appendChild(ditem);
    ditem.style.display = 'none';
    ditem.oldDisplay = draggedItem.style.display;
  }
  return ditem;
};
/**
 * Remove data from sortable
 * @param {HTMLElement} sortable a single sortable
 */
var _removeSortableData = function _removeSortableData(sortable) {
  removeData(sortable);
  removeAttribute(sortable, 'aria-dropeffect');
};
/**
 * Remove data from items
 * @param {Array<HTMLElement>|HTMLElement} items
 */
var _removeItemData = function _removeItemData(items) {
  removeAttribute(items, 'aria-grabbed');
  removeAttribute(items, 'aria-copied');
  removeAttribute(items, 'draggable');
  removeAttribute(items, 'role');
};
/**
 * find sortable from element. travels up parent element until found or null.
 * @param {HTMLElement} element a single sortable
 * @param {Event} event - the current event. We need to pass it to be able to
 * find Sortable whith shadowRoot (document fragment has no parent)
 */
function findSortable(element, event) {
  if (event.composedPath) {
    return event.composedPath().find(function (el) {
      return el.isSortable;
    });
  }
  while (element.isSortable !== true) {
    element = element.parentElement;
  }
  return element;
}
/**
 * Dragging event is on the sortable element. finds the top child that
 * contains the element.
 * @param {HTMLElement} sortableElement a single sortable
 * @param {HTMLElement} element is that being dragged
 */
function findDragElement(sortableElement, element) {
  var options = addData(sortableElement, 'opts');
  var items = _filter(sortableElement.children, options.items);
  var itemlist = items.filter(function (ele) {
    return ele.contains(element) || ele.shadowRoot && ele.shadowRoot.contains(element);
  });
  return itemlist.length > 0 ? itemlist[0] : element;
}
/**
 * Destroy the sortable
 * @param {HTMLElement} sortableElement a single sortable
 */
var _destroySortable = function _destroySortable(sortableElement) {
  var opts = addData(sortableElement, 'opts') || {};
  var items = _filter(sortableElement.children, opts.items);
  var handles = _getHandles(items, opts.handle);
  // remove event handlers & data from sortable
  removeEventListener(sortableElement, 'dragover');
  removeEventListener(sortableElement, 'dragenter');
  removeEventListener(sortableElement, 'dragstart');
  removeEventListener(sortableElement, 'dragend');
  removeEventListener(sortableElement, 'drop');
  // remove event data from sortable
  _removeSortableData(sortableElement);
  // remove event handlers & data from items
  removeEventListener(handles, 'mousedown');
  _removeItemEvents(items);
  _removeItemData(items);
  _removeContainerEvents(originContainer, previousContainer);
  // clear sortable flag
  sortableElement.isSortable = false;
};
/**
 * Enable the sortable
 * @param {HTMLElement} sortableElement a single sortable
 */
var _enableSortable = function _enableSortable(sortableElement) {
  var opts = addData(sortableElement, 'opts');
  var items = _filter(sortableElement.children, opts.items);
  var handles = _getHandles(items, opts.handle);
  addAttribute(sortableElement, 'aria-dropeffect', 'move');
  addData(sortableElement, '_disabled', 'false');
  addAttribute(handles, 'draggable', 'true');
  // @todo: remove this fix
  // IE FIX for ghost
  // can be disabled as it has the side effect that other events
  // (e.g. click) will be ignored
  if (opts.disableIEFix === false) {
    var spanEl = (document || window.document).createElement('span');
    if (typeof spanEl.dragDrop === 'function') {
      addEventListener(handles, 'mousedown', function () {
        if (items.indexOf(this) !== -1) {
          this.dragDrop();
        } else {
          var parent = this.parentElement;
          while (items.indexOf(parent) === -1) {
            parent = parent.parentElement;
          }
          parent.dragDrop();
        }
      });
    }
  }
};
/**
 * Disable the sortable
 * @param {HTMLElement} sortableElement a single sortable
 */
var _disableSortable = function _disableSortable(sortableElement) {
  var opts = addData(sortableElement, 'opts');
  var items = _filter(sortableElement.children, opts.items);
  var handles = _getHandles(items, opts.handle);
  addAttribute(sortableElement, 'aria-dropeffect', 'none');
  addData(sortableElement, '_disabled', 'true');
  addAttribute(handles, 'draggable', 'false');
  removeEventListener(handles, 'mousedown');
};
/**
 * Reload the sortable
 * @param {HTMLElement} sortableElement a single sortable
 * @description events need to be removed to not be double bound
 */
var _reloadSortable = function _reloadSortable(sortableElement) {
  var opts = addData(sortableElement, 'opts');
  var items = _filter(sortableElement.children, opts.items);
  var handles = _getHandles(items, opts.handle);
  addData(sortableElement, '_disabled', 'false');
  // remove event handlers from items
  _removeItemEvents(items);
  _removeContainerEvents(originContainer, previousContainer);
  removeEventListener(handles, 'mousedown');
  // remove event handlers from sortable
  removeEventListener(sortableElement, 'dragover');
  removeEventListener(sortableElement, 'dragenter');
  removeEventListener(sortableElement, 'drop');
};
/**
 * Public sortable object
 * @param {Array|NodeList} sortableElements
 * @param {object|string} options|method
 */
function sortable(sortableElements, options) {
  // get method string to see if a method is called
  var method = String(options);
  options = options || {};
  // check if the user provided a selector instead of an element
  if (typeof sortableElements === 'string') {
    sortableElements = document.querySelectorAll(sortableElements);
  }
  // if the user provided an element, return it in an array to keep the return value consistant
  if (sortableElements instanceof HTMLElement) {
    sortableElements = [sortableElements];
  }
  sortableElements = Array.prototype.slice.call(sortableElements);
  if (/serialize/.test(method)) {
    return sortableElements.map(function (sortableContainer) {
      var opts = addData(sortableContainer, 'opts');
      return _serialize(sortableContainer, opts.itemSerializer, opts.containerSerializer);
    });
  }
  sortableElements.forEach(function (sortableElement) {
    if (/enable|disable|destroy/.test(method)) {
      return sortable[method](sortableElement);
    }
    // log deprecation
    ['connectWith', 'disableIEFix'].forEach(function (configKey) {
      if (Object.prototype.hasOwnProperty.call(options, configKey) && options[configKey] !== null) {
        console.warn("HTML5Sortable: You are using the deprecated configuration \"" + configKey + "\". This will be removed in an upcoming version, make sure to migrate to the new options when updating.");
      }
    });
    // merge options with default options
    options = Object.assign({}, defaultConfiguration, store(sortableElement).config, options);
    // init data store for sortable
    store(sortableElement).config = options;
    // set options on sortable
    addData(sortableElement, 'opts', options);
    // property to define as sortable
    sortableElement.isSortable = true;
    // reset sortable
    _reloadSortable(sortableElement);
    // initialize
    var listItems = _filter(sortableElement.children, options.items);
    // create element if user defined a placeholder element as a string
    var customPlaceholder;
    if (options.placeholder !== null && options.placeholder !== undefined) {
      var tempContainer = document.createElement(sortableElement.tagName);
      if (options.placeholder instanceof HTMLElement) {
        tempContainer.appendChild(options.placeholder);
      } else {
        tempContainer.innerHTML = options.placeholder;
      }
      customPlaceholder = tempContainer.children[0];
    }
    // add placeholder
    store(sortableElement).placeholder = _makePlaceholder(sortableElement, customPlaceholder, options.placeholderClass);
    addData(sortableElement, 'items', options.items);
    if (options.acceptFrom) {
      addData(sortableElement, 'acceptFrom', options.acceptFrom);
    } else if (options.connectWith) {
      addData(sortableElement, 'connectWith', options.connectWith);
    }
    _enableSortable(sortableElement);
    addAttribute(listItems, 'role', 'option');
    addAttribute(listItems, 'aria-grabbed', 'false');
    // enable hover class
    enableHoverClass(sortableElement, true);
    /*
     Handle drag events on draggable items
     Handle is set at the sortableElement level as it will bubble up
     from the item
     */
    addEventListener(sortableElement, 'dragstart', function (e) {
      // ignore dragstart events
      var target = getEventTarget(e);
      if (target.isSortable === true) {
        return;
      }
      e.stopImmediatePropagation();
      if (options.handle && !target.matches(options.handle) || target.getAttribute('draggable') === 'false') {
        return;
      }
      var sortableContainer = findSortable(target, e);
      var dragItem = findDragElement(sortableContainer, target);
      // grab values
      originItemsBeforeUpdate = _filter(sortableContainer.children, options.items);
      originIndex = originItemsBeforeUpdate.indexOf(dragItem);
      originElementIndex = _index(dragItem, sortableContainer.children);
      originContainer = sortableContainer;
      // add transparent clone or other ghost to cursor
      setDragImage(e, dragItem, options.customDragImage);
      // cache selsection & add attr for dragging
      draggingHeight = _getElementHeight(dragItem);
      draggingWidth = _getElementWidth(dragItem);
      dragItem.classList.add(options.draggingClass);
      dragging = _getDragging(dragItem, sortableContainer);
      addAttribute(dragging, 'aria-grabbed', 'true');
      // dispatch sortstart event on each element in group
      sortableContainer.dispatchEvent(new CustomEvent('sortstart', {
        detail: {
          origin: {
            elementIndex: originElementIndex,
            index: originIndex,
            container: originContainer
          },
          item: dragging,
          originalTarget: target
        }
      }));
    });
    /*
     We are capturing targetSortable before modifications with 'dragenter' event
    */
    addEventListener(sortableElement, 'dragenter', function (e) {
      var target = getEventTarget(e);
      var sortableContainer = findSortable(target, e);
      if (sortableContainer && sortableContainer !== previousContainer) {
        destinationItemsBeforeUpdate = _filter(sortableContainer.children, addData(sortableContainer, 'items')).filter(function (item) {
          return item !== store(sortableElement).placeholder;
        });
        if (options.dropTargetContainerClass) {
          sortableContainer.classList.add(options.dropTargetContainerClass);
        }
        sortableContainer.dispatchEvent(new CustomEvent('sortenter', {
          detail: {
            origin: {
              elementIndex: originElementIndex,
              index: originIndex,
              container: originContainer
            },
            destination: {
              container: sortableContainer,
              itemsBeforeUpdate: destinationItemsBeforeUpdate
            },
            item: dragging,
            originalTarget: target
          }
        }));
        addEventListener(sortableContainer, 'dragleave', function (e) {
          // TODO: rename outTarget to be more self-explanatory
          // e.fromElement for very old browsers, similar to relatedTarget
          var outTarget = e.relatedTarget || e.fromElement;
          if (!e.currentTarget.contains(outTarget)) {
            if (options.dropTargetContainerClass) {
              sortableContainer.classList.remove(options.dropTargetContainerClass);
            }
            sortableContainer.dispatchEvent(new CustomEvent('sortleave', {
              detail: {
                origin: {
                  elementIndex: originElementIndex,
                  index: originIndex,
                  container: sortableContainer
                },
                item: dragging,
                originalTarget: target
              }
            }));
          }
        });
      }
      previousContainer = sortableContainer;
    });
    /*
     * Dragend Event - https://developer.mozilla.org/en-US/docs/Web/Events/dragend
     * Fires each time dragEvent end, or ESC pressed
     * We are using it to clean up any draggable elements and placeholders
     */
    addEventListener(sortableElement, 'dragend', function (e) {
      if (!dragging) {
        return;
      }
      dragging.classList.remove(options.draggingClass);
      addAttribute(dragging, 'aria-grabbed', 'false');
      if (dragging.getAttribute('aria-copied') === 'true' && addData(dragging, 'dropped') !== 'true') {
        dragging.remove();
      }
      dragging.style.display = dragging.oldDisplay;
      delete dragging.oldDisplay;
      var visiblePlaceholder = Array.from(stores.values()).map(function (data) {
        return data.placeholder;
      }).filter(function (placeholder) {
        return placeholder instanceof HTMLElement;
      }).filter(isInDom)[0];
      if (visiblePlaceholder) {
        visiblePlaceholder.remove();
      }
      // dispatch sortstart event on each element in group
      sortableElement.dispatchEvent(new CustomEvent('sortstop', {
        detail: {
          origin: {
            elementIndex: originElementIndex,
            index: originIndex,
            container: originContainer
          },
          item: dragging
        }
      }));
      previousContainer = null;
      dragging = null;
      draggingHeight = null;
      draggingWidth = null;
    });
    /*
     * Drop Event - https://developer.mozilla.org/en-US/docs/Web/Events/drop
     * Fires when valid drop target area is hit
     */
    addEventListener(sortableElement, 'drop', function (e) {
      if (!_listsConnected(sortableElement, dragging.parentElement)) {
        return;
      }
      e.preventDefault();
      e.stopPropagation();
      addData(dragging, 'dropped', 'true');
      // get the one placeholder that is currently visible
      var visiblePlaceholder = Array.from(stores.values()).map(function (data) {
        return data.placeholder;
      })
      // filter only HTMLElements
      .filter(function (placeholder) {
        return placeholder instanceof HTMLElement;
      })
      // filter only elements in DOM
      .filter(isInDom)[0];
      // attach element after placeholder
      insertAfter(visiblePlaceholder, dragging);
      // remove placeholder from dom
      visiblePlaceholder.remove();
      /*
       * Fires Custom Event - 'sortstop'
       */
      sortableElement.dispatchEvent(new CustomEvent('sortstop', {
        detail: {
          origin: {
            elementIndex: originElementIndex,
            index: originIndex,
            container: originContainer
          },
          item: dragging
        }
      }));
      var placeholder = store(sortableElement).placeholder;
      var originItems = _filter(originContainer.children, options.items).filter(function (item) {
        return item !== placeholder;
      });
      var destinationContainer = this.isSortable === true ? this : this.parentElement;
      var destinationItems = _filter(destinationContainer.children, addData(destinationContainer, 'items')).filter(function (item) {
        return item !== placeholder;
      });
      var destinationElementIndex = _index(dragging, Array.from(dragging.parentElement.children).filter(function (item) {
        return item !== placeholder;
      }));
      var destinationIndex = _index(dragging, destinationItems);
      if (options.dropTargetContainerClass) {
        destinationContainer.classList.remove(options.dropTargetContainerClass);
      }
      /*
       * When a list item changed container lists or index within a list
       * Fires Custom Event - 'sortupdate'
       */
      if (originElementIndex !== destinationElementIndex || originContainer !== destinationContainer) {
        sortableElement.dispatchEvent(new CustomEvent('sortupdate', {
          detail: {
            origin: {
              elementIndex: originElementIndex,
              index: originIndex,
              container: originContainer,
              itemsBeforeUpdate: originItemsBeforeUpdate,
              items: originItems
            },
            destination: {
              index: destinationIndex,
              elementIndex: destinationElementIndex,
              container: destinationContainer,
              itemsBeforeUpdate: destinationItemsBeforeUpdate,
              items: destinationItems
            },
            item: dragging
          }
        }));
      }
    });
    var debouncedDragOverEnter = _debounce(function (sortableElement, element, pageX, pageY) {
      if (!dragging) {
        return;
      }
      // set placeholder height if forcePlaceholderSize option is set
      if (options.forcePlaceholderSize) {
        store(sortableElement).placeholder.style.height = draggingHeight + 'px';
        store(sortableElement).placeholder.style.width = draggingWidth + 'px';
      }
      // if element the draggedItem is dragged onto is within the array of all elements in list
      // (not only items, but also disabled, etc.)
      if (Array.from(sortableElement.children).indexOf(element) > -1) {
        var thisHeight = _getElementHeight(element);
        var thisWidth = _getElementWidth(element);
        var placeholderIndex = _index(store(sortableElement).placeholder, element.parentElement.children);
        var thisIndex = _index(element, element.parentElement.children);
        // Check if `element` is bigger than the draggable. If it is, we have to define a dead zone to prevent flickering
        if (thisHeight > draggingHeight || thisWidth > draggingWidth) {
          // Dead zone?
          var deadZoneVertical = thisHeight - draggingHeight;
          var deadZoneHorizontal = thisWidth - draggingWidth;
          var offsetTop = _offset(element).top;
          var offsetLeft = _offset(element).left;
          if (placeholderIndex < thisIndex && (options.orientation === 'vertical' && pageY < offsetTop || options.orientation === 'horizontal' && pageX < offsetLeft)) {
            return;
          }
          if (placeholderIndex > thisIndex && (options.orientation === 'vertical' && pageY > offsetTop + thisHeight - deadZoneVertical || options.orientation === 'horizontal' && pageX > offsetLeft + thisWidth - deadZoneHorizontal)) {
            return;
          }
        }
        if (dragging.oldDisplay === undefined) {
          dragging.oldDisplay = dragging.style.display;
        }
        if (dragging.style.display !== 'none') {
          dragging.style.display = 'none';
        }
        // To avoid flicker, determine where to position the placeholder
        // based on where the mouse pointer is relative to the elements
        // vertical center.
        var placeAfter = false;
        try {
          var elementMiddleVertical = _offset(element).top + element.offsetHeight / 2;
          var elementMiddleHorizontal = _offset(element).left + element.offsetWidth / 2;
          placeAfter = options.orientation === 'vertical' && pageY >= elementMiddleVertical || options.orientation === 'horizontal' && pageX >= elementMiddleHorizontal;
        } catch (e) {
          placeAfter = placeholderIndex < thisIndex;
        }
        if (placeAfter) {
          insertAfter(element, store(sortableElement).placeholder);
        } else {
          insertBefore(element, store(sortableElement).placeholder);
        }
        // get placeholders from all stores & remove all but current one
        Array.from(stores.values())
        // remove empty values
        .filter(function (data) {
          return data.placeholder !== undefined;
        })
        // foreach placeholder in array if outside of current sorableContainer -> remove from DOM
        .forEach(function (data) {
          if (data.placeholder !== store(sortableElement).placeholder) {
            data.placeholder.remove();
          }
        });
      } else {
        // get all placeholders from store
        var placeholders = Array.from(stores.values()).filter(function (data) {
          return data.placeholder !== undefined;
        }).map(function (data) {
          return data.placeholder;
        });
        // check if element is not in placeholders
        if (placeholders.indexOf(element) === -1 && sortableElement === element && !_filter(element.children, options.items).length) {
          placeholders.forEach(function (element) {
            return element.remove();
          });
          element.appendChild(store(sortableElement).placeholder);
        }
      }
    }, options.debounce);
    // Handle dragover and dragenter events on draggable items
    var onDragOverEnter = function onDragOverEnter(e) {
      var element = e.target;
      var sortableElement = element.isSortable === true ? element : findSortable(element, e);
      element = findDragElement(sortableElement, element);
      if (!dragging || !_listsConnected(sortableElement, dragging.parentElement) || addData(sortableElement, '_disabled') === 'true') {
        return;
      }
      var options = addData(sortableElement, 'opts');
      if (parseInt(options.maxItems) && _filter(sortableElement.children, addData(sortableElement, 'items')).length >= parseInt(options.maxItems) && dragging.parentElement !== sortableElement) {
        return;
      }
      e.preventDefault();
      e.stopPropagation();
      e.dataTransfer.dropEffect = store(sortableElement).getConfig('copy') === true ? 'copy' : 'move';
      debouncedDragOverEnter(sortableElement, element, e.pageX, e.pageY);
    };
    addEventListener(listItems.concat(sortableElement), 'dragover', onDragOverEnter);
    addEventListener(listItems.concat(sortableElement), 'dragenter', onDragOverEnter);
  });
  return sortableElements;
}
sortable.destroy = function (sortableElement) {
  _destroySortable(sortableElement);
};
sortable.enable = function (sortableElement) {
  _enableSortable(sortableElement);
};
sortable.disable = function (sortableElement) {
  _disableSortable(sortableElement);
};
/* START.TESTS_ONLY */
sortable.__testing = {
  // add internal methods here for testing purposes
  _data: addData,
  _removeItemEvents: _removeItemEvents,
  _removeItemData: _removeItemData,
  _removeSortableData: _removeSortableData,
  _removeContainerEvents: _removeContainerEvents
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sortable);

/***/ }),

/***/ "./src/admin/components/AnswerEdit.js":
/*!********************************************!*\
  !*** ./src/admin/components/AnswerEdit.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FieldEdit)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_admin_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/admin/app */ "flarum/admin/app");
/* harmony import */ var flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_admin_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/helpers/icon */ "flarum/common/helpers/icon");
/* harmony import */ var flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/utils/extractText */ "flarum/common/utils/extractText");
/* harmony import */ var flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/Component */ "flarum/common/Component");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Component__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/common/components/Switch */ "flarum/common/components/Switch");
/* harmony import */ var flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_6__);







var FieldEdit = /*#__PURE__*/function (_Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(FieldEdit, _Component);
  function FieldEdit() {
    return _Component.apply(this, arguments) || this;
  }
  var _proto = FieldEdit.prototype;
  _proto.oninit = function oninit(vnode) {
    _Component.prototype.oninit.call(this, vnode);
    this.answer = this.attrs.answer;
    this.dirty = false;
    this.processing = false;
  };
  _proto.view = function view() {
    var _this = this;
    return m("div", {
      className: "Mason-Box"
    }, this.answer.is_suggested() && [m("span", {
      className: "fas fa-arrows-alt Mason-Box--handle js-answer-handle"
    }), ' '], m("span", {
      onclick: function onclick() {
        var newContent = prompt(flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_3___default()(flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('xsoft-mason-tag.admin.buttons.edit-answer-prompt')), _this.answer.content());
        if (newContent) {
          _this.updateAttribute('content', newContent);
        }
      },
      title: flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_3___default()(flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('xsoft-mason-tag.admin.buttons.edit-answer'))
    }, this.answer.content(), " ", flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_2___default()('fas fa-pen')), m((flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_6___default()), {
      state: this.answer.is_suggested(),
      onchange: function onchange(value) {
        _this.updateAttribute('is_suggested', value);

        // Save right away, because updating the model with immediately trigger a redraw of the UI
        // And the unsaved state won't be preserved because the AnswerEdit component changes its place
        _this.saveAnswer();
      }
    }, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('xsoft-mason-tag.admin.fields.is_suggested')), m("div", {
      className: "ButtonGroup"
    }, m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_5___default()), {
      className: "Button Button--primary",
      loading: this.processing,
      disabled: !this.readyToSave(),
      onclick: this.saveAnswer.bind(this)
    }, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('xsoft-mason-tag.admin.buttons.save-answer')), m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_5___default()), {
      className: "Button Button--danger",
      loading: this.processing,
      onclick: this.deleteAnswer.bind(this)
    }, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('xsoft-mason-tag.admin.buttons.delete-answer'))));
  };
  _proto.updateAttribute = function updateAttribute(attribute, value) {
    var _this$answer$pushAttr;
    this.answer.pushAttributes((_this$answer$pushAttr = {}, _this$answer$pushAttr[attribute] = value, _this$answer$pushAttr));
    this.dirty = true;
  };
  _proto.readyToSave = function readyToSave() {
    return this.dirty;
  };
  _proto.saveAnswer = function saveAnswer() {
    var _this2 = this;
    this.processing = true;
    this.answer.save(this.answer.data.attributes).then(function () {
      _this2.processing = false;
      _this2.dirty = false;
      m.redraw();
    })["catch"](function (err) {
      _this2.processing = false;
      throw err;
    });
  };
  _proto.deleteAnswer = function deleteAnswer() {
    var _this3 = this;
    if (!confirm(flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_3___default()(flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('xsoft-mason-tag.admin.messages.delete-answer-confirmation', {
      content: this.answer.content()
    })))) {
      return;
    }
    this.processing = true;
    this.answer["delete"]().then(function () {
      _this3.processing = false;
      m.redraw();
    })["catch"](function (err) {
      _this3.processing = false;
      throw err;
    });
  };
  return FieldEdit;
}((flarum_common_Component__WEBPACK_IMPORTED_MODULE_4___default()));


/***/ }),

/***/ "./src/admin/components/FieldAnswersEdit.js":
/*!**************************************************!*\
  !*** ./src/admin/components/FieldAnswersEdit.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FieldAnswersEdit)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var html5sortable_dist_html5sortable_es_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! html5sortable/dist/html5sortable.es.js */ "./node_modules/html5sortable/dist/html5sortable.es.js");
/* harmony import */ var flarum_admin_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/admin/app */ "flarum/admin/app");
/* harmony import */ var flarum_admin_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_admin_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/helpers/icon */ "flarum/common/helpers/icon");
/* harmony import */ var flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/Component */ "flarum/common/Component");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Component__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_common_utils_throttleDebounce__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/common/utils/throttleDebounce */ "flarum/common/utils/throttleDebounce");
/* harmony import */ var flarum_common_utils_throttleDebounce__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_throttleDebounce__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _AnswerEdit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./AnswerEdit */ "./src/admin/components/AnswerEdit.js");
/* harmony import */ var _common_helpers_sortByAttribute__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @common/helpers/sortByAttribute */ "./src/common/helpers/sortByAttribute.ts");









var FieldAnswersEdit = /*#__PURE__*/function (_Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(FieldAnswersEdit, _Component);
  function FieldAnswersEdit() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.sortingChanged = (0,flarum_common_utils_throttleDebounce__WEBPACK_IMPORTED_MODULE_6__.debounce)(500, function () {
      var sorting = _this.$('.js-answer-data').map(function () {
        return $(this).data('id');
      }).get();
      _this.updateSort(sorting);
    });
    return _this;
  }
  var _proto = FieldAnswersEdit.prototype;
  _proto.oninit = function oninit(vnode) {
    _Component.prototype.oninit.call(this, vnode);
    this.field = this.attrs.field;
    this.processing = false;
    this.new_content = '';
    this.showUserAnswers = false;
  };
  _proto.configSortable = function configSortable() {
    var container = this.element.querySelector('.js-answers-container');

    // If the field doesn't exist, it doesn't have a field edit area
    if (!container) {
      return;
    }
    var el = (0,html5sortable_dist_html5sortable_es_js__WEBPACK_IMPORTED_MODULE_1__["default"])(container, {
      handle: '.js-answer-handle'
    })[0];

    // Prevents issue with more and more event listeners
    // being added, resulting in 100s of XHR requests.
    el.removeEventListener('sortupdate', this.sortingChanged);
    el.addEventListener('sortupdate', this.sortingChanged);
  };
  _proto.oncreate = function oncreate(vnode) {
    _Component.prototype.oncreate.call(this, vnode);
    this.configSortable();
  };
  _proto.onupdate = function onupdate() {
    this.configSortable();
  };
  _proto.view = function view() {
    var _this2 = this;
    if (!this.field.exists) {
      return m("div", null, flarum_admin_app__WEBPACK_IMPORTED_MODULE_2___default().translator.trans('xsoft-mason-tag.admin.fields.save-field-for-answers'));
    }
    var suggestedAnswers = [];
    var userAnswers = [];
    (this.field.allAnswers() || []).forEach(function (answer) {
      // When answers are deleted via store.delete() they stay as an "undefined" relationship
      // We ignore these deleted answers
      if (typeof answer === 'undefined') {
        return;
      }
      if (answer.is_suggested()) {
        suggestedAnswers.push(answer);
      } else {
        userAnswers.push(answer);
      }
    });
    return [m("div", null, m("div", {
      className: "Mason-Container js-answers-container"
    }, (0,_common_helpers_sortByAttribute__WEBPACK_IMPORTED_MODULE_8__["default"])(suggestedAnswers).map(function (answer) {
      return m("div", {
        className: "js-answer-data",
        key: answer.id(),
        "data-id": answer.id()
      }, m(_AnswerEdit__WEBPACK_IMPORTED_MODULE_7__["default"], {
        answer: answer
      }));
    })), userAnswers.length && m('[', null, m("button", {
      className: "Button Button--block Mason-Box-Header",
      onclick: function onclick() {
        _this2.showUserAnswers = !_this2.showUserAnswers;
      }
    }, m("div", {
      className: "Mason-Box-Header-Title"
    }, flarum_admin_app__WEBPACK_IMPORTED_MODULE_2___default().translator.trans('xsoft-mason-tag.admin.buttons.show-user-answers', {
      count: userAnswers.length
    })), m("div", null, flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_3___default()('fas fa-chevron-' + (this.showUserAnswers ? 'up' : 'down')))), this.showUserAnswers && m("div", {
      className: "Mason-Container"
    }, (0,_common_helpers_sortByAttribute__WEBPACK_IMPORTED_MODULE_8__["default"])(userAnswers, 'content').map(function (answer) {
      return m("div", {
        key: answer.id()
      }, m(_AnswerEdit__WEBPACK_IMPORTED_MODULE_7__["default"], {
        answer: answer
      }));
    })))), m("div", {
      className: "Form-group"
    }, m("label", null, flarum_admin_app__WEBPACK_IMPORTED_MODULE_2___default().translator.trans('xsoft-mason-tag.admin.fields.new-answer'), m("input", {
      className: "FormControl",
      value: this.new_content,
      oninput: function oninput(e) {
        _this2.new_content = e.target.value;
      },
      placeholder: flarum_admin_app__WEBPACK_IMPORTED_MODULE_2___default().translator.trans('xsoft-mason-tag.admin.fields.new-answer-placeholder')
    }))), m("div", {
      className: "Form-group"
    }, m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_5___default()), {
      className: "Button Button--primary",
      loading: this.processing,
      disabled: !this.new_content,
      onclick: this.saveField.bind(this)
    }, flarum_admin_app__WEBPACK_IMPORTED_MODULE_2___default().translator.trans('xsoft-mason-tag.admin.buttons.add-answer')))];
  };
  _proto.saveField = function saveField() {
    var _this3 = this;
    this.processing = true;
    flarum_admin_app__WEBPACK_IMPORTED_MODULE_2___default().request({
      method: 'POST',
      url: flarum_admin_app__WEBPACK_IMPORTED_MODULE_2___default().forum.attribute('apiUrl') + this.field.apiEndpoint() + '/answers',
      body: {
        data: {
          attributes: {
            content: this.new_content,
            is_suggested: true
          }
        }
      }
    }).then(function (result) {
      flarum_admin_app__WEBPACK_IMPORTED_MODULE_2___default().store.pushPayload(result);
      _this3.new_content = '';
      _this3.processing = false;
      m.redraw();
    });
  };
  _proto.updateSort = function updateSort(sorting) {
    flarum_admin_app__WEBPACK_IMPORTED_MODULE_2___default().request({
      method: 'POST',
      url: flarum_admin_app__WEBPACK_IMPORTED_MODULE_2___default().forum.attribute('apiUrl') + this.field.apiEndpoint() + '/answers/order',
      body: {
        sort: sorting
      }
    }).then(function (result) {
      // Update sort attributes
      flarum_admin_app__WEBPACK_IMPORTED_MODULE_2___default().store.pushPayload(result);
      m.redraw();
    });
  };
  return FieldAnswersEdit;
}((flarum_common_Component__WEBPACK_IMPORTED_MODULE_4___default()));


/***/ }),

/***/ "./src/admin/components/FieldEdit.js":
/*!*******************************************!*\
  !*** ./src/admin/components/FieldEdit.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FieldEdit)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_admin_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/admin/app */ "flarum/admin/app");
/* harmony import */ var flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_admin_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/helpers/icon */ "flarum/common/helpers/icon");
/* harmony import */ var flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/utils/extractText */ "flarum/common/utils/extractText");
/* harmony import */ var flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/Component */ "flarum/common/Component");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Component__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/common/components/Switch */ "flarum/common/components/Switch");
/* harmony import */ var flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _FieldAnswersEdit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./FieldAnswersEdit */ "./src/admin/components/FieldAnswersEdit.js");








var FieldEdit = /*#__PURE__*/function (_Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(FieldEdit, _Component);
  function FieldEdit() {
    return _Component.apply(this, arguments) || this;
  }
  var _proto = FieldEdit.prototype;
  _proto.oninit = function oninit(vnode) {
    _Component.prototype.oninit.call(this, vnode);
    this.field = this.attrs.field;
    this.dirty = false;
    this.processing = false;
    this.toggleFields = false;
    if (!this.field) {
      this.initNewField();
    }
  };
  _proto.initNewField = function initNewField() {
    this.field = flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().store.createRecord('mason-fields', {
      attributes: {
        name: '',
        description: '',
        min_answers_count: 0,
        max_answers_count: 1,
        // Currently not visible in the editor
        user_values_allowed: false,
        show_when_empty: false,
        validation: '',
        icon: ''
      }
    });
  };
  _proto.boxTitle = function boxTitle() {
    if (this.field.exists) {
      return this.field.name();
    }
    return flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('xsoft-mason-tag.admin.buttons.new-field');
  };
  _proto.view = function view() {
    var _this = this;
    return m("div", {
      className: "Mason-Box"
    }, this.field.exists && m("span", {
      className: "fas fa-arrows-alt Mason-Box--handle js-field-handle"
    }), m("button", {
      className: "Button Button--block Mason-Box-Header",
      onclick: function onclick() {
        _this.toggleFields = !_this.toggleFields;
      }
    }, m("div", {
      className: "Mason-Box-Header-Title"
    }, this.boxTitle()), m("div", null, this.field.exists && flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('xsoft-mason-tag.admin.buttons.edit-field') + ' ', flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_2___default()('fas fa-chevron-' + (this.toggleFields ? 'up' : 'down')))), this.toggleFields && this.viewFields());
  };
  _proto.viewFields = function viewFields() {
    var _this2 = this;
    return [m("div", {
      className: "Mason-Box--row"
    }, m("div", {
      className: "Mason-Box--column"
    }, m("h4", null, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('xsoft-mason-tag.admin.titles.field-settings')), m("div", {
      className: "Form-group"
    }, m("label", null, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('xsoft-mason-tag.admin.fields.name'), m("input", {
      className: "FormControl",
      value: this.field.name(),
      oninput: function oninput(event) {
        _this2.updateAttribute('name', event.target.value);
      }
    }), m("div", {
      className: "helpText"
    }, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('xsoft-mason-tag.admin.fields.name-help')))), m("div", {
      className: "Form-group"
    }, m("label", null, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('xsoft-mason-tag.admin.fields.description'), m("input", {
      className: "FormControl",
      value: this.field.description(),
      oninput: function oninput(event) {
        _this2.updateAttribute('description', event.target.value);
      }
    }), m("div", {
      className: "helpText"
    }, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('xsoft-mason-tag.admin.fields.description-help')))), m("div", {
      className: "Form-group"
    }, m("label", null, m((flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_6___default()), {
      state: this.field.min_answers_count() === 1,
      onchange: function onchange(val) {
        return _this2.updateAttribute('min_answers_count', val ? 1 : 0);
      }
    }, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('xsoft-mason-tag.admin.fields.required')))), m("div", {
      className: "Form-group"
    }, m("label", null, m((flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_6___default()), {
      state: this.field.show_when_empty(),
      onchange: this.updateAttribute.bind(this, 'show_when_empty')
    }, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('xsoft-mason-tag.admin.fields.show_when_empty'))), m("div", {
      className: "helpText"
    }, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('xsoft-mason-tag.admin.fields.show_when_empty-help'))), m("div", {
      className: "Form-group"
    }, m("label", null, m((flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_6___default()), {
      state: this.field.user_values_allowed(),
      onchange: this.updateAttribute.bind(this, 'user_values_allowed')
    }, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('xsoft-mason-tag.admin.fields.user_values_allowed'))), m("div", {
      className: "helpText"
    }, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('xsoft-mason-tag.admin.fields.user_values_allowed-help'))), m("div", {
      className: "Form-group"
    }, m("label", null, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('xsoft-mason-tag.admin.fields.validation'), m("input", {
      className: "FormControl",
      disabled: !this.field.user_values_allowed(),
      placeholder: this.field.user_values_allowed() ? '' : flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('xsoft-mason-tag.admin.fields.enable-user-values-for-validation'),
      value: this.field.validation(),
      oninput: function oninput(e) {
        _this2.updateAttribute('validation', e.target.value);
      }
    }), m("div", {
      className: "helpText"
    }, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('xsoft-mason-tag.admin.fields.validation-help', {
      a: m("a", {
        href: "https://laravel.com/docs/6.x/validation#available-validation-rules",
        target: "_blank"
      })
    })))), m("div", {
      className: "Form-group"
    }, m("label", null, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('xsoft-mason-tag.admin.fields.icon'), " ", this.iconPreview(this.field.icon()), m("input", {
      className: "FormControl",
      value: this.field.icon(),
      oninput: function oninput(event) {
        _this2.updateAttribute('icon', event.target.value);
      }
    })), m("div", {
      className: "helpText"
    }, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('xsoft-mason-tag.admin.fields.icon-help', {
      a: m("a", {
        href: "https://fontawesome.com/icons?m=free",
        target: "_blank"
      })
    }))), m("div", {
      className: "Mason-Box--column"
    }, m("h4", null, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('xsoft-mason-tag.admin.titles.field-answers')), m("div", {
      className: "Form-group"
    }, m(_FieldAnswersEdit__WEBPACK_IMPORTED_MODULE_7__["default"], {
      field: this.field
    }))))), m("div", {
      className: "ButtonGroup"
    }, m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_5___default()), {
      className: "Button Button--primary",
      loading: this.processing,
      disabled: !this.readyToSave(),
      onclick: this.saveField.bind(this)
    }, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('xsoft-mason-tag.admin.buttons.' + (this.field.exists ? 'save' : 'add') + '-field')), this.field.exists && m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_5___default()), {
      className: "Button Button--danger",
      loading: this.processing,
      onclick: this.deleteField.bind(this)
    }, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('xsoft-mason-tag.admin.buttons.delete-field')))];
  };
  _proto.updateAttribute = function updateAttribute(attribute, value) {
    var _this$field$pushAttri;
    this.field.pushAttributes((_this$field$pushAttri = {}, _this$field$pushAttri[attribute] = value, _this$field$pushAttri));
    this.dirty = true;
  };
  _proto.readyToSave = function readyToSave() {
    // TODO: check required fields
    return this.dirty;
  };
  _proto.saveField = function saveField() {
    var _this3 = this;
    this.processing = true;
    var createNewRecord = !this.field.exists;
    this.field.save(this.field.data.attributes).then(function () {
      if (createNewRecord) {
        _this3.initNewField();
        _this3.toggleFields = false;
      }
      _this3.processing = false;
      _this3.dirty = false;
      m.redraw();
    })["catch"](function (err) {
      _this3.processing = false;
      throw err;
    });
  };
  _proto.deleteField = function deleteField() {
    var _this4 = this;
    if (!confirm(flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_3___default()(flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('xsoft-mason-tag.admin.messages.delete-field-confirmation', {
      name: this.field.name()
    })))) {
      return;
    }
    this.processing = true;
    this.field["delete"]().then(function () {
      _this4.processing = false;
      m.redraw();
    })["catch"](function (err) {
      _this4.processing = false;
      throw err;
    });
  };
  _proto.iconPreview = function iconPreview(value) {
    if (!value) {
      return '';
    }
    return [' (', flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('xsoft-mason-tag.admin.fields.icon-preview', {
      preview: flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_2___default()(value)
    }), ')'];
  };
  return FieldEdit;
}((flarum_common_Component__WEBPACK_IMPORTED_MODULE_4___default()));


/***/ }),

/***/ "./src/admin/components/MasonSettingTags.js":
/*!**************************************************!*\
  !*** ./src/admin/components/MasonSettingTags.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MasonSettingTags)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_admin_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/admin/app */ "flarum/admin/app");
/* harmony import */ var flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_admin_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_utils_saveSettings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/utils/saveSettings */ "flarum/common/utils/saveSettings");
/* harmony import */ var flarum_common_utils_saveSettings__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_saveSettings__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/Component */ "flarum/common/Component");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Component__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/components/Switch */ "flarum/common/components/Switch");
/* harmony import */ var flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _TagFields__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TagFields */ "./src/admin/components/TagFields.js");






var MasonSettingTags = /*#__PURE__*/function (_Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(MasonSettingTags, _Component);
  function MasonSettingTags() {
    return _Component.apply(this, arguments) || this;
  }
  var _proto = MasonSettingTags.prototype;
  _proto.oninit = function oninit(vnode) {
    _Component.prototype.oninit.call(this, vnode);
    this.byTag = (flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().data.settings["xsoft-mason-tag.by-tag"]) > 0;
    this.tagsList = [];
    var tags = flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().store.all('tags');
    for (var i = 0; i < tags.length; i++) {
      var name = tags[i].data.attributes.name;
      var id = tags[i].data.id;
      this.tagsList.push({
        name: name,
        id: id
      });
    }
  };
  _proto.view = function view() {
    return m("div", {
      className: "Mason-Container"
    }, m("div", {
      className: "Form-group"
    }, m("label", null, m((flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_4___default()), {
      state: this.byTag,
      onchange: this.updateSetting.bind(this, 'byTag', 'xsoft-mason-tag.by-tag')
    }, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('xsoft-mason-tag.admin.settings.by-tag')))), this.byTag && m("div", {
      className: "Form-group"
    }, m("label", null, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('xsoft-mason-tag.admin.settings.by-tag-name')), this.tagsList.map(function (tag) {
      return m("div", {
        className: "js-tag-data",
        "data-id": tag.name
      }, m(_TagFields__WEBPACK_IMPORTED_MODULE_5__["default"], {
        name: tag.name,
        id: tag.id
      }));
    })));
  }

  /**
   * Updates setting in database.
   * @param attribute
   * @param setting
   * @param value
   */;
  _proto.updateSetting = function updateSetting(attribute, setting, value) {
    var _saveSettings;
    flarum_common_utils_saveSettings__WEBPACK_IMPORTED_MODULE_2___default()((_saveSettings = {}, _saveSettings[setting] = value, _saveSettings));
    this[attribute] = value;
  };
  return MasonSettingTags;
}((flarum_common_Component__WEBPACK_IMPORTED_MODULE_3___default()));


/***/ }),

/***/ "./src/admin/components/MasonSettings.js":
/*!***********************************************!*\
  !*** ./src/admin/components/MasonSettings.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MasonSettings)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_admin_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/admin/app */ "flarum/admin/app");
/* harmony import */ var flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_admin_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_utils_saveSettings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/utils/saveSettings */ "flarum/common/utils/saveSettings");
/* harmony import */ var flarum_common_utils_saveSettings__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_saveSettings__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/Component */ "flarum/common/Component");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Component__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_common_components_Select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/components/Select */ "flarum/common/components/Select");
/* harmony import */ var flarum_common_components_Select__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Select__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/common/components/Switch */ "flarum/common/components/Switch");
/* harmony import */ var flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_5__);






var MasonSettings = /*#__PURE__*/function (_Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(MasonSettings, _Component);
  function MasonSettings() {
    return _Component.apply(this, arguments) || this;
  }
  var _proto = MasonSettings.prototype;
  _proto.oninit = function oninit(vnode) {
    _Component.prototype.oninit.call(this, vnode);
    this.fieldsSectionTitle = (flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().data.settings["xsoft-mason-tag.fields-section-title"]) || '';
    this.columnCount = (flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().data.settings["xsoft-mason-tag.column-count"]) || 1;
    this.labelsAsPlaceholders = (flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().data.settings["xsoft-mason-tag.labels-as-placeholders"]) > 0;
    this.fieldsInHero = (flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().data.settings["xsoft-mason-tag.fields-in-hero"]) > 0;
    this.hideEmptyFieldsSection = (flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().data.settings["xsoft-mason-tag.hide-empty-fields-section"]) > 0;
    this.tagsAsFields = (flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().data.settings["xsoft-mason-tag.tags-as-fields"]) > 0;
    this.tagsFieldName = (flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().data.settings["xsoft-mason-tag.tags-field-name"]) || '';
    this.columnOptions = {};
    for (var i = 1; i <= 3; i++) {
      this.columnOptions[i] = flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('xsoft-mason-tag.admin.settings.n-columns', {
        count: i
      });
    }
  };
  _proto.view = function view() {
    var _this = this;
    return m("div", {
      className: "Mason-Container"
    }, m("div", {
      className: "Form-group"
    }, m("label", null, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('xsoft-mason-tag.admin.settings.fields-section-title'), m("input", {
      className: "FormControl",
      value: this.fieldsSectionTitle,
      placeholder: flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('xsoft-mason-tag.admin.settings.fields-section-title-placeholder'),
      onchange: function onchange(event) {
        _this.updateSetting('fieldsSectionTitle', 'xsoft-mason-tag.fields-section-title', event.target.value);
      }
    })), m("div", {
      className: "helpText"
    }, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('xsoft-mason-tag.admin.settings.fields-section-title-help'))), m("div", {
      className: "Form-group"
    }, m("label", null, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('xsoft-mason-tag.admin.settings.column-count'), ",", m((flarum_common_components_Select__WEBPACK_IMPORTED_MODULE_4___default()), {
      options: this.columnOptions,
      value: this.columnCount,
      onchange: this.updateSetting.bind(this, 'columnCount', 'xsoft-mason-tag.column-count')
    }))), m("div", {
      className: "Form-group"
    }, m("label", null, m((flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_5___default()), {
      state: this.labelsAsPlaceholders,
      onchange: this.updateSetting.bind(this, 'labelsAsPlaceholders', 'xsoft-mason-tag.labels-as-placeholders')
    }, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('xsoft-mason-tag.admin.settings.labels-as-placeholders'))), m("div", {
      className: "helpText"
    }, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('xsoft-mason-tag.admin.settings.labels-as-placeholders-help'))), m("div", {
      className: "Form-group"
    }, m("label", null, m((flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_5___default()), {
      state: this.fieldsInHero,
      onchange: this.updateSetting.bind(this, 'fieldsInHero', 'xsoft-mason-tag.fields-in-hero')
    }, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('xsoft-mason-tag.admin.settings.fields-in-hero')))), m("div", {
      className: "Form-group"
    }, m("label", null, m((flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_5___default()), {
      state: this.hideEmptyFieldsSection,
      onchange: this.updateSetting.bind(this, 'hideEmptyFieldsSection', 'xsoft-mason-tag.hide-empty-fields-section')
    }, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('xsoft-mason-tag.admin.settings.hide-empty-fields-section'))), m("div", {
      className: "helpText"
    }, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('xsoft-mason-tag.admin.settings.hide-empty-fields-section-help'))), m("div", {
      className: "Form-group"
    }, m("label", null, m((flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_5___default()), {
      state: this.tagsAsFields,
      onchange: this.updateSetting.bind(this, 'tagsAsFields', 'xsoft-mason-tag.tags-as-fields')
    }, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('xsoft-mason-tag.admin.settings.tags-as-field'))), m("div", {
      className: "helpText"
    }, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('xsoft-mason-tag.admin.settings.tags-as-field-help'))), this.tagsAsFields && m("div", {
      className: "Form-group"
    }, m("label", null, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('xsoft-mason-tag.admin.settings.tags-field-name')), m("input", {
      className: "FormControl",
      value: this.tagsFieldName,
      placeholder: flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('xsoft-mason-tag.admin.settings.tags-field-name-placeholder'),
      onchange: function onchange(event) {
        _this.updateSetting('tagsFieldName', 'xsoft-mason-tag.tags-field-name', event.target.value);
      }
    })));
  }

  /**
   * Updates setting in database.
   * @param attribute
   * @param setting
   * @param value
   */;
  _proto.updateSetting = function updateSetting(attribute, setting, value) {
    var _saveSettings;
    flarum_common_utils_saveSettings__WEBPACK_IMPORTED_MODULE_2___default()((_saveSettings = {}, _saveSettings[setting] = value, _saveSettings));
    this[attribute] = value;
  };
  return MasonSettings;
}((flarum_common_Component__WEBPACK_IMPORTED_MODULE_3___default()));


/***/ }),

/***/ "./src/admin/components/TagFields.js":
/*!*******************************************!*\
  !*** ./src/admin/components/TagFields.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TagFields)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_admin_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/admin/app */ "flarum/admin/app");
/* harmony import */ var flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_admin_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/helpers/icon */ "flarum/common/helpers/icon");
/* harmony import */ var flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/Component */ "flarum/common/Component");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Component__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/components/Switch */ "flarum/common/components/Switch");
/* harmony import */ var flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _common_helpers_sortByAttribute__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @common/helpers/sortByAttribute */ "./src/common/helpers/sortByAttribute.ts");






var TagFields = /*#__PURE__*/function (_Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(TagFields, _Component);
  function TagFields() {
    return _Component.apply(this, arguments) || this;
  }
  var _proto = TagFields.prototype;
  _proto.oninit = function oninit(vnode) {
    _Component.prototype.oninit.call(this, vnode);
    this.init();
  };
  _proto.init = function init() {
    var _this = this;
    flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().request({
      method: 'GET',
      url: flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().forum.attribute('apiUrl') + '/xsoft/mason-tag/bytag'
    }).then(function (result) {
      flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().store.pushPayload(result);
      _this.initRows();
    });
    this.tag = this.attrs.name;
    this.tagID = this.attrs.id;
    this.dirty = false;
    this.processing = false;
    this.toggleFields = false;
    this.dataRow;
    this.fieldsList = [];
    this.matchingTags = [];
  };
  _proto.initRows = function initRows() {
    var _this2 = this;
    // result is from the API call, switch to that if nec;
    var tempStorage = flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().store.all('mason-bytags');
    var fields = flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().store.all('mason-fields');

    // match each Tag with the rows in the database that contain its fields
    this.matchingTags = tempStorage.filter(function (match) {
      return match.data.attributes.tag_name == _this2.tag;
    });
    // sort alphabetically
    this.matchingTags.sort(function (x, y) {
      var a = x.data.attributes.field_name,
        b = y.data.attributes.field_name;
      return a == b ? 0 : a > b ? 1 : -1;
    });

    // if a Tag has just been created, make its rows in the database
    if (this.matchingTags == false) {
      (0,_common_helpers_sortByAttribute__WEBPACK_IMPORTED_MODULE_5__["default"])(fields).map(function (field, i) {
        var rec = flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().store.createRecord('mason-bytags', {
          attributes: {
            tag_name: _this2.tag,
            tag_id: _this2.tagID,
            field_name: field.data.attributes.name,
            "switch": false
          }
        });
        _this2.matchingTags.push(rec);
        _this2.makeRow(rec.data.attributes, i);
      });
    }
  };
  _proto.makeRow = function makeRow(attributes, count) {
    flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().request({
      method: 'POST',
      url: flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().forum.attribute('apiUrl') + '/xsoft/mason-tag/bytag',
      body: {
        data: {
          attributes: attributes
        }
      }
    }).then(function (result) {
      flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().store.pushPayload(result);
      // this.reInit(count);
      return;
    });
  };
  _proto.updateRow = function updateRow(field, state) {
    flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().request({
      method: 'PATCH',
      url: flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().forum.attribute('apiUrl') + '/xsoft/mason-tag/bytag/' + field.data.id,
      body: {
        data: {
          attributes: {
            "switch": state
          }
        }
      }
    }).then(function (result) {
      flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().store.pushPayload(result);
      m.redraw();
    });
  };
  _proto.reInit = function reInit(num) {
    // re-initialize once all the rows are made per tag;
    if (flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().store.all('mason-fields').length == num) {
      this.init();
    }
  };
  _proto.view = function view() {
    var _this3 = this;
    return m("div", {
      className: "Mason-Tags-Dropdown"
    }, m("div", {
      className: "Button Button--block Mason-Box-Header",
      onclick: function onclick() {
        return _this3.toggleFields = !_this3.toggleFields;
      }
    }, m("div", {
      className: "Mason-Box-Header-Title"
    }, this.tag), m("div", null, flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_2___default()('fas fa-chevron-' + (this.toggleFields ? 'up' : 'down')))), this.toggleFields && this.matchingTags.map(function (field) {
      return m("div", {
        className: "Form-group"
      }, m("label", null, m((flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_4___default()), {
        state: field.data.attributes["switch"],
        onchange: _this3.updateRow.bind(_this3, field)
      }, field.data.attributes.field_name)));
    }));
  };
  return TagFields;
}((flarum_common_Component__WEBPACK_IMPORTED_MODULE_3___default()));


/***/ }),

/***/ "./src/admin/index.js":
/*!****************************!*\
  !*** ./src/admin/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_admin_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/admin/app */ "flarum/admin/app");
/* harmony import */ var flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_admin_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_models_Answer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @common/models/Answer */ "./src/common/models/Answer.ts");
/* harmony import */ var _common_models_Field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @common/models/Field */ "./src/common/models/Field.ts");
/* harmony import */ var _common_models_ByTag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @common/models/ByTag */ "./src/common/models/ByTag.ts");
/* harmony import */ var _pages_MasonFieldsPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/MasonFieldsPage */ "./src/admin/pages/MasonFieldsPage.js");





flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default().initializers.add('xsoft-ict-mason-tag', function () {
  (flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default().store.models["mason-fields"]) = _common_models_Field__WEBPACK_IMPORTED_MODULE_2__["default"];
  (flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default().store.models["mason-answers"]) = _common_models_Answer__WEBPACK_IMPORTED_MODULE_1__["default"];
  (flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default().store.models["mason-bytags"]) = _common_models_ByTag__WEBPACK_IMPORTED_MODULE_3__["default"];
  flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default().extensionData["for"]('xsoft-ict-mason-tag').registerPage(_pages_MasonFieldsPage__WEBPACK_IMPORTED_MODULE_4__["default"]).registerPermission({
    icon: 'fas fa-eye',
    label: flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('xsoft-mason-tag.admin.permissions.see-own-fields'),
    permission: 'xsoft-mason-tag.see-own-fields'
  }, 'view').registerPermission({
    icon: 'fas fa-eye',
    label: flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('xsoft-mason-tag.admin.permissions.see-other-fields'),
    permission: 'xsoft-mason-tag.see-other-fields',
    allowGuest: true
  }, 'view').registerPermission({
    icon: 'fas fa-tasks',
    label: flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('xsoft-mason-tag.admin.permissions.fill-fields'),
    permission: 'xsoft-mason-tag.fill-fields'
  }, 'reply').registerPermission({
    icon: 'fas fa-edit',
    label: flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('xsoft-mason-tag.admin.permissions.update-own-fields'),
    permission: 'xsoft-mason-tag.update-own-fields'
  }, 'reply').registerPermission({
    icon: 'fas fa-edit',
    label: flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('xsoft-mason-tag.admin.permissions.update-other-fields'),
    permission: 'xsoft-mason-tag.update-other-fields',
    allowGuest: true
  }, 'moderate').registerPermission({
    icon: 'fas fa-forward',
    label: flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('xsoft-mason-tag.admin.permissions.skip-required-fields'),
    permission: 'xsoft-mason-tag.skip-required-fields'
  }, 'moderate');
});

/***/ }),

/***/ "./src/admin/pages/MasonFieldsPage.js":
/*!********************************************!*\
  !*** ./src/admin/pages/MasonFieldsPage.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MasonFieldsPage)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var html5sortable_dist_html5sortable_es_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! html5sortable/dist/html5sortable.es.js */ "./node_modules/html5sortable/dist/html5sortable.es.js");
/* harmony import */ var flarum_admin_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/admin/app */ "flarum/admin/app");
/* harmony import */ var flarum_admin_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_admin_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_admin_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/admin/components/ExtensionPage */ "flarum/admin/components/ExtensionPage");
/* harmony import */ var flarum_admin_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_admin_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_common_utils_throttleDebounce__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/utils/throttleDebounce */ "flarum/common/utils/throttleDebounce");
/* harmony import */ var flarum_common_utils_throttleDebounce__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_throttleDebounce__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_FieldEdit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/FieldEdit */ "./src/admin/components/FieldEdit.js");
/* harmony import */ var _components_MasonSettings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/MasonSettings */ "./src/admin/components/MasonSettings.js");
/* harmony import */ var _common_helpers_sortByAttribute__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @common/helpers/sortByAttribute */ "./src/common/helpers/sortByAttribute.ts");
/* harmony import */ var _components_MasonSettingTags__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/MasonSettingTags */ "./src/admin/components/MasonSettingTags.js");









var MasonFieldsPage = /*#__PURE__*/function (_ExtensionPage) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(MasonFieldsPage, _ExtensionPage);
  function MasonFieldsPage() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _ExtensionPage.call.apply(_ExtensionPage, [this].concat(args)) || this;
    _this.sortingChanged = (0,flarum_common_utils_throttleDebounce__WEBPACK_IMPORTED_MODULE_4__.debounce)(500, function () {
      var sorting = _this.$('.js-field-data').map(function () {
        return $(this).data('id');
      }).get();
      _this.updateSort(sorting);
    });
    return _this;
  }
  var _proto = MasonFieldsPage.prototype;
  _proto.oninit = function oninit(vnode) {
    _ExtensionPage.prototype.oninit.call(this, vnode);
    flarum_admin_app__WEBPACK_IMPORTED_MODULE_2___default().request({
      method: 'GET',
      url: flarum_admin_app__WEBPACK_IMPORTED_MODULE_2___default().forum.attribute('apiUrl') + '/xsoft/mason-tag/fields'
    }).then(function (result) {
      flarum_admin_app__WEBPACK_IMPORTED_MODULE_2___default().store.pushPayload(result);
      m.redraw();
    });
  };
  _proto.configSortable = function configSortable() {
    var el = (0,html5sortable_dist_html5sortable_es_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this.element.querySelector('.js-fields-container'), {
      handle: '.js-field-handle'
    })[0];

    // Prevents issue with more and more event listeners
    // being added, resulting in 100s of XHR requests.
    el.removeEventListener('sortupdate', this.sortingChanged);
    el.addEventListener('sortupdate', this.sortingChanged);
  };
  _proto.oncreate = function oncreate(vnode) {
    _ExtensionPage.prototype.oncreate.call(this, vnode);
    this.configSortable();
  };
  _proto.onupdate = function onupdate() {
    this.configSortable();
  };
  _proto.content = function content() {
    var fields = flarum_admin_app__WEBPACK_IMPORTED_MODULE_2___default().store.all('mason-fields');
    var fieldsList = [];
    (0,_common_helpers_sortByAttribute__WEBPACK_IMPORTED_MODULE_7__["default"])(fields).forEach(function (field) {
      // Build array of fields to show.
      fieldsList.push(m("div", {
        className: "js-field-data",
        key: field.id(),
        "data-id": field.id()
      }, m(_components_FieldEdit__WEBPACK_IMPORTED_MODULE_5__["default"], {
        field: field
      })));
    });
    return m("div", {
      className: "ExtensionPage-settings"
    }, m("div", {
      className: "container"
    }, m("h2", null, flarum_admin_app__WEBPACK_IMPORTED_MODULE_2___default().translator.trans('xsoft-mason-tag.admin.titles.fields')), m("div", {
      className: "Mason-Container"
    }, m("div", {
      className: "js-fields-container"
    }, fieldsList), m(_components_FieldEdit__WEBPACK_IMPORTED_MODULE_5__["default"], null)), m("h2", null, flarum_admin_app__WEBPACK_IMPORTED_MODULE_2___default().translator.trans('xsoft-mason-tag.admin.titles.tag-settings')), m(_components_MasonSettingTags__WEBPACK_IMPORTED_MODULE_8__["default"], null), m("h2", null, flarum_admin_app__WEBPACK_IMPORTED_MODULE_2___default().translator.trans('xsoft-mason-tag.admin.titles.settings')), m(_components_MasonSettings__WEBPACK_IMPORTED_MODULE_6__["default"], null)));
  };
  _proto.updateSort = function updateSort(sorting) {
    flarum_admin_app__WEBPACK_IMPORTED_MODULE_2___default().request({
      method: 'POST',
      url: flarum_admin_app__WEBPACK_IMPORTED_MODULE_2___default().forum.attribute('apiUrl') + '/xsoft/mason-tag/fields/order',
      body: {
        sort: sorting
      }
    }).then(function (result) {
      // Update sort attributes
      flarum_admin_app__WEBPACK_IMPORTED_MODULE_2___default().store.pushPayload(result);
      m.redraw();
    });
  };
  return MasonFieldsPage;
}((flarum_admin_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_3___default()));


/***/ }),

/***/ "./src/common/helpers/sortByAttribute.ts":
/*!***********************************************!*\
  !*** ./src/common/helpers/sortByAttribute.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ sortByAttribute)
/* harmony export */ });
function sortByAttribute(items, attr) {
  if (!attr) attr = 'sort';
  return items.sort(function (a, b) {
    return a[attr]() - b[attr]();
  });
}

/***/ }),

/***/ "./src/common/models/Answer.ts":
/*!*************************************!*\
  !*** ./src/common/models/Answer.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Answer)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_common_Model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/Model */ "flarum/common/Model");
/* harmony import */ var flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Model__WEBPACK_IMPORTED_MODULE_1__);


var Answer = /*#__PURE__*/function (_Model) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Answer, _Model);
  function Answer() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _Model.call.apply(_Model, [this].concat(args)) || this;
    _this.content = flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute('content');
    _this.is_suggested = flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute('is_suggested');
    _this.sort = flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute('sort');
    _this.field = flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().hasOne('field');
    return _this;
  }
  var _proto = Answer.prototype;
  _proto.apiEndpoint = function apiEndpoint() {
    return '/xsoft/mason-tag/answers' + (this.exists ? '/' + this.data.id : '');
  };
  return Answer;
}((flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default()));


/***/ }),

/***/ "./src/common/models/ByTag.ts":
/*!************************************!*\
  !*** ./src/common/models/ByTag.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ByTag)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_common_Model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/Model */ "flarum/common/Model");
/* harmony import */ var flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Model__WEBPACK_IMPORTED_MODULE_1__);


var ByTag = /*#__PURE__*/function (_Model) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(ByTag, _Model);
  function ByTag() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _Model.call.apply(_Model, [this].concat(args)) || this;
    _this.tag_name = flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute('tag_name');
    _this.tag_id = flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute('tag_id');
    _this.field_name = flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute('field_name');
    _this["switch"] = flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute('switch');
    return _this;
  }
  var _proto = ByTag.prototype;
  _proto.apiEndpoint = function apiEndpoint() {
    return '/xsoft/mason-tag/bytags' + (this.exists ? '/' + this.data.id : '');
  };
  return ByTag;
}((flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default()));


/***/ }),

/***/ "./src/common/models/Field.ts":
/*!************************************!*\
  !*** ./src/common/models/Field.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Field)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_common_Model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/Model */ "flarum/common/Model");
/* harmony import */ var flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Model__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_utils_computed__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/utils/computed */ "flarum/common/utils/computed");
/* harmony import */ var flarum_common_utils_computed__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_computed__WEBPACK_IMPORTED_MODULE_2__);



var Field = /*#__PURE__*/function (_Model) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Field, _Model);
  function Field() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _Model.call.apply(_Model, [this].concat(args)) || this;
    _this.name = flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute('name');
    _this.description = flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute('description');
    _this.min_answers_count = flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute('min_answers_count');
    _this.max_answers_count = flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute('max_answers_count');
    _this.show_when_empty = flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute('show_when_empty');
    _this.user_values_allowed = flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute('user_values_allowed');
    _this.validation = flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute('validation');
    _this.icon = flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute('icon');
    _this.sort = flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute('sort');
    _this.deleted_at = flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute('deleted_at', (flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().transformDate));
    _this.allAnswers = flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().hasMany('allAnswers');
    _this.suggestedAnswers = flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().hasMany('suggestedAnswers');
    _this.required = flarum_common_utils_computed__WEBPACK_IMPORTED_MODULE_2___default()('min_answers_count', function (min_answers_count) {
      return min_answers_count > 0;
    });
    _this.multiple = flarum_common_utils_computed__WEBPACK_IMPORTED_MODULE_2___default()('max_answers_count', function (max_answers_count) {
      return max_answers_count > 1;
    });
    return _this;
  }
  var _proto = Field.prototype;
  _proto.apiEndpoint = function apiEndpoint() {
    return '/xsoft/mason-tag/fields' + (this.exists ? '/' + this.data.id : '');
  };
  return Field;
}((flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default()));


/***/ }),

/***/ "flarum/admin/app":
/*!**************************************************!*\
  !*** external "flarum.core.compat['admin/app']" ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['admin/app'];

/***/ }),

/***/ "flarum/admin/components/ExtensionPage":
/*!***********************************************************************!*\
  !*** external "flarum.core.compat['admin/components/ExtensionPage']" ***!
  \***********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['admin/components/ExtensionPage'];

/***/ }),

/***/ "flarum/common/Component":
/*!*********************************************************!*\
  !*** external "flarum.core.compat['common/Component']" ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/Component'];

/***/ }),

/***/ "flarum/common/Model":
/*!*****************************************************!*\
  !*** external "flarum.core.compat['common/Model']" ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/Model'];

/***/ }),

/***/ "flarum/common/components/Button":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['common/components/Button']" ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/Button'];

/***/ }),

/***/ "flarum/common/components/Select":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['common/components/Select']" ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/Select'];

/***/ }),

/***/ "flarum/common/components/Switch":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['common/components/Switch']" ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/Switch'];

/***/ }),

/***/ "flarum/common/helpers/icon":
/*!************************************************************!*\
  !*** external "flarum.core.compat['common/helpers/icon']" ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/helpers/icon'];

/***/ }),

/***/ "flarum/common/utils/computed":
/*!**************************************************************!*\
  !*** external "flarum.core.compat['common/utils/computed']" ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/utils/computed'];

/***/ }),

/***/ "flarum/common/utils/extractText":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['common/utils/extractText']" ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/utils/extractText'];

/***/ }),

/***/ "flarum/common/utils/saveSettings":
/*!******************************************************************!*\
  !*** external "flarum.core.compat['common/utils/saveSettings']" ***!
  \******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/utils/saveSettings'];

/***/ }),

/***/ "flarum/common/utils/throttleDebounce":
/*!**********************************************************************!*\
  !*** external "flarum.core.compat['common/utils/throttleDebounce']" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/utils/throttleDebounce'];

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _inheritsLoose)
/* harmony export */ });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _setPrototypeOf)
/* harmony export */ });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!******************!*\
  !*** ./admin.ts ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_admin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/admin */ "./src/admin/index.js");

})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=admin.js.map