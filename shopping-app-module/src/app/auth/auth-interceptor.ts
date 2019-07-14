import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        //alert(sessionStorage.getItem('token')+" From Interceptor..!");
        let token = sessionStorage.getItem("token");
        if(token){
            req = req.clone({
                setHeaders: {
                  Authorization: `Bearer ${token}`
                }
            });
        }
        return next.handle(req).pipe(
            map(res=>{
                //alert(1);
                return res;
            })
        );        
    }  
}