import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';

import {Config} from './../config';
import {Task} from './../models/task';

@Injectable()
export class TaskService {
    private serverUrl: string;

    constructor(private _http:Http) {
        this.serverUrl = Config.serverAddress + '/tasks';
    }

    public getAll() {
        return this._http.get(this.serverUrl)
            .map(res => res.json());
    }

    public post(task: Task) {
        return this._http.post(this.serverUrl, JSON.stringify(task))
            .map(res => res.json());
    }

    public delete(taskId: number) {
        return this._http.delete(this.serverUrl + '/' + taskId)
            .map(res => res.json());
    }
}
