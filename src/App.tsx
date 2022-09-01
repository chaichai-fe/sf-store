import createStore from './store'
const useCounterStore = createStore('counter', {
  count: 0,
  list: [1, 2, 3],
})
const App = () => {
  const { state, setState } = useCounterStore()
  const changeList = () => {
    setState((state) => {
      return {
        list: [...state.list, 7, 8, 9],
      }
    })
  }
  return (
    <div>
      this is app
      <button onClick={() => setState({ count: state.count + 1 })}>
        {state.count}
      </button>
      <button onClick={changeList}>{JSON.stringify(state.list)}</button>
    </div>
  )
}

export default App
