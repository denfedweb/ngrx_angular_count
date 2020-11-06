import {Component} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {CountState} from './reducers/count/count.reducer';
import {Observable} from 'rxjs';
import {selectCount, selectDate} from './reducers/count/count.selectors';
import {CountClearAction, CountDecreaseAction, CountIncreaseAction} from './reducers/count/count.actions';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public count$: Observable<number> = this.store$.pipe(select(selectCount));
  public date$: Observable<number> = this.store$.pipe(select(selectDate));
  public disableDecrease$: Observable<boolean> = this.count$.pipe(map(count => count <= 0));

  constructor(private store$: Store<CountState>) {

  }

  increase() {
    this.store$.dispatch(new CountIncreaseAction());
  }

  decrease() {
    this.store$.dispatch(new CountDecreaseAction());
  }

  clear() {
    this.store$.dispatch(new CountClearAction());
  }
}
