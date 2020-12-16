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

var ToggleSwitch = function ToggleSwitch(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M17,7A5,5 0 0,1 22,12A5,5 0 0,1 17,17A5,5 0 0,1 12,12A5,5 0 0,1 17,7M4,14A2,2 0 0,1 2,12A2,2 0 0,1 4,10H10V14H4Z' })
  );
};
ToggleSwitch = (0, _pure2.default)(ToggleSwitch);
ToggleSwitch.displayName = 'ToggleSwitch';
ToggleSwitch.muiName = 'SvgIcon';

exports.default = ToggleSwitch;