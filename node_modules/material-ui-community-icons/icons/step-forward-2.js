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

var StepForward2 = function StepForward2(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M7,5H10V19H7V5M12,5L23,12L12,19V5M2,5H5V19H2V5Z' })
  );
};
StepForward2 = (0, _pure2.default)(StepForward2);
StepForward2.displayName = 'StepForward2';
StepForward2.muiName = 'SvgIcon';

exports.default = StepForward2;