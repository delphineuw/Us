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

var CloudPrintOutline = function CloudPrintOutline(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M19,16A3,3 0 0,0 22,13A3,3 0 0,0 19,10H17.5V9.5A5.5,5.5 0 0,0 12,4C9.5,4 7.37,5.69 6.71,8H6A4,4 0 0,0 2,12A4,4 0 0,0 6,16V11H18V16H19M19.36,8.04C21.95,8.22 24,10.36 24,13A5,5 0 0,1 19,18H18V22H6V18A6,6 0 0,1 0,12C0,8.91 2.34,6.36 5.35,6.04C6.6,3.64 9.11,2 12,2C15.64,2 18.67,4.6 19.36,8.04M8,13V20H16V13H8M9,18H15V19H9V18M15,17H9V16H15V17M9,14H15V15H9V14Z' })
  );
};
CloudPrintOutline = (0, _pure2.default)(CloudPrintOutline);
CloudPrintOutline.displayName = 'CloudPrintOutline';
CloudPrintOutline.muiName = 'SvgIcon';

exports.default = CloudPrintOutline;