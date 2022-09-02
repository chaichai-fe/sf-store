import { createStore } from './lib/index'
const useCounterStore = createStore({ count: 0 })

const App = () => {
  const { state, setState } = useCounterStore()

  return (
    <div>
      <button onClick={() => setState({ count: state.count + 1 })}>
        {state.count}
      </button>
    </div>
  )
}

export default App
