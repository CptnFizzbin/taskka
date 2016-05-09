import { Component } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { Routes, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router';

import {TaskService} from './tasks/task.service';
import {NavbarComponent} from './navbar/navbar.component';
import {TasksComponent} from './tasks/tasks.component';

@Routes([
    {
        path: '/tasks',
        component: TasksComponent
    }
])

@Component({
    directives: [
        ROUTER_DIRECTIVES,
        NavbarComponent
    ],
    providers: [
        ROUTER_PROVIDERS,
        HTTP_PROVIDERS,
        TaskService
    ],
    selector: 'my-app',
    templateUrl: 'app/app.html'
})

export class AppComponent {
    public title = 'Taskka';
}
