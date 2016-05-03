import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';

import {Config} from './../config';
import {Task} from './task';

@Injectable()
export class TaskService {
    constructor(private _http:Http) {
    }

    public getAll() {
        return this._http.get(Config.serverAddress + '/tasks')
            .map(res => res.json());
    }

    public post(task: Task) {
        return this._http.post(Config.serverAddress + '/tasks', JSON.stringify(task))
            .map(res => res.json());
    }
}
