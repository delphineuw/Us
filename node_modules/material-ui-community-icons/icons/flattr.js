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

var Flattr = function Flattr(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M21,9V15A6,6 0 0,1 15,21H4.41L11.07,14.35C11.38,14.04 11.69,13.73 11.84,13.75C12,13.78 12,14.14 12,14.5V17H14A3,3 0 0,0 17,14V8.41L21,4.41V9M3,15V9A6,6 0 0,1 9,3H19.59L12.93,9.65C12.62,9.96 12.31,10.27 12.16,10.25C12,10.22 12,9.86 12,9.5V7H10A3,3 0 0,0 7,10V15.59L3,19.59V15Z' })
  );
};
Flattr = (0, _pure2.default)(Flattr);
Flattr.displayName = 'Flattr';
Flattr.muiName = 'SvgIcon';

exports.default = Flattr;