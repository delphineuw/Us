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

var ToggleSwitchOff = function ToggleSwitchOff(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M7,7A5,5 0 0,1 12,12A5,5 0 0,1 7,17A5,5 0 0,1 2,12A5,5 0 0,1 7,7M20,14H14V10H20A2,2 0 0,1 22,12A2,2 0 0,1 20,14M7,9A3,3 0 0,0 4,12A3,3 0 0,0 7,15A3,3 0 0,0 10,12A3,3 0 0,0 7,9Z' })
  );
};
ToggleSwitchOff = (0, _pure2.default)(ToggleSwitchOff);
ToggleSwitchOff.displayName = 'ToggleSwitchOff';
ToggleSwitchOff.muiName = 'SvgIcon';

exports.default = ToggleSwitchOff;