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

var FormatTextdirectionLToR = function FormatTextdirectionLToR(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M21,18L17,14V17H5V19H17V22M9,10V15H11V4H13V15H15V4H17V2H9A4,4 0 0,0 5,6A4,4 0 0,0 9,10Z' })
  );
};
FormatTextdirectionLToR = (0, _pure2.default)(FormatTextdirectionLToR);
FormatTextdirectionLToR.displayName = 'FormatTextdirectionLToR';
FormatTextdirectionLToR.muiName = 'SvgIcon';

exports.default = FormatTextdirectionLToR;