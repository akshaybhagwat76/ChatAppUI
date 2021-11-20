import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SampleLayoutComponent } from './_layouts/sample-layout.component';
import { SAMPLE_ROUTES } from './_routes/sample-layout-routes';

const routes: Routes = [
  { path: '', component: SampleLayoutComponent, children: SAMPLE_ROUTES },
  { path: '**', redirectTo: 'error' /*component: ErrorComponent*/, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'}), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
