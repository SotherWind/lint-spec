export default {
  meta: {
    type: 'suggestion',
    messages: {
      noSetTimeoutMagicNumbers:
        'The second parameter of the {{timerName}} cannot be used magic numbers "{{timerDelay}}"',
    },
  },
  create(context) {
    return {
      CallExpression(node) {
        if (
          node.callee &&
          ['setTimeout', 'setInterval'].includes(node.callee.name) &&
          node.arguments &&
          node.arguments[1] &&
          node.arguments[1].type === 'Literal' &&
          typeof node.arguments[1].value === 'number'
        ) {
          context.report({
            node,
            messageId: 'noSetTimeoutMagicNumbers',
            data: {
              timerName: node.callee.name,
              timerDelay: node.arguments[1].value,
            },
          });
        }
      },
    };
  },
};
