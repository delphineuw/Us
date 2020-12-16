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

var Sofa = function Sofa(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M7,6H9A2,2 0 0,1 11,8V12H5V8A2,2 0 0,1 7,6M15,6H17A2,2 0 0,1 19,8V12H13V8A2,2 0 0,1 15,6M1,9H2A1,1 0 0,1 3,10V12A2,2 0 0,0 5,14H19A2,2 0 0,0 21,12V11L21,10A1,1 0 0,1 22,9H23A1,1 0 0,1 24,10V19H21V17H3V19H0V10A1,1 0 0,1 1,9Z' })
  );
};
Sofa = (0, _pure2.default)(Sofa);
Sofa.displayName = 'Sofa';
Sofa.muiName = 'SvgIcon';

exports.default = Sofa;