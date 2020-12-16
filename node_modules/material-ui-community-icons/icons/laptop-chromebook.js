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

var LaptopChromebook = function LaptopChromebook(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M20,15H4V5H20M14,18H10V17H14M22,18V3H2V18H0V20H24V18H22Z' })
  );
};
LaptopChromebook = (0, _pure2.default)(LaptopChromebook);
LaptopChromebook.displayName = 'LaptopChromebook';
LaptopChromebook.muiName = 'SvgIcon';

exports.default = LaptopChromebook;