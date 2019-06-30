import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product-list/product.service';
import { Product } from '../product-list/product.model';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  message : string = '';
  productId : number = 0;
  product : Product = new Product();

  constructor(private activatedRoute : ActivatedRoute,private prodcutService:ProductService,private location : Location) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(
      (paramMap)=>{
        this.productId = parseInt(paramMap.get('id'));
        this.getProductById(this.productId);
      }
    )
  }

  getProductById(id : number):void{
    this.prodcutService.getProductById(id).subscribe(
      (product : Product)=>{
         this.product = product; 
      }
    )
  }

  update(frm : NgForm):void{
    if(frm.valid){
      this.prodcutService.update(this.product).subscribe(
        (product : Product)=>{
          this.message = "Product with "+product.id + " has been updated successfully.";
        },
        (error)=>{
          this.message = error;
        }
      )
    }
  }

  back():void{
    this.location.back();
  }
}
