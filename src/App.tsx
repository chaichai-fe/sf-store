import createStore from './store/index'
const useCounterStore = createStore({
  count: 0,
  list: [1, 2, 3],
})

const App = () => {
  const { state, setState } = useCounterStore()
  const changeList = () => {
    setState((state) => {
      return {
        list: [...state.list, 4],
      }
    })
  }
  return (
    <div>
      <button onClick={() => setState({ count: state.count + 1 })}>
        {state.count}
      </button>
      <button onClick={changeList}>{JSON.stringify(state.list)}</button>
    </div>
  )
}

export default App
