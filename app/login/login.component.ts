import { Component, OnInit } from '@angular/core';
import { OtpServiceService } from '../otp-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  enteredOtp:string='';

  constructor(private otp:OtpServiceService) { }

  ngOnInit(): void {
  }

  fnGenerateOtp(){
    this.otp.generateOtp().subscribe((data)=>{
      console.log(data);
      localStorage.setItem("otp",data.toString());
    });
    alert("hello world")
  }

  fnValidateOtp(){
    if(this.enteredOtp==''){
      alert("kindly enter the otp and click the button")
      return;
    }
    var temp = localStorage.getItem("otp");
    if(temp==''){
      alert("kindly generate the otp first");
      return;
    }
    if(this.enteredOtp==temp)
    {
      alert("otp is correct");

    }else{
      alert("invalid otp");
    }
  }

}
