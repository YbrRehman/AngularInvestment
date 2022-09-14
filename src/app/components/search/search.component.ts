import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InvestmentService } from 'src/app/services/investment.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  
  constructor(private _investmentService:InvestmentService,private _router:Router,private _activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
  }
  show=(propertyName:string,choice:string)=>{

                 this._router.navigate(["/investments",propertyName,choice]);
         }
}
