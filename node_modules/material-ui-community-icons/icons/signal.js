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

var Signal = function Signal(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M3,21H6V18H3M8,21H11V14H8M13,21H16V9H13M18,21H21V3H18V21Z' })
  );
};
Signal = (0, _pure2.default)(Signal);
Signal.displayName = 'Signal';
Signal.muiName = 'SvgIcon';

exports.default = Signal;