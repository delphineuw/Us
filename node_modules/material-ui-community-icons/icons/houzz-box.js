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

var HouzzBox = function HouzzBox(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M12,4L7.41,6.69V12L12,9.3V4M12,9.3V14.7L12,20L16.59,17.31V12L16.59,6.6L12,9.3M12,14.7L7.41,12V17.4L12,14.7M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3Z' })
  );
};
HouzzBox = (0, _pure2.default)(HouzzBox);
HouzzBox.displayName = 'HouzzBox';
HouzzBox.muiName = 'SvgIcon';

exports.default = HouzzBox;