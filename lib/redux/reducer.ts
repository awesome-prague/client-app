import { Action, State, INITIAL_STATE } from './store'

export default function reducer(state: State = INITIAL_STATE, action: Action) {
  switch (action.type) {
    case 'OPEN_MODAL': {
      return {
        ...state,
        modalIsOpen: true,
      }
    }

    case 'CLOSE_MODAL': {
      return {
        ...state,
        modalIsOpen: false,
      }
    }

    default:
      return state
  }
}
