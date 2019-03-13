import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import {DataService} from '../data.service';
import { Router } from  "@angular/router";
import { ValidatorFn, AbstractControl } from '@angular/forms';
import {minValueValidator, greateThanZero}  from '../validators/validator';


@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {
  invoiceFrom = new FormGroup({
    no: new FormControl(''),
    type: new FormControl(''),
    billDate: new FormControl(''),
    dueDate: new FormControl(''),
    billedTo: new FormControl(''),
    billedToName: new FormControl(''),
    amount: new FormControl(''),
    amountRcvd: new FormControl('')
  });

  constructor(private fb: FormBuilder, private dataService: DataService , private router: Router) { 
    this.invoiceFrom = this.fb.group({
      no: ['', Validators.required],
      type: ['', Validators.required],
      billDate: ['', Validators.required],
      dueDate: ['', Validators.required],
      billedTo: ['', Validators.required],
      amount: ['', Validators.required, greateThanZero],
      amountRcvd: ['', Validators.required]
    });
    this.populateFrom();
  }
  
  populateFrom(){
   // this.invoiceFrom.controls['no'].setValue('ALS1101');
   // console.log('this.invoiceFrom is ', this.invoiceFrom);
  }

  ngOnInit() {
    
  }

  onSubmit(val){
  console.log('New Invoice added/updated successfully',val);
  this.dataService.addInvoice(val);
  this.router.navigate(['/home']);
  }
  gotoHome(){
    this.router.navigate(['/home']);
  }

}