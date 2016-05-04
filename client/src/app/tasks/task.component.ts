import {Component, Input, OnInit} from 'angular2/core';
import * as _ from 'lodash';

import {Task} from '../models/task';
import {TaskService} from "./task.service";

@Component({
    selector: 'tka-task',
    templateUrl: 'app/tasks/task.html'
})
export class TaskComponent implements OnInit {
    @Input()
    public task:Task;

    public editTask:Task;
    public editing = {
        name: false
    };
    public saving = {
        name: false
    };

    constructor(private _taskService: TaskService) {

    }

    public ngOnInit () {
        this.editTask = _.clone(this.task);
    }

    public editName() {
        this.editing.name = true;
    }

    public saveName() {
        var payload = {
            name: this.editTask.name
        };

        this.saving.name = true;

        this._taskService.put(this.editTask.id, payload)
            .subscribe(
                data => {
                    this.task.name = data.name;
                    this.editTask.name = data.name;
                    this.saving.name = false;
                    this.editing.name = false;
                }
            );
    }
}
