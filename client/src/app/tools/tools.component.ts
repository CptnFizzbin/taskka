import {Component, OnInit} from 'angular2/core';

import {ToolCardComponent} from './tool-card.component';
import {Tool} from './tool';
import {ToolsService} from './tools.service';

@Component({
    templateUrl: 'app/tools/tools.html',
    directives: [
        ToolCardComponent
    ]
})
export class ToolsComponent implements OnInit {
    public tools:Array<Tool>;

    constructor(private _toolsService:ToolsService) {
    }

    public ngOnInit() {
        this._toolsService.getTools()
            .subscribe(data => this.tools = data);
    }
}
