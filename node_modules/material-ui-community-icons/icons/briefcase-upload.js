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

var BriefcaseUpload = function BriefcaseUpload(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M20,6A2,2 0 0,1 22,8V19A2,2 0 0,1 20,21H4C2.89,21 2,20.1 2,19V8C2,6.89 2.89,6 4,6H8V4L10,2H14L16,4V6H20M10,4V6H14V4H10M12,9L7,14H10V18H14V14H17L12,9Z' })
  );
};
BriefcaseUpload = (0, _pure2.default)(BriefcaseUpload);
BriefcaseUpload.displayName = 'BriefcaseUpload';
BriefcaseUpload.muiName = 'SvgIcon';

exports.default = BriefcaseUpload;