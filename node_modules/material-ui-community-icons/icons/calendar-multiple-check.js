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

var CalendarMultipleCheck = function CalendarMultipleCheck(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M21,17V8H7V17H21M21,3A2,2 0 0,1 23,5V17A2,2 0 0,1 21,19H7C5.89,19 5,18.1 5,17V5A2,2 0 0,1 7,3H8V1H10V3H18V1H20V3H21M17.53,11.06L13.09,15.5L10.41,12.82L11.47,11.76L13.09,13.38L16.47,10L17.53,11.06M3,21H17V23H3C1.89,23 1,22.1 1,21V9H3V21Z' })
  );
};
CalendarMultipleCheck = (0, _pure2.default)(CalendarMultipleCheck);
CalendarMultipleCheck.displayName = 'CalendarMultipleCheck';
CalendarMultipleCheck.muiName = 'SvgIcon';

exports.default = CalendarMultipleCheck;