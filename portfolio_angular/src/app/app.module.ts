import {Injector, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomepageComponent } from './core/pages/homepage/homepage.component';
import { FooterComponent } from './core/layout/footer/footer.component';
import { HeadbarComponent } from './core/layout/headbar/headbar.component';
import { MasterComponent } from './core/layout/master/master.component';
import {PageService} from "./core/services/domain/page.service";
import { ArticoliComponent } from './core/pages/articoli/articoli.component';


export let AppInjector: Injector;

@NgModule({
  providers: [PageService],
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    HomepageComponent,
    FooterComponent,
    HeadbarComponent,
    MasterComponent,
    ArticoliComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
})
export class AppModule {

  constructor(private injector: Injector) {
    AppInjector = this.injector;
  }

}
