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

var Numeric8BoxMultipleOutline = function Numeric8BoxMultipleOutline(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M13,11H15V13H13M13,7H15V9H13M13,15H15A2,2 0 0,0 17,13V11.5A1.5,1.5 0 0,0 15.5,10A1.5,1.5 0 0,0 17,8.5V7C17,5.89 16.1,5 15,5H13A2,2 0 0,0 11,7V8.5A1.5,1.5 0 0,0 12.5,10A1.5,1.5 0 0,0 11,11.5V13C11,14.11 11.9,15 13,15M21,17H7V3H21M21,1H7A2,2 0 0,0 5,3V17A2,2 0 0,0 7,19H21A2,2 0 0,0 23,17V3A2,2 0 0,0 21,1M3,5H1V21A2,2 0 0,0 3,23H19V21H3V5Z' })
  );
};
Numeric8BoxMultipleOutline = (0, _pure2.default)(Numeric8BoxMultipleOutline);
Numeric8BoxMultipleOutline.displayName = 'Numeric8BoxMultipleOutline';
Numeric8BoxMultipleOutline.muiName = 'SvgIcon';

exports.default = Numeric8BoxMultipleOutline;