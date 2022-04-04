import { Component, OnInit } from '@angular/core';
import { Convert } from 'src/app/Class/Convert';
import { ConvertServService } from 'src/app/Service/convert-serv.service';
import {FormControl, FormGroup} from '@angular/forms';
import { convertActionBinding } from '@angular/compiler/src/compiler_util/expression_converter';
import { Observable } from 'rxjs';
// import {HttpClient} from '@angular/common/http';

// import {FilterJson} from "./filter-json";
@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent implements OnInit {
  stringObject:any;
  stringJson: any;
  json:any;
  listt:string[]=[]
  // typeCurrency:rates=new rates();
Converter:Convert=new Convert();
access_key:String=  '80ca93e144bae0a393287b69db2dd1e0';
  url:string= 'https://api.exchangeratesapi.io/v1/convert?access_key=' + this.access_key +'&from=' + this.Converter.typeFrom + '&to=' + this.Converter.typeTo + '&amount=' + this.Converter.valueFrom

  constructor(private conv:ConvertServService) { 
    
    this.listt=conv.listCurrency;
    this.Converter.valueFrom=0;;
    this.Converter.valueTo=0;
    this.Converter.typeFrom=this.listt[0];
    this.Converter.typeTo=this.listt[0];
  this.url= 'http://api.exchangeratesapi.io/v1/latest?access_key=80ca93e144bae0a393287b69db2dd1e0&format=1'
  this.conv.getTextFile(this.url)
      .subscribe(results => this.json = results);

   

  }
 


   
  
  ngOnInit(): void {

    
  }

  
addConv(){
  this.stringObject = JSON.parse(this.json);
  // this.typeCurrency = this.stringObject.rates;
    console.log(this.stringObject.rates[this.Converter.typeFrom]); // 'Bob', 47
    debugger
  this.convertfanc();
  this.conv.addConst(this.Converter);
}
e:number=0;
convertfanc(){
  //eur
 this.e= this.Converter.valueFrom/this.stringObject.rates[this.Converter.typeTo]
  
 this.Converter.valueTo= this.e*this.stringObject.rates[this.Converter.typeFrom];

}

ChangeCurrency1()
{
  this.addConv();
}
ChangeCurrency2()
{
  this.addConv();}
 }