import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { AdminComponent } from './admin.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './product-list/product.service';

@NgModule({
    declarations : [
        AdminComponent,
        ProductListComponent,
        ProductEditComponent
    ],
    imports : [
        CommonModule,
        FormsModule,
        HttpClientModule,
        AdminRoutingModule
    ],
    providers : [
        ProductService
    ]
})
export class AdminModule {
    constructor(){
        console.log("Admin Module Loaded...");
    }
}