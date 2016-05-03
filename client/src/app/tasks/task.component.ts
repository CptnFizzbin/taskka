import {Component, Input} from 'angular2/core';

import {Task} from '../models/task';

@Component({
    selector: 'tka-task',
    templateUrl: 'app/tasks/task.html'
})
export class TaskComponenet {
    @Input()
    public task:Task;
}
