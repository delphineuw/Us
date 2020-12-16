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

var Audiobook = function Audiobook(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M18,22H6A2,2 0 0,1 4,20V4C4,2.89 4.9,2 6,2H7V9L9.5,7.5L12,9V2H18A2,2 0 0,1 20,4V20A2,2 0 0,1 18,22M13,15A2,2 0 0,0 11,17A2,2 0 0,0 13,19A2,2 0 0,0 15,17V12H18V10H14V15.27C13.71,15.1 13.36,15 13,15Z' })
  );
};
Audiobook = (0, _pure2.default)(Audiobook);
Audiobook.displayName = 'Audiobook';
Audiobook.muiName = 'SvgIcon';

exports.default = Audiobook;