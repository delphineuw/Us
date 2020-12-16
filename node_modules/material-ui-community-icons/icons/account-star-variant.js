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

var AccountStarVariant = function AccountStarVariant(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M9,14C11.67,14 17,15.33 17,18V20H1V18C1,15.33 6.33,14 9,14M9,12A4,4 0 0,1 5,8A4,4 0 0,1 9,4A4,4 0 0,1 13,8A4,4 0 0,1 9,12M19,13.28L16.54,14.77L17.2,11.96L15,10.08L17.89,9.83L19,7.19L20.13,9.83L23,10.08L20.82,11.96L21.5,14.77L19,13.28Z' })
  );
};
AccountStarVariant = (0, _pure2.default)(AccountStarVariant);
AccountStarVariant.displayName = 'AccountStarVariant';
AccountStarVariant.muiName = 'SvgIcon';

exports.default = AccountStarVariant;