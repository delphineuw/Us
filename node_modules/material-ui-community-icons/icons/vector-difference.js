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

var VectorDifference = function VectorDifference(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M3,1C1.89,1 1,1.89 1,3V14C1,15.11 1.89,16 3,16H5V14H3V3H14V5H16V3C16,1.89 15.11,1 14,1H3M9,7C7.89,7 7,7.89 7,9V11H9V9H11V7H9M13,7V9H14V10H16V7H13M18,7V9H20V20H9V18H7V20C7,21.11 7.89,22 9,22H20C21.11,22 22,21.11 22,20V9C22,7.89 21.11,7 20,7H18M14,12V14H12V16H14C15.11,16 16,15.11 16,14V12H14M7,13V16H10V14H9V13H7Z' })
  );
};
VectorDifference = (0, _pure2.default)(VectorDifference);
VectorDifference.displayName = 'VectorDifference';
VectorDifference.muiName = 'SvgIcon';

exports.default = VectorDifference;