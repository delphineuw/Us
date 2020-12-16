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

var AppleKeyboardOption = function AppleKeyboardOption(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M3,4H9.11L16.15,18H21V20H14.88L7.84,6H3V4M14,4H21V6H14V4Z' })
  );
};
AppleKeyboardOption = (0, _pure2.default)(AppleKeyboardOption);
AppleKeyboardOption.displayName = 'AppleKeyboardOption';
AppleKeyboardOption.muiName = 'SvgIcon';

exports.default = AppleKeyboardOption;