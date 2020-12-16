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

var Openid = function Openid(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M14,2L11,3.5V19.94C7,19.5 4,17.46 4,15C4,12.75 6.5,10.85 10,10.22V8.19C4.86,8.88 1,11.66 1,15C1,18.56 5.36,21.5 11,21.94C11.03,21.94 11.06,21.94 11.09,21.94L14,20.5V2M15,8.19V10.22C16.15,10.43 17.18,10.77 18.06,11.22L16.5,12L23,13.5L22.5,9L20.5,10C19,9.12 17.12,8.47 15,8.19Z' })
  );
};
Openid = (0, _pure2.default)(Openid);
Openid.displayName = 'Openid';
Openid.muiName = 'SvgIcon';

exports.default = Openid;