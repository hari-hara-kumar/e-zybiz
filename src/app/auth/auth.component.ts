import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  viewRegister = false;
  constructor() { }

  ngOnInit() {
  }
  toggleLoginCard() {
    this.viewRegister = !this.viewRegister;
  }

}