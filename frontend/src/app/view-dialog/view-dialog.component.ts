import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {DeleteDialogComponent} from '../delete-dialog/delete-dialog.component';
import {Worker} from '../worker';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-view-dialog',
  templateUrl: './view-dialog.component.html',
  styleUrls: ['./view-dialog.component.css']
})
export class ViewDialogComponent implements OnInit {
  worker: Worker;
  constructor(public thisDialogRef: MatDialogRef<DeleteDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Worker,
              private userService: UserService) { }

  ngOnInit() {
    this.worker = this.data;
  }
  onCloseCancel() {
    this.thisDialogRef.close('Cancel');
  }
  private handleError(error: any): Promise<any> {
    console.error('Some error occured', error);
    return Promise.reject(error.message || error);
  }

}
