(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('core-js/modules/es6.object.assign'), require('core-js/modules/es6.regexp.to-string'), require('core-js/modules/web.dom.iterable')) :
    typeof define === 'function' && define.amd ? define(['core-js/modules/es6.object.assign', 'core-js/modules/es6.regexp.to-string', 'core-js/modules/web.dom.iterable'], factory) :
    (global.Proxemics = factory());
}(this, (function () { 'use strict';

    var Proxemics = function Proxemics(target, _ref) {
      var _ref$territory = _ref.territory,
          territory = _ref$territory === void 0 ? 10 : _ref$territory,
          _ref$defaultProxemity = _ref.defaultProxemityClass,
          defaultProxemityClass = _ref$defaultProxemity === void 0 ? 'is-public' : _ref$defaultProxemity,
          _ref$activeProxemityC = _ref.activeProxemityClass,
          activeProxemityClass = _ref$activeProxemityC === void 0 ? 'is-proxemity' : _ref$activeProxemityC,
          _ref$intimateClass = _ref.intimateClass,
          intimateClass = _ref$intimateClass === void 0 ? 'is-intimate' : _ref$intimateClass,
          _ref$leftProxemityCla = _ref.leftProxemityClass,
          leftProxemityClass = _ref$leftProxemityCla === void 0 ? 'is-left' : _ref$leftProxemityCla,
          _ref$dataDistance = _ref.dataDistance,
          dataDistance = _ref$dataDistance === void 0 ? false : _ref$dataDistance,
          _ref$dataAngle = _ref.dataAngle,
          dataAngle = _ref$dataAngle === void 0 ? false : _ref$dataAngle,
          _ref$dataRadian = _ref.dataRadian,
          dataRadian = _ref$dataRadian === void 0 ? false : _ref$dataRadian,
          _ref$debuggable = _ref.debuggable,
          debuggable = _ref$debuggable === void 0 ? false : _ref$debuggable;
      var Approach = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var TargetElements = document.querySelectorAll(target);
      var Territory = territory;
      var Debuggable = debuggable;
      var DefaultProxemityClass = defaultProxemityClass;
      var ActiveProxemityClass = activeProxemityClass;
      var LeftProxemityClass = leftProxemityClass;
      var IntimateClass = intimateClass;
      var DataDistance = dataDistance;
      var DataAngle = dataAngle;
      var DataRadian = dataRadian;

      if (typeof window.orientation === 'undefined' && TargetElements.length > 0) {
        Array.prototype.forEach.call(TargetElements, function (targetElement) {
          targetElement.classList.add(DefaultProxemityClass);
        });

        if (Debuggable) {
          (Proxemics.InstancesInfo = function () {
            Array.prototype.forEach.call(TargetElements, function (element) {
              var el = element;
              var w = "w".concat(el.offsetLeft + el.clientWidth / 2, "px");
              var h = "h".concat(el.offsetTop + el.clientHeight / 2, "px");
              el.innerHTML = "".concat(w, " ").concat(h);
            });
          })() + (Proxemics.DebbugText = function () {
            var random = Math.random().toString(36).slice(-8);
            TargetElements[TargetElements.length - 1].insertAdjacentHTML('afterend', "<div class=\"distance-debug".concat(random, "\"></div>"));
            Proxemics.Debug = document.querySelector(".distance-debug".concat(random));
            Proxemics.Debug.innerHTML = 'ready clientX null, clientY null';
          })();
        }

        var Calculator = function Calculator() {
          Array.prototype.forEach.call(TargetElements, function (element) {
            var el = element;
            var elX = el.offsetLeft + el.clientWidth / 2;
            var elY = el.offsetTop + el.clientHeight / 2;
            var squareRoot = Math.sqrt(Math.pow(Proxemics.X - elX, 2) + Math.pow(Proxemics.Y - elY, 2)) - Territory; // eslint-disable-line max-len

            var distance = ~~Math.max(squareRoot, 0);
            var radian = Math.atan2(Proxemics.Y - elY, Proxemics.X - elX); // eslint-disable-line max-len

            var angle = ~~(radian * 180 / Math.PI + 180);

            if (Debuggable) {
              Proxemics.Debug.innerHTML = "enter clientX ".concat(Proxemics.X, "px, clientY ").concat(Proxemics.Y, "px");
              el.innerHTML = "".concat(distance, "px / ").concat(angle, "\xB0");
            }

            el.classList.remove(LeftProxemityClass);
            if (DataDistance) el.setAttribute('data-distance', distance);
            if (DataAngle) el.setAttribute('data-angle', angle);
            if (DataRadian) el.setAttribute('data-radian', radian);

            if (distance > 0) {
              el.classList.add(ActiveProxemityClass);
              el.classList.remove(IntimateClass);
            } else if (distance <= 0) {
              el.classList.add(IntimateClass);
            }

            Proxemics.Styles = function () {
              var style = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
              Object.assign(el.style, style);
            };

            var Data = {
              distance: distance,
              angle: angle,
              radian: radian,
              el: el
            };
            if (Approach != null) Approach(Data, Proxemics.Styles);
          });
        };

        var MouseMove = function MouseMove(event) {
          Proxemics.X = event.clientX;
          Proxemics.Y = event.clientY;
          Calculator();
        };

        var MouseLeave = function MouseLeave() {
          if (Debuggable) {
            Proxemics.Debug.innerHTML = 'Out of range';
            Proxemics.InstancesInfo();
          }

          Array.prototype.forEach.call(TargetElements, function (element) {
            var el = element;
            el.classList.remove(ActiveProxemityClass);
            el.classList.add(leftProxemityClass);
            el.setAttribute('style', '');
            if (DataDistance) el.removeAttribute('data-distance');
            if (DataAngle) el.removeAttribute('data-angle');
            if (DataRadian) el.removeAttribute('data-radian');
          });
        };

        var MouseEnter = function MouseEnter() {
          document.addEventListener('mousemove', MouseMove, {
            capture: false
          });
          document.addEventListener('mouseleave', MouseLeave, {
            capture: false
          });
        };

        document.body.addEventListener('mouseenter', MouseEnter, {
          capture: true
        });
      } else {
        if (TargetElements.length === 0) {
          console.log('Proximics error: There is no selector onject on this document.'); // eslint-disable-line no-console
        }

        if (typeof window.orientation !== 'undefined') {
          console.log('Proxemics warn: Only working on mouse device.'); // eslint-disable-line no-console
        }
      }
    };

    return Proxemics;

})));
