const SSRCaching = require('electrode-react-ssr-caching');

process.on('SIGINT', () => {
  process.exit(0);
});

const electrodeConfippet = require('electrode-confippet');
const staticPathsDecor = require('electrode-static-paths');
const support = require('electrode-archetype-react-app/support');

require.extensions['.css'] = () => {
  return;
};

const cacheConfig = {
  components: {
    SSRCachingTemplateType: {
      strategy: 'template',
      enable: true
    },
    SSRCachingSimpleType: {
      strategy: 'simple',
      enable: true
    }
  }
};

support.load()
  .then(() => {
    const config = electrodeConfippet.config;

    SSRCaching.enableCaching();
    SSRCaching.setCachingConfig(cacheConfig);

    require("electrode-server")(config, [staticPathsDecor()]);  // eslint-disable-line
  });
