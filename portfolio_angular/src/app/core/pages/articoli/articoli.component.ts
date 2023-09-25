import { Component } from '@angular/core';
import {BasePageComponent} from "../../components/base-page/base-page.component";

@Component({
  selector: 'app-articoli',
  templateUrl: './articoli.component.html',
  styleUrls: ['./articoli.component.css']
})
export class ArticoliComponent extends BasePageComponent{

  constructor() {
    super();
  }
}
