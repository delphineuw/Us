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

var TabUnselected = function TabUnselected(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M15,21H17V19H15M11,21H13V19H11M19,13H21V11H19M19,21A2,2 0 0,0 21,19H19M7,5H9V3H7M19,17H21V15H19M19,3H11V9H21V5C21,3.89 20.1,3 19,3M5,21V19H3A2,2 0 0,0 5,21M3,17H5V15H3M7,21H9V19H7M3,5H5V3C3.89,3 3,3.89 3,5M3,13H5V11H3M3,9H5V7H3V9Z' })
  );
};
TabUnselected = (0, _pure2.default)(TabUnselected);
TabUnselected.displayName = 'TabUnselected';
TabUnselected.muiName = 'SvgIcon';

exports.default = TabUnselected;