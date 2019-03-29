import { Component, OnInit } from '@angular/core';
import { DataService} from '../data.service'
 
@Component({
  selector: 'app-receivable-summary',
  templateUrl: './receivable-summary.component.html',
  styleUrls: ['./receivable-summary.component.css']
})
export class ReceivableSummaryComponent implements OnInit {
  objToPopulatUI = [];
  unPaidInvoices;
  dataForDetailTable;
  totalValue :number = 0;
  showDetailsFlag: boolean = false;
  numberOfInvoices: number =0;
  constructor(private dataService: DataService) {
    let allInvoices = this.dataService.data.invoice;
    this.unPaidInvoices  = allInvoices.filter( (val) =>{
      if(val.amountRcvd == "No"){
        this.totalValue = this.totalValue + val.amount;
      }
      return val.amountRcvd == "No";
    });
    this.numberOfInvoices = this.unPaidInvoices.length;
   }

  ngOnInit() {
    this.getObjToPopulateTable();
  }

  getObjToPopulateTable(){
    let clientList = this.dataService.data.clientsList;
      let bills;
      let index = 0;
    for (let i=0;i<clientList.length;i++){ 
      let totalvalue = 0;
      let name = "";
      bills = this.unPaidInvoices.filter((val)=> {
        if (val.billedTo == clientList[i].clientId){
            totalvalue = totalvalue + val.amount;
            name = clientList[i].name;
          }
          return val.billedTo == clientList[i].clientId;
        });
        if(bills.length){
          this.objToPopulatUI.push(bills);
          this.objToPopulatUI[index].name = name;
          this.objToPopulatUI[index].total = totalvalue;
          index++;
        }
    }
  }

  showDetails(invoiceArray){
    this.showDetailsFlag = true;
    console.log('data for  details ', invoiceArray);
    this.dataForDetailTable = invoiceArray;
    for(let i =0; i<invoiceArray; i++){

    }
  }

}
