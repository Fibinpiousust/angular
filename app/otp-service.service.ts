import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OtpServiceService {
URL="http://localhost:5000/"
  constructor(private http:HttpClient) { }

  generateOtp()
  {
    return this.http.get(this.URL);
  }
}
