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

var MoveResize = function MoveResize(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M9,1V2H10V5H9V6H12V5H11V2H12V1M9,7C7.89,7 7,7.89 7,9V21C7,22.11 7.89,23 9,23H21C22.11,23 23,22.11 23,21V9C23,7.89 22.11,7 21,7M1,9V12H2V11H5V12H6V9H5V10H2V9M9,9H21V21H9M14,10V11H15V16H11V15H10V18H11V17H15V19H14V20H17V19H16V17H19V18H20V15H19V16H16V11H17V10' })
  );
};
MoveResize = (0, _pure2.default)(MoveResize);
MoveResize.displayName = 'MoveResize';
MoveResize.muiName = 'SvgIcon';

exports.default = MoveResize;