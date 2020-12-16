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

var PiBox = function PiBox(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M5,3C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M6,7H17V9H15V14A1,1 0 0,0 16,15A1,1 0 0,0 17,14H19A3,3 0 0,1 16,17A3,3 0 0,1 13,14V9H10V17H8V9H6' })
  );
};
PiBox = (0, _pure2.default)(PiBox);
PiBox.displayName = 'PiBox';
PiBox.muiName = 'SvgIcon';

exports.default = PiBox;