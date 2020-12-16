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

var FormatWrapTopBottom = function FormatWrapTopBottom(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M12,7L17,17H7L12,7M3,3H21V5H3V3M3,19H21V21H3V19Z' })
  );
};
FormatWrapTopBottom = (0, _pure2.default)(FormatWrapTopBottom);
FormatWrapTopBottom.displayName = 'FormatWrapTopBottom';
FormatWrapTopBottom.muiName = 'SvgIcon';

exports.default = FormatWrapTopBottom;