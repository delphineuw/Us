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

var ChartBar = function ChartBar(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M22,21H2V3H4V19H6V10H10V19H12V6H16V19H18V14H22V21Z' })
  );
};
ChartBar = (0, _pure2.default)(ChartBar);
ChartBar.displayName = 'ChartBar';
ChartBar.muiName = 'SvgIcon';

exports.default = ChartBar;