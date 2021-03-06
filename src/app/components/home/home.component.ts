import { Component, OnInit } from '@angular/core';
import {AuthService}  from '../../services/auth.service';
import { Router } from  "@angular/router";
import {DataService} from '../../services/data.service';
// Deploy on firebase
//https://www.youtube.com/watch?v=mF7FTWHS3ys&t=13s
// https://arth-e37f3.firebaseapp.com
// firebase login
// firebase init
//firebase deploy

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router, private dataService: DataService) { }

  ngOnInit() {
  }

  logout() {
    this.authService.logout();
  }

  addInvoice(){
    this.dataService.publishLastUpdate('');
    this.router.navigate(['/invoice']);
  }

}
