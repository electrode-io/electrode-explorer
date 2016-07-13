/* eslint-disable */
/**
 * This replaces every occurence of variable "foo".
 */

function isInRenderMethod(node) {
  let current = node;
  while (current = current.parent) {
    if (current.node && current.node.key && current.node.key.name === 'render') {
      return true;
    }
  }

  return false;
}

module.exports = function(fileInfo, api, options) {
  const j = api.jscodeshift;
  const baseIdentifierValue = options.method || 'shouldDisplayError';
  const sdeIdent = j.identifier(baseIdentifierValue);
  const ast = j(fileInfo.source);
  const shouldTransform = ast
    .find(j.VariableDeclarator)
    .filter(path => {
      if (path.node.id.type !== 'Identifier') return false;
      return path.node.id.name === 'hasError';
    });

  if (shouldTransform.size() !== 1) {
    return;
  }

  shouldTransform.forEach(t => {
    if (!isInRenderMethod(t)) return;

    const sDECall = j.callExpression(
      sdeIdent,
      [j.memberExpression(
        j.thisExpression(),
        j.identifier('props')
      )]
    );
    t.get('init').replace(sDECall);
  });

  const propsDestructure = ast.find(j.VariableDeclarator)
    .filter(path => {
      const init = path.node.init;
      if (
        init.type === 'MemberExpression' &&
        init.object.type === 'ThisExpression' &&
        init.property.name === 'props'
      ) return true;
    });

  propsDestructure.forEach(path => {
    const properties = path.node.id.properties;
    if (properties.filter(node => node.key && node.key.name === baseIdentifierValue).length === 0) {
      properties.splice(
        properties.length - 1,
        0,
        sdeIdent
      );
    }
  });

  const imports = ast.find(j.ImportDeclaration);
  const lastImportIndex = imports.size();
  let a = {
    type: 'ImportDeclaration',
    specifiers: [{type: 'ImportSpecifier', imported: sdeIdent, local: sdeIdent}],
    source: j.literal('./utils')
  };
  const body = ast.get('program').node.body;
  body.splice(lastImportIndex, 0, a);

  return ast.toSource();
}

