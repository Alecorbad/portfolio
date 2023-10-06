import { Component, OnInit } from '@angular/core';
import {BasePageComponent} from "../../components/base-page/base-page.component";

@Component({
  selector: 'app-prima-pagina',
  templateUrl: './prima-pagina.component.html',
  styleUrls: ['./prima-pagina.component.css']
})
export class PrimaPaginaComponent extends BasePageComponent implements OnInit{

  public codeSamples: Map<string, string> = new Map<string, string>();

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.settingCodeSamples();

  }



   goToPreviousPage(){

    if(!this.pageData) return;
    let index: number | undefined = this.pageService.pages.findIndex(page => page.data.id === this.pageData!.id);
    if(index && index > 0){
      this.navigate([this.pageService.pages[index-1].route]);
      this.pageService.selectedPage = this.pageService.pages[index-1];
    }
  }


  
  settingCodeSamples(){
    this.codeSamples.set(
      "code_1", 
    ` <link href="style.css" rel="stylesheet" type="text/css">`);

    this.codeSamples.set(
      "code_2",
      `<font face="Palatino Linotype">`);

    this.codeSamples.set(
       "code_3", 
        `"#title-container>div {
          margin: auto auto;
          text-align: center
        }"`);

    this.codeSamples.set(
          "code_4",
          `#title-container>div h1 {
            font-size: 3rem;
            color: #FFFFFF;
            text-shadow: #FFF 0px 0px 5px, #8e2071 0px 0px 10px, 
            #FFF 0px 0px 15px, 
            #FF2D95 0px 0px 20px, #FF2D95 0px 0px 30px, 
            #FF2D95 0px 0px 40px, 
            #FF2D95 0px 0px 50px, #FF2D95 0px 0px 75px;
          }`);

    this.codeSamples.set(
            "code_5",
            `#shadow {
              object-fit: cover;
            
              z-index: -1;
              filter: brightness(90%);
              box-shadow: 8px -16px 30px 0px rgba(0, 0, 0, 0.23);
              -webkit-box-shadow: -12px -6px 30px 0px rgba(0, 0, 0, 1);
              -moz-box-shadow: 8px -6px 30px 0px rgba(0, 0, 0, 0.86);
            }`);

    this.codeSamples.set(
              "code_6",
              `#image {
                position: absolute;
                left: 50px;
                bottom: -1rem;
                object-fit: cover;
                z-index: 0;
                border: 1px solid lightgray;
              }`);

    this.codeSamples.set(
                "code_7",
            `<img id="shadow" src="./assets/sfondo.jpg" width="170" height="180">
            <img id="image" src="./assets/logo-youta.jpg" width="150" height="160">`
              );

    this.codeSamples.set(
                "code_8",
                `#cursor{
                  cursor: pointer;
                   }`);

    this.codeSamples.set(
                    "code_9",
                    `<font color="#FF00FF">`
                  );

    this.codeSamples.set(
                "code_10",
                `#buttons>li>a {
                  width: 8rem;
                  height: 2rem;
                  background-color: #e94196;
                  cursor: pointer;
                
                  transition: .3s;
                  border: 1px solid lightgray;
                  border-radius: 6px;
                
                  text-decoration: none;
                  color: white;
                
                  
                  display: flex;
                  align-items: center;
                  justify-content: center;
                }`);

    this.codeSamples.set(
          "code_11",
          `#buttons>li:hover>a {
            background-color: #E688BA;
            transition: .3s;
            color: black;
          }`);

    this.codeSamples.set(
        "code_12",
        ` <a href="index.html"> Home </a>`
      );
  }

}
