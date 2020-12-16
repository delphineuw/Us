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

var FormatHorizontalAlignRight = function FormatHorizontalAlignRight(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M13,8V11H3V13H13V16L17,12L13,8M19,20H21V4H19V20Z' })
  );
};
FormatHorizontalAlignRight = (0, _pure2.default)(FormatHorizontalAlignRight);
FormatHorizontalAlignRight.displayName = 'FormatHorizontalAlignRight';
FormatHorizontalAlignRight.muiName = 'SvgIcon';

exports.default = FormatHorizontalAlignRight;