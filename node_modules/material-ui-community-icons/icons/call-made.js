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

var CallMade = function CallMade(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M9,5V7H15.59L4,18.59L5.41,20L17,8.41V15H19V5' })
  );
};
CallMade = (0, _pure2.default)(CallMade);
CallMade.displayName = 'CallMade';
CallMade.muiName = 'SvgIcon';

exports.default = CallMade;