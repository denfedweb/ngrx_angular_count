import {CountActions, countActionsType} from './count.actions';

export const countNode = 'count';

export interface CountState {
  count: number;
  date: number;
}

const initialState = {
  count: 0,
  date: Date.now()
};

export const countReducer = (state = initialState, action: CountActions) => {
  switch (action.type) {
    case countActionsType.increase:
      return {...state, count: state.count + 1};
    case countActionsType.decrease:
      return {...state, count: state.count - 1};
    case countActionsType.clear:
      return {...state, count: 0};
    case countActionsType.date:
      return {...state, date: action.payload.date};
    default:
      return state;
  }
};
