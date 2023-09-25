import { Injectable } from '@angular/core';
import {HttpService} from "./http.service";
import {AppInjector} from "../../app.module";
import {NavigationExtras, Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  httpService: HttpService;
  router: Router;

  constructor() {
    this.httpService = AppInjector.get(HttpService);
    this.router = AppInjector.get(Router);
  }


  public navigate(commands: any[], extras?: NavigationExtras){
    this.router.navigate(commands, extras).catch(() => {
      console.log("Impossibile aprire la pagina richiesta")
    });
  }

  public get currentUrl(): string{
    return this.router.url;
  }



}
