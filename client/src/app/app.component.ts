import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';

import {TaskService} from './tasks/task.service';

import {NavbarComponent} from './navbar/navbar.component';
import {TasksComponent} from './tasks/tasks.component';

@RouteConfig([
    {
        path: '/tasks',
        name: 'Tasks',
        component: TasksComponent,
        useAsDefault: true
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
    public title = 'Angular 2 Gulp Base';
}
