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

var NotificationClearAll = function NotificationClearAll(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M5,13H19V11H5M3,17H17V15H3M7,7V9H21V7' })
  );
};
NotificationClearAll = (0, _pure2.default)(NotificationClearAll);
NotificationClearAll.displayName = 'NotificationClearAll';
NotificationClearAll.muiName = 'SvgIcon';

exports.default = NotificationClearAll;