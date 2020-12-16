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

var PrinterAlert = function PrinterAlert(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M14,4V8H6V4H14M15,13A1,1 0 0,0 16,12A1,1 0 0,0 15,11A1,1 0 0,0 14,12A1,1 0 0,0 15,13M13,19V15H7V19H13M15,9A3,3 0 0,1 18,12V17H15V21H5V17H2V12A3,3 0 0,1 5,9H15M22,7V12H20V7H22M22,14V16H20V14H22Z' })
  );
};
PrinterAlert = (0, _pure2.default)(PrinterAlert);
PrinterAlert.displayName = 'PrinterAlert';
PrinterAlert.muiName = 'SvgIcon';

exports.default = PrinterAlert;