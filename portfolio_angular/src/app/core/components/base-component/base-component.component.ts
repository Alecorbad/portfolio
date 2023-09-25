import {Component, OnDestroy} from '@angular/core';
import {lastValueFrom, Observable, Subject} from 'rxjs';
import {NavigationExtras, Router} from "@angular/router";
import {AppInjector} from "../../../app.module";
import {BaseService} from "../../services/base.service";
import {HttpErrorResponse} from "@angular/common/http";
import {DataResponse, ListDataResponse} from "../../models/http.models";

@Component({ template: '' })
export abstract class BaseComponent implements OnDestroy {
  private baseService: BaseService;

  protected componentDestroyed$ = new Subject<boolean>();
  // public userCorrente: LoggedUser | null = null;
  // public itemsPageSize = Constants.PAGE_SIZE;
  // public shortItemsPageSize = Constants.SHORT_PAGE_SIZE;


  constructor() {
    this.baseService = AppInjector.get(BaseService);
    this.baseService.router = AppInjector.get(Router);
  }

  ngOnDestroy(): void {
    this.componentDestroyed$.next(true);
    this.componentDestroyed$.complete();
  }


  /* Funzioni di routing */
  protected navigate(commands: any[], extras?: NavigationExtras){
    this.baseService.navigate(commands, extras);
  }

  protected getCurrentPageUrl(){
    return this.baseService.currentUrl;
  }

  protected get routerEvents(){
    return this.baseService.router.events;
  }




  // public get displayDateFormat(): string {
    // return AppConstants.DATE_DISPLAY_FORMAT;
  // }

  // public get displayLiteralDateFormat(): string {
    // return AppConstants.DATE_LITERAL_DISPLAY_FORMAT;
  // }

  private static DefaultYearRange?: string;
  public get yearRange(): string {
    if (!BaseComponent.DefaultYearRange){
      const currentYear = new Date().getFullYear();
      BaseComponent.DefaultYearRange = `${currentYear - 80}:${currentYear}`;
    }
    return BaseComponent.DefaultYearRange;
  }

  private static BirthYearRange?: string;
  public get yearRangeBirth(): string {
    if (!BaseComponent.BirthYearRange){
      const currentYear = new Date().getFullYear();
      BaseComponent.BirthYearRange = `${currentYear - 80}:${currentYear - 18}`;
    }
    return BaseComponent.BirthYearRange;
  }
}
