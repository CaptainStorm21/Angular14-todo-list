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
  tasks: Task[] = [
    new Task("go to the gym"),
    new Task("call dad"),
    new Task("go to the library"),
    new Task("clean dishes"),
    new Task("Shop for the party")
  ]

  //event binding
  //local referencing newTask:string
  add(newTask: string) {
      //adding a new task to the list
      this.tasks.push(new Task(newTask));

  }

  //remove a task
  remove(existingTask: Task) {
    var userConfirmed =
      confirm(`Are you sure you want to remove ${existingTask.title}?`);

    if (userConfirmed == true) {
      this.tasks = this.tasks.filter(task => task != existingTask);
    }
  }


}


class Task {
  constructor(
    public title: string
  ) { }

  //confirm done
  toggleIsDone() {
    // alert('"' + task.title + '" task is done');
    //toggling between done and undone
    this.isDone = !this.isDone;
  }
  public isDone=false

}
