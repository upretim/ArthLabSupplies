import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title = 'Arth Lab Supplies';

  loginFrom = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  
  constructor(private fb: FormBuilder) { 
    //let emailRegex = "^[a-z0-9_-]{8,15}$";  Validators.pattern(emailRegex)
    this.loginFrom = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  onSubmit(loginVals){
    console.log('Logged in', loginVals);
  }

}
