import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, AbstractControl } from '@angular/forms';
import { PatientService } from '../patient.service';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-patient-form',
  templateUrl: './patient-form.component.html',
  styleUrls: ['./patient-form.component.css']
})
export class PatientFormComponent implements OnInit {

  patientForm: FormGroup;

  numberRegEx = /\-?\d*\.?\d{1,2}/;

  constructor(private modalService: NgbModal, private patientService: PatientService) { }

  

  ngOnInit(): void {
    console.log(this.validateDateOfBirth)
    this.patientForm = new FormGroup({
    familyName: new FormControl('',Validators.required
    ),
    givenName: new FormControl('', Validators.required),
    dateOfBirth: new FormControl('', [Validators.required, this.validateDateOfBirth]),
    gender: new FormControl('', Validators.required),
    cnp: new FormControl('', [Validators.minLength(13), Validators.maxLength(13), Validators.pattern(this.numberRegEx)]),
    phoneNumber: new FormControl('',Validators.pattern(this.numberRegEx)),
    orderNumber: new FormControl(''),
  });
  }

  open(content) {
    this.modalService.open(content);
  }
  
  

  get f(){ return this.patientForm.controls }

  onSubmit() {
    this.patientService.addPatient(this.patientForm.value);
    this.patientForm.reset();
  }

  validateDateOfBirth(control: AbstractControl){
    let inputDateOfBirth = Date.parse(control.value)- 1;
    let currentDate = new Date().getTime();
    if (inputDateOfBirth >= currentDate) {
      return {response: false}
    }
    return null;
  }



}
