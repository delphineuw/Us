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

var VectorArrangeBelow = function VectorArrangeBelow(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M20,22C21.11,22 22,21.11 22,20V9C22,7.89 21.11,7 20,7C16.33,7 12.67,7 9,7C7.89,7 7,7.89 7,9C7,12.67 7,16.33 7,20C7,21.11 7.89,22 9,22H20M20,20H9V9H20V20M5,16V14H3V3H14V5H16V3C16,1.89 15.11,1 14,1H3C1.89,1 1,1.89 1,3V14C1,15.11 1.89,16 3,16H5Z' })
  );
};
VectorArrangeBelow = (0, _pure2.default)(VectorArrangeBelow);
VectorArrangeBelow.displayName = 'VectorArrangeBelow';
VectorArrangeBelow.muiName = 'SvgIcon';

exports.default = VectorArrangeBelow;