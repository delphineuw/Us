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

var TabletIpad = function TabletIpad(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M19,19H4V3H19M11.5,23A1.5,1.5 0 0,1 10,21.5A1.5,1.5 0 0,1 11.5,20A1.5,1.5 0 0,1 13,21.5A1.5,1.5 0 0,1 11.5,23M18.5,0H4.5A2.5,2.5 0 0,0 2,2.5V21.5A2.5,2.5 0 0,0 4.5,24H18.5A2.5,2.5 0 0,0 21,21.5V2.5A2.5,2.5 0 0,0 18.5,0Z' })
  );
};
TabletIpad = (0, _pure2.default)(TabletIpad);
TabletIpad.displayName = 'TabletIpad';
TabletIpad.muiName = 'SvgIcon';

exports.default = TabletIpad;