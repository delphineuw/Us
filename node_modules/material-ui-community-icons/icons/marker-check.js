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

var MarkerCheck = function MarkerCheck(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M10,16L5,11L6.41,9.58L10,13.17L17.59,5.58L19,7M19,1H5C3.89,1 3,1.89 3,3V15.93C3,16.62 3.35,17.23 3.88,17.59L12,23L20.11,17.59C20.64,17.23 21,16.62 21,15.93V3C21,1.89 20.1,1 19,1Z' })
  );
};
MarkerCheck = (0, _pure2.default)(MarkerCheck);
MarkerCheck.displayName = 'MarkerCheck';
MarkerCheck.muiName = 'SvgIcon';

exports.default = MarkerCheck;