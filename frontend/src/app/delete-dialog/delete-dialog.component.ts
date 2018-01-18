import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
import {MatDialogRef} from '@angular/material';
import { UserService } from '../services/user.service';
import { Worker } from '../worker';


@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.css']
})
export class DeleteDialogComponent implements OnInit {
  worker: Worker;

  constructor(public thisDialogRef: MatDialogRef<DeleteDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Worker,
              private userService: UserService) { }

  ngOnInit() {
  }
  onCloseConfirm() {
    this.worker = this.data;
      this.userService.deleteWorker(this.worker.id)
        .toPromise()
        .then( () => {
          location.reload();
        })
        .catch(this.handleError);
    this.thisDialogRef.close('Confirm');

  }
  onCloseCancel() {
    this.thisDialogRef.close('Cancel');
  }
  private handleError(error: any): Promise<any> {
    console.error('Some error occured', error);
    return Promise.reject(error.message || error);
  }
}
