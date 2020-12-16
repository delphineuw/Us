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

var MusicNoteHalf = function MusicNoteHalf(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M12,3V12.26C11.5,12.09 11,12 10.5,12C8.54,12 6.9,13.26 6.28,15H3V18H6.28C6.9,19.74 8.54,21 10.5,21C12.46,21 14.1,19.74 14.72,18H19V15H15V9L15,6V3H12M10.5,14.5A2,2 0 0,1 12.5,16.5A2,2 0 0,1 10.5,18.5A2,2 0 0,1 8.5,16.5A2,2 0 0,1 10.5,14.5Z' })
  );
};
MusicNoteHalf = (0, _pure2.default)(MusicNoteHalf);
MusicNoteHalf.displayName = 'MusicNoteHalf';
MusicNoteHalf.muiName = 'SvgIcon';

exports.default = MusicNoteHalf;