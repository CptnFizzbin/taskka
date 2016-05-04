import {Component, OnInit} from 'angular2/core';

import {TaskService} from './task.service';
import {Task} from './../models/task';
import {TaskComponent} from './task.component';

@Component({
    templateUrl: 'app/tasks/tasks.html',
    directives: [
        TaskComponent
    ]
})
export class TasksComponent implements OnInit {
    public tasks:Array<Task>;
    public newTask:Task;
    public creatingNewTask:Boolean;

    constructor(private _taskService:TaskService) {
    }

    public ngOnInit() {
        this.tasks = [];
        this.creatingNewTask = false;

        this._clearNewTask();
        this._loadAllTasks();
    }

    public addTask() {
        this.creatingNewTask = true;

        this._taskService.post(this.newTask)
            .subscribe(
                data => {
                    this.tasks.push(data);
                    this._clearNewTask();
                    this.creatingNewTask = false;
                },
                error => {
                    console.log(error);
                }
            );
    }

    public deleteTask(task:Task) {
        this._taskService.destroy(task.id)
            .subscribe(
                data => {
                    this._loadAllTasks();
                },
                error => {
                    console.log(error);
                }
            );
    }

    private _clearNewTask() {
        this.newTask = <Task>{ name: '' };
    }

    private _loadAllTasks() {
        this._taskService.getAll()
            .subscribe(
                data => {
                    this.tasks = data;
                },
                error => {
                    console.log(error);
                }
            );
    }
}
