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

var FlagTriangle = function FlagTriangle(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M7,2H9V22H7V2M19,9L11,14.6V3.4L19,9Z' })
  );
};
FlagTriangle = (0, _pure2.default)(FlagTriangle);
FlagTriangle.displayName = 'FlagTriangle';
FlagTriangle.muiName = 'SvgIcon';

exports.default = FlagTriangle;