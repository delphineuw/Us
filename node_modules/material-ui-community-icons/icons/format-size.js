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

var FormatSize = function FormatSize(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M3,12H6V19H9V12H12V9H3M9,4V7H14V19H17V7H22V4H9Z' })
  );
};
FormatSize = (0, _pure2.default)(FormatSize);
FormatSize.displayName = 'FormatSize';
FormatSize.muiName = 'SvgIcon';

exports.default = FormatSize;