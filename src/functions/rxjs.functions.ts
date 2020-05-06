import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

/**
 * Observable の現在の値を取得します．
 * @param o Observable 型の値
 * @return Observable の現在の値
 */
export function getLatestValue(o: Observable<any>): any {
  let value: any;
  const subscription = o.pipe(take(1)).subscribe(s => value = s);
  subscription.unsubscribe();
  return value;
}
