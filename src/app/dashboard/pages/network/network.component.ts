import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-network',
  templateUrl: './network.component.html',
  styleUrls: ['./network.component.scss']
})
export class NetworkComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }
  viewDetail() {
    this.router.navigate(['dashboard/add-network']);
  }
}
