import { Injectable } from '@angular/core';
import { Globals } from '../Globals';
import { HttpClient, HttpHeaders  ,HttpErrorResponse } from '@angular/common/http';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';


import {Plot} from './models/plot.model';

@Injectable()
export class DataService {

  fullurl:any = '';
  res:any;
  dataObj:any;
  private _options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
  constructor(
    private global:Globals ,
    private http: HttpClient

  ) { }
  //(res) => this.extractData(res)
 

  getAllPQ():Observable<any>{
    this.fullurl = this.global.weburl + 'UnitConv' ;
    // this.fullurl = this.global.weburl + "auth/login";
    
      return  this.http.get(this.fullurl)
        .map((res : Response) => res)
        .catch(this.errorHandler);
     
  }

  getAllPlots():Observable<any>{
    this.fullurl = this.global.weburl + 'plotD/plots' ;
    // this.fullurl = this.global.weburl + "auth/login";
    
      return  this.http.get(this.fullurl)
        .map((res : Response) => res)
        .catch(this.errorHandler);
     
  }
  getLineChart():Observable<any>{
    this.fullurl = '';
    this.fullurl = this.global.weburl + 'charts/lineChart';
    
      return  this.http.get(this.fullurl)
      .map(result => result)
      .catch(this.errorHandler);
     
    
  }
  getAllUnits(pqCode:any):Observable<any>{
    this.fullurl = '';
    this.fullurl = this.global.weburl + 'UnitConv'+'/'+pqCode;
    
      return  this.http.get(this.fullurl)
      .map((result: Response) => result)
      .catch(this.errorHandler);
     
    
    
    
  }
  getConvResult(pqCode:any , fromUnit:string , fromVal:Number , toUnit:string):Observable<any>{
    this.fullurl = '';
    let data:any = JSON.stringify({pqCode , fromUnit , fromVal , toUnit});
    this.fullurl = this.global.weburl + 'UnitR' ;
    
      return  this.http.post<any>(this.fullurl , data , this._options)
      .map((result: Response) => result)
      .catch(this.errorHandler);
     
    
    
    
  }
//   private extractData(res: Response) {
//     if (res.status < 200 || res.status >= 300) {
//           throw new Error('Bad response status: ' + res.status);
//         }
//     let body = res.json();
//     return body || { };
//  }
    
    //console.log(this.fullurl);
  // return this.http.get<String>(this.fullurl)
  //                   .catch(this.errorHandler);
    
  
  
  errorHandler(error: HttpErrorResponse){
    return Observable.throw(error.message || "Server Error");
  }

}
