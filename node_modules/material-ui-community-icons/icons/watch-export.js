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

var WatchExport = function WatchExport(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M14,11H19L16.5,8.5L17.92,7.08L22.84,12L17.92,16.92L16.5,15.5L19,13H14V11M12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6C13.4,6 14.69,6.5 15.71,7.29L17.13,5.87L16.95,5.73L16,0H8L7.05,5.73C5.19,7.19 4,9.46 4,12C4,14.55 5.19,16.81 7.05,18.27L8,24H16L16.95,18.27L17.13,18.13L15.71,16.71C14.69,17.5 13.4,18 12,18Z' })
  );
};
WatchExport = (0, _pure2.default)(WatchExport);
WatchExport.displayName = 'WatchExport';
WatchExport.muiName = 'SvgIcon';

exports.default = WatchExport;