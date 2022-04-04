import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './Component/about/about.component';
import { ConverterComponent } from './Component/converter/converter.component';

const routes: Routes = [{
  path:'about',component:AboutComponent
},
{path:'converter',component:ConverterComponent}
,
{path:'',
children:[{path:'about',component:AboutComponent},{path:'converter',component:ConverterComponent}
]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
