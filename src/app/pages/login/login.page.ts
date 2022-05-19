import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
}from '@angular/forms';
import { FirestoreService } from 'src/app/services/firestore.service';
import { UserInterface } from 'src/app/model/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formLoginUser: FormGroup;

  constructor(public fb: FormBuilder, private router: Router, private database: FirestoreService) {
    this.formLoginUser = this.fb.group({
      username: new FormControl('', Validators.required),
      password: new FormControl('',Validators.required),
    });
   }

  ngOnInit() {
  }

  loginClicked() {
    const values = this.formLoginUser.value;

    if(!this.formLoginUser.invalid){
      this.database.getUser(values.username).then((doc) => {

        doc.forEach((user)=>{
          const userData = user.data() as UserInterface;
          if(user.exists && values.password === userData.contraseña){
            this.database.currentUser = userData;

            if(values.contraseñaPropia){
              this.router.navigate(['./password-change']);
            }else {
              this.router.navigate(['./home']);
            }
          }else{
            alert('no existe');
          }
        });
      });
    }
  }

}
