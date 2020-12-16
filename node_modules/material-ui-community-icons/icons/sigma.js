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

var Sigma = function Sigma(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M5,4H18V9H17L16,6H10.06L13.65,11.13L9.54,17H16L17,15H18V20H5L10.6,12L5,4Z' })
  );
};
Sigma = (0, _pure2.default)(Sigma);
Sigma.displayName = 'Sigma';
Sigma.muiName = 'SvgIcon';

exports.default = Sigma;