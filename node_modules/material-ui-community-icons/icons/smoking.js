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

var Smoking = function Smoking(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M7,19H22V15H7M2,19H5V15H2M10,4V5A3,3 0 0,1 7,8A5,5 0 0,0 2,13H4A3,3 0 0,1 7,10A5,5 0 0,0 12,5V4H10Z' })
  );
};
Smoking = (0, _pure2.default)(Smoking);
Smoking.displayName = 'Smoking';
Smoking.muiName = 'SvgIcon';

exports.default = Smoking;