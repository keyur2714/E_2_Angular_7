import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { Product } from './product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList : Product[] = [];

  constructor(private productService : ProductService,private router:Router) { }

  ngOnInit() {
    this.getProductList();
  }

  getProductList():void {
    this.productService.getProductList().subscribe(
      (productList : Product[])=>{
        this.productList = productList;
      }
    )
  }

  edit(id:number):void{
    this.router.navigate(['admin/productEdit/',id]);
  }

  delete(id : number):void{
    let confirmMsg = confirm("Are you sure want to delete?");
    if(confirmMsg){
      this.productService.deleteProductById(id);
      this.getProductList(); 
    }    
  }

  addNewProduct():void{
    alert(1);
    //this.router.navigate(['admin/productEdit/']);
  }

}
