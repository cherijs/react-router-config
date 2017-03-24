'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Switch = require('react-router/Switch');

var _Switch2 = _interopRequireDefault(_Switch);

var _Route = require('react-router/Route');

var _Route2 = _interopRequireDefault(_Route);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var renderRoutes = function renderRoutes(routes) {
  return routes ? _react2.default.createElement(
    _Switch2.default,
    null,
    routes.map(function (route, i) {
      return _react2.default.createElement(_Route2.default, {
        exact: route.exact,
        key: i,
        path: route.path,
        strict: route.strict,
        render: function render(props) {
          return _react2.default.createElement(route.component, _extends({}, props, { route: route }));
        }
      });
    })
  ) : null;
};

exports.default = renderRoutes;