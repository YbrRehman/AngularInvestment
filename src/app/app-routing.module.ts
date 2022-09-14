import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactusComponent } from './components/contactus/contactus.component';
import { HomeComponent } from './components/home/home.component';
import { InvestmentDetailsComponent } from './components/investment-details/investment-details.component';
import { InvestmentComponent } from './components/investment/investment.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'contact', component:ContactusComponent},
  {path:'investments',component:InvestmentComponent},
  {path:'investments-details/:id',component:InvestmentDetailsComponent},
  {path :'investments/:type',component:InvestmentComponent},
  {path :'investments/:property/:value',component:InvestmentComponent},
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'**',component:PagenotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
