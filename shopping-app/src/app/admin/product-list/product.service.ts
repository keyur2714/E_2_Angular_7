import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product.model';

@Injectable()
export class ProductService {
    productUrl : string = 'http://localhost:3000/products';

    constructor(private httpClient : HttpClient){}

    getProductList():Observable<Product[]>{
        return this.httpClient.get<Product[]>(this.productUrl);        
    }    

    getProductById(id : number) : Observable<Product> {
        return this.httpClient.get<Product>(this.productUrl+"/"+id);        
    }

    update(product: Product) : Observable<Product>{
        return this.httpClient.put<Product>(this.productUrl+"/"+product.id,product);
    }

    deleteProductById(id: number) : void {
        this.httpClient.delete(this.productUrl+"/"+id);
    }
}