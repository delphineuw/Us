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

var WalletTravel = function WalletTravel(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M20,14H4V8H7V10H9V8H15V10H17V8H20M20,19H4V17H20M9,4H15V6H9M20,6H17V4C17,2.89 16.11,2 15,2H9C7.89,2 7,2.89 7,4V6H4C2.89,6 2,6.89 2,8V19C2,20.11 2.89,21 4,21H20C21.11,21 22,20.11 22,19V8C22,6.89 21.11,6 20,6Z' })
  );
};
WalletTravel = (0, _pure2.default)(WalletTravel);
WalletTravel.displayName = 'WalletTravel';
WalletTravel.muiName = 'SvgIcon';

exports.default = WalletTravel;