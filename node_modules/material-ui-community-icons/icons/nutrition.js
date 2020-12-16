'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _pure = require('recompose/pure');

var _pure2 = _interopRequireDefault(_pure);

var _SvgIcon = require('material-ui/SvgIcon');

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Nutrition = function Nutrition(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M22,18A4,4 0 0,1 18,22H14A4,4 0 0,1 10,18V16H22V18M4,3H14A2,2 0 0,1 16,5V14H8V19H4A2,2 0 0,1 2,17V5A2,2 0 0,1 4,3M4,6V8H6V6H4M14,8V6H8V8H14M4,10V12H6V10H4M8,10V12H14V10H8M4,14V16H6V14H4Z' })
  );
};
Nutrition = (0, _pure2.default)(Nutrition);
Nutrition.displayName = 'Nutrition';
Nutrition.muiName = 'SvgIcon';

exports.default = Nutrition;