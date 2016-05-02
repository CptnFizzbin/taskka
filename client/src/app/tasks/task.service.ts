import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';

import {Config} from './../config';

@Injectable()
export class TaskService {
    constructor(private _http:Http) {
    }

    public getAll() {
        return this._http.get(Config.serverAddress + '/tasks')
            .map(res => res.json());
    }
}
