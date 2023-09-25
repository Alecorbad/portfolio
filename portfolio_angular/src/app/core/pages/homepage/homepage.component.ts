import { Component } from '@angular/core';
import {BasePageComponent} from "../../components/base-page/base-page.component";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent extends BasePageComponent{


  constructor() {
    super();
  }
}
