import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.page.html',
  styleUrls: ['./create-user.page.scss'],
})
export class CreateUserPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  siguienteClicked(){
    this.router.navigate(['./create-user2']);
  }

}
