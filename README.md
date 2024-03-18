# react-copy-snippet

![screenshot](https://firebasestorage.googleapis.com/v0/b/fir-auth-1c3bc.appspot.com/o/Screenshot%202024-03-19%20003914.jpg?alt=media&token=1a46ce54-183e-4f78-ab68-88cd3ea068b5)

React component and hook for copying text from an HTML element.

## Installation
If you prefer npm:
```bash
npm i react-copy-snippet
```
If you prefer yarn:
```bash
yarn add react-copy-snippet
```

## usage

```bash
import CopySnippet from 'react-copy-snippet'
import { useRef } from 'react'

const Demo = () => {

  const snipRef = useRef(null)

  return (
    <div>
      <pre ref={snipRef}>
        this is an example text that is being copied.
      </pre>
      <CopySnippet ref={snipRef} />
    </div>
  )
}

export default Demo
```

if you just want to copy some text

```bash
import CopySnippet from 'react-copy-snippet'

const Demo = () => {

  return (
    <div>
      <CopySnippet text="hello world" />
    </div>
  )
}

export default Demo
```

we also have useCopyToClipboard hook

```bash
import CopySnippet, { useCopyToClipboard } from 'react-copy-snippet'
import { useRef } from 'react'

const Demo = () => {

  const snipRef = useRef(null)
  const {handleCopy, isCopied} = useCopyToClipboard({textContent: "hello world"})

  return (
    <div>
      <pre ref={snipRef}>
        this is an example text that is being copied.
      </pre>
      <CopySnippet ref={snipRef} />

      <button onClick={handleCopy}>{isCopied ? "copied!" : "copy"}</button>
    </div>
  )
}

export default Demo
```

## Props

| Name     | Type            | Description                                             |
|----------|-----------------|---------------------------------------------------------|
| `text`   | string          | The text content to be copied when using the component. |
| `ref`    | React.RefObject | Reference to the HTML element from which to copy text.  |
| Any HTML Attributes | -       | Any additional HTML attributes to be passed to the underlying `<button>` element. |
