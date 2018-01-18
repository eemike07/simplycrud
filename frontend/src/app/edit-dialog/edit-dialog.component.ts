import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.css']
})
export class EditDialogComponent implements OnInit {

  constructor() { }

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
