import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { SigninModel } from '../models/signin';


@Injectable({
  providedIn: 'root'
})
export class sign_inService {
private url="SigninControllor";
  constructor(private http:HttpClient) { }
  public getPerson():Observable<SigninModel[]>{
  
    return this.http.get<SigninModel[]>(`${environment.apiUrl}/${this.url}`);

  }
  // public GetLoginData():Observable<SigninModel[]>{
  //   return this.http.put<SigninModel[]>(`${environment.apiUrl}/${this.url}`);
  // }
}
