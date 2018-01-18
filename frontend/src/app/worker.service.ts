import { Injectable } from '@angular/core';
import { Worker } from './worker';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class WorkerService {
  private baseUrl = 'http://localhost:4200/api/workers/';

  constructor(protected httpClient: HttpClient) { }
  getWorkers(): Observable<Array<Worker>> {
    return this.httpClient.get<Array<Worker>>(this.baseUrl);
  }
  createWorker(worker: Worker): Observable<Worker> {
    return this.httpClient.post<Worker>(this.baseUrl, worker);
  }
  updateWorker(workerData: Worker): Observable<Worker> {
    return this.httpClient.put<Worker>('${this.baseUrl}/${workerData.id}', workerData);
  }
  deleteWorker(id: string): Observable<Worker> {
    return this.httpClient.delete<Worker>(this.baseUrl + id);
  }
}
