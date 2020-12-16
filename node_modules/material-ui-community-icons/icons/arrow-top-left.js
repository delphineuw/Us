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

var ArrowTopLeft = function ArrowTopLeft(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M19,17.59L17.59,19L7,8.41V15H5V5H15V7H8.41L19,17.59Z' })
  );
};
ArrowTopLeft = (0, _pure2.default)(ArrowTopLeft);
ArrowTopLeft.displayName = 'ArrowTopLeft';
ArrowTopLeft.muiName = 'SvgIcon';

exports.default = ArrowTopLeft;