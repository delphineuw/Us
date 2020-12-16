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

var Stairs = function Stairs(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M15,5V9H11V13H7V17H3V20H10V16H14V12H18V8H22V5H15Z' })
  );
};
Stairs = (0, _pure2.default)(Stairs);
Stairs.displayName = 'Stairs';
Stairs.muiName = 'SvgIcon';

exports.default = Stairs;