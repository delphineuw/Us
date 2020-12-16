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

var WindowMaximize = function WindowMaximize(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M4,4H20V20H4V4M6,8V18H18V8H6Z' })
  );
};
WindowMaximize = (0, _pure2.default)(WindowMaximize);
WindowMaximize.displayName = 'WindowMaximize';
WindowMaximize.muiName = 'SvgIcon';

exports.default = WindowMaximize;