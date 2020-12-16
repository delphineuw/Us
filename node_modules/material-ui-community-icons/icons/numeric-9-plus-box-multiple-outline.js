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

var Numeric9PlusBoxMultipleOutline = function Numeric9PlusBoxMultipleOutline(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M21,9H19V7H17V9H15V11H17V13H19V11H21V17H7V3H21M21,1H7A2,2 0 0,0 5,3V17A2,2 0 0,0 7,19H21A2,2 0 0,0 23,17V3A2,2 0 0,0 21,1M11,9V8H12V9M14,12V8C14,6.89 13.1,6 12,6H11A2,2 0 0,0 9,8V9C9,10.11 9.9,11 11,11H12V12H9V14H12A2,2 0 0,0 14,12M3,5H1V21A2,2 0 0,0 3,23H19V21H3V5Z' })
  );
};
Numeric9PlusBoxMultipleOutline = (0, _pure2.default)(Numeric9PlusBoxMultipleOutline);
Numeric9PlusBoxMultipleOutline.displayName = 'Numeric9PlusBoxMultipleOutline';
Numeric9PlusBoxMultipleOutline.muiName = 'SvgIcon';

exports.default = Numeric9PlusBoxMultipleOutline;