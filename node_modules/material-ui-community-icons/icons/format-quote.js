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

var FormatQuote = function FormatQuote(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M14,17H17L19,13V7H13V13H16M6,17H9L11,13V7H5V13H8L6,17Z' })
  );
};
FormatQuote = (0, _pure2.default)(FormatQuote);
FormatQuote.displayName = 'FormatQuote';
FormatQuote.muiName = 'SvgIcon';

exports.default = FormatQuote;