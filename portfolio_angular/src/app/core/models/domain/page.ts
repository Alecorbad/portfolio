import {Type} from "@angular/core";
import {BasePageComponent} from "../../components/base-page/base-page.component";

export class Page{
  data: PageData;
  route: string;
  component: Type<any>;

  constructor(data: PageData, route: string, component: Type<BasePageComponent>){
    this.data = data;
    this.route = route;
    this.component = component;
  }
}

export interface PageData{
  id: string;
  title: string;
  headColor?: string;
}
