import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { WorkerListComponent } from './worker-list.component';
import { WorkerService } from './worker.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



import { UsertableComponent } from './components/usertable/usertable.component';

// Another approach
import { MatTableModule } from '@angular/material';
import { UserService } from './services/user.service';

import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';

import {MatCardModule} from '@angular/material';
import {MatButtonModule} from '@angular/material';
import {MatDialogModule} from '@angular/material';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditDialogComponent } from './edit-dialog/edit-dialog.component';
import { ViewDialogComponent } from './view-dialog/view-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    WorkerListComponent,
    UsertableComponent,
    DeleteDialogComponent,
    EditDialogComponent,
    ViewDialogComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  providers: [
    WorkerService,
    UserService
  ],
  entryComponents: [
    DeleteDialogComponent,
    ViewDialogComponent,
    EditDialogComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
