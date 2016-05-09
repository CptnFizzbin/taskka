import {Component, Input, Output, OnInit, EventEmitter} from 'angular2/core';
import {FORM_DIRECTIVES} from 'angular2/common';
import * as _ from 'lodash';

import {Task} from '../models/task';
import {TaskService} from './task.service';

@Component({
    selector: 'tka-task',
    templateUrl: 'app/tasks/task.html',
    directives: [FORM_DIRECTIVES]
})
export class TaskComponent implements OnInit {
    @Input() public task:Task;
    @Output() public taskUpdated:EventEmitter<Task> = new EventEmitter();
    @Output() public taskDeleted:EventEmitter<Task> = new EventEmitter();

    public editTask:Task;
    public editing:Boolean;
    public saving:Boolean;
    public deleted:Boolean = false;

    constructor(private _taskService:TaskService) {

    }

    public ngOnInit() {
        this.editTask = _.clone(this.task);
        this.saving = false;
        this.editing = false;
    }

    public edit() {
        if (this.deleted) { return; }
        this.editing = true;
    }

    public destroy() {
        this._taskService.destroy(this.task.id)
            .subscribe(
                data => {
                    this.task = data;
                    this.ngOnInit();
                    this.deleted = true;

                    this.taskDeleted.emit(this.task);
                },
                error => {
                    console.log(error);
                }
            );


    }

    public save() {
        if (this.deleted) { return; }
        this.saving = true;

        this._taskService.put(this.editTask.id, this.editTask)
            .subscribe(
                data => {
                    this.task = data;
                    this.ngOnInit();

                    this.taskUpdated.emit(this.task);
                }
            );
    }
}
