// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    "eol-last": 0,
    "space-before-function-paren": 0
  }
  // "rules": {
  //   "linebreak-style": [
  //     "error",
  //     "windows"
  //   ],
  //   //"semi": ["error", "always"],
  //   "no-empty": 0,
  //   "comma-dangle": 0,
  //   "no-unused-vars": 0,
  //   "no-console": 0,
  //   "no-const-assign": 2,
  //   "no-dupe-class-members": 2,
  //   "no-duplicate-case": 2,
  //   "no-extra-parens": [2, "functions"],
  //   "no-self-compare": 2,
  //   "accessor-pairs": 2,
  //   "comma-spacing": [2, {
  //     "before": false,
  //     "after": true
  //   }],
  //   "constructor-super": 2,
  //   "new-cap": [2, {
  //     "newIsCap": true,
  //     "capIsNew": false
  //   }],
  //   "new-parens": 2,
  //   "no-array-constructor": 2,
  //   "no-class-assign": 2,
  //   "no-cond-assign": 2
  // }
}
