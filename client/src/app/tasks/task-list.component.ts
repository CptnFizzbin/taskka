import {Component, Input} from '@angular/core';

import {Task} from './../models/task';

@Component({
    selector: 'tka-task-list',
    templateUrl: 'app/tasks/task-list.html'
})
export class TaskListComponent {
    @Input() public tasks:Array<Task> = [];
    @Input() public selectedTask:Task = null;

    public selectTask(task) {
        this.selectedTask = task;
    }
}
