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

var FormatTitle = function FormatTitle(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M5,4V7H10.5V19H13.5V7H19V4H5Z' })
  );
};
FormatTitle = (0, _pure2.default)(FormatTitle);
FormatTitle.displayName = 'FormatTitle';
FormatTitle.muiName = 'SvgIcon';

exports.default = FormatTitle;