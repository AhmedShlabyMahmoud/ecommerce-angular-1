import { Component, OnInit } from '@angular/core';
import { IProduct } from '../Models/iproduct';
import { ProductService } from '../../Service/product.service'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  postList?:IProduct[]
  errMsg:string=''
  constructor(private activatedRoute:ActivatedRoute,private postSrv:ProductService,private router:Router) { }


  slicee(x:string){
    var text =x.split(" ", 3)
    var neww =''
    text.forEach(e=>{
      neww =neww.concat(e)
      neww+=' '
    })
    neww = neww.substring(0, neww.length - 1);
    return neww
  }

  ngOnInit(): void {
    this.postSrv.getAllPosts().subscribe(postData=>{
      this.postList=postData
    },
    error=>{
      this.errMsg=error
    })
  }

}


