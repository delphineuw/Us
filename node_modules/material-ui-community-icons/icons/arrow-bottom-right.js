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

var ArrowBottomRight = function ArrowBottomRight(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M5,6.41L6.41,5L17,15.59V9H19V19H9V17H15.59L5,6.41Z' })
  );
};
ArrowBottomRight = (0, _pure2.default)(ArrowBottomRight);
ArrowBottomRight.displayName = 'ArrowBottomRight';
ArrowBottomRight.muiName = 'SvgIcon';

exports.default = ArrowBottomRight;