import { Action, createStore, Store } from 'redux'
import reducer from './reducer'

export interface State {
  modalIsOpen: boolean
  test: string
}

export type Action =
  | {
      type: 'OPEN_MODAL'
    }
  | {
      type: 'CLOSE_MODAL'
    }

export const INITIAL_STATE: State = {
  modalIsOpen: false,
  test: `Hello from store`,
}

export function makeStore(): Store<State, Action> {
  return createStore(reducer, INITIAL_STATE)
}
