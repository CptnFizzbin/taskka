import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES, Router} from '@angular/router';

@Component({
    selector: 'tka-navbar',
    templateUrl: 'app/navbar/navbar.html',
    directives: [
        ROUTER_DIRECTIVES
    ]
})
export class NavbarComponent {
    constructor(public router:Router) {
    }
}
