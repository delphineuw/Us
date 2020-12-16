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

var SeatLegroomNormal = function SeatLegroomNormal(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M5,12V3H3V12A5,5 0 0,0 8,17H14V15H8A3,3 0 0,1 5,12M20.5,18H19V11A2,2 0 0,0 17,9H12V3H6V11A3,3 0 0,0 9,14H16V21H20.5A1.5,1.5 0 0,0 22,19.5A1.5,1.5 0 0,0 20.5,18Z' })
  );
};
SeatLegroomNormal = (0, _pure2.default)(SeatLegroomNormal);
SeatLegroomNormal.displayName = 'SeatLegroomNormal';
SeatLegroomNormal.muiName = 'SvgIcon';

exports.default = SeatLegroomNormal;