import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

import {Config} from './../config';

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

    public post(data:any) {
        return this._http.post(this.serverUrl, JSON.stringify(data))
            .map(res => res.json());
    }

    public put(taskId:number, data:any) {
        return this._http.put(this.serverUrl + '/' + taskId, JSON.stringify(data))
            .map(res => res.json());
    }

    public destroy(taskId: number) {
        return this._http.delete(this.serverUrl + '/' + taskId)
            .map(res => res.json());
    }
}
