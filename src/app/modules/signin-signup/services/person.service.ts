import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { signupuser } from '../models/Signup';



@Injectable({
  providedIn: 'root'
})
export class sign_UpService {
private url="SigninControllor";
  constructor(private http:HttpClient) { }
  public getPerson():Observable<signupuser[]>{
  
    return this.http.get<signupuser[]>(`${environment.apiUrl}/${this.url}`);

  }
  public CreateUser(user:signupuser):Observable<signupuser[]>{
    return this.http
    .post<signupuser[]>(`${environment.apiUrl}/${this.url}`,user);
  }
  
}
