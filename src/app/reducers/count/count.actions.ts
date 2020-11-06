import {Action} from '@ngrx/store';

export enum countActionsType{
  increase = '[COUNT] increase',
  decrease = '[COUNT] decrease',
  clear = '[COUNT] clear',
  date = '[COUNT update date'
}

export class CountIncreaseAction implements Action{
  readonly type = countActionsType.increase;
}

export class CountDecreaseAction implements Action{
  readonly type = countActionsType.decrease;
}

export class CountClearAction implements Action{
  readonly type = countActionsType.clear;
}

export class CountUpdateDate implements Action{
  readonly type = countActionsType.date;
  constructor(public payload: {
    date: number
  }) {}
}

export type CountActions = CountIncreaseAction | CountDecreaseAction | CountClearAction | CountUpdateDate;
