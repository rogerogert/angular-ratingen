import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'recipe-book';
  public showTestSection: boolean = false;
  public loadedSection = 'recipes-section';

  ngOnInit(): void {
    this.showTestSection = environment.showMyTestSection;
  }
}
