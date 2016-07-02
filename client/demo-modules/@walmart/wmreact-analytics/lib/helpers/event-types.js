"use strict";

exports.__esModule = true;
var APMMessage = exports.APMMessage = function APMMessage(data) {
  return {
    _type: "apm",
    tags: ["apm"],
    data: data
  };
};

var isAPMMessage = exports.isAPMMessage = function isAPMMessage(message) {
  return message._type === "apm";
};

var beaconMessage = exports.beaconMessage = function beaconMessage(data) {
  return {
    _type: "beacon",
    data: data
  };
};

var isBeaconMessage = exports.isBeaconMessage = function isBeaconMessage(message) {
  return message._type === "beacon";
};

var logmonMessage = exports.logmonMessage = function logmonMessage(data) {
  return {
    _type: "logmon",
    tags: ["logmon"],
    data: data
  };
};

var isLogmonMessage = exports.isLogmonMessage = function isLogmonMessage(message) {
  return message._type === "logmon";
};

var isSplunkMessage = exports.isSplunkMessage = function isSplunkMessage(message) {
  return message._type === "splunk";
};

var splunkMessage = exports.splunkMessage = function splunkMessage(data) {
  return {
    _type: "splunk",
    tags: ["splunk"],
    data: data
  };
};