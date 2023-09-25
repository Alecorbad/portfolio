import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PageService} from "./core/services/domain/page.service";
import {Page} from "./core/models/domain/page";

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(private pagesService: PageService) {
    let pages: Page[] = this.pagesService.pages;
    // Recupera le pagine dal servizio PagesService, in questo modo ho definito degli oggetti
    // nel servizio pages che posso recuperare all'occorrenza
    const dynamicRoutes: Routes = pages.map((page) => {
      return {
        path: page.route,
        component: page.component,
      };
    });

    //Imposto l'homePage
    routes.push({ path: '', redirectTo: pagesService.homePage.route, pathMatch: 'full' });
    // Aggiungi le rotte dinamiche al percorso vuoto
    routes.push(...dynamicRoutes);
  }
}
