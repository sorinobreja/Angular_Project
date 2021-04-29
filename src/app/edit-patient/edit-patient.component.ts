import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PatientService } from '../patient.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Patient } from '../patient';

@Component({
  selector: 'app-edit-patient',
  templateUrl: './edit-patient.component.html',
  styleUrls: ['./edit-patient.component.css']
})
export class EditPatientComponent implements OnInit {

  @Input() patientOrderNumber: number;
  patientForm: FormGroup;
  patient: Patient;

  constructor(private modalService: NgbModal, private patientService: PatientService) {
  }

  ngOnInit(): void {
    this.patient = this.patientService.getPatientByOrderNumber(this.patientOrderNumber);
    this.patientForm = new FormGroup(
      {
      familyName: new FormControl(''),
      givenName: new FormControl(''),
      dateOfBirth: new FormControl(''),
      gender: new FormControl(''),
      cnp: new FormControl(''),
      phoneNumber: new FormControl(''),
      orderNumber: new FormControl(''),
    });
  }

  open(content) {
    this.modalService.open(content);
  }

  get f(){ return this.patientForm.controls;}
  

  onSubmit() {
    this.patientService.updatePatientByOrderNumber(this.patientOrderNumber, this.patient);
  }

}
