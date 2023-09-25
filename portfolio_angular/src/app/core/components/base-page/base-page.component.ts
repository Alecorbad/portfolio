import {PageService} from "../../services/domain/page.service";
import {PageData} from "../../models/domain/page";
import {AppInjector} from "../../../app.module";
import {BaseComponent} from "../base-component/base-component.component";
import {filter, takeUntil} from "rxjs";
import {NavigationEnd} from "@angular/router";

export class BasePageComponent extends BaseComponent{
  pageData: PageData | undefined;

  protected pageService: PageService

  constructor(){
    super();
    this.pageService = AppInjector.get(PageService);


    this.setSubscriptions();
  }

  setSubscriptions(){
    this.routerEvents
      .pipe(
        filter(event => event instanceof NavigationEnd),
        takeUntil(this.componentDestroyed$)
      )
      .subscribe(() => {

        // Eseguo la tua funzione solo quando la route cambia
        let pageRoute: string = this.getCurrentPageRoute();
        const page = this.pageService.pages.find(p => pageRoute === p.route);
        if (page) {
          // Aggiorno il pageData solo se la pagina è stata trovata
          this.pageData = page.data;
        } else {
          // Se la pagina non è stata trovata imposto pageData come undefined
          this.pageData = undefined;
        }
      });
  }

  getCurrentPageRoute(){
    return this.getCurrentPageUrl().split('/')[1];
  }

}
