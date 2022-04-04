import { Component, OnInit } from '@angular/core';
import { Convert } from 'src/app/Class/Convert';
import { ConvertServService } from 'src/app/Service/convert-serv.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  newcon:Convert[]
  constructor(private conv:ConvertServService) {
this.newcon=
// [{typeFrom:'aaa',typeTo:'fgg',valueFrom:0,valueTo:0,dateConvert:''}];
this.conv.conver;
// = this.newcon
}

  ngOnInit(): void {
  }

}
