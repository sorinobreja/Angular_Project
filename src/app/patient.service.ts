import { Injectable } from '@angular/core';
import { Patient } from './patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  

  patients: Patient[] = [
    new Patient({
      familyName: "Oriean",
      givenName: "Alex",
      dateOfBirth: "1985-02-18",
      gender : "M",
      cnp: "1850218007234",
      phoneNumber: "0724782393",
      orderNumber: 1
    }),
    new Patient({
      familyName: "Stan",
      givenName: "Mark",
      dateOfBirth: "1988-04-12",
      gender : "M",
      cnp :"1880412092463",
      phoneNumber: "0739803427",
      orderNumber: 2
    })
    ,
  ];

  constructor() { }

  addPatient(patient: Patient): PatientService {
    
    if (!patient.orderNumber) {
      if (this.patients.length === 0) {
        patient.orderNumber = 1;
      }
      patient.orderNumber = this.getOrderNumber();
    }
    this.patients.push(patient);
    return this;
  }

  getAllPatients(): Patient[]{
    return this.patients;
  }

  deletePatientByNumberOrder(orderNumber: number): PatientService{
    this.patients = this.patients.filter(patient => patient.orderNumber !== orderNumber);
    return this;
  }

  updatePatientByOrderNumber(orderNumber: number, patient: Patient): Patient {
    patient = this.getPatientByOrderNumber(orderNumber);
    let index = this.patients.indexOf(patient);
    if (!patient) {
      return null;
    }
    this.patients[index] = patient;
    return patient;
  }

  getOrderNumber(): number {
    return Math.max(...this.patients.map(patient => patient.orderNumber)) + 1;
  }

  getPatientByOrderNumber(orderNumber: number): Patient{
    return this.patients.filter(patient => patient.orderNumber === orderNumber).pop();
  }
}
