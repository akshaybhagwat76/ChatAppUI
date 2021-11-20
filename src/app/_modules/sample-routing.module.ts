import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from 'src/app/sample/error/error.component';
import { DefaultComponent } from '../sample/default/default.component';

const routes: Routes = [
  { path: '', component: DefaultComponent },
  { path: '**', component: ErrorComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SampleRoutingModule { }
