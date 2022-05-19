import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateUser2Page } from './create-user2.page';

const routes: Routes = [
  {
    path: '',
    component: CreateUser2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateUser2PageRoutingModule {}
