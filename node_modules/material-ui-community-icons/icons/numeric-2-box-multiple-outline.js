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

var Numeric2BoxMultipleOutline = function Numeric2BoxMultipleOutline(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M17,13H13V11H15A2,2 0 0,0 17,9V7C17,5.89 16.1,5 15,5H11V7H15V9H13A2,2 0 0,0 11,11V15H17M21,17H7V3H21M21,1H7A2,2 0 0,0 5,3V17A2,2 0 0,0 7,19H21A2,2 0 0,0 23,17V3A2,2 0 0,0 21,1M3,5H1V21A2,2 0 0,0 3,23H19V21H3V5Z' })
  );
};
Numeric2BoxMultipleOutline = (0, _pure2.default)(Numeric2BoxMultipleOutline);
Numeric2BoxMultipleOutline.displayName = 'Numeric2BoxMultipleOutline';
Numeric2BoxMultipleOutline.muiName = 'SvgIcon';

exports.default = Numeric2BoxMultipleOutline;