import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  public name = '';

  public inputEventTrigger(): void {
    alert("funciona!");
  }

  public inputValue(event: Event): void {
    this.name = (event.target as HTMLInputElement).value;
  }
  constructor() { }

  ngOnInit() {
  }

}
