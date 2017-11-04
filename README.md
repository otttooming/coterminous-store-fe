# wp-next

Next.js website built using WP REST API

**Visit https://learnnextjs.com to get started with Next.js.**

# Terminal

- `npm update -S` Update NPM packages
- `npm install -g npm-check-updates && ncu -u` Upgrade dependencies to the latest versions, regardless of existing version constraints
- `node-sass styles/main.scss static/css/styles.css` Compile legacy SCSS to CSS. Use styled-components for new development.
- `npm install -g svg-sprite-generator && svg-sprite-generate -d ./static/assets -o ./static/sprite.svg` Generate SVG sprite

## Development environment

* [Visual Studio Code](https://code.visualstudio.com/)
* [Atom](https://atom.io/)
* [WebStorm](https://www.jetbrains.com/webstorm/)
  > Free for students

### Setup development tools

- Install `Current` version of [node.js](https://nodejs.org/en/)
- `npm install`
- `node server.js` - Start the development server on <http://localhost:3000>

#### TypeScript

- Install missing TypeScript typings for dependencies in your package.json. `npm install -g typesync`
  > [typesync](https://github.com/jeffijoe/typesync)
