import { Component } from '@angular/core';
@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`
    .online {
      color: white
    }
  `]
})

export class ServerComponent {
  test = [
    {name: 'php', value: 'Higher'},
    {name: '.net', value: 'high'},
    {name: 'java', value: 'lesser'}
    ];
  serverId: number = 10;
  serverStatus: string = 'Offline';

  constructor () {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
}
  getServerStatus() {
    return this.serverStatus;
  }
  getColor () {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }
}
