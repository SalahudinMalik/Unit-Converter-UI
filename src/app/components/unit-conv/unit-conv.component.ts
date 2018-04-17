import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-unit-conv',
  templateUrl: './unit-conv.component.html',
  styleUrls: ['./unit-conv.component.css']
})
export class UnitConvComponent implements OnInit {

  ddData :any = [];
  selectedAgent: string = "Select Agent";
  constructor() { }

  ngOnInit() {
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
