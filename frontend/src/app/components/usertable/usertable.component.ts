import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { DataSource } from '@angular/cdk/collections';
import { Worker } from '../../worker';
import { MatDialog } from '@angular/material';
import { DeleteDialogComponent } from '../../delete-dialog/delete-dialog.component';
import {ViewDialogComponent} from '../../view-dialog/view-dialog.component';
import {EditDialogComponent} from '../../edit-dialog/edit-dialog.component';


@Component({
  selector: 'usertable',
  templateUrl: './usertable.component.html',
  styleUrls: ['./usertable.component.css']
})
export class UsertableComponent implements OnInit {
  dataSource = new UserDataSource(this.userService);
  displayedColumns = ['firstName', 'middleInitial', 'lastName', 'email', 'phoneNumber', 'positionCategory', 'dateHired', 'actionsColumn'];
  workers: Worker[];
  constructor(private userService: UserService, public dialog: MatDialog) { }

  ngOnInit() {
    this.getWorkers();
  }

  getWorkers(): void {
    this.userService.getWorkers()
      .toPromise()
      .then(response => {
        this.workers = response;
      })
      .catch(this.handleError);
  }
  viewWorker(workerData: Worker): void {
    console.log('view stuff ' + workerData.lastName);
    const dialogRef = this.dialog.open(ViewDialogComponent, {
      width: '600px',
      data: workerData
    });
  }
  editWorker(workerData: Worker): void {
    console.log('edit stuff ' + workerData.lastName);
    const dialogRef = this.dialog.open(EditDialogComponent, {
      width: '600px',
      data: workerData
    });
  }
  deleteWorker(workerData: Worker) {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '600px',
      data: workerData
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog closed: ${result}`);
    });
  }
  private handleError(error: any): Promise<any> {
    console.error('Some error occured', error);
    return Promise.reject(error.message || error);
  }
}
export class UserDataSource extends DataSource<any> {
  constructor(private userService: UserService) {
    super();
  }
  connect(): Observable<Worker[]> {
    return this.userService.getWorkers();
  }
  disconnect() {}
}
