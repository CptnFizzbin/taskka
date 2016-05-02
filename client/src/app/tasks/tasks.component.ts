import {Component, OnInit} from 'angular2/core';
import {TaskService} from './task.service';

@Component({
    templateUrl: 'app/tasks/tasks.html'
})
export class TasksComponent implements OnInit {
    public tasks:Array<Object> = [];

    constructor(private _taskService:TaskService) {

    }

    public ngOnInit() {
        this._taskService.getAll()
            .subscribe(data => {
                console.log(data);
                this.tasks = data;
            });
    }
}
