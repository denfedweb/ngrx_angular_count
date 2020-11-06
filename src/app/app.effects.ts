import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {countActionsType, CountUpdateDate} from './reducers/count/count.actions';
import {map} from 'rxjs/operators';

@Injectable()
export class AppEffects {
  constructor(private actions: Actions) {}
  @Effect()
  updatedDate(){
    return this.actions.pipe(
      ofType(countActionsType.increase, countActionsType.decrease, countActionsType.clear),
      map(() => {
        return new CountUpdateDate({
          date: Date.now()
        });
      })
    );
  }
}
