"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _feedback = require("./feedback");

Object.keys(_feedback).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _feedback[key];
    }
  });
});

var _profile = require("./profile");

Object.keys(_profile).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _profile[key];
    }
  });
});

var _search = require("./search");

Object.keys(_search).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _search[key];
    }
  });
});

var _users = require("./users");

Object.keys(_users).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _users[key];
    }
  });
});

var _reviewerSurvey = require("./reviewer-survey");

Object.keys(_reviewerSurvey).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _reviewerSurvey[key];
    }
  });
});