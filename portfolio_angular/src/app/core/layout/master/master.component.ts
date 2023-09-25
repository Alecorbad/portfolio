import {Component, HostBinding} from '@angular/core';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css'],
})
export class MasterComponent {

  @HostBinding('style.position') get positionBinding(): string | null { return "relative";}

}


