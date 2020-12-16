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

var Trello = function Trello(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M4,3H20A1,1 0 0,1 21,4V20A1,1 0 0,1 20,21H4A1,1 0 0,1 3,20V4A1,1 0 0,1 4,3M5.5,5A0.5,0.5 0 0,0 5,5.5V17.5A0.5,0.5 0 0,0 5.5,18H10.5A0.5,0.5 0 0,0 11,17.5V5.5A0.5,0.5 0 0,0 10.5,5H5.5M13.5,5A0.5,0.5 0 0,0 13,5.5V11.5A0.5,0.5 0 0,0 13.5,12H18.5A0.5,0.5 0 0,0 19,11.5V5.5A0.5,0.5 0 0,0 18.5,5H13.5Z' })
  );
};
Trello = (0, _pure2.default)(Trello);
Trello.displayName = 'Trello';
Trello.muiName = 'SvgIcon';

exports.default = Trello;