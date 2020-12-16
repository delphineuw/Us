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

var PowerSettings = function PowerSettings(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M15,24H17V22H15M16.56,4.44L15.11,5.89C16.84,6.94 18,8.83 18,11A6,6 0 0,1 12,17A6,6 0 0,1 6,11C6,8.83 7.16,6.94 8.88,5.88L7.44,4.44C5.36,5.88 4,8.28 4,11A8,8 0 0,0 12,19A8,8 0 0,0 20,11C20,8.28 18.64,5.88 16.56,4.44M13,2H11V12H13M11,24H13V22H11M7,24H9V22H7V24Z' })
  );
};
PowerSettings = (0, _pure2.default)(PowerSettings);
PowerSettings.displayName = 'PowerSettings';
PowerSettings.muiName = 'SvgIcon';

exports.default = PowerSettings;