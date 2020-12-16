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

var Boombox = function Boombox(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M7,5L5,7V8H3A1,1 0 0,0 2,9V17A1,1 0 0,0 3,18H21A1,1 0 0,0 22,17V9A1,1 0 0,0 21,8H19V7L17,5H7M7,7H17V8H7V7M11,9H13A0.5,0.5 0 0,1 13.5,9.5A0.5,0.5 0 0,1 13,10H11A0.5,0.5 0 0,1 10.5,9.5A0.5,0.5 0 0,1 11,9M7.5,10.5A3,3 0 0,1 10.5,13.5A3,3 0 0,1 7.5,16.5A3,3 0 0,1 4.5,13.5A3,3 0 0,1 7.5,10.5M16.5,10.5A3,3 0 0,1 19.5,13.5A3,3 0 0,1 16.5,16.5A3,3 0 0,1 13.5,13.5A3,3 0 0,1 16.5,10.5M7.5,12A1.5,1.5 0 0,0 6,13.5A1.5,1.5 0 0,0 7.5,15A1.5,1.5 0 0,0 9,13.5A1.5,1.5 0 0,0 7.5,12M16.5,12A1.5,1.5 0 0,0 15,13.5A1.5,1.5 0 0,0 16.5,15A1.5,1.5 0 0,0 18,13.5A1.5,1.5 0 0,0 16.5,12Z' })
  );
};
Boombox = (0, _pure2.default)(Boombox);
Boombox.displayName = 'Boombox';
Boombox.muiName = 'SvgIcon';

exports.default = Boombox;