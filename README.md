# Intro

> A so mini React Manager

# Install

```bash
$ yarn add sf-store
# or
$ npm i sf-store
```

# Usage

```jsx
import { createStore } from 'sf-store'
const useStore = createStore({ count: 0 })
function App() {
  const { state, setState } = useStore()
  return (
    <>
      <button onClick={() => setState({ count: state.count + 1 })}>
        count is {state.count}
      </button>
    </>
  )
}
```

# API

```JSX
import { createStore } from 'sf-store'
// pass in parameters of object type
// then the fn can return a new function
const useStore = createStore({count: 0})


// useStore fn can be called only in the functional component
// then return a state and a function to change the state
const { state, setState } = useStore()
```

# License

[MIT License](https://github.com/nanxiaobei/resso/blob/main/LICENSE) (c) [柴柴\_前端教书匠](https://space.bilibili.com/495118923)
