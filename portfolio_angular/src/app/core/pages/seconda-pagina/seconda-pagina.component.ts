import { Component, OnInit } from '@angular/core';
import {BasePageComponent} from "../../components/base-page/base-page.component";
import { Page } from '../../models/domain/page';

@Component({
  selector: 'app-homepage',
  templateUrl: './seconda-pagina.component.html',
  styleUrls: ['./seconda-pagina.component.css']
})
export class SecondaPaginaComponent extends BasePageComponent implements OnInit {


  public codeSamples: Map<string, string> = new Map<string, string>();


  constructor() {
    super();

  }

  ngOnInit(): void {
    this.settingCodeSamples();

  }



  goToPreviousPage(){
    // Controllo che la pagina esista
    if(!this.pageData) return;

    //Trovo l'index della pagina corrente all'interno dell'array di pages
    let index: number | undefined = this.pageService.pages.findIndex(page => page.data.id === this.pageData!.id);

    //Controllo di aver trovato effettivamente la pagina
    if(index && index > 0){
      
      //Navigo all'index -1 (pagina precedente) e seleziono la pagina nel page.service (Aggiorno headbar)
      this.navigate([this.pageService.pages[index-1].route]);
      this.pageService.selectedPage = this.pageService.pages[index-1];

    }
  }

  settingCodeSamples(){
    this.codeSamples.set(
      "code_1",
      ` this.pages = [
        new Page({id: "homepage", title: "Homepage",
        headColor: "#800080"}, "homepage", HomepageComponent),
        new Page({id: "first", title: "Prima settimana",
        headColor: " #e94196"}, "prima", PrimaPaginaComponent),
        new Page({id: "second", title: "Seconda settimana",
        headColor: "#32CD32"}, "seconda", SecondaPaginaComponent),
        new Page({id: "third", title: "Terza settimana",
        headColor: "#0000FF"}, "terza", TerzaPaginaComponent),
      ];`);
      this.codeSamples.set(
        "code_2",
        `#footer{
          height: 100%;
          width: 100%;
          background: white;
        }`);
        this.codeSamples.set(
          "code_3",
          `#footer-text-container{
            margin: auto auto;
              text-align: left
          }`);
    }
  
}
