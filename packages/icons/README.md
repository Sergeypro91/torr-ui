# @torr-app/icons

This package is designed to use icons. When building a package, icons are generated from directories with **svg** files:

- `themed-assets` - icons whose color depends on the theme or can be set via css.
- `custom-assets` - icons whose color cannot be changed and does not depend on the theme.

Each directory has its own generation: `npm run generate-themed-icons` and `npm run generate-custom-icons`.

To generate all the icons, you need to run the command `npm run svgr`.

The generated **tsx icons** will be located in the following directories:

- `generated-themed-icons`
- `generated-custom-icons`
