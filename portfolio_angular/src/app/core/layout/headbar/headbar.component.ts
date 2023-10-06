import { Component, OnInit } from '@angular/core';
import {Page} from "../../models/domain/page";
import {PageService} from "../../services/domain/page.service";
import {BaseComponent} from "../../components/base-component/base-component.component";
import { Subscription, takeUntil } from 'rxjs';

@Component({
  selector: 'app-headbar',
  templateUrl: './headbar.component.html',
  styleUrls: ['./headbar.component.css']
})
export class HeadbarComponent extends BaseComponent implements OnInit {
    pages: Page[] = [];
    selectedPage!: Page;  
    $selectedPage: Subscription = new Subscription();

    constructor(private pageService: PageService) {
      super();
    }

    ngOnInit(): void {
      this.pages = this.pageService.pages;

      this.$selectedPage = this.pageService.$selectedPage
      .pipe(takeUntil(this.componentDestroyed$))
      .subscribe((page) => {
        this.selectedPage = page;
      });
      
    }


    changePage(newPage: Page){
      this.pageService.selectedPage = newPage;
      this.navigate([newPage.route]);
    }

}
