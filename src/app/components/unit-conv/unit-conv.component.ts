import { Component, OnInit } from '@angular/core';
import {MatListModule} from '@angular/material/list';

@Component({
  selector: 'app-unit-conv',
  templateUrl: './unit-conv.component.html',
  styleUrls: ['./unit-conv.component.css']
})
export class UnitConvComponent implements OnInit {

  ddData :any = [];
  FrmUnit:any = ['km' , 'ml' , 'yard'];
  selectedIndex:any;
  selectedAgent: string = "Select Physical Quantity";
  constructor() { }

  ngOnInit() {
  }
  getValue(m:any){

  }
  lUsers: any[] = [
    { id: 1, Name: 'Billy Williams', Gender: 'male' },
    { id: 2, Name: 'Sally Ride', Gender: 'female'}
];
curUser: any = this.lUsers[0];
setNewUser(id: any): void {
  console.log(id);
  // Match the selected ID with the ID's in array
  this.curUser = this.lUsers.filter(value => value.id === parseInt(id));
  console.log(this.curUser);
}
  ChangeAgent() { 
    // this.selectedAgent = newAgent.agentName;
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
