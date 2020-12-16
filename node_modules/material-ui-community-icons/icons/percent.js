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

var Percent = function Percent(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M7,4A3,3 0 0,1 10,7A3,3 0 0,1 7,10A3,3 0 0,1 4,7A3,3 0 0,1 7,4M17,14A3,3 0 0,1 20,17A3,3 0 0,1 17,20A3,3 0 0,1 14,17A3,3 0 0,1 17,14M20,5.41L5.41,20L4,18.59L18.59,4L20,5.41Z' })
  );
};
Percent = (0, _pure2.default)(Percent);
Percent.displayName = 'Percent';
Percent.muiName = 'SvgIcon';

exports.default = Percent;