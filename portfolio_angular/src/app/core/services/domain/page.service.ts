import {Injectable} from '@angular/core';
import {Page, PageData} from "../../models/domain/page";
import {HomepageComponent} from "../../pages/homepage/homepage.component";
import { SecondaPaginaComponent } from '../../pages/seconda-pagina/seconda-pagina.component';
import { TerzaPaginaComponent } from '../../pages/terza-pagina/terza-pagina.component';
import { PrimaPaginaComponent } from '../../pages/prima-pagina/prima-pagina.component';
import { BaseService } from '../base.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { BasePageComponent } from '../../components/base-page/base-page.component';

@Injectable({
  providedIn: 'root'
})
export class PageService{
  private readonly _pages: Page[] = [
    new Page({id: "homepage", title: "Homepage", headColor: "#800080"}, "homepage", HomepageComponent),
    new Page({id: "first", title: "Prima settimana", headColor: "#FF4D6D"}, "prima", PrimaPaginaComponent),
    new Page({id: "second", title: "Seconda settimana", headColor: "#008000"}, "seconda", SecondaPaginaComponent),
    new Page({id: "third", title: "Terza settimana", headColor: "#0000FF"}, "terza", TerzaPaginaComponent),
  ];
  private _homePage: Page;
  private _selectedPage: BehaviorSubject<Page>;
  public $selectedPage: Observable<Page>;



  constructor() {
    this._homePage = this._pages[0];
    this._selectedPage =  new BehaviorSubject<Page>(this._homePage);
    this.$selectedPage = this._selectedPage.asObservable();
  }

  get homePage(): Page{
    return this._homePage;
  }

  get pages(): Page[]{
    return this._pages;
  }


  set selectedPage(page: Page){
    if(this._pages.find(p => p.data.id === page.data.id)){
      this._selectedPage.next(page);
    }
  }

  get selectedPage(): Page{
    return this._selectedPage.value;
  }

 
}

