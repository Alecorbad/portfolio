import { Injectable } from '@angular/core';
import {HttpService} from "./http.service";
import {AppInjector} from "../../app.module";
import {NavigationExtras, Router} from "@angular/router";

@Injectable({
  providedIn: 'root',
})
export class BaseService {
  httpService: HttpService;
  router: Router;

  constructor(
    router: Router,
    httpService: HttpService
    ) {
    this.httpService = httpService;
    this.router = router;
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
