import {Component} from 'angular2/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';

import {WelcomeComponent} from './welcome/weclome.component';
import {ToolsComponent} from './tools/tools.component';
import {ToolsService} from './tools/tools.service';
import {NavbarComponent} from "./navbar/navbar.component";

@RouteConfig([
    {
        path: '/welcome',
        name: 'Welcome',
        component: WelcomeComponent,
        useAsDefault: true
    },
    {
        path: '/tools',
        name: 'Tools',
        component: ToolsComponent
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
        ToolsService
    ],
    selector: 'my-app',
    templateUrl: 'app/app.html'
})

export class AppComponent {
    public title = 'Angular 2 Gulp Base';
}
