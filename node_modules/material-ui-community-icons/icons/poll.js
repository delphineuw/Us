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

var Poll = function Poll(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M3,22V8H7V22H3M10,22V2H14V22H10M17,22V14H21V22H17Z' })
  );
};
Poll = (0, _pure2.default)(Poll);
Poll.displayName = 'Poll';
Poll.muiName = 'SvgIcon';

exports.default = Poll;