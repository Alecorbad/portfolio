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
    
    //let var1: string = '';
    //if(this.pageData?.headColor != undefined){
    //  var1 = this.pageData.headColor;
    //  console.log(var1);
    //}
    //else{
    //  var1 = '';
    //}

    //var1 = this.pageData?.headColor != undefined && this.pageData.headColor != '#FFAA23' ? this.pageData.headColor : '';
    //
    //var1 = this.pageData?.headColor  ?? '';

    

  }
}
