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

var Steering = function Steering(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4C16.1,4 19.5,7.1 20,11H17C16.5,9.9 14.4,9 12,9C9.6,9 7.5,9.9 7,11H4C4.5,7.1 7.9,4 12,4M4,13H7C7.2,14.3 8.2,16.6 11,17V20C7.4,19.6 4.4,16.6 4,13M13,20V17C15.8,16.6 16.7,14.3 17,13H20C19.6,16.6 16.6,19.6 13,20Z' })
  );
};
Steering = (0, _pure2.default)(Steering);
Steering.displayName = 'Steering';
Steering.muiName = 'SvgIcon';

exports.default = Steering;