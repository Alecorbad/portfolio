import { Component, Input, OnInit } from '@angular/core';
import { BaseComponent } from '../base-component/base-component.component';

@Component({
  selector: 'app-code-visualization',
  templateUrl: './code-visualization.component.html',
  styleUrls: ['./code-visualization.component.css']
})
export class CodeVisualizationComponent extends BaseComponent implements OnInit{
  @Input({required: true}) text?: string;
  @Input() textColor?: string = "white";

  public showTooltip: boolean = false;


  constructor(){
    super();
  }

  ngOnInit(){
  }
 

  copyText(): void {
    navigator.clipboard.writeText(this.text!).catch(() => {
      console.error("Unable to copy text");
    });

    //Compare tooltip
    this.showTooltip = true;

    //Dopo n secondi scompare
    new Promise( resolve => setTimeout(resolve, 1500)).then(() => this.showTooltip = false);

    
  }
}
