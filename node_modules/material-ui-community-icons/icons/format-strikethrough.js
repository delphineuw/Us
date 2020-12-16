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

var FormatStrikethrough = function FormatStrikethrough(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M3,14H21V12H3M5,4V7H10V10H14V7H19V4M10,19H14V16H10V19Z' })
  );
};
FormatStrikethrough = (0, _pure2.default)(FormatStrikethrough);
FormatStrikethrough.displayName = 'FormatStrikethrough';
FormatStrikethrough.muiName = 'SvgIcon';

exports.default = FormatStrikethrough;