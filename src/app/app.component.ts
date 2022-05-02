import { Component } from '@angular/core';
import { BreakPointService } from '@ontop/shared/utils';
import { PrimeNGConfig } from 'primeng/api';
import { items } from './menu';
@Component({
  selector: 'ontop-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  items = items;
  isLargeDevice$ = this.breakPointService.isLargeDevice$;

  constructor(
    private primengConfig: PrimeNGConfig,
    private breakPointService: BreakPointService
  ) {}

  ngOnInit() {
    this.primengConfig.ripple = true;
  }
}
