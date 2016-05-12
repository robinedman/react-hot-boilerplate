React Starter
=============

Forked from [React Hot Boilerplate](https://github.com/gaearon/react-hot-boilerplate).

Adds:
* SASS styling via webpack and [sass-loader](https://github.com/jtangelder/sass-loader)
* [AVA](https://github.com/sindresorhus/ava) + [Enzyme](http://airbnb.io/enzyme) for unit testing
* ESLint config based on [standard](https://github.com/feross/standard) with a few tweaks

### Usage

```
npm install
npm start
open http://localhost:3000
```

To run tests:
```
npm test -- --watch
```

### Editor setup

If you use Atom:
```
apm install linter
apm install linter-eslint
```

Recommended Atom setup for React development:
```
apm install nuclide
apm install language-javascript-jsx
```

Open Atom. Select "Atom --> Install shell commands" from the menu at the top of the screen. In your terminal, go to the directory of your project. Run:
```
atom .
```
This will open the project in Atom. Very convenient.
