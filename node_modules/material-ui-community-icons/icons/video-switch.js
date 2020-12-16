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

var VideoSwitch = function VideoSwitch(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M13,15.5V13H7V15.5L3.5,12L7,8.5V11H13V8.5L16.5,12M18,9.5V6A1,1 0 0,0 17,5H3A1,1 0 0,0 2,6V18A1,1 0 0,0 3,19H17A1,1 0 0,0 18,18V14.5L22,18.5V5.5L18,9.5Z' })
  );
};
VideoSwitch = (0, _pure2.default)(VideoSwitch);
VideoSwitch.displayName = 'VideoSwitch';
VideoSwitch.muiName = 'SvgIcon';

exports.default = VideoSwitch;