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

var Exclamation = function Exclamation(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M11,4.5H13V15.5H11V4.5M13,17.5V19.5H11V17.5H13Z' })
  );
};
Exclamation = (0, _pure2.default)(Exclamation);
Exclamation.displayName = 'Exclamation';
Exclamation.muiName = 'SvgIcon';

exports.default = Exclamation;