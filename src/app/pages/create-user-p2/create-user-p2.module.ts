import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateUserP2PageRoutingModule } from './create-user-p2-routing.module';

import { CreateUserP2Page } from './create-user-p2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CreateUserP2PageRoutingModule
  ],
  declarations: [CreateUserP2Page]
})
export class CreateUserP2PageModule {}
