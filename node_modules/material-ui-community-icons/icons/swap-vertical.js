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

var SwapVertical = function SwapVertical(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M9,3L5,7H8V14H10V7H13M16,17V10H14V17H11L15,21L19,17H16Z' })
  );
};
SwapVertical = (0, _pure2.default)(SwapVertical);
SwapVertical.displayName = 'SwapVertical';
SwapVertical.muiName = 'SvgIcon';

exports.default = SwapVertical;