import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatherIconDirective } from '../_directives/feather-icon.directive';

@NgModule({
  declarations: [FeatherIconDirective],
  imports: [
    CommonModule,
  ],
  exports: [FeatherIconDirective]
})
export class FeahterIconModule { }
