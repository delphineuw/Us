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

var TrophyAward = function TrophyAward(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M15.2,10.7L16.6,16L12,12.2L7.4,16L8.8,10.8L4.6,7.3L10,7L12,2L14,7L19.4,7.3L15.2,10.7M14,19.1H13V16L12,15L11,16V19.1H10A2,2 0 0,0 8,21.1V22.1H16V21.1A2,2 0 0,0 14,19.1Z' })
  );
};
TrophyAward = (0, _pure2.default)(TrophyAward);
TrophyAward.displayName = 'TrophyAward';
TrophyAward.muiName = 'SvgIcon';

exports.default = TrophyAward;