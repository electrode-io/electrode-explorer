var _perfStartTime = new Date().getTime();
var _bcq = _bcq || [];
var options ={};
options.start_time = _perfStartTime;options.autorun = false;
options.bh='beacon.qa.walmart.com';
options.mode='debug';
_bcq.push(['_setOptions', options]);
