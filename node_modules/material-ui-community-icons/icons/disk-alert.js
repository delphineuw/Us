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

var DiskAlert = function DiskAlert(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M10,14C8.89,14 8,13.1 8,12C8,10.89 8.89,10 10,10A2,2 0 0,1 12,12A2,2 0 0,1 10,14M10,4A8,8 0 0,0 2,12A8,8 0 0,0 10,20A8,8 0 0,0 18,12A8,8 0 0,0 10,4M20,12H22V7H20M20,16H22V14H20V16Z' })
  );
};
DiskAlert = (0, _pure2.default)(DiskAlert);
DiskAlert.displayName = 'DiskAlert';
DiskAlert.muiName = 'SvgIcon';

exports.default = DiskAlert;