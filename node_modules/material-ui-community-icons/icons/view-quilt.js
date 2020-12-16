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

var ViewQuilt = function ViewQuilt(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M10,5V11H21V5M16,18H21V12H16M4,18H9V5H4M10,18H15V12H10V18Z' })
  );
};
ViewQuilt = (0, _pure2.default)(ViewQuilt);
ViewQuilt.displayName = 'ViewQuilt';
ViewQuilt.muiName = 'SvgIcon';

exports.default = ViewQuilt;