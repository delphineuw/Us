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

var PlayPause = function PlayPause(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M3,5V19L11,12M13,19H16V5H13M18,5V19H21V5' })
  );
};
PlayPause = (0, _pure2.default)(PlayPause);
PlayPause.displayName = 'PlayPause';
PlayPause.muiName = 'SvgIcon';

exports.default = PlayPause;