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

var CreditCardMultiple = function CreditCardMultiple(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M21,8V6H7V8H21M21,16V11H7V16H21M21,4A2,2 0 0,1 23,6V16A2,2 0 0,1 21,18H7C5.89,18 5,17.1 5,16V6C5,4.89 5.89,4 7,4H21M3,20H18V22H3A2,2 0 0,1 1,20V9H3V20Z' })
  );
};
CreditCardMultiple = (0, _pure2.default)(CreditCardMultiple);
CreditCardMultiple.displayName = 'CreditCardMultiple';
CreditCardMultiple.muiName = 'SvgIcon';

exports.default = CreditCardMultiple;