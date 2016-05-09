import {Component, OnInit} from 'angular2/core';
import {RouteConfig} from "angular2/router";

import {TaskService} from './task.service';
import {Task} from './../models/task';
import {TaskComponent} from './task.component';
import {TaskListComponent} from "./task-list.component";

@Component({
    templateUrl: 'app/tasks/tasks.html',
    directives: [
        TaskComponent,
        TaskListComponent
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

    public taskUpdated(task:Task) {
    }

    public taskDeleted(task:Task) {
        for (var i = 0; i < this.tasks.length; i++) {
            if (this.tasks[i].id && this.tasks[i].id === task.id) {
                this.tasks.splice(i, 1);
                break;
            }
        }
    }

    private _clearNewTask() {
        this.newTask = <Task>{name: ''};
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
