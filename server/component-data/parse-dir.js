const Fs = require("fs");
const Path = require("path");

const parseDir = (moduleName, dirName, path) => {

  const automationNoop = "var _automationIdUtils = { getDataAutomationIdPair: function () { /* no-op */ } };";
  const automationReq = "var _automationIdUtils = require(\"@walmart/automation-utils/lib/utils/automation-id-utils\");";
  const demoModules = Path.join(__dirname, "../../client/demo-modules/", moduleName);

  Fs.readdir(path, (err, files) => {
    if (err) {
      throw err;
    }

    files.forEach((file) => {
      // Don't process non-JS files
      if (!(/\.js$/).test(file)) {
        if (!(/\./).test(file)) {
          // crude filter to only stat probable dirs
          Fs.stat(Path.join(path, "/", file), (err, stats) => {
            if (err) throw err;

            if (stats.isDirectory()) {
              parseDir(moduleName, `/${file}`, Path.join(path, "/", file));
            }
          });
        }

        return;
      }
      const rs = Fs.createReadStream(Path.join(path, "/", file));
      if (dirName !== "") {
        try {
          Fs.mkdirSync(Path.join(demoModules, dirName));
        } catch (e) {}
      }
      const ws = Fs.createWriteStream(Path.join(demoModules, dirName, "/", file));
      ws.on("error", (err) => {
        console.log(">>>>> wrote error for " + Path.join(demoModules, dirName, "/", file) + ", err::", err);
      });
      rs.on("error", (err) => {
        console.log(`>>>>> read error for ${file}`, err);
      });
      rs.on("data", (chunk) => {
        const ch = chunk.toString();
        ws.write(ch.replace(automationReq, automationNoop));
      });
      rs.on("end", () => {
        ws.end();
      });
    });
  });
};

module.exports = parseDir;
