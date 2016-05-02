import {Component} from 'angular2/core';
import {RouterLink} from 'angular2/router';
import {Tool} from './tool';

@Component({
    selector: 'tool-card',
    templateUrl: 'app/tools/tool-card.html',
    inputs: ['tool'],
    directives: [
        RouterLink
    ]

})
export class ToolCardComponent {
    public tool:Tool;
}
