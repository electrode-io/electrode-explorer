/**
 * Automatically add `import expect from "must";` if it doesn’t exist in a
 * given -test.js file
 */

/* eslint-disable */
module.exports = function transformer(fileInfo, api) {
  const j = api.jscodeshift;

  // ensure this is a test file
  if (!/-test\.js$/.test(fileInfo.path)) {
    return;
  }

  const ast = j(fileInfo.source);

  const hasMustImport = ast
    .find(j.ImportDeclaration)
    .filter((path) => path.node.source.value.type === "must")
    .size() > 0;

  // if it already has the must import return
  if (hasMustImport) {
    return;
  }

  // add the must expect to the file
  return ast
    .find(j.Program)
    .forEach(path => {
      path.get("body").value.unshift(
        j.importDeclaration(
          [j.importDefaultSpecifier(j.identifier("expect"))],
          j.literal("must")
        )
      );
    })
    .toSource();
};


