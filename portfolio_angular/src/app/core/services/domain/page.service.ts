import {Injectable} from '@angular/core';
import {Page} from "../../models/domain/page";
import {HomepageComponent} from "../../pages/homepage/homepage.component";
import {ArticoliComponent} from "../../pages/articoli/articoli.component";

@Injectable({
  providedIn: 'root'
})
export class PageService {
  private _homePage: Page;
  private _pages: Page[] = [];

  constructor() {
    this.pages = [
      new Page({id: "homepage", title: "Homepage"}, "homepage", HomepageComponent),
      new Page({id: "articles", title: "Articoli"}, "articles", ArticoliComponent),
    ];

    this._homePage = this._pages[0];
  }

  get homePage(): Page{
    return this._homePage;
  }

  get pages(): Page[]{
    return this._pages;
  }

  set pages(pages: Page[]){
    this._pages = pages;
  }
}

