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

var ChartPie = function ChartPie(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M21,11H13V3A8,8 0 0,1 21,11M19,13C19,15.78 17.58,18.23 15.43,19.67L11.58,13H19M11,21C8.22,21 5.77,19.58 4.33,17.43L10.82,13.68L14.56,20.17C13.5,20.7 12.28,21 11,21M3,13A8,8 0 0,1 11,5V12.42L3.83,16.56C3.3,15.5 3,14.28 3,13Z' })
  );
};
ChartPie = (0, _pure2.default)(ChartPie);
ChartPie.displayName = 'ChartPie';
ChartPie.muiName = 'SvgIcon';

exports.default = ChartPie;