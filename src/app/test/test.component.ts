import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  public firstName = '';

  public inputEventTrigger(): void {
    alert("funciona!");
  }

  public inputValue(event: Event): void {
    this.firstName = (event.target as HTMLInputElement).value;
  }
  constructor() { }

  ngOnInit() {
  }

}
