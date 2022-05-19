import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
}from '@angular/forms'
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-create-user-p2',
  templateUrl: './create-user-p2.page.html',
  styleUrls: ['./create-user-p2.page.scss'],
})
export class CreateUserP2Page implements OnInit {


  formCreateUser: FormGroup;

  constructor(public fb: FormBuilder,
    private router: Router,
    public alertController: AlertController) {
    this.formCreateUser = this.fb.group({
      'number': new FormControl("",Validators.required),
      'homenumber': new FormControl("",Validators.required),
      'rol': new FormControl("",Validators.required),
      'state': new FormControl("",Validators.required),
      'colaborate': new FormControl("",Validators.required)
    })
  }

  ngOnInit() {
  }

  async saveUser(){
    var f = this.formCreateUser.value;

    if(this.formCreateUser.invalid){
      const alert = await this.alertController.create({
        header: 'INCOMPLETO',
        message: 'Debes de llenar todos los campos antes de continuar.',
        buttons: ['OK']
      });
  
      await alert.present();
      return
    }else{
      var secondPartUser = {
        number: f.number,
        homenumber: f.homenumber,
        rol: f.rol,
        state: f.state,
        colaborate: f.colaborate
      }
      localStorage.setItem('usuarioP2', JSON.stringify(secondPartUser));
      //this.router.navigate(['create-user-p2'])
    }
  }

}
