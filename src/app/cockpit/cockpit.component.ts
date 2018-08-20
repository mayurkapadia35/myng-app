import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();

  // newServerName = '';
  // newServerContent = '';
  @ViewChild('serverInputContent') serverInputContent: ElementRef;
  constructor() { }

  ngOnInit() {
  }

  onAddServer (nameValue: HTMLInputElement) {
    console.log(this.serverInputContent);
    this.serverCreated.emit({
      serverName: nameValue.value,
      serverContent: this.serverInputContent.nativeElement.value
    });
  }

  onAddBlueprint (nameValue: HTMLInputElement) {
    this.blueprintCreated .emit({
      serverName: nameValue.value,
      serverContent: this.serverInputContent.nativeElement.value
    });
  }
}
