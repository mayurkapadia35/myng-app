import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  status = 'server is not created.!!!';
  flag = true;
  txtname = 'testserver';
  serverCreated = false;
  constructor() {
    setTimeout(() => {
      this.flag = false;
    }, 10000);
  }

  ngOnInit() {
  }

  onCreateServer () {
    this.serverCreated = true;
    this.status = 'Server was created. ' + this.txtname;
  }
  // getFirstName (event) {
  //   this.txtname = event.target.value;
  // }
}
