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
  //local referencing newTask:string
  add(newTask: string) {
    if (newTask.length > 0) {
      //adding a new task to the list
      this.tasks.push(newTask);
    } else {
      alert ('please enter a new task')
    }
  }

  //remove a task
  remove(existingTask: string) {
    var userConfirmed = confirm(`Are you sure you want to remove ${existingTask}?`);

    if (userConfirmed == true) {
      this.tasks = this.tasks.filter(task => task != existingTask);
    }
  }

}
