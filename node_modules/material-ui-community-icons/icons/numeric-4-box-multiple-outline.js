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

var Numeric4BoxMultipleOutline = function Numeric4BoxMultipleOutline(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M21,17H7V3H21M21,1H7A2,2 0 0,0 5,3V17A2,2 0 0,0 7,19H21A2,2 0 0,0 23,17V3A2,2 0 0,0 21,1M15,15H17V5H15V9H13V5H11V11H15M3,5H1V21A2,2 0 0,0 3,23H19V21H3V5Z' })
  );
};
Numeric4BoxMultipleOutline = (0, _pure2.default)(Numeric4BoxMultipleOutline);
Numeric4BoxMultipleOutline.displayName = 'Numeric4BoxMultipleOutline';
Numeric4BoxMultipleOutline.muiName = 'SvgIcon';

exports.default = Numeric4BoxMultipleOutline;