import {Component} from 'angular2/core';
import {RouterLink, Router} from "angular2/router";

@Component({
    selector: 'task-navbar',
    templateUrl: 'app/navbar/navbar.html',
    directives: [
        RouterLink
    ]
})
export class NavbarComponent {

    constructor(public router:Router) {
    }

    public isRouteActive(route) {
        return this.router.isRouteActive(this.router.generate(route));
    }
}
