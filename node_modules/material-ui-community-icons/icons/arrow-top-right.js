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

var ArrowTopRight = function ArrowTopRight(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M5,17.59L15.59,7H9V5H19V15H17V8.41L6.41,19L5,17.59Z' })
  );
};
ArrowTopRight = (0, _pure2.default)(ArrowTopRight);
ArrowTopRight.displayName = 'ArrowTopRight';
ArrowTopRight.muiName = 'SvgIcon';

exports.default = ArrowTopRight;