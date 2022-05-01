import { BreakpointObserver } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class BreakPointService {
  isLargeDevice$ = this.breakpointObserver
    .observe('(min-width: 992px)')
    .pipe(map((result) => result.matches));

  isMediumDevice$ = this.breakpointObserver
    .observe('(min-width: 768px)')
    .pipe(map((result) => result.matches));

  isSmallDevice$ = this.breakpointObserver
    .observe('(min-width:  576px)')
    .pipe(map((result) => result.matches));

  isXL$ = this.breakpointObserver
    .observe('(min-width:  1200px)')
    .pipe(map((result) => result.matches));

  isXXL$ = this.breakpointObserver
    .observe('(min-width:  1400px)')
    .pipe(map((result) => result.matches));

  constructor(public breakpointObserver: BreakpointObserver) {}
}
