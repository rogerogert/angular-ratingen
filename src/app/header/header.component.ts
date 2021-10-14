import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() sectionChanged = new EventEmitter<string>();

  constructor(private router: Router) { }

  // public switchPage(section: string): void {
  //   this.sectionChanged.emit(section);
  // }

  public switchToShoppingList(): void {
    this.router.navigate(['shopping-list'])
  }

}
