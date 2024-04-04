import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private searchQuerySubject: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor() { }
  setSearchQuery(query: string): void {
    this.searchQuerySubject.next(query);
  }
  getSearchQuery(): Observable<string> {
    return this.searchQuerySubject.asObservable();
  }
}
