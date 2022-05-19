import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
}from '@angular/forms'

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.page.html',
  styleUrls: ['./create-user.page.scss'],
})
export class CreateUserPage implements OnInit {

  formCreateUser: FormGroup;


  constructor(public fb: FormBuilder) {
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

}
