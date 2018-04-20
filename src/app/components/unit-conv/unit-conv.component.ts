import { Component, OnInit , OnChanges } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {MatListModule} from '@angular/material/list';
import {DataService} from '../../data.service'
import { PQ } from '../../models/pq.model';


@Component({
  selector: 'app-unit-conv',
  templateUrl: './unit-conv.component.html',
  styleUrls: ['./unit-conv.component.css']
})
export class UnitConvComponent implements OnInit {

  ddData :PQ[] = [];
  FrmUnit:any = [];
  ToUnit:any =[];
  frmSelected:any;
  toSelected:any;
  resultValue:any;
  public unitValue:number;
  selectedPQIndex:any;
  selectedPQ: string = "Select Physical Quantity";
  constructor(
    private dataService : DataService
  ) { }

  ngOnInit() {
    this.dataService.getAllPQ()
      .subscribe(data =>{
        this.ddData = data;
        //console.log("data "+ data);
      });
  }
  getValue(m:any){

  }
 
getFromUnitChange(fromUnit: any): void {
  console.log(fromUnit);
  this.frmSelected = fromUnit;
  this.perfromCal(); 
  // Match the selected ID with the ID's in array
  //this.curUser = this.lUsers.filter(value => value.id === parseInt(id));
  //console.log(this.curUser);
}
getToUnitChange(toUnit:any){
  console.log(toUnit) ;
  this.toSelected = toUnit; 
  this.perfromCal(); 
}
UnitValChange(value:Number){
  this.perfromCal();
  console.log("value " + value);
}
perfromCal(){
  if(this.unitValue != undefined && this.frmSelected != undefined && this.toSelected != undefined)
  {
    this.dataService.getConvResult(this.selectedPQIndex , this.frmSelected , this.unitValue , this.toSelected)
        .subscribe(data =>{
            this.resultValue = data;
            console.log(data);
        });
  }
}
// ngOnChanges(){
//   // if(this.unitValue != undefined){
//   //   console.log("Onchang from : " +this.unitValue + " from UNit " + this.frmSelected + " to Unit "+ this.toSelected );

//   // }
// }
  ChangePQ(sData:PQ) { 
    this.selectedPQ = sData.pqData;
    this.selectedPQIndex = sData.pqId;
    this.dataService.getAllUnits(sData.pqId)
      .subscribe(data => {
        this.FrmUnit = data;
        this.ToUnit = data;
      });
   // this.selectedAgentCode = newAgent.code;
    // let selectPlot: Plot[] = null;
    // // this.dataSource.connect().subscribe(data => {
    // //   console.log(data);
    // // }); 
    // this.dataService.getAgentPlot(this.selectedAgentCode)
    //   .subscribe(data =>{
    //     this.rowsToSelect(data);        
    //   });
  
  }
}
