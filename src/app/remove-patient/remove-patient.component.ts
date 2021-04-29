import { Component, Input, OnInit } from '@angular/core';
import { PatientService } from '../patient.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-remove-patient',
  templateUrl: './remove-patient.component.html',
  styleUrls: ['./remove-patient.component.css']
})
export class RemovePatientComponent implements OnInit {

  @Input() patientOrderNumber: number;

  constructor(private patientService: PatientService, private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  removePatient(patientOrderNumber) {
    this.patientService.deletePatientByNumberOrder(patientOrderNumber);
  }

  open(content) {
    this.modalService.open(content);
   }
}
