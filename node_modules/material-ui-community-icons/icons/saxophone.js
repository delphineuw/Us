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

var Saxophone = function Saxophone(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M4,2A1,1 0 0,0 3,3A1,1 0 0,0 4,4A3,3 0 0,1 7,7V8.66L7,15.5C7,19.1 9.9,22 13.5,22C17.1,22 20,19.1 20,15.5V13A1,1 0 0,0 21,12A1,1 0 0,0 20,11H14A1,1 0 0,0 13,12A1,1 0 0,0 14,13V15A1,1 0 0,1 13,16A1,1 0 0,1 12,15V11A1,1 0 0,0 13,10A1,1 0 0,0 12,9V8A1,1 0 0,0 13,7A1,1 0 0,0 12,6V5.5A3.5,3.5 0 0,0 8.5,2H4Z' })
  );
};
Saxophone = (0, _pure2.default)(Saxophone);
Saxophone.displayName = 'Saxophone';
Saxophone.muiName = 'SvgIcon';

exports.default = Saxophone;