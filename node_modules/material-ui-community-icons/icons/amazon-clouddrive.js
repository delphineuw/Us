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

var AmazonClouddrive = function AmazonClouddrive(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M4.94,11.12C5.23,11.12 5.5,11.16 5.76,11.23C5.77,9.09 7.5,7.35 9.65,7.35C11.27,7.35 12.67,8.35 13.24,9.77C13.83,9 14.74,8.53 15.76,8.53C17.5,8.53 18.94,9.95 18.94,11.71C18.94,11.95 18.91,12.2 18.86,12.43C19.1,12.34 19.37,12.29 19.65,12.29C20.95,12.29 22,13.35 22,14.65C22,15.95 20.95,17 19.65,17C18.35,17 6.36,17 4.94,17C3.32,17 2,15.68 2,14.06C2,12.43 3.32,11.12 4.94,11.12Z' })
  );
};
AmazonClouddrive = (0, _pure2.default)(AmazonClouddrive);
AmazonClouddrive.displayName = 'AmazonClouddrive';
AmazonClouddrive.muiName = 'SvgIcon';

exports.default = AmazonClouddrive;