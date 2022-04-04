import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './Component/about/about.component';
import { ConverterComponent } from './Component/converter/converter.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Convert } from './Class/Convert';
import { FormsModule, FormControl, FormGroup} from '@angular/forms';
// import { HttpClient } from '@angular/common/http';
import { HttpClientModule }from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ConverterComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  // ,  HttpClient
    // ,
    // FormControl,
    // FormGroup
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
