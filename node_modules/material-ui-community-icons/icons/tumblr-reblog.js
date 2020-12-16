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

var TumblrReblog = function TumblrReblog(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M3.75,17L8,12.75V16H18V11.5L20,9.5V16A2,2 0 0,1 18,18H8V21.25L3.75,17M20.25,7L16,11.25V8H6V12.5L4,14.5V8A2,2 0 0,1 6,6H16V2.75L20.25,7Z' })
  );
};
TumblrReblog = (0, _pure2.default)(TumblrReblog);
TumblrReblog.displayName = 'TumblrReblog';
TumblrReblog.muiName = 'SvgIcon';

exports.default = TumblrReblog;