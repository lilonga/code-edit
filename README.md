# @lilonga/code-editor

> Code editor component for React. Based on Ace editor.

[![NPM](https://img.shields.io/npm/v/@lilonga/code-editor.svg)](https://www.npmjs.com/package/@lilonga/code-editor)

## Install

```bash
npm install --save @lilonga/code-editor
```

## Usage
Try out an editable version the below example at Repl.it: [https://repl.it/@lilonga/code-editor](https://repl.it/@lilonga/code-editor)

```jsx
import React, { Component } from 'react'

import CodeEditor from '@lilonga/code-editor'

export default class Example extends Component {
  render () {
    return (
      <CodeEditor 
        code="<h1>Header</h1>" 
        onChange={code => console(code)}
      />
    )
  }
}
```

## License

MIT © [lilonga](https://github.com/lilonga)
