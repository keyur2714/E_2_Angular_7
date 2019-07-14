import { NgModule } from '@angular/core';
import { Routes,  RouterModule } from '@angular/router';
import { AuthGuard } from '../auth/auth-guard.service';
import { AdminComponent } from './admin.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
const routes : Routes = [
    {
        path : '' , component : ProductListComponent , canActivate : [AuthGuard],
        canActivateChild : [AuthGuard],
        children : [      
          {path : 'list' , component : ProductListComponent},
          {path : 'productEdit/:id' , component : ProductEditComponent }
        ]
    }
];
@NgModule({
    imports : [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule {
   constructor(){
       console.log("Admin Routing Module Loaded...!");
   } 
}