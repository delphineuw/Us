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

var CurrencyTry = function CurrencyTry(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M19,12A9,9 0 0,1 10,21H8V12.77L5,13.87V11.74L8,10.64V8.87L5,9.96V7.84L8,6.74V3H10V6L15,4.2V6.32L10,8.14V9.92L15,8.1V10.23L10,12.05V19A7,7 0 0,0 17,12H19Z' })
  );
};
CurrencyTry = (0, _pure2.default)(CurrencyTry);
CurrencyTry.displayName = 'CurrencyTry';
CurrencyTry.muiName = 'SvgIcon';

exports.default = CurrencyTry;