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

var AndroidDebugBridge = function AndroidDebugBridge(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M15,9A1,1 0 0,1 14,8A1,1 0 0,1 15,7A1,1 0 0,1 16,8A1,1 0 0,1 15,9M9,9A1,1 0 0,1 8,8A1,1 0 0,1 9,7A1,1 0 0,1 10,8A1,1 0 0,1 9,9M16.12,4.37L18.22,2.27L17.4,1.44L15.09,3.75C14.16,3.28 13.11,3 12,3C10.88,3 9.84,3.28 8.91,3.75L6.6,1.44L5.78,2.27L7.88,4.37C6.14,5.64 5,7.68 5,10V11H19V10C19,7.68 17.86,5.64 16.12,4.37M5,16C5,19.86 8.13,23 12,23A7,7 0 0,0 19,16V12H5V16Z' })
  );
};
AndroidDebugBridge = (0, _pure2.default)(AndroidDebugBridge);
AndroidDebugBridge.displayName = 'AndroidDebugBridge';
AndroidDebugBridge.muiName = 'SvgIcon';

exports.default = AndroidDebugBridge;