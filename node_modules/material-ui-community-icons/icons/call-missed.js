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

var CallMissed = function CallMissed(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M19.59,7L12,14.59L6.41,9H11V7H3V15H5V10.41L12,17.41L21,8.41' })
  );
};
CallMissed = (0, _pure2.default)(CallMissed);
CallMissed.displayName = 'CallMissed';
CallMissed.muiName = 'SvgIcon';

exports.default = CallMissed;