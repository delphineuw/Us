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

var AccountConvert = function AccountConvert(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M7.5,21.5L8.85,20.16L12.66,23.97L12,24C5.71,24 0.56,19.16 0.05,13H1.55C1.91,16.76 4.25,19.94 7.5,21.5M16.5,2.5L15.15,3.84L11.34,0.03L12,0C18.29,0 23.44,4.84 23.95,11H22.45C22.09,7.24 19.75,4.07 16.5,2.5M6,17C6,15 10,13.9 12,13.9C14,13.9 18,15 18,17V18H6V17M15,9A3,3 0 0,1 12,12A3,3 0 0,1 9,9A3,3 0 0,1 12,6A3,3 0 0,1 15,9Z' })
  );
};
AccountConvert = (0, _pure2.default)(AccountConvert);
AccountConvert.displayName = 'AccountConvert';
AccountConvert.muiName = 'SvgIcon';

exports.default = AccountConvert;