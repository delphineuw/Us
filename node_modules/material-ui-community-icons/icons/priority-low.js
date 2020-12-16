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

var PriorityLow = function PriorityLow(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M14,5H22V7H14V5M14,10.5H22V12.5H14V10.5M14,16H22V18H14V16M2,11.5C2,15.08 4.92,18 8.5,18H9V20L12,17L9,14V16H8.5C6,16 4,14 4,11.5C4,9 6,7 8.5,7H12V5H8.5C4.92,5 2,7.92 2,11.5Z' })
  );
};
PriorityLow = (0, _pure2.default)(PriorityLow);
PriorityLow.displayName = 'PriorityLow';
PriorityLow.muiName = 'SvgIcon';

exports.default = PriorityLow;