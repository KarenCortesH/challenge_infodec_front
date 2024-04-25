import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Pantalla1Component } from './pantalla1/pantalla1.component';

export const routes: Routes = [
    {
        path: 'pantalla1', component: Pantalla1Component
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
