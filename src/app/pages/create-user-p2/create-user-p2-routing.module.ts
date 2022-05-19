import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateUserP2Page } from './create-user-p2.page';

const routes: Routes = [
  {
    path: '',
    component: CreateUserP2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateUserP2PageRoutingModule {}
