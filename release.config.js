const fs = require('fs');
const path = require('path');

const packagesDir = path.join(__dirname, 'packages');

module.exports = {
  branches: ['main'],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/changelog',
    '@semantic-release/npm',
    [
      '@semantic-release/git',
      {
        assets: ['CHANGELOG.md', 'package.json'],
        message:
          'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
      },
    ],
  ],
  // Release each package independently
  extends: Object.entries(fs.readdirSync(packagesDir))
    .filter(([pkg]) =>
      fs.existsSync(path.join(packagesDir, pkg, 'package.json')),
    )
    .map(([pkg]) => `./packages/${pkg}/release.config.js`),
};
