import { Component, OnInit } from '@angular/core';
import { CscService } from 'src/app/csc.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  constructor(private cscService:CscService) { }

  ngOnInit(): void {
  }

}
