import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Convert } from '../Class/Convert';
// import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConvertServService {
conver:Convert[]=[]
listCurrency:string[]=[]

// typeFrom:string='';
// typeTo:string='';
// valueFrom:number=0;
// valueTo:number=0;
// dateConvert:Date=new Date();
  // constructor() {
    constructor(public http:HttpClient,private router:Router) {
    // this.conver=new Convert()
    this.listCurrency=["AED",    "AFN",    "ALL",    "AMD",    "ANG",    "AOA",    "ARS",    "AUD",    "AWG",    "AZN",    "BAM",
    "BBD",    "BDT",    "BGN",    "BHD",    "BIF",    "BMD",    "BND",    "BOB",    "BRL",    "BSD",    "BTC",    "BTN",    "BWP",
    "BYN",    "BYR",    "BZD",    "CAD",    "CDF",    "CHF",    "CLF",    "CLP",    "CNY",    "COP",    "CRC",    "CUC",    "CUP",
    "CVE",    "CZK",    "DJF",    "DKK",    "DOP",    "DZD",    "EGP",    "ERN",    "ETB",    "EUR",    "FJD",    "FKP",    "GBP",
    "GEL",    "GGP",    "GHS",    "GIP",    "GMD",    "GNF",    "GTQ",    "GYD",    "HKD",    "HNL",    "HRK",    "HTG",    "HUF",
    "IDR",    "ILS",    "IMP",    "INR",    "IQD",    "IRR",    "ISK",    "JEP",    "JMD",    "JOD",    "JPY",    "KES",    "KGS",
    "KHR",
    "KMF",
    "KPW",
    "KRW",
    "KWD",
    "KYD",
    "KZT",
    "LAK",
    "LBP",
    "LKR",
    "LRD",
    "LSL",
    "LTL",
    "LVL",
    "LYD",
    "MAD",
    "MDL",
    "MGA",
    "MKD",
    "MMK",
    "MNT",
    "MOP",
    "MRO",
    "MUR",
    "MVR",
    "MWK",
    "MXN",
    "MYR",
    "MZN",
    "NAD",
    "NGN",
    "NIO",
    "NOK",
    "NPR",
    "NZD",
    "OMR",
    "PAB",
    "PEN",
    "PGK",
    "PHP",
    "PKR",
    "PLN",
    "PYG",
    "QAR",
    "RON",
    "RSD",
    "RUB",
    "RWF",
    "SAR",
    "SBD",
    "SCR",
    "SDG",
    "SEK",
    "SGD",
    "SHP",
    "SLL",
    "SOS",
    "SRD",
    "STD",
    "SVC",
    "SYP",
    "SZL",
    "THB",
    "TJS",
    "TMT",
    "TND",
    "TOP",
    "TRY",
    "TTD",
    "TWD",
    "TZS",
    "UAH",
    "UGX",
    "USD",
    "UYU",
    "UZS",
    "VEF",
    "VND",
    "VUV",
    "WST",
    "XAF",
    "XAG",
    "XAU",
    "XCD",
    "XDR",
    "XOF",
    "XPF",
    "YER",
    "ZAR",
    "ZMK",
    "ZMW",
    "ZWL"]
   
   }
   getTextFile(filename: string) {
    // The Observable returned by get() is of type Observable<string>
    // because a text response was specified.
    // There's no need to pass a <string> type parameter to get().
    return this.http.get(filename, {responseType: 'text'});
      // .pipe(
      //   tap( // Log the result or error
      //   {
      //     next: (data) => this.log(filename, data),
      //     error: (error) => this.logError(filename, error)
      //   }
      //   )
      // );
  }
   addConst(newConst:Convert)
   {
     this.conver.push(newConst);
   }
   getConvrters(){
     return this.conver;
   }
}
