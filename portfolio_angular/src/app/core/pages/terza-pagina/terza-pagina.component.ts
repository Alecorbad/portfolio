import { Component } from '@angular/core';
import {BasePageComponent} from "../../components/base-page/base-page.component";

@Component({
  selector: 'app-homepage',
  templateUrl: './terza-pagina.component.html',
  styleUrls: ['./terza-pagina.component.css']
})
export class TerzaPaginaComponent extends BasePageComponent{


  constructor() {
    super();
  }
}
