import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-network-detail',
  templateUrl: './network-detail.component.html',
  styleUrls: ['./network-detail.component.scss']
})
export class NetworkDetailComponent implements OnInit {
  isEdit = false;
  constructor() { }

  ngOnInit() {
  }
  toggleEdit() {
    this.isEdit = !this.isEdit;
  }

}
