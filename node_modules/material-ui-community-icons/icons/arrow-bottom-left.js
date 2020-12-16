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

var ArrowBottomLeft = function ArrowBottomLeft(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M19,6.41L17.59,5L7,15.59V9H5V19H15V17H8.41L19,6.41Z' })
  );
};
ArrowBottomLeft = (0, _pure2.default)(ArrowBottomLeft);
ArrowBottomLeft.displayName = 'ArrowBottomLeft';
ArrowBottomLeft.muiName = 'SvgIcon';

exports.default = ArrowBottomLeft;