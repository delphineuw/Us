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

var AppleIos = function AppleIos(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M20,9V7H16A2,2 0 0,0 14,9V11A2,2 0 0,0 16,13H18V15H14V17H18A2,2 0 0,0 20,15V13A2,2 0 0,0 18,11H16V9M11,15H9V9H11M11,7H9A2,2 0 0,0 7,9V15A2,2 0 0,0 9,17H11A2,2 0 0,0 13,15V9A2,2 0 0,0 11,7M4,17H6V11H4M4,9H6V7H4V9Z' })
  );
};
AppleIos = (0, _pure2.default)(AppleIos);
AppleIos.displayName = 'AppleIos';
AppleIos.muiName = 'SvgIcon';

exports.default = AppleIos;