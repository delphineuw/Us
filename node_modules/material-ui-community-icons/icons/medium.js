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

var Medium = function Medium(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M21.93,6.62L15.89,16.47L11.57,9.43L15,3.84C15.17,3.58 15.5,3.47 15.78,3.55L21.93,6.62M22,19.78C22,20.35 21.5,20.57 20.89,20.26L16.18,17.91L22,8.41V19.78M9,19.94C9,20.5 8.57,20.76 8.07,20.5L2.55,17.76C2.25,17.6 2,17.2 2,16.86V4.14C2,3.69 2.33,3.5 2.74,3.68L8.7,6.66L9,7.12V19.94M15.29,17.46L10,14.81V8.81L15.29,17.46Z' })
  );
};
Medium = (0, _pure2.default)(Medium);
Medium.displayName = 'Medium';
Medium.muiName = 'SvgIcon';

exports.default = Medium;