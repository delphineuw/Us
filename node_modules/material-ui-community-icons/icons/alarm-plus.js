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

var AlarmPlus = function AlarmPlus(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M13,9H11V12H8V14H11V17H13V14H16V12H13M12,20A7,7 0 0,1 5,13A7,7 0 0,1 12,6A7,7 0 0,1 19,13A7,7 0 0,1 12,20M12,4A9,9 0 0,0 3,13A9,9 0 0,0 12,22A9,9 0 0,0 21,13A9,9 0 0,0 12,4M22,5.72L17.4,1.86L16.11,3.39L20.71,7.25M7.88,3.39L6.6,1.86L2,5.71L3.29,7.24L7.88,3.39Z' })
  );
};
AlarmPlus = (0, _pure2.default)(AlarmPlus);
AlarmPlus.displayName = 'AlarmPlus';
AlarmPlus.muiName = 'SvgIcon';

exports.default = AlarmPlus;