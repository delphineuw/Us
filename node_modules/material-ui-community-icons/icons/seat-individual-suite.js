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

var SeatIndividualSuite = function SeatIndividualSuite(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M7,13A3,3 0 0,0 10,10A3,3 0 0,0 7,7A3,3 0 0,0 4,10A3,3 0 0,0 7,13M19,7H11V14H3V7H1V17H23V11A4,4 0 0,0 19,7Z' })
  );
};
SeatIndividualSuite = (0, _pure2.default)(SeatIndividualSuite);
SeatIndividualSuite.displayName = 'SeatIndividualSuite';
SeatIndividualSuite.muiName = 'SvgIcon';

exports.default = SeatIndividualSuite;