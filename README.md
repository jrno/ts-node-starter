# typescript-node

## Description

Slightly extened "hello world" for getting up & running with ts+node faster ..

- ```npm start -- <name>``` to hello 'name'

- ```npm build``` to build dist

- ```npm test``` to run tests

## Formatting

Code formatting using [prettier](https://prettier.io/). Change defaults in _.prettierrc.js_

```bash
npm i -D prettier eslint-config-prettier eslint-plugin-prettier
```

## Linting

Lint typescript using [ESLint](https://eslint.org/) with typescript plugin. ESLint is (apparently) the preferred choice over TSLint in 2019

```bash
npm i -D eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
```

## VSCode

By default ESLint plugin will only validate javascript files. Add these to vscode settings (react if required)

```json
"eslint.validate": [
  "javascript",
  "javascriptreact",
  "typescript",
  "typescriptreact"
]
```
