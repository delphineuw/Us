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

var PanoramaWideAngle = function PanoramaWideAngle(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M12,4C9.27,4 6.78,4.24 4.05,4.72L3.12,4.88L2.87,5.78C2.29,7.85 2,9.93 2,12C2,14.07 2.29,16.15 2.87,18.22L3.12,19.11L4.05,19.27C6.78,19.76 9.27,20 12,20C14.73,20 17.22,19.76 19.95,19.28L20.88,19.12L21.13,18.23C21.71,16.15 22,14.07 22,12C22,9.93 21.71,7.85 21.13,5.78L20.88,4.89L19.95,4.73C17.22,4.24 14.73,4 12,4M12,6C14.45,6 16.71,6.2 19.29,6.64C19.76,8.42 20,10.22 20,12C20,13.78 19.76,15.58 19.29,17.36C16.71,17.8 14.45,18 12,18C9.55,18 7.29,17.8 4.71,17.36C4.24,15.58 4,13.78 4,12C4,10.22 4.24,8.42 4.71,6.64C7.29,6.2 9.55,6 12,6Z' })
  );
};
PanoramaWideAngle = (0, _pure2.default)(PanoramaWideAngle);
PanoramaWideAngle.displayName = 'PanoramaWideAngle';
PanoramaWideAngle.muiName = 'SvgIcon';

exports.default = PanoramaWideAngle;