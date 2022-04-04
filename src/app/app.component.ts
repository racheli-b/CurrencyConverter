import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {NgbNavChangeEvent} from '@ng-bootstrap/ng-bootstrap';
import { Convert } from './Class/Convert';
import { ConvertServService } from './Service/convert-serv.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProjectConverter';
  // active;
  disabled = true;
// converterlist:Convert[]
  onNavChange(changeEvent: NgbNavChangeEvent) {
  
      changeEvent.preventDefault();
    
  }

  toggleDisabled() {
    this.disabled = !this.disabled;
    if (this.disabled) {
      // this.active = 1;
    }
  }

  constructor(private router:Router,private route:ActivatedRoute,private conv:ConvertServService){
    // this.converterlist=[]
    
  }
  ChangeToAbout(){
    this.router.navigate(['about'])
  }
  ChangeToConverter(){
    this.router.navigate(['converter'])
  }
}



