import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-test-child',
  templateUrl: './test-child.component.html',
  styleUrls: ['./test-child.component.css']
})
export class TestChildComponent implements OnInit {

  @Input() public fullName = '';
  @Output() outputtedStringEmitter = new EventEmitter<string>();

  public childInputValue = '';

  constructor() { }

  public sendChild(): void {
    this.outputtedStringEmitter.emit(this.childInputValue);
    console.log(this.childInputValue);
  }

  ngOnInit() {
  }

}
