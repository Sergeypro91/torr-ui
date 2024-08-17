const commonConfig = require('./svgr.common.config');

module.exports = {
  ...commonConfig,
  outDir: 'generated-themed-icons',
  svgoConfig: {
    multipass: true,
    floatPrecision: 1,
    plugins: [
      'prefixIds',
      {
        name: 'preset-default',
        params: {
          overrides: {
            removeViewBox: false,
          },
        },
      },
      { name: 'removeAttrs', params: { attrs: '^fill$|^stroke$|^clip-rule$' } },
    ],
  },
};
