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

var Beats = function Beats(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M7,12A5,5 0 0,0 12,17A5,5 0 0,0 17,12A5,5 0 0,0 12,7C10.87,7 9.84,7.37 9,8V2.46C9.95,2.16 10.95,2 12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12C2,8.3 4,5.07 7,3.34V12M14.5,12C14.5,12.37 14.3,12.68 14,12.86L12.11,14.29C11.94,14.42 11.73,14.5 11.5,14.5A1,1 0 0,1 10.5,13.5V10.5A1,1 0 0,1 11.5,9.5C11.73,9.5 11.94,9.58 12.11,9.71L14,11.14C14.3,11.32 14.5,11.63 14.5,12Z' })
  );
};
Beats = (0, _pure2.default)(Beats);
Beats.displayName = 'Beats';
Beats.muiName = 'SvgIcon';

exports.default = Beats;