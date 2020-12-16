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

var FormatWrapSquare = function FormatWrapSquare(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M12,7L17,17H7L12,7M3,3H21V5H3V3M3,7H6V9H3V7M21,7V9H18V7H21M3,11H6V13H3V11M21,11V13H18V11H21M3,15H6V17H3V15M21,15V17H18V15H21M3,19H21V21H3V19Z' })
  );
};
FormatWrapSquare = (0, _pure2.default)(FormatWrapSquare);
FormatWrapSquare.displayName = 'FormatWrapSquare';
FormatWrapSquare.muiName = 'SvgIcon';

exports.default = FormatWrapSquare;