import React from 'react'
import { createStore } from './index'
import { render, screen, fireEvent } from '@testing-library/react'
const useStore = createStore({ count: 1 })

const TestComponent = () => {
  const { state, setState } = useStore()
  return (
    <div>
      <span>{state.count}</span>
      <button
        onClick={() =>
          setState({
            count: state.count + 1,
          })
        }>
        btn
      </button>
    </div>
  )
}

describe('store', () => {
  it('store start', () => {
    render(<TestComponent />)
    expect(screen.getByText(1)).toBeInTheDocument()
  })
  it('store can change', () => {
    render(<TestComponent />)
    expect(screen.getByText(1)).toBeInTheDocument()
    fireEvent.click(screen.getByText('btn'))
    expect(screen.getByText(2)).toBeInTheDocument()
  })
})
