import { Component } from '@angular/core';
import {Page} from "../../models/domain/page";
import {PageService} from "../../services/domain/page.service";
import {BaseComponent} from "../../components/base-component/base-component.component";

@Component({
  selector: 'app-headbar',
  templateUrl: './headbar.component.html',
  styleUrls: ['./headbar.component.css']
})
export class HeadbarComponent extends BaseComponent{
    pages: Page[] = [];

    constructor(private pageService: PageService) {
      super();
      this.pages = this.pageService.pages;
    }

    changePage(newPage: Page){
      this.navigate([newPage.route]);
    }

}
