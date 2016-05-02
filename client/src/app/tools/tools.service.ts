import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';

@Injectable()
export class ToolsService {
    constructor (private _http:Http) {}

    public getTools() {
        return this._http.get('app/tools/tools.json')
            .map(res => res.json());
    }
}
