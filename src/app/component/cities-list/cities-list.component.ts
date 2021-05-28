import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CscService } from 'src/app/csc.service';

@Component({
  selector: 'app-cities-list',
  templateUrl: './cities-list.component.html',
  styleUrls: ['./cities-list.component.css']
})
export class CitiesListComponent implements OnInit {

  constructor(private http:HttpClient, private cscService:CscService) { }

  createDemoForm: FormGroup;
  states:{};
  cities:{};


  ngOnInit(): void {
  }

  onChangeState(stateId: number) {
    if(stateId) {
      this.cscService.getCities(stateId).subscribe(
        data=>this.cities=data
      );
    } else{
      this.cities=null;
    }
  }


}
