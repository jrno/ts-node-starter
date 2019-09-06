# typescript-node

## Description

Slightly extended "hello world" starter to get writing typescript/node apps without the configuration ceremony

- ```npm start -- <name>``` to greet yourself

- ```npm build``` to build dist

- ```npm test``` to run tests

## Formatting

Code formatting using [prettier](https://prettier.io/). Change defaults in _.prettierrc.js_

```bash
npm i -D prettier eslint-config-prettier eslint-plugin-prettier
```

## Linting

Linting using [ESLint](https://eslint.org/) which replaces TSLint as the preferred linting option in 2019

```bash
npm i -D eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
```

## VSCode

By default ESLint plugin will only validate javascript files. Add these to vscode settings

```json
"eslint.validate": [
  "javascript",
  "javascriptreact",
  "typescript",
  "typescriptreact"
]
```
