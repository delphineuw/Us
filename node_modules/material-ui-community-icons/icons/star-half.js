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

var StarHalf = function StarHalf(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M12,15.89V6.59L13.71,10.63L18.09,11L14.77,13.88L15.76,18.16M22,9.74L14.81,9.13L12,2.5L9.19,9.13L2,9.74L7.45,14.47L5.82,21.5L12,17.77L18.18,21.5L16.54,14.47L22,9.74Z' })
  );
};
StarHalf = (0, _pure2.default)(StarHalf);
StarHalf.displayName = 'StarHalf';
StarHalf.muiName = 'SvgIcon';

exports.default = StarHalf;