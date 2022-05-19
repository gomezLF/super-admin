import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateUser2PageRoutingModule } from './create-user2-routing.module';

import { CreateUser2Page } from './create-user2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateUser2PageRoutingModule
  ],
  declarations: [CreateUser2Page]
})
export class CreateUser2PageModule {}
