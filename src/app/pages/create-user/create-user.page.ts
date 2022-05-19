import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
}from '@angular/forms'
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.page.html',
  styleUrls: ['./create-user.page.scss'],
})
export class CreateUserPage implements OnInit {

  formCreateUser: FormGroup;

  constructor(public fb: FormBuilder,
    public alertController: AlertController) {
    this.formCreateUser = this.fb.group({
      'iddoc': new FormControl("",Validators.required),
      'name': new FormControl("",Validators.required),
      'flastname': new FormControl("",Validators.required),
      'slastname': new FormControl("",Validators.required),
      'email': new FormControl("",Validators.required)
    })
  }

  ngOnInit() {
  }

  async createUserNextPage(){
    var f = this.formCreateUser.value;

    if(this.formCreateUser.invalid){
      const alert = await this.alertController.create({
        header: 'INCOMPLETO',
        message: 'Debes de llenar todos los campos antes de continuar.',
        buttons: ['OK']
      });
  
      await alert.present();
      return
    }

    var usuario = {
      id: f.iddoc,
      name: f.name,
      flastname: f.flastname,
      slastname: f.slastname,
      email: f.email
    }

    localStorage.setItem('usuario', JSON.stringify(usuario))
  }
}
