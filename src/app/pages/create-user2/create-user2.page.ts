import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user2',
  templateUrl: './create-user2.page.html',
  styleUrls: ['./create-user2.page.scss'],
})
export class CreateUser2Page implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  guardarClicked(){
    this.router.navigate(['./create-user']);
  }

}
