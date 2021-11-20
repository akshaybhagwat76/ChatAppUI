import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SampleRoutingModule } from './sample-routing.module';
import { SampleHeaderComponent } from 'src/app/sample/shared/header/header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbCollapseModule, NgbDatepickerModule, NgbDropdownModule, NgbModalModule, NgbNavModule, NgbRatingModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { PerfectScrollbarConfigInterface, PerfectScrollbarModule, PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { FeahterIconModule } from './feather-icon.module';
import { ErrorComponent } from '../sample/error/error.component';
import { SampleSidekickComponent } from '../sample/shared/sidekick/sidekick.component';
import { ContextMenuModule } from 'ngx-contextmenu';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { DefaultComponent } from '../sample/default/default.component';
import { MatMenuModule } from '@angular/material/menu';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { MatRadioModule } from '@angular/material/radio';
import { ImagePreloadDirective } from '../_directives/image.directive';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { NgxSpinnerModule } from 'ngx-spinner';
import { MatSliderModule } from '@angular/material/slider';
import { SharedModule } from './shared.module';
import { SampleModalComponent } from '../sample/popups/sample-modal/sample-modal.component';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
  wheelSpeed: 0.7
};

@NgModule({
  declarations: [
    SampleHeaderComponent,
    SampleSidekickComponent,
    DefaultComponent,
    ErrorComponent,
    ImagePreloadDirective,
    SampleModalComponent
  ],
  imports: [
    CommonModule,
    SampleRoutingModule,
    ReactiveFormsModule,
    NgbDropdownModule,
    NgbModalModule,
    NgbCollapseModule,
    PerfectScrollbarModule,
    FeahterIconModule,
    NgbDatepickerModule,
    NgbTooltipModule,
    NgbNavModule,
    NgxDatatableModule,
    MatInputModule,
    MatIconModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonToggleModule,
    MatSliderModule,
    MatMenuModule,
    MatTabsModule,
    MatRadioModule,
    NgxSpinnerModule,
    NgbRatingModule,
    SharedModule,
    CollapseModule.forRoot(),
    ContextMenuModule.forRoot({
      useBootstrap4: true
    })
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ],
  exports: [
    SampleHeaderComponent,
    SampleSidekickComponent,
    NgxSpinnerModule,
    SampleModalComponent
  ]
})
export class SampleModule { }