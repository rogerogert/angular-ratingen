import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() sectionChanged = new EventEmitter<string>();

  constructor() { }

  public switchPage(section: string): void {
    this.sectionChanged.emit(section);
  }

}
