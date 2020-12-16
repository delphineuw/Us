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

var SwapHorizontal = function SwapHorizontal(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M21,9L17,5V8H10V10H17V13M7,11L3,15L7,19V16H14V14H7V11Z' })
  );
};
SwapHorizontal = (0, _pure2.default)(SwapHorizontal);
SwapHorizontal.displayName = 'SwapHorizontal';
SwapHorizontal.muiName = 'SvgIcon';

exports.default = SwapHorizontal;