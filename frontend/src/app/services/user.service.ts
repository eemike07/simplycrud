import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Worker } from '../worker';
@Injectable()
export class UserService {
  private serviceUrl = 'http://localhost:4200/api/workers/';

  constructor(private http: HttpClient) { }

  getWorkers(): Observable<Worker[]> {
    return this.http.get<Worker[]>(this.serviceUrl);
  }
  createWorker(worker: Worker): Observable<Worker> {
    return this.http.post<Worker>(this.serviceUrl, worker);
  }
  updateWorker(workerData: Worker): Observable<Worker> {
    return this.http.put<Worker>('${this.serviceUrl}/${workerData.id}', workerData);
  }
  deleteWorker(id: string): Observable<Worker> {
    return this.http.delete<Worker>(this.serviceUrl + id);
  }
}
