import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  public firstName = '';
  public lastName = '';
  @ViewChild('firstNameInput') public firstNameInput!: ElementRef<HTMLInputElement>;
  @ViewChild('lastNameInput') public lastNameInput!: ElementRef<HTMLInputElement>;
  public isVisible = false;
  public names = ['Rogerio', 'Jari', 'Ingo', 'Ravi', 'Emrah', 'Eric'];

  public inputEventTrigger(): void {
    alert("funciona!");
  }

  public inputValue(event: Event): void {
    this.lastName = (event.target as HTMLInputElement).value;
    console.log(this.lastName);
  }
  constructor() {

  }

  ngOnInit() {
    this.isVisible = environment.showMyTestSection
  }

  public sendName(): void {
    this.firstName = this.firstNameInput.nativeElement.value;
    this.lastName = this.lastNameInput.nativeElement.value;
    console.log("First Name: " + this.firstName);
    console.log("Last Name: " + this.lastName);
  }

}
