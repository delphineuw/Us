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

var HomeVariant = function HomeVariant(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M8,20H5V12H2L12,3L22,12H19V20H12V14H8V20M14,14V17H17V14H14Z' })
  );
};
HomeVariant = (0, _pure2.default)(HomeVariant);
HomeVariant.displayName = 'HomeVariant';
HomeVariant.muiName = 'SvgIcon';

exports.default = HomeVariant;