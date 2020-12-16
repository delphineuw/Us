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

var Transcribe = function Transcribe(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M20,5A2,2 0 0,1 22,7V17A2,2 0 0,1 20,19H4C2.89,19 2,18.1 2,17V7C2,5.89 2.89,5 4,5H20M18,17V15H12.5L10.5,17H18M6,17H8.5L15.35,10.12C15.55,9.93 15.55,9.61 15.35,9.41L13.59,7.65C13.39,7.45 13.07,7.45 12.88,7.65L6,14.53V17Z' })
  );
};
Transcribe = (0, _pure2.default)(Transcribe);
Transcribe.displayName = 'Transcribe';
Transcribe.muiName = 'SvgIcon';

exports.default = Transcribe;