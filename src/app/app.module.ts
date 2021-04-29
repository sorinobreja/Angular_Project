import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientsComponent } from './patients/patients.component';
import { PatientFormComponent } from './patient-form/patient-form.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RemovePatientComponent } from './remove-patient/remove-patient.component';
import { EditPatientComponent } from './edit-patient/edit-patient.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PatientsComponent,
    PatientFormComponent,
    RemovePatientComponent,
    EditPatientComponent,  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     RouterModule.forRoot([
       { path: '', component: PatientsComponent }
    ]),
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
