import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemoFormComponent } from './demo-form/demo-form.component';

const routes: Routes = [
  { path: '', component: DemoFormComponent },
  { path: '**', component: DemoFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
