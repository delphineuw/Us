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

var XboxControllerOff = function XboxControllerOff(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M2,5.27L3.28,4L20,20.72L18.73,22L12.5,15.75H8.75C6.75,15.75 6,18 4,19C2,19 0.5,16.04 4.42,7.69L2,5.27M9.33,6.23H14.67C16,5 18.81,6.67 18.81,6.67L19.25,7.5H19.5C23,15 22.28,18.2 20.69,18.87L7.62,5.8C8.25,5.73 8.87,5.81 9.33,6.23M12,7A1,1 0 0,0 11,8A1,1 0 0,0 12,9A1,1 0 0,0 13,8A1,1 0 0,0 12,7Z' })
  );
};
XboxControllerOff = (0, _pure2.default)(XboxControllerOff);
XboxControllerOff.displayName = 'XboxControllerOff';
XboxControllerOff.muiName = 'SvgIcon';

exports.default = XboxControllerOff;