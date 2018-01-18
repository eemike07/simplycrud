import { Component, OnInit, ViewChild } from '@angular/core';
import { WorkerService } from './worker.service';
import { Worker } from './worker';
import { NgForm } from '@angular/forms';

import { MatPaginator, MatTableDataSource } from '@angular/material';


@Component({
  selector: 'worker-list',
  templateUrl: './worker-list.component.html'
})

export class WorkerListComponent implements OnInit {
  workers: Worker[];
  newWorker: Worker = new Worker();
  editing: false;
  editingWorker: Worker = new Worker();

  displayedColumns = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<Worker>(this.workers);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(
    private workerService: WorkerService
  ) {}

  ngOnInit(): void {
    this.getWorkers();
    this.dataSource.paginator = this.paginator;
  }

  getWorkers(): void {
    this.workerService.getWorkers()
      .toPromise()
      .then(response => {
        this.workers = response;
      })
      .catch(this.handleError);
  }
  createWorker(workerForm: NgForm): void {

  }
  deleteWorker(workerData: Worker): void {
    if (confirm('Are you sure to delete ' + workerData.firstName + '?')) {
    this.workerService.deleteWorker(workerData.id)
      .toPromise()
      .then( () => {
        this.workers = this.workers.filter(worker => worker.id !== workerData.id);
      })
      .catch(this.handleError);

    }
  }
  updateWorker(workerData: Worker): void {

  }
  viewWorker(workerData: Worker): void {

  }
  editWorker(workerData: Worker): void {

  }
  clearEditing(): void {

  }
  private handleError(error: any): Promise<any> {
    console.error('Some error occured', error);
    return Promise.reject(error.message || error);
  }
}
