import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgSelectModule,
    ToastrModule.forRoot({
      positionClass: 'toast-top-left',
      preventDuplicates: true
    }),
  ],
  exports: [
    CommonModule,
    FormsModule,
    NgSelectModule,
    PerfectScrollbarModule,
    ToastrModule
  ]
})
export class SharedModule { }
