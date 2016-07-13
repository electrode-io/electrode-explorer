var fs = require("fs");
var uglifyJs = require("uglify-js");
var desktopTypeahead = uglifyJs.minify(__dirname + "/scripts/typeahead.js");
// build only happens once, so it's not necessary
// to memoize the script content
var lloader =
  fs.readFileSync(require.resolve("little-loader/dist/little-loader.min.js"));
// combine little-loader and typeahead.js together as inline script
var desktopProp = {dangerouslySetInnerHTML: {__html: lloader + desktopTypeahead.code}};

fs.writeFileSync(__dirname + "/lib/typeahead.prop.js",
  "exports['default']=" + JSON.stringify(desktopProp)
  + ";module.exports=exports['default'];");

// mobile typeahead
var mobileTypeahead = uglifyJs.minify(__dirname + "/scripts/typeahead-mobile.js");
var mobileProp = {dangerouslySetInnerHTML: {__html: lloader + mobileTypeahead.code}};

fs.writeFileSync(__dirname + "/lib/typeahead-mobile.prop.js",
  "exports['default']=" + JSON.stringify(mobileProp)
  + ";module.exports=exports['default'];");
