import { IProduct } from './../Models/iproduct';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ProductService } from 'src/app/Service/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  errMsg:string=''
  prdId:any
  prodDet?:IProduct
  constructor(private activatedRoute:ActivatedRoute,private postSrv:ProductService,private router:Router) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params:ParamMap)=>{
      this.prdId=params.get("id")
    this.getProdDetails()
    })
  }
  getProdDetails() {
    this.postSrv.getProductById(this.prdId).subscribe(prdData=>{
      this.prodDet=prdData},error=>{
        this.errMsg=error
      }
    )
  }

}
