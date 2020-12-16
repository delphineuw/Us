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

var StepBackward2 = function StepBackward2(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M17,5H14V19H17V5M12,5L1,12L12,19V5M22,5H19V19H22V5Z' })
  );
};
StepBackward2 = (0, _pure2.default)(StepBackward2);
StepBackward2.displayName = 'StepBackward2';
StepBackward2.muiName = 'SvgIcon';

exports.default = StepBackward2;