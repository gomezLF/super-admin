import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore.service';
import {
	FormGroup,
	FormControl,
	Validators,
	FormBuilder
  }from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-password-change',
  templateUrl: './password-change.page.html',
  styleUrls: ['./password-change.page.scss'],
})
export class PasswordChangePage implements OnInit {

	formChangePassword: FormGroup;

	constructor(public fb: FormBuilder, private router: Router, public database: FirestoreService) {
		this.formChangePassword = this.fb.group({
			newPassword: new FormControl('', Validators.required),
			newPasswordConfirm: new FormControl('',Validators.required),
		  });
	 }

	ngOnInit() {
	}

	loginClicked() {
		const values = this.formChangePassword.value;

		if(!this.formChangePassword.invalid && (values.newPassword === values.newPasswordConfirm)){
			this.database.currentUser.contraseña = values.newPassword;
			this.database.currentUser.contraseñaPropia = false;

			this.database.setUser(this.database.currentUser);
			this.router.navigate(['./home']);
		}else {
			console.log('NOse');
		}
	}

}
