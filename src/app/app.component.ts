import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //one way binding
  title = "My Todo list"

  //ngFor loop array
  tasks: string[] = [
    "go to the gym",
    "call dad",
    "go to the library",
    "clean dishes",
    "Shop for the party"
  ]

  //event binding
  add() {
    // console.log('hello world');
    
  }
}
