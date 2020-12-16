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

var Houzz = function Houzz(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M12,24V16L5.1,20V12H5.1V4L12,0V8L5.1,12L12,16V8L18.9,4V12H18.9V20L12,24Z' })
  );
};
Houzz = (0, _pure2.default)(Houzz);
Houzz.displayName = 'Houzz';
Houzz.muiName = 'SvgIcon';

exports.default = Houzz;