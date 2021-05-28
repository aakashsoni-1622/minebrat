import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CscService {

  public apiBaseUrl=' http://api.minebrat.com/api/v1/states';

  constructor(private http:HttpClient) { }

  getStates() {
    return this.http.get(`${this.apiBaseUrl}api/v1/states`).pipe(
      catchError(this.handleError)
    );
  }

  getCities(stateId:number) {
    return this.http.get(`${this.apiBaseUrl}api/v1/cities/${stateId}`);
  }

  private handleError(error : HttpErrorResponse){
    if(error.error instanceof ErrorEvent)
    {
      console.error('An error occured ',error.error.message);
    } else {
      console.log(`Backend code ${error.status},`+`body is ${error.error}`);
      
    }
    return throwError('Something bad... Try Again');
  }

}
