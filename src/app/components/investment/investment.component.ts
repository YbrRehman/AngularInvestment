import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Investment } from 'src/app/models/investment';
import { InvestmentService } from 'src/app/services/investment.service';

@Component({
  selector: 'app-investment',
  templateUrl: './investment.component.html',
  styleUrls: ['./investment.component.scss']
})
export class InvestmentComponent implements OnInit {
  investments:Investment[]=[];
  planType:string=''
  constructor(private _investmentService:InvestmentService
    , private _router:Router
    ,private _activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {

       this._activatedRoute.paramMap.subscribe(map=>{
        let propertyName=map.get("property");
        let propertyValue=map.get("value");
        let pval=''
        //check if propertyName is purpose
        if(propertyValue)
          pval=propertyValue;
        if(propertyName=='purpose'){
          this._investmentService.getByPurpose(pval).subscribe({
            next:(data)=>{
              console.log(`${data}`);
              this.investments=data;
            }
          })
        }
        if(propertyName=='risk'){
          this._investmentService.getByPurpose(pval).subscribe({
            next:(data)=>{
              console.log(`${data}`);
              this.investments=data;
            }
          })
        }


       })
        this._activatedRoute.paramMap.subscribe((map)=>{ 
        let type=map.get("type"); 
        console.log(`${type}`)
        if(type) this.planType=type;
      
      this._investmentService.getPlansByType(this.planType).subscribe({
        next:(data)=>{
          console.log(`${data}`);
          this.investments=data;
        }
      })
      
      
      })

     
        this._investmentService.getInvestments().subscribe({
        next:(data)=>{this.investments=data;}
          })
         }


      show=(investmentId:number)=>{console.log(`Id number id ${investmentId}`)

       this._router.navigate(["/investments-details",investmentId]);
         }
       

}
