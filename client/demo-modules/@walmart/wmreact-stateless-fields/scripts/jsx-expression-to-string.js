/**
 * This replaces every occurence of variable "foo".
 */
module.exports = function(fileInfo, api) {
  const j = api.jscodeshift;
  const result = j(fileInfo.source)
    .find(j.JSXExpressionContainer)
    .forEach((path) => {
      if (path.node.expression.type === 'Literal') {
        path.replace(path.node.expression);
      }
    })
    .toSource();

  return result;
}

