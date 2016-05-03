import {Component, OnInit, Input} from "angular2/core";

@Component({
    selector: 'tka-task',
    templateUrl: 'app/tasks/task.html'
})
export class TaskComponenet {
    @Input() task:Task;
}