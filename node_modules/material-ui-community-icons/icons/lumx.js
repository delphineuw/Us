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

var Lumx = function Lumx(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M12.35,1.75L20.13,9.53L13.77,15.89L12.35,14.47L17.3,9.53L10.94,3.16L12.35,1.75M15.89,9.53L14.47,10.94L10.23,6.7L5.28,11.65L3.87,10.23L10.23,3.87L15.89,9.53M10.23,8.11L11.65,9.53L6.7,14.47L13.06,20.84L11.65,22.25L3.87,14.47L10.23,8.11M8.11,14.47L9.53,13.06L13.77,17.3L18.72,12.35L20.13,13.77L13.77,20.13L8.11,14.47Z' })
  );
};
Lumx = (0, _pure2.default)(Lumx);
Lumx.displayName = 'Lumx';
Lumx.muiName = 'SvgIcon';

exports.default = Lumx;