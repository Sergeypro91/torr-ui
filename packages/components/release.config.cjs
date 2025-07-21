const baseConfig = require('../../release.base.config.cjs');

module.exports = {
  ...baseConfig,
  pkgRoot: 'dist',
  tagFormat: 'components-v${version}',
  plugins: [
    ...baseConfig.plugins,
    [
      '@semantic-release/git',
      {
        message:
          'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
        assets: ['packages/components/CHANGELOG.md'],
      },
    ],
  ],
};
