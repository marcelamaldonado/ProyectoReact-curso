webpackHotUpdate("static\\development\\pages\\calc.js",{

/***/ "./componentes/Calculadora.js":
/*!************************************!*\
  !*** ./componentes/Calculadora.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);







var _jsxFileName = "D:\\proyectoReact\\componentes\\Calculadora.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

var Calculadora =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Calculadora, _React$Component);

  function Calculadora() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Calculadora);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Calculadora)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      res: "0"
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onDigit", function (digit) {
      _this.setState({
        res: digit
      });
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Calculadora, [{
    key: "render",
    //altertar = () => {
    //  alert("Hola soy un metodo de clase") }
    value: function render() {
      var _this2 = this;

      // const alerta2 = ()=>alert("Hola desde alerta2")//
      return __jsx("div", {
        className: "jsx-2855167945",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-2855167945" + " " + "z-depth-2 light-blue lighten-2 white-text center-align resultados",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, this.state.res || "0"), __jsx("div", {
        className: "jsx-2855167945" + " " + "calc-container blue lighten-3 hoverable z-depht-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."].map(function (digit) {
        return __jsx("a", {
          onClick: function onClick() {
            return _this2.onDigit(digit);
          },
          className: "jsx-2855167945" + " " + "waves-effect waves-light btn",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 24
          },
          __self: this
        }, digit);
      }), __jsx("div", {
        className: "jsx-2855167945" + " " + "operadores center-align",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, ["+", "-", "/", "*", ""].map(function (digit) {
        return __jsx("a", {
          onClick: function onClick() {
            return _this2.onDigit(digit);
          },
          className: "jsx-2855167945" + " " + "waves-effect waves-light btn deep-orange darken-1",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 32
          },
          __self: this
        }, digit === "" ? "C" : digit);
      }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "2855167945",
        __self: this
      }, ".resultados.jsx-2855167945{width:300px;margin:0 auto;font-size:32px;margin-bottom:10px;}.calc-container.jsx-2855167945{width:300px;margin:0 auto;text-align:center;padding:12px;}.calc-container.jsx-2855167945 a.jsx-2855167945{padding:30px;margin:5px;}.operadores.jsx-2855167945{border:1px solid #ccc;padding:10px;margin-top:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxwcm95ZWN0b1JlYWN0XFxjb21wb25lbnRlc1xcQ2FsY3VsYWRvcmEuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0NpQixBQUdnQyxBQU1BLEFBTUMsQUFJVSxZQWZULEFBTUEsQ0FNSCxTQUlHLEVBSGpCLEVBWmtCLEFBTUcsU0FVRixNQWZHLEdBTU4sT0FVaEIsTUFUQSxHQU5BIiwiZmlsZSI6IkQ6XFxwcm95ZWN0b1JlYWN0XFxjb21wb25lbnRlc1xcQ2FsY3VsYWRvcmEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBDYWxjdWxhZG9yYSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBzdGF0ZSA9IHtcclxuICAgICAgICByZXM6IFwiMFwiXHJcbiAgICB9XHJcbiAgICBvbkRpZ2l0ID0gKGRpZ2l0KT0+e1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICByZXM6ZGlnaXRcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgLy9hbHRlcnRhciA9ICgpID0+IHtcclxuICAgICAgLy8gIGFsZXJ0KFwiSG9sYSBzb3kgdW4gbWV0b2RvIGRlIGNsYXNlXCIpIH1cclxuICAgIFxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgLy8gY29uc3QgYWxlcnRhMiA9ICgpPT5hbGVydChcIkhvbGEgZGVzZGUgYWxlcnRhMlwiKS8vXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiei1kZXB0aC0yIGxpZ2h0LWJsdWUgbGlnaHRlbi0yIHdoaXRlLXRleHQgY2VudGVyLWFsaWduIHJlc3VsdGFkb3NcIj5cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5yZXMgfHwgXCIwXCJ9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FsYy1jb250YWluZXIgYmx1ZSBsaWdodGVuLTMgaG92ZXJhYmxlIHotZGVwaHQtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgW1wiMFwiLFwiMVwiLFwiMlwiLFwiM1wiLFwiNFwiLFwiNVwiLFwiNlwiLFwiN1wiLFwiOFwiLFwiOVwiLFwiLlwiXS5tYXAoZGlnaXQ9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwid2F2ZXMtZWZmZWN0IHdhdmVzLWxpZ2h0IGJ0blwiIG9uQ2xpY2s9eygpPT50aGlzLm9uRGlnaXQoZGlnaXQpfT57ZGlnaXR9PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9wZXJhZG9yZXMgY2VudGVyLWFsaWduXCI+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgW1wiK1wiLFwiLVwiLFwiL1wiLFwiKlwiLFwiXCJdLm1hcChkaWdpdD0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ3YXZlcy1lZmZlY3Qgd2F2ZXMtbGlnaHQgYnRuIGRlZXAtb3JhbmdlIGRhcmtlbi0xXCIgb25DbGljaz17KCk9PnRoaXMub25EaWdpdChkaWdpdCl9PntkaWdpdCA9PT0gXCJcIiA/IFwiQ1wiOmRpZ2l0fTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgICAucmVzdWx0YWRvc3tcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDozMDBweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46MCBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTozMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206MTBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5jYWxjLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6MzAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOjAgYXV0bztcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOjEycHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuY2FsYy1jb250YWluZXIgYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzozMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjo1cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAub3BlcmFkb3JlcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6MjBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgQ2FsY3VsYWRvcmE7Il19 */\n/*@ sourceURL=D:\\proyectoReact\\componentes\\Calculadora.js */"));
    }
  }]);

  return Calculadora;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Calculadora);

/***/ })

})
//# sourceMappingURL=calc.js.aa27bbc73e7f0ef14738.hot-update.js.map