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

var Fax = function Fax(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M6,2A1,1 0 0,0 5,3V7H6V5H8V4H6V3H8V2H6M11,2A1,1 0 0,0 10,3V7H11V5H12V7H13V3A1,1 0 0,0 12,2H11M15,2L16.42,4.5L15,7H16.13L17,5.5L17.87,7H19L17.58,4.5L19,2H17.87L17,3.5L16.13,2H15M11,3H12V4H11V3M5,9A3,3 0 0,0 2,12V18H6V22H18V18H22V12A3,3 0 0,0 19,9H5M19,11A1,1 0 0,1 20,12A1,1 0 0,1 19,13A1,1 0 0,1 18,12A1,1 0 0,1 19,11M8,15H16V20H8V15Z' })
  );
};
Fax = (0, _pure2.default)(Fax);
Fax.displayName = 'Fax';
Fax.muiName = 'SvgIcon';

exports.default = Fax;