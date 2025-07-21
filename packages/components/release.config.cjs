const baseConfig = require('../../release.base.config.cjs');

module.exports = {
  ...baseConfig,
  tagFormat: 'components-v${version}',
  plugins: [
    ...baseConfig.plugins,
    [
      '@semantic-release/git',
      {
        message:
          'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
        assets: ['packages/utils/CHANGELOG.md', 'packages/utils/package.json'],
      },
    ],
  ],
};
