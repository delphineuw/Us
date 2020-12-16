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

var BatteryCharging = function BatteryCharging(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M15.67,4H14V2H10V4H8.33A1.33,1.33 0 0,0 7,5.33V20.66C7,21.4 7.6,22 8.33,22H15.66C16.4,22 17,21.4 17,20.67V5.33A1.33,1.33 0 0,0 15.67,4M11,20V14.5H9L13,7V12.5H15' })
  );
};
BatteryCharging = (0, _pure2.default)(BatteryCharging);
BatteryCharging.displayName = 'BatteryCharging';
BatteryCharging.muiName = 'SvgIcon';

exports.default = BatteryCharging;