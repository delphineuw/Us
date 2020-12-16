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

var Road = function Road(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M11,16H13V20H11M11,10H13V14H11M11,4H13V8H11M4,22H20V2H4V22Z' })
  );
};
Road = (0, _pure2.default)(Road);
Road.displayName = 'Road';
Road.muiName = 'SvgIcon';

exports.default = Road;