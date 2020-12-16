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

var FormatHorizontalAlignLeft = function FormatHorizontalAlignLeft(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M11,16V13H21V11H11V8L7,12L11,16M3,20H5V4H3V20Z' })
  );
};
FormatHorizontalAlignLeft = (0, _pure2.default)(FormatHorizontalAlignLeft);
FormatHorizontalAlignLeft.displayName = 'FormatHorizontalAlignLeft';
FormatHorizontalAlignLeft.muiName = 'SvgIcon';

exports.default = FormatHorizontalAlignLeft;