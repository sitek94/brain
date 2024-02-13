---
title: Detect a click outside an element in React
tags: react, typescript, javascript
createdAt: 20/10/2022
---

# Detect a click outside an element in React

Today, I had to close a modal, after clicking outside of it. Here's how I've done it:

```typescript
export default function App() {
  const [open, setOpen] = React.useState(false)
  const modalRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const onOutsideClick = (event: MouseEvent) => {
      const modalEl = modalRef.current

      // Do nothing if clicking ref's element or its descendent elements
      if (!modalEl || modalEl.contains(event.target as Node)) {
        return
      }

      setOpen(false)
    }

    window.addEventListener('mousedown', onOutsideClick)

    return () => {
      window.removeEventListener('mousedown', onOutsideClick)
    }
  }, [setOpen])

  return (
    <>
      <button onClick={() => setOpen(true)}>Open modal</button>
      {open && (
        <div className="overlay">
          <div className="modal" ref={modalRef}>
            <h1>Modal content</h1>
          </div>
        </div>
      )}
    </>
  )
}
```

You could go one step further and extract it to a custom hook, like so:

```typescript
function useOnClickOutside<T extends HTMLElement = HTMLElement>(callback: () => void) {
  const ref = React.useRef<T>(null)

  React.useEffect(() => {
    const onOutsideClick = (event: MouseEvent) => {
      // Do nothing if clicking ref's element or its descendent elements
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return
      }
      callback()
    }

    window.addEventListener('mousedown', onOutsideClick)

    return () => {
      window.removeEventListener('mousedown', onOutsideClick)
    }
  }, [callback])

  return ref
}

export default function App() {
  const [open, setOpen] = React.useState(false)
  const modalRef = useOnClickOutside<HTMLDivElement>(() => setOpen(false))

  return (
    <>
      <button onClick={() => setOpen(true)}>Open modal</button>
      {open && (
        <div className="overlay">
          <div className="modal" ref={modalRef}>
            <h1>Modal content</h1>
          </div>
        </div>
      )}
    </>
  )
}
```

My example is very simple, for something more advanced, check **usehooks-ts** in the resources.

## Resources

- [Example CodeSandbox](https://codesandbox.io/s/react-useonclickoutside-rfums4)
- [usehooks-ts: useOnClickOutside](https://usehooks-ts.com/react-hook/use-on-click-outside)
