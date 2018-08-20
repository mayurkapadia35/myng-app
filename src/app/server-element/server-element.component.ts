import {
  Component, OnInit, Input, OnChanges, DoCheck, AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked, OnDestroy, ViewChild, ElementRef
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {
  @Input('srcElement') element: {type: string, name: string, content: string};
  @ViewChild('heading') header: ElementRef;
  constructor() {
    console.log('Constructor Called');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('OnChanges called');
    console.log(changes);
  }

  ngOnInit() {
    console.log('ngInit Called');
  }

  ngDoCheck(){
    console.log('doc ehck is calledd');
  }

  ngAfterContentInit() {
    console.log('AfterContentInit called');
  }

  ngAfterContentChecked () {
    console.log('AfterContentChecked called');
  }

  ngAfterViewInit() {
    console.log('AfterViewInit called');
    console.log(this.header.nativeElement.textContent);
  }

  ngAfterViewChecked() {
    console.log('AfterViewChecked called');
  }

  ngOnDestroy() {
    console.log('onDestroy Called');
  }
}
