import { Routes } from '@angular/router';

export const SAMPLE_ROUTES: Routes = [
    {
        path: '', loadChildren: () => import('../_modules/sample.module').then(m => m.SampleModule)
    }
]