import { useSyncExternalStore } from 'react'
type State = Record<string, unknown>
type Cb = () => void
function createStore<T extends State>(storeKey: string, initialState: T) {
  const store = {
    storeKey,
    state: initialState,
    getSnapshot: () => store.state,
    // the method change the state
    setState: (fnOrNewState: Partial<T> | ((newState: T) => Partial<T>)) => {
      const newState =
        typeof fnOrNewState === 'function'
          ? fnOrNewState(store.state)
          : fnOrNewState
      store.state = {
        ...store.state,
        ...newState,
      }
      store.listeners.forEach((listener) => {
        listener()
      })
    },
    listeners: new Set<Cb>(),
    subscribe: (cb: Cb) => {
      store.listeners.add(cb)
      return () => {
        store.listeners.delete(cb)
      }
    },
  }
  // 外部订阅的核心方法 在组件中调用此方法可以让组件的更新订阅state
  const useState = (): T => {
    return useSyncExternalStore(store.subscribe, store.getSnapshot)
  }
  // 统一导出state和修改state的方法
  const useStore = () => {
    return {
      state: useState(),
      setState: store.setState,
    }
  }
  return useStore
}
export default createStore
