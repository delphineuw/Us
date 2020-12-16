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

var Stackexchange = function Stackexchange(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M4,14.04V11H20V14.04H4M4,10V7H20V10H4M17.46,2C18.86,2 20,3.18 20,4.63V6H4V4.63C4,3.18 5.14,2 6.54,2H17.46M4,15H20V16.35C20,17.81 18.86,19 17.46,19H16.5L13,22V19H6.54C5.14,19 4,17.81 4,16.35V15Z' })
  );
};
Stackexchange = (0, _pure2.default)(Stackexchange);
Stackexchange.displayName = 'Stackexchange';
Stackexchange.muiName = 'SvgIcon';

exports.default = Stackexchange;