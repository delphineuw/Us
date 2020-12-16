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

var ArrangeSendBackward = function ArrangeSendBackward(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M2,2H16V16H2V2M22,8V22H8V18H18V8H22M4,4V14H14V4H4Z' })
  );
};
ArrangeSendBackward = (0, _pure2.default)(ArrangeSendBackward);
ArrangeSendBackward.displayName = 'ArrangeSendBackward';
ArrangeSendBackward.muiName = 'SvgIcon';

exports.default = ArrangeSendBackward;