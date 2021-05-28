import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CscService } from 'src/app/csc.service';
import { ResultComponent } from '../result/result.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  createDemoForm: FormGroup;
  states:{};
  cities:{};

  constructor(private cscService:CscService,) { }

  ngOnInit(): void {
    this.cscService.getStates().subscribe(
      data => this.states=data
    );

    this.createDemoForm=new FormGroup({
      state:new FormControl(''),
      city: new FormControl(''),
    });

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
