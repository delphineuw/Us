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

var ContrastBox = function ContrastBox(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M17,15.5H12V17H17M19,19H5L19,5M5.5,7.5H7.5V5.5H9V7.5H11V9H9V11H7.5V9H5.5M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z' })
  );
};
ContrastBox = (0, _pure2.default)(ContrastBox);
ContrastBox.displayName = 'ContrastBox';
ContrastBox.muiName = 'SvgIcon';

exports.default = ContrastBox;