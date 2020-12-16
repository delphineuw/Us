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

var TimerSand = function TimerSand(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M20,2V4H18V8.41L14.41,12L18,15.59V20H20V22H4V20H6V15.59L9.59,12L6,8.41V4H4V2H20M16,16.41L13,13.41V10.59L16,7.59V4H8V7.59L11,10.59V13.41L8,16.41V17H10L12,15L14,17H16V16.41M12,9L10,7H14L12,9Z' })
  );
};
TimerSand = (0, _pure2.default)(TimerSand);
TimerSand.displayName = 'TimerSand';
TimerSand.muiName = 'SvgIcon';

exports.default = TimerSand;