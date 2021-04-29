import { Component, OnInit } from '@angular/core';
import { PatientService } from '../patient.service';



@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {
  
  constructor(private patientService: PatientService) { }

  ngOnInit(): void {
  }

  get patients() {
    return this.patientService.getAllPatients();
  }

}
